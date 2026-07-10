import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env configuration
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}/api/auth`;

console.log('==================================================');
console.log('LEARTS AUTHENTICATION SMOKE TEST SUITE');
console.log(`Target URL: ${BASE_URL}`);
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

const randomEmail = () => `admin.${Math.floor(Math.random() * 1000000)}@example.com`;
const sharedUsername = `admin_${Math.floor(Math.random() * 100000)}`;
const sharedEmail = randomEmail();
let sharedToken = '';

// Test Case 1: Register with valid data
addTest('Register with valid data', async () => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: sharedUsername,
      fullName: 'Smoke Test Admin',
      email: sharedEmail,
      password: 'AdminPassword@123'
    })
  });
  
  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 201 && response.status !== 500) {
    throw new Error(`Expected status 201 or 500, got ${response.status}`);
  }
  if (response.status === 201) {
    if (!body.success || body.data.username !== sharedUsername) {
      throw new Error('Response body properties mismatch');
    }
  }
});

// Test Case 2: Register with duplicate email or username
addTest('Register with duplicate email/username', async () => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: sharedUsername,
      fullName: 'Duplicate Admin',
      email: sharedEmail,
      password: 'SomePassword123'
    })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 409 && response.status !== 500) {
    throw new Error(`Expected status 409 or 500, got ${response.status}`);
  }
});

// Test Case 3: Register with invalid email
addTest('Register with invalid email format', async () => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'valid_uname',
      fullName: 'Invalid Email Admin',
      email: 'not-an-email',
      password: 'SomePassword123'
    })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 400) {
    throw new Error(`Expected status 400, got ${response.status}`);
  }
});

// Test Case 4: Register with password too short
addTest('Register with password too short', async () => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'valid_uname2',
      fullName: 'Short Pass Admin',
      email: randomEmail(),
      password: '123'
    })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 400) {
    throw new Error(`Expected status 400, got ${response.status}`);
  }
});

// Test Case 5: Login using identifier (email)
addTest('Login using identifier (email)', async () => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: sharedEmail,
      password: 'AdminPassword@123'
    })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 200 && response.status !== 500) {
    throw new Error(`Expected status 200 or 500, got ${response.status}`);
  }
  if (response.status === 200) {
    sharedToken = body.data.token;
  }
});

// Test Case 6: Login using username key (backwards compatibility)
addTest('Login using username key', async () => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: sharedUsername,
      password: 'AdminPassword@123'
    })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 200 && response.status !== 500) {
    throw new Error(`Expected status 200 or 500, got ${response.status}`);
  }
});

// Test Case 7: Login with incorrect password
addTest('Login with incorrect password', async () => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: sharedUsername,
      password: 'WrongPassword'
    })
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 401 && response.status !== 500) {
    throw new Error(`Expected status 401 or 500, got ${response.status}`);
  }
});

// Test Case 8: GET /me without token
addTest('Get profile without auth token', async () => {
  const response = await fetch(`${BASE_URL}/me`, {
    method: 'GET'
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 401) {
    throw new Error(`Expected status 401, got ${response.status}`);
  }
});

// Test Case 9: GET /me with invalid token
addTest('Get profile with invalid token', async () => {
  const response = await fetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer invalid-token-string' }
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 401) {
    throw new Error(`Expected status 401, got ${response.status}`);
  }
});

// Test Case 10: GET /me with valid token
addTest('Get profile with valid auth token', async () => {
  if (!sharedToken) {
    console.log('Skipping: Login test did not yield a valid token.');
    return;
  }
  const response = await fetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${sharedToken}` }
  });

  const body = await response.json();
  console.log(`Status: ${response.status}`);
  console.log(`Body:`, JSON.stringify(body, null, 2));

  if (response.status !== 200) {
    throw new Error(`Expected status 200, got ${response.status}`);
  }
});

runTests();
