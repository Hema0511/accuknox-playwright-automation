// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async login() {
    // SIMPLE navigation – no waitUntil
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');

    // Wait ONLY for username field
    await this.username.waitFor({ state: 'visible', timeout: 30000 });

    await this.username.fill('Admin');
    await this.password.fill('admin123');
    await this.loginBtn.click();

    // Confirm dashboard loaded
    await this.page.locator('h6:has-text("Dashboard")')
      .waitFor({ timeout: 30000 });
  }
}

module.exports = { LoginPage };