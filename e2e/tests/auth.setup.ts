import { test as setup, expect } from "@playwright/test";
const { step } = setup;

// Session state will be saved in this file
const authFile = ".auth/user.json";

setup("authenticate", async ({ page }) => {
  await step("Visit login page", () => page.goto(`/login/`));

  await step("Fill in username/password", async () => {
    await page.getByLabel("Username").fill("testy");
    await page.getByLabel("Password").fill("testtest");
  });

  await step("Click the login button", async () => {
    await page.locator('button:text("Log In")').click();
  });

  await step("Expect to see the dashboard with a welcome message", async () => {
    await page.waitForURL(`/dashboard/`);
    await expect(page.locator('h1:text("Welcome testy")')).toBeVisible();
  });

  // Save the session
  await page.context().storageState({ path: authFile });
});
