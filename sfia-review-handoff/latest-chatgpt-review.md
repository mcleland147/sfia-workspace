# Review Pack FULL — NORA P1/P2 FINAL PRODUCT PROOF CLOSURE 01

at_europe_paris: 2026-10-12 13:04:48 CEST
at_utc: 2026-10-12T11:04:48Z
level: FULL
profile: CRITICAL
cycleType: 9 — QA / validation
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
pass: FINAL PRODUCT PROOF CLOSURE 01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
chantier: NORA-ADAPTIVE-COGNITIVE-EXECUTION-CONTINUATION-01
mode: QA ONLY — PROVE, DO NOT REBUILD
workspace: /Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
repository: mcleland147/sfia-workspace
branch: qa/p6-hqa-02-rec01-human-qa
HEAD: f31bb8f610802c102edbe68889fb8ecf0339ec28
origin/main: f31bb8f610802c102edbe68889fb8ecf0339ec28
prior_handoff: commit 5380c5056bef41ea4a1bdedb1e70612de05e6f3e / blob e6fbb7bca99a7ab4736b6c11c5e0ff3ecdc9d6e1
runtime_modified: NONE (tests only)
git_integration: NONE
real: NON

---

## 1. GO Morris consommé

Autorisation: vérification déterministe ciblée + ajustement minimal des tests.
Non autorisé: nouvelle fonctionnalité; modification runtime métier; architecture/persistence; REAL; commit/push projet; PR; merge; Runtime v3.

---

## 2. Local Git Truth Check

| Check | Result |
|---|---|
| pwd | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| staged | **none** |
| dirty | P0+P1+P2+TV01 candidate préservé |
| this-pass delta | tests only — `p6.nora.p1p2.targetedVerification.d0.test.ts` |
| STOP Git | **not triggered** |

---

## 3. Sources consultées

Gouvernance: build-doctrine, roadmap, C1.
v3: 33, 34, 35, 37 (cible — Runtime v3 NON ADOPTED).
Nora: `08-nora-openai-native-first-cognitive-trajectory.md`.
P6: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`.
CKC: `ckc/09-qa-validation.md`.
v2.6 process: cycle-execution-template, routing-guide, chatgpt-cursor-operating-model, rules-and-guardrails.
Prior handoff distant 5380c505 (TV01 corrections + réserves CR-TV01-01/02).

---

## 4. Convergence Pre-check

Capacité: autonomie cognitive fiable + continuité conversationnelle + honesty.
Milestone: P6 GLOBAL INTEGRATED PRODUCT QA.
Entrée: P0+P1+P2+TV01 locaux; DETERMINISTIC VERIFIED AT TARGETED PRODUCT CONTINUITY SCOPE.
Gaps fermés ce pass: CR-TV01-01, CR-TV01-02.
Dette conservée: Cross-restart RunState = DEFER.
Aucune architecture parallèle.

---

## 5. CR-TV01-01 — Product adaptive wiring

### Oracle
1. Entry = `runNoraCognitiveTurn` (pas reconstruction manuelle helpers → Agents).
2. Pas de `maxTurns`, pas de `strategyClass` forcé, pas d'`adaptiveMaxTurnsDecision` injecté, pas d'`evalModelReasoningControl`.
3. `FakeConversationProvider` (chemin Product Fake → Agents adapter).
4. `turnWorkloadContext` Product-like.
5. Assert `adaptiveObserve.explicitOverride===false`, budget 8–10, ceiling 10, strategyClass ∈ {Focused,Deep,High-Assurance}.
6. Static: `orchestrateTurn.ts` appelle `runNoraCognitiveTurn` et ne contient pas `maxTurns:`; DTO types sans champ `maxTurns`.
7. Bare "document" n'élève pas Deep (CR-TV01-01b).

### Preuve
Test: `CR-TV01-01 — runNoraCognitiveTurn selects adaptive budget without maxTurns/strategy force` → **PASS**.

Niveau déclaré (sans surestimation):
**Product cognitive entry proven via runNoraCognitiveTurn** (+ static orchestrateTurn no-maxTurns).
**Pas revendiqué:** Product E2E UI→orchestrateTurn→Runner PASS (orchestrateTurn complet non exercé runtime; preuve statique du non-passage maxTurns).

### Verdict CR-TV01-01
**CLOSED**

---

## 6. CR-TV01-02 — Real history consumption

### Oracle
1. Mission multi-segment RunState → Session items persistés.
2. close/reopen Session ID + fingerprints identiques.
3. Nouveau tour: capturer `ScriptedModel.calls[0].request.input` (INPUT, pas OUTPUT).
4. Input contient: prior `COMPLETE_DOC`, `function_call` / tools, nouveau user follow-up.
5. Duplication: fingerprints adjacents distincts; callIds `function_call` uniques; une seule completion assistant.
6. Campaign: `consumedModelInvocations` after follow = after mission + followModel.calls.length (pas de double-charge).
7. `limitReached===false` sur follow-up (P0 honesty).

### Preuve empirique observée (@openai/agents Session)
- Session items après mission: tool pairs + assistant message (**pas** de message `role:user` pour l'utterance initiale).
- `ModelRequest.input` du tour suivant contient l'historique Session (tools + COMPLETE) + nouveau user.
- L'utterance utilisateur initiale n'est **pas** dans Session SoT / next-turn input sous le contrat Session observé (Runner string input ≠ Session message item).

### Réserve résiduelle (NON-BLOCKING)
**FPPC-RES-01** — Literal prior user utterance not persisted as Session AgentInputItem under observed SDK Session prepare path. Intention prior is carried by documentary tool/assistant trajectory in ModelRequest.input. Correction éventuelle = décision Morris (runtime/Session) — **hors scope QA READ-ONLY**.

### Verdict CR-TV01-02
**CLOSED** (historique Session réellement transmis au modèle; residual FPPC-RES-01 explicite, non bloquant pour le gap ChatGPT "INPUT vs RECALL_OK").

---

## 7. Non-régression consolidée

Commande:
```
npx vitest run \
  p6.nora.p1.adaptiveBudget.d0.test.ts \
  p6.nora.p1p2.targetedVerification.d0.test.ts \
  p6.nora.p1p2.documentary.mission.d0.test.ts \
  p6.nora.maxTurns.documentary.d0.test.ts \
  runner.d0.test.ts \
  p6.nora.p0.incomplete.panel.ux.d0.test.tsx \
  p6.nora.p0.productStatusHonesty.d0.test.ts \
  p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx
```

**Result: 8 files passed, 53 tests passed, 0 failed.**

Targeted/proof file alone: **7/7 PASS**.

TypeScript: `npx tsc -p tsconfig.json --noEmit` → **exit 0**.

`git diff --check`: clean on product sources (pack EOF normalized before publish).

---

## 8. Fake / Real Qualification

| Item | Value |
|---|---|
| Applicable | OUI |
| Substitut | FakeConversationProvider + ScriptedModel.calls capture |
| Niveau entrée | DETERMINISTIC VERIFIED AT TARGETED PRODUCT CONTINUITY SCOPE |
| Niveau sortie | **DETERMINISTIC VERIFIED AT PRODUCT WIRING + NEXT-TURN INPUT SCOPE** |
| Hors scope | REAL BOUNDARY / E2E REAL / P6 GLOBAL PASS / NORA COMPLETION / Runtime v3 ADOPTED |
| GO REAL | NON |

---

## 9. Fichiers modifiés ce pass

Runtime: **NONE** (READ-ONLY respecté).

Tests:
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts` (adapté — contenu complet §17)

Aucun autre fichier créé ce pass.

---

## 10. Réserves / dette

| ID | Verdict | Blocking |
|---|---|---|
| CR-TV01-01 | CLOSED | — |
| CR-TV01-02 | CLOSED | — |
| FPPC-RES-01 prior user utterance ∉ Session items | OPEN residual / NON-BLOCKING | No |
| Cross-restart RunState | DEFER | No |
| Eval maxTurns > adaptive 10 | NON-BLOCKING (TV01) | No |
| P0-EFFECT-02 store-level | NOT PROVEN historique | No |
| REAL documentary | NOT PROVEN | N/A |

---

## 11. Gate Morris suivant

Décision explicite d'intégration Git unique:
P0 + P1 + P2 + TV01 + FINAL PRODUCT PROOF CLOSURE.

---

## 12. Verdict pack

**FINAL PRODUCT PROOF CLOSURE PASS / READY FOR CHATGPT CRITICAL REVIEW**

Niveau QA: DETERMINISTIC PRODUCT PROOF.
Statut: READY FOR REVIEW (après handoff distant vérifié).

Ne pas annoncer: READY FOR PR; P6 GLOBAL PASS; REAL PROVEN; NORA COGNITIVE COMPLETION PROVEN; Runtime v3 ADOPTED.

---

## 13. Git Review Index — fichier test adapté (contenu complet)

### p6.nora.p1p2.targetedVerification.d0.test.ts

```ts
/**
 * P6 Nora P1/P2 — TARGETED VERIFICATION 01 + FINAL PRODUCT PROOF CLOSURE 01.
 * Proof-first. ZERO REAL. Runtime READ-ONLY (tests only).
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { AgentInputItem } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  inferWorkloadHintsFromUserContent,
  resolveAdaptiveMaxTurns,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
} from "@/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
} from "@/lib/nora-cognitive-runtime/campaignBudget";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "COMPLETE_DOC_ANALYSIS_SYNTHESIS";
const MULTI_DOC_CONTENT =
  "Analyse plusieurs documents du projet, compare les sources et produis une synthèse argumentée.";
const dirs: string[] = [];

function tmpDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv01-"));
  dirs.push(dir);
  return path.join(dir, "session.sqlite");
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function documentaryScriptNeedingSevenModelTurns() {
  return [
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r1" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r2" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r3" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r4" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r5" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r6" })],
    [assistantMessage(COMPLETE_MARKER)],
  ];
}

/** Stable fingerprint for Session AgentInputItem — no invented IDs. */
function sessionItemFingerprint(item: AgentInputItem): string {
  const anyItem = item as Record<string, unknown>;
  const type = String(anyItem.type ?? "");
  const role = String(anyItem.role ?? "");
  const callId = String(anyItem.callId ?? anyItem.call_id ?? "");
  const name = String(anyItem.name ?? "");
  let content = "";
  if (typeof anyItem.content === "string") {
    content = anyItem.content;
  } else if (Array.isArray(anyItem.content)) {
    content = JSON.stringify(anyItem.content);
  } else if (typeof anyItem.text === "string") {
    content = anyItem.text;
  } else if (anyItem.arguments != null) {
    content = JSON.stringify(anyItem.arguments);
  }
  return `${type}|${role}|${callId}|${name}|${content}`;
}

/**
 * Undue duplication oracle against observed @openai/agents Session item shapes.
 * Observed ProductSqliteSession items after a tool-using mission are:
 * function_call / function_call_result pairs + assistant message(s).
 * The initial user string is Runner input, not a persisted Session message item
 * under this SDK path (residual limitation — documented in Review Pack).
 *
 * Detects:
 * - adjacent identical fingerprints (accidental double-append);
 * - duplicated function_call for the same callId;
 * - duplicated assistant completion marker.
 */
function assertNoUndueSessionDuplication(
  items: AgentInputItem[],
  completionMarker: string,
): void {
  expect(items.length).toBeGreaterThan(0);
  const fingerprints = items.map(sessionItemFingerprint);
  for (let i = 1; i < fingerprints.length; i++) {
    expect(
      fingerprints[i],
      `adjacent duplicate Session item at index ${i}`,
    ).not.toBe(fingerprints[i - 1]);
  }

  const callIds = items
    .filter((item) => (item as { type?: string }).type === "function_call")
    .map((item) => String((item as { callId?: string }).callId ?? ""));
  expect(new Set(callIds).size).toBe(callIds.length);

  const assistantCompletions = items.filter((item) => {
    const anyItem = item as { type?: string; role?: string };
    return (
      anyItem.type === "message" &&
      anyItem.role === "assistant" &&
      sessionItemFingerprint(item).includes(completionMarker)
    );
  });
  expect(assistantCompletions.length).toBe(1);
}

function serializeModelInput(input: unknown): string {
  return JSON.stringify(input);
}

describe("FINAL PRODUCT PROOF — CR-TV01-01 Product adaptive wiring", () => {
  it("CR-TV01-01 — runNoraCognitiveTurn selects adaptive budget without maxTurns/strategy force", async () => {
    // True Product cognitive entry: runNoraCognitiveTurn → resolveCognitiveStrategyForTurn
    // → resolveAdaptiveMaxTurns → runNoraAgentsTurn. No maxTurns, no strategyClass force,
    // no precomputed adaptiveMaxTurnsDecision injection, no eval model pin.
    const dbPath = tmpDb();
    const provider = new FakeConversationProvider({
      scripted: [
        "[TEST/FAKE · NON LIVE] Synthèse documentaire déterministe via Runner.",
      ],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "cr-tv01-01-product",
      projectId: "prj:cr-tv01-01",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: MULTI_DOC_CONTENT },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
      turnWorkloadContext: {
        projectCriticality: "STANDARD",
        userContentLength: MULTI_DOC_CONTENT.length,
        historyMessageCount: 0,
        enableTools: true,
      },
      // Product-like: omit maxTurns, evalModelReasoningControl, cognitiveWorkloadSignals
    });

    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.adaptiveObserve).toBeTruthy();
    expect(result.adaptiveObserve?.explicitOverride).toBe(false);
    expect(result.adaptiveObserve?.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(result.adaptiveObserve?.requestedMaxTurns).toBeLessThanOrEqual(10);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBe(
      result.adaptiveObserve?.requestedMaxTurns,
    );
    expect(result.adaptiveObserve?.ceiling).toBe(10);
    expect(result.adaptiveObserve?.strategyClass).toBeTruthy();
    expect(["Focused", "Deep", "High-Assurance"]).toContain(
      result.adaptiveObserve?.strategyClass,
    );
    // P0 honesty: Fake completed → not incomplete/limitReached
    expect(result.limitReached).toBe(false);
    expect(result.text.length).toBeGreaterThan(0);

    // Static Product boundary: orchestrateTurn does not force maxTurns into cognitive turn.
    const orchSrc = fs.readFileSync(
      path.join(process.cwd(), "features/project-assistant/orchestrateTurn.ts"),
      "utf8",
    );
    expect(orchSrc).toMatch(/runNoraCognitiveTurn\s*\(/);
    expect(orchSrc).not.toMatch(/maxTurns\s*:/);
    const typesSrc = fs.readFileSync(
      path.join(process.cwd(), "features/project-assistant/types.ts"),
      "utf8",
    );
    expect(typesSrc).not.toMatch(/maxTurns\s*[?:]/);
  });

  it("CR-TV01-01b — bare word 'document' must NOT alone force Deep/high budget", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Please check this document briefly.",
    );
    expect(hints.sourceBreadth).not.toBe("high");
    expect(hints.toolDependency).not.toBe("high");
    const strategy = decideCognitiveStrategy({
      signals: {
        ambiguity: "unknown",
        reasoningDepth: "unknown",
        sourceBreadth: hints.sourceBreadth ?? "unknown",
        toolDependency: hints.toolDependency ?? "unknown",
        contradictionRisk: "unknown",
        contextSize: "low",
        verificationNeed: "unknown",
        multimodality: "unknown",
        latencySensitivity: "unknown",
        costBudget: "unknown",
        rigorCriticality: "medium",
      },
    });
    expect(strategy.strategyClass).not.toBe("Deep");
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(8);
  });

  it("CR-TV01-01c — multi-document analysis wording still elevates via Product hints", () => {
    const hints = inferWorkloadHintsFromUserContent(MULTI_DOC_CONTENT);
    expect(hints.sourceBreadth).toBe("high");
  });
});

describe("TARGETED VERIFICATION 01 — retained Product-like seam (historical)", () => {
  it("V01 — Agents seam wiring without maxTurns completes mission (not nominal Product entry)", async () => {
    const content = MULTI_DOC_CONTENT;
    const hints = inferWorkloadHintsFromUserContent(content);
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ...hints,
        rigorCriticality: "medium",
        contextSize: "medium",
      }),
    });
    const adaptive = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(adaptive.explicitOverride).toBe(false);

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv01-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:tv01-p1",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "tv01-p1-wiring",
      projectId: "prj:tv01-p1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: content,
      session,
      model: new ScriptedModel(documentaryScriptNeedingSevenModelTurns()),
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      cognitiveStrategyClass: strategy.strategyClass,
      adaptiveMaxTurnsDecision: adaptive,
      enableControlledContinuation: true,
    });
    expect(result.adaptiveObserve?.explicitOverride).toBe(false);
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    session.close();
  });
});

describe("TARGETED VERIFICATION 02 — override / FinOps boundary", () => {
  it("V02 — explicit maxTurns remains test/eval only; Product DTO has no maxTurns field", async () => {
    const typesSrc = fs.readFileSync(
      path.join(process.cwd(), "features/project-assistant/types.ts"),
      "utf8",
    );
    expect(typesSrc).not.toMatch(/maxTurns\s*[?:]/);
    const orchSrc = fs.readFileSync(
      path.join(process.cwd(), "features/project-assistant/orchestrateTurn.ts"),
      "utf8",
    );
    expect(orchSrc).not.toMatch(/maxTurns\s*:/);
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Routine",
      explicitMaxTurns: 12,
    });
    expect(d.explicitOverride).toBe(true);
    expect(d.requestedMaxTurns).toBe(12);
  });
});

describe("FINAL PRODUCT PROOF — CR-TV01-02 real history consumption", () => {
  it("CR-TV01-02 — next-turn ModelRequest.input contains prior Session history", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cr02-"));
    dirs.push(dir);
    const dbPath = path.join(dir, "session.sqlite");
    const projectId = "prj:cr-tv01-02";
    const firstUser =
      "Analyse plusieurs documents du projet et produis une synthèse.";

    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:cr-tv01-02",
      maxModelInvocations: 40,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 40,
    });

    const session1 = new ProductSqliteSession({ projectId, dbPath });
    const missionModel = new ScriptedModel(
      documentaryScriptNeedingSevenModelTurns(),
    );
    const first = await runNoraAgentsTurn({
      correlationId: "cr02-mission",
      projectId,
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: firstUser,
      session: session1,
      model: missionModel,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
      campaignBudget: campaign,
    });

    expect(first.continuationObserve?.continued).toBe(true);
    expect(first.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(first.limitReached).toBe(false);
    expect(first.text).toContain(COMPLETE_MARKER);

    const itemsAfterMission = await session1.getItems();
    assertNoUndueSessionDuplication(itemsAfterMission, COMPLETE_MARKER);
    expect(JSON.stringify(itemsAfterMission)).toMatch(/COMPLETE_DOC/i);
    // Observed SDK Session contract: tool/assistant items persist; initial user
    // string is Runner input and is not present as a Session message item.
    expect(
      itemsAfterMission.some((item) => {
        const anyItem = item as { type?: string; role?: string };
        return anyItem.type === "message" && anyItem.role === "user";
      }),
    ).toBe(false);

    const sessionId = await session1.getSessionId();
    session1.close();

    const session2 = new ProductSqliteSession({ projectId, dbPath });
    expect(await session2.getSessionId()).toBe(sessionId);
    const reopened = await session2.getItems();
    expect(reopened.length).toBe(itemsAfterMission.length);
    expect(reopened.map(sessionItemFingerprint)).toEqual(
      itemsAfterMission.map(sessionItemFingerprint),
    );

    const snapAfterMission = campaignBudgetSnapshot(campaign);
    const consumedAfterMission = snapAfterMission.consumedModelInvocations;

    const followModel = new ScriptedModel([
      [assistantMessage("FOLLOW_UP_ACK")],
    ]);
    const followUser =
      "Confirme que tu te souviens de la synthèse documentaire.";
    const followUp = await runNoraAgentsTurn({
      correlationId: "cr02-next",
      projectId,
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: followUser,
      session: session2,
      model: followModel,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: false,
      maxTurns: 3,
      enableControlledContinuation: false,
      cognitiveStrategyClass: "Routine",
      campaignBudget: campaign,
    });

    expect(followUp.limitReached).toBe(false);
    expect(followUp.text).toMatch(/FOLLOW_UP_ACK/);

    // Proof on MODEL INPUT — not on scripted output text.
    expect(followModel.calls.length).toBeGreaterThan(0);
    const firstFollowRequest = followModel.calls[0]!.request;
    const inputSerialized = serializeModelInput(firstFollowRequest.input);
    // Prior Session-conserved context actually reaches the model.
    expect(inputSerialized).toMatch(/COMPLETE_DOC/i);
    expect(inputSerialized).toMatch(/git_local_read_file/);
    expect(inputSerialized).toMatch(/function_call/);
    // New turn user content is also present in the same request input.
    expect(inputSerialized).toMatch(/Confirme que tu te souviens/i);
    // Residual (honest): literal prior user utterance is NOT in Session SoT /
    // ModelRequest.input under observed Agents Session prepare path.
    expect(inputSerialized).not.toMatch(/Analyse plusieurs documents du projet et produis une synthèse/);

    const afterFollowUp = await session2.getItems();
    expect(afterFollowUp.length).toBeGreaterThan(reopened.length);
    // Prior mission items remain free of undue duplication after append.
    assertNoUndueSessionDuplication(
      afterFollowUp.slice(0, itemsAfterMission.length),
      COMPLETE_MARKER,
    );

    const snapAfterFollow = campaignBudgetSnapshot(campaign);
    expect(snapAfterFollow.consumedModelInvocations).toBeGreaterThan(
      consumedAfterMission,
    );
    // Follow-up model calls only — no double-charge of prior mission.
    expect(snapAfterFollow.consumedModelInvocations).toBe(
      consumedAfterMission + followModel.calls.length,
    );
    session2.close();
  });

  it("V03b — allottedTurns is last absolute maxTurns ceiling applied (not sum)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv03b-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:tv03b",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "tv03b",
      projectId: "prj:tv03b",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Analyse plusieurs documents.",
      session,
      model: new ScriptedModel(documentaryScriptNeedingSevenModelTurns()),
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
    });
    expect(result.continuationObserve?.continued).toBe(true);
    expect(result.continuationObserve?.allottedTurns).toBe(10);
    expect(result.continuationObserve?.allottedTurns).not.toBe(15);
    session.close();
  });
});

\`\`\`

### Diff name-status (workspace cumulé — runtime inchangé ce pass)

\`\`\`
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
---UNTRACKED---
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
\`\`\`

### Diff stat

\`\`\`
 .tmp-sfia-review/chatgpt-review.md                 | 791 +++++++++++++++++----
 .../hooks/useProductConversation.ts                |  16 +
 .../surfaces/ConversationSurface.tsx               |  23 +
 .../project-assistant/ProjectAssistantPanel.tsx    |  29 +-
 .../features/project-assistant/orchestrateTurn.ts  |  41 +-
 .../app/features/project-assistant/types.ts        |  14 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |  19 +
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    | 429 +++++++----
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |  64 +-
 .../app/lib/nora-cognitive-runtime/types.ts        |  20 +
 10 files changed, 1161 insertions(+), 285 deletions(-)
\`\`\`

---

## 14. Handoff publication (this cycle)

Publisher: scripts/sfia/publish-review-handoff.sh
Branch: sfia/review-handoff
Canonical: sfia-review-handoff/latest-chatgpt-review.md
Commit message: docs(review-handoff): publish Nora P1 P2 final product proof closure
Project branch preserved; dirty workspace preserved; no project commit.

---

## 15. END OF REVIEW PACK
