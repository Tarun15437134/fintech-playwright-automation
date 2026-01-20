const { test, expect } = require('@playwright/test');

test('Healthcare App - Patient Logout Test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Login
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');


  // Click logout
  await page.click('text=Log out');

  // Verify logout page
  await expect(page).toHaveURL(/practice-test-login/);
});
