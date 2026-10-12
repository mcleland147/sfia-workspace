# Review Pack FULL — P6 Nora P0 Chat-First Targeted Correction 01

at: 2026-10-12T05:50:00Z
local: 2026-10-12 07:50:00 CEST (Europe/Paris)
level: FULL
profile: CRITICAL
cycleType: 8 — Delivery / implémentation
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
increment: P0 — PRODUCT STATUS HONESTY
pass: P0 TARGETED CORRECTION PASS 01 — CHAT-FIRST PRODUCT PATH
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
incident: P6-MIN-09 — Guided Document Review interrupted by maxTurns
GO Morris: P0 TARGETED CORRECTION PASS 01 — ACCORDÉ 2026-10-12
mode: TARGETED UI PATH CORRECTION + DETERMINISTIC VALIDATION — ZERO REAL
prior handoff: f4bf9bc3 / blob e5affaaacb — P0 Product Status Honesty Correction 01 (NOT superseded)

---

## 1. Local Git Truth Check

| Check | Result |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| repo | mcleland147/sfia-workspace — MATCH |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| left-right | `0	0` |
| expected main tip | f31bb8f610802c102edbe68889fb8ecf0339ec28 — MATCH |
| staged | none |
| prior handoff tip | f4bf9bc3a17eebd2083fbda599689f1f13cd1915 — MATCH / not superseded before this publish |

```
git status --short:
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts

git diff --name-status:
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts

git diff --stat:
.tmp-sfia-review/chatgpt-review.md                 | 169 +--------------------
 .../hooks/useProductConversation.ts                |  16 ++
 .../surfaces/ConversationSurface.tsx               |  23 +++
 .../project-assistant/ProjectAssistantPanel.tsx    |  29 +++-
 .../features/project-assistant/orchestrateTurn.ts  |  41 ++++-
 .../app/features/project-assistant/types.ts        |  14 +-
 6 files changed, 115 insertions(+), 177 deletions(-)

git diff --cached --name-status:
(none)
```

Expected prior P0 local work PRESERVED (no rewrite of project-assistant P0 files this pass):

```
.../project-assistant/ProjectAssistantPanel.tsx    | 29 +++++++++++++--
 .../features/project-assistant/orchestrateTurn.ts  | 41 +++++++++++++++++-----
 .../app/features/project-assistant/types.ts        | 14 +++++++-
 3 files changed, 72 insertions(+), 12 deletions(-)
```

STOP Git: not triggered. No reset/clean/stash/rebase/destructive checkout. No project commit.

---

## 2. Convergence Pre-check

READ ONLY: Build Doctrine, Roadmap, product-completion, v3 framing 30/33/34, CKC 08/09, Nora trajectory 08, Product Simplification 01/04/07, external SFIA process templates.

| Item | Value |
|---|---|
| Capacité v3 | Fiabilité cognitive / honesty of states / conversational continuity |
| Milestone | P6 GLOBAL INTEGRATED PRODUCT QA (IN PROGRESS) |
| Runtime v3 | NON ADOPTED |
| Roadmap | MIN-09 → maxTurns qual → P0/P1/P2 scoping → P0 Delivery → ChatGPT Review (P0-UI-01) → **this targeted correction** → ChatGPT Review → Morris integration decision |
| Next | P1 Adaptive Runner Budget (GO distinct); P2 Controlled Continuation hors scope |

---

## 3. Finding P0-UI-01 (before this pass)

ChatGPT Review of prior P0:

- Backend Product status incomplete: ACCEPTABLE
- ProjectAssistantPanel UI: DETERMINISTIC PASS
- **Blocking:** main Studio chat path does NOT use ProjectAssistantPanel
- Real path: `/studio/projects/[id]` → ProjectWorkspacePage → **useProductConversation** → **ConversationSurface**
- Reserve P0-EFFECT-02: durable-effect proof strengthen if needed (server gates remain; this pass does not weaken)

---

## 4. Parcours frontend effectivement tracé

```
ProjectWorkspacePage
  → useProductConversation
    → sendCancellableAssistantTurn
      → ProjectAssistantSendResult (ok + status + limitReached)
    → controller.executionIncomplete (NEW)
    → setUiState("ANSWERED")  // transport phase — NOT mission success claim
  → ConversationSurface
    → banner "Analyse inachevée" when executionIncomplete
    → SFIA_ASSISTANT_ANSWERED_EVENT → LifecycleSurface.refresh only (re-read; no invent)
```

ANSWERED semantics: assistant turn available for UI / lifecycle reproject — **not** a business completion claim. Consumers checked: LifecycleSurface only listens to refresh projection.

---

## 5. Before / After

| Aspect | Before (post P0 backend, pre this pass) | After |
|---|---|---|
| Chat-first incomplete signal | ignored; ANSWERED looks like full success | `executionIncomplete` on controller |
| ConversationSurface | no incomplete banner | stoppedBanner-pattern « Analyse inachevée » |
| Panel (legacy) | already fixed | PRESERVED |
| Next nominal turn | n/a | clears stale incomplete on new send |
| Cognitive STOP | n/a | does not show incomplete banner (outranks) |
| Provider error / abort | distinct | remain distinct |
| Budgets / Runner / RunState | unchanged | unchanged |

---

## 6. Contrat hook retenu

```ts
executionIncomplete: boolean
// set true when result.status === "incomplete"
//    OR (limitReached && status !== "cognitive_stop")
// cleared on next user send and on decide()
```

Does NOT map incomplete → provider_error or Cognitive STOP.
Preserves partial `result.text`.
Does not invent HumanDecision / Confirmation.

---

## 7. Contrat ConversationSurface retenu

- Reuse `.stoppedBanner` + `.stoppedText` + `.composerCaption` (no new CSS; no redesign)
- `role="status"`
- `data-testid="project-assistant-incomplete-surface"`
- `data-execution-incomplete` on root
- Visible without opening « Sources et limites »
- Figma: no applicable frame change required; reuse existing tokens — no strong visual fidelity claim without runtime capture

---

## 8. Fichiers

### Modified this pass (authorized)

1. `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
2. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

### Created this pass

3. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`

### Preserved prior P0 (NOT modified this pass)

4. `features/project-assistant/types.ts`
5. `features/project-assistant/orchestrateTurn.ts`
6. `features/project-assistant/ProjectAssistantPanel.tsx`
7. `__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts`
8. `__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx`
9. `__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts` (untracked preserved)

### CSS

`ConversationSurface.module.css` — **NOT modified** (reuse sufficient).

---

## 9. Diffs — fichiers modifiés cette passe

### 9.1 useProductConversation.ts

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index d485db6c..6c1f0881 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -142,6 +142,12 @@ export function useProductConversation({
   const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
   const [uiState, setUiState] = useState<ProductConversationUiState>("INITIAL");
   const [error, setError] = useState<string | null>(null);
+  /**
+   * P0 — last successful send hit Runner/campaign execution limit
+   * (status incomplete / limitReached). Distinct from Cognitive STOP,
+   * provider error, and abort. Cleared on the next user send.
+   */
+  const [executionIncomplete, setExecutionIncomplete] = useState(false);
   const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
     "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
@@ -887,6 +893,8 @@ export function useProductConversation({
     setMessages((prev) => [...prev, userMessage]);
     setDraft("");
     setError(null);
+    // Clear stale incomplete from a prior turn before this send settles.
+    setExecutionIncomplete(false);
     setUiState("SENDING");
 
     // New distinct send: do not auto-replay prior logicalTurnId unless retry opts in.
@@ -1049,6 +1057,12 @@ export function useProductConversation({
       pendingRetryEnvelopeRef.current = null;
       setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
+      // P0 — incomplete ≠ Cognitive STOP; Cognitive STOP outranks incomplete UI.
+      const incomplete =
+        result.status === "incomplete" ||
+        (result.limitReached === true &&
+          result.status !== "cognitive_stop");
+      setExecutionIncomplete(incomplete);
       setLrMaterializeNotice(
         lifecycleRecommendationMaterializeFailurePiloteNotice({
           recommendationAttempted:
@@ -1108,6 +1122,7 @@ export function useProductConversation({
     startTransition(async () => {
       setUiState("ASSISTANT_WORKING");
       setError(null);
+      setExecutionIncomplete(false);
       const result = await projectAssistantDecideAction({
         projectId,
         proposalId: activeProposal.proposalId,
@@ -1376,6 +1391,7 @@ export function useProductConversation({
     toolEvents,
     uiState,
     error,
+    executionIncomplete,
     modeLabel,
     ephemeralNotice,
     lrMaterializeNotice,
```

### 9.2 ConversationSurface.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index efff6c9c..55a62bc7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -200,6 +200,7 @@ export function ConversationSurface({
     toolEvents,
     uiState,
     error,
+    executionIncomplete,
     modeLabel,
     ephemeralNotice,
     lrMaterializeNotice,
@@ -462,6 +463,7 @@ export function ConversationSurface({
       className={styles.root}
       data-testid="project-assistant-panel"
       data-ui-state={uiState}
+      data-execution-incomplete={executionIncomplete ? "true" : "false"}
       data-governed-moment={focusedGovernedMoment ? "true" : undefined}
     >
       {!focusedGovernedMoment ? (
@@ -2207,6 +2209,27 @@ export function ConversationSurface({
         </div>
       ) : null}
 
+      {executionIncomplete ? (
+        <div
+          className={styles.stoppedBanner}
+          role="status"
+          data-testid="project-assistant-incomplete-surface"
+        >
+          <div>
+            <p className={styles.stoppedText}>Analyse inachevée</p>
+            <p
+              className={styles.composerCaption}
+              data-testid="project-assistant-incomplete-notice"
+            >
+              Limite d&apos;exécution atteinte — cette réponse n&apos;est pas
+              une analyse complète. Aucune décision Product n&apos;a été
+              inventée. Reformulez une nouvelle demande si besoin (pas de
+              continuation automatique).
+            </p>
+          </div>
+        </div>
+      ) : null}
+
       {error ? (
         <div
           className={styles.errorBox}
```

---

## 10. Contenu complet — fichier créé

### p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx

```tsx
/**
 * P6 Nora P0 — Chat-first path: useProductConversation + ConversationSurface
 * surface incomplete (status honesty) without ProjectAssistantPanel.
 * Fake send adapter only — ZERO REAL.
 * @vitest-environment jsdom
 */
import {
  act,
  cleanup,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import {
  useProductConversation,
  type ProductConversationController,
} from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";

const {
  sendCancellableAssistantTurnMock,
  conversationContinuityMock,
} = vi.hoisted(() => ({
  sendCancellableAssistantTurnMock: vi.fn(),
  conversationContinuityMock: vi.fn(),
}));

/** Process-local transcript mirrored into Fake continuity so reconcile does not wipe. */
const fakeTranscript: Array<{
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string | null;
}> = [];

vi.mock("@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn", () => ({
  sendCancellableAssistantTurn: (
    input: unknown,
    signal: AbortSignal,
  ) => sendCancellableAssistantTurnMock(input, signal),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: (...args: unknown[]) =>
    conversationContinuityMock(...args),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn(async () => ({
    ok: false,
    status: "rehydrate_error",
    code: "NO_EVIDENCE_OUTCOME_REFS",
    message: "none",
    mode: "fixture",
    retryable: false,
  })),
}));

const PROJECT = {
  projectId: "prj:p0-chat-first",
  name: "Projet P0 Chat-first",
  shortReference: "P0CF",
  objective: "Surface incomplete on chat-first path.",
  contextSummary: "P0 UX chat-first",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:p0-cf",
  lpsVersion: 1,
  lpsCreatedAt: "2026-10-12T00:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:p0-cf",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

function incompleteResult(
  overrides: Partial<Extract<ProjectAssistantSendResult, { ok: true }>> = {},
): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "incomplete",
    text: "Model-turn budget reached (maxTurns).",
    mode: "fixture",
    presentation: "test_provider",
    toolRounds: 2,
    toolCalls: 2,
    sources: [],
    toolEvents: [],
    project: PROJECT,
    ephemeralNotice:
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    limitReached: true,
    cognitiveRuntime: "agents",
    sessionId: "sess:p0-cf",
    memoryBAvailability: "unavailable",
    memoryBCompactionState: "none",
    lifecycleRecommendationMaterialized: false,
    logicalTurnId: "lt:p0-incomplete",
    ...overrides,
  } as ProjectAssistantSendResult;
}

function okResult(
  text = "[TEST/FAKE] complete reply",
): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "ok",
    text,
    mode: "fixture",
    presentation: "test_provider",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: PROJECT,
    ephemeralNotice: "Session ok.",
    limitReached: false,
    cognitiveRuntime: "agents",
    sessionId: "sess:p0-cf",
    memoryBAvailability: "unavailable",
    memoryBCompactionState: "none",
    logicalTurnId: "lt:p0-ok",
  } as ProjectAssistantSendResult;
}

function cognitiveStopResult(
  overrides: Partial<Extract<ProjectAssistantSendResult, { ok: true }>> = {},
): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "cognitive_stop",
    text: "Cognitive STOP — premise invalidated.",
    mode: "fixture",
    presentation: "test_provider",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: PROJECT,
    ephemeralNotice: "Arrêt cognitif.",
    limitReached: false,
    cognitiveRuntime: "agents",
    sessionId: "sess:p0-cf",
    mw3: {
      disposition: "evidence_backed",
      progression: "COGNITIVE_STOP",
      cognitiveStop: true,
      allowsSilentSuccess: false,
      evidenceIds: ["ev:1"],
      sourceIds: [],
      insufficiencyReasons: [],
      anatomy: {
        reason: "premise invalidated",
        contradictionEvidenceIds: ["ev:1"],
        sourceIds: [],
        governingPremise: "X",
        nextAction: "replan",
      },
    },
    logicalTurnId: "lt:p0-stop",
    ...overrides,
  } as ProjectAssistantSendResult;
}

function mirrorSendIntoTranscript(
  userContent: string,
  result: ProjectAssistantSendResult,
) {
  fakeTranscript.push({
    id: `pt:u-${fakeTranscript.length}`,
    role: "user",
    content: userContent,
    createdAt: null,
  });
  if (result.ok) {
    fakeTranscript.push({
      id: `pt:a-${fakeTranscript.length}`,
      role: "assistant",
      content: result.text,
      createdAt: null,
    });
  }
}

function Harness({
  onReady,
}: {
  onReady?: (c: ProductConversationController) => void;
}) {
  const controller = useProductConversation({ projectId: PROJECT.projectId });
  onReady?.(controller);
  return <ConversationSurface controller={controller} />;
}

describe("P6 Nora P0 — Chat-first incomplete surface (useProductConversation)", () => {
  beforeEach(() => {
    fakeTranscript.length = 0;
    sendCancellableAssistantTurnMock.mockReset();
    conversationContinuityMock.mockReset();
    conversationContinuityMock.mockImplementation(async () => ({
      ok: true,
      transcriptAvailability: fakeTranscript.length > 0 ? "available" : "empty",
      messages: fakeTranscript.map((m) => ({ ...m })),
      journal: { cycleInstanceId: null, entries: [] },
    }));
  });

  afterEach(() => {
    cleanup();
  });

  it("T01/T02/T03/T04/T10 — incomplete → hook + Analyse inachevée visible without Sources", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = incompleteResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));

    await act(async () => {
      latest.sendMessage("Continuer l'analyse documentaire.");
    });

    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(true);
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });

    expect(latest.uiState).toBe("ANSWERED");
    const panel = screen.getByTestId("project-assistant-panel");
    expect(panel.getAttribute("data-execution-incomplete")).toBe("true");
    expect(panel.getAttribute("data-ui-state")).toBe("ANSWERED");
    expect(
      screen.getByTestId("project-assistant-incomplete-notice").textContent,
    ).toMatch(/limite|inachev|analyse complète/i);
    expect(screen.getByText(/Model-turn budget reached/i)).toBeTruthy();
    // Banner is outside "Sources et limites" disclosure
    expect(
      screen.getByTestId("project-assistant-incomplete-surface").closest(
        "details",
      ),
    ).toBeNull();
    expect(screen.queryByTestId("f2-decide-go")).toBeNull();
    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
    expect(screen.queryByTestId("project-assistant-stopped")).toBeNull();
  });

  it("T05 — status ok does not show incomplete warning", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = okResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("ping");
    });
    await waitFor(() => {
      expect(latest.uiState).toBe("ANSWERED");
      expect(screen.getByText(/TEST\/FAKE/i)).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(
      screen.getByTestId("project-assistant-panel").getAttribute(
        "data-execution-incomplete",
      ),
    ).toBe("false");
  });

  it("T06 — next nominal turn clears stale incomplete", async () => {
    sendCancellableAssistantTurnMock
      .mockImplementationOnce(async (input: { content: string }) => {
        const result = incompleteResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      })
      .mockImplementationOnce(async (input: { content: string }) => {
        const result = okResult("[TEST/FAKE] second turn complete");
        mirrorSendIntoTranscript(input.content, result);
        return result;
      });
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));

    await act(async () => {
      latest.sendMessage("first incomplete");
    });
    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(true);
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });

    await act(async () => {
      latest.sendMessage("second ok");
    });
    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(false);
      expect(screen.getByText(/second turn complete/i)).toBeTruthy();
    });
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(
      screen.getByTestId("project-assistant-panel").getAttribute(
        "data-execution-incomplete",
      ),
    ).toBe("false");
  });

  it("T07 — provider error remains distinct from incomplete", async () => {
    sendCancellableAssistantTurnMock.mockResolvedValue({
      ok: false,
      status: "provider_error",
      message: "Provider failed",
      mode: "unavailable",
      retryable: true,
      code: "PROVIDER_ERROR",
    });
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("will fail");
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-error")).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(screen.getByText(/Provider failed/i)).toBeTruthy();
  });

  it("T07b — abort remains STOPPED without incomplete banner", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      (_input: unknown, signal: AbortSignal) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener(
            "abort",
            () => {
              const err = new Error("Aborted");
              err.name = "AbortError";
              reject(err);
            },
            { once: true },
          );
        }),
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("will abort");
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalled(),
    );
    await act(async () => {
      latest.stopCurrentResponse();
    });
    await waitFor(() => expect(latest.uiState).toBe("STOPPED"));
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T08 — Cognitive STOP does not show Analyse inachevée", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = cognitiveStopResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("contradiction");
    });
    await waitFor(() => {
      expect(latest.uiState).toBe("ANSWERED");
      expect(screen.getByText(/Cognitive STOP/i)).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T08b — Cognitive STOP outranks limitReached for incomplete UI", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = cognitiveStopResult({
          text: "stop and limit",
          limitReached: true,
        });
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("both");
    });
    await waitFor(() => {
      expect(screen.getByText(/stop and limit/i)).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T09/T12 — incomplete does not invent HumanDecision; ANSWERED is transport phase only", async () => {
    const answeredEvents: Event[] = [];
    const onAnswered = (e: Event) => answeredEvents.push(e);
    window.addEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);

    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = incompleteResult({
          f2: undefined,
          lifecycleRecommendationMaterialized: false,
          reservationProposedIds: [],
        });
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("incomplete mission");
    });
    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(true);
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });

    expect(latest.uiState).toBe("ANSWERED");
    await waitFor(() => {
      expect(answeredEvents.length).toBeGreaterThanOrEqual(1);
    });
    expect(screen.queryByTestId("f2-decide-go")).toBeNull();
    expect(latest.activeProposal).toBeNull();

    window.removeEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
  });

  it("T11 — partial text preserved alongside incomplete surface", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = incompleteResult({
          text: "Partial documentary notes before budget stop.",
        });
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("GDR");
    });
    await waitFor(() => {
      expect(
        screen.getByText(/Partial documentary notes before budget stop/i),
      ).toBeTruthy();
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(true);
  });
});

```

---

## 11. Preuves T01–T12

| ID | Claim | Evidence | Result |
|---|---|---|---|
| T01 | Product incomplete DTO | Fake send status=incomplete + limitReached | PASS |
| T02 | Hook exposes incomplete | controller.executionIncomplete===true | PASS |
| T03 | Surface visible | incomplete-surface without Sources details | PASS |
| T04 | Partial text kept | message text rendered | PASS |
| T05 | Nominal ok | no incomplete banner | PASS |
| T06 | Next turn clears | incomplete then ok clears flag | PASS |
| T07 | Provider / abort distinct | errorBox / STOPPED | PASS (+ T07b) |
| T08 | Cognitive STOP distinct | no incomplete banner; T08b outranks | PASS |
| T09 | No HumanDecision invented | no f2-decide; activeProposal null | PASS |
| T10 | Accessible / testable | role=status + testids | PASS |
| T11 | Continuity coherent | partial text + incomplete | PASS |
| T12 | ANSWERED ≠ mission success | event fires; only Lifecycle refresh semantics documented | PASS |

---

## 12. Tests exécutés (commandes exactes)

Working directory: `projects/sfia-studio/app`

```bash
npx vitest run \
  __tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx \
  __tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts \
  __tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx \
  __tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts \
  __tests__/nora-cognitive-runtime/runner.d0.test.ts \
  __tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts \
  __tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx \
  __tests__/project-assistant/orchestrateTurn.test.ts \
  __tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.hook.test.tsx \
  __tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.ui.test.tsx \
  --reporter=dot
```

Result: **10 files / 58 tests PASS** (0 FAIL / 0 SKIP)

```bash
npx tsc -p tsconfig.json --noEmit
```

Result: **TSC_OK** (exit 0, empty stderr)

```bash
npx eslint --no-error-on-unmatched-pattern \
  features/pre-m6-product-ui/hooks/useProductConversation.ts \
  features/pre-m6-product-ui/surfaces/ConversationSurface.tsx \
  __tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx
```

Result: **0 errors / 0 warnings** on targeted paths

`git diff --check` on pre-m6 paths: clean.

### Not executed (justified)

- Full P6 campaign / REAL OpenAI — GO REAL NON
- ProjectWorkspacePage full wiring suite — path composition verified via real hook+surface harness; page only passes controller
- P1/P2 suites — hors scope

---

## 13. Effets Product / P0-EFFECT-02

Server P0 gates (prior delivery) remain: LR / ACW / reservation / journalDelta-as-complete suppressed when `limitReached`.

This pass: client does not invent HumanDecision / Confirmation / durable promotion from incomplete.

ANSWERED event → LifecycleSurface.refresh only (re-read durable state).

Reserve: end-to-end assertion that Fake session has zero durable LR writes on chat-first incomplete remains covered by prior orchestrateTurn honesty T5; not re-expanded into RunState/store rewrite. P0-EFFECT-02 residual: acceptable as RESERVE if ChatGPT requires store-level proof beyond orchestrateTurn Fake — not blocking for UI path correction.

Distinction: tools already executed before limit may have side-effects (authorized reads) — not claimed as "zero effects of any kind".

---

## 14. Fake / Real Qualification

| Item | Value |
|---|---|
| Applicable | YES |
| Fake | sendCancellableAssistantTurn mock + Fake continuity |
| REAL corresponding | Nora Agents on Studio Product chat-first path |
| Entry | P0 backend DETERMINISTIC PROVEN; UI target gap BLOCKING |
| Achieved | **DETERMINISTIC PROVEN AT P0 CHAT-FIRST PATH** |
| NOT | REAL BOUNDARY / E2E REAL / P6 GLOBAL PASS / Runtime v3 ADOPTED |
| GO REAL | NON |
| OpenAI REAL calls | ZERO |

---

## 15. Dette / exit / réserves

Dette hors GO: P1 budget · P2 continuation · REAL GDR MIN-09 · Panel vs ConversationSurface dual surfaces both now honest (Panel preserved).

Exit proof this pass: chat-first incomplete visible + cleared on next ok + STOP/error/Cognitive STOP distinct + prior P0 preserved + 58 deterministic tests PASS.

Réserves:
- No strong Figma fidelity claim (reuse only)
- No runtime screenshot
- P0-EFFECT-02 residual store-level if demanded beyond orch T5

---

## 16. P1 / P2 hors scope

Explicit: P1 Adaptive Runner Budget NOT implemented. P2 Controlled Continuation / RunState NOT implemented. Budgets unchanged.

---

## 17. Décisions Morris restantes

1. ChatGPT Review of this targeted correction
2. Integration/commit decision for combined P0 (backend+panel+chat-first)
3. Optional GO P1 / conditional P2 / separate REAL

---

## 18. Review Handoff plan

Mode: publish-in-cycle L3
Branch: `sfia/review-handoff`
Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
Commit: `docs(review-handoff): publish P6 Nora P0 chat-first correction`
No project commit/push/PR/merge/force-push.

---

## 19. Verdict

**P6 NORA P0 — CHAT-FIRST TARGETED CORRECTION COMPLETE / READY FOR CHATGPT REVIEW**

Status: READY FOR REVIEW

QA level: DETERMINISTIC AT P0 CHAT-FIRST SCOPE

Gate suivant: ChatGPT Review → décision Morris d'intégration.

Ne pas déclarer: P6 GLOBAL PASS · Runtime v3 ADOPTED · P1/P2 done · REAL GDR VALIDATED · Product global READY · READY FOR PR.
