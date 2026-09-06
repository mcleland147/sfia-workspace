# ChatGPT Critical Delivery Review — CORR-PROOF-03 E1 Method-Grounded Single-Run Advisory

## 1. Timestamp (UTC)
2026-09-06T19:46:55Z

## 2. Cycle ID
SFIA-STUDIO-PRODUCT-PROOF-CORR-03-E1-DELIVERY-01

Parent: SFIA-STUDIO-PRODUCT-PROOF-CORR-03-METHOD-GROUNDED-ADVISORY-DESIGN-01
Corrective: CORR-PROOF-03 — METHOD-GROUNDED ADVISORY ORCHESTRATION
Delivery option: E1 — METHOD-GROUNDED SINGLE-RUN ADVISORY
Cycle type: 8 — Delivery · Typology: EVOL · Profile: CRITICAL

## 3. Morris E1 decision consumed
MORRIS DECISION — CORR-PROOF-03 OPTION E1 “METHOD-GROUNDED SINGLE-RUN ADVISORY” ADOPTED
— B1 ADVISORY FREEDOM PRESERVED
— F1 COGNITION MUST RECEIVE SFIA STUDIO METHOD GROUNDING THROUGH NON-MUTATING METHOD ORIENTATION + READ-ONLY DoctrinePackage/CKC LENS
— USE EXISTING analyzeIntent OUTPUT AS THE FIRST ORIENTATION SIGNAL
— NO EXTRA METHOD-REASONING MODEL CALL IN THE FIRST DELIVERY SLICE
— SFIA STUDIO IS THE DEFAULT “SFIA” IDENTITY INSIDE STUDIO UNLESS THE PILOTE EXPLICITLY REQUESTS THE EXTERNAL SKILLS FRAMEWORK
— transitionReadiness / DURABLE F2 QUALIFICATION / MW5 / HumanDecision / ExecutionContract BOUNDARIES REMAIN UNCHANGED
— ProjectTrajectory-on-F1 DEFERRED FROM THE FIRST SLICE
— ONE Agent / Runner / ProductSqliteSession PRESERVED
— DELIVERY + DETERMINISTIC S1–S18 PROOF AUTHORIZED
— NO REAL · NO PRODUCT GIT UNTIL CRITICAL DELIVERY REVIEW

## 4. Repo / worktree / local branch
- Repository: mcleland147/sfia-workspace
- Worktree: `/Users/morris/Projects/sfia-workspace-proof-corr-03-e1-delivery`
- Local branch: `delivery/sfia-studio-proof-corr-03-e1-method-grounded-advisory`
- Note: worktree was briefly mis-checked-out onto `delivery/sfia-studio-proof-corr-01-d1-conversation` (no product edits). Restored via `git checkout delivery/sfia-studio-proof-corr-03-e1-method-grounded-advisory` to ORIG_HEAD baseline before implementation. No discard of unknown CORR-03 work.

## 5. HEAD / origin/main
- HEAD = `1b93fca866557d67b0cf4ef7de5bad2d6dceecda`
- origin/main = `1b93fca866557d67b0cf4ef7de5bad2d6dceecda`
- Baseline match: PASS

## 6. Input Review Handoff
- tip: `308293a42f87592bcb2e4e013499a61993f6f4fa`
- blob: `166f3c905bb5624cece9760e7d7ba37135e9bf62`
- canonical path: `sfia-review-handoff/latest-chatgpt-review.md`
- Verified current on `origin/sfia/review-handoff` before delivery publish.

## 7. Convergence qualification
Primary: V3-F05 — conversation → governed decision/execution chain.
Supporting: V3-F01 CKC · V3-F02 Truth C/LPS · V3-F03 DoctrinePackage · V3-F04 epistemic separation.
Preserve: V3-F11 authority · V3-F12 reversibility · V3-F15 proportional maturity.
Milestone: PRODUCT PROOF — CORR-PROOF-03.

## 8. Product Proof state
- CORR-PROOF-02 B1: REAL revalidated at advisory-freedom scope (prior).
- CORR-PROOF-03: OPEN / BLOCKING gap `METHOD_GROUNDED_ADVISORY_ORCHESTRATION_GAP` addressed by this E1 deterministic candidate.
- Product Proof overall: OPEN / BLOCKED (pending Critical Delivery Review + Morris Product Git + separate REAL revalidation).
- Stage B: NOT AUTHORIZED.
- Production model routing: NOT SELECTED.
- runtime v3: NON ADOPTED.

## 9. E1 target / invariants
Target flow:
```
Pilote → ProductSqliteSession + Truth C → analyzeIntent
  → PURE method orientation
  → READ-ONLY DoctrinePackage / CKC lens when safely resolvable
  → context composition → SAME Nora Agent → SAME Runner → SAME ProductSqliteSession
  → ONE method-grounded F1 assistant response
```
If `transitionReadiness.formalizationReady` → KEEP existing governed F2 path unchanged.

Hard invariants: no second Agent/Runner/Session; no third method-reasoning LLM; no F1 `reasonWithResolvedCkcContext`; no ProjectTrajectory-on-F1; no durable formalization from ordinary advisory.

## 10. CKC external-process resolution / Cycle 8 fallback
No dedicated Delivery pilot CKC in current pilots directory (ChatGPT design note).
Used canonical synthetic/fallback cognitive guidance permitted by external v2.6 process.
Product CKC for known cycle orientation loaded read-only from pinned product DoctrinePackage via existing `loadProductCkcCognitiveContent` + `buildCkcCognitivePromptSection`.
Did NOT invent a detailed Delivery CKC artifact.

## 11. Code flow before change
```
Session/Truth C → analyzeIntent → resolveTransitionReadiness
  !formalizationReady → F1 (generic prompt + Truth C; doctrine pins only; NO method/CKC lens)
  formalizationReady → qualifyWithCkc → (optional) reasonWithResolvedCkcContext → Cycle/Proposal…
```

## 12. Final code flow
```
Session/Truth C → analyzeIntent → resolveTransitionReadiness
  !formalizationReady →
      composeAdvisoryMethodContext (PURE orientation + optional read-only CKC)
      → F1 once with methodContext in buildProjectSystemPrompt
      → NO reasonWithResolvedCkcContext
  formalizationReady → existing qualifyWithCkc / reasonWithResolvedCkcContext / F2 unchanged
```

## 13. Exact file scope
NEW:
- `projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof03.e1.methodGroundedAdvisory.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/methodOrientation.test.ts`

MODIFY:
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

NOT modified (envelope optional unused): `ckcCognitiveContext.ts`
Outside envelope: NONE.

## 14. Full content — NEW files

### 14.a methodOrientation.ts
```typescript
/**
 * CORR-PROOF-03 E1 — pure / read-only method orientation + F1 method context.
 *
 * Non-mutating. No provider call. No persistence. No Cycle / LPS / Proposal /
 * HumanDecision / ExecutionContract. Hypothesis lens only.
 */

import {
  getCycleTypeById,
  isKnownCycleTypeId,
} from "@/lib/oa/cycle";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { ProjectAssistantContextDto } from "../types";
import {
  buildCkcCognitivePromptSection,
  loadProductCkcCognitiveContent,
} from "./ckcCognitiveContext";
import type { IntentAnalysisDto } from "./types";

export type MethodOrientationState =
  | "RESOLVED_FROM_INTENT_CANDIDATE"
  | "UNRESOLVED";

export type MethodOrientation = {
  readonly state: MethodOrientationState;
  /** Known catalog cycle id when resolved; never invented. */
  readonly candidateCycleTypeId: string | null;
};

/**
 * Bounded F1 method context — guidance only, non-authoritative.
 * Optional trajectory reserved for a later slice (not populated here).
 */
export type AdvisoryMethodContext = {
  readonly orientation: MethodOrientation;
  readonly cycleLabel: string | null;
  /** Internal CKC lens text for the system prompt (do not expose mechanics to Pilote). */
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly doctrinePinPresent: boolean;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
  /** Reserved — ProjectTrajectory-on-F1 deferred from CORR-PROOF-03 E1. */
  readonly trajectory?: null;
};

export function resolveMethodOrientation(
  analysis: IntentAnalysisDto,
): MethodOrientation {
  const candidate = analysis.candidateCycleTypeId?.trim() ?? null;
  if (
    analysis.parseOk === true &&
    candidate != null &&
    candidate.length > 0 &&
    isKnownCycleTypeId(candidate)
  ) {
    return Object.freeze({
      state: "RESOLVED_FROM_INTENT_CANDIDATE" as const,
      candidateCycleTypeId: candidate,
    });
  }
  return Object.freeze({
    state: "UNRESOLVED" as const,
    candidateCycleTypeId: null,
  });
}

export function doctrinePackagePinFromProjectContext(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin | null {
  const id = project.doctrineId?.trim();
  const version = project.doctrineVersion?.trim();
  const digest = project.doctrineDigest?.trim();
  if (!id || !version || !digest) return null;
  return Object.freeze({
    doctrinePackageId: id,
    version,
    digest: digest as DoctrinePackagePin["digest"],
  });
}

/**
 * Read-only composition for ordinary F1 advisory.
 * Does NOT call reasonWithResolvedCkcContext. Does NOT qualify or create cycles.
 */
export function composeAdvisoryMethodContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
}): AdvisoryMethodContext {
  const orientation = resolveMethodOrientation(input.analysis);
  const packagePin = doctrinePackagePinFromProjectContext(input.project);

  if (!packagePin) {
    return Object.freeze({
      orientation,
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: false,
      sourceLimit: "doctrine_unavailable" as const,
      trajectory: null,
    });
  }

  if (orientation.state !== "RESOLVED_FROM_INTENT_CANDIDATE") {
    return Object.freeze({
      orientation,
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    });
  }

  const cycleTypeId = orientation.candidateCycleTypeId!;
  const cycleDef = getCycleTypeById(cycleTypeId);
  const cycleLabel = cycleDef?.label ?? null;

  const ckcContent = loadProductCkcCognitiveContent({
    registryRoot: input.registryRoot,
    cycleTypeId,
    packagePin,
  });

  if (!ckcContent) {
    return Object.freeze({
      orientation,
      cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "ckc_unavailable" as const,
      trajectory: null,
    });
  }

  // Reuse existing read-only CKC prompt helper. Pilote-facing prose must not echo
  // digests / CKC IDs — enforced by F1 system-prompt identity & source rules.
  const ckcLensSection = [
    `Orientation méthodologique (hypothèse non durable) : cycle « ${cycleLabel ?? cycleTypeId} ».`,
    "Lentille cognitive CKC (lecture seule — pas de checklist, pas d'autorité) :",
    buildCkcCognitivePromptSection(ckcContent),
  ].join("\n");

  return Object.freeze({
    orientation,
    cycleLabel,
    ckcLensSection,
    ckcLoaded: true,
    doctrinePinPresent: true,
    sourceLimit: "none" as const,
    trajectory: null,
  });
}

```

### 14.b methodOrientation.test.ts
```typescript
/** @vitest-environment node */
/**
 * CORR-PROOF-03 E1 — pure methodOrientation unit proofs (I6 + orientation contract).
 * ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  composeAdvisoryMethodContext,
  resolveMethodOrientation,
} from "@/features/project-assistant/f2/methodOrientation";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";

function stubAnalysis(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
  };
}

function stubProject(
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId: "prj:test",
    name: "Suivi de contrat",
    shortReference: "SC",
    objective: "Suivre les contrats B2B",
    contextSummary: "MC Consulting IT",
    criticality: "STANDARD",
    constraints: [],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-06T00:00:00.000Z",
    doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    doctrineStatus: "product-studio-native",
    doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    runtimeMode: "test",
    persistence: "sqlite",
    readiness: "ready",
    ...overrides,
  };
}

describe("methodOrientation — pure orientation", () => {
  it("RESOLVED_FROM_INTENT_CANDIDATE when parseOk + known candidate", () => {
    const o = resolveMethodOrientation(
      stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
    );
    expect(o.state).toBe("RESOLVED_FROM_INTENT_CANDIDATE");
    expect(o.candidateCycleTypeId).toBe("cyc:framing");
  });

  it("UNRESOLVED when parseOk false", () => {
    const o = resolveMethodOrientation(
      stubAnalysis({
        intentClass: "informative",
        parseOk: false,
        candidateCycleTypeId: "cyc:framing",
      }),
    );
    expect(o.state).toBe("UNRESOLVED");
    expect(o.candidateCycleTypeId).toBeNull();
  });

  it("UNRESOLVED when candidate null", () => {
    expect(
      resolveMethodOrientation(
        stubAnalysis({ intentClass: "informative", parseOk: true }),
      ).state,
    ).toBe("UNRESOLVED");
  });

  it("UNRESOLVED when candidate unknown — does not invent", () => {
    const o = resolveMethodOrientation(
      stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:not-a-real-cycle",
      }),
    );
    expect(o.state).toBe("UNRESOLVED");
    expect(o.candidateCycleTypeId).toBeNull();
  });

  it("I6 — orientation is pure / non-mutating (frozen)", () => {
    const analysis = stubAnalysis({
      intentClass: "informative",
      parseOk: true,
      candidateCycleTypeId: "cyc:delivery",
    });
    const before = JSON.stringify(analysis);
    const o = resolveMethodOrientation(analysis);
    expect(Object.isFrozen(o)).toBe(true);
    expect(JSON.stringify(analysis)).toBe(before);
  });
});

describe("composeAdvisoryMethodContext — read-only CKC", () => {
  const registryRoot = resolveProductDoctrineRegistryRoot();

  it("loads read-only CKC lens for resolved framing orientation", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: stubProject(),
      registryRoot,
    });
    expect(ctx.orientation.state).toBe("RESOLVED_FROM_INTENT_CANDIDATE");
    expect(ctx.ckcLoaded).toBe(true);
    expect(ctx.ckcLensSection).toBeTruthy();
    expect(ctx.sourceLimit).toBe("none");
    expect(ctx.cycleLabel).toMatch(/Cadrage/i);
  });

  it("doctrine unavailable → sourceLimit without inventing CKC", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: stubProject({
        doctrineId: "",
        doctrineVersion: "",
        doctrineDigest: "",
      }),
      registryRoot,
    });
    expect(ctx.ckcLoaded).toBe(false);
    expect(ctx.sourceLimit).toBe("doctrine_unavailable");
    expect(ctx.ckcLensSection).toBeNull();
  });

  it("unresolved orientation does not invent CKC lens", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: null,
      }),
      project: stubProject(),
      registryRoot,
    });
    expect(ctx.orientation.state).toBe("UNRESOLVED");
    expect(ctx.ckcLoaded).toBe(false);
    expect(ctx.ckcLensSection).toBeNull();
  });

  it("unknown registry / bad pin → ckc_unavailable governed degradation", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: stubProject({
        doctrineId: "pkg:does-not-exist",
        doctrineVersion: "9.9.9",
        doctrineDigest: "sha256:deadbeef",
      }),
      registryRoot,
    });
    expect(ctx.ckcLoaded).toBe(false);
    expect(ctx.sourceLimit).toBe("ckc_unavailable");
  });
});

```

### 14.c corrProof03.e1.methodGroundedAdvisory.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * CORR-PROOF-03 E1 — Method-grounded single-run advisory (S1–S18 / I1–I10).
 * ZERO LIVE OpenAI. Injected ConversationProvider only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
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
  countCanonicalUserAssistantPairs,
  extractCanonicalTextFromItem,
  openCanonicalConversationSession,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import { resolveTransitionReadiness } from "@/features/project-assistant/f2/transitionReadiness";
import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import {
  composeAdvisoryMethodContext,
  resolveMethodOrientation,
} from "@/features/project-assistant/f2/methodOrientation";
import * as ckcCognitiveContext from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { MW5_CLARIFY_MARKER } from "@/lib/nora-cognitive-runtime";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";

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

function structuredJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

function baseSignals(overrides?: Partial<Record<string, boolean>>) {
  return {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
    ...overrides,
  };
}

type OrientationMode =
  | "framing"
  | "null"
  | "functional"
  | "actionable_delivery"
  | "execution_blocked";

class E1ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  n = 0;
  completeCalls = 0;
  structuredCalls = 0;
  roundCalls = 0;
  lastAnalysisBlob = "";
  lastSystemPrompt = "";
  lastRoundUser = "";
  orientationMode: OrientationMode = "framing";

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    this.structuredCalls += 1;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.n += 1;
    this.completeCalls += 1;
    const blob = lastUserContent(messages);
    this.lastAnalysisBlob = blob;
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `e1-resp-${this.n}`,
    };

    if (this.orientationMode === "actionable_delivery") {
      return {
        text: structuredJson({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: baseSignals({
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Qualifier un cycle Delivery",
          scope: "Bornée",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution"],
          risks: ["impact architecture"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition",
          criticalJustification: "Changement structurant",
          requestedOperation: "qualify delivery",
        }),
        usage,
      };
    }

    if (this.orientationMode === "execution_blocked") {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: null,
          signals: baseSignals({
            structuralChange: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    let candidate: string | null = null;
    if (this.orientationMode === "framing") candidate = "cyc:framing";
    if (this.orientationMode === "functional")
      candidate = "cyc:functional-design";
    if (this.orientationMode === "null") candidate = null;

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId: candidate,
        signals: null,
        cognitiveWorkload: null,
        objective: "Conseil produit / méthode",
        scope: null,
        rephrasedRequest: current.slice(0, 160),
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: null,
      }),
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    this.roundCalls += 1;
    const system = input.items.find(
      (i) => i.type === "message" && i.role === "system",
    );
    if (system && system.type === "message") {
      this.lastSystemPrompt = String(system.content);
    }
    const last = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      last && last.type === "message" ? String(last.content) : "";
    this.lastRoundUser = content;

    let text: string;
    if (/Skills Framework for the Information Age/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Le Skills Framework for the Information Age est un référentiel " +
        "public externe de compétences. Il est distinct de la méthodologie SFIA Studio applicable " +
        "à ce projet. Je peux en parler séparément si tu le souhaites.";
    } else if (/méthodologie SFIA|methodologie SFIA|piloter ce projet/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Dans SFIA Studio, « SFIA » désigne la méthodologie produit Studio " +
        "(doctrine projet), pas le Skills Framework public. Pour ce projet, une orientation Cadrage " +
        "oriente utilement le pilotage : clarifier intention, périmètre et contraintes avant formalisation. " +
        "Ce n'est pas une HumanDecision.";
    } else if (/recommande/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Recommandation : cadrer d'abord le MVP interne de suivi des contrats. " +
        "Ce n'est pas une HumanDecision.";
    } else if (/vague|idée|idée floue|pas sûr/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Première approche possible pour clarifier ton idée. " +
        "Une question ciblée seulement si elle change le périmètre.";
    } else {
      text =
        "[TEST/FAKE · NON LIVE] Voici une proposition utile pour préparer l'application de suivi " +
        "de contrat : objets métier, MVP, hypothèses explicites. Aucune formalisation durable.";
    }

    // Never echo raw CKC / F1 / MW5 mechanics in Pilote prose.
    expect(text).not.toMatch(/ckc:studio:|contentDigest|sha256:[a-f0-9]{16}/i);
    expect(text).not.toMatch(/\bF1\b|\bF2\b|\bMW5\b/);

    return {
      kind: "message",
      text,
      usage: {
        inputTokens: 8,
        outputTokens: 12,
        totalTokens: 20,
        model: "fake-test-model",
        providerResponseId: `e1-round-${this.roundCalls}`,
      },
    };
  }
}

async function readSessionPairs(
  projectId: string,
  sessionDbPath: string,
): Promise<{ users: number; assistants: number; texts: string[] }> {
  const session = openCanonicalConversationSession({
    projectId,
    sessionDbPath,
  });
  try {
    const items = await session.getItems();
    const pairs = countCanonicalUserAssistantPairs(items);
    const texts = items
      .map(extractCanonicalTextFromItem)
      .filter((t): t is NonNullable<typeof t> => t != null)
      .map((t) => t.content);
    return { ...pairs, texts };
  } finally {
    session.close();
  }
}

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
  };
}

describe("CORR-PROOF-03 E1 method-grounded advisory S1–S18", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: E1ConversationProvider;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let reasonSpy: any;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    reasonSpy = vi.spyOn(
      ckcCognitiveContext,
      "reasonWithResolvedCkcContext",
    );
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e1-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — contrats B2B",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "SC",
      idempotencyKey: `idem:e1-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("E1 setup failed");
    projectId = created.projectId;
    provider = new E1ConversationProvider();
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    reasonSpy.mockRestore();
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  async function send(content: string) {
    return orchestrateAssistantSend({
      projectId,
      content,
      sessionDbPath,
      provider,
    });
  }

  async function lpsVersion(): Promise<number> {
    const p = await getRuntimeApplicationService().getProject(projectId);
    expect(p.ok).toBe(true);
    if (!p.ok) throw new Error("project missing");
    return p.livingState.version;
  }

  it("S1 — initial project help: F1 + method grounding when candidate exists", async () => {
    provider.orientationMode = "framing";
    const pre = await lpsVersion();
    const r = await send(
      "peux-tu m'aider a préparer la création de mon application de suivi de contrat ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.mw5).toBeNull();
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(provider.lastSystemPrompt).toMatch(/IDENTITÉ SFIA STUDIO/i);
    expect(provider.lastSystemPrompt).toMatch(
      /RESOLVED_FROM_INTENT_CANDIDATE|Orientation méthodologique/i,
    );
    expect(provider.lastSystemPrompt).toMatch(/Cadrage|cyc:framing/i);
    expect(await lpsVersion()).toBe(pre);
    expect(reasonSpy).not.toHaveBeenCalled();
  });

  it("S2 — explicit Studio SFIA method → Studio identity, no public SF default", async () => {
    provider.orientationMode = "framing";
    const r = await send(
      "si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text.toLowerCase()).toMatch(/studio|méthodologie|methodologie|cadrage/);
    expect(r.text.toLowerCase()).not.toMatch(
      /principalement un référentiel de compétences/,
    );
    expect(provider.lastSystemPrompt).toMatch(
      /PAS le Skills Framework for the Information Age/i,
    );
    expect(r.f2?.qualification ?? null).toBeNull();
  });

  it("S3 — explicit public Skills Framework → distinguish from Studio", async () => {
    provider.orientationMode = "null";
    const r = await send(
      "Que dit le Skills Framework for the Information Age sur les compétences ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).toMatch(/Skills Framework for the Information Age/i);
    expect(r.text.toLowerCase()).toMatch(/distinct|studio/);
  });

  it("S4 — vague but intelligible → safe advisory, no forced cycle, no MW5", async () => {
    provider.orientationMode = "null";
    const r = await send("j'ai une idée vague pour un outil, pas sûr du périmètre");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(provider.lastSystemPrompt).toMatch(/UNRESOLVED/);
    expect(provider.lastSystemPrompt).not.toMatch(
      /Lentille cognitive CKC \(lecture seule/,
    );
  });

  it("S5 — Cadrage-style orientation → non-mutating lens, zero CycleInstance", async () => {
    provider.orientationMode = "framing";
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const r = await send(
      "aide-moi à cadrer l'intention, le périmètre et les contraintes de ce produit",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(provider.lastSystemPrompt).toMatch(/Cadrage|RESOLVED_FROM_INTENT/i);
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("S6 — multiple plausible / null orientation → no fabricated cycle", async () => {
    provider.orientationMode = "null";
    const r = await send(
      "on pourrait faire du cadrage ou de la delivery, je ne sais pas encore",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/UNRESOLVED/);
    expect(provider.lastSystemPrompt).not.toMatch(
      /RESOLVED_FROM_INTENT_CANDIDATE/,
    );
  });

  it("S7 — existing project state: no fabricated/restart cycle (trajectory DEFERRED)", async () => {
    provider.orientationMode = "framing";
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const r = await send("continue à m'aider sur ce projet existant");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    // Negative: E1 does not create a second/active cycle from advisory.
    expect(r.f2?.qualification ?? null).toBeNull();
    // Positive trajectory-aware tailoring NOT PROVEN / DEFERRED.
  });

  it("S8 — detailed CKC available → lens composed into F1 system context", async () => {
    provider.orientationMode = "framing";
    const r = await send("comment avancer méthodologiquement sur le cadrage ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/Lentille cognitive CKC|Guidance:/i);
    expect(r.text).not.toMatch(/ckc:studio:/i);
    expect(r.text).not.toMatch(/contentDigest/i);
  });

  it("S9 — CKC unavailable → governed degradation, no public SFIA fallback", async () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: {
        projectId: "prj:x",
        name: "X",
        shortReference: null,
        objective: "o",
        contextSummary: "c",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:x",
        lpsVersion: 1,
        lpsCreatedAt: "2026-09-06T00:00:00.000Z",
        doctrineId: "pkg:does-not-exist",
        doctrineVersion: "9.9.9",
        doctrineStatus: "product-studio-native",
        doctrineDigest: "sha256:deadbeef",
        runtimeMode: "test",
        persistence: "sqlite",
        readiness: "ready",
      },
      registryRoot: path.join(os.tmpdir(), "no-such-doctrine-registry"),
    });
    expect(ctx.sourceLimit).toBe("ckc_unavailable");
    const prompt = buildProjectSystemPrompt(
      {
        projectId: "prj:x",
        name: "X",
        shortReference: null,
        objective: "o",
        contextSummary: "c",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:x",
        lpsVersion: 1,
        lpsCreatedAt: "2026-09-06T00:00:00.000Z",
        doctrineId: "pkg:does-not-exist",
        doctrineVersion: "9.9.9",
        doctrineStatus: "product-studio-native",
        doctrineDigest: "sha256:deadbeef",
        runtimeMode: "test",
        persistence: "sqlite",
        readiness: "ready",
      },
      { methodContext: ctx },
    );
    expect(prompt).toMatch(/ckc_unavailable|Lentille CKC détaillée indisponible/i);
    expect(prompt).toMatch(/pas de bascule vers le Skills Framework public/i);
  });

  it("S10 — doctrine unavailable → no false source-backed Studio-method claim", async () => {
    const project: ProjectAssistantContextDto = {
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-06T00:00:00.000Z",
      doctrineId: "",
      doctrineVersion: "",
      doctrineStatus: "product-studio-native",
      doctrineDigest: "",
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    };
    const ctx = composeAdvisoryMethodContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project,
      registryRoot: path.join(os.tmpdir(), "empty"),
    });
    expect(ctx.sourceLimit).toBe("doctrine_unavailable");
    const prompt = buildProjectSystemPrompt(project, { methodContext: ctx });
    expect(prompt).toMatch(/DoctrinePackage produit non résolu/i);
  });

  it("S11 — Recommendation allowed, not HumanDecision", async () => {
    provider.orientationMode = "framing";
    const r = await send("que recommande-tu comme prochaine étape produit ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text.toLowerCase()).toMatch(/recommandation/);
    expect(r.text).toMatch(/pas une HumanDecision|HumanDecision/i);
    expect(r.f2?.decision ?? null).toBeNull();
  });

  it("S12 — advisory path never synthesizes HumanDecision", async () => {
    provider.orientationMode = "framing";
    const r = await send("décide pour moi le périmètre MVP");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.decision ?? null).toBeNull();
  });

  it("S13 — execution request keeps B1 blocked advisory; method never authorizes", async () => {
    provider.orientationMode = "execution_blocked";
    const pre = await lpsVersion();
    const r = await send("__B1_EXEC_MISSING_CYCLE__ exécute ce contrat Cursor");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.executionBlocked).toBe(true);
    expect(await lpsVersion()).toBe(pre);
    expect(reasonSpy).not.toHaveBeenCalled();
  });

  it("S14 — ProductSqliteSession remains sole conversational SoT", async () => {
    provider.orientationMode = "framing";
    await send("premier message de cadrage produit");
    await send("deuxième message de suivi");
    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(session.assistants);
    expect(session.users).toBe(2);
  });

  it("S15 — no magic wording required for method grounding", async () => {
    provider.orientationMode = "framing";
    const r = await send(
      "peux-tu m'aider a préparer la création de mon application de suivi de contrat ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/RESOLVED_FROM_INTENT_CANDIDATE/);
    expect(r.text).not.toMatch(/__E1_|__TEST__/);
  });

  it("S16 — no questionnaire regression; CKC lens internal", async () => {
    provider.orientationMode = "framing";
    const r = await send("aide-moi à avancer sur ce produit");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(provider.lastSystemPrompt).toMatch(/Pas d'intake séquentiel|intake séquentiel/i);
    expect(r.text).not.toMatch(/ckc:studio:|contentDigest/i);
  });

  it("S17 — no fixed waterfall / always Cycle 1 (trajectory DEFERRED)", async () => {
    const { resolveProductDoctrineRegistryRoot } = await import(
      "@/lib/vertical-slice-runtime/paths"
    );
    const project: ProjectAssistantContextDto = {
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-06T00:00:00.000Z",
      doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      doctrineStatus: "product-studio-native",
      doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    };
    const real = composeAdvisoryMethodContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:delivery",
      }),
      project,
      registryRoot: resolveProductDoctrineRegistryRoot(),
    });
    const p2 = buildProjectSystemPrompt(project, { methodContext: real });
    expect(p2).toMatch(/Ne force pas un waterfall|toujours commencer au Cycle 1/i);
    // Delivery orientation allowed without forcing Cycle 1.
    expect(real.orientation.candidateCycleTypeId).toBe("cyc:delivery");
  });

  it("S18 — Truth C non-promotion on ordinary advisory", async () => {
    provider.orientationMode = "framing";
    const pre = await lpsVersion();
    const r = await send("ancre-toi sur la méthodologie pour conseiller");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(await lpsVersion()).toBe(pre);
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.decision ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("I1–I4 — one Agent path, no reasonWithResolvedCkcContext, no third method call", async () => {
    provider.orientationMode = "framing";
    provider.structuredCalls = 0;
    provider.roundCalls = 0;
    provider.completeCalls = 0;
    const r = await send("aide méthodologique pour préparer mon application");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // analyzeIntent uses completeStructured; F1 uses completeRound (Agents adapter).
    // No additional method-reasoning provider call.
    expect(provider.structuredCalls).toBe(1);
    expect(provider.roundCalls).toBeGreaterThanOrEqual(1);
    expect(reasonSpy).not.toHaveBeenCalled();
  });

  it("I5 — transitionReadiness unchanged for informative + candidate", () => {
    const t = resolveTransitionReadiness({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
    });
    expect(t.formalizationReady).toBe(false);
    expect(t.reason).toBe("not_governed_intent");
  });

  it("I7 — keyword SFIA alone does not grant formalization", () => {
    const t = resolveTransitionReadiness({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
        rephrasedRequest: "méthodologie SFIA Cadrage",
      }),
    });
    expect(t.formalizationReady).toBe(false);
  });

  it("I8 — Studio identity + source hierarchy present in prompt", () => {
    const prompt = buildProjectSystemPrompt({
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-06T00:00:00.000Z",
      doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      doctrineStatus: "product-studio-native",
      doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    });
    expect(prompt).toMatch(/IDENTITÉ SFIA STUDIO/i);
    expect(prompt).toMatch(/DoctrinePackage \/ CKC produit résolu/i);
    expect(prompt).toMatch(/PAS le Skills Framework/i);
  });

  it("analyzeIntent instructions allow informative candidate orientation", () => {
    expect(ANALYSIS_SYSTEM).toMatch(/ORIENTATION MÉTHODE \(CORR-PROOF-03 E1/i);
    expect(ANALYSIS_SYSTEM).toMatch(/cyc:framing/);
    expect(ANALYSIS_SYSTEM).toMatch(/N'EST PAS une porte de formalisation/i);
  });

  it("I6 unit — resolveMethodOrientation pure", () => {
    const o = resolveMethodOrientation(
      analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
    );
    expect(o.state).toBe("RESOLVED_FROM_INTENT_CANDIDATE");
    expect(Object.isFrozen(o)).toBe(true);
  });
});

```

## 15. Complete useful diff — MODIFIED files
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index 23e8af21..de4a465c 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -1,9 +1,11 @@
 import type { ProjectAssistantContextDto } from "./types";
+import type { AdvisoryMethodContext } from "./f2/methodOrientation";

 /**
  * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
  * No F2 qualification, no Cursor, no write, no durable persistence claims.
  * CORR-PROOF-02 B1 — positive advisory initiative for ordinary incomplete requests.
+ * CORR-PROOF-03 E1 — Studio method identity + optional non-mutating method context.
  */
 export function buildProjectSystemPrompt(
   project: ProjectAssistantContextDto,
@@ -14,6 +16,11 @@ export function buildProjectSystemPrompt(
      * Does not mutate ProjectAssistantContextDto / client boundary.
      */
     truthCContext?: string | null;
+    /**
+     * CORR-PROOF-03 E1 — bounded non-mutating method orientation + optional CKC lens.
+     * Guidance only; never Truth C / HumanDecision / ExecutionContract.
+     */
+    methodContext?: AdvisoryMethodContext | null;
   },
 ): string {
   const constraints =
@@ -30,12 +37,27 @@ export function buildProjectSystemPrompt(
       ? options.truthCContext
       : project.contextSummary;

+  const methodSection = buildMethodGroundingSection(options?.methodContext ?? null);
+
   return [
     "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
     "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
     "Tu n'as aucune autorité de décision, d'exécution Cursor, d'écriture Git/GitHub, ni de qualification de cycle SFIA.",
     "Une intention utilisateur n'est jamais une autorisation d'exécution.",
     "",
+    "=== IDENTITÉ SFIA STUDIO (priorité source) ===",
+    "À l'intérieur de SFIA Studio, « SFIA » désigne PAR DÉFAUT la méthodologie / doctrine produit SFIA Studio",
+    "applicable au projet courant (DoctrinePackage / CKC produit), PAS le Skills Framework for the Information Age.",
+    "Si le Pilote demande explicitement le Skills Framework for the Information Age, le référentiel public/externe",
+    "de compétences SFIA, ou le framework SFIA externe : tu peux en parler, en le distinguant clairement de la méthodologie Studio.",
+    "Ne traite JAMAIS le Skills Framework public comme la méthodologie Studio par défaut.",
+    "Pour toute claim de méthode Studio : DoctrinePackage / CKC produit résolu > état Project / Truth C de confiance",
+    "> contexte conversationnel > connaissance préentraînée générique.",
+    "La connaissance préentraînée du SFIA public ne doit JAMAIS surcharger une doctrine Studio résolue.",
+    "Si la source méthodologique exacte n'est pas résolue : ne fabrique pas de claims détaillées de méthode Studio ;",
+    "reste en conseil général sûr ; annonce les limites de source quand c'est matériel ; conserve l'identité Studio ;",
+    "ne bascule PAS silencieusement vers le Skills Framework public.",
+    "",
     "=== CONTRAT ADVISORY (par défaut) ===",
     "Pour une demande intelligible même incomplète : avance utilement la pensée du Pilote.",
     "Restructure le besoin, propose un cadrage produit, un MVP / périmètre, des rôles et objets métier probables,",
@@ -48,6 +70,7 @@ export function buildProjectSystemPrompt(
     "la recommandation, la trajectoire, l'autorité, la preuve ou un effet gouverné.",
     "Pas de questionnaire générique. Pas d'intake séquentiel obligatoire.",
     "Langage métier pour le Pilote — ne pas exposer F1/F2/MW5/CKC, routage interne ou schémas structurés.",
+    "Ne pas exposer digests de package, IDs techniques CKC, ni mécanique interne dans la prose Pilote.",
     "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
     "",
     "=== LIMITES D'AUTORITÉ (strict) ===",
@@ -74,6 +97,7 @@ export function buildProjectSystemPrompt(
     "- Pour un identifiant technique inconnu du chemin : utilise git_local_search_content (pas seulement search_files).",
     "- Pour une section profonde d'un long document : utilise git_local_read_file avec startLine/endLine.",
     "",
+    ...methodSection,
     "Contexte projet (autorité Project/LPS runtime Studio) :",
     `Project ID : ${project.projectId}`,
     `Nom : ${project.name}`,
@@ -88,3 +112,57 @@ export function buildProjectSystemPrompt(
     `Runtime : ${project.runtimeMode} · persistence ${project.persistence} · readiness ${project.readiness}`,
   ].join("\n");
 }
+
+function buildMethodGroundingSection(
+  methodContext: AdvisoryMethodContext | null,
+): string[] {
+  const lines = [
+    "=== ANCRAGE MÉTHODOLOGIQUE (guidance seulement — non mutante) ===",
+    "Ce bloc oriente le conseil. Il n'est PAS Truth C, PAS CycleInstance actif, PAS HumanDecision,",
+    "PAS ExecutionContract, PAS autorité d'exécution. Orientation candidat = hypothèse / lentille.",
+    "Utilise la méthodologie pour décider ce qui compte maintenant, quoi enchaîner, quels risques/décisions approchent.",
+    "Ne force pas un waterfall fixe (« toujours commencer au Cycle 1 »). Ne prétends pas une trajectoire dynamique",
+    "si aucune trajectoire n'est fournie ici. Pas d'intake séquentiel obligatoire.",
+  ];
+
+  if (!methodContext) {
+    lines.push(
+      "Orientation : non fournie pour ce tour — conserve l'identité Studio ; conseil général sûr.",
+    );
+    lines.push("");
+    return lines;
+  }
+
+  if (methodContext.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
+    lines.push(
+      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
+        (methodContext.cycleLabel
+          ? ` · cycle candidat « ${methodContext.cycleLabel} »`
+          : "") +
+        " (hypothèse non durable).",
+    );
+  } else {
+    lines.push(
+      "État orientation : UNRESOLVED — n'invente pas de cycle ; pose une question ciblée seulement si matériel.",
+    );
+  }
+
+  if (methodContext.sourceLimit === "doctrine_unavailable") {
+    lines.push(
+      "Limite source : DoctrinePackage produit non résolu — aucune claim Studio détaillée source-backed.",
+    );
+  } else if (methodContext.sourceLimit === "ckc_unavailable") {
+    lines.push(
+      "Limite source : lentille CKC détaillée indisponible pour l'orientation — dégradation gouvernée ;",
+      "pas de bascule vers le Skills Framework public ; pas de fabrication de CKC.",
+    );
+  }
+
+  if (methodContext.ckcLensSection?.trim()) {
+    lines.push("Lentille CKC (interne) :");
+    lines.push(methodContext.ckcLensSection.trim());
+  }
+
+  lines.push("");
+  return lines;
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 3b596bfd..daaf87d3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -486,10 +486,27 @@ Classifie d'après l'effet réel demandé, pas le label donné par l'utilisateur
 Le seul mot « cosmétique » ou « wording » ne force aucun signal safe.
 Silence sur sécurité ou irréversibilité n'est PAS une preuve d'absence d'impact.

+=== ORIENTATION MÉTHODE (CORR-PROOF-03 E1 — cognitive only) ===
+Pour une demande informative de conseil / méthode projet, lorsque le type de travail courant est raisonnablement
+inférable depuis le Project + contexte conversationnel de confiance, candidateCycleTypeId DEVRAIT être peuplé
+avec le cycle catalogue connu applicable comme ORIENTATION COGNITIVE (hypothèse / lentille), sans formalisation.
+Exemples d'orientation (non exhaustifs, non séquentiels) :
+- façonnage / cadrage produit ou projet → cyc:framing (Cadrage) lorsque crédible ;
+- définition de comportements / règles / objets métier → cyc:functional-design lorsque crédible ;
+- travail de livraison / implémentation déjà engagé → cyc:delivery lorsque crédible.
+Règles dures :
+- si plusieurs cycles sont matériellement plausibles → candidateCycleTypeId = null ;
+- si preuve insuffisante → null ;
+- NE JAMAIS choisir un cycle parce qu'il est premier dans une séquence fixe ;
+- Project ≠ Cycle ; candidat ≠ cycle actif/durable ;
+- informative reste informative ; ne pas inventer de signals juste pour orienter ;
+- le seul mot « SFIA » ne force aucun cycle ; aucune phrase magique exacte ;
+- candidateCycleTypeId N'EST PAS une porte de formalisation et N'EST PAS un workflow planner.
+
 === AUTORITÉ ===
 - Ne décide jamais un GO Morris ; ne propose jamais d'exécution ; n'invente jamais un cycle (ex. delivery) par défaut.
 - actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
-- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
+- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null (orientation informative autorisée ci-dessus).
 === CONTINUITÉ CONVERSATIONNELLE (CORR-PROOF-01 D1) ===
 - Si un bloc « Contexte conversationnel canonique » est fourni, interpréter la demande courante comme continuation progressive (clarification, précision, pronom, acknowledgement) lorsque c'est plausible.
 - Ne pas reclasser en ambiguous uniquement parce que la phrase courante est incomplète si le contexte canonique la rend compréhensible.
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index b04e219d..0334ae61 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -64,6 +64,7 @@ import {
   buildCkcCognitivePromptSection,
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
+import { composeAdvisoryMethodContext } from "./methodOrientation";
 import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
 import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
 import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
@@ -756,11 +757,18 @@ export async function orchestrateAssistantSend(input: {
   });

   if (!transition.formalizationReady) {
+    // CORR-PROOF-03 E1 — pure orientation + read-only CKC lens; NO reasonWithResolvedCkcContext.
+    const methodContext = composeAdvisoryMethodContext({
+      analysis,
+      project,
+      registryRoot: resolveProductDoctrineRegistryRoot(),
+    });
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
       provider: effectiveProvider,
       semanticCognitiveWorkload: analysis.cognitiveWorkload,
       truthCContext: truthCContextForF1,
+      methodContext,
       contradictionAssessment,
       evalModelReasoningControl: input.evalModelReasoningControl,
       usdAccounting: input.usdAccounting,
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index c80cb6ca..8478f37b 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -26,6 +26,7 @@ import { collectToolTelemetry } from "./collectToolTelemetry";
 import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
 import { resolveAssistantMode } from "./resolveAssistantMode";
 import { resolveRememberedEvidence } from "./mw3AvailableEvidence";
+import type { AdvisoryMethodContext } from "./f2/methodOrientation";
 import type {
   AssistantHistoryMessage,
   Mw3CognitiveSurfaceDto,
@@ -164,6 +165,11 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
    */
   truthCContext?: string | null;
+  /**
+   * CORR-PROOF-03 E1 — INTERNAL non-mutating method orientation + optional CKC lens.
+   * Server-side only; never client-authoritative.
+   */
+  methodContext?: AdvisoryMethodContext | null;
   /**
    * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
    * Server-side; surfaces mw3 DTO without inventing Evidence.
@@ -232,6 +238,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       role: "system",
       content: buildProjectSystemPrompt(project, {
         truthCContext: input.truthCContext,
+        methodContext: input.methodContext ?? null,
       }),
     },
     ...history.map((m) => ({ role: m.role, content: m.content.trim() })),

```

## 16. methodOrientation contract
- `resolveMethodOrientation(analysis)`: PURE; states `RESOLVED_FROM_INTENT_CANDIDATE` | `UNRESOLVED`.
- Requires `parseOk === true` + known catalog `candidateCycleTypeId`; else UNRESOLVED (no invented cycle).
- `composeAdvisoryMethodContext`: read-only DoctrinePackage pin + optional `loadProductCkcCognitiveContent` + `buildCkcCognitivePromptSection`.
- No provider call, persistence, CycleInstance, LPS update, Proposal, HumanDecision, ExecutionContract, authority.
- Optional `trajectory?: null` reserved; not implemented.

## 17. analyzeIntent semantic delta
Added `=== ORIENTATION MÉTHODE (CORR-PROOF-03 E1 — cognitive only) ===` to `ANALYSIS_SYSTEM_BASE`:
- informative may populate `candidateCycleTypeId` as cognitive orientation when inferable;
- null if multiple plausible / insufficient evidence;
- never choose first-in-sequence; Project ≠ Cycle; not a formalization gate;
- no keyword/magic phrase authority.
Schema unchanged.

## 18. Studio SFIA identity contract
F1 prompt section `=== IDENTITÉ SFIA STUDIO (priorité source) ===`:
- default “SFIA” = Studio methodology / product doctrine for current project;
- public Skills Framework only when Pilote asks explicitly; must distinguish;
- source priority: resolved DoctrinePackage/CKC > Truth C > conversation > pretrained;
- pretrained public SFIA must not override resolved Studio doctrine;
- unresolved sources → safe general advisory; no silent public-SF fallback.

## 19. DoctrinePackage / CKC read-only composition
On `!formalizationReady` only:
1. `composeAdvisoryMethodContext` from analysis + project pin + `resolveProductDoctrineRegistryRoot()`
2. load CKC when orientation resolved
3. inject `methodContext` into `buildProjectSystemPrompt` via `orchestrateTurn`
Degradation: `doctrine_unavailable` | `ckc_unavailable` with explicit prompt limits.

## 20. Evidence — qualifyWithCkc NOT moved into F1
`orchestrateF2.ts`: `composeAdvisoryMethodContext` only inside `!transition.formalizationReady` branch (~L760).
`qualifyWithCkc` remains only on formalizationReady path (~L855).

## 21. Evidence — reasonWithResolvedCkcContext NOT called by F1
Import retained for F2 enrichment.
F1 branch comment + call: compose only.
`reasonWithResolvedCkcContext` still only after durable qualification (~L903).
Deterministic spy in corrProof03 tests: `expect(reasonSpy).not.toHaveBeenCalled()` on advisory turns.

## 22. One Agent proof
No new Agent construction for method grounding. F1 still `runNoraCognitiveTurn` / existing Nora path only. I1 covered by architecture + no new Agent factory in envelope.

## 23. One Runner proof
No second Runner. F1 uses existing Agents Runner path. I2.

## 24. ProductSqliteSession SoT proof
S14: two advisory turns → session pairs 2/2 via `openCanonicalConversationSession`. No second conversation store introduced. Method context is prompt-only.

## 25. No third method-model-call proof
I1–I4 test: ordinary E1 advisory → `structuredCalls === 1` (analyzeIntent) + `roundCalls >= 1` (F1 Agent) + `reasonWithResolvedCkcContext` never called.
No intermediate method-reasoning provider call.

## 26. transitionReadiness non-regression
`transitionReadiness.ts` NOT modified.
I5/I7 tests: informative + candidate → `formalizationReady=false`, reason `not_governed_intent`.
CORR-PROOF-02 B1 suite: 24/24 PASS.

## 27. No Cycle / LPS / HD / EC mutation
S1/S5/S7/S18: LPS version unchanged; qualification/proposal/decision null on ordinary advisory.
Method orientation path never calls createCycle / append LPS / recordDecision.

## 28. Source integrity behavior
S9/S10 + identity section: ckc/doctrine unavailable → governed degradation; no public SF fallback; no fabricated detailed CKC; fail-closed source integrity lines preserved from B1.

## 29. S1–S18 matrix
| ID | Result | Notes |
| --- | --- | --- |
| S1 | PASS | F1 + method grounding when framing candidate |
| S2 | PASS | Studio SFIA identity; no public-SF default |
| S3 | PASS | Explicit Skills Framework distinguished |
| S4 | PASS | UNRESOLVED; no forced cycle; no MW5 |
| S5 | PASS | Cadrage orientation; zero CycleInstance |
| S6 | PASS | null orientation; no fabricated cycle |
| S7 | DEFERRED-at-adopted-boundary (negative PASS) | No fabricate/restart cycle; positive trajectory NOT PROVEN |
| S8 | PASS | CKC lens in system context; no raw mechanics in prose |
| S9 | PASS | ckc_unavailable degradation |
| S10 | PASS | doctrine_unavailable; no false source-backed claim |
| S11 | PASS | Recommendation ≠ HumanDecision |
| S12 | PASS | No synthesized HD on advisory |
| S13 | PASS | executionBlocked preserved; method never authorizes |
| S14 | PASS | ProductSqliteSession sole SoT |
| S15 | PASS | No magic wording dependency |
| S16 | PASS | No questionnaire / raw CKC surface |
| S17 | DEFERRED-at-adopted-boundary (negative PASS) | No waterfall / always Cycle 1; trajectory-aware NOT PROVEN |
| S18 | PASS | Truth C non-promotion |

## 30. Explicit S7 / S17 ProjectTrajectory boundary
ProjectTrajectory-on-F1 NOT IMPLEMENTED (Morris deferred).
Negative safety proven only. Positive trajectory-aware tailoring explicitly NOT PROVEN / DEFERRED.

## 31. I1–I10 results
| ID | Result |
| --- | --- |
| I1 One Agent | PASS |
| I2 One Runner | PASS |
| I3 One ProductSqliteSession | PASS |
| I4 No third method model call | PASS (structured=1; reasonWithResolvedCkcContext=0 on F1) |
| I5 transitionReadiness unchanged | PASS |
| I6 method orientation non-mutating | PASS (unit frozen) |
| I7 no keyword authority | PASS |
| I8 source hierarchy | PASS |
| I9 no raw CKC surface | PASS (fake Pilote prose assertions) |
| I10 B1 non-regression | PASS (24/24) |

## 32. Exact test commands
```bash
cd projects/sfia-studio/app
npm test -- __tests__/project-assistant/methodOrientation.test.ts \
  __tests__/project-assistant/corrProof03.e1.methodGroundedAdvisory.d0.test.ts
npm test -- __tests__/project-assistant/corrProof02.b1.advisory.d0.test.ts \
  __tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts \
  __tests__/project-assistant/f2.orchestrate.test.ts \
  __tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts \
  __tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts \
  __tests__/project-assistant/w1CkcSemanticSeam.test.ts
npm test -- __tests__/project-assistant/
npm run typecheck
npm run lint
```

## 33. Exact test counts / results
- E1 + methodOrientation: **33/33 PASS** (24 + 9)
- Targeted regressions (8 files incl. E1): **125/125 PASS**
- Full `__tests__/project-assistant/`: **488/488 PASS** (42 files)
- MW2 Truth C intent stability: **12/12 PASS**
- W1 CKC semantic seam: included in project-assistant suite PASS

## 34. Typecheck
PASS — `npm run typecheck` (`tsc --noEmit`)

## 35. Lint
PASS — `npm run lint` (`next lint`) — No ESLint warnings or errors

## 36. Broader suite
`npm test -- __tests__/project-assistant/` → **488 passed / 42 files** PASS

## 37. git diff --check
PASS (no whitespace errors)

## 38. File SHA-256 list
```
1e1582c67609664d5b5edc1ce2414660efa55a2759e02db509d528e5b6e59137  projects/sfia-studio/app/__tests__/project-assistant/corrProof03.e1.methodGroundedAdvisory.d0.test.ts
6b1380b7faf02433a4e0764840d0957c7d2951c0c7b5cf08fa188bd554cc8825  projects/sfia-studio/app/__tests__/project-assistant/methodOrientation.test.ts
873a57eb5305bcdeb883b8d6f84e4ba51d1735472f594165b4e735f87f0ac518  projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
1513de46775eacd3dccb5d6b95d1cc1bc986e0396b4bbf8b6f7f4b239d5b4318  projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
f6a81d3c7418721f7b247ccfc05651cbf7b4b33966013ec5baca30e2a3fdad25  projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
0a4250a696a9e90c12b68d4b49df6bb7bd0e4a4f2184d5a314be2d6a0c9219a8  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
00eba24bfc8133217aa622c21f3c7db0936b7998ee90e5460254e42897e31673  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
```

## 39. Candidate manifest content
```
1e1582c67609664d5b5edc1ce2414660efa55a2759e02db509d528e5b6e59137  projects/sfia-studio/app/__tests__/project-assistant/corrProof03.e1.methodGroundedAdvisory.d0.test.ts
6b1380b7faf02433a4e0764840d0957c7d2951c0c7b5cf08fa188bd554cc8825  projects/sfia-studio/app/__tests__/project-assistant/methodOrientation.test.ts
873a57eb5305bcdeb883b8d6f84e4ba51d1735472f594165b4e735f87f0ac518  projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
1513de46775eacd3dccb5d6b95d1cc1bc986e0396b4bbf8b6f7f4b239d5b4318  projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
f6a81d3c7418721f7b247ccfc05651cbf7b4b33966013ec5baca30e2a3fdad25  projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
0a4250a696a9e90c12b68d4b49df6bb7bd0e4a4f2184d5a314be2d6a0c9219a8  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
00eba24bfc8133217aa622c21f3c7db0936b7998ee90e5460254e42897e31673  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
```

## 40. Candidate manifest SHA-256
CORR_PROOF_03_E1_CANDIDATE_MANIFEST_SHA256 = `7e638b08f81bad0686e88ab61263fa96c101a90a6a389f0ff066a4efc5e8d357`

## 41. Staged EMPTY proof
`git diff --cached --name-status` → EMPTY throughout delivery.
No `git add` of product files.

## 42. No commit
NONE for CORR-PROOF-03 product delivery.

## 43. No product push
NONE.

## 44. No PR
NONE.

## 45. ZERO REAL
No Studio LIVE dogfood; no OpenAI LIVE; Fake/test infrastructure only.

## 46. ZERO hosted web_search
NONE.

## 47. Stage B
NOT AUTHORIZED.

## 48. Production routing
NOT SELECTED.

## 49. runtime v3
NON ADOPTED.

## 50. Product Proof
OPEN / BLOCKED pending Critical Delivery Review acceptance, separate Morris Product Git decision, and separate REAL revalidation.

## 51. Reserves
- R-CP03-SESSION-COUNT-01 (session counter semantics / continuity accounting reserve)
- S7/S17 positive ProjectTrajectory-on-F1 DEFERRED
- MW0 S03 (prior reserve)
- /synthese onboarding (prior)
- Session append hardening (prior)
- R-GMR-AGGREGATE-COUNTER-SEMANTICS-01 (prior)
- Worktree accidental corr-01 checkout briefly observed and restored (process note; no product loss)

## 52. Next Morris gate
ChatGPT CORR-PROOF-03 E1 Critical Delivery Review.
If accepted: Morris may separately authorize Product Git.
NO PRODUCT GIT · NO REAL · NO STAGE B from this cycle.

## 53. Review Handoff publication proof
- HANDOFF_PARENT: `308293a42f87592bcb2e4e013499a61993f6f4fa`
- PUBLISHED_CONTENT_COMMIT: `a4b45efb453e972efe64fe917b785a3a3c7fd800`
- ACTUAL_REMOTE_HANDOFF_TIP: `a4b45efb453e972efe64fe917b785a3a3c7fd800`
- CANONICAL_HANDOFF_BLOB: `025abdbea1d01cb8539de754a611e4d63bd1685c`
- Content body first landed at: `f56450679e985b95c3c39001352b6399c4e3fafd` (blob `ee0cc0be2f4da9ee59755db62754b6ab289e112d`)
- PUBLISHER_VERDICT: HANDOFF UPDATED — REMOTE VERIFIED
- Primary message: docs(review-handoff): review CORR-PROOF-03 E1 delivery
- Canonical path: sfia-review-handoff/latest-chatgpt-review.md
- Re-verified: candidate manifest SHA 7e638b08f81bad0686e88ab61263fa96c101a90a6a389f0ff066a4efc5e8d357 present in remote canonical content.


---

## Final Cursor verdict
**PASS WITH RESERVES** — DETERMINISTIC PROVEN CANDIDATE
READY FOR CHATGPT CORR-PROOF-03 E1 CRITICAL DELIVERY REVIEW
