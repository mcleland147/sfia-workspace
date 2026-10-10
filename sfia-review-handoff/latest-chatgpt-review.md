# SFIA Review Pack — FULL CRITICAL
# P6 First Framing — FIX-01 / FIX-02 / FIX-03 (close Critical reserves)
# Modified content complete (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 08:55:08 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Capacités : V3-F05, V3-F06, V3-F02
- Cycle : 8 — Delivery / implémentation
- Profil : Critical
- Typologie : INC / EVOL
- GO Morris : Correction ciblée FIX-01/02/03 — Git Integration NON autorisée
- Handoff Critical précédent : `e5ffb4a9de30e62db68eac4cf63cf07c44e0cdcf`
- Synthesis only : **no**
- Commit / push / PR / merge projet : **NON**

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| `origin/main` | `60247eb21074c5e7be76e09bcb66d850926ded1e` |
| Handoff tip entrée | `e5ffb4a9de30e62db68eac4cf63cf07c44e0cdcf` |
| Reset / clean / stash | **NON** — Delivery/CP/CC/UX/C14/p6-campaign préservés |

### `git status --short`

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
 M projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityRehydrate.ui.test.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.frontDoor.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx
?? projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts
```

---

## 2. Findings → Corrections

| ID | Finding | Correction |
|----|---------|------------|
| FIX-01 | `examinationSufficient` vrai avec digest + objectif Project générique / libellé « Cadrage » seul | Distinguer `projectObjective` vs `trajectoryDescription` ; substance = statement Recommendation Product **ou** étapes au-delà du label catalogue ; sinon CTA désactivé |
| FIX-02 | Branche « déjà actif » exposait `activeCycleInstanceId` | Copy Pilote sans id ; id conservé côté Product/DTO |
| FIX-03 | Texte « opérationnelle » présumait la matérialité | Formulation neutre P2-D-01 — Recommendation ≠ Decision automatique |

---

## 3. Validations

| Check | Result |
|-------|--------|
| Vitest ciblé FIX+UX+F01+frontDoor | **PASS** (4 files / 25 tests last focused run) |
| Assertions FIX | insufficient exam blocked · exploratoire + statement OK · already-active sans cyc id · materiality neutre |
| `git diff --check` | PASS |
| REAL / CURSOR_REAL / DB HQA | **NON touchés** |
| Fake/Real niveau | **DETERMINISTIC CORRECTION PROVEN** |

---

## 4. FICHIERS NOUVEAUX / RÉÉCRITS — CONTENU COMPLET

### 4.1 `projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts`

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
 * UX-01 / FIX-01 — Product facts the Pilot can examine before trajectory HD.
 * Never invent steps / commitments; omit when Product has nothing honest.
 */
export type FramingTrajectoryExamination = {
  /** LPS project objective — context only; never sufficient alone. */
  readonly projectObjective: string | null;
  /**
   * Trajectory-linked Product text (e.g. CURRENT Recommendation statement).
   * Distinct from the general Project objective.
   */
  readonly trajectoryDescription: string | null;
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

function normalizeCompare(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[«»"']/g, "")
    .replace(/\s+/g, " ");
}

/** Catalog label alone (e.g. « Cadrage ») is not a trajectory description. */
export function isCatalogOnlyTrajectoryLabel(
  label: string | null | undefined,
  catalogLabel: string | null | undefined,
): boolean {
  const a = normalizeCompare(label ?? "");
  const b = normalizeCompare(catalogLabel ?? "");
  if (!a || !b) return false;
  return a === b || a === `cycle ${b}` || a === `le ${b}`;
}

/**
 * Trajectory-linked text is substantial when it says more than the cycle type name.
 * FIX-01 — do not treat generic Project objective as trajectory substance.
 */
export function isSubstantialTrajectoryText(
  text: string | null | undefined,
  catalogLabel: string | null | undefined,
): boolean {
  const t = (text ?? "").trim();
  if (t.length < 16) return false;
  if (isCatalogOnlyTrajectoryLabel(t, catalogLabel)) return false;
  return true;
}

export function buildFramingTrajectoryExamination(input: {
  /** General LPS / Project objective — display as context only. */
  readonly projectObjective: string | null | undefined;
  readonly catalogLabel: string | null | undefined;
  readonly steps: readonly { order: number; label: string }[] | null | undefined;
  readonly presentationDigest: string | null | undefined;
  /** Server presentation option label — generic CTA alone is not substance. */
  readonly approvalOptionLabel?: string | null | undefined;
  /** CURRENT Recommendation statement when Product provides it. */
  readonly recommendationStatement?: string | null | undefined;
}): FramingTrajectoryExamination {
  const projectObjective = (input.projectObjective ?? "").trim() || null;
  const cycleTrim = (input.catalogLabel ?? "").trim();
  const cycle = cycleTrim || null;
  const knownStepLabels = [...(input.steps ?? [])]
    .slice()
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label))
    .map((s) => (s.label ?? "").trim())
    .filter((l) => l.length > 0);
  const stepsBeyondCatalog = knownStepLabels.filter(
    (l) => !isCatalogOnlyTrajectoryLabel(l, cycle),
  );
  const trajectoryDescription =
    (input.recommendationStatement ?? "").trim() || null;
  const hasDigest = Boolean((input.presentationDigest ?? "").trim());
  const hasTrajectorySubstance =
    stepsBeyondCatalog.length > 0 ||
    isSubstantialTrajectoryText(trajectoryDescription, cycle);
  const examinationSufficient = hasDigest && hasTrajectorySubstance;

  const proposedScopeLabel = cycle
    ? hasTrajectorySubstance
      ? `Cycle proposé : « ${cycle} » (périmètre de travail du prochain cycle, pas encore démarré).`
      : `Cycle proposé : « ${cycle} » — le type de cycle seul ne décrit pas encore le contenu de la trajectoire.`
    : null;

  return {
    projectObjective,
    trajectoryDescription,
    proposedScopeLabel,
    knownStepLabels,
    validationImplications: framingTrajectoryValidationImplications(cycle),
    limitsOrReservations: examinationSufficient
      ? "Limite : aucune exécution, aucun START automatique, aucune décision inventée. Si quelque chose reste flou, continuez à explorer avant de valider."
      : "Les faits Product disponibles ne décrivent pas assez la trajectoire proposée (au-delà de l'objectif général du projet ou du seul libellé de cycle). Continuez à explorer avec Nora, ou attendez une présentation de trajectoire plus complète avant de valider.",
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

### 4.2 `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx`

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
          {examination.trajectoryDescription ? (
            <p
              className={styles.optionBody}
              data-testid="framing-exam-trajectory"
            >
              Trajectoire proposée : {examination.trajectoryDescription}
            </p>
          ) : (
            <p
              className={styles.optionMeta}
              data-testid="framing-exam-trajectory-missing"
            >
              Description de trajectoire : non fournie au-delà du type de cycle.
            </p>
          )}
          {examination.projectObjective ? (
            <p
              className={styles.optionBody}
              data-testid="framing-exam-project-objective"
            >
              Objectif du projet (contexte) : {examination.projectObjective}
            </p>
          ) : (
            <p
              className={styles.optionMeta}
              data-testid="framing-exam-objective-missing"
            >
              Objectif du projet : non précisé dans l&apos;état vivant actuel.
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

### 4.3 `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
/**
 * P6 UX Correction Pass + FIX-01/02/03 — Recommendation continuity.
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

describe("P6 UX Recommendation Continuity + FIX-01/02/03", () => {
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
    const materiality = screen.getByTestId(
      "durable-recommendation-materiality",
    ).textContent;
    expect(materiality).toMatch(/n'est pas automatiquement une décision/i);
    expect(materiality).not.toMatch(/opérationnelle/i);
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

  it("FIX-01 — digest + generic project objective alone is insufficient", () => {
    const thin = buildFramingTrajectoryExamination({
      projectObjective: "Mieux comprendre les difficultés des PME",
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Cadrage" }],
      presentationDigest: "sha256:abc",
      approvalOptionLabel: "Valider cette trajectoire",
      recommendationStatement: null,
    });
    expect(thin.examinationSufficient).toBe(false);
    expect(thin.projectObjective).toMatch(/PME/);
  });

  it("FIX-01 — exploratory Cadrage with Recommendation statement is sufficient", () => {
    const ok = buildFramingTrajectoryExamination({
      projectObjective: "Mieux comprendre les difficultés des PME",
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Cadrage" }],
      presentationDigest: "sha256:abc",
      approvalOptionLabel: "Valider cette trajectoire",
      recommendationStatement:
        "Je recommande d'ouvrir un cycle de Cadrage pour explorer les difficultés de planification et de suivi, sans définir de fonctionnalités.",
    });
    expect(ok.examinationSufficient).toBe(true);
    expect(ok.trajectoryDescription).toMatch(/explorer les difficultés/i);
    expect(ok.knownStepLabels).toEqual(["Cadrage"]);
  });

  it("FIX-01 — trajectory steps beyond catalog label are sufficient", () => {
    const ok = buildFramingTrajectoryExamination({
      projectObjective: null,
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Préparer le Cadrage exploratoire" }],
      presentationDigest: "sha256:abc",
    });
    expect(ok.examinationSufficient).toBe(true);
  });

  it("UX-04 / FIX-02 — START success message has no technical cycle id", () => {
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

### 4.4 `projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx` (untracked)

```tsx
/** @vitest-environment jsdom */
/**
 * P6 FramingContinuityCard — presentation only. No OA mutations.
 */
import { describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

afterEach(() => {
  cleanup();
});

function snap(
  partial: Partial<FramingContinuitySnapshot> &
    Pick<FramingContinuitySnapshot, "phase">,
): FramingContinuitySnapshot {
  return {
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest: "sha256:abc",
    approvalOptionLabel: "Valider la trajectoire initiale Cadrage.",
    preparedCycleInstanceId: null,
    activeCycleInstanceId: null,
    hasCurrentNextCycleRecommendation: true,
    message: "message",
    examination: null,
    ...partial,
  };
}

describe("FramingContinuityCard", () => {
  it("recommendation_ready exposes prepare CTA without inventing HD", () => {
    const onPrepare = vi.fn();
    render(
      <FramingContinuityCard
        continuity={snap({ phase: "recommendation_ready" })}
        busy={false}
        error={null}
        onPrepareCandidate={onPrepare}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
      "data-phase",
      "recommendation_ready",
    );
    expect(screen.getByTestId("framing-continuity-authority").textContent).toMatch(
      /Vous décidez/,
    );
    expect(
      screen.getByTestId("framing-continuity-card").textContent,
    ).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onPrepare).toHaveBeenCalledTimes(1);
  });

  it("awaiting_trajectory_decision requires digest + examination; keep exploring is non-mutating", () => {
    const onApprove = vi.fn();
    const onKeep = vi.fn();
    const examination = {
      projectObjective: "Mieux comprendre les besoins des PME",
      trajectoryDescription:
        "Ouvrir un Cadrage pour explorer les difficultés de planification et de suivi",
      proposedScopeLabel:
        'Cycle proposé : « Cadrage » (périmètre de travail du prochain cycle, pas encore démarré).',
      knownStepLabels: ["Cadrage"],
      validationImplications:
        "Valider enregistre votre décision sur cette trajectoire pour « Cadrage » et permet de préparer le cycle. Cela ne démarre pas le cycle et n'exécute rien.",
      limitsOrReservations: "Limite : aucune exécution.",
      examinationSufficient: true,
    };
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "awaiting_trajectory_decision",
          presentationDigest: null,
          examination: { ...examination, examinationSufficient: false },
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    expect(screen.getByTestId("framing-continuity-primary")).toBeDisabled();
    fireEvent.click(screen.getByTestId("framing-continuity-keep-exploring"));
    expect(onKeep).toHaveBeenCalledTimes(1);
    expect(onApprove).not.toHaveBeenCalled();

    rerender(
      <FramingContinuityCard
        continuity={snap({
          phase: "awaiting_trajectory_decision",
          examination,
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    expect(screen.getByTestId("framing-continuity-examination")).toBeInTheDocument();
    expect(screen.getByTestId("framing-exam-trajectory").textContent).toMatch(
      /explorer les difficultés/i,
    );
    expect(
      screen.getByTestId("framing-exam-project-objective").textContent,
    ).toMatch(/besoins des PME/i);
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onApprove).toHaveBeenCalledTimes(1);
  });

  it("ready_to_start exposes START CTA; active renders nothing", () => {
    const onStart = vi.fn();
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "ready_to_start",
          preparedCycleInstanceId: "cyc:prep",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={onStart}
      />,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onStart).toHaveBeenCalledTimes(1);

    rerender(
      <FramingContinuityCard
        continuity={snap({
          phase: "active",
          activeCycleInstanceId: "cyc:live",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });
});
```

---

## 5. FICHIERS MODIFIÉS — DIFFS EXPLOITABLES

### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index b8823e65..00c88d12 100644
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
@@ -1493,6 +1495,228 @@ export async function orchestrateAssistantSend(input: {
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
+          // FIX-02 — keep activeCycleInstanceId in Product/DTO only; never Pilot copy.
+          void snap.continuity.activeCycleInstanceId;
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: `Le cycle « ${cycle} » est déjà actif. Aucun second démarrage n'a été engagé.`,
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

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 7cfbcf82..1c1f8e68 100644
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
@@ -1753,27 +1805,72 @@ export function ConversationSurface({
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
+                            <dt>Statut</dt>
+                            <dd data-testid="durable-recommendation-materiality">
+                              {/* FIX-03 / P2-D-01 — Recommendation ≠ Decision;
+                                  do not presume operational vs structural materiality. */}
+                              Une recommandation n&apos;est pas automatiquement
+                              une décision. Vous pouvez l&apos;examiner, en
+                              discuter, ou la laisser en suspens. Une décision
+                              structurelle reste requise seulement lorsque le
+                              sujet l&apos;exige vraiment.
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
@@ -1797,7 +1894,7 @@ export function ConversationSurface({
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
index 8abd5f05..bfe8860d 100644
--- a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
@@ -514,3 +514,273 @@ export async function startPreparedTrajectoryCycleAction(input: {
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
+  // FIX-01 — LPS project objective is context only; load Recommendation statement
+  // as trajectory-linked substance when Product provides it. Never invent text.
+  let lpsObjective: string | null = null;
+  let recommendationStatement: string | null = null;
+  const runtime = getRuntimeApplicationService();
+  const recommendationIdForExam =
+    presentation?.recommendationId ?? candidate?.recommendationId ?? null;
+  if (runtime.oa) {
+    const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute(
+      { projectId: input.projectId },
+    );
+    if (lps.ok) {
+      lpsObjective = (lps.livingProjectState.objective ?? "").trim() || null;
+    }
+    if (recommendationIdForExam) {
+      try {
+        const items = await runtime.oa.cycleServices.epistemic.listByProject(
+          input.projectId,
+        );
+        const hit = items.find(
+          (i) => i.epistemicItemId === recommendationIdForExam,
+        );
+        recommendationStatement = (hit?.statement ?? "").trim() || null;
+      } catch {
+        recommendationStatement = null;
+      }
+    }
+  }
+
+  const examination =
+    phase === "awaiting_trajectory_decision"
+      ? buildFramingTrajectoryExamination({
+          projectObjective: lpsObjective,
+          catalogLabel,
+          steps: presentation?.steps ?? candidate?.steps ?? null,
+          presentationDigest: presentation?.presentationDigest ?? null,
+          approvalOptionLabel: presentation?.approvalOptionLabel ?? null,
+          recommendationStatement,
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

### `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
index ff92e5c7..f06a28b0 100644
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

@@ -826,6 +830,11 @@ describe("P6-HQA-F01 START success via orchestrateAssistantSend (prepared)", ()
     expect(again.ok).toBe(true);
     if (!again.ok) return;
     expect(again.text).toMatch(/déjà actif/i);
+    // FIX-02 — no technical cycle instance id in Pilot-facing already-active copy.
+    expect(again.text).not.toMatch(/cyc:trj-/);
+    expect(again.text).not.toMatch(
+      new RegExp(preparedId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
+    );
     const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
     expect(cyclesFinal.length).toBe(1);
   });
```

---

## 6. ANNEXE — FINAL GIT INTEGRATION INVENTORY
*(informatif — aucun staging / commit projet)*

### 6.1 Déjà dans HEAD campagne (`db45e9c4…`)
Code Product baseline de la branche QA distante (sans Delivery Option 1 / CP / CC / UX / FIX locaux).

### 6.2 Modifications locales suivies (tracked `M`) — candidats intégration

| Fichier | Origine |
|---------|---------|
| `useProductConversation.ts` | CC-01/02 |
| `ConversationSurface.tsx` | CC + UX-02/03 + **FIX-03** |
| `ProjectWorkspacePage.tsx` | UX-02 |
| `JournalSurface.tsx` | UX-02 |
| `workspaceContextPresentation.ts` | UX-05 |
| `buildProjectSystemPrompt.ts` | Delivery + UX-06 |
| `composeF2PilotFacingNarrative.ts` | UX-06 |
| `orchestrateF2.ts` | Delivery/CP + UX-06 + **FIX-02** |
| `resolveChatFirstCycleStartGate.ts` | UX-04/06 |
| `preCycleCandidateTrajectoryActions.ts` | CC + UX-01 + **FIX-01** |
| `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` | UX-04 + **FIX-02** |
| `qualToGovernedCycle.presentation.d0.test.ts` | Delivery Option 1 |
| `p6-qa-integration-state-and-reserves.md` | **C14 — classifier séparément** |
| `.tmp-sfia-review/chatgpt-review.md` | **exclure** |

### 6.3 Fichiers locaux non suivis (`??`) — Product candidats

| Fichier | Origine |
|---------|---------|
| `f2/chatFirstFramingContinuity.ts` | CC + UX-01 + **FIX-01** |
| `surfaces/FramingContinuityCard.tsx` | CC + UX-01 + **FIX-01** |
| `chatFirstFramingContinuity.d0.test.ts` | CC |
| `chatFirstFramingContinuity.frontDoor.d0.test.ts` | CC |
| `framingContinuityCard.ui.test.tsx` | CC + FIX |
| `framingContinuityRehydrate.ui.test.tsx` | CC |
| `p6.ux.recommendationContinuity.ui.test.tsx` | UX + **FIX-01/02/03** |

### 6.4 À exclure

| Chemin | Raison |
|--------|--------|
| `.tmp-sfia-review/**` | Packs éphémères |
| `projects/.tmp-sfia-review/**` | Visual / SQLite |
| `__tests__/p6-campaign/*.real.test.ts` | Harness REAL |
| `.env*` / secrets | Interdit |
| SQLite Human QA / captures | Artefacts runtime |

### 6.5 Lots logiques suggérés (≠ staging)

1. Product code : Delivery Option 1 + CP + CC + UX-01…06 + FIX-01/02/03 + tests
2. Documentary C14 (optionnel, séparé)
3. Jamais : tmp / SQLite / harness REAL / secrets

---

## 7. Review Handoff Git

- decision : **required**
- mode : **publish-in-cycle**
- push : **oui — L3 borné**
- source : `.tmp-sfia-review/chatgpt-review.md`
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- remote before : `e5ffb4a9de30e62db68eac4cf63cf07c44e0cdcf`
- remote after : *(après publication)*
- coverage §7.5 : **created FULL + modified DIFF** — confirmé

---

## 8. Réserves

1. Visual Figma/runtime Pilot : hors scope de ce FIX pass.
2. Matérialité : neutre présentation seulement — pas de moteur M-DISP.
3. Intégration Git : **non commencée**.

---

## 9. Verdict

# LOCAL FIRST FRAMING UX CANDIDATE — READY FOR FINAL CRITICAL REVIEW

FIX-01 / FIX-02 / FIX-03 clos avec preuves déterministes. Aucune architecture parallèle. Aucun commit projet.
