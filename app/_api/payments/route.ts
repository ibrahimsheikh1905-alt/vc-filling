import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper to get or create a guest user for payments without authentication
async function getOrCreateGuestUser(): Promise<number> {
  try {
    // Try to find a guest user
    let guestUser = await prisma.user.findFirst({
      where: { email: 'guest@vcfilling.com' }
    });
    
    if (!guestUser) {
      // Create guest user
      guestUser = await prisma.user.create({
        data: {
          name: 'Guest User',
          email: 'guest@vcfilling.com',
          password: 'guest_' + Date.now(),
          role: 'user',
          status: 'Active',
        }
      });
    }
    
    return guestUser.id;
  } catch (error) {
    console.error('Error getting guest user:', error);
    return 1; // Fallback to user ID 1
  }
}

// POST /api/payments - Create new payment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Map incoming fields to Prisma schema fields
    // incoming: paymentMethod, name, email, amount, orderId, transactionId, paymentStatus
    let { userId, orderId, amount, method, status, transactionId, date, paymentMethod, paymentStatus } = body;

    // If no userId, use guest user
    if (!userId) {
      userId = await getOrCreateGuestUser();
    }

    // Map paymentMethod to method, paymentStatus to status if needed
    if (!method && paymentMethod) {
      method = paymentMethod;
    }
    if (!status && paymentStatus) {
      status = paymentStatus;
    }

    const payment = await prisma.payment.create({
      data: {
        userId: Number(userId),
        orderId: orderId ? Number(orderId) : null,
        amount: parseFloat(String(amount || 0)),
        method: String(method || 'creditCard'),
        status: String(status || 'Pending'),
        transactionId: transactionId || null,
        date: date || new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({ success: true, data: payment });
  } catch (error) {
    console.error('Error creating payment:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create payment' 
    }, { status: 500 });
  }
}

// GET /api/payments - Fetch payments
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    let where: Record<string, any> = {};
    if (userId) {
      where.userId = Number(userId);
    }

    const payments = await prisma.payment.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    return NextResponse.json({ success: true, payments });
  } catch (error) {
    console.error('Error fetching payments:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch payments',
      payments: [] 
    }, { status: 500 });
  }
}
