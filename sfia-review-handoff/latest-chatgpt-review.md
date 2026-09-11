# SFIA STUDIO — GCEC CYCLE CLOSURE OWNERSHIP REALIGNMENT
## SAME-LOT DELIVERY CORRECTION — Review Pack

TIMESTAMP: 2026-09-11T10:27:08Z

GO MORRIS / D-GCEC-09..14 CONSUMED:
- D-GCEC-09 EXECUTION OWNERSHIP — Cursor/agent sole Project repository mutator
- D-GCEC-10 REPOSITORY READ — Studio rich READ-ONLY capability
- D-GCEC-11 CURSOR REPORT ≠ PROOF — Studio independent verification → Evidence
- D-GCEC-12 DYNAMIC EXIT REQUIREMENTS — no universal artifact→merge chain
- D-GCEC-13 GATED CURSOR CONTINUATION — authorized slice; Cursor resumes after Confirmation
- D-GCEC-14 REPOSITORY CONTEXT ≠ EVIDENCE — Nora tools = context unless explicit verify

## GIT TRUTH BEFORE
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: ed7becca1486c20e69be7b98db2d057f3b08e5ef
- HEAD^: 2b5dcaf1a5506e68616f04adb1570edae483928b
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- prior handoff: 1a3ef1af956418e8c90404d0d49002192a8cb4ae (parent d1dc8339)
- Product tracked: clean (.tmp-sfia-review dirt only)

## GIT TRUTH AFTER
- HEAD: 7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62
- parent: ed7becca1486c20e69be7b98db2d057f3b08e5ef
- tree: b1f2fc578704e6d4b9bc3d8dfc5b8be9cb290ff3
- message: fix(sfia-studio): align GCEC execution ownership and repository verification
- Product push: NONE
- lineage: 6a2e3c9d → 2b5dcaf1 → ed7becca → 7ce33b15

## LOCAL COMMIT
SHA: 7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62
parent: ed7becca1486c20e69be7b98db2d057f3b08e5ef
tree: b1f2fc578704e6d4b9bc3d8dfc5b8be9cb290ff3
message: fix(sfia-studio): align GCEC execution ownership and repository verification


## SOURCES
Process/method/convergence/v3/handoff read as required. Hierarchy: local Git > Morris D-GCEC-09..14 > Build Doctrine > v3 target > project sources.

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED (not reopened)
- Runtime v3: NON ADOPTED
- R2/R6/R8/R18/R19/R21 honored
- Target invariant: CURSOR WRITES / GIT IS TRUTH / STUDIO READS-VERIFIES / NORA REASONS

## ARCHITECTURE REALIGNMENT
OLD MODEL RETIRED: Studio Git write (commit/push/open PR/merge ports + evidence actions)
TARGET MODEL: Cursor mutations → structured CursorExecutionReport (claim) → Studio RepositoryRead observation → VERIFIED Evidence marker → CycleExitState → Finalization

## ASSET CLASSIFICATION
KEEP: F2 executionIntent, DecisionBasis.executionBasis, Project.repositoryBinding, RepositoryBindingForm, docs-write EC/launch, Attempt FSM, Evidence, ReviewBundle, obligation snapshot, FinalizationApplicability, typed git evidence, Git proof-set concept, FakeDocsWrite, managed resolver concept
ADAPT: git-ports → READ-ONLY RepositoryReadPort; gitEffectEvidenceActions → verify*; qualifyGitCompletionProofSet requireVerified + coherence; startExecution managed root server-side; completeBoundedDocsWriteLaunch independent workspace verify; FakeDocsWrite emits CursorExecutionReport
RETIRE/DELETE: LocalGitCommitPort, Studio commit/push/PR/merge effect actions, GithubCliRemotePorts mutation methods (replaced by GithubCliRepositoryReadAdapter)

## DYNAMIC EXIT REQUIREMENTS
deriveCycleExitState projection (NOT a table): REQUIRED/REPORTED/VERIFIED/FAILED/NOT_APPLICABLE.
Nora proposes exitRequirementKinds (non-authoritative). Studio materializes from snapshot+EC+qualified proposal.
REPORTED ≠ VERIFIED. Git satisfaction requires studio:repository_read_verified:* marker or status=verified.

## CURSOR AGENT EFFECT MODEL / AUTHORIZED EXECUTION SLICE
deriveAuthorizedExecutionSlice: filesystem+validation baseline; git.* require per-effect Confirmation.
Fake Cursor docs-write stops before git.commit/push/PR/merge and reports stoppedBeforeEffects.

## CURSOR EXECUTION REPORT
oa.cursor-execution-report.1 — shared Fake/REAL claim DTO (fileEffects, validationEffects, gitEffects, authorizedEffectsExecuted, stoppedBeforeEffects).

## WORKSPACE VERIFICATION
verifyWorkspaceFileEffects — independent name-status/bytes/digest; does not trust Cursor stdout alone.

## REPOSITORY READ CAPABILITY / NORA TOOLS
RepositoryReadPort + FakeRepositoryReadPorts + GithubCliRepositoryReadAdapter (shell:false, fixed argv, READ ONLY).
Nora: existing Control Tower git_local_*/github_* + added github_list_pull_requests / github_list_pr_files / github_get_pr_diff. Context only — not Evidence.

## REPORT → VERIFICATION → EVIDENCE
verifyCommitClaim / verifyPushClaim / verifyPullRequestClaim / recordCiStatusEvidence / recordReviewStatusEvidence / verifyMergeClaim / verifyPostMergeEvidence register available Evidence with technicalResultRef studio:repository_read_verified:*.

## GIT COHERENCE CHAIN
qualifyGitCompletionProofSet: requireVerified default true; coherent SHA across commit→push→PR→CI.

## FINALIZATION
deriveFinalizationApplicability consumes verified proof SET for git MUST; CycleExitState drives dynamic display via CycleExitStatePanel.

## PRINCIPAL DETERMINISTIC E2E TRACE A→AC
gcecDeterministicE2e.d0.test.ts — binding → F2 intent → Fake Cursor report → workspace verify → Artifact → CycleExit REQUIRED git → FakeRepositoryRead verify* chain → SATISFIED. ZERO REAL.

## NEGATIVE MATRIX
gcecOwnershipNegatives + gcecDeterministicNegatives: N1/N2/N6/N7/N8/N9/N10/N12 + prior CR-GCEC-05 matrix.

## PERSISTENCE
GCEC-PERSIST CLOSED. No table/migration/store. Additive RegisterEvidenceRequest.technicalResultRef + payload fields only.

## FAKE/REAL / ZERO REAL
Fake substitutes Cursor launch + RepositoryRead observation only. ZERO Cursor REAL / OpenAI REAL / Product remote Git / proof repo.

## TEST COMMANDS + COUNTS
- Focused GCEC suite: 6 files / 45 tests PASS
- Related: corrProof05 + importBoundaries PASS
- Full vitest: 336 files / 3565 tests PASS (135 skipped)
- typecheck PASS / lint PASS / build PASS / git diff --check PASS

## DEBT
TEMP-GCEC-PRPM-01 retained
TEMP-GCEC-F14-BIND-01 retained

## OPEN GATES
GCEC-REPO-CREATE · GCEC-CURSOR-REAL · GCEC-PUSH · GCEC-PR · GCEC-MERGE · GCEC-RUNTIME-V3

## ANTI-CLAIMS
deterministic ≠ REAL; repository read adapter ≠ GitHub REAL proven; Cursor mutation capability ≠ mutation executed; report ≠ proof; local commit ≠ PR readiness; Review Handoff ≠ Product Git proof; proof repo NOT CREATED; Product Completion CLOSED; runtime v3 NON ADOPTED.

## VERDICT
PASS — GCEC CYCLE-CLOSURE OWNERSHIP REALIGNMENT DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

---
# FILES CREATED (FULL CONTENT)

## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts`
```typescript
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

```

## CREATED `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts`
```typescript
/**
 * Product CursorExecutionReport — claim/report DTO (D-GCEC-11).
 * NOT trusted Evidence. REAL and Fake MUST share this shape.
 */
export const OA_CURSOR_EXECUTION_REPORT_SCHEMA =
  "oa.cursor-execution-report.1" as const;

export type CursorFileEffectClaim = {
  created: string[];
  modified: string[];
  deleted: string[];
  /** Optional digests claimed by Cursor — Studio re-hashes independently. */
  digests?: Record<string, string>;
};

export type CursorValidationEffectClaim = {
  identity: string;
  result: "pass" | "fail" | "skipped";
  summary?: string;
};

export type CursorGitEffectClaims = {
  commit?: {
    branch: string;
    sha: string;
    parentSha?: string;
    message?: string;
  };
  push?: {
    remote: string;
    ref: string;
    sha: string;
  };
  pullRequest?: {
    number: number;
    url: string;
    headSha: string;
    baseBranch: string;
    state: "open" | "closed" | "merged";
  };
  ci?: {
    sha: string;
    status: "success" | "failure" | "pending";
  };
  review?: {
    prNumber: number;
    status: "approved" | "changes_requested" | "commented" | "pending";
  };
  merge?: {
    prNumber: number;
    mergeSha: string;
    targetBranch: string;
  };
};

export type CursorAuthorizedEffectId =
  | "filesystem.create"
  | "filesystem.modify"
  | "filesystem.delete"
  | "validation.run"
  | "git.commit"
  | "git.push"
  | "github.pr.create"
  | "github.pr.update"
  | "github.pr.merge";

export type CursorExecutionReport = {
  schemaVersion: typeof OA_CURSOR_EXECUTION_REPORT_SCHEMA;
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
  status: "succeeded" | "failed" | "stopped" | "timeout";
  fileEffects?: CursorFileEffectClaim;
  validationEffects?: CursorValidationEffectClaim[];
  gitEffects?: CursorGitEffectClaims;
  /** Effects executed under the current AuthorizedExecutionSlice. */
  authorizedEffectsExecuted: CursorAuthorizedEffectId[];
  /** Protected effects not yet authorized — Cursor stopped. */
  stoppedBeforeEffects?: CursorAuthorizedEffectId[];
};

export function isCursorExecutionReport(
  value: unknown,
): value is CursorExecutionReport {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_CURSOR_EXECUTION_REPORT_SCHEMA &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.repositoryRef === "string" &&
    typeof v.baseSha === "string" &&
    typeof v.status === "string" &&
    Array.isArray(v.authorizedEffectsExecuted)
  );
}

export function parseCursorExecutionReport(
  raw: unknown,
):
  | { ok: true; report: CursorExecutionReport }
  | { ok: false; reason: string } {
  if (!isCursorExecutionReport(raw)) {
    return { ok: false, reason: "cursor_execution_report_invalid" };
  }
  return { ok: true, report: raw };
}

```

## CREATED `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`
```typescript
/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type AuthorizedExecutionSlice = {
  executionContractId: string;
  attemptLineageKey: string;
  authorizedEffects: CursorAuthorizedEffectId[];
  blockedEffects: CursorAuthorizedEffectId[];
  reasons: string[];
};

const FILE_EFFECTS: CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

const GIT_EFFECT_CONFIRMATION_SCOPE: Record<
  Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >,
  string
> = {
  "git.commit": "git:local_commit",
  "git.push": "git:remote_push",
  "github.pr.create": "git:pull_request",
  "github.pr.merge": "git:merge",
};

function confirmationGrants(
  confirmations: readonly Confirmation[],
  scopeNeedle: string,
  nowIso: string,
): boolean {
  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    return c.scope.includes(scopeNeedle) || c.actionRef === scopeNeedle;
  });
}

/**
 * Derive the current authorized effect slice.
 * Docs-write baseline: filesystem + validation.
 * Git effects require explicit Confirmation per effect.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  /** When true, filesystem.delete may be authorized (default false / noDelete). */
  allowDelete?: boolean;
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const authorized: CursorAuthorizedEffectId[] = [...FILE_EFFECTS];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  if (input.allowDelete) {
    authorized.push("filesystem.delete");
  } else {
    blocked.push("filesystem.delete");
    reasons.push("no_delete_policy");
  }

  const gitCandidates: Array<
    Extract<
      CursorAuthorizedEffectId,
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    >
  > = ["git.commit", "git.push", "github.pr.create", "github.pr.merge"];

  const reqs = input.evidenceRequirements ?? [];
  const wantsGit =
    reqs.some((r) => r.startsWith("git:")) ||
    (input.requiredCapabilities ?? []).some((c) =>
      /git|github|cursor\.docs_write/i.test(c),
    );

  for (const effect of gitCandidates) {
    const needed =
      wantsGit ||
      reqs.some((r) => {
        if (effect === "git.commit")
          return r === "git:local_commit" || r === "git:commit";
        if (effect === "git.push")
          return r === "git:remote_push" || r === "git:push";
        if (effect === "github.pr.create") return r === "git:pull_request";
        if (effect === "github.pr.merge") return r === "git:merge";
        return false;
      });
    if (!needed) {
      blocked.push(effect);
      continue;
    }
    const scope = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
    if (confirmationGrants(confirmations, scope, nowIso)) {
      authorized.push(effect);
    } else {
      blocked.push(effect);
      reasons.push(`confirmation_required:${scope}`);
    }
  }

  // github.pr.update follows create confirmation when create authorized
  if (
    authorized.includes("github.pr.create") &&
    !authorized.includes("github.pr.update")
  ) {
    // keep update blocked unless separately confirmed — conservative
    if (!blocked.includes("github.pr.update")) {
      blocked.push("github.pr.update");
    }
  }

  return {
    executionContractId: input.executionContractId,
    attemptLineageKey:
      input.attemptLineageKey ?? input.executionContractId,
    authorizedEffects: authorized,
    blockedEffects: blocked,
    reasons,
  };
}

export function sliceAllows(
  slice: AuthorizedExecutionSlice,
  effect: CursorAuthorizedEffectId,
): boolean {
  return slice.authorizedEffects.includes(effect);
}

```

## CREATED `projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts`
```typescript
/**
 * Independent workspace file-effect verification (D-GCEC-11/12).
 * Studio READS the managed worktree — does not trust Cursor stdout for touched files.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import type { CursorExecutionReport } from "../domain/cursorExecutionReport";

export type WorkspaceFileVerificationResult =
  | {
      ok: true;
      touchedFiles: string[];
      targetPath: string;
      digest: string;
      unexpectedFiles: string[];
    }
  | {
      ok: false;
      reason: string;
      touchedFiles: string[];
      unexpectedFiles: string[];
    };

function normalizeRel(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function parseNameStatus(porcelainOrNameStatus: string): {
  path: string;
  status: string;
}[] {
  const out: { path: string; status: string }[] = [];
  for (const line of porcelainOrNameStatus.split("\n")) {
    const t = line.trimEnd();
    if (!t) continue;
    // porcelain: XY path  OR name-status: A\tpath
    if (t.includes("\t")) {
      const [st, p] = t.split("\t");
      if (p) out.push({ path: normalizeRel(p), status: (st ?? "?").trim() });
      continue;
    }
    if (t.length >= 3) {
      const st = t.slice(0, 2).trim();
      const p = t.slice(3).trim();
      if (p) out.push({ path: normalizeRel(p), status: st || "?" });
    }
  }
  return out;
}

/**
 * Verify docs-write workspace independently of Cursor report claims.
 */
export async function verifyWorkspaceFileEffects(input: {
  worktreePath: string;
  pathAllowlist: readonly string[];
  targetPath: string;
  /** Optional Cursor claim — compared, never trusted alone. */
  report?: CursorExecutionReport | null;
  statusDiffPort?: LocalGitStatusDiffPort;
  /** Injectable name-status text for tests without git. */
  nameStatusText?: string;
}): Promise<WorkspaceFileVerificationResult> {
  const allow = new Set(input.pathAllowlist.map(normalizeRel));
  const targetPath = normalizeRel(input.targetPath);

  let nameStatus = input.nameStatusText ?? "";
  if (!nameStatus && input.statusDiffPort) {
    const diff = await input.statusDiffPort.statusDiff({
      repoPath: input.worktreePath,
      pathspecs: [...allow],
    });
    nameStatus = diff.statusPorcelain || diff.diffStat;
  }

  const changed = parseNameStatus(nameStatus);
  const touchedFiles = changed.map((c) => c.path);
  const unexpectedFiles = touchedFiles.filter((p) => {
    if (allow.has(p)) return false;
    // allow prefix match under allowlisted directories
    return ![...allow].some(
      (a) => p === a || p.startsWith(a.endsWith("/") ? a : `${a}/`),
    );
  });

  if (unexpectedFiles.length > 0) {
    return {
      ok: false,
      reason: "unexpected_files_outside_allowlist",
      touchedFiles,
      unexpectedFiles,
    };
  }

  // Deletes forbidden for docs-write vertical
  const deletes = changed.filter((c) => /D/i.test(c.status));
  if (deletes.length > 0) {
    return {
      ok: false,
      reason: "delete_forbidden",
      touchedFiles,
      unexpectedFiles: deletes.map((d) => d.path),
    };
  }

  const absTarget = path.resolve(input.worktreePath, ...targetPath.split("/"));
  const root = path.resolve(input.worktreePath);
  if (absTarget !== root && !absTarget.startsWith(root + path.sep)) {
    return {
      ok: false,
      reason: "target_path_escape",
      touchedFiles,
      unexpectedFiles: [targetPath],
    };
  }
  if (!existsSync(absTarget)) {
    return {
      ok: false,
      reason: "target_path_missing",
      touchedFiles,
      unexpectedFiles: [],
    };
  }

  const buf = await readFile(absTarget);
  const digest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;

  // If Cursor claimed digests, mismatch → fail (claim vs observation)
  const claimed = input.report?.fileEffects?.digests?.[targetPath];
  if (claimed && claimed !== digest) {
    return {
      ok: false,
      reason: "claimed_digest_mismatch",
      touchedFiles,
      unexpectedFiles: [],
    };
  }

  return {
    ok: true,
    touchedFiles: touchedFiles.length > 0 ? touchedFiles : [targetPath],
    targetPath,
    digest,
    unexpectedFiles: [],
  };
}

```

## CREATED `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/CycleExitStatePanel.tsx`
```typescript
/**
 * Minimal CycleExitState projection for Pilot/Nora inspection (D-GCEC-12/20).
 * Renders dynamic requirements — never hardcodes a full Git lifecycle list.
 */
"use client";

import type { CycleExitState } from "@/lib/oa/cycle";

export type CycleExitStatePanelProps = {
  state: CycleExitState | null | undefined;
  title?: string;
};

export function CycleExitStatePanel({
  state,
  title = "Cycle exit requirements",
}: CycleExitStatePanelProps) {
  if (!state) {
    return (
      <section aria-label={title} data-testid="cycle-exit-state-empty">
        <h3>{title}</h3>
        <p>No exit-state projection yet.</p>
      </section>
    );
  }

  return (
    <section aria-label={title} data-testid="cycle-exit-state">
      <h3>{title}</h3>
      <p data-testid="cycle-exit-all-verified">
        {state.allRequiredVerified
          ? "All required exit conditions verified."
          : "Exit conditions incomplete."}
      </p>
      <ul>
        {state.requirements.map((r) => (
          <li key={r.kind} data-testid={`cycle-exit-${r.kind}`}>
            <span>{r.kind}</span>
            <span> — </span>
            <strong>{r.status}</strong>
            {r.blocker ? <span> ({r.blocker})</span> : null}
          </li>
        ))}
      </ul>
      {state.blockers.length > 0 ? (
        <p data-testid="cycle-exit-blockers">
          Blockers: {state.blockers.join("; ")}
        </p>
      ) : null}
    </section>
  );
}

```

## CREATED `projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts`
```typescript
/**
 * GCEC ownership negatives — D-GCEC-09..14 (report ≠ proof, no Studio mutation).
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  deriveCycleExitState,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  FakeRepositoryReadPorts,
  verifyCommitClaim,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  deriveAuthorizedExecutionSlice,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

describe("GCEC ownership negatives", () => {
  it("N1 commit claim without repository SHA → reported not verified", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyCommitClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: "acme/widget",
      claimedCommitSha: SHA,
      bindings: {
        projectId: "prj:n",
        cycleInstanceId: "cyc:n",
        executionContractId: "xct:n",
      },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe("reported");
  });

  it("N2 PR claim head mismatch → failed", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    read.seedPullRequest({
      number: 42,
      title: "x",
      state: "open",
      headSha: OTHER,
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/42",
    });
    const r = await verifyPullRequestClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: "acme/widget",
      claimedPrNumber: 42,
      claimedHeadSha: SHA,
      bindings: {
        projectId: "prj:n",
        cycleInstanceId: "cyc:n",
      },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("pr_head_mismatch");
  });

  it("N6 out-of-scope workspace write → verify fails", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: "/tmp",
      pathAllowlist: ["docs/"],
      targetPath: "docs/fd.md",
      nameStatusText: "A\tsrc/evil.ts\nA\tdocs/fd.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_files_outside_allowlist");
  });

  it("N7 Studio git-ports barrel exports no mutation methods", () => {
    const barrel = fs.readFileSync(
      path.resolve(__dirname, "../../../lib/oa/git-ports/index.ts"),
      "utf8",
    );
    expect(barrel).not.toMatch(/commitArtifactEvidence/);
    expect(barrel).not.toMatch(/pushBranchEvidence/);
    expect(barrel).not.toMatch(/openPullRequestEvidence/);
    expect(barrel).not.toMatch(/mergePullRequestEvidence/);
    expect(barrel).not.toMatch(/LocalGitCommitPort/);
    expect(barrel).not.toMatch(/NodeLocalGitCommitPort/);
  });

  it("N8 Nora tools have no Git mutation tools", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    const mutationLike = names.filter((n) =>
      /(?:^|_)(push|merge|create_pr|pr_create|pr_merge|git_commit)(?:_|$)/i.test(
        n,
      ),
    );
    expect(mutationLike).toEqual([]);
    expect(
      names.every((n) => n.startsWith("git_local_") || n.startsWith("github_")),
    ).toBe(true);
    // Read-only commit *inspection* is allowed; mutation is not.
    expect(names).toContain("github_get_commit");
  });

  it("N9 cycle without Git requirement → absence does not block", () => {
    const state = deriveCycleExitState({
      projectId: "prj:n",
      cycleInstanceId: "cyc:n",
      cycleTypeId: "cyc:framing",
      repositoryBinding: null,
      executionContracts: [
        {
          contractId: "xct:n",
          status: "completed",
          expectedOutputs: ["artifact"],
          evidenceRequirements: [],
        },
      ],
      evidence: [
        {
          schemaVersion: "0.2.0-oa",
          evidenceId: "ev:art",
          type: "artifact",
          status: "available",
          source: "test",
          sourceKind: "external",
          classification: "internal",
          storageMode: "metadata_only",
          digest: DIGEST,
          location: "docs/note.md",
          bindings: {
            projectId: "prj:n",
            cycleInstanceId: "cyc:n",
            executionContractId: "xct:n",
            executionAttemptId: "xat:n",
          },
          createdAt: "2026-09-11T12:00:00.000Z",
          updatedAt: "2026-09-11T12:00:00.000Z",
          version: 1,
          producedAt: "2026-09-11T12:00:00.000Z",
          availability: "available",
          containsSecrets: false,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: "prv:t",
            actor: { actorId: "a", role: "system" },
            source: "system",
            timestamp: "2026-09-11T12:00:00.000Z",
            correlationId: "c",
          },
        } as never,
      ],
    });
    expect(
      state.requirements.every(
        (r) =>
          r.kind === "artifact" ||
          r.status === "NOT_APPLICABLE" ||
          r.status === "VERIFIED",
      ),
    ).toBe(true);
    expect(state.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "NOT_APPLICABLE",
    );
  });

  it("N10 AuthorizedExecutionSlice blocks git without Confirmation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).toContain("filesystem.create");
  });

  it("N12 cursor report claim alone does not satisfy git SET", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        {
          schemaVersion: "0.2.0-oa",
          evidenceId: "ev:claim",
          type: "other",
          status: "available",
          source: "git:local_commit",
          sourceKind: "external",
          classification: "internal",
          storageMode: "metadata_only",
          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${SHA}`,
          technicalResultRef: "studio:cursor_report_claim:git:local_commit",
          bindings: { cycleInstanceId: "cyc:n", projectId: "prj:n" },
          createdAt: "2026-09-11T12:00:00.000Z",
          updatedAt: "2026-09-11T12:00:00.000Z",
          version: 1,
          producedAt: "2026-09-11T12:00:00.000Z",
          availability: "available",
          containsSecrets: false,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: "prv:t",
            actor: { actorId: "a", role: "system" },
            source: "system",
            timestamp: "2026-09-11T12:00:00.000Z",
            correlationId: "c",
          },
        } as never,
      ],
      expected: {
        repositoryRef: "acme/widget",
        targetPath: "docs/fd.md",
        artifactDigest: DIGEST,
        cycleInstanceId: "cyc:n",
      },
    });
    expect(r.status).toBe("BLOCKING");
  });
});

```

# FILES DELETED
- projects/sfia-studio/app/lib/oa/git-ports/localGitCommitPort.ts (Studio commit mutation retired)

# FILES MODIFIED (FULL CURRENT CONTENT)

## MODIFIED `projects/sfia-studio/app/lib/oa/git-ports/types.ts`
```typescript
/**
 * GCEC D-GCEC-09..14 — Studio repository READ ports only.
 *
 * Cursor / governed agent owns all Project repository mutations.
 * Studio MUST NOT expose commit / push / open PR / merge methods.
 */

import type { Digest } from "@/lib/oa/doctrine";

/** Local status / diff read. */
export type LocalGitStatusDiffInput = {
  repoPath: string;
  /** Optional pathspec filter. */
  pathspecs?: string[];
};

export type LocalGitStatusDiffOutput = {
  branch: string | null;
  headSha: string | null;
  dirty: boolean;
  statusPorcelain: string;
  diffStat: string;
};

export type LocalGitStatusDiffPort = {
  statusDiff(input: LocalGitStatusDiffInput): Promise<LocalGitStatusDiffOutput>;
};

/** CI status read. */
export type GitCiStatusInput = {
  repositoryRef: string;
  commitSha: string;
};

export type GitCiStatusOutput = {
  conclusion: "success" | "failure" | "pending" | "neutral" | "cancelled";
  checkName?: string;
  url?: string;
};

export type GitCiStatusPort = {
  getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput>;
};

/** Review status read. */
export type GitReviewStatusInput = {
  repositoryRef: string;
  prNumber: number;
};

export type GitReviewStatusOutput = {
  state: "approved" | "changes_requested" | "commented" | "pending";
};

export type GitReviewStatusPort = {
  getReviewStatus(input: GitReviewStatusInput): Promise<GitReviewStatusOutput>;
};

/** Post-merge verify (pure compare of independently observed facts). */
export type PostMergeVerifyInput = {
  expectedTargetSha: string;
  observedTargetSha: string;
  expectedArtifactDigest: Digest;
  observedArtifactDigest: Digest;
  artifactPath: string;
};

export type PostMergeVerifyOutput = {
  ok: boolean;
  reasons: string[];
};

export type PostMergeVerifyPort = {
  verify(input: PostMergeVerifyInput): PostMergeVerifyOutput;
};

/**
 * Bounded Studio repository READ capability (D-GCEC-10).
 * All methods are read-only. No create/update/delete/merge/push/commit.
 */
export type RepositoryReadRef = {
  repositoryRef: string;
};

export type RepositoryPullRequestSummary = {
  number: number;
  title: string;
  state: "open" | "closed" | "merged";
  headSha: string;
  baseBranch: string;
  url: string;
};

export type RepositoryCommitSummary = {
  sha: string;
  message: string;
  parents: string[];
};

export type RepositoryFileContent = {
  path: string;
  ref: string;
  content: string;
  digest: Digest;
};

export type RepositoryCompareResult = {
  base: string;
  head: string;
  aheadBy: number;
  behindBy: number;
  files: string[];
};

export type RepositoryMergeInfo = {
  prNumber: number;
  state: "open" | "closed" | "merged";
  mergeSha: string | null;
  targetBranch: string;
  headSha: string;
};

export type RepositoryReadPort = {
  listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]>;
  getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null>;
  listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]>;
  getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string>;
  listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]>;
  getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null>;
  readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null>;
  listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]>;
  compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult>;
  getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null>;
  getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput>;
  getReviewStatus(input: GitReviewStatusInput): Promise<GitReviewStatusOutput>;
  getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null>;
  readArtifactDigestAtRef?(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null>;
};

```

## MODIFIED `projects/sfia-studio/app/lib/oa/git-ports/index.ts`
```typescript
/**
 * GCEC git-ports — Studio READ / verify only (D-GCEC-09..11).
 * Cursor owns commit / push / PR / merge mutations.
 */
export type {
  LocalGitStatusDiffInput,
  LocalGitStatusDiffOutput,
  LocalGitStatusDiffPort,
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  PostMergeVerifyInput,
  PostMergeVerifyOutput,
  PostMergeVerifyPort,
  RepositoryReadPort,
  RepositoryReadRef,
  RepositoryPullRequestSummary,
  RepositoryCommitSummary,
  RepositoryFileContent,
  RepositoryCompareResult,
  RepositoryMergeInfo,
} from "./types";

export { FakeRepositoryReadPorts, FakeGitProviderPorts } from "./fakeGitProviderPorts";
export { NodeLocalGitStatusDiffPort } from "./localGitStatusDiffPort";
export {
  GithubCliRepositoryReadAdapter,
  GithubCliRemotePorts,
  GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS,
} from "./githubCliRemotePorts";
export type {
  GithubCliRepositoryReadAdapterOptions,
  GithubCliRemotePortsOptions,
} from "./githubCliRemotePorts";
export { verifyPostMerge, postMergeVerifyPort } from "./postMergeVerify";
export {
  registerReportedGitClaimEvidence,
  verifyCommitClaim,
  verifyPushClaim,
  verifyPullRequestClaim,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  STUDIO_REPO_READ_VERIFIED_PREFIX,
} from "./application/gitEffectEvidenceActions";
export type {
  GitVerifyActor,
  GitVerifyBindings,
  GitEffectActor,
  GitEffectBindings,
} from "./application/gitEffectEvidenceActions";

```

## MODIFIED `projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts`
```typescript
/**
 * FakeRepositoryReadPorts — in-memory READ-ONLY Git/GitHub observation for tests.
 * D-GCEC-09: NO commit / push / open PR / merge methods.
 *
 * Seeded state emulates external Cursor mutations observed by Studio.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  RepositoryCommitSummary,
  RepositoryCompareResult,
  RepositoryFileContent,
  RepositoryMergeInfo,
  RepositoryPullRequestSummary,
  RepositoryReadPort,
  RepositoryReadRef,
} from "./types";

function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}` as Digest;
}

export class FakeRepositoryReadPorts
  implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
{
  readonly pullRequests = new Map<number, RepositoryPullRequestSummary>();
  readonly prFiles = new Map<number, string[]>();
  readonly prDiffs = new Map<number, string>();
  readonly commits = new Map<string, RepositoryCommitSummary>();
  readonly filesByRefPath = new Map<string, string>();
  readonly pathsByRef = new Map<string, string[]>();
  readonly branchHeads = new Map<string, string>();
  readonly compares = new Map<string, RepositoryCompareResult>();
  ciByCommit = new Map<string, GitCiStatusOutput>();
  reviewByPr = new Map<number, GitReviewStatusOutput>();
  mergeByPr = new Map<number, RepositoryMergeInfo>();

  seedPullRequest(pr: RepositoryPullRequestSummary): void {
    this.pullRequests.set(pr.number, pr);
  }

  seedCommit(commit: RepositoryCommitSummary): void {
    this.commits.set(commit.sha.toLowerCase(), {
      ...commit,
      sha: commit.sha.toLowerCase(),
    });
  }

  seedFileAtRef(ref: string, path: string, content: string): void {
    this.filesByRefPath.set(`${ref}:${path}`, content);
  }

  seedBranchHead(branch: string, sha: string): void {
    this.branchHeads.set(branch, sha.toLowerCase());
  }

  seedMergeInfo(info: RepositoryMergeInfo): void {
    this.mergeByPr.set(info.prNumber, info);
  }

  async listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]> {
    void input.repositoryRef;
    const all = [...this.pullRequests.values()];
    const filtered =
      !input.state || input.state === "all"
        ? all
        : all.filter((p) => p.state === input.state);
    return filtered.slice(0, input.limit ?? 20);
  }

  async getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null> {
    void input.repositoryRef;
    return this.pullRequests.get(input.number) ?? null;
  }

  async listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]> {
    void input.repositoryRef;
    return this.prFiles.get(input.number) ?? [];
  }

  async getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string> {
    void input.repositoryRef;
    return this.prDiffs.get(input.number) ?? "";
  }

  async listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]> {
    void input.repositoryRef;
    const all = [...this.commits.values()];
    return all.slice(0, input.limit ?? 20);
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    void input.repositoryRef;
    return this.commits.get(input.sha.toLowerCase()) ?? null;
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    void input.repositoryRef;
    const content = this.filesByRefPath.get(`${input.ref}:${input.path}`);
    if (content == null) return null;
    return {
      path: input.path,
      ref: input.ref,
      content,
      digest: digestOf(content),
    };
  }

  async listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]> {
    void input.path;
    return this.pathsByRef.get(input.ref) ?? [];
  }

  async compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult> {
    void input.repositoryRef;
    const key = `${input.base}..${input.head}`;
    return (
      this.compares.get(key) ?? {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      }
    );
  }

  async getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null> {
    void input.repositoryRef;
    return this.branchHeads.get(input.branch) ?? null;
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    return (
      this.ciByCommit.get(input.commitSha.toLowerCase()) ?? {
        conclusion: "pending",
        checkName: "fake-ci",
      }
    );
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    return this.reviewByPr.get(input.prNumber) ?? { state: "pending" };
  }

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    void input.repositoryRef;
    return this.mergeByPr.get(input.prNumber) ?? null;
  }

  async readArtifactDigestAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null> {
    const file = await this.readFileAtRef(input);
    return file?.digest ?? null;
  }
}

/** @deprecated Use FakeRepositoryReadPorts — mutation surface retired (D-GCEC-09). */
export const FakeGitProviderPorts = FakeRepositoryReadPorts;

```

## MODIFIED `projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts`
```typescript
/**
 * GithubCliRepositoryReadAdapter — READ-ONLY GitHub CLI / git observation.
 * D-GCEC-09/10: fixed argv, shell:false. NO push / create PR / merge / commit.
 *
 * ZERO REAL invocation during GCEC deterministic correction — inject `run`.
 */
import { spawn as nodeSpawn } from "node:child_process";
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  RepositoryCommitSummary,
  RepositoryCompareResult,
  RepositoryFileContent,
  RepositoryMergeInfo,
  RepositoryPullRequestSummary,
  RepositoryReadPort,
  RepositoryReadRef,
} from "./types";

type CmdResult = { stdout: string; stderr: string; exitCode: number };

async function runFixedArgv(
  executable: string,
  argv: readonly string[],
  cwd?: string,
): Promise<CmdResult> {
  return await new Promise((resolve) => {
    const child = nodeSpawn(executable, [...argv], {
      cwd,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout?.on("data", (c: Buffer) => {
      if (stdout.length < 256 * 1024) stdout += c.toString("utf8");
    });
    child.stderr?.on("data", (c: Buffer) => {
      if (stderr.length < 64 * 1024) stderr += c.toString("utf8");
    });
    child.on("error", () => {
      resolve({ stdout, stderr: stderr || "spawn_error", exitCode: 1 });
    });
    child.on("close", (code) => {
      resolve({ stdout, stderr, exitCode: code ?? 1 });
    });
  });
}

export type GithubCliRepositoryReadAdapterOptions = {
  /** Injectable runner — tests MUST inject a fake; never call real `gh` in unit tests. */
  run?: (
    executable: string,
    argv: readonly string[],
    cwd?: string,
  ) => Promise<CmdResult>;
  cwd?: string;
};

function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}` as Digest;
}

/**
 * Forbidden mutation argv patterns — used by architecture tests.
 * Adapter methods must never compose these.
 */
export const GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS = [
  "push",
  "commit",
  "pr create",
  "pr merge",
  "-X POST",
  "-X PUT",
  "-X PATCH",
  "-X DELETE",
] as const;

export class GithubCliRepositoryReadAdapter
  implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
{
  private readonly run: NonNullable<GithubCliRepositoryReadAdapterOptions["run"]>;
  private readonly cwd?: string;

  constructor(options: GithubCliRepositoryReadAdapterOptions = {}) {
    this.run = options.run ?? runFixedArgv;
    this.cwd = options.cwd;
  }

  async listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]> {
    const state = input.state ?? "open";
    const result = await this.run(
      "gh",
      [
        "pr",
        "list",
        "--repo",
        input.repositoryRef,
        "--limit",
        String(input.limit ?? 5),
        "--state",
        state,
        "--json",
        "number,title,state,headRefOid,baseRefName,url",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    try {
      const rows = JSON.parse(result.stdout) as Array<{
        number: number;
        title: string;
        state: string;
        headRefOid: string;
        baseRefName: string;
        url: string;
      }>;
      return rows.map((r) => ({
        number: r.number,
        title: r.title,
        state: mapPrState(r.state),
        headSha: r.headRefOid,
        baseBranch: r.baseRefName,
        url: r.url,
      }));
    } catch {
      return [];
    }
  }

  async getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.number),
        "--repo",
        input.repositoryRef,
        "--json",
        "number,title,state,headRefOid,baseRefName,url,mergedAt",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    try {
      const r = JSON.parse(result.stdout) as {
        number: number;
        title: string;
        state: string;
        headRefOid: string;
        baseRefName: string;
        url: string;
        mergedAt?: string | null;
      };
      return {
        number: r.number,
        title: r.title,
        state: r.mergedAt ? "merged" : mapPrState(r.state),
        headSha: r.headRefOid,
        baseBranch: r.baseRefName,
        url: r.url,
      };
    } catch {
      return null;
    }
  }

  async listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.number),
        "--repo",
        input.repositoryRef,
        "--json",
        "files",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    try {
      const parsed = JSON.parse(result.stdout) as {
        files?: Array<{ path: string }>;
      };
      return (parsed.files ?? []).map((f) => f.path);
    } catch {
      return [];
    }
  }

  async getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string> {
    const result = await this.run(
      "gh",
      ["pr", "diff", String(input.number), "--repo", input.repositoryRef],
      this.cwd,
    );
    return result.exitCode === 0 ? result.stdout : "";
  }

  async listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/commits?sha=${encodeURIComponent(input.ref ?? "HEAD")}&per_page=${input.limit ?? 20}`,
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    try {
      const rows = JSON.parse(result.stdout) as Array<{
        sha: string;
        commit?: { message?: string };
        parents?: Array<{ sha: string }>;
      }>;
      return rows.map((r) => ({
        sha: r.sha,
        message: r.commit?.message ?? "",
        parents: (r.parents ?? []).map((p) => p.sha),
      }));
    } catch {
      return [];
    }
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    const result = await this.run(
      "gh",
      ["api", `repos/${input.repositoryRef}/commits/${input.sha}`],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    try {
      const r = JSON.parse(result.stdout) as {
        sha: string;
        commit?: { message?: string };
        parents?: Array<{ sha: string }>;
      };
      return {
        sha: r.sha,
        message: r.commit?.message ?? "",
        parents: (r.parents ?? []).map((p) => p.sha),
      };
    } catch {
      return null;
    }
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    // Prefer git show when local cwd is available; else GitHub Contents API GET.
    if (this.cwd) {
      const local = await this.run(
        "git",
        ["show", `${input.ref}:${input.path}`],
        this.cwd,
      );
      if (local.exitCode === 0) {
        return {
          path: input.path,
          ref: input.ref,
          content: local.stdout,
          digest: digestOf(local.stdout),
        };
      }
    }
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/contents/${encodeURIComponent(input.path)}?ref=${encodeURIComponent(input.ref)}`,
        "--jq",
        ".content",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0 || !result.stdout.trim()) return null;
    try {
      const b64 = result.stdout.trim().replace(/\s+/g, "");
      const content = Buffer.from(b64, "base64").toString("utf8");
      return {
        path: input.path,
        ref: input.ref,
        content,
        digest: digestOf(content),
      };
    } catch {
      return null;
    }
  }

  async listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/contents/${encodeURIComponent(input.path)}?ref=${encodeURIComponent(input.ref)}`,
        "--jq",
        ".[].path",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    return result.stdout
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  async compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/compare/${encodeURIComponent(input.base)}...${encodeURIComponent(input.head)}`,
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
    try {
      const parsed = JSON.parse(result.stdout) as {
        ahead_by?: number;
        behind_by?: number;
        files?: Array<{ filename: string }>;
      };
      return {
        base: input.base,
        head: input.head,
        aheadBy: parsed.ahead_by ?? 0,
        behindBy: parsed.behind_by ?? 0,
        files: (parsed.files ?? []).map((f) => f.filename),
      };
    } catch {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
  }

  async getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/git/ref/heads/${encodeURIComponent(input.branch)}`,
        "--jq",
        ".object.sha",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    const sha = result.stdout.trim().toLowerCase();
    return /^[0-9a-f]{40}$/.test(sha) ? sha : null;
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/commits/${input.commitSha}/status`,
        "--jq",
        ".state",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) {
      return { conclusion: "pending", checkName: "github-status" };
    }
    const state = result.stdout.trim().toLowerCase();
    const conclusion =
      state === "success"
        ? "success"
        : state === "failure" || state === "error"
          ? "failure"
          : "pending";
    return { conclusion, checkName: "github-status" };
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.prNumber),
        "--repo",
        input.repositoryRef,
        "--json",
        "reviewDecision",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return { state: "pending" };
    try {
      const parsed = JSON.parse(result.stdout) as { reviewDecision?: string };
      const d = (parsed.reviewDecision ?? "").toUpperCase();
      if (d === "APPROVED") return { state: "approved" };
      if (d === "CHANGES_REQUESTED") return { state: "changes_requested" };
      if (d === "COMMENTED") return { state: "commented" };
      return { state: "pending" };
    } catch {
      return { state: "pending" };
    }
  }

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.prNumber),
        "--repo",
        input.repositoryRef,
        "--json",
        "number,state,mergeCommit,baseRefName,headRefOid,mergedAt",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    try {
      const r = JSON.parse(result.stdout) as {
        number: number;
        state: string;
        mergeCommit?: { oid?: string } | null;
        baseRefName: string;
        headRefOid: string;
        mergedAt?: string | null;
      };
      return {
        prNumber: r.number,
        state: r.mergedAt ? "merged" : mapPrState(r.state),
        mergeSha: r.mergeCommit?.oid?.toLowerCase() ?? null,
        targetBranch: r.baseRefName,
        headSha: r.headRefOid,
      };
    } catch {
      return null;
    }
  }

  async readArtifactDigestAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null> {
    const file = await this.readFileAtRef(input);
    return file?.digest ?? null;
  }
}

function mapPrState(state: string): "open" | "closed" | "merged" {
  const s = state.toLowerCase();
  if (s === "merged") return "merged";
  if (s === "closed") return "closed";
  return "open";
}

/** @deprecated Prefer GithubCliRepositoryReadAdapter (D-GCEC-09 read-only). */
export const GithubCliRemotePorts = GithubCliRepositoryReadAdapter;
export type GithubCliRemotePortsOptions = GithubCliRepositoryReadAdapterOptions;

```

## MODIFIED `projects/sfia-studio/app/lib/oa/git-ports/nodeLocalGitPorts.ts`
```typescript
/**
 * Node local git ports — READ ONLY (D-GCEC-09).
 * Commit mutation retired; Cursor owns Project repository writes.
 */
export { NodeLocalGitStatusDiffPort } from "./localGitStatusDiffPort";

```

## MODIFIED `projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`
```typescript
/**
 * D-GCEC-09/11 — Studio Git verification actions (READ + Evidence only).
 * Cursor owns mutations. Studio observes via RepositoryReadPort and upgrades claims.
 *
 * Evidence.register forbids status=verified at create time. Verified Git proof is
 * represented schema-free as status=available + technicalResultRef marker
 * `studio:repository_read_verified:*` after independent RepositoryRead observation.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  buildTypedGitEvidenceFields,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import type {
  GitCiStatusPort,
  GitReviewStatusPort,
  PostMergeVerifyPort,
  RepositoryReadPort,
} from "../types";
import { verifyPostMerge } from "../postMergeVerify";

export const STUDIO_REPO_READ_VERIFIED_PREFIX =
  "studio:repository_read_verified:" as const;

export type GitVerifyActor = {
  actorId: string;
  role: string;
  displayName?: string;
  authorityLevel?: string;
};

export type GitVerifyBindings = {
  projectId: string;
  cycleInstanceId: string;
  executionContractId?: string;
  executionAttemptId?: string;
};

function claimDigest(location: string): Digest {
  return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
}

async function registerTypedGitEvidence(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  /** When true, mark as Studio-read verified (not Cursor report alone). */
  studioVerified: boolean;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const built = buildTypedGitEvidenceFields(
    input.source,
    input.payload as never,
  );
  if (!built.ok) return { ok: false, reason: built.reason };

  const location = built.fields.location ?? `git:${input.source}`;
  const digest = built.fields.digest ?? claimDigest(location);

  const result = await input.services.registerEvidence.execute({
    evidenceId: input.evidenceId,
    idempotencyKey: `idem:${input.evidenceId}`,
    actor: input.actor as never,
    type: "other",
    source: built.fields.source,
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    status: "available",
    location,
    digest,
    ...(input.studioVerified
      ? {
          technicalResultRef: `${STUDIO_REPO_READ_VERIFIED_PREFIX}${input.source}`,
        }
      : {
          technicalResultRef: `studio:cursor_report_claim:${input.source}`,
        }),
    bindings: {
      projectId: input.bindings.projectId,
      cycleInstanceId: input.bindings.cycleInstanceId,
      ...(input.bindings.executionContractId
        ? { executionContractId: input.bindings.executionContractId }
        : {}),
      ...(input.bindings.executionAttemptId
        ? { executionAttemptId: input.bindings.executionAttemptId }
        : {}),
    },
    nowIso: input.nowIso,
  });
  if (!result.ok) {
    return { ok: false, reason: result.error.detailCode };
  }
  return { ok: true, evidenceId: input.evidenceId };
}

/** Register a Cursor-reported claim as AVAILABLE (not verified). */
export async function registerReportedGitClaimEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  evidenceId: string;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  return registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId: input.evidenceId,
    source: input.source,
    payload: input.payload,
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: false,
    nowIso: input.nowIso,
  });
}

export async function verifyCommitClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedCommitSha: string;
  message?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const observed = await input.repositoryRead.getCommit({
    repositoryRef: input.repositoryRef,
    sha: input.claimedCommitSha,
  });
  if (!observed) {
    return { ok: false, reason: "commit_sha_not_found", status: "reported" };
  }
  if (observed.sha.toLowerCase() !== input.claimedCommitSha.toLowerCase()) {
    return { ok: false, reason: "commit_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-commit-verified:${observed.sha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:local_commit",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: observed.sha,
      message: input.message ?? observed.message,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: true,
    nowIso: input.nowIso,
  });
  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
  return { ok: true, evidenceId, status: "verified" };
}

export async function verifyPushClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  branch: string;
  claimedCommitSha: string;
  remote?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const head = await input.repositoryRead.getBranchHead({
    repositoryRef: input.repositoryRef,
    branch: input.branch,
  });
  if (!head) {
    return { ok: false, reason: "branch_head_not_found", status: "reported" };
  }
  if (head.toLowerCase() !== input.claimedCommitSha.toLowerCase()) {
    return { ok: false, reason: "push_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-push-verified:${head.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:remote_push",
    payload: {
      repositoryRef: input.repositoryRef,
      remote: input.remote ?? "origin",
      refName: `refs/heads/${input.branch}`,
      commitSha: head,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: true,
    nowIso: input.nowIso,
  });
  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
  return { ok: true, evidenceId, status: "verified" };
}

export async function verifyPullRequestClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedPrNumber: number;
  claimedHeadSha: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified"; prNumber: number; headSha: string }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const pr = await input.repositoryRead.getPullRequest({
    repositoryRef: input.repositoryRef,
    number: input.claimedPrNumber,
  });
  if (!pr) {
    return { ok: false, reason: "pr_not_found", status: "reported" };
  }
  if (pr.headSha.toLowerCase() !== input.claimedHeadSha.toLowerCase()) {
    return { ok: false, reason: "pr_head_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-pr-verified:${pr.number}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:pull_request",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: pr.number,
      url: pr.url,
      headSha: pr.headSha,
      state: pr.state,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: true,
    nowIso: input.nowIso,
  });
  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
  return {
    ok: true,
    evidenceId,
    status: "verified",
    prNumber: pr.number,
    headSha: pr.headSha,
  };
}

export async function recordCiStatusEvidence(input: {
  ciPort: GitCiStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  commitSha: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  /** Test inject — skip live CI read. */
  forcedConclusion?: "success" | "failure" | "pending";
}): Promise<
  | { ok: true; evidenceId: string; conclusion: string; status: "verified" | "failed" }
  | { ok: false; reason: string }
> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const status =
    input.forcedConclusion != null
      ? { conclusion: input.forcedConclusion }
      : await input.ciPort.getCiStatus({
          repositoryRef: input.repositoryRef,
          commitSha: input.commitSha,
        });
  const verified = status.conclusion === "success";
  const evidenceId = `ev:git-ci:${input.commitSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:ci_status",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: input.commitSha,
      conclusion: status.conclusion,
      checkName: status.checkName,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: verified,
    nowIso,
  });
  if (!reg.ok) return { ok: false, reason: reg.reason };
  return {
    ok: true,
    evidenceId,
    conclusion: status.conclusion,
    status: verified ? "verified" : "failed",
  };
}

export async function recordReviewStatusEvidence(input: {
  reviewPort: GitReviewStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  forcedState?: "approved" | "changes_requested" | "commented" | "pending";
}): Promise<
  | { ok: true; evidenceId: string; state: string; status: "verified" | "failed" }
  | { ok: false; reason: string }
> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const status =
    input.forcedState != null
      ? { state: input.forcedState }
      : await input.reviewPort.getReviewStatus({
          repositoryRef: input.repositoryRef,
          prNumber: input.prNumber,
        });
  const verified = status.state === "approved";
  const evidenceId = `ev:git-review:${input.prNumber}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:review_status",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: input.prNumber,
      state: status.state,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: verified,
    nowIso,
  });
  if (!reg.ok) return { ok: false, reason: reg.reason };
  return {
    ok: true,
    evidenceId,
    state: status.state,
    status: verified ? "verified" : "failed",
  };
}

export async function verifyMergeClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedPrNumber: number;
  claimedMergeSha?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; mergeCommitSha: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const info = await input.repositoryRead.getMergeInfo({
    repositoryRef: input.repositoryRef,
    prNumber: input.claimedPrNumber,
  });
  if (!info) {
    return { ok: false, reason: "merge_info_not_found", status: "reported" };
  }
  if (info.state !== "merged" || !info.mergeSha) {
    return { ok: false, reason: "pr_not_merged", status: "failed" };
  }
  if (
    input.claimedMergeSha &&
    info.mergeSha.toLowerCase() !== input.claimedMergeSha.toLowerCase()
  ) {
    return { ok: false, reason: "merge_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-merge-verified:${info.mergeSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:merge",
    payload: {
      repositoryRef: input.repositoryRef,
      mergeCommitSha: info.mergeSha,
      baseRef: info.targetBranch,
      prNumber: info.prNumber,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: true,
    nowIso: input.nowIso,
  });
  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
  return {
    ok: true,
    evidenceId,
    mergeCommitSha: info.mergeSha,
    status: "verified",
  };
}

export async function verifyPostMergeEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  repositoryRead?: RepositoryReadPort;
  repositoryRef: string;
  targetBranch: string;
  targetSha: string;
  artifactPath: string;
  artifactDigest: Digest;
  expectedTargetSha: string;
  observedTargetSha: string;
  expectedArtifactDigest: Digest;
  observedArtifactDigest: Digest;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  verifyPort?: PostMergeVerifyPort;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  // When a read port is supplied, prefer independently observed facts.
  let observedTargetSha = input.observedTargetSha;
  let observedArtifactDigest = input.observedArtifactDigest;
  if (input.repositoryRead) {
    const head = await input.repositoryRead.getBranchHead({
      repositoryRef: input.repositoryRef,
      branch: input.targetBranch,
    });
    if (head) observedTargetSha = head;
    if (input.repositoryRead.readArtifactDigestAtRef) {
      const dig = await input.repositoryRead.readArtifactDigestAtRef({
        repositoryRef: input.repositoryRef,
        path: input.artifactPath,
        ref: observedTargetSha,
      });
      if (dig) observedArtifactDigest = dig;
    }
  }

  const nowIso = input.nowIso ?? new Date().toISOString();
  const verify = input.verifyPort?.verify ?? verifyPostMerge;
  const result = verify({
    expectedTargetSha: input.expectedTargetSha,
    observedTargetSha,
    expectedArtifactDigest: input.expectedArtifactDigest,
    observedArtifactDigest,
    artifactPath: input.artifactPath,
  });
  if (!result.ok) {
    return { ok: false, reason: result.reasons.join(",") || "post_merge_failed" };
  }
  const evidenceId = `ev:git-post-merge:${input.targetSha.slice(0, 12)}`;
  return registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:post_merge_verification",
    payload: {
      repositoryRef: input.repositoryRef,
      targetBranch: input.targetBranch,
      targetSha: observedTargetSha,
      artifactPath: input.artifactPath,
      artifactDigest: observedArtifactDigest,
    },
    bindings: input.bindings,
    actor: input.actor,
    studioVerified: true,
    nowIso,
  });
}

/** @deprecated Aliases — mutation evidence actions removed (D-GCEC-09). */
export type GitEffectActor = GitVerifyActor;
export type GitEffectBindings = GitVerifyBindings;

```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts`
```typescript
/**
 * CR-GCEC-05 — qualify a SET of typed git evidence for completion proof.
 * Single-row post_merge alone is NOT enough for GCEC-bound cycles.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  isTypedGitEvidenceSource,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";

export type GitCompletionProofFamily =
  | "git:local_commit"
  | "git:remote_push"
  | "git:pull_request"
  | "git:ci_status"
  | "git:review_status"
  | "git:merge"
  | "git:post_merge_verification";

export const GCEC_GIT_COMPLETION_PROOF_FAMILIES: readonly GitCompletionProofFamily[] =
  [
    "git:local_commit",
    "git:remote_push",
    "git:pull_request",
    "git:ci_status",
    "git:review_status",
    "git:merge",
    "git:post_merge_verification",
  ] as const;

export type QualifyGitCompletionProofSetExpected = {
  repositoryRef: string;
  targetPath: string;
  artifactDigest: string;
  cycleInstanceId: string;
  executionContractId?: string;
  projectId?: string;
};

export type QualifyGitCompletionProofSetResult =
  | { status: "SATISFIED"; present: GitCompletionProofFamily[] }
  | {
      status: "BLOCKING";
      reason: string;
      present: GitCompletionProofFamily[];
      missing: GitCompletionProofFamily[];
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

function sourceFamily(source: string): GitCompletionProofFamily | null {
  if (
    source === "git:local_commit" ||
    source === "git:remote_push" ||
    source === "git:pull_request" ||
    source === "git:ci_status" ||
    source === "git:review_status" ||
    source === "git:merge" ||
    source === "git:post_merge_verification"
  ) {
    return source;
  }
  return null;
}

function evidenceMatchesExpected(
  evidence: Evidence,
  expected: QualifyGitCompletionProofSetExpected,
  family: GitCompletionProofFamily,
  requireVerified: boolean,
): { ok: true } | { ok: false; reason: string } {
  if (requireVerified) {
    // D-GCEC-11 — verified Evidence.status OR Studio repository-read verification marker.
    const studioVerified =
      typeof evidence.technicalResultRef === "string" &&
      evidence.technicalResultRef.startsWith("studio:repository_read_verified:");
    if (evidence.status !== "verified" && !studioVerified) {
      return { ok: false, reason: "status_not_verified" };
    }
  } else if (evidence.status !== "available" && evidence.status !== "verified") {
    return { ok: false, reason: "status_not_proof" };
  }
  if (evidence.bindings?.cycleInstanceId !== expected.cycleInstanceId) {
    return { ok: false, reason: "cycle_mismatch" };
  }
  if (
    expected.projectId &&
    evidence.bindings?.projectId &&
    evidence.bindings.projectId !== expected.projectId
  ) {
    return { ok: false, reason: "project_mismatch" };
  }
  if (
    expected.executionContractId &&
    evidence.bindings?.executionContractId &&
    evidence.bindings.executionContractId !== expected.executionContractId
  ) {
    return { ok: false, reason: "contract_mismatch" };
  }

  const loc = evidence.location ?? "";
  const q = parseLocationQuery(loc);
  const repo =
    q.repo ??
    q.repositoryRef ??
    (loc.includes(expected.repositoryRef) ? expected.repositoryRef : "");
  if (repo && repo !== expected.repositoryRef) {
    return { ok: false, reason: "repo_mismatch" };
  }

  if (family === "git:post_merge_verification") {
    const digest = q.digest ?? evidence.digest ?? "";
    if (digest && digest !== expected.artifactDigest) {
      return { ok: false, reason: "digest_mismatch" };
    }
    const artifactPath = q.artifactPath ?? q.targetPath ?? "";
    if (artifactPath && artifactPath !== expected.targetPath) {
      return { ok: false, reason: "target_path_mismatch" };
    }
  }

  if (family === "git:ci_status") {
    const conclusion = (q.conclusion ?? "").toLowerCase();
    if (conclusion && conclusion !== "success") {
      return { ok: false, reason: "ci_not_success" };
    }
  }
  if (family === "git:review_status") {
    const state = (q.state ?? "").toLowerCase();
    if (state && state !== "approved") {
      return { ok: false, reason: "review_not_approved" };
    }
  }

  return { ok: true };
}

/**
 * Qualify the full git completion proof SET for a GCEC-bound cycle.
 * Default requireVerified=true (D-GCEC-11): REPORTED ≠ VERIFIED.
 */
export function qualifyGitCompletionProofSet(input: {
  evidence: readonly Evidence[];
  requirements?: readonly GitCompletionProofFamily[];
  expected: QualifyGitCompletionProofSetExpected;
  /** When true (default), only status=verified rows satisfy. */
  requireVerified?: boolean;
}): QualifyGitCompletionProofSetResult {
  const requireVerified = input.requireVerified !== false;
  const requirements = [
    ...(input.requirements ?? GCEC_GIT_COMPLETION_PROOF_FAMILIES),
  ];
  const present: GitCompletionProofFamily[] = [];
  const missing: GitCompletionProofFamily[] = [];

  // Coherence: commit SHA must match push / PR head when present in locations.
  const shaByFamily = new Map<string, string>();

  for (const family of requirements) {
    const matches = input.evidence.filter((e) => {
      if (!isTypedGitEvidenceSource(e.source)) return false;
      return sourceFamily(e.source) === family;
    });
    if (matches.length === 0) {
      missing.push(family);
      continue;
    }
    let anyOk = false;
    let lastReason = "family_unmatched";
    for (const m of matches) {
      const check = evidenceMatchesExpected(
        m,
        input.expected,
        family,
        requireVerified,
      );
      if (check.ok) {
        const q = parseLocationQuery(m.location ?? "");
        const sha =
          q.commitSha ??
          q.headSha ??
          q.mergeCommitSha ??
          q.targetSha ??
          q.sha ??
          "";
        if (sha) shaByFamily.set(family, sha.toLowerCase());
        anyOk = true;
        break;
      }
      lastReason = check.reason;
    }
    if (!anyOk) {
      return {
        status: "BLOCKING",
        reason: lastReason,
        present,
        missing: [family, ...requirements.filter((f) => !present.includes(f) && f !== family)],
      };
    }
    present.push(family);
  }

  if (missing.length > 0) {
    return {
      status: "BLOCKING",
      reason: "incomplete_git_proof_set",
      present,
      missing,
    };
  }

  // Coherent chain: commit → push → PR head should share the same SHA when present.
  const commitSha = shaByFamily.get("git:local_commit");
  const pushSha = shaByFamily.get("git:remote_push");
  const prSha = shaByFamily.get("git:pull_request");
  const ciSha = shaByFamily.get("git:ci_status");
  if (commitSha && pushSha && commitSha !== pushSha) {
    return {
      status: "BLOCKING",
      reason: "commit_push_sha_incoherent",
      present,
      missing: [],
    };
  }
  if (pushSha && prSha && pushSha !== prSha) {
    return {
      status: "BLOCKING",
      reason: "push_pr_sha_incoherent",
      present,
      missing: [],
    };
  }
  if (prSha && ciSha && prSha !== ciSha) {
    return {
      status: "BLOCKING",
      reason: "pr_ci_sha_incoherent",
      present,
      missing: [],
    };
  }

  return { status: "SATISFIED", present };
}

/** Map evidenceRequirements strings (git:*) onto proof families. */
export function gitProofFamiliesFromRequirements(
  requirements: readonly string[],
): GitCompletionProofFamily[] {
  const out: GitCompletionProofFamily[] = [];
  for (const r of requirements) {
    const t = r.trim();
    // Accept both git:local_commit and git:commit aliases from Nora intent.
    const normalized =
      t === "git:commit"
        ? "git:local_commit"
        : t === "git:push"
          ? "git:remote_push"
          : t;
    if (
      normalized === "git:local_commit" ||
      normalized === "git:remote_push" ||
      normalized === "git:pull_request" ||
      normalized === "git:ci_status" ||
      normalized === "git:review_status" ||
      normalized === "git:merge" ||
      normalized === "git:post_merge_verification"
    ) {
      if (!out.includes(normalized)) out.push(normalized);
    }
  }
  return out.length > 0 ? out : [...GCEC_GIT_COMPLETION_PROOF_FAMILIES];
}

export type { TypedGitEvidenceSource };

```

## MODIFIED `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
```typescript
/**
 * StartExecution — normative RTA5-09 sequence.
 *
 *  1. Preconditions: authorization, TTL, agent_selection Confirmation when the
 *     strategy is human_confirmed_proposal, registry revalidation, active
 *     index, OCC.
 *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
 *     launches before an `accepted` Attempt exists (anti launch-then-persist).
 *  3. The contract stays `confirmed` while the Attempt is `accepted`.
 *  4. Fixture path: only the injected fake adapter `launch(attemptId)` is
 *     called; it is idempotent. REAL path (`cursor_cli_real`) NEVER calls the
 *     fixture adapter — it uses RealExecutionLaunchPort + safety journal.
 *  5. Launch reject/failure → Attempt `failed`, never `executing`.
 *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
 *     `executing`, then the agent_selection Confirmation is consumed.
 *  7. Contract update failure after `running` → fail-closed compensation of
 *     the Attempt, audited, with no second adapter call and no business
 *     rollback.
 *
 * Contract failure mapping by cause (RTA5-09 "selon cause" ∩ modeled matrix):
 * - launch REJECT (deterministic refusal, nothing started) → contract stays
 *   `confirmed`, so an authorized Retry remains possible;
 * - launch FAIL (indeterminate adapter error) → contract `failed`.
 *
 * M4 REAL path (D-M4-01…05): Gate D consume+CREATED is atomic and precedes
 * realLaunchPort.launch; LAUNCHED is journaled before Attempt `running`.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { DecisionServices } from "@/lib/oa/decision";
import type {
  CheckExecutionAuthorization,
  ExecutionContract,
  ExecutionContractRepositoryPort,
} from "@/lib/oa/execution-contract";
import {
  computeExecutionContractSemanticFingerprint,
  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  resolveExecutionWindowForStart,
  type ResolvedExecutionWindow,
} from "@/lib/oa/execution-contract";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import {
  AGENT_SELECTION_SCOPE,
  agentMatchViolation,
  assertAgentSelectionConfirmation,
} from "../domain/invariants";
import type {
  ActorReference,
  AttemptDetailCode,
  ExecutionAttempt,
  ExecutionAttemptResult,
  StartExecutionRequest,
} from "../domain/types";
import type {
  ContractSafetyIdentity,
  GateDGrant,
} from "../domain/realLaunchSafety";
import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAdapterPort } from "../ports/executionAdapter";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import type { RealExecutionLaunchPort } from "../ports/realExecutionLaunchPort";
import type { DocsWriteLaunchSpec } from "../ports/realExecutionLaunchPort";
import { M4_BOUNDED_DOCS_WRITE_ACTION } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
import { ManagedProjectRepositoryResolver } from "../infrastructure/managedProjectRepositoryResolver";
import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
import {
  authorityFailureDetail,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

function isRealExecutionAgent(
  agent: Parameters<typeof isM4AuthorizedCursorRealAgent>[0],
): boolean {
  return (
    agent.executionMode === "cursor_cli_real" ||
    isM4AuthorizedCursorRealAgent(agent)
  );
}

const FULL_GIT_SHA_RE = /^[0-9a-f]{40}$/i;

/** Contract-bound baseHeadSha from ExecutionContract.inputs (T-A4 inputs already exist). */
export function extractContractBaseHeadSha(
  contract: ExecutionContract,
): string | null {
  const inputs = contract.inputs;
  if (!inputs || typeof inputs !== "object") return null;
  const raw = (inputs as Record<string, unknown>).baseHeadSha;
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!FULL_GIT_SHA_RE.test(trimmed)) return null;
  return trimmed.toLowerCase();
}

function asStringList(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out: string[] = [];
  for (const item of value) {
    if (typeof item !== "string") return null;
    const t = item.trim();
    if (t) out.push(t);
  }
  return out;
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t || null;
}

/**
 * Extract DocsWriteLaunchSpec from contract.inputs (CR-GCEC-02).
 * Fail-closed: returns { ok:false, reason } when required fields missing.
 */
export function extractDocsWriteLaunchSpec(
  contract: ExecutionContract,
):
  | { ok: true; spec: DocsWriteLaunchSpec; repositoryBindingIdentity?: string }
  | { ok: false; reason: string } {
  const inputs =
    contract.inputs && typeof contract.inputs === "object"
      ? (contract.inputs as Record<string, unknown>)
      : {};
  const repositoryRef =
    asNonEmptyString(inputs.repositoryRef) ??
    asNonEmptyString(inputs.targetRepositoryRef);
  const targetPath = asNonEmptyString(inputs.targetPath);
  const pathAllowlist =
    asStringList(inputs.pathAllowlist) ?? asStringList(inputs.scopeIn) ?? [];
  const artifactType =
    asNonEmptyString(inputs.artifactType) ?? "functional_design";
  const artifactBrief = asNonEmptyString(inputs.artifactBrief);
  const contentRequirements = asStringList(inputs.contentRequirements) ?? [];
  const scopeIn = asStringList(inputs.scopeIn) ?? pathAllowlist;
  const scopeOut = asStringList(inputs.scopeOut) ?? [];
  const expectedOutputs =
    asStringList(inputs.expectedOutputs) ??
    (Array.isArray(contract.expectedOutputs)
      ? asStringList(contract.expectedOutputs)
      : null) ??
    (targetPath ? [targetPath] : []);
  const validationExpectations =
    asStringList(inputs.validationExpectations) ?? [];
  const evidenceRequirements =
    asStringList(inputs.evidenceRequirements) ??
    (Array.isArray(contract.evidenceRequirements)
      ? asStringList(contract.evidenceRequirements)
      : null) ??
    [];

  if (!repositoryRef) {
    return { ok: false, reason: "docs_write_repository_ref_missing" };
  }
  if (!targetPath) {
    return { ok: false, reason: "docs_write_target_path_missing" };
  }
  if (pathAllowlist.length === 0) {
    return { ok: false, reason: "docs_write_path_allowlist_missing" };
  }
  if (!artifactBrief) {
    return { ok: false, reason: "docs_write_artifact_brief_missing" };
  }
  if (contentRequirements.length === 0) {
    return { ok: false, reason: "docs_write_content_requirements_missing" };
  }

  const bindingIdentity =
    asNonEmptyString(inputs.repositoryBindingIdentity) ??
    asNonEmptyString(inputs.repositoryIdentity) ??
    repositoryRef;

  return {
    ok: true,
    spec: {
      repositoryRef,
      targetPath,
      pathAllowlist,
      artifactType,
      artifactBrief,
      contentRequirements,
      scopeIn,
      scopeOut,
      expectedOutputs: expectedOutputs ?? [],
      validationExpectations,
      evidenceRequirements: evidenceRequirements ?? [],
      createOrModify: true,
      noDelete: true,
    },
    repositoryBindingIdentity: bindingIdentity ?? undefined,
  };
}

function mapRealLaunchRejectDetail(
  reason: string,
  detailCode?: string,
): AttemptDetailCode {
  if (
    detailCode === "REAL_BOUNDARY_DISABLED" ||
    detailCode === "CURSOR_UNAVAILABLE" ||
    detailCode === "REAL_WORKSPACE_INVALID" ||
    detailCode === "REAL_LAUNCH_FAILED" ||
    detailCode === "REAL_AGENT_PROFILE_INVALID"
  ) {
    return detailCode;
  }
  if (
    reason === "studio_cursor_real_disabled" ||
    reason.includes("real_disabled")
  ) {
    return "REAL_BOUNDARY_DISABLED";
  }
  if (reason === "cursor_unavailable") return "CURSOR_UNAVAILABLE";
  if (
    reason === "workspace_invalid" ||
    reason === "workspace_outside_exec_root" ||
    reason.includes("REAL_WORKSPACE_INVALID") ||
    reason.includes("base_head_sha") ||
    reason.includes("workspace_prepare")
  ) {
    return "REAL_WORKSPACE_INVALID";
  }
  if (reason === "unresolved_contract_refused") {
    return "REAL_AGENT_PROFILE_INVALID";
  }
  return "REAL_LAUNCH_FAILED";
}

export class StartExecution {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly checkExecutionAuthorization: CheckExecutionAuthorization,
    private readonly decisionServices: DecisionServices,
    private readonly authority: AuthorityResolverPort,
    private readonly registry: AgentRegistryPort,
    private readonly adapter: ExecutionAdapterPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store?: ExecutionAttemptTechnicalStorePort,
    private readonly realLaunchPort?: RealExecutionLaunchPort,
    private readonly safetyJournal?: RealLaunchSafetyJournalPort,
    /**
     * D-GCEC-09/13 — server-only managed repository root base.
     * Resolves Project.repositoryBinding.identity → local clone.
     * MUST NOT come from ExecutionContract / client.
     */
    private readonly managedRepoRootBase?: string,
  ) {}

  async execute(
    request: StartExecutionRequest,
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ): ExecutionAttemptResult => {
      const { attempt, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const error = createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        internalCauseRef,
        ...errorExtra,
      });
      this.audit.append({
        event: "oa.execution_attempt.started",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, attempt, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }

      // Crash-window replay: the Attempt is already running — return the same
      // state without calling the adapter a second time.
      if (attempt.status === "running") {
        const contract = await this.contracts.findById(
          attempt.executionContractId,
        );
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.execution_attempt.started",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          newStatus: "running",
          contractStatus: contract?.status,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          attempt,
          contractStatus: contract?.status,
          contractVersion: contract?.version,
          replayed: true,
          durationMs,
        };
      }
      if (attempt.status !== "accepted") {
        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`, {
          executionContractId: attempt.executionContractId,
        });
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }
      if (
        !attempt.selectionExpiresAt ||
        Date.parse(attempt.selectionExpiresAt) <= Date.parse(timestamp)
      ) {
        // Detection only: no auto-cancel (RTA5-08). A human Cancel disposes
        // of the expired Attempt and releases the active invariant.
        return fail("AGENT_SELECTION_EXPIRED", "selection_ttl_expired", {
          executionContractId: attempt.executionContractId,
        });
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      const gate = contractGateDetail(contract);
      if (gate) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: gate,
          durationMs: Date.now() - started,
        });
        return fail(gate, `contract_status_${contract.status}`, {
          executionContractId: contract.executionContractId,
        });
      }
      if (contract.version !== attempt.executionContractVersion) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: "EXECUTION_CONTRACT_STALE",
          durationMs: Date.now() - started,
        });
        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed", {
          executionContractId: contract.executionContractId,
          expectedVersion: attempt.executionContractVersion,
          currentVersion: contract.version,
        });
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch", {
          executionContractId: contract.executionContractId,
          expectedVersion: request.expectedContractVersion,
          currentVersion: contract.version,
        });
      }

      const authorization = await this.checkExecutionAuthorization.execute({
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        actor: request.actor,
        authorityEvidenceId: request.authorityEvidenceId,
        correlationId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authorization.ok) {
        return fail(
          mapContractAuthorizationDetail(authorization.error.detailCode),
          `check_authorization_${authorization.error.detailCode}`,
          { executionContractId: contract.executionContractId },
        );
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }
      const agentViolation = agentMatchViolation(agent, {
        requiredCapabilities: [...contract.requiredCapabilities],
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
      });
      if (agentViolation) {
        return fail(agentViolation.detailCode, agentViolation.reason, {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }

      let consumeConfirmationId: string | undefined;
      if (attempt.selectionStrategy === "human_confirmed_proposal") {
        if (!attempt.agentConfirmationRef) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_ref_missing",
          );
        }
        const confirmation = await this.decisionServices.confirmations.findById(
          attempt.agentConfirmationRef,
        );
        if (!confirmation) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_not_found",
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        const violation = assertAgentSelectionConfirmation({
          confirmationScope: confirmation.scope,
          confirmationLevel: confirmation.level,
          confirmationStatus: confirmation.status,
          confirmationActionRef: confirmation.actionRef,
          confirmationExpiresAt: confirmation.expiresAt,
          expectedBinding: {
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            selectedAgentRef: attempt.selectedAgentRef,
          },
          requiredAuthority: contract.requiredAuthority,
          selectionExpiresAt: attempt.selectionExpiresAt,
          nowIso: timestamp,
        });
        if (violation) {
          return fail(violation.detailCode, violation.reason, {
            confirmationId: attempt.agentConfirmationRef,
          });
        }
        const confirmerVerification = verifyAttemptAuthority(this.authority, {
          requiredAuthority: contract.requiredAuthority,
          actorId: confirmation.requestedTo.actorId,
          scope: AGENT_SELECTION_SCOPE,
        });
        if (!confirmerVerification.ok) {
          return fail(
            authorityFailureDetail(confirmerVerification.reason),
            `confirmer_${confirmerVerification.reason}`,
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        consumeConfirmationId = attempt.agentConfirmationRef;
      }

      try {
        await this.attempts.assertActiveIndexConsistent();
      } catch (err) {
        if (isExecutionAttemptDomainError(err)) {
          return fail(err.detailCode, err.message, {
            executionContractId: contract.executionContractId,
          });
        }
        return fail("ACTIVE_INDEX_DRIFT", "active_index_check_failed");
      }
      const active = await this.attempts.findActiveByContract(
        contract.executionContractId,
      );
      if (!active || active.attemptId !== attempt.attemptId) {
        return fail("EXECUTION_ALREADY_ACTIVE", "another_attempt_is_active", {
          executionContractId: contract.executionContractId,
        });
      }

      // M4 REAL path — never touch the fixture adapter.
      if (isRealExecutionAgent(agent)) {
        return this.executeRealLaunch({
          request,
          attempt,
          contract,
          agent,
          consumeConfirmationId,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }

      // Step 4 — fixture adapter ONLY (non-REAL agents).
      let launch;
      try {
        launch = await this.adapter.launch({
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          selectedAgentRef: attempt.selectedAgentRef,
          adapterRef: agent.adapterRef,
          correlationId,
        });
      } catch {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_threw",
          timestamp,
          correlationId,
          started,
        });
      }

      if (launch.outcome !== "ack") {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: launch.outcome,
          reason: launch.reason,
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.attemptId !== attempt.attemptId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_attempt_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.adapterId !== this.adapter.adapterId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_identity_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }

      return this.persistRunningAfterAck({
        attempt,
        contract,
        actor: request.actor,
        consumeConfirmationId,
        timestamp,
        correlationId,
        started,
        adapterIdForAudit: this.adapter.adapterId,
        fail,
      });
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }

  private async executeRealLaunch(input: {
    request: StartExecutionRequest;
    attempt: ExecutionAttempt;
    contract: ExecutionContract;
    agent: NonNullable<ReturnType<AgentRegistryPort["getAgent"]>>;
    consumeConfirmationId: string | undefined;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ) => ExecutionAttemptResult;
  }): Promise<ExecutionAttemptResult> {
    const {
      request,
      attempt,
      contract,
      agent,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      fail,
    } = input;

    if (!this.safetyJournal) {
      return fail("LAUNCH_JOURNAL_UNAVAILABLE", "safety_journal_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    if (!this.realLaunchPort) {
      return fail("REAL_BOUNDARY_DISABLED", "real_launch_port_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    if (!isM4AuthorizedCursorRealAgent(agent)) {
      return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_authorized_cursor_real", {
        selectedAgentRef: attempt.selectedAgentRef,
      });
    }

    // Contract-bound baseHeadSha BEFORE Gate D consume / CREATED (R2).
    const baseHeadSha = extractContractBaseHeadSha(contract);
    if (!baseHeadSha) {
      const raw =
        contract.inputs &&
        typeof contract.inputs === "object" &&
        "baseHeadSha" in (contract.inputs as Record<string, unknown>)
          ? (contract.inputs as Record<string, unknown>).baseHeadSha
          : undefined;
      return fail(
        raw === undefined || raw === null || raw === ""
          ? "REAL_WORKSPACE_INVALID"
          : "REAL_WORKSPACE_INVALID",
        raw === undefined || raw === null || raw === ""
          ? "contract_base_head_sha_missing"
          : "contract_base_head_sha_invalid",
        { executionContractId: contract.executionContractId },
      );
    }

    // CR-GCEC-02 — docsWriteSpec BEFORE Gate D consume (fail-closed).
    let docsWriteSpec: DocsWriteLaunchSpec | undefined;
    let repositoryBindingIdentity: string | undefined;
    let managedRepoRoot: string | undefined;
    let repositoryBinding:
      | {
          identity: string;
          remoteUrl: string;
          defaultBranch: string;
          pathRoot?: string;
        }
      | undefined;
    if (contract.action === M4_BOUNDED_DOCS_WRITE_ACTION) {
      const extracted = extractDocsWriteLaunchSpec(contract);
      if (!extracted.ok) {
        return fail("REAL_AGENT_PROFILE_INVALID", extracted.reason, {
          executionContractId: contract.executionContractId,
        });
      }
      docsWriteSpec = extracted.spec;
      repositoryBindingIdentity = extracted.repositoryBindingIdentity;

      const inputs =
        contract.inputs && typeof contract.inputs === "object"
          ? (contract.inputs as Record<string, unknown>)
          : {};
      // D-GCEC-09 — reject client/EC-supplied absolute managed roots.
      if (
        typeof inputs.managedRepoRoot === "string" &&
        inputs.managedRepoRoot.trim()
      ) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_managed_repo_root_not_ec_controlled",
          { executionContractId: contract.executionContractId },
        );
      }

      const identity =
        (typeof inputs.repositoryIdentity === "string" &&
          inputs.repositoryIdentity.trim()) ||
        (typeof inputs.repositoryBindingIdentity === "string" &&
          inputs.repositoryBindingIdentity.trim()) ||
        docsWriteSpec.repositoryRef;
      const remoteUrl =
        (typeof inputs.remoteUrl === "string" && inputs.remoteUrl.trim()) ||
        `https://github.com/${identity}.git`;
      const defaultBranch =
        (typeof inputs.defaultBranch === "string" &&
          inputs.defaultBranch.trim()) ||
        "main";
      const pathRoot =
        typeof inputs.pathRoot === "string" && inputs.pathRoot.trim()
          ? inputs.pathRoot.trim()
          : undefined;
      if (!identity) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_repository_binding_missing",
          { executionContractId: contract.executionContractId },
        );
      }
      repositoryBinding = {
        identity,
        remoteUrl,
        defaultBranch,
        ...(pathRoot ? { pathRoot } : {}),
      };

      // Server-side resolution only (D-GCEC-09/13).
      if (!this.managedRepoRootBase?.trim()) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_managed_repo_root_base_unconfigured",
          { executionContractId: contract.executionContractId },
        );
      }
      const resolver = new ManagedProjectRepositoryResolver();
      const resolved = resolver.resolveLocalRepoRoot(
        { identity },
        this.managedRepoRootBase,
      );
      if (!resolved) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_managed_repo_unresolved",
          { executionContractId: contract.executionContractId },
        );
      }
      managedRepoRoot = resolved;
    }

    const fingerprint =
      contract.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract);
    if (!fingerprint) {
      return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    const identity: ContractSafetyIdentity = {
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      semanticFingerprint: fingerprint,
    };

    if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        "ambiguous_frontier_blocks_real_start",
        { executionContractId: contract.executionContractId },
      );
    }
    const disposition =
      await this.safetyJournal.reconcileDispositionForIdentity(identity);
    if (disposition !== "CLEAR") {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        `frontier_disposition_${disposition}`,
        { executionContractId: contract.executionContractId },
      );
    }
    if (
      (await this.safetyJournal.hasKindForAttempt(
        attempt.attemptId,
        "CREATED",
      )) ||
      (await this.safetyJournal.hasKindForAttempt(
        attempt.attemptId,
        "LAUNCHED",
      ))
    ) {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        "attempt_frontier_already_present",
        { executionContractId: contract.executionContractId },
      );
    }

    const grant = await this.safetyJournal.findActiveGateDGrantForAttempt(
      attempt.attemptId,
    );
    if (!grant) {
      return fail("GATE_D_REQUIRED", "active_gate_d_grant_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    const bindingError = this.validateGateDGrantBinding({
      grant,
      attempt,
      identity,
      actorId: request.actor.actorId,
      nowIso: timestamp,
    });
    if (bindingError) {
      return fail(bindingError.detailCode, bindingError.reason, {
        executionContractId: contract.executionContractId,
      });
    }

    let consumedGrant: GateDGrant;
    try {
      const consumed = await this.safetyJournal.consumeGateDAndAppendCreated({
        grantId: grant.grantId,
        attemptId: attempt.attemptId,
        occurredAt: timestamp,
        identity,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        correlationId,
      });
      consumedGrant = consumed.grant;
    } catch (err) {
      const message = err instanceof Error ? err.message : "consume_failed";
      if (message.includes("expired")) {
        return fail("GATE_D_EXPIRED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("mismatch")) {
        return fail("GATE_D_BINDING_MISMATCH", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("ambiguous") || message.includes("frontier")) {
        return fail("LAUNCH_RECONCILIATION_REQUIRED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("consumed") || message.includes("not_granted")) {
        return fail("GATE_D_ALREADY_CONSUMED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      return fail("GATE_D_INVALID", message, {
        executionContractId: contract.executionContractId,
      });
    }

    const window = resolveExecutionWindowForStart({
      executionWindowClass: contract.executionWindowClass,
      defaultClassIfMissing:
        DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    });
    if (!window.ok) {
      return fail("ATTEMPT_INVALID", window.reason, {
        executionContractId: contract.executionContractId,
      });
    }

    let launch;
    try {
      launch = await this.realLaunchPort.launch({
        attemptId: attempt.attemptId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
        selectedAgentRef: attempt.selectedAgentRef,
        adapterRef: agent.adapterRef,
        correlationId,
        baseHeadSha,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        timeoutMs: window.resolvedMaxDurationMs,
        ...(docsWriteSpec ? { docsWriteSpec } : {}),
        ...(repositoryBindingIdentity
          ? { repositoryBindingIdentity }
          : {}),
        ...(managedRepoRoot ? { managedRepoRoot } : {}),
        ...(repositoryBinding ? { repositoryBinding } : {}),
      });
    } catch {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_threw",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: false,
      });
    }

    if (launch.outcome !== "ack" || launch.realProcessInvoked !== true) {
      const reason =
        launch.outcome === "ack" ? "real_process_not_invoked" : launch.reason;
      const detailCode = mapRealLaunchRejectDetail(
        reason,
        launch.outcome === "ack"
          ? undefined
          : "detailCode" in launch
            ? launch.detailCode
            : undefined,
      );
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode,
        reason,
        timestamp,
        correlationId,
        started,
        realProcessInvoked: Boolean(launch.realProcessInvoked),
      });
    }
    if (launch.attemptId !== attempt.attemptId) {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_attempt_binding_mismatch",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: true,
      });
    }
    if (launch.gatewayId !== this.realLaunchPort.gatewayId) {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_gateway_binding_mismatch",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: true,
      });
    }

    try {
      await this.safetyJournal.appendLaunched({
        attemptId: attempt.attemptId,
        occurredAt: timestamp,
        identity,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        grantId: consumedGrant.grantId,
        correlationId,
        processRef: launch.processRef,
        payload: { gatewayId: launch.gatewayId },
      });
    } catch (err) {
      // Process invoked; LAUNCHED missing → CREATED-only UNKNOWN; no second launch.
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.launch_failed",
        ts: timestamp,
        correlationId,
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        selectedAgentRef: attempt.selectedAgentRef,
        adapterId: this.realLaunchPort.gatewayId,
        previousStatus: "accepted",
        newStatus: "accepted",
        result: "error",
        detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
        durationMs,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
          timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          internalCauseRef:
            err instanceof Error
              ? `launched_persist_failed_after_invoke:${err.message}`
              : "launched_persist_failed_after_invoke",
        }),
        attempt,
        durationMs,
      };
    }

    return this.persistRunningAfterAck({
      attempt,
      contract,
      actor: request.actor,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      adapterIdForAudit: this.realLaunchPort.gatewayId,
      window,
      fail,
    });
  }

  private validateGateDGrantBinding(input: {
    grant: GateDGrant;
    attempt: ExecutionAttempt;
    identity: ContractSafetyIdentity;
    actorId: string;
    nowIso: string;
  }): { detailCode: AttemptDetailCode; reason: string } | null {
    const { grant, attempt, identity, actorId, nowIso } = input;
    if (grant.status === "consumed") {
      return { detailCode: "GATE_D_ALREADY_CONSUMED", reason: "grant_consumed" };
    }
    if (grant.status !== "granted") {
      return {
        detailCode: "GATE_D_INVALID",
        reason: `grant_status_${grant.status}`,
      };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(nowIso)) {
      return { detailCode: "GATE_D_EXPIRED", reason: "grant_expired" };
    }
    if (
      grant.attemptId !== attempt.attemptId ||
      grant.executionContractId !== identity.executionContractId ||
      grant.executionContractVersion !== identity.executionContractVersion ||
      grant.semanticFingerprint !== identity.semanticFingerprint ||
      grant.selectedAgentRef !== attempt.selectedAgentRef ||
      grant.actorId !== actorId
    ) {
      return {
        detailCode: "GATE_D_BINDING_MISMATCH",
        reason: "grant_binding_mismatch",
      };
    }
    return null;
  }

  private async persistRunningAfterAck(input: {
    attempt: ExecutionAttempt;
    contract: ExecutionContract;
    actor: ActorReference;
    consumeConfirmationId: string | undefined;
    timestamp: string;
    correlationId: string;
    started: number;
    adapterIdForAudit: string;
    window?: ResolvedExecutionWindow;
    fail: (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ) => ExecutionAttemptResult;
  }): Promise<ExecutionAttemptResult> {
    const {
      attempt,
      contract,
      actor,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      adapterIdForAudit,
      window,
      fail,
    } = input;

    // Step 6a — Attempt running FIRST.
    const runningAttempt: ExecutionAttempt = {
      ...attempt,
      status: "running",
      launchedAt: timestamp,
      startedAt: timestamp,
      updatedAt: timestamp,
      version: attempt.version + 1,
      ...(window
        ? {
            executionWindowClass: window.executionWindowClass,
            resolvedMaxDurationMs: window.resolvedMaxDurationMs,
          }
        : {}),
    };
    try {
      const persist = async () => {
        await this.attempts.update(runningAttempt, attempt.version);
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch (err) {
      // Fixture path: nothing real ran. REAL path after LAUNCHED: leave
      // attempt accepted; journal already has CREATED+LAUNCHED (reconcile).
      if (isExecutionAttemptDomainError(err)) {
        return fail(err.detailCode, `running_persist_${err.message}`, {
          executionContractId: contract.executionContractId,
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EXECUTION_PERSISTENCE_FAILED", "running_persist_failed", {
        executionContractId: contract.executionContractId,
      });
    }

    // Step 6b — contract executing AFTER the Attempt is running.
    const contractWrite = await this.contractStatusWriter.write({
      executionContractId: contract.executionContractId,
      expectedVersion: contract.version,
      nextStatus: "executing",
      selectedAgentRef: attempt.selectedAgentRef,
      runningAttempt: {
        attemptId: runningAttempt.attemptId,
        status: runningAttempt.status,
      },
    });
    if (!contractWrite.ok) {
      const compensated = await this.compensateAfterRunning({
        attempt: runningAttempt,
        timestamp,
        correlationId,
        started,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          internalCauseRef: contractWrite.internalCauseRef,
          currentVersion: contractWrite.currentVersion,
        }),
        attempt: compensated,
        durationMs: Date.now() - started,
      };
    }

    // Step 6c — consume the agent_selection Confirmation on success only.
    if (consumeConfirmationId) {
      const consumed = await this.decisionServices.consumeConfirmation.execute({
        confirmationId: consumeConfirmationId,
        actor,
        correlationId,
        nowIso: timestamp,
      });
      if (!consumed.ok) {
        const alreadyConsumed =
          consumed.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED";
        if (!alreadyConsumed) {
          // Residual R-T-A3-2: the Attempt is running and the contract is
          // executing; cross-store consumption cannot be rolled back.
          this.audit.append({
            event: "oa.execution_attempt.started",
            ts: timestamp,
            correlationId,
            attemptId: attempt.attemptId,
            executionContractId: contract.executionContractId,
            confirmationRef: consumeConfirmationId,
            newStatus: "running",
            contractStatus: contractWrite.contract.status,
            result: "error",
            detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
            durationMs: Date.now() - started,
          });
          return {
            ok: false,
            error: createAttemptError({
              detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
              timestamp,
              correlationId,
              attemptId: attempt.attemptId,
              executionContractId: contract.executionContractId,
              confirmationId: consumeConfirmationId,
              internalCauseRef: `consume_${consumed.error.detailCode}`,
            }),
            attempt: runningAttempt,
            durationMs: Date.now() - started,
          };
        }
      }
    }

    const durationMs = Date.now() - started;
    this.audit.append({
      event: "oa.execution_attempt.started",
      ts: timestamp,
      correlationId,
      attemptId: runningAttempt.attemptId,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      selectedAgentRef: runningAttempt.selectedAgentRef,
      adapterId: adapterIdForAudit,
      confirmationRef: consumeConfirmationId,
      previousStatus: "accepted",
      newStatus: "running",
      contractStatus: contractWrite.contract.status,
      result: "ok",
      durationMs,
    });
    this.audit.append({
      event: "oa.execution_contract.status_written",
      ts: timestamp,
      correlationId,
      attemptId: runningAttempt.attemptId,
      executionContractId: contract.executionContractId,
      contractStatus: contractWrite.contract.status,
      result: "ok",
      durationMs,
    });

    return {
      ok: true,
      attempt: structuredClone(runningAttempt),
      contractStatus: contractWrite.contract.status,
      contractVersion: contractWrite.contract.version,
      durationMs,
    };
  }

  /** Launch reject/failure → Attempt failed, never executing. */
  private async failLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    cause: "reject" | "fail";
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttemptResult> {
    const detailCode =
      input.cause === "reject"
        ? ("EXECUTION_LAUNCH_REJECTED" as const)
        : ("EXECUTION_LAUNCH_FAILED" as const);
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `EXECUTION_LAUNCH_FAILED: ${input.cause}:${input.reason}`,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    // Indeterminate adapter failure fails the contract; a deterministic
    // rejection leaves it `confirmed` so a Retry stays possible.
    let contractStatus: string | undefined;
    let contractWrite:
      | Awaited<ReturnType<ExecutionContractStatusWriter["write"]>>
      | undefined;
    if (input.cause === "fail") {
      contractWrite = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "Launch failed before execution started",
      });
      contractStatus = contractWrite.ok ? contractWrite.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.adapter.adapterId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * REAL launch failed after CREATED (or without invoke). Marks Attempt failed.
   * Journal CREATED is left in place for reconciliation (no second launch).
   */
  private async failRealLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    detailCode: AttemptDetailCode;
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
    realProcessInvoked: boolean;
  }): Promise<ExecutionAttemptResult> {
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `REAL_LAUNCH_FAILED: ${input.reason}`,
      irreversibleEffectsPossible: input.realProcessInvoked,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    let contractStatus: string | undefined;
    const indeterminate =
      input.detailCode === "REAL_LAUNCH_FAILED" ||
      input.detailCode === "CURSOR_UNAVAILABLE";
    if (indeterminate) {
      const write = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "REAL launch failed before acknowledgement",
      });
      contractStatus = write.ok ? write.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.realLaunchPort?.gatewayId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode: input.detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode: input.detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * Contract update failed AFTER the Attempt became running: compensate
   * fail-closed. No second adapter call, no business rollback.
   */
  private async compensateAfterRunning(input: {
    attempt: ExecutionAttempt;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttempt | undefined> {
    const compensated: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason:
        "EXECUTION_PERSISTENCE_FAILED: contract_executing_update_failed",
      irreversibleEffectsPossible: true,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    try {
      const persist = async () => {
        await this.attempts.update(compensated, input.attempt.version);
        await this.attempts.releaseActiveContract(
          compensated.executionContractId,
          compensated.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch {
      this.audit.append({
        event: "oa.execution_attempt.compensated",
        ts: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        newStatus: "running",
        result: "error",
        detailCode: "EXECUTION_PERSISTENCE_FAILED",
        durationMs: Date.now() - input.started,
      });
      return undefined;
    }

    this.audit.append({
      event: "oa.execution_attempt.compensated",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: compensated.attemptId,
      executionContractId: compensated.executionContractId,
      previousStatus: "running",
      newStatus: "failed",
      stopReason: compensated.stopReason,
      result: "ok",
      detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
      durationMs: Date.now() - input.started,
    });
    return compensated;
  }
}

```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`
```typescript
/**
 * CR-GCEC-04 / D-GCEC-11 — complete bounded docs-write launch.
 * Awaits observation, independently verifies workspace file effects (no stdout trust).
 */
import {
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
  parseCursorExecutionReport,
  type CursorExecutionReport,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  completeBoundedReadOnlyLaunch,
  type CompleteBoundedReadOnlyLaunchResult,
} from "./completeBoundedReadOnlyLaunch";

export type DocsWriteCompletionFacts = {
  attemptId: string;
  processRef: string;
  targetPath: string;
  digest: string;
  touchedFiles: string[];
  worktreeRef: string | null;
  stdout: string;
  /** Cursor claim report when present — never trusted alone. */
  cursorReport?: CursorExecutionReport;
};

export type CompleteBoundedDocsWriteLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: DocsWriteCompletionFacts;
    }
  | Extract<
      CompleteBoundedReadOnlyLaunchResult,
      { ok: true; status: "running" | "failed" | "timeout" } | { ok: false }
    >;

function tryParseReportFromStdout(stdout: string): CursorExecutionReport | null {
  const marker = "CURSOR_EXECUTION_REPORT_JSON=";
  const idx = stdout.indexOf(marker);
  if (idx < 0) return null;
  const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
  try {
    const parsed = parseCursorExecutionReport(JSON.parse(json));
    return parsed.ok ? parsed.report : null;
  } catch {
    return null;
  }
}

export async function completeBoundedDocsWriteLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /** Expected relative target path (from docsWriteSpec / EC.inputs). */
  targetPath?: string;
  pathAllowlist?: readonly string[];
}): Promise<CompleteBoundedDocsWriteLaunchResult> {
  const base = await completeBoundedReadOnlyLaunch({
    attempt: input.attempt,
    services: input.services,
  });
  if (!base.ok) return base;
  if (base.status !== "succeeded") {
    return base as CompleteBoundedDocsWriteLaunchResult;
  }

  const stdout = base.observation.stdout ?? "";
  const cursorReport = tryParseReportFromStdout(stdout);
  const targetPath =
    input.targetPath?.trim() ||
    cursorReport?.fileEffects?.created[0] ||
    cursorReport?.fileEffects?.modified[0] ||
    "docs/functional-design.md";
  const worktreeRef = base.observation.worktreeRef ?? null;
  const pathAllowlist =
    input.pathAllowlist ??
    (targetPath.startsWith("docs/") ? ["docs/"] : [targetPath]);

  if (!worktreeRef) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKTREE_MISSING",
      message: "Docs-write completion missing worktree for independent verify.",
    };
  }

  const verified = await verifyWorkspaceFileEffects({
    worktreePath: worktreeRef,
    pathAllowlist,
    targetPath,
    report: cursorReport,
    // Prefer independent FS check; name-status optional via porcelain from report claims alone
    // when git port unavailable — still require target bytes.
    nameStatusText:
      cursorReport?.fileEffects
        ? [
            ...(cursorReport.fileEffects.created ?? []).map((p) => `A\t${p}`),
            ...(cursorReport.fileEffects.modified ?? []).map((p) => `M\t${p}`),
            ...(cursorReport.fileEffects.deleted ?? []).map((p) => `D\t${p}`),
          ].join("\n")
        : `A\t${targetPath}`,
  });

  if (!verified.ok) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKSPACE_VERIFY_FAILED",
      message: verified.reason,
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: base.attempt,
    observation: base.observation,
    facts: {
      attemptId: input.attempt.attemptId,
      processRef: base.observation.processRef,
      targetPath: verified.targetPath,
      digest: verified.digest,
      touchedFiles: verified.touchedFiles,
      worktreeRef,
      stdout: base.facts?.stdout ?? stdout,
      ...(cursorReport ? { cursorReport } : {}),
    },
  };
}

```

## MODIFIED `projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicE2e.d0.test.ts`
```typescript
/**
 * GCEC deterministic E2E — ownership realignment (D-GCEC-09..14).
 * Cursor writes (Fake) → Studio reads/verifies → Nora reasons.
 * ZERO OpenAI REAL. ZERO Cursor REAL. ZERO remote Product Git.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  deriveCycleExitState,
  deriveFinalizationApplicability,
  qualifyGitCompletionProofSet,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
} from "@/lib/oa/cycle";
import {
  createTestEvidenceReviewServices,
  evaluateGcecArtifactEvidence,
  type Evidence,
} from "@/lib/oa/evidence-review";
import {
  FakeDocsWriteLaunchPort,
  ManagedProjectRepositoryResolver,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  deriveAuthorizedExecutionSlice,
  extractDocsWriteLaunchSpec,
  verifyWorkspaceFileEffects,
  type DocsWriteLaunchSpec,
} from "@/lib/oa/execution-attempt";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { validateExecutionIntentPayload } from "@/features/project-assistant/f2/executionIntentSchema";
import {
  FakeRepositoryReadPorts,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyCommitClaim,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  verifyPullRequestClaim,
  verifyPushClaim,
} from "@/lib/oa/git-ports";
import { createTestDecisionServices } from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const temps: string[] = [];
afterEach(() => {
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

function initManagedRepo(managedBase: string, identity: string): {
  repoRoot: string;
  baseHeadSha: string;
} {
  const resolver = new ManagedProjectRepositoryResolver();
  const sanitized = identity.replace(/[^a-zA-Z0-9._-]+/g, "__");
  const repoRoot = path.join(managedBase, sanitized);
  fs.mkdirSync(repoRoot, { recursive: true });
  git(repoRoot, ["init"]);
  git(repoRoot, ["config", "user.email", "gcec@test.local"]);
  git(repoRoot, ["config", "user.name", "GCEC Test"]);
  git(repoRoot, [
    "remote",
    "add",
    "origin",
    `https://github.com/${identity}.git`,
  ]);
  fs.writeFileSync(path.join(repoRoot, "README.md"), "# widget\n");
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  git(repoRoot, ["add", "README.md"]);
  git(repoRoot, ["commit", "-m", "init"]);
  const baseHeadSha = git(repoRoot, ["rev-parse", "HEAD"]);
  expect(resolver.resolveLocalRepoRoot({ identity }, managedBase)).toBe(
    repoRoot,
  );
  return { repoRoot, baseHeadSha };
}

describe("gcecDeterministicE2e — Cursor writes / Studio verifies", () => {
  it("A→AC: F2 intent → Fake Cursor → independent verify → CycleExit VERIFIED", async () => {
    const root = tempDir("sfia-gcec-own-");
    const managedBase = path.join(root, "managed");
    const dbPath = path.join(root, "product.sqlite");
    const identity = "acme/widget";
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, identity);

    const { resolver: doctrine } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const projects: SqliteProductProjectServices =
      createTestSqliteProductProjectServices({
        doctrineResolver: doctrine,
        dbPath,
        fixedNowIso: "2026-09-11T12:00:00.000Z",
      });
    createTestDecisionServices({
      projectServices: projects,
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });

    // A–B Project + repositoryBinding
    const created = await projects.createProject.execute({
      projectId: "prj:gcec-e2e",
      title: "GCEC E2E",
      objective: "Functional design governed cycle",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:gcec-e2e-v1",
      idempotencyKey: "idem:gcec-e2e",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const bound = await projects.setProjectRepositoryBinding.execute({
      projectId: "prj:gcec-e2e",
      actor: ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    expect(bound.ok).toBe(true);

    // D–E Fake OpenAI → F2 structured intent
    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: "GCEC E2E project",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    const ei = validateExecutionIntentPayload(
      analyzed.analysis.executionIntent,
    );
    expect(ei.ok).toBe(true);
    if (!ei.ok) return;
    expect(ei.payload.exitRequirementKinds?.length).toBeGreaterThan(0);

    const docsWriteSpec: DocsWriteLaunchSpec = {
      repositoryRef: ei.payload.targetRepositoryRef!,
      targetPath: ei.payload.targetPath!,
      pathAllowlist: ei.payload.scopeIn ?? ["docs/"],
      artifactType: ei.payload.artifactType ?? "functional_design",
      artifactBrief: ei.payload.artifactBrief!,
      contentRequirements: ei.payload.contentRequirements ?? [],
      scopeIn: ei.payload.scopeIn ?? ["docs/"],
      scopeOut: ei.payload.scopeOut ?? [],
      expectedOutputs: ei.payload.expectedOutputs ?? [ei.payload.targetPath!],
      validationExpectations: ei.payload.validationExpectations ?? [],
      evidenceRequirements: ei.payload.evidenceRequirements ?? [
        ...GCEC_GIT_COMPLETION_PROOF_FAMILIES,
      ],
      createOrModify: true,
      noDelete: true,
    };

    // H — EC inputs MUST NOT carry managedRepoRoot (server resolves).
    const contractLike = {
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      expectedOutputs: docsWriteSpec.expectedOutputs,
      evidenceRequirements: docsWriteSpec.evidenceRequirements,
      inputs: {
        repositoryRef: docsWriteSpec.repositoryRef,
        targetPath: docsWriteSpec.targetPath,
        pathAllowlist: docsWriteSpec.pathAllowlist,
        artifactType: docsWriteSpec.artifactType,
        artifactBrief: docsWriteSpec.artifactBrief,
        contentRequirements: docsWriteSpec.contentRequirements,
        scopeIn: docsWriteSpec.scopeIn,
        scopeOut: docsWriteSpec.scopeOut,
        expectedOutputs: docsWriteSpec.expectedOutputs,
        validationExpectations: docsWriteSpec.validationExpectations,
        evidenceRequirements: docsWriteSpec.evidenceRequirements,
        repositoryIdentity: identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseHeadSha,
      },
    };
    expect(extractDocsWriteLaunchSpec(contractLike as never).ok).toBe(true);

    // I–J AuthorizedExecutionSlice — filesystem only initially
    const slice0 = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:gcec-e2e",
      evidenceRequirements: docsWriteSpec.evidenceRequirements,
      confirmations: [],
    });
    expect(slice0.authorizedEffects).toContain("filesystem.create");
    expect(slice0.blockedEffects).toContain("git.commit");

    // K–M Fake Cursor docs-write; stops before Git effects
    const worktreeRoot = path.join(root, "wt");
    fs.mkdirSync(worktreeRoot, { recursive: true });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot,
      pathAllowlist: ["docs"],
    });
    const launch = await fakeLaunch.launch({
      attemptId: "xat:gcec-e2e",
      executionContractId: "xct:gcec-e2e",
      executionContractVersion: 2,
      semanticFingerprint: "fp:gcec-e2e",
      selectedAgentRef: "agent:m4-docs-write",
      adapterRef: "adp:studio-cursor-real",
      correlationId: "cor:gcec-e2e",
      baseHeadSha,
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      timeoutMs: 60_000,
      docsWriteSpec,
      repositoryBinding: {
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
      },
    });
    expect(launch.outcome).toBe("ack");
    expect(fakeLaunch.lastReport?.stoppedBeforeEffects).toContain("git.commit");

    // N — Studio independent workspace verification
    const ws = await verifyWorkspaceFileEffects({
      worktreePath: worktreeRoot,
      pathAllowlist: docsWriteSpec.pathAllowlist,
      targetPath: docsWriteSpec.targetPath,
      report: fakeLaunch.lastReport,
      nameStatusText: `A\t${docsWriteSpec.targetPath}`,
    });
    expect(ws.ok).toBe(true);
    if (!ws.ok) return;
    const artifactDigest = ws.digest;

    const cycleInstanceId = "cyc:gcec-e2e";
    const projectId = "prj:gcec-e2e";
    const executionContractId = "xct:gcec-e2e";
    const executionAttemptId = "xat:gcec-e2e";
    const bindings = {
      projectId,
      cycleInstanceId,
      executionContractId,
      executionAttemptId,
    };

    const art = await evidence.registerEvidence.execute({
      evidenceId: "ev:gcec-e2e-art",
      idempotencyKey: "idem:gcec-e2e-art",
      actor: ACTOR,
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      digest: artifactDigest as Digest,
      location: docsWriteSpec.targetPath,
      bindings,
    });
    expect(art.ok).toBe(true);
    if (!art.ok) return;
    expect(evaluateGcecArtifactEvidence(art.evidence).ok).toBe(true);

    const rb = await evidence.createReviewBundle.execute({
      reviewBundleId: "rb:gcec-e2e",
      idempotencyKey: "idem:gcec-e2e-rb",
      actor: ACTOR,
      projectId,
      cycleInstanceId,
      executionContractId,
      evidenceIds: [art.evidence.evidenceId],
    });
    expect(rb.ok).toBe(true);

    // O — CycleExitState: artifact VERIFIED, Git REQUIRED
    let exitState = deriveCycleExitState({
      projectId,
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
      },
      executionContracts: [
        {
          contractId: executionContractId,
          status: "executing",
          requiredCapabilities: ["cap:cursor.docs_write"],
          evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
          expectedOutputs: ["artifact"],
        },
      ],
      evidence: [art.evidence],
      proposedExitRequirementKinds: ei.payload.exitRequirementKinds,
    });
    expect(
      exitState.requirements.find((r) => r.kind === "artifact")?.status,
    ).toBe("VERIFIED");
    expect(exitState.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "REQUIRED",
    );
    expect(exitState.allRequiredVerified).toBe(false);

    // Q–X — Cursor-reported Git claims verified via FakeRepositoryRead (not Studio mutate)
    // Emulate Cursor having committed in disposable repo, then seed read adapter.
    const written = path.join(worktreeRoot, docsWriteSpec.targetPath);
    const dest = path.join(repoRoot, docsWriteSpec.targetPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(written, dest);
    git(repoRoot, ["add", docsWriteSpec.targetPath]);
    git(repoRoot, ["commit", "-m", "docs: functional design"]);
    const commitSha = git(repoRoot, ["rev-parse", "HEAD"]);
    const mergeSha = commitSha; // deterministic same-tree merge stand-in

    const repoRead = new FakeRepositoryReadPorts();
    repoRead.seedCommit({
      sha: commitSha,
      message: "docs: functional design",
      parents: [baseHeadSha],
    });
    repoRead.seedBranchHead("gcec/docs", commitSha);
    repoRead.seedBranchHead("main", mergeSha);
    repoRead.seedPullRequest({
      number: 42,
      title: "FD",
      state: "open",
      headSha: commitSha,
      baseBranch: "main",
      url: `https://github.com/${identity}/pull/42`,
    });
    repoRead.ciByCommit.set(commitSha, {
      conclusion: "success",
      checkName: "fake-ci",
    });
    repoRead.reviewByPr.set(42, { state: "approved" });
    repoRead.seedFileAtRef(mergeSha, docsWriteSpec.targetPath, fs.readFileSync(dest, "utf8"));

    const collected: Evidence[] = [art.evidence];
    const expected = {
      repositoryRef: identity,
      targetPath: docsWriteSpec.targetPath,
      artifactDigest,
      cycleInstanceId,
      executionContractId,
      projectId,
    };

    // P — after confirmation, Cursor would resume; Studio only verifies claims
    const vCommit = await verifyCommitClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      claimedCommitSha: commitSha,
      message: "docs: functional design",
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vCommit.ok).toBe(true);
    if (vCommit.ok) {
      const loaded = await evidence.evidenceReader.findById(vCommit.evidenceId);
      if (loaded) collected.push(loaded);
    }
    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    const vPush = await verifyPushClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      branch: "gcec/docs",
      claimedCommitSha: commitSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vPush.ok).toBe(true);
    if (vPush.ok) {
      const loaded = await evidence.evidenceReader.findById(vPush.evidenceId);
      if (loaded) collected.push(loaded);
    }

    const vPr = await verifyPullRequestClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      claimedPrNumber: 42,
      claimedHeadSha: commitSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vPr.ok).toBe(true);
    if (vPr.ok) {
      const loaded = await evidence.evidenceReader.findById(vPr.evidenceId);
      if (loaded) collected.push(loaded);
    }

    const ci = await recordCiStatusEvidence({
      ciPort: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      commitSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(ci.ok && ci.status === "verified").toBe(true);
    if (ci.ok) {
      const loaded = await evidence.evidenceReader.findById(ci.evidenceId);
      if (loaded) collected.push(loaded);
    }

    const review = await recordReviewStatusEvidence({
      reviewPort: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      prNumber: 42,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(review.ok && review.status === "verified").toBe(true);
    if (review.ok) {
      const loaded = await evidence.evidenceReader.findById(review.evidenceId);
      if (loaded) collected.push(loaded);
    }

    // V — merge executed by Fake Cursor boundary (seeded), not Studio
    repoRead.seedMergeInfo({
      prNumber: 42,
      state: "merged",
      mergeSha,
      targetBranch: "main",
      headSha: commitSha,
    });
    repoRead.seedPullRequest({
      number: 42,
      title: "FD",
      state: "merged",
      headSha: commitSha,
      baseBranch: "main",
      url: `https://github.com/${identity}/pull/42`,
    });

    const vMerge = await verifyMergeClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      claimedPrNumber: 42,
      claimedMergeSha: mergeSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vMerge.ok).toBe(true);
    if (vMerge.ok) {
      const loaded = await evidence.evidenceReader.findById(vMerge.evidenceId);
      if (loaded) collected.push(loaded);
    }

    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    const post = await verifyPostMergeEvidence({
      evidenceServices: evidence,
      repositoryRead: repoRead,
      repositoryRef: identity,
      targetBranch: "main",
      targetSha: mergeSha,
      artifactPath: docsWriteSpec.targetPath,
      artifactDigest: artifactDigest as Digest,
      expectedTargetSha: mergeSha,
      observedTargetSha: mergeSha,
      expectedArtifactDigest: artifactDigest as Digest,
      observedArtifactDigest: artifactDigest as Digest,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(post.ok).toBe(true);
    if (post.ok) {
      const loaded = await evidence.evidenceReader.findById(post.evidenceId);
      if (loaded) collected.push(loaded);
    }

    // Y — full verified proof set
    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("SATISFIED");

    exitState = deriveCycleExitState({
      projectId,
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
      },
      executionContracts: [
        {
          contractId: executionContractId,
          status: "completed",
          requiredCapabilities: ["cap:cursor.docs_write"],
          evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
          expectedOutputs: ["artifact"],
        },
      ],
      evidence: collected,
      proposedExitRequirementKinds: ei.payload.exitRequirementKinds,
    });
    expect(exitState.allRequiredVerified).toBe(true);

    const rules = deriveFinalizationApplicability({
      cycleInstanceId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: collected,
      reviewBundles: rb.ok ? [rb.reviewBundle] : [],
      executionContracts: [
        {
          contractId: executionContractId,
          status: "completed",
          requiredCapabilities: ["cap:cursor.docs_write", "cap:git"],
          evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
          action: M4_BOUNDED_DOCS_WRITE_ACTION,
        },
      ],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
      },
    });
    expect(rules.gitProofPresent).toBe(true);
    expect(rules.artifactProofPresent).toBe(true);

    // Z — without FINALIZE HD, cycle remains incomplete (assessment only here)
    expect(rules.git_repository).toBe("APPLICABLE");

    projects.dispose();
  });
});

```

## MODIFIED `projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts`
```typescript
/**
 * GCEC ownership realignment — FakeRepositoryReadPorts (READ-ONLY) + verifyPostMerge.
 * D-GCEC-09: Studio must not expose commit/push/PR/merge mutation methods.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  FakeRepositoryReadPorts,
  GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS,
  GithubCliRepositoryReadAdapter,
  verifyPostMerge,
} from "@/lib/oa/git-ports";

const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER_SHA = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const OTHER_DIGEST =
  "sha256:1111111111111111111111111111111111111111111111111111111111111111" as Digest;

describe("GCEC FakeRepositoryReadPorts (read-only)", () => {
  it("observes seeded PR / CI / review / merge without mutation methods", async () => {
    const ports = new FakeRepositoryReadPorts();
    ports.seedCommit({
      sha: FULL_SHA,
      message: "docs",
      parents: [OTHER_SHA],
    });
    ports.seedBranchHead("gcec/docs", FULL_SHA);
    ports.seedPullRequest({
      number: 1,
      title: "GCEC lot",
      state: "open",
      headSha: FULL_SHA,
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/1",
    });
    ports.ciByCommit.set(FULL_SHA, {
      conclusion: "success",
      checkName: "fake-ci",
    });
    ports.reviewByPr.set(1, { state: "approved" });
    ports.seedMergeInfo({
      prNumber: 1,
      state: "merged",
      mergeSha: OTHER_SHA,
      targetBranch: "main",
      headSha: FULL_SHA,
    });

    expect(await ports.getCommit({ repositoryRef: "acme/widget", sha: FULL_SHA })).toMatchObject({
      sha: FULL_SHA,
    });
    expect(
      await ports.getBranchHead({
        repositoryRef: "acme/widget",
        branch: "gcec/docs",
      }),
    ).toBe(FULL_SHA);
    expect(
      (await ports.getPullRequest({ repositoryRef: "acme/widget", number: 1 }))
        ?.headSha,
    ).toBe(FULL_SHA);
    expect(
      (await ports.getCiStatus({ repositoryRef: "acme/widget", commitSha: FULL_SHA }))
        .conclusion,
    ).toBe("success");
    expect(
      (
        await ports.getReviewStatus({
          repositoryRef: "acme/widget",
          prNumber: 1,
        })
      ).state,
    ).toBe("approved");
    expect(
      (await ports.getMergeInfo({ repositoryRef: "acme/widget", prNumber: 1 }))
        ?.mergeSha,
    ).toBe(OTHER_SHA);

    // Architecture: FakeRepositoryReadPorts has no mutation methods.
    expect("push" in ports).toBe(false);
    expect("commit" in ports).toBe(false);
    expect("openPullRequest" in ports).toBe(false);
    expect("mergePullRequest" in ports).toBe(false);
  });

  it("GithubCliRepositoryReadAdapter declares no mutation methods", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/git-ports/githubCliRemotePorts.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/\basync push\s*\(/);
    expect(src).not.toMatch(/\basync openPullRequest\s*\(/);
    expect(src).not.toMatch(/\basync mergePullRequest\s*\(/);
    expect(src).not.toMatch(/\basync commit\s*\(/);
    expect(src).not.toMatch(/["']pr["'],\s*["']create["']/);
    expect(src).not.toMatch(/["']pr["'],\s*["']merge["']/);
    expect(src).toMatch(/GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS/);
    void GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS;
    expect(GithubCliRepositoryReadAdapter.name).toBe(
      "GithubCliRepositoryReadAdapter",
    );
  });
});

describe("verifyPostMerge", () => {
  it("ok when sha + digest match", () => {
    expect(
      verifyPostMerge({
        expectedTargetSha: FULL_SHA,
        observedTargetSha: FULL_SHA,
        expectedArtifactDigest: DIGEST,
        observedArtifactDigest: DIGEST,
        artifactPath: "docs/functional-design.md",
      }).ok,
    ).toBe(true);
  });

  it("fails on digest or sha mismatch", () => {
    expect(
      verifyPostMerge({
        expectedTargetSha: FULL_SHA,
        observedTargetSha: OTHER_SHA,
        expectedArtifactDigest: DIGEST,
        observedArtifactDigest: DIGEST,
        artifactPath: "docs/fd.md",
      }).ok,
    ).toBe(false);
    expect(
      verifyPostMerge({
        expectedTargetSha: FULL_SHA,
        observedTargetSha: FULL_SHA,
        expectedArtifactDigest: DIGEST,
        observedArtifactDigest: OTHER_DIGEST,
        artifactPath: "docs/fd.md",
      }).ok,
    ).toBe(false);
  });
});

```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`
```typescript
/**
 * F2 — SFIA-specific execution-intent json_schema fragment (GCEC).
 * NON-AUTHORITATIVE structured intent for Nora — no REAL calls.
 * Fields align with DecisionBasis.executionBasis GCEC additives.
 */

export const F2_EXECUTION_INTENT_SCHEMA_NAME =
  "f2_execution_intent_gcec" as const;

const NULLABLE_STRING = {
  anyOf: [{ type: "string", maxLength: 2000 }, { type: "null" }],
} as const;

const STRING_ARRAY = {
  type: "array",
  items: { type: "string", maxLength: 500 },
  maxItems: 32,
} as const;

/** OpenAI-style strict json_schema fragment for structured execution intent. */
export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  properties: {
    intentKind: {
      anyOf: [
        { type: "string", enum: ["docs_write", "read_only", "other"] },
        { type: "null" },
      ],
    },
    artifactType: NULLABLE_STRING,
    targetRepositoryRef: NULLABLE_STRING,
    targetPath: NULLABLE_STRING,
    scopeIn: STRING_ARRAY,
    scopeOut: STRING_ARRAY,
    expectedOutputs: STRING_ARRAY,
    requiredCapabilities: STRING_ARRAY,
    validationExpectations: STRING_ARRAY,
    evidenceRequirements: STRING_ARRAY,
    requestedOperation: NULLABLE_STRING,
    reversibilityExpectation: {
      anyOf: [
        {
          type: "string",
          enum: ["reversible", "irreversible", "unknown"],
        },
        { type: "null" },
      ],
    },
    artifactBrief: NULLABLE_STRING,
    contentRequirements: STRING_ARRAY,
    exitRequirementKinds: STRING_ARRAY,
  },
  required: [
    "intentKind",
    "artifactType",
    "targetRepositoryRef",
    "targetPath",
    "scopeIn",
    "scopeOut",
    "expectedOutputs",
    "requiredCapabilities",
    "validationExpectations",
    "evidenceRequirements",
    "requestedOperation",
    "reversibilityExpectation",
    "artifactBrief",
    "contentRequirements",
    "exitRequirementKinds",
  ],
};

export type ExecutionIntentPayload = {
  intentKind?: string | null;
  artifactType?: string | null;
  targetRepositoryRef?: string | null;
  targetPath?: string | null;
  scopeIn?: string[];
  scopeOut?: string[];
  expectedOutputs?: string[];
  requiredCapabilities?: string[];
  validationExpectations?: string[];
  evidenceRequirements?: string[];
  requestedOperation?: string | null;
  reversibilityExpectation?: "reversible" | "irreversible" | "unknown" | null;
  artifactBrief?: string | null;
  contentRequirements?: string[];
  /** Nora-proposed exit requirement kinds (non-authoritative). */
  exitRequirementKinds?: string[];
};

function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const out: string[] = [];
  for (const item of value) {
    if (typeof item !== "string") return undefined;
    const t = item.trim();
    if (t) out.push(t.slice(0, 500));
  }
  return out;
}

function asNullableString(value: unknown): string | null | undefined {
  if (value === null) return null;
  if (value === undefined) return undefined;
  if (typeof value !== "string") return undefined;
  const t = value.trim();
  return t ? t.slice(0, 2000) : null;
}

/**
 * Validate / normalize Nora structured execution-intent payload.
 * Fail-closed on unknown shapes — never invent REAL launch fields.
 */
export function validateExecutionIntentPayload(
  raw: unknown,
):
  | { ok: true; payload: ExecutionIntentPayload }
  | { ok: false; reason: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, reason: "payload_not_object" };
  }
  const r = raw as Record<string, unknown>;
  const intentKind = asNullableString(r.intentKind);
  if (intentKind === undefined && "intentKind" in r && r.intentKind !== null) {
    return { ok: false, reason: "intent_kind_invalid" };
  }
  const reversibility = r.reversibilityExpectation;
  if (
    reversibility !== undefined &&
    reversibility !== null &&
    reversibility !== "reversible" &&
    reversibility !== "irreversible" &&
    reversibility !== "unknown"
  ) {
    return { ok: false, reason: "reversibility_invalid" };
  }

  const scopeIn = asStringArray(r.scopeIn);
  if (r.scopeIn !== undefined && scopeIn === undefined) {
    return { ok: false, reason: "scope_in_invalid" };
  }
  const scopeOut = asStringArray(r.scopeOut);
  if (r.scopeOut !== undefined && scopeOut === undefined) {
    return { ok: false, reason: "scope_out_invalid" };
  }
  const expectedOutputs = asStringArray(r.expectedOutputs);
  if (r.expectedOutputs !== undefined && expectedOutputs === undefined) {
    return { ok: false, reason: "expected_outputs_invalid" };
  }
  const requiredCapabilities = asStringArray(r.requiredCapabilities);
  if (
    r.requiredCapabilities !== undefined &&
    requiredCapabilities === undefined
  ) {
    return { ok: false, reason: "required_capabilities_invalid" };
  }
  const validationExpectations = asStringArray(r.validationExpectations);
  if (
    r.validationExpectations !== undefined &&
    validationExpectations === undefined
  ) {
    return { ok: false, reason: "validation_expectations_invalid" };
  }
  const evidenceRequirements = asStringArray(r.evidenceRequirements);
  if (
    r.evidenceRequirements !== undefined &&
    evidenceRequirements === undefined
  ) {
    return { ok: false, reason: "evidence_requirements_invalid" };
  }
  const contentRequirements = asStringArray(r.contentRequirements);
  if (
    r.contentRequirements !== undefined &&
    contentRequirements === undefined
  ) {
    return { ok: false, reason: "content_requirements_invalid" };
  }
  const exitRequirementKinds = asStringArray(r.exitRequirementKinds);
  if (
    r.exitRequirementKinds !== undefined &&
    exitRequirementKinds === undefined
  ) {
    return { ok: false, reason: "exit_requirement_kinds_invalid" };
  }

  return {
    ok: true,
    payload: {
      intentKind: intentKind ?? null,
      artifactType: asNullableString(r.artifactType) ?? null,
      targetRepositoryRef: asNullableString(r.targetRepositoryRef) ?? null,
      targetPath: asNullableString(r.targetPath) ?? null,
      scopeIn: scopeIn ?? [],
      scopeOut: scopeOut ?? [],
      expectedOutputs: expectedOutputs ?? [],
      requiredCapabilities: requiredCapabilities ?? [],
      validationExpectations: validationExpectations ?? [],
      evidenceRequirements: evidenceRequirements ?? [],
      requestedOperation: asNullableString(r.requestedOperation) ?? null,
      reversibilityExpectation:
        (reversibility as ExecutionIntentPayload["reversibilityExpectation"]) ??
        null,
      artifactBrief: asNullableString(r.artifactBrief) ?? null,
      contentRequirements: contentRequirements ?? [],
      exitRequirementKinds: exitRequirementKinds ?? [],
    },
  };
}

```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`
```typescript
/**
 * Record the structuring gate HumanDecision via OA DecisionServices (M3 durable).
 * The product runtime decision-maker is the generic Pilote actor; `authority:
 * "morris"` stays the OA domain authority class for structuring decisions.
 * Authority evidence is server-owned LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT
 * when configured; fail-closed otherwise. Client claims ignored.
 */

import { randomUUID } from "node:crypto";
import type {
  DecisionBasis,
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type {
  DecisionDto,
  F2ContextSnapshot,
  F2DecisionKind,
  ProposalDto,
} from "./types";
import {
  contextMatches,
  getProposal,
  markProposalStale,
  updateProposalStatus,
} from "./proposalStore";

/** @deprecated M2 demo actor — prefer LOCAL_MORRIS_M3_ACTOR when M3 authority enabled. */
export const LOCAL_MORRIS_ACTOR = Object.freeze({
  actorId: "actor:local-morris-demo",
  role: "decision_maker" as const,
  displayName: "Local Morris demo",
  authorityLevel: "none" as const,
});

/** @deprecated M2 demo source — M3 uses LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT. */
export const LOCAL_MORRIS_EVIDENCE_SOURCE =
  "LOCAL_PROCESS_MORRIS_DEMO_AUTHORITY" as const;

export function proposalScope(proposal: ProposalDto): string {
  return `f2-proposal:${proposal.proposalId}`;
}

function mapStatus(kind: F2DecisionKind): {
  proposalStatus:
    | "APPROVED"
    | "APPROVED_WITH_RESERVES"
    | "REFUSED"
    | "AMENDMENT_REQUIRED";
  selectedOptionId: string;
  humanStatus: "accepted" | "refused" | "amended";
} {
  switch (kind) {
    case "GO":
      return {
        proposalStatus: "APPROVED",
        selectedOptionId: "opt:go",
        humanStatus: "accepted",
      };
    case "GO_WITH_RESERVES":
      return {
        proposalStatus: "APPROVED_WITH_RESERVES",
        selectedOptionId: "opt:go-reserves",
        humanStatus: "accepted",
      };
    case "NO_GO":
      return {
        proposalStatus: "REFUSED",
        selectedOptionId: "opt:no-go",
        humanStatus: "refused",
      };
    case "AMEND":
      return {
        proposalStatus: "AMENDMENT_REQUIRED",
        selectedOptionId: "opt:amend",
        humanStatus: "amended",
      };
  }
}

function buildDecisionBasis(input: {
  proposal: ProposalDto;
  projectId: string;
  currentContext: F2ContextSnapshot;
}): DecisionBasis {
  const { proposal, projectId, currentContext } = input;
  const ei = proposal.executionIntent ?? null;
  const stablePayload = {
    proposalId: proposal.proposalId,
    objective: proposal.objective,
    scope: proposal.scope,
    outOfScope: proposal.outOfScope,
    activatedBlocks: proposal.activatedBlocks,
    expectedOutcome: proposal.expectedOutcome,
    risks: proposal.risks,
    reservations: proposal.reservations,
    stopConditions: proposal.stopConditions,
    cycleTypeId: proposal.cycleTypeId,
    recommendedProfile: proposal.recommendedProfile,
    rephrasedRequest: proposal.rephrasedRequest,
    ...(ei
      ? {
          executionIntent: {
            intentKind: ei.intentKind ?? null,
            artifactType: ei.artifactType ?? null,
            targetRepositoryRef: ei.targetRepositoryRef ?? null,
            targetPath: ei.targetPath ?? null,
            scopeIn: ei.scopeIn ?? [],
            scopeOut: ei.scopeOut ?? [],
            expectedOutputs: ei.expectedOutputs ?? [],
            requiredCapabilities: ei.requiredCapabilities ?? [],
            validationExpectations: ei.validationExpectations ?? [],
            evidenceRequirements: ei.evidenceRequirements ?? [],
            requestedOperation: ei.requestedOperation ?? null,
            reversibilityExpectation: ei.reversibilityExpectation ?? null,
            artifactBrief: ei.artifactBrief ?? null,
            contentRequirements: ei.contentRequirements ?? [],
            exitRequirementKinds: ei.exitRequirementKinds ?? [],
          },
        }
      : {}),
  };
  const cycleInstanceId =
    currentContext.activeCycleInstanceId ??
    proposal.contextSnapshot.activeCycleInstanceId ??
    undefined;
  const requestedOperation =
    (ei?.requestedOperation && ei.requestedOperation.trim()) ||
    (proposal.requestedOperation && proposal.requestedOperation.trim()) ||
    proposal.rephrasedRequest;

  return {
    sourceType: "proposal",
    sourceRef: proposal.proposalId,
    sourceDigest: computeDecisionBasisSourceDigest(stablePayload),
    projectId,
    cycleInstanceId: cycleInstanceId ?? undefined,
    proposalContext: {
      lpsId: currentContext.lpsId,
      lpsVersion: currentContext.lpsVersion,
      doctrineDigest: currentContext.doctrineDigest,
      activeCycleInstanceId: currentContext.activeCycleInstanceId ?? undefined,
      ckcResolutionRef: currentContext.ckcResolutionRef ?? undefined,
    },
    executionBasis: {
      objective: proposal.objective,
      scope: proposal.scope,
      outOfScope: [...proposal.outOfScope],
      activatedBlocks: [...proposal.activatedBlocks],
      expectedOutcome: proposal.expectedOutcome,
      risks: [...proposal.risks],
      reservations: [...proposal.reservations],
      stopConditions: [...proposal.stopConditions],
      cycleTypeId: proposal.cycleTypeId,
      recommendedProfile: proposal.recommendedProfile,
      requestedOperation,
      ...(ei
        ? {
            intentKind: ei.intentKind ?? undefined,
            artifactType: ei.artifactType ?? undefined,
            targetRepositoryRef: ei.targetRepositoryRef ?? undefined,
            targetPath: ei.targetPath ?? undefined,
            scopeIn: ei.scopeIn ? [...ei.scopeIn] : undefined,
            scopeOut: ei.scopeOut ? [...ei.scopeOut] : undefined,
            expectedOutputs: ei.expectedOutputs
              ? [...ei.expectedOutputs]
              : undefined,
            requiredCapabilities: ei.requiredCapabilities
              ? [...ei.requiredCapabilities]
              : undefined,
            validationExpectations: ei.validationExpectations
              ? [...ei.validationExpectations]
              : undefined,
            evidenceRequirements: ei.evidenceRequirements
              ? [...ei.evidenceRequirements]
              : undefined,
            reversibilityExpectation:
              ei.reversibilityExpectation ?? undefined,
            artifactBrief: ei.artifactBrief ?? undefined,
            contentRequirements: ei.contentRequirements
              ? [...ei.contentRequirements]
              : undefined,
            exitRequirementKinds: ei.exitRequirementKinds
              ? [...ei.exitRequirementKinds]
              : undefined,
          }
        : {}),
    },
  };
}

export async function recordF2Decision(input: {
  proposalId: string;
  projectId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile client fields — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  currentContext: F2ContextSnapshot;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  /** Test inject for M3 authority. */
  forceM3Authority?: boolean;
}): Promise<
  | {
      ok: true;
      decision: DecisionDto;
      proposal: ProposalDto;
    }
  | {
      ok: false;
      code: string;
      message: string;
      proposal?: ProposalDto | null;
    }
> {
  // Never trust client authority claims.
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const proposal = getProposal(input.proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposition introuvable (process-local). Aucune autorisation durable après redémarrage.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La proposition n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    const stale = markProposalStale(proposal.proposalId);
    return {
      ok: false,
      code: "STALE",
      message:
        "Contexte Project/LPS modifié — proposition STALE. Aucun GO silencieux.",
      proposal: stale,
    };
  }

  if (
    proposal.status === "STALE" ||
    proposal.status === "REFUSED" ||
    proposal.status === "AMENDMENT_REQUIRED" ||
    proposal.status === "APPROVED" ||
    proposal.status === "APPROVED_WITH_RESERVES"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_DECIDABLE",
      message: `Proposition non décidable (statut ${proposal.status}).`,
      proposal,
    };
  }

  if (!proposal.morrisGateRequired) {
    return {
      ok: false,
      code: "GATE_NOT_REQUIRED",
      message: "Aucun gate Morris requis pour cette proposition.",
      proposal,
    };
  }

  if (
    input.decisionKind === "GO_WITH_RESERVES" &&
    !(input.reservesText && input.reservesText.trim())
  ) {
    return {
      ok: false,
      code: "RESERVES_REQUIRED",
      message: "GO WITH RESERVES exige un texte de réserves explicite.",
      proposal,
    };
  }

  const scope = proposalScope(proposal);
  const issuedAt = input.nowIso();

  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    issuedAt,
    forceEnable: input.forceM3Authority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
      proposal,
    };
  }

  const mapped = mapStatus(input.decisionKind);
  const decisionId = `dec:f2:${randomUUID()}`;
  const options = [
    { optionId: "opt:go", label: "GO" },
    { optionId: "opt:go-reserves", label: "GO WITH RESERVES" },
    { optionId: "opt:no-go", label: "NO-GO" },
    { optionId: "opt:amend", label: "AMEND" },
  ];

  const reservations =
    input.decisionKind === "GO_WITH_RESERVES"
      ? [
          {
            reservationId: `rsv:${randomUUID()}`,
            statement: input.reservesText!.trim(),
            blocking: false,
          },
        ]
      : undefined;

  const isGoAccepted =
    input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES";
  const decisionBasis = isGoAccepted
    ? buildDecisionBasis({
        proposal,
        projectId: input.projectId,
        currentContext: input.currentContext,
      })
    : undefined;

  const result = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: decisionBasis?.cycleInstanceId,
    subject: `F2 gate for ${proposal.proposalId}`,
    options,
    selectedOptionId: mapped.selectedOptionId,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: mapped.humanStatus,
    reversible: true,
    scope,
    reservations,
    rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    linkToLivingProjectState: isGoAccepted,
    expectedLpsVersion: isGoAccepted
      ? input.currentContext.lpsVersion
      : undefined,
    correlationId: `f2-dec:${proposal.proposalId}`,
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      message: result.error.message,
      proposal,
    };
  }

  const updated = updateProposalStatus(proposal.proposalId, mapped.proposalStatus);
  const decision: DecisionDto = {
    decisionId,
    proposalId: proposal.proposalId,
    kind: input.decisionKind,
    statusLabel: "DÉCISION PRISE",
    humanDecisionStatus: mapped.humanStatus,
    scope,
    reservesText:
      input.decisionKind === "GO_WITH_RESERVES"
        ? input.reservesText!.trim()
        : null,
    capturedAt: issuedAt,
    readyForNextGatedStep: isGoAccepted,
    executionPerformed: false,
  };

  return { ok: true, decision, proposal: updated! };
}

```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/index.ts`
```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/ckcQualificationResult";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/cyclePersistenceUnitOfWorkPort";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export * from "./application/qualifyCycleWithCkc";
export * from "./application/bindCatalogAuthority";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export {
  assessFinalizationObligations,
  finalizeSubjectFor,
  cancelSubjectFor,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  isAcceptedFinalizeDecision,
  isAcceptedCancelDecision,
  isAcceptedStartTrajectoryDecision,
  isAcceptedResumeReplanDecision,
  FINALIZE_SUBJECT_PREFIX,
  CANCEL_SUBJECT_PREFIX,
  START_TRAJECTORY_SUBJECT_PREFIX,
  RESUME_REPLAN_SUBJECT_PREFIX,
} from "./application/assessFinalization";
export {
  assessStartReadiness,
  type AssessStartReadinessInput,
} from "./application/assessStartReadiness";
export {
  buildPauseReconciliationSnapshot,
  assessResumeReconciliation,
  trajectoryFingerprint,
  type BuildPauseSnapshotInput,
  type ResumeReconciliationInput,
  type ResumeReconciliationResult,
} from "./application/assessResumeReconciliation";
export {
  projectPilotLifecycle,
  selectLatestTerminalCycle,
  type PilotLifecycleProjection,
} from "./application/lifecycleProjection";
export * from "./application/lifecycleRecommendation";
export {
  deriveLifecycleBlockersFromEpistemicItems,
  lifecycleBlockersFromReaderFailure,
  type LifecycleBlockerSnapshot,
} from "./application/deriveLifecycleBlockers";
export {
  deriveFinalizationApplicability,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_SUBJECT_PREFIX,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_NO_ARTIFACT,
  OBLIGATION_POLICY_NO_GIT,
  OBLIGATION_POLICY_NO_EXECUTION,
  OBLIGATION_POLICY_NO_EVIDENCE,
  OBLIGATION_POLICY_NO_REVIEW,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  OBLIGATION_POLICY_REQUIRE_GIT,
  type DerivableExecutionContract,
  type DeriveFinalizationApplicabilityInput,
} from "./application/deriveFinalizationApplicability";
export {
  deriveCycleObligationSnapshot,
  applyCycleObligationSnapshotToRules,
  type CycleObligationSnapshot,
  type CycleObligationEntry,
  type CycleObligationFamily,
  type DeriveCycleObligationSnapshotInput,
} from "./application/deriveCycleObligationSnapshot";
export {
  selectEffectiveExecutionContracts,
  type SelectableExecutionContract,
  type SelectEffectiveExecutionContractsResult,
} from "./application/selectEffectiveExecutionContracts";
export {
  selectEffectiveReviewBundles,
  type SelectEffectiveReviewBundlesResult,
} from "./application/selectEffectiveReviewBundles";
export {
  hasGitRepositorySemanticMarker,
  isGitApplicableContract,
  isGitQualifyingEvidence,
  isGitCompletionProofEvidence,
  type GitQualifiableContract,
} from "./application/qualifyGitEvidence";
export {
  qualifyGitCompletionProofSet,
  gitProofFamiliesFromRequirements,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  type GitCompletionProofFamily,
  type QualifyGitCompletionProofSetExpected,
  type QualifyGitCompletionProofSetResult,
} from "./application/qualifyGitCompletionProofSet";
export {
  deriveCycleExitState,
  summarizeCycleExitState,
  cycleExitGitFamiliesRequired,
  type CycleExitState,
  type CycleExitRequirement,
  type CycleExitRequirementKind,
  type CycleExitRequirementStatus,
  type DeriveCycleExitStateInput,
} from "./application/cycleExitState";
export { isTypedGitEvidenceSource } from "@/lib/oa/evidence-review";
export {
  PilotLifecycleTransitions,
  type PilotLifecycleDeps,
  type PilotLifecycleAuthorityPort,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
} from "./application/pilotLifecycleTransitions";
export * from "./domain/lifecycleInvariants";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
  resolveTrajectoryLineageHead,
} from "./application/proposeTrajectoryVersion";
export { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";
export {
  createSqliteCycleServices,
  createTestSqliteCycleServices,
  type CreateSqliteCycleServicesOptions,
  type SqliteCycleServices,
} from "./infrastructure/sqlite/createSqliteCycleServices";
export { SqliteCycleRepository } from "./infrastructure/sqlite/sqliteCycleRepository";
export { SqliteCycleAuditJournal } from "./infrastructure/sqlite/sqliteCycleAuditJournal";

import type { ClockPort, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  FixedClock,
  PRODUCT_DOCTRINE_PACKAGE_ID,
  SystemClock,
} from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import {
  QualifyCycleWithCkc,
  type QualifyCycleExecutor,
} from "./application/qualifyCycleWithCkc";
import {
  bindCycleTypeCatalogAuthority,
  verifyCycleTypeCatalogAuthority,
} from "./application/bindCatalogAuthority";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import {
  PilotLifecycleTransitions,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
  type PilotLifecycleAuthorityPort,
} from "./application/pilotLifecycleTransitions";
import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
import type { FinalizationApplicabilityRules } from "./domain/types";
import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "./ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "./ports/cycleRepository";
import type { CkcResolverPort } from "./ports/ckcResolver";
import type { CkcQualificationResolverPort } from "./ports/ckcQualificationResolver";
import type { EpistemicRepositoryPort } from "./ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "./ports/trajectoryRepository";

export type CycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  epistemic: EpistemicRepositoryPort;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  /** W2: candidate → decided/current promotion, decisionRef mandatory. */
  promoteDecidedTrajectory: PromoteDecidedTrajectory;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
  /** CORR-PROOF-05 Pilot lifecycle transitions. */
  pilotLifecycle: PilotLifecycleTransitions;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  /**
   * CR-START-01 — inject QualifyCycleWithCkc so trajectory-bound START cannot
   * bypass CKC revalidation (single adjacent wiring point).
   */
  qualifyCycleWithCkc?: import("./application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady").QualifyCycleWithCkcPort;
  applicabilityRules?: FinalizationApplicabilityRules;
};

export type CkcQualificationServices = {
  readonly audit: CycleAuditPort;
  readonly resolver: CkcQualificationResolverPort;
  readonly qualifyCycleWithCkc: QualifyCycleWithCkc;
};

export type CreateCkcQualificationServicesOptions = {
  readonly clock?: ClockPort;
  readonly audit?: CycleAuditPort;
  readonly resolver?: CkcQualificationResolverPort;
  readonly registryRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly productResolverFactory?: (
    audit: CycleAuditPort,
    registryRoot: string,
  ) => CkcQualificationResolverPort;
  readonly qualifyCycle?: QualifyCycleExecutor;
  /**
   * Optional HASH-A-bound catalog authority (test-only future snapshots).
   * Cryptographically verified before use; forged fingerprints fail closed
   * on QualifyCycleWithCkc (R-W3D-03). Prefer {@link catalogSnapshot} when
   * injecting N+1 content — factory binds HASH-A itself.
   */
  readonly catalogAuthority?: CycleTypeCatalogAuthority;
  /**
   * Optional raw catalog snapshot. Factory binds HASH-A via
   * bindCycleTypeCatalogAuthority — callers cannot supply a forged fingerprint.
   * Mutually preferred over an unverified catalogAuthority when both are set.
   */
  readonly catalogSnapshot?: Pick<CycleTypeCatalog, "entries">;
};

function resolveCkcQualificationCatalogAuthority(
  options: CreateCkcQualificationServicesOptions,
): CycleTypeCatalogAuthority {
  if (options.catalogSnapshot) {
    return bindCycleTypeCatalogAuthority(options.catalogSnapshot);
  }
  if (options.catalogAuthority) {
    // Do not re-bind silently: QualifyCycleWithCkc verifies cryptographically
    // and returns CATALOG_FINGERPRINT_STALE for forged authorities.
    if (!verifyCycleTypeCatalogAuthority(options.catalogAuthority)) {
      return options.catalogAuthority;
    }
    return options.catalogAuthority;
  }
  return DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY;
}

function usesProductDoctrinePin(pin?: DoctrinePackagePin): boolean {
  return pin?.doctrinePackageId === PRODUCT_DOCTRINE_PACKAGE_ID;
}

function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
  readonly hasFailed: () => boolean;
} {
  let failed = false;
  return {
    append(event): void {
      if (failed) {
        throw new Error("Audit sink unavailable.");
      }
      try {
        audit.append(event);
      } catch {
        failed = true;
        throw new Error("Audit sink unavailable.");
      }
    },
    hasFailed: () => failed,
  };
}

/**
 * Default CKC resolver selection (COR-W1-07).
 *
 * Product doctrine pin (`pkg:sfia-studio-doctrine-v3`) ALWAYS selects the
 * product-bound resolver path. Missing/invalid registryRoot must fail closed
 * as Product CKC unavailable — NEVER silently fall back to method-candidate.
 *
 * Explicit `options.resolver` injection remains for deliberate test/DI only.
 */
function createDefaultCkcQualificationResolver(
  options: CreateCkcQualificationServicesOptions,
  audit: CycleAuditPort,
): CkcQualificationResolverPort {
  if (usesProductDoctrinePin(options.doctrinePackagePin)) {
    const pin = options.doctrinePackagePin!;
    return new CkcQualificationResolver(undefined, audit, {
      // Empty/absent root is handled fail-closed inside product index load.
      registryRoot: options.registryRoot ?? "",
      doctrinePackageId: pin.doctrinePackageId,
      packageVersion: pin.version,
      packageDigest: pin.digest,
    });
  }
  return new CkcQualificationResolver(undefined, audit);
}

/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
export function createCkcQualificationServices(
  options: CreateCkcQualificationServicesOptions = {},
): CkcQualificationServices {
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const failureAwareAudit = createFailureAwareAudit(audit);
  const resolver =
    options.resolver ??
    createDefaultCkcQualificationResolver(options, failureAwareAudit);
  const qualifyCycle =
    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

  return Object.freeze({
    audit,
    resolver,
    qualifyCycleWithCkc: new QualifyCycleWithCkc(
      resolver,
      qualifyCycle,
      clock,
      failureAwareAudit,
      resolveCkcQualificationCatalogAuthority(options),
    ),
  });
}

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
    pilotLifecycle: new PilotLifecycleTransitions({
      cycles,
      trajectories,
      projectServices: options.projectServices,
      clock,
      audit,
      store,
      decisions: options.decisions,
      evidence: options.evidence,
      reviewBundles: options.reviewBundles,
      execution: options.execution,
      epistemic: options.epistemic ?? {
        listByProject: (projectId) => epistemic.listByProject(projectId),
      },
      authority: options.authority,
      qualifyCycleWithCkc: options.qualifyCycleWithCkc,
      applicabilityRules: options.applicabilityRules,
    }),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}

```

## MODIFIED `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`
```typescript
/**
 * T-A3 Decision / Confirmation / Authority — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A3-scoped only.
 *
 * Dual enums are intentional:
 * - HumanDecision.authority: morris | delegated | system_non_structuring
 * - Confirmation.level / ActorReference.authorityLevel: N1 | N2 | N3 | none
 *
 * Actor.authorityLevel MUST NOT be trusted from the client — verify via
 * AuthorityResolverPort. N3 verified level does NOT automatically grant Morris
 * gate; HumanDecision.authority === "morris" requires explicit evidence flag
 * `canActAsMorris: true` (or dedicated morrisGrant).
 */

import type {
  ActorReference,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type { ActorReference, ProvenanceRecord };

/** Alias used in modeled docs — same shape as doctrine ActorReference. */
export type OaActorReference = ActorReference;

export type DecisionAuthority =
  | "morris"
  | "delegated"
  | "system_non_structuring";

export type HumanDecisionStatus =
  | "proposed"
  | "required"
  | "accepted"
  | "refused"
  | "amended"
  | "superseded"
  | "revoked";

export type ConfirmationLevel = "N1" | "N2" | "N3";

export type ConfirmationStatus =
  | "requested"
  | "granted"
  | "refused"
  | "expired"
  | "cancelled"
  | "consumed"
  | "superseded";

export type AuthorityLevel = "N1" | "N2" | "N3";

export type DecisionOption = {
  optionId: string;
  label: string;
  impacts?: string[];
  recommended?: boolean;
};

export type DecisionReservation = {
  reservationId: string;
  statement: string;
  blocking?: boolean;
};

/** Minimal embedded basis for durable GO → PREPARE (generic T-A3; no F2 imports). */
export type DecisionBasisProposalContext = {
  lpsId: string;
  lpsVersion: number;
  doctrineDigest?: string;
  activeCycleInstanceId?: string;
  ckcResolutionRef?: string;
};

/**
 * W2 — durable linkage from a structuring HumanDecision to the Option set it
 * arbitrated and to the trajectory version it is allowed to promote.
 * Options are described by reference/label only: a Recommendation recorded
 * here is never itself a decision.
 */
export type DecisionBasisTrajectoryContext = {
  /** Trajectory aggregate the decision arbitrates. */
  trajectoryId: string;
  /** Candidate (proposed) version the decision may promote. */
  candidateVersion: number;
  /** Option refs presented to the Pilote, in presentation order. */
  optionRefs: string[];
  /** Option the Pilote selected — must belong to optionRefs. */
  selectedOptionRef: string;
  /** Option that Nora recommended, when any. Never a decision. */
  recommendedOptionRef?: string;
  /** Durable Epistemic item refs materializing the options/recommendation. */
  epistemicRefs?: string[];
  /** W2 A2 — digest of the exact presented OptionSet sealed at propose. */
  optionSetDigest?: string;
};

/**
 * D-GF-HD-01 — greenfield unary APPROVAL of a pre-cycle candidate trajectory.
 * Links the Pilote HumanDecision to the exact candidate + provenance Observation.
 * Not a W2 OptionSet. Not a proposal.
 */
export type DecisionBasisCandidateTrajectoryContext = {
  trajectoryId: string;
  candidateVersion: number;
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  /** Digest of material candidate fields (id/version/status/steps). */
  candidateContentDigest: string;
  /** Digest of the exact material object presented to the Pilote. */
  presentationDigest: string;
  /**
   * D-GF-START-01 — six sealed qualification signals from the source LR.
   * Optional for legacy HD; REQUIRED for new greenfield prepare path.
   */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  };
};

export type DecisionBasisSourceType =
  | "proposal"
  | "trajectory_option"
  | "candidate_trajectory";

export type DecisionBasis = {
  sourceType: DecisionBasisSourceType;
  /**
   * Opaque source id:
   * - proposal id, or
   * - trajectory option-set ref, or
   * - candidate trajectoryId (D-GF-HD-01).
   */
  sourceRef: string;
  /** SHA-256 hex of canonical JSON over stable source fields. */
  sourceDigest: string;
  projectId: string;
  cycleInstanceId?: string;
  proposalContext: DecisionBasisProposalContext;
  /** Present when sourceType is `trajectory_option` (W2 only). */
  trajectoryContext?: DecisionBasisTrajectoryContext;
  /** Present when sourceType is `candidate_trajectory` (greenfield only). */
  candidateTrajectoryContext?: DecisionBasisCandidateTrajectoryContext;
  executionBasis: {
    objective?: string;
    scope?: string;
    outOfScope?: string[];
    activatedBlocks?: string[];
    expectedOutcome?: string;
    risks?: string[];
    reservations?: string[];
    stopConditions?: string[];
    cycleTypeId?: string;
    recommendedProfile?: string;
    requestedOperation?: string;
    /**
     * GCEC — structured NON-AUTHORITATIVE execution intent (D-GCEC).
     * Recommendation/proposal context only — ≠ HumanDecision ≠ authority.
     */
    intentKind?: string;
    artifactType?: string;
    targetRepositoryRef?: string;
    targetPath?: string;
    scopeIn?: string[];
    scopeOut?: string[];
    expectedOutputs?: string[];
    requiredCapabilities?: string[];
    validationExpectations?: string[];
    evidenceRequirements?: string[];
    reversibilityExpectation?: "reversible" | "irreversible" | "unknown";
    /** GCEC — non-authoritative artifact brief from Nora executionIntent. */
    artifactBrief?: string;
    /** GCEC — non-authoritative content requirements from Nora executionIntent. */
    contentRequirements?: string[];
    /** GCEC — Nora-proposed exit requirement kinds (non-authoritative). */
    exitRequirementKinds?: string[];
  };
};

export type HumanDecision = {
  schemaVersion: "0.1.0-oa";
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  status: HumanDecisionStatus;
  effectiveAt: string;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  supersedes?: string;
  provenance?: ProvenanceRecord;
  /** Optimistic concurrency token — incremented on supersede of this record. */
  version?: number;
  /** M3: embedded basis for exact ExecutionContract preparation. */
  decisionBasis?: DecisionBasis;
};

export type Confirmation = {
  schemaVersion: "0.1.0-oa";
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  status: ConfirmationStatus;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  confirmedAt?: string;
  cancelledAt?: string;
  provenance?: ProvenanceRecord;
};

/**
 * Authority evidence registry record.
 * `canActAsMorris` is SEPARATE from level N3 — N3 ≠ Morris gate.
 */
export type AuthorityEvidence = {
  evidenceId: string;
  actorId: string;
  level: AuthorityLevel;
  scope: string;
  issuedAt: string;
  expiresAt?: string;
  source: string;
  /** Explicit Morris-gate grant. Absent/false → cannot claim authority=morris. */
  canActAsMorris?: boolean;
};

export type VerifyAuthorityRequest = {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  /** Hostile injection — IGNORED. Never trusted. */
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
  /** When true, also require canActAsMorris on matching evidence. */
  requireMorrisGate?: boolean;
};

export type VerifyAuthorityResult = {
  ok: boolean;
  verifiedLevel?: AuthorityLevel;
  canActAsMorris?: boolean;
  reason:
    | "verified"
    | "no_evidence"
    | "expired"
    | "level_insufficient"
    | "scope_mismatch"
    | "morris_gate_denied"
    | "evidence_not_found"
    | "actor_mismatch";
  evidenceId?: string;
};

export type RecordHumanDecisionRequest = {
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  /**
   * Claimed decision authority. For "morris", AuthorityResolver must verify
   * N3 + canActAsMorris. Never inferred from actorId/displayName.
   */
  authority: DecisionAuthority;
  status?: HumanDecisionStatus;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  /** Required when authority === system_non_structuring. */
  nonStructuring?: boolean;
  /** Authority evidence id to verify against registry. */
  authorityEvidenceId?: string;
  /**
   * When accepting and another accepted decision exists for the same subject,
   * supersede it (default) or refuse with STATE_CONFLICT.
   */
  supersedeExistingAccepted?: boolean;
  /** After accept: append DecisionRef via public Cycle epistemic API. */
  linkEpistemicDecisionRef?: boolean;
  epistemicItemId?: string;
  /** After accept: append decisionId onto LPS via T-A1 append. */
  linkToLivingProjectState?: boolean;
  expectedLpsVersion?: number;
  /** M3: embed DecisionBasis on the durable HumanDecision. */
  decisionBasis?: DecisionBasis;
  correlationId?: string;
};

export type SupersedeHumanDecisionRequest = {
  newDecisionId: string;
  supersedesDecisionId: string;
  selectedOptionId: string;
  options?: DecisionOption[];
  actor: OaActorReference;
  authority: DecisionAuthority;
  reversible: boolean;
  reason: string;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  nonStructuring?: boolean;
  authorityEvidenceId?: string;
  /** OCC: expected version of the decision being superseded. */
  expectedVersion?: number;
  correlationId?: string;
};

export type RequestConfirmationRequest = {
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  correlationId?: string;
};

export type GrantConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  authorityEvidenceId?: string;
  /** Hostile injection — ignored. */
  claimedAuthorityLevel?: AuthorityLevel | "none";
  correlationId?: string;
};

export type RefuseConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  rationale?: string;
  correlationId?: string;
};

export type ConsumeConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
  /** Wall-clock override for expiry checks (tests). */
  nowIso?: string;
};

export type CancelConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
};

export type GetHumanDecisionRequest = {
  decisionId: string;
  correlationId?: string;
};

export type ListDecisionHistoryRequest = {
  projectId?: string;
  subject?: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to Decision/Confirmation/Authority. */
export type DecisionModeledErrorCode =
  | "DECISION_REQUIRED"
  | "CONFIRMATION_REQUIRED"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE";

/**
 * T-A3 detail codes — finer than modeled ErrorRecord enum.
 * AUTHORITY_SCOPE_MISMATCH maps to AUTHORITY_DENIED (modeled enum has no scope code).
 */
export type DecisionDetailCode =
  | "DECISION_INVALID"
  | "DECISION_ALREADY_EXISTS"
  | "DECISION_NOT_FOUND"
  | "DECISION_REQUIRED"
  | "CONFIRMATION_INVALID"
  | "CONFIRMATION_ALREADY_EXISTS"
  | "CONFIRMATION_NOT_FOUND"
  | "CONFIRMATION_REQUIRED"
  | "CONFIRMATION_EXPIRED"
  | "CONFIRMATION_ALREADY_CONSUMED"
  | "CONFIRMATION_IDEMPOTENCY_CONFLICT"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "PROJECT_NOT_FOUND"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_PROJECT_MISMATCH"
  | "STATE_CONFLICT"
  | "VERSION_CONFLICT"
  | "LPS_VERSION_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type DecisionStructuredError = {
  code: DecisionModeledErrorCode;
  detailCode: DecisionDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "E";
  correlationId?: string;
  projectId?: string;
  decisionId?: string;
  confirmationId?: string;
  subject?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type DecisionSuccess = {
  ok: true;
  decision: HumanDecision;
  supersededDecisionIds?: string[];
  epistemicItemId?: string;
  livingProjectStateVersion?: number;
  durationMs: number;
};

export type DecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type DecisionResult = DecisionSuccess | DecisionFailure;

export type GetDecisionSuccess = {
  ok: true;
  decision: HumanDecision;
};

export type GetDecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type GetDecisionResult = GetDecisionSuccess | GetDecisionFailure;

export type ListDecisionsSuccess = {
  ok: true;
  decisions: HumanDecision[];
};

export type ListDecisionsFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type ListDecisionsResult = ListDecisionsSuccess | ListDecisionsFailure;

export type ConfirmationSuccess = {
  ok: true;
  confirmation: Confirmation;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
};

export type ConfirmationFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type ConfirmationResult = ConfirmationSuccess | ConfirmationFailure;

export type VerifyAuthorityUseCaseResult = {
  ok: true;
  result: VerifyAuthorityResult;
  durationMs: number;
};

```

## MODIFIED `projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts`
```typescript
/**
 * T-A6-D1 Evidence core — domain types (Option A v3-native).
 *
 * Modeled reference: evidence.schema.json schemaVersion 0.2.0-oa.
 * Runtime OCC `version` / `idempotencyKey` / timestamps follow T-A5 conventions
 * and are NOT claimed as modeled schema fields.
 *
 * Attempt is a source binding, never the Evidence owner.
 * No ReviewBundle / ClaimEvaluation / MaturityAssessment in D1.
 */

import type {
  ActorReference,
  Digest,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export type { ActorReference, Digest, ProvenanceRecord };

export const EVIDENCE_SCHEMA_VERSION = "0.2.0-oa" as const;

export type EvidenceType =
  | "document"
  | "screenshot"
  | "log_ref"
  | "artifact"
  | "attestation"
  | "other";

export type EvidenceSourceKind =
  | "execution_attempt"
  | "manual"
  | "external"
  | "system";

export type EvidenceStatus =
  | "expected"
  | "available"
  | "verified"
  | "incomplete"
  | "stale"
  | "rejected"
  | "superseded"
  | "unavailable";

export type EvidenceClassification =
  | "public"
  | "internal"
  | "confidential"
  | "restricted";

export type EvidenceStorageMode =
  | "metadata_only"
  | "internal_payload_ref"
  | "external_payload_ref";

export type EvidenceAvailability = "available" | "unavailable" | "unknown";

export type EvidenceFreshness = "fresh" | "aging" | "stale" | "unknown";

export type EvidenceRetentionClass =
  | "short"
  | "standard"
  | "extended"
  | "legal_hold_eligible";

/** At least one structural binding required (D-T-A6-01 / modeled). */
export type EvidenceBindings = {
  executionAttemptId?: string;
  executionContractId?: string;
  decisionId?: string;
  cycleInstanceId?: string;
  projectId?: string;
  reviewBundleId?: string;
};

/**
 * Evidence aggregate — independent identity, memory OCC via `version`.
 * Never stores a raw payload.
 */
export type Evidence = {
  schemaVersion: typeof EVIDENCE_SCHEMA_VERSION;
  evidenceId: string;
  type: EvidenceType;
  source: string;
  sourceKind: EvidenceSourceKind;
  location?: string;
  digest?: Digest;
  verifiablePayload?: boolean;
  producedBy?: ActorReference;
  producedAt: string;
  freshness?: EvidenceFreshness;
  status: EvidenceStatus;
  classification: EvidenceClassification;
  storageMode: EvidenceStorageMode;
  availability: EvidenceAvailability;
  retentionClass?: EvidenceRetentionClass;
  legalHold?: boolean;
  bindings: EvidenceBindings;
  containsSecrets: false;
  provenance: ProvenanceRecord;
  /** Runtime OCC — monotone, repository-owned. */
  version: number;
  createdAt: string;
  updatedAt?: string;
  /** Command idempotency key that created this Evidence (when applicable). */
  idempotencyKey?: string;
  /** Technical Attempt resultRef captured at ingestion — never implies verified/PASS. */
  technicalResultRef?: string;
  unavailableReason?: string;
  unavailableAt?: string;
};

export type EvidenceDetailCode =
  | "EVIDENCE_INVALID"
  | "EVIDENCE_NOT_FOUND"
  | "EVIDENCE_ALREADY_EXISTS"
  | "EVIDENCE_SOURCE_REQUIRED"
  | "EVIDENCE_BINDING_REQUIRED"
  | "EVIDENCE_DIGEST_REQUIRED"
  | "EVIDENCE_UNAVAILABLE"
  | "EVIDENCE_SECRET_FORBIDDEN"
  | "EVIDENCE_INTEGRITY_MISMATCH"
  | "EVIDENCE_VERIFIED_FORBIDDEN"
  | "ATTEMPT_NOT_FOUND"
  | "ATTEMPT_RESULT_UNAVAILABLE"
  | "ATTEMPT_STATUS_REFUSED"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "EVIDENCE_PERSISTENCE_FAILED"
  | "PAYLOAD_METADATA_ERROR";

export type EvidenceModeledErrorCode =
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "AUTHORITY_DENIED"
  | "VALIDATION_FAILED";

export type EvidenceStructuredError = {
  code: EvidenceModeledErrorCode;
  detailCode: EvidenceDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type EvidenceResult = {
  ok: true;
  evidence: Evidence;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: EvidenceStructuredError;
  evidence?: Evidence;
  durationMs: number;
};

export type RegisterEvidenceRequest = {
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  type: EvidenceType;
  source: string;
  sourceKind: Exclude<EvidenceSourceKind, "execution_attempt">;
  bindings: EvidenceBindings;
  classification: EvidenceClassification;
  storageMode: EvidenceStorageMode;
  availability?: EvidenceAvailability;
  status?: Exclude<EvidenceStatus, "verified">;
  freshness?: EvidenceFreshness;
  location?: string;
  digest?: Digest;
  /** Schema-free additive durable verification / result reference. */
  technicalResultRef?: string;
  verifiablePayload?: boolean;
  retentionClass?: EvidenceRetentionClass;
  legalHold?: boolean;
  producedBy?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestExecutionAttemptEvidenceRequest = {
  evidenceId: string;
  executionAttemptId: string;
  idempotencyKey: string;
  actor: ActorReference;
  classification: EvidenceClassification;
  retentionClass?: EvidenceRetentionClass;
  /** Extra structural bindings (project/cycle/decision…). Attempt binding is always set. */
  bindings?: Omit<EvidenceBindings, "executionAttemptId">;
  type?: EvidenceType;
  storageMode?: EvidenceStorageMode;
  location?: string;
  digest?: Digest;
  legalHold?: boolean;
  correlationId?: string;
  nowIso?: string;
};

export type VerifyEvidenceIntegrityRequest = {
  evidenceId: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type MarkEvidenceUnavailableRequest = {
  evidenceId: string;
  actor: ActorReference;
  expectedVersion: number;
  reason: string;
  idempotencyKey: string;
  correlationId?: string;
  nowIso?: string;
};

/** Read-only Attempt snapshot for T-A6 ingestion (never mutates T-A5). */
export type ExecutionAttemptSnapshot = {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  status: string;
  resultRef?: string;
  errorRef?: string;
  stopReason?: string;
  cancelledAt?: string;
  failedAt?: string;
  timedOutAt?: string;
  stopOrigin?: "USER_CANCEL" | "SYSTEM_GOVERNED_STOP";
  stopCode?: string;
  stopSourceRef?: string;
  stopObservedAt?: string;
  completedAt?: string;
  selectedAgentRef?: string;
  /** Immutable EC semantic fingerprint bound at Attempt acceptance (TD-W3B-02). */
  executionContractSemanticFingerprint?: string;
  /** TD-W3B-02 Option B — optional historically; required for new Contract Result PASS. */
  boundExecutionContract?: {
    executionContractSchemaVersion: string;
    executionContractVersion: number;
    semanticFingerprint: string;
    semanticMaterial: {
      executionContractId: string;
      projectId: string;
      cycleInstanceId?: string;
      action: string;
      target: string;
      scope: string;
      expectedOutputs?: string[];
      evidenceRequirements: string[];
      requiredCapabilities: string[];
      [key: string]: unknown;
    };
  };
};

```

## MODIFIED `projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts`
```typescript
/**
 * RegisterEvidence — manual / external / system Evidence (never verified on create).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  isEvidenceId,
  validateBindings,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  RegisterEvidenceRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";

// re-export helper for assert
function checkIdempotencyKey(key: string): boolean {
  return assertIdempotencyKey(key);
}

export class RegisterEvidence {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: RegisterEvidenceRequest): Promise<EvidenceResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createEvidenceError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createEvidenceError>[0]> & {
        evidence?: Evidence;
      },
    ): EvidenceResult => {
      const { evidence, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.evidence.idempotency_conflict" as const)
          : ("oa.evidence.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createEvidenceError({
          detailCode,
          timestamp,
          correlationId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        evidence,
        durationMs,
      };
    };

    try {
      if (!isEvidenceId(request.evidenceId)) {
        return fail("EVIDENCE_INVALID", "evidence_id_invalid");
      }
      if (!checkIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }
      if (request.sourceKind === ("execution_attempt" as string)) {
        return fail(
          "EVIDENCE_INVALID",
          "use_ingest_for_execution_attempt",
        );
      }
      if (request.status === ("verified" as string)) {
        return fail("EVIDENCE_VERIFIED_FORBIDDEN", "register_verified_forbidden");
      }

      const secretViolation = validateSecretFreeFields({
        source: request.source,
        location: request.location,
        actorDisplayName: request.actor.displayName ?? request.producedBy?.displayName,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const bindingsViolation = validateBindings(
        request.bindings,
        request.sourceKind,
      );
      if (bindingsViolation) {
        return fail(bindingsViolation.detailCode, bindingsViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          type: request.type,
          source: request.source,
          sourceKind: request.sourceKind,
          bindings: request.bindings,
          classification: request.classification,
          storageMode: request.storageMode,
          availability: request.availability,
          status: request.status,
          freshness: request.freshness,
        location: request.location,
        digest: request.digest,
        verifiablePayload: request.verifiablePayload,
        retentionClass: request.retentionClass,
        legalHold: request.legalHold,
        actor: request.actor,
        technicalResultRef: request.technicalResultRef,
      }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "register"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.registered",
            ts: timestamp,
            correlationId,
            evidenceId: existingIdem.evidence.evidenceId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.evidence.status,
            version: existingIdem.evidence.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            evidence: existingIdem.evidence,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const status = request.status ?? "available";
      const availability = request.availability ?? "available";

      const evidence: Evidence = {
        schemaVersion: "0.2.0-oa",
        evidenceId: request.evidenceId,
        type: request.type,
        source: request.source,
        sourceKind: request.sourceKind,
        location: request.location,
        digest: request.digest,
        ...(request.technicalResultRef
          ? { technicalResultRef: request.technicalResultRef }
          : {}),
        verifiablePayload: request.verifiablePayload,
        producedBy: request.producedBy ?? request.actor,
        producedAt: timestamp,
        freshness: request.freshness ?? "fresh",
        status,
        classification: request.classification,
        storageMode: request.storageMode,
        availability,
        retentionClass: request.retentionClass,
        legalHold: request.legalHold ?? false,
        bindings: { ...request.bindings },
        containsSecrets: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source:
            request.sourceKind === "manual" || request.sourceKind === "external"
              ? "human_decision"
              : "system",
          timestamp,
          correlationId,
          projectId: request.bindings.projectId,
          cycleInstanceId: request.bindings.cycleInstanceId,
        }),
        version: 1,
        createdAt: timestamp,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateEvidenceShape(evidence);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(evidence, {
        evidenceId: evidence.evidenceId,
        fingerprint,
        operation: "register",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.registered",
        ts: timestamp,
        correlationId,
        evidenceId: evidence.evidenceId,
        actorId: request.actor.actorId,
        newStatus: evidence.status,
        version: evidence.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        evidence: structuredClone(evidence),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_register_failure");
    }
  }
}

```

## MODIFIED `projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts`
```typescript
/**
 * GCEC D-GCEC-07 — typed Git evidence discriminators on Evidence.source.
 * KEEP EvidenceType enum unchanged. Payloads use location/digest/bindings.
 */
import type { Digest } from "@/lib/oa/doctrine";

export const TYPED_GIT_EVIDENCE_SOURCES = [
  "git:working_tree_diff",
  "git:local_commit",
  "git:remote_push",
  "git:pull_request",
  "git:ci_status",
  "git:review_status",
  "git:merge",
  "git:post_merge_verification",
] as const;

export type TypedGitEvidenceSource = (typeof TYPED_GIT_EVIDENCE_SOURCES)[number];

export type GitWorkingTreeDiffPayload = {
  repositoryRef: string;
  baseSha?: string;
  headSha?: string;
  summary?: string;
  changedPaths?: string[];
};

export type GitLocalCommitPayload = {
  repositoryRef: string;
  commitSha: string;
  message?: string;
  parentSha?: string;
};

export type GitRemotePushPayload = {
  repositoryRef: string;
  remote: string;
  refName: string;
  commitSha: string;
};

export type GitPullRequestPayload = {
  repositoryRef: string;
  prNumber: number;
  url?: string;
  headSha: string;
  baseSha?: string;
  state?: "open" | "closed" | "merged";
};

export type GitCiStatusPayload = {
  repositoryRef: string;
  commitSha: string;
  conclusion: "success" | "failure" | "pending" | "neutral" | "cancelled";
  checkName?: string;
  url?: string;
};

export type GitReviewStatusPayload = {
  repositoryRef: string;
  commitSha?: string;
  prNumber?: number;
  state: "approved" | "changes_requested" | "commented" | "pending";
};

export type GitMergePayload = {
  repositoryRef: string;
  mergeCommitSha: string;
  baseRef: string;
  headRef?: string;
  prNumber?: number;
};

export type GitPostMergeVerificationPayload = {
  repositoryRef: string;
  targetBranch: string;
  targetSha: string;
  artifactPath: string;
  artifactDigest: Digest;
};

export type TypedGitEvidencePayloadBySource = {
  "git:working_tree_diff": GitWorkingTreeDiffPayload;
  "git:local_commit": GitLocalCommitPayload;
  "git:remote_push": GitRemotePushPayload;
  "git:pull_request": GitPullRequestPayload;
  "git:ci_status": GitCiStatusPayload;
  "git:review_status": GitReviewStatusPayload;
  "git:merge": GitMergePayload;
  "git:post_merge_verification": GitPostMergeVerificationPayload;
};

export type TypedGitEvidenceFields = {
  source: TypedGitEvidenceSource;
  location?: string;
  digest?: Digest;
};

const SOURCE_SET: ReadonlySet<string> = new Set(TYPED_GIT_EVIDENCE_SOURCES);

export function isTypedGitEvidenceSource(
  source: string | null | undefined,
): source is TypedGitEvidenceSource {
  return typeof source === "string" && SOURCE_SET.has(source);
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isDigest(v: unknown): v is Digest {
  return typeof v === "string" && /^sha256:[a-f0-9]{64}$/i.test(v);
}

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && /^[0-9a-f]{40}$/i.test(v.trim());
}

export function validateTypedGitEvidencePayload(
  source: TypedGitEvidenceSource,
  payload: unknown,
): { ok: true } | { ok: false; reason: string } {
  if (!payload || typeof payload !== "object") {
    return { ok: false, reason: "payload_not_object" };
  }
  const p = payload as Record<string, unknown>;
  switch (source) {
    case "git:working_tree_diff":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      return { ok: true };
    case "git:local_commit":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      if (!isFullSha(p.commitSha)) {
        return { ok: false, reason: "commit_sha_invalid" };
      }
      return { ok: true };
    case "git:remote_push":
      if (!isNonEmptyString(p.repositoryRef) || !isNonEmptyString(p.remote)) {
        return { ok: false, reason: "repository_or_remote_required" };
      }
      if (!isNonEmptyString(p.refName) || !isFullSha(p.commitSha)) {
        return { ok: false, reason: "ref_or_commit_invalid" };
      }
      return { ok: true };
    case "git:pull_request":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      if (typeof p.prNumber !== "number" || !Number.isInteger(p.prNumber) || p.prNumber < 1) {
        return { ok: false, reason: "pr_number_invalid" };
      }
      if (!isFullSha(p.headSha)) {
        return { ok: false, reason: "head_sha_invalid" };
      }
      return { ok: true };
    case "git:ci_status":
      if (!isNonEmptyString(p.repositoryRef) || !isFullSha(p.commitSha)) {
        return { ok: false, reason: "repository_or_commit_invalid" };
      }
      if (
        p.conclusion !== "success" &&
        p.conclusion !== "failure" &&
        p.conclusion !== "pending" &&
        p.conclusion !== "neutral" &&
        p.conclusion !== "cancelled"
      ) {
        return { ok: false, reason: "conclusion_invalid" };
      }
      return { ok: true };
    case "git:review_status":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      if (
        p.state !== "approved" &&
        p.state !== "changes_requested" &&
        p.state !== "commented" &&
        p.state !== "pending"
      ) {
        return { ok: false, reason: "review_state_invalid" };
      }
      return { ok: true };
    case "git:merge":
      if (!isNonEmptyString(p.repositoryRef) || !isNonEmptyString(p.baseRef)) {
        return { ok: false, reason: "repository_or_base_ref_required" };
      }
      if (!isFullSha(p.mergeCommitSha)) {
        return { ok: false, reason: "merge_commit_sha_invalid" };
      }
      return { ok: true };
    case "git:post_merge_verification":
      if (
        !isNonEmptyString(p.repositoryRef) ||
        !isNonEmptyString(p.targetBranch) ||
        !isNonEmptyString(p.artifactPath)
      ) {
        return { ok: false, reason: "post_merge_fields_required" };
      }
      if (!isFullSha(p.targetSha)) {
        return { ok: false, reason: "target_sha_invalid" };
      }
      if (!isDigest(p.artifactDigest)) {
        return { ok: false, reason: "artifact_digest_invalid" };
      }
      return { ok: true };
    default: {
      const _exhaustive: never = source;
      void _exhaustive;
      return { ok: false, reason: "unknown_source" };
    }
  }
}

export function buildTypedGitEvidenceFields<S extends TypedGitEvidenceSource>(
  source: S,
  payload: TypedGitEvidencePayloadBySource[S],
):
  | { ok: true; fields: TypedGitEvidenceFields }
  | { ok: false; reason: string } {
  const validated = validateTypedGitEvidencePayload(source, payload);
  if (!validated.ok) return validated;

  let location: string | undefined;
  let digest: Digest | undefined;

  switch (source) {
    case "git:working_tree_diff": {
      const wt = payload as GitWorkingTreeDiffPayload;
      location = `git:working_tree_diff?repo=${encodeURIComponent(wt.repositoryRef)}`;
      break;
    }
    case "git:local_commit": {
      const lc = payload as GitLocalCommitPayload;
      location = `git:local_commit?repo=${encodeURIComponent(lc.repositoryRef)}&commitSha=${encodeURIComponent(lc.commitSha)}`;
      break;
    }
    case "git:remote_push": {
      const rp = payload as GitRemotePushPayload;
      location = `git:remote_push?repo=${encodeURIComponent(rp.repositoryRef)}&remote=${encodeURIComponent(rp.remote)}&refName=${encodeURIComponent(rp.refName)}&commitSha=${encodeURIComponent(rp.commitSha)}`;
      break;
    }
    case "git:pull_request": {
      const pr = payload as GitPullRequestPayload;
      location =
        `git:pull_request?repo=${encodeURIComponent(pr.repositoryRef)}` +
        `&prNumber=${encodeURIComponent(String(pr.prNumber))}` +
        (pr.headSha
          ? `&headSha=${encodeURIComponent(pr.headSha)}`
          : "");
      break;
    }
    case "git:ci_status": {
      const ci = payload as GitCiStatusPayload;
      location = `git:ci_status?repo=${encodeURIComponent(ci.repositoryRef)}&commitSha=${encodeURIComponent(ci.commitSha)}&conclusion=${encodeURIComponent(ci.conclusion)}`;
      break;
    }
    case "git:review_status": {
      const rv = payload as GitReviewStatusPayload;
      location = `git:review_status?repo=${encodeURIComponent(rv.repositoryRef)}&prNumber=${encodeURIComponent(String(rv.prNumber ?? ""))}&state=${encodeURIComponent(rv.state)}`;
      break;
    }
    case "git:merge": {
      const mg = payload as GitMergePayload;
      location = `git:merge?repo=${encodeURIComponent(mg.repositoryRef)}&mergeCommitSha=${encodeURIComponent(mg.mergeCommitSha)}&prNumber=${encodeURIComponent(String(mg.prNumber ?? ""))}`;
      break;
    }
    case "git:post_merge_verification": {
      const pm = payload as GitPostMergeVerificationPayload;
      location =
        `git:post_merge_verification?repo=${encodeURIComponent(pm.repositoryRef)}` +
        `&targetBranch=${encodeURIComponent(pm.targetBranch)}` +
        `&targetSha=${encodeURIComponent(pm.targetSha)}` +
        `&artifactPath=${encodeURIComponent(pm.artifactPath)}` +
        `&digest=${encodeURIComponent(pm.artifactDigest)}`;
      digest = pm.artifactDigest;
      break;
    }
    default: {
      const _exhaustive: never = source;
      void _exhaustive;
    }
  }

  return {
    ok: true,
    fields: {
      source,
      ...(location ? { location } : {}),
      ...(digest ? { digest } : {}),
    },
  };
}

```

## MODIFIED `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
```typescript
/**
 * T-A5 ExecutionAttempt Runtime Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes the public APIs of T-A0
 * doctrine (Clock), T-A1 project, T-A2 cycle, T-A3 decision/confirmation/
 * authority and T-A4 execution-contract. Does not replace d1 / OPS1 /
 * MethodMode. In-memory only, synchronous, no durability claim.
 *
 * WHAT THIS IS NOT: this foundation does not execute anything. The only
 * injectable adapters are `TestExecutionAdapter` and `NoOpExecutionAdapter`;
 * there is no shell, network, MCP, Cursor, worker, queue, scheduler, SQL or
 * UI anywhere in this module, and a real execution capability is NOT
 * authorized by it. M4 REAL boundary is opt-in via `realBoundary` and stays
 * REAL-OFF unless the specialized gateway env flag is explicitly enabled.
 *
 * Ownership split with T-A4:
 * - T-A4 owns draft…confirmed (+ pre-exec cancelled, superseded) and REFUSES
 *   the T-A5 statuses;
 * - T-A5 owns ExecutionAttempt and writes the contract post-start statuses
 *   (executing|completed|failed and the post-start cancelled) through the
 *   SHARED `ExecutionContractRepositoryPort` + `MemoryExecutionContractStore`.
 *   No T-A4 use-case is extended to post-exec.
 *
 * Absolute invariant: `ExecutionContract.executing` ⇒ a matching Attempt is
 * already `running`.
 *
 * Exported surface:
 * - domain types / errors / invariants (including the agent_selection
 *   Confirmation binding helpers);
 * - ports (repository, registry, adapter, audit, REAL launch + journal + workspace);
 * - use-cases (Select, Start, Cancel, RecordResult, RecordFailure, Retry,
 *   TriggerTimeout, Get, List, CheckAttemptAuthorization, GrantRealExecutionGate);
 * - memory infrastructure and the two fake adapters;
 * - closed factories `createInMemoryExecutionAttemptServices` and
 *   `createTestExecutionAttemptServices`.
 *
 * NOT exported: test-only REAL doubles (process runners / launch gateways) —
 * those live under __tests__/…/support only.
 * NOT exported: any mutation entry point for the agent registry — the
 * descriptor set is closed at construction.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/realLaunchSafety";
export * from "./domain/cursorExecutionReport";
export * from "./domain/authorizedExecutionSlice";
export { verifyWorkspaceFileEffects } from "./application/verifyWorkspaceFileEffects";
export type { WorkspaceFileVerificationResult } from "./application/verifyWorkspaceFileEffects";

export * from "./ports/executionAttemptRepository";
export * from "./ports/executionAttemptTechnicalStorePort";
export * from "./ports/agentRegistry";
export * from "./ports/executionAdapter";
export * from "./ports/executionAttemptAudit";
export * from "./ports/realExecutionLaunchPort";
export * from "./ports/realExecutionWorkspacePort";
export * from "./ports/realLaunchSafetyJournalPort";
// launchSafetyJournalPort is a thin re-export — avoid duplicate export * conflict.

export { SelectExecutionAgent } from "./application/selectExecutionAgent";
export { StartExecution, extractContractBaseHeadSha, extractDocsWriteLaunchSpec } from "./application/startExecution";
export {
  o3LaterIntervalMs,
  o3ObservationScheduleMs,
  nextO3ObservationDelayMs,
  attemptDeadlineMs,
  O3_EARLY_PROBE_OFFSETS_MS,
  O3_MIN_INTERVAL_MS,
  O3_MAX_INTERVAL_MS,
} from "./application/observationSchedule";
export {
  GrantRealExecutionGate,
  GrantGateD,
  type GrantRealExecutionGateRequest,
  type GrantRealExecutionGateResult,
  type GrantGateDRequest,
  type GrantGateDResult,
} from "./application/grantRealExecutionGate";
export { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
export { SystemGovernedStop } from "./application/systemGovernedStop";
export type { SystemGovernedStopRequest } from "./application/systemGovernedStop";
export { RecordExecutionResult } from "./application/recordExecutionResult";
export { RecordExecutionFailure } from "./application/recordExecutionFailure";
export { RetryExecutionAttempt } from "./application/retryExecutionAttempt";
export { TriggerAttemptTimeout } from "./application/triggerAttemptTimeout";
export { GetExecutionAttempt } from "./application/getExecutionAttempt";
export { ListExecutionAttempts } from "./application/listExecutionAttempts";
export { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
export { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
export type {
  ContractStatusWriteRequest,
  ContractStatusWriteResult,
  Ta5ContractStatus,
} from "./application/executionContractStatusWriter";
export type { AttemptPolicy } from "./application/attemptPolicy";
export {
  DEFAULT_ATTEMPT_POLICY,
  resolveAttemptPolicy,
} from "./application/attemptPolicy";

export { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
export { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
export { SqliteExecutionAttemptRepository } from "./infrastructure/sqlite/sqliteExecutionAttemptRepository";
export { SqliteExecutionAttemptTechnicalStore } from "./infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore";
export {
  createSqliteExecutionAttemptServices,
  createTestSqliteExecutionAttemptServices,
  type CreateSqliteExecutionAttemptServicesOptions,
  type SqliteExecutionAttemptServices,
} from "./infrastructure/sqlite/createSqliteExecutionAttemptServices";
export { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
export { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
export type {
  ScriptedCancelOutcome,
  ScriptedLaunchOutcome,
  TestExecutionAdapterOptions,
} from "./infrastructure/testExecutionAdapter";
export { NoOpExecutionAdapter } from "./infrastructure/noOpExecutionAdapter";
export {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "./infrastructure/observability";
export {
  CursorCliLaunchGateway,
  StudioCursorRealLaunchGateway,
  DisabledRealProcessRunner,
  NodeCursorProcessRunner,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NODE_CURSOR_STDERR_CAP_BYTES,
  resolveStudioCursorBinPath,
  resolveCursorBinPath,
  type CursorCliLaunchGatewayOptions,
  type StudioCursorRealLaunchGatewayOptions,
  type SpawnPrimitive,
  type NodeCursorProcessRunnerOptions,
} from "./infrastructure/cursorCliLaunchGateway";
export {
  StudioGitWorktreeWorkspace,
  NodeGitCommandRunner,
  isFullGitSha,
  workspacePathForAttempt,
  type GitCommandRunner,
  type GitCommandResult,
  type StudioGitWorktreeWorkspaceOptions,
} from "./infrastructure/studioGitWorktreeWorkspace";
export {
  SqliteRealLaunchSafetyJournal,
  SqliteLaunchSafetyJournal,
  type SqliteRealLaunchSafetyJournalOptions,
  type SqliteLaunchSafetyJournalOptions,
} from "./infrastructure/sqliteRealLaunchSafetyJournal";
export { MemoryLaunchSafetyJournal } from "./infrastructure/memoryLaunchSafetyJournal";
export {
  createM4BoundedReadOnlyCursorAgentDescriptor,
  isM4BoundedReadOnlyRealAgent,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_TARGET,
  M4_BOUNDED_RO_SCOPE,
} from "./infrastructure/m4BoundedReadOnlyCursorAgent";
export {
  createM4BoundedDocsWriteCursorAgentDescriptor,
  isM4BoundedDocsWriteRealAgent,
  isM4AuthorizedCursorRealAgent,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
} from "./infrastructure/m4BoundedDocsWriteCursorAgent";
export {
  FakeDocsWriteLaunchPort,
  listRelativeFiles,
  sha256File,
  type FakeDocsWriteLaunchPortOptions,
} from "./infrastructure/fakeDocsWriteLaunchPort";
export {
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
} from "./infrastructure/managedProjectRepositoryResolver";
export type { ManagedRepoBindingIdentity } from "./infrastructure/managedProjectRepositoryResolver";
export type { DocsWriteLaunchSpec } from "./ports/realExecutionLaunchPort";
export {
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "./domain/realLaunchSafety";
export { assertStudioCursorRealOffForTests } from "./domain/realLaunchSafety";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort, DecisionServices } from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import { resolveAttemptPolicy } from "./application/attemptPolicy";
import type { AttemptPolicy } from "./application/attemptPolicy";
import { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
import { SystemGovernedStop } from "./application/systemGovernedStop";
import { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
import { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
import { GetExecutionAttempt } from "./application/getExecutionAttempt";
import { GrantRealExecutionGate } from "./application/grantRealExecutionGate";
import { ListExecutionAttempts } from "./application/listExecutionAttempts";
import { RecordExecutionFailure } from "./application/recordExecutionFailure";
import { RecordExecutionResult } from "./application/recordExecutionResult";
import { RetryExecutionAttempt } from "./application/retryExecutionAttempt";
import { SelectExecutionAgent } from "./application/selectExecutionAgent";
import { StartExecution } from "./application/startExecution";
import { TriggerAttemptTimeout } from "./application/triggerAttemptTimeout";
import { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
import { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
import { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
import { NoOpExecutionAdapter } from "./infrastructure/noOpExecutionAdapter";
import {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "./infrastructure/observability";
import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
import type { AgentDescriptor } from "./domain/types";
import type { AgentRegistryPort } from "./ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "./ports/executionAttemptRepository";
import type { ExecutionAttemptTechnicalStorePort } from "./ports/executionAttemptTechnicalStorePort";
import type { RealExecutionLaunchPort } from "./ports/realExecutionLaunchPort";
import type { RealLaunchSafetyJournalPort } from "./ports/realLaunchSafetyJournalPort";

/**
 * Closed union of injectable adapters. An arbitrary object implementing
 * `ExecutionAdapterPort` is NOT accepted by the factories: only these two
 * fakes exist in this foundation. CursorCliLaunchGateway is NEVER injectable.
 */
export type InjectableExecutionAdapter =
  | TestExecutionAdapter
  | NoOpExecutionAdapter;

export function isInjectableExecutionAdapter(
  candidate: unknown,
): candidate is InjectableExecutionAdapter {
  return (
    candidate instanceof TestExecutionAdapter ||
    candidate instanceof NoOpExecutionAdapter
  );
}

export type RealBoundaryWiring = {
  readonly launchPort: RealExecutionLaunchPort;
  readonly safetyJournal: RealLaunchSafetyJournalPort;
  /** Server-only managed clone base for docs-write workspace resolution. */
  readonly managedRepoRootBase?: string;
};

export type ExecutionAttemptServices = {
  store: ExecutionAttemptTechnicalStorePort;
  attempts: ExecutionAttemptRepositoryPort;
  registry: AgentRegistryPort;
  adapter: InjectableExecutionAdapter;
  audit: ExecutionAttemptAuditPort;
  policy: AttemptPolicy;
  contractStatusWriter: ExecutionContractStatusWriter;
  selectExecutionAgent: SelectExecutionAgent;
  startExecution: StartExecution;
  cancelExecutionAttempt: CancelExecutionAttempt;
  systemGovernedStop: SystemGovernedStop;
  recordExecutionResult: RecordExecutionResult;
  recordExecutionFailure: RecordExecutionFailure;
  retryExecutionAttempt: RetryExecutionAttempt;
  triggerAttemptTimeout: TriggerAttemptTimeout;
  getExecutionAttempt: GetExecutionAttempt;
  listExecutionAttempts: ListExecutionAttempts;
  checkAttemptAuthorization: CheckAttemptAuthorization;
  /** Present only when `realBoundary` was provided to the factory. */
  grantRealExecutionGate?: GrantRealExecutionGate;
  /** Alias for grantRealExecutionGate (Delivery naming). */
  grantGateD?: GrantRealExecutionGate;
  realBoundary?: RealBoundaryWiring;
  launchSafetyJournal?: RealLaunchSafetyJournalPort;
  realLaunch?: RealExecutionLaunchPort;
};

export type CreateInMemoryExecutionAttemptServicesOptions = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  /** Closed descriptor set, or a pre-built immutable registry. */
  agents?: readonly AgentDescriptor[];
  registry?: AgentRegistryPort;
  /** Only TestExecutionAdapter | NoOpExecutionAdapter. */
  adapter?: InjectableExecutionAdapter;
  clock?: ClockPort;
  audit?: ExecutionAttemptAuditPort;
  policy?: Partial<AttemptPolicy>;
  /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
  authorityResolver?: AuthorityResolverPort;
  /**
   * Optional M4 REAL boundary (journal + specialized launch port).
   * Does NOT enable SFIA_STUDIO_CURSOR_REAL; default product wire stays REAL-OFF.
   * No Fake REAL runner is chosen by this factory.
   */
  realBoundary?: RealBoundaryWiring;
  /** Flat aliases accepted by tests — same as realBoundary. */
  launchSafetyJournal?: RealLaunchSafetyJournalPort;
  realLaunch?: RealExecutionLaunchPort;
};

/** Factory for the in-memory ExecutionAttempt runtime foundation. */
export function createInMemoryExecutionAttemptServices(
  options: CreateInMemoryExecutionAttemptServicesOptions,
): ExecutionAttemptServices {
  if (options.registry && options.agents) {
    throw new Error("execution_attempt_factory_registry_or_agents_not_both");
  }
  const registry =
    options.registry ?? new MemoryAgentRegistry(options.agents ?? []);

  const adapter = options.adapter ?? new NoOpExecutionAdapter();
  if (!isInjectableExecutionAdapter(adapter)) {
    throw new Error("execution_attempt_factory_adapter_not_allowed");
  }

  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleExecutionAttemptAuditJournal();
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;
  const policy = resolveAttemptPolicy(options.policy);

  const store = new MemoryExecutionAttemptStore();
  const attempts = new MemoryExecutionAttemptRepository(store);

  const contracts = options.executionContractServices.contracts;
  const contractStatusWriter = new ExecutionContractStatusWriter(
    contracts,
    options.executionContractServices.store,
    attempts,
  );

  const selectExecutionAgent = new SelectExecutionAgent(
    attempts,
    contracts,
    options.executionContractServices.checkExecutionAuthorization,
    options.decisionServices,
    authority,
    registry,
    clock,
    audit,
    policy,
    store,
  );

  const realBoundary =
    options.realBoundary ??
    (options.launchSafetyJournal && options.realLaunch
      ? {
          safetyJournal: options.launchSafetyJournal,
          launchPort: options.realLaunch,
        }
      : undefined);
  const grantRealExecutionGate = realBoundary
    ? new GrantRealExecutionGate(
        attempts,
        contracts,
        registry,
        authority,
        realBoundary.safetyJournal,
        clock,
      )
    : undefined;

  return {
    store,
    attempts,
    registry,
    adapter,
    audit,
    policy,
    contractStatusWriter,
    selectExecutionAgent,
    startExecution: new StartExecution(
      attempts,
      contracts,
      contractStatusWriter,
      options.executionContractServices.checkExecutionAuthorization,
      options.decisionServices,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
      realBoundary?.launchPort,
      realBoundary?.safetyJournal,
      realBoundary?.managedRepoRootBase,
    ),
    cancelExecutionAttempt: new CancelExecutionAttempt(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    systemGovernedStop: new SystemGovernedStop(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    recordExecutionResult: new RecordExecutionResult(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      policy,
      store,
    ),
    recordExecutionFailure: new RecordExecutionFailure(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      store,
    ),
    retryExecutionAttempt: new RetryExecutionAttempt(
      attempts,
      contracts,
      selectExecutionAgent,
      authority,
      clock,
      audit,
      policy,
    ),
    triggerAttemptTimeout: new TriggerAttemptTimeout(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      clock,
      audit,
      policy,
      store,
    ),
    getExecutionAttempt: new GetExecutionAttempt(attempts, clock, audit),
    listExecutionAttempts: new ListExecutionAttempts(attempts, clock, audit),
    checkAttemptAuthorization: new CheckAttemptAuthorization(
      attempts,
      contracts,
      options.executionContractServices.checkExecutionAuthorization,
      authority,
      clock,
      audit,
    ),
    grantRealExecutionGate,
    grantGateD: grantRealExecutionGate,
    realBoundary,
    launchSafetyJournal: realBoundary?.safetyJournal,
    realLaunch: realBoundary?.launchPort,
  };
}

export function createTestExecutionAttemptServices(
  options: CreateInMemoryExecutionAttemptServicesOptions & {
    audit?: MemoryExecutionAttemptAuditJournal;
    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
    fixedNowIso?: string;
  },
): ExecutionAttemptServices & {
  audit: MemoryExecutionAttemptAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-25T06:00:00.000Z"));
  const adapter = options.adapter ?? new TestExecutionAdapter();
  return createInMemoryExecutionAttemptServices({
    ...options,
    adapter,
    clock,
    audit,
  }) as ExecutionAttemptServices & {
    audit: MemoryExecutionAttemptAuditJournal;
  };
}

```

## MODIFIED `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`
```typescript
/**
 * TEST-ONLY — fake Cursor docs-write external boundary.
 * Writes allowlisted text files into an isolated worktree directory.
 * Same Product StartExecution / Gate D path as REAL; substitutes launch only.
 * ZERO REAL Cursor. ZERO remote Git.
 *
 * CR-GCEC-02: prefer request.docsWriteSpec; constructor options are fallback
 * for unit tests only.
 */
import { createHash } from "node:crypto";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export type FakeDocsWriteLaunchPortOptions = {
  worktreeRoot: string;
  pathAllowlist: readonly string[];
  /** Relative path written on success (must be allowlisted). Fallback only. */
  targetPath?: string;
  failLaunch?: boolean;
  content?: string;
  /** Optional fallback repositoryRef when docsWriteSpec absent. */
  repositoryRef?: string;
};

function normalizeRel(p: string): string {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    throw new Error("PATH_ESCAPE");
  }
  return n;
}

function isAllowlisted(rel: string, allowlist: readonly string[]): boolean {
  const n = normalizeRel(rel);
  return allowlist.some((a) => {
    const root = normalizeRel(a);
    return n === root || n.startsWith(`${root}/`);
  });
}

export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly touchedFiles: string[] = [];
  lastDigest: string | null = null;
  lastReport: import("../domain/cursorExecutionReport").CursorExecutionReport | null =
    null;
  private readonly options: FakeDocsWriteLaunchPortOptions;
  private readonly observations = new Map<string, RealProcessObservation>();

  constructor(options: FakeDocsWriteLaunchPortOptions) {
    this.options = options;
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(request);
    if (this.options.failLaunch) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "FAKE_DOCS_WRITE_LAUNCH_FAILED",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
    if (request.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "ACTION_NOT_DOCS_WRITE",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    const spec = request.docsWriteSpec;
    const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
    const targetPath =
      spec?.targetPath ??
      this.options.targetPath ??
      "docs/functional-design.md";
    const repositoryRef =
      spec?.repositoryRef ?? this.options.repositoryRef ?? "unknown/repo";

    let rel: string;
    try {
      rel = normalizeRel(targetPath);
    } catch {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "PATH_ESCAPE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    if (!isAllowlisted(rel, pathAllowlist)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "OUT_OF_SCOPE_WRITE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const root = path.resolve(this.options.worktreeRoot);
    const abs = path.resolve(root, ...rel.split("/"));
    if (!abs.startsWith(root + path.sep) && abs !== root) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "PATH_ESCAPE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    await mkdir(path.dirname(abs), { recursive: true });
    const brief = spec?.artifactBrief ?? "Functional design";
    const contentReqs = (spec?.contentRequirements ?? []).join(", ");
    const body =
      this.options.content ??
      `# Functional design\n\nGenerated by FakeDocsWriteLaunchPort\n` +
        `repository=${repositoryRef}\n` +
        `attempt=${request.attemptId}\n` +
        `brief=${brief}\n` +
        `contentRequirements=${contentReqs}\n`;
    await writeFile(abs, body, "utf8");
    this.touchedFiles.push(rel);
    const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
    this.lastDigest = digest;

    const report = {
      schemaVersion: "oa.cursor-execution-report.1" as const,
      attemptId: request.attemptId,
      executionContractId: request.executionContractId,
      repositoryRef,
      baseSha: request.baseHeadSha,
      status: "stopped" as const,
      fileEffects: {
        created: [rel],
        modified: [] as string[],
        deleted: [] as string[],
        digests: { [rel]: digest },
      },
      validationEffects: [
        {
          identity: "docs-write-path-allowlist",
          result: "pass" as const,
          summary: "allowlist ok",
        },
      ],
      authorizedEffectsExecuted: [
        "filesystem.create" as const,
        "filesystem.modify" as const,
        "validation.run" as const,
      ],
      stoppedBeforeEffects: [
        "git.commit" as const,
        "git.push" as const,
        "github.pr.create" as const,
        "github.pr.merge" as const,
      ],
    };
    this.lastReport = report;

    const processRef = `proc:fake-docs-write:${request.attemptId}`;
    this.observations.set(processRef, {
      processRef,
      exitCode: 0,
      timedOut: false,
      stdout:
        `FAKE_DOCS_WRITE_OK\nfiles=${rel}\ndigest=${digest}\n` +
        `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
      stderr: "",
      durationMs: 1,
      realProcessInvoked: true,
      worktreeRef: root,
    });

    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
      worktreeRef: root,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    return this.observations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    return this.observe(processRef);
  }
}

export async function listRelativeFiles(root: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(dir: string, prefix: string): Promise<void> {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const rel = prefix ? `${prefix}/${e.name}` : e.name;
      if (e.isDirectory()) await walk(path.join(dir, e.name), rel);
      else out.push(rel);
    }
  }
  await walk(root, "");
  return out;
}

export async function sha256File(absPath: string): Promise<string> {
  const buf = await readFile(absPath);
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

```

## MODIFIED `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts`
```typescript
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type { ProductSqliteHandle } from "@/lib/oa/project";
import {
  resolveAttemptPolicy,
  type AttemptPolicy,
} from "../../application/attemptPolicy";
import { CancelExecutionAttempt } from "../../application/cancelExecutionAttempt";
import { SystemGovernedStop } from "../../application/systemGovernedStop";
import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
import { GrantRealExecutionGate } from "../../application/grantRealExecutionGate";
import { ListExecutionAttempts } from "../../application/listExecutionAttempts";
import { RecordExecutionFailure } from "../../application/recordExecutionFailure";
import { RecordExecutionResult } from "../../application/recordExecutionResult";
import { RetryExecutionAttempt } from "../../application/retryExecutionAttempt";
import { SelectExecutionAgent } from "../../application/selectExecutionAgent";
import { StartExecution } from "../../application/startExecution";
import { TriggerAttemptTimeout } from "../../application/triggerAttemptTimeout";
import type { AgentDescriptor } from "../../domain/types";
import { MemoryAgentRegistry } from "../memoryAgentRegistry";
import { NoOpExecutionAdapter } from "../noOpExecutionAdapter";
import {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "../observability";
import { TestExecutionAdapter } from "../testExecutionAdapter";
import type { AgentRegistryPort } from "../../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../../ports/executionAttemptRepository";
import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
import type { RealExecutionLaunchPort } from "../../ports/realExecutionLaunchPort";
import type { RealLaunchSafetyJournalPort } from "../../ports/realLaunchSafetyJournalPort";
import { SqliteExecutionAttemptRepository } from "./sqliteExecutionAttemptRepository";
import { SqliteExecutionAttemptTechnicalStore } from "./sqliteExecutionAttemptTechnicalStore";

type InjectableExecutionAdapter = TestExecutionAdapter | NoOpExecutionAdapter;

function isInjectableExecutionAdapter(
  candidate: unknown,
): candidate is InjectableExecutionAdapter {
  return (
    candidate instanceof TestExecutionAdapter ||
    candidate instanceof NoOpExecutionAdapter
  );
}

export type CreateSqliteExecutionAttemptServicesOptions = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  productStore: ProductSqliteHandle;
  agents?: readonly AgentDescriptor[];
  registry?: AgentRegistryPort;
  adapter?: InjectableExecutionAdapter;
  clock?: ClockPort;
  audit?: ExecutionAttemptAuditPort;
  policy?: Partial<AttemptPolicy>;
  authorityResolver?: AuthorityResolverPort;
  /**
   * Optional M4 REAL boundary (journal + specialized launch port).
   * Default undefined / OFF. Does NOT enable SFIA_STUDIO_CURSOR_REAL.
   */
  realBoundary?: {
    readonly launchPort: RealExecutionLaunchPort;
    readonly safetyJournal: RealLaunchSafetyJournalPort;
    readonly managedRepoRootBase?: string;
  };
};

export type SqliteExecutionAttemptServices = {
  store: ExecutionAttemptTechnicalStorePort;
  attempts: ExecutionAttemptRepositoryPort;
  registry: AgentRegistryPort;
  adapter: InjectableExecutionAdapter;
  audit: ExecutionAttemptAuditPort;
  policy: AttemptPolicy;
  contractStatusWriter: ExecutionContractStatusWriter;
  productStore: ProductSqliteHandle;
  selectExecutionAgent: SelectExecutionAgent;
  startExecution: StartExecution;
  cancelExecutionAttempt: CancelExecutionAttempt;
  systemGovernedStop: SystemGovernedStop;
  recordExecutionResult: RecordExecutionResult;
  recordExecutionFailure: RecordExecutionFailure;
  retryExecutionAttempt: RetryExecutionAttempt;
  triggerAttemptTimeout: TriggerAttemptTimeout;
  getExecutionAttempt: GetExecutionAttempt;
  listExecutionAttempts: ListExecutionAttempts;
  checkAttemptAuthorization: CheckAttemptAuthorization;
  grantRealExecutionGate?: GrantRealExecutionGate;
  grantGateD?: GrantRealExecutionGate;
  realBoundary?: {
    readonly launchPort: RealExecutionLaunchPort;
    readonly safetyJournal: RealLaunchSafetyJournalPort;
  };
  launchSafetyJournal?: RealLaunchSafetyJournalPort;
  realLaunch?: RealExecutionLaunchPort;
};

/**
 * Durable ExecutionAttempt services on Product SQLite (M5-A).
 * realBoundary is optional and OFF by default (GAP-3). No live Cursor spawn.
 */
export function createSqliteExecutionAttemptServices(
  options: CreateSqliteExecutionAttemptServicesOptions,
): SqliteExecutionAttemptServices {
  if (options.registry && options.agents) {
    throw new Error("execution_attempt_factory_registry_or_agents_not_both");
  }
  const registry =
    options.registry ?? new MemoryAgentRegistry(options.agents ?? []);

  const adapter = options.adapter ?? new NoOpExecutionAdapter();
  if (!isInjectableExecutionAdapter(adapter)) {
    throw new Error("execution_attempt_factory_adapter_not_allowed");
  }

  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleExecutionAttemptAuditJournal();
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;
  const policy = resolveAttemptPolicy(options.policy);

  const store = new SqliteExecutionAttemptTechnicalStore(options.productStore);
  const attempts = new SqliteExecutionAttemptRepository(options.productStore);

  const contracts = options.executionContractServices.contracts;
  const contractStatusWriter = new ExecutionContractStatusWriter(
    contracts,
    options.executionContractServices.store,
    attempts,
  );

  const selectExecutionAgent = new SelectExecutionAgent(
    attempts,
    contracts,
    options.executionContractServices.checkExecutionAuthorization,
    options.decisionServices,
    authority,
    registry,
    clock,
    audit,
    policy,
    store,
  );

  const realBoundary = options.realBoundary;
  const grantRealExecutionGate = realBoundary
    ? new GrantRealExecutionGate(
        attempts,
        contracts,
        registry,
        authority,
        realBoundary.safetyJournal,
        clock,
      )
    : undefined;

  return {
    store,
    attempts,
    registry,
    adapter,
    audit,
    policy,
    contractStatusWriter,
    productStore: options.productStore,
    selectExecutionAgent,
    startExecution: new StartExecution(
      attempts,
      contracts,
      contractStatusWriter,
      options.executionContractServices.checkExecutionAuthorization,
      options.decisionServices,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
      realBoundary?.launchPort,
      realBoundary?.safetyJournal,
      realBoundary?.managedRepoRootBase,
    ),
    cancelExecutionAttempt: new CancelExecutionAttempt(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    systemGovernedStop: new SystemGovernedStop(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    recordExecutionResult: new RecordExecutionResult(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      policy,
      store,
    ),
    recordExecutionFailure: new RecordExecutionFailure(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      store,
    ),
    retryExecutionAttempt: new RetryExecutionAttempt(
      attempts,
      contracts,
      selectExecutionAgent,
      authority,
      clock,
      audit,
      policy,
    ),
    triggerAttemptTimeout: new TriggerAttemptTimeout(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      clock,
      audit,
      policy,
      store,
    ),
    getExecutionAttempt: new GetExecutionAttempt(attempts, clock, audit),
    listExecutionAttempts: new ListExecutionAttempts(attempts, clock, audit),
    checkAttemptAuthorization: new CheckAttemptAuthorization(
      attempts,
      contracts,
      options.executionContractServices.checkExecutionAuthorization,
      authority,
      clock,
      audit,
    ),
    grantRealExecutionGate,
    grantGateD: grantRealExecutionGate,
    realBoundary,
    launchSafetyJournal: realBoundary?.safetyJournal,
    realLaunch: realBoundary?.launchPort,
  };
}

export function createTestSqliteExecutionAttemptServices(
  options: CreateSqliteExecutionAttemptServicesOptions & {
    audit?: MemoryExecutionAttemptAuditJournal;
    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
    fixedNowIso?: string;
  },
): SqliteExecutionAttemptServices & {
  audit: MemoryExecutionAttemptAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-15T07:00:00.000Z"));
  const adapter = options.adapter ?? new TestExecutionAdapter();
  return createSqliteExecutionAttemptServices({
    ...options,
    adapter,
    clock,
    audit,
  }) as SqliteExecutionAttemptServices & {
    audit: MemoryExecutionAttemptAuditJournal;
  };
}

```

## MODIFIED `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
```typescript
import type { ToolDefinition } from "../tools/types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
} from "./types";

export type FakeToolScriptRound =
  | { kind: "message"; text: string }
  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

/**
 * Deterministic fake provider for unit/E2E non-live tests.
 * Never presented as live GPT; replies are tagged TEST/FAKE.
 */
export class FakeConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private callCount = 0;
  private roundCount = 0;
  private readonly scripted?: string[];
  private readonly failOnCall?: number;
  private readonly toolScript?: FakeToolScriptRound[];

  constructor(options?: {
    scripted?: string[];
    failOnCall?: number;
    toolScript?: FakeToolScriptRound[];
  }) {
    this.scripted = options?.scripted;
    this.failOnCall = options?.failOnCall;
    this.toolScript = options?.toolScript;
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    // Reuse F2 marker / analysis scripted JSON from complete().
    return this.complete(input.messages);
  }

  /** Test helper — Nora/provider invocation counter. */
  getCallCountForTests(): number {
    return this.callCount;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }

    // Explicit scripted replies win over content-marker specialization (W3-C
    // correction tests inject deterministic Nora strings).
    if (this.scripted !== undefined) {
      const historyLen = messages.length;
      const text =
        this.scripted[this.callCount - 1] ??
        `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
      return {
        text,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    if (
      messages.some((m) =>
        m.role === "system" &&
        m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
      )
    ) {
      // Specialized Fake CKC cognition keys off CONTENT markers only.
      // CKC IDs (ckc:studio:*) must never trigger specialized behavior (R1-01).
      const joined = messages.map((m) => m.content).join("\n").toLowerCase();
      const hasFraming =
        joined.includes("intention") &&
        (joined.includes("périmètre") ||
          joined.includes("perimetre") ||
          joined.includes("besoin réel") ||
          joined.includes("besoin reel"));
      const hasQa =
        joined.includes("verdict evidence-based") ||
        joined.includes("claims interdits") ||
        joined.includes("confirmation bias") ||
        joined.includes("green ci");
      const hasSecurity =
        joined.includes("risque résiduel") ||
        joined.includes("risque residuel") ||
        joined.includes("adversarial") ||
        joined.includes("secret en repo");
      const hasDelivery =
        joined.includes("anti scope creep") ||
        joined.includes("scope creep") ||
        joined.includes("implémentation bornée") ||
        joined.includes("implementation bornee");
      const hasExtensionProbe = joined.includes("w3d_extension_probe_marker");
      if (hasExtensionProbe) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — W3D_EXTENSION_PROBE_MARKER : type d'extension test-only via même chemin cognitif. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasSecurity) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — posture adversarial : risque résiduel majeures → HumanDecision explicite ; secret en repo → STOP. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasDelivery) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension ; pas de silent REAL ; Evidence/done honnête. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasQa) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — verdict evidence-based : claims interdits sans preuve ; refuser confirmation bias / green CI = validé. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasFraming) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — cadrage : clarifier intention et périmètre utile avant conception ; séparer besoin réel et solution présumée. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      return {
        text: "[TEST/FAKE · NON LIVE] RECOMMANDATION générique sans guidance CKC package résolu.",
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    // F2 deterministic structured intent JSON (TEST/FAKE only).
    // CORR-PROOF-01 D1: probe the current demand only — prior Session user text
    // in canonical conversation context must not steal fixture-marker matching.
    const markerProbe = (() => {
      const raw = lastUser?.content ?? "";
      const sep = "Demande courante (à évaluer):";
      const i = raw.indexOf(sep);
      return i >= 0 ? raw.slice(i + sep.length) : raw;
    })();
    if (markerProbe.includes("__MW5_HIGH_ASSURANCE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: {
            ambiguity: "high",
            reasoningDepth: "high",
            sourceBreadth: "high",
            toolDependency: "medium",
            contradictionRisk: "high",
            verificationNeed: "high",
          },
          objective: "Préparer une proposition High-Assurance bornée",
          scope: "Proposition Light/Standard sous stratégie High-Assurance",
          rephrasedRequest: "Préparer une recommandation sous High-Assurance",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Rec avant challenge"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Challenge avant Rec",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_COSMETIC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Peux-tu juste corriger l'orthographe cosmétique",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_CONTEXT_RESOLVED__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Demande déjà couverte par le contexte projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (
      markerProbe.includes("__MW5_TRUTH_C_ESTABLISHED__") ||
      markerProbe.includes("__MW5_CONSUMED_HD__")
    ) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Faire évoluer l'architecture déjà tranchée",
          scope: "Changement d'architecture déjà établi",
          rephrasedRequest: "Reprendre une prémisse déjà établie",
          outOfScope: ["Exécution"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Pas de re-challenge gratuit",
          criticalJustification: "Prémisse déjà établie / HD consommée",
          requestedOperation: "architecture change",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_QUESTIONNAIRE_ATTEMPT__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Formulaire d'intake multi-questions",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_AUTHORITY__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Frontière d'autorité non résolue",
          scope: "Décision humaine requise sans acte Nora",
          rephrasedRequest: "Escalader l'autorité non résolue",
          outOfScope: ["HumanDecision synthétisée"],
          risks: ["Confusion Rec/HD"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Escalade Pilote",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_SYNTH_HD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Tenter de faire synthétiser un GO Nora",
          scope: "Anti-synthèse HumanDecision",
          rephrasedRequest: "Décider GO maintenant",
          outOfScope: ["Décision Nora"],
          risks: ["Autorité usurpée"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "go now",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_DOCS_WRITE_GCEC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-design",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: "Rédiger le design fonctionnel borné",
          scope: "docs/functional-design.md uniquement",
          rephrasedRequest:
            "Produire docs/functional-design.md via cursor.docs_write.apply",
          outOfScope: ["Cursor REAL hors fake", "commit/push/PR"],
          risks: ["Contenu incomplet"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION RÉELLE CURSOR"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Artifact functional-design prêt pour revue",
          criticalJustification: null,
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: "functional_design",
            targetRepositoryRef: "acme/widget",
            targetPath: "docs/functional-design.md",
            scopeIn: ["docs/"],
            scopeOut: ["src/", ".github/"],
            expectedOutputs: ["docs/functional-design.md"],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: ["path_allowlist", "no_delete"],
            evidenceRequirements: [
              "git:commit",
              "git:push",
              "git:pull_request",
              "git:ci_status",
              "git:review_status",
              "git:merge",
              "git:post_merge_verification",
            ],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: "reversible",
            artifactBrief:
              "Functional design covering goals, actors, flows, and constraints",
            contentRequirements: [
              "goals",
              "actors",
              "main_flows",
              "constraints",
              "out_of_scope",
            ],
            exitRequirementKinds: [
              "artifact",
              "validation",
              "commit",
              "push",
              "pull_request",
              "ci",
              "review",
              "merge",
              "post_merge_verification",
            ],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_INFORMATIVE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Résumer le projet",
          scope: null,
          rephrasedRequest: "Résumer l'objectif du projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ACTIONABLE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer la prochaine étape fonctionnelle",
          scope: "Proposition bornée sans exécution",
          rephrasedRequest: "Préparer une proposition de livraison bornée",
          outOfScope: ["Cursor", "Git write", "PR"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition structurée prête pour revue",
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    /**
     * Light/Standard gated path: Morris gate via structural op token ("create pr")
     * without Critical profile — ZERO REAL Confirmation reachable.
     * Critical architecture (__F2_STRUCTURING__) remains R-T-A3-1 fail-closed.
     */
    if (markerProbe.includes("__F2_GATED_STANDARD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer une livraison bornée avec gate Morris",
          scope: "Proposition Standard gateable sans Critical",
          rephrasedRequest: "Préparer une proposition de livraison gated",
          outOfScope: ["Cursor REAL"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis — profil Standard",
          criticalJustification: null,
          requestedOperation: "create pr",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_STRUCTURING__")) {
      const content = markerProbe;
      let challengeResponseAssessment:
        | "sufficient"
        | "insufficient"
        | "unknown"
        | null = null;
      if (
        content.includes("__MW5_SATISFACTION_SUFFICIENT__") ||
        content.includes("__MW5_CHALLENGE_SATISFIED__")
      ) {
        challengeResponseAssessment = "sufficient";
      } else if (
        content.includes("__MW5_SATISFACTION_INSUFFICIENT__") ||
        /^\s*(ok|vas-y|go|d'accord|daccord)\b/i.test(
          content.replace(/__MW5_[A-Z0-9_]+__/g, "").replace(/__F2_[A-Z0-9_]+__/g, "").trim(),
        )
      ) {
        challengeResponseAssessment = "insufficient";
      } else if (
        /hors\s*sujet|off[\s-]?topic|couleur\s+pr[eé]f[eé]r[eé]e/i.test(content)
      ) {
        challengeResponseAssessment = "insufficient";
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment,
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          rephrasedRequest: "Préparer une proposition d'architecture",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Impact architecture"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis",
          criticalJustification: "Besoin métier structurant documenté",
          requestedOperation: "architecture change",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_AMBIGUOUS__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Fais le nécessaire",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_EXECUTION__")) {
      const content = markerProbe;
      let challengeResponseAssessment:
        | "sufficient"
        | "insufficient"
        | "unknown"
        | null = null;
      if (
        content.includes("__MW5_SATISFACTION_SUFFICIENT__") ||
        content.includes("__MW5_CHALLENGE_SATISFIED__")
      ) {
        challengeResponseAssessment = "sufficient";
      } else if (
        content.includes("__MW5_SATISFACTION_INSUFFICIENT__") ||
        /^\s*(ok|vas-y|go)\b/i.test(
          content
            .replace(/__MW5_[A-Z0-9_]+__/g, "")
            .replace(/__F2_[A-Z0-9_]+__/g, "")
            .trim(),
        )
      ) {
        challengeResponseAssessment = "insufficient";
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment,
          objective: "Lancer Cursor et créer une PR",
          scope: "Exécution produit demandée — refusée en F2",
          rephrasedRequest: "Demande d'exécution Cursor / PR",
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre F2"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
          requestedOperation: "cursor create pr",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:security",
          signals: {
            structuralChange: true,
            securityImpact: true,
            architectureImpact: true,
            dataImpact: true,
            irreversible: true,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Changer l'architecture sécurité",
          scope: "Impact structurant sécurité",
          rephrasedRequest: "Modifier architecture sécurité",
          outOfScope: ["Exécution"],
          risks: ["Impact critique"],
          reservations: [],
          stopConditions: ["Justification Critical obligatoire"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "architecture security change",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    const historyLen = messages.length;
    const text =
      this.scripted?.[this.callCount - 1] ??
      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
    return {
      text,
      usage: {
        inputTokens: 10 * this.callCount,
        outputTokens: 5 * this.callCount,
        totalTokens: 15 * this.callCount,
        model: "fake-test-model",
        providerResponseId: `fake-resp-${this.callCount}`,
      },
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `fake-round-${this.roundCount}`,
    };

    if (this.toolScript && this.toolScript.length > 0) {
      const step =
        this.toolScript[
          Math.min(this.roundCount - 1, this.toolScript.length - 1)
        ];
      if (step.kind === "tool_calls" && input.tools.length > 0) {
        return { kind: "tool_calls", toolCalls: step.toolCalls, usage };
      }
      if (step.kind === "message") {
        return { kind: "message", text: step.text, usage };
      }
    }

    // Auto: if last user asks for git/github and tools available, emit one tool call once
    const lastUser = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      lastUser && lastUser.type === "message" ? lastUser.content : "";

    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GIT_STATUS__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-git-status",
            name: "git_local_get_status",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GITHUB_REPO__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-gh-repo",
            name: "github_get_repository",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_DENIED_PATH__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-env",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: ".env" }),
          },
        ],
        usage,
      };
    }

    // After tools or default message
    const toolOutputs = input.items.filter(
      (i) => i.type === "function_call_output",
    );
    if (toolOutputs.length > 0) {
      return {
        kind: "message",
        text: `[TEST/FAKE · NON LIVE] Analyse outils (${toolOutputs.length}) — aucun succès implicite déclaré.`,
        usage,
      };
    }

    const messages = input.items
      .filter((i): i is Extract<ProviderInputItem, { type: "message" }> =>
        i.type === "message",
      )
      .map((m) => ({ role: m.role, content: m.content }));
    const completion = await this.complete(messages);
    return { kind: "message", text: completion.text, usage: completion.usage };
  }
}

```

## MODIFIED `projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts`
```typescript
/**
 * GitHub read adapter — transport-agnostic interface.
 * Default transport: encapsulated `gh` CLI (read-only). Optional REST via token.
 */
import { execFileSync } from "node:child_process";
import { decideGithubRepo } from "../security/pathPolicy";
import { digestText, redactSecrets, truncateText } from "../security/redaction";
import {
  CT_GITHUB_REPO_ALLOWLIST,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
  type ToolTransport,
} from "../tools/types";

export interface GithubRepositoryView {
  fullName: string;
  defaultBranch: string;
  description: string | null;
  url: string;
}

export interface GithubBranchView {
  name: string;
  sha: string;
}

export interface GithubCommitView {
  sha: string;
  message: string;
  author: string | null;
}

export interface GithubPullRequestView {
  number: number;
  title: string;
  state: string;
  headRef: string;
  baseRef: string;
  url: string;
}

export interface GithubCheckView {
  name: string;
  conclusion: string | null;
  status: string;
}

export interface GithubCommentView {
  id: number;
  user: string;
  bodyDigest: string;
}

export interface GithubReadPort {
  readonly transport: ToolTransport;
  getRepository(owner: string, name: string): Promise<GithubRepositoryView>;
  getBranch(owner: string, name: string, branch: string): Promise<GithubBranchView>;
  getCommit(owner: string, name: string, sha: string): Promise<GithubCommitView>;
  getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView>;
  listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]>;
  listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]>;
  /** Optional — Nora repository context (read-only). */
  listPullRequests?(
    owner: string,
    name: string,
    options?: { limit?: number; state?: "open" | "closed" | "all" },
  ): Promise<GithubPullRequestView[]>;
  listPullRequestFiles?(
    owner: string,
    name: string,
    number: number,
  ): Promise<string[]>;
  getPullRequestDiff?(
    owner: string,
    name: string,
    number: number,
  ): Promise<string>;
}

function assertRepo(owner: string, name: string): void {
  const d = decideGithubRepo(owner, name);
  if (!d.allowed) {
    throw Object.assign(new Error(d.reason ?? "repo denied"), {
      toolErrorCode: d.errorCode ?? "REPOSITORY_NOT_ALLOWED",
    });
  }
}

function ghJson(args: string[]): unknown {
  const out = execFileSync("gh", args, {
    encoding: "utf8",
    timeout: CT_TOOL_TIMEOUT_MS,
    maxBuffer: 2 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env },
  });
  return JSON.parse(out);
}

export function probeGhAuth(): {
  available: boolean;
  authenticated: boolean;
  reason?: string;
} {
  try {
    execFileSync("gh", ["--version"], {
      encoding: "utf8",
      timeout: 5000,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    return {
      available: false,
      authenticated: false,
      reason: "gh CLI introuvable",
    };
  }
  try {
    const status = execFileSync("gh", ["auth", "status"], {
      encoding: "utf8",
      timeout: 8000,
      stdio: ["ignore", "pipe", "pipe"],
    });
    // Never return token material — only presence of Logged in
    const ok = /Logged in to github\.com/i.test(status);
    return {
      available: true,
      authenticated: ok,
      reason: ok ? undefined : "gh non authentifié",
    };
  } catch {
    return {
      available: true,
      authenticated: false,
      reason: "gh auth status échec",
    };
  }
}

export class GhCliGithubReadAdapter implements GithubReadPort {
  readonly transport: ToolTransport = "gh_cli";

  async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}`,
      "--jq",
      "{full_name,default_branch,description,html_url}",
    ]) as Record<string, string | null>;
    return {
      fullName: String(data.full_name),
      defaultBranch: String(data.default_branch ?? "main"),
      description: data.description ? redactSecrets(String(data.description)) : null,
      url: String(data.html_url ?? ""),
    };
  }

  async getBranch(
    owner: string,
    name: string,
    branch: string,
  ): Promise<GithubBranchView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
      "--jq",
      "{name,commit:{sha:.commit.sha}}",
    ]) as { name: string; commit: { sha: string } };
    return { name: data.name, sha: data.commit.sha };
  }

  async getCommit(
    owner: string,
    name: string,
    sha: string,
  ): Promise<GithubCommitView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
      "--jq",
      "{sha,commit:{message:.commit.message,author:.commit.author.name}}",
    ]) as {
      sha: string;
      commit: { message: string; author: string | null };
    };
    return {
      sha: data.sha,
      message: redactSecrets(data.commit.message).slice(0, 500),
      author: data.commit.author,
    };
  }

  async getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/pulls/${number}`,
      "--jq",
      "{number,title,state,html_url,head:{ref:.head.ref},base:{ref:.base.ref}}",
    ]) as {
      number: number;
      title: string;
      state: string;
      html_url: string;
      head: { ref: string };
      base: { ref: string };
    };
    return {
      number: data.number,
      title: redactSecrets(data.title),
      state: data.state,
      headRef: data.head.ref,
      baseRef: data.base.ref,
      url: data.html_url,
    };
  }

  async listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
      "--jq",
      "[.[] | {id,user:.user.login,body}]",
    ]) as Array<{ id: number; user: string; body: string }>;
    return data.map((c) => ({
      id: c.id,
      user: c.user,
      bodyDigest: digestText(redactSecrets(c.body ?? "")),
    }));
  }

  async listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
      "--jq",
      "[.check_runs[] | {name,status,conclusion}]",
    ]) as Array<{
      name: string;
      status: string;
      conclusion: string | null;
    }>;
    return data.map((c) => ({
      name: c.name,
      status: c.status,
      conclusion: c.conclusion,
    }));
  }

  async listPullRequests(
    owner: string,
    name: string,
    options?: { limit?: number; state?: "open" | "closed" | "all" },
  ): Promise<GithubPullRequestView[]> {
    assertRepo(owner, name);
    const limit = Math.min(Math.max(options?.limit ?? 5, 1), 20);
    const state = options?.state ?? "open";
    const data = ghJson([
      "pr",
      "list",
      "--repo",
      `${owner}/${name}`,
      "--limit",
      String(limit),
      "--state",
      state,
      "--json",
      "number,title,state,headRefName,baseRefName,url",
    ]) as Array<{
      number: number;
      title: string;
      state: string;
      headRefName: string;
      baseRefName: string;
      url: string;
    }>;
    return data.map((p) => ({
      number: p.number,
      title: redactSecrets(p.title),
      state: p.state,
      headRef: p.headRefName,
      baseRef: p.baseRefName,
      url: p.url,
    }));
  }

  async listPullRequestFiles(
    owner: string,
    name: string,
    number: number,
  ): Promise<string[]> {
    assertRepo(owner, name);
    const data = ghJson([
      "pr",
      "view",
      String(number),
      "--repo",
      `${owner}/${name}`,
      "--json",
      "files",
    ]) as { files?: Array<{ path: string }> };
    return (data.files ?? []).map((f) => f.path);
  }

  async getPullRequestDiff(
    owner: string,
    name: string,
    number: number,
  ): Promise<string> {
    assertRepo(owner, name);
    const out = execFileSync(
      "gh",
      ["pr", "diff", String(number), "--repo", `${owner}/${name}`],
      {
        encoding: "utf8",
        timeout: CT_TOOL_TIMEOUT_MS,
        maxBuffer: 2 * 1024 * 1024,
        stdio: ["ignore", "pipe", "pipe"],
        env: { ...process.env },
      },
    );
    return truncateText(redactSecrets(out), CT_MAX_TOOL_RESULT_CHARS).text;
  }
}

/** REST transport — only when GITHUB_TOKEN explicitly set (never echoed). */
export class RestGithubReadAdapter implements GithubReadPort {
  readonly transport: ToolTransport = "github_rest";
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async api(pathname: string): Promise<unknown> {
    const res = await fetch(`https://api.github.com${pathname}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${this.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "sfia-studio-control-tower",
      },
      signal: AbortSignal.timeout(CT_TOOL_TIMEOUT_MS),
    });
    if (!res.ok) {
      throw Object.assign(
        new Error(`GitHub REST ${res.status}`),
        { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
      );
    }
    return res.json();
  }

  async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
    assertRepo(owner, name);
    const data = (await this.api(`/repos/${owner}/${name}`)) as Record<
      string,
      string | null
    >;
    return {
      fullName: String(data.full_name),
      defaultBranch: String(data.default_branch ?? "main"),
      description: data.description
        ? redactSecrets(String(data.description))
        : null,
      url: String(data.html_url ?? ""),
    };
  }

  async getBranch(
    owner: string,
    name: string,
    branch: string,
  ): Promise<GithubBranchView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
    )) as { name: string; commit: { sha: string } };
    return { name: data.name, sha: data.commit.sha };
  }

  async getCommit(
    owner: string,
    name: string,
    sha: string,
  ): Promise<GithubCommitView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
    )) as {
      sha: string;
      commit: { message: string; author: { name?: string } | null };
    };
    return {
      sha: data.sha,
      message: redactSecrets(data.commit.message).slice(0, 500),
      author: data.commit.author?.name ?? null,
    };
  }

  async getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/pulls/${number}`,
    )) as {
      number: number;
      title: string;
      state: string;
      html_url: string;
      head: { ref: string };
      base: { ref: string };
    };
    return {
      number: data.number,
      title: redactSecrets(data.title),
      state: data.state,
      headRef: data.head.ref,
      baseRef: data.base.ref,
      url: data.html_url,
    };
  }

  async listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
    )) as Array<{ id: number; user: { login: string }; body: string }>;
    return data.map((c) => ({
      id: c.id,
      user: c.user.login,
      bodyDigest: digestText(redactSecrets(c.body ?? "")),
    }));
  }

  async listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
    )) as {
      check_runs: Array<{
        name: string;
        status: string;
        conclusion: string | null;
      }>;
    };
    return (data.check_runs ?? []).map((c) => ({
      name: c.name,
      status: c.status,
      conclusion: c.conclusion,
    }));
  }
}

export type GithubTransportChoice =
  | { kind: "gh_cli"; adapter: GithubReadPort }
  | { kind: "github_rest"; adapter: GithubReadPort }
  | { kind: "unavailable"; reason: string };

/**
 * Resolve transport without silent fallback.
 * Prefer gh when authenticated; else REST if GITHUB_TOKEN set; else unavailable.
 */
export function resolveGithubReadTransport(): GithubTransportChoice {
  const forceRest = process.env.SFIA_GITHUB_TRANSPORT === "rest";
  const token = process.env.GITHUB_TOKEN?.trim() || process.env.GH_TOKEN?.trim();

  if (forceRest) {
    if (!token) {
      return {
        kind: "unavailable",
        reason: "SFIA_GITHUB_TRANSPORT=rest mais GITHUB_TOKEN absent",
      };
    }
    return { kind: "github_rest", adapter: new RestGithubReadAdapter(token) };
  }

  const gh = probeGhAuth();
  if (gh.available && gh.authenticated) {
    return { kind: "gh_cli", adapter: new GhCliGithubReadAdapter() };
  }

  if (token) {
    return { kind: "github_rest", adapter: new RestGithubReadAdapter(token) };
  }

  return {
    kind: "unavailable",
    reason: gh.reason ?? "GitHub transport indisponible",
  };
}

export function defaultGithubOwnerRepo(): { owner: string; name: string } {
  const [owner, name] = CT_GITHUB_REPO_ALLOWLIST[0].split("/");
  return { owner, name };
}

export function summarizeGithubPayload(data: unknown): string {
  const json = redactSecrets(JSON.stringify(data));
  return truncateText(json, CT_MAX_TOOL_RESULT_CHARS).text;
}

```

## MODIFIED `projects/sfia-studio/app/lib/platform/tools/types.ts`
```typescript
/**
 * Control Tower Fast Track — tool domain types (Lot A).
 * Discriminated unions; deny-by-default policies.
 */
export type ToolErrorCode =
  | "TOOL_NOT_FOUND"
  | "POLICY_DENIED"
  | "REPOSITORY_NOT_ALLOWED"
  | "PATH_NOT_ALLOWED"
  | "PATH_NOT_FOUND"
  | "INVALID_ARGUMENTS"
  | "RESULT_TOO_LARGE"
  | "TIMEOUT"
  | "TRANSPORT_UNAVAILABLE"
  | "PROVIDER_ERROR"
  | "REDACTION_REQUIRED"
  | "INTERNAL_ERROR"
  | "EXECUTION_DENIED_GATE_REQUIRED";

export type ToolCallStatus =
  | "requested"
  | "started"
  | "succeeded"
  | "failed"
  | "denied";

export type ToolTransport = "internal_git" | "gh_cli" | "github_rest" | "none";

export type ControlTowerToolName =
  | "git_local_get_status"
  | "git_local_get_head"
  | "git_local_search_files"
  | "git_local_search_content"
  | "git_local_read_file"
  | "git_local_get_diff"
  | "git_local_list_worktrees"
  | "git_local_get_log"
  | "github_get_repository"
  | "github_get_branch"
  | "github_get_commit"
  | "github_get_pull_request"
  | "github_list_pull_requests"
  | "github_list_pr_files"
  | "github_get_pr_diff"
  | "github_list_checks"
  | "github_list_pr_comments";

export interface ToolDefinition {
  name: ControlTowerToolName;
  description: string;
  parameters: Record<string, unknown>;
}

export interface ToolCallRequest {
  toolCallId: string;
  name: ControlTowerToolName | string;
  arguments: Record<string, unknown>;
  sessionId: string;
}

export interface ToolUsageMetadata {
  durationMs: number;
  transport: ToolTransport;
  truncated: boolean;
  bytes: number;
}

export type ToolCallResult =
  | {
      ok: true;
      toolCallId: string;
      name: string;
      status: "succeeded";
      data: unknown;
      summary: string;
      usage: ToolUsageMetadata;
    }
  | {
      ok: false;
      toolCallId: string;
      name: string;
      status: "failed" | "denied";
      errorCode: ToolErrorCode;
      message: string;
      usage: ToolUsageMetadata;
    };

export interface ToolPolicyDecision {
  allowed: boolean;
  reason?: string;
  errorCode?: ToolErrorCode;
}

export interface SourceReference {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
}

export interface ToolExecutionEventDetail {
  toolCallId: string;
  toolName: string;
  status: ToolCallStatus;
  durationMs?: number;
  source?: SourceReference;
  errorCode?: ToolErrorCode;
  resultDigest?: string;
  summary?: string;
}

export const CT_MAX_TOOL_ROUNDS = 4;
export const CT_MAX_TOOL_CALLS_PER_ROUND = 4;
export const CT_MAX_TOOL_RESULT_CHARS = 12_000;
export const CT_TOOL_TIMEOUT_MS = 15_000;
export const CT_DEFAULT_READ_MAX_BYTES = 32_768;
export const CT_GITHUB_REPO_ALLOWLIST = [
  "mcleland147/sfia-workspace",
] as const;

export const CONTROL_TOWER_TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: "git_local_get_status",
    description:
      "Read local git status (porcelain). Prefer this over asking the human to run git status. Read-only.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "git_local_get_head",
    description:
      "Read local HEAD sha and current branch. Prefer this for Git truth questions. Read-only.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "git_local_search_files",
    description:
      "Search tracked file PATHS by substring (filename/path only — not file contents). Read-only.",
    parameters: {
      type: "object",
      properties: {
        query: { type: "string" },
        limit: { type: "integer", minimum: 1, maximum: 50 },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "git_local_search_content",
    description:
      "Search file CONTENTS with fixed-string git grep (path + line + snippet). Use when the term may not appear in the filename. Search hit ≠ file read. Read-only.",
    parameters: {
      type: "object",
      properties: {
        query: { type: "string" },
        path: { type: "string" },
        limit: { type: "integer", minimum: 1, maximum: 50 },
        maxBytes: { type: "integer", minimum: 1, maximum: 65536 },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "git_local_read_file",
    description:
      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive) for deep/ranged reads. truncated/hasMore mean the document was not fully obtained. Paths validated server-side. Read-only.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string" },
        maxBytes: { type: "integer", minimum: 1, maximum: 65536 },
        startLine: { type: "integer", minimum: 1 },
        endLine: { type: "integer", minimum: 1 },
      },
      required: ["path"],
      additionalProperties: false,
    },
  },
  {
    name: "git_local_get_diff",
    description: "Read local git diff (optional path). Read-only.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string" },
        maxBytes: { type: "integer", minimum: 1, maximum: 65536 },
      },
      additionalProperties: false,
    },
  },
  {
    name: "git_local_list_worktrees",
    description: "List local git worktrees (paths redacted). Read-only.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "git_local_get_log",
    description: "Read limited local git log. Read-only.",
    parameters: {
      type: "object",
      properties: {
        limit: { type: "integer", minimum: 1, maximum: 20 },
      },
      additionalProperties: false,
    },
  },
  {
    name: "github_get_repository",
    description: "Read allowlisted GitHub repository metadata. Read-only.",
    parameters: {
      type: "object",
      properties: {
        owner: { type: "string" },
        name: { type: "string" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "github_get_branch",
    description:
      "Read a remote branch tip (use for comparing local HEAD to remote main when GitHub READ is available). Read-only.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
      additionalProperties: false,
    },
  },
  {
    name: "github_get_commit",
    description: "Read a remote commit summary. Read-only.",
    parameters: {
      type: "object",
      properties: {
        sha: { type: "string" },
      },
      required: ["sha"],
      additionalProperties: false,
    },
  },
  {
    name: "github_get_pull_request",
    description: "Read a pull request summary. Read-only.",
    parameters: {
      type: "object",
      properties: {
        number: { type: "integer", minimum: 1 },
      },
      required: ["number"],
      additionalProperties: false,
    },
  },
  {
    name: "github_list_pull_requests",
    description:
      "List recent pull requests for the bound repository (Nora repository context). Read-only. Does not create Evidence.",
    parameters: {
      type: "object",
      properties: {
        limit: { type: "integer", minimum: 1, maximum: 20 },
        state: { type: "string", enum: ["open", "closed", "all"] },
      },
      additionalProperties: false,
    },
  },
  {
    name: "github_list_pr_files",
    description:
      "List files changed in a pull request. Read-only. Context only — not Evidence.",
    parameters: {
      type: "object",
      properties: {
        number: { type: "integer", minimum: 1 },
      },
      required: ["number"],
      additionalProperties: false,
    },
  },
  {
    name: "github_get_pr_diff",
    description: "Read a pull request diff. Read-only. Context only.",
    parameters: {
      type: "object",
      properties: {
        number: { type: "integer", minimum: 1 },
      },
      required: ["number"],
      additionalProperties: false,
    },
  },
  {
    name: "github_list_checks",
    description: "List check runs for a ref. Read-only.",
    parameters: {
      type: "object",
      properties: {
        ref: { type: "string" },
      },
      required: ["ref"],
      additionalProperties: false,
    },
  },
  {
    name: "github_list_pr_comments",
    description: "List pull request review comments (truncated). Read-only.",
    parameters: {
      type: "object",
      properties: {
        number: { type: "integer", minimum: 1 },
      },
      required: ["number"],
      additionalProperties: false,
    },
  },
];

```

## MODIFIED `projects/sfia-studio/app/lib/platform/tools/toolRouter.ts`
```typescript
/**
 * Tool Router — validate, policy, execute, redact, emit events.
 * No Cursor start tools. No shell. Deny by default.
 * Domain-agnostic: EventSink injectable (no OPS1 DB dependency).
 */
import { randomUUID } from "node:crypto";
import type { EventSink } from "../observability/eventSink";
import { noopEventSink } from "../observability/eventSink";
import type { TechnicalEventType } from "../observability/types";
import { resolveWorkspaceRootFromAppCwd } from "../repository/workspaceRoot";
import { GitLocalReadAdapter } from "../repository/gitLocalReadAdapter";
import {
  defaultGithubOwnerRepo,
  resolveGithubReadTransport,
  summarizeGithubPayload,
  type GithubReadPort,
} from "../repository/githubReadAdapter";
import { digestText, redactSecrets, truncateText } from "../security/redaction";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
  type ControlTowerToolName,
  type ToolCallRequest,
  type ToolCallResult,
  type ToolDefinition,
  type ToolErrorCode,
  type ToolExecutionEventDetail,
  type ToolTransport,
} from "./types";

const KNOWN = new Set(
  CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name),
);

const OPS1_TO_TECHNICAL: Record<string, TechnicalEventType> = {
  TOOL_CALL_REQUESTED: "TOOL_REQUESTED",
  TOOL_CALL_STARTED: "TOOL_STARTED",
  TOOL_CALL_SUCCEEDED: "TOOL_SUCCEEDED",
  TOOL_CALL_DENIED: "TOOL_DENIED",
  TOOL_CALL_FAILED: "TOOL_FAILED",
};

const LARGE_STRING_KEYS = new Set([
  "content",
  "diff",
  "porcelain",
  "text",
  "snippet",
  "summary",
]);

function emitToolEvent(
  sink: EventSink,
  correlationId: string,
  ops1Type: string,
  detail: ToolExecutionEventDetail | Record<string, unknown>,
): void {
  const type = OPS1_TO_TECHNICAL[ops1Type] ?? "TOOL_FAILED";
  sink.emit({
    type,
    correlationId,
    detail: JSON.parse(redactSecrets(JSON.stringify(detail))) as Record<
      string,
      unknown
    >,
  });
}

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

function asInt(v: unknown, fallback: number): number {
  if (typeof v === "number" && Number.isFinite(v)) return Math.floor(v);
  if (typeof v === "string" && /^\d+$/.test(v)) return parseInt(v, 10);
  return fallback;
}

function asOptionalPositiveInt(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v) && v >= 1) {
    return Math.floor(v);
  }
  if (typeof v === "string" && /^\d+$/.test(v)) {
    const n = parseInt(v, 10);
    return n >= 1 ? n : undefined;
  }
  return undefined;
}

function failResult(
  toolCallId: string,
  name: string,
  errorCode: ToolErrorCode,
  message: string,
  started: number,
  transport: ToolTransport,
  status: "failed" | "denied" = "failed",
): ToolCallResult {
  return {
    ok: false,
    toolCallId,
    name,
    status,
    errorCode,
    message,
    usage: {
      durationMs: Date.now() - started,
      transport,
      truncated: false,
      bytes: 0,
    },
  };
}

/**
 * Cap large string fields BEFORE JSON serialization so the payload is always
 * valid JSON. Never mid-truncate a serialized JSON string then re-parse it.
 */
export function prepareToolDataForModel(
  data: unknown,
  maxChars = CT_MAX_TOOL_RESULT_CHARS,
): { data: unknown; truncated: boolean; json: string } {
  let truncated = false;

  const shrinkString = (s: string, budget: number): string => {
    const { text, truncated: t } = truncateText(s, Math.max(64, budget));
    if (t) truncated = true;
    return text;
  };

  const walk = (value: unknown, budget: number): unknown => {
    if (typeof value === "string") {
      return shrinkString(value, budget);
    }
    if (Array.isArray(value)) {
      const out: unknown[] = [];
      let remaining = budget;
      for (const item of value) {
        if (remaining < 32) {
          truncated = true;
          break;
        }
        const next = walk(item, remaining);
        const cost = JSON.stringify(next).length + 1;
        out.push(next);
        remaining -= cost;
      }
      if (out.length < value.length) truncated = true;
      return out;
    }
    if (value && typeof value === "object") {
      const obj = value as Record<string, unknown>;
      const keys = Object.keys(obj);
      const prioritized = [
        ...keys.filter((k) => LARGE_STRING_KEYS.has(k)),
        ...keys.filter((k) => !LARGE_STRING_KEYS.has(k)),
      ];
      const out: Record<string, unknown> = {};
      let remaining = budget;
      for (const key of prioritized) {
        if (remaining < 32) {
          truncated = true;
          break;
        }
        const next = walk(obj[key], remaining);
        out[key] = next;
        remaining -= JSON.stringify({ [key]: next }).length;
      }
      return out;
    }
    return value;
  };

  let current = walk(data, Math.max(256, maxChars - 128));
  let json = redactSecrets(JSON.stringify(current));

  // Hard shrink content-like fields if still over budget (still valid JSON).
  let guard = 0;
  while (json.length > maxChars && guard < 8) {
    guard += 1;
    truncated = true;
    if (current && typeof current === "object" && !Array.isArray(current)) {
      const obj = { ...(current as Record<string, unknown>) };
      for (const key of LARGE_STRING_KEYS) {
        if (typeof obj[key] === "string") {
          const budget = Math.max(
            64,
            Math.floor((maxChars - 200) / 2),
          );
          obj[key] = shrinkString(obj[key] as string, budget);
        }
      }
      current = obj;
    } else if (typeof current === "string") {
      current = shrinkString(current, Math.max(64, maxChars - 64));
    } else {
      current = {
        note: "payload capped",
        digest: digestText(json),
      };
    }
    json = redactSecrets(JSON.stringify(current));
  }

  if (json.length > maxChars) {
    // Last resort: replace with a tiny valid object (never invalid JSON).
    truncated = true;
    current = {
      note: "RESULT_CAPPED",
      digest: digestText(json),
    };
    json = JSON.stringify(current);
  }

  return { data: current, truncated, json };
}

export function resolveToolPathOrRef(
  name: string,
  args: Record<string, unknown>,
  data: unknown,
): string | null {
  const dataObj =
    data && typeof data === "object"
      ? (data as Record<string, unknown>)
      : null;

  switch (name as ControlTowerToolName) {
    case "git_local_read_file": {
      const p = asString(dataObj?.path) ?? asString(args.path);
      if (!p) return null;
      const start = dataObj?.startLine;
      const end = dataObj?.endLine;
      if (typeof start === "number" && typeof end === "number") {
        return `${p}#L${start}-${end}`;
      }
      return p;
    }
    case "git_local_search_files": {
      const q = asString(args.query);
      return q ? `path-search:${q}` : null;
    }
    case "git_local_search_content": {
      const q = asString(args.query);
      const scope = asString(args.path);
      if (!q) return null;
      return scope ? `content-search:${q}@${scope}` : `content-search:${q}`;
    }
    case "git_local_get_head": {
      const sha = asString(dataObj?.sha);
      const branch = asString(dataObj?.branch);
      if (sha && branch) return `local:HEAD:${branch}@${sha}`;
      return "local:HEAD";
    }
    case "git_local_get_status":
      return "local:status";
    case "git_local_get_diff": {
      const p = asString(args.path);
      return p ? `local:diff:${p}` : "local:diff";
    }
    case "git_local_list_worktrees":
      return "local:worktrees";
    case "git_local_get_log":
      return "local:log";
    case "github_get_repository": {
      const full = asString(dataObj?.fullName);
      return full ? `github:repo:${full}` : "github:repo";
    }
    case "github_get_branch": {
      const branch = asString(dataObj?.name) ?? asString(args.name);
      const sha = asString(dataObj?.sha);
      if (branch && sha) return `github:branch:${branch}@${sha}`;
      return branch ? `github:branch:${branch}` : "github:branch";
    }
    case "github_get_commit": {
      const sha = asString(dataObj?.sha) ?? asString(args.sha);
      return sha ? `github:commit:${sha}` : "github:commit";
    }
    case "github_get_pull_request": {
      const number =
        typeof dataObj?.number === "number"
          ? dataObj.number
          : asOptionalPositiveInt(args.number);
      return number ? `github:pr:#${number}` : "github:pr";
    }
    case "github_list_pull_requests":
      return "github:pr-list";
    case "github_list_pr_files": {
      const number = asOptionalPositiveInt(args.number);
      return number ? `github:pr-files:#${number}` : "github:pr-files";
    }
    case "github_get_pr_diff": {
      const number = asOptionalPositiveInt(args.number);
      return number ? `github:pr-diff:#${number}` : "github:pr-diff";
    }
    case "github_list_checks": {
      const ref = asString(args.ref);
      return ref ? `github:checks:${ref}` : "github:checks";
    }
    case "github_list_pr_comments": {
      const number = asOptionalPositiveInt(args.number);
      return number ? `github:pr-comments:#${number}` : "github:pr-comments";
    }
    default:
      return null;
  }
}

export function listExposableTools(): ToolDefinition[] {
  return CONTROL_TOWER_TOOL_DEFINITIONS;
}

export function createToolCallId(): string {
  return `tool-${randomUUID()}`;
}

export async function routeToolCall(
  request: ToolCallRequest,
  options?: {
    sink?: EventSink;
    workspaceRoot?: string;
    github?: GithubReadPort | null;
    githubUnavailableReason?: string;
  },
): Promise<ToolCallResult> {
  const sink = options?.sink ?? noopEventSink;
  const started = Date.now();
  const name = request.name;

  emitToolEvent(sink, request.sessionId, "TOOL_CALL_REQUESTED", {
    toolCallId: request.toolCallId,
    toolName: name,
    status: "requested",
  });

  // Hard deny any cursor_* tools in GPT loop — gate UI only
  if (String(name).startsWith("cursor_")) {
    const result = failResult(
      request.toolCallId,
      name,
      "EXECUTION_DENIED_GATE_REQUIRED",
      "EXECUTION_DENIED — MORRIS GATE REQUIRED",
      started,
      "none",
      "denied",
    );
    emitToolEvent(sink, request.sessionId, "TOOL_CALL_DENIED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "denied",
      errorCode: "EXECUTION_DENIED_GATE_REQUIRED",
      durationMs: result.usage.durationMs,
    });
    return result;
  }

  if (!KNOWN.has(name as ControlTowerToolName)) {
    const result = failResult(
      request.toolCallId,
      name,
      "TOOL_NOT_FOUND",
      `Outil inconnu: ${name}`,
      started,
      "none",
      "denied",
    );
    emitToolEvent(sink, request.sessionId, "TOOL_CALL_DENIED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "denied",
      errorCode: "TOOL_NOT_FOUND",
      durationMs: result.usage.durationMs,
    });
    return result;
  }

  emitToolEvent(sink, request.sessionId, "TOOL_CALL_STARTED", {
    toolCallId: request.toolCallId,
    toolName: name,
    status: "started",
  });

  const workspaceRoot =
    options?.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const git = new GitLocalReadAdapter(workspaceRoot);

  try {
    const withTimeout = async <T>(p: Promise<T>): Promise<T> => {
      return await Promise.race([
        p,
        new Promise<T>((_, reject) => {
          setTimeout(
            () =>
              reject(
                Object.assign(new Error("TIMEOUT"), {
                  toolErrorCode: "TIMEOUT",
                }),
              ),
            CT_TOOL_TIMEOUT_MS,
          );
        }),
      ]);
    };

    let data: unknown;
    let summary: string;
    let transport: ToolTransport = "internal_git";
    let truncated = false;

    switch (name as ControlTowerToolName) {
      case "git_local_get_status": {
        const r = git.getStatus();
        data = { porcelain: r.porcelain };
        summary = r.summary;
        break;
      }
      case "git_local_get_head": {
        const r = git.getHead();
        data = { sha: r.sha, branch: r.branch };
        summary = r.summary;
        break;
      }
      case "git_local_search_files": {
        const q = asString(request.arguments.query);
        if (!q) {
          return failResult(
            request.toolCallId,
            name,
            "INVALID_ARGUMENTS",
            "query requis",
            started,
            transport,
            "denied",
          );
        }
        const r = git.searchFiles(q, asInt(request.arguments.limit, 20));
        data = { paths: r.paths };
        summary = r.summary;
        break;
      }
      case "git_local_search_content": {
        const q = asString(request.arguments.query);
        if (!q) {
          return failResult(
            request.toolCallId,
            name,
            "INVALID_ARGUMENTS",
            "query requis",
            started,
            transport,
            "denied",
          );
        }
        const r = git.searchContent(q, {
          path: asString(request.arguments.path),
          limit: asInt(request.arguments.limit, 20),
          maxBytes: asInt(request.arguments.maxBytes, 32768),
        });
        data = { matches: r.matches, truncated: r.truncated };
        summary = r.summary;
        truncated = r.truncated;
        break;
      }
      case "git_local_read_file": {
        const p = asString(request.arguments.path);
        if (!p) {
          return failResult(
            request.toolCallId,
            name,
            "INVALID_ARGUMENTS",
            "path requis",
            started,
            transport,
            "denied",
          );
        }
        const startLine = asOptionalPositiveInt(request.arguments.startLine);
        const endLine = asOptionalPositiveInt(request.arguments.endLine);
        const r = git.readFile(p, asInt(request.arguments.maxBytes, 32768), {
          startLine,
          endLine,
        });
        data = {
          path: r.path,
          content: r.content,
          truncated: r.truncated,
          startLine: r.startLine,
          endLine: r.endLine,
          hasMore: r.hasMore,
        };
        summary = r.summary;
        truncated = r.truncated || r.hasMore;
        break;
      }
      case "git_local_get_diff": {
        const p = asString(request.arguments.path);
        const r = git.getDiff(p, asInt(request.arguments.maxBytes, 32768));
        data = { diff: r.diff, truncated: r.truncated };
        summary = r.summary;
        truncated = r.truncated;
        break;
      }
      case "git_local_list_worktrees": {
        const r = git.listWorktrees();
        data = { worktrees: r.worktrees };
        summary = r.summary;
        break;
      }
      case "git_local_get_log": {
        const r = git.getLog(asInt(request.arguments.limit, 5));
        data = { entries: r.entries };
        summary = r.summary;
        break;
      }
      default: {
        // GitHub tools
        let adapter = options?.github ?? null;
        let unavailable = options?.githubUnavailableReason;
        if (!adapter && options?.github === undefined) {
          const resolved = resolveGithubReadTransport();
          if (resolved.kind === "unavailable") {
            unavailable = resolved.reason;
          } else {
            adapter = resolved.adapter;
            transport = resolved.adapter.transport;
          }
        } else if (adapter) {
          transport = adapter.transport;
        }

        if (!adapter) {
          const reason = unavailable ?? "GitHub read indisponible";
          const result = failResult(
            request.toolCallId,
            name,
            "TRANSPORT_UNAVAILABLE",
            reason,
            started,
            "none",
          );
          emitToolEvent(sink, request.sessionId, "TOOL_CALL_FAILED", {
            toolCallId: request.toolCallId,
            toolName: name,
            status: "failed",
            errorCode: "TRANSPORT_UNAVAILABLE",
            durationMs: result.usage.durationMs,
            summary: reason,
          });
          return result;
        }

        const defaults = defaultGithubOwnerRepo();
        const owner =
          asString(request.arguments.owner) ?? defaults.owner;
        // `name` means repository for get_repository; branch tools use defaults.repo
        const repoName =
          name === "github_get_repository"
            ? (asString(request.arguments.name) ?? defaults.name)
            : (asString(request.arguments.repo) ?? defaults.name);

        switch (name as ControlTowerToolName) {
          case "github_get_repository": {
            const r = await withTimeout(
              adapter.getRepository(owner, repoName),
            );
            data = r;
            summary = `repo ${r.fullName}`;
            break;
          }
          case "github_get_branch": {
            const branch = asString(request.arguments.name);
            if (!branch) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "name (branch) requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getBranch(owner, repoName, branch),
            );
            data = r;
            summary = `branch ${r.name}@${r.sha.slice(0, 12)}`;
            break;
          }
          case "github_get_commit": {
            const sha = asString(request.arguments.sha);
            if (!sha) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "sha requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getCommit(owner, repoName, sha),
            );
            data = r;
            summary = `commit ${r.sha.slice(0, 12)}`;
            break;
          }
          case "github_get_pull_request": {
            const number = asInt(request.arguments.number, 0);
            if (number < 1) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "number requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getPullRequest(owner, repoName, number),
            );
            data = r;
            summary = `PR #${r.number} ${r.state}`;
            break;
          }
          case "github_list_pull_requests": {
            if (!adapter.listPullRequests) {
              return failResult(
                request.toolCallId,
                name,
                "TRANSPORT_UNAVAILABLE",
                "listPullRequests not available on this adapter",
                started,
                transport,
                "failed",
              );
            }
            const limit = asInt(request.arguments.limit, 5);
            const stateRaw = asString(request.arguments.state);
            const state =
              stateRaw === "closed" || stateRaw === "all" || stateRaw === "open"
                ? stateRaw
                : "open";
            const r = await withTimeout(
              adapter.listPullRequests(owner, repoName, { limit, state }),
            );
            data = { pullRequests: r };
            summary = `${r.length} PR(s)`;
            break;
          }
          case "github_list_pr_files": {
            const number = asInt(request.arguments.number, 0);
            if (number < 1 || !adapter.listPullRequestFiles) {
              return failResult(
                request.toolCallId,
                name,
                number < 1 ? "INVALID_ARGUMENTS" : "TRANSPORT_UNAVAILABLE",
                number < 1
                  ? "number requis"
                  : "listPullRequestFiles not available",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.listPullRequestFiles(owner, repoName, number),
            );
            data = { files: r };
            summary = `${r.length} file(s)`;
            break;
          }
          case "github_get_pr_diff": {
            const number = asInt(request.arguments.number, 0);
            if (number < 1 || !adapter.getPullRequestDiff) {
              return failResult(
                request.toolCallId,
                name,
                number < 1 ? "INVALID_ARGUMENTS" : "TRANSPORT_UNAVAILABLE",
                number < 1
                  ? "number requis"
                  : "getPullRequestDiff not available",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getPullRequestDiff(owner, repoName, number),
            );
            data = { diff: r };
            summary = `PR #${number} diff`;
            break;
          }
          case "github_list_checks": {
            const ref = asString(request.arguments.ref);
            if (!ref) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "ref requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.listChecks(owner, repoName, ref),
            );
            data = { checks: r };
            summary = `${r.length} check(s)`;
            break;
          }
          case "github_list_pr_comments": {
            const number = asInt(request.arguments.number, 0);
            if (number < 1) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "number requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.listPullRequestComments(owner, repoName, number),
            );
            data = { comments: r };
            summary = `${r.length} comment(s)`;
            break;
          }
          default:
            return failResult(
              request.toolCallId,
              name,
              "TOOL_NOT_FOUND",
              "outil non routé",
              started,
              transport,
              "denied",
            );
        }
        // Cap JSON size via structured summarize (still valid JSON)
        const serialized = summarizeGithubPayload(data);
        if (serialized.length >= CT_MAX_TOOL_RESULT_CHARS) {
          truncated = true;
        }
        data = JSON.parse(serialized);
      }
    }

    const prepared = prepareToolDataForModel(data, CT_MAX_TOOL_RESULT_CHARS);
    if (prepared.truncated) truncated = true;
    if (prepared.json.length > CT_MAX_TOOL_RESULT_CHARS * 4) {
      const result = failResult(
        request.toolCallId,
        name,
        "RESULT_TOO_LARGE",
        "Résultat trop volumineux",
        started,
        transport,
      );
      emitToolEvent(sink, request.sessionId, "TOOL_CALL_FAILED", {
        toolCallId: request.toolCallId,
        toolName: name,
        status: "failed",
        errorCode: "RESULT_TOO_LARGE",
        durationMs: result.usage.durationMs,
      });
      return result;
    }

    const pathOrRef = resolveToolPathOrRef(
      name,
      request.arguments,
      prepared.data,
    );
    const result: ToolCallResult = {
      ok: true,
      toolCallId: request.toolCallId,
      name,
      status: "succeeded",
      data: prepared.data,
      summary,
      usage: {
        durationMs: Date.now() - started,
        transport,
        truncated,
        bytes: prepared.json.length,
      },
    };
    emitToolEvent(sink, request.sessionId, "TOOL_CALL_SUCCEEDED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "succeeded",
      durationMs: result.usage.durationMs,
      resultDigest: digestText(summary),
      summary,
      source: {
        kind: String(name).startsWith("github_") ? "github" : "git_local",
        label: name,
        pathOrRef,
      },
    });
    return result;
  } catch (error) {
    const toolErrorCode =
      error &&
      typeof error === "object" &&
      "toolErrorCode" in error &&
      typeof (error as { toolErrorCode: unknown }).toolErrorCode === "string"
        ? ((error as { toolErrorCode: ToolErrorCode }).toolErrorCode)
        : "INTERNAL_ERROR";
    const message =
      error instanceof Error
        ? redactSecrets(error.message)
        : "Erreur outil interne";
    const status =
      toolErrorCode === "PATH_NOT_ALLOWED" ||
      toolErrorCode === "POLICY_DENIED" ||
      toolErrorCode === "REPOSITORY_NOT_ALLOWED" ||
      toolErrorCode === "INVALID_ARGUMENTS"
        ? "denied"
        : "failed";
    const deniedPath =
      asString(request.arguments.path) ??
      asString(request.arguments.query) ??
      null;
    const result = failResult(
      request.toolCallId,
      name,
      toolErrorCode,
      message,
      started,
      String(name).startsWith("github_") ? "gh_cli" : "internal_git",
      status,
    );
    emitToolEvent(
      sink,
      request.sessionId,
      status === "denied" ? "TOOL_CALL_DENIED" : "TOOL_CALL_FAILED",
      {
        toolCallId: request.toolCallId,
        toolName: name,
        status,
        errorCode: toolErrorCode,
        durationMs: result.usage.durationMs,
        summary: message,
        pathOrRef: deniedPath,
      },
    );
    return result;
  }
}

export function toolResultForModel(result: ToolCallResult): string {
  if (result.ok) {
    // data already capped to valid JSON-safe structure
    return redactSecrets(
      JSON.stringify({
        ok: true,
        summary: result.summary,
        data: result.data,
        truncated: result.usage.truncated,
      }),
    );
  }
  return redactSecrets(
    JSON.stringify({
      ok: false,
      errorCode: result.errorCode,
      message: result.message,
    }),
  );
}

```

## MODIFIED `projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts`
```typescript
/**
 * R1 — product live REAL boundary composition, OFF-by-default.
 *
 * When SFIA_STUDIO_CURSOR_REAL !== "1", returns undefined and constructs
 * nothing (no safety DB, no worktree dir, no Cursor bin search, no git, no process)
 * unless the fail-closed TEST/E2E deterministic Cursor boundary is enabled.
 *
 * The deterministic path substitutes only the external Cursor/process adapter.
 * It does not construct NodeCursorProcessRunner, worktrees, or safety sqlite.
 *
 * When the REAL flag is "1", constructs existing M4 classes only. Construction
 * does not launch a process, search the Cursor binary, or run git.
 * Launch remains gated by HumanDecision → Contract → Confirmation →
 * agent selection → Gate D → StartExecution.
 */
import fs from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  NodeCursorProcessRunner,
  NodeGitCommandRunner,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  type GitCommandRunner,
  type ProcessRunner,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealExecutionWorkspacePort,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";
import {
  assertDeterministicAndRealMutuallyExclusive,
  composeDeterministicCursorBoundary,
  isDeterministicCursorBoundaryEnabled,
} from "./deterministicExternalLaunchBoundary";

export type ComposeStudioProductRealBoundaryInput = {
  readonly env?: NodeJS.ProcessEnv;
  readonly processRunner?: ProcessRunner;
  readonly workspacePort?: RealExecutionWorkspacePort;
  readonly gitRunner?: GitCommandRunner;
  readonly safetyJournal?: RealLaunchSafetyJournalPort;
  readonly resolveCursorBin?: () => string | null;
  readonly repoRoot?: string;
  /** Optional managed-repo base for docs-write composition (CR-GCEC-03). */
  readonly managedRepoRootBase?: string;
  readonly studioRoot?: string;
  readonly execRoot?: string;
  readonly safetyJournalPath?: string;
};

export function resolveStudioSfiaExecRoot(studioRoot?: string): string {
  const root = path.resolve(studioRoot ?? path.resolve(process.cwd(), ".."));
  return path.join(root, ".sfia-exec");
}

/**
 * Filesystem-only git toplevel discovery. Does not spawn git.
 */
export function findGitToplevelByDotGit(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, ".git"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function composeStudioProductRealBoundary(
  input: ComposeStudioProductRealBoundaryInput = {},
): RealBoundaryWiring | undefined {
  const env = input.env ?? process.env;
  assertDeterministicAndRealMutuallyExclusive(env);
  if (isDeterministicCursorBoundaryEnabled(env)) {
    return composeDeterministicCursorBoundary(env);
  }
  if (!isStudioCursorRealEnabled(env)) {
    return undefined;
  }

  const studioRoot = path.resolve(
    input.studioRoot ?? path.resolve(process.cwd(), ".."),
  );
  const execBase = resolveStudioSfiaExecRoot(studioRoot);
  const execRoot = path.resolve(
    input.execRoot ?? path.join(execBase, "m4-worktrees"),
  );
  const safetyJournalPath = path.resolve(
    input.safetyJournalPath ??
      path.join(execBase, "m4", "launch-safety.sqlite"),
  );
  const repoRoot = path.resolve(
    input.repoRoot ??
      findGitToplevelByDotGit(process.cwd()) ??
      path.resolve(process.cwd(), "../.."),
  );

  const processRunner = input.processRunner ?? new NodeCursorProcessRunner();
  const gitRunner = input.gitRunner ?? new NodeGitCommandRunner();
  const workspacePort =
    input.workspacePort ??
    new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner,
    });
  const safetyJournal =
    input.safetyJournal ??
    (() => {
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });
      return new SqliteRealLaunchSafetyJournal({
        databasePath: safetyJournalPath,
      });
    })();
  const launchPort: RealExecutionLaunchPort =
    new StudioCursorRealLaunchGateway({
      processRunner,
      workspacePort,
      env,
      resolveCursorBin: input.resolveCursorBin,
    });

  return Object.freeze({
    launchPort,
    safetyJournal,
    ...(input.managedRepoRootBase
      ? { managedRepoRootBase: path.resolve(input.managedRepoRootBase) }
      : {}),
  });
}

```

## MODIFIED `projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts`
```typescript
/**
 * CR-GCEC-05 — qualifyGitCompletionProofSet matrix + CR negatives (subset).
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  buildTypedGitEvidenceFields,
  evaluateFunctionalDesignArtifactCompleteness,
  evaluateGcecArtifactEvidence,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const MERGE_SHA = "cccccccccccccccccccccccccccccccccccccccc";
const CYCLE = "cycinst:gcec-proof";
const REPO = "acme/widget";
const PATH = "docs/functional-design.md";

function baseEvidence(partial: Partial<Evidence> & { evidenceId: string }): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "other",
    status: partial.status ?? "available",
    source: partial.source ?? "test",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? { cycleInstanceId: CYCLE, projectId: "prj:gcec" },
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    updatedAt: partial.updatedAt ?? "2026-09-11T10:00:00.000Z",
    version: partial.version ?? 1,
    location: partial.location,
    digest: partial.digest,
    technicalResultRef: partial.technicalResultRef,
    producedAt: "2026-09-11T10:00:00.000Z",
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:test",
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:test",
    },
  } as unknown as Evidence;
}

function typed(
  source: TypedGitEvidenceSource,
  payload: Record<string, unknown>,
  evidenceId: string,
  status: Evidence["status"] = "available",
): Evidence {
  const fields = buildTypedGitEvidenceFields(source, payload as never);
  if (!fields.ok) throw new Error(fields.reason);
  return baseEvidence({
    evidenceId,
    source: fields.fields.source,
    location: fields.fields.location,
    digest: fields.fields.digest ?? DIGEST,
    status,
    technicalResultRef: `studio:repository_read_verified:${source}`,
    bindings: {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
  });
}

const expected = {
  repositoryRef: REPO,
  targetPath: PATH,
  artifactDigest: DIGEST,
  cycleInstanceId: CYCLE,
  executionContractId: "xct:gcec",
  projectId: "prj:gcec",
};

function fullSet(): Evidence[] {
  return [
    typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: FULL_SHA, message: "docs" },
      "ev:commit",
    ),
    typed(
      "git:remote_push",
      {
        repositoryRef: REPO,
        remote: "origin",
        refName: "gcec/docs",
        commitSha: FULL_SHA,
      },
      "ev:push",
    ),
    typed(
      "git:pull_request",
      {
        repositoryRef: REPO,
        prNumber: 1,
        headSha: FULL_SHA,
        state: "open",
      },
      "ev:pr",
    ),
    typed(
      "git:ci_status",
      {
        repositoryRef: REPO,
        commitSha: FULL_SHA,
        conclusion: "success",
      },
      "ev:ci",
    ),
    typed(
      "git:review_status",
      {
        repositoryRef: REPO,
        prNumber: 1,
        state: "approved",
      },
      "ev:review",
    ),
    typed(
      "git:merge",
      {
        repositoryRef: REPO,
        mergeCommitSha: MERGE_SHA,
        baseRef: "main",
        prNumber: 1,
      },
      "ev:merge",
    ),
    typed(
      "git:post_merge_verification",
      {
        repositoryRef: REPO,
        targetBranch: "main",
        targetSha: MERGE_SHA,
        artifactPath: PATH,
        artifactDigest: DIGEST,
      },
      "ev:post",
    ),
  ];
}

describe("CR-GCEC-05 qualifyGitCompletionProofSet matrix", () => {
  it("legacy lexical alone → BLOCKING", () => {
    const legacy = baseEvidence({
      evidenceId: "ev:legacy",
      source: "git-repository-proof",
      location: "git://legacy",
      status: "available",
    });
    const r = qualifyGitCompletionProofSet({
      evidence: [legacy],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("post_merge alone → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        typed(
          "git:post_merge_verification",
          {
            repositoryRef: REPO,
            targetBranch: "main",
            targetSha: MERGE_SHA,
            artifactPath: PATH,
            artifactDigest: DIGEST,
          },
          "ev:post-only",
        ),
      ],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.missing.length).toBeGreaterThan(0);
    }
  });

  it("CI fail → BLOCKING", () => {
    const set = fullSet().map((e) =>
      e.source === "git:ci_status"
        ? typed(
            "git:ci_status",
            {
              repositoryRef: REPO,
              commitSha: FULL_SHA,
              conclusion: "failure",
            },
            "ev:ci-fail",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("ci_not_success");
    }
  });

  it("review pending → BLOCKING", () => {
    const set = fullSet().map((e) =>
      e.source === "git:review_status"
        ? typed(
            "git:review_status",
            {
              repositoryRef: REPO,
              prNumber: 1,
              state: "pending",
            },
            "ev:review-pending",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("review_not_approved");
    }
  });

  it("reported (available, no studio verify marker) full set → BLOCKING", () => {
    const reported = fullSet().map((e) => ({
      ...e,
      status: "available" as const,
      technicalResultRef: undefined,
    }));
    const r = qualifyGitCompletionProofSet({
      evidence: reported,
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("status_not_verified");
    }
  });

  it("full studio-verified set → SATISFIED", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      requirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
      expected,
    });
    expect(r).toEqual({
      status: "SATISFIED",
      present: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
    });
  });

  it("digest / repo / cycle mismatch → BLOCKING", () => {
    const badDigest = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      expected: { ...expected, artifactDigest: "sha256:" + "0".repeat(64) },
    });
    expect(badDigest.status).toBe("BLOCKING");

    const badRepo = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      expected: { ...expected, repositoryRef: "other/repo" },
    });
    expect(badRepo.status).toBe("BLOCKING");

    const badCycle = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      expected: { ...expected, cycleInstanceId: "cycinst:other" },
    });
    expect(badCycle.status).toBe("BLOCKING");
  });
});

describe("CR-GCEC-04 artifact completeness strict", () => {
  it("requires all four GCEC bindings", () => {
    const loose = baseEvidence({
      evidenceId: "ev:art-loose",
      type: "artifact",
      status: "available",
      digest: DIGEST,
      location: PATH,
      bindings: { projectId: "prj:gcec", cycleInstanceId: CYCLE },
    });
    expect(evaluateGcecArtifactEvidence(loose).ok).toBe(false);
    expect(evaluateFunctionalDesignArtifactCompleteness(loose).ok).toBe(false);

    const strict = baseEvidence({
      evidenceId: "ev:art-strict",
      type: "artifact",
      status: "available",
      digest: DIGEST,
      location: PATH,
      bindings: {
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        executionContractId: "xct:gcec",
        executionAttemptId: "att:gcec",
      },
    });
    expect(evaluateGcecArtifactEvidence(strict)).toEqual({ ok: true, gaps: [] });
  });
});

```

## MODIFIED `projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts`
```typescript
/**
 * GCEC One-Lot Delivery — deterministic unit + light integration proofs.
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  validateRepositoryBinding,
  type ActorReference,
  type ProjectRepositoryBinding,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  assessFinalizationObligations,
  createSqliteCycleServices,
  deriveCycleObligationSnapshot,
  deriveFinalizationApplicability,
  isGitCompletionProofEvidence,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  type CycleInstance,
  type ProjectTrajectory,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  evaluateFunctionalDesignArtifactCompleteness,
  TYPED_GIT_EVIDENCE_SOURCES,
  validateTypedGitEvidencePayload,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import {
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  type RealLaunchRequest,
} from "@/lib/oa/execution-attempt";
import {
  LOCAL_MORRIS_M3_ACTOR,
  LOCAL_PILOTE_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
  type HumanDecision,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import {
  authorizedM3ResolutionKind,
  selectProductM3ResolutionProfile,
} from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
import {
  BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
  boundedReadOnlyM3ResolutionProfile,
} from "@/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile";
import { boundedDocsWriteM3ResolutionProfile } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { mustBlocksNoGovernedEffects } from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const MERGE_SHA = "cccccccccccccccccccccccccccccccccccccccc";

const VALID_BINDING: ProjectRepositoryBinding = {
  provider: "github",
  identity: "acme/widget",
  remoteUrl: "https://github.com/acme/widget.git",
  defaultBranch: "main",
  baseSha: FULL_SHA,
  pathRoot: "docs",
};

const STEPS_DONE: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "done",
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

function tempDbPath(name: string): string {
  return path.join(tempDir("sfia-gcec-"), name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-11T08:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function baseCycle(overrides?: Partial<CycleInstance>): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: "cyc:gcec-base",
    cycleTypeId: "cyc:functional-design",
    projectId: "prj:gcec-base",
    profile: "Standard",
    status: "active",
    createdAt: "2026-09-11T08:00:00.000Z",
    ...overrides,
  };
}

function baseTrajectory(
  overrides?: Partial<ProjectTrajectory>,
): ProjectTrajectory {
  return {
    schemaVersion: "0.1.0-oa",
    trajectoryId: "trj:gcec",
    projectId: "prj:gcec-base",
    version: 1,
    status: "active",
    steps: STEPS_DONE,
    ...overrides,
  };
}

function makeObligationPolicyDecision(
  cycleInstanceId: string,
  projectId: string,
  selectedOptionId: string,
): HumanDecision {
  return {
    schemaVersion: "0.1.0-oa",
    decisionId: `dec:policy-${selectedOptionId}`,
    projectId,
    cycleInstanceId,
    subject: obligationPolicySubjectFor(cycleInstanceId),
    options: [
      { optionId: selectedOptionId, label: selectedOptionId },
      { optionId: "opt:accept", label: "Accept" },
    ],
    selectedOptionId,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    effectiveAt: "2026-09-11T08:00:00.000Z",
    recordedAt: "2026-09-11T08:00:00.000Z",
  } as HumanDecision;
}

function makeEvidence(
  partial: Partial<Evidence> & Pick<Evidence, "evidenceId" | "type" | "status">,
): Evidence {
  return {
    schemaVersion: "0.1.0-oa",
    source: partial.source ?? "test-source",
    sourceKind: partial.sourceKind ?? "human",
    producedAt: "2026-09-11T08:00:00.000Z",
    classification: "supporting",
    storageMode: "reference",
    availability: "available",
    bindings: partial.bindings ?? {},
    containsSecrets: false,
    provenance: {
      recordedAt: "2026-09-11T08:00:00.000Z",
      recordedBy: { actorId: "actor:test", role: "system" },
    },
    version: 1,
    createdAt: "2026-09-11T08:00:00.000Z",
    ...partial,
  } as Evidence;
}

function validPayloadFor(source: TypedGitEvidenceSource): unknown {
  switch (source) {
    case "git:working_tree_diff":
      return { repositoryRef: "acme/widget", summary: "diff" };
    case "git:local_commit":
      return {
        repositoryRef: "acme/widget",
        commitSha: FULL_SHA,
        message: "wip",
      };
    case "git:remote_push":
      return {
        repositoryRef: "acme/widget",
        remote: "origin",
        refName: "refs/heads/feature",
        commitSha: FULL_SHA,
      };
    case "git:pull_request":
      return {
        repositoryRef: "acme/widget",
        prNumber: 1,
        headSha: FULL_SHA,
      };
    case "git:ci_status":
      return {
        repositoryRef: "acme/widget",
        commitSha: FULL_SHA,
        conclusion: "success",
      };
    case "git:review_status":
      return { repositoryRef: "acme/widget", state: "approved" };
    case "git:merge":
      return {
        repositoryRef: "acme/widget",
        mergeCommitSha: MERGE_SHA,
        baseRef: "main",
      };
    case "git:post_merge_verification":
      return {
        repositoryRef: "acme/widget",
        targetBranch: "main",
        targetSha: MERGE_SHA,
        artifactPath: "docs/functional-design.md",
        artifactDigest: VALID_DIGEST,
      };
    default: {
      const _e: never = source;
      return _e;
    }
  }
}

function docsWriteLaunchRequest(
  action: string = M4_BOUNDED_DOCS_WRITE_ACTION,
): RealLaunchRequest {
  return {
    attemptId: "att:gcec-docs-write",
    executionContractId: "xct:gcec-docs",
    executionContractVersion: 1,
    semanticFingerprint: "fp:gcec",
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    adapterRef: "adp:m4-cursor-cli-real",
    correlationId: "cor:gcec-docs",
    baseHeadSha: FULL_SHA,
    action,
    timeoutMs: 5_000,
  };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("1 — validateRepositoryBinding", () => {
  it("accepts valid github binding", () => {
    expect(validateRepositoryBinding(VALID_BINDING)).toBeNull();
  });

  it("rejects pathRoot traversal ../x", () => {
    const v = validateRepositoryBinding({
      ...VALID_BINDING,
      pathRoot: "../x",
    });
    expect(v?.reason).toBe("repository_path_root_traversal");
  });

  it("rejects empty identity", () => {
    const v = validateRepositoryBinding({
      ...VALID_BINDING,
      identity: "   ",
    });
    expect(v?.reason).toBe("repository_identity_invalid");
  });

  it("rejects remote/identity mismatch", () => {
    const v = validateRepositoryBinding({
      ...VALID_BINDING,
      remoteUrl: "https://github.com/other/repo.git",
    });
    expect(v?.reason).toBe("repository_remote_identity_mismatch");
  });

  it("rejects bad baseSha", () => {
    const v = validateRepositoryBinding({
      ...VALID_BINDING,
      baseSha: "not-a-sha",
    });
    expect(v?.reason).toBe("repository_base_sha_invalid");
  });
});

describe("2 — deriveCycleObligationSnapshot", () => {
  it("repo-backed cyc:functional-design makes artifact/EC/evidence/RB/git/exit APPLICABLE", () => {
    const snap = deriveCycleObligationSnapshot({
      projectId: "prj:gcec",
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(snap.repositoryBound).toBe(true);
    expect(snap.mustFamilies).toEqual(
      expect.arrayContaining([
        "artifact",
        "execution_contract",
        "evidence",
        "review_bundle",
        "git_repository",
        "exit_criteria",
      ]),
    );
    for (const family of snap.mustFamilies) {
      const entry = snap.entries.find((e) => e.family === family);
      expect(entry?.applicability).toBe("APPLICABLE");
    }
  });

  it("without repo binding does NOT invent global git MUST for functional-design", () => {
    const snap = deriveCycleObligationSnapshot({
      projectId: "prj:gcec",
      cycleTypeId: "cyc:functional-design",
    });
    expect(snap.repositoryBound).toBe(false);
    expect(snap.mustFamilies).toEqual(["exit_criteria"]);
    expect(snap.entries.some((e) => e.family === "git_repository")).toBe(false);
  });
});

describe("3 — deriveFinalizationApplicability pre-row APPLICABLE", () => {
  it("families APPLICABLE before EC/Evidence; absence missing/blocking", () => {
    const cycleId = "cyc:gcec-pre";
    const projectId = "prj:gcec-pre";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(rules.artifact).toBe("APPLICABLE");
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.evidence).toBe("APPLICABLE");
    expect(rules.review_bundle).toBe("APPLICABLE");
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.exit_criteria).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(false);
    expect(rules.artifactProofPresent).toBe(false);

    const assessment = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-11T08:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId }),
      applicability: rules,
      executionContracts: [],
    });
    expect(assessment.canComplete).toBe(false);
    expect(assessment.blockers).toEqual(
      expect.arrayContaining([
        "artifact_missing",
        "execution_contract_missing",
        "evidence_missing",
        "review_bundle_missing",
        "git_proof_missing",
      ]),
    );
  });
});

describe("4 — MUST + opt:no-governed-effects contradiction", () => {
  it("families stay APPLICABLE with contradictions (corrProof05 pattern)", () => {
    const cycleId = "cyc:gcec-contradict";
    const projectId = "prj:gcec-contradict";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(rules.artifact).toBe("APPLICABLE");
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.evidence).toBe("APPLICABLE");
    expect(rules.review_bundle).toBe("APPLICABLE");
    expect(rules.contradictions?.length).toBeGreaterThan(0);
    expect(
      rules.contradictions?.some((c) => c.conflictingOptionId === OBLIGATION_POLICY_NO_GOVERNED_EFFECTS),
    ).toBe(true);

    const assessment = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-11T08:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId }),
      applicability: rules,
    });
    expect(assessment.canComplete).toBe(false);
    expect(assessment.blockers.some((b) => b.includes("contradicts"))).toBe(
      true,
    );
  });
});

describe("5–6 — DecisionBasis docs_write + prepareM3FromDecision", () => {
  async function bootPrepareStack(name: string) {
    const dbPath = tempDbPath(name);
    const projects = buildProjectServices(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m3-gcec",
      title: "GCEC M3",
      objective: "docs-write prepare",
      context: "gcec",
      scope: "gcec-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m3-gcec-v1",
      idempotencyKey: `idem:${name}`,
    });
    const cycles = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });
    const authority = new MemoryAuthorityResolver();
    const decisions = createTestSqliteDecisionServices({
      projectServices: projects,
      cycleServices: cycles,
      productStore: projects.store,
      authorityResolver: authority,
    });
    const contracts = createTestSqliteExecutionContractServices({
      projectServices: projects,
      decisionServices: decisions,
      cycleServices: cycles,
      productStore: projects.store,
      authorityResolver: authority,
    });
    return { projects, decisions, contracts, authority };
  }

  it("DecisionBasis executionBasis docs_write fields assign and match docs-write profile constants", () => {
    const basis: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:gcec-docs",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "write functional design",
        op: "cursor.docs_write.apply",
      }),
      projectId: "prj:m3-gcec",
      proposalContext: {
        lpsId: "lps:m3-gcec-v1",
        lpsVersion: 1,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "write functional design",
        intentKind: "docs_write",
        artifactType: "functional_design",
        targetRepositoryRef: "acme/widget",
        targetPath: "docs/functional-design.md",
        scopeIn: ["docs/"],
        requestedOperation: "cursor.docs_write.apply",
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibilityExpectation: "reversible",
      },
    };
    expect(basis.executionBasis.intentKind).toBe("docs_write");
    expect(basis.executionBasis.targetPath).toBe("docs/functional-design.md");
    expect(basis.executionBasis.targetRepositoryRef).toBe("acme/widget");
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile.action).toBe(basis.executionBasis.requestedOperation);
    expect(profile.target).toBe("workspace.isolated.docs_write");
    expect(profile.requiredCapabilities).toContain("cap:cursor.docs_write");
  });

  it("docs_write missing target → TARGET_UNRESOLVED; full intent → action/cap/target", async () => {
    const missing = await bootPrepareStack("docs-missing.sqlite");
    const scopeMissing = "gcec-docs-missing";
    const regMissing = registerM3LocalMorrisAuthority({
      authorityResolver: missing.authority,
      scope: scopeMissing,
      issuedAt: "2026-09-11T08:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:docs-missing",
    });
    expect(regMissing.ok).toBe(true);
    if (!regMissing.ok) return;

    const basisMissing: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:docs-missing",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "write",
        op: "cursor.docs_write.apply",
      }),
      projectId: "prj:m3-gcec",
      proposalContext: {
        lpsId: "lps:m3-gcec-v1",
        lpsVersion: 1,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "write",
        scope: scopeMissing,
        intentKind: "docs_write",
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: "reversible",
      },
    };
    const recordedMissing = await missing.decisions.recordHumanDecision.execute({
      decisionId: "dec:gcec:docs-missing",
      projectId: "prj:m3-gcec",
      subject: "dec:gcec:docs-missing",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: scopeMissing,
      authorityEvidenceId: regMissing.evidenceId,
      decisionBasis: basisMissing,
      linkToLivingProjectState: true,
      expectedLpsVersion: 1,
    });
    expect(recordedMissing.ok).toBe(true);
    const lpsMissing = await missing.projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m3-gcec",
    });
    expect(lpsMissing.ok).toBe(true);
    if (!lpsMissing.ok) return;

    const preparedMissing = await prepareM3FromDecision({
      projectId: "prj:m3-gcec",
      decisionId: "dec:gcec:docs-missing",
      currentContext: {
        projectId: "prj:m3-gcec",
        lpsId: lpsMissing.livingProjectState.lpsVersionId,
        lpsVersion: lpsMissing.livingProjectState.version,
        doctrineDigest: VALID_DIGEST,
      },
      deps: {
        decisionServices: missing.decisions,
        authorityResolver: missing.authority,
        executionContractServices: missing.contracts,
        nowIso: () => "2026-09-11T08:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(preparedMissing.ok).toBe(true);
    if (!preparedMissing.ok) return;
    expect(preparedMissing.payload.contract.target).toBe("UNRESOLVED_TARGET");
    expect(preparedMissing.payload.contract.stopConditions).toContain(
      "TARGET_UNRESOLVED",
    );
    expect(preparedMissing.payload.contract.action).toBe(
      "cursor.docs_write.apply",
    );
    expect(preparedMissing.payload.contract.requiredCapabilities).toContain(
      "cap:cursor.docs_write",
    );

    const full = await bootPrepareStack("docs-full.sqlite");
    const scopeFull = "gcec-docs-full";
    const regFull = registerM3LocalMorrisAuthority({
      authorityResolver: full.authority,
      scope: scopeFull,
      issuedAt: "2026-09-11T08:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:docs-full",
    });
    expect(regFull.ok).toBe(true);
    if (!regFull.ok) return;

    const basisFull: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:docs-full",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "write fd",
        op: "cursor.docs_write.apply",
      }),
      projectId: "prj:m3-gcec",
      proposalContext: {
        lpsId: "lps:m3-gcec-v1",
        lpsVersion: 1,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "write fd",
        scope: scopeFull,
        intentKind: "docs_write",
        requestedOperation: "cursor.docs_write.apply",
        targetRepositoryRef: "acme/widget",
        targetPath: "docs/functional-design.md",
        scopeIn: ["docs/"],
        reversibilityExpectation: "reversible",
      },
    };
    const recordedFull = await full.decisions.recordHumanDecision.execute({
      decisionId: "dec:gcec:docs-full",
      projectId: "prj:m3-gcec",
      subject: "dec:gcec:docs-full",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: scopeFull,
      authorityEvidenceId: regFull.evidenceId,
      decisionBasis: basisFull,
      linkToLivingProjectState: true,
      expectedLpsVersion: 1,
    });
    expect(recordedFull.ok).toBe(true);
    const lpsFull = await full.projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m3-gcec",
    });
    expect(lpsFull.ok).toBe(true);
    if (!lpsFull.ok) return;

    const preparedFull = await prepareM3FromDecision({
      projectId: "prj:m3-gcec",
      decisionId: "dec:gcec:docs-full",
      currentContext: {
        projectId: "prj:m3-gcec",
        lpsId: lpsFull.livingProjectState.lpsVersionId,
        lpsVersion: lpsFull.livingProjectState.version,
        doctrineDigest: VALID_DIGEST,
      },
      deps: {
        decisionServices: full.decisions,
        authorityResolver: full.authority,
        executionContractServices: full.contracts,
        nowIso: () => "2026-09-11T08:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(preparedFull.ok).toBe(true);
    if (!preparedFull.ok) return;
    expect(preparedFull.payload.contract.action).toBe("cursor.docs_write.apply");
    expect(preparedFull.payload.contract.target).toBe(
      "workspace.isolated.docs_write",
    );
    expect(preparedFull.payload.contract.requiredCapabilities).toEqual([
      "cap:cursor.docs_write",
    ]);
    expect(preparedFull.payload.contract.stopConditions).not.toContain(
      "TARGET_UNRESOLVED",
    );
  });
});

describe("7–8 — M3 resolution profiles", () => {
  it("preferBoundedDocsWriteProfile → bounded_docs_write; RO path unchanged", () => {
    const docs = selectProductM3ResolutionProfile({
      preferBoundedDocsWriteProfile: true,
    });
    expect(docs.kind).toBe("bounded_docs_write");
    expect(docs.profile.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(docs.profile.target).toBe("workspace.isolated.docs_write");

    const ro = selectProductM3ResolutionProfile({
      preferBoundedReadOnlyProfile: true,
      env: { NODE_ENV: "test" },
    });
    expect(ro.kind).toBe("bounded_read_only");
    expect(ro.profile).toEqual(boundedReadOnlyM3ResolutionProfile());
  });

  it("authorizedM3ResolutionKind matches docs-write profile", () => {
    const docsProfile = boundedDocsWriteM3ResolutionProfile();
    const roProfile = boundedReadOnlyM3ResolutionProfile();
    expect(
      authorizedM3ResolutionKind({
        action: docsProfile.action,
        target: docsProfile.target,
        scope: docsProfile.scope ?? "studio.gcec.docs_write",
        reversibility: docsProfile.reversibility,
        requiredCapabilities: docsProfile.requiredCapabilities,
        constraints: docsProfile.constraints ?? [],
        stopConditions: docsProfile.stopConditions ?? [],
      }),
    ).toBe("bounded_docs_write");
    expect(
      authorizedM3ResolutionKind({
        action: roProfile.action,
        target: roProfile.target,
        scope: roProfile.scope ?? "studio.m4.real_off",
        reversibility: roProfile.reversibility,
        requiredCapabilities: roProfile.requiredCapabilities,
        constraints: roProfile.constraints ?? [],
        stopConditions: roProfile.stopConditions ?? [],
      }),
    ).toBe("bounded_read_only");
  });
});

describe("9 — evaluateFunctionalDesignArtifactCompleteness", () => {
  it("ok when complete; reports gaps when incomplete", () => {
    const ok = evaluateFunctionalDesignArtifactCompleteness(
      makeEvidence({
        evidenceId: "evd:art-ok",
        type: "artifact",
        status: "available",
        digest: VALID_DIGEST,
        location: "docs/functional-design.md",
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: "cyc:gcec",
          executionContractId: "xct:gcec",
          executionAttemptId: "att:gcec",
        },
      }),
    );
    expect(ok).toEqual({ ok: true, gaps: [] });

    const gaps = evaluateFunctionalDesignArtifactCompleteness(
      makeEvidence({
        evidenceId: "evd:art-gap",
        type: "other",
        status: "unavailable",
        bindings: {},
      }),
    );
    expect(gaps.ok).toBe(false);
    expect(gaps.gaps).toEqual(
      expect.arrayContaining([
        "not_artifact_type",
        "digest_missing",
        "location_missing",
        "bindings_missing",
        "status_not_proof",
      ]),
    );
  });
});

describe("10 — validateTypedGitEvidencePayload", () => {
  it("accepts valid payload for each typed source; rejects bad payloads", () => {
    for (const source of TYPED_GIT_EVIDENCE_SOURCES) {
      expect(validateTypedGitEvidencePayload(source, validPayloadFor(source))).toEqual(
        { ok: true },
      );
      expect(validateTypedGitEvidencePayload(source, null).ok).toBe(false);
      expect(validateTypedGitEvidencePayload(source, {}).ok).toBe(false);
    }
    expect(
      validateTypedGitEvidencePayload("git:local_commit", {
        repositoryRef: "acme/widget",
        commitSha: "short",
      }),
    ).toEqual({ ok: false, reason: "commit_sha_invalid" });
  });
});

describe("11–12 — git completion proof progression", () => {
  it("local_commit does NOT satisfy; post_merge_verification does", () => {
    const cycleId = "cyc:gcec-git";
    const local = makeEvidence({
      evidenceId: "evd:local",
      type: "other",
      status: "available",
      source: "git:local_commit",
      location: `git://commit/${FULL_SHA}`,
      bindings: { cycleInstanceId: cycleId },
    });
    const post = makeEvidence({
      evidenceId: "evd:post",
      type: "other",
      status: "verified",
      source: "git:post_merge_verification",
      location: `git://post-merge/main@${MERGE_SHA}/docs/functional-design.md`,
      digest: VALID_DIGEST,
      bindings: { cycleInstanceId: cycleId },
    });
    expect(isGitCompletionProofEvidence(local, [], cycleId)).toBe(false);
    expect(isGitCompletionProofEvidence(post, [], cycleId)).toBe(true);
  });

  it("deriveFinalizationApplicability gitProofPresent false then true (full SET)", () => {
    const cycleId = "cyc:gcec-git-prog";
    const projectId = "prj:gcec-git-prog";
    const afterLocal = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [],
      evidence: [
        makeEvidence({
          evidenceId: "evd:local",
          type: "other",
          status: "available",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${FULL_SHA}`,
          bindings: { cycleInstanceId: cycleId, projectId },
        }),
      ],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "xct:gcec-git",
          status: "completed",
          requiredCapabilities: ["cap:git"],
          evidenceRequirements: [
            "git:local_commit",
            "git:remote_push",
            "git:pull_request",
            "git:ci_status",
            "git:review_status",
            "git:merge",
            "git:post_merge_verification",
          ],
        },
      ],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(afterLocal.git_repository).toBe("APPLICABLE");
    expect(afterLocal.gitProofPresent).toBe(false);

    const full = [
      "git:local_commit",
      "git:remote_push",
      "git:pull_request",
      "git:ci_status",
      "git:review_status",
      "git:merge",
      "git:post_merge_verification",
    ].map((source, i) =>
      makeEvidence({
        evidenceId: `evd:${i}`,
        type: "other",
        status: "available",
        source,
        technicalResultRef: `studio:repository_read_verified:${source}`,
        location:
          source === "git:post_merge_verification"
            ? `git:post_merge_verification?repo=${encodeURIComponent(VALID_BINDING.identity)}&targetBranch=main&targetSha=${MERGE_SHA}&artifactPath=${encodeURIComponent("docs/functional-design.md")}&digest=${encodeURIComponent(VALID_DIGEST)}`
            : source === "git:ci_status"
              ? `git:ci_status?repo=${encodeURIComponent(VALID_BINDING.identity)}&commitSha=${FULL_SHA}&conclusion=success`
              : source === "git:review_status"
                ? `git:review_status?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&state=approved`
                : source === "git:pull_request"
                  ? `git:pull_request?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&headSha=${FULL_SHA}`
                  : source === "git:merge"
                    ? `git:merge?repo=${encodeURIComponent(VALID_BINDING.identity)}&mergeCommitSha=${MERGE_SHA}&prNumber=1`
                    : source === "git:remote_push"
                      ? `git:remote_push?repo=${encodeURIComponent(VALID_BINDING.identity)}&remote=origin&refName=gcec%2Fdocs&commitSha=${FULL_SHA}`
                      : `git:local_commit?repo=${encodeURIComponent(VALID_BINDING.identity)}&commitSha=${FULL_SHA}`,
        digest:
          source === "git:post_merge_verification" ? VALID_DIGEST : VALID_DIGEST,
        bindings: {
          cycleInstanceId: cycleId,
          projectId,
          executionContractId: "xct:gcec-git",
        },
      }),
    );
    // Also need artifact for digest/targetPath expected
    full.push(
      makeEvidence({
        evidenceId: "evd:art",
        type: "artifact",
        status: "available",
        digest: VALID_DIGEST,
        location: "docs/functional-design.md",
        bindings: {
          projectId,
          cycleInstanceId: cycleId,
          executionContractId: "xct:gcec-git",
          executionAttemptId: "att:gcec-git",
        },
      }),
    );

    const afterFull = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [],
      evidence: full,
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "xct:gcec-git",
          status: "completed",
          requiredCapabilities: ["cap:git"],
          evidenceRequirements: [
            "git:local_commit",
            "git:remote_push",
            "git:pull_request",
            "git:ci_status",
            "git:review_status",
            "git:merge",
            "git:post_merge_verification",
          ],
        },
      ],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(afterFull.gitProofPresent).toBe(true);
  });
});

describe("15 — FakeDocsWriteLaunchPort", () => {
  it("allowlisted write succeeds; out-of-scope and path escape reject", async () => {
    const root = tempDir("sfia-gcec-docs-");
    const okPort = new FakeDocsWriteLaunchPort({
      worktreeRoot: root,
      pathAllowlist: ["docs"],
      targetPath: "docs/functional-design.md",
      content: "# FD\n",
    });
    const ok = await okPort.launch(docsWriteLaunchRequest());
    expect(ok.outcome).toBe("ack");
    expect(okPort.touchedFiles).toContain("docs/functional-design.md");
    expect(okPort.lastDigest).toMatch(/^sha256:[a-f0-9]{64}$/);

    const oos = new FakeDocsWriteLaunchPort({
      worktreeRoot: root,
      pathAllowlist: ["docs"],
      targetPath: "src/secret.ts",
    });
    const oosResult = await oos.launch(docsWriteLaunchRequest());
    expect(oosResult.outcome).toBe("reject");
    if (oosResult.outcome === "reject") {
      expect(oosResult.reason).toBe("OUT_OF_SCOPE_WRITE");
    }

    const escape = new FakeDocsWriteLaunchPort({
      worktreeRoot: root,
      pathAllowlist: ["docs"],
      targetPath: "../outside.md",
    });
    const escapeResult = await escape.launch(docsWriteLaunchRequest());
    expect(escapeResult.outcome).toBe("reject");
    if (escapeResult.outcome === "reject") {
      expect(escapeResult.reason).toBe("PATH_ESCAPE");
    }
  });
});

describe("16 — mustBlocksNoGovernedEffects", () => {
  it("true when governed family APPLICABLE; false otherwise", () => {
    expect(
      mustBlocksNoGovernedEffects({
        artifact: "APPLICABLE",
        git_repository: "UNKNOWN",
      }),
    ).toBe(true);
    expect(
      mustBlocksNoGovernedEffects({
        artifact: "UNKNOWN",
        git_repository: "NOT_APPLICABLE",
      }),
    ).toBe(false);
    expect(mustBlocksNoGovernedEffects(null)).toBe(false);
  });
});

describe("17 — boundedReadOnlyM3ResolutionProfile constants", () => {
  it("RO profile constants unchanged", () => {
    const profile = boundedReadOnlyM3ResolutionProfile();
    expect(profile.action).toBe(M4_BOUNDED_RO_ACTION);
    expect(profile.target).toBe(M4_BOUNDED_RO_TARGET);
    expect(profile.requiredCapabilities).toEqual([M4_BOUNDED_RO_CAPABILITY]);
    expect(profile.scope).toBe(M4_BOUNDED_RO_SCOPE);
    expect(BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON).toContain("bounded read-only");
  });
});

describe("18 — SQLite Project repositoryBinding round-trip", () => {
  it("create then save binding; reopen recovers payload", async () => {
    const dbPath = tempDbPath("binding-rt.sqlite");
    const svc1 = buildProjectServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:gcec-bind",
      title: "GCEC Bind",
      objective: "persist repositoryBinding",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:gcec-bind-v1",
      idempotencyKey: "idem:gcec-bind",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const found = await svc1.projects.findById("prj:gcec-bind");
    expect(found).not.toBeNull();
    if (!found) return;
    expect(validateRepositoryBinding(VALID_BINDING)).toBeNull();
    found.repositoryBinding = { ...VALID_BINDING };
    found.updatedAt = "2026-09-11T08:01:00.000Z";
    await svc1.projects.save(found);
    svc1.dispose();

    const svc2 = buildProjectServices(dbPath);
    const reloaded = await svc2.getProject.execute({
      projectId: "prj:gcec-bind",
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.project.repositoryBinding).toEqual(VALID_BINDING);
  });
});

describe("19 — prepareBlockedReason field shape", () => {
  it("completedMatchingCycle + prepareBlockedReason type works for UI gating", () => {
    type AlreadyDecided = {
      trajectoryId: string;
      version: number;
      status: string;
      decidedByDecisionRef: string | null;
      targetCycleTypeId: string | null;
      catalogLabel: string | null;
      completedMatchingCycle?: boolean;
      prepareBlockedReason?: "cycle_type_already_completed";
    };
    const blocked: AlreadyDecided = {
      trajectoryId: "trj:gf",
      version: 1,
      status: "validated",
      decidedByDecisionRef: "dec:gf",
      targetCycleTypeId: "cyc:functional-design",
      catalogLabel: "Conception fonctionnelle",
      completedMatchingCycle: true,
      prepareBlockedReason: "cycle_type_already_completed",
    };
    expect(blocked.completedMatchingCycle).toBe(true);
    expect(blocked.prepareBlockedReason).toBe("cycle_type_already_completed");
    const showPrepareCta = !(
      blocked.prepareBlockedReason || blocked.completedMatchingCycle
    );
    expect(showPrepareCta).toBe(false);
  });
});

```
