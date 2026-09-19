/**
 * CORR-PROOF-10 — deterministic Options / Recommendation for a Proposal-backed
 * decision subject (not the generic W2 ProjectTrajectory three-way).
 *
 * Labels and intents are derived from sealed Proposal fields — never from a
 * hardcoded dogfood path or docs_write special-case.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";
import type {
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";
import type { SealedProposalExecutionBasis } from "./proposalSubjectIntegrity";

export const PROPOSAL_SUBJECT_PURSUE_REF =
  "opt:proposal-subject:pursue" as const;
export const PROPOSAL_SUBJECT_AMEND_REF =
  "opt:proposal-subject:amend" as const;
export const PROPOSAL_SUBJECT_REFUSE_REF =
  "opt:proposal-subject:refuse" as const;

export const PROPOSAL_SUBJECT_OPTION_REFS = [
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
] as const;

function step(
  order: number,
  slug: string,
  label: string,
  extra?: Partial<TrajectoryStep>,
): TrajectoryStep {
  return {
    stepId: `stp:${slug}`,
    order,
    label,
    state: "pending",
    ...extra,
  };
}

function subjectSummary(sealed: SealedProposalExecutionBasis): string {
  const path = sealed.targetPath == null ? null : sealed.targetPath.trim() || null;
  const fileName = sealed.artifactFileName?.trim() || null;
  const writeMode = sealed.artifactWriteMode;
  const op = sealed.requestedOperation.trim() || null;
  const parts = [
    sealed.objective.trim(),
    path ? `cible ${path}` : null,
    fileName && !path ? `fichier ${fileName}` : null,
    writeMode ? `mode ${writeMode}` : null,
    op ? `effet ${op}` : null,
  ].filter((p): p is string => Boolean(p));
  return parts.join(" · ");
}

function pursueSteps(sealed: SealedProposalExecutionBasis): TrajectoryStep[] {
  const summary = subjectSummary(sealed);
  return [
    step(1, "w2-ps-review", `Revoir le sujet proposé — ${summary}`),
    step(2, "w2-ps-decide", "Décision humaine explicite sur ce sujet", {
      dependencies: ["stp:w2-ps-review"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à la Proposal"],
    }),
    step(3, "w2-ps-prepare", "Préparer l'exécution bornée si autorisée", {
      dependencies: ["stp:w2-ps-decide"],
    }),
  ];
}

function amendSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-ps-amend", "Amender objectif, chemin ou contraintes du sujet"),
    step(2, "w2-ps-repropose", "Réinstruire les options sur le sujet amendé", {
      dependencies: ["stp:w2-ps-amend"],
      gate: "human_decision",
      exitCriteria: ["Nouvelle instruction d'options requise"],
    }),
  ];
}

function refuseSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-ps-refuse", "Refuser le sujet proposé — aucune exécution"),
    step(2, "w2-ps-close", "Clôturer sans Promotion ProjectTrajectory", {
      dependencies: ["stp:w2-ps-refuse"],
    }),
  ];
}

export type ProposalSubjectOptionInputs = {
  readonly sealed: SealedProposalExecutionBasis;
  readonly proposalId: string;
};

/**
 * Three subject-scoped options derived from the sealed Proposal.
 * Never the generic governed/bounded/clarify trajectory trio.
 */
export function deriveProposalSubjectOptions(
  inputs: ProposalSubjectOptionInputs,
): TrajectoryOptionDto[] {
  const { sealed, proposalId } = inputs;
  const summary = subjectSummary(sealed);
  const reservations = [...sealed.reservations];
  const pathNote = sealed.targetPath
    ? `Chemin scellé: ${sealed.targetPath}`
    : "Aucun targetPath scellé";
  const fileNote = sealed.artifactFileName
    ? `Filename: ${sealed.artifactFileName}`
    : "Filename: (dérivé du targetPath si présent)";
  const writeNote =
    sealed.artifactWriteMode === "CREATE"
      ? "Effet fichier: CREATE (cible absente)"
      : sealed.artifactWriteMode === "UPDATE"
        ? "Effet fichier: UPDATE — Evidence Artifact durable exacte pour ce Project/target"
        : sealed.artifactWriteMode === "ASK"
          ? "Effet fichier: ASK — ambiguïté d'existence/intention ; Proposal non exécutable"
          : "Effet fichier: non résolu";
  const workspaceNotes = [
    sealed.projectWorkspaceRoot
      ? `Workspace projet: ${sealed.projectWorkspaceRoot}/`
      : null,
    sealed.cycleWorkspaceRoot
      ? `Workspace cycle: ${sealed.cycleWorkspaceRoot}/`
      : null,
  ].filter((n): n is string => Boolean(n));
  const opNote = `Opération scellée: ${sealed.requestedOperation}`;
  const automaticDocsWrite =
    sealed.intentKind === "docs_write" &&
    Boolean(
      sealed.projectWorkspaceRoot?.startsWith("projects/") ||
        sealed.targetPath?.startsWith("projects/"),
    );
  const askBlocksPursue =
    sealed.artifactWriteMode === "ASK" ||
    (automaticDocsWrite && sealed.artifactWriteMode == null);

  return [
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      label: "Poursuivre le sujet proposé",
      intent: askBlocksPursue
        ? `Sujet ${proposalId} non exécutable — effet fichier ASK. ${pathNote}. ${fileNote}. ${writeNote}.`
        : `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${fileNote}. ${writeNote}. ${opNote}.`,
      impacts: [
        "HumanDecision liée à cette Proposal",
        "DecisionBasis conserve targetPath / requestedOperation / artifactWriteMode scellés",
        "Pas de promotion ProjectTrajectory automatique",
        ...workspaceNotes,
        writeNote,
        ...(askBlocksPursue
          ? ["PREPARE / exécution fermés tant que ASK"]
          : []),
      ],
      reservations: askBlocksPursue
        ? ["ARTIFACT_WRITE_MODE_ASK", ...reservations]
        : reservations,
      steps: pursueSteps(sealed),
    },
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_AMEND_REF,
      label: "Amender le sujet avant d'engager",
      intent:
        "Modifier objectif, chemin ou contrainte du sujet, puis réinstruire — sans exécution.",
      impacts: [
        "Aucune préparation d'exécution à ce stade",
        "Réinstruction requise après amendement",
      ],
      reservations,
      steps: amendSteps(),
    },
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      label: "Ne pas poursuivre / refuser",
      intent:
        "Refuser le sujet proposé. Aucune exécution. Aucune promotion de trajectoire Project.",
      impacts: [
        "Proposal refusée",
        "Aucune ExecutionContract",
        "ProjectTrajectory inchangée",
      ],
      reservations,
      steps: refuseSteps(),
    },
  ];
}

export function deriveProposalSubjectRecommendation(
  inputs: ProposalSubjectOptionInputs,
): TrajectoryRecommendationDto {
  const { sealed, proposalId } = inputs;
  const summary = subjectSummary(sealed);

  if (
    sealed.reservations.length > 0 ||
    sealed.artifactWriteMode === "ASK" ||
    (sealed.intentKind === "docs_write" &&
      (sealed.projectWorkspaceRoot?.startsWith("projects/") ||
        sealed.targetPath?.startsWith("projects/")) &&
      sealed.artifactWriteMode == null)
  ) {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
      rationale:
        sealed.artifactWriteMode === "ASK" ||
        sealed.artifactWriteMode == null
          ? `Effet fichier ASK/non résolu sur la Proposal ${proposalId} — clarifier CREATE ou UPDATE (Evidence durable requise pour UPDATE) avant de poursuivre « ${summary} ».`
          : `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: null,
      ckcProvenance: null,
    };
  }

  return {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    rationale: `Sujet Proposal ${proposalId} prêt pour arbitrage Pilote — poursuivre « ${summary} » sous DecisionBasis scellée (≠ HumanDecision).`,
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: null,
    ckcProvenance: null,
  };
}

export function isProposalSubjectOptionRef(optionRef: string): boolean {
  return (PROPOSAL_SUBJECT_OPTION_REFS as readonly string[]).includes(optionRef);
}
