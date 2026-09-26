/**
 * Checkpoint F / R8 — RecoveryExecutionBinding from durable failed docs_write EC.
 * No new persistence. No parallel catalog. Source of truth = failed EC coherent
 * with R7 PostEvidenceRecoveryContext (+ optional recovery trajectory HD).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import {
  resolvePostEvidenceRecoveryContext,
  type PostEvidenceRecoveryContext,
} from "./resolvePostEvidenceRecoveryContext";
import { isConfirmedPreStartRejectionRecoverySource } from "./isConfirmedPreStartRejectionRecoverySource";
import { GOVERNED_OPTION_REF } from "./trajectoryOptions";

export type RecoveryExecutionBindingResolution =
  | {
      readonly ok: true;
      readonly binding: RecoveryExecutionBinding | null;
      /** True when a coherent post-Evidence recovery subject exists. */
      readonly recoveryContextPresent: boolean;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly recoveryContextPresent: boolean;
    };

export type RecoveryExecutionBinding = {
  readonly kind: "post_evidence_recovery_execution";
  readonly recovery: PostEvidenceRecoveryContext;
  readonly sourceExecutionContractId: string;
  readonly sourceAttemptId: string;
  readonly action: typeof M4_BOUNDED_DOCS_WRITE_ACTION;
  readonly target: typeof M4_BOUNDED_DOCS_WRITE_TARGET;
  readonly targetPath: string;
  readonly scope: string;
  readonly requiredCapabilities: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly inputs: Readonly<Record<string, unknown>>;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly sourceSemanticFingerprint: string | null;
  readonly sourceStatus: string;
};

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
  if (contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
  if (contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
  if (!contract.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)) {
    return false;
  }
  return true;
}

/**
 * Clone durable inputs for a fresh successor — drop stale authority / OCC /
 * confirmation / attempt bindings; keep business path + content requirements.
 */
export function cloneDocsWriteInputsForRecoverySuccessor(
  inputs: Record<string, unknown> | undefined,
): Record<string, unknown> {
  const src = inputs ?? {};
  const out: Record<string, unknown> = {};
  const keepKeys = [
    "targetPath",
    "targetRepositoryRef",
    "repositoryRef",
    "pathAllowlist",
    "scopeIn",
    "scopeOut",
    "createOrModify",
    "noDelete",
    "artifactType",
    "artifactBrief",
    "contentRequirements",
    "validationExpectations",
    "evidenceRequirements",
    "expectedOutputs",
    "repositoryIdentity",
    "repositoryBindingIdentity",
    "remoteUrl",
    "defaultBranch",
    "workingBranch",
    "pathRoot",
    "objective",
    "recommendedProfile",
    "cycleTypeId",
    "activatedBlocks",
  ] as const;
  for (const key of keepKeys) {
    if (key in src && src[key] !== undefined) {
      out[key] = structuredClone(src[key]);
    }
  }
  return out;
}

export async function resolveRecoveryExecutionBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /**
   * When set, require this accepted trajectory HD to be the recovery retry
   * option (governed-gated). Omit for pure read of recoverable binding.
   */
  readonly decisionId?: string | null;
}): Promise<RecoveryExecutionBindingResolution> {
  const recovered = await resolvePostEvidenceRecoveryContext({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!recovered.ok) {
    return {
      ok: false,
      code: recovered.code,
      message: recovered.message,
      recoveryContextPresent: false,
    };
  }
  if (!recovered.context) {
    return { ok: true, binding: null, recoveryContextPresent: false };
  }
  const recovery = recovered.context;
  const present = true as const;

  if (input.decisionId) {
    const loaded = await input.oa.decisionServices.getHumanDecision.execute({
      decisionId: input.decisionId,
    });
    if (!loaded.ok) {
      return {
        ok: false,
        code: loaded.error.detailCode,
        message: loaded.error.message,
        recoveryContextPresent: present,
      };
    }
    const decision = loaded.decision;
    if (decision.projectId !== input.projectId) {
      return {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Décision hors projet — binding recovery refusé.",
        recoveryContextPresent: present,
      };
    }
    if (decision.status !== "accepted") {
      return { ok: true, binding: null, recoveryContextPresent: present };
    }
    const basis = decision.decisionBasis;
    if (!basis || basis.sourceType !== "trajectory_option") {
      return { ok: true, binding: null, recoveryContextPresent: present };
    }
    if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
      // Only "nouvelle tentative gouvernée" activates docs_write successor.
      return { ok: true, binding: null, recoveryContextPresent: present };
    }
  }

  if (!input.oa.executionContractServices) {
    return { ok: true, binding: null, recoveryContextPresent: present };
  }

  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: recovery.executionContractId,
    });
  if (!loaded.ok) {
    return { ok: true, binding: null, recoveryContextPresent: present };
  }
  const contract = loaded.contract;
  if (contract.projectId !== input.projectId) {
    return { ok: true, binding: null, recoveryContextPresent: present };
  }
  if (contract.executionContractId !== recovery.executionContractId) {
    return { ok: true, binding: null, recoveryContextPresent: present };
  }

  // CLASS 1: failed EC (legacy). CLASS 2: confirmed EC + pre-start rejection.
  if (contract.status === "failed") {
    // existing path
  } else if (contract.status === "confirmed") {
    if (!input.oa.executionAttemptServices) {
      return { ok: true, binding: null, recoveryContextPresent: present };
    }
    const attemptLoaded =
      await input.oa.executionAttemptServices.getExecutionAttempt.execute({
        attemptId: recovery.attemptId,
      });
    if (!attemptLoaded.ok) {
      return { ok: true, binding: null, recoveryContextPresent: present };
    }
    if (
      !isConfirmedPreStartRejectionRecoverySource({
        contract,
        attempt: attemptLoaded.attempt,
      })
    ) {
      return { ok: true, binding: null, recoveryContextPresent: present };
    }
  } else {
    // completed / cancelled / superseded / executing — not a recovery source.
    return { ok: true, binding: null, recoveryContextPresent: present };
  }

  if (!isBoundedDocsWriteContract(contract)) {
    return { ok: true, binding: null, recoveryContextPresent: present };
  }

  const targetPath = asNonEmptyString(contract.inputs?.targetPath);
  if (!targetPath) {
    return {
      ok: false,
      code: "DURABLE_EXECUTION_BINDING_INSUFFICIENT",
      message:
        "docs_write EC recovery sans inputs.targetPath durable — binding recovery impossible.",
      recoveryContextPresent: present,
    };
  }

  // Attempt ↔ EC coherence already enforced in RecoveryContext (+ CLASS 2 helper).
  const evidenceRequirements = [...(contract.evidenceRequirements ?? [])];
  const constraints = [...(contract.constraints ?? [])];

  return {
    ok: true,
    binding: {
      kind: "post_evidence_recovery_execution",
      recovery,
      sourceExecutionContractId: contract.executionContractId,
      sourceAttemptId: recovery.attemptId,
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      targetPath,
      scope: contract.scope,
      requiredCapabilities: [...contract.requiredCapabilities],
      evidenceRequirements,
      constraints,
      stopConditions: [...(contract.stopConditions ?? [])],
      expectedOutputs: [...(contract.expectedOutputs ?? [])],
      inputs: cloneDocsWriteInputsForRecoverySuccessor(contract.inputs),
      projectId: contract.projectId,
      cycleInstanceId: contract.cycleInstanceId ?? null,
      sourceSemanticFingerprint: contract.semanticFingerprint ?? null,
      sourceStatus: contract.status,
    },
    recoveryContextPresent: present,
  };
}
