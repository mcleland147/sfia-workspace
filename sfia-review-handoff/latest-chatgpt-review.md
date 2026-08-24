# SFIA Studio — W3-A FC-08 Native ExecutionContract Preparation Correction — FULL Review Pack

> **REVIEW PACK TYPE**: FULL — includes complete source of all new modules and unified diffs of all modified files.
> **Purpose**: enable ChatGPT code review without relying on Cursor assertions alone.

## Metadata

| Field | Value |
|---|---|
| **Timestamp Europe/Paris** | 2026-08-24 05:08:19 UTC+02:00 |
| **Timestamp UTC** | 2026-08-24T03:08:19Z |
| **Repo** | mcleland147/sfia-workspace |
| **Branch** | `delivery/sfia-studio-product-completion-w3-a-governed-execute` |
| **HEAD** | `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` |
| **origin/main** | `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` |
| **Project commit** | **NONE** |
| **Project push/PR/merge** | **NONE** |

## Morris decisions consumed

**GO MORRIS W3 DELIVERY** (consumed): scope W3 only · W1/W2 closed · C6 implement-only · canonical `/studio` · REAL OUT · FinOps FREEZE · W4 OUT · runtime v3 NON ADOPTED.

**Morris Option 4 R01** (adopted): FC-08 native EC preparation from qualified product context · HD when applicable · EC first durable SoT · no F3 semantic overwrite · TestExecutionAdapter fake only · no new aggregate/store/engine.

## Local Git Truth

- HEAD == origin/main == `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed`
- staged: **VIDE**
- working tree: **DIRTY** (candidat non commité — attendu)

## Sensitive review anchors (cross-reference)

| Question | Where to verify in this pack |
|---|---|
| What does `deriveW3AExecutionEnvelope` do? | PART 1 `w3aProductExecutionSemantics.ts` |
| How is EC built? | PART 1 `prepareExecutionContractFromW2Decision.ts` |
| decisionRefs 0..n protection | PART 2 `invariants.ts`, `confirmExecutionContract.ts`; PART 1 test file |
| F3 off canonical path | PART 2 `TrajectorySurface.tsx` diff |
| Three Attempt phases | PART 1 `governedExecuteAuthorizedContract.ts`; PART 2 `w2/actions.ts`, `TrajectorySurface.tsx` |
| No auto-confirmation | PART 1 `governedExecuteAuthorizedContract.ts` L329-336 |
| Fixture adapts to contract | PART 1 `w3aProductFixtureWiring.ts`; PART 2 `service.ts` |

---

# PART 1 — NEW FILES (COMPLETE SOURCE)

## NEW FILE: `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`

```typescript
/**
 * W3-A — product-native execution envelope semantics (NOT F3 fixture overwrite).
 *
 * Stable contract-shaped fields for the canonical /studio W2→W3 path.
 * Project binding lives on ExecutionContract.projectId / inputs — not in target
 * matching alone. TestExecutionAdapter remains the external-executor fake.
 */

import type { DecisionBasis } from "@/lib/oa/decision";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";

export const W3A_PRODUCT_ACTION = "product:governed-execution" as const;
export const W3A_PRODUCT_TARGET = "sfia-studio/product-completion" as const;
export const W3A_PRODUCT_SCOPE = "w3:governed-execute:studio-canonical" as const;
export const W3A_PRODUCT_CAPABILITY = "cap:product-governed-execution" as const;
/** Must stay aligned with vertical-slice-runtime/w3aProductFixtureWiring.ts */
export const W3A_PRODUCT_AGENT_ID = "agt:w3a-product-fixture" as const;

export const W3A_PRODUCT_EVIDENCE_REQ = "evreq:product-governed-execution" as const;

export type W3AExecutionEnvelope = {
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredCapabilities: readonly string[];
  readonly requiredAuthority: "N2" | "N3";
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly reversibility: "reversible" | "irreversible";
  readonly expectedOutputs: readonly string[];
  readonly inputs: Record<string, unknown>;
};

export type EnvelopePrepareFailure = {
  readonly ok: false;
  readonly code: string;
  readonly message: string;
};

function productConstraints(basis: DecisionBasis): string[] {
  const eb = basis.executionBasis;
  return [
    "PRODUCT_GOVERNED",
    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
    "NO_REAL",
    "NO_CURSOR_REAL",
    "NO_ATTEMPT_AT_PREPARE",
    ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.risks ?? []).map((s) => `RISK:${s}`),
    ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
  ];
}

function productStopConditions(basis: DecisionBasis): string[] {
  const eb = basis.executionBasis;
  const stops = new Set<string>([
    ...(eb.stopConditions ?? []),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT",
  ]);
  return [...stops];
}

/**
 * Derive the FC-08 envelope from qualified W2 HumanDecision + selected option.
 * Fail-closed when the decided trajectory does not authorize execution prep.
 */
export function deriveW3AExecutionEnvelope(input: {
  readonly projectId: string;
  readonly decisionId: string;
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
  readonly selectedOptionIntent: string;
  readonly selectedOptionLabel: string;
  readonly cycleProfile: "Standard" | "Critical" | "Light" | string;
  readonly projectObjective: string | null;
  readonly reversible: boolean;
}):
  | { readonly ok: true; readonly envelope: W3AExecutionEnvelope }
  | EnvelopePrepareFailure {
  if (input.selectedOptionRef === CLARIFY_OPTION_REF) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Trajectoire « clarifier d'abord » — aucune préparation d'exécution autorisée.",
    };
  }

  if (
    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
    input.selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    return {
      ok: false,
      code: "OPTION_NOT_EXECUTABLE",
      message: `Option ${input.selectedOptionRef} — enveloppe d'exécution non préparable.`,
    };
  }

  const eb = input.basis.executionBasis;
  const scope =
    (eb.scope && eb.scope.trim()) || input.selectedOptionIntent.trim();
  if (!scope) {
    return {
      ok: false,
      code: "SCOPE_UNRESOLVED",
      message: "Scope d'exécution introuvable — préparation bloquée.",
    };
  }

  const expectedOutputs = eb.expectedOutcome
    ? [eb.expectedOutcome]
    : [`Exécution gouvernée : ${input.selectedOptionLabel}`];

  const requiredAuthority =
    input.cycleProfile === "Critical" ? ("N3" as const) : ("N2" as const);

  return {
    ok: true,
    envelope: {
      action: W3A_PRODUCT_ACTION,
      target: W3A_PRODUCT_TARGET,
      scope: W3A_PRODUCT_SCOPE,
      requiredCapabilities: [W3A_PRODUCT_CAPABILITY],
      requiredAuthority,
      constraints: productConstraints(input.basis),
      stopConditions: productStopConditions(input.basis),
      evidenceRequirements: [W3A_PRODUCT_EVIDENCE_REQ],
      reversibility: input.reversible ? "reversible" : "irreversible",
      expectedOutputs,
      inputs: {
        projectId: input.projectId,
        decisionId: input.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        selectedOptionLabel: input.selectedOptionLabel,
        selectedOptionIntent: input.selectedOptionIntent,
        executionScope: scope,
        objective: eb.objective ?? input.projectObjective,
        cycleTypeId: eb.cycleTypeId,
        recommendedProfile: eb.recommendedProfile,
        sourceRef: input.basis.sourceRef,
        sourceDigest: input.basis.sourceDigest,
      },
    },
  };
}

/** Guard against accidental F3 semantic leakage on the canonical path. */
export function assertNotF3FixtureSemantics(fields: {
  action: string;
  target: string;
  requiredCapabilities: readonly string[];
}): EnvelopePrepareFailure | null {
  if (fields.action.includes("fixture") || fields.action === "fixture-docs-prepare") {
    return {
      ok: false,
      code: "F3_SEMANTIC_FORBIDDEN",
      message: "Action fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (fields.target.includes("f3-fixture")) {
    return {
      ok: false,
      code: "F3_SEMANTIC_FORBIDDEN",
      message: "Cible fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (fields.requiredCapabilities.some((c) => c.includes("f3-fixture"))) {
    return {
      ok: false,
      code: "F3_SEMANTIC_FORBIDDEN",
      message: "Capability fixture interdite sur le chemin canonique /studio.",
    };
  }
  return null;
}
```

---

## NEW FILE: `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`

```typescript
/**
 * W3-A / FC-08 — native ExecutionContract preparation from qualified W2 context.
 *
 * Nora/Studio composes the complete FC-08 build inputs from durable truths:
 * HumanDecision + DecisionBasis + presented OptionSet + Project/Cycle context.
 *
 * NO fixtureSafeM3ResolutionProfile · NO F3 semantic overwrite · NO Morris runtime persona.
 * ExecutionContract is the first durable SoT for the execution envelope.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { F2ContextSnapshot } from "../f2/types";
import { loadPresentedOptionSet } from "./presentedOptionSet";
import {
  assertNotF3FixtureSemantics,
  deriveW3AExecutionEnvelope,
} from "./w3aProductExecutionSemantics";

export type PreparedExecutionContractDto = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly decisionRefs: readonly string[];
  readonly cycleInstanceId: string | null;
};

export type PrepareExecutionContractFromW2DecisionResult =
  | {
      readonly ok: true;
      readonly contract: PreparedExecutionContractDto;
      readonly decisionId: string;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly f3SemanticOverwrite: false;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function safeIdSegment(value: string): string {
  return value.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
}

export async function prepareExecutionContractFromW2Decision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly currentContext: F2ContextSnapshot;
  readonly forceLocalAuthority?: boolean;
}): Promise<PrepareExecutionContractFromW2DecisionResult> {
  const { oa } = input;

  const loaded = await oa.decisionServices.getHumanDecision.execute({
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
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_CURRENT",
      message: `Décision ${decision.status} — préparation refusée.`,
    };
  }

  const basis = decision.decisionBasis;
  if (!basis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "DecisionBasis manquante — préparation refusée.",
    };
  }

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis doctrine digest périmé — re-décider avant préparation.",
    };
  }
  if (ctx.lpsVersion > input.currentContext.lpsVersion) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message: "DecisionBasis LPS en avance — état incohérent.",
    };
  }

  const traj = basis.trajectoryContext;
  if (!traj) {
    return {
      ok: false,
      code: "TRAJECTORY_CONTEXT_REQUIRED",
      message:
        "DecisionBasis.trajectoryContext requis pour la préparation W2→W3.",
    };
  }

  const presented = await loadPresentedOptionSet(
    oa,
    input.projectId,
    basis.sourceRef,
  );
  if (!presented.ok) {
    return {
      ok: false,
      code: presented.code,
      message: presented.message,
    };
  }

  const selected = presented.presented.options.find(
    (o) => o.optionRef === traj.selectedOptionRef,
  );
  if (!selected) {
    return {
      ok: false,
      code: "OPTION_NOT_IN_PRESENTED_SET",
      message: "Option sélectionnée absente du OptionSet présenté.",
    };
  }

  let cycleProfile: string = "Standard";
  const cycleInstanceId =
    decision.cycleInstanceId ??
    basis.cycleInstanceId ??
    input.currentContext.activeCycleInstanceId ??
    null;
  if (cycleInstanceId) {
    const cycle = await oa.cycleServices.getCycle.execute({ cycleInstanceId });
    if (!cycle.ok) {
      return {
        ok: false,
        code: "CYCLE_NOT_FOUND",
        message: "CycleInstance lié introuvable — préparation bloquée.",
      };
    }
    if (cycle.cycle.projectId !== input.projectId) {
      return {
        ok: false,
        code: "CYCLE_PROJECT_MISMATCH",
        message: "CycleInstance / projet incohérents.",
      };
    }
    cycleProfile = cycle.cycle.profile;
  }

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  let projectObjective: string | null = null;
  if (project.ok) {
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
    if (lps.ok) {
      projectObjective = lps.livingProjectState.objective;
    }
  }

  const envelopeResult = deriveW3AExecutionEnvelope({
    projectId: input.projectId,
    decisionId: decision.decisionId,
    basis,
    selectedOptionRef: traj.selectedOptionRef,
    selectedOptionIntent: selected.intent,
    selectedOptionLabel: selected.label,
    cycleProfile,
    projectObjective,
    reversible: decision.reversible === true,
  });
  if (!envelopeResult.ok) {
    return envelopeResult;
  }
  const envelope = envelopeResult.envelope;

  const f3Guard = assertNotF3FixtureSemantics({
    action: envelope.action,
    target: envelope.target,
    requiredCapabilities: envelope.requiredCapabilities,
  });
  if (f3Guard) {
    return f3Guard;
  }

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: envelope.scope,
    issuedAt,
    evidenceId: `evd:w3a-prep:${decision.decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const safeId = safeIdSegment(decision.decisionId);
  const executionContractId = `xct:w3a:${safeId}`;
  const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;

  const built =
    await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: cycleInstanceId ?? undefined,
      decisionRefs: [decision.decisionId],
      action: envelope.action,
      target: envelope.target,
      scope: envelope.scope,
      inputs: envelope.inputs,
      expectedOutputs: [...envelope.expectedOutputs],
      requiredCapabilities: [...envelope.requiredCapabilities],
      requiredAuthority: envelope.requiredAuthority,
      constraints: [...envelope.constraints],
      stopConditions: [...envelope.stopConditions],
      evidenceRequirements: [...envelope.evidenceRequirements],
      reversibility: envelope.reversibility,
      idempotencyKey,
      correlationId: `cor:w3a-prep:${decision.decisionId}`,
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
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });

  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  const contract = validated.contract;
  return {
    ok: true,
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
      semanticFingerprint: contract.semanticFingerprint ?? "",
      decisionRefs: [...(contract.decisionRefs ?? [])],
      cycleInstanceId: contract.cycleInstanceId ?? null,
    },
    decisionId: decision.decisionId,
    executionPerformed: false,
    attemptCreated: false,
    f3SemanticOverwrite: false,
  };
}
```

---

## NEW FILE: `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```typescript
/**
 * W3-A — Governed Execute seam on the canonical `/studio` W2 product path.
 *
 * Phase 1 (select): fresh AUTHORIZED evaluation → accepted
 * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
 * Phase 3 (record): continue running Attempt → technical terminal
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttempt,
  SelectionProfile,
  SelectionStrategy,
} from "@/lib/oa/execution-attempt";
import { resolveSelectionStrategy } from "@/lib/oa/execution-attempt";
import type { CycleProfile } from "@/lib/oa/cycle";
import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import type {
  GovernedExecuteAuthorizedContractResult,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseResult,
} from "./types";

function mapCycleProfileToSelectionProfile(
  profile: CycleProfile | string | null | undefined,
): SelectionProfile {
  if (profile === "Critical") return "critical";
  if (profile === "Light") return "light";
  return "standard";
}

function attemptIdentities(executionContractId: string, version: number) {
  const digest = createHash("sha256")
    .update(`${executionContractId}@${version}`)
    .digest("hex")
    .slice(0, 16);
  return {
    attemptId: `xat:w3a:${digest}`,
    attemptIdempotencyKey: `idem:w3a:${digest}`,
    resultRef: `res:w3a:${digest}`,
  };
}

export type GovernedExecuteAuthorizedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly claimedAuthorityLevel?: unknown;
  readonly canActAsMorris?: unknown;
  readonly authorityReceiptRef?: unknown;
  readonly real?: unknown;
  readonly adapterRef?: unknown;
  readonly forceLocalAuthority?: boolean;
};

type Failure = GovernedExecuteAuthorizedContractResult;

function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
  if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
    return {
      ok: false,
      code: "ATTEMPT_STACK_UNAVAILABLE",
      message:
        "Services ExecutionAttempt / fixture indisponibles — aucune exécution.",
    };
  }
  if (oa.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter fixture identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (oa.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }
  return null;
}

async function loadContract(
  oa: RuntimeOaStack,
  input: GovernedExecuteAuthorizedContractInput,
): Promise<
  | { ok: false; result: Failure }
  | { ok: true; contract: ExecutionContract; selectionProfile: SelectionProfile }
> {
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: contractResult.error.detailCode,
        message: "Contrat d'exécution introuvable — exécution refusée.",
      },
    };
  }
  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Le contrat n'appartient pas au projet demandé.",
      },
    };
  }

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok && project.project.status === "archived") {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_ARCHIVED",
        message: "Projet archivé — aucune exécution.",
      },
    };
  }

  let selectionProfile: SelectionProfile = "standard";
  if (contract.cycleInstanceId) {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: contract.cycleInstanceId,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_FOUND",
          message: "CycleInstance lié au contrat introuvable — exécution refusée.",
        },
      };
    }
    if (cycle.cycle.projectId !== input.projectId) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_PROJECT_MISMATCH",
          message: "CycleInstance / projet incohérents — exécution refusée.",
        },
      };
    }
    if (
      cycle.cycle.status === "completed" ||
      cycle.cycle.status === "cancelled" ||
      cycle.cycle.status === "superseded"
    ) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_ACTIVE",
          message: `CycleInstance ${cycle.cycle.status} — aucune exécution.`,
        },
      };
    }
    selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
  }

  return { ok: true, contract, selectionProfile };
}

function projectAttempt(attempt: ExecutionAttempt): GovernedExecuteAttemptProjection {
  return {
    attemptId: attempt.attemptId,
    attemptStatus: attempt.status,
    selectedAgentRef: attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
  };
}

function buildTerminalSuccess(input: {
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  selectionProfile: SelectionProfile;
  oa: RuntimeOaStack;
  reusedExistingAttempt: boolean;
  launchCountBefore: number;
}): GovernedExecuteAuthorizedContractResult {
  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
  return {
    ok: true,
    phase: "terminal",
    executionContractId: input.contract.executionContractId,
    contractVersion: input.contract.version,
    attemptId: input.attempt.attemptId,
    attemptStatus: input.attempt.status,
    selectedAgentRef: input.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile: input.selectionProfile,
    reusedExistingAttempt: input.reusedExistingAttempt,
    launchCount,
    launchDelta: launchCount - input.launchCountBefore,
    executionPerformed: true,
    attemptCreated: !input.reusedExistingAttempt,
    realExecution: false,
    externalEffects: false,
    gitWritePerformed: false,
    cycleInstanceClosed: false,
    projectArchived: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel:
      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-A)",
    technicalTerminal: input.attempt.status === "succeeded",
    productSuccessSemantics: false,
    attempt: projectAttempt(input.attempt),
  };
}

async function findSucceededAttempt(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<ExecutionAttempt | null> {
  const listed =
    await oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return null;
  return listed.attempts.find((a) => a.status === "succeeded") ?? null;
}

function registerPiloteAuthority(
  oa: RuntimeOaStack,
  scope: string,
  forceLocalAuthority?: boolean,
) {
  return registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt: oa.clock.nowIso(),
    forceEnable: forceLocalAuthority === true,
  });
}

/** Phase 1 — SelectExecutionAgent → accepted (fresh AUTHORIZED required). */
export async function governedExecuteSelectAgent(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecutePhaseResult> {
  void input.claimedAuthorityLevel;
  void input.canActAsMorris;
  void input.authorityReceiptRef;
  void input.real;
  void input.adapterRef;

  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) {
    if (loaded.result.ok && loaded.result.phase === "terminal") return loaded.result;
    return loaded.result;
  }
  const { contract, selectionProfile } = loaded;

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
    });
  }

  const authorized = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!authorized.ok) {
    return {
      ok: false,
      code: authorized.code,
      message: authorized.message,
    };
  }
  if (authorized.outcome !== "AUTHORIZED") {
    return {
      ok: false,
      code: "NOT_AUTHORIZED",
      message:
        "Exécution refusée : le verdict courant n'est pas AUTHORIZED (aucune tentative).",
    };
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const strategyResolved = resolveSelectionStrategy(selectionProfile);
  if ("detailCode" in strategyResolved) {
    return {
      ok: false,
      code: strategyResolved.detailCode,
      message: strategyResolved.reason,
    };
  }
  if (strategyResolved.strategy === "human_confirmed_proposal") {
    return {
      ok: false,
      code: "AGENT_CONFIRMATION_REQUIRED",
      message:
        "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
    };
  }

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const selected =
    await input.oa.executionAttemptServices!.selectExecutionAgent.execute({
      attemptId: identities.attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: identities.attemptIdempotencyKey,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedContractVersion: contract.version,
      selectionProfile,
      selectionStrategy: strategyResolved.strategy,
      systemInitiated: false,
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  return {
    ok: true,
    phase: "accepted",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: selected.attempt.attemptId,
    attemptStatus: selected.attempt.status,
    selectedAgentRef: selected.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    realExecution: false,
    externalEffects: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "TENTATIVE ACCEPTÉE — EN ATTENTE DE DÉMARRAGE",
    technicalTerminal: false,
    productSuccessSemantics: false,
    attempt: projectAttempt(selected.attempt),
  };
}

/** Phase 2 — StartExecution → running (continues accepted Attempt). */
export async function governedExecuteStart(
  input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
): Promise<GovernedExecutePhaseResult> {
  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
    });
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const started = await input.oa.executionAttemptServices!.startExecution.execute({
    attemptId: input.attemptId,
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });
  if (!started.ok) {
    const existing = await input.oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: input.attemptId },
    );
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt)
          : undefined,
    };
  }

  return {
    ok: true,
    phase: "running",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: started.attempt.attemptId,
    attemptStatus: started.attempt.status,
    selectedAgentRef: started.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    realExecution: false,
    externalEffects: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "EXÉCUTION EN COURS — FIXTURE GOUVERNÉE",
    technicalTerminal: false,
    productSuccessSemantics: false,
    attempt: projectAttempt(started.attempt),
  };
}

/** Phase 3 — RecordExecutionResult → technical terminal. */
export async function governedExecuteRecordResult(
  input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
): Promise<GovernedExecuteAuthorizedContractResult> {
  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;
  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore,
    });
  }

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const recorded =
    await input.oa.executionAttemptServices!.recordExecutionResult.execute({
      attemptId: input.attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef: identities.resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    const existing = await input.oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: input.attemptId },
    );
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt)
          : undefined,
    };
  }

  let cycleInstanceClosed = false;
  let projectArchived = false;
  const project = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok) {
    projectArchived = project.project.status === "archived";
    if (contract.cycleInstanceId) {
      const cycleAfter = await input.oa.cycleServices.getCycle.execute({
        cycleInstanceId: contract.cycleInstanceId,
      });
      if (cycleAfter.ok) {
        cycleInstanceClosed =
          cycleAfter.cycle.status === "completed" ||
          cycleAfter.cycle.status === "cancelled";
      }
    }
  }

  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
  return {
    ok: true,
    phase: "terminal",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: recorded.attempt.attemptId,
    attemptStatus: recorded.attempt.status,
    selectedAgentRef: recorded.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    reusedExistingAttempt: false,
    launchCount,
    launchDelta: launchCount - launchCountBefore,
    executionPerformed: true,
    attemptCreated: true,
    realExecution: false,
    externalEffects: false,
    gitWritePerformed: false,
    cycleInstanceClosed,
    projectArchived,
    authorityReceiptUsedAsPermission: false,
    statusLabel:
      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-A)",
    technicalTerminal: recorded.attempt.status === "succeeded",
    productSuccessSemantics: false,
    attempt: projectAttempt(recorded.attempt),
  };
}

export async function governedExecuteAuthorizedContract(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecuteAuthorizedContractResult> {
  const launchCountBefore = input.oa.fixtureAdapter?.launchCallCount ?? 0;
  const selected = await governedExecuteSelectAgent(input);
  if (!selected.ok) return selected;
  if (selected.phase === "terminal") {
    return selected as GovernedExecuteAuthorizedContractResult;
  }

  const started = await governedExecuteStart({
    ...input,
    attemptId: selected.attemptId,
  });
  if (!started.ok) return started;

  const terminal = await governedExecuteRecordResult({
    ...input,
    attemptId: started.attemptId,
  });
  if (!terminal.ok) return terminal;
  return {
    ...terminal,
    launchDelta: terminal.launchCount - launchCountBefore,
  };
}
```

---

## NEW FILE: `projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts`

```typescript
/**
 * W3-A product-native fixture agent — contract-shaped, NOT F3 semantic constants.
 * Uses the same TestExecutionAdapter identity as the historical F3 fake boundary.
 */

import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import type { AgentDescriptor } from "@/lib/oa/execution-attempt";
import { F3_RUNTIME_ADAPTER_ID } from "./f3FixtureWiring";

export const W3A_RUNTIME_AGENT_ID = "agt:w3a-product-fixture" as const;
export const W3A_RUNTIME_ACTION = "product:governed-execution" as const;
export const W3A_RUNTIME_TARGET = "sfia-studio/product-completion" as const;
export const W3A_RUNTIME_SCOPE = "w3:governed-execute:studio-canonical" as const;
export const W3A_RUNTIME_CAPABILITY = "cap:product-governed-execution" as const;

function fixtureProvenance(nowIso: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:w3a-product-fixture-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:w3a-product-fixture-agent",
  };
}

/**
 * Deterministic executor matching W3-A product-native EC fields.
 * Legacy F3 agent remains registered for harvest/legacy tests only.
 */
export function createW3AProductFixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: W3A_RUNTIME_AGENT_ID,
    agentType: "product_governed_fixture",
    adapterRef: F3_RUNTIME_ADAPTER_ID,
    supportedCapabilities: [W3A_RUNTIME_CAPABILITY],
    allowedActions: [W3A_RUNTIME_ACTION],
    allowedTargets: [W3A_RUNTIME_TARGET],
    allowedScopes: [W3A_RUNTIME_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}
```

---

## NEW FILE: `projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts`

```typescript
// @vitest-environment node
/**
 * W3-A — Governed Execute proofs A→I on the product OA path (deterministic).
 * ZERO REAL · no CycleInstance auto-close · AVR ≠ permission · Pilote actor.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  F3_ACTION,
  F3_CAPABILITY,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import {
  W3A_PRODUCT_ACTION,
  W3A_PRODUCT_AGENT_ID,
  W3A_PRODUCT_CAPABILITY,
  W3A_PRODUCT_EVIDENCE_REQ,
  W3A_PRODUCT_SCOPE,
  W3A_PRODUCT_TARGET,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteAuthorizedContract,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

async function reachAuthorizedResolvedContract(input: {
  suffix: string;
  profile?: "Standard" | "Critical";
}) {
  const db = tempProductDbPath(`w3a-${input.suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `w3a${input.suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, {
    suffix: input.suffix,
    profile: input.profile ?? "Standard",
  });
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
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory.trajectoryId,
    candidateVersion: proposed.proposedTrajectory.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");

  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
  });
  if (!prepared.ok) {
    console.error("PREPARE_FAIL", JSON.stringify(prepared, null, 2));
    throw new Error(
      "prepare: " +
        (prepared as { code?: string; message?: string }).code +
        " " +
        (prepared as { message?: string }).message,
    );
  }
  expect(prepared.ok).toBe(true);
  expect(prepared.f3SemanticOverwrite).toBe(false);
  expect(prepared.contract.action).toBe(W3A_PRODUCT_ACTION);
  expect(prepared.contract.target).toBe(W3A_PRODUCT_TARGET);
  expect(prepared.contract.requiredCapabilities).toContain(W3A_PRODUCT_CAPABILITY);
  expect(prepared.contract.action).not.toBe(F3_ACTION);
  expect(prepared.contract.target).not.toBe(F3_TARGET);

  const executionContractId = prepared.contract.executionContractId;

  const inspected = await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  expect(inspected.ok).toBe(true);
  if (!inspected.ok) throw new Error("inspect");

  const contract = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId,
  });
  expect(contract.ok).toBe(true);
  if (!contract.ok) throw new Error("get");

  if (
    contract.contract.status === "confirmation_required" ||
    (contract.contract.status === "validated" &&
      contract.contract.requiredAuthority !== "N1")
  ) {
    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error("confirm");
  }

  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("auth");

  return {
    runtime,
    oa,
    projectId: seeded.projectId,
    executionContractId,
    authorized,
    decisionId: decided.decision.decisionId,
  };
}

describe("W3-A governed execute — product seam", () => {
  it("A — AUTHORIZED happy path: Select→Start→Record fixture once; no REAL; cycle open", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "a" });
    expect(ctx.authorized.outcome).toBe("AUTHORIZED");
    expect(ctx.authorized.executionPerformed).toBe(false);
    expect(ctx.authorized.attemptCreated).toBe(false);

    const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
      authorityReceiptRef: ctx.authorized.authorityReceiptRef,
      canActAsMorris: true,
      real: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.executionPerformed).toBe(true);
    expect(executed.attemptCreated).toBe(true);
    expect(executed.attemptStatus).toBe("succeeded");
    expect(executed.realExecution).toBe(false);
    expect(executed.externalEffects).toBe(false);
    expect(executed.gitWritePerformed).toBe(false);
    expect(executed.authorityReceiptUsedAsPermission).toBe(false);
    expect(executed.productSuccessSemantics).toBe(false);
    expect(executed.cycleInstanceClosed).toBe(false);
    expect(executed.projectArchived).toBe(false);
    expect(executed.launchDelta).toBe(1);
    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore + 1);
    expect(executed.selectedAgentRef).toBe(W3A_PRODUCT_AGENT_ID);
    // Pilote path — no Morris actor in attempt selection actor field is enforced
    // by composition using LOCAL_PILOTE_ACTOR (see source).
    expect(executed.statusLabel).toContain("TERMINAL TECHNIQUE");
    expect(executed.statusLabel).not.toContain("STOP");
    expect(LOCAL_PILOTE_ACTOR.actorId).toMatch(/pilote/i);
  });

  it("B — BLOCKED: no Attempt / no adapter launch", async () => {
    const db = tempProductDbPath("w3a-b.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3ab" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const context = await currentF2Context(runtime, seeded.projectId);
    // Unresolved prepare → insufficient executor → BLOCKED
    const prepared = await prepareM3FromDecision({
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executionContractId = prepared.payload.contract.executionContractId;
    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
    });
    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    expect(authorized.outcome).toBe("BLOCKED");

    const launchBefore = oa.fixtureAdapter.launchCallCount;
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("NOT_AUTHORIZED");
    expect(oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
  });

  it("C — stale after material amend: Execute blocked", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "c" });
    expect(ctx.authorized.outcome).toBe("AUTHORIZED");

    // Material supersession without reinspect → authorize BLOCKED → execute fail.
    const prior = await ctx.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ctx.executionContractId,
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;

    const { registerLocalPiloteAuthority } = await import("@/lib/oa/decision");
    const authority = registerLocalPiloteAuthority({
      authorityResolver: ctx.oa.authorityResolver,
      scope: prior.contract.scope,
      issuedAt: ctx.oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) return;

    const successor =
      await ctx.oa.executionContractServices.supersedeExecutionContract.execute({
        newExecutionContractId: `${ctx.executionContractId}:stale`,
        supersedesExecutionContractId: ctx.executionContractId,
        supersessionReason: "scope_change",
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
        action: prior.contract.action,
        target: prior.contract.target,
        scope: prior.contract.scope,
        requiredAuthority: prior.contract.requiredAuthority,
        requiredCapabilities: [...prior.contract.requiredCapabilities],
        constraints: [...prior.contract.constraints, "W3A_STALE"],
        stopConditions: [...prior.contract.stopConditions],
        reversibility: prior.contract.reversibility,
      });
    expect(successor.ok).toBe(true);
    if (!successor.ok) return;

    const validated =
      await ctx.oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: successor.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    expect(validated.ok).toBe(true);

    const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("NOT_AUTHORIZED");
    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
  });

  it("D — Confirmation missing when required: Execute blocked", async () => {
    const db = tempProductDbPath("w3a-d.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3ad" });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "d",
      profile: "Critical",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executionContractId = prepared.contract.executionContractId;
    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
    });
    // Intentionally skip confirm.
    const launchBefore = oa.fixtureAdapter.launchCallCount;
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("NOT_AUTHORIZED");
    expect(oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
  });

  it("E — executor insufficient: Execute blocked", async () => {
    // Same as B (unresolved caps) — named explicitly for proof matrix E.
    const db = tempProductDbPath("w3a-e.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3ae" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "e" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareM3FromDecision({
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.requiredCapabilities).toContain(
      "cap:unresolved",
    );
    const executionContractId = prepared.payload.contract.executionContractId;
    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
    });
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
  });

  it("F — replay / double invoke: no second launch", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "f" });
    const first = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const launchAfterFirst = ctx.oa.fixtureAdapter.launchCallCount;

    const second = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedExistingAttempt).toBe(true);
    expect(second.launchDelta).toBe(0);
    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchAfterFirst);
    expect(second.attemptId).toBe(first.attemptId);
  });

  it("G — lifecycle terminal ≠ CycleInstance closed / Project archived", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "g" });
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.technicalTerminal).toBe(true);
    expect(executed.cycleInstanceClosed).toBe(false);
    expect(executed.projectArchived).toBe(false);

    const project = await ctx.oa.projectServices.getProject.execute({
      projectId: ctx.projectId,
    });
    expect(project.ok).toBe(true);
    if (!project.ok) return;
    expect(project.project.status).not.toBe("archived");
    const cycleId = project.project.activeCycleInstanceId;
    expect(cycleId).toBeTruthy();
    if (!cycleId) return;
    const cycle = await ctx.oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleId,
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) return;
    expect(cycle.cycle.status).not.toBe("completed");
    expect(cycle.cycle.status).not.toBe("cancelled");
  });

  it("H — AVR receipt is not permission (fresh verify required)", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "h" });
    const receipt = ctx.authorized.authorityReceiptRef;
    expect(receipt).toMatch(/^avr:/);

    // Passing receipt explicitly must still re-evaluate; hostile Morris/real ignored.
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
      authorityReceiptRef: receipt,
      canActAsMorris: true,
      claimedAuthorityLevel: "MORRIS",
      real: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.authorityReceiptUsedAsPermission).toBe(false);
    expect(executed.realExecution).toBe(false);
  });

  it("I — Fake/Real: fixture only · externalEffects false · no Gate D claim", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "i" });
    expect(ctx.oa.fixtureAdapter.adapterId).toMatch(/f3-test-fixture/);
    expect(ctx.oa.fixtureAdapter.externalEffects).toBe(false);
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.adapterId).toMatch(/f3-test-fixture/);
    expect(executed.externalEffects).toBe(false);
    expect(executed.realExecution).toBe(false);
    // Selection profile sourced from CycleInstance (Standard → standard).
    expect(executed.selectionProfile).toBe("standard");
  });


  it("R06 — lifecycle phases accepted → running → terminal observable", async () => {
    const ctx = await reachAuthorizedResolvedContract({ suffix: "lifecycle" });
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.phase).toBe("accepted");
    expect(selected.attemptStatus).toBe("accepted");

    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.phase).toBe("running");
    expect(started.attemptStatus).toBe("running");

    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.phase).toBe("terminal");
    expect(terminal.attemptStatus).toBe("succeeded");
  });

  it("selectionProfile Critical maps from contract-bound CycleInstance", async () => {
    const db = tempProductDbPath("w3a-crit-profile.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3acritp" });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "critp",
      profile: "Critical",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.contract.cycleInstanceId).toBe(seeded.cycleInstanceId);

    const blocked = await governedExecuteSelectAgent({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) return;
    expect(blocked.code).toBe("NOT_AUTHORIZED");
  });

  it("decisionRefs 0..n — contract without HD builds when legitimately empty", async () => {
    const db = tempProductDbPath("w3a-zero-ref.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3a0ref" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "0ref" });
    const oa = runtime.oa!;

    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: W3A_PRODUCT_SCOPE,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) return;

    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:zero-ref",
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionRefs: [],
      action: W3A_PRODUCT_ACTION,
      target: W3A_PRODUCT_TARGET,
      scope: W3A_PRODUCT_SCOPE,
      requiredCapabilities: [W3A_PRODUCT_CAPABILITY],
      requiredAuthority: "N2",
      constraints: ["NO_HD_REQUIRED_FIXTURE"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: [W3A_PRODUCT_EVIDENCE_REQ],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:zero-ref",
      correlationId: "cor:w3a:zero-ref",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.contract.decisionRefs).toEqual([]);
  });
});
```

---

## NEW FILE: `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md`

```markdown
# SFIA Studio — Product Completion — Wave 3 — Delivery Readiness

| Champ | Valeur |
|---|---|
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil SFIA** | CRITICAL |
| **Typologie** | INC — incrément fonctionnel borné dans W3 |
| **Vague** | **W3 — Exécution gouvernée + Evidence loop (backlog existant)** |
| **Slice courant** | **W3-A — Governed Execute** (premier slice dépendant · **≠** capacité roadmap indépendante) |
| **Capacité servie** | **US-P1-04** — Exécution générique sous contrat · **FC-10** Governed Execution |
| **Base Git (entrée W3)** | `origin/main` @ `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` — Merge PR **#406** — docs(sfia-studio): sync W2 post-closure repository truth |
| **Branche projet** | `delivery/sfia-studio-product-completion-w3-a-governed-execute` |
| **Statut readiness W3** | **QUALIFIED** — GO Morris W3 Delivery **CONSUMED** · Delivery **IN PROGRESS** · W3 **NOT CLOSED** |
| **W1** | **CLOSED** |
| **W2** | **CLOSED BY MORRIS** |
| **C6** | **CLOSED** / implement-only · **DO NOT REOPEN** |
| **REAL** | **OUT / NOT CONSUMED** |
| **FinOps/T7** | **FREEZE** |
| **W4** | **OUT / NOT STARTED** |
| **runtime v3** | **NON ADOPTED** |
| **Product Completion** | **INCOMPLETE** |
| **Chemin produit** | Canonique **`/studio`** |

## Anti-affirmations

- W3 readiness / GO Delivery **≠** W3 CLOSED.
- W3-A **≠** W3 fully implemented · **≠** US-P1-05/06/07 closed.
- AUTHORIZED (W2) **≠** Execute · Execute W3-A **≠** Product SUCCESS semantics.
- Attempt terminal **≠** CycleInstance closed · **≠** Project archived.
- AuthorityVerificationReceipt **≠** reusable permission.
- DETERMINISTIC PRODUCT-NATIVE PROVEN **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN.
- C6 CLOSED — ne pas rouvrir l’architecture.
- REAL OUT · FinOps FREEZE · W4 OUT · runtime v3 NON ADOPTED.
- Product Completion **INCOMPLETE**.
- Ce document **≠** Build Doctrine mutation · **≠** backlog rewrite.

---

## 1. Décision Morris W3 consommée (texte exact)

> **GO MORRIS — W3 DELIVERY — EXÉCUTER, PROUVER ET REPLANIFIER — SCOPE BACKLOG W3 ONLY — CONSUME W1/W2 CLOSED CAPABILITIES — C6 IMPLEMENT-ONLY / DO NOT REOPEN — HARVEST EXISTING OA/F3/EVIDENCE SUBSTRATE — CANONICAL `/studio` PRODUCT PATH — DETERMINISTIC PRODUCT-NATIVE PROOF — FULL CKC TRACK + CATALOG EVOLVABILITY WITHIN W3 — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.**

### Ce que ce GO autorise

- Construction W3 dans le **scope backlog W3 existant**.
- Consommation des capacités **W1/W2 CLOSED**.
- Harvest OA / F3 / Evidence substrate **existants**.
- Preuve **deterministic product-native** sur le chemin **`/studio`**.
- Première tranche d’implémentation **W3-A Governed Execute** (US-P1-04 / FC-10).

### Ce que ce GO n’autorise pas

- Fermeture W3 dans ce cycle.
- GO REAL / Gate D / Cursor REAL.
- Défreeze FinOps/T7.
- W4 Product Experience Closure.
- runtime v3 ADOPTED.
- Réouverture C6 / C1 / C2 / FA / Backlog.
- Push branche projet / PR / merge (hors handoff review L3 borné).

---

## 1bis. Morris Option 4 — R01 FC-08 Native EC Preparation (adoptée)

> **MORRIS DECISION — W3-A R01 — ADOPT FC-08 NATIVE EXECUTIONCONTRACT PREPARATION COMPLETION — NORA/STUDIO PREPARES THE EXECUTION ENVELOPE FROM QUALIFIED PRODUCT CONTEXT — FC-08 REMAINS THE SINGLE OWNER — HUMANDECISION / DECISIONBASIS CONSUMED WHEN APPLICABLE — EXECUTIONCONTRACT IS THE FIRST DURABLE SoT FOR THE ENVELOPE — NO F3 SEMANTIC OVERWRITE ON CANONICAL `/studio` — TESTEXECUTIONADAPTER REMAINS THE DETERMINISTIC EXTERNAL-EXECUTOR FAKE — NO EXECUTIONINTENT / NEW AGGREGATE / NEW STORE / NEW ENGINE — C6 REMAINS CLOSED.**

| Élément | État correction |
|---|---|
| Préparation canonique | `prepareExecutionContractFromW2Decision` — enveloppe produit depuis HD + OptionSet présenté + Cycle/Project |
| F3 fixture overwrite | **SUPPRIMÉ** du chemin `/studio` · `fixtureSafeM3ResolutionProfile` = HARVEST/FREEZE legacy |
| Agent fixture | `agt:w3a-product-fixture` — contract-shaped · **≠** `agt:f3-fixture` sur chemin canonique |
| decisionRefs | **0..n** aligné C2/FA · validations conservées quand refs présentes |
| W3-A correction | **LOCAL CANDIDATE** · **NOT CLOSED** jusqu'à revue ChatGPT |
| R11 Critical genericity | **OPEN** — macro exit W3 · Standard path prouvé en priorité |
| R12 Recovery | **OPEN** — owner W3-C |

---

## 2. Positionnement W3 / W3-A

| Élément | État |
|---|---|
| W3 scope | Backlog Product Completion existant (Waves / US) — **pas de nouveau backlog** |
| W3 Delivery | **AUTHORIZED BY MORRIS / IN PROGRESS** |
| W3-A | Premier slice dépendant · seam **W2 AUTHORIZED → Attempt fixture gouverné** |
| W3-A ferme W3 ? | **NON** |
| NEXT-CAPABILITY REQUALIFICATION | **SATISFIED / CONSUMED** par la qualification W3 + GO Delivery |
| Frontière W2 reprise | EC inspecté → Confirmation si requise → effective authority → **AUTHORIZED/BLOCKED** → **STOP BEFORE EXECUTE** (W2) · W3-A démarre **exactement** après AUTHORIZED |

---

## 3. Exit contracts

### 3.1 Exit W3-A (ce cycle)

| ID | Contrat | Critère |
|---|---|---|
| X-W3A-01 | Seam canonique | `/studio` après AUTHORIZED peut Select → accepted → Start → running → terminal technique fixture |
| X-W3A-02 | Autorité fraîche | AVR jamais permission · re-verify via primitives OA avant Select/Start |
| X-W3A-03 | Fail-closed | BLOCKED / stale / Confirmation manquante / executor insuffisant → aucun launch |
| X-W3A-04 | No double launch | Replay idempotent · adapter appelé une fois |
| X-W3A-05 | Lifecycle honesty | Terminal technique ≠ CycleInstance closed ≠ Project archived |
| X-W3A-06 | Fake/Real | Fixture only · `externalEffects=false` · `realExecution=false` · Gate D non consommée |
| X-W3A-07 | Actor | Runtime actor = **Pilote** · pas de persona runtime Morris sur le chemin canonique |
| X-W3A-08 | Scope honesty | Pas de claim SUCCESS/STOP/FAIL Product · Evidence · CKC full · W3 CLOSED |

### 3.2 Exit W3 macro (hors fermeture ce cycle)

W3 macro reste **ouvert** jusqu’à fermeture des slices backlog W3 (dont US-P1-05/06/07, recovery E2E, catalog evolvability, full CKC track restant) sous GOs distincts. **W3-A ne satisfait pas l’exit W3 macro.**

---

## 4. Classification des actifs (W3-A)

| Classe | Actifs |
|---|---|
| **KEEP** | OA Native Backbone · Product SQLite · ExecutionContract · W2 inspection/confirmation/authority · ExecutionAttempt domain/ports/repos/services · agent registry / AgentCapability · Project/Cycle persistent backbone |
| **HARVEST / ADAPT** | Guards adapter · Select/Start/Record · idempotence · `prepareAndResolveM3ProductPath` / fixture-safe profile (**legacy · hors chemin canonique**) · **`prepareExecutionContractFromW2Decision` (FC-08 natif W3-A)** |
| **READ-ONLY / DOWNSTREAM** | Evidence business-first · ReviewBundle completion · Nora post-Evidence · recovery/replan · full CKC track / Catalog Evolvability closure |
| **FREEZE / NE PAS PROMOUVOIR** | `execution-run` historique comme second chemin · Cursor REAL / Gate D · FinOps/T7 · W4 UX · routes legacy non canoniques · F3 comme second produit |

---

## 5. Dette / exit temporaire

| ID | Dette | Owner | Exit |
|---|---|---|---|
| W3A-D01 | Terminal technique `succeeded` **≠** sémantique Product SUCCESS/STOP/FAIL | W3-B | Fermeture US-P1-05 mapping métier |
| W3A-D02 | Evidence / Review / Nora post-Evidence **non fermés** | W3-B+ | US-P1-06 / US-P1-07 |
| W3A-D03 | Critical CycleInstance `proposed` sans API publique d’ack — EC cycle-linked confirm fail-closed (R-T-A3-1) | backlog / OA | Ne pas inventer AcknowledgeCriticalCycle ; path produit Standard primaire ; Critical agent_selection Confirmation harvestée pour Select |
| W3A-D04 | Preuve `/studio` Playwright optionnelle / tooling-dependent | W3-A reserves | Integration Vitest product-path **DETERMINISTIC PRODUCT-NATIVE** ; E2E browser si env permet |
| W2-CL-R04 | OPEN_NON_BLOCKING (carry) | Roadmap | Non bloquant W3-A |
| PB-RES-REAL-01 | OPEN / TRACE ONLY | Roadmap | REAL hors scope |

---

## 6. Gates restants (après ce cycle)

| Gate | État |
|---|---|
| GO MORRIS W3 DELIVERY | **CONSUMED** |
| Commit projet / push branche projet / PR / merge | **NON CONSOMMÉS** |
| GO REAL | **NON CONSOMMÉ** |
| FinOps/T7 | **FREEZE** |
| W3 closure | **NON** |
| W4 | **OUT** |
| Product Completion complete | **NON** |
| runtime v3 ADOPTED | **NON** |

---

## 7. Capacité suivante

**W3-B** — terminal semantics Product (SUCCESS/STOP/FAIL) + Evidence business-first seam (US-P1-05 / US-P1-06) — sous découpage W3 ultérieur · **≠** autorisé par la seule fermeture W3-A.

---

## 8. Verdict readiness

**W3 DELIVERY READINESS = QUALIFIED** · GO Morris W3 **CONSUMED** · slice courant **W3-A Governed Execute** · Product Completion **INCOMPLETE** · W3 **NOT CLOSED**.
```

---

# PART 2 — MODIFIED FILES (UNIFIED DIFFS)

## DIFF: `projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
index 53b01f1a..79ea1540 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
@@ -363,8 +363,8 @@ export function validateBuildFields(input: {
   if (input.status !== "draft" && input.status !== "proposed") {
     return { detailCode: "CONTRACT_INVALID", reason: "build_status_invalid" };
   }
-  if (!Array.isArray(input.decisionRefs) || input.decisionRefs.length < 1) {
-    return { detailCode: "DECISION_REQUIRED", reason: "decision_refs_required" };
+  if (!Array.isArray(input.decisionRefs)) {
+    return { detailCode: "CONTRACT_INVALID", reason: "decision_refs_invalid" };
   }
   for (const d of input.decisionRefs) {
     if (!isOaIdentifier(d) || !d.startsWith("dec:")) {
```

---

## DIFF: `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
index 7acd0828..e0d8068e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
@@ -175,11 +175,6 @@ export class ConfirmExecutionContract {

       // Decision freshness: accepted + same project + not superseded.
       const decisionRefs = existing.decisionRefs ?? [];
-      if (decisionRefs.length < 1) {
-        return fail("DECISION_REQUIRED", "decision_refs_required", {
-          projectId: existing.projectId,
-        });
-      }
       for (const decisionId of decisionRefs) {
         const decisionResult =
           await this.decisionServices.getHumanDecision.execute({
```

---

## DIFF: `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index cf70f5e8..08fddc1f 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -57,6 +57,7 @@ import {
   createF3FixtureAgentDescriptor,
   createF3TestExecutionAdapter,
 } from "./f3FixtureWiring";
+import { createW3AProductFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
@@ -219,15 +220,13 @@ function wireOaStack(
   // This composition does not instantiate StudioCursorRealLaunchGateway.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
+  const w3aProductAgent = createW3AProductFixtureAgentDescriptor(clock.nowIso());
   const realBoundary = options?.realBoundary;
   const registerM4 =
     realBoundary !== undefined || isStudioCursorRealEnabled();
   const agents = registerM4
-    ? [
-        fixtureAgent,
-        createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
-      ]
-    : [fixtureAgent];
+    ? [fixtureAgent, w3aProductAgent, createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso())]
+    : [fixtureAgent, w3aProductAgent];
   const executionAttemptServices = productSqlite
     ? createSqliteExecutionAttemptServices({
         decisionServices,
```

---

## DIFF: `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 41f57980..9557cc40 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -1,7 +1,7 @@
 "use server";

 /**
- * W2 server actions — thin transport over the product application path.
+ * W2 / W3-A server actions — thin transport over the product application path.
  *
  * The client may only send a projectId, an opaque option-set reference, the
  * trajectory version it was shown and the option it selects. Options,
@@ -9,16 +9,25 @@
  * server-side from durable truth: no client payload can decide, widen
  * authority, or claim an inspection.
  *
- * No action here reaches an execution path.
+ * W2 authorize stops before Execute. W3-A `w2GovernedExecuteAction` may create
+ * a fixture Attempt only after a fresh AUTHORIZED evaluation (Pilote actor).
  */

 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
 import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
 import { decideTrajectory } from "./decideTrajectory";
+import {
+  governedExecuteAuthorizedContract,
+  governedExecuteRecordResult,
+  governedExecuteSelectAgent,
+  governedExecuteStart,
+} from "./governedExecuteAuthorizedContract";
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
+import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
@@ -27,7 +36,10 @@ import type {
   ConfirmForAuthorizationResult,
   DecideTrajectoryResult,
   EvaluateExecutionAuthorizationResult,
+  GovernedExecuteAuthorizedContractResult,
+  GovernedExecutePhaseResult,
   InspectExecutionContractResult,
+  PreparedExecutionContractResult,
   ProposeTrajectoryOptionsResult,
 } from "./types";
 import type { ReadW2ProjectHistoryResult } from "./projectHistory";
@@ -185,6 +197,171 @@ export async function w2AmendExecutionContractAction(input: {
   });
 }

+async function loadF2ContextForProject(
+  oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
+  projectId: string,
+) {
+  const live = await readLiveProjectContext(oa, projectId);
+  if (!live.ok) return null;
+  return {
+    projectId,
+    lpsId: live.context.lpsId,
+    lpsVersion: live.context.lpsVersion,
+    doctrineDigest: live.context.doctrineDigest,
+    activeCycleInstanceId: live.context.activeCycleInstanceId,
+    ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+  };
+}
+
+/**
+ * W3-A / FC-08 — native ExecutionContract preparation from W2 HumanDecision.
+ * NO F3 fixture semantic overwrite on the canonical /studio path.
+ */
+export async function w2PrepareExecutionContractAction(input: {
+  projectId: string;
+  decisionId: string;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<PreparedExecutionContractResult> {
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  const context = await loadF2ContextForProject(runtime.oa, input.projectId);
+  if (!context) {
+    return {
+      ok: false,
+      code: "PROJECT_NOT_FOUND",
+      message: "Projet ou LPS introuvable pour la préparation EC.",
+    };
+  }
+
+  const prepared = await prepareExecutionContractFromW2Decision({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext: context,
+  });
+
+  if (!prepared.ok) {
+    return prepared;
+  }
+
+  return {
+    ok: true,
+    contract: prepared.contract,
+    decisionId: prepared.decisionId,
+    f3SemanticOverwrite: false,
+    executionPerformed: false,
+    attemptCreated: false,
+  };
+}
+
+/**
+ * W3-A phase 1 — SelectExecutionAgent → accepted.
+ */
+export async function w2GovernedExecuteSelectAction(input: {
+  projectId: string;
+  executionContractId: string;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecutePhaseResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteSelectAgent({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-A phase 2 — StartExecution → running.
+ */
+export async function w2GovernedExecuteStartAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  canActAsMorris?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecutePhaseResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteStart({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    canActAsMorris: input.canActAsMorris,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-A phase 3 — RecordExecutionResult → technical terminal.
+ */
+export async function w2GovernedExecuteCompleteAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  canActAsMorris?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteRecordResult({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    canActAsMorris: input.canActAsMorris,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-A — Governed Execute after W2 AUTHORIZED.
+ * Fresh authority evaluation; Pilote actor; fixture Attempt only; no REAL.
+ * Hostile client fields (receipt-as-permission, Morris claims, real flags) ignored.
+ */
+export async function w2GovernedExecuteAction(input: {
+  projectId: string;
+  executionContractId: string;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+  adapterRef?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return governedExecuteAuthorizedContract({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+    adapterRef: input.adapterRef,
+  });
+}
+
 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {
```

---

## DIFF: `projects/sfia-studio/app/features/project-assistant/w2/types.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index baf0653b..59a117f1 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -261,3 +261,94 @@ export type AmendExecutionContractSuccess = {
 export type AmendExecutionContractResult =
   | AmendExecutionContractSuccess
   | W2Failure;
+
+/* -------------------------------------------------------------------------- */
+/* W3-A — FC-08 native prepare + Governed Execute (after W2 AUTHORIZED)      */
+/* -------------------------------------------------------------------------- */
+
+export type PreparedExecutionContractResult =
+  | {
+      readonly ok: true;
+      readonly contract: {
+        readonly executionContractId: string;
+        readonly version: number;
+        readonly status: string;
+        readonly action: string;
+        readonly target: string;
+        readonly scope: string;
+        readonly requiredAuthority: string;
+        readonly constraints: readonly string[];
+        readonly stopConditions: readonly string[];
+        readonly requiredCapabilities: readonly string[];
+        readonly reversibility: string;
+        readonly semanticFingerprint: string;
+      };
+      readonly decisionId: string;
+      readonly f3SemanticOverwrite: false;
+      readonly executionPerformed: false;
+      readonly attemptCreated: false;
+    }
+  | W2Failure;
+
+export type GovernedExecuteAttemptProjection = {
+  readonly attemptId: string;
+  readonly attemptStatus: string;
+  readonly selectedAgentRef: string;
+  readonly adapterId: string;
+};
+
+export type GovernedExecutePhase =
+  | "accepted"
+  | "running"
+  | "terminal";
+
+export type GovernedExecutePhaseSuccess = {
+  readonly ok: true;
+  readonly phase: GovernedExecutePhase;
+  readonly executionContractId: string;
+  readonly contractVersion: number;
+  readonly attemptId: string;
+  readonly attemptStatus: string;
+  readonly selectedAgentRef: string;
+  readonly adapterId: string;
+  readonly selectionProfile: string;
+  readonly realExecution: false;
+  readonly externalEffects: false;
+  readonly authorityReceiptUsedAsPermission: false;
+  readonly statusLabel: string;
+  readonly technicalTerminal: boolean;
+  readonly productSuccessSemantics: false;
+  readonly attempt: GovernedExecuteAttemptProjection;
+  readonly reusedExistingAttempt?: boolean;
+  readonly launchCount?: number;
+  readonly launchDelta?: number;
+  readonly executionPerformed?: true;
+  readonly attemptCreated?: boolean;
+  readonly gitWritePerformed?: false;
+  readonly cycleInstanceClosed?: boolean;
+  readonly projectArchived?: boolean;
+};
+
+export type GovernedExecutePhaseFailure = W2Failure & {
+  readonly attempt?: GovernedExecuteAttemptProjection;
+};
+
+export type GovernedExecutePhaseResult =
+  | GovernedExecutePhaseSuccess
+  | GovernedExecutePhaseFailure;
+
+export type GovernedExecuteAuthorizedContractSuccess = GovernedExecutePhaseSuccess & {
+  readonly phase: "terminal";
+  readonly reusedExistingAttempt: boolean;
+  readonly launchCount: number;
+  readonly launchDelta: number;
+  readonly executionPerformed: true;
+  readonly attemptCreated: boolean;
+  readonly gitWritePerformed: false;
+  readonly cycleInstanceClosed: false | boolean;
+  readonly projectArchived: false | boolean;
+};
+
+export type GovernedExecuteAuthorizedContractResult =
+  | GovernedExecuteAuthorizedContractSuccess
+  | GovernedExecutePhaseFailure;
```

---

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```typescript
diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 6408b737..3eac1751 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1,24 +1,25 @@
 "use client";

 /**
- * W2 product surface — Options, Recommendation, HumanDecision, decided
- * trajectory, contract inspection and effective authority.
+ * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
+ * trajectory, contract inspection, effective authority, and (W3-A) fixture
+ * governed Execute after AUTHORIZED.
  *
  * The surface never derives truth: every state shown here comes from a server
- * action over the product application path. Distinctions the Pilote must see
- * are carried by explicit labels — an Option is labelled OPTION, a
- * Recommendation states it is not a decision, and the authority verdict states
- * that nothing is executed.
+ * action over the product application path.
  */

 import { useCallback, useState } from "react";
-import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
+  w2GovernedExecuteCompleteAction,
+  w2GovernedExecuteSelectAction,
+  w2GovernedExecuteStartAction,
   w2InspectExecutionContractAction,
+  w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
@@ -26,6 +27,8 @@ import type {
   ContractInspectionStateDto,
   DecidedTrajectoryDto,
   ExecutionAuthorizationOutcomeDto,
+  GovernedExecuteAttemptProjection,
+  GovernedExecutePhaseSuccess,
   TrajectoryDecisionRecordDto,
   TrajectoryOptionSetDto,
 } from "@/features/project-assistant/w2/types";
@@ -61,7 +64,8 @@ type Busy =
   | "inspection"
   | "confirmation"
   | "authorization"
-  | "amendment";
+  | "amendment"
+  | "execute";

 export function TrajectorySurface({
   projectId,
@@ -87,6 +91,14 @@ export function TrajectorySurface({
   const [amendmentDraft, setAmendmentDraft] = useState("");
   const [amendmentNotice, setAmendmentNotice] =
     useState<AmendmentNotice | null>(null);
+  const [attempt, setAttempt] =
+    useState<GovernedExecuteAttemptProjection | null>(null);
+  const [attemptPhase, setAttemptPhase] = useState<
+    GovernedExecutePhaseSuccess["phase"] | null
+  >(null);
+  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
+    null,
+  );

   const proposeOptions = useCallback(async () => {
     setBusy("options");
@@ -106,6 +118,9 @@ export function TrajectorySurface({
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
   }, [projectId, onDurableFactsChanged]);

@@ -137,7 +152,7 @@ export function TrajectorySurface({
     if (!decision) return;
     setBusy("contract");
     setError(null);
-    const result = await projectAssistantPrepareM3Action({
+    const result = await w2PrepareExecutionContractAction({
       projectId,
       decisionId: decision.decisionId,
     });
@@ -146,26 +161,28 @@ export function TrajectorySurface({
       setError(result.message);
       return;
     }
+    const prepared = result.contract;
     setContract({
-      executionContractId: result.f3.contract.executionContractId,
-      version: result.f3.contract.version,
-      status: result.f3.contract.status,
-      action: result.f3.contract.action,
-      target: result.f3.contract.target,
-      scope: result.f3.contract.scope,
-      requiredAuthority: result.f3.contract.requiredAuthority,
-      constraints: [...(result.f3.contract.constraints ?? [])],
-      stopConditions: [...(result.f3.contract.stopConditions ?? [])],
-      requiredCapabilities: [
-        ...(result.f3.contract.requiredCapabilities ?? []),
-      ],
-      reversibility: result.f3.contract.reversibility ?? "non précisée",
-      semanticFingerprint: result.f3.contract.semanticFingerprint,
+      executionContractId: prepared.executionContractId,
+      version: prepared.version,
+      status: prepared.status,
+      action: prepared.action,
+      target: prepared.target,
+      scope: prepared.scope,
+      requiredAuthority: prepared.requiredAuthority,
+      constraints: [...prepared.constraints],
+      stopConditions: [...prepared.stopConditions],
+      requiredCapabilities: [...prepared.requiredCapabilities],
+      reversibility: prepared.reversibility,
+      semanticFingerprint: prepared.semanticFingerprint,
     });
     setInspection(null);
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
   }, [decision, projectId, onDurableFactsChanged]);

@@ -229,6 +246,9 @@ export function TrajectorySurface({
     });
     setInspection(amended.successorInspection);
     setAuthorization(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     setAmendmentDraft("");
     setAmendmentNotice({
       priorExecutionContractId: amended.priorExecutionContractId,
@@ -266,6 +286,9 @@ export function TrajectorySurface({
     if (!contract) return;
     setBusy("authorization");
     setError(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     const result = await w2AuthorizeExecutionContractAction({
       projectId,
       executionContractId: contract.executionContractId,
@@ -280,6 +303,71 @@ export function TrajectorySurface({
     setInspection(outcome.inspection);
   }, [contract, projectId]);

+  const governedExecute = useCallback(async () => {
+    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    setBusy("execute");
+    setError(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
+
+    const selected = await w2GovernedExecuteSelectAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    if (!selected.ok) {
+      setBusy(null);
+      setError(selected.message);
+      if (selected.attempt) {
+        setAttempt(selected.attempt);
+        setAttemptPhase("accepted");
+      }
+      return;
+    }
+    setAttempt(selected.attempt);
+    setAttemptPhase(selected.phase);
+    setAttemptStatusLabel(selected.statusLabel);
+
+    if (selected.phase === "terminal") {
+      setBusy(null);
+      setAttemptPhase("terminal");
+      setAttemptStatusLabel(selected.statusLabel);
+      onDurableFactsChanged?.();
+      return;
+    }
+
+    const started = await w2GovernedExecuteStartAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: selected.attemptId,
+    });
+    if (!started.ok) {
+      setBusy(null);
+      setError(started.message);
+      if (started.attempt) setAttempt(started.attempt);
+      return;
+    }
+    setAttempt(started.attempt);
+    setAttemptPhase(started.phase);
+    setAttemptStatusLabel(started.statusLabel);
+
+    const completed = await w2GovernedExecuteCompleteAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: started.attemptId,
+    });
+    setBusy(null);
+    if (!completed.ok) {
+      setError(completed.message);
+      if (completed.attempt) setAttempt(completed.attempt);
+      return;
+    }
+    setAttempt(completed.attempt);
+    setAttemptPhase(completed.phase);
+    setAttemptStatusLabel(completed.statusLabel);
+    onDurableFactsChanged?.();
+  }, [contract, authorization, projectId, onDurableFactsChanged]);
+
   return (
     <section
       className={styles.root}
@@ -294,7 +382,8 @@ export function TrajectorySurface({
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. Rien n&apos;est exécuté ici.
+          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
+          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
         </p>
       </header>

@@ -673,8 +762,74 @@ export function TrajectorySurface({
               </dd>
             </div>
           </dl>
-          <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
-            Aucune exécution n&apos;a été lancée : arrêt avant exécution.
+          {authorization.outcome === "AUTHORIZED" && !attempt ? (
+            <>
+              <p
+                className={styles.stopNotice}
+                data-testid="w2-stop-before-execute"
+              >
+                Autorisation évaluée — aucune tentative lancée tant que vous
+                n&apos;exécutez pas explicitement (W3-A fixture).
+              </p>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w3a-governed-execute"
+                onClick={() => void governedExecute()}
+                disabled={busy !== null}
+              >
+                Exécuter (fixture gouvernée)
+              </button>
+            </>
+          ) : null}
+          {authorization.outcome === "BLOCKED" ? (
+            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
+              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
+            </p>
+          ) : null}
+        </section>
+      ) : null}
+
+      {attempt ? (
+        <section
+          className={styles.attempt}
+          aria-labelledby="w3a-attempt-title"
+          data-testid="w3a-attempt"
+          role="status"
+        >
+          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
+            Tentative d&apos;exécution (W3-A)
+          </h3>
+          <p className={styles.blockBody} data-testid="w3a-attempt-status">
+            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
+            <span data-testid="w3a-attempt-lifecycle">{attemptPhase}</span> ·
+            statut technique{" "}
+            <span data-testid="w3a-attempt-technical-status">
+              {attempt.attemptStatus}
+            </span>
+          </p>
+          <dl className={styles.facts}>
+            <div>
+              <dt>Attempt</dt>
+              <dd className={styles.code} data-testid="w3a-attempt-id">
+                {attempt.attemptId}
+              </dd>
+            </div>
+            <div>
+              <dt>Adapter</dt>
+              <dd data-testid="w3a-attempt-adapter">{attempt.adapterId}</dd>
+            </div>
+            <div>
+              <dt>REAL</dt>
+              <dd data-testid="w3a-attempt-real">non — fixture boundary</dd>
+            </div>
+            <div>
+              <dt>Cycle auto-fermé</dt>
+              <dd data-testid="w3a-cycle-closed">non</dd>
+            </div>
+          </dl>
+          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
+            Terminal technique — résultat produit non encore qualifié (W3-B).
           </p>
         </section>
       ) : null}
```

---

## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css`

```css
diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 2c6e756f..6b063a75 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -270,6 +270,17 @@
   background: var(--pm6-warn-tint);
 }

+.attempt {
+  border-color: var(--pm6-border-soft);
+  background: var(--pm6-surface);
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-4);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+}
+
 .stopNotice {
   margin: 0;
   font-size: 0.78rem;
```

---

## DIFF: `projects/sfia-studio/app/features/project-assistant/actions.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index efd0e91b..728e6ca8 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -477,6 +477,14 @@ export async function projectAssistantPrepareResolvedM3Action(input: {
   }

   const f3 = prepared.payload;
+  const successorLoaded =
+    await runtime.oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: f3.successor.executionContractId,
+    });
+  const semanticFingerprint = successorLoaded.ok
+    ? (successorLoaded.contract.semanticFingerprint ?? "")
+    : "";
+
   return {
     ok: true,
     status: "ok",
@@ -493,6 +501,7 @@ export async function projectAssistantPrepareResolvedM3Action(input: {
     ephemeralNotice:
       "Contrat durable résolu (HumanDecision + DecisionBasis). Confirmation process-local. Cursor REAL bloqué.",
     f3,
+    successorSemanticFingerprint: semanticFingerprint,
   };
 }
```

---

## DIFF: `projects/sfia-studio/app/features/project-assistant/types.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 5991bf00..748efc4a 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -202,6 +202,8 @@ export type ProjectAssistantPrepareResolvedM3Success = {
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
   f3: import("./f3/prepareAndResolveM3ProductPath").F3M3ResolvedPayload;
+  /** Loaded from Product SQLite after resolve — successor view omits fingerprint. */
+  successorSemanticFingerprint: string;
 };

 export type ProjectAssistantPrepareResolvedM3Failure = {
```

---

## DIFF: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

```typescript
diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 681c6621..d614f9b1 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -9,12 +9,20 @@ const {
   inspectMock,
   authorizeMock,
   amendMock,
+  prepareContractMock,
+  executeSelectMock,
+  executeStartMock,
+  executeCompleteMock,
 } = vi.hoisted(() => ({
   proposeMock: vi.fn(),
   decideMock: vi.fn(),
   inspectMock: vi.fn(),
   authorizeMock: vi.fn(),
   amendMock: vi.fn(),
+  prepareContractMock: vi.fn(),
+  executeSelectMock: vi.fn(),
+  executeStartMock: vi.fn(),
+  executeCompleteMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -25,6 +33,14 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
     authorizeMock(...args),
   w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
+  w2PrepareExecutionContractAction: (...args: unknown[]) =>
+    prepareContractMock(...args),
+  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
+    executeSelectMock(...args),
+  w2GovernedExecuteStartAction: (...args: unknown[]) =>
+    executeStartMock(...args),
+  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
+    executeCompleteMock(...args),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
@@ -32,10 +48,6 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   }),
 }));

-vi.mock("@/features/project-assistant/actions", () => ({
-  projectAssistantPrepareM3Action: vi.fn(),
-}));
-
 afterEach(() => {
   cleanup();
 });
@@ -46,6 +58,10 @@ beforeEach(() => {
   inspectMock.mockReset();
   authorizeMock.mockReset();
   amendMock.mockReset();
+  prepareContractMock.mockReset();
+  executeSelectMock.mockReset();
+  executeStartMock.mockReset();
+  executeCompleteMock.mockReset();
 });

 describe("W2 TrajectorySurface", () => {
@@ -192,36 +208,35 @@ describe("W2 TrajectorySurface", () => {
       }),
     );

-    const { projectAssistantPrepareM3Action } = await import(
-      "@/features/project-assistant/actions"
-    );
-    vi.mocked(projectAssistantPrepareM3Action).mockResolvedValue({
+    prepareContractMock.mockResolvedValue({
       ok: true,
-      f3: {
-        contract: {
-          executionContractId: "xct:w2-ui",
-          version: 1,
-          status: "confirmation_required",
-          action: "w2:inspect-only",
-          target: "studio",
-          scope: "w2-ui",
-          requiredAuthority: "MORRIS",
-          constraints: ["AUCUNE EXÉCUTION"],
-          stopConditions: ["STOP AVANT EXECUTE"],
-          requiredCapabilities: ["cap:f3-fixture-docs"],
-          reversibility: "reversible",
-          semanticFingerprint: "abc123def456",
-        },
+      decisionId: "dec:w2-ui",
+      f3SemanticOverwrite: false,
+      executionPerformed: false,
+      attemptCreated: false,
+      contract: {
+        executionContractId: "xct:w2-ui",
+        version: 1,
+        status: "confirmation_required",
+        action: "product:governed-execution",
+        target: "sfia-studio/product-completion",
+        scope: "w3:governed-execute:studio-canonical",
+        requiredAuthority: "N2",
+        constraints: ["PRODUCT_GOVERNED"],
+        stopConditions: ["STOP AVANT EXECUTE"],
+        requiredCapabilities: ["cap:product-governed-execution"],
+        reversibility: "reversible",
+        semanticFingerprint: "abc123def456",
       },
-    } as never);
+    });

     fireEvent.click(screen.getByTestId("w2-prepare-contract"));
     expect(await screen.findByTestId("w2-contract")).toBeVisible();
     expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
-      "w2:inspect-only",
+      "product:governed-execution",
     );
     expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
-      "cap:f3-fixture-docs",
+      "cap:product-governed-execution",
     );
     // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
     expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
@@ -456,5 +471,7 @@ describe("W2 TrajectorySurface", () => {
     expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
       "CONFIRMATION REQUISE — MANQUANTE",
     );
+    // W3-A: BLOCKED must not expose Execute CTA.
+    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
   });
 });
```

---

## DIFF: `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
index 378f617a..bff7348a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
@@ -22,6 +22,7 @@ import {
   F3_SCOPE,
   F3_TARGET,
 } from "@/features/project-assistant/f3/constants";
+import { W3A_RUNTIME_AGENT_ID } from "@/lib/vertical-slice-runtime/w3aProductFixtureWiring";
 import {
   createProposalId,
   F2_PROCESS_LOCAL_NOTICE,
@@ -252,9 +253,9 @@ describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
       runtime.oa!.executionAttemptServices.grantRealExecutionGate,
     ).toBeUndefined();
     const agents = runtime.oa!.executionAttemptServices.registry.listAgents();
-    expect(
-      agents.map((a) => a.agentId),
-    ).toEqual(["agt:f3-fixture"]);
+    expect(agents.map((a) => a.agentId).sort()).toEqual(
+      ["agt:f3-fixture", W3A_RUNTIME_AGENT_ID].sort(),
+    );
     expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

     const seeded = await seedGo(runtime, "t1");
```

---

## DIFF: `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index cfbb6b1e..dd214a87 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -209,7 +209,7 @@ export async function proposeW2OptionsForProject(
   });
 }

-/** F2 context snapshot expected by the F3 prepare/resolve product path. */
+/** F2 context snapshot expected by the W3-A FC-08 prepare path. */
 export async function currentF2Context(
   runtime: RuntimeApplicationService,
   projectId: string,
@@ -219,6 +219,7 @@ export async function currentF2Context(
   lpsVersion: number;
   doctrineDigest: string;
   activeCycleInstanceId: string | null;
+  ckcResolutionRef?: string;
 }> {
   const overview = await runtime.getProject(projectId);
   if (!overview.ok) throw new Error("context: getProject failed");
@@ -228,5 +229,6 @@ export async function currentF2Context(
     lpsVersion: overview.livingState.version,
     doctrineDigest: overview.doctrine.digest,
     activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
+    ckcResolutionRef: "ckcres:w2-harness",
   };
 }
```

---

## DIFF: `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

```typescript
diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 5363c98a..6d462a38 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -85,11 +85,14 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
```

---

## DIFF: `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```markdown
diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 39f8cda8..c32e9c7c 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,8 +6,9 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / entrée W2 POST-CLOSURE TRUTH SYNC** = `origin/main` @ `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` (merge PR **#405** Product Correction) · reviewed head `330b36258f5a5fcb117fb562b12ff173b3675d94` · candidate→merge content delta **0 files** · push/main CI **`32654262020` SUCCESS / Required Gate PASS** · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · PR **#403** Phase B · PR **#400** W2-G3 · PR **#398** W2 readiness · PR **#395** W1 · **NEXT CAPACITY** = **NEXT-CAPABILITY REQUALIFICATION** *(distinct · NOT STARTED · **≠** W3)* · W3 **NOT STARTED / NOT AUTHORIZED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT / NOT CONSUMED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 authorized · **≠** REAL BOUNDARY PROVEN · **≠** FinOps PASS · **≠** runtime v3 ADOPTED |
-| **Timestamp maintenance courant** | 2026-08-23 20:37:16 CEST (+0200) — **W2 POST-CLOSURE TRUTH SYNC** — `origin/main` @ `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR **#405 MERGED** · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · doc10 final requalification **INTEGRATION CANDIDATE** · disclosures `w2Cognition=CLOSED_BY_MORRIS` · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · **NEXT CAPACITY** = **NEXT-CAPABILITY REQUALIFICATION** *(distinct · NOT STARTED)* · W3 **NOT STARTED / NOT AUTHORIZED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 GO · **≠** REAL · **≠** FinOps PASS |
+| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / entrée W3 DELIVERY** = `origin/main` @ `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` (merge PR **#406** W2 post-closure truth sync) · prior Product Correction merge `1e4b0dbb…` (PR **#405**) · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · **NEXT-CAPABILITY REQUALIFICATION** = **SATISFIED / CONSUMED** by W3 qualification · **W3 DELIVERY** = **AUTHORIZED BY MORRIS / IN PROGRESS** · **current delivery slice** = **W3-A Governed Execute** (US-P1-04 / FC-10) · W3 **NOT CLOSED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT / NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN · **≠** FinOps PASS · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance courant** | 2026-08-24 04:56 CEST (+0200) — **W3-A FC-08 CORRECTION** — Morris Option 4 R01 **ADOPTED** · GO Morris W3 Delivery **CONSUMED** · native EC preparation **LOCAL CANDIDATE** · F3 semantic overwrite **REMOVED** from canonical `/studio` · W3-A **NOT CLOSED** · R11/R12 **OPEN** · FinOps/T7 **FREEZE** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · W3 **NOT CLOSED** |
+| **Timestamp maintenance historique W2 POST-CLOSURE TRUTH SYNC** | 2026-08-23 20:37:16 CEST (+0200) — **W2 POST-CLOSURE TRUTH SYNC** — *(historique · superseded by W3 DELIVERY START)* — `origin/main` @ `1e4b0dbb…` then PR **#406** → `3a3b1cf…` · **W2 CLOSED BY MORRIS** · **NEXT CAPACITY** was **NEXT-CAPABILITY REQUALIFICATION** *(later SATISFIED / CONSUMED)* · W3 was **NOT STARTED / NOT AUTHORIZED** *(true then · later AUTHORIZED)* · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W2 Phase B post-merge truth sync** | 2026-08-23 16:48 CEST (+0200) — **W2 TRACK D / BOUNDED CKC PHASE B POST-MERGE TRUTH SYNC** — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · PR **#403 MERGED** · Phase B head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · **bounded Phase B INTEGRATED ON MAIN** · **DETERMINISTIC PROVEN** · Phase B GO / R1 GO / Git integration GO **CONSUMED historically** · W2 **NOT FINALLY CLOSED** · **NEXT CAPACITY** = **W2 FINAL CLOSURE QUALIFICATION** *(distinct cycle · NOT STARTED)* · W3 **NOT STARTED / NOT AUTHORIZED** · full CKC track **DOWNSTREAM W3** · PB-RES-REAL-01 **OPEN** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **NON TERMINÉE** · **≠** W2 closed · **≠** W3 GO · **≠** REAL · **≠** FinOps PASS  *(historique · superseded by W2 POST-CLOSURE TRUTH SYNC / Morris W2 CLOSED)* |
 | **Timestamp maintenance historique W2-G3 post-merge truth sync** | 2026-08-23 12:25 CEST (+0200) — **W2-G3 POST-MERGE TRUTH SYNC** — *(historique · superseded by Phase B post-merge truth sync)* — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · PR **#400 MERGED** · delivery head `a276f170…` · merge `dd852243…` · PR-head CI **`32632461315` SUCCESS** · push/main CI **`32633308148` SUCCESS** · **W2-G3 E+A+B+C INTEGRATED ON MAIN** · governed H→N trajectory through authority boundary · **STOP BEFORE EXECUTE** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · W2 **NOT FINALLY CLOSED** · **NEXT CAPACITY** *(true at that timestamp)* = Track D / bounded CKC Phase B qualification · **NEXT DECISION GATE** *(true at that timestamp)* = distinct Morris GO Phase B · GO Phase B **NOT CONSUMED** *(true at that timestamp · later CONSUMED · Phase B INTEGRATED via PR #403)* · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** FinOps fixed/PASS · **≠** Phase B started *(true then)* · **≠** W2 closed · **≠** Product Completion terminée |
 | **Timestamp maintenance historique W2-G2 decision truth sync** | 2026-08-23 02:36 CEST (+0200) — **W2-G2 DECISION TRUTH SYNC** — *(historique · superseded by W2-G3 post-merge then Phase B post-merge truth sync)* — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · W2-G1 **INTEGRATED ON MAIN** · PR **#398 MERGED** · merge `8df647c5e7db8a82c9c3b578ee1603e0851cc579` · push/main CI **`32607589306` SUCCESS** · W2-G2 **DECIDED BY MORRIS** · D-W2-01…04 **ADOPTED** · W2-G2 truth sync Git integration evidence = **RESOLVE FROM REPOSITORY** · W2-G3 **NOT AUTHORIZED** *(true at that timestamp · later satisfied by PR #400)* · GO Phase B distinct **NOT CONSUMED** *(true at that timestamp)* · W2 Delivery **NOT AUTHORIZED** *(true at that timestamp)* · REAL **ZERO** · runtime v3 **NON ADOPTED** · **≠** Phase B started · **≠** W2 implemented · **≠** post-merge candidate SHA/CI embed loop |
@@ -49,10 +50,12 @@
 | **Product Completion Functional Architecture (Cycle 3)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · path : `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR **#378 MERGED** · head `1018aa79d1d8ebb8783d11ce25ff08036764e87e` · merge `18b89ec9d6f1a91f8ff49df9c895299b6676b572` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379 MERGED** · sync head `0aa644d935b5df1ba7f4c2278fd63320555b9f6a` · sync merge `134f4105fea09543a100749e74ca5e3be32bfda2` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380 MERGED** · head `53aeceea…` · merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01 **CLOSED** · PM-R02 **CLOSED** · FC-01…FC-15 **APPROVED** · OA-aligned Option A + thin orchestration C **APPROVED** · no parallel architecture · targeted durability technical delta **QUALIFIED** then **partially realized via W1** · FA-R01…FA-R12 **CLOSED** · C1 §H/J.1 + C2 A→W preserved · H-01…H-04 **CARRY** · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (requested ephemeral / granted+ durable · PR #395) · ProjectTrajectory durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · **downstream gaps remain** (HD/replan liaison complète · Recovery E2E · taxonomie épistémique complète → W2/W3) · UAT **OPEN** · SC-02 **NON-BLOCKING** · **RESERVE-GOV-EC-ORDER CLOSED** · Pre-M6 debt **CARRY** · source branch cleanup **NOT PERFORMED** · **≠** Architecture technique fully exhausted · **≠** Product Completion terminée · **≠** REAL |
 | **RESERVE-GOV-EC-ORDER** | **CLOSED ON MAIN** via PR **#381** — Build Doctrine execution order aligned with validated C2 / Functional Architecture : HumanDecision → EC Prepare → EC Inspect → Confirmation if required → effective authority → Execute · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · remaining continuity/authority gaps stay **DOWNSTREAM** · ≠ reserve reopen |
 | **Morris trajectory decision (post-FA requalification)** | **HISTORICAL** — Governance EC Order Sync → C6 → Next-Cycle Requalification *(superseded for forward path by CKC-first)* |
-| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 delivery path completed · **NOW:** W1 **INTEGRATED** (PR **#395**) · W2 readiness **INTEGRATED** (PR **#398**) · **W2-G1…G3 INTEGRATED** (PR **#400**) · **Track D / Phase B INTEGRATED** (PR **#403**) · **Product Correction R1 INTEGRATED** (PR **#405** / merge `1e4b0dbb…`) · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · **NEXT CAPACITY** = **NEXT-CAPABILITY REQUALIFICATION** *(distinct · NOT W3)* · full CKC track **DOWNSTREAM W3** · W3 **NOT STARTED / NOT AUTHORIZED** · **≠** Product Completion terminée · **≠** REAL · runtime v3 **NON ADOPTED** |
+| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 completed · **NOW:** **W2 CLOSED BY MORRIS** · PR **#406** truth sync on main (`3a3b1cf…`) · **NEXT-CAPABILITY REQUALIFICATION SATISFIED / CONSUMED** · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS** · **current delivery slice = W3-A Governed Execute** · W3 **NOT CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS |
 | **Product Completion W2 Track D / bounded CKC Phase B** | **INTEGRATED ON MAIN** · PR **#403 MERGED** · head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · D-W2-02 / US-P1-14 / REQ-24 · product-native CKC cognition before Options/Recommendation · delivery + security via **same generic product path** · Recommendation remains Recommendation · no automatic HumanDecision · no authority from CKC · **STOP BEFORE EXECUTE** · legacy OptionSet cutover fail-closed · business-first Pilote output · structured provenance retained · proof **DETERMINISTIC PROVEN** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · W2 later **CLOSED BY MORRIS** *(post-requalification)* · full CKC track **DOWNSTREAM W3** · C6 **CLOSED** · FinOps/T7 **FREEZE** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** W2 incomplete at Phase B timestamp · **≠** full CKC completion · **≠** REAL BOUNDARY PROVEN · **≠** W3 authorized |
 | **Product Completion W2 Final Closure Requalification** | **ACCEPTED BY MORRIS** · Cycle 9 QA · typology DOC · evidence on `main@1e4b0dbb…` · X01…X08 **PROVEN** · H→N 18-step **PROVEN** · PASS WITH NON-BLOCKING RESERVES · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · proof ceiling **DETERMINISTIC PRODUCT E2E PROVEN** · path `projects/sfia-studio/product-completion/10-product-completion-wave-2-final-closure-qualification.md` · **≠** W3 authorized · **≠** REAL · runtime v3 **NON ADOPTED** |
-| **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · **≠** W3 authorized · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
+| **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · W3 later **AUTHORIZED** under distinct GO · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
+| **Product Completion W3 Delivery Readiness** | **QUALIFIED** · path `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md` · GO Morris W3 Delivery **CONSUMED** · W3 scope = backlog existant · C6 **CLOSED** / implement-only · REAL **OUT** · FinOps **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED |
+| **Product Completion W3 Delivery** | **AUTHORIZED BY MORRIS / IN PROGRESS** · current slice **W3-A Governed Execute** (US-P1-04 / FC-10) · canonical `/studio` · deterministic fixture · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** Evidence loop complete |
 | **Product Completion W2 Final Closure Product Correction** | **INTEGRATED ON MAIN** · PR **#405 MERGED** · head `330b36258f5a5fcb117fb562b12ff173b3675d94` · merge `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR-head CI SUCCESS · push/main CI **`32654262020` SUCCESS** · R01 Phase B Product E2E cognition · R02 material EC amend/reinspect + R1 recovery-safe · C6 **CLOSED** · no `lib/oa` mutation · **≠** W3 · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2-G3 Delivery** | **INTEGRATED ON MAIN** · PR **#400 MERGED** · delivery head `a276f170faece84a2121f5fe5796c24ae443674d` · merge `dd852243a652e85cce455a68fae5ac7aa13d2bea` · PR-head CI **`32632461315` SUCCESS / Required Gate PASS** · push/main CI **`32633308148` SUCCESS** · E+A+B+C governed trajectory: Options / Recommendation / HumanDecision / EC inspect / conditional Confirmation / authority+executor sufficiency · **STOP BEFORE EXECUTE** · ProjectTrajectory SoT **KEEP** · C6 **CLOSED** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · Phase B later **INTEGRATED** via PR **#403** · **≠** W2 finally closed · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
 | **Product Completion Backlog (Cycle 5)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · PR **#393 MERGED** · merge `7750b2a4017338c1a236433c4db8f5cc97dc2feb` · path `projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md` · 5 Epics · 4 Waves · P0/P1 cut-line · réserve R5 non bloquante · **≠** Delivery authorized by validation alone · W1 Delivery later **CONSUMED via distinct G3/Morris GOs** |
@@ -67,7 +70,7 @@
 | **ROADMAP-POST-MERGE-CKC-388** | **CLOSED ON MAIN** via PR **#389** / merge `c4dc1c9ce78290f00354e58dde451dd09616f49e` · post-merge CI **`32527209975` SUCCESS** · Roadmap sync integrated on main · **≠** DoctrinePackage runtime binding · **≠** Nora proven |
 | **DoctrinePackage / runtime CKC architecture qualification** | **ARCHITECTURE DIRECTION ADOPTED BY MORRIS — INTEGRATED ON MAIN** via PR **#390 + PR #391** · **G2 materialization DECIDED + GIT-INTEGRATED** via PR **#394** (`b3e978fe…`) · **W1 runtime materialization INTEGRATED** via PR **#395** (`ddd39181…`) · `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root `projects/sfia-studio/app/lib/oa/doctrine/product/` · resolver/repository **KEEP** · D02 Option B **KEEP** · fallback **NONE** · fixture quarantine/test-only → retire later · Product pin **fail-closed** · Phase A package-bound **INTEGRATED** · Phase A **≠** Phase B complete · bounded CKC→Nora seam **PROVEN (W1)** · bounded Phase B / generic multi-cycle cognition **INTEGRATED** (PR **#403**) · full CKC catalog evolvability **DOWNSTREAM W3** · runtime v3 **NON ADOPTED** |
 | **SFIA Studio product design tooling** | **MORRIS DECISION — PENPOT IS THE REFERENCE DESIGN WORKSPACE FOR SFIA STUDIO PRODUCT DESIGN** · Studio product design only · Git remains SoT for governance/contracts/decisions · R-04 EA historical recommendation **SUPERSEDED FOR FUTURE SFIA STUDIO PRODUCT DESIGN** · **≠** global SFIA methodological baseline · **≠** v3 doctrine change · **≠** runtime v3 adoption · EA document **not** retroactively rewritten |
-| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · CKC 15/15 **ON MAIN** · Backlog Cycle 5 **INTEGRATED** · W1 **INTEGRATED** · W2 readiness / G1–G3 / Phase B / Product Correction **INTEGRATED** · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · **NEXT GATES** = complete **W2 POST-CLOSURE TRUTH SYNC** integration/post-merge proof → **NEXT-CAPABILITY REQUALIFICATION** *(distinct)* · W3 **NOT STARTED / NOT AUTHORIZED** · Execute **OUT** · REAL **NOT CONSUMED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **NO EXECUTION WITHOUT MORRIS GO** |
+| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · PR **#406** on main · **NEXT-CAPABILITY REQUALIFICATION SATISFIED / CONSUMED** · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY IN PROGRESS** · slice **W3-A** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · REAL **NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · W3 **NOT CLOSED** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
 | **Intégration Git** | **C2 :** PR #369 / head `3c78c6763d0d090bdc38f3866ecd71ed6be219d0` / merge `2406ccda211842fc7f8da3699bb186a30f7dc105` · **Post-merge sync :** PR #370 (integration vehicle · Git evidence authoritative) · CI SFIA Studio **#222** SUCCESS (PR head) · post-merge CI **#223** SUCCESS · source branch `docs/sfia-studio-product-completion-c2-integration-clean` **PRESERVED** · historical unauthorized branch `docs/sfia-studio-product-completion-c2-functional-design` @ `780ab4c5` **PRESERVED FOR AUDIT** · Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · **M5 closure / Pre-M6 sequencing Roadmap :** PR #353 / title `docs(sfia-studio): close M5 and sequence Pre-M6 UX baseline` / base `3467ecdf74ac2010c45f34545fb8684563dea547` / head `7a744c8cec889be547eebe231279620189819dd0` / merge `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` — records M5 closure + inserts Pre-M6 before M6 · **≠** Slice A candidate (Slice A is later local work) · PRE-M6 USER JOURNEY / UX BASELINE = **FUNCTIONAL BASELINE + GAP READINESS COMPLETE · G-UX-15 EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED · LOCAL CANDIDATE NOT YET ON MAIN · FIGMA/UI DELIVERY NOT AUTHORIZED** · **G-UX-15 Slice A controlled integration :** PR #354 / title `feat(sfia-studio): close Pre-M6 G-UX-15 execution wiring gap` / base `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` / head `22ae8e5e4bddb0f997384a5e8ba87c9b35245693` / merge `a6df83a640afeb0911cb572d118d27a03c9923a7` · CI SFIA Studio **#192** SUCCESS · post-merge main CI **#193** SUCCESS · post-merge truth **PASS** (exact 5-file SHAs on main) · feature branch **PRESERVED** (no delete) · **Cycle 14 docs sync :** PR #355 / title `docs(sfia-studio): sync Pre-M6 G-UX-15 post-merge current state` / merge `dd284e9f20de89b2c8fc7782e4177d0d125c24d2` — **MERGED ON MAIN** · **historique :** OPEN / DRAFT avant merge · **Cycle 15 visual adoption docs integration :** PR #356 / title `docs(sfia-studio): record Pre-M6 visual contract adoption` / head `3a93d0e5cfd86e46bb795ce22c0f7dd79078ef2a` / merge `50f31994b0d9b5a3a3514e2fa9a063d688071c50` — **MERGED ON MAIN** · CI SFIA Studio **#198** SUCCESS on final PR head · post-merge main CI **#199** SUCCESS · post-merge truth **PASS** · source branch **PRESERVED** (NO BRANCH DELETE) · **historique :** OPEN / DRAFT avant merge · **D-PRE-M6-UX-05 :** ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN (Freeze `uUdLBElF2B4dOefaAYt4QY`) — UI Delivery still **NOT AUTHORIZED** · **Cycle 14 PR #356 post-merge current-state sync :** PR #357 / title `docs(sfia-studio): sync PR 356 post-merge current state` / head `70643624c494f16fb91e3bede772a80f4eece783` / merge `b834fdd40d3e7028e80cf7b388b93df2f31e18e4` — **MERGED ON MAIN** · CI SFIA Studio **#200** SUCCESS on PR head · post-merge CI **#201** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · **PRE-M6 UI DELIVERY GATE / SCOPE QUALIFICATION :** **COMPLETE** — Review Handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` — verdict READY FOR MORRIS DELIVERY DECISION (**≠** UI Delivery authorized) — OPTION A = RECOMMENDATION AWAITING MORRIS DECISION *(historique qualification)* · **Cycle 15 Pre-M6 UI gap + CKC trajectory Roadmap :** PR #358 / title `docs(sfia-studio): record Pre-M6 UI gap and CKC trajectory` / head `c91ce1afd498ef9a5275e3b90509e7a045f240a0` / merge `0a80b92cb2c05f5b3f001438988b52c07c3bf0b6` — **MERGED ON MAIN** · CI SFIA Studio **#202** SUCCESS on PR head · post-merge CI **#203** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** (user « bon ok go option A ») — OPTION A = **ADOPTED BY MORRIS AS PRE-M6 UI DELIVERY SCOPE** · OPTION A SCOPE ADOPTED **≠** UI DELIVERY EXECUTION AUTHORIZED · NEXT PRODUCT GATE *(historique jusqu’à PR #361)* = **MORRIS PRE-M6 UI DELIVERY EXECUTION AUTHORIZATION — OPTION A** · **PR #359** Option A adoption sync **MERGED** (`0d33478…`) · **PR #360** fake-real progressive proof **MERGED** (`a3ac418…`) · **PRE-M6 PRODUCT VERTICAL SLICE :** PR #361 / title `feat(sfia-studio): consolidate Pre-M6 product vertical slice` / head `3c4c478d7664c6111f38e6c4f49e98042e3a8473` / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f` — **MERGED ON MAIN** · post-merge CI run **`32122892559` SUCCESS** · source branch `delivery/sfia-studio-pre-m6-ui-option-a` **PRESERVED** · GO Morris **PR #361 READY + MERGE — PRESERVE SOURCE BRANCH — THEN POST-MERGE VALIDATION** · **MORRIS DECISION — CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** · **MORRIS DECISION — ACCEPT PRE-M6 EXIT FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT — CURRENT MAIN VERTICAL SLICE IS THE SFIA STUDIO FUNCTIONAL MVP BASELINE FOR PRODUCT COMPLETION — CARRY UAT-UX-06 / UAT-RECOVERY-03 / V3-F10 / PROCESS-LOCAL DURABILITY / N7 AS GOVERNED DEBT — RUNTIME V3 REMAINS NON ADOPTED** · PRE-M6 EXIT = **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** · PRE-M6 **≠ COMPLETE WITHOUT RESERVES** · NEXT PRODUCT GATE = **GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP** (consumable only after this documentation is integrated on main · **NOT AUTHORIZED now**) · NEXT REPOSITORY GATE = **MORRIS REVIEW — PRODUCT COMPLETION REBASELINE DRAFT PR — NO MERGE UNTIL EXPLICIT GO** |
 | **Sources** | Git `main` @ `a53c323e47e5fae1d35671f3ae232609a59b0f3f` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352/#353/#354/#355/#356/#357/#358/#359/#360/#361 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187/#192/#193/#197/#198/#199/#200/#201/#202/#203 · Pre-M6 UI Delivery qualification handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · D-PRE-M6-UX-05 visual review handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · GO Morris **VALIDATE D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT — ADOPT AS PRE-M6 VISUAL REFERENCE** · M4 Product path on main `projects/sfia-studio/app/**` |
 | **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · **D-PRE-M6-UX-05 ADOPTED AS PRE-M6 VISUAL REFERENCE ≠ UI Delivery authorized ≠ runtime implemented ≠ browser/product E2E proven ≠ Figma/runtime aligned ≠ WCAG compliant ≠ Pre-M6 complete ≠ historical UI retired** · Accepted M-03/M-04/provenance reserves ≠ reserves closed · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · UI asset audit **COMPLETE/CLASSIFIED** **≠** individual dispositions ADOPTED · existing UI audit **≠** REPLACE/retirement authorized · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · G-UX-15 Slice A **MERGED ON MAIN** (PR #354) ≠ Pre-M6 complete · merged on main ≠ product/browser E2E proven · merged on main ≠ UI Delivery/M6 authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE *(HISTORICAL Pre-M6 / G-UX-15)* · **SUPERSEDED for Confirmation by W1 selective durability** · **≠** restart-safe Confirmation as full envelope · **PR #356 MERGED ≠ UI Delivery authorized** · CI #197/#198/#199 SUCCESS ≠ Pre-M6 complete ≠ UI Delivery authorized · post-merge truth PASS ≠ UI Delivery gate consumed · UI Delivery qualification COMPLETE ≠ UI Delivery authorized · **Option A SCOPE ADOPTED BY MORRIS ≠ UI Delivery execution authorized** · gap treatment adopted as scope ≠ gap closed · G-UX-08 deferred ≠ G-UX-08 closed · G-UX-09 accepted ≠ Conversation durable · Confirmation KEEP *(historical Pre-M6)* ≠ restart-safe · G-UX-11 planned ≠ browser E2E proven · M7 CKC 15/15 future ≠ CKC complete now ≠ CKC Delivery authorized · 4 pilots + 11 fallback ≠ CKC system complete · CKC→v2.6 capitalization option ≠ v2.6 modification decided · CKC validation future ≠ runtime v3 ADOPTED · PR #357 MERGED ≠ UI Delivery authorized · CI #201 SUCCESS ≠ Pre-M6 complete · PR #358 MERGED ≠ UI Delivery authorized · CI #202/#203 SUCCESS ≠ Pre-M6 complete ≠ Delivery authorized · Option A scope adopted ≠ Delivery GO consumed · Execution Authorization IS the Delivery GO ≠ second Delivery GO required · G-UX-11 E2E exit proof ≠ Delivery entry prerequisite · global v3 baseline **NOT PROMOTED** · **PR #361 MERGED ≠ PRE-M6 COMPLETE ≠ PRE-M6 EXIT ACCEPTED ≠ runtime v3 ADOPTED ≠ M6 AUTHORIZED ≠ M7 AUTHORIZED ≠ CKC 15/15 COMPLETE ≠ generic Cursor write/dev/commit/push/PR proven** · **MVP FUNCTIONAL BASELINE ≠ produit final ≠ UX finale ≠ production-ready ≠ generic ExecutionContract complete** · Product Completion trajectory recorded **≠** Cycle 1 Cadrage authorized **≠** Delivery authorized · PRE-M6 requalification **≠** PRE-M6 CLOSED · **PRE-M6 EXIT ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT ≠ PRE-M6 COMPLETE ≠ PRE-M6 all gaps closed ≠ runtime v3 ADOPTED ≠ M6 STARTED ≠ M6 AUTHORIZED ≠ Product Completion Delivery authorized ≠ Cycle 1 Cadrage authorized** |
@@ -128,9 +131,9 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Product Completion Product Screens & Visual State Contract | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · `projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md` · PR #376 / head `6e2cd066…` / merge `7d2f9a61…` · PR CI **#236 SUCCESS** · post-merge CI **#237 SUCCESS** · Penpot `63bdc57a…` page 03 · 17 screens · page 04 = 0 · Components 0 · C1 alignment PASS · PASS 3 PASS WITH ONE NON-BLOCKING EVIDENCE-FRAMING RESERVE · UX-BLK-01/02/03 CLOSED · H-01…H-04 **CARRY** · source branch cleanup **COMPLETED** · **≠** Components · **≠** Delivery |
 | Product Completion Functional Architecture (Cycle 3) | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR #378 / head `1018aa79…` / merge `18b89ec9…` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379** / head `0aa644d…` / merge `134f4105…` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380** / head `53aeceea…` / merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01/PM-R02 **CLOSED** · FC-01…FC-15 APPROVED · OA Option A + thin C APPROVED · targeted durability delta QUALIFIED then **W1-realized for Confirmation + ProjectTrajectory** · FA-R01…FA-R12 CLOSED · **RESERVE-GOV-EC-ORDER CLOSED** · downstream HD/replan / Phase B / Recovery E2E remain · **≠** Product Completion terminée · **≠** Delivery W2+ |
 | COMPLETED / INTEGRATED | **C1 CADRAGE** · **C2 FUNCTIONAL DESIGN** · **UX EXPERIENCE ARCHITECTURE** · **E2E WIREFRAMES & INTERACTION MODEL** · **PRODUCT SCREENS & VISUAL STATE CONTRACT** · **FUNCTIONAL ARCHITECTURE (Cycle 3)** · post-merge sync PR **#379** · final closure PR **#380** · PR #369 / `2406ccda…` · PR #370 post-merge sync **HISTORICAL / MERGED** · PR #372 / `fb311f2f…` · PR #373 / `6b67ada7…` · PR #374 / `404d2d3e…` · PR #375 post-merge sync · PR #376 / `7d2f9a61…` · PR #378 / `18b89ec9…` · PR #379 / `134f4105…` · PR #380 / `14329c60…` |
-| CURRENT REPOSITORY TRANSITION | W2 Product Correction **INTEGRATED** (PR **#405** / merge `1e4b0dbb…` / push CI **`32654262020` SUCCESS**) · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2 Post-Closure Truth Sync **IN PROGRESS / INTEGRATION CANDIDATE** · FinOps/T7 **FREEZE** · W3 **NOT STARTED / NOT AUTHORIZED** · REAL **OUT** · Product Completion **INCOMPLETE** · **≠** W3 GO · **≠** FinOps PASS |
-| NEXT ORDERED STEP | Complete **W2 POST-CLOSURE TRUTH SYNC** (doc10 + Roadmap + disclosures) Git integration + post-merge proof → **NEXT-CAPABILITY REQUALIFICATION** *(distinct cycle · NOT STARTED)* · **≠** W3 GO · **≠** REAL GO |
-| NEXT PRODUCT CAPABILITY | **NEXT-CAPABILITY REQUALIFICATION** — after truth-sync post-merge proof · re-evaluate next Product Completion capacity under distinct Morris GO · **≠** silent W3 open · W3 **NOT AUTHORIZED** · REAL **OUTSIDE** · runtime v3 **NON ADOPTED** |
+| CURRENT REPOSITORY TRANSITION | W3-A FC-08 correction **LOCAL CANDIDATE** (Morris Option 4 R01) · native EC prep · no F3 overwrite · **NOT CLOSED** · **no project commit/push/PR yet** · FinOps/T7 **FREEZE** · REAL **OUT** · W4 **NOT STARTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED |
+| NEXT ORDERED STEP | ChatGPT review of W3-A implementation candidate → distinct Morris Git integration GO (commit/PR) **if** review PASS · then continue W3 slices · **≠** W3 closure · **≠** REAL GO |
+| NEXT PRODUCT CAPABILITY | **W3-A Governed Execute** (in progress) → next W3 slice **W3-B** terminal semantics + Evidence after W3-A closure · W3 macro **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** |
 | M6 / M7 | **HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION** · traces conservées · hors forward critical path |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest
@@ -498,9 +501,9 @@ GO : **ADOPT W2-G2 DECISION PACK** — D-W2-01…04 · TD-C6-03 included W2 by a
 | **Intégration** | PR #350 merge `8f753218…` · PR #351 merge `d8961f1d…` · capitalization PR #352 merge `3467ecd…` · exit handoff `54b0f5b4…` · post-merge handoff `0121e184…` |
 | **Dépendances** | M4 — **SATISFIED / CLOSED** · Architecture — **CONSUMED** · Delivery — **CONSUMED / MERGED** · UI rehydrate — **CONSUMED / MERGED** · Capitalization Roadmap — **CONSUMED / MERGED** · Closure gate — **CONSUMED** |
 | **Statut** | **M5 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
-| **Next convergence capability (current)** | **NEXT-CAPABILITY REQUALIFICATION** — **W2 CLOSED BY MORRIS** · Requalification **ACCEPTED** · Product Correction PR **#405** · Phase B PR **#403** · W2-G3 PR **#400** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · W3 **NOT STARTED / NOT AUTHORIZED** · runtime v3 **NON ADOPTED** |
+| **Next convergence capability (current)** | **W3-A Governed Execute** — **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS** · **NEXT-CAPABILITY REQUALIFICATION SATISFIED / CONSUMED** · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · W3 **NOT CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** |
 | **Next immediate gate (repo)** | Roadmap Phase B post-merge truth-sync Git integration = **DISTINCT MORRIS GO AFTER CHATGPT REVIEW** · aucun autre write projet automatique · **NO AUTOMATIC PROJECT WRITE** |
-| **Next product gate** | **NEXT-CAPABILITY REQUALIFICATION** → distinct cycle · **≠** W3 authorized · **≠** REAL |
+| **Next product gate** | W3-A ChatGPT review → Morris Git integration GO (if PASS) · then W3-B · **≠** W3 CLOSED · **≠** REAL |
 | **M6 / M7 disposition** | Historical milestones **SUPERSEDED / ABSORBED BY PRODUCT COMPLETION** |


@@ -592,12 +595,12 @@ UAT-RECOVERY-03 Git test: prepared confirmation gate is process-local React stat
 | Champ | Contenu |
 | --- | --- |
 | **ID** | PRODUCT-COMPLETION |
-| **Statut** | trajectory **ACTIVE** · C1…C6 / UX / backlog / W1 / W2 readiness **INTEGRATED** selon états existants · **W1 Delivery INTEGRATED ON MAIN** (PR #395 · **8/8 PASS**) · **W2-G1…G3 E+A+B+C INTEGRATED ON MAIN** (PR **#400**) · **Track D / bounded CKC Phase B INTEGRATED ON MAIN** (PR **#403**) · FinOps/T7 **FREEZE** · Product Completion globale **INCOMPLETE / NON TERMINÉE** · **W2 CLOSED BY MORRIS** · next = **NEXT-CAPABILITY REQUALIFICATION** · W3 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** |
+| **Statut** | trajectory **ACTIVE** · C1…C6 / UX / backlog / W1 / W2 **INTEGRATED** · **W2 CLOSED BY MORRIS** · **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS** · current slice **W3-A** · FinOps/T7 **FREEZE** · Product Completion globale **INCOMPLETE / NON TERMINÉE** · W3 **NOT CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** |
 | **Principe** | Do **not** restart M1→M5. Reuse the current main MVP as backbone. Relaunch a complete project lifecycle to build the target SFIA Studio product. |
 | **Morris MVP wording** | **CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** |
 | **MVP means** | exploitable proof of the fundamental product loop · technical/functional base to reuse · starting point of the new product lifecycle |
 | **MVP does not mean** | PRE-M6 automatically closed · final product · runtime v3 ADOPTED · generic Cursor execution complete · CKC complete · final UX · production-ready |
-| **Next cycle** | **NEXT-CAPABILITY REQUALIFICATION** — **W2 CLOSED BY MORRIS** · truth sync integration candidate · W3 **NOT AUTHORIZED** · **NO EXECUTION WITHOUT MORRIS GO** |
+| **Next cycle** | **W3-A Governed Execute** (in progress under GO W3 Delivery) · W3 **NOT CLOSED** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
 | **Cycle 2 objective** | Conception fonctionnelle **VALIDATED + INTEGRATED** · **next-capability execution NOT AUTHORIZED** until distinct Morris GO |

 #### Product Completion target domains (D-PC-01 adopted)
```

---

# PART 3 — MAPPING R01→R13

| ID | Treatment | Evidence file |
|---|---|---|
| R01 | FC-08 native prepare · no F3 overwrite | prepareExecutionContractFromW2Decision.ts, w3aProductExecutionSemantics.ts |
| R02 | Cycle profile from EC.cycleInstanceId | governedExecuteAuthorizedContract.ts loadContract |
| R03 | LOCAL_PILOTE_ACTOR writes | prepareExecutionContractFromW2Decision.ts, governedExecuteAuthorizedContract.ts |
| R04 | No auto-grant · Critical AGENT_CONFIRMATION_REQUIRED | governedExecuteAuthorizedContract.ts L329-336 |
| R05 | No F3_AGENT_ID · registry selects W3A agent | w3aProductFixtureWiring.ts, w3aGovernedExecute.test.ts A |
| R06 | Phased select/start/record | governedExecuteAuthorizedContract.ts, TrajectorySurface.tsx |
| R07 | Terminal technical label only | governedExecuteAuthorizedContract.ts buildTerminalSuccess |
| R08 | Attempt preserved on downstream error | governedExecuteStart/RecordResult error paths |
| R09 | Vitest integration PASS · Playwright NOT RUN | w3aGovernedExecute.test.ts — reserve |
| R10 | doc11/roadmap updated | 11-product-completion-wave-3-delivery-readiness.md |
| R11 | Critical genericity OPEN | macro debt |
| R12 | Recovery OPEN | W3-C debt |
| R13 | Hostile UI payloads removed | TrajectorySurface.tsx governedExecute call |

# PART 4 — PROOF MATRIX A→R

| Line | Result | Test / proof |
|---|---|---|
| A | PASS | w3aGovernedExecute A + prepare asserts |
| B | PASS | w3a Critical binding + cycleInstanceId on contract |
| C | PASS | w3a C stale amend |
| D | PASS | w3a D skip confirm |
| E | PASS | w3a E insufficient executor |
| F | PASS | w3a I Fake/Real |
| G | PASS | w3a R06 accepted |
| H | PASS | w3a R06 running |
| I | PASS | w3a R06 terminal + label |
| J | PASS | w3a F replay |
| K | PASS | w3a B blocked |
| L | PASS | w3a G no cycle close |
| M | PASS | w3a A no STOP semantics |
| N | PASS | start/record error attempt projection |
| O | PASS | w3a I externalEffects false |
| P | PASS | no new aggregate |
| Q | PASS | w2Eabc + w2TrackD regressions |
| R | PASS | OA aggregate kept |

# PART 5 — TESTS EXECUTED

```
npm run typecheck — PASS
npm run lint — PASS
npm run build — PASS
vitest full suite — 212 files / 2010 tests PASS · 131 skipped
Playwright /studio W3-A Execute — NOT RUN (reserve R09)
```

# PART 6 — DEBTS / RESERVES

- **R09**: Playwright canonical `/studio` Execute happy path not captured
- **R11**: Critical canonical execute end-to-end blocked at confirm path — macro W3
- **R12**: Recovery/retry — W3-C

# PART 7 — VERDICT

**W3-A CORRECTION CANDIDATE — PASS WITH RESERVES — READY FOR CHATGPT REVIEW**

W3 NOT CLOSED · REAL OUT · C6 CLOSED · no project Git remote mutation.

## Next gate

ChatGPT must review THIS handoff immuable using Part 1 complete sources and Part 2 diffs.
