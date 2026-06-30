import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, name, email } = body;

    if (!userId) {
      return NextResponse.json({ success: false, message: 'User ID is required' }, { status: 400 });
    }

    // Update user in Prisma database
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: {
        name: name || undefined,
        email: email || undefined,
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'User profile updated successfully',
      user: updatedUser 
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update user profile' 
    }, { status: 500 });
  }
}
