import { defineConfig, devices } from '@playwright/test';
/* import dotenv from 'dotenv'
dotenv.config({path:"constants/.env"}) */
export default defineConfig({
  expect:{
    timeout:10000
  },
  testDir: './tests',  
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
   use: {
      trace:'on',
      screenshot:'on',
      video:'on',
      headless:false,
      actionTimeout:40*1000,
  },

  /* Configure projects for major browsers */
  projects: [
 

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], channel: 'chrome',
      viewport: null,
     // headless: false,
      deviceScaleFactor: undefined,
      launchOptions: {
        args: ["--start-maximized"]
     
      }
    }, 
  },
 
],
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
