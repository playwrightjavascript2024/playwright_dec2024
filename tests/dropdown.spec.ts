import test from '@playwright/test'



test(`Uderstanding dropdown`,async({page})=>{

await page.goto("https://leafground.com/select.xhtml")

await page.selectOption("select.ui-selectonemenu",{label:"Playwright"})

await page.waitForTimeout(3000)
await page.selectOption("select.ui-selectonemenu",{index:3})

await page.waitForTimeout(3000)

const dd=page.locator(" //select[@class='ui-selectonemenu']/option")

const count=await dd.count()
console.log(count)
console.log(await dd.allInnerTexts())


for(let i=0;i<count;i++){
    console.log(await dd.nth(i).innerText())
    await page.selectOption("select.ui-selectonemenu",{index:i})
   }
    })

//     const text=   await dd.nth(i).innerText()
//     //multiple select
//     if(i%2==0){
//         //if(text==="Selenium"){
//          //   await page.selectOption("select.ui-selectonemenu",{label:text})
//         }
//    // }