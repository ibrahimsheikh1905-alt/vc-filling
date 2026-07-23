import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/virtual-mailboxes - Fetch virtual mailboxes for logged-in user
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');

  try {
    // Validate userId
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

    // Fetch ONLY the mailboxes for the specific user
    const mailboxes = await prisma.virtualMailbox.findMany({
      where: {
        userId: parsedUserId,
      },
      orderBy: { id: 'desc' },
    });

    return NextResponse.json({ 
      success: true, 
      virtualMailboxes: mailboxes 
    });
  } catch (error) {
    console.error('Error fetching virtual mailboxes:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch mailboxes',
      virtualMailboxes: [] 
    }, { status: 500 });
  }
}

// POST /api/virtual-mailboxes - Create new virtual mailbox
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, companyName, streetAddress, city, state, zipCode, price, status, startDate, renewalDate } = body;

    // Validate required fields
    if (!companyName || !streetAddress) {
      return NextResponse.json({ 
        success: false, 
        error: 'Company name and street address are required' 
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

    const mailbox = await prisma.virtualMailbox.create({
      data: {
        userId: parsedUserId,
        companyName: String(companyName),
        streetAddress: String(streetAddress),
        city: String(city || ''),
        state: String(state || ''),
        zipCode: String(zipCode || ''),
        price: parsedPrice,
        status: status || 'Active',
        startDate: startDate || new Date().toISOString(),
        renewalDate: renewalDate || null,
      },
    });

    return NextResponse.json({ success: true, data: mailbox });
  } catch (error) {
    console.error('Error creating mailbox:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create mailbox' 
    }, { status: 500 });
  }
}
