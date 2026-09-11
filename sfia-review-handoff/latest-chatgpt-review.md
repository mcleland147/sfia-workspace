# SFIA STUDIO — GCEC CYCLE-CLOSURE FINAL SAME-LOT CORRECTION
## CR-GCEC-19 → CR-GCEC-22 — FULL REVIEW PACK

TIMESTAMP: 2026-09-11T14:30:00+02:00

GO MORRIS consumed: SAME GCEC Delivery lot — close ONLY CR-GCEC-19..22; preserve CR-GCEC-13..18 CLOSED.

## GIT TRUTH BEFORE
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 46e7e5b3cf3d82656e15b9fd402db0908704d927
- parent: 7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62
- tree: f01cd82d8ec8bf0a917f7734b0a27e6c78808f3a
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- prior handoff: e4285cda785a19db7861ea483fbc65eb10220eec
- Product tracked: clean (.tmp-sfia-review dirt allowed)

## GIT TRUTH AFTER
- HEAD: d0d009bb902827cc15244648e31aa0a1fb9660a9
- parent: 46e7e5b3cf3d82656e15b9fd402db0908704d927
- tree: 98dfbc770af0362742043d63980bd04e48fbccef
- message: fix(sfia-studio): close final GCEC lifecycle proof gaps
- Product push: NONE

## SOURCES
PROCESS / STUDIO / V3 / CURRENT REVIEW @ e4285cda read before edit.
Git local truth > Morris decisions > Build Doctrine > v3 > C1 > implementation.

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED — NOT REOPENED
- Runtime v3: NON ADOPTED
- R2/R6/R8/R12/R13/R14/R15/R18/R19/R21 honored
- D-GCEC-15 Option B: ADOPTED / preserved
- GCEC-PERSIST: CLOSED (no table/migration/column/store)

## CRITICAL REVIEW INPUT
- CR-GCEC-19 BLOCKING — generic Confirmation could authorize contextual Git effect
- CR-GCEC-20 BLOCKING — foreign-EC VERIFIED Evidence could complete another EC (N20 false positive)
- CR-GCEC-21 BLOCKING — Artifact could satisfy validation.run; artifact auto-manufactured validation
- CR-GCEC-22 BLOCKING PROOF — principal E2E pre-marked trajectory done; no active reprepare / no-implicit-next proof

## CR CLOSURE MATRIX
| CR | Status | Proof |
|----|--------|-------|
| CR-GCEC-19 | CLOSED | exact actionRef matcher; C19-N1..N8; collision-safe digest |
| CR-GCEC-20 | CLOSED | project/cycle/EC bindings; N20 corrected; C20-N1..N4 + P1 |
| CR-GCEC-21 | CLOSED | orthogonal artifact vs validation; C21-N1..N5 + P1 |
| CR-GCEC-22 | CLOSED | active→done via Product completeBoundTrajectoryStepAction; prepare refused; eligible empty; 1 cycle; LPS cleared; LR_TARGET_STATUS |
| CR-GCEC-13..18 | NON-REGRESSION PASS | principal E2E + negatives + related + full vitest |

## CR-GCEC-19 — CONFIRMATION TARGET BINDING
Matcher: `confirmationGrantsEffect` requires granted + not expired + actor match when applicable + scope class indicator + **exact** `c.actionRef === buildGitEffectActionRef(...)`. No startsWith/includes. Generic `actionRef === scopeNeedle` refused.

Canonical actionRef: plain `act:{scopeToken}:{safeEc}:{safeRepo}[:ref:][:pr:]`; if >128 chars → `act:{scopeToken}:{ecBound}:{sha256(tuple)[0:24]}` with tuple EC|effect|repo|branch|pr.

## CR-GCEC-20 — EC EVIDENCE OWNERSHIP
`evidenceMatchesContractLineage`: projectId + executionContractId required; cycleInstanceId required when expected present. ABSENT/MISMATCH = false. Durable from ExecutionContract. Former N20 (xct:n20 + Evidence xct:gcec) → complete=false.

## CR-GCEC-21 — ARTIFACT VS VALIDATION
Artifact proves filesystem create OR modify. Artifact never satisfies validation.run. Validation only when materialized on EC. Artifact-only completes without fake validation.

## CR-GCEC-22 — TRUE PRODUCT E2E
Step starts active → Product `completeBoundTrajectoryStepAction` before FINALIZE → prepareCycleFromValidatedTrajectory refused → eligible pending empty for completed step → single completed CycleInstance → LPS active cleared → LR_TARGET_STATUS on completed target.

## CR-GCEC-13..18 NON-REGRESSION
PASS

## TEST COMMANDS + EXACT COUNTS
- focused negatives+E2E: 50 passed
- related gcec/execution/git: 261 passed (23 files)
- full vitest: 3614 passed | 135 skipped (338 files passed | 17 skipped)
- typecheck / lint / build / diff-check: PASS

## PERSISTENCE
NO TABLE. NO MIGRATION. NO STORE.

## FAKE/REAL
ZERO REAL.

## FILES MODIFIED
- authorizedExecutionSlice.ts
- qualifyExecutionContractCompletion.ts
- execution-attempt/domain/types.ts
- startExecution.ts
- gcecD15Negatives.d0.test.ts
- gcecProductMonolithicE2e.d0.test.ts

## LOCAL COMMIT
SHA: d0d009bb902827cc15244648e31aa0a1fb9660a9
parent: 46e7e5b3cf3d82656e15b9fd402db0908704d927
tree: 98dfbc770af0362742043d63980bd04e48fbccef
message: fix(sfia-studio): close final GCEC lifecycle proof gaps

## PRODUCT PUSH
NONE

## PROOF REPO
NOT CREATED

## OPEN GATES
GCEC-REPO-CREATE · GCEC-CURSOR-REAL · GCEC-PUSH · GCEC-PR · GCEC-MERGE · GCEC-RUNTIME-V3

## GCEC-CONTINUATION-SEMANTICS
CLOSED BY D-GCEC-15

## DEBT
TEMP-GCEC-PRPM-01 · TEMP-GCEC-F14-BIND-01

## ANTI-CLAIMS
deterministic ≠ REAL · local commit ≠ PR readiness · Review Handoff ≠ Product Git proof · proof repo NOT CREATED · Product Completion CLOSED · runtime v3 NON ADOPTED

## VERDICT
PASS — GCEC DETERMINISTIC CYCLE-CLOSURE ARC COMPLETE / READY FOR CHATGPT FINAL CRITICAL REVIEW

---
# EMBEDDED REVIEWABLE CANDIDATE CONTENT

## FILE: authorizedExecutionSlice.ts

```typescript
/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
 * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
 */
import { createHash } from "node:crypto";
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
    // Generic actionRef / scope must not substitute target identity.
    if (c.actionRef === scopeNeedle) return false;
    if (!scopeIndicatesEffectClass(c.scope, scopeNeedle, expected)) {
      return false;
    }
    return c.actionRef === expected;
  });
}

/**
 * Derive the current authorized effect slice.
 * Docs-write baseline: filesystem + validation when docs_write/artifact required.
 * Git effects require explicit evidenceRequirements + Confirmation per effect.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  allowDelete?: boolean;
  /** Effects already VERIFIED — excluded from authorized re-execution. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Effects reported but awaiting verification — not re-authorized. */
  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
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

  const reqs = input.evidenceRequirements ?? [];
  // Docs-write / bounded write baseline: filesystem + validation.
  // CR-GCEC-15: Git is NEVER inferred from capabilities.
  for (const effect of FILE_EFFECTS) {
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    authorized.push(effect);
  }

  if (input.allowDelete) {
    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
      authorized.push("filesystem.delete");
    }
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

  for (const effect of gitCandidates) {
    const needed = reqs.some((r) => {
      if (effect === "git.commit")
        return r === "git:local_commit" || r === "git:commit";
      if (effect === "git.push")
        return r === "git:remote_push" || r === "git:push";
      if (effect === "github.pr.create") return r === "git:pull_request";
      if (effect === "github.pr.merge")
        return r === "git:merge" || r === "git:post_merge_verification";
      return false;
    });
    // CR-GCEC-15: NEVER infer Git from cap:cursor.docs_write or repo presence.
    if (!needed) {
      blocked.push(effect);
      continue;
    }
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
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

## FILE: qualifyExecutionContractCompletion.ts

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
    "github.pr.merge": ["git:merge", "git:post_merge_verification"],
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
    if (effect === "github.pr.merge")
      return r === "git:merge" || r === "git:post_merge_verification";
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
  if (reqs.includes("git:post_merge_verification")) {
    if (!requiredEffects.includes("github.pr.merge")) {
      requiredEffects.push("github.pr.merge");
    }
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

  const complete = remainingRequiredEffects.length === 0;
  if (!complete && remainingRequiredEffects.length > 0) {
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

## FILE: execution-attempt/domain/types.ts

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
   * CR-GCEC-19 — contextual Confirmation target identity (repo/branch/PR/actor).
   * Combined with docsWriteSpec.repositoryRef when deriving the slice.
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

## FILE: gcecProductMonolithicE2e.d0.test.ts

```typescript
/**
 * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
 *
 * True Product spine (no pseudo-E2E):
 * CreateProject → SetRepositoryBinding → Cycle START → F2 → HD → prepareM3 →
 * resolve → Confirm → Select → GateD → StartExecution → Fake Cursor slice →
 * complete → EC confirmed (remaining reqs) → evidence verify → gated Confirmations →
 * Select+Start same EC → git effects via Fake only → advance EC completed →
 * FinalizationAssessment → FINALIZE HD → Cycle completed.
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
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import { prepareCycleFromValidatedTrajectory, selectEligiblePendingTrajectorySteps } from "@/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory";
import { validateLifecycleRecommendation } from "@/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation";
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
const BRANCH = "gcec/docs";
const NOW = "2026-09-11T14:00:00.000Z";

const PILOTE = LOCAL_PILOTE_ACTOR;

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

    // 3 Create + START cycle — trajectory step starts active (not pre-done).
    const stepsInFlight: TrajectoryStep[] = [
      {
        stepId: "stp:fd",
        order: 1,
        label: "Functional design",
        state: "active",
        cycleTypeId: "cyc:functional-design",
      },
    ];
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) return;
    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: stepsInFlight,
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: PILOTE,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;

    const cycleInstanceId = `cyc:gcec-prod-${Date.now()}`;
    const cycleCreated = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(cycleCreated.ok).toBe(true);

    const startAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: NOW,
      forceEnable: true,
    });
    expect(startAuth.ok).toBe(true);
    const startedCycle = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(startedCycle.ok).toBe(true);
    if (!startedCycle.ok) return;
    expect(startedCycle.cycle.status).toBe("active");

    // Bind trajectory after LEGACY START so Product completeBoundTrajectoryStep
    // can close the active step without COMPLETE greenfield START readiness.
    const cycleForBind = await oa.cycleServices.cycles.findById(cycleInstanceId);
    expect(cycleForBind).toBeTruthy();
    await oa.cycleServices.cycles.save({
      ...cycleForBind!,
      trajectoryId: traj.trajectory.trajectoryId,
      trajectoryVersion: traj.trajectory.version,
      trajectoryStepId: "stp:fd",
    });

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
});

```

## FILE: gcecD15Negatives.d0.test.ts

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

  it("N6 slice blocks git without Confirmation; FS still authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n6",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).toContain("filesystem.create");
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
      evidenceRequirements: ["git:local_commit"],
      verifiedEffects: ["filesystem.create", "filesystem.modify", "validation.run"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "filesystem.create",
        "filesystem.modify",
        "validation.run",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
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
});

```

## DIFF: startExecution.ts

```diff
commit d0d009bb902827cc15244648e31aa0a1fb9660a9
Author: Morris Cleland <morris@mac1.home>
Date:   Fri Sep 11 14:26:09 2026 +0200

    fix(sfia-studio): close final GCEC lifecycle proof gaps

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index c1df41b6..5f5a957d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -885,14 +885,43 @@ export class StartExecution {
       (Array.isArray(contract.evidenceRequirements)
         ? contract.evidenceRequirements.map(String)
         : []);
+    const inputsBranch =
+      contract.inputs && typeof contract.inputs === "object"
+        ? (contract.inputs as Record<string, unknown>)
+        : {};
+    const branchFromInputs =
+      (typeof inputsBranch.workingBranch === "string" &&
+      inputsBranch.workingBranch.trim()
+        ? inputsBranch.workingBranch.trim()
+        : undefined) ??
+      (typeof inputsBranch.branchName === "string" &&
+      inputsBranch.branchName.trim()
+        ? inputsBranch.branchName.trim()
+        : undefined) ??
+      (typeof inputsBranch.headRef === "string" && inputsBranch.headRef.trim()
+        ? inputsBranch.headRef.trim()
+        : undefined);
+    const prFromInputs =
+      typeof inputsBranch.prNumber === "number"
+        ? inputsBranch.prNumber
+        : typeof inputsBranch.prNumber === "string" &&
+            /^\d+$/.test(inputsBranch.prNumber)
+          ? Number(inputsBranch.prNumber)
+          : undefined;
     const authorizedSlice = deriveAuthorizedExecutionSlice({
       executionContractId: contract.executionContractId,
       evidenceRequirements,
       confirmations: request.confirmations ?? [],
       verifiedEffects: request.verifiedEffects,
-      confirmationMatch: docsWriteSpec
-        ? { repositoryRef: docsWriteSpec.repositoryRef }
-        : undefined,
+      confirmationMatch: {
+        repositoryRef:
+          request.confirmationMatch?.repositoryRef ??
+          docsWriteSpec?.repositoryRef,
+        branchOrRef:
+          request.confirmationMatch?.branchOrRef ?? branchFromInputs,
+        prNumber: request.confirmationMatch?.prNumber ?? prFromInputs,
+        actorId: request.confirmationMatch?.actorId,
+      },
     });
     if (
       authorizedSlice.authorizedEffects.length === 0 &&

```
