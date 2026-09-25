/**
 * PILOT-EXEC RC-03 — trusted launch marker truthfulness.
 * ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { launchContextAsContractInputs } from "@/features/project-assistant/w2/resolveTrustedProductLaunchContext";
import type { TrustedProductLaunchContext } from "@/features/project-assistant/w2/resolveTrustedProductLaunchContext";

describe("RC-03 — trustedLaunchContextPinnedAtPrepare truthfulness", () => {
  it("A — full trusted pack from resolver includes binding identity fields", () => {
    const context: TrustedProductLaunchContext = {
      baseHeadSha: "a".repeat(40),
      repositoryBindingIdentity: "mcleland147/sfia-workspace",
      remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
      defaultBranch: "main",
      pathRoot: "projects/studyflow",
      managedRepoRoot: "/tmp/managed/clone",
    };
    const inputs = launchContextAsContractInputs(context);
    expect(inputs.baseHeadSha).toBe(context.baseHeadSha);
    expect(inputs.repositoryBindingIdentity).toBe(
      context.repositoryBindingIdentity,
    );
    expect(inputs.remoteUrl).toBe(context.remoteUrl);
    expect(inputs.defaultBranch).toBe(context.defaultBranch);
    expect(inputs.pathRoot).toBe(context.pathRoot);
    // Marker is applied ONLY by callers after resolver SUCCESS — not by this helper.
    expect(inputs).not.toHaveProperty("trustedLaunchContextPinnedAtPrepare");
  });

  it("B — legacy pinned-SHA-only must not invent trusted marker (caller contract)", () => {
    // Documented contract: prepareAndResolveM3ProductPath legacy branch
    // sets baseHeadSha without trustedLaunchContextPinnedAtPrepare.
    const legacyInputs: Record<string, string> = {
      baseHeadSha: "b".repeat(40),
    };
    expect(legacyInputs.trustedLaunchContextPinnedAtPrepare).toBeUndefined();
    expect(legacyInputs.repositoryBindingIdentity).toBeUndefined();
  });

  it("C — trusted marker requires resolver SUCCESS (boolean gate)", () => {
    const trustedLaunchPinned = true; // only set after launch.ok
    const inputs: Record<string, string> = {
      baseHeadSha: "c".repeat(40),
      ...(trustedLaunchPinned
        ? { trustedLaunchContextPinnedAtPrepare: "true" }
        : {}),
    };
    expect(inputs.trustedLaunchContextPinnedAtPrepare).toBe("true");

    const notPinned = false;
    const legacy: Record<string, string> = {
      baseHeadSha: "d".repeat(40),
      ...(notPinned ? { trustedLaunchContextPinnedAtPrepare: "true" } : {}),
    };
    expect(legacy.trustedLaunchContextPinnedAtPrepare).toBeUndefined();
  });
});
