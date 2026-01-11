import { test, expect } from '@playwright/test';

test('Example: Verify Google Homepage', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Check if the title contains "Google"
  await expect(page).toHaveTitle(/Google/);

  // Validate the "Google Search" button exists
  // Validate the "Google Search" button exists
  // Use :visible pseudo-class to ensure we select the interactable button
  const searchButton = page.locator('input[name="btnK"]:visible');
  await expect(searchButton).toBeVisible();

  const searchBox = page.locator('[name="q"]');

  // Highlight the search box by adding a border
  await page.evaluate((element) => {
    element.style.border = '3px solid red'; // Add a red border around the search box
  }, await searchBox.elementHandle());  // Pass elementHandle for proper access

  // Capture a screenshot of the page
  await page.screenshot({
    path: 'google_homepage_highlighted.png', // Screenshot file path
    fullPage: true, // Capture the entire page
  });
});
