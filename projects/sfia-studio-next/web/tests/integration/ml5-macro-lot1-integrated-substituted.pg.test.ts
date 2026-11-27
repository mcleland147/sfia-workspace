/**
 * Macro-lot 1 — integrated substituted campaign (Intervention 1).
 * REAL: PostgreSQL DEV · SUBSTITUTED: OpenAI Admin / Responses / WEB / continuity.
 * No LIVE emission. No Admin key. No store=true.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  markSubstitutedAdminTransport,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
} from "@/domains/finops/provider-admin-usage-collector";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
} from "@/domains/finops/provider-admin-usage-repository";
import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";
import {
  beginCampaignEnvelope,
  createFrontierAwareFetch,
  getActiveCampaignEnvelope,
  runWithProviderEmissionStoreAsync,
  assertSdkInvocationAdmission,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";
import {
  configureAgentsSdkTracing,
  getAgentsTracingSinkRecords,
  resetAgentsTracingTestState,
  runWithAgentsTracingCorrelation,
  withAgentsTracingNetworkOracle,
  StudioLocalTraceProcessor,
} from "@/lib/agents-sdk-tracing";
import { createHash } from "node:crypto";

const hasDb = Boolean(process.env.DATABASE_URL?.includes("5433"));

const costsPage = {
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
          project_id: "proj_ml1_integrated",
        },
      ],
    },
  ],
  has_more: false,
  next_page: null,
};

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

describe.skipIf(!hasDb)("ML1 integrated substituted campaign", () => {
  beforeAll(() => {
    resetAdminCollectorStateForTests();
    resetAgentsTracingTestState();
  });

  afterAll(() => {
    resetAdminCollectorStateForTests();
    resetAgentsTracingTestState();
    __resetProviderEmissionFrontierForTests();
    delete process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE;
    delete process.env.SFIA_AGENTS_TRACING_MODE;
  });

  it("collect → PG → FinOps → D3 continuity → tracing → frontier PARTIAL", async () => {
    const work = {
      id: `work_ml1_${Date.now()}`,
      revision: 2,
      ownerToken: "tok_ml1",
      leaseUntil: new Date(Date.now() + 120_000),
      state: {
        intentSummary: "qualify integrated foundation",
        conclusions: ["Acquis durable A"],
        sources: [{ ref: "d4:doc", versionOrSha: "v1" }],
      },
      resources: { inputTokens: 50, outputTokens: 20, segmentCalls: 1 },
    };
    const continuity = buildStudioContinuityFromWork(work);
    expect(continuity.sourceVersions).toEqual(["d4:doc@v1"]);
    expect(continuity.budgets.tokensConsumed).toBe(70);
    expect(continuity.rightsOk).toBe(true);
    expect(continuity.checkpointId).toBe(`ckpt:${work.id}:r2`);

    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: costsPage,
    }));
    const collection = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        organizationScope: "org:ml1-integrated",
        transport,
      }),
      path: "/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
      persistToPg: true,
    });
    expect(collection.status).toBe("READY");
    expect(collection.snapshots.length).toBeGreaterThan(0);
    expect(
      collection.snapshots.every(
        (s) => s.collectionProvenance === "TEST_SUBSTITUTED",
      ),
    ).toBe(true);

    const fromPg = await listAdminSnapshotsFromPg({
      organizationScope: "org:ml1-integrated",
      provenance: "TEST_SUBSTITUTED",
    });
    expect(
      fromPg.some((s) => s.dimensions.project_id === "proj_ml1_integrated"),
    ).toBe(true);

    const freshness = await getAdminCollectionFreshnessFromPg({
      organizationScope: "org:ml1-integrated",
      provenance: "TEST_SUBSTITUTED",
      projectId: "proj_ml1_integrated",
    });
    expect(freshness.snapshotCount).toBeGreaterThan(0);

    process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE = "1";
    const finops = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.4,
      studioEstimationKind: "known",
      snapshots: collection.snapshots,
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:ml1-integrated",
      configuredOrgId: "ml1-integrated",
      configuredProjectId: "proj_ml1_integrated",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: freshness.snapshotCount,
    });
    delete process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE;
    expect(["COMPARABLE", "PARTIAL", "NON_COMPARABLE"]).toContain(
      finops.comparability,
    );

    process.env.SFIA_AGENTS_TRACING_MODE = "local";
    await configureAgentsSdkTracing(process.env);
    const { result: spanOk, traceExportUrls } =
      await withAgentsTracingNetworkOracle(async () =>
        runWithAgentsTracingCorrelation(
          {
            operationId: "op_ml1_int",
            generationId: "gen_ml1_int",
            attemptId: "att_ml1_int",
            workId: work.id,
          },
          async () => {
            const p = new StudioLocalTraceProcessor();
            await p.onSpanEnd({
              traceId: "t_ml1",
              spanId: "s_ml1",
              endedAt: Date.now(),
              spanData: { type: "generation", name: "ml1" },
            });
            return "ok";
          },
        ),
      );
    expect(spanOk).toBe("ok");
    expect(traceExportUrls).toEqual([]);
    expect(
      getAgentsTracingSinkRecords().some(
        (r) => r.correlation.operationId === "op_ml1_int",
      ),
    ).toBe(true);

    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 4,
        maxHostedSearches: 5,
        required: true,
      });
      let call = 0;
      const fakeFetch = (async () => {
        call += 1;
        if (call === 1) {
          return new Response(JSON.stringify({ id: "r1" }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        }
        return new Response(
          JSON.stringify({
            id: "r2",
            tool_usage: { web_search: { num_requests: 1 } },
          }),
          { status: 200, headers: { "content-type": "application/json" } },
        );
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      const prevKey = process.env.OPENAI_API_KEY;
      const prevFp = process.env.SFIA_OPENAI_EXPECTED_KEY_FP;
      const prevLane = process.env.STUDIO_LANE;
      process.env.OPENAI_API_KEY = TEST_KEY;
      process.env.SFIA_OPENAI_EXPECTED_KEY_FP = TEST_FP;
      process.env.STUDIO_LANE = "DEV";
      try {
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const body = JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 50,
          reasoning: { effort: "medium" },
          tools: [{ type: "web_search" }],
          max_tool_calls: 1,
        });
        await gated("https://api.openai.com/v1/responses", {
          method: "POST",
          body,
        });
        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
          "UNKNOWN",
        );
        await gated("https://api.openai.com/v1/responses", {
          method: "POST",
          body,
        });
        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
          "PARTIAL",
        );
      } finally {
        if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
        else process.env.OPENAI_API_KEY = prevKey;
        if (prevFp === undefined) delete process.env.SFIA_OPENAI_EXPECTED_KEY_FP;
        else process.env.SFIA_OPENAI_EXPECTED_KEY_FP = prevFp;
        if (prevLane === undefined) delete process.env.STUDIO_LANE;
        else process.env.STUDIO_LANE = prevLane;
      }
    });
  });

  it("rights revoked → FinOps UNAVAILABLE with no amount disclosure", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 1,
      studioEstimationKind: "known",
      snapshots: [],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:x",
      configuredOrgId: "x",
      configuredProjectId: "p",
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.providerCostUsd).toBeNull();
    expect(r.disclosed).toBe(false);
  });
});
