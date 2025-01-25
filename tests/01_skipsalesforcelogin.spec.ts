
import test from '@playwright/test'

//to use the session stored info 
test.use({storageState:"constants/LF_Login.json"})
test(`Use storageState`,async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    console.log(await page.title())
    await page.waitForTimeout(3000)
})