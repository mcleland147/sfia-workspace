/**
 * F3 native fixture vertical slice — server-fixed constants.
 * Client cannot inject REAL / adapterRef / agent / command.
 */

export const F3_MODE = "FIXTURE" as const;

export const F3_ADAPTER_ID = "adp:f3-test-fixture" as const;
export const F3_AGENT_ID = "agt:f3-fixture" as const;
export const F3_AGENT_TYPE = "fixture_docs_writer" as const;

export const F3_ACTION = "fixture-docs-prepare" as const;
export const F3_TARGET = "sfia-studio/f3-fixture-only" as const;
export const F3_SCOPE = "f3-fixture:docs+metadata-only" as const;
export const F3_CAPABILITY = "cap:f3-fixture-docs" as const;

export const F3_REQUIRED_AUTHORITY = "N2" as const;

export const F3_CONSTRAINTS = Object.freeze([
  "FIXTURE ONLY",
  "TEST ADAPTER ONLY",
  "NO REAL",
  "NO SHELL",
  "NO NETWORK EXECUTION",
  "NO GIT WRITE",
  "NO GITHUB WRITE",
  "NO AUTO RETRY",
  "PROCESS LOCAL",
] as const);

export const F3_STOP_CONDITIONS = Object.freeze([
  "AUTHORITY_DENIED",
  "STALE_CONTEXT",
  "REAL_MODE_REQUESTED",
  "ADAPTER_IDENTITY_MISMATCH",
] as const);

export const F3_EVIDENCE_REQUIREMENTS = Object.freeze([
  "evreq:f3-fixture-metadata",
] as const);

export const F3_CONFIRM_ACTION_REF = "act:confirm-f3-fixture" as const;

export const F3_OPEN_HARD_RESERVATION_REFS = Object.freeze([
  "R-T-A3-1",
  "R-T-A3-2",
  "R-M01",
] as const);

/**
 * Honest only for a true Memory / process-local OA stack (no Product SQLite).
 * Do NOT use on the Product SQLite M5 path.
 */
export const F3_PROCESS_LOCAL_NOTICE =
  "F3 fixture process-local — non persisté. Un redémarrage efface contrats, attempts et evidence. Aucune autorité d'exécution durable.";

/**
 * Product SQLite M5 path — fixture/no-effect execution with durable Attempt /
 * Evidence / ReviewBundle / LPS evidence links. REAL remains disabled.
 * Distinguishes execution mode (fixture) from persistence durability (Product).
 */
export const F3_PRODUCT_DURABLE_NOTICE =
  "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a human decision.";

/**
 * Durable read after a bounded Attempt whose REAL vs deterministic provenance
 * is no longer discriminable from LPS facts. Fail-closed: never claim REAL.
 */
export const F3_PRODUCT_DURABLE_BOUNDED_NOTICE =
  "Lecture durable du résultat — aucune nouvelle exécution. Un résultat d'exécution borné a été enregistré. La recommandation n'est pas une décision humaine.";

export const F3_SESSION_CURSOR_REAL_NOTICE =
  "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision humaine." as const;

/**
 * Route F3 ephemeral disclosure by OA composition persistence, not by
 * execution mode (fixture vs REAL).
 */
export function resolveF3EphemeralNotice(
  productDurablePath: boolean,
): typeof F3_PRODUCT_DURABLE_NOTICE | typeof F3_PROCESS_LOCAL_NOTICE {
  return productDurablePath
    ? F3_PRODUCT_DURABLE_NOTICE
    : F3_PROCESS_LOCAL_NOTICE;
}

export const F3_LABELS = Object.freeze({
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
  noGitWrite: "AUCUN GIT WRITE PRODUIT",
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
  cursorRealBlocked: "CURSOR REAL BLOQUÉ",
  noReadyClaim: "PAS DE CLAIM READY",
  noTa6Complete: "T-A6 COMPLETE NON DÉCLARÉ",
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN",
} as const);

export const F3_AUTHORITY_SOURCE =
  "LOCAL_PROCESS_F3_FIXTURE_AUTHORITY" as const;
