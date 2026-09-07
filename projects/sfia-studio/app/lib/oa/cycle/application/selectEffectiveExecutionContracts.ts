/**
 * CORR-PROOF-05 #3 — effective ExecutionContract set via supersession.
 * Pure; no persistence.
 */

export type SelectableExecutionContract = {
  contractId: string;
  status: string;
  cycleInstanceId?: string;
  supersedesExecutionContractId?: string;
};

export type SelectEffectiveExecutionContractsResult<
  T extends SelectableExecutionContract = SelectableExecutionContract,
> = {
  effective: T[];
  orphanedSuperseded: T[];
};

/**
 * Filter to cycle-bound contracts, then:
 * - effective = not superseded by another in the set AND status !== "superseded"
 * - orphanedSuperseded = status===superseded with no successor pointing at it
 */
export function selectEffectiveExecutionContracts<
  T extends SelectableExecutionContract,
>(
  contracts: readonly T[],
  cycleInstanceId: string,
): SelectEffectiveExecutionContractsResult<T> {
  const cycleBound = contracts.filter(
    (c) => !c.cycleInstanceId || c.cycleInstanceId === cycleInstanceId,
  );

  const supersededPredecessorIds = new Set(
    cycleBound
      .map((c) => c.supersedesExecutionContractId)
      .filter((id): id is string => Boolean(id)),
  );

  const effective = cycleBound.filter(
    (c) =>
      !supersededPredecessorIds.has(c.contractId) && c.status !== "superseded",
  );

  const orphanedSuperseded = cycleBound.filter(
    (c) =>
      c.status === "superseded" &&
      !cycleBound.some(
        (other) => other.supersedesExecutionContractId === c.contractId,
      ),
  );

  return { effective, orphanedSuperseded };
}
