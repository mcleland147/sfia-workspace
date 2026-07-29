/**
 * Bounded local persistence decision — INTERNAL_ONLY.
 * Product persistence remains NOT_SELECTED. Git remains method truth.
 * Technology already present: node:sqlite via D1 (no new npm dependency).
 */

export interface BoundedPersistenceDecision {
  readonly decision: "SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE";
  readonly technology: "node:sqlite via D1";
  readonly productPersistence: "NOT_SELECTED";
  readonly gitRemainsMethodTruth: true;
  readonly iam: "NOT_SELECTED";
  readonly secrets: false;
  readonly network: false;
  readonly reversible: true;
  readonly schemaVersion: "t-a7-bounded-persistence-decision.1";
  readonly accessSurface: "INTERNAL_ONLY";
}

export function describeBoundedPersistenceDecision(): BoundedPersistenceDecision {
  return Object.freeze({
    decision: "SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE",
    technology: "node:sqlite via D1",
    productPersistence: "NOT_SELECTED",
    gitRemainsMethodTruth: true,
    iam: "NOT_SELECTED",
    secrets: false,
    network: false,
    reversible: true,
    schemaVersion: "t-a7-bounded-persistence-decision.1",
    accessSurface: "INTERNAL_ONLY",
  });
}
