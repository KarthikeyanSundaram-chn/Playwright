import login from "../../Data/mult.json" 
import test from "@playwright/test"

for(let data of login)
    {
        
    test(`JSON Data Driven Testing - ${data.TcNo}`, async({page})=>{
        console.log(data.UserName)
        console.log(data.Password)

    await page.goto("http://leaftaps.com/opentaps/control/clsmain");
    await page.locator("#username").fill(data.UserName)
    await page.locator("#password").fill(data.Password)  
    await page.locator(".decorativeSubmit").click()

    // By Text
    // await page.getByText("Login").click()

    //role
    // await page.getByRole("button",{name:"Login"}).click()

    //getAttribute
    // await page.getAttribute("id","button").then( async (val)=>{
    //     console.log(val)
    //     await page.locator(`#${val}`).click()  
    // })


    await page.getByLabel("CRM/SFA").click()
    
    })
}