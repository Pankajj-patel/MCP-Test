import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work Scenario', () => {
  test('should navigate to Services, click Explore Our Client Work, and verify Client Work text', async ({ page }) => {
    // Step 1: Navigate to EPAM website
    await page.goto('https://www.epam.com/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Step 2: Select "Services" from the header menu
    // Using a more robust selector for the Services menu item
    const servicesLink = page.locator('header').locator('a, button').filter({ hasText: /^Services$/i });
    await servicesLink.first().click();
    
    // Wait for Services page to load
    await page.waitForLoadState('networkidle');
    
    // Step 3: Click the "Explore Our Client Work" link
    const exploreClientWorkLink = page.locator('a').filter({ hasText: /Explore Our Client Work/i });
    await exploreClientWorkLink.first().click();
    
    // Wait for Client Work page to load
    await page.waitForLoadState('networkidle');
    
    // Step 4: Verify that "Client Work" text is visible on the page
    const clientWorkText = page.locator('text=/Client Work/i');
    await expect(clientWorkText).toBeVisible();
    
    // Additional verification - check if the text appears in heading or main content
    const pageContent = page.locator('body');
    await expect(pageContent).toContainText(/Client Work/i);
  });

  test('should verify Services menu is accessible from header', async ({ page }) => {
    // Navigate to EPAM website
    await page.goto('https://www.epam.com/');
    await page.waitForLoadState('networkidle');
    
    // Verify Services menu exists in header
    const header = page.locator('header');
    const servicesLink = header.locator('a, button').filter({ hasText: /^Services$/i });
    
    await expect(servicesLink.first()).toBeVisible();
  });

  test('should verify Client Work page contains expected content', async ({ page }) => {
    // Navigate directly to expected Client Work page
    // This is a fallback test in case navigation needs adjustment
    await page.goto('https://www.epam.com/');
    await page.waitForLoadState('networkidle');
    
    // Navigate through Services
    const servicesLink = page.locator('header').locator('a, button').filter({ hasText: /^Services$/i });
    if (await servicesLink.first().isVisible()) {
      await servicesLink.first().click();
      await page.waitForLoadState('networkidle');
      
      // Look for Client Work link
      const clientWorkLink = page.locator('a').filter({ hasText: /Client Work|Explore Our Client Work/i });
      if (await clientWorkLink.first().isVisible()) {
        await clientWorkLink.first().click();
        await page.waitForLoadState('networkidle');
        
        // Verify we're on a Client Work related page
        const pageTitle = page.locator('h1, h2, h3').filter({ hasText: /Client Work/i });
        await expect(pageTitle.first()).toBeVisible();
      }
    }
  });
});
