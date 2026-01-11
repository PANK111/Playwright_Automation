// playwright.config.js
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  timeout: 30 * 1000,
  use: {
    // Force headless to true for now to debug
    headless: true,
  },
  reporter: [
    // Force 'never' to ensure it doesn't try to open the report
    ['html', { open: 'never' }]
  ],
  // Other optional configurations (like baseURL, devices, etc.)
});
