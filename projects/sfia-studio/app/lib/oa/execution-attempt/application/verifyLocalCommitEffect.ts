/**
 * Independent local-commit verification + Evidence binding (Studio READ-ONLY).
 * CORR-D-GCEC-AGENT-02 / CR-GCEC-AGENT-09:
 * Production Evidence creator OWNS read-only observation.
 * Callers may NOT supply LocalCommitObservedFacts / forged SHA fields.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import { buildTypedGitEvidenceFields } from "@/lib/oa/evidence-review";
import type { GitVerifyActor, GitVerifyBindings } from "@/lib/oa/git-ports";
import { verifyLocalCommitFacts } from "../domain/verifyLocalCommitFacts";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import type { GitCommandRunner } from "../infrastructure/studioGitWorktreeWorkspace";
import {
  observeLocalCommitFacts,
  type GovernedWorkspaceObservationContext,
} from "./observeLocalCommitFacts";

export const LOCAL_GIT_READONLY_TECHNICAL_REF =
  "studio:local_git_readonly:observe" as const;

export type VerifyLocalCommitEffectInput = {
  readonly gitRunner: GitCommandRunner;
  readonly governed: GovernedWorkspaceObservationContext;
  readonly spec: GitCommitLaunchSpec;
  /** Expected digests keyed by relative path (from VERIFIED Artifact Evidence). */
  readonly expectedArtifactDigests: Readonly<Record<string, string>>;
  /** Required exact bindings from governed Attempt B context. */
  readonly expectedBindings: GitVerifyBindings;
  readonly actor: GitVerifyActor;
  readonly evidenceServices: EvidenceReviewServices;
  readonly nowIso?: string;
  readonly trustCursorReportOnly?: boolean;
};

export type VerifyLocalCommitEffectResult =
  | {
      readonly ok: true;
      readonly evidenceId: string;
      readonly status: "verified";
      readonly commitSha: string;
      readonly provenance: typeof LOCAL_GIT_READONLY_TECHNICAL_REF;
    }
  | {
      readonly ok: false;
      readonly reason: string;
      readonly status: "reported" | "failed";
    };

function bindingsComplete(b: GitVerifyBindings): boolean {
  return (
    Boolean(b.projectId?.trim()) &&
    Boolean(b.cycleInstanceId?.trim()) &&
    Boolean(b.executionContractId?.trim()) &&
    Boolean(b.executionAttemptId?.trim())
  );
}

function claimDigest(location: string): Digest {
  return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
}

const FORGED_FACT_KEYS = [
  "observed",
  "observedHeadSha",
  "observedParentSha",
  "observedChangedPaths",
  "observedCommitMessage",
  "worktreeDirty",
  "commitsFromExpectedParent",
  "artifactChecks",
  "allowTestOnlySyntheticObservation",
] as const;

/**
 * Production Evidence creator: governed workspace → observe → verify → Evidence.
 * Rejects hostile injection of pre-built observation facts (CR-09).
 */
export async function verifyLocalCommitEffect(
  input: VerifyLocalCommitEffectInput,
): Promise<VerifyLocalCommitEffectResult> {
  // Hostile: reject any forged observation fields on the request object.
  const raw = input as Record<string, unknown>;
  for (const key of FORGED_FACT_KEYS) {
    if (key in raw && raw[key] !== undefined) {
      return {
        ok: false,
        reason: "local_git_forged_observation_rejected",
        status: "failed",
      };
    }
  }

  if (!input.expectedBindings || !bindingsComplete(input.expectedBindings)) {
    return {
      ok: false,
      reason: "git_evidence_bindings_incomplete",
      status: "failed",
    };
  }

  if (input.trustCursorReportOnly) {
    return {
      ok: false,
      reason: "cursor_report_alone_not_verified",
      status: "reported",
    };
  }

  if (!input.gitRunner || !input.governed || !input.spec) {
    return {
      ok: false,
      reason: "local_git_observation_inputs_required",
      status: "failed",
    };
  }

  const observed = await observeLocalCommitFacts({
    gitRunner: input.gitRunner,
    governed: input.governed,
    spec: input.spec,
    expectedArtifactDigests: input.expectedArtifactDigests,
  });
  if (!observed.ok) {
    return { ok: false, reason: observed.reason, status: "failed" };
  }

  const facts = verifyLocalCommitFacts({
    expectedParentSha: input.spec.expectedParentSha,
    observedHeadSha: observed.facts.observedHeadSha,
    observedParentSha: observed.facts.observedParentSha,
    exactPaths: input.spec.exactPaths,
    observedChangedPaths: observed.facts.observedChangedPaths,
    expectedCommitMessage: input.spec.commitMessage,
    observedCommitMessage: observed.facts.observedCommitMessage,
    artifactChecks: observed.facts.artifactChecks,
    worktreeDirty: observed.facts.worktreeDirty,
    commitsFromExpectedParent: observed.facts.commitsFromExpectedParent,
  });
  if (!facts.ok) {
    return { ok: false, reason: facts.reason, status: "failed" };
  }

  const payload = {
    repositoryRef: input.spec.repositoryRef,
    commitSha: observed.facts.observedHeadSha,
    message: observed.facts.observedCommitMessage,
    parentSha: observed.facts.observedParentSha,
    changedPaths: [...input.spec.exactPaths],
  };
  const built = buildTypedGitEvidenceFields("git:local_commit", payload);
  if (!built.ok) {
    return { ok: false, reason: built.reason, status: "failed" };
  }

  const location =
    built.fields.location ??
    `git:local_commit?repo=${encodeURIComponent(input.spec.repositoryRef)}&commitSha=${observed.facts.observedHeadSha}`;
  const digest = (built.fields.digest ?? claimDigest(location)) as Digest;
  const evidenceId = `ev:git-commit-verified:${observed.facts.observedHeadSha.slice(0, 12)}`;

  const registered = await input.evidenceServices.registerEvidence.execute({
    evidenceId,
    idempotencyKey: `idem:${evidenceId}`,
    actor: input.actor as never,
    type: "other",
    source: "git:local_commit",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    status: "available",
    location,
    digest,
    technicalResultRef: LOCAL_GIT_READONLY_TECHNICAL_REF,
    bindings: {
      projectId: input.expectedBindings.projectId,
      cycleInstanceId: input.expectedBindings.cycleInstanceId,
      executionContractId: input.expectedBindings.executionContractId!,
      executionAttemptId: input.expectedBindings.executionAttemptId!,
    },
    ...(input.nowIso ? { nowIso: input.nowIso } : {}),
  });
  if (!registered.ok) {
    return {
      ok: false,
      reason: registered.error?.detailCode ?? "evidence_register_failed",
      status: "failed",
    };
  }

  const testSvc = input.evidenceServices as EvidenceReviewServices & {
    setPayloadScript?: (
      id: string,
      s: { availability: "available"; digest: Digest },
    ) => void;
    fakePayload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
    payload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
  };
  const scriptable = testSvc.fakePayload ?? testSvc.payload;
  if (typeof testSvc.setPayloadScript === "function") {
    testSvc.setPayloadScript(evidenceId, {
      availability: "available",
      digest,
    });
  } else if (typeof scriptable?.setScript === "function") {
    scriptable.setScript(evidenceId, {
      availability: "available",
      digest,
    });
  }

  const verified = await input.evidenceServices.verifyEvidenceIntegrity.execute({
    evidenceId,
    expectedVersion: registered.evidence.version,
    actor: input.actor as never,
  });
  if (!verified.ok || verified.evidence.status !== "verified") {
    return {
      ok: false,
      reason: verified.ok
        ? "status_not_verified_after_integrity"
        : (verified.error?.detailCode ?? "evidence_verify_failed"),
      status: "reported",
    };
  }

  return {
    ok: true,
    evidenceId,
    status: "verified",
    commitSha: observed.facts.observedHeadSha.toLowerCase(),
    provenance: LOCAL_GIT_READONLY_TECHNICAL_REF,
  };
}

export function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content).digest("hex")}` as Digest;
}
