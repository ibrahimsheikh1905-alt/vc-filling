import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/annual-reports - Fetch annual reports for a user
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const status = url.searchParams.get('status');

  try {
    // Build where clause
    const where: Record<string, unknown> = {};
    
    if (userId) {
      const parsedUserId = parseInt(userId);
      if (!isNaN(parsedUserId)) {
        where.userId = parsedUserId;
      }
    }
    
    if (status && status !== 'all') {
      where.status = status;
    }

    // Fetch annual reports for the user
    const reports = await prisma.annualReport.findMany({
      where,
      orderBy: { id: 'desc' },
      take: 50,
    });

    return NextResponse.json({ 
      success: true, 
      annualReports: reports 
    });
  } catch (error) {
    console.error('Error fetching annual reports:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch annual reports',
      annualReports: [] 
    }, { status: 500 });
  }
}
