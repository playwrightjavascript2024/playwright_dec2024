import test, { chromium } from '@playwright/test'

test(`Learning persistent Context in guestMode`,async()=>{

    const browser =await chromium.launch({headless:false})
    const page=await browser.newPage()
    await page.goto("https://www.google.com")
    await page.waitForTimeout(3000)
})


test.only(`Learning persistent Context in Normal browser`,async()=>{
    const context =await chromium.launchPersistentContext("userDataDir",{headless:false,
        channel:"chrome",
        httpCredentials:{
            username:"admin",
            password:"testleaf"
        },
         })

    //const page=browser.pages()

    const page=await context.newPage()
    await page.goto("https://leafground.com/auth.xhtml")
    await page.click("//span[text()='Basic Auth']")  
    await page.waitForTimeout(3000)
})
