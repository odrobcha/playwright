import { test as setup, expect } from '@playwright/test';
import {STORAGE_STATE} from '../playwright.config';

setup('test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('testname');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.context().storageState({path: STORAGE_STATE})


});
