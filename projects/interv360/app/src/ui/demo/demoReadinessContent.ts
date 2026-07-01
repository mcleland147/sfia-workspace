export interface DemoReadinessCriterion {
  id: string;
  label: string;
  status: "ready";
}

export interface DemoPresentationChecklistItem {
  id: string;
  label: string;
}

export interface DemoCapabilityItem {
  id: string;
  label: string;
  category: "demonstrated" | "fictitious" | "out-of-scope";
}

export const DEMO_READINESS_CRITERIA: DemoReadinessCriterion[] = [
  { id: "seed-data", label: "Données fictives chargées", status: "ready" },
  { id: "multi-requests", label: "Multi-demandes disponibles", status: "ready" },
  { id: "filters-search", label: "Recherche et filtres disponibles", status: "ready" },
  { id: "guided-scenario", label: "Scénario guidé disponible", status: "ready" },
  { id: "nominal-workflow", label: "Workflow nominal démontrable", status: "ready" },
  { id: "reset", label: "Reset disponible", status: "ready" },
];

export const DEMO_PRESENTATION_CHECKLIST: DemoPresentationChecklistItem[] = [
  { id: "launch", label: "Lancer la démo (npm run dev)" },
  { id: "verify-requests", label: "Vérifier les 3 demandes fictives" },
  { id: "select-default", label: "Sélectionner SAV-DEMO-001" },
  { id: "follow-scenario", label: "Suivre le scénario guidé" },
  { id: "run-transition", label: "Exécuter une transition workflow" },
  { id: "check-journal", label: "Vérifier le journal local" },
  { id: "reset-demo", label: "Réinitialiser la démo" },
];

export const DEMO_DELIVERED_CAPABILITIES: DemoCapabilityItem[] = [
  { id: "multi", label: "Multi-demandes fictives", category: "demonstrated" },
  { id: "workflow", label: "Workflow nominal STAT-01 → STAT-06", category: "demonstrated" },
  { id: "journal", label: "Journal local filtré par demande", category: "demonstrated" },
  { id: "reset", label: "Reset global et reset scénario", category: "demonstrated" },
  { id: "filters", label: "Filtres locaux par statut", category: "demonstrated" },
  { id: "search", label: "Recherche locale en mémoire", category: "demonstrated" },
  { id: "priority", label: "Priorités et criticités fictives", category: "fictitious" },
  { id: "scenario", label: "Scénario guidé de présentation", category: "demonstrated" },
  { id: "backend", label: "Backend / API / CRM", category: "out-of-scope" },
  { id: "auth", label: "Authentification multi-utilisateur", category: "out-of-scope" },
  { id: "production", label: "Données réelles et production", category: "out-of-scope" },
];

export const DEMO_ASSUMED_LIMITATIONS: string[] = [
  "Données fictives uniquement",
  "Fonctionnement local (localStorage)",
  "Pas de backend",
  "Pas d'API",
  "Pas de CRM",
  "Pas d'utilisateurs réels",
  "Pas de production",
];

export const DEMO_SCOPE_LABELS: Record<
  DemoCapabilityItem["category"],
  string
> = {
  demonstrated: "Démontré",
  fictitious: "Fictif / local",
  "out-of-scope": "Hors périmètre",
};
