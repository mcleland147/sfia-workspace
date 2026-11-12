/**
 * Admission gate for DEV/E2E mutating fixture HTTP routes.
 * Independent of Nora fixture activation (STUDIO_FORCE_NORA_FIXTURE alone never authorizes).
 */
export function e2eFixtureMutationsAllowed(env: NodeJS.ProcessEnv = process.env): {
  ok: boolean;
  reason?: string;
} {
  if (env.NODE_ENV === "production") {
    return { ok: false, reason: "NODE_ENV_PRODUCTION" };
  }
  if ((env.STUDIO_LANE ?? "").trim() !== "DEV") {
    return { ok: false, reason: "LANE_NOT_DEV" };
  }
  if ((env.STUDIO_E2E ?? "").trim() !== "1") {
    return { ok: false, reason: "STUDIO_E2E_REQUIRED" };
  }
  return { ok: true };
}
