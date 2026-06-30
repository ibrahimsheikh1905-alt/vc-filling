import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'your-secret-key-here';

export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      // Try to get userId from query params as fallback
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get('userId');
      
      if (!userId) {
        return NextResponse.json({ 
          success: false, 
          error: 'No authorization token provided' 
        }, { status: 401 });
      }
      
      // Fetch user by ID directly - handle fields that may not exist yet
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
            address: true,
            phone: true,
          }
        });
      } catch (fieldError: any) {
        // If fields don't exist yet, try without them
        if (fieldError.message?.includes('phone') || fieldError.message?.includes('address')) {
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
        } else {
          throw fieldError;
        }
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
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    // Fetch complete user data from database
    let user;
    try {
      user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          status: true,
          createdAt: true,
          address: true,
          phone: true,
        }
      });
    } catch (fieldError: any) {
      // If fields don't exist yet, try without them
      if (fieldError.message?.includes('phone') || fieldError.message?.includes('address')) {
        user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            createdAt: true,
          }
        });
      } else {
        throw fieldError;
      }
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
    console.error('Get user profile error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch user profile' 
    }, { status: 500 });
  }
}

// PUT /api/user-profile - Update user profile
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, name, email, phone, address } = body;
    
    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 });
    }
    
    console.log('[UpdateUserProfile] Updating user:', userId, { name, email, phone, address });
    
    // Build update data object - only include fields that are provided
    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    // Only add phone/address if they exist in schema (handle migration not completed yet)
    if (phone !== undefined) {
      try {
        // Try to update phone - will fail if column doesn't exist yet
        updateData.phone = phone;
      } catch (e) {
        console.log('[UpdateUserProfile] phone field not in schema yet');
      }
    }
    if (address !== undefined) {
      try {
        updateData.address = address;
      } catch (e) {
        console.log('[UpdateUserProfile] address field not in schema yet');
      }
    }
    
    // Update user - catch error if fields don't exist yet
    let updatedUser;
    try {
      updatedUser = await prisma.user.update({
        where: { id: parseInt(userId) },
        data: updateData,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          status: true,
          // These may fail if columns don't exist yet
          phone: true,
          address: true,
        }
      });
    } catch (fieldError: any) {
      // If it's a schema error, try without phone/address
      if (fieldError.message?.includes('phone') || fieldError.message?.includes('address')) {
        updatedUser = await prisma.user.update({
          where: { id: parseInt(userId) },
          data: {
            ...(name && { name }),
            ...(email && { email }),
          },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
          }
        });
      } else {
        throw fieldError;
      }
    }
    
    return NextResponse.json({
      success: true,
      user: updatedUser
    });
  } catch (error) {
    console.error('Update user profile error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update user profile' 
    }, { status: 500 });
  }
}
