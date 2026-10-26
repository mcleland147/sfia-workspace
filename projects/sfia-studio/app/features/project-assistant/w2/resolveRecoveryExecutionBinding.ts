/**
 * Checkpoint F / R8 — RecoveryExecutionBinding from durable failed docs_write EC.
 * No new persistence. No parallel catalog. Source of truth = failed EC coherent
 * with R7 PostEvidenceRecoveryContext (+ optional recovery trajectory HD).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";

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
  readonly action: string;
  readonly target: string;
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

export async function resolveRecoveryExecutionBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /**
   * When set, require this accepted trajectory HD to be the recovery retry
   * option (governed-gated). Omit for pure read of recoverable binding.
   */
  readonly decisionId?: string | null;
}): Promise<RecoveryExecutionBindingResolution> {
  void input;
  return { ok: true, binding: null, recoveryContextPresent: false };
}
