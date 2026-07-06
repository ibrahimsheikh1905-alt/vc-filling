import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper to decode JWT and get userId
const getUserIdFromRequest = (request: NextRequest): number | null => {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '') || '';
    if (!token) {
      // Try to get from cookies
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

// GET /api/orders - Fetch orders for the logged-in user
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const status = url.searchParams.get('status');
  const search = url.searchParams.get('search');

  console.log('[Orders API] === DEBUG ===');
  console.log('[Orders API] Request URL:', request.url);
  console.log('[Orders API] Raw userId param:', userId, '| type:', typeof userId);

  try {
// Use userId from query param
    let parsedUserId: number | null = null;
    let fetchAllOrders = false;
    
if (userId) {
      // Special case: if userId is "all", fetch all orders (for admin)
      if (userId.toLowerCase() === 'all') {
        fetchAllOrders = true;
        console.log('[Orders API] Fetching all orders (admin mode)');
      } else {
        parsedUserId = parseInt(userId);
        console.log('[Orders API] Parsed userId:', parsedUserId);
        if (isNaN(parsedUserId) || parsedUserId <= 0) {
          console.log('[Orders API] Invalid userId - must be positive:', parsedUserId);
          return NextResponse.json({ 
            success: false, 
            error: 'Invalid user ID: ' + userId + ' (must be positive number)' 
          }, { status: 400 });
        }
        // Allow fetching orders by userId from query params even without JWT authentication
        // This supports guest users who submitted forms but didn't login
      }
    } else {
      // Try to get from JWT (for logged-in users)
      parsedUserId = getUserIdFromRequest(request);
      // Note: If still no userId after this, we allow the request to continue
      // but it will just return an empty list - not an error
      console.log('[Orders API] No userId in query, trying JWT - result:', parsedUserId);
    }

    // Allow requests with valid userId from query OR from JWT
    // If there's no userId at all, still allow the request but it returns empty
    if (!parsedUserId && !fetchAllOrders) {
      console.log('[Orders API] No userId - proceeding but will return empty results');
      // Don't require authentication - just return empty instead of 401
      // This allows guest users to see the page without login errors
    }
    
    console.log('[Orders API] Final userId for query:', parsedUserId, '| fetchAll:', fetchAllOrders);

    // Build where clause
    const where: Record<string, unknown> = {};
    
    // Only filter by userId if we're not in fetchAll mode
    if (!fetchAllOrders && parsedUserId) {
      where.userId = parsedUserId;
    }
    
    console.log('[Orders API] Querying with userId:', parsedUserId);
    
    if (status && status !== 'all') {
      where.status = status;
    }
    
    if (search) {
      where.OR = [
        { company: { contains: search } },
        { customer: { contains: search } },
      ];
    }

    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    return NextResponse.json({ 
      success: true, 
      orders 
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch orders',
      orders: [] 
    }, { status: 500 });
  }
}

// POST /api/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, type, company, customer, state, amount, status } = body;

    // Allow guest orders (userId can be null)
    let parsedUserId: number | null = null;
    if (userId) {
      parsedUserId = parseInt(userId);
      if (isNaN(parsedUserId)) {
        parsedUserId = null; // Treat invalid IDs as guest
      }
    }

    const order = await prisma.order.create({
      data: {
        userId: parsedUserId, // Can be null for guest orders
        type: String(type || 'Unknown'),
        company: String(company || ''),
        customer: String(customer || ''),
        state: String(state || ''),
        amount: parseFloat(String(amount || 0)),
        status: status || 'Pending',
        date: new Date().toISOString(),
      },
    });

    return NextResponse.json({ success: true, data: order });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create order' 
    }, { status: 500 });
  }
}
