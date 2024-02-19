import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/search?q=wiki&oq=wiki&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI3OTlqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
    await page.getByRole('button', { name: 'Прийняти всі' }).click();
    await page.getByRole('link', { name: 'Вікі — Вікіпедія Вікіпедія' }).click();
    await page.getByPlaceholder('Пошук у Вікіпедії').click();
    await page.getByPlaceholder('Пошук у Вікіпедії').fill('dsds');
    await page.getByRole('button', { name: 'Перейти' }).click();
});
