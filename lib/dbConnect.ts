// eslint-disable-next-line @typescript-eslint/no-require-imports
const Database = require('better-sqlite3');
import path from 'path';
import * as fs from 'fs';

// Get the current working directory to determine the project root
// This works whether running via Next.js dev server or directly via node
let projectRoot = process.cwd();
console.log('Project root:', projectRoot);

// When running 'npm run dev' from web/ folder, cwd is d:/VC-Dashboard/web
// We need to go up one level to get to the actual project root
// Check if we're in the web folder by looking for the prisma folder
const prismaPath = path.join(projectRoot, 'prisma');
if (!fs.existsSync(prismaPath)) {
  // prisma folder not found in current directory, we're likely in web folder
  // Go up one level
  projectRoot = path.join(projectRoot, '..');
}

// For robustness, always go up one level from web to get to VC-Dashboard root
// This handles both "npm run dev" from web/ or when Next.js changes cwd
const baseDir = path.basename(projectRoot);
if (baseDir === 'web') {
  projectRoot = path.join(projectRoot, '..');
}

// Database configuration - use the SQLite file in the prisma directory
// The file should be at d:/VC-Dashboard/prisma/dev.db
const dbPath = path.join(projectRoot, 'prisma', 'dev.db');
console.log('Database path:', dbPath);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any;

// Get or create database connection
function getDb() {
  if (!db) {
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
  }
  return db;
}

// Reset database connection - use this to clear cached statements
function resetDb() {
  if (db) {
    db.close();
  }
  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  return db;
}

// Execute query function for SQLite
export const executeQuery = async (query: string, params: any[] = []): Promise<any> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let database: any;
    const isSelect = query.trim().toUpperCase().startsWith('SELECT');
    
    // For non-SELECT queries (INSERT/UPDATE/DELETE), create fresh connection to avoid stale prepared statements
    // This fixes issues with Next.js hot-reloading caching old statement plans
    if (!isSelect) {
      database = new Database(dbPath);
      database.pragma('journal_mode = WAL');
    } else {
      database = getDb();
    }
    
    const stmt = database.prepare(query);
    
    if (isSelect) {
      const result = params.length > 0 ? stmt.all(...params) : stmt.all();
      return result;
    } else {
      const result = params.length > 0 ? stmt.run(...params) : stmt.run();
      // Close the temporary connection for mutations
      database.close();
      return {
        changes: result.changes,
        lastInsertRowid: result.lastInsertRowid,
        insertId: result.lastInsertRowid
      };
    }
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// Export reset function for manual cache clearing if needed
export const resetDatabase = resetDb;

// Default export for backwards compatibility
const dbConnect = {
  executeQuery,
  resetDatabase,
};

export default dbConnect;

// Graceful shutdown
process.on('SIGINT', async () => {
  if (db) {
    db.close();
  }
  console.log('Database connection closed');
});
