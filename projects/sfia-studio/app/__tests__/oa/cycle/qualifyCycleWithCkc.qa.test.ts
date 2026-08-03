/**
 * V3.1-D2-C independent Delivery reinforcement.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { FixedClock } from "@/lib/oa/doctrine";
import {
  CKC_REFERENCE_MANIFEST,
  CkcQualificationResolver,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  MemoryCycleAuditJournal,
  createCkcQualificationServices,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type QualifyCycleExecutor,
  type QualifyCycleWithCkcRequest,
} from "@/lib/oa/cycle";
import { describe, expect, it, vi } from "vitest";

const NOW = "2026-08-03T07:20:00.000Z";

function request(
  cycleTypeId: string,
  signalOverrides: Partial<QualifyCycleWithCkcRequest["signals"]> = {},
): QualifyCycleWithCkcRequest {
  return {
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:${cycleTypeId}`,
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: false,
      ...signalOverrides,
    },
  };
}

function projection(cycleTypeId = "cyc:delivery") {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:mutable-proof",
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

describe("V3.1-D2-C integrated A → B → C", () => {
  it.each([
    ["cyc:framing", { lowRiskBounded: true }, "Light"],
    ["cyc:technical-architecture", { securityImpact: true }, "Critical"],
    ["cyc:delivery", { lowRiskBounded: false }, "Standard"],
  ] as const)("qualifies %s as %s through the real read-only factory", async (
    cycleTypeId,
    signals,
    expectedProfile,
  ) => {
    const audit = new MemoryCycleAuditJournal();
    const services = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
    });

    const result = await services.qualifyCycleWithCkc.execute(
      request(cycleTypeId, signals),
    );

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.recommendedProfile).toBe(expectedProfile);
    expect(result.proof.consumed).toBe(true);
    expect(result.isMorrisDecision).toBe(false);
    expect(result.qualifiedAt).toBe(NOW);
    expect(audit.events.filter((event) => event.event === "oa.cycle.qualified"))
      .toHaveLength(1);
  });

  it("marks capitalization through cycleTypeId without a new profile enum", async () => {
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    }).qualifyCycleWithCkc.execute(request("cyc:capitalization"));

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.recommendedProfile).toBe("Standard");
    expect(result.capitalizationViaCycleTypeId).toBe(true);
    expect(result.isMorrisDecision).toBe(false);
  });

  it("uses the authorized synthetic fallback and retains its disclosure", async () => {
    const manifest: CkcReferenceManifest = Object.freeze({
      entries: Object.freeze(
        CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.level === "detailed" &&
          entry.reference.includes("cadrage")
            ? Object.freeze({ ...entry, availability: "unavailable" as const })
            : entry,
        ),
      ),
    });
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver: new CkcQualificationResolver(manifest),
    }).qualifyCycleWithCkc.execute(
      request("cyc:framing", { lowRiskBounded: true }),
    );

    expect(result.state).toBe("success");
    if (result.state !== "success") throw new Error(result.message);
    expect(result.detailedStatus).toBe("resolved_fallback_synthetic");
    expect(result.proof.fallbackUsed).toBe(true);
    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
  });

  it("fails closed when the resolver cannot produce a consumable proof", async () => {
    const qualifyCycle = {
      execute: vi.fn<QualifyCycleExecutor["execute"]>(),
    };
    const resolver = new CkcQualificationResolver(
      Object.freeze({
        entries: Object.freeze(
          CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.level === "synthetic"
              ? Object.freeze({
                  ...entry,
                  availability: "unavailable" as const,
                })
              : entry,
          ),
        ),
      }),
    );
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver,
      qualifyCycle,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "CKC_SYNTHETIC_INVALID",
    });
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("converts hostile audit behavior to a safe internal failure without recursion", async () => {
    const events: CycleAuditEvent[] = [];
    const audit: CycleAuditPort = {
      append(event) {
        events.push(event);
        if (event.event === "oa.cycle.qualified") {
          throw new Error("hostile raw secret");
        }
      },
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
      resolver: new CkcQualificationResolver(),
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
      message: "The CKC qualification could not be completed.",
    });
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(JSON.stringify(result)).not.toContain("hostile raw secret");
    expect(events.filter((event) => event.event === "oa.cycle.qualified"))
      .toHaveLength(1);
    expect(events.filter((event) => event.event === "oa.ckc.request_failed"))
      .toHaveLength(0);
  });

  it("does not re-emit after the D2-B resolver reports an audit failure", async () => {
    let appendCalls = 0;
    const audit: CycleAuditPort = {
      append() {
        appendCalls += 1;
        throw new Error("audit unavailable");
      },
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
    });
    expect(appendCalls).toBe(1);
  });

  it("emits request_failed for an ordinary executor exception while audit is healthy", async () => {
    const audit = new MemoryCycleAuditJournal();
    const qualifyCycle = {
      execute: vi
        .fn<QualifyCycleExecutor["execute"]>()
        .mockRejectedValue(new Error("ordinary dependency failure")),
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit,
      qualifyCycle,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
    });
    expect(
      audit.events.filter((event) => event.event === "oa.ckc.request_failed"),
    ).toHaveLength(1);
    expect(JSON.stringify(result)).not.toContain("ordinary dependency failure");
  });

  it("rejects a mutable injected proof instead of exposing its alias", async () => {
    const canonical = new CkcQualificationResolver().resolve({
      projection: projection(),
      resolvedAt: NOW,
    });
    if (!canonical.ok) throw new Error(canonical.error.message);
    const mutableProof = {
      ...canonical.proof,
      disclosures: [...canonical.proof.disclosures],
    };
    const qualifyCycle = {
      execute: vi.fn<QualifyCycleExecutor["execute"]>(),
    };
    const result = await createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
      resolver: {
        resolve: () => ({
          ok: true as const,
          resolution: canonical.resolution,
          proof: mutableProof,
        }),
      },
      qualifyCycle,
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
    });
    expect(qualifyCycle.execute).not.toHaveBeenCalled();
  });

  it("normalizes a hostile clock without exposing the exception", async () => {
    const result = await createCkcQualificationServices({
      clock: {
        nowIso() {
          throw new Error("hostile clock secret");
        },
      },
      audit: new MemoryCycleAuditJournal(),
    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));

    expect(result).toMatchObject({
      state: "failure",
      code: "D2_INTERNAL_ERROR",
      message: "The CKC qualification could not be completed.",
      failedAt: "1970-01-01T00:00:00.000Z",
    });
    expect(JSON.stringify(result)).not.toContain("hostile clock secret");
  });

  it("keeps the factory and new modules read-only and free of forbidden imports", () => {
    const root = path.resolve(__dirname, "../../../lib/oa/cycle");
    const indexSource = readFileSync(path.join(root, "index.ts"), "utf8");
    const resultSource = readFileSync(
      path.join(root, "domain/ckcQualificationResult.ts"),
      "utf8",
    );
    const bridgeSource = readFileSync(
      path.join(root, "application/qualifyCycleWithCkc.ts"),
      "utf8",
    );

    expect(indexSource).toContain("createCkcQualificationServices");
    expect(indexSource).toContain("qualifyCycleWithCkc");
    const factory = createCkcQualificationServices({
      clock: new FixedClock(NOW),
      audit: new MemoryCycleAuditJournal(),
    });
    expect(Object.keys(factory).sort()).toEqual([
      "audit",
      "qualifyCycleWithCkc",
      "resolver",
    ]);
    for (const source of [resultSource, bridgeSource]) {
      expect(source).not.toMatch(
        /CreateCycle|MemoryCycleStore|ProjectServices|Repository|node:crypto|node:fs|from ["']next|from ["']react|Markdown/,
      );
    }
  });
});
