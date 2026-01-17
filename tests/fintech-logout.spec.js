const { test, expect } = require('@playwright/test');

test('FinTech App - Logout Test', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  // Verify login was successful
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  // Click Logout
  await page.click('a:has-text("Log out")');

  // Verify we're back on login page (logout successful)
  await expect(page.locator('h2')).toHaveText('Test login');

});
