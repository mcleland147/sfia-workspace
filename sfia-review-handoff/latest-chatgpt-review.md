# SFIA Review Pack — FULL CRITICAL
# P6 First Framing — UX & Recommendation Continuity Correction Pass (UX-01…UX-06)
# REPUBLICATION — modified content complete (v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 08:28:06 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Capacité v3 : V3-F05 (+ V3-F02, V3-F06)
- Cycle : 8 — Delivery / implémentation
- Profil : Critical
- Typologie : INC / EVOL
- GO Morris : **OUI** — six corrections UX/Recommendation Continuity
- Motif de republication : **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING** sur `5c386332…`
- Contenu ajouté : fichiers nouveaux **complets** + diffs utiles des fichiers modifiés
- Aucun changement Product code dans cette republication (pack/handoff seulement)
- Commit / push / PR / merge projet : **NON**
- Review pack niveau : **FULL CRITICAL**
- Mono-cycle : **confirmé** (même lot UX ; republication handoff)
- Synthesis only : **no**

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Repo | `/Users/morris/Projects/sfia-workspace` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| `origin/main` | `60247eb21074c5e7be76e09bcb66d850926ded1e` |
| Handoff tip avant republication | `5c38633201736f8a0a4e92054b27b250e372c8e3` |
| Staged projet | vide |
| Reset / clean / stash | **NON** |

---

## 2. Mapping UX → fichiers

| ID | Fichiers principaux |
|----|---------------------|
| UX-01 | `chatFirstFramingContinuity.ts` (NEW+), `FramingContinuityCard.tsx` (NEW+), `preCycleCandidateTrajectoryActions.ts` |
| UX-02 | `ConversationSurface.tsx`, `ProjectWorkspacePage.tsx`, `JournalSurface.tsx` |
| UX-03 | `ConversationSurface.tsx` |
| UX-04 | `resolveChatFirstCycleStartGate.ts`, `chatFirstFramingContinuity.ts` |
| UX-05 | `workspaceContextPresentation.ts` |
| UX-06 | `orchestrateF2.ts`, `composeF2PilotFacingNarrative.ts`, `buildProjectSystemPrompt.ts`, `resolveChatFirstCycleStartGate.ts` |
| Tests | `p6.ux.recommendationContinuity.ui.test.tsx` (**NEW**), F01 test assert UX-04, FramingContinuityCard UI |

---

## 3. Validations (inchangées — non rejouées dans cette republication)

| Check | Result |
|-------|--------|
| Vitest ciblé (cycle correction) | **8 files / 60 PASS** (déclaré au cycle UX ; non re-run ici) |
| REAL | **0** |
| Product code change this republication | **NONE** — handoff coverage only |
| Verdict métier | **LOCAL UX CORRECTION CANDIDATE — READY FOR CRITICAL REVIEW** (sous réserve de revue du contenu ci-dessous) |

---

## 4. FICHIERS NOUVEAUX — CONTENU COMPLET

### 4.1 `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
/**
 * P6 UX Correction Pass — Recommendation continuity (UX-02 / UX-03 / UX-05).
 * DETERMINISTIC UI only. No REAL / no provider.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import { deriveAttentionItems } from "@/features/pre-m6-product-ui/workspaceContextPresentation";
import {
  buildFramingTrajectoryExamination,
  framingContinuityPilotMessage,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { chatFirstStartSuccessMessage } from "@/features/project-assistant/f2/resolveChatFirstCycleStartGate";

afterEach(() => {
  cleanup();
});

function stubController(): ProductConversationController {
  return {
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    sendMessage: vi.fn(),
    busy: false,
    uiState: "idle",
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    modeLabel: "fixture",
    ephemeralNotice: null,
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    openContinuityPresentation: { kind: "none" },
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    transcriptAvailability: "available",
    decisionSubjectContinuity: null,
    governedExecutionContinuity: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    framingContinuity: null,
    framingContinuityBusy: false,
    framingContinuityError: null,
    refreshFramingContinuity: vi.fn(),
    prepareFramingCandidate: vi.fn(),
    approveFramingCandidate: vi.fn(),
    prepareFramingCycle: vi.fn(),
    startFramingPrepared: vi.fn(),
    qualificationFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    durableOutcomeFreshness: "none",
    recommendationFreshness: "none",
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    gateOpen: false,
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    toolEvents: [],
    listRef: { current: null },
  } as unknown as ProductConversationController;
}

describe("P6 UX Recommendation Continuity", () => {
  it("UX-02 — Ouvrir toggles inline details without calling discuss", () => {
    const onDiscuss = vi.fn();
    render(
      <ConversationSurface
        controller={stubController()}
        workRecommendations={[
          {
            epistemicItemId: "epi:acw:ux02",
            statement:
              "Commencer par recueillir des exemples concrets de difficultés vécues",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: null,
            createdAt: "2026-10-10T00:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:ux02",
          },
        ]}
        onDiscussRecommendation={onDiscuss}
      />,
    );
    expect(screen.getByTestId("durable-recommendation-status").textContent).toBe(
      "À examiner",
    );
    fireEvent.click(screen.getByTestId("conversation-open-recommendation"));
    expect(screen.getByTestId("durable-recommendation-details")).toBeInTheDocument();
    expect(onDiscuss).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("conversation-discuss-recommendation"));
    expect(onDiscuss).toHaveBeenCalledWith("epi:acw:ux02");
  });

  it("UX-03/05 — Work Recommendation is not « 1 décision à examiner »", () => {
    const items = deriveAttentionItems({
      decisionPending: false,
      lifecycle: null,
      pendingWorkRecommendationCount: 1,
      pendingWorkRecommendationDetail:
        "Commencer par recueillir des exemples concrets",
    });
    expect(items.some((i) => i.key === "decision")).toBe(false);
    expect(items.find((i) => i.key === "recommendation")?.headline).toMatch(
      /recommandation à examiner/i,
    );

    const structural = deriveAttentionItems({
      decisionPending: true,
      lifecycle: null,
      pendingWorkRecommendationCount: 0,
    });
    expect(structural[0]?.key).toBe("decision");
    expect(structural[0]?.headline).toMatch(/décision à examiner/i);
  });

  it("UX-01 — examination refuses insufficient Product facts", () => {
    const thin = buildFramingTrajectoryExamination({
      objective: null,
      catalogLabel: "Cadrage",
      steps: [],
      presentationDigest: null,
    });
    expect(thin.examinationSufficient).toBe(false);

    const ok = buildFramingTrajectoryExamination({
      objective: "Explorer les difficultés",
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Préparer le Cadrage" }],
      presentationDigest: "sha256:abc",
    });
    expect(ok.examinationSufficient).toBe(true);
    expect(ok.knownStepLabels).toEqual(["Préparer le Cadrage"]);
    expect(ok.validationImplications).toMatch(/ne démarre pas/i);
  });

  it("UX-04 — START success message has no technical cycle id", () => {
    const msg = chatFirstStartSuccessMessage({
      cycleLabel: "Cadrage",
      cycleInstanceId: "cyc:trj-abcdef012345678901234567",
    });
    expect(msg).toMatch(/Le Cadrage est maintenant actif/);
    expect(msg).not.toMatch(/cyc:trj-/);
    expect(framingContinuityPilotMessage("active", "Cadrage")).not.toMatch(
      /cyc:/,
    );
  });
});
```

### 4.2 `projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts`

```ts
/**
 * P6 chat-first first Framing continuity — pure phase classification.
 * Does not mutate Product. Does not invent HumanDecision / START.
 *
 * Phases map Rec CURRENT → candidate → decision → prepared → active
 * using existing OA objects only.
 */

export type FramingContinuityPhase =
  | "idle"
  | "recommendation_ready"
  | "awaiting_trajectory_decision"
  | "trajectory_decided_prepare_cycle"
  | "ready_to_start"
  | "active"
  | "blocked_no_recommendation"
  | "blocked_stale_or_incomplete";

/**
 * UX-01 — Product facts the Pilot can examine before trajectory HD.
 * Never invent steps / commitments; omit when Product has nothing honest.
 */
export type FramingTrajectoryExamination = {
  readonly objective: string | null;
  readonly proposedScopeLabel: string | null;
  readonly knownStepLabels: readonly string[];
  readonly validationImplications: string;
  readonly limitsOrReservations: string | null;
  /** false when Product facts are too thin for an informed decision UI. */
  readonly examinationSufficient: boolean;
};

export type FramingContinuitySnapshot = {
  readonly phase: FramingContinuityPhase;
  readonly catalogLabel: string | null;
  readonly targetCycleTypeId: string | null;
  readonly recommendationId: string | null;
  readonly semanticKey: string | null;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly presentationDigest: string | null;
  readonly approvalOptionLabel: string | null;
  readonly preparedCycleInstanceId: string | null;
  readonly activeCycleInstanceId: string | null;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly message: string;
  /** Populated for awaiting_trajectory_decision from Product presentation + LPS. */
  readonly examination: FramingTrajectoryExamination | null;
};

/** Honest validation implications — not inventing START / execution. */
export function framingTrajectoryValidationImplications(
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  return `Valider enregistre votre décision sur cette trajectoire pour « ${cycle} » et permet de préparer le cycle. Cela ne démarre pas le cycle et n'exécute rien.`;
}

export function buildFramingTrajectoryExamination(input: {
  readonly objective: string | null | undefined;
  readonly catalogLabel: string | null | undefined;
  readonly steps: readonly { order: number; label: string }[] | null | undefined;
  readonly presentationDigest: string | null | undefined;
}): FramingTrajectoryExamination {
  const objective = (input.objective ?? "").trim() || null;
  const cycle = (input.catalogLabel ?? "").trim() || null;
  const knownStepLabels = [...(input.steps ?? [])]
    .slice()
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label))
    .map((s) => (s.label ?? "").trim())
    .filter((l) => l.length > 0);
  const hasDigest = Boolean((input.presentationDigest ?? "").trim());
  const examinationSufficient =
    hasDigest && (Boolean(objective) || knownStepLabels.length > 0);
  return {
    objective,
    proposedScopeLabel: cycle
      ? `Cycle proposé : « ${cycle} » (périmètre de travail du prochain cycle, pas encore démarré).`
      : null,
    knownStepLabels,
    validationImplications: framingTrajectoryValidationImplications(cycle),
    limitsOrReservations: examinationSufficient
      ? "Limite : aucune exécution, aucun START automatique, aucune décision inventée. Si quelque chose reste flou, continuez à explorer avant de valider."
      : "Les faits Product disponibles sont incomplets pour une validation pleinement éclairée. Continuez à explorer avec Nora, ou attendez une présentation de trajectoire complète.",
    examinationSufficient,
  };
}

/** Pilot-facing copy — no internal governance jargon. */
export function framingContinuityPilotMessage(
  phase: FramingContinuityPhase,
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  switch (phase) {
    case "recommendation_ready":
      return `Je recommande de commencer par un « ${cycle} » exploratoire. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
    case "awaiting_trajectory_decision":
      return `La trajectoire proposée pour « ${cycle} » est prête à examiner. Validez cette direction pour continuer — un simple « ok » ne suffit pas.`;
    case "trajectory_decided_prepare_cycle":
      return `La direction pour « ${cycle} » est validée. Préparez le cycle, puis démarrez-le quand vous serez prêt.`;
    case "ready_to_start":
      return `Le cycle « ${cycle} » est prêt. Vous pouvez le démarrer dans la conversation.`;
    case "active":
      // UX-04 — pilot-facing; no technical cycle instance ids.
      return `Le ${cycle} est maintenant actif.`;
    case "blocked_no_recommendation":
      return `Aucune recommandation courante n'est disponible pour préparer le premier cycle. Reformulez avec Nora.`;
    case "blocked_stale_or_incomplete":
      return `La recommandation ou la trajectoire n'est plus à jour. Aucun démarrage n'est engagé.`;
    case "idle":
    default:
      return "";
  }
}

/**
 * Projection for ConversationSurface — hide idle / blocked / already-active.
 * Pure; does not invent CURRENT. Active cycle is shown via LPS surfaces.
 */
export function framingContinuityForConversationDisplay(
  snap: FramingContinuitySnapshot | null | undefined,
): FramingContinuitySnapshot | null {
  if (!snap) return null;
  const phase = snap.phase;
  if (
    phase === "idle" ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete" ||
    phase === "active"
  ) {
    return null;
  }
  return snap;
}

/**
 * Deterministic phase from already-loaded Product facts.
 * Callers must not invent CURRENT / digest / prepared ids.
 */
export function classifyFramingContinuityPhase(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly candidatePresent: boolean;
  readonly candidateProvenanceResolved: boolean;
  readonly awaitingDecisionPresentation: boolean;
  readonly decidedTrajectoryPresent: boolean;
  readonly preparedCompletePresent: boolean;
}): FramingContinuityPhase {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) return "active";
  if (input.preparedCompletePresent) return "ready_to_start";
  if (input.decidedTrajectoryPresent) return "trajectory_decided_prepare_cycle";
  if (input.awaitingDecisionPresentation) return "awaiting_trajectory_decision";
  if (input.candidatePresent && !input.candidateProvenanceResolved) {
    return "blocked_stale_or_incomplete";
  }
  if (input.hasCurrentNextCycleRecommendation) return "recommendation_ready";
  return "blocked_no_recommendation";
}
```

### 4.3 `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx`

```tsx
"use client";

/**
 * P6 chat-first Framing continuity card — inline ConversationSurface.
 * Pure projection + authorized callbacks. Does not invent HD / START.
 * Visual language aligns with P3 GovernedDecisionCard / Recommendation frames.
 * Pilot-facing copy only — no internal governance jargon.
 */

import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import styles from "./GovernedDecisionCard.module.css";

export type FramingContinuityCardProps = {
  readonly continuity: FramingContinuitySnapshot;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onPrepareCandidate: () => void;
  readonly onApproveCandidate: () => void;
  readonly onPrepareCycle: () => void;
  readonly onStartPrepared: () => void;
  readonly onKeepExploring?: () => void;
};

export function FramingContinuityCard({
  continuity,
  busy,
  error,
  onPrepareCandidate,
  onApproveCandidate,
  onPrepareCycle,
  onStartPrepared,
  onKeepExploring,
}: FramingContinuityCardProps) {
  const cycle = (continuity.catalogLabel ?? "").trim() || "Cadrage";
  const phase = continuity.phase;
  const examination = continuity.examination;

  if (
    phase === "idle" ||
    phase === "active" ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete"
  ) {
    return null;
  }

  const title =
    phase === "recommendation_ready"
      ? `Commencer par un « ${cycle} » exploratoire`
      : phase === "awaiting_trajectory_decision"
        ? `Examiner la trajectoire pour « ${cycle} »`
        : phase === "trajectory_decided_prepare_cycle"
          ? `Préparer le cycle « ${cycle} »`
          : phase === "ready_to_start"
            ? `Démarrer « ${cycle} »`
            : continuity.message || `Continuer vers « ${cycle} »`;

  const optionBody =
    phase === "awaiting_trajectory_decision"
      ? continuity.approvalOptionLabel?.trim() ||
        `Valider cette direction pour « ${cycle} ».`
      : continuity.message;

  const primaryLabel =
    phase === "recommendation_ready"
      ? busy
        ? "Préparation…"
        : "Préparer cette direction"
      : phase === "awaiting_trajectory_decision"
        ? busy
          ? "Enregistrement…"
          : "Valider cette direction"
        : phase === "trajectory_decided_prepare_cycle"
          ? busy
            ? "Préparation…"
            : "Préparer le cycle"
          : phase === "ready_to_start"
            ? busy
              ? "Démarrage…"
              : `Démarrer le ${cycle}`
            : null;

  const primaryDisabled =
    busy ||
    (phase === "awaiting_trajectory_decision" &&
      (!continuity.presentationDigest ||
        examination?.examinationSufficient === false));

  function onPrimary() {
    if (phase === "recommendation_ready") onPrepareCandidate();
    else if (phase === "awaiting_trajectory_decision") onApproveCandidate();
    else if (phase === "trajectory_decided_prepare_cycle") onPrepareCycle();
    else if (phase === "ready_to_start") onStartPrepared();
  }

  return (
    <section
      className={styles.card}
      data-testid="framing-continuity-card"
      data-phase={phase}
      aria-labelledby="framing-continuity-title"
    >
      <p className={styles.label}>
        {phase === "awaiting_trajectory_decision"
          ? "Décision"
          : phase === "ready_to_start"
            ? "Démarrage"
            : "Recommandation"}
      </p>
      <h3
        id="framing-continuity-title"
        className={styles.title}
        data-testid="framing-continuity-title"
      >
        {title}
      </h3>
      <p className={styles.youDecide} data-testid="framing-continuity-authority">
        Vous décidez
      </p>

      {/* UX-01 — examine Product trajectory facts before HD */}
      {phase === "awaiting_trajectory_decision" && examination ? (
        <div
          className={styles.optionBlock}
          data-testid="framing-continuity-examination"
        >
          <p className={styles.optionEyebrow}>Ce qui serait validé</p>
          {examination.objective ? (
            <p className={styles.optionBody} data-testid="framing-exam-objective">
              Objectif : {examination.objective}
            </p>
          ) : (
            <p className={styles.optionMeta} data-testid="framing-exam-objective-missing">
              Objectif Product : non précisé dans l&apos;état vivant actuel.
            </p>
          )}
          {examination.proposedScopeLabel ? (
            <p className={styles.optionBody} data-testid="framing-exam-scope">
              {examination.proposedScopeLabel}
            </p>
          ) : null}
          {examination.knownStepLabels.length > 0 ? (
            <div data-testid="framing-exam-steps">
              <p className={styles.optionEyebrow}>Étapes connues</p>
              {examination.knownStepLabels.map((label, index) => (
                <p
                  key={`${index}-${label}`}
                  className={styles.optionBody}
                >
                  {index + 1}. {label}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles.optionMeta} data-testid="framing-exam-steps-missing">
              Aucune étape Product listée pour cette trajectoire.
            </p>
          )}
          <p className={styles.optionBody} data-testid="framing-exam-implications">
            {examination.validationImplications}
          </p>
          {examination.limitsOrReservations ? (
            <p className={styles.optionMeta} data-testid="framing-exam-limits">
              {examination.limitsOrReservations}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className={styles.optionBlock}>
        <p className={styles.optionEyebrow}>Prochaine étape</p>
        <p className={styles.optionBody} data-testid="framing-continuity-body">
          {optionBody}
        </p>
      </div>
      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="framing-continuity-error"
        >
          {error}
        </p>
      ) : null}
      <div className={styles.actions}>
        {primaryLabel ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="framing-continuity-primary"
            disabled={primaryDisabled}
            onClick={onPrimary}
          >
            {primaryLabel}
          </button>
        ) : null}
        {onKeepExploring &&
        (phase === "recommendation_ready" ||
          phase === "awaiting_trajectory_decision") ? (
          <button
            type="button"
            className={styles.tertiary}
            data-testid="framing-continuity-keep-exploring"
            disabled={busy}
            onClick={onKeepExploring}
          >
            Continuer à explorer
          </button>
        ) : null}
      </div>
    </section>
  );
}
```

---

## 5. FICHIERS MODIFIÉS — DIFFS UTILES (git diff vs HEAD campagne)

> Base HEAD campagne : `db45e9c4…`. Les diffs incluent Delivery/CP/CC **et** UX lorsque le fichier porte les deux.

### `projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
index 0fc0f190..494f8be9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
@@ -165,12 +165,17 @@ export function deriveTrajectoryNodes(
 }

 export type AttentionItem = {
-  key: "decision" | "reserve";
+  /** UX-05 — recommendation ≠ structural decision (P2-D-01). */
+  key: "decision" | "recommendation" | "reserve";
   headline: string;
   detail: string;
 };

-/** « Attention » — pending decision on the active proposal + open reservations. */
+/**
+ * « Attention » — structural decision subjects vs Work Recommendations vs reserves.
+ * UX-05 / P2-D-01: a non-structural Work Recommendation must not read as
+ * « 1 décision à examiner ».
+ */
 export function deriveAttentionItems(input: {
   decisionPending: boolean;
   lifecycle: PilotLifecycleProjection | null;
@@ -182,18 +187,36 @@ export function deriveAttentionItems(input: {
   openReservationDetail?: string | null;
 }): AttentionItem[] {
   const items: AttentionItem[] = [];
-  const pendingWork = input.pendingWorkRecommendationCount ?? 0;
-  if (input.decisionPending || pendingWork > 0) {
-    const fromReco = input.pendingWorkRecommendationDetail?.trim() || "";
+  if (input.decisionPending) {
     items.push({
       key: "decision",
       headline: "1 décision à examiner",
+      detail: "Une proposition attend votre décision dans la conversation.",
+    });
+  }
+  const pendingWork = input.pendingWorkRecommendationCount ?? 0;
+  if (pendingWork > 0 && !input.decisionPending) {
+    const fromReco = input.pendingWorkRecommendationDetail?.trim() || "";
+    items.push({
+      key: "recommendation",
+      headline:
+        pendingWork === 1
+          ? "1 recommandation à examiner"
+          : `${pendingWork} recommandations à examiner`,
       detail: fromReco
         ? fromReco
-        : input.decisionPending
-          ? "Une proposition attend votre décision dans la conversation."
-          : "Une recommandation attend votre décision dans la conversation.",
+        : "Une recommandation de travail est proposée — ce n'est pas encore une décision structurelle.",
     });
+  } else if (pendingWork > 0 && input.decisionPending) {
+    // Structural decision already listed; keep Work Rec as secondary detail only.
+    const fromReco = input.pendingWorkRecommendationDetail?.trim() || "";
+    if (fromReco) {
+      items.push({
+        key: "recommendation",
+        headline: "Recommandation associée",
+        detail: fromReco,
+      });
+    }
   }
   const summary = input.lifecycle?.reservationSummary;
   const active = summary?.activeCount ?? 0;
```

### `projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts b/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
index c972f71e..f76744b0 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
@@ -209,10 +209,10 @@ export function chatFirstStartBlockMessage(input: {
     case "PREPARED_CYCLE_AMBIGUOUS":
       return `Plusieurs cycles ${cycle} préparés (liés à la trajectoire) sont disponibles (${input.preparedCount ?? "plusieurs"}). Studio ne sélectionne pas automatiquement lequel démarrer. Aucun nouveau cycle n'a été créé. Précisez le cycle dans Trajectoire, puis démarrez.`;
     case "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT":
-      return `Des cycles ${cycle} existent déjà (${input.legacyCount ?? "plusieurs"}) mais ne sont pas liés à une trajectoire préparée — le démarrage Chat-first gouverné ne s'applique pas. Aucun cycle supplémentaire n'a été créé. Utilisez Trajectoire pour préparer puis démarrer un cycle lié, sans nouvelle qualification automatique.`;
+      return `Des cycles ${cycle} existent déjà (${input.legacyCount ?? "plusieurs"}) mais ne sont pas liés à une trajectoire préparée — le démarrage Chat-first gouverné ne s'applique pas. Aucun cycle supplémentaire n'a été créé. Préparez d'abord une trajectoire liée, puis utilisez la carte de préparation / démarrage dans la conversation.`;
     case "PREPARED_CYCLE_MISSING":
     case "NO_PREPARED_CYCLE":
-      return `Aucun cycle ${cycle} préparé et lié à la trajectoire n'est disponible au démarrage. Votre confirmation en conversation n'active rien à elle seule. Aucun nouveau cycle n'a été créé. Préparez d'abord le cycle depuis Trajectoire (après décision de trajectoire si requise), puis démarrez.`;
+      return `Aucun cycle ${cycle} préparé et lié à la trajectoire n'est disponible au démarrage. Votre confirmation en conversation n'active rien à elle seule. Aucun nouveau cycle n'a été créé. Préparez d'abord le cycle via la carte proposée dans la conversation (après décision de trajectoire si requise), puis démarrez.`;
     case "AUTHORITY_DENIED":
     case "LOCAL_AUTHORITY_DISABLED":
       return `Le démarrage de ${cycle} est refusé : autorité Pilote indisponible pour START. Aucun nouveau cycle n'a été créé. L'état vivant du projet reste inchangé.`;
@@ -228,8 +228,12 @@ export function chatFirstStartSuccessMessage(input: {
   readonly cycleInstanceId: string;
 }): string {
   const label = (input.cycleLabel ?? "").trim();
-  const cycle = label ? `« ${label} »` : "le cycle";
-  return `Le cycle ${cycle} est maintenant actif sur le projet (${input.cycleInstanceId}). L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
+  // UX-04 — keep cycleInstanceId for callers/logs; never expose in Pilot copy.
+  void input.cycleInstanceId;
+  if (label) {
+    return `Le ${label} est maintenant actif. L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
+  }
+  return `Le cycle est maintenant actif. L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
 }

 /**
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 4fdb85e2..45458767 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -405,19 +405,18 @@ export function ProjectWorkspacePage({
   );

   /**
-   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — prefill only. Resuming a
-   * Recommendation in the chat writes nothing and decides nothing; the Pilot
-   * reads, edits and sends.
+   * UX-02 — secondary discuss only. Prefill a neutral question.
+   * Never presupposes a HumanDecision. Never sends. Writes nothing.
    */
-  const resumeRecommendationInChat = (recommendationId: string) => {
+  const discussRecommendationWithNora = (recommendationId: string) => {
     const card = cycleRecommendations.find(
       (r) => r.epistemicItemId === recommendationId,
     );
     if (!card) return;
     controller.setDraft(
       [
-        `Nora, reprenons cette recommandation : « ${card.statement} »`,
-        "Dis-moi ce qu'elle implique et ce qui manque pour que je tranche. Je décide.",
+        `Nora, regardons cette recommandation : « ${card.statement} ».`,
+        "Qu'est-ce qu'elle implique concrètement pour la suite, sans en faire encore une décision ?",
       ].join("\n"),
     );
     focusConversation();
@@ -852,7 +851,7 @@ export function ProjectWorkspacePage({
                   latestSynthesis={latestSynthesis}
                   onOpenSynthesis={openSynthesisDetail}
                   workRecommendations={cycleRecommendations}
-                  onResumeRecommendation={resumeRecommendationInChat}
+                  onDiscussRecommendation={discussRecommendationWithNora}
                 />
               </div>
             </>
@@ -925,7 +924,7 @@ export function ProjectWorkspacePage({
               reservationBusyId={reservationBusyId}
               recommendations={cycleRecommendations}
               decisions={cycleDecisions}
-              onResumeRecommendationInChat={resumeRecommendationInChat}
+              onResumeRecommendationInChat={discussRecommendationWithNora}
             />
           ) : null}

@@ -1075,7 +1074,7 @@ export function ProjectWorkspacePage({
                 reservationBusyId={reservationBusyId}
                 recommendations={cycleRecommendations}
                 decisions={cycleDecisions}
-                onResumeRecommendationInChat={resumeRecommendationInChat}
+                onResumeRecommendationInChat={discussRecommendationWithNora}
               />
               {reservationNotice ? (
                 <p
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
index df013c45..848927f4 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
@@ -623,7 +623,7 @@ export function JournalSurface({
                           onResumeRecommendationInChat(card.epistemicItemId)
                         }
                       >
-                        Reprendre dans le chat
+                        En discuter avec Nora
                       </button>
                     </div>
                   ) : null}
```

### `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts b/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
index 8330819b..516f8e8e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
@@ -826,6 +826,24 @@ export function composeF2PilotFacingNarrative(
     parts.push(input.mw5EscalatePiloteText!.trim());
   }

+  // UX-06 — contextual conversational next action (new messages only).
+  // Never point to a generic « action Studio » when the chat path exists.
+  if (
+    stance.kind === "neutral_propose" ||
+    stance.kind === "accept_recommendation" ||
+    stance.kind === "ambiguous"
+  ) {
+    if (input.morrisGateRequired || stance.kind === "accept_recommendation") {
+      parts.push(
+        "Prochaine étape : examinez la proposition dans la conversation, puis validez ou amendez explicitement si une décision est requise.",
+      );
+    } else if (stance.kind === "neutral_propose") {
+      parts.push(
+        "Prochaine étape : vous pouvez ouvrir la recommandation dans la conversation pour en discuter, sans en faire encore une décision.",
+      );
+    }
+  }
+
   return parts
     .map((p) => p.trim())
     .filter(Boolean)
```

### `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index f00ddf8e..177a9ffc 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -156,10 +156,36 @@ export function buildProjectSystemPrompt(
         .join(", ") +
       ".",
     "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
+    "",
+    "=== QUALIFICATION SIGNALS (D-GF-START-01 — même tour que lifecycleRecommendation) ===",
+    "Six booléens explicites, chacun évalué honnêtement (jamais omis ni rempli par commodité) :",
+    "structuralChange, securityImpact, architectureImpact, dataImpact, irreversible, lowRiskBounded.",
+    "CAS A — NEXT_CYCLE préparable / supportable :",
+    "Si tu émets lifecycleRecommendation NEXT_CYCLE destinée à être matérialisable,",
+    "qualificationSignals DOIT être l'objet complet des six booléens (jamais null).",
+    "Qualifie chaque signal selon le contexte projet et les effets envisagés du cycle recommandé.",
+    "Les inconnues qui appartiennent normalement au cycle (ex. Cadrage exploratoire) NE justifient PAS",
+    "un questionnaire pré-cycle artificiel NI l'omission des six signaux.",
+    "Une qualification explicite des signaux N'EXIGE PAS que le Cadrage soit déjà réalisé.",
+    "Ne choisis PAS Light / lowRiskBounded=true par défaut. Ne neutralise PAS Critical artificiellement.",
+    "Ne présente PAS la Recommendation comme trajectoire préparée, CycleInstance créé, ou START.",
+    "CAS B — signaux non qualifiables honnêtement :",
+    "Ne invente PAS de valeurs (pas de false/true par défaut pour forcer une persistance).",
+    "Ne produis PAS un NEXT_CYCLE présenté comme durablement matérialisable sans les six signaux.",
+    "lifecycleRecommendation = null ; conserve une narrative utile ; explicite l'incertitude sans jargon ;",
+    "clarification ciblée seulement si elle change réellement routage, risque, profil ou gate.",
+    "CAS C — FINALIZE_CURRENT_CYCLE : qualificationSignals peut être null (ignoré à la matérialisation).",
+    "CAS D — Recommendation CURRENT applicable : ne pas réémettre uniquement pour un nouveau message",
+    "(continuité conversationGuidance) ; les règles ci-dessus s'appliquent à toute NOUVELLE émission NEXT_CYCLE.",
+    "",
     "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
+    "UX-06 — Ne dis PAS « utilisez l'action correspondante dans Studio » / « via le panneau d'état »",
+    "lorsque le parcours chat-first propose déjà une carte ou une action dans la conversation.",
+    "Préfère indiquer la prochaine action conversationnelle disponible (examiner, discuter, valider, préparer, démarrer).",
     "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
     "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
     "Une Recommendation CURRENT réutilisée reste une Recommendation — jamais une HumanDecision ni un cycle lancé.",
+    "Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution.",
     "",
     "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
     "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
```

### `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
index ff92e5c7..477d5548 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
@@ -799,7 +799,11 @@ describe("P6-HQA-F01 START success via orchestrateAssistantSend (prepared)", ()
     if (!start.ok) return;

     expect(start.text).toMatch(/est maintenant actif/i);
-    expect(start.text).toMatch(new RegExp(preparedId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
+    // UX-04 — technical cycle ids stay out of Pilot-facing START copy.
+    expect(start.text).not.toMatch(/cyc:trj-/);
+    expect(start.text).not.toMatch(
+      new RegExp(preparedId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
+    );
     expect(start.ok && start.f2?.turnKind).toBe("f1_informative");
     expect(start.ok && start.f2?.turnKind).not.toBe("f2_proposal");
```

## 6. FICHIERS MODIFIÉS VOLUMINEUX — DIFFS COMPLETS

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 7cfbcf82..d7aee7d1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -35,6 +35,7 @@ import {
   GovernedDecisionCard,
   presentGovernedDecisionNoraPreface,
 } from "./GovernedDecisionCard";
+import { FramingContinuityCard } from "./FramingContinuityCard";
 import { GovernedConfirmationCard } from "./GovernedConfirmationCard";
 import styles from "./ConversationSurface.module.css";

@@ -137,6 +138,12 @@ export type ConversationSurfaceProps = {
    * (same durable cards as Journal › Recommandations). Presentation only.
    */
   workRecommendations?: readonly WorkRecommendationProjectionCard[];
+  /**
+   * UX-02 — secondary only. Prefills a neutral discuss draft.
+   * Must NOT be wired to the primary « Ouvrir » control.
+   */
+  onDiscussRecommendation?: (recommendationId: string) => void;
+  /** @deprecated Prefer onDiscussRecommendation — kept for call-site compat. */
   onResumeRecommendation?: (recommendationId: string) => void;
 };

@@ -167,8 +174,11 @@ export function ConversationSurface({
   latestSynthesis = null,
   onOpenSynthesis,
   workRecommendations = [],
+  onDiscussRecommendation,
   onResumeRecommendation,
 }: ConversationSurfaceProps) {
+  const discussRecommendation =
+    onDiscussRecommendation ?? onResumeRecommendation;
   const fieldId = useId();
   const liveRegionId = useId();
   const composerInputRef = useRef<HTMLTextAreaElement | null>(null);
@@ -178,6 +188,10 @@ export function ConversationSurface({
   const [proposalOpen, setProposalOpen] = useState(exposeLegacyAuthorityPath);
   const [synthesisOpen, setSynthesisOpen] = useState(false);
   const [executionContractOpen, setExecutionContractOpen] = useState(false);
+  /** UX-02 — durable Work Recommendation inline details (Ouvrir ≠ composer). */
+  const [durableWorkRecOpenId, setDurableWorkRecOpenId] = useState<
+    string | null
+  >(null);
   const {
     listRef,
     messages,
@@ -201,6 +215,13 @@ export function ConversationSurface({
     revealGovernedDecisionAlternate,
     inspectGovernedContract,
     confirmGovernedContract,
+    framingContinuity,
+    framingContinuityBusy,
+    framingContinuityError,
+    prepareFramingCandidate,
+    approveFramingCandidate,
+    prepareFramingCycle,
+    startFramingPrepared,
     reservesText,
     setReservesText,
     f3Prepare,
@@ -834,6 +855,34 @@ export function ConversationSurface({
           </p>
         </aside>
       ) : null}
+      {framingContinuity &&
+      framingContinuity.phase !== "idle" &&
+      framingContinuity.phase !== "active" &&
+      framingContinuity.phase !== "blocked_no_recommendation" &&
+      framingContinuity.phase !== "blocked_stale_or_incomplete" ? (
+        <div
+          className={styles.governedMomentSlot}
+          data-testid="framing-continuity-slot"
+        >
+          <p className={styles.noraMomentLabel}>Nora</p>
+          <p className={styles.noraMomentBody}>
+            {framingContinuity.message ||
+              "Poursuivez dans la conversation pour préparer le prochain cycle."}
+          </p>
+          <FramingContinuityCard
+            continuity={framingContinuity}
+            busy={framingContinuityBusy}
+            error={framingContinuityError}
+            onPrepareCandidate={prepareFramingCandidate}
+            onApproveCandidate={approveFramingCandidate}
+            onPrepareCycle={prepareFramingCycle}
+            onStartPrepared={startFramingPrepared}
+            onKeepExploring={() => {
+              composerInputRef.current?.focus();
+            }}
+          />
+        </div>
+      ) : null}
       {boundAwaitingDecision ? (
         <div
           className={styles.governedMomentSlot}
@@ -1733,11 +1782,14 @@ export function ConversationSurface({
                     card.status === "active" && !card.dispositionDecisionId,
                 )
                 .slice(0, 1)
-                .map((card) => (
+                .map((card) => {
+                  const open = durableWorkRecOpenId === card.epistemicItemId;
+                  return (
                   <div
                     key={card.epistemicItemId}
                     className={styles.subCardGold}
                     data-testid="durable-recommendation-card"
+                    data-expanded={open ? "true" : "false"}
                   >
                     <div className={styles.p3CardHead}>
                       <div className={styles.p3CardBody}>
@@ -1753,27 +1805,69 @@ export function ConversationSurface({
                         </p>
                       </div>
                       <div className={styles.p3CardRight}>
-                        <span className={styles.p3CardStatusWarn}>
+                        <span
+                          className={styles.p3CardStatusWarn}
+                          data-testid="durable-recommendation-status"
+                        >
+                          {/* UX-03 — P2-D-01: Recommendation ≠ HumanDecision */}
                           {card.dispositionDecisionId
-                            ? "Décidée"
-                            : "En attente de décision"}
+                            ? "Dispositionnée"
+                            : "À examiner"}
                         </span>
-                        {onResumeRecommendation ? (
+                        <button
+                          type="button"
+                          className={styles.p3CardLink}
+                          data-testid="conversation-open-recommendation"
+                          aria-expanded={open}
+                          onClick={() =>
+                            setDurableWorkRecOpenId((cur) =>
+                              cur === card.epistemicItemId
+                                ? null
+                                : card.epistemicItemId,
+                            )
+                          }
+                        >
+                          {open ? "Fermer" : "Ouvrir →"}
+                        </button>
+                      </div>
+                    </div>
+                    {open ? (
+                      <div
+                        className={styles.ui05ObjectDetails}
+                        data-testid="durable-recommendation-details"
+                      >
+                        <dl className={styles.facts}>
+                          <div className={styles.factWide}>
+                            <dt>Proposition</dt>
+                            <dd>{card.statement}</dd>
+                          </div>
+                          <div className={styles.factWide}>
+                            <dt>Matérialité</dt>
+                            <dd data-testid="durable-recommendation-materiality">
+                              Recommandation opérationnelle — pas une
+                              HumanDecision structurelle automatique. Vous
+                              pouvez en discuter, la disposer dans le chat, ou
+                              la laisser en suspens.
+                            </dd>
+                          </div>
+                        </dl>
+                        {discussRecommendation ? (
                           <button
                             type="button"
                             className={styles.p3CardLink}
-                            data-testid="conversation-resume-recommendation"
+                            data-testid="conversation-discuss-recommendation"
                             onClick={() =>
-                              onResumeRecommendation(card.epistemicItemId)
+                              discussRecommendation(card.epistemicItemId)
                             }
                           >
-                            Ouvrir →
+                            En discuter avec Nora
                           </button>
                         ) : null}
                       </div>
-                    </div>
+                    ) : null}
                   </div>
-                ))
+                  );
+                })
             : durableEvidenceOutcome ? (
                 <div
                   className={styles.subCardGold}
@@ -1797,7 +1891,7 @@ export function ConversationSurface({
                     </div>
                     <div className={styles.p3CardRight}>
                       <span className={styles.p3CardStatusWarn}>
-                        En attente de décision
+                        À examiner
                       </span>
                     </div>
                   </div>
```

### `projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
index 8abd5f05..8f23b79b 100644
--- a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
@@ -514,3 +514,254 @@ export async function startPreparedTrajectoryCycleAction(input: {
     lpsVersionAfter: result.lpsVersionAfter,
   };
 }
+
+/**
+ * P6 chat-first Framing — read-only continuity snapshot for ConversationSurface.
+ * Reuses prepare/read/approval/start readers. Never invents CURRENT or digests.
+ */
+export async function projectAssistantReadFramingContinuityAction(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  code?: string;
+  message?: string;
+  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
+}> {
+  const {
+    buildFramingTrajectoryExamination,
+    classifyFramingContinuityPhase,
+    framingContinuityPilotMessage,
+  } = await import("./f2/chatFirstFramingContinuity");
+
+  const pre = await projectAssistantReadPreCycleCandidateTrajectoryAction({
+    projectId: input.projectId,
+  });
+  if (!pre.ok) {
+    return { ok: false, code: pre.code, message: pre.message };
+  }
+
+  const approval =
+    await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
+      projectId: input.projectId,
+    });
+
+  const prepared = await readPreparedTrajectoryCycleAction({
+    projectId: input.projectId,
+  });
+
+  const hasCurrent = pre.hasCurrentNextCycleRecommendation === true;
+  const candidate = pre.candidate ?? null;
+  const presentation =
+    approval.ok && approval.presentation ? approval.presentation : null;
+  const alreadyDecided =
+    approval.ok && approval.alreadyDecided ? approval.alreadyDecided : null;
+  const preparedCycle =
+    prepared.ok && prepared.prepared ? prepared.prepared : null;
+
+  const phase = classifyFramingContinuityPhase({
+    activeCycleInstanceId: pre.activeCycleInstanceId,
+    hasCurrentNextCycleRecommendation: hasCurrent,
+    candidatePresent: candidate != null,
+    candidateProvenanceResolved: candidate?.provenanceStatus === "RESOLVED",
+    awaitingDecisionPresentation: presentation != null,
+    decidedTrajectoryPresent:
+      alreadyDecided != null &&
+      alreadyDecided.prepareBlockedReason !== "cycle_type_already_completed",
+    preparedCompletePresent: preparedCycle != null,
+  });
+
+  const catalogLabel =
+    presentation?.catalogLabel ??
+    alreadyDecided?.catalogLabel ??
+    preparedCycle?.catalogLabel ??
+    candidate?.catalogLabel ??
+    null;
+  const targetCycleTypeId =
+    presentation?.targetCycleTypeId ??
+    alreadyDecided?.targetCycleTypeId ??
+    preparedCycle?.cycleTypeId ??
+    candidate?.targetCycleTypeId ??
+    null;
+
+  // UX-01 — LPS objective is Product truth; never invent steps beyond presentation.
+  let lpsObjective: string | null = null;
+  const runtime = getRuntimeApplicationService();
+  if (runtime.oa) {
+    const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute(
+      { projectId: input.projectId },
+    );
+    if (lps.ok) {
+      lpsObjective = (lps.livingProjectState.objective ?? "").trim() || null;
+    }
+  }
+
+  const examination =
+    phase === "awaiting_trajectory_decision"
+      ? buildFramingTrajectoryExamination({
+          objective: lpsObjective,
+          catalogLabel,
+          steps: presentation?.steps ?? candidate?.steps ?? null,
+          presentationDigest: presentation?.presentationDigest ?? null,
+        })
+      : null;
+
+  return {
+    ok: true,
+    continuity: {
+      phase,
+      catalogLabel,
+      targetCycleTypeId,
+      recommendationId:
+        presentation?.recommendationId ?? candidate?.recommendationId ?? null,
+      semanticKey: presentation?.semanticKey ?? candidate?.semanticKey ?? null,
+      trajectoryId:
+        presentation?.trajectoryId ??
+        alreadyDecided?.trajectoryId ??
+        preparedCycle?.trajectoryId ??
+        candidate?.trajectoryId ??
+        null,
+      trajectoryVersion:
+        presentation?.displayCandidateVersionHint ??
+        alreadyDecided?.version ??
+        preparedCycle?.trajectoryVersion ??
+        candidate?.version ??
+        null,
+      presentationDigest: presentation?.presentationDigest ?? null,
+      approvalOptionLabel: presentation?.approvalOptionLabel ?? null,
+      preparedCycleInstanceId: preparedCycle?.cycleInstanceId ?? null,
+      activeCycleInstanceId: pre.activeCycleInstanceId ?? null,
+      hasCurrentNextCycleRecommendation: hasCurrent,
+      message: framingContinuityPilotMessage(phase, catalogLabel),
+      examination,
+    },
+  };
+}
+
+/**
+ * One deterministic advancement step for chat-first Framing continuity.
+ * - prepare candidate from CURRENT Rec (no HD)
+ * - prepare cycle from decided trajectory (no HD)
+ * - start prepared cycle (Pilote authority via existing START facade)
+ * Never auto-approves HumanDecision.
+ */
+export async function projectAssistantAdvanceFramingContinuityAction(input: {
+  projectId: string;
+  /**
+   * Explicit step. Client must not invent digests.
+   * approve requires presentationDigest from server presentation.
+   */
+  step:
+    | "prepare_candidate"
+    | "approve_candidate"
+    | "prepare_cycle"
+    | "start_prepared";
+  presentationDigest?: string;
+}): Promise<{
+  ok: boolean;
+  code?: string;
+  message?: string;
+  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
+  decisionId?: string;
+  cycleInstanceId?: string;
+  activeCycleInstanceId?: string | null;
+}> {
+  if (input.step === "prepare_candidate") {
+    const prepared = await projectAssistantPrepareCandidateTrajectoryAction({
+      projectId: input.projectId,
+    });
+    if (!prepared.ok) {
+      return {
+        ok: false,
+        code: prepared.code,
+        message: prepared.message ?? "Préparation de trajectoire refusée.",
+      };
+    }
+  } else if (input.step === "approve_candidate") {
+    const digest = (input.presentationDigest ?? "").trim();
+    if (!digest) {
+      return {
+        ok: false,
+        code: "PRESENTATION_DIGEST_REQUIRED",
+        message:
+          "Digest d'approbation manquant — aucune HumanDecision n'a été inventée.",
+      };
+    }
+    const approved =
+      await projectAssistantApprovePreCycleCandidateTrajectoryAction({
+        projectId: input.projectId,
+        presentationDigest: digest,
+      });
+    if (!approved.ok) {
+      return {
+        ok: false,
+        code: approved.code,
+        message: approved.message ?? "Décision de trajectoire refusée.",
+      };
+    }
+    // Deterministic follow-up: prepare cycle when trajectory is decided.
+    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
+      projectId: input.projectId,
+    });
+    if (!cyclePrep.ok) {
+      const snap = await projectAssistantReadFramingContinuityAction({
+        projectId: input.projectId,
+      });
+      return {
+        ok: true,
+        code: "DECISION_RECORDED_PREPARE_PENDING",
+        message:
+          cyclePrep.message ??
+          "Décision enregistrée — préparation du cycle encore requise.",
+        continuity: snap.ok ? snap.continuity : undefined,
+        decisionId: approved.decisionId,
+      };
+    }
+  } else if (input.step === "prepare_cycle") {
+    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
+      projectId: input.projectId,
+    });
+    if (!cyclePrep.ok) {
+      return {
+        ok: false,
+        code: cyclePrep.code,
+        message: cyclePrep.message ?? "Préparation du cycle refusée.",
+      };
+    }
+  } else if (input.step === "start_prepared") {
+    const started = await startPreparedTrajectoryCycleAction({
+      projectId: input.projectId,
+    });
+    if (!started.ok) {
+      return {
+        ok: false,
+        code: started.code,
+        message: started.message ?? "Démarrage refusé.",
+      };
+    }
+    const snap = await projectAssistantReadFramingContinuityAction({
+      projectId: input.projectId,
+    });
+    return {
+      ok: true,
+      continuity: snap.ok ? snap.continuity : undefined,
+      cycleInstanceId: started.cycleInstanceId,
+      activeCycleInstanceId: started.activeCycleInstanceId ?? null,
+      message:
+        started.catalogLabel != null
+          ? `Cycle « ${started.catalogLabel} » démarré.`
+          : "Cycle démarré.",
+    };
+  } else {
+    return { ok: false, code: "UNKNOWN_STEP", message: "Étape inconnue." };
+  }
+
+  const snap = await projectAssistantReadFramingContinuityAction({
+    projectId: input.projectId,
+  });
+  return {
+    ok: true,
+    continuity: snap.ok ? snap.continuity : undefined,
+    message: snap.continuity?.message,
+    activeCycleInstanceId: snap.continuity?.activeCycleInstanceId ?? null,
+  };
+}
```

### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index b8823e65..5e3d8f35 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -84,6 +84,7 @@ import {
   resolveChatFirstCycleStartGate,
   resolveChatFirstStartRouting,
 } from "./resolveChatFirstCycleStartGate";
+import { interpretPilotNarrativeStance } from "./composeF2PilotFacingNarrative";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1477,7 +1478,8 @@ export async function orchestrateAssistantSend(input: {
           text: [
             presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
             "Aucun sujet de travail ouvert à reporter — précisez de quoi vous parlez.",
-            "Les transitions de cycle (démarrer / finaliser) se pilotent via les actions Studio du panneau d'état.",
+            // UX-06 — prefer conversational next action when chat-first path exists.
+            "Pour démarrer ou finaliser un cycle, utilisez la carte proposée dans la conversation lorsqu'elle est disponible.",
           ].join(" "),
           mode: modeResolution.mode as "fixture" | "live",
           presentation,
@@ -1493,6 +1495,229 @@ export async function orchestrateAssistantSend(input: {
     }
   }

+  // P6 chat-first Framing continuity — Rec→prepare without inventing HD.
+  // CP-01: when a unique COMPLETE prepared cycle is ready, accept_start must
+  // reach resolveChatFirstCycleStartGate HERE — transitionReadiness may still
+  // be false (missing candidateCycleTypeId / signals) and must not strand START.
+  {
+    const oaForFraming = getRuntimeApplicationService().oa;
+    if (oaForFraming) {
+      const {
+        projectAssistantReadFramingContinuityAction,
+        projectAssistantAdvanceFramingContinuityAction,
+      } = await import("../preCycleCandidateTrajectoryActions");
+      const snap = await projectAssistantReadFramingContinuityAction({
+        projectId: project.projectId,
+      });
+      if (snap.ok && snap.continuity) {
+        const phase = snap.continuity.phase;
+        const productCycleLabel =
+          snap.continuity.catalogLabel ??
+          (analysis.candidateCycleTypeId
+            ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+            : null) ??
+          analysis.candidateCycleTypeId ??
+          null;
+        const framingStance = interpretPilotNarrativeStance({
+          userContent: content,
+          cycleLabel: productCycleLabel,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+        const startRoutingEarly = resolveChatFirstStartRouting({
+          userContent: content,
+          cycleLabel: productCycleLabel,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+
+        // Already active + explicit START → honest no-op (do not strand on missing signals).
+        if (phase === "active" && startRoutingEarly.kind === "attempt_start") {
+          const cycle = productCycleLabel?.trim() || "Cadrage";
+          const activeId = snap.continuity.activeCycleInstanceId;
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: activeId
+              ? `Le cycle « ${cycle} » est déjà actif sur le projet (${activeId}). Aucun second démarrage n'a été engagé.`
+              : `Un cycle « ${cycle} » est déjà actif. Aucun second démarrage n'a été engagé.`,
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f1_informative",
+          });
+        }
+
+        // CP-01 — prepared cycle + explicit START → same F01 gate as formalization path.
+        if (
+          phase === "ready_to_start" &&
+          startRoutingEarly.kind === "attempt_start" &&
+          snap.continuity.targetCycleTypeId
+        ) {
+          await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+          const startGate = await resolveChatFirstCycleStartGate({
+            oa: oaForFraming,
+            projectId: project.projectId,
+            targetCycleTypeId: snap.continuity.targetCycleTypeId,
+            cycleLabel: productCycleLabel ?? "Cadrage",
+          });
+          const reloadedAfterGate = await loadProjectRuntimeForAssistant(
+            project.projectId,
+          );
+          if (reloadedAfterGate.ok) project = toContextDto(reloadedAfterGate);
+          if (startGate.kind === "started") {
+            if (!reloadedAfterGate.ok) {
+              project = {
+                ...project,
+                activeCycleInstanceId: startGate.activeCycleInstanceId,
+                ...(typeof startGate.lpsVersionAfter === "number"
+                  ? { lpsVersion: startGate.lpsVersionAfter }
+                  : {}),
+              };
+            }
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: startGate.message,
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f1_informative",
+            });
+          }
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: startGate.message,
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+
+        // Prepared but not an explicit START — never auto-start from recommendation accept.
+        if (
+          phase === "ready_to_start" &&
+          (framingStance.kind === "accept_recommendation" ||
+            startRoutingEarly.kind === "suppress_mint")
+        ) {
+          const cycle = productCycleLabel?.trim() || "Cadrage";
+          const text =
+            startRoutingEarly.kind === "suppress_mint"
+              ? startRoutingEarly.message
+              : `Le cycle « ${cycle} » est préparé. Pour le démarrer, indiquez explicitement que vous souhaitez démarrer — un simple accord sur la recommandation ne démarre rien.`;
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              text,
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+
+        const wantsFramingProgress =
+          framingStance.kind === "accept_start" ||
+          framingStance.kind === "accept_recommendation";
+        if (wantsFramingProgress) {
+          if (phase === "recommendation_ready") {
+            const advanced = await projectAssistantAdvanceFramingContinuityAction(
+              {
+                projectId: project.projectId,
+                step: "prepare_candidate",
+              },
+            );
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: [
+                presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+                advanced.ok
+                  ? (advanced.continuity?.message ??
+                    "Trajectoire proposée — validez-la dans la carte avant tout démarrage.")
+                  : (advanced.message ??
+                    "Préparation de trajectoire refusée — aucune décision inventée."),
+              ].join(" "),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+          if (phase === "awaiting_trajectory_decision") {
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: [
+                presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+                snap.continuity.message,
+                "Validez cette direction dans la carte — un simple « ok » ne suffit pas.",
+              ].join(" "),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+          if (phase === "trajectory_decided_prepare_cycle") {
+            const advanced = await projectAssistantAdvanceFramingContinuityAction(
+              {
+                projectId: project.projectId,
+                step: "prepare_cycle",
+              },
+            );
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: [
+                presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+                advanced.ok
+                  ? (advanced.continuity?.message ??
+                    "Cycle préparé — vous pouvez le démarrer dans la conversation.")
+                  : (advanced.message ?? "Préparation du cycle refusée."),
+              ].join(" "),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+        }
+      }
+    }
+  }
+
   // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
   // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
   const forceRepoInformative =
```

---

## 7. Extraíts ciblés UX (lecture rapide)

### UX-02 discuss draft — `ProjectWorkspacePage.tsx`
```ts
const discussRecommendationWithNora = (recommendationId: string) => {
  const card = cycleRecommendations.find(
    (r) => r.epistemicItemId === recommendationId,
  );
  if (!card) return;
  controller.setDraft(
    [
      `Nora, regardons cette recommandation : « ${card.statement} ».`,
      "Qu'est-ce qu'elle implique concrètement pour la suite, sans en faire encore une décision ?",
    ].join("\n"),
  );
  focusConversation();
};
```

### UX-04 — `chatFirstStartSuccessMessage`
```ts
if (label) {
  return `Le ${label} est maintenant actif. L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
}
return `Le cycle est maintenant actif. L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
```

### UX-05 — `deriveAttentionItems` (clé recommendation)
```ts
if (input.decisionPending) {
  items.push({ key: "decision", headline: "1 décision à examiner", ... });
}
if (pendingWork > 0 && !input.decisionPending) {
  items.push({ key: "recommendation", headline: "1 recommandation à examiner", ... });
}
```

### UX-06 — `orchestrateF2` defer copy
```ts
"Pour démarrer ou finaliser un cycle, utilisez la carte proposée dans la conversation lorsqu'elle est disponible.",
```

---

## 8. INVENTAIRE POUR INTÉGRATION GIT FUTURE
*(informatif — aucun staging / commit projet)*

### A. Delivery Option 1 + CP + CC (déjà locaux)
- `useProductConversation.ts`, `ConversationSurface.tsx`, `FramingContinuityCard.tsx`, `chatFirstFramingContinuity.ts`, `orchestrateF2.ts`, `preCycleCandidateTrajectoryActions.ts`, `buildProjectSystemPrompt.ts`, tests framing continuity

### B. Six corrections UX (contenu ci-dessus)
- §4 nouveaux + §5–§6 diffs

### C. C14 à classifier
- `product-simplification/p6-qa-integration-state-and-reserves.md`

### D. Exclure
- `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`, `p6-campaign/*.real.test.ts`, secrets, SQLite HQA

---

## 9. Review Handoff Git

- decision : **required**
- mode : **publish-in-cycle**
- push : **oui — L3 borné**
- source : `.tmp-sfia-review/chatgpt-review.md`
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- remote before : `5c38633201736f8a0a4e92054b27b250e372c8e3`
- remote after : *(après publication)*
- coverage §7.5 : **created FULL + modified DIFF FULL** — confirmé

---

## 10. Verdict

# LOCAL UX CORRECTION CANDIDATE — READY FOR CRITICAL REVIEW

Republication handoff uniquement : matière de revue indépendante fournie (nouveaux fichiers complets + diffs utiles). Aucune nouvelle correction Product dans ce tour.
