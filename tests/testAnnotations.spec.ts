import test from '@playwright/test'

test(`Test annotation with test.only smoke`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
   
})



test.skip(`Test annotation with test.skip`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
   
})


test.fixme(`Test annotation with test.fixme`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
   
})

test(`Test annotation with test.slow`,async({page})=>{
    test.slow()  //makes the test triple the times slower by overriding the default
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
   
})