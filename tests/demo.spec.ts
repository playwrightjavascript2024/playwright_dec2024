
import test, { chromium } from "@playwright/test";

test("To launch a browser", async () => {

    const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage();
    
    await page.goto("https://www.google.com/");

    
    let title = await page.title()
    console.log("The title is: " + title)

    let url = await page.url()
    console.log("The url is: " + url)

   });
