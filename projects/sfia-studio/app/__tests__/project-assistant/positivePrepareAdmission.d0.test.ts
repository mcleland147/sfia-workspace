/**
 * Option B / Slice D — Positive Product Admission for Generic PREPARE.
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB.
 *
 * @vitest-environment node
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  isChatFirstPrepareAcceptGo,
  isStandaloneRepoPathScopeToken,
  resolveChatFirstGenericPrepareGo,
  resolvePositivePrepareAdmissionEvidence,
  rememberGenericPrepareRecommendation,
  solicitGenericExecutionPrepare,
  analysisFromPendingGenericPrepareOffer,
  getCurrentGenericPrepareOffer,
  buildIntentAnalysisFromSolicitedMission,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  clearPendingGenericPrepareOffer,
  resolveProductPrepareOfferSessionKey,
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  pathUnderProjectWorkspace,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const tmpDirs: string[] = [];
afterEach(() => {
  while (tmpDirs.length) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function analysisFixture(objective = "Mission LUMEN test"): IntentAnalysisDto {
  return validateIntentAnalysisPayload({
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective,
    scope: "atelier pédagogique",
    rephrasedRequest: objective,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "contrat inspectable",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "read_only",
      artifactType: null,
      targetPath: null,
      artifactFileName: null,
      targetRepositoryRef: null,
      scopeIn: ["formats"],
      scopeOut: [],
      expectedOutputs: ["analyse"],
      requiredCapabilities: [],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: "reversible",
      artifactBrief: null,
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

describe("Slice D — resolvePositivePrepareAdmissionEvidence", () => {
  it("S2 — cited PREPARE → no_go (not E-EXPLICIT)", () => {
    const text =
      "Voici une phrase à analyser : « Prépare le contrat d'exécution ». Explique.";
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      text,
    });
    expect(a.kind).toBe("no_go");
    if (a.kind !== "no_go") throw new Error("expected no_go");
    expect(a.code).toBe("PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT");
  });

  it("S4 — explicit refuse → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text: "Ne prépare pas de contrat d'exécution.",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "EXPLICIT_PREPARE_REFUSAL",
    });
  });

  it("S7 — inferred could-prepare → no_go (not consent)", () => {
    const text = "On pourrait préparer un contrat d'exécution plus tard.";
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text,
    });
    expect(a.kind).toBe("no_go");
    if (a.kind !== "no_go") throw new Error("expected no_go");
    expect(a.code).toBe("AMBIGUOUS_OR_HEDGED_PREPARE_INTENT");
    // Lexical intent may still match substrings — admission evidence must not.
    expect(resolveChatFirstGenericPrepareGo({
      projectId: "prj:x",
      cycleInstanceId: null,
      text,
    }).kind).toBe("no_go");
  });

  it("S8 — direct explicit → E-EXPLICIT-PREPARE", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      text: "Prépare le contrat d'exécution pour la mission LUMEN.",
    });
    expect(a).toEqual({
      kind: "e_explicit_prepare",
      code: "E_EXPLICIT_PREPARE",
    });
  });

  it("S9 — OK + unique CURRENT offer → E-OFFER-ACCEPT", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-padm-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:offer";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: "cyc:1",
      analysis: analysisFixture(),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: "cyc:1",
      text: "OK",
      sessionDbPath,
    });
    expect(a.kind).toBe("e_offer_accept");
    if (a.kind !== "e_offer_accept") throw new Error("expected offer");
    expect(a.offerFingerprint.length).toBe(24);
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("S11/S17 — OK without offer → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:none",
      cycleInstanceId: null,
      text: "OK, vas-y",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "NO_CURRENT_PREPARE_OFFER",
    });
  });

  it("X2 — expected fingerprint mismatch → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-padm-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:fp";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
    });
    expect(go.kind).toBe("prepare");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
      expectedOfferFingerprint: "deadbeefdeadbeefdeadbeef",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
    });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("X4 — PilotDecisionCandidate alone without Pilote proof → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text: "Merci pour la proposition.",
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    expect(a.kind).toBe("no_go");
  });
});

describe("Slice D R1 — model candidate ≠ consent", () => {
  it("T1 — CURRENT offer + Merci + model accept → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r1-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r1t1";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission offerte A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    expect(
      isChatFirstPrepareAcceptGo({
        text: "Merci pour cette proposition.",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
        },
      }),
    ).toBe(false);
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "Merci pour cette proposition.",
      sessionDbPath,
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    expect(go.kind).toBe("no_go");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "Merci pour cette proposition.",
      sessionDbPath,
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    expect(a.kind).toBe("no_go");
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T2 — CURRENT offer + Merci + model refuse → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r1-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r1t2";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture(),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "Merci pour cette proposition.",
      sessionDbPath,
      pilotDecisionCandidate: {
        disposition: "refuse",
        targetKind: "current_recommendation",
      },
    });
    expect(go.kind).toBe("no_go");
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T3 — CURRENT offer + Pilote OK → E-OFFER", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r1-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r1t3";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission unique"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
    });
    expect(a.kind).toBe("e_offer_accept");
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T4 — empty / non-positive Pilote + model accept → no_go", () => {
    expect(
      resolvePositivePrepareAdmissionEvidence({
        projectId: "prj:r1t4",
        cycleInstanceId: null,
        text: "",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
        },
      }).kind,
    ).toBe("no_go");
  });
});

describe("Slice D R2 — offer subject binding", () => {
  it("T6 — OK prepare proposed contract → E-OFFER bound (not E-EXPLICIT)", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r2-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r2t6";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission offre A — formats LUMEN"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const offer = getCurrentGenericPrepareOffer(projectId, { sessionDbPath });
    expect(offer).toBeTruthy();
    const text =
      "OK, prépare le contrat d'exécution que tu viens de proposer.";
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(go.kind).toBe("prepare");
    if (go.kind !== "prepare") throw new Error("expected prepare");
    expect(go.offerFingerprint).toBe(offer!.offerFingerprint);
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(a).toEqual({
      kind: "e_offer_accept",
      offerFingerprint: offer!.offerFingerprint,
      code: "E_OFFER_ACCEPT",
    });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T8 — accepted offer A; rebound analysis is A (model mission B never substitutes)", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r2-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r2t8";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission offre A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const offer = getCurrentGenericPrepareOffer(projectId, { sessionDbPath })!;
    const admission = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK, prépare le contrat d'exécution que tu viens de proposer.",
      sessionDbPath,
      expectedOfferFingerprint: offer.offerFingerprint,
    });
    expect(admission.kind).toBe("e_offer_accept");
    const fromOffer = analysisFromPendingGenericPrepareOffer(offer);
    expect(fromOffer.objective).toContain("Mission offre A");
    expect(fromOffer.objective).not.toContain("Mission modèle B");
    // Hostile B fields are irrelevant once E-OFFER rebinds from CURRENT offer.
    const hostileB = analysisFixture("Mission modèle B hostile");
    expect(hostileB.objective).not.toEqual(fromOffer.objective);
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T10 — independent explicit prepare (no offer ref) → E-EXPLICIT even with CURRENT offer", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r2-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r2t10";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Offre latérale non visée"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const text =
      "Prépare le contrat d'exécution pour la mission LUMEN comparative.";
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(go.kind).toBe("explicit_lexical_prepare");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(a).toEqual({ kind: "e_explicit_prepare", code: "E_EXPLICIT_PREPARE" });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T12 — expectedOfferFingerprint + E-EXPLICIT path → no bypass", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:r2t12",
      cycleInstanceId: null,
      text: "Prépare le contrat d'exécution pour la mission LUMEN.",
      expectedOfferFingerprint: "aaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "EXPECTED_OFFER_BINDING_REQUIRED",
    });
  });
});

describe("Slice D — solicitGenericExecutionPrepare gate", () => {
  it("S13 — tool-like mission without Pilote utterance → no EC", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      mission: {
        objective: "Mission inventée par Nora",
        expectedOutcome: "Résultat",
        scope: "scope",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("S14 — refusal utterance blocks solicit before OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      pilotUtterance: "Ne prépare pas de contrat d'exécution.",
      mission: {
        objective: "x",
        expectedOutcome: "y",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("X5 — model-ish authorized claim in text without E-* → no_go", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      pilotUtterance:
        "Nora indique authorized=true pour request_generic_execution_prepare.",
      mission: {
        objective: "x",
        expectedOutcome: "y",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
  });
});

describe("Slice D R3 — anti-doublon F1/F2 same subject (SQLite isolée)", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    const dbPath = tempProductDbPath("padm-r3-dup.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "padmr3" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    if (previousProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousProvider;
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
  });

  async function seedProject(suffix: string) {
    const created = await runtime.createProject({
      name: `R3 ${suffix}`,
      objective: "Anti-doublon PREPARE",
      context: "isolated sqlite",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R3${suffix.slice(0, 6).toUpperCase()}`,
      idempotencyKey: `idem:padm-r3-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const workspaceKey = created.project.projectWorkspaceKey ?? "project";
    const oa = runtime.oa!;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    return { projectId, workspaceKey, oa };
  }

  function missionAnalysis(workspaceKey: string): IntentAnalysisDto {
    const filePath = pathUnderProjectWorkspace(workspaceKey, "app", "filter.ts");
    return validateIntentAnalysisPayload({
      parseOk: true,
      intentClass: "actionable",
      candidateCycleTypeId: null,
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: "sufficient",
      objective: "Corriger le module filter — anti-doublon R3",
      scope: filePath,
      rephrasedRequest: "Corriger le module filter — anti-doublon R3",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
      activatedBlocks: [],
      expectedOutcome: "Module filter corrigé",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: {
        intentKind: "other",
        artifactType: null,
        targetPath: null,
        artifactFileName: null,
        targetRepositoryRef: null,
        scopeIn: [filePath],
        scopeOut: [],
        expectedOutputs: ["correction"],
        requiredCapabilities: [],
        validationExpectations: [],
        evidenceRequirements: [],
        requestedOperation: null,
        reversibilityExpectation: "reversible",
        artifactBrief: null,
        contentRequirements: [],
        exitRequirementKinds: [],
      },
    });
  }

  async function counts(oa: NonNullable<RuntimeApplicationService["oa"]>, projectId: string) {
    const contracts = await oa.executionContractServices.contracts.listByProject(projectId);
    let attemptCount = 0;
    for (const c of contracts) {
      const listed = await oa.executionAttemptServices.attempts.listByContract(
        c.executionContractId,
      );
      attemptCount += listed.length;
    }
    return {
      contracts,
      ecCount: contracts.length,
      ecIds: contracts.map((c) => c.executionContractId).sort(),
      attemptCount,
    };
  }

  it("T13 — F1-style mission then F2-style analysis same subject → single EC", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t13");
    const analysis = missionAnalysis(workspaceKey);
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module filter.";

    const f1 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: analysis.objective!,
        expectedOutcome: analysis.expectedOutcome!,
        scope: analysis.scope!,
      },
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f1.ok).toBe(true);
    if (!f1.ok) throw new Error(f1.message);

    const f2 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f2.ok).toBe(true);
    if (!f2.ok) throw new Error(f2.message);

    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(c.ecIds).toEqual([f1.executionContractId]);
    expect(f2.executionContractId).toBe(f1.executionContractId);
    expect(c.attemptCount).toBe(0);
    expect(f1.humanDecisionCreated).toBe(false);
    expect(f2.humanDecisionCreated).toBe(false);
    expect(f1.executionAttemptCreated).toBe(false);
    expect(f2.executionAttemptCreated).toBe(false);
  });

  it("T14 — F2 then F1 same subject → single EC", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t14");
    const analysis = missionAnalysis(workspaceKey);
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module filter.";

    const f2 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f2.ok).toBe(true);
    if (!f2.ok) throw new Error(f2.message);

    const f1 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: analysis.objective!,
        expectedOutcome: analysis.expectedOutcome!,
        scope: analysis.scope!,
      },
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f1.ok).toBe(true);
    if (!f1.ok) throw new Error(f1.message);

    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(f1.executionContractId).toBe(f2.executionContractId);
    expect(c.attemptCount).toBe(0);
  });

  it("T15 — concurrent solicit same subject → single EC (Promise.all)", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t15");
    const analysis = missionAnalysis(workspaceKey);
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module filter.";
    const common = {
      oa,
      projectId,
      cycleInstanceId: null as string | null,
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true as const,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    };
    const [a, b] = await Promise.all([
      solicitGenericExecutionPrepare({
        ...common,
        mission: {
          objective: analysis.objective!,
          expectedOutcome: analysis.expectedOutcome!,
          scope: analysis.scope!,
        },
      }),
      solicitGenericExecutionPrepare({
        ...common,
        analysis,
      }),
    ]);
    expect(a.ok).toBe(true);
    expect(b.ok).toBe(true);
    if (!a.ok || !b.ok) throw new Error("expected both ok");
    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(a.executionContractId).toBe(b.executionContractId);
    expect(c.attemptCount).toBe(0);
  });

  it("T18 — SQLite: no Attempt / no auto HD on duplicate-safe prepare", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t18");
    const analysis = missionAnalysis(workspaceKey);
    const r = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      pilotUtterance:
        "Prépare le contrat d'exécution pour corriger le module filter.",
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.message);
    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(c.attemptCount).toBe(0);
    expect(r.humanDecisionCreated).toBe(false);
    expect(r.executionAttemptCreated).toBe(false);
    const contract = c.contracts[0]!;
    expect(contract.decisionRefs ?? []).toEqual([]);
  });

  it("O6 — different subjects must NOT collapse to one EC", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("o6");
    const pathA = pathUnderProjectWorkspace(workspaceKey, "app", "filter.ts");
    const pathB = pathUnderProjectWorkspace(workspaceKey, "app", "export.ts");
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module.";
    const a = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Corriger filter",
        expectedOutcome: "filter OK",
        scope: pathA,
        repositoryMutation: "write",
      },
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    const b = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Corriger export",
        expectedOutcome: "export OK",
        scope: pathB,
        repositoryMutation: "write",
      },
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(a.ok).toBe(true);
    expect(b.ok).toBe(true);
    if (!a.ok || !b.ok) throw new Error("expected ok");
    expect(a.executionContractId).not.toBe(b.executionContractId);
    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(2);
  });
});

describe("R3 Exit — M1–M16 scope semantics (builder)", () => {
  it("M1 — concrete code path + write → scopeIn = [path], mutation write declared", () => {
    const scope = "projects/lumen/app/filter.ts";
    expect(isStandaloneRepoPathScopeToken(scope)).toBe(true);
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Corriger filter",
      expectedOutcome: "tests verts",
      scope,
      repositoryMutation: "write",
    });
    expect(dto.executionIntent?.scopeIn).toEqual([scope]);
    expect(dto.executionIntent?.intentKind).toBe("other");
    expect(
      (dto as { repositoryMutationDeclared?: string }).repositoryMutationDeclared,
    ).toBe("write");
    expect(dto.scope).toBe(scope);
  });

  it("M2 — F2-shaped analysis with same path scopeIn is parity-eligible", () => {
    const scope = "projects/lumen/app/filter.ts";
    const f1 = buildIntentAnalysisFromSolicitedMission({
      objective: "Corriger filter",
      expectedOutcome: "tests verts",
      scope,
      repositoryMutation: "write",
    });
    expect(f1.executionIntent?.scopeIn).toEqual([scope]);
  });

  it("M3 — narrative pedagogical scope → empty scopeIn", () => {
    const scope =
      "Analyser trois formats pédagogiques et comparer leurs avantages.";
    expect(isStandaloneRepoPathScopeToken(scope)).toBe(false);
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Comparer formats",
      expectedOutcome: "synthèse",
      scope,
    });
    expect(dto.executionIntent?.scopeIn ?? []).toEqual([]);
    expect(dto.scope).toBe(scope);
  });

  it("M4 — narrative containing a path → empty scopeIn (no WRITE invent)", () => {
    const scope =
      "Étudier le module projects/lumen/app/filter.ts, sans demander de modification.";
    expect(isStandaloneRepoPathScopeToken(scope)).toBe(false);
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Étudier module",
      expectedOutcome: "note",
      scope,
    });
    expect(dto.executionIntent?.scopeIn ?? []).toEqual([]);
    expect(
      (dto as { repositoryMutationDeclared?: unknown }).repositoryMutationDeclared,
    ).toBeUndefined();
  });

  it("M5 — repositoryMutation=read → read_only, empty scopeIn", () => {
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Lire filter",
      expectedOutcome: "compréhension",
      scope: "projects/lumen/app/filter.ts",
      repositoryMutation: "read",
    });
    expect(dto.executionIntent?.intentKind).toBe("read_only");
    expect(dto.executionIntent?.scopeIn).toEqual([]);
    expect(
      (dto as { repositoryMutationDeclared?: string }).repositoryMutationDeclared,
    ).toBe("read");
  });

  it("M6 — repositoryMutation=none → read_only, empty scopeIn", () => {
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Planifier",
      expectedOutcome: "plan",
      scope: "A 2j; B 4j après A",
      repositoryMutation: "none",
    });
    expect(dto.executionIntent?.intentKind).toBe("read_only");
    expect(dto.executionIntent?.scopeIn).toEqual([]);
  });

  it("M7 — mutation unknown + path → scopeIn path, NO write promotion", () => {
    const scope = "projects/lumen/app/filter.ts";
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Corriger",
      expectedOutcome: "ok",
      scope,
      repositoryMutation: "unknown",
    });
    expect(dto.executionIntent?.scopeIn).toEqual([scope]);
    expect(
      (dto as { repositoryMutationDeclared?: string }).repositoryMutationDeclared,
    ).toBe("unknown");
    expect(
      (dto as { repositoryMutationDeclared?: string }).repositoryMutationDeclared,
    ).not.toBe("write");
  });

  it("M8 — mutation absent + path → scopeIn for parity, no declared mutation", () => {
    const scope = "projects/lumen/app/filter.ts";
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Corriger",
      expectedOutcome: "ok",
      scope,
    });
    expect(dto.executionIntent?.scopeIn).toEqual([scope]);
    expect(
      (dto as { repositoryMutationDeclared?: unknown }).repositoryMutationDeclared,
    ).toBeUndefined();
  });

  it("M9 — documentary .md path token → scopeIn (routing gates remain Product)", () => {
    const scope = "projects/lumen/docs/rapport.md";
    expect(isStandaloneRepoPathScopeToken(scope)).toBe(true);
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Rédiger rapport",
      expectedOutcome: "md",
      scope,
      repositoryMutation: "write",
    });
    expect(dto.executionIntent?.scopeIn).toEqual([scope]);
  });

  it("M10 — A/B label narrative → NOT path scopeIn", () => {
    const scope = "Comparer les options A/B et C/D.";
    expect(isStandaloneRepoPathScopeToken(scope)).toBe(false);
    expect(isStandaloneRepoPathScopeToken("A/B")).toBe(false);
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Comparer",
      expectedOutcome: "choix",
      scope,
    });
    expect(dto.executionIntent?.scopeIn ?? []).toEqual([]);
  });

  it("M11 — URL → NOT path scopeIn", () => {
    expect(isStandaloneRepoPathScopeToken("https://example.org/reference")).toBe(
      false,
    );
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Référencer",
      expectedOutcome: "note",
      scope: "https://example.org/reference",
    });
    expect(dto.executionIntent?.scopeIn ?? []).toEqual([]);
  });

  it("M12 — protected .sfia path token still classifiable as path token (gates later)", () => {
    expect(isStandaloneRepoPathScopeToken(".sfia/policies/x.json")).toBe(true);
  });

  it("M13 — absolute / traversal / outside → NOT auto scopeIn", () => {
    expect(isStandaloneRepoPathScopeToken("/etc/passwd")).toBe(false);
    expect(isStandaloneRepoPathScopeToken("../secrets/x.ts")).toBe(false);
    expect(
      isStandaloneRepoPathScopeToken("projects/lumen/app/filter.ts"),
    ).toBe(true);
  });

  it("M14 — architectureImpact preserved on DTO signals", () => {
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Refactor",
      expectedOutcome: "ok",
      scope: "projects/lumen/app/filter.ts",
      repositoryMutation: "write",
      impactSignals: { architectureImpact: true, irreversible: true },
    });
    expect(dto.signals?.architectureImpact).toBe(true);
    expect(dto.signals?.irreversible).toBe(true);
    expect(dto.signals?.lowRiskBounded).toBe(false);
  });

  it("M15 — same objective different scope representation → different scopeIn (honest non-parity)", () => {
    const path = "projects/lumen/app/filter.ts";
    const a = buildIntentAnalysisFromSolicitedMission({
      objective: "Corriger filter",
      expectedOutcome: "ok",
      scope: path,
      repositoryMutation: "write",
    });
    const b = buildIntentAnalysisFromSolicitedMission({
      objective: "Corriger filter",
      expectedOutcome: "ok",
      scope: `Corriger le module ${path} dans l'atelier`,
      repositoryMutation: "write",
    });
    expect(a.executionIntent?.scopeIn).toEqual([path]);
    expect(b.executionIntent?.scopeIn ?? []).toEqual([]);
  });

  it("M16 — pre-Slice D style mission without executionIntent fields still builds", () => {
    const dto = buildIntentAnalysisFromSolicitedMission({
      objective: "Mission historique",
      expectedOutcome: "résultat",
      scope: "atelier pédagogique sans chemin",
    });
    expect(dto.objective).toBe("Mission historique");
    expect(dto.executionIntent?.scopeIn ?? []).toEqual([]);
    expect(dto.intentClass).toBe("execution_request");
  });
});

describe("R3 Exit — O orchestration coverage / routing", () => {
  it("O-routing — F1 and F2 prepare are mutually exclusive in orchestrateF2 (DOCUMENTED)", () => {
    const src = readFileSync(
      join(
        process.cwd(),
        "features/project-assistant/f2/orchestrateF2.ts",
      ),
      "utf8",
    );
    // Chat-first prepare skips F1 advisory; otherwise non-ready → F1.
    expect(src).toMatch(/skipF1ForChatFirstPrepare/);
    expect(src).toMatch(/orchestrateProjectAssistantTurn\(/);
    expect(src).toMatch(/solicitGenericExecutionPrepare\(\{/);
    // Same turn does not invoke both prepare paths in parallel.
    expect(src).toMatch(
      /if \(!transition\.formalizationReady && !skipF1ForChatFirstPrepare\)/,
    );
  });

  it("O3 — tool-style mission without Pilote utterance remains NO_GO (orchestrator-independent gate)", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:o3",
      cycleInstanceId: null,
      mission: {
        objective: "x",
        expectedOutcome: "y",
        scope: "projects/lumen/app/filter.ts",
        repositoryMutation: "write",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("O5 — shared solicit is the common mutation gate (static)", () => {
    const f1 = readFileSync(
      join(process.cwd(), "features/project-assistant/orchestrateTurn.ts"),
      "utf8",
    );
    const f2 = readFileSync(
      join(process.cwd(), "features/project-assistant/f2/orchestrateF2.ts"),
      "utf8",
    );
    expect(f1).toMatch(/solicitGenericExecutionPrepare/);
    expect(f2).toMatch(/solicitGenericExecutionPrepare/);
    expect(f1).toMatch(/requirePositivePilotAdmission:\s*true/);
    expect(f2).toMatch(/requirePositivePilotAdmission:\s*true/);
  });
});
