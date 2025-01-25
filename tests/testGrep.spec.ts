
import test from '@playwright/test'


test.use({storageState:"constants/LF_Login.json"})
test.describe(`Grep with info`,{tag:'@Leads'},()=>{ 
    
    test(`Creating the Lead`,async({page})=>{
        test.info().annotations.push({type:"Regression",description:"Testing the Lead creation"},
            {type:"Author",description:"Vidya"}
        )
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Leads",{exact:true}).click()
    
    }) 
   
    test(`Creating the Accounts`,async({page},testInfo)=>{
        test.info().annotations.push({type:"Regression",description:"Testing the Accounts creation"},
            {type:"Author",description:"Vidya"}
        )
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Accounts",{exact:true}).click()
        console.log(testInfo.status)
        console.log(testInfo.title)       
    
    })

    
})

test.describe(`Group2`,()=>{ 
 
    test(`Creating the Lead`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Leads",{exact:true}).click()
    
    })
   
    test(`Creating the Accounts`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Accounts",{exact:true}).click()
    
    })

    
})