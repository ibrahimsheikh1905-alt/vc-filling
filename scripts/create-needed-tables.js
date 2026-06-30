// Script to create all needed tables in SQLite (run from web folder)
// Usage: node scripts/create-needed-tables.js

const Database = require('better-sqlite3');
const path = require('path');

let projectRoot = process.cwd();
const baseDir = path.basename(projectRoot);
if (baseDir === 'web') {
  projectRoot = path.join(projectRoot, '..');
}

const dbPath = path.join(projectRoot, 'prisma', 'dev.db');
console.log('Database path:', dbPath);

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

try {
  // Create registered_agent table with user_id
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
  console.log('✓ registered_agent table created');

  // Create all_form_data table with user_id if needed
  const checkTable = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='all_form_data'").get();
  if (!checkTable) {
    db.exec(`
      CREATE TABLE all_form_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        entity_type TEXT,
        company_name TEXT,
        designator TEXT,
        first_name TEXT,
        last_name TEXT,
        email TEXT,
        mobile_phone TEXT,
        usable_id TEXT,
        created_at TEXT
      )
    `);
    console.log('✓ all_form_data table created');
  } else {
    // Add user_id column if not exists
    try {
      db.exec("ALTER TABLE all_form_data ADD COLUMN user_id INTEGER");
      console.log('✓ Added user_id column to all_form_data');
    } catch (e) {
      console.log('✓ all_form_data already has user_id');
    }
  }

  // Create virtual_address table if not exists
  try {
    const checkVA = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='virtual_address'").get();
    if (!checkVA) {
      db.exec(`
        CREATE TABLE virtual_address (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          entity_type TEXT,
          state_of_formation TEXT,
          company_name TEXT,
          designator TEXT,
          mobile_phone TEXT,
          email TEXT,
          last_name TEXT,
          first_name TEXT,
          street_address TEXT,
          address_line2 TEXT,
          city TEXT,
          state TEXT,
          zip_code TEXT,
          state_of_service TEXT,
          date_of_formation TEXT,
          notify_state_of_service TEXT,
          member_number TEXT,
          members TEXT,
          created_at TEXT
        )
      `);
      console.log('✓ virtual_address table created');
    } else {
      // Add member_number and members columns if not exists
      try {
        db.exec("ALTER TABLE virtual_address ADD COLUMN member_number TEXT");
        db.exec("ALTER TABLE virtual_address ADD COLUMN members TEXT");
        console.log('✓ Added member_number and members columns to virtual_address');
      } catch (e) {
        console.log('✓ virtual_address already has member columns');
      }
    }
  } catch (e) {
    console.log('Error with virtual_address:', e.message);
  }

  // List all tables
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all();
  console.log('\nAll tables in database:');
  tables.forEach(t => console.log('  -', t.name));

} catch (error) {
  console.error('Error:', error.message);
} finally {
  db.close();
}

console.log('\nDone!');
