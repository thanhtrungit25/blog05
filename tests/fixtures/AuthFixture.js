export class AuthFixture {
  constructor(page) {
    this.page = page
  }

  async signUpAndLogIn() {
    const testUser = 'test' + Date.now()

    await this.page.goto('/')
    await this.page.getByRole('link', { name: 'Sign Up' }).click()
    await this.page.getByLabel('Username:').click()
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').click()
    await this.page.getByLabel('Password:').fill('test')
    await this.page.getByRole('button', { name: 'Sign Up' }).click()

    await this.page.waitForURL('**/login')
    await this.page.getByLabel('Username:').click()
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').click()
    await this.page.getByLabel('Password:').fill('test')
    await this.page.getByRole('button', { name: 'Log In' }).click()

    await this.page.waitForURL('**/')
    return testUser
  }
}
