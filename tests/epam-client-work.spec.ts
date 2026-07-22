import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work scenario', () => {
  test('navigates from Services to Client Work page', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page
      .getByRole('banner')
      .getByRole('link', { name: 'Services', exact: true })
      .click();

    await expect(page).toHaveURL(/\/services$/);

    await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

    await expect(page).toHaveURL(/\/services\/client-work$/);
    await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
  });
});
