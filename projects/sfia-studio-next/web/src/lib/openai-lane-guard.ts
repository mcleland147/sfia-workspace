/**
 * ENV-01 — OpenAI key / lane isolation (fail-closed).
 *
 * Never log or return the raw key. Fingerprints are SHA-256 hex truncated to 16 chars.
 * A missing critical config refuses the LIVE path — no cross-lane fallback.
 */

import { createHash } from "node:crypto";

export type OpenAiLaneGuardResult =
  | { ok: true; lane: string; keyFingerprint: string }
  | {
      ok: false;
      lane: string;
      reasonCode:
        | "STUDIO_LANE_MISSING"
        | "OPENAI_KEY_MISSING"
        | "OPENAI_KEY_FINGERPRINT_MISMATCH"
        | "OPENAI_KEY_FORBIDDEN_PEER"
        | "OPENAI_KEY_EMPTY";
      reason: string;
    };

/** Non-secret fingerprint for comparison / observability. */
export function openAiKeyFingerprint(key: string): string {
  return createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
}

function studioLane(env: NodeJS.ProcessEnv = process.env): string {
  return (env.STUDIO_LANE ?? "").trim().toUpperCase();
}

/**
 * Assert the process OpenAI key belongs to this lane.
 *
 * Env (non-secret):
 * - `SFIA_OPENAI_EXPECTED_KEY_FP` — must match current key fingerprint when set
 * - `SFIA_OPENAI_FORBIDDEN_KEY_FP` — comma-separated peer fingerprints that must NOT match
 *   (e.g. RECETTE forbids the DEV key fingerprint once a distinct RECETTE key is in place)
 */
export function assertOpenAiKeyForLane(
  env: NodeJS.ProcessEnv = process.env,
): OpenAiLaneGuardResult {
  const lane = studioLane(env);
  if (!lane || lane === "UNKNOWN") {
    return {
      ok: false,
      lane: lane || "UNKNOWN",
      reasonCode: "STUDIO_LANE_MISSING",
      reason: "STUDIO_LANE requis pour l'admission OpenAI (fail-closed)",
    };
  }

  const key = (env.OPENAI_API_KEY ?? "").trim();
  if (!key) {
    return {
      ok: false,
      lane,
      reasonCode: "OPENAI_KEY_MISSING",
      reason: `OPENAI_API_KEY absent pour lane ${lane} — aucun fallback inter-lanes`,
    };
  }

  const keyFingerprint = openAiKeyFingerprint(key);
  if (!keyFingerprint) {
    return {
      ok: false,
      lane,
      reasonCode: "OPENAI_KEY_EMPTY",
      reason: "OPENAI_API_KEY vide après trim",
    };
  }

  const expected = (env.SFIA_OPENAI_EXPECTED_KEY_FP ?? "").trim().toLowerCase();
  if (expected && expected !== keyFingerprint) {
    return {
      ok: false,
      lane,
      reasonCode: "OPENAI_KEY_FINGERPRINT_MISMATCH",
      reason: `Empreinte OpenAI hors politique pour lane ${lane}`,
    };
  }

  const forbiddenRaw = (env.SFIA_OPENAI_FORBIDDEN_KEY_FP ?? "").trim().toLowerCase();
  if (forbiddenRaw) {
    const forbidden = forbiddenRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (forbidden.includes(keyFingerprint)) {
      return {
        ok: false,
        lane,
        reasonCode: "OPENAI_KEY_FORBIDDEN_PEER",
        reason: `Clé OpenAI interdite pour lane ${lane} (empreinte pair / contamination)`,
      };
    }
  }

  return { ok: true, lane, keyFingerprint };
}
