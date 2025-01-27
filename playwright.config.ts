import { defineConfig, devices } from '@playwright/test';
const now = new Date();
const report=now.getUTCDate()
const reportMonth = now.getUTCMonth()
const repYear = now.getUTCFullYear()
const repHours = now.getUTCHours()
const repMinutes = now.getUTCMinutes()
const repSeconds = now.getUTCSeconds()
const repMilliseconds = now.getUTCMilliseconds()


export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,
  timeout: 120000,
  expect: {
    timeout: 10000
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{outputFolder:"./playwright-report/" +report+reportMonth+repYear+repHours+repMinutes+repSeconds+repMilliseconds}]],
  use: {
   trace: 'on',
   video: 'on',
   screenshot: 'on',
   headless: false,
   actionTimeout:40*1000,
   
  },

  /* Configure projects for major browsers */
  projects: [
  /*   {
      name: 'chromium',
      use: { channel: 'msedge-dev'},
    }, */

    /*  {
      name: 'chromium',
      use: { ...devices['Desktop Firefox'], channel: 'firefox'},
    }, */

   /*  {
       name: 'chromium',
      use: { 
      //  ...devices['Desktop Chrome'], channel: 'chrome',
      //  ...devices['Desktop Firefox'], channel: 'firfox',
     // ...devices['Desktop Safari'], channel: 'webkit',
    //  ...devices['Desktop Edge'], channel: 'msedge',
      viewport: null,
    //  headless: false,
      deviceScaleFactor: undefined,
      launchOptions: {
        args: ["--start-maximized"] 
      //  headless: false,
      }
      
    },
  }, */

  {
    name: 'chromium',
   use: { 
     ...devices['Desktop Chrome'], channel: 'chrome',
   //  ...devices['Desktop Firefox'], channel: 'firfox',
  // ...devices['Desktop Safari'], channel: 'webkit',
 // ...devices['Desktop Edge'], channel: 'msedge',
   viewport: null,
  // headless: false,
   deviceScaleFactor: undefined,
   launchOptions: {
     args: ["--start-maximized"] 
   //  headless: false,

   }
   
 },
},

    /*   {
        name: 'Microsoft Edge',
        use: { ...devices['Desktop Edge'], channel: 'msedge-dev' }, // or "msedge-beta" or 'msedge-dev'
     // },
     */
  
 
   /*  {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], channel: 'firefox'} 
    },  
 */
    /* {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], channel: 'webkit' },
    },  */ 
 
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

   //  Test against branded browsers. 
    /*  {
       name: 'Microsoft Edge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' },
     }, */
    /*  {
       name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
     }, */
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});