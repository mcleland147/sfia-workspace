/**
 * MATERIALITY-BLOCK-01 — Generic PREPARE documentary destination bind.
 *
 * Pathless framing documentary mission + repositoryBinding + active Cadrage
 * → Product composes note-de-cadrage.md under pathRoot/01-cadrage before
 * materiality → inspectable EC. No HD. No Attempt. No Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  rememberGenericPrepareRecommendation,
  analysisFromPendingGenericPrepareOffer,
  solicitGenericExecutionPrepare,
  getCurrentGenericPrepareOffer,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  concretePathsAreOnlyBareMarkdownLeaves,
  isBareSafeMarkdownLeafPath,
  isGenericPrepareDocumentaryMission,
  resolveGenericPrepareDocumentaryTarget,
} from "@/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget";
import {
  resolveNonAuthoritativeDocumentaryArtifactLeafCandidate,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import {
  collectConcreteMissionPaths,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("MATERIALITY-BLOCK-01 documentary Generic PREPARE bind", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("mat-block01-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mat-block01-product.sqlite"),
      idPrefix: "mb01",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedFramingProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MB01 ${suffix}`,
      objective: "Organisation des bénévoles (fixture)",
      context: "mat-block-01",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MB${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:mb01-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const pathRoot = `projects/mb01-${suffix}`;

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

    const cycleInstanceId = `cyc:mb01-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
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
      issuedAt: "2026-10-17T10:00:00.000Z",
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
    if (!started.ok) throw new Error(`start: ${started.error?.detailCode}`);

    const identity = `acme/mb01-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa, pathRoot, identity };
  }

  const pathlessFramingMission = {
    objective:
      "Réaliser un document de cadrage du projet dans le dépôt Git, en consolidant besoins, objectifs et points ouverts.",
    expectedOutcome:
      "Un document de cadrage lisible et réutilisable, ajouté dans un emplacement documentaire approprié du dépôt.",
    scope:
      "Documentation du projet dans le dépôt Git ; chemin précis à déterminer après inspection. Exclure code et architecture.",
    contextNotes:
      "Le projet est en Cadrage actif. Version de travail à examiner avant validation. Ne pas clore le cycle.",
  };

  it("leaf convention — framing note/document de cadrage → note-de-cadrage.md", () => {
    expect(
      resolveNonAuthoritativeDocumentaryArtifactLeafCandidate({
        textFields: ["Réaliser un document de cadrage dans le dépôt"],
        cycleTypeId: "cyc:framing",
      }),
    ).toBe("note-de-cadrage.md");
    expect(
      resolveNonAuthoritativeDocumentaryArtifactLeafCandidate({
        textFields: ["Refactorer le module d'export"],
        cycleTypeId: "cyc:framing",
      }),
    ).toBeNull();
  });

  it("A — pathless framing documentary solicit → EC with Product target under 01-cadrage", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("a");
    const expectedTarget = `${pathRoot}/01-cadrage/note-de-cadrage.md`;
    const expectedCycleRoot = `${pathRoot}/01-cadrage`;

    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    expect(analysis.executionIntent).toBeNull();
    expect(collectConcreteMissionPaths(analysis)).toEqual([]);
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(true);

    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("resolved");
    if (bind.kind !== "resolved") throw new Error("expected resolved");
    expect(bind.resolvedAuthoritativeTargetPath).toBe(expectedTarget);
    expect(bind.artifactFileName).toBe("note-de-cadrage.md");
    expect(bind.cycleWorkspaceRoot).toBe(expectedCycleRoot);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: pathlessFramingMission,
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.code).toBe("GENERIC_PREPARE_DRAFTED");
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality).not.toBe("unknown");

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.inputs?.documentaryTargetResolution).toBe(
      "resolved_product",
    );
    expect(loaded.contract.inputs?.resolvedAuthoritativeTargetPath).toBe(
      expectedTarget,
    );
    expect(loaded.contract.inputs?.targetPath).toBe(expectedTarget);
    expect(loaded.contract.inputs?.proposedTargetPathAuthoritative).toBe(false);
    expect(loaded.contract.inputs?.scopeIn).toEqual([expectedCycleRoot]);
    expect(loaded.contract.expectedOutputs).toContain(expectedTarget);
    expect(prep.executionAttemptCreated).toBe(false);
  });

  it("B — recommend offer then accept-GO prepare converges on same Product target", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("b");
    const expectedTarget = `${pathRoot}/01-cadrage/note-de-cadrage.md`;
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );

    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath,
    });
    const offer = getCurrentGenericPrepareOffer(projectId, { sessionDbPath });
    expect(offer).toBeTruthy();
    // Offer may still lack concrete paths — Product resolves at PREPARE time.
    expect(offer!.scopeIn.length).toBe(0);

    const fromOffer = analysisFromPendingGenericPrepareOffer(offer!);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: fromOffer,
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.inputs?.resolvedAuthoritativeTargetPath).toBe(
      expectedTarget,
    );
    expect(prep.contract.inputs?.documentaryTargetResolution).toBe(
      "resolved_product",
    );
  });

  it("C1 — missing cycle / incoherent cycle fail-closed without inventing destination", async () => {
    const { projectId, oa, pathRoot } = await seedFramingProject("c1");
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    const noCycle = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    expect(noCycle.kind).toBe("needs_clarification");
    if (noCycle.kind !== "needs_clarification") throw new Error("clarify");
    expect(noCycle.code).toBe("DOCUMENTARY_TARGET_CYCLE_REQUIRED");
    expect(JSON.stringify(noCycle)).not.toContain("note-de-cadrage");
    expect(JSON.stringify(noCycle)).not.toContain(pathRoot);

    const badCycle = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId: "cyc:mb01-does-not-exist",
      analysis,
    });
    expect(badCycle.kind).toBe("blocked");
    if (badCycle.kind !== "blocked") throw new Error("blocked");
    expect(badCycle.code).toBe("ACTIVE_CYCLE_INCOHERENT");

    const missingProject = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId: "prj:mb01-missing",
      cycleInstanceId: "cyc:mb01-c1",
      analysis,
    });
    expect(missingProject.kind).toBe("blocked");
    if (missingProject.kind !== "blocked") throw new Error("proj");
    expect(missingProject.code).toBe("PRODUCT_PROJECT_UNAVAILABLE");
  });

  it("C2 — invalid proposed path (traversal) → clarification, no basename salvage", async () => {
    const { projectId, cycleInstanceId, oa } = await seedFramingProject("trav");
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    const withBadPath = {
      ...analysis,
      executionIntent: {
        intentKind: "docs_write" as const,
        targetPath: "../secret.md",
        scopeIn: [],
        scopeOut: [],
      },
    };
    // concrete path present (../secret.md has /) — already_concrete path;
    // materiality/authority must still fail closed at prepare.
    const paths = collectConcreteMissionPaths(withBadPath);
    expect(paths).toContain("../secret.md");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: withBadPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // Conserved: no basename salvage to 01-cadrage/secret.md.
    // SHE may allow inspectable PREPARE for already_concrete traversal shapes;
    // PREPARE ≠ AUTHORIZE ≠ EXECUTE — Execute remains fail-closed for out-of-root.
    expect(JSON.stringify(prep)).not.toMatch(/01-cadrage\/secret\.md/);
    if (!prep.ok) {
      expect(prep.code).toBeTruthy();
      return;
    }
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(JSON.stringify(prep.contract)).not.toMatch(/01-cadrage\/secret\.md/);
  });

  it("C3 — non-documentary code-like mission is not forced to docs_write routing", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("code");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Refactorer le module d'export du projet",
      expectedOutcome: "Module simplifié",
      scope: "Code source du module d'export — pas de document",
    });
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(false);
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("not_documentary");
    expect(bind.analysis.executionIntent).toBeNull();
    // No invented framing note path.
    expect(JSON.stringify(bind)).not.toContain(`${pathRoot}/01-cadrage`);
  });

  it("C4 — pathless documentary without determinable leaf → clarification", async () => {
    const { projectId, cycleInstanceId, oa } = await seedFramingProject("ambig");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Réaliser un fichier Markdown dans le dépôt Git du projet",
      expectedOutcome: "Un fichier Markdown consultable",
      scope: "Documentation du dépôt Git — type de livrable non précisé",
    });
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(true);
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("needs_clarification");
    if (bind.kind !== "needs_clarification") throw new Error("expected clarify");
    expect(bind.code).toBe("DOCUMENTARY_TARGET_FILENAME_REQUIRED");
  });

  // -------------------------------------------------------------------------
  // Pass 02 — ChatGPT edge regularization (bare leaf / non-doc TypeScript)
  // -------------------------------------------------------------------------

  it("D1 — bare Markdown leaf targetPath alone → Product composes full cycle path → EC", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("d1");
    const expectedTarget = `${pathRoot}/01-cadrage/note-de-cadrage.md`;
    const expectedCycleRoot = `${pathRoot}/01-cadrage`;

    expect(isBareSafeMarkdownLeafPath("note-de-cadrage.md")).toBe(true);
    expect(isBareSafeMarkdownLeafPath("../secret.md")).toBe(false);
    expect(
      concretePathsAreOnlyBareMarkdownLeaves(["note-de-cadrage.md"]),
    ).toBe(true);
    expect(
      concretePathsAreOnlyBareMarkdownLeaves([
        "note-de-cadrage.md",
        "projects/x/01-cadrage",
      ]),
    ).toBe(false);

    const base = buildIntentAnalysisFromSolicitedMission(pathlessFramingMission);
    const analysis = {
      ...base,
      executionIntent: {
        intentKind: "docs_write" as const,
        targetPath: "note-de-cadrage.md",
        scopeIn: [] as string[],
        scopeOut: [] as string[],
      },
    };
    // collectConcreteMissionPaths sees the leaf — must NOT short-circuit Product.
    expect(collectConcreteMissionPaths(analysis)).toEqual(["note-de-cadrage.md"]);

    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("resolved");
    if (bind.kind !== "resolved") throw new Error("expected resolved");
    expect(bind.resolvedAuthoritativeTargetPath).toBe(expectedTarget);
    expect(bind.artifactFileName).toBe("note-de-cadrage.md");
    expect(bind.cycleWorkspaceRoot).toBe(expectedCycleRoot);
    expect(bind.proposedTargetPath).toBe("note-de-cadrage.md");
    expect(bind.documentaryTargetResolution).toBe("resolved_product");

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.inputs?.resolvedAuthoritativeTargetPath).toBe(
      expectedTarget,
    );
    expect(prep.contract.inputs?.proposedTargetPathAuthoritative).toBe(false);
    expect(prep.contract.inputs?.proposedTargetPath).toBe("note-de-cadrage.md");
    expect(prep.contract.inputs?.scopeIn).toEqual([expectedCycleRoot]);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
  });

  it("D2 — TypeScript config file creation is not_documentary (no Markdown routing)", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("d2");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective:
        "Créer un fichier de configuration TypeScript dans le dépôt Git du projet.",
      expectedOutcome: "Fichier de configuration TypeScript ajouté au dépôt",
      scope: "Configuration applicative du projet dans le dépôt Git",
    });
    expect(isGenericPrepareDocumentaryMission(analysis)).toBe(false);
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("not_documentary");
    expect(bind.analysis.executionIntent).toBeNull();
    expect(JSON.stringify(bind)).not.toContain("note-de-cadrage");
    expect(JSON.stringify(bind)).not.toContain(`${pathRoot}/01-cadrage`);
    expect(JSON.stringify(bind)).not.toMatch(/\.md"/);
  });

  it("D3 — traversal ../secret.md remains fail-closed (no basename salvage)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedFramingProject("d3");
    const analysis = {
      ...buildIntentAnalysisFromSolicitedMission(pathlessFramingMission),
      executionIntent: {
        intentKind: "docs_write" as const,
        targetPath: "../secret.md",
        scopeIn: [] as string[],
        scopeOut: [] as string[],
      },
    };
    expect(isBareSafeMarkdownLeafPath("../secret.md")).toBe(false);
    expect(concretePathsAreOnlyBareMarkdownLeaves(["../secret.md"])).toBe(
      false,
    );
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    // Directory/traversal shape → already_concrete (not Product leaf compose).
    expect(bind.kind).toBe("already_concrete");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // Conserved fail-closed salvage: never rewrite ../secret.md → 01-cadrage/secret.md
    // or invent note-de-cadrage. SHE PREPARE may be inspectable; Execute still gated.
    expect(JSON.stringify(prep)).not.toMatch(/01-cadrage\/secret\.md/);
    expect(JSON.stringify(prep)).not.toMatch(/note-de-cadrage/);
    if (!prep.ok) {
      expect(prep.code).toBeTruthy();
      return;
    }
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(JSON.stringify(prep.contract)).not.toMatch(/01-cadrage\/secret\.md/);
    expect(JSON.stringify(prep.contract)).not.toMatch(/note-de-cadrage/);
  });

  it("D4 — true pathless framing documentary (no targetPath) keeps nominal Product compose", async () => {
    const { projectId, cycleInstanceId, oa, pathRoot } =
      await seedFramingProject("d4");
    const expectedTarget = `${pathRoot}/01-cadrage/note-de-cadrage.md`;
    const analysis = buildIntentAnalysisFromSolicitedMission(
      pathlessFramingMission,
    );
    expect(analysis.executionIntent).toBeNull();
    expect(collectConcreteMissionPaths(analysis)).toEqual([]);
    const bind = await resolveGenericPrepareDocumentaryTarget({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
    });
    expect(bind.kind).toBe("resolved");
    if (bind.kind !== "resolved") throw new Error("expected resolved");
    expect(bind.resolvedAuthoritativeTargetPath).toBe(expectedTarget);
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: pathlessFramingMission,
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.materiality).not.toBe("unknown");
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.humanDecisionCreated).toBe(false);
  });
});
