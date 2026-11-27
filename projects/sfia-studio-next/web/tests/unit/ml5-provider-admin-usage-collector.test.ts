import { afterEach, describe, expect, it } from "vitest";
import {
  assertAdminCollectionEnvelope,
  assessPeriodEquality,
  markSubstitutedAdminTransport,
  parseAdminUsagePage,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  resolveProductAdminCollectorView,
  runAdminCollection,
  listAdminCollectorSnapshots,
  reconcileFinOpsCosts,
  sumMeasuredCostUsd,
  upsertAdminSnapshots,
  type AdminHttpTransport,
  type AdminUsageSnapshot,
} from "@/domains/finops/provider-admin-usage-collector";
import { decimalAdd, decimalSub } from "@/domains/finops/decimal-money";

function officialCostsPage(opts?: { hasMore?: boolean; next?: string | null }) {
  return {
    object: "page",
    data: [
      {
        object: "bucket",
        start_time: 1_700_000_000,
        end_time: 1_700_086_400,
        results: [
          {
            object: "organization.costs.result",
            amount: { value: 0.42, currency: "usd" },
            project_id: "proj_a",
          },
          {
            object: "organization.costs.result",
            amount: { value: 0.08, currency: "usd" },
            project_id: "proj_b",
            api_key_id: "key_1",
          },
        ],
      },
    ],
    has_more: opts?.hasMore ?? false,
    next_page: opts?.next ?? null,
  };
}

function snap(partial: Partial<AdminUsageSnapshot> & Pick<AdminUsageSnapshot, "completeness" | "collectedAtUtc">): AdminUsageSnapshot {
  return {
    sourceEndpoint: "/organization/costs",
    surfaceObject: "organization.costs.result",
    organizationScope: "org:test",
    intervalStartUtc: "2023-11-14T22:13:20.000Z",
    intervalEndUtc: "2023-11-15T22:13:20.000Z",
    granularity: "1d",
    dimensions: {
      project_id: "proj_a",
      api_key_id: null,
      user_id: null,
      model: null,
      line_item: null,
      api_source: null,
    },
    metrics: {
      input_tokens: { presence: "ABSENT", value: null },
      output_tokens: { presence: "ABSENT", value: null },
      input_cached_tokens: { presence: "ABSENT", value: null },
      num_model_requests: { presence: "ABSENT", value: null },
      num_requests: { presence: "ABSENT", value: null },
      amount: { presence: "MEASURED", value: "1.0000000000" },
      currency: { presence: "MEASURED", value: "usd" },
    },
    collectionId: "acol_x",
    ...partial,
  };
}

describe("provider-admin-usage-collector (Admin/FinOps qualification)", () => {
  afterEach(() => {
    resetAdminCollectorStateForTests();
  });

  it("parses nested bucket.results", () => {
    const parsed = parseAdminUsagePage({
      path: "/organization/costs",
      json: officialCostsPage(),
      organizationScope: "org:test",
      collectionId: "acol_1",
      collectedAtUtc: "2026-11-26T00:00:00.000Z",
      granularity: "1d",
    });
    expect(parsed.snapshots).toHaveLength(2);
  });

  it("flags has_more without cursor", () => {
    const parsed = parseAdminUsagePage({
      path: "/organization/costs",
      json: officialCostsPage({ hasMore: true, next: null }),
      organizationScope: "org:test",
      collectionId: "acol_hm",
      collectedAtUtc: "2026-11-26T00:00:00.000Z",
      granularity: "1d",
    });
    expect(parsed.limits).toContain("HAS_MORE_WITHOUT_CURSOR");
  });

  it("memory upsert: partial never degrades complete metrics", () => {
    const metrics9 = {
      input_tokens: { presence: "ABSENT" as const, value: null },
      output_tokens: { presence: "ABSENT" as const, value: null },
      input_cached_tokens: { presence: "ABSENT" as const, value: null },
      num_model_requests: { presence: "ABSENT" as const, value: null },
      num_requests: { presence: "ABSENT" as const, value: null },
      amount: { presence: "MEASURED" as const, value: "9.0000000000" },
      currency: { presence: "MEASURED" as const, value: "usd" },
    };
    upsertAdminSnapshots([
      snap({
        completeness: "complete",
        collectedAtUtc: "2026-11-26T10:00:00.000Z",
        metrics: metrics9,
      }),
    ]);
    upsertAdminSnapshots([
      snap({
        completeness: "partial",
        collectedAtUtc: "2026-11-26T11:00:00.000Z",
        metrics: {
          ...metrics9,
          amount: { presence: "MEASURED", value: "0.0100000000" },
        },
      }),
    ]);
    const rows = listAdminCollectorSnapshots();
    expect(rows).toHaveLength(1);
    expect(rows[0].completeness).toBe("complete");
    expect(rows[0].metrics.amount.value).toBe("9.0000000000");
  });

  it("memory upsert: older collect does not replace newer", () => {
    const metrics = {
      input_tokens: { presence: "ABSENT" as const, value: null },
      output_tokens: { presence: "ABSENT" as const, value: null },
      input_cached_tokens: { presence: "ABSENT" as const, value: null },
      num_model_requests: { presence: "ABSENT" as const, value: null },
      num_requests: { presence: "ABSENT" as const, value: null },
      amount: { presence: "MEASURED" as const, value: "5.0000000000" },
      currency: { presence: "MEASURED" as const, value: "usd" },
    };
    upsertAdminSnapshots([
      snap({
        completeness: "complete",
        collectedAtUtc: "2026-11-26T12:00:00.000Z",
        metrics,
      }),
    ]);
    upsertAdminSnapshots([
      snap({
        completeness: "complete",
        collectedAtUtc: "2026-11-26T11:00:00.000Z",
        metrics: {
          ...metrics,
          amount: { presence: "MEASURED", value: "1.0000000000" },
        },
      }),
    ]);
    expect(listAdminCollectorSnapshots()[0].metrics.amount.value).toBe(
      "5.0000000000",
    );
  });

  it("product view never loads Admin secret", () => {
    process.env.OPENAI_ADMIN_KEY = "sk-should-not-be-readable";
    const view = resolveProductAdminCollectorView();
    expect(view.freshness.secretReadableByProduct).toBe(false);
    delete process.env.OPENAI_ADMIN_KEY;
  });

  it("LIVE mode refuses without LIVE GO even with forged marker", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: officialCostsPage(),
    }));
    const r = await runAdminCollection({
      config: {
        adminApiKey: "sk-admin-test",
        organizationScope: "org:t",
        mode: "LIVE",
        liveAdminCallsAuthorized: false,
        transport: transport as unknown as AdminHttpTransport,
      },
      path: "/organization/costs",
      query: { start_time: "1700000000", end_time: "1700086400" },
    });
    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
  });

  it("TEST_SUBSTITUTED refuses when a real key is attached", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: officialCostsPage(),
    }));
    const r = await runAdminCollection({
      config: {
        adminApiKey: "sk-must-not-be-here",
        organizationScope: "org:t",
        mode: "TEST_SUBSTITUTED",
        liveAdminCallsAuthorized: false,
        transport,
      },
      path: "/organization/costs",
      query: { start_time: "1700000000" },
    });
    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
    expect(r.lastError).toContain("BLOCKED_TEST_MUST_NOT_HOLD_LIVE_KEY");
  });

  it("TEST_SUBSTITUTED works without real Admin key", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: officialCostsPage(),
    }));
    const r = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        transport,
      }),
      path: "/organization/costs",
      query: { start_time: "1700000000" },
    });
    expect(r.status).toBe("READY");
    expect(r.snapshots.every((s) => s.collectionProvenance === "TEST_SUBSTITUTED")).toBe(
      true,
    );
  });

  it("envelope requires start_time and bounds maxPages", () => {
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/costs",
        query: {},
        maxPages: 5,
      }),
    ).toThrow(/ENVELOPE_START_TIME_REQUIRED/);
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/costs",
        query: { start_time: "1", require_end_time: "1" },
        maxPages: 5,
      }),
    ).toThrow(/ENVELOPE_END_TIME_REQUIRED/);
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/costs",
        query: { start_time: "1" },
        maxPages: 50,
      }),
    ).toThrow(/ENVELOPE_MAX_PAGES/);
  });

  it("LIVE campaign envelope refuses org-wide and >24h windows", () => {
    const end = String(Math.floor(Date.now() / 1000) - 60);
    const start = String(Number(end) - 3600);
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/costs",
        query: {
          start_time: start,
          end_time: end,
          bucket_width: "1d",
          group_by: "project_id",
        },
        maxPages: 3,
        liveCampaign: true,
      }),
    ).toThrow(/ENVELOPE_LIVE_PROJECT_IDS_REQUIRED/);
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/costs",
        query: {
          start_time: String(Number(end) - 90_000),
          end_time: end,
          project_ids: "proj_dev",
          bucket_width: "1d",
        },
        maxPages: 3,
        liveCampaign: true,
      }),
    ).toThrow(/ENVELOPE_WINDOW_EXCEEDS_24H/);
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/usage/embeddings",
        query: {
          start_time: start,
          end_time: end,
          project_ids: "proj_dev",
        },
        maxPages: 3,
        liveCampaign: true,
      }),
    ).toThrow(/ENVELOPE_LIVE_PATH_NOT_IN_CAMPAIGN/);
    expect(() =>
      assertAdminCollectionEnvelope({
        path: "/organization/costs",
        query: {
          start_time: start,
          end_time: end,
          project_ids: "proj_dev",
          bucket_width: "1d",
          group_by: "project_id",
          evil: "1",
        },
        maxPages: 3,
        liveCampaign: true,
      }),
    ).toThrow(/ENVELOPE_PARAM_NOT_ALLOWED/);
  });

  it("sums only attributed project; refuses null projectId", () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: officialCostsPage(),
    }));
    return runAdminCollection({
      config: {
        adminApiKey: null,
        organizationScope: "org:test",
        mode: "TEST_SUBSTITUTED",
        liveAdminCallsAuthorized: false,
        transport,
      },
      path: "/organization/costs",
      query: { start_time: "1700000000" },
    }).then((r) => {
      expect(r.status).toBe("READY");
      const refused = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
        projectId: null,
      });
      expect(refused.limits).toContain("ORG_AGGREGATE_SUM_REFUSED_WITHOUT_PROJECT");
      const sum = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
        projectId: "proj_a",
      });
      expect(sum.total).toBe("0.4200000000");
    });
  });

  it("period equality requires exact window match", () => {
    const rows = [
      snap({
        completeness: "complete",
        collectedAtUtc: "2026-11-26T00:00:00.000Z",
        intervalStartUtc: "2023-11-14T22:13:20.000Z",
        intervalEndUtc: "2023-11-15T22:13:20.000Z",
      }),
    ];
    const equal = assessPeriodEquality(rows, {
      startUtc: "2023-11-14T22:13:20.000Z",
      endUtc: "2023-11-15T22:13:20.000Z",
    });
    expect(equal.periodEqual).toBe(true);
    const overlapOnly = assessPeriodEquality(rows, {
      startUtc: "2023-11-14T00:00:00.000Z",
      endUtc: "2023-11-16T00:00:00.000Z",
    });
    expect(overlapOnly.periodEqual).toBe(false);
    expect(overlapOnly.periodOverlap).toBe(true);
  });

  it("COMPARABLE when full evidence including periodEqual", () => {
    const ok = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.80",
      providerCostUsd: "0.86",
      scope: {
        organizationMatches: true,
        organizationIdentityProven: true,
        projectIdsOverlap: true,
        projectAttributionProven: true,
        apiKeyIdsOverlap: false,
        periodOverlap: true,
        periodEqual: true,
        currencyMatches: true,
        providerCurrency: "usd",
        surfacesRequested: ["/organization/costs"],
        groupingCompatible: true,
        coverageComplete: true,
        freshnessAcceptable: true,
        evidenceNotes: [],
      },
    });
    expect(ok.status).toBe("COMPARABLE");
    expect(ok.deltaUsd).toBe(decimalSub("0.86", "0.80"));

    const bad = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.80",
      providerCostUsd: "0.86",
      scope: {
        organizationMatches: true,
        organizationIdentityProven: true,
        projectIdsOverlap: true,
        projectAttributionProven: true,
        apiKeyIdsOverlap: false,
        periodOverlap: true,
        periodEqual: false,
        currencyMatches: true,
        providerCurrency: "usd",
        surfacesRequested: ["/organization/costs"],
        groupingCompatible: true,
        coverageComplete: true,
        freshnessAcceptable: true,
        evidenceNotes: [],
      },
    });
    expect(bad.status).toBe("NON_COMPARABLE");
    expect(bad.deltaUsd).toBeNull();
  });

  it("detects repeated cursor as PARTIAL", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: officialCostsPage({ hasMore: true, next: "same_page" }),
    }));
    const r = await runAdminCollection({
      config: {
        adminApiKey: null,
        organizationScope: "org:t",
        mode: "TEST_SUBSTITUTED",
        liveAdminCallsAuthorized: false,
        transport,
      },
      path: "/organization/costs",
      query: { start_time: "1" },
      maxPages: 5,
    });
    expect(r.status).toBe("PARTIAL");
    expect(r.limits).toContain("REPEATED_CURSOR");
  });
});
