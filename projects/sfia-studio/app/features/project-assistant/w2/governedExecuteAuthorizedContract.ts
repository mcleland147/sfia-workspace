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
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  applyW3bAdapterFailArmIfPresent,
  consumeW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttempt,
  SelectionProfile,
  SelectionStrategy,
} from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
  resolveSelectionStrategy,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import type { CycleProfile } from "@/lib/oa/cycle";
import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import {
  buildMissionResultPayloadFromReport,
  type CursorExecutionReportWithMission,
} from "@/features/project-assistant/f3/buildMissionResultPayloadFromReport";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
import {
  bindCursorExecutionReportToAttempt,
  parseCursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import path from "node:path";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import { evaluateProductRealReadiness } from "./evaluateProductRealReadiness";
import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
import type {
  GovernedExecuteAuthorizedContractResult,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseResult,
} from "./types";

function tryParseReportFromStdout(
  stdout: string,
): CursorExecutionReportWithMission | null {
  const marker = "CURSOR_EXECUTION_REPORT_JSON=";
  const idx = stdout.indexOf(marker);
  if (idx < 0) return null;
  const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
  try {
    const parsed = parseCursorExecutionReport(JSON.parse(json));
    return parsed.ok ? (parsed.report as CursorExecutionReportWithMission) : null;
  } catch {
    return null;
  }
}
function mapCycleProfileToSelectionProfile(
  profile: CycleProfile | string | null | undefined,
): SelectionProfile {
  if (profile === "Critical") return "critical";
  if (profile === "Light") return "light";
  return "standard";
}

function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
}

/**
 * Canonical Product EC: Nora/Studio-prepared PRODUCT_GOVERNED envelope.
 * Not a sealed GCEC docs-write profile. Not an explicit fixture-only stamp.
 */
function isCanonicalProductGovernedContract(
  contract: ExecutionContract,
): boolean {
  if (isBoundedDocsWriteContract(contract)) return false;
  if (contract.constraints.includes("FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
    return false;
  }
  return contract.constraints.includes("PRODUCT_GOVERNED");
}

/** Generic Cursor REAL launch boundary (Product or sealed docs-write). */
function usesGenericCursorRealBoundary(contract: ExecutionContract): boolean {
  return (
    isBoundedDocsWriteContract(contract) ||
    isCanonicalProductGovernedContract(contract)
  );
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

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok && project.project.status === "archived") {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_ARCHIVED",
        message: "Projet archivé — aucune exécution.",
      },
    };
  }

  let selectionProfile: SelectionProfile | null = null;
  if (!contract.cycleInstanceId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "CYCLE_BINDING_REQUIRED",
        message:
          "ExecutionContract sans cycleInstanceId — Execute W3-A refusé (pas de fallback Standard).",
      },
    };
  }
  {
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
    selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
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
) {
  return registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt: oa.clock.nowIso(),
    forceEnable: forceLocalAuthority === true,
  });
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
  const docsWrite = isBoundedDocsWriteContract(contract);
  const productCursor = isCanonicalProductGovernedContract(contract);
  const cursorReal = usesGenericCursorRealBoundary(contract);
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

  const authorized = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    forceLocalAuthority: input.forceLocalAuthority,
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
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  // Cursor REAL paths (canonical Product + sealed docs-write): mechanical
  // capabilities_deterministic selection — no Pilot agent-selection HOW.
  // Sealed docs-write still requests its specialized agent; Product uses generalist.
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
      ...(docsWrite
        ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
        : productCursor
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
  const docsWrite = isBoundedDocsWriteContract(contract);
  const productCursor = isCanonicalProductGovernedContract(contract);
  void docsWrite;
  const cursorReal = usesGenericCursorRealBoundary(contract);
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

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
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
  const docsWrite = isBoundedDocsWriteContract(contract);
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

  if (docsWrite) {
    const existing =
      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId: input.attemptId,
      });
    if (!existing.ok || !existing.attempt) {
      return {
        ok: false,
        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
        message: existing.ok
          ? "Attempt introuvable pour completion docs-write."
          : existing.error.message,
      };
    }
    let attempt = existing.attempt;
    if (attempt.status === "running" && !attempt.resultRef) {
      const targetPath =
        typeof contract.inputs?.targetPath === "string"
          ? contract.inputs.targetPath
          : undefined;
      const pathAllowlist = Array.isArray(contract.inputs?.pathAllowlist)
        ? (contract.inputs.pathAllowlist as string[])
        : undefined;
      const completed = await completeBoundedDocsWriteLaunch({
        attempt: attempt as never,
        services: input.oa.executionAttemptServices!,
        ...(targetPath ? { targetPath } : {}),
        ...(pathAllowlist ? { pathAllowlist } : {}),
        // Product Execute must terminalize REAL spawn-ACK (invoke ≠ completion).
        awaitIfPending: true,
      });
      if (!completed.ok) {
        return {
          ok: false,
          code: completed.code,
          message: completed.message,
          attempt: projectAttempt(attempt, adapterId),
        };
      }
      attempt = completed.attempt;
      if (
        completed.status === "succeeded" &&
        "facts" in completed &&
        completed.facts &&
        contract.cycleInstanceId
      ) {
        const ingested = await ingestDocsWriteArtifactEvidence({
          evidenceReviewServices: input.oa.evidenceReviewServices,
          projectId: input.projectId,
          cycleInstanceId: contract.cycleInstanceId,
          executionContractId: contract.executionContractId,
          executionAttemptId: attempt.attemptId,
          targetPath: completed.facts.targetPath,
          digest: completed.facts.digest,
          nowIso: input.oa.clock.nowIso(),
        });
        // CR-PCONT-06 — Attempt succeeded stays durable; ingest / advance failure
        // must surface as post-execution continuity failure (never silent).
        if (!ingested.ok) {
          return {
            ok: false,
            code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
            message: `Attempt succeeded durable — ingest Evidence post-exécution échoué (${ingested.code}): ${ingested.message}`,
            attempt: projectAttempt(attempt, adapterId),
          };
        }
        // D-MORRIS-PCONT-01 Option A — qualify completion after Evidence update.
        // available ≠ verified; advance only completes when requirements are satisfied.
        // CR-PCONT-04 — never pass digest/script; Product is payload-agnostic.
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
          ? "TERMINAL TECHNIQUE DOCS-WRITE — RÉSULTAT PRODUIT À QUALIFIER"
          : undefined,
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
        const built = report
          ? buildMissionResultPayloadFromReport({ report })
          : ({
              ok: false as const,
              code: "MISSION_RESULT_REPORT_REQUIRED",
              message:
                "Mission Result Evidence requires a structured CursorExecutionReport with missionResult fields.",
            } as const);
        if (built.ok) {
          const refsRoot =
            input.missionResultRefsRoot?.trim() ||
            path.join(
              path.dirname(
                typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
                  process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
                  ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH
                  : path.join(process.cwd(), "..", ".sfia-exec", "product", "oa-product.sqlite"),
              ),
              "mission-result-refs",
            );
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
