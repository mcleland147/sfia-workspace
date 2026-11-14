/**
 * O-01 — authorized conversation history search/read (server-only).
 * Scope is rebuilt from authenticated pilot + preparation/project links.
 * Cursor is untrusted opaque state; rights revalidated on every call.
 */
import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import { createHash } from "node:crypto";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  preparationProjectLinks,
  preparations,
} from "@/db/schema";
import { getPreparationContext } from "@/domains/preparation/service";

export type HistoryCoverage =
  | "COMPLETE"
  | "PARTIAL"
  | "EMPTY"
  | "DENIED"
  | "STALE";

export type AuthorizedHistoryScope = {
  pilotId: string;
  activePreparationId: string;
  projectId: string | null;
  conversationIds: string[];
  /** Per-conversation upper ordinal bound at scope start (keyset). */
  maxOrdinalByConversation: Record<string, number>;
  scopeFingerprint: string;
};

export type HistoryCursorV1 = {
  v: 1;
  scopeFp: string;
  /** Last emitted tuple for keyset continuation. */
  last?: {
    createdAt: string;
    conversationId: string;
    ordinal: number;
    messageId: string;
  };
};

export type HistorySearchItem = {
  messageId: string;
  conversationId: string;
  ordinal: number;
  role: string;
  status: string;
  createdAt: string;
  generationId: string | null;
  preview: string;
  coverage: HistoryCoverage;
  /** Lexical accelerator hit only — never used as exclusivity filter (C-05). */
  lexicalHit?: boolean;
};

export type HistorySearchResult = {
  items: HistorySearchItem[];
  nextCursor: string | null;
  coverage: HistoryCoverage;
  reason: string | null;
};

export type HistoryReadItem = {
  messageId: string;
  conversationId: string;
  ordinal: number;
  role: string;
  status: string;
  createdAt: string;
  generationId: string | null;
  content: string;
  fragmentStart: number;
  fragmentEnd: number;
  totalLength: number;
  coverage: HistoryCoverage;
  provenance: {
    preparationId: string;
    projectId: string | null;
  };
};

const DEFAULT_PAGE = 20;
const MAX_PAGE = 50;
const PREVIEW_CHARS = 240;
const CURSOR_MAX_CHARS = 2048;

function fingerprintScope(parts: {
  pilotId: string;
  preparationId: string;
  projectId: string | null;
  conversationIds: string[];
  maxOrdinalByConversation: Record<string, number>;
}): string {
  const payload = JSON.stringify({
    pilotId: parts.pilotId,
    preparationId: parts.preparationId,
    projectId: parts.projectId,
    conversationIds: [...parts.conversationIds].sort(),
    maxOrdinalByConversation: parts.maxOrdinalByConversation,
  });
  return createHash("sha256").update(payload).digest("hex").slice(0, 32);
}

function encodeCursor(c: HistoryCursorV1): string {
  return Buffer.from(JSON.stringify(c), "utf8").toString("base64url");
}

function decodeCursor(raw: string | null | undefined): HistoryCursorV1 | null {
  if (!raw) return null;
  if (raw.length > CURSOR_MAX_CHARS) return null;
  try {
    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as HistoryCursorV1;
    if (parsed?.v !== 1 || typeof parsed.scopeFp !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Resolve conversations the pilot may read for the active preparation:
 * active prep conversation(s) + same-project linked preparations owned by the pilot.
 */
export async function resolveAuthorizedHistoryScope(input: {
  pilotId: string;
  preparationId: string;
}): Promise<AuthorizedHistoryScope | { denied: true; reason: string }> {
  const ctx = await getPreparationContext(input.pilotId, input.preparationId);
  if (!ctx.preparation) {
    return { denied: true, reason: "PREPARATION_NOT_FOUND" };
  }

  const projectId = ctx.project?.id ?? null;
  const prepIds = new Set<string>([input.preparationId]);

  if (projectId) {
    const linked = await db
      .select({
        preparationId: preparationProjectLinks.preparationId,
        ownerPilotId: preparations.ownerPilotId,
      })
      .from(preparationProjectLinks)
      .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
      .where(
        and(
          eq(preparationProjectLinks.projectId, projectId),
          eq(preparations.ownerPilotId, input.pilotId),
        ),
      );
    for (const row of linked) prepIds.add(row.preparationId);
  }

  const convRows = await db
    .select({
      id: conversations.id,
      preparationId: conversations.preparationId,
    })
    .from(conversations)
    .where(
      and(
        eq(conversations.ownerPilotId, input.pilotId),
        inArray(conversations.preparationId, [...prepIds]),
      ),
    );

  const conversationIds = convRows.map((c) => c.id);
  const maxOrdinalByConversation: Record<string, number> = {};
  if (conversationIds.length > 0) {
    const maxima = await db
      .select({
        conversationId: messages.conversationId,
        maxOrdinal: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number),
      })
      .from(messages)
      .where(inArray(messages.conversationId, conversationIds))
      .groupBy(messages.conversationId);
    for (const m of maxima) {
      maxOrdinalByConversation[m.conversationId] = m.maxOrdinal;
    }
    for (const id of conversationIds) {
      if (maxOrdinalByConversation[id] === undefined) maxOrdinalByConversation[id] = 0;
    }
  }

  const scopeFingerprint = fingerprintScope({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId,
    conversationIds,
    maxOrdinalByConversation,
  });

  return {
    pilotId: input.pilotId,
    activePreparationId: input.preparationId,
    projectId,
    conversationIds,
    maxOrdinalByConversation,
    scopeFingerprint,
  };
}

async function revalidateScope(
  scope: AuthorizedHistoryScope,
): Promise<AuthorizedHistoryScope | { denied: true; reason: string; coverage: HistoryCoverage }> {
  const fresh = await resolveAuthorizedHistoryScope({
    pilotId: scope.pilotId,
    preparationId: scope.activePreparationId,
  });
  if ("denied" in fresh) {
    return { denied: true, reason: fresh.reason, coverage: "DENIED" };
  }
  if (fresh.scopeFingerprint !== scope.scopeFingerprint) {
    return { denied: true, reason: "SCOPE_STALE", coverage: "STALE" };
  }
  return fresh;
}

function previewOf(content: string): string {
  const t = content.replace(/\s+/g, " ").trim();
  if (t.length <= PREVIEW_CHARS) return t;
  return `${t.slice(0, PREVIEW_CHARS)}…`;
}

/**
 * Progressive history search within an authorized scope.
 * Lexical `query` is an accelerator only — empty query walks the journal by keyset order.
 */
export async function searchConversationHistory(input: {
  scope: AuthorizedHistoryScope;
  query?: string;
  cursor?: string | null;
  pageSize?: number;
}): Promise<HistorySearchResult> {
  const validated = await revalidateScope(input.scope);
  if ("denied" in validated) {
    return {
      items: [],
      nextCursor: null,
      coverage: validated.coverage,
      reason: validated.reason,
    };
  }
  const scope = validated;
  if (scope.conversationIds.length === 0) {
    return { items: [], nextCursor: null, coverage: "EMPTY", reason: null };
  }

  const pageSize = Math.min(Math.max(input.pageSize ?? DEFAULT_PAGE, 1), MAX_PAGE);
  const cursor = decodeCursor(input.cursor);
  if (input.cursor && (!cursor || cursor.scopeFp !== scope.scopeFingerprint)) {
    return {
      items: [],
      nextCursor: null,
      coverage: "STALE",
      reason: "CURSOR_INVALID_OR_STALE",
    };
  }

  // C-05: lexical query is a relevance hint only — never an exclusivity filter.
  // Paginated walk covers all authorized messages; absence of LIKE hits ≠ semantic EMPTY.
  const q = (input.query ?? "").trim().toLowerCase();
  const qSafe = q.replace(/[%_]/g, "");

  // Keyset: (created_at DESC, conversation_id DESC, ordinal DESC, id DESC) for stable paging.
  // Bound each conversation by maxOrdinal captured at scope start.
  const bounds = Object.entries(scope.maxOrdinalByConversation);
  if (bounds.length === 0) {
    return { items: [], nextCursor: null, coverage: "EMPTY", reason: null };
  }

  const rows = await db
    .select({
      id: messages.id,
      conversationId: messages.conversationId,
      ordinal: messages.ordinal,
      role: messages.role,
      status: messages.status,
      createdAt: messages.createdAt,
      generationId: messages.generationId,
      content: messages.content,
    })
    .from(messages)
    .where(
      and(
        inArray(messages.conversationId, scope.conversationIds),
        // Enforce per-conversation maxOrdinal bounds in SQL via OR of (conv, ordinal<=max).
        sql`(${sql.join(
          bounds.map(
            ([cid, maxOrd]) =>
              sql`(${messages.conversationId} = ${cid} AND ${messages.ordinal} <= ${maxOrd})`,
          ),
          sql` OR `,
        )})`,
        cursor?.last
          ? sql`(
              ${messages.createdAt} < ${cursor.last.createdAt}::timestamptz
              OR (
                ${messages.createdAt} = ${cursor.last.createdAt}::timestamptz
                AND (
                  ${messages.conversationId} < ${cursor.last.conversationId}
                  OR (
                    ${messages.conversationId} = ${cursor.last.conversationId}
                    AND (
                      ${messages.ordinal} < ${cursor.last.ordinal}
                      OR (
                        ${messages.ordinal} = ${cursor.last.ordinal}
                        AND ${messages.id} < ${cursor.last.messageId}
                      )
                    )
                  )
                )
              )
            )`
          : undefined,
      ),
    )
    .orderBy(
      desc(messages.createdAt),
      desc(messages.conversationId),
      desc(messages.ordinal),
      desc(messages.id),
    )
    .limit(pageSize + 1);

  const page = rows.slice(0, pageSize);
  const hasMore = rows.length > pageSize;
  const items: HistorySearchItem[] = page.map((r) => {
    const lexicalHit = qSafe ? r.content.toLowerCase().includes(qSafe) : false;
    return {
      messageId: r.id,
      conversationId: r.conversationId,
      ordinal: r.ordinal,
      role: r.role,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      generationId: r.generationId,
      preview: previewOf(r.content),
      coverage: "COMPLETE" as HistoryCoverage,
      // Hint only — clients/Nora may prioritize lexicalHit=true without excluding others.
      ...(qSafe ? { lexicalHit } : {}),
    };
  });

  let nextCursor: string | null = null;
  if (hasMore && page.length > 0) {
    const last = page[page.length - 1]!;
    nextCursor = encodeCursor({
      v: 1,
      scopeFp: scope.scopeFingerprint,
      last: {
        createdAt: last.createdAt.toISOString(),
        conversationId: last.conversationId,
        ordinal: last.ordinal,
        messageId: last.id,
      },
    });
  }

  const coverage: HistoryCoverage =
    items.length === 0 ? "EMPTY" : hasMore ? "PARTIAL" : "COMPLETE";

  return { items, nextCursor, coverage, reason: null };
}

/**
 * Exact re-read of previously located messages. Rights revalidated; foreign ids → DENIED item omitted.
 */
export async function readConversationMessages(input: {
  scope: AuthorizedHistoryScope;
  messageIds: string[];
  /** Optional fragment window (inclusive start, exclusive end). */
  fragment?: { start: number; end: number };
}): Promise<{
  items: HistoryReadItem[];
  coverage: HistoryCoverage;
  reason: string | null;
}> {
  const validated = await revalidateScope(input.scope);
  if ("denied" in validated) {
    return { items: [], coverage: validated.coverage, reason: validated.reason };
  }
  const scope = validated;
  const ids = [...new Set(input.messageIds)].slice(0, MAX_PAGE);
  if (ids.length === 0) {
    return { items: [], coverage: "EMPTY", reason: null };
  }

  const rows = await db
    .select({
      id: messages.id,
      conversationId: messages.conversationId,
      ordinal: messages.ordinal,
      role: messages.role,
      status: messages.status,
      createdAt: messages.createdAt,
      generationId: messages.generationId,
      content: messages.content,
      preparationId: conversations.preparationId,
      projectId: conversations.projectId,
      ownerPilotId: conversations.ownerPilotId,
    })
    .from(messages)
    .innerJoin(conversations, eq(conversations.id, messages.conversationId))
    .where(and(inArray(messages.id, ids), eq(conversations.ownerPilotId, scope.pilotId)))
    .orderBy(asc(messages.createdAt), asc(messages.ordinal));

  const allowed = new Set(scope.conversationIds);
  const items: HistoryReadItem[] = [];
  for (const r of rows) {
    if (!allowed.has(r.conversationId)) continue;
    const maxOrd = scope.maxOrdinalByConversation[r.conversationId] ?? 0;
    if (r.ordinal > maxOrd) continue;
    const totalLength = r.content.length;
    let start = 0;
    let end = totalLength;
    if (input.fragment) {
      start = Math.max(0, Math.min(input.fragment.start, totalLength));
      end = Math.max(start, Math.min(input.fragment.end, totalLength));
    }
    items.push({
      messageId: r.id,
      conversationId: r.conversationId,
      ordinal: r.ordinal,
      role: r.role,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      generationId: r.generationId,
      content: r.content.slice(start, end),
      fragmentStart: start,
      fragmentEnd: end,
      totalLength,
      coverage: start === 0 && end === totalLength ? "COMPLETE" : "PARTIAL",
      provenance: {
        preparationId: r.preparationId,
        projectId: r.projectId,
      },
    });
  }

  const coverage: HistoryCoverage =
    items.length === 0 ? "EMPTY" : items.length < ids.length ? "PARTIAL" : "COMPLETE";
  return { items, coverage, reason: null };
}
