import test, { expect } from "@playwright/test"
import { getBearerToken } from "../Week06/Day02/apiUtility"

let instUrl : any
let tokenType : any
let accessToken : any
let dashboardId : any
test(`Create Dashboard Salesforce`, async({page})=>{
    //Navigate to salesforce and login
    await page.goto("https://testleaf-11e-dev-ed.develop.my.salesforce.com/")
    await page.locator("#username").fill("aashokrao@gmail.com")
    await page.locator("#password").fill("Haswanth@13")
    await page.locator("#Login").click()
    // click app launcher and click view all
    await page.waitForLoadState('domcontentloaded')
    await page.locator(".slds-icon-waffle").click()
    await page.getByLabel("View All Applications",{exact : true}).click()
    //search dashboard and click dashboards
    await page.getByPlaceholder("Search apps or items...").fill("Dashboards")
    await page.locator(".slds-truncate mark").click()
    await page.waitForLoadState('domcontentloaded')

    //Create new dashboard
    await page.getByTitle("New Dashboard",{exact : true}).first().click()

    await page.frameLocator("(//iframe)[1]").locator("#dashboardNameInput").fill("Salesforce Automation by Ashok")
    await expect(page.frameLocator("(//iframe)[1]").locator("#submitBtn")).toBeEnabled()
    await page.frameLocator("(//iframe)[1]").locator("#submitBtn").click()
    await page.waitForLoadState('domcontentloaded')
    await page.frameLocator("(//iframe)[1]").locator("//button[text()='Save']").first().click()
     await page.waitForSelector("//div[contains(@id,'toastDescription')]")
    const dashboardCreatedMessage=await page.locator("//div[contains(@id,'toastDescription')]").textContent()
    console.log("Lead created message is :"+dashboardCreatedMessage)

    await page.frameLocator("(//iframe)[1]").locator("//button[text()='Done']").first().click()

    await page.locator("//a[@title='Dashboards']").click()
    expect(await page.locator("//th[@data-label='Dashboard Name']//a").first().innerText()).toBe("Salesforce Automation by Ashok")

})

//Get all Dashboard details
test(`Get Dashboard details`, async({request,context})=>{
    const gtTokn = await getBearerToken(context.request)
    instUrl=gtTokn.instUrl
    tokenType = gtTokn.tokenType
    accessToken = gtTokn.accessToken
    console.log("Tokn is :"+instUrl+" "+tokenType+" "+accessToken)
    const response = await request.get(`${instUrl}/services/data/v62.0/sobjects/Dashboard`,
        {
            headers : {
            "Content-Type" : "application/json",
            "Authorization" : `${tokenType} ${accessToken}`
        }
    }
    )
    const resBody = JSON.parse(await response.text());
    dashboardId=resBody.recentItems[0].Id
    console.log("Latst dashbord id :"+dashboardId)

})

// Delete latest Dashboard details

test(`delete latest Dashboard details`, async({request})=>{

    const response = await request.delete(`${instUrl}/services/data/v62.0/sobjects/Dashboard/${dashboardId}`,
        {
            headers : {
            "Content-Type" : "application/json",
            "Authorization" : `${tokenType} ${accessToken}`
        }
    }
    )
    console.log(response.status())
    console.log(response.statusText())
    expect(response.status()).toBe(204)
})