/**
 * Checkpoint F / R8 — prepare + resolve a bounded docs_write successor EC from
 * a coherent RecoveryExecutionBinding after recovery trajectory HD.
 *
 * RECOVERY-DOCS-WRITE-MODE-SEALING-01 — seals artifactWriteMode from CURRENT
 * trusted managed-repo existence + durable same-deliverable Evidence before
 * the successor becomes executable. Does NOT weaken execution-time TOCTOU.
 *
 * Does NOT mutate HumanDecision. Does NOT Execute. Does NOT create Attempts.
 * Clears wrong pre-exec generic EC via Cancel (existing pre-exec lifecycle).
 */
import path from "node:path";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { F2ContextSnapshot } from "@/features/project-assistant/f2/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import {
  classifyArtifactWriteMode,
  hasDurableSameArtifactEvidence,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import {
  launchContextAsContractInputs,
  resolveTrustedProductLaunchContext,
} from "./resolveTrustedProductLaunchContext";
import {
  boundedDocsWriteM3ResolutionProfile,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  canonicalM3PrepareContractId,
  resolveM3ExecutionContract,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
import {
  resolveRecoveryExecutionBinding,
  type RecoveryExecutionBinding,
} from "./resolveRecoveryExecutionBinding";
import {
  classifyCurrentRecoveryDocsWriteSuccessor,
  repairIncompleteRecoveryDocsWriteSuccessor,
} from "./repairIncompleteRecoveryDocsWriteSuccessor";
import type { AmendedExecutionContractDto } from "./types";

export type SealRecoveryDocsWriteArtifactWriteModeResult =
  | {
      readonly ok: true;
      readonly artifactWriteMode: "CREATE" | "UPDATE";
      readonly targetExists: boolean;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Seal CREATE|UPDATE for a recovery docs_write successor from CURRENT
 * managed-repo truth + durable Evidence. Historical source EC mode is ignored.
 */
export async function sealRecoveryDocsWriteArtifactWriteMode(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly targetPath: string;
  readonly repositoryBindingIdentity: string;
  readonly managedRepoRoot: string | null;
}): Promise<SealRecoveryDocsWriteArtifactWriteModeResult> {
  const targetPath = input.targetPath.trim();
  if (!targetPath) {
    return {
      ok: false,
      code: "TARGET_PATH_REQUIRED",
      message:
        "targetPath absent — mode écriture recovery impossible à sceller.",
    };
  }
  const identity = input.repositoryBindingIdentity.trim();
  if (!identity) {
    return {
      ok: false,
      code: "REPOSITORY_BINDING_REQUIRED",
      message:
        "Identité dépôt projet absente — mode écriture recovery fail-closed.",
    };
  }
  const managedRepoRoot = input.managedRepoRoot?.trim() || null;
  if (!managedRepoRoot) {
    return {
      ok: false,
      code: "ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE",
      message:
        "Clone géré indisponible — fait d'existence UNKNOWN ≠ ABSENT; mode non scellable.",
    };
  }

  const managedRepoRootBase = path.dirname(managedRepoRoot);
  const targetExists = probeManagedRepoRelativePathExists({
    identity,
    repoRelativePath: targetPath,
    managedRepoRootBase,
  });
  if (targetExists === null) {
    return {
      ok: false,
      code: "ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE",
      message:
        "Fait d'existence cible indisponible — mode écriture recovery fail-closed.",
    };
  }

  let intentClearlySameDeliverable: boolean | undefined;
  if (targetExists === true) {
    if (!input.oa.evidenceReviewServices) {
      return {
        ok: false,
        code: "EVIDENCE_SERVICES_UNAVAILABLE",
        message:
          "Services Evidence indisponibles — same-deliverable non prouvable; UPDATE refusé.",
      };
    }
    let evidenceList: Awaited<
      ReturnType<
        typeof input.oa.evidenceReviewServices.repository.listByProject
      >
    >;
    try {
      evidenceList =
        await input.oa.evidenceReviewServices.repository.listByProject(
          input.projectId,
        );
    } catch {
      return {
        ok: false,
        code: "EVIDENCE_READ_FAILED",
        message:
          "Lecture Evidence échouée — same-deliverable non prouvable; UPDATE refusé.",
      };
    }
    intentClearlySameDeliverable = hasDurableSameArtifactEvidence({
      projectId: input.projectId,
      targetPath,
      evidence: evidenceList,
    });
  }

  const artifactWriteMode = classifyArtifactWriteMode({
    targetExists,
    intentClearlySameDeliverable,
  });
  if (artifactWriteMode !== "CREATE" && artifactWriteMode !== "UPDATE") {
    return {
      ok: false,
      code: "ARTIFACT_WRITE_MODE_ASK",
      message:
        "Mode écriture ASK — successor recovery non exécutable (preuve same-deliverable insuffisante).",
    };
  }

  return {
    ok: true,
    artifactWriteMode,
    targetExists,
  };
}
export const RECOVERY_WRONG_GENERIC_CANCEL_REASON =
  "w2_recovery_docs_write_reprepare — clear unconsumed generic fixture EC before docs_write successor" as const;

export type PrepareDocsWriteRecoverySuccessorResult =
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly binding: RecoveryExecutionBinding;
      readonly prepareContractId: string;
      readonly successor: AmendedExecutionContractDto;
      readonly cancelledWrongGenericContractId: string | null;
      readonly reusedFromIdempotency: boolean;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly confirmationRequired: true;
      /** CORR-01 — set when an incomplete successor was superseded. */
      readonly repairedFromExecutionContractId?: string;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function toSuccessorDto(successor: {
  executionContractId: string;
  version: number;
  status: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  constraints: readonly string[];
  stopConditions: readonly string[];
  requiredCapabilities: readonly string[];
  reversibility: string;
  semanticFingerprint: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  inspectionDisclosure: AmendedExecutionContractDto["inspectionDisclosure"];
}): AmendedExecutionContractDto {
  return {
    executionContractId: successor.executionContractId,
    version: successor.version,
    status: successor.status,
    action: successor.action,
    target: successor.target,
    scope: successor.scope,
    requiredAuthority: successor.requiredAuthority,
    constraints: [...successor.constraints],
    stopConditions: [...successor.stopConditions],
    requiredCapabilities: [...successor.requiredCapabilities],
    reversibility: successor.reversibility,
    semanticFingerprint: successor.semanticFingerprint,
    supersedesExecutionContractId: successor.supersedesExecutionContractId,
    supersessionReason: successor.supersessionReason,
    inspectionDisclosure: successor.inspectionDisclosure,
  };
}

async function cancelWrongGenericCurrentIfNeeded(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly recoveryDecisionId: string;
  readonly forceLocalAuthority: boolean;
}): Promise<
  | { readonly ok: true; readonly cancelledId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const continuity = await readCurrentGovernedExecutionContinuity({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!continuity.ok) {
    return {
      ok: false,
      code: continuity.code,
      message: continuity.message,
    };
  }
  if (continuity.kind === "none") {
    return { ok: true, cancelledId: null };
  }

  const current = continuity.contract;
  const isDocsWrite =
    current.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    current.target === M4_BOUNDED_DOCS_WRITE_TARGET;
  if (isDocsWrite) {
    return { ok: true, cancelledId: null };
  }

  // Only clear unconsumed wrong generic when it belongs to this recovery HD.
  if (continuity.decisionRef !== input.recoveryDecisionId) {
    return {
      ok: false,
      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
      message:
        "Un contrat pré-exécution courant d'une autre décision bloque le prepare recovery.",
    };
  }

  // Authority must match the wrong generic EC scope (not docs_write).
  const cancelAuthority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: current.scope,
    issuedAt: input.oa.clock.nowIso(),
    requiredAuthority: current.requiredAuthority,
    evidenceId: `evd:m3-rec-cancel:${current.executionContractId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!cancelAuthority.ok) {
    return {
      ok: false,
      code: cancelAuthority.code,
      message: cancelAuthority.message,
    };
  }

  const cancelled =
    await input.oa.executionContractServices!.cancelExecutionContract.execute({
      executionContractId: current.executionContractId,
      reason: RECOVERY_WRONG_GENERIC_CANCEL_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: cancelAuthority.evidenceId,
      expectedVersion: current.version,
    });
  if (!cancelled.ok) {
    return {
      ok: false,
      code: cancelled.error.detailCode,
      message: cancelled.error.message,
    };
  }
  return { ok: true, cancelledId: current.executionContractId };
}

/**
 * Explicit Pilot PREPARE after recovery trajectory HD (governed retry).
 */
export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly currentContext: F2ContextSnapshot;
  readonly forceLocalAuthority?: boolean;
  /** Server/test only — pin base HEAD; never from client. */
  readonly boundedDocsWriteBaseHeadSha?: string;
}): Promise<PrepareDocsWriteRecoverySuccessorResult> {
  const { oa } = input;
  if (!oa.executionContractServices || !oa.decisionServices) {
    return {
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "Services EC / Decision indisponibles.",
    };
  }

  const bound = await resolveRecoveryExecutionBinding({
    oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!bound.ok) return bound;
  if (!bound.binding) {
    return {
      ok: false,
      code: "RECOVERY_EXECUTION_BINDING_REQUIRED",
      message:
        "Aucun RecoveryExecutionBinding docs_write cohérent — prepare recovery refusé.",
    };
  }
  const binding = bound.binding;

  const issuedAt = oa.clock.nowIso();
  // Product recovery same-scope — Pilot/N2 (not Morris construction gate).
  const requiredAuthority = "N2";
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: oa.authorityResolver,
    scope: binding.scope || "studio.gcec.docs_write",
    issuedAt,
    requiredAuthority,
    evidenceId: `evd:m3-rec-prep-pilote:${input.decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const prepareId = canonicalM3PrepareContractId(input.decisionId);

  // Classify current recovery docs_write successor before any resolve/reuse.
  const continuityBefore = await readCurrentGovernedExecutionContinuity({
    oa,
    projectId: input.projectId,
  });
  if (!continuityBefore.ok) {
    return {
      ok: false,
      code: continuityBefore.code,
      message: continuityBefore.message,
    };
  }
  const classified = await classifyCurrentRecoveryDocsWriteSuccessor({
    oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
    continuityDecisionRef:
      continuityBefore.kind === "active" ? continuityBefore.decisionRef : null,
    continuityContract:
      continuityBefore.kind === "active" ? continuityBefore.contract : null,
  });
  if (classified.kind === "ta5_refused" || classified.kind === "refused") {
    return {
      ok: false,
      code: classified.code,
      message: classified.message,
    };
  }
  if (classified.kind === "sealed_reuse") {
    const c = classified.contract;
    return {
      ok: true,
      decisionId: input.decisionId,
      binding,
      prepareContractId: prepareId,
      successor: {
        executionContractId: c.executionContractId,
        version: c.version,
        status: c.status,
        action: c.action,
        target: c.target,
        scope: c.scope,
        requiredAuthority: c.requiredAuthority,
        constraints: [...c.constraints],
        stopConditions: [...c.stopConditions],
        requiredCapabilities: [...c.requiredCapabilities],
        reversibility: c.reversibility,
        semanticFingerprint: c.semanticFingerprint ?? "",
        supersedesExecutionContractId: c.supersedesExecutionContractId ?? null,
        supersessionReason: c.supersessionReason ?? null,
        inspectionDisclosure:
          projectExecutionContractInspectionDisclosure(c).disclosure,
      },
      cancelledWrongGenericContractId: null,
      reusedFromIdempotency: true,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
    };
  }
  const incompleteRepairable =
    classified.kind === "incomplete_repairable" ? classified.contract : null;

  const cleared = await cancelWrongGenericCurrentIfNeeded({
    oa,
    projectId: input.projectId,
    recoveryDecisionId: input.decisionId,
    forceLocalAuthority: input.forceLocalAuthority === true,
  });
  if (!cleared.ok) return cleared;

  // If prepare already exists (after cancel of wrong generic), resolve path may
  // still be pending — try get + resolve rather than rebuild.
  const existingPrepare =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepareId,
    });

  const evidenceFromSource =
    resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare:
        binding.evidenceRequirements.length > 0
          ? binding.evidenceRequirements
          : [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
      constraints: binding.constraints,
    });

  const profile = boundedDocsWriteM3ResolutionProfile();
  // Historical source artifactWriteMode is never authoritative for a retry.
  const { artifactWriteMode: _staleSourceMode, ...clonedBusinessInputs } =
    binding.inputs;
  void _staleSourceMode;
  const inputs: Record<string, unknown> = {
    ...clonedBusinessInputs,
    targetPath: binding.targetPath,
  };

  // Unresolved M3 PREPARE shape (PREPARE_ONLY) so resolveM3 can supersede —
  // same pattern as prepareM3FromDecision docs_write path.
  const prepareConstraints = Array.from(
    new Set([
      "PREPARE_ONLY",
      "NO_CURSOR_REAL",
      "NO_ATTEMPT",
      "NO_GATE_D",
      ...binding.constraints.filter(
        (c) =>
          !c.startsWith("FIXTURE_") &&
          c !== "NO_REAL" &&
          c !== "SCOPE_OUT:REAL" &&
          c !== "SCOPE_OUT:CURSOR_REAL" &&
          c !== "NO_ATTEMPT_AT_PREPARE",
      ),
    ]),
  );
  const prepareStops = Array.from(
    new Set([
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      ...binding.stopConditions,
    ]),
  );

  let prepareContract = existingPrepare.ok ? existingPrepare.contract : null;

  if (
    prepareContract &&
    (prepareContract.status === "cancelled" ||
      prepareContract.status === "superseded" ||
      prepareContract.status === "failed" ||
      prepareContract.status === "completed" ||
      prepareContract.status === "executing")
  ) {
    // Terminal / superseded prepare — only reuse via continuity/idempotent path above.
    if (prepareContract.status === "superseded") {
      // Resolve will recover existing successor.
    } else {
      prepareContract = null;
    }
  }

  if (!prepareContract) {
    const built =
      await oa.executionContractServices.buildExecutionContract.execute({
        executionContractId: prepareId,
        projectId: input.projectId,
        cycleInstanceId:
          binding.cycleInstanceId ??
          input.currentContext.activeCycleInstanceId ??
          undefined,
        decisionRefs: [input.decisionId],
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: profile.scope ?? "studio.gcec.docs_write",
        inputs,
        expectedOutputs:
          binding.expectedOutputs.length > 0
            ? [...binding.expectedOutputs]
            : undefined,
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        requiredAuthority,
        constraints: prepareConstraints,
        stopConditions: prepareStops,
        evidenceRequirements: evidenceFromSource,
        reversibility: "reversible",
        // Canonical M3 PREPARE identity — required by resolveM3ExecutionContract.
        idempotencyKey: `idem:m3-prep:${input.decisionId}`,
        correlationId: `cor:m3-rec-prep:${input.decisionId}`,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });

    if (!built.ok) {
      return {
        ok: false,
        code: built.error.detailCode,
        message: built.error.message,
      };
    }

    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    prepareContract = validated.contract;
  }

  let sha: string | null = null;
  let trustedInputs: Record<string, string> = {};
  /** RC-03 — marker only when trusted resolver succeeded with full pack. */
  let trustedLaunchPinned = false;
  // Always resolve via trusted launch when OA is present; pinned SHA is a
  // harness hint, not a bypass of repositoryBinding / managed clone identity.
  const launch = await resolveTrustedProductLaunchContext({
    oa,
    projectId: input.projectId,
    pinnedBaseHeadSha: input.boundedDocsWriteBaseHeadSha,
  });
  if (launch.ok) {
    sha = launch.context.baseHeadSha;
    trustedInputs = launchContextAsContractInputs(launch.context);
    trustedLaunchPinned = true;
  } else {
    // Fail closed — do not invent trusted marker from a bare pinned SHA.
    return {
      ok: false,
      code: launch.code,
      message: launch.message,
    };
  }
  if (!sha) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message:
        "baseHeadSha server-side invalide — fail-closed avant Confirmation / Gate D.",
    };
  }

  const sealedMode = await sealRecoveryDocsWriteArtifactWriteMode({
    oa,
    projectId: input.projectId,
    targetPath: binding.targetPath,
    repositoryBindingIdentity: launch.context.repositoryBindingIdentity,
    managedRepoRoot: launch.context.managedRepoRoot,
  });
  if (!sealedMode.ok) {
    return {
      ok: false,
      code: sealedMode.code,
      message: sealedMode.message,
    };
  }

  const sealedInputs: Record<string, unknown> = {
    ...(profile.inputs ?? {}),
    ...inputs,
    ...trustedInputs,
    baseHeadSha: sha,
    artifactWriteMode: sealedMode.artifactWriteMode,
    ...(trustedLaunchPinned
      ? { trustedLaunchContextPinnedAtPrepare: "true" }
      : {}),
  };

  // CORR-01 CLASS C — incomplete confirmed/pre-exec successor: reseal via
  // immutable supersession. Do NOT call resolveM3 (would silently reuse).
  if (incompleteRepairable) {
    return repairIncompleteRecoveryDocsWriteSuccessor({
      oa,
      projectId: input.projectId,
      decisionId: input.decisionId,
      incomplete: incompleteRepairable,
      binding,
      sealedMode: sealedMode.artifactWriteMode,
      sealedInputs,
      evidenceRequirements: evidenceFromSource,
      authorityEvidenceId: authority.evidenceId,
      cancelledWrongGenericContractId: cleared.cancelledId,
    });
  }

  const resolution = {
    ...profile,
    evidenceRequirements: evidenceFromSource,
    inputs: sealedInputs,
  };

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: prepareContract.executionContractId,
    expectedOriginalVersion: prepareContract.version,
    resolution,
    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
    deps: {
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      executionContractServices: oa.executionContractServices,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: input.forceLocalAuthority === true,
    },
  });
  if (!resolved.ok) {
    return {
      ok: false,
      code: resolved.code,
      message: resolved.message,
    };
  }

  return {
    ok: true,
    decisionId: input.decisionId,
    binding,
    prepareContractId: prepareId,
    successor: toSuccessorDto(resolved.successor),
    cancelledWrongGenericContractId: cleared.cancelledId,
    reusedFromIdempotency: resolved.reusedFromIdempotency,
    executionPerformed: false,
    attemptCreated: false,
    confirmationRequired: true,
  };
}
