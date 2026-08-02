/**
 * V3.1-D2-A — pure fail-closed catalog projection tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  type CatalogProjectionErrorCode,
  type CatalogSelectionContext,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function context(
  overrides: Partial<CatalogSelectionContext> = {},
): CatalogSelectionContext {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:d2-a-test",
    ...overrides,
  };
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate(entries);
  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
}

function expectFailure(
  result: ReturnType<typeof projectSelectableCycleType>,
  code: CatalogProjectionErrorCode,
): void {
  expect(result.ok).toBe(false);
  if (result.ok) throw new Error("Expected catalog projection failure");
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

describe("V3.1-D2-A catalog projection", () => {
  it("projects an active type and preserves canonical context", () => {
    const result = projectSelectableCycleType(context());
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.projection).toMatchObject({
      cycleTypeId: "cyc:delivery",
      label: "Delivery / implémentation",
      lifecycleStatus: "active",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: "cor:d2-a-test",
    });
    expect(result.projection.ckc).toMatchObject({
      mandatory: true,
      primaryLevel: "synthetic",
      primaryReference: CKC_SYNTHETIC_MAP_PATH,
      fallbackPolicy: "none",
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      unavailableBehavior: "fail-closed",
    });
    expect(Object.isFrozen(result.projection)).toBe(true);
    expect(Object.isFrozen(result.projection.ckc)).toBe(true);
  });

  it("rejects an absent correlationId first", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "  ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects an incompatible catalog version", () => {
    expectFailure(
      projectSelectableCycleType(context({ catalogVersion: "stale" })),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects a stale catalog fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({ catalogHash: `sha256:${"0".repeat(64)}` }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects an unknown cycle type", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each(["deprecated", "unavailable"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = { ...entries[7], lifecycleStatus };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
      if (!result.ok) {
        expect(result.error.lifecycleStatus).toBe(lifecycleStatus);
      }
    },
  );

  it("fails closed for an unknown runtime lifecycle status", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        lifecycleStatus:
          "future-status" as CycleTypeDefinition["lifecycleStatus"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_NOT_SELECTABLE",
    );
  });

  it("rejects mandatory false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          mandatory: false as unknown as true,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority true", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          executionAuthority: true as unknown as false,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          ckc: { ...entries[7].ckc, [field]: "invalid" },
        } as CycleTypeDefinition;
      });
      expectFailure(
        projectSelectableCycleType(context(), catalog),
        "CYCLE_TYPE_MAPPING_INVALID",
      );
    }
  });

  it("rejects a detailed mapping without canonical fallback", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackPolicy: "none",
          fallbackReference: undefined,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        catalog,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects a synthetic mapping with a non-canonical reference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects an extended mapping", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          dynamicResolution: true,
        } as CycleTypeDefinition["ckc"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("does not expose profile, Morris decision, or partial failure data", () => {
    const success = projectSelectableCycleType(context());
    expect(success.ok).toBe(true);
    if (!success.ok) throw new Error(success.error.message);
    expect(success.projection).not.toHaveProperty("profile");
    expect(success.projection).not.toHaveProperty("recommendedProfile");
    expect(success.projection).not.toHaveProperty("isMorrisDecision");
    expect(success.projection).not.toHaveProperty("consumed");

    const failure = projectSelectableCycleType(
      context({ cycleTypeId: "cyc:unknown" }),
    );
    expectFailure(failure, "CYCLE_TYPE_UNKNOWN");
  });

  it("does not mutate the production catalog", () => {
    const before = serializeCatalogFingerprint();
    const firstEntry = CYCLE_TYPE_CATALOG.entries[0];
    projectSelectableCycleType(context());
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(firstEntry);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries[0])).toBe(true);
  });
});
