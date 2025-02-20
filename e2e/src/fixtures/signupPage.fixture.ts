import { test as base } from "@playwright/test";

import SignupPage from "../pages/SignupPage";

type SignupFixtures = {
  SignupPage: SignupPage;
};

export const SignupTest = base.extend<SignupFixtures>({
  SignupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);

    await signupPage.goto();

    await use(signupPage);
  },
});

export { expect } from "@playwright/test";
