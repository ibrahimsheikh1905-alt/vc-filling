// Script to create the registered_agent table in SQLite
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', 'prisma', 'dev.db');
console.log('Database path:', dbPath);

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

try {
// Create registered_agent table
  db.exec(`
    CREATE TABLE IF NOT EXISTS registered_agent (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      agent_change_option INTEGER,
      mobile_phone TEXT,
      email TEXT,
      last_name TEXT,
      first_name TEXT,
      company_name TEXT,
      designator TEXT,
      state_of_service TEXT,
      entity_type TEXT,
      state_of_formation TEXT,
      street_address TEXT,
      address_line2 TEXT,
      city TEXT,
      state TEXT,
      zip_code TEXT,
      created_at TEXT
    )
  `);
  console.log('registered_agent table created successfully');

  // Verify the table was created
  const tableCheck = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='registered_agent'").get();
  console.log('Table check:', tableCheck);

} catch (error) {
  console.error('Error creating table:', error.message);
} finally {
  db.close();
}

console.log('Done!');
