# PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — CORR-02
## Cycle 8 — Delivery / implémentation
## FULL Review Pack — Cursor → ChatGPT (C2 Product-turn proof-only)

Generated: 2026-09-26T08:54:30Z
Macro: PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01
Correction: CORR-02 — C2 PRODUCT-TURN INTEGRATION PROOF
Nature: PROOF-ONLY — no functional Product change
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Prior CORR-01 handoff: commit eb069b8fc2a62d11837edfa64d96a59a985dd1dd / blob ae9e62968631bd6758993050ffadb327c9c0c0d4
Morris GO consumed: **GO CORR-02 — C2 PRODUCT-TURN INTEGRATION PROOF**
Cursor REAL: NOT RUN
OpenAI LIVE: NOT RUN
StudyFlow Product mutation: NONE
Project commit/push/PR: NONE

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `feat/sfia-studio-pilot-nora-studio-semantic-continuity-01` |
| HEAD / origin/main | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| Project commit | **NOT COMMITTED** |
| Project push | **NOT PUSHED** |
| Production files this cycle | **READ-ONLY / UNCHANGED** |

---

## 2. PRIOR STATE

| Finding | Status before CORR-02 |
|---------|----------------------|
| C1 mixed valid+invented | CLOSED |
| C3 HD cutoff product-wired | CLOSED |
| C4 UNAVAILABLE | CLOSED |
| PresentedOptionSet stale Product-path | CLOSED |
| Post-HD reload | CLOSED |
| C2 Product-turn orchestrator proof | **RESERVE → closed by this proof** |

---

## 3. TEST ADDED

File:
`projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts`

Two cases:
1. Invented syntactically valid `opt:trajectory:invented` → orchestrateProjectAssistantTurn → `ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID`
2. Positive control: `opt:trajectory:governed-gated` ∈ server OptionRefs → C2 does not reject; ACW persists; LPS advances; Pilot structured line present

---

## 4. HARNESS

Reused:
- `orchestrateProjectAssistantTurn` (real Product orchestration)
- `FakeConversationProvider` scripted structured JSON (fake model boundary only)
- `w2Harness` bootW2Runtime + seedQualifiedProject (isolated Product SQLite)
- `resolveTrajectoryDecisionSupportProjection` for PRESENT server OptionRefs
- `composeStudioCognitiveContext` carrying that TDS

Test-only helper (not production):
- forge cycle `acknowledged` → `active` so workEligible=true for positive ACW path
  (same forge pattern as BAR-WORK-09 inverted)

Did NOT:
- call `validateActiveCycleRecommendationAgainstDecisionSupport` as primary proof
- call `materializeActiveCycleWork` manually for the invented assertion
- mutate StudyFlow / OpenAI LIVE

---

## 5. FAKE BOUNDARY

Fake: ConversationProvider / completeStructured scripted Nora Product turn JSON.
REAL corresponding: OpenAI structured Nora response.
Product path: REAL orchestration + isolated persistence.

---

## 6. PRE-STATE (invented case)

Captured before turn:
- LPS version
- ACW item count (ACTIVE_CYCLE_WORK_SOURCE)
- HumanDecision count

TDS: state=PRESENT with GOVERNED / BOUNDED / CLARIFY; invented ref absent.
Invented ref passes `normalizeActiveCycleRecommendedOptionRef` (syntax OK).

---

## 7. ACTUAL ORCHESTRATOR INVOCATION

`orchestrateProjectAssistantTurn({ projectId, content, provider: FakeConversationProvider, studioCognitiveContext with PRESENT TDS, turnCorrelationId, simulateMemoryBUnavailable: true })`

Primary assertion path = orchestrator guard in orchestrateTurn.ts (C2 validation before ACW write).

---

## 8. RESULTS — INVENTED

| Assertion | Observed |
|-----------|----------|
| ok | false |
| status | validation_error |
| code | ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID |
| ACW new items | 0 (count unchanged) |
| invented ref in Epistemic | absent |
| LPS version | unchanged |
| Pilot text | absent on failure (no structured Recommendation line) |
| W2 PresentedOptionSet from invented | none (ACW path does not invoke W2 presentation; no durable invented-ref object) |
| HumanDecision | unchanged count |
| Trajectory promotion | none |

---

## 9. RESULTS — POSITIVE CONTROL

| Assertion | Observed |
|-----------|----------|
| C2 rejection | NOT fired |
| ok | true |
| ACW Recommendation with governed-gated | persisted |
| LPS version | advanced (ACW materialization) |
| Pilot text | contains `Recommandation structurée (pas une décision)` |
| invented ref in text | absent |

---

## 10. FILES MODIFIED

### This cycle (tests only)
- `__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts` **(new)**

### Production
**NONE**

---

## 11. TARGETED TESTS

6 files / **92** passed / 0 failed:
- corr02.c2ProductTurn (2)
- continuity.d0 (15)
- corr01.d0 (5)
- activeCycleCognitiveWork.d0 (57)
- orchestrateTurn.test
- importBoundaries

---

## 12. FULL VALIDATION

| Check | Result |
|-------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| vitest full | **426** files passed / **17** skipped · **4707** passed / **137** skipped · **0** failed |

Delta vs CORR-01 baseline (425 / 4705): +1 file / +2 tests (CORR-02).

---

## 13. CURRENTNESS MODEL RESERVE

Retained without change:
CURRENTNESS SUBJECT MODEL RESERVE —
scope = `trajectory_option` + active cycle.

Future multi-subject refinement (sourceRef / trajectoryId / optionSet) out of CORR-02.

---

## 14. FAKE / REAL

**DETERMINISTIC PRODUCT-TURN C2 FAIL-CLOSED PROVEN**

NOT claimed: OpenAI LIVE · StudyFlow E2E · Cursor REAL · docs_write REAL · runtime v3 ADOPTED · GO REAL.

---

## 15. ANTI-CLAIMS

Not claimed: OpenAI LIVE proven · StudyFlow natural E2E proven · Cursor REAL proven · docs_write REAL proven · runtime v3 ADOPTED · Product globally READY · Product Completion complete · Nora Cognitive Completion complete · GAP-15 closed · Roadmap synced · GO REAL · PR ready · merge ready.

---

## 16. FINAL VERDICT

**C2 PRODUCT-TURN FAIL-CLOSED — DETERMINISTICALLY PROVEN / READY FOR CHATGPT FINAL REVIEW**

Project Git: **LOCAL / NOT COMMITTED / NOT PUSHED**

---

## 17. EXPLOITABLE TEST SOURCE

### pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts

```ts
// @vitest-environment node
/**
 * CORR-02 — C2 PRODUCT-TURN INTEGRATION PROOF (proof-only).
 *
 * Exercises real orchestrateProjectAssistantTurn with FakeConversationProvider
 * structured output. Does NOT call the C2 validator as the primary assertion.
 * ZERO production code change. Isolated Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveTrajectoryDecisionSupportProjection } from "@/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { ACTIVE_CYCLE_WORK_SOURCE } from "@/features/project-assistant/materializeActiveCycleWork";
import { normalizeActiveCycleRecommendedOptionRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
} from "./w2Harness";

const INVENTED_REF = "opt:trajectory:invented";

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

const sessionDirs: string[] = [];

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  while (sessionDirs.length) {
    const d = sessionDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function sessionDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "corr02-sess-"));
  sessionDirs.push(dir);
  return path.join(dir, name);
}

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
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
    executionIntent: null,
  };
}

function acwProductTurn(
  items: NoraActiveCycleWorkItem[],
  narrative: string,
): string {
  return JSON.stringify({
    narrative,
    preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
    lifecycleRecommendation: null,
    activeCycleWork: { items },
    conversationGuidance: {
      kind: "RECOMMEND_NEXT_STEP",
      scope: "ACTIVE_CYCLE",
      statement: narrative,
      rationale: "corr02-structured-fixture",
    },
  });
}

async function projectDtoFromSeeded(
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>,
  projectId: string,
): Promise<ProjectAssistantContextDto> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
  const pin =
    project.project.doctrinePackageRef ??
    lps.livingProjectState.doctrinePackageRef;
  const state = lps.livingProjectState;
  return {
    projectId,
    name: project.project.title,
    shortReference: null,
    objective: state.objective,
    contextSummary: state.context ?? "",
    criticality: "STANDARD",
    constraints: [...(state.constraints ?? [])],
    lpsId: state.lpsVersionId,
    lpsVersion: state.version,
    lpsCreatedAt: state.createdAt,
    doctrineId: pin.doctrinePackageId,
    doctrineVersion: pin.version,
    doctrineDigest: pin.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
    ckcResolutionRef: state.ckcResolutionRef ?? null,
  };
}

/**
 * seedQualifiedProject creates Light/Standard cycles as `acknowledged`.
 * ACW materialization requires status=`active` (workEligible).
 * Test-only transition — same pattern as BAR-WORK-09 pause forge, inverted.
 */
async function forgeCycleActiveForAcw(
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>,
  cycleInstanceId: string,
): Promise<void> {
  const loaded = await oa.cycleServices.getCycle.execute({ cycleInstanceId });
  expect(loaded.ok).toBe(true);
  if (!loaded.ok) throw new Error("cycle missing");
  await oa.cycleServices.cycles.save({
    ...structuredClone(loaded.cycle),
    status: "active",
  });
}

async function composeWithDecisionSupport(input: {
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>;
  projectId: string;
  cycleInstanceId: string;
}) {
  await forgeCycleActiveForAcw(input.oa, input.cycleInstanceId);
  const tds = await resolveTrajectoryDecisionSupportProjection({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(tds.state).toBe("PRESENT");
  expect(tds.optionRefs).toEqual(
    expect.arrayContaining([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]),
  );
  const dto = await projectDtoFromSeeded(input.oa, input.projectId);
  const composed = await composeStudioCognitiveContext({
    analysis: analysisStub(),
    project: dto,
    registryRoot: W2_REGISTRY_ROOT,
    oa: input.oa,
    activeCycleInstanceId: input.cycleInstanceId,
    trajectoryDecisionSupport: tds,
  });
  expect(composed.ok).toBe(true);
  if (!composed.ok) throw new Error(composed.code);
  expect(composed.context.trajectoryDecisionSupport.state).toBe("PRESENT");
  expect(composed.context.activeCycle?.status).toBe("active");
  expect(composed.context.activeCycle?.workEligible).toBe(true);
  return { tds, composed: composed.context };
}

describe("CORR-02 C2 Product-turn integration proof", () => {
  it("invented syntactically-valid recommendedOptionRef → ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID via orchestrateProjectAssistantTurn", async () => {
    // Sanity: invented passes syntactic normalize (semantic membership is the guard).
    expect(normalizeActiveCycleRecommendedOptionRef(INVENTED_REF)).toBe(
      INVENTED_REF,
    );

    const db = tempProductDbPath("corr02-invented.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c02i" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c02i" });
    const oa = runtime.oa!;

    const { tds, composed } = await composeWithDecisionSupport({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.optionRefs).not.toContain(INVENTED_REF);

    // Pre-state
    const lpsBefore =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const lpsVersionBefore = lpsBefore.livingProjectState.version;
    const epistemicBefore = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const acwBefore = epistemicBefore.filter(
      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
    );
    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );

    const provider = new FakeConversationProvider({
      scripted: [
        acwProductTurn(
          [
            {
              type: "Recommendation",
              statement:
                "Tenter une voie inventée hors Options serveur (fixture CORR-02).",
              confidence: "high",
              blocking: null,
              recommendedOptionRef: INVENTED_REF,
            },
          ],
          "Diagnostic clarifié — recommandation structurée inventée.",
        ),
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId: seeded.projectId,
      content: "Le diagnostic est clarifié — que recommandes-tu ?",
      sessionDbPath: sessionDbPath("corr02-invented-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed,
      turnCorrelationId: "ltu:corr02:invented",
    });

    // A — turn result through real orchestrator
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected validation_error");
    expect(result.status).toBe("validation_error");
    expect(result.code).toBe("ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID");

    // D — validation_error has no successful Pilot-facing structured Recommendation
    expect(
      "text" in result ? (result as { text?: string }).text : undefined,
    ).toBeUndefined();
    expect(result.message).not.toMatch(/Recommandation structurée/);
    expect(result.message).not.toContain(INVENTED_REF);

    // B — no ACW Recommendation with invented ref; no new ACW items
    const epistemicAfter = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const acwAfter = epistemicAfter.filter(
      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
    );
    expect(acwAfter.length).toBe(acwBefore.length);
    expect(
      acwAfter.some(
        (e) =>
          e.type === "Recommendation" &&
          (e.relatedObjects ?? []).includes(INVENTED_REF),
      ),
    ).toBe(false);

    // C — LPS version unchanged (C2 rejects before ACW materialization)
    const lpsAfter =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBe(lpsVersionBefore);

    // E — no durable object referencing invented ref (orchestrateTurn does not
    // invoke W2 presentation on this ACW path; assert no invented-ref object).
    expect(
      epistemicAfter.some((e) =>
        (e.relatedObjects ?? []).includes(INVENTED_REF),
      ),
    ).toBe(false);

    // F — no HumanDecision / promotion / execute
    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(traj.ok).toBe(false);
  });

  it("positive control — valid recommendedOptionRef is not rejected by C2", async () => {
    const db = tempProductDbPath("corr02-valid.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c02v" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c02v" });
    const oa = runtime.oa!;

    const { tds, composed } = await composeWithDecisionSupport({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.optionRefs).toContain(GOVERNED_OPTION_REF);

    const lpsBefore =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const lpsVersionBefore = lpsBefore.livingProjectState.version;

    const provider = new FakeConversationProvider({
      scripted: [
        acwProductTurn(
          [
            {
              type: "Recommendation",
              statement:
                "Préparer une nouvelle tentative gouvernée (fixture CORR-02 positive).",
              confidence: "high",
              blocking: null,
              recommendedOptionRef: GOVERNED_OPTION_REF,
            },
          ],
          "Recommendation structurée valide parmi Options serveur.",
        ),
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId: seeded.projectId,
      content: "Recommande parmi les options serveur.",
      sessionDbPath: sessionDbPath("corr02-valid-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed,
      turnCorrelationId: "ltu:corr02:valid",
    });

    // Must not be rejected by C2 membership guard.
    if (!result.ok) {
      expect(result.code).not.toBe(
        "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
      );
    }
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    // Successful path persists ACW Recommendation for the valid ref.
    const epistemicAfter = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const acwRec = epistemicAfter.find(
      (e) =>
        e.source === ACTIVE_CYCLE_WORK_SOURCE &&
        e.type === "Recommendation" &&
        (e.relatedObjects ?? []).includes(GOVERNED_OPTION_REF),
    );
    expect(acwRec).toBeTruthy();

    const lpsAfter =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    // Valid ACW materialization advances LPS (contrast with invented fail path).
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      lpsVersionBefore,
    );

    // Pilot-facing structured line derived from same canonical option.
    expect(result.text).toMatch(
      /Recommandation structurée \(pas une décision\)/i,
    );
    expect(result.text).not.toContain(INVENTED_REF);
  });
});
```
