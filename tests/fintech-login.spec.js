const { test, expect } = require('@playwright/test');

test('FinTech App - Valid Login Test', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  await page.click('#submit');

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

});

