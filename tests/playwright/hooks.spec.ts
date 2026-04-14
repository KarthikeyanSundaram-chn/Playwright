import test from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs'
import path from 'path';


test.use({ storageState: 'Data/state.json' })

test.describe.serial('Using Storage State File on the parallel mode', () => {

    let records: any[]

    test.beforeAll('Read the CSV file', async () => {

        console.log('Reading the CSV file before all tests');

        records = parse(fs.readFileSync("Data/test.csv"), { columns: true })

    })


    test.beforeEach("Before Each Hook - Navigate to Create Lead Page", async ({ page }) => {

        console.log('Navigating to Create Lead Page before each test'); 
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill("Demosalesmanager")

await page.locator("password").fill("crmsfa")

await page.locator(".decorativeSubmit").click()

        await page.waitForTimeout(3000);
        await page.click("#button")
    });


    test("Create Lead Test Cases", async ({ page }) => {

        console.log('Executing Create Lead Test Case');

        await page.click("//a[text()='Leads']")
        await page.click("//a[text()='Create Lead']")

    })
        
       
    test("Create Account Test Cases", async ({ page }) => {

        console

        await page.click("//a[text()='Accounts']")
        await page.click("//a[text()='Create Account']")

    })

    test.afterEach("After Each Hook - Log Out", async ({ page }, testInfo) => {
        console.log('Logging out after each test');
        console.log(`Test "${testInfo.title}" finished with status: ${testInfo.status}`);

    })

    test.afterAll("After All Hook - Completed all tests", async () => {
        console.log('Completed all tests in the suite');
    });

        
});