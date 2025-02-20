/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { loginTest as test } from "../fixtures/loginPage.fixture";

test("@Login Negative", async ({ LoginPage }) => {
  await LoginPage.assertCurrentPage();
  await LoginPage.fillUsername("TestUser");
  await LoginPage.fillPassword("Password!!");
  await LoginPage.clickSubmitButton();
  await LoginPage.assertErrorAlert("Your password is invalid!");
});
test("@Login positive", async ({ LoginPage }) => {
  await LoginPage.assertCurrentPage();
  await LoginPage.fillUsername("TestUser");
  await LoginPage.fillPassword("Password!");
  await LoginPage.clickSubmitButton();
});
