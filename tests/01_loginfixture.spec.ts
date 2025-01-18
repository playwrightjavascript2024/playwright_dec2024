import test, { chromium, firefox } from "playwright/test";

test(`Launching browser using fixture`,async({page})=>{
    // const browser= await chromium.launch()  //connect the repective browser
    // const context= await browser.newContext()//open a window /context
    // const page=await context.newPage() //opens the tab/page
     await page.goto("https://testleaf-dev-ed.my.salesforce.com/") //loads the url into the page/tab\
     await page.locator("#username").fill("karthikeyan@testleaf.com")
     await page.locator("input[name='pw']").clear();
     await page.locator("input[name='pw']").fill("UNceasing@92")
     await page.locator("#Login").click()
     await page.waitForTimeout(5000)
     
     const pageTitle=await page.title()
     console.log(await pageTitle)

})