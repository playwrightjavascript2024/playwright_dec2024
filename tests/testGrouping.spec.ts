import test from "@playwright/test";

test.use({storageState:"constants/LF_Login.json"})
test.describe.skip(`Grouping of  test in sequntial`,()=>{ 
  
    test(`Creating the Lead`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Leads",{exact:true}).click()
       
    })
   
    test(`Creating the Accounts`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Accounts",{exact:true}).click()
    
    })
    
})
test.use({storageState:"constants/LF_Login.json"})
test.describe(`Grouping of  test in serial`,()=>{ 
    test.describe.configure({ retries: 2,mode:"serial"})
    test(`Creating the Lead`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Lea",{exact:true}).click()
    
    })
   
    test(`Creating the Accounts`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Accounts",{exact:true}).click()
    
    })

    
})





test.use({storageState:"constants/LF_Login.json"})
test.describe.skip(`Grouping of  test in parallel`,()=>{ 
   test.describe.configure({mode:"parallel"})
    test(`Creating the Lead`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Lea",{exact:true}).click()
    
    })
   
    test(`Creating the Accounts`,async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.getByText("Accounts",{exact:true}).click()
    
    })

    
})