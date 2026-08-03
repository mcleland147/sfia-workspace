/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function withAvailability(
  references: readonly string[],
  availability: "available" | "unavailable",
): CkcReferenceManifest {
  return {
    entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
      references.includes(entry.reference)
        ? { ...entry, availability }
        : entry,
    ),
  };
}

describe("V3.1-D2-B CKC qualification resolver", () => {
  it.each([
    "cyc:framing",
    "cyc:functional-design",
    "cyc:technical-architecture",
    "cyc:qa-validation",
  ])("resolves detailed pilot %s", (cycleTypeId) => {
    const selected = projection(cycleTypeId);
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_detailed",
      level: "detailed",
      status: "resolved",
      source: "repository_candidate",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
      executionAuthority: false,
    });
    expect(result.proof.consumed).toBe(true);
    expect(result.proof.disclosures).toEqual([]);
  });

  it("resolves a synthetic primary without a second fallback", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_synthetic",
      level: "synthetic",
      status: "synthetic",
      source: "intra_v3_synthetic",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("substitutes only the declared synthetic fallback", () => {
    const selected = projection("cyc:framing");
    const resolver = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    );
    const result = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      usedReference: selected.ckc.fallbackReference,
      fallbackUsed: true,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("fails closed when detailed primary and fallback are unavailable", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver(
      withAvailability(
        [
          selected.ckc.primaryReference,
          selected.ckc.fallbackReference as string,
        ],
        "unavailable",
      ),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_UNAVAILABLE");
    expect(result.resolution).toMatchObject({
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      exploitable: false,
    });
    expect(result).not.toHaveProperty("proof");
  });

  it("fails closed when the synthetic primary is unavailable", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_SYNTHETIC_INVALID");
    expect(result).not.toHaveProperty("proof");
  });

  it("rejects non-allowlisted and extended mappings without reflecting input", () => {
    const selected = projection("cyc:framing");
    for (const ckc of [
      { ...selected.ckc, primaryReference: "caller/private/path.md" },
      { ...selected.ckc, dynamicSource: true },
      { ...selected.ckc, mandatory: false },
      { ...selected.ckc, unavailableBehavior: "fail-open" },
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: {
          ...selected,
          ckc,
        } as unknown as ValidatedCycleTypeProjection,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (result.ok) throw new Error("Expected invalid mapping");
      expect(result.error.code).toBe("CKC_MAPPING_INVALID");
      expect(result.error.message).not.toContain("caller/private");
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("forbids execution authority in mapping and manifest", () => {
    const selected = projection("cyc:framing");
    const mappingResult = new CkcQualificationResolver().resolve({
      projection: {
        ...selected,
        ckc: { ...selected.ckc, executionAuthority: true },
      } as unknown as ValidatedCycleTypeProjection,
      resolvedAt: RESOLVED_AT,
    });
    expect(mappingResult.ok).toBe(false);
    if (!mappingResult.ok) {
      expect(mappingResult.error.code).toBe(
        "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
      );
    }

    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const manifestResult = new CkcQualificationResolver(manifest).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(manifestResult.ok).toBe(false);
    if (!manifestResult.ok) {
      // Global manifest validation (F-QA-05) rejects before per-entry lookup.
      expect(manifestResult.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
  });

  it("rejects invalid resolvedAt before resolution (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "not-an-iso-timestamp",
      "2026-08-02",
      "2026-08-02T21:00:00",
      "2026-02-31T00:00:00.000Z",
      "",
      "   ",
      " 2026-08-02T19:47:00.000Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }
    }
  });

  it("accepts ISO-8601 resolvedAt with Z, offset and milliseconds (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "2026-08-02T19:47:00.000Z",
      "2026-08-02T21:47:00+02:00",
      "2026-08-02T19:47:00.123Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.proof.consumed).toBe(true);
        expect(result.proof.resolvedAt).toBe(resolvedAt);
      }
    }
  });

  it("rejects globally incoherent injected manifests before lookup (F-QA-05)", () => {
    const selected = projection("cyc:framing");
    const base = CKC_REFERENCE_MANIFEST.entries;

    const foreign: CkcReferenceManifest = {
      entries: [
        ...base,
        {
          ...base[0],
          reference: "caller/private/foreign.md",
        },
      ],
    };
    const missingCanonical: CkcReferenceManifest = {
      entries: base.filter(
        (entry) => entry.reference !== selected.ckc.fallbackReference,
      ),
    };
    const duplicate: CkcReferenceManifest = {
      entries: [...base, base[0]],
    };
    const invalidMetaUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({ ...entry, availability: "maybe" } as unknown as typeof entry)
          : entry,
      ),
    };
    const invalidDoctrineUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference !== selected.ckc.primaryReference
          ? ({
              ...entry,
              doctrineStatus: "baseline",
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const authorityUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };

    for (const manifest of [
      foreign,
      missingCanonical,
      duplicate,
      invalidMetaUnselected,
      invalidDoctrineUnselected,
      authorityUnselected,
    ]) {
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result.error.message).not.toContain("foreign");
        expect(result.error.message).not.toContain("caller/private");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("accepts a valid reordered canonical manifest deterministically (F-QA-05)", () => {
    const selected = projection("cyc:delivery");
    const reordered: CkcReferenceManifest = {
      entries: [...CKC_REFERENCE_MANIFEST.entries].reverse(),
    };
    const canonical = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const reorderedResult = new CkcQualificationResolver(reordered).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(canonical.ok).toBe(true);
    expect(reorderedResult.ok).toBe(true);
    expect(reorderedResult).toEqual(canonical);
  });
});
