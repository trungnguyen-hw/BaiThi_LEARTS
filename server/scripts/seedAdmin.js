import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import pool from '../src/config/database.js';
import adminRepository from '../src/repositories/adminRepository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env relative to scripts folder
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const seedAdmin = async () => {
  const username = process.env.SEED_ADMIN_USERNAME || 'trungngo1903';
  const plainPassword = process.env.SEED_ADMIN_PASSWORD || 'trunglove123';
  const fullName = process.env.SEED_ADMIN_FULL_NAME || 'Nguyễn Phụ Trung';
  const email = process.env.SEED_ADMIN_EMAIL || 'trungngo1903@local.admin';

  console.log('==================================================');
  console.log('LEARTS DATABASE ADMIN SEEDER');
  console.log('==================================================');
  console.log(`Username to seed: ${username}`);
  console.log(`Email to seed: ${email}`);

  try {
    // Check if admin already exists
    const existing = await adminRepository.findByUsername(username);

    // Hash password with 10 salt rounds
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(plainPassword, saltRounds);

    if (existing) {
      console.log(`Admin account with username "${username}" already exists.`);
      // Update password hash to make sure it's up to date
      await adminRepository.updatePassword(existing.id, passwordHash);
      console.log('Password hash updated successfully.');
    } else {
      // Create new admin
      await adminRepository.create(username, fullName, email, passwordHash);
      console.log('New admin account created successfully.');
    }
    
    console.log('Admin seed completed successfully');
  } catch (err) {
    console.error('Error during admin seeding:', err.message);
  } finally {
    // End the pool so the Node process terminates immediately
    await pool.end();
    process.exit(0);
  }
};

seedAdmin();
