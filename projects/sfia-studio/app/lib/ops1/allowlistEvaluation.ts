/**
 * OPS1 I4 — deterministic Campus360 allowlist evaluation (no execution).
 * Fail-closed: never mutates filesystem, never uses network, never runs Git remote.
 */
import fs from "node:fs";
import path from "node:path";
import type {
  AllowlistEntry,
  AllowlistEvaluationStatus,
  AllowlistGlobalStatus,
  AllowlistInputEntry,
  AllowlistMode,
  ActionAllowlistEvaluation,
} from "./types";
import {
  CAMPUS360_PROTECTED_MODIFY,
  CAMPUS360_ROOT_PREFIX,
  OPS1_I4_STATUS_CORRECTION,
  OPS1_I4_STATUS_REFUSED,
  OPS1_I4_STATUS_VALID,
} from "./types";

export interface EvaluateAllowlistInput {
  actionCandidateId: string;
  actionVersion: number;
  entries: AllowlistInputEntry[];
  /** Absolute workspace root (repo root containing projects/). */
  workspaceRoot: string;
  evaluatedAt?: string;
}

/**
 * Declarative Campus360 allowlist policy — deny-by-default.
 * Exact path → exact modes. No implicit eligibility from directory membership.
 */
export const CAMPUS360_ALLOWLIST_POLICY: Readonly<
  Record<string, readonly AllowlistMode[]>
> = {
  "projects/campus360/README.md": ["READ", "MODIFY"],
  "projects/campus360/01-opportunity-and-vision.md": ["READ", "MODIFY"],
  "projects/campus360/02-sfia-cycle-coverage-hypothesis.md": ["READ", "MODIFY"],
  "projects/campus360/03-pre-framing-decision-pack.md": ["READ"],
};

export const UNDECLARED_PATH_REASON =
  "Chemin absent de la politique allowlist déclarative.";

/**
 * Single decision point for policy modes.
 * CREATE is never granted via the static map (only via NN-*.md create rule).
 */
export function decideAgainstAllowlistPolicy(
  normalizedPath: string,
  mode: AllowlistMode,
): { allowed: true } | { allowed: false; reason: string } {
  if (mode === "CREATE") {
    // CREATE is handled by the dedicated NN-*.md rule, not the static map.
    return {
      allowed: false,
      reason: UNDECLARED_PATH_REASON,
    };
  }
  const allowedModes = CAMPUS360_ALLOWLIST_POLICY[normalizedPath];
  if (!allowedModes) {
    return { allowed: false, reason: UNDECLARED_PATH_REASON };
  }
  if (!allowedModes.includes(mode)) {
    if (
      normalizedPath === CAMPUS360_PROTECTED_MODIFY &&
      mode === "MODIFY"
    ) {
      return {
        allowed: false,
        reason:
          "03-pre-framing-decision-pack.md est protégé — MODIFY interdit dans le scénario nominal OPS1.",
      };
    }
    return {
      allowed: false,
      reason: `Mode ${mode} non autorisé par la politique pour ce chemin.`,
    };
  }
  return { allowed: true };
}

const FORBIDDEN_PREFIXES = [
  "method/",
  "prompts/",
  "docs/",
  "scripts/",
  ".github/",
  "projects/sfia-studio/",
  "projects/chantiers360-v2/",
  "projects/interv360/",
  "projects/task-tracker/",
] as const;

const FORBIDDEN_BASENAMES = new Set([
  ".env",
  ".env.local",
  ".env.production",
  "credentials.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "bun.lockb",
]);

const FORBIDDEN_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".yml",
  ".yaml",
  ".toml",
  ".sh",
  ".bash",
  ".zsh",
  ".pem",
  ".key",
]);

/** Resolve repo root from Next.js app cwd (projects/sfia-studio/app). */
export function resolveWorkspaceRootFromAppCwd(
  cwd = process.cwd(),
): string {
  return path.resolve(cwd, "..", "..", "..");
}

export function normalizeAllowlistPath(raw: string): {
  ok: true;
  normalized: string;
} | {
  ok: false;
  reason: string;
} {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, reason: "Chemin vide." };
  }
  if (path.isAbsolute(trimmed) || /^[A-Za-z]:[\\/]/.test(trimmed)) {
    return { ok: false, reason: "Chemin absolu interdit." };
  }
  if (trimmed.includes("*") || trimmed.includes("?")) {
    return { ok: false, reason: "Wildcard interdite (allowlist exacte 1..n)." };
  }
  const posix = trimmed.replace(/\\/g, "/");
  const parts = posix.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return {
      ok: false,
      reason: "Segment vide ou « .. » interdit.",
    };
  }
  // Collapse ./ only
  const cleaned = parts.filter((p) => p !== ".").join("/");
  return { ok: true, normalized: cleaned };
}

function isUnderCampus360(normalized: string): boolean {
  return (
    normalized === CAMPUS360_ROOT_PREFIX ||
    normalized.startsWith(`${CAMPUS360_ROOT_PREFIX}/`)
  );
}

function isNnMarkdownCreate(normalized: string): boolean {
  const base = path.posix.basename(normalized);
  return /^[0-9]{2}-.+\.md$/.test(base) && normalized.startsWith(`${CAMPUS360_ROOT_PREFIX}/`);
}

function isStructurallyForbidden(normalized: string): string | null {
  const lower = normalized.toLowerCase();
  const base = path.posix.basename(lower);

  if (FORBIDDEN_BASENAMES.has(base)) {
    return `Fichier protégé / secret / lockfile interdit : ${base}`;
  }
  if (base.startsWith(".env")) {
    return "Fichiers d’environnement interdits.";
  }
  for (const prefix of FORBIDDEN_PREFIXES) {
    if (normalized === prefix.slice(0, -1) || normalized.startsWith(prefix)) {
      return `Chemin hors périmètre Campus360 / zone protégée : ${prefix}`;
    }
  }
  const ext = path.posix.extname(lower);
  if (ext && FORBIDDEN_EXTENSIONS.has(ext) && !normalized.endsWith(".md")) {
    return `Extension interdite pour OPS1 I4 : ${ext}`;
  }
  if (!isUnderCampus360(normalized)) {
    return `Hors projects/campus360/ — non listé = interdit.`;
  }
  if (normalized === CAMPUS360_ROOT_PREFIX) {
    return "La racine projects/campus360/ n’est pas un fichier allowlistable.";
  }
  return null;
}

function resolveOnDisk(
  workspaceRoot: string,
  normalized: string,
): {
  exists: boolean;
  isSymlink: boolean;
  escapesRoot: boolean;
  absolutePath: string;
} {
  const absolutePath = path.resolve(workspaceRoot, normalized);
  const campusRoot = path.resolve(workspaceRoot, CAMPUS360_ROOT_PREFIX);
  let realCampus = campusRoot;
  try {
    if (fs.existsSync(campusRoot)) {
      realCampus = fs.realpathSync(campusRoot);
    }
  } catch {
    realCampus = campusRoot;
  }

  try {
    const st = fs.lstatSync(absolutePath);
    const isSymlink = st.isSymbolicLink();
    const realTarget = fs.realpathSync(absolutePath);
    const escapesRoot =
      realTarget !== realCampus &&
      !realTarget.startsWith(realCampus + path.sep);
    return {
      exists: true,
      isSymlink,
      escapesRoot,
      absolutePath,
    };
  } catch {
    // Absent path: ensure the intended parent stays under campus360.
    const parent = path.dirname(absolutePath);
    let parentReal = parent;
    try {
      if (fs.existsSync(parent)) {
        parentReal = fs.realpathSync(parent);
      }
    } catch {
      parentReal = parent;
    }
    const escapesRoot =
      parentReal !== realCampus &&
      !parentReal.startsWith(realCampus + path.sep) &&
      !absolutePath.startsWith(path.resolve(workspaceRoot, CAMPUS360_ROOT_PREFIX) + path.sep);
    return {
      exists: false,
      isSymlink: false,
      escapesRoot,
      absolutePath,
    };
  }
}

function entryKey(normalized: string, mode: AllowlistMode): string {
  return `${mode}::${normalized}`;
}

export function evaluateAllowlist(
  input: EvaluateAllowlistInput,
): ActionAllowlistEvaluation {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const evaluatedEntries: AllowlistEntry[] = [];
  const allowedReads: string[] = [];
  const allowedCreates: string[] = [];
  const allowedModifies: string[] = [];
  const deniedPaths: string[] = [];

  if (!input.entries.length) {
    return {
      actionCandidateId: input.actionCandidateId,
      actionVersion: input.actionVersion,
      evaluatedEntries: [],
      allowedReads,
      allowedCreates,
      allowedModifies,
      deniedPaths,
      status: "INVALID",
      uiStatusLabel: OPS1_I4_STATUS_REFUSED,
      evaluatedAt,
    };
  }

  // First pass: normalize + structural checks
  type Draft = {
    path: string;
    mode: AllowlistMode;
    normalizedPath: string;
    evaluationStatus: AllowlistEvaluationStatus;
    evaluationReason: string | null;
  };

  const drafts: Draft[] = [];
  const seenExact = new Map<string, AllowlistMode>();
  const modesByPath = new Map<string, Set<AllowlistMode>>();

  for (const entry of input.entries) {
    const mode = entry.mode;
    const norm = normalizeAllowlistPath(entry.path);
    if (!norm.ok) {
      drafts.push({
        path: entry.path,
        mode,
        normalizedPath: entry.path.trim(),
        evaluationStatus: "INVALID",
        evaluationReason: norm.reason,
      });
      continue;
    }

    const normalized = norm.normalized;
    const structural = isStructurallyForbidden(normalized);
    if (structural) {
      drafts.push({
        path: entry.path,
        mode,
        normalizedPath: normalized,
        evaluationStatus: "DENIED",
        evaluationReason: structural,
      });
      continue;
    }

    const exactKey = entryKey(normalized, mode);
    if (seenExact.has(exactKey)) {
      drafts.push({
        path: entry.path,
        mode,
        normalizedPath: normalized,
        evaluationStatus: "INVALID",
        evaluationReason: "Doublon après normalisation (même chemin + mode).",
      });
      continue;
    }
    seenExact.set(exactKey, mode);

    const modeSet = modesByPath.get(normalized) ?? new Set<AllowlistMode>();
    modeSet.add(mode);
    modesByPath.set(normalized, modeSet);

    drafts.push({
      path: entry.path,
      mode,
      normalizedPath: normalized,
      evaluationStatus: "ALLOWED",
      evaluationReason: null,
    });
  }

  // Contradiction CREATE + MODIFY on same path
  for (const draft of drafts) {
    if (draft.evaluationStatus !== "ALLOWED") continue;
    const modes = modesByPath.get(draft.normalizedPath);
    if (modes?.has("CREATE") && modes.has("MODIFY")) {
      draft.evaluationStatus = "INVALID";
      draft.evaluationReason =
        "Contradiction : même chemin en CREATE et MODIFY.";
    }
  }

  // Existence / symlink / declarative policy / CREATE NN-*.md
  for (const draft of drafts) {
    if (draft.evaluationStatus !== "ALLOWED") continue;

    const disk = resolveOnDisk(input.workspaceRoot, draft.normalizedPath);
    if (disk.isSymlink && disk.escapesRoot) {
      draft.evaluationStatus = "DENIED";
      draft.evaluationReason =
        "Symlink sortant de projects/campus360/ — refusé.";
      continue;
    }
    if (disk.exists && disk.escapesRoot) {
      draft.evaluationStatus = "DENIED";
      draft.evaluationReason =
        "Résolution hors racine Campus360 — refusé.";
      continue;
    }

    if (draft.mode === "CREATE") {
      if (!isNnMarkdownCreate(draft.normalizedPath)) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason =
          "CREATE réservé aux nouveaux fichiers projects/campus360/NN-*.md exacts.";
        continue;
      }
      // CREATE paths must not collide with declared policy files
      if (CAMPUS360_ALLOWLIST_POLICY[draft.normalizedPath]) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason =
          "CREATE interdit sur un chemin déjà déclaré dans la politique (utiliser READ/MODIFY).";
        continue;
      }
      if (disk.exists) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason =
          "Fichier existant déclaré CREATE — utiliser MODIFY si éligible.";
        continue;
      }
      continue;
    }

    // READ / MODIFY — declarative policy only (deny-by-default)
    const policy = decideAgainstAllowlistPolicy(
      draft.normalizedPath,
      draft.mode,
    );
    if (!policy.allowed) {
      draft.evaluationStatus = "DENIED";
      draft.evaluationReason = policy.reason;
      continue;
    }

    if (draft.mode === "MODIFY") {
      if (!disk.exists) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason =
          "Fichier absent déclaré MODIFY — utiliser CREATE si NN-*.md nouveau.";
        continue;
      }
    }

    if (draft.mode === "READ") {
      if (!disk.exists) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason = "Fichier absent — READ impossible.";
        continue;
      }
    }
  }

  for (const draft of drafts) {
    evaluatedEntries.push({ ...draft });
    if (draft.evaluationStatus === "ALLOWED") {
      if (draft.mode === "READ") allowedReads.push(draft.normalizedPath);
      if (draft.mode === "CREATE") allowedCreates.push(draft.normalizedPath);
      if (draft.mode === "MODIFY") allowedModifies.push(draft.normalizedPath);
    } else {
      deniedPaths.push(draft.normalizedPath || draft.path);
    }
  }

  const hasInvalid = evaluatedEntries.some((e) => e.evaluationStatus === "INVALID");
  const hasDenied = evaluatedEntries.some((e) => e.evaluationStatus === "DENIED");
  const allAllowed =
    evaluatedEntries.length > 0 &&
    evaluatedEntries.every((e) => e.evaluationStatus === "ALLOWED");

  let status: AllowlistGlobalStatus;
  let uiStatusLabel: string;
  if (allAllowed) {
    status = "VALID";
    uiStatusLabel = OPS1_I4_STATUS_VALID;
  } else if (hasInvalid && !evaluatedEntries.some((e) => e.evaluationStatus === "ALLOWED")) {
    status = "INVALID";
    uiStatusLabel = OPS1_I4_STATUS_REFUSED;
  } else if (hasDenied || hasInvalid) {
    status = "REQUIRES_CORRECTION";
    uiStatusLabel = OPS1_I4_STATUS_CORRECTION;
  } else {
    status = "INVALID";
    uiStatusLabel = OPS1_I4_STATUS_REFUSED;
  }

  return {
    actionCandidateId: input.actionCandidateId,
    actionVersion: input.actionVersion,
    evaluatedEntries,
    allowedReads: [...new Set(allowedReads)].sort(),
    allowedCreates: [...new Set(allowedCreates)].sort(),
    allowedModifies: [...new Set(allowedModifies)].sort(),
    deniedPaths: [...new Set(deniedPaths)].sort(),
    status,
    uiStatusLabel,
    evaluatedAt,
  };
}
