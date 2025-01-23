
import test, { chromium, firefox, webkit } from "@playwright/test";

test("To launch a browser", async () => {

    const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage();
    
    await page.goto("https://login.salesforce.com/");

    await page.fill('input[type="email"]', 'karthikeyan@testleaf.com');
    await page.fill('input[type="password"]', 'UNceasing@92');

    await page.click('input[name="Login"]');

    await page.waitForTimeout(10000);
    let title = await page.title()
    console.log("The title is: " + title)

    let url = await page.url()
    console.log("The url is: " + url)

   });
