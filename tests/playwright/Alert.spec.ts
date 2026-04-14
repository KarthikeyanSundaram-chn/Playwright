import { test } from "@playwright/test";

test("Alert handling", async({page}) => {

    page.once('dialog', alertType => {
        const type = alertType.type();
        console.log(type);
        console.log(alertType.message());
        console.log(`Dialog message: ${alertType.message()}`);
        alertType.accept();
    })
    
    await page.goto("https://www.leafground.com/alert.xhtml");
    await page.locator("button:has-text('Show')").first().click()
    await page.waitForTimeout(5000);
})

test("dialog", async({page})=>{

    page.once('dialog', alertType => {
        const type = alertType.type();
        console.log(type);
        console.log(alertType.message());
        console.log(`Dialog message: ${alertType.message()}`);
        alertType.accept();
    })
    
    await page.goto("https://www.leafground.com/alert.xhtml");
    await page.locator("button:has-text('Show')").first().click()
    await page.waitForTimeout(5000);
})
