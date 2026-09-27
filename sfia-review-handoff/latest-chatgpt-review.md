# PRODUCT-CYCLE-E2E-STABILIZATION-01 — FULL Review Pack

## 1. Timestamp
2026-09-27T16:11:42+02:00

## 2. Macro / cycle / profil
- **Macro:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (SAME macro — ChatGPT review closure R1–R6; NOT a new cycle)
- **Cycle:** Cycle 8 — Delivery / implémentation (`cyc:delivery`)
- **Profil:** Critical
- **Typologie:** EVOL corrective / regression stabilization
- **Capacité v3:** V3-F05 (+ F02/F06/F09/F14)
- **Runtime v3:** NON ADOPTED
- **OpenAI Capability Fit (R22):** COMBINE

## 3. Git truth final
- Worktree: `/Users/morris/Projects/sfia-workspace-e2e-stabilization-01`
- Branche: `fix/sfia-studio-product-cycle-e2e-stabilization-01`
- HEAD: `6beb8cc369bd9b82eebee97b70309838373b3dfa` (no project commit)
- origin/main: `6beb8cc369bd9b82eebee97b70309838373b3dfa` — MATCH expected `6beb8cc369bd9b82eebee97b70309838373b3dfa`
- Working tree: DIRTY (macro changes retained; no reset)
- Commit projet: NON
- Push projet / PR / merge: NON

### git status --short
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw5.s01-s04.disposition.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
 M projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
 M projects/sfia-studio/app/lib/nora-eval/mw5Observe.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/README.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
```

### git diff --stat
```
.tmp-sfia-review/chatgpt-review.md                 | 1784 ++++++++++++++++++--
 .../mw5.s01-s04.disposition.d0.test.ts             |   51 +
 ...ifactMaterializationContinuityCorr01.d0.test.ts |   86 +-
 .../f2/activeCycleGovernedContinuation.ts          |   25 +-
 .../features/project-assistant/f2/orchestrateF2.ts |   17 +
 .../f3/confirmAndExecuteResolvedM3.ts              |   46 +-
 .../f3/executeConfirmedBoundedDocsWriteContract.ts |   17 +
 .../app/features/project-assistant/f3/index.ts     |    3 +
 .../f3/resolveM3ExecutionContract.ts               |    7 +-
 .../f3/validateResolvedM3ExecutionBoundary.ts      |   19 +-
 .../criticalChallengeClarification.ts              |   35 +-
 .../sfia-studio/app/lib/nora-eval/mw5Observe.ts    |    1 +
 .../app/lib/platform/ai/fakeProvider.ts            |  141 +-
 .../03-end-to-end-flow-catalog.md                  |   49 +-
 .../08-test-proof-and-conformance-map.md           |   25 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |   37 +-
 .../production-runtime-reference/README.md         |    5 +-
 .../production-runtime-reference.manifest.json     |   29 +-
 18 files changed, 2125 insertions(+), 252 deletions(-)
```

## 4. Sources lues
Gouvernance convergence + product-completion cadrage; doctrine framing 30–37 + CKC 08; Living Reference README/03/04/07/08/09+manifest; `actions.ts` + `useProductConversation.ts`; F2/F3/OA seams; front-door oracle; prior macro overlays G1/G2/G3/G6/G8.

## 5. OpenAI Capability Fit
COMBINE — model for cognition/intent; server-owned Truth C / HD / EC / routing / structural resolution fact.

## 6. Impact analysis (pre-change / this closure)
### Surfaces touched this closure
- Oracle: rewrite nominal lineage to Product UI server actions
- F3: align Confirm/Validate with Product N2 prepare authority; LPS evidence outcome append on bounded docs-write
- Living Ref: merge duplicate F05; fix vol 09 PocketTasks/MW5 hard boundary; proof level in 08/README/manifest digests

### KEEP
OA backbone; #531/#532/#533; Artifact applicability bridge; Product SQLite Truth C; Nora Session Memory B; D-PC-09; F3/W3A fixtures; Proposal pending/reinstruction; execution-attempt Product Spine.

### FORBIDDEN avoided
Second E2E engine; second Proposal store; new persistence; fake Truth C/HD; global uncertainty-resolution flag; global MW5 off; CWP lowering; PocketTasks-specific branch; naming catalog policy; parallel architecture.

## 7. Corrections précédentes conservées (G2/G3/G1/G8/G6 niveau 1)
- G2: Nora leaf candidate + server-composed targetPath; no nominal filename micro-gate
- G3: `structurallyResolvedActiveCycleContinuation` skips gratuitous MW5 structural re-challenge (≠ Truth C ≠ HD)
- G1/G8: Fake provider materialization realism; assessment default null on materialization path
- G6 (prior): front-door → HD → EC → Attempt → Evidence lineage (application seams)

## 8. Fermeture R1–R6

### R1 — Oracle Product server actions
Nominal lineage now:
`projectAssistantSendAction` → `projectAssistantDecideAction` → `projectAssistantPrepareResolvedM3Action` → `projectAssistantConfirmAndExecuteResolvedM3Action` → `projectAssistantRehydrateEvidenceOutcomeAction`
No `recordF2Decision` / `prepareAndResolveM3ProductPath` / `confirmAndExecuteResolvedM3` / `rehydrateEvidenceOutcomeFromLps` in nominal oracle (FS-13 source guard).

### R2 — Pending Proposal restart
After process-local wipe: `w2ReadActiveDecisionSubjectAction` → pending_reinstruction_required (honest; no invented HD) → `projectAssistantSendAction` with `reinstructionOfProposalId` → Decide on superseded subject.

### R3 — Proof level
**DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — Product UI server-action chain traversed at Fake docs-write scope. ZERO REAL.

### R4 — F05 dedupe
Single canonical `## F05 — Active-cycle Artifact materialization` in vol 03 (duplicate removed; CURRENT semantics merged).

### R5 — Vol 09 PocketTasks/MW5
Hard boundary replaced with CURRENT: mitigated at deterministic tested scope; REAL OpenAI/PocketTasks parity not re-proven; ZERO REAL; runtime v3 NON ADOPTED; Product global READY not claimed.

### R6 — Vol 08 / README / manifest
Proof ceiling reinforced; README overlay wording updated; digests refreshed after semantic review (`--write-digests`).

### Product bugs closed en route (same macro, G6-related)
1. `validateResolvedM3ExecutionBoundary` + `confirmAndExecuteResolvedM3` rejected Product N2 prepares that `PrepareResolvedM3Action` seals — now accept MORRIS|N2 matching PREPARE + register matching authority.
2. Bounded docs-write Evidence/RB created without LPS `evidenceIds`/`reviewBundleIds` — now `appendEvidenceOutcomeToLps` so Rehydrate works.

## 9. Product Spine testé / server actions traversées
Pilote natural → Send → Proposal → Decide → HD durable → PrepareResolvedM3 → EC → ConfirmAndExecuteResolvedM3 → Attempt Fake docs-write / Evidence / ReviewBundle → RehydrateEvidenceOutcome → LPS readback.

## 10. FS-01…FS-14 coverage (oracle)
Covered in nominal + NEG its / source guard: same CycleInstance; vague no Proposal; no filename micro-gate; no gratuitous MW5; no PocketTasks/magic-only input; reinstruction supersede; Decide after explicit Pilot action; no Attempt before confirm; WHAT/targetPath sealed; SUCCESS≠READY; restart no invented HD; rehydrate no new HD/auto-finalize; front-door bypass forbidden in oracle source; fixture ≠ docs-write state machine where Product selects bounded docs-write.

## 11. Restart matrix
| Stage | Result |
|---|---|
| Process-local Proposal wipe | HD count unchanged; subject pending_reinstruction_required |
| Product subject-read | Hydrates recoverable DECISION_REQUIRED |
| Reinstruction Send | superseded; new Proposal same CycleInstance / targetPath |
| Post-Evidence Rehydrate | Evidence/RB from LPS; Recommendation ≠ HD |

## 12. WHAT continuity
Asserted on Proposal executionIntent and HD DecisionBasis (statuts A/B/C, attributs P/D, persistance, règle Z hors périmètre).

## 13. Fichiers créés / modifiés
### Created
- `projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts` (FULL below)

### Modified (this macro tree)
See git status / diff stat above. Key F3 fixes + Living Ref + prior G1–G8 overlays.

## 14. Validations
| Gate | Result |
|---|---|
| Targeted front-door + MW5 + continuity + qa-pre-m6 + Living Ref conformance | PASS |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | **4913 pass / 137 skip / 0 fail** |
| Living Ref `check-production-runtime-reference.mjs` | PASS (digests written then verified) |
| Modeled governance (3 files) | 73 pass |
| `git diff --check` | PASS |
| Secret pattern scan (CI) | PASS |

## 15. Fake / Real
- Applicable: yes
- Fake: conversation Fake provider; Fake docs-write launch port
- REAL corresponding: OpenAI; Cursor REAL — **ZERO REAL this macro**
- Claims forbidden avoided: READY FOR REAL / REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN / PRODUCT GLOBAL READY / runtime v3 ADOPTED

## 16. Proof ceiling exact
**DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**

## 17. Réserves
- REAL OpenAI leaf candidacy / PocketTasks parity not re-proven
- Cursor REAL not exercised
- Proposal store remains process-local (durable pending + reinstruction)
- Runtime v3 NON ADOPTED
- Product global READY not claimed
- Browser/Playwright visual proof not claimed

## 18. Décisions Morris requises
Aucune pour cette fermeture (N2 confirm + LPS append were direct product-path bugs under existing mechanisms).

## 19. Capacité suivante
**REQUALIFY AFTER EVIDENCE — NO AUTO-SELECTION.**

## 20. Verdict
**READY FOR REVIEW — PRODUCT CYCLE E2E STABILIZATION COMPLETE**
Proof: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**

---

## 21. Fichier créé COMPLET — productCycleE2eStabilization.frontDoor.d0.test.ts

```typescript
/**
 * PRODUCT-CYCLE-E2E-STABILIZATION-01 — deterministic PRODUCT E2E oracle.
 *
 * Nominal lineage traverses Product server actions used by useProductConversation:
 *   projectAssistantSendAction
 *   → projectAssistantDecideAction
 *   → projectAssistantPrepareResolvedM3Action
 *   → projectAssistantConfirmAndExecuteResolvedM3Action
 *   → projectAssistantRehydrateEvidenceOutcomeAction
 *
 * Pending restart uses product subject-read (w2ReadActiveDecisionSubjectAction)
 * then optional conversation reinstruction before Decide — no artificial store reinject.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantDecideAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  getProposal,
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import { w2ReadActiveDecisionSubjectAction } from "@/features/project-assistant/w2/actions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  W2_FIXED_NOW,
  W2_REGISTRY_ROOT,
  W2_SCHEMAS_ROOT,
} from "./w2Harness";

/** Synthetic WHAT — analogous to PocketTasks; not PocketTasks-named. */
const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "attribut optionnel D",
  "filtres par statut et P",
  "règle dérivée dépendant de D et du statut",
  "persistance locale requise",
  "règle Z explicitement hors périmètre",
].join("; ");

const PATHLESS_NATURAL_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.
La spécification consolidée inclut : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

const PATHLESS_WITH_HA = `${PATHLESS_NATURAL_REQUEST}
__MW5_HIGH_ASSURANCE__`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
const EXPECTED_ARTIFACT_FILE = "specification-fonctionnelle.md";
const EXPECTED_TARGET = `${EXPECTED_CYCLE_ROOT}/${EXPECTED_ARTIFACT_FILE}`;
const IDENTITY = "acme/widget";
const BRANCH = "main";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedGitRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(repoRoot, { recursive: true });
  fs.writeFileSync(path.join(repoRoot, ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

function assertWhatContinuity(blob: string): void {
  expect(blob).toMatch(/statuts A \/ B \/ C/i);
  expect(blob).toMatch(/attribut optionnel P/i);
  expect(blob).toMatch(/attribut optionnel D/i);
  expect(blob).toMatch(/persistance locale/i);
  expect(blob).toMatch(/règle Z explicitement hors périmètre/i);
  expect(blob).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
  expect(blob).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
}

describe("PRODUCT-CYCLE-E2E-STABILIZATION-01 front-door oracle", () => {
  let managedBase: string;
  let repoRoot: string;
  let fakeLaunch: FakeDocsWriteLaunchPort;
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;
  const tempRoots: string[] = [];

  beforeEach(() => {
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "pces-e2e-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    const initialized = initManagedGitRepo(managedBase, IDENTITY);
    repoRoot = initialized.repoRoot;

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: initialized.baseHeadSha,
    });
    fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: `# Spécification fonctionnelle\n\n${STABILIZED_WHAT}\n`,
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("pces"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempRoots.length) {
      const d = tempRoots.pop();
      if (d) {
        try {
          fs.rmSync(d, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
    }
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", previousIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", previousRemote);
    restoreEnvVar(
      "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH",
      previousBranch,
    );
    restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
    assertRealOff();
  });

  async function seedFunctionalDesignWithRequireArtifact(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: `PRODUCT-CYCLE-E2E-STABILIZATION-01 ${suffix}`,
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `PCES${suffix.toUpperCase()}`,
      idempotencyKey: `idem:pces-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    expect(created.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect(created.project.repositoryBinding?.pathRoot).toBe(
      EXPECTED_PROJECT_ROOT,
    );
    expect(created.project.repositoryBinding?.identity).toBe(IDENTITY);

    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:pces-${suffix}-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
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
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-27T12:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("LPS1 unavailable");

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
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T12:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("DETERMINISTIC PRODUCT E2E — Send→Decide→Prepare→ConfirmExecute→Rehydrate", async () => {
    // FS-05 Fake magic-only / PocketTasks-named request forbidden in oracle input.
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/__F2_/);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/docs\//);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/PocketTasks/i);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/note-de-cadrage/);

    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("main");
    const oa = runtime.oa!;
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);

    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesBefore.filter((c) => c.status === "active")).toHaveLength(1);
    const hdCountSeed = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;

    // A — Conversation / materialization (product front door)
    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);

    // FS-01 — same CycleInstance; no silent NEW_CYCLE.
    const cyclesAfterSend = await oa.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterSend.map((c) => c.cycleInstanceId)).toEqual(
      cyclesBefore.map((c) => c.cycleInstanceId),
    );
    expect(
      cyclesAfterSend
        .filter((c) => c.status === "active")
        .map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(send.f2?.proposal?.contextSnapshot?.activeCycleInstanceId).toBe(
      cycleInstanceId,
    );
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(send.f2?.decision).toBeNull();

    const proposal = send.f2!.proposal!;
    // FS-09 — targetPath server-composed (not client-authoritative).
    expect(proposal.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(proposal.executionIntent?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    expect(proposal.executionIntent?.targetRepositoryRef).toBe(IDENTITY);

    const sealed = sealProposalExecutionBasis(proposal);
    expect(sealed.targetPath).toBe(EXPECTED_TARGET);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);
    expect(sealed.artifactWriteMode).toBe("CREATE");

    // FS-03 filename micro-gate / FS-04 MW5 gratuitous challenge forbidden.
    expect(send.text).not.toMatch(/Indiquez un filename Markdown/i);
    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);

    const what =
      [
        proposal.executionIntent?.artifactBrief,
        ...(proposal.executionIntent?.contentRequirements ?? []),
      ]
        .filter(Boolean)
        .join("\n") || "";
    assertWhatContinuity(what);

    const proposalId = proposal.proposalId;

    // B — Pending / restart (process-local wipe; no invented HD)
    expect(getProposal(proposalId)).not.toBeNull();
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalId)).toBeNull();
    const hdAfterWipe = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    expect(hdAfterWipe).toBe(hdCountSeed);

    // Product subject-read — hydrates recoverable snapshots; does not invent HD.
    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("pending_reinstruction_required");
    if (subject.kind !== "pending_reinstruction_required") {
      throw new Error(`unexpected subject kind: ${subject.kind}`);
    }
    expect(subject.recoverableProposalIds).toContain(proposalId);
    expect(getProposal(proposalId)?.status).toBe("DECISION_REQUIRED");

    // Conversation product path — explicit reinstruction of pending subject.
    const reinstruct = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
      reinstructionOfProposalId: proposalId,
    });
    expect(reinstruct.ok).toBe(true);
    if (!reinstruct.ok) {
      throw new Error(`reinstruction failed: ${JSON.stringify(reinstruct)}`);
    }
    expect(reinstruct.f2?.turnKind).toBe("f2_proposal");
    expect(reinstruct.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(reinstruct.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(reinstruct.f2?.proposal?.executionIntent?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(reinstruct.text).not.toMatch(/\[MW5 CHALLENGE\]/);
    expect(reinstruct.text).not.toMatch(/Indiquez un filename Markdown/i);

    const decideProposalId = reinstruct.f2!.proposal!.proposalId;
    expect(decideProposalId).toBeTruthy();
    // FS-06 — reinstruction supersedes prior pending; decide on current subject.
    expect(reinstruct.reinstructionTransition).toBe("superseded");
    expect(decideProposalId).not.toBe(proposalId);

    // C — HumanDecision via product Decide action (FS-11 restart invents decision forbidden)
    const decided = await projectAssistantDecideAction({
      projectId,
      proposalId: decideProposalId,
      decisionKind: "GO",
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(`decide: ${decided.message}`);
    expect(decided.f2.turnKind).toBe("f2_decision");
    expect(decided.f2.decision?.kind).toBe("GO");
    expect(decided.f2.decision?.readyForNextGatedStep).toBe(true);
    const decisionId = decided.f2.decision!.decisionId;

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactWriteMode).toBe(
      "CREATE",
    );
    const basisWhat = [
      hd.decision.decisionBasis?.executionBasis?.artifactBrief,
      ...(hd.decision.decisionBasis?.executionBasis?.contentRequirements ?? []),
    ]
      .filter(Boolean)
      .join("\n");
    assertWhatContinuity(basisWhat);

    // D — ExecutionContract via product PrepareResolvedM3 (FS-07 EC before HD forbidden already passed)
    const prepared = await projectAssistantPrepareResolvedM3Action({
      projectId,
      decisionId,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.f3.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    expect(prepared.f3.executionPerformed).toBe(false);
    expect(prepared.f3.attemptCreated).toBe(false);
    expect(prepared.f3.confirmationRequired).toBe(true);
    const executionContractId = prepared.f3.successor.executionContractId;
    const expectedContractVersion = prepared.f3.successor.version;
    expect(executionContractId).toMatch(/^xct:/);
    expect(expectedContractVersion).toBeGreaterThanOrEqual(1);

    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(durable.ok).toBe(true);
    if (!durable.ok) throw new Error("durable EC");
    expect(durable.contract.inputs?.targetPath).toBe(EXPECTED_TARGET);
    expect(durable.contract.inputs?.pathAllowlist).toEqual([
      EXPECTED_CYCLE_ROOT,
    ]);
    expect(durable.contract.inputs?.artifactWriteMode).toBe("CREATE");

    const attemptsAfterPrepare =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(attemptsAfterPrepare.ok).toBe(true);
    if (attemptsAfterPrepare.ok) {
      expect(attemptsAfterPrepare.attempts).toHaveLength(0);
    }

    // E — Attempt / Evidence via product ConfirmAndExecuteResolvedM3
    const launchBefore = fakeLaunch.calls.length;
    const executed = await projectAssistantConfirmAndExecuteResolvedM3Action({
      projectId,
      decisionId,
      executionContractId,
      expectedContractVersion,
    });
    if (!executed.ok) {
      throw new Error(`execute: ${JSON.stringify(executed)}`);
    }
    expect(executed.ok).toBe(true);
    // Bounded docs-write Fake: launch port may ACK (realProcessInvoked) without Cursor OS REAL.
    expect(executed.f3.realExecution).toBe(false);
    expect(executed.f3.attempt.realProcessInvoked).toBe(true);
    expect(executed.f3.attempt.status).toBe("succeeded");
    expect(executed.f3.evidence.evidenceId).toBeTruthy();
    expect(executed.f3.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.f3.recommendation.kind).toBe("recommendation");
    expect(executed.f3.recommendation.decisionCreated).toBe(false);
    expect(executed.f3.recommendation.executionAuthority).toBe(false);
    // FS-10 — SUCCESS ≠ Product READY
    expect(executed.f3.recommendation.status).not.toBe("READY");
    expect(executed.text).not.toMatch(/PRODUCT GLOBAL READY|READY FOR REAL|END-TO-END REAL/);

    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    expect(fs.existsSync(absTarget)).toBe(true);
    expect(fs.readFileSync(absTarget, "utf8")).toMatch(
      /Spécification fonctionnelle/i,
    );
    expect(fakeLaunch.calls.length).toBe(launchBefore + 1);

    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    const terminal = listed.attempts.filter((a) =>
      /succeeded|completed|ok/i.test(a.status),
    );
    expect(terminal.length).toBeGreaterThanOrEqual(1);
    const attemptId = terminal[0]!.attemptId;
    expect(executed.f3.attempt.attemptId).toBe(attemptId);

    const evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    const artifact = evidence.find(
      (e) =>
        e.type === "artifact" &&
        e.location === EXPECTED_TARGET &&
        e.bindings?.projectId === projectId,
    );
    expect(artifact).toBeTruthy();
    expect(artifact!.digest).toMatch(/^sha256:/);
    expect(artifact!.bindings?.executionAttemptId).toBe(attemptId);
    expect(artifact!.bindings?.executionContractId).toBe(executionContractId);

    const bundles =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    const linked = bundles.filter((b) =>
      (b.evidenceRefs ?? []).includes(artifact!.evidenceId),
    );
    expect(linked.length).toBeGreaterThanOrEqual(1);
    expect(linked[0]!.executionContractId).toBe(executionContractId);

    // F — Recovery via product RehydrateEvidenceOutcome (FS-12 auto-finalize forbidden)
    const hdBeforeRehydrate = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    const rehydrated = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });
    if (!rehydrated.ok) {
      throw new Error(`rehydrate: ${JSON.stringify(rehydrated)}`);
    }
    expect(rehydrated.ok).toBe(true);
    expect(rehydrated.evidenceIds.length).toBeGreaterThanOrEqual(1);
    expect(rehydrated.evidenceIds).toContain(artifact!.evidenceId);
    expect(rehydrated.reviewBundleIds.length).toBeGreaterThanOrEqual(1);
    expect(rehydrated.recommendation.kind).toBe("recommendation");
    expect(rehydrated.recommendation.decisionCreated).toBe(false);
    expect(rehydrated.recommendation.executionAuthority).toBe(false);
    expect(rehydrated.text).toMatch(/RECOMMANDATION — PAS UNE DÉCISION HUMAINE/);

    const hdAfterRehydrate = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    expect(hdAfterRehydrate).toBe(hdBeforeRehydrate);

    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal.filter((c) => c.status === "active")).toHaveLength(1);
    expect(
      cyclesFinal
        .filter((c) => c.status === "active")
        .map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);
  });

  it("NEG FS-01/FS-02 — vague talk does not open materialization / no new cycle", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("vague");
    const oa = runtime.oa!;
    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);

    const send = await projectAssistantSendAction({
      projectId,
      content: VAGUE_TALK,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await oa.cycleServices.cycles.listByProject(projectId)).toHaveLength(
      cyclesBefore.length,
    );
    expect(send.f2?.proposal ?? null).toBeNull();
    expect(send.f2?.turnKind === "f2_proposal").toBe(false);
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId).toBe(
        cycleInstanceId,
      );
    }
  });

  it("NEG FS-04 — HA + structurally resolved continuation still Proposal (no gratuitous MW5)", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("ha");

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_WITH_HA,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);
    expect(send.text).not.toMatch(/Indiquez un filename Markdown/i);
  });

  it("NEG FS-13 — oracle principal refuses front-door bypass claim without Send", async () => {
    // Structural guard: this suite's nominal lineage must import Product actions.
    const src = fs.readFileSync(__filename, "utf8");
    expect(src).toMatch(/projectAssistantSendAction/);
    expect(src).toMatch(/projectAssistantDecideAction/);
    expect(src).toMatch(/projectAssistantPrepareResolvedM3Action/);
    expect(src).toMatch(/projectAssistantConfirmAndExecuteResolvedM3Action/);
    expect(src).toMatch(/projectAssistantRehydrateEvidenceOutcomeAction/);
    // Nominal lineage must not call internal seams directly.
    expect(src).not.toMatch(/recordF2Decision\(/);
    expect(src).not.toMatch(/prepareAndResolveM3ProductPath\(/);
    expect(src).not.toMatch(/confirmAndExecuteResolvedM3\(/);
    expect(src).not.toMatch(/rehydrateEvidenceOutcomeFromLps\(/);
  });
});
```

---

## 22. Living Reference — volumes modifiés (complets)

### 03-end-to-end-flow-catalog.md
```markdown
# 03 — End-to-End Flow Catalog

**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger:** F2 qualification / Pilot lifecycle start
- **Objects:** CycleInstance, CKC, LPS active pointer
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `pilotLifecycle.start`
- **Status:** COMPLETE deterministic core

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533)
- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
- **Exit:** Proposal `DECISION_REQUIRED`
- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07)
- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger:** Pilot accept/refuse via `projectAssistantDecideAction`
- **Paths:** `actions.ts` → `recordDecision.ts` → `oa_human_decisions`
- **Status:** COMPLETE durable path

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Product path:** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
- **Status:** COMPLETE tables/services; Product E2E at tested scope

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake)

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services
- **Status:** PRESENT; journey proof PARTIAL

## F13 — Nora post-Evidence
- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → product subject-read (`w2ReadActiveDecisionSubjectAction`) hydrates recoverable snapshots / pending reinstruction; Truth C intact; no invented HD
- **Product resume:** explicit `reinstructionOfProposalId` on Send, then Decide
- **Status:** DETERMINISTIC proven at tested scope (front-door oracle); Proposal store remains process-local

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
- **Status:** PARTIAL — front-door rehydrate assertions at tested scope

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
```

### 08-test-proof-and-conformance-map.md
```markdown
# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
| F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
| F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
| F01 greenfield | greenfield continuity tests on main | #531 |
| F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter / Fake docs-write only |
| Architecture drift | productionRuntimeReference.conformance | living reference |

## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)

| Weakness | Classification | Evidence |
|---|---|---|
| Seam tests green while natural Product journey regresses | **MITIGATED** at tested scope by front-door oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Tests bypass conversation front door (direct resolver/AP seed) | Still true for many unit/seam tests; front-door oracle now exists | direct `resolveActiveCycleGovernedContinuation` calls |
| Fake-only note+cadrage magic as sole success path | **MITIGATED** — provider-neutral Nora leaf cues; materialization Fake default assessment null | `fakeProvider.ts` |
| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | **MITIGATED** on materialization Fake path (default null); other fixtures may still set sufficient | fixtures |
| Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
| Clarification accepted where product contract wants seamless continuation | **MITIGATED** for nominal pathless with semantic cues | continuity CORR-01 tightened |
| Product Prepare N2 vs Confirm MORRIS-only boundary | **MITIGATED** — confirm/validate accept N2 Product Pilot matching PREPARE | `validateResolvedM3ExecutionBoundary`, `confirmAndExecuteResolvedM3` |
| Docs-write Evidence without LPS outcome refs | **MITIGATED** — bounded docs-write appends LPS evidence/RB ids | `executeConfirmedBoundedDocsWriteContract` |

## Proof levels

- **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — Product UI server-action lineage at Fake scope (this macro)
- DETERMINISTIC PROVEN (seam/unit)
- REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
- Runtime v3 **NON ADOPTED**; Product global READY **not claimed**
```

### 09-known-gaps-reserves-and-current-boundaries.md
```markdown
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior by itself (Living Reference is descriptive)
- PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
- ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
| E2E backbone can bypass natural conversation front door | MITIGATED at tested scope — Product server-action oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

## Next macro

`PRODUCT-CYCLE-E2E-STABILIZATION-01` **executed** on branch `fix/sfia-studio-product-cycle-e2e-stabilization-01` (this tree). Capacité suivante: **requalifier après preuve** — ne pas auto-sélectionner.

## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

| Item | Status |
|---|---|
| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via Product server-action front-door oracle (Fake docs-write + LPS outcome refs) |
| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |

## Legacy architecture decommission audit (this tree)

**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

| Candidate | Classification | Exit / why not removed |
|---|---|---|
| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |

No `retired-components-ledger.md` — zero components removed.
```

---

## 23. Diffs utiles (F3 / closure)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts b/projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
index 9ff8578a..ba3569a3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
@@ -22,6 +22,7 @@ import {
   canonicalM3PrepareContractId,
   canonicalM3PrepareIdempotencyKey,
   canonicalM3ResolutionIdempotencyKey,
+  isCanonicalPrepareAuthority,
 } from "./resolveM3ExecutionContract";
 import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";
 
@@ -142,11 +143,12 @@ export async function validateResolvedM3ExecutionBoundary(input: {
       message: "Canonical PREPARE does not belong to this project.",
     };
   }
-  if (original.requiredAuthority !== "MORRIS") {
+  if (!isCanonicalPrepareAuthority(original.requiredAuthority)) {
     return {
       ok: false,
       code: "CANONICAL_M3_PREPARE_AUTHORITY_MISMATCH",
-      message: "Canonical PREPARE must require MORRIS authority.",
+      message:
+        "Canonical PREPARE must require MORRIS (legacy) or N2 (Product Pilot) authority.",
     };
   }
   if (!decisionRefsExact(original.decisionRefs, input.decisionId)) {
@@ -185,11 +187,20 @@ export async function validateResolvedM3ExecutionBoundary(input: {
       message: "Le contrat n'appartient pas à ce projet.",
     };
   }
-  if (successor.requiredAuthority !== "MORRIS") {
+  if (!isCanonicalPrepareAuthority(successor.requiredAuthority)) {
+    return {
+      ok: false,
+      code: "CONTRACT_AUTHORITY_MISMATCH",
+      message:
+        "Resolved M3 successor must require MORRIS (legacy) or N2 (Product Pilot) authority.",
+    };
+  }
+  if (successor.requiredAuthority !== original.requiredAuthority) {
     return {
       ok: false,
       code: "CONTRACT_AUTHORITY_MISMATCH",
-      message: "Resolved M3 successor must require MORRIS authority.",
+      message:
+        "Resolved M3 successor requiredAuthority must match canonical PREPARE authority.",
     };
   }
   if (!decisionRefsExact(successor.decisionRefs, input.decisionId)) {
```

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
index 3a774700..cd720860 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
@@ -3,7 +3,7 @@
  *
  * Preconditions (NO Proposal validation):
  * - validateResolvedM3ExecutionBoundary (exact canonical PREPARE lineage)
- * - registerM3LocalMorrisAuthority
+ * - register authority matching successor requiredAuthority (N2 Product Pilot or MORRIS legacy)
  * Then SHARED confirm/select/start/evidence pipeline.
  */
 
@@ -13,6 +13,8 @@ import type {
 } from "@/lib/oa/decision";
 import {
   LOCAL_MORRIS_M3_ACTOR,
+  LOCAL_PILOTE_ACTOR,
+  registerLocalAuthorityForExecutionClass,
   registerM3LocalMorrisAuthority,
 } from "@/lib/oa/decision";
 import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
@@ -26,6 +28,9 @@ import { F3_ADAPTER_ID } from "./constants";
 import { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
 import { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
+import {
+  PRODUCT_PILOT_AUTHORITY,
+} from "./resolveM3ExecutionContract";
 import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";
 import type { F3ExecutePayload } from "./types";
 import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";
@@ -81,13 +86,24 @@ export async function confirmAndExecuteResolvedM3(input: {
   }
 
   const contract = boundary.successor;
-  const auth = registerM3LocalMorrisAuthority({
-    authorityResolver: input.deps.authorityResolver,
-    scope: contract.scope,
-    issuedAt: input.deps.nowIso(),
-    evidenceId: `evd:m3-cfm:${contract.executionContractId}`,
-    forceEnable: input.deps.forceM3Authority === true,
-  });
+  const productPilotPath =
+    contract.requiredAuthority === PRODUCT_PILOT_AUTHORITY;
+  const auth = productPilotPath
+    ? registerLocalAuthorityForExecutionClass({
+        authorityResolver: input.deps.authorityResolver,
+        scope: contract.scope,
+        issuedAt: input.deps.nowIso(),
+        requiredAuthority: PRODUCT_PILOT_AUTHORITY,
+        evidenceId: `evd:m3-cfm-pilote:${contract.executionContractId}`,
+        forceEnable: input.deps.forceM3Authority === true,
+      })
+    : registerM3LocalMorrisAuthority({
+        authorityResolver: input.deps.authorityResolver,
+        scope: contract.scope,
+        issuedAt: input.deps.nowIso(),
+        evidenceId: `evd:m3-cfm:${contract.executionContractId}`,
+        forceEnable: input.deps.forceM3Authority === true,
+      });
   if (!auth.ok) {
     return {
       ok: false,
@@ -95,6 +111,8 @@ export async function confirmAndExecuteResolvedM3(input: {
       message: auth.message,
     };
   }
+  const actor = productPilotPath ? LOCAL_PILOTE_ACTOR : LOCAL_MORRIS_M3_ACTOR;
+  const confirmationLevel = productPilotPath ? ("N2" as const) : ("N3" as const);
 
   // E2E QA harness — armed terminal outcome (hard-gated; no-op when disabled).
   const { consumeArmedTerminalForConfirm } = await import(
@@ -129,12 +147,12 @@ export async function confirmAndExecuteResolvedM3(input: {
       proposal: null,
       contract,
       expectedContractVersion: input.expectedContractVersion,
-      actor: LOCAL_MORRIS_M3_ACTOR,
+      actor,
       authorityEvidenceId: auth.evidenceId,
       identities: {
         confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
         confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
-        confirmationLevel: "N3",
+        confirmationLevel,
         attemptId,
         attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
         grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
@@ -163,12 +181,12 @@ export async function confirmAndExecuteResolvedM3(input: {
       proposal: null,
       contract,
       expectedContractVersion: input.expectedContractVersion,
-      actor: LOCAL_MORRIS_M3_ACTOR,
+      actor,
       authorityEvidenceId: auth.evidenceId,
       identities: {
         confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
         confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
-        confirmationLevel: "N3",
+        confirmationLevel,
         attemptId,
         attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
         grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
@@ -220,12 +238,12 @@ export async function confirmAndExecuteResolvedM3(input: {
     proposal: null,
     contract,
     expectedContractVersion: input.expectedContractVersion,
-    actor: LOCAL_MORRIS_M3_ACTOR,
+    actor,
     authorityEvidenceId: auth.evidenceId,
     identities: {
       confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
       confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
-      confirmationLevel: "N3",
+      confirmationLevel,
       attemptId,
       attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
       resultRef: `res:m3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
```

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts
index da7b7f36..694dbf1a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts
@@ -31,6 +31,7 @@ import {
   type DocsWriteCompletionFacts,
 } from "./completeBoundedDocsWriteLaunch";
 import { ingestDocsWriteArtifactEvidence } from "./ingestDocsWriteArtifactEvidence";
+import { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 import type { F3ExecutePayload } from "./types";
 
@@ -318,6 +319,22 @@ async function finishBoundedDocsWriteAttempt(input: {
       nowIso: input.deps.nowIso(),
     });
     if (!artifact.ok) return artifact;
+    // Product spine continuity — factual LPS refs so RehydrateEvidenceOutcome works.
+    if (input.deps.projectServices) {
+      const linked = await appendEvidenceOutcomeToLps({
+        projectId: input.projectId,
+        evidenceId: artifact.evidenceId,
+        reviewBundleId: artifact.reviewBundleId,
+        projectServices: input.deps.projectServices,
+      });
+      if (!linked.ok) {
+        return {
+          ok: false,
+          code: linked.code,
+          message: linked.message,
+        };
+      }
+    }
     extra.push(
       `Docs-write Evidence ${artifact.evidenceId} / ReviewBundle ${artifact.reviewBundleId}`,
       `target ${facts.targetPath} digest ${facts.digest.slice(0, 12)}…`,
```

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index 52165161..2b467eba 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -75,11 +75,12 @@ const POST_VALIDATION_OK = new Set([
 
 const PRE_VALIDATION = new Set(["draft", "proposed"]);
 
-const CANONICAL_M3_AUTHORITY = "MORRIS";
+export const CANONICAL_M3_AUTHORITY = "MORRIS";
 /** Product Pilot local-write path — distinct from construction Morris gate. */
-const PRODUCT_PILOT_AUTHORITY = "N2";
+export const PRODUCT_PILOT_AUTHORITY = "N2";
 
-function isCanonicalPrepareAuthority(authority: string): boolean {
+/** Canonical M3 PREPARE / resolved successor authorities (legacy Morris or Product Pilot). */
+export function isCanonicalPrepareAuthority(authority: string): boolean {
   return (
     authority === CANONICAL_M3_AUTHORITY || authority === PRODUCT_PILOT_AUTHORITY
   );
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 52d2649d..1025f9b5 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -29,11 +29,16 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts
 
 ## F05 — Active-cycle Artifact materialization
-- **Trigger:** Natural “matérialise … livrable du cycle”
-- **Steps:** intentAnalysis → `resolveActiveCycleGovernedContinuation` → Proposal or in-cycle clarification
-- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE∧¬SATISFIED (#532+#533)
-- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher
-- **Status:** DETERMINISTIC PROVEN for routing/bridge; REAL journey reserves remain (vol 09)
+- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
+- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533)
+- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
+- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
+- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
+- **Exit:** Proposal `DECISION_REQUIRED`
+- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
+- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
+- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07)
+- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
 - **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact
 
 ## F06 — Proposal / Decision Subject / options
@@ -42,27 +47,28 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** COMPLETE for in-process; PARTIAL across restart
 
 ## F07 — HumanDecision on Proposal
-- **Trigger:** Pilot accept/refuse
-- **Paths:** `recordDecision.ts` → `oa_human_decisions`
+- **Trigger:** Pilot accept/refuse via `projectAssistantDecideAction`
+- **Paths:** `actions.ts` → `recordDecision.ts` → `oa_human_decisions`
 - **Status:** COMPLETE durable path
 
 ## F08 — EC PREPARE
-- **Trigger:** After required HD / authority path
-- **Paths:** `lib/oa/execution-contract/**`
-- **Invariant:** cannot expand DecisionBasis WHAT
-- **Status:** COMPLETE domain; product journey integration PARTIAL/NOT PROVEN as single lineage
+- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
+- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
+- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
+- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)
 
 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
-- **Status:** COMPLETE tables/services; journey continuity PARTIAL
+- **Product path:** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
+- **Status:** COMPLETE tables/services; Product E2E at tested scope
 
 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
-- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro)
+- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle
 
 ## F11 — Attempt terminal → Evidence → ReviewBundle
-- **Paths:** execution-attempt + evidence-review aggregates
-- **Status:** COMPLETE domain; E2E lineage re-proof deferred
+- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
+- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake)
 
 ## F12 — ContractResult / ClaimEvaluation
 - **Paths:** claim evaluation tables/services
@@ -72,8 +78,8 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred
 
 ## F14 — LPS / trajectory continuation or recovery
-- **Paths:** trajectory services; recovery ownership continuity
-- **Status:** PARTIAL (greenfield/recovery fixes integrated; broader matrix open)
+- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
+- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope)
 
 ## F15 — Cycle finalization
 - **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
@@ -84,16 +90,17 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden
 
 ## F17 — Restart at Proposal pending
-- **Expected:** process-local proposal may be absent → requalify; Truth C intact
-- **Status:** PARTIAL / known honesty notice in proposalStore
+- **Expected:** process-local proposal may be absent → product subject-read (`w2ReadActiveDecisionSubjectAction`) hydrates recoverable snapshots / pending reinstruction; Truth C intact; no invented HD
+- **Product resume:** explicit `reinstructionOfProposalId` on Send, then Decide
+- **Status:** DETERMINISTIC proven at tested scope (front-door oracle); Proposal store remains process-local
 
 ## F18 — Restart after HD / before execution
 - **Survives:** HD, LPS, cycle; EC if prepared
 - **Status:** PARTIAL proven by domain tests
 
 ## F19 — Restart post-Evidence
-- **Survives:** Evidence/RB/claims in product DB; session transcript if session path stable
-- **Status:** PARTIAL
+- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
+- **Status:** PARTIAL — front-door rehydrate assertions at tested scope
 
 ## F20 — Legacy / historical compatibility
 - **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 9eb40492..cf981abf 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -13,24 +13,29 @@
 
 | Flow | Deterministic tests | Notes |
 |---|---|---|
-| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, fakeProvider materialization | DETERMINISTIC PROVEN routing/bridge |
+| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F01 greenfield | greenfield continuity tests on main | #531 |
-| Architecture drift | productionRuntimeReference.conformance | this macro |
+| F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter / Fake docs-write only |
+| Architecture drift | productionRuntimeReference.conformance | living reference |
 
-## Oracle weaknesses (do not fix here)
+## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)
 
 | Weakness | Classification | Evidence |
 |---|---|---|
-| Seam tests green while natural Product journey regresses | CONFIRMED pattern (campaign) | PocketTasks vs local suites |
-| Tests bypass conversation front door (direct resolver/AP seed) | CONFIRMED for many d0 tests | direct `resolveActiveCycleGovernedContinuation` calls |
-| Fake synthesizes `note-de-cadrage.md` where REAL may leave filename null | CONFIRMED in Fake code | `fakeProvider.ts` framing cue |
-| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | PROBABLE | test fixtures set `sufficient` |
+| Seam tests green while natural Product journey regresses | **MITIGATED** at tested scope by front-door oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
+| Tests bypass conversation front door (direct resolver/AP seed) | Still true for many unit/seam tests; front-door oracle now exists | direct `resolveActiveCycleGovernedContinuation` calls |
+| Fake-only note+cadrage magic as sole success path | **MITIGATED** — provider-neutral Nora leaf cues; materialization Fake default assessment null | `fakeProvider.ts` |
+| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | **MITIGATED** on materialization Fake path (default null); other fixtures may still set sufficient | fixtures |
 | Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
-| Clarification accepted where product contract wants seamless continuation | OBSERVATION | PocketTasks filename ask vs D-PC-09 |
+| Clarification accepted where product contract wants seamless continuation | **MITIGATED** for nominal pathless with semantic cues | continuity CORR-01 tightened |
+| Product Prepare N2 vs Confirm MORRIS-only boundary | **MITIGATED** — confirm/validate accept N2 Product Pilot matching PREPARE | `validateResolvedM3ExecutionBoundary`, `confirmAndExecuteResolvedM3` |
+| Docs-write Evidence without LPS outcome refs | **MITIGATED** — bounded docs-write appends LPS evidence/RB ids | `executeConfirmedBoundedDocsWriteContract` |
 
 ## Proof levels
 
-- DETERMINISTIC PROVEN
-- REAL BOUNDARY / E2E REAL — require distinct Morris GO; not claimed by this corpus
+- **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — Product UI server-action lineage at Fake scope (this macro)
+- DETERMINISTIC PROVEN (seam/unit)
+- REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
+- Runtime v3 **NON ADOPTED**; Product global READY **not claimed**
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index a80b176f..0dcab803 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -3,8 +3,9 @@
 ## Hard boundaries
 
 - Runtime v3 **NON ADOPTED**
-- This corpus does not change product behavior
-- PocketTasks bugs / MW5 defects **not fixed** here
+- This corpus does not change product behavior by itself (Living Reference is descriptive)
+- PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
+- ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
 - No CI workflow changes
 
 ## Current campaign findings (verified against repo where possible)
@@ -15,30 +16,38 @@
 | Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
 | D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
 | REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
-| Fake may derive `note-de-cadrage.md`; REAL may leave null | CONFIRMED Fake / PROBABLE REAL | Fake code path exists |
-| MW5 may re-challenge structurally resolved continuation | PROBABLE | seam exists; journey observation |
-| Local tests pre-satisfy challenge assessment | PROBABLE | fixtures |
-| E2E backbone can bypass natural conversation front door | CONFIRMED | e2e API routes |
+| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
+| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
+| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
+| E2E backbone can bypass natural conversation front door | MITIGATED at tested scope — Product server-action oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
 | Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
-| EC→Attempt→Evidence→Recovery single lineage needs re-proof | NOT PROVEN as one journey | next macro |
-
-## Next macro
-
-`PRODUCT-CYCLE-E2E-STABILIZATION-01` must use this reference for impact analysis, then resume PocketTasks as acceptance journey.
+| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |
 
 ## Uncertainties
 
 - Dependency graph is representative, not exhaustive of every file.
 - Failure-mode catalog is selected, not every string code in repo.
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
+- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).
+
+## Next macro
+
+`PRODUCT-CYCLE-E2E-STABILIZATION-01` **executed** on branch `fix/sfia-studio-product-cycle-e2e-stabilization-01` (this tree). Capacité suivante: **requalifier après preuve** — ne pas auto-sélectionner.
 
-## Harvest follow-up absorbed
+## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay
 
-Post-foundation repository harvest confirmed Product SQLite M1–M8 topology and clarified ABSENT/PARTIAL aggregates (ContractResult/LR tables absent; MaturityAssessment/ExecutionRun memory-primary; Hybrid Context composer-only). Volumes 02 and 06 updated accordingly. No product behavior change.
+| Item | Status |
+|---|---|
+| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
+| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
+| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
+| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via Product server-action front-door oracle (Fake docs-write + LPS outcome refs) |
+| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
+| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |
 
 ## Legacy architecture decommission audit (this tree)
 
-**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b`
+**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
 **Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).
 
 | Candidate | Classification | Exit / why not removed |
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 1596a570..ace4d688 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,9 +1,10 @@
 # SFIA Studio — Living Production Runtime Reference
 
 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
-**Reviewed at:** 2026-09-27T14:40:00+0200
+**Reviewed commit:** `6beb8cc369bd9b82eebee97b70309838373b3dfa`
+**Reviewed at:** 2026-09-27T15:40:00+0200
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
+**Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
 
 ## What this corpus is
```

## 24. Handoff notes
- Review pack reinitialized as single mono-macro FULL pack (no stacked headers)
- Pack integrity: created test file is complete; generator refuses markers that would omit content.
- L3 handoff: branch `sfia/review-handoff`, file `sfia-review-handoff/latest-chatgpt-review.md`; no project commit/push/PR
