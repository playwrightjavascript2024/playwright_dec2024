import test from '@playwright/test'
import dotenv from 'dotenv'

const fileTORead=process.env.envFile
dotenv.config({path:`constants/${fileTORead}.env`})

test(`Learn ENV data`,async({page})=>{
    //to read the data from the env
    console.log(process.env.LT_Username)

  const user=  process.env.LT_Username as string
  const pwd=process.env.LT_Password as string
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill(user)
    await page.fill("//input[@id='password']",pwd)
    await page.click("//input[@id='Login']") 
})