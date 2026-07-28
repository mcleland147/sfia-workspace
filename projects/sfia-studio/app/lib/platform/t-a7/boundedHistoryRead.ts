/**
 * T-A7 Lot 1 — F13.4 bounded read-only history foundation.
 * Git remains canonical. No migration, no durable store, no UI, no ACL/IAM.
 */

export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

export type BoundedHistoryAvailability =
  | "PARTIAL"
  | "NOT_AVAILABLE"
  | "EMPTY";

export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

export interface BoundedHistoryEntry {
  readonly id: string;
  readonly category: string;
  readonly status: BoundedHistoryEntryStatus;
  readonly occurredAt: string;
  readonly gitProvenance: {
    readonly kind: "git-ref" | "documentary-pack" | "synthetic-fixture";
    readonly ref: string;
  };
  readonly metadata: Readonly<Record<string, string>>;
}

export interface BoundedHistoryPage {
  readonly availability: BoundedHistoryAvailability;
  readonly items: readonly BoundedHistoryEntry[];
  readonly limit: number;
  readonly returned: number;
  readonly truncated: boolean;
  readonly gitCanonical: true;
  readonly mutable: false;
  readonly evaluatedAt: string;
  readonly completeness: "BOUNDED_LOT_1";
  readonly note: string;
}

export interface BoundedHistoryReadRequest {
  readonly limit?: number;
}

export class BoundedHistoryMutationError extends Error {
  readonly code = "MUTATION_FORBIDDEN" as const;
  constructor(message = "F13.4 bounded history is read-only; mutation refused.") {
    super(message);
    this.name = "BoundedHistoryMutationError";
  }
}

export interface BoundedHistoryProvider {
  readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
}

function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
  return Object.freeze({
    ...entry,
    gitProvenance: Object.freeze({ ...entry.gitProvenance }),
    metadata: Object.freeze({ ...entry.metadata }),
  });
}

function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
  return Object.freeze({
    ...page,
    items: Object.freeze(page.items.map(freezeEntry)),
  });
}

/** Documentary/Git references known from T-A7 packs — not a full archive. */
const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
  freezeEntry({
    id: "hist-t-a7-f03-f11-f13",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T17:54:21.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "dad6e00344ad5750cd352db3af33c150c780491b",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "285",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-readme-post-merge",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:17:54.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "2a3c59c46c105bae458d1a7329079c5f591da421",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "286",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness",
    category: "readiness-pack",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T18:40:10.000Z",
    gitProvenance: {
      kind: "documentary-pack",
      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
    },
    metadata: {
      lot: "bounded-technical-preparation-o2",
    },
  }),
]);

export function createDocumentaryBoundedHistoryProvider(
  seed: readonly BoundedHistoryEntry[] = DOCUMENTARY_SEED,
): BoundedHistoryProvider {
  const frozenSeed = Object.freeze(seed.map(freezeEntry));
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
      if (!Number.isFinite(rawLimit) || rawLimit <= 0) {
        throw new RangeError("limit must be a positive number");
      }
      const limit = Math.min(Math.floor(rawLimit), BOUNDED_HISTORY_MAX_ITEMS);
      const slice = frozenSeed.slice(0, limit);
      return freezePage({
        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
        items: slice,
        limit,
        returned: slice.length,
        truncated: frozenSeed.length > slice.length,
        gitCanonical: true,
        mutable: false,
        evaluatedAt: new Date().toISOString(),
        completeness: "BOUNDED_LOT_1",
        note: "Git remains canonical. This page is a bounded documentary/metadata view only.",
      });
    },
  };
}

export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvider {
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
      const limit = Math.min(
        Math.max(1, Math.floor(Number.isFinite(rawLimit) ? rawLimit : 1)),
        BOUNDED_HISTORY_MAX_ITEMS,
      );
      return freezePage({
        availability: "NOT_AVAILABLE",
        items: [],
        limit,
        returned: 0,
        truncated: false,
        gitCanonical: true,
        mutable: false,
        evaluatedAt: new Date().toISOString(),
        completeness: "BOUNDED_LOT_1",
        note: "Bounded history provider unavailable; Git remains canonical.",
      });
    },
  };
}

/** Refuse mutation attempts against a frozen page (contract guard). */
export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
  if (page.mutable !== false || page.gitCanonical !== true) {
    throw new BoundedHistoryMutationError(
      "Bounded history page must declare mutable=false and gitCanonical=true.",
    );
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page as any).items = [];
    throw new BoundedHistoryMutationError(
      "Bounded history page was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
    // TypeError from frozen object — expected
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page.items as any).push({});
    throw new BoundedHistoryMutationError(
      "Bounded history items array was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
}

export const defaultBoundedHistoryProvider =
  createDocumentaryBoundedHistoryProvider();
