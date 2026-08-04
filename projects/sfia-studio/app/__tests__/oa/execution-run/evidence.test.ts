/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "@/lib/oa/execution-run";

describe("D2-D1 evidence and disclosure", () => {
  it("distinguishes sources honestly", () => {
    expect(assertSourceHonest("fixture", "fixture")).toBe(true);
    expect(assertSourceHonest("fixture", "real")).toBe(false);
  });

  it("partial cannot succeed", () => {
    expect(canSucceed("partial")).toBe(false);
    expect(canSucceed("complete")).toBe(true);
  });

  it("creates official evidence without secrets", () => {
    const e = createOfficialEvidence({
      evidenceId: "evidence:1",
      runId: "run:1",
      correlationId: "corr:1",
      source: "fixture",
      completeness: "complete",
      producedAt: "2026-08-03T20:00:00.000Z",
      summary: "ok",
    });
    expect(e.official).toBe(true);
    expect(JSON.stringify(e)).not.toMatch(/sk-|password/i);
  });

  it("marks process-local disclosure", () => {
    const d = createSourceDisclosure({ source: "fixture", providerLane: "ai" });
    expect(d.processLocalMemory).toBe(true);
  });

  it("usage unavailable when not validated", () => {
    expect(usageUnavailable("missing").status).toBe("unavailable");
  });

  it("validates ISO timestamps", () => {
    expect(isIsoTimestamp("2026-08-03T20:00:00.000Z")).toBe(true);
    expect(isIsoTimestamp("not-a-date")).toBe(false);
  });
});
