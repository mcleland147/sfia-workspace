# SFIA Studio — Review Pack FULL
## CYCLE JOURNAL & PILOT CONVERSATION CONTINUITY — SAME-MACRO CORRECTION CR-CJ-01…06

- **timestamp**: `2026-09-24T16:29:59+02:00` (Europe/Paris local)
- **cycle**: 8 — Delivery / implémentation
- **profil SFIA**: Critical
- **typologie**: EVOL / SAME-MACRO CORRECTION
- **GO correction**: CONSUMED (Morris — conversation courante)
- **branche projet**: `feat/sfia-studio-cycle-journal-continuity-01`
- **HEAD projet**: `aad8bc8456b3a64d37be4e12f969f09da5467c09`
- **base attendue / origin/main**: `aad8bc8456b3a64d37be4e12f969f09da5467c09`
- **source handoff précédente**: `f0deee096a8e1f5fc469a60393f3fa239e26b4cd` (`sfia/review-handoff`)
- **commit projet**: AUCUN (interdit par GO)
- **push/PR/merge projet**: AUCUN
- **runtime v3**: NON ADOPTED
- **Fake/Real**: DETERMINISTIC PRODUCT PROOF + local browser runtime. REAL Journal semantic quality NOT PROVEN. DETERMINISTIC PROVEN ≠ READY FOR REAL.

## Verdict

**READY FOR PR READINESS**

Tous les CR-CJ-01…06 sont CLOSED avec preuves déterministes et/ou runtime local.

---

## 1. Local Git Truth Check

- Branch: `feat/sfia-studio-cycle-journal-continuity-01`
- HEAD = base = origin/main = `aad8bc8456b3a64d37be4e12f969f09da5467c09`
- Aucun commit projet du lot
- Aucun staged
- Working tree dirty = candidat Journal + correction CR (attendu)

### git status --short (candidat; hors artefacts proof/tmp non-candidats)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
 M projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
?? .tmp-sfia-review/cycle-journal-continuity-proof/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalAgentsTools.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalPrompt.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
```

### git diff --name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
M	projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts

```

### git diff --stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 133 ---------------------
 .../mw1.s01.honestMemoryB.d0.test.ts               |   3 +
 .../nora-cognitive-runtime/session.d0.test.ts      |   3 +
 .../sessionTruthC.d0.test.ts                       |   3 +
 .../lifecyclePresentation.phaseB.d0.test.tsx       |   6 +
 .../postExecutionTrajectorySurface.ui.test.tsx     |   6 +
 .../preCycleTrajectoryCta.ui.test.tsx              |   6 +
 .../productJourneyProjectionCoherence.ui.test.tsx  |   6 +
 .../runningAttemptRefresh.ui.test.tsx              |   6 +
 .../trajectorySurface.ui.test.tsx                  |   6 +
 .../ProjectAssistantPanel.test.tsx                 |   6 +
 .../mw3.cognitiveStop.panel.ux.d0.test.tsx         |   6 +
 .../mw3.correction.panel.ux.d0.test.tsx            |   6 +
 .../project-assistant/orchestrateTurn.test.ts      |  85 +++++++++++--
 .../studio-projects/projectPrincipalAmend.test.tsx |   6 +
 .../pre-m6-product-ui/ProductShell.module.css      |   8 ++
 .../features/pre-m6-product-ui/ProductShell.tsx    |  16 ++-
 .../ProjectWorkspacePage.module.css                |  51 +++++++-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  26 +++-
 .../hooks/useProductConversation.ts                | 111 ++++++++++++++++-
 .../features/pre-m6-product-ui/product-tokens.css  |   6 +-
 .../surfaces/ConversationSurface.tsx               |  17 ++-
 .../pre-m6-product-ui/surfaces/RecoverySurface.tsx |  23 +++-
 .../project-assistant/ProjectAssistantPanel.tsx    |  12 +-
 .../app/features/project-assistant/actions.ts      |  99 +++++++++++++++
 .../project-assistant/buildProjectSystemPrompt.ts  |  22 +++-
 .../features/project-assistant/orchestrateTurn.ts  |  75 ++++++++++++
 .../project-assistant/presentationLabels.ts        |  19 ++-
 .../project-assistant/turnPayloadCanonical.ts      |  49 +++++++-
 .../app/lib/nora-cognitive-runtime/index.ts        |  26 ++++
 .../noraProductTurnOutputType.ts                   | 129 ++++++++++++++++++++
 .../nora-cognitive-runtime/productSqliteSession.ts |  58 +++++++++
 .../nora-cognitive-runtime/providerAgentsModel.ts  |  12 ++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  25 +++-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |  15 +++
 .../sfia-studio/app/lib/nora-eval/mw1S01Observe.ts |   3 +
 36 files changed, 916 insertions(+), 173 deletions(-)

```

`git diff --check`: clean (aucun conflit whitespace bloquant).

---

## 2. Matrice CR → cause → fix → preuve

| CR | Cause | Fichiers | Fix | Preuve | Status |
|----|-------|----------|-----|--------|--------|
| CR-CJ-01 | `historyForRequest` réinjectait tout le transcript | `turnPayloadCanonical.ts`, `useProductConversation.ts`, `ProjectAssistantPanel.tsx`, `orchestrateTurn.ts` | Découplage visibleTranscript vs providerRecentHistory; borne **12 msgs / 8000 chars** client+serveur | normalize 160 msgs + orchestrateTurn spy 150 hostile msgs — OLD marker absent | CLOSED |
| CR-CJ-02 | retrieval helper non câblé production | `cycleJournalAgentsTools.ts`, `runNoraAgentsTurn.ts`, `runNoraCognitiveTurn.ts`, `orchestrateTurn.ts`, `providerAgentsModel.ts` | Tools Agents READ-ONLY same-turn `cycle_journal_search/get_entry/get_sources` | tools.invoke + Fake skip CT projection; product path no UNKNOWN_TOOL | CLOSED |
| CR-CJ-03 | compact max 24 coupe anciens sujets | `cycleJournalPrompt.ts`, `searchCycleJournalIndex`, tools | Working set 24 + index/search all-cycle; instruction BEFORE CREATE | 40 sujets; #1 hors compact; search+UPDATE même id | CLOSED |
| CR-CJ-04 | Voir échanges → seul `sourceTurnRefs[0]` | `JournalSurface.tsx/.css`, hook, workspace | Liste cliquable de tous les refs; focus turn exact | UI test 6 refs non contigus; click pt:c/pt:f | CLOSED |
| CR-CJ-05 | journal `display:none` 1025–1199 | `ProjectWorkspacePage.module.css` | stack `@media (max-width:1199px)` journal block | runtime 1440 3-zones; 1100 journal accessible; 390 stack | CLOSED |
| CR-CJ-06 | refs/MERGE non validés | `cycleJournalStore.ts` materialize | fail-closed drop refs; reject self-merge/dup/wrong-cycle/archived UPDATE | adversarial tests | CLOSED |

---

## 3. Architecture corrective retenue

KEEP: ProductSqliteSession, Memory B, Agents SDK, HistorySurface, LPS/HD/Evidence/Truth C.

ADAPT:
- providerRecentHistory borné (12/8k) server+client
- Journal Agents tools same-turn (pas second model call)
- working set compact + index/search
- Journal UI multi-exchange
- responsive <1200 stack
- integrity fail-closed materialize

COMPLETE: CR-CJ-01…06.

REPLACE: aucun. Architecture parallèle: INTERDITE.

### OpenAI Capability Fit Check — R22

KEEP/ADAPT Agents tool seam. Journal tools attachés comme hosted web search: exécutés par Runner `tool.invoke`, pas via Control Tower. Fake adapter skip `cycle_journal_*` dans `toolDefinitionsFromModelRequest` (même pattern hosted). structured `journalDelta` inchangé same Product turn. Pas de second model call / vector DB / RAG.

---

## 4. Fichiers créés (contenu complet)

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts`

```typescript
/**
 * CYCLE JOURNAL — types only.
 * Projection sémantique cycle-aware. NEVER Truth C / HumanDecision / Evidence / Recommendation authority.
 */
export type CycleJournalEntryStatus = "active" | "archived" | "merged" | "split";

export type CycleJournalMutationOp =
  | "CREATE"
  | "UPDATE"
  | "MERGE"
  | "SPLIT"
  | "ARCHIVE";

/** Durable Pilote-facing turn ref — survives Memory B compaction. */
export type PilotTranscriptTurnRef = {
  readonly turnId: string;
  readonly role: "user" | "assistant";
  readonly seq: number;
  readonly createdAt: string;
  readonly content: string;
  readonly logicalTurnId: string | null;
  readonly cycleInstanceId: string | null;
};

export type CycleJournalEntry = {
  readonly journalEntryId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly title: string;
  readonly currentSummary: string;
  readonly status: CycleJournalEntryStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly sourceTurnRefs: readonly string[];
  /** Parent entry when this entry was produced by SPLIT or is a MERGE result. */
  readonly lineageParentIds: readonly string[];
  /** When MERGE/ARCHIVE/SPLIT supersedes this entry. */
  readonly supersededById: string | null;
  readonly lastLogicalTurnId: string | null;
};

/** Same-turn structured delta from Nora (validated; no prose parse). */
export type NoraJournalDeltaOperation = {
  readonly op: CycleJournalMutationOp;
  readonly targetEntryId: string | null;
  readonly title: string | null;
  readonly currentSummary: string | null;
  /** Additional source turn ids to attach (server also binds current turn). */
  readonly sourceTurnRefs: readonly string[];
  /** MERGE: ids absorbed into target; SPLIT: sibling titles optional via title. */
  readonly relatedEntryIds: readonly string[];
};

export type NoraJournalDelta = {
  readonly operations: readonly NoraJournalDeltaOperation[];
};

export type CycleJournalCompactProjection = {
  readonly cycleInstanceId: string;
  readonly entries: readonly {
    readonly journalEntryId: string;
    readonly title: string;
    readonly currentSummary: string;
    readonly status: CycleJournalEntryStatus;
    readonly sourceTurnCount: number;
    readonly updatedAt: string;
  }[];
};

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts`

```typescript
/**
 * Pilot transcript + Cycle Journal store ops on ProductSqliteSession.
 * Session ≠ Truth C. Compaction of session_items never mutates these tables.
 */
import { randomBytes } from "node:crypto";
import type { ProductSqliteSession } from "./productSqliteSession";
import type {
  CycleJournalCompactProjection,
  CycleJournalEntry,
  CycleJournalEntryStatus,
  NoraJournalDelta,
  PilotTranscriptTurnRef,
} from "./cycleJournalTypes";

function mintId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function parseJsonArray(raw: string): string[] {
  try {
    const v = JSON.parse(raw) as unknown;
    if (!Array.isArray(v)) return [];
    return v.map((x) => String(x)).filter((s) => s.trim() !== "");
  } catch {
    return [];
  }
}

function rowToEntry(row: {
  journal_entry_id: string;
  project_id: string;
  cycle_instance_id: string;
  title: string;
  current_summary: string;
  status: string;
  created_at: string;
  updated_at: string;
  source_turn_refs_json: string;
  lineage_parent_ids_json: string;
  superseded_by_id: string | null;
  last_logical_turn_id: string | null;
}): CycleJournalEntry {
  return Object.freeze({
    journalEntryId: row.journal_entry_id,
    projectId: row.project_id,
    cycleInstanceId: row.cycle_instance_id,
    title: row.title,
    currentSummary: row.current_summary,
    status: row.status as CycleJournalEntryStatus,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    sourceTurnRefs: Object.freeze(parseJsonArray(row.source_turn_refs_json)),
    lineageParentIds: Object.freeze(parseJsonArray(row.lineage_parent_ids_json)),
    supersededById: row.superseded_by_id,
    lastLogicalTurnId: row.last_logical_turn_id,
  });
}

export function appendPilotTranscriptTurn(
  session: ProductSqliteSession,
  input: {
    role: "user" | "assistant";
    content: string;
    createdAt?: string;
    logicalTurnId?: string | null;
    cycleInstanceId?: string | null;
    turnId?: string;
  },
): PilotTranscriptTurnRef {
  session.ensurePilotTranscriptAndJournalSchema();
  const db = session.getSqlite();
  const logicalTurnId = input.logicalTurnId?.trim() || null;
  // Retry-safe: same logical turn + role → return existing row (no duplicate).
  if (logicalTurnId) {
    const prior = db
      .prepare(
        `SELECT turn_id, seq, role, content, created_at, logical_turn_id, cycle_instance_id
         FROM pilot_transcript_turns
         WHERE project_id = ? AND session_key = ?
           AND logical_turn_id = ? AND role = ?
         ORDER BY seq ASC
         LIMIT 1`,
      )
      .get(
        session.projectId,
        session.sessionKey,
        logicalTurnId,
        input.role,
      ) as
      | {
          turn_id: string;
          seq: number;
          role: string;
          content: string;
          created_at: string;
          logical_turn_id: string | null;
          cycle_instance_id: string | null;
        }
      | undefined;
    if (prior) {
      return Object.freeze({
        turnId: prior.turn_id,
        role: prior.role as "user" | "assistant",
        seq: prior.seq,
        createdAt: prior.created_at,
        content: prior.content,
        logicalTurnId: prior.logical_turn_id,
        cycleInstanceId: prior.cycle_instance_id,
      });
    }
  }
  const createdAt = input.createdAt ?? new Date().toISOString();
  const turnId = input.turnId?.trim() || mintId("pt");
  const maxRow = db
    .prepare(
      `SELECT COALESCE(MAX(seq), -1) AS m FROM pilot_transcript_turns
       WHERE project_id = ? AND session_key = ?`,
    )
    .get(session.projectId, session.sessionKey) as { m: number };
  const seq = Number(maxRow.m) + 1;
  db.prepare(
    `INSERT INTO pilot_transcript_turns(
       project_id, session_key, turn_id, seq, role, content, created_at,
       logical_turn_id, cycle_instance_id
     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    session.projectId,
    session.sessionKey,
    turnId,
    seq,
    input.role,
    input.content,
    createdAt,
    logicalTurnId,
    input.cycleInstanceId?.trim() || null,
  );
  return Object.freeze({
    turnId,
    role: input.role,
    seq,
    createdAt,
    content: input.content,
    logicalTurnId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
  });
}

export function listPilotTranscriptTurns(
  session: ProductSqliteSession,
): PilotTranscriptTurnRef[] {
  session.ensurePilotTranscriptAndJournalSchema();
  const rows = session
    .getSqlite()
    .prepare(
      `SELECT turn_id, seq, role, content, created_at, logical_turn_id, cycle_instance_id
       FROM pilot_transcript_turns
       WHERE project_id = ? AND session_key = ?
       ORDER BY seq ASC`,
    )
    .all(session.projectId, session.sessionKey) as Array<{
    turn_id: string;
    seq: number;
    role: string;
    content: string;
    created_at: string;
    logical_turn_id: string | null;
    cycle_instance_id: string | null;
  }>;
  return rows.map((r) =>
    Object.freeze({
      turnId: r.turn_id,
      role: r.role as "user" | "assistant",
      seq: r.seq,
      createdAt: r.created_at,
      content: r.content,
      logicalTurnId: r.logical_turn_id,
      cycleInstanceId: r.cycle_instance_id,
    }),
  );
}

export function listCycleJournalEntries(
  session: ProductSqliteSession,
  cycleInstanceId: string,
): CycleJournalEntry[] {
  session.ensurePilotTranscriptAndJournalSchema();
  const cycle = cycleInstanceId.trim();
  if (!cycle) return [];
  const rows = session
    .getSqlite()
    .prepare(
      `SELECT journal_entry_id, project_id, cycle_instance_id, title, current_summary,
              status, created_at, updated_at, source_turn_refs_json,
              lineage_parent_ids_json, superseded_by_id, last_logical_turn_id
       FROM cycle_journal_entries
       WHERE project_id = ? AND session_key = ? AND cycle_instance_id = ?
       ORDER BY updated_at ASC`,
    )
    .all(session.projectId, session.sessionKey, cycle) as Array<{
    journal_entry_id: string;
    project_id: string;
    cycle_instance_id: string;
    title: string;
    current_summary: string;
    status: string;
    created_at: string;
    updated_at: string;
    source_turn_refs_json: string;
    lineage_parent_ids_json: string;
    superseded_by_id: string | null;
    last_logical_turn_id: string | null;
  }>;
  return rows.map(rowToEntry);
}

export function getCycleJournalEntry(
  session: ProductSqliteSession,
  journalEntryId: string,
): CycleJournalEntry | null {
  session.ensurePilotTranscriptAndJournalSchema();
  const id = journalEntryId.trim();
  if (!id) return null;
  const row = session
    .getSqlite()
    .prepare(
      `SELECT journal_entry_id, project_id, cycle_instance_id, title, current_summary,
              status, created_at, updated_at, source_turn_refs_json,
              lineage_parent_ids_json, superseded_by_id, last_logical_turn_id
       FROM cycle_journal_entries
       WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
    )
    .get(session.projectId, session.sessionKey, id) as
    | {
        journal_entry_id: string;
        project_id: string;
        cycle_instance_id: string;
        title: string;
        current_summary: string;
        status: string;
        created_at: string;
        updated_at: string;
        source_turn_refs_json: string;
        lineage_parent_ids_json: string;
        superseded_by_id: string | null;
        last_logical_turn_id: string | null;
      }
    | undefined;
  return row ? rowToEntry(row) : null;
}

export function buildCycleJournalCompactProjection(
  session: ProductSqliteSession,
  cycleInstanceId: string,
  maxEntries = 24,
): CycleJournalCompactProjection {
  const all = listCycleJournalEntries(session, cycleInstanceId).filter(
    (e) => e.status === "active",
  );
  const sliced = all.slice(-Math.max(1, maxEntries));
  return Object.freeze({
    cycleInstanceId: cycleInstanceId.trim(),
    entries: Object.freeze(
      sliced.map((e) =>
        Object.freeze({
          journalEntryId: e.journalEntryId,
          title: e.title,
          currentSummary: e.currentSummary,
          status: e.status,
          sourceTurnCount: e.sourceTurnRefs.length,
          updatedAt: e.updatedAt,
        }),
      ),
    ),
  });
}

/**
 * Lightweight index over ALL cycle journal entries (CR-CJ-03).
 * Metadata only — no full summaries dump by default.
 */
export function searchCycleJournalIndex(
  session: ProductSqliteSession,
  cycleInstanceId: string,
  options?: {
    query?: string;
    includeNonActive?: boolean;
    maxResults?: number;
  },
): ReadonlyArray<{
  journalEntryId: string;
  title: string;
  status: CycleJournalEntryStatus;
  sourceTurnCount: number;
  updatedAt: string;
  summaryPreview: string;
}> {
  const cycle = cycleInstanceId.trim();
  if (!cycle) return [];
  const q = (options?.query ?? "").trim().toLowerCase();
  const includeNonActive = options?.includeNonActive === true;
  const maxResults = Math.min(Math.max(options?.maxResults ?? 40, 1), 80);
  let rows = listCycleJournalEntries(session, cycle);
  if (!includeNonActive) {
    rows = rows.filter((e) => e.status === "active");
  }
  if (q) {
    rows = rows.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.currentSummary.toLowerCase().includes(q) ||
        e.journalEntryId.toLowerCase().includes(q),
    );
  }
  // Prefer most recently updated when listing without query; keep all matches capped.
  const sorted = [...rows].sort((a, b) =>
    a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0,
  );
  return Object.freeze(
    sorted.slice(0, maxResults).map((e) =>
      Object.freeze({
        journalEntryId: e.journalEntryId,
        title: e.title,
        status: e.status,
        sourceTurnCount: e.sourceTurnRefs.length,
        updatedAt: e.updatedAt,
        summaryPreview:
          e.currentSummary.length > 120
            ? `${e.currentSummary.slice(0, 120)}…`
            : e.currentSummary,
      }),
    ),
  );
}

export function retrievePilotTurnsByRefs(
  session: ProductSqliteSession,
  turnIds: readonly string[],
): PilotTranscriptTurnRef[] {
  const wanted = new Set(turnIds.map((t) => t.trim()).filter(Boolean));
  if (wanted.size === 0) return [];
  return listPilotTranscriptTurns(session).filter((t) => wanted.has(t.turnId));
}

function mergeUniqueRefs(
  existing: readonly string[],
  added: readonly string[],
): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const id of [...existing, ...added]) {
    const t = id.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
  }
  return out;
}

/**
 * CR-CJ-06 — keep only transcript turns that exist in this session and
 * are not cross-cycle (null cycleInstanceId allowed as legacy/pre-cycle).
 */
export function filterValidSourceTurnRefs(
  session: ProductSqliteSession,
  cycleInstanceId: string,
  candidateRefs: readonly string[],
): { valid: string[]; dropped: string[] } {
  const cycle = cycleInstanceId.trim();
  const turns = listPilotTranscriptTurns(session);
  const byId = new Map(turns.map((t) => [t.turnId, t]));
  const valid: string[] = [];
  const dropped: string[] = [];
  const seen = new Set<string>();
  for (const raw of candidateRefs) {
    const id = raw.trim();
    if (!id || seen.has(id)) {
      if (id && seen.has(id)) continue;
      if (!id) continue;
    }
    seen.add(id);
    const t = byId.get(id);
    if (!t) {
      dropped.push(id);
      continue;
    }
    if (t.cycleInstanceId && cycle && t.cycleInstanceId !== cycle) {
      dropped.push(id);
      continue;
    }
    valid.push(id);
  }
  return { valid, dropped };
}

/**
 * Apply structured journalDelta idempotently for a logical turn.
 * Fail-closed per-op: invalid op skipped; ledger prevents duplicate apply.
 * CR-CJ-06: source refs / related IDs validated against session transcript + cycle.
 */
export function materializeCycleJournalDelta(input: {
  session: ProductSqliteSession;
  cycleInstanceId: string;
  logicalTurnId: string;
  delta: NoraJournalDelta | null | undefined;
  boundSourceTurnIds: readonly string[];
  nowIso?: string;
}): {
  ok: boolean;
  applied: number;
  skippedDuplicate: number;
  skippedInvalid: number;
  entryIds: string[];
  droppedSourceRefs: string[];
  code: string | null;
} {
  const { session } = input;
  session.ensurePilotTranscriptAndJournalSchema();
  const cycle = input.cycleInstanceId.trim();
  const ltu = input.logicalTurnId.trim();
  if (!cycle || !ltu) {
    return {
      ok: false,
      applied: 0,
      skippedDuplicate: 0,
      skippedInvalid: 0,
      entryIds: [],
      droppedSourceRefs: [],
      code: "JOURNAL_CONTEXT_MISSING",
    };
  }
  if (!input.delta || !Array.isArray(input.delta.operations)) {
    return {
      ok: true,
      applied: 0,
      skippedDuplicate: 0,
      skippedInvalid: 0,
      entryIds: [],
      droppedSourceRefs: [],
      code: null,
    };
  }
  const db = session.getSqlite();
  const now = input.nowIso ?? new Date().toISOString();
  let applied = 0;
  let skippedDuplicate = 0;
  let skippedInvalid = 0;
  const entryIds: string[] = [];
  const droppedSourceRefs: string[] = [];

  db.exec("BEGIN IMMEDIATE");
  try {
    for (let i = 0; i < input.delta.operations.length; i += 1) {
      const op = input.delta.operations[i]!;
      const existingLedger = db
        .prepare(
          `SELECT 1 AS ok FROM cycle_journal_mutation_ledger
           WHERE project_id = ? AND session_key = ? AND logical_turn_id = ? AND op_index = ?`,
        )
        .get(session.projectId, session.sessionKey, ltu, i) as
        | { ok: number }
        | undefined;
      if (existingLedger) {
        skippedDuplicate += 1;
        continue;
      }

      const filtered = filterValidSourceTurnRefs(
        session,
        cycle,
        mergeUniqueRefs(op.sourceTurnRefs ?? [], input.boundSourceTurnIds),
      );
      droppedSourceRefs.push(...filtered.dropped);
      const boundRefs = filtered.valid;

      let journalEntryId = op.targetEntryId?.trim() || "";

      if (op.op === "CREATE") {
        journalEntryId = mintId("cje");
        const title = (op.title?.trim() || "Sujet").slice(0, 200);
        const summary = (op.currentSummary?.trim() || title).slice(0, 2000);
        db.prepare(
          `INSERT INTO cycle_journal_entries(
             project_id, session_key, journal_entry_id, cycle_instance_id,
             title, current_summary, status, created_at, updated_at,
             source_turn_refs_json, lineage_parent_ids_json, superseded_by_id,
             last_logical_turn_id
           ) VALUES (?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, '[]', NULL, ?)`,
        ).run(
          session.projectId,
          session.sessionKey,
          journalEntryId,
          cycle,
          title,
          summary,
          now,
          now,
          JSON.stringify(boundRefs),
          ltu,
        );
      } else if (op.op === "UPDATE") {
        if (!journalEntryId) {
          skippedInvalid += 1;
          continue;
        }
        const cur = getCycleJournalEntry(session, journalEntryId);
        if (!cur || cur.cycleInstanceId !== cycle || cur.status !== "active") {
          skippedInvalid += 1;
          continue;
        }
        const title = (op.title?.trim() || cur.title).slice(0, 200);
        const summary = (
          op.currentSummary?.trim() || cur.currentSummary
        ).slice(0, 2000);
        const refs = mergeUniqueRefs(cur.sourceTurnRefs, boundRefs);
        db.prepare(
          `UPDATE cycle_journal_entries
           SET title = ?, current_summary = ?, updated_at = ?,
               source_turn_refs_json = ?, last_logical_turn_id = ?
           WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
        ).run(
          title,
          summary,
          now,
          JSON.stringify(refs),
          ltu,
          session.projectId,
          session.sessionKey,
          journalEntryId,
        );
      } else if (op.op === "ARCHIVE") {
        if (!journalEntryId) {
          skippedInvalid += 1;
          continue;
        }
        const cur = getCycleJournalEntry(session, journalEntryId);
        // Only active → archived (never from merged/split).
        if (!cur || cur.cycleInstanceId !== cycle || cur.status !== "active") {
          skippedInvalid += 1;
          continue;
        }
        db.prepare(
          `UPDATE cycle_journal_entries
           SET status = 'archived', updated_at = ?, last_logical_turn_id = ?
           WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
        ).run(now, ltu, session.projectId, session.sessionKey, journalEntryId);
      } else if (op.op === "MERGE") {
        const relatedRaw = (op.relatedEntryIds ?? [])
          .map((x: string) => x.trim())
          .filter(Boolean);
        const relatedSeen = new Set<string>();
        const related: string[] = [];
        for (const rid of relatedRaw) {
          if (relatedSeen.has(rid)) continue;
          relatedSeen.add(rid);
          related.push(rid);
        }
        if (!journalEntryId || related.length === 0) {
          skippedInvalid += 1;
          continue;
        }
        if (related.includes(journalEntryId)) {
          skippedInvalid += 1;
          continue;
        }
        const target = getCycleJournalEntry(session, journalEntryId);
        if (
          !target ||
          target.cycleInstanceId !== cycle ||
          target.status !== "active"
        ) {
          skippedInvalid += 1;
          continue;
        }
        const validRelated: string[] = [];
        let relatedInvalid = false;
        for (const rid of related) {
          const src = getCycleJournalEntry(session, rid);
          if (
            !src ||
            src.cycleInstanceId !== cycle ||
            src.status !== "active"
          ) {
            relatedInvalid = true;
            break;
          }
          validRelated.push(rid);
        }
        if (relatedInvalid || validRelated.length === 0) {
          skippedInvalid += 1;
          continue;
        }
        let refs = [...target.sourceTurnRefs];
        const parents = mergeUniqueRefs(target.lineageParentIds, validRelated);
        for (const rid of validRelated) {
          const src = getCycleJournalEntry(session, rid)!;
          refs = mergeUniqueRefs(refs, src.sourceTurnRefs);
          db.prepare(
            `UPDATE cycle_journal_entries
             SET status = 'merged', superseded_by_id = ?, updated_at = ?,
                 last_logical_turn_id = ?
             WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
          ).run(
            journalEntryId,
            now,
            ltu,
            session.projectId,
            session.sessionKey,
            rid,
          );
        }
        refs = mergeUniqueRefs(refs, boundRefs);
        const title = (op.title?.trim() || target.title).slice(0, 200);
        const summary = (
          op.currentSummary?.trim() || target.currentSummary
        ).slice(0, 2000);
        db.prepare(
          `UPDATE cycle_journal_entries
           SET title = ?, current_summary = ?, updated_at = ?,
               source_turn_refs_json = ?, lineage_parent_ids_json = ?,
               last_logical_turn_id = ?
           WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
        ).run(
          title,
          summary,
          now,
          JSON.stringify(refs),
          JSON.stringify(parents),
          ltu,
          session.projectId,
          session.sessionKey,
          journalEntryId,
        );
      } else if (op.op === "SPLIT") {
        if (!journalEntryId) {
          skippedInvalid += 1;
          continue;
        }
        const cur = getCycleJournalEntry(session, journalEntryId);
        if (!cur || cur.cycleInstanceId !== cycle || cur.status !== "active") {
          skippedInvalid += 1;
          continue;
        }
        const siblingId = mintId("cje");
        const title = (op.title?.trim() || `${cur.title} (suite)`).slice(0, 200);
        const summary = (
          op.currentSummary?.trim() || cur.currentSummary
        ).slice(0, 2000);
        db.prepare(
          `INSERT INTO cycle_journal_entries(
             project_id, session_key, journal_entry_id, cycle_instance_id,
             title, current_summary, status, created_at, updated_at,
             source_turn_refs_json, lineage_parent_ids_json, superseded_by_id,
             last_logical_turn_id
           ) VALUES (?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, ?, NULL, ?)`,
        ).run(
          session.projectId,
          session.sessionKey,
          siblingId,
          cycle,
          title,
          summary,
          now,
          now,
          JSON.stringify(boundRefs),
          JSON.stringify([journalEntryId]),
          ltu,
        );
        db.prepare(
          `UPDATE cycle_journal_entries
           SET status = 'split', updated_at = ?, last_logical_turn_id = ?
           WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
        ).run(now, ltu, session.projectId, session.sessionKey, journalEntryId);
        journalEntryId = siblingId;
      } else {
        skippedInvalid += 1;
        continue;
      }

      db.prepare(
        `INSERT INTO cycle_journal_mutation_ledger(
           project_id, session_key, logical_turn_id, op_index, op,
           journal_entry_id, created_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        session.projectId,
        session.sessionKey,
        ltu,
        i,
        op.op,
        journalEntryId,
        now,
      );
      applied += 1;
      if (journalEntryId) entryIds.push(journalEntryId);
    }
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw error;
  }

  return {
    ok: true,
    applied,
    skippedDuplicate,
    skippedInvalid,
    entryIds,
    droppedSourceRefs: [...new Set(droppedSourceRefs)],
    code: null,
  };
}

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalPrompt.ts`

```typescript
/**
 * Compact Cycle Journal prompt projection + targeted source retrieval.
 * NEVER injects full transcript by default. Journal ≠ Truth C.
 */
import type { ProductSqliteSession } from "./productSqliteSession";
import {
  buildCycleJournalCompactProjection,
  retrievePilotTurnsByRefs,
  getCycleJournalEntry,
} from "./cycleJournalStore";
import type { CycleJournalCompactProjection } from "./cycleJournalTypes";

const MAX_SUMMARY_CHARS = 280;
const MAX_EXCERPT_CHARS = 400;
const MAX_RETRIEVED_TURNS = 6;

export function formatCycleJournalCompactForPrompt(
  compact: CycleJournalCompactProjection,
): string {
  const lines = [
    "=== JOURNAL DU CYCLE (projection sémantique — PAS Truth C) ===",
    "Vue compacte des sujets du cycle actif. Ce n'est PAS une HumanDecision,",
    "PAS Evidence, PAS Recommendation autoritaire, PAS LPS. Identités stables.",
    `cycleInstanceId=${compact.cycleInstanceId}`,
    `sujets_actifs=${compact.entries.length}`,
  ];
  if (compact.entries.length === 0) {
    lines.push("(aucun sujet actif — CREATE si un thème durable émerge)");
    lines.push("");
    return lines.join("\n");
  }
  for (const e of compact.entries) {
    const summary =
      e.currentSummary.length > MAX_SUMMARY_CHARS
        ? `${e.currentSummary.slice(0, MAX_SUMMARY_CHARS)}…`
        : e.currentSummary;
    lines.push(
      `- [${e.journalEntryId}] ${e.title} · refs=${e.sourceTurnCount} · ${summary}`,
    );
  }
  lines.push(
    "Si le sujet revient : UPDATE le même journalEntryId (même identité).",
    "CREATE seulement pour un nouveau thème ; MERGE/SPLIT/ARCHIVE explicites.",
    "N'invente pas d'ids ; targetEntryId = id listé ci-dessus ou null pour CREATE.",
    "Working set borné : si le thème peut déjà exister hors de cette liste,",
    "appelle d'abord l'outil cycle_journal_search (index du cycle) AVANT CREATE.",
    "Pour le détail d'un sujet : cycle_journal_get_entry / cycle_journal_get_sources.",
    "Ces outils relisent le transcript durable — ce n'est PAS Evidence / Truth C.",
    "",
  );
  return lines.join("\n");
}

/**
 * Targeted retrieval of pilot transcript turns for one journal entry.
 * Bounded — never dumps the full transcript.
 */
export function retrieveJournalEntrySourceExcerpts(
  session: ProductSqliteSession,
  journalEntryId: string,
  options?: { maxTurns?: number; maxCharsPerTurn?: number },
): {
  ok: boolean;
  journalEntryId: string;
  excerpts: { turnId: string; role: string; content: string }[];
  code: string | null;
} {
  const entry = getCycleJournalEntry(session, journalEntryId);
  if (!entry) {
    return {
      ok: false,
      journalEntryId,
      excerpts: [],
      code: "JOURNAL_ENTRY_NOT_FOUND",
    };
  }
  const maxTurns = options?.maxTurns ?? MAX_RETRIEVED_TURNS;
  const maxChars = options?.maxCharsPerTurn ?? MAX_EXCERPT_CHARS;
  const refs = entry.sourceTurnRefs.slice(-maxTurns);
  const turns = retrievePilotTurnsByRefs(session, refs);
  return {
    ok: true,
    journalEntryId,
    excerpts: turns.map((t) => ({
      turnId: t.turnId,
      role: t.role,
      content:
        t.content.length > maxChars
          ? `${t.content.slice(0, maxChars)}…`
          : t.content,
    })),
    code: null,
  };
}

export function loadCycleJournalCompactForPrompt(
  session: ProductSqliteSession,
  cycleInstanceId: string | null | undefined,
): string | null {
  const cycle = cycleInstanceId?.trim();
  if (!cycle) return null;
  const compact = buildCycleJournalCompactProjection(session, cycle);
  return formatCycleJournalCompactForPrompt(compact);
}

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalAgentsTools.ts`

```typescript
/**
 * Cycle Journal Agents tools — READ-ONLY same-turn retrieval.
 * Attached alongside SFIA route tools (like hosted web search).
 * NEVER Truth C / HumanDecision / Evidence authority.
 * Project/session/cycle bound server-side — model cannot switch projectId.
 */
import { tool } from "@openai/agents";
import type { ProductSqliteSession } from "./productSqliteSession";
import {
  buildCycleJournalCompactProjection,
  getCycleJournalEntry,
  searchCycleJournalIndex,
} from "./cycleJournalStore";
import { retrieveJournalEntrySourceExcerpts } from "./cycleJournalPrompt";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";

export type CycleJournalToolContext = {
  readonly session: ProductSqliteSession;
  readonly cycleInstanceId: string;
  readonly budget?: NoraTurnBudget;
};

function requireCycle(ctx: CycleJournalToolContext): string | null {
  const c = ctx.cycleInstanceId.trim();
  return c || null;
}

/**
 * Same-turn Journal tools for Nora Agents Runner.
 * Bound to one ProductSqliteSession + cycleInstanceId.
 */
export function createCycleJournalAgentsTools(ctx: CycleJournalToolContext) {
  const search = tool({
    name: "cycle_journal_search",
    description:
      "Search the active Cycle Journal index (all subjects of this cycle, not only the compact working set). " +
      "Use BEFORE CREATE when a theme may already exist. Returns bounded id/title/status metadata — never Evidence or Truth C.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["query"],
      properties: {
        query: {
          type: "string",
          description:
            "Substring match on title/summary, or empty string to list recent index rows.",
        },
        includeNonActive: {
          type: "boolean",
          description: "When true, include archived/merged/split. Default false.",
        },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const cycle = requireCycle(ctx);
      if (!cycle) {
        return JSON.stringify({
          ok: false,
          code: "JOURNAL_CYCLE_REQUIRED",
          entries: [],
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      const query = typeof o.query === "string" ? o.query : "";
      const includeNonActive = o.includeNonActive === true;
      const entries = searchCycleJournalIndex(ctx.session, cycle, {
        query,
        includeNonActive,
        maxResults: 40,
      });
      return JSON.stringify({
        ok: true,
        cycleInstanceId: cycle,
        count: entries.length,
        entries,
        disclosure:
          "Cycle Journal index only — projection, not Truth C / HumanDecision / Evidence.",
      });
    },
  });

  const getEntry = tool({
    name: "cycle_journal_get_entry",
    description:
      "Fetch one Cycle Journal subject by journalEntryId (same cycle only). Use to recover an older subject before UPDATE.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["journalEntryId"],
      properties: {
        journalEntryId: { type: "string" },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const cycle = requireCycle(ctx);
      if (!cycle) {
        return JSON.stringify({ ok: false, code: "JOURNAL_CYCLE_REQUIRED" });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      const id =
        typeof o.journalEntryId === "string" ? o.journalEntryId.trim() : "";
      if (!id) {
        return JSON.stringify({ ok: false, code: "JOURNAL_ENTRY_ID_REQUIRED" });
      }
      const entry = getCycleJournalEntry(ctx.session, id);
      if (!entry || entry.cycleInstanceId !== cycle) {
        return JSON.stringify({
          ok: false,
          code: "JOURNAL_ENTRY_NOT_FOUND",
          journalEntryId: id,
        });
      }
      return JSON.stringify({
        ok: true,
        entry: {
          journalEntryId: entry.journalEntryId,
          title: entry.title,
          currentSummary: entry.currentSummary,
          status: entry.status,
          sourceTurnCount: entry.sourceTurnRefs.length,
          sourceTurnRefs: entry.sourceTurnRefs.slice(-12),
          updatedAt: entry.updatedAt,
        },
        disclosure:
          "Cycle Journal entry — projection only; not Evidence / Truth C.",
      });
    },
  });

  const getSources = tool({
    name: "cycle_journal_get_sources",
    description:
      "Retrieve bounded Pilot transcript excerpts linked to a Journal subject. Use when the compact summary lacks needed detail. Not Evidence.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["journalEntryId"],
      properties: {
        journalEntryId: { type: "string" },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const cycle = requireCycle(ctx);
      if (!cycle) {
        return JSON.stringify({ ok: false, code: "JOURNAL_CYCLE_REQUIRED" });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      const id =
        typeof o.journalEntryId === "string" ? o.journalEntryId.trim() : "";
      if (!id) {
        return JSON.stringify({ ok: false, code: "JOURNAL_ENTRY_ID_REQUIRED" });
      }
      const entry = getCycleJournalEntry(ctx.session, id);
      if (!entry || entry.cycleInstanceId !== cycle) {
        return JSON.stringify({
          ok: false,
          code: "JOURNAL_ENTRY_NOT_FOUND",
          journalEntryId: id,
        });
      }
      const excerpts = retrieveJournalEntrySourceExcerpts(ctx.session, id);
      return JSON.stringify({
        ok: excerpts.ok,
        journalEntryId: id,
        title: entry.title,
        excerpts: excerpts.excerpts,
        code: excerpts.code,
        disclosure:
          "Pilot transcript excerpts only — not Evidence / Truth C / HumanDecision.",
      });
    },
  });

  return [search, getEntry, getSources];
}

/** Test helper — working-set vs full index sizes. */
export function journalWorkingSetVsIndexSizes(
  session: ProductSqliteSession,
  cycleInstanceId: string,
): { workingSet: number; indexActive: number } {
  const working = buildCycleJournalCompactProjection(
    session,
    cycleInstanceId,
    24,
  );
  const index = searchCycleJournalIndex(session, cycleInstanceId, {
    query: "",
    includeNonActive: false,
    maxResults: 200,
  });
  return { workingSet: working.entries.length, indexActive: index.length };
}

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx`

```typescript
"use client";

import { useState } from "react";
import styles from "./JournalSurface.module.css";

export type JournalSurfaceEntry = {
  journalEntryId: string;
  title: string;
  currentSummary: string;
  status: string;
  updatedAt: string;
  sourceTurnRefs: string[];
  sourceTurnCount: number;
};

export type JournalTranscriptMessage = {
  id: string;
  role: string;
  content: string;
};

export type JournalSurfaceProps = {
  entries: JournalSurfaceEntry[];
  cycleInstanceId: string | null;
  selectedEntryId: string | null;
  onSelectEntry: (entryId: string) => void;
  /** Expand linked-exchange index for a subject (does not alone scroll). */
  onViewExchanges: (entry: JournalSurfaceEntry) => void;
  /** Focus/scroll to one exact transcript turn. */
  onFocusTurn: (turnId: string) => void;
  /** Visible transcript messages — used for short exchange previews. */
  transcriptMessages?: JournalTranscriptMessage[];
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
};

function statusLabel(status: string): string {
  switch (status) {
    case "active":
      return "Actif";
    case "archived":
      return "Archivé";
    case "merged":
      return "Fusionné";
    case "split":
      return "Scindé";
    default:
      return status;
  }
}

function roleLabel(role: string): string {
  if (role === "user") return "Pilote";
  if (role === "assistant") return "Nora";
  return role;
}

function previewFor(
  turnId: string,
  messages: JournalTranscriptMessage[] | undefined,
): { role: string; excerpt: string } {
  const msg = messages?.find((m) => m.id === turnId);
  if (!msg) {
    return { role: "échange", excerpt: turnId };
  }
  const excerpt =
    msg.content.trim().length > 96
      ? `${msg.content.trim().slice(0, 93)}…`
      : msg.content.trim();
  return { role: roleLabel(msg.role), excerpt: excerpt || "(vide)" };
}

/**
 * Cycle Journal rail — semantic projection only.
 * NEVER presented as Truth C / History durable / HumanDecision.
 */
export function JournalSurface({
  entries = [],
  cycleInstanceId,
  selectedEntryId,
  onSelectEntry,
  onViewExchanges,
  onFocusTurn,
  transcriptMessages = [],
  collapsed = false,
  onToggleCollapsed,
}: JournalSurfaceProps) {
  const safeEntries = Array.isArray(entries) ? entries : [];
  const activeCount = safeEntries.filter((e) => e.status === "active").length;
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);

  return (
    <aside
      className={[styles.root, collapsed ? styles.collapsed : ""].join(" ")}
      data-testid="cycle-journal-rail"
      aria-label="Journal du cycle"
    >
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Mémoire de cycle</p>
          <h2 className={styles.title} id="cycle-journal-heading">
            Journal du cycle
          </h2>
          <p className={styles.meta}>
            {cycleInstanceId
              ? `${activeCount} sujet${activeCount === 1 ? "" : "s"}`
              : "Aucun cycle actif"}
          </p>
        </div>
        {onToggleCollapsed ? (
          <button
            type="button"
            className={styles.toggle}
            data-testid="cycle-journal-toggle"
            aria-expanded={!collapsed}
            aria-controls="cycle-journal-list"
            onClick={onToggleCollapsed}
          >
            {collapsed ? "Ouvrir" : "Replier"}
          </button>
        ) : null}
      </header>

      {!collapsed ? (
        <div
          id="cycle-journal-list"
          className={styles.list}
          role="list"
          aria-labelledby="cycle-journal-heading"
        >
          {!cycleInstanceId ? (
            <p className={styles.empty} data-testid="cycle-journal-empty">
              Le Journal s&apos;affiche lorsqu&apos;un cycle est actif. Ce n&apos;est
              pas l&apos;historique gouverné du projet.
            </p>
          ) : safeEntries.length === 0 ? (
            <p className={styles.empty} data-testid="cycle-journal-empty">
              Aucun sujet encore. Les échanges durables du cycle apparaîtront
              ici comme index navigable.
            </p>
          ) : (
            safeEntries.map((entry) => {
              const selected = selectedEntryId === entry.journalEntryId;
              const expanded = expandedEntryId === entry.journalEntryId;
              return (
                <article
                  key={entry.journalEntryId}
                  role="listitem"
                  className={[
                    styles.card,
                    selected ? styles.cardSelected : "",
                    entry.status !== "active" ? styles.cardMuted : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-testid={`cycle-journal-entry-${entry.journalEntryId}`}
                  data-status={entry.status}
                  aria-current={selected ? "true" : undefined}
                >
                  <button
                    type="button"
                    className={styles.cardSelect}
                    onClick={() => onSelectEntry(entry.journalEntryId)}
                    aria-pressed={selected}
                  >
                    <span className={styles.cardTitle}>{entry.title}</span>
                    <span className={styles.cardSummary}>
                      {entry.currentSummary}
                    </span>
                    <span className={styles.cardMeta}>
                      <span className={styles.status} data-status={entry.status}>
                        {statusLabel(entry.status)}
                      </span>
                      <span>
                        {entry.sourceTurnCount} échange
                        {entry.sourceTurnCount === 1 ? "" : "s"}
                      </span>
                    </span>
                  </button>
                  {entry.sourceTurnRefs.length > 0 ? (
                    <button
                      type="button"
                      className={styles.viewExchanges}
                      data-testid={`cycle-journal-view-${entry.journalEntryId}`}
                      aria-expanded={expanded}
                      aria-controls={`cycle-journal-exchanges-${entry.journalEntryId}`}
                      onClick={() => {
                        onViewExchanges(entry);
                        setExpandedEntryId((prev) =>
                          prev === entry.journalEntryId
                            ? null
                            : entry.journalEntryId,
                        );
                      }}
                    >
                      {expanded ? "Masquer les échanges" : "Voir les échanges"}
                    </button>
                  ) : null}
                  {expanded && entry.sourceTurnRefs.length > 0 ? (
                    <ul
                      id={`cycle-journal-exchanges-${entry.journalEntryId}`}
                      className={styles.exchangeList}
                      data-testid={`cycle-journal-exchanges-${entry.journalEntryId}`}
                      aria-label={`Échanges liés — ${entry.title}`}
                    >
                      {entry.sourceTurnRefs.map((turnId, index) => {
                        const preview = previewFor(turnId, transcriptMessages);
                        return (
                          <li key={`${turnId}-${index}`}>
                            <button
                              type="button"
                              className={styles.exchangeItem}
                              data-testid={`cycle-journal-exchange-${turnId}`}
                              onClick={() => onFocusTurn(turnId)}
                            >
                              <span className={styles.exchangeRole}>
                                {preview.role}
                              </span>
                              <span className={styles.exchangeExcerpt}>
                                {preview.excerpt}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </article>
              );
            })
          )}
        </div>
      ) : null}
    </aside>
  );
}

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css`

```typescript
.root {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-3);
  min-width: 0;
  max-height: calc(100vh - 120px);
  overflow: hidden;
  padding: var(--pm6-space-3);
  background: var(--pm6-canvas-raised);
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-lg);
}

.collapsed {
  max-height: none;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--pm6-space-2);
}

.headerText {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.eyebrow {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--pm6-forest);
}

.title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.meta {
  margin: 0;
  font-size: 0.78rem;
  color: var(--pm6-muted-strong);
}

.toggle {
  flex-shrink: 0;
  border-radius: var(--pm6-radius-pill);
  border: 1px solid var(--pm6-border-strong);
  background: var(--pm6-surface);
  color: var(--pm6-ink-soft);
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
}

.toggle:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.list {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
  overflow-y: auto;
  min-height: 0;
  padding-right: 2px;
}

.empty {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--pm6-muted-strong);
}

.card {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
  border: 1px solid var(--pm6-border-soft);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-surface);
  padding: var(--pm6-space-2);
}

.cardSelected {
  border-color: var(--pm6-forest);
  box-shadow: inset 3px 0 0 var(--pm6-forest);
}

.cardMuted {
  opacity: 0.72;
}

.cardSelect {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: inherit;
}

.cardSelect:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: var(--pm6-radius-sm);
}

.cardTitle {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--pm6-ink);
  overflow-wrap: anywhere;
}

.cardSummary {
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--pm6-muted-strong);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cardMeta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pm6-space-2);
  align-items: center;
  font-size: 0.72rem;
  color: var(--pm6-muted);
}

.status {
  font-weight: 600;
  color: var(--pm6-forest);
}

.status[data-status="archived"],
.status[data-status="merged"],
.status[data-status="split"] {
  color: var(--pm6-muted-strong);
}

.viewExchanges {
  align-self: flex-start;
  border: none;
  background: transparent;
  color: var(--pm6-forest);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.viewExchanges:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: 2px;
}

.exchangeList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.exchangeItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  text-align: left;
  border: 1px solid var(--pm6-border-soft);
  border-radius: var(--pm6-radius-sm);
  background: var(--pm6-canvas-raised);
  padding: 6px 8px;
  cursor: pointer;
  color: inherit;
}

.exchangeItem:hover {
  border-color: var(--pm6-forest);
}

.exchangeItem:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.exchangeRole {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-forest);
}

.exchangeExcerpt {
  font-size: 0.76rem;
  line-height: 1.4;
  color: var(--pm6-ink-soft);
  overflow-wrap: anywhere;
}

```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts`

```typescript
/**
 * CYCLE JOURNAL & PILOT CONVERSATION CONTINUITY — deterministic proofs.
 * Journal ≠ Truth C / HD / Evidence / Recommendation authority.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  buildCycleJournalCompactProjection,
  listCycleJournalEntries,
  listPilotTranscriptTurns,
  materializeCycleJournalDelta,
  retrievePilotTurnsByRefs,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";
import {
  formatCycleJournalCompactForPrompt,
  retrieveJournalEntrySourceExcerpts,
} from "@/lib/nora-cognitive-runtime/cycleJournalPrompt";
import {
  isNoraJournalDeltaStructured,
  normalizeNoraProductTurnStructuredOutput,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const dirs: string[] = [];

function tmpSession(projectId: string, sessionKey = "f1-default") {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cj-"));
  dirs.push(dir);
  const dbPath = path.join(dir, "session.sqlite");
  return new ProductSqliteSession({ projectId, dbPath, sessionKey });
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

const HOLD_GUIDANCE = {
  kind: "HOLD" as const,
  scope: "BLOCKER_RESOLUTION" as const,
  statement: "Pause.",
  rationale: null,
};

describe("cycleJournal schema + product turn journalDelta", () => {
  it("requires journalDelta on Agents output type schema", () => {
    const required = NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema
      .required as string[];
    expect(required).toContain("journalDelta");
  });

  it("validates journalDelta structured ops", () => {
    expect(
      isNoraJournalDeltaStructured({
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Scope",
            currentSummary: "Clarify scope",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      }),
    ).toBe(true);
    expect(
      isNoraJournalDeltaStructured({
        operations: [{ op: "DELETE", targetEntryId: null }],
      }),
    ).toBe(false);
  });

  it("invalid journalDelta fails closed to null without killing narrative", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "Hello Pilote",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: HOLD_GUIDANCE,
      journalDelta: { operations: [{ op: "NOPE" }] },
    });
    expect(coherent).not.toBeNull();
    expect(coherent!.narrative).toBe("Hello Pilote");
    expect(coherent!.journalDelta).toBeNull();
  });
});

describe("pilot transcript restart-safe", () => {
  it("persists and rehydrates across session reopen", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cj-rh-"));
    dirs.push(dir);
    const dbPath = path.join(dir, "session.sqlite");
    const s1 = new ProductSqliteSession({
      projectId: "proj-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const u = appendPilotTranscriptTurn(s1, {
      role: "user",
      content: "Bonjour",
      logicalTurnId: "ltu:1",
    });
    appendPilotTranscriptTurn(s1, {
      role: "assistant",
      content: "Salut",
      logicalTurnId: "ltu:1",
    });
    s1.close();

    const s2 = new ProductSqliteSession({
      projectId: "proj-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const turns = listPilotTranscriptTurns(s2);
    expect(turns).toHaveLength(2);
    expect(turns[0]!.turnId).toBe(u.turnId);
    expect(turns[0]!.content).toBe("Bonjour");
    expect(turns[1]!.content).toBe("Salut");
    s2.close();
  });

  it("does not duplicate on logical-turn retry", () => {
    const s = tmpSession("proj-retry");
    appendPilotTranscriptTurn(s, {
      role: "user",
      content: "once",
      logicalTurnId: "ltu:r",
    });
    appendPilotTranscriptTurn(s, {
      role: "user",
      content: "dup",
      logicalTurnId: "ltu:r",
    });
    expect(listPilotTranscriptTurns(s)).toHaveLength(1);
    s.close();
  });
});

describe("cycle journal materialize", () => {
  it("CREATE / UPDATE / ARCHIVE with source refs", () => {
    const s = tmpSession("proj-j");
    const t1 = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "scope A",
      logicalTurnId: "ltu:a",
    });
    const created = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:a",
      boundSourceTurnIds: [t1.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Périmètre",
            currentSummary: "Clarifier le périmètre",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(created.applied).toBe(1);
    const entries = listCycleJournalEntries(s, "cyc:1");
    expect(entries).toHaveLength(1);
    const id = entries[0]!.journalEntryId;
    expect(entries[0]!.sourceTurnRefs).toContain(t1.turnId);

    const t2 = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "scope again later",
      logicalTurnId: "ltu:b",
    });
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:b",
      boundSourceTurnIds: [t2.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: id,
            title: null,
            currentSummary: "Périmètre raffiné",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const updated = listCycleJournalEntries(s, "cyc:1")[0]!;
    expect(updated.journalEntryId).toBe(id);
    expect(updated.currentSummary).toBe("Périmètre raffiné");
    expect(updated.sourceTurnRefs).toEqual(
      expect.arrayContaining([t1.turnId, t2.turnId]),
    );

    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:c",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: id,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(listCycleJournalEntries(s, "cyc:1")[0]!.status).toBe("archived");
    s.close();
  });

  it("MERGE / SPLIT retain lineage; no silent delete", () => {
    const s = tmpSession("proj-ms");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:1",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "A",
            currentSummary: "a",
            sourceTurnRefs: ["pt:1"],
            relatedEntryIds: [],
          },
          {
            op: "CREATE",
            targetEntryId: null,
            title: "B",
            currentSummary: "b",
            sourceTurnRefs: ["pt:2"],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const [a, b] = listCycleJournalEntries(s, "cyc:1");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:2",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: a!.journalEntryId,
            title: "A+B",
            currentSummary: "merged",
            sourceTurnRefs: [],
            relatedEntryIds: [b!.journalEntryId],
          },
        ],
      },
    });
    const afterMerge = listCycleJournalEntries(s, "cyc:1");
    expect(afterMerge).toHaveLength(2);
    expect(
      afterMerge.find((e) => e.journalEntryId === b!.journalEntryId)?.status,
    ).toBe("merged");
    expect(
      afterMerge.find((e) => e.journalEntryId === a!.journalEntryId)?.title,
    ).toBe("A+B");

    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:3",
      boundSourceTurnIds: ["pt:3"],
      delta: {
        operations: [
          {
            op: "SPLIT",
            targetEntryId: a!.journalEntryId,
            title: "A suite",
            currentSummary: "split child",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const afterSplit = listCycleJournalEntries(s, "cyc:1");
    expect(afterSplit.length).toBeGreaterThanOrEqual(3);
    expect(
      afterSplit.find((e) => e.journalEntryId === a!.journalEntryId)?.status,
    ).toBe("split");
    const child = afterSplit.find(
      (e) => e.status === "active" && e.title === "A suite",
    );
    expect(child?.lineageParentIds).toContain(a!.journalEntryId);
    s.close();
  });

  it("retry/idempotence: second apply of same logical turn is no-op", () => {
    const s = tmpSession("proj-idemp");
    const delta = {
      operations: [
        {
          op: "CREATE" as const,
          targetEntryId: null,
          title: "X",
          currentSummary: "x",
          sourceTurnRefs: [] as string[],
          relatedEntryIds: [] as string[],
        },
      ],
    };
    const r1 = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:same",
      boundSourceTurnIds: [],
      delta,
    });
    const r2 = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:same",
      boundSourceTurnIds: [],
      delta,
    });
    expect(r1.applied).toBe(1);
    expect(r2.applied).toBe(0);
    expect(r2.skippedDuplicate).toBe(1);
    expect(listCycleJournalEntries(s, "cyc:1")).toHaveLength(1);
    s.close();
  });

  it("isolates journals by cycleInstanceId", () => {
    const s = tmpSession("proj-iso");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:A",
      logicalTurnId: "ltu:1",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Only A",
            currentSummary: "a",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(listCycleJournalEntries(s, "cyc:A")).toHaveLength(1);
    expect(listCycleJournalEntries(s, "cyc:B")).toHaveLength(0);
    s.close();
  });
});

describe("journal compact context + targeted retrieval", () => {
  it("builds compact prompt without dumping transcript", () => {
    const s = tmpSession("proj-ctx");
    for (let i = 0; i < 5; i += 1) {
      appendPilotTranscriptTurn(s, {
        role: i % 2 === 0 ? "user" : "assistant",
        content: `turn-${i}-` + "x".repeat(200),
        logicalTurnId: `ltu:${i}`,
      });
    }
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:0",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Thème",
            currentSummary: "synthèse courte",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const compact = buildCycleJournalCompactProjection(s, "cyc:1");
    const section = formatCycleJournalCompactForPrompt(compact);
    expect(section).toContain("JOURNAL DU CYCLE");
    expect(section).toContain("Thème");
    expect(section).not.toContain("turn-0-xxx");
    expect(section).toContain("PAS Truth C");
    s.close();
  });

  it("retrieves only referenced source turns", () => {
    const s = tmpSession("proj-ret");
    const turns = [];
    for (let i = 0; i < 10; i += 1) {
      turns.push(
        appendPilotTranscriptTurn(s, {
          role: "user",
          content: `content-${i}`,
          logicalTurnId: `ltu:${i}`,
        }),
      );
    }
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:j",
      boundSourceTurnIds: [turns[2]!.turnId, turns[7]!.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Focus",
            currentSummary: "two refs",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const entry = listCycleJournalEntries(s, "cyc:1")[0]!;
    const excerpts = retrieveJournalEntrySourceExcerpts(
      s,
      entry.journalEntryId,
    );
    expect(excerpts.ok).toBe(true);
    expect(excerpts.excerpts).toHaveLength(2);
    expect(excerpts.excerpts.map((e) => e.content).sort()).toEqual([
      "content-2",
      "content-7",
    ]);
    const byRefs = retrievePilotTurnsByRefs(s, [turns[2]!.turnId]);
    expect(byRefs).toHaveLength(1);
    s.close();
  });
});

describe("long-cycle deterministic ≥100 turns", () => {
  it("keeps subject identity across non-contiguous updates without full rebuild", () => {
    const s = tmpSession("proj-long");
    const t0 = performance.now();
    let subjectId: string | null = null;
    let ops = 0;
    for (let i = 0; i < 110; i += 1) {
      const turn = appendPilotTranscriptTurn(s, {
        role: i % 2 === 0 ? "user" : "assistant",
        content: `msg-${i}`,
        logicalTurnId: `ltu:${i}`,
        cycleInstanceId: "cyc:long",
      });
      ops += 1;
      if (i === 0) {
        const r = materializeCycleJournalDelta({
          session: s,
          cycleInstanceId: "cyc:long",
          logicalTurnId: `ltu:${i}`,
          boundSourceTurnIds: [turn.turnId],
          delta: {
            operations: [
              {
                op: "CREATE",
                targetEntryId: null,
                title: "Sujet stable",
                currentSummary: "v0",
                sourceTurnRefs: [],
                relatedEntryIds: [],
              },
            ],
          },
        });
        subjectId = r.entryIds[0]!;
        ops += 1;
      } else if (i === 30 || i === 70 || i === 100) {
        materializeCycleJournalDelta({
          session: s,
          cycleInstanceId: "cyc:long",
          logicalTurnId: `ltu:${i}`,
          boundSourceTurnIds: [turn.turnId],
          delta: {
            operations: [
              {
                op: "UPDATE",
                targetEntryId: subjectId,
                title: null,
                currentSummary: `v${i}`,
                sourceTurnRefs: [],
                relatedEntryIds: [],
              },
            ],
          },
        });
        ops += 1;
      } else if (i === 50) {
        materializeCycleJournalDelta({
          session: s,
          cycleInstanceId: "cyc:long",
          logicalTurnId: `ltu:${i}`,
          boundSourceTurnIds: [turn.turnId],
          delta: {
            operations: [
              {
                op: "CREATE",
                targetEntryId: null,
                title: "Autre sujet",
                currentSummary: "side",
                sourceTurnRefs: [],
                relatedEntryIds: [],
              },
            ],
          },
        });
        ops += 1;
      }
    }
    const elapsed = performance.now() - t0;
    const entries = listCycleJournalEntries(s, "cyc:long");
    const stable = entries.find((e) => e.journalEntryId === subjectId);
    expect(stable).toBeTruthy();
    expect(stable!.currentSummary).toBe("v100");
    expect(stable!.sourceTurnRefs.length).toBeGreaterThanOrEqual(4);
    expect(entries.filter((e) => e.status === "active").length).toBe(2);
    expect(listPilotTranscriptTurns(s).length).toBe(110);
    // Bound: incremental ops, not O(rebuild all transcript each turn).
    expect(ops).toBeLessThan(120);
    expect(elapsed).toBeLessThan(5000);
    const compact = formatCycleJournalCompactForPrompt(
      buildCycleJournalCompactProjection(s, "cyc:long"),
    );
    expect(compact.length).toBeLessThan(8000);
    expect(compact).not.toMatch(/msg-109/);
    s.close();
  });
});

describe("Journal ≠ Truth C / HD promotion", () => {
  it("materialize does not write oa_* or human_decision tables", () => {
    const s = tmpSession("proj-bound");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:1",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "T",
            currentSummary: "s",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const tables = s
      .getSqlite()
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`,
      )
      .all() as { name: string }[];
    const names = tables.map((t) => t.name);
    expect(names).toContain("cycle_journal_entries");
    expect(names).toContain("pilot_transcript_turns");
    expect(names.some((n) => n.startsWith("oa_"))).toBe(false);
    expect(names.some((n) => n.includes("human_decision"))).toBe(false);
    s.close();
  });
});

describe("CR-CJ-01 providerRecentHistory bounds", () => {
  it("bounds ≥150-message visible transcript; old content not injected", async () => {
    const {
      normalizeProductTurnHistory,
      measureProductTurnHistoryBounds,
      PRODUCT_TURN_MAX_HISTORY_MESSAGES,
      PRODUCT_TURN_MAX_HISTORY_CHARS,
    } = await import("@/features/project-assistant/turnPayloadCanonical");

    const OLD = "UNIQUE_OLD_MARKER_CR_CJ_01_SHOULD_NOT_REACH_PROVIDER";
    const visible: { role: "user" | "assistant"; content: string }[] = [];
    for (let i = 0; i < 160; i += 1) {
      visible.push({
        role: i % 2 === 0 ? "user" : "assistant",
        content: i === 0 ? OLD : `recent-turn-${i}`,
      });
    }
    const providerRecent = normalizeProductTurnHistory(visible);
    const bounds = measureProductTurnHistoryBounds(providerRecent);
    expect(bounds.withinBounds).toBe(true);
    expect(bounds.messageCount).toBeLessThanOrEqual(
      PRODUCT_TURN_MAX_HISTORY_MESSAGES,
    );
    expect(bounds.totalChars).toBeLessThanOrEqual(
      PRODUCT_TURN_MAX_HISTORY_CHARS,
    );
    expect(providerRecent.some((m) => m.content.includes(OLD))).toBe(false);
    expect(providerRecent.some((m) => m.content.includes("recent-turn-159"))).toBe(
      true,
    );
    expect(visible).toHaveLength(160);
  });
});

describe("CR-CJ-02/03 Journal tools + >24 subject recovery", () => {
  it("search index recovers subject #1 outside compact working set; UPDATE keeps id", async () => {
    const s = tmpSession("proj-gt24");
    const cycle = "cyc:gt24";
    const ids: string[] = [];
    for (let i = 0; i < 40; i += 1) {
      const turn = appendPilotTranscriptTurn(s, {
        role: "user",
        content: `seed-${i}`,
        logicalTurnId: `ltu:seed:${i}`,
        cycleInstanceId: cycle,
      });
      const r = materializeCycleJournalDelta({
        session: s,
        cycleInstanceId: cycle,
        logicalTurnId: `ltu:seed:${i}`,
        boundSourceTurnIds: [turn.turnId],
        delta: {
          operations: [
            {
              op: "CREATE",
              targetEntryId: null,
              title: i === 0 ? "Sujet primordial unique" : `Sujet ${i}`,
              currentSummary: i === 0 ? "summary-first" : `summary-${i}`,
              sourceTurnRefs: [],
              relatedEntryIds: [],
            },
          ],
        },
      });
      ids.push(r.entryIds[0]!);
    }
    const firstId = ids[0]!;
    const compact = buildCycleJournalCompactProjection(s, cycle, 24);
    expect(compact.entries).toHaveLength(24);
    expect(
      compact.entries.some((e) => e.journalEntryId === firstId),
    ).toBe(false);

    const { searchCycleJournalIndex } = await import(
      "@/lib/nora-cognitive-runtime/cycleJournalStore"
    );
    const { createCycleJournalAgentsTools } = await import(
      "@/lib/nora-cognitive-runtime/cycleJournalAgentsTools"
    );

    const found = searchCycleJournalIndex(s, cycle, {
      query: "primordial",
      maxResults: 40,
    });
    expect(found.some((e) => e.journalEntryId === firstId)).toBe(true);

    const tools = createCycleJournalAgentsTools({
      session: s,
      cycleInstanceId: cycle,
    });
    expect(tools.map((t) => t.name).sort()).toEqual([
      "cycle_journal_get_entry",
      "cycle_journal_get_sources",
      "cycle_journal_search",
    ]);
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const searchTool = tools.find((t) => t.name === "cycle_journal_search")!;
    const searchRaw = await searchTool.invoke(
      runCtx,
      JSON.stringify({ query: "primordial" }),
    );
    const searchJson = JSON.parse(String(searchRaw)) as {
      ok: boolean;
      entries: { journalEntryId: string }[];
    };
    expect(searchJson.ok).toBe(true);
    expect(
      searchJson.entries.some((e) => e.journalEntryId === firstId),
    ).toBe(true);

    const getTool = tools.find((t) => t.name === "cycle_journal_get_entry")!;
    const getRaw = await getTool.invoke(
      runCtx,
      JSON.stringify({ journalEntryId: firstId }),
    );
    const getJson = JSON.parse(String(getRaw)) as {
      ok: boolean;
      entry: { journalEntryId: string; title: string };
    };
    expect(getJson.ok).toBe(true);
    expect(getJson.entry.journalEntryId).toBe(firstId);

    const later = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "revive first",
      logicalTurnId: "ltu:revive",
      cycleInstanceId: cycle,
    });
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:revive",
      boundSourceTurnIds: [later.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: firstId,
            title: null,
            currentSummary: "revived-after-search",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const active = listCycleJournalEntries(s, cycle).filter(
      (e) => e.status === "active",
    );
    expect(active.filter((e) => e.title.includes("primordial")).length).toBe(1);
    expect(
      active.find((e) => e.journalEntryId === firstId)?.currentSummary,
    ).toBe("revived-after-search");
    s.close();
  });
});

describe("CR-CJ-06 adversarial integrity", () => {
  it("drops phantom/cross-cycle refs; rejects self-merge and bad relations", async () => {
    const s = tmpSession("proj-adv");
    const cycle = "cyc:adv";
    const other = "cyc:other";
    const tOk = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "ok-turn",
      logicalTurnId: "ltu:ok",
      cycleInstanceId: cycle,
    });
    const tOther = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "other-cycle",
      logicalTurnId: "ltu:other",
      cycleInstanceId: other,
    });

    const create = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:c1",
      boundSourceTurnIds: [tOk.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "A",
            currentSummary: "a",
            sourceTurnRefs: ["pt:phantom", tOther.turnId],
            relatedEntryIds: [],
          },
          {
            op: "CREATE",
            targetEntryId: null,
            title: "B",
            currentSummary: "b",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(create.droppedSourceRefs).toEqual(
      expect.arrayContaining(["pt:phantom", tOther.turnId]),
    );
    const [a, b] = listCycleJournalEntries(s, cycle);
    expect(a!.sourceTurnRefs).toEqual([tOk.turnId]);
    expect(a!.sourceTurnRefs).not.toContain("pt:phantom");
    expect(a!.sourceTurnRefs).not.toContain(tOther.turnId);

    const selfMerge = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:self",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: a!.journalEntryId,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [a!.journalEntryId],
          },
        ],
      },
    });
    expect(selfMerge.applied).toBe(0);
    expect(selfMerge.skippedInvalid).toBe(1);
    expect(listCycleJournalEntries(s, cycle).find((e) => e.journalEntryId === a!.journalEntryId)?.status).toBe(
      "active",
    );

    const dupRelated = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:dup",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: a!.journalEntryId,
            title: "merged",
            currentSummary: "m",
            sourceTurnRefs: [],
            relatedEntryIds: [b!.journalEntryId, b!.journalEntryId],
          },
        ],
      },
    });
    expect(dupRelated.applied).toBe(1);
    expect(
      listCycleJournalEntries(s, cycle).find((e) => e.journalEntryId === b!.journalEntryId)
        ?.status,
    ).toBe("merged");

    // Archive then UPDATE archived → skip
    const cCreate = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:c3",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "C",
            currentSummary: "c",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const cId = cCreate.entryIds[0]!;
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: cId,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const updArch = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:upd-arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: cId,
            title: null,
            currentSummary: "should-fail",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(updArch.applied).toBe(0);
    expect(updArch.skippedInvalid).toBe(1);
    expect(
      listCycleJournalEntries(s, cycle).find((e) => e.journalEntryId === cId)
        ?.currentSummary,
    ).toBe("c");

    // Idempotent retry of successful ARCHIVE
    const retryArch = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: cId,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(retryArch.skippedDuplicate).toBe(1);
    expect(retryArch.applied).toBe(0);

    // Missing related
    const d = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:d",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "D",
            currentSummary: "d",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const missingRel = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:miss",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: d.entryIds[0]!,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: ["cje:does-not-exist"],
          },
        ],
      },
    });
    expect(missingRel.skippedInvalid).toBe(1);
    expect(missingRel.applied).toBe(0);
    s.close();
  });
});

```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx`

```typescript
/** @vitest-environment jsdom */
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fs from "node:fs";
import path from "node:path";
import {
  JournalSurface,
  type JournalSurfaceEntry,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";
import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
import styles from "@/features/pre-m6-product-ui/ProjectWorkspacePage.module.css";

const sample: JournalSurfaceEntry[] = [
  {
    journalEntryId: "cje:1",
    title: "Périmètre",
    currentSummary: "Clarifier le périmètre livrable",
    status: "active",
    updatedAt: "2026-09-24T12:00:00.000Z",
    sourceTurnRefs: ["pt:a", "pt:b", "pt:c", "pt:d", "pt:e", "pt:f"],
    sourceTurnCount: 6,
  },
];

const transcript = [
  { id: "pt:a", role: "user", content: "Premier échange périmètre" },
  { id: "pt:b", role: "assistant", content: "Nora répond A" },
  { id: "pt:c", role: "user", content: "Échange intermédiaire C" },
  { id: "pt:d", role: "assistant", content: "Nora répond D" },
  { id: "pt:e", role: "user", content: "Échange final E" },
  { id: "pt:f", role: "assistant", content: "Nora répond F" },
];

describe("JournalSurface UI", () => {
  it("lists all linked exchanges and focuses exact turn (CR-CJ-04)", async () => {
    const user = userEvent.setup();
    let viewed: string | null = null;
    let selected: string | null = null;
    let focused: string | null = null;
    render(
      <JournalSurface
        entries={sample}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={(id) => {
          selected = id;
        }}
        onViewExchanges={(e) => {
          viewed = e.journalEntryId;
        }}
        onFocusTurn={(id) => {
          focused = id;
        }}
        transcriptMessages={transcript}
      />,
    );
    expect(screen.getByTestId("cycle-journal-rail")).toBeTruthy();
    expect(screen.getByText("Journal du cycle")).toBeTruthy();
    expect(screen.getByText("Périmètre")).toBeTruthy();
    await user.click(screen.getByTestId("cycle-journal-view-cje:1"));
    expect(viewed).toBe("cje:1");
    const list = screen.getByTestId("cycle-journal-exchanges-cje:1");
    expect(within(list).getAllByRole("button")).toHaveLength(6);
    expect(within(list).getByText("Échange intermédiaire C")).toBeTruthy();
    await user.click(screen.getByTestId("cycle-journal-exchange-pt:c"));
    expect(focused).toBe("pt:c");
    await user.click(screen.getByTestId("cycle-journal-exchange-pt:f"));
    expect(focused).toBe("pt:f");
    await user.click(screen.getByText("Périmètre"));
    expect(selected).toBe("cje:1");
  });
});

describe("layout Option A CSS tokens", () => {
  it("exposes journal column + three-zone desktop classes", () => {
    expect(styles.journalColumn).toBeTruthy();
    expect(styles.layout).toBeTruthy();
    expect(styles.main).toBeTruthy();
    expect(styles.lpsColumn).toBeTruthy();
  });

  it("CR-CJ-05 — Journal accessible below 1200 (no 1025–1199 dead zone)", () => {
    const cssPath = path.resolve(
      __dirname,
      "../../features/pre-m6-product-ui/ProjectWorkspacePage.module.css",
    );
    const css = fs.readFileSync(cssPath, "utf8");
    expect(css).toMatch(/@media\s*\(\s*max-width:\s*1199px\s*\)/);
    expect(css).toMatch(/@media\s*\(\s*min-width:\s*1200px\s*\)/);
    // Mid-band must show journalColumn as block inside <1200 stack.
    const stackBlock = css.match(
      /@media\s*\(\s*max-width:\s*1199px\s*\)\s*\{([\s\S]*?)\n\}/,
    );
    expect(stackBlock?.[1]).toMatch(/\.journalColumn\s*\{[^}]*display:\s*block/);
  });
});

describe("recovery transcript honesty", () => {
  it("mentions restored transcript when available", () => {
    const msg = w1RestartHonestyMessage({
      transcriptAvailability: "available",
    });
    expect(msg).toMatch(/Conversation Pilote/);
    expect(msg).not.toMatch(/Peut devoir être repris : conversation en cours/);
  });
});

```

## 5. Diffs significatifs (modifications)

### `projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts b/projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts
index 9c257f39..1cf94ade 100644
--- a/projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts
+++ b/projects/sfia-studio/app/features/project-assistant/turnPayloadCanonical.ts
@@ -11,7 +11,9 @@
  * Digest/payload is conflict detection ONLY — never Product turn identity.
  */
 
-export const PRODUCT_TURN_MAX_HISTORY_MESSAGES = 20;
+export const PRODUCT_TURN_MAX_HISTORY_MESSAGES = 12;
+/** Soft cap on total history content chars injected into the provider envelope. */
+export const PRODUCT_TURN_MAX_HISTORY_CHARS = 8000;
 
 export type CanonicalHistoryMessage = {
   readonly role: "user" | "assistant";
@@ -34,11 +36,18 @@ export type PendingTurnRetryEnvelope = {
   readonly history: readonly CanonicalHistoryMessage[];
 };
 
-/** Normalize history exactly as the Product Assistant provider path does. */
+/**
+ * Normalize + bound provider-facing recent history (CR-CJ-01).
+ * Visible transcript may be longer; this function is the ONLY server/client
+ * path that shapes what the model receives as conversational history.
+ * - last N user/assistant messages
+ * - total content char budget
+ * - prefer keeping coherent trailing pairs when trimming by chars
+ */
 export function normalizeProductTurnHistory(
   history: readonly { role: string; content: string }[] | null | undefined,
 ): CanonicalHistoryMessage[] {
-  return (history ?? [])
+  const filtered = (history ?? [])
     .filter(
       (m) =>
         (m.role === "user" || m.role === "assistant") &&
@@ -50,6 +59,40 @@ export function normalizeProductTurnHistory(
       content: m.content.trim(),
     }))
     .slice(-PRODUCT_TURN_MAX_HISTORY_MESSAGES);
+
+  let total = filtered.reduce((sum, m) => sum + m.content.length, 0);
+  if (total <= PRODUCT_TURN_MAX_HISTORY_CHARS) {
+    return filtered;
+  }
+
+  // Drop oldest messages until under char budget; keep at least the last message.
+  const bounded = [...filtered];
+  while (bounded.length > 1 && total > PRODUCT_TURN_MAX_HISTORY_CHARS) {
+    const removed = bounded.shift();
+    total -= removed?.content.length ?? 0;
+  }
+  if (bounded.length === 1 && bounded[0]!.content.length > PRODUCT_TURN_MAX_HISTORY_CHARS) {
+    bounded[0] = {
+      role: bounded[0]!.role,
+      content: bounded[0]!.content.slice(-PRODUCT_TURN_MAX_HISTORY_CHARS),
+    };
+  }
+  return bounded;
+}
+
+/** Observability helper for CR-CJ-01 proofs. */
+export function measureProductTurnHistoryBounds(
+  history: readonly CanonicalHistoryMessage[],
+): { messageCount: number; totalChars: number; withinBounds: boolean } {
+  const messageCount = history.length;
+  const totalChars = history.reduce((s, m) => s + m.content.length, 0);
+  return {
+    messageCount,
+    totalChars,
+    withinBounds:
+      messageCount <= PRODUCT_TURN_MAX_HISTORY_MESSAGES &&
+      totalChars <= PRODUCT_TURN_MAX_HISTORY_CHARS,
+  };
 }
 
 export function buildCanonicalTurnPayload(

```

### `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 0f6b6ce5..1755cb34 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -19,6 +19,12 @@ import {
   type NoraAgentsUsdAccounting,
   type NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
+import {
+  appendPilotTranscriptTurn,
+  materializeCycleJournalDelta,
+} from "@/lib/nora-cognitive-runtime/cycleJournalStore";
+import { loadCycleJournalCompactForPrompt } from "@/lib/nora-cognitive-runtime/cycleJournalPrompt";
+import { CANONICAL_CONVERSATION_SESSION_KEY } from "./f2/canonicalConversationSession";
 import {
   CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH,
   MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
@@ -346,6 +352,26 @@ export async function orchestrateProjectAssistantTurn(input: {
         truthCContext: input.truthCContext,
         methodContext: input.methodContext ?? null,
         studioCognitiveContext: input.studioCognitiveContext ?? null,
+        cycleJournalCompactSection: (() => {
+          const cycleId =
+            input.studioCognitiveContext?.activeCycle?.cycleInstanceId ?? null;
+          if (!cycleId) return null;
+          try {
+            const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
+            const session = new ProductSqliteSession({
+              projectId: project.projectId,
+              dbPath,
+              sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
+            });
+            try {
+              return loadCycleJournalCompactForPrompt(session, cycleId);
+            } finally {
+              session.close();
+            }
+          } catch {
+            return null;
+          }
+        })(),
       }),
     },
     ...history.map((m) => ({ role: m.role, content: m.content })),
@@ -388,6 +414,8 @@ export async function orchestrateProjectAssistantTurn(input: {
       usdAccounting: input.usdAccounting,
       campaignBudget: input.campaignBudget,
       outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
+      cycleJournalCycleInstanceId:
+        input.studioCognitiveContext?.activeCycle?.cycleInstanceId ?? null,
     });
 
     let assistantText = turn.text;
@@ -1026,6 +1054,53 @@ export async function orchestrateProjectAssistantTurn(input: {
         coherentEarly.conversationGuidance,
       );
     }
+
+    // Pilot transcript + Cycle Journal — fail-closed locally; never blocks reply.
+    const activeCycleIdForJournal =
+      input.studioCognitiveContext?.activeCycle?.cycleInstanceId?.trim() ||
+      null;
+    if (!input.simulateMemoryBUnavailable) {
+      try {
+        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
+        const session = new ProductSqliteSession({
+          projectId: project.projectId,
+          dbPath,
+          sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
+        });
+        try {
+          const userTurn = appendPilotTranscriptTurn(session, {
+            role: "user",
+            content,
+            logicalTurnId,
+            cycleInstanceId: activeCycleIdForJournal,
+          });
+          const assistantTurn = appendPilotTranscriptTurn(session, {
+            role: "assistant",
+            content: assistantText,
+            logicalTurnId,
+            cycleInstanceId: activeCycleIdForJournal,
+          });
+          if (
+            activeCycleIdForJournal &&
+            logicalTurnId &&
+            coherentEarly?.journalDelta
+          ) {
+            materializeCycleJournalDelta({
+              session,
+              cycleInstanceId: activeCycleIdForJournal,
+              logicalTurnId,
+              delta: coherentEarly.journalDelta,
+              boundSourceTurnIds: [userTurn.turnId, assistantTurn.turnId],
+            });
+          }
+        } finally {
+          session.close();
+        }
+      } catch {
+        /* Journal/transcript persistence must not block conversational reply. */
+      }
+    }
+
     const lrMaterializeNotice =
       lifecycleRecommendationMaterializeFailurePiloteNotice({
         recommendationAttempted:

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 208cd8a6..d07acc73 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -40,6 +40,10 @@ import {
   normalizeNoraProductTurnStructuredOutput,
 } from "./noraProductTurnOutputType";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
+import {
+  createCycleJournalAgentsTools,
+  type CycleJournalToolContext,
+} from "./cycleJournalAgentsTools";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import {
   createNoraTurnBudget,
@@ -150,6 +154,11 @@ export type RunNoraAgentsTurnInput = {
    * When set, finalOutput may be a structured object (candidate data only).
    */
   outputType?: AgentOutputType;
+  /**
+   * CYCLE JOURNAL — same-turn READ-ONLY tools bound to Product session + cycle.
+   * Never Truth C. Optional; omitted when no active cycle / session.
+   */
+  cycleJournalTools?: CycleJournalToolContext | null;
 };
 
 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -482,7 +491,20 @@ export async function runNoraAgentsTurn(
   const hostedTool = enableHostedWebSearch
     ? createNoraHostedWebSearchTool(input.hostedWebSearchToolOptions)
     : null;
-  const tools = hostedTool ? [...sfiaTools, hostedTool] : sfiaTools;
+  const journalTools =
+    input.cycleJournalTools &&
+    input.cycleJournalTools.cycleInstanceId.trim() &&
+    enableTools
+      ? createCycleJournalAgentsTools({
+          ...input.cycleJournalTools,
+          budget,
+        })
+      : [];
+  const tools = [
+    ...sfiaTools,
+    ...journalTools,
+    ...(hostedTool ? [hostedTool] : []),
+  ];
 
   const agent = new Agent({
     name: "NoraProjectAssistant",
@@ -615,6 +637,7 @@ export async function runNoraAgentsTurn(
                 lifecycleRecommendation: coherent.lifecycleRecommendation,
                 activeCycleWork: coherent.activeCycleWork ?? null,
                 conversationGuidance: coherent.conversationGuidance,
+                journalDelta: coherent.journalDelta ?? null,
               };
             }
           }

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index ac09a67f..82649cfc 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -212,6 +212,11 @@ export type RunNoraCognitiveTurnInput = {
    * Threaded identically on Memory-B available and unavailable paths.
    */
   outputType?: import("@openai/agents").AgentOutputType;
+  /**
+   * CYCLE JOURNAL — active cycle for same-turn Journal tools (READ-ONLY).
+   * Bound to ProductSqliteSession from Memory B probe when available.
+   */
+  cycleJournalCycleInstanceId?: string | null;
 };
 
 /**
@@ -751,6 +756,7 @@ export async function runNoraCognitiveTurn(
             }
           : undefined,
       outputType: input.outputType,
+      cycleJournalTools: null,
     });
     const observations = [
       ...(input.sourceObservationFacts ?? []),
@@ -917,6 +923,15 @@ export async function runNoraCognitiveTurn(
             }
           : undefined,
       outputType: input.outputType,
+      cycleJournalTools:
+        probe.session &&
+        typeof input.cycleJournalCycleInstanceId === "string" &&
+        input.cycleJournalCycleInstanceId.trim()
+          ? {
+              session: probe.session,
+              cycleInstanceId: input.cycleJournalCycleInstanceId.trim(),
+            }
+          : null,
     });
     const observations = [
       ...(input.sourceObservationFacts ?? []),

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index cbdde04d..d1e13af3 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -140,6 +140,16 @@ export function toolDefinitionsFromModelRequest(
     }
     const name = String(t.name ?? "");
     if (!name) continue;
+    // CYCLE JOURNAL — Agents-local READ-ONLY tools on the same Runner.
+    // Executed by Agents SDK tool.invoke, not via ConversationProvider.completeRound.
+    // Skip from Fake/provider ToolDefinition projection (same pattern as hosted web_search).
+    if (
+      name === "cycle_journal_search" ||
+      name === "cycle_journal_get_entry" ||
+      name === "cycle_journal_get_sources"
+    ) {
+      continue;
+    }
     const def = byName.get(name);
     if (!def) {
       throw new Error(`NORA_PROVIDER_MODEL_UNKNOWN_TOOL:${name}`);
@@ -208,6 +218,7 @@ export function coercePlainTextToProductTurnJson(text: string): string {
         preCycleRoutingAssessment: o.preCycleRoutingAssessment,
         activeCycleWork: o.activeCycleWork ?? null,
         conversationGuidance: o.conversationGuidance ?? null,
+        journalDelta: o.journalDelta ?? null,
       });
       if (coherent) {
         return JSON.stringify({
@@ -216,6 +227,7 @@ export function coercePlainTextToProductTurnJson(text: string): string {
           lifecycleRecommendation: coherent.lifecycleRecommendation,
           activeCycleWork: coherent.activeCycleWork ?? null,
           conversationGuidance: coherent.conversationGuidance,
+          journalDelta: coherent.journalDelta ?? null,
         });
       }
       return buildFailClosedProductTurnJson(String(o.narrative));

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index eb15e095..c28b7505 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -4,6 +4,7 @@ import { useEffect, useRef, useState, useTransition } from "react";
 import {
   projectAssistantConfirmAndExecuteF3FixtureAction,
   projectAssistantConfirmAndExecuteResolvedM3Action,
+  projectAssistantConversationContinuityAction,
   projectAssistantDecideAction,
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareResolvedM3Action,
@@ -34,10 +35,12 @@ import {
 import { lifecycleRecommendationMaterializeFailurePiloteNotice } from "@/features/project-assistant/lifecycleRecommendationPiloteNotice";
 import { createTurnRetryKey } from "@/features/project-assistant/turnRetryKey";
 import {
+  normalizeProductTurnHistory,
   preparePendingTurnRetryEnvelope,
   type PendingTurnRetryEnvelope,
 } from "@/features/project-assistant/turnPayloadCanonical";
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
+import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";
 
 export type ProductMessage = {
   id: string;
@@ -45,6 +48,12 @@ export type ProductMessage = {
   content: string;
 };
 
+export type TranscriptAvailability =
+  | "available"
+  | "empty"
+  | "unavailable"
+  | "pending";
+
 export type ProductConversationUiState =
   | "INITIAL"
   | "READY"
@@ -57,6 +66,8 @@ export type ProductConversationUiState =
 
 export type UseProductConversationInput = {
   projectId: string;
+  /** Active cycle for Journal isolation (null → empty journal). */
+  activeCycleInstanceId?: string | null;
   /** Fired after a successful durable Product mutation (not process-local). */
   onDurableFactsChanged?: () => void;
   /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for History. */
@@ -95,6 +106,7 @@ function modeFromResult(result: {
  */
 export function useProductConversation({
   projectId,
+  activeCycleInstanceId = null,
   onDurableFactsChanged,
   onDurableEvidenceOutcomeChange,
 }: UseProductConversationInput) {
@@ -126,6 +138,18 @@ export function useProductConversation({
   const [durableRehydrateError, setDurableRehydrateError] = useState<
     string | null
   >(null);
+  const [transcriptAvailability, setTranscriptAvailability] =
+    useState<TranscriptAvailability>("pending");
+  const [journalEntries, setJournalEntries] = useState<JournalSurfaceEntry[]>(
+    [],
+  );
+  const [journalCycleInstanceId, setJournalCycleInstanceId] = useState<
+    string | null
+  >(null);
+  const [selectedJournalEntryId, setSelectedJournalEntryId] = useState<
+    string | null
+  >(null);
+  const [focusTurnId, setFocusTurnId] = useState<string | null>(null);
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   /** D-GF-ACW-02 — last server-issued logical turn; re-present only on failed retry. */
@@ -186,6 +210,38 @@ export function useProductConversation({
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
   }, []);
 
+  useEffect(() => {
+    let cancelled = false;
+    setTranscriptAvailability("pending");
+    void projectAssistantConversationContinuityAction({
+      projectId,
+      cycleInstanceId: activeCycleInstanceId,
+    }).then((result) => {
+      if (cancelled) return;
+      if (!result.ok) {
+        setTranscriptAvailability("unavailable");
+        setJournalEntries([]);
+        setJournalCycleInstanceId(null);
+        return;
+      }
+      setTranscriptAvailability(result.transcriptAvailability);
+      if (result.messages.length > 0) {
+        setMessages(
+          result.messages.map((m) => ({
+            id: m.id,
+            role: m.role,
+            content: m.content,
+          })),
+        );
+      }
+      setJournalCycleInstanceId(result.journal.cycleInstanceId);
+      setJournalEntries(result.journal.entries);
+    });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId, activeCycleInstanceId]);
+
   useEffect(() => {
     let cancelled = false;
     applyDurableEvidenceOutcome(null);
@@ -262,12 +318,54 @@ export function useProductConversation({
     activeProposal?.morrisGateRequired === true &&
     activeProposal.status === "DECISION_REQUIRED";
 
-  function historyForRequest(): AssistantHistoryMessage[] {
+  async function refreshConversationContinuity() {
+    const result = await projectAssistantConversationContinuityAction({
+      projectId,
+      cycleInstanceId: activeCycleInstanceId,
+    });
+    if (!result.ok) {
+      setTranscriptAvailability("unavailable");
+      return;
+    }
+    setTranscriptAvailability(result.transcriptAvailability);
+    setJournalCycleInstanceId(result.journal.cycleInstanceId);
+    setJournalEntries(result.journal.entries);
+  }
+
+  function focusJournalExchanges(entry: JournalSurfaceEntry) {
+    setSelectedJournalEntryId(entry.journalEntryId);
+  }
+
+  function focusTranscriptTurn(turnId: string) {
+    const id = turnId.trim();
+    if (!id) return;
+    setFocusTurnId(id);
+  }
+
+  function clearFocusTurn() {
+    setFocusTurnId(null);
+  }
+
+  /** Full visible transcript roles for request shaping — not yet bounded. */
+  function visibleTranscriptForRequest(): AssistantHistoryMessage[] {
     return messages
       .filter((m) => m.role === "user" || m.role === "assistant")
       .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
   }
 
+  /**
+   * CR-CJ-01 — providerRecentHistory only.
+   * Visible transcript may be long; model receives a bounded recent window.
+   * Server re-applies the same bound (hostile/old clients cannot inject 500 msgs).
+   */
+  function providerRecentHistory(): AssistantHistoryMessage[] {
+    return normalizeProductTurnHistory(visibleTranscriptForRequest());
+  }
+
+  function historyForRequest(): AssistantHistoryMessage[] {
+    return providerRecentHistory();
+  }
+
   function sendMessage(
     contentOverride?: string,
     options?: {
@@ -426,6 +524,7 @@ export function useProductConversation({
         setActiveProposal(null);
       }
       setUiState("ANSWERED");
+      void refreshConversationContinuity();
     });
   }
 
@@ -715,6 +814,16 @@ export function useProductConversation({
     f3Execute,
     durableEvidenceOutcome,
     durableRehydrateError,
+    transcriptAvailability,
+    journalEntries,
+    journalCycleInstanceId,
+    selectedJournalEntryId,
+    setSelectedJournalEntryId,
+    focusTurnId,
+    focusJournalExchanges,
+    focusTranscriptTurn,
+    clearFocusTurn,
+    refreshConversationContinuity,
     busy,
     blocked,
     canSend,

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 7e97d515..a3848221 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -2,6 +2,9 @@
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-4);
+  max-width: var(--pm6-content-max-workspace);
+  margin-inline: auto;
+  width: 100%;
 }
 
 .loading {
@@ -69,7 +72,7 @@
   color: var(--pm6-muted-strong);
 }
 
-/* ---------- layout ---------- */
+/* ---------- layout — Option A: Journal | Conversation | Pilotage ---------- */
 
 .layout {
   display: grid;
@@ -78,6 +81,11 @@
   align-items: start;
 }
 
+.journalColumn {
+  display: none;
+  min-width: 0;
+}
+
 .main {
   display: flex;
   flex-direction: column;
@@ -95,6 +103,31 @@
   min-width: 0;
 }
 
+/* Desktop large: three zones — Journal rail + dominant conversation + pilotage */
+@media (min-width: 1200px) {
+  .layout {
+    grid-template-columns:
+      var(--pm6-journal-width)
+      minmax(0, 1fr)
+      var(--pm6-lps-width);
+  }
+
+  .journalColumn {
+    display: block;
+    position: sticky;
+    top: 88px;
+  }
+}
+
+@media (min-width: 1400px) {
+  .layout {
+    grid-template-columns:
+      var(--pm6-journal-width)
+      minmax(0, 1fr)
+      var(--pm6-lps-width-wide);
+  }
+}
+
 /* Above 1024px the project state is always alongside the conversation. */
 .lpsClosed,
 .lpsOpen {
@@ -173,17 +206,27 @@
 
 @media (min-width: 1400px) {
   .layout {
-    grid-template-columns: minmax(0, 1fr) var(--pm6-lps-width-wide);
+    grid-template-columns:
+      var(--pm6-journal-width)
+      minmax(0, 1fr)
+      var(--pm6-lps-width-wide);
   }
 }
 
-/* ---------- <=1024: stack conversation then État/Trajectoire (H-01) ---------- */
+/* ---------- <1200: Journal always accessible (stack); conversation dominant ---------- */
+/* CR-CJ-05 — no dead zone between 1025–1199 (was hidden until 1200). */
 
-@media (max-width: 1024px) {
+@media (max-width: 1199px) {
   .layout {
     grid-template-columns: minmax(0, 1fr);
   }
 
+  .journalColumn {
+    display: block;
+    position: static;
+    order: -1;
+  }
+
   .lpsToggle {
     display: none;
   }

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index a2eaab89..0bd8ffe9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -7,6 +7,7 @@ import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features
 import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import { useProductConversation } from "./hooks/useProductConversation";
 import { ConversationSurface } from "./surfaces/ConversationSurface";
+import { JournalSurface } from "./surfaces/JournalSurface";
 import { HistorySurface } from "./surfaces/HistorySurface";
 import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
@@ -27,6 +28,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
+  const [journalCollapsed, setJournalCollapsed] = useState(false);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
   const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
@@ -87,6 +89,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
 
   const controller = useProductConversation({
     projectId,
+    activeCycleInstanceId: result?.ok
+      ? result.livingState.activeCycleInstanceId
+      : null,
     onDurableFactsChanged: notifyDurableFactsChanged,
     onDurableEvidenceOutcomeChange: setDurableOutcome,
   });
@@ -155,6 +160,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       {showRecovery ? (
         <RecoverySurface
           suppressGenericIntentionCta={suppressGenericIntentionCta}
+          transcriptAvailability={controller.transcriptAvailability}
           onResumeDurable={() => {
             setLpsOpen(true);
             focusConversation();
@@ -165,11 +171,27 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
         />
       ) : (
         <p className={styles.durabilityHint} data-testid="project-durability-hint">
-          {w1RestartHonestyMessage()}
+          {w1RestartHonestyMessage({
+            transcriptAvailability: controller.transcriptAvailability,
+          })}
         </p>
       )}
 
-      <div className={styles.layout}>
+      <div className={styles.layout} data-testid="project-workspace-layout">
+        <div className={styles.journalColumn} data-testid="project-journal-column">
+          <JournalSurface
+            entries={controller.journalEntries}
+            cycleInstanceId={controller.journalCycleInstanceId}
+            selectedEntryId={controller.selectedJournalEntryId}
+            onSelectEntry={controller.setSelectedJournalEntryId}
+            onViewExchanges={controller.focusJournalExchanges}
+            onFocusTurn={controller.focusTranscriptTurn}
+            transcriptMessages={controller.messages}
+            collapsed={journalCollapsed}
+            onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
+          />
+        </div>
+
         <div className={styles.main} ref={conversationRef}>
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx`

(voir contenu complet §4 — fichier créé)

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts`

(voir contenu complet §4 — fichier créé)

### `projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
index 7b4dca3c..a6eb227b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
@@ -211,15 +211,80 @@ describe("F1 project assistant orchestration", () => {
     expect(result.message).toMatch(/Aucun basculement silencieux/i);
   });
 
-  it("does not import or require OPS1 session APIs", async () => {
-    setConversationProviderForTests(new FakeConversationProvider());
-    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
-    const result = await orchestrateProjectAssistantTurn({
-      projectId: "prj:f1-demo",
-      content: "Ping",
-      sessionDbPath,
-    });
-    expect(result.ok).toBe(true);
-    expect(getProjectRuntimeActionMock).toHaveBeenCalled();
+  it("CR-CJ-01 — server-bounds hostile 150-message history before cognitive envelope", async () => {
+    const cognitive = await import(
+      "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn"
+    );
+    const {
+      PRODUCT_TURN_MAX_HISTORY_MESSAGES,
+      PRODUCT_TURN_MAX_HISTORY_CHARS,
+    } = await import("@/features/project-assistant/turnPayloadCanonical");
+
+    const OLD = "HOSTILE_OLD_MARKER_MUST_NOT_REACH_ENVELOPE";
+    const hostileHistory = Array.from({ length: 150 }, (_, i) => ({
+      role: (i % 2 === 0 ? "user" : "assistant") as "user" | "assistant",
+      content: i === 0 ? OLD : `hostile-${i}`,
+    }));
+
+    const captured: { messages: Array<{ role: string; content: string }> } = {
+      messages: [],
+    };
+    const spy = vi
+      .spyOn(cognitive, "runNoraCognitiveTurn")
+      .mockImplementation(async (input) => {
+        captured.messages = input.messages.map((m) => ({
+          role: m.role,
+          content: m.content,
+        }));
+        return {
+          text: "TEST/FAKE · NON LIVE bounded",
+          usage: {
+            inputTokens: null,
+            outputTokens: null,
+            totalTokens: null,
+            model: null,
+            providerResponseId: null,
+          },
+          toolRounds: 0,
+          toolCalls: 0,
+          limitReached: false,
+          cognitiveRuntime: "agents",
+          sessionId: "sess-test",
+          memoryBAvailability: "unavailable",
+          memoryBCompactionState: "none",
+          memoryBCompactionDetails: null,
+        } as unknown as Awaited<
+          ReturnType<typeof cognitive.runNoraCognitiveTurn>
+        >;
+      });
+
+    try {
+      const result = await orchestrateProjectAssistantTurn({
+        projectId: "prj:f1-demo",
+        content: "nouveau tour après rehydrate",
+        history: hostileHistory,
+        sessionDbPath,
+        provider: new FakeConversationProvider(),
+      });
+      expect(result.ok).toBe(true);
+      expect(spy).toHaveBeenCalled();
+      const msgs = captured.messages;
+      expect(msgs.length).toBeGreaterThan(0);
+      const nonSystem = msgs.filter(
+        (m) => m.role === "user" || m.role === "assistant",
+      );
+      // bounded recent history + current user message
+      expect(nonSystem.length).toBeLessThanOrEqual(
+        PRODUCT_TURN_MAX_HISTORY_MESSAGES + 1,
+      );
+      const prior = nonSystem.slice(0, -1);
+      const priorChars = prior.reduce((s, m) => s + m.content.length, 0);
+      expect(prior.length).toBeLessThanOrEqual(PRODUCT_TURN_MAX_HISTORY_MESSAGES);
+      expect(priorChars).toBeLessThanOrEqual(PRODUCT_TURN_MAX_HISTORY_CHARS);
+      expect(msgs.some((m) => m.content.includes(OLD))).toBe(false);
+      expect(hostileHistory).toHaveLength(150);
+    } finally {
+      spy.mockRestore();
+    }
   });
 });

```

## 6. Autres fichiers modifiés (mocks / continuity)

Mocks UI/tests: `projectAssistantConversationContinuityAction` stubs; session table allowlists; ProductShell / tokens / ConversationSurface / RecoverySurface / actions continuity / buildProjectSystemPrompt / noraProductTurnOutputType / productSqliteSession schema / index exports / mw1S01Observe — tous dans le candidat Journal, pas hors-scope doctrine.

Diffs complets disponibles via `git diff` sur working tree (non commités).

---

## 7. Preuves CR par CR

### CR-CJ-01 — CLOSED
- Policy: `PRODUCT_TURN_MAX_HISTORY_MESSAGES=12`, `PRODUCT_TURN_MAX_HISTORY_CHARS=8000`
- Client: `providerRecentHistory()` via `normalizeProductTurnHistory`
- Server: `orchestrateTurn` appelle `normalizeProductTurnHistory(input.history)` avant envelope
- Test `cycleJournalContinuity` — 160 msgs, OLD marker absent
- Test `orchestrateTurn` — 150 hostile msgs spy `runNoraCognitiveTurn`; OLD absent; bounds respectés
- Transcript UI reste complet (messages React non tronqués)

### CR-CJ-02 — CLOSED
- `createCycleJournalAgentsTools` attaché dans `runNoraAgentsTurn` quand cycle+session+enableTools
- `cycleJournalCycleInstanceId` threadé orchestrate → cognitive → agents
- Tools: search / get_entry / get_sources READ-ONLY, cycle-bound, budget slots
- Fake path: skip CT unknown tool → suite journey integrity PASS
- Test invoke Agents `RunContext` + search recovers subject

### CR-CJ-03 — CLOSED
- Compact working set max 24
- `searchCycleJournalIndex` all active subjects
- Prompt: BEFORE CREATE, call `cycle_journal_search`
- Test: 40 subjects; #1 hors compact; search+UPDATE same `journalEntryId`; no thematic duplication

### CR-CJ-04 — CLOSED
- Expanded exchange list; each ref button → `onFocusTurn` → `pilot-turn-*`
- UI test: 6 non-contiguous refs listed; click intermediate/final

### CR-CJ-05 — CLOSED
- CSS `@media (max-width: 1199px)` journal `display:block; order:-1`
- Runtime CDP:
  - 1440: journalDisplay=block, Option A
  - 1100: journalDisplay=block, order=-1, railVisible=true
  - 390: threeCol=false, journal=true
- Screenshots:
  - `.tmp-sfia-review/cycle-journal-continuity-proof/cr-cj-05-desktop-1440.png`
  - `.tmp-sfia-review/cycle-journal-continuity-proof/cr-cj-05-midband-1100.png`
  - `.tmp-sfia-review/cycle-journal-continuity-proof/cr-cj-05-mobile-390.png`

### CR-CJ-06 — CLOSED
- `filterValidSourceTurnRefs`: drop phantom + cross-cycle
- MERGE: reject self, require active same-cycle related, dedupe
- ARCHIVE: active→archived only
- UPDATE: active only
- Adversarial tests PASS; ledger idempotence preserved

---

## 8. Validations globales

- Targeted CR tests: PASS
- typecheck: PASS
- lint: PASS (No ESLint warnings or errors)
- Full Studio suite: **407 passed | 17 skipped** (4565 tests passed / 137 skipped)
- git diff --check: clean

---

## 9. Fake / Real

| Claim | Status |
|-------|--------|
| bounded model context proven deterministically | YES |
| targeted Journal retrieval product seam implemented/tested | YES |
| >24 subject identity recovery proven deterministically | YES |
| linked exchanges navigation proven | YES (UI test) |
| responsive accessibility proven local runtime | YES |
| data integrity guards proven | YES |
| Journal semantic quality REAL proven | NO |
| READY FOR REAL | NO |
| runtime v3 ADOPTED | NO |

---

## 10. Réserves / dette

- Qualité sémantique Journal sous provider REAL: NOT PROVEN (gate Morris distinct)
- Screenshots runtime: Journal empty (0 sujets) sur KidPlan local — accessibilité layout prouvée; navigation multi-échanges prouvée en jsdom UI test
- ProjectAssistantPanel legacy boundé aussi (défense en profondeur)
- Aucune virtualisation transcript (non requise)

---

## 11. Décisions Morris

- GO CORRECTION SAME-MACRO: CONSUMED
- GO Figma N/A: CONSUMED (lot initial)
- Pas de commit/push/PR projet
- Handoff L3 borné: requis ci-dessous

---

## 12. Handoff publish (rempli après push)

- branch: `sfia/review-handoff`
- file: `sfia-review-handoff/latest-chatgpt-review.md`
- commit: `5f512a29d6cbc7b6de51d727bfd918f972ef0c0c`
- remote SHA: `5f512a29d6cbc7b6de51d727bfd918f972ef0c0c`
- verified: remote head == local handoff commit; mono-fichier; cycle/branche/HEAD cohérents

---

## 13. Instruction ChatGPT

Avant réponse à Morris: lire remote `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` et vérifier cycle/branche/HEAD/CR/preuves/screenshots/Fake-Real/verdict/SHA.

Verdict pack: **READY FOR PR READINESS**
