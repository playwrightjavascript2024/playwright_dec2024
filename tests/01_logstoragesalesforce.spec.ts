import test, {chromium, expect} from '@playwright/test'

test(`storageState`,async()=>{
    const browser = await chromium.launch();
    const browserContext = await browser.newContext(); 
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/")

    // Enter username using getByLabel 
    await page.locator("//input[@id='username']").fill("karthikeyan@ami.com")

    // Enter password using getByLabel 
    await page.locator("//input[@id='password']").fill("Sales@123")

    // Click Login 
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle("Home | Salesforce", { timeout: 15000 })
    await expect(page).toHaveURL("https://ami2-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    
    await page.context().storageState({path:"constants/Salesforce_Login.json"})

})