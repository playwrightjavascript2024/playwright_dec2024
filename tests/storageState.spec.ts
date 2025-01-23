import test, {chromium} from '@playwright/test'

test(`storageState`,async()=>{
    const browser = await chromium.launch();
    const browserContext = await browser.newContext(); 
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
    await page.context().storageState({path:"constants/LF_Login.json"})

})