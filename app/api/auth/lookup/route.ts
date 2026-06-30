import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/lib/jwt';

// POST /api/auth/lookup - Find or create user by firstName and email, then auto-login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email } = body;

    if (!firstName || !email) {
      return NextResponse.json({ 
        success: false, 
        error: 'First name and email are required' 
      }, { status: 400 });
    }

    // Try to find existing user by email
    let user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    let isNewUser = false;

    if (!user) {
      // User not found - create a new user with a temporary password
      isNewUser = true;
      
      // Generate a random temporary password (user can reset it later)
      const tempPassword = Math.random().toString(36).slice(-8) + 'Aa1!';
      const hashedPassword = await bcrypt.hash(tempPassword, 10);

      // Create full name from firstName
      const fullName = firstName.trim();

      user = await prisma.user.create({
        data: {
          name: fullName,
          email: email.toLowerCase(),
          password: hashedPassword,
          role: 'USER',
          status: 'Active',
        },
      });
    } else {
      // Check if user role is USER (not admin)
      if (user.role && user.role.toUpperCase() !== 'USER') {
        return NextResponse.json({ 
          success: false, 
          error: 'Access denied. Please use admin portal.' 
        }, { status: 403 });
      }
    }

    // Generate JWT token for auto-login
    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      },
      token,
      isNewUser,
    });
  } catch (error) {
    console.error('[Auth Lookup] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to lookup user' 
    }, { status: 500 });
  }
}
