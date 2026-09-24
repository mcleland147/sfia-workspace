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
