import test, { expect, chromium, firefox } from "@playwright/test";
test(`count of frames`,async({page})=>{

    await page.goto("https://www.oneindia.com/")
    //to get the iframe count
    const allFrames=page.frames()
    console.log(allFrames.length)
    await page.waitForLoadState('load')
    for(let frames of allFrames){
        const title= await frames.title()
        console.log(title)
    }   
})
test(`Handling frame with frame index`,async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    const alliframes=page.frames()
    //all index starts with 0
    //0 represents the mainframe of page -->screen of the app
    const firstFrame=alliframes[1] 
    //getting into the frame and handle the webelement  
    console.log( await firstFrame.locator("#Click").innerText())
      await firstFrame.locator("#Click").click()
    console.log( await firstFrame.locator("#Click").innerText())
    const childFrame=alliframes[4]
    await childFrame.locator("#Click").click()
})


test(`handling frame with frameObj`,async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")

    const frameEle= page.frame({url:"https://leafground.com/default.xhtml"})
    await frameEle?.locator("#Click").click()
    //frmae2 -->childframe-->button(clickme)
    //nested frame
    const outerfrmae=page.frame({url:"https://leafground.com/page.xhtml"})
    const chframe= outerfrmae?.childFrames()
    console.log(chframe?.length)
    await chframe?.at(0)?.locator("#Click").click()
    //if(!frameEle==null){
   // }else{}
})

test(`handling frame with frameLocator`,async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]")
      .locator("#Click").click()
     const nesteFrameEle=page.frameLocator("//h5[contains(text(),'Inside Nested frame')]").frameLocator("#frame2")
                                    .locator("#Click")
   console.log(await nesteFrameEle.innerText())
    await nesteFrameEle.click() 
   console.log(await nesteFrameEle.innerText())
    await page.waitForTimeout(3000)    
})


test.only(`classroom`,async()=>{

        const browser = await chromium.launch();
        
        const browserContext = await browser.newContext();
        
        const page = await browserContext.newPage();
        page.once('dialog', alertType => {
        const typeOfAlert = alertType.type()
        console.log(typeOfAlert)
        alertType.accept()
    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    const frameLocator= page.frameLocator("#iframeResult")     
     await frameLocator.locator("//button[normalize-space()='Try it']").click()
   console.log(await frameLocator.locator("#demo").innerText())
   
})