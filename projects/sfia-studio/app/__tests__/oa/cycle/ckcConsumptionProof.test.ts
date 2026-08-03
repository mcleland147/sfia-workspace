/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  buildCkcConsumptionProof,
  projectSelectableCycleType,
  type CkcQualificationResolution,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:proof:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function resolved(
  selected: ValidatedCycleTypeProjection,
  manifest?: CkcReferenceManifest,
): CkcQualificationResolution {
  const outcome = new CkcQualificationResolver(manifest).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  if (!outcome.ok) throw new Error(outcome.error.message);
  return outcome.resolution;
}

describe("V3.1-D2-B CKC consumption proof", () => {
  it.each([
    ["cyc:framing", "resolved_detailed"],
    ["cyc:delivery", "resolved_synthetic"],
  ] as const)("builds immutable proof for %s", (cycleTypeId, status) => {
    const selected = projection(cycleTypeId);
    const result = buildCkcConsumptionProof(selected, resolved(selected));
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: status,
      consumed: true,
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      catalogVersion: selected.catalogVersion,
      catalogHash: selected.catalogHash,
      correlationId: selected.correlationId,
    });
    expect(Object.isFrozen(result.proof)).toBe(true);
    expect(Object.isFrozen(result.proof.disclosures)).toBe(true);
  });

  it("builds a fallback proof with disclosure", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const result = buildCkcConsumptionProof(
      selected,
      resolved(selected, manifest),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      fallbackUsed: true,
      usedReference: selected.ckc.fallbackReference,
      disclosures: ["CKC_FALLBACK_USED"],
      consumed: true,
    });
  });

  it("rejects identity, catalogue and reference mismatches", () => {
    const selected = projection("cyc:framing");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { cycleTypeId: "cyc:other" },
      { catalogVersion: "stale" },
      { catalogHash: "stale" },
      { correlationId: "cor:lost" },
      { expectedPrimaryReference: "other" },
      { usedReference: "other" },
      { fallbackReference: "other" },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects status, T-A2 projection, doctrine and authority mismatches", () => {
    const selected = projection("cyc:delivery");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { fallbackUsed: true },
      { level: "detailed" },
      { status: "resolved" },
      { source: "repository_candidate" },
      { detailedStatus: "unresolved_unavailable", exploitable: false },
      { doctrineStatus: "baseline" as "method-candidate" },
      { executionAuthority: true as false },
      { resolvedAt: "" },
      { usedReference: undefined },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects fallback without CKC_FALLBACK_USED and duplicate disclosure (F-QA-01)", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const valid = resolved(selected, manifest);

    const missing = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: [],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) {
      expect(missing.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(missing).not.toHaveProperty("proof");

    const duplicated = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: ["CKC_FALLBACK_USED", "CKC_FALLBACK_USED"],
    });
    expect(duplicated.ok).toBe(false);
    if (!duplicated.ok) {
      expect(duplicated.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(duplicated).not.toHaveProperty("proof");
  });

  it("rejects CKC_FALLBACK_USED outside fallback statuses (F-QA-02)", () => {
    for (const cycleTypeId of ["cyc:framing", "cyc:delivery"] as const) {
      const selected = projection(cycleTypeId);
      const valid = resolved(selected);
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects incoherent fallbackPolicy against D2-A projection (F-QA-03)", () => {
    const detailed = projection("cyc:framing");
    const detailedValid = resolved(detailed);
    const detailedBad = buildCkcConsumptionProof(detailed, {
      ...detailedValid,
      fallbackPolicy: "none",
    });
    expect(detailedBad.ok).toBe(false);
    if (!detailedBad.ok) {
      expect(detailedBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const synthetic = projection("cyc:delivery");
    const syntheticValid = resolved(synthetic);
    const syntheticBad = buildCkcConsumptionProof(synthetic, {
      ...syntheticValid,
      fallbackPolicy: "intra_v3_only",
    });
    expect(syntheticBad.ok).toBe(false);
    if (!syntheticBad.ok) {
      expect(syntheticBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const fallbackManifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === detailed.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const fallbackValid = resolved(detailed, fallbackManifest);
    const fallbackBad = buildCkcConsumptionProof(detailed, {
      ...fallbackValid,
      fallbackPolicy: "none",
    });
    expect(fallbackBad.ok).toBe(false);
    if (!fallbackBad.ok) {
      expect(fallbackBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    expect(buildCkcConsumptionProof(detailed, detailedValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(synthetic, syntheticValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(detailed, fallbackValid).ok).toBe(true);
  });
});
