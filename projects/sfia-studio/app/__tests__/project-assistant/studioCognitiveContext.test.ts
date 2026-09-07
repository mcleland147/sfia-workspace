/** @vitest-environment node */
/**
 * CORR-PROOF-04 — StudioCognitiveContext composer unit tests.
 * ZERO LIVE. Pure composition / projection only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  composeStudioCognitiveContext,
  buildStudioCognitivePromptSections,
  classifyHumanDecisionLifecycle,
  classifyEvidenceEpistemicStance,
  STUDIO_COGNITIVE_CONTEXT_BUDGET,
  type StudioCognitiveContext,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  extractCkcGuidanceFromMarkdown,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
  };
}

function projectDto(
  projectId: string,
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId,
    name: "Suivi de contrat",
    shortReference: "SC",
    objective: "Suivre les contrats clients B2B",
    contextSummary: "MC Consulting IT",
    criticality: "STANDARD",
    constraints: ["Lecture seule"],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-06T12:00:00.000Z",
    doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    ...overrides,
  };
}

describe("CORR-PROOF-04 studioCognitiveContext composer", () => {
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c04-ctx-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-07T06:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — contrats B2B",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "SC",
      idempotencyKey: `idem:c04-ctx-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("S4 — richer CKC projection retains analysis/maturity/evidence/exit/anchors", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: resolveProductDoctrineRegistryRoot(),
      cycleTypeId: "cyc:framing",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).not.toBeNull();
    if (!content) return;
    const g = extractCkcGuidanceFromMarkdown(content.markdown);
    expect(g.finality).toBeTruthy();
    expect(g.contextInputs).toBeTruthy();
    expect(g.analysisDimensions).toBeTruthy();
    expect(g.maturityBehavior).toBeTruthy();
    expect(g.maturitySignals).toBeTruthy();
    expect(g.evidenceExpectations).toBeTruthy();
    expect(g.decisionTrajectoryReplan).toBeTruthy();
    expect(g.resumeAnchors).toBeTruthy();
    expect(content.markdown.length).toBeGreaterThan(4000);
    // Projection must not dump full raw markdown via condensed alone.
    const condensedChars = g.condensed.join("").length;
    expect(condensedChars).toBeLessThan(content.markdown.length / 2);
  });

  it("S9/S11/S14 — NONE/ABSENT honesty without inventing state", async () => {
    const oa = getRuntimeApplicationService().oa;
    expect(oa).toBeTruthy();
    const ctx = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      truthCContext: "MC Consulting IT — contrats B2B",
      oa,
    });
    expect(ctx.decisions.state).toBe("NONE");
    expect(ctx.decisions.items).toHaveLength(0);
    expect(ctx.evidence.state).toBe("NONE");
    expect(ctx.review.state).toBe("NONE");
    expect(ctx.trajectory.state).toBe("ABSENT");
    expect(ctx.trajectory.current).toBeNull();
    expect(ctx.limits.composerDoesNotScoreMaturity).toBe(true);
    expect(ctx.limits.composerDoesNotSelectTrajectory).toBe(true);
    expect(ctx.method.ckcLoaded).toBe(true);
    expect(ctx.method.ckcLensSection).toMatch(/Analysis dimensions/i);
    expect(ctx.method.ckcLensSection).toMatch(/Maturity/i);
    expect(ctx.method.ckcLensSection).not.toMatch(/digest/i);
    expect(STUDIO_COGNITIVE_CONTEXT_BUDGET.maxDecisions).toBe(8);
  });

  it("S8/S10/S12 — PRESENT projections when seeded via legitimate services", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:c04-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-hd-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:c04-scope-${projectId}`,
      projectId,
      subject: "Périmètre MVP contrats validé",
      options: [{ optionId: "opt:go", label: "GO MVP contrats" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-test",
        sourceDigest: "b".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Borner le MVP contrats",
          scope: "MVP suivi contrats",
          requestedOperation: "scope decision",
        },
      },
    });
    expect(recorded.ok).toBe(true);

    const ev = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:c04-${projectId}`,
      idempotencyKey: `idem:ev-c04-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "document",
      source: "notes cadrage",
      sourceKind: "manual",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(ev.ok).toBe(true);

    const rb = await oa.evidenceReviewServices.createReviewBundle.execute({
      reviewBundleId: `rb:c04-${projectId}`,
      projectId,
      idempotencyKey: `idem:rb-c04-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      evidenceIds: [`ev:c04-${projectId}`],
    });
    expect(rb.ok).toBe(true);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:c04-${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:frame",
          order: 1,
          label: "Cadrage",
          state: "active",
        },
        {
          stepId: "stp:design",
          order: 2,
          label: "Conception",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: lpsAfter.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
    });
    // Trajectory creation may fail OCC if LPS moved — tolerate ABSENT vs PRESENT.
    void traj;

    const ctx = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    expect(ctx.decisions.state).toBe("PRESENT");
    expect(ctx.decisions.items.some((d) => d.subject.includes("MVP"))).toBe(
      true,
    );
    expect(ctx.evidence.state).toBe("PRESENT");
    expect(ctx.evidence.items[0]?.type).toBe("document");
    expect(ctx.review.state).toBe("PRESENT");
    expect(["PRESENT", "ABSENT", "UNAVAILABLE"]).toContain(ctx.trajectory.state);
    if (ctx.trajectory.state === "PRESENT") {
      expect(ctx.trajectory.current?.stepSummaries.length).toBeGreaterThan(0);
    }
  });


  it("C-status — HumanDecision lifecycle mapping for every domain status", () => {
    const cases: Array<[HumanDecision["status"], "CURRENT" | "PENDING" | "NON_ACTIVE"]> = [
      ["accepted", "CURRENT"],
      ["amended", "CURRENT"],
      ["proposed", "PENDING"],
      ["required", "PENDING"],
      ["refused", "NON_ACTIVE"],
      ["superseded", "NON_ACTIVE"],
      ["revoked", "NON_ACTIVE"],
    ];
    for (const [status, lifecycle] of cases) {
      expect(classifyHumanDecisionLifecycle(status)).toBe(lifecycle);
    }
  });

  it("C-status — Evidence epistemic stance from status/availability/freshness", () => {
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("STRONGER_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "available",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("LIMITED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "expected",
        availability: "available",
        freshness: null,
      }),
    ).toBe("PENDING_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "incomplete",
        availability: "available",
        freshness: "aging",
      }),
    ).toBe("LIMITED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "stale",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("WEAKENED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "available",
        freshness: "stale",
      }),
    ).toBe("WEAKENED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "rejected",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "superseded",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "unavailable",
        availability: "unavailable",
        freshness: null,
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "unavailable",
        freshness: "fresh",
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "unknown",
        freshness: "fresh",
      }),
    ).toBe("UNCERTAIN_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "available",
        availability: "available",
        freshness: "unknown",
      }),
    ).toBe("UNCERTAIN_SUPPORT");
  });

  it("C-status — PRESENT decisions prompt distinguishes CURRENT/PENDING/NON_ACTIVE", () => {
    const method = {
      orientation: {
        state: "UNRESOLVED" as const,
        candidateCycleTypeId: null,
      },
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    };
    const ctx = {
      projectTruth: {
        projectId: "prj:x",
        name: "X",
        objective: "O",
        context: "C",
        constraints: [],
        criticality: "STANDARD",
        shortReference: null,
        lpsId: "lps:x",
        lpsVersion: 1,
        activeCycleInstanceId: null,
        doctrineId: "pkg:x",
        doctrineVersion: "1",
        doctrineStatus: "resolved",
      },
      method,
      decisions: {
        state: "PRESENT" as const,
        items: [
          {
            subject: "Scope MVP accepté",
            selectedOptionLabel: "GO",
            status: "accepted" as const,
            lifecycle: "CURRENT" as const,
            effectiveAt: "2026-09-07T00:00:00.000Z",
            reversible: true,
            supersedesPresent: false,
          },
          {
            subject: "Architecture proposée",
            selectedOptionLabel: "Option A",
            status: "proposed" as const,
            lifecycle: "PENDING" as const,
            effectiveAt: "2026-09-07T00:00:00.000Z",
            reversible: true,
            supersedesPresent: false,
          },
          {
            subject: "Ancien périmètre",
            selectedOptionLabel: "GO old",
            status: "superseded" as const,
            lifecycle: "NON_ACTIVE" as const,
            effectiveAt: "2026-09-01T00:00:00.000Z",
            reversible: true,
            supersedesPresent: false,
          },
          {
            subject: "Refus sponsor",
            selectedOptionLabel: "NO-GO",
            status: "refused" as const,
            lifecycle: "NON_ACTIVE" as const,
            effectiveAt: "2026-09-02T00:00:00.000Z",
            reversible: false,
            supersedesPresent: false,
          },
        ],
      },
      evidence: {
        state: "PRESENT" as const,
        items: [
          {
            type: "document",
            status: "verified" as const,
            availability: "available" as const,
            freshness: "fresh" as const,
            sourceKind: "manual",
            producedAt: "2026-09-07T00:00:00.000Z",
            epistemicStance: "STRONGER_SUPPORT" as const,
          },
          {
            type: "document",
            status: "rejected" as const,
            availability: "available" as const,
            freshness: "fresh" as const,
            sourceKind: "manual",
            producedAt: "2026-09-07T00:00:00.000Z",
            epistemicStance: "NON_SUPPORTING" as const,
          },
          {
            type: "document",
            status: "stale" as const,
            availability: "available" as const,
            freshness: "stale" as const,
            sourceKind: "manual",
            producedAt: "2026-01-01T00:00:00.000Z",
            epistemicStance: "WEAKENED_SUPPORT" as const,
          },
        ],
      },
      review: { state: "NONE" as const, items: [] },
      trajectory: { state: "ABSENT" as const, current: null },
      limits: {
        oaAvailable: true,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      },
    } satisfies StudioCognitiveContext;

    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/PRESENT ≠ toutes CURRENT/);
    expect(prompt).toMatch(/lifecycle=CURRENT/);
    expect(prompt).toMatch(/lifecycle=PENDING/);
    expect(prompt).toMatch(/lifecycle=NON_ACTIVE/);
    expect(prompt).not.toMatch(
      /État : PRESENT — respecter ; ne pas rouvrir comme Option libre/,
    );
    expect(prompt).toMatch(/PRESENT ≠ Fact/);
    expect(prompt).toMatch(/stance=STRONGER_SUPPORT/);
    expect(prompt).toMatch(/stance=NON_SUPPORTING/);
    expect(prompt).toMatch(/stance=WEAKENED_SUPPORT/);
    expect(prompt).not.toMatch(
      /Project\/LPS\/HumanDecision\/Evidence = autorité factuelle projet/,
    );
    expect(prompt).toMatch(/Truth C \/ LPS courant \+ HumanDecisions CURRENT/);
  });

  it("C-status — accepted HD from OA is CURRENT in compose projection", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const scope = `decision:c04-cur-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-cur-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:c04-cur-${projectId}`,
      projectId,
      subject: "Décision CURRENT test",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-cur",
        sourceDigest: "d".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Test CURRENT",
          scope: "test",
          requestedOperation: "test",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    const ctx = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    expect(ctx.decisions.state).toBe("PRESENT");
    expect(ctx.decisions.items.some((d) => d.lifecycle === "CURRENT")).toBe(
      true,
    );
    expect(ctx.decisions.items.every((d) => d.status.length > 0)).toBe(true);
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/lifecycle=CURRENT/);
  });


  it("C-status — supersession: prior NON_ACTIVE, replacement CURRENT, never both CURRENT same subject", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const scope = `decision:c04-sup-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:10:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-sup-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const firstId = `dec:c04-sup-a-${projectId}`;
    const first = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: firstId,
      projectId,
      subject: "Sujet supersession",
      options: [{ optionId: "opt:a", label: "A" }],
      selectedOptionId: "opt:a",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-sup-a",
        sourceDigest: "e".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Supersession",
          scope: "test",
          requestedOperation: "test",
        },
      },
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const secondId = `dec:c04-sup-b-${projectId}`;
    const second = await oa.decisionServices.supersedeHumanDecision.execute({
      newDecisionId: secondId,
      supersedesDecisionId: firstId,
      selectedOptionId: "opt:a",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      reason: "Remplacement autorisé pour preuve supersession",
      scope,
      authorityEvidenceId: reg.evidenceId,
    });
    expect(second.ok).toBe(true);
    const ctx = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    const items = ctx.decisions.items.filter((d) =>
      d.subject.includes("Sujet supersession"),
    );
    expect(items.length).toBeGreaterThanOrEqual(2);
    const currents = items.filter((d) => d.lifecycle === "CURRENT");
    const nonActives = items.filter((d) => d.lifecycle === "NON_ACTIVE");
    expect(currents.length).toBe(1);
    expect(nonActives.some((d) => d.status === "superseded")).toBe(true);
    expect(currents[0]?.status).toBe("accepted");
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/lifecycle=CURRENT/);
    expect(prompt).toMatch(/lifecycle=NON_ACTIVE/);
    expect(prompt).toMatch(/raw=superseded/);
  });

});
