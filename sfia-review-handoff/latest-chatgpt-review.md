# SFIA Studio — P6-HQA-F05-GD4-01 Git Integration — Review Pack FULL

- **Horodatage** : 2026-10-15T22:02:23+0200 (Europe/Paris)
- **GO Morris** : GIT INTEGRATION — COMMIT + PUSH BRANCHE PROJET + CRÉATION PR — NON MERGE
- **Finding** : P6-HQA-F05-GD4-01
- **Profil** : CRITICAL
- **Cycle** : 13 — PR readiness
- **CKC** : ckc:studio:pr-readiness (CONTENT VALIDATED BY MORRIS — guidance only — no merge authority)

## 1. GO Morris consommé

| Action | Autorisation | Consommée |
|---|---|---|
| Commit projet | OUI | OUI |
| Push branche projet | OUI | OUI |
| Création PR | OUI | OUI |
| Merge | NON | NON |

## 2. Local Git Truth initial

| Check | Valeur |
|---|---|
| remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| origin/main | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD (pré-commit) | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-optional-artifact-generic-prepare` |
| Staged initial | AUCUN |
| PR existante sur head | AUCUNE |
| Handoff pré-intégration | `d9e09055de28d16cf9e8ba02c14c1a80b6d7c3b3` / blob `4aee9bb8c672d79816a1886d451667fee81cb00e` |

Baseline main MATCH. Aucun STOP.

## 3. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md`
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/ckc/13-pr-readiness.md`
- Review Handoff sécurité distant (`d9e09055` / `4aee9bb8`)
- Diff cumulé Pass 01 + Pass 02 + régularisation (8 fichiers Product)

## 4. Convergence Pre-check

- Capacité : V3-F05 ; Milestone P6 IN PROGRESS / NOT PASSED
- Actifs KEEP : Artifact Continuation, Generic PREPARE, Pending Offer, Product Materiality, ExecutionContract, D-PC-09, P2-D-02
- Correction intégrée : Pass 01 (routing) + Pass 02 (intent fidelity) + régularisation (exact caps + documentary target non autoritatif)
- Classification : correctif borné sur architecture existante
- Trajectoire : Git Integration → CI/revue → GO Morris merge distinct → post-merge → :3020 → Human QA e66 → P6
- Exit Proof présent cycle : PR créée, diff conforme, commit/push vérifiés, validations rapportées, réserves portées
- Dette non levée : offer process-local ; target autoritatif non résolu au PREPARE ; OpenAI LIVE / e66 / Cursor REAL non retestés

## 5. Contrôles PR readiness (A–G)

| Contrôle | Résultat |
|---|---|
| A. Artifact facultatif → Generic PREPARE | PASS (tests F05) |
| B. Artifact obligatoire conservé | PASS (Artifact Continuity / Applicability Bridge) |
| C. Intent docs_write fidèle | PASS (Pass 02 + F05) |
| D. Capabilities exact identities only | PASS — aucun `includes("generalist")` |
| E. Target candidat non autoritatif | PASS — `unresolved_nora_candidate` ; pas dans expectedOutputs autorisés |
| F. Consentement / offre CURRENT | PASS |
| G. Inspect / Confirm / Authorize ; no Attempt on authorize | PASS (Product Continuity + Authority) |

## 6. Fichiers exacts du commit (8)

MODIFIED (6) :
- `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

ADDED (2) :
- `projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`

Hors commit (conservé local) : `.tmp-sfia-review/chatgpt-review.md`

## 7. Contenu créé — genericPrepareCapabilityEnvelope.ts (complet)

```typescript
/**
 * Generic PREPARE capability envelope — shared by offer reconstruction,
 * materiality, and ExecutionContract PREPARE.
 *
 * Documentary effect-class `cap:cursor.docs_write` may be proposed by Nora.
 * Product Generic PREPARE resolves it onto studio.cursor.generalist — never
 * silently dropped, never treated as elevated authority by itself.
 */

import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";

export const GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY =
  "cap:cursor.docs_write" as const;

/**
 * Exact Product identities only — no substring / prefix / suffix matching.
 * Unknown strings that merely contain "generalist" are outside the envelope.
 */
export const GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES = Object.freeze([
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
] as const);

export function isCapabilityWithinGenericPrepareEnvelope(cap: string): boolean {
  const c = cap.trim();
  if (!c) return true;
  return (GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES as readonly string[]).includes(
    c,
  );
}

export type GenericPrepareCapabilityResolution =
  | {
      readonly ok: true;
      readonly contractCapabilities: readonly [
        typeof PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ];
      readonly proposedCapabilities: readonly string[];
      readonly resolution:
        | "no_proposed_capabilities_default_generalist"
        | "docs_write_effect_resolved_onto_generalist_product_surface"
        | "already_generalist_envelope";
    }
  | {
      readonly ok: false;
      readonly code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE";
      readonly elevated: readonly string[];
      readonly proposedCapabilities: readonly string[];
    };

export function resolveGenericPrepareCapabilityEnvelope(
  proposed: readonly string[] | null | undefined,
): GenericPrepareCapabilityResolution {
  const cleaned = (proposed ?? [])
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  if (cleaned.length === 0) {
    return {
      ok: true,
      contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
      proposedCapabilities: [],
      resolution: "no_proposed_capabilities_default_generalist",
    };
  }
  const elevated = cleaned.filter(
    (c) => !isCapabilityWithinGenericPrepareEnvelope(c),
  );
  if (elevated.length > 0) {
    return {
      ok: false,
      code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
      elevated,
      proposedCapabilities: cleaned,
    };
  }
  const hasDocsWrite = cleaned.includes(
    GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
  );
  return {
    ok: true,
    contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    proposedCapabilities: cleaned,
    resolution: hasDocsWrite
      ? "docs_write_effect_resolved_onto_generalist_product_surface"
      : "already_generalist_envelope",
  };
}
```

## 8. Contenu créé — test F05 (complet)

```typescript
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
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  isOptionalDocumentaryWithoutClosureArtifactBlock,
  resolveActiveCycleGovernedContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
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
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
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
    artifactMaterializationOperation: "cursor.docs_write.apply",
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
      intentKind: "docs_write",
      artifactType: "deliverable_document",
      targetRepositoryRef: null,
      targetPath: "projects/demo/docs/note-cadrage.md",
      artifactFileName: "note-cadrage.md",
      scopeIn: ["projects/demo/docs"],
      scopeOut: [],
      expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
      requiredCapabilities: ["cap:cursor.docs_write"],
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
      name: `F05 ${input.suffix}`,
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
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
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
    expect(offer?.missionEffects?.intentKind).toBe("docs_write");
    expect(offer?.missionEffects?.proposedTargetPath).toMatch(/note-cadrage\.md$/);
    expect(offer?.missionEffects?.artifactBrief).toBeTruthy();
    expect(offer?.missionEffects?.contentRequirements.length).toBeGreaterThan(0);
    expect(offer?.missionEffects?.proposedRequiredCapabilities).toContain(
      "cap:cursor.docs_write",
    );
    const rebuilt = analysisFromPendingGenericPrepareOffer(offer!);
    expect(rebuilt.executionIntent?.intentKind).toBe("docs_write");
    expect(rebuilt.executionIntent?.intentKind).not.toBe("other");

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
    expect(inputs.intentKind).toBe("docs_write");
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
    expect(inputs.capabilityResolution).toBe(
      "docs_write_effect_resolved_onto_generalist_product_surface",
    );
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

  it("Pass02-T01/T05 — fingerprint distinguishes path/capability; reconstruction keeps docs_write", async () => {
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
      "docs_write",
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
    expect(docsOnly.ok).toBe(true);
    if (docsOnly.ok) {
      expect(docsOnly.resolution).toBe(
        "docs_write_effect_resolved_onto_generalist_product_surface",
      );
      expect(docsOnly.contractCapabilities).toEqual([
        PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ]);
    }
  });

  it("Regularization-A — capability exact match; substring spoofing refused", () => {
    expect(
      isCapabilityWithinGenericPrepareEnvelope(PRODUCT_CANONICAL_EXECUTION_CAPABILITY),
    ).toBe(true);
    expect(isCapabilityWithinGenericPrepareEnvelope("cap:cursor.docs_write")).toBe(
      true,
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
```

## 9. Diff cumulé complet (origin/main...HEAD)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
new file mode 100644
index 00000000..f6389fdc
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
@@ -0,0 +1,592 @@
+/**
+ * P6-HQA-F05-GD4-01 — optional documentary mission vs Artifact closure obligation.
+ *
+ * Proves: natural Markdown production on an active cycle WITHOUT REQUIRE_ARTIFACT /
+ * APPLICABLE unsatisfied routes to Generic PREPARE (recommend → OK → EC), not the
+ * exclusive no_require_artifact dead-end. Mandatory Artifact continuation remains
+ * priority when obligation applies. No synthetic HD. No new CycleInstance.
+ * No Attempt. Fake OpenAI boundary only — ZERO Cursor REAL.
+ *
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  isOptionalDocumentaryWithoutClosureArtifactBlock,
+  resolveActiveCycleGovernedContinuation,
+} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
+import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
+import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  getPendingGenericPrepareOffer,
+  resolvePrepareOfferSessionKey,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  analysisFromPendingGenericPrepareOffer,
+  rememberGenericPrepareRecommendation,
+  resolveGenericPrepareCapabilityEnvelope,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  isCapabilityWithinGenericPrepareEnvelope,
+} from "@/features/project-assistant/w2/genericPrepareCapabilityEnvelope";
+import {
+  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
+import {
+  w2AuthorizeExecutionContractAction,
+  w2ConfirmExecutionContractAction,
+  w2InspectExecutionContractAction,
+} from "@/features/project-assistant/w2/actions";
+import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
+} from "./w2Harness";
+import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+
+function restoreEnvVar(name: string, previous: string | undefined): void {
+  if (previous === undefined) delete process.env[name];
+  else process.env[name] = previous;
+}
+
+function optionalDocumentaryAnalysis() {
+  return validateIntentAnalysisPayload({
+    intentClass: "actionable",
+    candidateCycleTypeId: "cyc:delivery",
+    signals: {
+      structuralChange: false,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: true,
+    },
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: "sufficient",
+    continuationKind: null,
+    artifactMaterializationOperation: "cursor.docs_write.apply",
+    objective:
+      "Produire un document Markdown enregistré dans le dépôt du projet",
+    scope: "projects/demo/docs",
+    rephrasedRequest:
+      "Créer un fichier Markdown durable dans le projet pour le cadrage",
+    outOfScope: [],
+    risks: [],
+    reservations: [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome: "Document Markdown consultable dans le dépôt",
+    criticalJustification: null,
+    requestedOperation: null,
+    executionIntent: {
+      intentKind: "docs_write",
+      artifactType: "deliverable_document",
+      targetRepositoryRef: null,
+      targetPath: "projects/demo/docs/note-cadrage.md",
+      artifactFileName: "note-cadrage.md",
+      scopeIn: ["projects/demo/docs"],
+      scopeOut: [],
+      expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      validationExpectations: [],
+      evidenceRequirements: [],
+      requestedOperation: null,
+      reversibilityExpectation: null,
+      artifactBrief: "Note de cadrage Markdown",
+      contentRequirements: ["Contenu de cadrage"],
+      exitRequirementKinds: [],
+    },
+  });
+}
+
+describe("P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing", () => {
+  let runtime: RuntimeApplicationService;
+  let previousProvider: string | undefined;
+  let previousMorris: string | undefined;
+  let previousDetPin: string | undefined;
+  let sessionDbPath: string;
+
+  beforeEach(() => {
+    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
+    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
+    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetPendingGenericPrepareOfferStoreForTests();
+    sessionDbPath = tempProductDbPath("p6-hqa-f05-session.sqlite");
+    runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("p6-hqa-f05-product.sqlite"),
+      idPrefix: "f05",
+    });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetPendingGenericPrepareOfferStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
+    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
+    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
+  });
+
+  async function seedProject(input: {
+    suffix: string;
+    withRequireArtifactPolicy?: boolean;
+  }) {
+    const oa = runtime.oa!;
+    const created = await runtime.createProject({
+      name: `F05 ${input.suffix}`,
+      objective: "Optional documentary routing",
+      context: "det hqa f05",
+      criticality: "STANDARD",
+      constraints: ["ZERO REAL"],
+      shortReference: `F5${input.suffix.toUpperCase().slice(0, 6)}`,
+      idempotencyKey: `idem:f05-${input.suffix}`,
+    });
+    if (!created.ok) throw new Error("createProject");
+    const projectId = created.project.projectId;
+    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    if (!lps0.ok) throw new Error("lps0");
+    await oa.cycleServices.createInitialTrajectory.execute({
+      trajectoryId: `trj:${projectId}`,
+      projectId,
+      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
+      status: "active",
+      expectedLpsVersion: lps0.livingProjectState.version,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+    });
+    const cycleInstanceId = `cyc:f05-${input.suffix}`;
+    await oa.cycleServices.createCycle.execute({
+      cycleInstanceId,
+      cycleTypeId: "cyc:delivery",
+      projectId,
+      signals: { lowRiskBounded: true },
+      createdBy: {
+        actorId: "actor:nora-f2",
+        role: "agent",
+        displayName: "Nora F2",
+        authorityLevel: "N1",
+      },
+      linkAsActiveCycle: false,
+    });
+    const auth = registerLocalPiloteAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: `pilot-lifecycle:${cycleInstanceId}`,
+      issuedAt: "2026-10-15T08:00:00.000Z",
+      forceEnable: true,
+    });
+    if (!auth.ok) throw new Error("auth");
+    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    if (!lps1.ok) throw new Error("lps1");
+    const started = await oa.cycleServices.pilotLifecycle.start({
+      cycleInstanceId,
+      projectId,
+      createdBy: {
+        actorId: LOCAL_PILOTE_ACTOR.actorId,
+        role: LOCAL_PILOTE_ACTOR.role,
+        displayName: LOCAL_PILOTE_ACTOR.displayName,
+        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
+      },
+      authorityEvidenceId: auth.evidenceId,
+      expectedLpsVersion: lps1.livingProjectState.version,
+    });
+    if (!started.ok) throw new Error("start");
+    if (input.withRequireArtifactPolicy) {
+      const pol = await recordObligationPolicyRequireArtifact({
+        projectId,
+        cycleInstanceId,
+        cycleServices: oa.cycleServices,
+        decisionServices: oa.decisionServices,
+        authorityResolver: oa.authorityResolver,
+        nowIso: () => "2026-10-15T08:02:00.000Z",
+      });
+      if (!pol.ok) throw new Error("require_artifact_policy");
+    }
+    const identity = `acme/f05-${input.suffix}`;
+    await oa.projectServices.setProjectRepositoryBinding!.execute({
+      projectId,
+      actor: LOCAL_PILOTE_ACTOR,
+      binding: {
+        provider: "github",
+        identity,
+        remoteUrl: `https://github.com/${identity}.git`,
+        defaultBranch: "main",
+        pathRoot: "projects/demo",
+      },
+    });
+    ensureManagedRepoCloneSkeleton({
+      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
+      identity,
+    });
+    return { projectId, cycleInstanceId, oa };
+  }
+
+  function projectDto(input: {
+    projectId: string;
+    cycleInstanceId: string;
+    overview: {
+      project: { name: string; objective: string };
+      livingState: { id: string; version: number; createdAt: string };
+      doctrine: {
+        id: string;
+        version: string | number;
+        digest: string;
+        status: string;
+      };
+    };
+  }): ProjectAssistantContextDto {
+    return {
+      projectId: input.projectId,
+      name: input.overview.project.name,
+      shortReference: null,
+      objective: input.overview.project.objective,
+      contextSummary: "p6 hqa f05",
+      criticality: "STANDARD",
+      constraints: [],
+      lpsId: input.overview.livingState.id,
+      lpsVersion: input.overview.livingState.version,
+      lpsCreatedAt: input.overview.livingState.createdAt,
+      doctrineId: input.overview.doctrine.id,
+      doctrineVersion: String(input.overview.doctrine.version),
+      doctrineDigest: input.overview.doctrine.digest,
+      doctrineStatus: input.overview.doctrine.status,
+      runtimeMode: "local",
+      persistence: "product-sqlite",
+      readiness: "ready",
+      activeCycleInstanceId: input.cycleInstanceId,
+      ckcResolutionRef: null,
+    };
+  }
+
+  it("T01 — resolve: optional documentary without obligation → no_require_artifact block (not GOVERNED)", async () => {
+    const { projectId, cycleInstanceId } = await seedProject({ suffix: "t01" });
+    const overview = await runtime.getProject(projectId);
+    expect(overview.ok).toBe(true);
+    if (!overview.ok) return;
+    const resolved = await resolveActiveCycleGovernedContinuation({
+      project: projectDto({
+        projectId,
+        cycleInstanceId,
+        overview,
+      }),
+      analysis: optionalDocumentaryAnalysis(),
+      oa: runtime.oa!,
+    });
+    expect(isOptionalDocumentaryWithoutClosureArtifactBlock(resolved)).toBe(
+      true,
+    );
+    expect(resolved.mode).not.toBe("NEW_CYCLE_FORMALIZATION");
+    expect(resolved.mode).not.toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
+  });
+
+  it("T01–T04 — natural optional MD: recommend → OK → EC; no REQUIRE_ARTIFACT dead-end; same cycle; no synthetic HD", async () => {
+    const { projectId, cycleInstanceId, oa } = await seedProject({
+      suffix: "opt",
+    });
+    const cyclesBefore = (
+      await oa.cycleServices.cycles.listByProject(projectId)
+    ).length;
+    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
+      .length;
+
+    const turn1 = await orchestrateAssistantSend({
+      projectId,
+      content:
+        "Je souhaite un document Markdown enregistré dans le dépôt du projet. __P6_OPTIONAL_DOCUMENTARY_MD__",
+      sessionDbPath,
+    });
+    expect(turn1.ok).toBe(true);
+    if (!turn1.ok) throw new Error(turn1.message);
+    expect(turn1.text).not.toMatch(/REQUIRE_ARTIFACT/i);
+    expect(turn1.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
+    expect(turn1.text).toMatch(/préparer le contrat|Je peux préparer|Je recommande/i);
+
+    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
+    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
+    expect(offer).toBeTruthy();
+    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
+    // Pass 02 — offer retains documentary mission effects (not stripped).
+    expect(offer?.missionEffects?.intentKind).toBe("docs_write");
+    expect(offer?.missionEffects?.proposedTargetPath).toMatch(/note-cadrage\.md$/);
+    expect(offer?.missionEffects?.artifactBrief).toBeTruthy();
+    expect(offer?.missionEffects?.contentRequirements.length).toBeGreaterThan(0);
+    expect(offer?.missionEffects?.proposedRequiredCapabilities).toContain(
+      "cap:cursor.docs_write",
+    );
+    const rebuilt = analysisFromPendingGenericPrepareOffer(offer!);
+    expect(rebuilt.executionIntent?.intentKind).toBe("docs_write");
+    expect(rebuilt.executionIntent?.intentKind).not.toBe("other");
+
+    const turn2 = await orchestrateAssistantSend({
+      projectId,
+      content: "OK, vas-y",
+      sessionDbPath,
+    });
+    expect(turn2.ok).toBe(true);
+    if (!turn2.ok) throw new Error(turn2.message);
+    expect(turn2.text).toMatch(/préparé le contrat|Contrat inspectable/i);
+    expect(turn2.text).toMatch(/xct:gen-prep:/);
+
+    const contractIdMatch = turn2.text.match(/xct:gen-prep:[a-f0-9]+/);
+    expect(contractIdMatch).toBeTruthy();
+    const executionContractId = contractIdMatch![0];
+    const loaded = await oa.executionContractServices.getExecutionContract.execute(
+      { executionContractId },
+    );
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
+    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
+    const inputs = loaded.contract.inputs as Record<string, unknown>;
+    expect(inputs.intentKind).toBe("docs_write");
+    expect(inputs.proposedTargetPathAuthoritative).toBe(false);
+    expect(inputs.documentaryTargetResolution).toBe("unresolved_nora_candidate");
+    expect(inputs.resolvedAuthoritativeTargetPath).toBeNull();
+    expect(inputs.proposedTargetPath).toMatch(/note-cadrage\.md$/);
+    expect(
+      (inputs.proposedDocumentaryOutputCandidates as string[]).some((o) =>
+        /note-cadrage\.md/.test(o),
+      ),
+    ).toBe(true);
+    // Unresolved Nora path must NOT appear as authorized contract expectedOutputs.
+    expect(
+      (loaded.contract.expectedOutputs ?? []).some((o) =>
+        /note-cadrage\.md/.test(o),
+      ),
+    ).toBe(false);
+    expect((loaded.contract.expectedOutputs ?? []).length).toBeGreaterThan(0);
+    expect(inputs.capabilityResolution).toBe(
+      "docs_write_effect_resolved_onto_generalist_product_surface",
+    );
+    expect(loaded.contract.requiredCapabilities).toEqual([
+      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+    ]);
+
+    const cyclesAfter = (
+      await oa.cycleServices.cycles.listByProject(projectId)
+    ).length;
+    expect(cyclesAfter).toBe(cyclesBefore);
+    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
+      .length;
+    expect(hdAfter).toBe(hdBefore);
+  });
+
+  it("T05 — REQUIRE_ARTIFACT CURRENT keeps Artifact governed path (not Generic PREPARE recommend)", async () => {
+    const { projectId, cycleInstanceId } = await seedProject({
+      suffix: "obl",
+      withRequireArtifactPolicy: true,
+    });
+    const turn = await orchestrateAssistantSend({
+      projectId,
+      content: "__F2_ARTIFACT_MATERIALIZE__",
+      sessionDbPath,
+    });
+    expect(turn.ok).toBe(true);
+    if (!turn.ok) throw new Error(turn.message);
+    expect(turn.text).not.toMatch(/xct:gen-prep:/);
+    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
+    expect(getPendingGenericPrepareOffer(projectId, sessionKey)).toBeNull();
+    // Governed Artifact continuation: proposal or in-cycle clarification — same cycle.
+    if (turn.f2?.qualification?.cycleInstanceId) {
+      expect(turn.f2.qualification.cycleInstanceId).toBe(cycleInstanceId);
+    }
+    expect(turn.f2?.turnKind === "f2_proposal" || turn.f2?.turnKind === "f2_clarification" || turn.f2?.turnKind === "f2_blocked").toBe(
+      true,
+    );
+  });
+
+  it("T09 — after optional PREPARE: inspect → authorize; ZERO Attempt", async () => {
+    const { projectId, oa } = await seedProject({ suffix: "auth" });
+    const turn1 = await orchestrateAssistantSend({
+      projectId,
+      content: "Document Markdown durable dans le projet. __P6_OPTIONAL_DOCUMENTARY_MD__",
+      sessionDbPath,
+    });
+    expect(turn1.ok).toBe(true);
+    if (!turn1.ok) throw new Error(turn1.message);
+    const turn2 = await orchestrateAssistantSend({
+      projectId,
+      content: "OK, vas-y",
+      sessionDbPath,
+    });
+    expect(turn2.ok).toBe(true);
+    if (!turn2.ok) throw new Error(turn2.message);
+    const executionContractId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
+    expect(executionContractId).toBeTruthy();
+    const loaded = await oa.executionContractServices.getExecutionContract.execute(
+      { executionContractId: executionContractId! },
+    );
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+
+    const inspect = await w2InspectExecutionContractAction({
+      projectId,
+      executionContractId: executionContractId!,
+      expectedVersion: loaded.contract.version,
+    });
+    expect(inspect.ok).toBe(true);
+    if (!inspect.ok) throw new Error(inspect.message);
+
+    if (loaded.contract.status === "confirmation_required") {
+      const confirmed = await w2ConfirmExecutionContractAction({
+        projectId,
+        executionContractId: executionContractId!,
+      });
+      expect(confirmed.ok).toBe(true);
+      if (!confirmed.ok) throw new Error(confirmed.message);
+    }
+
+    const authorized = await w2AuthorizeExecutionContractAction({
+      projectId,
+      executionContractId: executionContractId!,
+      expectedVersion: loaded.contract.version,
+      expectedSemanticFingerprint: inspect.semanticFingerprint,
+    });
+    expect(authorized.ok).toBe(true);
+    if (!authorized.ok) throw new Error(authorized.message);
+    expect(authorized.outcome).toBe("AUTHORIZED");
+    expect(authorized.attemptCreated).toBe(false);
+    expect(authorized.executionPerformed).toBe(false);
+  });
+
+  it("T11 — explicit new-cycle prepare stays distinct from optional documentary routing", async () => {
+    const { projectId } = await seedProject({ suffix: "nc" });
+    const turn = await orchestrateAssistantSend({
+      projectId,
+      content: "Prépare un nouveau cycle Delivery pour formaliser la suite. __F2_ACTIONABLE__",
+      sessionDbPath,
+    });
+    expect(turn.ok).toBe(true);
+    if (!turn.ok) throw new Error(turn.message);
+    // Must not invent gen-prep from a new-cycle formalization ask alone without offer.
+    expect(turn.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
+  });
+
+  it("Pass02-T01/T05 — fingerprint distinguishes path/capability; reconstruction keeps docs_write", async () => {
+    const { projectId, cycleInstanceId } = await seedProject({ suffix: "fp" });
+    const base = optionalDocumentaryAnalysis();
+    const fpA = rememberGenericPrepareRecommendation({
+      projectId,
+      cycleInstanceId,
+      analysis: base,
+      offeredAtIso: "2026-10-15T18:00:00.000Z",
+      sessionDbPath,
+    });
+    const offerA = getPendingGenericPrepareOffer(
+      projectId,
+      resolvePrepareOfferSessionKey({ sessionDbPath }),
+    );
+    expect(offerA?.offerFingerprint).toBe(fpA);
+    expect(analysisFromPendingGenericPrepareOffer(offerA!).executionIntent?.intentKind).toBe(
+      "docs_write",
+    );
+
+    const otherPath = optionalDocumentaryAnalysis();
+    (
+      otherPath.executionIntent as { targetPath: string }
+    ).targetPath = "projects/demo/docs/autre-note.md";
+    (
+      otherPath.executionIntent as { expectedOutputs: string[] }
+    ).expectedOutputs = ["projects/demo/docs/autre-note.md"];
+    const fpB = rememberGenericPrepareRecommendation({
+      projectId,
+      cycleInstanceId,
+      analysis: otherPath,
+      offeredAtIso: "2026-10-15T18:01:00.000Z",
+      sessionDbPath,
+    });
+    expect(fpB).not.toBe(fpA);
+
+    const elevated = resolveGenericPrepareCapabilityEnvelope([
+      "cap:cursor.docs_write",
+      "cap:github.pr.merge",
+    ]);
+    expect(elevated.ok).toBe(false);
+    if (!elevated.ok) {
+      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
+      expect(elevated.elevated).toContain("cap:github.pr.merge");
+    }
+    const docsOnly = resolveGenericPrepareCapabilityEnvelope([
+      "cap:cursor.docs_write",
+    ]);
+    expect(docsOnly.ok).toBe(true);
+    if (docsOnly.ok) {
+      expect(docsOnly.resolution).toBe(
+        "docs_write_effect_resolved_onto_generalist_product_surface",
+      );
+      expect(docsOnly.contractCapabilities).toEqual([
+        PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+      ]);
+    }
+  });
+
+  it("Regularization-A — capability exact match; substring spoofing refused", () => {
+    expect(
+      isCapabilityWithinGenericPrepareEnvelope(PRODUCT_CANONICAL_EXECUTION_CAPABILITY),
+    ).toBe(true);
+    expect(isCapabilityWithinGenericPrepareEnvelope("cap:cursor.docs_write")).toBe(
+      true,
+    );
+    // Spoofing / substring — must NOT match.
+    expect(
+      isCapabilityWithinGenericPrepareEnvelope("cap:evil.generalist.escalate"),
+    ).toBe(false);
+    expect(
+      isCapabilityWithinGenericPrepareEnvelope("prefix-cap:studio.cursor.generalist"),
+    ).toBe(false);
+    expect(
+      isCapabilityWithinGenericPrepareEnvelope(
+        `${PRODUCT_CANONICAL_EXECUTION_CAPABILITY}.extra`,
+      ),
+    ).toBe(false);
+    expect(isCapabilityWithinGenericPrepareEnvelope("generalist")).toBe(false);
+    expect(
+      isCapabilityWithinGenericPrepareEnvelope("cap:github.pr.merge"),
+    ).toBe(false);
+
+    const spoof = resolveGenericPrepareCapabilityEnvelope([
+      "cap:evil.generalist.escalate",
+    ]);
+    expect(spoof.ok).toBe(false);
+    if (!spoof.ok) {
+      expect(spoof.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
+      expect(spoof.elevated).toContain("cap:evil.generalist.escalate");
+    }
+
+    const canonicalOnly = resolveGenericPrepareCapabilityEnvelope([
+      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+    ]);
+    expect(canonicalOnly.ok).toBe(true);
+    if (canonicalOnly.ok) {
+      expect(canonicalOnly.resolution).toBe("already_generalist_envelope");
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index 087cfca1..ef27e815 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -537,6 +537,23 @@ export type ActiveCycleContinuationResolution =
       readonly reason: "no_materialization_intent";
     };

+/**
+ * P6-HQA-F05-GD4-01 — Artifact-continuation handling recognized a materialization
+ * signal, but no closure obligation (CURRENT REQUIRE_ARTIFACT / APPLICABLE
+ * unsatisfied) is established. This is NOT an Artifact governed continuation
+ * and MUST NOT invent a HumanDecision. It is also NOT NEW_CYCLE_FORMALIZATION.
+ * Orchestration may qualify the ordinary documentary mission via Generic PREPARE
+ * when Product readiness/materiality allow — other BLOCKED reasons stay exclusive.
+ */
+export function isOptionalDocumentaryWithoutClosureArtifactBlock(
+  resolution: ActiveCycleContinuationResolution,
+): boolean {
+  return (
+    resolution.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED" &&
+    resolution.reason === "no_require_artifact"
+  );
+}
+
 function blocked(
   reason: ContinuationBlockedReason,
   activeCycle: CycleInstance | null = null,
@@ -1093,7 +1110,9 @@ export function continuationBlockedMessage(
     case "active_cycle_not_active":
       return `Continuation Artifact demandée, mais le cycle référencé n'est pas actif.${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "no_require_artifact":
-      return `Continuation Artifact demandée, mais aucune décision CURRENT REQUIRE_ARTIFACT n'est ouverte sur le cycle actif.${cycleHint} Aucun nouveau CycleInstance créé.`;
+      // Fallback only — ordinary documentary missions should route to Generic
+      // PREPARE (P6-HQA-F05-GD4-01) before this message is shown.
+      return `Cette demande documentaire n'est pas établie comme obligation Artifact de clôture du cycle actif.${cycleHint} Aucune HumanDecision artificielle. Aucun nouveau CycleInstance créé.`;
     case "artifact_already_satisfied":
       return `Le livrable requis du cycle actif est déjà satisfait — cette matérialisation n'est plus une obligation ouverte.${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "lifecycle_assess_failed":
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 17c5402d..47e4e51c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -71,6 +71,7 @@ import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
   resolveActiveCycleGovernedContinuation,
   continuationBlockedMessage,
+  isOptionalDocumentaryWithoutClosureArtifactBlock,
 } from "./activeCycleGovernedContinuation";
 import {
   enrichQualificationWithCkcSemantics,
@@ -2002,8 +2003,16 @@ export async function orchestrateAssistantSend(input: {
       analysis.intentClass === "execution_request" ||
       chatFirstPrepareAccept;

+    // P6-HQA-F05-GD4-01 — ordinary documentary materialization without a
+    // closure Artifact obligation must not dead-end on no_require_artifact.
+    // Reuse Generic PREPARE on the SAME active cycle. Do NOT alias this as
+    // NEW_CYCLE_FORMALIZATION. Do NOT widen other BLOCKED reasons.
+    const eligibleForGenericPrepareRouting =
+      continuation.mode === "NEW_CYCLE_FORMALIZATION" ||
+      isOptionalDocumentaryWithoutClosureArtifactBlock(continuation);
+
     if (
-      continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+      eligibleForGenericPrepareRouting &&
       Boolean(activeIdForPrepare) &&
       actionableForGenericPrepare
     ) {
@@ -2212,12 +2221,15 @@ export async function orchestrateAssistantSend(input: {
         turnKind: "f1_informative",
       });
     }
-    } // actionableForGenericPrepare / NEW_CYCLE_FORMALIZATION
+    } // actionableForGenericPrepare / eligible Generic PREPARE routing
   } // chat-first prepare gate scope

   if (continuation.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
     // CR-07-05 — recognized Artifact continuation that cannot be verified:
     // BLOCK / clarify in-cycle. NEVER createCycle.
+    // no_require_artifact: optional documentary path should have been consumed
+    // by Generic PREPARE above when actionable; remaining cases stay fail-safe
+    // clarification without inventing REQUIRE_ARTIFACT.
     const activeId =
       continuation.activeCycle?.cycleInstanceId ??
       project.activeCycleInstanceId ??
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts b/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts
new file mode 100644
index 00000000..954ec758
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts
@@ -0,0 +1,87 @@
+/**
+ * Generic PREPARE capability envelope — shared by offer reconstruction,
+ * materiality, and ExecutionContract PREPARE.
+ *
+ * Documentary effect-class `cap:cursor.docs_write` may be proposed by Nora.
+ * Product Generic PREPARE resolves it onto studio.cursor.generalist — never
+ * silently dropped, never treated as elevated authority by itself.
+ */
+
+import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";
+
+export const GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY =
+  "cap:cursor.docs_write" as const;
+
+/**
+ * Exact Product identities only — no substring / prefix / suffix matching.
+ * Unknown strings that merely contain "generalist" are outside the envelope.
+ */
+export const GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES = Object.freeze([
+  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+] as const);
+
+export function isCapabilityWithinGenericPrepareEnvelope(cap: string): boolean {
+  const c = cap.trim();
+  if (!c) return true;
+  return (GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES as readonly string[]).includes(
+    c,
+  );
+}
+
+export type GenericPrepareCapabilityResolution =
+  | {
+      readonly ok: true;
+      readonly contractCapabilities: readonly [
+        typeof PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+      ];
+      readonly proposedCapabilities: readonly string[];
+      readonly resolution:
+        | "no_proposed_capabilities_default_generalist"
+        | "docs_write_effect_resolved_onto_generalist_product_surface"
+        | "already_generalist_envelope";
+    }
+  | {
+      readonly ok: false;
+      readonly code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE";
+      readonly elevated: readonly string[];
+      readonly proposedCapabilities: readonly string[];
+    };
+
+export function resolveGenericPrepareCapabilityEnvelope(
+  proposed: readonly string[] | null | undefined,
+): GenericPrepareCapabilityResolution {
+  const cleaned = (proposed ?? [])
+    .map((c) => c.trim())
+    .filter((c) => c.length > 0);
+  if (cleaned.length === 0) {
+    return {
+      ok: true,
+      contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
+      proposedCapabilities: [],
+      resolution: "no_proposed_capabilities_default_generalist",
+    };
+  }
+  const elevated = cleaned.filter(
+    (c) => !isCapabilityWithinGenericPrepareEnvelope(c),
+  );
+  if (elevated.length > 0) {
+    return {
+      ok: false,
+      code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
+      elevated,
+      proposedCapabilities: cleaned,
+    };
+  }
+  const hasDocsWrite = cleaned.includes(
+    GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  );
+  return {
+    ok: true,
+    contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
+    proposedCapabilities: cleaned,
+    resolution: hasDocsWrite
+      ? "docs_write_effect_resolved_onto_generalist_product_surface"
+      : "already_generalist_envelope",
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
index d1297e66..ea199c2f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
@@ -4,6 +4,10 @@
  * Keyed by projectId + sessionKey to prevent cross-session bind (CR-P6-04).
  * Same durability class as mw5ChallengeSessionStore — NOT Product SQLite.
  *
+ * P6-HQA-F05-GD4-01 Pass 02 — retains mission-effect fields needed for
+ * intent fidelity (docs_write / documentary outputs / proposed capabilities)
+ * without treating Nora proposals as Product path authority.
+ *
  * LIMITATION (documented debt):
  * - Lost on process restart → no stale PREPARE from prior process.
  * - Not multi-instance durable.
@@ -14,6 +18,34 @@

 const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

+/**
+ * Mission-effect slice remembered with the CURRENT prepare offer.
+ * Proposals (targetPath, artifactFileName, requiredCapabilities, …) are
+ * NON-AUTHORITATIVE Nora candidates until Product resolve / pathRoot /
+ * generalist capability resolution run at PREPARE.
+ */
+export type PendingGenericPrepareMissionEffects = {
+  readonly intentKind: string | null;
+  readonly artifactType: string | null;
+  /** Nora candidate — never Product Git authority by itself (D-PC-09). */
+  readonly proposedTargetPath: string | null;
+  readonly proposedArtifactFileName: string | null;
+  readonly proposedTargetRepositoryRef: string | null;
+  readonly artifactBrief: string | null;
+  readonly contentRequirements: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly proposedRequiredCapabilities: readonly string[];
+  readonly validationExpectations: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly requestedOperation: string | null;
+  readonly reversibilityExpectation:
+    | "reversible"
+    | "irreversible"
+    | "unknown"
+    | null;
+  readonly exitRequirementKinds: readonly string[];
+};
+
 export type PendingGenericPrepareOffer = {
   readonly projectId: string;
   /** Conversation/session discriminator — never cross-bind without match. */
@@ -37,6 +69,8 @@ export type PendingGenericPrepareOffer = {
   readonly contradictionConflictPresent: boolean;
   readonly offeredAtIso: string;
   readonly offerFingerprint: string;
+  /** Mission-effect fidelity (Pass 02). Absent on ancient in-memory shapes → treat as empty. */
+  readonly missionEffects?: PendingGenericPrepareMissionEffects;
 };

 type StoreSlot = {
@@ -55,6 +89,30 @@ function offerKey(projectId: string, sessionKey: string): string {
   return `${projectId.trim()}::${sessionKey.trim() || "default"}`;
 }

+function freezeMissionEffects(
+  effects: PendingGenericPrepareMissionEffects | undefined,
+): PendingGenericPrepareMissionEffects | undefined {
+  if (!effects) return undefined;
+  return Object.freeze({
+    intentKind: effects.intentKind,
+    artifactType: effects.artifactType,
+    proposedTargetPath: effects.proposedTargetPath,
+    proposedArtifactFileName: effects.proposedArtifactFileName,
+    proposedTargetRepositoryRef: effects.proposedTargetRepositoryRef,
+    artifactBrief: effects.artifactBrief,
+    contentRequirements: Object.freeze([...effects.contentRequirements]),
+    expectedOutputs: Object.freeze([...effects.expectedOutputs]),
+    proposedRequiredCapabilities: Object.freeze([
+      ...effects.proposedRequiredCapabilities,
+    ]),
+    validationExpectations: Object.freeze([...effects.validationExpectations]),
+    evidenceRequirements: Object.freeze([...effects.evidenceRequirements]),
+    requestedOperation: effects.requestedOperation,
+    reversibilityExpectation: effects.reversibilityExpectation,
+    exitRequirementKinds: Object.freeze([...effects.exitRequirementKinds]),
+  });
+}
+
 export function resolvePrepareOfferSessionKey(input: {
   readonly sessionDbPath?: string | null;
   readonly sessionKey?: string | null;
@@ -86,6 +144,7 @@ export function rememberPendingGenericPrepareOffer(
     stopConditions: Object.freeze([...offer.stopConditions]),
     risks: Object.freeze([...offer.risks]),
     reservations: Object.freeze([...offer.reservations]),
+    missionEffects: freezeMissionEffects(offer.missionEffects),
   };
   getSlot().byKey.set(offerKey(offer.projectId, next.sessionKey), next);
   return next;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 2172b911..37daec50 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -51,8 +51,26 @@ import {
   rememberPendingGenericPrepareOffer,
   clearPendingGenericPrepareOffer,
   resolvePrepareOfferSessionKey,
+  type PendingGenericPrepareMissionEffects,
   type PendingGenericPrepareOffer,
 } from "./pendingGenericPrepareOfferStore";
+import {
+  validateExecutionIntentPayload,
+  type ExecutionIntentPayload,
+} from "../f2/executionIntentSchema";
+import {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+  type GenericPrepareCapabilityResolution,
+} from "./genericPrepareCapabilityEnvelope";
+
+export {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+};
+export type { GenericPrepareCapabilityResolution };

 export type GenericMissionPrepareReadiness = {
   readonly ready: boolean;
@@ -316,13 +334,49 @@ function stableMissionKey(input: {
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }

+export function extractMissionEffectsFromAnalysis(
+  analysis: IntentAnalysisDto,
+): PendingGenericPrepareMissionEffects {
+  const rawEi = analysis.executionIntent ?? null;
+  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
+  const ei: ExecutionIntentPayload | null =
+    validated && validated.ok ? validated.payload : null;
+  const rev = ei?.reversibilityExpectation ?? null;
+  return {
+    intentKind: ei?.intentKind?.trim() || null,
+    artifactType: ei?.artifactType?.trim() || null,
+    proposedTargetPath: ei?.targetPath?.trim() || null,
+    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
+    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
+    artifactBrief: ei?.artifactBrief?.trim() || null,
+    contentRequirements: [...(ei?.contentRequirements ?? [])],
+    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
+    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
+    validationExpectations: [...(ei?.validationExpectations ?? [])],
+    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
+    requestedOperation:
+      ei?.requestedOperation?.trim() ||
+      analysis.requestedOperation?.trim() ||
+      null,
+    reversibilityExpectation:
+      rev === "reversible" || rev === "irreversible" || rev === "unknown"
+        ? rev
+        : null,
+    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
+  };
+}
+
 function offerFingerprintFor(input: {
   readonly projectId: string;
   readonly cycleInstanceId: string;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly missionEffects: PendingGenericPrepareMissionEffects;
 }): string {
+  const e = input.missionEffects;
   return createHash("sha256")
     .update(
       [
@@ -331,6 +385,17 @@ function offerFingerprintFor(input: {
         input.objective,
         input.expectedOutcome,
         input.scope,
+        input.scopeIn.join("|"),
+        input.scopeOut.join("|"),
+        e.intentKind ?? "",
+        e.artifactType ?? "",
+        e.proposedTargetPath ?? "",
+        e.proposedArtifactFileName ?? "",
+        e.proposedRequiredCapabilities.join("|"),
+        e.expectedOutputs.join("|"),
+        e.requestedOperation ?? "",
+        e.artifactBrief ?? "",
+        e.contentRequirements.join("|"),
       ].join("\n"),
     )
     .digest("hex")
@@ -359,12 +424,16 @@ export function rememberGenericPrepareRecommendation(input: {
   const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
   const fp = offerFingerprintFor({
     projectId: input.projectId,
     cycleInstanceId: input.cycleInstanceId,
     objective,
     expectedOutcome,
     scope: scopeNarrative,
+    scopeIn,
+    scopeOut,
+    missionEffects,
   });
   rememberPendingGenericPrepareOffer({
     projectId: input.projectId,
@@ -391,6 +460,7 @@ export function rememberGenericPrepareRecommendation(input: {
     ),
     offeredAtIso: input.offeredAtIso,
     offerFingerprint: fp,
+    missionEffects,
   });
   return fp;
 }
@@ -399,6 +469,27 @@ export function rememberGenericPrepareRecommendation(input: {
 export function analysisFromPendingGenericPrepareOffer(
   offer: PendingGenericPrepareOffer,
 ): IntentAnalysisDto {
+  const effects = offer.missionEffects;
+  const intentKind = effects?.intentKind?.trim() || "other";
+  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
+    intentKind,
+    artifactType: effects?.artifactType ?? null,
+    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
+    targetPath: effects?.proposedTargetPath ?? null,
+    artifactFileName: effects?.proposedArtifactFileName ?? null,
+    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
+    scopeIn: [...offer.scopeIn],
+    scopeOut: [...offer.scopeOut],
+    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
+    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
+    validationExpectations: [...(effects?.validationExpectations ?? [])],
+    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
+    requestedOperation: effects?.requestedOperation ?? null,
+    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
+    artifactBrief: effects?.artifactBrief ?? null,
+    contentRequirements: [...(effects?.contentRequirements ?? [])],
+    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
+  };
   return {
     parseOk: true,
     intentClass: "actionable",
@@ -426,12 +517,8 @@ export function analysisFromPendingGenericPrepareOffer(
     activatedBlocks: [],
     expectedOutcome: offer.expectedOutcome,
     criticalJustification: null,
-    requestedOperation: null,
-    executionIntent: {
-      intentKind: "other",
-      scopeIn: [...offer.scopeIn],
-      scopeOut: [...offer.scopeOut],
-    } as IntentAnalysisDto["executionIntent"],
+    requestedOperation: effects?.requestedOperation ?? null,
+    executionIntent,
   };
 }

@@ -475,6 +562,18 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const proposedCapabilities =
+    input.analysis.executionIntent?.requiredCapabilities ?? [];
+  const capabilityResolution =
+    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
+  if (!capabilityResolution.ok) {
+    return {
+      ok: false,
+      code: capabilityResolution.code,
+      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
+    };
+  }
+
   const materialityResolution = await resolveAuthoritativeProductMateriality({
     oa: input.oa,
     projectId: input.projectId,
@@ -515,6 +614,30 @@ export async function prepareGenericExecutionContractDraft(
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const outOfScope = input.analysis.outOfScope ?? [];
   const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
+  // D-PC-09 / Pass 02 regularization — Nora path/filename/expectedOutputs are
+  // candidates only until Product resolves an authoritative destination.
+  // Generic PREPARE does not yet compose a server-owned documentary targetPath,
+  // so contract.expectedOutputs must NOT list unresolved candidates as if they
+  // were authorized destinations. Keep a readable documentary outcome instead.
+  const proposedDocumentaryOutputCandidates = [
+    ...missionEffects.expectedOutputs,
+    ...(missionEffects.proposedTargetPath
+      ? [missionEffects.proposedTargetPath]
+      : []),
+    ...(missionEffects.proposedArtifactFileName
+      ? [missionEffects.proposedArtifactFileName]
+      : []),
+  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
+  const documentaryTargetResolution:
+    | "unresolved_nora_candidate"
+    | "not_applicable" =
+    missionEffects.intentKind === "docs_write" ||
+    proposedDocumentaryOutputCandidates.length > 0
+      ? "unresolved_nora_candidate"
+      : "not_applicable";
+  // Contract expectedOutputs = inspectable requested outcome, never unresolved path authority.
+  const contractExpectedOutputs = [expectedOutcome];

   // D — source grounding / trusted launch when mission implies repository work.
   const impliesGit = missionImpliesRepositoryWork(input.analysis);
@@ -670,18 +793,40 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      // Intent fidelity — inspectable mission effects (Pass 02).
+      intentKind: missionEffects.intentKind,
+      artifactType: missionEffects.artifactType,
+      artifactBrief: missionEffects.artifactBrief,
+      contentRequirements: [...missionEffects.contentRequirements],
+      validationExpectations: [...missionEffects.validationExpectations],
+      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
+      proposedTargetPath: missionEffects.proposedTargetPath,
+      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
+      proposedDocumentaryOutputCandidates,
+      proposedTargetPathAuthoritative: false,
+      documentaryTargetResolution,
+      // No authoritative resolved path at Generic PREPARE in this surface.
+      resolvedAuthoritativeTargetPath: null,
+      proposedRequiredCapabilities: [
+        ...capabilityResolution.proposedCapabilities,
+      ],
+      capabilityResolution: capabilityResolution.resolution,
+      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
       ...launchInputs,
       ...(sourceGroundingPayload
         ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
         : {}),
       protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
     },
-    expectedOutputs: [expectedOutcome],
-    requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
+    expectedOutputs: contractExpectedOutputs,
+    requiredCapabilities: [...capabilityResolution.contractCapabilities],
     requiredAuthority,
     constraints,
     stopConditions: mergedStops,
-    evidenceRequirements: ["evreq:generic-prepare-mission-evidence"],
+    evidenceRequirements: [
+      "evreq:generic-prepare-mission-evidence",
+      ...missionEffects.evidenceRequirements,
+    ],
     reversibility: "partially_reversible",
     idempotencyKey,
     correlationId,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 02a8d5ee..14f478e7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -22,7 +22,7 @@ import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { IntentAnalysisDto } from "../f2/types";
-import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";
+import { isCapabilityWithinGenericPrepareEnvelope } from "./genericPrepareCapabilityEnvelope";

 export type ProductMaterialityCurrentness = {
   readonly lpsId: string;
@@ -70,6 +70,12 @@ export function collectConcreteMissionPaths(
     if (typeof p === "string") push(p);
   }
   if (typeof analysis.scope === "string") push(analysis.scope);
+  // Intent-fidelity WHERE candidates (Nora proposals) — still subject to pathRoot.
+  const ei = analysis.executionIntent;
+  if (typeof ei?.targetPath === "string") push(ei.targetPath);
+  for (const p of ei?.expectedOutputs ?? []) {
+    if (typeof p === "string") push(p);
+  }
   return out;
 }

@@ -178,11 +184,10 @@ function deriveAuthorityEnvelopeExpanded(input: {
       basis: "mission_paths_outside_repository_path_root",
     };
   }
+  // Pass 02 — docs_write effect-class is within Generic PREPARE envelope
+  // (resolved onto studio.cursor.generalist). Other elevated caps remain structural.
   const elevated = input.requestedCapabilities.filter(
-    (c) =>
-      c.trim().length > 0 &&
-      c.trim() !== PRODUCT_CANONICAL_EXECUTION_CAPABILITY &&
-      !c.includes("generalist"),
+    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
   );
   if (elevated.length > 0) {
     return {
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 2c7a46f4..ea865141 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -1196,6 +1196,70 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    // P6-HQA-F05-GD4-01 — ordinary Markdown deliverable on active cycle WITHOUT
+    // closure REQUIRE_ARTIFACT. Triggers natural materialization signal +
+    // compatible docs_write effect so resolve returns no_require_artifact;
+    // orchestration must route to Generic PREPARE (not REQUIRE_ARTIFACT dead-end).
+    if (markerProbe.includes("__P6_OPTIONAL_DOCUMENTARY_MD__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          cognitiveWorkload: null,
+          contradictionCandidate: null,
+          challengeResponseAssessment: "sufficient",
+          continuationKind: null,
+          artifactMaterializationOperation: "cursor.docs_write.apply",
+          objective:
+            "Produire un document Markdown enregistré dans le dépôt du projet",
+          scope: "projects/demo/docs",
+          rephrasedRequest:
+            "Créer un fichier Markdown durable dans le projet pour le cadrage",
+          outOfScope: ["Nouveau CycleInstance", "REQUIRE_ARTIFACT artificiel", "Cursor REAL"],
+          risks: [],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: "Document Markdown consultable et évolutif dans le dépôt",
+          criticalJustification: null,
+          requestedOperation: null,
+          executionIntent: {
+            intentKind: "docs_write",
+            artifactType: "deliverable_document",
+            targetRepositoryRef: null,
+            targetPath: "projects/demo/docs/note-cadrage.md",
+            artifactFileName: "note-cadrage.md",
+            scopeIn: ["projects/demo/docs"],
+            scopeOut: ["projects/sfia-studio/convergence"],
+            expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
+            requiredCapabilities: ["cap:cursor.docs_write"],
+            validationExpectations: [],
+            evidenceRequirements: [],
+            requestedOperation: null,
+            reversibilityExpectation: null,
+            artifactBrief: "Note de cadrage Markdown du projet",
+            contentRequirements: ["Contenu de cadrage défini avec Nora"],
+            exitRequirementKinds: [],
+          },
+          pilotDecisionCandidate: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
     // P6 Product Continuity Closure — generic Cursor mission (non-structural).
     if (markerProbe.includes("__P6_GENERIC_MISSION__")) {
       return {
```

## 10. Contrôles sécurité / scope

- Secrets : aucun dans le diff Product
- Données e66 : absentes
- Doctrine / Roadmap / CKC / méthodes : non modifiées
- Migration / SQLite / REAL config : non touchées
- `.tmp-sfia-review` : hors commit
- Scope : 8 fichiers Product uniquement — MATCH

## 11. Validations exécutées (cette intégration)

Commande :

```
npx vitest run \
  __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts \
  __tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts \
  __tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts \
  __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts \
  __tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts \
  __tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts \
  __tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts \
  __tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
```

| Suite | Résultat |
|---|---|
| F05 optional Artifact routing | 7/7 PASS |
| Artifact Continuity | 6/6 PASS |
| Artifact Applicability Bridge | 13/13 PASS |
| G-D4 Generic PREPARE | 10/10 PASS |
| Product Continuity | 5/5 PASS |
| HQA-F01 | 13/13 PASS |
| Repository Currentness | 6/6 PASS |
| Authority Chat-First Continuity | 3/3 PASS |
| **Total batch** | **63/63 PASS** |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `git diff --check` / cached check | PASS |
| OpenAI REAL / Cursor REAL / :3020 / e66 | NON EXÉCUTÉ |

## 12. Commit projet

| Champ | Valeur |
|---|---|
| Message | `fix(studio): restore optional artifact generic prepare continuity` |
| SHA local | `9b9cd5e5052da5781678a23a86c82b8b3283627e` |
| Fichiers | 8 (6M+2A) ; +1000 / −17 |
| `.tmp-sfia-review` inclus | NON |

## 13. Push distant

| Champ | Valeur |
|---|---|
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| SHA distant | `9b9cd5e5052da5781678a23a86c82b8b3283627e` |
| Match local | OUI |
| Force push | NON |

## 14. Pull Request

| Champ | Valeur |
|---|---|
| Numéro | **#586** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/586 |
| État | OPEN |
| Base | main |
| Head | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| headRefOid | `9b9cd5e5052da5781678a23a86c82b8b3283627e` |
| Fichiers PR | 8 — MATCH périmètre |
| Draft | NON |
| Merge effectué | NON |
| Mergeable (GitHub) | MERGEABLE (observation technique — ≠ MERGE AUTHORIZED) |

## 15. CI / required checks (observation)

Au moment de la création / vérification initiale :

| Check | Statut |
|---|---|
| Detect SFIA Studio changes (SFIA Studio CI) | **QUEUED / PENDING** |

**Verdict CI :** PR OPEN — CI PENDING.
Ne pas déclarer CI PASS.

## 16. Fake / Real qualification

- Applicable : OUI
- Fake : provider tests déterministes
- REAL : NON exécuté
- Niveau d'entrée : DETERMINISTIC PRODUCT PATH PROVEN AT TESTED SCOPE
- Niveau atteint : **PR INTEGRATION PROVEN AT COMMIT/PUSH/PR SCOPE**
- REAL boundary : non élargie
- Gate Morris REAL : NON CONSOMMÉ
- Claims interdits : P6 GLOBAL PASS ; READY FOR REAL ; E2E REAL PROVEN ; RUNTIME V3 ADOPTED ; MERGE AUTHORIZED

## 17. Réserves

1. OpenAI LIVE non retesté après correction
2. e66 / Human QA navigateur non retestés
3. pathRoot historique à vérifier en runtime
4. Documentary target autoritatif non résolu au stade Generic PREPARE (candidat inspectable uniquement)
5. Pending Prepare Offer process-local
6. Cursor REAL non testé
7. CI encore PENDING au moment du Review Pack

## 18. Gate Morris merge

**NON CONSOMMÉ.** Aucun merge. Aucune autorité de merge dans ce cycle.

## 19. Git Truth final (projet)

```
branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
HEAD=9b9cd5e5052da5781678a23a86c82b8b3283627e
origin/main=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
origin/fix/...=9b9cd5e5052da5781678a23a86c82b8b3283627e
PR=#586 OPEN
merge=NON
status: M .tmp-sfia-review/chatgpt-review.md (hors commit)
```

## 20. Verdict

**COMMIT PUSH PR COMPLETE**
**PR OPEN — CI PENDING**
**READY FOR CHATGPT PR READINESS REVIEW**

Non déclaré : MERGE AUTHORIZED · P6 GLOBAL PASS · RUNTIME V3 ADOPTED.

## 21. Instruction ChatGPT obligatoire

Lire dans Git :

Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : commit projet ; push ; PR #586 ; diff 8 fichiers ; tests 63/63 ; statut CI ; Review Pack ; Review Handoff ; réserves ; absence de merge.

Produire :

**SFIA STUDIO — P6-HQA-F05-GD4-01 PR READINESS CRITICAL REVIEW.**
