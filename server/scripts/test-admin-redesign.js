import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}/api`;

console.log('==================================================');
console.log('LEARTS ADMIN REDESIGN API TEST SUITE');
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

// Step 1: Login
addTest('Login Admin to fetch JWT', async () => {
  const username = process.env.SEED_ADMIN_USERNAME || 'trungngo1903';
  const password = process.env.SEED_ADMIN_PASSWORD || 'trunglove123';

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: username, password })
  });

  const body = await response.json();
  if (response.status !== 200 || !body.success || !body.data.token) {
    throw new Error(`Login failed: ${body.message}`);
  }
  token = body.data.token;
  console.log('JWT Token successfully retrieved.');
});

// Step 2: GET /admin/dashboard/stats
addTest('GET /admin/dashboard/stats - Fetch Dashboard statistics', async () => {
  const response = await fetch(`${BASE_URL}/admin/dashboard/stats`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Data:`, JSON.stringify(body.data, null, 2));

  if (response.status !== 200 || !body.success) {
    throw new Error('Stats retrieval failed.');
  }
});

// Step 3: GET /admin/dashboard/top-products
addTest('GET /admin/dashboard/top-products - Fetch Top selling products', async () => {
  const response = await fetch(`${BASE_URL}/admin/dashboard/top-products?limit=3`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Top Products Count: ${body.data?.length || 0}`);

  if (response.status !== 200 || !body.success) {
    throw new Error('Top products retrieval failed.');
  }
});

// Step 4: Category CRUD
const testCategoryId = 'test-category-999';
addTest('Category CRUD - Create, Update, and Delete Category', async () => {
  // 1. Create
  const createRes = await fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      id: testCategoryId,
      name: 'Test Category Integration',
      slug: 'test-category-integration',
      description: 'Used for automation testing'
    })
  });
  const createBody = await createRes.json();
  console.log(`1. Create Status: ${createRes.status}`);
  if (createRes.status !== 201 || !createBody.success) {
    throw new Error(`Create category failed: ${createBody.message}`);
  }

  // 2. Update
  const updateRes = await fetch(`${BASE_URL}/categories/${testCategoryId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: 'Test Category Modified',
      slug: 'test-category-modified',
      description: 'Modified via API test suite'
    })
  });
  const updateBody = await updateRes.json();
  console.log(`2. Update Status: ${updateRes.status}`);
  if (updateRes.status !== 200 || !updateBody.success) {
    throw new Error(`Update category failed: ${updateBody.message}`);
  }

  // 3. Delete
  const deleteRes = await fetch(`${BASE_URL}/categories/${testCategoryId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const deleteBody = await deleteRes.json();
  console.log(`3. Delete Status: ${deleteRes.status}`);
  if (deleteRes.status !== 200 || !deleteBody.success) {
    throw new Error(`Delete category failed: ${deleteBody.message}`);
  }
});

runTests();
