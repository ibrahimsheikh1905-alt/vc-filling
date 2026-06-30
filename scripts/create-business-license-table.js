// Script to create business_license table
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../../prisma/dev.db');
const db = new Database(dbPath);

const createTableSQL = `
CREATE TABLE IF NOT EXISTS business_license (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_purpose TEXT,
  business_type TEXT,
  mobile_phone TEXT,
  email TEXT,
  last_name TEXT,
  first_name TEXT,
  company_name TEXT,
  designator TEXT,
  entity_type TEXT,
  state_of_formation TEXT,
  street_address TEXT,
  address_line2 TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  created_at TEXT
);
`;

try {
  db.exec(createTableSQL);
  console.log('business_license table created successfully');
  
  // Verify table was created
  const table = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='business_license'").get();
  if (table) {
    console.log('Table verified:', table.name);
  }
  
  // Show the columns
  const columns = db.prepare("PRAGMA table_info(business_license)").all();
  console.log('Columns:', columns.map(c => `${c.name}: ${c.type}`));
} catch (error) {
  console.error('Error creating table:', error.message);
} finally {
  db.close();
}
