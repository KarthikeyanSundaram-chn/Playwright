import test from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs'
import path from 'path';

// import { test } from '@playwright/test'
// import { parse } from 'csv-parse/sync'
// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

//read the value from the csv file -> set the path where file is saved
//fs and path
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const value:any[] =parse(fs.readFileSync(path.join(__dirname,"../../Data/SalesForce.csv"),'utf-8'),{
//     columns:true
// })

// 
const values:any[]= parse(fs.readFileSync(path.join(__dirname, '../../Data/test.csv')), {
    columns: true
}) 

for (let data of values) {


    test(`CSV Data Driven Testing - ${data.TcNo}, ${data.UserName}`, async ({ page }) => {

            console.log(data.UserName)
            console.log(data.Password)

    await page.goto("https://leaftaps.com/opentaps/control/login");
    await page.locator("#username").fill(data.UserName)
    await page.locator("#password").fill(data.Password)  
    await page.locator(".decorativeSubmit").click()
    await page.locator("#button").click()

    })

}