import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/register-agent - Fetch registered agents for a user
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const status = url.searchParams.get('status');

  try {
    // If no userId, return empty
    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 });
    }

    const parsedUserId = parseInt(userId);
    if (isNaN(parsedUserId)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid user ID' 
      }, { status: 400 });
    }

    // Build where clause
    const where: Record<string, unknown> = {
      userId: parsedUserId,
    };
    
    if (status && status !== 'all') {
      where.status = status;
    }

    // Fetch registered agents for the user
    const agents = await prisma.registeredAgent.findMany({
      where,
      orderBy: { id: 'desc' },
    });

    return NextResponse.json({ 
      success: true, 
      registeredAgents: agents 
    });
  } catch (error) {
    console.error('Error fetching registered agents:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch registered agents',
      registeredAgents: [] 
    }, { status: 500 });
  }
}

// POST /api/register-agent - Create new registered agent
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, companyName, agentName, agentEmail, agentPhone, agentAddress, state, price, status, renewalDate } = body;

    // Validate required fields
    if (!companyName || !agentName || !agentEmail || !state) {
      return NextResponse.json({ 
        success: false, 
        error: 'Company name, agent name, agent email, and state are required' 
      }, { status: 400 });
    }

    // Parse userId safely
    let parsedUserId: number | null = null;
    if (userId) {
      const uid = parseInt(userId);
      if (!isNaN(uid)) parsedUserId = uid;
    }

    // Parse price - default to 99 if not provided
    let parsedPrice = 99;
    if (price !== undefined && price !== null && price !== '') {
      const num = typeof price === 'number' ? price : parseFloat(String(price));
      if (!isNaN(num) && num >= 0) {
        parsedPrice = num;
      }
    }

    const agent = await prisma.registeredAgent.create({
      data: {
        userId: parsedUserId,
        companyName: String(companyName),
        agentName: String(agentName),
        agentEmail: String(agentEmail),
        agentPhone: agentPhone ? String(agentPhone) : null,
        agentAddress: agentAddress ? String(agentAddress) : null,
        state: String(state),
        price: parsedPrice,
        status: status || 'Active',
        startDate: new Date().toISOString(),
        renewalDate: renewalDate || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });

return NextResponse.json({ success: true, data: agent });
  } catch (error) {
    console.error('Error creating registered agent:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create registered agent' 
    }, { status: 500 });
  }
}
