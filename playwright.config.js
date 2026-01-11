// playwright.config.js
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  use: {
    // Run headless in CI, but allow headed mode locally for debugging
    headless: !!process.env.CI,
  },
  reporter: [
    // Don't open the report automatically in CI; locally only open on failure
    ['html', { open: process.env.CI ? 'never' : 'on-failure' }]
  ],
  // Other optional configurations (like baseURL, devices, etc.)
});
