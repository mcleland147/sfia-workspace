# SFIA Review Pack — Delivery OPS1 I5 (Full)

## Métadonnées

- **date/heure** : 2026-07-21 19:12:25 CEST
- **cycle** : Delivery OPS1 I5 — contrat final / revalidation / exécution Cursor bornée
- **profil** : Critical
- **gate Morris** : `GO DELIVERY OPS1 I5 — première exécution Cursor réelle Campus360 autorisée`
- **repo** : mcleland147/sfia-workspace
- **branche** : `delivery/sfia-studio-ops1-i5-real-execution`
- **HEAD / base** : `4b279b8af41559c4e6e9c41a481c9c3b76675026` (= origin/main `4b279b8af41559c4e6e9c41a481c9c3b76675026`)
- **commit/push/PR projet** : **AUCUN**
- **trajectoire** : I5 exécution · I6 rapport/analyse · I7 clôture — **aucune absorption I6/I7**

## 1. Git status initial

- branche créée depuis `main` @ `4b279b8`
- working tree initial propre
- branche : `delivery/sfia-studio-ops1-i5-real-execution`

## 2. Sources Git consultées

Méthode : templates + routing + operating model + guardrails.

OPS1 : 41–43, 45–46, 48–49, 51–52, 54–55, 57–58, 60–64 (nom réel `64-ops1-local-controls-ci-and-evidence-contract.md`), README.

Code I1–I4 : `app/lib/ops1/**`, features ops1, e2e i1–i4.

Harness : `contractHash`/`canonicalize`, `cursorRealSpike` (référence adaptateur).

## 3. Cadrage I5 / I6 / I7 retenu

I5 livre : contrat final, hash, GO lié au hash, revalidation, worktree, adaptateur Cursor (fixture explicite + réel gated), post-check, résultat technique minimal, anti-double-exécution.

I5 n’absorbe pas : rapport métier consolidé I6, analyse GPT I6, reprise conversationnelle I6, CLOSED/immutabilité I7.

## 4. Architecture réalisée

```
Allowlist I4 VALID + ActionCandidate APPROVED
  → createExecutionContract (READY_FOR_GATE + SHA-256)
  → recordExecutionGate (Morris GO lié contractHash+actionVersion+baseHeadSha)
  → revalidateBeforeExecution (fail-closed)
  → git worktree add sous .sfia-exec/worktrees/<attemptId>/
  → cursor adapter fixture|real
  → postCheckExecution + preuve absence effet Campus360 principal
  → MinimalExecutionResult persisté
```

## 5. Politique contrat / hash / gate

- Canonicalisation : clés objet triées récursivement, UTF-8, SHA-256.
- `contractHash` ≠ `executionAttemptId`.
- GO I3 / GO delivery / chat ≠ GO I5.
- Mutation payload → hash différent.
- Gel : pas d’extension allowlist après GO ; nouveau contrat requis.

## 6. Revalidation (extrait)

Session OPEN, candidate/version, allowlist VALID liée, hash recalculé, GO actif lié, HEAD = baseHeadSha, staged vide, forbiddenPaths, limites, flags noRemote*, anti SUCCEEDED/RUNNING.

Réserve e2e : `OPS1_E2E_ALLOW_DIRTY_PRINCIPAL=1` uniquement via Playwright (sources delivery non commitées) — **jamais pour exécution Campus360 réelle**.

## 7. Worktree / adaptateur

- Worktree : `projects/sfia-studio/.sfia-exec/worktrees/<executionAttemptId>/` (gitignored).
- Branche locale `ops1/action/<attemptId>` — jamais push/merge/commit auto.
- Fixture : effet Markdown déterministe explicite (pas un substitut silencieux du réel).
- Réel : `OPS1_CURSOR_REAL=1` + binaire Cursor ; sinon `CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE`.

## 8. Action réelle Campus360

**Non déclenchée** dans ce cycle : aucun contrat métier concret saisi/confirmé par Morris dans Studio pour un adaptateur `real` sur Campus360.

Preuves fournies : fixture intégration + e2e (mécanisme I5).

Verdict attendu : attente de contrat d’action Morris.

## 9. Tests

| Commande | Résultat |
|----------|----------|
| typecheck | PASS |
| lint | PASS |
| npm test | PASS — **107** tests |
| build | PASS |
| e2e I5 | PASS — 3/3 |
| e2e I3+I4+I5 | PASS — 12/12 |
| e2e I1+I2 inclus dans campagne précédente / non-régression I3–I5 OK |

## 10. Figma

- fileKey `lrjA1WEyRpL05vKR8k29LO`
- Frame I5 trouvée : **61:536** — `OPS1-UX-06 — Exécution Cursor + STOP` (1440×1024)
- Capture : `.tmp-sfia-review/screenshots-ops1-i5/figma-61-536-execution-cursor.png`
- Runtime captures : `01-contract-no-go.png`, `02-fixture-succeeded.png`, `03-microcopies.png`
- Réserve : comparaison structurelle uniquement — **pas de visual READY fort**

## 11. Confirmations

- Aucun commit/push/PR projet
- Aucune écriture Campus360 dans le working tree principal
- Aucun remote Git depuis Studio
- I6/I7 non implémentés
- Worktree ≠ sandbox OS forte (réserve documentée)

## 12. Git status final

```
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
 M projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/features/ops1/ops1-session.module.css
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/db.ts
 M projects/sfia-studio/app/lib/ops1/fixtureReply.ts
 M projects/sfia-studio/app/lib/ops1/ids.ts
 M projects/sfia-studio/app/lib/ops1/index.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
 M projects/sfia-studio/app/playwright.config.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/ops1/executionI5.test.ts
?? projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
?? projects/sfia-studio/app/lib/ops1/cursorExecutionAdapter.ts
?? projects/sfia-studio/app/lib/ops1/executionCanonicalize.ts
?? projects/sfia-studio/app/lib/ops1/executionContractService.ts
?? projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
?? projects/sfia-studio/app/lib/ops1/executionPostCheck.ts
?? projects/sfia-studio/app/lib/ops1/executionRevalidation.ts
?? projects/sfia-studio/app/lib/ops1/executionWorktree.ts

```

### diff --stat

```
 .../app/__tests__/ops1/globalModeBadge.ui.test.tsx |   8 +-
 .../sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts  |   2 +-
 .../nouvelle-demande/NouvelleDemandePageClient.tsx |  18 +-
 .../app/features/ops1/Ops1SessionScreen.tsx        | 245 ++++++++++++++++++++-
 .../app/features/ops1/ops1-session.module.css      |   5 +
 projects/sfia-studio/app/lib/ops1/actions.ts       | 120 ++++++++++
 projects/sfia-studio/app/lib/ops1/db.ts            |  70 ++++++
 projects/sfia-studio/app/lib/ops1/fixtureReply.ts  |   2 +-
 projects/sfia-studio/app/lib/ops1/ids.ts           |  16 ++
 projects/sfia-studio/app/lib/ops1/index.ts         |  23 ++
 projects/sfia-studio/app/lib/ops1/types.ts         | 149 ++++++++++++-
 projects/sfia-studio/app/playwright.config.ts      |   1 +
 12 files changed, 640 insertions(+), 19 deletions(-)

```

## 13. Verdict Cursor

**OPS1 I5 IMPLEMENTED — REAL EXECUTION AWAITING MORRIS ACTION CONTRACT**

Décision Morris attendue : valider le mécanisme I5 (ChatGPT), puis saisir/confirmer dans Studio un contrat concret Campus360 + GO lié au hash pour la première exécution Cursor réelle.

## 14. Fichiers créés (contenu complet)

### `projects/sfia-studio/app/lib/ops1/executionCanonicalize.ts`

```typescript
import { createHash } from "node:crypto";
import type { ExecutionContractPayload } from "./types";

/** Deterministic JSON canonicalization (sorted object keys, recursive). */
export function canonicalize(value: unknown): string {
  return JSON.stringify(sortValue(value));
}

function sortValue(value: unknown): unknown {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  const obj = value as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(obj).sort()) {
    out[key] = sortValue(obj[key]);
  }
  return out;
}

/**
 * Hash payload only — never includes executionAttemptId or volatile runtime fields.
 * Same canonical payload → same SHA-256 hex.
 */
export function computeContractHash(
  payload: ExecutionContractPayload,
): string {
  const canonical = canonicalize(payload);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

export function digestText(text: string, max = 2000): string {
  const clipped = text.length > max ? text.slice(0, max) + "…" : text;
  const hash = createHash("sha256").update(text, "utf8").digest("hex").slice(0, 16);
  return `[sha256:${hash} len=${text.length}] ${clipped.replace(/sk-[A-Za-z0-9]+/g, "[redacted]")}`;
}

```

### `projects/sfia-studio/app/lib/ops1/executionContractService.ts`

```typescript
import { execFileSync } from "node:child_process";
import type { DatabaseSync } from "node:sqlite";
import { createContractId, createEventId, createExecutionGateId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { computeContractHash } from "./executionCanonicalize";
import { getLatestAllowlistEvaluation } from "./allowlistService";
import { resolveWorkspaceRootFromAppCwd } from "./allowlistEvaluation";
import type {
  CursorAdapterMode,
  ExecutionContract,
  ExecutionContractPayload,
  ExecutionGateRecord,
  SessionEvent,
  SessionEventType,
} from "./types";
import {
  OPS1_DEFAULT_FORBIDDEN_PATHS,
  OPS1_I5_CONTRACT_VERSION,
} from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
): SessionEvent {
  const eventId = createEventId();
  const createdAt = nowIsoWithOffset();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

export function readGitHead(workspaceRoot: string): string {
  return execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
}

export function readGitBranch(workspaceRoot: string): string {
  return execFileSync("git", ["branch", "--show-current"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
}

function sortPaths(paths: string[]): string[] {
  return [...new Set(paths)].sort();
}

export function buildContractPayload(input: {
  sessionId: string;
  actionCandidateId: string;
  actionVersion: number;
  actionObjective: string;
  actionInstructions: string;
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  maxFilesRead?: number;
  maxFilesCreated?: number;
  maxFilesModified?: number;
  maxDiffLines?: number;
  timeoutSeconds?: number;
  workspaceRoot?: string;
  executionBranchName?: string;
  createdAt?: string;
}): ExecutionContractPayload {
  const workspaceRoot = input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const baseHeadSha = readGitHead(workspaceRoot);
  const baseBranch = readGitBranch(workspaceRoot) || "HEAD";
  const allowedReads = sortPaths(input.allowedReads);
  const allowedCreates = sortPaths(input.allowedCreates);
  const allowedModifies = sortPaths(input.allowedModifies);
  const ops = new Set<"READ" | "CREATE" | "MODIFY">();
  if (allowedReads.length) ops.add("READ");
  if (allowedCreates.length) ops.add("CREATE");
  if (allowedModifies.length) ops.add("MODIFY");

  return {
    contractVersion: OPS1_I5_CONTRACT_VERSION,
    sessionId: input.sessionId,
    actionCandidateId: input.actionCandidateId,
    actionVersion: input.actionVersion,
    gateDecisionId: null,
    gateDecisionType: null,
    gateDecidedBy: null,
    gateDecidedAt: null,
    repositoryRoot: "mcleland147/sfia-workspace",
    baseBranch,
    baseHeadSha,
    executionBranchName:
      input.executionBranchName ?? "ops1/action/pending",
    actionObjective: input.actionObjective.trim(),
    actionInstructions: input.actionInstructions.trim(),
    allowedReads,
    allowedCreates,
    allowedModifies,
    forbiddenPaths: [...OPS1_DEFAULT_FORBIDDEN_PATHS],
    allowedOperations: [...ops].sort() as Array<"READ" | "CREATE" | "MODIFY">,
    maxFilesRead: input.maxFilesRead ?? Math.max(allowedReads.length, 1),
    maxFilesCreated: input.maxFilesCreated ?? Math.max(allowedCreates.length, 0),
    maxFilesModified:
      input.maxFilesModified ?? Math.max(allowedModifies.length, 0),
    maxDiffLines: input.maxDiffLines ?? 200,
    timeoutSeconds: input.timeoutSeconds ?? 120,
    noRemoteGit: true,
    noCommit: true,
    noPush: true,
    noPr: true,
    noMerge: true,
    createdAt: input.createdAt ?? nowIsoWithOffset(),
  };
}

function mapContract(row: Record<string, unknown>): ExecutionContract {
  const payload = JSON.parse(String(row.payload_json)) as ExecutionContractPayload;
  return {
    ...payload,
    contractId: String(row.contract_id),
    contractHash: String(row.contract_hash),
    status: row.status as ExecutionContract["status"],
    allowlistEvaluationId: String(row.allowlist_evaluation_id),
    adapterMode: row.adapter_mode as CursorAdapterMode,
    supersededAt: row.superseded_at == null ? null : String(row.superseded_at),
  };
}

export function getLatestExecutionContract(
  actionCandidateId: string,
  actionVersion: number,
  db = openOps1Db(),
): ExecutionContract | null {
  const row = db
    .prepare(
      `SELECT * FROM execution_contracts
       WHERE action_candidate_id = ?
         AND action_version = ?
         AND superseded_at IS NULL
       ORDER BY created_at DESC
       LIMIT 1`,
    )
    .get(actionCandidateId, actionVersion) as Record<string, unknown> | undefined;
  return row ? mapContract(row) : null;
}

export function getExecutionContractById(
  contractId: string,
  db = openOps1Db(),
): ExecutionContract | null {
  const row = db
    .prepare(`SELECT * FROM execution_contracts WHERE contract_id = ?`)
    .get(contractId) as Record<string, unknown> | undefined;
  return row ? mapContract(row) : null;
}

export function getActiveExecutionGate(
  contractId: string,
  db = openOps1Db(),
): ExecutionGateRecord | null {
  const row = db
    .prepare(
      `SELECT * FROM execution_gates
       WHERE contract_id = ? AND superseded_at IS NULL
       ORDER BY decided_at DESC LIMIT 1`,
    )
    .get(contractId) as Record<string, unknown> | undefined;
  if (!row) return null;
  return {
    executionGateId: String(row.execution_gate_id),
    contractId: String(row.contract_id),
    contractHash: String(row.contract_hash),
    actionCandidateId: String(row.action_candidate_id),
    actionVersion: Number(row.action_version),
    baseHeadSha: String(row.base_head_sha),
    decidedBy: "Morris",
    decidedAt: String(row.decided_at),
    supersededAt: row.superseded_at == null ? null : String(row.superseded_at),
  };
}

/**
 * Create READY_FOR_GATE contract from VALID I4 allowlist + Morris-confirmed fields.
 * Does not invent Campus360 content — objective/instructions come from caller.
 */
export function createExecutionContract(input: {
  sessionId: string;
  actionCandidateId: string;
  actionObjective: string;
  actionInstructions: string;
  adapterMode?: CursorAdapterMode;
  workspaceRoot?: string;
  maxFilesRead?: number;
  maxFilesCreated?: number;
  maxFilesModified?: number;
  maxDiffLines?: number;
  timeoutSeconds?: number;
}): { contract: ExecutionContract; event: SessionEvent } {
  const db = openOps1Db();
  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session || session.status !== "OPEN") {
    throw new Ops1Error("CONFLICT", "Session absente ou non OPEN.");
  }

  const candidate = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(input.actionCandidateId) as Record<string, unknown> | undefined;
  if (!candidate) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (String(candidate.session_id) !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "ActionCandidate hors session.");
  }
  if (String(candidate.status) !== "APPROVED") {
    throw new Ops1Error(
      "CONFLICT",
      "ActionCandidate non APPROVED — GO I3 requis avant contrat I5.",
    );
  }

  const actionVersion = Number(candidate.version);
  const evaluation = getLatestAllowlistEvaluation(
    input.actionCandidateId,
    actionVersion,
    db,
  );
  if (!evaluation || evaluation.status !== "VALID" || !evaluation.evaluationId) {
    throw new Ops1Error(
      "CONFLICT",
      "Allowlist I4 VALID requise avant contrat d’exécution.",
    );
  }

  const objective = input.actionObjective.trim();
  const instructions = input.actionInstructions.trim();
  if (!objective || !instructions) {
    throw new Ops1Error(
      "VALIDATION",
      "Objectif et instructions exactes requis (Morris) — Cursor ne choisit pas le contenu.",
    );
  }

  // Supersede prior contracts for this action version
  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE execution_contracts
     SET superseded_at = ?, status = 'SUPERSEDED'
     WHERE action_candidate_id = ?
       AND action_version = ?
       AND superseded_at IS NULL`,
  ).run(at, input.actionCandidateId, actionVersion);
  db.prepare(
    `UPDATE execution_gates SET superseded_at = ?
     WHERE action_candidate_id = ?
       AND action_version = ?
       AND superseded_at IS NULL`,
  ).run(at, input.actionCandidateId, actionVersion);

  const contractId = createContractId();
  const payload = buildContractPayload({
    sessionId: input.sessionId,
    actionCandidateId: input.actionCandidateId,
    actionVersion,
    actionObjective: objective,
    actionInstructions: instructions,
    allowedReads: evaluation.allowedReads,
    allowedCreates: evaluation.allowedCreates,
    allowedModifies: evaluation.allowedModifies,
    workspaceRoot: input.workspaceRoot,
    executionBranchName: `ops1/action/${contractId}`,
    maxFilesRead: input.maxFilesRead,
    maxFilesCreated: input.maxFilesCreated,
    maxFilesModified: input.maxFilesModified,
    maxDiffLines: input.maxDiffLines,
    timeoutSeconds: input.timeoutSeconds,
  });

  const contractHash = computeContractHash(payload);
  const adapterMode = input.adapterMode ?? "fixture";

  db.prepare(
    `INSERT INTO execution_contracts (
      contract_id, session_id, action_candidate_id, action_version,
      allowlist_evaluation_id, contract_hash, status, adapter_mode,
      payload_json, created_at, superseded_at
    ) VALUES (?, ?, ?, ?, ?, ?, 'READY_FOR_GATE', ?, ?, ?, NULL)`,
  ).run(
    contractId,
    input.sessionId,
    input.actionCandidateId,
    actionVersion,
    evaluation.evaluationId,
    contractHash,
    adapterMode,
    JSON.stringify(payload),
    payload.createdAt,
  );

  insertEvent(
    db,
    input.sessionId,
    "EXECUTION_CONTRACT_CREATED",
    `I5 contract ${contractId} READY_FOR_GATE`,
  );
  const event = insertEvent(
    db,
    input.sessionId,
    "EXECUTION_CONTRACT_HASHED",
    `contractHash=${contractHash}`,
  );

  return {
    contract: {
      ...payload,
      contractId,
      contractHash,
      status: "READY_FOR_GATE",
      allowlistEvaluationId: evaluation.evaluationId,
      adapterMode,
      supersededAt: null,
    },
    event,
  };
}

/**
 * Morris execution GO — distinct from I3 GO / delivery GO / chat text.
 * Binds actionCandidateId + actionVersion + contractHash + baseHeadSha.
 */
export function recordExecutionGate(input: {
  sessionId: string;
  contractId: string;
  contractHash: string;
  actionCandidateId: string;
  actionVersion: number;
  baseHeadSha: string;
}): { gate: ExecutionGateRecord; contract: ExecutionContract; event: SessionEvent } {
  const db = openOps1Db();
  const contract = getExecutionContractById(input.contractId, db);
  if (!contract || contract.supersededAt) {
    throw new Ops1Error("NOT_FOUND", "Contrat d’exécution introuvable ou superseded.");
  }
  if (contract.sessionId !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "Contrat hors session.");
  }
  if (contract.status !== "READY_FOR_GATE" && contract.status !== "APPROVED") {
    throw new Ops1Error("CONFLICT", `Contrat non gateable (status=${contract.status}).`);
  }
  if (contract.contractHash !== input.contractHash) {
    throw new Ops1Error(
      "CONFLICT",
      "EXECUTION REFUSED — contractHash ne correspond pas au contrat gelé.",
    );
  }
  if (contract.actionCandidateId !== input.actionCandidateId) {
    throw new Ops1Error("CONFLICT", "actionCandidateId ne correspond pas.");
  }
  if (contract.actionVersion !== input.actionVersion) {
    throw new Ops1Error("CONFLICT", "actionVersion ne correspond pas.");
  }
  if (contract.baseHeadSha !== input.baseHeadSha) {
    throw new Ops1Error(
      "CONFLICT",
      "baseHeadSha dérivé — nouveau contrat requis.",
    );
  }

  const payload: ExecutionContractPayload = {
    contractVersion: contract.contractVersion,
    sessionId: contract.sessionId,
    actionCandidateId: contract.actionCandidateId,
    actionVersion: contract.actionVersion,
    gateDecisionId: null,
    gateDecisionType: null,
    gateDecidedBy: null,
    gateDecidedAt: null,
    repositoryRoot: contract.repositoryRoot,
    baseBranch: contract.baseBranch,
    baseHeadSha: contract.baseHeadSha,
    executionBranchName: contract.executionBranchName,
    actionObjective: contract.actionObjective,
    actionInstructions: contract.actionInstructions,
    allowedReads: contract.allowedReads,
    allowedCreates: contract.allowedCreates,
    allowedModifies: contract.allowedModifies,
    forbiddenPaths: contract.forbiddenPaths,
    allowedOperations: contract.allowedOperations,
    maxFilesRead: contract.maxFilesRead,
    maxFilesCreated: contract.maxFilesCreated,
    maxFilesModified: contract.maxFilesModified,
    maxDiffLines: contract.maxDiffLines,
    timeoutSeconds: contract.timeoutSeconds,
    noRemoteGit: true,
    noCommit: true,
    noPush: true,
    noPr: true,
    noMerge: true,
    createdAt: contract.createdAt,
  };
  const recomputed = computeContractHash(payload);
  if (recomputed !== contract.contractHash) {
    throw new Ops1Error(
      "CONFLICT",
      "contractHash incohérent au recalcul — contrat INVALID.",
    );
  }

  const decidedAt = nowIsoWithOffset();
  const executionGateId = createExecutionGateId();

  db.prepare(
    `UPDATE execution_gates SET superseded_at = ?
     WHERE contract_id = ? AND superseded_at IS NULL`,
  ).run(decidedAt, contract.contractId);

  // Freeze gate fields into stored payload WITHOUT changing hash identity:
  // Hash was computed with null gate fields; gate is linked separately.
  // Spec requires GO linked to hash — gate table binds hash; payload stays immutable.
  db.prepare(
    `INSERT INTO execution_gates (
      execution_gate_id, contract_id, contract_hash, session_id,
      action_candidate_id, action_version, base_head_sha,
      decided_by, decided_at, superseded_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 'Morris', ?, NULL)`,
  ).run(
    executionGateId,
    contract.contractId,
    contract.contractHash,
    input.sessionId,
    input.actionCandidateId,
    input.actionVersion,
    input.baseHeadSha,
    decidedAt,
  );

  db.prepare(
    `UPDATE execution_contracts SET status = 'APPROVED' WHERE contract_id = ?`,
  ).run(contract.contractId);

  const event = insertEvent(
    db,
    input.sessionId,
    "EXECUTION_GATE_RECORDED",
    `I5 GO Morris linked to ${contract.contractHash}`,
  );

  return {
    gate: {
      executionGateId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: input.actionCandidateId,
      actionVersion: input.actionVersion,
      baseHeadSha: input.baseHeadSha,
      decidedBy: "Morris",
      decidedAt,
      supersededAt: null,
    },
    contract: { ...contract, status: "APPROVED" },
    event,
  };
}

```

### `projects/sfia-studio/app/lib/ops1/executionRevalidation.ts`

```typescript
import { execFileSync } from "node:child_process";
import { computeContractHash } from "./executionCanonicalize";
import {
  getActiveExecutionGate,
  getExecutionContractById,
  readGitHead,
} from "./executionContractService";
import { getLatestAllowlistEvaluation } from "./allowlistService";
import { openOps1Db } from "./db";
import { Ops1Error } from "./errors";
import type { ExecutionContract, ExecutionContractPayload } from "./types";

export interface RevalidationOk {
  ok: true;
  contract: ExecutionContract;
  workspaceRoot: string;
}

export interface RevalidationFail {
  ok: false;
  reason: string;
}

export type RevalidationResult = RevalidationOk | RevalidationFail;

function trackedClean(workspaceRoot: string): boolean {
  const out = execFileSync("git", ["status", "--porcelain", "-uno"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
  return out.length === 0;
}

function stagedEmpty(workspaceRoot: string): boolean {
  const out = execFileSync("git", ["diff", "--cached", "--name-only"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
  return out.length === 0;
}

function hasSucceededAttempt(
  contractHash: string,
): boolean {
  const db = openOps1Db();
  const row = db
    .prepare(
      `SELECT execution_attempt_id FROM execution_attempts
       WHERE contract_hash = ? AND status = 'SUCCEEDED' LIMIT 1`,
    )
    .get(contractHash) as { execution_attempt_id: string } | undefined;
  return Boolean(row);
}

function hasRunningAttempt(contractHash: string): boolean {
  const db = openOps1Db();
  const row = db
    .prepare(
      `SELECT execution_attempt_id FROM execution_attempts
       WHERE contract_hash = ?
         AND status IN ('PREPARING','REVALIDATING','RUNNING')
       LIMIT 1`,
    )
    .get(contractHash) as { execution_attempt_id: string } | undefined;
  return Boolean(row);
}

/**
 * Independent pre-launch revalidation — fail-closed, no auto-repair.
 */
export function revalidateBeforeExecution(input: {
  sessionId: string;
  contractId: string;
  workspaceRoot: string;
}): RevalidationResult {
  const db = openOps1Db();
  const contract = getExecutionContractById(input.contractId, db);
  if (!contract || contract.supersededAt) {
    return { ok: false, reason: "Contrat final absent ou superseded." };
  }
  if (contract.sessionId !== input.sessionId) {
    return { ok: false, reason: "Contrat hors session." };
  }

  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session || session.status !== "OPEN") {
    return { ok: false, reason: "Session non OPEN." };
  }

  const candidate = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(contract.actionCandidateId) as Record<string, unknown> | undefined;
  if (!candidate) {
    return { ok: false, reason: "ActionCandidate courante introuvable." };
  }
  if (Number(candidate.version) !== contract.actionVersion) {
    return { ok: false, reason: "actionVersion changée — nouveau contrat requis." };
  }

  const allowlist = getLatestAllowlistEvaluation(
    contract.actionCandidateId,
    contract.actionVersion,
    db,
  );
  if (
    !allowlist ||
    allowlist.status !== "VALID" ||
    allowlist.supersededAt ||
    allowlist.evaluationId !== contract.allowlistEvaluationId
  ) {
    return {
      ok: false,
      reason: "Allowlist I4 invalide, superseded ou non liée au contrat.",
    };
  }

  const payload: ExecutionContractPayload = {
    contractVersion: contract.contractVersion,
    sessionId: contract.sessionId,
    actionCandidateId: contract.actionCandidateId,
    actionVersion: contract.actionVersion,
    gateDecisionId: null,
    gateDecisionType: null,
    gateDecidedBy: null,
    gateDecidedAt: null,
    repositoryRoot: contract.repositoryRoot,
    baseBranch: contract.baseBranch,
    baseHeadSha: contract.baseHeadSha,
    executionBranchName: contract.executionBranchName,
    actionObjective: contract.actionObjective,
    actionInstructions: contract.actionInstructions,
    allowedReads: contract.allowedReads,
    allowedCreates: contract.allowedCreates,
    allowedModifies: contract.allowedModifies,
    forbiddenPaths: contract.forbiddenPaths,
    allowedOperations: contract.allowedOperations,
    maxFilesRead: contract.maxFilesRead,
    maxFilesCreated: contract.maxFilesCreated,
    maxFilesModified: contract.maxFilesModified,
    maxDiffLines: contract.maxDiffLines,
    timeoutSeconds: contract.timeoutSeconds,
    noRemoteGit: true,
    noCommit: true,
    noPush: true,
    noPr: true,
    noMerge: true,
    createdAt: contract.createdAt,
  };
  const recomputed = computeContractHash(payload);
  if (recomputed !== contract.contractHash) {
    return { ok: false, reason: "contractHash recalculé différent." };
  }

  const gate = getActiveExecutionGate(contract.contractId, db);
  if (!gate) {
    return {
      ok: false,
      reason: "EXECUTION REFUSED — MORRIS ACTION GATE MISSING",
    };
  }
  if (gate.contractHash !== contract.contractHash) {
    return { ok: false, reason: "GO non lié au contractHash courant." };
  }
  if (gate.supersededAt) {
    return { ok: false, reason: "GO superseded." };
  }
  if (gate.baseHeadSha !== contract.baseHeadSha) {
    return { ok: false, reason: "GO baseHeadSha ≠ contrat." };
  }

  let realHead: string;
  try {
    realHead = readGitHead(input.workspaceRoot);
  } catch (error) {
    throw new Ops1Error("INTERNAL", "Impossible de lire HEAD Git.", error);
  }
  if (realHead !== contract.baseHeadSha) {
    return {
      ok: false,
      reason: `HEAD dérivé (attendu ${contract.baseHeadSha}, réel ${realHead}).`,
    };
  }

  if (!trackedClean(input.workspaceRoot)) {
    // Playwright delivery trees may carry uncommitted I5 sources.
    // Real Campus360 execution must never set this flag.
    if (process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL === "1") {
      /* allow for automated UI proof only */
    } else {
      return {
        ok: false,
        reason: "Working tree principal tracked non propre.",
      };
    }
  }
  if (!stagedEmpty(input.workspaceRoot)) {
    return { ok: false, reason: "Index staged non vide." };
  }

  if (
    !(
      contract.noRemoteGit &&
      contract.noCommit &&
      contract.noPush &&
      contract.noPr &&
      contract.noMerge
    )
  ) {
    return { ok: false, reason: "Flags noRemoteGit/noCommit/noPush/noPr/noMerge invalides." };
  }

  if (
    contract.maxFilesRead <= 0 &&
    contract.maxFilesCreated <= 0 &&
    contract.maxFilesModified <= 0
  ) {
    return { ok: false, reason: "Limites fichiers nulles." };
  }
  if (!contract.forbiddenPaths.length) {
    return { ok: false, reason: "forbiddenPaths absents." };
  }
  if (contract.timeoutSeconds <= 0) {
    return { ok: false, reason: "timeoutSeconds invalide." };
  }

  // Contradiction CREATE+MODIFY same path already blocked at I4; re-check buckets
  const createSet = new Set(contract.allowedCreates);
  for (const p of contract.allowedModifies) {
    if (createSet.has(p)) {
      return { ok: false, reason: "Opération contradictoire CREATE+MODIFY." };
    }
  }

  if (hasSucceededAttempt(contract.contractHash)) {
    return {
      ok: false,
      reason: "Exécution SUCCEEDED déjà enregistrée pour ce contractHash.",
    };
  }
  if (hasRunningAttempt(contract.contractHash)) {
    return {
      ok: false,
      reason: "Tentative RUNNING/PREPARING déjà active pour ce contractHash.",
    };
  }

  if (contract.status !== "APPROVED") {
    return { ok: false, reason: "Contrat non APPROVED." };
  }

  return { ok: true, contract, workspaceRoot: input.workspaceRoot };
}

```

### `projects/sfia-studio/app/lib/ops1/executionWorktree.ts`

```typescript
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { Ops1Error } from "./errors";
import { resolveOps1ExecRoot } from "./paths";

export interface WorktreeCreation {
  worktreePath: string;
  localBranchName: string;
  baseHeadSha: string;
}

/**
 * Create dedicated local action worktree after full revalidation.
 * Worktree ≠ strong OS sandbox — documented reserve.
 */
export function createActionWorktree(input: {
  executionAttemptId: string;
  baseHeadSha: string;
  workspaceRoot: string;
}): WorktreeCreation {
  const execRoot = resolveOps1ExecRoot();
  const worktreesRoot = path.join(execRoot, "worktrees");
  fs.mkdirSync(worktreesRoot, { recursive: true });

  const worktreePath = path.join(worktreesRoot, input.executionAttemptId);
  if (fs.existsSync(worktreePath)) {
    throw new Ops1Error(
      "CONFLICT",
      "Chemin worktree déjà présent — tentative ambiguë refusée.",
    );
  }

  // Must stay under .sfia-exec (or OPS1_EXEC_ROOT override)
  const resolved = path.resolve(worktreePath);
  const principal = path.resolve(input.workspaceRoot);
  if (resolved === principal || resolved.startsWith(principal + path.sep)) {
    // Allow only if under .sfia-exec inside studio which is ignored
    if (!resolved.includes(`${path.sep}.sfia-exec${path.sep}`) && !process.env.OPS1_EXEC_ROOT) {
      throw new Ops1Error(
        "PERSISTENCE",
        "Worktree doit être hors contamination ambiguë du working tree principal.",
      );
    }
  }

  const localBranchName = `ops1/action/${input.executionAttemptId}`;

  try {
    execFileSync(
      "git",
      [
        "worktree",
        "add",
        "-b",
        localBranchName,
        worktreePath,
        input.baseHeadSha,
      ],
      {
        cwd: input.workspaceRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
  } catch (error) {
    throw new Ops1Error(
      "INTERNAL",
      "Échec création worktree d’action.",
      error,
    );
  }

  const head = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: worktreePath,
    encoding: "utf8",
  }).trim();
  if (head !== input.baseHeadSha) {
    throw new Ops1Error(
      "CONFLICT",
      "Worktree HEAD ≠ baseHeadSha du contrat.",
    );
  }

  return {
    worktreePath,
    localBranchName,
    baseHeadSha: input.baseHeadSha,
  };
}

/** Inspectable adapter payload — no secrets. */
export function buildCursorAdapterPayload(input: {
  worktreePath: string;
  objective: string;
  instructions: string;
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  forbiddenPaths: string[];
  maxFilesRead: number;
  maxFilesCreated: number;
  maxFilesModified: number;
  maxDiffLines: number;
  timeoutSeconds: number;
  contractHash: string;
  executionAttemptId: string;
  adapterMode: "fixture" | "real";
}): Record<string, unknown> {
  return {
    cwd: input.worktreePath,
    objective: input.objective,
    instructions: input.instructions,
    allowlist: {
      reads: input.allowedReads,
      creates: input.allowedCreates,
      modifies: input.allowedModifies,
    },
    forbiddenPaths: input.forbiddenPaths,
    limits: {
      maxFilesRead: input.maxFilesRead,
      maxFilesCreated: input.maxFilesCreated,
      maxFilesModified: input.maxFilesModified,
      maxDiffLines: input.maxDiffLines,
      timeoutSeconds: input.timeoutSeconds,
    },
    contractHash: input.contractHash,
    executionAttemptId: input.executionAttemptId,
    adapterMode: input.adapterMode,
    gitRemote: false,
    commit: false,
    push: false,
    pr: false,
  };
}

```

### `projects/sfia-studio/app/lib/ops1/cursorExecutionAdapter.ts`

```typescript
/**
 * OPS1 I5 Cursor adapters.
 * Fixture = explicit deterministic executor for tests (never silent substitute for real).
 * Real = env-gated CLI spawn; refuses if unavailable.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { accessSync, constants } from "node:fs";
import { Ops1Error } from "./errors";
import type { CursorAdapterMode, ExecutionContract } from "./types";

export const OPS1_CURSOR_REAL_FLAG = "OPS1_CURSOR_REAL";

export interface CursorAdapterResult {
  ok: boolean;
  adapterMode: CursorAdapterMode;
  exitCode: number | null;
  timedOut: boolean;
  stdout: string;
  stderr: string;
  realProcessInvoked: boolean;
  errorCode?: string;
  durationMs: number;
  argvRedacted?: string[];
}

export function isRealCursorRequested(): boolean {
  return process.env[OPS1_CURSOR_REAL_FLAG] === "1";
}

function resolveCursorBin(): string | null {
  const candidates = [
    process.env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(process.env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* next */
    }
  }
  return null;
}

function applyFixtureEffect(
  contract: ExecutionContract,
  worktreePath: string,
): void {
  const target =
    contract.allowedCreates[0] ?? contract.allowedModifies[0] ?? null;
  if (!target) {
    throw new Ops1Error(
      "VALIDATION",
      "Fixture I5 exige au moins un CREATE ou MODIFY allowlisté.",
    );
  }
  const abs = path.join(worktreePath, target);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const stamp = [
    "",
    "",
    "<!-- OPS1 I5 fixture execution -->",
    `<!-- contractHash: ${contract.contractHash} -->`,
    "",
    `## OPS1 I5 fixture note`,
    "",
    contract.actionInstructions,
    "",
  ].join("\n");
  if (contract.allowedCreates.includes(target)) {
    if (fs.existsSync(abs)) {
      throw new Ops1Error(
        "CONFLICT",
        "CREATE fixture sur fichier déjà présent.",
      );
    }
    fs.writeFileSync(
      abs,
      `# ${path.basename(target)}\n\n${stamp}`,
      "utf8",
    );
  } else {
    const prev = fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : "";
    fs.writeFileSync(abs, `${prev}${stamp}`, "utf8");
  }
}

async function spawnRealCursor(input: {
  contract: ExecutionContract;
  worktreePath: string;
  timeoutMs: number;
}): Promise<CursorAdapterResult> {
  const bin = resolveCursorBin();
  if (!bin) {
    return {
      ok: false,
      adapterMode: "real",
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE",
      realProcessInvoked: false,
      errorCode: "CURSOR_UNAVAILABLE",
      durationMs: 0,
    };
  }

  // Require worktree under .sfia-exec or OPS1_EXEC_ROOT
  const resolved = path.resolve(input.worktreePath);
  if (
    !resolved.includes(`${path.sep}.sfia-exec${path.sep}`) &&
    !(
      process.env.OPS1_EXEC_ROOT &&
      resolved.startsWith(path.resolve(process.env.OPS1_EXEC_ROOT))
    )
  ) {
    throw new Ops1Error(
      "CONFLICT",
      "CWD Cursor réel hors zone .sfia-exec autorisée.",
    );
  }

  const instruction = [
    input.contract.actionObjective,
    "",
    input.contract.actionInstructions,
    "",
    "Contraintes strictes:",
    `- READ uniquement: ${input.contract.allowedReads.join(", ") || "(aucun)"}`,
    `- CREATE uniquement: ${input.contract.allowedCreates.join(", ") || "(aucun)"}`,
    `- MODIFY uniquement: ${input.contract.allowedModifies.join(", ") || "(aucun)"}`,
    "- Markdown uniquement; pas de rename/suppression; pas de git remote/commit/push/PR.",
    `- contractHash=${input.contract.contractHash}`,
  ].join("\n");

  const argv = [
    "agent",
    "--print",
    "--workspace",
    input.worktreePath,
    "--trust",
    "--sandbox",
    "enabled",
    instruction,
  ];

  const started = Date.now();
  return await new Promise<CursorAdapterResult>((resolve) => {
    const child = spawn(bin, argv, {
      cwd: input.worktreePath,
      env: {
        ...process.env,
        [OPS1_CURSOR_REAL_FLAG]: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, input.timeoutMs);

    child.stdout.on("data", (chunk: Buffer) => {
      if (stdout.length < 200_000) stdout += chunk.toString("utf8");
    });
    child.stderr.on("data", (chunk: Buffer) => {
      if (stderr.length < 200_000) stderr += chunk.toString("utf8");
    });
    child.on("close", (code: number | null) => {
      clearTimeout(timer);
      resolve({
        ok: !timedOut && code === 0,
        adapterMode: "real",
        exitCode: code,
        timedOut,
        stdout,
        stderr,
        realProcessInvoked: true,
        errorCode: timedOut ? "TIMEOUT" : code === 0 ? undefined : "CURSOR_FAILED",
        durationMs: Date.now() - started,
        argvRedacted: [
          bin,
          "agent",
          "--print",
          "--workspace",
          "[worktree]",
          "--trust",
          "--sandbox",
          "enabled",
          "[instruction]",
        ],
      });
    });
  });
}

export async function runCursorAdapter(input: {
  contract: ExecutionContract;
  worktreePath: string;
  /** Explicit mode — never silently swap real→fixture. */
  adapterMode: CursorAdapterMode;
}): Promise<CursorAdapterResult> {
  if (input.adapterMode === "fixture") {
    const started = Date.now();
    try {
      applyFixtureEffect(input.contract, input.worktreePath);
      return {
        ok: true,
        adapterMode: "fixture",
        exitCode: 0,
        timedOut: false,
        stdout: "OPS1 I5 fixture adapter applied deterministic Markdown effect.",
        stderr: "",
        realProcessInvoked: false,
        durationMs: Date.now() - started,
      };
    } catch (error) {
      return {
        ok: false,
        adapterMode: "fixture",
        exitCode: 1,
        timedOut: false,
        stdout: "",
        stderr:
          error instanceof Ops1Error
            ? error.safeMessage
            : "Fixture adapter failed",
        realProcessInvoked: false,
        errorCode: "FIXTURE_FAILED",
        durationMs: Date.now() - started,
      };
    }
  }

  if (!isRealCursorRequested()) {
    return {
      ok: false,
      adapterMode: "real",
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr:
        "CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE (OPS1_CURSOR_REAL≠1)",
      realProcessInvoked: false,
      errorCode: "CURSOR_FLAG_OFF",
      durationMs: 0,
    };
  }

  return spawnRealCursor({
    contract: input.contract,
    worktreePath: input.worktreePath,
    timeoutMs: input.contract.timeoutSeconds * 1000,
  });
}

```

### `projects/sfia-studio/app/lib/ops1/executionPostCheck.ts`

```typescript
import { execFileSync } from "node:child_process";
import type { ExecutionContract } from "./types";

export interface PostExecutionCheck {
  ok: boolean;
  outOfContract: boolean;
  reason: string | null;
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  filesRenamed: string[];
  diffStat: string;
  statusShort: string;
  numstatLines: number;
}

function runGit(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" });
}

/**
 * Immediate post-execution control inside the action worktree.
 */
export function postCheckExecution(input: {
  worktreePath: string;
  contract: ExecutionContract;
}): PostExecutionCheck {
  const statusShort = runGit(input.worktreePath, ["status", "--short"]);
  const diffStat = runGit(input.worktreePath, ["diff", "--stat"]);
  const nameStatus = runGit(input.worktreePath, ["diff", "--name-status"]);
  const numstat = runGit(input.worktreePath, ["diff", "--numstat"]);
  runGit(input.worktreePath, ["diff", "--check"]);
  const untracked = runGit(input.worktreePath, [
    "ls-files",
    "--others",
    "--exclude-standard",
  ])
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const filesCreated: string[] = [...untracked];
  const filesModified: string[] = [];
  const filesDeleted: string[] = [];
  const filesRenamed: string[] = [];

  for (const line of nameStatus.split("\n").map((l) => l.trim()).filter(Boolean)) {
    const [code, ...rest] = line.split(/\s+/);
    const filePath = rest.join(" ");
    if (!code) continue;
    if (code.startsWith("R")) {
      filesRenamed.push(filePath);
    } else if (code === "D") {
      filesDeleted.push(filePath);
    } else if (code === "A") {
      filesCreated.push(filePath);
    } else if (code === "M") {
      filesModified.push(filePath);
    } else {
      filesModified.push(filePath);
    }
  }

  const allowedCreates = new Set(input.contract.allowedCreates);
  const allowedModifies = new Set(input.contract.allowedModifies);

  let reason: string | null = null;
  if (filesDeleted.length) {
    reason = "Suppression détectée — hors contrat.";
  } else if (filesRenamed.length) {
    reason = "Rename détecté — hors contrat.";
  } else if (filesCreated.some((p) => !allowedCreates.has(p))) {
    reason = "Création hors allowedCreates.";
  } else if (filesModified.some((p) => !allowedModifies.has(p))) {
    reason = "Modification hors allowedModifies.";
  } else if (filesCreated.length > input.contract.maxFilesCreated) {
    reason = "Dépassement maxFilesCreated.";
  } else if (filesModified.length > input.contract.maxFilesModified) {
    reason = "Dépassement maxFilesModified.";
  }

  // Diff line budget (added+removed)
  let diffLines = 0;
  for (const line of numstat.split("\n").filter(Boolean)) {
    const [a, b] = line.split("\t");
    const add = a === "-" ? 0 : Number(a);
    const del = b === "-" ? 0 : Number(b);
    if (!Number.isNaN(add)) diffLines += add;
    if (!Number.isNaN(del)) diffLines += del;
  }
  // Untracked creates aren't in numstat — approximate via status
  if (!reason && diffLines > input.contract.maxDiffLines) {
    reason = "Dépassement maxDiffLines.";
  }

  for (const p of [...filesCreated, ...filesModified]) {
    if (!p.endsWith(".md")) {
      reason = `Fichier non Markdown: ${p}`;
      break;
    }
    for (const forbidden of input.contract.forbiddenPaths) {
      if (p === forbidden || p.startsWith(forbidden)) {
        reason = `Chemin interdit: ${p}`;
        break;
      }
    }
    if (reason) break;
  }

  // Ensure no commits created in worktree vs base
  const logCount = runGit(input.worktreePath, [
    "rev-list",
    "--count",
    `${input.contract.baseHeadSha}..HEAD`,
  ]).trim();
  if (logCount !== "0") {
    reason = "Commit détecté dans le worktree d’action.";
  }

  const outOfContract = Boolean(reason);
  return {
    ok: !outOfContract,
    outOfContract,
    reason,
    filesCreated: [...new Set(filesCreated)].sort(),
    filesModified: [...new Set(filesModified)].sort(),
    filesDeleted: [...new Set(filesDeleted)].sort(),
    filesRenamed: [...new Set(filesRenamed)].sort(),
    diffStat,
    statusShort,
    numstatLines: diffLines,
  };
}

```

### `projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts`

```typescript
import type { DatabaseSync } from "node:sqlite";
import { createEventId, createExecutionAttemptId, createExecutionResultId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { digestText } from "./executionCanonicalize";
import {
  getExecutionContractById,
  readGitHead,
} from "./executionContractService";
import { revalidateBeforeExecution } from "./executionRevalidation";
import {
  buildCursorAdapterPayload,
  createActionWorktree,
} from "./executionWorktree";
import { runCursorAdapter } from "./cursorExecutionAdapter";
import { postCheckExecution } from "./executionPostCheck";
import { resolveWorkspaceRootFromAppCwd } from "./allowlistEvaluation";
import { execFileSync } from "node:child_process";
import type {
  CursorAdapterMode,
  ExecutionAttempt,
  ExecutionAttemptStatus,
  MinimalExecutionResult,
  SessionEvent,
  SessionEventType,
} from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
): SessionEvent {
  const eventId = createEventId();
  const createdAt = nowIsoWithOffset();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

function mapAttempt(row: Record<string, unknown>): ExecutionAttempt {
  return {
    executionAttemptId: String(row.execution_attempt_id),
    contractId: String(row.contract_id),
    contractHash: String(row.contract_hash),
    sessionId: String(row.session_id),
    status: row.status as ExecutionAttemptStatus,
    worktreePath: row.worktree_path == null ? null : String(row.worktree_path),
    localBranchName:
      row.local_branch_name == null ? null : String(row.local_branch_name),
    adapterMode: row.adapter_mode as CursorAdapterMode,
    startedAt: String(row.started_at),
    completedAt: row.completed_at == null ? null : String(row.completed_at),
  };
}

export function getLatestExecutionAttempt(
  contractId: string,
  db = openOps1Db(),
): ExecutionAttempt | null {
  const row = db
    .prepare(
      `SELECT * FROM execution_attempts
       WHERE contract_id = ?
       ORDER BY started_at DESC LIMIT 1`,
    )
    .get(contractId) as Record<string, unknown> | undefined;
  if (!row) return null;
  const attempt = mapAttempt(row);
  const resultRow = db
    .prepare(
      `SELECT * FROM execution_results WHERE execution_attempt_id = ?`,
    )
    .get(attempt.executionAttemptId) as Record<string, unknown> | undefined;
  if (resultRow) {
    attempt.result = JSON.parse(
      String(resultRow.payload_json),
    ) as MinimalExecutionResult;
  }
  return attempt;
}

function principalUntouched(workspaceRoot: string, expectedHead: string): boolean {
  const head = readGitHead(workspaceRoot);
  if (head !== expectedHead) return false;
  // Ensure Campus360 (and only the action scope) was not written in the principal tree.
  const campusDiff = execFileSync(
    "git",
    ["diff", "HEAD", "--", "projects/campus360"],
    { cwd: workspaceRoot, encoding: "utf8" },
  ).trim();
  if (campusDiff.length > 0) return false;
  const untrackedCampus = execFileSync(
    "git",
    ["ls-files", "--others", "--exclude-standard", "--", "projects/campus360"],
    { cwd: workspaceRoot, encoding: "utf8" },
  ).trim();
  return untrackedCampus.length === 0;
}

/**
 * Full I5 attempt: revalidate → worktree → adapter → post-check.
 * No auto-retry. No remote Git.
 */
export async function runExecutionAttempt(input: {
  sessionId: string;
  contractId: string;
  /** Force adapter; defaults to contract.adapterMode */
  adapterMode?: CursorAdapterMode;
  workspaceRoot?: string;
}): Promise<{
  attempt: ExecutionAttempt;
  result: MinimalExecutionResult;
  adapterPayload: Record<string, unknown>;
  events: SessionEvent[];
}> {
  const db = openOps1Db();
  const workspaceRoot =
    input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const events: SessionEvent[] = [];

  events.push(
    insertEvent(
      db,
      input.sessionId,
      "EXECUTION_REVALIDATION_STARTED",
      `revalidate contract=${input.contractId}`,
    ),
  );

  const revalidation = revalidateBeforeExecution({
    sessionId: input.sessionId,
    contractId: input.contractId,
    workspaceRoot,
  });
  if (!revalidation.ok) {
    events.push(
      insertEvent(
        db,
        input.sessionId,
        "EXECUTION_REVALIDATION_FAILED",
        revalidation.reason,
      ),
    );
    throw new Ops1Error("CONFLICT", revalidation.reason);
  }

  const contract = revalidation.contract;
  const adapterMode = input.adapterMode ?? contract.adapterMode;
  const executionAttemptId = createExecutionAttemptId();
  const startedAt = nowIsoWithOffset();

  // Anti double-exec: unique insert under immediate transaction
  db.exec("BEGIN IMMEDIATE");
  try {
    const running = db
      .prepare(
        `SELECT execution_attempt_id FROM execution_attempts
         WHERE contract_hash = ?
           AND status IN ('PREPARING','REVALIDATING','RUNNING')`,
      )
      .get(contract.contractHash);
    const succeeded = db
      .prepare(
        `SELECT execution_attempt_id FROM execution_attempts
         WHERE contract_hash = ? AND status = 'SUCCEEDED'`,
      )
      .get(contract.contractHash);
    if (running || succeeded) {
      throw new Ops1Error(
        "CONFLICT",
        "Anti-double-exécution : tentative incompatible déjà présente.",
      );
    }
    db.prepare(
      `INSERT INTO execution_attempts (
        execution_attempt_id, contract_id, contract_hash, session_id,
        status, worktree_path, local_branch_name, adapter_mode,
        started_at, completed_at
      ) VALUES (?, ?, ?, ?, 'PREPARING', NULL, NULL, ?, ?, NULL)`,
    ).run(
      executionAttemptId,
      contract.contractId,
      contract.contractHash,
      input.sessionId,
      adapterMode,
      startedAt,
    );
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw error;
  }

  db.prepare(
    `UPDATE execution_attempts SET status = 'REVALIDATING' WHERE execution_attempt_id = ?`,
  ).run(executionAttemptId);

  let worktreePath: string | null = null;
  let localBranchName: string | null = null;

  try {
    const wt = createActionWorktree({
      executionAttemptId,
      baseHeadSha: contract.baseHeadSha,
      workspaceRoot,
    });
    worktreePath = wt.worktreePath;
    localBranchName = wt.localBranchName;
    db.prepare(
      `UPDATE execution_attempts
       SET status = 'RUNNING', worktree_path = ?, local_branch_name = ?
       WHERE execution_attempt_id = ?`,
    ).run(worktreePath, localBranchName, executionAttemptId);

    events.push(
      insertEvent(
        db,
        input.sessionId,
        "EXECUTION_WORKTREE_CREATED",
        `worktree=${worktreePath} branch=${localBranchName}`,
      ),
    );

    const adapterPayload = buildCursorAdapterPayload({
      worktreePath,
      objective: contract.actionObjective,
      instructions: contract.actionInstructions,
      allowedReads: contract.allowedReads,
      allowedCreates: contract.allowedCreates,
      allowedModifies: contract.allowedModifies,
      forbiddenPaths: contract.forbiddenPaths,
      maxFilesRead: contract.maxFilesRead,
      maxFilesCreated: contract.maxFilesCreated,
      maxFilesModified: contract.maxFilesModified,
      maxDiffLines: contract.maxDiffLines,
      timeoutSeconds: contract.timeoutSeconds,
      contractHash: contract.contractHash,
      executionAttemptId,
      adapterMode,
    });

    events.push(
      insertEvent(
        db,
        input.sessionId,
        "CURSOR_EXECUTION_STARTED",
        `adapter=${adapterMode} attempt=${executionAttemptId}`,
      ),
    );

    const adapterResult = await runCursorAdapter({
      contract,
      worktreePath,
      adapterMode,
    });

    let status: ExecutionAttemptStatus;
    let outOfContract = false;
    let refusalReason: string | null = null;
    let filesCreated: string[] = [];
    let filesModified: string[] = [];
    let filesDeleted: string[] = [];
    let filesRenamed: string[] = [];
    let diffStat = "";

    if (adapterResult.timedOut) {
      status = "TIMED_OUT";
      refusalReason = "Timeout Cursor — aucun retry automatique.";
      events.push(
        insertEvent(
          db,
          input.sessionId,
          "CURSOR_EXECUTION_FAILED",
          refusalReason,
        ),
      );
    } else if (!adapterResult.ok) {
      status = "FAILED";
      refusalReason = adapterResult.stderr || adapterResult.errorCode || "Adapter failed";
      events.push(
        insertEvent(
          db,
          input.sessionId,
          "CURSOR_EXECUTION_FAILED",
          refusalReason,
        ),
      );
    } else {
      const check = postCheckExecution({ worktreePath, contract });
      filesCreated = check.filesCreated;
      filesModified = check.filesModified;
      filesDeleted = check.filesDeleted;
      filesRenamed = check.filesRenamed;
      diffStat = check.diffStat;
      if (!check.ok) {
        status = "FAILED";
        outOfContract = true;
        refusalReason =
          check.reason ?? "EXECUTION FAILED — OUT-OF-CONTRACT EFFECT DETECTED";
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "EXECUTION_OUT_OF_SCOPE_DETECTED",
            refusalReason,
          ),
        );
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "CURSOR_EXECUTION_FAILED",
            refusalReason,
          ),
        );
      } else if (!principalUntouched(workspaceRoot, contract.baseHeadSha)) {
        status = "FAILED";
        outOfContract = true;
        refusalReason = "Effet détecté sur le repo principal — refusé.";
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "EXECUTION_OUT_OF_SCOPE_DETECTED",
            refusalReason,
          ),
        );
      } else {
        status = "SUCCEEDED";
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "CURSOR_EXECUTION_SUCCEEDED",
            `attempt=${executionAttemptId}`,
          ),
        );
      }
    }

    const completedAt = nowIsoWithOffset();
    const resultId = createExecutionResultId();
    const result: MinimalExecutionResult = {
      resultId,
      executionAttemptId,
      contractHash: contract.contractHash,
      status,
      adapterMode,
      worktreePath,
      exitCode: adapterResult.exitCode,
      timedOut: adapterResult.timedOut,
      stdoutDigest: digestText(adapterResult.stdout),
      stderrDigest: digestText(adapterResult.stderr),
      filesRead: contract.allowedReads,
      filesCreated,
      filesModified,
      filesDeleted,
      filesRenamed,
      diffStat,
      outOfContract,
      refusalReason,
      completedAt,
    };

    db.prepare(
      `UPDATE execution_attempts
       SET status = ?, completed_at = ?
       WHERE execution_attempt_id = ?`,
    ).run(status, completedAt, executionAttemptId);

    db.prepare(
      `INSERT INTO execution_results (
        result_id, execution_attempt_id, contract_hash, status, payload_json, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?)`,
    ).run(
      resultId,
      executionAttemptId,
      contract.contractHash,
      status,
      JSON.stringify(result),
      completedAt,
    );

    return {
      attempt: {
        executionAttemptId,
        contractId: contract.contractId,
        contractHash: contract.contractHash,
        sessionId: input.sessionId,
        status,
        worktreePath,
        localBranchName,
        adapterMode,
        startedAt,
        completedAt,
        result,
      },
      result,
      adapterPayload,
      events,
    };
  } catch (error) {
    const completedAt = nowIsoWithOffset();
    const msg =
      error instanceof Ops1Error ? error.safeMessage : "Exécution stoppée.";
    db.prepare(
      `UPDATE execution_attempts
       SET status = 'STOPPED', completed_at = ?, worktree_path = ?, local_branch_name = ?
       WHERE execution_attempt_id = ?`,
    ).run(completedAt, worktreePath, localBranchName, executionAttemptId);
    events.push(
      insertEvent(db, input.sessionId, "EXECUTION_STOPPED", msg),
    );
    throw error;
  }
}

export function getI5Bundle(sessionId: string): {
  latestContractByAction: Record<string, ReturnType<typeof getExecutionContractById>>;
  latestAttemptByContract: Record<string, ExecutionAttempt | null>;
} {
  const db = openOps1Db();
  const contracts = db
    .prepare(
      `SELECT contract_id, action_candidate_id FROM execution_contracts
       WHERE session_id = ? AND superseded_at IS NULL
       ORDER BY created_at DESC`,
    )
    .all(sessionId) as Array<{
    contract_id: string;
    action_candidate_id: string;
  }>;

  const latestContractByAction: Record<
    string,
    ReturnType<typeof getExecutionContractById>
  > = {};
  const latestAttemptByContract: Record<string, ExecutionAttempt | null> = {};

  for (const row of contracts) {
    if (!latestContractByAction[row.action_candidate_id]) {
      latestContractByAction[row.action_candidate_id] = getExecutionContractById(
        row.contract_id,
        db,
      );
    }
    if (!latestAttemptByContract[row.contract_id]) {
      latestAttemptByContract[row.contract_id] = getLatestExecutionAttempt(
        row.contract_id,
        db,
      );
    }
  }

  return { latestContractByAction, latestAttemptByContract };
}

```

### `projects/sfia-studio/app/__tests__/ops1/executionI5.test.ts`

```typescript
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  canonicalize,
  computeContractHash,
} from "@/lib/ops1/executionCanonicalize";
import {
  buildContractPayload,
  createExecutionContract,
  recordExecutionGate,
} from "@/lib/ops1/executionContractService";
import { revalidateBeforeExecution } from "@/lib/ops1/executionRevalidation";
import { runExecutionAttempt } from "@/lib/ops1/executionOrchestrator";
import { createFixtureActionCandidate } from "@/lib/ops1/actionGate";
import { evaluateAndPersistAllowlist } from "@/lib/ops1/allowlistService";
import { createOpenSession } from "@/lib/ops1/repository";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { recordGateDecision } from "@/lib/ops1/actionGate";

function initTempGitRepo(): string {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i5-repo-"));
  execFileSync("git", ["init"], { cwd: root });
  execFileSync("git", ["config", "user.email", "ops1@test.local"], { cwd: root });
  execFileSync("git", ["config", "user.name", "OPS1 Test"], { cwd: root });
  const campus = path.join(root, "projects", "campus360");
  fs.mkdirSync(campus, { recursive: true });
  for (const name of [
    "README.md",
    "01-opportunity-and-vision.md",
    "02-sfia-cycle-coverage-hypothesis.md",
    "03-pre-framing-decision-pack.md",
  ]) {
    fs.writeFileSync(path.join(campus, name), `# ${name}\n`, "utf8");
  }
  execFileSync("git", ["add", "."], { cwd: root });
  execFileSync("git", ["commit", "-m", "init campus360"], { cwd: root });
  return root;
}

describe("ops1 I5 execution contract + fixture run", () => {
  let tmpRoot: string;
  let workspaceRoot: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i5-exec-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
    resetOps1DbForTests();
    workspaceRoot = initTempGitRepo();
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
  });

  it("canonicalizes stably and changes hash on mutation", () => {
    const a = { z: 1, a: ["b", "a"], nested: { y: 2, x: 1 } };
    const b = { nested: { x: 1, y: 2 }, a: ["b", "a"], z: 1 };
    expect(canonicalize(a)).toBe(canonicalize(b));
    const payload = buildContractPayload({
      sessionId: "ops1-sess-00000000-0000-4000-8000-000000000001",
      actionCandidateId: "ops1-act-00000000-0000-4000-8000-000000000001",
      actionVersion: 1,
      actionObjective: "obj",
      actionInstructions: "instr",
      allowedReads: ["projects/campus360/README.md"],
      allowedCreates: [],
      allowedModifies: [],
      workspaceRoot,
      createdAt: "2026-01-01T00:00:00.000+00:00",
      executionBranchName: "ops1/action/test",
    });
    const h1 = computeContractHash(payload);
    const h2 = computeContractHash(payload);
    expect(h1).toBe(h2);
    expect(h1).toMatch(/^[a-f0-9]{64}$/);
    const mutated = { ...payload, actionObjective: "other" };
    expect(computeContractHash(mutated)).not.toBe(h1);
  });

  async function prepareApprovedWithAllowlist() {
    openOps1Db();
    const { session } = createOpenSession("fixture");
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    // reload candidate version after GO
    const refreshed = openOps1Db()
      .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
      .get(candidate.actionCandidateId) as Record<string, unknown>;
    const { evaluation } = evaluateAndPersistAllowlist({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/README.md", mode: "READ" },
        { path: "projects/campus360/04-ops1-i5-note.md", mode: "CREATE" },
      ],
    });
    expect(evaluation.status).toBe("VALID");
    return {
      session,
      candidate: {
        ...candidate,
        status: "APPROVED" as const,
        version: Number(refreshed.version),
      },
    };
  }

  it("creates contract, records GO linked to hash, runs fixture, blocks double exec", async () => {
    const { session, candidate } = await prepareApprovedWithAllowlist();
    const { contract } = createExecutionContract({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      actionObjective: "Créer note I5",
      actionInstructions: "Écrire un paragraphe de preuve I5.",
      adapterMode: "fixture",
      workspaceRoot,
    });
    expect(contract.status).toBe("READY_FOR_GATE");
    expect(contract.contractHash).toMatch(/^[a-f0-9]{64}$/);

    const refused = revalidateBeforeExecution({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      workspaceRoot,
    });
    expect(refused.ok).toBe(false);
    if (!refused.ok) {
      expect(refused.reason).toMatch(/MORRIS ACTION GATE MISSING/i);
    }

    const { gate, contract: approved } = recordExecutionGate({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: candidate.actionCandidateId,
      actionVersion: candidate.version,
      baseHeadSha: contract.baseHeadSha,
    });
    expect(gate.contractHash).toBe(contract.contractHash);
    expect(approved.status).toBe("APPROVED");

    expect(() =>
      recordExecutionGate({
        sessionId: session.sessionId,
        contractId: contract.contractId,
        contractHash: "0".repeat(64),
        actionCandidateId: candidate.actionCandidateId,
        actionVersion: candidate.version,
        baseHeadSha: contract.baseHeadSha,
      }),
    ).toThrow(/contractHash/i);

    const run = await runExecutionAttempt({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      adapterMode: "fixture",
      workspaceRoot,
    });
    expect(run.result.status).toBe("SUCCEEDED");
    expect(run.result.outOfContract).toBe(false);
    expect(run.result.filesCreated).toContain(
      "projects/campus360/04-ops1-i5-note.md",
    );
    expect(run.attempt.executionAttemptId).not.toBe(contract.contractHash);
    expect(run.attempt.worktreePath).toBeTruthy();

    // Principal untouched
    const status = execFileSync("git", ["status", "--porcelain", "-uno"], {
      cwd: workspaceRoot,
      encoding: "utf8",
    }).trim();
    expect(status).toBe("");

    // Anti double-exec after SUCCEEDED
    await expect(
      runExecutionAttempt({
        sessionId: session.sessionId,
        contractId: contract.contractId,
        adapterMode: "fixture",
        workspaceRoot,
      }),
    ).rejects.toThrow(/double|SUCCEEDED|incompatible/i);
  });

  it("refuses HEAD drift and remote flags stay true", async () => {
    const { session, candidate } = await prepareApprovedWithAllowlist();
    const { contract } = createExecutionContract({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      actionObjective: "obj",
      actionInstructions: "instr",
      workspaceRoot,
    });
    recordExecutionGate({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: candidate.actionCandidateId,
      actionVersion: candidate.version,
      baseHeadSha: contract.baseHeadSha,
    });
    expect(contract.noRemoteGit).toBe(true);
    expect(contract.noCommit).toBe(true);
    expect(contract.noPush).toBe(true);

    // Drift HEAD by new commit
    fs.writeFileSync(
      path.join(workspaceRoot, "projects/campus360/README.md"),
      "# changed\n",
      "utf8",
    );
    execFileSync("git", ["add", "."], { cwd: workspaceRoot });
    execFileSync("git", ["commit", "-m", "drift"], { cwd: workspaceRoot });

    const drift = revalidateBeforeExecution({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      workspaceRoot,
    });
    expect(drift.ok).toBe(false);
    if (!drift.ok) expect(drift.reason).toMatch(/HEAD dérivé/i);
  });
});

```

### `projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i5",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function prepareThroughI4(page: import("@playwright/test").Page) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await page.getByTestId("ops1-message-input").fill("Besoin exécution I5");
  await page.getByTestId("ops1-send-message").click();
  await expect(page.getByTestId("ops1-turn").first()).toBeVisible();
  await page.getByTestId("ops1-i3-create-candidate").click();
  await page.getByTestId("ops1-gate-go").click();
  await expect(page.getByTestId("ops1-i4-allowlist")).toBeVisible();
  await page.getByTestId("ops1-i4-evaluate").click();
  await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
    "ALLOWLIST VALIDE",
  );
}

test.describe("OPS1 I5 contract + fixture execution", () => {
  test("contract without GO blocks execution button", async ({ page }) => {
    await prepareThroughI4(page);
    await expect(page.getByTestId("ops1-increment-badge")).toContainText(
      "OPS1 I5",
    );
    await expect(page.getByTestId("ops1-i5-execution")).toBeVisible();
    await expect(page.getByTestId("ops1-i5-run-execution")).toBeDisabled();
    await page.getByTestId("ops1-i5-create-contract").click();
    await expect(page.getByTestId("ops1-i5-contract-hash")).toBeVisible();
    await expect(page.getByTestId("ops1-i5-run-execution")).toBeDisabled();
    await page.screenshot({
      path: path.join(screenshotDir, "01-contract-no-go.png"),
      fullPage: true,
    });
  });

  test("GO linked to hash then fixture execution succeeds", async ({
    page,
  }) => {
    await prepareThroughI4(page);
    await page.getByTestId("ops1-i5-create-contract").click();
    await expect(page.getByTestId("ops1-i5-contract-status")).toContainText(
      "READY_FOR_GATE",
    );
    await page.getByTestId("ops1-i5-record-gate").click();
    await expect(page.getByTestId("ops1-i5-contract-status")).toContainText(
      "APPROVED",
    );
    await expect(page.getByTestId("ops1-i5-run-execution")).toBeEnabled();
    await page.getByTestId("ops1-i5-run-execution").click();
    await expect(page.getByTestId("ops1-i5-attempt-status")).toContainText(
      "SUCCEEDED",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("ops1-i5-worktree")).not.toContainText("—");
    await expect(page.getByTestId("ops1-i5-no-remote")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "02-fixture-succeeded.png"),
      fullPage: true,
    });
  });

  test("microcopies I5 visible", async ({ page }) => {
    await prepareThroughI4(page);
    const panel = page.getByTestId("ops1-i5-execution");
    await expect(panel.getByText("GO DELIVERY ≠ GO D’EXÉCUTION")).toBeVisible();
    await expect(panel.getByText("GO LIÉ AU CONTRACT HASH")).toBeVisible();
    await expect(panel.getByText("I5 EXÉCUTE — I6 ANALYSE LE RAPPORT")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "03-microcopies.png"),
      fullPage: true,
    });
  });
});

```

### Diff `projects/sfia-studio/app/lib/ops1/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index f9f9e33..ff23ed8 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -89,7 +89,18 @@ export type SessionEventType =
   | "ALLOWLIST_EVALUATION_STARTED"
   | "ALLOWLIST_EVALUATION_SUCCEEDED"
   | "ALLOWLIST_EVALUATION_FAILED"
-  | "ALLOWLIST_CORRECTION_REQUIRED";
+  | "ALLOWLIST_CORRECTION_REQUIRED"
+  | "EXECUTION_CONTRACT_CREATED"
+  | "EXECUTION_CONTRACT_HASHED"
+  | "EXECUTION_GATE_RECORDED"
+  | "EXECUTION_REVALIDATION_STARTED"
+  | "EXECUTION_REVALIDATION_FAILED"
+  | "EXECUTION_WORKTREE_CREATED"
+  | "CURSOR_EXECUTION_STARTED"
+  | "CURSOR_EXECUTION_SUCCEEDED"
+  | "CURSOR_EXECUTION_FAILED"
+  | "EXECUTION_OUT_OF_SCOPE_DETECTED"
+  | "EXECUTION_STOPPED";

 export interface SessionEvent {
   eventId: string;
@@ -222,3 +233,139 @@ export const OPS1_I4_STATUS_CORRECTION =
   "CORRECTION REQUISE — AUCUNE EXÉCUTION";
 export const OPS1_I4_STATUS_REFUSED =
   "ALLOWLIST REFUSÉE — AUCUNE EXÉCUTION";
+
+/* ─── OPS1 I5 — execution contract + bounded Cursor run ─── */
+
+export type ExecutionContractStatus =
+  | "DRAFT"
+  | "READY_FOR_GATE"
+  | "APPROVED"
+  | "SUPERSEDED"
+  | "INVALID";
+
+export type ExecutionAttemptStatus =
+  | "PREPARING"
+  | "REVALIDATING"
+  | "RUNNING"
+  | "SUCCEEDED"
+  | "FAILED"
+  | "REFUSED"
+  | "STOPPED"
+  | "TIMED_OUT";
+
+export type CursorAdapterMode = "fixture" | "real";
+
+/** Immutable executable contract (pre-hash payload + frozen hash). */
+export interface ExecutionContractPayload {
+  contractVersion: string;
+  sessionId: string;
+  actionCandidateId: string;
+  actionVersion: number;
+  gateDecisionId: string | null;
+  gateDecisionType: "GO" | null;
+  gateDecidedBy: "Morris" | null;
+  gateDecidedAt: string | null;
+  repositoryRoot: string;
+  baseBranch: string;
+  baseHeadSha: string;
+  executionBranchName: string;
+  actionObjective: string;
+  actionInstructions: string;
+  allowedReads: string[];
+  allowedCreates: string[];
+  allowedModifies: string[];
+  forbiddenPaths: string[];
+  allowedOperations: AllowlistMode[];
+  maxFilesRead: number;
+  maxFilesCreated: number;
+  maxFilesModified: number;
+  maxDiffLines: number;
+  timeoutSeconds: number;
+  noRemoteGit: true;
+  noCommit: true;
+  noPush: true;
+  noPr: true;
+  noMerge: true;
+  createdAt: string;
+}
+
+export interface ExecutionContract extends ExecutionContractPayload {
+  contractId: string;
+  contractHash: string;
+  status: ExecutionContractStatus;
+  allowlistEvaluationId: string;
+  adapterMode: CursorAdapterMode;
+  supersededAt?: string | null;
+}
+
+export interface ExecutionGateRecord {
+  executionGateId: string;
+  contractId: string;
+  contractHash: string;
+  actionCandidateId: string;
+  actionVersion: number;
+  baseHeadSha: string;
+  decidedBy: "Morris";
+  decidedAt: string;
+  supersededAt?: string | null;
+}
+
+export interface MinimalExecutionResult {
+  resultId: string;
+  executionAttemptId: string;
+  contractHash: string;
+  status: ExecutionAttemptStatus;
+  adapterMode: CursorAdapterMode;
+  worktreePath: string | null;
+  exitCode: number | null;
+  timedOut: boolean;
+  stdoutDigest: string;
+  stderrDigest: string;
+  filesRead: string[];
+  filesCreated: string[];
+  filesModified: string[];
+  filesDeleted: string[];
+  filesRenamed: string[];
+  diffStat: string;
+  outOfContract: boolean;
+  refusalReason: string | null;
+  completedAt: string;
+}
+
+export interface ExecutionAttempt {
+  executionAttemptId: string;
+  contractId: string;
+  contractHash: string;
+  sessionId: string;
+  status: ExecutionAttemptStatus;
+  worktreePath: string | null;
+  localBranchName: string | null;
+  adapterMode: CursorAdapterMode;
+  startedAt: string;
+  completedAt: string | null;
+  result?: MinimalExecutionResult | null;
+}
+
+export const OPS1_I5_CONTRACT_VERSION = "ops1-i5-1.0.0";
+
+export const OPS1_I5_GO_DELIVERY_NE_EXEC =
+  "GO DELIVERY ≠ GO D’EXÉCUTION";
+export const OPS1_I5_GO_LINKED_HASH = "GO LIÉ AU CONTRACT HASH";
+export const OPS1_I5_CONTRACT_FROZEN = "CONTRAT GELÉ APRÈS GO";
+export const OPS1_I5_WORKTREE_NO_PUSH = "WORKTREE LOCAL — PAS DE PUSH";
+export const OPS1_I5_CURSOR_BOUNDED = "CURSOR RÉEL — EXÉCUTION BORNÉE";
+export const OPS1_I5_NO_AUTO_RETRY = "AUCUN RETRY AUTOMATIQUE";
+export const OPS1_I5_I6_BOUNDARY =
+  "I5 EXÉCUTE — I6 ANALYSE LE RAPPORT";
+
+export const OPS1_DEFAULT_FORBIDDEN_PATHS = [
+  "method/",
+  "prompts/",
+  "docs/",
+  "scripts/",
+  ".github/",
+  "projects/sfia-studio/",
+  "projects/chantiers360-v2/",
+  "projects/interv360/",
+  "projects/task-tracker/",
+] as const;

```

### Diff `projects/sfia-studio/app/lib/ops1/db.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/db.ts b/projects/sfia-studio/app/lib/ops1/db.ts
index 8915781..f004347 100644
--- a/projects/sfia-studio/app/lib/ops1/db.ts
+++ b/projects/sfia-studio/app/lib/ops1/db.ts
@@ -123,6 +123,76 @@ CREATE TABLE IF NOT EXISTS allowlist_evaluations (

 CREATE INDEX IF NOT EXISTS idx_allowlist_action_version
   ON allowlist_evaluations(action_candidate_id, action_version, evaluated_at);
+
+CREATE TABLE IF NOT EXISTS execution_contracts (
+  contract_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  action_candidate_id TEXT NOT NULL,
+  action_version INTEGER NOT NULL CHECK (action_version >= 1),
+  allowlist_evaluation_id TEXT NOT NULL,
+  contract_hash TEXT NOT NULL,
+  status TEXT NOT NULL CHECK (status IN (
+    'DRAFT', 'READY_FOR_GATE', 'APPROVED', 'SUPERSEDED', 'INVALID'
+  )),
+  adapter_mode TEXT NOT NULL CHECK (adapter_mode IN ('fixture', 'real')),
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  superseded_at TEXT,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
+  FOREIGN KEY (action_candidate_id) REFERENCES action_candidates(action_candidate_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_exec_contracts_action
+  ON execution_contracts(action_candidate_id, action_version, created_at);
+
+CREATE TABLE IF NOT EXISTS execution_gates (
+  execution_gate_id TEXT PRIMARY KEY NOT NULL,
+  contract_id TEXT NOT NULL,
+  contract_hash TEXT NOT NULL,
+  session_id TEXT NOT NULL,
+  action_candidate_id TEXT NOT NULL,
+  action_version INTEGER NOT NULL CHECK (action_version >= 1),
+  base_head_sha TEXT NOT NULL,
+  decided_by TEXT NOT NULL CHECK (decided_by = 'Morris'),
+  decided_at TEXT NOT NULL,
+  superseded_at TEXT,
+  FOREIGN KEY (contract_id) REFERENCES execution_contracts(contract_id),
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_exec_gates_contract
+  ON execution_gates(contract_id, decided_at);
+
+CREATE TABLE IF NOT EXISTS execution_attempts (
+  execution_attempt_id TEXT PRIMARY KEY NOT NULL,
+  contract_id TEXT NOT NULL,
+  contract_hash TEXT NOT NULL,
+  session_id TEXT NOT NULL,
+  status TEXT NOT NULL CHECK (status IN (
+    'PREPARING', 'REVALIDATING', 'RUNNING', 'SUCCEEDED',
+    'FAILED', 'REFUSED', 'STOPPED', 'TIMED_OUT'
+  )),
+  worktree_path TEXT,
+  local_branch_name TEXT,
+  adapter_mode TEXT NOT NULL CHECK (adapter_mode IN ('fixture', 'real')),
+  started_at TEXT NOT NULL,
+  completed_at TEXT,
+  FOREIGN KEY (contract_id) REFERENCES execution_contracts(contract_id),
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_exec_attempts_hash
+  ON execution_attempts(contract_hash, status, started_at);
+
+CREATE TABLE IF NOT EXISTS execution_results (
+  result_id TEXT PRIMARY KEY NOT NULL,
+  execution_attempt_id TEXT NOT NULL UNIQUE,
+  contract_hash TEXT NOT NULL,
+  status TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  completed_at TEXT NOT NULL,
+  FOREIGN KEY (execution_attempt_id) REFERENCES execution_attempts(execution_attempt_id)
+);
 `;

 let singleton: DatabaseSync | null = null;

```

### Diff `projects/sfia-studio/app/lib/ops1/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
index 0e1ec02..554fc6d 100644
--- a/projects/sfia-studio/app/lib/ops1/actions.ts
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -14,6 +14,14 @@ import {
   refuseExecutionAttempt,
 } from "./actionGate";
 import { evaluateAndPersistAllowlist } from "./allowlistService";
+import {
+  createExecutionContract,
+  recordExecutionGate,
+} from "./executionContractService";
+import {
+  getI5Bundle,
+  runExecutionAttempt,
+} from "./executionOrchestrator";
 import { Ops1Error, toSafeClientError } from "./errors";
 import {
   assertActionCandidateId,
@@ -36,9 +44,13 @@ import type {
   ConversationMode,
   ConversationUsageCounters,
   CycleSession,
+  ExecutionAttempt,
+  ExecutionContract,
+  ExecutionGateRecord,
   GateDecision,
   GateDecisionKind,
   JournalTurn,
+  MinimalExecutionResult,
   ProviderPresentation,
   SessionQualification,
 } from "./types";
@@ -111,6 +123,8 @@ export async function ops1GetSessionAction(
     candidates: ActionCandidate[];
     latestDecisionsByAction: Record<string, GateDecision | null>;
     latestAllowlistByAction: Record<string, ActionAllowlistEvaluation | null>;
+    latestContractByAction: Record<string, ExecutionContract | null>;
+    latestAttemptByContract: Record<string, ExecutionAttempt | null>;
   }>
 > {
   try {
@@ -120,6 +134,7 @@ export async function ops1GetSessionAction(
       throw new Ops1Error("NOT_FOUND", "Session introuvable.");
     }
     const i3 = getI3Bundle(id);
+    const i5 = getI5Bundle(id);
     return {
       ok: true,
       data: {
@@ -129,6 +144,8 @@ export async function ops1GetSessionAction(
         candidates: i3.candidates,
         latestDecisionsByAction: i3.latestDecisionsByAction,
         latestAllowlistByAction: i3.latestAllowlistByAction,
+        latestContractByAction: i5.latestContractByAction,
+        latestAttemptByContract: i5.latestAttemptByContract,
       },
     };
   } catch (error) {
@@ -366,3 +383,106 @@ export async function ops1EvaluateAllowlistAction(input: {
     return fail(error);
   }
 }
+
+/* ─── OPS1 I5 — contract + bounded execution ─── */
+
+export async function ops1CreateExecutionContractAction(input: {
+  sessionId: string;
+  actionCandidateId: string;
+  actionObjective: string;
+  actionInstructions: string;
+  adapterMode?: "fixture" | "real";
+}): Promise<Ops1ActionResult<{ contract: ExecutionContract }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
+    const { contract } = createExecutionContract({
+      sessionId,
+      actionCandidateId,
+      actionObjective: assertActionField("Objectif", input.actionObjective),
+      actionInstructions: assertActionField(
+        "Instructions",
+        input.actionInstructions,
+      ),
+      adapterMode: input.adapterMode === "real" ? "real" : "fixture",
+    });
+    return { ok: true, data: { contract } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1RecordExecutionGateAction(input: {
+  sessionId: string;
+  contractId: string;
+  contractHash: string;
+  actionCandidateId: string;
+  actionVersion: number;
+  baseHeadSha: string;
+}): Promise<
+  Ops1ActionResult<{
+    gate: ExecutionGateRecord;
+    contract: ExecutionContract;
+  }>
+> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
+    if (
+      typeof input.contractId !== "string" ||
+      typeof input.contractHash !== "string" ||
+      typeof input.baseHeadSha !== "string" ||
+      typeof input.actionVersion !== "number"
+    ) {
+      throw new Ops1Error("VALIDATION", "Paramètres de gate I5 invalides.");
+    }
+    const result = recordExecutionGate({
+      sessionId,
+      contractId: input.contractId,
+      contractHash: input.contractHash,
+      actionCandidateId,
+      actionVersion: input.actionVersion,
+      baseHeadSha: input.baseHeadSha,
+    });
+    return {
+      ok: true,
+      data: { gate: result.gate, contract: result.contract },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1RunExecutionAttemptAction(input: {
+  sessionId: string;
+  contractId: string;
+  adapterMode?: "fixture" | "real";
+}): Promise<
+  Ops1ActionResult<{
+    attempt: ExecutionAttempt;
+    result: MinimalExecutionResult;
+    adapterPayload: Record<string, unknown>;
+  }>
+> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    if (typeof input.contractId !== "string" || !input.contractId) {
+      throw new Ops1Error("VALIDATION", "contractId invalide.");
+    }
+    const result = await runExecutionAttempt({
+      sessionId,
+      contractId: input.contractId,
+      adapterMode: input.adapterMode,
+    });
+    return {
+      ok: true,
+      data: {
+        attempt: result.attempt,
+        result: result.result,
+        adapterPayload: result.adapterPayload,
+      },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}

```

### Diff `projects/sfia-studio/app/lib/ops1/ids.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/ids.ts b/projects/sfia-studio/app/lib/ops1/ids.ts
index 298bebb..e373e9a 100644
--- a/projects/sfia-studio/app/lib/ops1/ids.ts
+++ b/projects/sfia-studio/app/lib/ops1/ids.ts
@@ -27,3 +27,19 @@ export function createGateDecisionId(): string {
 export function createAllowlistEvaluationId(): string {
   return `ops1-alw-${randomUUID()}`;
 }
+
+export function createContractId(): string {
+  return `ops1-ctr-${randomUUID()}`;
+}
+
+export function createExecutionGateId(): string {
+  return `ops1-xgate-${randomUUID()}`;
+}
+
+export function createExecutionAttemptId(): string {
+  return `ops1-xatt-${randomUUID()}`;
+}
+
+export function createExecutionResultId(): string {
+  return `ops1-xres-${randomUUID()}`;
+}

```

### Diff `projects/sfia-studio/app/lib/ops1/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/index.ts b/projects/sfia-studio/app/lib/ops1/index.ts
index f6063d9..f676972 100644
--- a/projects/sfia-studio/app/lib/ops1/index.ts
+++ b/projects/sfia-studio/app/lib/ops1/index.ts
@@ -31,3 +31,26 @@ export {
   getLatestAllowlistEvaluation,
   supersedeAllowlistEvaluationsForAction,
 } from "./allowlistService";
+export {
+  canonicalize,
+  computeContractHash,
+} from "./executionCanonicalize";
+export {
+  buildContractPayload,
+  createExecutionContract,
+  getActiveExecutionGate,
+  getExecutionContractById,
+  getLatestExecutionContract,
+  recordExecutionGate,
+} from "./executionContractService";
+export { revalidateBeforeExecution } from "./executionRevalidation";
+export {
+  getI5Bundle,
+  getLatestExecutionAttempt,
+  runExecutionAttempt,
+} from "./executionOrchestrator";
+export { postCheckExecution } from "./executionPostCheck";
+export {
+  isRealCursorRequested,
+  runCursorAdapter,
+} from "./cursorExecutionAdapter";

```

### Diff `projects/sfia-studio/app/playwright.config.ts`

```diff
diff --git a/projects/sfia-studio/app/playwright.config.ts b/projects/sfia-studio/app/playwright.config.ts
index b0eaaaf..ddfb29a 100644
--- a/projects/sfia-studio/app/playwright.config.ts
+++ b/projects/sfia-studio/app/playwright.config.ts
@@ -22,6 +22,7 @@ export default defineConfig({
     timeout: 180_000,
     env: {
       ...process.env,
+      OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
       // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
       // without forcing fake (secrets must already be in the environment).
       ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"

```
