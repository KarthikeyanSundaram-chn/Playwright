import { test, expect } from "@playwright/test";

let companyName = "Infy"

let firstName = "Sai"

let lastName = "Karthi"

let salutation = "SK"

let title  ="Mr"

let annualRevenue = "100,000"

let department = "Testing"

let phonumber = "1234567890"

let industry = "Retail"


let companyNameEdit = "CTS"

let firstNameEdit = "Saipranav"

let lastNameEdit = "Karthikeyan"

let annualRevenueEdit = "200,000"

let departmentEdit = "QE"

let descriptionEdit = "Training"

test.beforeEach(async ({ page }) => {

// Setup: run before every test

await page.goto("https://leaftaps.com/opentaps/control/login");
await page.locator("#username").fill("Demosalesmanager")

await page.locator("password").fill("crmsfa")

await page.locator(".decorativeSubmit").click()

await page.locator("#button").click()

});

test.afterEach(async ({ page }) => {

await page.close()

})

test("Create Lead", async ({ page }) => {

await page.locator('a').getByText("Leads").click()

await page.locator('a').getByText('Create Lead').click();

await page.locator("[name='firstName']").nth(2).fill (firstName)

await page.locator("[name='lastName']").nth(2).fill(lastName)

await page.locator("[name='companyName']").nth(1).fill(companyName)

await page.locator("#createLeadForm_personalTitle").fill(salutation)

await page.locator("[name='personalTitle']").fill(title)

await page.locator("#createLeadForm_departmentName").fill(department)

await page.locator ("[name='annualRevenue']").fill(annualRevenue)

await page.selectOption("#createLeadForm_industryEnumId", {label: industry})

await page.locator("#createLeadForm_primaryPhoneNumber").fill(phonumber)

await page.locator('.smallSubmit').click();

await page.waitForTimeout (5000)

await expect (page.locator('#viewLead_statusId_sp')).toContainText("Assigned")

await expect (page.locator('#viewLead_companyName_sp')).toContainText(companyName);

await expect(page.locator('#viewLead_firstName_sp')).toContainText(firstName);

await expect (page.locator('#viewLead_lastName_sp')).toContainText(lastName);

await expect (page.locator('#viewLead_generalProfTitle_sp')).toContainText(salutation);

await expect (page.locator('#viewLead_personalTitle_sp')).toContainText(title);

await expect (page.locator('#viewLead_annualRevenue_sp')).toContainText(annualRevenue);

await expect (page.locator('#viewLead_departmentName_sp')).toContainText(department);

await expect(page.locator('.contactTable > tbody > tr:nth-child(2) > td:nth-child(2) > div')).toContainText

await console.log(page.title()) 

} )



test("Edit Lead", async ({page}) => {

await page.locator('a').getByText("Leads").click()

await page.locator('a').getByText('Find Lead').click();

await page.locator("[name='firstName']").nth (2).fill(firstName)

await page.locator ("[name='lastName']").nth (2).fill(lastName)

await page.locator("[name='companyName']").nth (1).fill(companyName)

await page.locator("button").getByText('Find Leads').click();

await page.locator('.linktext').nth(3).click();

await page.waitForTimeout(1000)

await page.locator('a').getByText('Edit').click();

await page.locator("[name='companyName']").nth(1).fill(companyNameEdit)

await page.locator("[name='annualRevenue']").fill(annualRevenueEdit)

await page.locator("[name='departmentName']").fill(departmentEdit)

await page.locator("#updateLeadForm_description").fill(descriptionEdit)

await page.locator("[value='Update']").click();

await page.waitForTimeout(1000)

await expect(page.locator('#viewLead_companyName_sp')).toContainText(companyNameEdit);

await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText (annualRevenueEdit);

await expect(page.locator('#viewLead_departmentName_sp')).toContainText (departmentEdit);

await expect(page.locator('#viewLead_description_sp')).toContainText (descriptionEdit);

await console.log(page.title())

})