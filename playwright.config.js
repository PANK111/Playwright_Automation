// playwright.config.js
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  use: {
    headless: false,  // This will launch the browser in non-headless mode (visible)
  },
  reporter: [
    ['html', { open: 'always' }] // Include the allure reporter in the config
  ],
  // Other optional configurations (like baseURL, devices, etc.)
});
