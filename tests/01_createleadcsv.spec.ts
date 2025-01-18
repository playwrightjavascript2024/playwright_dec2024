import test, { expect } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

const loginCredentials = parse(fs.readFileSync(path.join(__dirname, "../constants/LeadCredentials.csv")), {
    columns: true,//takes the first row of the csv as header
    skip_records_with_empty_values:true
})


test(`Learn to read CSV values`, async ({page}) => {
  //for (let data of loginCredentials){
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("vidyar@testleaf.com")
    //console.log(data.username)
    await page.locator("//input[@id='password']").fill("Sales@123")
    //console.log(data.password)
    await page.click("//input[@id='Login']") 
    await page.waitForTimeout(2000)

    // Verify the title and url of the page using appropriate assertions 
    await expect(page).toHaveTitle("Home | Salesforce", { timeout: 15000 })
    await expect(page).toHaveURL("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")

     // Click App Launcher using the class locator 
     await page.locator("//div[@class='slds-icon-waffle']").click()

     // Click View All using getByText 
     await page.locator("//button[normalize-space()='View All']").click()

     await page.locator("//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input").fill("Lead", { timeout: 15000 })
     
       // Click Lead using index based XPath
     await page.locator("//mark[normalize-space()='Lead']").click()
     await page.waitForTimeout(5000)

     // click new lead 
     //await page.locator("//span[contains(text(),'New Lead')]").click()
     await page.locator("//div[@title='New']").click()
     await page.waitForTimeout(5000)

     // Enter firstname, lastname, company name
     for (let data of loginCredentials){
     await page.locator("//div[@class='slds-form-element__control slds-grow']/input[@name='firstName']").fill(data.firstname, { timeout: 15000 })
     console.log(data.firstname)
     //await page.hover();
     await page.locator("//div[@class='slds-form-element__control slds-grow']/input[@name='lastName']").fill(data.lastname)
     console.log(data.lastname)
     await page.locator("//div[@class='slds-form-element__control slds-grow']/input[@name='Company']",data.companyname) 
     await page.click("//button[@name='SaveEdit']")
     await page.waitForTimeout(2000)
     }
})
