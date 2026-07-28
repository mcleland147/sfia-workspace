/**
 * T-A7 L-F11F13 — F13.4 bounded read-only history foundation.
 * Git remains canonical. Seed enriched + explicit gitCanonicalSha.
 * Pagination: PREFIX_ONLY. Retention: GIT_ONLY. Audit: deferred.
 * No migration, durable store, UI, HTTP, ACL/IAM.
 */

export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

/** Pinned tip for documentary seed (main after PR #287). Caller may override. */
export const DEFAULT_BOUNDED_HISTORY_GIT_SHA =
  "770605bcfa4cc3e403ee2c4615c1a115ccd38458" as const;

export type BoundedHistoryAvailability =
  | "PARTIAL"
  | "NOT_AVAILABLE"
  | "EMPTY";

export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

export type BoundedHistoryPaginationMode = "PREFIX_ONLY";

export type BoundedHistoryRetention = "GIT_ONLY";

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

export interface BoundedHistoryPagination {
  readonly mode: BoundedHistoryPaginationMode;
  /** Prefix length requested (clamped). */
  readonly prefixLength: number;
  /** Always null — D4 forbids multi-page cursors in this lot. */
  readonly nextCursor: null;
  readonly hasMore: boolean;
}

export interface BoundedHistoryAudit {
  readonly status: "DEFERRED_EXPLICITLY";
  readonly detail: string;
}

export interface BoundedHistoryPage {
  readonly availability: BoundedHistoryAvailability;
  readonly items: readonly BoundedHistoryEntry[];
  readonly limit: number;
  readonly returned: number;
  readonly truncated: boolean;
  readonly gitCanonical: true;
  /** Full-length Git object id tying this page to a canonical tip. */
  readonly gitCanonicalSha: string;
  readonly pagination: BoundedHistoryPagination;
  readonly paginationMode: BoundedHistoryPaginationMode;
  readonly retention: BoundedHistoryRetention;
  readonly audit: BoundedHistoryAudit;
  readonly mutable: false;
  readonly evaluatedAt: string;
  readonly completeness: "BOUNDED_L_F11F13";
  readonly note: string;
}

export interface BoundedHistoryReadRequest {
  /** Prefix length (PREFIX_ONLY). Alias of historical `limit`. */
  readonly limit?: number;
  readonly prefixLength?: number;
}

export interface DocumentaryBoundedHistoryProviderOptions {
  readonly seed?: readonly BoundedHistoryEntry[];
  /**
   * Canonical Git SHA for this page. Injected by caller / default pinned tip.
   * No arbitrary git shell in product runtime.
   */
  readonly gitCanonicalSha?: string;
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

const GIT_SHA_FULL_RE = /^[0-9a-f]{40}$/i;

/** Validate a full Git object id (40 hex). Fail closed on invalid input. */
export function assertGitCanonicalSha(sha: string): string {
  if (typeof sha !== "string" || !GIT_SHA_FULL_RE.test(sha.trim())) {
    throw new RangeError(
      "gitCanonicalSha must be a 40-character hexadecimal Git object id",
    );
  }
  return sha.trim().toLowerCase();
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
    pagination: Object.freeze({ ...page.pagination }),
    audit: Object.freeze({ ...page.audit }),
  });
}

function resolvePrefixLength(request: BoundedHistoryReadRequest): number {
  const raw =
    request.prefixLength !== undefined ? request.prefixLength : request.limit;
  const value = raw ?? BOUNDED_HISTORY_MAX_ITEMS;
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError("prefixLength/limit must be a positive number");
  }
  return Math.min(Math.floor(value), BOUNDED_HISTORY_MAX_ITEMS);
}

/** Documentary/Git references — enriched seed, ordered stably (prefix-only). */
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
    id: "hist-t-a7-technical-readiness-frame",
    category: "readiness-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:40:10.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563",
    },
    metadata: {
      pack: "t-a7-technical-readiness-framing",
      commit: "docs-frame",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-feat",
    category: "readiness-foundation",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T19:20:08.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "47e26fdc851b82588aa5225aca84307543147160",
    },
    metadata: {
      commit: "feat-bounded-foundations",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-harden",
    category: "readiness-foundation",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T19:37:59.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "b6a19335f5116940175f5986492e3693722563bc",
    },
    metadata: {
      commit: "fix-harden-override",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-merged-main",
    category: "integration",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T19:52:20.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "770605bcfa4cc3e403ee2c4615c1a115ccd38458",
    },
    metadata: {
      pr: "287",
      note: "lot-1-integrated-on-main",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness-pack-path",
    category: "documentary-pack",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T22:45:18.000Z",
    gitProvenance: {
      kind: "documentary-pack",
      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
    },
    metadata: {
      lot: "n3-completion-framing",
    },
  }),
]);

function buildPage(args: {
  availability: BoundedHistoryAvailability;
  items: readonly BoundedHistoryEntry[];
  prefixLength: number;
  truncated: boolean;
  gitCanonicalSha: string;
  note: string;
}): BoundedHistoryPage {
  return freezePage({
    availability: args.availability,
    items: args.items,
    limit: args.prefixLength,
    returned: args.items.length,
    truncated: args.truncated,
    gitCanonical: true,
    gitCanonicalSha: args.gitCanonicalSha,
    pagination: {
      mode: "PREFIX_ONLY",
      prefixLength: args.prefixLength,
      nextCursor: null,
      hasMore: args.truncated,
    },
    paginationMode: "PREFIX_ONLY",
    retention: "GIT_ONLY",
    audit: {
      status: "DEFERRED_EXPLICITLY",
      detail: "D2 — read audit deferred; no persistent access journal.",
    },
    mutable: false,
    evaluatedAt: new Date().toISOString(),
    completeness: "BOUNDED_L_F11F13",
    note: args.note,
  });
}

function isDocumentarySeedArray(
  value: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[],
): value is readonly BoundedHistoryEntry[] {
  return Array.isArray(value);
}

function normalizeDocumentaryProviderOptions(
  optionsOrSeed:
    | DocumentaryBoundedHistoryProviderOptions
    | readonly BoundedHistoryEntry[]
    | undefined,
): DocumentaryBoundedHistoryProviderOptions {
  if (optionsOrSeed === undefined) {
    return {};
  }
  if (isDocumentarySeedArray(optionsOrSeed)) {
    return { seed: optionsOrSeed };
  }
  return optionsOrSeed;
}

/** Historical call: seed array as first argument. */
export function createDocumentaryBoundedHistoryProvider(
  seed: readonly BoundedHistoryEntry[],
): BoundedHistoryProvider;
/** Modern call: options object (seed and/or gitCanonicalSha). */
export function createDocumentaryBoundedHistoryProvider(
  options?: DocumentaryBoundedHistoryProviderOptions,
): BoundedHistoryProvider;
export function createDocumentaryBoundedHistoryProvider(
  optionsOrSeed:
    | DocumentaryBoundedHistoryProviderOptions
    | readonly BoundedHistoryEntry[] = {},
): BoundedHistoryProvider {
  const opts = normalizeDocumentaryProviderOptions(optionsOrSeed);

  const frozenSeed = Object.freeze(
    (opts.seed ?? DOCUMENTARY_SEED).map(freezeEntry),
  );
  const gitCanonicalSha = assertGitCanonicalSha(
    opts.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  );

  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const prefixLength = resolvePrefixLength(request);
      const slice = frozenSeed.slice(0, prefixLength);
      return buildPage({
        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
        items: slice,
        prefixLength,
        truncated: frozenSeed.length > slice.length,
        gitCanonicalSha,
        note:
          "Git remains canonical (D5 GIT_ONLY). PREFIX_ONLY pagination (D4). " +
          "Page tied to injected/pinned gitCanonicalSha — not a live git shell.",
      });
    },
  };
}

export function createUnavailableBoundedHistoryProvider(
  options: Pick<DocumentaryBoundedHistoryProviderOptions, "gitCanonicalSha"> = {},
): BoundedHistoryProvider {
  const gitCanonicalSha = assertGitCanonicalSha(
    options.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  );
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      let prefixLength = 1;
      try {
        prefixLength = resolvePrefixLength(request);
      } catch {
        prefixLength = 1;
      }
      return buildPage({
        availability: "NOT_AVAILABLE",
        items: [],
        prefixLength,
        truncated: false,
        gitCanonicalSha,
        note: "Bounded history provider unavailable; Git remains canonical (GIT_ONLY).",
      });
    },
  };
}

/** Refuse mutation attempts against a frozen page (contract guard). */
export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
  if (
    page.mutable !== false ||
    page.gitCanonical !== true ||
    page.retention !== "GIT_ONLY" ||
    page.paginationMode !== "PREFIX_ONLY"
  ) {
    throw new BoundedHistoryMutationError(
      "Bounded history page must declare mutable=false, gitCanonical=true, GIT_ONLY, PREFIX_ONLY.",
    );
  }
  assertGitCanonicalSha(page.gitCanonicalSha);
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page as any).items = [];
    throw new BoundedHistoryMutationError(
      "Bounded history page was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
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
