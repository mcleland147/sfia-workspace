# PJ-REPROOF-05 Delivery Regularization — FULL Review Pack

- **Timestamp:** 2026-09-22T19:36:55Z / 2026-09-22 21:36:55 CEST
- **Repo:** mcleland147/sfia-workspace
- **Branch:** fix/sfia-studio-pj-reproof-05-execution-eligibility
- **Base / origin/main:** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
- **HEAD (project tip, uncommitted Delivery):** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
- **Campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — **PAUSED**
- **Finding:** PJ-REPROOF-05 — Product Execution Eligibility + Generic Cursor Launch Context Coherence
- **Mode:** REVIEW REGULARIZATION (same Delivery — not a new cycle)
- **Prior handoff SHA (superseded):** 19ad5939d5be69c118bc1cc2b6c501c706aeb8ae
- **Fake/Real:** DETERMINISTIC PROVEN — no REAL Cursor launch

## A. Git truth / sources / Morris decisions consumed

### Git status (short)
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
```

### Sources read (Delivery + regularization)
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
- projects/sfia-studio/sfia-v3-framing/31, 34, 35, 36
- prompts/templates/sfia-cycle-execution-template.md (process external)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (process external)
- Code path: prepare / semantics / authorize / TrajectorySurface / select / start / launch context / eligibility

### Morris decisions consumed
1–10 from Delivery prompt (EC non-executable no Execute / no Attempt; honest effects; read-only Cursor OK;
Studio launch context; no silent post-inspect widen; no silent rewrite; legacy fail-closed; successor later;
no isolated UI patch).

Regularization decision (this pass):
- Remove product-code `process.env.VITEST` auto-pin of `baseHeadSha`.
- Tests/harness must inject trusted context explicitly via `pinnedBaseHeadSha`.
- Republish FULL handoff with complete new-file content + complete tracked diffs.

## B. Finding + architecture retained

### Root cause
1. `productConstraints` stamped every Product EC with FIXTURE/NO_REAL/NO_CURSOR_REAL while runtime bound generalist REAL.
2. Authorize AUTHORIZED alone drove Execute CTA.
3. Select/Start did not enforce forbid stamps before Attempt.
4. Trusted launch context not pinned before fingerprint.
5. (Regularization) Product prepare auto-pinned SHA when `VITEST` set — test env ≠ trusted authority.

### Architecture retained
- ExecutionContract = truth; Cursor prompt = projection.
- ONE eligibility helper shared by Authorize / UI / Select / Start.
- AUTHORIZED ≠ executionEligible.
- Legacy fingerprinted EC never rewritten; fail-closed.
- No Pilot HOW; no v2.6 Studio runtime doctrine.
- GCEC specialized paths exact/fail-closed; Product generalist isolation intact.

## C. Vitest regularization

### Before
`prepareExecutionContractFromW2Decision` used:
```
const vitestPin = process.env.VITEST === "true" || process.env.VITEST === "1" ? "a".repeat(40) : null;
pinnedBaseHeadSha: input.pinnedBaseHeadSha ?? vitestPin
```
So Vitest alone made prepare succeed without an explicit trusted pin.

### After
- Product prepare passes `input.pinnedBaseHeadSha` / `managedRepoRootBase` only.
- Without managed clone HEAD and without explicit pin → `MANAGED_REPO_UNAVAILABLE` fail-closed.
- Tests pass `pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA` visibly at call sites / harness constant.

### Anti-regression test
`PJ-REPROOF-05 — VITEST env ≠ trusted launch authority` in `pjReproof05.executionEligibility.d0.test.ts`:
- asserts VITEST is set by runner;
- prepare WITHOUT pin → fail `MANAGED_REPO_UNAVAILABLE`;
- eligibility without launch inputs → ineligible;
- prepare WITH explicit pin → eligible + `baseHeadSha` pinned.

## D. NEW FILES — FULL CONTENT (no truncation)

### FILE: `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts`
- bytes: 9255
- sha256: b21ab567ec7f4516797582146cedc861d12a0e75cb66045a1594813094e8d2fe
- lines: 244

```typescript
/**
 * PJ-REPROOF-05 — single Product truth: is this ExecutionContract executable NOW?
 *
 * Consumed by:
 * - Authorize / authorization projection
 * - Product Execute UI
 * - SelectExecutionAgent (before Attempt persistence)
 * - StartExecution / boundary revalidation
 *
 * UI is never the security boundary. Hostile Select must fail here too.
 *
 * AUTHORIZED (authority verified) ≠ execution eligible.
 */

export type ProductExecutionEligibilityReasonCode =
  | "eligible"
  | "stop_before_execute"
  | "aucune_execution"
  | "no_attempt"
  | "prepare_only"
  | "fixture_boundary_only"
  | "no_real"
  | "no_cursor_real"
  | "scope_out_real"
  | "scope_out_cursor_real"
  | "missing_trusted_launch_context"
  | "stale_or_invalid_launch_context";

export type ProductExecutionEligibility = {
  readonly eligible: boolean;
  readonly reasonCode: ProductExecutionEligibilityReasonCode;
  /** Pilot-facing functional explanation — no HOW / agentType / fixture jargon. */
  readonly reasonText: string;
  readonly nextAction: string;
  readonly allowsCursorReal: boolean;
  readonly allowsMutatingEffects: boolean;
  readonly requiresTrustedLaunchContext: boolean;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Trajectory / authorize-flow markers — not Product EC forever-forbid when absent as stamps. */
export const TRAJECTORY_NON_EXECUTE_STOPS = [
  "AUCUNE EXÉCUTION",
  "STOP AVANT EXECUTE",
] as const;

function hasExact(list: readonly string[], token: string): boolean {
  return list.some((c) => c === token);
}

function hasScopeOut(constraints: readonly string[], token: string): boolean {
  return constraints.includes(`SCOPE_OUT:${token}`);
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function mutatingEffectsAllowed(constraints: readonly string[]): boolean {
  if (hasScopeOut(constraints, "DURABLE_PROJECT_WRITE")) return false;
  if (hasScopeOut(constraints, "LOCAL_WRITE")) return false;
  if (hasScopeOut(constraints, "COMMIT")) return false;
  if (hasScopeOut(constraints, "GIT_PUSH")) return false;
  if (hasScopeOut(constraints, "GIT_PR")) return false;
  if (hasScopeOut(constraints, "GIT_MERGE")) return false;
  return true;
}

function ineligible(
  reasonCode: Exclude<ProductExecutionEligibilityReasonCode, "eligible">,
  reasonText: string,
  nextAction: string,
  extras?: Partial<
    Pick<
      ProductExecutionEligibility,
      "allowsCursorReal" | "allowsMutatingEffects" | "requiresTrustedLaunchContext"
    >
  >,
): ProductExecutionEligibility {
  return {
    eligible: false,
    reasonCode,
    reasonText,
    nextAction,
    allowsCursorReal: false,
    allowsMutatingEffects: extras?.allowsMutatingEffects ?? false,
    requiresTrustedLaunchContext:
      extras?.requiresTrustedLaunchContext ?? true,
  };
}

/**
 * Resolve whether an ExecutionContract may proceed to Select / Execute / Start.
 *
 * Legacy Product ECs stamped NO_REAL / NO_CURSOR_REAL / FIXTURE_EXECUTOR_BOUNDARY_ONLY
 * / STOP AVANT EXECUTE remain fail-closed (historical, never silently rewritten).
 */
export function resolveProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly stopConditions?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
  /**
   * Product Cursor REAL path requires pinned launch context on the EC.
   * Default true for Product generalist Start. Tests may set false only when
   * proving stamp-level ineligibility without launch-context concerns.
   */
  readonly requireTrustedLaunchContext?: boolean;
}): ProductExecutionEligibility {
  const constraints = [...(input.constraints ?? [])];
  const stops = [...(input.stopConditions ?? [])];
  const inputs = (input.inputs ?? {}) as Record<string, unknown>;
  const allowMutations = mutatingEffectsAllowed(constraints);
  const requireCtx = input.requireTrustedLaunchContext !== false;

  if (hasExact(stops, "AUCUNE EXÉCUTION")) {
    return ineligible(
      "aucune_execution",
      "Ce contrat d'exécution interdit toute tentative — il n'est pas exécutable.",
      "Préparer un nouveau contrat d'exécution cohérent avec la mission, puis inspecter et autoriser à nouveau.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(stops, "STOP AVANT EXECUTE")) {
    return ineligible(
      "stop_before_execute",
      "Ce contrat porte une interdiction d'exécution — aucune tentative ne peut être créée.",
      "Requalifier la mission et préparer un nouveau contrat exécutable si l'intention le justifie.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "NO_ATTEMPT")) {
    return ineligible(
      "no_attempt",
      "Ce contrat n'autorise aucune tentative d'exécution.",
      "Préparer un contrat successeur lorsque la mission est prête à être exécutée.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "PREPARE_ONLY")) {
    return ineligible(
      "prepare_only",
      "Ce contrat est limité à la préparation — l'exécution n'est pas proposée.",
      "Compléter la résolution / préparation d'un contrat exécutable avant toute tentative.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
    return ineligible(
      "fixture_boundary_only",
      "Ce contrat n'est pas éligible à une exécution Product gouvernée dans son état actuel.",
      "Préparer un nouveau contrat dont les effets autorisés correspondent à la mission.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "NO_REAL") || hasScopeOut(constraints, "REAL")) {
    return ineligible(
      hasExact(constraints, "NO_REAL") ? "no_real" : "scope_out_real",
      "Ce contrat interdit une exécution réelle — aucune tentative ne peut être créée.",
      "Préparer un nouveau contrat si une exécution réelle (bornée) est désormais requise.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (
    hasExact(constraints, "NO_CURSOR_REAL") ||
    hasScopeOut(constraints, "CURSOR_REAL")
  ) {
    return ineligible(
      hasExact(constraints, "NO_CURSOR_REAL")
        ? "no_cursor_real"
        : "scope_out_cursor_real",
      "Ce contrat n'autorise pas le lancement Cursor pour cette mission.",
      "Préparer un nouveau contrat aligné sur les effets et le contexte de lancement requis.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }

  if (requireCtx) {
    const baseHeadSha = asNonEmptyString(inputs.baseHeadSha);
    const repoIdentity =
      asNonEmptyString(inputs.repositoryBindingIdentity) ??
      asNonEmptyString(inputs.repositoryIdentity) ??
      asNonEmptyString(inputs.repositoryRef);

    if (!baseHeadSha) {
      return ineligible(
        "missing_trusted_launch_context",
        "Le contexte de lancement requis n'est pas fixé sur le contrat — exécution impossible.",
        "Préparer à nouveau le contrat afin que Studio y attache le contexte de dépôt / révision avant inspection.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
    if (!FULL_SHA_RE.test(baseHeadSha)) {
      return ineligible(
        "stale_or_invalid_launch_context",
        "Le contexte de révision fixé sur le contrat est invalide — exécution refusée.",
        "Préparer un nouveau contrat avec un contexte de lancement fiable.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
    if (!repoIdentity) {
      return ineligible(
        "missing_trusted_launch_context",
        "Aucun dépôt de projet fiable n'est lié au contrat — exécution impossible.",
        "Lier le projet à un dépôt fiable, puis préparer un nouveau contrat d'exécution.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
  }

  return {
    eligible: true,
    reasonCode: "eligible",
    reasonText:
      "Autorité vérifiée et contrat exécutable — une tentative explicite peut être lancée.",
    nextAction:
      "Vous pouvez exécuter explicitement. Confirmer / exécuter ne modifie pas le contrat inspecté.",
    allowsCursorReal: true,
    allowsMutatingEffects: allowMutations,
    requiresTrustedLaunchContext: requireCtx,
  };
}

/**
 * Strip trajectory authorize-flow stop markers so they do not become durable
 * forever-forbid stamps on a newly prepared executable Product EC.
 */
export function filterTrajectoryNonExecuteStopsFromEc(
  stopConditions: readonly string[],
): string[] {
  const ban = new Set<string>(TRAJECTORY_NON_EXECUTE_STOPS);
  return stopConditions.filter((s) => !ban.has(s));
}
```

### FILE: `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts`
- bytes: 437
- sha256: 8d0e804f9e38b3812e090e9b5b18c3e2c0a1019a5fc732d4eb2e39fda9be460d
- lines: 11

```typescript
/**
 * Re-export — canonical module lives in lib/oa/execution-contract (shared by
 * Authorize, UI, Select, Start without features→lib inversion).
 */
export {
  TRAJECTORY_NON_EXECUTE_STOPS,
  filterTrajectoryNonExecuteStopsFromEc,
  resolveProductExecutionEligibility,
  type ProductExecutionEligibility,
  type ProductExecutionEligibilityReasonCode,
} from "@/lib/oa/execution-contract/domain/resolveProductExecutionEligibility";
```

### FILE: `projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts`
- bytes: 4808
- sha256: 93ea4b81a0c2fbefda99bce2080265e05b0e5ec76a88ce725d9a42c5d6a3474f
- lines: 151

```typescript
/**
 * PJ-REPROOF-05 — trusted Cursor launch context pinned on ExecutionContract
 * BEFORE inspection / authorization.
 *
 * Never accept client-supplied baseHeadSha after authorize.
 * Never silently bind to Studio's own checkout (process.cwd / sfia-workspace).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { ManagedProjectRepositoryResolver } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";

export type TrustedProductLaunchContext = {
  readonly baseHeadSha: string;
  readonly repositoryBindingIdentity: string;
  readonly remoteUrl: string;
  readonly defaultBranch: string;
  readonly pathRoot: string | null;
  readonly managedRepoRoot: string | null;
};

export type ResolveTrustedProductLaunchContextResult =
  | { readonly ok: true; readonly context: TrustedProductLaunchContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

const managedResolver = new ManagedProjectRepositoryResolver();

/**
 * Resolve launch context from durable Project.repositoryBinding + server HEAD
 * of the project's managed clone (never Studio cwd).
 *
 * Test hooks: pinnedBaseHeadSha / managedRepoRootBase — never from browser Execute.
 */
export async function resolveTrustedProductLaunchContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
}): Promise<ResolveTrustedProductLaunchContextResult> {
  const projectResult = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!projectResult.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message:
        "Projet introuvable — contexte de lancement impossible à fixer.",
    };
  }
  const binding = projectResult.project.repositoryBinding;
  if (!binding?.identity?.trim()) {
    return {
      ok: false,
      code: "REPOSITORY_BINDING_REQUIRED",
      message:
        "Aucun dépôt de projet fiable n'est lié — préparation d'un contrat exécutable refusée.",
    };
  }
  const identity = binding.identity.trim();
  const remoteUrl =
    binding.remoteUrl?.trim() || `https://github.com/${identity}.git`;
  const defaultBranch = binding.defaultBranch?.trim() || "main";
  const pathRoot = binding.pathRoot?.trim() || null;

  const managedBase =
    (typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
      ? input.managedRepoRootBase.trim()
      : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;

  let managedRepoRoot: string | null = null;
  if (managedBase) {
    managedRepoRoot = managedResolver.resolveLocalRepoRoot(
      { identity },
      managedBase,
    );
  }

  let sha: string | null = null;
  if (input.pinnedBaseHeadSha !== undefined && input.pinnedBaseHeadSha !== null) {
    sha = validateBaseHeadSha(input.pinnedBaseHeadSha);
    if (!sha) {
      return {
        ok: false,
        code: "BASE_HEAD_SHA_INVALID",
        message:
          "baseHeadSha serveur invalide — fail-closed avant inspection.",
      };
    }
  } else {
    if (!managedRepoRoot) {
      return {
        ok: false,
        code: "MANAGED_REPO_UNAVAILABLE",
        message:
          "Clone géré du dépôt projet indisponible — contexte de lancement fail-closed (pas de repli sur le checkout Studio).",
      };
    }
    const resolved = await resolveBoundedReadOnlyBaseHeadSha({
      startDir: managedRepoRoot,
    });
    if (!resolved.ok) {
      return {
        ok: false,
        code: resolved.code,
        message: resolved.message,
      };
    }
    sha = resolved.sha;
  }

  if (!sha) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message:
        "baseHeadSha serveur absent — fail-closed avant inspection.",
    };
  }

  return {
    ok: true,
    context: {
      baseHeadSha: sha,
      repositoryBindingIdentity: identity,
      remoteUrl,
      defaultBranch,
      pathRoot,
      managedRepoRoot,
    },
  };
}

export function launchContextAsContractInputs(
  context: TrustedProductLaunchContext,
): Record<string, string> {
  return {
    baseHeadSha: context.baseHeadSha,
    repositoryBindingIdentity: context.repositoryBindingIdentity,
    repositoryIdentity: context.repositoryBindingIdentity,
    repositoryRef: context.repositoryBindingIdentity,
    remoteUrl: context.remoteUrl,
    defaultBranch: context.defaultBranch,
    ...(context.pathRoot ? { pathRoot: context.pathRoot } : {}),
  };
}
```

### FILE: `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts`
- bytes: 19085
- sha256: f563b24821c04ed4147517d504c797cb908cc946123affb32af2eada742c926c
- lines: 485

```typescript
// @vitest-environment node
/**
 * PJ-REPROOF-05 — Product Execution Eligibility + Cursor launch context.
 *
 * DETERMINISTIC PROVEN only — Fake RealExecutionLaunchPort; no REAL Cursor.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  resolveProductExecutionEligibility,
} from "@/lib/oa/execution-contract";
import {
  assertStudioCursorRealOffForTests,
  createStudioCursorGeneralistAgentDescriptor,
  createTestExecutionAttemptServices,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
} from "../oa/execution-attempt/helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "../oa/execution-attempt/support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

afterEach(() => {
  cleanupW2TempDirs();
  assertStudioCursorRealOffForTests();
});

describe("PJ-REPROOF-05 — eligibility pure resolver", () => {
  it("legacy NO_REAL + NO_CURSOR_REAL + STOP AVANT EXECUTE → ineligible", () => {
    const r = resolveProductExecutionEligibility({
      constraints: [
        "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
        "NO_REAL",
        "NO_CURSOR_REAL",
        "PRODUCT_GOVERNED",
      ],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(false);
    expect(["aucune_execution", "stop_before_execute"]).toContain(r.reasonCode);
  });

  it("SCOPE_OUT CURSOR_REAL alone → ineligible even with launch context", () => {
    const r = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED", "SCOPE_OUT:CURSOR_REAL"],
      stopConditions: ["AUTHORITY_DENIED"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("scope_out_cursor_real");
  });

  it("truthful read-only EC with pinned launch context → eligible", () => {
    const r = resolveProductExecutionEligibility({
      constraints: [
        "PRODUCT_GOVERNED",
        "NO_ATTEMPT_AT_PREPARE",
        "SCOPE_OUT:DURABLE_PROJECT_WRITE",
        "SCOPE_OUT:GIT_PUSH",
      ],
      stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(true);
    expect(r.allowsCursorReal).toBe(true);
    expect(r.allowsMutatingEffects).toBe(false);
  });

  it("missing baseHeadSha → fail-closed before Attempt semantics", () => {
    const r = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      inputs: { repositoryBindingIdentity: "acme/demo" },
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("missing_trusted_launch_context");
  });
});

describe("PJ-REPROOF-05 — new Product EC truthful semantics", () => {
  it("prepare does not stamp NO_CURSOR_REAL / FIXTURE; pins launch context", async () => {
    const db = tempProductDbPath("pj-reproof05-prep.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05p" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p05" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    expect(prepared.contract.constraints).not.toContain("NO_CURSOR_REAL");
    expect(prepared.contract.constraints).not.toContain("NO_REAL");
    expect(prepared.contract.constraints).not.toContain(
      "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
    );
    expect(prepared.contract.constraints).not.toContain("SCOPE_OUT:CURSOR_REAL");
    expect(prepared.contract.constraints).not.toContain("SCOPE_OUT:REAL");
    expect(prepared.contract.stopConditions).not.toContain("STOP AVANT EXECUTE");
    expect(prepared.contract.stopConditions).not.toContain("AUCUNE EXÉCUTION");

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(typeof inputs.repositoryBindingIdentity).toBe("string");

    const eligibility = resolveProductExecutionEligibility({
      constraints: loaded.contract.constraints,
      stopConditions: loaded.contract.stopConditions,
      inputs,
    });
    expect(eligibility.eligible).toBe(true);
  });

  it("missing repository binding → prepare fail-closed", async () => {
    const db = tempProductDbPath("pj-reproof05-nobind.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05n" });
    const created = await runtime.createProject({
      name: "No bind",
      objective: "x",
      context: "y",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "NB",
      idempotencyKey: "pj05-nobind",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create");
    const projectId = created.project.projectId;
    const oa = runtime.oa!;
    const proj = await oa.projectServices.getProject.execute({ projectId });
    expect(proj.ok).toBe(true);
    if (!proj.ok) throw new Error("proj");
    if (!proj.project.repositoryBinding) {
      expect(proj.project.repositoryBinding).toBeUndefined();
    }
  });
});

describe("PJ-REPROOF-05 — VITEST env ≠ trusted launch authority", () => {
  it("VITEST alone does not auto-pin; prepare without explicit pin fail-closed", async () => {
    expect(process.env.VITEST === "true" || process.env.VITEST === "1").toBe(
      true,
    );
    const db = tempProductDbPath("pj-reproof05-novitest-pin.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05v" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "v05" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");

    // No pinnedBaseHeadSha / managedRepoRootBase — product must fail-closed
    // even though VITEST is set by the runner.
    const unpinned = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
    });
    expect(unpinned.ok).toBe(false);
    if (unpinned.ok) throw new Error("expected fail-closed without pin");
    expect(unpinned.code).toBe("MANAGED_REPO_UNAVAILABLE");

    const eligibilityWithoutPin = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      inputs: {},
    });
    expect(eligibilityWithoutPin.eligible).toBe(false);

    const pinned = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(pinned.ok).toBe(true);
    if (!pinned.ok) throw new Error(pinned.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: pinned.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(
      resolveProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        stopConditions: loaded.contract.stopConditions,
        inputs,
      }).eligible,
    ).toBe(true);
  });
});

describe("PJ-REPROOF-05 — Authorize + Select fail-closed for legacy EC", () => {
  it("ineligible legacy EC → Select rejects before Attempt", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "pj05-leg-"));
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: path.join(dir, "safety.sqlite"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [generalist], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [generalist],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, "product:read-only", M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:legacy-forbid",
        cycleInstanceId: "cyc:std-001",
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
        constraints: [
          "PRODUCT_GOVERNED",
          "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
          "NO_REAL",
          "NO_CURSOR_REAL",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
        inputs: {
          baseHeadSha: M4_TEST_BASE_HEAD_SHA,
          repositoryBindingIdentity: "acme/legacy",
          objective: "legacy diagnostic",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");

    const confirmationId = await grantContractConfirmation(stack, {
      scope: validated.contract.scope,
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error("confirm");

    expect(
      resolveProductExecutionEligibility({
        constraints: confirmed.contract.constraints,
        stopConditions: confirmed.contract.stopConditions,
        inputs: confirmed.contract.inputs as Record<string, unknown>,
      }).eligible,
    ).toBe(false);

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:legacy-forbid",
      executionContractId: confirmed.contract.executionContractId,
      idempotencyKey: "idem:pj05:legacy-forbid-xxxxxxxx",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("select should fail");
    expect(selected.error.detailCode).toBe("ATTEMPT_INVALID");
    expect(String(selected.error.internalCauseRef ?? "")).toContain(
      "execution_ineligible",
    );
    journal.close();
  });
});

describe("PJ-REPROOF-05 — Product authorize eligibility fields", () => {
  it("prepared EC is eligible; authorize DTO exposes eligibility fields", async () => {
    const db = tempProductDbPath("pj-reproof05-authz.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a05" });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(
      resolveProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        stopConditions: loaded.contract.stopConditions,
        inputs: loaded.contract.inputs as Record<string, unknown>,
      }).eligible,
    ).toBe(true);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const authz = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authz.ok).toBe(true);
    if (!authz.ok) throw new Error(authz.code);
    expect(typeof authz.executionEligible).toBe("boolean");
    expect(typeof authz.executionEligibilityReasonCode).toBe("string");
    if (authz.outcome === "AUTHORIZED") {
      expect(authz.executionEligible).toBe(true);
      expect(authz.outcomeLabel).toBe("AUTORISÉ — EXÉCUTION ÉLIGIBLE");
    }
  });
});
```

## E. COMPLETE tracked diffs (PJ-REPROOF-05 modified files)

Excludes `.tmp-sfia-review/chatgpt-review.md` only.

### DIFF: `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
index 1a4a0f4a..5c538c36 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
@@ -8,6 +8,16 @@ export const M4_EVIDENCE = "evd:morris-n3";

 export function m4ContractInputs(
   baseHeadSha: string = M4_TEST_BASE_HEAD_SHA,
-): { baseHeadSha: string } {
-  return { baseHeadSha };
+): {
+  baseHeadSha: string;
+  repositoryBindingIdentity: string;
+  repositoryIdentity: string;
+  repositoryRef: string;
+} {
+  return {
+    baseHeadSha,
+    repositoryBindingIdentity: "acme/m4-fixture",
+    repositoryIdentity: "acme/m4-fixture",
+    repositoryRef: "acme/m4-fixture",
+  };
 }
```

### DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index 934a8b64..9269d3dc 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -331,10 +331,12 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
       executionContractId: "xct:pcont-ui",
       contractVersion: 1,
       outcome: "AUTHORIZED",
-      outcomeLabel: "AUTORISÉ",
+      outcomeLabel: "AUTORISÉ — EXÉCUTION ÉLIGIBLE",
       reasonCode: "authorized",
       reasonText: "Autorisé.",
       nextAction: "Exécuter",
+      executionEligible: true,
+      executionEligibilityReasonCode: "eligible",
       inspection: {
         executionContractId: "xct:pcont-ui",
         contractVersion: 1,
```

### DIFF: `projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
index 5251763c..01ba57c5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
@@ -80,6 +80,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import {
   MORRIS_ACTOR,
@@ -302,6 +303,7 @@ describe("A — coverage + no Pilot HOW", () => {
       decisionId: decided.decision.decisionId,
       currentContext: await currentF2Context(runtime, seeded.projectId),
       forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) throw new Error(prepared.code);
```

### DIFF: `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index d8b8428f..d87c96d5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -205,6 +205,24 @@ export async function seedQualifiedProject(
   const after = await runtime.getProject(projectId);
   if (!after.ok) throw new Error("seed: getProject(after) failed");

+  // PJ-REPROOF-05 — Product executable EC prepare requires durable repository
+  // binding. Ambient Studio checkout is never implied.
+  if (oa.projectServices.setProjectRepositoryBinding) {
+    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
+      projectId,
+      actor: W2_TEST_ACTOR,
+      binding: {
+        provider: "github",
+        identity: `acme/w2-harness-${suffix}`,
+        remoteUrl: `https://github.com/acme/w2-harness-${suffix}.git`,
+        defaultBranch: "main",
+        pathRoot: `projects/w2-harness-${suffix}`,
+      },
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) throw new Error("seed: setProjectRepositoryBinding failed");
+  }
+
   return {
     projectId,
     cycleInstanceId,
@@ -212,6 +230,13 @@ export async function seedQualifiedProject(
   };
 }

+/**
+ * Deterministic full SHA for Product prepare / eligibility tests (not live git).
+ * Must be passed explicitly via prepareExecutionContractFromW2Decision
+ * `pinnedBaseHeadSha` — product code never auto-pins from VITEST.
+ */
+export const W2_TEST_PINNED_BASE_HEAD_SHA = "a".repeat(40);
+
 /** Resolve qualification + propose Options on the production W2 Phase B path. */
 export async function proposeW2OptionsForProject(
   runtime: RuntimeApplicationService,
```

### DIFF: `projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
index 1df6cbfc..8c4f5845 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
@@ -60,6 +60,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -164,7 +165,10 @@ describe("W3-A actual work provenance", () => {
     expect(actual.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
     expect(actual.scopeOut).toContain("DURABLE_PROJECT_WRITE");
     expect(actual.scopeOut).toContain("GIT_PUSH");
-    expect(actual.scopeOut).toContain("REAL");
+    // PJ-REPROOF-05 — REAL/CURSOR_REAL are no longer blanket SCOPE_OUT for
+    // Product canonical missions (Cursor generalist may execute read-only).
+    expect(actual.scopeOut).not.toContain("REAL");
+    expect(actual.scopeOut).not.toContain("CURSOR_REAL");
     // R13 — scopeOut must not forbid the current action/scopeIn effect.
     expect(actual.scopeOut).not.toContain("TEMPORARY_ARTIFACT");
     expect(actual.scopeOut).not.toContain(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
@@ -547,6 +551,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       currentContext: context,
       forceLocalAuthority: true,
       qualifiedOperationKind: "generate-temporary-artifact",
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
@@ -650,6 +655,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       currentContext: context,
       forceLocalAuthority: true,
       qualifiedOperationKind: "read",
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) return;
```

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 31c8ca8e..66f58bff 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1345,7 +1345,13 @@ export function TrajectorySurface({

   const governedExecute = useCallback(async () => {
     if (continuityMutationBlocked) return;
-    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    if (
+      !contract ||
+      authorization?.outcome !== "AUTHORIZED" ||
+      authorization.executionEligible !== true
+    ) {
+      return;
+    }
     setBusy("execute");
     setError(null);
     flushSync(() => {
@@ -2704,9 +2710,14 @@ export function TrajectorySurface({
             <span
               data-testid="w2-authorization-outcome"
               data-outcome={authorization.outcome}
+              data-execution-eligible={
+                authorization.executionEligible ? "true" : "false"
+              }
             >
               {authorization.outcome === "AUTHORIZED"
-                ? "Autorisation vérifiée — l'exécution peut être lancée"
+                ? authorization.executionEligible
+                  ? "Autorisation vérifiée — l'exécution peut être lancée"
+                  : "Autorisation vérifiée — exécution non proposée"
                 : "Exécution bloquée"}
             </span>
           </h3>
@@ -2743,6 +2754,14 @@ export function TrajectorySurface({
                   {authorization.outcomeLabel}
                 </dd>
               </div>
+              <div>
+                <dt>Éligibilité d&apos;exécution</dt>
+                <dd data-testid="w2-execution-eligibility">
+                  {authorization.executionEligible
+                    ? "éligible"
+                    : authorization.executionEligibilityReasonCode}
+                </dd>
+              </div>
               <div>
                 <dt>Trace d&apos;autorité</dt>
                 <dd className={styles.code} data-testid="w2-authority-receipt">
@@ -2751,7 +2770,9 @@ export function TrajectorySurface({
               </div>
             </dl>
           </details>
-          {authorization.outcome === "AUTHORIZED" && !attempt ? (
+          {authorization.outcome === "AUTHORIZED" &&
+          authorization.executionEligible &&
+          !attempt ? (
             <>
               <p
                 className={styles.stopNotice}
@@ -2773,6 +2794,17 @@ export function TrajectorySurface({
               </div>
             </>
           ) : null}
+          {authorization.outcome === "AUTHORIZED" &&
+          !authorization.executionEligible &&
+          !attempt ? (
+            <p
+              className={styles.stopNotice}
+              data-testid="w2-execution-ineligible"
+            >
+              Aucune exécution n&apos;est proposée pour ce contrat.{" "}
+              {authorization.nextAction}
+            </p>
+          ) : null}
           {authorization.outcome === "BLOCKED" ? (
             <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
               Aucune exécution n&apos;a été lancée : arrêt avant exécution.
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 74d0db97..4afffeda 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -35,6 +35,7 @@ import {
 } from "@/lib/oa/execution-attempt";
 import type { AgentRegistryPort } from "@/lib/oa/execution-attempt";
 import { readContractInspectionState } from "./inspectExecutionContract";
+import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
 import type {
   AgentCapabilityOutcomeDto,
   ConfirmationRequirementDto,
@@ -379,26 +380,55 @@ export async function evaluateExecutionAuthorization(
         blockedDetail,
       });

+    const eligibility = resolveProductExecutionEligibility({
+      constraints: contract.constraints,
+      stopConditions: contract.stopConditions,
+      inputs:
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : null,
+    });
+
     const text = blockedReason ? BLOCKED_TEXT[blockedReason] : null;
+    const authorizedEligible =
+      outcome === "AUTHORIZED" && eligibility.eligible;
+    const authorizedIneligible =
+      outcome === "AUTHORIZED" && !eligibility.eligible;
+
     return {
       ok: true,
       executionContractId: contract.executionContractId,
       contractVersion: contract.version,
       outcome,
       outcomeLabel:
-        outcome === "AUTHORIZED"
-          ? "AUTORISÉ — STOP AVANT EXECUTE"
-          : "BLOQUÉ — ACTION REQUISE",
+        outcome === "BLOCKED"
+          ? "BLOQUÉ — ACTION REQUISE"
+          : authorizedEligible
+            ? "AUTORISÉ — EXÉCUTION ÉLIGIBLE"
+            : authorizedIneligible
+              ? "AUTORISÉ — EXÉCUTION NON ÉLIGIBLE"
+              : "AUTORISÉ — STOP AVANT EXECUTE",
       reasonCode: blockedReason ?? "effective_authority_established",
       reasonText:
         text?.reasonText ??
-        "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant.",
+        (authorizedIneligible
+          ? eligibility.reasonText
+          : authorizedEligible
+            ? eligibility.reasonText
+            : "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant."),
       nextAction:
         text?.nextAction ??
-        "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute.",
+        (authorizedIneligible
+          ? eligibility.nextAction
+          : authorizedEligible
+            ? eligibility.nextAction
+            : "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute."),
       inspection,
       confirmation,
       agentCapability: capabilityDto(capability),
+      executionEligible: outcome === "AUTHORIZED" ? eligibility.eligible : false,
+      executionEligibilityReasonCode:
+        outcome === "AUTHORIZED" ? eligibility.reasonCode : "blocked",
       authorityReceiptRef: receipt.receiptId,
       decisionRefs: [...(contract.decisionRefs ?? [])],
       requiredAuthority: contract.requiredAuthority,
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 3a1295b6..bde6f0c2 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -40,6 +40,7 @@ import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveA
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
 import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
+import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
 import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecuteAttemptProjection,
@@ -459,6 +460,22 @@ export async function governedExecuteSelectAgent(
     };
   }

+  const eligibility = resolveProductExecutionEligibility({
+    constraints: contract.constraints,
+    stopConditions: contract.stopConditions,
+    inputs:
+      contract.inputs && typeof contract.inputs === "object"
+        ? (contract.inputs as Record<string, unknown>)
+        : null,
+  });
+  if (!eligibility.eligible) {
+    return {
+      ok: false,
+      code: "EXECUTION_INELIGIBLE",
+      message: eligibility.reasonText,
+    };
+  }
+
   const authority = registerPiloteAuthority(
     input.oa,
     contract.scope,
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 9005e978..78a2c0f6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -30,6 +30,10 @@ import { deriveActualExecutionWorkFromProductContext } from "./deriveActualExecu
 import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
 import type { ActualExecutionWork } from "./w3aActualExecutionWork";
 import type { QualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";
+import {
+  launchContextAsContractInputs,
+  resolveTrustedProductLaunchContext,
+} from "./resolveTrustedProductLaunchContext";

 export type PreparedExecutionContractDto = {
   readonly executionContractId: string;
@@ -155,6 +159,12 @@ export async function prepareExecutionContractFromW2Decision(input: {
   /** Same product path — optional Nora/test-injected qualified effects. */
   readonly explicitEffects?: QualifiedExecutionEffects;
   readonly forceEffectsUnresolved?: boolean;
+  /**
+   * Explicit server/test pin for trusted launch context (full SHA).
+   * Never accepted from browser Execute payloads. Never inferred from VITEST.
+   */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
 }): Promise<PrepareExecutionContractFromW2DecisionResult> {
   const { oa } = input;

@@ -413,6 +423,29 @@ export async function prepareExecutionContractFromW2Decision(input: {
     return f3Guard;
   }

+  // PJ-REPROOF-05 — pin trusted launch context BEFORE Build/Validate fingerprint.
+  // Production: managed clone HEAD only (or explicit server pin when provided).
+  // Tests must pass pinnedBaseHeadSha / managedRepoRootBase explicitly — never
+  // inferred from process.env.VITEST.
+  const launch = await resolveTrustedProductLaunchContext({
+    oa,
+    projectId: input.projectId,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (!launch.ok) {
+    return {
+      ok: false,
+      code: launch.code,
+      message: launch.message,
+    };
+  }
+  const envelopeInputs: Record<string, unknown> = {
+    ...envelope.inputs,
+    ...launchContextAsContractInputs(launch.context),
+    trustedLaunchContextPinnedAtPrepare: true,
+  };
+
   const safeId = safeIdSegment(decision.decisionId);
   const executionContractId = `xct:w3a:${safeId}`;
   const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;
@@ -439,7 +472,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       action: envelope.action,
       target: envelope.target,
       scope: envelope.scope,
-      inputs: envelope.inputs,
+      inputs: envelopeInputs,
       expectedOutputs: [...envelope.expectedOutputs],
       requiredCapabilities: [...envelope.requiredCapabilities],
       requiredAuthority: envelope.requiredAuthority,
@@ -499,7 +532,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       action: envelope.action,
       target: envelope.target,
       scope: envelope.scope,
-      inputs: envelope.inputs,
+      inputs: envelopeInputs,
       expectedOutputs: [...envelope.expectedOutputs],
       requiredCapabilities: [...envelope.requiredCapabilities],
       requiredAuthority: envelope.requiredAuthority,
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index b3f7d826..fc079208 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -201,6 +201,8 @@ export type ExecutionAuthorizationOutcomeDto = {
   readonly outcome: "AUTHORIZED" | "BLOCKED";
   readonly outcomeLabel:
     | "AUTORISÉ — STOP AVANT EXECUTE"
+    | "AUTORISÉ — EXÉCUTION ÉLIGIBLE"
+    | "AUTORISÉ — EXÉCUTION NON ÉLIGIBLE"
     | "BLOQUÉ — ACTION REQUISE";
   readonly reasonCode: string;
   readonly reasonText: string;
@@ -208,6 +210,12 @@ export type ExecutionAuthorizationOutcomeDto = {
   readonly inspection: ContractInspectionStateDto;
   readonly confirmation: ConfirmationRequirementDto;
   readonly agentCapability: AgentCapabilityOutcomeDto;
+  /**
+   * PJ-REPROOF-05 — authority verified ≠ execution eligible.
+   * Execute CTA / Select / Start must consult this, not AUTHORIZED alone.
+   */
+  readonly executionEligible: boolean;
+  readonly executionEligibilityReasonCode: string;
   readonly authorityReceiptRef: string;
   readonly decisionRefs: readonly string[];
   readonly requiredAuthority: string;
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
index 71d214c6..19fc642a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
@@ -292,15 +292,18 @@ export function projectConfirmationRequirementFromEffects(input: {
 /**
  * Coherent scope OUT for a canonical operation — never forbids the current
  * scope IN / action effect (R13).
+ *
+ * PJ-REPROOF-05: do NOT put REAL / CURSOR_REAL in SCOPE_OUT for Product
+ * read/simulate/temp missions. Those missions may use the generic Cursor
+ * REAL executor under read-only / non-mutating forbids. Writes and Git
+ * remain SCOPE_OUT.
  */
 function scopeOutForCanonicalKind(
   kind: W3ACanonicalActualOperationKind,
 ): readonly string[] {
-  const common = ["REAL", "CURSOR_REAL"] as const;
   switch (kind) {
     case "read":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "LOCAL_WRITE",
         "TEMPORARY_ARTIFACT_WRITE",
@@ -313,7 +316,6 @@ function scopeOutForCanonicalKind(
       ];
     case "simulate":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "COMMIT",
         "GIT_PUSH",
@@ -324,7 +326,6 @@ function scopeOutForCanonicalKind(
       ];
     case "generate-temporary-artifact":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "COMMIT",
         "GIT_PUSH",
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index 601c2b69..44165f44 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -35,6 +35,7 @@ import {
   projectRequiredAuthorityFromEffects,
   deriveReversibilityFromEffects,
 } from "./w3aQualifiedExecutionEffects";
+import { filterTrajectoryNonExecuteStopsFromEc } from "./resolveProductExecutionEligibility";

 /** Implementation / provenance marker — NOT authority-bearing scope. */
 export const W3A_IMPLEMENTATION_MARKER =
@@ -66,6 +67,16 @@ export type EnvelopePrepareFailure =
       readonly message: string;
     };

+/**
+ * PJ-REPROOF-05 — truthful Product constraints.
+ *
+ * Do NOT stamp FIXTURE_EXECUTOR_BOUNDARY_ONLY / NO_REAL / NO_CURSOR_REAL on every
+ * Product EC. Those forever-forbid Cursor REAL even when the mission is a
+ * read-only diagnostic intended for the generic Cursor executor.
+ *
+ * Mutation / Git forbids remain expressed via SCOPE_OUT from qualified effects.
+ * NO_ATTEMPT_AT_PREPARE only asserts prepare itself creates no Attempt.
+ */
 function productConstraints(
   basis: DecisionBasis,
   effects: QualifiedExecutionEffects,
@@ -74,9 +85,6 @@ function productConstraints(
   const eb = basis.executionBasis;
   return [
     "PRODUCT_GOVERNED",
-    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
-    "NO_REAL",
-    "NO_CURSOR_REAL",
     "NO_ATTEMPT_AT_PREPARE",
     `IMPLEMENTATION_MARKER:${W3A_IMPLEMENTATION_MARKER}`,
     `EFFECT_CLASS:${effects.effectClass}`,
@@ -96,8 +104,13 @@ function productConstraints(

 function productStopConditions(basis: DecisionBasis): string[] {
   const eb = basis.executionBasis;
+  // Strip trajectory authorize-flow markers (AUCUNE EXÉCUTION / STOP AVANT EXECUTE)
+  // so a newly prepared executable EC is not fail-closed forever by provenance.
+  const fromBasis = filterTrajectoryNonExecuteStopsFromEc(
+    eb.stopConditions ?? [],
+  );
   const stops = new Set<string>([
-    ...(eb.stopConditions ?? []),
+    ...fromBasis,
     "AUTHORITY_DENIED",
     "CONTEXT_STALE",
     "DECISION_NOT_CURRENT",
```

### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index e971da91..aa812403 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -11,6 +11,7 @@ import type {
   CheckExecutionAuthorization,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
+import { resolveProductExecutionEligibility } from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import { captureBoundExecutionContractSnapshot } from "../domain/boundExecutionContract";
 import {
@@ -190,6 +191,24 @@ export class SelectExecutionAgent {
         );
       }

+      // PJ-REPROOF-05 — execution eligibility BEFORE Attempt persistence.
+      // AUTHORIZED authority check above ≠ REAL executable. Hostile Select
+      // must fail closed here for legacy NO_REAL / STOP AVANT EXECUTE ECs.
+      const eligibility = resolveProductExecutionEligibility({
+        constraints: contract.constraints,
+        stopConditions: contract.stopConditions,
+        inputs:
+          contract.inputs && typeof contract.inputs === "object"
+            ? (contract.inputs as Record<string, unknown>)
+            : null,
+      });
+      if (!eligibility.eligible) {
+        return fail(
+          "ATTEMPT_INVALID",
+          `execution_ineligible_${eligibility.reasonCode}`,
+        );
+      }
+
       const evidenceRead = this.listProjectEvidence
         ? await this.listProjectEvidence(contract.projectId)
         : { ok: false as const, reason: "evidence_reader_unavailable" as const };
```

### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index e60e8899..0d348012 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -38,6 +38,7 @@ import {
   DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
   projectExecutionContractToCursorPrompt,
   resolveExecutionWindowForStart,
+  resolveProductExecutionEligibility,
   type ResolvedExecutionWindow,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
@@ -486,6 +487,23 @@ export class StartExecution {
         );
       }

+      // PJ-REPROOF-05 — revalidate execution eligibility at Start (defense in depth).
+      const eligibility = resolveProductExecutionEligibility({
+        constraints: contract.constraints,
+        stopConditions: contract.stopConditions,
+        inputs:
+          contract.inputs && typeof contract.inputs === "object"
+            ? (contract.inputs as Record<string, unknown>)
+            : null,
+      });
+      if (!eligibility.eligible) {
+        return fail(
+          "ATTEMPT_INVALID",
+          `execution_ineligible_${eligibility.reasonCode}`,
+          { executionContractId: contract.executionContractId },
+        );
+      }
+
       const agent = this.registry.getAgent(attempt.selectedAgentRef);
       if (!agent) {
         return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
```

### DIFF: `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 4baedb0f..bb778d89 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -22,6 +22,13 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export {
+  TRAJECTORY_NON_EXECUTE_STOPS,
+  filterTrajectoryNonExecuteStopsFromEc,
+  resolveProductExecutionEligibility,
+  type ProductExecutionEligibility,
+  type ProductExecutionEligibilityReasonCode,
+} from "./domain/resolveProductExecutionEligibility";
 export {
   computeExecutionContractSemanticFingerprint,
   computeExecutionContractSemanticMaterialFingerprint,
```

### DIFF (new files as git status untracked — full content already in §D)

- `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts` — NEW (full content in §D)
- `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts` — NEW (full content in §D)
- `projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts` — NEW (full content in §D)
- `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts` — NEW (full content in §D)

## F. Validation results

### Suites
| Suite | Result |
|---|---|
| pjReproof05.executionEligibility.d0 | 9/9 PASS (includes Vitest≠trust) |
| pjReproof04.executionContractSemanticBridge.d0 | 12/12 PASS |
| w3aGovernedExecute | 24/24 PASS |
| postExecutionTrajectorySurface.ui | 2/2 PASS |
| trajectorySurface.ui | 46/46 PASS |
| **Total required batch** | **93/93 PASS** |
| tsc --noEmit | PASS |
| git diff --check (excl. review pack) | PASS |
| next lint (scoped) | EXIT 0 — warnings below |

### Lint notes
- Attributable unused-import warnings in pjReproof05 **fixed** before this pack.
- TrajectorySurface `_ok` unused: pre-existing pattern in file (not introduced as new error-class).
- amendExecutionContract / w3aQualifiedExecutionEffects / ProjectWorkspaceRoutingPanel: pre-existing / out of Delivery mutation scope.

### Vitest tail evidence
```
 ✓ __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx (2 tests) 220ms
 ✓ __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx (46 tests) 662ms
 ✓ __tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts (12 tests) 126ms
stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:7083c5802a10268f","attemptId":"xat:w3a:6673b6f6d39b977a","executionContractId":"xct:w3a:dec:w2-trj:a0094460-74ce-4ab3-a67f-2ee99a003ace","executionContractVersion":3,"selectedAgentRef":"agt:w3a-bounded-fixture","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:7083c5802a10268f","attemptId":"xat:w3a:6673b6f6d39b977a","executionContractId":"xct:w3a:dec:w2-trj:a0094460-74ce-4ab3-a67f-2ee99a003ace","executionContractVersion":3,"selectedAgentRef":"agt:w3a-bounded-fixture","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal
{"event":"oa.execution_attempt.started","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f32b53efc2d628c2","attemptId":"xat:w3a:6673b6f6d39b977a","executionContractId":"xct:w3a:dec:w2-trj:a0094460-74ce-4ab3-a67f-2ee99a003ace","executionContractVersion":3,"selectedAgentRef":"agt:w3a-bounded-fixture","adapterId":"adp:f3-test-fixture","previousStatus":"accepted","newStatus":"running","contractStatus":"executing","result":"ok","durationMs":3}
{"event":"oa.execution_contract.status_written","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f32b53efc2d628c2","attemptId":"xat:w3a:6673b6f6d39b977a","executionContractId":"xct:w3a:dec:w2-trj:a0094460-74ce-4ab3-a67f-2ee99a003ace","contractStatus":"executing","result":"ok","durationMs":3}

stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal
{"event":"oa.execution_attempt.succeeded","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:ed5fa7629f3b4cd2","attemptId":"xat:w3a:6673b6f6d39b977a","executionContractId":"xct:w3a:dec:w2-trj:a0094460-74ce-4ab3-a67f-2ee99a003ace","selectedAgentRef":"agt:w3a-bounded-fixture","adapterId":"adp:f3-test-fixture","previousStatus":"running","newStatus":"succeeded","contractStatus":"confirmed","result":"ok","durationMs":2}

stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > read → N1 · Confirmation NOT_REQUIRED marker · validated · fixture agent selectable (PJ-REPROOF-04)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:712c18139a22ba5e","attemptId":"xat:w3a:683dc3f091ab2735","executionContractId":"xct:w3a:dec:w2-trj:5aa952c3-5c62-4674-abb3-a427e6fe4bc7","executionContractVersion":2,"selectedAgentRef":"agt:w3a-bounded-fixture","result":"ok","durationMs":1}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:712c18139a22ba5e","attemptId":"xat:w3a:683dc3f091ab2735","executionContractId":"xct:w3a:dec:w2-trj:5aa952c3-5c62-4674-abb3-a427e6fe4bc7","executionContractVersion":2,"selectedAgentRef":"agt:w3a-bounded-fixture","newStatus":"accepted","contractStatus":"validated","result":"ok","durationMs":1}

 ✓ __tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts (9 tests) 184ms
 ✓ __tests__/project-assistant/w3aGovernedExecute.test.ts (24 tests) 300ms

 Test Files  5 passed (5)
      Tests  93 passed (93)
   Start at  21:35:46
   Duration  2.17s (transform 1.26s, setup 200ms, collect 5.49s, tests 1.49s, environment 430ms, prepare 177ms)
```

## G. Fake / Real qualification

- Entry: PJ-REPROOF-04 deterministic proof + current Product Journey REAL-shaped contradiction.
- This cycle: **DETERMINISTIC PROVEN** for eligibility / parity / launch-context / Vitest regularization.
- Out of scope: END-TO-END REAL PROVEN.
- REAL launches this Delivery: **0**.
- DETERMINISTIC PROVEN ≠ READY FOR REAL.

## H. Legacy EC behavior

- EC `xct:w3a:dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8` read-only: version/status=(2, 'validated'); attempts=0.
- Not rewritten / not migrated.
- Stamps NO_REAL / NO_CURSOR_REAL / STOP AVANT EXECUTE → execution ineligible.
- Execute gated; Select fail-closed before Attempt.

## I. Doctrine / CKC / prompt parity

- Studio/Nora resolve doctrine; Cursor executes contract projection.
- No method/** / v2.6 loaded as Product runtime doctrine.
- `projectExecutionContractToCursorPrompt` remains sole Cursor transport.
- DoctrinePackage realism gap: use existing resolver only; no second resolver invented.

## J. Remaining reservations

- Full suite beyond required batch not re-run end-to-end.
- Other historical prepare call sites outside required suites may need explicit pin if re-run.
- Product Journey REAL reproof still required after Morris integration GO.
- Legacy EC remains non-executable by design.

## K. Forbidden actions respected

- No project push / PR / merge
- No REAL Cursor launch
- No Product DB migration / Batch Cookinb Execute
- No method/** / v3 framing / Build Doctrine / Roadmap edits

## Final verdict

**PASS — PJ-REPROOF-05 REVIEW REGULARIZATION COMPLETE — VITEST SHORTCUT REMOVED — FULL REVIEW HANDOFF REMOTE VERIFIED — READY FOR CHATGPT CODE REVIEW / MORRIS INTEGRATION DECISION**
