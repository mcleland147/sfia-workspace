/**
 * ML5 E03 — provider usage idempotence + ordinal uniqueness (PostgreSQL).
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
});

import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { providerUsageObservations } from "@/db/schema";
import {
  recordNoraProviderUsageFromRunResult,
  recordProviderUsageObservation,
} from "@/domains/conversation/usage-accounting";

describe("ML5 E03 — usage idempotence (PostgreSQL)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
  });

  it("records two distinct request ordinals when callOrdinal base is set", async () => {
    const generationId = `gen_ord_${Date.now()}`;
    const attemptId = `att_ord_${Date.now()}`;
    const runResult = {
      state: {
        usage: {
          requests: 2,
          inputTokens: 300,
          outputTokens: 40,
          requestUsageEntries: [
            {
              inputTokens: 100,
              outputTokens: 20,
              inputTokensDetails: [{ cached_tokens: 0 }],
            },
            {
              inputTokens: 200,
              outputTokens: 20,
              inputTokensDetails: [{ cached_tokens: 0 }],
            },
          ],
        },
      },
    };

    const first = await recordNoraProviderUsageFromRunResult({
      runResult,
      status: "succeeded",
      generationId,
      attemptId,
      operation: "test.ordinal_batch",
      callOrdinal: 0,
      modelRequested: "gpt-6.2-sol",
      modelApplied: "gpt-6.2-sol",
      segmentIndex: 0,
    });
    expect(first.inserted).toBe(true);

    const rows = await db
      .select()
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(rows).toHaveLength(2);
    expect(new Set(rows.map((r) => r.idempotencyKey)).size).toBe(2);

    // Replay must not duplicate.
    const replay = await recordNoraProviderUsageFromRunResult({
      runResult,
      status: "succeeded",
      generationId,
      attemptId,
      operation: "test.ordinal_batch",
      callOrdinal: 0,
      modelRequested: "gpt-6.2-sol",
      modelApplied: "gpt-6.2-sol",
      segmentIndex: 0,
    });
    expect(replay.inserted).toBe(false);
    expect(replay.id).toBe("");

    const after = await db
      .select({ c: sql<number>`count(*)::int` })
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(after[0]!.c).toBe(2);
  });

  it("conflict insert returns empty id (no fabricated persistent UUID)", async () => {
    const key = `idem_conflict_${Date.now()}`;
    const a = await recordProviderUsageObservation({
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: key,
      modelRequested: "gpt-6-luna",
      modelApplied: "gpt-6-luna",
      inputTokens: 10,
      outputTokens: 5,
      cachedInputTokens: 0,
      providerRequests: 1,
      operation: "test.conflict",
    });
    expect(a.inserted).toBe(true);
    expect(a.id.length).toBeGreaterThan(0);

    const b = await recordProviderUsageObservation({
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: key,
      modelRequested: "gpt-6-luna",
      modelApplied: "gpt-6-luna",
      inputTokens: 10,
      outputTokens: 5,
      cachedInputTokens: 0,
      providerRequests: 1,
      operation: "test.conflict",
    });
    expect(b.inserted).toBe(false);
    expect(b.id).toBe("");
  });

  it("unknown request count is GENERATION_AGGREGATE not REQUEST", async () => {
    const generationId = `gen_unk_${Date.now()}`;
    const attemptId = `att_unk_${Date.now()}`;
    const r = await recordNoraProviderUsageFromRunResult({
      runResult: {
        state: {
          usage: {
            // requests omitted → unknown
            inputTokens: 50,
            outputTokens: 10,
          },
        },
      },
      status: "succeeded",
      generationId,
      attemptId,
      operation: "test.unknown_requests",
      modelRequested: "gpt-6.1-terra",
      modelApplied: "gpt-6.1-terra",
      segmentIndex: 0,
    });
    expect(r.inserted).toBe(true);
    const rows = await db
      .select()
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(rows).toHaveLength(1);
    expect(rows[0]!.granularity).toBe("GENERATION_AGGREGATE");
    expect(rows[0]!.limitsJson).toContain("REQUEST_COUNT_UNKNOWN");
  });
});
