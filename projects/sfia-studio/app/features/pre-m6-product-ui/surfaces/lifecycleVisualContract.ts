/**
 * Visual contract — LifecycleSurface (pre-UI code).
 * Sources: review-v5 Penpot evidence (NOT Product SoT).
 * Desktop 1440x900 · Responsive drawer ≤1024 (evidence 1100x908).
 *
 * Layout (contextual stack in LPS drawer, above LPS/Trajectory):
 * - Eyebrow: CYCLE (neutral)
 * - Status badge (text + tone, not color-only): En cours | Proposé | Bloqué | Finalisation | Terminé
 * - Recommendation block (optional): label "Recommandation Nora" + statement + currentness
 * - Distinction line: Recommendation ≠ décision Pilote
 * - Primary CTA hierarchy:
 *   - ACTIVE without FINALIZE rec → Finaliser secondary
 *   - ACTIVE with CURRENT FINALIZE rec → Finaliser primary
 *   - CANDIDATE → Démarrer primary (eligibility)
 *   - BLOCKED/DRIFT → Replanifier (HD visible) ; RESUME disabled until clean
 *   - FINALIZATION OPEN → Traiter / Voir détails / Annuler
 *   - COMPLETED → next-cycle recommendation + escalate to TrajectorySurface if arbitration
 * - Trajectory escalation: link/focus TrajectorySurface (no duplicate arbitration)
 * - Empty: no recommendation → honest copy, eligibility CTAs only
 * - Loading/error: reuse workspace patterns; disabled CTAs honest
 */
export const LIFECYCLE_SURFACE_VISUAL_CONTRACT = {
  source: "review-v5",
  desktop: "1440x900",
  responsive: "drawer/sheet ≤1024 (evidence 1100x908)",
  heading: "Cycle",
  recommendationLabel: "Recommandation Nora",
  decisionLabel: "Décision Pilote requise",
  antiClaim: "PNG = visual evidence only; not Product SoT",
} as const;
