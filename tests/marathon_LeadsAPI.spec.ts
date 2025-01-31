import test, { expect } from "@playwright/test"
import { getBearerToken } from "../Week06/Day02/apiUtility"
import {faker} from '@faker-js/faker'

let instUrl : any
let tokenType : any
let accessToken : any
let LeadId : any
let fname=faker.person.firstName()
let lname=faker.person.lastName()
let cname=faker.company.buzzNoun()
let salutation=faker.person.prefix()

test(`Create Leads Salesforce API`, async({context})=>{

    const gtTokn = await getBearerToken(context.request)
    instUrl=gtTokn.instUrl
    tokenType = gtTokn.tokenType
    accessToken = gtTokn.accessToken
    console.log("Tokn is :"+instUrl+" "+tokenType+" "+accessToken)

    console.log("nam is :"+lname+" "+fname+" "+salutation)

    const response = await context.request.post(`${instUrl}/services/data/v62.0/sobjects/Lead`,
        {
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${tokenType} ${accessToken}`
            },
            data : {
                "lastname" : lname,
                "company" : cname,
                "firstname" : fname,
                "Salutation" : salutation
            }
        }
    )
    const createLadRspons = JSON.parse(await response.text())
    console.log("createLadRspons rspons is :"+await response.body())
    console.log(response.status())
    LeadId = createLadRspons.id
    console.log("Lad id is -->"+LeadId)
    expect(response.status()).toBe(201)
})

//Update Leads
test(`Update Leads Salesforce API`, async({context})=>{    

    const response = await context.request.patch(`${instUrl}/services/data/v62.0/sobjects/Lead/${LeadId}`,
        {
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${tokenType} ${accessToken}`
            },
            data : {
                "company" : faker.company.buzzNoun(),
                "Salutation" : faker.person.prefix()
            }
        }
    )
    console.log("Update lead response :"+response.status())
    console.log("Update lead response msg :"+response.statusText()) 
    expect(response.status()).toBe(204)

})

//Delete Leads
test(`Delete Leads Salesforce API`, async({page})=>{
    
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
    await page.getByPlaceholder("Search apps or items...").fill("Leads")
    await page.locator(".slds-truncate mark").click()
    await page.waitForLoadState('domcontentloaded')

    //search Lead
    await page.getByLabel("Search this list...").fill(fname)
    await page.keyboard.press("Enter");
    //await page.getByLabel("Search this list...").press('Enter')


    //Delete Lead
    await page.waitForLoadState('domcontentloaded')
    await page.locator("//a[contains(@class,'rowActionsPlaceHolder')]").first().click()

    await page.locator("//li/a[@title='Delete']").click()

    expect(await page.locator(".modal-container div:nth-child(2)").innerText()).toBe("Are you sure you want to delete this lead?")

    await page.locator("//button[@title='Delete']").click()

    await page.waitForLoadState('domcontentloaded')

    await page.waitForSelector("//div[contains(@id,'toastDescription')]")
    const deletedLeadMessage=await page.locator("//div[contains(@id,'toastDescription')]").textContent()
    console.log("Lead created message is :"+deletedLeadMessage)
    // Confirm Lead Deleted msg
    expect(await page.locator(".emptyContentInner span").innerText()).toEqual("No items to display.")
})