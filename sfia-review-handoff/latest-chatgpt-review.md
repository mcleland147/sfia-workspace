# SFIA STUDIO — REVIEW PACK FULL / Critical
## Mono-cycle: PR #618 CI Reconciliation & Cursor Confinement

- **UTC:** 2026-10-25T17:10:29Z
- **Level:** FULL / Critical
- **GO Morris:** 2026-10-25 — CI reconciliation + Cursor confinement + R24 + corrective commit/push + handoff L3 (no merge, no REAL, no Binding/docs_write restore)

---

## 1. Git Truth

| Item | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write` |
| Branch | `feat/akg-m5-remove-repository-binding-docs-write` |
| PR | [#618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT** |
| HEAD initial (PR) | `15d3bd397e62d2e8f6ff196299ea13bfd9a46c68` |
| HEAD corrective | `ff653b587a75b9ff92472cb4e4350239c087c9e9` |
| Remote SHA | `ff653b587a75b9ff92472cb4e4350239c087c9e9` (FF push) |
| origin/main | `7db8afd7c27720712f08000274dbbc4e1a62d935` |
| Merge-base | with origin/main (unchanged lineage of PR #618) |
| Dirty excluded | `.tmp-sfia-review/chatgpt-review.md` — **never** Delivery-committed |

Confirmed: correct branch/worktree; HEAD synced with PR after push; no foreign staged files; Binding/docs_write **not** restored.

---

## 2. Sources consulted

- SFIA cycle templates / routing / guardrails (method paths in contract)
- CKC QA `pilots/04-qa-validation.md`
- Convergence doctrine + roadmap; Product completion C1 D-PC-09 (read; **no semantic amend**)
- Generic execution review-result architecture
- PRR volumes 01–09 (R24 overlays on 05, 07, 08, 09)
- PR #618; CI workflow `40207375690` / job Build and validate
- Handoffs GI `f0d1f058` / CORR-02 `cac910a4` (prior)
- Primary: Git + code + Vitest evidence

---

## 3. Baseline CI (pre-corrective)

- Workflow: `40207375690` COMPLETED / **FAILURE**
- install/typecheck/lint/build: PASS; Vitest: FAIL; Required Gate: FAIL
- 576 files: 489 passed, **65 failed**, 22 skipped
- 6164 tests: 5721 passed, **301 failed**, 142 skipped

---

## 4. Triage matrix (65 initially failing suites)

Classification keys: A HISTORICAL RETIRED · B EXPECTATION OBSOLETE · C GENERIC INVARIANT REGRESSION · D PRODUCT BEHAVIOR GAP · E SECURITY/AUTHORITY · F TEST INFRA · G UNKNOWN

### Corrected / green after corrective (21/65)

- `__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`\n- `__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts`\n- `__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts`\n- `__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts`\n- `__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts`\n- `__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts`\n- `__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts`\n- `__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts`\n- `__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts`\n- `__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts`\n- `__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts`\n- `__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts`\n- `__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts`

**Representative triage actions on green set:**
- **E/P0** confinement suites: KEEP + expand DET negatives (local FS, commit, push, PR, RO, ambiguous, SSH/GIT_CONFIG/GH sentinels).
- **A/B** OneLotDelivery / CRSR / NELC docs_write overlays / FakeProvider docs_write stamps: RETIRE or ADAPT to generalist/null operation.
- **B/D** PWR application path: ADAPT Binding pathRoot asserts → `projectWorkspaceKey`; CR-PWR-04 → Project without Git; retire M3 docs_write Execute E2E half (KNOWN GAP).
- **B** p6 MHD/SHE/der16: ADAPT `intentKind` docs_write/code_change → other/read_only; Binding drift → sealed env identity.

### Residual red (44/65) — explicit

- `__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts`\n- `__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts`\n- `__tests__/oa/cycle/gcecD15Negatives.d0.test.ts`\n- `__tests__/oa/cycle/gcecDeterministicE2e.d0.test.ts`\n- `__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts`\n- `__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts`\n- `__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts`\n- `__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts`\n- `__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts`\n- `__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`\n- `__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`\n- `__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts`\n- `__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`\n- `__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts`\n- `__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts`\n- `__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts`\n- `__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts`\n- `__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts`\n- `__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts`\n- `__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts`\n- `__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts`\n- `__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts`\n- `__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts`\n- `__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts`\n- `__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`\n- `__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`\n- `__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts`\n- `__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts`\n- `__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts`\n- `__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts`\n- `__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts`\n- `__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts`\n- `__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts`\n- `__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts`\n- `__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts`\n- `__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts`\n- `__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts`\n- `__tests__/vertical-slice-runtime/importBoundaries.test.ts`\n- `__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts`

**Residual themes (not auto-classified as legacy-only):**
- Git lifecycle / Agent01 / Cont01 / Commit gateway profiles (profile/`contract_legacy` expectations)
- M3 prepare path still expecting docs_write-shaped successors
- Monolithic / deterministic GCEC product E2E
- corrProof 07/09/10/11 + active-cycle materialization continuity
- Generic Execution Review Result convergence suites
- UI trajectory / journey coherence
- liveManagedRepoComposition
- Some CRSR remnants after partial docs_write it-retirement

**Local re-run of the 65 after corrective:** Test Files **21 passed / 44 failed**; Tests **828 passed / 160 failed** (was 743/259 on first post-P0 re-run; baseline CI 301 FAIL).

---

## 5. P0 — Cursor confinement analysis & fix

### Problem
Structural removal hardcoded `isDocsWrite: false` on REAL gateway path → generalist local FS mutation skipped specialized confinement composition.

### Fix (no new security engine; no docs_write restore)
- `resolveMutatingCursorConfinement` classifies from **authorizedEffects** (+ sealed slice agreement) and profile flags.
- Classes: local / remote_git / remote_github; mixed/unknown → **fail closed**.
- Gateway rejects with `REAL_AGENT_PROFILE_INVALID` when ambiguous.

### Tests DET (ZERO REAL)
- `gcecMutatingCursorConfinementEnv.d0.test.ts` — PASS (17)
- Parity suite adapted — PASS
- Parent env unchanged asserted in confinement suite

### Full file — `mutatingCursorConfinementEnv.ts` (post-corrective)

```typescript
/**
 * D-GCEC-CONF-02A / D-GCEC-EXEC-01 — server-owned child env for mutating Cursor launches.
 *
 * Effect class comes from server-owned authorized effects and sealed launch-profile
 * flags (local commit / remote push / PR create / PR merge). A docs_write taxonomy
 * flag is not an input and cannot turn confinement on or off.
 *
 * Effect-sensitive (CR-02):
 * - local (filesystem create/modify/delete, git.commit, local-commit profile):
 *   strip Git/GitHub/SSH write-auth channels
 * - remote_git (git.push): preserve SSH / askpass channels; still strip GH tokens +
 *   inherited GIT_CONFIG injection; then inject a Product-owned GitHub HTTPS credential
 *   helper overlay (`gh auth git-credential`) so non-interactive HTTPS push can use the
 *   host's stored gh session without restoring ~/.gitconfig or propagating GH_TOKEN
 * - remote_github (pr create/merge): preserve GH_/GITHUB_ token keys; still neutralize
 *   GIT_CONFIG injection; no remote_git helper overlay
 *
 * Mixed local+remote, remote_git+remote_github, unknown effect ids, or disagreement
 * between request authorized effects and the sealed slice fail closed. They do not
 * silently select remote_git.
 *
 * Read-only / validation.run / empty authorized effects do not apply mutating
 * confinement (credential keys stay; only inherited Cursor egress keys are stripped).
 *
 * CAPABILITY ≠ AUTHORITY: this grants a technical HTTPS auth path for remote_git only.
 * Destination/scope remain governed by ExecutionContract ∩ Confirmation ∩ gateway rules.
 *
 * Proves only: Product gateway applies a deterministic env-key presence policy.
 * Does NOT prove AUTH REAL / remote-write success.
 * NEVER copy secret VALUES into specs/Evidence/reports — key presence only.
 */
import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "../domain/realLaunchSafety";

/** Exact auth / askpass / SSH override keys stripped for local (A/B) mutating child env. */
export const MUTATING_CURSOR_STRIPPED_ENV_KEYS = [
  "SSH_AUTH_SOCK",
  "SSH_AGENT_PID",
  "GH_TOKEN",
  "GITHUB_TOKEN",
  "GH_ENTERPRISE_TOKEN",
  "GITHUB_ENTERPRISE_TOKEN",
  "GIT_ASKPASS",
  "SSH_ASKPASS",
  "SSH_ASKPASS_REQUIRE",
  "GIT_SSH",
  "GIT_SSH_COMMAND",
  "GIT_CONFIG_PARAMETERS",
  "GIT_CONFIG_COUNT",
] as const;

/** SSH / askpass channels preserved for remote_git (C). */
export const MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS = [
  "SSH_AUTH_SOCK",
  "SSH_AGENT_PID",
  "GIT_ASKPASS",
  "SSH_ASKPASS",
  "SSH_ASKPASS_REQUIRE",
  "GIT_SSH",
  "GIT_SSH_COMMAND",
] as const;

/** GitHub token sentinel keys preserved for remote_github (D/E). */
export const MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS = [
  "GH_TOKEN",
  "GITHUB_TOKEN",
  "GH_ENTERPRISE_TOKEN",
  "GITHUB_ENTERPRISE_TOKEN",
] as const;

/**
 * Product-owned Git config overlay for remote_git only (constants — never caller-derived).
 * Scoped to github.com HTTPS; uses the GitHub CLI credential helper against stored gh auth.
 * Does not restore host global/system Git config and does not propagate GH_TOKEN.
 */
export const REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY =
  "credential.https://github.com.helper" as const;
export const REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_VALUE =
  "!gh auth git-credential" as const;

/**
 * Cursor Shell egress env keys — strip ambient inheritance only.
 * Product MUST NOT inject CURSOR_FORCED_* (full-capability parity; no SFIA firewall).
 */
export const CURSOR_FORCED_SHELL_EGRESS_KEY =
  "CURSOR_FORCED_SHELL_EGRESS" as const;
export const CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY =
  "CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS" as const;
export const CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY =
  "CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT" as const;

export const CURSOR_FORCED_SHELL_EGRESS_ENV_KEYS = [
  CURSOR_FORCED_SHELL_EGRESS_KEY,
  CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY,
  CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY,
] as const;

export type MutatingCursorConfinementEffectClass =
  | "local"
  | "remote_git"
  | "remote_github";

const LOCAL_STRIPPED = new Set<string>(MUTATING_CURSOR_STRIPPED_ENV_KEYS);
const REMOTE_GIT_PRESERVE = new Set<string>(
  MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS,
);
const REMOTE_GITHUB_PRESERVE = new Set<string>(
  MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS,
);

function isInheritedGitConfigInjectionKey(key: string): boolean {
  return (
    key === "GIT_CONFIG_PARAMETERS" ||
    key === "GIT_CONFIG_COUNT" ||
    /^GIT_CONFIG_KEY_\d+$/.test(key) ||
    /^GIT_CONFIG_VALUE_\d+$/.test(key)
  );
}

function isInheritedCursorShellEgressKey(key: string): boolean {
  return (CURSOR_FORCED_SHELL_EGRESS_ENV_KEYS as readonly string[]).includes(
    key,
  );
}

function shouldStripKey(
  key: string,
  effectClass: MutatingCursorConfinementEffectClass,
): boolean {
  // Always neutralize GIT_CONFIG_* and Cursor egress ambient inheritance.
  if (isInheritedGitConfigInjectionKey(key)) return true;
  if (isInheritedCursorShellEgressKey(key)) return true;

  if (effectClass === "local") {
    return LOCAL_STRIPPED.has(key);
  }
  if (effectClass === "remote_git") {
    if (REMOTE_GIT_PRESERVE.has(key)) return false;
    return LOCAL_STRIPPED.has(key);
  }
  // remote_github
  if (REMOTE_GITHUB_PRESERVE.has(key)) return false;
  return LOCAL_STRIPPED.has(key);
}

/**
 * Strip ambient Cursor Shell egress keys from any env object (RO / non-mutating
 * path). Does not mutate the input; returns a fresh object.
 */
export function stripInheritedCursorShellEgressEnv(
  env: NodeJS.ProcessEnv,
): NodeJS.ProcessEnv {
  const next: Record<string, string | undefined> = { ...env };
  for (const key of CURSOR_FORCED_SHELL_EGRESS_ENV_KEYS) {
    delete next[key];
  }
  return next as NodeJS.ProcessEnv;
}

/**
 * Build a fresh child ProcessEnv for mutating Cursor launches.
 * Does not mutate `baseEnv`. Caller cannot opt out.
 */
export function buildMutatingCursorConfinementEnv(
  baseEnv: NodeJS.ProcessEnv,
  options?: { readonly effectClass?: MutatingCursorConfinementEffectClass },
): NodeJS.ProcessEnv {
  const effectClass = options?.effectClass ?? "local";
  const child: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(baseEnv)) {
    if (value === undefined) continue;
    if (shouldStripKey(key, effectClass)) continue;
    child[key] = value;
  }

  child[SFIA_STUDIO_CURSOR_REAL_FLAG] = "1";
  child.GIT_TERMINAL_PROMPT = "0";
  child.GCM_INTERACTIVE = "Never";
  // Neutralize host system/global Git config for the child (local Git support).
  child.GIT_CONFIG_NOSYSTEM = "1";
  child.GIT_CONFIG_SYSTEM = "/dev/null";
  child.GIT_CONFIG_GLOBAL = "/dev/null";

  // remote_git only: after inherited GIT_CONFIG_* strip + null global/system,
  // inject an exact Product-owned github.com HTTPS credential helper overlay.
  if (effectClass === "remote_git") {
    child.GIT_CONFIG_COUNT = "1";
    child.GIT_CONFIG_KEY_0 = REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY;
    child.GIT_CONFIG_VALUE_0 = REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_VALUE;
  }

  return child as NodeJS.ProcessEnv;
}

/**
 * Local filesystem / local git effects share one credential policy.
 * Distinct from AttemptExecutionProfile kinds: filesystem+git.commit is still
 * `local` here (same strip), while local+remote is ambiguous.
 */
const LOCAL_MUTATING_EFFECTS: ReadonlySet<string> = new Set([
  "filesystem.create",
  "filesystem.modify",
  "filesystem.delete",
  "git.commit",
]);
const REMOTE_GIT_EFFECTS: ReadonlySet<string> = new Set(["git.push"]);
const REMOTE_GITHUB_EFFECTS: ReadonlySet<string> = new Set([
  "github.pr.create",
  "github.pr.merge",
]);
/** Known non-mutating executable effect — does not select a confinement class. */
const NON_MUTATING_EFFECTS: ReadonlySet<string> = new Set(["validation.run"]);

export const MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON =
  "mutating_confinement_effect_class_ambiguous" as const;

export type MutatingCursorConfinementInput = {
  /** Server-owned authorized effects on the launch request. */
  readonly authorizedEffects?: readonly string[] | null;
  /**
   * Sealed AuthorizedExecutionSlice.authorizedEffects when the launch carries one.
   * Disagreement with `authorizedEffects` fails closed.
   */
  readonly sealedAuthorizedEffects?: readonly string[] | null;
  readonly isLocalCommitProfile?: boolean;
  readonly isRemotePushProfile?: boolean;
  readonly isPrCreateProfile?: boolean;
  readonly isPrMergeProfile?: boolean;
};

export type MutatingCursorConfinementResolution =
  | {
      readonly ok: true;
      readonly apply: false;
    }
  | {
      readonly ok: true;
      readonly apply: true;
      readonly effectClass: MutatingCursorConfinementEffectClass;
    }
  | {
      readonly ok: false;
      readonly reason: typeof MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON;
    };

function uniqueEffectSet(effects: readonly string[]): Set<string> {
  return new Set(effects);
}

function sameEffectSet(a: readonly string[], b: readonly string[]): boolean {
  const left = uniqueEffectSet(a);
  const right = uniqueEffectSet(b);
  if (left.size !== right.size) return false;
  for (const effect of left) {
    if (!right.has(effect)) return false;
  }
  return true;
}

function classesFromEffects(effects: readonly string[]): {
  local: boolean;
  remoteGit: boolean;
  remoteGithub: boolean;
  unknown: boolean;
} {
  let local = false;
  let remoteGit = false;
  let remoteGithub = false;
  let unknown = false;
  for (const effect of effects) {
    if (LOCAL_MUTATING_EFFECTS.has(effect)) local = true;
    else if (REMOTE_GIT_EFFECTS.has(effect)) remoteGit = true;
    else if (REMOTE_GITHUB_EFFECTS.has(effect)) remoteGithub = true;
    else if (NON_MUTATING_EFFECTS.has(effect)) continue;
    else unknown = true;
  }
  return { local, remoteGit, remoteGithub, unknown };
}

/**
 * Classify mutating Cursor child-env policy from authorized effects and sealed
 * profile flags. Mixed classes and unknown effect ids fail closed (never remote_git
 * by precedence). Empty / validation-only input does not apply mutating confinement.
 */
export function resolveMutatingCursorConfinement(
  input: MutatingCursorConfinementInput,
): MutatingCursorConfinementResolution {
  const requestEffects = input.authorizedEffects ?? null;
  const sealedEffects = input.sealedAuthorizedEffects ?? null;
  if (
    requestEffects != null &&
    sealedEffects != null &&
    !sameEffectSet(requestEffects, sealedEffects)
  ) {
    return {
      ok: false,
      reason: MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON,
    };
  }

  const effects = sealedEffects ?? requestEffects;
  const fromEffects =
    effects == null
      ? {
          local: false,
          remoteGit: false,
          remoteGithub: false,
          unknown: false,
        }
      : classesFromEffects(effects);

  if (fromEffects.unknown) {
    return {
      ok: false,
      reason: MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON,
    };
  }

  const local = fromEffects.local || input.isLocalCommitProfile === true;
  const remoteGit = fromEffects.remoteGit || input.isRemotePushProfile === true;
  const remoteGithub =
    fromEffects.remoteGithub ||
    input.isPrCreateProfile === true ||
    input.isPrMergeProfile === true;

  let classCount = 0;
  if (local) classCount += 1;
  if (remoteGit) classCount += 1;
  if (remoteGithub) classCount += 1;
  if (classCount > 1) {
    return {
      ok: false,
      reason: MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON,
    };
  }
  if (classCount === 0) return { ok: true, apply: false };

  const effectClass: MutatingCursorConfinementEffectClass = remoteGit
    ? "remote_git"
    : remoteGithub
      ? "remote_github"
      : "local";
  return { ok: true, apply: true, effectClass };
}

/**
 * True when mutating confinement must be considered.
 * Ambiguous input returns true so callers cannot fall through to host-credential
 * inheritance. Effect class for that case fails closed via
 * {@link resolveMutatingCursorConfinement}.
 */
export function isMutatingGcecCursorProfile(
  input: MutatingCursorConfinementInput,
): boolean {
  const resolved = resolveMutatingCursorConfinement(input);
  if (!resolved.ok) return true;
  return resolved.apply;
}

export function resolveMutatingConfinementEffectClass(
  input: MutatingCursorConfinementInput,
): MutatingCursorConfinementEffectClass {
  const resolved = resolveMutatingCursorConfinement(input);
  if (!resolved.ok) {
    throw new Error(resolved.reason);
  }
  if (!resolved.apply) {
    throw new Error("mutating_confinement_not_applicable");
  }
  return resolved.effectClass;
}

```

### Diff — `studioCursorRealLaunchGateway.ts` (confinement wiring)

```diff
commit ff653b587a75b9ff92472cb4e4350239c087c9e9
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Oct 25 18:09:13 2026 +0100

    fix(studio): reconcile structural removal CI and generic Cursor confinement

    Effect-based mutating Cursor confinement replaces the retired docs_write flag; Product Binding probes use sealed env identity; historical Binding/docs_write suites are adapted or retired with residual CI failures explicit.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index c55c48d7..13fc9462 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -55,8 +55,7 @@ import {
 } from "../domain/shellSafeArg";
 import {
   buildMutatingCursorConfinementEnv,
-  isMutatingGcecCursorProfile,
-  resolveMutatingConfinementEffectClass,
+  resolveMutatingCursorConfinement,
   stripInheritedCursorShellEgressEnv,
 } from "./mutatingCursorConfinementEnv";

@@ -929,24 +928,34 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           instruction,
         ];

-    // D-GCEC-CONF-02A / D-GCEC-EXEC-01: mutating A+B+C+D+E get server-owned env
-    // confinement; effect-sensitive (local vs remote_git vs remote_github).
-    // RO / other profiles keep minimal non-mutating spawn env (no auth strip).
-    // Prompt forbids remain defense-in-depth — NOT the technical authority boundary.
-    // Proves REMOTE AUTH ENVIRONMENT POLICY only — NOT AUTH REAL.
-    const childEnv: NodeJS.ProcessEnv = isMutatingGcecCursorProfile({
-      isDocsWrite: false,
+    // D-GCEC-CONF-02A / D-GCEC-EXEC-01: confinement follows authorized effects
+    // and sealed profile flags (local FS / local commit / remote_git / remote_github).
+    // Not a docs_write flag. RO / no mutating effects keep non-mutating spawn env.
+    // Mixed or unknown effect classes fail closed before spawn — never remote_git
+    // by precedence. Prompt forbids remain defense-in-depth — NOT the authority
+    // boundary. Proves REMOTE AUTH ENVIRONMENT POLICY only — NOT AUTH REAL.
+    const confinement = resolveMutatingCursorConfinement({
+      authorizedEffects: request.authorizedEffects,
+      sealedAuthorizedEffects:
+        request.authorizedExecutionSlice?.authorizedEffects,
       isLocalCommitProfile,
       isRemotePushProfile,
       isPrCreateProfile,
       isPrMergeProfile,
-    })
+    });
+    if (!confinement.ok) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: confinement.reason,
+        realProcessInvoked: false,
+        detailCode: "REAL_AGENT_PROFILE_INVALID",
+      };
+    }
+    const childEnv: NodeJS.ProcessEnv = confinement.apply
       ? buildMutatingCursorConfinementEnv(this.env, {
-          effectClass: resolveMutatingConfinementEffectClass({
-            isRemotePushProfile,
-            isPrCreateProfile,
-            isPrMergeProfile,
-          }),
+          effectClass: confinement.effectClass,
         })
       : stripInheritedCursorShellEgressEnv({
           ...this.env,

```

---

## 6. P1 — Project / cycle routing

- Product Binding on Project remains retired.
- `projectWorkspaceKey` + `projects/<key>/<cycle>/<file>` preserved.
- Write-mode CREATE/UPDATE/ASK for automatic roots uses **sealed env probe identity** + managed base (not Product Binding).
- Snippet (`activeCycleGovernedContinuation`):

```
const probeIdentity =
    repositoryBinding?.identity?.trim() ||
    resolveSealedGitTargetFromEnv()?.identity?.trim() ||
    null;

  if (isAutomaticRoot && probeIdentity) {
    if (!managedBase) {
      return {
        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
        activeCycle,
        repositoryBinding,
        needsTargetClarification: true,
        clarificationReason: "repository_fact_unavailable",
        enrichedExecutionIntent: {
          ...(enriched.executionIntent ?? {}),
          intentKind: "other",
          targetPath: enriched.executionIntent?.targetPath ?? null,
          artifactWriteMode: "ASK",
        },
      };
    }

    const collision = await qualifyProjectWorkspaceCollision({
      oa: input.oa,
      projectId: input.project.projectId,
      pathRoot,
      workspaceKey: projectWorkspaceKey,
      identity: probeIdentity,
      managedRepoRootBase: ma
```

- Generic PREPARE documentary target also classifies write-mode when automatic (fail-closed ASK if managed/probe unavailable):

```
CR-PWR-02 — CREATE/UPDATE/ASK for automatic Project workspaces.
  // Probe identity is the sealed Git-target env witness (not Product Binding).
  let sealedIntent: ExecutionIntentPayload = { ...enriched.executionIntent };
  const automaticRoot = binding.pathRoot.trim();
  if (isAutomaticProjectWorkspacePathRoot(automaticRoot)) {
    const managedBase = resolveManagedRepoRootBaseFromEnv();
    const probeIdentity =
      resolveSealedGitTargetFromEnv()?.identity?.trim() || null;
    if (!managedBase || !probeIdentity) {
      return {
        kind: "needs_clarification",
        analysis: {
          ...analysis,
          executionIntent: {
            ...sealedIntent,
            artifactWriteMode: "ASK",
          },
        },
        code: "DOCUMENTARY_TARGET_UNRESOLVED",
        message:
          "Fait dépôt managé indisponible pour classer CREATE/UPDATE — clarification Pilote requise (fail-closed).",
        documentaryTargetResolution: "unresolved_needs_clarification",
        resolvedAuthoritativeTargetPath: null,
      };
    }

    const targetExists = probeManagedRepoRelativePathExists({
      identity: probeIdentity,
      repoRelativePath: resolvedPath,
      managedR
```

- FakeProvider: natural materialization **no longer** stamps `continuationKind: active_cycle_artifact_materialization` (that blocked Generic PREPARE / GOVERNED path incorrectly with null operation).

---

## 7. P1 — Generic PREPARE / authority

- PREPARE ≠ AUTHORIZE ≠ EXECUTE preserved.
- p6 der16 / SHE / mHd01 / mHd02 suites adapted to non-docs_write intentKinds → **PASS** in the 65-set.
- Materiality seals `repositoryIdentity` from env witness (`resolveSealedGitTargetFromEnv`) — residual naming `repositoryBindingIdentity` KEEP.
- Residuals remain on Git lifecycle profile resolution and M3 docs_write-shaped prepare.

---

## 8. Validations

| Check | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (pre-existing unused-var warnings only) |
| `npm run build` | PASS |
| P0 confinement Vitest | PASS |
| PWR + natural + NELC + importBoundaries | PASS |
| 65 formerly-failing files (local) | 21 PASS / 44 FAIL · 828/160 tests |
| Full suite vs CI parity | **Not claimed CI PASS** — residuals explicit |
| Binding restore | **NONE** |
| docs_write Product admission restore | **NONE** |
| REAL / G-REAL / G-ACTIVATION | **NOT GRANTED / NOT INVOKED** |

---

## 9. R23 / R24

### R23 (qualification)
| Area | Coverage |
|---|---|
| Effect-based confinement | **BEHAVIOR PROVEN** DET |
| O-01 Project without Binding | **BEHAVIOR PROVEN** DET (CR-PWR-04) |
| Workspace routing CREATE/UPDATE/ASK | **BEHAVIOR PROVEN** DET (PWR journey) |
| Natural → generalist / Generic PREPARE | **BEHAVIOR PROVEN** DET |
| M3 docs_write Execute TOCTOU | **KNOWN GAP** (retired specialized path) |
| Full CI green | **KNOWN GAP / residual** |

### R24
- Roadmap CURRENT TIP updated: **AKG-M5 PR #618 CI RECONCILIATION + CURSOR CONFINEMENT**
- PRR 05 / 07 / 08 / 09 overlays updated (AS-IMPLEMENTED local candidate ≠ CURRENT ON MAIN)
- C1 D-PC-09: **no semantic amend**

---

## 10. Files modified / created / deleted (commit `ff653b58`)

34 files, +788 / −1808. See `git show --stat ff653b58`. No Delivery delete of Binding/docs_write APIs reintroduced. `.tmp-sfia-review/**` excluded.

---

## 11. Commit / push / PR / CI

| Item | Value |
|---|---|
| Commit | `ff653b587a75b9ff92472cb4e4350239c087c9e9` |
| Message | `fix(studio): reconcile structural removal CI and generic Cursor confinement` |
| Push | fast-forward `15d3bd39..ff653b58` |
| PR #618 | OPEN, **DRAFT**, headOid = corrective SHA |
| New PR | **NONE** |
| Merge | **NONE** |
| Post-push CI | Workflow `40215089725` **in_progress** at pack time — **PENDING** (do not invent SUCCESS/FAIL) |

---

## 12. Accepted regressions / KNOWN GAPS

- Historical docs_write Product admission / Binding SoT remain retired (Morris).
- 44 suites still red locally in the baseline-fail set (Git lifecycle, M3 docs_write execute/prepare shapes, monolithic GCEC, corrProof*, UI, liveManagedRepo).
- Deterministic Fake Execute via generalist for PWR TOCTOU E2E not re-proven (routing→Authorize kept).
- Full Vitest CI result after `ff653b58` = **PENDING** at handoff.

---

## 13. Verdict

**B. CORRECTION IMPLEMENTED — CI FAIL / RESIDUALS EXPLICIT — CRITICAL REVIEW REQUIRED**

(Security P0 confinement + O-01 routing invariants corrected and DET-proven; CI not claimed PASS; residuals catalogued; PR remains DRAFT.)

### Gate suivant Morris
1. Relire handoff distant + diff PR #618 @ `ff653b58`
2. Attendre / interpréter CI `40215089725`
3. Critical PR Review — **ne pas** exiger rétablissement Binding/docs_write
4. Merge GO = décision Morris distincte (not this cycle)

### Interdictions respectées
≠ MERGE READY · ≠ MERGED ON MAIN · ≠ RETIRED ON MAIN · ≠ POST-MERGE VERIFIED · ≠ H4 REAL PASS · ≠ G-REAL · ≠ G-ACTIVATION · ≠ P6 GLOBAL PASS · ≠ RUNTIME V3 ADOPTED

---

## 14. Instruction ChatGPT

Relire le handoff distant. Contrôler le diff Git de PR #618. Vérifier le confinement Cursor (effets autorisés), les invariants Generic Execution, la cohérence Product O-01, et le statut CI post-push. Ne pas exiger le rétablissement des mécanismes retirés. Ne recommander un GO merge que lorsque les risques bloquants sont levés et que les preuves permettent une PR readiness satisfaisante.
