import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper to decode JWT and get userId
const getUserIdFromRequest = (request: NextRequest): number | null => {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '') || '';
    if (!token) {
      const cookieToken = request.cookies.get('jwtToken')?.value;
      if (!cookieToken) return null;
    }
    
    const jwtToken = token || request.cookies.get('jwtToken')?.value || '';
    if (!jwtToken) return null;
    
    const parts = jwtToken.split('.');
    if (parts.length < 2) return null;
    
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const payload = JSON.parse(jsonPayload);
    return payload.id || payload.userId || null;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
};

// GET /api/company-data - Fetch company information for the logged-in user
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userIdParam = url.searchParams.get('userId');

  // ENFORCE: Use only the userId from query param - reject other sources
  console.log('[Company Data API] === DEBUG ===');
  console.log('[Company Data API] Request URL:', request.url);
  console.log('[Company Data API] Raw userId param:', userIdParam);
  console.log('[Company Data API] Auth header:', request.headers.get('authorization')?.substring(0, 20) + '...');

  try {
    let parsedUserId: number | null = null;
    
    // CRITICAL: Only use userId from query param - ignore JWT for this endpoint
    if (userIdParam) {
      parsedUserId = parseInt(userIdParam);
      console.log('[Company Data API] ✓ Using userId from URL param:', parsedUserId);
      if (isNaN(parsedUserId) || parsedUserId <= 0) {
        console.log('[Company Data API] ✗ Invalid userId:', parsedUserId);
        return NextResponse.json({ 
          success: false, 
          error: 'Invalid user ID: ' + userIdParam 
        }, { status: 400 });
      }
    } else {
      console.log('[Company Data API] ✗ No userId in URL - returning empty');
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required in URL. Please login.' 
      }, { status: 401 });
    }

    if (!parsedUserId) {
      console.log('[Company Data API] No userId found - unauthorized');
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required. Please login.' 
      }, { status: 401 });
    }

    console.log('[Company Data API] Fetching data for userId:', parsedUserId);

    // Fetch user info (for status)
    const user = await prisma.user.findUnique({
      where: { id: parsedUserId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      }
    });

    if (!user) {
      console.log('[Company Data API] User not found:', parsedUserId);
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 404 });
    }

// Fetch company data from ORDERS only (NOT from submissions, registered agents, or virtual mailboxes)
    const orders = await prisma.order.findMany({
      where: { userId: parsedUserId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    // Get the primary company info from most recent order
    const primaryCompany = orders[0]?.company 
      ? { 
          name: orders[0].company, 
          type: 'order',
          status: orders[0].status,
          orderId: orders[0].id
        }
      : null;

    // All companies from orders only
    const allCompanies = orders.map(o => ({
      name: o.company,
      type: 'order',
      status: o.status,
      id: o.id,
      date: o.date,
      state: o.state,
      amount: o.amount
    })).filter(c => c.name);

console.log('[Company Data API] Found companies:', allCompanies.length);
    console.log('[Company Data API] === END DEBUG ===');

return NextResponse.json({
      success: true,
      requestUserId: parsedUserId,  // Echo back the userId used
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        role: user.role
      },
      primaryCompany,
      companies: allCompanies,
      orderCount: orders.length
    });

  } catch (error) {
    console.error('[Company Data API] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch company data' 
    }, { status: 500 });
  }
}
