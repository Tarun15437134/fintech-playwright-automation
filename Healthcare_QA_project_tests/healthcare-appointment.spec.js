const { test, expect } = require('@playwright/test');

test('Healthcare App - Appointment Booking Simulation', async ({ page }) => {

  // Go directly to form (skip login for faster execution)
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });

  // Fill Patient Details
  await page.fill('input#firstName', 'Rajesh');
  await page.fill('input#lastName', 'Jadapalli');
  await page.fill('input#userEmail', 'rajesh@test.com');
  await page.fill('input#userNumber', '1234567890');

  // Select Gender
  await page.click('label:has-text("Male")');

  // Fill Address
  await page.fill('textarea#currentAddress', '123 Health Street, Phoenix');

  // Verify form is filled
  await expect(page.locator('input#firstName')).toHaveValue('Rajesh');
});
