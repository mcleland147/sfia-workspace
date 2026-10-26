/**
 * W3-A — Governed Execute seam on the canonical `/studio` W2 product path.
 *
 * Phase 1 (select): fresh AUTHORIZED evaluation → accepted
 * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
 * Phase 3 (record): continue running Attempt → technical terminal
 *
 * PJ-REPROOF-05 / Morris — Product orchestration:
 * - Canonical PRODUCT_GOVERNED EC → generic Cursor REAL boundary + mechanical Gate D
 * - Sealed historical M4 bounded docs-write EC → docs-write agent + Gate D (isolated GCEC)
 * - Explicit FIXTURE_EXECUTOR_BOUNDARY_ONLY / historical F3-only → fixture adapter (test)
 *
 * Effects / ActionPolicy remain internal protections — not Product executor routing.
 */

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  applyW3bAdapterFailArmIfPresent,
  consumeW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttempt,
  SelectionProfile,
  SelectionStrategy,
} from "@/lib/oa/execution-attempt";
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  resolveSelectionStrategy,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import type { CycleProfile } from "@/lib/oa/cycle";
import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
import { readContractInspectionState } from "./inspectExecutionContract";
import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import { ingestExecutionReviewVerificationEvidence } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import {
  buildMissionResultPayloadFromReport,
  type CursorExecutionReportWithMission,
} from "@/features/project-assistant/f3/buildMissionResultPayloadFromReport";
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import {
  bindCursorExecutionReportToAttempt,
  parseCursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import { evaluateProductRealReadiness } from "./evaluateProductRealReadiness";
import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
import { assertBoundedNonMutatingCursorRealAdmissible } from "./boundedNonMutatingRealLaunchGate";
import type {
  GovernedExecuteAuthorizedContractResult,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseResult,
} from "./types";

type CursorReportStdoutParse =
  | { kind: "ok"; report: CursorExecutionReportWithMission }
  | { kind: "absent" }
  | { kind: "malformed"; message: string };

/**
 * Classify CursorExecutionReport claim from stdout.
 * Marker present + unparseable JSON → malformed (fail-closed).
 * Marker absent → absent (docs_write nominal requires report).
 */
function classifyCursorReportFromStdout(stdout: string): CursorReportStdoutParse {
  const trimmed = stdout.trim();
  if (!trimmed) return { kind: "absent" };
  const marker = "CURSOR_EXECUTION_REPORT_JSON=";
  const idx = trimmed.indexOf(marker);
  const candidates: string[] = [];
  let markerPresent = false;
  if (idx >= 0) {
    markerPresent = true;
    candidates.push(
      trimmed.slice(idx + marker.length).trim().split("\n")[0] ?? "",
    );
  }
  // Raw JSON stdout (deterministic TestOnly / structured Cursor claim).
  if (trimmed.startsWith("{")) {
    candidates.push(trimmed);
  }
  if (candidates.length === 0) return { kind: "absent" };
  for (const json of candidates) {
    if (!json) continue;
    try {
      const parsed = parseCursorExecutionReport(JSON.parse(json));
      if (parsed.ok) {
        return {
          kind: "ok",
          report: parsed.report as CursorExecutionReportWithMission,
        };
      }
    } catch {
      /* try next candidate */
    }
  }
  if (markerPresent) {
    return {
      kind: "malformed",
      message:
        "CURSOR_EXECUTION_REPORT_JSON présent mais JSON / schéma non parseable — fail-closed.",
    };
  }
  return { kind: "absent" };
}

function tryParseReportFromStdout(
  stdout: string,
): CursorExecutionReportWithMission | null {
  const classified = classifyCursorReportFromStdout(stdout);
  return classified.kind === "ok" ? classified.report : null;
}

/**
 * Closed claim-completion failure classification (R3).
 * Allowlist only — unknown codes fail-closed as continuity failures.
 * Never use startsWith/includes catch-alls that absorb future codes.
 */
export type DocsWriteClaimCompletionFailureKind =
  | "CONFORMITY_INSUFFICIENCY"
  | "CONTINUITY_FAILURE";

/**
 * Content non-conformity only — Attempt may stay succeeded; Product NOT_PROVEN/UNCLAIMED.
 * ARTIFACT_EMPTY: verifier content-path (empty/whitespace payload after digest OK);
 * not integrity/path/oracle — no repo test treats it as continuity infra.
 */
const DOCS_WRITE_CLAIM_COMPLETION_CONFORMITY_INSUFFICIENCY_CODES =
  new Set<string>(["CONFORMITY_HEADINGS_MISSING", "ARTIFACT_EMPTY"]);

export function classifyDocsWriteClaimCompletionFailure(
  code: string,
): DocsWriteClaimCompletionFailureKind {
  if (DOCS_WRITE_CLAIM_COMPLETION_CONFORMITY_INSUFFICIENCY_CODES.has(code)) {
    return "CONFORMITY_INSUFFICIENCY";
  }
  return "CONTINUITY_FAILURE";
}
function mapCycleProfileToSelectionProfile(
  profile: CycleProfile | string | null | undefined,
): SelectionProfile {
  if (profile === "Critical") return "critical";
  if (profile === "Light") return "light";
  return "standard";
}

/**
 * Canonical Product EC: Nora/Studio-prepared PRODUCT_GOVERNED envelope.
 * Explicit fixture stamp is excluded.
 */
function isCanonicalProductGovernedContract(
  contract: ExecutionContract,
): boolean {
  if (contract.constraints.includes("FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
    return false;
  }
  return contract.constraints.includes("PRODUCT_GOVERNED");
}

/** PRODUCT_GOVERNED uses the generic Cursor REAL boundary. Fixture stamp does not. */
function usesGenericCursorRealBoundary(contract: ExecutionContract): boolean {
  return isCanonicalProductGovernedContract(contract);
}

/**
 * adapterId = contractual M4 gateway identity for Cursor REAL ECs
 * (Fake and REAL share M4_REAL_GATEWAY_ADAPTER_ID). Physical Fake vs REAL is
 * carried by boundaryProofMode / realExecution from deriveAttemptProvenance.
 * Fixture adapter is historical / test-only when EC explicitly fixture-stamped.
 */
function adapterIdForContract(contract: ExecutionContract): string {
  return usesGenericCursorRealBoundary(contract)
    ? M4_REAL_GATEWAY_ADAPTER_ID
    : F3_ADAPTER_ID;
}

function projectProvenance(
  oa: RuntimeOaStack,
  attempt: Pick<
    ExecutionAttempt,
    | "attemptId"
    | "selectedAgentRef"
    | "status"
    | "resultRef"
    | "launchedAt"
    | "irreversibleEffectsPossible"
  >,
) {
  const agent =
    oa.executionAttemptServices?.registry.getAgent(attempt.selectedAgentRef) ??
    null;
  return deriveAttemptProvenance({
    attempt,
    agent,
    boundaryProofMode:
      oa.executionAttemptServices?.realBoundary?.launchPort.boundaryProofMode,
  });
}

function attemptIdentities(executionContractId: string, version: number) {
  const digest = createHash("sha256")
    .update(`${executionContractId}@${version}`)
    .digest("hex")
    .slice(0, 16);
  return {
    attemptId: `xat:w3a:${digest}`,
    attemptIdempotencyKey: `idem:w3a:${digest}`,
    resultRef: `res:w3a:${digest}`,
    errorRef: `err:w3a:${digest}`,
  };
}

export type GovernedExecuteAuthorizedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly claimedAuthorityLevel?: unknown;
  readonly canActAsMorris?: unknown;
  readonly authorityReceiptRef?: unknown;
  readonly real?: unknown;
  readonly adapterRef?: unknown;
  readonly forceLocalAuthority?: boolean;
  /**
   * Exact inspected contract version for G-D4 MATERIALITY-stamped Select revalidation.
   * When omitted on a stamped Generic EC, Select resolves from durable inspection
   * attestation (fail-closed if absent/stale) — never invents a binding.
   */
  readonly expectedVersion?: number;
  /**
   * Semantic fingerprint paired with expectedVersion for stamped Select revalidation.
   */
  readonly expectedSemanticFingerprint?: string;
  /**
   * Product Cursor Complete: when true (default), await process terminal like
   * docs_write. When false, running Attempts may surface CURSOR_REPORT_PENDING.
   */
  readonly awaitIfPending?: boolean;
  /** Absolute refs root for mission-result Evidence JSON (tests / campaign). */
  readonly missionResultRefsRoot?: string;
};

type Failure = GovernedExecuteAuthorizedContractResult;

function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
  if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
    return {
      ok: false,
      code: "ATTEMPT_STACK_UNAVAILABLE",
      message:
        "Services ExecutionAttempt / fixture indisponibles — aucune exécution.",
    };
  }
  if (oa.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter fixture identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (oa.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }
  return null;
}

/**
 * Generic Cursor REAL boundary (canonical Product + sealed docs-write).
 * Mechanical Gate D / launchPort presence — not a Pilot-facing second decision.
 */
function cursorRealBoundaryFailure(oa: RuntimeOaStack): Failure | null {
  if (!oa.executionAttemptServices) {
    return {
      ok: false,
      code: "ATTEMPT_STACK_UNAVAILABLE",
      message: "Services ExecutionAttempt indisponibles — aucune exécution.",
    };
  }
  if (!oa.executionAttemptServices.realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Exécution Cursor refusée — realBoundary absent (fail-closed, pas de fallback fixture Product).",
    };
  }
  if (!oa.executionAttemptServices.grantRealExecutionGate) {
    return {
      ok: false,
      code: "GATE_D_REQUIRED",
      message:
        "Exécution Cursor refusée — journal Gate D mécanique indisponible (fail-closed).",
    };
  }
  return null;
}

function executionBoundaryFailure(
  oa: RuntimeOaStack,
  contract: ExecutionContract,
): Failure | null {
  return usesGenericCursorRealBoundary(contract)
    ? cursorRealBoundaryFailure(oa)
    : fixtureBoundaryFailure(oa);
}

function launchCountBeforeFor(
  oa: RuntimeOaStack,
  contract: ExecutionContract,
): number {
  if (usesGenericCursorRealBoundary(contract)) {
    return launchCallCountOf(
      oa.executionAttemptServices!.realBoundary!.launchPort,
    );
  }
  return oa.fixtureAdapter!.launchCallCount;
}

function launchCallCountOf(port: unknown): number {
  if (port && typeof port === "object") {
    if ("launchCallCount" in port) {
      const n = (port as { launchCallCount: unknown }).launchCallCount;
      if (typeof n === "number") return n;
    }
    if ("calls" in port && Array.isArray((port as { calls: unknown }).calls)) {
      return (port as { calls: unknown[] }).calls.length;
    }
  }
  return 0;
}

async function loadContract(
  oa: RuntimeOaStack,
  input: GovernedExecuteAuthorizedContractInput,
): Promise<
  | { ok: false; result: Failure }
  | { ok: true; contract: ExecutionContract; selectionProfile: SelectionProfile }
> {
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: contractResult.error.detailCode,
        message: "Contrat d'exécution introuvable — exécution refusée.",
      },
    };
  }
  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Le contrat n'appartient pas au projet demandé.",
      },
    };
  }

  // Project positive binding — missing/unreadable Project is never an implicit allow.
  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!project.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_NOT_FOUND",
        message:
          "Projet introuvable ou illisible — exécution refusée (fail-closed).",
      },
    };
  }
  if (project.project.status === "archived") {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_ARCHIVED",
        message: "Projet archivé — aucune exécution.",
      },
    };
  }

  // CycleInstance is optional for Project-scoped generic execution.
  // When present: preserve lifecycle binding / active-state gates.
  // When absent: do NOT invent a cycle, cycleTypeId, or methodological profile.
  let selectionProfile: SelectionProfile;
  if (contract.cycleInstanceId) {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: contract.cycleInstanceId,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_FOUND",
          message: "CycleInstance lié au contrat introuvable — exécution refusée.",
        },
      };
    }
    if (cycle.cycle.projectId !== input.projectId) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_PROJECT_MISMATCH",
          message: "CycleInstance / projet incohérents — exécution refusée.",
        },
      };
    }
    if (
      cycle.cycle.status === "completed" ||
      cycle.cycle.status === "cancelled" ||
      cycle.cycle.status === "superseded"
    ) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_ACTIVE",
          message: `CycleInstance ${cycle.cycle.status} — aucune exécution.`,
        },
      };
    }
    // Historical cycle-bound path: methodological cycle profile informs OA
    // SelectionProfile for non–Cursor-REAL branches. Cursor REAL Product path
    // still applies capability-deterministic selection below (not access-by-profile).
    selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
  } else {
    // Project-scoped generic path (no CycleInstance on EC).
    // OA SelectExecutionAgent still requires a SelectionProfile enum value.
    // This is the technical carrier for capabilities_deterministic on the
    // Product Cursor Generalist path — NOT a claim that the mission is
    // methodologically "Standard", and NOT an access gate derived from SFIA profile.
    selectionProfile = "standard";
  }

  return { ok: true, contract, selectionProfile };
}

function projectAttempt(
  attempt: ExecutionAttempt,
  adapterId: string = F3_ADAPTER_ID,
): GovernedExecuteAttemptProjection {
  return {
    attemptId: attempt.attemptId,
    attemptStatus: attempt.status,
    selectedAgentRef: attempt.selectedAgentRef,
    adapterId,
  };
}

function buildTechnicalTerminal(input: {
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  selectionProfile: SelectionProfile;
  oa: RuntimeOaStack;
  reusedExistingAttempt: boolean;
  launchCountBefore: number;
  statusLabel?: string;
}): GovernedExecuteAuthorizedContractResult {
  const adapterId = adapterIdForContract(input.contract);
  const launchCount = usesGenericCursorRealBoundary(input.contract)
    ? launchCallCountOf(
        input.oa.executionAttemptServices?.realBoundary?.launchPort,
      )
    : input.oa.fixtureAdapter!.launchCallCount;
  const status = input.attempt.status;
  const provenance = projectProvenance(input.oa, input.attempt);
  const defaultLabel =
    status === "cancelled"
      ? "TERMINAL TECHNIQUE ANNULÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ"
      : status === "failed" || status === "timeout"
        ? "TERMINAL TECHNIQUE ÉCHOUÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ"
        : "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ";
  return {
    ok: true,
    phase: "terminal",
    executionContractId: input.contract.executionContractId,
    contractVersion: input.contract.version,
    attemptId: input.attempt.attemptId,
    attemptStatus: status,
    selectedAgentRef: input.attempt.selectedAgentRef,
    adapterId,
    selectionProfile: input.selectionProfile,
    reusedExistingAttempt: input.reusedExistingAttempt,
    launchCount,
    launchDelta: launchCount - input.launchCountBefore,
    executionPerformed: true,
    attemptCreated: !input.reusedExistingAttempt,
    realExecution: provenance.realExecution,
    externalEffects: provenance.externalEffects,
    boundaryProofMode: provenance.boundaryProofMode,
    gitWritePerformed: false,
    cycleInstanceClosed: false,
    projectArchived: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel: input.statusLabel ?? defaultLabel,
    technicalTerminal:
      status === "succeeded" ||
      status === "cancelled" ||
      status === "failed" ||
      status === "timeout",
    productSuccessSemantics: false,
    attempt: projectAttempt(input.attempt, adapterId),
  };
}

/** @deprecated Prefer buildTechnicalTerminal — kept for call-site clarity. */
function buildTerminalSuccess(input: {
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  selectionProfile: SelectionProfile;
  oa: RuntimeOaStack;
  reusedExistingAttempt: boolean;
  launchCountBefore: number;
}): GovernedExecuteAuthorizedContractResult {
  return buildTechnicalTerminal(input);
}

async function findSucceededAttempt(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<ExecutionAttempt | null> {
  const listed =
    await oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return null;
  return listed.attempts.find((a) => a.status === "succeeded") ?? null;
}

function registerPiloteAuthority(
  oa: RuntimeOaStack,
  scope: string,
  forceLocalAuthority?: boolean,
  requiredAuthority: string = "N3",
) {
  return registerLocalAuthorityForExecutionClass({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt: oa.clock.nowIso(),
    requiredAuthority,
    forceEnable: forceLocalAuthority === true,
  });
}

type StampedSelectInspectionBinding =
  | {
      readonly ok: true;
      readonly expectedVersion: number;
      readonly expectedSemanticFingerprint: string;
      /** How the binding was obtained — never an authorization act. */
      readonly provenance: "caller_explicit" | "durable_attestation";
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

const INSPECTION_FINGERPRINT_PATTERN = /^(?:sha256:)?[a-f0-9]{64}$/i;

function isExplicitBindingPresent(value: unknown): boolean {
  return value !== undefined && value !== null;
}

function validateExplicitInspectionVersion(
  value: unknown,
):
  | { readonly ok: true; readonly version: number }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return {
      ok: false,
      code: "BINDING_INVALID",
      message:
        "Version d'inspection explicite invalide (NaN / non-finie / type hostile) — Select refusé.",
    };
  }
  if (!Number.isInteger(value) || value < 1) {
    return {
      ok: false,
      code: "BINDING_INVALID",
      message:
        "Version d'inspection explicite hors domaine — Select refusé.",
    };
  }
  return { ok: true, version: value };
}

function validateExplicitInspectionFingerprint(
  value: unknown,
):
  | { readonly ok: true; readonly fingerprint: string }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  if (typeof value !== "string") {
    return {
      ok: false,
      code: "BINDING_INVALID",
      message:
        "Fingerprint d'inspection explicite invalide (type hostile) — Select refusé.",
    };
  }
  const fp = value.trim();
  if (!fp || !INSPECTION_FINGERPRINT_PATTERN.test(fp)) {
    return {
      ok: false,
      code: "BINDING_INVALID",
      message:
        "Fingerprint d'inspection explicite vide, whitespace ou malformé — Select refusé.",
    };
  }
  return { ok: true, fingerprint: fp };
}

/**
 * Resolve G-D4 inspection binding for stamped Generic Select.
 *
 * I1 — both truly absent → durable attestation if sufficient/current.
 * I2 — both valid present → keep caller values (never overwrite).
 * I3/I4 — version XOR fingerprint (valid or not) → BINDING_INCOMPLETE.
 * I5–I9 — explicit invalid / hostile → BINDING_INVALID (never treated as absent).
 * I11 — missing/stale attestation when fallback needed → refuse.
 * I12 — never records inspection / HD / Attempt.
 */
async function resolveStampedSelectInspectionBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
  readonly expectedVersion?: number;
  readonly expectedSemanticFingerprint?: string;
}): Promise<StampedSelectInspectionBinding> {
  const versionProvided = isExplicitBindingPresent(input.expectedVersion);
  const fingerprintProvided = isExplicitBindingPresent(
    input.expectedSemanticFingerprint,
  );

  if (versionProvided !== fingerprintProvided) {
    // Presence XOR — validate the provided side for invalid-vs-incomplete clarity,
    // but always refuse incomplete pairs (I3/I4) without attestation overwrite.
    if (versionProvided) {
      const v = validateExplicitInspectionVersion(input.expectedVersion);
      if (!v.ok) return v;
    }
    if (fingerprintProvided) {
      const f = validateExplicitInspectionFingerprint(
        input.expectedSemanticFingerprint,
      );
      if (!f.ok) return f;
    }
    return {
      ok: false,
      code: "BINDING_INCOMPLETE",
      message: versionProvided
        ? "Fingerprint d'inspection requis avec la version explicite — binding partiel refusé."
        : "Version d'inspection requise avec le fingerprint explicite — binding partiel refusé.",
    };
  }

  if (versionProvided && fingerprintProvided) {
    const v = validateExplicitInspectionVersion(input.expectedVersion);
    if (!v.ok) return v;
    const f = validateExplicitInspectionFingerprint(
      input.expectedSemanticFingerprint,
    );
    if (!f.ok) return f;
    // I2 — preserve explicit valid pair. Do not replace from attestation.
    return {
      ok: true,
      expectedVersion: v.version,
      expectedSemanticFingerprint: f.fingerprint,
      provenance: "caller_explicit",
    };
  }

  // I1 — both truly absent: server-owned durable attestation only.
  const inspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: input.executionContractId,
  });
  if (!inspection.ok) {
    return {
      ok: false,
      code: inspection.code,
      message: inspection.message,
    };
  }
  if (inspection.reinspectionRequired) {
    return {
      ok: false,
      code: "INSPECTION_STALE",
      message:
        "Attestation d'inspection obsolète ou réinspection requise — Select refusé.",
    };
  }
  if (!inspection.inspectionSufficient || inspection.attestedVersion == null) {
    return {
      ok: false,
      code: "INSPECTION_REQUIRED",
      message:
        "Inspection Pilote suffisante requise avant Select (contrat matérialité stampé).",
    };
  }
  const attestedFp =
    inspection.attestedSemanticFingerprint?.trim() ||
    inspection.semanticFingerprint?.trim();
  if (!attestedFp) {
    return {
      ok: false,
      code: "EXPECTED_FINGERPRINT_REQUIRED",
      message:
        "Empreinte sémantique d'inspection absente — Select refusé (fail-closed).",
    };
  }
  return {
    ok: true,
    expectedVersion: inspection.attestedVersion,
    expectedSemanticFingerprint: attestedFp,
    provenance: "durable_attestation",
  };
}

/** Phase 1 — SelectExecutionAgent → accepted (fresh AUTHORIZED required). */
export async function governedExecuteSelectAgent(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecutePhaseResult> {
  void input.claimedAuthorityLevel;
  void input.canActAsMorris;
  void input.authorityReceiptRef;
  void input.real;
  void input.adapterRef;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) {
    if (loaded.result.ok && loaded.result.phase === "terminal") return loaded.result;
    return loaded.result;
  }
  const { contract, selectionProfile } = loaded;
  const productCursor = isCanonicalProductGovernedContract(contract);
  const cursorReal = usesGenericCursorRealBoundary(contract);
  const boundary = executionBoundaryFailure(input.oa, contract);
  if (boundary) return boundary;

  // R2 — pathless non-mutating + REAL armed → refuse BEFORE Attempt/Select.
  const realNonMutatingGate = assertBoundedNonMutatingCursorRealAdmissible(
    contract,
  );
  if (!realNonMutatingGate.ok) {
    return {
      ok: false,
      code: realNonMutatingGate.code,
      message: realNonMutatingGate.message,
    };
  }

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore,
    });
  }

  // G-D4 — stamped Generic materiality contracts require version/fingerprint
  // binding at Select revalidation. Explicit values are NEVER overwritten by
  // attestation fallback. Partial binding (version XOR fingerprint) fails closed.
  const stampedMateriality = materialityFromContractConstraints(
    contract.constraints,
  );
  let expectedVersion = input.expectedVersion;
  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
  if (stampedMateriality != null) {
    const binding = await resolveStampedSelectInspectionBinding({
      oa: input.oa,
      executionContractId: contract.executionContractId,
      expectedVersion: input.expectedVersion,
      expectedSemanticFingerprint: input.expectedSemanticFingerprint,
    });
    if (!binding.ok) {
      return {
        ok: false,
        code: binding.code,
        message: binding.message,
      };
    }
    expectedVersion = binding.expectedVersion;
    expectedSemanticFingerprint = binding.expectedSemanticFingerprint;
  }

  const authorized = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    forceLocalAuthority: input.forceLocalAuthority,
    expectedVersion,
    expectedSemanticFingerprint,
  });
  if (!authorized.ok) {
    return {
      ok: false,
      code: authorized.code,
      message: authorized.message,
    };
  }
  if (authorized.outcome !== "AUTHORIZED") {
    return {
      ok: false,
      code: "NOT_AUTHORIZED",
      message:
        "Exécution refusée : le verdict courant n'est pas AUTHORIZED (aucune tentative).",
    };
  }

  const eligibility = resolveProductExecutionEligibility({
    constraints: contract.constraints,
    stopConditions: contract.stopConditions,
    inputs:
      contract.inputs && typeof contract.inputs === "object"
        ? (contract.inputs as Record<string, unknown>)
        : null,
  });
  if (!eligibility.eligible) {
    return {
      ok: false,
      code: "EXECUTION_INELIGIBLE",
      message: eligibility.reasonText,
    };
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
    contract.requiredAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  // Project-scoped Cursor tool access (canonical Product + sealed docs-write):
  // select by AgentCapability / effects via capabilities_deterministic.
  // Methodological cycle profile (Light/Standard/Critical/Capitalization) is NOT
  // an access condition for Cursor. Authority remains: AUTHORIZED evaluation,
  // HumanDecision / Confirmation / scope / ActionPolicy upstream of Select.
  // Sealed docs-write still requests its specialized agent; Product uses generalist.
  // Non–Cursor-REAL branches keep historical Critical → agent_selection Confirmation.
  let effectiveProfile: SelectionProfile = selectionProfile;
  let selectionStrategy: SelectionStrategy;
  if (cursorReal) {
    effectiveProfile = "standard";
    selectionStrategy = "capabilities_deterministic";
  } else {
    const strategyResolved = resolveSelectionStrategy(selectionProfile);
    if ("detailCode" in strategyResolved) {
      return {
        ok: false,
        code: strategyResolved.detailCode,
        message: strategyResolved.reason,
      };
    }
    if (strategyResolved.strategy === "human_confirmed_proposal") {
      return {
        ok: false,
        code: "AGENT_CONFIRMATION_REQUIRED",
        message:
          "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
      };
    }
    selectionStrategy = strategyResolved.strategy;
  }

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const selected =
    await input.oa.executionAttemptServices!.selectExecutionAgent.execute({
      attemptId: identities.attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: identities.attemptIdempotencyKey,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedContractVersion: contract.version,
      selectionProfile: effectiveProfile,
      selectionStrategy,
      systemInitiated: cursorReal,
      ...(productCursor
        ? { requestedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID }
        : {}),
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const provenance = projectProvenance(input.oa, selected.attempt);
  return {
    ok: true,
    phase: "accepted",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: selected.attempt.attemptId,
    attemptStatus: selected.attempt.status,
    selectedAgentRef: selected.attempt.selectedAgentRef,
    adapterId,
    selectionProfile: effectiveProfile,
    realExecution: provenance.realExecution,
    externalEffects: provenance.externalEffects,
    boundaryProofMode: provenance.boundaryProofMode,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "TENTATIVE ACCEPTÉE — EN ATTENTE DE DÉMARRAGE",
    technicalTerminal: false,
    productSuccessSemantics: false,
    attempt: projectAttempt(selected.attempt, adapterId),
  };
}

/** Phase 2 — StartExecution → running (continues accepted Attempt). */
export async function governedExecuteStart(
  input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
): Promise<GovernedExecutePhaseResult> {
  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;
  const productCursor = isCanonicalProductGovernedContract(contract);
  const cursorReal = usesGenericCursorRealBoundary(contract);
  const boundary = executionBoundaryFailure(input.oa, contract);
  if (boundary) return boundary;

  // R2 — defense in depth: refuse Start before any REAL effect.
  const realNonMutatingGate = assertBoundedNonMutatingCursorRealAdmissible(
    contract,
  );
  if (!realNonMutatingGate.ok) {
    return {
      ok: false,
      code: realNonMutatingGate.code,
      message: realNonMutatingGate.message,
    };
  }

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore,
    });
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
    contract.requiredAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  if (!cursorReal) {
    // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
    applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
  } else {
    // B3+B4 — Product generic Cursor REAL only (not sealed docs_write Fake/REAL).
    // Deterministic TestOnly paths keep SFIA_STUDIO_CURSOR_REAL unset (ZERO REAL).
    // Auth remains EXTERNAL_PREFLIGHT_REQUIRED — never inferred true here.
    if (productCursor && process.env.SFIA_STUDIO_CURSOR_REAL === "1") {
      const identity =
        typeof contract.inputs?.repositoryBindingIdentity === "string"
          ? contract.inputs.repositoryBindingIdentity
          : typeof contract.inputs?.repositoryIdentity === "string"
            ? contract.inputs.repositoryIdentity
            : null;
      const pathRoot =
        typeof contract.inputs?.pathRoot === "string"
          ? contract.inputs.pathRoot
          : null;
      const readiness = evaluateProductRealReadiness({
        expectedProjectId: contract.projectId,
        repositoryBindingIdentity: identity,
        pathRoot,
        defaultBranch:
          typeof contract.inputs?.defaultBranch === "string"
            ? contract.inputs.defaultBranch
            : null,
      });
      if (!readiness.readyForDeterministicPreReal) {
        return {
          ok: false,
          code: "PRODUCT_REAL_READINESS_NOT_MET",
          message: `Product REAL readiness fail-closed: ${readiness.blockers.join(",") || "not_ready"}`,
        };
      }
      // Auth is never proven in this ZERO REAL delivery — binary ≠ auth.
      if (readiness.auth.proven || readiness.readyForProductRealExecute) {
        return {
          ok: false,
          code: "PRODUCT_REAL_AUTH_CLAIM_FORBIDDEN",
          message:
            "Cursor auth must remain unproven until external preflight under a distinct Morris REAL GO.",
        };
      }
    }
    // Mechanical Gate D launch-safety grant — bound to Attempt/EC/fingerprint.
    // Not a Pilot-facing second Confirmation (docs-write + canonical Product).
    const grantId = `gd:w3a:${input.attemptId.replace(/^xat:/, "")}`;
    const nowMs = Date.parse(input.oa.clock.nowIso());
    const expiresAt = new Date(
      (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
    ).toISOString();
    const gate = await input.oa.executionAttemptServices!.grantRealExecutionGate!.execute(
      {
        grantId,
        attemptId: input.attemptId,
        actor: LOCAL_PILOTE_ACTOR,
        expiresAt,
        authorityEvidenceId: authority.evidenceId,
      },
    );
    if (!gate.ok) {
      return {
        ok: false,
        code: gate.error.detailCode,
        message: gate.error.message,
      };
    }
  }

  const started = await input.oa.executionAttemptServices!.startExecution.execute({
    attemptId: input.attemptId,
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });
  if (!started.ok) {
    const fromStart = started.attempt;
    const existing = fromStart
      ? null
      : await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
          attemptId: input.attemptId,
        });
    const attempt =
      fromStart ??
      (existing && existing.ok && existing.attempt ? existing.attempt : null);
    if (
      attempt &&
      (attempt.status === "failed" || attempt.status === "timeout")
    ) {
      return buildTechnicalTerminal({
        contract,
        attempt,
        selectionProfile,
        oa: input.oa,
        reusedExistingAttempt: false,
        launchCountBefore,
      });
    }
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
      attempt: attempt ? projectAttempt(attempt, adapterId) : undefined,
    };
  }

  // R-W3B-03 — TEST-ONLY governed stop arm: FC-10 SystemGovernedStop (not human Cancel).
  // Fixture / historical paths only — Product Cursor REAL does not use fixture arms.
  if (!cursorReal) {
    const stopArm = consumeW3bBoundaryArm();
    if (stopArm?.kind === "governed_stop") {
      const onContract =
        contract.stopConditions.includes(stopArm.stopCondition) ||
        contract.constraints.some(
          (c) =>
            c === stopArm.stopCondition ||
            (c.startsWith("PROTECTED:") &&
              (stopArm.stopCondition === c ||
                stopArm.stopCondition.startsWith(`${c} `) ||
                stopArm.stopCondition.startsWith(`${c}:`))),
        );
      if (onContract && input.oa.executionAttemptServices!.systemGovernedStop) {
        const stopped =
          await input.oa.executionAttemptServices!.systemGovernedStop.execute({
            attemptId: started.attempt.attemptId,
            stopCode: stopArm.stopCondition,
            stopSourceRef: `w3b-e2e-boundary:${stopArm.stopCondition}`,
            reason: stopArm.stopCondition,
          });
        if (stopped.ok) {
          return buildTechnicalTerminal({
            contract,
            attempt: stopped.attempt,
            selectionProfile,
            oa: input.oa,
            reusedExistingAttempt: false,
            launchCountBefore,
          });
        }
      }
    }
  }

  const runningProvenance = projectProvenance(input.oa, started.attempt);
  return {
    ok: true,
    phase: "running",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: started.attempt.attemptId,
    attemptStatus: started.attempt.status,
    selectedAgentRef: started.attempt.selectedAgentRef,
    adapterId,
    selectionProfile,
    realExecution: runningProvenance.realExecution,
    externalEffects: runningProvenance.externalEffects,
    boundaryProofMode: runningProvenance.boundaryProofMode,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "EXÉCUTION EN COURS",
    technicalTerminal: false,
    productSuccessSemantics: false,
    attempt: projectAttempt(started.attempt, adapterId),
  };
}

/** Phase 3 — RecordExecutionResult → technical terminal. */
export async function governedExecuteRecordResult(
  input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
): Promise<GovernedExecuteAuthorizedContractResult> {
  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;
  const productCursor = isCanonicalProductGovernedContract(contract);
  const boundary = executionBoundaryFailure(input.oa, contract);
  if (boundary) return boundary;

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore,
    });
  }

  // Canonical Product generic Cursor: await REAL completion (docs_write pattern).
  // CURSOR_REPORT_PENDING remains when awaitIfPending===false and Attempt still running.
  if (productCursor) {
    const existing =
      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId: input.attemptId,
      });
    if (!existing.ok || !existing.attempt) {
      return {
        ok: false,
        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
        message: existing.ok
          ? "Attempt introuvable pour completion Product Cursor."
          : existing.error.message,
      };
    }
    let attempt = existing.attempt;
    if (
      attempt.status === "succeeded" ||
      attempt.status === "failed" ||
      attempt.status === "timeout" ||
      attempt.status === "cancelled"
    ) {
      return buildTechnicalTerminal({
        contract,
        attempt,
        selectionProfile,
        oa: input.oa,
        reusedExistingAttempt: false,
        launchCountBefore,
      });
    }

    const awaitIfPending = input.awaitIfPending !== false;
    if (attempt.status === "running") {
      const completed = await completeBoundedReadOnlyLaunch({
        attempt: attempt as never,
        services: input.oa.executionAttemptServices!,
        awaitIfPending,
      });
      if (!completed.ok) {
        return {
          ok: false,
          code: completed.code,
          message: completed.message,
          attempt: projectAttempt(attempt, adapterId),
        };
      }
      if (completed.status === "running") {
        return {
          ok: false,
          code: "CURSOR_REPORT_PENDING",
          message:
            "Tentative Cursor générique en cours — le rapport d'exécution / Evidence n'est pas encore disponible (pas de fallback fixture).",
          attempt: projectAttempt(completed.attempt, adapterId),
        };
      }
      attempt = completed.attempt;

      if (
        completed.status === "succeeded" &&
        completed.facts &&
        contract.cycleInstanceId &&
        contract.constraints.includes(PRODUCT_MISSION_FROM_DURABLE_CONTEXT)
      ) {
        const stdout = completed.observation?.stdout ?? "";
        const report = tryParseReportFromStdout(stdout);
        const expectedRepo =
          typeof contract.inputs?.repositoryBindingIdentity === "string"
            ? contract.inputs.repositoryBindingIdentity
            : null;
        const expectedSha =
          typeof contract.inputs?.baseHeadSha === "string"
            ? contract.inputs.baseHeadSha
            : null;
        if (report) {
          const bound = bindCursorExecutionReportToAttempt({
            report,
            expectedAttemptId: attempt.attemptId,
            expectedExecutionContractId: contract.executionContractId,
            attemptExecutionContractId: attempt.executionContractId,
            expectedRepositoryRef: expectedRepo,
            expectedBaseSha: expectedSha,
          });
          if (!bound.ok) {
            return {
              ok: false,
              code: bound.code,
              message: bound.message,
              attempt: projectAttempt(attempt, adapterId),
            };
          }
        }
        const refsRoot =
          input.missionResultRefsRoot?.trim() ||
          path.join(
            path.dirname(
              typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
                process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
                ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH
                : path.join(
                    process.cwd(),
                    "..",
                    ".sfia-exec",
                    "product",
                    "oa-product.sqlite",
                  ),
            ),
            "mission-result-refs",
          );

        // CR-01 — Generic Product nominal: observe worktree → VerifiedChangeSet →
        // finalize Generic Review Material BEFORE Evidence/mission ingest.
        // worktreeRef is server-owned (RealProcessObservation / LaunchAck).
        if (report) {
          const worktreeRef =
            completed.observation?.worktreeRef?.trim() || null;
          const finalized = await finalizeGenericExecutionReview({
            refsRoot,
            projectId: input.projectId,
            cycleInstanceId: contract.cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptId: attempt.attemptId,
            repositoryRef:
              expectedRepo ?? report.repositoryRef ?? "repository:unknown",
            baseSha: expectedSha ?? report.baseSha ?? "unknown",
            cursorReport: report,
            worktreePath: worktreeRef,
            // CP3-03 — nominal HEAD binding (worktree HEAD == pinned baseSha).
            // Do NOT bypass; Fake fixtures must use the same H0 worktree.
          });
          if (!finalized.ok) {
            return {
              ok: false,
              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
              message: `Attempt succeeded durable — Generic Review Material finalize échoué (${finalized.code}): ${finalized.message}`,
              attempt: projectAttempt(attempt, adapterId),
            };
          }

          // CP3-04 — Verification Evidence digest = durable VCS bytes digest.
          const vcsDigest = finalized.durableVerifiedChangeSetDigest;
          const verificationPayload = {
            schemaVersion: "oa.execution-review-verification.1" as const,
            attemptId: attempt.attemptId,
            executionContractId: contract.executionContractId,
            projectId: input.projectId,
            repositoryRef:
              expectedRepo ?? report.repositoryRef ?? "repository:unknown",
            baseSha: expectedSha ?? report.baseSha ?? "unknown",
            reviewMaterialId: finalized.manifest.reviewMaterialId,
            verificationStatus: finalized.verificationStatus,
            verifiedChangeSetDigest: vcsDigest,
            verifiedChangeSetRef:
              finalized.verifiedChangeSetRef ??
              finalized.manifest.verifiedEffects.verifiedChangeSetRef,
            claimFactMismatch: finalized.claimFactMismatch,
            unclaimedObservedPaths:
              finalized.verifiedChangeSet?.unclaimedObservedPaths ?? [],
            claimedMissingPaths:
              finalized.verifiedChangeSet?.claimedMissingPaths ?? [],
            observedPathCount: finalized.verifiedChangeSet?.all.length ?? 0,
            completeness: finalized.manifest.completeness,
            reviewEndOfPresent: finalized.reviewEndOfPresent,
          };
          const verificationIngested =
            await ingestExecutionReviewVerificationEvidence({
              evidenceReviewServices: input.oa.evidenceReviewServices,
              projectId: input.projectId,
              cycleInstanceId: contract.cycleInstanceId,
              executionContractId: contract.executionContractId,
              executionAttemptId: attempt.attemptId,
              payload: verificationPayload,
              refsRoot,
              technicalResultRef: attempt.resultRef,
            });
          if (!verificationIngested.ok) {
            return {
              ok: false,
              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
              message: `Attempt succeeded durable — Verification Evidence ingest échoué (${verificationIngested.code}): ${verificationIngested.message}`,
              attempt: projectAttempt(attempt, adapterId),
            };
          }
        }

        const built = report
          ? buildMissionResultPayloadFromReport({ report })
          : ({
              ok: false as const,
              code: "MISSION_RESULT_REPORT_REQUIRED",
              message:
                "Mission Result Evidence requires a structured CursorExecutionReport with missionResult fields.",
            } as const);
        if (built.ok) {
          const ingested = await ingestMissionResultEvidence({
            evidenceReviewServices: input.oa.evidenceReviewServices,
            projectId: input.projectId,
            cycleInstanceId: contract.cycleInstanceId,
            executionContractId: contract.executionContractId,
            executionAttemptId: attempt.attemptId,
            payload: built.payload,
            refsRoot,
            technicalResultRef: attempt.resultRef,
          });
          if (!ingested.ok) {
            return {
              ok: false,
              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
              message: `Attempt succeeded durable — ingest Mission Evidence échoué (${ingested.code}): ${ingested.message}`,
              attempt: projectAttempt(attempt, adapterId),
            };
          }
          const advanced = await advanceProductExecutionContractAfterEvidence({
            oa: input.oa,
            projectId: input.projectId,
            executionContractId: contract.executionContractId,
            cycleInstanceId: contract.cycleInstanceId,
            freshlyIngestedEvidenceId: ingested.evidenceId,
          });
          if (!advanced.ok) {
            return {
              ok: false,
              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
              message: `Attempt succeeded durable — avancement EC post-Evidence échoué (${advanced.reason}).`,
              attempt: projectAttempt(attempt, adapterId),
            };
          }
        }
        // Technical succeed without mission payload → Attempt remains succeeded;
        // ContractResult stays not_proven (honest). Do not invent Evidence.
      }
    }

    return buildTechnicalTerminal({
      contract,
      attempt,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: false,
      launchCountBefore,
      statusLabel:
        attempt.status === "succeeded"
          ? "TERMINAL TECHNIQUE PRODUCT CURSOR — RÉSULTAT PRODUIT À QUALIFIER"
          : undefined,
    });
  }

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const recorded =
    await input.oa.executionAttemptServices!.recordExecutionResult.execute({
      attemptId: input.attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef: identities.resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    const existing = await input.oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: input.attemptId },
    );
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt, adapterId)
          : undefined,
    };
  }

  let cycleInstanceClosed = false;
  let projectArchived = false;
  const project = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok) {
    projectArchived = project.project.status === "archived";
    if (contract.cycleInstanceId) {
      const cycleAfter = await input.oa.cycleServices.getCycle.execute({
        cycleInstanceId: contract.cycleInstanceId,
      });
      if (cycleAfter.ok) {
        cycleInstanceClosed =
          cycleAfter.cycle.status === "completed" ||
          cycleAfter.cycle.status === "cancelled";
      }
    }
  }

  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
  const fixtureProvenance = projectProvenance(input.oa, recorded.attempt);
  return {
    ok: true,
    phase: "terminal",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: recorded.attempt.attemptId,
    attemptStatus: recorded.attempt.status,
    selectedAgentRef: recorded.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    reusedExistingAttempt: false,
    launchCount,
    launchDelta: launchCount - launchCountBefore,
    executionPerformed: true,
    attemptCreated: true,
    realExecution: fixtureProvenance.realExecution,
    externalEffects: fixtureProvenance.externalEffects,
    boundaryProofMode: fixtureProvenance.boundaryProofMode,
    gitWritePerformed: false,
    cycleInstanceClosed,
    projectArchived,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
    technicalTerminal: recorded.attempt.status === "succeeded",
    productSuccessSemantics: false,
    attempt: projectAttempt(recorded.attempt, adapterId),
  };
}

const PILOT_CANCEL_REASON =
  "Arrêt demandé par le Pilote — travail antérieur préservé.";

/**
 * Cancel while running (Pilote Arrêter). Technical cancelled only.
 * Product STOP claim requires a contract-governed boundary (R-W3B-03) —
 * a free-form pilot reason alone qualifies as UNCLAIMED at FC-11.
 */
export async function governedExecuteCancel(
  input: GovernedExecuteAuthorizedContractInput & {
    readonly attemptId: string;
    readonly reason?: string;
  },
): Promise<GovernedExecuteAuthorizedContractResult> {
  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;
  const boundary = executionBoundaryFailure(input.oa, contract);
  if (boundary) return boundary;

  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

  registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
    contract.requiredAuthority,
  );

  const reason = (input.reason && input.reason.trim()) || PILOT_CANCEL_REASON;
  const cancelled =
    await input.oa.executionAttemptServices!.cancelExecutionAttempt.execute({
      attemptId: input.attemptId,
      reason,
      actor: LOCAL_PILOTE_ACTOR,
    });
  if (!cancelled.ok) {
    const existing =
      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId: input.attemptId,
      });
    return {
      ok: false,
      code: cancelled.error.detailCode,
      message: cancelled.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt, adapterIdForContract(contract))
          : undefined,
    };
  }

  return buildTechnicalTerminal({
    contract,
    attempt: cancelled.attempt,
    selectionProfile,
    oa: input.oa,
    reusedExistingAttempt: Boolean(cancelled.replayed),
    launchCountBefore,
  });
}

/**
 * @deprecated W3-B correction — FAIL must originate from TestExecutionAdapter
 * via StartExecution. Do not call from product UI. Kept only if OA tests need
 * a direct RecordExecutionFailure seam; product actions no longer export it.
 */
export async function governedExecuteRecordFailure(
  input: GovernedExecuteAuthorizedContractInput & {
    readonly attemptId: string;
    readonly stopReason?: string;
  },
): Promise<GovernedExecuteAuthorizedContractResult> {
  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;
  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const failed =
    await input.oa.executionAttemptServices!.recordExecutionFailure.execute({
      attemptId: input.attemptId,
      adapterId: F3_ADAPTER_ID,
      errorRef: identities.errorRef,
      stopReason:
        input.stopReason?.trim() ||
        "Échec technique d'adaptateur — processus/outil indisponible.",
      technicalExitCode: 1,
    });
  if (!failed.ok) {
    const existing =
      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId: input.attemptId,
      });
    return {
      ok: false,
      code: failed.error.detailCode,
      message: failed.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt)
          : undefined,
    };
  }

  return buildTechnicalTerminal({
    contract,
    attempt: failed.attempt,
    selectionProfile,
    oa: input.oa,
    reusedExistingAttempt: false,
    launchCountBefore,
  });
}

export async function governedExecuteAuthorizedContract(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecuteAuthorizedContractResult> {
  const launchCountBefore = input.oa.fixtureAdapter?.launchCallCount ?? 0;
  const selected = await governedExecuteSelectAgent(input);
  if (!selected.ok) return selected;
  if (selected.phase === "terminal") {
    return selected as GovernedExecuteAuthorizedContractResult;
  }

  const started = await governedExecuteStart({
    ...input,
    attemptId: selected.attemptId,
  });
  if (!started.ok) return started;
  // Adapter FAIL or governed STOP may already be technical terminal after Start.
  if (started.phase === "terminal") {
    return started as GovernedExecuteAuthorizedContractResult;
  }

  const terminal = await governedExecuteRecordResult({
    ...input,
    attemptId: started.attemptId,
  });
  if (!terminal.ok) return terminal;
  return {
    ...terminal,
    launchDelta: terminal.launchCount - launchCountBefore,
  };
}
