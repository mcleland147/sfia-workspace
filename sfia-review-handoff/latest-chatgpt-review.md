# SFIA STUDIO — GCEC ONE-LOT DELIVERY
# GOVERNED CYCLE EXECUTION COMPLETION
# DETERMINISTIC IMPLEMENTATION — FULL REVIEW PACK

## TIMESTAMP

- **timestamp (Europe/Paris):** 2026-09-11 10:08:49 CEST
- **worktree:** `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- **branch:** `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- **External cycle:** 8 — Delivery / implémentation · EVOL · CRITICAL
- **Delivery contract handoff:** `562ad2554dc2b03ea7d76fdf7ea72da14f1eaa3f`
- **Authorized base:** `6a2e3c9d71275145b20b514d02ab54533a72a2a7`

## GO MORRIS CONSUMED

GO MORRIS — AUTHORIZE GCEC ONE-LOT DELIVERY IMPLEMENTATION ON 6a2e3c9d,
SCHEMA-FREE, UNDER DELIVERY CONTRACT 562ad255.
KEEP GCEC-PERSIST CLOSED.
NO PROOF REPO CREATION, NO CURSOR REAL, NO REMOTE PUSH/PR/MERGE WITHOUT SEPARATE GATES.

## GIT TRUTH BEFORE

```
branch = delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD   = 6a2e3c9d71275145b20b514d02ab54533a72a2a7
HEAD^  = 4a80965a5f1687f805544c56be66e5d2ead3ea29
origin/main = a9f6c310a0826d0e5bd6f7264603382a86564db1
handoff = 562ad255 (parent df51a6e5)
tracked Product = clean (.tmp-sfia-review dirt only)
```

## GIT TRUTH AFTER

```
HEAD   = 2b5dcaf1a5506e68616f04adb1570edae483928b
parent = 6a2e3c9d71275145b20b514d02ab54533a72a2a7
tree   = 2df085b757dc3d255c179257d35fdf7a1e5a08fe
message = feat(sfia-studio): add governed cycle execution completion
Product push = NONE
```

### Name-status (Product)

```
A	projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
M	projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
A	projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
A	projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
M	projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
M	projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
A	projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
A	projects/sfia-studio/app/lib/oa/git-ports/index.ts
A	projects/sfia-studio/app/lib/oa/git-ports/localGitCommitPort.ts
A	projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts
A	projects/sfia-studio/app/lib/oa/git-ports/postMergeVerify.ts
A	projects/sfia-studio/app/lib/oa/git-ports/types.ts
M	projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
M	projects/sfia-studio/app/lib/oa/project/domain/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

### Stat

```
.../oa/cycle/gcecOneLotDelivery.d0.test.ts         | 1024 ++++++++++++++++++++
 .../__tests__/oa/git-ports/gcecGitPorts.d0.test.ts |  134 +++
 .../trajectorySurface.ui.test.tsx                  |   31 +
 .../surfaces/TrajectorySurface.tsx                 |   13 +-
 .../surfaces/lifecyclePresentation.ts              |   15 +
 .../approveCandidateTrajectory.ts                  |   22 +
 .../project-assistant/f2/executionIntentSchema.ts  |  182 ++++
 .../f3/boundedDocsWriteM3ResolutionProfile.ts      |   55 ++
 .../project-assistant/f3/prepareM3FromDecision.ts  |   90 +-
 .../f3/selectProductM3ResolutionProfile.ts         |   22 +-
 .../preCycleCandidateTrajectoryActions.ts          |    2 +
 .../application/deriveCycleObligationSnapshot.ts   |  162 ++++
 .../application/deriveFinalizationApplicability.ts |   40 +-
 .../cycle/application/pilotLifecycleTransitions.ts |   10 +
 .../lib/oa/cycle/application/qualifyGitEvidence.ts |   28 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   10 +
 .../app/lib/oa/decision/domain/types.ts            |   15 +
 .../application/artifactCompleteness.ts            |   58 ++
 .../application/typedGitEvidence.ts                |  273 ++++++
 .../app/lib/oa/evidence-review/index.ts            |   22 +
 .../oa/execution-attempt/application/grantGateD.ts |    6 +-
 .../application/startExecution.ts                  |   10 +-
 .../execution-attempt/domain/realLaunchSafety.ts   |    3 +
 .../app/lib/oa/execution-attempt/index.ts          |   21 +-
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |  175 ++++
 .../m4BoundedDocsWriteCursorAgent.ts               |   94 ++
 .../studioCursorRealLaunchGateway.ts               |   38 +-
 .../app/lib/oa/git-ports/fakeGitProviderPorts.ts   |  104 ++
 projects/sfia-studio/app/lib/oa/git-ports/index.ts |   34 +
 .../app/lib/oa/git-ports/localGitCommitPort.ts     |   98 ++
 .../app/lib/oa/git-ports/localGitStatusDiffPort.ts |   86 ++
 .../app/lib/oa/git-ports/postMergeVerify.ts        |   47 +
 projects/sfia-studio/app/lib/oa/git-ports/types.ts |  154 +++
 .../app/lib/oa/project/domain/invariants.ts        |   69 ++
 .../sfia-studio/app/lib/oa/project/domain/types.ts |   21 +
 .../app/lib/vertical-slice-runtime/service.ts      |    2 +
 36 files changed, 3122 insertions(+), 48 deletions(-)
```

## SOURCES READ

Process template · routing · operating model · guardrails · v2.5 Delivery · CKC synthetic map · Build Doctrine · Roadmap · Product Completion · v3 23/30–35/37 · Delivery contract `562ad255` · Product sources as implemented.

Hierarchy: local Git candidate > Morris GO > governance > HD > sources > memory > hypothesis.
v2.6 = PROCESS only.

## CONVERGENCE PRE-CHECK

Build Doctrine ACTIVE · Product Completion CLOSED · runtime v3 NON ADOPTED · F3 Product path SoT · Recommendation ≠ HD · Nora ≠ execution authority.

## CYCLE / TYPE / PROFILE

Cycle 8 — Delivery / implémentation · EVOL · CRITICAL

## CKC FALLBACK

No detailed Delivery CKC. Used synthetic map + v2.5 Delivery section as process guidance only. No invented Delivery CKC. No runtime markdown dependency.

## D-GCEC DECISIONS CONSUMED

| ID | Status |
|----|--------|
| D-GCEC-01 A BOUNDED | CONSUMED — deriveCycleObligationSnapshot |
| D-GCEC-02 explicit binding + dedicated proof vehicle | CONSUMED — Project.repositoryBinding; repo NOT created |
| D-GCEC-03 sibling docs-write | CONSUMED — cap:cursor.docs_write |
| D-GCEC-04 doctrine-resolved effect separation | CONSUMED — git-ports phases |
| D-GCEC-05 Option 1 temporary | CONSUMED — TEMP-GCEC-PRPM-01 retained |
| D-GCEC-06 ADAPT Artifact via Evidence | CONSUMED — no Artifact table |
| D-GCEC-07 typed Git Evidence | CONSUMED — git:* sources |
| D-GCEC-08 trajectory reprepare same-lot | CONSUMED |

## IMPLEMENTED CAPABILITY

Target loop infrastructure for Governed Cycle Execution Completion — **deterministic only**.

### Stage 1 — obligations / repo / DecisionBasis / trajectory

- `ProjectRepositoryBinding` + `validateRepositoryBinding` (payload_json only)
- `deriveCycleObligationSnapshot` — pre-row F14 MUST for repo-backed `cyc:functional-design`
- `deriveFinalizationApplicability` consumes snapshot before positive rows
- DecisionBasis `executionBasis` additive intent fields
- F2 `executionIntentSchema.ts` SFIA-specific structured-output delta
- Trajectory: completed matching cycle ⇒ no « Préparer le cycle »
- `mustBlocksNoGovernedEffects` helper

### Stage 2 — docs-write / worktree / Artifact Evidence

- `boundedDocsWriteM3ResolutionProfile` sibling (RO unchanged)
- `m4BoundedDocsWriteCursorAgent` + `isM4AuthorizedCursorRealAgent`
- PREPARE maps docs_write fail-closed; RESOLVE kind `bounded_docs_write`
- Gateway branches: RO=`--mode ask`; docs-write omits ask
- Registry registers docs-write with RO when M4 path on
- `FakeDocsWriteLaunchPort` for deterministic external boundary
- `evaluateFunctionalDesignArtifactCompleteness` on Evidence
- artifactProofPresent requires completeness.ok

### Stage 3 — typed Git Evidence / ports

- `typedGitEvidence.ts` validators/builders for 8 discriminators
- `isGitCompletionProofEvidence` — only `git:post_merge_verification` (typed) or legacy lexical satisfies
- Intermediate git:* facts do not SATISFY Git obligation
- `lib/oa/git-ports` — status/diff, local commit, fake remote push/PR/CI/review/merge, postMergeVerify
- Force push forbidden; merge requires confirmation id

### Stage 4 — Finalization / UI / tests

- pilotLifecycleTransitions passes cycleTypeId + repositoryBinding into derive
- TrajectorySurface + lifecyclePresentation adapted
- Focused + related + full Vitest + typecheck + lint + build PASS

## PERSISTENCE IMPACT

| Check | Result |
|-------|--------|
| New table | **NO** |
| Migration / DDL | **NO** |
| New store | **NO** |
| Additive payload_json | YES (Project.repositoryBinding, DecisionBasis.executionBasis) |
| GCEC-PERSIST | **CLOSED / PASS** |

## F14 OBLIGATION BINDING

On-demand snapshot Option A. Repo-backed functional-design ⇒ artifact/EC/evidence/RB/git/exit APPLICABLE before rows. MUST + no-governed-effects ⇒ monotone contradiction.

## PROJECT→REPO BINDING

Optional `repositoryBinding` on Project. No ambient sfia-workspace fallback. Proof repo NOT created.

## DECISIONBASIS EXECUTION INTENT

Additive optional fields; Nora schema COMBINE/SFIA delta only; ZERO OpenAI REAL.

## EXECUTIONCONTRACT RESOLUTION

PREPARE→RESOLVE preserved. `bounded_docs_write` profile. Fail-closed unresolved target/path/repo.

## DOCS-WRITE AGENT

`cap:cursor.docs_write` · `agt:m4.cursor.bounded_docs_write` · sibling of RO · REAL path structural only · ZERO launches.

## WORKTREE ENFORCEMENT

KEEP studioGitWorktreeWorkspace. Fake docs-write uses disposable worktreeRoot + pathAllowlist + escape checks.

## ARTIFACT COMPLETENESS

Evidence type=artifact + digest + location + bindings + status; no Artifact table.

## TYPED GIT EVIDENCE

source discriminators git:* ; completion proof = post_merge_verification.

## GIT PORTS

Effect-separated A–H. Fake provider for remote. Local commit port for disposable repos only in tests.

## AUTHORITY / CONFIRMATIONS

HD ∩ EC ∩ cap ∩ policy ∩ Confirmation. Docs-write ≠ Git write. No autonomous merge.

## FINALIZATION

Git BLOCKING until post-merge verification evidence. Pilot FINALIZE explicit (unchanged assessFinalization KEEP).

## TRAJECTORY REPREPARE

completedMatchingCycle / prepareBlockedReason hides Préparer le cycle.

## FAKE/REAL QUALIFICATION

| Boundary | Status |
|----------|--------|
| FakeDocsWriteLaunchPort | USED in tests |
| FakeGitProviderPorts | USED in tests |
| Cursor REAL | **ZERO** |
| OpenAI/Nora REAL | **ZERO** |
| Product remote Git | **ZERO** |
| Proof repo | **NOT CREATED** |
| Review Handoff push | L3 reporting only (not Product Git proof) |

## SECURITY CONTROLS

path traversal · allowlist · symlink/containment checks in fake write · force push ban · merge confirmation required · secret non-logging · base SHA fields on RealLaunchRequest preserved.

## FAILURE / RECOVERY

Fake launch reject paths · out-of-scope · digest/sha mismatch in postMergeVerify · no false Evidence/SATISFIED/FINALIZE from intermediate git facts · durable EC/Attempt/Evidence remain SoT (no second orchestration engine).

## TESTS

### Focused

```
npx vitest run __tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts __tests__/oa/git-ports/gcecGitPorts.d0.test.ts
→ 26 passed / 2 files
```

### Related

```
corrProof05 + lifecycleClosure CR/PhaseB + trajectorySurface + lifecyclePresentation + m1ProductSqlite
→ 210 passed / 8 files
```

### Full Vitest

```
npx vitest run
→ Test Files  332 passed | 17 skipped
→ Tests       3546 passed | 135 skipped
```

### Typecheck / Lint / Build / diff --check

```
npm run typecheck → PASS
npm run lint → PASS (No ESLint warnings or errors)
npm run build → PASS
git diff --check → PASS
```

## NON-REGRESSION

corrProof05 136 PASS · lifecycle Phase B / CR follow-up PASS · trajectory UI PASS · RO profile constants asserted unchanged · Product SQLite durability PASS.

## LOCAL COMMIT

```
SHA    = 2b5dcaf1a5506e68616f04adb1570edae483928b
parent = 6a2e3c9d71275145b20b514d02ab54533a72a2a7
tree   = 2df085b757dc3d255c179257d35fdf7a1e5a08fe
message = feat(sfia-studio): add governed cycle execution completion
```

## REMOTE EFFECTS

Product push = NONE · proof repo = NOT CREATED · PR = NONE · merge = NONE · Cursor REAL = ZERO · OpenAI REAL = ZERO.

## TEMP-GCEC-PRPM-01

Retained. Exit unchanged: after first END-TO-END REAL GCEC proof, requalify PR-readiness/post-merge cycle relationship. Owner: Morris.

## RESERVES (NON-BLOCKING)

1. Project UI edit surface for repositoryBinding not expanded beyond payload/type — binding set via persistence/tests; Product UI may follow later lot.
2. Full Product orchestration StartExecution→Attempt→Evidence→RB with FakeDocsWriteLaunchPort end-to-end harness covered at port/unit level; deeper Gate D wiring smoke left for REAL campaign under GCEC-CURSOR-REAL.
3. Option 1 temporary model remains debt — not global doctrine.

## DEBT

TEMP-GCEC-PRPM-01 · docs-only write first vertical · typed Evidence by source convention (enum not expanded).

## ANTI-CLAIMS

deterministic candidate ≠ REAL boundary proven · docs-write implementation ≠ Cursor REAL · Git ports ≠ remote Git proven · local candidate commit ≠ PR readiness · Review Handoff push ≠ Product Git proof · proof-repo decision ≠ repository created · Product Completion CLOSED · runtime v3 NON ADOPTED.

## NEXT GATES

GCEC-REPO-CREATE · GCEC-CURSOR-REAL · GCEC-PUSH · GCEC-PR · GCEC-MERGE · GCEC-RUNTIME-V3 (no promotion) · GCEC-PERSIST must stay closed.

## VERDICT

**PASS — GCEC ONE-LOT DELIVERY DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

---

## EXACT FILES CREATED

| Path | Responsibility |
|------|----------------|
| deriveCycleObligationSnapshot.ts | F14 on-demand binder |
| boundedDocsWriteM3ResolutionProfile.ts | M3 resolve profile |
| m4BoundedDocsWriteCursorAgent.ts | Sibling AgentCapability |
| fakeDocsWriteLaunchPort.ts | Deterministic write boundary |
| executionIntentSchema.ts | Nora structured intent delta |
| artifactCompleteness.ts | F14 Evidence completeness |
| typedGitEvidence.ts | Typed git:* Evidence |
| git-ports/* | Effect-separated Git ports |
| gcecOneLotDelivery.d0.test.ts | Focused unit/integration |
| gcecGitPorts.d0.test.ts | Git ports unit |

## EXACT FILES MODIFIED

See name-status above. Key: Project types/invariants · DecisionBasis · deriveFinalizationApplicability · qualifyGitEvidence · prepareM3FromDecision · selectProductM3ResolutionProfile · startExecution/grantGateD · studioCursorRealLaunchGateway · vertical-slice service · approveCandidateTrajectory · TrajectorySurface · lifecyclePresentation · pilotLifecycleTransitions · barrels.

---

## REVIEWABLE NEW FILE CONTENTS

### FULL NEW FILE: `projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts`

```typescript
/**
 * GCEC D-GCEC-01 — on-demand F14 cycle obligation snapshot (schema-free).
 * Derives APPLICABLE before EC/Evidence/RB rows exist.
 * Absence of rows ≠ N/A. Nora does not own applicability.
 */
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import type {
  FinalizationApplicabilityRules,
  ObligationApplicability,
} from "../domain/types";

export type CycleObligationFamily =
  | "artifact"
  | "execution_contract"
  | "evidence"
  | "review_bundle"
  | "git_repository"
  | "exit_criteria";

export type CycleObligationSourceKind =
  | "intrinsic"
  | "contextual"
  | "unknown";

export type CycleObligationEntry = {
  family: CycleObligationFamily;
  applicability: ObligationApplicability;
  sourceKind: CycleObligationSourceKind;
  reason: string;
};

export type CycleObligationSnapshot = {
  cycleTypeId: string;
  projectId: string;
  cycleInstanceId?: string;
  repositoryBound: boolean;
  entries: CycleObligationEntry[];
  /** Families with deterministic MUST / APPLICABLE before rows exist. */
  mustFamilies: CycleObligationFamily[];
};

export type DeriveCycleObligationSnapshotInput = {
  projectId: string;
  cycleTypeId: string;
  cycleInstanceId?: string;
  repositoryBinding?: ProjectRepositoryBinding | null;
  /**
   * When true, treat as repo-backed even without binding (tests only).
   * Production callers should rely on repositoryBinding presence.
   */
  forceRepoBacked?: boolean;
};

const REPO_BACKED_FUNCTIONAL_DESIGN_MUST: readonly CycleObligationFamily[] = [
  "artifact",
  "execution_contract",
  "evidence",
  "review_bundle",
  "git_repository",
  "exit_criteria",
] as const;

/**
 * On-demand binder: DoctrinePackage/catalog semantics + Project context.
 * First vertical: repo-backed `cyc:functional-design` ⇒ governed MUST set.
 * Unknown/unmodeled: UNKNOWN (fail-closed for proof presence).
 */
export function deriveCycleObligationSnapshot(
  input: DeriveCycleObligationSnapshotInput,
): CycleObligationSnapshot {
  const cycleTypeId = input.cycleTypeId.trim();
  const repositoryBound =
    input.forceRepoBacked === true ||
    (input.repositoryBinding != null &&
      typeof input.repositoryBinding.identity === "string" &&
      input.repositoryBinding.identity.trim().length > 0);

  const entries: CycleObligationEntry[] = [];
  const mustFamilies: CycleObligationFamily[] = [];

  if (cycleTypeId === "cyc:functional-design" && repositoryBound) {
    for (const family of REPO_BACKED_FUNCTIONAL_DESIGN_MUST) {
      const sourceKind: CycleObligationSourceKind =
        family === "git_repository" || family === "artifact"
          ? "contextual"
          : "intrinsic";
      entries.push({
        family,
        applicability: "APPLICABLE",
        sourceKind,
        reason:
          family === "git_repository"
            ? "repo_backed_functional_design_git_must"
            : `repo_backed_functional_design_${family}_must`,
      });
      mustFamilies.push(family);
    }
  } else if (!cycleTypeId) {
    for (const family of REPO_BACKED_FUNCTIONAL_DESIGN_MUST) {
      entries.push({
        family,
        applicability: "UNKNOWN",
        sourceKind: "unknown",
        reason: "cycle_type_missing",
      });
    }
  } else {
    // Known cycle without repo-backed functional-design GCEC vertical:
    // do not invent global Git MUST. Leave families unset (UNKNOWN by absence).
    entries.push({
      family: "exit_criteria",
      applicability: "APPLICABLE",
      sourceKind: "intrinsic",
      reason: "cycle_has_exit_criteria",
    });
    mustFamilies.push("exit_criteria");
  }

  return {
    cycleTypeId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    repositoryBound,
    entries,
    mustFamilies,
  };
}

/** Apply MUST/APPLICABLE snapshot into FinalizationApplicabilityRules (monotone). */
export function applyCycleObligationSnapshotToRules(
  rules: FinalizationApplicabilityRules,
  snapshot: CycleObligationSnapshot,
  positiveSources: Partial<
    Record<
      | "artifact"
      | "execution_contract"
      | "evidence"
      | "review_bundle"
      | "git_repository",
      string
    >
  >,
): void {
  for (const entry of snapshot.entries) {
    if (entry.applicability !== "APPLICABLE") continue;
    if (entry.family === "exit_criteria") {
      rules.exit_criteria = "APPLICABLE";
      continue;
    }
    const family = entry.family;
    rules[family] = "APPLICABLE";
    if (!positiveSources[family]) {
      positiveSources[family] = `obligation_snapshot:${entry.reason}`;
    }
  }
}

export function snapshotMustFamilySet(
  snapshot: CycleObligationSnapshot,
): ReadonlySet<CycleObligationFamily> {
  return new Set(snapshot.mustFamilies);
}

```
### FULL NEW FILE: `projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts`

```typescript
/**
 * Sibling M3 resolution profile for the governed REAL bounded docs-write path
 * (D-GCEC-03 / GAP-1 sibling).
 *
 * Values are harvested from `createM4BoundedDocsWriteCursorAgentDescriptor`
 * — not invented here.
 *
 * NOT a new engine. NOT client-injectable. NOT authorized live REAL in this cycle.
 */

import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    constraints: [
      "BOUNDED DOCS-WRITE",
      "PATH_ALLOWLIST_ONLY",
      "TEXT_DOCS_ONLY",
      "NO_DELETE",
      "NO_COMMIT",
      "NO_GIT_REMOTE",
      "NO_PUSH",
      "NO_PR",
      "NO_MERGE",
      "GATE D REQUIRED",
      "NO WILDCARD",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      "GATE_D_REQUIRED",
      "REAL_BOUNDARY_DISABLED",
      "BASE_SHA_DRIFT",
      "PATH_ESCAPE",
      "OUT_OF_SCOPE_WRITE",
    ],
    executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  };
}

export const BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded docs-write Cursor REAL profile; ZERO LIVE in this cycle)" as const;

```
### FULL NEW FILE: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts`

```typescript
/**
 * M4 bounded docs-write Cursor agent descriptor (D-GCEC-03).
 * Sibling of m4BoundedReadOnlyCursorAgent — does not mutate the RO descriptor.
 * Static / deny-by-default registry entry — no live health probe.
 * Exact caps only — no wildcards, no unresolved.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";
import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";

export const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
export const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
export const M4_BOUNDED_DOCS_WRITE_TARGET =
  "workspace.isolated.docs_write" as const;
export const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;

export function createM4BoundedDocsWriteCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-docs-write-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-docs-write-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_docs_write",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    allowedActions: [M4_BOUNDED_DOCS_WRITE_ACTION],
    allowedTargets: [M4_BOUNDED_DOCS_WRITE_TARGET],
    allowedScopes: [M4_BOUNDED_DOCS_WRITE_SCOPE],
    trustLevel: "bounded",
    executionMode: "cursor_cli_real",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    provenance: provenance ?? defaultProvenance,
    createdAt: nowIso,
  };
  return Object.freeze(descriptor);
}

/**
 * Strict docs-write REAL allowlist — agentId + cap + action + target exact.
 * Does not loosen the RO predicate body.
 */
export function isM4BoundedDocsWriteRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_DOCS_WRITE_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_DOCS_WRITE_TARGET) &&
    agent.allowedScopes.length > 0 &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes) &&
    !agent.supportedCapabilities.includes("cap:unresolved") &&
    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
  );
}

/** REAL Cursor allowlist — RO or docs-write (OR only; RO body unchanged). */
export function isM4AuthorizedCursorRealAgent(
  agent: AgentDescriptor,
): boolean {
  return (
    isM4BoundedReadOnlyRealAgent(agent) || isM4BoundedDocsWriteRealAgent(agent)
  );
}

```
### FULL NEW FILE: `projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts`

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

  const p = payload as Record<string, unknown>;
  let location: string | undefined;
  let digest: Digest | undefined;

  switch (source) {
    case "git:working_tree_diff":
      location = `git://working-tree/${String(p.repositoryRef)}`;
      break;
    case "git:local_commit":
      location = `git://commit/${String(p.commitSha)}`;
      break;
    case "git:remote_push":
      location = `git://push/${String(p.remote)}/${String(p.refName)}@${String(p.commitSha)}`;
      break;
    case "git:pull_request":
      location = `git://pr/${String(p.repositoryRef)}#${String(p.prNumber)}`;
      break;
    case "git:ci_status":
      location = `git://ci/${String(p.commitSha)}`;
      break;
    case "git:review_status":
      location = `git://review/${String(p.repositoryRef)}`;
      break;
    case "git:merge":
      location = `git://merge/${String(p.mergeCommitSha)}`;
      break;
    case "git:post_merge_verification": {
      const pm = payload as GitPostMergeVerificationPayload;
      location = `git://post-merge/${pm.targetBranch}@${pm.targetSha}/${pm.artifactPath}`;
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
### FULL NEW FILE: `projects/sfia-studio/app/lib/oa/evidence-review/application/artifactCompleteness.ts`

```typescript
/**
 * GCEC D-GCEC-06 — functional-design artifact completeness over Evidence rows.
 * No new Artifact table; type===artifact + digest + location + bindings + status.
 */
import type { Evidence } from "../domain/types";

export type ArtifactCompletenessGap =
  | "not_artifact_type"
  | "digest_missing"
  | "location_missing"
  | "bindings_missing"
  | "status_not_proof";

export type ArtifactCompletenessResult = {
  ok: boolean;
  gaps: ArtifactCompletenessGap[];
};

function hasStructuralBinding(evidence: Evidence): boolean {
  const b = evidence.bindings;
  if (!b) return false;
  return Boolean(
    b.executionAttemptId ||
      b.executionContractId ||
      b.decisionId ||
      b.cycleInstanceId ||
      b.projectId ||
      b.reviewBundleId,
  );
}

/**
 * Evaluate whether Evidence represents a complete functional-design artifact.
 */
export function evaluateFunctionalDesignArtifactCompleteness(
  evidence: Evidence,
): ArtifactCompletenessResult {
  const gaps: ArtifactCompletenessGap[] = [];

  if (evidence.type !== "artifact") {
    gaps.push("not_artifact_type");
  }
  if (!evidence.digest) {
    gaps.push("digest_missing");
  }
  const location = evidence.location?.trim() ?? "";
  if (!location) {
    gaps.push("location_missing");
  }
  if (!hasStructuralBinding(evidence)) {
    gaps.push("bindings_missing");
  }
  if (evidence.status !== "available" && evidence.status !== "verified") {
    gaps.push("status_not_proof");
  }

  return { ok: gaps.length === 0, gaps };
}

```
### FULL NEW FILE: `projects/sfia-studio/app/lib/oa/git-ports/types.ts`

```typescript
/**
 * GCEC D-GCEC-08 / §16 — narrow Git effect ports (no broad execute).
 *
 * Authority notes (comments only):
 * - N2 Pilote: LocalGitCommitPort
 * - N3: GitRemotePushPort / GitPullRequestPort / GitMergePort
 * - Read ports: status/diff, CI, review, post-merge verify
 */

import type { Digest } from "@/lib/oa/doctrine";

/** Phase B — local status / diff read. */
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

/** Phase C — local commit (N2). Never push. */
export type LocalGitCommitInput = {
  repoPath: string;
  message: string;
  /** Paths to stage; empty/omit = fail-closed (no `git add -A`). */
  paths: string[];
  authorName?: string;
  authorEmail?: string;
};

export type LocalGitCommitOutput = {
  commitSha: string;
  message: string;
};

export type LocalGitCommitPort = {
  commit(input: LocalGitCommitInput): Promise<LocalGitCommitOutput>;
};

/** Phase D — remote push (N3). Force push never. */
export type GitRemotePushInput = {
  repositoryRef: string;
  remote: string;
  refName: string;
  commitSha: string;
  /** Must never be true — fail-closed if set. */
  force?: boolean;
};

export type GitRemotePushOutput = {
  remote: string;
  refName: string;
  commitSha: string;
};

export type GitRemotePushPort = {
  push(input: GitRemotePushInput): Promise<GitRemotePushOutput>;
};

/** Phase E — open / update PR (N3). */
export type GitPullRequestInput = {
  repositoryRef: string;
  title: string;
  headRef: string;
  baseRef: string;
  body?: string;
};

export type GitPullRequestOutput = {
  prNumber: number;
  url: string;
  headSha: string;
  baseRef: string;
};

export type GitPullRequestPort = {
  openPullRequest(input: GitPullRequestInput): Promise<GitPullRequestOutput>;
};

/** Phase F — CI status read. */
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

/** Phase F — review status read. */
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

/** Phase G — merge (N3). Never auto. */
export type GitMergeInput = {
  repositoryRef: string;
  prNumber: number;
  /** Explicit human/system merge confirmation token — required. */
  mergeConfirmationId: string;
};

export type GitMergeOutput = {
  mergeCommitSha: string;
  baseRef: string;
  prNumber: number;
};

export type GitMergePort = {
  mergePullRequest(input: GitMergeInput): Promise<GitMergeOutput>;
};

/** Phase H — post-merge verify (pure compare inputs). */
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

```
### FULL NEW FILE: `projects/sfia-studio/app/lib/oa/git-ports/postMergeVerify.ts`

```typescript
/**
 * Phase H — pure post-merge verifier (target SHA + artifact digest identity).
 */
import type { PostMergeVerifyInput, PostMergeVerifyOutput } from "./types";

const FULL_SHA = /^[0-9a-f]{40}$/i;
const DIGEST = /^sha256:[a-f0-9]{64}$/i;

export function verifyPostMerge(input: PostMergeVerifyInput): PostMergeVerifyOutput {
  const reasons: string[] = [];
  if (!FULL_SHA.test(input.expectedTargetSha)) {
    reasons.push("expected_target_sha_invalid");
  }
  if (!FULL_SHA.test(input.observedTargetSha)) {
    reasons.push("observed_target_sha_invalid");
  }
  if (!DIGEST.test(input.expectedArtifactDigest)) {
    reasons.push("expected_artifact_digest_invalid");
  }
  if (!DIGEST.test(input.observedArtifactDigest)) {
    reasons.push("observed_artifact_digest_invalid");
  }
  if (!input.artifactPath.trim()) {
    reasons.push("artifact_path_required");
  }
  if (
    FULL_SHA.test(input.expectedTargetSha) &&
    FULL_SHA.test(input.observedTargetSha) &&
    input.expectedTargetSha.toLowerCase() !==
      input.observedTargetSha.toLowerCase()
  ) {
    reasons.push("target_sha_mismatch");
  }
  if (
    DIGEST.test(input.expectedArtifactDigest) &&
    DIGEST.test(input.observedArtifactDigest) &&
    input.expectedArtifactDigest.toLowerCase() !==
      input.observedArtifactDigest.toLowerCase()
  ) {
    reasons.push("artifact_digest_mismatch");
  }
  return { ok: reasons.length === 0, reasons };
}

export const postMergeVerifyPort = {
  verify: verifyPostMerge,
};

```
### FULL NEW FILE: `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`

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
    },
  };
}

```


## REVIEWABLE ADAPTED DIFFS

### DIFF: `projects/sfia-studio/app/lib/oa/project/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index 1d881208..ef28417f 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -35,6 +35,25 @@ export type LivingProjectStateStatus =
   | "conflict"
   | "superseded";

+/**
+ * GCEC — explicit Project → target repository binding (D-GCEC-02).
+ * Persisted only inside Project.payload_json (schema-free additive).
+ * Ambient Studio repoRoot is NEVER an implicit target.
+ */
+export type ProjectRepositoryProvider = "github";
+
+export type ProjectRepositoryBinding = {
+  provider: ProjectRepositoryProvider;
+  /** e.g. owner/repo */
+  identity: string;
+  remoteUrl: string;
+  defaultBranch: string;
+  /** Optional pin; otherwise resolved at PREPARE/Gate D. */
+  baseSha?: string;
+  /** Relative allowlist root (e.g. docs/). */
+  pathRoot?: string;
+};
+
 export type Project = {
   schemaVersion: "0.1.0-oa";
   projectId: string;
@@ -43,6 +62,8 @@ export type Project = {
   currentLpsVersionId?: string;
   doctrinePackageRef?: DoctrinePackageRef;
   activeCycleInstanceId?: string;
+  /** Explicit Product target repository — never ambient sfia-workspace. */
+  repositoryBinding?: ProjectRepositoryBinding;
   createdAt: string;
   updatedAt?: string;
   createdBy: ActorReference;

```
### DIFF: `projects/sfia-studio/app/lib/oa/project/domain/invariants.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
index 27b1bcb5..cc94efda 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
@@ -10,6 +10,7 @@ import {
   type LivingProjectState,
   type Project,
   type ProjectDetailCode,
+  type ProjectRepositoryBinding,
 } from "./types";

 /** Modeled identifier pattern (common/identifier.schema.json). */
@@ -178,3 +179,71 @@ export function assertProjectActiveWithDoctrine(
   }
   return null;
 }
+
+const GITHUB_IDENTITY_PATTERN = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
+const SHA1_OR_SHA256_HEX = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i;
+
+/**
+ * Validate optional Project.repositoryBinding (GCEC D-GCEC-02).
+ * Fail-closed: no ambient workspace fallback, no path traversal.
+ */
+export function validateRepositoryBinding(
+  binding: ProjectRepositoryBinding | undefined | null,
+): InvariantViolation | null {
+  if (binding == null) return null;
+  if (binding.provider !== "github") {
+    return { detailCode: "PROJECT_INVALID", reason: "repository_provider_invalid" };
+  }
+  const identity = typeof binding.identity === "string" ? binding.identity.trim() : "";
+  if (!identity || !GITHUB_IDENTITY_PATTERN.test(identity)) {
+    return { detailCode: "PROJECT_INVALID", reason: "repository_identity_invalid" };
+  }
+  const remoteUrl =
+    typeof binding.remoteUrl === "string" ? binding.remoteUrl.trim() : "";
+  if (!remoteUrl) {
+    return { detailCode: "PROJECT_INVALID", reason: "repository_remote_url_empty" };
+  }
+  const expectedHttps = `https://github.com/${identity}.git`;
+  const expectedHttpsBare = `https://github.com/${identity}`;
+  const expectedSsh = `git@github.com:${identity}.git`;
+  const expectedSshBare = `git@github.com:${identity}`;
+  const remoteOk =
+    remoteUrl === expectedHttps ||
+    remoteUrl === expectedHttpsBare ||
+    remoteUrl === expectedSsh ||
+    remoteUrl === expectedSshBare;
+  if (!remoteOk) {
+    return {
+      detailCode: "PROJECT_INVALID",
+      reason: "repository_remote_identity_mismatch",
+    };
+  }
+  const branch =
+    typeof binding.defaultBranch === "string" ? binding.defaultBranch.trim() : "";
+  if (!branch || branch.includes("..") || branch.includes("/") || branch.includes("\\")) {
+    return { detailCode: "PROJECT_INVALID", reason: "repository_default_branch_invalid" };
+  }
+  if (binding.baseSha != null) {
+    const sha = binding.baseSha.trim();
+    if (!SHA1_OR_SHA256_HEX.test(sha)) {
+      return { detailCode: "PROJECT_INVALID", reason: "repository_base_sha_invalid" };
+    }
+  }
+  if (binding.pathRoot != null) {
+    const pathRoot = binding.pathRoot.trim().replace(/\/+$/, "");
+    if (!pathRoot) {
+      return { detailCode: "PROJECT_INVALID", reason: "repository_path_root_empty" };
+    }
+    if (
+      pathRoot.startsWith("/") ||
+      pathRoot.includes("\\") ||
+      pathRoot.split("/").some((seg) => seg === ".." || seg === "")
+    ) {
+      return {
+        detailCode: "PROJECT_INVALID",
+        reason: "repository_path_root_traversal",
+      };
+    }
+  }
+  return null;
+}

```
### DIFF: `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
index c08d2314..847d2639 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
@@ -160,6 +160,21 @@ export type DecisionBasis = {
     cycleTypeId?: string;
     recommendedProfile?: string;
     requestedOperation?: string;
+    /**
+     * GCEC — structured NON-AUTHORITATIVE execution intent (D-GCEC).
+     * Recommendation/proposal context only — ≠ HumanDecision ≠ authority.
+     */
+    intentKind?: string;
+    artifactType?: string;
+    targetRepositoryRef?: string;
+    targetPath?: string;
+    scopeIn?: string[];
+    scopeOut?: string[];
+    expectedOutputs?: string[];
+    requiredCapabilities?: string[];
+    validationExpectations?: string[];
+    evidenceRequirements?: string[];
+    reversibilityExpectation?: "reversible" | "irreversible" | "unknown";
   };
 };


```
### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
index 92971cdf..c5d42764 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
@@ -7,6 +7,8 @@
 import type { HumanDecision } from "@/lib/oa/decision";
 import type { Evidence } from "@/lib/oa/evidence-review";
 import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
+import type { ProjectRepositoryBinding } from "@/lib/oa/project";
+import { evaluateFunctionalDesignArtifactCompleteness } from "@/lib/oa/evidence-review";
 import type {
   FinalizationApplicabilityRules,
   ObligationApplicability,
@@ -16,9 +18,14 @@ import {
   isCurrentHumanDecisionStatus,
   matchesLifecycleHumanDecision,
 } from "./assessFinalization";
+import {
+  applyCycleObligationSnapshotToRules,
+  deriveCycleObligationSnapshot,
+  type CycleObligationSnapshot,
+} from "./deriveCycleObligationSnapshot";
 import {
   isGitApplicableContract,
-  isGitQualifyingEvidence,
+  isGitCompletionProofEvidence,
 } from "./qualifyGitEvidence";

 export const OBLIGATION_POLICY_SUBJECT_PREFIX =
@@ -61,6 +68,12 @@ export type DeriveFinalizationApplicabilityInput = {
   evidence: readonly Evidence[];
   reviewBundles: readonly ReviewBundle[];
   executionContracts: readonly DerivableExecutionContract[];
+  /** GCEC — cycle type for pre-row F14 obligation binding. */
+  cycleTypeId?: string;
+  /** GCEC — explicit Project repository binding (contextual Git MUST). */
+  repositoryBinding?: ProjectRepositoryBinding | null;
+  /** Optional precomputed snapshot; otherwise derived when cycleTypeId set. */
+  obligationSnapshot?: CycleObligationSnapshot | null;
 };

 type PositiveFamily =
@@ -189,7 +202,8 @@ function requireApplicable(

 /**
  * Derive applicability from durable Product facts.
- * Merge: empty → positive EC/evidence/review/trajectory signals → obligation-policy HD.
+ * Merge: empty → pre-exec F14 obligation snapshot → positive EC/evidence/review/trajectory
+ * signals → obligation-policy HD (monotone; MUST cannot be silently erased).
  */
 export function deriveFinalizationApplicability(
   input: DeriveFinalizationApplicabilityInput,
@@ -203,6 +217,21 @@ export function deriveFinalizationApplicability(
     (r) => !r.cycleInstanceId || r.cycleInstanceId === cycleId,
   );

+  // --- Pre-execution F14 obligation snapshot (APPLICABLE before rows) ---
+  const snapshot =
+    input.obligationSnapshot ??
+    (input.cycleTypeId
+      ? deriveCycleObligationSnapshot({
+          projectId: input.projectId,
+          cycleTypeId: input.cycleTypeId,
+          cycleInstanceId: cycleId,
+          repositoryBinding: input.repositoryBinding,
+        })
+      : null);
+  if (snapshot) {
+    applyCycleObligationSnapshotToRules(rules, snapshot, positiveSources);
+  }
+
   // --- Positive signals (APPLICABLE only; never N/A from absence) ---
   if (input.trajectory) {
     rules.exit_criteria = "APPLICABLE";
@@ -260,7 +289,10 @@ export function deriveFinalizationApplicability(
     );
   }
   rules.artifactProofPresent = evidence.some(
-    (e) => e.type === "artifact" && isProofStatus(e.status),
+    (e) =>
+      e.type === "artifact" &&
+      isProofStatus(e.status) &&
+      evaluateFunctionalDesignArtifactCompleteness(e).ok,
   );

   const gitApplicable = contracts.filter(isGitApplicableContract);
@@ -274,7 +306,7 @@ export function deriveFinalizationApplicability(
   }
   const gitIds = new Set(gitApplicable.map((c) => c.contractId));
   rules.gitProofPresent = evidence.some((e) =>
-    isGitQualifyingEvidence(e, gitIds, cycleId),
+    isGitCompletionProofEvidence(e, gitIds, cycleId),
   );

   // --- Obligation policy HD (explicit N/A or REQUIRE) ---

```
### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts
index f0511f81..2877b996 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts
@@ -2,8 +2,10 @@
  * CORR-PROOF-05 #3B — semantic binding for Git/repository proof Evidence.
  * Pure; no persistence. Type alone is never sufficient.
  * Lexical matching uses explicit token/namespace boundaries — never substring "git".
+ * Prefer typed git:* sources (D-GCEC-07) over lexical markers.
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
+import { isTypedGitEvidenceSource } from "@/lib/oa/evidence-review";

 export type GitQualifiableContract = {
   contractId: string;
@@ -53,7 +55,7 @@ export function isGitApplicableContract(
 /**
  * Evidence qualifies as git proof only when status is supporting AND
  * semantically bound to a git-applicable EC, or (without EC binding)
- * same-cycle with explicit Git/repository location|source marker.
+ * same-cycle with typed git:* source or explicit Git/repository location|source marker.
  */
 export function isGitQualifyingEvidence(
   evidence: Evidence,
@@ -79,6 +81,10 @@ export function isGitQualifyingEvidence(

   const sameCycle = evidence.bindings?.cycleInstanceId === cycleInstanceId;
   if (sameCycle) {
+    // Prefer typed git:* discriminators over lexical fallback.
+    if (isTypedGitEvidenceSource(evidence.source)) {
+      return true;
+    }
     const location = evidence.location ?? "";
     const source = evidence.source ?? "";
     if (
@@ -91,3 +97,23 @@ export function isGitQualifyingEvidence(

   return false;
 }
+
+/**
+ * GCEC — Git obligation SATISFIED only with typed post-merge verification
+ * (or legacy lexical qualifying evidence without typed git:* source).
+ * Intermediate git:* facts (diff/commit/push/PR/CI/review/merge) do NOT satisfy.
+ */
+export function isGitCompletionProofEvidence(
+  evidence: Evidence,
+  gitApplicableContractIds: ReadonlySet<string> | readonly string[],
+  cycleInstanceId: string,
+): boolean {
+  if (!isGitQualifyingEvidence(evidence, gitApplicableContractIds, cycleInstanceId)) {
+    return false;
+  }
+  if (isTypedGitEvidenceSource(evidence.source)) {
+    return evidence.source === "git:post_merge_verification";
+  }
+  // Legacy lexical path (pre-typed) still qualifies for back-compat tests.
+  return true;
+}

```
### DIFF: `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index faa507a8..cbcf590f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -84,30 +84,78 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
     "DECISION_NOT_CURRENT",
   ];

+  const docsWriteIntent =
+    eb.intentKind === "docs_write" ||
+    eb.requestedOperation?.trim() === "cursor.docs_write.apply";
+
   const requested = eb.requestedOperation?.trim() ?? "";
   let action: string;
   if (requested) {
     action = requested;
+  } else if (docsWriteIntent) {
+    action = "cursor.docs_write.apply";
   } else {
     action = "UNRESOLVED_ACTION";
     stopConditions.push("ACTION_UNRESOLVED");
   }

-  // No explicit target field on DecisionBasis today → always unresolved.
-  const target = "UNRESOLVED_TARGET";
-  stopConditions.push("TARGET_UNRESOLVED");
+  let target: string;
+  let requiredCapabilities: string[];
+  const inputs: Record<string, unknown> = {
+    objective: eb.objective,
+    recommendedProfile: eb.recommendedProfile,
+    cycleTypeId: eb.cycleTypeId,
+    activatedBlocks: eb.activatedBlocks,
+    sourceRef: basis.sourceRef,
+    sourceDigest: basis.sourceDigest,
+  };
+
+  if (docsWriteIntent) {
+    const targetPath = eb.targetPath?.trim() ?? "";
+    const targetRepositoryRef = eb.targetRepositoryRef?.trim() ?? "";
+    if (!targetPath || !targetRepositoryRef) {
+      target = "UNRESOLVED_TARGET";
+      stopConditions.push("TARGET_UNRESOLVED");
+    } else {
+      // Sentinel target for resolve; concrete path lives in inputs.
+      target = "workspace.isolated.docs_write";
+      inputs.targetPath = targetPath;
+      inputs.targetRepositoryRef = targetRepositoryRef;
+      inputs.repositoryRef = targetRepositoryRef;
+      inputs.pathAllowlist = eb.scopeIn ?? [];
+      inputs.createOrModify = true;
+    }

-  const requiredCapabilities = ["cap:unresolved"];
-  stopConditions.push("CAPABILITY_UNRESOLVED");
+    if (eb.requiredCapabilities && eb.requiredCapabilities.length > 0) {
+      requiredCapabilities = [...eb.requiredCapabilities];
+    } else {
+      requiredCapabilities = ["cap:cursor.docs_write"];
+    }
+  } else {
+    // No explicit target field on DecisionBasis today → always unresolved.
+    target = "UNRESOLVED_TARGET";
+    stopConditions.push("TARGET_UNRESOLVED");
+    requiredCapabilities = ["cap:unresolved"];
+    stopConditions.push("CAPABILITY_UNRESOLVED");
+  }

-  // Fail-closed safety default — not a sourced reversibility analysis.
-  const reversibility = "irreversible" as const;
-  stopConditions.push("REVERSIBILITY_UNRESOLVED");
+  let reversibility: "reversible" | "irreversible" = "irreversible";
+  if (
+    docsWriteIntent &&
+    (eb.reversibilityExpectation === "reversible" ||
+      eb.reversibilityExpectation === "irreversible")
+  ) {
+    reversibility = eb.reversibilityExpectation;
+  } else {
+    // Fail-closed safety default — not a sourced reversibility analysis.
+    stopConditions.push("REVERSIBILITY_UNRESOLVED");
+  }

   const scope =
     (eb.scope && eb.scope.trim()) || `decision:${decisionId}`;
   const constraints = [
     ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
+    ...(eb.scopeOut ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
     ...(eb.risks ?? []).map((s) => `RISK:${s}`),
     ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
     "PREPARE_ONLY",
@@ -120,9 +168,16 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
       constraints.push(`ACTIVATED_BLOCK:${b}`);
     }
   }
-  const expectedOutputs = eb.expectedOutcome
-    ? [eb.expectedOutcome]
-    : undefined;
+  const expectedOutputs =
+    eb.expectedOutputs && eb.expectedOutputs.length > 0
+      ? [...eb.expectedOutputs]
+      : eb.expectedOutcome
+        ? [eb.expectedOutcome]
+        : undefined;
+  const evidenceRequirements =
+    eb.evidenceRequirements && eb.evidenceRequirements.length > 0
+      ? [...eb.evidenceRequirements]
+      : undefined;
   return {
     action,
     target,
@@ -130,16 +185,10 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
     constraints,
     stopConditions,
     expectedOutputs,
+    evidenceRequirements,
     requiredCapabilities,
     reversibility,
-    inputs: {
-      objective: eb.objective,
-      recommendedProfile: eb.recommendedProfile,
-      cycleTypeId: eb.cycleTypeId,
-      activatedBlocks: eb.activatedBlocks,
-      sourceRef: basis.sourceRef,
-      sourceDigest: basis.sourceDigest,
-    },
+    inputs,
   };
 }

@@ -262,7 +311,8 @@ export async function prepareM3FromDecision(input: {
       requiredAuthority: "MORRIS",
       constraints: fields.constraints,
       stopConditions: fields.stopConditions,
-      evidenceRequirements: ["evreq:m3-prepare-decision-basis"],
+      evidenceRequirements:
+        fields.evidenceRequirements ?? ["evreq:m3-prepare-decision-basis"],
       reversibility: fields.reversibility,
       idempotencyKey,
       correlationId: `cor:m3-prep:${decision.decisionId}`,

```
### DIFF: `projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts b/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
index 3eabf4da..9d46a095 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
@@ -6,6 +6,10 @@
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import { isStudioCursorRealEnabled } from "@/lib/oa/execution-attempt";
 import { isDeterministicCursorBoundaryEnabled } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
+import {
+  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
+  boundedDocsWriteM3ResolutionProfile,
+} from "./boundedDocsWriteM3ResolutionProfile";
 import {
   BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
   boundedReadOnlyM3ResolutionProfile,
@@ -16,7 +20,10 @@ import {
 } from "./fixtureSafeM3ResolutionProfile";
 import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

-export type ProductM3ResolutionKind = "fixture" | "bounded_read_only";
+export type ProductM3ResolutionKind =
+  | "fixture"
+  | "bounded_read_only"
+  | "bounded_docs_write";

 export type SelectedProductM3Resolution = {
   kind: ProductM3ResolutionKind;
@@ -73,18 +80,31 @@ export function authorizedM3ResolutionKind(
   if (profileMatchesContract(contract, boundedReadOnlyM3ResolutionProfile())) {
     return "bounded_read_only";
   }
+  if (profileMatchesContract(contract, boundedDocsWriteM3ResolutionProfile())) {
+    return "bounded_docs_write";
+  }
   return null;
 }

 /**
  * @param preferBoundedReadOnlyProfile Server/test only. Never from the client.
+ * @param preferBoundedDocsWriteProfile Server/test only. Never from the client.
+ *   When true, returns docs-write; otherwise existing RO/fixture logic.
  * @param env Optional env snapshot for isStudioCursorRealEnabled /
  *   fail-closed deterministic Cursor boundary (TEST/E2E only).
  */
 export function selectProductM3ResolutionProfile(input?: {
   preferBoundedReadOnlyProfile?: boolean;
+  preferBoundedDocsWriteProfile?: boolean;
   env?: NodeJS.ProcessEnv;
 }): SelectedProductM3Resolution {
+  if (input?.preferBoundedDocsWriteProfile === true) {
+    return {
+      kind: "bounded_docs_write",
+      profile: boundedDocsWriteM3ResolutionProfile(),
+      supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
+    };
+  }
   const env = input?.env ?? process.env;
   const useBounded =
     input?.preferBoundedReadOnlyProfile === true ||

```
### DIFF: `projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
index 7206344f..01c65b84 100644
--- a/projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
@@ -166,6 +166,8 @@ export async function buildPreCycleCandidateApprovalPresentation(input: {
         decidedByDecisionRef: string | null;
         targetCycleTypeId: string | null;
         catalogLabel: string | null;
+        completedMatchingCycle?: boolean;
+        prepareBlockedReason?: "cycle_type_already_completed";
       } | null;
       activeCycleInstanceId: string | null;
     }
@@ -203,6 +205,20 @@ export async function buildPreCycleCandidateApprovalPresentation(input: {
         catalogLabel = getCycleTypeById(targetCycleTypeId)?.label ?? null;
       }
     }
+    let completedMatchingCycle = false;
+    let prepareBlockedReason:
+      | "cycle_type_already_completed"
+      | undefined;
+    if (targetCycleTypeId && activeCycleInstanceId == null) {
+      const cycles = await oa.cycleServices.cycles.listByProject(projectId);
+      completedMatchingCycle = cycles.some(
+        (c) =>
+          c.status === "completed" && c.cycleTypeId === targetCycleTypeId,
+      );
+      if (completedMatchingCycle) {
+        prepareBlockedReason = "cycle_type_already_completed";
+      }
+    }
     return {
       ok: true,
       presentation: null,
@@ -213,6 +229,12 @@ export async function buildPreCycleCandidateApprovalPresentation(input: {
         decidedByDecisionRef: current.decidedByDecisionRef,
         targetCycleTypeId,
         catalogLabel,
+        ...(completedMatchingCycle
+          ? {
+              completedMatchingCycle: true,
+              prepareBlockedReason,
+            }
+          : {}),
       },
       activeCycleInstanceId,
     };

```
### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 9e66bb63..ac677fee 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -183,6 +183,8 @@ export function TrajectorySurface({
     decidedByDecisionRef: string | null;
     targetCycleTypeId: string | null;
     catalogLabel: string | null;
+    completedMatchingCycle?: boolean;
+    prepareBlockedReason?: "cycle_type_already_completed";
   } | null>(null);
   const [preparedCycle, setPreparedCycle] = useState<{
     cycleInstanceId: string;
@@ -914,7 +916,16 @@ export function TrajectorySurface({
             FIGMA SOURCE NOT APPLICABLE — D-GF-START-01 prepare/start CTAs follow
             existing TrajectorySurface action patterns (no Figma handoff).
           */}
-          {!preparedCycle ? (
+          {greenfieldDecided.prepareBlockedReason ||
+          greenfieldDecided.completedMatchingCycle ? (
+            <p
+              className={styles.blockNote}
+              data-testid="pre-cycle-prepare-blocked"
+            >
+              Ce type de cycle est déjà terminé pour ce projet — aucune
+              préparation disponible.
+            </p>
+          ) : !preparedCycle ? (
             <div className={styles.actions}>
               <button
                 type="button"

```
### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
index d602a7c2..38ac4dcd 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
@@ -1,5 +1,6 @@
 import type {
   FinalizationAssessment,
+  FinalizationApplicabilityRules,
   FinalizationObligation,
 } from "@/lib/oa/cycle";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
@@ -125,6 +126,20 @@ export function canOfferGroupedNoGovernedEffects(
   return unknownCount > 0;
 }

+/**
+ * True when applicability rules already mark a governed family APPLICABLE
+ * (positiveSources / obligation snapshot) — UI must not offer grouped N/A.
+ */
+export function mustBlocksNoGovernedEffects(
+  applicabilityRules: FinalizationApplicabilityRules | null | undefined,
+): boolean {
+  if (!applicabilityRules) return false;
+  for (const family of GOVERNED_EFFECT_FAMILIES) {
+    if (applicabilityRules[family] === "APPLICABLE") return true;
+  }
+  return false;
+}
+
 export function lifecycleStatusBadge(
   projection: PilotLifecycleProjection,
 ): { status: LifecycleUiStatus; label: string } {

```
### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index bf766c39..5e8d39fb 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -56,7 +56,7 @@ import type {
   ContractSafetyIdentity,
   GateDGrant,
 } from "../domain/realLaunchSafety";
-import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
+import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
@@ -74,11 +74,11 @@ import type { ExecutionContractStatusWriter } from "./executionContractStatusWri
 import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

 function isRealExecutionAgent(
-  agent: Parameters<typeof isM4BoundedReadOnlyRealAgent>[0],
+  agent: Parameters<typeof isM4AuthorizedCursorRealAgent>[0],
 ): boolean {
   return (
     agent.executionMode === "cursor_cli_real" ||
-    isM4BoundedReadOnlyRealAgent(agent)
+    isM4AuthorizedCursorRealAgent(agent)
   );
 }

@@ -534,8 +534,8 @@ export class StartExecution {
         executionContractId: contract.executionContractId,
       });
     }
-    if (!isM4BoundedReadOnlyRealAgent(agent)) {
-      return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_bounded_readonly_real", {
+    if (!isM4AuthorizedCursorRealAgent(agent)) {
+      return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_authorized_cursor_real", {
         selectedAgentRef: attempt.selectedAgentRef,
       });
     }

```
### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 3a204620..56488d80 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -27,6 +27,7 @@ import {
   CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
   isCursorTrustMarkerPathCompatible,
 } from "./cursorTrustMarkerPathCompatibility";
+import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
@@ -198,6 +199,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {

     // Fixed argv shape — executable is separate; no user-controlled shell.
     // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
+    // Docs-write uses default agent mode (omit --mode ask).
     // Shell under ask remains unresolved by help alone; future REAL must observe.
     const instruction = [
       "TÂCHE UNIQUE — preuve read-only déterministe.",
@@ -218,18 +220,30 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       "Aucune mutation, aucun git remote/commit/push/PR/merge.",
     ].join("\n");

-    const argv = [
-      "agent",
-      "--print",
-      "--mode",
-      "ask",
-      "--workspace",
-      workspacePath,
-      "--trust",
-      "--sandbox",
-      "enabled",
-      instruction,
-    ];
+    const isDocsWrite = request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+    const argv = isDocsWrite
+      ? [
+          "agent",
+          "--print",
+          "--workspace",
+          workspacePath,
+          "--trust",
+          "--sandbox",
+          "enabled",
+          instruction,
+        ]
+      : [
+          "agent",
+          "--print",
+          "--mode",
+          "ask",
+          "--workspace",
+          workspacePath,
+          "--trust",
+          "--sandbox",
+          "enabled",
+          instruction,
+        ];

     try {
       const invoked = await this.runner.invoke({

```
