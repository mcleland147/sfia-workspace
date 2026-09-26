# NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — SAME-MACRO CLOSURE

- **Date/heure:** 2026-09-26T19:42:38+0200
- **Profil:** Critical
- **Macro:** NATIVE-EXECUTION-LOOP-CONVERGENCE-01 (continuation — NOT a micro-cycle)
- **Verdict of this cycle: READY FOR COMMIT**

## 1. Objectif / qualification

Fermer les gaps restants du premier incrément (handoff `6860dff6` / blob `cb1a04d2`) pour aboutir à une boucle Product native unique :
cycle grounding → ExecutionContract → inspection/projection → Cursor HOW + enforcement → ExecutionReport → Evidence/RB/CR → Nora contract-first → Pilote.

## 2. Local Git Truth Check (initial)

| Check | Value |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace` |
| branch | `feat/sfia-studio-native-execution-loop-convergence-01` |
| HEAD | `0e68c15339cea90926c7b2f745a5ecf773020aec` |
| origin/main | `0e68c15339cea90926c7b2f745a5ecf773020aec` (PR #526) |
| staged | **none** |
| prior handoff tip | `6860dff6a1899c64bfeea54900ea95279b764896` |
| prior handoff blob | `cb1a04d277906ed9b06737e786731967f4851438` |
| continuity | first-increment uncommitted files present and matching prior handoff zones — **preserved** (no reset/stash/clean) |

## 3. Relation au premier incrément

Premier incrément (NOT READY) livré : gateway mission-first composeBoundedInstruction ; ContractSourceGrounding bridge ; mission semantics inputs ; CR criteria overlay ; inspection/prompt parity ; #526 non-reg.

**Dettes ouvertes alors :** file-path mission grounding dormant ; cycle/currentness ; ExecutionReport enrichment ; Nora deepen ; docs_write criteria ; manual_review short-circuit ; overlay WHAT residual.

Ce cycle consomme le handoff précédent et ferme ces dettes **dans le même macro**.

## 4. Sources lues (rôle / couverture)

| Source | Rôle | Couverture |
|---|---|---|
| Handoff `sfia/review-handoff@6860dff6` latest-chatgpt-review.md | état exact incrément 1, dettes, exit proof | index + EP/debt sections |
| Build Doctrine / Roadmap / C1 | gouvernance READ ONLY | ciblée (pas de modif) |
| Framing 30–37 | doctrine v3 READ ONLY | ciblée responsibilities EC/Evidence/authority |
| CKC 08-delivery | guidance cognitive | confirmation content-validated |
| Template v2.6 + operating model | harvest fonctionnel | responsabilités WHAT/HOW/report |
| Code first-increment + consumers | implémentation | full sur zones touchées |

Aucune doctrine / Build Doctrine / Roadmap / C1 / method / prompts modifiée.

## 5. Architecture finale (après closure)

```
Nora turn + repository tools + readCoverage
  → groundingDurability (cycleInstanceId? + repositoryHeadSha?)
  → ProductMissionFields.sourcesToRead (repo paths from DecisionBasis + cycle facts)
  → prepare (currentness gate, NOT second brain)
  → ExecutionContract.inputs[sourceGrounding|acceptanceCriteria|validationPlan|reportRequirements]
  → inspectionDisclosure ≡ Cursor prompt (parity)
  → gateway: EC mission + enforcement overlay ONLY (no competing WHAT)
  → CursorExecutionReport.1 (enriched optional fields; claim ≠ Evidence)
  → normalizeProductExecutionOutcome (report | pre_start | binding_mismatch)
  → Evidence / ReviewBundle / ContractResult (same engine; criteria outrank legacy)
  → W3-C / postEvidenceNoraAnalysis (contract-first facts)
  → Recommendation ≠ HumanDecision
```

## 6. Workstream results

### WS1 — Product repo grounding reachability — PASS
- `repositorySourcesFromProductFacts` extrait `targetPath` + `scopeIn` repo-shaped depuis DecisionBasis.
- missions recovery/clarify déclarent ces chemins dans `sourcesToRead` / `scopeIn`.
- pseudo-refs `attempt:`/`product:` restent exclus via `isRepositorySourceRef`.
- prepare gate `SOURCE_GROUNDING_UNREAD` s'exerce dès qu'un chemin repo est déclaré sans full current read.

### WS2 — Cycle scope + currentness — PASS (extension marker MW4, pas nouvelle persistence)
- `GroundingReadCoverageRef` + `ContractSourceGroundingRef` portent optionnellement `cycleInstanceId` / `repositoryHeadSha`.
- `rememberReadCoverage` stamp cycle depuis orchestrateTurn / runNoraCognitiveTurn.
- `isCurrentFullRepositoryRead` : full ≠ current sans SHA match quand le contrat pin un HEAD ; other-cycle dropped.
- Fail-closed : stale / unproven SHA → unread.

### WS3 — Overlay enforcement-only — PASS
- docs_write overlay : retirés Brief / Exigences / Scope IN·OUT / Sorties / Type d'artifact.
- Conservés : exact path, allowlist, noDelete, no shell/git, fingerprint triad, TOCTOU write-mode.
- Git overlays inchangés (enforcement GCEC).

### WS4 — ExecutionReport — PASS (schema `oa.cursor-execution-report.1` compatible)
- Champs additifs optionnels : contractFingerprint, executionContractVersion, workPerformed, assessments, blockers, stopConditionTriggered, reservations, evidenceClaims, diagnostic aliases.
- Statuses : succeeded | failed | stopped | timeout (pas de partial/blocked décoratif).
- Binding étendu : fingerprint / version mismatch fail-closed.
- Pre-start → `normalizePreStartRejectionOutcome` (pas de faux Cursor report).

### WS5 — Unified outcome — PASS
- Module `normalizeProductExecutionOutcome` : report / pre_start_reject / binding_mismatch.
- Même circuit d'analyse aval ; faits différents, pas de Success/Stop/Failure workflows Product.

### WS6 — Nora contract-first — PASS
- `PostEvidenceAnalysisFacts` enrichi : contractObjective, acceptanceCriteriaSummary, expectedOutputsSummary, validationPlanSummary, stop/blockers.
- `ANALYSIS_SYSTEM` impose l'ordre CONTRAT→RÉSULTAT→PREUVE→CONFORMITÉ→IMPACT→RECOMMANDATION.
- w3cPostEvidenceLoop injecte les critères scellés depuis l'EC.

### WS7 — manual_review fail-closed — PASS
- Si critère structuré bound : evaluation du critère ; `manual_review` → NOT_PROVEN ; **pas de fallthrough legacy PASS**.
- Legacy templates uniquement si **aucun** critère applicable.

### WS8 — docs_write criteria — PASS
- `deriveDocsWriteAcceptanceCriteria` / `deriveDocsWriteValidationPlan` au prepare M3.
- Même modèle `ContractAcceptanceCriterion` ; BOUNDED aggregate EO scellé `manual_review` (anti faux SUCCESS).
- Named EO MATERIALIZED / MIN_CONFORMITY → deterministic kinds.

### WS9 — Validation plan — PASS (thin, mission-derived)
- Mission : no-mutating check.
- Docs_write : path allowlist + noDelete (+ sealed validationExpectations).

### WS10 — D1 STRUCTURE — BRIDGE ACCEPTABLE AS GOVERNED DEBT
- `acceptanceCriteria` / `validationPlan` / `reportRequirements` / `sourceGrounding` restent dans `inputs` typés.
- Suffisant pour inspection, fingerprint, projection, CR, Nora, compat.
- First-class promotion **souhaitable** qualité domaine, **pas requise** pour intégrité sémantique de ce macro.
- Verdict D1 : **BRIDGE ACCEPTABLE AS GOVERNED DEBT** (non-bloquant).

## 7. Fichiers créés

### NEW `projects/sfia-studio/app/lib/oa/execution-contract/domain/contractSourceGrounding.ts` (414 lines)

```typescript
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

```

### NEW `projects/sfia-studio/app/lib/oa/execution-contract/domain/contractMissionSemantics.ts` (155 lines)

```typescript
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — strongly-named mission semantics
 * carried in the existing ExecutionContract `inputs` bag.
 *
 * Minimal compatible extension (no schema bump): acceptance criteria,
 * validation plan and report requirements become structured, inspectable and
 * fingerprint-material instead of living only in free-form templates.
 *
 * A criterion is PASS-eligible only when its kind is deterministically
 * evaluable by an existing Result Semantic. `manual_review` / unknown kinds
 * stay NOT_PROVEN — never an LLM auto-PASS.
 */

export const CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY =
  "acceptanceCriteria" as const;
export const CONTRACT_VALIDATION_PLAN_INPUT_KEY = "validationPlan" as const;
export const CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY =
  "reportRequirements" as const;

/**
 * Deterministic kinds map 1:1 onto checks already implemented by the
 * docs-write / mission-result Contract Result semantics.
 */
export type ContractAcceptanceCriterionKind =
  /** Artifact Evidence.location must equal the bound targetPath. */
  | "artifact_at_path"
  /** Server-owned min-conformity attestation must bind the artifact. */
  | "artifact_conformity_attested"
  /** Mission payload diagnosticSummary must be non-empty. */
  | "mission_diagnostic"
  /** Mission payload recommendedNextProductStep must be non-empty. */
  | "mission_next_step"
  /** Mission payload inspectedDurableTrace must cite the Attempt. */
  | "mission_trace"
  /** Not machine-checkable — never PASS from the evaluator. */
  | "manual_review";

export type ContractAcceptanceCriterion = {
  readonly criterionId: string;
  readonly statement: string;
  readonly kind: ContractAcceptanceCriterionKind;
  /** Exact EC expectedOutputs entry this criterion grounds (when bound). */
  readonly expectedOutputRef: string | null;
  /** Repo-relative path for path-bound criteria (never absolute). */
  readonly targetPath: string | null;
};

const DETERMINISTIC_KINDS: readonly ContractAcceptanceCriterionKind[] = [
  "artifact_at_path",
  "artifact_conformity_attested",
  "mission_diagnostic",
  "mission_next_step",
  "mission_trace",
];

const ALL_KINDS: readonly ContractAcceptanceCriterionKind[] = [
  ...DETERMINISTIC_KINDS,
  "manual_review",
];

export function isContractAcceptanceCriterionKind(
  value: unknown,
): value is ContractAcceptanceCriterionKind {
  return (
    typeof value === "string" &&
    (ALL_KINDS as readonly string[]).includes(value)
  );
}

export function isDeterministicAcceptanceCriterionKind(
  kind: ContractAcceptanceCriterionKind,
): boolean {
  return (DETERMINISTIC_KINDS as readonly string[]).includes(kind);
}

function trimmedOrNull(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

/** Strict parse from the durable inputs bag — malformed entries are dropped. */
export function parseContractAcceptanceCriteria(
  value: unknown,
): readonly ContractAcceptanceCriterion[] {
  if (!Array.isArray(value)) return Object.freeze([]);
  const out: ContractAcceptanceCriterion[] = [];
  const seen = new Set<string>();
  for (const raw of value) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) continue;
    const entry = raw as Record<string, unknown>;
    const criterionId = trimmedOrNull(entry.criterionId);
    const statement = trimmedOrNull(entry.statement);
    const kind = entry.kind;
    if (!criterionId || !statement) continue;
    if (!isContractAcceptanceCriterionKind(kind)) continue;
    if (seen.has(criterionId)) continue;
    seen.add(criterionId);
    out.push(
      Object.freeze({
        criterionId,
        statement,
        kind,
        expectedOutputRef: trimmedOrNull(entry.expectedOutputRef),
        targetPath: trimmedOrNull(entry.targetPath),
      }),
    );
  }
  return Object.freeze(out);
}

/** Read a strongly-named string list input (validationPlan / reportRequirements). */
export function parseContractStringListInput(
  value: unknown,
): readonly string[] {
  if (!Array.isArray(value)) return Object.freeze([]);
  const out = value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
  return Object.freeze([...new Set(out)]);
}

/**
 * Resolve the criterion that grounds an expectedOutputs entry.
 * Exact expectedOutputRef match only — no fuzzy / NLP matching.
 */
export function findAcceptanceCriterionForExpectedOutput(
  criteria: readonly ContractAcceptanceCriterion[],
  expectation: string,
): ContractAcceptanceCriterion | null {
  const target = expectation.trim();
  if (!target) return null;
  const matches = criteria.filter((c) => c.expectedOutputRef === target);
  // Ambiguous duplicates → fail closed (caller falls back to fixed grammars).
  return matches.length === 1 ? matches[0]! : null;
}

/** Compact, bounded disclosure lines (inspection + Cursor prompt parity). */
export function describeContractAcceptanceCriteria(
  criteria: readonly ContractAcceptanceCriterion[],
): readonly string[] {
  return Object.freeze(
    criteria.map(
      (c) =>
        `${c.criterionId} [${c.kind}${
          isDeterministicAcceptanceCriterionKind(c.kind)
            ? ""
            : " — non auto-évaluable"
        }] ${c.statement}` +
        (c.expectedOutputRef ? ` → EO: ${c.expectedOutputRef}` : "") +
        (c.targetPath ? ` → path: ${c.targetPath}` : ""),
    ),
  );
}

```

### NEW `projects/sfia-studio/app/features/project-assistant/w2/resolveContractSourceGrounding.ts` (140 lines)

```typescript
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — lightweight prepare-time bridge
 * between durable cycle read facts and ExecutionContract source grounding.
 *
 * Reads only what is already durable (MW4-S01 grounding refs / MW4-S03 read
 * coverage). Never re-runs cognitive analysis, never calls a model, never
 * loads file contents.
 *
 * Unreadable coverage returns `null` → grounding is UNAVAILABLE, never assumed.
 * Wrong-cycle and SHA-stale refs are filtered / tagged honestly.
 */

import {
  ProductSqliteSession,
  acceptGroundingRefsForProject,
  loadGroundingRefsFromSession,
  resolveNoraSessionSqlitePath,
} from "@/lib/nora-cognitive-runtime";
import {
  buildContractSourceGrounding,
  contractSourceDocumentPath,
  isRepositorySourceRef,
  type ContractSourceGrounding,
  type ContractSourceGroundingCoverage,
  type ContractSourceGroundingRef,
} from "@/lib/oa/execution-contract";

/**
 * Durable read facts for a project/cycle, or `null` when unreadable.
 * Injected so prepare stays deterministic in tests (no implicit sqlite).
 */
export type ContractSourceGroundingReader = (input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly repositoryHeadSha?: string | null;
}) => Promise<readonly ContractSourceGroundingRef[] | null>;

const COVERAGE_KINDS: readonly ContractSourceGroundingCoverage[] = [
  "full",
  "partial",
  "failed",
  "denied",
  "absent",
];

/**
 * Production reader — durable Nora session grounding record (read coverage).
 * Cycle-scoped when the durable ref carries a cycle; SHA-stamped when present.
 */
export function createNoraSessionContractSourceGroundingReader(options?: {
  readonly sessionDbPath?: string;
  readonly sessionKey?: string;
}): ContractSourceGroundingReader {
  return async ({ projectId, cycleInstanceId }) => {
    let session: ProductSqliteSession | null = null;
    try {
      const dbPath = resolveNoraSessionSqlitePath(options?.sessionDbPath);
      session = new ProductSqliteSession({
        projectId,
        dbPath,
        sessionKey: options?.sessionKey ?? "f1-default",
      });
      const record = acceptGroundingRefsForProject(
        await loadGroundingRefsFromSession(session),
        projectId,
      );
      if (!record) return [];
      const expectedCycle = cycleInstanceId.trim();
      // repositoryHeadSha is enforced by buildContractSourceGrounding currentness.
      return (record.readCoverage ?? [])
        .filter(
          (ref) =>
            isRepositorySourceRef(contractSourceDocumentPath(ref.pathOrRef)) &&
            COVERAGE_KINDS.includes(ref.coverage),
        )
        .filter((ref) => {
          const refCycle = ref.cycleInstanceId?.trim() || null;
          // Materially other-cycle reads are not accepted for this contract.
          if (expectedCycle && refCycle && refCycle !== expectedCycle) {
            return false;
          }
          return true;
        })
        .map((ref) => {
          const refCycle = ref.cycleInstanceId?.trim() || null;
          const refSha = ref.repositoryHeadSha?.trim() || null;
          const sameCycle =
            expectedCycle.length > 0 && refCycle === expectedCycle;
          return {
            pathOrRef: contractSourceDocumentPath(ref.pathOrRef),
            coverage: ref.coverage,
            origin: (sameCycle
              ? "current_cycle_read"
              : "remembered_prior_read") as ContractSourceGroundingRef["origin"],
            rememberedAtIso: ref.rememberedAtIso ?? null,
            cycleInstanceId: refCycle,
            repositoryHeadSha: refSha,
          };
        });
    } catch {
      // Unreadable durable coverage — fail honest (UNAVAILABLE), not grounded.
      return null;
    } finally {
      session?.close();
    }
  };
}

/**
 * Compose the contract-ready grounding summary for prepare.
 * Missing reader ⇒ `null` coverage ⇒ UNAVAILABLE honesty (never a claim).
 */
export async function resolveContractSourceGroundingForPrepare(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly declaredSources: readonly string[];
  readonly repositoryIdentity?: string | null;
  readonly repositoryHeadSha?: string | null;
  readonly reader?: ContractSourceGroundingReader | null;
}): Promise<ContractSourceGrounding> {
  let coverage: readonly ContractSourceGroundingRef[] | null = null;
  if (input.reader) {
    try {
      coverage = await input.reader({
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        repositoryHeadSha: input.repositoryHeadSha ?? null,
      });
    } catch {
      coverage = null;
    }
  }
  return buildContractSourceGrounding({
    declaredSources: input.declaredSources,
    readCoverage: coverage,
    repositoryIdentity: input.repositoryIdentity ?? null,
    repositoryHeadSha: input.repositoryHeadSha ?? null,
    cycleInstanceId: input.cycleInstanceId,
  });
}

```

### NEW `projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts` (203 lines)

```typescript
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — structured mission semantics folded
 * into ExecutionContract.inputs at prepare time.
 *
 * Pure derivation from already-derived durable ProductMissionFields.
 * Criteria kinds map onto checks the mission Result Semantic already performs
 * (no new evaluator, no new grammar). Anything not machine-checkable stays
 * `manual_review` so it can never auto-PASS.
 */

import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  MISSION_NEXT_STEP_EO_TEMPLATES,
  MISSION_TRACE_EO_PREFIX,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  type ContractAcceptanceCriterion,
} from "@/lib/oa/execution-contract";
import type { ProductMissionFields } from "./deriveActualExecutionWorkFromProductContext";

/** Deterministic check available for the "no forbidden effect" mission rule. */
export const MISSION_VALIDATION_NO_MUTATING_EFFECT =
  "Aucun effet mutant exécuté (filesystem / git) — vérifié sur le rapport de mission" as const;

export const DOCS_WRITE_VALIDATION_PATH_ALLOWLIST =
  "Chemin cible et allowlist respectés — aucun fichier hors périmètre" as const;

export const DOCS_WRITE_VALIDATION_NO_DELETE =
  "Aucun fichier supprimé (noDelete)" as const;

export const MISSION_REPORT_REQUIREMENTS: readonly string[] = Object.freeze([
  "reportId propre au rapport",
  "executionContractId exact",
  "attemptId exact",
  "status: succeeded | failed | stopped | timeout",
  "diagnosticSummary non vide",
  "recommendedNextProductStep non vide",
  "authorizedEffectsExecuted (liste explicite, vide si aucune)",
]);

function criterionIdFor(ordinal: number, suffix: string): string {
  return `acc:${String(ordinal).padStart(2, "0")}:${suffix}`;
}

/**
 * Map each mission expectedOutput to a structured acceptance criterion.
 * Bound 1:1 by exact EO string — never fuzzy.
 */
export function deriveMissionAcceptanceCriteria(
  mission: ProductMissionFields,
): readonly ContractAcceptanceCriterion[] {
  const criteria: ContractAcceptanceCriterion[] = [];
  mission.expectedOutputs.forEach((raw, index) => {
    const expectation = raw.trim();
    if (!expectation) return;
    const ordinal = index + 1;
    if (
      (MISSION_DIAGNOSTIC_EO_TEMPLATES as readonly string[]).includes(
        expectation,
      )
    ) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "mission-diagnostic"),
        statement: expectation,
        kind: "mission_diagnostic",
        expectedOutputRef: expectation,
        targetPath: null,
      });
      return;
    }
    if (
      (MISSION_NEXT_STEP_EO_TEMPLATES as readonly string[]).includes(
        expectation,
      )
    ) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "mission-next-step"),
        statement: expectation,
        kind: "mission_next_step",
        expectedOutputRef: expectation,
        targetPath: null,
      });
      return;
    }
    if (expectation.startsWith(MISSION_TRACE_EO_PREFIX)) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "mission-trace"),
        statement: expectation,
        kind: "mission_trace",
        expectedOutputRef: expectation,
        targetPath: null,
      });
      return;
    }
    criteria.push({
      criterionId: criterionIdFor(ordinal, "manual-review"),
      statement: expectation,
      kind: "manual_review",
      expectedOutputRef: expectation,
      targetPath: null,
    });
  });
  return Object.freeze(criteria);
}

/**
 * Docs-write expectedOutputs → same acceptanceCriteria model as generic mission.
 * No second criterion format. Legacy EO templates map to deterministic kinds.
 */
export function deriveDocsWriteAcceptanceCriteria(input: {
  readonly expectedOutputs: readonly string[];
  readonly targetPath: string | null;
}): readonly ContractAcceptanceCriterion[] {
  const target =
    typeof input.targetPath === "string" && input.targetPath.trim()
      ? input.targetPath.trim()
      : null;
  const criteria: ContractAcceptanceCriterion[] = [];
  input.expectedOutputs.forEach((raw, index) => {
    const expectation = raw.trim();
    if (!expectation) return;
    const ordinal = index + 1;
    if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
      // Compatibility: the historical aggregate EO is too coarse for Product
      // SUCCESS by artifact existence alone. Seal as manual_review so CE stays
      // honest until named path/conformity EOs are present.
      criteria.push({
        criterionId: criterionIdFor(ordinal, "manual-review"),
        statement: expectation,
        kind: "manual_review",
        expectedOutputRef: expectation,
        targetPath: target,
      });
      return;
    }
    if (expectation === DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "artifact-at-path"),
        statement: expectation,
        kind: "artifact_at_path",
        expectedOutputRef: expectation,
        targetPath: target,
      });
      return;
    }
    if (expectation === DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "artifact-conformity"),
        statement: expectation,
        kind: "artifact_conformity_attested",
        expectedOutputRef: expectation,
        targetPath: target,
      });
      return;
    }
    // Path-shaped / free-form EOs stay manual_review when sealed.
    // Legacy path-shaped matching remains available only when NO criterion is
    // sealed for that EO (compatibility bridge — no silent Product SUCCESS upgrade).
    criteria.push({
      criterionId: criterionIdFor(ordinal, "manual-review"),
      statement: expectation,
      kind: "manual_review",
      expectedOutputRef: expectation,
      targetPath: target,
    });
  });
  return Object.freeze(criteria);
}

/**
 * Validation plan from the mission perimeter only.
 * Non-mutating perimeters get the deterministic forbidden-effect check that
 * the mission Result Semantic already enforces.
 */
export function deriveMissionValidationPlan(
  mission: ProductMissionFields,
): readonly string[] {
  if (mission.authorizesMutatingEffects) return Object.freeze([]);
  return Object.freeze([MISSION_VALIDATION_NO_MUTATING_EFFECT]);
}

/** Thin docs_write validation obligations from the sealed envelope (not HOW). */
export function deriveDocsWriteValidationPlan(input: {
  readonly validationExpectations?: readonly string[] | null;
}): readonly string[] {
  const extras = (input.validationExpectations ?? [])
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .filter((v) => v.length > 0);
  return Object.freeze([
    DOCS_WRITE_VALIDATION_PATH_ALLOWLIST,
    DOCS_WRITE_VALIDATION_NO_DELETE,
    ...extras,
  ]);
}

export function deriveMissionReportRequirements(): readonly string[] {
  return MISSION_REPORT_REQUIREMENTS;
}

```

### NEW `projects/sfia-studio/app/features/project-assistant/w2/normalizeProductExecutionOutcome.ts` (161 lines)

```typescript
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — unified Product execution outcome.
 *
 * Normalizes Attempt / CursorExecutionReport / pre-start rejection facts into
 * one server-owned shape consumed by the same post-execution analysis path.
 *
 * NOT Evidence. NOT a second workflow. Status differences are facts, not
 * separate Product analyzers.
 */

import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";

export type ProductExecutionOutcomeKind =
  | "report"
  | "pre_start_reject"
  | "attempt_terminal"
  | "malformed_report"
  | "binding_mismatch";

export type ProductExecutionOutcomeStatus =
  | "succeeded"
  | "failed"
  | "stopped"
  | "timeout"
  | "rejected_pre_start"
  | "binding_refused"
  | "malformed";

export type ProductExecutionOutcome = {
  readonly kind: ProductExecutionOutcomeKind;
  readonly status: ProductExecutionOutcomeStatus;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly contractFingerprint: string | null;
  readonly repositoryRef: string | null;
  readonly baseSha: string | null;
  readonly realProcessInvoked: boolean;
  readonly stopReason: string | null;
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly workPerformed: readonly string[];
  readonly authorizedEffectsExecuted: readonly string[];
  readonly stoppedBeforeEffects: readonly string[];
  readonly diagnosticSummary: string | null;
  readonly recommendedNextProductStep: string | null;
  /** Present only when a Cursor process produced a parseable report claim. */
  readonly cursorReport: CursorExecutionReport | null;
  readonly producer: "cursor_report" | "studio_pre_start" | "studio_binding";
};

export function normalizeCursorExecutionReportOutcome(input: {
  readonly projectId: string;
  readonly report: CursorExecutionReport;
  readonly contractFingerprint?: string | null;
}): ProductExecutionOutcome {
  const r = input.report;
  const diagnostic =
    r.missionResult?.diagnosticSummary?.trim() ||
    r.diagnosticSummary?.trim() ||
    null;
  const nextStep =
    r.missionResult?.recommendedNextProductStep?.trim() ||
    r.recommendedNextProductStep?.trim() ||
    null;
  return Object.freeze({
    kind: "report",
    status: r.status,
    projectId: input.projectId,
    executionContractId: r.executionContractId,
    attemptId: r.attemptId,
    contractFingerprint:
      r.contractFingerprint?.trim() || input.contractFingerprint?.trim() || null,
    repositoryRef: r.repositoryRef,
    baseSha: r.baseSha,
    realProcessInvoked: true,
    stopReason: r.stopConditionTriggered?.trim() || null,
    blockers: Object.freeze([...(r.blockers ?? [])]),
    reservations: Object.freeze([...(r.reservations ?? [])]),
    workPerformed: Object.freeze([...(r.workPerformed ?? [])]),
    authorizedEffectsExecuted: Object.freeze([
      ...r.authorizedEffectsExecuted,
    ]),
    stoppedBeforeEffects: Object.freeze([...(r.stoppedBeforeEffects ?? [])]),
    diagnosticSummary: diagnostic,
    recommendedNextProductStep: nextStep,
    cursorReport: r,
    producer: "cursor_report",
  });
}

/**
 * Pre-start reject: Cursor process was never invoked.
 * Must NOT fabricate a CursorExecutionReport.
 */
export function normalizePreStartRejectionOutcome(input: {
  readonly projectId: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly reason: string;
  readonly contractFingerprint?: string | null;
  readonly repositoryRef?: string | null;
  readonly baseSha?: string | null;
  readonly reservations?: readonly string[] | null;
}): ProductExecutionOutcome {
  const reason = input.reason.trim() || "PRE_START_REJECTED";
  return Object.freeze({
    kind: "pre_start_reject",
    status: "rejected_pre_start",
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    contractFingerprint: input.contractFingerprint?.trim() || null,
    repositoryRef: input.repositoryRef?.trim() || null,
    baseSha: input.baseSha?.trim() || null,
    realProcessInvoked: false,
    stopReason: reason,
    blockers: Object.freeze([reason]),
    reservations: Object.freeze([...(input.reservations ?? [])]),
    workPerformed: Object.freeze([] as string[]),
    authorizedEffectsExecuted: Object.freeze([] as string[]),
    stoppedBeforeEffects: Object.freeze([] as string[]),
    diagnosticSummary: `Exécution refusée avant invocation Cursor — ${reason}`,
    recommendedNextProductStep:
      "Corriger la condition de rejet pré-start, puis re-décider / re-préparer le contrat (pas de relance automatique).",
    cursorReport: null,
    producer: "studio_pre_start",
  });
}

export function normalizeBindingMismatchOutcome(input: {
  readonly projectId: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly code: string;
  readonly message: string;
  readonly realProcessInvoked: boolean;
}): ProductExecutionOutcome {
  return Object.freeze({
    kind: "binding_mismatch",
    status: "binding_refused",
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    contractFingerprint: null,
    repositoryRef: null,
    baseSha: null,
    realProcessInvoked: input.realProcessInvoked,
    stopReason: input.code,
    blockers: Object.freeze([input.code, input.message]),
    reservations: Object.freeze([] as string[]),
    workPerformed: Object.freeze([] as string[]),
    authorizedEffectsExecuted: Object.freeze([] as string[]),
    stoppedBeforeEffects: Object.freeze([] as string[]),
    diagnosticSummary: `Correspondance rapport↔Attempt↔contrat refusée — ${input.code}: ${input.message}`,
    recommendedNextProductStep:
      "Ne pas traiter le rapport comme preuve ; inspecter le binding et rejouer uniquement après HumanDecision.",
    cursorReport: null,
    producer: "studio_binding",
  });
}

```

## 8. Fichiers modifiés (cumul macro)

| Path | Rôle |
|---|---|
| groundingDurability.ts | cycle/SHA optional on read coverage |
| runNoraCognitiveTurn.ts / orchestrateTurn.ts | stamp cycle on remember |
| deriveActualExecutionWorkFromProductContext.ts | repo paths from DecisionBasis |
| resolveContractSourceGrounding.ts | cycle filter + origin tagging |
| prepareExecutionContractFromW2Decision.ts | current full-read fold |
| missionContractSemanticInputs.ts | docs_write criteria + validation |
| prepareM3FromDecision.ts | seal docs_write criteria at prepare |
| studioCursorRealLaunchGateway.ts | strip WHAT from docs_write overlay |
| cursorExecutionReport.ts | enriched claim fields + binding |
| normalizeProductExecutionOutcome.ts | unified outcome |
| missionResult/docsWrite ContractResultSemantic | criteria short-circuit |
| postEvidenceNoraAnalysis.ts / w3cPostEvidenceLoop.ts | contract-first |
| inspectionDisclosure / projectExecutionContractToCursorPrompt / index | parity exports |
| tests nativeExecutionLoopConvergence01.* (+ sameMacroClosure) | proofs |
| uatUxSemanticReserves.ui.test.tsx | fixture from incrément 1 |

## 9. Diffs utiles (closure delta)

### `contractResultSemantics.diff`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
index ca8f4c71..7c2e97f4 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
@@ -5,6 +5,11 @@ import {
   M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_DOCS_WRITE_CAPABILITY,
 } from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
+import {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  findAcceptanceCriterionForExpectedOutput,
+  parseContractAcceptanceCriteria,
+} from "@/lib/oa/execution-contract";
 import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
 import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
 import type {
@@ -287,6 +292,37 @@ export function assessDocsWriteExpectedOutput(input: {
   const location = input.evidence.location?.trim() ?? "";
   const expectation = input.expectation.trim();
   if (!expectation) return "NOT_PROVEN";
+
+  // Sealed structured acceptance criteria outrank the fixed EO grammars.
+  // When a criterion is bound, legacy template auto-PASS is forbidden.
+  const criterion = findAcceptanceCriterionForExpectedOutput(
+    parseContractAcceptanceCriteria(
+      input.material.inputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
+    ),
+    expectation,
+  );
+  if (criterion?.kind === "manual_review") {
+    return "NOT_PROVEN";
+  }
+  if (criterion?.kind === "artifact_at_path") {
+    const target = criterion.targetPath ?? boundTargetPath(input.material.inputs);
+    if (target && location.length > 0 && location === target) return "PASS";
+    return "NOT_PROVEN";
+  }
+  if (criterion?.kind === "artifact_conformity_attested") {
+    const conformity = pickDocsWriteConformityEvidence(
+      input.evidences ?? [input.evidence],
+      input.attempt,
+      input.evidence,
+      input.material,
+    );
+    if (conformity) return "PASS";
+    return "NOT_PROVEN";
+  }
+  if (criterion) {
+    return "NOT_PROVEN";
+  }
+
   if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
     return "PASS";
   }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
index 7d9eb436..0dcdcf2b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
@@ -7,6 +7,9 @@
  * Attempt succeeded alone is NOT enough — verified Mission Evidence payload required.
  */
 import {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  findAcceptanceCriterionForExpectedOutput,
+  parseContractAcceptanceCriteria,
   STUDIO_CURSOR_GENERALIST_ACTION,
   STUDIO_CURSOR_GENERALIST_CAPABILITY,
   STUDIO_CURSOR_GENERALIST_SCOPE,
@@ -170,6 +173,8 @@ export function assessMissionResultExpectedOutput(input: {
   ordinal: number;
   attempt: ExecutionAttemptSnapshot;
   evidence: Evidence;
+  /** Sealed contract inputs — structured acceptance criteria when present. */
+  contractInputs?: Record<string, unknown>;
 }): "PASS" | "NOT_PROVEN" | "FAIL" {
   if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
     return "FAIL";
@@ -177,6 +182,46 @@ export function assessMissionResultExpectedOutput(input: {
   if (!missionResultEvidenceFactsHold(input)) return "NOT_PROVEN";
   const payload = loadMissionPayload(input.evidence);
   if (!payload) return "NOT_PROVEN";
+
+  // Sealed structured acceptance criteria outrank the fixed EO templates.
+  // When a criterion is bound to this EO, legacy grammars must not auto-PASS.
+  const criterion = findAcceptanceCriterionForExpectedOutput(
+    parseContractAcceptanceCriteria(
+      input.contractInputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
+    ),
+    input.expectation,
+  );
+  if (criterion?.kind === "manual_review") {
+    return "NOT_PROVEN";
+  }
+  if (
+    criterion?.kind === "mission_diagnostic" &&
+    payload.diagnosticSummary.trim().length > 0
+  ) {
+    return "PASS";
+  }
+  if (
+    criterion?.kind === "mission_next_step" &&
+    payload.recommendedNextProductStep.trim().length > 0
+  ) {
+    return "PASS";
+  }
+  if (criterion?.kind === "mission_trace") {
+    const trace = payload.inspectedDurableTrace?.trim() ?? "";
+    if (
+      trace.startsWith(MISSION_TRACE_EO_PREFIX) ||
+      trace.includes(input.attempt.attemptId)
+    ) {
+      return "PASS";
+    }
+    return "NOT_PROVEN";
+  }
+  // Structured criterion present but not satisfied (or unknown deterministic
+  // kind) — do not fall through to legacy templates for a silent PASS.
+  if (criterion) {
+    return "NOT_PROVEN";
+  }
+
   if (
     (MISSION_DIAGNOSTIC_EO_TEMPLATES as readonly string[]).includes(
       input.expectation,
@@ -274,6 +319,9 @@ export const missionResultContractResultSemantic: ContractResultSemantic = {
       ordinal: input.ordinal,
       attempt: input.attempt,
       evidence,
+      ...(input.material.inputs
+        ? { contractInputs: input.material.inputs }
+        : {}),
     });
   },
   assessEvidenceRequirement(input) {

```

### `cursorExecutionReport.diff`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
index 6f1a641d..1b0fefd0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
@@ -6,10 +6,21 @@
  *   reportId (independent)
  *   executionContractId (exact contract executed)
  *   attemptId (exact attempt producing report)
+ *
+ * NELC-01 — additive optional fields remain under schema
+ * `oa.cursor-execution-report.1` (compat, no parallel report type).
+ * Assessments and narrative fields are CLAIMS until Studio requalifies them.
  */
+
 export const OA_CURSOR_EXECUTION_REPORT_SCHEMA =
   "oa.cursor-execution-report.1" as const;

+export type CursorExecutionReportStatus =
+  | "succeeded"
+  | "failed"
+  | "stopped"
+  | "timeout";
+
 export type CursorFileEffectClaim = {
   created: string[];
   modified: string[];
@@ -69,15 +80,35 @@ export type CursorAuthorizedEffectId =
   | "github.pr.update"
   | "github.pr.merge";

+export type CursorClaimAssessmentResult =
+  | "pass"
+  | "fail"
+  | "not_proven"
+  | "skipped";
+
+export type CursorClaimAssessment = {
+  readonly id: string;
+  readonly statement: string;
+  readonly result: CursorClaimAssessmentResult;
+  readonly notes?: string;
+};
+
 export type CursorExecutionReport = {
   schemaVersion: typeof OA_CURSOR_EXECUTION_REPORT_SCHEMA;
   /** Independent report identity — distinct from attemptId / executionContractId. */
   reportId: string;
   attemptId: string;
   executionContractId: string;
+  /** Optional EC version when known — claim, verified at bind when expected. */
+  executionContractVersion?: number;
+  /** Optional semantic fingerprint — claim, verified at bind when expected. */
+  contractFingerprint?: string;
   repositoryRef: string;
   baseSha: string;
-  status: "succeeded" | "failed" | "stopped" | "timeout";
+  branch?: string;
+  status: CursorExecutionReportStatus;
+  /** Bounded claim of work performed (never Evidence by itself). */
+  workPerformed?: string[];
   fileEffects?: CursorFileEffectClaim;
   validationEffects?: CursorValidationEffectClaim[];
   gitEffects?: CursorGitEffectClaims;
@@ -85,6 +116,14 @@ export type CursorExecutionReport = {
   authorizedEffectsExecuted: CursorAuthorizedEffectId[];
   /** Protected effects not yet authorized — Cursor stopped. */
   stoppedBeforeEffects?: CursorAuthorizedEffectId[];
+  expectedOutputAssessments?: CursorClaimAssessment[];
+  acceptanceCriteriaAssessments?: CursorClaimAssessment[];
+  validationsPerformed?: string[];
+  deviations?: string[];
+  blockers?: string[];
+  stopConditionTriggered?: string | null;
+  reservations?: string[];
+  evidenceClaims?: string[];
   /**
    * Optional structured mission/diagnostic claim (additive).
    * NOT Evidence — must be validated and persisted as MissionResultPayload.
@@ -94,6 +133,9 @@ export type CursorExecutionReport = {
     recommendedNextProductStep: string;
     inspectedDurableTrace?: string;
   };
+  /** Top-level narrative claim aliases (optional; prefer missionResult). */
+  diagnosticSummary?: string;
+  recommendedNextProductStep?: string;
 };

 export function mintCursorExecutionReportId(input: {
@@ -107,6 +149,13 @@ export function mintCursorExecutionReportId(input: {
   return `rpt:cursor:${safeContract}:${safeAttempt}`;
 }

+const REPORT_STATUSES: readonly CursorExecutionReportStatus[] = [
+  "succeeded",
+  "failed",
+  "stopped",
+  "timeout",
+];
+
 export function isCursorExecutionReport(
   value: unknown,
 ): value is CursorExecutionReport {
@@ -121,6 +170,7 @@ export function isCursorExecutionReport(
     typeof v.repositoryRef === "string" &&
     typeof v.baseSha === "string" &&
     typeof v.status === "string" &&
+    (REPORT_STATUSES as readonly string[]).includes(v.status as string) &&
     Array.isArray(v.authorizedEffectsExecuted)
   );
 }
@@ -149,6 +199,8 @@ export function bindCursorExecutionReportToAttempt(input: {
   /** Optional trusted launch correspondence (generic Product REAL). */
   readonly expectedRepositoryRef?: string | null;
   readonly expectedBaseSha?: string | null;
+  readonly expectedContractVersion?: number | null;
+  readonly expectedContractFingerprint?: string | null;
 }):
   | { readonly ok: true }
   | { readonly ok: false; readonly code: string; readonly message: string } {
@@ -208,5 +260,28 @@ export function bindCursorExecutionReportToAttempt(input: {
       message: "report.baseSha ≠ pinned baseHeadSha.",
     };
   }
+  if (
+    input.expectedContractVersion != null &&
+    report.executionContractVersion != null &&
+    report.executionContractVersion !== input.expectedContractVersion
+  ) {
+    return {
+      ok: false,
+      code: "REPORT_CONTRACT_VERSION_MISMATCH",
+      message: "report.executionContractVersion ≠ ExecutionContract.version.",
+    };
+  }
+  if (
+    input.expectedContractFingerprint != null &&
+    input.expectedContractFingerprint.trim() !== "" &&
+    report.contractFingerprint != null &&
+    report.contractFingerprint !== input.expectedContractFingerprint
+  ) {
+    return {
+      ok: false,
+      code: "REPORT_FINGERPRINT_MISMATCH",
+      message: "report.contractFingerprint ≠ ExecutionContract.semanticFingerprint.",
+    };
+  }
   return { ok: true };
 }

```

### `deriveMission.diff`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
index f97e5499..091a13c5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
@@ -22,6 +22,7 @@
  */

 import type { DecisionBasis } from "@/lib/oa/decision";
+import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
 import {
   buildActualExecutionWork,
   isActualExecutionOperationKind,
@@ -37,6 +38,29 @@ import {
   GOVERNED_OPTION_REF,
 } from "./trajectoryOptions";

+/**
+ * Repository document paths known from durable DecisionBasis / cycle facts.
+ * Pseudo-refs (`attempt:…`, `product:…`) are excluded — they are not files.
+ */
+export function repositorySourcesFromProductFacts(input: {
+  readonly basis: DecisionBasis;
+  readonly additionalSources?: readonly string[] | null;
+}): readonly string[] {
+  const eb = input.basis.executionBasis;
+  const candidates = [
+    ...(typeof eb.targetPath === "string" ? [eb.targetPath] : []),
+    ...(eb.scopeIn ?? []),
+    ...(input.additionalSources ?? []),
+  ];
+  return Object.freeze([
+    ...new Set(
+      candidates
+        .map((s) => (typeof s === "string" ? s.trim() : ""))
+        .filter(isRepositorySourceRef),
+    ),
+  ]);
+}
+
 /** Mission WHAT fields folded into ExecutionContract.inputs / envelope. */
 export type ProductMissionFields = {
   readonly objective: string;
@@ -86,6 +110,7 @@ export function isNonExecutableTrajectoryRequestedOperation(
 function missionFromRecovery(
   recovery: PostEvidenceRecoveryContext,
   projectObjective: string | null,
+  repositorySources: readonly string[],
 ): ProductMissionFields {
   const outcomeLabel =
     recovery.productOutcome === "UNCLAIMED"
@@ -110,6 +135,7 @@ function missionFromRecovery(
       `reviewBundle:${recovery.reviewBundleId}`,
       `executionContract:${recovery.executionContractId}`,
       "product:durable-facts-required-for-mission",
+      ...repositorySources,
     ],
     scopeOut: [
       "unrelated-project-mutation",
@@ -138,6 +164,7 @@ function missionFromRecovery(
       `evidence:${recovery.evidenceId}`,
       `reviewBundle:${recovery.reviewBundleId}`,
       `executionContract:${recovery.executionContractId}`,
+      ...repositorySources,
     ],
     contextNotes: [
       `productOutcome=${recovery.productOutcome}`,
@@ -160,6 +187,7 @@ function missionFromRecovery(
 function missionFromClarifyWithoutRecovery(
   projectObjective: string | null,
   basis: DecisionBasis,
+  repositorySources: readonly string[],
 ): ProductMissionFields {
   const reserves = basis.executionBasis.reservations ?? [];
   return {
@@ -174,6 +202,7 @@ function missionFromClarifyWithoutRecovery(
       "product:current-project-facts",
       "product:decision-basis-and-lps",
       ...reserves.map((r) => `reservation:${r}`),
+      ...repositorySources,
     ],
     scopeOut: [
       "unrelated-project-mutation",
@@ -190,7 +219,11 @@ function missionFromClarifyWithoutRecovery(
       "NO_AUTOMATIC_EXECUTE",
     ],
     evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
-    sourcesToRead: ["product:current-project-facts", "product:decision-basis-and-lps"],
+    sourcesToRead: [
+      "product:current-project-facts",
+      "product:decision-basis-and-lps",
+      ...repositorySources,
+    ],
     contextNotes: ["pre_engagement_clarify", ...reserves.slice(0, 5)],
     authorizesMutatingEffects: false,
     recoveryAttemptId: null,
@@ -255,6 +288,11 @@ export function deriveActualExecutionWorkFromProductContext(input: {
   readonly recoveryContext: PostEvidenceRecoveryContext | null;
   /** Hostile / optional — never overrides durable mission derivation. */
   readonly clientOperationKind?: unknown;
+  /**
+   * Optional repository paths already known from cycle cognition
+   * (durable DecisionBasis / prior full reads). Never invents a catalogue.
+   */
+  readonly cycleRepositorySources?: readonly string[] | null;
 }): DeriveProductMissionResult {
   const { selectedOptionRef, recoveryContext, basis } = input;

@@ -272,6 +310,11 @@ export function deriveActualExecutionWorkFromProductContext(input: {
       ? input.clientOperationKind
       : null;

+  const repositorySources = repositorySourcesFromProductFacts({
+    basis,
+    additionalSources: input.cycleRepositorySources,
+  });
+
   // Durable mission from Product facts (recovery and/or clarify intent).
   // Option ref is provenance — never the operation selector.
   const canPrepareDurableMission =
@@ -279,8 +322,16 @@ export function deriveActualExecutionWorkFromProductContext(input: {

   if (canPrepareDurableMission) {
     const mission = recoveryContext
-      ? missionFromRecovery(recoveryContext, input.projectObjective)
-      : missionFromClarifyWithoutRecovery(input.projectObjective, basis);
+      ? missionFromRecovery(
+          recoveryContext,
+          input.projectObjective,
+          repositorySources,
+        )
+      : missionFromClarifyWithoutRecovery(
+          input.projectObjective,
+          basis,
+          repositorySources,
+        );

     const work = buildInternalWorkFromMissionPerimeter({
       projectId: input.projectId,

```

### `gateway.diff`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 758239d9..369d64f5 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -66,16 +66,48 @@ import {
 } from "./mutatingCursorConfinementEnv";
 import { resolveSealedDocsWriteWorktreePaths } from "../application/resolveSealedDocsWriteWorktreePaths";

+/**
+ * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — one mission, one enforcement overlay.
+ *
+ * The already-projected ExecutionContract mission is the semantic authority for
+ * WHAT; the bounded GCEC overlay remains the technical authority for WHICH
+ * effects are permitted. The overlay is emitted last and declared prevailing so
+ * no mission sentence can widen the authorized perimeter.
+ *
+ * Specialized profiles keep every enforcement line they had before — the only
+ * change is that the EC projection is no longer discarded.
+ */
+function composeBoundedInstruction(input: {
+  readonly missionPrompt: string | null | undefined;
+  readonly enforcement: readonly string[];
+}): string {
+  const mission =
+    typeof input.missionPrompt === "string" ? input.missionPrompt.trim() : "";
+  if (!mission) {
+    return input.enforcement.join("\n");
+  }
+  return [
+    "# Mission (projection ExecutionContract — autorité sémantique)",
+    mission,
+    "",
+    "=== ENFORCEMENT OVERLAY (GCEC) — PRÉVAUT SUR LA MISSION ===",
+    "Les contraintes ci-dessous sont la limite technique d'autorité de cette tentative.",
+    "En cas de conflit avec la mission ci-dessus: l'overlay gagne — STOP sans effet hors overlay.",
+    ...input.enforcement,
+  ].join("\n");
+}
+
 function buildBoundedLocalCommitInstruction(input: {
   readonly spec: NonNullable<RealLaunchRequest["gitCommitSpec"]>;
   readonly target?: string;
   readonly action?: string;
   readonly scope?: string;
   readonly semanticFingerprint: string;
+  readonly missionPrompt?: string | null;
 }): string {
   const paths = input.spec.exactPaths.join(", ");
   const pathList = input.spec.exactPaths.map((p) => `  - ${p}`).join("\n");
-  return [
+  const enforcement = [
     "TÂCHE UNIQUE — bounded local git.commit déterministe (GCEC).",
     `Repository: ${input.spec.repositoryRef}`,
     `Expected parent HEAD (H0): ${input.spec.expectedParentSha}`,
@@ -102,7 +134,11 @@ function buildBoundedLocalCommitInstruction(input: {
     `action=${input.action ?? ""}`,
     `scope=${input.scope ?? ""}`,
     `fingerprint=${input.semanticFingerprint}`,
-  ].join("\n");
+  ];
+  return composeBoundedInstruction({
+    missionPrompt: input.missionPrompt,
+    enforcement,
+  });
 }

 function buildBoundedRemotePushInstruction(input: {
@@ -111,9 +147,10 @@ function buildBoundedRemotePushInstruction(input: {
   readonly action?: string;
   readonly scope?: string;
   readonly semanticFingerprint: string;
+  readonly missionPrompt?: string | null;
 }): string {
   const branchRef = `refs/heads/${input.spec.branchName}`;
-  return [
+  const enforcement = [
     "TÂCHE UNIQUE — bounded remote git.push déterministe (GCEC).",
     `Repository: ${input.spec.repositoryRef}`,
     `Remote exact: ${input.spec.remoteName}`,
@@ -141,7 +178,11 @@ function buildBoundedRemotePushInstruction(input: {
     `action=${input.action ?? ""}`,
     `scope=${input.scope ?? ""}`,
     `fingerprint=${input.semanticFingerprint}`,
-  ].join("\n");
+  ];
+  return composeBoundedInstruction({
+    missionPrompt: input.missionPrompt,
+    enforcement,
+  });
 }

 function buildBoundedPrCreateInstruction(input: {
@@ -150,6 +191,7 @@ function buildBoundedPrCreateInstruction(input: {
   readonly action?: string;
   readonly scope?: string;
   readonly semanticFingerprint: string;
+  readonly missionPrompt?: string | null;
 }): string {
   const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
   const qHead = posixShellSingleQuote(input.spec.headBranch);
@@ -160,7 +202,7 @@ function buildBoundedPrCreateInstruction(input: {
       ? posixShellSingleQuote(input.spec.body)
       : undefined;
   const branchRefApi = `repos/${input.spec.repositoryRef}/git/ref/heads/${input.spec.headBranch}`;
-  return [
+  const enforcement = [
     "TÂCHE UNIQUE — bounded github.pr.create déterministe (GCEC).",
     `Repository: ${input.spec.repositoryRef}`,
     `Head branch exacte: ${input.spec.headBranch}`,
@@ -183,7 +225,11 @@ function buildBoundedPrCreateInstruction(input: {
     `action=${input.action ?? ""}`,
     `scope=${input.scope ?? ""}`,
     `fingerprint=${input.semanticFingerprint}`,
-  ].join("\n");
+  ];
+  return composeBoundedInstruction({
+    missionPrompt: input.missionPrompt,
+    enforcement,
+  });
 }

 function buildBoundedPrMergeInstruction(input: {
@@ -192,6 +238,7 @@ function buildBoundedPrMergeInstruction(input: {
   readonly action?: string;
   readonly scope?: string;
   readonly semanticFingerprint: string;
+  readonly missionPrompt?: string | null;
 }): string {
   const methodFlag =
     input.spec.mergeMethod === "squash"
@@ -200,7 +247,7 @@ function buildBoundedPrMergeInstruction(input: {
         ? "--rebase"
         : "--merge";
   const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
-  return [
+  const enforcement = [
     "TÂCHE UNIQUE — bounded github.pr.merge déterministe (GCEC).",
     `Repository: ${input.spec.repositoryRef}`,
     `PR number exact (obligatoire): ${input.spec.prNumber}`,
@@ -224,7 +271,11 @@ function buildBoundedPrMergeInstruction(input: {
     `action=${input.action ?? ""}`,
     `scope=${input.scope ?? ""}`,
     `fingerprint=${input.semanticFingerprint}`,
-  ].join("\n");
+  ];
+  return composeBoundedInstruction({
+    missionPrompt: input.missionPrompt,
+    enforcement,
+  });
 }

 export type StudioCursorRealLaunchGatewayOptions = {
@@ -757,6 +808,14 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       if (freeShell) return freeShell;
     }

+    // Already-projected EC mission — semantic authority for every Product
+    // profile. Enforcement overlays below stay the technical authority.
+    const missionPrompt =
+      typeof request.cursorMissionPrompt === "string" &&
+      request.cursorMissionPrompt.trim().length > 0
+        ? request.cursorMissionPrompt.trim()
+        : null;
+
     let instruction: string;
     if (isLocalCommitProfile && gitCommitSpec) {
       instruction = buildBoundedLocalCommitInstruction({
@@ -765,6 +824,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         action: request.action,
         scope: request.scope,
         semanticFingerprint: request.semanticFingerprint,
+        missionPrompt,
       });
     } else if (isRemotePushProfile && gitPushSpec) {
       instruction = buildBoundedRemotePushInstruction({
@@ -773,6 +833,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         action: request.action,
         scope: request.scope,
         semanticFingerprint: request.semanticFingerprint,
+        missionPrompt,
       });
     } else if (isPrCreateProfile && gitPrCreateSpec) {
       instruction = buildBoundedPrCreateInstruction({
@@ -781,6 +842,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         action: request.action,
         scope: request.scope,
         semanticFingerprint: request.semanticFingerprint,
+        missionPrompt,
       });
     } else if (isPrMergeProfile && gitPrMergeSpec) {
       instruction = buildBoundedPrMergeInstruction({
@@ -789,6 +851,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         action: request.action,
         scope: request.scope,
         semanticFingerprint: request.semanticFingerprint,
+        missionPrompt,
       });
     } else if (isDocsWrite) {
       const spec = request.docsWriteSpec;
@@ -848,7 +911,10 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           detailCode: "REAL_WORKSPACE_INVALID",
         };
       }
-      instruction = [
+      // Enforcement overlay only — the EC mission carries WHAT to write.
+      // Brief / content / scope / expectedOutputs must NOT appear here as a
+      // competing mission authority (NELC-01 WS3).
+      const docsWriteEnforcement = [
         "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
         `EXACT AUTHORIZED FILE (absolute path inside prepared worktree — modify exactly this file and no other): ${resolvedPaths.absoluteTargetPath}`,
         `Canonical sealed targetPath (repo-relative, do not reinterpret): ${resolvedPaths.sealedTargetPath}`,
@@ -856,13 +922,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         `Canonical sealed pathAllowlist (repo-relative): ${resolvedPaths.sealedPathAllowlist.join(", ")}`,
         "Do not reinterpret relative paths against a nested subproject or editor root.",
         `Repository: ${spec.repositoryRef}`,
-        `Type d'artifact: ${spec.artifactType}`,
-        `Brief: ${spec.artifactBrief}`,
-        `Exigences de contenu: ${spec.contentRequirements.join("; ")}`,
-        `Scope IN: ${spec.scopeIn.join(", ") || "(none)"}`,
-        `Scope OUT (interdit): ${spec.scopeOut.join(", ") || "(none)"}`,
-        `Sorties attendues: ${spec.expectedOutputs.join(", ")}`,
-        `Validations: ${spec.validationExpectations.join(", ") || "path_allowlist; no_delete"}`,
+        `Validations techniques: ${spec.validationExpectations.join(", ") || "path_allowlist; no_delete"}`,
         "Ne créer/modifier AUCUN autre fichier.",
         "Ne supprimer AUCUN fichier (noDelete=true).",
         "Ne pas commit, push, PR, merge, ni remote git.",
@@ -874,7 +934,11 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         `action=${request.action ?? ""}`,
         `scope=${request.scope ?? ""}`,
         `fingerprint=${request.semanticFingerprint}`,
-      ].join("\n");
+      ];
+      instruction = composeBoundedInstruction({
+        missionPrompt,
+        enforcement: docsWriteEnforcement,
+      });
     } else if (
       request.action === M4_BOUNDED_RO_ACTION ||
       request.selectedAgentRef === M4_BOUNDED_RO_CURSOR_AGENT_ID
@@ -898,15 +962,12 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         `fingerprint=${request.semanticFingerprint}`,
         "Aucune mutation, aucun git remote/commit/push/PR/merge.",
       ].join("\n");
-    } else if (
-      typeof request.cursorMissionPrompt === "string" &&
-      request.cursorMissionPrompt.trim().length > 0
-    ) {
+    } else if (missionPrompt) {
       // PJ-REPROOF-04 — generalist Cursor mission = authorized EC projection.
       // Cursor determines HOW inside the contract; no mandatory step sequence.
       // Product StartExecution always supplies this prompt for non-specialized agents.
       instruction = [
-        request.cursorMissionPrompt.trim(),
+        missionPrompt,
         "",
         `attemptId=${request.attemptId}`,
         `executionContractId=${request.executionContractId}`,
@@ -932,9 +993,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {

     // Full-capability native mode: --sandbox disabled --force (parity with Cursor CLI).
     // Docs-write + git mutation profiles + generalist mission prompt: agent mode.
-    const hasMissionPrompt =
-      typeof request.cursorMissionPrompt === "string" &&
-      request.cursorMissionPrompt.trim().length > 0;
+    const hasMissionPrompt = missionPrompt !== null;
     const usesAgentMode =
       isDocsWrite ||
       isLocalCommitProfile ||

```

### `groundingDurability.diff`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts
index fdeee7d2..2ad4e93c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts
@@ -31,6 +31,16 @@ export type GroundingReadCoverageRef = {
   pathOrRef: string;
   coverage: GroundingReadCoverageKind;
   rememberedAtIso: string;
+  /**
+   * NELC-01 — optional cycle attribution on the same MW4 marker (no new store).
+   * Absent = legacy project-scoped continuity; prepare must not invent a cycle.
+   */
+  cycleInstanceId?: string;
+  /**
+   * NELC-01 — optional repository HEAD observed when the read was remembered.
+   * Absent = currentness unproven; prepare must not treat as current FULL.
+   */
+  repositoryHeadSha?: string;
 };

 /** Non-cognitive Session marker — never Truth C / Evidence authority. */
@@ -142,14 +152,27 @@ export function parseStoredGroundingRefsRecord(
             typeof (r as GroundingReadCoverageRef).pathOrRef === "string" &&
             (r as GroundingReadCoverageRef).pathOrRef.trim().length > 0,
         )
-        .map((r) => ({
-          pathOrRef: r.pathOrRef.trim(),
-          coverage: r.coverage,
-          rememberedAtIso:
-            typeof r.rememberedAtIso === "string" && r.rememberedAtIso.trim()
-              ? r.rememberedAtIso
-              : new Date(0).toISOString(),
-        }))
+        .map((r) => {
+          const cycleInstanceId =
+            typeof r.cycleInstanceId === "string" && r.cycleInstanceId.trim()
+              ? r.cycleInstanceId.trim()
+              : undefined;
+          const repositoryHeadSha =
+            typeof r.repositoryHeadSha === "string" &&
+            r.repositoryHeadSha.trim()
+              ? r.repositoryHeadSha.trim()
+              : undefined;
+          return {
+            pathOrRef: r.pathOrRef.trim(),
+            coverage: r.coverage,
+            rememberedAtIso:
+              typeof r.rememberedAtIso === "string" && r.rememberedAtIso.trim()
+                ? r.rememberedAtIso
+                : new Date(0).toISOString(),
+            ...(cycleInstanceId ? { cycleInstanceId } : {}),
+            ...(repositoryHeadSha ? { repositoryHeadSha } : {}),
+          };
+        })
     : undefined;
   return {
     type: GROUNDING_REFS_TYPE,
@@ -278,7 +301,12 @@ export async function rememberEvidenceIds(
 export async function rememberReadCoverage(
   session: ProductSqliteSession,
   projectId: string,
-  coverage: Array<{ pathOrRef: string; coverage: GroundingReadCoverageKind }>,
+  coverage: Array<{
+    pathOrRef: string;
+    coverage: GroundingReadCoverageKind;
+    cycleInstanceId?: string | null;
+    repositoryHeadSha?: string | null;
+  }>,
   nowIso?: string,
 ): Promise<GroundingRefsRecord> {
   const project = projectId.trim();
@@ -298,10 +326,21 @@ export async function rememberReadCoverage(
   for (const item of coverage) {
     const pathOrRef = item.pathOrRef.trim();
     if (!pathOrRef) continue;
+    const cycleInstanceId =
+      typeof item.cycleInstanceId === "string" && item.cycleInstanceId.trim()
+        ? item.cycleInstanceId.trim()
+        : undefined;
+    const repositoryHeadSha =
+      typeof item.repositoryHeadSha === "string" &&
+      item.repositoryHeadSha.trim()
+        ? item.repositoryHeadSha.trim()
+        : undefined;
     byPath.set(pathOrRef, {
       pathOrRef,
       coverage: item.coverage,
       rememberedAtIso: iso,
+      ...(cycleInstanceId ? { cycleInstanceId } : {}),
+      ...(repositoryHeadSha ? { repositoryHeadSha } : {}),
     });
   }
   const record: GroundingRefsRecord = {

```

### `noraPostEvidence.diff`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index b75ac122..359152b4 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -32,6 +32,8 @@ export type PostEvidenceAnalysisFacts = {
   executionContractId: string;
   executionContractStatus: string;
   executionContractAction: string;
+  /** Contract objective / WHAT when available (server-owned). */
+  contractObjective?: string;
   attemptId: string;
   attemptStatus: string;
   selectedAgentRef: string;
@@ -56,6 +58,14 @@ export type PostEvidenceAnalysisFacts = {
   businessReason?: string;
   expectedOutputAssessmentSummary?: string;
   evidenceRequirementAssessmentSummary?: string;
+  /** Sealed acceptance criteria statements (contract-first). */
+  acceptanceCriteriaSummary?: string;
+  expectedOutputsSummary?: string;
+  validationPlanSummary?: string;
+  workPerformedSummary?: string;
+  stopReason?: string;
+  blockersSummary?: string;
+  outcomeKind?: string;
 };

 export type PostEvidenceAnalysisResult =
@@ -72,6 +82,14 @@ export type PostEvidenceAnalysisResult =
     };

 const ANALYSIS_SYSTEM = `Tu es Nora, analyste post-exécution SFIA Studio.
+Ordre cognitif imposé (contract-first):
+1) CONTRAT (objectif, expected outputs, critères d'acceptation, validations)
+2) RÉSULTAT OBSERVÉ (travail réel, effets, stop/blocker)
+3) PREUVE (Evidence / ReviewBundle / ClaimEvaluation)
+4) CONFORMITÉ (PASS / FAIL / NOT_PROVEN — jamais inventé)
+5) IMPACT PROJET
+6) RECOMMANDATION (jamais une HumanDecision, jamais une relance automatique)
+
 Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
 Interdit:
 - créer une HumanDecision;
@@ -79,10 +97,13 @@ Interdit:
 - lancer un ExecutionContract / Attempt;
 - demander des secrets;
 - inventer une preuve REAL;
-- convertir not_proven / UNCLAIMED en succès produit.
+- convertir not_proven / UNCLAIMED en succès produit;
+- commenter le rapport Cursor sans d'abord confronter le contrat.
 Si productOutcome=UNCLAIMED et claimEvaluationStatus=not_proven :
 l'exécution technique a pu réussir et un Artifact peut exister, mais le résultat
 contractuel n'est pas prouvé faute d'Evidence suffisante sur les expectedOutputs.
+Si stopReason / blockers sont présents: expliquer l'action tentée, la condition
+bloquante, les effets non réalisés, l'impact, et le déblocage proposé.
 Réponds en français, court, factuel.

 ${buildPostEvidenceNarrativePolicyDisclosure()}`;
@@ -93,6 +114,7 @@ function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
     executionContractId: facts.executionContractId,
     executionContractStatus: facts.executionContractStatus,
     executionContractAction: facts.executionContractAction,
+    contractObjective: facts.contractObjective,
     attemptId: facts.attemptId,
     attemptStatus: facts.attemptStatus,
     selectedAgentRef: facts.selectedAgentRef,
@@ -117,6 +139,13 @@ function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
     expectedOutputAssessmentSummary: facts.expectedOutputAssessmentSummary,
     evidenceRequirementAssessmentSummary:
       facts.evidenceRequirementAssessmentSummary,
+    acceptanceCriteriaSummary: facts.acceptanceCriteriaSummary,
+    expectedOutputsSummary: facts.expectedOutputsSummary,
+    validationPlanSummary: facts.validationPlanSummary,
+    workPerformedSummary: facts.workPerformedSummary,
+    stopReason: facts.stopReason,
+    blockersSummary: facts.blockersSummary,
+    outcomeKind: facts.outcomeKind,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index f127b4db..f4c5e48b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -32,6 +32,13 @@ import {
 } from "@/features/project-assistant/f2/ckcCognitiveContext";
 import type { NextActionCode } from "@/lib/oa/evidence-review/domain/coordinationTypes";
 import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
+import {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
+  describeContractAcceptanceCriteria,
+  parseContractAcceptanceCriteria,
+  parseContractStringListInput,
+} from "@/lib/oa/execution-contract";
 import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
 import { resolveW2QualificationInputs } from "./qualificationInputs";

@@ -1220,6 +1227,10 @@ export async function runW3cPostEvidenceLoop(input: {
       }
     }
   }
+  let contractObjective: string | undefined;
+  let acceptanceCriteriaSummary: string | undefined;
+  let expectedOutputsSummary: string | undefined;
+  let validationPlanSummary: string | undefined;
   if (oa.executionContractServices) {
     const loaded =
       await oa.executionContractServices.getExecutionContract.execute({
@@ -1228,6 +1239,33 @@ export async function runW3cPostEvidenceLoop(input: {
     if (loaded.ok) {
       contractStatus = loaded.contract.status;
       contractAction = loaded.contract.action;
+      const objective = loaded.contract.inputs?.objective;
+      if (typeof objective === "string" && objective.trim()) {
+        contractObjective = objective.trim().slice(0, 500);
+      }
+      const criteria = parseContractAcceptanceCriteria(
+        loaded.contract.inputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
+      );
+      if (criteria.length > 0) {
+        acceptanceCriteriaSummary = describeContractAcceptanceCriteria(criteria)
+          .join("; ")
+          .slice(0, 1500);
+      }
+      if (
+        Array.isArray(loaded.contract.expectedOutputs) &&
+        loaded.contract.expectedOutputs.length > 0
+      ) {
+        expectedOutputsSummary = loaded.contract.expectedOutputs
+          .map((s) => String(s))
+          .join("; ")
+          .slice(0, 800);
+      }
+      const plan = parseContractStringListInput(
+        loaded.contract.inputs?.[CONTRACT_VALIDATION_PLAN_INPUT_KEY],
+      );
+      if (plan.length > 0) {
+        validationPlanSummary = plan.join("; ").slice(0, 800);
+      }
     }
   }

@@ -1286,6 +1324,10 @@ export async function runW3cPostEvidenceLoop(input: {
       businessReason: product.businessReason,
       ...(eoSummary ? { expectedOutputAssessmentSummary: eoSummary } : {}),
       ...(erSummary ? { evidenceRequirementAssessmentSummary: erSummary } : {}),
+      ...(contractObjective ? { contractObjective } : {}),
+      ...(acceptanceCriteriaSummary ? { acceptanceCriteriaSummary } : {}),
+      ...(expectedOutputsSummary ? { expectedOutputsSummary } : {}),
+      ...(validationPlanSummary ? { validationPlanSummary } : {}),
       ...(processRef ? { processRef } : {}),
       ...(processExitCode !== undefined ? { exitCode: processExitCode } : {}),
       ...(processTimedOut !== undefined ? { timedOut: processTimedOut } : {}),

```

### `prepareM3.diff`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 0d7d3a33..dee70b86 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -20,6 +20,10 @@ import type {
   ExecutionContractServices,
 } from "@/lib/oa/execution-contract";
 import {
+  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
+  CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY,
+  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
+  isRepositorySourceRef,
   projectCursorPrepareOnly,
   projectExecutionContractInspectionDisclosure,
 } from "@/lib/oa/execution-contract";
@@ -29,6 +33,11 @@ import {
   isProposalSubjectOptionRef,
   PROPOSAL_SUBJECT_PURSUE_REF,
 } from "../w2/proposalSubjectOptions";
+import {
+  deriveDocsWriteAcceptanceCriteria,
+  deriveDocsWriteValidationPlan,
+  deriveMissionReportRequirements,
+} from "../w2/missionContractSemanticInputs";
 import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";
 import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import {
@@ -358,6 +367,32 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
         ? [...eb.evidenceRequirements]
         : undefined,
   });
+
+  // NELC-01 — docs_write uses the same structured acceptanceCriteria model
+  // as the generic mission path (no second criterion format).
+  if (docsWriteIntent && expectedOutputs && expectedOutputs.length > 0) {
+    const targetPath =
+      typeof inputs.targetPath === "string" ? inputs.targetPath : null;
+    inputs[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY] =
+      deriveDocsWriteAcceptanceCriteria({
+        expectedOutputs,
+        targetPath,
+      });
+    inputs[CONTRACT_VALIDATION_PLAN_INPUT_KEY] = deriveDocsWriteValidationPlan({
+      validationExpectations: eb.validationExpectations,
+    });
+    inputs[CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY] =
+      deriveMissionReportRequirements();
+    if (targetPath && isRepositorySourceRef(targetPath)) {
+      const declared = Array.isArray(inputs.sourcesToRead)
+        ? (inputs.sourcesToRead as unknown[]).filter(
+            (s): s is string => typeof s === "string",
+          )
+        : [];
+      inputs.sourcesToRead = [...new Set([...declared, targetPath])];
+    }
+  }
+
   return {
     action,
     target,

```

## 10. Git Review Index

```
branch: feat/sfia-studio-native-execution-loop-convergence-01
HEAD:   0e68c15339cea90926c7b2f745a5ecf773020aec
staged: (none)
project commit: NOT CREATED
project push/PR/merge: NOT PERFORMED
```

## 11. Validations

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (No ESLint warnings or errors) |
| `npm run build` | PASS |
| `npm test` (full Studio) | **437 passed / 17 skipped** files ; **4849 passed / 137 skipped** tests |
| `git diff --check` (app) | PASS |
| NELC targeted (5 suites) | 55/55 |
| NELC + recovery (#526 family) | 78/78 |
| sameMacroClosure | 12/12 |

## 12. Exit Proof EP1–EP20

| EP | Verdict | Preuve |
|---|---|---|
| EP1 Cycle grounding repo paths | PASS | repositorySourcesFromProductFacts + mission sourcesToRead |
| EP2 Read honesty | PASS | search≠read ; partial≠full tests |
| EP3 Currentness | PASS | SHA mismatch / missing SHA → UNREAD |
| EP4 Contract readiness | PASS | prepare gate + durable reader |
| EP5 Semantic authority EC | PASS | mission prompt from EC |
| EP6 Enforcement-only spécialisés | PASS | overlay sans Brief/WHAT |
| EP7 Protections | PASS | gateway path/noDelete/TOCTOU tests verts |
| EP8 Report | PASS | enriched oa.cursor-execution-report.1 |
| EP9 Binding | PASS | fingerprint/version/repo/base mismatch |
| EP10 Criteria outrank | PASS | short-circuit avant legacy |
| EP11 manual_review | PASS | never auto-PASS |
| EP12 DocsWrite same model | PASS | deriveDocsWriteAcceptanceCriteria |
| EP13 Same CR engine | PASS | no second evaluator |
| EP14 Nora contract-first | PASS | ANALYSIS_SYSTEM + sealed criteria facts |
| EP15 STOP/FAIL synthesis | PASS | normalize + Nora order |
| EP16 No auto relaunch/HD | PASS | preserved W3-C invariants |
| EP17 Recovery #526 | PASS | recovery suites verts |
| EP18 No parallel architecture | PASS | bridge inputs only |
| EP19 Fake/Real | PASS | DETERMINISTIC only ; no REAL |
| EP20 D1 | **BRIDGE ACCEPTABLE** | governed debt non-blocking |

## 13. Fake / Real Qualification

- Fake/fixture: FakeProcessRunner, injected grounding readers, W2 harness.
- Frontières substituées: Cursor REAL process, managed clone HEAD (pinned in tests).
- Parité démontrée: deterministic end-to-end convergence on Product path semantics.
- Realism gaps: no new natural StudyFlow REAL ; SHA stamp at remember still optional until managed HEAD available mid-turn.
- Protections testées: path allowlist, noDelete, write-mode TOCTOU, binding mismatches.
- Niveau de preuve: **DETERMINISTIC / LOCAL END-TO-END CONVERGENCE PROOF**.
- REAL non relancé: GO Morris REAL non accordé.
- Claims interdits confirmés absents: READY FOR REAL / PRODUCT READY / END-TO-END REAL PROVEN / RUNTIME V3 ADOPTED.

## 14. Dettes restantes (gouvernées)

| Dette | Owner logique | Exit |
|---|---|---|
| D1 inputs-bridge → first-class EC fields | Morris design | optional promotion cycle after commit |
| Mid-turn repositoryHeadSha stamp when managed clone available | Studio runtime | stamp SHA from resolveBoundedReadOnlyBaseHeadSha when cheap |
| Bounded natural REAL StudyFlow after review | Morris | distinct GO REAL |

## 15. Réserves

- Aucune réserve structurante bloquante pour READY FOR COMMIT.
- READY FOR COMMIT ≠ autorisation de commit (GO commit Morris encore requis).

## 16. Décisions Morris requises

1. **GO commit projet** (encore NON ACCORDÉ dans ce cycle) — après revue ChatGPT.
2. GO push / PR / merge — ultérieurs.
3. Optional: first-class EC field promotion (non-blocking).
4. Future bounded REAL — distinct GO.

## 17. Verdict

**READY FOR COMMIT**

Macro localement complet, cohérent, testé, reviewable. Aucun commit projet effectué.
