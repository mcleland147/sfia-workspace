import { describe, expect, it } from "vitest";
import {
  assertOpenAiKeyForLane,
  openAiKeyFingerprint,
} from "@/lib/openai-lane-guard";

function env( partial: Record<string, string | undefined>): NodeJS.ProcessEnv {
  return partial as unknown as NodeJS.ProcessEnv;
}

describe("openai-lane-guard", () => {
  it("fingerprints stably without exposing the key", () => {
    const fp = openAiKeyFingerprint("sk-test-key-aaaaaaaaaaaaaaaa");
    expect(fp).toHaveLength(16);
    expect(fp).toMatch(/^[0-9a-f]{16}$/);
  });

  it("refuses missing STUDIO_LANE", () => {
    const r = assertOpenAiKeyForLane(
      env({ OPENAI_API_KEY: "sk-test-key-aaaaaaaaaaaaaaaa" }),
    );
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("STUDIO_LANE_MISSING");
  });

  it("refuses missing key", () => {
    const r = assertOpenAiKeyForLane(env({ STUDIO_LANE: "DEV" }));
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_MISSING");
  });

  it("refuses missing expected fingerprint (fail-closed LIVE)", () => {
    const r = assertOpenAiKeyForLane(
      env({
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: "sk-test-key-aaaaaaaaaaaaaaaa",
      }),
    );
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_EXPECTED_FP_MISSING");
  });

  it("accepts matching expected fingerprint", () => {
    const key = "sk-test-key-bbbbbbbbbbbbbbbb";
    const fp = openAiKeyFingerprint(key);
    const r = assertOpenAiKeyForLane(
      env({
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: key,
        SFIA_OPENAI_EXPECTED_KEY_FP: fp,
      }),
    );
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.reason);
    expect(r.keyFingerprint).toBe(fp);
  });

  it("refuses forbidden peer fingerprint (cross-lane contamination)", () => {
    const key = "sk-shared-contaminated-key-xxxx";
    const fp = openAiKeyFingerprint(key);
    const r = assertOpenAiKeyForLane(
      env({
        STUDIO_LANE: "RECETTE",
        OPENAI_API_KEY: key,
        SFIA_OPENAI_EXPECTED_KEY_FP: fp,
        SFIA_OPENAI_FORBIDDEN_KEY_FP: fp,
      }),
    );
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_FORBIDDEN_PEER");
  });

  it("refuses expected fingerprint mismatch", () => {
    const r = assertOpenAiKeyForLane(
      env({
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: "sk-test-key-cccccccccccccccc",
        SFIA_OPENAI_EXPECTED_KEY_FP: "deadbeefdeadbeef",
      }),
    );
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_FINGERPRINT_MISMATCH");
  });
});
