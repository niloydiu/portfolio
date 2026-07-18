const { test, expect } = require('@playwright/test');

test.describe('Portfolio Website Tests', () => {
  test('should load the homepage and check elements', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Niloy's Portfolio/);

    // Verify main components are present
    await expect(page.locator('#top')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('#work')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should toggle dark/light mode successfully', async ({ page }) => {
    await page.goto('/');

    // Locate theme toggle button (button inside nav containing Lucide icons or clicking it)
    const toggleButton = page.locator('nav button').first();
    await expect(toggleButton).toBeVisible();

    // Check initial dark mode state on html tag
    const htmlElement = page.locator('html');
    const initialClass = await htmlElement.getAttribute('class');
    
    // Toggle theme
    await toggleButton.click();
    await page.waitForTimeout(500);

    const toggledClass = await htmlElement.getAttribute('class');
    expect(toggledClass).not.toBe(initialClass);
  });

  test('should verify projects in Work section do not have Github source code buttons', async ({ page }) => {
    await page.goto('/');

    // Ensure Github icon link is NOT inside the project action container in the Work section
    // The link should only be Live Demo
    const githubLink = page.locator('#work a[href*="github.com"]');
    const count = await githubLink.count();
    expect(count).toBe(0);
  });

  test('should secure admin page and show error on invalid password login', async ({ page }) => {
    await page.goto('/admin');

    // Check secure gateway heading (wait for compilation if needed)
    await expect(page.locator('h2')).toContainText('SECURE_GATEWAY', { timeout: 20000 });

    // Attempt login with wrong password
    await page.locator('input[type="password"]').fill('incorrect_password');
    await page.locator('button[type="submit"]').click();

    // Verify error message renders
    const errorMessage = page.locator('.bg-red-950\\/40');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Invalid password');
  });
});
