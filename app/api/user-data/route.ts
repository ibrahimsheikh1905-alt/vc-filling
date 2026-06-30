import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/user-data - Fetch user data with phone and address
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 });
    }
    
    // Try with phone and address first, fall back if fields don't exist
    let user;
    try {
      user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          status: true,
          phone: true,
          address: true,
        }
      });
    } catch (fieldError: any) {
      // If fields don't exist yet, try without them
      console.log('[UserData] Fields not available, retrying without:', fieldError.message);
      user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          status: true,
        }
      });
    }
    
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      user
    });
  } catch (error) {
    console.error('[UserData] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch user data' 
    }, { status: 500 });
  }
}
