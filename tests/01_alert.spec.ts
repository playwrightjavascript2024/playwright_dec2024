import test from "playwright/test";

test(`Sweet alert`,async({page})=>{
    // const browser= await chromium.launch()  //connect the repective browser
    // const context= await browser.newContext()//open a window /context
    // const page=await context.newPage() //opens the tab/page
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.locator("//span[text()='Show']").nth(2).click() 
    await page.locator("(//span[text()='Dialog']/following::a[@aria-label='Close'])[1]").click()
    await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click()
   // await page.locator("(//span[normalize-space()='Delete']//following::span[@class='ui-button-icon-left ui-icon ui-c pi pi-check']/following::span[text()='Yes'])").click()
    await page.locator("//span[normalize-space()='Delete']").click()
    await page.locator("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-check']/following::span[text()='Yes'])").click()
  //  await page.locator("//span[normalize-space()='Yes']").click()

})