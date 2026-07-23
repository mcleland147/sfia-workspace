/** @vitest-environment node */
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { analyzeIntent } from "@/lib/d1/intake/analyzeIntent";
import { FakeIntakeConversationProvider } from "@/lib/d1/intake/fakeIntakeProvider";
import { setIntakeProviderForTests } from "@/lib/d1/intake/resolveProvider";
import {
  isD1PlatformIntegrationEnabled,
  setD1PlatformIntegrationForTests,
} from "@/lib/d1/intake/platformFlag";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

describe("D1 Shared Platform Integration", () => {
  beforeEach(() => {
    setIntakeProviderForTests(new FakeIntakeConversationProvider());
    setD1PlatformIntegrationForTests(true);
  });
  afterEach(() => {
    setIntakeProviderForTests(null);
    setD1PlatformIntegrationForTests(null);
  });

  it("flag defaults to enabled", () => {
    setD1PlatformIntegrationForTests(null);
    delete process.env.D1_PLATFORM_INTEGRATION;
    expect(isD1PlatformIntegrationEnabled()).toBe(true);
  });

  it("loads canonical core sources and returns telemetry", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "plat-1",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.enabled).toBe(true);
    expect(result.platform.sources.length).toBe(
      SFIA_CANONICAL_CORE_PATHS.length,
    );
    expect(result.platform.sources.map((s) => s.path).sort()).toEqual(
      [...SFIA_CANONICAL_CORE_PATHS].sort(),
    );
    expect(result.proposal.proposedProjectId).toBeNull();
    expect(result.platform.events.some((e) => e.type === "SOURCE_LOADED")).toBe(
      true,
    );
    expect(
      result.platform.events.some((e) => e.type === "STRUCTURED_OUTPUT_VALIDATED"),
    ).toBe(true);
  });

  it("runs a read-only git tool when fixture marker present", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "plat-2",
      rawIntent:
        "__D1_TOOL_GIT_STATUS__ Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.toolCalls).toBeGreaterThanOrEqual(1);
    expect(result.platform.tools.some((t) => t.name === "git_local_get_status")).toBe(
      true,
    );
    expect(result.platform.tools.every((t) => t.status === "OK")).toBe(true);
    expect(result.proposal.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
  });

  it("denies reading .env via tool (POLICY) without fake success", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "plat-3",
      rawIntent:
        "__D1_TOOL_DENIED_PATH__ Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.tools.some((t) => t.status === "DENIED")).toBe(true);
    expect(result.proposal.proposedProjectId).toBeNull();
  });

  it("legacy path when flag disabled skips tool loop sources optional", async () => {
    setD1PlatformIntegrationForTests(false);
    const result = await analyzeIntent({
      sessionLocalId: "plat-4",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.enabled).toBe(false);
    expect(result.platform.toolCalls).toBe(0);
    expect(result.platform.sources.length).toBe(0);
    expect(result.proposal.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
  });
});
