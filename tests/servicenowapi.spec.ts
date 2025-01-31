import test, { chromium, expect } from '@playwright/test'
    const username="admin"
    const password="UY2mOUe^7p@f"
    const credentials=`${username}:${password}`
    const auth=btoa(credentials)

    let id:any
    let incnumber:any
 
test(`Create a resource with servicenow`,async({request})=>{
    performance.now()
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    //endpoint, headers, body,get the response

    const response=await request.post(`https://dev216320.service-now.com/api/now/table/incident`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Basic ${auth}`          //Base64  -ASCII  character   //username and password
        },
        data:{
            "description":"Laptop issue raised through pw api call"
        }
      })  
     const respBody= await response.json()
    // console.log(respBody)
     id=respBody.result.sys_id
     console.log(id)
     incnumber= respBody.result.number
     console.log(incnumber)
     const statusCode=response.status()
     expect(statusCode).toBe(201)
     expect(response.statusText()).toBe("Created")
})
test(`Get a all resource from incident table`,async({request})=>{
    
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    //endpoint, headers, body,get the response
    const response=await request.get(`https://dev216320.service-now.com/api/now/table/incident`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Basic ${auth}`          //Base64  -ASCII  character   //username and password
        }
      })  
     const respBody= await response.json()
   //  console.log(respBody)
     const statusCode=response.status()
     expect(statusCode).toBe(200)
     expect(response.statusText()).toBe("OK")
})



test(`Get a specific resource from incident table`,async({request})=>{
    
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    //endpoint-https://dev216320.service-now.com/api/now/table/incident/e7914e8e53df9610a09cf301a0490e48 -unique id-->sys_id
    // , headers, body,get the response  
    const response=await request.get(`https://dev216320.service-now.com/api/now/table/incident/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Basic ${auth}`          //Base64  -ASCII  character   //username and password
        }
      })  
     const respBody= await response.json()
     console.log(respBody)
     const statusCode=response.status()
     expect(statusCode).toBe(200)
     expect(response.statusText()).toBe("OK")
})



test(`Update a specific resource from incident table`,async({request})=>{
    
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    //endpoint-https://dev216320.service-now.com/api/now/table/incident/e7914e8e53df9610a09cf301a0490e48 -unique id-->sys_id
    // , headers, body,get the response  
    const response=await request.patch(`https://dev216320.service-now.com/api/now/table/incident/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Basic ${auth}`          //Base64  -ASCII  character   //username and password
        },
        data:{
            "short_description":"Learning with update the data with patch call"
        }
      })  
     const respBody= await response.json()
     console.log(respBody)
     const statusCode=response.status()
     expect(statusCode).toBe(200)
     expect(response.statusText()).toBe("OK")
})




test.skip(`Delete a specific resource from incident table`,async({request})=>{
    
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    //endpoint-https://dev216320.service-now.com/api/now/table/incident/e7914e8e53df9610a09cf301a0490e48 -unique id-->sys_id
    // , headers, body,get the response  
    const response=await request.delete(`https://dev216320.service-now.com/api/now/table/incident/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Basic ${auth}`          //Base64  -ASCII  character   //username and password
        }        
      })  
    //  const respBody= await response.json()
    //  console.log(respBody)  -Not applicable
     const statusCode=response.status()
     expect(statusCode).toBe(204)
     expect(response.statusText()).toBe("No Content")
})


 