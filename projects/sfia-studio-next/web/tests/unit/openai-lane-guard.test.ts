import { describe, expect, it } from "vitest";
import {
  assertOpenAiKeyForLane,
  openAiKeyFingerprint,
} from "@/lib/openai-lane-guard";

describe("openai-lane-guard", () => {
  it("fingerprints stably without exposing the key", () => {
    const fp = openAiKeyFingerprint("sk-test-key-aaaaaaaaaaaaaaaa");
    expect(fp).toHaveLength(16);
    expect(fp).toMatch(/^[0-9a-f]{16}$/);
  });

  it("refuses missing STUDIO_LANE", () => {
    const r = assertOpenAiKeyForLane({
      OPENAI_API_KEY: "sk-test-key-aaaaaaaaaaaaaaaa",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("STUDIO_LANE_MISSING");
  });

  it("refuses missing key", () => {
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "DEV",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_MISSING");
  });

  it("accepts matching expected fingerprint", () => {
    const key = "sk-test-key-bbbbbbbbbbbbbbbb";
    const fp = openAiKeyFingerprint(key);
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.reason);
    expect(r.keyFingerprint).toBe(fp);
  });

  it("refuses forbidden peer fingerprint (cross-lane contamination)", () => {
    const key = "sk-shared-contaminated-key-xxxx";
    const fp = openAiKeyFingerprint(key);
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "RECETTE",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_FORBIDDEN_KEY_FP: fp,
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_FORBIDDEN_PEER");
  });

  it("refuses expected fingerprint mismatch", () => {
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: "sk-test-key-cccccccccccccccc",
      SFIA_OPENAI_EXPECTED_KEY_FP: "deadbeefdeadbeef",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_FINGERPRINT_MISMATCH");
  });
});
