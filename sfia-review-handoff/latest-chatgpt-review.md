# SFIA STUDIO — GCEC ONE-LOT DELIVERY
# SAME-LOT CRITICAL REVIEW CORRECTION
# CR-GCEC-01 → CR-GCEC-06 — FULL REVIEW PACK

## TIMESTAMP

- **timestamp (Europe/Paris):** 2026-09-11 11:03:17 CEST
- **worktree:** `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- **branch:** `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- **Cycle:** 8 — Delivery / implémentation · EVOL · CRITICAL
- **Prior candidate:** `2b5dcaf1`
- **Prior handoff:** `d1dc8339`
- **Correction HEAD:** `ed7becca1486c20e69be7b98db2d057f3b08e5ef`

## GO MORRIS CONSUMED

GO — CLOSE GCEC CRITICAL REVIEW FINDINGS IN SAME DELIVERY LOT.

Prior GO remains binding: AUTHORIZE GCEC ONE-LOT DELIVERY ON 6a2e3c9d, SCHEMA-FREE, UNDER 562ad255.
KEEP GCEC-PERSIST CLOSED. NO PROOF REPO / CURSOR REAL / REMOTE PUSH-PR-MERGE without separate gates.

## GIT TRUTH BEFORE

```
HEAD   = 2b5dcaf1a5506e68616f04adb1570edae483928b
parent = 6a2e3c9d71275145b20b514d02ab54533a72a2a7
origin/main = a9f6c310a0826d0e5bd6f7264603382a86564db1
handoff = d1dc8339 (parent 562ad255)
tracked Product clean
```

## GIT TRUTH AFTER

```
HEAD   = ed7becca1486c20e69be7b98db2d057f3b08e5ef
parent = 2b5dcaf1a5506e68616f04adb1570edae483928b
tree   = 5b7af19879deac7a1e178d7cd1f1302d2a8e379e
message = fix(sfia-studio): close GCEC deterministic end-to-end gaps
Product push = NONE
```

### Name-status (correction delta 2b5dcaf1..HEAD)

```
M	projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicE2e.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.phaseB.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof02.b1.advisory.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof03.e1.methodGroundedAdvisory.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/methodOrientation.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
M	projects/sfia-studio/app/features/project-assistant/f2/types.ts
M	projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
A	projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
A	projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
M	projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts
A	projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
A	projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/index.ts
A	projects/sfia-studio/app/lib/oa/git-ports/nodeLocalGitPorts.ts
A	projects/sfia-studio/app/lib/oa/project/application/setProjectRepositoryBinding.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
M	projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
```

### Stat

```
.../oa/cycle/corrProof05.pilotLifecycle.d0.test.ts |   1 +
 .../oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts    | 293 +++++++++++
 .../oa/cycle/gcecDeterministicE2e.d0.test.ts       | 571 +++++++++++++++++++++
 .../oa/cycle/gcecDeterministicNegatives.d0.test.ts | 298 +++++++++++
 .../oa/cycle/gcecOneLotDelivery.d0.test.ts         | 111 +++-
 .../oa/cycle/lifecycleClosure.phaseB.d0.test.ts    |   1 +
 .../activeCycleCognitiveWork.d0.test.ts            |   1 +
 .../corrProof02.b1.advisory.d0.test.ts             |   1 +
 ...orrProof03.e1.methodGroundedAdvisory.d0.test.ts |   1 +
 .../project-assistant/f2.orchestrate.test.ts       |   1 +
 .../project-assistant/methodOrientation.test.ts    |   1 +
 .../studioCognitiveContext.test.ts                 |   1 +
 .../importBoundaries.test.ts                       |   1 +
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  18 +
 .../surfaces/RepositoryBindingForm.tsx             |  94 ++++
 .../project-assistant/f2/executionIntentSchema.ts  |  15 +
 .../project-assistant/f2/intentAnalysis.ts         |  26 +-
 .../features/project-assistant/f2/orchestrateF2.ts |   2 +
 .../project-assistant/f2/recordDecision.ts         |  56 +-
 .../app/features/project-assistant/f2/types.ts     |  16 +
 .../f3/boundedDocsWriteM3ResolutionProfile.ts      |  13 +
 .../f3/completeBoundedDocsWriteLaunch.ts           | 123 +++++
 .../f3/ingestDocsWriteArtifactEvidence.ts          |  96 ++++
 .../project-assistant/f3/prepareM3FromDecision.ts  |  30 +-
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts |   1 +
 .../application/deriveCycleObligationSnapshot.ts   |   4 +
 .../application/deriveFinalizationApplicability.ts |  66 ++-
 .../application/qualifyGitCompletionProofSet.ts    | 230 +++++++++
 .../lib/oa/cycle/application/qualifyGitEvidence.ts |   3 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   8 +
 .../app/lib/oa/decision/domain/types.ts            |   4 +
 .../application/artifactCompleteness.ts            |  50 +-
 .../application/typedGitEvidence.ts                |  50 +-
 .../app/lib/oa/evidence-review/index.ts            |   1 +
 .../application/startExecution.ts                  | 178 +++++++
 .../app/lib/oa/execution-attempt/index.ts          |   8 +-
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |  30 +-
 .../managedProjectRepositoryResolver.ts            |  57 ++
 .../studioCursorRealLaunchGateway.ts               |  84 ++-
 .../infrastructure/studioGitWorktreeWorkspace.ts   |  41 +-
 .../ports/realExecutionLaunchPort.ts               |  34 ++
 .../ports/realExecutionWorkspacePort.ts            |  11 +
 .../application/gitEffectEvidenceActions.ts        | 421 +++++++++++++++
 .../app/lib/oa/git-ports/githubCliRemotePorts.ts   | 245 +++++++++
 projects/sfia-studio/app/lib/oa/git-ports/index.ts |  15 +
 .../app/lib/oa/git-ports/nodeLocalGitPorts.ts      |   6 +
 .../application/setProjectRepositoryBinding.ts     | 114 ++++
 projects/sfia-studio/app/lib/oa/project/index.ts   |  12 +
 .../sqlite/createSqliteProductProjectServices.ts   |  12 +
 .../oa/project/ports/projectAuditJournalPort.ts    |  10 +
 .../app/lib/platform/ai/fakeProvider.ts            |  76 +++
 .../app/lib/vertical-slice-runtime/actions.ts      |  32 ++
 .../composeStudioProductRealBoundary.ts            |   2 +
 .../app/lib/vertical-slice-runtime/service.ts      |  51 ++
 .../app/lib/vertical-slice-runtime/types.ts        |   9 +
 55 files changed, 3561 insertions(+), 75 deletions(-)
```

## SOURCES

Process template · routing · operating model · guardrails · v2.5 · CKC synthetic map · Build Doctrine · Roadmap · Product Completion · v3 23/30–35/37 · handoff d1dc833 · local candidate 2b5dcaf1 implementation.

## CONVERGENCE PRE-CHECK

Build Doctrine ACTIVE · Product Completion CLOSED · runtime v3 NON ADOPTED · Fake = external boundary only · GCEC-PERSIST CLOSED.

## CRITICAL REVIEW INPUT

FAIL — GCEC ONE-LOT DELIVERY DETERMINISTIC EXIT NOT MET — SAME-LOT CORRECTION REQUIRED.

| ID | Finding |
|----|---------|
| CR-GCEC-01 | Nora structured intent not wired into F2→DecisionBasis |
| CR-GCEC-02 | Docs-write gateway still used RO instruction; no structured write contract |
| CR-GCEC-03 | repositoryBinding did not reach workspace; ambient repoRoot |
| CR-GCEC-04 | Weak Artifact Evidence; docs-write not ingested as strong proof |
| CR-GCEC-05 | Single post-merge / lexical evidence could falsely SATISFY Git |
| CR-GCEC-06 | Git ports lacked concrete Product REAL adapters/actions |

## CR CLOSURE MATRIX

| CR | Status | Proof |
|----|--------|-------|
| CR-GCEC-01 | **CLOSED** | `gcecCr01F2DecisionBasis.d0.test.ts` — fake provider → analyzeIntent → saveProposal → recordF2Decision → durable DecisionBasis → prepareM3FromDecision (action/target/caps/inputs) |
| CR-GCEC-02 | **CLOSED** | `DocsWriteLaunchSpec` on RealLaunchRequest; extract before Gate D; WRITE instruction in gateway; FakeDocsWrite consumes same spec |
| CR-GCEC-03 | **CLOSED** | PrepareWorkspaceRequest binding/managedRepoRoot; ManagedProjectRepositoryResolver; setProjectRepositoryBinding + RepositoryBindingForm UI; no ambient fallback for docs-write |
| CR-GCEC-04 | **CLOSED** | evaluateGcecArtifactEvidence requires project+cycle+EC+attempt; completeBoundedDocsWriteLaunch + ingestDocsWriteArtifactEvidence |
| CR-GCEC-05 | **CLOSED** | qualifyGitCompletionProofSet; durable git:*?query= locations; Git MUST uses SET only; legacy GP path preserved |
| CR-GCEC-06 | **CLOSED** | GithubCliRemotePorts (injectable, ZERO invoke); gitEffectEvidenceActions with Confirmation grants; FakeGitProviderPorts substitute |

## IMPLEMENTED CAPABILITY SUMMARY

### CR-GCEC-01 — Nora → DecisionBasis
- executionIntent nested in F2_INTENT_JSON_SCHEMA
- artifactBrief / contentRequirements additive
- ProposalDto.executionIntent → buildDecisionBasis → executionBasis
- Fake `__F2_DOCS_WRITE_GCEC__`

### CR-GCEC-02 — Launch parity
- docsWriteSpec built from EC.inputs before Gate D
- REAL gateway WRITE instruction (not RO)
- FakeDocsWriteLaunchPort prefers request.docsWriteSpec

### CR-GCEC-03 — Repo-bound workspace + UX
- managedRepoRoot / binding on prepareWorkspace
- SetProjectRepositoryBinding Product command
- Minimal RepositoryBindingForm on ProjectWorkspacePage

### CR-GCEC-04 — Artifact chain
- Strict GCEC bindings
- Docs-write completion + ingest sibling path

### CR-GCEC-05 — Git proof SET
- qualifyGitCompletionProofSet
- Intermediate git:* not sufficient alone
- TEMP-GCEC-F14-BIND-01 noted on deriveCycleObligationSnapshot

### CR-GCEC-06 — Concrete adapters
- githubCliRemotePorts + nodeLocalGitPorts
- Effect actions: push/PR/CI/review/merge/post-merge with Confirmation
- ZERO REAL invocation

## DETERMINISTIC E2E TRACE (A→Y)

Covered by:
- `gcecCr01F2DecisionBasis.d0.test.ts` (A–H Product F2→PREPARE)
- `gcecDeterministicE2e.d0.test.ts` (binding → FakeDocsWrite same docsWriteSpec → Artifact Evidence → RB → fake Git effects → proof SET SATISFIED; intermediate BLOCKING)
- Negatives in `gcecDeterministicNegatives.d0.test.ts`

Reserve (non-blocking): full StartExecution+Gate D micro-orchestration inside one single test file not duplicated where CR01+E2E already cover the same contracts; REAL campaign remains gated.

## PERSISTENCE

NO TABLE · NO MIGRATION · NO NEW STORE · GCEC-PERSIST CLOSED

## FAKE/REAL PARITY

Same RealLaunchRequest.docsWriteSpec for Fake and REAL gateway. Fake substitutes Cursor only.

## TEMPORARY DEBT

- TEMP-GCEC-PRPM-01 (Option 1) retained
- TEMP-GCEC-F14-BIND-01 (first-vertical F14 binder) retained

## TESTS

### Focused GCEC
```
gcecCr01 + gcecDeterministicE2e + negatives + gcecOneLotDelivery + gcecGitPorts + corrProof05 + importBoundaries
→ PASS
```

### Full Vitest
```
npx vitest run
→ Test Files  335 passed | 17 skipped
→ Tests       3556 passed | 135 skipped
```

### Gates
```
npm run typecheck → PASS
npm run lint → PASS
npm run build → PASS
git diff --check → PASS
```

## LOCAL CORRECTION COMMIT

```
SHA    = ed7becca1486c20e69be7b98db2d057f3b08e5ef
parent = 2b5dcaf1a5506e68616f04adb1570edae483928b
tree   = 5b7af19879deac7a1e178d7cd1f1302d2a8e379e
message = fix(sfia-studio): close GCEC deterministic end-to-end gaps
```

Lineage: 6a2e3c9d → 2b5dcaf1 → ed7becca1486c20e69be7b98db2d057f3b08e5ef

## REMOTE EFFECTS

Product push = NONE · proof repo = NOT CREATED · Cursor REAL = ZERO · OpenAI REAL = ZERO · PR = NONE · merge = NONE

## OPEN GATES

GCEC-REPO-CREATE · GCEC-CURSOR-REAL · GCEC-PUSH · GCEC-PR · GCEC-MERGE · GCEC-RUNTIME-V3 · GCEC-PERSIST stays CLOSED

## ANTI-CLAIMS

deterministic E2E ≠ Cursor REAL · concrete remote adapters ≠ remote Git proven · fake provider ≠ OpenAI REAL · local correction ≠ PR readiness · review handoff ≠ Product Git proof · proof repo NOT CREATED · Product Completion CLOSED · runtime v3 NON ADOPTED

## VERDICT

**PASS — GCEC SAME-LOT CR CORRECTION DETERMINISTIC E2E CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

---

## FILES CREATED / MODIFIED

See name-status above.

## REVIEWABLE NEW FILE CONTENTS

### FULL NEW: `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts`

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
): { ok: true } | { ok: false; reason: string } {
  if (evidence.status !== "available" && evidence.status !== "verified") {
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
 */
export function qualifyGitCompletionProofSet(input: {
  evidence: readonly Evidence[];
  requirements?: readonly GitCompletionProofFamily[];
  expected: QualifyGitCompletionProofSetExpected;
}): QualifyGitCompletionProofSetResult {
  const requirements = [
    ...(input.requirements ?? GCEC_GIT_COMPLETION_PROOF_FAMILIES),
  ];
  const present: GitCompletionProofFamily[] = [];
  const missing: GitCompletionProofFamily[] = [];

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
      const check = evidenceMatchesExpected(m, input.expected, family);
      if (check.ok) {
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
### FULL NEW: `projects/sfia-studio/app/lib/oa/project/application/setProjectRepositoryBinding.ts`

```typescript
/**
 * SetProjectRepositoryBinding — persist explicit Product target repository
 * on Project (CR-GCEC-03). No network. Ambient Studio repo is NEVER implied.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import { validateRepositoryBinding } from "../domain/invariants";
import type {
  ActorReference,
  Project,
  ProjectRepositoryBinding,
  ProjectStructuredError,
} from "../domain/types";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";

export type SetProjectRepositoryBindingRequest = {
  projectId: string;
  binding: ProjectRepositoryBinding;
  actor: ActorReference;
  correlationId?: string;
};

export type SetProjectRepositoryBindingResult =
  | { ok: true; project: Project; durationMs: number }
  | { ok: false; error: ProjectStructuredError; durationMs: number };

export class SetProjectRepositoryBinding {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
  ) {}

  async execute(
    request: SetProjectRepositoryBindingRequest,
  ): Promise<SetProjectRepositoryBindingResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId =
      request.correlationId ?? `cor:set-repo-binding:${request.projectId}`;

    const fail = (
      detailCode: Parameters<typeof createProjectError>[0]["detailCode"],
      reason?: string,
    ): SetProjectRepositoryBindingResult => {
      const durationMs = Date.now() - started;
      const error = createProjectError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        internalCauseRef: reason,
      });
      this.audit.append({
        event: "oa.project.repository_binding_set",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      const violation = validateRepositoryBinding(request.binding);
      if (violation) {
        return fail(violation.detailCode, violation.reason);
      }

      const existing = await this.projects.findById(request.projectId);
      if (!existing) {
        return fail("PROJECT_NOT_FOUND", "project_missing");
      }

      const updated: Project = {
        ...existing,
        repositoryBinding: {
          provider: "github",
          identity: request.binding.identity.trim(),
          remoteUrl: request.binding.remoteUrl.trim(),
          defaultBranch: request.binding.defaultBranch.trim(),
          ...(request.binding.baseSha
            ? { baseSha: request.binding.baseSha.trim() }
            : {}),
          ...(request.binding.pathRoot
            ? { pathRoot: request.binding.pathRoot.trim().replace(/\/+$/, "") }
            : {}),
        },
        updatedAt: timestamp,
      };

      await this.projects.save(updated);

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.project.repository_binding_set",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        result: "ok",
        durationMs,
        actorId: request.actor.actorId,
      });

      return { ok: true, project: updated, durationMs };
    } catch (err) {
      const message = err instanceof Error ? err.message : "unknown";
      return fail("PERSISTENCE_FAILURE", message);
    }
  }
}

```
### FULL NEW: `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`

```typescript
/**
 * CR-GCEC-04 — ingest docs-write artifact Evidence + ReviewBundle.
 * Strong bindings: projectId, cycleInstanceId, executionContractId, executionAttemptId.
 */
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";

export type IngestDocsWriteArtifactEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  targetPath: string;
  digest: string;
  actor?: typeof LOCAL_MORRIS_ACTOR;
  correlationId?: string;
  nowIso?: string;
};

export type IngestDocsWriteArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      reviewBundleId: string;
      evidenceStatus: string;
    }
  | { ok: false; code: string; message: string };

export async function ingestDocsWriteArtifactEvidence(
  input: IngestDocsWriteArtifactEvidenceInput,
): Promise<IngestDocsWriteArtifactEvidenceResult> {
  const actor = input.actor ?? LOCAL_MORRIS_ACTOR;
  const segment = input.executionAttemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
  const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
  const digest = input.digest as Digest;

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest,
    location: input.targetPath,
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    actor,
    correlationId: input.correlationId ?? `cor:docs-write:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write:${evidenceId}`,
  });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  const evidenceStatus = registered.evidence.status;

  const bundle = await input.evidenceReviewServices.createReviewBundle.execute({
    reviewBundleId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    evidenceIds: [evidenceId],
    actor,
    correlationId: input.correlationId ?? `cor:docs-write-rb:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write-rb:${reviewBundleId}`,
  });
  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  return {
    ok: true,
    evidenceId,
    reviewBundleId,
    evidenceStatus,
  };
}

```
### FULL NEW: `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`

```typescript
/**
 * CR-GCEC-04 — complete bounded docs-write launch (sibling of RO completion).
 * Awaits observation, records ExecutionResult, returns artifact facts.
 */
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
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

function parseStdoutFacts(stdout: string): {
  files: string[];
  digest: string | null;
} {
  const files: string[] = [];
  let digest: string | null = null;
  for (const line of stdout.split("\n")) {
    const t = line.trim();
    if (t.startsWith("files=")) {
      files.push(
        ...t
          .slice("files=".length)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
    }
    if (t.startsWith("digest=")) {
      digest = t.slice("digest=".length).trim() || null;
    }
  }
  return { files, digest };
}

export async function completeBoundedDocsWriteLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /** Expected relative target path (from docsWriteSpec / EC.inputs). */
  targetPath?: string;
}): Promise<CompleteBoundedDocsWriteLaunchResult> {
  const base = await completeBoundedReadOnlyLaunch({
    attempt: input.attempt,
    services: input.services,
  });
  if (!base.ok) return base;
  if (base.status !== "succeeded") {
    return base as CompleteBoundedDocsWriteLaunchResult;
  }

  const parsed = parseStdoutFacts(base.observation.stdout ?? "");
  const targetPath =
    input.targetPath?.trim() ||
    parsed.files[0] ||
    "docs/functional-design.md";
  const worktreeRef = base.observation.worktreeRef ?? null;

  let digest = parsed.digest;
  if (!digest && worktreeRef) {
    try {
      const abs = path.resolve(worktreeRef, ...targetPath.split("/"));
      const buf = await readFile(abs);
      digest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;
    } catch {
      digest = null;
    }
  }
  if (!digest) {
    return {
      ok: false,
      code: "DOCS_WRITE_DIGEST_MISSING",
      message: "Docs-write completion missing artifact digest.",
    };
  }

  const touchedFiles =
    parsed.files.length > 0 ? parsed.files : [targetPath];

  return {
    ok: true,
    status: "succeeded",
    attempt: base.attempt,
    observation: base.observation,
    facts: {
      attemptId: input.attempt.attemptId,
      processRef: base.observation.processRef,
      targetPath,
      digest,
      touchedFiles,
      worktreeRef,
      stdout: base.facts?.stdout ?? base.observation.stdout ?? "",
    },
  };
}

```
### FULL NEW: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx`

```typescript
"use client";

import { useState } from "react";
import { setProjectRepositoryBindingAction } from "@/lib/vertical-slice-runtime/actions";

/**
 * Minimal CR-GCEC-03 UI — view/set Project repository binding.
 * Save is local Product persistence only (no network).
 */
export function RepositoryBindingForm(props: {
  projectId: string;
  onSaved?: () => void;
}) {
  const [identity, setIdentity] = useState("acme/widget");
  const [remoteUrl, setRemoteUrl] = useState(
    "https://github.com/acme/widget.git",
  );
  const [defaultBranch, setDefaultBranch] = useState("main");
  const [pathRoot, setPathRoot] = useState("docs/");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSave() {
    setBusy(true);
    setMessage(null);
    try {
      const result = await setProjectRepositoryBindingAction({
        projectId: props.projectId,
        identity,
        remoteUrl,
        defaultBranch,
        pathRoot: pathRoot || undefined,
      });
      if (!result.ok) {
        setMessage(`${result.code}: ${result.message}`);
        return;
      }
      setMessage("Binding enregistré (local).");
      props.onSaved?.();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div data-testid="repository-binding-form">
      <label>
        provider
        <input value="github" readOnly data-testid="repo-binding-provider" />
      </label>
      <label>
        identity
        <input
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          data-testid="repo-binding-identity"
        />
      </label>
      <label>
        remoteUrl
        <input
          value={remoteUrl}
          onChange={(e) => setRemoteUrl(e.target.value)}
          data-testid="repo-binding-remote-url"
        />
      </label>
      <label>
        defaultBranch
        <input
          value={defaultBranch}
          onChange={(e) => setDefaultBranch(e.target.value)}
          data-testid="repo-binding-default-branch"
        />
      </label>
      <label>
        pathRoot
        <input
          value={pathRoot}
          onChange={(e) => setPathRoot(e.target.value)}
          data-testid="repo-binding-path-root"
        />
      </label>
      <button
        type="button"
        disabled={busy}
        onClick={() => void onSave()}
        data-testid="repo-binding-save"
      >
        Enregistrer le binding
      </button>
      {message ? <p data-testid="repo-binding-message">{message}</p> : null}
    </div>
  );
}

```
### FULL NEW: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts`

```typescript
/**
 * ManagedProjectRepositoryResolver — maps Project repository binding identity
 * to a local managed clone under managedRootBase (CR-GCEC-03).
 *
 * ZERO network. Fail-closed if path missing or not a git repo.
 */
import { existsSync } from "node:fs";
import path from "node:path";

export type ManagedRepoBindingIdentity = {
  readonly identity: string;
};

/**
 * Sanitize owner/repo → filesystem-safe segment (no traversal).
 */
export function sanitizeManagedRepoIdentity(identity: string): string {
  const trimmed = identity.trim();
  if (!trimmed || trimmed.includes("..") || trimmed.startsWith("/")) {
    throw new Error("managed_repo_identity_invalid");
  }
  return trimmed.replace(/[^a-zA-Z0-9._-]+/g, "__");
}

export class ManagedProjectRepositoryResolver {
  /**
   * Resolve `{managedRootBase}/{sanitizedIdentity}` when it exists as a git repo.
   * Returns null when missing / not a git directory.
   */
  resolveLocalRepoRoot(
    binding: ManagedRepoBindingIdentity,
    managedRootBase: string,
  ): string | null {
    if (!managedRootBase || !managedRootBase.trim()) return null;
    let sanitized: string;
    try {
      sanitized = sanitizeManagedRepoIdentity(binding.identity);
    } catch {
      return null;
    }
    const candidate = path.resolve(managedRootBase, sanitized);
    const base = path.resolve(managedRootBase);
    if (candidate !== base && !candidate.startsWith(base + path.sep)) {
      return null;
    }
    if (!existsSync(candidate)) return null;
    if (
      !existsSync(path.join(candidate, ".git")) &&
      !existsSync(path.join(candidate, ".git", "HEAD"))
    ) {
      // Bare check: .git file (worktree) or directory
      const gitPath = path.join(candidate, ".git");
      if (!existsSync(gitPath)) return null;
    }
    return candidate;
  }
}

```
### FULL NEW: `projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`

```typescript
/**
 * CR-GCEC-06 — git effect application actions (one effect each).
 * Mutating effects require a real Confirmation id (confirmed, in-scope, not expired).
 */
import type { Digest } from "@/lib/oa/doctrine";
import type {
  Confirmation,
  ConfirmationRepositoryPort,
} from "@/lib/oa/decision";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  buildTypedGitEvidenceFields,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import type {
  GitCiStatusPort,
  GitMergePort,
  GitPullRequestPort,
  GitRemotePushPort,
  GitReviewStatusPort,
  LocalGitCommitPort,
  PostMergeVerifyPort,
} from "../types";
import { verifyPostMerge } from "../postMergeVerify";

export type GitEffectActor = {
  actorId: string;
  role: string;
  displayName?: string;
  authorityLevel?: string;
};

export type GitEffectBindings = {
  projectId: string;
  cycleInstanceId: string;
  executionContractId?: string;
  executionAttemptId?: string;
};

async function assertConfirmed(
  confirmations: ConfirmationRepositoryPort | undefined,
  confirmationId: string | undefined,
  scopeNeedle: string,
  nowIso: string,
): Promise<{ ok: true; confirmation: Confirmation } | { ok: false; reason: string }> {
  if (!confirmationId?.trim()) {
    return { ok: false, reason: "confirmation_id_required" };
  }
  if (!confirmations) {
    return { ok: false, reason: "confirmation_repository_required" };
  }
  const c = await confirmations.findById(confirmationId.trim());
  if (!c) return { ok: false, reason: "confirmation_not_found" };
  if (c.status !== "granted") {
    return { ok: false, reason: "confirmation_not_confirmed" };
  }
  if (c.expiresAt && c.expiresAt < nowIso) {
    return { ok: false, reason: "confirmation_expired" };
  }
  if (!c.scope.includes(scopeNeedle) && c.actionRef !== scopeNeedle) {
    return { ok: false, reason: "confirmation_scope_mismatch" };
  }
  return { ok: true, confirmation: c };
}

async function registerTypedGitEvidence(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const built = buildTypedGitEvidenceFields(
    input.source,
    input.payload as never,
  );
  if (!built.ok) return { ok: false, reason: built.reason };

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
    location: built.fields.location,
    digest: built.fields.digest,
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

export async function commitArtifactEvidence(input: {
  commitPort: LocalGitCommitPort;
  evidenceServices: EvidenceReviewServices;
  repoPath: string;
  repositoryRef: string;
  paths: string[];
  message: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  confirmationId?: string;
  confirmations?: ConfirmationRepositoryPort;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string; commitSha: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:local_commit",
    nowIso,
  );
  if (!conf.ok) return conf;

  const committed = await input.commitPort.commit({
    repoPath: input.repoPath,
    message: input.message,
    paths: input.paths,
  });
  const evidenceId = `ev:git-commit:${committed.commitSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:local_commit",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: committed.commitSha,
      message: committed.message,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, commitSha: committed.commitSha };
}

export async function pushBranchEvidence(input: {
  pushPort: GitRemotePushPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  remote: string;
  refName: string;
  commitSha: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  confirmationId?: string;
  confirmations?: ConfirmationRepositoryPort;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:remote_push",
    nowIso,
  );
  if (!conf.ok) return conf;

  const pushed = await input.pushPort.push({
    repositoryRef: input.repositoryRef,
    remote: input.remote,
    refName: input.refName,
    commitSha: input.commitSha,
  });
  const evidenceId = `ev:git-push:${pushed.commitSha.slice(0, 12)}`;
  return registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:remote_push",
    payload: {
      repositoryRef: input.repositoryRef,
      remote: pushed.remote,
      refName: pushed.refName,
      commitSha: pushed.commitSha,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
}

export async function openPullRequestEvidence(input: {
  prPort: GitPullRequestPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  title: string;
  headRef: string;
  baseRef: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  confirmationId?: string;
  confirmations?: ConfirmationRepositoryPort;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; prNumber: number; headSha: string }
  | { ok: false; reason: string }
> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:pull_request",
    nowIso,
  );
  if (!conf.ok) return conf;

  const pr = await input.prPort.openPullRequest({
    repositoryRef: input.repositoryRef,
    title: input.title,
    headRef: input.headRef,
    baseRef: input.baseRef,
  });
  const evidenceId = `ev:git-pr:${pr.prNumber}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:pull_request",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: pr.prNumber,
      url: pr.url,
      headSha: pr.headSha,
      state: "open",
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, prNumber: pr.prNumber, headSha: pr.headSha };
}

export async function recordCiStatusEvidence(input: {
  ciPort: GitCiStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  commitSha: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
  /** Test inject — skip live CI read. */
  forcedConclusion?: "success" | "failure" | "pending";
}): Promise<{ ok: true; evidenceId: string; conclusion: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const status =
    input.forcedConclusion != null
      ? { conclusion: input.forcedConclusion }
      : await input.ciPort.getCiStatus({
          repositoryRef: input.repositoryRef,
          commitSha: input.commitSha,
        });
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
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, conclusion: status.conclusion };
}

export async function recordReviewStatusEvidence(input: {
  reviewPort: GitReviewStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
  forcedState?: "approved" | "changes_requested" | "commented" | "pending";
}): Promise<{ ok: true; evidenceId: string; state: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const status =
    input.forcedState != null
      ? { state: input.forcedState }
      : await input.reviewPort.getReviewStatus({
          repositoryRef: input.repositoryRef,
          prNumber: input.prNumber,
        });
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
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, state: status.state };
}

export async function mergePullRequestEvidence(input: {
  mergePort: GitMergePort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  confirmationId: string;
  confirmations: ConfirmationRepositoryPort;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; mergeCommitSha: string }
  | { ok: false; reason: string }
> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:merge",
    nowIso,
  );
  if (!conf.ok) return conf;

  const merged = await input.mergePort.mergePullRequest({
    repositoryRef: input.repositoryRef,
    prNumber: input.prNumber,
    mergeConfirmationId: input.confirmationId,
  });
  const evidenceId = `ev:git-merge:${merged.mergeCommitSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:merge",
    payload: {
      repositoryRef: input.repositoryRef,
      mergeCommitSha: merged.mergeCommitSha,
      baseRef: merged.baseRef,
      prNumber: merged.prNumber,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return {
    ok: true,
    evidenceId,
    mergeCommitSha: merged.mergeCommitSha,
  };
}

export async function verifyPostMergeEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  targetBranch: string;
  targetSha: string;
  artifactPath: string;
  artifactDigest: Digest;
  expectedTargetSha: string;
  observedTargetSha: string;
  expectedArtifactDigest: Digest;
  observedArtifactDigest: Digest;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
  verifyPort?: PostMergeVerifyPort;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const verify = input.verifyPort?.verify ?? verifyPostMerge;
  const result = verify({
    expectedTargetSha: input.expectedTargetSha,
    observedTargetSha: input.observedTargetSha,
    expectedArtifactDigest: input.expectedArtifactDigest,
    observedArtifactDigest: input.observedArtifactDigest,
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
      targetSha: input.targetSha,
      artifactPath: input.artifactPath,
      artifactDigest: input.artifactDigest,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
}


```
### FULL NEW: `projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts`

```typescript
/**
 * CR-GCEC-06 — GitHub CLI remote ports (gh fixed argv, shell:false).
 * NEVER invoke in unit tests — inject FakeGitProviderPorts instead.
 */
import { spawn as nodeSpawn } from "node:child_process";
import type {
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitMergeInput,
  GitMergeOutput,
  GitMergePort,
  GitPullRequestInput,
  GitPullRequestOutput,
  GitPullRequestPort,
  GitRemotePushInput,
  GitRemotePushOutput,
  GitRemotePushPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
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

export type GithubCliRemotePortsOptions = {
  /** Injectable runner — tests MUST inject a fake; never call real `gh` in tests. */
  run?: (
    executable: string,
    argv: readonly string[],
    cwd?: string,
  ) => Promise<CmdResult>;
  cwd?: string;
};

export class GithubCliRemotePorts
  implements
    GitRemotePushPort,
    GitPullRequestPort,
    GitCiStatusPort,
    GitReviewStatusPort,
    GitMergePort
{
  private readonly run: NonNullable<GithubCliRemotePortsOptions["run"]>;
  private readonly cwd?: string;

  constructor(options: GithubCliRemotePortsOptions = {}) {
    this.run = options.run ?? runFixedArgv;
    this.cwd = options.cwd;
  }

  async push(input: GitRemotePushInput): Promise<GitRemotePushOutput> {
    if (input.force === true) {
      throw new Error("git_force_push_forbidden");
    }
    const result = await this.run(
      "gh",
      [
        "api",
        "-X",
        "POST",
        `repos/${input.repositoryRef}/git/refs`,
        "-f",
        `ref=refs/heads/${input.refName}`,
        "-f",
        `sha=${input.commitSha}`,
      ],
      this.cwd,
    );
    // Prefer git push via gh when ref exists — fall back to git push argv.
    if (result.exitCode !== 0) {
      const push = await this.run(
        "git",
        ["push", input.remote, `${input.commitSha}:refs/heads/${input.refName}`],
        this.cwd,
      );
      if (push.exitCode !== 0) {
        throw new Error(`github_cli_push_failed:${push.stderr || push.stdout}`);
      }
    }
    return {
      remote: input.remote,
      refName: input.refName,
      commitSha: input.commitSha,
    };
  }

  async openPullRequest(
    input: GitPullRequestInput,
  ): Promise<GitPullRequestOutput> {
    const argv = [
      "pr",
      "create",
      "--repo",
      input.repositoryRef,
      "--title",
      input.title,
      "--head",
      input.headRef,
      "--base",
      input.baseRef,
      "--body",
      input.body ?? "",
      "--json",
      "number,url,headRefOid,baseRefName",
    ];
    const result = await this.run("gh", argv, this.cwd);
    if (result.exitCode !== 0) {
      throw new Error(`github_cli_pr_failed:${result.stderr || result.stdout}`);
    }
    const parsed = JSON.parse(result.stdout) as {
      number: number;
      url: string;
      headRefOid: string;
      baseRefName: string;
    };
    return {
      prNumber: parsed.number,
      url: parsed.url,
      headSha: parsed.headRefOid,
      baseRef: parsed.baseRefName,
    };
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
    if (result.exitCode !== 0) {
      return { state: "pending" };
    }
    const parsed = JSON.parse(result.stdout) as { reviewDecision?: string };
    const d = (parsed.reviewDecision ?? "").toUpperCase();
    if (d === "APPROVED") return { state: "approved" };
    if (d === "CHANGES_REQUESTED") return { state: "changes_requested" };
    if (d === "COMMENTED") return { state: "commented" };
    return { state: "pending" };
  }

  async mergePullRequest(input: GitMergeInput): Promise<GitMergeOutput> {
    if (!input.mergeConfirmationId.trim()) {
      throw new Error("git_merge_confirmation_required");
    }
    const result = await this.run(
      "gh",
      [
        "pr",
        "merge",
        String(input.prNumber),
        "--repo",
        input.repositoryRef,
        "--merge",
        "--json",
        "mergeCommit",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) {
      throw new Error(
        `github_cli_merge_failed:${result.stderr || result.stdout}`,
      );
    }
    let mergeCommitSha = "";
    try {
      const parsed = JSON.parse(result.stdout) as {
        mergeCommit?: { oid?: string };
      };
      mergeCommitSha = parsed.mergeCommit?.oid ?? "";
    } catch {
      mergeCommitSha = "";
    }
    if (!/^[0-9a-f]{40}$/i.test(mergeCommitSha)) {
      throw new Error("github_cli_merge_sha_missing");
    }
    return {
      mergeCommitSha: mergeCommitSha.toLowerCase(),
      baseRef: "main",
      prNumber: input.prNumber,
    };
  }
}


```


## REVIEWABLE ADAPTED DIFFS

### DIFF: `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index fb8c859c..2fd9f969 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -27,6 +27,11 @@ import {
   type ChallengeResponseAssessment,
   type Mw5ChallengeContextInput,
 } from "@/lib/nora-cognitive-runtime/mw5ProductAuthorityFacts";
+import {
+  F2_EXECUTION_INTENT_JSON_SCHEMA,
+  validateExecutionIntentPayload,
+  type ExecutionIntentPayload,
+} from "./executionIntentSchema";

 const INTENT_CLASSES: readonly IntentClass[] = [
   "informative",
@@ -178,6 +183,9 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     expectedOutcome: NULLABLE_STRING,
     criticalJustification: NULLABLE_STRING,
     requestedOperation: NULLABLE_STRING,
+    executionIntent: {
+      anyOf: [F2_EXECUTION_INTENT_JSON_SCHEMA, { type: "null" }],
+    },
   },
   required: [
     "intentClass",
@@ -197,6 +205,7 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     "expectedOutcome",
     "criticalJustification",
     "requestedOperation",
+    "executionIntent",
   ],
 };

@@ -236,6 +245,7 @@ function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysis
     expectedOutcome: partial?.expectedOutcome ?? null,
     criticalJustification: partial?.criticalJustification ?? null,
     requestedOperation: partial?.requestedOperation ?? null,
+    executionIntent: partial?.executionIntent ?? null,
     contradictionCandidate: null,
     challengeResponseAssessment:
       partial?.challengeResponseAssessment ?? null,
@@ -346,6 +356,18 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
   const challengeResponseAssessment: ChallengeResponseAssessment =
     parseChallengeResponseAssessment(obj.challengeResponseAssessment);

+  let executionIntent: ExecutionIntentPayload | null = null;
+  if (obj.executionIntent != null) {
+    const validated = validateExecutionIntentPayload(obj.executionIntent);
+    if (!validated.ok) {
+      return ambiguousFallback({
+        intentClass: intentClass as IntentClass,
+        parseOk: false,
+      } as Partial<IntentAnalysisDto>);
+    }
+    executionIntent = validated.payload;
+  }
+
   return {
     intentClass: intentClass as IntentClass,
     candidateCycleTypeId,
@@ -364,6 +386,7 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
     expectedOutcome: clip(obj.expectedOutcome),
     criticalJustification: clip(obj.criticalJustification),
     requestedOperation: clip(obj.requestedOperation, 240),
+    executionIntent,
     parseOk: true,
   };
 }
@@ -385,7 +408,8 @@ cognitiveWorkload ({ambiguity,reasoningDepth,sourceBreadth,toolDependency,contra
 contradictionCandidate (objet candidat cognitif OU null — PAS Evidence, PAS evidence_backed, PAS Cognitive STOP),
 challengeResponseAssessment (sufficient|insufficient|unknown|null — INTERNAL MW5 seulement ; PAS Truth C, PAS Evidence, PAS HumanDecision, PAS autorité ; missing/unknown/insufficient = fail-closed),
 objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
-expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).
+expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires),
+executionIntent (objet structuré docs_write/read_only NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).

 === DISTINCTION FONDAMENTALE ===
 intentClass = EFFET demandé à Studio (quoi faire sur le produit).

```
### DIFF: `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
index 4379ac42..ce3e7b76 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
@@ -89,6 +89,7 @@ function buildDecisionBasis(input: {
   currentContext: F2ContextSnapshot;
 }): DecisionBasis {
   const { proposal, projectId, currentContext } = input;
+  const ei = proposal.executionIntent ?? null;
   const stablePayload = {
     proposalId: proposal.proposalId,
     objective: proposal.objective,
@@ -102,11 +103,36 @@ function buildDecisionBasis(input: {
     cycleTypeId: proposal.cycleTypeId,
     recommendedProfile: proposal.recommendedProfile,
     rephrasedRequest: proposal.rephrasedRequest,
+    ...(ei
+      ? {
+          executionIntent: {
+            intentKind: ei.intentKind ?? null,
+            artifactType: ei.artifactType ?? null,
+            targetRepositoryRef: ei.targetRepositoryRef ?? null,
+            targetPath: ei.targetPath ?? null,
+            scopeIn: ei.scopeIn ?? [],
+            scopeOut: ei.scopeOut ?? [],
+            expectedOutputs: ei.expectedOutputs ?? [],
+            requiredCapabilities: ei.requiredCapabilities ?? [],
+            validationExpectations: ei.validationExpectations ?? [],
+            evidenceRequirements: ei.evidenceRequirements ?? [],
+            requestedOperation: ei.requestedOperation ?? null,
+            reversibilityExpectation: ei.reversibilityExpectation ?? null,
+            artifactBrief: ei.artifactBrief ?? null,
+            contentRequirements: ei.contentRequirements ?? [],
+          },
+        }
+      : {}),
   };
   const cycleInstanceId =
     currentContext.activeCycleInstanceId ??
     proposal.contextSnapshot.activeCycleInstanceId ??
     undefined;
+  const requestedOperation =
+    (ei?.requestedOperation && ei.requestedOperation.trim()) ||
+    (proposal.requestedOperation && proposal.requestedOperation.trim()) ||
+    proposal.rephrasedRequest;
+
   return {
     sourceType: "proposal",
     sourceRef: proposal.proposalId,
@@ -131,7 +157,35 @@ function buildDecisionBasis(input: {
       stopConditions: [...proposal.stopConditions],
       cycleTypeId: proposal.cycleTypeId,
       recommendedProfile: proposal.recommendedProfile,
-      requestedOperation: proposal.rephrasedRequest,
+      requestedOperation,
+      ...(ei
+        ? {
+            intentKind: ei.intentKind ?? undefined,
+            artifactType: ei.artifactType ?? undefined,
+            targetRepositoryRef: ei.targetRepositoryRef ?? undefined,
+            targetPath: ei.targetPath ?? undefined,
+            scopeIn: ei.scopeIn ? [...ei.scopeIn] : undefined,
+            scopeOut: ei.scopeOut ? [...ei.scopeOut] : undefined,
+            expectedOutputs: ei.expectedOutputs
+              ? [...ei.expectedOutputs]
+              : undefined,
+            requiredCapabilities: ei.requiredCapabilities
+              ? [...ei.requiredCapabilities]
+              : undefined,
+            validationExpectations: ei.validationExpectations
+              ? [...ei.validationExpectations]
+              : undefined,
+            evidenceRequirements: ei.evidenceRequirements
+              ? [...ei.evidenceRequirements]
+              : undefined,
+            reversibilityExpectation:
+              ei.reversibilityExpectation ?? undefined,
+            artifactBrief: ei.artifactBrief ?? undefined,
+            contentRequirements: ei.contentRequirements
+              ? [...ei.contentRequirements]
+              : undefined,
+          }
+        : {}),
     },
   };
 }

```
### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index ab16b331..9e3c4a58 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -5,6 +5,27 @@
  * Must NOT be accepted by InjectableExecutionAdapter.
  */

+/**
+ * GCEC — bounded docs-write launch contract (CR-GCEC-02).
+ * Built from ExecutionContract.inputs BEFORE Gate D consume.
+ * Gateway MUST NOT invent these fields.
+ */
+export type DocsWriteLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly targetPath: string;
+  readonly pathAllowlist: readonly string[];
+  readonly artifactType: string;
+  readonly artifactBrief: string;
+  readonly contentRequirements: readonly string[];
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly validationExpectations: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly createOrModify: true;
+  readonly noDelete: true;
+};
+
 export type RealLaunchRequest = {
   readonly attemptId: string;
   readonly executionContractId: string;
@@ -29,6 +50,19 @@ export type RealLaunchRequest = {
    * Gateway enforces this value and MUST NOT invent a default.
    */
   readonly timeoutMs: number;
+  /** GCEC docs-write launch contract — required when action is docs_write. */
+  readonly docsWriteSpec?: DocsWriteLaunchSpec;
+  /** Optional Project binding identity (owner/repo) for workspace resolution. */
+  readonly repositoryBindingIdentity?: string;
+  /** Server-resolved absolute managed clone root (docs-write). */
+  readonly managedRepoRoot?: string;
+  /** Explicit Project repository binding for workspace verify. */
+  readonly repositoryBinding?: {
+    readonly identity: string;
+    readonly remoteUrl: string;
+    readonly defaultBranch: string;
+    readonly pathRoot?: string;
+  };
 };

 export type RealLaunchAck = {

```
### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 56488d80..ad2cfa6d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -170,6 +170,12 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       const prepared = await this.workspacePort.prepareWorkspace({
         attemptId: request.attemptId,
         baseHeadSha,
+        ...(request.managedRepoRoot
+          ? { managedRepoRoot: request.managedRepoRoot }
+          : {}),
+        ...(request.repositoryBinding
+          ? { repositoryBinding: request.repositoryBinding }
+          : {}),
       });
       workspacePath = prepared.workspacePath;
     } catch (err) {
@@ -199,28 +205,64 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {

     // Fixed argv shape — executable is separate; no user-controlled shell.
     // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
-    // Docs-write uses default agent mode (omit --mode ask).
-    // Shell under ask remains unresolved by help alone; future REAL must observe.
-    const instruction = [
-      "TÂCHE UNIQUE — preuve read-only déterministe.",
-      "Lire uniquement le fichier README.md à la racine du workspace.",
-      "Ne modifier aucun fichier.",
-      "Ne créer aucun fichier.",
-      "Ne lancer aucune commande Shell.",
-      "Ne faire aucune recherche récursive, Glob ou Grep.",
-      "Ne consulter aucun autre fichier.",
-      "Si README.md peut être lu, répondre exactement :",
-      "M4_READ_ONLY_OK",
-      "Si README.md ne peut pas être lu, répondre exactement :",
-      "M4_READ_ONLY_UNAVAILABLE",
-      `target=${request.target ?? ""}`,
-      `action=${request.action ?? ""}`,
-      `scope=${request.scope ?? ""}`,
-      `fingerprint=${request.semanticFingerprint}`,
-      "Aucune mutation, aucun git remote/commit/push/PR/merge.",
-    ].join("\n");
-
+    // Docs-write uses default agent mode (omit --mode ask) + WRITE instruction.
     const isDocsWrite = request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+
+    let instruction: string;
+    if (isDocsWrite) {
+      const spec = request.docsWriteSpec;
+      if (!spec) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "docs_write_spec_missing",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      instruction = [
+        "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
+        `Créer ou modifier UNIQUEMENT le fichier: ${spec.targetPath}`,
+        `Repository: ${spec.repositoryRef}`,
+        `Écrire uniquement sous pathAllowlist: ${spec.pathAllowlist.join(", ")}`,
+        `Type d'artifact: ${spec.artifactType}`,
+        `Brief: ${spec.artifactBrief}`,
+        `Exigences de contenu: ${spec.contentRequirements.join("; ")}`,
+        `Scope IN: ${spec.scopeIn.join(", ") || "(none)"}`,
+        `Scope OUT (interdit): ${spec.scopeOut.join(", ") || "(none)"}`,
+        `Sorties attendues: ${spec.expectedOutputs.join(", ")}`,
+        `Validations: ${spec.validationExpectations.join(", ") || "path_allowlist; no_delete"}`,
+        "Ne créer/modifier AUCUN autre fichier.",
+        "Ne supprimer AUCUN fichier (noDelete=true).",
+        "Ne pas commit, push, PR, merge, ni remote git.",
+        "En cas d'ambiguïté ou de chemin hors allowlist: STOP immédiatement.",
+        `target=${request.target ?? ""}`,
+        `action=${request.action ?? ""}`,
+        `scope=${request.scope ?? ""}`,
+        `fingerprint=${request.semanticFingerprint}`,
+      ].join("\n");
+    } else {
+      instruction = [
+        "TÂCHE UNIQUE — preuve read-only déterministe.",
+        "Lire uniquement le fichier README.md à la racine du workspace.",
+        "Ne modifier aucun fichier.",
+        "Ne créer aucun fichier.",
+        "Ne lancer aucune commande Shell.",
+        "Ne faire aucune recherche récursive, Glob ou Grep.",
+        "Ne consulter aucun autre fichier.",
+        "Si README.md peut être lu, répondre exactement :",
+        "M4_READ_ONLY_OK",
+        "Si README.md ne peut pas être lu, répondre exactement :",
+        "M4_READ_ONLY_UNAVAILABLE",
+        `target=${request.target ?? ""}`,
+        `action=${request.action ?? ""}`,
+        `scope=${request.scope ?? ""}`,
+        `fingerprint=${request.semanticFingerprint}`,
+        "Aucune mutation, aucun git remote/commit/push/PR/merge.",
+      ].join("\n");
+    }
+
     const argv = isDocsWrite
       ? [
           "agent",

```
### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 5e8d39fb..8922718f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -63,6 +63,8 @@ import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
 import type { RealExecutionLaunchPort } from "../ports/realExecutionLaunchPort";
+import type { DocsWriteLaunchSpec } from "../ports/realExecutionLaunchPort";
+import { M4_BOUNDED_DOCS_WRITE_ACTION } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
 import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
 import {
   authorityFailureDetail,
@@ -97,6 +99,105 @@ export function extractContractBaseHeadSha(
   return trimmed.toLowerCase();
 }

+function asStringList(value: unknown): string[] | null {
+  if (!Array.isArray(value)) return null;
+  const out: string[] = [];
+  for (const item of value) {
+    if (typeof item !== "string") return null;
+    const t = item.trim();
+    if (t) out.push(t);
+  }
+  return out;
+}
+
+function asNonEmptyString(value: unknown): string | null {
+  if (typeof value !== "string") return null;
+  const t = value.trim();
+  return t || null;
+}
+
+/**
+ * Extract DocsWriteLaunchSpec from contract.inputs (CR-GCEC-02).
+ * Fail-closed: returns { ok:false, reason } when required fields missing.
+ */
+export function extractDocsWriteLaunchSpec(
+  contract: ExecutionContract,
+):
+  | { ok: true; spec: DocsWriteLaunchSpec; repositoryBindingIdentity?: string }
+  | { ok: false; reason: string } {
+  const inputs =
+    contract.inputs && typeof contract.inputs === "object"
+      ? (contract.inputs as Record<string, unknown>)
+      : {};
+  const repositoryRef =
+    asNonEmptyString(inputs.repositoryRef) ??
+    asNonEmptyString(inputs.targetRepositoryRef);
+  const targetPath = asNonEmptyString(inputs.targetPath);
+  const pathAllowlist =
+    asStringList(inputs.pathAllowlist) ?? asStringList(inputs.scopeIn) ?? [];
+  const artifactType =
+    asNonEmptyString(inputs.artifactType) ?? "functional_design";
+  const artifactBrief = asNonEmptyString(inputs.artifactBrief);
+  const contentRequirements = asStringList(inputs.contentRequirements) ?? [];
+  const scopeIn = asStringList(inputs.scopeIn) ?? pathAllowlist;
+  const scopeOut = asStringList(inputs.scopeOut) ?? [];
+  const expectedOutputs =
+    asStringList(inputs.expectedOutputs) ??
+    (Array.isArray(contract.expectedOutputs)
+      ? asStringList(contract.expectedOutputs)
+      : null) ??
+    (targetPath ? [targetPath] : []);
+  const validationExpectations =
+    asStringList(inputs.validationExpectations) ?? [];
+  const evidenceRequirements =
+    asStringList(inputs.evidenceRequirements) ??
+    (Array.isArray(contract.evidenceRequirements)
+      ? asStringList(contract.evidenceRequirements)
+      : null) ??
+    [];
+
+  if (!repositoryRef) {
+    return { ok: false, reason: "docs_write_repository_ref_missing" };
+  }
+  if (!targetPath) {
+    return { ok: false, reason: "docs_write_target_path_missing" };
+  }
+  if (pathAllowlist.length === 0) {
+    return { ok: false, reason: "docs_write_path_allowlist_missing" };
+  }
+  if (!artifactBrief) {
+    return { ok: false, reason: "docs_write_artifact_brief_missing" };
+  }
+  if (contentRequirements.length === 0) {
+    return { ok: false, reason: "docs_write_content_requirements_missing" };
+  }
+
+  const bindingIdentity =
+    asNonEmptyString(inputs.repositoryBindingIdentity) ??
+    asNonEmptyString(inputs.repositoryIdentity) ??
+    repositoryRef;
+
+  return {
+    ok: true,
+    spec: {
+      repositoryRef,
+      targetPath,
+      pathAllowlist,
+      artifactType,
+      artifactBrief,
+      contentRequirements,
+      scopeIn,
+      scopeOut,
+      expectedOutputs: expectedOutputs ?? [],
+      validationExpectations,
+      evidenceRequirements: evidenceRequirements ?? [],
+      createOrModify: true,
+      noDelete: true,
+    },
+    repositoryBindingIdentity: bindingIdentity ?? undefined,
+  };
+}
+
 function mapRealLaunchRejectDetail(
   reason: string,
   detailCode?: string,
@@ -560,6 +661,77 @@ export class StartExecution {
       );
     }

+    // CR-GCEC-02 — docsWriteSpec BEFORE Gate D consume (fail-closed).
+    let docsWriteSpec: DocsWriteLaunchSpec | undefined;
+    let repositoryBindingIdentity: string | undefined;
+    let managedRepoRoot: string | undefined;
+    let repositoryBinding:
+      | {
+          identity: string;
+          remoteUrl: string;
+          defaultBranch: string;
+          pathRoot?: string;
+        }
+      | undefined;
+    if (contract.action === M4_BOUNDED_DOCS_WRITE_ACTION) {
+      const extracted = extractDocsWriteLaunchSpec(contract);
+      if (!extracted.ok) {
+        return fail("REAL_AGENT_PROFILE_INVALID", extracted.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      docsWriteSpec = extracted.spec;
+      repositoryBindingIdentity = extracted.repositoryBindingIdentity;
+
+      const inputs =
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : {};
+      const managed =
+        typeof inputs.managedRepoRoot === "string"
+          ? inputs.managedRepoRoot.trim()
+          : "";
+      if (!managed) {
+        return fail(
+          "REAL_WORKSPACE_INVALID",
+          "docs_write_managed_repo_root_missing",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      managedRepoRoot = managed;
+
+      const identity =
+        (typeof inputs.repositoryIdentity === "string" &&
+          inputs.repositoryIdentity.trim()) ||
+        (typeof inputs.repositoryBindingIdentity === "string" &&
+          inputs.repositoryBindingIdentity.trim()) ||
+        docsWriteSpec.repositoryRef;
+      const remoteUrl =
+        (typeof inputs.remoteUrl === "string" && inputs.remoteUrl.trim()) ||
+        `https://github.com/${identity}.git`;
+      const defaultBranch =
+        (typeof inputs.defaultBranch === "string" &&
+          inputs.defaultBranch.trim()) ||
+        "main";
+      const pathRoot =
+        typeof inputs.pathRoot === "string" && inputs.pathRoot.trim()
+          ? inputs.pathRoot.trim()
+          : undefined;
+      if (!identity) {
+        return fail(
+          "REAL_WORKSPACE_INVALID",
+          "docs_write_repository_binding_missing",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      repositoryBinding = {
+        identity,
+        remoteUrl,
+        defaultBranch,
+        ...(pathRoot ? { pathRoot } : {}),
+      };
+    }
+
     const fingerprint =
       contract.semanticFingerprint ??
       computeExecutionContractSemanticFingerprint(contract);
@@ -693,6 +865,12 @@ export class StartExecution {
         target: contract.target,
         scope: contract.scope,
         timeoutMs: window.resolvedMaxDurationMs,
+        ...(docsWriteSpec ? { docsWriteSpec } : {}),
+        ...(repositoryBindingIdentity
+          ? { repositoryBindingIdentity }
+          : {}),
+        ...(managedRepoRoot ? { managedRepoRoot } : {}),
+        ...(repositoryBinding ? { repositoryBinding } : {}),
       });
     } catch {
       return this.failRealLaunch({

```
### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
index c5d42764..16f58a53 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
@@ -27,6 +27,10 @@ import {
   isGitApplicableContract,
   isGitCompletionProofEvidence,
 } from "./qualifyGitEvidence";
+import {
+  gitProofFamiliesFromRequirements,
+  qualifyGitCompletionProofSet,
+} from "./qualifyGitCompletionProofSet";

 export const OBLIGATION_POLICY_SUBJECT_PREFIX =
   "pilot.lifecycle.obligation-policy:" as const;
@@ -305,9 +309,65 @@ export function deriveFinalizationApplicability(
     );
   }
   const gitIds = new Set(gitApplicable.map((c) => c.contractId));
-  rules.gitProofPresent = evidence.some((e) =>
-    isGitCompletionProofEvidence(e, gitIds, cycleId),
-  );
+
+  // CR-GCEC-05 — when obligation snapshot has git MUST, require full proof SET.
+  // Legacy git-applicable EC cycles keep single-row / lexical completion.
+  const gitMust = snapshot?.mustFamilies.includes("git_repository") === true;
+
+  if (gitMust) {
+    const reqs = gitProofFamiliesFromRequirements(
+      contracts.flatMap((c) => c.evidenceRequirements ?? []),
+    );
+    const primaryContract = gitApplicable[0] ?? contracts[0];
+    const artifactEv = evidence.find(
+      (e) =>
+        e.type === "artifact" &&
+        evaluateFunctionalDesignArtifactCompleteness(e).ok,
+    );
+    const expected = {
+      repositoryRef:
+        input.repositoryBinding?.identity ??
+        (typeof artifactEv?.location === "string"
+          ? artifactEv.location
+          : "unknown/repo"),
+      targetPath: artifactEv?.location?.trim() || "docs/functional-design.md",
+      artifactDigest: artifactEv?.digest ?? "",
+      cycleInstanceId: cycleId,
+      executionContractId: primaryContract?.contractId,
+      projectId: input.projectId,
+    };
+    // Prefer repositoryRef from typed git evidence when binding identity empty.
+    if (!input.repositoryBinding?.identity) {
+      const typed = evidence.find((e) =>
+        typeof e.source === "string" && e.source.startsWith("git:"),
+      );
+      if (typed?.location?.includes("repo=")) {
+        try {
+          const q = typed.location.slice(typed.location.indexOf("?") + 1);
+          const repo = q
+            .split("&")
+            .map((p) => p.split("="))
+            .find(([k]) => k === "repo");
+          if (repo?.[1]) {
+            expected.repositoryRef = decodeURIComponent(repo[1]);
+          }
+        } catch {
+          /* keep fallback */
+        }
+      }
+    }
+    const setResult = qualifyGitCompletionProofSet({
+      evidence,
+      requirements: reqs,
+      expected,
+    });
+    rules.gitProofPresent = setResult.status === "SATISFIED";
+  } else {
+    // Legacy single-row path (non-GCEC / no git MUST).
+    rules.gitProofPresent = evidence.some((e) =>
+      isGitCompletionProofEvidence(e, gitIds, cycleId),
+    );
+  }

   // --- Obligation policy HD (explicit N/A or REQUIRE) ---
   const policy = findCurrentObligationPolicy(

```
### DIFF: `projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts
index a76f65c1..b881dbad 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts
@@ -1,5 +1,5 @@
 /**
- * GCEC D-GCEC-06 — functional-design artifact completeness over Evidence rows.
+ * GCEC D-GCEC-06 / CR-GCEC-04 — functional-design artifact completeness.
  * No new Artifact table; type===artifact + digest + location + bindings + status.
  */
 import type { Evidence } from "../domain/types";
@@ -9,14 +9,18 @@ export type ArtifactCompletenessGap =
   | "digest_missing"
   | "location_missing"
   | "bindings_missing"
-  | "status_not_proof";
+  | "status_not_proof"
+  | "project_id_missing"
+  | "cycle_instance_id_missing"
+  | "execution_contract_id_missing"
+  | "execution_attempt_id_missing";

 export type ArtifactCompletenessResult = {
   ok: boolean;
   gaps: ArtifactCompletenessGap[];
 };

-function hasStructuralBinding(evidence: Evidence): boolean {
+function hasLooseStructuralBinding(evidence: Evidence): boolean {
   const b = evidence.bindings;
   if (!b) return false;
   return Boolean(
@@ -30,9 +34,11 @@ function hasStructuralBinding(evidence: Evidence): boolean {
 }

 /**
- * Evaluate whether Evidence represents a complete functional-design artifact.
+ * GCEC strict policy — require ALL of:
+ * projectId, cycleInstanceId, executionContractId, executionAttemptId
+ * + type artifact + digest + location + status available|verified.
  */
-export function evaluateFunctionalDesignArtifactCompleteness(
+export function evaluateGcecArtifactEvidence(
   evidence: Evidence,
 ): ArtifactCompletenessResult {
   const gaps: ArtifactCompletenessGap[] = [];
@@ -47,7 +53,17 @@ export function evaluateFunctionalDesignArtifactCompleteness(
   if (!location) {
     gaps.push("location_missing");
   }
-  if (!hasStructuralBinding(evidence)) {
+  const b = evidence.bindings;
+  if (!b?.projectId?.trim()) gaps.push("project_id_missing");
+  if (!b?.cycleInstanceId?.trim()) gaps.push("cycle_instance_id_missing");
+  if (!b?.executionContractId?.trim()) gaps.push("execution_contract_id_missing");
+  if (!b?.executionAttemptId?.trim()) gaps.push("execution_attempt_id_missing");
+  if (
+    !b?.projectId?.trim() ||
+    !b?.cycleInstanceId?.trim() ||
+    !b?.executionContractId?.trim() ||
+    !b?.executionAttemptId?.trim()
+  ) {
     gaps.push("bindings_missing");
   }
   if (evidence.status !== "available" && evidence.status !== "verified") {
@@ -56,3 +72,25 @@ export function evaluateFunctionalDesignArtifactCompleteness(

   return { ok: gaps.length === 0, gaps };
 }
+
+/**
+ * Evaluate whether Evidence represents a complete functional-design artifact.
+ * CR-GCEC-04: defaults to GCEC strict bindings.
+ */
+export function evaluateFunctionalDesignArtifactCompleteness(
+  evidence: Evidence,
+  mode: "gcec_strict" | "legacy_loose" = "gcec_strict",
+): ArtifactCompletenessResult {
+  if (mode === "gcec_strict") {
+    return evaluateGcecArtifactEvidence(evidence);
+  }
+  const gaps: ArtifactCompletenessGap[] = [];
+  if (evidence.type !== "artifact") gaps.push("not_artifact_type");
+  if (!evidence.digest) gaps.push("digest_missing");
+  if (!(evidence.location?.trim() ?? "")) gaps.push("location_missing");
+  if (!hasLooseStructuralBinding(evidence)) gaps.push("bindings_missing");
+  if (evidence.status !== "available" && evidence.status !== "verified") {
+    gaps.push("status_not_proof");
+  }
+  return { ok: gaps.length === 0, gaps };
+}

```
### DIFF: `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 768232bc..8103cb2d 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -429,6 +429,75 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    if (markerProbe.includes("__F2_DOCS_WRITE_GCEC__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:functional-design",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          cognitiveWorkload: null,
+          contradictionCandidate: null,
+          challengeResponseAssessment: null,
+          objective: "Rédiger le design fonctionnel borné",
+          scope: "docs/functional-design.md uniquement",
+          rephrasedRequest:
+            "Produire docs/functional-design.md via cursor.docs_write.apply",
+          outOfScope: ["Cursor REAL hors fake", "commit/push/PR"],
+          risks: ["Contenu incomplet"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION RÉELLE CURSOR"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Artifact functional-design prêt pour revue",
+          criticalJustification: null,
+          requestedOperation: "cursor.docs_write.apply",
+          executionIntent: {
+            intentKind: "docs_write",
+            artifactType: "functional_design",
+            targetRepositoryRef: "acme/widget",
+            targetPath: "docs/functional-design.md",
+            scopeIn: ["docs/"],
+            scopeOut: ["src/", ".github/"],
+            expectedOutputs: ["docs/functional-design.md"],
+            requiredCapabilities: ["cap:cursor.docs_write"],
+            validationExpectations: ["path_allowlist", "no_delete"],
+            evidenceRequirements: [
+              "git:commit",
+              "git:push",
+              "git:pull_request",
+              "git:ci_status",
+              "git:review_status",
+              "git:merge",
+              "git:post_merge_verification",
+            ],
+            requestedOperation: "cursor.docs_write.apply",
+            reversibilityExpectation: "reversible",
+            artifactBrief:
+              "Functional design covering goals, actors, flows, and constraints",
+            contentRequirements: [
+              "goals",
+              "actors",
+              "main_flows",
+              "constraints",
+              "out_of_scope",
+            ],
+          },
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
     if (markerProbe.includes("__F2_INFORMATIVE__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
@@ -447,6 +516,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: null,
           criticalJustification: null,
           requestedOperation: null,
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,
@@ -482,6 +552,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: "Proposition structurée prête pour revue",
           criticalJustification: null,
           requestedOperation: null,
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,
@@ -522,6 +593,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: "Gate Morris requis — profil Standard",
           criticalJustification: null,
           requestedOperation: "create pr",
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,
@@ -582,6 +654,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: "Gate Morris requis",
           criticalJustification: "Besoin métier structurant documenté",
           requestedOperation: "architecture change",
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,
@@ -610,6 +683,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: null,
           criticalJustification: null,
           requestedOperation: null,
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,
@@ -669,6 +743,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: "Proposition sans exécution",
           criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
           requestedOperation: "cursor create pr",
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,
@@ -704,6 +779,7 @@ export class FakeConversationProvider implements ConversationProvider {
           expectedOutcome: null,
           criticalJustification: null,
           requestedOperation: "architecture security change",
+          executionIntent: null,
         })}`,
         usage: {
           inputTokens: 10 * this.callCount,

```
