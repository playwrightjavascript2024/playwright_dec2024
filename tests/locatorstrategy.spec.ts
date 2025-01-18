import test from '@playwright/test'

test(`Learning CSS Locators`, async ({ page }) => {

    //Load the URl in the browser
    await page.goto("http://leaftaps.com/opentaps/control/login")

    //to implemenent index based strategy

     const credentials= page.locator(".inputLogin")
     const count= await credentials.count()
     console.log(count)

    //  let userdata=["demoCSR","crmsfa"]
    //  for(let index=0;index<count;index++){
    //     await credentials.nth(index).fill(userdata[index])
    //  }

await credentials.first().fill("demoSalesManager")
await credentials.last().fill("crmsfa")

await page.locator(".decorativeSubmit").click()
const text=await page.locator(`text=CRM/SFA`).innerText()
console.log(text)
     
     //await credentials.nth(1).fill("crmsfa")
    
    console.log(await page.title())

    await page.waitForTimeout(2000)

})

test.only(`Learning xpath Locators as resuable locator`, async ({ page }) => {

    //Load the URl in the browser
    await page.goto("http://leaftaps.com/opentaps/control/login")

    //locate the username element 
    //resubale code
    const username = page.locator("//input[@class='inputLogin']")     //index based xpath
    await username.nth(0).fill("demoSalesManager")
    await page.locator("(//input[@class='inputLogin'])[2]") .fill("crmsfa")
    //const credentials = page.locator("//input[@class='inputLogin']")    

    //to click on the login button
    await page.locator(".decorativeSubmit").click()

    console.log(await page.title())
    await page.waitForTimeout(2000)

})