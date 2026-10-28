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
import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import {
  presentPilotContract,
  type PilotContractPresentation,
} from "./pilotContractPresentation";

/** One fact row rendered from canonical disclosure for Pilot examination. */
export type InspectionFactRow = {
  readonly factId: string;
  readonly label: string;
  readonly value: string;
};

function formatList(values: readonly string[] | null | undefined): string | null {
  if (!values || values.length === 0) return null;
  return values.join(" · ");
}

/**
 * Map required fact IDs → display rows from the allowlisted disclosure only.
 * Does not invent values. Missing required facts are listed separately — the
 * UI must refuse attestation when any required fact cannot be rendered.
 */
export function buildInspectionFactRowsFromDisclosure(input: {
  readonly disclosure: ExecutionContractInspectionDisclosure;
  readonly requiredInspectedFacts: readonly string[];
}): {
  readonly rows: readonly InspectionFactRow[];
  readonly missingRequired: readonly string[];
  readonly presentedFactIds: readonly string[];
} {
  const d = input.disclosure;
  const valueByFact = new Map<string, { label: string; value: string }>();

  const put = (factId: string, label: string, value: string | null | undefined) => {
    if (value == null) return;
    const trimmed = String(value).trim();
    if (!trimmed) return;
    valueByFact.set(factId, { label, value: trimmed });
  };

  put("action", "Action", d.action);
  put("target", "Cible technique", d.technicalTarget);
  put("scope", "Portée", d.scope);
  put("requiredAuthority", "Autorité requise", d.requiredAuthority);
  put(
    "requiredCapabilities",
    "Capacités requises",
    formatList(d.requiredCapabilities) ?? "(aucune)",
  );
  put(
    "constraints",
    "Contraintes",
    formatList(d.constraints) ?? "(aucune)",
  );
  put(
    "stopConditions",
    "Conditions d’arrêt",
    formatList(d.stopConditions) ?? "(aucune)",
  );
  put("reversibility", "Réversibilité", d.reversibility);
  put(
    "evidenceRequirements",
    "Preuves exigées",
    formatList(d.evidenceRequirements) ?? "(aucune)",
  );
  put(
    "semanticFingerprint",
    "Empreinte sémantique",
    d.semanticFingerprint,
  );
  put(
    "inputs.targetRepositoryRef",
    "Dépôt cible",
    d.targetRepositoryRef,
  );
  put("inputs.targetPath", "Chemin cible", d.targetPath);
  put("inputs.scopeIn", "Périmètre inclus", formatList(d.scopeIn));
  put("inputs.scopeOut", "Périmètre exclu", formatList(d.scopeOut));
  if (d.createOrModify !== null && d.createOrModify !== undefined) {
    put(
      "inputs.createOrModify",
      "Création / modification",
      d.createOrModify ? "oui" : "non",
    );
  }
  if (d.noDelete !== null && d.noDelete !== undefined) {
    put("inputs.noDelete", "Sans suppression", d.noDelete ? "oui" : "non");
  }
  if (d.repositoryMutationDeclared != null) {
    const mutationValue =
      d.repositoryMutationDeclared === "write"
        ? "Écriture déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
        : d.repositoryMutationDeclared === "read"
          ? "Lecture seule déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
          : d.repositoryMutationDeclared === "none"
            ? "Aucune mutation déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
            : "Opération inconnue déclarée — non promue automatiquement ; soumise aux contrôles du contrat.";
    put(
      "inputs.repositoryMutationDeclared",
      "Opération déclarée sur le dépôt",
      mutationValue,
    );
  }
  put(
    "inputs.contentRequirements",
    "Exigences de contenu",
    formatList(d.contentRequirements),
  );
  put(
    "inputs.validationExpectations",
    "Attentes de validation",
    formatList(d.validationExpectations),
  );
  put("expectedOutputs", "Sorties attendues", formatList(d.expectedOutputs));
  if (d.sourceGrounding) {
    put(
      "inputs.sourceGrounding",
      "Ancrage des sources",
      JSON.stringify(d.sourceGrounding),
    );
  }
  if (d.acceptanceCriteria && d.acceptanceCriteria.length > 0) {
    put(
      "inputs.acceptanceCriteria",
      "Critères d’acceptation",
      d.acceptanceCriteria
        .map((c) => `${c.criterionId}: ${c.statement} (${c.kind})`)
        .join(" · "),
    );
  }
  if (d.validationPlan) {
    put(
      "inputs.validationPlan",
      "Plan de validation",
      formatList(d.validationPlan),
    );
  }
  if (d.reportRequirements) {
    put(
      "inputs.reportRequirements",
      "Exigences de rapport",
      formatList(d.reportRequirements),
    );
  }

  const rows: InspectionFactRow[] = [];
  const missingRequired: string[] = [];
  for (const factId of input.requiredInspectedFacts) {
    const found = valueByFact.get(factId);
    if (!found) {
      missingRequired.push(factId);
      continue;
    }
    rows.push({ factId, label: found.label, value: found.value });
  }

  return {
    rows,
    missingRequired,
    presentedFactIds: rows.map((r) => r.factId),
  };
}

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
  | { readonly kind: "inspect"; readonly label: string; readonly enabled: boolean }
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
  pre: Extract<
    CurrentGovernedExecutionContinuityResult,
    { ok: true; kind: "active" }
  > | null,
  _contractPresentation: PilotContractPresentation | null,
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
  if (items.length > 0) {
    return {
      items,
      total,
      collapsed: total > WORK_PREVIEW_LIMIT,
    };
  }

  // Honest contract-derived work rows — never invent a generic placeholder.
  // Prefer durable facts (objective / path / repo). Do not use presentation
  // titles that can be generic fallbacks for technical action tokens.
  const derived: PilotExecutionWorkItem[] = [];
  const objective =
    projection?.context?.executionContract?.objective?.trim() ||
    (typeof pre?.contract.inspectionDisclosure?.objective === "string"
      ? pre.contract.inspectionDisclosure.objective.trim()
      : null) ||
    null;
  const targetPath =
    pre?.contract.inspectionDisclosure?.targetPath?.trim() || null;
  const repoRef =
    pre?.contract.inspectionDisclosure?.targetRepositoryRef?.trim() || null;
  const scopeNarrative =
    pre?.contract.scope && !pre.contract.scope.startsWith("studio.")
      ? pre.contract.scope.trim()
      : null;

  if (objective) {
    derived.push({
      id: "contract-objective",
      label: objective,
      stateLabel: terminal ? "Terminé" : "Prévu",
    });
  }
  if (targetPath) {
    derived.push({
      id: "contract-destination",
      label: `Destination : ${targetPath}`,
      stateLabel: terminal ? "Terminé" : "Prévu",
    });
  }
  if (repoRef) {
    derived.push({
      id: "contract-repository",
      label: `Dépôt : ${repoRef}`,
      stateLabel: terminal ? "Terminé" : "Prévu",
    });
  }
  if (scopeNarrative && scopeNarrative !== objective) {
    derived.push({
      id: "contract-scope",
      label: `Périmètre : ${scopeNarrative}`,
      stateLabel: terminal ? "Terminé" : "Prévu",
    });
  }

  if (derived.length > 0) {
    return {
      items: derived.slice(0, WORK_PREVIEW_LIMIT),
      total: derived.length,
      collapsed: derived.length > WORK_PREVIEW_LIMIT,
    };
  }

  if (projection?.context?.executionContract || pre) {
    return {
      items: [
        {
          id: "contract-details-unavailable",
          label: terminal
            ? "Détail du travail exécuté indisponible dans le contrat"
            : "Détail du travail prévu indisponible dans le contrat",
          stateLabel: terminal ? "Terminé" : "Incomplet",
        },
      ],
      total: 1,
      collapsed: false,
    };
  }

  return {
    items: [],
    total: 0,
    collapsed: false,
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
  const preContinuity = input.preExecutionContinuity;
  const pre =
    preContinuity &&
    preContinuity.ok &&
    preContinuity.kind === "active"
      ? preContinuity
      : null;
  /** Fail / none / null — never treat as actionable pre-execution continuity. */
  const preContinuityBlocked = pre == null;

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

  /**
   * Durable inspection only — never Conversation F3, never projection EC id alone.
   * R1: executionContractId on the derive projection does not establish admissibility.
   */
  const inspectionSufficient = pre?.inspection.inspectionSufficient === true;

  const identityAligned =
    pre == null ||
    !projection.executionContractId ||
    (pre.contract.executionContractId === projection.executionContractId &&
      (projection.executionContractVersion == null ||
        pre.contract.version === projection.executionContractVersion));

  const inspectionAlignedWithContract =
    !inspectionSufficient ||
    (pre != null &&
      pre.inspection.executionContractId === pre.contract.executionContractId &&
      (pre.inspection.attestedVersion == null ||
        pre.inspection.attestedVersion === pre.contract.version) &&
      (pre.inspection.semanticFingerprint == null ||
        pre.inspection.semanticFingerprint === "" ||
        pre.contract.semanticFingerprint == null ||
        pre.contract.semanticFingerprint === "" ||
        pre.inspection.semanticFingerprint === pre.contract.semanticFingerprint) &&
      pre.inspection.reinspectionRequired !== true);

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

    const work = buildWorkItems(projection, false, pre, contractPresentation);
    const needsConfirm = confirmationRequired && !confirmationSatisfied;
    const status: PilotExecutionStatus = needsConfirm ? "a_confirmer" : "prete";

    const preActiveVerified = pre != null && identityAligned;
    // D-P6-SHE-01 — same UX STRUCTURAL/NON_STRUCTURAL: Exécuter is the primary
    // gesture. Attestation may be carried by Exécuter (no separate Attester CTA
    // required). Stale attestation after material change still forces re-examine.
    const sheExecuteAdmissible =
      preActiveVerified && inspectionAlignedWithContract;
    const durableActionable = sheExecuteAdmissible;

    let cta: PilotExecutionCta;
    let attentionNote: string | null;

    if (preContinuityBlocked || !identityAligned) {
      cta = { kind: "none" };
      attentionNote =
        preContinuity != null && !preContinuity.ok
          ? `Continuité pré-exécution refusée (${preContinuity.code}) — aucune confirmation ni exécution.`
          : preContinuity != null &&
              preContinuity.ok &&
              preContinuity.kind === "none"
            ? "Aucun contrat courant vérifié — aucune confirmation ni exécution."
            : !identityAligned
              ? "Identité contractuelle incohérente entre projection et continuité — actions refusées."
              : "Continuité pré-exécution indisponible — un identifiant de contrat seul n’autorise aucune action.";
    } else if (inspectionSufficient && !inspectionAlignedWithContract) {
      cta = {
        kind: "inspect",
        label: "Réexaminer le contrat",
        enabled: !busy,
      };
      attentionNote =
        "Version ou empreinte modifiée — réexamen requis avant Exécuter.";
    } else {
      cta = {
        kind: "execute",
        label: "Exécuter",
        enabled: sheExecuteAdmissible && !busy,
      };
      attentionNote = inspectionSufficient
        ? "Exécuter consomme l'autorité applicable pour ce contrat inspecté (HD/Confirm internes si requis) — aucun clic humain additionnel."
        : "Consultez le détail contractuel, puis Exécuter atteste les faits présentés et consomme l'autorité — aucun bouton Attester séparé obligatoire. Préparer ≠ autoriser ≠ exécuter.";
    }

    return {
      ...emptyBase,
      status,
      statusLabel: statusLabelFor(status),
      tone: toneFor(status),
      title,
      subtitle: needsConfirm
        ? "Confirmation requise avant tout effet."
        : durableActionable
          ? "Action préparée · prête à être lancée"
          : "Action préparée — inspection ou continuité requise.",
      stateDetail: needsConfirm ? "En attente de confirmation" : "Action préparée",
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      attentionNote,
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
    const work = buildWorkItems(projection, false, pre, contractPresentation);
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
    const work = buildWorkItems(
      projection,
      terminalMap.status === "terminee",
      pre,
      contractPresentation,
    );
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
  // Completed execution with a verified result still warrants Exécution attention
  // (P3 Workspace 46:2 — badge « 1 » alongside Synthèse disponible).
  if (presentation.status === "terminee" && presentation.resultVerified) {
    return 1;
  }
  return null;
}
