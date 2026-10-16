# SFIA Studio — Generic Execution Nora Tool Invocation — INTEGRATED DELIVERY — Review Pack FULL

- **Horodatage** : 2026-10-16T09:47:11+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — NORA TOOL INVOCATION — INTEGRATED DELIVERY (2026-10-16)
- **Cycle** : 8 — Delivery / implémentation · **Profil** : CRITICAL · **Typologie** : EVOL
- **Capacité** : V3-F05 (D-ER-16…19)
- **Milestone** : P6 — IN PROGRESS
- **CKC** : ckc:studio:delivery
- **Commit Product** : **AUCUN**
- **Push Product / PR / merge** : **AUCUN**
- **Cursor REAL / OpenAI LIVE / :3020 / e66** : **NON touchés**

## 1. Verdict

**GENERIC EXECUTION DELIVERY DETERMINISTIC PASS**
**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Anti-claims : GIT INTEGRATED · PR READY · REAL BOUNDARY PROVEN · END-TO-END REAL PROVEN · HUMAN QA PASS · P6 GLOBAL PASS · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth initial

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Documentary+Delivery WT | `docs/sfia-studio-generic-execution-nora-tool-invocation-20261016` @ `896ff59c` |
| Architecture candidate D-ER-16…19 | **SECURED** (uncommitted + delivery in same WT) |
| Handoff décision | `a3e5ff00` / blob `3f703535` VERIFIED |
| Runtime :3020 | `studio-runtime-main-52f36884` @ `896ff59c` — **untouched** |
| Contrat WT | review artifacts only |

## 3. Worktrees

| Rôle | Path / branch |
| --- | --- |
| Delivery + architecture candidate | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` · `docs/sfia-studio-generic-execution-nora-tool-invocation-20261016` |
| Runtime Human QA :3020 | `sfia-workspace-studio-runtime-main-52f36884` — **NOT MODIFIED** |
| Review pack host | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` · `.tmp-sfia-review/` |

## 4. Sources lues

Template cycle · routing · guardrails · Build Doctrine · Roadmap (non modifiée) · C1/P1–P7 · Architecture D-ER candidate · Doctrine 30/32/34/35/37 · CKC Delivery · Runtime Reference (lecture) · Handoffs audit + décision.

## 5. Convergence Pre-check

| Item | État |
| --- | --- |
| V3-F05 / P6 | IN PROGRESS |
| Option 2 | ADOPTED → **implémentée localement (déterministe)** |
| KEEP backbone | EC generalist · Gateway · Attempt · Evidence · Resolution · Reconciler |
| ADAPT | ACGC admission · F2 eligibility · offer null-cycle · materiality no-cycle |
| COMPLETE | Nora tool `request_generic_execution_prepare` · `solicitGenericExecutionPrepare` |
| HARVEST/RETIRE | Artifact GOVERNED path KEEP when obligation ; specialized admission no longer dead-ends Generic |
| Exit nominal | Nora tool → solicit → Generic PREPARE → (Pilot inspect/authorize) → Cursor generalist |

## 6. Décisions appliquées

D-ER-16 (tool) · D-ER-17 (généricité / S8 principe) · D-ER-18 (autorité) · D-ER-19 (sortie admissions spécialisées du nominal Generic).

## 7. Architecture CURRENT → IMPLÉMENTÉE

```
CURRENT: Pilot utterance → Intent → ACGC (docs_write gate) → often incompatible_execution_intent
         → Generic PREPARE only via F2 lexical/offer + active cycle
         → Nora Agents: product_execution_context_get READ-ONLY only

IMPLEMENTED (local candidate):
Pilot / Nora conversation
  → Nora tool request_generic_execution_prepare (Agents SDK)
       → solicitGenericExecutionPrepare (unique Product backend)
            → prepareGenericExecutionContractDraft
  OR F2 admission générique (sans taxonomie ; cycle optionnel sous conditions)
  → EC generalist inspectable
  → Pilot AUTHORIZE / Confirmation / HD (inchangé)
  → Attempt / Cursor (NOT in this tool path)
```

**Backend unique :** `solicitGenericExecutionPrepare` → `prepareGenericExecutionContractDraft` (même module W2 que F2).

## 8. Preuve backend unique

- Tool → `ctx.solicitPrepare` injecté depuis `orchestrateTurn.ts` → dynamic import `solicitGenericExecutionPrepare`
- F2 → `prepareGenericExecutionContractDraft` directement
- Aucun second moteur PREPARE

## 9. Fichiers créés / modifiés

### Créé
- `projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts` (1015 lignes)

### Modifiés (diffstat)
```
activeCycleGovernedContinuation.ts          |  19
orchestrateF2.ts                            | 142
orchestrateTurn.ts                          |  41
pendingGenericPrepareOfferStore.ts          |   3
prepareGenericExecutionContractDraft.ts     | 206
resolveAuthoritativeProductMateriality.ts   |  13
productExecutionAgentsTools.ts              | 153
providerAgentsModel.ts                      |   1
index.ts                                    |   2
architecture.md (D-ER capture + note)       | 170
2 regression tests adapted                  |  24
+ NEW test file (untracked)
```

Total tracked: **+705 / −69** (12 files) + 1 new test.

## 10. Contenu complet — fichier créé (test)

```typescript
/**
 * D-ER-16…19 — Generic Execution Nora Tool Delivery (Option 2).
 *
 * Proves (deterministic, Fake OpenAI boundary only — ZERO Cursor REAL):
 *  E8   Nora Agents tool `request_generic_execution_prepare` registered and wired to the
 *       unique Product backend; PREPARE only — never an ExecutionAttempt.
 *  E9   natural documentary analysis WITHOUT docs_write / artifactMaterializationOperation
 *       discriminants → Generic PREPARE (recommend → OK → EC) — no Fake discriminant injection.
 *  E9b  code-like mission (no docs taxonomy) → same Generic path.
 *  E10  project WITHOUT activeCycleInstanceId → Generic PREPARE; no CycleInstance created.
 *  E11  incompatible_execution_intent is no longer the exclusive dead-end for a natural signal
 *       without docs_write (explicit hostile continuationKind stays BLOCKED).
 *  E12  structural signals → STRUCTURAL_HUMAN_DECISION_REQUIRED (tool + F2), fail-closed.
 *  E14  accept "OK" without a CURRENT offer clarifies — no invented prepare.
 *  NR   REQUIRE_ARTIFACT + docs_write-compatible effect still routes Artifact governed (F05 T05).
 *
 * PREPARE ≠ AUTHORIZE ≠ EXECUTE. No synthetic HumanDecision.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { RunContext } from "@openai/agents";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  resolveActiveCycleGovernedContinuation,
  hasCompatibleDocsWriteMaterializationEffect,
  hasNaturalActiveCycleDeliverableMaterializationSignal,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import {
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  getPendingGenericPrepareOffer,
  resetPendingGenericPrepareOfferStoreForTests,
  resolvePrepareOfferSessionKey,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  rememberGenericPrepareRecommendation,
  resolveChatFirstGenericPrepareGo,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai/types";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { createProductExecutionAgentsTools } from "@/lib/nora-cognitive-runtime/productExecutionAgentsTools";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");

// ---------------------------------------------------------------------------
// Deterministic F2 intent-analysis provider — NO docs_write discriminants.
// Wraps the Fake provider; only intercepts F2 intent analysis for DER16 markers.
// ---------------------------------------------------------------------------

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

function baseAnalysisJson(over: Record<string, unknown>): Record<string, unknown> {
  return {
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind: null,
    artifactMaterializationOperation: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    pilotDecisionCandidate: null,
    ...over,
  };
}

/** E9 — natural documentary mission: NO executionIntent, NO artifactMaterializationOperation. */
function naturalDocAnalysisJson(over: Record<string, unknown> = {}) {
  return baseAnalysisJson({
    objective: "Écrire une spécification Markdown dans le dépôt du projet",
    scope: "projects/demo/docs",
    rephrasedRequest:
      "Rédiger un document Markdown de spécification dans le dépôt du projet",
    expectedOutcome: "Spécification consultable dans le dépôt du projet",
    ...over,
  });
}

/** E9b — code-like mission: intentKind "other", NO docs taxonomy. */
function codeLikeAnalysisJson(over: Record<string, unknown> = {}) {
  return baseAnalysisJson({
    objective: "Refactorer le module d'export du projet demo",
    scope: "projects/demo/src",
    rephrasedRequest: "Refactorer le module d'export sous projects/demo/src",
    expectedOutcome: "Module d'export simplifié, tests inchangés",
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/src"],
      scopeOut: [],
    },
    ...over,
  });
}

const MARKER_NATURAL_DOC = "__DER16_NATURAL_DOC__";
const MARKER_CODE_LIKE = "__DER16_CODE_LIKE__";
const MARKER_STRUCTURAL_DOC = "__DER16_STRUCTURAL_DOC__";
const MARKER_NEW_CYCLE = "__DER16_NEW_CYCLE__";
const MARKER_ACCEPT_NO_OFFER = "__DER16_ACCEPT_NO_OFFER__";

function intercept(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  if (!isF2) return null;
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const full = lastUser?.content ?? "";
  // Only the CURRENT demand — canonical history may carry earlier markers.
  const cur = full.split("Demande courante (à évaluer):").pop() ?? full;
  const u = cur;
  let payload: Record<string, unknown> | null = null;
  if (u.includes(MARKER_NATURAL_DOC)) payload = naturalDocAnalysisJson();
  else if (u.includes(MARKER_CODE_LIKE)) payload = codeLikeAnalysisJson();
  else if (u.includes(MARKER_NEW_CYCLE)) {
    payload = baseAnalysisJson({
      objective: "Préparer un nouveau cycle Delivery pour formaliser la suite",
      rephrasedRequest: "Prépare un nouveau cycle Delivery",
      scope: "Formalisation bornée sans exécution",
      expectedOutcome: "Cycle Delivery proposé",
    });
  }
  else if (u.includes(MARKER_STRUCTURAL_DOC)) {
    payload = naturalDocAnalysisJson({
      signals: { ...SIGNALS_OK, architectureImpact: true, lowRiskBounded: false },
    });
  } else if (u.includes(MARKER_ACCEPT_NO_OFFER)) {
    payload = naturalDocAnalysisJson({
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
        rationale: "Le Pilote dit OK sans offre courante.",
      },
    });
  }
  if (!payload) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

class Der16Provider implements ConversationProvider {
  readonly providerId = "fake-test";
  private readonly inner = new FakeConversationProvider();

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-der16",
      },
    };
  }

  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    const hit = intercept(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages, options);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    const hit = intercept(input.messages);
    if (hit) return this.result(hit);
    return this.inner.completeStructured(input);
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
    signal?: AbortSignal;
  }): Promise<ProviderRoundResult> {
    return this.inner.completeRound!(input);
  }
}

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
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
    setConversationProviderForTests(new Der16Provider());
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-der16-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-der16-product.sqlite"),
      idPrefix: "d16",
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
    withCycle: boolean;
    withRequireArtifactPolicy?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `D16 ${input.suffix}`,
      objective: "Generic Nora tool invocation",
      context: "det der16",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `D1${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:d16-${input.suffix}`,
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

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:d16-${input.suffix}`;
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
        issuedAt: "2026-10-16T08:00:00.000Z",
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
          nowIso: () => "2026-10-16T08:02:00.000Z",
        });
        if (!pol.ok) throw new Error("require_artifact_policy");
      }
    }

    const identity = `acme/d16-${input.suffix}`;
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

  async function countCycles(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    return (await oa.cycleServices.cycles.listByProject(projectId)).length;
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  function projectDto(input: {
    projectId: string;
    cycleInstanceId: string | null;
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
      contextSummary: "p6 der16",
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

  function productTools(projectId: string, oa: NonNullable<RuntimeApplicationService["oa"]>) {
    return createProductExecutionAgentsTools({
      projectId,
      resolve: async () => ({
        ok: false as const,
        code: "NOT_USED",
        message: "not used in this proof",
      }),
      // Same wiring shape as orchestrateTurn.ts (same Product backend).
      solicitPrepare: async (args) =>
        solicitGenericExecutionPrepare({
          oa,
          projectId,
          cycleInstanceId: null,
          mission: args,
          sessionDbPath,
          forceLocalAuthority: true,
          pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        }),
    });
  }

  async function invokeTool(
    tool: ReturnType<typeof productTools>[number],
    args: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    const raw = await tool.invoke(new RunContext({}), JSON.stringify(args));
    return JSON.parse(String(raw)) as Record<string, unknown>;
  }

  // -------------------------------------------------------------------------
  // E8 — Nora tool registered; PREPARE only
  // -------------------------------------------------------------------------

  it("E8 — tool registered only when solicitPrepare injected; no taxonomy params; Agents-local", async () => {
    const readOnly = createProductExecutionAgentsTools({
      projectId: "proj-x",
      resolve: async () => ({ ok: false as const, code: "X", message: "x" }),
    });
    expect(readOnly.map((t) => t.name)).toEqual(["product_execution_context_get"]);

    const { projectId, oa } = await seedProject({ suffix: "e8a", withCycle: false });
    const tools = productTools(projectId, oa);
    expect(tools.map((t) => t.name)).toEqual([
      "product_execution_context_get",
      "request_generic_execution_prepare",
    ]);
    const prepareTool = tools[1]!;
    const params = JSON.stringify(
      (prepareTool as unknown as { parameters: unknown }).parameters,
    );
    expect(params).not.toMatch(/docs_write|REQUIRE_ARTIFACT|cycleTypeId|continuationKind|artifactMaterialization/);
    expect(
      (prepareTool as unknown as { parameters: { required: string[] } }).parameters
        .required,
    ).toEqual([]);
    expect(
      (prepareTool as unknown as { description: string }).description,
    ).toMatch(/PREPARE ≠ AUTHORIZE ≠ EXECUTE/);

    // Agents-local skip list (not projected to Fake/provider ToolDefinition).
    const src = fs.readFileSync(
      path.join(APP_ROOT, "lib/nora-cognitive-runtime/providerAgentsModel.ts"),
      "utf8",
    );
    expect(src).toContain('name === "request_generic_execution_prepare"');
    // Wired in orchestrateTurn to the SAME Product backend (no parallel engine).
    const orch = fs.readFileSync(
      path.join(APP_ROOT, "features/project-assistant/orchestrateTurn.ts"),
      "utf8",
    );
    expect(orch).toContain("solicitPrepare");
    expect(orch).toContain("solicitGenericExecutionPrepare");
    const svc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/w2/prepareGenericExecutionContractDraft.ts",
      ),
      "utf8",
    );
    expect(svc).toMatch(/solicitGenericExecutionPrepare[\s\S]*prepareGenericExecutionContractDraft\(/);
  });

  it("E8 — invoke → Generic PREPARE (EC draft/validated), executionAttemptCreated false, no Attempt, no HD, no cycle", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e8b", withCycle: false });
    const cyclesBefore = await countCycles(oa, projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;
    const attemptsBefore = await countAttempts(oa, projectId);

    const out = await invokeTool(productTools(projectId, oa)[1]!, {
      objective: "Refactorer le module d'export",
      expectedOutcome: "Module d'export simplifié",
      scope: "projects/demo/src",
    });
    expect(out.ok).toBe(true);
    expect(out.executionAttemptCreated).toBe(false);
    expect(out.humanDecisionCreated).toBe(false);
    expect(out.projectId).toBe(projectId);
    expect(String(out.executionContractId)).toMatch(/^xct:gen-prep:/);
    expect(String(out.disclosure)).toMatch(/PREPARE ≠ AUTHORIZE ≠ EXECUTE/);
    expect(out.projectContextOnly).toBe(true);
    expect(out.cycleInstanceId).toBeNull();

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: String(out.executionContractId),
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect(["draft", "validated", "confirmation_required"]).toContain(
      loaded.contract.status,
    );

    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
    expect(await countAttempts(oa, projectId)).toBe(attemptsBefore);
  });

  it("E8 — tool cannot force an Attempt flag; hostile solicit result is normalized; insufficient mission fails honestly", async () => {
    const hostile = createProductExecutionAgentsTools({
      projectId: "proj-h",
      resolve: async () => ({ ok: false as const, code: "X", message: "x" }),
      solicitPrepare: async () => ({ ok: true, executionAttemptCreated: true }),
    });
    const o = await invokeTool(hostile[1]!, { objective: "x" });
    expect(o.executionAttemptCreated).toBe(false);

    const { projectId, oa } = await seedProject({ suffix: "e8c", withCycle: false });
    const out = await invokeTool(productTools(projectId, oa)[1]!, {});
    expect(out.ok).toBe(false);
    expect(out.code).toBe("MISSION_INSUFFICIENTLY_QUALIFIED");
    expect(out.executionAttemptCreated).toBe(false);

    const noProject = createProductExecutionAgentsTools({
      projectId: "  ",
      resolve: async () => ({ ok: false as const, code: "X", message: "x" }),
      solicitPrepare: async () => ({ ok: true }),
    });
    const np = await invokeTool(noProject[1]!, { objective: "x" });
    expect(np.code).toBe("PRODUCT_PROJECT_REQUIRED");
    expect(np.executionAttemptCreated).toBe(false);
  });

  // -------------------------------------------------------------------------
  // E9 — natural documentary WITHOUT docs_write discriminants
  // -------------------------------------------------------------------------

  it("E9 — natural documentary (no docs_write / no artifactMaterializationOperation) on active cycle → recommend → OK → EC; same cycle; no HD", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "e9",
      withCycle: true,
    });
    // Analysis shape proof: this is NOT the F05 Fake discriminant shape.
    const probe = validateIntentAnalysisPayload(naturalDocAnalysisJson());
    expect(probe.parseOk).toBe(true);
    expect(probe.executionIntent).toBeNull();
    expect(probe.artifactMaterializationOperation ?? null).toBeNull();
    expect(hasNaturalActiveCycleDeliverableMaterializationSignal(probe)).toBe(true);
    expect(hasCompatibleDocsWriteMaterializationEffect(probe)).toBe(false);

    const cyclesBefore = await countCycles(oa, projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).not.toMatch(/incompatible|REQUIRE_ARTIFACT/i);
    expect(turn1.text).toMatch(/Je recommande|Je peux préparer/i);
    expect(turn1.text).toMatch(/Le cycle actif est conservé/);

    const offer = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
    expect(offer?.missionEffects?.intentKind ?? null).toBeNull();

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    const ecId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(ecId).toBeTruthy();
    expect(turn2.text).toMatch(/Aucune exécution n'a été lancée/);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ecId!,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);

    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E9b — code-like mission (intentKind other, no docs taxonomy gate) on active cycle → same Generic path", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "e9b",
      withCycle: true,
    });
    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: `Refactore le module d'export. ${MARKER_CODE_LIKE}`,
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).toMatch(/Je recommande|Je peux préparer/i);
    const offer = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
    expect(offer?.missionEffects?.intentKind).toBe("other");

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).toMatch(/xct:gen-prep:/);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  // -------------------------------------------------------------------------
  // E10 — no active cycle (S8)
  // -------------------------------------------------------------------------

  it("E10 — project WITHOUT active cycle: natural documentary → recommend (null-cycle offer) → OK → EC; NO CycleInstance created", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "e10",
      withCycle: false,
    });
    expect(cycleInstanceId).toBeNull();
    const cyclesBefore = await countCycles(oa, projectId);
    expect(cyclesBefore).toBe(0);

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).toMatch(/Je recommande|Je peux préparer/i);
    // Honest wording — never claims an active cycle that does not exist.
    expect(turn1.text).not.toMatch(/Le cycle actif est conservé/);
    expect(turn1.text).toMatch(/Contexte projet conservé/);
    expect(turn1.text).toMatch(/aucun cycle artificiel/i);
    expect(turn1.f2?.qualification?.cycleTypeId).toBe("project-context");
    expect(turn1.f2?.qualification?.cycleInstanceId).toBeUndefined();
    expect(turn1.f2?.qualification?.disclosures).toContain("NO_ACTIVE_CYCLE");

    const offer = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBeNull();

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    const ecId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(ecId).toBeTruthy();

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ecId!,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);

    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBe(0);
    // Consumed by PREPARE.
    expect(
      getPendingGenericPrepareOffer(
        projectId,
        resolvePrepareOfferSessionKey({ sessionDbPath }),
      ),
    ).toBeNull();
  });

  it("E10 — null-cycle offer binds only to null-cycle GO (no cross-bind with a cycle)", async () => {
    const { projectId } = await seedProject({ suffix: "e10b", withCycle: false });
    const analysis = validateIntentAnalysisPayload(naturalDocAnalysisJson());
    const fpNull = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: "2026-10-16T09:00:00.000Z",
      sessionDbPath,
    });
    const okNull = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "OK, vas-y",
      sessionDbPath,
    });
    expect(okNull).toEqual({ kind: "prepare", offerFingerprint: fpNull });
    const withCycle = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: "cyc:other",
      text: "OK, vas-y",
      sessionDbPath,
    });
    expect(withCycle).toEqual({
      kind: "no_go",
      reason: "prepare_offer_cycle_mismatch",
    });

    // Fingerprint differs between null-cycle and cycle-bound offers.
    const fpCycle = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: "cyc:other",
      analysis,
      offeredAtIso: "2026-10-16T09:01:00.000Z",
      sessionDbPath,
    });
    expect(fpCycle).not.toBe(fpNull);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId,
        cycleInstanceId: null,
        text: "OK, vas-y",
        sessionDbPath,
      }),
    ).toEqual({ kind: "no_go", reason: "prepare_offer_cycle_mismatch" });
  });

  it("E10 — explicit prepare intent on a code-like mission WITHOUT active cycle → direct Generic PREPARE (cycleInstanceId null)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e10c", withCycle: false });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Prépare le contrat d'exécution pour refactorer le module d'export. ${MARKER_CODE_LIKE}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    const ecId = turn.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(ecId).toBeTruthy();
    expect(turn.text).toMatch(/Aucune exécution n'a été lancée/);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ecId!,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)", async () => {
    const { projectId } = await seedProject({ suffix: "e10d", withCycle: false });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Prépare un nouveau cycle Delivery pour formaliser la suite. ${MARKER_NEW_CYCLE}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(turn.text).not.toMatch(/Contexte projet conservé/);
  });

  // -------------------------------------------------------------------------
  // E11 — incompatible_execution_intent no longer exclusive dead-end
  // -------------------------------------------------------------------------

  it("E11 — natural signal WITHOUT docs_write → NEW_CYCLE_FORMALIZATION (no_compatible_artifact_effect), not BLOCKED; explicit hostile kind stays BLOCKED", async () => {
    const { projectId, cycleInstanceId } = await seedProject({
      suffix: "e11",
      withCycle: true,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const project = projectDto({ projectId, cycleInstanceId, overview });

    const natural = validateIntentAnalysisPayload(naturalDocAnalysisJson());
    const resolved = await resolveActiveCycleGovernedContinuation({
      project,
      analysis: natural,
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("NEW_CYCLE_FORMALIZATION");
    if (resolved.mode === "NEW_CYCLE_FORMALIZATION") {
      expect(resolved.reason).toBe("no_compatible_artifact_effect");
    }

    // Same without any active cycle — still not BLOCKED no_active_cycle/incompatible.
    const noCycle = await resolveActiveCycleGovernedContinuation({
      project: projectDto({ projectId, cycleInstanceId: null, overview }),
      analysis: natural,
      oa: runtime.oa!,
    });
    expect(noCycle.mode).toBe("NEW_CYCLE_FORMALIZATION");

    // Explicit (hostile / contradictory) Artifact continuationKind stays fail-closed.
    const hostile = validateIntentAnalysisPayload(
      naturalDocAnalysisJson({
        continuationKind: "active_cycle_artifact_materialization",
      }),
    );
    const blocked = await resolveActiveCycleGovernedContinuation({
      project,
      analysis: hostile,
      oa: runtime.oa!,
    });
    expect(blocked.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (blocked.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(blocked.reason).toBe("incompatible_execution_intent");
    }
  });

  // -------------------------------------------------------------------------
  // E12 — structural
  // -------------------------------------------------------------------------

  it("E12 — tool: structural impact signal → STRUCTURAL_HUMAN_DECISION_REQUIRED; no EC, no Attempt", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e12a", withCycle: false });
    const out = await invokeTool(productTools(projectId, oa)[1]!, {
      objective: "Migrer le schéma de données",
      expectedOutcome: "Schéma migré",
      scope: "projects/demo/src",
      impactSignals: { dataImpact: true },
    });
    expect(out.ok).toBe(false);
    expect(out.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    expect(out.executionAttemptCreated).toBe(false);
    expect(out.humanDecisionCreated).toBe(false);
    expect(out.executionContractId).toBeUndefined();
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E12 — tool: server materiality for a protected path stays fail-closed (model cannot declare non-structural to bypass)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e12b", withCycle: false });
    const out = await invokeTool(productTools(projectId, oa)[1]!, {
      objective: "Modifier la doctrine Studio",
      expectedOutcome: "Doctrine modifiée",
      scope: "projects/sfia-studio/app/lib/oa/doctrine/product/registry.json",
      impactSignals: {},
    });
    expect(out.executionAttemptCreated).toBe(false);
    // Either structural (protected path) or an honest failure — never a prepared EC.
    expect(out.ok).toBe(false);
  });

  it("E12 — F2: structural signals on natural documentary → STRUCTURAL clarification; no offer, no EC", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e12c", withCycle: true });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Écris la note d'architecture Markdown du projet. ${MARKER_STRUCTURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(
      getPendingGenericPrepareOffer(
        projectId,
        resolvePrepareOfferSessionKey({ sessionDbPath }),
      ),
    ).toBeNull();
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  // -------------------------------------------------------------------------
  // E14 — accept without offer
  // -------------------------------------------------------------------------

  it("E14 — accept OK without a CURRENT offer clarifies (no invented prepare) — with cycle and without", async () => {
    for (const withCycle of [true, false]) {
      const { projectId, oa } = await seedProject({
        suffix: withCycle ? "e14a" : "e14b",
        withCycle,
      });
      const turn = await orchestrateAssistantSend({
        projectId,
        content: `OK, vas-y ${MARKER_ACCEPT_NO_OFFER}`,
        sessionDbPath: tempProductDbPath(`p6-der16-e14-${withCycle}.sqlite`),
      });
      expect(turn.ok).toBe(true);
      if (!turn.ok) throw new Error(turn.message);
      expect(turn.text).toMatch(/Aucune recommandation de préparation courante/);
      expect(turn.text).not.toMatch(/xct:gen-prep:/);
      expect(turn.text).toMatch(
        withCycle ? /Le cycle actif est conservé/ : /Contexte projet conservé/,
      );
      expect(await countAttempts(oa, projectId)).toBe(0);
    }
  });

  // -------------------------------------------------------------------------
  // NR — Artifact governed path unchanged (F05 T05)
  // -------------------------------------------------------------------------

  it("NR — REQUIRE_ARTIFACT CURRENT + docs_write-compatible effect keeps Artifact governed (no Generic PREPARE offer)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "nr",
      withCycle: true,
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
    expect(
      getPendingGenericPrepareOffer(
        projectId,
        resolvePrepareOfferSessionKey({ sessionDbPath }),
      ),
    ).toBeNull();
    if (turn.f2?.qualification?.cycleInstanceId) {
      expect(turn.f2.qualification.cycleInstanceId).toBe(cycleInstanceId);
    }
    expect(
      turn.f2?.turnKind === "f2_proposal" ||
        turn.f2?.turnKind === "f2_clarification" ||
        turn.f2?.turnKind === "f2_blocked",
    ).toBe(true);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("NR — natural doc signal WITH REQUIRE_ARTIFACT but no docs_write effect still reaches Generic (not Artifact obligation dead-end)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "nr2",
      withCycle: true,
      withRequireArtifactPolicy: true,
    });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/incompatible/i);
    expect(turn.text).toMatch(/Je recommande|Je peux préparer/i);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });
});

```

## 11. Extraits exploitables — tool Nora

```typescript
/**
 * Product Execution Context Agents tools — project-bound.
 * `product_execution_context_get` is READ-ONLY.
 * `request_generic_execution_prepare` (D-ER-16…19, Option 2) SOLICITS Generic
 * PREPARE through the unique Product backend — it never authorizes, never
 * executes and never creates an ExecutionAttempt (PREPARE ≠ AUTHORIZE ≠ EXECUTE).
 * Pattern harvested from cycleJournalAgentsTools.ts.
 * Model cannot switch projectId / paths / SQL / credentials.
 */
import { tool } from "@openai/agents";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";
import type {
  ProductExecutionContext,
  ProductExecutionContextQuery,
  ResolveProductExecutionContextResult,
} from "@/features/project-assistant/w2/resolveProductExecutionContext";

export type ProductExecutionToolContext = {
  readonly projectId: string;
  readonly resolve: (
    query: ProductExecutionContextQuery,
  ) => Promise<ResolveProductExecutionContextResult>;
  readonly budget?: NoraTurnBudget;
  /**
   * D-ER-16 — Product-injected solicitation of Generic PREPARE for the CURRENT
   * project. The model cannot choose projectId / cycle / paths / authority.
   * No task taxonomy (docs_write / REQUIRE_ARTIFACT / cycleTypeId) is accepted.
   * Result MUST be JSON-serializable and carry executionAttemptCreated:false.
   */
  readonly solicitPrepare?: (args: SolicitGenericPrepareToolArgs) => Promise<unknown>;
};

/** Mission fields Nora may supply — NON-AUTHORITATIVE, no required taxonomy. */
export type SolicitGenericPrepareToolArgs = {
  readonly objective?: string;
  readonly expectedOutcome?: string;
  readonly scope?: string;
  readonly contextNotes?: string;
  /** Conservative-only impact flags — can only make Product more cautious. */
  readonly impactSignals?: {
    readonly structuralChange?: boolean;
    readonly securityImpact?: boolean;
    readonly architectureImpact?: boolean;
    readonly dataImpact?: boolean;
    readonly irreversible?: boolean;
  };
};

export const GENERIC_PREPARE_TOOL_DISCLOSURE =
  "PREPARE ≠ AUTHORIZE ≠ EXECUTE — sollicitation Product uniquement; aucune autorisation, aucune exécution, aucun ExecutionAttempt créé par cet outil.";

function parseImpactSignals(
  v: unknown,
): SolicitGenericPrepareToolArgs["impactSignals"] {
  if (!v || typeof v !== "object") return undefined;
  const r = v as Record<string, unknown>;
  return {
    structuralChange: r.structuralChange === true,
    securityImpact: r.securityImpact === true,
    architectureImpact: r.architectureImpact === true,
    dataImpact: r.dataImpact === true,
    irreversible: r.irreversible === true,
  };
}

function str(v: unknown): string | undefined {
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

function requireProject(ctx: ProductExecutionToolContext): string | null {
  const p = ctx.projectId.trim();
  return p || null;
}

function boundContextJson(context: ProductExecutionContext): string {
  // Drop large artifact preview from default tool payload — keep summary + completeness.
  const bounded = {
    ...context,
    artifact: {
      kind: context.artifact.kind,
      present: context.artifact.present,
      completeness: context.artifact.completeness,
      preview:
        context.artifact.preview && context.artifact.preview.length > 800
          ? `${context.artifact.preview.slice(0, 800)}…`
          : context.artifact.preview,
    },
  };
  return JSON.stringify(bounded);
}

/**
 * Same-turn Product Resolution tools for Nora Agents Runner.
 * Bound to one projectId — server validates lineage.
 */
export function createProductExecutionAgentsTools(
  ctx: ProductExecutionToolContext,
) {
  const get = tool({
    name: "product_execution_context_get",
    description:
      "Resolve durable Product execution facts for the CURRENT Project only " +
      "(ExecutionContract, Attempt, CursorExecutionReport CLAIM, Artifact summary, " +
      "Evidence, ReviewBundle, ClaimEvaluation, post-Evidence Recommendation). " +
      "Use when the Pilot asks what happened in the last execution — do NOT ask the Pilot for Attempt/EC IDs Studio already holds. " +
      "READ-ONLY. Never Evidence authority. Cursor report is CLAIM not Evidence.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        selector: {
          type: "string",
          description:
            'Use "latest" (default), or omit. Do not invent foreign project ids.',
        },
        executionContractId: {
          type: "string",
          description:
            "Optional EC id known to belong to this Project. Rejected if foreign.",
        },
        attemptId: {
          type: "string",
          description:
            "Optional Attempt id known to belong to this Project. Rejected if foreign.",
        },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const projectId = requireProject(ctx);
      if (!projectId) {
        return JSON.stringify({
          ok: false,
          code: "PRODUCT_PROJECT_REQUIRED",
          context: null,
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      let query: ProductExecutionContextQuery = { kind: "latest" };
      if (typeof o.attemptId === "string" && o.attemptId.trim()) {
        query = { kind: "byAttemptId", attemptId: o.attemptId.trim() };
      } else if (
        typeof o.executionContractId === "string" &&
        o.executionContractId.trim()
      ) {
        query = {
          kind: "byExecutionContractId",
          executionContractId: o.executionContractId.trim(),
        };
      }
      const resolved = await ctx.resolve(query);
      if (!resolved.ok) {
        return JSON.stringify({
          ok: false,
          code: resolved.code,
          message: resolved.message,
          projectId,
          context: null,
        });
      }
      return JSON.stringify({
        ok: true,
        projectId,
        context: JSON.parse(boundContextJson(resolved.context)),
        disclosure:
          "Product Resolution projection — READ-ONLY; CursorExecutionReport=CLAIM; Attempt succeeded ≠ Product PROVEN.",
      });
    },
  });

  if (!ctx.solicitPrepare) return [get];

  const solicit = ctx.solicitPrepare;
  const prepareTool = tool({
    name: "request_generic_execution_prepare",
    description:
      "Solicit Generic PREPARE of an inspectable ExecutionContract for the CURRENT Project, " +
      "for any bounded mission (documentation, code, analysis, other) — no task category, no docs_write, " +
      "no REQUIRE_ARTIFACT, no cycle type needed, and no active cycle required. " +
      "Use when the Pilote wants Cursor to do real work and the mission is clear enough " +
      "(objective + expected outcome or scope). Product qualifies the mission server-side " +
      "(materiality, capabilities, protected paths); structural missions stay blocked until a HumanDecision. " +
      "This tool does NOT authorize and does NOT execute: PREPARE ≠ AUTHORIZE ≠ EXECUTE; " +
      "it never creates an ExecutionAttempt. Report the returned contract/status honestly " +
      "and never claim anything was executed.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        objective: {
          type: "string",
          description: "What the Pilote wants done (mission objective).",
        },
        expectedOutcome: {
          type: "string",
          description: "Observable expected result of the mission.",
        },
        scope: {
          type: "string",
          description:
            "Where / what is in scope (paths, area). Candidate only — Product resolves authority.",
        },
        contextNotes: {
          type: "string",
          description: "Optional short notes (constraints, risks, reservations).",
        },
        impactSignals: {
          type: "object",
          additionalProperties: false,
          description:
            "Optional: set a flag true ONLY if the mission is structural/security/architecture/data/irreversible. Product still decides.",
          properties: {
            structuralChange: { type: "boolean" },
            securityImpact: { type: "boolean" },
            architectureImpact: { type: "boolean" },
            dataImpact: { type: "boolean" },
            irreversible: { type: "boolean" },
          },
        },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const projectId = requireProject(ctx);
      if (!projectId) {
        return JSON.stringify({
          ok: false,
          code: "PRODUCT_PROJECT_REQUIRED",
          executionAttemptCreated: false,
          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      try {
        const result = await solicit({
          objective: str(o.objective),
          expectedOutcome: str(o.expectedOutcome),
          scope: str(o.scope),
          contextNotes: str(o.contextNotes),
          impactSignals: parseImpactSignals(o.impactSignals),
        });
        const base =
          result && typeof result === "object"
            ? (result as Record<string, unknown>)
            : { ok: false, code: "PREPARE_SOLICITATION_EMPTY" };
        return JSON.stringify({
          ...base,
          projectId,
          // Forced — the tool can never report an Attempt.
          executionAttemptCreated: false,
          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
        });
      } catch {
        return JSON.stringify({
          ok: false,
          code: "PREPARE_SOLICITATION_FAILED",
          projectId,
          executionAttemptCreated: false,
          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
        });
      }
    },
  });

  return [get, prepareTool];
}

```

## 12. Extraits — solicitGenericExecutionPrepare

```typescript
export function buildIntentAnalysisFromSolicitedMission(
  fields: SolicitGenericPrepareMissionFields,
): IntentAnalysisDto {
  const objective = fields.objective?.trim() || null;
  const expectedOutcome = fields.expectedOutcome?.trim() || null;
  const scope = fields.scope?.trim() || null;
  const sig = fields.impactSignals ?? null;
  const structural =
    sig?.structuralChange === true ||
    sig?.securityImpact === true ||
    sig?.architectureImpact === true ||
    sig?.dataImpact === true ||
    sig?.irreversible === true;
  const notes = fields.contextNotes?.trim() || null;
  return {
    parseOk: true,
    intentClass: "execution_request",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: sig?.structuralChange === true,
      securityImpact: sig?.securityImpact === true,
      architectureImpact: sig?.architectureImpact === true,
      dataImpact: sig?.dataImpact === true,
      irreversible: sig?.irreversible === true,
      lowRiskBounded: !structural,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective,
    scope,
    rephrasedRequest: objective,
    outOfScope: [],
    ri

// ---

export async function solicitGenericExecutionPrepare(
  input: SolicitGenericExecutionPrepareInput,
): Promise<SolicitGenericExecutionPrepareResult> {
  const projectId = input.projectId.trim();
  const fail = (
    code: string,
    message: string,
    missingFields?: readonly string[],
  ): SolicitGenericExecutionPrepareResult => ({
    ok: false,
    code,
    message,
    ...(missingFields ? { missingFields } : {}),
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
  }
  const analysis =
    input.analysis ??
    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});

  const readiness = assessGenericMissionPrepareReadiness(analysis);
  if (readiness.structuralBlocked) {
    return fail(
      "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
    );
  }
  if (!readiness.ready) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
      readiness.missingFields,
    );
  }

  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
  const prep = await prepareGenericExecutionContractDraft({
    oa: input.oa,
    projectId,
    cycleInstanceId,
    analysis,
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
    sourceGroundingReader: input.sourceGroundingReader,
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  if (!prep.ok) {
    return fail(prep.code, prep.message);
  }
  return {
    ok: true,
    code: "GENERIC_PREPARE_DRAFTED",
    executionContractId: prep.contract.executionContractId,
    contractStatus: prep.contract.status,
    materiality: prep.materiality.materiality,
    cycleInstanceId,
    projectContextOnly: cycleInstanceId === null,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    message:
      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
  };
}

```

## 13. Extraits — wire orchestrateTurn

```typescript
ect bound server-side; active cycle is
        // optional context (null = S8 project-context, never invented).
        // PREPARE ≠ AUTHORIZE ≠ EXECUTE — no ExecutionAttempt is ever created.
        solicitPrepare: async (args) => {
          const [
            { getRuntimeApplicationService },
            { solicitGenericExecutionPrepare },
          ] = await Promise.all([
            import("@/lib/vertical-slice-runtime"),
            import("./w2/prepareGenericExecutionContractDraft"),
          ]);
          const oa = getRuntimeApplicationService().oa;
          if (!oa) {
            return {
              ok: false as const,
              code: "OA_UNAVAILABLE",
              message: "OA runtime indisponible pour la préparation.",
              executionAttemptCreated: false as const,
            };
          }
          return solicitGenericExecutionPrepare({
            oa,
            projectId: project.projectId,
            cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
            mission: {
              objective: args.objective,
              expe
```

## 14. Extraits — ACGC no_compatible_artifact_effect

```typescript
uationClarificationReason;
      readonly enrichedExecutionIntent: ExecutionIntentPayload | null;
    }
  | {
      readonly mode: "ACTIVE_CYCLE_CONTINUATION_BLOCKED";
      readonly reason: ContinuationBlockedReason;
      readonly activeCycle: CycleInstance | null;
    }
  | {
      readonly mode: "NEW_CYCLE_FORMALIZATION";
      readonly reason:
        | "no_materialization_intent"
        | "no_compatible_artifact_effect";
    };

/**
 * P6-HQA-F05-GD4-01 — Artifact-continuation handling recognized a materialization
 * signal, but no closure obligation (CURRENT REQUIRE_ARTIFACT / APPLICABLE
 * unsatisfied) is established. This is NOT an Artifact governed continuation
 * and MUST NOT invent a HumanDecision. It is also NOT NEW_CYCLE_FORM
```

## 15. Schémas / contrats

- Tool params: `objective`, `expectedOutcome`, `scope`, `contextNotes`, `impactSignals?` — **pas** de taxonomie / REQUIRE_ARTIFACT / cycleTypeId obligatoire
- Offer: `cycleInstanceId: string | null`
- EC: `cycleInstanceId` optional (null S8)
- Forced tool output: `executionAttemptCreated: false`

## 16. Traitement S8

- Principe D-ER-17 : admission sans cycle actif **possible**
- Implémenté : null-cycle offer + PREPARE + EC `cycleInstanceId == null` (E10)
- Narrow admission to avoid hijacking historical NEW_CYCLE START (plain actionable sans prepare/signal → createCycle legacy path KEEP temporairement)
- Materiality: project-context mission with null requested cycle on project without active cycle = non-mutating
- **OPEN / dette :** Authorize→Attempt→projections/recovery sans cycle **non prouvés** ; offer process-local

## 17. Missions structurantes

- Readiness structural flags → `STRUCTURAL_HUMAN_DECISION_REQUIRED` (E12)
- Materiality protected paths fail-closed (E12)
- No HD invented ; Confirmation path unchanged

## 18. Legacy routers

| Asset | Classification |
| --- | --- |
| ACGC Artifact GOVERNED (obligation) | **KEEP** |
| ACGC natural signal sans docs_write | **ADAPT** → NEW_CYCLE_FORMALIZATION `no_compatible_artifact_effect` |
| F2 Generic PREPARE | **ADAPT** — nominal générique |
| M3 docs_write sealed | **RETIRE LATER** (hors nominal Generic ; non retiré ce lot) |
| *DocsWrite* technical adapters | **KEEP/HARVEST** |

## 19. Tests S1–S10 (déterministes)

| # | Couverture test | Résultat |
| --- | --- | --- |
| S1 Document | E9 natural documentary sans taxonomy | PASS |
| S2 Code | E9b intentKind other | PASS |
| S3 Tests | via même capacité (code path) — pas de suite Cursor REAL | PARTIAL (admission) |
| S4 Lecture | hors Attempt forcé — non régressé | N/A dedicated |
| S5 Confirmation | backbone KEEP (gD4 authorize path) | PASS (gD4) |
| S6 Protected | E12 materiality fail-closed | PASS |
| S7 Sans Artifact | E9 + F05 no_require | PASS |
| S8 Sans cycle | E10 null-cycle PREPARE | PASS (PREPARE) ; Authorize OPEN |
| S9 Ambigu | E8 insufficient mission ; E14 OK sans offer | PASS |
| S10 Capacité | envelope KEEP (gD4) | PASS |

## 20. Autorité négatifs

E12 structural · E14 no invented prepare · tool Attempt flag forced false · REQUIRE_ARTIFACT NR — **PASS**

## 21. Fake / Real

| | |
| --- | --- |
| Fake | Vitest + Scripted/Fake provider ; tool invoke direct ; **sans** injection discriminants legacy pour verts |
| REAL | **ZERO** OpenAI LIVE · **ZERO** Cursor REAL |
| DETERMINISTIC PROVEN | OUI (scoped) |
| READY FOR REAL | **NO** |

## 22. Commandes et résultats

```
npm run test -- p6.der16… p6.hqa.f05… p6.gD4…
→ 3 files / 33 tests PASSED

npx tsc --noEmit → clean

Full suite (prior agent): 5911 passed / 1 failed
→ productionRuntimeReference.conformance digest mismatch (Living Reference refresh NOT done — hors GO digest update)
```

## 23. Evidence E8–E18

| ID | Statut | Preuve |
| --- | --- | --- |
| E8 | **PASS** | tool registered + invoke → EC ; Attempt false |
| E9 | **PASS** | natural doc sans taxonomy → Generic |
| E10 | **PASS** (PREPARE) | null-cycle EC ; **OPEN** Authorize/Attempt |
| E11 | **PASS** | no_compatible_artifact_effect ; explicit hostile kind stays BLOCKED |
| E12 | **PASS** | STRUCTURAL_HUMAN_DECISION_REQUIRED |
| E13 | **PASS** | Confirmation via existing materiality/effects (gD4) |
| E14 | **PASS** | authority refusals |
| E15 | **PASS** | unique backend solicit→prepareGeneric |
| E16 | **PASS** | generalist EC WHAT |
| E17 | **PASS** | F05 + gD4 + 2 adapted CORR tests |
| E18 | **PASS** local | D-ER doc + code same WT ; Product uncommitted |

## 24. Dette / exit

| Dette | Exit |
| --- | --- |
| Authorize/Attempt/Recovery sans cycle | Delivery GO follow-up or HD |
| Plain actionable no-cycle → createCycle legacy | D-ER-19 progressive exit |
| Living Reference digests stale | Refresh under GO |
| Offer process-local | Durable subject under GO |
| M3 taxonomy routers still exist | RETIRE LATER |
| Human QA F05 LIVE | Post Critical Review · GO QA |

## 25. Réserves

- S8 Authorize chain not proven
- Narrow no-cycle admission (compat legacy START)
- Explicit continuationKind hostile still BLOCKED (intentional)
- Full Agents Runner turn with Fake tool call not E2E'd beyond direct tool.execute + source wire assert
- Architecture doc: implémentation amendement IN PROGRESS / full target still NON

## 26. Gates futurs

1. ChatGPT Critical Delivery Code Review
2. Human QA LIVE (GO)
3. Morris GO Git Integration (Product + architecture + Roadmap together)
4. Optional S8 Authorize/Attempt completion
5. Living Reference digest refresh

## 27. Diff exact — app Product

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
index c55332f4..6f49f49c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
@@ -321,7 +321,7 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
     ).toBe(false);
   });

-  it("unit — natural signal without docs_write effect → BLOCKED not NEW_CYCLE", async () => {
+  it("unit — natural signal without docs_write effect → NEW_CYCLE_FORMALIZATION no_compatible_artifact_effect (D-ER-17: not a dead-end; Generic PREPARE eligible)", async () => {
     const { projectId, cycleInstanceId } =
       await seedActiveCycleWithRequireArtifact("blk");
     const overview = await runtime.getProject(projectId);
@@ -361,10 +361,11 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
       analysis,
       oa: runtime.oa!,
     });
-    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
-    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
-      expect(resolved.reason).toBe("incompatible_execution_intent");
+    expect(resolved.mode).toBe("NEW_CYCLE_FORMALIZATION");
+    if (resolved.mode === "NEW_CYCLE_FORMALIZATION") {
+      expect(resolved.reason).toBe("no_compatible_artifact_effect");
     }
+    // Resolution alone never creates a cycle.
     expect(await countCycles(projectId)).toBe(1);
   });

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
index 2434330d..05a0ed12 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
@@ -1162,11 +1162,11 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
     expect(result.ok).toBe(true);
     if (!result.ok) return;

-    // Historical new-cycle / MW5 path is allowed — must NOT bind ACTIVE continuation.
+    // D-ER-17 — natural docs signal without docs_write discriminants is no longer
+    // a dead-end: Generic PREPARE may keep the SAME active cycle as context.
+    // It must NEVER be Artifact governed materialization continuation.
     const qid = result.f2?.qualification?.cycleInstanceId ?? null;
-    if (qid) {
-      expect(qid).not.toBe(activeCycleId);
-    }
+    expect(await countCycles()).toBe(before);
     const proposal = result.f2?.proposal;
     if (
       proposal?.status === "DECISION_REQUIRED" &&
@@ -1175,9 +1175,10 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
       // If a proposal exists on the LPS active id, it must not be pilot materialization wording.
       expect(proposal.objective ?? "").not.toMatch(/matérialisation du livrable requis/i);
     }
-    // Qualification must not claim active-cycle governed materialization continuation.
-    expect(qid === activeCycleId).toBe(false);
-    void before;
+    // No Artifact materialization Proposal on the active cycle.
+    expect(proposal?.status === "DECISION_REQUIRED" && qid === activeCycleId).toBe(
+      false,
+    );
   });

   it("CR04-B — continuationKind without docs_write → BLOCKED incompatible_execution_intent", async () => {
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index ef27e815..cd37a663 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -534,7 +534,9 @@ export type ActiveCycleContinuationResolution =
     }
   | {
       readonly mode: "NEW_CYCLE_FORMALIZATION";
-      readonly reason: "no_materialization_intent";
+      readonly reason:
+        | "no_materialization_intent"
+        | "no_compatible_artifact_effect";
     };

 /**
@@ -580,9 +582,20 @@ export async function resolveActiveCycleGovernedContinuation(input: {
     return { mode: "NEW_CYCLE_FORMALIZATION", reason: "no_materialization_intent" };
   }

-  // Kind/signal present but effect incompatible → BLOCK (never createCycle).
+  // D-ER-16…19 — NATURAL documentary signal WITHOUT a docs_write-compatible
+  // effect is NOT a dead-end: it is not Artifact continuation, so it yields to
+  // NEW_CYCLE_FORMALIZATION where orchestration may route to Generic PREPARE
+  // (no task-taxonomy admission). An EXPLICIT continuationKind with an
+  // incompatible effect (hostile/contradictory Artifact declaration) stays
+  // BLOCKED incompatible_execution_intent — never silent createCycle.
   if (!hasCompatibleDocsWriteMaterializationEffect(input.analysis)) {
-    return blocked("incompatible_execution_intent");
+    if (hasExplicitArtifactContinuationKind(input.analysis)) {
+      return blocked("incompatible_execution_intent");
+    }
+    return {
+      mode: "NEW_CYCLE_FORMALIZATION",
+      reason: "no_compatible_artifact_effect",
+    };
   }

   const activeId = input.project.activeCycleInstanceId ?? null;
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 47e4e51c..715937b2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -72,6 +72,7 @@ import {
   resolveActiveCycleGovernedContinuation,
   continuationBlockedMessage,
   isOptionalDocumentaryWithoutClosureArtifactBlock,
+  hasExplicitNewCycleFormalizationSignal,
 } from "./activeCycleGovernedContinuation";
 import {
   enrichQualificationWithCkcSemantics,
@@ -747,6 +748,51 @@ function qualificationFromActiveCycle(input: {
   };
 }

+/**
+ * D-ER-17 / S8 — qualification for Generic PREPARE admitted on PROJECT CONTEXT
+ * (no active cycle). NOT a CycleInstance: no cycleInstanceId / cycleStatus,
+ * catalog stamp "project-context". analysis.candidateCycleTypeId is DESCRIPTIVE
+ * only (disclosure) — never used to create or bind a cycle.
+ */
+function qualificationFromProjectContext(input: {
+  signals: IntentAnalysisDto["signals"];
+  analysis: IntentAnalysisDto;
+}): QualificationDto {
+  const descriptive = input.analysis.candidateCycleTypeId?.trim() || null;
+  return {
+    cycleTypeId: "project-context",
+    cycleLabel: "Contexte projet (sans cycle actif)",
+    recommendedProfile: "project-context",
+    rationale:
+      input.analysis.objective ??
+      "Préparation générique sur contexte projet — aucun cycle artificiel",
+    criticalSignalsPresent: false,
+    requiresJustificationForCritical: false,
+    capitalizationViaCycleTypeId: false,
+    isMorrisDecision: false,
+    catalogVersion: "project-context",
+    catalogHash: "project-context",
+    detailedStatus: "GENERIC_PREPARE_PROJECT_CONTEXT",
+    disclosures: [
+      "GENERIC_PREPARE_PROJECT_CONTEXT",
+      "NO_ACTIVE_CYCLE",
+      "NO_NEW_CYCLE_INSTANCE",
+      "RECOMMENDATION_ONLY",
+      ...(descriptive ? [`DESCRIPTIVE_CANDIDATE_CYCLE_TYPE:${descriptive}`] : []),
+    ],
+    signals: input.signals ?? {
+      structuralChange: false,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: true,
+    },
+    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
+    executionAuthority: false,
+  };
+}
+
 /**
  * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — presentation mapping for a durable
  * HumanDecision recorded from a conversational disposition. The kinds reuse
@@ -1790,15 +1836,15 @@ export async function orchestrateAssistantSend(input: {
   // must NOT fall through to F1 advisory before the prepare gate.
   const activeIdForChatFirstPrepare =
     project.activeCycleInstanceId?.trim() || null;
-  const chatFirstPrepareGoEarly = activeIdForChatFirstPrepare
-    ? resolveChatFirstGenericPrepareGo({
-        projectId: project.projectId,
-        cycleInstanceId: activeIdForChatFirstPrepare,
-        text: content,
-        pilotDecisionCandidate: analysis.pilotDecisionCandidate,
-        sessionDbPath: input.sessionDbPath,
-      })
-    : { kind: "no_go" as const, reason: "no_active_cycle" };
+  // D-ER-17 / S8 — active cycle is optional context; null cycle matches only a
+  // null-cycle (project-context) offer.
+  const chatFirstPrepareGoEarly = resolveChatFirstGenericPrepareGo({
+    projectId: project.projectId,
+    cycleInstanceId: activeIdForChatFirstPrepare,
+    text: content,
+    pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+    sessionDbPath: input.sessionDbPath,
+  });
   const skipF1ForChatFirstPrepare =
     chatFirstPrepareGoEarly.kind === "prepare" ||
     chatFirstPrepareGoEarly.kind === "explicit_lexical_prepare";
@@ -1986,15 +2032,13 @@ export async function orchestrateAssistantSend(input: {
   // (Q16/Q17/Q18); otherwise clarify gaps or recommend prepare. Never canned.
   {
     const activeIdForPrepare = project.activeCycleInstanceId?.trim() || null;
-    const prepareGoPreview = activeIdForPrepare
-      ? resolveChatFirstGenericPrepareGo({
-          projectId: project.projectId,
-          cycleInstanceId: activeIdForPrepare,
-          text: content,
-          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
-          sessionDbPath: input.sessionDbPath,
-        })
-      : { kind: "no_go" as const, reason: "no_active_cycle" };
+    const prepareGoPreview = resolveChatFirstGenericPrepareGo({
+      projectId: project.projectId,
+      cycleInstanceId: activeIdForPrepare,
+      text: content,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+      sessionDbPath: input.sessionDbPath,
+    });
     const chatFirstPrepareAccept =
       prepareGoPreview.kind === "prepare" ||
       prepareGoPreview.kind === "explicit_lexical_prepare";
@@ -2011,16 +2055,41 @@ export async function orchestrateAssistantSend(input: {
       continuation.mode === "NEW_CYCLE_FORMALIZATION" ||
       isOptionalDocumentaryWithoutClosureArtifactBlock(continuation);

+    // D-ER-17 / S8 — NO active cycle is not a blocker for Generic PREPARE.
+    // Admitted on PROJECT CONTEXT (cycleInstanceId = null) when Project is bound
+    // and the turn is (a) a Pilote prepare GO / explicit prepare intent, or
+    // (b) a natural documentary signal that ACGC no longer dead-ends
+    // (no_compatible_artifact_effect). Explicit NEW_CYCLE formalization
+    // (« prépare un cycle … ») stays on the historical createCycle path.
+    // Other actionable no-cycle missions keep the legacy NEW_CYCLE START path
+    // until the D-ER-19 legacy-admission exit (OPEN — see delivery report).
+    // No CycleInstance is ever invented here.
+    const projectContextAdmission =
+      !activeIdForPrepare &&
+      Boolean(project.projectId?.trim()) &&
+      !hasExplicitNewCycleFormalizationSignal(analysis) &&
+      (chatFirstPrepareAccept ||
+        (continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+          continuation.reason === "no_compatible_artifact_effect"));
+
     if (
       eligibleForGenericPrepareRouting &&
-      Boolean(activeIdForPrepare) &&
+      (Boolean(activeIdForPrepare) || projectContextAdmission) &&
       actionableForGenericPrepare
     ) {
-    const activeId = activeIdForPrepare!;
-    const cycleLoad = await oa.cycleServices.getCycle.execute({
-      cycleInstanceId: activeId,
-    });
-    if (cycleLoad.ok && cycleLoad.cycle.status === "active") {
+    const activeId: string | null = activeIdForPrepare;
+    const cycleLoad = activeId
+      ? await oa.cycleServices.getCycle.execute({ cycleInstanceId: activeId })
+      : null;
+    const admittedCycle =
+      cycleLoad && cycleLoad.ok && cycleLoad.cycle.status === "active"
+        ? cycleLoad.cycle
+        : null;
+    if (!activeId || admittedCycle) {
+      // Honest wording: cycle kept vs project context only (no artificial cycle).
+      const contextKept = activeId
+        ? "Le cycle actif est conservé."
+        : "Contexte projet conservé — aucun cycle artificiel créé.";
       const prepareGo = prepareGoPreview;
       const mayPrepare =
         prepareGo.kind === "prepare" ||
@@ -2036,11 +2105,16 @@ export async function orchestrateAssistantSend(input: {
         prepareGo.kind === "prepare" && offerForReadiness
           ? analysisFromPendingGenericPrepareOffer(offerForReadiness)
           : analysis;
-      const qualification = qualificationFromActiveCycle({
-        cycle: cycleLoad.cycle,
-        signals: formalizationSignals ?? readinessAnalysis.signals!,
-        analysis: readinessAnalysis,
-      });
+      const qualification = admittedCycle
+        ? qualificationFromActiveCycle({
+            cycle: admittedCycle,
+            signals: formalizationSignals ?? readinessAnalysis.signals!,
+            analysis: readinessAnalysis,
+          })
+        : qualificationFromProjectContext({
+            signals: formalizationSignals ?? readinessAnalysis.signals,
+            analysis: readinessAnalysis,
+          });
       const readiness = assessGenericMissionPrepareReadiness(readinessAnalysis);

       if (readiness.structuralBlocked || !readiness.ready) {
@@ -2051,6 +2125,7 @@ export async function orchestrateAssistantSend(input: {
             presentation,
             missingFields: readiness.missingFields,
             structuralBlocked: readiness.structuralBlocked,
+            hasActiveCycle: Boolean(activeId),
           }),
           mode: modeResolution.mode as "fixture" | "live",
           presentation,
@@ -2077,7 +2152,7 @@ export async function orchestrateAssistantSend(input: {
             sessionDbPath: input.sessionDbPath,
             text: [
               presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-              "Le cycle actif est conservé.",
+              contextKept,
               "Aucune recommandation de préparation courante n'est ouverte — je ne prépare pas de contrat sur ce seul accord.",
               "Rien n'a encore été exécuté.",
             ].join(" "),
@@ -2094,7 +2169,7 @@ export async function orchestrateAssistantSend(input: {
         }
         rememberGenericPrepareRecommendation({
           projectId: project.projectId,
-          cycleInstanceId: activeId,
+          cycleInstanceId: activeId, // null on S8 project-context
           analysis: readinessAnalysis,
           offeredAtIso: oa.clock.nowIso(),
           sessionDbPath: input.sessionDbPath,
@@ -2107,6 +2182,7 @@ export async function orchestrateAssistantSend(input: {
             missingFields: [],
             structuralBlocked: false,
             recommendPrepare: true,
+            hasActiveCycle: Boolean(activeId),
           }),
           mode: modeResolution.mode as "fixture" | "live",
           presentation,
@@ -2135,7 +2211,7 @@ export async function orchestrateAssistantSend(input: {
             sessionDbPath: input.sessionDbPath,
             text: [
               presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-              "Le cycle actif est conservé.",
+              contextKept,
               "Plusieurs sujets de décision sont encore ouverts — précise lequel tu confirmes avant que je prépare un contrat.",
               "Rien n'a encore été exécuté.",
             ].join(" "),
@@ -2182,7 +2258,7 @@ export async function orchestrateAssistantSend(input: {
           sessionDbPath: input.sessionDbPath,
           text: [
             presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-            "Le cycle actif est conservé.",
+            contextKept,
             prep.message,
             "Rien n'a encore été exécuté.",
           ].join(" "),
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index cc038f22..a36e9bb0 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -521,6 +521,47 @@ export async function orchestrateProjectAssistantTurn(input: {
             query,
           });
         },
+        // D-ER-16…19 (Option 2) — Nora SOLICITS Generic PREPARE through the
+        // unique Product backend. Project bound server-side; active cycle is
+        // optional context (null = S8 project-context, never invented).
+        // PREPARE ≠ AUTHORIZE ≠ EXECUTE — no ExecutionAttempt is ever created.
+        solicitPrepare: async (args) => {
+          const [
+            { getRuntimeApplicationService },
+            { solicitGenericExecutionPrepare },
+          ] = await Promise.all([
+            import("@/lib/vertical-slice-runtime"),
+            import("./w2/prepareGenericExecutionContractDraft"),
+          ]);
+          const oa = getRuntimeApplicationService().oa;
+          if (!oa) {
+            return {
+              ok: false as const,
+              code: "OA_UNAVAILABLE",
+              message: "OA runtime indisponible pour la préparation.",
+              executionAttemptCreated: false as const,
+            };
+          }
+          return solicitGenericExecutionPrepare({
+            oa,
+            projectId: project.projectId,
+            cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
+            mission: {
+              objective: args.objective,
+              expectedOutcome: args.expectedOutcome,
+              scope: args.scope,
+              contextNotes: args.contextNotes,
+              impactSignals: args.impactSignals,
+            },
+            sessionDbPath: input.sessionDbPath,
+            forceLocalAuthority:
+              process.env.VITEST === "true" ||
+              process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
+            // Explicit DET pin only (never inferred from VITEST alone).
+            pinnedBaseHeadSha:
+              process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA?.trim() || null,
+          });
+        },
       },
       signal: input.signal,
     });
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
index ea199c2f..3a31dbf7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
@@ -50,7 +50,8 @@ export type PendingGenericPrepareOffer = {
   readonly projectId: string;
   /** Conversation/session discriminator — never cross-bind without match. */
   readonly sessionKey: string;
-  readonly cycleInstanceId: string;
+  /** null = S8 project-context offer (no active cycle; never an invented CycleInstance). */
+  readonly cycleInstanceId: string | null;
   readonly missionKey: string;
   readonly objective: string;
   readonly expectedOutcome: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 37daec50..674af219 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -153,7 +153,8 @@ export function isChatFirstPrepareAcceptGo(input: {
  */
 export function resolveChatFirstGenericPrepareGo(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
+  readonly cycleInstanceId: string | null;
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
   readonly sessionKey?: string | null;
@@ -184,7 +185,7 @@ export function resolveChatFirstGenericPrepareGo(input: {
   if (offer.sessionKey !== sessionKey) {
     return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
   }
-  if (offer.cycleInstanceId !== input.cycleInstanceId) {
+  if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
     return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
   }
   return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
@@ -368,7 +369,7 @@ export function extractMissionEffectsFromAnalysis(

 function offerFingerprintFor(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
@@ -381,7 +382,7 @@ function offerFingerprintFor(input: {
     .update(
       [
         input.projectId,
-        input.cycleInstanceId,
+        input.cycleInstanceId ?? "",
         input.objective,
         input.expectedOutcome,
         input.scope,
@@ -405,7 +406,7 @@ function offerFingerprintFor(input: {
 /** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
 export function rememberGenericPrepareRecommendation(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly analysis: IntentAnalysisDto;
   readonly offeredAtIso: string;
   readonly sessionKey?: string | null;
@@ -884,13 +885,19 @@ export function genericMissionClarificationText(input: {
   readonly missingFields: readonly string[];
   readonly structuralBlocked: boolean;
   readonly recommendPrepare?: boolean;
+  /** false = S8 project-context (no active cycle, none invented). Default true. */
+  readonly hasActiveCycle?: boolean;
 }): string {
   const head =
     input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  const contextKept =
+    input.hasActiveCycle === false
+      ? "Contexte projet conservé — aucun cycle artificiel créé."
+      : "Le cycle actif est conservé.";
   if (input.structuralBlocked) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
       "Rien n'a encore été exécuté.",
     ].join(" ");
@@ -898,7 +905,7 @@ export function genericMissionClarificationText(input: {
   if (input.recommendPrepare) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Je recommande de confier cette mission à Cursor.",
       "Je peux préparer le contrat d'exécution générique inspectable.",
       "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
@@ -908,7 +915,7 @@ export function genericMissionClarificationText(input: {
   const gaps = input.missingFields.join(", ");
   return [
     head,
-    "Le cycle actif est conservé.",
+    contextKept,
     `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
     "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
   ].join(" ");
@@ -930,3 +937,186 @@ export function genericMissionPreparedText(input: {
     "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
   ].join(" ");
 }
+
+// ---------------------------------------------------------------------------
+// D-ER-16…19 — Nora tool solicitation (Option 2). Thin Product service over
+// the SAME backend: assess readiness → prepareGenericExecutionContractDraft.
+// No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
+// ---------------------------------------------------------------------------
+
+/** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
+export type SolicitGenericPrepareMissionFields = {
+  readonly objective?: string | null;
+  readonly expectedOutcome?: string | null;
+  readonly scope?: string | null;
+  readonly contextNotes?: string | null;
+  /** Conservative-only: a true flag can only make Product MORE cautious. */
+  readonly impactSignals?: {
+    readonly structuralChange?: boolean;
+    readonly securityImpact?: boolean;
+    readonly architectureImpact?: boolean;
+    readonly dataImpact?: boolean;
+    readonly irreversible?: boolean;
+  } | null;
+};
+
+/**
+ * Minimal IntentAnalysisDto for a tool-solicited mission. Safe defaults:
+ * intentClass execution_request, NO executionIntent taxonomy, NO
+ * continuationKind / artifactMaterializationOperation, NO cycle type.
+ */
+export function buildIntentAnalysisFromSolicitedMission(
+  fields: SolicitGenericPrepareMissionFields,
+): IntentAnalysisDto {
+  const objective = fields.objective?.trim() || null;
+  const expectedOutcome = fields.expectedOutcome?.trim() || null;
+  const scope = fields.scope?.trim() || null;
+  const sig = fields.impactSignals ?? null;
+  const structural =
+    sig?.structuralChange === true ||
+    sig?.securityImpact === true ||
+    sig?.architectureImpact === true ||
+    sig?.dataImpact === true ||
+    sig?.irreversible === true;
+  const notes = fields.contextNotes?.trim() || null;
+  return {
+    parseOk: true,
+    intentClass: "execution_request",
+    candidateCycleTypeId: null,
+    signals: {
+      structuralChange: sig?.structuralChange === true,
+      securityImpact: sig?.securityImpact === true,
+      architectureImpact: sig?.architectureImpact === true,
+      dataImpact: sig?.dataImpact === true,
+      irreversible: sig?.irreversible === true,
+      lowRiskBounded: !structural,
+    },
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: "sufficient",
+    objective,
+    scope,
+    rephrasedRequest: objective,
+    outOfScope: [],
+    risks: [],
+    reservations: notes ? [notes] : [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome,
+    criticalJustification: null,
+    requestedOperation: null,
+    executionIntent: null,
+  };
+}
+
+export type SolicitGenericExecutionPrepareInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  /** null = S8 project-context (no active cycle; none is ever created here). */
+  readonly cycleInstanceId: string | null;
+  /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
+  readonly analysis?: IntentAnalysisDto;
+  readonly mission?: SolicitGenericPrepareMissionFields;
+  readonly sessionKey?: string | null;
+  readonly sessionDbPath?: string | null;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
+};
+
+export type SolicitGenericExecutionPrepareResult =
+  | {
+      readonly ok: true;
+      readonly code: "GENERIC_PREPARE_DRAFTED";
+      readonly executionContractId: string;
+      readonly contractStatus: string;
+      readonly materiality: string;
+      readonly cycleInstanceId: string | null;
+      readonly projectContextOnly: boolean;
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+      readonly message: string;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly missingFields?: readonly string[];
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+    };
+
+/**
+ * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
+ * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports
+ * executionAttemptCreated:false; JSON-serializable.
+ */
+export async function solicitGenericExecutionPrepare(
+  input: SolicitGenericExecutionPrepareInput,
+): Promise<SolicitGenericExecutionPrepareResult> {
+  const projectId = input.projectId.trim();
+  const fail = (
+    code: string,
+    message: string,
+    missingFields?: readonly string[],
+  ): SolicitGenericExecutionPrepareResult => ({
+    ok: false,
+    code,
+    message,
+    ...(missingFields ? { missingFields } : {}),
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+  });
+  if (!projectId) {
+    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
+  }
+  const analysis =
+    input.analysis ??
+    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+
+  const readiness = assessGenericMissionPrepareReadiness(analysis);
+  if (readiness.structuralBlocked) {
+    return fail(
+      "STRUCTURAL_HUMAN_DECISION_REQUIRED",
+      "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
+    );
+  }
+  if (!readiness.ready) {
+    return fail(
+      "MISSION_INSUFFICIENTLY_QUALIFIED",
+      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
+      readiness.missingFields,
+    );
+  }
+
+  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+  const prep = await prepareGenericExecutionContractDraft({
+    oa: input.oa,
+    projectId,
+    cycleInstanceId,
+    analysis,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    sourceGroundingReader: input.sourceGroundingReader,
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (!prep.ok) {
+    return fail(prep.code, prep.message);
+  }
+  return {
+    ok: true,
+    code: "GENERIC_PREPARE_DRAFTED",
+    executionContractId: prep.contract.executionContractId,
+    contractStatus: prep.contract.status,
+    materiality: prep.materiality.materiality,
+    cycleInstanceId,
+    projectContextOnly: cycleInstanceId === null,
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+    message:
+      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 14f478e7..985ae3dd 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -148,6 +148,16 @@ function deriveCycleOrTrajectoryMutation(input: {
     return { value: true, basis: "live_cycle_unavailable_fail_closed" };
   }
   if (!input.liveActiveCycleId) {
+    // D-ER-17 / S8 — project-context mission (requested cycle null) on a project
+    // with NO live active cycle mutates no cycle/trajectory truth: there is none
+    // to mutate and none is created. A mission that REQUESTS a cycle which is not
+    // live-active stays fail-closed (cannot anchor non-mutation).
+    if (!input.requestedCycleId) {
+      return {
+        value: false,
+        basis: "project_context_no_active_cycle_none_mutated",
+      };
+    }
     return { value: true, basis: "no_active_cycle_to_anchor_non_mutation" };
   }
   if (
@@ -285,7 +295,8 @@ export async function resolveAuthoritativeProductMateriality(input: {
     liveOk &&
     concretePaths.length > 0 &&
     structural.basis === "live_lps_ok_concrete_non_protected_paths_only" &&
-    cycle.basis === "active_cycle_anchored_matches_requested" &&
+    (cycle.basis === "active_cycle_anchored_matches_requested" ||
+      cycle.basis === "project_context_no_active_cycle_none_mutated") &&
     authority.basis === "paths_within_path_root_and_generalist_capability_only";

   const facts: AuthoritativeMaterialityResolution["facts"] = {
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index af928c48..e812254f 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -469,7 +469,9 @@ export {
 } from "./cycleJournalAgentsTools";
 export {
   createProductExecutionAgentsTools,
+  GENERIC_PREPARE_TOOL_DISCLOSURE,
   type ProductExecutionToolContext,
+  type SolicitGenericPrepareToolArgs,
 } from "./productExecutionAgentsTools";
 export {
   createExecutionReviewAgentsTools,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index 2b94aa8e..945607b6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -1,5 +1,9 @@
 /**
- * Product Execution Context Agents tools — READ-ONLY, project-bound.
+ * Product Execution Context Agents tools — project-bound.
+ * `product_execution_context_get` is READ-ONLY.
+ * `request_generic_execution_prepare` (D-ER-16…19, Option 2) SOLICITS Generic
+ * PREPARE through the unique Product backend — it never authorizes, never
+ * executes and never creates an ExecutionAttempt (PREPARE ≠ AUTHORIZE ≠ EXECUTE).
  * Pattern harvested from cycleJournalAgentsTools.ts.
  * Model cannot switch projectId / paths / SQL / credentials.
  */
@@ -21,8 +25,52 @@ export type ProductExecutionToolContext = {
     query: ProductExecutionContextQuery,
   ) => Promise<ResolveProductExecutionContextResult>;
   readonly budget?: NoraTurnBudget;
+  /**
+   * D-ER-16 — Product-injected solicitation of Generic PREPARE for the CURRENT
+   * project. The model cannot choose projectId / cycle / paths / authority.
+   * No task taxonomy (docs_write / REQUIRE_ARTIFACT / cycleTypeId) is accepted.
+   * Result MUST be JSON-serializable and carry executionAttemptCreated:false.
+   */
+  readonly solicitPrepare?: (args: SolicitGenericPrepareToolArgs) => Promise<unknown>;
 };

+/** Mission fields Nora may supply — NON-AUTHORITATIVE, no required taxonomy. */
+export type SolicitGenericPrepareToolArgs = {
+  readonly objective?: string;
+  readonly expectedOutcome?: string;
+  readonly scope?: string;
+  readonly contextNotes?: string;
+  /** Conservative-only impact flags — can only make Product more cautious. */
+  readonly impactSignals?: {
+    readonly structuralChange?: boolean;
+    readonly securityImpact?: boolean;
+    readonly architectureImpact?: boolean;
+    readonly dataImpact?: boolean;
+    readonly irreversible?: boolean;
+  };
+};
+
+export const GENERIC_PREPARE_TOOL_DISCLOSURE =
+  "PREPARE ≠ AUTHORIZE ≠ EXECUTE — sollicitation Product uniquement; aucune autorisation, aucune exécution, aucun ExecutionAttempt créé par cet outil.";
+
+function parseImpactSignals(
+  v: unknown,
+): SolicitGenericPrepareToolArgs["impactSignals"] {
+  if (!v || typeof v !== "object") return undefined;
+  const r = v as Record<string, unknown>;
+  return {
+    structuralChange: r.structuralChange === true,
+    securityImpact: r.securityImpact === true,
+    architectureImpact: r.architectureImpact === true,
+    dataImpact: r.dataImpact === true,
+    irreversible: r.irreversible === true,
+  };
+}
+
+function str(v: unknown): string | undefined {
+  return typeof v === "string" && v.trim() ? v.trim() : undefined;
+}
+
 function requireProject(ctx: ProductExecutionToolContext): string | null {
   const p = ctx.projectId.trim();
   return p || null;
@@ -131,5 +179,106 @@ export function createProductExecutionAgentsTools(
     },
   });

-  return [get];
+  if (!ctx.solicitPrepare) return [get];
+
+  const solicit = ctx.solicitPrepare;
+  const prepareTool = tool({
+    name: "request_generic_execution_prepare",
+    description:
+      "Solicit Generic PREPARE of an inspectable ExecutionContract for the CURRENT Project, " +
+      "for any bounded mission (documentation, code, analysis, other) — no task category, no docs_write, " +
+      "no REQUIRE_ARTIFACT, no cycle type needed, and no active cycle required. " +
+      "Use when the Pilote wants Cursor to do real work and the mission is clear enough " +
+      "(objective + expected outcome or scope). Product qualifies the mission server-side " +
+      "(materiality, capabilities, protected paths); structural missions stay blocked until a HumanDecision. " +
+      "This tool does NOT authorize and does NOT execute: PREPARE ≠ AUTHORIZE ≠ EXECUTE; " +
+      "it never creates an ExecutionAttempt. Report the returned contract/status honestly " +
+      "and never claim anything was executed.",
+    parameters: {
+      type: "object",
+      additionalProperties: false,
+      required: [],
+      properties: {
+        objective: {
+          type: "string",
+          description: "What the Pilote wants done (mission objective).",
+        },
+        expectedOutcome: {
+          type: "string",
+          description: "Observable expected result of the mission.",
+        },
+        scope: {
+          type: "string",
+          description:
+            "Where / what is in scope (paths, area). Candidate only — Product resolves authority.",
+        },
+        contextNotes: {
+          type: "string",
+          description: "Optional short notes (constraints, risks, reservations).",
+        },
+        impactSignals: {
+          type: "object",
+          additionalProperties: false,
+          description:
+            "Optional: set a flag true ONLY if the mission is structural/security/architecture/data/irreversible. Product still decides.",
+          properties: {
+            structuralChange: { type: "boolean" },
+            securityImpact: { type: "boolean" },
+            architectureImpact: { type: "boolean" },
+            dataImpact: { type: "boolean" },
+            irreversible: { type: "boolean" },
+          },
+        },
+      },
+    } as never,
+    strict: false,
+    execute: async (args: unknown) => {
+      if (ctx.budget && !claimToolSlot(ctx.budget)) {
+        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
+      }
+      const projectId = requireProject(ctx);
+      if (!projectId) {
+        return JSON.stringify({
+          ok: false,
+          code: "PRODUCT_PROJECT_REQUIRED",
+          executionAttemptCreated: false,
+          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
+        });
+      }
+      const o =
+        args && typeof args === "object"
+          ? (args as Record<string, unknown>)
+          : {};
+      try {
+        const result = await solicit({
+          objective: str(o.objective),
+          expectedOutcome: str(o.expectedOutcome),
+          scope: str(o.scope),
+          contextNotes: str(o.contextNotes),
+          impactSignals: parseImpactSignals(o.impactSignals),
+        });
+        const base =
+          result && typeof result === "object"
+            ? (result as Record<string, unknown>)
+            : { ok: false, code: "PREPARE_SOLICITATION_EMPTY" };
+        return JSON.stringify({
+          ...base,
+          projectId,
+          // Forced — the tool can never report an Attempt.
+          executionAttemptCreated: false,
+          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
+        });
+      } catch {
+        return JSON.stringify({
+          ok: false,
+          code: "PREPARE_SOLICITATION_FAILED",
+          projectId,
+          executionAttemptCreated: false,
+          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
+        });
+      }
+    },
+  });
+
+  return [get, prepareTool];
 }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index f74cc8f6..352e55e3 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -149,6 +149,7 @@ export function toolDefinitionsFromModelRequest(
       name === "cycle_journal_get_entry" ||
       name === "cycle_journal_get_sources" ||
       name === "product_execution_context_get" ||
+      name === "request_generic_execution_prepare" ||
       name === "execution_review_get_manifest" ||
       name === "execution_review_read_item"
     ) {

```

## 28. Diff exact — architecture reference

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
index 63c14c80..57b5d904 100644
--- a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
+++ b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
@@ -7,8 +7,8 @@
 | **Rôle documentaire** | **CURRENT ARCHITECTURE REFERENCE** (cible adoptée + cartographie factuelle du code) |
 | **Chaîne couverte** | `GENERIC EXECUTION → EXECUTION REVIEW → EVIDENCE → NORA → RESULT → PILOT` |
 | **Statut** | **ADOPTED TARGET ARCHITECTURE BY MORRIS** — **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| **Décisions datées** | **2026-09-29** |
-| **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
+| **Décisions datées** | **2026-09-29** (D-ER-01…15) · **Amendement 2026-10-16** (D-ER-16…19 — Nora Tool Invocation) |
+| **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` (D-ER-01…15) · amendement ancré sur `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (2026-10-16) |
 | **Qualification épistémique** | Assertions étiquetées : `CURRENT IMPLEMENTED FACT` · `REAL OBSERVATION` · `AUDIT INFERENCE` · `TARGET ARCHITECTURE — ADOPTED BY MORRIS` · `TRANSITIONAL DEBT` · `OPEN DESIGN DETAIL` · `FUTURE PROOF` |
 | **runtime v3** | **NON ADOPTED** |
 | **READY FOR REAL** | **NO** |
@@ -55,9 +55,10 @@ Ce document fixe la **référence d’architecture Product** pour le circuit gé

 | Élément | Qualification |
 | --- | --- |
-| Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) |
+| Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) — **inchangée** |
+| Amendement Nora Tool Invocation D-ER-16…19 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16) — **complète** D-ER-01…15 ; **≠** réécriture historique |
 | Intégration Git de ce document | **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| Implémentation complète de la cible | **NON** — voir matrice CURRENT/TARGET |
+| Implémentation de l’amendement | **EN COURS (Delivery local, non fusionné)** — D-ER-16…19 partiellement implémentés sous Delivery GO ; **NON** pour la cible complète (E8–E11 non prouvés bout-en-bout ; S8 persistence/recovery OPEN ; sortie legacy D-ER-19 partielle) — CURRENT ≠ TARGET |
 | runtime v3 | **NON ADOPTED** |
 | READY FOR REAL (boucle générique cible) | **NO** |
 | Delivery slicing (lots) | **TBD** — **D-ER-15** |
@@ -162,6 +163,7 @@ La cible adoptée est **un modèle Product générique** + **capabilities/effect
 | NoteLite REAL (scope testé) | Campagne Product REAL | **REAL OBSERVATION** bornée |
 | Capitalisations convergence (NELC #527, docs_write, ContractResult, continuity) | REX documentaire | Contexte / harvest — ne pas sur-réclamer |
 | Décisions Morris D-ER-01…15 (2026-09-29) | Gouvernance architecture | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** |
+| Amendement Morris D-ER-16…19 (2026-10-16) — Nora Tool Invocation Option 2 | Gouvernance architecture (complément) | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** — CURRENT ≠ TARGET |

 **Hiérarchie :** Git/code > REAL borné > audit inference > cible adoptée > open detail. Une cible adoptée **ne remplace pas** un fait d’implémentation manquant.

@@ -445,10 +447,11 @@ Ces tokens décrivent la **surface de contrat Product générique** — **pas**
 12. **runtime v3 reste NON ADOPTED** ; **READY FOR REAL = NO** jusqu’à preuve gouvernée distincte.
 13. **Delivery slicing = TBD**.
 14. **Retirer taxonomies Product** (`docs_write`, `code_write`, `read`, `read_only`, …) **sans** inventer `generic_read|write|code` Product.
+15. **Nora sollicite la préparation** via un **outil générique** (Option 2) — **un** backend Product ; **PREPARE ≠ AUTHORIZE ≠ EXECUTE** (D-ER-16…18 ; amendement 2026-10-16).

 ---

-## 12. Décisions D-ER-01 … D-ER-15 (complètes)
+## 12. Décisions D-ER-01 … D-ER-15 (complètes — historique 2026-09-29)

 > Toutes : **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29), sauf mention d’ancrage CURRENT.

@@ -558,6 +561,142 @@ Toute proposition de lots = décision Morris ultérieure distincte.

 ---

+## 12bis. Amendement 2026-10-16 — Nora Tool Invocation Architecture
+
+> **Autorité :** Morris — **ADOPTED TARGET** le **2026-10-16**.
+> **Nature :** amendement daté de la présente référence D-ER — **pas** une seconde architecture concurrente.
+> **Relation :** **complète** D-ER-01…15 (notamment D-ER-01, D-ER-11, D-ER-13, D-ER-14) ; **ne réécrit pas** les observations ni les décisions historiques du 2026-09-29.
+> **Source de validation :** audit CRITICAL + complément Review Handoff `121895df2e146c4c43e9452814dd0b6546561b22` ; sélection explicite Morris de l’**Option 2**.
+> **Statut documentaire local :** **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** — amendement **≠** code livré.
+> **CURRENT ≠ TARGET :** l’admission conversationnelle CURRENT reste couplée à des discriminants Artifact / `docs_write` / `cursor.docs_write.apply` et exige souvent un cycle actif — **écart d’implémentation**, pas contradiction de la cible adoptée ici.
+> **Roadmap :** source d’état vivante **non modifiée** dans le cycle de capture ; **actualisation requise** lors de la future intégration Git gouvernée (état P6 / V3-F05 / sortie legacy admission).
+
+### D-ER-16 — Invocation Nora : outil générique de sollicitation PREPARE (Option 2) · Morris D1
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :** Nora dispose d’une **capacité générique** de **sollicitation de préparation** d’exécution, exposée comme **outil Nora** (primitives OpenAI appropriées), réutilisant le **backend Product existant**.
+
+**Invariants d’architecture :**
+
+- **Un seul** backend d’admission Product.
+- **Une seule** logique de qualification de mission.
+- **Une seule** chaîne d’autorisation (Confirmation / HumanDecision / effective authority).
+- **Aucun** moteur cognitif ou d’exécution **parallèle**.
+- L’outil **ne lance pas** directement un `ExecutionAttempt`.
+
+**Distinctions obligatoires :**
+
+| Couche | Rôle |
+| --- | --- |
+| TOOL COGNITIF (Nora) | Solliciter / proposer la préparation |
+| EXECUTION CONTRACT | WHAT Product inspectable |
+| AUTHORITY | Pilote / Studio (HD, Confirmation, materiality) |
+| EXECUTION ATTEMPT | Exécution gouvernée post-autorisation |
+
+**Réutilise :** Generic PREPARE / `prepareGenericExecutionContractDraft` (ou successeur équivalent) · Generalist Execution Surface · envelopes de capacité · offer / fingerprint existants.
+
+**Interdit :** second prepare path ; outil Nora avec autorité d’exécuter ; nouvelle taxonomie Product « generic_* ».
+
+**Exit (implémentation future) :** tool Nora → même backend → contrat generalist — sans routeur d’admission taxonomique.
+
+### D-ER-17 — Généricité d’admission · Morris D2
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :** L’accès à la capacité d’exécution générique **ne dépend pas** de :
+
+- une catégorie métier de tâche ;
+- `docs_write` ;
+- `cursor.docs_write.apply` ;
+- `REQUIRE_ARTIFACT` ;
+- un Deliverable ;
+- une obligation Artifact ;
+- une étape de cycle ;
+- la présence **obligatoire** d’un cycle actif.
+
+**Conserve :**
+
+- un **contexte Project suffisamment fiable** comme prérequis d’admission ;
+- un cycle existant comme **contexte** possible — **≠** condition universelle d’admission ;
+- la **qualification des effets** (capabilities, périmètre, risques, réversibilité, paths protégés) — **≠** catégorisation métier.
+
+**Interdit :**
+
+- créer un **cycle artificiel** uniquement pour accéder à l’outil ;
+- inventer un `cycleTypeId` pour débloquer l’admission.
+
+**Cas sans cycle actif (audit S8) :** **ADOPTED TARGET** = admission **non** bloquée par absence de cycle actif. Les **conséquences techniques** (binding Attempt, persistence, projections, recovery) restent **OPEN DESIGN DETAIL** à concevoir et valider **pendant la construction** — **≠** report de l’adoption du principe.
+
+**Frontière Artifact (explicite) :**
+
+- Cet amendement **retire** toute dépendance Artifact à l’**ADMISSION** de l’exécution.
+- Il **ne consomme pas** un arbitrage distinct sur les obligations Artifact **conditionnelles** du lifecycle (qualité, Evidence, clôture de cycle).
+- « Une exécution peut produire un Artifact » **≠** « Un Artifact est nécessaire pour accéder à une exécution ».
+
+### D-ER-18 — Autorité : PREPARE ≠ AUTHORIZE ≠ EXECUTE · Morris D3
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :**
+
+- **PREPARE ≠ AUTHORIZE ≠ EXECUTE.**
+- **Même** capacité générique pour missions **non structurantes** et **structurantes**.
+- Une mission structurante exige les **HumanDecisions** applicables.
+- Les **Confirmations** restent liées aux **effets réels** (materiality / ActionPolicy).
+- Le **Pilote** conserve l’autorité runtime.
+- **Studio** résout et applique l’autorité.
+- **Cursor** exécute **dans** le contrat autorisé.
+- **Nora** ne s’octroie **aucune** permission.
+
+**Alignement :** D-ER-11 (Claim / Fact / Analysis / Authority) · P2-D-01…04 (Rec≠HD ; SUCCESS≠COMPLETE ; Conf≠HD ; close≠next) — sans promotion doctrine.
+
+### D-ER-19 — Sortie progressive des admissions spécialisées · Morris D4
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :** Les **taxonomies métier Product** ne doivent plus déterminer le **parcours d’exécution**. Définir une **sortie progressive** des admissions spécialisées (routeurs Artifact / `docs_write` / M3 sealed taxonomy) vers l’admission générique unique.
+
+**Réutiliser (KEEP) :**
+
+- Generic ExecutionContract ;
+- Generalist Execution Surface ;
+- Cursor Gateway ;
+- ExecutionAttempt ;
+- Evidence ;
+- ReviewBundle ;
+- Product Resolution ;
+- Reconciler.
+
+**Adapters techniques** (y compris modules historiquement nommés `*DocsWrite*`) : candidats **KEEP / HARVEST / GENERALIZE** selon responsabilité réelle — **aucune suppression par simple correspondance de nom**.
+
+**Conserve actifs :** contrôles techniques fondés sur effets, capacités, périmètres, risques et réversibilité.
+
+**Alignement :** D-ER-01 · D-ER-13 · D-ER-14.
+
+**Condition de sortie (FUTURE PROOF) :** chemin nominal Nora-tool → Generic PREPARE → Authorize → Attempt Cursor generalist → Evidence/Review → Nora — **sans** discriminant taxonomique d’admission et **sans** `REQUIRE_ARTIFACT` comme gate d’outil.
+
+### 12bis.1 Critères de preuve futurs (amendement) — FUTURE PROOF
+
+| ID | Preuve minimale | Statut aujourd’hui |
+| --- | --- | --- |
+| E8 Nora tool invoke | Tool Agents de sollicitation PREPARE câblé ; **≠** Execute ; même backend Product | **NOT PROVEN** |
+| E9 Admission générique | Mission naturelle (doc/code/autre) → Generic PREPARE **sans** Fake discriminant `cursor.docs_write.apply` / taxonomie | **NOT PROVEN** (F05 Human QA échouée) |
+| E10 Sans cycle actif | Mission autorisée hors cycle actif — binding technique validé (S8 construction) | **NOT PROVEN** — design ouvert |
+| E11 Legacy admission exit | Routeurs taxonomiques hors chemin nominal ; adapters harvestés | **NOT PROVEN** |
+
+**Interdit de déclarer :** READY FOR REAL · correction F05 complète · P6 GLOBAL PASS · runtime v3 ADOPTED.
+
+### 12bis.2 Gates de construction (post-capture)
+
+1. **ChatGPT Critical Documentary Review** de cet amendement.
+2. **Intégration Git gouvernée** (GO distinct) — actualiser aussi la **Roadmap** (état vivant).
+3. **Delivery GO** distinct pour implémentation Option 2 (tool + admission générique).
+4. Preuves déterministes E8–E11 + non-régression autorité / effects protégés.
+5. Human QA / REAL uniquement sous GO ultérieurs — **READY FOR REAL = NO** aujourd’hui.
+
+---
+
 ## 13. Modèle Generic Product Execution

 ### 13.1 Définition
@@ -1267,6 +1406,7 @@ Pratiques **rejetées** (TARGET + discipline CURRENT) :
 6. UX exacte Result Surface (composants) — exigence = always explain.
 7. Mapping des anciens EC `docs_write` en reprise (compat window).
 8. **DELIVERY SLICING** (D-ER-15).
+9. **Conséquences techniques du cas sans cycle actif** (D-ER-17 / S8) — principe d’admission adopté ; binding Attempt / persistence / projections / recovery = construction ultérieure.

 ---

@@ -1283,6 +1423,7 @@ Pratiques **rejetées** (TARGET + discipline CURRENT) :
 | E5 Taxonomy retirement | Prepare/Execute nominal sans action Product `cursor.docs_write.apply` |
 | E6 Retention | HOT→PRUNED RM observable ; Evidence availability **non** auto-flip ; Surface explique |
 | E7 Bounded REAL cible | Campagne REAL distincte sous Morris GO — encore **READY FOR REAL = NO** |
+| E8–E11 (amendement 2026-10-16) | Voir §12bis.1 — Nora tool · admission générique · sans cycle · legacy exit |

 ---

@@ -1292,6 +1433,7 @@ Pratiques **rejetées** (TARGET + discipline CURRENT) :

 Dépendances architecturales (ordre de sens, pas de lots) :

+0. Nora tool invocation + admission générique (**D-ER-16…19**, amendement 2026-10-16) — prérequis d’accès Product unique ; **≠** élévation d’autorité Nora
 1. Discipline Claim/Fact/Analysis/Authority (**D-ER-11**) — déjà partiellement ancrée (inclut Review End Of = CLAIM)
 2. Cursor Review End Of exigé via EC + native binding (**D-ER-05**)
 3. VerifiedChangeSet (**D-ER-06**) branché Observation Studio
@@ -1339,6 +1481,9 @@ Ce document et l’adoption D-ER **≠** :
 - introduction de catégories Product `generic_*`
 - Nora Deep Review tools déjà ON
 - VerifiedChangeSet déjà objet Product premier
+- outil Nora PREPARE déjà câblé / F05 corrigé / READY FOR REAL
+- Option 2 **implémentée** (seule la **cible** est adoptée le 2026-10-16)
+- obligations Artifact de lifecycle **supprimées** (arbitrage distinct non consommé)

 ---

@@ -1349,8 +1494,8 @@ Ce document et l’adoption D-ER **≠** :
 | Anchor | Valeur |
 | --- | --- |
 | Document | `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` |
-| Décisions | D-ER-01 … D-ER-15 @ 2026-09-29 |
-| Base main audit | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
+| Décisions | D-ER-01 … D-ER-15 @ 2026-09-29 · **D-ER-16 … D-ER-19 @ 2026-10-16** (Nora Tool Invocation / Option 2) |
+| Base main audit | `6f47f74dc9b515c4c79624b21772223ba02c76cd` · amendement ancré `896ff59c` |
 | REAL borné | NoteLite — PAUSED ; NOT_PROVEN preserved ; UI recharge gap |
 | Backbone KEEP | EC generalist · worktree · Report CLAIM · Evidence/RB/CE · Resolution · Reconciler |
 | Dette nommée | docs_write persist/ingest · UI poll 8 · post_execution tools OFF · artifact naming |
@@ -1359,8 +1504,9 @@ Ce document et l’adoption D-ER **≠** :

 | Décision | Statut |
 | --- | --- |
-| Intégration Git de ce document | **PENDING** — Morris GO distinct |
-| Première tranche d’implémentation | **TBD** (pas de slicing adopté) |
+| Intégration Git de ce document (incl. amendement 2026-10-16) | **PENDING** — Morris GO distinct + actualisation Roadmap |
+| Revue critique ChatGPT de l’amendement | **NEXT** — cycle capture |
+| Première tranche d’implémentation Option 2 | **TBD** — Delivery GO distinct (D-ER-15) |
 | Campagne REAL générique | **NOT AUTHORIZED** — READY FOR REAL = NO |
 | runtime v3 | **NON ADOPTED** — ne pas rouvrir ici |

@@ -1498,7 +1644,11 @@ flowchart TD
 | D-ER-13 | Migration without big bang |
 | D-ER-14 | No parallel architecture |
 | D-ER-15 | Delivery slicing TBD |
+| D-ER-16 | Nora tool — sollicitation PREPARE générique (Option 2) · 2026-10-16 |
+| D-ER-17 | Admission générique — hors taxonomie / Artifact / cycle obligatoire |
+| D-ER-18 | PREPARE ≠ AUTHORIZE ≠ EXECUTE — autorité Pilote/Studio |
+| D-ER-19 | Sortie progressive admissions spécialisées |

 ---

-*Fin du document — Architecture de référence Generic Execution / Execution Review / Evidence / Nora / Result / Pilot — ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION — base main `6f47f74d` — 2026-09-29.*
\ No newline at end of file
+*Fin du document — Architecture de référence Generic Execution / Execution Review / Evidence / Nora / Result / Pilot — ADOPTED TARGET BY MORRIS (D-ER-01…15 @ 2026-09-29 ; amendement D-ER-16…19 Nora Tool Invocation @ 2026-10-16) — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION — base historique `6f47f74d` · ancrage amendement `896ff59c`.*
\ No newline at end of file

```

## 29. Git Truth final

```
origin/main=896ff59c704bfa76df1da1a51705aaf948c1cf0c
delivery_wt=docs/…nora-tool-invocation-20261016 @ 896ff59c (DIRTY local candidate)
product_commit=NONE
product_push=NONE
runtime_3020=untouched
```

## 30. Instruction ChatGPT

Lire : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer : **SFIA STUDIO — GENERIC EXECUTION NORA TOOL CRITICAL DELIVERY CODE REVIEW.**

Vérifier : pas de catégorisation métier ; backend unique ; tool invocable ; PREPARE≠AUTHORIZE≠EXECUTE ; indépendance Artifact ; S8 ; HumanDecision ; compatibilité historique ; pas d'architecture parallèle ; adéquation D-ER ; tests ; preuves ; **absence de push Product**.
