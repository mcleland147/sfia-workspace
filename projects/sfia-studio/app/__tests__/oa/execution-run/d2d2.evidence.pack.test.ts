/**
 * @vitest-environment node
 * D2D2-10 slice evidence consolidation smoke.
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server/composeExecutionRunMemory";
import { getFixture } from "@/lib/oa/execution-run";

describe("D2D2-10 evidence pack", () => {
  it("fake provider composition discloses non-live boundaries", () => {
    const providers = composeExecutionRunProvidersFake();
    expect(providers.disclosure.cursorLive).toBe(false);
    expect(providers.disclosure.gitWrite).toBe(false);
    expect(providers.disclosure.providersLiveDefault).toBe(false);
    expect(providers.disclosure.memory).toBe("process_local");
    expect(providers.disclosure.gD2dCursor01).toBe("NOT_CONSUMED");
  });

  it("D2-D1 state authority composition remains available", async () => {
    const core = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await core.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
  });
});
