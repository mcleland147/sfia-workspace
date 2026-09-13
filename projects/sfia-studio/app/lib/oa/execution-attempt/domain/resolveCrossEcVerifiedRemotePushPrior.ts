/**
 * GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01
 *
 * Explicit ExecutionContract.inputs.verifiedRemotePushPrior binding so a
 * D-only github.pr.create EC can consume durable VERIFIED git:remote_push
 * Evidence from a distinct source EC — without Attempt-row durability
 * dependency and without project-wide Evidence auto-discovery.
 *
 * Same-EC legacy path remains resolveVerifiedRemotePushPriorAttempt.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  parseRemotePushFromEvidenceLocation,
  resolveVerifiedRemotePushPriorAttempt,
  type VerifiedRemotePushPriorAttempt,
} from "./resolveVerifiedRemotePushPriorAttempt";
import { M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID } from "./realLaunchSafety";

export const VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY = "verifiedRemotePushPrior";

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export type VerifiedRemotePushPriorBinding = {
  readonly sourceExecutionContractId: string;
  readonly sourceExecutionAttemptId: string;
  readonly evidenceId: string;
  readonly repositoryRef: string;
  readonly branchName: string;
  readonly commitSha: string;
};

export type ParseVerifiedRemotePushPriorBindingResult =
  | { readonly present: false }
  | {
      readonly present: true;
      readonly ok: true;
      readonly binding: VerifiedRemotePushPriorBinding;
    }
  | {
      readonly present: true;
      readonly ok: false;
      readonly reason: "cross_ec_remote_push_binding_invalid";
    };

export type CrossEcVerifiedRemotePushPriorFailureReason =
  | "cross_ec_remote_push_binding_invalid"
  | "cross_ec_remote_push_evidence_not_found"
  | "cross_ec_remote_push_evidence_ambiguous"
  | "cross_ec_remote_push_evidence_unverified"
  | "cross_ec_remote_push_evidence_source_mismatch"
  | "cross_ec_remote_push_lineage_mismatch"
  | "cross_ec_remote_push_repo_mismatch"
  | "cross_ec_remote_push_branch_mismatch"
  | "cross_ec_remote_push_sha_mismatch"
  | "cross_ec_remote_push_location_incomplete"
  | "cross_ec_remote_push_attempt_inconsistent";

export type ResolveCrossEcVerifiedRemotePushPriorInput = {
  readonly contract: Pick<
    ExecutionContract,
    "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
  >;
  readonly binding: VerifiedRemotePushPriorBinding;
  readonly evidence: readonly Evidence[];
  /** Optional — absence of source Attempt is OK when Evidence is exact+verified. */
  readonly attempts?: readonly ExecutionAttempt[];
};

export type ResolveCrossEcVerifiedRemotePushPriorResult =
  | {
      readonly ok: true;
      readonly prior: VerifiedRemotePushPriorAttempt;
      readonly binding: VerifiedRemotePushPriorBinding;
    }
  | {
      readonly ok: false;
      readonly reason: CrossEcVerifiedRemotePushPriorFailureReason;
    };

export type ResolveVerifiedRemotePushPriorForPrCreateInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  readonly excludeAttemptId?: string;
  readonly repositoryRef?: string;
};

export type ResolveVerifiedRemotePushPriorForPrCreateResult =
  | {
      readonly ok: true;
      readonly mode: "cross_ec" | "same_ec";
      readonly prior: VerifiedRemotePushPriorAttempt;
    }
  | {
      readonly ok: false;
      readonly mode: "cross_ec" | "same_ec";
      readonly reason: string;
    };

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

/**
 * Parse frozen ExecutionContract.inputs.verifiedRemotePushPrior.
 * Absent key → present:false (legacy same-EC). Malformed → fail closed.
 */
export function parseVerifiedRemotePushPriorBinding(
  inputs: unknown,
): ParseVerifiedRemotePushPriorBindingResult {
  if (inputs == null || typeof inputs !== "object" || Array.isArray(inputs)) {
    return { present: false };
  }
  const raw = (inputs as Record<string, unknown>)[
    VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY
  ];
  if (raw === undefined) {
    return { present: false };
  }
  if (raw == null || typeof raw !== "object" || Array.isArray(raw)) {
    return { present: true, ok: false, reason: "cross_ec_remote_push_binding_invalid" };
  }
  const obj = raw as Record<string, unknown>;
  const sourceExecutionContractId = asNonEmptyString(
    obj.sourceExecutionContractId,
  );
  const sourceExecutionAttemptId = asNonEmptyString(
    obj.sourceExecutionAttemptId,
  );
  const evidenceId = asNonEmptyString(obj.evidenceId);
  const repositoryRef = asNonEmptyString(obj.repositoryRef);
  const branchName = asNonEmptyString(obj.branchName);
  const commitShaRaw = asNonEmptyString(obj.commitSha);
  if (
    !sourceExecutionContractId ||
    !sourceExecutionAttemptId ||
    !evidenceId ||
    !repositoryRef ||
    !branchName ||
    !commitShaRaw
  ) {
    return { present: true, ok: false, reason: "cross_ec_remote_push_binding_invalid" };
  }
  const commitSha = commitShaRaw.toLowerCase();
  if (!FULL_SHA_RE.test(commitSha)) {
    return { present: true, ok: false, reason: "cross_ec_remote_push_binding_invalid" };
  }
  return {
    present: true,
    ok: true,
    binding: {
      sourceExecutionContractId,
      sourceExecutionAttemptId,
      evidenceId,
      repositoryRef,
      branchName,
      commitSha,
    },
  };
}

/**
 * Evidence-centric cross-EC prior resolution.
 * Exact evidenceId only — no project-wide auto-discovery.
 * Source Attempt row absence does not invalidate a valid VERIFIED Evidence.
 */
export function resolveCrossEcVerifiedRemotePushPrior(
  input: ResolveCrossEcVerifiedRemotePushPriorInput,
): ResolveCrossEcVerifiedRemotePushPriorResult {
  const { binding, evidence, contract } = input;
  const matches = evidence.filter((ev) => ev.evidenceId === binding.evidenceId);
  if (matches.length === 0) {
    return { ok: false, reason: "cross_ec_remote_push_evidence_not_found" };
  }
  if (matches.length > 1) {
    return { ok: false, reason: "cross_ec_remote_push_evidence_ambiguous" };
  }
  const ev = matches[0]!;

  if (ev.status !== "verified") {
    return { ok: false, reason: "cross_ec_remote_push_evidence_unverified" };
  }
  if (ev.source !== "git:remote_push") {
    return { ok: false, reason: "cross_ec_remote_push_evidence_source_mismatch" };
  }

  const b = ev.bindings;
  if (!b?.projectId || b.projectId !== contract.projectId) {
    return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
  }
  if (
    !b.executionContractId ||
    b.executionContractId !== binding.sourceExecutionContractId
  ) {
    return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
  }
  if (
    !b.executionAttemptId ||
    b.executionAttemptId !== binding.sourceExecutionAttemptId
  ) {
    return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
  }
  if (contract.cycleInstanceId) {
    if (
      !b.cycleInstanceId ||
      b.cycleInstanceId !== contract.cycleInstanceId
    ) {
      return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
    }
  }

  const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
  if (
    !parsed ||
    !parsed.repositoryRef?.trim() ||
    !parsed.branchName?.trim() ||
    !FULL_SHA_RE.test(parsed.commitSha)
  ) {
    return { ok: false, reason: "cross_ec_remote_push_location_incomplete" };
  }
  if (parsed.repositoryRef.trim() !== binding.repositoryRef) {
    return { ok: false, reason: "cross_ec_remote_push_repo_mismatch" };
  }
  if (parsed.branchName.trim() !== binding.branchName) {
    return { ok: false, reason: "cross_ec_remote_push_branch_mismatch" };
  }
  if (parsed.commitSha.toLowerCase() !== binding.commitSha.toLowerCase()) {
    return { ok: false, reason: "cross_ec_remote_push_sha_mismatch" };
  }

  // Optional integrity when source Attempt row is present in the repo view.
  const attempts = input.attempts ?? [];
  const sourceAttempt = attempts.find(
    (a) => a.attemptId === binding.sourceExecutionAttemptId,
  );
  if (sourceAttempt) {
    if (
      sourceAttempt.executionContractId !== binding.sourceExecutionContractId ||
      sourceAttempt.status !== "succeeded" ||
      sourceAttempt.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID
    ) {
      return { ok: false, reason: "cross_ec_remote_push_attempt_inconsistent" };
    }
  }

  return {
    ok: true,
    binding,
    prior: {
      priorAttemptId: binding.sourceExecutionAttemptId,
      evidenceId: ev.evidenceId,
      commitSha: parsed.commitSha.toLowerCase(),
      repositoryRef: parsed.repositoryRef.trim(),
      branchName: parsed.branchName.trim(),
    },
  };
}

/**
 * Thin chooser: explicit binding → cross-EC Evidence path; else same-EC Attempt path.
 * Malformed binding never falls through to same-EC.
 */
export function resolveVerifiedRemotePushPriorForPrCreate(
  input: ResolveVerifiedRemotePushPriorForPrCreateInput,
): ResolveVerifiedRemotePushPriorForPrCreateResult {
  const parsed = parseVerifiedRemotePushPriorBinding(input.contract.inputs);
  if (parsed.present) {
    if (!parsed.ok) {
      return {
        ok: false,
        mode: "cross_ec",
        reason: parsed.reason,
      };
    }
    const cross = resolveCrossEcVerifiedRemotePushPrior({
      contract: input.contract,
      binding: parsed.binding,
      evidence: input.evidence,
      attempts: input.attempts,
    });
    if (!cross.ok) {
      return { ok: false, mode: "cross_ec", reason: cross.reason };
    }
    return { ok: true, mode: "cross_ec", prior: cross.prior };
  }

  const same = resolveVerifiedRemotePushPriorAttempt({
    contract: input.contract,
    attempts: input.attempts,
    evidence: input.evidence,
    excludeAttemptId: input.excludeAttemptId,
    repositoryRef: input.repositoryRef,
  });
  if (!same.ok) {
    return { ok: false, mode: "same_ec", reason: same.reason };
  }
  return { ok: true, mode: "same_ec", prior: same.prior };
}
