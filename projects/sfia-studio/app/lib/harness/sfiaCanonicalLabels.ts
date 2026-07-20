/**
 * Display labels for Increment C qualification — must stay aligned with
 * harness/src/types/qualificationCandidate.ts (single authority for enums).
 * Studio mirrors labels only; it does not redefine allowed cycle/block ids.
 */

export const SFIA_CYCLE_LABELS: Record<string, string> = {
  cadrage: "Cadrage",
  "conception-fonctionnelle": "Conception fonctionnelle",
  "architecture-fonctionnelle": "Architecture fonctionnelle",
  "ux-ui": "UX/UI",
  "backlog-user-stories": "Backlog / user stories",
  "architecture-technique": "Architecture technique",
  "integration-devops": "Intégration / DevOps",
  "delivery-implementation": "Delivery / implémentation",
  "qa-validation": "QA / validation",
  "securite-rssi": "Sécurité / RSSI",
  "deploiement-release": "Déploiement / release",
  "observabilite-run-readiness": "Observabilité / RUN readiness",
  "pr-readiness": "PR readiness",
  "post-merge": "Post-merge",
  "capitalisation-rex": "Capitalisation / REX",
};

export const SFIA_BLOCK_LABELS: Record<string, string> = {
  finops: "FinOps",
  greenops: "GreenOps",
  rgpd: "RGPD",
  accessibilite: "Accessibilité",
  performance: "Performance",
  "ux-ui-figma": "UX/UI + Figma",
  securite: "Sécurité",
  devops: "DevOps",
  "deploiement-release": "Déploiement / release",
  "observabilite-run-readiness": "Observabilité / RUN readiness",
  "capitalisation-rex": "Capitalisation / REX",
};

export function formatSfiaCycle(id: string | undefined): string {
  if (!id) return "—";
  const label = SFIA_CYCLE_LABELS[id];
  return label ? `${label} (${id})` : id;
}

export function formatSfiaBlocks(ids: string[] | undefined): string {
  if (!ids?.length) return "—";
  return ids
    .map((id) => {
      const label = SFIA_BLOCK_LABELS[id];
      return label ? `${label} (${id})` : id;
    })
    .join(", ");
}
