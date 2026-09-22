# PJ-REPROOF-05 — Product / Non-Product Execution Eligibility Isolation — FULL Review Pack

- **Timestamp:** 2026-09-22T21:15:23Z / 2026-09-22 23:15:23 CEST
- **Repo:** mcleland147/sfia-workspace
- **Branch:** fix/sfia-studio-pj-reproof-05-execution-eligibility
- **Base / origin/main / HEAD:** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
- **Campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — PAUSED
- **Mode:** SAME DELIVERY continuation — Product/non-Product Select/Start isolation
- **Prior handoff (superseded):** ca94f1b1ac9e204f5a03d0e105a04d882818911e
- **Fake/Real:** DETERMINISTIC PROVEN — REAL Cursor = 0
- **Capacity:** V3-F05 + V3-F11/V3-F12

## Local Git Truth Check
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

## Sources consulted
- convergence build doctrine / roadmap; product-completion 01; framing 34/36
- process templates (external); prior handoff ca94f1b1
- selectExecutionAgent.ts / startExecution.ts / resolveProductExecutionEligibility.ts
- governedExecute / w3aProductExecutionSemantics / pjReproof05 / pjReproof04 / w3aGovernedExecute / m4Fixtures / f3.fixtureVerticalSlice / lifecycleFoundation
- READ-ONLY Product DB legacy EC payload

## Morris decision consumed
ONE generic Product EC → generic Cursor → Cursor owns HOW.
No Product read/write/docs-write/fixture/REAL categories.
Effects = internal ActionPolicy only.

## Finding confirmed (blocker)

### A. SelectExecutionAgent
Called `resolveProductExecutionEligibility(...)` without Product discriminant (unconditional).

### B. StartExecution
Same unconditional call (defense-in-depth).

### C. Resolver defaults
`requireTrustedLaunchContext=true` by default; rejects missing baseHeadSha / repo identity;
also fail-closes FIXTURE_EXECUTOR_BOUNDARY_ONLY / NO_REAL / NO_CURSOR_REAL / STOP AVANT EXECUTE.

### D. Non-Product lanes share Select/Start
Proven:
- F3: `executeConfirmedFixtureSafeContract` → selectExecutionAgent + startExecution
- OA foundation: `lifecycleFoundation` / `seedConfirmedContract` (`publish-modeled-pack`)
- GCEC: sealed docs-write through same use-cases
These must NOT receive Product trusted-launch / stamp rules.

**BLOCKER CONFIRMED.**

## Legacy Batch Cookinb EC (READ-ONLY)
```json
{
  "version": 2,
  "status": "validated",
  "fingerprint": "ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac",
  "attempts": 0,
  "action": "product:read",
  "target": "product:project-workspace",
  "scope": "product:read-only",
  "caps": [
    "cap:product-read"
  ],
  "has_PRODUCT_GOVERNED": true,
  "has_FIXTURE": true,
  "has_NO_REAL": true,
  "has_NO_CURSOR_REAL": true,
  "stops_sample": [
    "AUCUNE EXÉCUTION",
    "STOP AVANT EXECUTE",
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT"
  ]
}
```
Note: durable legacy EC **already carries PRODUCT_GOVERNED** plus FIXTURE/NO_REAL/NO_CURSOR_REAL + STOP AVANT EXECUTE.
No DB mutation. Attempts remain 0. Fingerprint unchanged.

## Solution

`shouldApplyProductExecutionEligibility(...)` — mechanical applicability predicate (NOT a policy engine).

### Canonical Product discriminant
`constraints` contains durable `PRODUCT_GOVERNED`.

### LEGACY PRODUCT COMPATIBILITY DISCRIMINANT
Exact historical surface (Batch Cookinb observed):
- action `product:read`
- target `product:project-workspace`
- scope `product:read-only`
- capability `cap:product-read`
Used so Product fail-closed still applies if PRODUCT_GOVERNED were absent.
Not a Product routing catalogue.

### Explicitly NOT used as Product discriminant
- FIXTURE_EXECUTOR_BOUNDARY_ONLY alone
- NO_REAL / NO_CURSOR_REAL alone
- presence/absence of baseHeadSha
- fixture adapter presence

Select/Start call Product resolver **only if** shouldApply === true.

## Why not a new policy engine
- Binary applicability only (Product family vs not)
- Does not re-qualify mission, choose executor, or invent categories
- Product invariants remain in existing resolveProductExecutionEligibility

## Test Fixture Masking Check (m4Fixtures)
**TEST CONTEXT LEGITIMATE**
- `baseHeadSha` intrinsically required by StartExecution REAL (`extractContractBaseHeadSha`)
- repository identity fields support REAL launch-request identity when Project binding absent
- After isolation, non-Product ECs skip Product eligibility — these fields are NOT Product-policy masking

## D. FULL CONTENT — eligibility module + re-export

### FILE: `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts`
- sha256: 9afeff9679a8706fda96660af6b467ce9712c9581d5ad3a5b016af24f78d32b5
- lines: 303

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
 * Consumed by Authorize projection, UI Execute, Select (pre-Attempt), Start —
 * ONLY when {@link shouldApplyProductExecutionEligibility} is true.
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

/**
 * Durable Product family marker stamped by W3-A Product prepare
 * (`productConstraints`). Present on both canonical generic Product ECs and
 * the historical Batch Cookinb legacy Product EC (v2).
 */
export const PRODUCT_GOVERNED_CONSTRAINT = "PRODUCT_GOVERNED" as const;

/**
 * LEGACY PRODUCT COMPATIBILITY DISCRIMINANT — exact historical Product W3-A
 * surface observed on durable Batch Cookinb EC
 * `xct:w3a:dec:w2-trj:62b92385-…` (action/target/scope/capability).
 *
 * Not a Product routing catalogue. Not a mission type. Used only so Select/Start
 * still apply Product fail-closed invariants if an older Product EC somehow
 * lacked PRODUCT_GOVERNED (Batch Cookinb itself already carries PRODUCT_GOVERNED).
 */
export const LEGACY_PRODUCT_COMPAT_ACTION = "product:read" as const;
export const LEGACY_PRODUCT_COMPAT_TARGET =
  "product:project-workspace" as const;
export const LEGACY_PRODUCT_COMPAT_SCOPE = "product:read-only" as const;
export const LEGACY_PRODUCT_COMPAT_CAPABILITY = "cap:product-read" as const;

/**
 * Mechanical applicability: should Product PJ-REPROOF-05 Start invariants run?
 *
 * TRUE only for Product-family ExecutionContracts.
 * FALSE for F3 fixture, OA foundation lifecycle, sealed GCEC, and other
 * non-Product lanes that share SelectExecutionAgent / StartExecution.
 *
 * This is NOT a policy engine and does NOT choose read/write/docs-write/fixture.
 */
export function shouldApplyProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly action?: string | null;
  readonly target?: string | null;
  readonly scope?: string | null;
  readonly requiredCapabilities?: readonly string[] | null;
}): boolean {
  const constraints = input.constraints ?? [];
  if (constraints.includes(PRODUCT_GOVERNED_CONSTRAINT)) {
    return true;
  }

  // LEGACY PRODUCT COMPATIBILITY DISCRIMINANT (exact historical surface).
  const caps = input.requiredCapabilities ?? [];
  if (
    input.action === LEGACY_PRODUCT_COMPAT_ACTION &&
    input.target === LEGACY_PRODUCT_COMPAT_TARGET &&
    input.scope === LEGACY_PRODUCT_COMPAT_SCOPE &&
    caps.includes(LEGACY_PRODUCT_COMPAT_CAPABILITY)
  ) {
    return true;
  }

  return false;
}

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
- sha256: b463bd1d0c8f716391c1ae21f4a7f597ed5246616017d854ff7ae9fb73b7d839
- lines: 17

```typescript
/**
 * Re-export — canonical module lives in lib/oa/execution-contract (shared by
 * Authorize, UI, Select, Start without features→lib inversion).
 */
export {
  TRAJECTORY_NON_EXECUTE_STOPS,
  filterTrajectoryNonExecuteStopsFromEc,
  resolveProductExecutionEligibility,
  shouldApplyProductExecutionEligibility,
  PRODUCT_GOVERNED_CONSTRAINT,
  LEGACY_PRODUCT_COMPAT_ACTION,
  LEGACY_PRODUCT_COMPAT_TARGET,
  LEGACY_PRODUCT_COMPAT_SCOPE,
  LEGACY_PRODUCT_COMPAT_CAPABILITY,
  type ProductExecutionEligibility,
  type ProductExecutionEligibilityReasonCode,
} from "@/lib/oa/execution-contract/domain/resolveProductExecutionEligibility";
```

### FILE: `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts` (FULL)
- sha256: 4d186013b2bb24eb97d1267c0e5f3c2ad84098410a238ef7176214ac671b89fa
- lines: 927

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
  shouldApplyProductExecutionEligibility,
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
  seedConfirmedContract,
  seedProject,
  seedStandardCycle,
  agentDescriptor,
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

describe("PJ-REPROOF-05 — Product vs non-Product eligibility isolation", () => {
  it("shouldApply: PRODUCT_GOVERNED and legacy surface only", () => {
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["PRODUCT_GOVERNED"],
        action: "studio.cursor.generalist.execute",
        target: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
      }),
    ).toBe(true);

    // LEGACY PRODUCT COMPATIBILITY — exact Batch Cookinb surface, no PRODUCT_GOVERNED.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL"],
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
      }),
    ).toBe(true);

    // F3 / fixture historical — FIXTURE stamp alone is NOT Product.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL"],
        action: "fixture-docs-prepare",
        target: "sfia-studio/f3-fixture-only",
        scope: "f3-fixture:docs+metadata-only",
        requiredCapabilities: ["cap:f3-fixture-docs"],
      }),
    ).toBe(false);

    // OA foundation lifecycle — not Product.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["no-runtime-code"],
        action: "publish-modeled-pack",
        target: "sfia-v3-modeled/v3-native-option-a",
        scope: "docs+schemas+examples only",
        requiredCapabilities: ["cap:git-docs"],
      }),
    ).toBe(false);

    // Sealed GCEC docs-write surface — not Product canonical.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: [],
        action: "cursor.docs_write.apply",
        target: "repo:docs",
        scope: "bounded_docs_write",
        requiredCapabilities: ["cap:m4.bounded_docs_write"],
      }),
    ).toBe(false);
  });

  it("legacy Product surface WITHOUT PRODUCT_GOVERNED still fail-closed at Select", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "pj05-leg-compat-"));
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

    // Exact historical surface — deliberately omit PRODUCT_GOVERNED.
    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:legacy-compat-surface",
        cycleInstanceId: "cyc:std-001",
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
        constraints: [
          "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
          "NO_REAL",
          "NO_CURSOR_REAL",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
        inputs: {
          baseHeadSha: M4_TEST_BASE_HEAD_SHA,
          repositoryBindingIdentity: "acme/legacy",
          objective: "legacy without PRODUCT_GOVERNED marker",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    expect(built.contract.constraints).not.toContain("PRODUCT_GOVERNED");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: built.contract.constraints,
        action: built.contract.action,
        target: built.contract.target,
        scope: built.contract.scope,
        requiredCapabilities: built.contract.requiredCapabilities,
      }),
    ).toBe(true);

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "product:read-only",
      evidenceId: M4_EVIDENCE,
    });
    await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:legacy-compat",
      executionContractId: validated.contract.executionContractId,
      idempotencyKey: "idem:pj05:legacy-compat",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected reject");
    expect(selected.error.detailCode).toBe("ATTEMPT_INVALID");
    expect(String(selected.error.internalCauseRef ?? "")).toContain(
      "execution_ineligible",
    );
    const listed = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: validated.contract.executionContractId,
    });
    expect(listed.ok).toBe(true);
    if (listed.ok) expect(listed.attempts.length).toBe(0);
    journal.close();
  });

  it("F3 historical fixture EC through generic Select/Start without Product launch context", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(
      stack.decisions.authority,
      "f3-fixture:docs+metadata-only",
      M4_EVIDENCE,
    );
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:f3-hist",
        cycleInstanceId: "cyc:std-001",
        action: "fixture-docs-prepare",
        target: "sfia-studio/f3-fixture-only",
        scope: "f3-fixture:docs+metadata-only",
        requiredCapabilities: ["cap:f3-fixture-docs"],
        // Historical F3 stamps — NOT Product PRODUCT_GOVERNED / FIXTURE_EXECUTOR_…
        constraints: ["FIXTURE ONLY", "NO REAL"],
        stopConditions: ["AUTHORITY_DENIED"],
        // Deliberately NO baseHeadSha / repository identity
        inputs: { objective: "f3 historical fixture prepare" },
        authorityEvidenceId: M4_EVIDENCE,
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    expect(built.contract.constraints).not.toContain("PRODUCT_GOVERNED");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: built.contract.constraints,
        action: built.contract.action,
        target: built.contract.target,
        scope: built.contract.scope,
        requiredCapabilities: built.contract.requiredCapabilities,
      }),
    ).toBe(false);

    // Product resolver alone would fail — proving isolation is required.
    expect(
      resolveProductExecutionEligibility({
        constraints: built.contract.constraints,
        stopConditions: built.contract.stopConditions,
        inputs: (built.contract.inputs ?? {}) as Record<string, unknown>,
      }).eligible,
    ).toBe(false);

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "f3-fixture:docs+metadata-only",
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

    // Exact sealed F3 fixture agent criteria (resolveAttemptExecutionProfile).
    const f3Agent = agentDescriptor({
      agentId: "agt:f3-fixture",
      agentType: "fixture_docs_writer",
      supportedCapabilities: ["cap:f3-fixture-docs"],
      allowedActions: ["fixture-docs-prepare"],
      allowedTargets: ["sfia-studio/f3-fixture-only"],
      allowedScopes: ["f3-fixture:docs+metadata-only"],
    });
    const fixtureAdapter = new TestExecutionAdapter();
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [f3Agent],
      adapter: fixtureAdapter,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:f3-hist",
      executionContractId: confirmed.contract.executionContractId,
      idempotencyKey: "idem:pj05:f3-hist",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
      requestedAgentRef: "agt:f3-fixture",
    });
    if (!selected.ok) {
      throw new Error(
        `f3 select failed: ${selected.error.detailCode} ${selected.error.internalCauseRef ?? ""} ${selected.error.message}`,
      );
    }
    expect(selected.ok).toBe(true);
    expect(selected.attempt.status).toBe("accepted");

    const started = await stack.attempts.startExecution.execute({
      attemptId: selected.attempt.attemptId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.detailCode);
    expect(started.attempt.status).toBe("running");
    expect(fixtureAdapter.launchCallCount).toBeGreaterThan(0);
  });

  it("OA foundation non-Product lifecycle Select without Product trusted context", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const loaded = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        action: loaded.contract.action,
        target: loaded.contract.target,
        scope: loaded.contract.scope,
        requiredCapabilities: loaded.contract.requiredCapabilities,
      }),
    ).toBe(false);
    expect(loaded.contract.inputs?.baseHeadSha).toBeUndefined();

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:oa-foundation",
      executionContractId: contractId,
      idempotencyKey: "idem:pj05:oa-foundation",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.error.detailCode);
    expect(selected.attempt.status).toBe("accepted");
  });
});
```

## E. COMPLETE diffs (isolation-scope + related)

### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index e971da91..5c25605e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -11,6 +11,7 @@ import type {
   CheckExecutionAuthorization,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
+import { resolveProductExecutionEligibility, shouldApplyProductExecutionEligibility } from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import { captureBoundExecutionContractSnapshot } from "../domain/boundExecutionContract";
 import {
@@ -190,6 +191,34 @@ export class SelectExecutionAgent {
         );
       }

+      // PJ-REPROOF-05 — Product Start invariants ONLY for Product-family ECs.
+      // F3 / OA foundation / sealed GCEC share these use-cases and must not
+      // receive Product trusted-launch / stamp fail-closed rules.
+      if (
+        shouldApplyProductExecutionEligibility({
+          constraints: contract.constraints,
+          action: contract.action,
+          target: contract.target,
+          scope: contract.scope,
+          requiredCapabilities: contract.requiredCapabilities,
+        })
+      ) {
+        const eligibility = resolveProductExecutionEligibility({
+          constraints: contract.constraints,
+          stopConditions: contract.stopConditions,
+          inputs:
+            contract.inputs && typeof contract.inputs === "object"
+              ? (contract.inputs as Record<string, unknown>)
+              : null,
+        });
+        if (!eligibility.eligible) {
+          return fail(
+            "ATTEMPT_INVALID",
+            `execution_ineligible_${eligibility.reasonCode}`,
+          );
+        }
+      }
+
       const evidenceRead = this.listProjectEvidence
         ? await this.listProjectEvidence(contract.projectId)
         : { ok: false as const, reason: "evidence_reader_unavailable" as const };
```

### DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index e60e8899..dab249b1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -38,6 +38,8 @@ import {
   DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
   projectExecutionContractToCursorPrompt,
   resolveExecutionWindowForStart,
+  resolveProductExecutionEligibility,
+  shouldApplyProductExecutionEligibility,
   type ResolvedExecutionWindow,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
@@ -486,6 +488,34 @@ export class StartExecution {
         );
       }

+      // PJ-REPROOF-05 — Product Start invariants ONLY for Product-family ECs
+      // (defense in depth; same applicability as Select).
+      if (
+        shouldApplyProductExecutionEligibility({
+          constraints: contract.constraints,
+          action: contract.action,
+          target: contract.target,
+          scope: contract.scope,
+          requiredCapabilities: contract.requiredCapabilities,
+        })
+      ) {
+        const eligibility = resolveProductExecutionEligibility({
+          constraints: contract.constraints,
+          stopConditions: contract.stopConditions,
+          inputs:
+            contract.inputs && typeof contract.inputs === "object"
+              ? (contract.inputs as Record<string, unknown>)
+              : null,
+        });
+        if (!eligibility.eligible) {
+          return fail(
+            "ATTEMPT_INVALID",
+            `execution_ineligible_${eligibility.reasonCode}`,
+            { executionContractId: contract.executionContractId },
+          );
+        }
+      }
+
       const agent = this.registry.getAgent(attempt.selectedAgentRef);
       if (!agent) {
         return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
```

### NEW (untracked): `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts` — full content above

### DIFF: `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 4baedb0f..fc1706ae 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -22,6 +22,19 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export {
+  TRAJECTORY_NON_EXECUTE_STOPS,
+  filterTrajectoryNonExecuteStopsFromEc,
+  resolveProductExecutionEligibility,
+  shouldApplyProductExecutionEligibility,
+  PRODUCT_GOVERNED_CONSTRAINT,
+  LEGACY_PRODUCT_COMPAT_ACTION,
+  LEGACY_PRODUCT_COMPAT_TARGET,
+  LEGACY_PRODUCT_COMPAT_SCOPE,
+  LEGACY_PRODUCT_COMPAT_CAPABILITY,
+  type ProductExecutionEligibility,
+  type ProductExecutionEligibilityReasonCode,
+} from "./domain/resolveProductExecutionEligibility";
 export {
   computeExecutionContractSemanticFingerprint,
   computeExecutionContractSemanticMaterialFingerprint,
```

### NEW (untracked): `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts` — full content above

### NEW (untracked): `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts` — full content above

### DIFF: `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
index 1a4a0f4a..76a01f21 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
@@ -1,5 +1,13 @@
 /**
- * Shared M4 REAL-OFF test fixtures (contract inputs.baseHeadSha, wiring).
+ * Shared M4 REAL-OFF test fixtures.
+ *
+ * TEST CONTEXT LEGITIMATE (not Product-eligibility masking):
+ * - `baseHeadSha` is intrinsically required by StartExecution REAL launch
+ *   (`extractContractBaseHeadSha`) for M4/GCEC/generalist REAL paths.
+ * - repository identity fields supply launch-request identity when the test
+ *   stack has no Project.repositoryBinding; they are NOT required to satisfy
+ *   Product `resolveProductExecutionEligibility` after Product/non-Product
+ *   isolation (non-Product ECs skip that resolver).
  */
 export const M4_TEST_BASE_HEAD_SHA =
   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
@@ -8,6 +16,16 @@ export const M4_EVIDENCE = "evd:morris-n3";

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

## F. Validations

Commands:
```
npx vitest run \
  __tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts \
  __tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts \
  __tests__/project-assistant/w3aGovernedExecute.test.ts \
  __tests__/oa/execution-attempt/lifecycleFoundation.test.ts \
  __tests__/project-assistant/f3.fixtureVerticalSlice.test.ts \
  __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx \
  __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
npx tsc --noEmit
git diff --check
```

| Suite | Result |
|---|---|
| pjReproof05.executionEligibility.d0 | 14/14 PASS (incl. isolation F3/OA/legacy-compat) |
| pjReproof04 | 12/12 PASS |
| w3aGovernedExecute | 24/24 PASS |
| lifecycleFoundation | included in 131 batch PASS |
| f3.fixtureVerticalSlice | 9/9 PASS |
| UI trajectory suites | 48 PASS |
| **Batch** | **131/131 PASS** |
| tsc --noEmit | PASS exit 0 |
| git diff --check | PASS |

## G. Fake/Real
- TestOnlyRealExecutionLaunchPort used: yes (Product generic path)
- REAL Cursor processes: **0**
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## H. Acceptance mapping
- A canonical Product generic Cursor: yes
- B no Product categories reintroduced: yes
- C eligibility mechanical: yes
- D Select/Start skip non-Product: yes
- E legacy Product fail-closed: yes (PRODUCT_GOVERNED + stamps; compat surface too)
- F F3 lifecycle without Product launch context: yes
- G GCEC/pjReproof04: yes
- H canonical Product Select/Start: yes
- I hostile Product Select Attempt=0: yes
- J no new policy engine: yes
- K REAL=0: yes
- L project push/PR/merge=0: yes

## I. Remaining debt (explicitly out of scope)
- historical product:* token cleanup
- qualifiedOperationKind cleanup
- Product Record / CURSOR_REPORT_PENDING bridge
- Evidence REAL adapter / Product Journey REAL reproof

## J. Forbidden actions respected
- no project commit/push/PR/merge; no REAL; no DB mutation; no doctrine edits

## Final verdict

**READY FOR CHATGPT FINAL REVIEW — PJ-REPROOF-05 PRODUCT/NON-PRODUCT ELIGIBILITY ISOLATION PROVEN**
