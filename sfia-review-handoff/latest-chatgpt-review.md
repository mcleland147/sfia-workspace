# SFIA Review Pack — FULL CRITICAL
# P6 First Framing — Git Integration (Draft PR #574)
# Modified / created content complete (template v2.6 §7.5 anti-synthesis-only)

## Meta
- Date / heure : **2026-10-10 09:10:21 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Capacités : V3-F05, V3-F06, V3-F02
- Cycle projet : **13 — PR readiness**
- Profil : Critical
- Typologie : EVOL / INC — Git Integration
- GO Morris : commit + push branche + Draft PR **AUTHORIZED**
- GO MERGE : **NON**
- GO PR READY : **NON**
- Handoff Critical précédent : `8942a8e3cac1ba97d56e58b6f6bc0cc18e218653`
- Synthesis only : **no**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**

---

## 1. Local Git Truth Check (pré-commit)

| Check | Result |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD avant | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| `origin/main` | `60247eb21074c5e7be76e09bcb66d850926ded1e` |
| Tracking | `origin/qa/sfia-studio-p6-global-integrated-product-qa` (à jour avant push) |
| PR ouverte avant | **aucune** |
| Staged avant | **vide** |
| Reset / clean / stash / force push | **NON** |

### Status working tree (pré-commit — inventaire découvert)
Allowlist Product = **19** chemins exacts. Hors allowlist préservés :
- C14 `p6-qa-integration-state-and-reserves.md` (M, non staged)
- `.tmp-sfia-review/chatgpt-review.md`
- `projects/.tmp-sfia-review/**` (SQLite)
- `__tests__/p6-campaign/*.real.test.ts`

---

## 2. Git Review Index

| Champ | Valeur |
|-------|--------|
| Base PR | `main` @ `60247eb21074c5e7be76e09bcb66d850926ded1e` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD avant | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| Commit Product | `6a4374ed54cf346d16c11b995eec772090c81807` |
| SHA distant branche | `6a4374ed54cf346d16c11b995eec772090c81807` (vérifié `git ls-remote`) |
| Message | `fix(studio): complete chat-first framing continuity and UX` |
| Fichiers intégrés | **19** (7 A + 12 M) |
| Draft PR | **#574** — https://github.com/mcleland147/sfia-workspace/pull/574 |
| `isDraft` | **true** |
| CI | **FAIL** — Unit tests digest conformance (voir §6 + §13) |
| C14 | **hors commit** — modification locale préservée |
| Merge / Ready | **NON effectués** |

### `git diff db45e9c4..6a4374ed --name-status`

```
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityRehydrate.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
A	projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.frontDoor.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
A	projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts
M	projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
M	projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
```

### `git diff --stat`

```
 .../framingContinuityCard.ui.test.tsx              | 162 ++++++
 .../framingContinuityRehydrate.ui.test.tsx         | 202 +++++++
 .../p6.ux.recommendationContinuity.ui.test.tsx     | 207 +++++++
 .../chatFirstFramingContinuity.d0.test.ts          | 407 ++++++++++++++
 ...chatFirstFramingContinuity.frontDoor.d0.test.ts | 611 +++++++++++++++++++++
 .../p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts  |  11 +-
 .../qualToGovernedCycle.presentation.d0.test.ts    |  62 +++
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  17 +-
 .../hooks/useProductConversation.ts                | 164 ++++++
 .../surfaces/ConversationSurface.tsx               | 119 +++-
 .../surfaces/FramingContinuityCard.tsx             | 234 ++++++++
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   2 +-
 .../workspaceContextPresentation.ts                |  39 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |  26 +
 .../f2/chatFirstFramingContinuity.ts               | 218 ++++++++
 .../f2/composeF2PilotFacingNarrative.ts            |  18 +
 .../features/project-assistant/f2/orchestrateF2.ts | 226 +++++++-
 .../f2/resolveChatFirstCycleStartGate.ts           |  12 +-
 .../preCycleCandidateTrajectoryActions.ts          | 270 +++++++++
 19 files changed, 2972 insertions(+), 35 deletions(-)
```

---

## 3. Scope intégré

Delivery Option 1 + CP-01/02/03 + CC-01/02/03 + UX-01…06 + FIX-01/02/03 + tests associés.
Aucun nouveau développement Product dans ce cycle Git Integration.
Aucun changement doctrine / Figma / REAL / secrets / DB QA.

---

## 4. Validations (preuves exactes)

| Suite | Résultat |
|-------|----------|
| Core Framing/UX/F01/frontDoor/presentation | **7 files / 58 tests PASS** |
| Adjacent HD / governed / F2 routing (+ framing d0 overlap) | **5 files / 39 tests PASS** |
| COG01 + cognitive routing | **2 files / 37 tests PASS** |
| ESLint allowlist Product sources | **PASS** (0 findings) |
| `git diff --check` allowlist | **PASS** |
| `npm run typecheck` (`tsc --noEmit`) | Erreurs **uniquement** hors commit : `p6-campaign/*.real.test.ts` (untracked, historical) — **pas de régression Product allowlist** |

### Typecheck — erreurs harness exclus (documentées, non masquées)

```
__tests__/p6-campaign/phase3.controlledCandidate.screening.real.test.ts(116,24): error TS2554
__tests__/p6-campaign/phase3.controlledCandidate.screening.real.test.ts(303,16): error TS2352
__tests__/p6-campaign/phase3.routerInSitu.and.discrimination.real.test.ts(278,61): error TS2339
__tests__/p6-campaign/phase3.routerInSitu.and.discrimination.real.test.ts(314,24): error TS2554
```

Harness **non modifiés** (instruction : ne pas « corriger » pour faire passer).

### Fake / Real Qualification

- Niveau : **Product integrated candidate + CI observed**
- Exclu : P6 Global PASS / E2E REAL fully proven
- Aucun nouvel appel REAL ; aucun GO REAL

---

## 5. Staging sélectif (attesté)

- `git add -- <19 chemins allowlist>` uniquement
- `git diff --cached` = 19 chemins ; `diff --check` PASS
- Zéro secret / SQLite / `.env` / tmp / p6-campaign / C14 dans le commit

### Status final (post-commit, exclusions préservées)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
```

---

## 6. Draft PR & CI

- URL : https://github.com/mcleland147/sfia-workspace/pull/574
- Titre : `fix(studio): complete chat-first framing continuity and UX`
- Base : `main` · Head : branche P6 · Draft : **oui**
- CI finale observée : **FAIL**
  - `Detect SFIA Studio changes` = **PASS** (8s)
  - `Build and validate SFIA Studio` = **FAIL** (8m8s)
  - `SFIA Studio Required Gate` = **FAIL**
  - Run : https://github.com/mcleland147/sfia-workspace/actions/runs/38033467270
  - Job build : https://github.com/mcleland147/sfia-workspace/actions/runs/38033467270/job/114159023470
- Conversion Ready : **NON**
- Merge : **NON**

---

## 7. FICHIERS NOUVEAUX — CONTENU COMPLET

### `projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts`

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

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx`

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

### `projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts`

```ts
/** @vitest-environment node */
/**
 * P6 chat-first Framing continuity — pure phase + OA front-door reuse.
 * ZERO REAL / ZERO provider.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  classifyFramingContinuityPhase,
  framingContinuityForConversationDisplay,
  framingContinuityPilotMessage,
  type FramingContinuitySnapshot,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
  };
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "framing-cont-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`frm-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing continuity ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FRM${suffix}`,
    idempotencyKey: `idem:frm-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr(
        "cyc:framing",
        "Envisager un Cadrage.",
      ),
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  return { runtime, projectId };
}

describe("classifyFramingContinuityPhase", () => {
  it("orders active > prepared > decided > awaiting > recommendation", () => {
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: "cyc:1",
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: true,
      }),
    ).toBe("active");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: true,
      }),
    ).toBe("ready_to_start");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: false,
      }),
    ).toBe("trajectory_decided_prepare_cycle");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("awaiting_trajectory_decision");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("recommendation_ready");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: false,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("blocked_no_recommendation");
  });

  it("messages stay pilot-facing and never claim START from prose alone", () => {
    const msg = framingContinuityPilotMessage(
      "awaiting_trajectory_decision",
      "Cadrage",
    );
    expect(msg).toMatch(/ok/);
    expect(msg).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
    expect(msg).not.toMatch(/est maintenant actif/i);
    expect(
      framingContinuityPilotMessage("ready_to_start", "Cadrage"),
    ).toMatch(/démarrer/i);
  });

  it("conversation display hides active / blocked; keeps ready_to_start", () => {
    const base: FramingContinuitySnapshot = {
      phase: "ready_to_start",
      catalogLabel: "Cadrage",
      targetCycleTypeId: "cyc:framing",
      recommendationId: null,
      semanticKey: null,
      trajectoryId: "trj:1",
      trajectoryVersion: 1,
      presentationDigest: null,
      approvalOptionLabel: null,
      preparedCycleInstanceId: "cyc:1",
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: true,
      message: "prêt",
      examination: null,
    };
    expect(framingContinuityForConversationDisplay(base)?.phase).toBe(
      "ready_to_start",
    );
    expect(
      framingContinuityForConversationDisplay({
        ...base,
        phase: "active",
        activeCycleInstanceId: "cyc:1",
      }),
    ).toBeNull();
    expect(
      framingContinuityForConversationDisplay({
        ...base,
        phase: "blocked_stale_or_incomplete",
      }),
    ).toBeNull();
  });
});

describe("chat-first Framing continuity OA bridge", () => {
  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
  });

  it("Rec CURRENT → prepare candidate → awaiting decision (no auto HD)", async () => {
    const { projectId } = await bootWithCurrentFramingRec("prep");
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.ok).toBe(true);
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    expect(prepared.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(prepared.continuity?.presentationDigest).toBeTruthy();

    const noDigest = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
    });
    expect(noDigest.ok).toBe(false);
    expect(noDigest.code).toBe("PRESENTATION_DIGEST_REQUIRED");
  });

  it("stale digest refuses HD; opening read does not mutate", async () => {
    const { projectId } = await bootWithCurrentFramingRec("stale");
    const r1 = await projectAssistantReadFramingContinuityAction({ projectId });
    const r2 = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(r1.continuity?.phase).toBe(r2.continuity?.phase);
    expect(r1.continuity?.phase).toBe("recommendation_ready");

    await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
  });

  it("approve digest → prepare cycle → ready_to_start → START → active", async () => {
    const { projectId } = await bootWithCurrentFramingRec("e2e");
    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    const digest = prepared.continuity?.presentationDigest;
    expect(digest).toBeTruthy();

    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: digest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);

    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const cyclePrep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(cyclePrep.ok).toBe(true);
      expect(cyclePrep.continuity?.phase).toBe("ready_to_start");
    }

    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(true);
    expect(started.activeCycleInstanceId).toBeTruthy();

    const after = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(after.continuity?.phase).toBe("active");
    expect(after.continuity?.activeCycleInstanceId).toBe(
      started.activeCycleInstanceId,
    );

    // Idempotent second START must not invent a second active cycle
    const again = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(again.ok === false || again.activeCycleInstanceId === started.activeCycleInstanceId).toBe(
      true,
    );
  });

  it("START without prepared cycle fails closed", async () => {
    const { projectId } = await bootWithCurrentFramingRec("noprep");
    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.frontDoor.d0.test.ts`

```ts
/** @vitest-environment node */
/**
 * P6 CP-02 — Chat-first Framing continuity via projectAssistantSendAction front-door.
 * Proves Rec → prepare → HD (server digest) → prepare cycle → START (F01) → LPS active
 * → next turn sees active cycle. ZERO REAL provider.
 *
 * Intentional: START analysis omits candidateCycleTypeId/signals so CP-01 is proven
 * (transitionReadiness alone would strand the turn).
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
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  classifyTrajectoryBinding,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";
const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
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

/**
 * Fake Nora — for START utterances deliberately omits cycle/signals
 * so formalization readiness fails and CP-01 early F01 path is required.
 */
class FramingFrontDoorFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastUserBlobs: string[] = [];
  /** Full message blobs seen by the provider (for Nora context assertions). */
  lastMessageCorpus: string[] = [];

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
    this.lastUserBlobs.push(current);
    this.lastMessageCorpus.push(
      messages.map((m) => `${m.role}:${m.content}`).join("\n"),
    );
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `frm-fd-${this.n}`,
    };

    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|je\s+confirm\w*.*d[eé]marr)/i.test(
        current,
      );
    const isRefuse =
      /\b(refuse|finalement\s+je\s+refuse|ne\s+d[eé]marre)\b/i.test(current);
    const isMaybe = /\b(peut[- ]?être|éventuellement)\b/i.test(current);
    const isQuestion = /\?/.test(current) || /\b(est[- ]ce|quel\s+est)\b/i.test(current);

    // CP-01 proof: START without formalization fields.
    if (isStart && !isRefuse) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 120),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }

    const actionable = {
      intentClass: isQuestion ? "informative" : "actionable",
      // Product catalog Cadrage — CKC ckc:studio:framing in W2 product doctrine.
      candidateCycleTypeId: isQuestion ? null : "cyc:framing",
      signals: isQuestion
        ? null
        : {
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
      objective: "Explorer le cadrage",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "Recommandation",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: isRefuse
        ? {
            disposition: "refuse",
            targetKind: "current_recommendation",
            rationale: "refuse",
          }
        : isMaybe
          ? {
              disposition: "ambiguous",
              targetKind: "current_recommendation",
              rationale: "maybe",
            }
          : {
              disposition: "accept",
              targetKind: "current_recommendation",
              rationale: "ok",
            },
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
      text: "[TEST/FAKE · NON LIVE] framing-fd",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "frm-fd-round",
      },
    };
  }
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "frm-fd-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    // Product doctrine registry — required for post-START Nora resume CKC.
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`fd-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing FD ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FD${suffix}`,
    idempotencyKey: `idem:fd-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale: "Prochain travail gouverné supportable.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  return {
    runtime,
    projectId,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

describe("chat-first Framing continuity — projectAssistantSendAction front-door", () => {
  const provider = new FramingFrontDoorFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    setConversationProviderForTests(provider);
    provider.lastUserBlobs = [];
    provider.lastMessageCorpus = [];
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousCursorReal === undefined) {
      delete process.env.SFIA_STUDIO_CURSOR_REAL;
    } else {
      process.env.SFIA_STUDIO_CURSOR_REAL = previousCursorReal;
    }
  });

  it("Rec CURRENT → prepare → HD → prepare → START via send (no signals) → LPS + Nora resume context", async () => {
    const { runtime, projectId, sessionDbPath } =
      await bootWithCurrentFramingRec("e2e");
    const oa = runtime.oa!;

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // Progress intent — prepare candidate (no HD)
    const progress = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();

    // Accept recommendation again must NOT invent HD / START
    const okRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(okRec.ok).toBe(true);
    if (okRec.ok) {
      expect(okRec.text).not.toMatch(/est maintenant actif/i);
    }
    const lpsIdle = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsIdle.ok).toBe(true);
    if (lpsIdle.ok) {
      expect(lpsIdle.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Explicit HD via Product server action (same seam as the card) — digest from server
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);
    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
      expect(prep.continuity?.phase).toBe("ready_to_start");
    }

    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();

    // Adversarial: recommendation accept while ready → no START
    const noStartFromRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(noStartFromRec.ok).toBe(true);
    if (noStartFromRec.ok) {
      expect(noStartFromRec.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: hypothetical
    const maybe = await projectAssistantSendAction({
      projectId,
      content: "Démarre peut-être le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(maybe.ok).toBe(true);
    if (maybe.ok) {
      expect(maybe.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: late refuse
    const refuse = await projectAssistantSendAction({
      projectId,
      content: "Je confirme, mais finalement je refuse.",
      sessionDbPath,
      provider,
    });
    expect(refuse.ok).toBe(true);
    if (refuse.ok) {
      expect(refuse.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: question
    const question = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Cadrage ?",
      sessionDbPath,
      provider,
    });
    expect(question.ok).toBe(true);
    if (question.ok) {
      expect(question.text).not.toMatch(/est maintenant actif/i);
    }

    const stillReady = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(stillReady.continuity?.phase).toBe("ready_to_start");

    // CP-01 / CP-02 — explicit START through front-door with missing signals
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error("start failed");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();
    expect(start.f2?.turnKind).toBe("f1_informative");

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]!.status).toBe("active");
    expect(classifyTrajectoryBinding(cycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(classifyTrajectoryBinding(cycles[0]!)).not.toBe("LEGACY_UNBOUND");

    // Idempotent second START
    const again = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    if (!again.ok) {
      throw new Error(
        `second START unexpected failure: ${again.code ?? ""} ${again.message ?? again.status}`,
      );
    }
    expect(again.text).toMatch(/déjà actif|maintenant actif/i);
    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal).toHaveLength(1);

    // CP-03 — next deterministic turn consumes active cycle context
    const resume = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Cadrage ?",
      sessionDbPath,
      provider,
    });
    if (!resume.ok) {
      throw new Error(
        `resume turn unexpected failure: ${resume.code ?? ""} ${resume.message ?? resume.status}`,
      );
    }
    expect(resume.project.activeCycleInstanceId).toBe(
      lps.livingProjectState.activeCycleInstanceId,
    );
    // Nora resume: provider corpus for the resume turn must see the active cycle.
    const resumeCorpus = provider.lastMessageCorpus.at(-1) ?? "";
    expect(resumeCorpus.length).toBeGreaterThan(0);
    expect(resumeCorpus).toMatch(
      new RegExp(
        (lps.livingProjectState.activeCycleInstanceId ?? "").replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&",
        ),
      ),
    );
    // Display projection: active → no START card
    const afterActive = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterActive.continuity?.phase).toBe("active");
    const { framingContinuityForConversationDisplay } = await import(
      "@/features/project-assistant/f2/chatFirstFramingContinuity"
    );
    expect(
      framingContinuityForConversationDisplay(afterActive.continuity),
    ).toBeNull();
  });

  it("START without prepared cycle fails closed via front-door", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("noprep");
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (start.ok) {
      expect(start.text).not.toMatch(/est maintenant actif/i);
      expect(start.project.activeCycleInstanceId).toBeFalsy();
    }
  });

  it("stale digest never records HD", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("stale");
    await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest:
        "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
    const snap = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(snap.continuity?.phase).toBe("awaiting_trajectory_decision");
  });
});
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx`

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

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityRehydrate.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
/**
 * CC-01 / CC-02 — Framing continuity rehydration + post-START display sync.
 * Mirrors the Product-read → display projection used by useProductConversation.
 */
import React, { useEffect, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { framingContinuityForConversationDisplay } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";

const readFraming = vi.fn();

vi.mock(
  "@/features/project-assistant/preCycleCandidateTrajectoryActions",
  () => ({
    projectAssistantReadFramingContinuityAction: (...args: unknown[]) =>
      readFraming(...args),
    projectAssistantAdvanceFramingContinuityAction: vi.fn(),
  }),
);

function snap(
  phase: FramingContinuitySnapshot["phase"],
): FramingContinuitySnapshot {
  return {
    phase,
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest:
      phase === "awaiting_trajectory_decision" ? "sha256:abc" : null,
    approvalOptionLabel: "Valider cette direction pour « Cadrage ».",
    preparedCycleInstanceId: phase === "ready_to_start" ? "cyc:prep" : null,
    activeCycleInstanceId: phase === "active" ? "cyc:live" : null,
    hasCurrentNextCycleRecommendation: true,
    message: `phase:${phase}`,
    examination: null,
  };
}

/** Minimal rehydrate harness mirroring CC-01 effect in useProductConversation. */
function FramingRehydrateHarness({
  projectId,
  refreshSignal = 0,
}: {
  projectId: string;
  refreshSignal?: number;
}) {
  const [continuity, setContinuity] =
    useState<FramingContinuitySnapshot | null>(null);

  useEffect(() => {
    let cancelled = false;
    const requestProjectId = projectId;
    setContinuity(null);
    void (async () => {
      const result = await readFraming({ projectId: requestProjectId });
      if (cancelled) return;
      if (!result.ok || !result.continuity) {
        setContinuity(null);
        return;
      }
      setContinuity(framingContinuityForConversationDisplay(result.continuity));
    })();
    return () => {
      cancelled = true;
    };
  }, [projectId, refreshSignal]);

  if (!continuity) {
    return <div data-testid="framing-empty">empty</div>;
  }
  return (
    <div data-testid="framing-slot">
      <FramingContinuityCard
        continuity={continuity}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />
    </div>
  );
}

afterEach(() => {
  cleanup();
  readFraming.mockReset();
});

describe("Framing continuity rehydrate / post-START sync", () => {
  beforeEach(() => {
    readFraming.mockReset();
  });

  it("CC-01 — mounts with ready_to_start card from Product read (no prior action)", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("ready_to_start"),
    });
    render(<FramingRehydrateHarness projectId="prj:a" />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "ready_to_start",
      );
    });
    expect(readFraming).toHaveBeenCalledWith({ projectId: "prj:a" });
    expect(screen.getByTestId("framing-continuity-primary").textContent).toMatch(
      /Démarrer/,
    );
  });

  it("CC-01 — remount / refreshSignal rebuilds awaiting decision from Product", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("awaiting_trajectory_decision"),
    });
    const { rerender } = render(
      <FramingRehydrateHarness projectId="prj:a" refreshSignal={0} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "awaiting_trajectory_decision",
      );
    });
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("recommendation_ready"),
    });
    rerender(<FramingRehydrateHarness projectId="prj:a" refreshSignal={1} />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "recommendation_ready",
      );
    });
  });

  it("CC-02 — active Product phase clears START card after sync", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("ready_to_start"),
    });
    const { rerender } = render(
      <FramingRehydrateHarness projectId="prj:a" refreshSignal={0} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toBeTruthy();
    });
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("active"),
    });
    rerender(<FramingRehydrateHarness projectId="prj:a" refreshSignal={1} />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-empty")).toBeTruthy();
    });
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });

  it("CC-01 — project change ignores stale late response from prior project", async () => {
    let resolveA: (v: unknown) => void = () => {};
    const pendingA = new Promise((resolve) => {
      resolveA = resolve;
    });
    readFraming.mockImplementation(({ projectId }: { projectId: string }) => {
      if (projectId === "prj:a") return pendingA;
      return Promise.resolve({
        ok: true,
        continuity: snap("ready_to_start"),
      });
    });
    const { rerender } = render(<FramingRehydrateHarness projectId="prj:a" />);
    rerender(<FramingRehydrateHarness projectId="prj:b" />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "ready_to_start",
      );
    });
    resolveA({
      ok: true,
      continuity: {
        ...snap("awaiting_trajectory_decision"),
        catalogLabel: "STALE-A",
      },
    });
    await new Promise((r) => setTimeout(r, 30));
    expect(
      screen.getByTestId("framing-continuity-title").textContent,
    ).not.toMatch(/STALE-A/);
  });
});
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx`

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

---

## 8. FICHIERS MODIFIÉS — DIFFS EXPLOITABLES (`db45e9c4..6a4374ed`)

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

### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 73225dc7..d485db6c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -47,6 +47,8 @@ import type {
   ActiveDecisionSubjectReadResult,
   CurrentGovernedExecutionContinuityResult,
 } from "@/features/project-assistant/w2/types";
+import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
+import { framingContinuityForConversationDisplay } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

 export type ProductDecisionSubjectContinuity =
   | { readonly status: "pending" }
@@ -165,6 +167,13 @@ export function useProductConversation({
   const [governedMomentError, setGovernedMomentError] = useState<string | null>(
     null,
   );
+  /** P6 chat-first Framing continuity (Rec → traj decision → prepare → START). */
+  const [framingContinuity, setFramingContinuity] =
+    useState<FramingContinuitySnapshot | null>(null);
+  const [framingContinuityBusy, setFramingContinuityBusy] = useState(false);
+  const [framingContinuityError, setFramingContinuityError] = useState<
+    string | null
+  >(null);
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
   const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
@@ -221,6 +230,8 @@ export function useProductConversation({

   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
+  const projectIdRef = useRef(projectId);
+  projectIdRef.current = projectId;
   const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
   const onDurableEvidenceOutcomeChangeRef = useRef(
     onDurableEvidenceOutcomeChange,
@@ -371,6 +382,122 @@ export function useProductConversation({
     };
   }, [projectId, durableRefreshSignal]);

+  // CC-01 — rehydrate Framing continuity from Product on mount / project change /
+  // durable refresh. Stale async responses for a prior projectId are ignored.
+  useEffect(() => {
+    let cancelled = false;
+    const requestProjectId = projectId;
+    setFramingContinuity(null);
+    setFramingContinuityError(null);
+    void (async () => {
+      try {
+        const { projectAssistantReadFramingContinuityAction } = await import(
+          "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+        );
+        const result = await projectAssistantReadFramingContinuityAction({
+          projectId: requestProjectId,
+        });
+        if (cancelled || requestProjectId !== projectId) return;
+        if (!result.ok || !result.continuity) {
+          setFramingContinuity(null);
+          return;
+        }
+        setFramingContinuity(
+          framingContinuityForConversationDisplay(result.continuity),
+        );
+        setFramingContinuityError(null);
+      } catch {
+        if (cancelled || requestProjectId !== projectId) return;
+        setFramingContinuity(null);
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId, durableRefreshSignal]);
+
+  async function refreshFramingContinuity() {
+    const requestProjectId = projectId;
+    try {
+      const { projectAssistantReadFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const result = await projectAssistantReadFramingContinuityAction({
+        projectId: requestProjectId,
+      });
+      if (requestProjectId !== projectIdRef.current) return;
+      if (!result.ok || !result.continuity) {
+        setFramingContinuity(null);
+        return;
+      }
+      setFramingContinuity(
+        framingContinuityForConversationDisplay(result.continuity),
+      );
+      setFramingContinuityError(null);
+    } catch {
+      if (requestProjectId !== projectIdRef.current) return;
+      setFramingContinuity(null);
+    }
+  }
+
+  async function advanceFramingContinuity(
+    step:
+      | "prepare_candidate"
+      | "approve_candidate"
+      | "prepare_cycle"
+      | "start_prepared",
+  ) {
+    if (framingContinuityBusy) return;
+    setFramingContinuityBusy(true);
+    setFramingContinuityError(null);
+    try {
+      const { projectAssistantAdvanceFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const digest =
+        step === "approve_candidate"
+          ? (framingContinuity?.presentationDigest ?? undefined)
+          : undefined;
+      const result = await projectAssistantAdvanceFramingContinuityAction({
+        projectId,
+        step,
+        presentationDigest: digest,
+      });
+      if (!result.ok) {
+        setFramingContinuityError(
+          result.message ?? result.code ?? "Action refusée.",
+        );
+        await refreshFramingContinuity();
+        return;
+      }
+      if (result.continuity) setFramingContinuity(result.continuity);
+      else await refreshFramingContinuity();
+      notifyDurableFactsChanged();
+      await refreshGovernedMoments();
+      if (result.activeCycleInstanceId) {
+        const label =
+          result.continuity?.catalogLabel?.trim() ||
+          framingContinuity?.catalogLabel?.trim() ||
+          "Cadrage";
+        setMessages((prev) => [
+          ...prev,
+          {
+            id: nextId("system"),
+            role: "system",
+            content:
+              result.message?.trim() ||
+              `Le « ${label} » est maintenant actif. Vous pouvez poursuivre dans la conversation.`,
+          },
+        ]);
+        setFramingContinuity(null);
+      }
+    } catch {
+      setFramingContinuityError("Impossible d'avancer la continuité de cadrage.");
+    } finally {
+      setFramingContinuityBusy(false);
+    }
+  }
+
   async function refreshGovernedMoments() {
     try {
       const {
@@ -397,6 +524,7 @@ export function useProductConversation({
       } else {
         setGovernedExecutionContinuity(continuity);
       }
+      await refreshFramingContinuity();
     } catch {
       setGovernedMomentError("Impossible de relire le moment gouverné.");
     }
@@ -931,6 +1059,26 @@ export function useProductConversation({
         }),
       );
       setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
+      if (
+        result.lifecycleRecommendationMaterialized === true ||
+        result.lifecycleRecommendationCode
+      ) {
+        void refreshFramingContinuity();
+      }
+      // CC-02 — after chat START (or already-active), re-read Product continuity
+      // so the obsolete START card disappears. Driven by LPS/project DTO, not prose.
+      const resultActiveId = (
+        result.project.activeCycleInstanceId ?? ""
+      ).trim();
+      const priorActiveId = (activeCycleInstanceId ?? "").trim();
+      const cycleMarkedActive =
+        result.f2?.qualification?.cycleStatus === "active";
+      if (resultActiveId || cycleMarkedActive) {
+        void refreshFramingContinuity();
+        if (!priorActiveId || priorActiveId !== resultActiveId) {
+          notifyDurableFactsChanged();
+        }
+      }
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       setMessages((prev) => [
         ...prev,
@@ -1244,6 +1392,22 @@ export function useProductConversation({
     inspectGovernedContract,
     confirmGovernedContract,
     refreshGovernedMoments,
+    framingContinuity,
+    framingContinuityBusy,
+    framingContinuityError,
+    refreshFramingContinuity,
+    prepareFramingCandidate: () => {
+      void advanceFramingContinuity("prepare_candidate");
+    },
+    approveFramingCandidate: () => {
+      void advanceFramingContinuity("approve_candidate");
+    },
+    prepareFramingCycle: () => {
+      void advanceFramingContinuity("prepare_cycle");
+    },
+    startFramingPrepared: () => {
+      void advanceFramingContinuity("start_prepared");
+    },
     reservesText,
     setReservesText,
     f3Prepare,
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

### `projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
index dcc35203..64caa7d9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
@@ -80,6 +80,68 @@ describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
     expect(prompt).toMatch(/ne peux pas l'enregistrer dans Studio/);
   });

+  it("P6-HQA-REC-01 — prompt contracts six qualificationSignals for prepareable NEXT_CYCLE", () => {
+    const prompt = buildProjectSystemPrompt(baseProject);
+
+    // T1 — six signal keys exposed
+    for (const key of [
+      "structuralChange",
+      "securityImpact",
+      "architectureImpact",
+      "dataImpact",
+      "irreversible",
+      "lowRiskBounded",
+    ] as const) {
+      expect(prompt).toContain(key);
+    }
+
+    // T2 — prepareable NEXT_CYCLE requires complete object (never null)
+    expect(prompt).toMatch(/QUALIFICATION SIGNALS \(D-GF-START-01/);
+    expect(prompt).toMatch(
+      /NEXT_CYCLE préparable[\s\S]*qualificationSignals DOIT être l'objet complet des six booléens \(jamais null\)/,
+    );
+
+    // T3 — no invention / no Light-by-default / no artificial Critical neutralization
+    expect(prompt).toMatch(/Ne invente PAS de valeurs/);
+    expect(prompt).toMatch(
+      /Ne choisis PAS Light \/ lowRiskBounded=true par défaut/,
+    );
+    expect(prompt).toMatch(/Ne neutralise PAS Critical artificiellement/);
+
+    // T4 — incomplete qualification must not become artificially durable NEXT_CYCLE
+    expect(prompt).toMatch(
+      /Ne produis PAS un NEXT_CYCLE présenté comme durablement matérialisable sans les six signaux/,
+    );
+    expect(prompt).toMatch(
+      /signaux non qualifiables[\s\S]*lifecycleRecommendation = null/,
+    );
+
+    // T5 — cycle-owned unknowns (e.g. exploratory Framing) ≠ extra pre-cycle questionnaire
+    //     and ≠ omitting the six signals
+    expect(prompt).toMatch(
+      /inconnues qui appartiennent normalement au cycle[\s\S]*NE justifient PAS[\s\S]*questionnaire pré-cycle artificiel/,
+    );
+    expect(prompt).toMatch(
+      /qualification explicite des signaux N'EXIGE PAS que le Cadrage soit déjà réalisé/,
+    );
+
+    // T6 — governance: Recommendation ≠ HD / prepare / START / execution
+    expect(prompt).toMatch(
+      /Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution/,
+    );
+    expect(prompt).toMatch(
+      /ne crée pas de CycleInstance \/ HD \/ START/,
+    );
+
+    // T7 — FINALIZE may null signals; CURRENT continuity preserved
+    expect(prompt).toMatch(
+      /FINALIZE_CURRENT_CYCLE : qualificationSignals peut être null/,
+    );
+    expect(prompt).toMatch(
+      /Recommendation CURRENT applicable : ne pas réémettre uniquement pour un nouveau message/,
+    );
+  });
+
   it("intent analysis treats lifecycle formalization as informative effect", () => {
     expect(ANALYSIS_SYSTEM).toMatch(/Formalise maintenant dans Studio/);
     expect(ANALYSIS_SYSTEM).toMatch(
```

---

## 9. Classification C14

`projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md`
- État : **M local**, **non inclus** dans le commit Product
- Raison : documentaire / reserves — lot séparé
- Inclusion PR : **non** (arbitrage non requis — exclusion volontaire conforme GO)

## 10. Exclusions réelles

| Chemin | Statut |
|--------|--------|
| C14 p6-qa-integration-state-and-reserves.md | M local préservé |
| `.tmp-sfia-review/**` | exclus |
| `projects/.tmp-sfia-review/**` (+ sqlite) | exclus |
| `__tests__/p6-campaign/*.real.test.ts` | exclus (untracked) |
| Secrets / `.env*` / DB HQA | absents du staging |

## 11. Réserves

1. Visual Figma / runtime Pilot — hors scope Git Integration.
2. M-DISP matérialité — présentation neutre seulement ; pas de moteur.
3. CI : **FAIL** — PRR digest conformance (`a718e67e…` vs `d064b36d…`) ; Typecheck/Lint/Build PASS.
4. Merge / Ready : **GO Morris distinct requis**.
5. Typecheck workspace bruité par harness REAL exclus — non bloquant Product.

## 12. Verdict

# DRAFT PR OPEN — CI BLOCKED / REVIEW REQUIRED

Gate suivant : ChatGPT Critical PR Review + CI Review.
Puis GO Morris distinct pour merge. Aucun post-merge initié.

---

## 13. CI FINAL — EVIDENCE (2026-10-10 09:19:23 CEST)

### Checks

| Check | Status |
|-------|--------|
| Detect SFIA Studio changes | **PASS** |
| Build and validate SFIA Studio | **FAIL** |
| SFIA Studio Required Gate | **FAIL** |

### Steps Build job (preuves)

| Step | Status |
|------|--------|
| Install dependencies | PASS |
| Typecheck | **PASS** |
| Lint | **PASS** |
| Build | **PASS** |
| Unit tests (Vitest) | **FAIL** |
| Secret / whitespace / governance | skipped (after fail) |

### Vitest summary CI

`Test Files  1 failed | 501 passed | 22 skipped (524)`

### Unique failure

```
FAIL __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts
  > Living Production Runtime Reference conformance
  > tracked source/test/volume digests match current tree

AssertionError: expected 'a718e67e59895d23' to be 'd064b36ddc2f21cd'
  at productionRuntimeReference.conformance.d0.test.ts:100
```

### Qualification

- Cause : digests `sha256_16` du manifest Living Production Runtime Reference
  (`projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`)
  ne correspondent plus aux sources Product modifiées/ajoutées par le commit `6a4374ed`.
- Nature : **mécanique / référentiel** — le test lui-même indique
  `digestMismatchMeans = REFERENCE REVIEW REQUIRED` et
  `refreshDigestDoesNotValidateSemantics = true`.
- Hors allowlist Product initiale (19 fichiers) — **non corrigé silencieusement**
  dans ce cycle (instruction GO : pas de fix CI hors périmètre sans qualification).
- Typecheck/Lint/Build CI Product : **PASS** — échec limité au digest conformance.
- Product Framing/UX/F01 suites locales : **PASS** (inchangé).

### Action requise (gate Morris)

Arbitrage pour un commit de suivi **mécanique** de refresh digests PRR
(hors merge / hors Ready), ou revue référence explicite.
Aucun merge / Ready initié.
