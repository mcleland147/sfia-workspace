// @vitest-environment node
/**
 * W2 Track D / bounded CKC Phase B — deterministic product-native exit proof.
 * FakeConversationProvider only · same production W2 path · STOP BEFORE EXECUTE.
 * Proof ceiling: DETERMINISTIC PROVEN ≠ REAL.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildCkcCognitivePromptSection,
  computeCkcSemanticFingerprint,
  isProductStudioNativeCkcProof,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { BOUNDED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
  W2_TEST_ACTOR,
} from "./w2Harness";

const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot();

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
});

async function proposeFor(
  runtime: ReturnType<typeof bootW2Runtime>,
  projectId: string,
) {
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qualification failed");
  return {
    qualification,
    proposed: await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    }),
  };
}

describe("Phase B P1/P2 — product-native resolution", () => {
  it("P1: cyc:delivery resolves product package CKC with provenance", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    expect(content?.ckcId).toBe("ckc:studio:delivery");
    expect(content?.provenance.doctrinePackageId).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    );
    expect(content?.provenance.contentDigest).toMatch(/^sha256:/);
    expect(content?.markdown.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });

  it("P2: cyc:security resolves via same path with distinct ckcId/digest", () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const security = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(security).toBeTruthy();
    expect(security?.ckcId).toBe("ckc:studio:security");
    expect(security?.ckcId).not.toBe(delivery?.ckcId);
    expect(security?.provenance.contentDigest).not.toBe(
      delivery?.provenance.contentDigest,
    );
    expect(security?.markdown.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
  });
});

describe("Phase B P3/P4 — control vs treatment semantic cause", () => {
  it("P3: delivery CKC treatment differs from no-CKC control", async () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    if (!content) return;
    const control = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: null,
    });
    const treatment = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(content),
    });
    expect(control.recommendation.toLowerCase()).toContain("générique");
    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
  });

  it("P4: security CKC treatment is semantically distinct from delivery", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const security = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const d = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(delivery),
    });
    const s = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:security",
      ckcPromptSection: buildCkcCognitivePromptSection(security),
    });
    expect(d.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(s.recommendation.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
    expect(d.recommendation).not.toBe(s.recommendation);
  });
});

describe("Phase B P5–P9 — W2 product path ordering / integrity", () => {
  it("P5/P6/P7/P8/P9: cognition before mutation; provenance; no HD/authority/Execute", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p5.sqlite"),
      idPrefix: "pbp5",
    });
    expect(W2_REGISTRY_ROOT).toContain("doctrine/product");
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "p5",
      cycleTypeId: "cyc:delivery",
    });
    const { proposed } = await proposeFor(runtime, seeded.projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    expect(proposed.ckcCognitionCompletedBeforeMutation).toBe(true);
    expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(proposed.recommendation.ckcProvenance?.contentDigest).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.ckcProvenance?.semanticFingerprint).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    // R1-UX: business-first rationale / statement
    expect(proposed.recommendation.rationale).not.toMatch(/\[CKC:/);
    expect(proposed.recommendation.rationale).not.toMatch(/ckc:studio:/);
    expect(proposed.recommendation.rationale).not.toMatch(/digest=/);
    expect(proposed.recommendation.rationale).not.toMatch(/\bfp=/);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.proposedTrajectory.status).toBe("candidate");
    expect(proposed.proposedTrajectory.isCurrent).toBe(false);

    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    expect(presented.presented.ckcSemanticFingerprint).toBe(
      proposed.recommendation.ckcProvenance?.semanticFingerprint,
    );

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const recItem = epistemic.state.items.find(
      (i) =>
        i.type === "Recommendation" &&
        i.status === "active" &&
        i.source === proposed.optionSetRef,
    );
    expect(recItem).toBeTruthy();
    expect(recItem!.statement).not.toMatch(/CKC provenance:/);
    expect(recItem!.statement).not.toMatch(/digest=/);
    expect(recItem!.statement).not.toMatch(/\bfp=/);
    expect(recItem!.statement).not.toMatch(/\[CKC:/);
  });

  it("two-cycle same production path: delivery vs security", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-2cyc.sqlite"),
      idPrefix: "pb2c",
    });
    const deliverySeed = await seedQualifiedProject(runtime, {
      suffix: "del",
      cycleTypeId: "cyc:delivery",
    });
    const delivery = await proposeFor(runtime, deliverySeed.projectId);
    expect(delivery.proposed.ok).toBe(true);
    if (!delivery.proposed.ok) return;

    const securitySeed = await seedQualifiedProject(runtime, {
      suffix: "sec",
      cycleTypeId: "cyc:security",
    });
    const security = await proposeFor(runtime, securitySeed.projectId);
    expect(security.proposed.ok).toBe(true);
    if (!security.proposed.ok) return;

    expect(delivery.proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(security.proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:security",
    );
    expect(delivery.proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(security.proposed.recommendation.rationale.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
    expect(
      delivery.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    ).not.toBe(
      security.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    );
  });
});

describe("Phase B P10 — requalification via existing createCycle", () => {
  it("honest cycle-type change yields distinct fingerprint / binding", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p10.sqlite"),
      idPrefix: "pbp10",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "rq",
      cycleTypeId: "cyc:delivery",
    });
    const first = await proposeFor(runtime, seeded.projectId);
    expect(first.proposed.ok).toBe(true);
    if (!first.proposed.ok) return;
    const v1 = first.proposed.proposedTrajectory.version;

    const overview = await runtime.getProject(seeded.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const requal = await runtime.oa!.cycleServices.createCycle.execute({
      cycleInstanceId: "cyc:inst:w2-rq-sec",
      cycleTypeId: "cyc:security",
      projectId: seeded.projectId,
      signals: {},
      objective: "Requalification sécurité",
      scope: "w2-requal",
      createdBy: W2_TEST_ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: overview.livingState.version,
      ckcResolutionRef: "ckcres:w2-harness-sec",
    });
    expect(requal.ok).toBe(true);

    const second = await proposeFor(runtime, seeded.projectId);
    expect(second.proposed.ok).toBe(true);
    if (!second.proposed.ok) return;
    expect(second.proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:security",
    );
    expect(
      second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    ).not.toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
    expect(second.proposed.proposedTrajectory.version).toBeGreaterThan(v1);
  });
});

describe("Phase B P11 — fail closed before mutation", () => {
  it("P11A: missing cycle CKC yields no trajectory", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p11a.sqlite"),
      idPrefix: "p11a",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p11a" });
    const oa = runtime.oa!;
    const overview = await runtime.getProject(seeded.projectId);
    if (!overview.ok) throw new Error("overview");
    // Force an unknown cycle type that is not in the product index.
    const bad = await oa.cycleServices.createCycle.execute({
      cycleInstanceId: "cyc:inst:w2-p11a-bad",
      cycleTypeId: "cyc:nonexistent-phase-b",
      projectId: seeded.projectId,
      signals: {},
      objective: "fail closed",
      scope: "p11a",
      createdBy: W2_TEST_ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: overview.livingState.version,
      ckcResolutionRef: "ckcres:bad",
    });
    // createCycle may accept unknown type at OA level; propose must fail closed.
    if (bad.ok) {
      const proposed = await proposeW2OptionsForProject(
        runtime,
        seeded.projectId,
      );
      expect(proposed.ok).toBe(false);
      if (proposed.ok) return;
      expect(proposed.code).toBe("CKC_UNAVAILABLE");
    }
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(traj.ok).toBe(false);
  });

  it("P11B: forced fake-provider error → no OptionSet/trajectory mutation", async () => {
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p11b.sqlite"),
      idPrefix: "p11b",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p11b" });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROVIDER_COGNITION_FAILED");

    const latest = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(latest.ok).toBe(false);
    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    if (epistemic.ok) {
      const options = epistemic.state.items.filter((i) => i.type === "Option");
      const recs = epistemic.state.items.filter(
        (i) => i.type === "Recommendation",
      );
      expect(options).toHaveLength(0);
      expect(recs).toHaveLength(0);
    }
  });
});

describe("Phase B I1–I4 — binding / idempotence (PB-DLV-01)", () => {
  it("I1: exact semantic retry reuses candidate version", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-i1.sqlite"),
      idPrefix: "pbi1",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "i1" });
    const first = await proposeFor(runtime, seeded.projectId);
    expect(first.proposed.ok).toBe(true);
    if (!first.proposed.ok) return;
    const second = await proposeFor(runtime, seeded.projectId);
    expect(second.proposed.ok).toBe(true);
    if (!second.proposed.ok) return;
    expect(second.proposed.proposedTrajectory.version).toBe(
      first.proposed.proposedTrajectory.version,
    );
    expect(second.proposed.proposedTrajectory.trajectoryId).toBe(
      first.proposed.proposedTrajectory.trajectoryId,
    );
  });

  it("I2: superficial provider rewording does not bump trajectory version", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-i2.sqlite"),
      idPrefix: "pbi2",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "i2" });
    const first = await proposeFor(runtime, seeded.projectId);
    expect(first.proposed.ok).toBe(true);
    if (!first.proposed.ok) return;

    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: [
          "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : WORDING VARIANT A. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
        ],
      }),
    );
    // Scripted complete() is only used when NOT matching CKC system marker branch.
    // Force a provider that still matches CKC branch but with different wording via subclass:
    setConversationProviderForTests(
      new (class extends FakeConversationProvider {
        override async complete(
          messages: Parameters<FakeConversationProvider["complete"]>[0],
        ) {
          const base = await super.complete(messages);
          if (
            messages.some(
              (m) =>
                m.role === "system" &&
                m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
            )
          ) {
            return {
              ...base,
              text: `${base.text} · WORDING VARIANT SUPERFICIEL`,
            };
          }
          return base;
        }
      })(),
    );

    const second = await proposeFor(runtime, seeded.projectId);
    expect(second.proposed.ok).toBe(true);
    if (!second.proposed.ok) return;
    expect(second.proposed.proposedTrajectory.version).toBe(
      first.proposed.proposedTrajectory.version,
    );
    // Rationale may differ in wording but fingerprint (binding) is stable.
    expect(
      second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    ).toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
  });

  it("I3: material cycle/CKC change changes binding", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const security = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    expect(computeCkcSemanticFingerprint(delivery.provenance)).not.toBe(
      computeCkcSemanticFingerprint(security.provenance),
    );
  });

  it("I4: HumanDecision binds exact presented OptionSet", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-i4.sqlite"),
      idPrefix: "pbi4",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "i4" });
    const { proposed } = await proposeFor(runtime, seeded.projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const selected =
      proposed.options.find((o) => o.optionRef === BOUNDED_OPTION_REF) ??
      proposed.options[0]!;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: selected.optionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      epistemicRefs: proposed.epistemicRefs,
      reservesText: null,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory.isCurrent).toBe(true);
    expect(decided.decision.selectedOptionRef).toBe(selected.optionRef);
    expect(decided.executionPerformed).toBe(false);
  });
});

describe("Phase B R1 — semantic Fake oracle (content-only)", () => {
  it("R1-S01/S02/S03: specialized Fake requires semantic content; ID-only stays generic", async () => {
    const {
      FakeConversationProvider,
      setConversationProviderForTests,
    } = await import("@/lib/platform/ai");
    const {
      CKC_COGNITIVE_REASONING_SYSTEM_MARKER,
    } = await import("@/features/project-assistant/f2/ckcCognitiveContext");

    const provider = new FakeConversationProvider();
    setConversationProviderForTests(provider);

    const deliveryContent = await provider.complete([
      {
        role: "system",
        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nGuidance: anti scope creep — borner le slice.`,
      },
      { role: "user", content: "Instruire" },
    ]);
    expect(deliveryContent.text.toLowerCase()).toMatch(/anti scope creep/);

    const securityContent = await provider.complete([
      {
        role: "system",
        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nGuidance: posture adversarial ; risque résiduel ; secret en repo.`,
      },
      { role: "user", content: "Instruire" },
    ]);
    expect(securityContent.text.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );

    const idOnlySecurity = await provider.complete([
      {
        role: "system",
        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nCKC ckc:studio:security (cyc:security) — no distinctive guidance.`,
      },
      { role: "user", content: "Instruire" },
    ]);
    expect(idOnlySecurity.text.toLowerCase()).toContain("générique");
    expect(idOnlySecurity.text.toLowerCase()).not.toMatch(
      /adversarial|risque résiduel|secret en repo/,
    );

    const idOnlyDelivery = await provider.complete([
      {
        role: "system",
        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nCKC ckc:studio:delivery (cyc:delivery) — no distinctive guidance.`,
      },
      { role: "user", content: "Instruire" },
    ]);
    expect(idOnlyDelivery.text.toLowerCase()).toContain("générique");
    expect(idOnlyDelivery.text.toLowerCase()).not.toMatch(/anti scope creep/);
  });
});

describe("Phase B R1 — canonical product-native proof gate", () => {
  const completeCanonical = () =>
    ({
      cycleTypeId: "cyc:delivery",
      detailedStatus: "resolved_detailed" as const,
      level: "detailed" as const,
      status: "resolved" as const,
      source: "product_package" as const,
      expectedPrimaryReference: "ckc:studio:delivery",
      usedReference: "ckc:studio:delivery",
      fallbackUsed: false,
      catalogVersion: "test",
      catalogHash: "sha256:test",
      correlationId: "cor:gate",
      resolvedAt: "2026-08-23T12:00:00.000Z",
      doctrineStatus: "product-studio-native" as const,
      executionAuthority: false as const,
      consumed: true as const,
      disclosures: [] as readonly string[],
      ckcId: "ckc:studio:delivery",
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      indexDigest:
        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      ckcContractVersion: "0.1.0",
      sourceDigest:
        "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
    }) as const;

  it("R1-G01: complete canonical flat product-native proof passes", () => {
    expect(isProductStudioNativeCkcProof(completeCanonical())).toBe(true);
  });

  it("R1-G02: product-studio-native + ckcId only fails", () => {
    expect(
      isProductStudioNativeCkcProof({
        cycleTypeId: "cyc:delivery",
        detailedStatus: "resolved_detailed",
        level: "detailed",
        status: "resolved",
        source: "product_package",
        expectedPrimaryReference: "ckc:studio:delivery",
        usedReference: "ckc:studio:delivery",
        fallbackUsed: false,
        catalogVersion: "test",
        catalogHash: "sha256:test",
        correlationId: "cor:id-only",
        resolvedAt: "2026-08-23T12:00:00.000Z",
        doctrineStatus: "product-studio-native",
        executionAuthority: false,
        consumed: true,
        disclosures: [],
        ckcId: "ckc:studio:delivery",
      }),
    ).toBe(false);
  });

  it("R1-G03: nested packageProvenance alone with incomplete flat proof fails", () => {
    expect(
      isProductStudioNativeCkcProof({
        cycleTypeId: "cyc:delivery",
        detailedStatus: "resolved_detailed",
        level: "detailed",
        status: "resolved",
        source: "product_package",
        expectedPrimaryReference: "ckc:studio:delivery",
        usedReference: "ckc:studio:delivery",
        fallbackUsed: false,
        catalogVersion: "test",
        catalogHash: "sha256:test",
        correlationId: "cor:nested",
        resolvedAt: "2026-08-23T12:00:00.000Z",
        doctrineStatus: "product-studio-native",
        executionAuthority: false,
        consumed: true,
        disclosures: [],
        packageProvenance: {
          ckcId: "ckc:studio:delivery",
          cycleTypeId: "cyc:delivery",
          doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
          packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
          contentDigest: "sha256:deadbeef",
          doctrineStatus: "product-studio-native",
        },
      }),
    ).toBe(false);
  });

  it("R1-G04: wrong source fails", () => {
    expect(
      isProductStudioNativeCkcProof({
        ...completeCanonical(),
        source: "repository_candidate",
      }),
    ).toBe(false);
  });

  it("R1-G05: fallbackUsed true fails", () => {
    expect(
      isProductStudioNativeCkcProof({
        ...completeCanonical(),
        fallbackUsed: true,
      }),
    ).toBe(false);
  });

  it("R1-G06: missing required digest/provenance fails", () => {
    const { indexDigest: _drop, ...missingIndex } = completeCanonical();
    expect(isProductStudioNativeCkcProof(missingIndex)).toBe(false);
    const { packageDigest: _drop2, ...missingPkg } = completeCanonical();
    expect(isProductStudioNativeCkcProof(missingPkg)).toBe(false);
  });

  it("R1-G07: usedReference mismatch fails", () => {
    expect(
      isProductStudioNativeCkcProof({
        ...completeCanonical(),
        usedReference: "ckc:other",
      }),
    ).toBe(false);
  });

  it("method-candidate remains false", () => {
    expect(
      isProductStudioNativeCkcProof({
        ...completeCanonical(),
        doctrineStatus: "method-candidate",
        source: "repository_candidate",
      }),
    ).toBe(false);
  });
});

describe("Phase B R1 — legacy pre-Phase-B OptionSet cutover", () => {
  it("R1-CUT01…04: legacy binding without fingerprint is fail-closed; no HD/promote/Execute", async () => {
    const {
      computeQualificationDigest,
      optionSetObservationId,
    } = await import("@/features/project-assistant/w2/presentedOptionSet");
    const { LOCAL_PILOTE_ACTOR } = await import("@/lib/oa/decision");

    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-cutover.sqlite"),
      idPrefix: "pbcut",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "cut",
      cycleTypeId: "cyc:delivery",
    });
    const { proposed } = await proposeFor(runtime, seeded.projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;

    // Construct representative pre-Phase-B binding: no fingerprint, legacy digest.
    const legacyDigest = computeQualificationDigest({
      cycleTypeId: presented.presented.cycleTypeId,
      recommendedProfile: presented.presented.recommendedProfile,
      criticalSignalsPresent: presented.presented.criticalSignalsPresent,
      irreversible: presented.presented.irreversible,
      reservations: presented.presented.reservations,
      ckcAttribution: presented.presented.ckcAttribution,
      ckcSemanticFingerprint: null,
    });
    const legacyBinding = {
      ...presented.presented,
      qualificationDigest: legacyDigest,
      ckcSemanticFingerprint: null,
    };
    // Omit fingerprint key to mimic historical JSON shape.
    const { ckcSemanticFingerprint: _omit, ...legacyWithoutFp } = legacyBinding;
    void _omit;

    await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: optionSetObservationId(proposed.optionSetRef),
          type: "Observation",
          statement: JSON.stringify(legacyWithoutFp),
          status: "active",
          source: proposed.optionSetRef,
          relatedObjects: [seeded.projectId, proposed.optionSetRef],
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });

    const decisionsBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId: seeded.projectId,
      });
    const decisionCountBefore = decisionsBefore.ok
      ? decisionsBefore.decisions.length
      : 0;

    const selected =
      proposed.options.find((o) => o.optionRef === proposed.recommendation.recommendedOptionRef) ??
      proposed.options[0]!;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: selected.optionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      epistemicRefs: proposed.epistemicRefs,
      reservesText: null,
      forceLocalAuthority: true,
    });

    expect(decided.ok).toBe(false);
    if (decided.ok) return;
    expect(decided.code).toBe("OPTION_SET_STALE");

    const decisionsAfter =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId: seeded.projectId,
      });
    const decisionCountAfter = decisionsAfter.ok
      ? decisionsAfter.decisions.length
      : 0;
    expect(decisionCountAfter).toBe(decisionCountBefore);

    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });
});

describe("Phase B gate + genericity", () => {
  it("production cognitive helper has no cycleTypeId branching", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const file = path.join(
      process.cwd(),
      "features/project-assistant/f2/ckcCognitiveContext.ts",
    );
    const text = fs.readFileSync(file, "utf8");
    expect(text).not.toMatch(/if\s*\(\s*cycleType\s*===/);
    expect(text).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
    expect(text).not.toMatch(/DISTINCTIVE_PHRASES/);
  });
});
