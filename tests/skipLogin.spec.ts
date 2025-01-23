import test, {chromium} from '@playwright/test'

//to use the session stored info 
test.use({storageState:"constants/LF_Login.json"})
test(`Use storageState`,async()=>{

    const browser = await chromium.launch();
    const browserContext = await browser.newContext(); 
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    console.log(await page.title())
    await page.waitForTimeout(3000)
})