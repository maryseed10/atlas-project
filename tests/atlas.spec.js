import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/?lang=en_us');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Log in').click();
  await page.goto('https://app.go2atlas.com/version-test/?lang=en_us');
  await expect(page.locator('#INDEX_BTN_LOG_IN')).toContainText('Log in');
  await page.getByText('Log in').click();
  await expect(page.locator('body')).toContainText('Welcome Back');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('maryseed10@hotmail.com');
});
