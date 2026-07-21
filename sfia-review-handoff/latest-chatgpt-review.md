# SFIA Review Pack — Correctif OPS1 I4 (allowlist declarative fail-closed)

## Métadonnées

- **date/heure** : 2026-07-21 18:28:47 CEST
- **cycle** : Correctif Delivery OPS1 I4
- **repo** : mcleland147/sfia-workspace
- **branche** : `delivery/sfia-studio-ops1-i4-allowlist-evaluation`
- **HEAD** : `33de2fc41d6c1f5d92198ceb0f75b972a460cb7b`
- **origin/main** : `33de2fc41d6c1f5d92198ceb0f75b972a460cb7b`
- **commit/push/PR projet** : **AUCUN** (gate correctif local uniquement)
- **handoff branch** : `sfia/review-handoff`
- **handoff path** : `sfia-review-handoff/latest-chatgpt-review.md`

## 1. Git status initial (truth check correctif)

Attendus validés au démarrage du correctif :

- branche = `delivery/sfia-studio-ops1-i4-allowlist-evaluation`
- HEAD = origin/main = `33de2fc41d6c1f5d92198ceb0f75b972a460cb7b`
- working tree = livraison I4 non commitée + `.tmp-sfia-review/**`

Aucun changement hors périmètre I4 / review temporaires.

## 2. Cause du correctif

Validation ChatGPT : le validateur I4 initial fermait le périmètre à `projects/campus360/` mais **n’exigeait pas** que READ/MODIFY ciblent uniquement les chemins déclarés par la politique validée.

**Risque** : un autre Markdown existant sous Campus360 (ex. `99-unlisted-extra.md`) pouvait être ACCEPTÉ en READ/MODIFY.

**Décision Morris** : politique déclarative, explicite, deny-by-default.

## 3. Analyse de l’écart fail-closed

Avant correctif (conceptuel) : appartenance à `projects/campus360/` + existence + mode CREATE/MODIFY rules structurelles ≈ éligibilité trop large.

Après correctif :

1. Map canonique `CAMPUS360_ALLOWLIST_POLICY` (chemins exacts → modes exacts).
2. Fonction unique `decideAgainstAllowlistPolicy()` pour READ/MODIFY.
3. CREATE uniquement via règle `NN-*.md` absent (jamais via la map).
4. Chemin Campus360 non déclaré → `DENIED` + motif `Chemin absent de la politique allowlist déclarative.`
5. Aucun fallback implicite sur « sous campus360 ».

## 4. Politique TypeScript complète

```ts
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
```

### Matrice exacte chemins / modes

| Chemin | READ | MODIFY | CREATE |
|--------|------|--------|--------|
| `projects/campus360/README.md` | ALLOWED | ALLOWED | DENIED |
| `projects/campus360/01-opportunity-and-vision.md` | ALLOWED | ALLOWED | DENIED |
| `projects/campus360/02-sfia-cycle-coverage-hypothesis.md` | ALLOWED | ALLOWED | DENIED |
| `projects/campus360/03-pre-framing-decision-pack.md` | ALLOWED | DENIED (protégé) | DENIED |
| nouveau `projects/campus360/NN-*.md` absent | DENIED | DENIED | ALLOWED (si exact + absent) |
| tout autre chemin / combinaison | DENIED / INVALID | — | — |

## 5. Fichiers modifiés / créés (périmètre correctif)

**Créés / portés (I4 + correctif)** :

- `projects/sfia-studio/app/lib/ops1/allowlistEvaluation.ts`
- `projects/sfia-studio/app/lib/ops1/allowlistService.ts`
- `projects/sfia-studio/app/__tests__/ops1/allowlistEvaluation.test.ts`
- `projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts`

**Modifiés (livraison I4 existante, hors refactor UI correctif)** :

- `projects/sfia-studio/app/lib/ops1/types.ts` (types + microcopies I4)
- UI `Ops1SessionScreen.tsx` / CSS (affichage motif via `evaluationReason` existant — pas de refonte)

**Interdits non touchés** : `projects/campus360/**`, `method/**`, `prompts/**`, etc.

## 6. Contenu complet des fichiers créés / corrigés

### `projects/sfia-studio/app/lib/ops1/allowlistEvaluation.ts`

```typescript
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

```

### `projects/sfia-studio/app/lib/ops1/allowlistService.ts`

```typescript
import type { DatabaseSync } from "node:sqlite";
import { createAllowlistEvaluationId, createEventId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import {
  evaluateAllowlist,
  resolveWorkspaceRootFromAppCwd,
} from "./allowlistEvaluation";
import type {
  ActionAllowlistEvaluation,
  ActionCandidateStatus,
  AllowlistInputEntry,
  SessionEvent,
  SessionEventType,
} from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
  createdAt = nowIsoWithOffset(),
): SessionEvent {
  const eventId = createEventId();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

function mapEvaluation(row: Record<string, unknown>): ActionAllowlistEvaluation {
  const payload = JSON.parse(String(row.payload_json)) as ActionAllowlistEvaluation;
  return {
    ...payload,
    evaluationId: String(row.evaluation_id),
    supersededAt: row.superseded_at == null ? null : String(row.superseded_at),
  };
}

function loadCandidate(
  actionCandidateId: string,
  db: DatabaseSync,
): {
  actionCandidateId: string;
  sessionId: string;
  version: number;
  status: ActionCandidateStatus;
} | null {
  const row = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(actionCandidateId) as Record<string, unknown> | undefined;
  if (!row) return null;
  return {
    actionCandidateId: String(row.action_candidate_id),
    sessionId: String(row.session_id),
    version: Number(row.version),
    status: row.status as ActionCandidateStatus,
  };
}

export function getLatestAllowlistEvaluation(
  actionCandidateId: string,
  actionVersion: number,
  db = openOps1Db(),
): ActionAllowlistEvaluation | null {
  const row = db
    .prepare(
      `SELECT * FROM allowlist_evaluations
       WHERE action_candidate_id = ?
         AND action_version = ?
         AND superseded_at IS NULL
       ORDER BY evaluated_at DESC
       LIMIT 1`,
    )
    .get(actionCandidateId, actionVersion) as Record<string, unknown> | undefined;
  if (!row) return null;
  return mapEvaluation(row);
}

export function supersedeAllowlistEvaluationsForAction(
  actionCandidateId: string,
  db = openOps1Db(),
): void {
  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE allowlist_evaluations
     SET superseded_at = ?
     WHERE action_candidate_id = ?
       AND superseded_at IS NULL`,
  ).run(at, actionCandidateId);
}

/**
 * Evaluate + persist allowlist for an action candidate version.
 * Does not execute Cursor / Git / filesystem writes.
 */
export function evaluateAndPersistAllowlist(input: {
  sessionId: string;
  actionCandidateId: string;
  entries: AllowlistInputEntry[];
  workspaceRoot?: string;
}): {
  evaluation: ActionAllowlistEvaluation;
  event: SessionEvent;
} {
  const db = openOps1Db();
  const candidate = loadCandidate(input.actionCandidateId, db);
  if (!candidate) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (candidate.sessionId !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "ActionCandidate hors session.");
  }

  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session || session.status !== "OPEN") {
    throw new Ops1Error("CONFLICT", "Session absente ou non OPEN.");
  }

  insertEvent(
    db,
    input.sessionId,
    "ALLOWLIST_EVALUATION_STARTED",
    `I4 allowlist evaluation started for ${candidate.actionCandidateId}@v${candidate.version}`,
  );

  const workspaceRoot =
    input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();

  const evaluation = evaluateAllowlist({
    actionCandidateId: candidate.actionCandidateId,
    actionVersion: candidate.version,
    entries: input.entries,
    workspaceRoot,
    evaluatedAt: nowIsoWithOffset(),
  });

  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE allowlist_evaluations
     SET superseded_at = ?
     WHERE action_candidate_id = ?
       AND action_version = ?
       AND superseded_at IS NULL`,
  ).run(at, candidate.actionCandidateId, candidate.version);

  const evaluationId = createAllowlistEvaluationId();
  db.prepare(
    `INSERT INTO allowlist_evaluations (
      evaluation_id, session_id, action_candidate_id, action_version,
      status, ui_status_label, payload_json, evaluated_at, superseded_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
  ).run(
    evaluationId,
    input.sessionId,
    candidate.actionCandidateId,
    candidate.version,
    evaluation.status,
    evaluation.uiStatusLabel,
    JSON.stringify({ ...evaluation, evaluationId }),
    evaluation.evaluatedAt,
  );

  let eventType: SessionEventType;
  if (evaluation.status === "VALID") {
    eventType = "ALLOWLIST_EVALUATION_SUCCEEDED";
  } else if (evaluation.status === "REQUIRES_CORRECTION") {
    eventType = "ALLOWLIST_CORRECTION_REQUIRED";
  } else {
    eventType = "ALLOWLIST_EVALUATION_FAILED";
  }

  const event = insertEvent(
    db,
    input.sessionId,
    eventType,
    `I4 ${evaluation.uiStatusLabel} (${evaluation.status})`,
  );

  return {
    evaluation: { ...evaluation, evaluationId, supersededAt: null },
    event,
  };
}

```

### `projects/sfia-studio/app/__tests__/ops1/allowlistEvaluation.test.ts`

```typescript
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  CAMPUS360_ALLOWLIST_POLICY,
  UNDECLARED_PATH_REASON,
  decideAgainstAllowlistPolicy,
  evaluateAllowlist,
} from "@/lib/ops1/allowlistEvaluation";
import {
  evaluateAndPersistAllowlist,
  getLatestAllowlistEvaluation,
  supersedeAllowlistEvaluationsForAction,
} from "@/lib/ops1/allowlistService";
import { createFixtureActionCandidate } from "@/lib/ops1/actionGate";
import { createOpenSession } from "@/lib/ops1/repository";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import type { AllowlistMode } from "@/lib/ops1/types";

const ACTION_ID = "ops1-act-11111111-1111-4111-8111-111111111111";

function expectRejected(
  pathValue: string,
  mode: AllowlistMode,
  workspaceRoot: string,
  reasonMatch: RegExp | string,
) {
  const result = evaluateAllowlist({
    actionCandidateId: ACTION_ID,
    actionVersion: 1,
    workspaceRoot,
    entries: [{ path: pathValue, mode }],
  });
  const entry = result.evaluatedEntries[0];
  expect(entry?.evaluationStatus).toMatch(/DENIED|INVALID/);
  expect(entry?.evaluationReason).toMatch(
    typeof reasonMatch === "string" ? new RegExp(reasonMatch, "i") : reasonMatch,
  );
  expect(result.allowedReads).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedModifies).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedCreates).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.status).not.toBe("VALID");
}

function expectDenied(
  pathValue: string,
  mode: AllowlistMode,
  workspaceRoot: string,
  reasonMatch: RegExp | string,
) {
  const result = evaluateAllowlist({
    actionCandidateId: ACTION_ID,
    actionVersion: 1,
    workspaceRoot,
    entries: [{ path: pathValue, mode }],
  });
  const entry = result.evaluatedEntries[0];
  expect(entry?.evaluationStatus).toBe("DENIED");
  expect(entry?.evaluationReason).toMatch(
    typeof reasonMatch === "string" ? new RegExp(reasonMatch, "i") : reasonMatch,
  );
  expect(result.allowedReads).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedModifies).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedCreates).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.deniedPaths.length).toBeGreaterThan(0);
  expect(result.status).not.toBe("VALID");
}

describe("ops1 I4 allowlist evaluation — declarative deny-by-default", () => {
  let tmpRoot: string;
  let workspaceRoot: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i4-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
    resetOps1DbForTests();

    workspaceRoot = path.join(tmpRoot, "workspace");
    const campus = path.join(workspaceRoot, "projects", "campus360");
    fs.mkdirSync(campus, { recursive: true });
    for (const name of [
      "README.md",
      "01-opportunity-and-vision.md",
      "02-sfia-cycle-coverage-hypothesis.md",
      "03-pre-framing-decision-pack.md",
      "99-unlisted-extra.md",
    ]) {
      fs.writeFileSync(path.join(campus, name), `# ${name}\n`, "utf8");
    }
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("exposes an explicit policy map", () => {
    expect(CAMPUS360_ALLOWLIST_POLICY["projects/campus360/README.md"]).toEqual([
      "READ",
      "MODIFY",
    ]);
    expect(
      CAMPUS360_ALLOWLIST_POLICY[
        "projects/campus360/03-pre-framing-decision-pack.md"
      ],
    ).toEqual(["READ"]);
    expect(
      decideAgainstAllowlistPolicy(
        "projects/campus360/99-unlisted-extra.md",
        "READ",
      ).allowed,
    ).toBe(false);
  });

  it("allows only declared READ/MODIFY/CREATE cases", () => {
    const result = evaluateAllowlist({
      actionCandidateId: ACTION_ID,
      actionVersion: 1,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/README.md", mode: "READ" },
        { path: "projects/campus360/README.md", mode: "MODIFY" },
        {
          path: "projects/campus360/01-opportunity-and-vision.md",
          mode: "READ",
        },
        {
          path: "projects/campus360/01-opportunity-and-vision.md",
          mode: "MODIFY",
        },
        {
          path: "projects/campus360/02-sfia-cycle-coverage-hypothesis.md",
          mode: "READ",
        },
        {
          path: "projects/campus360/02-sfia-cycle-coverage-hypothesis.md",
          mode: "MODIFY",
        },
        {
          path: "projects/campus360/03-pre-framing-decision-pack.md",
          mode: "READ",
        },
        { path: "projects/campus360/04-new-note.md", mode: "CREATE" },
      ],
    });
    expect(result.status).toBe("VALID");
    expect(result.evaluatedEntries.every((e) => e.evaluationStatus === "ALLOWED")).toBe(
      true,
    );
    expect(result.deniedPaths).toEqual([]);
    expect(result.uiStatusLabel).toContain("AUCUNE EXÉCUTION");
  });

  it("denies MODIFY on protected 03 with explicit reason", () => {
    expectDenied(
      "projects/campus360/03-pre-framing-decision-pack.md",
      "MODIFY",
      workspaceRoot,
      /protégé|MODIFY interdit/i,
    );
  });

  it("TOUT CHEMIN NON DÉCLARÉ = DENIED — unlisted existing Campus360 markdown", () => {
    for (const mode of ["READ", "MODIFY"] as const) {
      const result = evaluateAllowlist({
        actionCandidateId: ACTION_ID,
        actionVersion: 1,
        workspaceRoot,
        entries: [
          { path: "projects/campus360/99-unlisted-extra.md", mode },
        ],
      });
      const entry = result.evaluatedEntries[0];
      expect(entry?.evaluationStatus).toBe("DENIED");
      expect(entry?.evaluationReason).toBe(UNDECLARED_PATH_REASON);
      expect(result.allowedReads).not.toContain(
        "projects/campus360/99-unlisted-extra.md",
      );
      expect(result.allowedModifies).not.toContain(
        "projects/campus360/99-unlisted-extra.md",
      );
      expect(result.deniedPaths).toContain(
        "projects/campus360/99-unlisted-extra.md",
      );
    }
  });

  it("denies READ/MODIFY of absent NN-*.md and CREATE on declared files", () => {
    expectDenied(
      "projects/campus360/04-future.md",
      "READ",
      workspaceRoot,
      UNDECLARED_PATH_REASON,
    );
    expectDenied(
      "projects/campus360/04-future.md",
      "MODIFY",
      workspaceRoot,
      UNDECLARED_PATH_REASON,
    );
    expectDenied(
      "projects/campus360/README.md",
      "CREATE",
      workspaceRoot,
      /CREATE|politique/i,
    );
    expectDenied(
      "projects/campus360/01-opportunity-and-vision.md",
      "CREATE",
      workspaceRoot,
      /CREATE|politique/i,
    );
  });

  it("denies case mismatch, trailing slash, wildcard, absolute, .., outside, secrets", () => {
    expectRejected(
      "Projects/campus360/README.md",
      "READ",
      workspaceRoot,
      /Hors projects\/campus360|absent de la politique|interdit/i,
    );
    const trailing = evaluateAllowlist({
      actionCandidateId: ACTION_ID,
      actionVersion: 1,
      workspaceRoot,
      entries: [{ path: "projects/campus360/README.md/", mode: "READ" }],
    });
    expect(trailing.evaluatedEntries[0]?.evaluationStatus).toMatch(
      /DENIED|INVALID/,
    );
    expect(trailing.evaluatedEntries[0]?.evaluationReason).toMatch(
      /Segment vide|« \.\. »|interdit/i,
    );
    expect(trailing.status).not.toBe("VALID");
    expectRejected("projects/campus360/**", "READ", workspaceRoot, /Wildcard/i);
    expectRejected("/tmp/x.md", "READ", workspaceRoot, /absolu/i);
    expectRejected(
      "projects/campus360/../secret.md",
      "READ",
      workspaceRoot,
      /\.\./i,
    );
    expectDenied(
      "projects/sfia-studio/app/lib/ops1/types.ts",
      "READ",
      workspaceRoot,
      /hors|protég/i,
    );
    expectDenied(
      "method/sfia-fast-track/core/x.md",
      "READ",
      workspaceRoot,
      /method/i,
    );
    expectDenied(
      "prompts/templates/x.md",
      "READ",
      workspaceRoot,
      /prompts|protég/i,
    );
    expectDenied("projects/campus360/.env", "READ", workspaceRoot, /\.env|interdit/i);
  });

  it("denies CREATE existing, MODIFY absent declared path, CREATE+MODIFY, duplicate, symlink escape", () => {
    expectDenied(
      "projects/campus360/README.md",
      "CREATE",
      workspaceRoot,
      /CREATE|politique/i,
    );
    // MODIFY on declared path but file deleted
    fs.unlinkSync(
      path.join(workspaceRoot, "projects/campus360/README.md"),
    );
    expectDenied(
      "projects/campus360/README.md",
      "MODIFY",
      workspaceRoot,
      /absent/i,
    );

    const contradiction = evaluateAllowlist({
      actionCandidateId: ACTION_ID,
      actionVersion: 1,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/04-new.md", mode: "CREATE" },
        { path: "projects/campus360/04-new.md", mode: "MODIFY" },
      ],
    });
    expect(
      contradiction.evaluatedEntries.every((e) => e.evaluationStatus !== "ALLOWED"),
    ).toBe(true);

    // restore README for symlink test setup in fresh state — recreate workspace file
    fs.writeFileSync(
      path.join(workspaceRoot, "projects/campus360/README.md"),
      "# README\n",
      "utf8",
    );
    const campus = path.join(workspaceRoot, "projects", "campus360");
    const outside = path.join(workspaceRoot, "outside-secret.md");
    fs.writeFileSync(outside, "nope", "utf8");
    fs.symlinkSync(outside, path.join(campus, "linked.md"));
    expectDenied(
      "projects/campus360/linked.md",
      "READ",
      workspaceRoot,
      /Symlink|absent de la politique/i,
    );
  });

  it("denies outside campus360, empty, and persists/supersedes evaluations", () => {
    expectRejected("   ", "READ", workspaceRoot, /vide/i);

    openOps1Db();
    const { session } = createOpenSession("fixture");
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    const { evaluation } = evaluateAndPersistAllowlist({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      entries: [{ path: "projects/campus360/README.md", mode: "READ" }],
      workspaceRoot,
    });
    expect(evaluation.status).toBe("VALID");
    expect(
      getLatestAllowlistEvaluation(
        candidate.actionCandidateId,
        candidate.version,
      )?.evaluationId,
    ).toBe(evaluation.evaluationId);

    supersedeAllowlistEvaluationsForAction(candidate.actionCandidateId);
    expect(
      getLatestAllowlistEvaluation(
        candidate.actionCandidateId,
        candidate.version,
      ),
    ).toBeNull();
  });

  it("fails for missing action candidate", () => {
    openOps1Db();
    const { session } = createOpenSession("fixture");
    expect(() =>
      evaluateAndPersistAllowlist({
        sessionId: session.sessionId,
        actionCandidateId: "ops1-act-00000000-0000-4000-8000-000000000000",
        entries: [{ path: "projects/campus360/README.md", mode: "READ" }],
        workspaceRoot,
      }),
    ).toThrow(/introuvable/i);
  });
});

```

### `projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i4",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function prepareCandidate(page: import("@playwright/test").Page) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await page.getByTestId("ops1-message-input").fill("Besoin allowlist I4");
  await page.getByTestId("ops1-send-message").click();
  await expect(page.getByTestId("ops1-turn").first()).toBeVisible();
  await page.getByTestId("ops1-i3-create-candidate").click();
  await expect(page.getByTestId("ops1-i4-allowlist")).toBeVisible();
}

test.describe("OPS1 I4 allowlist evaluation — no execution", () => {
  test("valid allowlist with READ/CREATE/MODIFY + no exec CTA", async ({
    page,
  }) => {
    await prepareCandidate(page);
    await expect(page.getByTestId("ops1-increment-badge")).toContainText(
      "OPS1 I4",
    );
    await expect(page.getByTestId("ops1-i4-allowlist-lede")).toContainText(
      "Aucune exécution",
    );
    await expect(page.getByTestId("ops1-i4-no-exec-cta")).toBeVisible();
    await expect(page.getByRole("button", { name: /Exécuter/i })).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("button", { name: /Lancer Cursor/i }),
    ).toHaveCount(0);

    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "ALLOWLIST VALIDE — AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-bucket-reads")).toContainText(
      "README.md",
    );
    await expect(page.getByTestId("ops1-i4-bucket-creates")).toContainText(
      "04-ops1-i4-note.md",
    );
    await expect(page.getByTestId("ops1-i4-bucket-modifies")).toContainText(
      "01-opportunity-and-vision.md",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "01-allowlist-valid.png"),
      fullPage: true,
    });
  });

  test("refuses MODIFY on protected 03", async ({ page }) => {
    await prepareCandidate(page);
    await page.getByTestId("ops1-i4-draft-path-0").fill(
      "projects/campus360/03-pre-framing-decision-pack.md",
    );
    await page.getByTestId("ops1-i4-draft-mode-0").selectOption("MODIFY");
    // Keep only one row for clarity
    while ((await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 1) {
      await page.getByTestId("ops1-i4-draft-remove-1").click();
    }
    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "CORRECTION REQUISE — AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-entry-reason-0")).toContainText(
      "protégé",
    );
    await page.screenshot({
      path: path.join(screenshotDir, "02-deny-modify-03.png"),
      fullPage: true,
    });
  });

  test("refuses unlisted existing Campus360 markdown", async ({ page }) => {
    await prepareCandidate(page);
    await page
      .getByTestId("ops1-i4-draft-path-0")
      .fill("projects/campus360/99-unlisted-extra.md");
    await page.getByTestId("ops1-i4-draft-mode-0").selectOption("READ");
    while (
      (await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 1
    ) {
      await page.getByTestId("ops1-i4-draft-remove-1").click();
    }
    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "CORRECTION REQUISE — AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-entry-reason-0")).toContainText(
      "Chemin absent de la politique allowlist déclarative.",
    );
    await page.screenshot({
      path: path.join(screenshotDir, "04-deny-unlisted-campus360-markdown.png"),
      fullPage: true,
    });
  });

  test("refuses wildcard / outside campus360", async ({ page }) => {
    await prepareCandidate(page);
    await page
      .getByTestId("ops1-i4-draft-path-0")
      .fill("projects/campus360/**");
    await page.getByTestId("ops1-i4-draft-mode-0").selectOption("READ");
    while ((await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 1) {
      await page.getByTestId("ops1-i4-draft-remove-1").click();
    }
    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-entry-reason-0")).toContainText(
      /Wildcard|interdit/i,
    );
    await page.screenshot({
      path: path.join(screenshotDir, "03-deny-wildcard.png"),
      fullPage: true,
    });
  });
});

```

### Diff utile `types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index f38fbcb..f9f9e33 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -85,7 +85,11 @@ export type SessionEventType =
   | "ACTION_CANDIDATE_CREATED"
   | "ACTION_CANDIDATE_REFINED"
   | "GATE_DECISION_RECORDED"
-  | "EXECUTION_REFUSED";
+  | "EXECUTION_REFUSED"
+  | "ALLOWLIST_EVALUATION_STARTED"
+  | "ALLOWLIST_EVALUATION_SUCCEEDED"
+  | "ALLOWLIST_EVALUATION_FAILED"
+  | "ALLOWLIST_CORRECTION_REQUIRED";

 export interface SessionEvent {
   eventId: string;
@@ -159,3 +163,62 @@ export const OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED =
   "ACTION VALIDÉE — NON EXÉCUTÉE";
 export const OPS1_I3_GO_NE_PAS_EXEC =
   "GO ≠ exécution — préparation I4 uniquement";
+
+/* ─── OPS1 I4 — allowlist evaluation (no execution) ─── */
+
+export type AllowlistMode = "READ" | "CREATE" | "MODIFY";
+
+export type AllowlistEvaluationStatus = "ALLOWED" | "DENIED" | "INVALID";
+
+export type AllowlistGlobalStatus =
+  | "VALID"
+  | "INVALID"
+  | "REQUIRES_CORRECTION";
+
+export interface AllowlistInputEntry {
+  path: string;
+  mode: AllowlistMode;
+}
+
+export interface AllowlistEntry {
+  path: string;
+  mode: AllowlistMode;
+  normalizedPath: string;
+  evaluationStatus: AllowlistEvaluationStatus;
+  evaluationReason: string | null;
+}
+
+export interface ActionAllowlistEvaluation {
+  evaluationId?: string;
+  actionCandidateId: string;
+  actionVersion: number;
+  evaluatedEntries: AllowlistEntry[];
+  allowedReads: string[];
+  allowedCreates: string[];
+  allowedModifies: string[];
+  deniedPaths: string[];
+  status: AllowlistGlobalStatus;
+  uiStatusLabel: string;
+  evaluatedAt: string;
+  supersededAt?: string | null;
+}
+
+export const CAMPUS360_ROOT_PREFIX = "projects/campus360";
+
+export const CAMPUS360_PROTECTED_MODIFY =
+  "projects/campus360/03-pre-framing-decision-pack.md";
+
+/** I4 microcopies — evaluation never means execution. */
+export const OPS1_I4_ELIGIBLE_NE_AUTHORIZED = "Éligible ≠ autorisé";
+export const OPS1_I4_NOT_LISTED_FORBIDDEN = "Non listé = interdit";
+export const OPS1_I4_EXHAUSTIVE = "Allowlist exhaustive 1..n";
+export const OPS1_I4_NO_EXEC =
+  "Aucune exécution n’est lancée dans I4";
+export const OPS1_I4_GO_I3_NE_EXEC = "GO I3 ≠ exécution";
+
+export const OPS1_I4_STATUS_VALID =
+  "ALLOWLIST VALIDE — AUCUNE EXÉCUTION";
+export const OPS1_I4_STATUS_CORRECTION =
+  "CORRECTION REQUISE — AUCUNE EXÉCUTION";
+export const OPS1_I4_STATUS_REFUSED =
+  "ALLOWLIST REFUSÉE — AUCUNE EXÉCUTION";

```

## 7. Nouveaux tests négatifs / positifs

Unit (`allowlistEvaluation.test.ts`) — 9 tests :

- politique explicite exposée
- cas autorisés READ/MODIFY 01/02/README + READ 03 + CREATE NN-*.md
- MODIFY 03 refusé
- **TOUT CHEMIN NON DÉCLARÉ = DENIED** (`99-unlisted-extra.md` READ+MODIFY, motif exact `UNDECLARED_PATH_REASON`)
- READ/MODIFY absent NN + CREATE sur fichiers déclarés
- casse, slash final, wildcard, absolu, `..`, hors Campus360, secrets
- CREATE existant, MODIFY absent, CREATE+MODIFY, symlink escape
- persist / supersede

E2E (`ops1-i4-allowlist.spec.ts`) — 4 scénarios + captures :

1. allowlist valide + absence CTA Exécuter / Lancer Cursor → `01-allowlist-valid.png`
2. refus MODIFY 03 → `02-deny-modify-03.png`
3. refus Markdown Campus360 non déclaré → `04-deny-unlisted-campus360-markdown.png`
4. refus wildcard → `03-deny-wildcard.png`

Assertions : `evaluationStatus` / `evaluationReason` / `deniedPaths` / absence des buckets allowed*.

## 8. Résultats tests complets

Depuis `projects/sfia-studio/app` :

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS (0) |
| `npm run lint` | PASS (0) |
| `npm test` | PASS — 21 files / **104** tests |
| `npm run build` | PASS (0) |
| `npx playwright test e2e/ops1-i4-allowlist.spec.ts` | PASS — 4/4 |
| `npx playwright test e2e/ops1-i3-action-gate.spec.ts` | PASS — 5/5 (pas de régression I3) |
| `git diff --check` | PASS |

## 9. Preuve deny-by-default

- Unitaire : `99-unlisted-extra.md` existant → DENIED + `Chemin absent de la politique allowlist déclarative.` + hors `allowedReads`/`allowedModifies`.
- E2E capture `04-deny-unlisted-campus360-markdown.png` : statut `CORRECTION REQUISE — AUCUNE EXÉCUTION` + motif déclaratif.
- CREATE n’est jamais accordé via la map ; READ/MODIFY exigent entrée exacte + mode exact.

## 10. UI (sans refonte)

Microcopies toujours présentes :

- ALLOWLIST VALIDE — AUCUNE EXÉCUTION
- CORRECTION REQUISE — AUCUNE EXÉCUTION
- ALLOWLIST REFUSÉE — AUCUNE EXÉCUTION
- Éligible ≠ autorisé / Non listé = interdit / GO I3 ≠ exécution

Aucun CTA d’exécution. Le motif `UNDECLARED_PATH_REASON` est affiché via `ops1-i4-entry-reason-*`.

## 11. MCP Figma — nouvelle tentative

- Namespace : `plugin-figma-figma` (`namespaceStatus: ready`)
- Tentative incorrecte (wrapper) : `CallDynamicTool` avec paramètre `server` → erreur `Invalid arguments: server: Required` (forme d’appel incorrecte / confusion server vs namespace)
- Tentative correcte : `namespace=plugin-figma-figma` + `toolName=get_metadata|get_screenshot` + `arguments.fileKey/nodeId` → **SUCCÈS**

Frames consultées (fileKey `lrjA1WEyRpL05vKR8k29LO`, page UX-B 61:2) :

| nodeId | Nom | Dimensions metadata |
|--------|-----|---------------------|
| 61:275 | OPS1-UX-03 — Action candidate + allowlist | 1440×1024 |
| 61:1755 | OPS1-UX-VAR-D — GO invalide / dérive allowlist | 1440×1024 |
| 61:2148 | OPS1-UX-VAR-G — Hors allowlist / sans GO | 1440×1024 |

Capture MCP enregistrée :

- `.tmp-sfia-review/screenshots-ops1-i4/figma-61-275-action-candidate-allowlist.png` (asset MCP 1024×729 export)

Fallback Git `52-ops1-visual-contract-and-figma-spec.md` : non requis pour accès (MCP OK), conservé comme contrat sémantique.

## 12. Captures runtime

Viewport Playwright : **1440 × 1024**

| Fichier | Scénario | Texte / statut attendu | Dimensions |
|---------|----------|------------------------|------------|
| `.tmp-sfia-review/screenshots-ops1-i4/01-allowlist-valid.png` | chemins déclarés READ/CREATE/MODIFY | ALLOWLIST VALIDE — AUCUNE EXÉCUTION ; pas de bouton Exécuter | 1440×1024 |
| `.tmp-sfia-review/screenshots-ops1-i4/02-deny-modify-03.png` | MODIFY 03 | CORRECTION REQUISE — AUCUNE EXÉCUTION ; motif protégé | 1440×1024 |
| `.tmp-sfia-review/screenshots-ops1-i4/03-deny-wildcard.png` | wildcard | motif Wildcard / interdit | 1440×1024 |
| `.tmp-sfia-review/screenshots-ops1-i4/04-deny-unlisted-campus360-markdown.png` | Markdown Campus360 non déclaré | Chemin absent de la politique allowlist déclarative. | 1440×1024 |

## 13. Comparaison visuelle + réserve

**Congruence structurelle** (non pixel-perfect) :

- Frames Figma 1440×1024 alignées au viewport runtime.
- Panel allowlist + Action candidate présents dans 61:275 ; libellés Figma incluent « Éligible ≠ autorisation globale », chemins exacts.
- Runtime : panel I4, buckets, statuts anti-exécution, aucun CTA Exécuter.

**Réserve** : pas de conformité pixel-perfect / visual READY fort. Comparaison limitée metadata + screenshot MCP + captures runtime.

## 14. Git status final

```
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/features/ops1/ops1-session.module.css
 M projects/sfia-studio/app/lib/ops1/actionGate.ts
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/db.ts
 M projects/sfia-studio/app/lib/ops1/fixtureReply.ts
 M projects/sfia-studio/app/lib/ops1/ids.ts
 M projects/sfia-studio/app/lib/ops1/index.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
 M projects/sfia-studio/app/lib/ops1/validation.ts
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/ops1/allowlistEvaluation.test.ts
?? projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
?? projects/sfia-studio/app/lib/ops1/allowlistEvaluation.ts
?? projects/sfia-studio/app/lib/ops1/allowlistService.ts

```

### diff --stat

```
 .../app/__tests__/ops1/Ops1SessionScreen.test.tsx  |   2 +
 .../app/__tests__/ops1/globalModeBadge.ui.test.tsx |  12 +-
 .../nouvelle-demande/NouvelleDemandePageClient.tsx |  18 +-
 .../app/features/ops1/Ops1SessionScreen.tsx        | 305 ++++++++++++++++++++-
 .../app/features/ops1/ops1-session.module.css      | 167 +++++++++++
 projects/sfia-studio/app/lib/ops1/actionGate.ts    |  19 ++
 projects/sfia-studio/app/lib/ops1/actions.ts       |  27 ++
 projects/sfia-studio/app/lib/ops1/db.ts            |  19 ++
 projects/sfia-studio/app/lib/ops1/fixtureReply.ts  |   2 +-
 projects/sfia-studio/app/lib/ops1/ids.ts           |   4 +
 projects/sfia-studio/app/lib/ops1/index.ts         |  12 +
 projects/sfia-studio/app/lib/ops1/types.ts         |  65 ++++-
 projects/sfia-studio/app/lib/ops1/validation.ts    |  39 +++
 13 files changed, 673 insertions(+), 18 deletions(-)

```

### diff --cached --stat

```
(vide)
```

## 15. Absence commit / push / PR projet

Confirmé : aucun `git commit` / `git push` / `gh pr create` sur la branche projet `delivery/sfia-studio-ops1-i4-allowlist-evaluation`.

Seul le publisher handoff est autorisé (branche `sfia/review-handoff`).

## 16. Verdict Cursor

**OPS1 I4 CORRECTED WITH FIGMA RESERVATION — READY FOR CHATGPT VALIDATION**

Décision Morris attendue : validation ChatGPT du correctif fail-closed, puis éventuel GO commit/push/PR (hors de ce gate).

ChatGPT doit lire obligatoirement :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
