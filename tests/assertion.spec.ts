import test, { chromium, expect, firefox } from "playwright/test";

test(`Launching browser using fixture`,async({page})=>{
    // const browser= await chromium.launch()  //connect the repective browser
    // const context= await browser.newContext()//open a window /context
    // const page=await context.newPage() //opens the tab/page
     await page.goto("https://leafground.com/waits.xhtml") //loads the url into the page/tab\
     await page.locator("//button[@id='j_idt87:j_idt89']//span[@class='ui-button-text ui-c'][normalize-space()='Click']").click({timeout:5000});
     await page.waitForTimeout(5000);
     let IamHere= await page.locator("//span[contains(text(),'I am here')]")
     console.log(IamHere)
     await page.waitForTimeout(5000);
     await expect(IamHere).toBeVisible();
     const pageTitle=await page.title()
     console.log(await pageTitle)

})