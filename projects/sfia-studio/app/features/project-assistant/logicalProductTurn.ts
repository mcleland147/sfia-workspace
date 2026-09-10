/**
 * D-GF-ACW-02 Option A — resolve or mint Session-adjacent logical Product turn id.
 *
 * Continuity / rematerialize / silent-response-loss retry coordination ONLY.
 * Never Epistemic / LPS / HD / Evidence SoT.
 *
 * Authority boundary:
 * - Server alone mints/owns `ltu:…` (logical Product turn identity).
 * - Optional client `turnRetryKey` is an untrusted opaque transport correlation
 *   token only — it MUST NOT become Product turn identity or SFIA authority.
 * - Payload digest may detect retry conflicts; it is NEVER turn identity.
 */

import { createHash } from "node:crypto";
import {
  ProductSqliteSession,
  type LogicalProductTurnRow,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "./f2/canonicalConversationSession";

export { createTurnRetryKey } from "./turnRetryKey";

export type ResolveOrMintLogicalProductTurnOk = {
  readonly ok: true;
  readonly logicalTurnId: string;
  readonly minted: boolean;
  readonly row: LogicalProductTurnRow;
  readonly recoveredViaRetryKey: boolean;
};

export type ResolveOrMintLogicalProductTurnErr = {
  readonly ok: false;
  readonly code:
    | "LOGICAL_TURN_UNKNOWN"
    | "LOGICAL_TURN_SESSION_UNAVAILABLE"
    | "LOGICAL_TURN_RETRY_CONFLICT";
  readonly reason: string;
};

export type ResolveOrMintLogicalProductTurnResult =
  | ResolveOrMintLogicalProductTurnOk
  | ResolveOrMintLogicalProductTurnErr;

/** Client-side opaque transport retry token (untrusted; not Product identity). */
// createTurnRetryKey re-exported from ./turnRetryKey (client-safe).

/**
 * Conflict-detection digest for a logical submission payload.
 * NOT Product turn identity — only guards same-retry-key remaps.
 */
export function canonicalTurnPayloadDigest(content: string): string {
  return createHash("sha256")
    .update(JSON.stringify({ content: content.trim() }), "utf8")
    .digest("hex");
}

/**
 * Accept boundary for ACW turn identity:
 * - presented `ltu:` MUST already exist (reject client-invented)
 * - opaque `turnRetryKey` may recover an existing server binding after silent loss
 * - else mint server-owned `ltu:…` and optionally bind retry key
 * - Session open failure → fail-closed for ACW path
 */
export function resolveOrMintLogicalProductTurn(input: {
  projectId: string;
  sessionDbPath?: string;
  sessionKey?: string;
  presentedLogicalTurnId?: string | null;
  /** Untrusted opaque transport retry correlation — never Product authority. */
  turnRetryKey?: string | null;
  /** User content for conflict digest when retry key is present. */
  content?: string | null;
  cycleInstanceId?: string | null;
  nowIso?: string;
}): ResolveOrMintLogicalProductTurnResult {
  const projectId = input.projectId.trim();
  const sessionKey =
    input.sessionKey?.trim() || CANONICAL_CONVERSATION_SESSION_KEY;
  const presented = input.presentedLogicalTurnId?.trim() || null;
  const retryKey = input.turnRetryKey?.trim() || null;
  const payloadDigest =
    retryKey !== null
      ? canonicalTurnPayloadDigest(input.content ?? "")
      : null;

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
      if (retryKey && payloadDigest) {
        const binding = session.getLogicalProductTurnRetryBinding(retryKey);
        if (binding) {
          if (binding.logicalTurnId !== existing.logicalTurnId) {
            return {
              ok: false,
              code: "LOGICAL_TURN_RETRY_CONFLICT",
              reason: "retry_key_bound_to_different_logical_turn",
            };
          }
          if (binding.payloadDigest !== payloadDigest) {
            return {
              ok: false,
              code: "LOGICAL_TURN_RETRY_CONFLICT",
              reason: "retry_key_payload_digest_mismatch",
            };
          }
        }
      }
      return {
        ok: true,
        logicalTurnId: existing.logicalTurnId,
        minted: false,
        row: existing,
        recoveredViaRetryKey: false,
      };
    }

    if (retryKey && payloadDigest) {
      const binding = session.getLogicalProductTurnRetryBinding(retryKey);
      if (binding) {
        if (binding.payloadDigest !== payloadDigest) {
          return {
            ok: false,
            code: "LOGICAL_TURN_RETRY_CONFLICT",
            reason: "retry_key_payload_digest_mismatch",
          };
        }
        const existing = session.getLogicalProductTurn(binding.logicalTurnId);
        if (!existing) {
          return {
            ok: false,
            code: "LOGICAL_TURN_RETRY_CONFLICT",
            reason: "retry_binding_points_to_missing_logical_turn",
          };
        }
        return {
          ok: true,
          logicalTurnId: existing.logicalTurnId,
          minted: false,
          row: existing,
          recoveredViaRetryKey: true,
        };
      }

      // First accept for this retry key — mint + bind atomically.
      const db = session.getSqlite();
      db.exec("BEGIN IMMEDIATE");
      try {
        const raced = session.getLogicalProductTurnRetryBinding(retryKey);
        if (raced) {
          db.exec("ROLLBACK");
          if (raced.payloadDigest !== payloadDigest) {
            return {
              ok: false,
              code: "LOGICAL_TURN_RETRY_CONFLICT",
              reason: "retry_key_payload_digest_mismatch",
            };
          }
          const existing = session.getLogicalProductTurn(raced.logicalTurnId);
          if (!existing) {
            return {
              ok: false,
              code: "LOGICAL_TURN_RETRY_CONFLICT",
              reason: "retry_binding_points_to_missing_logical_turn",
            };
          }
          return {
            ok: true,
            logicalTurnId: existing.logicalTurnId,
            minted: false,
            row: existing,
            recoveredViaRetryKey: true,
          };
        }
        const row = session.mintLogicalProductTurn({
          cycleInstanceId: input.cycleInstanceId,
          status: "accepted",
          nowIso: input.nowIso,
        });
        session.bindLogicalProductTurnRetry({
          retryKey,
          logicalTurnId: row.logicalTurnId,
          payloadDigest,
          nowIso: input.nowIso,
        });
        db.exec("COMMIT");
        return {
          ok: true,
          logicalTurnId: row.logicalTurnId,
          minted: true,
          row,
          recoveredViaRetryKey: false,
        };
      } catch (err) {
        try {
          db.exec("ROLLBACK");
        } catch {
          /* ignore */
        }
        throw err;
      }
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
      recoveredViaRetryKey: false,
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
