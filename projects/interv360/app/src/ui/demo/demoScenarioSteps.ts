export interface DemoScenarioStep {
  id: string;
  title: string;
  summary: string;
  help: string;
}

export const DEMO_SCENARIO_STEPS: DemoScenarioStep[] = [
  {
    id: "select-request",
    title: "Sélectionner une demande fictive",
    summary: "Choisir une demande dans la liste pour activer le détail et le workflow.",
    help:
      "Cette zone montre plusieurs demandes locales fictives. La sélection pilote le reste de la démo sans backend.",
  },
  {
    id: "observe-status",
    title: "Observer le statut et les indicateurs",
    summary: "Consulter le statut courant, la priorité et la criticité fictifs.",
    help:
      "Les badges et la fiche détail restent inventés. Ils servent à rendre la démo plus crédible visuellement.",
  },
  {
    id: "filter-search",
    title: "Filtrer ou rechercher une demande",
    summary: "Utiliser les filtres locaux et la recherche en mémoire.",
    help:
      "Filtres et recherche sont locaux uniquement. Aucune API ni base serveur n'est sollicitée.",
  },
  {
    id: "workflow-transition",
    title: "Exécuter une transition workflow",
    summary: "Déclencher l'action contrôlée visible selon le statut nominal.",
    help:
      "Le workflow reste limité au parcours STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06.",
  },
  {
    id: "check-journal",
    title: "Vérifier le journal local",
    summary: "Contrôler les événements fictifs enregistrés pour la demande active.",
    help:
      "Le journal est stocké localement et filtré par demande sélectionnée.",
  },
  {
    id: "reset-demo",
    title: "Réinitialiser la démo",
    summary: "Revenir à l'état seed, filtres, recherche et scénario initial.",
    help:
      "Le reset global restaure les données fictives, la sélection par défaut et l'étape 1 du scénario guidé.",
  },
];

export const INITIAL_SCENARIO_STEP_INDEX = 0;

export function getScenarioStepCount(): number {
  return DEMO_SCENARIO_STEPS.length;
}
