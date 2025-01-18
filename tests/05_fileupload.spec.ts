import test from '@playwright/test'

test(`Using EventListener`,async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")

    //using event listener (fileChooser)
    const filePromise=page.waitForEvent('filechooser')
   await page.locator("//input[@id='file-upload']").click()
    const fileUpload=await filePromise
    await fileUpload.setFiles(["constants/loginsalesforce.json"])
    await page.waitForTimeout(3000)

})

test.only(`Using window EventListener`,async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const filePromise=page.waitForEvent('filechooser')
    await page.locator("//div[@id='drag-drop-upload']").click()
     const fileUpload=await filePromise
     await fileUpload.setFiles(["constants/loginsalesforce.json"])
     await page.waitForTimeout(3000)

})