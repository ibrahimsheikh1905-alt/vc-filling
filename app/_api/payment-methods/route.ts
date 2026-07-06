import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '../../../../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'your-secret-key-here';

// GET /api/payment-methods - Get all payment methods for current user
export async function GET(request: NextRequest) {
  try {
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
    
    // Get payment methods from Prisma database
    const paymentMethods = await prisma.paymentMethod.findMany({
      where: { userId: decoded.id },
      orderBy: { isPrimary: 'desc' }
    });
    
    console.log('[GET] User:', decoded.id, 'Payment methods:', paymentMethods);
    
    return NextResponse.json({
      success: true,
      paymentMethods: paymentMethods.map(m => ({
        id: m.id,
        userId: m.userId,
        last4: m.last4 || '****',
        expiry: m.expiry || 'MM/YY',
        holder: m.holder || 'UNKNOWN',
        company: m.company || 'PERSONAL CARD',
        isPrimary: m.isPrimary || false,
        cardType: m.cardType || 'credit',
        createdAt: m.createdAt || new Date().toISOString()
      }))
    });
  } catch (error) {
    console.error('Get payment methods error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch payment methods' 
    }, { status: 500 });
  }
}

// POST /api/payment-methods - Add new payment method
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { last4, expiry, holder, company, isPrimary } = body;
    
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
    
    const userId = decoded.id;
    
    // Check if user has any existing payment methods
    const existingMethods = await prisma.paymentMethod.findMany({
      where: { userId }
    });
    
    // If this is set as primary, remove primary from other cards
    if (isPrimary) {
      await prisma.paymentMethod.updateMany({
        where: { userId, isPrimary: true },
        data: { isPrimary: false }
      });
    }
    
    // Create new payment method in database
    const newPaymentMethod = await prisma.paymentMethod.create({
      data: {
        userId,
        last4,
        expiry,
        holder,
        company,
        isPrimary: isPrimary || (existingMethods.length === 0), // First card is always primary
        cardType: 'credit',
        createdAt: new Date().toISOString()
      }
    });
    
    console.log('[POST] Created payment method:', newPaymentMethod);
    
    return NextResponse.json({
      success: true,
      paymentMethod: newPaymentMethod,
      message: 'Payment method added successfully'
    });
  } catch (error) {
    console.error('Add payment method error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to add payment method' 
    }, { status: 500 });
  }
}

// PUT /api/payment-methods - Update payment method (set as primary)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentMethodId, isPrimary } = body;
    
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
    
    const userId = decoded.id;
    
    // If setting as primary, remove primary from others first
    if (isPrimary) {
      await prisma.paymentMethod.updateMany({
        where: { userId, isPrimary: true },
        data: { isPrimary: false }
      });
    }
    
    // Find and update the payment method
    const updatedMethod = await prisma.paymentMethod.update({
      where: { id: paymentMethodId, userId },
      data: { 
        isPrimary: isPrimary || false,
        updatedAt: new Date().toISOString()
      }
    });
    
    console.log('[PUT] Updated payment method:', updatedMethod);
    
    return NextResponse.json({
      success: true,
      paymentMethod: updatedMethod,
      message: 'Payment method updated'
    });
  } catch (error) {
    console.error('Update payment method error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update payment method' 
    }, { status: 500 });
  }
}

// DELETE /api/payment-methods - Delete payment method
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentMethodId } = body;
    
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
    
    const userId = decoded.id;
    
    // Delete the payment method
    await prisma.paymentMethod.delete({
      where: { id: paymentMethodId, userId }
    });
    
    console.log('[DELETE] Deleted payment method:', paymentMethodId);
    
    return NextResponse.json({
      success: true,
      message: 'Payment method deleted'
    });
  } catch (error) {
    console.error('Delete payment method error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete payment method' 
    }, { status: 500 });
  }
}
