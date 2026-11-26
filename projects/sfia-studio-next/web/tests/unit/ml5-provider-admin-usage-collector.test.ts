import { afterEach, describe, expect, it } from "vitest";
import {
  markSubstitutedAdminTransport,
  parseAdminUsagePage,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  resolveProductAdminCollectorView,
  runAdminCollection,
  listAdminCollectorSnapshots,
  reconcileFinOpsCosts,
  sumMeasuredCostUsd,
  type AdminHttpTransport,
} from "@/domains/finops/provider-admin-usage-collector";
import { decimalAdd, decimalSub } from "@/domains/finops/decimal-money";

/** Official-shaped page: buckets with nested results (not flattened rows). */
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
            api_key_id: null,
            line_item: null,
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

function officialCompletionsPage() {
  return {
    object: "page",
    data: [
      {
        object: "bucket",
        start_time: 1_700_000_000,
        end_time: 1_700_086_400,
        results: [
          {
            object: "organization.usage.completions.result",
            input_tokens: 100,
            output_tokens: 20,
            input_cached_tokens: 10,
            num_model_requests: 2,
            project_id: "proj_a",
            model: "gpt-x",
          },
        ],
      },
      {
        object: "bucket",
        start_time: 1_700_086_400,
        end_time: 1_700_172_800,
        results: [],
      },
    ],
    has_more: false,
    next_page: null,
  };
}

function sub(fn: AdminHttpTransport["__sfiaAdminMode"] extends never ? never : Parameters<typeof markSubstitutedAdminTransport>[0]) {
  return markSubstitutedAdminTransport(fn);
}

describe("provider-admin-usage-collector (operational)", () => {
  afterEach(() => {
    resetAdminCollectorStateForTests();
  });

  it("parses nested bucket.results — multiple results per bucket", () => {
    const parsed = parseAdminUsagePage({
      path: "/organization/costs",
      json: officialCostsPage(),
      organizationScope: "org:test",
      collectionId: "acol_1",
      collectedAtUtc: "2026-11-26T00:00:00.000Z",
      granularity: "1d",
    });
    expect(parsed.snapshots).toHaveLength(2);
    expect(parsed.snapshots[0].surfaceObject).toBe("organization.costs.result");
    expect(parsed.snapshots[0].metrics.amount).toEqual({
      presence: "MEASURED",
      value: "0.4200000000",
    });
    expect(parsed.snapshots[1].dimensions.project_id).toBe("proj_b");
  });

  it("flags has_more without cursor as anomaly", () => {
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

  it("ABSENT metrics stay ABSENT — never ZERO", () => {
    const parsed = parseAdminUsagePage({
      path: "/organization/usage/completions",
      json: officialCompletionsPage(),
      organizationScope: "org:test",
      collectionId: "acol_2",
      collectedAtUtc: "2026-11-26T00:00:00.000Z",
      granularity: "1d",
    });
    expect(parsed.snapshots).toHaveLength(1);
    const m = parsed.snapshots[0].metrics;
    expect(m.input_tokens.presence).toBe("MEASURED");
    expect(m.num_requests.presence).toBe("ABSENT");
    expect(m.num_requests.value).toBeNull();
    expect(m.amount.presence).toBe("ABSENT");
  });

  it("product view never loads Admin secret", () => {
    process.env.OPENAI_ADMIN_KEY = "sk-should-not-be-readable";
    const view = resolveProductAdminCollectorView();
    expect(view.freshness.secretReadableByProduct).toBe(false);
    delete process.env.OPENAI_ADMIN_KEY;
  });

  it("LIVE mode refuses without LIVE GO even with transport injection", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: officialCostsPage(),
    }));
    // Injected transport with wrong mode for LIVE ⇒ blocked.
    const r = await runAdminCollection({
      config: {
        adminApiKey: "sk-admin-test",
        organizationScope: "org:t",
        mode: "LIVE",
        liveAdminCallsAuthorized: false,
        transport: transport as unknown as AdminHttpTransport,
      },
      path: "/organization/costs",
      query: { start_time: "1" },
    });
    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
  });

  it("TEST_SUBSTITUTED works without real Admin key", async () => {
    const transport = sub(async () => ({
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
      query: { start_time: "1" },
    });
    expect(r.status).toBe("READY");
    expect(r.snapshots).toHaveLength(2);
  });

  it("blocks unmarked transport on TEST mode", async () => {
    const raw = async () => ({
      status: 200,
      json: officialCostsPage(),
    });
    const r = await runAdminCollection({
      config: {
        adminApiKey: null,
        organizationScope: "org:t",
        mode: "TEST_SUBSTITUTED",
        liveAdminCallsAuthorized: false,
        transport: raw as unknown as AdminHttpTransport,
      },
      path: "/organization/costs",
      query: { start_time: "1" },
    });
    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
    expect(r.lastError).toContain("BLOCKED_TEST_TRANSPORT_REQUIRED");
  });

  it("refuses /organization/usage/responses (nonexistent)", async () => {
    const transport = sub(async () => ({
      status: 200,
      json: { object: "page", data: [] },
    }));
    const r = await runAdminCollection({
      config: {
        adminApiKey: null,
        organizationScope: "org:t",
        mode: "TEST_SUBSTITUTED",
        liveAdminCallsAuthorized: false,
        transport,
      },
      path: "/organization/usage/responses",
      query: { start_time: "1" },
    });
    expect(r.status).toBe("ERROR");
    expect(r.lastError).toContain("ADMIN_PATH_NOT_ALLOWLISTED");
  });

  it("paginates official-shaped costs and sums only attributed project", async () => {
    let calls = 0;
    const transport = sub(async ({ path }) => {
      calls += 1;
      expect(path).toBe("/organization/costs");
      if (calls === 1) {
        return {
          status: 200,
          json: officialCostsPage({ hasMore: true, next: "page_2" }),
        };
      }
      return {
        status: 200,
        json: {
          object: "page",
          data: [
            {
              object: "bucket",
              start_time: 1_700_086_400,
              end_time: 1_700_172_800,
              results: [
                {
                  object: "organization.costs.result",
                  amount: { value: 0.11, currency: "usd" },
                  project_id: "proj_a",
                },
              ],
            },
          ],
          has_more: false,
          next_page: null,
        },
      };
    });

    const r = await runAdminCollection({
      config: {
        adminApiKey: null,
        organizationScope: "org:test",
        mode: "TEST_SUBSTITUTED",
        liveAdminCallsAuthorized: false,
        transport,
      },
      path: "/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
    });
    expect(r.status).toBe("READY");
    expect(r.pagesFetched).toBe(2);
    expect(listAdminCollectorSnapshots()).toHaveLength(3);

    const refused = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
      projectId: null,
    });
    expect(refused.limits).toContain("ORG_AGGREGATE_SUM_REFUSED_WITHOUT_PROJECT");
    expect(refused.total).toBeNull();

    const sum = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
      projectId: "proj_a",
    });
    expect(sum.total).toBe(decimalAdd("0.42", "0.11"));
    expect(sum.currency).toBe("usd");
  });

  it("detects repeated cursor as PARTIAL anomaly", async () => {
    const transport = sub(async () => ({
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

  it("reconcile requires full evidence — flag alone is insufficient", () => {
    const rec = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.80",
      providerCostUsd: "0.86",
      scope: {
        organizationMatches: true,
        organizationIdentityProven: true,
        projectIdsOverlap: false,
        projectAttributionProven: false,
        apiKeyIdsOverlap: false,
        periodOverlap: true,
        periodEqual: false,
        currencyMatches: true,
        providerCurrency: "usd",
        surfacesRequested: ["/organization/costs"],
        groupingCompatible: true,
        coverageComplete: true,
        freshnessAcceptable: true,
        evidenceNotes: ["SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"],
      },
    });
    expect(rec.status).toBe("NON_COMPARABLE");
    expect(rec.deltaUsd).toBeNull();

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
  });
});
