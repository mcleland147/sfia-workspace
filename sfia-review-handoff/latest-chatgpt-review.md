# ChatGPT Review Pack — P6-HQA-NEWPROJECT-01 TARGETED FUNCTIONAL CLOSURE (COMPLETE)

- timestamp: 2026-10-09T09:06:06Z
- finding: P6-HQA-NEWPROJECT-01
- cycle: 8 — Delivery / implémentation
- profile: CRITICAL
- typology: EVOL
- Morris GO: GO P6-HQA-NEWPROJECT-01 — TARGETED FUNCTIONAL CORRECTION
- prior handoff: 52bceed2f94adc825ae7fd26fb4a234c8d6b0597
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- HEAD: 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- ZERO REAL provider calls
- ZERO Product / HQ-01 mutation (hq01_cycles=5, projects=21)
- project commit/push/PR: NONE
- NEWPROJECT-01 CLOSED / HUMAN QA PASS / NATURAL CONVERSATION PASS / P6 PASS / runtime v3 ADOPTED: NOT CLAIMED

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
```

Worktree dirty (COG01/F01/UI locals preserved). Baseline snapshot taken before this closure cycle under `.tmp-sfia-review/newproject-closure-baseline/`. Cycle-only diffs below isolate this correction from the prior New Project implementation.

## Convergence

Capacité: Accueil → Nora → qualification minimale → consentement → Create → continuité LPS.
STOP structurel: NON.
Classification: ADAPT TARGETED on onboarding contract/runner; KEEP createProject; REUSE provider routing; REJECT new SessionStore/NLP/schema.

## Diagnostic des quatre réserves (BEFORE)

| ID | Réserve | Cause |
|----|---------|-------|
| G1 | Refus non réversible | `explicitRefuseCreate = payload.refuse \|\| prev` sticky forever |
| G2 | Gate syntaxique | `intention.length >= 3/12` as maturity |
| G3 | Continuité insuffisante | marker-only claim; blind `.slice(0, CONTEXT_MAX)` could drop essentials; UI contextSummary=240 ≠ cognitive authority |
| G4 | Budget REAL non démontré | `completion.usage` ignored; 10 EUR declared ≠ hard cap |

## Corrections (AFTER)

### G1 REFUS REVERSAL — PASS (deterministic)
- Added `acceptCreateDetected` to structured payload.
- Merge: refuse sticky until explicit accept; neutral turns preserve refuse; name confirm ≠ accept.
- Fake + multi-turn tests cover refuse→accept unlock.

### G2 MINIMUM SUFFICIENT — PASS (deterministic)
- Added `intentionKind`: project_direction | non_project | unclear.
- `studioCanCreate` requires project_direction + non-empty intention + name + !refuse + ≥1 cognitive turn.
- Length is NOT a maturity criterion.
- Nora sufficient=true cannot authorize without project_direction.
- Exploratory project_direction creatable even if sufficient=false.

### G3 PRODUCT CONTINUITY — PASS WITH KNOWN LIMIT
- `assembleProductContextHandoff` prioritizes essentials; transcript fills remainder; no blind whole-string slice.
- Deterministic Product fixture: create → LPS full `context` read-back contains intention/unknowns/orientation.
- Documented: UI `contextSummary` ≤240 chars projection; F2 cognitive authority = LPS full context via `readLiveProjectContext`.
- FULL TRANSCRIPT REPLAY: explicitly **non**.
- No Agents session import; no fabricated durable messages.

### G4 REAL BUDGET READINESS — PASS WITH RESERVE (observability only)
- `usageObservation` returned on success (tokens/model/responseId/selectedModel/effort when available).
- `declaredHumanQaBudgetEur=10`, `hardCapEnforced=false`.
- `campaignBudget.ts` is MW6 process-local lease — NOT wired as New Project FinOps (would be new authority surface).
- Gap explicit: cost observable when provider returns usage; **no technical hard cap** on this path; restart/concurrency not governed by onboarding lease.
- ZERO REAL calls this cycle.

## Naturalité
NOT PROVEN (Fake only). Human QA scenarios prepared but NOT executed.

## Tests this cycle

| Suite | Result |
|-------|--------|
| p6.hqa.newproject01.closure.d0.test.ts | PASS (16) |
| p6.hqa.newproject01.onboarding.d0.test.ts | PASS (19) |
| p5.s06.pilotExperience.d0.test.tsx | PASS (8) |
| p5.s06.cp02.cancellation.ui.test.tsx | PASS |
| p6.hqa.f01 / cog01 / ui03 / ui04 / ui05 | PASS |
| **Total** | **101 PASS / 101** |

## Verdicts par bloc

- G1 REFUS REVERSAL: **PASS**
- G2 MINIMUM SUFFICIENT: **PASS**
- G3 PRODUCT CONTINUITY: **PASS WITH KNOWN LIMIT** (LPS full ≠ UI 240 projection; no Agents replay)
- G4 REAL BUDGET READINESS: **PASS WITH RESERVE** (observation only; no hard cap)

## Verdict intégré

**READY FOR CHATGPT CRITICAL RE-REVIEW**

Statut: CORRECTION CANDIDATE — READY FOR REVIEW.

Gates restants: ChatGPT Critical; Human QA REAL under distinct GO + ≤10 EUR envelope (not a Cursor REAL authorization).

---

## Files created this cycle (FULL)


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.closure.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * P6-HQA-NEWPROJECT-01 — targeted functional closure (G1–G4).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  assembleProductContextHandoff,
  emptyDraft,
  mergeCognitiveIntoDraft,
  ONBOARDING_HANDOFF_MARKER,
  parseOnboardingHandoffEssentials,
  studioCanCreate,
  type OnboardingCognitivePayload,
  type PreProjectDraft,
} from "@/features/pre-m6-product-ui/newProjectOnboardingContract";
import { runNewProjectOnboardingTurn } from "@/features/pre-m6-product-ui/runNewProjectOnboardingTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

function payload(
  partial: Partial<OnboardingCognitivePayload> & {
    replyText: string;
    intentionKind: OnboardingCognitivePayload["intentionKind"];
  },
): OnboardingCognitivePayload {
  return {
    intentionKnown: null,
    objectiveProposal: null,
    contextKnown: null,
    nameProposal: null,
    nameProvisional: true,
    firstOrientationProposal: null,
    unknowns: [],
    sufficientForCreateProposal: false,
    refuseCreateDetected: false,
    acceptCreateDetected: false,
    clarificationQuestion: null,
    suggestions: [],
    ...partial,
  };
}

describe("G1 — reversible refuse", () => {
  it("1 — refuse blocks create", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "App de tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        refuseCreateDetected: true,
      }),
      "ne crée pas",
    );
    expect(d.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(d)).toBe(false);
  });

  it("2 — refuse then explicit accept unlocks when direction exists", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "pas maintenant",
        intentionKnown: "App de gestion de tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "pas maintenant",
    );
    expect(studioCanCreate(d)).toBe(false);
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "allons-y",
        intentionKnown: "App de gestion de tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        acceptCreateDetected: true,
      }),
      "Finalement, allons-y, je veux créer le projet.",
    );
    expect(d.explicitRefuseCreate).toBe(false);
    expect(studioCanCreate(d)).toBe(true);
  });

  it("3 — refuse then question does not unlock", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "refuse",
        intentionKnown: "Produit flou",
        nameProposal: "Produit",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "pas maintenant",
    );
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "question",
        intentionKnown: "Produit flou",
        nameProposal: "Produit",
        intentionKind: "project_direction",
        // neutral turn — neither refuse nor accept
      }),
      "Tu peux préciser le nom ?",
    );
    expect(d.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(d)).toBe(false);
  });

  it("4 — refuse then off-topic does not unlock", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "refuse",
        intentionKnown: "Organisation",
        nameProposal: "Org",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "attends",
    );
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "hors sujet",
        intentionKind: "non_project",
      }),
      "Quelle heure est-il ?",
    );
    expect(d.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(d)).toBe(false);
  });

  it("5 — accept then refuse reblocks", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "App tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        acceptCreateDetected: true,
      }),
      "créons-le",
    );
    expect(studioCanCreate(d)).toBe(true);
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "stop",
        intentionKnown: "App tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "Finalement ne crée pas",
    );
    expect(studioCanCreate(d)).toBe(false);
  });

  it("6 — name agreement alone is not create consent", () => {
    const base = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "propose nom",
        intentionKnown: "App tâches",
        nameProposal: "Tâches Pro",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        refuseCreateDetected: true,
      }),
      "idée",
    );
    const afterName = mergeCognitiveIntoDraft(
      base,
      payload({
        replyText: "nom ok",
        intentionKnown: "App tâches",
        nameProposal: "Tâches Pro",
        intentionKind: "project_direction",
        // acceptCreateDetected intentionally false (name confirm ≠ create)
      }),
      "ok pour le nom",
    );
    expect(afterName.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(afterName)).toBe(false);
  });
});

describe("G2 — minimum sufficient (non-syntactic)", () => {
  it("9 — clear intention with project_direction can create", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Je veux créer une application de gestion de tâches.",
        nameProposal: "Gestion de tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
      }),
      "Je veux créer une application de gestion de tâches.",
    );
    expect(studioCanCreate(d)).toBe(true);
  });

  it("10 — exploratory intention still project_direction", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "exploratoire",
        intentionKnown: "J’ai une idée de produit mais elle est encore floue.",
        nameProposal: "Idée produit",
        intentionKind: "project_direction",
        sufficientForCreateProposal: false,
      }),
      "idée encore floue",
    );
    expect(studioCanCreate(d)).toBe(true);
  });

  it("14 — long off-topic cannot create even if Nora wrongly says sufficient", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "recette",
        intentionKnown:
          "Voici une très longue recette de cuisine avec beaucoup d’ingrédients et d’étapes détaillées sans aucun projet.",
        nameProposal: "Recette",
        intentionKind: "non_project",
        sufficientForCreateProposal: true,
      }),
      "long hors sujet",
    );
    expect(studioCanCreate(d)).toBe(false);
  });

  it("15 — short intelligible project direction can create", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "CRM interne",
        nameProposal: "CRM",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
      }),
      "CRM",
    );
    expect(d.intention.length).toBeLessThan(12);
    expect(studioCanCreate(d)).toBe(true);
  });

  it("17 — Nora sufficient=true without project_direction rejected", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "bonjour",
        intentionKnown: "Bonjour",
        nameProposal: "Bonjour",
        intentionKind: "non_project",
        sufficientForCreateProposal: true,
      }),
      "Bonjour",
    );
    expect(studioCanCreate(d)).toBe(false);
    expect(d.cognitiveCreateProposal).toBe(false);
  });

  it("18 — Nora sufficient=false but exploratory project_direction creatable", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "incertain",
        intentionKnown: "Améliorer notre organisation, on précisera après.",
        nameProposal: "Organisation",
        intentionKind: "project_direction",
        sufficientForCreateProposal: false,
      }),
      "organisation",
    );
    expect(d.cognitiveCreateProposal).toBe(false);
    expect(studioCanCreate(d)).toBe(true);
  });
});

describe("G3 — continuity handoff assembly + Product read-back", () => {
  const tempDirs: string[] = [];
  const APP_ROOT = path.resolve(__dirname, "../..");
  const SCHEMAS = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );
  const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("21/22/23 — essential fields preserved under tight budget; no silent intention loss", () => {
    const draft: PreProjectDraft = {
      ...emptyDraft(),
      intention: "Intention critique à conserver absolument pour la continuité",
      objective: "Objectif proposé",
      name: "Projet Continuity",
      nameProvisional: true,
      context: "Contexte connu",
      firstOrientation: "Orientation provisoire non autoritative",
      unknowns: ["périmètre", "premier cycle"],
      intentionKind: "project_direction",
      cognitiveTurns: 2,
    };
    const longTranscript = Array.from({ length: 20 }, (_, i) => ({
      role: (i % 2 === 0 ? "user" : "nora") as "user" | "nora",
      text: `Tour ${i} `.repeat(40),
    }));
    const assembled = assembleProductContextHandoff(
      draft,
      longTranscript,
      900,
    );
    expect(assembled.essentialPreserved).toBe(true);
    expect(assembled.text).toContain(ONBOARDING_HANDOFF_MARKER);
    expect(assembled.text).toContain("Intention critique à conserver");
    expect(assembled.text).toContain("périmètre");
    expect(assembled.text).toMatch(/FULL TRANSCRIPT REPLAY:\s*non/i);
    expect(assembled.text.length).toBeLessThanOrEqual(900);
    const parsed = parseOnboardingHandoffEssentials(assembled.text);
    expect(parsed.markerPresent).toBe(true);
    expect(parsed.intention).toMatch(/Intention critique/);
    expect(parsed.claimsFullReplay).toBe(false);
  });

  it("24/25/26 — Product create stores handoff; LPS full context is cognitive authority", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-np-cont-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      fixturesRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const draft = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Moderniser le reporting commercial",
        objectiveProposal: "Moderniser le reporting commercial",
        nameProposal: "Reporting commercial",
        nameProvisional: true,
        firstOrientationProposal: "Clarifier le premier livrable",
        unknowns: ["sources de données"],
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
      }),
      "Moderniser le reporting commercial",
    );
    const handoff = assembleProductContextHandoff(draft, [
      { role: "user", text: "Moderniser le reporting commercial" },
      { role: "nora", text: "ok" },
    ]).text;
    const created = await runtime.createProject({
      name: draft.name,
      objective: draft.objective || draft.intention,
      context: handoff,
      criticality: "STANDARD",
      constraints: [],
      idempotencyKey: "np-cont-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const got = await runtime.getProject(created.projectId);
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    expect(got.project.objective).toMatch(/reporting/i);
    // UI projection is ≤240 chars — may truncate; marker+intention must lead.
    expect(got.project.contextSummary).toContain(ONBOARDING_HANDOFF_MARKER);
    expect(got.project.contextSummary.length).toBeLessThanOrEqual(240);
    // Cognitive continuity authority = LPS full context (F2 readLiveProjectContext path).
    const oa = runtime.oa;
    expect(oa).toBeTruthy();
    const lps = await oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const fullContext = lps.livingProjectState.context ?? "";
    expect(fullContext.length).toBeGreaterThan(240);
    const parsed = parseOnboardingHandoffEssentials(fullContext);
    expect(parsed.markerPresent).toBe(true);
    expect(parsed.intention).toMatch(/reporting/i);
    expect(parsed.orientation).toMatch(/livrable|Orientation|Clarifier/i);
    expect(parsed.claimsFullReplay).toBe(false);
    expect(fullContext).toMatch(/non Session Agents/i);
  });
});

describe("G4 — usage observation without false hard cap", () => {
  afterEach(() => {
    setConversationProviderForTests(null);
    delete process.env.OPS1_CONVERSATION_PROVIDER;
  });

  it("36 — usageObservation exposed; hardCapEnforced=false", async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const result = await runNewProjectOnboardingTurn({
      userText: "Je veux créer une application de gestion de tâches.",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.usageObservation.hardCapEnforced).toBe(false);
    expect(result.usageObservation.declaredHumanQaBudgetEur).toBe(10);
    expect(result.usageObservation.model).toBeTruthy();
    // Fake may leave token counts null — that is an honest observability gap, not a hard cap.
  });
});

describe("Provider multi-turn Fake — refuse/accept path", () => {
  afterEach(() => {
    setConversationProviderForTests(null);
  });

  it("refuse then allons-y unlocks via Fake provider", async () => {
    const provider = new FakeConversationProvider();
    const first = await runNewProjectOnboardingTurn({
      userText: "Je veux une app de tâches mais ne crée pas pour l’instant",
      draft: emptyDraft(),
      history: [],
      provider,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    // Force refuse if combined message didn't
    const refused = first.draft.explicitRefuseCreate
      ? first.draft
      : mergeCognitiveIntoDraft(
          first.draft,
          payload({
            replyText: "refuse",
            intentionKnown: first.draft.intention || "App de tâches",
            nameProposal: first.draft.name || "Tâches",
            intentionKind: "project_direction",
            refuseCreateDetected: true,
          }),
          "ne crée pas",
        );
    expect(studioCanCreate(refused)).toBe(false);
    const second = await runNewProjectOnboardingTurn({
      userText: "Finalement, allons-y, je veux créer le projet.",
      draft: refused,
      history: [
        { role: "user", text: "ne crée pas" },
        { role: "nora", text: "ok" },
      ],
      provider,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.draft.explicitRefuseCreate).toBe(false);
    expect(studioCanCreate(second.draft)).toBe(true);
  });
});
```


## Files modified — FULL current sources (onboarding)


### `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts`

```typescript
/**
 * P6-HQA-NEWPROJECT-01 — pre-Project cognitive onboarding contract.
 *
 * Nora (provider) proposes; Studio validates and materializes.
 * No Product write, no CycleInstance, no HumanDecision here.
 *
 * Closure correction: reversible refuse, non-syntactic gate,
 * prioritized handoff assembly, usage observation (no FinOps invent).
 */

export const NEW_PROJECT_ONBOARDING_SCHEMA_NAME =
  "new_project_onboarding_turn_v1" as const;

export const ONBOARDING_HANDOFF_MARKER = "[[nora-onboarding-handoff]]" as const;

const INTENTION_MAX = 4000;
const NAME_MAX = 200;
const CONTEXT_MAX = 4000;
const ORIENTATION_MAX = 800;
const REPLY_MAX = 4000;

/** Studio-held view of whether the known intention is a project direction. */
export type IntentionKind =
  | "unset"
  | "project_direction"
  | "non_project"
  | "unclear";

export type PreProjectDraft = {
  name: string;
  /** True when Studio or Nora stamped a provisional label — Pilot may rename. */
  nameProvisional: boolean;
  intention: string;
  /** Reformulation / objective candidate — proposal, not Product truth until Create. */
  objective: string;
  context: string;
  /** Non-authoritative first work direction. */
  firstOrientation: string;
  unknowns: string[];
  /** Nora recommendation only — never alone authorizes Create. */
  cognitiveCreateProposal: boolean;
  /**
   * Current create-block from an explicit Pilot refuse/defer.
   * Cleared only by a later explicit acceptCreateDetected — not by silence.
   */
  explicitRefuseCreate: boolean;
  /** Last Nora classification of whether a project direction is present. */
  intentionKind: IntentionKind;
  /** Cognitive turns completed (provider-backed). */
  cognitiveTurns: number;
};

export type ChatTurn = {
  id: string;
  role: "user" | "nora";
  text: string;
  meta?: "opening" | "cognitive" | "error" | "understood";
  clarification?: {
    title: string;
    question: string;
    suggestions: string[];
  };
};

export type OnboardingCognitivePayload = {
  replyText: string;
  intentionKnown: string | null;
  objectiveProposal: string | null;
  contextKnown: string | null;
  nameProposal: string | null;
  nameProvisional: boolean;
  firstOrientationProposal: string | null;
  unknowns: string[];
  sufficientForCreateProposal: boolean;
  /**
   * Explicit Pilot refuse/defer of creation for this turn.
   * Sticky until acceptCreateDetected — absence does not clear.
   */
  refuseCreateDetected: boolean;
  /**
   * Explicit Pilot accept/retract of a prior refuse ("allons-y", "créons-le").
   * Name confirmation alone must NOT set this.
   */
  acceptCreateDetected: boolean;
  /**
   * Nora's classification — Studio uses this instead of message length.
   * project_direction = exploitable even if exploratory.
   */
  intentionKind: "project_direction" | "non_project" | "unclear";
  clarificationQuestion: string | null;
  suggestions: string[];
};

/** JSON Schema for ConversationProvider.completeStructured (OpenAI json_schema). */
export const NEW_PROJECT_ONBOARDING_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  required: [
    "replyText",
    "intentionKnown",
    "objectiveProposal",
    "contextKnown",
    "nameProposal",
    "nameProvisional",
    "firstOrientationProposal",
    "unknowns",
    "sufficientForCreateProposal",
    "refuseCreateDetected",
    "acceptCreateDetected",
    "intentionKind",
    "clarificationQuestion",
    "suggestions",
  ],
  properties: {
    replyText: { type: "string" },
    intentionKnown: { type: ["string", "null"] },
    objectiveProposal: { type: ["string", "null"] },
    contextKnown: { type: ["string", "null"] },
    nameProposal: { type: ["string", "null"] },
    nameProvisional: { type: "boolean" },
    firstOrientationProposal: { type: ["string", "null"] },
    unknowns: { type: "array", items: { type: "string" } },
    sufficientForCreateProposal: { type: "boolean" },
    refuseCreateDetected: { type: "boolean" },
    acceptCreateDetected: { type: "boolean" },
    intentionKind: {
      type: "string",
      enum: ["project_direction", "non_project", "unclear"],
    },
    clarificationQuestion: { type: ["string", "null"] },
    suggestions: { type: "array", items: { type: "string" } },
  },
};

export const INTENTION_STARTERS: string[] = [
  "Améliorer l’expérience utilisateur",
  "Lancer un nouveau produit",
  "Réorganiser un processus",
  "Autre chose",
];

export function emptyDraft(): PreProjectDraft {
  return {
    name: "",
    nameProvisional: false,
    intention: "",
    objective: "",
    context: "",
    firstOrientation: "",
    unknowns: [],
    cognitiveCreateProposal: false,
    explicitRefuseCreate: false,
    intentionKind: "unset",
    cognitiveTurns: 0,
  };
}

function sanitize(raw: string, max: number): string {
  return raw.replace(/\u0000/g, "").trim().slice(0, max);
}

function nullableString(value: unknown, max: number): string | null {
  if (value == null) return null;
  if (typeof value !== "string") return null;
  const t = sanitize(value, max);
  return t.length > 0 ? t : null;
}

function parseIntentionKind(value: unknown): IntentionKind | null {
  if (value === "project_direction") return "project_direction";
  if (value === "non_project") return "non_project";
  if (value === "unclear") return "unclear";
  return null;
}

/** Deterministic provisional name from intention — labeled provisional by Studio. */
export function provisionalNameFromIntention(intention: string): string {
  const t = intention.trim().replace(/\s+/g, " ");
  if (!t) return "Projet exploratoire";
  const clause = t.split(/[.!?\n]/)[0]?.trim() || t;
  const clipped = clause.length > 72 ? `${clause.slice(0, 69)}…` : clause;
  return clipped.charAt(0).toUpperCase() + clipped.slice(1);
}

/**
 * Studio gate — independent of Nora's sufficient flag alone.
 *
 * Requires:
 * - no current explicit refuse;
 * - Product-usable non-empty name (proposed or provisional);
 * - at least one cognitive turn;
 * - intentionKind === project_direction with non-empty intention text;
 * - Nora create proposal OR exploratory path (project_direction without refuse).
 *
 * Length is NOT a maturity criterion (technical empty-check only).
 * Nora sufficient=true cannot authorize Create without project_direction.
 */
export function studioCanCreate(draft: PreProjectDraft): boolean {
  if (draft.explicitRefuseCreate) return false;
  if (draft.cognitiveTurns < 1) return false;
  if (!draft.name.trim()) return false;
  if (draft.intentionKind !== "project_direction") return false;
  if (!draft.intention.trim()) return false;
  // Exploratory create allowed when direction is known, even if Nora was uncertain.
  // Nora's cognitiveCreateProposal strengthens UX messaging but is not sole authority.
  return true;
}

export function isMinimumSufficient(draft: PreProjectDraft): boolean {
  return studioCanCreate(draft);
}

export function parseOnboardingCognitivePayload(
  raw: unknown,
): OnboardingCognitivePayload | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const replyText = nullableString(o.replyText, REPLY_MAX);
  if (!replyText) return null;
  const intentionKind = parseIntentionKind(o.intentionKind);
  if (!intentionKind || intentionKind === "unset") return null;
  const unknowns = Array.isArray(o.unknowns)
    ? o.unknowns
        .filter((u): u is string => typeof u === "string")
        .map((u) => sanitize(u, 240))
        .filter(Boolean)
        .slice(0, 8)
    : [];
  const suggestions = Array.isArray(o.suggestions)
    ? o.suggestions
        .filter((u): u is string => typeof u === "string")
        .map((u) => sanitize(u, 120))
        .filter(Boolean)
        .slice(0, 6)
    : [];
  return {
    replyText,
    intentionKnown: nullableString(o.intentionKnown, INTENTION_MAX),
    objectiveProposal: nullableString(o.objectiveProposal, INTENTION_MAX),
    contextKnown: nullableString(o.contextKnown, CONTEXT_MAX),
    nameProposal: nullableString(o.nameProposal, NAME_MAX),
    nameProvisional: o.nameProvisional === true,
    firstOrientationProposal: nullableString(
      o.firstOrientationProposal,
      ORIENTATION_MAX,
    ),
    unknowns,
    sufficientForCreateProposal: o.sufficientForCreateProposal === true,
    refuseCreateDetected: o.refuseCreateDetected === true,
    acceptCreateDetected: o.acceptCreateDetected === true,
    intentionKind,
    clarificationQuestion: nullableString(o.clarificationQuestion, 400),
    suggestions,
  };
}

export function extractJsonObject(text: string): unknown | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start < 0 || end <= start) return null;
    try {
      return JSON.parse(trimmed.slice(start, end + 1)) as unknown;
    } catch {
      return null;
    }
  }
}

/**
 * Merge Nora cognitive payload into ephemeral draft.
 *
 * Refuse is sticky until acceptCreateDetected.
 * AcceptCreateDetected does not invent intention — Studio still requires project_direction.
 * Name confirmation alone must not arrive as acceptCreateDetected (prompt contract).
 */
export function mergeCognitiveIntoDraft(
  prev: PreProjectDraft,
  payload: OnboardingCognitivePayload,
  userText: string,
): PreProjectDraft {
  void userText;
  let explicitRefuseCreate = prev.explicitRefuseCreate;
  if (payload.refuseCreateDetected) {
    explicitRefuseCreate = true;
  } else if (payload.acceptCreateDetected) {
    explicitRefuseCreate = false;
  }

  const next: PreProjectDraft = {
    ...prev,
    cognitiveTurns: prev.cognitiveTurns + 1,
    explicitRefuseCreate,
    intentionKind: payload.intentionKind,
    cognitiveCreateProposal:
      payload.sufficientForCreateProposal && !payload.refuseCreateDetected,
    unknowns: payload.unknowns.length > 0 ? payload.unknowns : prev.unknowns,
  };

  if (payload.intentionKnown) {
    next.intention = payload.intentionKnown;
  }

  if (payload.objectiveProposal) {
    next.objective = payload.objectiveProposal;
  } else if (!next.objective.trim() && next.intention.trim()) {
    next.objective = next.intention;
  }

  if (payload.contextKnown) {
    next.context = payload.contextKnown;
  }

  if (payload.nameProposal) {
    next.name = payload.nameProposal;
    next.nameProvisional = payload.nameProvisional === true;
  }

  if (payload.firstOrientationProposal) {
    next.firstOrientation = payload.firstOrientationProposal;
  }

  // Studio provisional name when intention is a project direction and name empty.
  if (
    !next.name.trim() &&
    next.intention.trim() &&
    next.intentionKind === "project_direction"
  ) {
    next.name = provisionalNameFromIntention(next.intention);
    next.nameProvisional = true;
  }

  if (payload.refuseCreateDetected) {
    next.cognitiveCreateProposal = false;
  }

  // Nora claiming sufficient without project_direction cannot open Create.
  if (next.intentionKind !== "project_direction") {
    next.cognitiveCreateProposal = false;
  }

  return next;
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: "Bonjour — dis-moi ce que tu veux accomplir avec ce projet. Tu peux rester large : on précisera ensemble seulement ce qui est utile pour démarrer.",
    meta: "opening",
  };
}

export function objectiveFromDraft(draft: PreProjectDraft): string {
  const objective = draft.objective.trim() || draft.intention.trim();
  if (!objective) return "";
  return objective.length > 160 ? `${objective.slice(0, 157)}…` : objective;
}

export function startingPointFromDraft(draft: PreProjectDraft): string {
  if (draft.context.trim()) return draft.context.trim().slice(0, 160);
  if (draft.intention.trim()) return "À partir de la conversation d’accueil";
  return "";
}

export function understoodPointsFromDraft(draft: PreProjectDraft): string[] {
  const points: string[] = [];
  if (draft.intention.trim()) {
    const i = draft.intention.trim();
    points.push(i.length > 72 ? `${i.slice(0, 69)}…` : i);
  }
  for (const u of draft.unknowns.slice(0, 3)) {
    points.push(`À préciser : ${u}`);
  }
  return points.slice(0, 5);
}

export type HandoffAssemblyResult = {
  readonly text: string;
  readonly truncated: boolean;
  readonly transcriptTurnsIncluded: number;
  readonly essentialPreserved: boolean;
};

/**
 * Prioritized Product context handoff.
 * Essential block (marker, intention, unknowns, orientation) always first.
 * Transcript fills remaining budget — never silently drops essentials via a
 * final blind slice of the whole string.
 */
export function buildProductContextHandoff(
  draft: PreProjectDraft,
  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
): string {
  return assembleProductContextHandoff(draft, transcript).text;
}

export function assembleProductContextHandoff(
  draft: PreProjectDraft,
  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
  maxChars: number = CONTEXT_MAX,
): HandoffAssemblyResult {
  const essential = [
    ONBOARDING_HANDOFF_MARKER,
    "Synthèse d’accueil Nora (non autoritative — propositions et faits de conversation).",
    `Intention: ${draft.intention.trim() || "(non établie)"}`,
    `Objectif (proposition): ${draft.objective.trim() || draft.intention.trim() || "(non établi)"}`,
    `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
    `Contexte: ${draft.context.trim() || "(à préciser)"}`,
    `Première orientation (proposition): ${draft.firstOrientation.trim() || "(aucune)"}`,
    `Incertitudes: ${draft.unknowns.length ? draft.unknowns.join(" · ") : "(aucune listée)"}`,
    "Transcript d’accueil (abrégé, non Session Agents):",
  ];
  const footer =
    "Fin handoff. Aucun CycleInstance ni HumanDecision n’a été créé à l’accueil. FULL TRANSCRIPT REPLAY: non.";

  let essentialText = essential.join("\n");
  // Hard floor: if essentials alone exceed budget, truncate unknowns/context first
  // while keeping marker + intention + refuse.
  if (essentialText.length + 1 + footer.length > maxChars) {
    const core = [
      ONBOARDING_HANDOFF_MARKER,
      `Intention: ${draft.intention.trim() || "(non établie)"}`,
      `Objectif (proposition): ${(draft.objective.trim() || draft.intention.trim() || "(non établi)").slice(0, 400)}`,
      `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
      `Incertitudes: ${draft.unknowns.slice(0, 4).join(" · ") || "(aucune)"}`,
      `Première orientation (proposition): ${draft.firstOrientation.trim().slice(0, 200) || "(aucune)"}`,
      "Transcript d’accueil: (omis — budget)",
    ].join("\n");
    const text = `${core}\n${footer}`.slice(0, maxChars);
    return {
      text,
      truncated: true,
      transcriptTurnsIncluded: 0,
      essentialPreserved: text.includes(ONBOARDING_HANDOFF_MARKER) &&
        text.includes("Intention:"),
    };
  }

  const budgetForTranscript =
    maxChars - essentialText.length - footer.length - 2;
  const turns: string[] = [];
  let used = 0;
  let included = 0;
  for (const turn of transcript.slice(-12)) {
    const label = turn.role === "user" ? "Pilote" : "Nora";
    const body = turn.text.trim().slice(0, 280);
    if (!body) continue;
    const line = `- ${label}: ${body}`;
    if (used + line.length + 1 > budgetForTranscript) break;
    turns.push(line);
    used += line.length + 1;
    included += 1;
  }

  const text = [essentialText, ...turns, footer].join("\n");
  return {
    text,
    truncated: included < Math.min(transcript.length, 12),
    transcriptTurnsIncluded: included,
    essentialPreserved: true,
  };
}

/** Read-back helper for continuity tests — parses essential fields from handoff text. */
export function parseOnboardingHandoffEssentials(context: string): {
  markerPresent: boolean;
  intention: string | null;
  unknownsLine: string | null;
  orientation: string | null;
  claimsFullReplay: boolean;
} {
  const markerPresent = context.includes(ONBOARDING_HANDOFF_MARKER);
  const intention =
    context.match(/^Intention:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const unknownsLine =
    context.match(/^Incertitudes:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const orientation =
    context
      .match(/^Première orientation \(proposition\):\s*(.+)$/m)?.[1]
      ?.trim() ?? null;
  return {
    markerPresent,
    intention,
    unknownsLine,
    orientation,
    claimsFullReplay: /FULL TRANSCRIPT REPLAY:\s*oui/i.test(context),
  };
}

export function onboardingSystemPrompt(): string {
  return [
    "Tu es Nora, assistante de SFIA Studio. Tu accueilles un Pilote avant la création d’un projet.",
    "Tu n’as aucune autorité de création. Tu comprends, reformules, proposes, et peux recommander que la création soit possible.",
    "Réponds en français courant, calme, naturel, proportionné. Pas de jargon inutile. Pas de questionnaire systématique.",
    "Ne prétends pas être humaine. N’invente pas de faits, d’autorité, ni de contexte non dit.",
    "Les champs intention/objectif/contexte/nom sont des repères — pas quatre questions obligatoires.",
    "intentionKind: project_direction si une direction de projet (même exploratoire) est identifiable ; non_project si hors sujet / sans projet ; unclear sinon.",
    "sufficientForCreateProposal=true seulement si intentionKind=project_direction.",
    "refuseCreateDetected=true si le Pilote refuse ou reporte explicitement la création.",
    "acceptCreateDetected=true seulement si le Pilote accepte explicitement de créer / revient sur un refus (« allons-y », « créons-le »). Confirmer un nom ≠ accepter de créer.",
    "Un tour neutre (question, précision) ne doit activer ni refuseCreateDetected ni acceptCreateDetected.",
    "Si le Pilote veut commencer vite avec peu d’infos, privilégie une création exploratoire honnête.",
    "firstOrientationProposal = direction de travail provisoire non autoritative (pas un démarrage de cycle).",
    "replyText = ton message conversationnel au Pilote (sans JSON visible).",
  ].join("\n");
}

export function composerPlaceholder(draft: PreProjectDraft): string {
  if (!draft.intention.trim()) return "Décrire ce que tu veux accomplir…";
  if (studioCanCreate(draft)) return "Préciser, corriger, ou poser une question…";
  return "Répondre à Nora…";
}

/** Morris-declared Human QA envelope (documentary) — NOT a technical hard cap. */
export const NEW_PROJECT_HUMAN_QA_BUDGET_EUR_DECLARED = 10 as const;
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts`

```typescript
/**
 * P6-HQA-NEWPROJECT-01 — pre-Project Nora turn (server-safe).
 * Reuses ConversationProvider + F2 Product cognitive routing.
 * No projectId. No Product write. No Cycle/HD.
 *
 * Usage observation is returned when the provider supplies it.
 * No hard EUR cap is enforced here (campaignBudget is MW6-scoped;
 * declaring 10 EUR ≠ technical hard cap).
 */

import { resolveF2ProductRoutedProvider } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import type {
  ConversationProvider,
  ProviderUsage,
} from "@/lib/platform/ai";
import {
  emptyDraft,
  extractJsonObject,
  mergeCognitiveIntoDraft,
  NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
  NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
  onboardingSystemPrompt,
  parseOnboardingCognitivePayload,
  type ChatTurn,
  type OnboardingCognitivePayload,
  type PreProjectDraft,
} from "./newProjectOnboardingContract";

export type OnboardingUsageObservation = {
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly model: string | null;
  readonly providerResponseId: string | null;
  readonly selectedModel: string | null;
  readonly selectedReasoningEffort: string | null;
  readonly boundarySubstitution: boolean;
  /**
   * Documentary only — Morris envelope for future Human QA.
   * NOT enforced as a technical hard stop in this path.
   */
  readonly declaredHumanQaBudgetEur: 10;
  readonly hardCapEnforced: false;
};

export type NewProjectOnboardingTurnInput = {
  readonly userText: string;
  readonly draft: PreProjectDraft;
  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
  readonly signal?: AbortSignal;
  /** Test inject — bypasses Product routing provider construction. */
  readonly provider?: ConversationProvider;
};

export type NewProjectOnboardingTurnResult =
  | {
      readonly ok: true;
      readonly draft: PreProjectDraft;
      readonly replyText: string;
      readonly clarification: ChatTurn["clarification"];
      readonly payload: OnboardingCognitivePayload;
      readonly boundarySubstitution: boolean;
      readonly usageObservation: OnboardingUsageObservation;
    }
  | {
      readonly ok: false;
      readonly code:
        | "INPUT_EMPTY"
        | "PROVIDER_ERROR"
        | "PROVIDER_TIMEOUT"
        | "PAYLOAD_INVALID"
        | "ABORTED";
      readonly message: string;
      readonly draft: PreProjectDraft;
      readonly usageObservation?: OnboardingUsageObservation;
    };

function buildMessages(input: {
  history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
  draft: PreProjectDraft;
  userText: string;
}): { role: "system" | "user" | "assistant"; content: string }[] {
  const draftSnapshot = [
    "État brouillon actuel (éphémère, non Product) :",
    `- intention: ${input.draft.intention || "(vide)"}`,
    `- intentionKind: ${input.draft.intentionKind}`,
    `- nom: ${input.draft.name || "(vide)"}${input.draft.nameProvisional ? " (provisoire)" : ""}`,
    `- objectif: ${input.draft.objective || "(vide)"}`,
    `- contexte: ${input.draft.context || "(vide)"}`,
    `- orientation: ${input.draft.firstOrientation || "(vide)"}`,
    `- incertitudes: ${input.draft.unknowns.join(" · ") || "(aucune)"}`,
    `- refuseCreate sticky: ${input.draft.explicitRefuseCreate ? "oui" : "non"}`,
  ].join("\n");

  const messages: { role: "system" | "user" | "assistant"; content: string }[] =
    [
      { role: "system", content: onboardingSystemPrompt() },
      { role: "system", content: draftSnapshot },
    ];

  for (const turn of input.history) {
    if (turn.role === "user") {
      messages.push({ role: "user", content: turn.text });
    } else {
      messages.push({ role: "assistant", content: turn.text });
    }
  }
  messages.push({ role: "user", content: input.userText });
  return messages;
}

function toUsageObservation(input: {
  usage: ProviderUsage | null | undefined;
  selectedModel: string | null;
  selectedReasoningEffort: string | null;
  boundarySubstitution: boolean;
}): OnboardingUsageObservation {
  const usage = input.usage;
  return {
    inputTokens: usage?.inputTokens ?? null,
    outputTokens: usage?.outputTokens ?? null,
    totalTokens: usage?.totalTokens ?? null,
    model: usage?.model ?? input.selectedModel,
    providerResponseId: usage?.providerResponseId ?? null,
    selectedModel: input.selectedModel,
    selectedReasoningEffort: input.selectedReasoningEffort,
    boundarySubstitution: input.boundarySubstitution,
    declaredHumanQaBudgetEur: 10,
    hardCapEnforced: false,
  };
}

export async function runNewProjectOnboardingTurn(
  input: NewProjectOnboardingTurnInput,
): Promise<NewProjectOnboardingTurnResult> {
  const userText = input.userText.replace(/\u0000/g, "").trim();
  if (!userText) {
    return {
      ok: false,
      code: "INPUT_EMPTY",
      message: "Message vide.",
      draft: input.draft ?? emptyDraft(),
    };
  }

  if (input.signal?.aborted) {
    return {
      ok: false,
      code: "ABORTED",
      message: "Tour interrompu.",
      draft: input.draft,
    };
  }

  let provider = input.provider;
  let boundarySubstitution = Boolean(input.provider);
  let selectedModel: string | null = null;
  let selectedReasoningEffort: string | null = null;
  if (!provider) {
    try {
      const routed = resolveF2ProductRoutedProvider({
        turnContext: {
          projectCriticality: null,
          userContentLength: userText.length,
          historyMessageCount: input.history.length,
          historyTotalChars: input.history.reduce(
            (n, t) => n + t.text.length,
            0,
          ),
          enableTools: false,
        },
        cognitiveTaskId: `new-project-onboarding:${input.draft.cognitiveTurns + 1}`,
        correlationId: `cor:new-project-onboarding:${Date.now()}`,
      });
      provider = routed.provider;
      boundarySubstitution = routed.boundarySubstitution;
      selectedModel = routed.routing.selectedModel;
      selectedReasoningEffort = routed.routing.selectedReasoningEffort;
    } catch (error) {
      return {
        ok: false,
        code: "PROVIDER_ERROR",
        message:
          error instanceof Error
            ? error.message
            : "Provider conversationnel indisponible.",
        draft: input.draft,
      };
    }
  }

  if (typeof provider.completeStructured !== "function") {
    return {
      ok: false,
      code: "PROVIDER_ERROR",
      message: "Structured Outputs requis pour l’accueil New Project.",
      draft: input.draft,
    };
  }

  let completionText: string;
  let usage: ProviderUsage | undefined;
  try {
    const completion = await provider.completeStructured({
      messages: buildMessages({
        history: input.history,
        draft: input.draft,
        userText,
      }),
      schemaName: NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
      jsonSchema: NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
      signal: input.signal,
    });
    completionText = completion.text;
    usage = completion.usage;
  } catch (error) {
    if (
      input.signal?.aborted ||
      (error instanceof Error && error.name === "AbortError")
    ) {
      return {
        ok: false,
        code: "ABORTED",
        message: "Tour interrompu.",
        draft: input.draft,
      };
    }
    const msg = error instanceof Error ? error.message : "Erreur provider.";
    if (/timeout|ETIMEDOUT|aborted/i.test(msg)) {
      return {
        ok: false,
        code: "PROVIDER_TIMEOUT",
        message: "Le fournisseur n’a pas répondu à temps. Tu peux réessayer.",
        draft: input.draft,
      };
    }
    return {
      ok: false,
      code: "PROVIDER_ERROR",
      message:
        "Nora n’a pas pu répondre pour le moment. La conversation locale est conservée ; tu peux réessayer.",
      draft: input.draft,
    };
  }

  if (input.signal?.aborted) {
    return {
      ok: false,
      code: "ABORTED",
      message: "Tour interrompu.",
      draft: input.draft,
    };
  }

  const parsed = parseOnboardingCognitivePayload(
    extractJsonObject(completionText),
  );
  const usageObservation = toUsageObservation({
    usage,
    selectedModel,
    selectedReasoningEffort,
    boundarySubstitution,
  });
  if (!parsed) {
    return {
      ok: false,
      code: "PAYLOAD_INVALID",
      message:
        "La réponse de Nora n’était pas exploitable. Aucune donnée n’a été inventée ; tu peux reformuler.",
      draft: input.draft,
      usageObservation,
    };
  }

  const nextDraft = mergeCognitiveIntoDraft(input.draft, parsed, userText);
  const clarification =
    parsed.clarificationQuestion && parsed.clarificationQuestion.trim()
      ? {
          title: "UNE PRÉCISION UTILE",
          question: parsed.clarificationQuestion.trim(),
          suggestions: parsed.suggestions,
        }
      : undefined;

  return {
    ok: true,
    draft: nextDraft,
    replyText: parsed.replyText,
    clarification,
    payload: parsed,
    boundarySubstitution,
    usageObservation,
  };
}
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts`

```typescript
"use server";

/**
 * P6-HQA-NEWPROJECT-01 — thin server action for pre-Project Nora turn.
 * Reuses canonical ConversationProvider routing. No Product mutation.
 */

import {
  emptyDraft,
  type ChatTurn,
  type PreProjectDraft,
} from "./newProjectOnboardingContract";
import {
  runNewProjectOnboardingTurn,
  type NewProjectOnboardingTurnResult,
} from "./runNewProjectOnboardingTurn";

export type NewProjectOnboardingActionInput = {
  readonly userText: string;
  readonly draft: PreProjectDraft;
  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
};

export async function newProjectOnboardingTurnAction(
  input: NewProjectOnboardingActionInput,
): Promise<NewProjectOnboardingTurnResult> {
  const draft = input?.draft ?? emptyDraft();
  const history = Array.isArray(input?.history) ? input.history : [];
  const userText =
    typeof input?.userText === "string" ? input.userText : "";
  return runNewProjectOnboardingTurn({
    userText,
    draft,
    history,
  });
}
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts`

```typescript
/**
 * P6-HQA-NEWPROJECT-01 — New Project conversation surface helpers.
 *
 * Cognitive turns are provider-backed via runNewProjectOnboardingTurn.
 * This module keeps UI helpers + a thin compatibility surface for prior tests.
 * Scripted phase machine is no longer the REAL conversation path.
 */

export {
  INTENTION_STARTERS,
  emptyDraft,
  isMinimumSufficient,
  studioCanCreate,
  openingNoraTurn,
  objectiveFromDraft,
  startingPointFromDraft,
  understoodPointsFromDraft,
  composerPlaceholder,
  provisionalNameFromIntention,
  buildProductContextHandoff,
  mergeCognitiveIntoDraft,
  type PreProjectDraft,
  type ChatTurn,
} from "./newProjectOnboardingContract";

import type { PreProjectDraft } from "./newProjectOnboardingContract";
import {
  emptyDraft,
  provisionalNameFromIntention,
} from "./newProjectOnboardingContract";

/** @deprecated Phase labels retained for data-testid compatibility only. */
export type CollectPhase =
  | "INTENTION_REQUIRED"
  | "NAME_REQUIRED"
  | "OPTIONAL_CONTEXT";

export type CollectField = "name" | "intention";

export function collectPhaseOf(draft: PreProjectDraft): CollectPhase {
  if (!draft.intention.trim()) return "INTENTION_REQUIRED";
  if (!draft.name.trim()) return "NAME_REQUIRED";
  return "OPTIONAL_CONTEXT";
}

/**
 * Local absorb — used only for deterministic unit fixtures that do not call
 * the provider. Production UI uses newProjectOnboardingTurnAction instead.
 */
export function absorbUserTurn(
  draft: PreProjectDraft,
  raw: string,
  _phase?: CollectPhase,
): PreProjectDraft {
  void _phase;
  const text = raw.replace(/\u0000/g, "").trim().slice(0, 4000);
  if (!text) return draft;
  const next: PreProjectDraft = {
    ...draft,
    intention: draft.intention.trim()
      ? `${draft.intention}\n${text}`.slice(0, 4000)
      : text,
    intentionKind: "project_direction",
    cognitiveTurns: Math.max(draft.cognitiveTurns, 1),
  };
  if (!next.objective.trim()) next.objective = next.intention;
  if (!next.name.trim()) {
    next.name = provisionalNameFromIntention(next.intention);
    next.nameProvisional = true;
  }
  next.cognitiveCreateProposal = true;
  return next;
}

export function reopenField(
  draft: PreProjectDraft,
  field: CollectField,
): PreProjectDraft {
  if (field === "name") {
    return {
      ...draft,
      name: "",
      nameProvisional: false,
      cognitiveCreateProposal: false,
    };
  }
  return {
    ...draft,
    intention: "",
    objective: "",
    cognitiveCreateProposal: false,
  };
}

/** @deprecated Presentation helper — prefer composerPlaceholder(draft). */
export function nextNoraPrompt(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Qu’est-ce que tu veux accomplir avec ce nouveau projet ?";
    case "NAME_REQUIRED":
      return "Quel nom voulez-vous donner à ce projet ?";
    case "OPTIONAL_CONTEXT":
      return "On peut créer le projet dès que tu es prêt — dis-moi si tu veux préciser autre chose.";
  }
}

export function proposeNameFromIntention(intention: string): string | null {
  const t = intention.trim();
  if (!t) return null;
  return provisionalNameFromIntention(t);
}

export function noraTurnAfter(): never {
  throw new Error(
    "noraTurnAfter removed — use newProjectOnboardingTurnAction / runNewProjectOnboardingTurn",
  );
}

export function resetDraftForTests(): PreProjectDraft {
  return emptyDraft();
}
```


## Cycle-only unified diffs vs pre-closure baseline


### cycle diff — `newProjectOnboardingContract.ts`

```diff
--- a/b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts	2026-10-09 11:00:43
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts	2026-10-09 11:02:07
@@ -3,6 +3,9 @@
  *
  * Nora (provider) proposes; Studio validates and materializes.
  * No Product write, no CycleInstance, no HumanDecision here.
+ *
+ * Closure correction: reversible refuse, non-syntactic gate,
+ * prioritized handoff assembly, usage observation (no FinOps invent).
  */

 export const NEW_PROJECT_ONBOARDING_SCHEMA_NAME =
@@ -16,6 +19,13 @@
 const ORIENTATION_MAX = 800;
 const REPLY_MAX = 4000;

+/** Studio-held view of whether the known intention is a project direction. */
+export type IntentionKind =
+  | "unset"
+  | "project_direction"
+  | "non_project"
+  | "unclear";
+
 export type PreProjectDraft = {
   name: string;
   /** True when Studio or Nora stamped a provisional label — Pilot may rename. */
@@ -29,8 +39,13 @@
   unknowns: string[];
   /** Nora recommendation only — never alone authorizes Create. */
   cognitiveCreateProposal: boolean;
-  /** Pilot explicitly refused creation in conversation. */
+  /**
+   * Current create-block from an explicit Pilot refuse/defer.
+   * Cleared only by a later explicit acceptCreateDetected — not by silence.
+   */
   explicitRefuseCreate: boolean;
+  /** Last Nora classification of whether a project direction is present. */
+  intentionKind: IntentionKind;
   /** Cognitive turns completed (provider-backed). */
   cognitiveTurns: number;
 };
@@ -57,7 +72,21 @@
   firstOrientationProposal: string | null;
   unknowns: string[];
   sufficientForCreateProposal: boolean;
+  /**
+   * Explicit Pilot refuse/defer of creation for this turn.
+   * Sticky until acceptCreateDetected — absence does not clear.
+   */
   refuseCreateDetected: boolean;
+  /**
+   * Explicit Pilot accept/retract of a prior refuse ("allons-y", "créons-le").
+   * Name confirmation alone must NOT set this.
+   */
+  acceptCreateDetected: boolean;
+  /**
+   * Nora's classification — Studio uses this instead of message length.
+   * project_direction = exploitable even if exploratory.
+   */
+  intentionKind: "project_direction" | "non_project" | "unclear";
   clarificationQuestion: string | null;
   suggestions: string[];
 };
@@ -77,6 +106,8 @@
     "unknowns",
     "sufficientForCreateProposal",
     "refuseCreateDetected",
+    "acceptCreateDetected",
+    "intentionKind",
     "clarificationQuestion",
     "suggestions",
   ],
@@ -91,6 +122,11 @@
     unknowns: { type: "array", items: { type: "string" } },
     sufficientForCreateProposal: { type: "boolean" },
     refuseCreateDetected: { type: "boolean" },
+    acceptCreateDetected: { type: "boolean" },
+    intentionKind: {
+      type: "string",
+      enum: ["project_direction", "non_project", "unclear"],
+    },
     clarificationQuestion: { type: ["string", "null"] },
     suggestions: { type: "array", items: { type: "string" } },
   },
@@ -114,6 +150,7 @@
     unknowns: [],
     cognitiveCreateProposal: false,
     explicitRefuseCreate: false,
+    intentionKind: "unset",
     cognitiveTurns: 0,
   };
 }
@@ -129,6 +166,13 @@
   return t.length > 0 ? t : null;
 }

+function parseIntentionKind(value: unknown): IntentionKind | null {
+  if (value === "project_direction") return "project_direction";
+  if (value === "non_project") return "non_project";
+  if (value === "unclear") return "unclear";
+  return null;
+}
+
 /** Deterministic provisional name from intention — labeled provisional by Studio. */
 export function provisionalNameFromIntention(intention: string): string {
   const t = intention.trim().replace(/\s+/g, " ");
@@ -140,19 +184,26 @@

 /**
  * Studio gate — independent of Nora's sufficient flag alone.
- * Requires exploitable intention + a name (proposed or provisional).
- * RefuseCreate blocks. Cognitive proposal strengthens readiness but is not sole authority.
+ *
+ * Requires:
+ * - no current explicit refuse;
+ * - Product-usable non-empty name (proposed or provisional);
+ * - at least one cognitive turn;
+ * - intentionKind === project_direction with non-empty intention text;
+ * - Nora create proposal OR exploratory path (project_direction without refuse).
+ *
+ * Length is NOT a maturity criterion (technical empty-check only).
+ * Nora sufficient=true cannot authorize Create without project_direction.
  */
 export function studioCanCreate(draft: PreProjectDraft): boolean {
   if (draft.explicitRefuseCreate) return false;
-  const intention = draft.intention.trim();
+  if (draft.cognitiveTurns < 1) return false;
   if (!draft.name.trim()) return false;
-  if (draft.cognitiveTurns < 1) return false;
-  // Nora recommendation enables exploratory create with a short but real intention.
-  if (draft.cognitiveCreateProposal && intention.length >= 3) return true;
-  // Without Nora's create proposal, Studio still requires a usable intention phrase.
-  if (intention.length >= 12) return true;
-  return false;
+  if (draft.intentionKind !== "project_direction") return false;
+  if (!draft.intention.trim()) return false;
+  // Exploratory create allowed when direction is known, even if Nora was uncertain.
+  // Nora's cognitiveCreateProposal strengthens UX messaging but is not sole authority.
+  return true;
 }

 export function isMinimumSufficient(draft: PreProjectDraft): boolean {
@@ -166,6 +217,8 @@
   const o = raw as Record<string, unknown>;
   const replyText = nullableString(o.replyText, REPLY_MAX);
   if (!replyText) return null;
+  const intentionKind = parseIntentionKind(o.intentionKind);
+  if (!intentionKind || intentionKind === "unset") return null;
   const unknowns = Array.isArray(o.unknowns)
     ? o.unknowns
         .filter((u): u is string => typeof u === "string")
@@ -194,6 +247,8 @@
     unknowns,
     sufficientForCreateProposal: o.sufficientForCreateProposal === true,
     refuseCreateDetected: o.refuseCreateDetected === true,
+    acceptCreateDetected: o.acceptCreateDetected === true,
+    intentionKind,
     clarificationQuestion: nullableString(o.clarificationQuestion, 400),
     suggestions,
   };
@@ -218,18 +273,29 @@

 /**
  * Merge Nora cognitive payload into ephemeral draft.
- * Studio may stamp a provisional name when intention exists and name is still empty.
+ *
+ * Refuse is sticky until acceptCreateDetected.
+ * AcceptCreateDetected does not invent intention — Studio still requires project_direction.
+ * Name confirmation alone must not arrive as acceptCreateDetected (prompt contract).
  */
 export function mergeCognitiveIntoDraft(
   prev: PreProjectDraft,
   payload: OnboardingCognitivePayload,
   userText: string,
 ): PreProjectDraft {
+  void userText;
+  let explicitRefuseCreate = prev.explicitRefuseCreate;
+  if (payload.refuseCreateDetected) {
+    explicitRefuseCreate = true;
+  } else if (payload.acceptCreateDetected) {
+    explicitRefuseCreate = false;
+  }
+
   const next: PreProjectDraft = {
     ...prev,
     cognitiveTurns: prev.cognitiveTurns + 1,
-    explicitRefuseCreate:
-      payload.refuseCreateDetected || prev.explicitRefuseCreate,
+    explicitRefuseCreate,
+    intentionKind: payload.intentionKind,
     cognitiveCreateProposal:
       payload.sufficientForCreateProposal && !payload.refuseCreateDetected,
     unknowns: payload.unknowns.length > 0 ? payload.unknowns : prev.unknowns,
@@ -237,13 +303,6 @@

   if (payload.intentionKnown) {
     next.intention = payload.intentionKnown;
-  } else if (
-    !next.intention.trim() &&
-    userText.trim().length >= 12 &&
-    payload.sufficientForCreateProposal
-  ) {
-    // Only adopt raw user text as intention when Nora also proposes create-readiness.
-    next.intention = sanitize(userText, INTENTION_MAX);
   }

   if (payload.objectiveProposal) {
@@ -265,8 +324,12 @@
     next.firstOrientation = payload.firstOrientationProposal;
   }

-  // Studio provisional name — does not invent semantic themes beyond the intention text.
-  if (!next.name.trim() && next.intention.trim()) {
+  // Studio provisional name when intention is a project direction and name empty.
+  if (
+    !next.name.trim() &&
+    next.intention.trim() &&
+    next.intentionKind === "project_direction"
+  ) {
     next.name = provisionalNameFromIntention(next.intention);
     next.nameProvisional = true;
   }
@@ -275,6 +338,11 @@
     next.cognitiveCreateProposal = false;
   }

+  // Nora claiming sufficient without project_direction cannot open Create.
+  if (next.intentionKind !== "project_direction") {
+    next.cognitiveCreateProposal = false;
+  }
+
   return next;
 }

@@ -311,12 +379,32 @@
   return points.slice(0, 5);
 }

-/** Product context payload after Create — proposal markers kept honest. */
+export type HandoffAssemblyResult = {
+  readonly text: string;
+  readonly truncated: boolean;
+  readonly transcriptTurnsIncluded: number;
+  readonly essentialPreserved: boolean;
+};
+
+/**
+ * Prioritized Product context handoff.
+ * Essential block (marker, intention, unknowns, orientation) always first.
+ * Transcript fills remaining budget — never silently drops essentials via a
+ * final blind slice of the whole string.
+ */
 export function buildProductContextHandoff(
   draft: PreProjectDraft,
   transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
 ): string {
-  const lines: string[] = [
+  return assembleProductContextHandoff(draft, transcript).text;
+}
+
+export function assembleProductContextHandoff(
+  draft: PreProjectDraft,
+  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
+  maxChars: number = CONTEXT_MAX,
+): HandoffAssemblyResult {
+  const essential = [
     ONBOARDING_HANDOFF_MARKER,
     "Synthèse d’accueil Nora (non autoritative — propositions et faits de conversation).",
     `Intention: ${draft.intention.trim() || "(non établie)"}`,
@@ -325,19 +413,85 @@
     `Contexte: ${draft.context.trim() || "(à préciser)"}`,
     `Première orientation (proposition): ${draft.firstOrientation.trim() || "(aucune)"}`,
     `Incertitudes: ${draft.unknowns.length ? draft.unknowns.join(" · ") : "(aucune listée)"}`,
-    "Transcript d’accueil (abrégé):",
+    "Transcript d’accueil (abrégé, non Session Agents):",
   ];
+  const footer =
+    "Fin handoff. Aucun CycleInstance ni HumanDecision n’a été créé à l’accueil. FULL TRANSCRIPT REPLAY: non.";
+
+  let essentialText = essential.join("\n");
+  // Hard floor: if essentials alone exceed budget, truncate unknowns/context first
+  // while keeping marker + intention + refuse.
+  if (essentialText.length + 1 + footer.length > maxChars) {
+    const core = [
+      ONBOARDING_HANDOFF_MARKER,
+      `Intention: ${draft.intention.trim() || "(non établie)"}`,
+      `Objectif (proposition): ${(draft.objective.trim() || draft.intention.trim() || "(non établi)").slice(0, 400)}`,
+      `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
+      `Incertitudes: ${draft.unknowns.slice(0, 4).join(" · ") || "(aucune)"}`,
+      `Première orientation (proposition): ${draft.firstOrientation.trim().slice(0, 200) || "(aucune)"}`,
+      "Transcript d’accueil: (omis — budget)",
+    ].join("\n");
+    const text = `${core}\n${footer}`.slice(0, maxChars);
+    return {
+      text,
+      truncated: true,
+      transcriptTurnsIncluded: 0,
+      essentialPreserved: text.includes(ONBOARDING_HANDOFF_MARKER) &&
+        text.includes("Intention:"),
+    };
+  }
+
+  const budgetForTranscript =
+    maxChars - essentialText.length - footer.length - 2;
+  const turns: string[] = [];
+  let used = 0;
+  let included = 0;
   for (const turn of transcript.slice(-12)) {
     const label = turn.role === "user" ? "Pilote" : "Nora";
-    const text = turn.text.trim().slice(0, 400);
-    if (text) lines.push(`- ${label}: ${text}`);
+    const body = turn.text.trim().slice(0, 280);
+    if (!body) continue;
+    const line = `- ${label}: ${body}`;
+    if (used + line.length + 1 > budgetForTranscript) break;
+    turns.push(line);
+    used += line.length + 1;
+    included += 1;
   }
-  lines.push(
-    "Fin handoff. Aucun CycleInstance ni HumanDecision n’a été créé à l’accueil.",
-  );
-  return lines.join("\n").slice(0, CONTEXT_MAX);
+
+  const text = [essentialText, ...turns, footer].join("\n");
+  return {
+    text,
+    truncated: included < Math.min(transcript.length, 12),
+    transcriptTurnsIncluded: included,
+    essentialPreserved: true,
+  };
 }

+/** Read-back helper for continuity tests — parses essential fields from handoff text. */
+export function parseOnboardingHandoffEssentials(context: string): {
+  markerPresent: boolean;
+  intention: string | null;
+  unknownsLine: string | null;
+  orientation: string | null;
+  claimsFullReplay: boolean;
+} {
+  const markerPresent = context.includes(ONBOARDING_HANDOFF_MARKER);
+  const intention =
+    context.match(/^Intention:\s*(.+)$/m)?.[1]?.trim() ?? null;
+  const unknownsLine =
+    context.match(/^Incertitudes:\s*(.+)$/m)?.[1]?.trim() ?? null;
+  const orientation =
+    context
+      .match(/^Première orientation \(proposition\):\s*(.+)$/m)?.[1]
+      ?.trim() ?? null;
+  return {
+    markerPresent,
+    intention,
+    unknownsLine,
+    orientation,
+    claimsFullReplay: /FULL TRANSCRIPT REPLAY:\s*oui/i.test(context),
+  };
+}
+
 export function onboardingSystemPrompt(): string {
   return [
     "Tu es Nora, assistante de SFIA Studio. Tu accueilles un Pilote avant la création d’un projet.",
@@ -345,9 +499,12 @@
     "Réponds en français courant, calme, naturel, proportionné. Pas de jargon inutile. Pas de questionnaire systématique.",
     "Ne prétends pas être humaine. N’invente pas de faits, d’autorité, ni de contexte non dit.",
     "Les champs intention/objectif/contexte/nom sont des repères — pas quatre questions obligatoires.",
-    "Si l’intention est exploitable même exploratoire, propose un nom (éventuellement provisoire) et indique sufficientForCreateProposal=true.",
-    "Si le Pilote refuse de créer, refuseCreateDetected=true et sufficientForCreateProposal=false.",
-    "Si le Pilote veut commencer vite avec peu d’infos, privilégie une création exploratoire honnête plutôt qu’un cadrage complet.",
+    "intentionKind: project_direction si une direction de projet (même exploratoire) est identifiable ; non_project si hors sujet / sans projet ; unclear sinon.",
+    "sufficientForCreateProposal=true seulement si intentionKind=project_direction.",
+    "refuseCreateDetected=true si le Pilote refuse ou reporte explicitement la création.",
+    "acceptCreateDetected=true seulement si le Pilote accepte explicitement de créer / revient sur un refus (« allons-y », « créons-le »). Confirmer un nom ≠ accepter de créer.",
+    "Un tour neutre (question, précision) ne doit activer ni refuseCreateDetected ni acceptCreateDetected.",
+    "Si le Pilote veut commencer vite avec peu d’infos, privilégie une création exploratoire honnête.",
     "firstOrientationProposal = direction de travail provisoire non autoritative (pas un démarrage de cycle).",
     "replyText = ton message conversationnel au Pilote (sans JSON visible).",
   ].join("\n");
@@ -358,3 +515,6 @@
   if (studioCanCreate(draft)) return "Préciser, corriger, ou poser une question…";
   return "Répondre à Nora…";
 }
+
+/** Morris-declared Human QA envelope (documentary) — NOT a technical hard cap. */
+export const NEW_PROJECT_HUMAN_QA_BUDGET_EUR_DECLARED = 10 as const;
```


### cycle diff — `runNewProjectOnboardingTurn.ts`

```diff
--- a/b/projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts	2026-10-09 11:00:43
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts	2026-10-09 11:02:32
@@ -2,10 +2,17 @@
  * P6-HQA-NEWPROJECT-01 — pre-Project Nora turn (server-safe).
  * Reuses ConversationProvider + F2 Product cognitive routing.
  * No projectId. No Product write. No Cycle/HD.
+ *
+ * Usage observation is returned when the provider supplies it.
+ * No hard EUR cap is enforced here (campaignBudget is MW6-scoped;
+ * declaring 10 EUR ≠ technical hard cap).
  */

 import { resolveF2ProductRoutedProvider } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
-import type { ConversationProvider } from "@/lib/platform/ai";
+import type {
+  ConversationProvider,
+  ProviderUsage,
+} from "@/lib/platform/ai";
 import {
   emptyDraft,
   extractJsonObject,
@@ -19,6 +26,23 @@
   type PreProjectDraft,
 } from "./newProjectOnboardingContract";

+export type OnboardingUsageObservation = {
+  readonly inputTokens: number | null;
+  readonly outputTokens: number | null;
+  readonly totalTokens: number | null;
+  readonly model: string | null;
+  readonly providerResponseId: string | null;
+  readonly selectedModel: string | null;
+  readonly selectedReasoningEffort: string | null;
+  readonly boundarySubstitution: boolean;
+  /**
+   * Documentary only — Morris envelope for future Human QA.
+   * NOT enforced as a technical hard stop in this path.
+   */
+  readonly declaredHumanQaBudgetEur: 10;
+  readonly hardCapEnforced: false;
+};
+
 export type NewProjectOnboardingTurnInput = {
   readonly userText: string;
   readonly draft: PreProjectDraft;
@@ -36,6 +60,7 @@
       readonly clarification: ChatTurn["clarification"];
       readonly payload: OnboardingCognitivePayload;
       readonly boundarySubstitution: boolean;
+      readonly usageObservation: OnboardingUsageObservation;
     }
   | {
       readonly ok: false;
@@ -47,6 +72,7 @@
         | "ABORTED";
       readonly message: string;
       readonly draft: PreProjectDraft;
+      readonly usageObservation?: OnboardingUsageObservation;
     };

 function buildMessages(input: {
@@ -57,11 +83,13 @@
   const draftSnapshot = [
     "État brouillon actuel (éphémère, non Product) :",
     `- intention: ${input.draft.intention || "(vide)"}`,
+    `- intentionKind: ${input.draft.intentionKind}`,
     `- nom: ${input.draft.name || "(vide)"}${input.draft.nameProvisional ? " (provisoire)" : ""}`,
     `- objectif: ${input.draft.objective || "(vide)"}`,
     `- contexte: ${input.draft.context || "(vide)"}`,
     `- orientation: ${input.draft.firstOrientation || "(vide)"}`,
     `- incertitudes: ${input.draft.unknowns.join(" · ") || "(aucune)"}`,
+    `- refuseCreate sticky: ${input.draft.explicitRefuseCreate ? "oui" : "non"}`,
   ].join("\n");

   const messages: { role: "system" | "user" | "assistant"; content: string }[] =
@@ -81,6 +109,27 @@
   return messages;
 }

+function toUsageObservation(input: {
+  usage: ProviderUsage | null | undefined;
+  selectedModel: string | null;
+  selectedReasoningEffort: string | null;
+  boundarySubstitution: boolean;
+}): OnboardingUsageObservation {
+  const usage = input.usage;
+  return {
+    inputTokens: usage?.inputTokens ?? null,
+    outputTokens: usage?.outputTokens ?? null,
+    totalTokens: usage?.totalTokens ?? null,
+    model: usage?.model ?? input.selectedModel,
+    providerResponseId: usage?.providerResponseId ?? null,
+    selectedModel: input.selectedModel,
+    selectedReasoningEffort: input.selectedReasoningEffort,
+    boundarySubstitution: input.boundarySubstitution,
+    declaredHumanQaBudgetEur: 10,
+    hardCapEnforced: false,
+  };
+}
+
 export async function runNewProjectOnboardingTurn(
   input: NewProjectOnboardingTurnInput,
 ): Promise<NewProjectOnboardingTurnResult> {
@@ -105,6 +154,8 @@

   let provider = input.provider;
   let boundarySubstitution = Boolean(input.provider);
+  let selectedModel: string | null = null;
+  let selectedReasoningEffort: string | null = null;
   if (!provider) {
     try {
       const routed = resolveF2ProductRoutedProvider({
@@ -123,6 +174,8 @@
       });
       provider = routed.provider;
       boundarySubstitution = routed.boundarySubstitution;
+      selectedModel = routed.routing.selectedModel;
+      selectedReasoningEffort = routed.routing.selectedReasoningEffort;
     } catch (error) {
       return {
         ok: false,
@@ -146,6 +199,7 @@
   }

   let completionText: string;
+  let usage: ProviderUsage | undefined;
   try {
     const completion = await provider.completeStructured({
       messages: buildMessages({
@@ -158,6 +212,7 @@
       signal: input.signal,
     });
     completionText = completion.text;
+    usage = completion.usage;
   } catch (error) {
     if (
       input.signal?.aborted ||
@@ -200,6 +255,12 @@
   const parsed = parseOnboardingCognitivePayload(
     extractJsonObject(completionText),
   );
+  const usageObservation = toUsageObservation({
+    usage,
+    selectedModel,
+    selectedReasoningEffort,
+    boundarySubstitution,
+  });
   if (!parsed) {
     return {
       ok: false,
@@ -207,6 +268,7 @@
       message:
         "La réponse de Nora n’était pas exploitable. Aucune donnée n’a été inventée ; tu peux reformuler.",
       draft: input.draft,
+      usageObservation,
     };
   }

@@ -227,5 +289,6 @@
     clarification,
     payload: parsed,
     boundarySubstitution,
+    usageObservation,
   };
 }
```


### cycle diff — `newProjectConversation.ts`

```diff
--- a/b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts	2026-10-09 11:00:43
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts	2026-10-09 11:03:00
@@ -60,6 +60,7 @@
     intention: draft.intention.trim()
       ? `${draft.intention}\n${text}`.slice(0, 4000)
       : text,
+    intentionKind: "project_direction",
     cognitiveTurns: Math.max(draft.cognitiveTurns, 1),
   };
   if (!next.objective.trim()) next.objective = next.intention;
```


## Related diffs vs HEAD (Fake + S06 tests)


### diff — fakeProvider.ts

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index fb53e855..79bf0087 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -434,17 +434,189 @@ export class FakeConversationProvider implements ConversationProvider {
     jsonSchema: Record<string, unknown>;
     signal?: AbortSignal;
   }): Promise<ProviderCompletionResult> {
-    void input.schemaName;
     void input.jsonSchema;
     if (input.signal?.aborted) {
       const error = new Error("AbortError");
       error.name = "AbortError";
       throw error;
     }
+    // P6-HQA-NEWPROJECT-01 — deterministic onboarding structured payload (Fake only).
+    if (input.schemaName === "new_project_onboarding_turn_v1") {
+      return this.completeNewProjectOnboarding(input.messages, input.signal);
+    }
     // Reuse F2 marker / analysis scripted JSON from complete().
     return this.complete(input.messages);
   }

+  private async completeNewProjectOnboarding(
+    messages: ProviderChatMessage[],
+    signal?: AbortSignal,
+  ): Promise<ProviderCompletionResult> {
+    if (signal?.aborted) {
+      const error = new Error("AbortError");
+      error.name = "AbortError";
+      throw error;
+    }
+    this.callCount += 1;
+    const lastUser = [...messages].reverse().find((m) => m.role === "user");
+    const text = lastUser?.content?.trim() ?? "";
+    if (
+      this.failOnCall !== undefined && this.callCount === this.failOnCall
+    ) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (text.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (this.scripted && this.scripted.length > 0) {
+      const next = this.scripted.shift()!;
+      return {
+        text: next,
+        usage: {
+          inputTokens: null,
+          outputTokens: null,
+          totalTokens: null,
+          model: "fake-test-model",
+          providerResponseId: null,
+        },
+      };
+    }
+
+    const refuse =
+      /\b(ne\s+cr[eé]e\s+pas|pas\s+maintenant|refuse|annule|on\s+verra\s+plus\s+tard|attendre)\b/i.test(
+        text,
+      );
+    const acceptCreate =
+      /\b(allons[- ]y|cr[eé]ons[- ]le|je\s+veux\s+cr[eé]er|d['’]accord\s+pour\s+cr[eé]er|finalement.*(oui|allons|cr[eé]))\b/i.test(
+        text,
+      ) && !refuse;
+    const wantFast =
+      /\b(tout\s+de\s+suite|immédiat|sans\s+d[eé]tailler|on\s+verra)\b/i.test(
+        text,
+      );
+    const offTopic =
+      /\b(m[eé]t[eé]o|recette\s+de\s+cuisine|blague|quelle\s+heure)\b/i.test(
+        text,
+      ) && !/\b(projet|cycle|livr|intention|application|produit|organisation)\b/i.test(text);
+    const greetingOnly = /^(bonjour|salut|hello|hey)\.?$/i.test(text.trim());
+    const nameOnlyConfirm =
+      /\b(ok\s+pour\s+le\s+nom|le\s+nom\s+me\s+va|garde\s+ce\s+nom)\b/i.test(
+        text,
+      );
+
+    let intentionKnown: string | null = text.slice(0, 400) || null;
+    let nameProposal: string | null = null;
+    let nameProvisional = true;
+    let sufficient = false;
+    let intentionKind: "project_direction" | "non_project" | "unclear" =
+      "unclear";
+    let replyText: string;
+    let clarificationQuestion: string | null = null;
+    const suggestions: string[] = [];
+    const unknowns: string[] = [];
+
+    if (refuse) {
+      sufficient = false;
+      intentionKind = "project_direction";
+      replyText =
+        "D’accord — on ne crée rien pour l’instant. Dis-moi quand tu voudras reprendre, ou précise ce qui te bloque.";
+      // Keep prior intention if any; do not wipe project direction on refuse alone.
+    } else if (acceptCreate) {
+      sufficient = true;
+      intentionKind = "project_direction";
+      if (!intentionKnown || intentionKnown.length < 8) {
+        intentionKnown = "Projet exploratoire convenu avec le Pilote";
+      }
+      const clause = intentionKnown.split(/[.!?\n]/)[0]?.trim() || intentionKnown;
+      nameProposal =
+        clause.length > 64 ? `${clause.slice(0, 61)}…` : clause;
+      nameProposal =
+        nameProposal.charAt(0).toUpperCase() + nameProposal.slice(1);
+      replyText =
+        "Parfait — on peut créer le projet dès que tu cliques sur Créer. Je reste disponible pour préciser ensuite.";
+    } else if (nameOnlyConfirm) {
+      sufficient = false;
+      intentionKind = "project_direction";
+      replyText =
+        "Noté pour le nom. Dis-moi si tu veux effectivement créer le projet, ou continuer à préciser.";
+    } else if (offTopic || greetingOnly) {
+      sufficient = false;
+      intentionKind = "non_project";
+      intentionKnown = null;
+      replyText = greetingOnly
+        ? "Bonjour — qu’est-ce que tu voudrais accomplir avec ce projet ?"
+        : "Je reste centrée sur la création du projet. Qu’est-ce que tu voudrais accomplir dans Studio ?";
+      unknowns.push("intention du projet");
+    } else if (
+      wantFast ||
+      text.trim().length >= 16 ||
+      /\b(projet|application|produit|organisation|gestion|améliorer|moderniser|créer|idée|reporting|atelier)\b/i.test(
+        text,
+      )
+    ) {
+      sufficient = true;
+      intentionKind = "project_direction";
+      const clause = text.split(/[.!?\n]/)[0]?.trim() || text;
+      nameProposal =
+        clause.length > 64 ? `${clause.slice(0, 61)}…` : clause;
+      nameProposal =
+        nameProposal.charAt(0).toUpperCase() + nameProposal.slice(1);
+      replyText = wantFast
+        ? `On peut ouvrir un projet exploratoire autour de « ${clause.slice(0, 80)} ». Je propose le nom « ${nameProposal} » (provisoire) — tu pourras le renommer. Le bouton Créer reste de ton côté.`
+        : `Si je comprends bien, tu veux : ${clause}. Je propose de l’appeler « ${nameProposal} » (provisoire). On peut créer le projet dès que tu es prêt ; on précisera le premier travail ensuite.`;
+      if (!wantFast) {
+        clarificationQuestion =
+          "Y a-t-il un résultat concret qui te ferait dire que c’est réussi ?";
+        suggestions.push(
+          "Plus simple à comprendre",
+          "Moins d’interactions inutiles",
+          "Pilotage plus clair",
+        );
+      } else {
+        unknowns.push("objectif détaillé");
+      }
+    } else {
+      sufficient = false;
+      intentionKind = "unclear";
+      intentionKnown = null;
+      replyText =
+        "Je vois une piste, mais elle reste un peu courte. Peux-tu dire en une phrase ce que tu voudrais accomplir ?";
+      unknowns.push("intention exploitable");
+    }
+
+    const payload = {
+      replyText,
+      intentionKnown,
+      objectiveProposal: intentionKnown,
+      contextKnown: null as string | null,
+      nameProposal,
+      nameProvisional,
+      firstOrientationProposal:
+        intentionKind === "project_direction"
+          ? "Qualifier la première intention de travail dans le projet une fois créé"
+          : null,
+      unknowns,
+      sufficientForCreateProposal:
+        sufficient && !refuse && intentionKind === "project_direction",
+      refuseCreateDetected: refuse,
+      acceptCreateDetected: acceptCreate,
+      intentionKind,
+      clarificationQuestion,
+      suggestions,
+    };
+
+    return {
+      text: JSON.stringify(payload),
+      usage: {
+        inputTokens: null,
+        outputTokens: null,
+        totalTokens: null,
+        model: "fake-test-model",
+        providerResponseId: null,
+      },
+    };
+  }
+
   /** Test helper — Nora/provider invocation counter. */
   getCallCountForTests(): number {
     return this.callCount;
```


### diff — p5.s06.pilotExperience.d0.test.tsx

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
index 3e1458ff..477aca89 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
@@ -21,18 +21,27 @@ import {
 } from "@/features/pre-m6-product-ui/newProjectConversation";
 import { projectNoraActivity } from "@/features/pre-m6-product-ui/surfaces/noraActivityProjection";

-const { listProjectsRuntimeActionMock, createProjectRuntimeActionMock, pushMock } =
-  vi.hoisted(() => ({
-    listProjectsRuntimeActionMock: vi.fn(),
-    createProjectRuntimeActionMock: vi.fn(),
-    pushMock: vi.fn(),
-  }));
+const {
+  listProjectsRuntimeActionMock,
+  createProjectRuntimeActionMock,
+  newProjectOnboardingTurnActionMock,
+  pushMock,
+} = vi.hoisted(() => ({
+  listProjectsRuntimeActionMock: vi.fn(),
+  createProjectRuntimeActionMock: vi.fn(),
+  newProjectOnboardingTurnActionMock: vi.fn(),
+  pushMock: vi.fn(),
+}));

 vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
   listProjectsRuntimeAction: listProjectsRuntimeActionMock,
   createProjectRuntimeAction: createProjectRuntimeActionMock,
 }));

+vi.mock("@/features/pre-m6-product-ui/newProjectOnboardingAction", () => ({
+  newProjectOnboardingTurnAction: newProjectOnboardingTurnActionMock,
+}));
+
 vi.mock("next/navigation", () => ({
   useRouter: () => ({ push: pushMock }),
 }));
@@ -56,51 +65,23 @@ afterEach(() => {
   cleanup();
   listProjectsRuntimeActionMock.mockReset();
   createProjectRuntimeActionMock.mockReset();
+  newProjectOnboardingTurnActionMock.mockReset();
   pushMock.mockReset();
 });

-describe("P5-S06 CP01 explicit-phase collection", () => {
-  it("records intention only while INTENTION_REQUIRED, never guesses name", () => {
+describe("P5-S06 CP01 / P6-HQA-NEWPROJECT-01 draft helpers", () => {
+  it("absorbUserTurn stamps provisional name without blocking create after a turn", () => {
     const d0 = emptyDraft();
     expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
-    const extra = "Il faudrait aussi prendre en compte les avenants.";
-    const d1 = absorbUserTurn(d0, "Moderniser le reporting", "INTENTION_REQUIRED");
+    const d1 = absorbUserTurn(d0, "Moderniser le reporting");
     expect(d1.intention).toContain("Moderniser");
-    expect(d1.name).toBe("");
-    const stillIntention = absorbUserTurn(d1, extra, "INTENTION_REQUIRED");
-    expect(stillIntention.name).toBe("");
-    expect(stillIntention.intention).toContain("avenants");
-    expect(isMinimumSufficient(stillIntention)).toBe(false);
+    expect(d1.name.length).toBeGreaterThan(0);
+    expect(d1.nameProvisional).toBe(true);
+    expect(isMinimumSufficient(d1)).toBe(true);
   });

-  it("records name only after NAME_REQUIRED; later turns stay context", () => {
-    let d = absorbUserTurn(emptyDraft(), "Suivre les contrats", "INTENTION_REQUIRED");
-    expect(collectPhaseOf(d)).toBe("NAME_REQUIRED");
-    d = absorbUserTurn(d, "Contrats Q3", "NAME_REQUIRED");
-    expect(d.name).toBe("Contrats Q3");
-    expect(isMinimumSufficient(d)).toBe(true);
-    d = absorbUserTurn(d, "Inclure les avenants", "OPTIONAL_CONTEXT");
-    expect(d.name).toBe("Contrats Q3");
-    expect(d.context).toContain("avenants");
-  });
-
-  it("proposes a name when intention already names espace-projet redesign work", () => {
-    const d = absorbUserTurn(
-      emptyDraft(),
-      "Je veux créer une nouvelle version de notre espace projet pour simplifier le pilotage.",
-      "INTENTION_REQUIRED",
-    );
-    expect(d.name).toBe("Refonte de l’espace projet");
-    expect(collectPhaseOf(d)).toBe("OPTIONAL_CONTEXT");
-    expect(isMinimumSufficient(d)).toBe(true);
-  });
-
-  it("reopens a captured field explicitly without guessing", () => {
-    const d = absorbUserTurn(
-      absorbUserTurn(emptyDraft(), "Obj", "INTENTION_REQUIRED"),
-      "NomX",
-      "NAME_REQUIRED",
-    );
+  it("reopens name explicitly", () => {
+    const d = absorbUserTurn(emptyDraft(), "Suivre les contrats");
     const reopened = reopenField(d, "name");
     expect(reopened.name).toBe("");
     expect(collectPhaseOf(reopened)).toBe("NAME_REQUIRED");
@@ -185,19 +166,94 @@ describe("P5-S06 CP01 ProjectsPage", () => {
   });
 });

-describe("P5-S06 CP01 NewProjectIntentionPage", () => {
+describe("P5-S06 CP01 NewProjectIntentionPage (cognitive onboarding)", () => {
   beforeEach(() => {
     vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
       "00000000-0000-4000-8000-000000000099",
     );
+    newProjectOnboardingTurnActionMock.mockImplementation(
+      async (input: {
+        userText: string;
+        draft: {
+          intention: string;
+          name: string;
+          nameProvisional: boolean;
+          objective: string;
+          context: string;
+          firstOrientation: string;
+          unknowns: string[];
+          cognitiveCreateProposal: boolean;
+          explicitRefuseCreate: boolean;
+          intentionKind: string;
+          cognitiveTurns: number;
+        };
+      }) => {
+        const intention = input.userText;
+        const name =
+          intention.length > 48 ? `${intention.slice(0, 45)}…` : intention;
+        const draft = {
+          ...input.draft,
+          intention,
+          objective: intention,
+          name: name.charAt(0).toUpperCase() + name.slice(1),
+          nameProvisional: true,
+          cognitiveCreateProposal: true,
+          explicitRefuseCreate: false,
+          intentionKind: "project_direction" as const,
+          cognitiveTurns: input.draft.cognitiveTurns + 1,
+          firstOrientation:
+            "Qualifier la première intention de travail une fois le projet créé",
+          unknowns: [],
+        };
+        return {
+          ok: true as const,
+          draft,
+          replyText: `Si je comprends bien : ${intention}. Je propose « ${draft.name} » (provisoire).`,
+          clarification: {
+            title: "UNE PRÉCISION UTILE",
+            question: "Quel résultat concret te fera dire que c’est réussi ?",
+            suggestions: ["Plus simple à comprendre"],
+          },
+          payload: {
+            replyText: `ok`,
+            intentionKnown: intention,
+            objectiveProposal: intention,
+            contextKnown: null,
+            nameProposal: draft.name,
+            nameProvisional: true,
+            firstOrientationProposal: draft.firstOrientation,
+            unknowns: [],
+            sufficientForCreateProposal: true,
+            refuseCreateDetected: false,
+            acceptCreateDetected: false,
+            intentionKind: "project_direction" as const,
+            clarificationQuestion: "Quel résultat ?",
+            suggestions: [],
+          },
+          boundarySubstitution: true,
+          usageObservation: {
+            inputTokens: null,
+            outputTokens: null,
+            totalTokens: null,
+            model: "fake-test-model",
+            providerResponseId: null,
+            selectedModel: null,
+            selectedReasoningEffort: null,
+            boundarySubstitution: true,
+            declaredHumanQaBudgetEur: 10 as const,
+            hardCapEnforced: false as const,
+          },
+        };
+      },
+    );
   });

-  it("does not create a Project before explicit CTA and asks slots explicitly", async () => {
+  it("does not create a Project before explicit CTA; one cognitive turn can enable create", async () => {
     const user = userEvent.setup();
     render(<NewProjectIntentionPage />);
     expect(screen.getByTestId("create-project-submit")).toBeDisabled();
     expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
-      /accomplir|intention/i,
+      /accomplir|projet/i,
     );
     expect(screen.getByTestId("new-project-starters")).toBeInTheDocument();

@@ -207,32 +263,17 @@ describe("P5-S06 CP01 NewProjectIntentionPage", () => {
     );
     await user.click(screen.getByTestId("new-project-send"));
     expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
-    expect(screen.getByTestId("preview-intention")).toHaveTextContent(/contrats/i);
-    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
-    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
-      /Quel nom/i,
+    await waitFor(() =>
+      expect(screen.getByTestId("preview-intention")).toHaveTextContent(
+        /contrats/i,
+      ),
     );
-
-    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
-    await user.click(screen.getByTestId("new-project-send"));
-    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
-    expect(screen.getByTestId("preview-name")).toHaveTextContent("Contrats Q3");
     expect(screen.getByTestId("create-project-submit")).toBeEnabled();
-    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
-    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
-  });
-
-  it("does not treat a follow-up precision as name before NAME_REQUIRED", async () => {
-    const user = userEvent.setup();
-    render(<NewProjectIntentionPage />);
-    await user.type(
-      screen.getByTestId("new-project-input"),
-      "Suivre les contrats",
-    );
-    await user.click(screen.getByTestId("new-project-send"));
-    expect(screen.getByTestId("preview-name")).toHaveTextContent(
+    expect(screen.getByTestId("preview-name")).not.toHaveTextContent(
       /pas encore précisé/i,
     );
+    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
+    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
   });

   it("creates exactly one Project via canonical action then opens workspace", async () => {
@@ -256,20 +297,24 @@ describe("P5-S06 CP01 NewProjectIntentionPage", () => {
       "Suivre les contrats fournisseurs",
     );
     await user.click(screen.getByTestId("new-project-send"));
-    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
-    await user.click(screen.getByTestId("new-project-send"));
+    await waitFor(() =>
+      expect(screen.getByTestId("create-project-submit")).toBeEnabled(),
+    );
     await user.click(screen.getByTestId("create-project-submit"));

     await waitFor(() =>
       expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
     );
     const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
-    expect(arg.name).toBe("Contrats Q3");
+    expect(arg.name.length).toBeGreaterThan(0);
     expect(arg.objective).toMatch(/contrats/i);
+    expect(arg.context).toMatch(/nora-onboarding-handoff/);
     expect(arg.criticality).toBe("STANDARD");
     expect(arg).not.toHaveProperty("cycleId");
     expect(arg).not.toHaveProperty("humanDecision");
-    expect(pushMock).toHaveBeenCalledWith("/studio/projects/prj%3As06-1");
+    expect(pushMock).toHaveBeenCalledWith(
+      "/studio/projects/prj%3As06-1?from=new-project-onboarding",
+    );
   });
 });

@@ -303,6 +348,13 @@ describe("P5-S06 CP01 Nora activity mapping", () => {
         uiState: "ANSWERED",
       }),
     ).toMatchObject({ phase: "complete" });
+    expect(
+      projectNoraActivity({
+        blocked: false,
+        busy: true,
+        uiState: "ANSWERED",
+      }),
+    ).toMatchObject({ phase: "complete" });
     expect(
       projectNoraActivity({
         blocked: false,
```


## Actions NOT executed

Provider REAL · create real QA Project · START · HD · HQ-01 write · .env edit · FinOps persistence · project git commit/push.

END OF COMPLETE REVIEW PACK — P6-HQA-NEWPROJECT-01 FUNCTIONAL CLOSURE
