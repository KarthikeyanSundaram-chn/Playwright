import dotenv from 'dotenv';
import { test } from '@playwright/test';
import { dot } from 'node:test/reporters';

const multiEnv = process.env.envFile || 'leafTap';
dotenv.config({ path: `Data/${multiEnv}.env` });

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


test.skip("Test.Skip",async({page})=>{
    await page.goto("https://www.facebook.com")
})
test("Test",async({page})=>{
    await page.goto("https://www.google.com")
})

test.fail("test.fail",async({page})=>{
    await page.goto("https://www.amazon.in")
})

test.fixme("test.fixme",async({page})=>{
    await page.goto(url);
    await page.locator("#username").fill(uname)
    await page.locator("#password").fill(Password)  
    await page.locator(".decorativeSubmits").click()    //decorativeSubmit
})

test("test.info",async({page})=>{

    test.info().annotations.push({type:'Smoke Testing',description:'Testing Login Function'},
        {type:'Author',description:'Karthikeyan S'})

    await page.goto(url);
    await page.locator("#username").fill(uname)
    await page.locator("#password").fill(Password)  
    await page.locator(".decorativeSubmit").click()   
})

test("test.only",async({page})=>{
    await page.goto("https://www.amazon.in")
})