# Review pack FULL — T-A7 F11 F13 corrective typing (F-PR-01)

## Meta

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-29 00:27:57 CEST (+0200) |
| Repo | mcleland147/sfia-workspace |
| Workspace | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| Branche | delivery/sfia-studio-t-a7-f11-f13-internal-completion |
| HEAD initial | b4b1defef72832aa5f09d8c55a41d03114e19d94 |
| HEAD final | 5afe09516fd94fff466340dc0c1f877712f13f42 |
| origin/main | 770605bcfa4cc3e403ee2c4615c1a115ccd38458 |
| Upstream | aucun |
| Cycle | 8 — Delivery corrective (+ QA / PR readiness corrective / archi / REX) |
| Profil | Standard |
| Typologie | INC |
| CKC | absent |
| Gate | GO CORRECT T-A7 F11 F13 INTERNAL COMPLETION LOT — FIX TYPESCRIPT OVERLOAD IN BOUNDED HISTORY PROVIDER — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER |
| Handoff PR readiness parent | baf34960… / blob e0e3c9a6… |

## Finding F-PR-01

| Champ | Valeur |
|-------|--------|
| Sévérité | Major |
| Fichier | boundedHistoryRead.ts (~L274) |
| Erreur | TS2322 |
| Impact | npm run typecheck / CI rouge |
| Statut | **RESOLVED** |

## Erreur TypeScript avant correction

```

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

lib/platform/t-a7/boundedHistoryRead.ts(274,9): error TS2322: Type 'readonly BoundedHistoryEntry[] | DocumentaryBoundedHistoryProviderOptions | { seed: any[]; }' is not assignable to type 'DocumentaryBoundedHistoryProviderOptions'.
  Type 'readonly BoundedHistoryEntry[]' has no properties in common with type 'DocumentaryBoundedHistoryProviderOptions'.

```

## Cause racine

`createDocumentaryBoundedHistoryProvider` acceptait une union `DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[]`.
Le ternaire `Array.isArray(options) ? { seed: options } : options` ne narrow **pas** correctement les tableaux `readonly` dans cette version TypeScript : la branche else conserve encore le type array dans l’union assignée à `DocumentaryBoundedHistoryProviderOptions` → TS2322.

## Solution retenue

1. Overloads publics explicites (seed-array historique + options modernes).
2. Type guard `isDocumentarySeedArray` (prédicat utilisateur) — contrairement à `Array.isArray` seul, il exclut l’array de la branche false.
3. Normalisation `normalizeDocumentaryProviderOptions` vers un objet options unique.
4. Aucun `any`, `@ts-ignore`, `@ts-expect-error`, double cast.

## Alternatives rejetées

| Alternative | Motif de rejet |
|-------------|----------------|
| `as DocumentaryBoundedHistoryProviderOptions` | cast non sûr / masque l’erreur |
| `@ts-expect-error` / `@ts-ignore` | interdit par le gate |
| Supprimer l’appel seed-array | casse la compatibilité API / tests |
| Refactor large du module | hors scope |

## Fichiers modifiés

- `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`
- `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`
- docs 14/15 (trailing whitespace only)
- doc 17 + README (trace correctif / gate re-run)

## Commit correctif

```
commit 5afe09516fd94fff466340dc0c1f877712f13f42
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Wed Jul 29 00:27:41 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Wed Jul 29 00:27:41 2026 +0200

    fix(sfia-studio): correct bounded history provider typing

    Resolve TS2322 by adding explicit overloads and a seed-array type
    guard so array and options call forms remain type-safe without casts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../platform/t-a7-bounded-history.test.ts          | 19 ++++++++---
 .../app/lib/platform/t-a7/boundedHistoryRead.ts    | 38 +++++++++++++++++++---
 ...-f11-f13-dependencies-and-runtime-boundaries.md |  2 +-
 ...-f11-f13-completion-options-and-bounded-lots.md |  2 +-
 .../17-f11-f13-internal-completion-lot-results.md  | 21 +++++++++---
 .../t-a7-technical-readiness-framing/README.md     |  7 ++--
 6 files changed, 70 insertions(+), 19 deletions(-)

```

## Typecheck après

```

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


```

EC=0

## Tests

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 1ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 15ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 15ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 47ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 25ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 3ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 4ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-07-28T22:27:36.382Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-07-28T22:27:36.386Z","status":"ok","projectId":"proj-f29c6c74-a51d-4cbc-a4b2-6892d0543d76","durationMs":0}
{"event":"d1.method_mode_hold_blocked","ts":"2026-07-28T22:27:36.387Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-07-28T22:27:36.387Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-07-28T22:27:36.389Z","status":"ok","projectId":"proj-65c9fdd8-8ef3-4846-9ec3-43b22767ea27","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-07-28T22:27:36.389Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-07-28T22:27:36.390Z","status":"ok","projectId":"proj-65c9fdd8-8ef3-4846-9ec3-43b22767ea27","durationMs":1}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-07-28T22:27:36.390Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 14ms

 Test Files  9 passed (9)
      Tests  44 passed (44)
   Start at  00:27:36
   Duration  286ms (transform 217ms, setup 317ms, collect 420ms, tests 126ms, environment 1ms, prepare 343ms)


```

## Validations

| Check | Verdict |
|-------|---------|
| TS2322 reproduit avant | PASS |
| Cause documentée | PASS |
| Correction minimale | PASS |
| Aucun cast non sûr ajouté | PASS (les `as any` restants sont préexistants dans assertBoundedHistoryImmutable mutation probes) |
| seed-array compatible | PASS |
| options compatible | PASS |
| typecheck | PASS |
| tests 9/44 | PASS |
| PREFIX_ONLY / GIT_ONLY / SHA | PASS préservés |
| trailing whitespace 14/15 | PASS |
| git diff --check | PASS |
| aucun push/PR | PASS |

## Risques / réserves

- Les `as any` préexistants dans `assertBoundedHistoryImmutable` (probes d’immutabilité) restent hors de ce correctif.
- PR readiness doit être **rejouée** (gate re-run) avant push/PR.
- Composition PR vs main : toujours 4 commits locaux maintenant (`ed62367`, `dcdc90a`, `b4b1def`, `5afe095`).

## Blockers ouverts

B5 / R1 / R-M01 / HARD OPEN · IAM/Persistence NOT SELECTED · delivery/cutover NOT AUTHORIZED

## Actions non exécutées

push projet · PR · merge · amend · rebase · delivery · cutover · move_agent_to_root · checkout hors branche

## Statut Git final

```
## delivery/sfia-studio-t-a7-f11-f13-internal-completion
?? .tmp-sfia-review/

5afe095 (HEAD -> delivery/sfia-studio-t-a7-f11-f13-internal-completion) fix(sfia-studio): correct bounded history provider typing
b4b1def feat(sfia-studio): complete internal F11 F13 bounded contracts
dcdc90a (docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing) docs(sfia-studio): record F11 F13 completion decisions
ed62367 docs(sfia-studio): close T-A7 lot 1 post-merge and frame next blockers
770605b (origin/main, origin/HEAD) Merge pull request #287 from mcleland147/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6a1933 (origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness, framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness) fix(sfia-studio): harden T-A7 bounded readiness foundations

```

## Gate candidat suivant (NOT CONSUMED)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS RE-RUN — NO PUSH PR MERGE DELIVERY OR CUTOVER`

## Verdict

`T-A7 F11 F13 CORRECTIVE TYPING CYCLE COMPLETE — F-PR-01 TS2322 RESOLVED — BOUNDED HISTORY PROVIDER ARRAY AND OPTIONS CALLS TYPE-SAFE — TYPECHECK PASSED — TESTS PASSED — NO CONTRACT EXPANSION — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS RE-RUN`

---

## Contenu complet — boundedHistoryRead.ts

```typescript
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

```

---

## Contenu complet — t-a7-bounded-history.test.ts

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  BOUNDED_HISTORY_MAX_ITEMS,
  DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  assertBoundedHistoryImmutable,
  assertGitCanonicalSha,
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
  BoundedHistoryMutationError,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

const ALT_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
  it("reads a bounded immutable documentary page with Git canonical SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 2 });
    expect(page.gitCanonical).toBe(true);
    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(page.mutable).toBe(false);
    expect(page.availability).toBe("PARTIAL");
    expect(page.returned).toBe(2);
    expect(page.truncated).toBe(true);
    expect(page.limit).toBe(2);
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.pagination.mode).toBe("PREFIX_ONLY");
    expect(page.pagination.nextCursor).toBeNull();
    expect(page.pagination.hasMore).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(page.completeness).toBe("BOUNDED_L_F11F13");
    assertBoundedHistoryImmutable(page);
  });

  it("enforces PREFIX_ONLY max prefix length", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 10_000 });
    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.pagination.prefixLength).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
  });

  it("accepts prefixLength alias and keeps stable order", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const a = provider.read({ prefixLength: 3 });
    const b = provider.read({ limit: 3 });
    expect(a.items.map((i) => i.id)).toEqual(b.items.map((i) => i.id));
    expect(a.items[0]?.id).toBe("hist-t-a7-f03-f11-f13");
    expect(a.pagination.nextCursor).toBeNull();
  });

  it("covers volume bounds 0/1/max/max+1 semantics", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    expect(() => provider.read({ limit: 0 })).toThrow(/positive/);
    const one = provider.read({ limit: 1 });
    expect(one.returned).toBe(1);
    const max = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS });
    expect(max.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
    expect(max.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    const over = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS + 1 });
    expect(over.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(over.returned).toBe(max.returned);
  });

  it("ties page to injected gitCanonicalSha and rejects invalid SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider({
      gitCanonicalSha: ALT_SHA,
    });
    const page = provider.read({ limit: 1 });
    expect(page.gitCanonicalSha).toBe(ALT_SHA);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "not-a-sha" }),
    ).toThrow(/40-character/);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "abcd" }),
    ).toThrow(/40-character/);
    expect(() => assertGitCanonicalSha("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toThrow();
  });

  it("enriches seed with lot-1 main tip reference", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({
      limit: BOUNDED_HISTORY_MAX_ITEMS,
    });
    const tip = page.items.find((i) => i.id === "hist-t-a7-lot1-merged-main");
    expect(tip).toBeDefined();
    expect(tip?.gitProvenance.ref).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(tip?.metadata.pr).toBe("287");
  });

  it("supports unavailable provider without claiming full archive", () => {
    const page = createUnavailableBoundedHistoryProvider().read();
    expect(page.availability).toBe("NOT_AVAILABLE");
    expect(page.items).toEqual([]);
    expect(page.gitCanonical).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
  });

  it("refuses mutation semantics via contract helper", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
      BoundedHistoryMutationError,
    );
  });

  it("integrates with F11.2 readiness without circular product writes", () => {
    resetMethodModeHoldForTests();
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider({
        gitCanonicalSha: ALT_SHA,
      }),
      historyLimit: 1,
    });
    expect(snap.observed.history.returned).toBe(1);
    expect(snap.observed.history.availability).toBe("PARTIAL");
    expect(snap.observed.history.gitCanonicalSha).toBe(ALT_SHA);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.writeCommands).toBe(false);
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
  });

  it("preserves back-compat seed-array and options overloads", () => {
    const fromArray = createDocumentaryBoundedHistoryProvider([]).read({
      limit: 5,
    });
    expect(fromArray.availability).toBe("EMPTY");
    expect(fromArray.returned).toBe(0);
    expect(fromArray.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);

    const fromOptions = createDocumentaryBoundedHistoryProvider({
      seed: [],
      gitCanonicalSha: ALT_SHA,
    }).read({ limit: 5 });
    expect(fromOptions.availability).toBe("EMPTY");
    expect(fromOptions.gitCanonicalSha).toBe(ALT_SHA);
  });
});

```

---

## Contenu complet — README

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
| **Mise à jour correctif F-PR-01** | 2026-07-29 00:27:00 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` · **implémenté localement** (voir `17`) |
| **Gate N3 (consommé)** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 FOR F11.2 AND F13.4 COMPLETION FRAMING ONLY — DEFINE FINAL SURFACE GAPS DEPENDENCIES IAM PERSISTENCE AND RUNTIME BOUNDARIES — NO IMPLEMENTATION DELIVERY OR CUTOVER` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
| **F11.2** | contrat **INTERNAL_ONLY** durci (L-F11F13) · pas HTTP/UI · **≠ cutover-complete** |
| **F13.4** | seed enrichi + SHA Git · PREFIX_ONLY · GIT_ONLY · **≠ archive complète / cutover** |
| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **Push / PR projet (branche docs courante)** | **aucun** |

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01`–`09` | framing readiness / O2 |
| `10` | lot 1 borné (O3) |
| `11` | post-merge + options N1–N5 |
| `12` | F11.2 completion surface & gaps |
| `13` | F13.4 completion surface & gaps |
| `14` | dépendances & frontières runtime |
| `15` | options de lots bornés futurs |
| `16` | decision pack Morris F11/F13 |
| `17` | résultats lot L-F11F13 (implémentation locale) |

## Lot 1 intégré sur `main`

1. MethodMode hold (défaut actif ; override test-only hors barrel)
2. F11.2 readiness read-only interne
3. F13.4 historique RO borné (Git canonique)

## Cadrage N3 + lot L-F11F13 (local)

Documents `12`–`16` : surfaces, gaps, D1–D8. Document `17` : résultats d’implémentation locale.

**N3 ≠ cutover. L-F11F13 local ≠ push/PR/delivery.**

## Anti-claims

- lot 1 intégré ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
- L-F11F13 local ≠ HTTP public ≠ IAM ≠ persistence
- contrat interne F11 ≠ API réseau
- seed F13 + SHA ≠ store concurrent à Git
- hold ≠ blockers fermés
- tests verts ≠ RUN READY / RGPD VALIDATED

## Gate candidat suivant

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS RE-RUN — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS RE-RUN` (après correctif F-PR-01 TS2322)

## Verdict courant

`T-A7 F11 F13 CORRECTIVE TYPING APPLIED LOCALLY — F-PR-01 TS2322 RESOLVED — TYPECHECK TO BE RECONFIRMED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS RE-RUN`

---

## Historique post-merge (lot 1)

> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.

Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.

Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris (ce cycle).

---

## Historique du lot local pré-intégration

> Section **historique** uniquement. Ne décrit **pas** l’état courant sur `main`.

Avant PR #287, le lot 1 existait uniquement en local sur
`framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness`
au-dessus de `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421`.

À cette étape, le résumé d’état indiquait correctement :

- `Push / PR projet : aucun`
- gate d’intégration candidat `NOT CONSUMED`
- verdict se terminant par `PROJECT BRANCH NOT PUSHED`

Ces formulations étaient **vraies avant** push/PR/merge #287 (2026-07-28 ~21:49–21:52 CEST).
Elles sont **obsolètes** pour l’état courant documenté en tête de ce README.

```

---

## Contenu complet — document 17

```markdown
# 17 — F11 / F13 internal completion lot results (L-F11F13)

| Champ | Valeur |
|-------|--------|
| **Document** | `17-f11-f13-internal-completion-lot-results.md` |
| **Date/heure/fuseau** | 2026-07-28 23:22:34 CEST (+0200) |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| **Branche delivery** | `delivery/sfia-studio-t-a7-f11-f13-internal-completion` |
| **Branche documentaire parent** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
| **Base `origin/main`** | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Commit documentaire** | `dcdc90a0779859ec5d34a91021bab65122447ee5` |
| **Gate consommé** | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — … — NO HTTP UI DELIVERY OR CUTOVER` |
| **Push / PR projet** | **aucun** |

---

## 1. Gate et décisions D1–D8

| ID | Décision | Application locale |
|----|----------|--------------------|
| **D1** | F11 = internal-only | `accessSurface: "INTERNAL_ONLY"` · pas HTTP/UI |
| **D2** | Audit lecture différé | `audit.status: "DEFERRED_EXPLICITLY"` (F11 + F13) |
| **D3** | Seed enrichi + SHA Git | seed 7 entrées · `gitCanonicalSha` obligatoire |
| **D4** | Pagination prefix-only | `paginationMode: "PREFIX_ONLY"` · `nextCursor: null` |
| **D5** | Rétention Git-only | `retention: "GIT_ONLY"` · pas de store |
| **D6** | Lot L-F11F13 | ce document / branche delivery |
| **D7** | IAM NOT SELECTED | champ snapshot + anti-claims |
| **D8** | Persistence NOT SELECTED | champ snapshot + anti-claims |

---

## 2. Implémentation F11.2

| Élément | Résultat |
|---------|----------|
| Module | `app/lib/d1/operationalReadiness.ts` |
| Schéma | `t-a7-f11.2-l-f11f13` |
| Surface | `INTERNAL_ONLY` |
| États | `READY` \| `NOT_READY` \| `UNKNOWN` |
| Règles | hold actif → `NOT_READY` ; health `SIMULATED`/`UNKNOWN` → jamais `READY` ; absence history ≠ READY |
| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` |
| Provenance | hold, blockers, history summary (SHA + PREFIX_ONLY), legacy deps |
| Audit | `DEFERRED_EXPLICITLY` |
| IAM / Persistence | `NOT_SELECTED` / `NOT_SELECTED` |
| HTTP / UI | **absents** |

---

## 3. Implémentation F13.4

| Élément | Résultat |
|---------|----------|
| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` |
| Seed | enrichi (PR #285/#286, lot1 feat/harden, merge #287 `770605bc…`, pack path) |
| SHA | `gitCanonicalSha` validé (`^[0-9a-f]{40}$`) · défaut pin `770605bc…` · injection caller |
| Shell Git runtime | **aucun** |
| Pagination | `PREFIX_ONLY` · `prefixLength`/`limit` · max 50 · ordre stable · pas de multi-page |
| Rétention | `GIT_ONLY` |
| Audit | `DEFERRED_EXPLICITLY` |
| Store / cache / DB | **aucun** |
| Completeness | `BOUNDED_L_F11F13` |

---

## 4. Pagination prefix-only

- `limit` et `prefixLength` sont des alias du même préfixe déterministe.
- Clamp à `BOUNDED_HISTORY_MAX_ITEMS` (50).
- `nextCursor` toujours `null` (D4 — pas de multi-page).
- `hasMore` = `truncated` après slice préfixe.
- Tests bornes : 0 (reject), 1, max, max+1.

---

## 5. SHA Git

- Source : injection bornée `DocumentaryBoundedHistoryProviderOptions.gitCanonicalSha` ou pin `DEFAULT_BOUNDED_HISTORY_GIT_SHA` (= tip main lot 1).
- Validation fail-closed via `assertGitCanonicalSha`.
- Responsabilité caller documentée dans la note de page : pas de `git` shell produit.
- F11 résume `observed.history.gitCanonicalSha`.

---

## 6. Audit différé / rétention Git-only

- Aucun journal d’audit persistant créé.
- Aucune rétention hors Git / packs documentaires.
- RGPD production : **NOT VALIDATED** (inchangé).

---

## 7. Fichiers produit / tests / docs

### Modifiés

- `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`
- `projects/sfia-studio/app/lib/d1/index.ts`
- `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`
- `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`
- `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`
- `…/t-a7-technical-readiness-framing/README.md`
- `…/12-…` · `13-…` (statut post-lot)
- `…/16-…` (référence résultats)

### Créés

- `…/17-f11-f13-internal-completion-lot-results.md` (ce document)

---

## 8. Tests

Commande :

```bash
./node_modules/.bin/vitest run \
  __tests__/d1/t-a7-operational-readiness.test.ts \
  __tests__/platform/t-a7-bounded-history.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/d1/t-a7-method-mode-hold.test.ts \
  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts
```

Résultat : **9 files / 44 tests passed** (2026-07-28 23:22:29 CEST).

Couverture L-F11F13 : contrat F11, UNKNOWN/NOT_READY, INTERNAL_ONLY, SHA invalide, prefix-only, volume, seed enrichi, boundaries hold, absence HTTP route.

---

## 9. Non-régressions / absences vérifiées

- aucune route HTTP readiness/cutover ;
- aucune UI ;
- aucune IAM / session ;
- aucune persistance / migration ;
- aucune write command F11/F13 ;
- MethodMode hold **non modifié** fonctionnellement ;
- OPS1 **non modifié** fonctionnellement ;
- aucune dépendance npm ajoutée ;
- aucun push / PR / merge projet.

---

## 10. Limites

- Health reste `SIMULATED` → readiness ne peut pas être `READY` en conditions normales actuelles.
- SHA pin / injection ≠ lecture live de `git rev-parse` en runtime produit.
- Seed documentaire ≠ archive Git complète.
- Reasons hold `F11_2_INCOMPLETE` / `F13_4_INCOMPLETE` **conservées** (pas de fermeture blockers via hold).
- Audit / RUN prod / RGPD prod restent ouverts / non validés.

---

## 11. Blockers restant ouverts

| Item | Statut |
|------|--------|
| B5 | `OPEN` |
| R1 | `OPEN` |
| R-M01 | `OPEN` |
| HARD | `OPEN HARD` |
| T-A6 COMPLETE | **NOT DECLARED** |
| Option A | **NOT COMPLETE** |
| Delivery / cutover | **NOT AUTHORIZED** |
| IAM | `NOT SELECTED` |
| Persistence | `NOT SELECTED` |
| P08 / P09 | `MISSING` |

---

## 12. Anti-claims

- L-F11F13 local ≠ F11/F13 « cutover-complete » ≠ delivery ready.
- Contrat interne ≠ API HTTP publique.
- Seed + SHA pin ≠ store historique concurrent à Git.
- Tests verts ≠ RUN READY / RGPD VALIDATED.
- Commit local ≠ autorisation push/PR.
- Handoff L3 ≠ push branche projet.

---

## 13. Gate candidat suivant (non consommé)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS RE-RUN — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS RE-RUN**

---

## 14. Correctif F-PR-01 (typings)

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-29 00:27:00 CEST (+0200) |
| **Finding** | F-PR-01 Major — TS2322 `boundedHistoryRead.ts` ~L274 |
| **Cause** | ternaire `Array.isArray` ne narrow pas l’union seed-array \| options |
| **Correction** | overloads publics + normalisation `if/else` typée (pas de `any` / `@ts-ignore`) |
| **API** | seed-array historique + options modernes préservées |
| **Trailing whitespace** | docs 14/15 nettoyés (Minor F-PR-02) |

---

## 15. Verdict

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F-PR-01 TS2322 CORRECTED — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS RE-RUN`

```

---

## Contenu complet — document 14

```markdown
# 14 — F11/F13 dependencies & runtime boundaries

| Champ | Valeur |
|-------|--------|
| **Document** | `14-f11-f13-dependencies-and-runtime-boundaries.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Gate N3** | DECIDED — cadrage only |
| **IAM / Persistence** | **NOT SELECTED** (préservés) |

---

## 1. Cartographie composants (existant)

```
[Git / packs docs] ──canonique──► (humain / CI)
        ▲
        │ provenance refs (seed)
        │
[boundedHistoryRead F13.4] ──summary──► [operationalReadiness F11.2]
        │                                    │
        │                                    ├── readMethodModeHold
        │                                    ├── decideMethodModeTransition
        │                                    └── optional D1Project input
        ▼
   (no durable store)

[selectMethodMode / commands] ──assert hold──► CONFLICT if ACTIVE
[methodModeHold.test-only] ──tests only──► store slot (non-barrel)
```

Ownership :

| Composant | Owner logique | Module |
|-----------|---------------|--------|
| Hold | D1 gouvernance transitions | `lib/d1/methodModeHold*` |
| F11.2 readiness | D1 observation | `lib/d1/operationalReadiness.ts` |
| F13.4 history | platform t-a7 | `lib/platform/t-a7/boundedHistoryRead.ts` |
| Canon paths | platform sfia-context | `canonicalPaths` (lecture) |

---

## 2. Frontières Git / runtime

| Règle | Statut |
|-------|--------|
| Git = vérité historique | **obligatoire** |
| Runtime view = projection | **obligatoire** |
| Pas de write historique | **obligatoire** |
| Seed documentary ≠ full Git walk | **état actuel** |
| Cache / index durable | **interdit sans GO persistence** |
| Concurrent writers | **hors scope** |

---

## 3. Frontières IAM / identité

| Couche | État | Interdit N3 |
|--------|------|-------------|
| AuthN | non présent sur F11/F13 | sélection produit IAM |
| AuthZ | hold = gouvernance transition, pas ACL data | confondre hold et IAM |
| Acteur | non typé sur query | inventer roles |
| Path-policy | distincte | fusionner path-policy↔IAM |
| Fail-closed | hold ACTIVE par défaut | backdoor env pour désactiver hold |

Exposition future HTTP ⇒ **GO IAM** distinct avant claim multi-acteur.

---

## 4. Frontières persistance

| Élément | Autorisé maintenant | Interdit sans GO |
|---------|---------------------|------------------|
| Lecture Git/packs | oui (conceptuel) | — |
| Seed in-memory | oui (lot 1) | — |
| SQLite/DB history store | non | **oui interdit** |
| Migration schéma | non | **oui interdit** |
| Cache process local non durable | candidat futur (doc) | durable/shared store |

---

## 5. API interne / HTTP / UI

| Surface | État | Décision requise |
|---------|------|------------------|
| API interne TS | **existante** (fonctions) | formaliser version contrat |
| Barrel `@/lib/d1` | export F11 + hold produit | ne pas exporter test-only |
| HTTP route | absente | GO surface access |
| UI admin | absente (F11.2) | F11.3 non retenue |
| Server actions write | hors F11/F13 | gate write distinct |

---

## 6. Flux de lecture (cible documentaire)

1. Consommateur autorisé (à décider) appelle readiness **read**.
2. F11 lit hold + (optionnel) projet + F13 summary.
3. F13 lit provider borné ; Git reste référence.
4. Snapshot frozen renvoyé ; audit éventuel (futur).
5. Aucun write ; erreurs fail-closed.

Source de vérité par donnée :

| Donnée | Source |
|--------|--------|
| Historique canonique | Git |
| Projection items | provider F13 (dérivé) |
| Hold | évaluation gouvernance (défaut code) |
| Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |

Données temporaires autorisées : copies frozen, timestamps d’évaluation.
Interdites : files d’attente durables, outbox history, dual-write.

---

## 7. Observabilité / audit / erreurs

| Besoin | Actuel | Cible cadrée |
|--------|--------|--------------|
| Logs hold block/allow | oui (codes) | conserver borné |
| Logs readiness query | non | event optionnel futur |
| Logs history read | non | event optionnel futur |
| Erreurs | RangeError limit ; D1 CONFLICT hold | catalogue codes readiness/history |
| Métriques | non | compteurs lectures (futur) sans PII |

---

## 8. Dépendances

### Obligatoires pour complétion documentaire N3 (ce pack)

- décisions F11.2 / F13.4 déjà adoptées ;
- lot 1 sur main ;
- hold ACTIVE governance ;
- Git canonique.

### Différables

- IAM product ;
- persistence ;
- HTTP ;
- live Git walk ;
- OPS1 isolation runtime evidence (N2) ;
- P08/P09 replacement (N1) ;
- rollback drills (N4).

### Anti-couplages

- F11 ↛ OPS1 imports ;
- F13 ↛ D1 writes ;
- F13 ↛ `method/**` content dump ;
- readiness ↛ auto-clear blockers ;
- test-only ↛ barrels runtime.

---

## 9. Risques de dette

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Traiter lot 1 comme API finale | critères complete §12/§13 |
| Ajouter HTTP sans IAM | stop condition |
| Index durable « pour perf » | persistence NOT SELECTED |
| Seed manuel diverge de Git | exiger preuve provenance |
| F11/F13 circular writes | F11→F13 read only (déjà) |

---

## 10. Matrice capacité (synthèse)

| Capacité | Existant | Gap | Dépendance | Blocker | Preuve | Statut | Décision |
|----------|----------|-----|------------|---------|--------|--------|----------|
| F11 query RO | oui | HTTP/audit/health | hold, F13 | IAM si HTTP | tests + module | PARTIAL | surface access |
| F13 page RO | oui | politique/pagination/audit | Git | persistence si store | tests + module | PARTIAL | read strategy |
| Hold | oui | — | gouvernance | B5/HARD open | tests | PARTIAL control | ne pas fermer |
| IAM | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
| Persistence | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |

```

---

## Contenu complet — document 15

```markdown
# 15 — F11/F13 completion options & bounded lots

| Champ | Valeur |
|-------|--------|
| **Document** | `15-f11-f13-completion-options-and-bounded-lots.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **N3** | cadrage terminé localement · **pas d’implémentation** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` |

---

## 1. Options distinctes (futurs lots)

### L-F11A — Formaliser contrat interne F11 (sans HTTP)

| Champ | Contenu |
|-------|---------|
| Objectif | Versionner le contrat snapshot, codes d’erreur, audit différé/explicite, health UNKNOWN honnête |
| Valeur | réduit ambiguïté « API » sans surface réseau |
| Risques | sous-estimer besoin HTTP plus tard |
| Dette | doc + tests contrat |
| Rollback | revert Git |
| Tests | schema/contract tests |
| Gate | `GO IMPLEMENT T-A7 F11.2 INTERNAL CONTRACT HARDENING — NO HTTP IAM UI DELIVERY OR CUTOVER` |

### L-F11B — Surface HTTP read-only F11 (sans UI)

| Champ | Contenu |
|-------|---------|
| Objectif | Exposer readiness via HTTP GET borné |
| Dépendances | **IAM sélection** ou décision mono-opérateur documentée |
| Risques | exposition prématurée |
| Gate | `GO IMPLEMENT T-A7 F11.2 HTTP READ SURFACE — IAM DECISION REQUIRED FIRST — NO UI WRITE DELIVERY OR CUTOVER` |

### L-F13A — Politique + pagination F13 (in-process)

| Champ | Contenu |
|-------|---------|
| Objectif | Politique d’inclusion, pagination/prefix décidé, tie-to-pack SHA |
| Dépendances | pas de store |
| Gate | `GO IMPLEMENT T-A7 F13.4 POLICY AND PAGINATION — GIT CANONICAL — NO PERSISTENCE IAM DELIVERY OR CUTOVER` |

### L-F13B — Lecteur Git borné (refs only)

| Champ | Contenu |
|-------|---------|
| Objectif | Remplacer/enrichir seed par lecture Git bornée (metadata) |
| Risques | perf, chemins, secrets |
| Gate | `GO IMPLEMENT T-A7 F13.4 BOUNDED GIT METADATA READER — NO CONTENT DUMP PERSISTENCE DELIVERY OR CUTOVER` |

### L-F11F13 — Lot couplé minimal (interne only)

| Champ | Contenu |
|-------|---------|
| Objectif | L-F11A + L-F13A ensemble si périmètre reste interne |
| Condition | **pas** HTTP, **pas** IAM, **pas** persistence |
| Gate | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — NO HTTP IAM PERSISTENCE DELIVERY OR CUTOVER` |

### L-DEFER — Différer

Aucun lot technique F11/F13 ; attendre N1/N2/N4 ou autre priorité.

---

## 2. Lot minimal recommandé (non décidé)

**L-F11F13 (interne)** ou séquentiel **L-F13A → L-F11A**.

Justification challenge :

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | oui — transforme gaps N3 en lots exécutables |
| Blocker réduit ? | ambiguïté complete ; pas B5/HARD |
| Dette ? | code borné + tests |
| Plus simple ? | éviter L-F11B tant qu’IAM NOT SELECTED |
| Repo-first ? | s’appuie sur modules main |
| Gate nécessaire ? | **oui** — N3 ≠ autorisation d’implémenter |

**Statut :** `RECOMMENDED — NOT DECIDED`

**Non recommandé maintenant :** L-F11B (HTTP) avant arbitrage IAM.

---

## 3. Lots complémentaires (hors N3 exécution)

- N2 evidence OPS1 (indépendant) ;
- N1 P08/P09 framing/impl sous gates séparés ;
- N4 rollback framing ;
- cycle rétention F13 si conservation ≠ Git.

---

## 4. Impacts delivery/cutover

Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.

```

---

## Diff complet du commit correctif

```diff
commit 5afe09516fd94fff466340dc0c1f877712f13f42
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Wed Jul 29 00:27:41 2026 +0200

    fix(sfia-studio): correct bounded history provider typing

    Resolve TS2322 by adding explicit overloads and a seed-array type
    guard so array and options call forms remain type-safe without casts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
index a28895f..af34d51 100644
--- a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
@@ -123,10 +123,19 @@ describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
     expect(snap.accessSurface).toBe("INTERNAL_ONLY");
   });

-  it("preserves back-compat seed-array factory signature", () => {
-    const page = createDocumentaryBoundedHistoryProvider([]).read({ limit: 5 });
-    expect(page.availability).toBe("EMPTY");
-    expect(page.returned).toBe(0);
-    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
+  it("preserves back-compat seed-array and options overloads", () => {
+    const fromArray = createDocumentaryBoundedHistoryProvider([]).read({
+      limit: 5,
+    });
+    expect(fromArray.availability).toBe("EMPTY");
+    expect(fromArray.returned).toBe(0);
+    expect(fromArray.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
+
+    const fromOptions = createDocumentaryBoundedHistoryProvider({
+      seed: [],
+      gitCanonicalSha: ALT_SHA,
+    }).read({ limit: 5 });
+    expect(fromOptions.availability).toBe("EMPTY");
+    expect(fromOptions.gitCanonicalSha).toBe(ALT_SHA);
   });
 });
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
index 24ad909..dbdd076 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
@@ -267,13 +267,41 @@ function buildPage(args: {
   });
 }

+function isDocumentarySeedArray(
+  value: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[],
+): value is readonly BoundedHistoryEntry[] {
+  return Array.isArray(value);
+}
+
+function normalizeDocumentaryProviderOptions(
+  optionsOrSeed:
+    | DocumentaryBoundedHistoryProviderOptions
+    | readonly BoundedHistoryEntry[]
+    | undefined,
+): DocumentaryBoundedHistoryProviderOptions {
+  if (optionsOrSeed === undefined) {
+    return {};
+  }
+  if (isDocumentarySeedArray(optionsOrSeed)) {
+    return { seed: optionsOrSeed };
+  }
+  return optionsOrSeed;
+}
+
+/** Historical call: seed array as first argument. */
+export function createDocumentaryBoundedHistoryProvider(
+  seed: readonly BoundedHistoryEntry[],
+): BoundedHistoryProvider;
+/** Modern call: options object (seed and/or gitCanonicalSha). */
+export function createDocumentaryBoundedHistoryProvider(
+  options?: DocumentaryBoundedHistoryProviderOptions,
+): BoundedHistoryProvider;
 export function createDocumentaryBoundedHistoryProvider(
-  options: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[] = {},
+  optionsOrSeed:
+    | DocumentaryBoundedHistoryProviderOptions
+    | readonly BoundedHistoryEntry[] = {},
 ): BoundedHistoryProvider {
-  // Back-compat: previous signature accepted seed array as first arg.
-  const opts: DocumentaryBoundedHistoryProviderOptions = Array.isArray(options)
-    ? { seed: options }
-    : options;
+  const opts = normalizeDocumentaryProviderOptions(optionsOrSeed);

   const frozenSeed = Object.freeze(
     (opts.seed ?? DOCUMENTARY_SEED).map(freezeEntry),
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
index 8412422..50fe8c5 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
@@ -107,7 +107,7 @@ Source de vérité par donnée :
 | Hold | évaluation gouvernance (défaut code) |
 | Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |

-Données temporaires autorisées : copies frozen, timestamps d’évaluation.
+Données temporaires autorisées : copies frozen, timestamps d’évaluation.
 Interdites : files d’attente durables, outbox history, dual-write.

 ---
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
index a247a38..6385788 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
@@ -94,5 +94,5 @@ Justification challenge :

 ## 4. Impacts delivery/cutover

-Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
+Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
 Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
index f85431c..01dd702 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
@@ -185,12 +185,25 @@ Couverture L-F11F13 : contrat F11, UNKNOWN/NOT_READY, INTERNAL_ONLY, SHA invalid

 ## 13. Gate candidat suivant (non consommé)

-`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS RE-RUN — NO PUSH PR MERGE DELIVERY OR CUTOVER`

-**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS**
+**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS RE-RUN**

 ---

-## 14. Verdict
+## 14. Correctif F-PR-01 (typings)

-`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY CONTRACT HARDENED — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION FORMALIZED — AUDIT DEFERRED EXPLICITLY — RETENTION GIT-ONLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — TESTS PASSED — BLOCKERS B5 R1 R-M01 AND HARD REMAIN OPEN — NO HTTP UI PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
+| Champ | Valeur |
+|-------|--------|
+| **Date** | 2026-07-29 00:27:00 CEST (+0200) |
+| **Finding** | F-PR-01 Major — TS2322 `boundedHistoryRead.ts` ~L274 |
+| **Cause** | ternaire `Array.isArray` ne narrow pas l’union seed-array \| options |
+| **Correction** | overloads publics + normalisation `if/else` typée (pas de `any` / `@ts-ignore`) |
+| **API** | seed-array historique + options modernes préservées |
+| **Trailing whitespace** | docs 14/15 nettoyés (Minor F-PR-02) |
+
+---
+
+## 15. Verdict
+
+`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F-PR-01 TS2322 CORRECTED — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS RE-RUN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index 24e0f9c..45a1c9d 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -5,6 +5,7 @@
 | **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
 | **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
 | **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
+| **Mise à jour correctif F-PR-01** | 2026-07-29 00:27:00 CEST (+0200) |
 | **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
 | **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
 | **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` · **implémenté localement** (voir `17`) |
@@ -60,13 +61,13 @@ Documents `12`–`16` : surfaces, gaps, D1–D8. Document `17` : résultats d’

 ## Gate candidat suivant

-`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS RE-RUN — NO PUSH PR MERGE DELIVERY OR CUTOVER`

-**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS`
+**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS RE-RUN` (après correctif F-PR-01 TS2322)

 ## Verdict courant

-`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — TESTS PASSED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
+`T-A7 F11 F13 CORRECTIVE TYPING APPLIED LOCALLY — F-PR-01 TS2322 RESOLVED — TYPECHECK TO BE RECONFIRMED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS RE-RUN`

 ---


```

---

## INSTRUCTION CHATGPT — REVIEW HANDOFF

Lire depuis Git :
- branche : sfia/review-handoff
- fichier : sfia-review-handoff/latest-chatgpt-review.md

Vérifier F-PR-01 résolu, typecheck, tests, commit 5afe095…, absence cast non sûr, verdict READY FOR PR READINESS RE-RUN.
