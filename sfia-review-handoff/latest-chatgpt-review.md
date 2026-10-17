# Review Pack FULL — MATERIALITY-BLOCK-01 regularization pass 02

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 11:07:26 CEST |
| **Pass** | TARGETED REGULARIZATION 02 |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Branche** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Product dirty FP (excl. .tmp)** | `ae0f68e69d3733c7f7e76c62bee9a2c6c2063248a26081af76b3ca272bf58a4a` |
| **Handoff précédent** | `17a75636` |
| **prepareGenericExecutionContractDraft.ts** | **NON MODIFIÉ** dans ce pass |
| **artifactTargetRouting.ts** | **NON MODIFIÉ** dans ce pass (réutilisation `isSafeArtifactFileNameLeaf`) |
| **Verdict Cursor** | **REGULARIZATION COMPLETE — DETERMINISTIC PASS — READY FOR CHATGPT REVIEW** |

---

## 1. Local Git Truth Check

### Initial
- toplevel / branch / HEAD `b4c1d862` / main `896ff59c` cohérents
- staged vide
- dirty préexistant M-HD + MATERIALITY-BLOCK-01 préservé
- Review Pack `.tmp-sfia-review/chatgpt-review.md` réinitialisé

### Final
- HEAD / branche inchangés
- staged vide
- HQA SQLite non mutée
- aucun commit/push Product

---

## 2. Sources lues

- Handoff `17a75636:sfia-review-handoff/latest-chatgpt-review.md`
- `resolveGenericPrepareDocumentaryTarget.ts` (local dirty)
- `artifactTargetRouting.ts` (`isSafeArtifactFileNameLeaf`, leaf convention)
- `prepareGenericExecutionContractDraft.ts` (inspecté, non modifié)
- `collectConcreteMissionPaths` / `enrichExecutionIntentFromBinding`
- Suite MB01 existante

---

## 3. Deux défauts (revue ChatGPT)

### Défaut 1 — nom de fichier seul
`executionIntent.targetPath = "note-de-cadrage.md"` était traité comme WHERE concret par `collectConcreteMissionPaths` (extension `.md`), déclenchant `already_concrete` et **court-circuitant** la composition Product `pathRoot/01-cadrage/…`.

### Défaut 2 — fausse classification documentaire
« Créer un fichier de configuration TypeScript dans le dépôt Git » matchait verbe + `fichier` + Git → `isGenericPrepareDocumentaryMission === true`.

---

## 4. Correction appliquée

### Fichier modifié uniquement (Product)
`projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts`

1. **Bare Markdown leaf** : si tous les chemins collectés sont des feuilles `.md` sûres sans `/`, **ne pas** prendre `already_concrete` — poursuivre `enrichExecutionIntentFromBinding` / cycle workspace.
   - `../secret.md` (contient `/`) reste `already_concrete` → fail-closed materiality ; **aucun** salvage basename.
   - `scopeIn` avec répertoire + leaf → pas leaf-only → `already_concrete` conservé.

2. **Classification documentaire** :
   - exclure typescript/javascript/config/code/applicatif sans cue documentaire explicite ;
   - `fichier` seul insuffisant — exige `fichier` + (markdown|md|document|note|cadrage) ou cues documentaires explicites.

Helpers exportés : `isBareSafeMarkdownLeafPath`, `concretePathsAreOnlyBareMarkdownLeaves`.

### Fichier test modifié
`p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` — tests D1–D4.

### Non modifié
- `prepareGenericExecutionContractDraft.ts`
- `artifactTargetRouting.ts` (ce pass)
- M-HD / der16 assertions

---

## 5. DIFF / CONTENU COMPLET — resolveGenericPrepareDocumentaryTarget.ts

Fichier intégral post-régularisation (aucun ellipsis) :

```typescript
/**
 * MATERIALITY-BLOCK-01 — bind Generic PREPARE documentary missions to the
 * existing Product artifact target routing (pathRoot + cycle workspace).
 *
 * Reuses enrichExecutionIntentFromBinding / resolveArtifactTargetUnderCycleWorkspace.
 * Does NOT invent Git identity, widen pathRoot, authorize, or execute.
 * Nora path/filename proposals remain NON-AUTHORITATIVE candidates (D-PC-09).
 */

import { enrichExecutionIntentFromBinding } from "../f2/activeCycleGovernedContinuation";
import type { IntentAnalysisDto } from "../f2/types";
import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
import {
  extractArtifactFileNameCandidate,
  isSafeArtifactFileNameLeaf,
  resolveNonAuthoritativeDocumentaryArtifactLeafCandidate,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { collectConcreteMissionPaths } from "./resolveAuthoritativeProductMateriality";

/**
 * Bare safe Markdown leaf (ex. note-de-cadrage.md) is a Nora filename candidate,
 * not an authoritative repo-relative WHERE. Directory paths and traversal
 * (../x.md) keep the already_concrete / fail-closed path.
 */
export function isBareSafeMarkdownLeafPath(raw: string): boolean {
  return isSafeArtifactFileNameLeaf(raw.trim());
}

/**
 * True when every collected "concrete" path is only a bare .md leaf.
 * Mixed sets (leaf + scopeIn directory, or any path with `/`) are NOT leaf-only.
 */
export function concretePathsAreOnlyBareMarkdownLeaves(
  paths: readonly string[],
): boolean {
  if (paths.length === 0) return false;
  return paths.every((p) => isBareSafeMarkdownLeafPath(p));
}

export type GenericPrepareDocumentaryTargetResolution =
  | {
      readonly kind: "not_documentary";
      readonly analysis: IntentAnalysisDto;
      readonly resolvedAuthoritativeTargetPath: null;
      readonly documentaryTargetResolution: "not_applicable";
    }
  | {
      readonly kind: "already_concrete";
      readonly analysis: IntentAnalysisDto;
      readonly resolvedAuthoritativeTargetPath: string | null;
      readonly documentaryTargetResolution:
        | "not_applicable"
        | "unresolved_nora_candidate";
    }
  | {
      readonly kind: "resolved";
      readonly analysis: IntentAnalysisDto;
      readonly resolvedAuthoritativeTargetPath: string;
      readonly cycleWorkspaceRoot: string | null;
      readonly artifactFileName: string;
      readonly documentaryTargetResolution: "resolved_product";
      readonly proposedTargetPath: string | null;
      readonly proposedArtifactFileName: string | null;
    }
  | {
      readonly kind: "needs_clarification";
      readonly analysis: IntentAnalysisDto;
      readonly code: string;
      readonly message: string;
      readonly documentaryTargetResolution: "unresolved_needs_clarification";
      readonly resolvedAuthoritativeTargetPath: null;
    }
  | {
      readonly kind: "blocked";
      readonly analysis: IntentAnalysisDto;
      readonly code: string;
      readonly message: string;
      readonly documentaryTargetResolution: "blocked";
      readonly resolvedAuthoritativeTargetPath: null;
    };

function normalizeHaystack(
  parts: readonly (string | null | undefined)[],
): string {
  return parts
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
}

/**
 * Documentary eligibility for Generic PREPARE destination composition.
 * Broader than ACGC Artifact-continuation verbs (includes « réaliser ») and
 * includes expectedOutcome/scope — without reclassifying code-like missions.
 */
export function isGenericPrepareDocumentaryMission(
  analysis: IntentAnalysisDto,
): boolean {
  if (!analysis.parseOk) return false;
  if (analysis.executionIntent?.intentKind === "docs_write") return true;

  const hay = normalizeHaystack([
    analysis.objective,
    analysis.rephrasedRequest,
    analysis.expectedOutcome,
    analysis.scope,
    analysis.executionIntent?.artifactBrief,
    analysis.executionIntent?.targetPath,
    ...(analysis.executionIntent?.contentRequirements ?? []),
  ]);
  if (!hay.trim()) return false;
  if (
    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer|explique-moi)\b/.test(
      hay,
    ) ||
    /\?\s*$/.test(hay.trim())
  ) {
    return false;
  }
  // Code / refactor / applicative config stay non-documentary even with a repo
  // frame. Pending-offer rebuild may set intentKind "other" while text remains
  // documentary — do not treat intentKind=other as an automatic non-doc gate.
  const hasExplicitDocumentaryCue =
    /\b(document|note|markdown|\.md\b|specification|cahier|memoire)\b/.test(
      hay,
    ) ||
    (/\blivrable\b/.test(hay) &&
      /\b(documentaire|cadrage|reference|markdown)\b/.test(hay));
  if (
    /\b(refactor|refactore|module|fonction|classe|api|endpoint|service|compil|typescript|javascript|\.ts\b|\.tsx\b|\.js\b|\.jsx\b|\.json\b|\.ya?ml\b|configuration|config(?:uration)?|source|code|applicatif|tsconfig|package\.json)\b/.test(
      hay,
    ) &&
    !hasExplicitDocumentaryCue
  ) {
    return false;
  }

  const productionVerb =
    /\bmaterialis/.test(hay) ||
    /\b(realiser|produire|produis|ecrire|rediger|deposer|creer|prepare|preparer|consolider|capitaliser)\b/.test(
      hay,
    );
  // "fichier" alone is insufficient (avoids TypeScript/config false positives);
  // require a documentary cue, or fichier + markdown/note/document/cadrage.
  const documentaryObject =
    hasExplicitDocumentaryCue ||
    (/\bfichier\b/.test(hay) &&
      /\b(markdown|\.md\b|document|note|cadrage)\b/.test(hay));
  const repoOrDeliverableFrame =
    /\b(depot|repo|repository|git|workspace|projet|cycle|emplacement|reference)\b/.test(
      hay,
    ) || Boolean(analysis.executionIntent?.targetPath?.trim());

  return productionVerb && documentaryObject && repoOrDeliverableFrame;
}

function leafFromAnalysis(analysis: IntentAnalysisDto): string | null {
  const ei = analysis.executionIntent;
  return extractArtifactFileNameCandidate({
    artifactFileName: ei?.artifactFileName,
    targetPath: ei?.targetPath,
  });
}

/**
 * When documentary WHERE is absent, compose a server-owned destination under
 * Project.pathRoot + active cycle repositoryWorkspaceSegment before materiality.
 */
export async function resolveGenericPrepareDocumentaryTarget(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
}): Promise<GenericPrepareDocumentaryTargetResolution> {
  const analysis = input.analysis;
  if (!isGenericPrepareDocumentaryMission(analysis)) {
    return {
      kind: "not_documentary",
      analysis,
      resolvedAuthoritativeTargetPath: null,
      documentaryTargetResolution: "not_applicable",
    };
  }

  const existingPaths = collectConcreteMissionPaths(analysis);
  // Bare safe Markdown leaf alone (note-de-cadrage.md) is NOT authoritative WHERE
  // — fall through to Product cycle-workspace composition. Paths with `/`
  // (including ../secret.md) keep already_concrete / fail-closed; never salvage
  // basename from a forbidden path. scopeIn directories stay concrete.
  if (
    existingPaths.length > 0 &&
    !concretePathsAreOnlyBareMarkdownLeaves(existingPaths)
  ) {
    return {
      kind: "already_concrete",
      analysis,
      resolvedAuthoritativeTargetPath: null,
      documentaryTargetResolution: analysis.executionIntent?.targetPath?.trim()
        ? "unresolved_nora_candidate"
        : "not_applicable",
    };
  }

  const projectResult = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!projectResult.ok) {
    return {
      kind: "blocked",
      analysis,
      code: "PRODUCT_PROJECT_UNAVAILABLE",
      message:
        "Projet Product indisponible — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const binding = projectResult.project.repositoryBinding ?? null;
  if (!binding?.identity?.trim() || !binding.pathRoot?.trim()) {
    return {
      kind: "blocked",
      analysis,
      code: "REPOSITORY_BINDING_UNAVAILABLE",
      message:
        "Repository binding Product absent ou incomplet — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const requestedCycleId = input.cycleInstanceId?.trim() || null;
  let activeCycleTypeId: string | null = null;
  if (!requestedCycleId) {
    // Pathless documentary under automatic workspaces requires an active cycle
    // segment (01-cadrage, …). Binding checked first; then cycle.
    return {
      kind: "needs_clarification",
      analysis,
      code: "DOCUMENTARY_TARGET_CYCLE_REQUIRED",
      message:
        "Mission documentaire sans chemin concret et sans cycle actif — précisez un fichier Markdown sûr ou activez le cycle de workspace avant préparation.",
      documentaryTargetResolution: "unresolved_needs_clarification",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const cycleLoad = await input.oa.cycleServices.getCycle.execute({
    cycleInstanceId: requestedCycleId,
  });
  if (!cycleLoad.ok || cycleLoad.cycle.projectId !== input.projectId) {
    return {
      kind: "blocked",
      analysis,
      code: "ACTIVE_CYCLE_INCOHERENT",
      message:
        "Cycle demandé incohérent avec le projet — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }
  if (cycleLoad.cycle.status !== "active") {
    return {
      kind: "blocked",
      analysis,
      code: "ACTIVE_CYCLE_NOT_ACTIVE",
      message:
        "Cycle référencé non actif — destination documentaire non résoluble (fail-closed).",
      documentaryTargetResolution: "blocked",
      resolvedAuthoritativeTargetPath: null,
    };
  }
  activeCycleTypeId = cycleLoad.cycle.cycleTypeId;

  const proposedTargetPath =
    analysis.executionIntent?.targetPath?.trim() || null;
  const proposedArtifactFileName =
    analysis.executionIntent?.artifactFileName?.trim() || null;

  const leaf =
    leafFromAnalysis(analysis) ||
    resolveNonAuthoritativeDocumentaryArtifactLeafCandidate({
      textFields: [
        analysis.objective,
        analysis.rephrasedRequest,
        analysis.expectedOutcome,
        analysis.scope,
        analysis.executionIntent?.artifactBrief,
      ],
      cycleTypeId: activeCycleTypeId,
    });

  if (!leaf && !proposedTargetPath) {
    return {
      kind: "needs_clarification",
      analysis,
      code: "DOCUMENTARY_TARGET_FILENAME_REQUIRED",
      message:
        "Mission documentaire sans fichier Markdown déterminable — indiquez un nom de fichier sûr (ex. note-de-cadrage.md) ; le serveur composera le chemin sous le workspace Project et le cycle actif.",
      documentaryTargetResolution: "unresolved_needs_clarification",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const seedIntent: ExecutionIntentPayload = {
    ...(analysis.executionIntent ?? {}),
    intentKind: "docs_write",
    artifactFileName: leaf ?? proposedArtifactFileName,
    targetPath: proposedTargetPath,
    // Candidate capability only — envelope still resolved at PREPARE.
    requiredCapabilities:
      analysis.executionIntent?.requiredCapabilities?.length
        ? analysis.executionIntent.requiredCapabilities
        : ["cap:cursor.docs_write"],
  };

  const enriched = enrichExecutionIntentFromBinding({
    analysisIntent: seedIntent,
    binding,
    activeCycleTypeId,
  });

  if (enriched.needsTargetClarification || !enriched.executionIntent?.targetPath) {
    return {
      kind: "needs_clarification",
      analysis: {
        ...analysis,
        executionIntent: enriched.executionIntent,
      },
      code: "DOCUMENTARY_TARGET_UNRESOLVED",
      message:
        "Destination documentaire non résoluble sous pathRoot/cycle workspace — chemin invalide, hors périmètre, ou clarification Pilote requise (fail-closed, aucun rewrite silencieux).",
      documentaryTargetResolution: "unresolved_needs_clarification",
      resolvedAuthoritativeTargetPath: null,
    };
  }

  const resolvedPath = enriched.executionIntent.targetPath.trim();
  const resolvedLeaf =
    enriched.executionIntent.artifactFileName?.trim() || leaf || "";

  return {
    kind: "resolved",
    analysis: {
      ...analysis,
      executionIntent: enriched.executionIntent,
    },
    resolvedAuthoritativeTargetPath: resolvedPath,
    cycleWorkspaceRoot:
      enriched.executionIntent.scopeIn?.[0]?.trim() || null,
    artifactFileName: resolvedLeaf,
    documentaryTargetResolution: "resolved_product",
    proposedTargetPath,
    proposedArtifactFileName,
  };
}

```

---

## 6. CONTENU COMPLET — p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts

Fichier intégral post-régularisation (inclut A–C + D1–D4) :

```typescript
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
import { resolveNonAuthoritativeDocumentaryArtifactLeafCandidate } from "@/lib/oa/project/domain/artifactTargetRouting";
import { collectConcreteMissionPaths } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
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
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot,
      },
    });
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
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("must refuse");
    expect(JSON.stringify(prep)).not.toMatch(/01-cadrage\/secret\.md/);
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
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("must refuse");
    expect(JSON.stringify(prep)).not.toMatch(/01-cadrage\/secret\.md/);
    expect(JSON.stringify(prep)).not.toMatch(/note-de-cadrage/);
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

```

---

## 7. artifactTargetRouting.ts / prepareGeneric — statut ce pass

- `artifactTargetRouting.ts` : **aucune modification dans ce pass**. Diff vs HEAD = uniquement l'ajout antérieur `resolveNonAuthoritativeDocumentaryArtifactLeafCandidate` (pass correction 01).
  Diff HEAD (inchangé ce pass, rappel) :

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts b/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
index bd48b2f7..511e8f22 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
@@ -443,5 +443,56 @@ export function assessProjectWorkspaceCollision(input: {
   return "ambiguous_collision";
 }

+/**
+ * Non-authoritative Markdown leaf cue from mission wording (D-PC-09).
+ * Used when Nora did not supply a safe leaf / in-bounds path.
+ * Not a task catalog — ambiguous wording returns null (clarification).
+ *
+ * Framing note convention (cyc:framing + note|document|livrable + cadrage):
+ * `note-de-cadrage.md` under the cycle workspace segment.
+ */
+export function resolveNonAuthoritativeDocumentaryArtifactLeafCandidate(input: {
+  readonly textFields: readonly (string | null | undefined)[];
+  readonly cycleTypeId?: string | null;
+}): string | null {
+  const hay = input.textFields
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
+  if (!hay.trim()) return null;
+
+  const framingCycle = input.cycleTypeId?.trim() === "cyc:framing";
+  if (
+    (framingCycle || /\bcadrage\b/.test(hay)) &&
+    /\b(note|document|livrable)\b/.test(hay) &&
+    /\bcadrage\b/.test(hay)
+  ) {
+    return "note-de-cadrage.md";
+  }
+  if (
+    /\bspecification\b/.test(hay) &&
+    /\bfonctionnelle\b/.test(hay)
+  ) {
+    return "specification-fonctionnelle.md";
+  }
+  if (/\bcahier\b/.test(hay) && /\bcharges\b/.test(hay)) {
+    return "cahier-des-charges.md";
+  }
+  if (/\bspecification\b/.test(hay)) {
+    return "specification.md";
+  }
+  if (/\blivrable\b/.test(hay) && /\breference\b/.test(hay)) {
+    return "livrable-de-reference.md";
+  }
+  return null;
+}
+
 /** Re-export normalize for callers that must share identical path rules. */
 export { normalizeRepoRelativePath as normalizeArtifactRepoRelativePath };

```

- `prepareGenericExecutionContractDraft.ts` : **aucune modification dans ce pass**.

---

## 8. Résultats des tests (rejoués)

### MB01 + F05 + Product workspace routing

```
 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 Project workspace key > derives stable kebab key from Mini cadrage title 1ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 Project workspace key > rename of title does not mutate an already durable key 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 server-owned repository config > returns null when incomplete — never invents ambient identity 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 server-owned repository config > resolves explicit identity/remote without hardcoding owner/repo in domain 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 artifact target routing > composes exact target from leaf filename under cycle workspace 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 artifact target routing > accepts in-bounds full targetPath as candidate 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 artifact target routing > rejects out-of-bounds target without silent rewrite 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 artifact target routing > rejects traversal / absolute / slash filename 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 artifact target routing > rejects malformed cycle segment 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 CREATE/UPDATE + collision > CREATE when absent; UPDATE only with same-deliverable proof; else ASK 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 CREATE/UPDATE + collision > CR-PWR-02A — hasDurableSameArtifactEvidence exact contract 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 CREATE/UPDATE + collision > workspace collision fail-closed without durable ownership 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > MUST NOT salvage basename from ../x.md 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > MUST NOT salvage basename from /abs.md 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > MUST NOT salvage basename from ../../note.md 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > MUST NOT salvage basename from sub/../note.md 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > MUST NOT salvage basename from \\evil\\x.md 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > MUST NOT salvage basename from a/../../x.md 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > valid leaf via artifactFileName composes under cycle 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > valid full in-bounds path accepted 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > full out-of-bounds path rejected without rewrite 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > CR-PWR-01 invalid proposedTargetPath fail-closed > extractArtifactFileNameCandidate never salvages traversal basename 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 enrichExecutionIntentFromBinding cycle routing > OBS-PJ-CLOUD-01 fix — leaf filename composes exact target under cyc:framing 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 enrichExecutionIntentFromBinding cycle routing > in-bounds full path from Pilote is preserved (no null wipe) 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 enrichExecutionIntentFromBinding cycle routing > legacy sandbox pathRoot keeps clamp even when cycle type is known 0ms
 ✓ __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts > PRODUCT-PWR-01 enrichExecutionIntentFromBinding cycle routing > legacy pathRoot without cycle segment keeps prior clamp semantics 0ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > leaf convention — framing note/document de cadrage → note-de-cadrage.md 32ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > A — pathless framing documentary solicit → EC with Product target under 01-cadrage 43ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > B — recommend offer then accept-GO prepare converges on same Product target 26ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C1 — missing cycle / incoherent cycle fail-closed without inventing destination 26ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C2 — invalid proposed path (traversal) → clarification, no basename salvage 22ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C3 — non-documentary code-like mission is not forced to docs_write routing 37ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > C4 — pathless documentary without determinable leaf → clarification 21ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > D1 — bare Markdown leaf targetPath alone → Product composes full cycle path → EC 25ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > D2 — TypeScript config file creation is not_documentary (no Markdown routing) 21ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > D3 — traversal ../secret.md remains fail-closed (no basename salvage) 29ms
 ✓ __tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts > MATERIALITY-BLOCK-01 documentary Generic PREPARE bind > D4 — true pathless framing documentary (no targetPath) keeps nominal Product compose 34ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > T01 — resolve: optional documentary without obligation → no_require_artifact block (not GOVERNED) 50ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > T01–T04 — natural optional MD: recommend → OK → EC; no REQUIRE_ARTIFACT dead-end; same cycle; no synthetic HD 60ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > T05 — REQUIRE_ARTIFACT CURRENT keeps Artifact governed path (not Generic PREPARE recommend) 29ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > T09 — after optional PREPARE: inspect → authorize; ZERO Attempt 36ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > T11 — explicit new-cycle prepare stays distinct from optional documentary routing 26ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > Pass02-T01/T05 — fingerprint distinguishes path/capability; reconstruction keeps docs_write 23ms
 ✓ __tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts > P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing > Regularization-A — capability exact match; substring spoofing refused 15ms
 Test Files  3 passed (3)
      Tests  44 passed (44)
```

| Suite | Résultat |
| --- | --- |
| MB01 (A–C + **D1–D4**) | **11/11 PASS** |
| F05 optional artifact | **7/7 PASS** |
| projectWorkspaceArtifactRouting | **26/26 PASS** |
| der16 E9 / E10 (subset) | **PASS** |
| der16 E12 F2 / R5 | **FAIL préexistants dirty M-HD** (inchangés ; hors GO) |

### Preuves D1–D4

| Test | Attendu | Résultat |
| --- | --- | --- |
| D1 bare `note-de-cadrage.md` | Product `…/01-cadrage/note-de-cadrage.md` ; EC ; proposed non-autoritaire | PASS |
| D2 TypeScript config | `not_documentary` ; pas de `.md` / cadrage artificiel | PASS |
| D3 `../secret.md` | `already_concrete` puis PREPARE fail ; pas de salvage | PASS |
| D4 pathless framing | nominal `resolved_product` préservé | PASS |

HumanDecision artificielle : **non**. ExecutionAttempt : **0**. Cursor REAL : **non**. Mutation QA : **non**.

---

## 9. Qualification réserves der16 (inchangée)

```
null

+ Received:
{
  "contradictionConflictPresent": false,
  "cycleInstanceId": "cyc:d16-e12c",
  "expectedOutcome": "Spécification consultable dans le dépôt du projet",
  "missionEffects": {
    "artifactBrief": null,
    "artifactType": null,
    "contentRequirements": [],
    "evidenceRequirements": [],
    "exitRequirementKinds": [],
    "expectedOutputs": [],
    "intentKind": null,
    "proposedArtifactFileName": null,
    "proposedRequiredCapabilities": [],
    "proposedTargetPath": null,
    "proposedTargetRepositoryRef": null,
    "requestedOperation": null,
    "reversibilityExpectation": null,
    "validationExpectations": [],
  },
  "missionKey": "2228271bdec91e58e62b6535",
  "objective": "Écrire une spécification Markdown dans le dépôt du projet",
  "offerFingerprint": "2228271bdec91e58e62b6535",
  "offeredAtIso": "2026-08-23T04:30:00.000Z",
  "outOfScope": [],
  "projectId": "prj:d16-1",
  "reservations": [],
  "risks": [],
  "scopeIn": [],
  "scopeNarrative": "projects/demo/docs",
  "scopeOut": [],
  "sessionKey": "sessdb:/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-w2-ZfqckS/p6-der16-session.sqlite",
  "signalArchitectureImpact": true,
  "signalDataImpact": false,
  "signalIrreversible": false,
  "signalSecurityImpact": false,
  "signalStructuralChange": false,
  "stopConditions": [
    "AUCUNE EXÉCUTION SANS AUTORISATION",
  ],
}

 ❯ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts:954:7
    952|         resolvePrepareOfferSessionKey({ sessionDbPath }),
    953|       ),
    954|     ).toBeNull();
       |       ^
    955|     expect(await countAttempts(oa, projectId)).toBe(0);
    956|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R5 — a REAL accepted HumanDecision in the Project does NOT silently unlock structural Generic PREPARE; Nora text/params cannot smuggle an HD (no HD→mission binding exists on Generic path → STOP E12 positive)
AssertionError: expected undefined to be 1 // Object.is equality

- Expected:
1

+ Received:
undefined

 ❯ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts:1677:56
    1675|       "utf8",
    1676|     );
    1677|     expect(svc.match(/decisionRefs:\s*\[\]/g)?.length).toBe(1);
       |                                                        ^
    1678|     expect(svc).not.toMatch(/decisionRefs\??:\s*readonly string\[\]/);
    1679|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯


 Test Files  1 failed (1)
      Tests  2 failed | 3 passed | 22 skipped (27)
   Start at  11:07:07
   Duration  1.91s (transform 993ms, setup 24ms, collect 1.55s, tests 192ms, environment 0ms, prepare 22ms)

```

| Échec | Qualification | Bloque regularization 02 ? |
| --- | --- | --- |
| E12 F2 offer non-null | `PREEXISTING_DIRTY_MHD02_TEST_DRIFT` | **NON** |
| R5 `decisionRefs: []` literal | `PREEXISTING_DIRTY_MHD01_STATIC_ASSERTION_DRIFT` | **NON** |

Aucun code/test M-HD modifié dans ce cycle.

---

## 10. Dette / exit

- CREATE/UPDATE existence au PREPARE : hors scope (inchangé).
- Reprise HQA-FRESH-01 : après GO Morris + revue ChatGPT uniquement.

---

## 11. Décisions Morris restantes

1. Accepter regularization 02.
2. Autoriser ou non reprise HQA-FRESH-01.
3. Traiter E12/R5 sous GO M-HD distinct.

**Instruction ChatGPT :** relire `sfia-review-handoff/latest-chatgpt-review.md` au SHA distant vérifié avant verdict.

---

## 12. Verdict

**REGULARIZATION COMPLETE — DETERMINISTIC PASS — READY FOR CHATGPT REVIEW**

État HQA-FRESH-01 préservé : **oui**.
