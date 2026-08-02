/**
 * V3.1-D2-A — canonical catalog fingerprint tests.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
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

describe("V3.1-D2-A catalog fingerprint", () => {
  it("projects exactly fifteen entries in contractual order", () => {
    const projection = projectCatalogFingerprint();
    expect(projection).toHaveLength(15);
    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
    );
  });

  it("includes only the closed contractual field set", () => {
    for (const entry of projectCatalogFingerprint()) {
      expect(Object.keys(entry)).toEqual([
        "cycleTypeId",
        "canonicalKey",
        "lifecycleStatus",
        "methodCycleNumber",
        "ckc",
      ]);
      expect(Object.keys(entry.ckc)).toEqual([
        "mandatory",
        "primaryLevel",
        "primaryReference",
        "fallbackPolicy",
        "fallbackReference",
        "executionAuthority",
        "doctrineStatus",
        "unavailableBehavior",
      ]);
      expect(entry).not.toHaveProperty("label");
      expect(entry).not.toHaveProperty("shortDescription");
      expect(entry).not.toHaveProperty("displayOrder");
      expect(entry).not.toHaveProperty("methodReference");
      expect(entry).not.toHaveProperty("aliases");
    }
  });

  it("serializes deterministically and matches the static SHA-256", () => {
    const first = serializeCatalogFingerprint();
    const second = serializeCatalogFingerprint();
    expect(second).toBe(first);
    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
  });

  it("detects a contractual field change", () => {
    const changed = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        canonicalKey: `${entries[0].canonicalKey}-changed`,
      };
    });
    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("ignores label and shortDescription changes", () => {
    const changed = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        label: "Changed presentation",
        shortDescription: "Changed description",
      };
    });
    expect(serializeCatalogFingerprint(changed)).toBe(
      serializeCatalogFingerprint(),
    );
  });

  it("normalizes absent fallbackReference to explicit null", () => {
    const synthetic = projectCatalogFingerprint().find(
      (entry) => entry.ckc.primaryLevel === "synthetic",
    );
    expect(synthetic?.ckc.fallbackReference).toBeNull();
    expect(serializeCatalogFingerprint()).toContain(
      '"fallbackReference":null',
    );
  });

  it("returns frozen projections without mutating the D1 catalog", () => {
    const before = serializeCatalogFingerprint();
    const projection = projectCatalogFingerprint();
    expect(Object.isFrozen(projection)).toBe(true);
    expect(projection.every(Object.isFrozen)).toBe(true);
    expect(projection.every((entry) => Object.isFrozen(entry.ckc))).toBe(true);
    expect(serializeCatalogFingerprint()).toBe(before);
  });

  it("keeps production fingerprint code client-safe and dependency-free", () => {
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
