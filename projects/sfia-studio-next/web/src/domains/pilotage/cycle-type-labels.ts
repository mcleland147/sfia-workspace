/**
 * Client-safe cycle type display labels — no fs/crypto.
 * Keep in sync with CYCLE_TYPES in cki-resolve.ts.
 */

export const CYCLE_TYPE_LABELS = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
} as const;

export type CycleTypeLabelKey = keyof typeof CYCLE_TYPE_LABELS;

export function isCycleTypeLabelKey(value: string): value is CycleTypeLabelKey {
  return Object.prototype.hasOwnProperty.call(CYCLE_TYPE_LABELS, value);
}
