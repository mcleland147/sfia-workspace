/**
 * CycleExitState — dynamic exit requirement projection (D-GCEC-12).
 * Pure / application projection — NOT a persistence aggregate.
 * REPORTED ≠ VERIFIED. Only VERIFIED satisfies Git-backed exit conditions.
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
};

export type CycleExitState = {
  cycleInstanceId: string;
  projectId: string;
  requirements: CycleExitRequirement[];
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
  if (
    rows.some(
      (e) =>
        e.status === "verified" ||
        (typeof e.technicalResultRef === "string" &&
          e.technicalResultRef.startsWith("studio:repository_read_verified:")),
    )
  ) {
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
  /** Nora / DecisionBasis proposed exit kinds (non-authoritative). */
  proposedExitRequirementKinds?: readonly string[];
};

/**
 * Materialize dynamic CycleExitState from durable Product facts + EC requirements.
 * No universal artifact→commit→push→PR→merge rule.
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

  // Artifact
  const artifactMust =
    snapshot?.mustFamilies.includes("artifact") === true ||
    contracts.some((c) =>
      (c.expectedOutputs ?? []).some((o) => /artifact/i.test(o)),
    ) ||
    (input.proposedExitRequirementKinds ?? []).includes("artifact");

  if (artifactMust) {
    const artifacts = evidence.filter((e) => e.type === "artifact");
    const complete = artifacts.find(
      (e) => evaluateFunctionalDesignArtifactCompleteness(e).ok,
    );
    let status: CycleExitRequirementStatus = "REQUIRED";
    if (complete?.status === "verified") {
      status = "VERIFIED";
    } else if (complete?.status === "available") {
      status = "REPORTED";
      // First vertical: completeness + available with strong bindings → VERIFIED
      // for artifact exit when evaluateGcecArtifactEvidence would accept.
      if (
        complete.digest &&
        complete.bindings?.projectId &&
        complete.bindings?.cycleInstanceId &&
        complete.bindings?.executionContractId &&
        complete.bindings?.executionAttemptId
      ) {
        status = "VERIFIED";
      }
    } else if (artifacts.length > 0) {
      status = "FAILED";
    }
    requirements.push({
      kind: "artifact",
      status,
      evidenceId: complete?.evidenceId,
      source: complete?.source,
      ...(status === "REQUIRED" || status === "FAILED"
        ? { blocker: status === "FAILED" ? "artifact_incomplete" : "artifact_missing" }
        : {}),
    });
  } else {
    requirements.push({ kind: "artifact", status: "NOT_APPLICABLE" });
  }

  // Validation / tests — Studio qualifies from EC (Nora proposal alone is non-authoritative).
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

  // Git families — only when MUST or EC evidenceRequirements ask for them
  const gitMust = snapshot?.mustFamilies.includes("git_repository") === true;
  const fromEc = gitProofFamiliesFromRequirements(
    contracts.flatMap((c) => c.evidenceRequirements ?? []),
  );
  const proposedGit = (input.proposedExitRequirementKinds ?? [])
    .map((k) => {
      if (k === "commit") return "git:local_commit" as const;
      if (k === "push") return "git:remote_push" as const;
      if (k === "pull_request") return "git:pull_request" as const;
      if (k === "ci") return "git:ci_status" as const;
      if (k === "review") return "git:review_status" as const;
      if (k === "merge") return "git:merge" as const;
      if (k === "post_merge_verification")
        return "git:post_merge_verification" as const;
      return null;
    })
    .filter((x): x is GitCompletionProofFamily => x != null);

  const requiredFamilies: GitCompletionProofFamily[] = gitMust
    ? fromEc.length > 0
      ? fromEc
      : proposedGit.length > 0
        ? proposedGit
        : fromEc
    : // Non-MUST: only families explicitly required by EC or Nora proposal
      [...new Set([...fromEc.filter((f) =>
        contracts.some((c) =>
          (c.evidenceRequirements ?? []).some(
            (r) =>
              r === f ||
              r === f.replace("git:", "git:") ||
              (f === "git:local_commit" && r === "git:commit") ||
              (f === "git:remote_push" && r === "git:push"),
          ),
        ),
      ), ...proposedGit])];

  // If git MUST but empty EC reqs, use full GCEC set via gitProofFamiliesFromRequirements([])
  const families: GitCompletionProofFamily[] = gitMust
    ? gitProofFamiliesFromRequirements(
        contracts.flatMap((c) => c.evidenceRequirements ?? []),
      )
    : requiredFamilies;

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
    if (!families.includes(family)) {
      requirements.push({ kind, status: "NOT_APPLICABLE" });
      continue;
    }
    const rows = evidenceForFamily(evidence, family, input.cycleInstanceId);
    const status = statusFromEvidence(rows);
    // D-GCEC-11: available alone = REPORTED, not VERIFIED for Git
    const adjusted =
      status === "REPORTED" && rows.every((r) => r.status !== "verified")
        ? "REPORTED"
        : status;
    const q = rows[0]?.location ? parseLocationQuery(rows[0].location) : {};
    requirements.push({
      kind,
      status: adjusted === "REQUIRED" ? "REQUIRED" : adjusted,
      evidenceId: rows.find((r) => r.status === "verified")?.evidenceId ??
        rows[0]?.evidenceId,
      source: family,
      ...(adjusted === "REQUIRED"
        ? { blocker: `${kind}_missing` }
        : adjusted === "REPORTED"
          ? { blocker: `${kind}_reported_not_verified` }
          : adjusted === "FAILED"
            ? { blocker: `${kind}_failed` }
            : {}),
      ...(q.conclusion === "failure" || q.state === "pending"
        ? { blocker: `${kind}_policy_not_met` }
        : {}),
    });
  }

  // CI/review failure special-case: conclusion/state in location
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
    allRequiredVerified,
    blockers,
  };
}

export function cycleExitGitFamiliesRequired(
  state: CycleExitState,
): GitCompletionProofFamily[] {
  const out: GitCompletionProofFamily[] = [];
  for (const r of state.requirements) {
    if (r.status === "NOT_APPLICABLE") continue;
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
