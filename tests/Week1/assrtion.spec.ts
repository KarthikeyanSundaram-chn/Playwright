import { test, expect } from '@playwright/test';

test.describe('Assertion Examples', () => {
    // Auto-retrying assertion (soft assertion)
    test('retry assertion - soft expect', async ({ page }) => {
        await page.goto('https://example.com');
        
        // These assertions will retry automatically
        expect(page.locator('text=Example')).toBeVisible();
        expect(page.locator('input')).toHaveCount(3);
    });

    // Non-retrying assertion (hard assertion)
    test('non-retry assertion - hard expect', async ({ page }) => {
        await page.goto('https://example.com');
        
        // This assertion fails immediately without retry
        await expect(page).toHaveTitle('Example');
    });

    // Mixed: soft and hard assertions
    test('mixed assertions', async ({ page }) => {
        await page.goto('https://example.com');
        
        // Soft assertions - retry up to timeout
        expect(page.locator('h1')).toBeVisible();
        expect(page.locator('p')).toContainText('Example');
        
        // Hard assertion - fails immediately
        await expect(page.locator('button')).toBeEnabled();
    });

    // Configure retry timeout for soft assertions
    test.describe('custom timeout', () => {
        test('soft assertion with custom timeout', async ({ page }) => {
            test.setTimeout(10000);
            
            expect(page.locator('.loading')).toHaveCount(1);
        });
    });
});