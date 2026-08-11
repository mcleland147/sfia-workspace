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

export const F3_PROCESS_LOCAL_NOTICE =
  "F3 fixture process-local — non persisté. Un redémarrage efface contrats, attempts et evidence. Aucune autorité d'exécution durable.";

export const F3_LABELS = Object.freeze({
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
  noGitWrite: "AUCUN GIT WRITE PRODUIT",
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
  cursorRealBlocked: "CURSOR REAL BLOQUÉ",
  noReadyClaim: "PAS DE CLAIM READY",
  noTa6Complete: "T-A6 COMPLETE NON DÉCLARÉ",
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN",
} as const);

export const F3_AUTHORITY_SOURCE =
  "LOCAL_PROCESS_F3_FIXTURE_AUTHORITY" as const;
