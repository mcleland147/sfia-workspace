/**
 * P6-HQA-F05-GD4-01 — optional documentary mission vs Artifact closure obligation.
 *
 * Proves: natural Markdown production on an active cycle WITHOUT REQUIRE_ARTIFACT /
 * APPLICABLE unsatisfied routes to Generic PREPARE (recommend → OK → EC), not the
 * exclusive no_require_artifact dead-end. Mandatory Artifact continuation remains
 * priority when obligation applies. No synthetic HD. No new CycleInstance.
 * No Attempt. Fake OpenAI boundary only — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  orchestrateAssistantSend,
} from "@/features/project-assistant/f2/orchestrateF2";
import {
  isOptionalDocumentaryWithoutClosureArtifactBlock,
  resolveActiveCycleGovernedContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import {
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  recordObligationPolicyRequireArtifact,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  getPendingGenericPrepareOffer,
  resolvePrepareOfferSessionKey,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  analysisFromPendingGenericPrepareOffer,
  rememberGenericPrepareRecommendation,
  resolveGenericPrepareCapabilityEnvelope,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  isCapabilityWithinGenericPrepareEnvelope,
} from "@/features/project-assistant/w2/genericPrepareCapabilityEnvelope";
import {
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2InspectExecutionContractAction,
} from "@/features/project-assistant/w2/actions";
import type {
  ProjectAssistantContextDto,
} from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_DEMO_WORKSPACE_PROJECT_TITLE,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function optionalDocumentaryAnalysis() {
  return validateIntentAnalysisPayload({
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
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
    continuationKind: null,
    artifactMaterializationOperation: null,
    objective:
      "Produire un document Markdown enregistré dans le dépôt du projet",
    scope: "projects/demo/docs",
    rephrasedRequest:
      "Créer un fichier Markdown durable dans le projet pour le cadrage",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "Document Markdown consultable dans le dépôt",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      artifactType: "deliverable_document",
      targetRepositoryRef: null,
      targetPath: "projects/demo/docs/note-cadrage.md",
      artifactFileName: "note-cadrage.md",
      scopeIn: ["projects/demo/docs"],
      scopeOut: [],
      expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
      requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: null,
      artifactBrief: "Note de cadrage Markdown",
      contentRequirements: ["Contenu de cadrage"],
      exitRequirementKinds: [],
    },
  });
}

describe("P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-hqa-f05-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-hqa-f05-product.sqlite"),
      idPrefix: "f05",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withRequireArtifactPolicy?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: W2_DEMO_WORKSPACE_PROJECT_TITLE,
      objective: "Optional documentary routing",
      context: "det hqa f05",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `F5${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:f05-${input.suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
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
    const cycleInstanceId = `cyc:f05-${input.suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("auth");
    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");
    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    if (!started.ok) throw new Error("start");
    if (input.withRequireArtifactPolicy) {
      const pol = await recordObligationPolicyRequireArtifact({
        projectId,
        cycleInstanceId,
        cycleServices: oa.cycleServices,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => "2026-10-15T08:02:00.000Z",
      });
      if (!pol.ok) throw new Error("require_artifact_policy");
    }
    const identity = `acme/f05-${input.suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  function projectDto(input: {
    projectId: string;
    cycleInstanceId: string;
    overview: {
      project: { name: string; objective: string };
      livingState: { id: string; version: number; createdAt: string };
      doctrine: {
        id: string;
        version: string | number;
        digest: string;
        status: string;
      };
    };
  }): ProjectAssistantContextDto {
    return {
      projectId: input.projectId,
      name: input.overview.project.name,
      shortReference: null,
      objective: input.overview.project.objective,
      contextSummary: "p6 hqa f05",
      criticality: "STANDARD",
      constraints: [],
      lpsId: input.overview.livingState.id,
      lpsVersion: input.overview.livingState.version,
      lpsCreatedAt: input.overview.livingState.createdAt,
      doctrineId: input.overview.doctrine.id,
      doctrineVersion: String(input.overview.doctrine.version),
      doctrineDigest: input.overview.doctrine.digest,
      doctrineStatus: input.overview.doctrine.status,
      runtimeMode: "local",
      persistence: "product-sqlite",
      readiness: "ready",
      activeCycleInstanceId: input.cycleInstanceId,
      ckcResolutionRef: null,
    };
  }

  it("T01 — resolve: optional documentary without obligation → no_require_artifact block (not GOVERNED)", async () => {
    const { projectId, cycleInstanceId } = await seedProject({ suffix: "t01" });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDto({
        projectId,
        cycleInstanceId,
        overview,
      }),
      analysis: optionalDocumentaryAnalysis(),
      oa: runtime.oa!,
    });
    expect(isOptionalDocumentaryWithoutClosureArtifactBlock(resolved)).toBe(
      true,
    );
    expect(resolved.mode).not.toBe("NEW_CYCLE_FORMALIZATION");
    expect(resolved.mode).not.toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
  });

  it("T01–T04 — natural optional MD: recommend → OK → EC; no REQUIRE_ARTIFACT dead-end; same cycle; no synthetic HD", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "opt",
    });
    const cyclesBefore = (
      await oa.cycleServices.cycles.listByProject(projectId)
    ).length;
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content:
        "Je souhaite un document Markdown enregistré dans le dépôt du projet. __P6_OPTIONAL_DOCUMENTARY_MD__",
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).not.toMatch(/REQUIRE_ARTIFACT/i);
    expect(turn1.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
    expect(turn1.text).toMatch(/préparer le contrat|Je peux préparer|Je recommande/i);

    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
    // Pass 02 — offer retains documentary mission effects (not stripped).
    expect(offer?.missionEffects?.intentKind).toBe("other");
    expect(offer?.missionEffects?.proposedTargetPath).toMatch(/note-cadrage\.md$/);
    expect(offer?.missionEffects?.artifactBrief).toBeTruthy();
    expect(offer?.missionEffects?.contentRequirements.length).toBeGreaterThan(0);
    expect(offer?.missionEffects?.proposedRequiredCapabilities).toContain(
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    );
    const rebuilt = analysisFromPendingGenericPrepareOffer(offer!);
    expect(rebuilt.executionIntent?.intentKind).toBe("other");

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).toMatch(/préparé le contrat|Contrat inspectable/i);
    expect(turn2.text).toMatch(/xct:gen-prep:/);

    const contractIdMatch = turn2.text.match(/xct:gen-prep:[a-f0-9]+/);
    expect(contractIdMatch).toBeTruthy();
    const executionContractId = contractIdMatch![0];
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.intentKind).toBe("other");
    expect(inputs.proposedTargetPathAuthoritative).toBe(false);
    expect(inputs.documentaryTargetResolution).toBe("unresolved_nora_candidate");
    expect(inputs.resolvedAuthoritativeTargetPath).toBeNull();
    expect(inputs.proposedTargetPath).toMatch(/note-cadrage\.md$/);
    expect(
      (inputs.proposedDocumentaryOutputCandidates as string[]).some((o) =>
        /note-cadrage\.md/.test(o),
      ),
    ).toBe(true);
    // Unresolved Nora path must NOT appear as authorized contract expectedOutputs.
    expect(
      (loaded.contract.expectedOutputs ?? []).some((o) =>
        /note-cadrage\.md/.test(o),
      ),
    ).toBe(false);
    expect((loaded.contract.expectedOutputs ?? []).length).toBeGreaterThan(0);
    expect(inputs.capabilityResolution).toBe("already_generalist_envelope");
    expect(loaded.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);

    const cyclesAfter = (
      await oa.cycleServices.cycles.listByProject(projectId)
    ).length;
    expect(cyclesAfter).toBe(cyclesBefore);
    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;
    expect(hdAfter).toBe(hdBefore);
  });

  it("T05 — REQUIRE_ARTIFACT CURRENT keeps Artifact governed path (not Generic PREPARE recommend)", async () => {
    const { projectId, cycleInstanceId } = await seedProject({
      suffix: "obl",
      withRequireArtifactPolicy: true,
    });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: "__F2_ARTIFACT_MATERIALIZE__",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
    expect(getPendingGenericPrepareOffer(projectId, sessionKey)).toBeNull();
    // Governed Artifact continuation: proposal or in-cycle clarification — same cycle.
    if (turn.f2?.qualification?.cycleInstanceId) {
      expect(turn.f2.qualification.cycleInstanceId).toBe(cycleInstanceId);
    }
    expect(turn.f2?.turnKind === "f2_proposal" || turn.f2?.turnKind === "f2_clarification" || turn.f2?.turnKind === "f2_blocked").toBe(
      true,
    );
  });

  it("T09 — after optional PREPARE: inspect → authorize; ZERO Attempt", async () => {
    const { projectId, oa } = await seedProject({ suffix: "auth" });
    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: "Document Markdown durable dans le projet. __P6_OPTIONAL_DOCUMENTARY_MD__",
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    const executionContractId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(executionContractId).toBeTruthy();
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: executionContractId! },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");

    const inspect = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: executionContractId!,
      expectedVersion: loaded.contract.version,
    });
    expect(inspect.ok).toBe(true);
    if (!inspect.ok) throw new Error(inspect.message);

    if (loaded.contract.status === "confirmation_required") {
      const confirmed = await w2ConfirmExecutionContractAction({
        projectId,
        executionContractId: executionContractId!,
      });
      expect(confirmed.ok).toBe(true);
      if (!confirmed.ok) throw new Error(confirmed.message);
    }

    const authorized = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: executionContractId!,
      expectedVersion: loaded.contract.version,
      expectedSemanticFingerprint: inspect.semanticFingerprint,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.outcome).toBe("AUTHORIZED");
    expect(authorized.attemptCreated).toBe(false);
    expect(authorized.executionPerformed).toBe(false);
  });

  it("T11 — explicit new-cycle prepare stays distinct from optional documentary routing", async () => {
    const { projectId } = await seedProject({ suffix: "nc" });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Prépare un nouveau cycle Delivery pour formaliser la suite. __F2_ACTIONABLE__",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    // Must not invent gen-prep from a new-cycle formalization ask alone without offer.
    expect(turn.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
  });

  it("Pass02-T01/T05 — fingerprint distinguishes path/capability; reconstruction keeps generic intent", async () => {
    const { projectId, cycleInstanceId } = await seedProject({ suffix: "fp" });
    const base = optionalDocumentaryAnalysis();
    const fpA = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis: base,
      offeredAtIso: "2026-10-15T18:00:00.000Z",
      sessionDbPath,
    });
    const offerA = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offerA?.offerFingerprint).toBe(fpA);
    expect(analysisFromPendingGenericPrepareOffer(offerA!).executionIntent?.intentKind).toBe(
      "other",
    );

    const otherPath = optionalDocumentaryAnalysis();
    (
      otherPath.executionIntent as { targetPath: string }
    ).targetPath = "projects/demo/docs/autre-note.md";
    (
      otherPath.executionIntent as { expectedOutputs: string[] }
    ).expectedOutputs = ["projects/demo/docs/autre-note.md"];
    const fpB = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis: otherPath,
      offeredAtIso: "2026-10-15T18:01:00.000Z",
      sessionDbPath,
    });
    expect(fpB).not.toBe(fpA);

    const elevated = resolveGenericPrepareCapabilityEnvelope([
      "cap:cursor.docs_write",
      "cap:github.pr.merge",
    ]);
    expect(elevated.ok).toBe(false);
    if (!elevated.ok) {
      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
      expect(elevated.elevated).toContain("cap:github.pr.merge");
    }
    const docsOnly = resolveGenericPrepareCapabilityEnvelope([
      "cap:cursor.docs_write",
    ]);
    expect(docsOnly.ok).toBe(false);
    if (!docsOnly.ok) {
      expect(docsOnly.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
    }
  });

  it("Regularization-A — capability exact match; substring spoofing refused", () => {
    expect(
      isCapabilityWithinGenericPrepareEnvelope(PRODUCT_CANONICAL_EXECUTION_CAPABILITY),
    ).toBe(true);
    expect(isCapabilityWithinGenericPrepareEnvelope("cap:cursor.docs_write")).toBe(
      false,
    );
    // Spoofing / substring — must NOT match.
    expect(
      isCapabilityWithinGenericPrepareEnvelope("cap:evil.generalist.escalate"),
    ).toBe(false);
    expect(
      isCapabilityWithinGenericPrepareEnvelope("prefix-cap:studio.cursor.generalist"),
    ).toBe(false);
    expect(
      isCapabilityWithinGenericPrepareEnvelope(
        `${PRODUCT_CANONICAL_EXECUTION_CAPABILITY}.extra`,
      ),
    ).toBe(false);
    expect(isCapabilityWithinGenericPrepareEnvelope("generalist")).toBe(false);
    expect(
      isCapabilityWithinGenericPrepareEnvelope("cap:github.pr.merge"),
    ).toBe(false);

    const spoof = resolveGenericPrepareCapabilityEnvelope([
      "cap:evil.generalist.escalate",
    ]);
    expect(spoof.ok).toBe(false);
    if (!spoof.ok) {
      expect(spoof.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
      expect(spoof.elevated).toContain("cap:evil.generalist.escalate");
    }

    const canonicalOnly = resolveGenericPrepareCapabilityEnvelope([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(canonicalOnly.ok).toBe(true);
    if (canonicalOnly.ok) {
      expect(canonicalOnly.resolution).toBe("already_generalist_envelope");
    }
  });
});
