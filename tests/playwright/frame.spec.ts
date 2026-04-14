import test from "@playwright/test"
test("Handle frame", async({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml");

    const frames = page.frames();

    console.log("No of frames:", frames.length);

    await page.frameLocator("(//iframe)[1]").locator("#Click").click();

    await page.waitForTimeout(3000);

    await page.frame({url:"https://www.leafground.com/page.xhtml"})?.frameLocator("#frame2").locator("#Click").click();        

    await page.waitForTimeout(3000);   
    
    console.log( await page.frame({url:"https://www.leafground.com/page.xhtml"})?.childFrames().length);

    console.log( await page.frame({url:"https://www.leafground.com/default.xhtml"})?.childFrames().length);

    await page.frame({url:"https://www.leafground.com/page.xhtml"})?.childFrames()[0].locator("#Click").click();

}
)