import { faker } from '@faker-js/faker'
import test, { expect } from '@playwright/test'

let accessToken:any
let instUrl:any
let tokenType:any
let LeadId:any
let fname=faker.person.firstName()
let lname=faker.person.lastName()
let cname=faker.company.buzzNoun()
//faker.lorem.sentence()


test(`Generate token`,async({request})=>{
  //endpoint
  //headers-->contenttype,connection
  //data -->grantType, clientid, client secret,username, password

const response=await request.post(`https://login.salesforce.com/services/oauth2/token`,{
    headers:{
        "Content-Type":"application/x-www-form-urlencoded",
        "Connection":"keep-alive"
    },
    form:{
        "grant_type":"password",
        "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
        "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
        "username":"vidyar@testleaf.com",
        "password":"Sales@123"        
    }
})
 const resBody=await response.json()
 console.log(resBody)
 accessToken=resBody.access_token
 instUrl=resBody.instance_url
 console.log(instUrl)
 tokenType=resBody.token_type
 expect(response.status()).toBe(200)
})

test(`create lead in salesforce`,async({request})=>{

    const  response= await request.post(`${instUrl}/services/data/v62.0/sobjects/Lead`,
        {
            headers:{
                "Content-Type":"application/json",
                //Bearer 00D5h0000098pgR!AQwAQHJmghS8Ol8uB5JVFC8oMQ0bmYrtobLvfRJr_3aRKlCSeaC50tgQg6FBeH7fZ8OFTq_LeEse8tYalhhfgNq7pYkA2dM4
                "Authorization":`${tokenType} ${accessToken}`
            },
            data:{
                    "FirstName":`${fname}`,
                    "LastName":`${lname}`,
                    "Company":  cname             
            }
        })

        const resBody=await response.json()
        console.log(resBody)
        LeadId=resBody.id   
        })


        test(`Get lead in salesforce`,async({request})=>{

            const  response= await request.get(`${instUrl}/services/data/v62.0/sobjects/Lead/${LeadId}`,
                {
                    headers:{
                        "Content-Type":"application/json",
                        //Bearer 00D5h0000098pgR!AQwAQHJmghS8Ol8uB5JVFC8oMQ0bmYrtobLvfRJr_3aRKlCSeaC50tgQg6FBeH7fZ8OFTq_LeEse8tYalhhfgNq7pYkA2dM4
                        "Authorization":`${tokenType} ${accessToken}`
                    },
                  
                })
        
                const resBody=await response.json()
                console.log(resBody)
                const lname=resBody.LastName
                console.log(lname)
                })