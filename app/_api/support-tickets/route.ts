import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET /api/support-tickets - Fetch tickets with messages
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const ticketId = url.searchParams.get('ticketId');
  const userId = url.searchParams.get('userId');

  try {
    // If ticketId provided, fetch messages from TicketMessage table
    if (ticketId) {
      const messages = await prisma.ticketMessage.findMany({
        where: { ticketId: Number(ticketId) },
        orderBy: { id: 'asc' },
        take: 100,
      });
      return NextResponse.json({ messages });
    }

    // Otherwise fetch tickets
    let where: Record<string, any> = {};
    if (userId) {
      where.userId = Number(userId);
    }

    const tickets = await prisma.ticket.findMany({
      where,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { id: 'desc' },
      take: 100,
    });

    return NextResponse.json({ tickets });
  } catch (error) {
    console.error('[SupportTickets API] Error:', error);
    return NextResponse.json({ tickets: [], error: String(error) }, { status: 200 });
  }
}

// POST /api/support-tickets - Send message (creates TicketMessage record)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ticketId, userId, message, sender } = body;

    if (!ticketId) {
      return NextResponse.json({ success: false, error: 'ticketId required' }, { status: 400 });
    }

    // Create a new TicketMessage record
    const ticketMessage = await prisma.ticketMessage.create({
      data: {
        ticketId: Number(ticketId),
        userId: userId ? Number(userId) : null,
        message: String(message),
        sender: sender || 'user',
        createdAt: new Date().toISOString(),
      },
    });

    // Update the ticket's updatedAt timestamp
    await prisma.ticket.update({
      where: { id: Number(ticketId) },
      data: {
        updatedAt: new Date().toISOString()
      },
    });

    return NextResponse.json({ success: true, message: ticketMessage });
  } catch (error) {
    console.error('[SupportTickets API] POST Error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
