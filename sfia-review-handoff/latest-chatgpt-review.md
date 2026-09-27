# ChatGPT Review Pack — ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01

- **Date/heure:** 2026-09-27 10:12:37 CEST
- **Macro:** ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01
- **Profil:** Critical
- **Typologie:** EVOL corrective
- **Runtime v3:** NON ADOPTED
- **Verdict Cursor proposé:** READY FOR COMMIT — ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORRECTION — CONFIRMED
- **Commit projet:** INTERDIT sans nouveau GO Morris
- **Push branche projet / PR / merge:** INTERDITS

## Git Review Index

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-active-cycle-artifact-mat-01` |
| Branche corrective | `fix/sfia-studio-active-cycle-artifact-materialization-continuity-corr-01` |
| HEAD | `3f790345a9f93bd944fc0bfc93bb206c6ff70da4` |
| origin/main | `3f790345a9f93bd944fc0bfc93bb206c6ff70da4` |
| Base attendue | `origin/main @ 3f790345a9f93bd944fc0bfc93bb206c6ff70da4` |
| Alignement HEAD/base | OUI — HEAD == origin/main == base attendue |
| Fichiers staged | aucun |
| Working tree | modifications non commitées attendues uniquement (voir status) |

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
```

### git diff --stat

```
.tmp-sfia-review/chatgpt-review.md                 | 659 ++++++++++++++++++---
 ...der.userValidArtifactMaterialization.d0.test.ts |  30 +-
 .../f2/activeCycleGovernedContinuation.ts          |  80 ++-
 .../project-assistant/f2/intentAnalysis.ts         |   9 +-
 .../app/lib/platform/ai/fakeProvider.ts            |  82 ++-
 5 files changed, 744 insertions(+), 116 deletions(-)
?? projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
```

### git diff --name-status (+ untracked)

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
```

### Chemins protégés

Aucun fichier modifié sous `convergence/`, `product-completion/`, `sfia-v3-framing/`, `method/`, `prompts/`, CI, package managers, secrets, migrations.

---

## Root cause

### Chaîne observée (PocketTasks clean-room)

1. CycleInstance actif + CURRENT REQUIRE_ARTIFACT ouverte.
2. Pilote demande naturellement : « Matérialise cette spécification… comme livrable de référence du cycle » **sans** `continuationKind`, `docs_write`, `targetPath`, ni filename.
3. **FakeConversationProvider** (et, en REAL, le modèle guidé par ANALYSIS_SYSTEM) exigeait historiquement un path/leaf pour reconnaître la matérialisation naturelle → analyse tombait en `informative` / sans hints de continuation.
4. **`resolveActiveCycleGovernedContinuation`** gateait exclusivement sur `hasExplicitArtifactContinuationKind` ; sans `continuationKind` → **`NEW_CYCLE_FORMALIZATION`** immédiat (`reason: no_materialization_intent`), même avec cycle actif + obligation.
5. Conséquence produit : message « Un nouveau cycle est proposé… » + Proposal/narratif pouvant diverger sémantiquement (WHAT parallèle).

### Pourquoi PocketTasks a pris NEW_CYCLE_FORMALIZATION

Pas un défaut PocketTasks-spécifique : **faille générique de routage** —
- absence de path technique ⇒ Fake ne posait pas `continuationKind` ;
- serveur traitait l'absence de `continuationKind` comme « pas de continuation Artifact » ⇒ fallback new-cycle ;
- alors que les vérités serveur (active cycle + REQUIRE_ARTIFACT) auraient dû garder le cycle et clarifier/résoudre la cible.

### Classification des actifs

| Actif | Classification |
|---|---|
| `activeCycleGovernedContinuation.ts` | **ADAPT** (KEEP seam ; entrée continuation élargie au signal naturel ; fail-closed BLOCKED si effet incomplet) |
| `intentAnalysis.ts` ANALYSIS_SYSTEM | **ADAPT** (guidance path-less + continuité WHAT) |
| `fakeProvider.ts` natural materialization matcher | **ADAPT** (parité déterministe path-less cycle-deliverable) |
| ArtifactTargetRouting / Project workspace | KEEP |
| F2 Proposal + HumanDecision path | KEEP |
| CycleInstance / LPS current truth | KEEP |
| `orchestrateF2.ts` | KEEP (non modifié — le resolver suffit) |
| LifecycleSurface | KEEP |
| Cycle Journal / active-cycle context | KEEP |

---

## État BEFORE (reproductible)

Avant correction, sur Fake :

- Message path-less « Matérialise le livrable attendu. N'exécute rien : prépare la proposition… » → `intentClass=informative`, `continuationKind=null` (ancien P4).
- Message PocketTasks-like path-less → pas de match natural materialization → pas de `continuationKind` → `resolveActiveCycleGovernedContinuation` → `NEW_CYCLE_FORMALIZATION`.
- Preuve AFTER : P4/P4b + `activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` (AP pathless).

---

## Solution retenue

**Point de correction minimal générique (2 seams + Fake parity) :**

1. **Serveur** — `shouldEnterActiveCycleArtifactContinuationHandling` =
   `hasExplicitArtifactContinuationKind` OR `hasNaturalActiveCycleDeliverableMaterializationSignal`.
   Si signal naturel reconnu mais effet `docs_write`/opération incomplet → **`ACTIVE_CYCLE_CONTINUATION_BLOCKED`** (jamais new-cycle).
   Autorité inchangée : active cycle durable + REQUIRE_ARTIFACT CURRENT.

2. **Fake** — matcher path-less pour « matérialise + livrable/spécification + cadre cycle/référence », sans exiger path ; refuse questions / « parlons du… » ; conserve guards path-qualified historiques.

3. **ANALYSIS_SYSTEM** — explicite : path/filename absents ≠ NEW_CYCLE ; continuité WHAT dans artifactBrief/contentRequirements.

### Alternatives rejetées

| Alternative | Motif de rejet |
|---|---|
| Second planner / store | Architecture parallèle interdite |
| Keyword/sentinel utilisateur obligatoire | Pilote ne doit pas connaître internals |
| Requalifier tout « matérialise » en exécution | Élargit l'autorité ; vague talk doit rester fail-closed |
| Branche PocketTasks-spécifique | Non générique |
| Modifier orchestrateF2 / UI | Non nécessaire — resolver + Fake + guidance suffisent |
| Faire confiance au texte modèle pour l'autorité | Interdit — vérités serveur restent autoritaires |

---

## Fichiers lus (sources obligatoires + code)

Processus / routing / méthode (lecture guidance) :
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- Convergence / C1 / framing 30–35 / pilot CKC 02 (guidance only)
- Code : `intentAnalysis.ts`, `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts`, `activeCycleCognitiveContext.ts`, `materializeActiveCycleWork.ts`, `LifecycleSurface.tsx`, `artifactTargetRouting.ts`
- Tests existants : naturalMaterialization, fakeProvider userValid, corrProof09, activeCycleCognitiveWork, corrProof07, workspace routing, semantic continuity, recommendation integrity

---

## Fichiers créés (contenu complet)

### `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`

```typescript
/**
 * ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01
 *
 * Path-less natural Pilot materialization of the active cycle's required
 * deliverable must stay on ACTIVE_CYCLE_GOVERNED_CONTINUATION — never silent
 * NEW_CYCLE_FORMALIZATION. Semantic WHAT continuity of the stabilized brief
 * must be preserved into the Proposal.
 *
 * Deterministic Fake only — ZERO Cursor REAL — ZERO PocketTasks mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  hasNaturalActiveCycleDeliverableMaterializationSignal,
  hasExplicitArtifactContinuationKind,
  resolveActiveCycleGovernedContinuation,
  shouldEnterActiveCycleArtifactContinuationHandling,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

/** Synthetic WHAT — analogous to PocketTasks; not PocketTasks-hardcoded. */
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
La spécification consolidée inclut : ${STABILIZED_WHAT}.`;

const PATHLESS_WITH_GUARD = `Matérialise le livrable de référence du cycle actif.
Contenu stabilisé : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

const SANDBOX_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox/",
} as const;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  const {
    cognitiveWorkload,
    contradictionCandidate,
    challengeResponseAssessment,
    continuationKind,
    artifactMaterializationOperation,
    executionIntent,
    ...rest
  } = overrides;
  return {
    parseOk: true,
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:functional-design",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: cognitiveWorkload ?? null,
    contradictionCandidate: contradictionCandidate ?? null,
    challengeResponseAssessment: challengeResponseAssessment ?? "sufficient",
    objective: "Matérialiser le livrable requis du cycle actif",
    scope: "docs_write borné — cycle actif",
    rephrasedRequest:
      "Matérialisation de la spécification fonctionnelle comme livrable de référence du cycle",
    outOfScope: ["Nouveau CycleInstance"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    activatedBlocks: ["proposition"],
    expectedOutcome: "Proposition de matérialisation",
    criticalJustification: null,
    requestedOperation: null,
    continuationKind: continuationKind ?? null,
    artifactMaterializationOperation: artifactMaterializationOperation ?? null,
    executionIntent: executionIntent ?? null,
    ...rest,
  };
}

describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("ac-artifact-mat-corr01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "acam" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycleWithRequireArtifact(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `AC artifact mat ${suffix}`,
      objective: "Continuité matérialisation cycle actif",
      context: "cycle actif + REQUIRE_ARTIFACT",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ACAM${suffix.toUpperCase()}`,
      idempotencyKey: `idem:acam-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:b", order: 2, label: "Deliver", state: "done" },
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

    const cycleInstanceId = `cyc:acam-${suffix}`;
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
      issuedAt: "2026-09-27T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
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
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T08:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...SANDBOX_BINDING,
    });
    expect(bound.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  async function countCycles(projectId: string): Promise<number> {
    const cycles = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    return cycles.length;
  }

  it("unit — natural pathless signal enters continuation handling; vague talk does not", () => {
    const natural = baseAnalysis({
      continuationKind: null,
      rephrasedRequest:
        "Matérialiser la spécification comme livrable de référence du cycle",
    });
    expect(hasExplicitArtifactContinuationKind(natural)).toBe(false);
    expect(hasNaturalActiveCycleDeliverableMaterializationSignal(natural)).toBe(
      true,
    );
    expect(shouldEnterActiveCycleArtifactContinuationHandling(natural)).toBe(
      true,
    );

    const vague = baseAnalysis({
      intentClass: "informative",
      objective: "Parlons du livrable",
      rephrasedRequest: "Parlons du livrable attendu du cycle",
      continuationKind: null,
    });
    expect(hasNaturalActiveCycleDeliverableMaterializationSignal(vague)).toBe(
      false,
    );
    expect(shouldEnterActiveCycleArtifactContinuationHandling(vague)).toBe(
      false,
    );
  });

  it("unit — natural signal without docs_write effect → BLOCKED not NEW_CYCLE", async () => {
    const { projectId, cycleInstanceId } =
      await seedActiveCycleWithRequireArtifact("blk");
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const analysis = baseAnalysis({
      continuationKind: null,
      artifactMaterializationOperation: null,
      executionIntent: null,
      rephrasedRequest:
        "Matérialiser la spécification comme livrable de référence du cycle",
    });

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: {
        projectId,
        name: overview.project.name,
        shortReference: null,
        objective: overview.project.objective,
        contextSummary: "test",
        criticality: "STANDARD",
        constraints: [],
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        lpsCreatedAt: overview.livingState.createdAt,
        doctrineId: overview.doctrine.id,
        doctrineVersion: String(overview.doctrine.version),
        doctrineDigest: overview.doctrine.digest,
        doctrineStatus: overview.doctrine.status,
        runtimeMode: "local",
        persistence: "product-sqlite",
        readiness: "ready",
        activeCycleInstanceId: cycleInstanceId,
        ckcResolutionRef: null,
      },
      analysis,
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("incompatible_execution_intent");
    }
    expect(await countCycles(projectId)).toBe(1);
  });

  it("AP — pathless natural materialization → ZERO new CycleInstance; active cycle preserved; WHAT continuity", async () => {
    const { projectId, cycleInstanceId } =
      await seedActiveCycleWithRequireArtifact("pathless");
    const cyclesBefore = await countCycles(projectId);

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(send.text).toMatch(/cycle en cours est conservé|clarif/i);
    expect(send.text).not.toMatch(/nouveau cycle est proposé/i);

    // Pathless → clarification in-cycle OR proposal on same active cycle.
    if (send.f2?.turnKind === "f2_clarification") {
      expect(send.f2.qualification?.cycleInstanceId).toBe(cycleInstanceId);
      expect(send.f2.proposal ?? null).toBeNull();
    } else {
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
      const what =
        [
          send.f2?.proposal?.executionIntent?.artifactBrief,
          ...(send.f2?.proposal?.executionIntent?.contentRequirements ?? []),
        ]
          .filter(Boolean)
          .join("\n") || "";
      expect(what).toMatch(/statuts A \/ B \/ C/i);
      expect(what).toMatch(/attribut optionnel P/i);
      expect(what).toMatch(/attribut optionnel D/i);
      expect(what).toMatch(/persistance locale/i);
      expect(what).toMatch(/règle Z explicitement hors périmètre/i);
      // Must not invent contradictory exclusions of P/D.
      expect(what).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
      expect(what).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
    }
  });

  it("AP — pathless with explicit guard → same active cycle; no Execute/HD inventée", async () => {
    const { projectId, cycleInstanceId } =
      await seedActiveCycleWithRequireArtifact("guard");
    const oa = runtime.oa!;
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_WITH_GUARD,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(1);
    const active = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    }).catch(() => null);
    void active;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
    }

    expect(send.f2?.decision).toBeNull();
    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;
    expect(hdAfter).toBe(hdBefore);

    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
      const contracts =
        await oa.executionContractServices.contracts.listByProject(projectId);
      expect(contracts.length).toBe(0);
    }
  });

  it("AP — vague talk about deliverable does NOT open Artifact continuation / new cycle", async () => {
    const { projectId } = await seedActiveCycleWithRequireArtifact("vague");
    const cyclesBefore = await countCycles(projectId);

    const send = await projectAssistantSendAction({
      projectId,
      content: VAGUE_TALK,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(send.f2?.proposal ?? null).toBeNull();
    expect(send.f2?.turnKind === "f2_proposal").toBe(false);
  });
});
```

---

## Fichiers modifiés — diffs complets

### Diff `activeCycleGovernedContinuation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index a8cf1fe3..5a4901e2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -212,6 +212,76 @@ export function hasExplicitArtifactContinuationKind(
   return analysis.continuationKind === "active_cycle_artifact_materialization";
 }

+/**
+ * CORR-01 — natural active-cycle deliverable materialization signal from
+ * analysis text fields (NON-AUTHORITATIVE). Used so a missing continuationKind
+ * does not silently fall to NEW_CYCLE_FORMALIZATION when the Pilote asked to
+ * materialize the cycle's required deliverable without internals/path.
+ *
+ * Must NOT match generic docs_write / vague talk-about-deliverable alone.
+ */
+export function hasNaturalActiveCycleDeliverableMaterializationSignal(
+  analysis: IntentAnalysisDto,
+): boolean {
+  if (!analysis.parseOk) return false;
+  if (
+    analysis.intentClass !== "actionable" &&
+    analysis.intentClass !== "execution_request"
+  ) {
+    return false;
+  }
+  const hay = [
+    analysis.objective,
+    analysis.rephrasedRequest,
+    analysis.executionIntent?.artifactBrief,
+    ...(analysis.executionIntent?.contentRequirements ?? []),
+  ]
+    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
+    .join("\n")
+    .normalize("NFC")
+    .toLowerCase()
+    .replace(/[àáâäã]/g, "a")
+    .replace(/[èéêë]/g, "e")
+    .replace(/[ìíîï]/g, "i")
+    .replace(/[òóôöõ]/g, "o")
+    .replace(/[ùúûü]/g, "u")
+    .replace(/ç/g, "c");
+
+  if (!/\bmaterialis/.test(hay)) return false;
+  const hasDeliverable =
+    /\blivrable\b/.test(hay) ||
+    /\bspecification\b/.test(hay) ||
+    /\bcahier\b/.test(hay);
+  const hasCycleFrame =
+    /\bcycle\b/.test(hay) ||
+    /\breference\b/.test(hay) ||
+    /\bconsolide/.test(hay) ||
+    /\battendu\b/.test(hay);
+  if (!hasDeliverable || !hasCycleFrame) return false;
+  // Refuse pure conversational / question framing.
+  if (
+    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer)\b/.test(hay) ||
+    /\?\s*$/.test(hay.trim())
+  ) {
+    return false;
+  }
+  return true;
+}
+
+/**
+ * Enter Artifact-continuation handling when either the explicit hint is set
+ * OR a natural active-cycle deliverable materialization signal is present.
+ * Durable active-cycle + REQUIRE_ARTIFACT remain the authority.
+ */
+export function shouldEnterActiveCycleArtifactContinuationHandling(
+  analysis: IntentAnalysisDto,
+): boolean {
+  return (
+    hasExplicitArtifactContinuationKind(analysis) ||
+    hasNaturalActiveCycleDeliverableMaterializationSignal(analysis)
+  );
+}
+
 /**
  * CR-07-06 — blank/null/undefined OR exact cursor.docs_write.apply after trim.
  * Any other non-empty value is contradictory (never silently rewritten).
@@ -372,13 +442,15 @@ export async function resolveActiveCycleGovernedContinuation(input: {
   analysis: IntentAnalysisDto;
   oa: ActiveCycleContinuationOa;
 }): Promise<ActiveCycleContinuationResolution> {
-  // CR-07-04 / CR-07-05 — explicit continuationKind starts Artifact-continuation
-  // handling. Without it, docs_write alone stays historical NEW_CYCLE.
-  if (!hasExplicitArtifactContinuationKind(input.analysis)) {
+  // CR-07-04 / CR-07-05 / CORR-01 — enter Artifact-continuation handling when
+  // explicit continuationKind OR natural active-cycle deliverable materialization
+  // signal is present. Without either, docs_write alone stays historical NEW_CYCLE.
+  // Recognized continuation + incomplete effect → BLOCKED (never silent createCycle).
+  if (!shouldEnterActiveCycleArtifactContinuationHandling(input.analysis)) {
     return { mode: "NEW_CYCLE_FORMALIZATION", reason: "no_materialization_intent" };
   }

-  // Kind present but effect incompatible → BLOCK (never createCycle).
+  // Kind/signal present but effect incompatible → BLOCK (never createCycle).
   if (!hasCompatibleDocsWriteMaterializationEffect(input.analysis)) {
     return blocked("incompatible_execution_intent");
   }
```

### Contenu exploitable — nouvelles fonctions (extrait post-correction)

```typescript
export function hasExplicitArtifactContinuationKind(
  analysis: IntentAnalysisDto,
): boolean {
  return analysis.continuationKind === "active_cycle_artifact_materialization";
}

/**
 * CORR-01 — natural active-cycle deliverable materialization signal from
 * analysis text fields (NON-AUTHORITATIVE). Used so a missing continuationKind
 * does not silently fall to NEW_CYCLE_FORMALIZATION when the Pilote asked to
 * materialize the cycle's required deliverable without internals/path.
 *
 * Must NOT match generic docs_write / vague talk-about-deliverable alone.
 */
export function hasNaturalActiveCycleDeliverableMaterializationSignal(
  analysis: IntentAnalysisDto,
): boolean {
  if (!analysis.parseOk) return false;
  if (
    analysis.intentClass !== "actionable" &&
    analysis.intentClass !== "execution_request"
  ) {
    return false;
  }
  const hay = [
    analysis.objective,
    analysis.rephrasedRequest,
    analysis.executionIntent?.artifactBrief,
    ...(analysis.executionIntent?.contentRequirements ?? []),
  ]
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    .join("\n")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[àáâäã]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôöõ]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/ç/g, "c");

  if (!/\bmaterialis/.test(hay)) return false;
  const hasDeliverable =
    /\blivrable\b/.test(hay) ||
    /\bspecification\b/.test(hay) ||
    /\bcahier\b/.test(hay);
  const hasCycleFrame =
    /\bcycle\b/.test(hay) ||
    /\breference\b/.test(hay) ||
    /\bconsolide/.test(hay) ||
    /\battendu\b/.test(hay);
  if (!hasDeliverable || !hasCycleFrame) return false;
  // Refuse pure conversational / question framing.
  if (
    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer)\b/.test(hay) ||
    /\?\s*$/.test(hay.trim())
  ) {
    return false;
  }
  return true;
}

/**
 * Enter Artifact-continuation handling when either the explicit hint is set
 * OR a natural active-cycle deliverable materialization signal is present.
 * Durable active-cycle + REQUIRE_ARTIFACT remain the authority.
 */
export function shouldEnterActiveCycleArtifactContinuationHandling(
  analysis: IntentAnalysisDto,
): boolean {
  return (
    hasExplicitArtifactContinuationKind(analysis) ||
    hasNaturalActiveCycleDeliverableMaterializationSignal(analysis)
  );
}
```

### Contenu exploitable — gate resolve (extrait)

```typescript
  project: ProjectAssistantContextDto;
  analysis: IntentAnalysisDto;
  oa: ActiveCycleContinuationOa;
}): Promise<ActiveCycleContinuationResolution> {
  // CR-07-04 / CR-07-05 / CORR-01 — enter Artifact-continuation handling when
  // explicit continuationKind OR natural active-cycle deliverable materialization
  // signal is present. Without either, docs_write alone stays historical NEW_CYCLE.
  // Recognized continuation + incomplete effect → BLOCKED (never silent createCycle).
  if (!shouldEnterActiveCycleArtifactContinuationHandling(input.analysis)) {
    return { mode: "NEW_CYCLE_FORMALIZATION", reason: "no_materialization_intent" };
  }

  // Kind/signal present but effect incompatible → BLOCK (never createCycle).
  if (!hasCompatibleDocsWriteMaterializationEffect(input.analysis)) {
    return blocked("incompatible_execution_intent");
  }

  const activeId = input.project.activeCycleInstanceId ?? null;
  if (!activeId) {
    return blocked("no_active_cycle");
```

### Diff `intentAnalysis.ts` (ANALYSIS_SYSTEM)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index b6de6112..a6973b4a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -620,24 +620,27 @@ Règles dures :
 - Ne pas reclasser en ambiguous uniquement parce que la phrase courante est incomplète si le contexte canonique la rend compréhensible.
 - Ne pas créer de CycleInstance / actionable par défaut pour une simple conversation informative progressive.

-=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07 / CORR-PROOF-09) ===
+=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07 / CORR-PROOF-09 / ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01) ===
 NEW_CYCLE_FORMALIZATION ≠ ACTIVE_CYCLE_GOVERNED_CONTINUATION ≠ ACTIVE_CYCLE_CONTINUATION_BLOCKED.
 Si le Project a déjà un cycle actif et que la demande porte sur la matérialisation gouvernée du livrable requis (REQUIRE_ARTIFACT) de CE cycle :
-- continuationKind=active_cycle_artifact_materialization EST REQUIS (hint NON-AUTORITAIRE) ;
+- continuationKind=active_cycle_artifact_materialization EST REQUIS (hint NON-AUTORITAIRE) — MÊME sans targetPath / filename technique fourni par le Pilote ;
 - ET executionIntent.intentKind=docs_write EST REQUIS ;
 - ET artifactMaterializationOperation=cursor.docs_write.apply EST REQUIS (discriminateur technique dédié) ;
 - docs_write SEUL ne suffit JAMAIS à détourner vers la continuation Artifact ;
 - continuationKind SEUL ne suffit JAMAIS à ouvrir une proposition exécutable ;
 - NE PAS traiter cela comme création d'un nouveau CycleInstance / nouveau Cadrage ;
+- NE PAS retomber en NEW_CYCLE_FORMALIZATION uniquement parce qu'un chemin / artifactFileName / hint technique est absent ;
+- si la cible exacte n'est pas résolue : laisser targetPath=null (et éventuellement artifactFileName null ou leaf sûr) — le serveur clarifie DANS le cycle actif ;
 - CONTRAT TECHNIQUE (CORR-PROOF-09 CR-09-01/02) :
   * artifactMaterializationOperation DOIT être EXACTEMENT « cursor.docs_write.apply » (pas d'alias « docs_write », pas de français, pas d'autre opération) ;
   * hors de ce chemin Artifact, artifactMaterializationOperation=null ;
   * requestedOperation (top-level) ET executionIntent.requestedOperation restent génériques ailleurs ; pour CETTE continuation Artifact, les laisser null (préféré) ou exactement cursor.docs_write.apply — JAMAIS une valeur contradictoire (ex. github.pr.merge) ;
   * si des requiredCapabilities sont fournies pour ce chemin → « cap:cursor.docs_write » (le serveur reste autoritaire après acceptation) ;
   * la description naturelle du livrable va dans objective / rephrasedRequest / artifactBrief / contentRequirements — JAMAIS dans artifactMaterializationOperation ;
+  * CONTINUITÉ SÉMANTIQUE DU WHAT : reporter dans artifactBrief / contentRequirements les règles fonctionnelles déjà stabilisées dans le contexte (statuts, attributs, filtres, persistance, exclusions) — NE PAS inventer une seconde spécification contradictoire (ex. retirer des statuts/attributs déjà établis ou les déclarer hors périmètre) ;
   * targetPath / targetRepositoryRef PEUVENT rester null (le serveur compose sous Project workspace + cycle segment) — ne PAS inventer de chemin repository complet ;
   * si le Pilote a fourni un filename leaf sûr (ex. note-de-cadrage.md), le reporter dans artifactFileName ;
-  * si aucun filename n'est fourni, proposer un artifactFileName Markdown cohérent avec le livrable/cycle (NON-AUTORITAIRE) ;
+  * si aucun filename n'est fourni, artifactFileName PEUT rester null (clarification serveur) OU proposer un leaf Markdown cohérent (NON-AUTORITAIRE) ;
   * ne PAS demander au Pilote de construire un path technique repository complet lorsque workspace Project+cycle est déterminable ;
   * reversibilityExpectation pour cette continuation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
 - définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null, artifactMaterializationOperation=null.
```

### Diff `fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 2c8f0097..6b1fe775 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -81,34 +81,54 @@ function extractSingleMdFileNameLeaf(probe: string): string | null {

 /**
  * Narrow natural Pilot contract for artifact materialization (no synonym engine).
- * Requires ALL of:
+ *
+ * Path-qualified form (historical):
  * 1) materialize wording family
  * 2) exactly one repo-relative .md path OR one safe .md leaf OR framing note cue
  * 3) explicit proposal / decision preparation
  * 4) explicit no-execution guard
+ *
+ * Active-cycle deliverable form (CORR-01 — path OPTIONAL):
+ * 1) materialize wording family
+ * 2) livrable / spécification framed as the active cycle's reference deliverable
+ * 3) NOT a question / pure talk-about-the-deliverable
+ * → targetPath / artifactFileName may be null; server clarifies in-cycle.
+ * Must NOT match generic docs_write ("écris dans le README") without materialize+livrable+cycle framing.
  */
 function matchNaturalArtifactMaterialization(probe: string): {
   targetPath: string | null;
-  artifactFileName: string;
+  artifactFileName: string | null;
   artifactBrief: string;
   contentRequirement: string;
 } | null {
   const normalized = normalizeNaturalMaterializationProbe(probe);
   if (!/\bmaterialis(?:e|er)\b/.test(normalized)) return null;

+  // Question / reference-only — never promote to materialization continuation.
+  if (
+    /\?\s*$/.test(normalized.trim()) ||
+    /\b(parlons|parler|qu'est[- ]ce|c'est quoi|explique|expliquer)\b/.test(
+      normalized,
+    )
+  ) {
+    return null;
+  }
+
   const hasProposalOrDecision =
-    /\bproposition\b/.test(normalized) || /\bdecision\b/.test(normalized);
+    /\bproposition\b/.test(normalized) ||
+    /\bdecision\b/.test(normalized) ||
+    /\bprepar(?:e|er)\b/.test(normalized);
   const hasNoExecution =
     /n'execute\s+rien/.test(normalized) ||
-    /ne\s+rien\s+executer/.test(normalized);
-  if (!hasProposalOrDecision || !hasNoExecution) return null;
+    /ne\s+rien\s+executer/.test(normalized) ||
+    /sans\s+executer/.test(normalized);

   const targetPath = extractSingleRepoRelativeMdPath(probe);
   const leafFromPath = targetPath
     ? targetPath.split("/").pop() || null
     : null;
   const bareLeaf = extractSingleMdFileNameLeaf(probe);
-  let artifactFileName = leafFromPath || bareLeaf || null;
+  let artifactFileName: string | null = leafFromPath || bareLeaf || null;
   // Framing note cue without explicit filename — Nora-like non-authoritative candidate
   if (
     !artifactFileName &&
@@ -117,12 +137,54 @@ function matchNaturalArtifactMaterialization(probe: string): {
   ) {
     artifactFileName = "note-de-cadrage.md";
   }
-  if (!artifactFileName) return null;

-  const brief = probe.replace(/\s+/g, " ").trim().slice(0, 240);
+  const brief = probe.replace(/\s+/g, " ").trim().slice(0, 480);
+  const hasPathOrLeaf = Boolean(artifactFileName);
+
+  // Active-cycle reference deliverable framing (path not required).
+  const hasCycleDeliverableFraming =
+    /\blivrable\b/.test(normalized) ||
+    /\bspecification\b/.test(normalized) ||
+    /\bcahier\b/.test(normalized);
+  const hasActiveCycleReference =
+    /\bcycle\b/.test(normalized) ||
+    /\breference\b/.test(normalized) ||
+    /\bconsolidee?\b/.test(normalized) ||
+    /\battendu\b/.test(normalized);
+
+  if (hasPathOrLeaf) {
+    // Historical path-qualified contract — keep proposal + no-execution guards.
+    if (!hasProposalOrDecision || !hasNoExecution) return null;
+    return {
+      targetPath,
+      artifactFileName,
+      artifactBrief: brief,
+      contentRequirement: brief,
+    };
+  }
+
+  // Path-less: only when clearly materializing the cycle's required deliverable.
+  // Do NOT require internals (continuationKind / docs_write / targetPath) from the Pilot.
+  if (!hasCycleDeliverableFraming || !hasActiveCycleReference) return null;
+  // Still refuse bare "matérialise" without prepare/decision OR no-execution OR
+  // explicit "livrable de référence / spécification … du cycle" prepare intent.
+  const hasReferenceDeliverablePhrase =
+    /\blivrable\b/.test(normalized) &&
+    (/\breference\b/.test(normalized) ||
+      /\bdu cycle\b/.test(normalized) ||
+      /\bcycle actif\b/.test(normalized) ||
+      /\bconsolidee?\b/.test(normalized));
+  if (
+    !hasProposalOrDecision &&
+    !hasNoExecution &&
+    !hasReferenceDeliverablePhrase
+  ) {
+    return null;
+  }
+
   return {
-    targetPath,
-    artifactFileName,
+    targetPath: null,
+    artifactFileName: null,
     artifactBrief: brief,
     contentRequirement: brief,
   };
```

### Diff `fakeProvider.userValidArtifactMaterialization.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
index d7380b5c..03585e2f 100644
--- a/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
@@ -71,13 +71,35 @@ N'exécute rien : prépare la proposition pour ma décision.`;
     expect(ei.targetPath).not.toBe("docs/livrable-cycle.md");
   });

-  it("P4 — missing explicit path does not enter natural materialization", async () => {
+  it("P4 — missing explicit path still enters natural materialization (active-cycle deliverable; target clarified server-side)", async () => {
     const obj = await analyze(
       "Matérialise le livrable attendu. N'exécute rien : prépare la proposition pour ma décision.",
     );
-    expect(obj.intentClass).toBe("informative");
-    expect(obj.continuationKind ?? null).toBeNull();
-    expect(obj.executionIntent ?? null).toBeNull();
+    expect(obj.intentClass).toBe("execution_request");
+    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
+    expect(obj.artifactMaterializationOperation).toBe(
+      "cursor.docs_write.apply",
+    );
+    const ei = obj.executionIntent as Record<string, unknown>;
+    expect(ei.intentKind).toBe("docs_write");
+    expect(ei.targetPath ?? null).toBeNull();
+  });
+
+  it("P4b — PocketTasks-like pathless cycle reference deliverable enters materialization", async () => {
+    const obj = await analyze(
+      "Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.",
+    );
+    expect(obj.intentClass).toBe("execution_request");
+    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
+    expect(obj.artifactMaterializationOperation).toBe(
+      "cursor.docs_write.apply",
+    );
+    const ei = obj.executionIntent as Record<string, unknown>;
+    expect(ei.targetPath ?? null).toBeNull();
+    expect(String(ei.artifactBrief ?? "")).toMatch(/spécification fonctionnelle/i);
+    expect(String(ei.contentRequirements ?? "")).toMatch(
+      /spécification fonctionnelle/i,
+    );
   });

   it("P5 — two target paths fails closed / falls through", async () => {
```

---

## Tests / validations

### BEFORE (comportement historique encodé)

- Ancien P4 : path-less → informative (défaut Fake).
- Gate serveur : sans `continuationKind` → NEW_CYCLE_FORMALIZATION.

### AFTER (cette correction)

| Preuve | Résultat |
|---|---|
| Unit natural signal → enter handling ; vague talk → non | PASS |
| Natural signal sans docs_write effect → BLOCKED not NEW_CYCLE | PASS |
| AP pathless natural → ZERO nouveau CycleInstance ; cycle actif conservé ; pas « nouveau cycle proposé » | PASS |
| AP pathless + guard → same activeCycleInstanceId ; decision null ; 0 ExecutionContract | PASS |
| AP vague talk → pas de proposal Artifact / pas new cycle | PASS |
| P4 path-less → execution_request + continuationKind + targetPath null | PASS |
| P4b PocketTasks-like path-less → materialization + WHAT brief | PASS |
| naturalMaterialization.applicationPath | PASS |
| corrProof07 / corrProof09 | PASS |
| activeCycleCognitiveWork | PASS |
| projectWorkspaceArtifactRouting | PASS |
| pilotNoraStudioSemanticContinuity.corr01 | PASS |
| corrProof10 decisionContextContinuity | PASS |
| recommendation-vs-decision + recommendationDecisionIntegrity | PASS (suite complète) |

### Commandes

```
npm test -- (targeted materialization + continuity suites) → 123 + 76 PASS
npm run typecheck → PASS
npm run lint → PASS (No ESLint warnings or errors)
npm test (suite complète SFIA Studio) → Test Files 442 passed | 17 skipped ; Tests 4887 passed | 137 skipped
git diff --check → clean
```

Build Next non rejoué : changement logique serveur/Fake/tests uniquement ; typecheck+lint+suite complète critique suffisent (coût build disproportionné non requis pour ce delta).

### Preuves d'invariants CORR-01

1. **ZERO nouveau CycleInstance** sur pathless natural — AP test `countCycles` inchangé.
2. **Same active CycleInstance** — `activeCycleInstanceId` LPS + qualification/proposal.
3. **Pas NEW_CYCLE_FORMALIZATION** — texte sans « nouveau cycle est proposé » ; route continuation/clarification/BLOCKED.
4. **Target unresolved → clarification in-cycle** — path null ; turnKind clarification OU proposal sur même cycle (pas createCycle).
5. **WHAT continuity** — A/B/C, P, D, filtres, persistance, exclusion Z présents ; pas d'invention « P/D hors périmètre ».
6. **Aucune HumanDecision inventée** — `decision` null ; count HD inchangé.
7. **Aucune exécution avant décision** — 0 ExecutionContract.

---

## Fake / Real Qualification

- **applicable :** oui
- **trigger :** FakeConversationProvider / intent analysis boundary
- **frontière externe :** provider OpenAI utilisé par Nora/F2 (runtime réel)
- **fake/mock :** oui — Fake déterministe + tests d0
- **parité attendue :** mêmes schemas d'analyse, mêmes décisions serveur post-analyse, même `resolveActiveCycleGovernedContinuation`, mêmes invariants Cycle/LPS/Proposal
- **différences connues :** sortie sémantique modèle REAL non déterministe ; Fake scripté
- **realism gaps :** robustesse absolue de classification linguistique REAL non prouvée ici ; ANALYSIS_SYSTEM renforcé mais non REAL-prouvé
- **niveau de preuve ce cycle :** **DETERMINISTIC PROVEN**
- **hors scope :** REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN / READY FOR REAL
- **bounded REAL :** cycle suivant / GO Morris distinct si jugé nécessaire
- **gate Morris REAL :** oui
- **claims autorisés :** correction déterministe prouvée ; aucune création parasite dans scénarios testés
- **claims interdits :** READY FOR REAL ; REAL BOUNDARY PROVEN ; END-TO-END REAL PROVEN ; Cognitive Completion ; Runtime v3 ADOPTED

Règle dure : DETERMINISTIC PROVEN n'implique PAS READY FOR REAL.

---

## Risques / réserves

1. **REAL linguistic robustness** — un modèle live peut encore omettre `continuationKind` / docs_write ; le serveur CORR-01 mitige via signal naturel textuel, mais la qualité des champs `objective`/`rephrasedRequest` dépend toujours du provider. Mitigé, non éliminé.
2. **Signal naturel heuristique** — volontairement étroit (materialis + livrable/spec + cadre cycle ; refuse questions). Faux négatifs possibles sur formulations très atypiques → fail-closed (new-cycle historique seulement si aucun signal) ; faux positifs limités par intentClass + REQUIRE_ARTIFACT + docs_write effect.
3. **Path-less → clarification fréquente** — UX attendue ; pas d'invention de path.
4. **Branche temporairement remontée** — worktree avait dérivé sur la branche greenfield post-merge tip ; reswitch local vers `fix/sfia-studio-active-cycle-artifact-materialization-continuity-corr-01` @ `3f790345` avant finalisation (aucun commit projet).

---

## Décisions Morris requises

1. **GO commit** branche corrective (non consommé — ce cycle s'arrête READY FOR COMMIT).
2. **GO push / PR** (interdit ici).
3. **Bounded REAL proof** de la correction (optionnel, cycle distinct) avant reprise campaign PocketTasks live si Morris l'exige.
4. Reprise campaign PocketTasks sur **le même Project / cycle** après intégration — ne pas reconstruire PocketTasks ici.

---

## Gaps fermés

| Gap | Statut |
|---|---|
| G1 — classification sans continuationKind → NEW_CYCLE | FERMÉ (signal naturel + Fake parity) |
| G2 — absence targetPath → new cycle | FERMÉ (reste continuation ; clarification in-cycle) |
| G3 — WHAT contradictoire Proposal/narratif | MITIGÉ (routing + brief depuis texte utilisateur ; test WHAT) — dérive REAL narrative hors scope |
| G4 — Pilote doit connaître internals | FERMÉ |
| G5 — nouveau CycleInstance parasite | FERMÉ (tests ZERO new cycle) |

---

## Review Handoff

- Mode : publish-in-cycle L3 borné
- Branche : `sfia/review-handoff`
- Canonique : `sfia-review-handoff/latest-chatgpt-review.md`
- Commit attendu : `docs(review-handoff): publish active-cycle artifact materialization continuity correction review`
- Source : `.tmp-sfia-review/chatgpt-review.md`
- Push branche projet : NON

---

## Instruction ChatGPT (obligatoire)

Avant de répondre à Morris, consulter :

- branche `sfia/review-handoff`
- fichier `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier cohérence avec ce rapport (macro, branche, HEAD/base, root cause, fichiers, BEFORE/AFTER, ZERO parasite cycle, WHAT, Fake/Real, réserves, verdict, remote handoff).

Si handoff absent/incohérent/synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Si Cursor annonce publication mais remote non à jour → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

---

## Verdict

**READY FOR COMMIT — ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORRECTION — CONFIRMED**

- DETERMINISTIC PROVEN
- Pas de commit projet dans ce cycle
- Pas de READY FOR REAL
- Runtime v3 NON ADOPTED
