# Full Review Pack — SFIA Studio V3.1-D2-A QA

## Métadonnées et rôle

Date/heure/fuseau : 2026-08-02 04:30:25 CEST (+0200).
Rôle Cursor : exécution bornée du cycle 9 QA / validation.
Profil **Critical** justifié : D2-A est le contrôle fail-closed amont de D2 ;
un faux PASS autoriserait une projection stale/divergente. Typologie EVOL.

## Gate Morris complet

```text
GO QA VALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
VERIFY CONTRACTS, FINGERPRINT DETERMINISM, FAIL-CLOSED CATALOG PROJECTION, IMPORT BOUNDARIES AND NON-REGRESSION —
NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## CKC QA et template

CKC détaillé : `pilots/04-qa-validation.md` candidate v0.1.0,
`executionAuthority=false`. Template canonique consulté.
Limite pre-check ChatGPT : état local non inspecté par ChatGPT ; Cursor a
réalisé le Local Git Truth Check complet.

## Git Truth, handoff source, sources

```text
2026-08-02 04:26:21 CEST (+0200)
branch=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
handoff_tip=ed6ef243c26afb680aea429edeb6b7d877144a6d
handoff_blob=82ce40df42ce7c21368e089288d0351036182b88
```

Handoff Delivery source tip `ed6ef243…`, blob `82ce40df…`.
Sources : gouvernance, CKC QA, standard QA, docs D2 15–19, README Delivery,
code/tests D2-A, précédent QA D1.

## Empreintes et baseline

Avant :
```text
2026-08-02 04:26:21 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/app/lib/oa/cycle/domain/types.ts  sha256=25f937e21d4ca2a5d0adc1b5c1427928e1c7ea0a267d840f82e8914af93fb9fc  blob=9f245b1ccc7b08ef42fd27e78ec9d455b490597e
projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts  sha256=e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da  blob=5fe6aaf53de0f1d9650d108d97de350969d31a14
projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts  sha256=d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643  blob=7ea06a9bdbdb7056215ac166980f8896ae64aabe
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=56366c6a4957c211d59a917b9a7353d036641ce7ee0a8bea5ca9307c38ef11df  blob=012665ba18da544e7a1a06553a31c7f697e5092f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=e2f5068f0cbe3785b8e92c806b84a614d585e1aab735c849b7e9c54baaf617c6  blob=2a09c3b8164ad6e70b3d967b281a6f20f0fbf2fa
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=76e21d474f8f5d46273a8c646b1027393062f1694b516393fc281af512e648cc  blob=b43ac12098b62471dc5a2eae9123f0666fa72701
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=bb32eddc80e5c1e06e70ee9ad0df4d8c2f3714cb18e2507250cf096230afe53b  blob=51e086fc8259189ea05cfe8cc3af443ea6dcb7a3
.tmp-sfia-review/chatgpt-review.md  sha256=42f63a7ed596d51d3712513b92e455808700bb5d1bbecde65573c1a8f6da2ed6  blob=82ce40df42ce7c21368e089288d0351036182b88
```

Après protégés :
```text
2026-08-02 04:28:02 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/app/lib/oa/cycle/domain/types.ts  sha256=25f937e21d4ca2a5d0adc1b5c1427928e1c7ea0a267d840f82e8914af93fb9fc  blob=9f245b1ccc7b08ef42fd27e78ec9d455b490597e
projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts  sha256=e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da  blob=5fe6aaf53de0f1d9650d108d97de350969d31a14
projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts  sha256=d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643  blob=7ea06a9bdbdb7056215ac166980f8896ae64aabe
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
```

Baseline Delivery : 8/8 · 16/16 · 46/46 · 118/118.

## Tests QA — contenus complets

### Fingerprint QA

```typescript
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
```

### Projection QA

```typescript
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
      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
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
  it("keeps index.ts limited to the three additive D2-A exports", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).not.toMatch(
      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
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
```

## Matrice, binding, résultats

Voir rapport QA complet ci-dessous. Binding public fingerprint/catalogue :
**FAIL** (R-QA-D2A-01 bloquante). Fingerprint/immuabilité/imports/nominals :
PASS. Typecheck/lint/build PASS. Aucune correction production.

## Rapport QA complet

# V3.1-D2-A — QA / Validation Report (Critical)

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 04:30:25 CEST (+0200) |
| Cycle | 9 — QA / validation |
| Profil | **Critical** |
| Typologie | EVOL |
| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| HEAD / main / origin/main | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| Handoff pré-cycle | tip `ed6ef243…` · blob `82ce40df…` |
| Statut | `V3.1-D2-A INDEPENDENT QA FAIL — BLOCKING OR MAJOR CONTRACT FINDING IDENTIFIED — NO CORRECTIVE IMPLEMENTATION PERFORMED — CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO — PR READINESS NOT AUTHORIZED — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED` |
| Décision Morris QA-G3 | **non consommée** |

## B. Gate Morris

```text
GO QA VALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
VERIFY CONTRACTS, FINGERPRINT DETERMINISM, FAIL-CLOSED CATALOG PROJECTION, IMPORT BOUNDARIES AND NON-REGRESSION —
NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Interprétation du message Morris « ok go » comme consommation du gate candidat
immédiatement précédent, datée 2026-08-02 04:10 CEST (+0200).

## C. Objet à valider

Contrats D2-A, projection fingerprint HASH-A, Catalog Projection fail-closed,
binding fingerprint↔catalogue, frontières publiques, immuabilité, non-régression
D1/OA cycle, absence D2-B/C.

## D. Référentiel

Stories BL-D2-A-01…04 · FA-C / FA-06 · TA-P-A / TA-02 / HASH-A / TYPE-B /
ERR-B / TA-12 · docs framing 15–19 · README Delivery · handoff Delivery ·
CKC QA pilot · standard QA v2 · méthode §4.9 · précédent QA D1.

## E. CKC QA

Path : `method/.../pilots/04-qa-validation.md` · candidate v0.1.0 ·
consommation obligatoire · `executionAuthority=false` · guidance expérimentale.
Dimensions 1–12 appliquées. Anti-patterns évités : QA symbolique, confirmation
Delivery seule, correction production, claim « sans bug ».

## F. Git Truth

```text
2026-08-02 04:26:21 CEST (+0200)
branch=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
handoff_tip=ed6ef243c26afb680aea429edeb6b7d877144a6d
handoff_blob=82ce40df42ce7c21368e089288d0351036182b88
```

Branche Delivery locale conservée. Branche distante Delivery absente.
77 worktrees. Staged vide. Aucun commit/push/PR projet.

## G. État initial

Tracked modifiés Delivery : `index.ts`, framing `08`, framing `README`.
Non suivis D2-A attendus présents. Limite pre-check ChatGPT : état local non
inspecté directement ; Cursor a exécuté le Local Git Truth Check complet.

## H. Empreintes de préservation

### Avant QA

```text
2026-08-02 04:26:21 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/app/lib/oa/cycle/domain/types.ts  sha256=25f937e21d4ca2a5d0adc1b5c1427928e1c7ea0a267d840f82e8914af93fb9fc  blob=9f245b1ccc7b08ef42fd27e78ec9d455b490597e
projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts  sha256=e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da  blob=5fe6aaf53de0f1d9650d108d97de350969d31a14
projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts  sha256=d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643  blob=7ea06a9bdbdb7056215ac166980f8896ae64aabe
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=56366c6a4957c211d59a917b9a7353d036641ce7ee0a8bea5ca9307c38ef11df  blob=012665ba18da544e7a1a06553a31c7f697e5092f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=e2f5068f0cbe3785b8e92c806b84a614d585e1aab735c849b7e9c54baaf617c6  blob=2a09c3b8164ad6e70b3d967b281a6f20f0fbf2fa
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=76e21d474f8f5d46273a8c646b1027393062f1694b516393fc281af512e648cc  blob=b43ac12098b62471dc5a2eae9123f0666fa72701
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=bb32eddc80e5c1e06e70ee9ad0df4d8c2f3714cb18e2507250cf096230afe53b  blob=51e086fc8259189ea05cfe8cc3af443ea6dcb7a3
.tmp-sfia-review/chatgpt-review.md  sha256=42f63a7ed596d51d3712513b92e455808700bb5d1bbecde65573c1a8f6da2ed6  blob=82ce40df42ce7c21368e089288d0351036182b88
```

### Après QA (fichiers protégés)

```text
2026-08-02 04:28:02 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/app/lib/oa/cycle/domain/types.ts  sha256=25f937e21d4ca2a5d0adc1b5c1427928e1c7ea0a267d840f82e8914af93fb9fc  blob=9f245b1ccc7b08ef42fd27e78ec9d455b490597e
projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts  sha256=e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da  blob=5fe6aaf53de0f1d9650d108d97de350969d31a14
projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts  sha256=d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643  blob=7ea06a9bdbdb7056215ac166980f8896ae64aabe
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
```

Résultat : **PROTECTED_HASHES_UNCHANGED**.

## I. Baseline Delivery

| Commande | Résultat | Exit |
|----------|----------|------|
| catalogFingerprint.test.ts | 8/8 PASS | 0 |
| catalogProjection.test.ts | 16/16 PASS | 0 |
| cycleTypeCatalog.test.ts | 46/46 PASS | 0 |
| __tests__/oa/cycle/ | 118/118 PASS | 0 |

## J. Stratégie QA

1. Préservation des fichiers protégés.
2. Baseline Delivery reproduite.
3. Renforcement négatif fingerprint + projection.
4. Campagne critique binding fingerprint/catalogue via seam public.
5. Frontières, immuabilité, imports.
6. Classification stricte ; **aucune correction production**.

## K. Matrice invariants

| ID | Invariant | Preuve | Résultat | Réserve |
|----|-----------|--------|----------|---------|
| INV-D2A-01 | Contrats dédiés readonly | lecture + exports | PASS | — |
| INV-D2A-02 | Fingerprint champs fermés | fingerprint.qa | PASS | — |
| INV-D2A-03 | Exclus n’impactent pas hash | fingerprint.qa | PASS | — |
| INV-D2A-04 | Sérialisation déterministe | fingerprint.qa | PASS | — |
| INV-D2A-05 | SHA-256 = constante | fingerprint.qa | PASS | — |
| INV-D2A-06 | Pas de crypto runtime prod | static + QA | PASS | — |
| INV-D2A-07 | Validations ordre/fail-closed | projection.qa | PASS | — |
| INV-D2A-08 | Failure sans projection | projection.qa | PASS | — |
| INV-D2A-09 | Success sans profil/gate/consumed | projection.qa | PASS | — |
| INV-D2A-10 | D1 autoritatif inchangé | hashes + immutabilité | PASS | — |
| INV-D2A-11 | Catalogue divergent ≠ succès | projection.qa binding | **FAIL** | R-QA-D2A-01 |
| INV-D2A-12 | Seam test ≠ contournement public | projection.qa binding | **FAIL** | R-QA-D2A-01 |
| INV-D2A-13 | Catalogue prod non muté | projection.qa | PASS | — |
| INV-D2A-14 | Pas de D2-B/C exposé | static imports | PASS | — |
| INV-D2A-15 | Non-régression hors défauts QA | D1 46/46 ; Delivery 24/24 | PASS* | *suite globale rouge uniquement à cause des 6 FAIL QA binding |

## L. Couverture Delivery existante

Nominale + négatifs lifecycle/mapping/version/hash. Ne couvrait pas le binding
fingerprint↔catalogue injecté via API publique.

## M. Tests QA ajoutés

### `catalogFingerprint.qa.test.ts` — contenu complet

```typescript
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
```

### `catalogProjection.qa.test.ts` — contenu complet

```typescript
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
      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
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
  it("keeps index.ts limited to the three additive D2-A exports", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).not.toMatch(
      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
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
```

Résultats : fingerprint QA **25/25 PASS** · projection QA **31 PASS / 6 FAIL**.

Correction d’oracle documentée : le test d’arité `Function.length === 2` a été
remplacé par inspection source, car JS ignore les paramètres avec défaut dans
`.length`. Les 6 tests de binding restent en échec volontaire.

## N. Fingerprint

Format, déterminisme, champs inclus/exclus, gel, réordonnancement, absence
crypto runtime : **PASS**.

## O. Catalog Projection

Nominaux quinze types, priorité fail-closed, variantes exactes, lifecycle,
mapping, six codes d’erreur, immuabilité success/failure : **PASS**.

## P. Binding catalogue/fingerprint

### Constat

`projectSelectableCycleType(context, catalog?)` est exporté publiquement.
La validation `catalogHash === CYCLE_TYPE_CATALOG_FINGERPRINT` utilise la
constante statique, **sans** recalculer l’empreinte du catalogue effectivement
consommé.

### Preuves FAIL (6)

1. canonicalKey modifié → `ok=true`
2. methodCycleNumber modifié → `ok=true`
3. mapping CKC encore valide mais divergent (synthetic→detailed) → `ok=true`
4. catalogue réordonné → `ok=true`
5. entrée supplémentaire → `ok=true`
6. entrée manquante → `ok=true`

Commande :
`npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts` · exit 1.

## Q. Frontière publique

Trois exports D2-A additifs uniquement. Aucun resolver/proof/bridge/factory D2
ajouté. Le seam catalogue optionnel est toutefois public — voir R-QA-D2A-01.

## R. Immuabilité

Catalogue/entrées/mappings D1 gelés ; projections et erreurs gelées : **PASS**.

## S. Import boundaries

Aucune occurrence `node:crypto|node:fs|next|infrastructure|QualifyCycle|
ResolveCycleKnowledgeContract|CkcResolverPort|CreateCycle|consumed|
recommendedProfile|isMorrisDecision` dans les trois modules production : **PASS**.

## T. Résultats complets

```text
===== FP =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  04:28:52
   Duration  276ms (transform 84ms, setup 21ms, collect 121ms, tests 3ms, environment 0ms, prepare 25ms)

EXIT_FP=0
===== PROJ =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 4ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  04:28:52
   Duration  258ms (transform 75ms, setup 21ms, collect 107ms, tests 4ms, environment 0ms, prepare 26ms)

EXIT_PROJ=0
===== FPQA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 5ms

 Test Files  1 passed (1)
      Tests  25 passed (25)
   Start at  04:28:53
   Duration  279ms (transform 73ms, setup 21ms, collect 104ms, tests 5ms, environment 0ms, prepare 24ms)

EXIT_FPQA=0
===== PROJQA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 10ms
   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 2ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 3ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
    560|     );
    561|     const result = projectSelectableCycleType(context(), catalog);
    562|     expect(result.ok).toBe(false);
       |                       ^
    563|     if (result.ok) {
    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯


 Test Files  1 failed (1)
      Tests  6 failed | 31 passed (37)
   Start at  04:28:53
   Duration  270ms (transform 75ms, setup 21ms, collect 105ms, tests 10ms, environment 0ms, prepare 30ms)

EXIT_PROJQA=1
===== D1 =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  04:28:54
   Duration  264ms (transform 76ms, setup 20ms, collect 107ms, tests 7ms, environment 0ms, prepare 24ms)

EXIT_D1=0
===== OA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 5ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 7ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 16ms
   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 4ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 5ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 1ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 1ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 78ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 95ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
    560|     );
    561|     const result = projectSelectableCycleType(context(), catalog);
    562|     expect(result.ok).toBe(false);
       |                       ^
    563|     if (result.ok) {
    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯


 Test Files  1 failed | 7 passed (8)
      Tests  6 failed | 174 passed (180)
   Start at  04:28:54
   Duration  450ms (transform 343ms, setup 267ms, collect 1.21s, tests 226ms, environment 1ms, prepare 294ms)

EXIT_OA=1
===== ALL =====

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 123ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.193Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.285Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":92,"providerMode":"fake"}

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 21ms
   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 3ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 1ms
   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 6ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 1ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 1ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 1ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.286Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 118ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.443Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":157,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.444Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.544Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":100,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.544Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.544Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 353ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-2a381fa8-5c2b-4930-adc4-114b7c34e307 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-2a381fa8-5c2b-4930-adc4-114b7c34e307 15 tools=0

 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 119ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-62c8fdf1-1304-478f-b7ae-aeba5a5a6a68 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-62c8fdf1-1304-478f-b7ae-aeba5a5a6a68 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-280b883e-6006-4a32-9f85-c28d936ee6b5 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-280b883e-6006-4a32-9f85-c28d936ee6b5 45 tools=0

 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 102ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 170ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 186ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 198ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-1cc61b43-0ef8-4d7f-a216-e2783b7272a0 ops1-att-767e6747-961e-4a0f-9dff-be003db757db fake-test

 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 136ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-1cc61b43-0ef8-4d7f-a216-e2783b7272a0 ops1-att-767e6747-961e-4a0f-9dff-be003db757db 45 tools=1

 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 97ms
 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 713ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  457ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-c8aee00d-7a3e-4927-b6c4-2b833d855155 ops1-att-48a611b2-07fa-4509-ba77-21139b266aa2 fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-c8aee00d-7a3e-4927-b6c4-2b833d855155 ops1-att-48a611b2-07fa-4509-ba77-21139b266aa2 INTERNAL

 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 818ms
   ✓ ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write  339ms
   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  395ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 61ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 120ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 148ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 85ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 94ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 77ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 62ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 39ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 137ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 67ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 102ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 29ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 35ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 21ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 12ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 28ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 46ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 18ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 4ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:28:57.939Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T02:28:57.943Z","status":"ok","projectId":"proj-a87486d8-d6a7-4910-8f34-279de189731b","durationMs":1}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:28:57.944Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:28:57.944Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T02:28:57.947Z","status":"ok","projectId":"proj-044e32ad-de82-41d2-b9b6-cd20a880353c","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:28:57.947Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:28:57.949Z","status":"ok","projectId":"proj-044e32ad-de82-41d2-b9b6-cd20a880353c","durationMs":2}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:28:57.949Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 14ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 10ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 16ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 20ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 21ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 34ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 18ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 9ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 8ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 9ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 11ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 7ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 11ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 7ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 6ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 5ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 8ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 6ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 6ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 8ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 4ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 2ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 3ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 2ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 4ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3224ms
   ✓ SFIA context resolver > detects context stale on head mismatch  405ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  314ms
   ✓ SFIA action compiler > denies commit/push operations  317ms
   ✓ SFIA action compiler > preserves exact content  343ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  357ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  355ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  308ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.641Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:59.723Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":82,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.724Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T02:28:59.836Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":112,"providerMode":"fake"}

 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 180ms
 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 194ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.836Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:59.974Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":138,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.922Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:29:00.024Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":102,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:29:00.025Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:29:00.026Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:29:00.025Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:29:00.026Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.028Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.028Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.028Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.029Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.029Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.029Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.029Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.029Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:29:00.037Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":8,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:29:00.037Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.037Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.037Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T02:29:00.037Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:29:00.037Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:29:00.038Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":1,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.042Z","status":"ok","projectId":"proj-1f4c265a-52f2-48f8-a586-ac07bf0ede28","durationMs":0}
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.043Z","status":"ok","projectId":"proj-88bc18ac-3ed2-4991-89ff-436208f2d8bb","durationMs":1}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.043Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.043Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.043Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 122ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.975Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:29:00.083Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":108,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 446ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 591ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 103ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 64ms
 ✓ __tests__/shell.test.tsx (1 test) 53ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 117ms
 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 43ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T02:29:00.945Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.946Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.946Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.947Z","status":"ok","projectId":"proj-d8d00ed1-1eae-4fd9-8894-de03f26688fe","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:29:00.947Z","status":"SUCCEEDED","projectId":"proj-d8d00ed1-1eae-4fd9-8894-de03f26688fe","sessionLocalId":"s1","durationMs":1,"proposalId":"rrp-1"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.952Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.953Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.953Z","status":"ok","projectId":"proj-d7effc5c-3043-4f16-b946-c4407dbb95b9","durationMs":0}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:29:00.953Z","status":"SUCCEEDED","projectId":"proj-d7effc5c-3043-4f16-b946-c4407dbb95b9","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.953Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.953Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T02:29:00.953Z","status":"ALREADY_APPLIED","projectId":"proj-d7effc5c-3043-4f16-b946-c4407dbb95b9","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.957Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.957Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.958Z","status":"ok","projectId":"proj-f0aab84d-136d-401c-b359-02a39f9b7232","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:29:00.958Z","status":"SUCCEEDED","projectId":"proj-f0aab84d-136d-401c-b359-02a39f9b7232","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.958Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.958Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T02:29:00.958Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.961Z","status":"ok","projectId":"proj-ef71b076-79e3-4c87-b228-0b752a66940d","durationMs":0}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.961Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T02:29:00.962Z","status":"NO_MUTATION","projectId":"proj-ef71b076-79e3-4c87-b228-0b752a66940d","sessionLocalId":"s4","durationMs":1,"proposalId":"rrp-4"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-02T02:29:00.966Z","status":"ok","projectId":"proj-81c94ff2-02b9-4447-a4b0-8747a260f037","durationMs":2}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:29:00.966Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:29:00.967Z","status":"ok","projectId":"proj-81c94ff2-02b9-4447-a4b0-8747a260f037","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.967Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:29:00.967Z","status":"STALE","projectId":"proj-81c94ff2-02b9-4447-a4b0-8747a260f037","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.971Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T02:29:00.971Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.971Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T02:29:00.971Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.975Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:29:00.975Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 39ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 61ms
 ✓ __tests__/navigation.test.tsx (2 tests) 51ms
 ✓ __tests__/increment-c.test.tsx (8 tests) 1143ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  304ms
 ✓ __tests__/gates.test.tsx (1 test) 54ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1767ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  772ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  312ms
   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  328ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-02T02:29:01.404Z","status":"ok","projectId":"proj-5760b508-7382-4259-bbb8-0647f2fff730","durationMs":1}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-02T02:29:01.409Z","status":"ok","projectId":"proj-2e77beab-cdaf-4aef-8165-c5941976aa7c","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-02T02:29:01.409Z","status":"idempotent","projectId":"proj-2e77beab-cdaf-4aef-8165-c5941976aa7c","durationMs":0}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-02T02:29:01.412Z","status":"ok","projectId":"proj-0bc7a590-2f83-4bf5-bfce-52ca9be567c2","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:29:01.412Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:29:01.413Z","status":"ok","projectId":"proj-0bc7a590-2f83-4bf5-bfce-52ca9be567c2","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:29:01.413Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:29:01.413Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 18ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 42ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
 ✓ __tests__/status-pill.test.tsx (1 test) 19ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 11ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 2899ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1633ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  300ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2870ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  645ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  643ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  363ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  303ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  305ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
    560|     );
    561|     const result = projectSelectableCycleType(context(), catalog);
    562|     expect(result.ok).toBe(false);
       |                       ^
    563|     if (result.ok) {
    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯


 Test Files  1 failed | 93 passed (94)
      Tests  6 failed | 907 passed (913)
   Start at  04:28:55
   Duration  6.92s (transform 3.11s, setup 3.09s, collect 11.58s, tests 18.77s, environment 5.83s, prepare 3.37s)

EXIT_ALL=1
===== TYPE =====

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

EXIT_TYPE=0
===== LINT =====

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
EXIT_LINT=0
===== BUILD =====

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 924ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         120 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.15 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.83 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

EXIT_BUILD=0
===== GIT_DIFF_CHECK =====
EXIT_DIFFCHECK=0
```

Synthèse :

| Commande | Exit | Résultat |
|----------|------|----------|
| fingerprint Delivery | 0 | 8/8 |
| projection Delivery | 0 | 16/16 |
| fingerprint QA | 0 | 25/25 |
| projection QA | 1 | 31/37 · 6 FAIL binding |
| D1 | 0 | 46/46 |
| oa/cycle | 1 | 174/180 · 6 FAIL QA |
| npm test | 1 | 907/913 · 6 FAIL QA |
| typecheck | 0 | PASS |
| lint | 0 | PASS |
| build | 0 | PASS |
| git diff --check | 0 | PASS |

## U. Non-régression

Delivery et D1 restent verts. La rougeur des suites agrégées est uniquement
due aux 6 tests QA démontrant R-QA-D2A-01. Aucune régression D1/Delivery.

## V. Écarts

### R-QA-D2A-01 — Contournement public fingerprint/catalogue

- **Invariant :** INV-D2A-11 · INV-D2A-12
- **Attendu :** aucun `ok=true` si le catalogue injecté est contractuellement
  divergent du fingerprint canonique.
- **Observé :** succès public avec fingerprint canonique + catalogue divergent
  (canonicalKey, methodCycleNumber, mapping valide divergent, ordre, +1/−1 entrée).
- **Preuve :** `catalogProjection.qa.test.ts` describe binding · exit 1
- **Commande :** `npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts`
- **Sévérité :** **BLOQUANTE**
- **Impact :** D2-B/C pourrait consommer une projection issue d’un catalogue
  stale/divergent tout en portant le hash canonique.
- **Recommandation :** Delivery correctif — soit retirer le seam du public API,
  soit lier le contrôle hash à `serializeCatalogFingerprint(catalog utilisé
  soit n’accepter que le singleton D1.
- **Gate :** GO DELIVERY CORRECTIVE
- **Statut :** OPEN

## W. Classification des réserves

| ID | Sévérité | Statut |
|----|----------|--------|
| R-QA-D2A-01 | Bloquante | OPEN |

Aucune réserve mineure ou environnementale.

## X. Limites de campagne

Pas de fuzzing exhaustif multi-processus. Pas de preuve runtime UI. Pas de
mesure de couverture instrumentée. Les tests Delivery restent verts et ne
masquent pas le défaut : les tests QA le démontrent.

## Y. Anti-claims

QA ≠ PASS · Delivery verte ≠ QA validée · typecheck/lint/build verts ≠ contrat
fail-closed complet · aucun claim « prêt prod », « sans bug », « PR ready »,
« D2-B autorisé ».

## Z. Conditions du verdict

FAIL car réserve bloquante reproductible sur invariant contractuel obligatoire,
sans correction production.

## AA. Gate suivant candidat

```text
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
ADDRESS ONLY R-QA-D2A FINDINGS —
PRESERVE QA TESTS —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Ne pas exécuter automatiquement.

## AB. Verdict

```text
V3.1-D2-A INDEPENDENT QA FAIL —
BLOCKING OR MAJOR CONTRACT FINDING IDENTIFIED —
NO CORRECTIVE IMPLEMENTATION PERFORMED —
CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO —
PR READINESS NOT AUTHORIZED —
D2-B AND D2-C REMAIN CLOSED —
D3 NOT OPENED
```


## État Git final

```text
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_qa_reports.py
?? .tmp-sfia-review/_gen_d2a_reports.py
?? .tmp-sfia-review/_gen_doc19.py
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
?? .tmp-sfia-review/main-worktree-untracked-evidence.txt
?? .tmp-sfia-review/merge-commit-source.txt
?? .tmp-sfia-review/merge-readiness-truth.txt
?? .tmp-sfia-review/merge-revalidation.txt
?? .tmp-sfia-review/merge-truth.txt
?? .tmp-sfia-review/pr-296-after-api.json
?? .tmp-sfia-review/pr-296-after-body-metadata.json
?? .tmp-sfia-review/pr-296-after-merge.json
?? .tmp-sfia-review/pr-296-archive-and-cleanup-report.md
?? .tmp-sfia-review/pr-296-before-metadata.json
?? .tmp-sfia-review/pr-296-before-view.json
?? .tmp-sfia-review/pr-296-before.json
?? .tmp-sfia-review/pr-296-body-after.md
?? .tmp-sfia-review/pr-296-body-api-json.md
?? .tmp-sfia-review/pr-296-body-api-raw.md
?? .tmp-sfia-review/pr-296-body-authorized.diff
?? .tmp-sfia-review/pr-296-body-before-vs-remote-after.diff
?? .tmp-sfia-review/pr-296-body-before.md
?? .tmp-sfia-review/pr-296-body-concurrent-check.md
?? .tmp-sfia-review/pr-296-body-final.md
?? .tmp-sfia-review/pr-296-body-hashes.txt
?? .tmp-sfia-review/pr-296-body-remote-after.md
?? .tmp-sfia-review/pr-296-body-update-response.json
?? .tmp-sfia-review/pr-296-body-update.json
?? .tmp-sfia-review/pr-296-body.md
?? .tmp-sfia-review/pr-296-checks.json
?? .tmp-sfia-review/pr-296-checks.txt
?? .tmp-sfia-review/pr-296-comments.json
?? .tmp-sfia-review/pr-296-commits.txt
?? .tmp-sfia-review/pr-296-concurrent-meta.json
?? .tmp-sfia-review/pr-296-concurrent.json
?? .tmp-sfia-review/pr-296-diff-correspondence.txt
?? .tmp-sfia-review/pr-296-fetch-main-attempt.txt
?? .tmp-sfia-review/pr-296-files.txt
?? .tmp-sfia-review/pr-296-final-metadata.json
?? .tmp-sfia-review/pr-296-inline-comments-after.json
?? .tmp-sfia-review/pr-296-inline-comments-before.json
?? .tmp-sfia-review/pr-296-inline-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments-after.json
?? .tmp-sfia-review/pr-296-issue-comments-before.json
?? .tmp-sfia-review/pr-296-issue-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments.json
?? .tmp-sfia-review/pr-296-jobs.json
?? .tmp-sfia-review/pr-296-merge-body-after.md
?? .tmp-sfia-review/pr-296-merge-body-authorized.diff
?? .tmp-sfia-review/pr-296-merge-body-before.md
?? .tmp-sfia-review/pr-296-merge-body-concurrent.md
?? .tmp-sfia-review/pr-296-merge-body-final.md
?? .tmp-sfia-review/pr-296-merge-body-remote-after.md
?? .tmp-sfia-review/pr-296-merge-report.md
?? .tmp-sfia-review/pr-296-merge-response.json
?? .tmp-sfia-review/pr-296-metadata.json
?? .tmp-sfia-review/pr-296-pm-inline-comments.json
?? .tmp-sfia-review/pr-296-pm-issue-comments.json
?? .tmp-sfia-review/pr-296-pm-reviews.json
?? .tmp-sfia-review/pr-296-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-post-merge-runs.json
?? .tmp-sfia-review/pr-296-postmerge-body.md
?? .tmp-sfia-review/pr-296-postmerge-jobs.json
?? .tmp-sfia-review/pr-296-postmerge-pr.json
?? .tmp-sfia-review/pr-296-postmerge-run.json
?? .tmp-sfia-review/pr-296-pre-merge.json
?? .tmp-sfia-review/pr-296-pre-ready.json
?? .tmp-sfia-review/pr-296-ready-transition-report.md
?? .tmp-sfia-review/pr-296-remote-review-report.md
?? .tmp-sfia-review/pr-296-remote.diff
?? .tmp-sfia-review/pr-296-resume-inline-comments.json
?? .tmp-sfia-review/pr-296-resume-issue-comments.json
?? .tmp-sfia-review/pr-296-resume-pr.json
?? .tmp-sfia-review/pr-296-resume-reviews.json
?? .tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-reviews-after.json
?? .tmp-sfia-review/pr-296-reviews-before.json
?? .tmp-sfia-review/pr-296-reviews-concurrent.json
?? .tmp-sfia-review/pr-296-reviews.json
?? .tmp-sfia-review/pr-296-run.json
?? .tmp-sfia-review/pr-296-runs-after.json
?? .tmp-sfia-review/pr-296-switch-main-attempt.txt
?? .tmp-sfia-review/pr-296-view.json
?? .tmp-sfia-review/pr-297-after-ready.json
?? .tmp-sfia-review/pr-297-before-ready.json
?? .tmp-sfia-review/pr-297-body-after-ci-checkbox.md
?? .tmp-sfia-review/pr-297-body-after-merge-go.md
?? .tmp-sfia-review/pr-297-body-after-publish.md
?? .tmp-sfia-review/pr-297-body-before-merge.md
?? .tmp-sfia-review/pr-297-body-before-ready.md
?? .tmp-sfia-review/pr-297-body-checkbox-diff.patch
?? .tmp-sfia-review/pr-297-body-current.md
?? .tmp-sfia-review/pr-297-body-final-merged.md
?? .tmp-sfia-review/pr-297-body-merge-diff.patch
?? .tmp-sfia-review/pr-297-body-only-correction-pack.md
?? .tmp-sfia-review/pr-297-body-ready-f02-correction.md
?? .tmp-sfia-review/pr-297-branch-inventory.txt
?? .tmp-sfia-review/pr-297-ci-premerge.json
?? .tmp-sfia-review/pr-297-cleanup-before-after-comparison.json
?? .tmp-sfia-review/pr-297-cleanup-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-cleanup-ci.json
?? .tmp-sfia-review/pr-297-cleanup-command-log.txt
?? .tmp-sfia-review/pr-297-cleanup-final-state.txt
?? .tmp-sfia-review/pr-297-cleanup-findings.md
?? .tmp-sfia-review/pr-297-cleanup-git-truth-initial.txt
?? .tmp-sfia-review/pr-297-cleanup-handoff-ahead-note.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-before.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-final.txt
?? .tmp-sfia-review/pr-297-cleanup-pr.json
?? .tmp-sfia-review/pr-297-cleanup-readiness.md
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-before.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-final.txt
?? .tmp-sfia-review/pr-297-cleanup-state-before-handoff.txt
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-before.json
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-verification.md
?? .tmp-sfia-review/pr-297-cleanup-worktrees-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-before.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-final.txt
?? .tmp-sfia-review/pr-297-document-05.md
?? .tmp-sfia-review/pr-297-final-findings.md
?? .tmp-sfia-review/pr-297-main-proof.txt
?? .tmp-sfia-review/pr-297-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-merge-decision-pack.md
?? .tmp-sfia-review/pr-297-merge-readiness-body.md
?? .tmp-sfia-review/pr-297-merge-readiness-findings.md
?? .tmp-sfia-review/pr-297-merge-readiness.diff
?? .tmp-sfia-review/pr-297-merge-readiness.json
?? .tmp-sfia-review/pr-297-pm-inline-comments.json
?? .tmp-sfia-review/pr-297-pm-issue-comments.json
?? .tmp-sfia-review/pr-297-pm-reviews.json
?? .tmp-sfia-review/pr-297-post-merge-body.md
?? .tmp-sfia-review/pr-297-post-merge-ci-initial.json
?? .tmp-sfia-review/pr-297-post-merge-ci-list.json
?? .tmp-sfia-review/pr-297-post-merge-ci-status.txt
?? .tmp-sfia-review/pr-297-post-merge-ci-view.txt
?? .tmp-sfia-review/pr-297-post-merge-ci.json
?? .tmp-sfia-review/pr-297-post-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-doc-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-findings.md
?? .tmp-sfia-review/pr-297-post-merge-pr.json
?? .tmp-sfia-review/pr-297-post-merge-validation-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-post-merge.json
?? .tmp-sfia-review/pr-297-postmerge-final-git.txt
?? .tmp-sfia-review/pr-297-postmerge-git-truth.txt
?? .tmp-sfia-review/pr-297-pre-merge-final.json
?? .tmp-sfia-review/pr-297-pre-merge.json
?? .tmp-sfia-review/pr-297-pre-ready.json
?? .tmp-sfia-review/pr-297-premerge-ci-ref.json
?? .tmp-sfia-review/pr-297-ready-f02-body-diff.patch
?? .tmp-sfia-review/pr-297-ready-findings.md
?? .tmp-sfia-review/pr-297-source-one-file.diff
?? .tmp-sfia-review/pr-297-worktree-inventory.txt
?? .tmp-sfia-review/pr-297-worktree-paths.txt
?? .tmp-sfia-review/pr-297-worktree-statuses.txt
?? .tmp-sfia-review/pr-297-worktree-summary.json
?? .tmp-sfia-review/pr-body-v2-a3.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-checks.txt
?? .tmp-sfia-review/pr-readiness-truth.txt
?? .tmp-sfia-review/primary-truth.txt
?? .tmp-sfia-review/pub-truth.txt
?? .tmp-sfia-review/ready-final-git.txt
?? .tmp-sfia-review/ready-truth.txt
?? .tmp-sfia-review/remote-review-commit.txt
?? .tmp-sfia-review/remote-review-truth.txt
?? .tmp-sfia-review/review-timestamp-cleanup.txt
?? .tmp-sfia-review/review-timestamp-d2-fa.txt
?? .tmp-sfia-review/review-timestamp-d2-fd.txt
?? .tmp-sfia-review/review-timestamp-d2.txt
?? .tmp-sfia-review/review-timestamp.txt
?? .tmp-sfia-review/source-inspection.txt
?? .tmp-sfia-review/v3-1-d1-cap-source-commit.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-cleanup-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package.diff
?? .tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-ready-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-rex-report.md
?? .tmp-sfia-review/v3-1-d1-pr-body.md
?? .tmp-sfia-review/v3-1-d2-08-after.md
?? .tmp-sfia-review/v3-1-d2-08.diff
?? .tmp-sfia-review/v3-1-d2-a-delivery-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-delivery-report.md
?? .tmp-sfia-review/v3-1-d2-a-post-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-post-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-command-results.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-post-protected-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-backlog-final-state.txt
?? .tmp-sfia-review/v3-1-d2-backlog-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-backlog-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-report.md
?? .tmp-sfia-review/v3-1-d2-backlog-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-bl-doc18-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-decision-pack.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc17-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-document-15-after.md
?? .tmp-sfia-review/v3-1-d2-document-15.md
?? .tmp-sfia-review/v3-1-d2-document-16.md
?? .tmp-sfia-review/v3-1-d2-fa-doc16-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-fa-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-final-state.txt
?? .tmp-sfia-review/v3-1-d2-framing-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-framing-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-functional-design-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-design-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-report.md
?? .tmp-sfia-review/v3-1-d2-functional-design-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-readme-after.md
?? .tmp-sfia-review/v3-1-d2-readme.diff
?? .tmp-sfia-review/v3-1-d2-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-ta-doc17-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-ta-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-ta-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-source-inventory.md
?? .tmp-sfia-review/worktree-after.txt
?? .tmp-sfia-review/worktree-before.txt
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

```text
2026-08-02 04:30:25 CEST (+0200)
delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
staged=
(empty)
diff=
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
others_project=
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

`REVIEW PACK FULL — COMPLETE`.

```text
V3.1-D2-A INDEPENDENT QA FAIL —
BLOCKING OR MAJOR CONTRACT FINDING IDENTIFIED —
NO CORRECTIVE IMPLEMENTATION PERFORMED —
CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO —
PR READINESS NOT AUTHORIZED —
D2-B AND D2-C REMAIN CLOSED —
D3 NOT OPENED
```
