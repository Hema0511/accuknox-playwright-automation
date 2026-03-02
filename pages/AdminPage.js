// pages/AdminPage.js
class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.getByRole('link', { name: 'Admin' });
    this.addButton = page.getByRole('button', { name: 'Add' });
  }

  async goToAdminModule() {
    await this.adminMenu.click();
    await this.page.getByRole('heading', { name: 'System Users' })
      .waitFor({ timeout: 30000 });
  }

  async addNewUser() {
    await this.addButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.addButton.click();
  }
}

module.exports = { AdminPage };