//amazon-->search prdt-->click resulting pdt-->triggers the tab-->newtab-->get the title

import test, { expect, chromium, firefox } from "@playwright/test";

/* test("Handling amazon with multiple tabs",async() =>{

    const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage();

    await page.goto("https://www.amazon.in/")
    const searchBox= page.locator("#twotabsearchtextbox")
    await searchBox.fill("Mobiles")
    await searchBox.press('Enter')
    await page.waitForTimeout(2000)

//create a promise -->event listener
    const newPromise=browserContext.waitForEvent('page')
    page.locator("//span[contains(text(),'Samsung')]").first().click()
    const newTab=await newPromise  //promise is resolved
    await page.waitForTimeout(5000)
    console.log(await newTab.title())  //child tab title
    await page.bringToFront()
    await page.waitForTimeout(3000)  //activate the parent page
    console.log(await page.title()) //parent tab title
    await searchBox.clear()
    console.log(newTab.url())
   // await newTab.bringToFront() //not mandatory
    await page.waitForTimeout(2000)
    /* const newPromise1=browserContext.waitForEvent('page')
    const newTab1=await newPromise1  //promise is resolved
    await page.waitForTimeout(5000)
    console.log(await newTab1.title())
    await page.waitForTimeout(3000)  //activate the parent page */
 //   console.log(await page.title())

//})

/* test(`Handling leafground with pages`,async()=>{
    const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage();
    await page.goto("https://leafground.com/window.xhtml")

    const newPromise=browserContext.waitForEvent('page')
    page.getByText("Open",{exact:true}).click()
    const newTab=await newPromise  
    console.log(await newTab.title())  //child tab title
    await newTab.bringToFront()  //activate the parent page
    console.log(await page.title()) //parent tab title
    await newTab.locator("#email").fill("vidya@gmail.com")
    await page.waitForTimeout(2000)

}) */ 

test.only(`Handling leafground with multiple tabs/window`,async()=>{
    const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage();
    await page.goto("https://leafground.com/window.xhtml")

 //concurrent approach
    
             const [multiplePromises]=await Promise.all([
                browserContext.waitForEvent('page'),
                
             ])

             //[]=[promise1,promise2]

            const allPages=  multiplePromises.context().pages()
            console.log(allPages.length)

        allPages.forEach(async tabs => {
            console.log(tabs.url())
            await tabs.waitForTimeout(5000)
            console.log(await tabs.title())
        });
             
        let webPage:any;
        for(let i=0;i<allPages.length;i++){
            const title=await allPages[i].title()
            console.log("The title of the page -->"+title)
           
              if(title==="Dashboard"){
                 webPage=allPages[i] 
                  //to store the dashboard page instance
            } 
         //   if(i==1){
           // allPages[i].close()
            //}
        }
      await page.waitForTimeout(5000);
   
      await webPage.locator("#email").fill("vidya@gmail.com")
      await webPage.waitForTimeout(2000)
      await webPage.close()
      await page.waitForTimeout(2000)
      await page.bringToFront() 
      /* const newPromise=browserContext.waitForEvent('page')
      page.getByText("Open",{exact:true}).click()
      const newTab=await newPromise  
      console.log(await newTab.title()) 

      await webPage.waitForTimeout(2000) */

})
