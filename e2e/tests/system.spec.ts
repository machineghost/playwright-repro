import { test, expect, PlaywrightTestArgs } from "@playwright/test";
const { describe, step } = test;

describe("Create", () => {
  test("Can create a system", async ({ page }: PlaywrightTestArgs) => {
    await step("Go to the system creation page", async () => {
      await page.goto("/system/create");
      await expect(
        page.getByRole("heading", { name: "Create New System" })
      ).toBeVisible();
    });
  });
});
