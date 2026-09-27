# ChatGPT Review Pack — ACTIVE-CYCLE-ARTIFACT-APPLICABILITY-CONTINUATION-BRIDGE-CORR-01

- **Date/heure:** 2026-09-27 11:05:43 CEST
- **Macro:** ACTIVE-CYCLE-ARTIFACT-APPLICABILITY-CONTINUATION-BRIDGE-CORR-01
- **Profil:** Critical
- **Typologie:** EVOL corrective
- **Runtime v3:** NON ADOPTED
- **Verdict Cursor proposé:** READY FOR COMMIT — ARTIFACT APPLICABILITY CONTINUATION BRIDGE CORRECTION — CONFIRMED
- **Commit projet:** INTERDIT sans nouveau GO Morris
- **Push branche projet / PR / merge:** INTERDITS

## Git Review Index

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-artifact-applicability-bridge-01` |
| Branche corrective | `fix/sfia-studio-artifact-applicability-continuation-bridge-corr-01` |
| HEAD | `ccf4e7f50f01c7d2941ba8a3ffd94e3f38b29d68` |
| origin/main | `ccf4e7f50f01c7d2941ba8a3ffd94e3f38b29d68` |
| Base attendue | `origin/main @ ccf4e7f50f01c7d2941ba8a3ffd94e3f38b29d68` |
| Alignement HEAD/base | OUI — HEAD == origin/main == base attendue (PR #532 integrated) |
| Fichiers staged | aucun |

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
?? projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
```

### git diff --stat

```
.tmp-sfia-review/chatgpt-review.md                 | 133 ---------------------
 .../corrProof07.artifactMaterialization.d0.test.ts |  46 ++++++-
 .../f2/activeCycleGovernedContinuation.ts          |  81 +++++++++++--
 3 files changed, 114 insertions(+), 146 deletions(-)
?? projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
```

### git diff --name-status

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
?? projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
```

### Chemins protégés

Aucun sous `convergence/`, `product-completion/`, `sfia-v3-framing/`, `method/`, `prompts/`, CI, package managers, secrets, migrations.

---

## Root cause

Après PR #532, la demande naturelle de matérialisation reste sur le CycleInstance actif.
Mais `resolveActiveCycleGovernedContinuation` exigeait encore **uniquement**
`hasCurrentRequireArtifactObligation(...)` avant d'admettre la continuation.

Or, depuis F14 Cycle Obligation Snapshot (`deriveCycleObligationSnapshot`), un
`cyc:functional-design` repo-backed dérive déjà Artifact **MUST / APPLICABLE**.
`LifecycleSurface` affiche correctement « Livrable requis » via
`showsRequireArtifactContinuation` (APPLICABLE + non SATISFIED).

Conséquence : vérité canonique Artifact APPLICABLE + UI « Livrable requis »,
mais Nora bloque avec `no_require_artifact` faute de policy HD redondante
`OBLIGATION_POLICY_REQUIRE_ARTIFACT`.

La Proposal de matérialisation possède déjà son propre gate HumanDecision avant EC.
Exiger REQUIRE_ARTIFACT en plus = micro-confirmation suspecte d'un MUST déjà établi.

---

## BEFORE (reproductible)

Repo-backed functional-design + active cycle + Artifact APPLICABLE via snapshot
+ **aucune** CURRENT REQUIRE_ARTIFACT HD + demande naturelle de matérialisation
→ `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact`
→ message « Continuation Artifact demandée, mais aucune décision CURRENT REQUIRE_ARTIFACT… »

Preuve AFTER : T1 (PASS) — même setup → continuation ; texte sans `no_require_artifact`.

---

## Modèle d'autorité retenu

| Vérité | Rôle |
|---|---|
| Artifact APPLICABLE + non SATISFIED (assessment canonique) | Admet Proposal/clarification sur le cycle actif |
| CURRENT REQUIRE_ARTIFACT HD | Admet aussi (chemin historique UNKNOWN/N/A → required) |
| Proposal | Action proposée, non autoritaire |
| HumanDecision du Pilote sur la Proposal | Autorité pour préparer l'ExecutionContract |
| ExecutionContract | Absent tant que Proposal HD absente |

**Applicability ≠ execution authority.**
**Aucune auto-HD REQUIRE_ARTIFACT.**
**Aucune suppression du Proposal HD.**

### Challenge obligatoire — pourquoi aucun HD supplémentaire

Chemin suffisant :
canonical Artifact APPLICABLE → Proposal → existing Proposal HumanDecision → EC.

Une seconde HumanDecision uniquement pour répéter un MUST déjà établi serait
redondante et hors cible. Aucune nouvelle catégorie HD. Aucune UI ajoutée.

---

## Preuve Applicability n'est pas Authority

1. T1/T2 : continuation sans policy HD ; `decision` null ; count HD inchangé ; 0 EC.
2. T3 : Proposal `DECISION_REQUIRED` ; EC = 0.
3. T4/T5 : UNKNOWN / NOT_APPLICABLE sans policy → fail-closed (pas de Proposal exécutable).
4. Helpers : `hasCanonicalArtifactApplicableUnsatisfied` n'écrit aucune décision.

---

## Classification des actifs

| Actif | Classification |
|---|---|
| `activeCycleGovernedContinuation.ts` | **ADAPT** |
| `deriveCycleObligationSnapshot` | KEEP |
| `deriveFinalizationApplicability` | KEEP |
| `assessFinalization` | KEEP |
| Lifecycle UI / presentation | KEEP (non modifié) |
| `recordObligationPolicyRequireArtifact` | KEEP (UNKNOWN/N/A path) |
| Proposal → HD → EC chain | KEEP |
| Tests corrProof07 contamination | **ADAPT** (alignés sur nouveau sémantique) |

---

## Fichiers lus

Processus / convergence / framing 30–35 (guidance) ; code obligatoire listé dans le brief ;
tests corrProof06/07, continuity #532, lifecyclePresentation, GCEC.

---

## Fichiers créés (contenu complet)

### `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts`

```typescript
/**
 * ACTIVE-CYCLE-ARTIFACT-APPLICABILITY-CONTINUATION-BRIDGE-CORR-01
 *
 * Canonical Artifact APPLICABLE (F14 obligation snapshot) + not SATISFIED must
 * admit ACTIVE_CYCLE_GOVERNED_CONTINUATION without a redundant CURRENT
 * REQUIRE_ARTIFACT HumanDecision. Applicability ≠ execution authority:
 * Proposal HD remains required before any ExecutionContract.
 *
 * Deterministic Fake only — ZERO Cursor REAL — ZERO PocketTasks mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  admitsActiveCycleArtifactMaterializationContinuation,
  hasCanonicalArtifactApplicableUnsatisfied,
  hasCurrentRequireArtifactObligation,
  resolveActiveCycleGovernedContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import {
  recordObligationPolicyNoGovernedEffects,
  recordObligationPolicyRequireArtifact,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
} from "@/lib/oa/decision";
import {
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
} from "@/lib/oa/cycle";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";

const SANDBOX_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox/",
} as const;

const PATHLESS_NATURAL = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.
La spécification consolidée inclut : statuts A / B / C ; attribut optionnel P ; attribut optionnel D ; persistance locale ; règle Z hors périmètre.`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function materializationAnalysis(
  overrides: {
    continuationKind?: "active_cycle_artifact_materialization" | null;
    rephrasedRequest?: string;
    objective?: string;
  } = {},
) {
  return validateIntentAnalysisPayload({
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
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind:
      overrides.continuationKind === undefined
        ? "active_cycle_artifact_materialization"
        : overrides.continuationKind,
    artifactMaterializationOperation: "cursor.docs_write.apply",
    objective: overrides.objective ?? "Matérialiser le livrable requis du cycle actif",
    scope: "docs_write borné — cycle actif",
    rephrasedRequest:
      overrides.rephrasedRequest ??
      "Matérialisation de la spécification comme livrable de référence du cycle",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: null,
      scopeIn: [],
      scopeOut: [],
      expectedOutputs: [],
      requiredCapabilities: [],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: null,
      artifactBrief: PATHLESS_NATURAL.slice(0, 240),
      contentRequirements: [PATHLESS_NATURAL.slice(0, 240)],
      exitRequirementKinds: [],
    },
  });
}

function projectDtoFromOverview(input: {
  projectId: string;
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
  activeCycleInstanceId: string | null;
}): ProjectAssistantContextDto {
  return {
    projectId: input.projectId,
    name: input.overview.project.name,
    shortReference: null,
    objective: input.overview.project.objective,
    contextSummary: "bridge corr-01",
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
    activeCycleInstanceId: input.activeCycleInstanceId,
    ckcResolutionRef: null,
  };
}

describe("ACTIVE-CYCLE ARTIFACT APPLICABILITY CONTINUATION BRIDGE CORR-01", () => {
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
    dbPath = tempProductDbPath("ac-artifact-bridge-corr01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "acbr" });
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

  async function seedActiveCycle(input: {
    suffix: string;
    cycleTypeId: string;
    withRepoBinding: boolean;
    withRequireArtifactPolicy: boolean;
    withNoGovernedEffects?: boolean;
  }): Promise<{ projectId: string; cycleInstanceId: string }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `AC bridge ${input.suffix}`,
      objective: "Applicability continuation bridge",
      context: "canonical Artifact APPLICABLE vs REQUIRE_ARTIFACT HD",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ACBR${input.suffix.toUpperCase()}`,
      idempotencyKey: `idem:acbr-${input.suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    await oa.cycleServices.createInitialTrajectory.execute({
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

    const cycleInstanceId = `cyc:acbr-${input.suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: input.cycleTypeId,
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
      issuedAt: "2026-09-27T09:00:00.000Z",
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

    if (input.withRepoBinding) {
      const bound = await runtime.setProjectRepositoryBinding({
        projectId,
        ...SANDBOX_BINDING,
      });
      expect(bound.ok).toBe(true);
    }

    if (input.withNoGovernedEffects) {
      const noFx = await recordObligationPolicyNoGovernedEffects({
        projectId,
        cycleInstanceId,
        cycleServices: oa.cycleServices,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => "2026-09-27T09:01:00.000Z",
      });
      expect(noFx.ok).toBe(true);
    }

    if (input.withRequireArtifactPolicy) {
      const obligation = await recordObligationPolicyRequireArtifact({
        projectId,
        cycleInstanceId,
        cycleServices: oa.cycleServices,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => "2026-09-27T09:02:00.000Z",
      });
      expect(obligation.ok).toBe(true);
    }

    return { projectId, cycleInstanceId };
  }

  async function countCycles(projectId: string): Promise<number> {
    return (await runtime.oa!.cycleServices.cycles.listByProject(projectId))
      .length;
  }

  async function countRequireArtifactHd(
    projectId: string,
    cycleInstanceId: string,
  ): Promise<number> {
    const decisions =
      await runtime.oa!.decisionServices.decisions.listByProject(projectId);
    const subject = obligationPolicySubjectFor(cycleInstanceId);
    return decisions.filter(
      (d) =>
        d.subject === subject &&
        d.selectedOptionId === OBLIGATION_POLICY_REQUIRE_ARTIFACT,
    ).length;
  }

  it("unit helpers — APPLICABLE admits; UNKNOWN/N/A do not without policy", () => {
    expect(
      hasCanonicalArtifactApplicableUnsatisfied({
        obligations: [
          { family: "artifact", status: "MISSING", applicability: "APPLICABLE" },
        ],
      }),
    ).toBe(true);
    expect(
      hasCanonicalArtifactApplicableUnsatisfied({
        obligations: [
          { family: "artifact", status: "SATISFIED", applicability: "APPLICABLE" },
        ],
      }),
    ).toBe(false);
    expect(
      hasCanonicalArtifactApplicableUnsatisfied({
        obligations: [
          { family: "artifact", status: "MISSING", applicability: "UNKNOWN" },
        ],
      }),
    ).toBe(false);

    expect(
      admitsActiveCycleArtifactMaterializationContinuation({
        activeCycleInstanceId: "cyc:x",
        decisions: [],
        assessment: {
          obligations: [
            {
              family: "artifact",
              status: "MISSING",
              applicability: "APPLICABLE",
            },
          ],
        },
      }),
    ).toBe(true);

    const policyHd = {
      decisionId: "hd:req",
      projectId: "p",
      subject: obligationPolicySubjectFor("cyc:x"),
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
      status: "accepted",
      createdAt: "2026-09-27T09:00:00.000Z",
    } as unknown as HumanDecision;
    expect(
      hasCurrentRequireArtifactObligation({
        activeCycleInstanceId: "cyc:x",
        decisions: [policyHd],
      }),
    ).toBe(true);
    expect(
      admitsActiveCycleArtifactMaterializationContinuation({
        activeCycleInstanceId: "cyc:x",
        decisions: [policyHd],
        assessment: {
          obligations: [
            {
              family: "artifact",
              status: "MISSING",
              applicability: "UNKNOWN",
            },
          ],
        },
      }),
    ).toBe(true);
  });

  it("T1 — APPLICABLE via snapshot + no policy HD → continuation; ZERO new cycle", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t1",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    expect(await countRequireArtifactHd(projectId, cycleInstanceId)).toBe(0);

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("APPLICABLE");
    expect(art?.status).not.toBe("SATISFIED");

    const cyclesBefore = await countCycles(projectId);
    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(await countRequireArtifactHd(projectId, cycleInstanceId)).toBe(0);
    expect(send.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
    expect(send.text).not.toMatch(/nouveau cycle est proposé/i);

    if (send.f2?.turnKind === "f2_clarification") {
      expect(send.f2.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    } else {
      expect(send.f2?.turnKind).toBe("f2_proposal");
      expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
      expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
      expect(send.f2?.proposal?.requestedOperation).toBe(
        F2_ARTIFACT_MATERIALIZATION_OPERATION,
      );
    }
  });

  it("T2 — before Proposal HD: ZERO materialization HD inventée; ZERO EC", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t2",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const oa = runtime.oa!;
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;

    expect(send.f2?.decision).toBeNull();
    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;
    expect(hdAfter).toBe(hdBefore);
    expect(await countRequireArtifactHd(projectId, cycleInstanceId)).toBe(0);

    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
      const contracts =
        await oa.executionContractServices.contracts.listByProject(projectId);
      expect(contracts.length).toBe(0);
    }
  });

  it("T3 — Proposal is DECISION_REQUIRED (Proposal ≠ Decision); EC still gated", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t3",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");

    const send = await projectAssistantSendAction({
      projectId,
      content: `${PATHLESS_NATURAL}\nN'exécute rien : prépare la proposition pour ma décision.`,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    // Clarification or Proposal — never an invented Decision / EC.
    expect(send.f2?.decision).toBeNull();
    if (send.f2?.turnKind === "f2_proposal") {
      expect(send.f2.proposal?.status).toBe("DECISION_REQUIRED");
    }
    const contracts =
      await runtime.oa!.executionContractServices.contracts.listByProject(
        projectId,
      );
    expect(contracts.length).toBe(0);
  });

  it("T4 — UNKNOWN Artifact + no policy → fail-closed no_require_artifact", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t4",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability === "APPLICABLE").toBe(false);

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_require_artifact");
    }
    expect(await countCycles(projectId)).toBe(1);
  });

  it("T5 — NOT_APPLICABLE + no REQUIRE_ARTIFACT → fail-closed", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t5",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: false,
      withNoGovernedEffects: true,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("NOT_APPLICABLE");

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_require_artifact");
    }
  });

  it("T6 — NOT_APPLICABLE then explicit REQUIRE_ARTIFACT → continuation (historical)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t6",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: true,
      withNoGovernedEffects: true,
    });
    // withNoGovernedEffects then withRequireArtifact — order in seed applies
    // no-governed first then require. Require should re-open Artifact.
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("APPLICABLE");

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
  });

  it("T7 — APPLICABLE + SATISFIED → artifact_already_satisfied", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t7",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = runtime.oa!;

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          pilotLifecycle: {
            ...oa.cycleServices.pilotLifecycle,
            assess: async () => ({
              ok: true as const,
              assessment: {
                obligations: [
                  {
                    family: "artifact",
                    status: "SATISFIED",
                    applicability: "APPLICABLE",
                  },
                ],
              },
            }),
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("artifact_already_satisfied");
    }
  });

  it("T8 — assessment read failure → fail-closed; ZERO HD/EC/cycle", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t8",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = runtime.oa!;
    const cyclesBefore = await countCycles(projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          pilotLifecycle: {
            ...oa.cycleServices.pilotLifecycle,
            assess: async () => {
              throw new Error("assess boom");
            },
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("lifecycle_assess_failed");
    }
    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
  });

  it("T9 — old-cycle REQUIRE_ARTIFACT only + current UNKNOWN → blocked", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t9",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: false,
    });
    const oa = runtime.oa!;
    const oldCycleId = `cyc:acbr-old-t9`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId: oldCycleId,
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

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const oldOnly: HumanDecision[] = [
      {
        decisionId: "hd:old-require",
        projectId,
        subject: obligationPolicySubjectFor(oldCycleId),
        selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        status: "accepted",
        createdAt: "2026-09-27T08:00:00.000Z",
      } as unknown as HumanDecision,
    ];

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        decisionServices: {
          ...oa.decisionServices,
          decisions: {
            ...oa.decisionServices.decisions,
            listByProject: async () => oldOnly,
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_require_artifact");
    }
  });

  it("T10 — #532 regression: pathless natural + APPLICABLE → never NEW_CYCLE", async () => {
    const { projectId } = await seedActiveCycle({
      suffix: "t10",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    expect(send.text).not.toMatch(/nouveau cycle est proposé/i);
    expect(await countCycles(projectId)).toBe(1);
  });

  it("T11 — vague talk does not open materialization", async () => {
    const { projectId } = await seedActiveCycle({
      suffix: "t11",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: VAGUE_TALK,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    expect(send.f2?.proposal ?? null).toBeNull();
    expect(send.f2?.turnKind === "f2_proposal").toBe(false);
  });

  it("T12 — no active cycle → blocked; ZERO createCycle", async () => {
    const created = await runtime.createProject({
      name: "AC bridge t12",
      objective: "no active cycle",
      context: "bridge",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "ACBRT12",
      idempotencyKey: "idem:acbr-t12",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const createSpy = vi.spyOn(runtime.oa!.cycleServices.createCycle, "execute");
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: null,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_active_cycle");
    }
    expect(createSpy).not.toHaveBeenCalled();
    createSpy.mockRestore();
  });
});

```

---

## Fichiers modifiés — diffs complets

### Diff `activeCycleGovernedContinuation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index 5a4901e2..b1fc520a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -5,7 +5,11 @@
  *
  * Server-owned, fail-closed. No parallel planner / persistence.
  * continuationKind / executionIntent remain NON-AUTHORITATIVE hints —
- * durable active-cycle + CURRENT REQUIRE_ARTIFACT authorize the branch.
+ * durable active-cycle + (CURRENT REQUIRE_ARTIFACT OR canonical Artifact
+ * APPLICABLE & not SATISFIED) admit the Proposal/clarification branch.
+ * APPLICABILITY ≠ execution authority: Proposal HumanDecision remains
+ * required before any ExecutionContract (ACTIVE-CYCLE-ARTIFACT-
+ * APPLICABILITY-CONTINUATION-BRIDGE-CORR-01).
  *
  * CR-07-01..06 review fixes:
  * - pathRoot bounds effective scopeIn (never Nora-widened)
@@ -271,7 +275,9 @@ export function hasNaturalActiveCycleDeliverableMaterializationSignal(
 /**
  * Enter Artifact-continuation handling when either the explicit hint is set
  * OR a natural active-cycle deliverable materialization signal is present.
- * Durable active-cycle + REQUIRE_ARTIFACT remain the authority.
+ * Durable active-cycle + (REQUIRE_ARTIFACT policy OR canonical Artifact
+ * APPLICABLE unsatisfied) remain the Proposal-path admission truths —
+ * never execution authority.
  */
 export function shouldEnterActiveCycleArtifactContinuationHandling(
   analysis: IntentAnalysisDto,
@@ -405,6 +411,54 @@ function artifactObligationSatisfied(
   return art?.status === "SATISFIED";
 }

+/**
+ * CORR-BRIDGE-01 — canonical Artifact is already required (APPLICABLE) and not
+ * yet satisfied. Sufficient to open Proposal/clarification on the active cycle;
+ * NEVER grants ExecutionContract / HumanDecision authority by itself.
+ */
+export function hasCanonicalArtifactApplicableUnsatisfied(assessment: {
+  obligations: ReadonlyArray<{
+    family: string;
+    status: string;
+    applicability?: string;
+  }>;
+} | null): boolean {
+  if (!assessment) return false;
+  const art = assessment.obligations.find((o) => o.family === "artifact");
+  if (!art) return false;
+  if (art.applicability !== "APPLICABLE") return false;
+  return art.status !== "SATISFIED";
+}
+
+/**
+ * Admit active-cycle Artifact continuation into Proposal/clarification when
+ * either a CURRENT REQUIRE_ARTIFACT policy HD exists (historical path for
+ * UNKNOWN/NOT_APPLICABLE → required) OR the canonical assessment already
+ * marks Artifact APPLICABLE and not SATISFIED (F14 obligation snapshot).
+ * Does NOT invent HD; does NOT authorize EC.
+ */
+export function admitsActiveCycleArtifactMaterializationContinuation(input: {
+  activeCycleInstanceId: string;
+  decisions: readonly HumanDecision[];
+  assessment: {
+    obligations: ReadonlyArray<{
+      family: string;
+      status: string;
+      applicability?: string;
+    }>;
+  } | null;
+}): boolean {
+  if (
+    hasCurrentRequireArtifactObligation({
+      activeCycleInstanceId: input.activeCycleInstanceId,
+      decisions: input.decisions,
+    })
+  ) {
+    return true;
+  }
+  return hasCanonicalArtifactApplicableUnsatisfied(input.assessment);
+}
+
 export type ActiveCycleContinuationResolution =
   | {
       readonly mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION";
@@ -477,17 +531,11 @@ export async function resolveActiveCycleGovernedContinuation(input: {
   const decisions = await input.oa.decisionServices.decisions.listByProject(
     input.project.projectId,
   );
-  if (
-    !hasCurrentRequireArtifactObligation({
-      activeCycleInstanceId: activeId,
-      decisions,
-    })
-  ) {
-    return blocked("no_require_artifact", activeCycle);
-  }

   // CR-07-05 — assess failure is FAIL-CLOSED (not "probably missing").
   // Evidence repository throws during assess must not escape as an uncaught error.
+  // Assess BEFORE the obligation gate so canonical Artifact APPLICABLE (F14
+  // snapshot) can admit continuation without a redundant REQUIRE_ARTIFACT HD.
   let assessed: Awaited<
     ReturnType<typeof input.oa.cycleServices.pilotLifecycle.assess>
   >;
@@ -506,6 +554,19 @@ export async function resolveActiveCycleGovernedContinuation(input: {
     return blocked("artifact_already_satisfied", activeCycle);
   }

+  // CORR-BRIDGE-01 — CURRENT REQUIRE_ARTIFACT HD OR canonical APPLICABLE+missing.
+  // UNKNOWN / NOT_APPLICABLE without policy HD → fail-closed no_require_artifact.
+  // Applicability never invents HD and never authorizes EC.
+  if (
+    !admitsActiveCycleArtifactMaterializationContinuation({
+      activeCycleInstanceId: activeId,
+      decisions,
+      assessment: assessed.assessment,
+    })
+  ) {
+    return blocked("no_require_artifact", activeCycle);
+  }
+
   // Authoritative Project.repositoryBinding — never invent a second SoT.
   let repositoryBinding: ProjectRepositoryBinding | null = null;
   let projectWorkspaceKey: string | undefined;

```

### Contenu exploitable — helpers (post-correction)

```typescript
  if (!assessment) return false;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  return art?.status === "SATISFIED";
}

/**
 * CORR-BRIDGE-01 — canonical Artifact is already required (APPLICABLE) and not
 * yet satisfied. Sufficient to open Proposal/clarification on the active cycle;
 * NEVER grants ExecutionContract / HumanDecision authority by itself.
 */
export function hasCanonicalArtifactApplicableUnsatisfied(assessment: {
  obligations: ReadonlyArray<{
    family: string;
    status: string;
    applicability?: string;
  }>;
} | null): boolean {
  if (!assessment) return false;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art) return false;
  if (art.applicability !== "APPLICABLE") return false;
  return art.status !== "SATISFIED";
}

/**
 * Admit active-cycle Artifact continuation into Proposal/clarification when
 * either a CURRENT REQUIRE_ARTIFACT policy HD exists (historical path for
 * UNKNOWN/NOT_APPLICABLE → required) OR the canonical assessment already
 * marks Artifact APPLICABLE and not SATISFIED (F14 obligation snapshot).
 * Does NOT invent HD; does NOT authorize EC.
 */
export function admitsActiveCycleArtifactMaterializationContinuation(input: {
  activeCycleInstanceId: string;
  decisions: readonly HumanDecision[];
  assessment: {
    obligations: ReadonlyArray<{
      family: string;
      status: string;
      applicability?: string;
    }>;
  } | null;
}): boolean {
  if (
    hasCurrentRequireArtifactObligation({
      activeCycleInstanceId: input.activeCycleInstanceId,
      decisions: input.decisions,
    })
  ) {
    return true;
  }
  return hasCanonicalArtifactApplicableUnsatisfied(input.assessment);
}

export type ActiveCycleContinuationResolution =
  | {
      readonly mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION";
      readonly activeCycle: CycleInstance;
```

### Contenu exploitable — gate resolve (post-correction)

```typescript
  });
  if (!cycleLoad.ok) {
    return blocked("cycle_load_failed");
  }
  const activeCycle = cycleLoad.cycle;
  if (activeCycle.projectId !== input.project.projectId) {
    return blocked("cycle_load_failed", activeCycle);
  }
  if (activeCycle.status !== "active") {
    return blocked("active_cycle_not_active", activeCycle);
  }

  const decisions = await input.oa.decisionServices.decisions.listByProject(
    input.project.projectId,
  );

  // CR-07-05 — assess failure is FAIL-CLOSED (not "probably missing").
  // Evidence repository throws during assess must not escape as an uncaught error.
  // Assess BEFORE the obligation gate so canonical Artifact APPLICABLE (F14
  // snapshot) can admit continuation without a redundant REQUIRE_ARTIFACT HD.
  let assessed: Awaited<
    ReturnType<typeof input.oa.cycleServices.pilotLifecycle.assess>
  >;
  try {
    assessed = await input.oa.cycleServices.pilotLifecycle.assess({
      cycleInstanceId: activeId,
      projectId: input.project.projectId,
    });
  } catch {
    return blocked("lifecycle_assess_failed", activeCycle);
  }
  if (!assessed.ok) {
    return blocked("lifecycle_assess_failed", activeCycle);
  }
  if (artifactObligationSatisfied(assessed.assessment)) {
    return blocked("artifact_already_satisfied", activeCycle);
  }

  // CORR-BRIDGE-01 — CURRENT REQUIRE_ARTIFACT HD OR canonical APPLICABLE+missing.
  // UNKNOWN / NOT_APPLICABLE without policy HD → fail-closed no_require_artifact.
  // Applicability never invents HD and never authorizes EC.
  if (
    !admitsActiveCycleArtifactMaterializationContinuation({
      activeCycleInstanceId: activeId,
      decisions,
      assessment: assessed.assessment,
    })
  ) {
    return blocked("no_require_artifact", activeCycle);
  }

  // Authoritative Project.repositoryBinding — never invent a second SoT.
  let repositoryBinding: ProjectRepositoryBinding | null = null;
  let projectWorkspaceKey: string | undefined;
  const proj = await input.oa.projectServices.getProject.execute({
    projectId: input.project.projectId,
  });
```

### Diff `corrProof07.artifactMaterialization.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
index 5ce00b06..2434330d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
@@ -631,7 +631,10 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
     }

     // Contamination case: materialization intent + active id present, but ONLY
-    // old-cycle REQUIRE_ARTIFACT exists → BLOCKED (never silent NEW_CYCLE).
+    // old-cycle REQUIRE_ARTIFACT exists AND current Artifact is not canonically
+    // APPLICABLE → BLOCKED (never silent NEW_CYCLE; old HD does not contaminate).
+    // CORR-BRIDGE-01: if current assessment were APPLICABLE, continuation would
+    // be admitted without any REQUIRE_ARTIFACT HD — that is intentional.
     const contaminated = await resolveActiveCycleGovernedContinuation({
       project,
       analysis,
@@ -642,6 +645,24 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
             listByProject: async () => oldOnlyDecisions,
           },
         },
+        cycleServices: {
+          ...oa.cycleServices,
+          pilotLifecycle: {
+            ...oa.cycleServices.pilotLifecycle,
+            assess: async () => ({
+              ok: true as const,
+              assessment: {
+                obligations: [
+                  {
+                    family: "artifact",
+                    status: "MISSING",
+                    applicability: "UNKNOWN",
+                  },
+                ],
+              },
+            }),
+          },
+        },
       },
     });
     expect(contaminated.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
@@ -1264,10 +1285,11 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
     }
   });

-  it("CR05-B — contaminated old-only REQUIRE_ARTIFACT → BLOCKED no_require_artifact", async () => {
+  it("CR05-B — contaminated old-only REQUIRE_ARTIFACT + current UNKNOWN → BLOCKED no_require_artifact", async () => {
     const overview = await getRuntimeApplicationService().getProject(projectId);
     expect(overview.ok).toBe(true);
     if (!overview.ok) return;
+    const oa = getRuntimeApplicationService().oa!;
     const oldCycleId = `cyc:corr07-cr05b-${Date.now()}`;
     const oldOnlyDecisions: HumanDecision[] = [
       {
@@ -1287,12 +1309,30 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
       }),
       analysis: materializationAnalysis(),
       oa: {
-        ...getRuntimeApplicationService().oa!,
+        ...oa,
         decisionServices: {
           decisions: {
             listByProject: async () => oldOnlyDecisions,
           },
         },
+        cycleServices: {
+          ...oa.cycleServices,
+          pilotLifecycle: {
+            ...oa.cycleServices.pilotLifecycle,
+            assess: async () => ({
+              ok: true as const,
+              assessment: {
+                obligations: [
+                  {
+                    family: "artifact",
+                    status: "MISSING",
+                    applicability: "UNKNOWN",
+                  },
+                ],
+              },
+            }),
+          },
+        },
       },
     });
     expect(contaminated.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");

```

Justification corrProof07 : les cas « old-only REQUIRE_ARTIFACT » montraient encore
Artifact APPLICABLE via assessment réel (policy active du beforeEach). Sous CORR-BRIDGE-01,
APPLICABLE canonique admet correctement la continuation sans policy dans la liste mockée.
Les tests de contamination mockent désormais aussi `assess` → Artifact UNKNOWN pour
prouver que l'ancien HD ne contamine pas lorsque le current n'est pas APPLICABLE (T9).

---

## Tests T1–T12

| ID | Scénario | Résultat |
|---|---|---|
| T1 | APPLICABLE snapshot + no policy HD → continuation ; ZERO new cycle | PASS |
| T2 | Avant Proposal HD : ZERO HD inventée ; ZERO EC | PASS |
| T3 | Proposal DECISION_REQUIRED ; EC gated | PASS |
| T4 | UNKNOWN + no policy → no_require_artifact | PASS |
| T5 | NOT_APPLICABLE + no policy → blocked | PASS |
| T6 | N/A puis explicit REQUIRE_ARTIFACT → continuation | PASS |
| T7 | APPLICABLE + SATISFIED → artifact_already_satisfied | PASS |
| T8 | assess failure → fail-closed ; ZERO HD/EC/cycle | PASS |
| T9 | old-cycle REQUIRE_ARTIFACT only + current UNKNOWN → blocked | PASS |
| T10 | #532 pathless + APPLICABLE → jamais NEW_CYCLE | PASS |
| T11 | vague talk → pas de matérialisation | PASS |
| T12 | no active cycle → blocked ; ZERO createCycle | PASS |
| unit helpers | APPLICABLE admits ; UNKNOWN sans policy refuse | PASS |

### Validations

```
npm test -- bridge corr01 → 13 PASS
npm test -- corrProof06/07 + continuity + lifecycle + GCEC → 116 PASS
npm run typecheck → PASS
npm run lint → PASS
npm test (suite complète) → Test Files 443 passed | 17 skipped ; Tests 4900 passed | 137 skipped
git diff --check → clean
```

Build Next non rejoué : delta logique serveur + tests ; typecheck+lint+suite complète suffisent pour profil Critical.

---

## Fake / Real Qualification

- **applicable :** oui
- **gap principal :** serveur/domain (obligation Artifact déjà APPLICABLE)
- **Fake :** FakeConversationProvider + tests d0
- **parité post-analyse :** mêmes truths serveur (active cycle, assessment, decisions, resolver, Proposal gating)
- **niveau ce cycle :** **DETERMINISTIC PROVEN**
- **hors scope :** REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN / READY FOR REAL
- **claims autorisés :** Artifact APPLICABLE peut ouvrir Proposal path sans policy HD redondante ; EC reste gated par Proposal HD
- **claims interdits :** APPLICABLE = execution authorized ; READY FOR REAL ; Cognitive Completion ; Runtime v3 ADOPTED

---

## Risques / réserves

1. Message `no_require_artifact` reste orienté « policy HD » pour UNKNOWN/N/A — wording UI non modifié (KEEP) ; acceptable car fail-closed path seulement.
2. Robustesse REAL linguistique hors scope (héritée #532).
3. TEMP-GCEC-F14-BIND-01 : snapshot on-demand — non modifié ici ; correction consomme l'assessment canonique existant.

---

## Décisions Morris requises

1. GO commit branche corrective (non consommé).
2. GO push / PR (interdit ici).
3. Reprise PocketTasks même Project / cycle après intégration → Proposal → HD → EC.
4. Bounded REAL optionnel (cycle distinct).

---

## Review Handoff

- Mode : publish-in-cycle L3 borné
- Branche : `sfia/review-handoff`
- Canonique : `sfia-review-handoff/latest-chatgpt-review.md`
- Commit attendu : `docs(review-handoff): publish artifact applicability continuation bridge review`
- Source : `.tmp-sfia-review/chatgpt-review.md`

## Instruction ChatGPT

Avant réponse à Morris, lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`
et vérifier macro, HEAD/base, root cause, fichiers, T1–T12, séparation Applicability/Authority,
ZERO auto-HD, ZERO EC avant Proposal HD, UNKNOWN fail-closed, policy historique, verdict, remote.

---

## Verdict

**READY FOR COMMIT — ARTIFACT APPLICABILITY CONTINUATION BRIDGE CORRECTION — CONFIRMED**

- DETERMINISTIC PROVEN
- Pas de commit projet dans ce cycle
- Pas de READY FOR REAL
- Runtime v3 NON ADOPTED
