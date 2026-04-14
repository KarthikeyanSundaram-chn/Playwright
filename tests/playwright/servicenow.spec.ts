import { test, expect } from '@playwright/test';

test('Login to ServiceNow and order iPhone from Service Catalog', async ({ page }) => {
  // Navigate to ServiceNow developer instance
  await page.goto('https://dev281202.service-now.com/navpage.do');

  // Login to ServiceNow
  await page.fill('input[name="user_name"]', 'admin');
  await page.fill('input[name="user_password"]', 'VeNH2^kr!7Rv');
  await page.click('button[id="sysverb_login"]');
  
  // Wait for the page to load after login
//   await Promise.all([
//     await page.waitForLoadState('domcontentloaded'),
//   await page.waitForLoadState('networkidle')
  
//     ]);

    await page.waitForTimeout(5000);    

    // Verify successful login by checking for a known element on the landing page
    // await expect(page.getByAltText('ServiceNow Service Management', { exact: true })).toBeVisible();
//

  // Navigate to Service Catalog
  // Click on the menu/search icon or directly search for Service Catalog
  await page.click('div[aria-label="All"]');
  // await page.waitForTimeout(5000);
  
  //Count no of lists in the menu
    const menuItems = await page.locator("li.sn-polaris-nav-list-item.is-collapsible-item.can-animate").count();

    console.log(`Number of menu items: ${menuItems}`);

  // await page.click('button[aria-label="Toggle sidebar"]');
  await page.getByPlaceholder('Filter').fill('Service Catalog');
      await page.waitForTimeout(12000);    

  await page.locator("//a[contains(@aria-label,'Service Catalog')]").first().click();

  await page.waitForTimeout(5000);
  

//   // Search for iPhone in the catalog
  await page.getByPlaceholder('Mobiles. Cell phones to meet your business needs.').click
  await page.getByText('text=Apple iPhone 13Apple iPhone 13').first().click();
  
//   // Wait for iPhone details page to load
//   await page.waitForLoadState('networkidle');

//   // Add iPhone to cart / Order
//   await page.click('button:has-text("Order Now")');
  
//   // Fill in the order form if required
//   // Adjust selectors based on actual form fields
  
//   // Submit the order
//   await page.click('button:has-text("Submit")');
  
//   // Wait for order confirmation
//   await page.waitForLoadState('networkidle');
  
//   // Verify order confirmation message
//   const confirmationMessage = await page.locator('text=Order submitted successfully').isVisible();
//   expect(confirmationMessage).toBeTruthy();
});
