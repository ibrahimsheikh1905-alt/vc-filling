import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/applications - Fetch applications (for user dashboard if userId provided)
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const status = url.searchParams.get('status');

  try {
    let where: Record<string, any> = {};
    
    if (userId) {
      where.userId = parseInt(userId);
    }
    
    if (status && status !== 'all') {
      where.status = status;
    }

    const applications = await prisma.application.findMany({
      where,
      orderBy: { id: 'desc' },
      take: 100,
    });

    return NextResponse.json({ applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ applications: [] });
  }
}

// POST /api/applications - Create new application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, type, company, state, status, details } = body;

    const application = await prisma.application.create({
      data: {
        userId: userId ? Number(userId) : null,
        type: String(type),
        company: company || null,
        state: String(state),
        status: status || 'Pending',
        details: details || null,
        submittedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({ success: true, data: application });
  } catch (error) {
    console.error('Error creating application:', error);
    return NextResponse.json({ success: false, error: 'Failed to create application' }, { status: 500 });
  }
}
