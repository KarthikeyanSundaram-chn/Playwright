import dotenv from 'dotenv';
import { test } from '@playwright/test';
import { dot } from 'node:test/reporters';
// import path from 'path';    
//   dotenv.config({ path: path.resolve(__dirname, '../Data/PROD.env') }); 

// dotenv.config({ path:'Data/PROD.env'});


//mult env

const multiEnv = process.env.envFile || 'sf';
dotenv.config({ path: `Data/${multiEnv}.env` });

//setfile
//env:envFile="PROD"

//unset env variable
//env:envFile=""

 let url = process.env.URL as string
 let uname = process.env.uname as string
 let Password = process.env.Password as string  


test('Load PROD environment variables', async ({page}) => {

    //process.env.variable_name
    console.log('URL:', url);
    console.log('Username:', uname);
    console.log('Password:', Password);

    await page.goto(url);
    await page.locator("#username").fill(uname)
    await page.locator("#password").fill(Password)  
    await page.locator(".decorativeSubmit").click()
   
}); 