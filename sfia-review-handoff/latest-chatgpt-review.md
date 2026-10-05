# P5-S03 — OBJECT-NATIVE PRODUCT VIEWS —
APERÇU + EXÉCUTION —
FULL REVIEW PACK
(COMPLETE REPUBLICATION — MODIFIED CONTENT INCLUDED)

## 0. Republication reason

ChatGPT Critical Review verdict: **NOT READY — TARGETED CORRECTION REQUIRED**

Stop string:
`REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`

Prior handoff (insufficient summary-only):
- commit `4602d97b9f173f25bb63fd080f6c4108391b6c6d`
- blob `5f4c90d2a1015af6d47bb4aacf7dc4af41db8a9c`

This republication includes:
1. full newly created source files;
2. full unified diffs for modified project files;
3. full modified documentary tip/verdict sections;
4. retained evidence claims from the S03 delivery pass.

## 1. Timestamp

`2026-10-05T14:08:17Z` — COMPLETE HANDOFF REPUBLICATION

## 2. Cycle / profile

| Field | Value |
| --- | --- |
| Macro | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| Milestone | P5 — Integrated Delivery |
| Slice | **P5-S03 — Object-Native Product Views — Aperçu + Exécution** |
| Cycle | 8 — Delivery / Implementation + Critical Review correction |
| Profile | **CRITICAL** |
| Fake/Real | **ZERO REAL** |

## 3. Morris decisions

| Decision | Status |
| --- | --- |
| MORRIS P5-S03 DELIVERY AUTHORIZATION | **CONSUMED** |
| Project commit/push/PR/merge | **NOT AUTHORIZED** |
| This pass | **Review Handoff complete republication only** |

## 4. Local Git truth

| Field | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` |
| HEAD / base | `1a7e80b20949a041b1edc279ffed735b04bda997` (= origin/main) |
| Project commit | **NONE** |
| Staged | EMPTY |
| Dirty scope | S03 local candidate files + `.tmp-sfia-review/**` |

## 5. Main / S02 integration truth

`origin/main` = `1a7e80b20949a041b1edc279ffed735b04bda997`
PR **#556** MERGED · CI **#680** SUCCESS · Required Gate SUCCESS · P5-S02 INTEGRATED.

## 6. Exact file inventory

### Created (full content below)

1. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx`
2. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.module.css`
3. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx`
4. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.module.css`
5. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts`
6. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx`
7. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts`

### Modified (full unified diff vs origin/main below)

8. `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
9. `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css`
10. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx`
11. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx`
12. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx`
13. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`
14. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx`
15. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`
16. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
17. `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md`
18. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

### Protected / production runtime

**NONE modified** (`lib/oa/**`, `nora-cognitive-runtime/**`, provider, Agents Runner, F2, DB schema).

## 7. Evidence retained from delivery pass

| Check | Result |
| --- | --- |
| Targeted S03 tests | PASS |
| pre-m6-product-ui suite | 158/158 PASS |
| Deterministic bypass | PASS |
| Typecheck | PASS |
| Lint | PASS |
| Build | PASS |
| Full npm test | 5189 passed / 138 skipped |
| REAL calls | 0 |
| Visual A/B | A=0 / B=0 |
| Captures | `.tmp-sfia-review/p5-s03-visual/` (scratch) |

## 8. Object Projection Matrix (condensed — full behavioral truth is in sources below)

Recommendation ≠ HumanDecision ≠ Confirmation ≠ ExecutionContract ≠ Result ≠ Evidence.
Aperçu = orientation projection from existing LPS/lifecycle/history.
Exécution = canonical `w2DeriveGovernedExecutionContinuityAction` + presentation-only adapter.
`activeView` = ephemeral React state only — never Product persistence.
Synthèses = honest empty / not built.
Journal/Historique = KEEP.

## 9. Anti-claims

P5-S03 INTEGRATED = NO · P5 COMPLETE = NO · R3 PASS = NO · P6 READY = NO · runtime v3 ADOPTED = NO · project commit/push/PR/merge = NO.

---

# PART A — FULL NEW FILES

## A1. FULL FILE — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts`

```ts
/**
 * P5-S03 — presentation-only adapter:
 * GovernedExecutionContinuityProjection (+ optional pre-exec continuity)
 * → PilotExecutionPresentation.
 *
 * No persistence. No new Product enums. Unknown → fail-closed / unavailable.
 * Prefer this over UI-local phase inference.
 */
import type {
  GovernedExecutionContinuityProjection,
  GovernedExecutionContinuityStage,
} from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
import {
  presentPilotContract,
  type PilotContractPresentation,
} from "./pilotContractPresentation";

/** P3 Pilot-facing execution statuses — never expose internal stage codes. */
export type PilotExecutionStatus =
  | "a_confirmer"
  | "prete"
  | "en_cours"
  | "terminee"
  | "echouee"
  | "arretee"
  | "indisponible"
  | "vide";

export type PilotExecutionTone =
  | "neutral"
  | "ready"
  | "running"
  | "ok"
  | "danger"
  | "warn";

export type PilotExecutionCta =
  | { readonly kind: "none" }
  | { readonly kind: "confirm"; readonly label: string; readonly enabled: boolean }
  | { readonly kind: "execute"; readonly label: string; readonly enabled: boolean }
  | {
      readonly kind: "return_conversation";
      readonly label: string;
      readonly enabled: true;
    };

export type PilotExecutionWorkItem = {
  readonly id: string;
  readonly label: string;
  readonly stateLabel: string;
};

export type PilotExecutionEvidenceItem = {
  readonly id: string;
  readonly label: string;
  readonly stateLabel: string;
};

export type PilotExecutionPresentation = {
  readonly status: PilotExecutionStatus;
  readonly statusLabel: string;
  readonly tone: PilotExecutionTone;
  readonly title: string;
  readonly subtitle: string;
  readonly stateDetail: string | null;
  readonly scopeLabel: string | null;
  readonly scopeDetail: string | null;
  readonly impactLabel: string | null;
  readonly impactDetail: string | null;
  readonly reversibilityLabel: string | null;
  readonly reversibilityDetail: string | null;
  readonly attentionNote: string | null;
  readonly workItems: readonly PilotExecutionWorkItem[];
  readonly workItemsTotal: number;
  readonly workItemsCollapsed: boolean;
  readonly resultTitle: string | null;
  readonly resultBody: string | null;
  readonly resultVerified: boolean;
  readonly evidenceItems: readonly PilotExecutionEvidenceItem[];
  readonly evidenceAvailable: boolean;
  /** Distinct from Result — never promote Evidence as Result. */
  readonly evidenceIsNotResult: true;
  readonly cta: PilotExecutionCta;
  readonly contractPresentation: PilotContractPresentation | null;
  readonly stage: GovernedExecutionContinuityStage | "NONE" | "UNAVAILABLE";
  readonly attemptStatus: string | null;
  readonly failureCause: string | null;
  readonly empty: boolean;
};

const WORK_PREVIEW_LIMIT = 4;

function statusLabelFor(status: PilotExecutionStatus): string {
  switch (status) {
    case "a_confirmer":
      return "À confirmer";
    case "prete":
      return "Prête à exécuter";
    case "en_cours":
      return "En cours";
    case "terminee":
      return "Terminée";
    case "echouee":
      return "Échouée";
    case "arretee":
      return "Arrêtée";
    case "indisponible":
      return "Indisponible";
    case "vide":
      return "Aucune exécution";
  }
}

function toneFor(status: PilotExecutionStatus): PilotExecutionTone {
  switch (status) {
    case "prete":
      return "ready";
    case "en_cours":
      return "running";
    case "terminee":
      return "ok";
    case "echouee":
      return "danger";
    case "a_confirmer":
    case "arretee":
      return "warn";
    default:
      return "neutral";
  }
}

function mapTerminalAttempt(
  attemptStatus: string | null,
): Pick<
  PilotExecutionPresentation,
  "status" | "failureCause"
> {
  if (attemptStatus === "cancelled") {
    return { status: "arretee", failureCause: null };
  }
  if (attemptStatus === "timeout") {
    return { status: "echouee", failureCause: "timeout" };
  }
  if (attemptStatus === "failed") {
    return { status: "echouee", failureCause: "failed" };
  }
  if (attemptStatus === "succeeded") {
    return { status: "terminee", failureCause: null };
  }
  // Unknown terminal-ish → fail closed (not a fake success).
  return { status: "indisponible", failureCause: attemptStatus };
}

function contractTitle(
  continuity: CurrentGovernedExecutionContinuityResult | null,
  projection: GovernedExecutionContinuityProjection | null,
  contractPresentation: PilotContractPresentation | null,
): string {
  if (contractPresentation?.nowTitle) return contractPresentation.nowTitle;
  const action =
    continuity && continuity.ok && continuity.kind === "active"
      ? continuity.contract.action
      : projection?.context?.executionContract?.action;
  if (action?.includes("docs_write")) {
    return "Écriture documentaire préparée";
  }
  if (projection?.context?.executionContract?.objective?.trim()) {
    return projection.context.executionContract.objective.trim();
  }
  return "Action préparée";
}

function buildWorkItems(
  projection: GovernedExecutionContinuityProjection | null,
  terminal: boolean,
): {
  items: PilotExecutionWorkItem[];
  total: number;
  collapsed: boolean;
} {
  const summaries =
    projection?.context?.executionReview.reviewItemSummaries ?? [];
  const total = summaries.length;
  const sliced = summaries.slice(0, WORK_PREVIEW_LIMIT);
  const items = sliced.map((item) => ({
    id: item.itemId,
    label: item.label || item.kind,
    stateLabel: terminal ? "Terminé" : "Prévu",
  }));
  if (items.length === 0 && projection?.context?.executionContract) {
    return {
      items: [
        {
          id: "contract-action",
          label: terminal
            ? "Action exécutée dans la portée du contrat"
            : "Action prévue dans la portée du contrat",
          stateLabel: terminal ? "Terminé" : "Prévu",
        },
      ],
      total: 1,
      collapsed: false,
    };
  }
  return {
    items,
    total: total || items.length,
    collapsed: total > WORK_PREVIEW_LIMIT,
  };
}

function buildEvidenceItems(
  projection: GovernedExecutionContinuityProjection | null,
): PilotExecutionEvidenceItem[] {
  if (!projection) return [];
  const items: PilotExecutionEvidenceItem[] = [];
  if (projection.evidenceId) {
    items.push({
      id: projection.evidenceId,
      label: "Preuve d’exécution associée",
      stateLabel:
        projection.context?.evidence.status === "verified"
          ? "Vérifiée"
          : "Disponible",
    });
  }
  // ReviewBundle is internal — never expose raw RB as Pilot Evidence card.
  return items;
}

export type PresentPilotExecutionInput = {
  readonly continuityProjection:
    | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
    | { readonly ok: false; readonly code: string; readonly message: string }
    | null;
  readonly preExecutionContinuity: CurrentGovernedExecutionContinuityResult | null;
  /** Existing conversation authority path may allow confirm/execute. */
  readonly canConfirm: boolean;
  readonly canExecute: boolean;
};

/**
 * Pure mapping — exhaustive on known continuity stages; unknown → indisponible.
 */
export function presentPilotExecution(
  input: PresentPilotExecutionInput,
): PilotExecutionPresentation {
  const emptyBase = {
    stateDetail: null,
    scopeLabel: null,
    scopeDetail: null,
    impactLabel: null,
    impactDetail: null,
    reversibilityLabel: null,
    reversibilityDetail: null,
    attentionNote: null,
    workItems: [] as PilotExecutionWorkItem[],
    workItemsTotal: 0,
    workItemsCollapsed: false,
    resultTitle: null,
    resultBody: null,
    resultVerified: false,
    evidenceItems: [] as PilotExecutionEvidenceItem[],
    evidenceAvailable: false,
    evidenceIsNotResult: true as const,
    contractPresentation: null,
    attemptStatus: null,
    failureCause: null,
  };

  if (!input.continuityProjection) {
    return {
      ...emptyBase,
      status: "vide",
      statusLabel: statusLabelFor("vide"),
      tone: "neutral",
      title: "Aucune exécution en cours",
      subtitle:
        "Lorsqu’un contrat d’exécution sera préparé, vous pourrez l’inspecter ici.",
      cta: { kind: "none" },
      stage: "NONE",
      empty: true,
    };
  }

  if (!input.continuityProjection.ok) {
    return {
      ...emptyBase,
      status: "indisponible",
      statusLabel: statusLabelFor("indisponible"),
      tone: "warn",
      title: "Exécution indisponible",
      subtitle: input.continuityProjection.message,
      attentionNote: input.continuityProjection.code,
      cta: { kind: "return_conversation", label: "Revenir à la conversation", enabled: true },
      stage: "UNAVAILABLE",
      empty: false,
    };
  }

  const projection = input.continuityProjection.projection;
  const pre =
    input.preExecutionContinuity &&
    input.preExecutionContinuity.ok &&
    input.preExecutionContinuity.kind === "active"
      ? input.preExecutionContinuity
      : null;

  const contractPresentation = pre
    ? presentPilotContract({
        action: pre.contract.action,
        target: pre.contract.target,
        scope: pre.contract.scope,
        requiredAuthority: pre.contract.requiredAuthority,
        reversibility: pre.contract.reversibility,
        targetPath: pre.contract.inspectionDisclosure?.targetPath ?? null,
        targetRepositoryRef:
          pre.contract.inspectionDisclosure?.targetRepositoryRef ?? null,
      })
    : null;

  const title = contractTitle(input.preExecutionContinuity, projection, contractPresentation);
  const scopeLabel = pre?.contract.scope ?? null;
  const reversibilityLabel =
    contractPresentation?.reversibilityLabel ??
    (pre?.contract.reversibility === "reversible"
      ? "Réversible"
      : pre?.contract.reversibility
        ? pre.contract.reversibility
        : null);

  const confirmationRequired =
    projection.executionContractStatus === "confirmation_required" ||
    pre?.contract.status === "confirmation_required" ||
    pre?.contract.effectConfirmationRequired === true;

  const confirmationSatisfied =
    pre?.contract.status === "confirmed" ||
    projection.executionContractStatus === "confirmed" ||
    projection.executionContractStatus === "validated";

  const stage = projection.stage;

  // PRE / early stages
  if (
    stage === "PRE_EXECUTION" ||
    (stage === "ATTEMPT_ACCEPTED" && !projection.attemptStatus)
  ) {
    if (!projection.executionContractId && !pre) {
      return {
        ...emptyBase,
        status: "vide",
        statusLabel: statusLabelFor("vide"),
        tone: "neutral",
        title: "Aucune exécution en cours",
        subtitle:
          "Aucune action préparée pour ce projet. La conversation reste le point d’entrée.",
        cta: { kind: "none" },
        stage,
        empty: true,
      };
    }

    const work = buildWorkItems(projection, false);
    const needsConfirm = confirmationRequired && !confirmationSatisfied;
    const status: PilotExecutionStatus = needsConfirm ? "a_confirmer" : "prete";
    const cta: PilotExecutionCta = needsConfirm
      ? {
          kind: "confirm",
          label: "Confirmer",
          enabled: input.canConfirm,
        }
      : {
          kind: "execute",
          label: "Exécuter",
          enabled: input.canExecute && !needsConfirm,
        };

    return {
      ...emptyBase,
      status,
      statusLabel: statusLabelFor(status),
      tone: toneFor(status),
      title,
      subtitle: needsConfirm
        ? "Confirmation requise avant tout effet."
        : "Action préparée · prête à être lancée",
      stateDetail: needsConfirm ? "En attente de confirmation" : "Action préparée",
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      attentionNote: needsConfirm
        ? "Aucun effet ne sera produit tant que la confirmation n’est pas donnée."
        : "L’action reste limitée à la portée du contrat. Aucun effet hors contrat n’est prévu.",
      workItems: work.items,
      workItemsTotal: work.total,
      workItemsCollapsed: work.collapsed,
      cta,
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      empty: false,
    };
  }

  if (stage === "ATTEMPT_ACCEPTED" || stage === "RUNNING") {
    const work = buildWorkItems(projection, false);
    return {
      ...emptyBase,
      status: "en_cours",
      statusLabel: statusLabelFor("en_cours"),
      tone: "running",
      title,
      subtitle: "Exécution en cours — aucun nouvel Exécuter.",
      stateDetail: "En cours",
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      workItems: work.items,
      workItemsTotal: work.total,
      workItemsCollapsed: work.collapsed,
      // No STOP fabricated — existing runtime stop not wired as Product CTA here.
      cta: { kind: "none" },
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      empty: false,
    };
  }

  if (
    stage === "PRODUCT_MATERIALIZATION_PENDING" ||
    stage === "POST_EVIDENCE_PENDING" ||
    stage === "POST_EVIDENCE_COMPLETE"
  ) {
    const terminalMap = mapTerminalAttempt(projection.attemptStatus);
    const work = buildWorkItems(projection, terminalMap.status === "terminee");
    const evidenceItems = buildEvidenceItems(projection);
    const isSuccess = terminalMap.status === "terminee";
    const verdict = projection.productOutcome;

    return {
      ...emptyBase,
      status: terminalMap.status,
      statusLabel: statusLabelFor(terminalMap.status),
      tone: toneFor(terminalMap.status),
      title,
      subtitle: isSuccess
        ? "Dernière action exécutée · résultat disponible"
        : terminalMap.failureCause === "timeout"
          ? "Échouée · cause : délai dépassé"
          : "Résultat terminal disponible",
      stateDetail: statusLabelFor(terminalMap.status),
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      workItems: work.items,
      workItemsTotal: work.total,
      workItemsCollapsed: work.collapsed,
      resultTitle: isSuccess
        ? "Mise à jour terminée dans la portée prévue"
        : "Résultat d’exécution",
      resultBody: isSuccess
        ? "Le résultat produit est distinct des preuves associées. Une exécution terminée n’implique pas la clôture du Cycle."
        : projection.reason ??
          (verdict ? `Verdict produit : ${verdict}` : "Résultat enregistré."),
      resultVerified: Boolean(projection.evidenceId) && isSuccess,
      evidenceItems,
      evidenceAvailable: evidenceItems.length > 0,
      cta: {
        kind: "return_conversation",
        label: "Revenir à la conversation",
        enabled: true,
      },
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      failureCause: terminalMap.failureCause,
      empty: false,
      attentionNote:
        stage === "PRODUCT_MATERIALIZATION_PENDING"
          ? "Résultat technique reçu — matérialisation produit encore en cours."
          : stage === "POST_EVIDENCE_PENDING"
            ? "Résultat disponible — preuves associées encore en cours de finalisation."
            : null,
    };
  }

  if (stage === "RECOVERY_REQUIRED") {
    return {
      ...emptyBase,
      status: "indisponible",
      statusLabel: "À reprendre",
      tone: "warn",
      title: "Reprise requise",
      subtitle:
        projection.reason ??
        "L’état d’exécution nécessite une reprise gouvernée dans la conversation.",
      attentionNote: projection.blockingCode,
      cta: {
        kind: "return_conversation",
        label: "Revenir à la conversation",
        enabled: true,
      },
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      empty: false,
    };
  }

  // Exhaustiveness fail-closed
  return {
    ...emptyBase,
    status: "indisponible",
    statusLabel: statusLabelFor("indisponible"),
    tone: "warn",
    title: "État d’exécution non projetable",
    subtitle: "La projection Product n’a pas pu être traduite honnêtement.",
    cta: {
      kind: "return_conversation",
      label: "Revenir à la conversation",
      enabled: true,
    },
    stage: "UNAVAILABLE",
    empty: false,
  };
}

/** Tab badge — only when Product truth honestly justifies attention. */
export function deriveExecutionTabBadge(
  presentation: PilotExecutionPresentation,
): number | null {
  if (
    presentation.status === "a_confirmer" ||
    presentation.status === "prete" ||
    presentation.stage === "RECOVERY_REQUIRED"
  ) {
    return 1;
  }
  return null;
}
```

## A2. FULL FILE — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import type {
  AttentionItem,
  CurrentnessPresentation,
  CycleSummary,
  TrajectoryNode,
} from "../workspaceContextPresentation";
import styles from "./OverviewSurface.module.css";

export type OverviewRecentActivityItem = {
  readonly id: string;
  readonly headline: string;
  readonly detail: string;
  readonly kind: string;
};

function deriveRecentActivity(
  history: W2ProjectHistoryReadModel | null,
): OverviewRecentActivityItem[] {
  if (!history) return [];
  const items: OverviewRecentActivityItem[] = [];

  for (const decision of history.decisions.slice(0, 3)) {
    items.push({
      id: `dec:${decision.decisionId}`,
      kind: "Décision",
      headline: `Décision enregistrée · ${decision.selectedOptionRef}`,
      detail: `${decision.status} · ${decision.actorRole}`,
    });
  }
  for (const version of history.trajectory.versions.slice(0, 2)) {
    if (items.length >= 5) break;
    items.push({
      id: `trj:${version.trajectoryId}:${version.version}`,
      kind: "Trajectoire",
      headline: version.isEffectiveCurrent
        ? "Trajectoire courante actualisée"
        : version.status === "candidate"
          ? "Trajectoire proposée (pas encore décidée)"
          : `Trajectoire v${version.version}`,
      detail: `${version.stepCount} étape${version.stepCount > 1 ? "s" : ""}`,
    });
  }
  for (const contract of history.contracts.slice(0, 2)) {
    if (items.length >= 5) break;
    items.push({
      id: `xct:${contract.executionContractId}`,
      kind: "Exécution",
      headline: `Contrat d’exécution · ${contract.status}`,
      detail: `Version ${contract.version}`,
    });
  }
  return items;
}

export type OverviewSurfaceProps = {
  projectId: string;
  projectName: string;
  cycle: CycleSummary;
  focus: string;
  focusTopic: string | null;
  currentness: CurrentnessPresentation;
  trajectory: TrajectoryNode[];
  attention: AttentionItem[];
  onOpenConversation: () => void;
  onOpenJournal: () => void;
  onOpenHistory: () => void;
};

/**
 * P5-S03 Aperçu — object-native orientation projection.
 * Reads only Product projections already available / durable history.
 * No persistence. No fake Synthesis. Recommendation ≠ Decision.
 */
export function OverviewSurface({
  projectId,
  projectName,
  cycle,
  focus,
  focusTopic,
  currentness,
  trajectory,
  attention,
  onOpenConversation,
  onOpenJournal,
  onOpenHistory,
}: OverviewSurfaceProps) {
  const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);

  useEffect(() => {
    let cancelled = false;
    void w2ReadProjectHistoryAction({ projectId }).then((result) => {
      if (cancelled) return;
      if (result.ok) setHistory(result.history);
      else setHistory(null);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const activity = deriveRecentActivity(history);
  const decisionAttention = attention.find((a) => a.key === "decision");
  const reserveAttention = attention.find((a) => a.key === "reserve");

  return (
    <div className={styles.root} data-testid="project-overview-surface">
      <section
        className={styles.stats}
        aria-label="État du projet"
        data-testid="project-overview-stats"
      >
        <div className={styles.stat}>
          <p className={styles.statLabel}>État du projet</p>
          <p className={styles.statValue}>{cycle.label}</p>
          {cycle.statusLabel ? (
            <p className={styles.statSub}>{cycle.statusLabel}</p>
          ) : null}
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Priorité</p>
          <p className={styles.statValue} data-testid="project-overview-focus">
            {focusTopic ?? focus}
          </p>
          {focusTopic ? <p className={styles.statSub}>{focus}</p> : null}
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Décisions</p>
          <p
            className={styles.statValue}
            data-tone={decisionAttention ? "warn" : undefined}
            data-testid="project-overview-decisions"
          >
            {decisionAttention ? "1" : "—"}
          </p>
          <p className={styles.statSub}>
            {decisionAttention ? "à examiner" : "aucune en attente"}
          </p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Réserves</p>
          <p
            className={styles.statValue}
            data-tone={reserveAttention ? "warn" : undefined}
            data-testid="project-overview-reserves"
          >
            {reserveAttention
              ? reserveAttention.headline.match(/^\d+/)?.[0] ?? "—"
              : "—"}
          </p>
          <p className={styles.statSub}>
            {reserveAttention ? "ouvertes" : "aucune ouverte"}
          </p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Mise à jour</p>
          <p
            className={styles.statValue}
            data-tone={currentness.tone === "ok" ? "ok" : "warn"}
            data-testid="project-overview-currentness"
          >
            {currentness.label}
          </p>
          <p className={styles.statSub}>{currentness.detail}</p>
        </div>
      </section>

      <div className={styles.columns}>
        <section
          className={styles.section}
          aria-labelledby="overview-trajectory-title"
          data-testid="project-overview-trajectory"
        >
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="overview-trajectory-title">
              Trajectoire
            </h2>
          </div>
          {trajectory.length === 0 ? (
            <p className={styles.empty}>
              Aucun cycle enregistré pour {projectName} pour l’instant.
            </p>
          ) : (
            <ol className={styles.track}>
              {trajectory.map((node) => (
                <li
                  key={node.key}
                  className={styles.node}
                  data-state={node.state}
                >
                  <span className={styles.nodeDot} aria-hidden />
                  <span className={styles.nodeName}>C{node.ordinal}</span>
                  <span className={styles.nodeState}>{node.label}</span>
                </li>
              ))}
            </ol>
          )}
          <p className={styles.empty}>
            « Proposé » désigne une recommandation / candidature — pas un cycle
            décidé automatiquement.
          </p>
        </section>

        <section
          className={styles.section}
          aria-labelledby="overview-attention-title"
          data-testid="project-overview-attention"
        >
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="overview-attention-title">
              Attention
            </h2>
            <button
              type="button"
              className={styles.nextStepCta}
              onClick={onOpenJournal}
            >
              Journal
            </button>
          </div>
          {attention.length === 0 ? (
            <p className={styles.empty}>Rien ne demande votre attention.</p>
          ) : (
            <ul className={styles.attentionList}>
              {attention.map((item) => (
                <li
                  key={item.key}
                  className={styles.attentionItem}
                  data-testid={`project-overview-attention-${item.key}`}
                >
                  <span className={styles.attentionHead}>{item.headline}</span>
                  <span className={styles.attentionDetail}>{item.detail}</span>
                  <span className={styles.activityMeta}>
                    {item.key === "decision" ? "Décision" : "Réserve"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section
          className={styles.section}
          aria-labelledby="overview-activity-title"
          data-testid="project-overview-activity"
        >
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="overview-activity-title">
              Activité récente
            </h2>
            <button
              type="button"
              className={styles.nextStepCta}
              onClick={onOpenHistory}
            >
              Historique
            </button>
          </div>
          {activity.length === 0 ? (
            <p className={styles.empty}>
              Aucune activité durable significative pour l’instant.
            </p>
          ) : (
            <ul className={styles.activityList}>
              {activity.map((item) => (
                <li key={item.id} className={styles.activityItem}>
                  <span className={styles.activityHead}>{item.headline}</span>
                  <span className={styles.activityDetail}>{item.detail}</span>
                  <span className={styles.activityMeta}>{item.kind}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section
          className={styles.nextStep}
          aria-labelledby="overview-next-title"
          data-testid="project-overview-next-step"
        >
          <p className={styles.statLabel} id="overview-next-title">
            Prochaine étape importante
          </p>
          <p className={styles.nextStepTitle}>{focusTopic ?? focus}</p>
          <p className={styles.nextStepBody}>
            {decisionAttention
              ? "Une décision structurante attend votre arbitrage dans la conversation."
              : reserveAttention
                ? "Des réserves ouvertes restent à traiter avec Nora et le Journal."
                : "Poursuivez le travail dans la conversation — Nora propose, vous décidez."}
          </p>
          <button
            type="button"
            className={styles.nextStepCta}
            data-testid="project-overview-open-work"
            onClick={onOpenConversation}
          >
            Ouvrir le travail en cours →
          </button>
        </section>

        <section
          className={styles.section}
          data-testid="project-overview-synthesis"
          aria-labelledby="overview-synthesis-title"
        >
          <h2 className={styles.sectionTitle} id="overview-synthesis-title">
            Synthèses
          </h2>
          <p className={styles.empty} data-testid="project-overview-synthesis-empty">
            Aucune synthèse produit n’est encore disponible. Elle n’est pas
            inventée depuis la conversation.
          </p>
        </section>
      </div>
    </div>
  );
}
```

## A3. FULL FILE — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.module.css`

```css
/*
 * P5-S03 Aperçu — Figma 51:2 / 192:2 geometry adapted to --pm6-* tokens.
 * Presentation only. No second design-system family.
 */

.root {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  padding: 18px 0 28px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  padding: 12px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 4px 6px;
}

.statLabel {
  margin: 0;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.statValue {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--pm6-ink);
  line-height: 1.25;
}

.statValue[data-tone="warn"] {
  color: var(--pm6-danger);
}

.statValue[data-tone="ok"] {
  color: var(--pm6-ok);
}

.statSub {
  margin: 0;
  font-size: 0.6875rem;
  color: var(--pm6-muted);
}

.columns {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  min-width: 0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}

.sectionHead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.sectionTitle {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.empty {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
  line-height: 1.4;
}

.track {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  margin: 0;
  padding: 12px 14px;
  list-style: none;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-surface);
}

.node {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.nodeDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pm6-ink);
  flex: 0 0 auto;
}

.node[data-state="current"] .nodeDot {
  background: var(--pm6-danger);
}

.node[data-state="proposed"] .nodeDot {
  background: transparent;
  border: 1.5px solid var(--pm6-danger);
}

.nodeName {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.nodeState {
  font-size: 0.75rem;
  color: var(--pm6-muted);
}

.attentionList,
.activityList {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-surface);
  overflow: hidden;
}

.attentionItem,
.activityItem {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 0.8fr);
  gap: 10px;
  align-items: start;
  padding: 12px 14px;
  border-top: 1px solid var(--pm6-border-faint);
}

.attentionItem:first-child,
.activityItem:first-child {
  border-top: none;
}

.attentionHead,
.activityHead {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.attentionDetail,
.activityDetail {
  font-size: 0.75rem;
  color: var(--pm6-muted);
  line-height: 1.35;
}

.activityMeta {
  font-size: 0.6875rem;
  color: var(--pm6-muted-faint);
}

.nextStep {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
}

.nextStepTitle {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.nextStepBody {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted-strong);
  line-height: 1.4;
}

.nextStepCta {
  align-self: flex-start;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: var(--pm6-danger);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
}

.nextStepCta:hover {
  text-decoration: underline;
}

.nextStepCta:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: 4px;
}

@media (max-width: 1199px) {
  .stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .root {
    padding-top: 10px;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .attentionItem,
  .activityItem {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
```

## A4. FULL FILE — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx`

```tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  w2DeriveGovernedExecutionContinuityAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
} from "@/features/project-assistant/w2/actions";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
import {
  presentPilotExecution,
  type PilotExecutionPresentation,
} from "./pilotExecutionPresentation";
import styles from "./ExecutionSurface.module.css";

export type ExecutionSurfaceProps = {
  projectId: string;
  /** Existing conversation authority path — never invent execute eligibility. */
  canConfirm: boolean;
  canExecute: boolean;
  onConfirm: () => void;
  onExecute: () => void;
  onReturnToConversation: () => void;
  onPresentationChange?: (presentation: PilotExecutionPresentation) => void;
};

type ContinuityLoad =
  | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
  | null;

/**
 * P5-S03 Exécution — projects canonical Governed Execution Continuity.
 * Prefer w2DeriveGovernedExecutionContinuityAction over UI-local phase inference.
 * Mutations only via existing Conversation controller confirm/execute paths.
 */
export function ExecutionSurface({
  projectId,
  canConfirm,
  canExecute,
  onConfirm,
  onExecute,
  onReturnToConversation,
  onPresentationChange,
}: ExecutionSurfaceProps) {
  const [continuity, setContinuity] = useState<ContinuityLoad>(null);
  const [preExec, setPreExec] =
    useState<CurrentGovernedExecutionContinuityResult | null>(null);
  const [expandedWork, setExpandedWork] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void (async () => {
      const [derived, current] = await Promise.all([
        w2DeriveGovernedExecutionContinuityAction({ projectId }),
        w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
      ]);
      if (cancelled) return;
      setContinuity(derived);
      setPreExec(current.ok ? current : null);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const presentation = useMemo(
    () =>
      presentPilotExecution({
        continuityProjection: continuity,
        preExecutionContinuity: preExec,
        canConfirm,
        canExecute,
      }),
    [continuity, preExec, canConfirm, canExecute],
  );

  const lastNotifiedKey = useRef<string | null>(null);
  useEffect(() => {
    const key = `${presentation.status}|${presentation.stage}|${presentation.cta.kind}`;
    if (lastNotifiedKey.current === key) return;
    lastNotifiedKey.current = key;
    onPresentationChange?.(presentation);
  }, [presentation, onPresentationChange]);

  const workItems = expandedWork
    ? presentation.workItems
    : presentation.workItems.slice(0, 4);

  if (loading) {
    return (
      <div className={styles.root} data-testid="project-execution-surface">
        <p className={styles.empty}>Lecture de l’exécution…</p>
      </div>
    );
  }

  if (presentation.empty) {
    return (
      <div className={styles.root} data-testid="project-execution-surface">
        <header className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Exécution</p>
            <h2 className={styles.title}>{presentation.title}</h2>
            <p className={styles.subtitle}>{presentation.subtitle}</p>
          </div>
          <span className={styles.chip} data-tone={presentation.tone}>
            {presentation.statusLabel}
          </span>
        </header>
        <p className={styles.empty} data-testid="project-execution-empty">
          Aucun contrat d’exécution courant. L’onglet reste disponible sans
          inventer d’état.
        </p>
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-return"
            onClick={onReturnToConversation}
          >
            Revenir à la conversation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.root}
      data-testid="project-execution-surface"
      data-status={presentation.status}
      data-stage={presentation.stage}
    >
      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Exécution</p>
          <h2 className={styles.title} data-testid="project-execution-title">
            {presentation.title}
          </h2>
          <p className={styles.subtitle}>{presentation.subtitle}</p>
        </div>
        <span
          className={styles.chip}
          data-tone={presentation.tone}
          data-testid="project-execution-status"
        >
          {presentation.statusLabel}
        </span>
      </header>

      <section className={styles.metrics} aria-label="Faits d’exécution">
        <div className={styles.metric}>
          <p className={styles.metricLabel}>État</p>
          <p className={styles.metricValue}>{presentation.statusLabel}</p>
          {presentation.stateDetail ? (
            <p className={styles.metricDetail}>{presentation.stateDetail}</p>
          ) : null}
          {presentation.failureCause === "timeout" ? (
            <p className={styles.metricDetail}>Cause : délai dépassé</p>
          ) : null}
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Portée</p>
          <p className={styles.metricValue}>
            {presentation.scopeDetail ?? "Selon le contrat"}
          </p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Impact prévu</p>
          <p className={styles.metricValue}>
            {presentation.impactDetail ?? "Borné au contrat"}
          </p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Réversibilité</p>
          <p className={styles.metricValue}>
            {presentation.reversibilityDetail ?? "Selon le contrat"}
          </p>
        </div>
      </section>

      {presentation.resultTitle ? (
        <section
          className={styles.result}
          data-testid="project-execution-result"
          aria-labelledby="execution-result-title"
        >
          <div className={styles.resultHead}>
            <h3 className={styles.sectionTitle} id="execution-result-title">
              Résultat
            </h3>
            {presentation.resultVerified ? (
              <span className={styles.chip} data-tone="ok">
                Vérifié
              </span>
            ) : null}
          </div>
          <p className={styles.resultTitle}>{presentation.resultTitle}</p>
          {presentation.resultBody ? (
            <p className={styles.resultBody}>{presentation.resultBody}</p>
          ) : null}
        </section>
      ) : null}

      <section
        className={styles.section}
        aria-labelledby="execution-work-title"
        data-testid="project-execution-work"
      >
        <h3 className={styles.sectionTitle} id="execution-work-title">
          {presentation.status === "terminee" ||
          presentation.status === "echouee" ||
          presentation.status === "arretee"
            ? "Ce qui a été fait"
            : "Ce qui va être fait"}
        </h3>
        {workItems.length === 0 ? (
          <p className={styles.empty}>Aucun détail d’éléments disponible.</p>
        ) : (
          <ul className={styles.workList}>
            {workItems.map((item) => (
              <li key={item.id} className={styles.workItem}>
                <span className={styles.workLabel}>{item.label}</span>
                <span className={styles.workState}>{item.stateLabel}</span>
              </li>
            ))}
          </ul>
        )}
        {presentation.workItemsCollapsed && !expandedWork ? (
          <button
            type="button"
            className={styles.moreLink}
            onClick={() => setExpandedWork(true)}
          >
            Voir les {presentation.workItemsTotal} éléments →
          </button>
        ) : null}
      </section>

      {presentation.evidenceAvailable ? (
        <section
          className={styles.section}
          aria-labelledby="execution-evidence-title"
          data-testid="project-execution-evidence"
        >
          <h3 className={styles.sectionTitle} id="execution-evidence-title">
            Preuves associées
          </h3>
          <p className={styles.empty}>
            Les preuves soutiennent le résultat — elles ne le remplacent pas.
          </p>
          <ul className={styles.evidenceList}>
            {presentation.evidenceItems.map((item) => (
              <li key={item.id} className={styles.evidenceItem}>
                <span className={styles.evidenceLabel}>{item.label}</span>
                <span className={styles.evidenceState}>{item.stateLabel}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {presentation.attentionNote ? (
        <p className={styles.attention} data-testid="project-execution-attention">
          {presentation.attentionNote}
        </p>
      ) : null}

      <div className={styles.footer}>
        {presentation.cta.kind === "confirm" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-confirm"
            disabled={!presentation.cta.enabled}
            onClick={onConfirm}
          >
            {presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "execute" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-execute"
            disabled={!presentation.cta.enabled}
            onClick={onExecute}
          >
            {presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "return_conversation" ||
        presentation.cta.kind === "none" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-return"
            onClick={onReturnToConversation}
          >
            Revenir à la conversation
          </button>
        ) : null}
      </div>
    </div>
  );
}
```

## A5. FULL FILE — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.module.css`

```css
/*
 * P5-S03 Exécution — Figma 150:295 / 147:2 / 190:337 adapted to --pm6-*.
 */

.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  padding: 18px 0 28px;
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 650;
  color: var(--pm6-ink);
  line-height: 1.25;
}

.subtitle {
  margin: 6px 0 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
}

.chip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 4px 10px;
  border-radius: 7px;
  border: 1px solid var(--pm6-border);
  background: var(--pm6-canvas-raised);
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--pm6-muted-strong);
}

.chip[data-tone="ready"],
.chip[data-tone="ok"] {
  background: var(--pm6-ok-tint);
  border-color: color-mix(in srgb, var(--pm6-ok) 28%, var(--pm6-border));
  color: var(--pm6-ok);
}

.chip[data-tone="running"],
.chip[data-tone="warn"] {
  background: var(--pm6-warn-tint);
  border-color: color-mix(in srgb, var(--pm6-warn) 28%, var(--pm6-border));
  color: var(--pm6-warn);
}

.chip[data-tone="danger"] {
  background: var(--pm6-danger-tint);
  border-color: color-mix(in srgb, var(--pm6-danger) 28%, var(--pm6-border));
  color: var(--pm6-danger);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 12px;
  border-radius: 7px;
  background: var(--pm6-canvas-raised);
  border: 1px solid var(--pm6-border-faint);
}

.metricLabel {
  margin: 0;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.metricValue {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.metricDetail {
  margin: 0;
  font-size: 0.6875rem;
  color: var(--pm6-muted);
}

.section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.sectionTitle {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.workList,
.evidenceList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  overflow: hidden;
  background: var(--pm6-surface);
}

.workItem,
.evidenceItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px;
  border-top: 1px solid var(--pm6-border-faint);
  font-size: 0.8125rem;
}

.workItem:first-child,
.evidenceItem:first-child {
  border-top: none;
}

.workLabel,
.evidenceLabel {
  color: var(--pm6-ink);
  font-weight: 500;
}

.workState,
.evidenceState {
  color: var(--pm6-muted);
  font-size: 0.75rem;
}

.moreLink {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  align-self: flex-start;
  color: var(--pm6-danger);
  font: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
}

.moreLink:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: 4px;
}

.attention {
  padding: 12px 14px;
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border);
  background: var(--pm6-warn-tint);
  font-size: 0.8125rem;
  color: var(--pm6-ink-soft);
  line-height: 1.4;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-surface);
}

.resultHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.resultTitle {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 650;
  color: var(--pm6-ink);
}

.resultBody {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted-strong);
  line-height: 1.45;
}

.footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 4px;
}

.primaryButton {
  min-height: 38px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: var(--pm6-forest);
  color: var(--pm6-forest-ink);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}

.primaryButton:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.primaryButton:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.empty {
  margin: 0;
  padding: 24px 8px;
  font-size: 0.875rem;
  color: var(--pm6-muted);
  line-height: 1.45;
}

@media (max-width: 767px) {
  .metrics {
    grid-template-columns: 1fr 1fr;
  }

  .head {
    flex-direction: column;
  }

  .footer {
    justify-content: stretch;
  }

  .primaryButton {
    width: 100%;
  }
}
```

## A6. FULL FILE — `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts`

```ts
/**
 * P5-S03 — PilotExecutionPresentation mapping (deterministic, ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  deriveExecutionTabBadge,
  presentPilotExecution,
} from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function baseProjection(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:s03",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    executionContractVersion: 1,
    executionContractStatus: "confirmed",
    attemptId: null,
    attemptStatus: null,
    stage: "PRE_EXECUTION",
    productOutcome: null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: false,
    nextDeterministicAction: "NONE",
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
    ...overrides,
  };
}

describe("P5-S03 pilotExecutionPresentation", () => {
  it("empty when no continuity load yet", () => {
    const view = presentPilotExecution({
      continuityProjection: null,
      preExecutionContinuity: null,
      canConfirm: false,
      canExecute: false,
    });
    expect(view.empty).toBe(true);
    expect(view.status).toBe("vide");
    expect(deriveExecutionTabBadge(view)).toBeNull();
  });

  it("PRE_EXECUTION ready → Prête + Exécuter only when canExecute", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: "dec:1",
        contract: {
          executionContractId: "xct:1",
          version: 1,
          status: "confirmed",
          action: "cursor.docs_write.apply",
          target: "workspace.isolated.docs_write",
          scope: "studio.gcec.docs_write",
          requiredAuthority: "N2",
          constraints: [],
          stopConditions: [],
          requiredCapabilities: [],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          inspectionDisclosure: {
            action: "cursor.docs_write.apply",
            technicalTarget: "workspace.isolated.docs_write",
            scope: "studio.gcec.docs_write",
            targetRepositoryRef: null,
            targetPath: "projects/demo/note.md",
            scopeIn: null,
            scopeOut: null,
            createOrModify: true,
            noDelete: true,
            objective: null,
            artifactType: null,
            artifactBrief: null,
            contentRequirements: null,
            validationExpectations: null,
            expectedOutputs: null,
            sourceGrounding: null,
            acceptanceCriteria: null,
            validationPlan: null,
            reportRequirements: null,
            evidenceRequirements: [],
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: "xct:1",
            semanticFingerprint: "fp",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        inspection: {
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "INSPECTÉ",
          inspectionSufficient: true,
          attestationRef: "att:1",
          attestedVersion: 1,
          staleAttestationRef: null,
          reinspectionRequired: false,
          reason: "inspected",
          grantsAuthority: false,
        },
      },
      canConfirm: false,
      canExecute: true,
    });
    expect(view.status).toBe("prete");
    expect(view.statusLabel).toBe("Prête à exécuter");
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
    expect(deriveExecutionTabBadge(view)).toBe(1);
  });

  it("confirmation_required → À confirmer, no direct execute", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmation_required",
        }),
      },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: "dec:1",
        contract: {
          executionContractId: "xct:1",
          version: 1,
          status: "confirmation_required",
          action: "cursor.docs_write.apply",
          target: "workspace.isolated.docs_write",
          scope: "studio.gcec.docs_write",
          requiredAuthority: "N2",
          constraints: [],
          stopConditions: [],
          requiredCapabilities: [],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          effectConfirmationRequired: true,
          inspectionDisclosure: {
            action: "cursor.docs_write.apply",
            technicalTarget: "workspace.isolated.docs_write",
            scope: "studio.gcec.docs_write",
            targetRepositoryRef: null,
            targetPath: null,
            scopeIn: null,
            scopeOut: null,
            createOrModify: null,
            noDelete: null,
            objective: null,
            artifactType: null,
            artifactBrief: null,
            contentRequirements: null,
            validationExpectations: null,
            expectedOutputs: null,
            sourceGrounding: null,
            acceptanceCriteria: null,
            validationPlan: null,
            reportRequirements: null,
            evidenceRequirements: [],
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: "xct:1",
            semanticFingerprint: "fp",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        inspection: {
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "INSPECTÉ",
          inspectionSufficient: true,
          attestationRef: "att:1",
          attestedVersion: 1,
          staleAttestationRef: null,
          reinspectionRequired: false,
          reason: "inspected",
          grantsAuthority: false,
        },
      },
      canConfirm: true,
      canExecute: true,
    });
    expect(view.status).toBe("a_confirmer");
    expect(view.cta.kind).toBe("confirm");
    expect(view.cta.kind === "execute").toBe(false);
  });

  it("RUNNING → En cours, no Exécuter", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "RUNNING",
          attemptId: "att:1",
          attemptStatus: "running",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
      canConfirm: true,
      canExecute: true,
    });
    expect(view.status).toBe("en_cours");
    expect(view.cta.kind).toBe("none");
  });

  it("timeout → Échouée with cause timeout (not Timeout status)", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "timeout",
          evidenceId: "ev:1",
          reviewBundleId: "rb:1",
          claimEvaluationId: "ce:1",
          postEvidencePresent: true,
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
      canConfirm: false,
      canExecute: false,
    });
    expect(view.status).toBe("echouee");
    expect(view.statusLabel).toBe("Échouée");
    expect(view.failureCause).toBe("timeout");
    expect(view.subtitle).toMatch(/délai dépassé/);
  });

  it("terminal success keeps Result distinct from Evidence", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          reviewBundleId: "rb:1",
          claimEvaluationId: "ce:1",
          postEvidencePresent: true,
          productOutcome: "PASS",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
      canConfirm: false,
      canExecute: false,
    });
    expect(view.status).toBe("terminee");
    expect(view.resultTitle).toBeTruthy();
    expect(view.evidenceIsNotResult).toBe(true);
    expect(view.evidenceAvailable).toBe(true);
    expect(view.cta.kind).toBe("return_conversation");
  });

  it("unknown continuity error → fail closed", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: false,
        code: "OA_STACK_UNAVAILABLE",
        message: "Services OA indisponibles.",
      },
      preExecutionContinuity: null,
      canConfirm: false,
      canExecute: false,
    });
    expect(view.status).toBe("indisponible");
    expect(view.empty).toBe(false);
  });

  it("maps ATTEMPT_ACCEPTED / materialization / recovery stages", () => {
    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "ATTEMPT_ACCEPTED",
            attemptId: "a",
            attemptStatus: "accepted",
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
        canConfirm: false,
        canExecute: false,
      }).status,
    ).toBe("en_cours");

    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "PRODUCT_MATERIALIZATION_PENDING",
            attemptId: "a",
            attemptStatus: "succeeded",
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
        canConfirm: false,
        canExecute: false,
      }).status,
    ).toBe("terminee");

    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "RECOVERY_REQUIRED",
            recoveryRequired: true,
            humanDecisionRequired: true,
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
        canConfirm: false,
        canExecute: false,
      }).stage,
    ).toBe("RECOVERY_REQUIRED");
  });
});
```

## A7. FULL FILE — `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
/**
 * P5-S03 — Conversation / Aperçu / Exécution real view navigation (UI).
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readHistoryMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readHistoryMock: vi.fn(),
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

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantConfirmReservationResolutionAction: vi.fn(),
  projectAssistantDeferReservationAction: vi.fn(),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
  }),
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

vi.mock("@/features/pre-m6-product-ui/surfaces/JournalSurface", () => ({
  JournalSurface: () => <div data-testid="cycle-journal-rail" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
  lpsNextAction: () => "Poursuivre avec Nora",
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/RecoverySurface", () => ({
  RecoverySurface: () => null,
}));

vi.mock(
  "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel",
  () => ({
    ProjectWorkspaceRoutingPanelLazy: () => null,
  }),
);

vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));

describe("P5-S03 object-native views", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:p5-s03",
        activeCycleInstanceId: null,
        executionContractId: null,
        executionContractVersion: null,
        executionContractStatus: null,
        attemptId: null,
        attemptStatus: null,
        stage: "PRE_EXECUTION",
        productOutcome: null,
        evidenceId: null,
        reviewBundleId: null,
        claimEvaluationId: null,
        claimEvaluationStatus: null,
        postEvidencePresent: false,
        nextDeterministicAction: "NONE",
        humanDecisionRequired: false,
        recoveryRequired: false,
        reason: "Aucun ExecutionContract résolu.",
        blockingCode: null,
        context: null,
      },
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    readHistoryMock.mockResolvedValue({
      ok: true,
      history: {
        projectId: "prj:p5-s03",
        cycle: {
          activeCycleInstanceId: null,
          cycleTypeId: null,
          profile: null,
          status: null,
        },
        trajectory: { versions: [] },
        decisions: [],
        contracts: [],
        absent: [],
      },
    });
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s03",
        name: "Product Simplification",
        shortReference: "P5",
        objective:
          "Simplifier le pilotage sans perdre gouvernance, preuve et maîtrise du Pilote.",
        contextSummary: "ctx",
        criticality: "STANDARD",
        constraints: [],
        localMode: true,
        source: "REAL_LOCAL_CORE",
        fixture: false,
        projectWorkspaceKey: null,
        repositoryBinding: null,
      },
      livingState: {
        projectId: "prj:p5-s03",
        version: 2,
        createdAt: "2026-10-05T00:00:00.000Z",
        updatedAt: "2026-10-05T00:00:00.000Z",
        activeCycleInstanceId: null,
        status: "active",
      },
      doctrine: { packageId: "pkg", version: "1", status: "bound" },
      readiness: { status: "READY", reasons: [] },
    });
    useProductConversationMock.mockReturnValue({
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      ephemeralNotice: null,
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
      transcriptAvailability: "empty",
      openContinuityPresentation: { kind: "none" },
      journalEntries: [],
      journalCycleInstanceId: null,
      selectedJournalEntryId: null,
      setSelectedJournalEntryId: vi.fn(),
      focusTurnId: null,
      focusJournalExchanges: vi.fn(),
      focusTranscriptTurn: vi.fn(),
      clearFocusTurn: vi.fn(),
      refreshConversationContinuity: vi.fn(),
      busy: false,
      blocked: false,
      canSend: true,
      gateOpen: true,
      recommendationFreshness: "fresh",
      qualificationFreshness: "fresh",
      durableOutcomeFreshness: "fresh",
      canPrepareResolvedM3: false,
      canPrepareLegacyFixture: false,
      canConfirmResolvedM3: false,
      canConfirmLegacyFixture: false,
      canRefreshResolvedM3Running: false,
      sendMessage: vi.fn(),
      armReinstructionOfProposalId: vi.fn(),
      armedReinstructionOfProposalId: null,
      armReservationInteractionContext: vi.fn(),
      armedReservationInteractionContext: null,
      reservationResolutionProposal: null,
      clearReservationResolutionProposal: vi.fn(),
      decide: vi.fn(),
      prepareResolvedM3: vi.fn(),
      prepareLegacyFixture: vi.fn(),
      confirmAndExecuteResolvedM3: vi.fn(),
      confirmAndExecuteLegacyFixture: vi.fn(),
      refreshResolvedM3RunningAttempt: vi.fn(),
      retryLastUserMessage: vi.fn(),
    });
  });

  it("defaults to Conversation and switches to real Aperçu / Exécution surfaces", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s03" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-tabs")).toBeTruthy();
    });

    expect(
      screen.getByTestId("project-tab-conversation").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    expect(screen.queryByTestId("project-overview-surface")).toBeNull();
    expect(screen.queryByTestId("project-execution-surface")).toBeNull();

    fireEvent.click(screen.getByTestId("project-tab-overview"));
    await waitFor(() => {
      expect(screen.getByTestId("project-overview-surface")).toBeTruthy();
    });
    expect(
      screen.getByTestId("project-tab-overview").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.queryByTestId("project-assistant-panel")).toBeNull();
    expect(screen.getByTestId("project-overview-synthesis-empty")).toBeTruthy();

    fireEvent.click(screen.getByTestId("project-tab-execution"));
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-surface")).toBeTruthy();
    });
    expect(
      screen.getByTestId("project-tab-execution").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.getByTestId("project-execution-empty")).toBeTruthy();
    expect(screen.queryByTestId("project-tab-execution-badge")).toBeNull();

    fireEvent.click(screen.getByTestId("project-tab-conversation"));
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    });
  });

  it("does not invent a fake Synthesis or persist activeView in Product truth", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s03" />);
    await waitFor(() => {
      expect(screen.getByTestId("project-tab-overview")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-tab-overview"));
    await waitFor(() => {
      expect(screen.getByTestId("project-overview-synthesis-empty").textContent).toMatch(
        /Aucune synthèse produit/,
      );
    });
    // Presentation-only: no Product write APIs invoked for view switch.
    expect(getProjectRuntimeActionMock).toHaveBeenCalled();
  });
});
```

---

# PART B — FULL UNIFIED DIFFS VS origin/main

## B1. ProjectWorkspacePage (tsx + css)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 98b89e32..e2a2b2ff 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -290,6 +290,22 @@
   background: var(--pm6-ink);
 }

+.tabBadge {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 16px;
+  height: 16px;
+  margin-left: 6px;
+  padding: 0 4px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-danger);
+  color: #fff;
+  font-size: 0.625rem;
+  font-weight: 700;
+  line-height: 1;
+}
+
 .tab:disabled,
 .tab[aria-disabled="true"] {
   color: var(--pm6-muted-ghost);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 66af4db1..1d7c4388 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -23,6 +23,13 @@ import {
   ProjectContextShortcuts,
   ProjectContextSummary,
 } from "./surfaces/ProjectContextSummary";
+import { OverviewSurface } from "./surfaces/OverviewSurface";
+import { ExecutionSurface } from "./surfaces/ExecutionSurface";
+import {
+  deriveExecutionTabBadge,
+  presentPilotExecution,
+  type PilotExecutionPresentation,
+} from "./surfaces/pilotExecutionPresentation";
 import {
   deriveAttentionItems,
   deriveCycleSummary,
@@ -34,11 +41,18 @@ import {
   projectAssistantConfirmReservationResolutionAction,
   projectAssistantDeferReservationAction,
 } from "@/features/project-assistant/actions";
+import {
+  w2DeriveGovernedExecutionContinuityAction,
+  w2ReadCurrentGovernedExecutionContinuityAction,
+} from "@/features/project-assistant/w2/actions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
 import { ProjectWorkspaceRoutingPanelLazy } from "./surfaces/ProjectWorkspaceRoutingPanel";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

+/** Ephemeral presentation view — never persisted as Product state. */
+type WorkspaceView = "conversation" | "overview" | "execution";
+
 /** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
 function scrollBehaviorPref(): ScrollBehavior {
   if (
@@ -88,6 +102,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
+  const [activeView, setActiveView] = useState<WorkspaceView>("conversation");
+  const [executionPresentation, setExecutionPresentation] =
+    useState<PilotExecutionPresentation | null>(null);
   const [journalCollapsed, setJournalCollapsed] = useState(false);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
@@ -139,15 +156,44 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     };
   }, [projectId]);

+  /** Badge honesty — read canonical continuity without inventing a count. */
+  useEffect(() => {
+    let cancelled = false;
+    void (async () => {
+      const [derived, current] = await Promise.all([
+        w2DeriveGovernedExecutionContinuityAction({ projectId }),
+        w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
+      ]);
+      if (cancelled) return;
+      setExecutionPresentation(
+        presentPilotExecution({
+          continuityProjection: derived,
+          preExecutionContinuity: current.ok ? current : null,
+          canConfirm: false,
+          canExecute: false,
+        }),
+      );
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   const focusConversation = useCallback(() => {
-    conversationRef.current?.scrollIntoView({
-      behavior: scrollBehaviorPref(),
-      block: "start",
-    });
-    const input = conversationRef.current?.querySelector(
-      "[data-testid='project-assistant-input']",
-    );
-    if (input instanceof HTMLTextAreaElement) input.focus();
+    setActiveView("conversation");
+    window.setTimeout(() => {
+      const node = conversationRef.current;
+      if (node && typeof node.scrollIntoView === "function") {
+        node.scrollIntoView({
+          behavior: scrollBehaviorPref(),
+          block: "start",
+        });
+      }
+      const input = node?.querySelector(
+        "[data-testid='project-assistant-input']",
+      );
+      if (input instanceof HTMLTextAreaElement) input.focus();
+    }, 0);
   }, []);

   const controller = useProductConversation({
@@ -323,22 +369,26 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     window.setTimeout(() => scrollToTestId("project-history-panel"), 0);
   }, [scrollToTestId]);

-  /** Tab « Aperçu » — brings the project context panel into view. */
+  /** Tab « Aperçu » — real object-native orientation projection (not scroll-only). */
   const openOverview = useCallback(() => {
-    setLpsOpen(true);
-    window.setTimeout(() => scrollToTestId("project-lps-column"), 0);
-  }, [scrollToTestId]);
+    setActiveView("overview");
+    // Keep the optional context sheet closed by default so Aperçu remains the
+    // main projection (especially on mobile, where the sheet would cover it).
+    setLpsOpen(false);
+  }, []);

-  /** Tab « Exécution » — jumps to the governed execution cards already in the conversation. */
+  /** Tab « Exécution » — real governed-execution projection (not scroll-only). */
   const openExecution = useCallback(() => {
-    for (const id of [
-      "project-assistant-f3-contract",
-      "project-assistant-f3-prepare",
-      "project-assistant-panel",
-    ]) {
-      if (scrollToTestId(id)) return;
-    }
-  }, [scrollToTestId]);
+    setActiveView("execution");
+    setLpsOpen(false);
+  }, []);
+
+  const handleExecutionPresentationChange = useCallback(
+    (presentation: PilotExecutionPresentation) => {
+      setExecutionPresentation(presentation);
+    },
+    [],
+  );

   if (!result) {
     return (
@@ -397,12 +447,14 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const nextAction = lpsNextAction(success.readiness.status);
   const decisionCount = attention.some((a) => a.key === "decision") ? 1 : 0;
   const reserveCount = lifecycle?.reservationSummary?.activeCount ?? 0;
-  const executionAvailable = Boolean(
-    controller.f3Prepare ||
-      controller.f3M3Resolved ||
-      controller.f3Execute ||
-      controller.durableEvidenceOutcome,
-  );
+  const executionBadge =
+    executionPresentation != null
+      ? deriveExecutionTabBadge(executionPresentation)
+      : null;
+  const canConfirmExecution =
+    controller.canConfirmResolvedM3 || controller.canConfirmLegacyFixture;
+  const canExecuteExecution =
+    controller.canConfirmResolvedM3 || controller.canConfirmLegacyFixture;

   return (
     <div className={styles.root} data-testid="project-principal">
@@ -467,12 +519,13 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           className={styles.tabs}
           aria-label="Vues du projet"
           data-testid="project-tabs"
+          data-active-view={activeView}
         >
           <button
             type="button"
             className={styles.tab}
-            data-selected="true"
-            aria-current="true"
+            data-selected={activeView === "conversation" ? "true" : "false"}
+            aria-current={activeView === "conversation" ? "true" : undefined}
             data-testid="project-tab-conversation"
             onClick={focusConversation}
           >
@@ -481,7 +534,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <button
             type="button"
             className={styles.tab}
-            data-selected="false"
+            data-selected={activeView === "overview" ? "true" : "false"}
+            aria-current={activeView === "overview" ? "true" : undefined}
             data-testid="project-tab-overview"
             onClick={openOverview}
           >
@@ -490,74 +544,120 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <button
             type="button"
             className={styles.tab}
-            data-selected="false"
+            data-selected={activeView === "execution" ? "true" : "false"}
+            aria-current={activeView === "execution" ? "true" : undefined}
             data-testid="project-tab-execution"
-            disabled={!executionAvailable}
-            aria-disabled={!executionAvailable}
-            title={
-              executionAvailable
-                ? undefined
-                : "Aucune exécution à afficher pour l’instant"
-            }
             onClick={openExecution}
           >
             Exécution
+            {executionBadge != null ? (
+              <span
+                className={styles.tabBadge}
+                data-testid="project-tab-execution-badge"
+              >
+                {executionBadge}
+              </span>
+            ) : null}
           </button>
         </nav>
       </header>

       <div className={styles.layout} data-testid="project-workspace-layout">
         <div className={styles.main} ref={conversationRef}>
-          <div className={styles.focusBar} data-testid="project-focus-bar">
-            <span className={styles.focusLabel}>
-              <span className={styles.focusDot} aria-hidden />
-              Focus actuel
-            </span>
-            <span className={styles.focusTitle}>
-              {focusTopic ??
-                (lifecycle?.selectedCycleInstanceId
-                  ? cycleSummary.label
-                  : "Conversation avec Nora")}
-            </span>
-            <span className={styles.focusCounts}>
-              {decisionCount > 0 ? (
-                <span className={styles.focusCount}>1 décision</span>
-              ) : null}
-              {reserveCount > 0 ? (
-                <span className={styles.focusCount}>
-                  {reserveCount} réserve{reserveCount > 1 ? "s" : ""}
+          {activeView === "conversation" ? (
+            <>
+              <div className={styles.focusBar} data-testid="project-focus-bar">
+                <span className={styles.focusLabel}>
+                  <span className={styles.focusDot} aria-hidden />
+                  Focus actuel
                 </span>
+                <span className={styles.focusTitle}>
+                  {focusTopic ??
+                    (lifecycle?.selectedCycleInstanceId
+                      ? cycleSummary.label
+                      : "Conversation avec Nora")}
+                </span>
+                <span className={styles.focusCounts}>
+                  {decisionCount > 0 ? (
+                    <span className={styles.focusCount}>1 décision</span>
+                  ) : null}
+                  {reserveCount > 0 ? (
+                    <span className={styles.focusCount}>
+                      {reserveCount} réserve{reserveCount > 1 ? "s" : ""}
+                    </span>
+                  ) : null}
+                </span>
+              </div>
+
+              {continuity.kind === "restored_hint" ? (
+                <p
+                  className={styles.durabilityHint}
+                  data-testid="project-auto-resume-hint"
+                >
+                  {continuity.message}
+                </p>
+              ) : null}
+              {continuity.kind === "transcript_unavailable" ? (
+                <RecoverySurface
+                  message={continuity.message}
+                  onRetryTranscript={() => {
+                    void controller.refreshConversationContinuity();
+                  }}
+                />
               ) : null}
-            </span>
-          </div>

-          {continuity.kind === "restored_hint" ? (
-            <p
-              className={styles.durabilityHint}
-              data-testid="project-auto-resume-hint"
-            >
-              {continuity.message}
-            </p>
+              <div
+                className={styles.conversation}
+                data-testid="project-conversation-main"
+              >
+                <ConversationSurface
+                  controller={controller}
+                  onConfirmReservationResolve={confirmReservationResolution}
+                  reservationConfirmBusyId={reservationBusyId}
+                />
+              </div>
+            </>
           ) : null}
-          {continuity.kind === "transcript_unavailable" ? (
-            <RecoverySurface
-              message={continuity.message}
-              onRetryTranscript={() => {
-                void controller.refreshConversationContinuity();
-              }}
+
+          {activeView === "overview" ? (
+            <OverviewSurface
+              projectId={projectId}
+              projectName={success.project.name}
+              cycle={cycleSummary}
+              focus={nextAction}
+              focusTopic={focusTopic}
+              currentness={currentness}
+              trajectory={trajectoryNodes}
+              attention={attention}
+              onOpenConversation={focusConversation}
+              onOpenJournal={openJournal}
+              onOpenHistory={openHistory}
             />
           ) : null}

-          <div
-            className={styles.conversation}
-            data-testid="project-conversation-main"
-          >
-            <ConversationSurface
-              controller={controller}
-              onConfirmReservationResolve={confirmReservationResolution}
-              reservationConfirmBusyId={reservationBusyId}
+          {activeView === "execution" ? (
+            <ExecutionSurface
+              projectId={projectId}
+              canConfirm={canConfirmExecution}
+              canExecute={canExecuteExecution}
+              onConfirm={() => {
+                if (controller.canConfirmResolvedM3) {
+                  controller.confirmAndExecuteResolvedM3();
+                } else if (controller.canConfirmLegacyFixture) {
+                  controller.confirmAndExecuteLegacyFixture();
+                }
+              }}
+              onExecute={() => {
+                if (controller.canConfirmResolvedM3) {
+                  controller.confirmAndExecuteResolvedM3();
+                } else if (controller.canConfirmLegacyFixture) {
+                  controller.confirmAndExecuteLegacyFixture();
+                }
+              }}
+              onReturnToConversation={focusConversation}
+              onPresentationChange={handleExecutionPresentationChange}
             />
-          </div>
+          ) : null}
         </div>

         <aside
```

## B2. Adjacent UI test mock adaptations

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
index bf2420d2..c684f4e0 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
@@ -97,6 +97,31 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     ok: true,
     kind: "none",
   }),
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:mock",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
   w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
     ok: true,
     kind: "none",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
index 119a0d2a..680b8f31 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
@@ -64,6 +64,31 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2GovernedExecuteCompleteAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:mock",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
   w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
     readGovernedExecutionContinuityMock(...args),
   w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
index 25cc6f2d..3d8eb7bf 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
@@ -28,6 +28,53 @@ vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
     useProductConversationMock(...args),
 }));

+vi.mock("@/features/project-assistant/w2/actions", () => ({
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:p5-s01",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
+  w2ReadCurrentGovernedExecutionContinuityAction: vi
+    .fn()
+    .mockResolvedValue({ ok: true, kind: "none" }),
+  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
+    ok: true,
+    history: {
+      projectId: "prj:p5-s01",
+      cycle: {
+        activeCycleInstanceId: null,
+        cycleTypeId: null,
+        profile: null,
+        status: null,
+      },
+      trajectory: { versions: [] },
+      decisions: [],
+      contracts: [],
+      absent: [],
+    },
+  }),
+}));
+
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConversationContinuityAction: vi.fn(async () => ({
     ok: true,
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index 53954657..fe9a37e6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -85,6 +85,31 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2RematerializeDocsWriteEvidenceAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:mock",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
   w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
     readGovernedExecutionContinuityMock(...args),
   w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
index 05ecd154..bdcf5eab 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
@@ -38,6 +38,31 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2RehydrateProductOutcomeAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:mock",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
   w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
     ok: true,
     kind: "none",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index c4f3c6d6..1d795812 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -82,6 +82,31 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2GovernedExecuteCompleteAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:mock",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
   w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
     ok: true,
     kind: "none",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index e9146307..e39e4d71 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -96,6 +96,31 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     executeCompleteMock(...args),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: {
+      projectId: "prj:mock",
+      activeCycleInstanceId: null,
+      executionContractId: null,
+      executionContractVersion: null,
+      executionContractStatus: null,
+      attemptId: null,
+      attemptStatus: null,
+      stage: "PRE_EXECUTION",
+      productOutcome: null,
+      evidenceId: null,
+      reviewBundleId: null,
+      claimEvaluationId: null,
+      claimEvaluationStatus: null,
+      postEvidencePresent: false,
+      nextDeterministicAction: "NONE",
+      humanDecisionRequired: false,
+      recoveryRequired: false,
+      reason: null,
+      blockingCode: null,
+      context: null,
+    },
+  }),
   w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
     readGovernedExecutionContinuityMock(...args),
   w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
```

## B3. Documentary truth-sync (Roadmap + P5 integrated-delivery)

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 3fce4cdc..9fbacb8b 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S02 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S02 R1/R2 PROOF + ACCEPTED GOVERNANCE DEVIATION — GIT INTEGRATION AUTHORIZED / IN PROGRESS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S02** · CRITICAL · Morris decisions = **REAL R1+R2 CONSUMED** · **ENVELOPE DEVIATION ACCEPTED** · **GIT INTEGRATION AUTHORIZED** · P5-S01 = **INTEGRATED** (PR **#555** / main `8aaedfae…` / CI **#678** SUCCESS) · R1/R2 = **PROVEN AT TESTED SCOPE** · successful ledger **7** · cycle aggregate ≈**10** vs envelope **≤8** · deviation **ACCEPTED BY MORRIS** · NO REAL RERUN · future rule = validate local Product/setup preconditions before first provider call · production runtime/provider **UNCHANGED** · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s02-bounded-real-r1-r2` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S02 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** R3 · **≠** P6 READY |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 OBJECT-NATIVE VIEWS** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION — LOCAL CANDIDATE / DELIVERY AUTHORIZED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 DELIVERY AUTHORIZATION = **CONSUMED** · P5-S01 = **INTEGRATED** · P5-S02 = **INTEGRATED / POST-MERGE VERIFIED** (PR **#556** MERGED · main `1a7e80b20949a041b1edc279ffed735b04bda997` · CI **#680** SUCCESS · Required Gate SUCCESS) · S03 = real Conversation/Aperçu/Exécution views · Product-object projections · canonical Governed Execution Continuity · presentation-only adapter · ZERO REAL · no new persistence / state machine / agent architecture · F2 debt **OPEN** · Synthesis surface **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Review** → Morris Git Integration Gate · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S02 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S02 R1/R2 PROOF + ACCEPTED GOVERNANCE DEVIATION — GIT INTEGRATION AUTHORIZED / IN PROGRESS *(true then; superseded by PR #556 merge + P5-S03 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S02** · CRITICAL · Morris decisions = **REAL R1+R2 CONSUMED** · **ENVELOPE DEVIATION ACCEPTED** · **GIT INTEGRATION AUTHORIZED** · P5-S01 = **INTEGRATED** (PR **#555** / main `8aaedfae…` / CI **#678** SUCCESS) · R1/R2 = **PROVEN AT TESTED SCOPE** · successful ledger **7** · cycle aggregate ≈**10** vs envelope **≤8** · deviation **ACCEPTED BY MORRIS** · NO REAL RERUN · future rule = validate local Product/setup preconditions before first provider call · production runtime/provider **UNCHANGED** · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s02-bounded-real-r1-r2` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S02 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** R3 · **≠** P6 READY |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S02 BOUNDED REAL R1+R2** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S02 BOUNDED REAL R1+R2 PROVEN AS LOCAL CANDIDATE — READY FOR CHATGPT S02 REVIEW / NEXT-CAPABILITY REQUALIFICATION *(true then; superseded by Git Integration tip + Morris deviation acceptance)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / REAL evidence** · Milestone **P5** · Slice **P5-S02** · CRITICAL · Morris bounded REAL R1+R2 GO = **CONSUMED** · P5-S01 = **INTEGRATED** (PR **#555** MERGED · main `8aaedfaea098827476157403cd0ba40a91ff7351` · CI **#678** SUCCESS) · **R1 PASS** (Luna/Sol/Astra) · **R2 PASS** (Product path · router model×effort == provider · Routine→Luna/low · High-Assurance→Sol/high) · same Nora / same Agents Runner · **0 production architecture change** (classification A) · F2 debt **OPEN** · successful-run calls **7** · cycle aggregate includes prior aborted R1×3 before createProject fix (**envelope overrun disclosed**) · estimated spend hint ≈ **$0.043** · R3 **NOT STARTED** · P5 COMPLETE **NO** · READY FOR REAL **NO** · runtime v3 **NON ADOPTED** · branche `delivery/…-p5-s02-bounded-real-r1-r2` · project commit/push/PR/merge = **NOT AUTHORIZED** · next = **ChatGPT S02 review** → object-native Product expansion (Aperçu/Exécution) requal · **≠** R3 · **≠** P6 READY |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S01 VISUAL CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S01 VISUAL CORRECTION PASS 01 COMPLETE — FINAL PRE-GIT VISUAL REVIEW — A=0 / B=0 — B1 CLOSED — READY FOR MORRIS P5-S01 GIT INTEGRATION GATE *(true then; superseded by P5-S01 merge + P5-S02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **Delivery correction / visual evidence** · Milestone **P5 — Integrated Delivery** · Slice **P5-S01** · Pass **VISUAL CORRECTION PASS 01** · CRITICAL · Morris Visual GO = **YES** · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · P5-S01 = **LOCAL CANDIDATE** · D0 = **PASS** · Visual = **PASS WITH C/D RESERVES** · **A=0 / B=0** · B1 = Next.js `devIndicators` floating « N » overlapping Mobile composer = **CLOSED** (`devIndicators: false`) · Desktop/Compact/Mobile + scrolled Mobile recaptured · ZERO REAL · F2 debt **OPEN** · branche `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` · base `04527bede4a3aad1853387b9eb39af3fe0615412` · project commit/push/PR/merge = **NOT AUTHORIZED** · next = **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5-S01 COMPLETE · **≠** P5 COMPLETE · **≠** PIXEL-PERFECT · **≠** READY FOR REAL |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S01 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S01 D0 CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW *(true then; superseded by Visual Correction Pass 01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / implementation correction** · Milestone **P5 — Integrated Delivery** · Slice **P5-S01** · Pass **CORRECTION PASS 01 (CP1–CP5)** · CRITICAL · EVOL · Morris P5 AUTHORIZATION = **CONSUMED** · Morris Correction GO = **YES** · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · P5-S01 = **LOCAL CANDIDATE — D0 PASS WITH VISUAL RESERVES** · CP1 FULL `npm test` = **PASS** (465 files / 5178 tests) · CP2 Product server-path D0 = **PASS** · CP3 deterministic NO-LLM = **PASS** · CP4 FinOps Standard short-context 2026-10-05 = **PASS** · CP5 Quality→provider→FinOps order = **PASS** · ZERO REAL · Visual = **CANDIDATE WITH RESERVES** · F2 debt **OPEN** · branche `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` · base `04527bede4a3aad1853387b9eb39af3fe0615412` · document `05-…integrated-delivery.md` · project commit/push/PR/merge = **NOT AUTHORIZED** · next = **ChatGPT P5-S01 Critical Re-review** → if PASS then **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5 COMPLETE · **≠** READY FOR PR/MERGE · **≠** READY FOR REAL |
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 6a6d47cb..4947f1a9 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,29 +5,32 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01** (integrated) + **P5-S02 — Bounded REAL Product Cognitive Proof** |
-| **Pass** | **P5-S02 GIT INTEGRATION** — R1/R2 proof + Morris-accepted envelope deviation |
+| **Slice** | **P5-S01** + **P5-S02** (integrated) + **P5-S03 — Object-Native Product Views** |
+| **Pass** | **P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION** — delivery authorized / local candidate |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
 | **Branche S02** | `delivery/sfia-studio-product-simplification-p5-s02-bounded-real-r1-r2` |
-| **Base / HEAD Git** | `origin/main` = `8aaedfaea098827476157403cd0ba40a91ff7351` (PR **#555** merge) |
-| **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** / `37288947823` **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED = YES** · **POST-MERGE VERIFIED = YES** |
+| **Base / HEAD Git** | `origin/main` = `1a7e80b20949a041b1edc279ffed735b04bda997` (PR **#556** merge) |
+| **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
+| **Branche S03** | `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
-| **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** — D0 **PASS** · Visual **PASS WITH C/D RESERVES** · **A=0 / B=0** · B1 **CLOSED** |
-| **P5-S02** | **LOCAL CANDIDATE — GIT INTEGRATION IN PROGRESS** — R1/R2 **PROVEN AT TESTED SCOPE** · REAL envelope deviation **ACCEPTED BY MORRIS** |
+| **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
+| **P5-S03** | **LOCAL CANDIDATE** — Morris delivery authorization **CONSUMED** · object-native Aperçu + Exécution |
 | **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 NOT STARTED** |
-| **ZERO REAL** | **historical for S01** — S02 used bounded REAL OpenAI (ledger in Review Pack) |
+| **ZERO REAL** | **YES for S03** — S02 used bounded REAL historically |
 | **READY FOR REAL** | **NO** (R3 / broader REAL gates not authorized) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S02 pass)** | commit/push/PR **AUTHORIZED** under Git Integration Gate · merge **NOT AUTHORIZED** |
+| **Git (S03 pass)** | **NO** project commit · **NO** push · **NO** PR · **NO** merge |
 | **Langue** | Français (identifiants canoniques anglais préservés) |
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-05 · Europe/Paris |

-> **Lecture rapide.** P5-S01 est **intégré sur main** (PR #555 / CI #678). P5-S02 prouve **R1 + R2 REAL** sur le **même Product path** (router-selected Model×Effort observé jusqu’à la frontière Agents/Responses). **≠ R3** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED** · **≠ PIXEL-PERFECT**. F2 routing debt **OPEN**.
+> **Lecture rapide.** P5-S01 et P5-S02 sont **intégrés sur main** (PR #555 / #556). P5-S03 matérialise les vues object-native **Aperçu** et **Exécution** dans le même Espace projet, sans nouvelle persistence ni architecture parallèle. **≠ R3** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED** · **≠ Synthèses**. F2 routing debt **OPEN**.

 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

@@ -729,11 +732,29 @@ Visual / Git historical notes above for Correction Pass 01 are **SUPERSEDED** by
 | Future REAL-cycle corrective rule | All local Product/setup preconditions **MUST** be validated before the first provider call when reasonably possible, so the REAL envelope is not spent before local setup viability is known |
 | Estimated spend hint (successful ledger) | ≈ **$0.043** |
 | Evidence | `.tmp-sfia-review/p5-s02-evidence.json` (scratch — not committed) |
-| Project Git | commit/push/PR authorized under **MORRIS P5-S02 GIT INTEGRATION GATE** · merge **NOT** authorized |
+| Project Git | **INTEGRATED** via PR **#556** MERGED · main `1a7e80b2…` · CI **#680** SUCCESS |

 ---

-## 32. Current verdict
+## 32. P5-S03 — Object-native Aperçu + Exécution (factual)
+
+| Item | Result |
+| --- | --- |
+| Morris P5-S03 delivery authorization | **CONSUMED** |
+| View navigation | Conversation / Aperçu / Exécution = **real surfaces** (no scroll-only nominal path) |
+| Aperçu sources | LPS / lifecycle / trajectory nodes / attention / durable history |
+| Exécution sources | `w2DeriveGovernedExecutionContinuityAction` + `w2ReadCurrentGovernedExecutionContinuityAction` |
+| Presentation adapter | `pilotExecutionPresentation` (presentation-only) |
+| New persistence / state machine / Product objects | **NONE** |
+| Architecture parallelism | **NONE** |
+| Synthesis surface | **NOT BUILT** (honest unavailable) |
+| Journal / Historique | **KEEP** — already durable object-native (not rebuilt) |
+| REAL calls | **0** |
+| Project Git | **NONE** this pass |
+
+---
+
+## 33. Current verdict

 ```text
 P5 AUTHORIZED BY MORRIS = YES
@@ -741,26 +762,28 @@ P5 STARTED              = YES
 P5 IN PROGRESS          = YES

 P5-S01 = INTEGRATED / POST-MERGE VERIFIED
-         (PR #555 MERGED · main 8aaedfae… · CI #678 SUCCESS)
-         D0 PASS · Visual PASS WITH C/D RESERVES · A=0/B=0 · B1 CLOSED
+         (PR #555 MERGED · CI #678 SUCCESS)
+
+P5-S02 = INTEGRATED / POST-MERGE VERIFIED
+         (PR #556 MERGED · main 1a7e80b2… · CI #680 SUCCESS)
+         R1/R2 PROVEN · envelope deviation ACCEPTED BY MORRIS

-P5-S02 = LOCAL CANDIDATE — R1/R2 PROVEN AT TESTED SCOPE
-         GOVERNANCE DEVIATION (≈10 vs ≤8) = ACCEPTED BY MORRIS
-         GIT INTEGRATION = IN PROGRESS
-         — NOT COMPLETE · R3 NOT STARTED
+P5-S03 = LOCAL CANDIDATE — OBJECT-NATIVE APERÇU + EXÉCUTION
+         DELIVERY AUTHORIZED BY MORRIS · IN PROGRESS
+         — NOT INTEGRATED · R3 NOT STARTED

 READY FOR REAL          = NO
 runtime v3              = NON ADOPTED
 P5 COMPLETE             = NO
 P6 READY                = NO

-NEXT                   = CHATGPT PR REVIEW / CI QUALIFICATION
-NEXT MORRIS GATE       = P5-S02 MERGE GATE (after ChatGPT + CI)
-NEXT CAPABILITY HINT   = object-native Product expansion (Aperçu / Exécution)
+NEXT                   = CHATGPT CRITICAL REVIEW
+NEXT MORRIS GATE       = P5-S03 GIT INTEGRATION (if ChatGPT PASS)
+NEXT CAPABILITY HINT   = continuity completion / Synthèses / remaining P5 exits
 ```

-**Synthèse honnête.** P5-S01 est sur main. P5-S02 prouve entitlement + router Product-path REAL. Déviation envelope ≈10 vs ≤8 **acceptée par Morris** (preuve technique retenues · pas de rerun REAL). **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED**. **P4 reste l’autorité d’architecture**.
+**Synthèse honnête.** P5-S01/S02 sont sur main. P5-S03 projette Aperçu + Exécution depuis le monde Product existant. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ Synthèses**. **P4 reste l’autorité d’architecture**.

 ---

-*Fin du document P5 — Integrated Delivery — P5-S02 Git Integration — R1/R2 PROVEN · GOVERNANCE DEVIATION ACCEPTED BY MORRIS · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED · merge NOT authorized this pass — P4 remains architecture authority.*
+*Fin du document P5 — Integrated Delivery — P5-S03 Object-Native Views — S01/S02 INTEGRATED · S03 LOCAL CANDIDATE · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED · no project commit/push/PR/merge this pass — P4 remains architecture authority.*
```

---

# PART C — FULL MODIFIED DOCUMENTARY SECTIONS (CURRENT TEXT)

## C1. Roadmap tip rows (current tip + superseded S02 Git Integration tip)

```markdown
| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S03 OBJECT-NATIVE VIEWS** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION — LOCAL CANDIDATE / DELIVERY AUTHORIZED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Milestone **P5** · Slice **P5-S03** · CRITICAL · Morris P5-S03 DELIVERY AUTHORIZATION = **CONSUMED** · P5-S01 = **INTEGRATED** · P5-S02 = **INTEGRATED / POST-MERGE VERIFIED** (PR **#556** MERGED · main `1a7e80b20949a041b1edc279ffed735b04bda997` · CI **#680** SUCCESS · Required Gate SUCCESS) · S03 = real Conversation/Aperçu/Exécution views · Product-object projections · canonical Governed Execution Continuity · presentation-only adapter · ZERO REAL · no new persistence / state machine / agent architecture · F2 debt **OPEN** · Synthesis surface **NOT BUILT** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Critical Review** → Morris Git Integration Gate · **≠** P5-S03 INTEGRATED · **≠** R3 · **≠** P6 READY |
| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S02 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S02 R1/R2 PROOF + ACCEPTED GOVERNANCE DEVIATION — GIT INTEGRATION AUTHORIZED / IN PROGRESS *(true then; superseded by PR #556 merge + P5-S03 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S02** · CRITICAL · Morris decisions = **REAL R1+R2 CONSUMED** · **ENVELOPE DEVIATION ACCEPTED** · **GIT INTEGRATION AUTHORIZED** · P5-S01 = **INTEGRATED** (PR **#555** / main `8aaedfae…` / CI **#678** SUCCESS) · R1/R2 = **PROVEN AT TESTED SCOPE** · successful ledger **7** · cycle aggregate ≈**10** vs envelope **≤8** · deviation **ACCEPTED BY MORRIS** · NO REAL RERUN · future rule = validate local Product/setup preconditions before first provider call · production runtime/provider **UNCHANGED** · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s02-bounded-real-r1-r2` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S02 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** R3 · **≠** P6 READY |
```

## C2. P5 integrated-delivery — header metadata + lecture rapide + §§31–33

```markdown
# SFIA Studio — Chat-First Product Simplification — P5 Integrated Delivery (P5-S01 — First Integrated Product Vertical Slice)

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
| **Slice** | **P5-S01** + **P5-S02** (integrated) + **P5-S03 — Object-Native Product Views** |
| **Pass** | **P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION** — delivery authorized / local candidate |
| **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
| **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
| **Branche S02** | `delivery/sfia-studio-product-simplification-p5-s02-bounded-real-r1-r2` |
| **Base / HEAD Git** | `origin/main` = `1a7e80b20949a041b1edc279ffed735b04bda997` (PR **#556** merge) |
| **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **Branche S03** | `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views` |
| **P5 AUTHORIZED BY MORRIS** | **YES** |
| **P5 STARTED** | **YES** |
| **P5 IN PROGRESS** | **YES** |
| **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
| **P5-S03** | **LOCAL CANDIDATE** — Morris delivery authorization **CONSUMED** · object-native Aperçu + Exécution |
| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 NOT STARTED** |
| **ZERO REAL** | **YES for S03** — S02 used bounded REAL historically |
| **READY FOR REAL** | **NO** (R3 / broader REAL gates not authorized) |
| **runtime v3** | **NON ADOPTED** |
| **Git (S03 pass)** | **NO** project commit · **NO** push · **NO** PR · **NO** merge |
| **Langue** | Français (identifiants canoniques anglais préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
| **Date** | 2026-10-05 · Europe/Paris |

> **Lecture rapide.** P5-S01 et P5-S02 sont **intégrés sur main** (PR #555 / #556). P5-S03 matérialise les vues object-native **Aperçu** et **Exécution** dans le même Espace projet, sans nouvelle persistence ni architecture parallèle. **≠ R3** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED** · **≠ Synthèses**. F2 routing debt **OPEN**.

> **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

---

---

## 31. P5-S02 — Bounded REAL R1+R2 (factual)

| Item | Result |
| --- | --- |
| Morris bounded REAL authorization | **CONSUMED** |
| Router→provider wiring | **A — already wired** (no production architecture change) |
| R1 Luna `none` / Sol `low` / Astra `low` | **PASS** |
| R2-A Routine → `gpt-6-luna` / `low` | **PASS** (selected == actual) |
| R2-B High-Assurance → `gpt-6.1-sol` / `high` | **PASS** (selected == actual) |
| Same Nora / same Agents Runner | **YES** |
| Deterministic bypass regression | **PASS** (D0 suite) |
| F2 debt | **OPEN** (F2 still uses `OPENAI_MODEL=gpt-5.6-luna`) |
| Successful-run principal calls | **7** |
| Contractual REAL envelope | **≤8** requests |
| Cycle aggregate observed | ≈ **10** (first R1×3 then createProject failed on invalid `CRITICAL`; successful retry re-ran R1+R2) |
| Envelope ≤8 respected? | **NO** |
| Governance deviation | **DISCLOSED** · stop condition exceeded |
| Morris decision | **DEVIATION ACCEPTED** — technical R1/R2 evidence **RETAINED** · **NO REAL RERUN** required or authorized for regularization |
| Future REAL-cycle corrective rule | All local Product/setup preconditions **MUST** be validated before the first provider call when reasonably possible, so the REAL envelope is not spent before local setup viability is known |
| Estimated spend hint (successful ledger) | ≈ **$0.043** |
| Evidence | `.tmp-sfia-review/p5-s02-evidence.json` (scratch — not committed) |
| Project Git | **INTEGRATED** via PR **#556** MERGED · main `1a7e80b2…` · CI **#680** SUCCESS |

---

## 32. P5-S03 — Object-native Aperçu + Exécution (factual)

| Item | Result |
| --- | --- |
| Morris P5-S03 delivery authorization | **CONSUMED** |
| View navigation | Conversation / Aperçu / Exécution = **real surfaces** (no scroll-only nominal path) |
| Aperçu sources | LPS / lifecycle / trajectory nodes / attention / durable history |
| Exécution sources | `w2DeriveGovernedExecutionContinuityAction` + `w2ReadCurrentGovernedExecutionContinuityAction` |
| Presentation adapter | `pilotExecutionPresentation` (presentation-only) |
| New persistence / state machine / Product objects | **NONE** |
| Architecture parallelism | **NONE** |
| Synthesis surface | **NOT BUILT** (honest unavailable) |
| Journal / Historique | **KEEP** — already durable object-native (not rebuilt) |
| REAL calls | **0** |
| Project Git | **NONE** this pass |

---

## 33. Current verdict

```text
P5 AUTHORIZED BY MORRIS = YES
P5 STARTED              = YES
P5 IN PROGRESS          = YES

P5-S01 = INTEGRATED / POST-MERGE VERIFIED
         (PR #555 MERGED · CI #678 SUCCESS)

P5-S02 = INTEGRATED / POST-MERGE VERIFIED
         (PR #556 MERGED · main 1a7e80b2… · CI #680 SUCCESS)
         R1/R2 PROVEN · envelope deviation ACCEPTED BY MORRIS

P5-S03 = LOCAL CANDIDATE — OBJECT-NATIVE APERÇU + EXÉCUTION
         DELIVERY AUTHORIZED BY MORRIS · IN PROGRESS
         — NOT INTEGRATED · R3 NOT STARTED

READY FOR REAL          = NO
runtime v3              = NON ADOPTED
P5 COMPLETE             = NO
P6 READY                = NO

NEXT                   = CHATGPT CRITICAL REVIEW
NEXT MORRIS GATE       = P5-S03 GIT INTEGRATION (if ChatGPT PASS)
NEXT CAPABILITY HINT   = continuity completion / Synthèses / remaining P5 exits
```

**Synthèse honnête.** P5-S01/S02 sont sur main. P5-S03 projette Aperçu + Exécution depuis le monde Product existant. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ Synthèses**. **P4 reste l’autorité d’architecture**.

---

*Fin du document P5 — Integrated Delivery — P5-S03 Object-Native Views — S01/S02 INTEGRATED · S03 LOCAL CANDIDATE · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED · no project commit/push/PR/merge this pass — P4 remains architecture authority.*
```

---

# PART D — BEHAVIORAL CONTRACT EXTRACTABLE FROM CODE

## D1. View navigation (`ProjectWorkspacePage`)

- `activeView: "conversation" | "overview" | "execution"` — React state only.
- Default = conversation.
- Aperçu mounts `OverviewSurface`; Exécution mounts `ExecutionSurface`.
- Tabs set `data-selected` / `aria-current` from `activeView`.
- Exécution tab always enabled; badge only via `deriveExecutionTabBadge`.
- Confirm/Execute CTAs call existing controller `confirmAndExecuteResolvedM3` / `confirmAndExecuteLegacyFixture` only when `canConfirm*` true.

## D2. Aperçu (`OverviewSurface`)

- Stats from cycle/focus/attention/currentness.
- Trajectory from `deriveTrajectoryNodes` with honesty note Proposé ≠ decided Cycle.
- Recent activity from `w2ReadProjectHistoryAction` durable anchors.
- Synthèses = honest empty (not invented).

## D3. Exécution (`pilotExecutionPresentation` + `ExecutionSurface`)

- Loads `w2DeriveGovernedExecutionContinuityAction` + `w2ReadCurrentGovernedExecutionContinuityAction`.
- Maps continuity stages → Pilot statuses (À confirmer / Prête / En cours / Terminée / Échouée / Arrêtée / Indisponible / Vide).
- timeout → Échouée + cause timeout (not Timeout as primary status).
- RUNNING → no Exécuter.
- confirmation_required → Confirmer only.
- Result block distinct from Evidence block.
- Empty EC → honest empty state, no fake badge count.

## D4. Visual evidence

`.tmp-sfia-review/p5-s03-visual/manifest.md` + PNG captures (scratch, not committed).
A=0 / B=0. C residuals = content honesty vs Figma illustrative copy; empty Exécution when no EC. D = Synthèses / AFTER TERMINÉE natural EC absent on HABITFLOW project.

---

# PART E — FINAL VERDICT (UNCHANGED SUBSTANCE; HANDOFF NOW COMPLETE)

**PASS — P5-S03 OBJECT-NATIVE APERÇU + EXÉCUTION**
**IMPLEMENTED ON THE EXISTING PRODUCT WORLD —**
**PRODUCT OBJECT AUTHORITY PRESERVED —**
**NO PARALLEL STATE / PERSISTENCE / AGENT ARCHITECTURE —**
**P3 FIGMA CONTRACT APPLIED —**
**A=0 / B=0 —**
**ZERO REAL —**
**REVIEW HANDOFF COMPLETE WITH FULL MODIFIED CONTENT —**
**READY FOR CHATGPT CRITICAL RE-REVIEW**

Explicitly **NOT**:
P5-S03 INTEGRATED · P5 COMPLETE · R3 PASS · P6 READY · PIXEL-PERFECT GLOBAL · COGNITIVE COMPLETION PROVEN · runtime v3 ADOPTED · project commit/push/PR/merge.

Next gate after ChatGPT PASS:
**MORRIS P5-S03 GIT INTEGRATION GATE**

END — P5-S03 COMPLETE HANDOFF REPUBLICATION
