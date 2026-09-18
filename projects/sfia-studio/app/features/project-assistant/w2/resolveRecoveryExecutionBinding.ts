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
import { GOVERNED_OPTION_REF } from "./trajectoryOptions";

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
}): Promise<
  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const recovered = await resolvePostEvidenceRecoveryContext({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!recovered.ok) return recovered;
  if (!recovered.context) {
    return { ok: true, binding: null };
  }
  const recovery = recovered.context;

  if (input.decisionId) {
    const loaded = await input.oa.decisionServices.getHumanDecision.execute({
      decisionId: input.decisionId,
    });
    if (!loaded.ok) {
      return {
        ok: false,
        code: loaded.error.detailCode,
        message: loaded.error.message,
      };
    }
    const decision = loaded.decision;
    if (decision.projectId !== input.projectId) {
      return {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Décision hors projet — binding recovery refusé.",
      };
    }
    if (decision.status !== "accepted") {
      return { ok: true, binding: null };
    }
    const basis = decision.decisionBasis;
    if (!basis || basis.sourceType !== "trajectory_option") {
      return { ok: true, binding: null };
    }
    if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
      // Only "nouvelle tentative gouvernée" activates docs_write successor.
      return { ok: true, binding: null };
    }
  }

  if (!input.oa.executionContractServices) {
    return { ok: true, binding: null };
  }

  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: recovery.executionContractId,
    });
  if (!loaded.ok) {
    return { ok: true, binding: null };
  }
  const contract = loaded.contract;
  if (contract.projectId !== input.projectId) {
    return { ok: true, binding: null };
  }
  if (contract.executionContractId !== recovery.executionContractId) {
    return { ok: true, binding: null };
  }
  if (contract.status !== "failed") {
    // Recovery successor clones a failed EC — other statuses are not this path.
    return { ok: true, binding: null };
  }
  if (!isBoundedDocsWriteContract(contract)) {
    return { ok: true, binding: null };
  }

  const targetPath = asNonEmptyString(contract.inputs?.targetPath);
  if (!targetPath) {
    return {
      ok: false,
      code: "DURABLE_EXECUTION_BINDING_INSUFFICIENT",
      message:
        "Failed docs_write EC sans inputs.targetPath durable — binding recovery impossible.",
    };
  }

  // Attempt ↔ EC coherence already enforced in RecoveryContext.
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
  };
}

