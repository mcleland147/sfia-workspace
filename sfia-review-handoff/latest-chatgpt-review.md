# SFIA Studio Review Pack — CYCLE JOURNAL & PILOT CONVERSATION CONTINUITY

## Meta
- **Timestamp republish**: 2026-09-24 16:00:00 CEST (+0200)
- **Cycle**: CYCLE JOURNAL & PILOT CONVERSATION CONTINUITY
- **Profil SFIA**: Critical
- **Type**: 8 — Delivery / implémentation · Typologie EVOL
- **Milestone**: Post-#515 manual product usage — long-cycle pilotability / conversation continuity completion
- **Objectif**: Transcript Pilote restart-visible + Journal du cycle (CREATE/UPDATE/MERGE/SPLIT/ARCHIVE) + Option A desktop (Journal gauche / conversation / pilotage) + contexte Journal compact Nora same-turn — Journal ≠ Truth C/HD/Evidence/Recommendation
- **Republish reason**: contenu intégral des 7 fichiers créés + diffs exploitables des fichiers modifiés significatifs (reviewability ChatGPT)

## Décision Morris consommée
- GO construction de ce slice : **CONSUMED**
- Arbitrage UX sans Figma/Penpot · Option A desktop : **CONSUMED**
- Push projet / PR / merge : **NOT AUTHORIZED**
- REAL provider campaign : **NOT AUTHORIZED**
- Modification Build Doctrine / framing / baseline : **NOT AUTHORIZED**
- Republish handoff L3 (contenu exploitable) : **AUTHORIZED by this message**

## Local Git Truth Check
- workspace: `mcleland147/sfia-workspace`
- branche projet: `feat/sfia-studio-cycle-journal-continuity-01`
- HEAD / origin/main: `aad8bc8456b3a64d37be4e12f969f09da5467c09` (alignés)
- staged: aucun
- working tree: modifications locales non commitées (aucun commit projet)
- handoff précédent: `e103ea5d36901de379b234999706688f4ffa841a` (sera remplacé par ce republish)

## Sources consultées (obligatoires)
1. `convergence/sfia-studio-convergence-build-doctrine.md` (READ)
2. `convergence/sfia-studio-convergence-roadmap.md` (READ ONLY — non modifié)
3. `product-completion/01-product-completion-cadrage.md`
4. `product-completion/ux-product-experience/01-experience-architecture.md`
5. `product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md`
6–9. framing 30/32/33/35 (READ)
10. `nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`
11. CKC delivery (guidance only)
12–13. method + cycle-execution template (process)
15–26. code paths ProductSqliteSession, canonicalConversationSession, memoryB, noraProductTurnOutputType, orchestrateTurn, useProductConversation, ConversationSurface, ProjectWorkspacePage, HistorySurface, RecoverySurface

## Discovery & reuse map
| Actif | Classification | Rôle |
|---|---|---|
| ProductSqliteSession | KEEP/ADAPT | Session SQLite ; tables transcript+journal ajoutées ; ≠ Truth C |
| canonicalConversationSession | KEEP | sessionKey `f1-default` |
| Memory B / compaction | KEEP | compaction session_items inchangée ; transcript append-only séparé |
| Agents SDK structured Product turn | KEEP/ADAPT | `journalDelta` same-turn nullable required |
| ConversationSurface / useProductConversation | ADAPT | rehydrate + focus turn |
| ProjectWorkspacePage + CSS | ADAPT | Option A 3 zones |
| HistorySurface | KEEP | historique factuel distinct du Journal |
| LPS / Epistemic / HD / Evidence | KEEP | aucune mutation depuis Journal |
| Nouveau store Journal | COMPLETE | `cycleJournalStore` / types / prompt |

**Seams critiques**
- Memory B compaction peut supprimer `session_items` → transcript Pilote-facing dans `pilot_transcript_turns` (append-only, retry-safe).
- Journal matérialisé via ledger `cycle_journal_mutation_ledger` (logical_turn_id + op_index).
- Invalid `journalDelta` → null (fail-closed Journal) sans bloquer narrative.

## OpenAI Capability Fit Check (R22)
- **Besoin**: delta Journal structuré au même rythme que le Product turn.
- **État fournisseur**: Agents SDK + outputType JSON schema strict déjà en place.
- **Disposition**: KEEP Agents · ADAPT Product turn (`journalDelta`) · COMBINE primitive OpenAI + métier SFIA · KEEP Session/Memory B · BUILD Journal persistence/UI · REJECT second summarizer / second model call.
- **Verdict R22**: same-turn **possible et retenu** — aucun STOP Morris pour second appel.

## Architecture delta retenue
1. Tables Session: `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`.
2. Product turn schema + normalize passthrough `journalDelta`.
3. `orchestrateTurn`: inject compact Journal prompt ; post-turn append transcript + materialize delta (try/catch fail-closed).
4. Server action `projectAssistantConversationContinuityAction` pour rehydrate UI.
5. `JournalSurface` + layout Option A (≥1200px: 280 | 1fr | 380–400).
6. Recovery wording conditionné par `transcriptAvailability`.

## Invariants
- Transcript = trace Pilote-facing durable (≠ Memory B compactée seule).
- Journal = projection sémantique cycle-aware ; JAMAIS Truth C / HD / Evidence / Recommendation authority / LPS fact.
- Retry: ledger + transcript append-once par (logicalTurnId, role).
- Cycle isolation: queries filtrées par `cycleInstanceId`.
- Source refs: `sourceTurnRefs` ordonnées/dédupliquées ; DOM `pilot-turn-{{turnId}}`.
- Invalid journalDelta n'empêche pas la réponse conversationnelle.

## Contrat visuel (pré-code, runtime existant)
- Viewport desktop cible observé: 1440×900
- Content max workspace: 1680px (`--pm6-content-max-workspace`)
- Journal cible: 280px (`--pm6-journal-width`)
- Pilotage: 380–400px
- Conversation: `minmax(0,1fr)` dominante
- Responsive: 3 colonnes ≥1200px ; <1200 Journal non forcé en 3 colonnes (stack / hide rail selon media)

## git status --short (app)
```
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
 M projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalPrompt.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
```

## git diff --name-status (app tracked)
```
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
M	projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
```

## git diff --stat (app tracked)
```
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
 .../studio-projects/projectPrincipalAmend.test.tsx |   6 +
 .../pre-m6-product-ui/ProductShell.module.css      |   8 ++
 .../features/pre-m6-product-ui/ProductShell.tsx    |  16 ++-
 .../ProjectWorkspacePage.module.css                |  46 +++++++-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  24 +++-
 .../hooks/useProductConversation.ts                |  89 ++++++++++++++
 .../features/pre-m6-product-ui/product-tokens.css  |   6 +-
 .../surfaces/ConversationSurface.tsx               |  17 ++-
 .../pre-m6-product-ui/surfaces/RecoverySurface.tsx |  23 +++-
 .../app/features/project-assistant/actions.ts      |  99 ++++++++++++++++
 .../project-assistant/buildProjectSystemPrompt.ts  |  22 +++-
 .../features/project-assistant/orchestrateTurn.ts  |  73 ++++++++++++
 .../project-assistant/presentationLabels.ts        |  19 ++-
 .../app/lib/nora-cognitive-runtime/index.ts        |  20 ++++
 .../noraProductTurnOutputType.ts                   | 129 +++++++++++++++++++++
 .../nora-cognitive-runtime/productSqliteSession.ts |  58 +++++++++
 .../nora-cognitive-runtime/providerAgentsModel.ts  |   2 +
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   1 +
 .../sfia-studio/app/lib/nora-eval/mw1S01Observe.ts |   3 +
 31 files changed, 704 insertions(+), 20 deletions(-)
```

## Inventaire 7 fichiers créés
1. `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts` (2276 bytes, 68 lines)
2. `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts` (17446 bytes, 556 lines)
3. `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalPrompt.ts` (3254 bytes, 100 lines)
4. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx` (5270 bytes, 161 lines)
5. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css` (3147 bytes, 179 lines)
6. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts` (17652 bytes, 599 lines)
7. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx` (2317 bytes, 69 lines)

---

# CONTENU INTÉGRAL — 7 FICHIERS CRÉÉS

## CREATED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts`

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

## CREATED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts`

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
 * Apply structured journalDelta idempotently for a logical turn.
 * Fail-closed per-op: invalid op skipped; ledger prevents duplicate apply.
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
  entryIds: string[];
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
      entryIds: [],
      code: "JOURNAL_CONTEXT_MISSING",
    };
  }
  if (!input.delta || !Array.isArray(input.delta.operations)) {
    return {
      ok: true,
      applied: 0,
      skippedDuplicate: 0,
      entryIds: [],
      code: null,
    };
  }
  const db = session.getSqlite();
  const now = input.nowIso ?? new Date().toISOString();
  let applied = 0;
  let skippedDuplicate = 0;
  const entryIds: string[] = [];

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

      const boundRefs = mergeUniqueRefs(
        op.sourceTurnRefs ?? [],
        input.boundSourceTurnIds,
      );

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
        if (!journalEntryId) continue;
        const cur = getCycleJournalEntry(session, journalEntryId);
        if (!cur || cur.cycleInstanceId !== cycle || cur.status !== "active") {
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
        if (!journalEntryId) continue;
        const cur = getCycleJournalEntry(session, journalEntryId);
        if (!cur || cur.cycleInstanceId !== cycle) continue;
        db.prepare(
          `UPDATE cycle_journal_entries
           SET status = 'archived', updated_at = ?, last_logical_turn_id = ?
           WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
        ).run(now, ltu, session.projectId, session.sessionKey, journalEntryId);
      } else if (op.op === "MERGE") {
        const related = (op.relatedEntryIds ?? [])
          .map((x: string) => x.trim())
          .filter(Boolean);
        if (!journalEntryId || related.length === 0) continue;
        const target = getCycleJournalEntry(session, journalEntryId);
        if (!target || target.cycleInstanceId !== cycle || target.status !== "active") {
          continue;
        }
        let refs = [...target.sourceTurnRefs];
        const parents = [...target.lineageParentIds];
        for (const rid of related) {
          const src = getCycleJournalEntry(session, rid);
          if (!src || src.cycleInstanceId !== cycle) continue;
          refs = mergeUniqueRefs(refs, src.sourceTurnRefs);
          parents.push(rid);
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
        if (!journalEntryId) continue;
        const cur = getCycleJournalEntry(session, journalEntryId);
        if (!cur || cur.cycleInstanceId !== cycle || cur.status !== "active") {
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
    entryIds,
    code: null,
  };
}

```

## CREATED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalPrompt.ts`

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

## CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx`

```tsx
"use client";

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

export type JournalSurfaceProps = {
  entries: JournalSurfaceEntry[];
  cycleInstanceId: string | null;
  selectedEntryId: string | null;
  onSelectEntry: (entryId: string) => void;
  onViewExchanges: (entry: JournalSurfaceEntry) => void;
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
  collapsed = false,
  onToggleCollapsed,
}: JournalSurfaceProps) {
  const safeEntries = Array.isArray(entries) ? entries : [];
  const activeCount = safeEntries.filter((e) => e.status === "active").length;

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
                      onClick={() => onViewExchanges(entry)}
                    >
                      Voir les échanges
                    </button>
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

## CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css`

```css
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

```

## CREATED: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts`

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

```

## CREATED: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx`

```tsx
/** @vitest-environment jsdom */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    sourceTurnRefs: ["pt:a", "pt:b"],
    sourceTurnCount: 2,
  },
];

describe("JournalSurface UI", () => {
  it("renders journal entries and view exchanges action", async () => {
    const user = userEvent.setup();
    let viewed: string | null = null;
    let selected: string | null = null;
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
      />,
    );
    expect(screen.getByTestId("cycle-journal-rail")).toBeTruthy();
    expect(screen.getByText("Journal du cycle")).toBeTruthy();
    expect(screen.getByText("Périmètre")).toBeTruthy();
    await user.click(screen.getByTestId("cycle-journal-view-cje:1"));
    expect(viewed).toBe("cje:1");
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

---

# DIFFS EXPLOITABLES — FICHIERS MODIFIÉS SIGNIFICATIFS

Chaque bloc ci-dessous est le `git diff` intégral du fichier vs HEAD de la branche projet (base `aad8bc84…`).

## MODIFIED (significant): `projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
index b91bb299..98f7492e 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
@@ -51,6 +51,12 @@ export const PRODUCT_SESSION_ALLOWED_TABLES = [
   "session_items",
   "logical_product_turns",
   "logical_product_turn_retry_bindings",
+  /** Pilote-facing transcript — survives Memory B compaction. */
+  "pilot_transcript_turns",
+  /** Cycle Journal projection — NEVER Truth C / HD / Evidence. */
+  "cycle_journal_entries",
+  /** Idempotence ledger for journal mutations per logical turn. */
+  "cycle_journal_mutation_ledger",
 ] as const;
 
 /**
@@ -80,6 +86,7 @@ export class ProductSqliteSession implements Session {
       );
     `);
     this.ensureLogicalTurnSchema();
+    this.ensurePilotTranscriptAndJournalSchema();
   }
 
   /**
@@ -109,6 +116,57 @@ export class ProductSqliteSession implements Session {
     `);
   }
 
+  /**
+   * Pilot transcript + Cycle Journal — Session-adjacent, never Truth C.
+   * Compaction of session_items MUST NOT touch these tables.
+   */
+  ensurePilotTranscriptAndJournalSchema(): void {
+    this.db.exec(`
+      CREATE TABLE IF NOT EXISTS pilot_transcript_turns (
+        project_id TEXT NOT NULL,
+        session_key TEXT NOT NULL,
+        turn_id TEXT NOT NULL,
+        seq INTEGER NOT NULL,
+        role TEXT NOT NULL,
+        content TEXT NOT NULL,
+        created_at TEXT NOT NULL,
+        logical_turn_id TEXT,
+        cycle_instance_id TEXT,
+        PRIMARY KEY (project_id, session_key, turn_id)
+      );
+      CREATE UNIQUE INDEX IF NOT EXISTS pilot_transcript_seq_uq
+        ON pilot_transcript_turns(project_id, session_key, seq);
+      CREATE TABLE IF NOT EXISTS cycle_journal_entries (
+        project_id TEXT NOT NULL,
+        session_key TEXT NOT NULL,
+        journal_entry_id TEXT NOT NULL,
+        cycle_instance_id TEXT NOT NULL,
+        title TEXT NOT NULL,
+        current_summary TEXT NOT NULL,
+        status TEXT NOT NULL,
+        created_at TEXT NOT NULL,
+        updated_at TEXT NOT NULL,
+        source_turn_refs_json TEXT NOT NULL,
+        lineage_parent_ids_json TEXT NOT NULL,
+        superseded_by_id TEXT,
+        last_logical_turn_id TEXT,
+        PRIMARY KEY (project_id, session_key, journal_entry_id)
+      );
+      CREATE INDEX IF NOT EXISTS cycle_journal_cycle_idx
+        ON cycle_journal_entries(project_id, session_key, cycle_instance_id);
+      CREATE TABLE IF NOT EXISTS cycle_journal_mutation_ledger (
+        project_id TEXT NOT NULL,
+        session_key TEXT NOT NULL,
+        logical_turn_id TEXT NOT NULL,
+        op_index INTEGER NOT NULL,
+        op TEXT NOT NULL,
+        journal_entry_id TEXT NOT NULL,
+        created_at TEXT NOT NULL,
+        PRIMARY KEY (project_id, session_key, logical_turn_id, op_index)
+      );
+    `);
+  }
+
   getLogicalProductTurnRetryBinding(
     retryKey: string,
   ): LogicalProductTurnRetryBinding | null {

```

## MODIFIED (significant): `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index d771f5d3..21383736 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -252,8 +252,57 @@ export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
  * - optional Lifecycle Recommendation candidate (nullable)
  * - optional active-cycle work items (nullable; D-GF-ACW-01)
  * - conversationGuidance (required; ephemeral continuation; non-authoritative)
+ * - journalDelta (nullable; Cycle Journal projection — NEVER Truth C)
  * Same Agents Runner — one model call — no prose parsing.
  */
+export const NORA_JOURNAL_DELTA_OPERATION_SCHEMA = {
+  type: "object" as const,
+  additionalProperties: false as const,
+  required: [
+    "op",
+    "targetEntryId",
+    "title",
+    "currentSummary",
+    "sourceTurnRefs",
+    "relatedEntryIds",
+  ],
+  properties: {
+    op: {
+      type: "string" as const,
+      enum: ["CREATE", "UPDATE", "MERGE", "SPLIT", "ARCHIVE"] as const,
+    },
+    targetEntryId: {
+      anyOf: [{ type: "null" as const }, { type: "string" as const }],
+    },
+    title: {
+      anyOf: [{ type: "null" as const }, { type: "string" as const }],
+    },
+    currentSummary: {
+      anyOf: [{ type: "null" as const }, { type: "string" as const }],
+    },
+    sourceTurnRefs: {
+      type: "array" as const,
+      items: { type: "string" as const },
+    },
+    relatedEntryIds: {
+      type: "array" as const,
+      items: { type: "string" as const },
+    },
+  },
+};
+
+export const NORA_JOURNAL_DELTA_SCHEMA = {
+  type: "object" as const,
+  additionalProperties: false as const,
+  required: ["operations"],
+  properties: {
+    operations: {
+      type: "array" as const,
+      items: NORA_JOURNAL_DELTA_OPERATION_SCHEMA,
+    },
+  },
+};
+
 export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
   type: "json_schema" as const,
   name: "nora_product_turn_with_optional_lr",
@@ -267,6 +316,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       "lifecycleRecommendation",
       "activeCycleWork",
       "conversationGuidance",
+      "journalDelta",
     ],
     properties: {
       narrative: { type: "string" as const },
@@ -284,16 +334,34 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
         ],
       },
       conversationGuidance: CONVERSATION_GUIDANCE_SCHEMA,
+      journalDelta: {
+        anyOf: [{ type: "null" as const }, NORA_JOURNAL_DELTA_SCHEMA],
+      },
     },
   },
 };
 
+export type NoraJournalDeltaOperationStructured = {
+  op: "CREATE" | "UPDATE" | "MERGE" | "SPLIT" | "ARCHIVE";
+  targetEntryId: string | null;
+  title: string | null;
+  currentSummary: string | null;
+  sourceTurnRefs: string[];
+  relatedEntryIds: string[];
+};
+
+export type NoraJournalDeltaStructured = {
+  operations: NoraJournalDeltaOperationStructured[];
+};
+
 export type NoraProductTurnWithOptionalLr = {
   narrative: string;
   preCycleRoutingAssessment: PreCycleRoutingAssessment;
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   activeCycleWork: NoraActiveCycleWorkOutput | null;
   conversationGuidance: ConversationGuidance;
+  /** Cycle Journal delta — projection only; null when no journal mutation. */
+  journalDelta: NoraJournalDeltaStructured | null;
 };
 
 export function isPreCycleRoutingAssessment(
@@ -430,6 +498,11 @@ export type PreCycleRoutingBoundaryCoherenceResult = {
   activeCycleWork: NoraActiveCycleWorkOutput | null;
   /** Ephemeral conversational continuation (coherent with disposition). */
   conversationGuidance: ConversationGuidance;
+  /**
+   * Cycle Journal delta passthrough — projection only.
+   * Invalid / missing → null (fail-closed Journal; never blocks narrative).
+   */
+  journalDelta: NoraJournalDeltaStructured | null;
   /** True when a candidate LR was stripped by boundary coherence. */
   lifecycleRecommendationSuppressed: boolean;
   suppressReason: string | null;
@@ -672,12 +745,51 @@ export function composePilotFacingAssistantText(
  * activeCycleWork is preserved on all return paths (passthrough).
  * conversationGuidance: full-object fallback when incompatible (CR-NCI-01).
  */
+export function isNoraJournalDeltaOperationStructured(
+  value: unknown,
+): value is NoraJournalDeltaOperationStructured {
+  if (!value || typeof value !== "object") return false;
+  const o = value as Record<string, unknown>;
+  if (
+    o.op !== "CREATE" &&
+    o.op !== "UPDATE" &&
+    o.op !== "MERGE" &&
+    o.op !== "SPLIT" &&
+    o.op !== "ARCHIVE"
+  ) {
+    return false;
+  }
+  if (o.targetEntryId != null && typeof o.targetEntryId !== "string") {
+    return false;
+  }
+  if (o.title != null && typeof o.title !== "string") return false;
+  if (o.currentSummary != null && typeof o.currentSummary !== "string") {
+    return false;
+  }
+  if (!Array.isArray(o.sourceTurnRefs)) return false;
+  if (!o.sourceTurnRefs.every((x) => typeof x === "string")) return false;
+  if (!Array.isArray(o.relatedEntryIds)) return false;
+  if (!o.relatedEntryIds.every((x) => typeof x === "string")) return false;
+  return true;
+}
+
+export function isNoraJournalDeltaStructured(
+  value: unknown,
+): value is NoraJournalDeltaStructured {
+  if (!value || typeof value !== "object") return false;
+  const o = value as Record<string, unknown>;
+  if (!Array.isArray(o.operations)) return false;
+  return o.operations.every(isNoraJournalDeltaOperationStructured);
+}
+
 export function applyPreCycleRoutingBoundaryCoherence(input: {
   narrative: string;
   preCycleRoutingAssessment: PreCycleRoutingAssessment;
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   activeCycleWork?: NoraActiveCycleWorkOutput | null;
   conversationGuidance?: ConversationGuidance | null;
+  /** Invalid delta coerced to null — never fails the Product turn. */
+  journalDelta?: NoraJournalDeltaStructured | null;
   cognitiveStop?: boolean;
   /**
    * Server-derived from selectCurrentLifecycleRecommendations + applicability.
@@ -690,6 +802,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   );
   const candidate = input.lifecycleRecommendation;
   const activeCycleWork = input.activeCycleWork ?? null;
+  const journalDelta = input.journalDelta ?? null;
   const rawGuidance = parseConversationGuidanceOrFailClosed(
     input.conversationGuidance ?? null,
   );
@@ -703,6 +816,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       | "conversationGuidance"
       | "conversationGuidanceCoerced"
       | "conversationGuidanceCoerceReason"
+      | "journalDelta"
     >,
   ): PreCycleRoutingBoundaryCoherenceResult => {
     const guided = applyConversationGuidanceCoherence({
@@ -756,6 +870,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
 
     return {
       ...partial,
+      journalDelta,
       lifecycleRecommendation,
       lifecycleRecommendationSuppressed,
       suppressReason,
@@ -918,11 +1033,20 @@ export function normalizeNoraProductTurnStructuredOutput(
     activeCycleWork = o.activeCycleWork;
   }
 
+  // Journal fail-closed locally: invalid delta → null, turn still coherent.
+  let journalDelta: NoraJournalDeltaStructured | null = null;
+  if (o.journalDelta != null) {
+    journalDelta = isNoraJournalDeltaStructured(o.journalDelta)
+      ? o.journalDelta
+      : null;
+  }
+
   return applyPreCycleRoutingBoundaryCoherence({
     narrative: o.narrative,
     preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
     activeCycleWork,
+    journalDelta,
     conversationGuidance: parseConversationGuidanceOrFailClosed(
       o.conversationGuidance,
     ),
@@ -947,6 +1071,10 @@ export function isNoraProductTurnWithOptionalLr(
     return false;
   }
   if (!isConversationGuidance(o.conversationGuidance)) return false;
+  // Backward compat: missing journalDelta treated as null for fixtures.
+  if (o.journalDelta != null && !isNoraJournalDeltaStructured(o.journalDelta)) {
+    return false;
+  }
   if (o.lifecycleRecommendation === null) return true;
   return isNoraLifecycleRecommendationStructuredOutput(
     o.lifecycleRecommendation,
@@ -965,5 +1093,6 @@ export function buildFailClosedProductTurnJson(narrative: string): string {
     lifecycleRecommendation: null,
     activeCycleWork: null,
     conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
+    journalDelta: null,
   });
 }

```

## MODIFIED (significant): `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index cbdde04d..187c9fac 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -208,6 +208,7 @@ export function coercePlainTextToProductTurnJson(text: string): string {
         preCycleRoutingAssessment: o.preCycleRoutingAssessment,
         activeCycleWork: o.activeCycleWork ?? null,
         conversationGuidance: o.conversationGuidance ?? null,
+        journalDelta: o.journalDelta ?? null,
       });
       if (coherent) {
         return JSON.stringify({
@@ -216,6 +217,7 @@ export function coercePlainTextToProductTurnJson(text: string): string {
           lifecycleRecommendation: coherent.lifecycleRecommendation,
           activeCycleWork: coherent.activeCycleWork ?? null,
           conversationGuidance: coherent.conversationGuidance,
+          journalDelta: coherent.journalDelta ?? null,
         });
       }
       return buildFailClosedProductTurnJson(String(o.narrative));

```

## MODIFIED (significant): `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 208cd8a6..a8bd525f 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -615,6 +615,7 @@ export async function runNoraAgentsTurn(
                 lifecycleRecommendation: coherent.lifecycleRecommendation,
                 activeCycleWork: coherent.activeCycleWork ?? null,
                 conversationGuidance: coherent.conversationGuidance,
+                journalDelta: coherent.journalDelta ?? null,
               };
             }
           }

```

## MODIFIED (significant): `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 3515c084..6492f341 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -378,3 +378,23 @@ export {
   normalizeOpenAiHostedWebSearchObservations,
 } from "./openaiHostedWebSearchAdapter";
 export type { NoraHostedWebSearchToolOptions } from "./openaiHostedWebSearchAdapter";
+export type {
+  CycleJournalEntry,
+  CycleJournalCompactProjection,
+  NoraJournalDelta,
+  PilotTranscriptTurnRef,
+} from "./cycleJournalTypes";
+export {
+  appendPilotTranscriptTurn,
+  listPilotTranscriptTurns,
+  listCycleJournalEntries,
+  getCycleJournalEntry,
+  buildCycleJournalCompactProjection,
+  retrievePilotTurnsByRefs,
+  materializeCycleJournalDelta,
+} from "./cycleJournalStore";
+export {
+  formatCycleJournalCompactForPrompt,
+  loadCycleJournalCompactForPrompt,
+  retrieveJournalEntrySourceExcerpts,
+} from "./cycleJournalPrompt";

```

## MODIFIED (significant): `projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts b/projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
index ffcdcf02..f7db74e3 100644
--- a/projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
@@ -202,6 +202,9 @@ export async function observeMw1S01FromRuntime(): Promise<DeterministicObservati
       "session_items",
       "logical_product_turns",
       "logical_product_turn_retry_bindings",
+      "pilot_transcript_turns",
+      "cycle_journal_entries",
+      "cycle_journal_mutation_ledger",
     ]);
     let sessionNeqTruthC = truthUnchanged;
     if (fs.existsSync(sessionDbPath)) {

```

## MODIFIED (significant): `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 0f6b6ce5..668e289a 100644
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
@@ -1026,6 +1052,53 @@ export async function orchestrateProjectAssistantTurn(input: {
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

## MODIFIED (significant): `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index a49c45d8..b996d4a1 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -32,6 +32,11 @@ export function buildProjectSystemPrompt(
      * When present, supersedes methodContext for method + state sections.
      */
     studioCognitiveContext?: StudioCognitiveContext | null;
+    /**
+     * CYCLE JOURNAL — compact projection for active cycle (never Truth C).
+     * Pre-formatted prompt section; null/empty → omit.
+     */
+    cycleJournalCompactSection?: string | null;
   },
 ): string {
   const constraints =
@@ -53,6 +58,10 @@ export function buildProjectSystemPrompt(
     ? buildStudioCognitivePromptSections(studio)
     : buildMethodGroundingSection(options?.methodContext ?? null);
 
+  const journalSection = options?.cycleJournalCompactSection?.trim()
+    ? [options.cycleJournalCompactSection.trim(), ""]
+    : [];
+
   return [
     "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
     "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
@@ -95,6 +104,7 @@ export function buildProjectSystemPrompt(
     "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
     "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
     "",
+    ...journalSection,
     "=== FRONTIÈRE QUALIFICATION PRÉ-CYCLE → RECOMMANDATION DE CYCLE ===",
     "Qualification pré-cycle ≠ Cadrage ≠ CycleInstance ≠ « Cycle 0 » ≠ workflow durable.",
     "Elle sert UNIQUEMENT à déterminer honnêtement le prochain travail gouverné.",
@@ -187,7 +197,17 @@ export function buildProjectSystemPrompt(
     "statement : formulation naturelle Pilote (ex. « Je te propose maintenant de… ») ;",
     "varie selon le contexte ; évite le label robotique « PROCHAINE ÉTAPE : ».",
     "N'expose jamais les noms internes conversationGuidance / scope / preCycleRoutingAssessment /",
-    "activeCycleWork / LifecycleRecommendation / semanticKey / basisFingerprint / F1/F2/MW* dans le langage Pilote.",
+    "activeCycleWork / journalDelta / LifecycleRecommendation / semanticKey / basisFingerprint / F1/F2/MW* dans le langage Pilote.",
+    "",
+    "=== SORTIE STRUCTURÉE journalDelta (Cycle Journal — même tour) ===",
+    "Champ structuré journalDelta (nullable) — projection sémantique du cycle actif UNIQUEMENT.",
+    "Journal ≠ Truth C ≠ HumanDecision ≠ Evidence ≠ Recommendation autoritaire ≠ LPS.",
+    "Quand un thème durable émerge ou évolue : émets operations[] (CREATE|UPDATE|MERGE|SPLIT|ARCHIVE).",
+    "UPDATE le même journalEntryId si le sujet revient (même tours non contigus).",
+    "CREATE seulement pour un nouveau thème ; pas de suppression silencieuse (ARCHIVE explicite).",
+    "sourceTurnRefs : ids de tours si connus ; le serveur rattache aussi le tour courant.",
+    "Si aucun sujet à maintenir : journalDelta = null.",
+    "Aucun cycle ACTIVE → journalDelta DOIT être null.",
     "",
     ...buildActiveCycleWorkOutputSection(studio),
     "=== LIMITES D'AUTORITÉ (strict) ===",

```

## MODIFIED (significant): `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index bb6a7321..510ac583 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -987,6 +987,105 @@ export async function projectAssistantConfirmAndExecuteResolvedM3Action(input: {
   };
 }
 
+/**
+ * CYCLE JOURNAL & PILOT TRANSCRIPT — restart-visible conversation continuity.
+ * Session SQLite projection only — NEVER Truth C / HumanDecision / Evidence.
+ */
+export async function projectAssistantConversationContinuityAction(input: {
+  projectId: string;
+  cycleInstanceId?: string | null;
+}): Promise<{
+  ok: true;
+  transcriptAvailability: "available" | "empty" | "unavailable";
+  messages: { id: string; role: "user" | "assistant"; content: string }[];
+  journal: {
+    cycleInstanceId: string | null;
+    entries: {
+      journalEntryId: string;
+      title: string;
+      currentSummary: string;
+      status: string;
+      updatedAt: string;
+      sourceTurnRefs: string[];
+      sourceTurnCount: number;
+    }[];
+  };
+} | {
+  ok: false;
+  transcriptAvailability: "unavailable";
+  code: string;
+  message: string;
+}> {
+  const projectId = input.projectId?.trim();
+  if (!projectId) {
+    return {
+      ok: false,
+      transcriptAvailability: "unavailable",
+      code: "PROJECT_ID_REQUIRED",
+      message: "Identifiant projet requis.",
+    };
+  }
+  try {
+    const { ProductSqliteSession, resolveNoraSessionSqlitePath } = await import(
+      "@/lib/nora-cognitive-runtime"
+    );
+    const {
+      listPilotTranscriptTurns,
+      listCycleJournalEntries,
+    } = await import("@/lib/nora-cognitive-runtime/cycleJournalStore");
+    const { CANONICAL_CONVERSATION_SESSION_KEY } = await import(
+      "./f2/canonicalConversationSession"
+    );
+    const dbPath = resolveNoraSessionSqlitePath();
+    const session = new ProductSqliteSession({
+      projectId,
+      dbPath,
+      sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
+    });
+    try {
+      const turns = listPilotTranscriptTurns(session);
+      const messages = turns
+        .filter((t) => t.role === "user" || t.role === "assistant")
+        .map((t) => ({
+          id: t.turnId,
+          role: t.role as "user" | "assistant",
+          content: t.content,
+        }));
+      const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+      const entries = cycleInstanceId
+        ? listCycleJournalEntries(session, cycleInstanceId).map((e) => ({
+            journalEntryId: e.journalEntryId,
+            title: e.title,
+            currentSummary: e.currentSummary,
+            status: e.status,
+            updatedAt: e.updatedAt,
+            sourceTurnRefs: [...e.sourceTurnRefs],
+            sourceTurnCount: e.sourceTurnRefs.length,
+          }))
+        : [];
+      return {
+        ok: true,
+        transcriptAvailability:
+          messages.length > 0 ? "available" : "empty",
+        messages,
+        journal: { cycleInstanceId, entries },
+      };
+    } finally {
+      session.close();
+    }
+  } catch (error) {
+    return {
+      ok: false,
+      transcriptAvailability: "unavailable",
+      code: "TRANSCRIPT_UNAVAILABLE",
+      message:
+        error instanceof Error
+          ? error.message
+          : "Conversation persistée indisponible.",
+    };
+  }
+}
+
 /**
  * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
  * Strictly read-only: no Decision, no gate consume, no Attempt launch.

```

## MODIFIED (significant): `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index 57fcc7e2..f59f212f 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -121,8 +121,11 @@ export function shouldShowProjectRecovery(input: {
 export const W1_DURABLE_DISCLOSURE =
   "Conservé : projet, état vivant (LPS), trajectoire décidée, confirmations déjà accordées, preuves / résultats déjà enregistrés.";
 
+export const W1_TRANSCRIPT_AVAILABLE_DISCLOSURE =
+  "Conversation Pilote ↔ Nora enregistrée : reprise visible au rechargement lorsque le transcript est disponible.";
+
 export const W1_NON_DURABLE_DISCLOSURE =
-  "Peut devoir être repris : conversation en cours, confirmation encore demandée, propositions non encore enregistrées.";
+  "Peut devoir être repris : confirmation encore demandée, propositions non encore enregistrées ; conversation absente seulement si le transcript n'est pas disponible.";
 
 export const W1_PROPOSED_NOT_DECIDED_DISCLOSURE =
   "Une trajectoire proposée (recommandation) n'est pas encore la trajectoire décidée.";
@@ -191,13 +194,19 @@ export function w1RecoveryDisclosures(): {
   });
 }
 
-export function w1RestartHonestyMessage(): string {
-  return [
-    W1_DURABLE_DISCLOSURE,
+export function w1RestartHonestyMessage(options?: {
+  transcriptAvailability?: "available" | "empty" | "unavailable" | "pending";
+}): string {
+  const parts = [W1_DURABLE_DISCLOSURE];
+  if (options?.transcriptAvailability === "available") {
+    parts.push(W1_TRANSCRIPT_AVAILABLE_DISCLOSURE);
+  }
+  parts.push(
     W1_NON_DURABLE_DISCLOSURE,
     W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
     W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
-  ].join(" ");
+  );
+  return parts.join(" ");
 }
 
 /**

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index eb15e095..1f506c14 100644
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
@@ -38,6 +39,7 @@ import {
   type PendingTurnRetryEnvelope,
 } from "@/features/project-assistant/turnPayloadCanonical";
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
+import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";
 
 export type ProductMessage = {
   id: string;
@@ -45,6 +47,12 @@ export type ProductMessage = {
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
@@ -57,6 +65,8 @@ export type ProductConversationUiState =
 
 export type UseProductConversationInput = {
   projectId: string;
+  /** Active cycle for Journal isolation (null → empty journal). */
+  activeCycleInstanceId?: string | null;
   /** Fired after a successful durable Product mutation (not process-local). */
   onDurableFactsChanged?: () => void;
   /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for History. */
@@ -95,6 +105,7 @@ function modeFromResult(result: {
  */
 export function useProductConversation({
   projectId,
+  activeCycleInstanceId = null,
   onDurableFactsChanged,
   onDurableEvidenceOutcomeChange,
 }: UseProductConversationInput) {
@@ -126,6 +137,18 @@ export function useProductConversation({
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
@@ -186,6 +209,38 @@ export function useProductConversation({
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
@@ -262,6 +317,30 @@ export function useProductConversation({
     activeProposal?.morrisGateRequired === true &&
     activeProposal.status === "DECISION_REQUIRED";
 
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
+    const first = entry.sourceTurnRefs[0] ?? null;
+    setFocusTurnId(first);
+  }
+
+  function clearFocusTurn() {
+    setFocusTurnId(null);
+  }
+
   function historyForRequest(): AssistantHistoryMessage[] {
     return messages
       .filter((m) => m.role === "user" || m.role === "assistant")
@@ -426,6 +505,7 @@ export function useProductConversation({
         setActiveProposal(null);
       }
       setUiState("ANSWERED");
+      void refreshConversationContinuity();
     });
   }
 
@@ -715,6 +795,15 @@ export function useProductConversation({
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
+    clearFocusTurn,
+    refreshConversationContinuity,
     busy,
     blocked,
     canSend,

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 6a2811d3..1da26eac 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -92,6 +92,8 @@ export function ConversationSurface({
     f3Execute,
     durableEvidenceOutcome,
     durableRehydrateError,
+    focusTurnId,
+    clearFocusTurn,
     busy,
     blocked,
     canSend,
@@ -121,6 +123,16 @@ export function ConversationSurface({
     window.dispatchEvent(new CustomEvent(SFIA_ASSISTANT_ANSWERED_EVENT));
   }, [uiState, messages.length]);
 
+  useEffect(() => {
+    if (!focusTurnId) return;
+    const el = document.getElementById(`pilot-turn-${focusTurnId}`);
+    if (el instanceof HTMLElement) {
+      el.scrollIntoView({ behavior: "smooth", block: "center" });
+      el.focus({ preventScroll: true });
+    }
+    clearFocusTurn();
+  }, [focusTurnId, clearFocusTurn, messages.length]);
+
   const attemptLabel = f3Execute
     ? attemptStatusUserLabel(f3Execute.attempt.status)
     : null;
@@ -244,14 +256,17 @@ export function ConversationSurface({
             </p>
           </div>
         ) : (
-          messages.map((message) => (
+              messages.map((message) => (
             <article
               key={message.id}
+              id={`pilot-turn-${message.id}`}
               className={
                 message.role === "user" ? styles.turnMine : styles.turnNora
               }
               data-testid={`project-assistant-turn-${message.role}`}
+              data-turn-id={message.id}
               data-role={message.role}
+              tabIndex={-1}
             >
               <span className={styles.turnAvatar} aria-hidden>
                 {message.role === "user" ? "P" : "N"}

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
index cca2472c..6686e67e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
@@ -6,17 +6,19 @@ import {
   W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
   W1_REQUALIFY_CTA,
   W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
+  W1_TRANSCRIPT_AVAILABLE_DISCLOSURE,
 } from "@/features/project-assistant/presentationLabels";
 import styles from "./RecoverySurface.module.css";
 
 /**
- * F10 — honest recovery. Durable facts can be replayed; conversation,
- * proposal and confirmation cannot. No invented persistence.
+ * F10 — honest recovery. Durable facts can be replayed; process-local
+ * confirmations/proposals cannot. Transcript honesty depends on availability.
  */
 export function RecoverySurface({
   onResumeDurable,
   onRequalify,
   suppressGenericIntentionCta = false,
+  transcriptAvailability = "pending",
 }: {
   onResumeDurable?: () => void;
   onRequalify?: () => void;
@@ -26,7 +28,9 @@ export function RecoverySurface({
    * Resume/navigation may remain.
    */
   suppressGenericIntentionCta?: boolean;
+  transcriptAvailability?: "available" | "empty" | "unavailable" | "pending";
 }) {
+  const transcriptRestored = transcriptAvailability === "available";
   return (
     <section
       className={styles.root}
@@ -39,12 +43,21 @@ export function RecoverySurface({
           Reprenez où le projet en est réellement
         </h2>
         <p className={styles.text}>
-          {suppressGenericIntentionCta
-            ? "Studio relit seulement ce qui a été réellement enregistré. Une proposition active porte déjà la prochaine action métier — reprenez l'état enregistré pour l'inspecter, sans ouvrir une intention concurrente."
-            : "Studio relit seulement ce qui a été réellement enregistré. La conversation, une confirmation encore demandée ou une proposition non enregistrée ne sont pas inventées au rechargement — vous pouvez reprendre l'état enregistré ou repartir d'une intention claire."}
+          {transcriptRestored
+            ? suppressGenericIntentionCta
+              ? "Studio relit l'état enregistré et restaure la conversation visible. Une proposition active porte déjà la prochaine action métier — reprenez l'état enregistré pour l'inspecter, sans ouvrir une intention concurrente."
+              : "Studio relit l'état enregistré et restaure la conversation Pilote ↔ Nora lorsqu'elle est disponible. Les confirmations ou propositions non enregistrées ne sont pas inventées — vous pouvez reprendre l'état enregistré ou repartir d'une intention claire."
+            : suppressGenericIntentionCta
+              ? "Studio relit seulement ce qui a été réellement enregistré. Une proposition active porte déjà la prochaine action métier — reprenez l'état enregistré pour l'inspecter, sans ouvrir une intention concurrente."
+              : "Studio relit seulement ce qui a été réellement enregistré. Une confirmation encore demandée ou une proposition non enregistrée ne sont pas inventées au rechargement — vous pouvez reprendre l'état enregistré ou repartir d'une intention claire."}
         </p>
         <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
           <li>{W1_DURABLE_DISCLOSURE}</li>
+          {transcriptRestored ? (
+            <li data-testid="w1-transcript-available-disclosure">
+              {W1_TRANSCRIPT_AVAILABLE_DISCLOSURE}
+            </li>
+          ) : null}
           <li>{W1_NON_DURABLE_DISCLOSURE}</li>
           <li>{W1_PROPOSED_NOT_DECIDED_DISCLOSURE}</li>
           <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index a2eaab89..0d8a8415 100644
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
@@ -165,11 +171,25 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
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
+            collapsed={journalCollapsed}
+            onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
+          />
+        </div>
+
         <div className={styles.main} ref={conversationRef}>
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 7e97d515..cab0c156 100644
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
@@ -173,7 +206,10 @@
 
 @media (min-width: 1400px) {
   .layout {
-    grid-template-columns: minmax(0, 1fr) var(--pm6-lps-width-wide);
+    grid-template-columns:
+      var(--pm6-journal-width)
+      minmax(0, 1fr)
+      var(--pm6-lps-width-wide);
   }
 }
 
@@ -184,6 +220,12 @@
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

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
index 2a304a13..ac52f4d1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
@@ -26,7 +26,10 @@ export function ProductShell({
   return (
     <div className={styles.shell} data-testid="studio-shell">
       <header className={styles.header}>
-        <div className={styles.headerInner}>
+        <div className={[
+          styles.headerInner,
+          activeNav === "current" ? styles.headerInnerWide : "",
+        ].filter(Boolean).join(" ")}>
           <Link href="/studio" className={styles.brand}>
             <span className={styles.brandMark} aria-hidden>
               <svg
@@ -89,7 +92,16 @@ export function ProductShell({
         </div>
       </header>
 
-      <main className={styles.main}>{children}</main>
+      <main
+        className={[
+          styles.main,
+          activeNav === "current" ? styles.mainWide : "",
+        ]
+          .filter(Boolean)
+          .join(" ")}
+      >
+        {children}
+      </main>
     </div>
   );
 }

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
index b64627eb..211a612f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
@@ -132,6 +132,14 @@
   padding: var(--pm6-space-6) var(--pm6-space-5) var(--pm6-space-7);
 }
 
+.mainWide {
+  max-width: var(--pm6-content-max-workspace);
+}
+
+.headerInnerWide {
+  max-width: var(--pm6-content-max-workspace);
+}
+
 .srOnly {
   position: absolute;
   width: 1px;

```

## MODIFIED (significant): `projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index cdda1f8b..3aa7d039 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -62,7 +62,9 @@
   --pm6-space-6: 32px;
   --pm6-space-7: 48px;
 
-  --pm6-lps-width: 420px;
-  --pm6-lps-width-wide: 480px;
+  --pm6-lps-width: 380px;
+  --pm6-lps-width-wide: 400px;
+  --pm6-journal-width: 280px;
   --pm6-content-max: 1180px;
+  --pm6-content-max-workspace: 1680px;
 }

```

---

# DIFFS — FICHIERS MODIFIÉS SECONDAIRES (tests / allowlists / mocks)

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts
index ec477430..e7ad91c4 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts
@@ -100,8 +100,11 @@ describe("MW1 Option C — ProductSqliteSession D0 (corrected)", () => {
     // coordination only — never Epistemic/LPS/HD/Evidence/Truth C storage.
     expect(tables.sort()).toEqual(
       [
+        "cycle_journal_entries",
+        "cycle_journal_mutation_ledger",
         "logical_product_turn_retry_bindings",
         "logical_product_turns",
+        "pilot_transcript_turns",
         "session_items",
       ].sort(),
     );

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts
index 654271c7..348576c9 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts
@@ -62,8 +62,11 @@ describe("MW1 Option C — Session ≠ Truth C D0", () => {
     // still must never hold oa_* Truth C / LPS / HD / Evidence tables.
     expect(sessionTables.sort()).toEqual(
       [
+        "cycle_journal_entries",
+        "cycle_journal_mutation_ledger",
         "logical_product_turn_retry_bindings",
         "logical_product_turns",
+        "pilot_transcript_turns",
         "session_items",
       ].sort(),
     );

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
index 6c461453..f427e8ac 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
@@ -441,8 +441,11 @@ describe("MW1-S01 — Session ≠ Truth C under availability paths", () => {
     // Session still must not own Truth C / LPS / HD / Evidence tables.
     expect(sessionTables.sort()).toEqual(
       [
+        "cycle_journal_entries",
+        "cycle_journal_mutation_ledger",
         "logical_product_turn_retry_bindings",
         "logical_product_turns",
+        "pilot_transcript_turns",
         "session_items",
       ].sort(),
     );

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
index 5aa747b0..52b93e56 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
@@ -36,6 +36,12 @@ const {
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
   projectAssistantDecideAction: (...args: unknown[]) =>

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 9b380cb7..18f5f1ae 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -37,6 +37,12 @@ vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
     lifecycleProjectionMock(...args),
   projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index 9269d3dc..b5d0ffb9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -46,6 +46,12 @@ const {
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantPrepareResolvedM3Action: vi.fn(),
   projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
 }));

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 5d0680d6..8d38956f 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -56,6 +56,12 @@ const {
  * entrypoint (prepareAndResolve → successor), matching TrajectorySurface.
  */
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
     prepareM3Mock(...args),
   projectAssistantResolveLegacyM3DocsWriteAction: (...args: unknown[]) =>

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
index d6eebb67..145252f0 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
@@ -66,6 +66,12 @@ vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () =>
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
     lifecycleProjectionMock(...args),
   projectAssistantPilotLifecycleAction: vi.fn(),

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
index 38233a2c..9f668d9e 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
@@ -58,6 +58,12 @@ const { projectionMock } = vi.hoisted(() => ({
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
     projectionMock(...args),
   projectAssistantPilotLifecycleAction: vi.fn(),

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index b981465d..b7e02e44 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -31,6 +31,12 @@ const {
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
   projectAssistantDecideAction: (...args: unknown[]) =>

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
index 80556cc3..4c5a1dad 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
@@ -16,6 +16,12 @@ const {
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
   projectAssistantDecideAction: vi.fn(),

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
index 4b2d7c62..86d66c14 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
@@ -16,6 +16,12 @@ const {
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
   projectAssistantDecideAction: vi.fn(),

```

## MODIFIED (secondary): `projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx b/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
index aac890b6..70736dab 100644
--- a/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
+++ b/projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx
@@ -16,6 +16,12 @@ vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
 }));
 
 vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantConversationContinuityAction: vi.fn(async () => ({
+    ok: true,
+    transcriptAvailability: "empty",
+    messages: [],
+    journal: { cycleInstanceId: null, entries: [] },
+  })),
   projectAssistantRehydrateEvidenceOutcomeAction:
     projectAssistantRehydrateEvidenceOutcomeActionMock,
   projectAssistantDecideAction: vi.fn(),

```

---

# Persistence / migration
- `CREATE TABLE IF NOT EXISTS` dans `ensurePilotTranscriptAndJournalSchema()` — backward-compatible, non destructive.
- Aucune nouvelle DB ; mêmes fichiers Session SQLite.
- Compaction Memory B ne touche pas ces tables.

# CREATE / UPDATE / MERGE / SPLIT / ARCHIVE
- CREATE: mint `cje:*`, status active, bind source refs.
- UPDATE: même `journalEntryId`, merge refs, refresh summary/title.
- ARCHIVE: status archived (pas de DELETE).
- MERGE: related → status merged + supersededById ; target absorbe refs/lineage.
- SPLIT: parent → split ; sibling active avec lineageParentIds.
- Idempotence: ledger skip duplicate (logical_turn_id, op_index).

# Transcript rehydrate
- `listPilotTranscriptTurns` + action continuity → `useProductConversation` charge messages au mount.
- Disponibilité: available | empty | unavailable (fail-closed).
- Preuve: test reopen session SQLite + suite continuity.

# Cognitive compact + retrieval
- `formatCycleJournalCompactForPrompt` / `loadCycleJournalCompactForPrompt` dans system prompt.
- `retrieveJournalEntrySourceExcerpts` / `retrievePilotTurnsByRefs` — bornés (max turns/chars).
- Pas de vector DB / RAG.

# UI Option A + Recovery
- Journal rail gauche ; conversation centre ; pilotage droite.
- CDP runtime 1440px: `gridTemplateColumns = 280px 664px 400px`.
- HistorySurface inchangé (historique factuel).
- Recovery: `W1_TRANSCRIPT_AVAILABLE_DISCLOSURE` si transcript available.

# Tests & résultats (conservés)
- Targeted: `cycleJournalContinuity.d0.test.ts` **13 PASS** (schema, create/update/archive, merge/split, retry, cycle isolation, compact+retrieval, ≥110 turns long-cycle, Journal≠oa_*)
- UI: `cycleJournalSurface.ui.test.tsx` **3 PASS**
- Typecheck: **PASS** (`tsc --noEmit`)
- Lint: **PASS** (`next lint`)
- Full Studio suite: **407 passed | 17 skipped** (4561 tests passed | 137 skipped) — 2026-09-24 15:53 CEST
- Adaptations tests session/eval pour tables Session autorisées + mocks continuity action

# Screenshot / runtime proof (conservés)
- Paths:
  - `.tmp-sfia-review/cycle-journal-continuity-proof/cycle-journal-option-a-desktop-1440.png`
  - `.tmp-sfia-review/cycle-journal-continuity-proof/cycle-journal-option-a-scrolled-three-zones.png`
- Runtime: Studio `localhost:3020` · projet KidPlan · viewport 1440×900
- CDP geometry: journal x=24 w=280 · conversation x=328 w=664 · lps x=1016 w=400
- Journal UI visible (« Journal du cycle »)

# Long-cycle proof (conservé)
- Deterministic ≥110 turns: identité sujet stable sur UPDATE non contigus (0/30/70/100), 2 sujets actifs, compact prompt <8k sans dump transcript, ops <120, elapsed <5s.

# Fake / Real Qualification (conservé)
- applicable: oui
- niveau ce cycle: **DETERMINISTIC PRODUCT PROOF** + runtime browser locale
- REAL provider Journal quality: **NOT PROVEN** / hors scope
- claims autorisés: implemented/tested deterministically ; transcript restart proof (tests) ; UI runtime observed
- claims interdits: semantic quality REAL proven ; READY FOR REAL ; runtime v3 adopted

# Risques / réserves / dette (conservés)
1. Qualité clustering/synthèse Journal dépend du modèle REAL (non prouvée ici) — owner Morris ; retrait via campagne REAL distincte si besoin.
2. Virtualisation transcript UI ≥centaines de tours non implémentée — acceptable maintenant ; owner Studio UI ; condition: perf mesurée dégradée.
3. Journal entries historiques (cycles antérieurs à ce code) vides jusqu'aux prochains tours — attendu.
4. Aucun commit projet dans ce cycle (GO construction only).

# Claims autorisés / interdits
- Autorisés: READY FOR PR READINESS (construction locale + preuves deterministic + screenshot)
- Interdits: runtime v3 adopted ; Journal = Truth C ; HD implicite ; READY FOR REAL ; pixel-perfect Figma

# Décisions Morris requises
1. GO PR readiness / push branche / ouverture PR (distinct)
2. GO campagne REAL provider pour qualité sémantique Journal (optionnel, post PR)
3. Aucun STOP architecture dans ce cycle

# Verdict
**READY FOR PR READINESS**

Runtime v3 = NON ADOPTED · Build Doctrine / framing non modifiés · aucun push/PR/merge projet.

# Review Handoff note (this republish)
- Mode: publish-in-cycle L3 borné
- Fichier canonique: `sfia-review-handoff/latest-chatgpt-review.md`
- Contenu: FULL pack with integral created files + significant diffs
