import { afterEach, describe, expect, it } from "vitest";

describe("studioEntryCapabilities", () => {
  const prev = {
    lane: process.env.STUDIO_LANE,
    testLogin: process.env.STUDIO_DEV_TEST_LOGIN,
    ghId: process.env.GITHUB_CLIENT_ID,
    ghSecret: process.env.GITHUB_CLIENT_SECRET,
  };

  afterEach(() => {
    for (const [k, v] of Object.entries({
      STUDIO_LANE: prev.lane,
      STUDIO_DEV_TEST_LOGIN: prev.testLogin,
      GITHUB_CLIENT_ID: prev.ghId,
      GITHUB_CLIENT_SECRET: prev.ghSecret,
    })) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
    // Force re-import is hard; test pure gate logic via isDevAdapterConsumeAllowed instead
    // when module caches githubConfigured. Capabilities re-read env each call for lane/flag.
  });

  it("exposes testLoginAvailable only on DEV/RECETTE with flag", async () => {
    process.env.GITHUB_CLIENT_ID = "x";
    process.env.GITHUB_CLIENT_SECRET = "y";
    // Dynamic import after env set — auth module captures githubConfigured at load.
    const { studioEntryCapabilities } = await import("@/lib/auth");

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(true);

    process.env.STUDIO_LANE = "RECETTE";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(true);

    process.env.STUDIO_LANE = "STABLE";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(false);

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "0";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(false);
  });
});
