#!/usr/bin/env node
/**
 * LOCAL ONLY — historical Attempt 3 rehydrate verification.
 * NOT part of Vitest discovery. ZERO REAL. No SQL mutation. No new CE/Attempt.
 *
 * Usage (explicit):
 *   node .tmp-sfia-review/local/attempt3-rehydrate-verify.mjs
 *
 * Requires campaign DB path via env:
 *   SFIA_PJR_CAMPAIGN_DB=/path/to/oa-product.sqlite
 */
import { createHash } from "node:crypto";
import fs from "node:fs";

const db = process.env.SFIA_PJR_CAMPAIGN_DB;
if (!db || !fs.existsSync(db)) {
  console.error(
    "STOP — set SFIA_PJR_CAMPAIGN_DB to existing campaign oa-product.sqlite",
  );
  process.exit(2);
}

const sha = createHash("sha256").update(fs.readFileSync(db)).digest("hex");
console.log(
  JSON.stringify(
    {
      note: "Read-only fingerprint — run Product rehydrate via Studio/app harness separately if needed",
      db,
      sha256: sha,
      expectedAttempt: "xat:w3a:c4c5670edb4658cc",
      expectedCe: "clm:docs-write:strict-eo-v1:xat:w3a:c4c5670edb4658cc",
      expectedCeStatus: "not_proven",
      zeroReal: true,
      noNewAttempt: true,
      noSqlMutation: true,
    },
    null,
    2,
  ),
);
