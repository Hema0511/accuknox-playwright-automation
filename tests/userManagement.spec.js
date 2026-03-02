// tests/userManagement.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');

test.describe('User Management - Admin Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
  });

  test('Navigate to Admin module', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.goToAdminModule();
    await expect(page).toHaveURL(/admin/);
  });

  test('Add new user in Admin module', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.goToAdminModule();
    await adminPage.addNewUser();
    await expect(page.getByText('Add User')).toBeVisible();
  });

});