/**
 * @vitest-environment node
 *
 * FinOps T2 — BILLED period attribution (PROJECT_PERIOD / OPTION B).
 */
import { describe, expect, it } from "vitest";
import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
} from "@/lib/oa/finops/application/billedPeriodIdentity";
import { reconcileBilledPeriod } from "@/lib/oa/finops/application/reconcileBilledPeriod";
import {
  deriveCostEventIdentity,
  derivePeriodCostEventIdentity,
} from "@/lib/oa/finops/application/t2Identity";
import type { BilledPeriodFact } from "@/lib/oa/finops/application/types.aggregate";
import {
  canonicalProviderAmountString,
  normalizeProviderCurrency,
  parseProviderMoneyString,
} from "@/lib/oa/finops/application/providerMoneyBoundary";
import { buildEnforcementProjectionsFromCostEvents } from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import { createMemoryFinOpsT2Pair } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";
import {
  mapAtomsToBilledPeriodFacts,
  parseCostsPageToAtoms,
} from "@/lib/oa/finops/server/openaiOrganizationCostsAdapter";

const PROJECT = "sfia-proj-1";
const EXTERNAL = "proj_openai_1";
const PERIOD = "2026-08-01";
const BUCKET = "2026-08-07T00:00:00.000Z";

function derivedRef(lineItem: string | null = "ALL"): string {
  return buildDerivedSourceReference({
    provider: "openai",
    externalProjectId: EXTERNAL,
    sfiaProjectId: PROJECT,
    sourceBucketStart: BUCKET,
    sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
    lineItem: lineItem === "ALL" ? null : lineItem,
    currency: "USD",
  });
}

function billedFact(
  providerAmount: string,
  sourceBatchId: string,
  lineItem: string | null = null,
): BilledPeriodFact {
  return {
    projectId: PROJECT,
    externalProjectId: EXTERNAL,
    periodStart: PERIOD,
    provider: "openai",
    sourceBucketStart: BUCKET,
    sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
    lineItem,
    providerAmount,
    currency: "USD",
    derivedSourceReference: derivedRef(lineItem),
    sourceBatchId,
  };
}

describe("FinOps T2 billed period", () => {
  it("deriveCostEventIdentity unchanged for fixed RUN inputs", () => {
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      evidenceClass: "observed",
      correctionRef: "corr-1",
      sourceBatchId: "batch-1",
      amount: "0.12000000",
      currency: "USD",
    });
    expect(identity).toEqual({
      costEventId:
        "cost_b861bab1869be863abac5ce1ae8fb7def8fc93ac42ed5328fb73968ab46b8f9b",
      dedupKey:
        "cost_dedup_b861bab1869be863abac5ce1ae8fb7def8fc93ac42ed5328fb73968ab46b8f9b",
    });
  });

  it("PROJECT_PERIOD identity is deterministic", () => {
    const a = derivePeriodCostEventIdentity({
      projectId: PROJECT,
      periodStart: PERIOD,
      provider: "openai",
      derivedSourceReference: derivedRef(),
      correctionRef: "INITIAL",
      sourceBatchId: "batch_test",
      amount: "100.00000000",
      currency: "USD",
    });
    const b = derivePeriodCostEventIdentity({
      projectId: PROJECT,
      periodStart: PERIOD,
      provider: "openai",
      derivedSourceReference: derivedRef(),
      correctionRef: "INITIAL",
      sourceBatchId: "batch_test",
      amount: "100.00000000",
      currency: "USD",
    });
    expect(a).toEqual(b);
  });

  it("rejects EXECUTION_RUN empty-string executionRunId via reconcileProjectPeriod path", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const { reconcileProjectPeriod } = await import(
      "@/lib/oa/finops/application/reconcileProjectPeriod"
    );
    const result = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: PERIOD,
        sourceBatchId: "batch-empty-run",
        facts: [
          {
            executionRunId: "",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "1.00000000",
            currency: "USD",
            correctionRef: "corr-1",
            provider: "openai",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
  });

  it("requires derivedSourceReference on billed facts", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const fact = billedFact("100.00000000", "batch-a");
    const bad = { ...fact, derivedSourceReference: "  " };
    const result = await reconcileBilledPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: PROJECT,
        periodStart: PERIOD,
        sourceBatchId: "batch-a",
        facts: [bad],
      },
    );
    expect(result.outcome).toBe("failed");
  });

  it("sourceBatchId is deterministic and order-independent", () => {
    const atomA = {
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      project_id: EXTERNAL,
      line_item: null,
      currency: "USD",
      providerAmount: "100.00000000",
    };
    const atomB = {
      ...atomA,
      sourceBucketStart: "2026-08-08T00:00:00.000Z",
      providerAmount: "5.00000000",
    };
    const forward = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [atomA, atomB],
    });
    const reverse = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [atomB, atomA],
    });
    expect(forward).toBe(reverse);
    expect(forward.startsWith("batch_")).toBe(true);

    const changed = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [{ ...atomA, providerAmount: "101.00000000" }],
    });
    expect(changed).not.toBe(forward);
  });

  it("correction path 100→105→103 yields deltas and aggregate billed 103; replay adds 0", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "100.00000000",
        },
      ],
    });
    const first = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [billedFact("100.00000000", batch1)],
    });
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.createdCount).toBe(1);

    const batch2 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "105.00000000",
        },
      ],
    });
    const second = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("105.00000000", batch2)],
    });
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    expect(second.createdCount).toBe(1);

    const batch3 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "103.00000000",
        },
      ],
    });
    const third = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch3,
      facts: [billedFact("103.00000000", batch3)],
    });
    expect(third.outcome).toBe("succeeded");
    if (third.outcome !== "succeeded") return;

    const usd = third.aggregates.find((a) => a.currency === "USD");
    expect(usd?.billedAmount).toBe("103.00000000");

    const replay = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch3,
      facts: [billedFact("103.00000000", batch3)],
    });
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
  });

  it("PARAMETRIC estimate never contributes to T4 blockingEligibleAmount", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: PROJECT,
      periodStart: PERIOD,
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        {
          costEventId: "c-est",
          dedupKey: "d-est",
          projectId: PROJECT,
          attributionScope: "EXECUTION_RUN",
          executionRunId: "run-1",
          derivedSourceReference: null,
          usageEventId: null,
          periodStart: PERIOD,
          currency: "USD",
          amount: "99.00000000",
          evidenceClass: "estimated",
          sourceOfTruth: "PARAMETRIC_ESTIMATE",
          estimationStatus: "available",
          correctionRef: null,
          catalogVersion: "v1",
          provider: "openai",
          model: "gpt-test",
          unit: "token",
          billingQuantum: "1000",
          usageQuantity: "1000",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
        {
          costEventId: "c-bill",
          dedupKey: "d-bill",
          projectId: PROJECT,
          attributionScope: "PROJECT_PERIOD",
          executionRunId: null,
          derivedSourceReference: derivedRef(),
          usageEventId: null,
          periodStart: PERIOD,
          currency: "USD",
          amount: "5.00000000",
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          estimationStatus: "available",
          correctionRef: "INITIAL",
          catalogVersion: null,
          provider: "openai",
          model: null,
          unit: null,
          billingQuantum: null,
          usageQuantity: null,
          occurredAt: BUCKET,
        },
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("5.00000000");
    expect(projections[0]!.billedAmount).toBe("5.00000000");
  });

  it("OpenAI mapper handles null line_item and rejects external project mismatch", () => {
    // Wire format mirrors OpenAI docs: amount.value is a JSON number.
    const raw = JSON.stringify({
      object: "page",
      data: [
        {
          object: "bucket",
          start_time: 1786060800,
          end_time: 1786147200,
          results: [
            {
              object: "organization.costs.result",
              project_id: EXTERNAL,
              line_item: null,
              amount: { value: 1.23, currency: "usd" },
            },
          ],
        },
      ],
      next_page: null,
    });
    const atoms = parseCostsPageToAtoms(raw);
    expect(atoms).toHaveLength(1);
    expect(atoms[0]!.line_item).toBeNull();
    expect(atoms[0]!.currency).toBe("USD");
    expect(atoms[0]!.providerAmount).toBe("1.23000000");

    const facts = mapAtomsToBilledPeriodFacts({
      projectId: PROJECT,
      externalProjectId: EXTERNAL,
      periodStart: PERIOD,
      provider: "openai",
      atoms,
      sourceBatchId: "batch-map",
    });
    expect(facts[0]!.lineItem).toBeNull();

    expect(() =>
      mapAtomsToBilledPeriodFacts({
        projectId: PROJECT,
        externalProjectId: "other-project",
        periodStart: PERIOD,
        provider: "openai",
        atoms,
        sourceBatchId: "batch-map",
      }),
    ).toThrow(/external project mismatch/);
  });

  it("invalid provider money fails closed", () => {
    expect(() =>
      parseProviderMoneyString("not-a-number", "USD"),
    ).toThrow();
    expect(normalizeProviderCurrency("usd")).toBe("USD");
    expect(
      canonicalProviderAmountString("1.123456785", "USD"),
    ).toBe("1.12345678");
    expect(
      canonicalProviderAmountString("1.123456795", "USD"),
    ).toBe("1.12345680");
  });

  it("concurrent reconcileBilledPeriod with same atom yields one economic delta", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "50.00000000",
        },
      ],
    });
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [billedFact("50.00000000", batch)],
    };
    const [a, b] = await Promise.all([
      reconcileBilledPeriod(deps, input),
      reconcileBilledPeriod(deps, input),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    const created =
      (a.outcome === "succeeded" ? a.createdCount : 0) +
      (b.outcome === "succeeded" ? b.createdCount : 0);
    expect(created).toBe(1);
    const billedEvents = reconciliation._costEvents.filter(
      (e) => e.attributionScope === "PROJECT_PERIOD",
    );
    expect(billedEvents).toHaveLength(1);
    expect(billedEvents[0]!.amount).toBe("50.00000000");
    expect(billedEvents[0]!.executionRunId).toBeNull();
  });
});
