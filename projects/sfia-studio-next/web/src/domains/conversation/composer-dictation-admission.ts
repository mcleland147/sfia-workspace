import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
import { composerDictationEnabled } from "./composer-dictation-types";

export type DictationEmissionAdmission =
  | {
      ok: true;
      mode: "live" | "substituted";
      lane: string;
      keyFingerprint: string | null;
      effectClass: "provider_live" | "substituted";
    }
  | { ok: false; code: string; message: string };

/**
 * Fail-closed admission before opening a Realtime transcription transport.
 * Fixture transport never falls through to live OpenAI.
 */
export function admitDictationProviderEmission(input: {
  env?: NodeJS.ProcessEnv;
  projectId: string;
  pilotId: string;
}): DictationEmissionAdmission {
  void input.projectId;
  void input.pilotId;
  const env = input.env ?? process.env;
  if (!composerDictationEnabled(env)) {
    return {
      ok: false,
      code: "FLAG_OFF",
      message: "Composer dictation is not enabled (SFIA_COMPOSER_DICTATION).",
    };
  }

  const lane = (env.STUDIO_LANE ?? "").trim().toUpperCase() || "UNKNOWN";
  const transportKind = (env.SFIA_DICTATION_TRANSPORT || "").trim();

  if (transportKind !== "" && transportKind !== "fixture" && transportKind !== "live") {
    return {
      ok: false,
      code: "TRANSPORT_UNKNOWN",
      message: `Unknown SFIA_DICTATION_TRANSPORT value (use empty/live for provider or fixture).`,
    };
  }

  if (transportKind === "fixture") {
    const vitest = env.VITEST === "true";
    const substitutedQual =
      (env.SFIA_DICTATION_SUBSTITUTED || "").trim() === "1" && lane === "DEV";
    if (!vitest && !substitutedQual) {
      return {
        ok: false,
        code: "FIXTURE_NOT_ADMITTED",
        message:
          "Fixture dictation transport requires VITEST or SFIA_DICTATION_SUBSTITUTED=1 on DEV lane.",
      };
    }
    return {
      ok: true,
      mode: "substituted",
      lane,
      keyFingerprint: null,
      effectClass: "substituted",
    };
  }

  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    const code =
      laneGuard.reasonCode === "OPENAI_KEY_MISSING"
        ? "NO_PROVIDER_KEY"
        : "LANE_GUARD";
    return {
      ok: false,
      code,
      message: laneGuard.reason.slice(0, 240),
    };
  }

  return {
    ok: true,
    mode: "live",
    lane: laneGuard.lane,
    keyFingerprint: laneGuard.keyFingerprint,
    effectClass: "provider_live",
  };
}

/** Narrow live check for call sites that must not open substituted transports. */
export function assertDictationEmissionAllowed(
  env: NodeJS.ProcessEnv = process.env,
): { ok: true } | { ok: false; code: string; message: string } {
  const admission = admitDictationProviderEmission({
    env,
    projectId: "",
    pilotId: "",
  });
  if (!admission.ok) {
    return { ok: false, code: admission.code, message: admission.message };
  }
  if (admission.mode !== "live") {
    return {
      ok: false,
      code: "SUBSTITUTED_ONLY",
      message: "Live transcription requires non-fixture transport admission.",
    };
  }
  return { ok: true };
}