-- VC-Dashboard Admin Panel Migration #1
-- Run: mysql -u [user] -p [db_name] < migrations/001_add_user_role.sql

USE vcfilling;

ALTER TABLE users 
ADD COLUMN IF NOT EXISTS role ENUM('user', 'admin') DEFAULT 'user' AFTER mobile_phone;

-- Seed first admin (update email/password as needed)
-- INSERT IGNORE INTO users (email, first_name, last_name, mobile_phone, role, created_at) 
-- VALUES ('admin@vcfiling.com', 'Admin', 'User', '+1-555-ADMIN', 'admin', NOW());

SELECT 'Migration complete: role column added to users' as status;
