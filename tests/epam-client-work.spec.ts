import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from the home page to Client Work via Services', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    const acceptAllButton = page.getByRole('button', { name: 'Accept All' });
    if (await acceptAllButton.isVisible().catch(() => false)) {
      await acceptAllButton.click();
    }

    const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
    await expect(servicesLink).toBeVisible();
    await servicesLink.evaluate((element: HTMLAnchorElement) => element.click());
    await expect(page).toHaveURL(/\/services$/);

    const exploreClientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
    await expect(exploreClientWorkLink).toBeVisible();
    await exploreClientWorkLink.click();

    await expect(page).toHaveURL(/\/services\/client-work/);
    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  });
});
