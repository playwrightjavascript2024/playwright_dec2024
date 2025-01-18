import {Browser, BrowserContext, chromium, Page} from '@playwright/test'

async function loadUrl(url:string,action?:'screenshot'|'title',timeout?:number){
      const browser:Browser=  await chromium.launch({headless:false})
        const context:BrowserContext=await browser.newContext()
        const page:Page=await context.newPage()
        await page.goto(url)
        if(action=='screenshot'&& timeout){
            await page.screenshot({path:"./screenshot.png"})
        }else if(action=="title"){
            console.log(await page.title())
        }else{
            console.log("No action performed")
        }
        handleAlert(page)
        await page.close()
        await context.close()
        await browser.close()
 }
async function runTest(){
    
    await loadUrl("http://www.google.com")
    await loadUrl("http://www.google.com",'screenshot',3000)
    await loadUrl("http://www.google.com","title")
}

runTest()


 function handleAlert(page:Page){    
   page.once('dialog',alertType=>{
        const typeOfAlert=alertType.type()
        console.log(typeOfAlert)
        alertType.accept()
    })
}