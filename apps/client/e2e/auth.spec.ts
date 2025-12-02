import { test, expect } from "@playwright/test";

test.describe("Auth Join Page", () => {
  test("should display join form with all elements", async ({ page }) => {
    await page.goto("/auth/join", { waitUntil: "networkidle" });

    await expect(page.getByText("Welcome", { exact: true })).toBeVisible();
    await expect(
      page.getByText("Join with your Apple or Google account"),
    ).toBeVisible();

    await expect(page.getByRole("button", { name: "Apple" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Google" })).toBeVisible();

    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();

    await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();

    await expect(page.getByRole("link", { name: "Login" })).toBeVisible();
  });
});

test.describe("Auth Login Page", () => {
  test("should display login form with all elements", async ({ page }) => {
    await page.goto("/auth/login", { waitUntil: "networkidle" });

    await expect(page.getByText("Welcome back")).toBeVisible();
    await expect(
      page.getByText("Login with your Apple or Google account"),
    ).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Login with Apple" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Login with Google" }),
    ).toBeVisible();

    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Login", exact: true }),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: "Join" })).toBeVisible();
  });
});
