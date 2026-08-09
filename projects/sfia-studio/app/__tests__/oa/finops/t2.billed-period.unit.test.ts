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
  buildOpenAiCostsSourceBatchId,
  fetchOpenAiOrganizationCostsSnapshot,
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

const COV_START = BUCKET;
const COV_END = "2026-08-08T00:00:00.000Z";
const BUCKET_AUG7 = "2026-08-07T00:00:00.000Z";
const BUCKET_AUG8 = "2026-08-08T00:00:00.000Z";
const BUCKET_AUG9 = "2026-08-09T00:00:00.000Z";
const END_AUG8 = "2026-08-08T00:00:00.000Z";
const END_AUG9 = "2026-08-09T00:00:00.000Z";
const END_AUG10 = "2026-08-10T00:00:00.000Z";

function completeSnapshot(
  coverageStart: string = COV_START,
  coverageEndExclusive: string = COV_END,
  externalProjectId: string = EXTERNAL,
) {
  return {
    completeness: "complete" as const,
    provider: "openai",
    externalProjectId,
    coverageStart,
    coverageEndExclusive,
  };
}

function incompleteSnapshot(
  coverageStart: string = COV_START,
  coverageEndExclusive: string = COV_END,
  externalProjectId: string = EXTERNAL,
) {
  return {
    completeness: "incomplete" as const,
    provider: "openai",
    externalProjectId,
    coverageStart,
    coverageEndExclusive,
  };
}

function derivedRefAt(
  bucketStart: string,
  bucketEndExclusive: string,
  lineItem: string | null = "ALL",
  externalProjectId: string = EXTERNAL,
): string {
  return buildDerivedSourceReference({
    provider: "openai",
    externalProjectId,
    sfiaProjectId: PROJECT,
    sourceBucketStart: bucketStart,
    sourceBucketEndExclusive: bucketEndExclusive,
    lineItem: lineItem === "ALL" ? null : lineItem,
    currency: "USD",
  });
}

function billedFactAt(
  providerAmount: string,
  sourceBatchId: string,
  bucketStart: string,
  bucketEndExclusive: string,
  lineItem: string | null = null,
  externalProjectId: string = EXTERNAL,
): BilledPeriodFact {
  return {
    projectId: PROJECT,
    externalProjectId,
    periodStart: PERIOD,
    provider: "openai",
    sourceBucketStart: bucketStart,
    sourceBucketEndExclusive: bucketEndExclusive,
    lineItem,
    providerAmount,
    currency: "USD",
    derivedSourceReference: derivedRefAt(
      bucketStart,
      bucketEndExclusive,
      lineItem,
      externalProjectId,
    ),
    sourceBatchId,
  };
}

function batchForAtoms(
  atoms: ReadonlyArray<{
    line_item: string | null;
    providerAmount: string;
    sourceBucketStart?: string;
    sourceBucketEndExclusive?: string;
  }>,
  coverageStart: string = COV_START,
  coverageEndExclusive: string = COV_END,
  externalProjectId: string = EXTERNAL,
): string {
  return buildBilledPeriodSourceBatchId({
    provider: "openai",
    externalProjectId,
    sfiaProjectId: PROJECT,
    periodStart: PERIOD,
    adapterContractVersion: "openai-costs-v2",
    coverageStart,
    coverageEndExclusive,
    atoms: atoms.map((a) => ({
      sourceBucketStart: a.sourceBucketStart ?? coverageStart,
      sourceBucketEndExclusive:
        a.sourceBucketEndExclusive ?? coverageEndExclusive,
      project_id: externalProjectId,
      line_item: a.line_item,
      currency: "USD",
      providerAmount: a.providerAmount,
    })),
  });
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
        snapshot: completeSnapshot(),
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
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [atomA, atomB],
    });
    const reverse = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [atomB, atomA],
    });
    expect(forward).toBe(reverse);
    expect(forward.startsWith("batch_")).toBe(true);

    const changed = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
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
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
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
      snapshot: completeSnapshot(),
    });
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.createdCount).toBe(1);

    const batch2 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
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
      snapshot: completeSnapshot(),
    });
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    expect(second.createdCount).toBe(1);

    const batch3 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
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
      snapshot: completeSnapshot(),
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
      snapshot: completeSnapshot(),
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
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
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
      snapshot: completeSnapshot(),
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

  it("T35 removed atom correction: A100+B10 then complete A100/B absent => billed 100", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    const s1 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    expect(s1.outcome).toBe("succeeded");
    if (s1.outcome !== "succeeded") return;
    expect(s1.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "110.00000000",
    );

    const batch2 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
    ]);
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("100.00000000", batch2, "A")],
      snapshot: completeSnapshot(),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.createdCount).toBe(1);
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "100.00000000",
    );
    const bDelta = reconciliation._costEvents.find(
      (e) =>
        e.derivedSourceReference === derivedRef("B") &&
        e.amount === "-10.00000000",
    );
    expect(bDelta).toBeTruthy();
    expect(bDelta?.correctionRef?.startsWith("ABSENT_FROM_COMPLETE_SNAPSHOT|")).toBe(
      true,
    );
  });

  it("T36 removed atom exact replay adds no new economic event", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    const batch2 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
    ]);
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("100.00000000", batch2, "A")],
      snapshot: completeSnapshot(),
    };
    const s2 = await reconcileBilledPeriod(deps, input);
    expect(s2.outcome).toBe("succeeded");
    const eventsAfterS2 = reconciliation._costEvents.length;
    const replay = await reconcileBilledPeriod(deps, input);
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(eventsAfterS2);
    expect(
      (await aggregates.listAggregatesForProjectPeriod({
        projectId: PROJECT,
        periodStart: PERIOD,
      })).find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("100.00000000");
  });

  it("T37 empty complete snapshot zeros all atoms in scope", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    const batch2 = batchForAtoms([]);
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [],
      snapshot: completeSnapshot(),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.createdCount).toBe(2);
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "0.00000000",
    );
    const amounts = reconciliation._costEvents
      .filter((e) => e.attributionScope === "PROJECT_PERIOD")
      .map((e) => e.amount)
      .sort();
    expect(amounts).toEqual([
      "-10.00000000",
      "-100.00000000",
      "10.00000000",
      "100.00000000",
    ]);
  });

  it("T38 provider failure / incomplete is NOT empty snapshot", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    const eventsBefore = reconciliation._costEvents.length;
    const batchFail = "batch_incomplete_failure_not_empty";
    const incomplete = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batchFail,
      facts: [],
      snapshot: incompleteSnapshot(),
    });
    expect(incomplete.outcome).toBe("succeeded");
    if (incomplete.outcome !== "succeeded") return;
    expect(incomplete.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(eventsBefore);
    expect(
      incomplete.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("110.00000000");
    expect(
      reconciliation._costEvents.some((e) =>
        (e.correctionRef ?? "").startsWith("ABSENT_FROM_COMPLETE_SNAPSHOT|"),
      ),
    ).toBe(false);
  });

  it("T39 scope isolation: other externalProjectId atom is never zeroed", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const OTHER = "proj_openai_other";
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });

    const otherRef = buildDerivedSourceReference({
      provider: "openai",
      externalProjectId: OTHER,
      sfiaProjectId: PROJECT,
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      lineItem: "X",
      currency: "USD",
    });
    const otherBatch = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: OTHER,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: OTHER,
          line_item: "X",
          currency: "USD",
          providerAmount: "7.00000000",
        },
      ],
    });
    const otherFact: BilledPeriodFact = {
      projectId: PROJECT,
      externalProjectId: OTHER,
      periodStart: PERIOD,
      provider: "openai",
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      lineItem: "X",
      providerAmount: "7.00000000",
      currency: "USD",
      derivedSourceReference: otherRef,
      sourceBatchId: otherBatch,
    };
    const other = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: otherBatch,
      facts: [otherFact],
      snapshot: completeSnapshot(COV_START, COV_END, OTHER),
    });
    expect(other.outcome).toBe("succeeded");

    const emptyLocal = batchForAtoms([]);
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: emptyLocal,
      facts: [],
      snapshot: completeSnapshot(COV_START, COV_END, EXTERNAL),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "7.00000000",
    );
    const otherEvents = reconciliation._costEvents.filter(
      (e) => e.derivedSourceReference === otherRef,
    );
    expect(otherEvents).toHaveLength(1);
    expect(otherEvents[0]!.amount).toBe("7.00000000");
  });

  it("T40 reappearance after absence: B=10 → absent → 7 yields aggregate 7", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [billedFact("10.00000000", batch1, "B")],
      snapshot: completeSnapshot(),
    });
    const batchAbsent = batchForAtoms([]);
    const absent = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batchAbsent,
      facts: [],
      snapshot: completeSnapshot(),
    });
    expect(absent.outcome).toBe("succeeded");
    if (absent.outcome !== "succeeded") return;
    expect(absent.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "0.00000000",
    );

    const batchRe = batchForAtoms([
      { line_item: "B", providerAmount: "7.00000000" },
    ]);
    const reappear = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batchRe,
      facts: [billedFact("7.00000000", batchRe, "B")],
      snapshot: completeSnapshot(),
    });
    expect(reappear.outcome).toBe("succeeded");
    if (reappear.outcome !== "succeeded") return;
    expect(
      reappear.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("7.00000000");
    const bAmounts = reconciliation._costEvents
      .filter((e) => e.derivedSourceReference === derivedRef("B"))
      .map((e) => e.amount);
    expect(bAmounts).toEqual([
      "10.00000000",
      "-10.00000000",
      "7.00000000",
    ]);
  });

  it("T41 narrow coverage isolation: empty Aug8 does not zero Aug7", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch7 = batchForAtoms(
      [{ line_item: "A", providerAmount: "10.00000000" }],
      BUCKET_AUG7,
      END_AUG8,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch7,
      facts: [
        billedFactAt("10.00000000", batch7, BUCKET_AUG7, END_AUG8, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG7, END_AUG8),
    });
    const batch8 = batchForAtoms(
      [{ line_item: "B", providerAmount: "5.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch8,
      facts: [
        billedFactAt("5.00000000", batch8, BUCKET_AUG8, END_AUG9, "B"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const emptyAug8 = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    const result = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: emptyAug8,
      facts: [],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "10.00000000",
    );
    const amountsA = reconciliation._costEvents
      .filter((e) => e.derivedSourceReference === derivedRefAt(BUCKET_AUG7, END_AUG8, "A"))
      .map((e) => e.amount);
    const amountsB = reconciliation._costEvents
      .filter((e) => e.derivedSourceReference === derivedRefAt(BUCKET_AUG8, END_AUG9, "B"))
      .map((e) => e.amount);
    expect(amountsA).toEqual(["10.00000000"]);
    expect(amountsB).toEqual(["5.00000000", "-5.00000000"]);
  });

  it("T42 missing atom inside coverage still tombstones", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms(
      [
        { line_item: "A", providerAmount: "100.00000000" },
        { line_item: "B", providerAmount: "10.00000000" },
      ],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFactAt("100.00000000", batch1, BUCKET_AUG8, END_AUG9, "A"),
        billedFactAt("10.00000000", batch1, BUCKET_AUG8, END_AUG9, "B"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const batch2 = batchForAtoms(
      [{ line_item: "A", providerAmount: "100.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [
        billedFactAt("100.00000000", batch2, BUCKET_AUG8, END_AUG9, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "100.00000000",
    );
    expect(
      reconciliation._costEvents.some(
        (e) =>
          e.derivedSourceReference ===
            derivedRefAt(BUCKET_AUG8, END_AUG9, "B") &&
          e.amount === "-10.00000000",
      ),
    ).toBe(true);
  });

  it("T43 outside coverage preserved across multi-day month", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    for (const [start, end, line, amt] of [
      [BUCKET_AUG7, END_AUG8, "A", "10.00000000"],
      [BUCKET_AUG8, END_AUG9, "B", "5.00000000"],
      [BUCKET_AUG9, END_AUG10, "C", "7.00000000"],
    ] as const) {
      const batch = batchForAtoms(
        [{ line_item: line, providerAmount: amt }],
        start,
        end,
      );
      const r = await reconcileBilledPeriod(deps, {
        projectId: PROJECT,
        periodStart: PERIOD,
        sourceBatchId: batch,
        facts: [billedFactAt(amt, batch, start, end, line)],
        snapshot: completeSnapshot(start, end),
      });
      expect(r.outcome).toBe("succeeded");
    }
    const emptyAug8 = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    const result = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: emptyAug8,
      facts: [],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "17.00000000",
    );
    expect(
      reconciliation._costEvents.filter((e) => e.amount?.startsWith("-")),
    ).toHaveLength(1);
    expect(
      reconciliation._costEvents.find((e) => e.amount === "-5.00000000")
        ?.derivedSourceReference,
    ).toBe(derivedRefAt(BUCKET_AUG8, END_AUG9, "B"));
  });

  it("T44 empty snapshots different coverage have different sourceBatchId", () => {
    const a = batchForAtoms([], BUCKET_AUG7, END_AUG8);
    const b = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    expect(a).not.toBe(b);
    const a2 = batchForAtoms([], BUCKET_AUG7, END_AUG8);
    expect(a2).toBe(a);
  });

  it("T45 invalid/cross-period coverage fails before writes", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = batchForAtoms([]);
    const inverted = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [],
      snapshot: completeSnapshot(END_AUG9, BUCKET_AUG8),
    });
    expect(inverted.outcome).toBe("failed");
    if (inverted.outcome !== "failed") return;
    expect(inverted.code).toBe("FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE");
    expect(reconciliation._costEvents).toHaveLength(0);

    const cross = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: "batch_cross_month",
      facts: [],
      snapshot: completeSnapshot(
        "2026-07-31T00:00:00.000Z",
        "2026-08-02T00:00:00.000Z",
      ),
    });
    expect(cross.outcome).toBe("failed");
    if (cross.outcome !== "failed") return;
    expect(cross.code).toBe("FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE");
    expect(reconciliation._costEvents).toHaveLength(0);
    const aggs = await aggregates.listAggregatesForProjectPeriod({
      projectId: PROJECT,
      periodStart: PERIOD,
    });
    expect(aggs).toHaveLength(0);
  });

  it("T46 incomplete snapshot never tombstones", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms(
      [
        { line_item: "A", providerAmount: "100.00000000" },
        { line_item: "B", providerAmount: "10.00000000" },
      ],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFactAt("100.00000000", batch1, BUCKET_AUG8, END_AUG9, "A"),
        billedFactAt("10.00000000", batch1, BUCKET_AUG8, END_AUG9, "B"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const before = reconciliation._costEvents.length;
    const incomplete = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: "batch_incomplete_aug8",
      facts: [],
      snapshot: incompleteSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(incomplete.outcome).toBe("succeeded");
    if (incomplete.outcome !== "succeeded") return;
    expect(incomplete.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(before);
    expect(
      incomplete.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("110.00000000");
  });

  it("T47 exact replay coverage idempotent", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms(
      [{ line_item: "A", providerAmount: "10.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFactAt("10.00000000", batch1, BUCKET_AUG8, END_AUG9, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const empty = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: empty,
      facts: [] as BilledPeriodFact[],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    };
    const first = await reconcileBilledPeriod(deps, input);
    expect(first.outcome).toBe("succeeded");
    const events = reconciliation._costEvents.length;
    const replay = await reconcileBilledPeriod(deps, input);
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(events);
    expect(batchForAtoms([], BUCKET_AUG8, END_AUG9)).toBe(empty);
  });

  it("T48 adapter bounded snapshot declaration", async () => {
    const start = 1786147200; // 2026-08-08T00:00:00.000Z
    const end = 1786233600; // 2026-08-09T00:00:00.000Z
    const raw = JSON.stringify({
      object: "page",
      data: [],
      next_page: null,
    });
    const prev = process.env.OPENAI_ADMIN_KEY;
    process.env.OPENAI_ADMIN_KEY = "test-admin-key-not-live";
    let result;
    try {
    result = await fetchOpenAiOrganizationCostsSnapshot({
      projectId: PROJECT,
      externalProjectId: EXTERNAL,
      periodStart: PERIOD,
      startTimeUnix: start,
      endTimeUnix: end,
      fetchImpl: async () =>
        new Response(raw, { status: 200, headers: { "content-type": "application/json" } }),
    });
    expect(result.snapshot.coverageStart).toBe("2026-08-08T00:00:00.000Z");
    expect(result.snapshot.coverageEndExclusive).toBe("2026-08-09T00:00:00.000Z");
    expect(result.snapshot.completeness).toBe("complete");
    const expectedBatch = buildOpenAiCostsSourceBatchId({
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      coverageStart: "2026-08-08T00:00:00.000Z",
      coverageEndExclusive: "2026-08-09T00:00:00.000Z",
      atoms: [],
    });
    expect(result.sourceBatchId).toBe(expectedBatch);
    } finally {
      if (prev === undefined) delete process.env.OPENAI_ADMIN_KEY;
      else process.env.OPENAI_ADMIN_KEY = prev;
    }
  });

  it("T49 adapter complete snapshot without end bound fails closed", async () => {
    await expect(
      fetchOpenAiOrganizationCostsSnapshot({
        projectId: PROJECT,
        externalProjectId: EXTERNAL,
        periodStart: PERIOD,
        startTimeUnix: 1786147200,
        fetchImpl: async () => {
          throw new Error("fetch must not be called");
        },
      }),
    ).rejects.toThrow("OPENAI_COSTS_COMPLETE_SNAPSHOT_REQUIRES_BOUNDED_END");
  });

  it("T50 fact outside declared coverage rejected before writes", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = batchForAtoms(
      [{ line_item: "A", providerAmount: "10.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    const result = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [
        billedFactAt("10.00000000", batch, BUCKET_AUG7, END_AUG8, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.code).toBe("FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE");
    expect(reconciliation._costEvents).toHaveLength(0);
  });

});
