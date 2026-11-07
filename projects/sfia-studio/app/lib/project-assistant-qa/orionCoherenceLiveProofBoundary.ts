/**
 * ORION-NORA-COHERENCE-CORR-01 — opt-in LIVE proof boundary (FINAL-REVIEW-CORR-635).
 *
 * Disabled by default. No hardcoded project ids / machine paths.
 * No .env.local parsing. No implicit Pilot/Morris authority. No DB reset flag.
 * Cursor REAL forced OFF when resolving a live config.
 *
 * Accepts either LIVE_PROVIDER_OPT_IN=1 or legacy ORION_COHERENCE_LIVE=1.
 */
import fs from "node:fs";
import path from "node:path";

export const LIVE_PROVIDER_OPT_IN_ENV = "LIVE_PROVIDER_OPT_IN" as const;
export const ORION_COHERENCE_LIVE_LEGACY_ENV = "ORION_COHERENCE_LIVE" as const;

export const LIVE_PROOF_PROJECT_ID_ENV = "TEST_PROJECT_ID" as const;
export const LIVE_PROOF_PRODUCT_DB_ENV = "TEST_PRODUCT_DB_PATH" as const;
export const LIVE_PROOF_NORA_DB_ENV = "TEST_NORA_DB_PATH" as const;
export const LIVE_PROOF_DIR_ENV = "TEST_PROOF_DIR" as const;

/** Legacy aliases already used by Studio product composition. */
export const LIVE_PROOF_PRODUCT_DB_ALIAS_ENV =
  "SFIA_STUDIO_PRODUCT_DB_PATH" as const;
export const LIVE_PROOF_NORA_DB_ALIAS_ENV =
  "SFIA_STUDIO_NORA_SESSION_DB_PATH" as const;

const FORBIDDEN_AUTHORITY_ENVS = [
  "SFIA_STUDIO_LOCAL_PILOT_AUTHORITY",
  "SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY",
  "SFIA_V2_RUNTIME_ALLOW_RESET",
] as const;

export type LiveProofBoundaryFailure = {
  readonly ok: false;
  readonly reason: string;
  readonly code:
    | "opt_in_missing"
    | "project_id_missing"
    | "product_db_missing"
    | "product_db_not_file"
    | "nora_db_missing"
    | "nora_db_not_file"
    | "openai_key_missing"
    | "authority_escalation_present"
    | "cursor_real_forbidden";
};

export type LiveProofBoundaryConfig = {
  readonly ok: true;
  readonly projectId: string;
  readonly productDbPath: string;
  readonly noraDbPath: string;
  readonly proofDir: string | null;
  readonly cursorReal: "0";
};

export type LiveProofBoundaryResult =
  | LiveProofBoundaryConfig
  | LiveProofBoundaryFailure;

/** Loose env map — tests may pass partial objects without ProcessEnv.NODE_ENV. */
export type LiveProofEnv = Readonly<Record<string, string | undefined>>;

function readTrimmed(env: LiveProofEnv, key: string): string | null {
  const v = env[key];
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length > 0 ? t : null;
}

export function isLiveProviderOptIn(env: LiveProofEnv = process.env): boolean {
  return (
    readTrimmed(env, LIVE_PROVIDER_OPT_IN_ENV) === "1" ||
    readTrimmed(env, ORION_COHERENCE_LIVE_LEGACY_ENV) === "1"
  );
}

/**
 * Resolve LIVE proof targets. Fail closed before any side effect.
 * Does not create DB files, does not write proofs, does not mutate env.
 */
export function resolveOrionCoherenceLiveProofBoundary(
  env: LiveProofEnv = process.env,
): LiveProofBoundaryResult {
  if (!isLiveProviderOptIn(env)) {
    return {
      ok: false,
      code: "opt_in_missing",
      reason:
        "LIVE provider proof disabled — set LIVE_PROVIDER_OPT_IN=1 (or ORION_COHERENCE_LIVE=1) deliberately.",
    };
  }

  for (const key of FORBIDDEN_AUTHORITY_ENVS) {
    if (readTrimmed(env, key) === "1") {
      return {
        ok: false,
        code: "authority_escalation_present",
        reason: `${key}=1 is incompatible with the LIVE proof boundary — unset it before opt-in execution.`,
      };
    }
  }

  if (readTrimmed(env, "SFIA_STUDIO_CURSOR_REAL") === "1") {
    return {
      ok: false,
      code: "cursor_real_forbidden",
      reason:
        "SFIA_STUDIO_CURSOR_REAL=1 is forbidden for this LIVE proof boundary.",
    };
  }

  const projectId = readTrimmed(env, LIVE_PROOF_PROJECT_ID_ENV);
  if (!projectId) {
    return {
      ok: false,
      code: "project_id_missing",
      reason: `${LIVE_PROOF_PROJECT_ID_ENV} is required when LIVE opt-in is set.`,
    };
  }

  const productDbPath =
    readTrimmed(env, LIVE_PROOF_PRODUCT_DB_ENV) ??
    readTrimmed(env, LIVE_PROOF_PRODUCT_DB_ALIAS_ENV);
  if (!productDbPath) {
    return {
      ok: false,
      code: "product_db_missing",
      reason: `${LIVE_PROOF_PRODUCT_DB_ENV} (or ${LIVE_PROOF_PRODUCT_DB_ALIAS_ENV}) is required.`,
    };
  }
  if (!fs.existsSync(productDbPath) || !fs.statSync(productDbPath).isFile()) {
    return {
      ok: false,
      code: "product_db_not_file",
      reason: `Product DB path is not an existing file: ${productDbPath}`,
    };
  }

  const noraDbPath =
    readTrimmed(env, LIVE_PROOF_NORA_DB_ENV) ??
    readTrimmed(env, LIVE_PROOF_NORA_DB_ALIAS_ENV);
  if (!noraDbPath) {
    return {
      ok: false,
      code: "nora_db_missing",
      reason: `${LIVE_PROOF_NORA_DB_ENV} (or ${LIVE_PROOF_NORA_DB_ALIAS_ENV}) is required.`,
    };
  }
  if (!fs.existsSync(noraDbPath) || !fs.statSync(noraDbPath).isFile()) {
    return {
      ok: false,
      code: "nora_db_not_file",
      reason: `Nora session DB path is not an existing file: ${noraDbPath}`,
    };
  }

  if (!readTrimmed(env, "OPENAI_API_KEY")) {
    return {
      ok: false,
      code: "openai_key_missing",
      reason:
        "OPENAI_API_KEY must already be present in the process environment (not loaded from .env.local by this harness).",
    };
  }

  const proofDirRaw = readTrimmed(env, LIVE_PROOF_DIR_ENV);
  const proofDir = proofDirRaw ? path.resolve(proofDirRaw) : null;

  return {
    ok: true,
    projectId,
    productDbPath: path.resolve(productDbPath),
    noraDbPath: path.resolve(noraDbPath),
    proofDir,
    cursorReal: "0",
  };
}

/**
 * Environment mutations allowed when entering an opted-in LIVE Vitest suite.
 * Never enables reset or local authority switches.
 */
export function applyLiveProofSafeRuntimeEnv(
  config: LiveProofBoundaryConfig,
  env: Record<string, string | undefined> = process.env,
): void {
  env.SFIA_STUDIO_CURSOR_REAL = "0";
  env.SFIA_STUDIO_PRODUCT_DB_PATH = config.productDbPath;
  env.SFIA_STUDIO_NORA_SESSION_DB_PATH = config.noraDbPath;
  delete env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
  delete env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
  // Explicitly refuse privileged escalation even if later code tries to rely on them.
  delete env.SFIA_V2_RUNTIME_ALLOW_RESET;
  delete env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
  delete env.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY;
}
