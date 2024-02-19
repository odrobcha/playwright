const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole("link", {name: /logg in/i})

})
