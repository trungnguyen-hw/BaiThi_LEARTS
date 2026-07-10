import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env configuration
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}/api`;

console.log('==================================================');
console.log('LEARTS BACKEND SUPABASE API TEST SUITE');
console.log(`Target API URL: ${BASE_URL}`);
console.log('==================================================\n');

const testCases = [];
let passedCount = 0;
let failedCount = 0;

const addTest = (name, fn) => {
  testCases.push({ name, fn });
};

const runTests = async () => {
  for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];
    console.log(`Test Case #${i + 1}: ${test.name}`);
    try {
      await test.fn();
      console.log('Result: [PASSED]\n');
      passedCount++;
    } catch (error) {
      console.log(`Result: [FAILED] - ${error.message}\n`);
      failedCount++;
    }
  }

  console.log('==================================================');
  console.log('TEST SUITE SUMMARY');
  console.log(`Total: ${testCases.length}`);
  console.log(`Passed: ${passedCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log('==================================================');
};

let token = '';

// Test Case 1: GET /health
addTest('GET /health - Check database status', async () => {
  const response = await fetch(`${BASE_URL}/health`);
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 200) {
    throw new Error(`Expected status 200, got ${response.status}`);
  }
  if (!body.success || body.data.database !== 'connected') {
    throw new Error('Database is not reported as connected.');
  }
});

// Test Case 2: GET /categories
addTest('GET /categories - Fetch all categories', async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Total Categories: ${body.data?.length || 0}`);

  if (response.status !== 200) {
    throw new Error(`Expected status 200, got ${response.status}`);
  }
  if (!body.success || !Array.isArray(body.data)) {
    throw new Error('Response is not a valid category array.');
  }
});

// Test Case 3: GET /products
addTest('GET /products - Fetch all products', async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Total Products: ${body.data?.length || 0}`);

  if (response.status !== 200) {
    throw new Error(`Expected status 200, got ${response.status}`);
  }
  if (!body.success || !Array.isArray(body.data)) {
    throw new Error('Response is not a valid product array.');
  }
});

// Test Case 4: GET /products/:id
addTest('GET /products/:id - Fetch details of boho-beard-mug', async () => {
  const response = await fetch(`${BASE_URL}/products/boho-beard-mug`);
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Product Name: ${body.data?.name}`);

  if (response.status !== 200) {
    throw new Error(`Expected status 200, got ${response.status}`);
  }
  if (!body.success || body.data.id !== 'boho-beard-mug') {
    throw new Error('Product details mismatch.');
  }
});

// Test Case 5: POST /auth/login
addTest('POST /auth/login - Admin Login', async () => {
  const username = process.env.SEED_ADMIN_USERNAME || 'trungngo1903';
  const password = process.env.SEED_ADMIN_PASSWORD || 'trunglove123';

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: username, password })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  
  if (response.status !== 200) {
    throw new Error(`Login failed with status ${response.status}. Message: ${body.message}`);
  }
  if (!body.success || !body.data.token) {
    throw new Error('Response is missing JWT token.');
  }
  token = body.data.token;
});

// Test Case 6: GET /auth/me
addTest('GET /auth/me - Verify JWT profile', async () => {
  if (!token) {
    throw new Error('Skipping: Login token is missing.');
  }

  const response = await fetch(`${BASE_URL}/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Admin user: ${body.data?.username} (${body.data?.fullName})`);

  if (response.status !== 200) {
    throw new Error(`Verify failed with status ${response.status}`);
  }
  if (!body.success || body.data.username !== (process.env.SEED_ADMIN_USERNAME || 'trungngo1903')) {
    throw new Error('Admin profile username mismatch.');
  }
});

runTests();
