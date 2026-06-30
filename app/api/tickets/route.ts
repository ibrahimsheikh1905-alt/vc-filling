import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Web app tickets API - uses prisma to connect to database
// This is separate from admin API which uses its own prisma instance

// GET /api/tickets - Fetch all tickets for web user dashboard
// Also supports fetching messages for a specific ticket: /api/tickets?ticketId=123
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const ticketId = url.searchParams.get('ticketId');
    
    // If ticketId provided, fetch messages for that ticket
    if (ticketId) {
      const messages = await prisma.ticketMessage.findMany({
        where: { ticketId: Number(ticketId) },
        orderBy: { id: 'asc' },
        take: 100,
      });
      return NextResponse.json({ messages });
    }
    
    // Otherwise fetch all tickets
    const tickets = await prisma.ticket.findMany({
      orderBy: { id: 'desc' },
      take: 100,
    });

    return NextResponse.json({ tickets });
  } catch (error) {
    console.error('[Web Tickets API] Error fetching tickets:', error);
    return NextResponse.json({ tickets: [], error: String(error) }, { status: 200 });
  }
}

// POST /api/tickets - Create new ticket OR add message from web user dashboard
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, subject, description, priority, ticketId, message, sender } = body;

    // If ticketId provided, add message to existing ticket
    if (ticketId && message) {
      const ticketMessage = await prisma.ticketMessage.create({
        data: {
          ticketId: Number(ticketId),
          userId: userId ? Number(userId) : null,
          message: String(message),
          sender: sender || 'user',
          createdAt: new Date().toISOString(),
        },
      });
      
      // Update ticket's updatedAt
      await prisma.ticket.update({
        where: { id: Number(ticketId) },
        data: { updatedAt: new Date().toISOString() },
      });
      
      return NextResponse.json({ message: ticketMessage, success: true });
    }
    
    // Otherwise create new ticket
    const ticket = await prisma.ticket.create({
      data: {
        userId: userId ? Number(userId) : null,
        subject: String(subject),
        description: String(description),
        status: 'Open',
        priority: priority || 'Medium',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });

return NextResponse.json({ ticket, success: true });
  } catch (error) {
    console.error('[Web Tickets API] Error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 200 });
  }
}

// PUT /api/tickets - Update ticket description (for syncing messages to admin)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { ticketId, description, status, priority } = body;

    if (!ticketId) {
      return NextResponse.json({ success: false, error: 'ticketId required' }, { status: 400 });
    }

    const updateData: Record<string, any> = {
      updatedAt: new Date().toISOString(),
    };
    
    if (description) updateData.description = String(description);
    if (status) updateData.status = String(status);
    if (priority) updateData.priority = String(priority);

    const updatedTicket = await prisma.ticket.update({
      where: { id: Number(ticketId) },
      data: updateData,
    });

    return NextResponse.json({ success: true, ticket: updatedTicket });
  } catch (error) {
    console.error('[Web Tickets API] PUT Error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 200 });
  }
}
