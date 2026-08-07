/**
 * FinOps T2 — PostgreSQL R3 price catalog adapter.
 * Empty catalog ⇒ unavailable estimation (no invented tariffs).
 */

import type { Pool } from "pg";
import { parseMoneyString } from "../../domain/money";
import type {
  FinOpsPriceCatalogEntry,
  FinOpsPriceCatalogLookupQuery,
  FinOpsPriceCatalogLookupResult,
  FinOpsPriceCatalogPort,
} from "../../ports/finopsPriceCatalogPort";

function rowToEntry(row: Record<string, unknown>): FinOpsPriceCatalogEntry {
  const currency = String(row.currency);
  return {
    catalogEntryId: String(row.catalog_entry_id),
    catalogVersion: String(row.catalog_version),
    provider: String(row.provider),
    model: String(row.model),
    unit: String(row.unit),
    billingQuantum: BigInt(String(row.billing_quantum)),
    ratePerQuantum: parseMoneyString(String(row.amount_per_quantum), currency),
    validFrom:
      row.valid_from instanceof Date
        ? row.valid_from.toISOString()
        : String(row.valid_from),
    validTo:
      row.valid_to === null || row.valid_to === undefined
        ? null
        : row.valid_to instanceof Date
          ? row.valid_to.toISOString()
          : String(row.valid_to),
  };
}

export function createPostgresFinOpsPriceCatalog(
  pool: Pool,
): FinOpsPriceCatalogPort {
  return {
    async lookup(
      query: FinOpsPriceCatalogLookupQuery,
    ): Promise<FinOpsPriceCatalogLookupResult> {
      const params: unknown[] = [
        query.provider,
        query.model,
        query.unit,
        query.currency,
        query.at,
      ];
      let sql = `
        SELECT * FROM finops_price_catalog_entry
        WHERE provider = $1
          AND model = $2
          AND unit = $3
          AND currency = $4
          AND valid_from <= $5::timestamptz
          AND (valid_to IS NULL OR valid_to > $5::timestamptz)
      `;
      if (query.catalogVersion) {
        params.push(query.catalogVersion);
        sql += ` AND catalog_version = $6`;
      }
      sql += ` ORDER BY valid_from DESC LIMIT 1`;

      const result = await pool.query(sql, params);
      if (result.rowCount !== 1) {
        return {
          status: "unavailable",
          reason: "no catalog entry configured for provider/model/unit/currency",
        };
      }
      return {
        status: "found",
        entry: rowToEntry(result.rows[0] as Record<string, unknown>),
      };
    },
  };
}
