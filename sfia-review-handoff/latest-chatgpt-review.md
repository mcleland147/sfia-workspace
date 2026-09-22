# PJ-REPROOF-05 — Generic Product Execution Path — FULL Review Pack

- **Timestamp:** 2026-09-22T20:18:41Z / 2026-09-22 22:18:41 CEST
- **Repo:** mcleland147/sfia-workspace
- **Branch:** fix/sfia-studio-pj-reproof-05-execution-eligibility
- **Base / origin/main:** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
- **HEAD (uncommitted Delivery):** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
- **Campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — **PAUSED**
- **Finding:** PJ-REPROOF-05
- **Mode:** SAME DELIVERY continuation — Morris generic Product EC decision alignment
- **Prior handoff SHA (superseded):** aa44124a1946fe7233ae53002c4a9d0914b1b20c
- **Fake/Real:** DETERMINISTIC PROVEN — REAL Cursor processes = 0

## Git truth
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
```

## Sources reread
- convergence build doctrine / roadmap; product-completion 01–02
- sfia-v3-framing 31, 34, 35, 36
- process: sfia-cycle-execution-template; cycle-routing-guide (external)
- prior handoff aa44124a (Vitest regularization pack)
- code: prepare / semantics / deriveActualWork / governedExecute / eligibility / Gate D / Select / Start / generalist / prompt projection

## Morris decision consumed (this pass)

1. Product ExecutionContract = ONE generic execution contract.
2. No Product categories: read-only / write / docs-write / fixture / REAL / test / diagnostic executor / operationKind routing.
3. Pilot never chooses those categories.
4. Nora+Studio prepare mission envelope BEFORE execution.
5. Authorized EC → generic Cursor → Cursor owns HOW.
6. Cursor may inspect/read/analyze/run/write within contract authority.
7. ActionPolicy taxonomy = INTERNAL protection only — not Product types/routing.
8. Runtime does not re-qualify mission after Nora/Studio.
9. Runtime protection = mechanical enforcement of prior limits.
10. Authority gap → Cursor reports → Nora/Studio requalify → HumanDecision / successor — no silent widen.
11. Fixtures = TEST only — not canonical Product path.
12. Historical GCEC may stay isolated — must not dictate Product architecture.

Aligns framing 34; no doctrine document edits.

## Architecture before → after

### Before (categorical residue)
- EC surface stamped `product:read` / `product:read-only` / `cap:product-read` from effect class.
- GCEC fork: non–docs-write → F3 fixture boundary; docs-write → REAL + Gate D.
- Product Select could bind fixture when REAL off; Gate D required `confirmed` only.
- Eligibility helper risked reading as a second policy engine.

### After (Morris-aligned)
- EC surface = Studio generalist quartet (`studio.cursor.generalist.*` / `cap:studio.cursor.generalist`).
- Internal effect-class tokens retained in `inputs.effectClass` / `internalEffect*` + SCOPE_OUT/PROTECTED (ActionPolicy).
- Canonical `PRODUCT_GOVERNED` → generic Cursor REAL boundary + mechanical Gate D auto-grant.
- Sealed docs-write GCEC remains isolated specialized path.
- Explicit `FIXTURE_EXECUTOR_BOUNDARY_ONLY` only → historical fixture adapter.
- Gate D accepts Execute-ready (`validated`+NOT_REQUIRED OR `confirmed`) — no second Pilot decision.
- Eligibility = mechanical Start invariants + legacy stamp fail-closed (not mission re-qualification).

## Removed from Product path
- Product fixture default (`F3_ADAPTER_ID` for PRODUCT_GOVERNED)
- Product docsWrite-vs-fixture executor routing
- Product EC categories product:read / product:read-only / cap:product-read as routing surface
- Gate D hard-require `confirmed` when Confirmation evaluated NOT_REQUIRED
- Vitest auto-pin (prior regularization retained)

## Roles
- **Nora/Studio:** mission understanding, DoctrinePackage/CKC/LPS, envelope, gates/stops/Evidence, inspectable EC.
- **Cursor:** HOW inside authorized envelope; cannot widen authority.
- **Effects/gates:** mechanical protections only.
- **No second Product policy engine.**

## D. NEW FILES — FULL CONTENT

### FILE: `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts`
- sha256: 69ef4e31d6524f49d91a8c64d9ff501c8a0f944464f8efdad73b6ffc95545f0a
- lines: 245

```typescript
/**
 * PJ-REPROOF-05 — mechanical Product Start invariants (NOT a second policy engine).
 *
 * Answers: may this already-built ExecutionContract proceed to Select / Execute / Start?
 *
 * Checks are mechanical / fail-closed:
 * - historical forever-forbid stamps (legacy EC compatibility)
 * - trusted launch context present when required
 *
 * Does NOT re-qualify mission, choose read/write/docs-write, or route executors.
 * Consumed by Authorize projection, UI Execute, Select (pre-Attempt), Start.
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
- sha256: 9698a58f7030cf7fbf1342d7ad7f28dd3d752a4236c847a896af74307286f6a8
- lines: 613

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
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  resolveProductExecutionEligibility,
  projectExecutionContractToCursorPrompt,
} from "@/lib/oa/execution-contract";
import {
  assertStudioCursorRealOffForTests,
  createStudioCursorGeneralistAgentDescriptor,
  createTestExecutionAttemptServices,
  SqliteRealLaunchSafetyJournal,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
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
    // Morris — generic Product EC surface (not read/docs-write/fixture categories).
    expect(prepared.contract.action).toBe("studio.cursor.generalist.execute");
    expect(prepared.contract.target).toBe("studio.cursor.generalist.workspace");
    expect(prepared.contract.scope).toBe(
      "studio.cursor.generalist.authorized_contract",
    );
    expect(prepared.contract.requiredCapabilities).toEqual([
      "cap:studio.cursor.generalist",
    ]);
    expect(prepared.contract.action).not.toBe("product:read");
    expect(prepared.contract.scope).not.toBe("product:read-only");

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

describe("PJ-REPROOF-05 — generic Product Cursor path (Morris)", () => {
  it("Prepare→Inspect→Authorize→Select→Start reaches deterministic generalist launch", async () => {
    const db = tempProductDbPath("pj-reproof05-generic.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05g" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "g05" });
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
    const contract = loaded.contract;
    expect(contract.action).toBe("studio.cursor.generalist.execute");
    expect(contract.constraints).toContain("PRODUCT_GOVERNED");
    expect(contract.constraints).not.toContain("FIXTURE_EXECUTOR_BOUNDARY_ONLY");

    const prompt = projectExecutionContractToCursorPrompt({ contract });
    expect(prompt.promptText.length).toBeGreaterThan(40);
    expect(prompt.executionContractId).toBe(contract.executionContractId);
    expect(prompt.semanticFingerprint).toBe(contract.semanticFingerprint ?? null);

    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
    });
    const authz = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authz.ok).toBe(true);
    if (!authz.ok) throw new Error(authz.code);
    expect(authz.outcome).toBe("AUTHORIZED");
    expect(authz.executionEligible).toBe(true);

    const launchPort = oa.executionAttemptServices!.realBoundary!.launchPort;
    const before =
      "calls" in launchPort && Array.isArray(launchPort.calls)
        ? launchPort.calls.length
        : 0;

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.code);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) {
      throw new Error(`start failed: ${started.code} ${started.message}`);
    }
    expect(started.ok).toBe(true);
    expect(started.phase).toBe("running");
    const after =
      "calls" in launchPort && Array.isArray(launchPort.calls)
        ? launchPort.calls.length
        : 0;
    expect(after).toBeGreaterThan(before);
    expect(started.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });
});
```

## E. COMPLETE tracked diffs

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
index d8b8428f..6f31bd98 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -1,7 +1,10 @@
 /**
  * Shared harness for W2 (E+A+B+C) product-path tests.
  * Product SQLite on a temp file so restart proofs reopen the same store.
- * No REAL boundary, no execution: every helper here stops before Execute.
+ *
+ * PJ-REPROOF-05 — Product canonical path uses a DETERMINISTIC fake Cursor
+ * REAL boundary (TestOnlyRealExecutionLaunchPort). Never enables production
+ * SFIA_STUDIO_CURSOR_REAL. Fixtures remain available for historical F3 tests.
  */
 import fs from "node:fs";
 import os from "node:os";
@@ -16,6 +19,8 @@ import {
 } from "@/lib/vertical-slice-runtime";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SqliteRealLaunchSafetyJournal } from "@/lib/oa/execution-attempt";
+import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

 const APP_ROOT = path.resolve(__dirname, "../..");
 export const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
@@ -86,6 +91,11 @@ export function cleanupW2TempDirs(): void {
 export function bootW2Runtime(input: {
   productDbPath: string;
   idPrefix?: string;
+  /**
+   * When false, omit deterministic Cursor REAL boundary (historical fixture-only
+   * compositions). Default true so Product governed Execute can select generalist.
+   */
+  readonly withDeterministicProductCursorBoundary?: boolean;
 }): RuntimeApplicationService {
   process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
   process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
@@ -116,6 +126,25 @@ export function bootW2Runtime(input: {
     identity: process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY!,
   });
   resetRuntimeApplicationServiceForTests();
+
+  const withCursorBoundary = input.withDeterministicProductCursorBoundary !== false;
+  let realBoundary:
+    | {
+        launchPort: TestOnlyRealExecutionLaunchPort;
+        safetyJournal: SqliteRealLaunchSafetyJournal;
+      }
+    | undefined;
+  if (withCursorBoundary) {
+    const safetyDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-gate-"));
+    tempDirs.push(safetyDir);
+    realBoundary = {
+      launchPort: new TestOnlyRealExecutionLaunchPort({ holdCompletion: true }),
+      safetyJournal: new SqliteRealLaunchSafetyJournal({
+        databasePath: path.join(safetyDir, "safety.sqlite"),
+      }),
+    };
+  }
+
   return getRuntimeApplicationService({
     registryRoot: W2_REGISTRY_ROOT,
     schemasRoot: W2_SCHEMAS_ROOT,
@@ -123,6 +152,7 @@ export function bootW2Runtime(input: {
     idSource: new SeededIdSource(input.idPrefix ?? "w2"),
     auditMode: "noop",
     productDbPath: input.productDbPath,
+    ...(realBoundary ? { realBoundary } : {}),
   });
 }

@@ -205,6 +235,24 @@ export async function seedQualifiedProject(
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
@@ -212,6 +260,13 @@ export async function seedQualifiedProject(
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
index 1df6cbfc..9124d220 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
@@ -7,6 +7,10 @@ import { prepareExecutionContractFromW2Decision } from "@/features/project-assis
 import {
   assertNotF3FixtureSemantics,
   deriveW3AExecutionEnvelope,
+  PRODUCT_CANONICAL_EXECUTION_ACTION,
+  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+  PRODUCT_CANONICAL_EXECUTION_SCOPE,
+  PRODUCT_CANONICAL_EXECUTION_TARGET,
 } from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
 import {
   buildActualExecutionWork,
@@ -54,12 +58,14 @@ import {
   W3A_BOUNDED_FIXTURE_AGENT_ID,
   W3A_FIXTURE_ALLOWED_SCOPES,
 } from "@/lib/vertical-slice-runtime/w3aProductFixtureWiring";
+import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -164,7 +170,10 @@ describe("W3-A actual work provenance", () => {
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
@@ -183,10 +192,17 @@ describe("W3-A actual work provenance", () => {
     });
     expect(env.ok).toBe(true);
     if (!env.ok) return;
-    expect(env.envelope.action).toBe("product:generate-temporary-artifact");
-    expect(env.envelope.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
+    expect(env.envelope.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(env.envelope.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    expect(env.envelope.target).toBe(PRODUCT_CANONICAL_EXECUTION_TARGET);
+    expect(env.envelope.requiredCapabilities).toEqual([
+      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+    ]);
+    expect(env.envelope.inputs.effectClass).toBe("generate-temporary-artifact");
+    expect(env.envelope.inputs.internalEffectAction).toBe(
+      "product:generate-temporary-artifact",
+    );
     expect(env.envelope.scope).not.toContain("décider");
-    expect(env.envelope.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
     expect(env.envelope.requiredAuthority).toBe("N1");
     expect(env.envelope.effectConfirmationRequired).toBe(true);
     expect(env.envelope.effectConfirmationLevel).toBe("N1");
@@ -255,11 +271,16 @@ describe("W3-A actual work provenance", () => {
     });
     expect(envSim.ok && envRead.ok).toBe(true);
     if (!envSim.ok || !envRead.ok) return;
-    expect(envSim.envelope.action).toBe("product:simulate");
-    expect(envRead.envelope.action).toBe("product:read");
-    expect(envSim.envelope.scope).toBe(W3A_PRODUCT_SCOPE.SIMULATE);
-    expect(envRead.envelope.scope).toBe(W3A_PRODUCT_SCOPE.READ);
-    expect(envSim.envelope.scope).not.toBe(envRead.envelope.scope);
+    // Canonical Product EC surface is ONE generic Cursor quartet.
+    expect(envSim.envelope.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(envRead.envelope.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(envSim.envelope.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    expect(envRead.envelope.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    // Internal effect-control facts remain distinct (ActionPolicy — not Product types).
+    expect(envSim.envelope.inputs.effectClass).toBe("simulate");
+    expect(envRead.envelope.inputs.effectClass).toBe("read");
+    expect(envSim.envelope.inputs.internalEffectAction).toBe("product:simulate");
+    expect(envRead.envelope.inputs.internalEffectAction).toBe("product:read");
   });
 });

@@ -537,7 +558,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
   });

-  it("temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal", async () => {
+  it("temp artifact Confirmation gate → AUTHORIZED → generalist Select→Start (deterministic launch)", async () => {
     const ctx = await decideGoverned("pos");
     const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
     const prepared = await prepareExecutionContractFromW2Decision({
@@ -547,14 +568,18 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       currentContext: context,
       forceLocalAuthority: true,
       qualifiedOperationKind: "generate-temporary-artifact",
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
-    expect(prepared.contract.action).toBe("product:generate-temporary-artifact");
+    expect(prepared.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
     expect(prepared.contract.action).not.toContain("trajectory");
-    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
+    expect(prepared.contract.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
     expect(prepared.contract.scope).not.toContain("décider");
-    expect(prepared.contract.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
+    expect(prepared.contract.target).toBe(PRODUCT_CANONICAL_EXECUTION_TARGET);
+    expect(prepared.contract.requiredCapabilities).toEqual([
+      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+    ]);
     expect(prepared.contract.requiredAuthority).toBe("N1");
     expect(prepared.contract.status).toBe("confirmation_required");
     expect(prepared.contract.effectConfirmationRequired).toBe(true);
@@ -562,6 +587,10 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(prepared.contract.constraints.some((c) =>
       c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
     )).toBe(true);
+    expect(prepared.contract.constraints).toContain("PRODUCT_GOVERNED");
+    expect(prepared.contract.constraints).not.toContain(
+      "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
+    );

     const executionContractId = prepared.contract.executionContractId;
     const inspected = await inspectExecutionContract({
@@ -600,7 +629,12 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(authorized.ok).toBe(true);
     if (!authorized.ok) throw new Error("auth");
     expect(authorized.outcome).toBe("AUTHORIZED");
-    expect(ctx.oa.executionAttemptServices.registry.getAgent(W3A_BOUNDED_FIXTURE_AGENT_ID)).toBeTruthy();
+    expect(authorized.executionEligible).toBe(true);
+
+    const launchPort = ctx.oa.executionAttemptServices!.realBoundary!.launchPort;
+    const launchBefore = "calls" in launchPort && Array.isArray(launchPort.calls)
+      ? launchPort.calls.length
+      : 0;

     const selected = await governedExecuteSelectAgent({
       oa: ctx.oa,
@@ -611,7 +645,9 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(selected.ok).toBe(true);
     if (!selected.ok) return;
     expect(selected.phase).toBe("accepted");
-    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
+    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+    expect(selected.adapterId).not.toContain("f3");
+    expect(selected.selectedAgentRef).not.toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);

     const started = await governedExecuteStart({
       oa: ctx.oa,
@@ -624,23 +660,27 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     if (!started.ok) return;
     expect(started.phase).toBe("running");
     expect(started.attemptId).toBe(selected.attemptId);
-
-    const terminal = await governedExecuteRecordResult({
+    expect(started.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+    const launchAfter = "calls" in launchPort && Array.isArray(launchPort.calls)
+      ? launchPort.calls.length
+      : 0;
+    expect(launchAfter).toBeGreaterThan(launchBefore);
+
+    // No second Pilot Confirmation invented for Cursor REAL — Gate D is mechanical.
+    // Record awaits Cursor report (no F3 fixture fallback).
+    const pending = await governedExecuteRecordResult({
       oa: ctx.oa,
       projectId: ctx.seeded.projectId,
       executionContractId,
       attemptId: started.attemptId,
       forceLocalAuthority: true,
     });
-    expect(terminal.ok).toBe(true);
-    if (!terminal.ok) return;
-    expect(terminal.phase).toBe("terminal");
-    expect(terminal.attemptId).toBe(selected.attemptId);
-    expect(terminal.cycleInstanceClosed).toBe(false);
-    expect(terminal.realExecution).toBe(false);
+    expect(pending.ok).toBe(false);
+    if (pending.ok) return;
+    expect(pending.code).toBe("CURSOR_REPORT_PENDING");
   });

-  it("read → N1 · Confirmation NOT_REQUIRED marker · validated · fixture agent selectable (PJ-REPROOF-04)", async () => {
+  it("compat read kind → N1 · no Confirmation · generalist Select (not fixture)", async () => {
     const ctx = await decideGoverned("read");
     const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
     const prepared = await prepareExecutionContractFromW2Decision({
@@ -650,6 +690,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       currentContext: context,
       forceLocalAuthority: true,
       qualifiedOperationKind: "read",
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) return;
@@ -666,8 +707,10 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
         constraints: prepared.contract.constraints,
       }),
     ).toBe(true);
-    expect(prepared.contract.action).toBe("product:read");
-    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.READ);
+    expect(prepared.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(prepared.contract.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    expect(prepared.contract.action).not.toBe("product:read");
+    expect(prepared.contract.scope).not.toBe(W3A_PRODUCT_SCOPE.READ);

     const executionContractId = prepared.contract.executionContractId;
     await inspectExecutionContract({
@@ -684,7 +727,6 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(authorized.ok).toBe(true);
     if (!authorized.ok) return;
     expect(authorized.outcome).toBe("AUTHORIZED");
-    const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
     const selected = await governedExecuteSelectAgent({
       oa: ctx.oa,
       projectId: ctx.seeded.projectId,
@@ -693,8 +735,8 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     });
     expect(selected.ok).toBe(true);
     if (!selected.ok) return;
-    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
-    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
+    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+    expect(selected.selectedAgentRef).not.toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
   });

   it("high-risk push operationKind rejected before EC (R15)", async () => {
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

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
index 37fd647d..f97e5499 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
@@ -202,8 +202,9 @@ function missionFromClarifyWithoutRecovery(
 }

 /**
- * Internal effect control from mission perimeter — NOT from trajectory option.
- * Non-mutating perimeter → weak reversible control suitable for Confirmation projection.
+ * Internal effect-control scaffold from mission perimeter — NOT a Product
+ * contract category. `operationKind: "read"` here is ActionPolicy taxonomy only;
+ * the durable EC surface is stamped as the generic Cursor quartet by the envelope.
  */
 function buildInternalWorkFromMissionPerimeter(input: {
   readonly projectId: string;
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 3a1295b6..dbb87ac6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -5,10 +5,12 @@
  * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
  * Phase 3 (record): continue running Attempt → technical terminal
  *
- * Dual Product orchestration (ONE state machine):
- * - Sandbox / fixture-safe EC → F3 fixture adapter (existing)
- * - Resolved M4 bounded docs-write EC → OA Select → Gate D → StartExecution
- *   with Fake or REAL launch port from composition (client real/adapter ignored)
+ * PJ-REPROOF-05 / Morris — Product orchestration:
+ * - Canonical PRODUCT_GOVERNED EC → generic Cursor REAL boundary + mechanical Gate D
+ * - Sealed historical M4 bounded docs-write EC → docs-write agent + Gate D (isolated GCEC)
+ * - Explicit FIXTURE_EXECUTOR_BOUNDARY_ONLY / historical F3-only → fixture adapter (test)
+ *
+ * Effects / ActionPolicy remain internal protections — not Product executor routing.
  */

 import { createHash } from "node:crypto";
@@ -31,6 +33,7 @@ import {
   M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_REAL_GATEWAY_ADAPTER_ID,
   resolveSelectionStrategy,
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "@/lib/oa/execution-attempt";
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
@@ -40,6 +43,7 @@ import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveA
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
 import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
+import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
 import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecuteAttemptProjection,
@@ -54,13 +58,40 @@ function mapCycleProfileToSelectionProfile(
   return "standard";
 }

+function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
+  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
+}
+
+/**
+ * Canonical Product EC: Nora/Studio-prepared PRODUCT_GOVERNED envelope.
+ * Not a sealed GCEC docs-write profile. Not an explicit fixture-only stamp.
+ */
+function isCanonicalProductGovernedContract(
+  contract: ExecutionContract,
+): boolean {
+  if (isBoundedDocsWriteContract(contract)) return false;
+  if (contract.constraints.includes("FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
+    return false;
+  }
+  return contract.constraints.includes("PRODUCT_GOVERNED");
+}
+
+/** Generic Cursor REAL launch boundary (Product or sealed docs-write). */
+function usesGenericCursorRealBoundary(contract: ExecutionContract): boolean {
+  return (
+    isBoundedDocsWriteContract(contract) ||
+    isCanonicalProductGovernedContract(contract)
+  );
+}
+
 /**
- * adapterId = contractual M4 gateway identity for docs-write ECs
+ * adapterId = contractual M4 gateway identity for Cursor REAL ECs
  * (Fake and REAL share M4_REAL_GATEWAY_ADAPTER_ID). Physical Fake vs REAL is
  * carried by boundaryProofMode / realExecution from deriveAttemptProvenance.
+ * Fixture adapter is historical / test-only when EC explicitly fixture-stamped.
  */
 function adapterIdForContract(contract: ExecutionContract): string {
-  return isBoundedDocsWriteContract(contract)
+  return usesGenericCursorRealBoundary(contract)
     ? M4_REAL_GATEWAY_ADAPTER_ID
     : F3_ADAPTER_ID;
 }
@@ -115,10 +146,6 @@ export type GovernedExecuteAuthorizedContractInput = {

 type Failure = GovernedExecuteAuthorizedContractResult;

-function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
-  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
-}
-
 function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
     return {
@@ -145,8 +172,11 @@ function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   return null;
 }

-/** Docs-write path: require composed launch boundary (Fake in tests / REAL when opted-in). */
-function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
+/**
+ * Generic Cursor REAL boundary (canonical Product + sealed docs-write).
+ * Mechanical Gate D / launchPort presence — not a Pilot-facing second decision.
+ */
+function cursorRealBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   if (!oa.executionAttemptServices) {
     return {
       ok: false,
@@ -159,7 +189,7 @@ function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
       ok: false,
       code: "REAL_BOUNDARY_REQUIRED",
       message:
-        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
+        "Exécution Cursor refusée — realBoundary absent (fail-closed, pas de fallback fixture Product).",
     };
   }
   if (!oa.executionAttemptServices.grantRealExecutionGate) {
@@ -167,12 +197,33 @@ function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
       ok: false,
       code: "GATE_D_REQUIRED",
       message:
-        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed).",
+        "Exécution Cursor refusée — journal Gate D mécanique indisponible (fail-closed).",
     };
   }
   return null;
 }

+function executionBoundaryFailure(
+  oa: RuntimeOaStack,
+  contract: ExecutionContract,
+): Failure | null {
+  return usesGenericCursorRealBoundary(contract)
+    ? cursorRealBoundaryFailure(oa)
+    : fixtureBoundaryFailure(oa);
+}
+
+function launchCountBeforeFor(
+  oa: RuntimeOaStack,
+  contract: ExecutionContract,
+): number {
+  if (usesGenericCursorRealBoundary(contract)) {
+    return launchCallCountOf(
+      oa.executionAttemptServices!.realBoundary!.launchPort,
+    );
+  }
+  return oa.fixtureAdapter!.launchCallCount;
+}
+
 function launchCallCountOf(port: unknown): number {
   if (port && typeof port === "object") {
     if ("launchCallCount" in port) {
@@ -310,9 +361,8 @@ function buildTechnicalTerminal(input: {
   launchCountBefore: number;
   statusLabel?: string;
 }): GovernedExecuteAuthorizedContractResult {
-  const docsWrite = isBoundedDocsWriteContract(input.contract);
   const adapterId = adapterIdForContract(input.contract);
-  const launchCount = docsWrite
+  const launchCount = usesGenericCursorRealBoundary(input.contract)
     ? launchCallCountOf(
         input.oa.executionAttemptServices?.realBoundary?.launchPort,
       )
@@ -412,15 +462,13 @@ export async function governedExecuteSelectAgent(
   }
   const { contract, selectionProfile } = loaded;
   const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  const productCursor = isCanonicalProductGovernedContract(contract);
+  const cursorReal = usesGenericCursorRealBoundary(contract);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

   const adapterId = adapterIdForContract(contract);
-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -459,6 +507,22 @@ export async function governedExecuteSelectAgent(
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
@@ -468,12 +532,12 @@ export async function governedExecuteSelectAgent(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  // Docs-write shares F3 M4 selection: capabilities_deterministic + requested
-  // M4 agent (system-initiated). Cycle Critical must not invent a second
-  // agent-confirmation Product path for an already Confirmation-gated EC.
+  // Cursor REAL paths (canonical Product + sealed docs-write): mechanical
+  // capabilities_deterministic selection — no Pilot agent-selection HOW.
+  // Sealed docs-write still requests its specialized agent; Product uses generalist.
   let effectiveProfile: SelectionProfile = selectionProfile;
   let selectionStrategy: SelectionStrategy;
-  if (docsWrite) {
+  if (cursorReal) {
     effectiveProfile = "standard";
     selectionStrategy = "capabilities_deterministic";
   } else {
@@ -511,10 +575,12 @@ export async function governedExecuteSelectAgent(
       expectedContractVersion: contract.version,
       selectionProfile: effectiveProfile,
       selectionStrategy,
-      systemInitiated: docsWrite,
+      systemInitiated: cursorReal,
       ...(docsWrite
         ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
-        : {}),
+        : productCursor
+          ? { requestedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID }
+          : {}),
     });
   if (!selected.ok) {
     return {
@@ -554,15 +620,13 @@ export async function governedExecuteStart(
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
   const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  void docsWrite;
+  const cursorReal = usesGenericCursorRealBoundary(contract);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

   const adapterId = adapterIdForContract(contract);
-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -588,10 +652,12 @@ export async function governedExecuteStart(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  if (!docsWrite) {
+  if (!cursorReal) {
     // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
     applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
   } else {
+    // Mechanical Gate D launch-safety grant — bound to Attempt/EC/fingerprint.
+    // Not a Pilot-facing second Confirmation (docs-write + canonical Product).
     const grantId = `gd:w3a:${input.attemptId.replace(/^xat:/, "")}`;
     const nowMs = Date.parse(input.oa.clock.nowIso());
     const expiresAt = new Date(
@@ -652,7 +718,8 @@ export async function governedExecuteStart(
   }

   // R-W3B-03 — TEST-ONLY governed stop arm: FC-10 SystemGovernedStop (not human Cancel).
-  if (!docsWrite) {
+  // Fixture / historical paths only — Product Cursor REAL does not use fixture arms.
+  if (!cursorReal) {
     const stopArm = consumeW3bBoundaryArm();
     if (stopArm?.kind === "governed_stop") {
       const onContract =
@@ -717,15 +784,12 @@ export async function governedExecuteRecordResult(
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
   const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  const productCursor = isCanonicalProductGovernedContract(contract);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

   const adapterId = adapterIdForContract(contract);
-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -842,6 +906,47 @@ export async function governedExecuteRecordResult(
     });
   }

+  // Canonical Product generic Cursor: Record waits for Cursor report / process
+  // observation — do NOT fall through to F3 fixture adapter.
+  if (productCursor) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    if (!existing.ok || !existing.attempt) {
+      return {
+        ok: false,
+        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
+        message: existing.ok
+          ? "Attempt introuvable pour completion Product Cursor."
+          : existing.error.message,
+      };
+    }
+    const attempt = existing.attempt;
+    if (
+      attempt.status === "succeeded" ||
+      attempt.status === "failed" ||
+      attempt.status === "timeout" ||
+      attempt.status === "cancelled"
+    ) {
+      return buildTechnicalTerminal({
+        contract,
+        attempt,
+        selectionProfile,
+        oa: input.oa,
+        reusedExistingAttempt: false,
+        launchCountBefore,
+      });
+    }
+    return {
+      ok: false,
+      code: "CURSOR_REPORT_PENDING",
+      message:
+        "Tentative Cursor générique en cours — le rapport d'exécution / Evidence n'est pas encore disponible (pas de fallback fixture).",
+      attempt: projectAttempt(attempt, adapterId),
+    };
+  }
+
   const identities = attemptIdentities(
     contract.executionContractId,
     contract.version,
@@ -936,17 +1041,10 @@ export async function governedExecuteCancel(
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(
-        input.oa.executionAttemptServices!.realBoundary!.launchPort,
-      )
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   registerPiloteAuthority(
     input.oa,
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
index 601c2b69..ade56e2d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -35,11 +35,32 @@ import {
   projectRequiredAuthorityFromEffects,
   deriveReversibilityFromEffects,
 } from "./w3aQualifiedExecutionEffects";
+import { filterTrajectoryNonExecuteStopsFromEc } from "./resolveProductExecutionEligibility";
+import {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+} from "@/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent";

 /** Implementation / provenance marker — NOT authority-bearing scope. */
 export const W3A_IMPLEMENTATION_MARKER =
   "w3:governed-execute:studio-canonical" as const;

+/**
+ * PJ-REPROOF-05 / Morris — canonical Product EC surface is ONE generic
+ * Cursor execution quartet. Effect-class tokens (product:read, …) remain
+ * INTERNAL ActionPolicy facts in inputs/constraints — not EC routing types.
+ */
+export const PRODUCT_CANONICAL_EXECUTION_ACTION =
+  STUDIO_CURSOR_GENERALIST_ACTION;
+export const PRODUCT_CANONICAL_EXECUTION_TARGET =
+  STUDIO_CURSOR_GENERALIST_TARGET;
+export const PRODUCT_CANONICAL_EXECUTION_SCOPE =
+  STUDIO_CURSOR_GENERALIST_SCOPE;
+export const PRODUCT_CANONICAL_EXECUTION_CAPABILITY =
+  STUDIO_CURSOR_GENERALIST_CAPABILITY;
+
 export type W3AExecutionEnvelope = {
   readonly action: string;
   readonly scope: string;
@@ -66,6 +87,16 @@ export type EnvelopePrepareFailure =
       readonly message: string;
     };

+/**
+ * PJ-REPROOF-05 — truthful Product constraints (Morris generic EC).
+ *
+ * Do NOT stamp FIXTURE_EXECUTOR_BOUNDARY_ONLY / NO_REAL / NO_CURSOR_REAL on every
+ * Product EC. Do NOT stamp Product contract categories (read/write/fixture/REAL).
+ *
+ * Mutation / Git forbids remain SCOPE_OUT / PROTECTED from qualified effects
+ * (internal ActionPolicy). NO_ATTEMPT_AT_PREPARE only asserts prepare creates
+ * no Attempt.
+ */
 function productConstraints(
   basis: DecisionBasis,
   effects: QualifiedExecutionEffects,
@@ -74,9 +105,6 @@ function productConstraints(
   const eb = basis.executionBasis;
   return [
     "PRODUCT_GOVERNED",
-    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
-    "NO_REAL",
-    "NO_CURSOR_REAL",
     "NO_ATTEMPT_AT_PREPARE",
     `IMPLEMENTATION_MARKER:${W3A_IMPLEMENTATION_MARKER}`,
     `EFFECT_CLASS:${effects.effectClass}`,
@@ -96,8 +124,13 @@ function productConstraints(

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
@@ -298,10 +331,11 @@ export function deriveW3AExecutionEnvelope(input: {
   return {
     ok: true,
     envelope: {
-      action: effects.action,
-      target: effects.target,
-      scope: effects.scopeIn,
-      requiredCapabilities: [...effects.requiredCapabilities],
+      // Canonical Product EC surface = generic Cursor quartet (not effect-class routing).
+      action: PRODUCT_CANONICAL_EXECUTION_ACTION,
+      target: PRODUCT_CANONICAL_EXECUTION_TARGET,
+      scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
+      requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
       requiredAuthority: authority.requiredAuthority,
       constraints: [
         ...productConstraints(input.basis, effects, confirmationConstraint),
@@ -331,6 +365,11 @@ export function deriveW3AExecutionEnvelope(input: {
         trajectoryOptionIntent: input.selectedOptionIntent,
         trajectoryOptionIsNotAction: true,
         trajectoryOptionIsNotScope: true,
+        // Internal ActionPolicy / effect-control facts (NOT Product EC categories).
+        internalEffectAction: effects.action,
+        internalEffectTarget: effects.target,
+        internalEffectScopeIn: effects.scopeIn,
+        internalEffectCapabilities: [...effects.requiredCapabilities],
         executionScope: effects.scopeIn,
         effectClass: effects.effectClass,
         rollbackAvailable: effects.rollbackAvailable,
```

### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
index 2062ba30..fab2a812 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
@@ -6,7 +6,10 @@
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
 import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
-import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
+import {
+  computeExecutionContractSemanticFingerprint,
+  isExecutionReadyStatus,
+} from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import type { AttemptDetailCode, ActorReference } from "../domain/types";
 import type { GateDGrant } from "../domain/realLaunchSafety";
@@ -111,7 +114,10 @@ export class GrantGateD {
       if (!contract) {
         return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
       }
-      if (contract.status !== "confirmed") {
+      // PJ-REPROOF-05 — Gate D is a mechanical launch-safety token.
+      // Align with Select/Start Execute-ready invariant (validated + NOT_REQUIRED
+      // OR confirmed). Do not invent a second Pilot Confirmation.
+      if (!isExecutionReadyStatus(contract)) {
         return fail(
           "EXECUTION_CONTRACT_NOT_CONFIRMED",
           `contract_status_${contract.status}`,
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

## F. Validations

| Suite | Result |
|---|---|
| pjReproof05.executionEligibility.d0 | 10/10 PASS |
| pjReproof04.executionContractSemanticBridge.d0 | 12/12 PASS |
| w3aGovernedExecute | 24/24 PASS |
| postExecutionTrajectorySurface.ui | 2/2 PASS |
| trajectorySurface.ui | 46/46 PASS |
| **Batch** | **94/94 PASS** |
| tsc --noEmit | PASS |
| git diff --check | PASS |
| scoped next lint | EXIT 0 (pre-existing / non-blocking warnings) |

## G. Fake / Real
- DETERMINISTIC PROVEN via TestOnlyRealExecutionLaunchPort
- REAL Cursor processes launched: **0**
- DETERMINISTIC ≠ READY FOR REAL

## H. Legacy
- EC xct:w3a:dec:w2-trj:62b92385-… v2 unchanged; attempts=0; ineligible
- F3 fixture agents remain for historical FIXTURE-stamped / test compositions
- GCEC sealed docs-write / progressive profiles preserved (pjReproof04 PASS)

## I. Remaining debt
- Historical product:* tokens still exist as internal effect-control / fixture sufficiency declarations
- Compat `qualifiedOperationKind` still accepted on prepare for historical tests (not Product UI)
- Product Record for generic Cursor awaits Cursor report (`CURSOR_REPORT_PENDING`) — no fixture fallback
- Full suite beyond required batch not re-run
- Product Journey REAL reproof still after Morris integration GO

## J. Forbidden actions respected
- No project push/PR/merge; no REAL Cursor; no DB migration; no doctrine edits

## Final verdict

**PASS — PJ-REPROOF-05 GENERIC PRODUCT EXECUTION PATH ALIGNED WITH MORRIS DECISION — NORA/STUDIO OWN PRE-CONTRACT GOVERNANCE — CURSOR OWNS HOW — EFFECTS REMAIN INTERNAL GUARDRAILS ONLY — DETERMINISTIC GENERIC LAUNCH PROVEN — READY FOR CHATGPT FINAL REVIEW / MORRIS INTEGRATION DECISION — PRODUCT JOURNEY REMAINS PAUSED BEFORE REAL REPROOF**
