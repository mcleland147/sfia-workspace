/**
 * C24 — deterministic fixtures for Figma page 12 visual harness.
 * Illustrative data only — never treated as LIVE proof.
 */

import type { ContractViewerModel } from "./ContractViewer";
import type { BilanTab } from "./RealizationBilan";
import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

export const ML5_PAGE12_STATES = [
  "12.01",
  "12.02",
  "12.03",
  "12.04",
  "12.05",
  "12.06",
  "12.07",
  "12.08",
  "12.09",
  "12.10",
  "12.11",
  "12.12",
  "12.13",
  "12.14",
] as const;

export type Ml5Page12State = (typeof ML5_PAGE12_STATES)[number];

const SAMPLE_CONTRACT: ContractViewerModel = {
  contractId: "tctr_visual_fixture_01",
  contractKey: "ctr_visual_maxLen",
  version: 2,
  fingerprint: "fp_visual_fixture_abcdef0123456789",
  title: "Ajouter processWidgetMaxLen",
  status: "READY",
  engagements: {
    willDo: "Implémenter la contrainte maxLen et les tests unitaires associés.",
    willNotDo: "Aucune publication distante, aucun secret, hors workspace isolé.",
    expectedResult: "Refuse les chaînes au-delà de maxLen ; tests verts déclarés.",
    pilotControl: "Oui/Non D6 requis ; STOP disponible ; lecture ≠ autorisation.",
  },
  volets: {
    mission: "Mission : contrainte maxLen sur processWidget.",
    perimeter: "Périmètre : fichier service + tests ; hors migration schema.",
    capabilitiesAuthority: "Exécuteur Cursor SDK ; capacités LIVE bornées au workspace.",
    stopConditions: "STOP demandé ≠ arrêté ; tests lancés ≠ PASS.",
    proofsSources: "Tests, diffs locaux, manifeste — déclarés ≠ vérifiés.",
    integrity: "Fingerprint fp_visual… · version 2.",
  },
  instructionText:
    "# Instruction technique intégrale\n\n1. Lire le service processWidget.\n2. Ajouter maxLen.\n3. Couvrir par tests.\n4. Ne pas pousser remote.\n\n" +
    "Lorem instruction non tronquée pour la preuve 12.14.\n".repeat(8),
  risks: ["Workspace isolé requis"],
  exclusions: ["Publication Git distante"],
};

const SAMPLE_RUBRICS: D8Rubric[] = [
  {
    key: "resume",
    title: "Résumé",
    content: "Intervention terminée avec livrables partiels.",
    coverage: "PARTIAL",
  },
  {
    key: "prevu",
    title: "Prévu",
    content: "maxLen + tests.",
    coverage: "COMPLETE",
  },
  {
    key: "realise",
    title: "Réalisé",
    content: "Fichier modifié déclaré ; tests partiellement capturés.",
    coverage: "PARTIAL",
  },
  {
    key: "evaluation",
    title: "Évaluation",
    content: "Couverture tests incomplète.",
    coverage: "PARTIAL",
  },
  {
    key: "ecarts",
    title: "Écarts",
    content: "Capture manquante ; un test déclaré non observé.",
    coverage: "PARTIAL",
  },
  {
    key: "impact",
    title: "Impact",
    content: "Impact local seulement — non publié.",
    coverage: "COMPLETE",
  },
  {
    key: "verdict",
    title: "Verdict",
    content: "PARTIAL — preuves insuffisantes pour PASS.",
    coverage: "PARTIAL",
  },
  {
    key: "recommandations",
    title: "Recommandations",
    content: "Compléter les preuves de tests avant nouvelle mission.",
    coverage: "COMPLETE",
  },
  {
    key: "sources",
    title: "Sources",
    content: "Manifeste local ; SHA distant non constaté.",
    coverage: "PARTIAL",
  },
];

const ATTEMPTS = [
  {
    attemptId: "efx_visual_007",
    status: "COMPLETED",
    terminalStatus: "PARTIAL",
    summary: "Contrôler les erreurs de validation",
  },
  {
    attemptId: "efx_visual_006",
    status: "COMPLETED",
    terminalStatus: "PASS",
    summary: "Compléter les tests de régression",
  },
  {
    attemptId: "efx_visual_005",
    status: "COMPLETED",
    terminalStatus: "PARTIAL",
    summary: "Examiner la migration de données",
  },
];

export type Ml5Page12Fixture = {
  state: Ml5Page12State;
  frame: string;
  nodeId: string;
  kind: "travail" | "resume" | "contract" | "confirm" | "execution" | "results";
  kicker: string;
  title: string;
  subtitle: string;
  draft?: string;
  busy?: boolean;
  activity?: "idle" | "preparing" | "streaming";
  messages?: Array<{ id: string; role: "user" | "assistant"; content: string }>;
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  contract?: ContractViewerModel;
  instructionExpanded?: boolean;
  attempts?: Array<{
    attemptId: string;
    status: string;
    terminalStatus: string;
    summary: string;
    ambiguous?: boolean;
  }>;
  livePanel?: { note: string; events: string[] };
  bilan?: {
    attemptId: string;
    verdict: string;
    rubrics: D8Rubric[];
    limits: string[];
    noraAnalysisMarkdown?: string | null;
    noraAnalysisKind?: string | null;
    dossier?: {
      attemptId: string;
      contractId?: string | null;
      handoffId?: string | null;
      dossierVersion?: number | null;
      gaps?: string[];
      testsDeclared?: string[];
      testsCaptured?: string[];
      filesModified?: string[];
      git?: { tipSha?: string | null; branch?: string | null; remoteSha?: string | null };
    } | null;
  };
  defaultTab?: BilanTab;
};

const BASE_BILAN = {
  attemptId: "efx_visual_007",
  verdict: "PARTIAL",
  rubrics: SAMPLE_RUBRICS,
  limits: ["Preuves tests incomplètes", "SHA distant non constaté"],
  noraAnalysisMarkdown:
    "Les travaux sont décrits, mais les preuves de tests, les contenus et la capture attendue restent incomplets.",
  noraAnalysisKind: "NORA_COGNITIVE" as const,
  dossier: {
    attemptId: "efx_visual_007",
    contractId: "tctr_visual_fixture_01",
    handoffId: "rhf_visual_fixture_01",
    dossierVersion: 1,
    gaps: ["Capture manquante", "Test déclaré non observé"],
    testsDeclared: ["unit:maxLen"],
    testsCaptured: [],
    filesModified: ["src/processWidget.ts"],
    git: {
      tipSha: "abc1234",
      branch: "qual/visual",
      remoteSha: null,
    },
  },
};

const FIXTURES: Record<Ml5Page12State, Ml5Page12Fixture> = {
  "12.01": {
    state: "12.01",
    frame: "12.01",
    nodeId: "1210:233",
    kind: "travail",
    kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
    title: "Nora prépare une intervention",
    subtitle: "Activité fonctionnelle observable — pas de raisonnement privé.",
    busy: true,
    activity: "preparing",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Prépare un contrat pour processWidgetMaxLen.",
      },
      {
        id: "m2",
        role: "assistant",
        content: "Je consulte les sources Git et Documents avant de préparer le contrat.",
      },
    ],
  },
  "12.02": {
    state: "12.02",
    frame: "12.02",
    nodeId: "1211:117",
    kind: "contract",
    kicker: "ESPACE PROJET  /  CONTRAT CURSOR",
    title: "Inspecter le contrat Cursor",
    subtitle: "Lecture seule — consulter n'autorise pas.",
    contract: SAMPLE_CONTRACT,
  },
  "12.03": {
    state: "12.03",
    frame: "12.03",
    nodeId: "1211:676",
    kind: "confirm",
    kicker: "ESPACE PROJET  /  CONFIRMATION D6",
    title: "Confirmation du lancement",
    subtitle: "Oui/Non explicite — Non = aucun dispatch.",
    contract: SAMPLE_CONTRACT,
  },
  "12.04": {
    state: "12.04",
    frame: "12.04",
    nodeId: "1211:277",
    kind: "execution",
    kicker: "ESPACE PROJET  /  EXÉCUTION",
    title: "Historique des interventions",
    subtitle: "Sélection et identité des tentatives.",
    attempts: ATTEMPTS,
  },
  "12.05": {
    state: "12.05",
    frame: "12.05",
    nodeId: "1211:424",
    kind: "contract",
    kicker: "ESPACE PROJET  /  CONTRAT D'EXÉCUTION",
    title: "Instruction et autorité",
    subtitle: "Quatre engagements et six volets d'inspection.",
    contract: { ...SAMPLE_CONTRACT, status: "READY" },
  },
  "12.06": {
    state: "12.06",
    frame: "12.06",
    nodeId: "1212:383",
    kind: "execution",
    kicker: "ESPACE PROJET  /  SUIVI DE LA RÉALISATION",
    title: "Réalisation en cours",
    subtitle: "Observer les faits LIVE — aucun faux pourcentage.",
    attempts: [
      {
        attemptId: "efx_visual_008",
        status: "DISPATCHED",
        terminalStatus: "RUNNING",
        summary: "Cursor SDK · activité LIVE",
      },
    ],
    livePanel: {
      note: "Événements factuels du run · aucun raisonnement interne.",
      events: [
        "run.started",
        "tool.shell.observed",
        "file.edited.declared",
        "awaiting.terminal",
      ],
    },
  },
  "12.07": {
    state: "12.07",
    frame: "12.07",
    nodeId: "1212:510",
    kind: "execution",
    kicker: "ESPACE PROJET  /  EXÉCUTION",
    title: "État à réconcilier",
    subtitle: "État inconnu ≠ échec certain.",
    attempts: [
      {
        attemptId: "efx_visual_009",
        status: "AMBIGUOUS",
        terminalStatus: "UNKNOWN",
        summary: "Signal interrompu — réconciliation requise",
        ambiguous: true,
      },
    ],
  },
  "12.08": {
    state: "12.08",
    frame: "12.08",
    nodeId: "1212:637",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Synthèse du dossier",
    subtitle: "Trois appréciations distinctes · quatre onglets.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "synthese",
  },
  "12.09": {
    state: "12.09",
    frame: "12.09",
    nodeId: "1212:774",
    kind: "resume",
    kicker: "ESPACE PROJET  /  REPRENDRE AVEC NORA",
    title: "Reprendre avec Nora",
    subtitle:
      "Depuis un bilan, revenir au fil avec une référence jointe, sans déclenchement automatique.",
    draft: "Je souhaite examiner les fichiers, tests et réserves du bilan.",
    messages: [
      {
        id: "m1",
        role: "assistant",
        content:
          "J'ai examiné RES-007 : livrables identifiés, mais plusieurs résultats restent non vérifiés.",
      },
    ],
    dossierAttachment: {
      attemptId: "efx_visual_007",
      contractId: "tctr_visual_fixture_01",
      dossierVersion: 1,
      verdictD8: "PARTIAL",
    },
  },
  "12.10": {
    state: "12.10",
    frame: "12.10",
    nodeId: "1212:895",
    kind: "travail",
    kicker: "SAS NORA  /  PRÉPARATION",
    title: "Nora travaille dans le sas",
    subtitle: "Préparation sans création automatique de projet.",
    busy: true,
    activity: "preparing",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Aide-moi à cadrer une intervention sur maxLen.",
      },
    ],
  },
  "12.11": {
    state: "12.11",
    frame: "12.11",
    nodeId: "1239:613",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Livrables et tests",
    subtitle: "Déclaré ≠ capturé ≠ vérifié.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "livrables",
  },
  "12.12": {
    state: "12.12",
    frame: "12.12",
    nodeId: "1239:680",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Git, pièces et handoff",
    subtitle: "SHA local déclaré ≠ SHA distant vérifié.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "git",
  },
  "12.13": {
    state: "12.13",
    frame: "12.13",
    nodeId: "1245:757",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Écarts",
    subtitle: "Preuve absente ≠ statut positif.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "ecarts",
  },
  "12.14": {
    state: "12.14",
    frame: "12.14",
    nodeId: "1250:815",
    kind: "contract",
    kicker: "ESPACE PROJET  /  INSTRUCTION INTÉGRALE",
    title: "Contrat Cursor — Instruction intégrale",
    subtitle: "Instruction technique lisible et non tronquée.",
    contract: SAMPLE_CONTRACT,
    instructionExpanded: true,
  },
};

export function parseMl5Page12Fixture(raw: string | undefined): Ml5Page12Fixture | null {
  const key = (raw || "").trim() as Ml5Page12State;
  if (!ML5_PAGE12_STATES.includes(key)) return null;
  return FIXTURES[key];
}
