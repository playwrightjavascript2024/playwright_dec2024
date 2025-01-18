import test from '@playwright/test'

test(`Learning Xpath Locators`, async ({ page }) => {

    //Load the URl in the browser
    await page.goto("http://leaftaps.com/opentaps/control/login")


    //locate and fill the data in the username field
    await page.locator(`//input[@id="username"]`).fill("demoSalesManager")

    //to enter password
    await page.locator(`//input[@name="PASSWORD"]`).fill("crmsfa")

    await page.waitForTimeout(2000)

    //to click on the login button
    await page.locator(`//input[@class="decorativeSubmit"]`).click()

    console.log(await page.title())

   await page.locator(`//a[contains(text(),'CRM')]`).click()

   await page.waitForTimeout(2000)

})