import { describe, expect, it, afterEach } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";

describe("Nora E2E fixture isolation", () => {
  const prev = {
    e2e: process.env.STUDIO_E2E,
    key: process.env.OPENAI_API_KEY,
    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
    lane: process.env.STUDIO_LANE,
  };

  afterEach(() => {
    const map: Record<string, string | undefined> = {
      STUDIO_E2E: prev.e2e,
      OPENAI_API_KEY: prev.key,
      STUDIO_FORCE_NORA_FIXTURE: prev.force,
      STUDIO_LANE: prev.lane,
    };
    for (const [k, v] of Object.entries(map)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  });

  it("STUDIO_E2E=1 returns deterministic-fixture even when OPENAI_API_KEY is set (no LIVE path)", async () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
    const result = await generateNoraReply({
      userText: "ping e2e isolation",
      contextSnippets: [],
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/fixture FAKE/);
    expect(result.content).not.toMatch(/openai-agents-sdk-live/);
  });
});
