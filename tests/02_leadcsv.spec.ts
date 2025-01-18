import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'


const loginCredentials = parse(fs.readFileSync(path.join(__dirname, "../constants/LeadCredentials.csv")), {
    columns: true,//takes the first row of the csv as header
    skip_records_with_empty_values:true
})


// test.skip(`Learn to read CSV values`, async () => {
//     for (let data of loginCredentials) {
//         console.log(data.TestCaseId)
//         console.log(data.Username)
//         console.log(data.Pasword)
//     }
// })


for (let data of loginCredentials) {
test(`Learn to read lead CSV values ${data.TestCaseId}`, async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill(data.username)
    console.log(data.username)
    await page.fill("//input[@id='password']",data.password)
    console.log(data.password)
    await page.click("//input[@id='Login']") 
    await page.waitForTimeout(2000)
    })
}