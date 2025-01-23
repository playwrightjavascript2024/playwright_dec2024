import test, { expect, chromium, firefox } from "@playwright/test";

test(`Handling amazon with multiple tabs`,async({page, context}) =>{

    /* const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage(); */

    await page.goto("https://leafground.com/window.xhtml")
    await page.waitForTimeout(2000)

//create a promise -->event listener
    const newPromise=context.waitForEvent('page')
    page.locator("//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-right ui-button-warning']").click()
    const newTab=await newPromise  //promise is resolved
    await page.waitForTimeout(2000)
    console.log(await newTab.title()) 
    page.getByPlaceholder("Search...").fill("Faith smith") //child tab title
    await page.bringToFront()
    await page.waitForTimeout(3000)  //activate the parent page
    console.log(await page.title()) //parent tab title
   // await searchBox.clear()
    console.log(newTab.url())
   // await newTab.bringToFront() //not mandatory
    await page.waitForTimeout(2000)
    /* const newPromise1=browserContext.waitForEvent('page')
    const newTab1=await newPromise1  //promise is resolved
    await page.waitForTimeout(5000)
    console.log(await newTab1.title())
    await page.waitForTimeout(3000)  //activate the parent page */
    console.log(await page.title())

}) 