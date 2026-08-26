// @vitest-environment node
/**
 * W3-D — FULL CKC TRACK + CATALOG EVOLVABILITY (US-P1-09 + US-P1-14).
 * Deterministic product-native proof · FakeConversationProvider only · no REAL.
 * Proof ceiling: DETERMINISTIC PRODUCT-NATIVE PROVEN ≠ READY FOR REAL.
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildCkcCognitivePromptSection,
  computeCkcSemanticFingerprint,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { analyzePostEvidenceWithProvider } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CKC_SYNTHETIC_MAP_PATH,
  METHOD_CYCLES_DOC_PATH,
  bindCycleTypeCatalogAuthority,
  computeCatalogFingerprintHash,
  createCkcQualificationServices,
  listCycleTypes,
  projectCatalogFingerprint,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  validateCycleTypeCatalog,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";
import { FixedClock } from "@/lib/oa/doctrine";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import {
  computeProductCkcIndexDigest,
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
  validateProductCkcIndex,
  type ProductCkcIndex,
} from "@/lib/oa/doctrine/product/productCkcIndex";
import { computeManifestDigest } from "@/lib/oa/doctrine/domain/digest";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot();

const REPRESENTATIVE_CAUSAL_TYPES = [
  {
    cycleTypeId: "cyc:framing",
    expectReco: /intention|périmètre|besoin réel/i,
    label: "framing",
  },
  {
    cycleTypeId: "cyc:delivery",
    expectReco: /anti scope creep/i,
    label: "delivery",
  },
  {
    cycleTypeId: "cyc:security",
    expectReco: /adversarial|risque résiduel|secret/i,
    label: "security",
  },
  {
    cycleTypeId: "cyc:qa-validation",
    expectReco: /verdict evidence-based|claims interdits|confirmation bias/i,
    label: "qa-validation",
  },
] as const;

function sha256File(content: string): `sha256:${string}` {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}`;
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => CycleTypeDefinition[],
): CycleTypeCatalog {
  return {
    version: CYCLE_TYPE_CATALOG_VERSION,
    entries: mutate(
      CYCLE_TYPE_CATALOG.entries.map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    ),
  };
}

function extensionCatalogEntry(): CycleTypeDefinition {
  return {
    cycleTypeId: "cyc:w3d-extension-probe",
    canonicalKey: "w3d-extension-probe",
    label: "Extension probe",
    shortDescription: "Test-only catalog evolvability probe",
    displayOrder: 16,
    lifecycleStatus: "active",
    methodCycleNumber: 16,
    methodReference: `${METHOD_CYCLES_DOC_PATH} §w3d-probe`,
    ckc: {
      mandatory: true,
      primaryLevel: "synthetic",
      primaryReference: CKC_SYNTHETIC_MAP_PATH,
      fallbackPolicy: "none",
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      unavailableBehavior: "fail-closed",
    },
    aliases: [],
  };
}

/**
 * Test-only extended product registry — same FilesystemDoctrinePackageRepository
 * + loadProductCkcCognitiveContent production path. Never a product cycle 16.
 */
function materializeExtendedProductRegistry(): {
  registryRoot: string;
  packagePin: typeof DEFAULT_PRODUCT_DOCTRINE_PIN;
  cleanup: () => void;
} {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w3d-ext-"));
  const srcRoot = PRODUCT_REGISTRY;
  const relDir = "packages/pkg-sfia-studio-doctrine-v3-1.0.0";
  fs.cpSync(srcRoot, tmp, { recursive: true });

  const pkgDir = path.join(tmp, relDir);
  const artifactRel = "ckc/16-w3d-extension-probe.md";
  const markdown = `# Studio CKC — W3-D extension probe (TEST ONLY)

## Finalité

Exerciser l'évolutivité catalogue via W3D_EXTENSION_PROBE_MARKER sans moteur dédié.

## Nora posture & guidance

### Guidance (condensé)

- W3D_EXTENSION_PROBE_MARKER
- Recommendation seulement — jamais HumanDecision
`;
  fs.writeFileSync(path.join(pkgDir, artifactRel), markdown, "utf8");

  const indexPath = path.join(pkgDir, "ckc-index.json");
  const rawIndex = JSON.parse(fs.readFileSync(indexPath, "utf8")) as ProductCkcIndex & {
    digest?: string;
  };
  const entries = [
    ...rawIndex.entries,
    {
      cycleTypeId: "cyc:w3d-extension-probe",
      ckcId: "ckc:studio:w3d-extension-probe",
      contractVersion: "0.1.0",
      artifactFile: artifactRel,
      sourceDigest: sha256File(markdown),
    },
  ];
  const withoutDigest = {
    schemaVersion: rawIndex.schemaVersion,
    contractVersion: rawIndex.contractVersion,
    entries,
  };
  const indexDigest = computeProductCkcIndexDigest(withoutDigest);
  const nextIndex = { ...withoutDigest, digest: indexDigest };
  expect(validateProductCkcIndex(nextIndex)).toBeNull();
  fs.writeFileSync(indexPath, `${JSON.stringify(nextIndex, null, 2)}\n`, "utf8");

  const manifestPath = path.join(pkgDir, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Record<
    string,
    unknown
  >;
  const sources = (manifest.sources as Array<Record<string, unknown>>).map(
    (source) =>
      source.doctrineSourceRef === "src:product-ckc-index"
        ? { ...source, digest: indexDigest }
        : source,
  );
  const { digest: _old, ...manifestBody } = manifest;
  void _old;
  const nextManifestBody = { ...manifestBody, sources };
  const packageDigest = computeManifestDigest(
    nextManifestBody as Parameters<typeof computeManifestDigest>[0],
  );
  const nextManifest = { ...nextManifestBody, digest: packageDigest };
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify(nextManifest, null, 2)}\n`,
    "utf8",
  );

  const registryPath = path.join(tmp, "registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8")) as {
    schemaVersion: string;
    entries: Array<Record<string, unknown>>;
  };
  registry.entries = registry.entries.map((entry) =>
    entry.doctrinePackageId === DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId
      ? { ...entry, digest: packageDigest }
      : entry,
  );
  fs.writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");

  return {
    registryRoot: tmp,
    packagePin: {
      ...DEFAULT_PRODUCT_DOCTRINE_PIN,
      digest: packageDigest,
    },
    cleanup: () => fs.rmSync(tmp, { recursive: true, force: true }),
  };
}

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
});

describe("W3-D US-P1-09 — catalog evolvability", () => {
  it("X-W3D-01/02: baseline fifteen still valid; 15 is not structural", () => {
    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(
      CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
    );
    expect(validateCycleTypeCatalog(CYCLE_TYPE_CATALOG)).toEqual([]);
    const source = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/oa/cycle/domain/cycleTypeCatalog.ts",
      ),
      "utf8",
    );
    expect(source).not.toMatch(/entries\.length\s*===\s*15/);
    expect(source).not.toMatch(/detailedCount\s*!==\s*4/);
    expect(source).not.toMatch(/syntheticCount\s*!==\s*11/);
    expect(source).not.toMatch(/METHOD_NUMBER_SET/);
    expect(source).not.toMatch(/isExactOneToFifteen/);
  });

  it("X-W3D-03: extended catalog validates + fingerprints via same production helpers", () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    expect(extended.entries).toHaveLength(16);
    expect(validateCycleTypeCatalog(extended)).toEqual([]);
    const fp = projectCatalogFingerprint(extended);
    expect(fp).toHaveLength(16);
    expect(serializeCatalogFingerprint(extended)).toContain(
      "cyc:w3d-extension-probe",
    );
    expect(computeCatalogFingerprintHash(CYCLE_TYPE_CATALOG)).toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
    expect(computeCatalogFingerprintHash(extended)).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("X-W3D-03: covered extension traverses projectSelectable → QualifyCycleWithCkc → Product CKC SUCCESS", async () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const authority = bindCycleTypeCatalogAuthority(extended);
    const fixture = materializeExtendedProductRegistry();
    try {
      const projection = projectSelectableCycleType(
        {
          cycleTypeId: "cyc:w3d-extension-probe",
          catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
          catalogHash: authority.fingerprint,
          correlationId: "cor:w3d-ext-qualify",
        },
        authority,
      );
      expect(projection.ok).toBe(true);
      if (!projection.ok) return;
      expect(projection.projection.cycleTypeId).toBe("cyc:w3d-extension-probe");
      expect(projection.projection.catalogHash).toBe(authority.fingerprint);
      expect(projection.projection.ckc.executionAuthority).toBe(false);

      const services = createCkcQualificationServices({
        clock: new FixedClock("2026-08-26T04:00:00.000Z"),
        doctrinePackagePin: fixture.packagePin,
        registryRoot: fixture.registryRoot,
        catalogAuthority: authority,
      });
      const qualified = await services.qualifyCycleWithCkc.execute({
        cycleTypeId: "cyc:w3d-extension-probe",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: authority.fingerprint,
        correlationId: "cor:w3d-ext-qualify",
        signals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      });
      expect(qualified.state).toBe("success");
      if (qualified.state !== "success") return;
      expect(qualified.proof.consumed).toBe(true);
      expect(qualified.proof.doctrineStatus).toBe("product-studio-native");
      expect(qualified.proof.source).toBe("product_package");
      expect(qualified.proof.ckcId).toBe("ckc:studio:w3d-extension-probe");
      expect(qualified.proof.executionAuthority).toBe(false);
      expect(qualified.isMorrisDecision).toBe(false);
      expect(qualified.proof.doctrinePackageId).toBe(
        fixture.packagePin.doctrinePackageId,
      );

      const content = loadProductCkcCognitiveContent({
        registryRoot: fixture.registryRoot,
        cycleTypeId: "cyc:w3d-extension-probe",
        packagePin: fixture.packagePin,
      });
      expect(content).toBeTruthy();
      if (!content) return;
      const treatment = await reasonWithResolvedCkcContext({
        userContent: "Instruire Options",
        projectSummary: "name=W3D-ext",
        intentSummary: "cyc:w3d-extension-probe",
        ckcPromptSection: buildCkcCognitivePromptSection(content),
      });
      expect(treatment.recommendation).toMatch(/W3D_EXTENSION_PROBE_MARKER/);
      expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
    } finally {
      fixture.cleanup();
    }
  });

  it("X-W3D-03 negative: uncovered extension fails closed on QualifyCycleWithCkc (no silent)", async () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const authority = bindCycleTypeCatalogAuthority(extended);
    // Published product package has no binding for the extension type.
    const services = createCkcQualificationServices({
      clock: new FixedClock("2026-08-26T04:00:00.000Z"),
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: PRODUCT_REGISTRY,
      catalogAuthority: authority,
    });
    const qualified = await services.qualifyCycleWithCkc.execute({
      cycleTypeId: "cyc:w3d-extension-probe",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: authority.fingerprint,
      correlationId: "cor:w3d-ext-uncovered",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
    });
    expect(qualified.state).toBe("failure");
    if (qualified.state !== "failure") return;
    expect(
      "isMorrisDecision" in qualified
        ? qualified.isMorrisDecision
        : false,
    ).toBe(false);
    expect(qualified.code.length).toBeGreaterThan(0);
  });

  it("X-W3D-03 negative: mismatched authority fingerprint is fail-closed (HASH-A not decorative)", () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const honest = bindCycleTypeCatalogAuthority(extended);
    const forged = {
      ...honest,
      fingerprint: CYCLE_TYPE_CATALOG_FINGERPRINT, // published hash ≠ extended content
    };
    const projection = projectSelectableCycleType(
      {
        cycleTypeId: "cyc:w3d-extension-probe",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId: "cor:w3d-forged",
      },
      forged,
    );
    expect(projection.ok).toBe(false);
    if (projection.ok) return;
    expect(projection.error.code).toBe("CATALOG_FINGERPRINT_STALE");
  });

  it("R-W3D-03: arbitrary forged fingerprint + honest serialization fails closed on QualifyCycleWithCkc", async () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const honest = bindCycleTypeCatalogAuthority(extended);
    // Honest serialization of extended content, but fingerprint is arbitrary
    // (valid sha256: shape) and NOT HASH-A(catalog). Matching catalogHash
    // would previously pass projection — must fail on actual qualification.
    const arbitraryFingerprint =
      `sha256:${"ab".repeat(32)}` as `sha256:${string}`;
    expect(arbitraryFingerprint).not.toBe(honest.fingerprint);
    const forged = {
      catalog: extended,
      fingerprintSerialization: honest.fingerprintSerialization,
      fingerprint: arbitraryFingerprint,
    };

    const fixture = materializeExtendedProductRegistry();
    let resolveCalls = 0;
    try {
      const base = createCkcQualificationServices({
        clock: new FixedClock("2026-08-26T04:00:00.000Z"),
        doctrinePackagePin: fixture.packagePin,
        registryRoot: fixture.registryRoot,
        catalogAuthority: honest,
      });
      const services = createCkcQualificationServices({
        clock: new FixedClock("2026-08-26T04:00:00.000Z"),
        doctrinePackagePin: fixture.packagePin,
        registryRoot: fixture.registryRoot,
        catalogAuthority: forged,
        resolver: {
          resolve(input) {
            resolveCalls += 1;
            return base.resolver.resolve(input);
          },
        },
      });

      // Covered extension + matching forged catalogHash would SUCCESS without
      // crypto verify — prove fail-closed before CKC resolve / SUCCESS.
      const qualified = await services.qualifyCycleWithCkc.execute({
        cycleTypeId: "cyc:w3d-extension-probe",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: arbitraryFingerprint,
        correlationId: "cor:w3d-arbitrary-forged",
        signals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      });

      expect(qualified.state).toBe("failure");
      if (qualified.state !== "failure") return;
      expect(qualified.code).toBe("CATALOG_FINGERPRINT_STALE");
      expect(resolveCalls).toBe(0);
      expect(
        "isMorrisDecision" in qualified ? qualified.isMorrisDecision : false,
      ).toBe(false);
      expect("proof" in qualified).toBe(false);
    } finally {
      fixture.cleanup();
    }
  });
});

describe("W3-D US-P1-09/14 — full applicable coverage + package consistency", () => {
  it("X-W3D-04/05: every active catalog entry has resolvable Product CKC binding", () => {
    const loaded = loadProductCkcIndexSync({
      registryRoot: PRODUCT_REGISTRY,
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const active = listCycleTypes();
    expect(active.length).toBeGreaterThanOrEqual(1);
    for (const entry of active) {
      const binding = findProductCkcIndexEntry(loaded.index, entry.cycleTypeId);
      expect(binding, `silent uncovered: ${entry.cycleTypeId}`).toBeTruthy();
      const content = loadProductCkcCognitiveContent({
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: entry.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      expect(content, `unresolvable CKC content: ${entry.cycleTypeId}`).toBeTruthy();
      expect(content?.ckcId).toBe(binding?.ckcId);
      expect(content?.provenance.contentDigest).toBe(binding?.sourceDigest);
      expect(content?.provenance.packageDigest).toBe(
        DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      );
    }
  });

  it("X-W3D-05 negative: unknown / uncovered cycleType fails closed (no silent)", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:does-not-exist",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeNull();
  });
});

describe("W3-D US-P1-14 — semantic consumption + causality", () => {
  it("X-W3D-06: consumed=true alone is insufficient — content must reach Nora", async () => {
    const control = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: null,
    });
    expect(control.recommendation.toLowerCase()).toContain("générique");

    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(delivery).toBeTruthy();
    if (!delivery) return;
    const treatment = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(delivery),
    });
    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(treatment.recommendation).not.toBe(control.recommendation);
  });

  it("X-W3D-07: representative materially different CKCs differentiate Nora outputs", async () => {
    const outputs: string[] = [];
    for (const sample of REPRESENTATIVE_CAUSAL_TYPES) {
      const content = loadProductCkcCognitiveContent({
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: sample.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      expect(content, sample.label).toBeTruthy();
      if (!content) return;
      const reasoned = await reasonWithResolvedCkcContext({
        userContent: "Instruire Options",
        projectSummary: `name=${sample.label}`,
        intentSummary: sample.cycleTypeId,
        ckcPromptSection: buildCkcCognitivePromptSection(content),
      });
      expect(reasoned.recommendation).toMatch(sample.expectReco);
      expect(reasoned.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
      outputs.push(reasoned.recommendation);
    }
    const unique = new Set(outputs);
    expect(unique.size).toBe(REPRESENTATIVE_CAUSAL_TYPES.length);
  });

  it("X-W3D-06/08/11: W2 product path proposes with CKC attribution, no HD/authority", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-p1.sqlite"),
      idPrefix: "w3dp1",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "w3d",
      cycleTypeId: "cyc:delivery",
    });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.ckcCognitionCompletedBeforeMutation).toBe(true);
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(proposed.recommendation.ckcProvenance?.contentDigest).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.ckcProvenance?.semanticFingerprint).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.rationale).not.toMatch(/\[CKC:/);
    expect(proposed.recommendation.rationale).not.toMatch(/ckc:studio:/);
  });

  it("X-W3D-06: post-Evidence Nora consumes same CKC cognitive seam", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(delivery).toBeTruthy();
    if (!delivery) return;
    const analysis = await analyzePostEvidenceWithProvider(
      {
        projectId: "prj:w3d",
        executionContractId: "ec:w3d",
        executionContractStatus: "executed",
        executionContractAction: "noop",
        attemptId: "att:w3d",
        attemptStatus: "succeeded",
        selectedAgentRef: "agent:test",
        adapterRef: "adp:test",
        executionMode: "fixture",
        realProcessInvoked: false,
        evidenceId: "ev:w3d",
        reviewBundleId: "rb:w3d",
        technicalResultRef: null,
        reservations: [],
      },
      { ckcPromptSection: buildCkcCognitivePromptSection(delivery) },
    );
    expect(analysis.ok).toBe(true);
    if (!analysis.ok) return;
    expect(analysis.text.toLowerCase()).toMatch(/anti scope creep/);
    expect(analysis.text).toContain("PAS UNE DÉCISION HUMAINE");
  });
});

describe("W3-D fail-closed / negative / no method fallback", () => {
  it("X-W3D-09: provider cognition failure blocks W2 mutation", async () => {
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-fail.sqlite"),
      idPrefix: "w3dfail",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "fail",
      cycleTypeId: "cyc:delivery",
    });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROVIDER_COGNITION_FAILED");
    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("X-W3D-09: CKC unavailable blocks W2 mutation", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-uncov.sqlite"),
      idPrefix: "w3dunc",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "uncov",
      cycleTypeId: "cyc:delivery",
    });
    // Corrupt pin digest → load fails closed
    const oa = runtime.oa!;
    const { resolveW2QualificationInputs } = await import(
      "@/features/project-assistant/w2/qualificationInputs"
    );
    const { proposeTrajectoryOptions } = await import(
      "@/features/project-assistant/w2/proposeTrajectoryOptions"
    );
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: {
        ...qualification.qualification.packagePin,
        digest: ("sha256:" + "0".repeat(64)) as `sha256:${string}`,
      },
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("CKC_UNAVAILABLE");
  });

  it("X-W3D-10: no method/v2.6 fallback strings on cognitive path", () => {
    const ckcCtx = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/ckcCognitiveContext.ts",
      ),
      "utf8",
    );
    const propose = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/proposeTrajectoryOptions.ts",
      ),
      "utf8",
    );
    const post = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/w3cPostEvidenceLoop.ts",
      ),
      "utf8",
    );
    for (const src of [ckcCtx, propose, post]) {
      expect(src).not.toMatch(/sfia-fast-track/);
      expect(src).not.toMatch(/method\/sfia/);
      expect(src).not.toMatch(/v2\.6.*fallback/i);
    }
  });

  it("X-W3D-11: provenance chain reconstructible for representative type", () => {
    const loaded = loadProductCkcIndexSync({
      registryRoot: PRODUCT_REGISTRY,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const binding = findProductCkcIndexEntry(loaded.index, "cyc:security")!;
    expect(content.provenance.doctrinePackageId).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    );
    expect(content.provenance.packageVersion).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    );
    expect(content.provenance.packageDigest).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    );
    expect(loaded.indexDigest).toBe(loaded.index.digest);
    expect(content.ckcId).toBe(binding.ckcId);
    expect(content.provenance.contentDigest).toBe(binding.sourceDigest);
    expect(computeCkcSemanticFingerprint(content.provenance)).toMatch(
      /^sha256:/,
    );
  });
});
