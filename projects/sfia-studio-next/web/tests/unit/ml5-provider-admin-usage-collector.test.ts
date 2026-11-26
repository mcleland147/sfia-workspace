import { afterEach, describe, expect, it } from "vitest";
import {
  collectAdminUsagePage,
  resetAdminCollectorStateForTests,
  resolveAdminCollectorConfig,
  runAdminCollection,
  upsertAdminBuckets,
  listAdminCollectorBuckets,
  reconcileFinOpsCosts,
  type AdminHttpTransport,
} from "@/domains/finops/provider-admin-usage-collector";

describe("provider-admin-usage-collector", () => {
  afterEach(() => {
    resetAdminCollectorStateForTests();
  });

  it("blocks without secret", async () => {
    const r = await runAdminCollection({
      config: {
        adminApiKey: null,
        organizationScope: "org:test",
        liveAdminCallsAuthorized: true,
      },
      path: "/v1/organization/costs",
      query: { start_time: "1", limit: "10" },
    });
    expect(r.status).toBe("BLOCKED_NO_SECRET");
  });

  it("blocks without LIVE GO when no substituted transport", async () => {
    const r = await runAdminCollection({
      config: {
        adminApiKey: "sk-admin-test",
        organizationScope: "org:test",
        liveAdminCallsAuthorized: false,
      },
      path: "/v1/organization/costs",
      query: { start_time: "1" },
    });
    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
  });

  it("refuses non-allowlisted paths", async () => {
    const transport: AdminHttpTransport = async () => ({
      status: 200,
      json: { data: [] },
    });
    await expect(
      collectAdminUsagePage({
        config: {
          adminApiKey: "sk-admin-test",
          organizationScope: "org:test",
          liveAdminCallsAuthorized: false,
          transport,
        },
        path: "/v1/organization/projects",
        query: {},
        collectionId: "acol_x",
      }),
    ).rejects.toThrow(/ADMIN_PATH_NOT_ALLOWLISTED/);
  });

  it("paginates via substituted transport and upserts idempotently", async () => {
    let calls = 0;
    const transport: AdminHttpTransport = async ({ path, headers }) => {
      calls += 1;
      expect(path).toBe("/v1/organization/costs");
      expect(headers.Authorization).toBe("Bearer sk-admin-test");
      if (calls === 1) {
        return {
          status: 200,
          json: {
            data: [
              {
                start_time: 1_700_000_000,
                end_time: 1_700_086_400,
                amount: { value: 0.42, currency: "usd" },
                project_id: "proj_a",
              },
            ],
            has_more: true,
            next_page: "page_2",
          },
        };
      }
      return {
        status: 200,
        json: {
          data: [
            {
              start_time: 1_700_086_400,
              end_time: 1_700_172_800,
              amount: { value: 0.11, currency: "usd" },
              project_id: "proj_a",
            },
          ],
          has_more: false,
        },
      };
    };

    const r = await runAdminCollection({
      config: {
        adminApiKey: "sk-admin-test",
        organizationScope: "org:test",
        liveAdminCallsAuthorized: false,
        transport,
      },
      path: "/v1/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
    });
    expect(r.status).toBe("READY");
    expect(r.pagesFetched).toBe(2);
    expect(r.buckets).toHaveLength(2);
    expect(listAdminCollectorBuckets()).toHaveLength(2);

    // Idempotent re-run replaces, does not double.
    await runAdminCollection({
      config: {
        adminApiKey: "sk-admin-test",
        organizationScope: "org:test",
        liveAdminCallsAuthorized: false,
        transport: async () => ({
          status: 200,
          json: {
            data: [
              {
                start_time: 1_700_000_000,
                end_time: 1_700_086_400,
                amount: { value: 0.5, currency: "usd" },
                project_id: "proj_a",
              },
            ],
          },
        }),
      },
      path: "/v1/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
    });
    const buckets = listAdminCollectorBuckets().filter(
      (b) => b.intervalStartUtc === new Date(1_700_000_000 * 1000).toISOString(),
    );
    expect(buckets).toHaveLength(1);
    expect(buckets[0].value).toBe("0.5");
  });

  it("does not overwrite complete bucket with partial", () => {
    upsertAdminBuckets([
      {
        source: "openai.organization.costs",
        organizationScope: "org:t",
        intervalStartUtc: "2026-01-01T00:00:00.000Z",
        intervalEndUtc: "2026-01-02T00:00:00.000Z",
        granularity: "day",
        dimensions: { project_id: "p", api_key_id: null, model: null },
        unit: "currency",
        currency: "usd",
        value: "1.00",
        completeness: "complete",
        collectedAtUtc: "2026-01-02T01:00:00.000Z",
        collectionId: "a",
      },
    ]);
    upsertAdminBuckets([
      {
        source: "openai.organization.costs",
        organizationScope: "org:t",
        intervalStartUtc: "2026-01-01T00:00:00.000Z",
        intervalEndUtc: "2026-01-02T00:00:00.000Z",
        granularity: "day",
        dimensions: { project_id: "p", api_key_id: null, model: null },
        unit: "currency",
        currency: "usd",
        value: "9.00",
        completeness: "partial",
        collectedAtUtc: "2026-01-02T02:00:00.000Z",
        collectionId: "b",
      },
    ]);
    expect(listAdminCollectorBuckets()[0].value).toBe("1.00");
  });

  it("reconcile requires comparable scope", () => {
    const non = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.80",
      providerCostUsd: "0.86",
      comparable: false,
      reasonIfNot: "LANE_PROJECT_KEY_MAPPING_UNPROVEN",
    });
    expect(non.status).toBe("NON_COMPARABLE");
    expect(non.deltaUsd).toBeNull();

    const ok = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.80",
      providerCostUsd: "0.86",
      comparable: true,
    });
    expect(ok.status).toBe("COMPARABLE");
    expect(ok.deltaUsd).toBe("0.0600000000");
  });

  it("resolveAdminCollectorConfig never enables LIVE outside DEV flag", () => {
    const cfg = resolveAdminCollectorConfig({
      OPENAI_ADMIN_KEY: "sk-admin",
      SFIA_ADMIN_USAGE_LIVE: "1",
      STUDIO_LANE: "RECETTE",
    } as unknown as NodeJS.ProcessEnv);
    expect(cfg.liveAdminCallsAuthorized).toBe(false);
  });
});
