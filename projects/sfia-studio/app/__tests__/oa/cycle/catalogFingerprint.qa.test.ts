/**
 * V3.1-D2-A — Independent QA reinforcement for HASH-A fingerprint.
 * Production and Delivery tests must remain untouched.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT,
  projectCatalogFingerprint,
  serializeCatalogFingerprint,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function cloneCatalog(
  mutate?: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate?.(entries);
  return { version: CYCLE_TYPE_CATALOG.version, entries };
}

function sha256(serialized: string): string {
  return `sha256:${createHash("sha256").update(serialized).digest("hex")}`;
}

describe("V3.1-D2-A QA — catalog fingerprint", () => {
  it("uses the exact HASH-A format sha256:<64 lowercase hex>", () => {
    expect(CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT).toBe(
      "sha256-canonical-json-v1",
    );
    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
  });

  it("recomputes SHA-256 from serializeCatalogFingerprint reproducibly", () => {
    const first = serializeCatalogFingerprint();
    const second = serializeCatalogFingerprint();
    expect(second).toBe(first);
    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
    expect(sha256(second)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
  });

  it("projects fifteen entries in contractual order with frozen structure", () => {
    const projection = projectCatalogFingerprint();
    expect(projection).toHaveLength(15);
    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
    );
    expect(Object.isFrozen(projection)).toBe(true);
    for (const entry of projection) {
      expect(Object.isFrozen(entry)).toBe(true);
      expect(Object.isFrozen(entry.ckc)).toBe(true);
    }
  });

  it("refuses or ignores mutation of the fingerprint projection", () => {
    const projection = projectCatalogFingerprint();
    const originalId = projection[0].cycleTypeId;
    expect(() => {
      (projection as unknown as CatalogFingerprintEntryMutable[])[0] = {
        ...projection[0],
        cycleTypeId: "cyc:tampered",
      };
    }).toThrow();
    expect(() => {
      (projection[0] as { cycleTypeId: string }).cycleTypeId = "cyc:tampered";
    }).toThrow();
    expect(() => {
      (projection[0].ckc as { primaryReference: string }).primaryReference =
        "method/tampered.md";
    }).toThrow();
    expect(projection[0].cycleTypeId).toBe(originalId);
  });

  it.each([
    [
      "cycleTypeId",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        cycleTypeId: `${entry.cycleTypeId}-x`,
      }),
    ],
    [
      "canonicalKey",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        canonicalKey: `${entry.canonicalKey}-x`,
      }),
    ],
    [
      "lifecycleStatus",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        lifecycleStatus: "deprecated",
      }),
    ],
    [
      "methodCycleNumber",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        methodCycleNumber: (entry.methodCycleNumber % 15) + 1,
      }),
    ],
    [
      "mandatory",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        ckc: { ...entry.ckc, mandatory: false as unknown as true },
      }),
    ],
    [
      "primaryLevel",
      (entry: CycleTypeDefinition): CycleTypeDefinition =>
        entry.ckc.primaryLevel === "detailed"
          ? {
              ...entry,
              ckc: {
                mandatory: true,
                primaryLevel: "synthetic",
                primaryReference:
                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
                fallbackPolicy: "none",
                executionAuthority: false,
                doctrineStatus: "method-candidate",
                unavailableBehavior: "fail-closed",
              },
            }
          : {
              ...entry,
              ckc: {
                mandatory: true,
                primaryLevel: "detailed",
                primaryReference: entry.ckc.primaryReference,
                fallbackPolicy: "synthetic_map",
                fallbackReference:
                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
                executionAuthority: false,
                doctrineStatus: "method-candidate",
                unavailableBehavior: "fail-closed",
              },
            },
    ],
    [
      "primaryReference",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        ckc: {
          ...entry.ckc,
          primaryReference: `${entry.ckc.primaryReference}-x`,
        },
      }),
    ],
    [
      "fallbackPolicy",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        ckc: {
          ...entry.ckc,
          fallbackPolicy:
            entry.ckc.fallbackPolicy === "none" ? "synthetic_map" : "none",
        },
      }),
    ],
    [
      "fallbackReference",
      (entry: CycleTypeDefinition): CycleTypeDefinition =>
        entry.ckc.fallbackReference === undefined
          ? {
              ...entry,
              ckc: {
                ...entry.ckc,
                fallbackReference:
                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
              },
            }
          : {
              ...entry,
              ckc: {
                mandatory: entry.ckc.mandatory,
                primaryLevel: entry.ckc.primaryLevel,
                primaryReference: entry.ckc.primaryReference,
                fallbackPolicy: entry.ckc.fallbackPolicy,
                executionAuthority: entry.ckc.executionAuthority,
                doctrineStatus: entry.ckc.doctrineStatus,
                unavailableBehavior: entry.ckc.unavailableBehavior,
              },
            },
    ],
    [
      "executionAuthority",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        ckc: {
          ...entry.ckc,
          executionAuthority: true as unknown as false,
        },
      }),
    ],
    [
      "doctrineStatus",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        ckc: {
          ...entry.ckc,
          doctrineStatus: "baseline" as "method-candidate",
        },
      }),
    ],
    [
      "unavailableBehavior",
      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
        ...entry,
        ckc: {
          ...entry.ckc,
          unavailableBehavior: "soft-fail" as "fail-closed",
        },
      }),
    ],
  ])("detects contractual field change: %s", (_field, mutateEntry) => {
    const changed = cloneCatalog((entries) => {
      entries[0] = mutateEntry(entries[0]);
    });
    expect(serializeCatalogFingerprint(changed)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it.each([
    ["label", { label: "Changed label" }],
    ["shortDescription", { shortDescription: "Changed description" }],
    ["displayOrder", { displayOrder: 99 }],
    ["methodReference", { methodReference: "method/changed.md §9.9" }],
    ["aliases", { aliases: ["alias:changed"] }],
  ] as const)("ignores excluded field change: %s", (_field, patch) => {
    const changed = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], ...patch };
    });
    expect(serializeCatalogFingerprint(changed)).toBe(
      serializeCatalogFingerprint(),
    );
    expect(sha256(serializeCatalogFingerprint(changed))).toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("normalizes absent fallbackReference to explicit null", () => {
    const synthetic = projectCatalogFingerprint().find(
      (entry) => entry.ckc.primaryLevel === "synthetic",
    );
    expect(synthetic?.ckc.fallbackReference).toBeNull();
    expect(serializeCatalogFingerprint()).toContain('"fallbackReference":null');
  });

  it("detects reordering of contractual entries", () => {
    const reordered: CycleTypeCatalog = {
      version: CYCLE_TYPE_CATALOG.version,
      entries: [
        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
        ...CYCLE_TYPE_CATALOG.entries.slice(2),
      ].map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    };
    expect(serializeCatalogFingerprint(reordered)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expect(sha256(serializeCatalogFingerprint(reordered))).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("does not mutate the authoritative D1 catalog", () => {
    const before = serializeCatalogFingerprint();
    const first = CYCLE_TYPE_CATALOG.entries[0];
    projectCatalogFingerprint();
    serializeCatalogFingerprint();
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
    expect(Object.isFrozen(first)).toBe(true);
  });

  it("keeps production fingerprint module free of crypto, fs, Next and infra", () => {
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogFingerprint.ts",
      ),
      "utf8",
    );
    expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
    expect(source).not.toMatch(/infrastructure\//);
  });
});

type CatalogFingerprintEntryMutable = {
  cycleTypeId: string;
  canonicalKey: string;
  lifecycleStatus: string;
  methodCycleNumber: number;
  ckc: Record<string, unknown>;
};
