/**
 * Cycle-aware artifact target composition / validation (server-owned).
 * Nora filename proposals are non-authoritative candidates only.
 * Pure domain — no features/ imports.
 *
 * CR-PWR-01: invalid proposedTargetPath must FAIL CLOSED (never salvage basename).
 * CR-PWR-02: classifyArtifactWriteMode — exists without same-deliverable proof → ASK.
 */

function normalizeRepoRelativePath(raw: string): string | null {
  const n = raw.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/")) return null;
  const segs = n.split("/");
  if (segs.some((seg) => seg === ".." || seg === "")) return null;
  return n;
}

export type ArtifactTargetRoutingResult =
  | {
      ok: true;
      projectRoot: string;
      cycleRoot: string;
      artifactFileName: string;
      targetPath: string;
      needsTargetClarification: false;
    }
  | {
      ok: false;
      needsTargetClarification: true;
      code: string;
      reason: string;
      projectRoot?: string;
      cycleRoot?: string;
    };

const MARKDOWN_LEAF = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,120}\.md$/;

export function isSafeArtifactFileNameLeaf(name: string): boolean {
  const trimmed = name.trim();
  if (!trimmed || trimmed.includes("/") || trimmed.includes("\\")) return false;
  if (trimmed.includes("..")) return false;
  return MARKDOWN_LEAF.test(trimmed);
}

/**
 * Resolve a filename candidate from an explicit leaf field only, or from a
 * proposed path that is already a bare safe leaf (no directories).
 *
 * CR-PWR-01 — NEVER extract basename from absolute / traversal / malformed paths
 * to "repair" them into a composable leaf.
 */
export function extractArtifactFileNameCandidate(input: {
  artifactFileName?: string | null;
  targetPath?: string | null;
}): string | null {
  const explicit = input.artifactFileName?.trim() || "";
  if (explicit && isSafeArtifactFileNameLeaf(explicit)) return explicit;
  const rawPath = input.targetPath?.trim() || "";
  if (!rawPath) return null;
  const normalized = normalizeRepoRelativePath(rawPath);
  if (!normalized) return null;
  // Full paths are not filename candidates — only bare leaves.
  if (normalized.includes("/")) return null;
  return isSafeArtifactFileNameLeaf(normalized) ? normalized : null;
}

export function isPathWithinRoot(targetRaw: string, pathRootRaw: string): boolean {
  const target = normalizeRepoRelativePath(targetRaw);
  const root = normalizeRepoRelativePath(pathRootRaw);
  if (!target || !root) return false;
  if (target === root) return true;
  return target.startsWith(root + "/");
}

export function composeCycleWorkspaceRoot(input: {
  projectPathRoot: string;
  repositoryWorkspaceSegment: string;
}): string | null {
  const projectRoot = normalizeRepoRelativePath(input.projectPathRoot);
  const segment = input.repositoryWorkspaceSegment.trim().replace(/^\/+|\/+$/g, "");
  if (!projectRoot || !segment) return null;
  if (segment.includes("/") || segment.includes("\\") || segment.includes("..")) {
    return null;
  }
  if (!/^[a-z0-9][a-z0-9._-]{0,80}$/i.test(segment)) return null;
  return `${projectRoot}/${segment}`;
}

/**
 * Compose exact server-owned target under Project + Cycle workspace.
 * - Full in-bounds targetPath accepted when under cycle root.
 * - Leaf filename (or artifactFileName) composed under cycle root.
 * - Invalid / out-of-bounds proposedTargetPath → FAIL CLOSED (no silent rewrite).
 */
export function resolveArtifactTargetUnderCycleWorkspace(input: {
  projectPathRoot: string;
  repositoryWorkspaceSegment: string;
  artifactFileName?: string | null;
  proposedTargetPath?: string | null;
}): ArtifactTargetRoutingResult {
  const projectRoot = normalizeRepoRelativePath(input.projectPathRoot);
  if (!projectRoot) {
    return {
      ok: false,
      needsTargetClarification: true,
      code: "PROJECT_ROOT_INVALID",
      reason: "project_path_root_invalid",
    };
  }
  const cycleRoot = composeCycleWorkspaceRoot({
    projectPathRoot: projectRoot,
    repositoryWorkspaceSegment: input.repositoryWorkspaceSegment,
  });
  if (!cycleRoot) {
    return {
      ok: false,
      needsTargetClarification: true,
      code: "CYCLE_SEGMENT_INVALID",
      reason: "cycle_workspace_segment_invalid",
      projectRoot,
    };
  }

  const proposed = input.proposedTargetPath?.trim() || "";
  if (proposed) {
    const normalizedProposed = normalizeRepoRelativePath(proposed);
    // CR-PWR-01 — absolute / traversal / malformed / backslash-escape → fail closed.
    // Never fall through to basename salvage.
    if (!normalizedProposed) {
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_PATH_INVALID",
        reason: "proposed_target_absolute_traversal_or_malformed",
        projectRoot,
        cycleRoot,
      };
    }

    if (normalizedProposed.includes("/")) {
      if (
        isPathWithinRoot(normalizedProposed, cycleRoot) &&
        normalizedProposed !== cycleRoot
      ) {
        const leaf = normalizedProposed.split("/").pop() || "";
        if (!isSafeArtifactFileNameLeaf(leaf)) {
          return {
            ok: false,
            needsTargetClarification: true,
            code: "TARGET_LEAF_INVALID",
            reason: "target_leaf_not_safe_markdown",
            projectRoot,
            cycleRoot,
          };
        }
        return {
          ok: true,
          projectRoot,
          cycleRoot,
          artifactFileName: leaf,
          targetPath: normalizedProposed,
          needsTargetClarification: false,
        };
      }
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_OUTSIDE_CYCLE_WORKSPACE",
        reason: "proposed_target_outside_cycle_workspace",
        projectRoot,
        cycleRoot,
      };
    }

    // Bare leaf proposed as path — compose under cycle root (same as filename).
    if (!isSafeArtifactFileNameLeaf(normalizedProposed)) {
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_LEAF_INVALID",
        reason: "proposed_bare_leaf_not_safe_markdown",
        projectRoot,
        cycleRoot,
      };
    }
    return {
      ok: true,
      projectRoot,
      cycleRoot,
      artifactFileName: normalizedProposed,
      targetPath: `${cycleRoot}/${normalizedProposed}`,
      needsTargetClarification: false,
    };
  }

  const fileName = extractArtifactFileNameCandidate({
    artifactFileName: input.artifactFileName,
    targetPath: null,
  });
  if (!fileName) {
    return {
      ok: false,
      needsTargetClarification: true,
      code: "ARTIFACT_FILENAME_REQUIRED",
      reason: "artifact_filename_absent_or_invalid",
      projectRoot,
      cycleRoot,
    };
  }

  const targetPath = `${cycleRoot}/${fileName}`;
  return {
    ok: true,
    projectRoot,
    cycleRoot,
    artifactFileName: fileName,
    targetPath,
    needsTargetClarification: false,
  };
}

/**
 * Classify CREATE vs UPDATE from a filesystem existence fact (never LLM).
 *
 * CR-PWR-02:
 * - absent → CREATE
 * - present + intentClearlySameDeliverable === true → UPDATE
 * - present + intentClearlySameDeliverable false/undefined/null → ASK
 * - unknown → ASK
 *
 * CR-PWR-02A — never set intentClearlySameDeliverable from targetExists alone.
 */
export function classifyArtifactWriteMode(input: {
  targetExists: boolean | null | undefined;
  intentClearlySameDeliverable?: boolean | null;
}): "CREATE" | "UPDATE" | "ASK" {
  if (input.targetExists === false) return "CREATE";
  if (input.targetExists === true) {
    if (input.intentClearlySameDeliverable === true) return "UPDATE";
    return "ASK";
  }
  return "ASK";
}

/**
 * CR-PWR-02A — durable same-deliverable proof from Evidence (never filename/slug alone).
 *
 * Acceptable Evidence:
 * - bindings.projectId === current projectId
 * - type === "artifact"
 * - canonical location === canonical targetPath
 * - status ∈ {"available", "verified"}
 * - availability !== "unavailable"
 * - source/sourceKind compatible with prior governed materialization
 *
 * Rejected/stale/superseded/unavailable → not proof.
 * Multiple contradictory admissible+rejected on same path → ASK (caller treats as false).
 */
export type SameDeliverableEvidenceLike = {
  readonly type?: string;
  readonly source?: string;
  readonly sourceKind?: string;
  readonly location?: string;
  readonly status?: string;
  readonly availability?: string;
  readonly bindings?: { readonly projectId?: string };
};

export function hasDurableSameArtifactEvidence(input: {
  projectId: string;
  targetPath: string;
  evidence: readonly SameDeliverableEvidenceLike[];
}): boolean {
  const target = normalizeRepoRelativePath(input.targetPath);
  if (!target || !input.projectId.trim()) return false;

  const admissible = input.evidence.filter((ev) => {
    if (ev.bindings?.projectId !== input.projectId) return false;
    if (ev.type !== "artifact") return false;
    const loc = normalizeRepoRelativePath(ev.location?.trim() || "");
    if (!loc || loc !== target) return false;
    if (ev.availability === "unavailable") return false;
    if (ev.status !== "available" && ev.status !== "verified") return false;
    const source = (ev.source ?? "").trim();
    const sourceKind = (ev.sourceKind ?? "").trim();
    const governedSource =
      source.includes("docs_write") ||
      source.includes("execution_attempt") ||
      sourceKind === "execution_attempt" ||
      sourceKind === "external" ||
      sourceKind === "system";
    return governedSource;
  });

  if (admissible.length === 0) return false;

  // Any contradictory Evidence on the same projectId+target (including
  // status/availability unavailable) fail-closes even when an admissible
  // row also exists — never UPDATE on ambiguous durable truth.
  const blockingConflict = input.evidence.some((ev) => {
    const loc = normalizeRepoRelativePath(ev.location?.trim() || "");
    if (!loc || loc !== target) return false;
    if (ev.bindings?.projectId !== input.projectId) return false;
    return (
      ev.status === "rejected" ||
      ev.status === "superseded" ||
      ev.status === "stale" ||
      ev.status === "unavailable" ||
      ev.availability === "unavailable"
    );
  });
  if (blockingConflict) return false;

  return admissible.length > 0;
}

/**
 * Pure CREATE/UPDATE/ASK vs existence fact (PREPARE + execution-time TOCTOU).
 * Callers map `kind` to phase-specific detail codes.
 */
export function assertSealedArtifactWriteModeAgainstExistence(input: {
  artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null | undefined;
  targetExists: boolean | null;
  /** Automatic Product docs_write: null/unresolved mode is refused. */
  requireResolvedWriteMode?: boolean;
}):
  | { ok: true }
  | {
      ok: false;
      kind:
        | "ASK"
        | "UNRESOLVED"
        | "UNAVAILABLE"
        | "STALE_CREATE"
        | "STALE_UPDATE"
        | "TARGET_UNRESOLVED";
    } {
  const mode = input.artifactWriteMode ?? null;
  if (mode === "ASK") return { ok: false, kind: "ASK" };
  if (mode !== "CREATE" && mode !== "UPDATE") {
    if (input.requireResolvedWriteMode) {
      return { ok: false, kind: "UNRESOLVED" };
    }
    return { ok: true };
  }
  if (input.targetExists === null) {
    return { ok: false, kind: "UNAVAILABLE" };
  }
  if (mode === "CREATE" && input.targetExists === true) {
    return { ok: false, kind: "STALE_CREATE" };
  }
  if (mode === "UPDATE" && input.targetExists === false) {
    return { ok: false, kind: "STALE_UPDATE" };
  }
  return { ok: true };
}

/** Automatic Product workspace targets under projects/<key>/… */
export function isAutomaticProductDocsWriteTargetPath(
  targetPath: string | null | undefined,
): boolean {
  const t = (targetPath ?? "").trim();
  return /^projects\/[a-z0-9]+(?:-[a-z0-9]+)*(?:\/|$)/.test(t);
}

/**
 * Execution-time TOCTOU — last reliable check before filesystem mutation.
 * Shared Fake/REAL semantics (phase-specific codes).
 */
export function assertArtifactWriteModeAtExecution(input: {
  artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null | undefined;
  targetExists: boolean | null;
  requireResolvedWriteMode?: boolean;
}):
  | { ok: true }
  | { ok: false; code: string; message: string } {
  const check = assertSealedArtifactWriteModeAgainstExistence(input);
  if (check.ok) return { ok: true };
  switch (check.kind) {
    case "ASK":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_ASK",
        message: "Effet fichier ASK — écriture refusée à l'exécution.",
      };
    case "UNRESOLVED":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_UNRESOLVED",
        message: "Effet fichier non scellé à l'exécution — écriture refusée.",
      };
    case "UNAVAILABLE":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE",
        message:
          "Fait d'existence indisponible juste avant mutation — aucune écriture.",
      };
    case "STALE_CREATE":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION",
        message:
          "CREATE scellé obsolète à l'exécution — cible apparue après PREPARE. Aucune écriture.",
      };
    case "STALE_UPDATE":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION",
        message:
          "UPDATE scellé obsolète à l'exécution — cible disparue après PREPARE. Aucune écriture.",
      };
    default:
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE",
        message: "Revalidation WRITE mode impossible à l'exécution.",
      };
  }
}

/**
 * Collision check for Project workspace directory before first materialization.
 * existingPaths = repo-relative paths known to exist (read-only inventory).
 *
 * Caller must NOT pass a null inventory as empty — UNKNOWN ≠ ABSENT (CR-PWR-03).
 */
export function assessProjectWorkspaceCollision(input: {
  projectPathRoot: string;
  existingRepoRelativePaths: readonly string[];
  /** When the existing tree is already claimed by this same durable key. */
  durableOwnershipMatches?: boolean;
}): "absent_ok" | "reuse_same_project" | "ambiguous_collision" {
  const root = normalizeRepoRelativePath(input.projectPathRoot);
  if (!root) return "ambiguous_collision";
  const occupied = input.existingRepoRelativePaths.some((p) => {
    const n = normalizeRepoRelativePath(p);
    if (!n) return false;
    return n === root || n.startsWith(root + "/") || root.startsWith(n + "/");
  });
  if (!occupied) return "absent_ok";
  if (input.durableOwnershipMatches === true) return "reuse_same_project";
  return "ambiguous_collision";
}

/** Re-export normalize for callers that must share identical path rules. */
export { normalizeRepoRelativePath as normalizeArtifactRepoRelativePath };
