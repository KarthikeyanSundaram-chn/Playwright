import test from '@playwright/test';
import dotenv from 'dotenv';


const multiEnv = process.env.envFile || 'leafTap';
dotenv.config({ path: `Data/${multiEnv}.env` });

 let url = process.env.URL as string
 let uname = process.env.uname as string
 let Password = process.env.Password as string  

test.describe('Playwright Describe Block Example', () => {
  
    test.describe.configure({mode:'parallel', retries:1});

//  test.info().annotations.push({type:'Smoke Testing',description:'Testing Login Function'},
//         {type:'Author',description:'Karthikeyan S'})

    test('TC001', async ({page}) => {
    
        
        //process.env.variable_name
        console.log('URL:', url);
        console.log('Username:', uname);        
        console.log('Password:', Password);
        await page.goto(url);
        await page.locator("#username").fill(uname)
        await page.locator("#password").fill(Password)  
        await page.locator(".decorativeSubmits").click()    
    
    });

    test('TC002', async ({page}) => {
    
        //process.env.variable_name
        console.log('URL:', url);
        console.log('Username:', uname);        
        console.log('Password:', Password);
        await page.goto(url);
        await page.locator("#username").fill(uname)
        await page.locator("#password").fill(Password)  
        await page.locator(".decorativeSubmit").click()    
    
    });




  });
