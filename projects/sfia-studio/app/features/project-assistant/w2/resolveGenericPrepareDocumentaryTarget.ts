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
