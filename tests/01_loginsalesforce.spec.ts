import test from '@playwright/test'
import loginInfo from '../constants/loginsalesforce.json'
import fs from 'fs'
import path from 'path'


//const loginInfo=JSON.parse(fs.readFileSync(path.join(__dirname, "../../constants/loginsalesforce.json"),'utf-8'))


// test(`Read json data`,async()=>{
// for(let login of loginInfo){
//     console.log(login.Username)
// }
// })


for (let data of loginInfo) {
test(`Learn to read JSON data for ${data.TestcaseID}`, async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill(data.username)
    console.log(data.username)
    await page.fill("//input[@id='password']",data.password)
    console.log(data.password)
    await page.click("//input[@id='Login']") 
    await page.waitForTimeout(2000)
    })
}