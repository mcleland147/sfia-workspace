import { describe, expect, it } from "vitest";
import { mapOauthCallbackError, safeReturnPath } from "@/domains/integrations/oauth-return-path";

describe("safeReturnPath", () => {
  it("allows exact allowlist and project paths", () => {
    expect(safeReturnPath("/settings/integrations")).toBe("/settings/integrations");
    expect(safeReturnPath("/portfolio")).toBe("/portfolio");
    expect(safeReturnPath("/projects/proj_abc-1")).toBe("/projects/proj_abc-1");
  });

  it("rejects open redirects and hostile forms", () => {
    expect(safeReturnPath("https://evil.example/x")).toBe("/settings/integrations");
    expect(safeReturnPath("//evil.example")).toBe("/settings/integrations");
    expect(safeReturnPath("/\\evil")).toBe("/settings/integrations");
    expect(safeReturnPath("/settings/integrations/../../etc/passwd")).toBe(
      "/settings/integrations",
    );
    expect(safeReturnPath("/settings/integrations?next=https://evil")).toBe(
      "/settings/integrations",
    );
    expect(safeReturnPath("javascript:alert(1)")).toBe("/settings/integrations");
    expect(safeReturnPath("/not-allowed")).toBe("/settings/integrations");
    expect(safeReturnPath("/%2e%2e/secret")).toBe("/settings/integrations");
  });

  it("maps callback errors to opaque codes", () => {
    expect(mapOauthCallbackError({ code: "ACCESS_DENIED" })).toBe("access_denied");
    expect(mapOauthCallbackError({ code: "NOT_CONFIGURED" })).toBe("not_configured");
    expect(mapOauthCallbackError(new Error("secret stack"))).toBe("failed");
  });
});
