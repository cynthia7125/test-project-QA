/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { SignupTest as test } from "../fixtures/signupPage.fixture";

test("layout", async ({ SignupPage }) => {
  await SignupPage.assertCurrentPage();
});

test("@Signup", async ({ SignupPage }) => {
  await SignupPage.inputUsername("TestUser");
  await SignupPage.inputPassword("Password!");
  await SignupPage.inputConfirmPassword("Password!");
  await SignupPage.clickSubmitButton();
});
