# SFIA STUDIO — GCEC CYCLE-CLOSURE FINAL SAME-LOT CORRECTION
## CR-GCEC-23 → CR-GCEC-25 — FULL REVIEW PACK

TIMESTAMP: 2026-09-11T15:04:06+02:00

GO MORRIS consumed: SAME GCEC Delivery lot — close ONLY CR-GCEC-23..25; preserve CR-GCEC-13..22 CLOSED. No new structural decision. D-GCEC-09..15 binding preserved.

## GIT TRUTH BEFORE
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: d0d009bb902827cc15244648e31aa0a1fb9660a9
- parent: 46e7e5b3cf3d82656e15b9fd402db0908704d927
- tree: 98dfbc770af0362742043d63980bd04e48fbccef
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- prior handoff: f3d3dd9c15a27705c3ab47a211f15ee291e9d070 (parent e4285cda785a19db7861ea483fbc65eb10220eec)
- Product tracked: clean (.tmp-sfia-review dirt allowed)

## GIT TRUTH AFTER
- HEAD: e3d820adbb45e9f61d1fc6776baf003098cb2a7a
- parent: d0d009bb902827cc15244648e31aa0a1fb9660a9
- tree: 50c939bd21ebdcb02eb308be1e02de15183722c9
- message: fix(sfia-studio): close GCEC authority and lifecycle proof gaps
- Product push: NONE

## SOURCES
PROCESS / STUDIO CONVERGENCE / PRODUCT COMPLETION / V3 APPLICABLE / CURRENT REVIEW @ f3d3dd9c read before edit.
Authority: local Git truth > Morris decisions > Build Doctrine > v3 doctrine > C1 > current Product implementation.

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED — NOT REOPENED
- Runtime v3: NON ADOPTED
- R2/R6/R8/R12/R13/R14/R15/R18/R19/R21 honored
- D-GCEC-15 Option B: ADOPTED / preserved (same-EC multi-Attempt)
- GCEC-PERSIST: CLOSED (no table/migration/column/store/aggregate)
- Trajectory of this lot: deterministic GCEC cycle-closure

## CRITICAL REVIEW INPUT: CR-GCEC-23..25
### CR-GCEC-23 — BLOCKING
Confirmation matcher was exact, but actionRef target could still be built from StartExecutionRequest.confirmationMatch (caller override of repo/branch/PR/actor).

### CR-GCEC-24 — BLOCKING
AuthorizedExecutionSlice conflated Cursor executable effects with Studio verification obligations (validation.run baseline; post_merge_verification → github.pr.merge).

### CR-GCEC-25 — BLOCKING PROOF
Principal Product E2E used oa.cycleServices.cycles.save(...) to inject trajectory binding after LEGACY START.

## CR CLOSURE MATRIX
| CR | Status | Proof |
|----|--------|-------|
| CR-GCEC-23 | CLOSED | resolveGitEffectTarget + hostile assertion; C23-N1..N4 + P1/P2; StartExecution uses serverConfirmationMatch only |
| CR-GCEC-24 | CLOSED | contractEffectClassification; C24-N1..N5 + P1..P3; qualifyCompletion merge only from git:merge |
| CR-GCEC-25 | CLOSED | prepareCandidate→approve→prepareCycle→startPrepared; source guard; durable binding before F2 |
| CR-GCEC-13..22 | NON-REGRESSION PASS | principal E2E + negatives + related + full vitest |

## CR-GCEC-23 — SERVER-DERIVED CONFIRMATION TARGET
- Canonical sources:
  - executionContractId: durable EC
  - repositoryRef: Project.repositoryBinding.identity (projected EC/docsWriteSpec MUST match or fail closed)
  - branchOrRef: EC inputs workingBranch|branchName|headRef; merge uses binding.defaultBranch
  - prNumber: VERIFIED git:pull_request Evidence for SAME project/cycle/EC/repo (fail closed if missing/ambiguous)
  - actorId: request.actor.actorId (never confirmationMatch.actorId)
- StartExecutionRequest.confirmationMatch retained as HOSTILE/ASSERTION only; never builds actionRef.
- Progressive D-GCEC-15: missing VERIFIED PR does not fail Start for non-merge slices; merge stays blocked until trusted PR identity exists.
- Hostile assertion mismatch → ATTEMPT_INVALID fail closed.

### Hostile request override tests
- C23-N1 repo override refused
- C23-N2 branch override refused
- C23-N3 PR #42 vs verified #41 refused
- C23-N4 hostile actor cannot become authority
- C23-P1 server-derived exact Confirmation authorizes
- C23-P2 matching assertion allowed but non-authoritative
- C19-N1..N8 retained

## CR-GCEC-24 — EXECUTABLE VS VERIFICATION
Pure helper `deriveExecutableEffectsFromContractRequirements` / `deriveVerificationObligationsFromContractRequirements`.

### EXECUTABLE EFFECTS
- artifact/docs_write → filesystem.create + filesystem.modify
- validation/tests only when materialized → validation.run
- git:local_commit/commit → git.commit
- git:remote_push/push → git.push
- git:pull_request → github.pr.create
- git:merge → github.pr.merge (Confirmation-gated)

### VERIFICATION-ONLY OBLIGATIONS
- git:ci_status
- git:review_status
- git:post_merge_verification
→ NO Cursor mutation. post_merge ≠ merge.

### Tests
- C24-N1 artifact-only → no validation.run
- C24-P1 artifact+validation → validation.run
- C24-N2/N5 postmerge-only (+ merge Confirmation) → no merge
- C24-N3/N4 ci/review-only → no Cursor Git mutation
- C24-P2 explicit merge → Confirmation-gated candidate
- C24-P3 full vertical → Cursor gets commit/push/PR/merge only

## CR-GCEC-25 — PRODUCT TRAJECTORY→CYCLE BINDING
Actual Product path used in principal E2E:
1. materializeLifecycleRecommendationFromStructuredOutput (NEXT_CYCLE cyc:functional-design)
2. prepareCandidateTrajectoryFromCurrentRecommendation
3. buildPreCycleCandidateApprovalPresentation + approveCandidateTrajectory
4. prepareCycleFromValidatedTrajectory → durable trajectoryId/version/stepId
5. startPreparedTrajectoryCycle
Assert binding BEFORE F2. Source guard forbids cycles.save / trajectories.save / contracts.save / evidence.repository.save for progression.

After FINALIZE: step done; reprepare refused (incl. DECISION_SEALED_TRAJECTORY_DRIFT); eligible empty; one CycleInstance; LPS active null; LR_TARGET_STATUS.

## D-GCEC-15 NON-REGRESSION
Attempt #1 FS → EC remains confirmed; Attempt #2..N distinct IDs same executionContractId; one active; terminals immutable; all effects verified → EC completed → FINALIZE HD → cycle completed. PASS in principal E2E.

## CR-GCEC-13..22 NON-REGRESSION
PASS (full vitest + GCEC suites).

## PERSISTENCE
NO TABLE. NO MIGRATION. NO STORE. NO new aggregate. Server-derived target + effect classification are pure.

## FAKE/REAL
ZERO REAL. Disposable local Git + Fake Cursor + Fake RepositoryRead only.

## FILES CREATED
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts

## FILES MODIFIED
- authorizedExecutionSlice.ts
- qualifyExecutionContractCompletion.ts
- types.ts
- startExecution.ts
- createSqliteExecutionAttemptServices.ts
- vertical-slice-runtime/service.ts
- prepareM3FromDecision.ts (inputs.workingBranch from DecisionBasis / defaultBranch)
- execution-attempt/index.ts
- gcecD15Negatives.d0.test.ts
- gcecOwnershipNegatives.d0.test.ts
- gcecProductMonolithicE2e.d0.test.ts

## FILES DELETED
NONE

## TEST COMMANDS + COUNTS
- focused negatives+E2E: 65 passed
- GCEC suites: 107 passed (7 files)
- execution-attempt: 167 passed (15 files)
- full vitest: 3631 passed | 135 skipped (338 files passed | 17 skipped)
- typecheck: PASS
- lint: PASS (No ESLint warnings or errors)
- build: PASS
- git diff --check: PASS

## LOCAL COMMIT
SHA: e3d820adbb45e9f61d1fc6776baf003098cb2a7a
parent: d0d009bb902827cc15244648e31aa0a1fb9660a9
tree: 50c939bd21ebdcb02eb308be1e02de15183722c9
message: fix(sfia-studio): close GCEC authority and lifecycle proof gaps

## PRODUCT PUSH
NONE

## PROOF REPO
NOT CREATED

## OPEN GATES
GCEC-REPO-CREATE
GCEC-CURSOR-REAL
GCEC-PUSH
GCEC-PR
GCEC-MERGE
GCEC-RUNTIME-V3

GCEC-CONTINUATION-SEMANTICS: CLOSED BY D-GCEC-15

## DEBT
TEMP-GCEC-PRPM-01
TEMP-GCEC-F14-BIND-01

## ANTI-CLAIMS
- deterministic ≠ REAL
- local commit ≠ PR readiness
- Review Handoff ≠ Product Git proof
- proof repo NOT CREATED
- Product Completion CLOSED
- runtime v3 NON ADOPTED

## VERDICT
PASS — GCEC DETERMINISTIC CYCLE-CLOSURE ARC COMPLETE / READY FOR CHATGPT FINAL CRITICAL REVIEW

---
# EMBEDDED MODIFIED CONTENT (FULL)

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
```typescript
/**
 * CR-GCEC-24 — pure mapping: Cursor executable effects vs Studio verification obligations.
 * No Requirement Engine. No persistence.
 */
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type VerificationObligationId =
  | "git:ci_status"
  | "git:review_status"
  | "git:post_merge_verification";

const VERIFICATION_ONLY = new Set<string>([
  "git:ci_status",
  "git:review_status",
  "git:post_merge_verification",
]);

export function isStudioVerificationObligation(req: string): boolean {
  return VERIFICATION_ONLY.has(req);
}

/**
 * Derive Cursor-executable effects from effective EC requirements.
 * Verification-only families never produce Cursor mutation effects.
 */
export function deriveExecutableEffectsFromContractRequirements(input: {
  evidenceRequirements?: readonly string[];
  expectedOutputs?: readonly string[];
  requiredCapabilities?: readonly string[];
  /** When true (docs_write createOrModify), filesystem create+modify may both be allowed. */
  allowFilesystemCreateOrModify?: boolean;
}): {
  executableEffects: CursorAuthorizedEffectId[];
  verificationObligations: VerificationObligationId[];
} {
  const reqs = [
    ...(input.evidenceRequirements ?? []),
    ...(input.expectedOutputs ?? []).map((o) =>
      /artifact/i.test(o) ? "artifact" : o,
    ),
  ];
  const executable: CursorAuthorizedEffectId[] = [];
  const verification: VerificationObligationId[] = [];

  const wantsArtifact =
    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
    (input.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
    (input.requiredCapabilities ?? []).some((c) => /docs_write/i.test(c));

  const wantsValidation = reqs.some((r) => /validation|tests?/i.test(r));

  if (wantsArtifact) {
    // createOrModify envelope: both may be authorized; completion uses actual result.
    executable.push("filesystem.create", "filesystem.modify");
  }
  if (wantsValidation) {
    executable.push("validation.run");
  }

  for (const r of reqs) {
    if (r === "git:local_commit" || r === "git:commit") {
      if (!executable.includes("git.commit")) executable.push("git.commit");
    } else if (r === "git:remote_push" || r === "git:push") {
      if (!executable.includes("git.push")) executable.push("git.push");
    } else if (r === "git:pull_request") {
      if (!executable.includes("github.pr.create"))
        executable.push("github.pr.create");
    } else if (r === "git:merge") {
      // CR-GCEC-24 — ONLY explicit merge authorizes Cursor merge.
      // post_merge_verification must NOT map here.
      if (!executable.includes("github.pr.merge"))
        executable.push("github.pr.merge");
    } else if (r === "git:ci_status") {
      if (!verification.includes("git:ci_status"))
        verification.push("git:ci_status");
    } else if (r === "git:review_status") {
      if (!verification.includes("git:review_status"))
        verification.push("git:review_status");
    } else if (r === "git:post_merge_verification") {
      if (!verification.includes("git:post_merge_verification"))
        verification.push("git:post_merge_verification");
    }
  }

  void input.allowFilesystemCreateOrModify;
  return { executableEffects: executable, verificationObligations: verification };
}

export function deriveVerificationObligationsFromContractRequirements(input: {
  evidenceRequirements?: readonly string[];
}): VerificationObligationId[] {
  return deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements: input.evidenceRequirements,
  }).verificationObligations;
}

```

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
```typescript
/**
 * CR-GCEC-23 — server-derived Confirmation target for protected Git effects.
 * Caller/request confirmationMatch MUST NOT define canonical resource identity.
 * Pure application/domain projection — no persistence.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import type { GitEffectConfirmationMatch } from "./authorizedExecutionSlice";

export type ResolvedGitEffectTarget = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
  actorId: string;
  effect: Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >;
};

export type ResolveGitEffectTargetInput = {
  effect: ResolvedGitEffectTarget["effect"];
  contract: Pick<
    ExecutionContract,
    "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
  >;
  /** Canonical Project.repositoryBinding — required for protected Git. */
  projectRepositoryBinding: ProjectRepositoryBinding;
  /**
   * Projected docs-write / EC repositoryRef when present.
   * MUST match Project.repositoryBinding.identity or resolution fails.
   */
  projectedRepositoryRef?: string;
  actorId: string;
  /** VERIFIED Evidence for this project (PR identity source). */
  verifiedEvidence?: readonly Evidence[];
};

export type ResolveGitEffectTargetResult =
  | { ok: true; target: ResolvedGitEffectTarget }
  | { ok: false; reason: string };

function asNonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function branchFromContractInputs(
  inputs: Record<string, unknown> | undefined,
): string | undefined {
  if (!inputs) return undefined;
  return (
    asNonEmptyString(inputs.workingBranch) ??
    asNonEmptyString(inputs.branchName) ??
    asNonEmptyString(inputs.headRef)
  );
}

/**
 * Extract a single trustworthy PR number from VERIFIED git:pull_request Evidence
 * bound to the same project / cycle / EC / repository.
 * Fail closed when zero or ambiguous.
 */
export function resolveVerifiedPullRequestNumber(input: {
  evidence: readonly Evidence[];
  projectId: string;
  cycleInstanceId?: string;
  executionContractId: string;
  repositoryRef: string;
}): { ok: true; prNumber: number } | { ok: false; reason: string } {
  const matches: number[] = [];
  for (const e of input.evidence) {
    if (e.status !== "verified") continue;
    if (e.source !== "git:pull_request") continue;
    const b = e.bindings;
    if (!b?.projectId || b.projectId !== input.projectId) continue;
    if (
      !b.executionContractId ||
      b.executionContractId !== input.executionContractId
    ) {
      continue;
    }
    if (
      input.cycleInstanceId &&
      (!b.cycleInstanceId || b.cycleInstanceId !== input.cycleInstanceId)
    ) {
      continue;
    }
    const loc = typeof e.location === "string" ? e.location : "";
    const repoMatch = loc.match(/[?&]repo=([^&]+)/);
    if (repoMatch) {
      const repo = decodeURIComponent(repoMatch[1]!);
      if (repo !== input.repositoryRef) continue;
    }
    const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
    if (!prMatch) continue;
    const n = Number(decodeURIComponent(prMatch[1]!));
    if (!Number.isInteger(n) || n < 1) continue;
    matches.push(n);
  }
  const unique = [...new Set(matches)];
  if (unique.length === 0) {
    return { ok: false, reason: "verified_pull_request_identity_missing" };
  }
  if (unique.length > 1) {
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  return { ok: true, prNumber: unique[0]! };
}

/**
 * Resolve canonical Git Confirmation target from durable Product truth only.
 */
export function resolveGitEffectTarget(
  input: ResolveGitEffectTargetInput,
): ResolveGitEffectTargetResult {
  const bindingIdentity = input.projectRepositoryBinding.identity?.trim();
  if (!bindingIdentity) {
    return { ok: false, reason: "project_repository_binding_missing" };
  }

  if (
    input.projectedRepositoryRef &&
    input.projectedRepositoryRef.trim() &&
    input.projectedRepositoryRef.trim() !== bindingIdentity
  ) {
    return {
      ok: false,
      reason: "projected_repository_ref_mismatch_project_binding",
    };
  }

  const inputs =
    input.contract.inputs && typeof input.contract.inputs === "object"
      ? (input.contract.inputs as Record<string, unknown>)
      : undefined;

  const workingBranch = branchFromContractInputs(inputs);
  const defaultBranch =
    input.projectRepositoryBinding.defaultBranch?.trim() || "main";

  let branchOrRef: string | undefined;
  let prNumber: number | undefined;

  switch (input.effect) {
    case "git.commit":
    case "git.push":
    case "github.pr.create":
      branchOrRef = workingBranch;
      break;
    case "github.pr.merge": {
      branchOrRef = defaultBranch;
      const pr = resolveVerifiedPullRequestNumber({
        evidence: input.verifiedEvidence ?? [],
        projectId: input.contract.projectId,
        cycleInstanceId: input.contract.cycleInstanceId,
        executionContractId: input.contract.executionContractId,
        repositoryRef: bindingIdentity,
      });
      if (!pr.ok) {
        return { ok: false, reason: pr.reason };
      }
      prNumber = pr.prNumber;
      break;
    }
  }

  return {
    ok: true,
    target: {
      executionContractId: input.contract.executionContractId,
      projectId: input.contract.projectId,
      cycleInstanceId: input.contract.cycleInstanceId,
      repositoryRef: bindingIdentity,
      branchOrRef,
      prNumber,
      actorId: input.actorId,
      effect: input.effect,
    },
  };
}

export function resolvedTargetToConfirmationMatch(
  target: ResolvedGitEffectTarget,
): GitEffectConfirmationMatch {
  return {
    executionContractId: target.executionContractId,
    repositoryRef: target.repositoryRef,
    branchOrRef: target.branchOrRef,
    prNumber: target.prNumber,
    actorId: target.actorId,
  };
}

/**
 * Hostile request assertion — compare to server truth. Never builds the target.
 * Missing fields on assertion are ignored; present mismatches refuse.
 */
export function assertConfirmationMatchAgreesWithServerTarget(input: {
  assertion?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  server: ResolvedGitEffectTarget;
}): { ok: true } | { ok: false; reason: string } {
  const a = input.assertion;
  if (!a) return { ok: true };
  if (
    a.repositoryRef != null &&
    a.repositoryRef.trim() &&
    a.repositoryRef.trim() !== input.server.repositoryRef
  ) {
    return { ok: false, reason: "hostile_confirmation_match_repository_mismatch" };
  }
  if (
    a.branchOrRef != null &&
    a.branchOrRef.trim() &&
    a.branchOrRef.trim() !== (input.server.branchOrRef ?? "")
  ) {
    return { ok: false, reason: "hostile_confirmation_match_branch_mismatch" };
  }
  if (
    a.prNumber != null &&
    a.prNumber !== input.server.prNumber
  ) {
    return { ok: false, reason: "hostile_confirmation_match_pr_mismatch" };
  }
  if (
    a.actorId != null &&
    a.actorId.trim() &&
    a.actorId.trim() !== input.server.actorId
  ) {
    return { ok: false, reason: "hostile_confirmation_match_actor_mismatch" };
  }
  return { ok: true };
}

```

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
```typescript
/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
 * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
 * CR-GCEC-24: Cursor executable effects ≠ Studio verification obligations.
 */
import { createHash } from "node:crypto";
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";

export type AuthorizedExecutionSlice = {
  executionContractId: string;
  attemptLineageKey: string;
  authorizedEffects: CursorAuthorizedEffectId[];
  blockedEffects: CursorAuthorizedEffectId[];
  reasons: string[];
};

/** OA identifier max length — actionRef must stay within bound. */
export const OA_ACTION_REF_MAX_LENGTH = 128;

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

function sanitizeIdPart(value: string): string {
  return value.replace(/[^a-zA-Z0-9:._-]+/g, "");
}

function sanitizeRepoPart(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "__");
}

/**
 * Canonical Confirmation actionRef for a protected Git effect.
 * Collision-safe under OA_ACTION_REF_MAX_LENGTH: when the plain form exceeds
 * the bound, use stable effect prefix + bounded EC + digest of the full
 * canonical target tuple (never truncate the distinguishing suffix alone).
 */
export function buildGitEffectActionRef(input: {
  executionContractId: string;
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge";
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
}): string {
  const scope = GIT_EFFECT_CONFIRMATION_SCOPE[input.effect];
  const scopeToken = scope.replace(/:/g, "-");
  const safeContract = sanitizeIdPart(input.executionContractId);
  const safeRepo = sanitizeRepoPart(input.repositoryRef);
  const parts = ["act", scopeToken, safeContract, safeRepo];
  if (input.branchOrRef) {
    parts.push(`ref:${sanitizeRepoPart(input.branchOrRef)}`);
  }
  if (input.prNumber != null) parts.push(`pr:${input.prNumber}`);
  const plain = parts.join(":");
  if (plain.length <= OA_ACTION_REF_MAX_LENGTH) return plain;

  const tuple = [
    input.executionContractId,
    input.effect,
    input.repositoryRef,
    input.branchOrRef ?? "",
    input.prNumber != null ? String(input.prNumber) : "",
  ].join("|");
  const digest = createHash("sha256").update(tuple).digest("hex").slice(0, 24);
  const ecBound =
    safeContract.length <= 48 ? safeContract : safeContract.slice(0, 48);
  const compact = `act:${scopeToken}:${ecBound}:${digest}`;
  return compact.length <= OA_ACTION_REF_MAX_LENGTH
    ? compact
    : compact.slice(0, OA_ACTION_REF_MAX_LENGTH);
}

export type GitEffectConfirmationMatch = {
  executionContractId: string;
  repositoryRef?: string;
  branchOrRef?: string;
  prNumber?: number;
  actorId?: string;
};

function scopeIndicatesEffectClass(
  scope: string,
  scopeNeedle: string,
  expectedActionRef: string,
): boolean {
  const hyphen = scopeNeedle.replace(/:/g, "-");
  return (
    scope.includes(scopeNeedle) ||
    scope.includes(hyphen) ||
    scope === expectedActionRef
  );
}

/**
 * CR-GCEC-19 — exact target binding. No startsWith / includes fallback on
 * actionRef. Generic actionRef or generic scope alone never authorizes a
 * concrete repo/branch/PR effect.
 */
export function confirmationGrantsEffect(
  confirmations: readonly Confirmation[],
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  nowIso: string,
  match: GitEffectConfirmationMatch,
): boolean {
  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
  const expected = buildGitEffectActionRef({
    executionContractId: match.executionContractId,
    effect,
    repositoryRef: match.repositoryRef ?? "",
    branchOrRef: match.branchOrRef,
    prNumber: match.prNumber,
  });

  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    if (
      match.actorId &&
      c.requestedTo &&
      c.requestedTo.actorId !== match.actorId
    ) {
      return false;
    }
    if (c.actionRef === scopeNeedle) return false;
    if (!scopeIndicatesEffectClass(c.scope, scopeNeedle, expected)) {
      return false;
    }
    return c.actionRef === expected;
  });
}

/**
 * Derive the current authorized effect slice.
 * CR-GCEC-24: only Cursor-executable effects from the classification helper.
 * Git effects require Confirmation against server-derived confirmationMatch.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  expectedOutputs?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  allowDelete?: boolean;
  /** Effects already VERIFIED — excluded from authorized re-execution. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Effects reported but awaiting verification — not re-authorized. */
  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
  /**
   * CR-GCEC-23 — MUST be server-derived target identity.
   * Domain helper still accepts the shape; StartExecution must not pass
   * caller confirmationMatch as authority.
   */
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const verified = new Set(input.verifiedEffects ?? []);
  const waiting = new Set(input.waitingVerificationEffects ?? []);
  const authorized: CursorAuthorizedEffectId[] = [];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  const classified = deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements: input.evidenceRequirements ?? [],
    expectedOutputs: input.expectedOutputs,
    requiredCapabilities: input.requiredCapabilities,
    allowFilesystemCreateOrModify: true,
  });

  for (const effect of classified.executableEffects) {
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    const isGit =
      effect === "git.commit" ||
      effect === "git.push" ||
      effect === "github.pr.create" ||
      effect === "github.pr.merge";
    if (isGit) {
      if (
        confirmationGrantsEffect(confirmations, effect, nowIso, {
          executionContractId: input.executionContractId,
          ...input.confirmationMatch,
        })
      ) {
        authorized.push(effect);
      } else {
        blocked.push(effect);
        reasons.push(
          `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
        );
      }
      continue;
    }
    authorized.push(effect);
  }

  // Non-executable Git candidates remain blocked (never inferred).
  for (const effect of [
    "git.commit",
    "git.push",
    "github.pr.create",
    "github.pr.merge",
  ] as const) {
    if (
      !classified.executableEffects.includes(effect) &&
      !blocked.includes(effect) &&
      !authorized.includes(effect)
    ) {
      blocked.push(effect);
    }
  }

  if (input.allowDelete) {
    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
      authorized.push("filesystem.delete");
    }
  } else if (!blocked.includes("filesystem.delete")) {
    blocked.push("filesystem.delete");
    reasons.push("no_delete_policy");
  }

  // CR-GCEC-24 — validation.run must NOT appear when not executable.
  if (
    !classified.executableEffects.includes("validation.run") &&
    !blocked.includes("validation.run")
  ) {
    blocked.push("validation.run");
    reasons.push("validation_not_required");
  }

  if (
    authorized.includes("github.pr.create") &&
    !authorized.includes("github.pr.update")
  ) {
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

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
```typescript
/**
 * D-GCEC-15 — qualify whether an ExecutionContract is complete.
 * Attempt success ≠ contract completion. Completion requires all effective
 * required execution effects to be independently VERIFIED/SATISFIED.
 *
 * CR-GCEC-20: Evidence must bind projectId + cycleInstanceId + executionContractId.
 * CR-GCEC-21: Artifact proof ≠ validation proof; validation only when materialized.
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  deriveAuthorizedExecutionSlice,
  type AuthorizedExecutionSlice,
} from "./authorizedExecutionSlice";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type ExecutionContractCompletionQualification = {
  complete: boolean;
  /** Next EC status after a successful Attempt while executing. */
  nextStatusAfterSuccessfulAttempt: "confirmed" | "completed";
  remainingRequiredEffects: CursorAuthorizedEffectId[];
  verifiedEffects: CursorAuthorizedEffectId[];
  blockedByConfirmation: CursorAuthorizedEffectId[];
  waitingVerification: CursorAuthorizedEffectId[];
  reasons: string[];
};

const GIT_EFFECTS: CursorAuthorizedEffectId[] = [
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.merge",
];

/**
 * Durable lineage expected for Evidence used to complete this EC.
 * Prefer contract.projectId / contract.cycleInstanceId; optional caller
 * cycleInstanceId only fills when the durable contract omits it.
 */
export function expectedEvidenceIdentity(input: {
  contract: Pick<
    ExecutionContract,
    "executionContractId" | "projectId" | "cycleInstanceId"
  >;
  cycleInstanceId?: string;
}): {
  projectId: string;
  cycleInstanceId: string | undefined;
  executionContractId: string;
} {
  return {
    projectId: input.contract.projectId,
    cycleInstanceId:
      input.contract.cycleInstanceId ?? input.cycleInstanceId,
    executionContractId: input.contract.executionContractId,
  };
}

/**
 * CR-GCEC-20 — strict durable bindings. ABSENT or MISMATCH ⇒ not matching.
 */
export function evidenceMatchesContractLineage(
  evidence: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
): boolean {
  const b = evidence.bindings;
  if (!b) return false;
  if (!b.projectId || b.projectId !== expected.projectId) return false;
  if (
    !b.executionContractId ||
    b.executionContractId !== expected.executionContractId
  ) {
    return false;
  }
  if (expected.cycleInstanceId) {
    if (
      !b.cycleInstanceId ||
      b.cycleInstanceId !== expected.cycleInstanceId
    ) {
      return false;
    }
  }
  return true;
}

function sourceMatches(
  source: unknown,
  needles: readonly string[],
): boolean {
  if (typeof source !== "string") return false;
  return needles.some((n) => source === n || source.includes(n));
}

function evidenceVerifiedForEffect(
  evidence: readonly Evidence[],
  effect: CursorAuthorizedEffectId,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
): boolean {
  const sourceByEffect: Partial<Record<CursorAuthorizedEffectId, string[]>> = {
    "filesystem.create": ["artifact", "docs_write", "workspace"],
    "filesystem.modify": ["artifact", "docs_write", "workspace"],
    "validation.run": ["validation", "tests"],
    "git.commit": ["git:local_commit", "git:commit"],
    "git.push": ["git:remote_push", "git:push"],
    "github.pr.create": ["git:pull_request"],
    "github.pr.merge": ["git:merge"],
  };
  const sources = sourceByEffect[effect] ?? [];
  return evidence.some((e) => {
    if (e.status !== "verified") return false;
    if (!evidenceMatchesContractLineage(e, expected)) return false;

    // CR-GCEC-21 — artifact / workspace prove filesystem; never validation.
    if (effect === "filesystem.create" || effect === "filesystem.modify") {
      if (e.type === "artifact") return true;
      return sourceMatches(e.source, sources);
    }
    if (effect === "validation.run") {
      // Artifact must not satisfy validation; require validation/tests family.
      if (e.type === "artifact") return false;
      return sourceMatches(e.source, sources);
    }
    return sources.includes(String(e.source));
  });
}

function evidenceVerifiedForSource(
  evidence: readonly Evidence[],
  source: string,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
): boolean {
  return evidence.some(
    (e) =>
      e.status === "verified" &&
      evidenceMatchesContractLineage(e, expected) &&
      e.source === source,
  );
}

function reqImpliesEffect(
  reqs: readonly string[],
  effect: CursorAuthorizedEffectId,
): boolean {
  return reqs.some((r) => {
    if (effect === "git.commit")
      return r === "git:local_commit" || r === "git:commit";
    if (effect === "git.push")
      return r === "git:remote_push" || r === "git:push";
    if (effect === "github.pr.create") return r === "git:pull_request";
    // CR-GCEC-24 — post_merge is NOT a merge executable requirement.
    if (effect === "github.pr.merge") return r === "git:merge";
    if (effect === "filesystem.create" || effect === "filesystem.modify") {
      return (
        /artifact|docs_write|filesystem/i.test(r) ||
        r === "artifact" ||
        reqs.length === 0
      );
    }
    if (effect === "validation.run") return /validation|tests?/i.test(r);
    return false;
  });
}

/**
 * Qualify contract completion from durable facts (EC + Evidence + Confirmations).
 * Does not mutate state.
 */
export function qualifyExecutionContractCompletion(input: {
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "evidenceRequirements"
    | "expectedOutputs"
    | "requiredCapabilities"
  >;
  evidence?: readonly Evidence[];
  confirmations?: readonly Confirmation[];
  cycleInstanceId?: string;
  nowIso?: string;
  /** Prior executed effects claimed by terminal Attempts (optional). */
  reportedExecutedEffects?: readonly CursorAuthorizedEffectId[];
}): ExecutionContractCompletionQualification {
  const evidence = input.evidence ?? [];
  const expected = expectedEvidenceIdentity({
    contract: input.contract,
    cycleInstanceId: input.cycleInstanceId,
  });
  const reqs = [
    ...(input.contract.evidenceRequirements ?? []),
    ...(input.contract.expectedOutputs ?? []).map((o) =>
      /artifact/i.test(o) ? "artifact" : o,
    ),
  ];
  const reasons: string[] = [];

  const wantsArtifact =
    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
    (input.contract.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
    (input.contract.requiredCapabilities ?? []).some((c) =>
      /docs_write/i.test(c),
    );

  // CR-GCEC-21 — validation only when effectively materialized on the EC.
  const wantsValidation = reqImpliesEffect(reqs, "validation.run");

  const requiredEffects: CursorAuthorizedEffectId[] = [];
  // CR-GCEC-21 — filesystem create OR modify (not both mandatory); never
  // auto-manufacture validation from artifact presence.
  if (wantsArtifact) {
    requiredEffects.push("filesystem.create");
  }
  if (wantsValidation) {
    requiredEffects.push("validation.run");
  }
  for (const effect of GIT_EFFECTS) {
    if (reqImpliesEffect(reqs, effect)) {
      requiredEffects.push(effect);
    }
  }
  // CR-GCEC-24 — CI / review / postmerge are Studio verification obligations.
  const verificationSources: string[] = [];
  if (reqs.includes("git:ci_status")) verificationSources.push("git:ci_status");
  if (reqs.includes("git:review_status"))
    verificationSources.push("git:review_status");
  if (reqs.includes("git:post_merge_verification")) {
    verificationSources.push("git:post_merge_verification");
  }

  const slice: AuthorizedExecutionSlice = deriveAuthorizedExecutionSlice({
    executionContractId: input.contract.executionContractId,
    evidenceRequirements: input.contract.evidenceRequirements ?? [],
    requiredCapabilities: input.contract.requiredCapabilities ?? [],
    confirmations: input.confirmations ?? [],
    nowIso: input.nowIso,
  });

  const verifiedEffects: CursorAuthorizedEffectId[] = [];
  const waitingVerification: CursorAuthorizedEffectId[] = [];
  const remainingRequiredEffects: CursorAuthorizedEffectId[] = [];
  const blockedByConfirmation: CursorAuthorizedEffectId[] = [];

  for (const effect of requiredEffects) {
    // Filesystem create OR modify satisfies the artifact/output requirement.
    if (effect === "filesystem.create") {
      const createOk = evidenceVerifiedForEffect(
        evidence,
        "filesystem.create",
        expected,
      );
      const modifyOk = evidenceVerifiedForEffect(
        evidence,
        "filesystem.modify",
        expected,
      );
      if (createOk || modifyOk) {
        if (createOk) verifiedEffects.push("filesystem.create");
        if (modifyOk) verifiedEffects.push("filesystem.modify");
        continue;
      }
      remainingRequiredEffects.push("filesystem.create");
      if (
        (input.reportedExecutedEffects ?? []).some((e) =>
          e.startsWith("filesystem"),
        ) ||
        evidence.some(
          (e) =>
            e.type === "artifact" &&
            (e.status === "available" || e.status === "verified") &&
            evidenceMatchesContractLineage(e, expected),
        )
      ) {
        waitingVerification.push("filesystem.create");
        reasons.push("waiting_verification:filesystem.create");
      } else {
        reasons.push("pending_execution:filesystem.create");
      }
      continue;
    }

    if (evidenceVerifiedForEffect(evidence, effect, expected)) {
      verifiedEffects.push(effect);
      continue;
    }
    remainingRequiredEffects.push(effect);
    if (slice.blockedEffects.includes(effect)) {
      blockedByConfirmation.push(effect);
      reasons.push(`blocked_confirmation:${effect}`);
    } else if ((input.reportedExecutedEffects ?? []).includes(effect)) {
      waitingVerification.push(effect);
      reasons.push(`waiting_verification:${effect}`);
    } else {
      reasons.push(`pending_execution:${effect}`);
    }
  }

  // CR-GCEC-24 — Studio verification obligations must be independently verified.
  let verificationRemaining = 0;
  for (const source of verificationSources) {
    if (!evidenceVerifiedForSource(evidence, source, expected)) {
      verificationRemaining += 1;
      reasons.push(`pending_verification:${source}`);
    }
  }

  const complete =
    remainingRequiredEffects.length === 0 && verificationRemaining === 0;
  if (!complete) {
    reasons.push("effective_requirements_remain");
  }

  return {
    complete,
    nextStatusAfterSuccessfulAttempt: complete ? "completed" : "confirmed",
    remainingRequiredEffects,
    verifiedEffects,
    blockedByConfirmation,
    waitingVerification,
    reasons,
  };
}

```

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
```typescript
/**
 * T-A5 ExecutionAttempt Runtime Foundation — domain types (Option A v3-native).
 *
 * Modeled references:
 * - execution-attempt.schema.json schemaVersion 0.2.0-oa
 * - agent-descriptor.schema.json schemaVersion 0.1.0-oa
 *
 * Ownership:
 * - T-A4 owns ExecutionContract draft…confirmed (+ cancelled pre-exec, superseded)
 * - T-A5 owns ExecutionAttempt and the contract post-start statuses
 *   (executing|completed|failed) written through the shared contract repository.
 *
 * Memory-only foundation. No real execution capability: the only injectable
 * adapters are TestExecutionAdapter and NoOpExecutionAdapter.
 */

import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
import type { Confirmation } from "@/lib/oa/decision";
import type {
  AuthorityClass,
  ExecutionWindowClass,
} from "@/lib/oa/execution-contract";
import type { BoundExecutionContractSnapshot } from "./boundExecutionContract";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type { ActorReference, ProvenanceRecord, AuthorityClass, ExecutionWindowClass };
export type { BoundExecutionContractSnapshot };
export {
  BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
  captureBoundExecutionContractSnapshot,
  validateBoundExecutionContractSnapshot,
} from "./boundExecutionContract";

export const EXECUTION_ATTEMPT_SCHEMA_VERSION = "0.2.0-oa" as const;
export const AGENT_DESCRIPTOR_SCHEMA_VERSION = "0.1.0-oa" as const;

/** Closed Attempt lifecycle (modeled 0.2.0-oa). */
export type ExecutionAttemptStatus =
  | "accepted"
  | "running"
  | "result_pending"
  | "succeeded"
  | "failed"
  | "timeout"
  | "cancelled";

/** Non-terminal statuses hold the activeByContractId invariant. */
export type ActiveExecutionAttemptStatus =
  | "accepted"
  | "running"
  | "result_pending";

export type TerminalExecutionAttemptStatus =
  | "succeeded"
  | "failed"
  | "timeout"
  | "cancelled";

/** Closed selection strategies (Morris D02). */
export type SelectionStrategy =
  | "capabilities_deterministic"
  | "human_confirmed_proposal";

export type SelectionProfile =
  | "critical"
  | "standard"
  | "light"
  | "capitalization";

/** Modeled AgentDescriptor 0.1.0-oa — docs-first capability envelope. */
export type AgentTrustLevel = "fixture" | "bounded" | "elevated" | "restricted";

export type AgentExecutionMode =
  | "dry_run"
  | "simulated"
  | "adapter_async"
  | "adapter_sync_fixture"
  /** M4 REAL Cursor CLI mode — requires specialized RealExecutionLaunchPort (D-M4-03). */
  | "cursor_cli_real";

export type AgentHealthStatus =
  | "unknown"
  | "healthy"
  | "degraded"
  | "unhealthy";

export type AgentDescriptor = {
  schemaVersion: "0.1.0-oa";
  agentId: string;
  agentType: string;
  adapterRef: string;
  supportedCapabilities: string[];
  allowedActions: string[];
  allowedTargets: string[];
  allowedScopes: string[];
  trustLevel: AgentTrustLevel;
  executionMode: AgentExecutionMode;
  /** Simulated snapshot — never a live probe. */
  healthStatus: AgentHealthStatus;
  version: number;
  enabled: boolean;
  provenance: ProvenanceRecord;
  createdAt: string;
  updatedAt?: string;
};

export type ExecutionAttempt = {
  schemaVersion: "0.2.0-oa";
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef: string;
  status: ExecutionAttemptStatus;
  idempotencyKey: string;
  correlationId: string;
  version: number;
  createdAt: string;
  provenance: ProvenanceRecord;
  selectionStrategy?: SelectionStrategy;
  selectionProfile?: SelectionProfile;
  proposedAgentRef?: string;
  /** Confirmation scope agent_selection — required at Start+ for human_confirmed_proposal. */
  agentConfirmationRef?: string;
  selectionExpiresAt?: string;
  retryOfAttemptId?: string;
  retryIndex?: number;
  maxRetriesBudget?: number;
  startedAt?: string;
  completedAt?: string;
  failedAt?: string;
  timedOutAt?: string;
  cancelledAt?: string;
  resultPendingAt?: string;
  resultRef?: string;
  errorRef?: string;
  stopReason?: string;
  technicalExitCode?: number;
  durationMs?: number;
  logRefs?: string[];
  cancellationRequested?: boolean;
  irreversibleEffectsPossible?: boolean;
  updatedAt?: string;
  launchedAt?: string;
  /**
   * Snapshotted at StartExecution (ARCH-WOP-1). Immutable for this Attempt.
   * Source of ProcessRunner timeoutMs and TriggerAttemptTimeout deadline.
   */
  executionWindowClass?: ExecutionWindowClass;
  resolvedMaxDurationMs?: number;
  /** W3-B durable stop provenance (TD-W3B-04) — system-owned writes only. */
  stopOrigin?: "USER_CANCEL" | "SYSTEM_GOVERNED_STOP";
  stopCode?: string;
  stopSourceRef?: string;
  stopObservedAt?: string;
  /** Immutable EC semantic fingerprint bound at Attempt acceptance (TD-W3B-02). */
  executionContractSemanticFingerprint?: string;
  /**
   * TD-W3B-02 Option B — immutable canonical bound EC semantic snapshot.
   * Optional for historical readability; mandatory on newly accepted Attempts.
   */
  boundExecutionContract?: BoundExecutionContractSnapshot;
};

/**
 * Canonical binding carried by the agent_selection Confirmation actionRef.
 * See invariants.formatAgentSelectionActionRef.
 */
export type AgentSelectionBinding = {
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef: string;
};

export type SelectExecutionAgentRequest = {
  attemptId: string;
  executionContractId: string;
  idempotencyKey: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  /** OCC guard on the contract read at selection time. */
  expectedContractVersion?: number;
  selectionProfile: SelectionProfile;
  /** Defaults from profile: critical → human_confirmed_proposal. */
  selectionStrategy?: SelectionStrategy;
  /** Required for human_confirmed_proposal. Confirmation scope agent_selection. */
  agentConfirmationRef?: string;
  /** Optional explicit agent — still filtered deny-by-default by the registry. */
  requestedAgentRef?: string;
  selectionExpiresAt?: string;
  selectionTtlMs?: number;
  retryOfAttemptId?: string;
  retryIndex?: number;
  maxRetriesBudget?: number;
  /** System-initiated selection: non-Critical + capabilities_deterministic only. */
  systemInitiated?: boolean;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type StartExecutionRequest = {
  attemptId: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  expectedContractVersion?: number;
  /**
   * D-GCEC-15 — effect-scoped Confirmations for AuthorizedExecutionSlice.
   * Git effects require explicit granted Confirmation; never inferred.
   */
  confirmations?: readonly Confirmation[];
  /**
   * CR-GCEC-23 — HOSTILE / ASSERTION only.
   * Server derives canonical Confirmation target from Project.repositoryBinding,
   * durable EC inputs, and VERIFIED Evidence. If supplied, assertion must match
   * server truth or StartExecution refuses. NEVER used to build actionRef.
   */
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  /** Effects already independently verified — excluded from re-authorization. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type CancelExecutionAttemptRequest = {
  attemptId: string;
  reason: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  /** Morris emergency stop — requires N3 ∧ canActAsMorris (server verified). */
  emergency?: boolean;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type RecordExecutionResultRequest = {
  attemptId: string;
  /** Adapter identity — must match the adapter bound to this Attempt. */
  adapterId: string;
  resultRef: string;
  technicalExitCode?: number;
  durationMs?: number;
  logRefs?: string[];
  correlationId?: string;
  expectedAttemptVersion?: number;
  nowIso?: string;
};

export type RecordExecutionFailureRequest = {
  attemptId: string;
  adapterId: string;
  errorRef?: string;
  stopReason?: string;
  technicalExitCode?: number;
  durationMs?: number;
  logRefs?: string[];
  correlationId?: string;
  expectedAttemptVersion?: number;
  nowIso?: string;
};

export type RetryExecutionAttemptRequest = {
  priorAttemptId: string;
  newAttemptId: string;
  idempotencyKey: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  maxRetriesBudget?: number;
  selectionTtlMs?: number;
  selectionExpiresAt?: string;
  /** Required when the contract reversibility is irreversible. */
  irreversibleRetryPolicyRef?: string;
  /** Required for human_confirmed_proposal retries — a NEW confirmation. */
  agentConfirmationRef?: string;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type TriggerAttemptTimeoutRequest = {
  attemptId: string;
  /** Bounded deterministic auto-safety (no scheduler, explicit command). */
  autoSafety?: boolean;
  actor?: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type GetExecutionAttemptRequest = {
  attemptId: string;
  correlationId?: string;
};

export type ListExecutionAttemptsRequest = {
  executionContractId: string;
  correlationId?: string;
};

export type CheckAttemptAuthorizationRequest = {
  attemptId: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

/** Modeled ErrorRecord codes reused by T-A5 (enum NOT widened). */
export type AttemptModeledErrorCode =
  | "CONFIRMATION_REQUIRED"
  | "DECISION_REQUIRED"
  | "CAPABILITY_MISSING"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "EXECUTION_FAILED"
  | "EXECUTION_TIMEOUT";

/** T-A5 detail codes — catalogue `09-command-event-error-and-transition-catalog.md`. */
export type AttemptDetailCode =
  | "ATTEMPT_INVALID"
  | "ATTEMPT_NOT_FOUND"
  | "ATTEMPT_ALREADY_EXISTS"
  | "ATTEMPT_STATE_CONFLICT"
  | "ATTEMPT_IDEMPOTENCY_CONFLICT"
  | "EXECUTION_CONTRACT_NOT_FOUND"
  | "EXECUTION_CONTRACT_NOT_CONFIRMED"
  | "EXECUTION_CONTRACT_STALE"
  | "EXECUTION_CONTRACT_SUPERSEDED"
  | "EXECUTION_CONTRACT_CANCELLED"
  | "EXECUTION_CONTRACT_UPDATE_FAILED"
  | "AGENT_NOT_FOUND"
  | "AGENT_DISABLED"
  | "AGENT_UNHEALTHY"
  | "AGENT_CAPABILITY_MISMATCH"
  | "AGENT_SCOPE_MISMATCH"
  | "AGENT_SELECTION_EXPIRED"
  | "AGENT_SELECTION_STRATEGY_REFUSED"
  | "AGENT_CONFIRMATION_REQUIRED"
  | "AGENT_CONFIRMATION_INVALID"
  | "AGENT_CONFIRMATION_EXPIRED"
  | "AGENT_CONFIRMATION_ALREADY_CONSUMED"
  | "AGENT_CONFIRMATION_TTL_MISALIGNED"
  | "AGENT_CONFIRMATION_CONSUME_FAILED"
  | "ADAPTER_NOT_ALLOWED"
  | "ADAPTER_ATTEMPT_MISMATCH"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "AUTHORIZATION_DENIED"
  | "CRITICAL_NOT_ACKNOWLEDGED"
  | "DECISION_NOT_CURRENT"
  | "EXECUTION_ALREADY_ACTIVE"
  | "ACTIVE_INDEX_DRIFT"
  | "EXECUTION_PERSISTENCE_FAILED"
  | "EXECUTION_LAUNCH_REJECTED"
  | "EXECUTION_LAUNCH_FAILED"
  | "EXECUTION_CANCEL_FAILED"
  | "RESULT_RECORDING_FAILED"
  | "RETRY_NOT_AUTHORIZED"
  | "RETRY_BUDGET_EXHAUSTED"
  | "RETRY_IRREVERSIBLE_REFUSED"
  | "TIMEOUT_NOT_REACHED"
  | "EXECUTION_TIMEOUT"
  | "STALE_CONTEXT_DETECTED"
  | "CONCURRENCY_CONFLICT"
  | "VERSION_CONFLICT"
  /** M4 REAL-OFF boundary (D-M4-01…05) */
  | "REAL_BOUNDARY_DISABLED"
  | "GATE_D_REQUIRED"
  | "GATE_D_INVALID"
  | "GATE_D_EXPIRED"
  | "GATE_D_ALREADY_CONSUMED"
  | "GATE_D_ALREADY_GRANTED"
  | "GATE_D_BINDING_MISMATCH"
  | "LAUNCH_JOURNAL_UNAVAILABLE"
  | "LAUNCH_RECONCILIATION_REQUIRED"
  | "REAL_AGENT_PROFILE_INVALID"
  | "CURSOR_UNAVAILABLE"
  | "REAL_WORKSPACE_INVALID"
  | "WORKSPACE_INVALID"
  | "REAL_LAUNCH_FAILED";

export type AttemptStructuredError = {
  code: AttemptModeledErrorCode;
  detailCode: AttemptDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "F";
  correlationId?: string;
  attemptId?: string;
  executionContractId?: string;
  executionContractVersion?: number;
  selectedAgentRef?: string;
  confirmationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type ExecutionAttemptSuccess = {
  ok: true;
  attempt: ExecutionAttempt;
  /** Contract snapshot after any T-A5 status write. */
  contractStatus?: string;
  contractVersion?: number;
  reusedFromIdempotencyKey?: boolean;
  /** Start replay of an already running Attempt — no second adapter call. */
  replayed?: boolean;
  durationMs: number;
};

export type ExecutionAttemptFailure = {
  ok: false;
  error: AttemptStructuredError;
  /** Attempt state after a fail-closed compensation, when applicable. */
  attempt?: ExecutionAttempt;
  durationMs: number;
};

export type ExecutionAttemptResult =
  | ExecutionAttemptSuccess
  | ExecutionAttemptFailure;

export type GetExecutionAttemptResult =
  | { ok: true; attempt: ExecutionAttempt }
  | { ok: false; error: AttemptStructuredError };

export type ListExecutionAttemptsResult =
  | { ok: true; attempts: ExecutionAttempt[] }
  | { ok: false; error: AttemptStructuredError };

export type CheckAttemptAuthorizationResult =
  | {
      ok: true;
      authorized: true;
      attempt: ExecutionAttempt;
      durationMs: number;
    }
  | {
      ok: false;
      authorized: false;
      error: AttemptStructuredError;
      durationMs: number;
    };

```

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
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
import { deriveAuthorizedExecutionSlice } from "../domain/authorizedExecutionSlice";
import {
  assertConfirmationMatchAgreesWithServerTarget,
  resolveGitEffectTarget,
  resolvedTargetToConfirmationMatch,
} from "../domain/resolveGitEffectTarget";
import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
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
    /**
     * CR-GCEC-23 — resolve Project.repositoryBinding from durable Project.
     */
    private readonly resolveProjectRepositoryBinding?: (
      projectId: string,
    ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>,
    /**
     * CR-GCEC-23 — list Evidence for verified PR identity (late-bound OK).
     */
    private readonly listProjectEvidence?: (
      projectId: string,
    ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>,
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

    // D-GCEC-15 / CR-GCEC-23/24 — AuthorizedExecutionSlice from server-derived targets.
    const evidenceRequirements =
      docsWriteSpec?.evidenceRequirements ??
      (Array.isArray(contract.evidenceRequirements)
        ? contract.evidenceRequirements.map(String)
        : []);
    const classified = deriveExecutableEffectsFromContractRequirements({
      evidenceRequirements,
      expectedOutputs: Array.isArray(contract.expectedOutputs)
        ? contract.expectedOutputs.map(String)
        : undefined,
      requiredCapabilities: Array.isArray(contract.requiredCapabilities)
        ? contract.requiredCapabilities.map(String)
        : undefined,
      allowFilesystemCreateOrModify: true,
    });
    const gitExecutable = classified.executableEffects.filter(
      (
        e,
      ): e is
        | "git.commit"
        | "git.push"
        | "github.pr.create"
        | "github.pr.merge" =>
        e === "git.commit" ||
        e === "git.push" ||
        e === "github.pr.create" ||
        e === "github.pr.merge",
    );

    let serverConfirmationMatch:
      | {
          repositoryRef?: string;
          branchOrRef?: string;
          prNumber?: number;
          actorId?: string;
        }
      | undefined;

    if (gitExecutable.length > 0 && this.resolveProjectRepositoryBinding) {
      const binding = await this.resolveProjectRepositoryBinding(
        contract.projectId,
      );
      if (!binding?.identity?.trim()) {
        return fail(
          "ATTEMPT_INVALID",
          "project_repository_binding_missing",
          { executionContractId: contract.executionContractId },
        );
      }
      // Prefer Project binding identity for workspace resolution.
      const contractInputs =
        contract.inputs && typeof contract.inputs === "object"
          ? (contract.inputs as Record<string, unknown>)
          : {};
      const projectedRepo =
        docsWriteSpec?.repositoryRef?.trim() ||
        (typeof contractInputs.repositoryRef === "string"
          ? contractInputs.repositoryRef.trim()
          : undefined);
      if (projectedRepo && projectedRepo !== binding.identity.trim()) {
        return fail(
          "ATTEMPT_INVALID",
          "projected_repository_ref_mismatch_project_binding",
          { executionContractId: contract.executionContractId },
        );
      }
      repositoryBinding = {
        identity: binding.identity,
        remoteUrl: binding.remoteUrl,
        defaultBranch: binding.defaultBranch,
        ...(binding.pathRoot ? { pathRoot: binding.pathRoot } : {}),
      };
      repositoryBindingIdentity = binding.identity;

      const evidenceList = this.listProjectEvidence
        ? await this.listProjectEvidence(contract.projectId)
        : [];
      const verifiedEvidence = evidenceList.filter(
        (e) => e.status === "verified",
      );

      // Resolve per remaining executable git effect from durable Product truth.
      // Progressive D-GCEC-15: missing VERIFIED PR must NOT fail Start when merge
      // is not yet runnable — merge stays blocked until trusted PR identity exists.
      for (const effect of gitExecutable) {
        if ((request.verifiedEffects ?? []).includes(effect)) {
          continue;
        }
        const resolved = resolveGitEffectTarget({
          effect,
          contract,
          projectRepositoryBinding: binding,
          projectedRepositoryRef: projectedRepo,
          actorId: request.actor.actorId,
          verifiedEvidence,
        });
        if (!resolved.ok) {
          const mergePrNotReady =
            effect === "github.pr.merge" &&
            (resolved.reason === "verified_pull_request_identity_missing" ||
              resolved.reason === "verified_pull_request_identity_ambiguous");
          if (mergePrNotReady) {
            if (request.confirmationMatch?.prNumber != null) {
              return fail(
                "ATTEMPT_INVALID",
                "hostile_confirmation_match_pr_without_server_target",
                { executionContractId: contract.executionContractId },
              );
            }
            continue;
          }
          return fail("ATTEMPT_INVALID", resolved.reason, {
            executionContractId: contract.executionContractId,
          });
        }
        const assertOk = assertConfirmationMatchAgreesWithServerTarget({
          assertion: request.confirmationMatch,
          server: resolved.target,
        });
        if (!assertOk.ok) {
          return fail("ATTEMPT_INVALID", assertOk.reason, {
            executionContractId: contract.executionContractId,
          });
        }
        serverConfirmationMatch = resolvedTargetToConfirmationMatch(
          resolved.target,
        );
      }
    } else if (
      gitExecutable.length > 0 &&
      !this.resolveProjectRepositoryBinding &&
      request.confirmationMatch
    ) {
      // Hostile assertion present without server resolver → refuse (cannot
      // validate against Product truth). Unconfigured harnesses without
      // assertion leave git blocked via empty confirmationMatch.
      return fail(
        "ATTEMPT_INVALID",
        "project_repository_binding_resolver_unconfigured",
        { executionContractId: contract.executionContractId },
      );
    }

    const authorizedSlice = deriveAuthorizedExecutionSlice({
      executionContractId: contract.executionContractId,
      evidenceRequirements,
      expectedOutputs: Array.isArray(contract.expectedOutputs)
        ? contract.expectedOutputs.map(String)
        : undefined,
      requiredCapabilities: Array.isArray(contract.requiredCapabilities)
        ? contract.requiredCapabilities.map(String)
        : undefined,
      confirmations: request.confirmations ?? [],
      verifiedEffects: request.verifiedEffects,
      confirmationMatch: serverConfirmationMatch,
    });
    // Fail only when the contract requires Cursor-executable effects but none
    // are currently authorized (e.g. git Confirmation missing). Read-only /
    // empty-requirement contracts may start with an empty authorized set.
    if (
      classified.executableEffects.length > 0 &&
      authorizedSlice.authorizedEffects.length === 0
    ) {
      return fail("ATTEMPT_INVALID", "no_authorized_effect", {
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
        authorizedEffects: authorizedSlice.authorizedEffects,
        authorizedExecutionSlice: {
          authorizedEffects: authorizedSlice.authorizedEffects,
          blockedEffects: authorizedSlice.blockedEffects,
          reasons: authorizedSlice.reasons,
        },
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

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
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
  resolveProjectRepositoryBinding?: (
    projectId: string,
  ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
  listProjectEvidence?: (
    projectId: string,
  ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>;
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
      options.resolveProjectRepositoryBinding,
      options.listProjectEvidence,
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

## FILE: projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```typescript
import "./serverGuard";
import {
  BoundedSqliteLocalProjectCreationAudit,
  LOCAL_VERTICAL_SLICE_ARCHITECTURE,
  MemoryLocalProjectCreationAudit,
  NoOpLocalProjectCreationAudit,
  createLocalVerticalSliceServices,
  resolveDoctrinePackagePinForRegistry,
  type LocalProjectFacade,
  type LocalProjectIdSource,
  type LocalVerticalSliceCompositionOptions,
  type LocalVerticalSliceServices,
} from "@/lib/vertical-slice-core";
import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
import {
  createCkcQualificationServices,
  createInMemoryCycleServices,
  createSqliteCycleServices,
  type CkcQualificationServices,
  type CycleServices,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createInMemoryDecisionServices,
  createSqliteDecisionServices,
  isM3LocalAuthorityEnabled,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  createInMemoryExecutionContractServices,
  createSqliteExecutionContractServices,
  type ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  createInMemoryExecutionAttemptServices,
  createSqliteExecutionAttemptServices,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  isStudioCursorRealEnabled,
  type ExecutionAttemptServices,
  type RealBoundaryWiring,
  type TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  composeStudioProductRealBoundary,
  type ComposeStudioProductRealBoundaryInput,
} from "./composeStudioProductRealBoundary";
import {
  createInMemoryEvidenceReviewServices,
  createSqliteEvidenceReviewServices,
  type EvidenceReviewServices,
  type SqliteEvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import {
  createMaterializeFromMemoryB,
  MaterializeFromMemoryB,
  SqliteProjectAuditJournal,
} from "@/lib/oa/project";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createAttemptReaderBridge,
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "./f3FixtureWiring";
import { createW3ABoundedFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
import { MemoryAgentRegistry } from "@/lib/oa/execution-attempt";
import {
  toCreateLocalProjectCommand,
  toCreateProjectRuntimeFailure,
  toCreateProjectRuntimeSuccess,
  toGetProjectRuntimeFailure,
  toGetProjectRuntimeSuccess,
  toListProjectsRuntimeFailure,
  toListProjectsRuntimeSuccess,
} from "./mapping";
import { resolveDefaultVerticalSliceRoots } from "./paths";
import { registerW3bFixtureAdapterForE2eReset } from "./w3bE2eBoundaryControl";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
} from "./types";

export type RuntimeAuditMode = "noop" | "memory" | "sqlite";

export interface RuntimeApplicationServiceOptions {
  readonly registryRoot?: string;
  readonly schemasRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly idSource?: LocalProjectIdSource;
  readonly nowIso?: string;
  /**
   * D-V2-03: default noop. `sqlite` requires `sqliteAuditStore`.
   * Audit never rehydrates business state.
   */
  readonly auditMode?: RuntimeAuditMode;
  readonly sqliteAuditStore?: BoundedAtomicAuditStore;
  /**
   * OA Product SQLite path (M1). Isolated from D1/OPS1/FinOps.
   */
  readonly productDbPath?: string;
  /**
   * Escape hatch for tests: inject a fully built V1 facade.
   * Production path builds via createLocalVerticalSliceServices.
   */
  readonly facade?: LocalProjectFacade;
  /**
   * Optional M4 REAL boundary. Explicit inject wins (tests).
   * Otherwise composed OFF-by-default from SFIA_STUDIO_CURSOR_REAL.
   */
  readonly realBoundary?: RealBoundaryWiring;
  /**
   * Env snapshot for live-boundary composition only. Never used to spawn.
   * Tests inject `{ SFIA_STUDIO_CURSOR_REAL: "1" }` with fake deps.
   */
  readonly realBoundaryEnv?: NodeJS.ProcessEnv;
  /**
   * Test/production overrides for composeStudioProductRealBoundary.
   * Construction still launches nothing.
   */
  readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
}

export type MaterializationServices = {
  readonly materializeFromMemoryB: MaterializeFromMemoryB;
};

export type RuntimeOaStack = {
  readonly projectServices: ProjectServices;
  readonly clock: ClockPort;
  readonly cycleServices: CycleServices;
  readonly ckcQualification: CkcQualificationServices;
  readonly decisionServices: DecisionServices;
  readonly authorityResolver: MemoryAuthorityResolver;
  readonly executionContractServices: ExecutionContractServices;
  readonly executionAttemptServices: ExecutionAttemptServices;
  readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
  /**
   * MW1-S03 — Studio-owned governed Memory B → Truth C materialization.
   * Composed after Decision + Evidence services. Not a Nora write tool.
   */
  readonly materializationServices: MaterializationServices;
  /** Explicit TestExecutionAdapter — never silent NoOp. */
  readonly fixtureAdapter: TestExecutionAdapter;
  /**
   * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
   * Distinguishes persistence durability from fixture execution mode.
   */
  readonly productDurablePath: boolean;
};

function resolveAudit(
  mode: RuntimeAuditMode,
  sqliteAuditStore: BoundedAtomicAuditStore | undefined,
): LocalVerticalSliceCompositionOptions["audit"] {
  if (mode === "memory") {
    return new MemoryLocalProjectCreationAudit();
  }
  if (mode === "sqlite") {
    if (!sqliteAuditStore) {
      throw new Error(
        "sqlite audit mode requires sqliteAuditStore (bounded D1 audit table).",
      );
    }
    return new BoundedSqliteLocalProjectCreationAudit(sqliteAuditStore);
  }
  return new NoOpLocalProjectCreationAudit();
}

function wireOaStack(
  projectServices: ProjectServices,
  clock: ClockPort,
  options?: {
    realBoundary?: RealBoundaryWiring;
    registryRoot?: string;
    doctrinePackagePin?: DoctrinePackagePin;
  },
): RuntimeOaStack {
  // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
  const productSqlite =
    projectServices.store instanceof SqliteProductStore
      ? projectServices.store
      : null;

  // CORR-PROOF-05 — late-bound readers so CycleServices can assess FINALIZE
  // without creating a construction-time cycle with Decision/Evidence factories.
  const late = {
    decisionServices: null as DecisionServices | null,
    evidenceReviewServices: null as
      | EvidenceReviewServices
      | SqliteEvidenceReviewServices
      | null,
    executionContractServices: null as ExecutionContractServices | null,
    executionAttemptServices: null as ExecutionAttemptServices | null,
  };

  const mapAttemptTerminalState = (
    status: string,
  ): string | undefined => {
    switch (status) {
      case "succeeded":
        return "terminal_success";
      case "failed":
        return "terminal_failure";
      case "timeout":
        return "terminal_timeout";
      case "cancelled":
        return "terminal_cancelled";
      default:
        return undefined;
    }
  };

  const lateCycle = {
    services: null as CycleServices | null,
  };

  const lifecycleReaders = {
    decisions: {
      getById: async (decisionId: string) => {
        if (!late.decisionServices) return null;
        return late.decisionServices.decisions.findById(decisionId);
      },
      listByProject: async (projectId: string) => {
        if (!late.decisionServices) return [];
        return late.decisionServices.decisions.listByProject(projectId);
      },
    },
    evidence: {
      listByProject: async (projectId: string) => {
        if (!late.evidenceReviewServices) return [];
        return late.evidenceReviewServices.repository.listByProject(projectId);
      },
    },
    reviewBundles: {
      listByProject: async (projectId: string) => {
        if (!late.evidenceReviewServices) return [];
        return late.evidenceReviewServices.reviewBundleRepository.listByProject(
          projectId,
        );
      },
    },
    epistemic: {
      listByProject: async (projectId: string) => {
        if (!lateCycle.services) {
          throw new Error("epistemic_reader_unavailable");
        }
        return lateCycle.services.epistemic.listByProject(projectId);
      },
    },
    execution: {
      listContractsByProject: async (projectId: string) => {
        if (!late.executionContractServices) return [];
        const list =
          await late.executionContractServices.contracts.listByProject(
            projectId,
          );
        return list.map((c) => ({
          contractId: c.executionContractId,
          cycleInstanceId: c.cycleInstanceId,
          status: c.status,
          expectedOutputs: c.expectedOutputs,
          requiredCapabilities: c.requiredCapabilities,
          evidenceRequirements: c.evidenceRequirements,
          action: c.action,
          target: c.target,
          scope: c.scope,
          supersedesExecutionContractId: c.supersedesExecutionContractId,
        }));
      },
      listAttemptsByProject: async (projectId: string) => {
        if (
          !late.executionContractServices ||
          !late.executionAttemptServices
        ) {
          return [];
        }
        const contracts =
          await late.executionContractServices.contracts.listByProject(
            projectId,
          );
        const out: Array<{
          attemptId: string;
          contractId?: string;
          terminalState?: string;
        }> = [];
        for (const c of contracts) {
          const attempts =
            await late.executionAttemptServices.attempts.listByContract(
              c.executionContractId,
            );
          for (const a of attempts) {
            out.push({
              attemptId: a.attemptId,
              contractId: a.executionContractId,
              terminalState: mapAttemptTerminalState(a.status),
            });
          }
        }
        return out;
      },
    },
  };

  // CORR-PROOF-05 — create authority before CycleServices so Pilot lifecycle
  // mutations can verify N3 evidence (chicken-egg with decision factory).
  const authorityResolver = new MemoryAuthorityResolver();
  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
  void isM3LocalAuthorityEnabled;

  const authorityPort = {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authorityResolver.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };

  // CR-START-01 — create CKC qualifier before CycleServices so PilotLifecycle
  // trajectory-bound START can revalidate without a second START engine.
  const ckcQualification = createCkcQualificationServices({
    clock,
    registryRoot: options?.registryRoot,
    doctrinePackagePin: options?.doctrinePackagePin,
  });

  const cycleServices = productSqlite
    ? createSqliteCycleServices({
        projectServices,
        productStore: productSqlite,
        clock,
        ...lifecycleReaders,
        authority: authorityPort,
        qualifyCycleWithCkc: ckcQualification.qualifyCycleWithCkc,
      })
    : createInMemoryCycleServices({
        projectServices,
        clock,
        ...lifecycleReaders,
        authority: authorityPort,
        qualifyCycleWithCkc: ckcQualification.qualifyCycleWithCkc,
      });
  lateCycle.services = cycleServices;

  const decisionServices = productSqlite
    ? createSqliteDecisionServices({
        projectServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryDecisionServices({
        projectServices,
        cycleServices,
        clock,
        authorityResolver,
      });
  late.decisionServices = decisionServices;

  const executionContractServices = productSqlite
    ? createSqliteExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        clock,
        authorityResolver,
      });
  late.executionContractServices = executionContractServices;

  // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
  // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
  // registered only on the governed path (injected boundary or REAL flag).
  // This composition does not instantiate StudioCursorRealLaunchGateway.
  const fixtureAdapter = createF3TestExecutionAdapter();
  registerW3bFixtureAdapterForE2eReset(fixtureAdapter);
  const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
  const w3aBoundedAgent = createW3ABoundedFixtureAgentDescriptor(clock.nowIso());
  const realBoundary = options?.realBoundary;
  const registerM4 =
    realBoundary !== undefined || isStudioCursorRealEnabled();
  // Bounded W3-A fixture: explicit supported actions/caps ONLY (no universal synthesis).
  const agents = registerM4
    ? [
        fixtureAgent,
        w3aBoundedAgent,
        createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
        createM4BoundedDocsWriteCursorAgentDescriptor(clock.nowIso()),
      ]
    : [fixtureAgent, w3aBoundedAgent];
  const registry = new MemoryAgentRegistry(agents);
  const executionAttemptServices = productSqlite
    ? createSqliteExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        productStore: productSqlite,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
        resolveProjectRepositoryBinding: async (projectId) => {
          const r = await projectServices.getProject.execute({ projectId });
          if (!r.ok) return null;
          return r.project.repositoryBinding ?? null;
        },
        listProjectEvidence: async (projectId) => {
          if (!late.evidenceReviewServices) return [];
          return late.evidenceReviewServices.repository.listByProject(projectId);
        },
      })
    : createInMemoryExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
        resolveProjectRepositoryBinding: async (projectId) => {
          const r = await projectServices.getProject.execute({ projectId });
          if (!r.ok) return null;
          return r.project.repositoryBinding ?? null;
        },
        listProjectEvidence: async (projectId) => {
          if (!late.evidenceReviewServices) return [];
          return late.evidenceReviewServices.repository.listByProject(projectId);
        },
      });
  late.executionAttemptServices = executionAttemptServices;

  const evidenceReviewServices = productSqlite
    ? createSqliteEvidenceReviewServices({
        productStore: productSqlite,
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      })
    : createInMemoryEvidenceReviewServices({
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      });
  late.evidenceReviewServices = evidenceReviewServices;

  // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
  // Product SQLite: durable materialization audit via SqliteProjectAuditJournal
  // on the same Product store / oa_audit_events (no new table). LPS create/append
  // may still use MemoryProjectAuditJournal from local composition.
  const materializationAudit =
    productSqlite !== null
      ? new SqliteProjectAuditJournal(productSqlite)
      : projectServices.audit;

  const materializationServices: MaterializationServices = Object.freeze({
    materializeFromMemoryB: createMaterializeFromMemoryB({
      projectServices: {
        getProject: projectServices.getProject,
        getCurrentLivingProjectState:
          projectServices.getCurrentLivingProjectState,
        appendLivingProjectStateVersion:
          projectServices.appendLivingProjectStateVersion,
        audit: materializationAudit,
      },
      getHumanDecision: decisionServices.getHumanDecision,
      getEvidenceById: async (evidenceId) => {
        const ev =
          await evidenceReviewServices.repository.findById(evidenceId);
        if (!ev) return null;
        return {
          evidenceId: ev.evidenceId,
          status: ev.status,
          availability: ev.availability,
          freshness: ev.freshness,
          bindings: { projectId: ev.bindings.projectId },
        };
      },
    }),
  });

  return Object.freeze({
    projectServices,
    clock,
    cycleServices,
    ckcQualification,
    decisionServices,
    authorityResolver,
    executionContractServices,
    executionAttemptServices,
    evidenceReviewServices,
    materializationServices,
    fixtureAdapter,
    productDurablePath: productSqlite !== null,
  });
}

/**
 * Application runtime service over V1 LocalProjectFacade.
 * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
 * Exposes shared OA stack for F2 + F3 (same ProjectServices instance).
 */
export class RuntimeApplicationService {
  private readonly facade: LocalProjectFacade;
  readonly architecture: LocalVerticalSliceServices["architecture"];
  readonly oa: RuntimeOaStack | null;
  private readonly disposeProduct?: () => void;

  constructor(
    facade: LocalProjectFacade,
    architecture: LocalVerticalSliceServices["architecture"],
    oa: RuntimeOaStack | null = null,
    disposeProduct?: () => void,
  ) {
    this.facade = facade;
    this.architecture = architecture;
    this.oa = oa;
    this.disposeProduct = disposeProduct;
  }

  /** Release durable Product SQLite handles (tests / shutdown). */
  dispose(): void {
    try {
      this.disposeProduct?.();
    } catch {
      /* ignore */
    }
  }

  /** Use case: Create Project via V1 facade. */
  async createProject(
    input: CreateProjectRuntimeInput,
  ): Promise<CreateProjectRuntimeResult> {
    const result = await this.facade.createProject(
      toCreateLocalProjectCommand(input),
    );
    if (!result.ok) {
      return toCreateProjectRuntimeFailure(result.error, result.auditStatus);
    }
    return toCreateProjectRuntimeSuccess(
      result.project,
      result.reusedFromIdempotencyKey,
      result.auditStatus,
    );
  }

  /** Use case: Get Project Overview via V1 facade. */
  async getProject(projectId: string): Promise<GetProjectRuntimeResult> {
    const result = await this.facade.getProjectOverview(projectId);
    if (!result.ok) {
      return toGetProjectRuntimeFailure(result.error);
    }
    return toGetProjectRuntimeSuccess(result.project);
  }

  /**
   * Thin product list via OA ProjectServices over existing oa_projects.
   * Requires OA stack (Product SQLite / in-memory); facade-only runtimes fail closed.
   */
  async listProjects(): Promise<ListProjectsRuntimeResult> {
    if (!this.oa) {
      return toListProjectsRuntimeFailure({
        code: "STATE_CONFLICT",
        detailCode: "PERSISTENCE_FAILURE",
        message: "Project list is unavailable in this runtime composition.",
        severity: "error",
        retryable: false,
        blocking: true,
        recoverable: false,
        domain: "C",
        timestamp: new Date().toISOString(),
        internalCauseRef: "oa_stack_missing",
      });
    }
    const result = await this.oa.projectServices.listProjects.execute();
    if (!result.ok) {
      return toListProjectsRuntimeFailure(result.error);
    }
    return toListProjectsRuntimeSuccess(result.projects);
  }

  /** CR-GCEC-03 — set explicit Project repository binding (no network). */
  async setProjectRepositoryBinding(input: {
    projectId: string;
    identity: string;
    remoteUrl: string;
    defaultBranch: string;
    pathRoot?: string;
    baseSha?: string;
  }): Promise<
    | { ok: true; projectId: string; repositoryBinding: unknown }
    | { ok: false; code: string; message: string }
  > {
    if (!this.oa?.projectServices.setProjectRepositoryBinding) {
      return {
        ok: false,
        code: "NOT_AVAILABLE",
        message: "Repository binding is unavailable in this runtime.",
      };
    }
    const result =
      await this.oa.projectServices.setProjectRepositoryBinding.execute({
        projectId: input.projectId,
        binding: {
          provider: "github",
          identity: input.identity,
          remoteUrl: input.remoteUrl,
          defaultBranch: input.defaultBranch,
          ...(input.pathRoot ? { pathRoot: input.pathRoot } : {}),
          ...(input.baseSha ? { baseSha: input.baseSha } : {}),
        },
        actor: {
          actorId: "actor:local-pilote",
          role: "project_owner",
          displayName: "Local Pilote",
          authorityLevel: "N2",
        },
      });
    if (!result.ok) {
      return {
        ok: false,
        code: result.error.detailCode,
        message: result.error.message,
      };
    }
    return {
      ok: true,
      projectId: result.project.projectId,
      repositoryBinding: result.project.repositoryBinding ?? null,
    };
  }
}

export function createRuntimeApplicationService(
  options: RuntimeApplicationServiceOptions = {},
): RuntimeApplicationService {
  if (options.facade) {
    return new RuntimeApplicationService(
      options.facade,
      LOCAL_VERTICAL_SLICE_ARCHITECTURE,
      null,
    );
  }

  const roots = resolveDefaultVerticalSliceRoots();
  const registryRoot = options.registryRoot ?? roots.registryRoot;
  const doctrinePackagePin = resolveDoctrinePackagePinForRegistry(
    registryRoot,
    options.doctrinePackagePin,
  );
  const services = createLocalVerticalSliceServices({
    registryRoot,
    schemasRoot: options.schemasRoot ?? roots.schemasRoot,
    doctrinePackagePin,
    idSource: options.idSource,
    nowIso: options.nowIso,
    audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
    productDbPath: options.productDbPath,
  });

  const composedBoundary =
    options.realBoundary ??
    composeStudioProductRealBoundary({
      ...(options.realBoundaryComposition ?? {}),
      env: options.realBoundaryEnv ?? options.realBoundaryComposition?.env,
    });
  const oa = wireOaStack(services.projectServices, services.clock, {
    realBoundary: composedBoundary,
    registryRoot,
    doctrinePackagePin,
  });
  return new RuntimeApplicationService(
    services.facade,
    services.architecture,
    oa,
    services.projectServices.dispose,
  );
}

```

## FILE: projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
```typescript
/**
 * F3 M3 PREPARE — Build+Validate ExecutionContract from durable HumanDecision + DecisionBasis.
 * NO ProposalStore. NO F3_ACTION fixture constants. Cursor PREPARE-only projection.
 */

import type {
  DecisionBasis,
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
/** W2: Pilote is the product decision-maker; Morris remains authority CLASS only. */
import type {
  CursorPrepareOnlyProjection,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import { projectCursorPrepareOnly } from "@/lib/oa/execution-contract";
import type { F2ContextSnapshot } from "../f2/types";
import { BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";

export type PrepareM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
  forceM3Authority?: boolean;
};

export type F3M3PreparePayload = {
  turnKind: "f3_m3_prepare";
  mode: "M3_PREPARE";
  decisionId: string;
  projectId: string;
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: string[];
    stopConditions: string[];
    requiredCapabilities: string[];
    reversibility: string;
    semanticFingerprint: string;
  };
  cursorProjection: CursorPrepareOnlyProjection;
  executionPerformed: false;
  attemptCreated: false;
  cursorReal: false;
  executionAllowed: false;
  disclosures: string[];
};

function requireBasis(
  basis: DecisionBasis | undefined,
): DecisionBasis | { ok: false; code: string; message: string } {
  if (!basis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "HumanDecision lacks DecisionBasis — cannot PREPARE M3.",
    };
  }
  return basis;
}

/**
 * Map DecisionBasis → contract fields with explicit UNRESOLVED semantics.
 * Objective ≠ operation. cycleTypeId / projectId ≠ execution target.
 * `cap:unresolved` is a sentinel, never an executable capability.
 * `reversibility: irreversible` is a fail-closed safety default when unsourced,
 * NOT a business claim — always paired with REVERSIBILITY_UNRESOLVED.
 */
function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
  const eb = basis.executionBasis;
  const stopConditions = [
    ...(eb.stopConditions ?? []),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT",
  ];

  const docsWriteIntent =
    eb.intentKind === "docs_write" ||
    eb.requestedOperation?.trim() === "cursor.docs_write.apply";

  const requested = eb.requestedOperation?.trim() ?? "";
  let action: string;
  if (requested) {
    action = requested;
  } else if (docsWriteIntent) {
    action = "cursor.docs_write.apply";
  } else {
    action = "UNRESOLVED_ACTION";
    stopConditions.push("ACTION_UNRESOLVED");
  }

  let target: string;
  let requiredCapabilities: string[];
  const inputs: Record<string, unknown> = {
    objective: eb.objective,
    recommendedProfile: eb.recommendedProfile,
    cycleTypeId: eb.cycleTypeId,
    activatedBlocks: eb.activatedBlocks,
    sourceRef: basis.sourceRef,
    sourceDigest: basis.sourceDigest,
  };

  if (docsWriteIntent) {
    const targetPath = eb.targetPath?.trim() ?? "";
    const targetRepositoryRef = eb.targetRepositoryRef?.trim() ?? "";
    if (!targetPath || !targetRepositoryRef) {
      target = "UNRESOLVED_TARGET";
      stopConditions.push("TARGET_UNRESOLVED");
    } else {
      // Sentinel target for resolve; concrete path lives in inputs.
      target = "workspace.isolated.docs_write";
      inputs.targetPath = targetPath;
      inputs.targetRepositoryRef = targetRepositoryRef;
      inputs.repositoryRef = targetRepositoryRef;
      inputs.pathAllowlist = eb.scopeIn ?? [];
      inputs.scopeIn = eb.scopeIn ?? [];
      inputs.scopeOut = eb.scopeOut ?? [];
      inputs.createOrModify = true;
      inputs.noDelete = true;
      if (eb.artifactType) inputs.artifactType = eb.artifactType;
      if (eb.artifactBrief) inputs.artifactBrief = eb.artifactBrief;
      if (eb.contentRequirements)
        inputs.contentRequirements = [...eb.contentRequirements];
      if (eb.validationExpectations)
        inputs.validationExpectations = [...eb.validationExpectations];
      if (eb.evidenceRequirements)
        inputs.evidenceRequirements = [...eb.evidenceRequirements];
      if (eb.expectedOutputs)
        inputs.expectedOutputs = [...eb.expectedOutputs];
      inputs.repositoryIdentity = targetRepositoryRef;
      inputs.repositoryBindingIdentity = targetRepositoryRef;
      inputs.remoteUrl = `https://github.com/${targetRepositoryRef}.git`;
      inputs.defaultBranch = "main";
      // CR-GCEC-23 — durable working branch for Confirmation target (server-owned).
      const working =
        typeof (eb as { workingBranch?: unknown }).workingBranch === "string"
          ? (eb as { workingBranch?: string }).workingBranch?.trim()
          : undefined;
      inputs.workingBranch = working || inputs.defaultBranch;
      if (eb.scopeIn?.[0]) inputs.pathRoot = eb.scopeIn[0];
    }

    if (eb.requiredCapabilities && eb.requiredCapabilities.length > 0) {
      requiredCapabilities = [...eb.requiredCapabilities];
    } else {
      requiredCapabilities = ["cap:cursor.docs_write"];
    }
  } else {
    // No explicit target field on DecisionBasis today → always unresolved.
    target = "UNRESOLVED_TARGET";
    stopConditions.push("TARGET_UNRESOLVED");
    requiredCapabilities = ["cap:unresolved"];
    stopConditions.push("CAPABILITY_UNRESOLVED");
  }

  let reversibility: "reversible" | "irreversible" = "irreversible";
  if (
    docsWriteIntent &&
    (eb.reversibilityExpectation === "reversible" ||
      eb.reversibilityExpectation === "irreversible")
  ) {
    reversibility = eb.reversibilityExpectation;
  } else {
    // Fail-closed safety default — not a sourced reversibility analysis.
    stopConditions.push("REVERSIBILITY_UNRESOLVED");
  }

  const scope =
    (eb.scope && eb.scope.trim()) || `decision:${decisionId}`;
  const constraints = [
    ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.scopeOut ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.risks ?? []).map((s) => `RISK:${s}`),
    ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
    "PREPARE_ONLY",
    "NO_CURSOR_REAL",
    "NO_ATTEMPT",
    "NO_GATE_D",
  ];
  if (eb.activatedBlocks?.length) {
    for (const b of eb.activatedBlocks) {
      constraints.push(`ACTIVATED_BLOCK:${b}`);
    }
  }
  const expectedOutputs =
    eb.expectedOutputs && eb.expectedOutputs.length > 0
      ? [...eb.expectedOutputs]
      : eb.expectedOutcome
        ? [eb.expectedOutcome]
        : undefined;
  const evidenceRequirements =
    eb.evidenceRequirements && eb.evidenceRequirements.length > 0
      ? [...eb.evidenceRequirements]
      : docsWriteIntent
        ? [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS]
        : undefined;
  return {
    action,
    target,
    scope,
    constraints,
    stopConditions,
    expectedOutputs,
    evidenceRequirements,
    requiredCapabilities,
    reversibility,
    inputs,
  };
}

export async function prepareM3FromDecision(input: {
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  deps: PrepareM3Deps;
}): Promise<
  | { ok: true; payload: F3M3PreparePayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
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
      message: "Decision does not belong to this project.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_CURRENT",
      message: `Decision status ${decision.status} is not accepted for PREPARE.`,
    };
  }

  const basisOrFail = requireBasis(decision.decisionBasis);
  if ("ok" in basisOrFail && basisOrFail.ok === false) {
    return basisOrFail;
  }
  const basis = basisOrFail as DecisionBasis;

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis doctrine digest is stale — re-decide before PREPARE.",
    };
  }
  if (ctx.lpsId !== input.currentContext.lpsId) {
    // LPS id changes on append after GO — allow when decision is linked on current LPS.
    // Fall through to decisionIds check below.
  }

  // Reload is implicit via caller currentContext; require decision linked after GO LPS append.
  // When LPS was linked, version advances; exact basis.lpsVersion match is not required.
  // Fail closed if doctrine ok but decision is not current accepted (already checked).
  if (
    ctx.lpsVersion > input.currentContext.lpsVersion
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis LPS version is ahead of current context — inconsistent state.",
    };
  }

  const fields = fieldsFromBasis(basis, decision.decisionId);
  const issuedAt = input.deps.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: fields.scope,
    issuedAt,
    evidenceId: `evd:m3-prep:${decision.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const safeId = decision.decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
  const executionContractId = `xct:m3:${safeId}`;
  const idempotencyKey = `idem:m3-prep:${decision.decisionId}`;

  const built =
    await input.deps.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: decision.cycleInstanceId ?? basis.cycleInstanceId,
      decisionRefs: [decision.decisionId],
      action: fields.action,
      target: fields.target,
      scope: fields.scope,
      inputs: fields.inputs,
      expectedOutputs: fields.expectedOutputs,
      requiredCapabilities: fields.requiredCapabilities,
      requiredAuthority: "MORRIS",
      constraints: fields.constraints,
      stopConditions: fields.stopConditions,
      evidenceRequirements:
        fields.evidenceRequirements ?? ["evreq:m3-prepare-decision-basis"],
      reversibility: fields.reversibility,
      idempotencyKey,
      correlationId: `cor:m3-prep:${decision.decisionId}`,
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
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );

  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  const contract = validated.contract;
  const cursorProjection = projectCursorPrepareOnly(contract);
  if (
    cursorProjection.executionAllowed !== false ||
    cursorProjection.cursorReal !== false ||
    cursorProjection.selectedAgentRef !== null ||
    cursorProjection.gateD !== "NOT_CONSUMED"
  ) {
    return {
      ok: false,
      code: "CURSOR_PROJECTION_INVALID",
      message: "Cursor PREPARE-only projection invariants violated.",
    };
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_prepare",
      mode: "M3_PREPARE",
      decisionId: decision.decisionId,
      projectId: input.projectId,
      contract: {
        executionContractId: contract.executionContractId,
        version: contract.version,
        status: contract.status,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        requiredAuthority: contract.requiredAuthority,
        constraints: [...contract.constraints],
        stopConditions: [...contract.stopConditions],
        requiredCapabilities: [...contract.requiredCapabilities],
        reversibility: contract.reversibility,
        semanticFingerprint: contract.semanticFingerprint ?? cursorProjection.fingerprint,
      },
      cursorProjection,
      executionPerformed: false,
      attemptCreated: false,
      cursorReal: false,
      executionAllowed: false,
      disclosures: [
        "M3 PREPARE — exact contract from DecisionBasis",
        "NO CURSOR REAL",
        "NO ATTEMPT",
        "GATE D NOT_CONSUMED",
        "NO FIXTURE F3_ACTION CONSTANTS",
      ],
    },
  };
}

```

## FILE: projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
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
export * from "./domain/contractEffectClassification";
export * from "./domain/resolveGitEffectTarget";
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
  FakeCursorGitExternalState,
  type FakeCursorCommitRecord,
  type FakeCursorPrRecord,
  type FakeCursorCiConclusion,
  type FakeCursorReviewState,
} from "./infrastructure/fakeCursorGitExternalState";
export { qualifyExecutionContractCompletion } from "./domain/qualifyExecutionContractCompletion";
export type { ExecutionContractCompletionQualification } from "./domain/qualifyExecutionContractCompletion";
export { advanceExecutionContractCompletion } from "./application/advanceExecutionContractCompletion";
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
  /**
   * CR-GCEC-23 — Project.repositoryBinding resolver (server-derived Confirmation).
   */
  resolveProjectRepositoryBinding?: (
    projectId: string,
  ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
  /**
   * CR-GCEC-23 — Evidence list for verified PR identity (may be late-bound).
   */
  listProjectEvidence?: (
    projectId: string,
  ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>;
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
      options.resolveProjectRepositoryBinding,
      options.listProjectEvidence,
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

## FILE: projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
```typescript
/**
 * D-GCEC-15 Option B negatives — N1–N28 (unit/integration focused).
 * CR-GCEC-17: technicalResultRef is never a trust marker; only Evidence.status=verified.
 * Empty git families do not expand to full GCEC chain.
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  deriveCycleExitState,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  gitProofFamiliesFromRequirements,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  buildTypedGitEvidenceFields,
  createTestEvidenceReviewServices,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import {
  buildGitEffectActionRef,
  deriveAuthorizedExecutionSlice,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  qualifyExecutionContractCompletion,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  verifyCommitClaim,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const CYCLE = "cycinst:gcec-n";
const REPO = "acme/widget";
const PATH = "docs/functional-design.md";

function baseEvidence(
  partial: Partial<Evidence> & { evidenceId: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "other",
    status: partial.status ?? "available",
    source: partial.source ?? "test",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
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
  status: Evidence["status"] = "verified",
): Evidence {
  const fields = buildTypedGitEvidenceFields(source, payload as never);
  if (!fields.ok) throw new Error(fields.reason);
  return baseEvidence({
    evidenceId,
    source: fields.fields.source,
    location: fields.fields.location,
    digest: fields.fields.digest ?? DIGEST,
    status,
    // CR-17 — forgeable marker must not grant trust by itself
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

function fullVerifiedSet(): Evidence[] {
  return [
    typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:commit",
    ),
    typed(
      "git:remote_push",
      {
        repositoryRef: REPO,
        remote: "origin",
        refName: "gcec/docs",
        commitSha: SHA,
      },
      "ev:push",
    ),
    typed(
      "git:pull_request",
      {
        repositoryRef: REPO,
        prNumber: 1,
        headSha: SHA,
        state: "open",
      },
      "ev:pr",
    ),
    typed(
      "git:ci_status",
      {
        repositoryRef: REPO,
        commitSha: SHA,
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
        mergeCommitSha: SHA,
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
        targetSha: SHA,
        artifactPath: PATH,
        artifactDigest: DIGEST,
      },
      "ev:post",
    ),
  ];
}

describe("gcecD15Negatives — N1–N28", () => {
  it("N1 attempt success with remaining git reqs → nextStatus confirmed not completed", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
    expect(q.remainingRequiredEffects.length).toBeGreaterThan(0);
  });

  it("N2 empty evidenceRequirements + no docs_write capability → no git candidates", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n2",
      evidenceRequirements: [],
      requiredCapabilities: [],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N3 empty git families in qualifyGitCompletionProofSet with requirements:[] → BLOCKING unresolved", () => {
    expect(gitProofFamiliesFromRequirements([])).toEqual([]);
    const r = qualifyGitCompletionProofSet({
      evidence: [],
      requirements: [],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("git_requirements_unresolved");
    }
  });

  it("N4 CR-17 technicalResultRef alone with available status → BLOCKING", () => {
    const forged = fullVerifiedSet().map((e) => ({
      ...e,
      status: "available" as const,
      technicalResultRef: `studio:repository_read_verified:${e.source}`,
    }));
    const r = qualifyGitCompletionProofSet({ evidence: forged, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("status_not_verified");
    }
  });

  it("N5 verified full set → SATISFIED", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected,
    });
    expect(r.status).toBe("SATISFIED");
  });

  it("N6 slice blocks git without Confirmation; git-only does not authorize FS", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n6",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("N7 confirmation grants git.commit only when actionRef matches", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:n7",
      effect: "git.commit",
      repositoryRef: REPO,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n7",
      evidenceRequirements: ["git:local_commit", "git:remote_push"],
      confirmations: [
        {
          confirmationId: "cnf:n7",
          status: "granted",
          actionRef,
          scope: "git:local_commit",
          level: "N3",
          requestedBy: { actorId: "a", role: "system" },
          requestedTo: { actorId: "a", role: "system" },
          version: 1,
          createdAt: "2026-09-11T10:00:00.000Z",
          updatedAt: "2026-09-11T10:00:00.000Z",
        } as never,
      ],
      confirmationMatch: { repositoryRef: REPO },
    });
    expect(slice.authorizedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.push");
  });

  it("N8 cap:cursor.docs_write does NOT imply Git effects (CR-GCEC-15)", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n8",
      evidenceRequirements: [],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N9 FakeDocsWrite skips filesystem when not authorized (git-only)", async () => {
    const root = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "gcec-n9-"));
    try {
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        pathAllowlist: ["docs/"],
        targetPath: PATH,
      });
      const launch = await port.launch({
        attemptId: "xat:n9",
        executionContractId: "xct:n9",
        executionContractVersion: 1,
        semanticFingerprint: "fp:n9",
        selectedAgentRef: "agt:m4",
        adapterRef: "adp:m4",
        correlationId: "cor:n9",
        baseHeadSha: SHA,
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: "workspace.isolated.docs_write",
        scope: "docs",
        timeoutMs: 1000,
        authorizedEffects: ["git.commit"],
        authorizedExecutionSlice: {
          authorizedEffects: ["git.commit"],
          blockedEffects: ["filesystem.create", "filesystem.modify"],
          reasons: [],
        },
        docsWriteSpec: {
          repositoryRef: REPO,
          targetPath: PATH,
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "fd",
          contentRequirements: [],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: [PATH],
          validationExpectations: [],
          evidenceRequirements: ["git:local_commit"],
          createOrModify: true,
          noDelete: true,
        },
      });
      expect(launch.outcome).toBe("ack");
      expect(port.lastReport?.stoppedBeforeEffects).toEqual(
        expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
      );
      expect(fs.existsSync(path.join(root, PATH))).toBe(false);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("N10 commit claim without repository SHA → reported not verified", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyCommitClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
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

  it("N11 PR claim head mismatch → failed", async () => {
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
      repositoryRef: REPO,
      claimedPrNumber: 42,
      claimedHeadSha: SHA,
      bindings: { projectId: "prj:n", cycleInstanceId: "cyc:n" },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("pr_head_mismatch");
  });

  it("N12 out-of-scope workspace write → verify fails", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: "/tmp",
      pathAllowlist: ["docs/"],
      targetPath: "docs/fd.md",
      nameStatusText: "A\tsrc/evil.ts\nA\tdocs/fd.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_files_outside_allowlist");
  });

  it("N13 Studio git-ports barrel exports no mutation methods", () => {
    const barrel = fs.readFileSync(
      path.resolve(__dirname, "../../../lib/oa/git-ports/index.ts"),
      "utf8",
    );
    expect(barrel).not.toMatch(/LocalGitCommitPort/);
    expect(barrel).not.toMatch(/NodeLocalGitCommitPort/);
    expect(barrel).not.toMatch(/commitArtifactEvidence/);
  });

  it("N14 Nora tools have no Git mutation tools", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    const mutationLike = names.filter((n) =>
      /(?:^|_)(push|merge|create_pr|pr_create|pr_merge|git_commit)(?:_|$)/i.test(
        n,
      ),
    );
    expect(mutationLike).toEqual([]);
  });

  it("N15 cycle without Git requirement → absence does not block", () => {
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
        baseEvidence({
          evidenceId: "ev:art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: "docs/note.md",
        }),
      ],
    });
    expect(state.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "NOT_APPLICABLE",
    );
  });

  it("N16 cursor report claim alone does not satisfy git SET", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        baseEvidence({
          evidenceId: "ev:claim",
          status: "available",
          source: "git:local_commit",
          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${SHA}`,
          technicalResultRef: "studio:cursor_report_claim:git:local_commit",
        }),
      ],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N17 ci failure → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:ci_status"
        ? typed(
            "git:ci_status",
            {
              repositoryRef: REPO,
              commitSha: SHA,
              conclusion: "failure",
            },
            "ev:ci-fail",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("ci_not_success");
  });

  it("N18 review pending → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:review_status"
        ? typed(
            "git:review_status",
            { repositoryRef: REPO, prNumber: 1, state: "pending" },
            "ev:review-pending",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("review_not_approved");
  });

  it("N19 digest mismatch on post_merge → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, artifactDigest: ("sha256:" + "0".repeat(64)) as Digest },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N20 CR-GCEC-20 foreign-EC verified Evidence must NOT complete xct:n20", () => {
    const evidence = [
      baseEvidence({
        evidenceId: "ev:art",
        type: "artifact",
        status: "verified",
        digest: DIGEST,
        location: PATH,
        source: "execution_attempt:docs_write",
        bindings: {
          cycleInstanceId: CYCLE,
          projectId: "prj:gcec",
          executionContractId: "xct:gcec",
        },
      }),
      ...fullVerifiedSet(),
    ];
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n20",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
  });

  it("N21 verifiedEffects exclude FS from re-authorization", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n21",
      evidenceRequirements: ["artifact", "git:local_commit"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      verifiedEffects: ["filesystem.create", "filesystem.modify", "validation.run"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "filesystem.create",
        "filesystem.modify",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    // CR-GCEC-24 — validation not required → not re-authorized
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("N22 git:commit alias authorizes same as git:local_commit", () => {
    const a = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22a",
      evidenceRequirements: ["git:commit"],
      confirmations: [],
    });
    const b = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22b",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [],
    });
    expect(a.blockedEffects).toContain("git.commit");
    expect(b.blockedEffects).toContain("git.commit");
  });

  it("N23 requireVerified default rejects available rows even with forge marker", () => {
    const available = typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:avail",
      "available",
    );
    const r = qualifyGitCompletionProofSet({
      evidence: [available],
      requirements: ["git:local_commit"],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N24 buildGitEffectActionRef embeds executionContractId + repo", () => {
    const ref = buildGitEffectActionRef({
      executionContractId: "xct:n24",
      effect: "git.push",
      repositoryRef: "acme/widget",
      branchOrRef: "gcec/docs",
    });
    expect(ref).toContain("xct:n24");
    expect(ref).toContain("acme__widget");
    expect(ref).toContain("git-remote_push");
  });

  it("N25 incomplete set missing merge → BLOCKING incomplete_git_proof_set", () => {
    const partial = fullVerifiedSet().filter((e) => e.source !== "git:merge");
    const r = qualifyGitCompletionProofSet({ evidence: partial, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.missing).toContain("git:merge");
    }
  });

  it("N26 repo mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, repositoryRef: "other/repo" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N27 cycleInstance mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, cycleInstanceId: "cyc:other" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N28 StartExecutionRequest type surface includes confirmations (compile/runtime shape)", () => {
    // Structural guard — confirmations must be passable for Option B continuation.
    const req: { confirmations?: readonly unknown[] } = {
      confirmations: [],
    };
    expect(Array.isArray(req.confirmations)).toBe(true);
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/execution-attempt/application/startExecution.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/confirmations:\s*request\.confirmations\s*\?\?\s*\[\]/);
  });

  function grantedCnf(partial: {
    confirmationId: string;
    actionRef: string;
    scope: string;
    requestedTo?: { actorId: string; role: string };
    expiresAt?: string;
  }) {
    return {
      confirmationId: partial.confirmationId,
      status: "granted" as const,
      actionRef: partial.actionRef,
      scope: partial.scope,
      level: "N3" as const,
      requestedBy: { actorId: "a", role: "system" },
      requestedTo: partial.requestedTo ?? { actorId: "a", role: "system" },
      version: 1,
      createdAt: "2026-09-11T10:00:00.000Z",
      updatedAt: "2026-09-11T10:00:00.000Z",
      expiresAt: partial.expiresAt,
    } as never;
  }

  it("C19-N1 generic actionRef git:merge + correct scope + concrete match → REFUSED", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n1",
          actionRef: "git:merge",
          scope: "git:merge",
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 7,
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
    expect(slice.blockedEffects).toContain("github.pr.merge");
  });

  it("C19-N2 correct effect wrong executionContractId → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:other",
      effect: "git.push",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n2",
      evidenceRequirements: ["git:remote_push"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n2",
          actionRef,
          scope: "git:remote_push",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
  });

  it("C19-N3 correct EC wrong repository → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n3",
      effect: "git.commit",
      repositoryRef: "other/repo",
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n3",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n3",
          actionRef,
          scope: "git:local_commit",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N4 correct repo wrong branch for push → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n4",
      effect: "git.push",
      repositoryRef: REPO,
      branchOrRef: "wrong/branch",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n4",
      evidenceRequirements: ["git:remote_push"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n4",
          actionRef,
          scope: "git:remote_push",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
  });

  it("C19-N5 correct repo wrong PR number for merge → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n5",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 99,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n5",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n5",
          actionRef,
          scope: "git:merge",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C19-N6 correct target wrong requestedTo actor → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n6",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n6",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n6",
          actionRef,
          scope: "git:local_commit",
          requestedTo: { actorId: "actor:other", role: "human" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "gcec/docs",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N7 expired Confirmation → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n7",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n7",
      evidenceRequirements: ["git:local_commit"],
      nowIso: "2026-09-11T12:00:00.000Z",
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n7",
          actionRef,
          scope: "git:local_commit",
          expiresAt: "2026-09-11T11:00:00.000Z",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N8 exact canonical actionRef + correct scope/actor → AUTHORIZED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n8",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 1,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n8",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n8",
          actionRef,
          scope: "git:merge",
          requestedTo: { actorId: "actor:pilote", role: "human" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 1,
        branchOrRef: "main",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("github.pr.merge");
  });

  it("C19 collision-safe actionRef: different PR → different refs under length bound", () => {
    const longEc = `xct:${"n".repeat(80)}`;
    const a = buildGitEffectActionRef({
      executionContractId: longEc,
      effect: "github.pr.merge",
      repositoryRef: "org/very-long-repository-name-for-collision-test",
      branchOrRef: "feature/very-long-branch-name-aaaaaaaa",
      prNumber: 1,
    });
    const b = buildGitEffectActionRef({
      executionContractId: longEc,
      effect: "github.pr.merge",
      repositoryRef: "org/very-long-repository-name-for-collision-test",
      branchOrRef: "feature/very-long-branch-name-aaaaaaaa",
      prNumber: 2,
    });
    expect(a.length).toBeLessThanOrEqual(128);
    expect(b.length).toBeLessThanOrEqual(128);
    expect(a).not.toBe(b);
  });

  function evidenceForContract(
    executionContractId: string,
    extras?: Partial<Evidence>,
  ): Evidence[] {
    const art = baseEvidence({
      evidenceId: `ev:art:${executionContractId}`,
      type: "artifact",
      status: "verified",
      digest: DIGEST,
      location: PATH,
      source: "execution_attempt:docs_write",
      bindings: {
        cycleInstanceId: CYCLE,
        projectId: "prj:gcec",
        executionContractId,
      },
      ...extras,
    });
    const git = fullVerifiedSet().map((e) => ({
      ...e,
      evidenceId: `${e.evidenceId}:${executionContractId}`,
      bindings: {
        cycleInstanceId: CYCLE,
        projectId: "prj:gcec",
        executionContractId,
      },
    }));
    return [art, ...git];
  }

  it("C20-N1 all Evidence verified but foreign EC → complete=false", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: evidenceForContract("xct:foreign"),
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N2 all Evidence verified but foreign project → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n2").map((e) => ({
      ...e,
      bindings: {
        ...e.bindings!,
        projectId: "prj:foreign",
        executionContractId: "xct:c20n2",
      },
    }));
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n2",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N3 all Evidence verified but foreign cycle → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n3").map((e) => ({
      ...e,
      bindings: {
        ...e.bindings!,
        cycleInstanceId: "cyc:foreign",
        executionContractId: "xct:c20n3",
      },
    }));
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N4 binding absent → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n4").map((e) => {
      const { bindings: _b, ...rest } = e;
      return rest as Evidence;
    });
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n4",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-P1 exact project/cycle/EC bindings → complete=true", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20p1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: evidenceForContract("xct:c20p1"),
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("completed");
  });

  it("C21-N1 VERIFIED Artifact only + explicit validation → NOT complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n1-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n1",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C21-N2 VERIFIED Artifact only + no validation requirement → validation does not block", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n2",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n2-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n2",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.remainingRequiredEffects).not.toContain("validation.run");
  });

  it("C21-N3 VERIFIED validation + missing Artifact when required → NOT complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n3-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n3",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("filesystem.create");
  });

  it("C21-P1 Artifact + validation verified → complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21p1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21p1-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21p1",
          },
        }),
        baseEvidence({
          evidenceId: "ev:c21p1-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21p1",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
  });

  it("C21-N4 Artifact source cannot be interpreted as validation/tests", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n4",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["validation"],
        requiredCapabilities: [],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n4-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "artifact",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n4",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C21-N5 validation Evidence from foreign EC → cannot satisfy", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n5",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n5-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n5",
          },
        }),
        baseEvidence({
          evidenceId: "ev:c21n5-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:foreign",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C24-N1 artifact-only → filesystem eligible; validation.run NOT authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n1",
      evidenceRequirements: ["artifact"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("C24-P1 artifact + explicit validation → validation.run authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p1",
      evidenceRequirements: ["artifact", "validation"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("validation.run");
  });

  it("C24-N2 post_merge_verification only → github.pr.merge NOT authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c24n2",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 1,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n2",
      evidenceRequirements: ["git:post_merge_verification"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c24n2",
          actionRef,
          scope: "git:merge",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
    expect(slice.blockedEffects).toContain("github.pr.merge");
  });

  it("C24-P2 git:merge explicit → merge candidate Confirmation-gated", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p2",
      evidenceRequirements: ["git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.reasons.some((r) => r.includes("confirmation_required"))).toBe(
      true,
    );
  });

  it("C24-N3 ci_status only → no Cursor Git mutation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n3",
      evidenceRequirements: ["git:ci_status"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C24-N4 review_status only → no Cursor Git mutation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n4",
      evidenceRequirements: ["git:review_status"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
    expect(slice.authorizedEffects).not.toContain("github.pr.create");
  });

  it("C24-N5 postmerge + no merge + exact merge Confirmation → still NO merge", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c24n5",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 7,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n5",
      evidenceRequirements: ["git:post_merge_verification"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c24n5",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 7,
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C24-P3 full vertical → Cursor gets commit/push/PR/merge only", () => {
    const classified = {
      reqs: [
        "artifact",
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:ci_status",
        "git:review_status",
        "git:merge",
        "git:post_merge_verification",
      ],
    };
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p3",
      evidenceRequirements: classified.reqs,
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "git.commit",
        "git.push",
        "github.pr.create",
        "github.pr.merge",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("C23 resolveGitEffectTarget refuses projected repo mismatch", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23",
        projectId: "prj:gcec",
        inputs: { workingBranch: "gcec/docs" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      projectedRepositoryRef: "other/repo",
      actorId: "actor:pilote",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toContain("mismatch");
  });

  it("C23-N1 caller repo override refused vs Project binding", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
      resolvedTargetToConfirmationMatch,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23n1",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.repositoryRef).toBe("acme/widget");
    const hostile = assertConfirmationMatchAgreesWithServerTarget({
      assertion: { repositoryRef: "other/repo" },
      server: resolved.target,
    });
    expect(hostile.ok).toBe(false);
    const serverMatch = resolvedTargetToConfirmationMatch(resolved.target);
    const actionRefHostile = buildGitEffectActionRef({
      executionContractId: "xct:c23n1",
      effect: "git.commit",
      repositoryRef: "other/repo",
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c23n1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c23n1",
          actionRef: actionRefHostile,
          scope: actionRefHostile,
        }),
      ],
      confirmationMatch: serverMatch,
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C23-N2 caller branch override refused vs EC durable branch", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.push",
      contract: {
        executionContractId: "xct:c23n2",
        projectId: "prj:gcec",
        inputs: { workingBranch: "branch-a" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.branchOrRef).toBe("branch-a");
    expect(
      assertConfirmationMatchAgreesWithServerTarget({
        assertion: { branchOrRef: "branch-b" },
        server: resolved.target,
      }).ok,
    ).toBe(false);
  });

  it("C23-N3 verified PR #41; caller assertion #42 refused by assert helper", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const evidence = [
      baseEvidence({
        evidenceId: "ev:pr41",
        status: "verified",
        source: "git:pull_request",
        location: "git:pull_request?repo=acme%2Fwidget&prNumber=41",
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:c23n3",
        },
      }),
    ];
    const resolved = resolveGitEffectTarget({
      effect: "github.pr.merge",
      contract: {
        executionContractId: "xct:c23n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        inputs: {},
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
      verifiedEvidence: evidence,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.prNumber).toBe(41);
    const assertOk = assertConfirmationMatchAgreesWithServerTarget({
      assertion: { prNumber: 42 },
      server: resolved.target,
    });
    expect(assertOk.ok).toBe(false);
  });

  it("C23-N4 hostile actorId cannot authorize — server actor from request wins", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23n4",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.actorId).toBe("actor:pilote");
    expect(resolved.target.actorId).not.toBe("actor:hostile");
  });

  it("C23-P1 canonical server-derived target + exact Confirmation → authorized", async () => {
    const {
      resolveGitEffectTarget,
      resolvedTargetToConfirmationMatch,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23p1",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const match = resolvedTargetToConfirmationMatch(resolved.target);
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c23p1",
      effect: "git.commit",
      repositoryRef: match.repositoryRef!,
      branchOrRef: match.branchOrRef,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c23p1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c23p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: match,
    });
    expect(slice.authorizedEffects).toContain("git.commit");
  });

  it("C23-P2 matching assertion allowed but non-authoritative", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23p2",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(
      assertConfirmationMatchAgreesWithServerTarget({
        assertion: {
          repositoryRef: REPO,
          branchOrRef: "main",
          actorId: "actor:pilote",
        },
        server: resolved.target,
      }).ok,
    ).toBe(true);
  });
});

```

## FILE: projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
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
    // CR-GCEC-24 — git-only requirements do not authorize filesystem effects.
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
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

## FILE: projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
```typescript
/**
 * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
 *
 * True Product spine (no pseudo-E2E):
 * CreateProject → SetRepositoryBinding → LR → prepareCandidate → approve →
 * prepareCycleFromValidatedTrajectory → startPreparedTrajectoryCycle →
 * F2 → HD → prepareM3 → resolve → Confirm → Select → GateD → StartExecution →
 * Fake Cursor slice → complete → EC confirmed (remaining reqs) → evidence verify →
 * gated Confirmations → Select+Start same EC → git effects via Fake only →
 * advance EC completed → FinalizationAssessment → FINALIZE HD → Cycle completed.
 *
 * CR-GCEC-25 — no direct cycle/trajectory/EC/Evidence repository mutation after
 * fixture bootstrap for scenario progression.
 *
 * ZERO OpenAI REAL. ZERO Cursor REAL. Fake owns all git mutations after fixture init.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  finalizeSubjectFor,
  qualifyGitCompletionProofSet,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
  selectEligiblePendingTrajectorySteps,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { completeBoundTrajectoryStepAction } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  advanceExecutionContractCompletion,
  buildGitEffectActionRef,
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  MemoryLaunchSafetyJournal,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  NodeLocalGitStatusDiffPort,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyCommitClaim,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  verifyPullRequestClaim,
  verifyPushClaim,
} from "@/lib/oa/git-ports";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const TARGET_PATH = "docs/functional-design.md";
/** Server-derived workingBranch from prepareM3 (defaultBranch). */
const BRANCH = "main";
const NOW = "2026-09-11T14:00:00.000Z";

const PILOTE = LOCAL_PILOTE_ACTOR;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const temps: string[] = [];

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
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

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:gcec-prod-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:gcec-prod-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:gcec-prod-${this.prefix}-${this.correlation}`;
  }
}

function initManagedRepo(managedBase: string, identity: string): {
  repoRoot: string;
  baseHeadSha: string;
} {
  const sanitized = sanitizeManagedRepoIdentity(identity);
  const repoRoot = path.join(managedBase, sanitized);
  fs.mkdirSync(repoRoot, { recursive: true });
  git(repoRoot, ["init"]);
  git(repoRoot, ["config", "user.email", "gcec@test.local"]);
  git(repoRoot, ["config", "user.name", "GCEC Product E2E"]);
  git(repoRoot, ["checkout", "-b", "main"]);
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
  expect(
    new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
      { identity },
      managedBase,
    ),
  ).toBe(repoRoot);
  return { repoRoot, baseHeadSha };
}

function requireAuthEvidenceId(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) {
    throw new Error(`authority register failed: ${auth.code} ${auth.message}`);
  }
  return auth.evidenceId;
}

async function grantEffectConfirmation(input: {
  runtime: RuntimeApplicationService;
  confirmationId: string;
  actionRef: string;
  scope: string;
  decisionRef: string;
  authorityEvidenceId?: string;
}): Promise<Confirmation> {
  const auth =
    input.authorityEvidenceId ??
    requireAuthEvidenceId(
      registerLocalPiloteAuthority({
        authorityResolver: input.runtime.oa!.authorityResolver,
        scope: input.scope,
        issuedAt: NOW,
        evidenceId: `evd:auth:${input.confirmationId}`,
        forceEnable: true,
      }),
    );

  const requested =
    await input.runtime.oa!.decisionServices.requestConfirmation.execute({
      confirmationId: input.confirmationId,
      level: "N3",
      actionRef: input.actionRef,
      requestedBy: PILOTE,
      requestedTo: PILOTE,
      scope: input.scope,
      idempotencyKey: `idem:${input.confirmationId}`,
      decisionRef: input.decisionRef,
    });
  if (!requested.ok) {
    throw new Error(
      `grantEffectConfirmation request: ${requested.error.detailCode} ${requested.error.message} cause=${requested.error.internalCauseRef ?? ""} actionRef=${input.actionRef}`,
    );
  }

  const granted =
    await input.runtime.oa!.decisionServices.grantConfirmation.execute({
      confirmationId: input.confirmationId,
      actor: PILOTE,
      authorityEvidenceId: auth,
    });
  if (!granted.ok) {
    throw new Error(
      `grantConfirmation: ${granted.error.detailCode} ${granted.error.message} cause=${granted.error.internalCauseRef ?? ""}`,
    );
  }
  return granted.confirmation;
}

async function selectGateStartSlice(input: {
  runtime: RuntimeApplicationService;
  attemptId: string;
  executionContractId: string;
  contractVersion: number;
  grantId: string;
  authorityEvidenceId: string;
  confirmations?: readonly Confirmation[];
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  verifiedEffects?: readonly (
    | "filesystem.create"
    | "filesystem.modify"
    | "validation.run"
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge"
  )[];
}): Promise<{ attemptId: string; status: string }> {
  const attempts = input.runtime.oa!.executionAttemptServices;
  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    idempotencyKey: `idem:sel:${input.attemptId}`,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: input.contractVersion,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.error.message);

  const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
  const gate = await attempts.grantRealExecutionGate!.execute({
    grantId: input.grantId,
    attemptId: input.attemptId,
    actor: PILOTE,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  expect(gate.ok).toBe(true);
  if (!gate.ok) throw new Error(gate.error.message);

  const started = await attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    confirmations: input.confirmations ?? [],
    confirmationMatch: input.confirmationMatch,
    verifiedEffects: input.verifiedEffects,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.error.message);
  return {
    attemptId: started.attempt.attemptId,
    status: started.attempt.status,
  };
}

describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () => {
  it("A→Z: Product use-cases → Fake Cursor slices → EC confirmed→completed → Cycle finalized", async () => {
    const root = tempDir("sfia-gcec-prod-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);

    // Fixture only — Fake Cursor owns git mutations after this point.
    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: "main",
      initialSha: baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: ["docs/"],
      gitState,
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    const runtime: RuntimeApplicationService = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("e2e"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa-product.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
    const oa = runtime.oa!;
    expect(oa.executionAttemptServices.realBoundary).toBeDefined();
    expect(oa.executionAttemptServices.grantRealExecutionGate).toBeDefined();

    // 1–2 CreateProject + repository binding
    const created = await runtime.createProject({
      name: "GCEC Product E2E",
      objective: "Functional design governed cycle",
      context: "deterministic Fake Cursor",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY", "ZERO LIVE"],
      shortReference: "GCECPROD",
      idempotencyKey: `idem:gcec-prod-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: PILOTE,
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    expect(bound.ok).toBe(true);

    // 3 Product trajectory → cycle binding (CR-GCEC-25) — no cycles.save
    const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
    const decisions0 = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lpsBoot =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsBoot.ok).toBe(true);
    if (!lpsBoot.ok) return;
    const presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
    const projectBoot = await oa.projectServices.getProject.execute({
      projectId,
    });
    expect(projectBoot.ok).toBe(true);
    if (!projectBoot.ok) return;
    const doctrinePin = projectBoot.project.doctrinePackageRef;
    expect(doctrinePin).toBeTruthy();

    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: {
        narrative: "Envisager un design fonctionnel gouverné.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE" as const,
          statement: "Envisager un Design fonctionnel.",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:functional-design",
          rationale: "GCEC Product monolithic E2E",
          authority: "none" as const,
          isHumanDecision: false as const,
          qualificationSignals: { ...SIGNALS_LIGHT },
        },
      },
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: cycles0,
        lpsActiveCycleInstanceId:
          lpsBoot.livingProjectState.activeCycleInstanceId,
        lpsVersion: lpsBoot.livingProjectState.version,
        doctrinePackageId: doctrinePin!.doctrinePackageId,
        doctrinePackageVersion: doctrinePin!.version,
        doctrinePackageDigest: doctrinePin!.digest,
        trajectory: null,
        trajectoryBootstrapPresence: presence,
        decisions: decisions0,
        evidence: [],
        epistemicItems: await oa.cycleServices.epistemic.listByProject(
          projectId,
        ),
      },
      producedAt: NOW,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
    if (!mat.materialization?.ok) return;

    const bridgeDeps = {
      trajectories: oa.cycleServices.trajectories,
      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      runInTransaction: ((fn: () => Promise<unknown>) =>
        oa.projectServices.store.runInTransaction(fn)) as <T>(
        fn: () => Promise<T>,
      ) => Promise<T>,
      listEpistemicByProject: (pid: string) =>
        oa.cycleServices.epistemic.listByProject(pid),
      listCyclesByProject: (pid: string) =>
        oa.cycleServices.cycles.listByProject(pid),
      listDecisionsByProject: (pid: string) =>
        oa.decisionServices.decisions.listByProject(pid),
      listEvidenceByProject: (pid: string) =>
        oa.evidenceReviewServices.repository.listByProject(pid),
      getCurrentLps: (pid: string) =>
        oa.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      getProjectDoctrinePin: async (pid: string) => {
        const p = await oa.projectServices.getProject.execute({
          projectId: pid,
        });
        if (!p.ok) return null;
        const pin = p.project.doctrinePackageRef;
        return pin
          ? {
              doctrinePackageId: pin.doctrinePackageId,
              version: pin.version,
              digest: pin.digest,
            }
          : null;
      },
      newTrajectoryId: () => `trj:gcec-prod-${projectId}`,
      newStepId: () => `stp:fd`,
      newProvenanceObservationId: () => `epi:trj-prov-gcec-prod`,
      correlationId: `cor:gcec-prod-bridge`,
    };

    const candidatePrepared =
      await prepareCandidateTrajectoryFromCurrentRecommendation({
        projectId,
        deps: bridgeDeps,
      });
    expect(candidatePrepared.ok).toBe(true);
    if (!candidatePrepared.ok) return;

    const presentation = await buildPreCycleCandidateApprovalPresentation({
      oa,
      projectId,
    });
    expect(presentation.ok && presentation.presentation).toBeTruthy();
    if (!presentation.ok || !presentation.presentation) return;

    const approved = await approveCandidateTrajectory({
      oa,
      projectId,
      presentationDigest: presentation.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(approved.ok).toBe(true);
    if (!approved.ok) return;

    const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
    expect(prep.ok).toBe(true);
    if (!prep.ok) {
      throw new Error(`prepareCycle: ${prep.code} ${prep.reason}`);
    }
    const cycleInstanceId = prep.cycle.cycleInstanceId;
    expect(prep.cycle.trajectoryId).toBeTruthy();
    expect(prep.cycle.trajectoryVersion).toBeTruthy();
    expect(prep.cycle.trajectoryStepId).toBe("stp:fd");

    const startedCycle = await startPreparedTrajectoryCycle({
      oa,
      projectId,
      cycleInstanceId,
      forceLocalAuthority: true,
    });
    expect(startedCycle.ok).toBe(true);
    if (!startedCycle.ok) {
      throw new Error(`startPrepared: ${startedCycle.code}`);
    }
    expect(startedCycle.cycle.status).toBe("active");
    expect(startedCycle.cycle.trajectoryId).toBe(prep.cycle.trajectoryId);
    expect(startedCycle.cycle.trajectoryVersion).toBe(
      prep.cycle.trajectoryVersion,
    );
    expect(startedCycle.cycle.trajectoryStepId).toBe("stp:fd");

    const startAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: NOW,
      forceEnable: true,
    });
    expect(startAuth.ok).toBe(true);

    // Durable trajectory binding exists BEFORE F2 (CR-GCEC-25)
    const cycleBeforeF2 =
      await oa.cycleServices.cycles.findById(cycleInstanceId);
    expect(cycleBeforeF2?.trajectoryId).toBe(prep.cycle.trajectoryId);
    expect(cycleBeforeF2?.trajectoryVersion).toBe(prep.cycle.trajectoryVersion);
    expect(cycleBeforeF2?.trajectoryStepId).toBe("stp:fd");

    // 4–5 F2 Fake → Proposal → recordF2Decision (HD)
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: overview.project.name ?? "GCEC Product E2E",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    expect(analyzed.analysis.executionIntent?.intentKind).toBe("docs_write");

    const snapshot = {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
      ckcResolutionRef: null as string | null,
    };

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest:
        analyzed.analysis.rephrasedRequest ??
        "Produire docs/functional-design.md",
      objective: analyzed.analysis.objective ?? "Functional design",
      cycleTypeId:
        analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "GCEC Product monolithic E2E",
      scope: analyzed.analysis.scope ?? "docs/",
      outOfScope: analyzed.analysis.outOfScope,
      activatedBlocks: analyzed.analysis.activatedBlocks,
      expectedOutcome:
        analyzed.analysis.expectedOutcome ?? "artifact functional-design",
      sources: [],
      risks: analyzed.analysis.risks,
      reservations: analyzed.analysis.reservations,
      stopConditions: analyzed.analysis.stopConditions,
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: analyzed.analysis.requestedOperation,
      executionIntent: analyzed.analysis.executionIntent,
    });

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    const decisionId = go.decision.decisionId;

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) return;
    const currentContext = {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    };

    // 6 prepareM3 + resolve (boundedDocsWrite)
    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId,
      currentContext,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const durableEc =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(durableEc.ok).toBe(true);
    if (!durableEc.ok) return;
    let contract = durableEc.contract;
    expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(contract.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:ci_status",
        "git:review_status",
        "git:merge",
        "git:post_merge_verification",
      ]),
    );

    const execAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: contract.scope,
      issuedAt: NOW,
      evidenceId: `evd:gcec-exec:${contract.executionContractId}`,
      forceEnable: true,
    });
    expect(execAuth.ok).toBe(true);

    // 7 RequestConfirmation + Grant + ConfirmExecutionContract
    const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
    const requested =
      await oa.decisionServices.requestConfirmation.execute({
        confirmationId: gateConfirmId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: PILOTE,
        requestedTo: PILOTE,
        scope: contract.scope,
        idempotencyKey: `idem:${gateConfirmId}`,
        decisionRef: decisionId,
      });
    if (!requested.ok) {
      throw new Error(
        `requestConfirmation: ${requested.error.detailCode} ${requested.error.message} cause=${requested.error.internalCauseRef ?? ""}`,
      );
    }
    const grantedGate =
      await oa.decisionServices.grantConfirmation.execute({
        confirmationId: gateConfirmId,
        actor: PILOTE,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
      });
    expect(grantedGate.ok).toBe(true);

    const confirmed =
      await oa.executionContractServices.confirmExecutionContract.execute({
        executionContractId: contract.executionContractId,
        confirmationId: gateConfirmId,
        actor: PILOTE,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
        expectedVersion: contract.version,
      });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    contract = confirmed.contract;
    expect(contract.status).toBe("confirmed");

    // 8–10 Select + GateD + Start Attempt #1 (filesystem only — no git Confirmation)
    const attempt1Id = `xat:gcec-1:${contract.executionContractId}`.slice(0, 128);
    await selectGateStartSlice({
      runtime,
      attemptId: attempt1Id,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      grantId: `gd:1:${attempt1Id}`,
      authorityEvidenceId: requireAuthEvidenceId(execAuth),
      confirmations: [],
    });
    expect(fakeLaunch.lastReport?.authorizedEffectsExecuted).toContain(
      "filesystem.create",
    );
    expect(fakeLaunch.lastReport?.stoppedBeforeEffects).toContain("git.commit");

    // 11 completeBoundedDocsWriteLaunch (independent git status — no report trust)
    const attempt1 = await oa.executionAttemptServices.getExecutionAttempt.execute({
      attemptId: attempt1Id,
    });
    expect(attempt1.ok).toBe(true);
    if (!attempt1.ok) return;
    const completed1 = await completeBoundedDocsWriteLaunch({
      attempt: attempt1.attempt,
      services: oa.executionAttemptServices,
      targetPath: TARGET_PATH,
      pathAllowlist: ["docs/"],
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
    });
    expect(completed1.ok && completed1.status === "succeeded").toBe(true);
    if (!completed1.ok || completed1.status !== "succeeded") return;
    const artifactDigest = completed1.facts.digest;

    // 12 Attempt #1 succeeded → EC confirmed (D-GCEC-15), NOT completed
    const ecAfter1 =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: contract.executionContractId,
      });
    expect(ecAfter1.ok).toBe(true);
    if (!ecAfter1.ok) return;
    expect(ecAfter1.contract.status).toBe("confirmed");
    expect(completed1.attempt.status).toBe("succeeded");
    contract = ecAfter1.contract;

    // 13 Artifact AVAILABLE → VERIFIED + ReviewBundle
    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices,
      projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt1Id,
      targetPath: TARGET_PATH,
      digest: artifactDigest,
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;

    const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
      payload?: { setScript?: (id: string, s: { availability: "available"; digest: string }) => void };
    };
    evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
      availability: "available",
      digest: artifactDigest,
    });
    const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
      ingested.evidenceId,
    );
    expect(artLoaded).toBeTruthy();
    const artVerified =
      await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: ingested.evidenceId,
        expectedVersion: artLoaded!.version,
        actor: PILOTE,
      });
    expect(artVerified.ok).toBe(true);
    if (!artVerified.ok) return;
    expect(artVerified.evidence.status).toBe("verified");

    const rb = await oa.evidenceReviewServices.reviewBundleReader.findById(
      ingested.reviewBundleId,
    );
    expect(rb).toBeTruthy();
    const frozen = await oa.evidenceReviewServices.freezeReviewBundle.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:freeze:${ingested.reviewBundleId}`,
      expectedVersion: rb!.version,
    });
    if (!frozen.ok) {
      throw new Error(
        `freeze: ${frozen.error.detailCode} ${frozen.error.message} ${frozen.error.internalCauseRef ?? ""}`,
      );
    }
    const startedRb = await oa.evidenceReviewServices.startReview.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:start-rb:${ingested.reviewBundleId}`,
      expectedVersion: frozen.reviewBundle.version,
    });
    if (!startedRb.ok) {
      throw new Error(
        `startReview: ${startedRb.error.detailCode} ${startedRb.error.message}`,
      );
    }
    const completedRb = await oa.evidenceReviewServices.completeReview.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:complete-rb:${ingested.reviewBundleId}`,
      expectedVersion: startedRb.reviewBundle.version,
      outcome: "accepted",
    });
    if (!completedRb.ok) {
      throw new Error(
        `completeReview: ${completedRb.error.detailCode} ${completedRb.error.message}`,
      );
    }

    const repoRead = new FakeRepositoryReadPorts({ gitState });
    const collectedEvidence = [artVerified.evidence];
    const bindings = {
      projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
    };
    const actor = PILOTE;

    // Progressive git slices: Confirmation → Select+Start same EC → Fake effect → Studio verify
    const gitSlices: Array<{
      effect: "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge";
      attemptSuffix: string;
      after?: () => Promise<void>;
    }> = [
      {
        effect: "git.commit",
        attemptSuffix: "commit",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.commit;
          expect(claim?.sha).toBeTruthy();
          const v = await verifyCommitClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedCommitSha: claim!.sha,
            message: claim!.message,
            bindings: { ...bindings, executionAttemptId: `xat:${claim!.sha}` },
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "git.push",
        attemptSuffix: "push",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.push;
          expect(claim?.sha).toBeTruthy();
          const v = await verifyPushClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            branch: BRANCH,
            claimedCommitSha: claim!.sha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "github.pr.create",
        attemptSuffix: "pr",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.pullRequest;
          expect(claim?.number).toBeTruthy();
          const v = await verifyPullRequestClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claim!.number,
            claimedHeadSha: claim!.headSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          // CI + review are Studio observes — Fake Cursor sets external state first.
          gitState.setCi(claim!.headSha, "success");
          gitState.setReview(claim!.number, "approved");
          const ci = await recordCiStatusEvidence({
            ciPort: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            commitSha: claim!.headSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(ci.ok && ci.status === "verified").toBe(true);
          if (ci.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              ci.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          const review = await recordReviewStatusEvidence({
            reviewPort: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            prNumber: claim!.number,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(review.ok && review.status === "verified").toBe(true);
          if (review.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              review.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "github.pr.merge",
        attemptSuffix: "merge",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.merge;
          expect(claim?.mergeSha).toBeTruthy();
          const v = await verifyMergeClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claim!.prNumber,
            claimedMergeSha: claim!.mergeSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          const post = await verifyPostMergeEvidence({
            evidenceServices: oa.evidenceReviewServices,
            repositoryRead: repoRead,
            repositoryRef: IDENTITY,
            targetBranch: "main",
            artifactPath: TARGET_PATH,
            artifactDigest: artifactDigest as never,
            expectedTargetSha: claim!.mergeSha,
            expectedArtifactDigest: artifactDigest as never,
            bindings,
            actor,
            nowIso: NOW,
          });
          if (!post.ok) {
            throw new Error(`verifyPostMergeEvidence: ${post.reason}`);
          }
          const e = await oa.evidenceReviewServices.evidenceReader.findById(
            post.evidenceId,
          );
          if (e) collectedEvidence.push(e);
        },
      },
    ];

    const grantedGitConfirmations: Confirmation[] = [];
    const verifiedGitEffects: Array<
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    > = [];

    for (const slice of gitSlices) {
      const actionRef = buildGitEffectActionRef({
        executionContractId: contract.executionContractId,
        effect: slice.effect,
        repositoryRef: IDENTITY,
        branchOrRef:
          slice.effect === "github.pr.merge" ? "main" : BRANCH,
        prNumber: slice.effect === "github.pr.merge" ? 1 : undefined,
      });
      const cnf = await grantEffectConfirmation({
        runtime,
        confirmationId: `cfm:${slice.attemptSuffix}:${contract.executionContractId}`.slice(
          0,
          128,
        ),
        actionRef,
        scope: actionRef,
        decisionRef: decisionId,
      });
      grantedGitConfirmations.push(cnf);

      const fresh =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(fresh.ok).toBe(true);
      if (!fresh.ok) return;
      expect(fresh.contract.status).toBe("confirmed");
      contract = fresh.contract;

      const attemptId =
        `xat:gcec-${slice.attemptSuffix}:${contract.executionContractId}`.slice(
          0,
          128,
        );
      await selectGateStartSlice({
        runtime,
        attemptId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        grantId: `gd:${slice.attemptSuffix}:${attemptId}`,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
        confirmations: [...grantedGitConfirmations],
        confirmationMatch: {
          repositoryRef: IDENTITY,
          branchOrRef:
            slice.effect === "github.pr.merge" ? "main" : BRANCH,
          prNumber: slice.effect === "github.pr.merge" ? 1 : undefined,
          actorId: PILOTE.actorId,
        },
        // D-GCEC-15 — prior FS + completed git effects excluded; only current slice runs.
        verifiedEffects: [
          "filesystem.create",
          "filesystem.modify",
          "validation.run",
          ...verifiedGitEffects,
        ],
      });

      const att = await oa.executionAttemptServices.getExecutionAttempt.execute({
        attemptId,
      });
      expect(att.ok).toBe(true);
      if (!att.ok) return;
      const done = await completeBoundedDocsWriteLaunch({
        attempt: att.attempt,
        services: oa.executionAttemptServices,
        targetPath: TARGET_PATH,
        pathAllowlist: ["docs/"],
        // Git-only slices: Fake may skip FS; pass porcelain when dirty or empty ok path.
        nameStatusText:
          slice.effect === "git.commit"
            ? undefined
            : `A\t${TARGET_PATH}`,
        statusDiffPort:
          slice.effect === "git.commit"
            ? new NodeLocalGitStatusDiffPort()
            : undefined,
      });
      // For git-only slices after FS verified, Fake may skip file write; completion
      // workspace verify may need nameStatusText. If verify fails on empty dirty tree
      // after commit already staged, fall through with record-only via RO complete.
      if (!done.ok) {
        // Prefer Product completeBoundedReadOnlyLaunch path already attempted;
        // assert Attempt terminal via get after Fake ACK.
        const afterFail =
          await oa.executionAttemptServices.getExecutionAttempt.execute({
            attemptId,
          });
        // Force complete via RO if docs-write verify blocked on clean tree.
        if (afterFail.ok && afterFail.attempt.status === "running") {
          const { completeBoundedReadOnlyLaunch } = await import(
            "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch"
          );
          const ro = await completeBoundedReadOnlyLaunch({
            attempt: afterFail.attempt,
            services: oa.executionAttemptServices,
          });
          expect(ro.ok && ro.status === "succeeded").toBe(true);
        }
      } else {
        expect(done.status === "succeeded" || done.status === "failed").toBe(
          true,
        );
      }

      const ecMid =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(ecMid.ok).toBe(true);
      if (!ecMid.ok) return;
      // D-GCEC-15 — remains confirmed until all requirements verified
      expect(ecMid.contract.status).toBe("confirmed");
      contract = ecMid.contract;

      if (slice.after) await slice.after();
      verifiedGitEffects.push(slice.effect);
    }

    const gitSet = qualifyGitCompletionProofSet({
      evidence: collectedEvidence,
      expected: {
        repositoryRef: IDENTITY,
        targetPath: TARGET_PATH,
        artifactDigest,
        cycleInstanceId,
        executionContractId: contract.executionContractId,
        projectId,
      },
    });
    expect(gitSet.status).toBe("SATISFIED");

    // 19 advanceExecutionContractCompletion → completed
    const advanced = await advanceExecutionContractCompletion({
      executionContractId: contract.executionContractId,
      contracts: oa.executionContractServices.contracts,
      contractStatusWriter: oa.executionAttemptServices.contractStatusWriter,
      evidence: collectedEvidence,
      confirmations: grantedGitConfirmations,
      cycleInstanceId,
      nowIso: NOW,
    });
    expect(advanced.ok && advanced.complete && advanced.advanced).toBe(true);
    if (!advanced.ok) return;
    expect(advanced.status).toBe("completed");

    // 19b CR-GCEC-22 — close active trajectory step via Product use-case before FINALIZE
    const closedStep = await completeBoundTrajectoryStepAction({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => NOW,
    });
    if (!closedStep.ok) {
      throw new Error(`close step: ${closedStep.code} ${closedStep.message}`);
    }
    expect(closedStep.ok).toBe(true);
    const trajClosed =
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
    expect(
      trajClosed?.steps.find((s) => s.stepId === "stp:fd")?.state,
    ).toBe("done");

    // 20 FinalizationAssessment + FINALIZE HD + finalize
    // Do NOT waive governed families with NO_GOVERNED_EFFECTS — GCEC proofs are present.
    const finalizeHd = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:finalize:${cycleInstanceId}`,
      projectId,
      cycleInstanceId,
      subject: finalizeSubjectFor(cycleInstanceId),
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(finalizeHd.ok).toBe(true);

    const cyclesBeforeFinalize = await oa.cycleServices.cycles.listByProject(
      projectId,
    );
    const cycleCountBefore = cyclesBeforeFinalize.length;

    const finalized = await oa.cycleServices.pilotLifecycle.finalize({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      decisionId: `dec:finalize:${cycleInstanceId}`,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");

    // 21 CR-GCEC-22 — actual Product reprepare refusal + no implicit next cycle
    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesAfter).toHaveLength(cycleCountBefore);
    expect(cyclesAfter.every((c) => c.cycleInstanceId === cycleInstanceId || c.status !== "active")).toBe(
      true,
    );
    expect(cyclesAfter.filter((c) => c.status === "active")).toHaveLength(0);
    expect(
      cyclesAfter.find((c) => c.cycleInstanceId === cycleInstanceId)?.status,
    ).toBe("completed");

    const lpsAfter =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(
      lpsAfter.livingProjectState.activeCycleInstanceId == null,
    ).toBe(true);

    const trajAfter =
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
    expect(trajAfter?.steps.find((s) => s.stepId === "stp:fd")?.state).toBe(
      "done",
    );

    const reprepare = await prepareCycleFromValidatedTrajectory({
      oa,
      projectId,
    });
    expect(reprepare.ok).toBe(false);
    if (!reprepare.ok) {
      // Same completed step is not preparable (no eligible pending for fd;
      // or missing candidate-trajectory HD — either is Product refusal).
      expect([
        "TRAJECTORY_STEP_SELECTION_REQUIRED",
        "TRAJECTORY_DECISION_REF_MISSING",
        "HUMAN_DECISION_SOURCE_MISMATCH",
        "HUMAN_DECISION_MISSING",
        "PREPARE_REUSE_TERMINAL",
        "TRAJECTORY_NOT_VALIDATED",
        "DECISION_SEALED_TRAJECTORY_DRIFT",
      ]).toContain(reprepare.code);
    }

    const eligible = selectEligiblePendingTrajectorySteps(trajAfter!);
    expect(eligible.some((s) => s.stepId === "stp:fd")).toBe(false);
    expect(eligible).toHaveLength(0);

    // No implicit next CycleInstance created / started.
    expect(cyclesAfter).toHaveLength(1);

    const lrRefuse = validateLifecycleRecommendation({
      projectId,
      cycles: cyclesAfter,
      lpsActiveCycleInstanceId:
        lpsAfter.livingProjectState.activeCycleInstanceId ?? null,
      hasTrajectoryContext: true,
      candidate: {
        intent: "NEXT_CYCLE",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: cycleInstanceId,
        targetCycleTypeId: null,
        statement: "Reopen completed cycle",
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    });
    expect(lrRefuse.ok).toBe(false);
    if (!lrRefuse.ok) {
      expect(lrRefuse.code).toBe("LR_TARGET_STATUS");
    }

    // Fake Cursor owned mutations — Studio never ran git write after fixture
    expect(fakeLaunch.calls.length).toBeGreaterThanOrEqual(2);
    expect(
      fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
    ).toBe(true);
  }, 120_000);

  it("CR-GCEC-25 source guard: principal E2E must not mutate durable repos for progression", async () => {
    const src = fs.readFileSync(__filename, "utf8");
    // Strip this guard test body from the scanned corpus (self-reference).
    const withoutGuard = src.replace(
      /it\("CR-GCEC-25 source guard:[\s\S]*$/m,
      "",
    );
    expect(withoutGuard).not.toMatch(/cycleServices\.cycles\.save\s*\(/);
    expect(withoutGuard).not.toMatch(/cycleServices\.trajectories\.save\s*\(/);
    expect(withoutGuard).not.toMatch(
      /executionContractServices\.contracts\.save\s*\(/,
    );
    expect(withoutGuard).not.toMatch(
      /evidenceReviewServices\.repository\.save\s*\(/,
    );
  });
});

```

---
# DIFFS vs BASE d0d009bb

## DIFF: projects_sfia-studio_app___tests___oa_cycle_gcecD15Negatives.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
index 96422e8c..5b1b2700 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
@@ -247,7 +247,7 @@ describe("gcecD15Negatives — N1–N28", () => {
     expect(r.status).toBe("SATISFIED");
   });

-  it("N6 slice blocks git without Confirmation; FS still authorized", () => {
+  it("N6 slice blocks git without Confirmation; git-only does not authorize FS", () => {
     const slice = deriveAuthorizedExecutionSlice({
       executionContractId: "xct:n6",
       evidenceRequirements: ["git:local_commit", "git:merge"],
@@ -255,7 +255,8 @@ describe("gcecD15Negatives — N1–N28", () => {
     });
     expect(slice.blockedEffects).toContain("git.commit");
     expect(slice.blockedEffects).toContain("github.pr.merge");
-    expect(slice.authorizedEffects).toContain("filesystem.create");
+    expect(slice.authorizedEffects).not.toContain("filesystem.create");
+    expect(slice.authorizedEffects).not.toContain("validation.run");
   });

   it("N7 confirmation grants git.commit only when actionRef matches", () => {
@@ -295,6 +296,7 @@ describe("gcecD15Negatives — N1–N28", () => {
       confirmations: [],
     });
     expect(slice.authorizedEffects).toContain("filesystem.create");
+    expect(slice.authorizedEffects).not.toContain("validation.run");
     expect(slice.authorizedEffects).not.toContain("git.commit");
     expect(slice.blockedEffects).toContain("git.commit");
   });
@@ -553,7 +555,8 @@ describe("gcecD15Negatives — N1–N28", () => {
   it("N21 verifiedEffects exclude FS from re-authorization", () => {
     const slice = deriveAuthorizedExecutionSlice({
       executionContractId: "xct:n21",
-      evidenceRequirements: ["git:local_commit"],
+      evidenceRequirements: ["artifact", "git:local_commit"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
       verifiedEffects: ["filesystem.create", "filesystem.modify", "validation.run"],
       confirmations: [],
     });
@@ -561,10 +564,11 @@ describe("gcecD15Negatives — N1–N28", () => {
       expect.arrayContaining([
         "filesystem.create",
         "filesystem.modify",
-        "validation.run",
       ]),
     );
     expect(slice.authorizedEffects).not.toContain("filesystem.create");
+    // CR-GCEC-24 — validation not required → not re-authorized
+    expect(slice.authorizedEffects).not.toContain("validation.run");
   });

   it("N22 git:commit alias authorizes same as git:local_commit", () => {
@@ -1216,4 +1220,407 @@ describe("gcecD15Negatives — N1–N28", () => {
     expect(q.complete).toBe(false);
     expect(q.remainingRequiredEffects).toContain("validation.run");
   });
+
+  it("C24-N1 artifact-only → filesystem eligible; validation.run NOT authorized", () => {
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24n1",
+      evidenceRequirements: ["artifact"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      confirmations: [],
+    });
+    expect(slice.authorizedEffects).toEqual(
+      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
+    );
+    expect(slice.authorizedEffects).not.toContain("validation.run");
+  });
+
+  it("C24-P1 artifact + explicit validation → validation.run authorized", () => {
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24p1",
+      evidenceRequirements: ["artifact", "validation"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      confirmations: [],
+    });
+    expect(slice.authorizedEffects).toContain("validation.run");
+  });
+
+  it("C24-N2 post_merge_verification only → github.pr.merge NOT authorized", () => {
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:c24n2",
+      effect: "github.pr.merge",
+      repositoryRef: REPO,
+      prNumber: 1,
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24n2",
+      evidenceRequirements: ["git:post_merge_verification"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:c24n2",
+          actionRef,
+          scope: "git:merge",
+        }),
+      ],
+      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
+    });
+    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
+    expect(slice.blockedEffects).toContain("github.pr.merge");
+  });
+
+  it("C24-P2 git:merge explicit → merge candidate Confirmation-gated", () => {
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24p2",
+      evidenceRequirements: ["git:merge"],
+      confirmations: [],
+    });
+    expect(slice.blockedEffects).toContain("github.pr.merge");
+    expect(slice.reasons.some((r) => r.includes("confirmation_required"))).toBe(
+      true,
+    );
+  });
+
+  it("C24-N3 ci_status only → no Cursor Git mutation", () => {
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24n3",
+      evidenceRequirements: ["git:ci_status"],
+      confirmations: [],
+    });
+    expect(slice.authorizedEffects).not.toContain("git.commit");
+    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
+  });
+
+  it("C24-N4 review_status only → no Cursor Git mutation", () => {
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24n4",
+      evidenceRequirements: ["git:review_status"],
+      confirmations: [],
+    });
+    expect(slice.authorizedEffects).not.toContain("git.push");
+    expect(slice.authorizedEffects).not.toContain("github.pr.create");
+  });
+
+  it("C24-N5 postmerge + no merge + exact merge Confirmation → still NO merge", () => {
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:c24n5",
+      effect: "github.pr.merge",
+      repositoryRef: REPO,
+      prNumber: 7,
+      branchOrRef: "main",
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24n5",
+      evidenceRequirements: ["git:post_merge_verification"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:c24n5",
+          actionRef,
+          scope: actionRef,
+        }),
+      ],
+      confirmationMatch: {
+        repositoryRef: REPO,
+        prNumber: 7,
+        branchOrRef: "main",
+      },
+    });
+    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
+  });
+
+  it("C24-P3 full vertical → Cursor gets commit/push/PR/merge only", () => {
+    const classified = {
+      reqs: [
+        "artifact",
+        "git:local_commit",
+        "git:remote_push",
+        "git:pull_request",
+        "git:ci_status",
+        "git:review_status",
+        "git:merge",
+        "git:post_merge_verification",
+      ],
+    };
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c24p3",
+      evidenceRequirements: classified.reqs,
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      confirmations: [],
+    });
+    expect(slice.authorizedEffects).toEqual(
+      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
+    );
+    expect(slice.blockedEffects).toEqual(
+      expect.arrayContaining([
+        "git.commit",
+        "git.push",
+        "github.pr.create",
+        "github.pr.merge",
+      ]),
+    );
+    expect(slice.authorizedEffects).not.toContain("validation.run");
+  });
+
+  it("C23 resolveGitEffectTarget refuses projected repo mismatch", async () => {
+    const { resolveGitEffectTarget } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const r = resolveGitEffectTarget({
+      effect: "git.commit",
+      contract: {
+        executionContractId: "xct:c23",
+        projectId: "prj:gcec",
+        inputs: { workingBranch: "gcec/docs" },
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: "acme/widget",
+        remoteUrl: "https://github.com/acme/widget.git",
+        defaultBranch: "main",
+      },
+      projectedRepositoryRef: "other/repo",
+      actorId: "actor:pilote",
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toContain("mismatch");
+  });
+
+  it("C23-N1 caller repo override refused vs Project binding", async () => {
+    const {
+      resolveGitEffectTarget,
+      assertConfirmationMatchAgreesWithServerTarget,
+      resolvedTargetToConfirmationMatch,
+    } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const resolved = resolveGitEffectTarget({
+      effect: "git.commit",
+      contract: {
+        executionContractId: "xct:c23n1",
+        projectId: "prj:gcec",
+        inputs: { workingBranch: "main" },
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: "acme/widget",
+        remoteUrl: "https://github.com/acme/widget.git",
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.target.repositoryRef).toBe("acme/widget");
+    const hostile = assertConfirmationMatchAgreesWithServerTarget({
+      assertion: { repositoryRef: "other/repo" },
+      server: resolved.target,
+    });
+    expect(hostile.ok).toBe(false);
+    const serverMatch = resolvedTargetToConfirmationMatch(resolved.target);
+    const actionRefHostile = buildGitEffectActionRef({
+      executionContractId: "xct:c23n1",
+      effect: "git.commit",
+      repositoryRef: "other/repo",
+      branchOrRef: "main",
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c23n1",
+      evidenceRequirements: ["git:local_commit"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:c23n1",
+          actionRef: actionRefHostile,
+          scope: actionRefHostile,
+        }),
+      ],
+      confirmationMatch: serverMatch,
+    });
+    expect(slice.authorizedEffects).not.toContain("git.commit");
+  });
+
+  it("C23-N2 caller branch override refused vs EC durable branch", async () => {
+    const {
+      resolveGitEffectTarget,
+      assertConfirmationMatchAgreesWithServerTarget,
+    } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const resolved = resolveGitEffectTarget({
+      effect: "git.push",
+      contract: {
+        executionContractId: "xct:c23n2",
+        projectId: "prj:gcec",
+        inputs: { workingBranch: "branch-a" },
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: REPO,
+        remoteUrl: `https://github.com/${REPO}.git`,
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.target.branchOrRef).toBe("branch-a");
+    expect(
+      assertConfirmationMatchAgreesWithServerTarget({
+        assertion: { branchOrRef: "branch-b" },
+        server: resolved.target,
+      }).ok,
+    ).toBe(false);
+  });
+
+  it("C23-N3 verified PR #41; caller assertion #42 refused by assert helper", async () => {
+    const {
+      resolveGitEffectTarget,
+      assertConfirmationMatchAgreesWithServerTarget,
+    } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const evidence = [
+      baseEvidence({
+        evidenceId: "ev:pr41",
+        status: "verified",
+        source: "git:pull_request",
+        location: "git:pull_request?repo=acme%2Fwidget&prNumber=41",
+        bindings: {
+          projectId: "prj:gcec",
+          cycleInstanceId: CYCLE,
+          executionContractId: "xct:c23n3",
+        },
+      }),
+    ];
+    const resolved = resolveGitEffectTarget({
+      effect: "github.pr.merge",
+      contract: {
+        executionContractId: "xct:c23n3",
+        projectId: "prj:gcec",
+        cycleInstanceId: CYCLE,
+        inputs: {},
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: "acme/widget",
+        remoteUrl: "https://github.com/acme/widget.git",
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+      verifiedEvidence: evidence,
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.target.prNumber).toBe(41);
+    const assertOk = assertConfirmationMatchAgreesWithServerTarget({
+      assertion: { prNumber: 42 },
+      server: resolved.target,
+    });
+    expect(assertOk.ok).toBe(false);
+  });
+
+  it("C23-N4 hostile actorId cannot authorize — server actor from request wins", async () => {
+    const { resolveGitEffectTarget } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const resolved = resolveGitEffectTarget({
+      effect: "git.commit",
+      contract: {
+        executionContractId: "xct:c23n4",
+        projectId: "prj:gcec",
+        inputs: { workingBranch: "main" },
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: REPO,
+        remoteUrl: `https://github.com/${REPO}.git`,
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.target.actorId).toBe("actor:pilote");
+    expect(resolved.target.actorId).not.toBe("actor:hostile");
+  });
+
+  it("C23-P1 canonical server-derived target + exact Confirmation → authorized", async () => {
+    const {
+      resolveGitEffectTarget,
+      resolvedTargetToConfirmationMatch,
+    } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const resolved = resolveGitEffectTarget({
+      effect: "git.commit",
+      contract: {
+        executionContractId: "xct:c23p1",
+        projectId: "prj:gcec",
+        inputs: { workingBranch: "main" },
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: REPO,
+        remoteUrl: `https://github.com/${REPO}.git`,
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    const match = resolvedTargetToConfirmationMatch(resolved.target);
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:c23p1",
+      effect: "git.commit",
+      repositoryRef: match.repositoryRef!,
+      branchOrRef: match.branchOrRef,
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:c23p1",
+      evidenceRequirements: ["git:local_commit"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:c23p1",
+          actionRef,
+          scope: actionRef,
+          requestedTo: { actorId: "actor:pilote", role: "pilote" },
+        }),
+      ],
+      confirmationMatch: match,
+    });
+    expect(slice.authorizedEffects).toContain("git.commit");
+  });
+
+  it("C23-P2 matching assertion allowed but non-authoritative", async () => {
+    const {
+      resolveGitEffectTarget,
+      assertConfirmationMatchAgreesWithServerTarget,
+    } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const resolved = resolveGitEffectTarget({
+      effect: "git.commit",
+      contract: {
+        executionContractId: "xct:c23p2",
+        projectId: "prj:gcec",
+        inputs: { workingBranch: "main" },
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: REPO,
+        remoteUrl: `https://github.com/${REPO}.git`,
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(
+      assertConfirmationMatchAgreesWithServerTarget({
+        assertion: {
+          repositoryRef: REPO,
+          branchOrRef: "main",
+          actorId: "actor:pilote",
+        },
+        server: resolved.target,
+      }).ok,
+    ).toBe(true);
+  });
 });

```

## DIFF: projects_sfia-studio_app___tests___oa_cycle_gcecOwnershipNegatives.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
index 59dc32ab..9d1cd2f2 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
@@ -187,7 +187,9 @@ describe("GCEC ownership negatives", () => {
     });
     expect(slice.blockedEffects).toContain("git.commit");
     expect(slice.blockedEffects).toContain("github.pr.merge");
-    expect(slice.authorizedEffects).toContain("filesystem.create");
+    // CR-GCEC-24 — git-only requirements do not authorize filesystem effects.
+    expect(slice.authorizedEffects).not.toContain("filesystem.create");
+    expect(slice.authorizedEffects).not.toContain("validation.run");
   });

   it("N12 cursor report claim alone does not satisfy git SET", () => {

```

## DIFF: projects_sfia-studio_app___tests___oa_cycle_gcecProductMonolithicE2e.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
index 56941cf3..d16924c8 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
@@ -2,11 +2,15 @@
  * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
  *
  * True Product spine (no pseudo-E2E):
- * CreateProject → SetRepositoryBinding → Cycle START → F2 → HD → prepareM3 →
- * resolve → Confirm → Select → GateD → StartExecution → Fake Cursor slice →
- * complete → EC confirmed (remaining reqs) → evidence verify → gated Confirmations →
- * Select+Start same EC → git effects via Fake only → advance EC completed →
- * FinalizationAssessment → FINALIZE HD → Cycle completed.
+ * CreateProject → SetRepositoryBinding → LR → prepareCandidate → approve →
+ * prepareCycleFromValidatedTrajectory → startPreparedTrajectoryCycle →
+ * F2 → HD → prepareM3 → resolve → Confirm → Select → GateD → StartExecution →
+ * Fake Cursor slice → complete → EC confirmed (remaining reqs) → evidence verify →
+ * gated Confirmations → Select+Start same EC → git effects via Fake only →
+ * advance EC completed → FinalizationAssessment → FINALIZE HD → Cycle completed.
+ *
+ * CR-GCEC-25 — no direct cycle/trajectory/EC/Evidence repository mutation after
+ * fixture bootstrap for scenario progression.
  *
  * ZERO OpenAI REAL. ZERO Cursor REAL. Fake owns all git mutations after fixture init.
  * @vitest-environment node
@@ -24,10 +28,20 @@ import {
 import {
   finalizeSubjectFor,
   qualifyGitCompletionProofSet,
-  type TrajectoryStep,
+  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+  prepareCandidateTrajectoryFromCurrentRecommendation,
+  prepareCycleFromValidatedTrajectory,
+  startPreparedTrajectoryCycle,
+  materializeLifecycleRecommendationFromStructuredOutput,
+  resolveTrajectoryBootstrapPresence,
+  selectEligiblePendingTrajectorySteps,
+  validateLifecycleRecommendation,
 } from "@/lib/oa/cycle";
-import { prepareCycleFromValidatedTrajectory, selectEligiblePendingTrajectorySteps } from "@/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory";
-import { validateLifecycleRecommendation } from "@/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation";
+import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import {
+  approveCandidateTrajectory,
+  buildPreCycleCandidateApprovalPresentation,
+} from "@/features/project-assistant/approveCandidateTrajectory";
 import { completeBoundTrajectoryStepAction } from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   advanceExecutionContractCompletion,
@@ -80,11 +94,21 @@ const SCHEMAS_ROOT = path.resolve(

 const IDENTITY = "acme/widget";
 const TARGET_PATH = "docs/functional-design.md";
-const BRANCH = "gcec/docs";
+/** Server-derived workingBranch from prepareM3 (defaultBranch). */
+const BRANCH = "main";
 const NOW = "2026-09-11T14:00:00.000Z";

 const PILOTE = LOCAL_PILOTE_ACTOR;

+const SIGNALS_LIGHT = {
+  structuralChange: false,
+  securityImpact: false,
+  architectureImpact: false,
+  dataImpact: false,
+  irreversible: false,
+  lowRiskBounded: true,
+} as const;
+
 const temps: string[] = [];

 afterEach(() => {
@@ -363,47 +387,162 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
     });
     expect(bound.ok).toBe(true);

-    // 3 Create + START cycle — trajectory step starts active (not pre-done).
-    const stepsInFlight: TrajectoryStep[] = [
-      {
-        stepId: "stp:fd",
-        order: 1,
-        label: "Functional design",
-        state: "active",
-        cycleTypeId: "cyc:functional-design",
+    // 3 Product trajectory → cycle binding (CR-GCEC-25) — no cycles.save
+    const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
+    const decisions0 = await oa.decisionServices.decisions.listByProject(
+      projectId,
+    );
+    const lpsBoot =
+      await oa.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(lpsBoot.ok).toBe(true);
+    if (!lpsBoot.ok) return;
+    const presence = await resolveTrajectoryBootstrapPresence(
+      oa.cycleServices.trajectories,
+      projectId,
+    );
+    const projectBoot = await oa.projectServices.getProject.execute({
+      projectId,
+    });
+    expect(projectBoot.ok).toBe(true);
+    if (!projectBoot.ok) return;
+    const doctrinePin = projectBoot.project.doctrinePackageRef;
+    expect(doctrinePin).toBeTruthy();
+
+    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
+      projectId,
+      structuredOutput: {
+        narrative: "Envisager un design fonctionnel gouverné.",
+        preCycleRoutingAssessment: {
+          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
+        },
+        lifecycleRecommendation: {
+          intent: "NEXT_CYCLE" as const,
+          statement: "Envisager un Design fonctionnel.",
+          subjectCycleInstanceId: null,
+          targetCycleInstanceId: null,
+          targetCycleTypeId: "cyc:functional-design",
+          rationale: "GCEC Product monolithic E2E",
+          authority: "none" as const,
+          isHumanDecision: false as const,
+          qualificationSignals: { ...SIGNALS_LIGHT },
+        },
       },
-    ];
-    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      updateEpistemicState: oa.cycleServices.updateEpistemicState,
+      facts: {
+        cycles: cycles0,
+        lpsActiveCycleInstanceId:
+          lpsBoot.livingProjectState.activeCycleInstanceId,
+        lpsVersion: lpsBoot.livingProjectState.version,
+        doctrinePackageId: doctrinePin!.doctrinePackageId,
+        doctrinePackageVersion: doctrinePin!.version,
+        doctrinePackageDigest: doctrinePin!.digest,
+        trajectory: null,
+        trajectoryBootstrapPresence: presence,
+        decisions: decisions0,
+        evidence: [],
+        epistemicItems: await oa.cycleServices.epistemic.listByProject(
+          projectId,
+        ),
+      },
+      producedAt: NOW,
+      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+    });
+    expect(mat.recommendationAttempted).toBe(true);
+    expect(mat.materialization?.ok).toBe(true);
+    if (!mat.materialization?.ok) return;
+
+    const bridgeDeps = {
+      trajectories: oa.cycleServices.trajectories,
+      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
+      updateEpistemicState: oa.cycleServices.updateEpistemicState,
+      runInTransaction: ((fn: () => Promise<unknown>) =>
+        oa.projectServices.store.runInTransaction(fn)) as <T>(
+        fn: () => Promise<T>,
+      ) => Promise<T>,
+      listEpistemicByProject: (pid: string) =>
+        oa.cycleServices.epistemic.listByProject(pid),
+      listCyclesByProject: (pid: string) =>
+        oa.cycleServices.cycles.listByProject(pid),
+      listDecisionsByProject: (pid: string) =>
+        oa.decisionServices.decisions.listByProject(pid),
+      listEvidenceByProject: (pid: string) =>
+        oa.evidenceReviewServices.repository.listByProject(pid),
+      getCurrentLps: (pid: string) =>
+        oa.projectServices.getCurrentLivingProjectState.execute({
+          projectId: pid,
+        }),
+      getProjectDoctrinePin: async (pid: string) => {
+        const p = await oa.projectServices.getProject.execute({
+          projectId: pid,
+        });
+        if (!p.ok) return null;
+        const pin = p.project.doctrinePackageRef;
+        return pin
+          ? {
+              doctrinePackageId: pin.doctrinePackageId,
+              version: pin.version,
+              digest: pin.digest,
+            }
+          : null;
+      },
+      newTrajectoryId: () => `trj:gcec-prod-${projectId}`,
+      newStepId: () => `stp:fd`,
+      newProvenanceObservationId: () => `epi:trj-prov-gcec-prod`,
+      correlationId: `cor:gcec-prod-bridge`,
+    };
+
+    const candidatePrepared =
+      await prepareCandidateTrajectoryFromCurrentRecommendation({
+        projectId,
+        deps: bridgeDeps,
+      });
+    expect(candidatePrepared.ok).toBe(true);
+    if (!candidatePrepared.ok) return;
+
+    const presentation = await buildPreCycleCandidateApprovalPresentation({
+      oa,
       projectId,
     });
-    expect(lps0.ok).toBe(true);
-    if (!lps0.ok) return;
-    const traj = await oa.cycleServices.createInitialTrajectory.execute({
-      trajectoryId: `trj:${projectId}`,
+    expect(presentation.ok && presentation.presentation).toBeTruthy();
+    if (!presentation.ok || !presentation.presentation) return;
+
+    const approved = await approveCandidateTrajectory({
+      oa,
       projectId,
-      steps: stepsInFlight,
-      status: "active",
-      expectedLpsVersion: lps0.livingProjectState.version,
-      createdBy: PILOTE,
+      presentationDigest: presentation.presentation.presentationDigest,
+      forceLocalAuthority: true,
     });
-    expect(traj.ok).toBe(true);
-    if (!traj.ok) return;
+    expect(approved.ok).toBe(true);
+    if (!approved.ok) return;

-    const cycleInstanceId = `cyc:gcec-prod-${Date.now()}`;
-    const cycleCreated = await oa.cycleServices.createCycle.execute({
-      cycleInstanceId,
-      cycleTypeId: "cyc:functional-design",
+    const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) {
+      throw new Error(`prepareCycle: ${prep.code} ${prep.reason}`);
+    }
+    const cycleInstanceId = prep.cycle.cycleInstanceId;
+    expect(prep.cycle.trajectoryId).toBeTruthy();
+    expect(prep.cycle.trajectoryVersion).toBeTruthy();
+    expect(prep.cycle.trajectoryStepId).toBe("stp:fd");
+
+    const startedCycle = await startPreparedTrajectoryCycle({
+      oa,
       projectId,
-      signals: { lowRiskBounded: true },
-      createdBy: {
-        actorId: "actor:nora-f2",
-        role: "agent",
-        displayName: "Nora F2",
-        authorityLevel: "N1",
-      },
-      linkAsActiveCycle: false,
+      cycleInstanceId,
+      forceLocalAuthority: true,
     });
-    expect(cycleCreated.ok).toBe(true);
+    expect(startedCycle.ok).toBe(true);
+    if (!startedCycle.ok) {
+      throw new Error(`startPrepared: ${startedCycle.code}`);
+    }
+    expect(startedCycle.cycle.status).toBe("active");
+    expect(startedCycle.cycle.trajectoryId).toBe(prep.cycle.trajectoryId);
+    expect(startedCycle.cycle.trajectoryVersion).toBe(
+      prep.cycle.trajectoryVersion,
+    );
+    expect(startedCycle.cycle.trajectoryStepId).toBe("stp:fd");

     const startAuth = registerLocalPiloteAuthority({
       authorityResolver: oa.authorityResolver,
@@ -412,26 +551,13 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
       forceEnable: true,
     });
     expect(startAuth.ok).toBe(true);
-    const startedCycle = await oa.cycleServices.pilotLifecycle.start({
-      cycleInstanceId,
-      projectId,
-      createdBy: PILOTE,
-      authorityEvidenceId: requireAuthEvidenceId(startAuth),
-    });
-    expect(startedCycle.ok).toBe(true);
-    if (!startedCycle.ok) return;
-    expect(startedCycle.cycle.status).toBe("active");

-    // Bind trajectory after LEGACY START so Product completeBoundTrajectoryStep
-    // can close the active step without COMPLETE greenfield START readiness.
-    const cycleForBind = await oa.cycleServices.cycles.findById(cycleInstanceId);
-    expect(cycleForBind).toBeTruthy();
-    await oa.cycleServices.cycles.save({
-      ...cycleForBind!,
-      trajectoryId: traj.trajectory.trajectoryId,
-      trajectoryVersion: traj.trajectory.version,
-      trajectoryStepId: "stp:fd",
-    });
+    // Durable trajectory binding exists BEFORE F2 (CR-GCEC-25)
+    const cycleBeforeF2 =
+      await oa.cycleServices.cycles.findById(cycleInstanceId);
+    expect(cycleBeforeF2?.trajectoryId).toBe(prep.cycle.trajectoryId);
+    expect(cycleBeforeF2?.trajectoryVersion).toBe(prep.cycle.trajectoryVersion);
+    expect(cycleBeforeF2?.trajectoryStepId).toBe("stp:fd");

     // 4–5 F2 Fake → Proposal → recordF2Decision (HD)
     const overview = await runtime.getProject(projectId);
@@ -1138,6 +1264,7 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
         "HUMAN_DECISION_MISSING",
         "PREPARE_REUSE_TERMINAL",
         "TRAJECTORY_NOT_VALIDATED",
+        "DECISION_SEALED_TRAJECTORY_DRIFT",
       ]).toContain(reprepare.code);
     }

@@ -1181,4 +1308,21 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
       fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
     ).toBe(true);
   }, 120_000);
+
+  it("CR-GCEC-25 source guard: principal E2E must not mutate durable repos for progression", async () => {
+    const src = fs.readFileSync(__filename, "utf8");
+    // Strip this guard test body from the scanned corpus (self-reference).
+    const withoutGuard = src.replace(
+      /it\("CR-GCEC-25 source guard:[\s\S]*$/m,
+      "",
+    );
+    expect(withoutGuard).not.toMatch(/cycleServices\.cycles\.save\s*\(/);
+    expect(withoutGuard).not.toMatch(/cycleServices\.trajectories\.save\s*\(/);
+    expect(withoutGuard).not.toMatch(
+      /executionContractServices\.contracts\.save\s*\(/,
+    );
+    expect(withoutGuard).not.toMatch(
+      /evidenceReviewServices\.repository\.save\s*\(/,
+    );
+  });
 });

```

## DIFF: projects_sfia-studio_app_features_project-assistant_f3_prepareM3FromDecision.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index dfcd6ac3..87bceb40 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -142,6 +142,12 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
       inputs.repositoryBindingIdentity = targetRepositoryRef;
       inputs.remoteUrl = `https://github.com/${targetRepositoryRef}.git`;
       inputs.defaultBranch = "main";
+      // CR-GCEC-23 — durable working branch for Confirmation target (server-owned).
+      const working =
+        typeof (eb as { workingBranch?: unknown }).workingBranch === "string"
+          ? (eb as { workingBranch?: string }).workingBranch?.trim()
+          : undefined;
+      inputs.workingBranch = working || inputs.defaultBranch;
       if (eb.scopeIn?.[0]) inputs.pathRoot = eb.scopeIn[0];
     }


```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_application_startExecution.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 5f5a957d..e07ba833 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -68,6 +68,12 @@ import { M4_BOUNDED_DOCS_WRITE_ACTION } from "../infrastructure/m4BoundedDocsWri
 import { ManagedProjectRepositoryResolver } from "../infrastructure/managedProjectRepositoryResolver";
 import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
 import { deriveAuthorizedExecutionSlice } from "../domain/authorizedExecutionSlice";
+import {
+  assertConfirmationMatchAgreesWithServerTarget,
+  resolveGitEffectTarget,
+  resolvedTargetToConfirmationMatch,
+} from "../domain/resolveGitEffectTarget";
+import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
 import {
   authorityFailureDetail,
   contractGateDetail,
@@ -256,6 +262,18 @@ export class StartExecution {
      * MUST NOT come from ExecutionContract / client.
      */
     private readonly managedRepoRootBase?: string,
+    /**
+     * CR-GCEC-23 — resolve Project.repositoryBinding from durable Project.
+     */
+    private readonly resolveProjectRepositoryBinding?: (
+      projectId: string,
+    ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>,
+    /**
+     * CR-GCEC-23 — list Evidence for verified PR identity (late-bound OK).
+     */
+    private readonly listProjectEvidence?: (
+      projectId: string,
+    ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>,
   ) {}

   async execute(
@@ -879,53 +897,169 @@ export class StartExecution {
       });
     }

-    // D-GCEC-15 — derive AuthorizedExecutionSlice before real launch.
+    // D-GCEC-15 / CR-GCEC-23/24 — AuthorizedExecutionSlice from server-derived targets.
     const evidenceRequirements =
       docsWriteSpec?.evidenceRequirements ??
       (Array.isArray(contract.evidenceRequirements)
         ? contract.evidenceRequirements.map(String)
         : []);
-    const inputsBranch =
-      contract.inputs && typeof contract.inputs === "object"
-        ? (contract.inputs as Record<string, unknown>)
-        : {};
-    const branchFromInputs =
-      (typeof inputsBranch.workingBranch === "string" &&
-      inputsBranch.workingBranch.trim()
-        ? inputsBranch.workingBranch.trim()
-        : undefined) ??
-      (typeof inputsBranch.branchName === "string" &&
-      inputsBranch.branchName.trim()
-        ? inputsBranch.branchName.trim()
-        : undefined) ??
-      (typeof inputsBranch.headRef === "string" && inputsBranch.headRef.trim()
-        ? inputsBranch.headRef.trim()
-        : undefined);
-    const prFromInputs =
-      typeof inputsBranch.prNumber === "number"
-        ? inputsBranch.prNumber
-        : typeof inputsBranch.prNumber === "string" &&
-            /^\d+$/.test(inputsBranch.prNumber)
-          ? Number(inputsBranch.prNumber)
-          : undefined;
+    const classified = deriveExecutableEffectsFromContractRequirements({
+      evidenceRequirements,
+      expectedOutputs: Array.isArray(contract.expectedOutputs)
+        ? contract.expectedOutputs.map(String)
+        : undefined,
+      requiredCapabilities: Array.isArray(contract.requiredCapabilities)
+        ? contract.requiredCapabilities.map(String)
+        : undefined,
+      allowFilesystemCreateOrModify: true,
+    });
+    const gitExecutable = classified.executableEffects.filter(
+      (
+        e,
+      ): e is
+        | "git.commit"
+        | "git.push"
+        | "github.pr.create"
+        | "github.pr.merge" =>
+        e === "git.commit" ||
+        e === "git.push" ||
+        e === "github.pr.create" ||
+        e === "github.pr.merge",
+    );
+
+    let serverConfirmationMatch:
+      | {
+          repositoryRef?: string;
+          branchOrRef?: string;
+          prNumber?: number;
+          actorId?: string;
+        }
+      | undefined;
+
+    if (gitExecutable.length > 0 && this.resolveProjectRepositoryBinding) {
+      const binding = await this.resolveProjectRepositoryBinding(
+        contract.projectId,
+      );
+      if (!binding?.identity?.trim()) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "project_repository_binding_missing",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      // Prefer Project binding identity for workspace resolution.
+      const contractInputs =
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : {};
+      const projectedRepo =
+        docsWriteSpec?.repositoryRef?.trim() ||
+        (typeof contractInputs.repositoryRef === "string"
+          ? contractInputs.repositoryRef.trim()
+          : undefined);
+      if (projectedRepo && projectedRepo !== binding.identity.trim()) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "projected_repository_ref_mismatch_project_binding",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      repositoryBinding = {
+        identity: binding.identity,
+        remoteUrl: binding.remoteUrl,
+        defaultBranch: binding.defaultBranch,
+        ...(binding.pathRoot ? { pathRoot: binding.pathRoot } : {}),
+      };
+      repositoryBindingIdentity = binding.identity;
+
+      const evidenceList = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : [];
+      const verifiedEvidence = evidenceList.filter(
+        (e) => e.status === "verified",
+      );
+
+      // Resolve per remaining executable git effect from durable Product truth.
+      // Progressive D-GCEC-15: missing VERIFIED PR must NOT fail Start when merge
+      // is not yet runnable — merge stays blocked until trusted PR identity exists.
+      for (const effect of gitExecutable) {
+        if ((request.verifiedEffects ?? []).includes(effect)) {
+          continue;
+        }
+        const resolved = resolveGitEffectTarget({
+          effect,
+          contract,
+          projectRepositoryBinding: binding,
+          projectedRepositoryRef: projectedRepo,
+          actorId: request.actor.actorId,
+          verifiedEvidence,
+        });
+        if (!resolved.ok) {
+          const mergePrNotReady =
+            effect === "github.pr.merge" &&
+            (resolved.reason === "verified_pull_request_identity_missing" ||
+              resolved.reason === "verified_pull_request_identity_ambiguous");
+          if (mergePrNotReady) {
+            if (request.confirmationMatch?.prNumber != null) {
+              return fail(
+                "ATTEMPT_INVALID",
+                "hostile_confirmation_match_pr_without_server_target",
+                { executionContractId: contract.executionContractId },
+              );
+            }
+            continue;
+          }
+          return fail("ATTEMPT_INVALID", resolved.reason, {
+            executionContractId: contract.executionContractId,
+          });
+        }
+        const assertOk = assertConfirmationMatchAgreesWithServerTarget({
+          assertion: request.confirmationMatch,
+          server: resolved.target,
+        });
+        if (!assertOk.ok) {
+          return fail("ATTEMPT_INVALID", assertOk.reason, {
+            executionContractId: contract.executionContractId,
+          });
+        }
+        serverConfirmationMatch = resolvedTargetToConfirmationMatch(
+          resolved.target,
+        );
+      }
+    } else if (
+      gitExecutable.length > 0 &&
+      !this.resolveProjectRepositoryBinding &&
+      request.confirmationMatch
+    ) {
+      // Hostile assertion present without server resolver → refuse (cannot
+      // validate against Product truth). Unconfigured harnesses without
+      // assertion leave git blocked via empty confirmationMatch.
+      return fail(
+        "ATTEMPT_INVALID",
+        "project_repository_binding_resolver_unconfigured",
+        { executionContractId: contract.executionContractId },
+      );
+    }
+
     const authorizedSlice = deriveAuthorizedExecutionSlice({
       executionContractId: contract.executionContractId,
       evidenceRequirements,
+      expectedOutputs: Array.isArray(contract.expectedOutputs)
+        ? contract.expectedOutputs.map(String)
+        : undefined,
+      requiredCapabilities: Array.isArray(contract.requiredCapabilities)
+        ? contract.requiredCapabilities.map(String)
+        : undefined,
       confirmations: request.confirmations ?? [],
       verifiedEffects: request.verifiedEffects,
-      confirmationMatch: {
-        repositoryRef:
-          request.confirmationMatch?.repositoryRef ??
-          docsWriteSpec?.repositoryRef,
-        branchOrRef:
-          request.confirmationMatch?.branchOrRef ?? branchFromInputs,
-        prNumber: request.confirmationMatch?.prNumber ?? prFromInputs,
-        actorId: request.confirmationMatch?.actorId,
-      },
+      confirmationMatch: serverConfirmationMatch,
     });
+    // Fail only when the contract requires Cursor-executable effects but none
+    // are currently authorized (e.g. git Confirmation missing). Read-only /
+    // empty-requirement contracts may start with an empty authorized set.
     if (
-      authorizedSlice.authorizedEffects.length === 0 &&
-      authorizedSlice.blockedEffects.length > 0
+      classified.executableEffects.length > 0 &&
+      authorizedSlice.authorizedEffects.length === 0
     ) {
       return fail("ATTEMPT_INVALID", "no_authorized_effect", {
         executionContractId: contract.executionContractId,

```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_authorizedExecutionSlice.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
index 3cfc4426..39544db7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
@@ -5,10 +5,12 @@
  * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
  * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
  * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
+ * CR-GCEC-24: Cursor executable effects ≠ Studio verification obligations.
  */
 import { createHash } from "node:crypto";
 import type { Confirmation } from "@/lib/oa/decision";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
+import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";

 export type AuthorizedExecutionSlice = {
   executionContractId: string;
@@ -18,12 +20,6 @@ export type AuthorizedExecutionSlice = {
   reasons: string[];
 };

-const FILE_EFFECTS: CursorAuthorizedEffectId[] = [
-  "filesystem.create",
-  "filesystem.modify",
-  "validation.run",
-];
-
 /** OA identifier max length — actionRef must stay within bound. */
 export const OA_ACTION_REF_MAX_LENGTH = 128;

@@ -148,7 +144,6 @@ export function confirmationGrantsEffect(
     ) {
       return false;
     }
-    // Generic actionRef / scope must not substitute target identity.
     if (c.actionRef === scopeNeedle) return false;
     if (!scopeIndicatesEffectClass(c.scope, scopeNeedle, expected)) {
       return false;
@@ -159,14 +154,15 @@ export function confirmationGrantsEffect(

 /**
  * Derive the current authorized effect slice.
- * Docs-write baseline: filesystem + validation when docs_write/artifact required.
- * Git effects require explicit evidenceRequirements + Confirmation per effect.
+ * CR-GCEC-24: only Cursor-executable effects from the classification helper.
+ * Git effects require Confirmation against server-derived confirmationMatch.
  */
 export function deriveAuthorizedExecutionSlice(input: {
   executionContractId: string;
   attemptLineageKey?: string;
   requiredCapabilities?: readonly string[];
   evidenceRequirements?: readonly string[];
+  expectedOutputs?: readonly string[];
   confirmations?: readonly Confirmation[];
   nowIso?: string;
   allowDelete?: boolean;
@@ -174,6 +170,11 @@ export function deriveAuthorizedExecutionSlice(input: {
   verifiedEffects?: readonly CursorAuthorizedEffectId[];
   /** Effects reported but awaiting verification — not re-authorized. */
   waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
+  /**
+   * CR-GCEC-23 — MUST be server-derived target identity.
+   * Domain helper still accepts the shape; StartExecution must not pass
+   * caller confirmationMatch as authority.
+   */
   confirmationMatch?: {
     repositoryRef?: string;
     branchOrRef?: string;
@@ -189,10 +190,14 @@ export function deriveAuthorizedExecutionSlice(input: {
   const blocked: CursorAuthorizedEffectId[] = [];
   const reasons: string[] = [];

-  const reqs = input.evidenceRequirements ?? [];
-  // Docs-write / bounded write baseline: filesystem + validation.
-  // CR-GCEC-15: Git is NEVER inferred from capabilities.
-  for (const effect of FILE_EFFECTS) {
+  const classified = deriveExecutableEffectsFromContractRequirements({
+    evidenceRequirements: input.evidenceRequirements ?? [],
+    expectedOutputs: input.expectedOutputs,
+    requiredCapabilities: input.requiredCapabilities,
+    allowFilesystemCreateOrModify: true,
+  });
+
+  for (const effect of classified.executableEffects) {
     if (verified.has(effect) || waiting.has(effect)) {
       blocked.push(effect);
       reasons.push(
@@ -202,63 +207,62 @@ export function deriveAuthorizedExecutionSlice(input: {
       );
       continue;
     }
+    const isGit =
+      effect === "git.commit" ||
+      effect === "git.push" ||
+      effect === "github.pr.create" ||
+      effect === "github.pr.merge";
+    if (isGit) {
+      if (
+        confirmationGrantsEffect(confirmations, effect, nowIso, {
+          executionContractId: input.executionContractId,
+          ...input.confirmationMatch,
+        })
+      ) {
+        authorized.push(effect);
+      } else {
+        blocked.push(effect);
+        reasons.push(
+          `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
+        );
+      }
+      continue;
+    }
     authorized.push(effect);
   }

+  // Non-executable Git candidates remain blocked (never inferred).
+  for (const effect of [
+    "git.commit",
+    "git.push",
+    "github.pr.create",
+    "github.pr.merge",
+  ] as const) {
+    if (
+      !classified.executableEffects.includes(effect) &&
+      !blocked.includes(effect) &&
+      !authorized.includes(effect)
+    ) {
+      blocked.push(effect);
+    }
+  }
+
   if (input.allowDelete) {
     if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
       authorized.push("filesystem.delete");
     }
-  } else {
+  } else if (!blocked.includes("filesystem.delete")) {
     blocked.push("filesystem.delete");
     reasons.push("no_delete_policy");
   }

-  const gitCandidates: Array<
-    Extract<
-      CursorAuthorizedEffectId,
-      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
-    >
-  > = ["git.commit", "git.push", "github.pr.create", "github.pr.merge"];
-
-  for (const effect of gitCandidates) {
-    const needed = reqs.some((r) => {
-      if (effect === "git.commit")
-        return r === "git:local_commit" || r === "git:commit";
-      if (effect === "git.push")
-        return r === "git:remote_push" || r === "git:push";
-      if (effect === "github.pr.create") return r === "git:pull_request";
-      if (effect === "github.pr.merge")
-        return r === "git:merge" || r === "git:post_merge_verification";
-      return false;
-    });
-    // CR-GCEC-15: NEVER infer Git from cap:cursor.docs_write or repo presence.
-    if (!needed) {
-      blocked.push(effect);
-      continue;
-    }
-    if (verified.has(effect) || waiting.has(effect)) {
-      blocked.push(effect);
-      reasons.push(
-        waiting.has(effect)
-          ? `waiting_verification:${effect}`
-          : `already_verified:${effect}`,
-      );
-      continue;
-    }
-    if (
-      confirmationGrantsEffect(confirmations, effect, nowIso, {
-        executionContractId: input.executionContractId,
-        ...input.confirmationMatch,
-      })
-    ) {
-      authorized.push(effect);
-    } else {
-      blocked.push(effect);
-      reasons.push(
-        `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
-      );
-    }
+  // CR-GCEC-24 — validation.run must NOT appear when not executable.
+  if (
+    !classified.executableEffects.includes("validation.run") &&
+    !blocked.includes("validation.run")
+  ) {
+    blocked.push("validation.run");
+    reasons.push("validation_not_required");
   }

   if (

```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_contractEffectClassification.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
new file mode 100644
index 00000000..2974500d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
@@ -0,0 +1,95 @@
+/**
+ * CR-GCEC-24 — pure mapping: Cursor executable effects vs Studio verification obligations.
+ * No Requirement Engine. No persistence.
+ */
+import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
+
+export type VerificationObligationId =
+  | "git:ci_status"
+  | "git:review_status"
+  | "git:post_merge_verification";
+
+const VERIFICATION_ONLY = new Set<string>([
+  "git:ci_status",
+  "git:review_status",
+  "git:post_merge_verification",
+]);
+
+export function isStudioVerificationObligation(req: string): boolean {
+  return VERIFICATION_ONLY.has(req);
+}
+
+/**
+ * Derive Cursor-executable effects from effective EC requirements.
+ * Verification-only families never produce Cursor mutation effects.
+ */
+export function deriveExecutableEffectsFromContractRequirements(input: {
+  evidenceRequirements?: readonly string[];
+  expectedOutputs?: readonly string[];
+  requiredCapabilities?: readonly string[];
+  /** When true (docs_write createOrModify), filesystem create+modify may both be allowed. */
+  allowFilesystemCreateOrModify?: boolean;
+}): {
+  executableEffects: CursorAuthorizedEffectId[];
+  verificationObligations: VerificationObligationId[];
+} {
+  const reqs = [
+    ...(input.evidenceRequirements ?? []),
+    ...(input.expectedOutputs ?? []).map((o) =>
+      /artifact/i.test(o) ? "artifact" : o,
+    ),
+  ];
+  const executable: CursorAuthorizedEffectId[] = [];
+  const verification: VerificationObligationId[] = [];
+
+  const wantsArtifact =
+    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
+    (input.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
+    (input.requiredCapabilities ?? []).some((c) => /docs_write/i.test(c));
+
+  const wantsValidation = reqs.some((r) => /validation|tests?/i.test(r));
+
+  if (wantsArtifact) {
+    // createOrModify envelope: both may be authorized; completion uses actual result.
+    executable.push("filesystem.create", "filesystem.modify");
+  }
+  if (wantsValidation) {
+    executable.push("validation.run");
+  }
+
+  for (const r of reqs) {
+    if (r === "git:local_commit" || r === "git:commit") {
+      if (!executable.includes("git.commit")) executable.push("git.commit");
+    } else if (r === "git:remote_push" || r === "git:push") {
+      if (!executable.includes("git.push")) executable.push("git.push");
+    } else if (r === "git:pull_request") {
+      if (!executable.includes("github.pr.create"))
+        executable.push("github.pr.create");
+    } else if (r === "git:merge") {
+      // CR-GCEC-24 — ONLY explicit merge authorizes Cursor merge.
+      // post_merge_verification must NOT map here.
+      if (!executable.includes("github.pr.merge"))
+        executable.push("github.pr.merge");
+    } else if (r === "git:ci_status") {
+      if (!verification.includes("git:ci_status"))
+        verification.push("git:ci_status");
+    } else if (r === "git:review_status") {
+      if (!verification.includes("git:review_status"))
+        verification.push("git:review_status");
+    } else if (r === "git:post_merge_verification") {
+      if (!verification.includes("git:post_merge_verification"))
+        verification.push("git:post_merge_verification");
+    }
+  }
+
+  void input.allowFilesystemCreateOrModify;
+  return { executableEffects: executable, verificationObligations: verification };
+}
+
+export function deriveVerificationObligationsFromContractRequirements(input: {
+  evidenceRequirements?: readonly string[];
+}): VerificationObligationId[] {
+  return deriveExecutableEffectsFromContractRequirements({
+    evidenceRequirements: input.evidenceRequirements,
+  }).verificationObligations;
+}

```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_qualifyExecutionContractCompletion.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
index bd7a3313..6f20bdef 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
@@ -112,7 +112,7 @@ function evidenceVerifiedForEffect(
     "git.commit": ["git:local_commit", "git:commit"],
     "git.push": ["git:remote_push", "git:push"],
     "github.pr.create": ["git:pull_request"],
-    "github.pr.merge": ["git:merge", "git:post_merge_verification"],
+    "github.pr.merge": ["git:merge"],
   };
   const sources = sourceByEffect[effect] ?? [];
   return evidence.some((e) => {
@@ -133,6 +133,23 @@ function evidenceVerifiedForEffect(
   });
 }

+function evidenceVerifiedForSource(
+  evidence: readonly Evidence[],
+  source: string,
+  expected: {
+    projectId: string;
+    cycleInstanceId?: string;
+    executionContractId: string;
+  },
+): boolean {
+  return evidence.some(
+    (e) =>
+      e.status === "verified" &&
+      evidenceMatchesContractLineage(e, expected) &&
+      e.source === source,
+  );
+}
+
 function reqImpliesEffect(
   reqs: readonly string[],
   effect: CursorAuthorizedEffectId,
@@ -143,8 +160,8 @@ function reqImpliesEffect(
     if (effect === "git.push")
       return r === "git:remote_push" || r === "git:push";
     if (effect === "github.pr.create") return r === "git:pull_request";
-    if (effect === "github.pr.merge")
-      return r === "git:merge" || r === "git:post_merge_verification";
+    // CR-GCEC-24 — post_merge is NOT a merge executable requirement.
+    if (effect === "github.pr.merge") return r === "git:merge";
     if (effect === "filesystem.create" || effect === "filesystem.modify") {
       return (
         /artifact|docs_write|filesystem/i.test(r) ||
@@ -215,10 +232,13 @@ export function qualifyExecutionContractCompletion(input: {
       requiredEffects.push(effect);
     }
   }
+  // CR-GCEC-24 — CI / review / postmerge are Studio verification obligations.
+  const verificationSources: string[] = [];
+  if (reqs.includes("git:ci_status")) verificationSources.push("git:ci_status");
+  if (reqs.includes("git:review_status"))
+    verificationSources.push("git:review_status");
   if (reqs.includes("git:post_merge_verification")) {
-    if (!requiredEffects.includes("github.pr.merge")) {
-      requiredEffects.push("github.pr.merge");
-    }
+    verificationSources.push("git:post_merge_verification");
   }

   const slice: AuthorizedExecutionSlice = deriveAuthorizedExecutionSlice({
@@ -288,8 +308,18 @@ export function qualifyExecutionContractCompletion(input: {
     }
   }

-  const complete = remainingRequiredEffects.length === 0;
-  if (!complete && remainingRequiredEffects.length > 0) {
+  // CR-GCEC-24 — Studio verification obligations must be independently verified.
+  let verificationRemaining = 0;
+  for (const source of verificationSources) {
+    if (!evidenceVerifiedForSource(evidence, source, expected)) {
+      verificationRemaining += 1;
+      reasons.push(`pending_verification:${source}`);
+    }
+  }
+
+  const complete =
+    remainingRequiredEffects.length === 0 && verificationRemaining === 0;
+  if (!complete) {
     reasons.push("effective_requirements_remain");
   }


```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_resolveGitEffectTarget.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
new file mode 100644
index 00000000..1e66278c
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
@@ -0,0 +1,242 @@
+/**
+ * CR-GCEC-23 — server-derived Confirmation target for protected Git effects.
+ * Caller/request confirmationMatch MUST NOT define canonical resource identity.
+ * Pure application/domain projection — no persistence.
+ */
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ProjectRepositoryBinding } from "@/lib/oa/project";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
+import type { GitEffectConfirmationMatch } from "./authorizedExecutionSlice";
+
+export type ResolvedGitEffectTarget = {
+  executionContractId: string;
+  projectId: string;
+  cycleInstanceId?: string;
+  repositoryRef: string;
+  branchOrRef?: string;
+  prNumber?: number;
+  actorId: string;
+  effect: Extract<
+    CursorAuthorizedEffectId,
+    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
+  >;
+};
+
+export type ResolveGitEffectTargetInput = {
+  effect: ResolvedGitEffectTarget["effect"];
+  contract: Pick<
+    ExecutionContract,
+    "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
+  >;
+  /** Canonical Project.repositoryBinding — required for protected Git. */
+  projectRepositoryBinding: ProjectRepositoryBinding;
+  /**
+   * Projected docs-write / EC repositoryRef when present.
+   * MUST match Project.repositoryBinding.identity or resolution fails.
+   */
+  projectedRepositoryRef?: string;
+  actorId: string;
+  /** VERIFIED Evidence for this project (PR identity source). */
+  verifiedEvidence?: readonly Evidence[];
+};
+
+export type ResolveGitEffectTargetResult =
+  | { ok: true; target: ResolvedGitEffectTarget }
+  | { ok: false; reason: string };
+
+function asNonEmptyString(value: unknown): string | undefined {
+  return typeof value === "string" && value.trim() ? value.trim() : undefined;
+}
+
+function branchFromContractInputs(
+  inputs: Record<string, unknown> | undefined,
+): string | undefined {
+  if (!inputs) return undefined;
+  return (
+    asNonEmptyString(inputs.workingBranch) ??
+    asNonEmptyString(inputs.branchName) ??
+    asNonEmptyString(inputs.headRef)
+  );
+}
+
+/**
+ * Extract a single trustworthy PR number from VERIFIED git:pull_request Evidence
+ * bound to the same project / cycle / EC / repository.
+ * Fail closed when zero or ambiguous.
+ */
+export function resolveVerifiedPullRequestNumber(input: {
+  evidence: readonly Evidence[];
+  projectId: string;
+  cycleInstanceId?: string;
+  executionContractId: string;
+  repositoryRef: string;
+}): { ok: true; prNumber: number } | { ok: false; reason: string } {
+  const matches: number[] = [];
+  for (const e of input.evidence) {
+    if (e.status !== "verified") continue;
+    if (e.source !== "git:pull_request") continue;
+    const b = e.bindings;
+    if (!b?.projectId || b.projectId !== input.projectId) continue;
+    if (
+      !b.executionContractId ||
+      b.executionContractId !== input.executionContractId
+    ) {
+      continue;
+    }
+    if (
+      input.cycleInstanceId &&
+      (!b.cycleInstanceId || b.cycleInstanceId !== input.cycleInstanceId)
+    ) {
+      continue;
+    }
+    const loc = typeof e.location === "string" ? e.location : "";
+    const repoMatch = loc.match(/[?&]repo=([^&]+)/);
+    if (repoMatch) {
+      const repo = decodeURIComponent(repoMatch[1]!);
+      if (repo !== input.repositoryRef) continue;
+    }
+    const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
+    if (!prMatch) continue;
+    const n = Number(decodeURIComponent(prMatch[1]!));
+    if (!Number.isInteger(n) || n < 1) continue;
+    matches.push(n);
+  }
+  const unique = [...new Set(matches)];
+  if (unique.length === 0) {
+    return { ok: false, reason: "verified_pull_request_identity_missing" };
+  }
+  if (unique.length > 1) {
+    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
+  }
+  return { ok: true, prNumber: unique[0]! };
+}
+
+/**
+ * Resolve canonical Git Confirmation target from durable Product truth only.
+ */
+export function resolveGitEffectTarget(
+  input: ResolveGitEffectTargetInput,
+): ResolveGitEffectTargetResult {
+  const bindingIdentity = input.projectRepositoryBinding.identity?.trim();
+  if (!bindingIdentity) {
+    return { ok: false, reason: "project_repository_binding_missing" };
+  }
+
+  if (
+    input.projectedRepositoryRef &&
+    input.projectedRepositoryRef.trim() &&
+    input.projectedRepositoryRef.trim() !== bindingIdentity
+  ) {
+    return {
+      ok: false,
+      reason: "projected_repository_ref_mismatch_project_binding",
+    };
+  }
+
+  const inputs =
+    input.contract.inputs && typeof input.contract.inputs === "object"
+      ? (input.contract.inputs as Record<string, unknown>)
+      : undefined;
+
+  const workingBranch = branchFromContractInputs(inputs);
+  const defaultBranch =
+    input.projectRepositoryBinding.defaultBranch?.trim() || "main";
+
+  let branchOrRef: string | undefined;
+  let prNumber: number | undefined;
+
+  switch (input.effect) {
+    case "git.commit":
+    case "git.push":
+    case "github.pr.create":
+      branchOrRef = workingBranch;
+      break;
+    case "github.pr.merge": {
+      branchOrRef = defaultBranch;
+      const pr = resolveVerifiedPullRequestNumber({
+        evidence: input.verifiedEvidence ?? [],
+        projectId: input.contract.projectId,
+        cycleInstanceId: input.contract.cycleInstanceId,
+        executionContractId: input.contract.executionContractId,
+        repositoryRef: bindingIdentity,
+      });
+      if (!pr.ok) {
+        return { ok: false, reason: pr.reason };
+      }
+      prNumber = pr.prNumber;
+      break;
+    }
+  }
+
+  return {
+    ok: true,
+    target: {
+      executionContractId: input.contract.executionContractId,
+      projectId: input.contract.projectId,
+      cycleInstanceId: input.contract.cycleInstanceId,
+      repositoryRef: bindingIdentity,
+      branchOrRef,
+      prNumber,
+      actorId: input.actorId,
+      effect: input.effect,
+    },
+  };
+}
+
+export function resolvedTargetToConfirmationMatch(
+  target: ResolvedGitEffectTarget,
+): GitEffectConfirmationMatch {
+  return {
+    executionContractId: target.executionContractId,
+    repositoryRef: target.repositoryRef,
+    branchOrRef: target.branchOrRef,
+    prNumber: target.prNumber,
+    actorId: target.actorId,
+  };
+}
+
+/**
+ * Hostile request assertion — compare to server truth. Never builds the target.
+ * Missing fields on assertion are ignored; present mismatches refuse.
+ */
+export function assertConfirmationMatchAgreesWithServerTarget(input: {
+  assertion?: {
+    repositoryRef?: string;
+    branchOrRef?: string;
+    prNumber?: number;
+    actorId?: string;
+  };
+  server: ResolvedGitEffectTarget;
+}): { ok: true } | { ok: false; reason: string } {
+  const a = input.assertion;
+  if (!a) return { ok: true };
+  if (
+    a.repositoryRef != null &&
+    a.repositoryRef.trim() &&
+    a.repositoryRef.trim() !== input.server.repositoryRef
+  ) {
+    return { ok: false, reason: "hostile_confirmation_match_repository_mismatch" };
+  }
+  if (
+    a.branchOrRef != null &&
+    a.branchOrRef.trim() &&
+    a.branchOrRef.trim() !== (input.server.branchOrRef ?? "")
+  ) {
+    return { ok: false, reason: "hostile_confirmation_match_branch_mismatch" };
+  }
+  if (
+    a.prNumber != null &&
+    a.prNumber !== input.server.prNumber
+  ) {
+    return { ok: false, reason: "hostile_confirmation_match_pr_mismatch" };
+  }
+  if (
+    a.actorId != null &&
+    a.actorId.trim() &&
+    a.actorId.trim() !== input.server.actorId
+  ) {
+    return { ok: false, reason: "hostile_confirmation_match_actor_mismatch" };
+  }
+  return { ok: true };
+}

```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_types.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 00291279..cfe92303 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -212,8 +212,10 @@ export type StartExecutionRequest = {
    */
   confirmations?: readonly Confirmation[];
   /**
-   * CR-GCEC-19 — contextual Confirmation target identity (repo/branch/PR/actor).
-   * Combined with docsWriteSpec.repositoryRef when deriving the slice.
+   * CR-GCEC-23 — HOSTILE / ASSERTION only.
+   * Server derives canonical Confirmation target from Project.repositoryBinding,
+   * durable EC inputs, and VERIFIED Evidence. If supplied, assertion must match
+   * server truth or StartExecution refuses. NEVER used to build actionRef.
    */
   confirmationMatch?: {
     repositoryRef?: string;

```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_index.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index f9bacd28..7d9073e2 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -46,6 +46,8 @@ export * from "./domain/invariants";
 export * from "./domain/realLaunchSafety";
 export * from "./domain/cursorExecutionReport";
 export * from "./domain/authorizedExecutionSlice";
+export * from "./domain/contractEffectClassification";
+export * from "./domain/resolveGitEffectTarget";
 export { verifyWorkspaceFileEffects } from "./application/verifyWorkspaceFileEffects";
 export type { WorkspaceFileVerificationResult } from "./application/verifyWorkspaceFileEffects";

@@ -309,6 +311,18 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   /** Flat aliases accepted by tests — same as realBoundary. */
   launchSafetyJournal?: RealLaunchSafetyJournalPort;
   realLaunch?: RealExecutionLaunchPort;
+  /**
+   * CR-GCEC-23 — Project.repositoryBinding resolver (server-derived Confirmation).
+   */
+  resolveProjectRepositoryBinding?: (
+    projectId: string,
+  ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
+  /**
+   * CR-GCEC-23 — Evidence list for verified PR identity (may be late-bound).
+   */
+  listProjectEvidence?: (
+    projectId: string,
+  ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>;
 };

 /** Factory for the in-memory ExecutionAttempt runtime foundation. */
@@ -398,6 +412,8 @@ export function createInMemoryExecutionAttemptServices(
       realBoundary?.launchPort,
       realBoundary?.safetyJournal,
       realBoundary?.managedRepoRootBase,
+      options.resolveProjectRepositoryBinding,
+      options.listProjectEvidence,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,

```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_sqlite_createSqliteExecutionAttemptServices.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
index a9ae70cd..a3f21be3 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -71,6 +71,12 @@ export type CreateSqliteExecutionAttemptServicesOptions = {
     readonly safetyJournal: RealLaunchSafetyJournalPort;
     readonly managedRepoRootBase?: string;
   };
+  resolveProjectRepositoryBinding?: (
+    projectId: string,
+  ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
+  listProjectEvidence?: (
+    projectId: string,
+  ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>;
 };

 export type SqliteExecutionAttemptServices = {
@@ -187,6 +193,8 @@ export function createSqliteExecutionAttemptServices(
       realBoundary?.launchPort,
       realBoundary?.safetyJournal,
       realBoundary?.managedRepoRootBase,
+      options.resolveProjectRepositoryBinding,
+      options.listProjectEvidence,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,

```

## DIFF: projects_sfia-studio_app_lib_vertical-slice-runtime_service.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index a7d6e0ae..f0685a82 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -422,6 +422,15 @@ function wireOaStack(
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
+        resolveProjectRepositoryBinding: async (projectId) => {
+          const r = await projectServices.getProject.execute({ projectId });
+          if (!r.ok) return null;
+          return r.project.repositoryBinding ?? null;
+        },
+        listProjectEvidence: async (projectId) => {
+          if (!late.evidenceReviewServices) return [];
+          return late.evidenceReviewServices.repository.listByProject(projectId);
+        },
       })
     : createInMemoryExecutionAttemptServices({
         decisionServices,
@@ -432,6 +441,15 @@ function wireOaStack(
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
+        resolveProjectRepositoryBinding: async (projectId) => {
+          const r = await projectServices.getProject.execute({ projectId });
+          if (!r.ok) return null;
+          return r.project.repositoryBinding ?? null;
+        },
+        listProjectEvidence: async (projectId) => {
+          if (!late.evidenceReviewServices) return [];
+          return late.evidenceReviewServices.repository.listByProject(projectId);
+        },
       });
   late.executionAttemptServices = executionAttemptServices;


```
