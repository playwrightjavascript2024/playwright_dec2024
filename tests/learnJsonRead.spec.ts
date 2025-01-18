import test from '@playwright/test'
//import loginInfo from '../../constants/login.json'
import fs from 'fs'
import path from 'path'


const loginInfo=JSON.parse(fs.readFileSync(path.join(__dirname, "../../constants/login.json"),'utf-8'))
// test(`Read json data`,async()=>{
// for(let login of loginInfo){
//     console.log(login.Username)
// }
// })


for (let data of loginInfo) {
test(`Learn to read JSON data for ${data.TestId}`, async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill(data.Username)
    await page.fill("#password",data.Password)
    await page.click(".decorativeSubmit") 
    })
}