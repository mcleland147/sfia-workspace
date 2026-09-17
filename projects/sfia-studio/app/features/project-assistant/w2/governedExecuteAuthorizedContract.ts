/**
 * W3-A — Governed Execute seam on the canonical `/studio` W2 product path.
 *
 * Phase 1 (select): fresh AUTHORIZED evaluation → accepted
 * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
 * Phase 3 (record): continue running Attempt → technical terminal
 *
 * Dual Product orchestration (ONE state machine):
 * - Sandbox / fixture-safe EC → F3 fixture adapter (existing)
 * - Resolved M4 bounded docs-write EC → OA Select → Gate D → StartExecution
 *   with Fake or REAL launch port from composition (client real/adapter ignored)
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
} from "@/lib/oa/execution-attempt";
import type { CycleProfile } from "@/lib/oa/cycle";
import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import type {
  GovernedExecuteAuthorizedContractResult,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseResult,
} from "./types";

function mapCycleProfileToSelectionProfile(
  profile: CycleProfile | string | null | undefined,
): SelectionProfile {
  if (profile === "Critical") return "critical";
  if (profile === "Light") return "light";
  return "standard";
}

/**
 * adapterId = contractual M4 gateway identity for docs-write ECs
 * (Fake and REAL share M4_REAL_GATEWAY_ADAPTER_ID). Physical Fake vs REAL is
 * carried by boundaryProofMode / realExecution from deriveAttemptProvenance.
 */
function adapterIdForContract(contract: ExecutionContract): string {
  return isBoundedDocsWriteContract(contract)
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
};

type Failure = GovernedExecuteAuthorizedContractResult;

function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
}

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

/** Docs-write path: require composed launch boundary (Fake in tests / REAL when opted-in). */
function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
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
        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }
  if (!oa.executionAttemptServices.grantRealExecutionGate) {
    return {
      ok: false,
      code: "GATE_D_REQUIRED",
      message:
        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed).",
    };
  }
  return null;
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
  const docsWrite = isBoundedDocsWriteContract(input.contract);
  const adapterId = adapterIdForContract(input.contract);
  const launchCount = docsWrite
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
  const boundary = docsWrite
    ? docsWriteBoundaryFailure(input.oa)
    : fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = docsWrite
    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
    : input.oa.fixtureAdapter!.launchCallCount;

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

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  // Docs-write shares F3 M4 selection: capabilities_deterministic + requested
  // M4 agent (system-initiated). Cycle Critical must not invent a second
  // agent-confirmation Product path for an already Confirmation-gated EC.
  let effectiveProfile: SelectionProfile = selectionProfile;
  let selectionStrategy: SelectionStrategy;
  if (docsWrite) {
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
      systemInitiated: docsWrite,
      ...(docsWrite
        ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
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
  const boundary = docsWrite
    ? docsWriteBoundaryFailure(input.oa)
    : fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = docsWrite
    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
    : input.oa.fixtureAdapter!.launchCallCount;

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

  if (!docsWrite) {
    // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
    applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
  } else {
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
  if (!docsWrite) {
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
  const boundary = docsWrite
    ? docsWriteBoundaryFailure(input.oa)
    : fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = docsWrite
    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
    : input.oa.fixtureAdapter!.launchCallCount;

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
        await ingestDocsWriteArtifactEvidence({
          evidenceReviewServices: input.oa.evidenceReviewServices,
          projectId: input.projectId,
          cycleInstanceId: contract.cycleInstanceId,
          executionContractId: contract.executionContractId,
          executionAttemptId: attempt.attemptId,
          targetPath: completed.facts.targetPath,
          digest: completed.facts.digest,
          nowIso: input.oa.clock.nowIso(),
        });
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
  const docsWrite = isBoundedDocsWriteContract(contract);
  const boundary = docsWrite
    ? docsWriteBoundaryFailure(input.oa)
    : fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const launchCountBefore = docsWrite
    ? launchCallCountOf(
        input.oa.executionAttemptServices!.realBoundary!.launchPort,
      )
    : input.oa.fixtureAdapter!.launchCallCount;

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
