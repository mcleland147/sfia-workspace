/**
 * PRE-M6 Option A presentation helpers for ProjectAssistantPanel.
 * No authority/engine changes — labels and freshness only.
 */

import {
  F3_PROCESS_LOCAL_NOTICE,
  F3_PRODUCT_DURABLE_BOUNDED_NOTICE,
  F3_PRODUCT_DURABLE_NOTICE,
  F3_SESSION_CURSOR_REAL_NOTICE,
} from "./f3/constants";
import {
  POST_EVIDENCE_NORA_SENTINEL,
  POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
} from "./f3/postEvidenceNoraAnalysis";
import type { F3Mode } from "./f3/types";

export type RecommendationFreshness =
  | { status: "current"; label: "Recommandation à jour" }
  | { status: "stale"; label: "Recommandation périmée" }
  | {
      status: "undetermined";
      label: "Recommandation — actualité non déterminée";
    };

const UNDETERMINED: RecommendationFreshness = {
  status: "undetermined",
  label: "Recommandation — actualité non déterminée",
};

const CURRENT: RecommendationFreshness = {
  status: "current",
  label: "Recommandation à jour",
};

const STALE: RecommendationFreshness = {
  status: "stale",
  label: "Recommandation périmée",
};

/**
 * G-UX-10 — Recommendation freshness is a proven state, not generic caution.
 *
 * Rules:
 * - neither source → undetermined
 * - session + durable with comparable Evidence IDs that match → current
 * - session + durable with comparable Evidence IDs that mismatch → stale
 * - both sources but IDs missing / correlation impossible → undetermined (never default stale)
 * - session only → current (active session recommendation; no invented supersession)
 * - durable only → current (rehydrated durable recommendation is the known durable read)
 *
 * Freshness ≠ HumanDecision and must not invent execution authority.
 */
export function deriveRecommendationFreshness(input: {
  hasSessionRecommendation: boolean;
  hasDurableEvidenceOutcome: boolean;
  sessionEvidenceId?: string | null;
  durableEvidenceIds?: readonly string[];
}): RecommendationFreshness {
  const {
    hasSessionRecommendation,
    hasDurableEvidenceOutcome,
    sessionEvidenceId,
    durableEvidenceIds = [],
  } = input;

  if (!hasSessionRecommendation && !hasDurableEvidenceOutcome) {
    return UNDETERMINED;
  }

  if (hasSessionRecommendation && hasDurableEvidenceOutcome) {
    const sessionId =
      typeof sessionEvidenceId === "string" ? sessionEvidenceId.trim() : "";
    const durableIds = durableEvidenceIds.filter(
      (id): id is string => typeof id === "string" && id.trim().length > 0,
    );

    if (!sessionId || durableIds.length === 0) {
      return UNDETERMINED;
    }

    if (durableIds.includes(sessionId)) {
      return CURRENT;
    }

    return STALE;
  }

  if (hasSessionRecommendation) {
    return CURRENT;
  }

  if (hasDurableEvidenceOutcome) {
    return CURRENT;
  }

  return UNDETERMINED;
}

/**
 * F10 — Recovery is contextual. Nominal project open is not Recovery.
 * Use only signals already available from durable reads / LPS projection.
 */
export function shouldShowProjectRecovery(input: {
  hasDurableEvidenceOutcome: boolean;
  livingStateVersion: number;
  activeCycleInstanceId?: string | null;
}): boolean {
  if (input.hasDurableEvidenceOutcome) return true;
  if (input.livingStateVersion > 1) return true;
  if (
    typeof input.activeCycleInstanceId === "string" &&
    input.activeCycleInstanceId.trim().length > 0
  ) {
    return true;
  }
  return false;
}

/**
 * Map Attempt technical status to French user labels.
 * "bloqué avant exécution" must not invent an Attempt ID (caller responsibility).
 */
export function attemptStatusUserLabel(status: string | null | undefined): {
  label: string;
  blockedBeforeExecution: boolean;
} {
  const normalized = (status ?? "").toLowerCase();
  switch (normalized) {
    case "running":
    case "result_pending":
    case "pending":
      return { label: "en cours", blockedBeforeExecution: false };
    case "failed":
      return { label: "échec", blockedBeforeExecution: false };
    case "timeout":
      return { label: "timeout", blockedBeforeExecution: false };
    case "cancelled":
    case "canceled":
      return { label: "annulé", blockedBeforeExecution: false };
    case "succeeded":
    case "completed":
      return { label: "terminé", blockedBeforeExecution: false };
    case "blocked":
    case "blocked_before_execution":
    case "created":
    case "queued":
    case "prepared":
      return { label: "bloqué avant exécution", blockedBeforeExecution: true };
    case "":
      return { label: "bloqué avant exécution", blockedBeforeExecution: true };
    default:
      return {
        label: status ? String(status) : "bloqué avant exécution",
        blockedBeforeExecution: !status,
      };
  }
}

export const G_UX_08_AMEND_DEFERRED_MESSAGE =
  "Boucle AMEND complète non disponible (G-UX-08 ouvert / différé). Clarifiez dans la conversation, obtenez une nouvelle proposition, puis un nouveau GO — pas d’amendement in-place simulé.";

/**
 * Observation of an already-authorized bounded REAL Attempt.
 * Not a second Confirmation, retry, or relaunch.
 */
export const BOUNDED_RUNNING_REFRESH_TITLE = "Exécution en cours";
export const BOUNDED_RUNNING_REFRESH_ACTION = "Actualiser le résultat";
export const BOUNDED_RUNNING_REFRESH_HELP =
  "L’exécution est déjà autorisée. Cette action vérifie son résultat sans la relancer.";

export function isBoundedRunningAttemptRefreshable(input: {
  attemptStatus?: string | null;
  realProcessInvoked?: boolean | null;
  executionMode?: string | null;
  payloadMode?: string | null;
  contractStatus?: string | null;
} | null | undefined): boolean {
  if (!input) return false;
  if ((input.attemptStatus ?? "").toLowerCase() !== "running") return false;
  if (input.realProcessInvoked !== true) return false;
  if ((input.contractStatus ?? "").toLowerCase() !== "executing") return false;
  const payloadMode = (input.payloadMode ?? "").toLowerCase();
  const executionMode = (input.executionMode ?? "").toLowerCase();
  return (
    payloadMode === "cursor_cli_real" || executionMode === "cursor_cli_real"
  );
}

const KNOWN_ACTION_GLOSS: Record<string, string> = {
  "cursor.read_only.inspect": "Inspecter en lecture seule via Cursor",
  "fixture-docs-prepare": "Préparer des documents de fixture de test",
};

export type AuthoritativeContractFacts = {
  action?: string | null;
  target?: string | null;
  scope?: string | null;
  requiredCapabilities?: readonly string[] | null;
  reversibility?: string | null;
  constraints?: readonly string[] | null;
  stopConditions?: readonly string[] | null;
  requiredAuthority?: string | null;
};

function nonempty(value: string | null | undefined): string | null {
  const trimmed = (value ?? "").trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function actionUserLabel(action: string | null | undefined): string | null {
  const raw = nonempty(action);
  if (!raw) return null;
  const gloss = KNOWN_ACTION_GLOSS[raw];
  return gloss ? `${gloss} (${raw})` : raw;
}

export function reversibilityUserLabel(
  value: string | null | undefined,
): string | null {
  const raw = nonempty(value);
  if (!raw) return null;
  switch (raw) {
    case "reversible":
      return "Réversible";
    case "partially_reversible":
      return "Partiellement réversible";
    case "irreversible":
      return "Irréversible";
    default:
      return raw;
  }
}

export function requiredAuthorityUserLabel(
  authority: string | null | undefined,
): string | null {
  const raw = nonempty(authority);
  if (!raw) return null;
  if (raw === "MORRIS") {
    return "Votre confirmation est requise maintenant (autorité Morris).";
  }
  return `Autorité requise : ${raw}.`;
}

/** Adapter/profile markers — not user-facing execution boundary claims. */
export function isTechnicalProfileConstraint(raw: string): boolean {
  const normalized = raw.trim().toLowerCase();
  return (
    normalized === "cursor cli real profile" ||
    (normalized.includes("real profile") && normalized.includes("cursor"))
  );
}

export function constraintUserFacingLabel(raw: string): string | null {
  if (isTechnicalProfileConstraint(raw)) return null;
  const normalized = raw.trim().toLowerCase();
  switch (normalized) {
    case "bounded read-only":
      return "Lecture seule bornée";
    case "gate d required":
      return "Confirmation requise";
    case "no git write":
      return "Pas d'écriture Git";
    case "no github write":
      return "Pas d'écriture GitHub";
    case "no client command":
      return "Pas de commande client";
    case "no wildcard":
      return "Pas de wildcard";
    default:
      return raw.trim();
  }
}

/**
 * User-facing contract facts derived only from authoritative fields.
 * Never invents README / Shell / Git guarantees that are not in the data.
 */
export function contractUserFacingFacts(input: AuthoritativeContractFacts): {
  action: string | null;
  target: string | null;
  scope: string | null;
  capabilities: string[];
  reversibility: string | null;
  constraints: string[];
  stopConditions: string[];
  authority: string | null;
} {
  return {
    action: actionUserLabel(input.action),
    target: nonempty(input.target),
    scope: nonempty(input.scope),
    capabilities: (input.requiredCapabilities ?? [])
      .map((item) => item.trim())
      .filter((item) => item.length > 0),
    reversibility: reversibilityUserLabel(input.reversibility),
    constraints: (input.constraints ?? [])
      .map((item) => constraintUserFacingLabel(item))
      .filter((item): item is string => item != null && item.length > 0),
    stopConditions: (input.stopConditions ?? [])
      .map((item) => item.trim())
      .filter((item) => item.length > 0),
    authority: requiredAuthorityUserLabel(input.requiredAuthority),
  };
}

export type ExecutionSemanticKind =
  | "cursor_real"
  | "deterministic_test"
  | "fixture"
  | "durable_read"
  | "none";

export type ExecutionSemanticFacts = {
  mode?: string | null;
  payloadMode?: string | null;
  executionMode?: string | null;
  adapterId?: string | null;
  adapterRef?: string | null;
  realProcessInvoked?: boolean | null;
  realExecution?: boolean | null;
  processRef?: string | null;
  evidenceId?: string | null;
  reviewBundleId?: string | null;
  durableRead?: boolean | null;
};

function looksBoundedCursorReal(input: ExecutionSemanticFacts): boolean {
  const mode = `${input.mode ?? ""} ${input.payloadMode ?? ""}`.toLowerCase();
  const executionMode = (input.executionMode ?? "").toLowerCase();
  const adapter = `${input.adapterId ?? ""} ${input.adapterRef ?? ""}`.toLowerCase();
  const evidenceId = (input.evidenceId ?? "").toLowerCase();
  const reviewBundleId = (input.reviewBundleId ?? "").toLowerCase();
  return (
    mode.includes("cursor_cli_real") ||
    executionMode === "cursor_cli_real" ||
    adapter.includes("adp:m4-cursor-cli-real") ||
    evidenceId.startsWith("ev:m4-bounded-ro:") ||
    reviewBundleId.startsWith("rb:m4-bounded-ro:") ||
    input.realProcessInvoked === true ||
    input.realExecution === true
  );
}

function looksFixture(input: ExecutionSemanticFacts): boolean {
  const mode = `${input.mode ?? ""} ${input.payloadMode ?? ""}`.toLowerCase();
  const executionMode = (input.executionMode ?? "").toLowerCase();
  const adapter = `${input.adapterId ?? ""} ${input.adapterRef ?? ""}`.toLowerCase();
  const evidenceId = (input.evidenceId ?? "").toLowerCase();
  return (
    mode.includes("fixture") ||
    executionMode === "adapter_sync_fixture" ||
    adapter.includes("adp:f3-test-fixture") ||
    evidenceId.startsWith("ev:f3-fixture:")
  );
}

function looksDeterministicTestBoundary(input: ExecutionSemanticFacts): boolean {
  const processRef = (input.processRef ?? "").toLowerCase();
  return processRef.startsWith("proc:det:");
}

/**
 * Derive user-facing execution semantics from existing Attempt/Evidence facts.
 * Never uses environment flags. Never claims REAL BOUNDARY PROVEN.
 */
export function executionSemanticKind(
  input: ExecutionSemanticFacts | null | undefined,
): ExecutionSemanticKind {
  if (!input) return "none";
  if (looksDeterministicTestBoundary(input)) return "deterministic_test";
  if (looksBoundedCursorReal(input)) {
    return input.durableRead === true ? "durable_read" : "cursor_real";
  }
  if (looksFixture(input)) return "fixture";
  if (input.durableRead === true) return "durable_read";
  return "none";
}

export function executionSemanticUserLabel(
  input: ExecutionSemanticFacts | null | undefined,
): string {
  switch (executionSemanticKind(input)) {
    case "cursor_real":
      return "Exécution Cursor réelle";
    case "deterministic_test":
      return "Exécution déterministe de test";
    case "fixture":
      return "Fixture de test";
    case "durable_read":
      return "Lecture durable du résultat — aucune nouvelle exécution";
    default:
      return "Aucune exécution lancée à cette étape";
  }
}

export type ConfirmationPathFacts = {
  mode?: string | null;
  realExecution?: boolean | null;
  disclosures?: readonly string[] | null;
};

function disclosureIndicatesDeterministicTest(
  disclosures: readonly string[] | null | undefined,
): boolean {
  if (!disclosures?.length) return false;
  return disclosures.some((item) => {
    const normalized = item.toLowerCase();
    return (
      normalized.includes("deterministic") ||
      normalized.includes("proc:det") ||
      normalized.includes("test boundary armed")
    );
  });
}

/**
 * Pre-confirmation chip: describes what Confirmation unlocks.
 * REAL-shaped contract fields alone do NOT prove an effective REAL boundary.
 */
export function confirmationPathChip(
  input: ConfirmationPathFacts | string | null | undefined,
): string {
  const facts: ConfirmationPathFacts =
    typeof input === "string" || input == null
      ? { mode: typeof input === "string" ? input : null }
      : input;
  const normalized = (facts.mode ?? "").toLowerCase();

  if (normalized.includes("fixture") || normalized.includes("m3_resolved_fixture")) {
    return "Fixture de test — pas une exécution Cursor réelle";
  }

  if (disclosureIndicatesDeterministicTest(facts.disclosures)) {
    return "Exécution déterministe de test après confirmation";
  }

  if (
    facts.realExecution === true &&
    (normalized.includes("cursor_cli_real") ||
      normalized.includes("bounded_read_only") ||
      normalized.includes("m3_resolved_bounded"))
  ) {
    return "Exécution Cursor réelle après confirmation";
  }

  if (
    normalized.includes("bounded_read_only") ||
    normalized.includes("m3_resolved_bounded") ||
    normalized.includes("cursor_cli_real")
  ) {
    return "Exécution contrôlée après confirmation";
  }

  return "Confirmation distincte requise";
}

export function resolvePersistenceNotice(input: {
  productDurablePath: boolean;
  mode?: F3Mode | string | null;
  kind?: "execute" | "rehydrate";
  processRef?: string | null;
  evidenceId?: string | null;
}): string {
  if (!input.productDurablePath) return F3_PROCESS_LOCAL_NOTICE;
  const facts: ExecutionSemanticFacts = {
    mode: input.mode,
    processRef: input.processRef,
    evidenceId: input.evidenceId,
  };
  if (input.kind === "rehydrate") {
    if (looksFixture(facts) && !looksDeterministicTestBoundary(facts)) {
      return F3_PRODUCT_DURABLE_NOTICE;
    }
    // Bounded / REAL-shaped LPS facts without discriminant processRef:
    // UNKNOWN DURABLE PROVENANCE → NEUTRAL. Never promote DET to REAL.
    return F3_PRODUCT_DURABLE_BOUNDED_NOTICE;
  }
  if (looksDeterministicTestBoundary(facts)) {
    return "Exécution déterministe de test enregistrée. La recommandation n'est pas une décision Morris.";
  }
  const mode = (input.mode ?? "").toUpperCase();
  if (mode.includes("CURSOR_CLI_REAL")) return F3_SESSION_CURSOR_REAL_NOTICE;
  return F3_PRODUCT_DURABLE_NOTICE;
}

export function evidenceVerifiedUserLabel(verified: boolean): string {
  return verified
    ? "Preuve marquée comme vérifiée"
    : "Preuve enregistrée — vérification humaine non marquée";
}

export function reviewBundleStatusUserLabel(status: string | null | undefined): string {
  const raw = (status ?? "").toLowerCase();
  switch (raw) {
    case "draft":
      return "Dossier de revue disponible en brouillon";
    case "complete":
    case "completed":
      return "Dossier de revue disponible";
    case "pending":
      return "Dossier de revue en attente";
    default:
      return nonempty(status) ? `Dossier de revue : ${status}` : "Dossier de revue";
  }
}

export function nextActionUserLabel(input: {
  nextGateCode?: string | null;
  nextActionCode?: string | null;
}): string {
  const gate = nonempty(input.nextGateCode);
  const action = nonempty(input.nextActionCode);
  if (action && gate) {
    return `Prochaine action recommandée : ${action} (seuil ${gate}). Ce n'est pas une décision Morris.`;
  }
  if (action) {
    return `Prochaine action recommandée : ${action}. Ce n'est pas une décision Morris.`;
  }
  if (gate) {
    return `Prochain seuil recommandé : ${gate}. Ce n'est pas une décision Morris.`;
  }
  return "Poursuivez avec Nora pour décider de la suite. Aucune nouvelle exécution ou décision n'est lancée automatiquement.";
}

export function postExecutionUserSummary(input: {
  attemptStatus?: string | null;
  evidenceStatus?: string | null;
  reviewBundleStatus?: string | null;
  nextGateCode?: string | null;
  nextActionCode?: string | null;
  analysisText?: string | null;
  analysisStatus?: string | null;
  durableRecorded?: boolean;
}): {
  result: string;
  evidence: string;
  reviewBundle: string;
  next: string;
  analysis: string | null;
} {
  const attempt = attemptStatusUserLabel(input.attemptStatus);
  let result = `Exécution : ${attempt.label}.`;
  const status = (input.attemptStatus ?? "").toLowerCase();
  if (input.durableRecorded && !status) {
    result =
      "Un résultat d'exécution est enregistré. Lecture seulement — aucune nouvelle exécution.";
  } else if (status === "succeeded" || status === "completed") {
    result = "Exécution terminée avec succès.";
  } else if (status === "failed") {
    result = "Exécution terminée en échec.";
  } else if (status === "timeout") {
    result = "Exécution terminée par timeout.";
  } else if (status === "running" || status === "result_pending" || status === "pending") {
    result = "Exécution encore en cours.";
  }

  const evidenceStatus = nonempty(input.evidenceStatus);
  const evidence =
    evidenceStatus && evidenceStatus !== "pending"
      ? "Une preuve a été enregistrée."
      : "Aucune preuve terminale n'est encore disponible.";

  const reviewBundle = reviewBundleStatusUserLabel(input.reviewBundleStatus);
  const analysis =
    input.analysisStatus === "available" && nonempty(input.analysisText)
      ? nonempty(input.analysisText)
      : null;

  return {
    result,
    evidence,
    reviewBundle,
    next: nextActionUserLabel({
      nextGateCode: input.nextGateCode,
      nextActionCode: input.nextActionCode,
    }),
    analysis,
  };
}

const INTERNAL_LPS_SENTINEL_RE =
  /\[\[SFIA_POST_EVIDENCE_NORA_(?:ANALYSIS|UNAVAILABLE)\]\]/g;

/**
 * Projection-only filter. Does not mutate durable LPS context.
 */
export function projectContextForDisplay(
  context: string | null | undefined,
): string {
  if (!context) return "";
  const availableIdx = context.lastIndexOf(POST_EVIDENCE_NORA_SENTINEL);
  const unavailableIdx = context.lastIndexOf(
    POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
  );
  const cut = Math.max(availableIdx, unavailableIdx);
  const withoutAppendix = cut >= 0 ? context.slice(0, cut) : context;
  return withoutAppendix.replace(INTERNAL_LPS_SENTINEL_RE, "").trim();
}

export function textContainsInternalLpsMarker(text: string | null | undefined): boolean {
  if (!text) return false;
  return (
    text.includes(POST_EVIDENCE_NORA_SENTINEL) ||
    text.includes(POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL)
  );
}
