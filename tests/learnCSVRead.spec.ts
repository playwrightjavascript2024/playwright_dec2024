import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

//constants\loginCredentials.csv

// const loginData = parse(fs.readFileSync(path.join(__dirname, "../../constants/loginCredentials.csv")), {
//     columns: true //takes the first row of the csv as header
// })

// for (let data of loginData) {
//     test.skip(`Learn to read CSV values ${data.TestCaseId}`, async () => {
//         console.log(data.TestCaseId)

//     })

// }

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
test(`Learn to read CSV values ${data.TestCaseId}`, async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill(data.Username)
    await page.fill("#password",data.Pasword)
    await page.click(".decorativeSubmit") 
    })
}