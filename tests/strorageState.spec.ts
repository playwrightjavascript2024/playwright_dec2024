import test from '@playwright/test'

test(`storageState`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
    await page.context().storageState({path:"constants/LF_Login.json"})

})