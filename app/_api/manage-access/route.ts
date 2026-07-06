import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'your-secret-key-here';

// GET /api/manage-access - Get the currently logged-in user (for Manage Access section)
export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ 
        success: false, 
        error: 'Unauthorized' 
      }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    let decoded: any;
    
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (e) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid token' 
      }, { status: 401 });
    }
    
    // Get the current logged-in user from database
    const currentUser = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
      },
    });
    
    if (!currentUser) {
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 404 });
    }
    
    // Return only the current logged-in user (as they're the only user for their account)
    return NextResponse.json({
      success: true,
      users: [currentUser]
    });
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch users' 
    }, { status: 500 });
  }
}

// POST /api/manage-access - Create new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, access } = body;
    
    // Get current user from token
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ 
        success: false, 
        error: 'Unauthorized' 
      }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    let decoded: any;
    
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (e) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid token' 
      }, { status: 401 });
    }
    
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return NextResponse.json({ 
        success: false, 
        error: 'Email already exists' 
      }, { status: 400 });
    }
    
    // Create new user with the specified access level
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        role: access === 'Full Access' ? 'admin' : access === 'Billing Only' ? 'agent' : 'user',
        status: 'active',
        password: 'temp_password', // In real app, send invitation email
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      }
    });
    
    return NextResponse.json({
      success: true,
      user: newUser,
      message: 'User invited successfully'
    });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create user' 
    }, { status: 500 });
  }
}

// PUT /api/manage-access - Update user access
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, name, email, access } = body;
    
    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 });
    }
    
    // Get current user from token
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ 
        success: false, 
        error: 'Unauthorized' 
      }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    let decoded: any;
    
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (e) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid token' 
      }, { status: 401 });
    }
    
    // Update user access level
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        role: access === 'Full Access' ? 'admin' : access === 'Billing Only' ? 'agent' : 'user',
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      }
    });
    
    return NextResponse.json({
      success: true,
      user: updatedUser,
      message: 'User updated successfully'
    });
  } catch (error) {
    console.error('Update user error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update user' 
    }, { status: 500 });
  }
}
