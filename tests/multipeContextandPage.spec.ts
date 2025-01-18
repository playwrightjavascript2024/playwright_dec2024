import test, { chromium, firefox } from "playwright/test";

test(`Launching browser using chromium`,async()=>{
    const browser= await chromium.launch()  //connect the repective browser
    const context= await browser.newContext()//open a window /context
    const page=await context.newPage() //opens the tab/page

    await page.goto("https://www.google.com") //loads the url into the page/tab

    await page.waitForTimeout(3000)

    const context1=  await browser.newContext()
    const page1=await context1.newPage()
    const page2=await context1.newPage()

    await page1.goto("https://login.salesforce.com/")

    await page1.waitForTimeout(3000)

    await page2.goto("http://www.amazon.in")

    await page2.waitForTimeout(3000)


})