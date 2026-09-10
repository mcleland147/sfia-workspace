/**
 * D-GF-ACW-02 Option A — resolve or mint Session-adjacent logical Product turn id.
 *
 * Continuity / rematerialize coordination ONLY.
 * Never Epistemic / LPS / HD / Evidence SoT.
 * Opening Session DB is independent of Memory B Runner attachment.
 */

import {
  ProductSqliteSession,
  type LogicalProductTurnRow,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "./f2/canonicalConversationSession";

export type ResolveOrMintLogicalProductTurnOk = {
  readonly ok: true;
  readonly logicalTurnId: string;
  readonly minted: boolean;
  readonly row: LogicalProductTurnRow;
};

export type ResolveOrMintLogicalProductTurnErr = {
  readonly ok: false;
  readonly code: "LOGICAL_TURN_UNKNOWN" | "LOGICAL_TURN_SESSION_UNAVAILABLE";
  readonly reason: string;
};

export type ResolveOrMintLogicalProductTurnResult =
  | ResolveOrMintLogicalProductTurnOk
  | ResolveOrMintLogicalProductTurnErr;

/**
 * Accept boundary for ACW turn identity:
 * - presented id MUST already exist for project+session (reject client-invented)
 * - else mint server-owned `ltu:…` with status `accepted`
 * - Session open failure → fail-closed for ACW path
 */
export function resolveOrMintLogicalProductTurn(input: {
  projectId: string;
  sessionDbPath?: string;
  sessionKey?: string;
  presentedLogicalTurnId?: string | null;
  cycleInstanceId?: string | null;
  nowIso?: string;
}): ResolveOrMintLogicalProductTurnResult {
  const projectId = input.projectId.trim();
  const sessionKey =
    input.sessionKey?.trim() || CANONICAL_CONVERSATION_SESSION_KEY;
  const presented = input.presentedLogicalTurnId?.trim() || null;

  let session: ProductSqliteSession | null = null;
  try {
    const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
    session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey,
    });
    session.ensureLogicalTurnSchema();

    if (presented) {
      const existing = session.getLogicalProductTurn(presented);
      if (!existing) {
        return {
          ok: false,
          code: "LOGICAL_TURN_UNKNOWN",
          reason: "presented_logical_turn_not_found_for_project_session",
        };
      }
      return {
        ok: true,
        logicalTurnId: existing.logicalTurnId,
        minted: false,
        row: existing,
      };
    }

    const row = session.mintLogicalProductTurn({
      cycleInstanceId: input.cycleInstanceId,
      status: "accepted",
      nowIso: input.nowIso,
    });
    return {
      ok: true,
      logicalTurnId: row.logicalTurnId,
      minted: true,
      row,
    };
  } catch (err) {
    return {
      ok: false,
      code: "LOGICAL_TURN_SESSION_UNAVAILABLE",
      reason:
        err instanceof Error
          ? err.message
          : "session_db_open_failed_for_logical_turn",
    };
  } finally {
    try {
      session?.close();
    } catch {
      /* ignore close errors */
    }
  }
}
