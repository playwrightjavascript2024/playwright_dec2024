import test, {chromium, expect} from '@playwright/test'
import dotenv from 'dotenv'
const fileTORead=process.env.envFile
dotenv.config({path:`constants/${fileTORead}.env`})
test.only(`Learning salesforce persistent Context in Normal browser`,async()=>{
    const user=  process.env.LT_Username as string
    const pwd=process.env.LT_Password as string
    const context =await chromium.launchPersistentContext("userDataDir",{headless:false,
        channel:"chrome",
      
         })
    //const page=browser.pages()
    const browser = await chromium.launch();
    const browserContext = await browser.newContext(); 
    const page=await browserContext.newPage()
    await page.goto("https://login.salesforce.com/")
    // Enter username using getByLabel 
    await page.fill("//input[@id='username']",user)

    // Enter password using getByLabel 
    await page.fill("//input[@id='password']",pwd)

    // Click Login 
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle("Home | Salesforce", { timeout: 15000 })
    await expect(page).toHaveURL("https://ami2-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    console.log(await page.title())
})
   