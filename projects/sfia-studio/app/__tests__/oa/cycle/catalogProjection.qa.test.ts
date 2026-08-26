/**
 * V3.1-D2-A — Independent QA reinforcement for Catalog Projection.
 * Production and Delivery tests must remain untouched.
 * Evidence of public seam / fingerprint binding defects must stay failing.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADOPTED_CYCLE_TYPE_IDS,
  CKC_PILOT_CADRAGE_PATH,
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
    correlationId: "cor:d2-a-qa",
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
  if (result.ok) {
    throw new Error(`Expected failure ${code}, got success`);
  }
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(typeof result.error.message).toBe("string");
  expect(result.error.message.length).toBeGreaterThan(0);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

function expectPublicRejectsDivergentCatalog(
  catalog: CycleTypeCatalog,
  cycleTypeId = "cyc:delivery",
): void {
  const result = projectSelectableCycleType(context({ cycleTypeId }), catalog);
  // INV-D2A-11/12: public API must not accept a contractually divergent catalog
  // while still validating the static canonical fingerprint.
  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error(
      "Public Catalog Projection accepted a divergent catalog with canonical fingerprint",
    );
  }
}

describe("V3.1-D2-A QA — Catalog Projection nominals", () => {
  it("projects every active adopted cycle type with frozen read-only success", () => {
    for (const cycleTypeId of ADOPTED_CYCLE_TYPE_IDS) {
      const result = projectSelectableCycleType(context({ cycleTypeId }));
      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(result.error.message);
      const production = CYCLE_TYPE_CATALOG.entries.find(
        (entry) => entry.cycleTypeId === cycleTypeId,
      )!;
      expect(result.projection).toMatchObject({
        cycleTypeId,
        label: production.label,
        shortDescription: production.shortDescription,
        lifecycleStatus: "active",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId: "cor:d2-a-qa",
      });
      expect(result.projection.ckc).toEqual(production.ckc);
      expect(Object.isFrozen(result)).toBe(true);
      expect(Object.isFrozen(result.projection)).toBe(true);
      expect(Object.isFrozen(result.projection.ckc)).toBe(true);
      expect(result.projection).not.toHaveProperty("profile");
      expect(result.projection).not.toHaveProperty("recommendedProfile");
      expect(result.projection).not.toHaveProperty("gate");
      expect(result.projection).not.toHaveProperty("consumed");
      expect(result.projection).not.toHaveProperty("isMorrisDecision");
    }
  });
});

describe("V3.1-D2-A QA — fail-closed priority and exact variants", () => {
  it("rejects empty/whitespace correlationId before other checks", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "   ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects incompatible version before fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogVersion: "stale",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects stale fingerprint before type lookup", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogHash: `sha256:${"0".repeat(64)}`,
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects unknown type before lifecycle/mapping", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each([
    ["version whitespace", { catalogVersion: ` ${CYCLE_TYPE_CATALOG_VERSION}` }],
    ["version case", { catalogVersion: CYCLE_TYPE_CATALOG_VERSION.toUpperCase() }],
    [
      "version suffix",
      { catalogVersion: `${CYCLE_TYPE_CATALOG_VERSION}-extra` },
    ],
  ] as const)("rejects version variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it.each([
    [
      "hash whitespace",
      { catalogHash: ` ${CYCLE_TYPE_CATALOG_FINGERPRINT}` },
    ],
    [
      "hash uppercase",
      { catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT.toUpperCase() },
    ],
    ["hash wrong prefix", { catalogHash: `md5:${"a".repeat(64)}` }],
    ["hash short", { catalogHash: `sha256:${"a".repeat(63)}` }],
  ] as const)("rejects fingerprint variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects empty cycleTypeId and propagates valid correlationId on failure", () => {
    const result = projectSelectableCycleType(context({ cycleTypeId: "" }));
    expectFailure(result, "CYCLE_TYPE_UNKNOWN");
    if (!result.ok) {
      expect(result.error.correlationId).toBe("cor:d2-a-qa");
    }
  });
});

describe("V3.1-D2-A QA — lifecycle and mapping negatives", () => {
  it.each(["deprecated", "unavailable", "future-status"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          lifecycleStatus:
            lifecycleStatus as CycleTypeDefinition["lifecycleStatus"],
        };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
    },
  );

  it("rejects mandatory=false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, mandatory: false as unknown as true },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects unknown primaryLevel", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryLevel: "unknown" as "synthetic",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects empty/whitespace primaryReference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, primaryReference: "  " },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority=true", () => {
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

  it("rejects detailed mappings without canonical fallback", () => {
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

  it("rejects detailed with wrong fallbackPolicy or fallbackReference", () => {
    const wrongPolicy = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: { ...entries[0].ckc, fallbackPolicy: "none" },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongPolicy,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const wrongRef = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackReference:
            "method/wrong.md" as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongRef,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference", () => {
    const badPrimary = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPrimary),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badPolicy = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, fallbackPolicy: "synthetic_map" },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPolicy),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const emptyFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: "" as unknown as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), emptyFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects extended mapping properties", () => {
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
});

describe("V3.1-D2-A QA — error contract", () => {
  it("covers the six documented error codes with blocking safe failures", () => {
    const cases: Array<[CatalogProjectionErrorCode, () => ReturnType<typeof projectSelectableCycleType>]> =
      [
        [
          "CATALOG_CORRELATION_ID_REQUIRED",
          () => projectSelectableCycleType(context({ correlationId: "" })),
        ],
        [
          "CATALOG_VERSION_INCOMPATIBLE",
          () => projectSelectableCycleType(context({ catalogVersion: "x" })),
        ],
        [
          "CATALOG_FINGERPRINT_STALE",
          () =>
            projectSelectableCycleType(
              context({ catalogHash: `sha256:${"1".repeat(64)}` }),
            ),
        ],
        [
          "CYCLE_TYPE_UNKNOWN",
          () =>
            projectSelectableCycleType(context({ cycleTypeId: "cyc:missing" })),
        ],
        [
          "CYCLE_TYPE_NOT_SELECTABLE",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = { ...entries[7], lifecycleStatus: "deprecated" };
              }),
            ),
        ],
        [
          "CYCLE_TYPE_MAPPING_INVALID",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = {
                  ...entries[7],
                  ckc: {
                    ...entries[7].ckc,
                    executionAuthority: true as unknown as false,
                  },
                };
              }),
            ),
        ],
      ];

    for (const [code, run] of cases) {
      const result = run();
      expectFailure(result, code);
      if (!result.ok) {
        expect(Object.isFrozen(result)).toBe(true);
        expect(Object.isFrozen(result.error)).toBe(true);
      }
    }
  });

  it("documents retryable/recoverable classification for catalog stale errors", () => {
    const version = projectSelectableCycleType(
      context({ catalogVersion: "wrong" }),
    );
    const hash = projectSelectableCycleType(
      context({ catalogHash: `sha256:${"2".repeat(64)}` }),
    );
    expect(version.ok).toBe(false);
    expect(hash.ok).toBe(false);
    if (!version.ok && !hash.ok) {
      expect(version.error.retryable).toBe(true);
      expect(hash.error.retryable).toBe(true);
      expect(version.error.recoverable).toBe(true);
      expect(hash.error.recoverable).toBe(true);
    }
  });
});

describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () => {
  it("exposes the catalog seam on the public API signature", () => {
    // JS Function.length ignores parameters with defaults; inspect source instead.
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogProjection.ts",
      ),
      "utf8",
    );
    expect(source).toMatch(
      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalogOrAuthority:\s*\|\s*Pick<CycleTypeCatalog, "entries">\s*\|\s*CycleTypeCatalogAuthority\s*=\s*CYCLE_TYPE_CATALOG,/,
    );
    const indexSource = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(indexSource).toContain(
      'export * from "./domain/catalogProjection";',
    );
  });

  it("rejects a catalog with modified canonicalKey under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        canonicalKey: `${entries[7].canonicalKey}-divergent`,
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with modified methodCycleNumber under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = { ...entries[7], methodCycleNumber: 99 };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with swapped still-valid contractual CKC mapping", () => {
    const catalog = cloneCatalog((entries) => {
      // Convert synthetic delivery into a still-valid detailed mapping that
      // differs from the authoritative D1 contract for cyc:delivery.
      entries[7] = {
        ...entries[7],
        ckc: {
          mandatory: true,
          primaryLevel: "detailed",
          primaryReference: CKC_PILOT_CADRAGE_PATH,
          fallbackPolicy: "synthetic_map",
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
          executionAuthority: false,
          doctrineStatus: "method-candidate",
          unavailableBehavior: "fail-closed",
        },
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    const result = projectSelectableCycleType(context(), catalog);
    expect(result.ok).toBe(false);
    if (result.ok) {
      // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
      expect(result.projection.ckc.primaryLevel).not.toBe("detailed");
    }
  });

  it("rejects a reordered catalog under canonical fingerprint", () => {
    const catalog: CycleTypeCatalog = {
      version: CYCLE_TYPE_CATALOG_VERSION,
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
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog, "cyc:framing");
  });

  it("rejects a catalog with an extra entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.push({
        ...entries[0],
        cycleTypeId: "cyc:extra-qa",
        canonicalKey: "extra-qa",
        methodCycleNumber: 16,
        displayOrder: 16,
      });
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog missing an entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.splice(14, 1);
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });
});

describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
  it("allows adopted D2-A/B/C exports while forbidding later-cycle wiring", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).toContain(
      'export * from "./domain/ckcQualificationErrors";',
    );
    expect(source).toContain(
      'export * from "./domain/ckcConsumptionProof";',
    );
    expect(source).toContain(
      'export * from "./ports/ckcQualificationResolver";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcReferenceManifest";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcQualificationResolver";',
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationResult";',
    );
    expect(source).toContain(
      'export * from "./application/qualifyCycleWithCkc";',
    );
    expect(source).toContain("createCkcQualificationServices");
    expect(source).not.toMatch(
      /QualifyCycleBridge|createD2|D2Factory|D2-D|D3|createInMemoryCycleServices\([^)]*qualifyCycleWithCkc/,
    );
  });

  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
    for (const relative of [
      "ckcQualificationContracts.ts",
      "catalogFingerprint.ts",
      "catalogProjection.ts",
    ]) {
      const source = readFileSync(
        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
        "utf8",
      );
      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
      expect(source).not.toMatch(/infrastructure\//);
      expect(source).not.toMatch(
        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
      );
    }
  });

  it("does not mutate production catalog entries across calls", () => {
    const before = serializeCatalogFingerprint();
    const first = CYCLE_TYPE_CATALOG.entries[0];
    const firstCkc = first.ckc;
    projectSelectableCycleType(context());
    projectSelectableCycleType(context({ cycleTypeId: "cyc:framing" }));
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
    expect(CYCLE_TYPE_CATALOG.entries[0].ckc).toBe(firstCkc);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
    expect(Object.isFrozen(first)).toBe(true);
    expect(Object.isFrozen(firstCkc)).toBe(true);
  });
});
