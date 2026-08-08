/**
 * FinOps T6 — canonical server-side durable audit runtime composition.
 *
 * Wires a caller-owned pg.Pool to:
 *   T1 Postgres usage ledger
 *   → T6 Postgres audit journal
 *   → T6 durable audit emitter
 *   → T1 FinOps capture service
 *
 * Anti-claims:
 * - Composition Ready ≠ product activation.
 * - Does not read env connection strings, create a second pool, or close the injected pool.
 * - Does not implement rollout modes, T4/T3/T5, or T6 extension events.
 */

import type { Pool } from "pg";
import { createFinOpsCaptureService } from "../application/captureFinOpsUsage";
import {
  createDurableFinOpsAuditEmitter,
  createPostgresFinOpsAuditJournal,
} from "../infrastructure/postgres/postgresFinOpsAuditJournal";
import { createPostgresFinOpsUsageLedger } from "../infrastructure/postgres/postgresFinOpsUsageLedger";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";

export type ComposeFinOpsRuntimeInput = {
  /** Caller-owned pool. Composition never closes it. */
  readonly pool: Pool;
};

export type FinOpsRuntimeComposition = {
  readonly capture: FinOpsCapturePort;
  /** Await in-flight durable audit appends (tests / orderly shutdown). */
  readonly flushAudit: () => Promise<void>;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsRuntime is server-only and must not run in a browser context.",
    );
  }
}

/**
 * Compose the canonical durable FinOps capture + audit runtime boundary.
 * Reuses T1/T6 foundation adapters — does not reimplement emit/redact/append.
 */
export function composeFinOpsRuntime(
  input: ComposeFinOpsRuntimeInput,
): FinOpsRuntimeComposition {
  assertServerOnly();
  const { pool } = input;
  const ledger = createPostgresFinOpsUsageLedger(pool);
  const journal = createPostgresFinOpsAuditJournal(pool);
  const audit = createDurableFinOpsAuditEmitter(journal);
  const capture = createFinOpsCaptureService({ ledger, audit });
  return {
    capture,
    flushAudit: () => audit.flush(),
  };
}
