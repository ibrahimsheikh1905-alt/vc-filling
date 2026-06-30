import { PrismaClient } from '@prisma/client';
import path from 'path';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// Use relative path from the web app root for better compatibility
const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
console.log('[Inbox Prisma] Database path:', dbPath);

export const prismaInbox =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: `file:${dbPath}`,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaInbox;

// Export type for Inbox model
export type Inbox = {
  id: number;
  userId: number | null;
  mailboxId: number | null;
  subject: string;
  message: string;
  sender: string;
  status: string;
  receivedAt: string;
  createdAt: string | null;
  updatedAt: string | null;
};

// Type assertion helper to access any model
function getInboxModel(client: any) {
  return client.inbox;
}

export async function findInboxMessages(where: any = {}, take: number = 100) {
  try {
    const model = getInboxModel(prismaInbox);
    if (!model) {
      throw new Error('Inbox model not available');
    }
    return await model.findMany({
      where,
      orderBy: { receivedAt: 'desc' },
      take,
    });
  } catch (error) {
    console.error('[Inbox Model] Error:', error);
    throw error;
  }
}

export default prismaInbox;
