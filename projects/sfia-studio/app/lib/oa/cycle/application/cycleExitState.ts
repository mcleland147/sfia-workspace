/**
 * CycleExitState — dynamic exit requirement projection (D-GCEC-12/15/16).
 * Pure / application projection — NOT a persistence aggregate.
 * REPORTED ≠ VERIFIED. Only Evidence.status=verified satisfies Git/artifact exit.
 * Raw Nora proposedExitRequirementKinds are PREVIEW only — never effective.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import { evaluateFunctionalDesignArtifactCompleteness } from "@/lib/oa/evidence-review";
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import {
  deriveCycleObligationSnapshot,
  type CycleObligationSnapshot,
} from "./deriveCycleObligationSnapshot";
import {
  gitProofFamiliesFromRequirements,
  type GitCompletionProofFamily,
} from "./qualifyGitCompletionProofSet";
import type { DerivableExecutionContract } from "./deriveFinalizationApplicability";

export type CycleExitRequirementKind =
  | "artifact"
  | "validation"
  | "tests"
  | "commit"
  | "push"
  | "pull_request"
  | "ci"
  | "review"
  | "merge"
  | "post_merge_verification";

export type CycleExitRequirementStatus =
  | "REQUIRED"
  | "REPORTED"
  | "VERIFIED"
  | "FAILED"
  | "NOT_APPLICABLE"
  | "UNKNOWN";

export type CycleExitRequirement = {
  kind: CycleExitRequirementKind;
  status: CycleExitRequirementStatus;
  evidenceId?: string;
  source?: string;
  blocker?: string;
  /** When true, this row is PREVIEW from Nora and must not drive finalization. */
  preview?: boolean;
};

export type CycleExitState = {
  cycleInstanceId: string;
  projectId: string;
  requirements: CycleExitRequirement[];
  /** PREVIEW-only Nora proposals — never contribute to allRequiredVerified. */
  proposedPreview?: CycleExitRequirement[];
  allRequiredVerified: boolean;
  blockers: string[];
};

const GIT_KIND_TO_FAMILY: Record<
  Exclude<
    CycleExitRequirementKind,
    "artifact" | "validation" | "tests"
  >,
  GitCompletionProofFamily
> = {
  commit: "git:local_commit",
  push: "git:remote_push",
  pull_request: "git:pull_request",
  ci: "git:ci_status",
  review: "git:review_status",
  merge: "git:merge",
  post_merge_verification: "git:post_merge_verification",
};

function parseLocationQuery(location: string): Record<string, string> {
  const qIndex = location.indexOf("?");
  if (qIndex < 0) return {};
  const query = location.slice(qIndex + 1);
  const out: Record<string, string> = {};
  for (const part of query.split("&")) {
    if (!part) continue;
    const eq = part.indexOf("=");
    if (eq < 0) {
      out[decodeURIComponent(part)] = "";
      continue;
    }
    out[decodeURIComponent(part.slice(0, eq))] = decodeURIComponent(
      part.slice(eq + 1),
    );
  }
  return out;
}

function evidenceForFamily(
  evidence: readonly Evidence[],
  family: GitCompletionProofFamily,
  cycleInstanceId: string,
): Evidence[] {
  return evidence.filter(
    (e) =>
      e.source === family &&
      (!e.bindings?.cycleInstanceId ||
        e.bindings.cycleInstanceId === cycleInstanceId),
  );
}

function statusFromEvidence(
  rows: readonly Evidence[],
): CycleExitRequirementStatus {
  // CR-GCEC-17 — technicalResultRef never implies VERIFIED.
  if (rows.some((e) => e.status === "verified")) {
    return "VERIFIED";
  }
  if (rows.some((e) => e.status === "rejected" || e.status === "incomplete")) {
    return "FAILED";
  }
  if (rows.some((e) => e.status === "available")) return "REPORTED";
  return "REQUIRED";
}

export type DeriveCycleExitStateInput = {
  projectId: string;
  cycleInstanceId: string;
  cycleTypeId?: string;
  repositoryBinding?: ProjectRepositoryBinding | null;
  obligationSnapshot?: CycleObligationSnapshot | null;
  executionContracts: readonly DerivableExecutionContract[];
  evidence: readonly Evidence[];
  /**
   * @deprecated PREVIEW only — never effective for FinalizationAssessment.
   * Prefer omitting; when provided, surfaced as proposedPreview only.
   */
  proposedExitRequirementKinds?: readonly string[];
};

/**
 * Materialize dynamic CycleExitState from durable Product facts + EC requirements.
 * No universal artifact→commit→push→PR→merge rule.
 * CR-GCEC-16: Nora proposal kinds do not become effective requirements.
 */
export function deriveCycleExitState(
  input: DeriveCycleExitStateInput,
): CycleExitState {
  const contracts = input.executionContracts.filter(
    (c) => !c.cycleInstanceId || c.cycleInstanceId === input.cycleInstanceId,
  );
  const evidence = input.evidence.filter(
    (e) =>
      !e.bindings?.cycleInstanceId ||
      e.bindings.cycleInstanceId === input.cycleInstanceId,
  );

  const snapshot =
    input.obligationSnapshot ??
    (input.cycleTypeId
      ? deriveCycleObligationSnapshot({
          projectId: input.projectId,
          cycleTypeId: input.cycleTypeId,
          cycleInstanceId: input.cycleInstanceId,
          repositoryBinding: input.repositoryBinding,
        })
      : null);

  const requirements: CycleExitRequirement[] = [];

  // Artifact — effective from snapshot MUST or EC expectedOutputs only
  const artifactMust =
    snapshot?.mustFamilies.includes("artifact") === true ||
    contracts.some((c) =>
      (c.expectedOutputs ?? []).some((o) => /artifact/i.test(o)),
    );

  if (artifactMust) {
    const artifacts = evidence.filter((e) => e.type === "artifact");
    const complete = artifacts.find(
      (e) => evaluateFunctionalDesignArtifactCompleteness(e).ok,
    );
    let status: CycleExitRequirementStatus = "REQUIRED";
    if (complete?.status === "verified") {
      status = "VERIFIED";
    } else if (complete?.status === "available") {
      // CR-GCEC-17 — AVAILABLE + bindings = REPORTED, never auto-VERIFIED
      status = "REPORTED";
    } else if (artifacts.length > 0) {
      status = "FAILED";
    }
    requirements.push({
      kind: "artifact",
      status,
      evidenceId: complete?.evidenceId,
      source: complete?.source,
      ...(status === "REQUIRED" || status === "FAILED" || status === "REPORTED"
        ? {
            blocker:
              status === "FAILED"
                ? "artifact_incomplete"
                : status === "REPORTED"
                  ? "artifact_reported_not_verified"
                  : "artifact_missing",
          }
        : {}),
    });
  } else {
    requirements.push({ kind: "artifact", status: "NOT_APPLICABLE" });
  }

  const wantsValidation = contracts.some((c) =>
    (c.evidenceRequirements ?? []).some((r) => /validation|tests?/i.test(r)),
  );
  if (wantsValidation) {
    const valEv = evidence.filter(
      (e) =>
        typeof e.source === "string" && /validation|test/i.test(e.source),
    );
    requirements.push({
      kind: "validation",
      status: statusFromEvidence(valEv),
      evidenceId: valEv[0]?.evidenceId,
    });
  } else {
    requirements.push({ kind: "validation", status: "NOT_APPLICABLE" });
  }

  const gitMust = snapshot?.mustFamilies.includes("git_repository") === true;
  const fromEc = gitProofFamiliesFromRequirements(
    contracts.flatMap((c) => c.evidenceRequirements ?? []),
  );

  // Fail-closed: git MUST but no specific families on EC → UNKNOWN, not full chain
  let families: GitCompletionProofFamily[] = [];
  let gitUnresolved = false;
  if (gitMust) {
    if (fromEc.length === 0) {
      gitUnresolved = true;
    } else {
      families = fromEc;
    }
  } else {
    families = fromEc;
  }

  const allGitKinds = [
    "commit",
    "push",
    "pull_request",
    "ci",
    "review",
    "merge",
    "post_merge_verification",
  ] as const;

  for (const kind of allGitKinds) {
    const family = GIT_KIND_TO_FAMILY[kind];
    if (gitUnresolved) {
      requirements.push({
        kind,
        status: "UNKNOWN",
        blocker: "git_requirements_unresolved",
      });
      continue;
    }
    if (!families.includes(family)) {
      requirements.push({ kind, status: "NOT_APPLICABLE" });
      continue;
    }
    const rows = evidenceForFamily(evidence, family, input.cycleInstanceId);
    const status = statusFromEvidence(rows);
    const q = rows[0]?.location ? parseLocationQuery(rows[0].location) : {};
    requirements.push({
      kind,
      status: status === "REQUIRED" ? "REQUIRED" : status,
      evidenceId:
        rows.find((r) => r.status === "verified")?.evidenceId ??
        rows[0]?.evidenceId,
      source: family,
      ...(status === "REQUIRED"
        ? { blocker: `${kind}_missing` }
        : status === "REPORTED"
          ? { blocker: `${kind}_reported_not_verified` }
          : status === "FAILED"
            ? { blocker: `${kind}_failed` }
            : {}),
      ...(q.conclusion === "failure" || q.state === "pending"
        ? { blocker: `${kind}_policy_not_met` }
        : {}),
    });
  }

  for (const req of requirements) {
    if (req.kind === "ci" && req.status === "REPORTED") {
      const rows = evidenceForFamily(
        evidence,
        "git:ci_status",
        input.cycleInstanceId,
      );
      const q = rows[0]?.location ? parseLocationQuery(rows[0].location) : {};
      if (q.conclusion && q.conclusion !== "success") {
        req.status = "FAILED";
        req.blocker = "ci_not_success";
      }
    }
    if (req.kind === "review" && req.status === "REPORTED") {
      const rows = evidenceForFamily(
        evidence,
        "git:review_status",
        input.cycleInstanceId,
      );
      const q = rows[0]?.location ? parseLocationQuery(rows[0].location) : {};
      if (q.state && q.state !== "approved") {
        req.status = "FAILED";
        req.blocker = "review_not_approved";
      }
    }
  }

  // PREVIEW only — never effective
  const proposedPreview: CycleExitRequirement[] = (
    input.proposedExitRequirementKinds ?? []
  ).map((k) => ({
    kind: (k as CycleExitRequirementKind) || "artifact",
    status: "REQUIRED" as const,
    preview: true,
    source: "nora_proposal_preview",
    blocker: "preview_non_authoritative",
  }));

  const blockers = requirements
    .filter(
      (r) =>
        r.status === "REQUIRED" ||
        r.status === "REPORTED" ||
        r.status === "FAILED" ||
        r.status === "UNKNOWN",
    )
    .map((r) => r.blocker ?? `${r.kind}:${r.status}`);

  const allRequiredVerified = requirements.every(
    (r) => r.status === "VERIFIED" || r.status === "NOT_APPLICABLE",
  );

  return {
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
    requirements,
    ...(proposedPreview.length > 0 ? { proposedPreview } : {}),
    allRequiredVerified,
    blockers,
  };
}

export function cycleExitGitFamiliesRequired(
  state: CycleExitState,
): GitCompletionProofFamily[] {
  const out: GitCompletionProofFamily[] = [];
  for (const r of state.requirements) {
    if (r.status === "NOT_APPLICABLE" || r.preview) continue;
    if (
      r.kind === "artifact" ||
      r.kind === "validation" ||
      r.kind === "tests"
    ) {
      continue;
    }
    const family = GIT_KIND_TO_FAMILY[r.kind];
    if (family) out.push(family);
  }
  return out;
}

/** Map exit kinds for UI / Nora context. */
export function summarizeCycleExitState(state: CycleExitState): string {
  return state.requirements
    .map((r) => `${r.kind}=${r.status}`)
    .join("; ");
}
