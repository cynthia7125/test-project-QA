/* eslint-disable perfectionist/sort-classes */
import { expect, Page } from "@playwright/test";

export default class SignupPage {
  readonly page: Page;
  readonly usernameInputField;
  readonly passwordInputField;
  readonly ConfirmPasswordInputField;
  readonly submitButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputField = page.locator('input[id="username"]');
    this.passwordInputField = page.locator('input[id="password"]');
    this.ConfirmPasswordInputField = page.locator('input[id="confirmPassword"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  public async assertCurrentPage() {
    await expect(this.page).toHaveURL("https://practice.expandtesting.com/register");
  }

  public async goto() {
    await this.page.goto("https://practice.expandtesting.com/register");
  }
  public async inputUsername(username: string) {
    await this.usernameInputField.fill(username);
  }
  public async inputPassword(password: string) {
    await this.passwordInputField.fill(password);
  }
  public async inputConfirmPassword(confirmPassword: string) {
    await this.ConfirmPasswordInputField.fill(confirmPassword);
  }
  public async clickSubmitButton() {
    await this.submitButton.click();
  }
}
