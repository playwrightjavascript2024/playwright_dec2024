import test from '@playwright/test'


test(`Upload files directly`,async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")

    await page.locator("//span[text()='Choose']/following-sibling::input").first()
    .setInputFiles("constants/login.json")
    await page.waitForTimeout(3000)


    

})


test(`Using EventListener`,async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")

    //using event listener (fileChooser)
    const filePromise=page.waitForEvent('filechooser')
   await page.locator("(//h5[contains(text(),'Advanced Upload')]/following::input)[2]").click()
    const fileUpload=await filePromise
    await fileUpload.setFiles(["constants/TestLeaf Logo.png","constants/TestLeaf Logo.png"])
    await page.waitForTimeout(3000)

})


test(`Download file using EventListener`,async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")
    //using event listener (fileChooser)
    const filePromise=page.waitForEvent('download')
    await page.getByText("Download",{exact:true}).click()
    const fileDownload=await filePromise 
    await fileDownload.saveAs(fileDownload.suggestedFilename())
//await fileDownload.saveAs("download/myfile.png")
})


// test.use({viewport:null,
//     launchOptions:{
//         args:["--start-maximized"]
//     }
// })
test.only(`Shadow dom`,async({page})=>{


    await page.goto("https://www.salesforce.com/")
    await page.waitForLoadState('domcontentloaded')
   const learning=page.getByText("Learning",{exact:true}).first()
    //learning.hover()
   await learning.click()
})