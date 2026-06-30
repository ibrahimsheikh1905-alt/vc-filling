import { PrismaClient } from '@prisma/client';
import path from 'path';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// Use absolute path to avoid process.cwd() issues when running from different directories
// Use forward slashes and file:// protocol for better Windows compatibility
const dbPath = path.resolve('D:/VC-Dashboard/prisma/dev.db').replace(/\\/g, '/');
console.log('[Web Prisma] Database path:', dbPath);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: `file:${dbPath}`,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
