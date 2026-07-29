/**
 * Consolidated INTERNAL_ONLY foundation view: HARD + T-A6 + atomicity + persistence.
 */

import { evaluateHardFoundation } from "./hardBlockerFoundation";
import { evaluateTA6Foundation } from "./tA6FoundationStatus";
import { queryBlockerAggregation } from "./blockerAggregation";
import { describeBoundedPersistenceDecision } from "./boundedPersistenceDecision";

export interface HardTa6FoundationAggregation {
  readonly schemaVersion: "t-a7-hard-ta6-foundation-agg.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly hard: ReturnType<typeof evaluateHardFoundation>;
  readonly tA6: ReturnType<typeof evaluateTA6Foundation>;
  readonly blockers: ReturnType<typeof queryBlockerAggregation>;
  readonly persistence: ReturnType<typeof describeBoundedPersistenceDecision>;
  readonly b5RemainsOpen: true;
  readonly r1FurtherReduced: true;
  readonly rM01FurtherReduced: true;
  readonly hardRemainsOpenHard: true;
  readonly tA6RemainsIncomplete: true;
  readonly tA7Open: true;
  readonly runReady: false;
  readonly deliveryAuthorized: false;
  readonly cutoverAuthorized: false;
  readonly iam: "NOT_SELECTED";
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
  readonly httpRoute: false;
}

export function queryHardTa6FoundationAggregation(
  evaluatedAt = new Date().toISOString(),
): HardTa6FoundationAggregation {
  const hard = evaluateHardFoundation({
    foundationPresent: true,
    evaluatedAt,
  });
  const tA6 = evaluateTA6Foundation({
    foundationEvidencePresent: true,
    evaluatedAt,
  });
  const blockers = queryBlockerAggregation({
    b5FoundationPresent: true,
    r1SimulationEvidencePresent: true,
    rM01FoundationPresent: true,
    evaluatedAt,
  });
  const persistence = describeBoundedPersistenceDecision();

  return Object.freeze({
    schemaVersion: "t-a7-hard-ta6-foundation-agg.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    hard,
    tA6,
    blockers,
    persistence,
    b5RemainsOpen: true,
    r1FurtherReduced: true,
    rM01FurtherReduced: true,
    hardRemainsOpenHard: true,
    tA6RemainsIncomplete: true,
    tA7Open: true,
    runReady: false,
    deliveryAuthorized: false,
    cutoverAuthorized: false,
    iam: "NOT_SELECTED",
    mutable: false,
    adminUi: false,
    writeCommands: false,
    httpRoute: false,
  });
}
