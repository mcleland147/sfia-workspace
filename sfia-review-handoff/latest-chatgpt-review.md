# Review pack Full — OPS1 I4 allowlist evaluation (no execution)

## 1. Métadonnées

| Champ | Valeur |
|-------|--------|
| Titre | OPS1 I4 — évaluation déterministe allowlist Campus360 |
| Date / heure | 2026-07-21 18:15:43 CEST (Europe/Paris) |
| Rôle Cursor | Exécuteur repository contrôlé |
| Cycle | Delivery OPS1 I4 (périmètre réduit) |
| Profil SFIA | Standard |
| Gate Morris | `GO DELIVERY OPS1 I4` |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `delivery/sfia-studio-ops1-i4-allowlist-evaluation` |
| HEAD initial / courant | `33de2fc41d6c1f5d92198ceb0f75b972a460cb7b` (= origin/main, aucun commit projet) |
| origin/main | `33de2fc41d6c1f5d92198ceb0f75b972a460cb7b` |
| Typologie | EVOL / DELIVERY / UX-UI / QA / SECURITY |

## 2. Qualification du périmètre réduit I4

I4 livré = **évaluation déterministe et visible de l’allowlist** uniquement.
Non livré (reporté) : contrat final, worktree d’action, exécution Cursor, hash contractuel final, I5.

## 3. Sources Git consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` (docs/foundation/* absent — OM via method/)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `projects/sfia-studio/51-ops1-ux-ui-contract.md`
- `projects/sfia-studio/52-ops1-visual-contract-and-figma-spec.md` (dimensions 1440×1024, nodes 61:275 / 61:1755 / 61:2148)
- `projects/sfia-studio/54`–`59` OPS1 scenario/tech
- `projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md`
- code I1–I3 : types, db, actionGate, Ops1SessionScreen, paths

## 4. Figma

| Élément | Valeur |
|---------|--------|
| fileKey | `lrjA1WEyRpL05vKR8k29LO` |
| Page | UX-B — OPS1 `61:2` |
| Frames ciblées | `61:275` action+allowlist ; `61:1755` dérive ; `61:2148` hors allowlist |
| Dimensions Figma (doc 52) | **1440 × 1024** desktop |
| MCP Figma runtime | **Indisponible** — `CallDynamicTool` échoue systématiquement (`server: Required`) |
| Fallback | Contrat Git validé doc 52 + captures runtime |

**Comparaison Figma/runtime :**
- Similitudes : shell Studio, panneau allowlist séparé, catégories READ/CREATE/MODIFY/INTERDIT, statut anti-exécution, pas de CTA exécuter.
- Écarts acceptables : layout local hérité I3 (pas clone pixel-perfect Figma) ; tokens Inter/blue/purple alignés doc 52.
- Écarts bloquants : aucun pour le périmètre I4 réduit.
- Tablette/mobile : non revendiqué (UX-R01).

## 5. Working tree initial

Propre hors `.tmp-sfia-review/**` et `projects/.tmp-sfia-review/**` (temporaires exclus).
Branche créée depuis `origin/main` @ `33de2fc41d6c1f5d92198ceb0f75b972a460cb7b`.

## 6. Fichiers créés / modifiés

### Créés

- `projects/sfia-studio/app/lib/ops1/allowlistEvaluation.ts`
- `projects/sfia-studio/app/lib/ops1/allowlistService.ts`
- `projects/sfia-studio/app/__tests__/ops1/allowlistEvaluation.test.ts`
- `projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts`

### Modifiés
- `lib/ops1/types.ts`, `db.ts`, `ids.ts`, `index.ts`, `validation.ts`, `actions.ts`, `actionGate.ts`, `fixtureReply.ts`
- `features/ops1/Ops1SessionScreen.tsx`, `ops1-session.module.css`
- `features/nouvelle-demande/NouvelleDemandePageClient.tsx`
- tests UI mocks (`Ops1SessionScreen.test.tsx`, `globalModeBadge.ui.test.tsx`)

### Interdits vérifiés non touchés
method/**, prompts/**, docs/**, scripts/**, .github/**, projects/campus360/**, CI, secrets.

## 7. Modèle de données & migration

Types : `AllowlistEntry`, `AllowlistEvaluationStatus`, `ActionAllowlistEvaluation`, statuts VALID / INVALID / REQUIRES_CORRECTION.
Table additive `allowlist_evaluations` (idempotente via CREATE IF NOT EXISTS) liée à `action_candidate_id` + `action_version`, avec `superseded_at`.
Événements : ALLOWLIST_EVALUATION_STARTED / SUCCEEDED / FAILED / CORRECTION_REQUIRED.
Aucun état EXECUTING/COMPLETED.

## 8. Règles d’évaluation

- Normalisation ; refus absolu / `..` / vide / wildcards / hors campus360 / method/prompts/code/CI/secrets
- README/01/02 READ|MODIFY si listés ; 03 READ ok, MODIFY interdit ; CREATE = NN-*.md absent exact
- CREATE+MODIFY même chemin, doublons, symlink sortant, fichier existant CREATE, absent MODIFY → refus
- Non listé = interdit ; aucune mutation FS d’écriture ; pas de réseau

## 9. Matrice cas tests

Autorisés : READ/MODIFY README, READ 01, MODIFY 02, READ 03, CREATE 04-*.md
Refusés : MODIFY 03, hors campus360, wildcard, absolu, .., vide, symlink, CREATE existant, MODIFY absent, CREATE+MODIFY, doublon, method/prompts/.env, action absente

## 10. Contenu fichiers créés (complets)

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
  if (!cleaned.startsWith(`${CAMPUS360_ROOT_PREFIX}/`) && cleaned !== CAMPUS360_ROOT_PREFIX) {
    // still may fail later for prefix; normalization itself OK if relative
  }
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

  // Existence / symlink / protected 03 / naming rules
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

    if (draft.mode === "MODIFY" && draft.normalizedPath === CAMPUS360_PROTECTED_MODIFY) {
      draft.evaluationStatus = "DENIED";
      draft.evaluationReason =
        "03-pre-framing-decision-pack.md est protégé — MODIFY interdit dans le scénario nominal OPS1.";
      continue;
    }

    if (draft.mode === "CREATE") {
      if (!isNnMarkdownCreate(draft.normalizedPath)) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason =
          "CREATE réservé aux nouveaux fichiers projects/campus360/NN-*.md exacts.";
        continue;
      }
      if (disk.exists) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason =
          "Fichier existant déclaré CREATE — utiliser MODIFY si éligible.";
        continue;
      }
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
      // READ may target existing files; absent READ is denied (non listable phantom)
      if (!disk.exists && draft.normalizedPath !== CAMPUS360_PROTECTED_MODIFY) {
        // Allow READ of existing only — absent = denied
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason = "Fichier absent — READ impossible.";
        continue;
      }
      if (!disk.exists && draft.normalizedPath === CAMPUS360_PROTECTED_MODIFY) {
        draft.evaluationStatus = "DENIED";
        draft.evaluationReason = "Fichier 03 introuvable sur disque.";
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
import { evaluateAllowlist } from "@/lib/ops1/allowlistEvaluation";
import {
  evaluateAndPersistAllowlist,
  getLatestAllowlistEvaluation,
  supersedeAllowlistEvaluationsForAction,
} from "@/lib/ops1/allowlistService";
import { createFixtureActionCandidate } from "@/lib/ops1/actionGate";
import { createOpenSession } from "@/lib/ops1/repository";
import { resetOps1DbForTests } from "@/lib/ops1/db";
import { openOps1Db } from "@/lib/ops1/db";

describe("ops1 I4 allowlist evaluation", () => {
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
    ]) {
      fs.writeFileSync(path.join(campus, name), `# ${name}\n`, "utf8");
    }
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("allows READ/MODIFY/CREATE campus360 cases", () => {
    const result = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
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
    expect(result.allowedReads).toContain(
      "projects/campus360/README.md",
    );
    expect(result.allowedCreates).toContain(
      "projects/campus360/04-new-note.md",
    );
    expect(result.uiStatusLabel).toContain("AUCUNE EXÉCUTION");
  });

  it("denies MODIFY on protected 03", () => {
    const result = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
      actionVersion: 1,
      workspaceRoot,
      entries: [
        {
          path: "projects/campus360/03-pre-framing-decision-pack.md",
          mode: "MODIFY",
        },
      ],
    });
    expect(result.status).toBe("REQUIRES_CORRECTION");
    expect(result.evaluatedEntries[0]?.evaluationStatus).toBe("DENIED");
    expect(result.evaluatedEntries[0]?.evaluationReason).toMatch(/protégé/i);
  });

  it("denies outside campus360, wildcards, absolute, .., empty", () => {
    const cases = [
      { path: "projects/sfia-studio/app/lib/ops1/types.ts", mode: "READ" as const },
      { path: "projects/campus360/**", mode: "READ" as const },
      { path: "/tmp/x.md", mode: "READ" as const },
      { path: "projects/campus360/../secret.md", mode: "READ" as const },
      { path: "   ", mode: "READ" as const },
      { path: "method/sfia-fast-track/core/x.md", mode: "READ" as const },
      { path: "prompts/templates/x.md", mode: "READ" as const },
      { path: "projects/campus360/.env", mode: "READ" as const },
    ];
    for (const entry of cases) {
      const result = evaluateAllowlist({
        actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
        actionVersion: 1,
        workspaceRoot,
        entries: [entry],
      });
      expect(result.status).not.toBe("VALID");
      expect(result.evaluatedEntries[0]?.evaluationStatus).not.toBe("ALLOWED");
    }
  });

  it("denies CREATE existing, MODIFY absent, CREATE+MODIFY contradiction, duplicate", () => {
    const createExisting = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
      actionVersion: 1,
      workspaceRoot,
      entries: [{ path: "projects/campus360/README.md", mode: "CREATE" }],
    });
    expect(createExisting.evaluatedEntries[0]?.evaluationStatus).toBe("DENIED");

    const modifyAbsent = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
      actionVersion: 1,
      workspaceRoot,
      entries: [{ path: "projects/campus360/09-missing.md", mode: "MODIFY" }],
    });
    expect(modifyAbsent.evaluatedEntries[0]?.evaluationStatus).toBe("DENIED");

    const contradiction = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
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

    const dup = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
      actionVersion: 1,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/README.md", mode: "READ" },
        { path: "./projects/campus360/README.md", mode: "READ" },
      ],
    });
    // second may normalize same — duplicate of mode+path
    expect(dup.evaluatedEntries.some((e) => e.evaluationStatus === "INVALID")).toBe(
      true,
    );
  });

  it("denies escaping symlink", () => {
    const campus = path.join(workspaceRoot, "projects", "campus360");
    const outside = path.join(workspaceRoot, "outside-secret.md");
    fs.writeFileSync(outside, "nope", "utf8");
    fs.symlinkSync(outside, path.join(campus, "linked.md"));
    const result = evaluateAllowlist({
      actionCandidateId: "ops1-act-11111111-1111-4111-8111-111111111111",
      actionVersion: 1,
      workspaceRoot,
      entries: [{ path: "projects/campus360/linked.md", mode: "READ" }],
    });
    expect(result.evaluatedEntries[0]?.evaluationStatus).toBe("DENIED");
    expect(result.evaluatedEntries[0]?.evaluationReason).toMatch(/Symlink/i);
  });

  it("persists evaluation linked to action+version and supersedes on refine", () => {
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
    const latest = getLatestAllowlistEvaluation(
      candidate.actionCandidateId,
      candidate.version,
    );
    expect(latest?.evaluationId).toBe(evaluation.evaluationId);

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

## 11. Diffs utiles (fichiers modifiés sélectionnés)

```diff
diff --git a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
index 5244a82..5931b3d 100644
--- a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
+++ b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
@@ -14,21 +14,21 @@ import {
 const COPILOT = {
   variant: "flush" as const,
   name: "Nora · SFIA Copilot",
-  subtitle: "OPS1 I3 — action gate / fixture first",
+  subtitle: "OPS1 I4 — allowlist evaluation / no execution",
   avatarTone: "blue" as const,
   levelPill: "L0 humain",
   summary:
-    "Proposition d’action hors chat et gate Morris (GO / NO_GO / CORRIGER / ABANDONNER). Fixture first — aucune exécution ; allowlist reportée à I4.",
+    "Évaluation déterministe de l’allowlist Campus360 (READ / CREATE / MODIFY). Éligible ≠ autorisé — aucune exécution Cursor.",
   checklist: [
-    "Créer session OPEN (fixture first)",
-    "Qualifier ou proposer un ActionCandidate",
-    "Décider via les quatre gate actions",
-    "Aucune exécution Cursor / Git / filesystem",
+    "Action candidate I3 disponible",
+    "Saisir allowlist exhaustive 1..n",
+    "Évaluer (VALID / CORRECTION / REFUSÉE)",
+    "Aucune exécution — worktree / push / PR reportés",
   ],
-  checklistTitle: "Parcours I3",
+  checklistTitle: "Parcours I4",
   riskTitle: "PÉRIMÈTRE",
   riskText:
-    "I3 n’ouvre pas l’exécution ni l’allowlist I4, ni la clôture CLOSED, ni la CI. GO ≠ exécution.",
+    "I4 n’ouvre pas l’exécution, le worktree d’action, ni l’allowlist I5. Non listé = interdit. GO I3 ≠ exécution.",
 };

 function NouvelleDemandeBody({
@@ -81,7 +81,7 @@ export function NouvelleDemandePageClient() {
           tone: badge.tone,
           testId: "global-mode-badge",
         },
-        { label: "OPS1 I3", tone: "blueFlush", testId: "ops1-increment-badge" },
+        { label: "OPS1 I4", tone: "blueFlush", testId: "ops1-increment-badge" },
       ]}
       copilot={COPILOT}
     >
diff --git a/projects/sfia-studio/app/lib/ops1/db.ts b/projects/sfia-studio/app/lib/ops1/db.ts
index 27eeeed..8915781 100644
--- a/projects/sfia-studio/app/lib/ops1/db.ts
+++ b/projects/sfia-studio/app/lib/ops1/db.ts
@@ -104,6 +104,25 @@ CREATE INDEX IF NOT EXISTS idx_actions_session

 CREATE INDEX IF NOT EXISTS idx_gates_action
   ON gate_decisions(action_candidate_id, created_at);
+
+CREATE TABLE IF NOT EXISTS allowlist_evaluations (
+  evaluation_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  action_candidate_id TEXT NOT NULL,
+  action_version INTEGER NOT NULL CHECK (action_version >= 1),
+  status TEXT NOT NULL CHECK (status IN (
+    'VALID', 'INVALID', 'REQUIRES_CORRECTION'
+  )),
+  ui_status_label TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  evaluated_at TEXT NOT NULL,
+  superseded_at TEXT,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
+  FOREIGN KEY (action_candidate_id) REFERENCES action_candidates(action_candidate_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_allowlist_action_version
+  ON allowlist_evaluations(action_candidate_id, action_version, evaluated_at);
 `;

 let singleton: DatabaseSync | null = null;
diff --git a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
index de79cb7..c2e014b 100644
--- a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
+++ b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
@@ -3,7 +3,7 @@ export function buildFixtureAssistantReply(userContent: string): string {
   const preview =
     userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
   return [
-    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I3.",
+    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I4.",
     "Aucun fournisseur GPT n’a été appelé.",
     `Echo borné : « ${preview} »`,
   ].join(" ");
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
diff --git a/projects/sfia-studio/app/lib/ops1/validation.ts b/projects/sfia-studio/app/lib/ops1/validation.ts
index 0a18d3e..ed21ba4 100644
--- a/projects/sfia-studio/app/lib/ops1/validation.ts
+++ b/projects/sfia-studio/app/lib/ops1/validation.ts
@@ -1,5 +1,7 @@
 import {
   OPS1_MAX_MESSAGE_CHARS,
+  type AllowlistInputEntry,
+  type AllowlistMode,
   type ConversationMode,
   type GateDecisionKind,
   type TurnRole,
@@ -81,3 +83,40 @@ export function assertConversationMode(mode: unknown): ConversationMode {
   if (mode === "fixture" || mode === "live") return mode;
   throw new Ops1Error("VALIDATION", "Mode conversationnel invalide.");
 }
+
+export function assertAllowlistMode(mode: unknown): AllowlistMode {
+  if (mode === "READ" || mode === "CREATE" || mode === "MODIFY") return mode;
+  throw new Ops1Error("VALIDATION", "Mode allowlist invalide.");
+}
+
+export function assertAllowlistEntries(raw: unknown): AllowlistInputEntry[] {
+  if (!Array.isArray(raw) || raw.length === 0) {
+    throw new Ops1Error(
+      "VALIDATION",
+      "Allowlist exhaustive requise (au moins une entrée).",
+    );
+  }
+  if (raw.length > 50) {
+    throw new Ops1Error("VALIDATION", "Allowlist trop longue (max 50).");
+  }
+  return raw.map((item, index) => {
+    if (!item || typeof item !== "object") {
+      throw new Ops1Error(
+        "VALIDATION",
+        `Entrée allowlist #${index + 1} invalide.`,
+      );
+    }
+    const record = item as Record<string, unknown>;
+    const pathValue = record.path;
+    if (typeof pathValue !== "string") {
+      throw new Ops1Error(
+        "VALIDATION",
+        `Chemin allowlist #${index + 1} invalide.`,
+      );
+    }
+    return {
+      path: pathValue,
+      mode: assertAllowlistMode(record.mode),
+    };
+  });
+}

```

## 12. Tests exécutés

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` (`next lint`) | PASS (0 errors ; dépréciation Next 16) |
| `npm test` | PASS 102/102 |
| `npm run build` | PASS |
| `npx playwright test e2e/ops1-i4-allowlist.spec.ts` | PASS 3/3 |
| `npx playwright test e2e/ops1-i3-action-gate.spec.ts` | PASS 5/5 (non-régression) |
| `git diff --check` | PASS |

## 13. Preuves runtime

Viewport e2e ~1440×1024 ; route `/nouvelle-demande` ; fixture session + ActionCandidate.

| Capture | Chemin |
|---------|--------|
| Allowlist valide | `.tmp-sfia-review/screenshots-ops1-i4/01-allowlist-valid.png` |
| Refus MODIFY 03 | `.tmp-sfia-review/screenshots-ops1-i4/02-deny-modify-03.png` |
| Refus wildcard | `.tmp-sfia-review/screenshots-ops1-i4/03-deny-wildcard.png` |

Statuts observés : `ALLOWLIST VALIDE — AUCUNE EXÉCUTION` ; `CORRECTION REQUISE — AUCUNE EXÉCUTION` ; absence boutons Exécuter / Lancer Cursor.

## 14. Accessibilité

- Verdict textuel (ALLOWED/DENIED/INVALID) + motif associé
- `aria-live` sur résultat ; labels sur inputs/selects ; focus visible CSS
- Pas de verdict couleur seule

## 15. Sécurité

- Fail-closed path rules ; pas de secrets dans le diff ; campus360 non modifié
- Pas d’exécution / réseau / Git distant depuis I4

## 16. git status / diff

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
?? projects/sfia-studio/app/__tests__/ops1/allowlistEvaluation.test.ts
?? projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
?? projects/sfia-studio/app/lib/ops1/allowlistEvaluation.ts
?? projects/sfia-studio/app/lib/ops1/allowlistService.ts

```

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
 projects/sfia-studio/app/lib/ops1/index.ts         |   9 +
 projects/sfia-studio/app/lib/ops1/types.ts         |  65 ++++-
 projects/sfia-studio/app/lib/ops1/validation.ts    |  39 +++
 13 files changed, 670 insertions(+), 18 deletions(-)

```

## 17. Réserves & dette

- MCP Figma inaccessible (harness) — validation visuelle via doc 52 + runtime
- `next lint` déprécié Next 16
- Tablette/mobile non validés Figma
- I4 historique complet (worktree, exécution, contrat final) **non** livré — reporté

## 18. Éléments reportés

I5 / cycles ultérieurs : exécution Cursor, worktree action, contrat/hash final, gel post-GO exécution, rapport diffs multi-fichiers.

## 19. Garde-fous

Aucun commit / push / PR / merge projet. Aucune modification method/prompts/docs/campus360/CI.
Handoff uniquement via publisher canonique.

## 20. Review Handoff

| Champ | Valeur |
|-------|--------|
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Message | `docs(review-handoff): publish OPS1 I4 allowlist evaluation review` |
| Worktree | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| Verdict | `HANDOFF UPDATED — REMOTE VERIFIED` |
| Commit handoff | `707a4a396a9416fbc4ce9fb3b964368f2145726e` |
| Blob | `4f2b6fe519a6c0f83bc0eed2ea861fc3add7b200` |
| Path | `sfia-review-handoff/latest-chatgpt-review.md` |

## 21. Décision Morris attendue

Revue ChatGPT du handoff distant puis GO éventuel commit/push/PR I4 (distinct).

## 22. Verdict Cursor

**OPS1 I4 IMPLEMENTED WITH RESERVATIONS — READY FOR CHATGPT VALIDATION**

Réserve principale : MCP Figma non consultable en live ; preuves runtime + contrat Git 52 présents.
