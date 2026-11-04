import { describe, expect, it, afterEach } from "vitest";
import {
  generateNoraReply,
  mustUseNoraFixture,
  noraFixtureFlagsOutsideDev,
} from "@/domains/conversation/nora-adapter";

describe("Nora E2E / lane fixture boundaries", () => {
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

  it("DEV + STUDIO_E2E=1 → fixture COMPLETE even if key present (no LIVE path)", async () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
    expect(mustUseNoraFixture()).toBe(true);
    expect(noraFixtureFlagsOutsideDev()).toBe(false);
    const result = await generateNoraReply({
      userText: "ping e2e isolation",
      contextSnippets: [],
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/fixture FAKE/);
  });

  it("DEV without E2E/force + no key → fixture COMPLETE (local DEV convenience)", async () => {
    delete process.env.STUDIO_E2E;
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    process.env.STUDIO_LANE = "DEV";
    delete process.env.OPENAI_API_KEY;
    expect(mustUseNoraFixture()).toBe(false);
    const result = await generateNoraReply({ userText: "dev no key", contextSnippets: [] });
    expect(result.status).toBe("COMPLETE");
    expect(result.mode).toBe("deterministic-fixture");
  });

  it("RECETTE + STUDIO_E2E=1 → FAILED (no FAKE COMPLETE, no LIVE)", async () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "RECETTE";
    process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
    expect(mustUseNoraFixture()).toBe(false);
    expect(noraFixtureFlagsOutsideDev()).toBe(true);
    const result = await generateNoraReply({ userText: "blocked", contextSnippets: [] });
    expect(result.status).toBe("FAILED");
    expect(result.content).toMatch(/NORA_FIXTURE_LANE_FORBIDDEN/);
    expect(result.content).not.toMatch(/fixture FAKE, not LIVE/);
  });

  it("STABLE + STUDIO_E2E=1 → FAILED", async () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "STABLE";
    delete process.env.OPENAI_API_KEY;
    const result = await generateNoraReply({ userText: "blocked", contextSnippets: [] });
    expect(result.status).toBe("FAILED");
    expect(result.content).toMatch(/NORA_FIXTURE_LANE_FORBIDDEN/);
  });

  it("absent lane + STUDIO_E2E=1 → FAILED", async () => {
    process.env.STUDIO_E2E = "1";
    delete process.env.STUDIO_LANE;
    const result = await generateNoraReply({ userText: "blocked", contextSnippets: [] });
    expect(result.status).toBe("FAILED");
    expect(noraFixtureFlagsOutsideDev()).toBe(true);
  });

  it("RECETTE without key and without E2E flags → FAILED (no silent FAKE)", async () => {
    delete process.env.STUDIO_E2E;
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    process.env.STUDIO_LANE = "RECETTE";
    delete process.env.OPENAI_API_KEY;
    const result = await generateNoraReply({ userText: "no fake", contextSnippets: [] });
    expect(result.status).toBe("FAILED");
    expect(result.content).toMatch(/NORA_LIVE_KEY_REQUIRED/);
    expect(result.content).not.toMatch(/fixture FAKE, not LIVE/);
  });

  it("STUDIO_FORCE_NORA_FIXTURE outside DEV → FAILED", async () => {
    delete process.env.STUDIO_E2E;
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    process.env.STUDIO_LANE = "RECETTE";
    const result = await generateNoraReply({ userText: "force blocked", contextSnippets: [] });
    expect(result.status).toBe("FAILED");
    expect(mustUseNoraFixture()).toBe(false);
  });
});
