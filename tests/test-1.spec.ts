import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('testname');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('cvcxvsdsad');
  await page.getByLabel('Keep me logged in (for up to').check();
  await page.getByPlaceholder('Enter the text you see on the').click();
  await page.getByPlaceholder('Enter the text you see on the').fill('dawnernter');
  await page.getByRole('button', { name: 'Log in' }).click();
});