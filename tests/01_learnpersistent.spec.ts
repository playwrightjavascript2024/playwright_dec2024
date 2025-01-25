import test, { chromium } from '@playwright/test'

/* test(`Learning persistent Context in guestMode`,async()=>{

    const browser =await chromium.launch({headless:false})
    const page=await browser.newPage()
    await page.goto("https://www.google.com")
    await page.waitForTimeout(3000)
}) */


test.only(`Learning persistent Context in Normal browser`,async()=>{
    const context =await chromium.launchPersistentContext("userDataDir",{headless:false,
        channel:"chrome",
        httpCredentials:{
            username:"vidyar@testleaf.com",
            password:"Sales@123"
        },
         })

    //const page=browser.pages()

    const page=await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']")
  //  console.log(data.username)
    await page.locator("//input[@id='password']")
  //  console.log(data.password)
    await page.click("//input[@id='Login']") 
    await page.waitForTimeout(2000)
})
