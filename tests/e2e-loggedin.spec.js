const { test, expect } = require('@playwright/test');

test('Is not logged in', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByPlaceholder('Enter your username').click();
    await page.getByPlaceholder('Enter your username').fill('testname');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test');
    await page.getByRole('button', { name: 'Log in' }).click();

    

})
