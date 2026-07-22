import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work navigation', () => {
  test('should open Client Work page from Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    await page.getByRole('button', { name: /accept/i }).click().catch(() => {});
    await page.getByRole('link', { name: 'Services' }).click();
