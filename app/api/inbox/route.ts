// @ts-ignore - better-sqlite3 types not available
import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore - better-sqlite3 types not available
import Database from 'better-sqlite3';
import path from 'path';

// Use parent directory for shared database (web is in subdirectory)
const dbPath = path.join(process.cwd(), '..', 'prisma', 'dev.db');
console.log('[Inbox API] Database path:', dbPath);

function getDb() {
  return new Database(dbPath, { readonly: true });
}

function getDbWrite() {
  return new Database(dbPath);
}

// GET /api/inbox - Fetch inbox messages for a user
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const mailboxId = url.searchParams.get('mailboxId');

  let db: any;
  try {
    console.log('[Inbox API] Request received, userId:', userId, 'mailboxId:', mailboxId);
    
    db = getDb();
    
    let query = 'SELECT * FROM "Inbox"';
    const params: any[] = [];
    const conditions: string[] = [];
    
    if (userId && !isNaN(parseInt(userId))) {
      conditions.push('"userId" = ?');
      params.push(parseInt(userId));
    }
    
    if (mailboxId && !isNaN(parseInt(mailboxId))) {
      conditions.push('"mailboxId" = ?');
      params.push(parseInt(mailboxId));
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY "receivedAt" DESC LIMIT 100';
    
    const messages = db.prepare(query).all(...params);
    
    console.log('[Inbox API] Found messages:', messages.length);
    
    return NextResponse.json({ messages });
  } catch (error: any) {
    console.error('[Inbox API] Error details:', error);
    return NextResponse.json({ error: error.message, messages: [] }, { status: 500 });
  } finally {
    if (db) db.close();
  }
}

// POST /api/inbox - Send a new mail to user
export async function POST(request: NextRequest) {
  let db: any;
  try {
    const body = await request.json();
    const { userId, mailboxId, subject, message, sender } = body;

    if (!userId || !mailboxId || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    db = getDbWrite();
    
    const result = db.prepare(`
      INSERT INTO "Inbox" ("userId", "mailboxId", "subject", "message", "sender", "status", "receivedAt", "createdAt")
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      parseInt(userId),
      parseInt(mailboxId),
      subject,
      message,
      sender || 'Admin',
      'Unread',
      new Date().toISOString(),
      new Date().toISOString()
    );

    const inboxItem = db.prepare('SELECT * FROM "Inbox" WHERE id = ?').get(result.lastInsertRowid);

    return NextResponse.json({ success: true, data: inboxItem });
  } catch (error: any) {
    console.error('Inbox send error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } finally {
    if (db) db.close();
  }
}

// PUT /api/inbox - Mark message as read
export async function PUT(request: NextRequest) {
  let db: any;
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing id' },
        { status: 400 }
      );
    }

    db = getDbWrite();
    
    db.prepare(`
      UPDATE "Inbox" 
      SET status = ?, "updatedAt" = ?
      WHERE id = ?
    `).run(status || 'Read', new Date().toISOString(), parseInt(id));

    const updated = db.prepare('SELECT * FROM "Inbox" WHERE id = ?').get(parseInt(id));

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error('Inbox update error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } finally {
    if (db) db.close();
  }
}

// DELETE /api/inbox - Delete a message
export async function DELETE(request: NextRequest) {
  let db: any;
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing id' },
        { status: 400 }
      );
    }

    db = getDbWrite();
    
    db.prepare('DELETE FROM "Inbox" WHERE id = ?').run(parseInt(id));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Inbox delete error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete' });
  } finally {
    if (db) db.close();
  }
}
