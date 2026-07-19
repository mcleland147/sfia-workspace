/**
 * Fixtures Increment A — vertical slice POC.
 * Données de démonstration uniquement. Aucun secret, aucune PII réelle, aucun live.
 */

export const vsFixture = {
  demoLabel: "Données de démonstration — état simulé / fixture",
  noLiveLabel: "Aucune exécution réelle · aucun GPT live · aucun Cursor live · aucune écriture Git distante",
  requestId: "req-vs-poc-001",
  correlationId: "corr-vs-poc-001",
  contractId: "ctr-vs-poc-001",
  contractHash: "sha256:fixture9f3c2a7b1e8d0456",
  branch: "delivery/sfia-studio-poc-increment-a",
  head: "e7502bf2f1791cc4b9639cc1949006d888931f1c",
  headInvalidated: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  allowlist: ["sandbox/vs-poc/output.md"],
  authority: "Morris (L0)",
  timezone: "Europe/Paris",
  timestamp: "2026-07-19T23:16:00+02:00",
  sourceStatus: "dérivé Studio (fixture)",
  gptCalls: {
    qualification: 1,
    analysis: 0,
    ceiling: "À définir",
    noRetry: "Aucun retry automatique",
  },
  request: {
    title: "Preuve Markdown sandbox (vertical slice POC)",
    summary:
      "Créer un fichier Markdown de preuve dans la sandbox autorisée pour démontrer le parcours gouverné bout-en-bout.",
  },
  qualification: {
    cycle: "Conception fonctionnelle — preuve BeB",
    profile: "Standard",
    allowlist: ["sandbox/vs-poc/output.md"],
    stops: ["Hors allowlist", "GO invalide", "STOP Morris"],
    hashPreview: "sha256:fixture9f3c2a7b1e8d0456",
    source: "GPT (candidat fixture)",
  },
  report: {
    status: "terminé (fixture)",
    filesTouched: ["sandbox/vs-poc/output.md"],
    remoteWrites: 0,
    reserves: ["Exécution mockée — pas de Cursor réel"],
    markdownPreview:
      "# Preuve vertical slice\n\nFichier Markdown sandbox (fixture).\n",
  },
  verdict: {
    label: "Candidat GPT",
    proven: ["Fichier Markdown mock présent dans allowlist"],
    notProven: ["Exécution Cursor réelle", "Intégration harness"],
    gaps: ["Adaptateur Studio↔harness absent (Incr. B)"],
    risks: ["Confusion live / fixture si non étiqueté"],
    reserves: ["Plafond GPT numérique À définir"],
    morrisRequired: ["Décision finale humaine", "Aucun claim MVP"],
  },
  summary: {
    finalStatus: "clôturé (fixture slice-only)",
    decision: "Accepter et clôturer (mock)",
    markdownFile: "sandbox/vs-poc/output.md",
    reportRef: "CursorExecutionReport#fixture-001",
    proofRef: "ReviewPackReference#fixture-001",
    gptCounter: "1 / À définir (qualification) · 0 / À définir (analyse)",
    reserves: [
      "Incrément A uniquement",
      "Pas d’adaptateur",
      "Pas de live",
      "Pas de claim MVP / production-ready",
    ],
  },
  events: [
    {
      eventId: "evt-001",
      type: "request_created",
      at: "2026-07-19T23:10:00+02:00",
    },
    {
      eventId: "evt-002",
      type: "qualification_fixture",
      at: "2026-07-19T23:11:00+02:00",
    },
    {
      eventId: "evt-003",
      type: "gate_ready",
      at: "2026-07-19T23:12:00+02:00",
    },
  ],
} as const;

export type VsFixture = typeof vsFixture;
