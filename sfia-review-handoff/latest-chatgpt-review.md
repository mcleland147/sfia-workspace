# ChatGPT Review Pack — P6-HQA-F01 Lifecycle Activation Correction (COMPLETE)

- timestamp: 2026-10-09T04:56:56Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- finding: P6-HQA-F01
- cycle: 8 — Delivery / implémentation corrective
- typology: EVOL
- profile: CRITICAL
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- prior handoff tip: 9c6ea373ed97af743489da3c0b16d43ce14f3743
- project commit/push/PR/merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Morris GO consumed: F01 local bounded correction
- HQ-01 data: NOT MUTATED this pass
- UI-01…UI-04 / COG01 locals: PRESERVED
- F01 status: CORRECTION CANDIDATE — READY FOR HUMAN QA (NOT CLOSED)
- COG01: prior CP02 candidate preserved (label-match micro-fix shared)
- UI05: OPEN
- HQ-01: BLOCKED pending disposition of legacy candidates + Human QA

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

## Étape A — Cause (CONFIRMED)

Verbal start confirm → ConversationSurface chat only → F2 `formalizationReady` →
`NEW_CYCLE_FORMALIZATION` → `createCycle(linkAsActiveCycle:false)` → LEGACY_UNBOUND `cyc:f2-*`.
`startPreparedTrajectoryCycle` / `pilotLifecycle.start` never called from F2.
READY_NO_GATE ≠ START. Chat agreement ≠ HumanDecision ≠ activation.

START admissibility (reused, unchanged):
- COMPLETE_TRAJECTORY_BOUND prepared cycle;
- unique match (else PREPARED_CYCLE_AMBIGUOUS);
- candidate_trajectory HD / assertTrajectoryBoundCycleStartReady;
- local Pilote authority;
- LPS re-read after start.

LEGACY_UNBOUND (HQ-01 five Delivery candidates) cannot be started via prepared START
and must not be silently rebound (out of scope / Morris structural if needed).

## Étape B — Correction

Before F2 `createCycle`, if `isChatFirstCycleStartIntent`:
1. classify LPS + CycleInstance inventory;
2. unique COMPLETE prepared → `startPreparedTrajectoryCycle` (reuse) + LPS verify;
3. already active / ambiguous / legacy-only / missing → honest block, **no mint**;
4. non-start propose path unchanged (createCycle still allowed).

Catalog label fix (shared with COG01): `Delivery / implémentation` matches user `Delivery`.

## Files

| Path | Action |
|------|--------|
| `f2/resolveChatFirstCycleStartGate.ts` | CREATED (complete below) |
| `f2/orchestrateF2.ts` | MODIFIED — F01 gate before createCycle (diff below) |
| `f2/composeF2PilotFacingNarrative.ts` | MODIFIED — catalog label match (diff vs working tree prior; full file below) |
| `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` | CREATED (complete below) |

No HQ-01 mutation. No UI05. No doctrine/persistence schema change.

## Validations

| Control | Result |
|---------|--------|
| F01 D0 (8) | PASS |
| COG01 CP02 D0 (18) | PASS |
| corrProof01 D1 (17) | PASS |
| UI-03/UI-04 (15) | PASS |
| candidateTrajectoryCycleStart (13) | PASS |
| eslint new F01 files | PASS |
| next build | NOT RUN (:3020 risk) |
| REAL provider | NONE |
| HQ-01 mutation | NONE |

## Fake / Real

DETERMINISTIC PROVEN: anti-duplication on legacy unbound + classification + start intent.
Human QA / HQ-01 unlock / prepared START chat success on REAL Studio: NOT YET PROVEN.
P6 PASS / runtime v3: NOT CLAIMED.

## Reserves / Morris

1. HQ-01 five LEGACY_UNBOUND Delivery candidates: not auto-cleaned; chat start blocks honestly.
2. Chat START success path requires greenfield prepared COMPLETE cycle (Trajectory approve→prepare); proven by existing BAR-START tests + gate wiring; Human QA on isolated fixture recommended before HQ-01 replay.
3. Disposition of historical HQ-01 candidates remains a distinct Morris decision.

## Verdict

**F01 CORRECTION CANDIDATE — READY FOR HUMAN QA**

**READY FOR CHATGPT CRITICAL REVIEW**

Instruction ChatGPT: read this entire handoff including all code sections.

Next: ChatGPT Critical → Human QA F01 on isolated prepared fixture → then HQ-01 disposition/replay under separate gate.

---

# COMPLETE MODIFIED CONTENT


## FILE 1/4 — CREATED resolveChatFirstCycleStartGate.ts

### path: `projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts`

```typescript
/**
 * P6-HQA-F01 — chat-first cycle START gate (bounded).
 *
 * When the Pilot explicitly intends to start a cycle already in play:
 * - do NOT mint another F2 LEGACY_UNBOUND createCycle;
 * - reuse startPreparedTrajectoryCycle when a unique COMPLETE prepared cycle exists;
 * - otherwise fail closed with an honest blocker (no silent selection, no invented HD).
 *
 * Conversation agreement ≠ HumanDecision ≠ Confirmation ≠ activation.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  classifyTrajectoryBinding,
  startPreparedTrajectoryCycle,
  type CycleInstance,
} from "@/lib/oa/cycle";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import type { PilotDecisionCandidate } from "./types";
import {
  hasExplicitStartIntentForSubject,
  interpretPilotNarrativeStance,
} from "./composeF2PilotFacingNarrative";

export type ChatFirstStartSituation =
  | { readonly kind: "already_active"; readonly activeCycleInstanceId: string }
  | { readonly kind: "unique_prepared"; readonly cycleInstanceId: string }
  | { readonly kind: "ambiguous_prepared"; readonly count: number }
  | { readonly kind: "legacy_unbound_only"; readonly count: number }
  | { readonly kind: "no_prepared" };

export type ChatFirstCycleStartGateResult =
  | {
      readonly kind: "started";
      readonly cycleInstanceId: string;
      readonly activeCycleInstanceId: string;
      readonly catalogLabel: string | null;
      readonly lpsVersionAfter: number | undefined;
      readonly message: string;
    }
  | {
      readonly kind: "already_active";
      readonly activeCycleInstanceId: string;
      readonly message: string;
    }
  | {
      readonly kind: "blocked";
      readonly code: string;
      readonly message: string;
    };

function isPreparedStatus(status: CycleInstance["status"]): boolean {
  return status === "proposed" || status === "acknowledged";
}

/** Detect explicit chat start intent for the subject cycle (COG01 stance + lexical). */
export function isChatFirstCycleStartIntent(input: {
  readonly userContent: string;
  readonly cycleLabel: string | null | undefined;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  const stance = interpretPilotNarrativeStance({
    userContent: input.userContent,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  if (stance.kind === "accept_start") return true;
  return hasExplicitStartIntentForSubject(input.userContent, input.cycleLabel);
}

/**
 * Pure Product-shape classification — no mutation.
 * History/conversation is not used; only LPS + CycleInstance inventory.
 */
export function classifyChatFirstStartSituation(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly cycles: readonly CycleInstance[];
  readonly targetCycleTypeId: string;
}): ChatFirstStartSituation {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) {
    return { kind: "already_active", activeCycleInstanceId: active };
  }

  const target = input.targetCycleTypeId;
  const preparedComplete = input.cycles.filter(
    (c) =>
      c.cycleTypeId === target &&
      isPreparedStatus(c.status) &&
      classifyTrajectoryBinding(c) === "COMPLETE_TRAJECTORY_BOUND",
  );
  if (preparedComplete.length > 1) {
    return { kind: "ambiguous_prepared", count: preparedComplete.length };
  }
  if (preparedComplete.length === 1) {
    return {
      kind: "unique_prepared",
      cycleInstanceId: preparedComplete[0]!.cycleInstanceId,
    };
  }

  const legacy = input.cycles.filter(
    (c) =>
      c.cycleTypeId === target &&
      isPreparedStatus(c.status) &&
      classifyTrajectoryBinding(c) === "LEGACY_UNBOUND",
  );
  if (legacy.length > 0) {
    return { kind: "legacy_unbound_only", count: legacy.length };
  }
  return { kind: "no_prepared" };
}

export function chatFirstStartBlockMessage(input: {
  readonly code: string;
  readonly cycleLabel: string;
  readonly legacyCount?: number;
  readonly preparedCount?: number;
}): string {
  const cycle = input.cycleLabel.trim()
    ? `« ${input.cycleLabel.trim()} »`
    : "ce cycle";
  switch (input.code) {
    case "ACTIVE_CYCLE_PRESENT":
      return `Un cycle est déjà actif sur le projet. Aucun nouveau cycle n'a été créé et aucun second démarrage n'a été engagé.`;
    case "PREPARED_CYCLE_AMBIGUOUS":
      return `Plusieurs cycles ${cycle} préparés (liés à la trajectoire) sont disponibles (${input.preparedCount ?? "plusieurs"}). Studio ne sélectionne pas automatiquement lequel démarrer. Aucun nouveau cycle n'a été créé. Précisez le cycle dans Trajectoire, puis démarrez.`;
    case "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT":
      return `Des cycles ${cycle} existent déjà (${input.legacyCount ?? "plusieurs"}) mais ne sont pas liés à une trajectoire préparée — le démarrage Chat-first gouverné ne s'applique pas. Aucun cycle supplémentaire n'a été créé. Utilisez Trajectoire pour préparer puis démarrer un cycle lié, sans nouvelle qualification automatique.`;
    case "PREPARED_CYCLE_MISSING":
    case "NO_PREPARED_CYCLE":
      return `Aucun cycle ${cycle} préparé et lié à la trajectoire n'est disponible au démarrage. Votre confirmation en conversation n'active rien à elle seule. Aucun nouveau cycle n'a été créé. Préparez d'abord le cycle depuis Trajectoire (après décision de trajectoire si requise), puis démarrez.`;
    case "AUTHORITY_DENIED":
    case "LOCAL_AUTHORITY_DISABLED":
      return `Le démarrage de ${cycle} est refusé : autorité Pilote indisponible pour START. Aucun nouveau cycle n'a été créé. L'état vivant du projet reste inchangé.`;
    case "CYCLE_DECISION_REQUIRED":
      return `Le démarrage de ${cycle} nécessite encore une décision Pilote structurée sur la trajectoire. Aucun nouveau cycle n'a été créé et aucune décision n'a été inventée depuis la conversation.`;
    default:
      return `Le démarrage de ${cycle} n'a pas pu aboutir (${input.code}). Aucun nouveau cycle n'a été créé. Vérifiez Trajectoire / préconditions START — l'état vivant du projet n'est pas déclaré actif sans relecture Product.`;
  }
}

export function chatFirstStartSuccessMessage(input: {
  readonly cycleLabel: string | null;
  readonly cycleInstanceId: string;
}): string {
  const label = (input.cycleLabel ?? "").trim();
  const cycle = label ? `« ${label} »` : "le cycle";
  return `Le cycle ${cycle} est maintenant actif sur le projet (${input.cycleInstanceId}). L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
}

/**
 * Resolve chat-first start intent against Product inventory.
 * May invoke startPreparedTrajectoryCycle (existing governed START) once.
 * Never creates CycleInstances. Never invents HumanDecision.
 */
export async function resolveChatFirstCycleStartGate(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly targetCycleTypeId: string;
  readonly cycleLabel: string;
  readonly forceLocalAuthority?: boolean;
}): Promise<ChatFirstCycleStartGateResult> {
  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  if (!lps.ok) {
    return {
      kind: "blocked",
      code: "LPS_UNAVAILABLE",
      message: chatFirstStartBlockMessage({
        code: "LPS_UNAVAILABLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  let cycles: CycleInstance[] = [];
  try {
    cycles = await input.oa.cycleServices.cycles.listByProject(input.projectId);
  } catch {
    return {
      kind: "blocked",
      code: "CYCLES_UNAVAILABLE",
      message: chatFirstStartBlockMessage({
        code: "CYCLES_UNAVAILABLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  const situation = classifyChatFirstStartSituation({
    activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
    cycles,
    targetCycleTypeId: input.targetCycleTypeId,
  });

  if (situation.kind === "already_active") {
    return {
      kind: "already_active",
      activeCycleInstanceId: situation.activeCycleInstanceId,
      message: chatFirstStartBlockMessage({
        code: "ACTIVE_CYCLE_PRESENT",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  if (situation.kind === "ambiguous_prepared") {
    return {
      kind: "blocked",
      code: "PREPARED_CYCLE_AMBIGUOUS",
      message: chatFirstStartBlockMessage({
        code: "PREPARED_CYCLE_AMBIGUOUS",
        cycleLabel: input.cycleLabel,
        preparedCount: situation.count,
      }),
    };
  }

  if (situation.kind === "legacy_unbound_only") {
    return {
      kind: "blocked",
      code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
      message: chatFirstStartBlockMessage({
        code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
        cycleLabel: input.cycleLabel,
        legacyCount: situation.count,
      }),
    };
  }

  if (situation.kind === "no_prepared") {
    return {
      kind: "blocked",
      code: "NO_PREPARED_CYCLE",
      message: chatFirstStartBlockMessage({
        code: "NO_PREPARED_CYCLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  // unique_prepared — reuse existing START facade (no F2 createCycle).
  const started = await startPreparedTrajectoryCycle({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: situation.cycleInstanceId,
    forceLocalAuthority: input.forceLocalAuthority,
  });

  if (!started.ok) {
    return {
      kind: "blocked",
      code: started.code,
      message: chatFirstStartBlockMessage({
        code: started.code,
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  // Re-read LPS before claiming activation.
  const lpsAfter =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  const activeId = lpsAfter.ok
    ? lpsAfter.livingProjectState.activeCycleInstanceId
    : null;
  if (!activeId || activeId !== started.activeCycleInstanceId) {
    return {
      kind: "blocked",
      code: "LPS_ACTIVE_MISMATCH_AFTER_START",
      message: chatFirstStartBlockMessage({
        code: "LPS_ACTIVE_MISMATCH_AFTER_START",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  const entry = getCycleTypeById(started.cycle.cycleTypeId);
  return {
    kind: "started",
    cycleInstanceId: started.cycle.cycleInstanceId,
    activeCycleInstanceId: activeId,
    catalogLabel: started.catalogLabel ?? entry?.label ?? null,
    lpsVersionAfter: started.lpsVersionAfter,
    message: chatFirstStartSuccessMessage({
      cycleLabel: input.cycleLabel || started.catalogLabel,
      cycleInstanceId: started.cycle.cycleInstanceId,
    }),
  };
}
```

## FILE 2/4 — CREATED F01 tests

### path: `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * P6-HQA-F01 — chat-first START gate (deterministic).
 * Proves: start intent does not classify as free createCycle; legacy ≠ prepared;
 * ambiguous prepared fail-closed; already-active recognized; anti-duplication via F2 send.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  chatFirstStartBlockMessage,
  classifyChatFirstStartSituation,
  isChatFirstCycleStartIntent,
} from "@/features/project-assistant/f2/resolveChatFirstCycleStartGate";
import type { CycleInstance } from "@/lib/oa/cycle";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

function cycle(partial: Partial<CycleInstance> & { cycleInstanceId: string }): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: partial.cycleInstanceId,
    cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
    projectId: partial.projectId ?? "prj:test",
    status: partial.status ?? "acknowledged",
    profile: partial.profile ?? "Standard",
    createdAt: partial.createdAt ?? "2026-01-01T00:00:00.000Z",
    trajectoryId: partial.trajectoryId,
    trajectoryVersion: partial.trajectoryVersion,
    trajectoryStepId: partial.trajectoryStepId,
    ckcResolutionRef: partial.ckcResolutionRef,
    qualificationSignals: partial.qualificationSignals,
  };
}

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

class F01FakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const current = demandeCourante(lastUserContent(messages));
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `f01-${this.n}`,
    };
    const actionable = {
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
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      objective: "Livrer la note",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification", "proposition"],
      expectedOutcome: "Proposition",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: null,
    };
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(actionable)}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    return {
      kind: "message",
      text: "[TEST/FAKE · NON LIVE] f01",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "f01-round",
      },
    };
  }
}

describe("P6-HQA-F01 isChatFirstCycleStartIntent", () => {
  it("explicit démarrage → true; propose / ok recommandation → false", () => {
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Je confirme le démarrage du cycle Delivery déjà proposé.",
        cycleLabel: "Delivery",
      }),
    ).toBe(true);
    // Catalog label form must still match user "Delivery".
    expect(
      isChatFirstCycleStartIntent({
        userContent:
          "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
        cycleLabel: "Delivery / implémentation",
      }),
    ).toBe(true);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "J'accepte de démarrer Delivery.",
        cycleLabel: "Delivery",
      }),
    ).toBe(true);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Prépare un cycle Delivery pour la note.",
        cycleLabel: "Delivery",
      }),
    ).toBe(false);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "ok pour la recommandation",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      }),
    ).toBe(false);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Non, ne démarre surtout pas Delivery.",
        cycleLabel: "Delivery",
      }),
    ).toBe(false);
  });
});

describe("P6-HQA-F01 classifyChatFirstStartSituation", () => {
  it("already active", () => {
    expect(
      classifyChatFirstStartSituation({
        activeCycleInstanceId: "cyc:trj-active",
        targetCycleTypeId: "cyc:delivery",
        cycles: [],
      }),
    ).toEqual({
      kind: "already_active",
      activeCycleInstanceId: "cyc:trj-active",
    });
  });

  it("unique COMPLETE prepared Delivery", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({
          cycleInstanceId: "cyc:trj-prep-1",
          trajectoryId: "trj:1",
          trajectoryVersion: 2,
          trajectoryStepId: "step:delivery",
          status: "acknowledged",
        }),
        cycle({
          cycleInstanceId: "cyc:f2-legacy-1",
          status: "acknowledged",
        }),
      ],
    });
    expect(s).toEqual({
      kind: "unique_prepared",
      cycleInstanceId: "cyc:trj-prep-1",
    });
  });

  it("ambiguous prepared → no auto-select", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({
          cycleInstanceId: "cyc:trj-a",
          trajectoryId: "trj:1",
          trajectoryVersion: 1,
          trajectoryStepId: "step:a",
        }),
        cycle({
          cycleInstanceId: "cyc:trj-b",
          trajectoryId: "trj:1",
          trajectoryVersion: 1,
          trajectoryStepId: "step:b",
        }),
      ],
    });
    expect(s.kind).toBe("ambiguous_prepared");
  });

  it("legacy unbound only (HQ-01-like) → not startable via chat gate", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({ cycleInstanceId: "cyc:f2-1" }),
        cycle({ cycleInstanceId: "cyc:f2-2" }),
        cycle({ cycleInstanceId: "cyc:f2-3" }),
        cycle({ cycleInstanceId: "cyc:f2-4" }),
        cycle({ cycleInstanceId: "cyc:f2-5" }),
      ],
    });
    expect(s).toEqual({ kind: "legacy_unbound_only", count: 5 });
  });

  it("no prepared", () => {
    expect(
      classifyChatFirstStartSituation({
        activeCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        cycles: [],
      }).kind,
    ).toBe("no_prepared");
  });

  it("block messages never claim activation / invent HD", () => {
    for (const code of [
      "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
      "NO_PREPARED_CYCLE",
      "PREPARED_CYCLE_AMBIGUOUS",
      "ACTIVE_CYCLE_PRESENT",
    ]) {
      const msg = chatFirstStartBlockMessage({
        code,
        cycleLabel: "Delivery",
        legacyCount: 5,
        preparedCount: 2,
      });
      expect(msg).toMatch(/Aucun (nouveau )?cycle|déjà actif/i);
      expect(msg).not.toMatch(/HumanDecision enregistr/i);
      expect(msg).not.toMatch(/cycle est maintenant actif/i);
    }
  });
});

describe("P6-HQA-F01 F2 send anti-duplication (legacy unbound)", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: F01FakeProvider;
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new F01FakeProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T15:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "F01 Delivery start",
      objective: "Exit proof Delivery",
      context: "P6-HQA-F01",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F01",
      idempotencyKey: `idem:f01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("F01 setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("propose then start-confirm: no N+1 unbound cycle; honest block; LPS inactive", async () => {
    const runtime = getRuntimeApplicationService();
    const propose = await orchestrateAssistantSend({
      projectId,
      content: "Prépare un cycle Delivery pour livrer la note.",
      sessionDbPath,
      provider,
    });
    expect(propose.ok).toBe(true);
    if (!propose.ok) return;

    const cyclesAfterPropose = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterPropose.length).toBe(1);
    expect(cyclesAfterPropose[0]!.cycleInstanceId.startsWith("cyc:f2-")).toBe(
      true,
    );

    const confirm = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
      sessionDbPath,
      provider,
    });
    expect(confirm.ok).toBe(true);
    if (!confirm.ok) return;

    const cyclesAfterConfirm = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterConfirm.length).toBe(1);
    expect(confirm.text).toMatch(/Aucun cycle supplémentaire n'a été créé|ne sont pas liés/i);
    expect(confirm.text).not.toMatch(/est maintenant actif/i);

    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Repeated confirm still does not mint.
    const again = await orchestrateAssistantSend({
      projectId,
      content: "Je confirme le démarrage de Delivery.",
      sessionDbPath,
      provider,
    });
    expect(again.ok).toBe(true);
    const cyclesFinal = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesFinal.length).toBe(1);
  });
});
```

## FILE 3/4 — UNIFIED DIFF orchestrateF2.ts vs HEAD

### path: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 8788abe6..6f48b0d9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -79,6 +79,11 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { composeF2PilotFacingNarrative } from "./composeF2PilotFacingNarrative";
+import {
+  isChatFirstCycleStartIntent,
+  resolveChatFirstCycleStartGate,
+} from "./resolveChatFirstCycleStartGate";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1887,23 +1892,39 @@ export async function orchestrateAssistantSend(input: {
       }
     }

-    const textParts = [
-      presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-      "Le cycle en cours est conservé.",
-      "Une proposition pour matérialiser le livrable est prête à être examinée.",
-      "Nora recommande ; le Pilote décide.",
-      "Rien n'a encore été exécuté.",
-      "Votre décision est requise avant de préparer l'action.",
-      mw5.surface.disposition === "ESCALATE"
-        ? mw5.text
-        : mw5.surface.disclosure,
-      "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-    ];
+    // P6-HQA-COG-01 — pilot-facing narrative at F2 source (persist == present).
+    // MW5 CONTINUE disclosure stays on mw5 DTO / audit, not in chat body.
+    const narrative = composeF2PilotFacingNarrative({
+      kind: "active_cycle_deliverable_proposal",
+      presentation,
+      userContent: content,
+      history: input.history,
+      intentClass: analysis.intentClass,
+      objective: analysis.objective,
+      rephrasedRequest: analysis.rephrasedRequest,
+      cycleLabel: qualification.cycleLabel,
+      recommendedProfile: qualification.recommendedProfile,
+      recommendationLabel: qualification.recommendationLabel,
+      ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+      projectName: project.name,
+      projectObjective: project.objective,
+      activeCycleInstanceId: project.activeCycleInstanceId,
+      lpsUnchanged: true,
+      morrisGateRequired: true,
+      executionBlocked: true,
+      mw5Disposition: mw5.surface.disposition,
+      mw5EscalatePiloteText:
+        mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate ?? null,
+      // R2 — process-local proposal mint is not Product CURRENT subject verification.
+      productCurrentSubjectVerified: false,
+      priorSubjectStatus: null,
+    });

     return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
-      text: textParts.join(" "),
+      text: narrative,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
       model,
@@ -2059,6 +2080,71 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  // P6-HQA-F01 — explicit start intent must not mint another LEGACY_UNBOUND createCycle.
+  // Reuse startPreparedTrajectoryCycle when a unique COMPLETE prepared cycle exists;
+  // otherwise honest block (no silent selection, no invented HD / activation claim).
+  if (
+    isChatFirstCycleStartIntent({
+      userContent: content,
+      cycleLabel: qualification.cycleLabel,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+    })
+  ) {
+    await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+    const startGate = await resolveChatFirstCycleStartGate({
+      oa,
+      projectId: project.projectId,
+      targetCycleTypeId: qualification.cycleTypeId,
+      cycleLabel: qualification.cycleLabel,
+    });
+
+    const reloadedAfterGate = await loadProjectRuntimeForAssistant(
+      project.projectId,
+    );
+    if (reloadedAfterGate.ok) {
+      project = toContextDto(reloadedAfterGate);
+    }
+
+    if (startGate.kind === "started") {
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text: startGate.message,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        qualification: {
+          ...qualification,
+          cycleInstanceId: startGate.cycleInstanceId,
+          cycleStatus: "active",
+        },
+        executionBlocked: analysis.intentClass === "execution_request",
+        mw5: mw5.surface,
+        turnKind: "f2_proposal",
+      });
+    }
+
+    return await completeF2Turn({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
+      text: startGate.message,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
+      qualification,
+      executionBlocked: true,
+      mw5: mw5.surface,
+      turnKind:
+        startGate.kind === "already_active" ? "f2_blocked" : "f2_clarification",
+    });
+  }
+
   const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
   await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
   const created = await oa.cycleServices.createCycle.execute({
@@ -2220,36 +2306,40 @@ export async function orchestrateAssistantSend(input: {
   }

   const executionBlocked = analysis.intentClass === "execution_request";
-  const textParts = [
-    presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-    "Qualification SFIA et proposition structurée générées.",
-    `Cycle proposé: ${qualification.cycleLabel}.`,
-    "Un nouveau cycle est proposé et attend votre validation.",
-    `Profil recommandé: ${qualification.recommendedProfile}.`,
-    project.lpsVersion === preLpsVersion
-      ? "L'état vivant du projet est inchangé (pas d'activation avant démarrage)."
-      : "L'état vivant du projet a été mis à jour.",
-    qualification.recommendationLabel,
-    ...(qualification.ckcCognitiveRecommendation
-      ? [qualification.ckcCognitiveRecommendation]
-      : []),
-    "Recommandation ≠ décision Pilote — aucune activation d'autorité avant démarrage Pilote.",
-    morrisGateRequired
-      ? "Décision Pilote requise avant de poursuivre."
-      : "Pas de gate de construction supplémentaire — aucune exécution — F2 s'arrête ici.",
-    executionBlocked
-      ? "Demande d'exécution détectée — aucune exécution ne sera lancée."
-      : "Aucune exécution.",
-    mw5.surface.disposition === "ESCALATE"
-      ? mw5.text
-      : mw5.surface.disclosure,
-    "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-  ];
+  // P6-HQA-COG-01 — one contextual pilot-facing narrative at F2 source.
+  // Engine CONTINUE / READY_NO_GATE / stacked authority footers stay off the body;
+  // mw5.surface.disclosure remains on the turn DTO for audit.
+  const narrative = composeF2PilotFacingNarrative({
+    kind: "new_cycle_proposal",
+    presentation,
+    userContent: content,
+    history: input.history,
+    intentClass: analysis.intentClass,
+    objective: analysis.objective,
+    rephrasedRequest: analysis.rephrasedRequest,
+    cycleLabel: qualification.cycleLabel,
+    recommendedProfile: qualification.recommendedProfile,
+    recommendationLabel: qualification.recommendationLabel,
+    ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+    projectName: project.name,
+    projectObjective: project.objective,
+    activeCycleInstanceId: project.activeCycleInstanceId,
+    lpsUnchanged: project.lpsVersion === preLpsVersion,
+    morrisGateRequired,
+    executionBlocked,
+    mw5Disposition: mw5.surface.disposition,
+    mw5EscalatePiloteText:
+      mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+    pilotDecisionCandidate: analysis.pilotDecisionCandidate ?? null,
+    // R2 — newly created proposal status ≠ verified CURRENT continuity of a prior subject.
+    productCurrentSubjectVerified: false,
+    priorSubjectStatus: null,
+  });

   return await completeF2Turn({
     userText: content,
     sessionDbPath: input.sessionDbPath,
-    text: textParts.join(" "),
+    text: narrative,
     mode: modeResolution.mode as "fixture" | "live",
     presentation,
     model,
```

## FILE 4/4 — COMPLETE composeF2PilotFacingNarrative.ts (COG01+label match used by F01)

### path: `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts`

```typescript
/**
 * P6-HQA-COG-01 / CORRECTION PASS 02 — pilot-facing F2 narrative composition.
 *
 * Deterministic seam for F2 proposal turns:
 * - interpret Pilot stance (structured pilotDecisionCandidate first, lexical fail-closed);
 * - R1: accept on recommendation/presented subject ≠ accept_start without explicit start intent;
 * - R2: conversation history is CONTEXT ONLY — Product CURRENT continuity requires verified subject;
 * - compose proportionate narrative from Product truth.
 *
 * Non-authoritative: never invents HumanDecision / Confirmation / activation / execution.
 * Not a second LLM call. Not a new cognitive architecture.
 */

import type {
  PilotDecisionCandidate,
  PilotDecisionDisposition,
  PilotDecisionTargetKind,
} from "./types";

export type F2PilotNarrativeKind =
  | "new_cycle_proposal"
  | "active_cycle_deliverable_proposal";

export type F2PilotNarrativeHistoryMessage = {
  readonly role: string;
  readonly content: string;
};

/** Situational stance — understanding before wording. */
export type PilotNarrativeStanceKind =
  | "accept_start"
  /** Accept of recommendation / presented subject — NOT cycle start. */
  | "accept_recommendation"
  | "refuse_start"
  | "defer_start"
  | "question_status"
  | "confirm_other_subject"
  | "refuse_proposal"
  | "amend_request"
  | "neutral_propose"
  | "ambiguous";

export type PilotNarrativeStance = {
  readonly kind: PilotNarrativeStanceKind;
  /** structured = pilotDecisionCandidate; lexical = fail-closed text cues; none = default. */
  readonly source: "structured" | "lexical" | "none";
};

/**
 * Continuity classes (CP02):
 * - same_subject_product_current: Product-verified current subject only
 * - same_subject_history_hint: textual history hint — NOT Product CURRENT
 * - other_subject / refused_or_stale_hint / none
 */
export type HistoryContinuityKind =
  | "same_subject_product_current"
  | "same_subject_history_hint"
  | "other_subject"
  | "refused_or_stale_hint"
  | "none";

export type HistoryContinuity = {
  readonly kind: HistoryContinuityKind;
};

export type ComposeF2PilotFacingNarrativeInput = {
  readonly kind: F2PilotNarrativeKind;
  readonly presentation: "test_provider" | "openai_live";
  readonly userContent: string;
  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
  readonly intentClass: string;
  readonly objective: string | null | undefined;
  readonly rephrasedRequest: string | null | undefined;
  readonly cycleLabel: string | null | undefined;
  readonly recommendedProfile: string | null | undefined;
  readonly recommendationLabel: string | null | undefined;
  readonly ckcCognitiveRecommendation: string | null | undefined;
  readonly projectName: string | null | undefined;
  readonly projectObjective: string | null | undefined;
  readonly activeCycleInstanceId: string | null | undefined;
  readonly lpsUnchanged: boolean;
  readonly morrisGateRequired: boolean;
  readonly executionBlocked: boolean;
  readonly mw5Disposition: string | null | undefined;
  readonly mw5EscalatePiloteText: string | null | undefined;
  /**
   * NON-AUTHORITATIVE structured disposition from intent analysis.
   * Never a HumanDecision; preferred over lexical cues when present.
   */
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /**
   * @deprecated CP02 — current-turn proposalStatus is NOT historical currentness.
   * Kept for call-site compat; ignored by assessHistoryContinuity.
   */
  readonly proposalStatus?: string | null;
  /**
   * R2 — ONLY when an existing Product contract has verified the decision
   * subject as CURRENT for this turn. History alone never sets this.
   * Default / absent = false (fail-closed).
   */
  readonly productCurrentSubjectVerified?: boolean;
  /**
   * Optional Product status of a verified PRIOR/current subject (not the
   * newly minted proposal of this turn). Used only with Product evidence.
   */
  readonly priorSubjectStatus?: string | null;
};

const ENGINE_LEAK_RE =
  /CONTINUE\s*[—–-]\s*cognition propose-only|READY_NO_GATE|TEMPORARY WITH EXIT|\[MW5|AUCUNE EXÉCUTION\s*[—–-]\s*ZERO|F2 s'arrête|Qualification SFIA et proposition structurée|RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE/i;

const QUESTION_CUE_RE =
  /(\?|^\s*(est-ce que|peux-tu|pouvez-vous|peux tu|pourrais-tu|comment|pourquoi)\b)/i;

const NEGATION_START_RE =
  /\b(ne\s+(?:me\s+)?(?:démarre|lance|active)[^\n.!?]{0,40}\s+pas|\bne\s+[^\n.!?]{0,40}\bpas\b[^\n.!?]{0,40}\b(d[eé]marr|lanc|activ)|\bsurtout\s+pas\b|\bje\s+ne\s+veux\s+pas\b|\bne\s+veux\s+pas\b|\brefuse\b|\binacceptable\b|\bn['']est\s+pas\s+acceptable\b)/i;

const DEFER_RE =
  /\b(pr[eé]f[eè]re\s+attendre|attendre\s+avant|plus\s+tard|pas\s+maintenant|ajourn)/i;

const OTHER_CONFIRM_RE =
  /\bconfirm\w*\b[^\n.!?]{0,80}\b(date|livrable|deadline|échéance|horaire)\b|\b(date|livrable|deadline|échéance)\b[^\n.!?]{0,80}\bconfirm/i;

const CLEAR_ACCEPT_START_RE =
  /\b(j['’]?accepte\s+de\s+(d[eé]marrer|lancer|activer)|je\s+confirm\w*\s+(explicitement\s+)?(le\s+)?(d[eé]marrage|lancement|activation)|d[eé]marrage\s+effectif|je\s+(veux|souhaite)\s+(d[eé]marrer|lancer|activer))\b/i;

const REFUSE_PROPOSAL_RE =
  /\b(proposition\s+n['’]?est\s+pas\s+acceptable|je\s+refuse\s+(cette\s+)?(proposition|recommandation)|pas\s+acceptable)\b/i;

function normalizeLabel(label: string | null | undefined): string {
  return (label ?? "").trim().toLowerCase();
}

/** Catalog labels like "Delivery / implémentation" must match user "Delivery". */
function labelsReferToSameCycle(
  a: string | null | undefined,
  b: string | null | undefined,
): boolean {
  const na = normalizeLabel(a);
  const nb = normalizeLabel(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  const ta = na.split(/[\s/=_|-]+/).find(Boolean) ?? "";
  const tb = nb.split(/[\s/=_|-]+/).find(Boolean) ?? "";
  return Boolean(ta && tb && ta === tb);
}

function cyclePhrase(label: string | null | undefined): string {
  const c = (label ?? "").trim();
  return c ? `« ${c} »` : "ce cycle";
}

function intentFocus(input: ComposeF2PilotFacingNarrativeInput): string | null {
  const fromIntent =
    (input.rephrasedRequest ?? "").trim() ||
    (input.objective ?? "").trim() ||
    (input.projectObjective ?? "").trim();
  if (!fromIntent) return null;
  const oneLine = fromIntent.replace(/\s+/g, " ").trim();
  return oneLine.length > 160 ? `${oneLine.slice(0, 157)}…` : oneLine;
}

function scrubCognitiveSnippet(text: string | null | undefined): string | null {
  const raw = (text ?? "").trim();
  if (!raw) return null;
  if (!ENGINE_LEAK_RE.test(raw)) return raw;
  const cleaned = raw
    .replace(/CONTINUE\s*[—–-]\s*cognition propose-only[^.]*\.?/gi, "")
    .replace(/\bREADY_NO_GATE\b/gi, "")
    .replace(/\[MW5[^\]]*\]/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned.length > 0 ? cleaned : null;
}

function messageMentionsCycle(
  content: string,
  cycleLabel: string | null | undefined,
): boolean {
  const label = normalizeLabel(cycleLabel);
  if (!label) return false;
  if (new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(content)) {
    return true;
  }
  const token = label.split(/[\s/=_|-]+/).find(Boolean);
  if (!token || token.length < 3) return false;
  return new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(
    content,
  );
}

/** Known Studio cycle labels for mismatch checks (quoted or bare). Not a NLU engine. */
const KNOWN_CYCLE_LABELS = [
  "delivery",
  "cadrage",
  "clarification",
  "décision",
  "decision",
  "exploration",
  "qualification",
  "capitalisation",
  "capitalization",
] as const;

function extractQuotedLabels(content: string): string[] {
  const out: string[] = [];
  const re = /«\s*([^»]+?)\s*»/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content))) {
    const v = (m[1] ?? "").trim();
    if (v) out.push(v);
  }
  return out;
}

/**
 * Relates a named cycle in start-intent prose to the subject cycleLabel.
 * Uses quoted labels + known bare cycle names after démarrage/lancer — not open regex NLU.
 */
export function resolveNamedCycleRelativeToSubject(
  text: string,
  cycleLabel: string | null | undefined,
): "match" | "mismatch" | "unspecified" {
  const label = normalizeLabel(cycleLabel);
  const quoted = extractQuotedLabels(text).map((q) => normalizeLabel(q));
  if (quoted.length > 0) {
    if (label && quoted.some((q) => labelsReferToSameCycle(q, label))) {
      return "match";
    }
    if (
      quoted.some(
        (q) =>
          q &&
          !labelsReferToSameCycle(q, label) &&
          (KNOWN_CYCLE_LABELS as readonly string[]).includes(q),
      )
    ) {
      return "mismatch";
    }
  }
  // Prefer "… démarrage de Delivery" / "… du cycle Delivery" over capturing "cycle".
  const namedCycle = text.match(
    /(?:d[eé]marrage|lancement|activation|d[eé]marrer|lancer|activer)(?:\s+(?:de|du|d['’])?\s*(?:cycle\s+)?)([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-]*)/i,
  );
  if (namedCycle?.[1]) {
    const named = normalizeLabel(namedCycle[1]);
    if (named === "cycle") {
      // keep scanning — bare "cycle" is not a type name
    } else if (label && labelsReferToSameCycle(named, label)) {
      return "match";
    } else if (
      (KNOWN_CYCLE_LABELS as readonly string[]).includes(named) &&
      !labelsReferToSameCycle(named, label)
    ) {
      return "mismatch";
    }
  }
  if (label && CLEAR_ACCEPT_START_RE.test(text)) {
    for (const k of KNOWN_CYCLE_LABELS) {
      if (labelsReferToSameCycle(k, label)) continue;
      if (new RegExp(`\\b${k}\\b`, "i").test(text)) return "mismatch";
    }
    // User said "Delivery" and catalog label contains Delivery → match.
    if (messageMentionsCycle(text, cycleLabel)) return "match";
  }
  return "unspecified";
}

/** Explicit start intent for THIS subject cycle (lexical cue + cycle match). */
export function hasExplicitStartIntentForSubject(
  text: string,
  cycleLabel: string | null | undefined,
): boolean {
  if (!CLEAR_ACCEPT_START_RE.test(text ?? "")) return false;
  const rel = resolveNamedCycleRelativeToSubject(text, cycleLabel);
  if (rel === "mismatch") return false;
  // Unspecified is allowed only when no other known cycle is named.
  return rel === "match" || rel === "unspecified";
}

/**
 * Structured-first stance. Lexical path is fail-closed: negation / question /
 * other-subject confirmation never become accept_start.
 * R1: structured accept on recommendation ≠ accept_start without explicit start.
 */
export function interpretPilotNarrativeStance(input: {
  readonly userContent: string;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): PilotNarrativeStance {
  const text = (input.userContent ?? "").trim();
  const candidate = input.pilotDecisionCandidate ?? null;

  if (candidate) {
    const fromStructured = stanceFromStructuredCandidate(
      candidate,
      text,
      input.cycleLabel,
    );
    if (fromStructured) return fromStructured;
  }

  return stanceFromLexicalCues(text, input.cycleLabel);
}

function stanceFromStructuredCandidate(
  candidate: PilotDecisionCandidate,
  userText: string,
  cycleLabel: string | null | undefined,
): PilotNarrativeStance | null {
  const d: PilotDecisionDisposition = candidate.disposition;
  const t: PilotDecisionTargetKind = candidate.targetKind;

  if (d === "refuse") {
    return { kind: "refuse_start", source: "structured" };
  }
  if (d === "defer") {
    return { kind: "defer_start", source: "structured" };
  }
  if (d === "amend") {
    return { kind: "amend_request", source: "structured" };
  }
  if (d === "ambiguous") {
    return { kind: "ambiguous", source: "structured" };
  }
  if (d === "none") {
    // Explicit "no disposition on a governed subject" — do not invent accept.
    return null;
  }
  if (d === "accept") {
    // Accept of an alternative / ambiguous target is not cycle-start agreement.
    if (t === "specific_alternative" || t === "ambiguous") {
      return { kind: "ambiguous", source: "structured" };
    }
    // Fail-closed overrides even when structured says accept.
    if (NEGATION_START_RE.test(userText) || REFUSE_PROPOSAL_RE.test(userText)) {
      return { kind: "refuse_start", source: "lexical" };
    }
    if (QUESTION_CUE_RE.test(userText)) {
      return { kind: "question_status", source: "lexical" };
    }
    if (OTHER_CONFIRM_RE.test(userText)) {
      return { kind: "confirm_other_subject", source: "lexical" };
    }
    // R1 — accept recommendation/presented subject ≠ start unless explicit start for THIS cycle.
    if (
      t === "current_recommendation" ||
      t === "presented_subject"
    ) {
      if (hasExplicitStartIntentForSubject(userText, cycleLabel)) {
        return { kind: "accept_start", source: "structured" };
      }
      return { kind: "accept_recommendation", source: "structured" };
    }
    return { kind: "ambiguous", source: "structured" };
  }
  return null;
}

function stanceFromLexicalCues(
  text: string,
  cycleLabel: string | null | undefined,
): PilotNarrativeStance {
  if (!text) return { kind: "neutral_propose", source: "none" };

  // Questions about activation/status never become agreement.
  if (QUESTION_CUE_RE.test(text)) {
    if (
      /\b(d[eé]marr|activ|lanc|cycle\s+n['’]?est|pas\s+actif)\b/i.test(text)
    ) {
      return { kind: "question_status", source: "lexical" };
    }
  }

  if (REFUSE_PROPOSAL_RE.test(text)) {
    return { kind: "refuse_proposal", source: "lexical" };
  }

  if (NEGATION_START_RE.test(text)) {
    return { kind: "refuse_start", source: "lexical" };
  }

  // "Je confirme que je ne veux pas démarrer…"
  if (
    /\bconfirm\w*\b/i.test(text) &&
    /\bne\s+veux\s+pas\b|\bne\s+[^\n.!?]{0,30}\bd[eé]marr/i.test(text)
  ) {
    return { kind: "refuse_start", source: "lexical" };
  }

  if (OTHER_CONFIRM_RE.test(text)) {
    return { kind: "confirm_other_subject", source: "lexical" };
  }

  if (DEFER_RE.test(text) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(text)) {
    return { kind: "defer_start", source: "lexical" };
  }

  if (CLEAR_ACCEPT_START_RE.test(text)) {
    const rel = resolveNamedCycleRelativeToSubject(text, cycleLabel);
    if (rel === "mismatch") {
      return { kind: "ambiguous", source: "lexical" };
    }
    return { kind: "accept_start", source: "lexical" };
  }

  // Bare presence of "confirme/démarre/activation" without clear accept → ambiguous.
  if (
    /\b(confirm|d[eé]marr|activ|lancer\b.*cycle|cycle\b.*lancer)\w*\b/i.test(
      text,
    )
  ) {
    return { kind: "ambiguous", source: "lexical" };
  }

  return { kind: "neutral_propose", source: "none" };
}

/**
 * Continuity assessment (CP02 / R2).
 * Conversation history = CONTEXT ONLY.
 * same_subject_product_current requires productCurrentSubjectVerified === true.
 * Current-turn proposalStatus is ignored (not historical currentness).
 */
export function assessHistoryContinuity(input: {
  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
  readonly cycleLabel: string | null | undefined;
  /** @deprecated ignored — do not treat current-turn status as history currentness */
  readonly proposalStatus?: string | null;
  readonly productCurrentSubjectVerified?: boolean;
  readonly priorSubjectStatus?: string | null;
}): HistoryContinuity {
  const priorStatus = (input.priorSubjectStatus ?? "").trim().toUpperCase();
  if (
    priorStatus === "STALE" ||
    priorStatus === "REFUSED" ||
    priorStatus === "SUPERSEDED"
  ) {
    return { kind: "refused_or_stale_hint" };
  }

  // Product-verified CURRENT subject — only authoritative CURRENT continuity.
  if (input.productCurrentSubjectVerified === true) {
    return { kind: "same_subject_product_current" };
  }

  const label = normalizeLabel(input.cycleLabel);
  const history = input.history ?? [];
  if (!history.length || !label) {
    return { kind: "none" };
  }

  const window = history.slice(-8);
  let sameCycleHint = false;
  let otherSubject = false;
  let refusedHint = false;

  for (const m of window) {
    const role = (m.role ?? "").toLowerCase();
    const content = m.content ?? "";
    if (role === "assistant" || role === "nora") {
      const quoted = extractQuotedLabels(content).map((q) => q.toLowerCase());
      const mentionsSame =
        messageMentionsCycle(content, input.cycleLabel) &&
        /\b(propos|candidat|recommand|validation|d[eé]marr)/i.test(content);
      if (mentionsSame) sameCycleHint = true;
      for (const q of quoted) {
        if (q && q !== label) otherSubject = true;
      }
      if (
        /\b(cadrage|clarification|d[eé]cision|exploration)\b/i.test(content) &&
        label === "delivery" &&
        !messageMentionsCycle(content, "Delivery")
      ) {
        otherSubject = true;
      }
    }
    if (role === "user") {
      if (
        messageMentionsCycle(content, input.cycleLabel) &&
        (NEGATION_START_RE.test(content) || REFUSE_PROPOSAL_RE.test(content))
      ) {
        refusedHint = true;
      }
    }
  }

  if (refusedHint) return { kind: "refused_or_stale_hint" };
  // History may hint at same cycle label — never Product CURRENT without verification.
  if (sameCycleHint) return { kind: "same_subject_history_hint" };
  if (otherSubject) return { kind: "other_subject" };
  return { kind: "none" };
}

/**
 * @deprecated CP01 — use interpretPilotNarrativeStance. Kept as accept_start probe only.
 */
export function pilotSignalsActivationOrConfirmIntent(
  text: string,
  cycleLabel?: string | null,
  pilotDecisionCandidate?: PilotDecisionCandidate | null,
): boolean {
  return (
    interpretPilotNarrativeStance({
      userContent: text,
      cycleLabel,
      pilotDecisionCandidate,
    }).kind === "accept_start"
  );
}

/**
 * @deprecated CP02 — history hint ≠ Product CURRENT. Prefer assessHistoryContinuity.
 */
export function historySuggestsPriorCycleProposal(
  history: readonly F2PilotNarrativeHistoryMessage[] | undefined,
  cycleLabel?: string | null,
): boolean {
  const kind = assessHistoryContinuity({ history, cycleLabel }).kind;
  return (
    kind === "same_subject_history_hint" ||
    kind === "same_subject_product_current"
  );
}

/** Repeated-accept CURRENT wording only with Product-verified subject. */
function shouldAcknowledgeRepeatedAccept(
  stance: PilotNarrativeStance,
  continuity: HistoryContinuity,
): boolean {
  return (
    stance.kind === "accept_start" &&
    continuity.kind === "same_subject_product_current"
  );
}

/**
 * Compose the single pilot-facing narrative persisted and returned by F2 proposal turns.
 */
export function composeF2PilotFacingNarrative(
  input: ComposeF2PilotFacingNarrativeInput,
): string {
  const parts: string[] = [];

  if (input.presentation === "test_provider") {
    parts.push("[Mode test]");
  }

  const cycle = cyclePhrase(input.cycleLabel);
  const focus = intentFocus(input);
  const cycleActive = Boolean(input.activeCycleInstanceId?.trim());
  const stance = interpretPilotNarrativeStance({
    userContent: input.userContent,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  const continuity = assessHistoryContinuity({
    history: input.history,
    cycleLabel: input.cycleLabel,
    productCurrentSubjectVerified: input.productCurrentSubjectVerified === true,
    priorSubjectStatus: input.priorSubjectStatus,
  });

  if (input.kind === "active_cycle_deliverable_proposal") {
    parts.push(
      focus
        ? `Une proposition pour matérialiser le livrable (${focus}) est prête à être examinée — le cycle en cours est conservé.`
        : "Une proposition pour matérialiser le livrable est prête à être examinée — le cycle en cours est conservé.",
    );
  } else {
    switch (stance.kind) {
      case "accept_recommendation": {
        parts.push(
          normalizeLabel(input.cycleLabel)
            ? `Je note votre accord sur la recommandation concernant ${cycle}. Ce n'est pas encore un démarrage.`
            : "Je note votre accord sur la recommandation. Ce n'est pas encore un démarrage de cycle.",
        );
        break;
      }
      case "accept_start": {
        if (cycleActive) {
          parts.push(
            `Je note votre intention concernant ${cycle}. Un cycle est déjà actif sur le projet.`,
          );
        } else if (shouldAcknowledgeRepeatedAccept(stance, continuity)) {
          parts.push(
            `Je reconnais votre accord pour démarrer ${cycle}. Ce tour ne l'active pas : aucune activation n'est enregistrée.`,
          );
        } else if (continuity.kind === "other_subject") {
          parts.push(
            `Je comprends une intention de démarrage pour ${cycle}. Je ne la rattache pas à une proposition d'un autre cycle dans l'historique.`,
          );
        } else if (continuity.kind === "refused_or_stale_hint") {
          parts.push(
            `Je note votre demande relative à ${cycle}, mais le contexte antérieur indique un refus ou un sujet obsolète — je ne le traite pas comme un démarrage accompli.`,
          );
        } else {
          // Includes same_subject_history_hint — hint ≠ CURRENT continuity claim.
          parts.push(
            `Je comprends votre intention de démarrer ${cycle}. Pour l'instant il n'est pas actif — une confirmation en conversation ne constitue pas à elle seule l'activation.`,
          );
        }
        break;
      }
      case "refuse_start":
      case "refuse_proposal": {
        parts.push(
          stance.kind === "refuse_proposal"
            ? `Je prends note que la proposition n'est pas acceptable${focus ? ` (${focus})` : ""}. Ce n'est pas un accord de démarrage.`
            : `Je prends note de votre refus de démarrer ${cycle}. Aucun démarrage n'est engagé.`,
        );
        break;
      }
      case "defer_start": {
        parts.push(
          `Je note que vous préférez attendre avant de lancer ${cycle}. Aucun démarrage n'est engagé.`,
        );
        break;
      }
      case "question_status": {
        parts.push(
          cycleActive
            ? `Oui — un cycle est actuellement actif sur le projet.`
            : `Non — d'après l'état projet, aucun cycle n'est actuellement actif${normalizeLabel(input.cycleLabel) ? ` (y compris ${cycle})` : ""}.`,
        );
        break;
      }
      case "confirm_other_subject": {
        parts.push(
          `Je note votre confirmation sur ce point. Cela ne vaut pas un accord de démarrage pour ${cycle}.`,
        );
        if (focus) {
          parts.push(`La proposition de cycle en cours porte sur : ${focus}.`);
        }
        break;
      }
      case "amend_request": {
        parts.push(
          `Je note votre demande d'amendement concernant ${cycle}. Aucune activation n'est engagée.`,
        );
        break;
      }
      case "ambiguous": {
        parts.push(
          `Je ne traite pas encore cela comme un accord de démarrage pour ${cycle}. Souhaitez-vous le lancer, l'ajourner, ou préciser autre chose ?`,
        );
        break;
      }
      case "neutral_propose":
      default: {
        parts.push(
          focus
            ? `Je propose le cycle ${cycle} pour avancer sur : ${focus}.`
            : `Je propose le cycle ${cycle}.`,
        );
        break;
      }
    }
  }

  // Proportionate details — not a fixed admin report on every turn.
  const cognitive = scrubCognitiveSnippet(input.ckcCognitiveRecommendation);
  const showProfile =
    input.kind === "new_cycle_proposal" &&
    Boolean((input.recommendedProfile ?? "").trim()) &&
    (stance.kind === "neutral_propose" ||
      stance.kind === "amend_request" ||
      input.morrisGateRequired);
  const showLpsHonesty =
    input.kind === "new_cycle_proposal" &&
    (stance.kind === "accept_start" ||
      !input.lpsUnchanged ||
      (stance.kind === "neutral_propose" && !input.lpsUnchanged));
  const showGovernance =
    stance.kind === "accept_start" ||
    stance.kind === "accept_recommendation" ||
    stance.kind === "neutral_propose" ||
    input.executionBlocked ||
    input.intentClass === "execution_request" ||
    input.morrisGateRequired ||
    input.mw5Disposition === "ESCALATE";
  const showNoExecution =
    input.executionBlocked ||
    input.intentClass === "execution_request" ||
    (stance.kind === "accept_start" && !cycleActive);

  if (showProfile) {
    parts.push(`Profil recommandé : ${(input.recommendedProfile ?? "").trim()}.`);
  }

  const recLabel = (input.recommendationLabel ?? "").trim();
  if (
    recLabel &&
    !ENGINE_LEAK_RE.test(recLabel) &&
    stance.kind === "neutral_propose"
  ) {
    parts.push(recLabel);
  }

  if (
    cognitive &&
    (stance.kind === "neutral_propose" || stance.kind === "amend_request")
  ) {
    parts.push(cognitive);
  }

  if (showLpsHonesty) {
    if (input.lpsUnchanged) {
      if (stance.kind === "accept_start") {
        parts.push("L'état vivant du projet reste inchangé.");
      }
    } else {
      parts.push("L'état vivant du projet a été mis à jour.");
    }
  }

  if (showGovernance) {
    if (stance.kind === "accept_start") {
      parts.push(
        "Ceci reste une intention / recommandation — pas une activation enregistrée.",
      );
    } else if (stance.kind === "accept_recommendation") {
      // Keep lean — opening already states "pas encore un démarrage".
    } else if (stance.kind === "neutral_propose") {
      parts.push(
        "Ceci reste une recommandation, pas encore un démarrage ni une décision Pilote structurée.",
      );
    } else if (input.morrisGateRequired) {
      parts.push("Votre décision est requise avant de préparer l'action.");
    }
  } else if (input.morrisGateRequired) {
    parts.push("Votre décision est requise avant de préparer l'action.");
  }

  if (showNoExecution) {
    parts.push("Rien n'a encore été exécuté.");
  } else if (input.executionBlocked || input.intentClass === "execution_request") {
    parts.push(
      "Une demande d'exécution a été détectée — aucune exécution ne sera lancée par ce tour.",
    );
  }

  if (
    input.mw5Disposition === "ESCALATE" &&
    (input.mw5EscalatePiloteText ?? "").trim()
  ) {
    parts.push(input.mw5EscalatePiloteText!.trim());
  }

  return parts
    .map((p) => p.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Invariants used by COG01 tests — semantic, not full-string snapshots. */
export function f2PilotNarrativeInvariants(text: string): {
  readonly hasEngineContinue: boolean;
  readonly hasReadyNoGate: boolean;
  readonly hasQualificationAdminLead: boolean;
  readonly hasStackedAuthorityFooter: boolean;
  readonly claimsActivationAccomplished: boolean;
  readonly acknowledgesAgreement: boolean;
  readonly acknowledgesRefusal: boolean;
  readonly adminClauseCount: number;
} {
  const t = text ?? "";
  const adminClauseCount = [
    /Profil recommand/i.test(t),
    /[eé]tat vivant du projet/i.test(t),
    /Rien n'a encore [eé]t[eé] ex[eé]cut/i.test(t),
    /Ceci reste une recommandation/i.test(t) ||
      /Ceci reste une intention/i.test(t),
    /pas une d[eé]cision Pilote/i.test(t),
  ].filter(Boolean).length;

  return {
    hasEngineContinue: /CONTINUE\s*[—–-]\s*cognition propose-only/i.test(t),
    hasReadyNoGate: /\bREADY_NO_GATE\b/.test(t),
    hasQualificationAdminLead:
      /Qualification SFIA et proposition structurée générées/i.test(t),
    hasStackedAuthorityFooter:
      /Nora n'émet pas de décision Pilote[\s\S]*Pas de gate de construction/i.test(
        t,
      ) ||
      (/Recommandation\s*≠\s*d[eé]cision Pilote/i.test(t) &&
        /F2 s'arrête ici/i.test(t)),
    claimsActivationAccomplished:
      /confirmation\s+constitue\s+la\s+d[eé]cision\s+de\s+lancement/i.test(t) ||
      /cycle\s+(est|a\s+[eé]t[eé])\s+(d[eé]marr[eé]|activ[eé])(?!\s)/i.test(t),
    acknowledgesAgreement: /reconnais votre accord/i.test(t),
    acknowledgesRefusal:
      /refus|n'est pas acceptable|ne veux pas|aucun d[eé]marrage n'est engag/i.test(
        t,
      ),
    adminClauseCount,
  };
}
```

---
END OF COMPLETE REVIEW PACK — P6-HQA-F01
