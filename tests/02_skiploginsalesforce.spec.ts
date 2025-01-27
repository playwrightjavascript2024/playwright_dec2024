import test, {chromium} from '@playwright/test'

//to use the session stored info 
test.use({storageState:"constants/Salesforce_Login.json"})
test(`Use storageState`,async()=>{

    //console.log(process.env.LT_Username)

    const browser = await chromium.launch();
    const browserContext = await browser.newContext(); 
    const page = await browserContext.newPage();
    await page.goto("https://ami2-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    console.log(await page.title())
    await page.waitForTimeout(3000)
})