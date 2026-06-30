// Script to create the change_agent table in SQLite
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', 'prisma', 'dev.db');
console.log('Database path:', dbPath);

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

try {
  // Create change_agent table - for change of registered agent form data
  db.exec(`
    CREATE TABLE IF NOT EXISTS change_agent (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      agent_type TEXT,
      agent_first_name TEXT,
      agent_last_name TEXT,
      agent_company_name TEXT,
      agent_street_address TEXT,
      agent_address_line2 TEXT,
      agent_city TEXT,
      agent_state TEXT,
      agent_zip_code TEXT,
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
  console.log('change_agent table created successfully');

  // Verify the table was created
  const tableCheck = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='change_agent'").get();
  console.log('Table check:', tableCheck);

} catch (error) {
  console.error('Error creating table:', error.message);
} finally {
  db.close();
}

console.log('Done!');
