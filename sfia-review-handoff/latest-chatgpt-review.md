# SFIA Studio — Review Pack FULL
## AUTOMATIC PROJECT RESUME — UX correction (same candidate Continuity)

- **timestamp**: `2026-09-24T16:55:37+02:00`
- **cycle**: 8 — Delivery / implémentation
- **profil SFIA**: Standard
- **GO**: AUTOMATIC PROJECT RESUME — CONSUMED
- **branche projet**: `feat/sfia-studio-cycle-journal-continuity-01`
- **HEAD / origin/main**: `aad8bc8456b3a64d37be4e12f969f09da5467c09` / `aad8bc8456b3a64d37be4e12f969f09da5467c09`
- **source handoff Continuity**: `e59c98053e2b1f2da0600103efac53feaf3c6edf`
- **commit projet**: AUCUN
- **runtime v3**: NON ADOPTED
- **Fake/Real**: DETERMINISTIC UI + local browser. ≠ READY FOR REAL.

## Verdict

**READY FOR MACRO PR READINESS**

Ce delta local Automatic Resume est prêt à rejoindre le macro-lot Journal + Continuity.
N'autorise PAS commit/push/PR projet.

---

## 1. Local Git Truth Check

- Dirty working tree ATTENDU (candidat Continuity + ce delta UX)
- NO_STAGED
- Aucun fichier protégé modifié

---

## 2. Discovery — pourquoi Recovery apparaissait

`shouldShowProjectRecovery()` retournait `true` dès qu'un cycle actif / LPS version > 1 / evidence durable existait.

Sur KidPlan (cycle actif), `ProjectWorkspacePage` montait donc systématiquement `RecoverySurface` avec :
- CTA « Reprendre l'état enregistré » → `setLpsOpen(true)` + `focusConversation()` seulement (état déjà chargé) ;
- CTA « Repartir d'une nouvelle intention » → focus Nora + reload (pas de nouveau Project/Cycle).

Incohérence mentale : le produit réhydrate déjà Project/LPS/cycle/transcript/Journal, mais demandait un choix manuel générique.

---

## 3. Architecture corrective

KEEP : rehydration existante, Journal, bounded history, Agents tools, LPS/Trajectory/Lifecycle governance.
ADAPT : presentation open + RecoverySurface → anomaly-only ; Product open = automatic resume.
REMOVE from happy path : bandeau REPRISE + 2 CTA génériques.
REPLACE : aucun. Architecture parallèle : INTERDITE.

Legacy : `shouldShowProjectRecovery` + `ProjectRecoveryBanner` / `ProjectPrincipalClient` inchangés (hors route Product `/studio/projects/[id]`).

---

## 4. Comportement avant / après

| État | Avant | Après |
|------|-------|-------|
| Open + cycle actif | Gros bandeau REPRISE + CTAs | Workspace direct |
| transcript available | Bandeau + disclosure | Hint léger `project-auto-resume-hint` |
| empty | Bandeau si cycle | Silence + workspace |
| pending | Risque flash Recovery | Silence |
| unavailable | Bandeau générique | Anomalie précise + retry conversation optionnel |

---

## 5. AR-01…AR-10

| AR | Status | Preuve |
|----|--------|--------|
| AR-01 automatic restore | PASS | runtime KidPlan reload + UI tests |
| AR-02 transcript available auto | PASS | automaticProjectResume available case |
| AR-03 Journal restored | PASS | Journal rail runtime + test |
| AR-04 no Reprendre CTA | PASS | runtime + tests |
| AR-05 no nouvelle intention CTA | PASS | runtime + tests |
| AR-06 pending no flash CTA | PASS | presentation helper + UI test |
| AR-07 empty valid | PASS | UI test |
| AR-08 unavailable precise | PASS | RecoverySurface anomaly + UI test |
| AR-09 governance intact | PASS | journey coherence Lifecycle CTAs ; legacy ProjectRecoveryBanner |
| AR-10 Journal continuity green | PASS | cycleJournalContinuity + orchestrateTurn CR-CJ-01 |

---

## 6. Tests / validations

- targeted AR + W1 + journey coherence : PASS
- typecheck PASS
- lint PASS
- full suite : **408 passed | 17 skipped** (4570 tests)
- git diff --check : clean

---

## 7. Runtime screenshots

- `.tmp-sfia-review/cycle-journal-continuity-proof/ar-auto-resume-kidplan-1440.png`
- `.tmp-sfia-review/cycle-journal-continuity-proof/ar-auto-resume-kidplan-390.png`

CDP KidPlan reload : `recovery:false`, `resume:false`, `journal:true`, `conv:true`, no « Reprendre » / « nouvelle intention » / eyebrow Reprise.

Transcript KidPlan local = empty (valid) — available path proven in deterministic UI test.

---

## 8. Fake / Real

DETERMINISTIC + local browser. REAL Journal quality NOT PROVEN. Runtime v3 NON ADOPTED.

---

## 9. Réserves

- Legacy `ProjectPrincipalClient` / `ProjectRecoveryBanner` still show F10 Recovery (non-Product route).
- Optional light hint only when transcript available.
- Revalidation confirmation non-durable reste gouvernée au moment d'action (non bloquée à l'ouverture).

---

## 10. Fichiers créés / modifiés (delta Automatic Resume)

### Créé — contenu complet

#### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
/**
 * AUTOMATIC PROJECT RESUME — AR-01…AR-08 Product Workspace proofs.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import {
  W1_AUTO_RESUME_RESTORED_HINT,
  W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
} from "@/features/project-assistant/presentationLabels";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
  useProductConversation: (...args: unknown[]) =>
    useProductConversationMock(...args),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LifecycleSurface", () => ({
  LifecycleSurface: () => <div data-testid="lifecycle-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/TrajectorySurface", () => ({
  TrajectorySurface: () => <div data-testid="trajectory-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/HistorySurface", () => ({
  HistorySurface: () => <div data-testid="history-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel", () => ({
  ProjectWorkspaceRoutingPanelLazy: () => null,
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
    status: "rehydrate_error",
    code: "NO_EVIDENCE_OUTCOME_REFS",
    message: "none",
    mode: "fixture",
    retryable: false,
  }),
  projectAssistantSendAction: vi.fn(),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantPrepareM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: vi.fn(),
  w2DecideTrajectoryAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: vi.fn().mockResolvedValue({
    ok: true,
    kind: "none",
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    kind: "none",
  }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2RehydrateProductOutcomeAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: vi
    .fn()
    .mockResolvedValue({ ok: true, candidate: null }),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({ ok: true, presentation: null, alreadyDecided: null }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: vi.fn().mockResolvedValue({
    ok: true,
    prepared: null,
  }),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:auto-resume",
    name: "KidPlan",
    shortReference: "KP",
    objective: "Planifier",
    contextSummary: "ctx",
    criticality: "STANDARD" as const,
    constraints: [] as string[],
    localMode: true,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false,
    projectWorkspaceKey: null,
    repositoryBinding: null,
  },
  livingState: {
    id: "lps:1",
    version: 3,
    createdAt: "2026-09-01T00:00:00.000Z",
    activeCycleInstanceId: "cyc:1",
  },
  doctrine: { id: "d", version: "1", digest: "x", status: "RESOLVED" },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true,
    restartMayLoseState: true,
    projectLpsRestartSafe: true,
    cycleInstanceRestartSafe: true,
    humanDecisionRestartSafe: true,
    executionContractRestartSafe: true,
    messages: [] as const,
  },
};

function baseController(overrides: Record<string, unknown> = {}) {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "READY",
    error: null,
    modeLabel: "fixture",
    ephemeralNotice: "",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    busy: false,
    blocked: false,
    canSend: true,
    gateOpen: false,
    recommendationFreshness: null,
    qualificationFreshness: null,
    durableOutcomeFreshness: null,
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    transcriptAvailability: "empty",
    journalEntries: [],
    journalCycleInstanceId: "cyc:1",
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    clearFocusTurn: vi.fn(),
    focusTurnId: null,
    refreshConversationContinuity: vi.fn(),
    ...overrides,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
  useProductConversationMock.mockReset();
  getProjectRuntimeActionMock.mockResolvedValue(PROJECT);
});

function assertNoGenericRecoveryCtas() {
  expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
  expect(screen.queryByTestId("recovery-resume-durable")).toBeNull();
  expect(screen.queryByTestId("recovery-requalify")).toBeNull();
  expect(screen.queryByText(/Reprendre l'état enregistré/i)).toBeNull();
  expect(screen.queryByText(/Repartir d'une nouvelle intention/i)).toBeNull();
}

describe("AUTOMATIC PROJECT RESUME — ProjectWorkspacePage", () => {
  it("AR-01/02/03/04/05 — available transcript: workspace usable, no Recovery CTAs", async () => {
    useProductConversationMock.mockReturnValue(
      baseController({
        transcriptAvailability: "available",
        messages: [
          { id: "pt:1", role: "user", content: "Bonjour" },
          { id: "pt:2", role: "assistant", content: "Salut" },
        ],
        journalEntries: [
          {
            journalEntryId: "cje:1",
            title: "Périmètre",
            currentSummary: "ok",
            status: "active",
            updatedAt: "2026-09-24T12:00:00.000Z",
            sourceTurnRefs: ["pt:1"],
            sourceTurnCount: 1,
          },
        ],
      }),
    );

    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(await screen.findByTestId("project-workspace-layout")).toBeTruthy();
    expect(screen.getByTestId("cycle-journal-rail")).toBeTruthy();
    expect(screen.getByText("Périmètre")).toBeTruthy();
    expect(screen.getByText("Bonjour")).toBeTruthy();
    expect(screen.getByTestId("project-auto-resume-hint").textContent).toBe(
      W1_AUTO_RESUME_RESTORED_HINT,
    );
    assertNoGenericRecoveryCtas();
  });

  it("AR-07 — empty transcript is normal; no Recovery CTA", async () => {
    useProductConversationMock.mockReturnValue(
      baseController({ transcriptAvailability: "empty" }),
    );
    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(screen.queryByTestId("project-auto-resume-hint")).toBeNull();
    expect(screen.queryByTestId("project-transcript-anomaly")).toBeNull();
    assertNoGenericRecoveryCtas();
    expect(screen.getByTestId("project-assistant-input")).toBeTruthy();
  });

  it("AR-06 — pending shows no Recovery flash/CTA", async () => {
    useProductConversationMock.mockReturnValue(
      baseController({ transcriptAvailability: "pending" }),
    );
    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(screen.queryByTestId("project-transcript-anomaly")).toBeNull();
    expect(screen.queryByTestId("project-auto-resume-hint")).toBeNull();
    assertNoGenericRecoveryCtas();
  });

  it("AR-08 — unavailable: precise anomaly, durable workspace still rendered", async () => {
    const retry = vi.fn();
    useProductConversationMock.mockReturnValue(
      baseController({
        transcriptAvailability: "unavailable",
        refreshConversationContinuity: retry,
        journalEntries: [
          {
            journalEntryId: "cje:1",
            title: "Sujet durable",
            currentSummary: "kept",
            status: "active",
            updatedAt: "2026-09-24T12:00:00.000Z",
            sourceTurnRefs: [],
            sourceTurnCount: 0,
          },
        ],
      }),
    );
    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-transcript-anomaly")).toBeTruthy();
    expect(screen.getByTestId("project-transcript-anomaly-text").textContent).toBe(
      W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
    );
    assertNoGenericRecoveryCtas();
    expect(screen.getByText("Sujet durable")).toBeTruthy();
    expect(screen.getByTestId("recovery-retry-transcript")).toBeTruthy();
  });
});

```

### Diffs utiles complets

#### `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index 57fcc7e2..69120a2d 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -100,6 +100,11 @@ export function deriveRecommendationFreshness(input: {
 /**
  * F10 — Recovery is contextual. Nominal project open is not Recovery.
  * Use only signals already available from durable reads / LPS projection.
+ *
+ * AUTOMATIC PROJECT RESUME (2026-09): Product Workspace (`ProjectWorkspacePage`)
+ * no longer mounts a generic Recovery CTA on open — opening a Project already
+ * rehydrates durable state. This helper remains for legacy surfaces
+ * (`ProjectPrincipalClient`) and unit tests of the historical F10 rule.
  */
 export function shouldShowProjectRecovery(input: {
   hasDurableEvidenceOutcome: boolean;
@@ -117,12 +122,60 @@ export function shouldShowProjectRecovery(input: {
   return false;
 }
 
+/** Product open — automatic resume presentation (no generic Recovery CTAs). */
+export type TranscriptAvailabilityUi =
+  | "available"
+  | "empty"
+  | "unavailable"
+  | "pending";
+
+export type ProjectOpenContinuityPresentation =
+  | { readonly kind: "none" }
+  | { readonly kind: "restored_hint"; readonly message: string }
+  | { readonly kind: "transcript_unavailable"; readonly message: string };
+
+export const W1_AUTO_RESUME_RESTORED_HINT =
+  "Projet restauré · état courant, conversation et Journal chargés.";
+
+export const W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE =
+  "Projet restauré depuis son état durable. L'historique de conversation n'est actuellement pas disponible.";
+
+/**
+ * Opening Project == automatic durable resume.
+ * - pending / empty → silence (no Recovery flash, empty is valid)
+ * - available → optional light hint (no CTA)
+ * - unavailable → precise anomaly disclosure only
+ */
+export function resolveProjectOpenContinuityPresentation(
+  transcriptAvailability: TranscriptAvailabilityUi,
+): ProjectOpenContinuityPresentation {
+  switch (transcriptAvailability) {
+    case "available":
+      return {
+        kind: "restored_hint",
+        message: W1_AUTO_RESUME_RESTORED_HINT,
+      };
+    case "unavailable":
+      return {
+        kind: "transcript_unavailable",
+        message: W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
+      };
+    case "empty":
+    case "pending":
+    default:
+      return { kind: "none" };
+  }
+}
+
 /** W1 Track E — honest durable vs non-durable disclosure strings (Pilote-facing). */
 export const W1_DURABLE_DISCLOSURE =
   "Conservé : projet, état vivant (LPS), trajectoire décidée, confirmations déjà accordées, preuves / résultats déjà enregistrés.";
 
+export const W1_TRANSCRIPT_AVAILABLE_DISCLOSURE =
+  "Conversation Pilote ↔ Nora enregistrée : reprise visible au rechargement lorsque le transcript est disponible.";
+
 export const W1_NON_DURABLE_DISCLOSURE =
-  "Peut devoir être repris : conversation en cours, confirmation encore demandée, propositions non encore enregistrées.";
+  "Peut devoir être repris : confirmation encore demandée, propositions non encore enregistrées ; conversation absente seulement si le transcript n'est pas disponible.";
 
 export const W1_PROPOSED_NOT_DECIDED_DISCLOSURE =
   "Une trajectoire proposée (recommandation) n'est pas encore la trajectoire décidée.";
@@ -191,13 +244,27 @@ export function w1RecoveryDisclosures(): {
   });
 }
 
-export function w1RestartHonestyMessage(): string {
-  return [
+export function w1RestartHonestyMessage(options?: {
+  transcriptAvailability?: "available" | "empty" | "unavailable" | "pending";
+}): string {
+  const availability = options?.transcriptAvailability;
+  if (availability === "available") {
+    return W1_AUTO_RESUME_RESTORED_HINT;
+  }
+  if (availability === "unavailable") {
+    return W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE;
+  }
+  if (availability === "empty" || availability === "pending") {
+    return "";
+  }
+  // Legacy callers without availability — keep full honesty copy.
+  const parts = [
     W1_DURABLE_DISCLOSURE,
     W1_NON_DURABLE_DISCLOSURE,
     W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
     W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
-  ].join(" ");
+  ];
+  return parts.join(" ");
 }
 
 /**

```

#### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index a2eaab89..7ffb7263 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -2,11 +2,12 @@
 
 import { useCallback, useEffect, useRef, useState } from "react";
 import Link from "next/link";
-import { shouldShowProjectRecovery, w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
+import { resolveProjectOpenContinuityPresentation } from "@/features/project-assistant/presentationLabels";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
 import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import { useProductConversation } from "./hooks/useProductConversation";
 import { ConversationSurface } from "./surfaces/ConversationSurface";
+import { JournalSurface } from "./surfaces/JournalSurface";
 import { HistorySurface } from "./surfaces/HistorySurface";
 import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
@@ -27,6 +28,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
+  const [journalCollapsed, setJournalCollapsed] = useState(false);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
   const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
@@ -78,15 +80,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     if (input instanceof HTMLTextAreaElement) input.focus();
   }, []);
 
-  const onRequalify = useCallback(async () => {
-    // JOURNEY-INTEGRITY — "nouvelle intention" focuses Nora for qualification.
-    // Must NOT bypass to proposeOptions / Trajectory instruction.
-    focusConversation();
-    void loadProject();
-  }, [focusConversation, loadProject]);
-
   const controller = useProductConversation({
     projectId,
+    activeCycleInstanceId: result?.ok
+      ? result.livingState.activeCycleInstanceId
+      : null,
     onDurableFactsChanged: notifyDurableFactsChanged,
     onDurableEvidenceOutcomeChange: setDurableOutcome,
   });
@@ -121,11 +119,13 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
 
   const success: GetProjectSuccess = result;
 
-  const showRecovery = shouldShowProjectRecovery({
-    hasDurableEvidenceOutcome: Boolean(durableOutcome),
-    livingStateVersion: success.livingState.version,
-    activeCycleInstanceId: success.livingState.activeCycleInstanceId,
-  });
+  /**
+   * AUTOMATIC PROJECT RESUME — durable state already loads with the page.
+   * No generic « Reprendre / nouvelle intention » chooser on open.
+   */
+  const continuity = resolveProjectOpenContinuityPresentation(
+    controller.transcriptAvailability,
+  );
 
   /** Suppress competing generic Nora/intention CTAs while subject is owned or unknown. */
   const suppressGenericIntentionCta =
@@ -152,24 +152,38 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
         </button>
       </header>
 
-      {showRecovery ? (
+      {continuity.kind === "restored_hint" ? (
+        <p
+          className={styles.durabilityHint}
+          data-testid="project-auto-resume-hint"
+        >
+          {continuity.message}
+        </p>
+      ) : null}
+      {continuity.kind === "transcript_unavailable" ? (
         <RecoverySurface
-          suppressGenericIntentionCta={suppressGenericIntentionCta}
-          onResumeDurable={() => {
-            setLpsOpen(true);
-            focusConversation();
-          }}
-          onRequalify={() => {
-            void onRequalify();
+          message={continuity.message}
+          onRetryTranscript={() => {
+            void controller.refreshConversationContinuity();
           }}
         />
-      ) : (
-        <p className={styles.durabilityHint} data-testid="project-durability-hint">
-          {w1RestartHonestyMessage()}
-        </p>
-      )}
+      ) : null}
+
+      <div className={styles.layout} data-testid="project-workspace-layout">
+        <div className={styles.journalColumn} data-testid="project-journal-column">
+          <JournalSurface
+            entries={controller.journalEntries}
+            cycleInstanceId={controller.journalCycleInstanceId}
+            selectedEntryId={controller.selectedJournalEntryId}
+            onSelectEntry={controller.setSelectedJournalEntryId}
+            onViewExchanges={controller.focusJournalExchanges}
+            onFocusTurn={controller.focusTranscriptTurn}
+            transcriptMessages={controller.messages}
+            collapsed={journalCollapsed}
+            onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
+          />
+        </div>
 
-      <div className={styles.layout}>
         <div className={styles.main} ref={conversationRef}>
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />

```

#### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
index cca2472c..15c1e021 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
@@ -1,75 +1,52 @@
 "use client";
 
-import {
-  W1_DURABLE_DISCLOSURE,
-  W1_NON_DURABLE_DISCLOSURE,
-  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
-  W1_REQUALIFY_CTA,
-  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
-} from "@/features/project-assistant/presentationLabels";
+import { W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE } from "@/features/project-assistant/presentationLabels";
 import styles from "./RecoverySurface.module.css";
 
 /**
- * F10 — honest recovery. Durable facts can be replayed; conversation,
- * proposal and confirmation cannot. No invented persistence.
+ * AUTOMATIC PROJECT RESUME — anomaly disclosure only.
+ *
+ * Product Project open rehydrates durable state automatically.
+ * This surface is NOT a happy-path "Reprise" chooser.
+ * It appears only when the Pilot transcript cannot be loaded.
+ *
+ * NEVER Truth C / HumanDecision / Confirmation authority.
  */
 export function RecoverySurface({
-  onResumeDurable,
-  onRequalify,
-  suppressGenericIntentionCta = false,
+  onRetryTranscript,
+  message = W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
 }: {
-  onResumeDurable?: () => void;
-  onRequalify?: () => void;
-  /**
-   * JOURNEY-INTEGRITY — when a Proposal-specific Decision Subject owns the
-   * next business action, hide the competing generic "nouvelle intention" CTA.
-   * Resume/navigation may remain.
-   */
-  suppressGenericIntentionCta?: boolean;
+  /** Optional targeted retry — not a generic "resume Project" action. */
+  onRetryTranscript?: () => void;
+  message?: string;
 }) {
   return (
     <section
-      className={styles.root}
-      data-testid="project-recovery-banner"
-      aria-labelledby="pm6-recovery-title"
+      className={styles.anomaly}
+      data-testid="project-transcript-anomaly"
+      aria-labelledby="pm6-transcript-anomaly-title"
     >
       <div className={styles.body}>
-        <p className={styles.eyebrow}>Reprise</p>
-        <h2 id="pm6-recovery-title" className={styles.title}>
-          Reprenez où le projet en est réellement
+        <p className={styles.eyebrow}>Conversation</p>
+        <h2 id="pm6-transcript-anomaly-title" className={styles.title}>
+          Historique temporairement indisponible
         </h2>
-        <p className={styles.text}>
-          {suppressGenericIntentionCta
-            ? "Studio relit seulement ce qui a été réellement enregistré. Une proposition active porte déjà la prochaine action métier — reprenez l'état enregistré pour l'inspecter, sans ouvrir une intention concurrente."
-            : "Studio relit seulement ce qui a été réellement enregistré. La conversation, une confirmation encore demandée ou une proposition non enregistrée ne sont pas inventées au rechargement — vous pouvez reprendre l'état enregistré ou repartir d'une intention claire."}
+        <p className={styles.text} data-testid="project-transcript-anomaly-text">
+          {message}
         </p>
-        <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
-          <li>{W1_DURABLE_DISCLOSURE}</li>
-          <li>{W1_NON_DURABLE_DISCLOSURE}</li>
-          <li>{W1_PROPOSED_NOT_DECIDED_DISCLOSURE}</li>
-          <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>
-        </ul>
       </div>
-      <div className={styles.actions}>
-        <button
-          type="button"
-          className={styles.primary}
-          data-testid="recovery-resume-durable"
-          onClick={onResumeDurable}
-        >
-          Reprendre l&apos;état enregistré
-        </button>
-        {!suppressGenericIntentionCta ? (
+      {onRetryTranscript ? (
+        <div className={styles.actions}>
           <button
             type="button"
             className={styles.secondary}
-            data-testid="recovery-requalify"
-            onClick={onRequalify}
+            data-testid="recovery-retry-transcript"
+            onClick={onRetryTranscript}
           >
-            {W1_REQUALIFY_CTA}
+            Réessayer le chargement de la conversation
           </button>
-        ) : null}
-      </div>
+        </div>
+      ) : null}
     </section>
   );
 }

```

#### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
index 680b1efa..1cb05a3a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css
@@ -10,6 +10,19 @@
   padding: var(--pm6-space-4) var(--pm6-space-5);
 }
 
+/* AUTOMATIC RESUME — compact anomaly disclosure (not happy-path REPRISE). */
+.anomaly {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: flex-end;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-canvas-raised);
+  padding: var(--pm6-space-3) var(--pm6-space-4);
+}
+
 .body {
   display: flex;
   flex-direction: column;

```

#### `projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
index 42357cb0..584d317e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
@@ -10,20 +10,14 @@ import {
   W1_REQUALIFY_CTA,
   W1_REQUALIFY_SHORT_CTA,
   W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+  W1_AUTO_RESUME_RESTORED_HINT,
+  W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
+  resolveProjectOpenContinuityPresentation,
   shouldShowProjectRecovery,
   w1RecoveryDisclosures,
   w1RestartHonestyMessage,
 } from "@/features/project-assistant/presentationLabels";
 
-/*
- * JOURNEY-INTEGRITY gap note:
- * Full ProjectWorkspacePage proof that onRequalify does NOT call proposeOptions
- * is skipped (heavy page mock surface). RecoverySurface only invokes the
- * provided onRequalify callback — wiring in ProjectWorkspacePage focuses Nora
- * (focusConversation + loadProject). No auto-propose signal exists any more:
- * the Trajectory surface has no requalify-driven propose prop to bump.
- */
-
 afterEach(() => {
   cleanup();
 });
@@ -58,7 +52,7 @@ describe("W1 Track E — recovery foundation helpers", () => {
     expect(message.toLowerCase()).toMatch(/autorité effective courante/);
   });
 
-  it("shouldShowProjectRecovery remains contextual (not nominal open)", () => {
+  it("shouldShowProjectRecovery remains contextual (legacy F10 helper)", () => {
     expect(
       shouldShowProjectRecovery({
         hasDurableEvidenceOutcome: false,
@@ -74,62 +68,58 @@ describe("W1 Track E — recovery foundation helpers", () => {
       }),
     ).toBe(true);
   });
-});
 
-describe("W1 Track E — recovery UI disclosures", () => {
-  it("RecoverySurface renders W1 disclosures and controlled requalify CTA", () => {
-    render(<RecoverySurface />);
-    expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
-    expect(screen.getByText(W1_DURABLE_DISCLOSURE)).toBeTruthy();
-    expect(screen.getByText(W1_NON_DURABLE_DISCLOSURE)).toBeTruthy();
-    expect(screen.getByText(W1_PROPOSED_NOT_DECIDED_DISCLOSURE)).toBeTruthy();
-    expect(screen.getByText(W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY)).toBeTruthy();
-    expect(screen.getByText(W1_DURABLE_DISCLOSURE).textContent?.toLowerCase()).not.toMatch(
-      /trajectoire \(confirmation accordée\)/,
-    );
-    expect(screen.getByTestId("recovery-requalify").textContent).toBe(
-      W1_REQUALIFY_CTA,
-    );
-    expect(screen.getByTestId("recovery-requalify").textContent?.toLowerCase()).toMatch(
-      /requalification contrôlée/,
-    );
+  it("AR — resolveProjectOpenContinuityPresentation modes", () => {
+    expect(resolveProjectOpenContinuityPresentation("pending")).toEqual({
+      kind: "none",
+    });
+    expect(resolveProjectOpenContinuityPresentation("empty")).toEqual({
+      kind: "none",
+    });
+    expect(resolveProjectOpenContinuityPresentation("available")).toEqual({
+      kind: "restored_hint",
+      message: W1_AUTO_RESUME_RESTORED_HINT,
+    });
+    expect(resolveProjectOpenContinuityPresentation("unavailable")).toEqual({
+      kind: "transcript_unavailable",
+      message: W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
+    });
   });
 
-  it("JOURNEY-INTEGRITY — requalify CTA only fires onRequalify (no propose built-in)", () => {
-    const onRequalify = vi.fn();
-    const onResumeDurable = vi.fn();
-    render(
-      <RecoverySurface
-        onRequalify={onRequalify}
-        onResumeDurable={onResumeDurable}
-      />,
+  it("AR — available/empty honesty is not a Recovery chooser", () => {
+    expect(w1RestartHonestyMessage({ transcriptAvailability: "available" })).toBe(
+      W1_AUTO_RESUME_RESTORED_HINT,
+    );
+    expect(w1RestartHonestyMessage({ transcriptAvailability: "empty" })).toBe(
+      "",
     );
-    fireEvent.click(screen.getByTestId("recovery-requalify"));
-    expect(onRequalify).toHaveBeenCalledTimes(1);
-    expect(onResumeDurable).not.toHaveBeenCalled();
+    expect(
+      w1RestartHonestyMessage({ transcriptAvailability: "unavailable" }),
+    ).toBe(W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE);
   });
+});
 
-  it("JOURNEY-INTEGRITY — suppressGenericIntentionCta hides requalify, keeps resume", () => {
-    const onRequalify = vi.fn();
-    const onResumeDurable = vi.fn();
-    render(
-      <RecoverySurface
-        suppressGenericIntentionCta
-        onRequalify={onRequalify}
-        onResumeDurable={onResumeDurable}
-      />,
+describe("AUTOMATIC RESUME — RecoverySurface anomaly only", () => {
+  it("renders precise transcript-unavailable disclosure without resume/requalify CTAs", () => {
+    render(<RecoverySurface />);
+    expect(screen.getByTestId("project-transcript-anomaly")).toBeTruthy();
+    expect(screen.getByTestId("project-transcript-anomaly-text").textContent).toBe(
+      W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
     );
-    expect(screen.getByTestId("recovery-resume-durable")).toBeTruthy();
+    expect(screen.queryByTestId("recovery-resume-durable")).toBeNull();
     expect(screen.queryByTestId("recovery-requalify")).toBeNull();
-    expect(screen.getByTestId("project-recovery-banner").textContent).not.toMatch(
-      /repartir d'une intention claire/i,
-    );
-    fireEvent.click(screen.getByTestId("recovery-resume-durable"));
-    expect(onResumeDurable).toHaveBeenCalledTimes(1);
-    expect(onRequalify).not.toHaveBeenCalled();
+    expect(screen.queryByText(/Reprendre l'état enregistré/i)).toBeNull();
+    expect(screen.queryByText(/nouvelle intention/i)).toBeNull();
+  });
+
+  it("optional retry fires onRetryTranscript only", () => {
+    const onRetry = vi.fn();
+    render(<RecoverySurface onRetryTranscript={onRetry} />);
+    fireEvent.click(screen.getByTestId("recovery-retry-transcript"));
+    expect(onRetry).toHaveBeenCalledTimes(1);
   });
 
-  it("ProjectRecoveryBanner renders honesty copy and controlled requalify CTA", () => {
+  it("legacy ProjectRecoveryBanner still exposes controlled requalify CTA", () => {
     render(<ProjectRecoveryBanner />);
     expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
     expect(screen.getByText(W1_DURABLE_DISCLOSURE)).toBeTruthy();

```

#### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 9b380cb7..ab918957 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -37,6 +37,12 @@ vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
     lifecycleProjectionMock(...args),
   projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
@@ -261,11 +267,21 @@ beforeEach(() => {
     confirmAndExecuteLegacyFixture: vi.fn(),
     refreshResolvedM3RunningAttempt: vi.fn(),
     retryLastUserMessage: vi.fn(),
+    transcriptAvailability: "empty",
+    journalEntries: [],
+    journalCycleInstanceId: null,
+    selectedJournalEntryId: null,
+    setSelectedJournalEntryId: vi.fn(),
+    focusJournalExchanges: vi.fn(),
+    focusTranscriptTurn: vi.fn(),
+    clearFocusTurn: vi.fn(),
+    focusTurnId: null,
+    refreshConversationContinuity: vi.fn(),
   });
 });
 
 describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
-  it("CTA-1 cross-surface — Reformuler owns next action; Recovery/Lifecycle generics absent", async () => {
+  it("CTA-1 cross-surface — Reformuler owns next action; Recovery generics absent (auto-resume)", async () => {
     readActiveDecisionSubjectMock.mockResolvedValue({
       ok: true,
       kind: "pending_reinstruction_required",
@@ -278,8 +294,11 @@ describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
     render(<ProjectWorkspacePage projectId="prj:case-a" />);
 
     expect(await screen.findByTestId("project-principal")).toBeTruthy();
-    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
-    expect(screen.getByTestId("recovery-resume-durable")).toBeTruthy();
+    // AUTOMATIC RESUME — no generic Recovery chooser on Project open.
+    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
+    expect(screen.queryByTestId("recovery-resume-durable")).toBeNull();
+    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
+    expect(screen.queryByText(/Reprendre l'état enregistré/i)).toBeNull();
 
     fireEvent.click(screen.getByTestId("lps-drawer-toggle"));
 
@@ -287,10 +306,10 @@ describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
     expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
     expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
     expect(screen.queryByTestId("w3a-execute")).toBeNull();
 
     await waitFor(() => {
-      expect(screen.queryByTestId("recovery-requalify")).toBeNull();
       expect(
         screen.queryByTestId("lifecycle-define-deliverable-cta"),
       ).toBeNull();
@@ -306,18 +325,19 @@ describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
     expect(screen.queryByTestId("repository-binding-form")).toBeNull();
   });
 
-  it("CTA-5 — no Proposal ownership restores Recovery requalify + Lifecycle Nora CTA", async () => {
+  it("CTA-5 — no Proposal ownership restores Lifecycle Nora CTA; still no Recovery chooser", async () => {
     readActiveDecisionSubjectMock.mockResolvedValue({
       ok: true,
       kind: "none",
     });
 
     render(<ProjectWorkspacePage projectId="prj:case-a" />);
-    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
+    expect(await screen.findByTestId("project-principal")).toBeTruthy();
+    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
+    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
     fireEvent.click(screen.getByTestId("lps-drawer-toggle"));
 
     await waitFor(() => {
-      expect(screen.getByTestId("recovery-requalify")).toBeTruthy();
       expect(
         screen.getByTestId("lifecycle-define-deliverable-cta"),
       ).toBeTruthy();
@@ -333,13 +353,14 @@ describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
     });
 
     render(<ProjectWorkspacePage projectId="prj:case-a" />);
-    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
+    expect(await screen.findByTestId("project-principal")).toBeTruthy();
+    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
+    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
     fireEvent.click(screen.getByTestId("lps-drawer-toggle"));
 
     await waitFor(() => {
       expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
     });
-    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
     expect(
       screen.queryByTestId("lifecycle-define-deliverable-cta"),
     ).toBeNull();

```

#### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx`

```diff

```

### RecoverySurface.tsx (état courant post-ADAPT)

```tsx
"use client";

import { W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE } from "@/features/project-assistant/presentationLabels";
import styles from "./RecoverySurface.module.css";

/**
 * AUTOMATIC PROJECT RESUME — anomaly disclosure only.
 *
 * Product Project open rehydrates durable state automatically.
 * This surface is NOT a happy-path "Reprise" chooser.
 * It appears only when the Pilot transcript cannot be loaded.
 *
 * NEVER Truth C / HumanDecision / Confirmation authority.
 */
export function RecoverySurface({
  onRetryTranscript,
  message = W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
}: {
  /** Optional targeted retry — not a generic "resume Project" action. */
  onRetryTranscript?: () => void;
  message?: string;
}) {
  return (
    <section
      className={styles.anomaly}
      data-testid="project-transcript-anomaly"
      aria-labelledby="pm6-transcript-anomaly-title"
    >
      <div className={styles.body}>
        <p className={styles.eyebrow}>Conversation</p>
        <h2 id="pm6-transcript-anomaly-title" className={styles.title}>
          Historique temporairement indisponible
        </h2>
        <p className={styles.text} data-testid="project-transcript-anomaly-text">
          {message}
        </p>
      </div>
      {onRetryTranscript ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondary}
            data-testid="recovery-retry-transcript"
            onClick={onRetryTranscript}
          >
            Réessayer le chargement de la conversation
          </button>
        </div>
      ) : null}
    </section>
  );
}

```

## 11. Handoff publish

- branch: `sfia/review-handoff`
- file: `sfia-review-handoff/latest-chatgpt-review.md`
- commit: (filled after)
- remote SHA: (filled after)

## 12. Instruction ChatGPT

Lire remote handoff avant qualification Morris. Vérifier Automatic Resume, absence CTA happy path, AR, tests, screenshots, verdict.

Verdict pack: **READY FOR MACRO PR READINESS**
