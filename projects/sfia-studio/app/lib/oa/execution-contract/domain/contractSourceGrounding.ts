/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — contract source grounding.
 *
 * Reconstructible, typed summary of WHICH repository sources were actually
 * READ in-cycle before an ExecutionContract claimed them as mission inputs.
 * Carried inside the existing `inputs` bag (no new store, no schema bump).
 *
 * Invariants:
 * - search / grep / metadata NEVER establish grounding (read coverage only).
 * - refs only — never file contents (LPS/EC must stay bounded).
 * - absence of durable coverage is UNAVAILABLE, never silent grounding.
 * - remembered reads without matching repository HEAD are not "current".
 * - reads attributed to a different cycle are not silently accepted.
 */

/** Same coverage vocabulary as MW4-S03 read coverage (no parallel taxonomy). */
export type ContractSourceGroundingCoverage =
  | "full"
  | "partial"
  | "failed"
  | "denied"
  | "absent";

export type ContractSourceGroundingOrigin =
  | "current_cycle_read"
  | "remembered_prior_read";

export type ContractSourceGroundingRef = {
  readonly pathOrRef: string;
  readonly coverage: ContractSourceGroundingCoverage;
  readonly origin: ContractSourceGroundingOrigin;
  readonly rememberedAtIso: string | null;
  /** Cycle that produced this durable read, when known. */
  readonly cycleInstanceId: string | null;
  /**
   * Repository HEAD observed when the read was remembered.
   * Required (and matching) for a full read to prove currentness when the
   * contract pins a repositoryHeadSha.
   */
  readonly repositoryHeadSha: string | null;
};

/**
 * Honesty of the grounding claim carried by the contract.
 * NOT_APPLICABLE = mission declares no repository source at all.
 * UNAVAILABLE = durable read coverage unreadable at prepare (never "grounded").
 */
export type ContractSourceGroundingHonesty =
  | "READ_GROUNDED"
  | "PARTIALLY_READ"
  | "UNREAD"
  | "NOT_APPLICABLE"
  | "UNAVAILABLE";

export type ContractSourceGrounding = {
  readonly version: 1;
  readonly honesty: ContractSourceGroundingHonesty;
  readonly repositoryIdentity: string | null;
  readonly repositoryHeadSha: string | null;
  /** Cycle the contract is being prepared for (attribution, not a new store). */
  readonly cycleInstanceId: string | null;
  /** Repository-shaped sources the mission declares as required inputs. */
  readonly declaredRepositorySources: readonly string[];
  /** Durable read facts backing the declared sources (refs only). */
  readonly readRefs: readonly ContractSourceGroundingRef[];
  /** Declared repository sources without a full durable current read. */
  readonly unreadRequiredSources: readonly string[];
  /** Explicit marker — search results are not read coverage. */
  readonly searchIsNotRead: true;
  readonly reconstructibleFrom: "durable_cycle_read_coverage";
};

export const CONTRACT_SOURCE_GROUNDING_INPUT_KEY = "sourceGrounding" as const;

export const CONTRACT_SOURCE_GROUNDING_VERSION = 1 as const;

export const CONTRACT_SOURCE_GROUNDING_UNREAD_CODE =
  "SOURCE_GROUNDING_UNREAD" as const;

const COVERAGE_KINDS: readonly ContractSourceGroundingCoverage[] = [
  "full",
  "partial",
  "failed",
  "denied",
  "absent",
];

const ORIGINS: readonly ContractSourceGroundingOrigin[] = [
  "current_cycle_read",
  "remembered_prior_read",
];

/** Bound the refs folded into EC inputs — summary, never a corpus dump. */
export const CONTRACT_SOURCE_GROUNDING_MAX_REFS = 40;

/** Pseudo-refs used by Product missions (`attempt:…`, `product:…`) are not files. */
export function isRepositorySourceRef(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const ref = value.trim();
  if (!ref) return false;
  // Namespaced durable object refs are not repository documents.
  if (/^[a-z][a-z0-9_-]*:/.test(ref)) return false;
  if (ref.startsWith("/")) return false;
  if (ref.includes("..")) return false;
  return ref.includes("/") || /\.[a-z0-9]{1,8}$/i.test(ref);
}

/** Strip any `#L<start>-<end>` suffix so declared vs read compare on document identity. */
export function contractSourceDocumentPath(pathOrRef: string): string {
  const match = /^(.*)#L\d+-\d+$/.exec(pathOrRef.trim());
  return (match ? match[1]! : pathOrRef).trim();
}

/**
 * A full read proves currentness only when the contract pins a HEAD and the
 * durable ref carries the same HEAD. Missing SHA ⇒ currentness unproven.
 * Wrong cycle attribution ⇒ not accepted for this contract.
 */
export function isCurrentFullRepositoryRead(input: {
  readonly ref: ContractSourceGroundingRef;
  readonly expectedRepositoryHeadSha: string | null;
  readonly expectedCycleInstanceId: string | null;
}): boolean {
  const { ref } = input;
  if (ref.coverage !== "full") return false;
  if (
    input.expectedCycleInstanceId &&
    ref.cycleInstanceId &&
    ref.cycleInstanceId !== input.expectedCycleInstanceId
  ) {
    return false;
  }
  if (input.expectedRepositoryHeadSha) {
    if (!ref.repositoryHeadSha) return false;
    if (ref.repositoryHeadSha !== input.expectedRepositoryHeadSha) return false;
  }
  return true;
}

function normalizeRefs(
  refs: readonly ContractSourceGroundingRef[],
): ContractSourceGroundingRef[] {
  const byPath = new Map<string, ContractSourceGroundingRef>();
  for (const raw of refs) {
    const pathOrRef = contractSourceDocumentPath(raw.pathOrRef ?? "");
    if (!isRepositorySourceRef(pathOrRef)) continue;
    if (!COVERAGE_KINDS.includes(raw.coverage)) continue;
    const origin = ORIGINS.includes(raw.origin)
      ? raw.origin
      : ("remembered_prior_read" as const);
    const cycleInstanceId =
      typeof raw.cycleInstanceId === "string" && raw.cycleInstanceId.trim()
        ? raw.cycleInstanceId.trim()
        : null;
    const repositoryHeadSha =
      typeof raw.repositoryHeadSha === "string" && raw.repositoryHeadSha.trim()
        ? raw.repositoryHeadSha.trim()
        : null;
    const next: ContractSourceGroundingRef = {
      pathOrRef,
      coverage: raw.coverage,
      origin,
      rememberedAtIso:
        typeof raw.rememberedAtIso === "string" && raw.rememberedAtIso.trim()
          ? raw.rememberedAtIso.trim()
          : null,
      cycleInstanceId,
      repositoryHeadSha,
    };
    const existing = byPath.get(pathOrRef);
    // Strongest honest signal wins: a full current read supersedes a partial one.
    if (
      existing &&
      !(existing.coverage !== "full" && next.coverage === "full")
    ) {
      continue;
    }
    byPath.set(pathOrRef, next);
  }
  return [...byPath.values()]
    .sort((a, b) => a.pathOrRef.localeCompare(b.pathOrRef))
    .slice(0, CONTRACT_SOURCE_GROUNDING_MAX_REFS);
}

/**
 * Build the grounding summary from durable cycle facts.
 * `readCoverage: null` means coverage was unreadable — never treated as read.
 */
export function buildContractSourceGrounding(input: {
  readonly declaredSources: readonly string[];
  readonly readCoverage: readonly ContractSourceGroundingRef[] | null;
  readonly repositoryIdentity?: string | null;
  readonly repositoryHeadSha?: string | null;
  readonly cycleInstanceId?: string | null;
}): ContractSourceGrounding {
  const declared = [
    ...new Set(
      input.declaredSources
        .map((s) => (typeof s === "string" ? contractSourceDocumentPath(s) : ""))
        .filter(isRepositorySourceRef),
    ),
  ].sort();

  const repositoryIdentity = input.repositoryIdentity?.trim() || null;
  const repositoryHeadSha = input.repositoryHeadSha?.trim() || null;
  const cycleInstanceId = input.cycleInstanceId?.trim() || null;

  if (input.readCoverage === null) {
    return Object.freeze({
      version: CONTRACT_SOURCE_GROUNDING_VERSION,
      honesty: declared.length === 0 ? "NOT_APPLICABLE" : "UNAVAILABLE",
      repositoryIdentity,
      repositoryHeadSha,
      cycleInstanceId,
      declaredRepositorySources: Object.freeze(declared),
      readRefs: Object.freeze([] as ContractSourceGroundingRef[]),
      unreadRequiredSources: Object.freeze([...declared]),
      searchIsNotRead: true,
      reconstructibleFrom: "durable_cycle_read_coverage",
    });
  }

  const normalized = normalizeRefs(input.readCoverage).filter((ref) => {
    // Drop other-cycle material when preparing for a specific cycle.
    if (
      cycleInstanceId &&
      ref.cycleInstanceId &&
      ref.cycleInstanceId !== cycleInstanceId
    ) {
      return false;
    }
    return true;
  });
  const byPath = new Map(normalized.map((r) => [r.pathOrRef, r] as const));
  const unread = declared.filter((source) => {
    const ref = byPath.get(source);
    if (!ref) return true;
    return !isCurrentFullRepositoryRead({
      ref,
      expectedRepositoryHeadSha: repositoryHeadSha,
      expectedCycleInstanceId: cycleInstanceId,
    });
  });

  // Only refs that back a declared source (or any full current read when
  // nothing is declared) are kept — the summary must stay about mission inputs.
  const retained =
    declared.length === 0
      ? normalized.filter((r) =>
          isCurrentFullRepositoryRead({
            ref: r,
            expectedRepositoryHeadSha: repositoryHeadSha,
            expectedCycleInstanceId: cycleInstanceId,
          }),
        )
      : normalized.filter((r) => declared.includes(r.pathOrRef));

  const honesty: ContractSourceGroundingHonesty =
    declared.length === 0
      ? "NOT_APPLICABLE"
      : unread.length === 0
        ? "READ_GROUNDED"
        : unread.length === declared.length
          ? "UNREAD"
          : "PARTIALLY_READ";

  return Object.freeze({
    version: CONTRACT_SOURCE_GROUNDING_VERSION,
    honesty,
    repositoryIdentity,
    repositoryHeadSha,
    cycleInstanceId,
    declaredRepositorySources: Object.freeze(declared),
    readRefs: Object.freeze(retained),
    unreadRequiredSources: Object.freeze(unread),
    searchIsNotRead: true,
    reconstructibleFrom: "durable_cycle_read_coverage",
  });
}

/** Strict read-back from the durable `inputs` bag (malformed → null). */
export function parseContractSourceGrounding(
  value: unknown,
): ContractSourceGrounding | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const raw = value as Record<string, unknown>;
  if (raw.version !== CONTRACT_SOURCE_GROUNDING_VERSION) return null;
  const honesty = raw.honesty;
  if (
    honesty !== "READ_GROUNDED" &&
    honesty !== "PARTIALLY_READ" &&
    honesty !== "UNREAD" &&
    honesty !== "NOT_APPLICABLE" &&
    honesty !== "UNAVAILABLE"
  ) {
    return null;
  }
  const refsRaw = Array.isArray(raw.readRefs) ? raw.readRefs : [];
  const readRefs = normalizeRefs(
    refsRaw.filter(
      (r): r is ContractSourceGroundingRef =>
        typeof r === "object" &&
        r !== null &&
        typeof (r as ContractSourceGroundingRef).pathOrRef === "string",
    ),
  );
  const asList = (v: unknown): string[] =>
    Array.isArray(v)
      ? v.filter((s): s is string => typeof s === "string" && s.trim().length > 0)
      : [];
  return Object.freeze({
    version: CONTRACT_SOURCE_GROUNDING_VERSION,
    honesty,
    repositoryIdentity:
      typeof raw.repositoryIdentity === "string" && raw.repositoryIdentity.trim()
        ? raw.repositoryIdentity.trim()
        : null,
    repositoryHeadSha:
      typeof raw.repositoryHeadSha === "string" && raw.repositoryHeadSha.trim()
        ? raw.repositoryHeadSha.trim()
        : null,
    cycleInstanceId:
      typeof raw.cycleInstanceId === "string" && raw.cycleInstanceId.trim()
        ? raw.cycleInstanceId.trim()
        : null,
    declaredRepositorySources: Object.freeze(
      asList(raw.declaredRepositorySources),
    ),
    readRefs: Object.freeze(readRefs),
    unreadRequiredSources: Object.freeze(asList(raw.unreadRequiredSources)),
    searchIsNotRead: true,
    reconstructibleFrom: "durable_cycle_read_coverage",
  });
}

export type ContractSourceGroundingHonestyCheck =
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly code: typeof CONTRACT_SOURCE_GROUNDING_UNREAD_CODE;
      readonly message: string;
      readonly unreadSources: readonly string[];
    };

/**
 * Fail-closed gate: a contract may not claim repository grounding it never
 * read currently. Declared repository sources without a durable FULL current
 * read block contract-readiness.
 */
export function assertContractSourceGroundingHonest(
  grounding: ContractSourceGrounding,
): ContractSourceGroundingHonestyCheck {
  if (grounding.declaredRepositorySources.length === 0) {
    return { ok: true };
  }
  const fullyCurrent = new Set(
    grounding.readRefs
      .filter((r) =>
        isCurrentFullRepositoryRead({
          ref: r,
          expectedRepositoryHeadSha: grounding.repositoryHeadSha,
          expectedCycleInstanceId: grounding.cycleInstanceId,
        }),
      )
      .map((r) => r.pathOrRef),
  );
  const unread = grounding.declaredRepositorySources.filter(
    (source) => !fullyCurrent.has(source),
  );
  if (unread.length === 0 && grounding.honesty === "READ_GROUNDED") {
    return { ok: true };
  }
  return {
    ok: false,
    code: CONTRACT_SOURCE_GROUNDING_UNREAD_CODE,
    message:
      "Sources dépôt déclarées sans lecture durable complète et courante — recherche ≠ lecture ; currentness non prouvée ; contrat non prêt (fail-closed) : " +
      (unread.length > 0
        ? unread.join(", ")
        : grounding.unreadRequiredSources.join(", ")),
    unreadSources: unread.length > 0 ? unread : grounding.unreadRequiredSources,
  };
}

/** Compact, bounded disclosure lines (inspection + Cursor prompt parity). */
export function describeContractSourceGrounding(
  grounding: ContractSourceGrounding,
): readonly string[] {
  const lines: string[] = [
    `honnêteté du grounding: ${grounding.honesty} (recherche ≠ lecture)`,
  ];
  if (grounding.cycleInstanceId) {
    lines.push(`cycle: ${grounding.cycleInstanceId}`);
  }
  if (grounding.repositoryIdentity) {
    lines.push(`dépôt: ${grounding.repositoryIdentity}`);
  }
  if (grounding.repositoryHeadSha) {
    lines.push(`baseHeadSha: ${grounding.repositoryHeadSha}`);
  }
  for (const ref of grounding.readRefs) {
    const sha = ref.repositoryHeadSha
      ? `/sha:${ref.repositoryHeadSha.slice(0, 12)}`
      : "/sha:unproven";
    const cycle = ref.cycleInstanceId ? `/cycle:${ref.cycleInstanceId}` : "";
    lines.push(
      `lu: ${ref.pathOrRef} [${ref.coverage}/${ref.origin}${sha}${cycle}]`,
    );
  }
  for (const unread of grounding.unreadRequiredSources) {
    lines.push(`non lu (ne pas revendiquer): ${unread}`);
  }
  return Object.freeze(lines);
}
