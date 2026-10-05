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
    const evidenceStatus = projection.context?.evidence
      ? projection.context.evidence.status
      : null;
    items.push({
      id: projection.evidenceId,
      label: "Preuve d’exécution associée",
      stateLabel: evidenceStatus === "verified" ? "Vérifiée" : "Disponible",
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
  /**
   * Presentation-only busy/disable. Eligibility itself is derived from durable
   * continuity / inspection — never from Conversation process-local F3 state.
   */
  readonly actionsBusy?: boolean;
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
    (pre?.contract.effectConfirmationRequired === true &&
      pre.contract.status !== "confirmed");

  const confirmationSatisfied =
    pre?.contract.status === "confirmed" ||
    projection.executionContractStatus === "confirmed" ||
    projection.executionContractStatus === "validated";

  /** Durable inspection — never Conversation F3 state. */
  const inspectionSufficient =
    pre?.inspection.inspectionSufficient === true ||
    // When only continuity projection is available post-confirm, allow CTA
    // presentation; final authority remains server-side on click.
    (pre == null && Boolean(projection.executionContractId));

  const busy = input.actionsBusy === true;
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
    const durableActionable = Boolean(
      (pre?.contract.executionContractId || projection.executionContractId) &&
        inspectionSufficient,
    );
    const cta: PilotExecutionCta = needsConfirm
      ? {
          kind: "confirm",
          label: "Confirmer",
          enabled: durableActionable && !busy,
        }
      : {
          kind: "execute",
          label: "Exécuter",
          enabled: durableActionable && !needsConfirm && !busy,
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
      attentionNote: !inspectionSufficient
        ? "Inspection insuffisante — actualisez le contrat avant d’agir."
        : needsConfirm
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
