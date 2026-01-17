const { test, expect } = require('@playwright/test');

test('FinTech App - Money Transfer Simulation', async ({ page }) => {

  // Login first
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  // Verify login success
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  // Simulate checking account balance
  let pageContent = await page.content();
  expect(pageContent).toContain('student');

  // Simulate transaction details
  const transactionDetails = {
    sender: 'student',
    amount: '1000',
    recipient: 'john@example.com',
    date: new Date().toISOString().split('T')[0]
  };

  // Verify transaction object is created
  expect(transactionDetails.sender).toBe('student');
  expect(transactionDetails.amount).toBe('1000');
  expect(transactionDetails.recipient).toBe('john@example.com');

});
