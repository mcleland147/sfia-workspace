/**
 * FinOps T2 — R3 versioned server-side price catalog port.
 * No provider tariffs hardcoded; missing entry ⇒ unavailable estimation.
 */

import type { FinOpsMoney } from "../domain/money";

export type FinOpsPriceCatalogEntry = {
  readonly catalogEntryId: string;
  readonly catalogVersion: string;
  readonly provider: string;
  readonly model: string;
  /** Explicit unit declared by the catalog entry (R3). */
  readonly unit: string;
  /** Explicit billing quantum (positive integer count of `unit`). */
  readonly billingQuantum: bigint;
  readonly ratePerQuantum: FinOpsMoney;
  readonly validFrom: string;
  readonly validTo: string | null;
};

export type FinOpsPriceCatalogLookupQuery = {
  readonly provider: string;
  readonly model: string;
  readonly unit: string;
  readonly currency: string;
  /** ISO instant used to select the version window. */
  readonly at: string;
  readonly catalogVersion?: string;
};

export type FinOpsPriceCatalogLookupResult =
  | { readonly status: "found"; readonly entry: FinOpsPriceCatalogEntry }
  | { readonly status: "unavailable"; readonly reason: string };

export type FinOpsPriceCatalogPort = {
  readonly lookup: (
    query: FinOpsPriceCatalogLookupQuery,
  ) => Promise<FinOpsPriceCatalogLookupResult>;
};
