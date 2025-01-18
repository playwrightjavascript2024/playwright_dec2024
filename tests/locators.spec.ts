import test from '@playwright/test'

test(`Learning Basic Locators`, async ({ page }) => {

    //Load the URl in the browser
    await page.goto("http://leaftaps.com/opentaps/control/login")


    //locate and fill the data in the username field
    await page.locator("#username").fill("demoSalesManager")

    await page.locator("#username").fill("demoSalesManager")

   //await page.locator
  // awaitn page.fiee

    //to enter password
    await page.locator(`[name="PASSWORD"]`).fill("crmsfa")

    await page.waitForTimeout(2000)

    //to click on the login button
    await page.locator(".decorativeSubmit").click()

    console.log(await page.title())

    //locating the element with text

    await page.locator("text=CRM/SFA").click()

    await page.waitForTimeout(2000)

})

test.only(`Learning Basic Locators as resuable locator`, async ({ page }) => {

    //Load the URl in the browser
    await page.goto("http://leaftaps.com/opentaps/control/login")

    //locate the username element 
    //resubale code
    const username = page.locator("#username")
    const password = page.locator(`[name="PASSWORD"]`)
    await username.fill("demoSalesManager")

    //to enter password by clearing the previous data and then enter with new data
    await password.clear()
    await password.fill("crmsfa")

    await page.waitForTimeout(2000)

    //to click on the login button
    await page.locator(".decorativeSubmit").click()

    console.log(await page.title())

    await page.waitForTimeout(2000)

})