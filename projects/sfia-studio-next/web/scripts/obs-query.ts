#!/usr/bin/env npx tsx
/**
 * Read-only observability query by operation_id (lane-local JSONL sink).
 * Usage: npx tsx scripts/obs-query.ts <operation_id>
 * Never creates/modifies files or directories; never prints secrets.
 */
import { queryObsByOperationId, openObsSinkReadOnly } from "../src/lib/observability";

const operationId = process.argv[2]?.trim();
if (!operationId) {
  console.error("Usage: npx tsx scripts/obs-query.ts <operation_id>");
  process.exit(2);
}

// Prove read-only open before query (no mkdir).
const opened = openObsSinkReadOnly();
if (!opened.ok) {
  console.log(
    JSON.stringify(
      { status: "SINK_UNAVAILABLE", reason: opened.reason, eventCount: 0, events: [] },
      null,
      2,
    ),
  );
  process.exit(3);
}

const result = queryObsByOperationId(operationId);
console.log(
  JSON.stringify(
    {
      status: result.status,
      sinkDir: result.sinkDir,
      eventCount: result.events.length,
      events: result.events,
      readOnly: true,
    },
    null,
    2,
  ),
);
process.exit(result.status === "AVAILABLE" ? 0 : result.status === "NOT_FOUND" ? 1 : 3);
