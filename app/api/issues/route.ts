import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch ALL applications as issues (no filtering)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    console.log('[Issues API] Fetching applications, userId:', userId);

    // Build query - NO filtering, get ALL applications
    const query: any = {};
    if (userId) {
      query.userId = parseInt(userId);
    }

    // Fetch all applications (NO filtering - return everything)
    const applications = await prisma.application.findMany({
      where: query,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    console.log('[Issues API] Found applications:', applications.length);
    console.log('[Issues API] Sample:', applications.slice(0, 2).map(a => ({ 
      id: a.id, 
      status: a.status, 
      rejectionReason: a.rejectionReason,
      details: a.details 
    })));

    // Return ALL applications - NO client-side filtering
    return NextResponse.json({ issues: applications });
  } catch (error) {
    console.error('[Issues API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch issues' },
      { status: 500 }
    );
  }
}
