/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

class AuditJournal implements CycleAuditPort {
  readonly events: CycleAuditEvent[] = [];
  append(event: CycleAuditEvent): void {
    this.events.push(event);
  }
}

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:qa:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

describe("V3.1-D2-B resolver QA", () => {
  it("emits minimal success, fallback and consumption events", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.fallback_used",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
    for (const event of audit.events) {
      expect(event).toMatchObject({
        ts: RESOLVED_AT,
        correlationId: selected.correlationId,
        cycleTypeId: selected.cycleTypeId,
      });
      expect(event).not.toHaveProperty("objective");
      expect(event).not.toHaveProperty("scope");
      expect(event).not.toHaveProperty("profile");
      expect(event).not.toHaveProperty("reference");
    }
  });

  it("emits fail-closed failure and consumption rejection", () => {
    const selected = projection("cyc:delivery");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_failed",
      "oa.ckc.consumption_rejected",
    ]);
    expect(audit.events[1]).toMatchObject({
      detailCode: "CKC_SYNTHETIC_INVALID",
      result: "error",
    });
  });

  it("fails closed for incoherent synthetic manifest metadata", () => {
    const selected = projection("cyc:delivery");
    for (const replacement of [
      { level: "detailed" },
      { doctrineStatus: "baseline" },
      { source: "repository_candidate" },
    ]) {
      const manifest: CkcReferenceManifest = {
        entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.reference === selected.ckc.primaryReference
            ? ({ ...entry, ...replacement } as typeof entry)
            : entry,
        ),
      };
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        // F-QA-05: global manifest validation rejects before synthetic lookup.
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("maps unexpected failures to a safe D2 error", () => {
    const selected = projection("cyc:delivery");
    const throwingEntries = new Proxy(CKC_REFERENCE_MANIFEST.entries, {
      get() {
        throw new Error(
          "/Users/private/secret.md should never cross the boundary",
        );
      },
    });
    const result = new CkcQualificationResolver({
      entries: throwingEntries,
    }).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("D2_INTERNAL_ERROR");
      expect(result.error.message).not.toContain("/Users/");
      expect(result.error.message).not.toContain("secret");
    }
  });

  it("is deeply deterministic for identical explicit inputs", () => {
    const selected = projection("cyc:delivery");
    const resolver = new CkcQualificationResolver();
    const first = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const second = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(second).toEqual(first);
  });

  it("keeps the historical audit event contract accepted", () => {
    const audit = new AuditJournal();
    audit.append({
      event: "oa.ckc.resolved",
      ts: RESOLVED_AT,
      correlationId: "cor:historical",
      cycleTypeId: "cyc:delivery",
      level: "synthetic",
      status: "synthetic",
      result: "ok",
      durationMs: 0,
    });
    expect(audit.events[0].event).toBe("oa.ckc.resolved");
  });

  it("keeps pure resolve when audit is undefined (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.proof.consumed).toBe(true);
    }
  });

  it("keeps nominal behavior when audit append succeeds (F-QA-04)", () => {
    const selected = projection("cyc:delivery");
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(
      CKC_REFERENCE_MANIFEST,
      audit,
    ).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
  });

  it("returns sanitized D2_INTERNAL_ERROR for every audit append throw (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const hostile =
      "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke";
    const scenarios: Array<{
      readonly failingEvent:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      readonly expectedAppendCalls: number;
      readonly manifest: CkcReferenceManifest;
    }> = [
      {
        failingEvent: "oa.ckc.resolution_started",
        expectedAppendCalls: 1,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.resolution_succeeded",
        expectedAppendCalls: 2,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.fallback_used",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_validated",
        expectedAppendCalls: 4,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.resolution_failed",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_rejected",
        expectedAppendCalls: 3,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
    ];

    for (const scenario of scenarios) {
      let appendCalls = 0;
      const seenAfterThrow: string[] = [];
      let thrown = false;
      const audit: CycleAuditPort = {
        append(event) {
          appendCalls += 1;
          if (thrown) {
            seenAfterThrow.push(event.event);
          }
          if (event.event === scenario.failingEvent) {
            thrown = true;
            throw new Error(hostile);
          }
        },
      };

      const result = new CkcQualificationResolver(
        scenario.manifest,
        audit,
      ).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("D2_INTERNAL_ERROR");
        expect(result.error.blocking).toBe(true);
        expect(result.error.retryable).toBe(true);
        expect(result.error.recoverable).toBe(true);
        expect(result.error.correlationId).toBe(selected.correlationId);
        expect(result.error.cycleTypeId).toBe(selected.cycleTypeId);
        expect(result.error.message).toBe(
          "The CKC resolution could not be completed.",
        );
        expect(result.error.message).not.toContain("/Users/");
        expect(result.error.message).not.toContain("secret");
        expect(result.error.message).not.toContain("sk-hostile");
        expect(result.error.message).not.toContain("payload");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }

      expect(appendCalls).toBe(scenario.expectedAppendCalls);
      expect(seenAfterThrow).toEqual([]);
    }
  });
});
