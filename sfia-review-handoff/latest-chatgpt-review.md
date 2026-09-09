# ChatGPT Critical Review Pack — FULL

## Meta
- **timestamp**: 2026-09-09T23:39:48Z
- **Cycle ID**: SFIA-STUDIO-GREENFIELD-CANDIDATE-TRAJECTORY-DURABLE-PROVENANCE-01
- **Milestone**: Greenfield Product Proof — Governed Cycle Entry
- **SFIA Cycle**: 8 — Delivery / implémentation
- **Typology**: EVOL
- **Profile**: CRITICAL
- **GO Morris consumed**: GO MORRIS — GREENFIELD CANDIDATE TRAJECTORY DURABLE PROVENANCE — DELIVERY
- **Candidate SHA**: 2177277c11c342e72aec4f0b1545cb5cd5c8476f
- **Parent SHA**: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2
- **Anchor (LIVE-proven bridge)**: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2
- **origin/main**: a9f6c310a0826d0e5bd6f7264603382a86564db1
- **Worktree**: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- **Branch**: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- **ZERO NEW REAL**: YES
- **Product push**: NONE
- **PR**: NONE

## Local Git Truth — before
- toplevel: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2
- parent: 3d986d042dacdfae873f07467eee1a20fae1f6d6
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- Product tree clean except .tmp-sfia-review artifacts
- No stash / reset / clean / discard / amend

## Local Git Truth — after
- HEAD (candidate): 2177277c11c342e72aec4f0b1545cb5cd5c8476f
- parent: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2 (= anchor 9d9c8ce7)
- commit message: feat(sfia-studio): persist candidate trajectory provenance
- Product push: none

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
- projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
- sfia-review-handoff/latest-chatgpt-review.md (prior handoff context)
- Anchor candidate: 9d9c8ce7

## Convergence qualification
- V3-F02 Living Project State — served
- V3-F04 explicit epistemology / provenance — served by Option B Observation
- V3-F06 ProjectTrajectory — served (no schema change)
- V3-F09 governed trajectory evolution — entry path only (candidate + provenance)
- Entry LIVE evidence carried forward from FRESH-LIVE-REPLAY on prj:6a6b6d28…:
  CURRENT NEXT_CYCLE LR → bridge UI → candidate ProjectTrajectory v1 durable → LR STALE → survives reload → 0 HD / 0 CycleInstance / 0 START
- Gap closed deterministically: trajectoryId → provenance Observation → recommendationId → semanticKey → canonical targetCycleTypeId
- Label reverse-map ("Cadrage"→cyc:framing) remains presentation-only / NON-AUTHORITY

## Option B disposition
- Epistemic Observation dedicated, persisted in existing Epistemic store
- Links EXACTLY: projectId ↔ source Lifecycle Recommendation ↔ candidate ProjectTrajectory
- No new table / store / ProjectTrajectory field / migration
- Source LR NOT mutated (basisRefs untouched)
- relatedObjects carries IDs only; semanticKey/targetCycleTypeId recovered from LR payload

## KEEP / ADAPT / REJECT
### KEEP
- Lifecycle Recommendation EpistemicItem; currentness; CreateInitialTrajectory; UpdateEpistemicState
- oa_epistemic_items; oa_project_trajectories; Product SQLite UoW; LPS; cycle catalog
- existing bridge fail-closed; W2 for existing contexts

### ADAPT
- prepareCandidateTrajectoryFromCurrentRecommendation (atomic provenance write)
- preCycleCandidateTrajectoryActions deps
- readPreCycleCandidateTrajectory (authoritative targetCycleTypeId from provenance only)
- new candidateTrajectoryProvenance helper + BAR-PROV suite
- TrajectorySurface optional provenance fields on candidate DTO type

### REJECT
- LR basisRefs mutation; LR.relatedObjects as machine protocol
- label reverse-map as identity; audit as SoT
- new relational table / store / ProjectTrajectory field
- fake CycleInstance / W2 OptionSet; HumanDecision / DecisionBasis expansion

## Actor / source convention
- **source**: `candidate-trajectory-provenance:bridge` (`CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE`)
- **actor**: `sys:candidate-trajectory-provenance` role=system authorityLevel=none
- NOT LOCAL_PILOTE_ACTOR / morris / decision_maker
- type=Observation status=active; no lifecycleRecommendation payload; not DecisionRef

## Observation payload
- statement: "Cette trajectoire proposée a été préparée à partir d’une recommandation lifecycle."
- relatedObjects EXACTLY: [projectId, recommendationId, trajectoryId]
- epistemicItemId: server-generated `epi:trj-prov-*` (injectable in tests via newProvenanceObservationId)

## Outer UoW / nested transaction
- Pattern: `oa.projectServices.store.runInTransaction` outer (same as W2 decideTrajectory)
- Inside: CreateInitialTrajectory.execute then UpdateEpistemicState.execute
- Nested OA UoW joins Product transaction via AsyncLocalStorage
- On provenance failure: throw `CandidateTrajectoryBridgeAtomicFailure` → outer rollback
- NO compensation / delete-on-failure / saga / second best-effort TX
- Same correlationId when contracts allow

## Atomic rollback proof (BAR-PROV-12)
- Seam: SqliteProductStore.failNextSave = "epistemic" after CreateInitialTrajectory succeeds logically
- Result: ProjectTrajectory count=0; provenance Observation count=0; LPS version/trajectoryId unchanged
- PASS

## Provenance resolver
- `resolveCandidateTrajectoryProvenance({ projectId, trajectoryId, epistemicItems })`
- Filter: Observation + active + dedicated source + relatedObjects contains projectId+trajectoryId
- 0 → MISSING; >1 → AMBIGUOUS (fail-closed, no order pick); 1 → extract recommendationId from relatedObjects (not statement)
- Load source Recommendation; validate type Recommendation, lifecycleRecommendation present, NEXT_CYCLE intent, semanticKey, targetCycleTypeId canonical, basisRefs.projectId match
- STALE source allowed (currentness ≠ provenance)
- Results: RESOLVED | MISSING | AMBIGUOUS | INVALID

## Label authority removal
- readPreCycleCandidateTrajectory: authoritative targetCycleTypeId ONLY if provenance RESOLVED from LR
- step.label remains display-only
- BAR-PROV-05: corrupted label still resolves canonical cyc:* from LR
- Legacy without Observation: MISSING + targetCycleTypeId null/absent (no invent)

## Legacy LIVE project
- prj:6a6b6d28-cbdb-491c-9625-07fd03c02d1b created BEFORE this Delivery — NOT modified / NOT backfilled
- Expected: candidate readable; provenance MISSING; no authoritative targetCycleTypeId from label
- Historical LIVE DB: READ-ONLY / unchanged by this Delivery

## Bridge success (fresh)
- 1 candidate trajectory v1 + 1 provenance Observation + LPS update in one TX
- Source LR becomes STALE/non-CURRENT; Observation does NOT create new CURRENT NEXT_CYCLE
- 0 HumanDecision / 0 CycleInstance / activeCycleInstanceId=null / 0 START / 0 EC
- Second bridge call refused by existing invariants (≤1 candidate, ≤1 provenance)

## Product files changed (exact)
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`
- `projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryProvenance.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts`

## Validation results
- BAR-PROV focused: PASS (14 tests in candidateTrajectoryProvenance.d0.test.ts covering BAR-PROV-01…20 matrix)
- candidateTrajectoryBridge: PASS (16)
- greenfieldLifecycleBootstrap: PASS (22)
- preCycleRoutingBoundary: PASS (22)
- lifecycleRecommendation.finalCorr: PASS (10)
- qualToGovernedCycle.presentation: PASS (21)
- preCycleTrajectoryCta.ui + trajectorySurface.ui: PASS
- w1TrajectoryDurability + w1EpistemicDurability + cycleTrajectoryEpistemicCkc: PASS
- w2EabcDelivery + w2TrackDPhaseB: PASS
- importBoundaries: PASS
- Full Vitest: 323 passed | 17 skipped files; 3384 passed | 135 skipped tests
- typecheck: PASS
- lint: PASS (no ESLint warnings/errors)
- build: PASS (Next.js 15.5.20)
- git diff --check: PASS
- ZERO NEW REAL: no OpenAI/Agents imports in Delivery files
- No DDL / no new persistence table / no ProjectTrajectory schema change / no DecisionBasis change

## BAR-PROV-01…20
- 01 SUCCESS WRITE — PASS
- 02 EXACT RELATED OBJECTS — PASS
- 03 SOURCE TYPE Observation/active/dedicated — PASS
- 04 EXACT RESTART RECONSTRUCTION (reopen SQLite) — PASS
- 05 NO LABEL AUTHORITY — PASS
- 06 LEGACY MISSING — PASS
- 07 AMBIGUOUS — PASS
- 08 MISSING SOURCE RECOMMENDATION — PASS
- 09 WRONG SOURCE TYPE — PASS
- 10 NON-LIFECYCLE RECOMMENDATION — PASS
- 11 PROJECT MISMATCH — PASS
- 12 ATOMIC ROLLBACK — PASS (BLOCKING)
- 13 CREATE FAILURE — PASS
- 14 DOUBLE INVOCATION — PASS
- 15 CURRENTNESS — PASS
- 16 AUTHORITY (0 HD/Cycle/START/EC) — PASS
- 17 CLIENT HOSTILITY / SERVER OWNERSHIP — PASS
- 18 CANONICAL CYCLE ID — PASS
- 19 SOURCE RECOMMENDATION MAY BE STALE — PASS
- 20 W2 / LIFECYCLE REGRESSION structural — PASS

## BAR-TRJ regression
- candidateTrajectoryBridge.d0.test.ts BAR-TRJ suite preserved and adapted for provenance deps — PASS (16)

## Reserves
- **RESERVE-TRJ-PROVENANCE-01**: CLOSED DETERMINISTICALLY
  (atomic write + exact durable relation + restart reconstruction + no label authority + ambiguity fail-closed + LR non-authoritative + 0 HD/Cycle/START)
  LIVE provenance remains NOT PROVEN.
- **RESERVE-QA-MOCK-01**: OPEN / NON-BLOCKING
- **Legacy pre-fix candidate without provenance** (prj:6a6b6d28…): explicit compatibility MISSING; no backfill; repair gate separate if ever needed

## Next capability
- candidate durable + exact provenance → qualify HumanDecision greenfield contract (OUT OF SCOPE here)
- Do NOT claim: LIVE provenance proven, HD bridge proven, validated trajectory, START, EC, END-TO-END REAL, R2 CLOSED, PR READY, runtime v3 ADOPTED

## Final verdict
GREENFIELD CANDIDATE TRAJECTORY DURABLE PROVENANCE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

Claim maximum:
- candidate trajectory creation and provenance Observation are atomic
- trajectory → source Recommendation reconstruction is exact after restart
- semanticKey and canonical targetCycleTypeId come from the durable LR source
- label is presentation only
- no new persistence/schema
- no authority created
- ZERO NEW REAL

---

# EXPLOITABLE MODIFIED CONTENT (FULL FILES)


## FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance.ts`

```typescript
/**
 * Option B — durable provenance Observation for greenfield candidate trajectories.
 *
 * Links projectId ↔ source Lifecycle Recommendation ↔ candidate ProjectTrajectory
 * via existing EpistemicItem store. No new table, no ProjectTrajectory field.
 *
 * Authority: none. Not a Recommendation. Not a HumanDecision.
 */
import { randomBytes } from "node:crypto";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { EpistemicItem } from "../../domain/types";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";

/** Stable Product source for bridge provenance Observations. */
export const CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE =
  "candidate-trajectory-provenance:bridge" as const;

/**
 * System actor for Studio-materialized provenance Observations.
 * Reuses system/none pattern (cf. sys:project-create) — never Pilote / Morris.
 */
export const CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR: ActorReference =
  Object.freeze({
    actorId: "sys:candidate-trajectory-provenance",
    role: "system",
    displayName: "Candidate trajectory provenance",
    authorityLevel: "none",
  });

export const CANDIDATE_TRAJECTORY_PROVENANCE_STATEMENT =
  "Cette trajectoire proposée a été préparée à partir d’une recommandation lifecycle.";

export type CandidateTrajectoryProvenanceStatus =
  | "RESOLVED"
  | "MISSING"
  | "AMBIGUOUS"
  | "INVALID";

export type CandidateTrajectoryProvenanceResolved = {
  status: "RESOLVED";
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  trajectoryId: string;
  sourceRecommendationEpistemicStatus: EpistemicItem["status"];
};

export type CandidateTrajectoryProvenanceUnresolved = {
  status: Exclude<CandidateTrajectoryProvenanceStatus, "RESOLVED">;
  reason: string;
  trajectoryId: string;
  projectId: string;
  matchingObservationIds?: readonly string[];
};

export type CandidateTrajectoryProvenanceResult =
  | CandidateTrajectoryProvenanceResolved
  | CandidateTrajectoryProvenanceUnresolved;

export function newProvenanceObservationId(): string {
  return `epi:trj-prov-${randomBytes(8).toString("hex")}`;
}

export function buildCandidateTrajectoryProvenanceRelatedObjects(input: {
  projectId: string;
  recommendationId: string;
  trajectoryId: string;
}): string[] {
  return [input.projectId, input.recommendationId, input.trajectoryId];
}

export function buildCandidateTrajectoryProvenanceObservationItem(input: {
  epistemicItemId: string;
  projectId: string;
  recommendationId: string;
  trajectoryId: string;
}): {
  epistemicItemId: string;
  type: "Observation";
  statement: string;
  status: "active";
  source: typeof CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE;
  relatedObjects: string[];
} {
  return {
    epistemicItemId: input.epistemicItemId,
    type: "Observation",
    statement: CANDIDATE_TRAJECTORY_PROVENANCE_STATEMENT,
    status: "active",
    source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
    relatedObjects: buildCandidateTrajectoryProvenanceRelatedObjects({
      projectId: input.projectId,
      recommendationId: input.recommendationId,
      trajectoryId: input.trajectoryId,
    }),
  };
}

function extractRecommendationIdFromRelatedObjects(
  relatedObjects: readonly string[],
  projectId: string,
  trajectoryId: string,
):
  | { ok: true; recommendationId: string }
  | { ok: false; reason: string } {
  const hasProject = relatedObjects.includes(projectId);
  const hasTrajectory = relatedObjects.includes(trajectoryId);
  if (!hasProject || !hasTrajectory) {
    return { ok: false, reason: "related_objects_missing_project_or_trajectory" };
  }
  const epiRefs = relatedObjects.filter(
    (id) =>
      typeof id === "string" &&
      id.startsWith("epi:") &&
      id !== projectId &&
      id !== trajectoryId,
  );
  if (epiRefs.length === 0) {
    return { ok: false, reason: "related_objects_missing_recommendation_id" };
  }
  if (epiRefs.length > 1) {
    return { ok: false, reason: "related_objects_ambiguous_recommendation_id" };
  }
  return { ok: true, recommendationId: epiRefs[0]! };
}

/**
 * Exact restart-safe reconstruction:
 * trajectoryId → provenance Observation → recommendationId → LR payload.
 * Never uses step.label reverse-mapping.
 */
export function resolveCandidateTrajectoryProvenance(input: {
  projectId: string;
  trajectoryId: string;
  epistemicItems: readonly EpistemicItem[];
}): CandidateTrajectoryProvenanceResult {
  const { projectId, trajectoryId, epistemicItems } = input;
  const unresolved = (
    status: Exclude<CandidateTrajectoryProvenanceStatus, "RESOLVED">,
    reason: string,
    matchingObservationIds?: readonly string[],
  ): CandidateTrajectoryProvenanceUnresolved => ({
    status,
    reason,
    trajectoryId,
    projectId,
    matchingObservationIds,
  });

  if (!projectId?.startsWith("prj:") || !trajectoryId?.startsWith("trj:")) {
    return unresolved("INVALID", "project_or_trajectory_id_invalid");
  }

  const matches = epistemicItems.filter((item) => {
    if (item.type !== "Observation") return false;
    if (item.status !== "active") return false;
    if (item.source !== CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE) return false;
    const related = item.relatedObjects ?? [];
    return related.includes(projectId) && related.includes(trajectoryId);
  });

  if (matches.length === 0) {
    return unresolved("MISSING", "provenance_observation_absent");
  }
  if (matches.length > 1) {
    return unresolved(
      "AMBIGUOUS",
      "multiple_provenance_observations",
      matches.map((m) => m.epistemicItemId),
    );
  }

  const observation = matches[0]!;
  const extracted = extractRecommendationIdFromRelatedObjects(
    observation.relatedObjects ?? [],
    projectId,
    trajectoryId,
  );
  if (!extracted.ok) {
    return unresolved("INVALID", extracted.reason, [observation.epistemicItemId]);
  }

  const recommendation = epistemicItems.find(
    (item) => item.epistemicItemId === extracted.recommendationId,
  );
  if (!recommendation) {
    return unresolved(
      "INVALID",
      "source_recommendation_absent",
      [observation.epistemicItemId],
    );
  }
  if (recommendation.type !== "Recommendation") {
    return unresolved(
      "INVALID",
      "source_not_recommendation",
      [observation.epistemicItemId],
    );
  }

  const lr = recommendation.lifecycleRecommendation;
  if (!lr) {
    return unresolved(
      "INVALID",
      "source_missing_lifecycle_recommendation_payload",
      [observation.epistemicItemId],
    );
  }
  if (lr.intent !== "NEXT_CYCLE") {
    return unresolved(
      "INVALID",
      "source_intent_not_next_cycle",
      [observation.epistemicItemId],
    );
  }
  if (!lr.semanticKey || typeof lr.semanticKey !== "string") {
    return unresolved(
      "INVALID",
      "source_semantic_key_missing",
      [observation.epistemicItemId],
    );
  }
  if (!lr.targetCycleTypeId || typeof lr.targetCycleTypeId !== "string") {
    return unresolved(
      "INVALID",
      "source_target_cycle_type_missing",
      [observation.epistemicItemId],
    );
  }
  if (lr.basisRefs?.projectId && lr.basisRefs.projectId !== projectId) {
    return unresolved(
      "INVALID",
      "source_project_mismatch",
      [observation.epistemicItemId],
    );
  }
  // Canonical cycle id check — no label reverse map.
  const catalog = getCycleTypeById(lr.targetCycleTypeId);
  if (!catalog || catalog.lifecycleStatus !== "active") {
    return unresolved(
      "INVALID",
      "source_target_cycle_type_not_canonical",
      [observation.epistemicItemId],
    );
  }

  return {
    status: "RESOLVED",
    provenanceObservationId: observation.epistemicItemId,
    recommendationId: recommendation.epistemicItemId,
    semanticKey: lr.semanticKey,
    targetCycleTypeId: lr.targetCycleTypeId,
    trajectoryId,
    sourceRecommendationEpistemicStatus: recommendation.status,
  };
}
```


## FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts`

```typescript
/**
 * Greenfield bridge (D-RB-BOOT-01 / Option B2):
 * CURRENT NEXT_CYCLE Lifecycle Recommendation → durable candidate ProjectTrajectory
 * + Option B provenance Observation (atomic Product UoW).
 *
 * Deterministic Product mechanics only — no model call, no HD, no CycleInstance, no START.
 * Reuses greenfield bootstrap eligibility + CreateInitialTrajectory.
 */
import { randomBytes } from "node:crypto";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ActorReference } from "@/lib/oa/doctrine";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
  TrajectoryStep,
} from "../../domain/types";
import type { CreateInitialTrajectory } from "../createInitialTrajectory";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
import {
  assessGreenfieldPreTrajectoryBootstrapEligibility,
  resolveTrajectoryBootstrapPresence,
  validateCanonicalTargetCycleTypeId,
} from "./greenfieldLifecycleBootstrap";
import { deriveLifecycleBlockersFromEpistemicItems } from "../deriveLifecycleBlockers";
import {
  selectCurrentLifecycleRecommendations,
  type RebuildLifecycleRecommendationBasisFacts,
} from "./currentness";
import type { LifecycleRecommendationMaterialDimension } from "./materialReaderContract";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "./noraActor";
import type { LifecycleRecommendationEnvelope } from "./types";
import {
  buildCandidateTrajectoryProvenanceObservationItem,
  CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
  newProvenanceObservationId,
  resolveCandidateTrajectoryProvenance,
  type CandidateTrajectoryProvenanceStatus,
} from "./candidateTrajectoryProvenance";

/** Thrown inside outer Product UoW so nested writes roll back together. */
export class CandidateTrajectoryBridgeAtomicFailure extends Error {
  readonly code: string;
  readonly reason: string;
  constructor(code: string, reason: string) {
    super(`${code}:${reason}`);
    this.name = "CandidateTrajectoryBridgeAtomicFailure";
    this.code = code;
    this.reason = reason;
  }
}

function newCorId(): string {
  return `cor:${randomBytes(8).toString("hex")}`;
}

function newTrajectoryId(): string {
  return `trj:lr-bridge-${randomBytes(6).toString("hex")}`;
}

function newStepId(canonicalKey: string): string {
  const slug = canonicalKey.replace(/[^a-z0-9-]/gi, "").slice(0, 24) || "cycle";
  return `stp:${slug}-${randomBytes(4).toString("hex")}`;
}

export type PrepareCandidateTrajectoryDeps = {
  trajectories: TrajectoryRepositoryPort;
  createInitialTrajectory: CreateInitialTrajectory;
  updateEpistemicState: UpdateEpistemicState;
  /**
   * Outer Product UoW (projectServices.store / SqliteProductStore).
   * Nested CreateInitialTrajectory + UpdateEpistemicState join the same TX.
   */
  runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
  listEpistemicByProject: (projectId: string) => Promise<EpistemicItem[]>;
  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
  listDecisionsByProject: (projectId: string) => Promise<HumanDecision[]>;
  listEvidenceByProject?: (projectId: string) => Promise<Evidence[]>;
  getCurrentLps: (projectId: string) => Promise<
    | {
        ok: true;
        livingProjectState: {
          version: number;
          activeCycleInstanceId?: string | null;
          trajectoryId?: string | null;
          trajectoryVersion?: number | null;
          doctrinePackageRef?: {
            doctrinePackageId: string;
            version: string;
            digest: string;
          };
        };
      }
    | { ok: false }
  >;
  getProjectDoctrinePin?: (projectId: string) => Promise<{
    doctrinePackageId: string;
    version: string;
    digest: string;
  } | null>;
  /** Injected for tests — defaults to Nora lifecycle non-authoritative actor. */
  createdBy?: ActorReference;
  /** System actor for provenance Observation — defaults to sys:candidate-trajectory-provenance. */
  provenanceCreatedBy?: ActorReference;
  /** Injected ids for deterministic tests. */
  newTrajectoryId?: () => string;
  newStepId?: (canonicalKey: string) => string;
  newProvenanceObservationId?: () => string;
  correlationId?: string;
};

export type PrepareCandidateTrajectorySuccess = {
  ok: true;
  projectId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  catalogLabel: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
  provenanceObservationId: string;
  correlationId: string;
  lpsVersionAfter: number;
  sourceDerivedCurrentnessBefore: "CURRENT";
};

export type PrepareCandidateTrajectoryFailure = {
  ok: false;
  code: string;
  reason: string;
  correlationId: string;
};

export type PrepareCandidateTrajectoryResult =
  | PrepareCandidateTrajectorySuccess
  | PrepareCandidateTrajectoryFailure;

/**
 * Resolve exactly one CURRENT NEXT_CYCLE Lifecycle Recommendation from durable truth.
 * Ambiguity (0 or >1) → fail-closed.
 */
export function selectExactCurrentNextCycleRecommendation(
  current: readonly LifecycleRecommendationEnvelope[],
):
  | { ok: true; recommendation: LifecycleRecommendationEnvelope }
  | { ok: false; code: string; reason: string } {
  const next = current.filter(
    (r) =>
      r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
  );
  if (next.length === 0) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      reason: "no_current_next_cycle_lifecycle_recommendation",
    };
  }
  if (next.length > 1) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE",
      reason: "multiple_current_next_cycle_recommendations",
    };
  }
  return { ok: true, recommendation: next[0]! };
}

export function buildSingleRecommendedCycleStep(input: {
  targetCycleTypeId: string;
  stepId: string;
}):
  | { ok: true; step: TrajectoryStep; catalogLabel: string; cycleTypeId: string }
  | { ok: false; code: string; reason: string } {
  const gate = validateCanonicalTargetCycleTypeId(input.targetCycleTypeId);
  if (!gate.ok) {
    return { ok: false, code: gate.code, reason: gate.reason };
  }
  const entry = getCycleTypeById(gate.cycleTypeId);
  if (!entry || entry.lifecycleStatus !== "active") {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
      reason: "target_cycle_type_not_selectable",
    };
  }
  return {
    ok: true,
    cycleTypeId: entry.cycleTypeId,
    catalogLabel: entry.label,
    step: {
      stepId: input.stepId,
      order: 1,
      label: entry.label,
      state: "pending",
    },
  };
}

/**
 * Server-owned bridge. Client must supply projectId only.
 */
export async function prepareCandidateTrajectoryFromCurrentRecommendation(input: {
  projectId: string;
  deps: PrepareCandidateTrajectoryDeps;
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
}): Promise<PrepareCandidateTrajectoryResult> {
  const correlationId = input.deps.correlationId ?? newCorId();
  const fail = (code: string, reason: string): PrepareCandidateTrajectoryFailure => ({
    ok: false,
    code,
    reason,
    correlationId,
  });

  const projectId = input.projectId;
  if (!projectId || !projectId.startsWith("prj:")) {
    return fail("TRJ_BRIDGE_PROJECT_INVALID", "project_id_invalid");
  }

  const lpsResult = await input.deps.getCurrentLps(projectId);
  if (!lpsResult.ok) {
    return fail("TRJ_BRIDGE_LPS_UNAVAILABLE", "current_lps_unreadable");
  }
  const lps = lpsResult.livingProjectState;
  const expectedLpsVersion = lps.version;

  let epistemicItems: EpistemicItem[];
  let cycles: CycleInstance[];
  let decisions: HumanDecision[];
  let evidence: Evidence[] = [];
  const failed = new Set<LifecycleRecommendationMaterialDimension>(
    input.failedMaterialDimensions ?? [],
  );

  try {
    epistemicItems = await input.deps.listEpistemicByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_EPISTEMIC_UNAVAILABLE", "epistemic_reader_failed");
  }
  try {
    cycles = await input.deps.listCyclesByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_CYCLES_UNAVAILABLE", "cycle_reader_failed");
  }
  try {
    decisions = await input.deps.listDecisionsByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_DECISIONS_UNAVAILABLE", "decision_reader_failed");
  }
  if (input.deps.listEvidenceByProject) {
    try {
      evidence = await input.deps.listEvidenceByProject(projectId);
    } catch {
      failed.add("evidence");
    }
  }

  const presence = await resolveTrajectoryBootstrapPresence(
    input.deps.trajectories,
    projectId,
  );
  if (presence.kind === "unknown") {
    return fail("TRJ_BRIDGE_TRAJECTORY_UNKNOWN", presence.reason);
  }
  if (presence.kind !== "never") {
    return fail(
      presence.kind === "current"
        ? "TRJ_BRIDGE_TRAJECTORY_CURRENT_PRESENT"
        : "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT",
      presence.kind === "current"
        ? "current_trajectory_present"
        : "prior_or_candidate_trajectory_exists",
    );
  }

  const doctrinePin =
    (await input.deps.getProjectDoctrinePin?.(projectId)) ??
    lps.doctrinePackageRef ??
    null;

  // Same material basis as lifecycle read-side: derive blockers from durable
  // EpistemicItems — never default to [] when the reader succeeded.
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);

  const facts: RebuildLifecycleRecommendationBasisFacts = {
    cycles,
    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
    lpsVersion: lps.version,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory: null,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
  };

  const current = selectCurrentLifecycleRecommendations({
    items: epistemicItems,
    ...facts,
    failedMaterialDimensions: failed,
  });

  const selected = selectExactCurrentNextCycleRecommendation(current);
  if (!selected.ok) {
    return fail(selected.code, selected.reason);
  }
  const recommendation = selected.recommendation;

  if (recommendation.epistemicStatus !== "active") {
    return fail(
      "TRJ_BRIDGE_RECOMMENDATION_NOT_ACTIVE",
      "recommendation_epistemic_status_not_active",
    );
  }
  if (recommendation.authority !== "none") {
    return fail("TRJ_BRIDGE_AUTHORITY_FORBIDDEN", "authority_must_be_none");
  }
  if (recommendation.isHumanDecision !== false) {
    return fail(
      "TRJ_BRIDGE_HUMAN_DECISION_FORBIDDEN",
      "recommendation_must_not_be_human_decision",
    );
  }
  if (recommendation.subjectCycleInstanceId) {
    return fail(
      "TRJ_BRIDGE_SUBJECT_FORBIDDEN",
      "subject_cycle_not_allowed_for_greenfield_bridge",
    );
  }
  if (recommendation.targetCycleInstanceId) {
    return fail(
      "TRJ_BRIDGE_TARGET_INSTANCE_FORBIDDEN",
      "target_cycle_instance_not_allowed_for_greenfield_bridge",
    );
  }

  const eligibility = assessGreenfieldPreTrajectoryBootstrapEligibility({
    candidate: {
      intent: recommendation.intent,
      statement: recommendation.statement,
      subjectCycleInstanceId: recommendation.subjectCycleInstanceId,
      targetCycleInstanceId: recommendation.targetCycleInstanceId,
      targetCycleTypeId: recommendation.targetCycleTypeId,
    },
    presence,
    cycles,
    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
    decisions,
  });
  if (!eligibility.eligible) {
    return fail(eligibility.code, eligibility.reason);
  }

  const targetCycleTypeId = recommendation.targetCycleTypeId;
  if (!targetCycleTypeId) {
    return fail(
      "LR_TARGET_CYCLE_TYPE_MISSING",
      "target_cycle_type_required_for_type_based_next",
    );
  }

  const mkStepId = input.deps.newStepId ?? newStepId;
  const entry = getCycleTypeById(targetCycleTypeId);
  const canonicalKey = entry?.canonicalKey ?? "cycle";
  const stepId = mkStepId(canonicalKey);
  const stepBuild = buildSingleRecommendedCycleStep({
    targetCycleTypeId,
    stepId,
  });
  if (!stepBuild.ok) {
    return fail(stepBuild.code, stepBuild.reason);
  }

  const trajectoryId = (input.deps.newTrajectoryId ?? newTrajectoryId)();
  const provenanceObservationId = (
    input.deps.newProvenanceObservationId ?? newProvenanceObservationId
  )();
  const createdBy =
    input.deps.createdBy ?? NORA_LIFECYCLE_RECOMMENDATION_ACTOR;
  const provenanceCreatedBy =
    input.deps.provenanceCreatedBy ?? CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR;

  if (typeof input.deps.runInTransaction !== "function") {
    return fail(
      "TRJ_BRIDGE_UOW_UNAVAILABLE",
      "product_uow_required_for_provenance_atomicity",
    );
  }
  if (!input.deps.updateEpistemicState) {
    return fail(
      "TRJ_BRIDGE_EPISTEMIC_WRITER_UNAVAILABLE",
      "update_epistemic_state_required",
    );
  }

  const provenanceItem = buildCandidateTrajectoryProvenanceObservationItem({
    epistemicItemId: provenanceObservationId,
    projectId,
    recommendationId: recommendation.recommendationId,
    trajectoryId,
  });

  let trajectory: ProjectTrajectory;
  let lpsVersionAfter: number;

  try {
    const atomic = await input.deps.runInTransaction(async () => {
      const created = await input.deps.createInitialTrajectory.execute({
        trajectoryId,
        projectId,
        steps: [stepBuild.step],
        status: "candidate",
        createdBy,
        correlationId,
        expectedLpsVersion,
      });

      if (!created.ok) {
        throw new CandidateTrajectoryBridgeAtomicFailure(
          created.error.detailCode,
          created.error.internalCauseRef ?? "create_initial_trajectory_failed",
        );
      }

      if (created.trajectory.decidedByDecisionRef) {
        throw new CandidateTrajectoryBridgeAtomicFailure(
          "TRJ_BRIDGE_DECISION_REF_LEAK",
          "candidate_must_not_carry_decision_ref",
        );
      }

      const provenanceWrite = await input.deps.updateEpistemicState.execute({
        projectId,
        items: [provenanceItem],
        createdBy: provenanceCreatedBy,
        correlationId,
      });

      if (!provenanceWrite.ok) {
        throw new CandidateTrajectoryBridgeAtomicFailure(
          provenanceWrite.error.detailCode,
          provenanceWrite.error.internalCauseRef ??
            "provenance_observation_write_failed",
        );
      }

      return {
        trajectory: created.trajectory,
        lpsVersionAfter:
          created.livingProjectStateVersion ?? expectedLpsVersion + 1,
      };
    });
    trajectory = atomic.trajectory;
    lpsVersionAfter = atomic.lpsVersionAfter;
  } catch (err) {
    if (err instanceof CandidateTrajectoryBridgeAtomicFailure) {
      return fail(err.code, err.reason);
    }
    return fail(
      "TRJ_BRIDGE_ATOMIC_PERSISTENCE_FAILURE",
      err instanceof Error ? err.message : "atomic_bridge_failed",
    );
  }

  return {
    ok: true,
    projectId,
    recommendationId: recommendation.recommendationId,
    semanticKey: recommendation.semanticKey,
    targetCycleTypeId: stepBuild.cycleTypeId,
    catalogLabel: stepBuild.catalogLabel,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    stepId: stepBuild.step.stepId,
    provenanceObservationId,
    correlationId,
    lpsVersionAfter,
    sourceDerivedCurrentnessBefore: "CURRENT",
  };
}

/**
 * Durable read of a pre-cycle candidate ProjectTrajectory (not current).
 * Prefer LPS trajectory pointer when present; never coerces candidate to current.
 * Authoritative targetCycleTypeId comes only from Option B provenance (never label map).
 */
export async function readPreCycleCandidateTrajectory(input: {
  projectId: string;
  trajectories: TrajectoryRepositoryPort;
  getCurrentLps: PrepareCandidateTrajectoryDeps["getCurrentLps"];
  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
  listEpistemicByProject: (projectId: string) => Promise<EpistemicItem[]>;
}): Promise<
  | {
      ok: true;
      candidate: {
        trajectoryId: string;
        version: number;
        status: "candidate";
        projectId: string;
        steps: readonly TrajectoryStep[];
        catalogLabel: string | null;
        /** Authoritative only when provenanceStatus === "RESOLVED". */
        targetCycleTypeId: string | null;
        provenanceStatus: CandidateTrajectoryProvenanceStatus;
        provenanceObservationId: string | null;
        recommendationId: string | null;
        semanticKey: string | null;
        decidedByDecisionRef: null;
        isEffectiveCurrent: false;
      };
    }
  | { ok: true; candidate: null }
  | { ok: false; code: string; reason: string }
> {
  const lpsResult = await input.getCurrentLps(input.projectId);
  if (!lpsResult.ok) {
    return { ok: false, code: "TRJ_BRIDGE_LPS_UNAVAILABLE", reason: "lps_unreadable" };
  }
  const lps = lpsResult.livingProjectState;

  try {
    const cycles = await input.listCyclesByProject(input.projectId);
    if (cycles.length > 0 || lps.activeCycleInstanceId) {
      // Pre-cycle candidate surface is only for greenfield-before-cycle.
      // Still allow reading LPS-linked candidate if present, but callers gate UI.
    }
  } catch {
    return {
      ok: false,
      code: "TRJ_BRIDGE_CYCLES_UNAVAILABLE",
      reason: "cycle_reader_failed",
    };
  }

  let trajectory: ProjectTrajectory | null = null;
  try {
    if (
      typeof lps.trajectoryVersion === "number" &&
      lps.trajectoryVersion >= 1
    ) {
      trajectory =
        (await input.trajectories.findByProjectAndVersion(
          input.projectId,
          lps.trajectoryVersion,
        )) ?? null;
    }
    if (!trajectory) {
      const presence = await resolveTrajectoryBootstrapPresence(
        input.trajectories,
        input.projectId,
      );
      if (presence.kind === "unknown") {
        return {
          ok: false,
          code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
          reason: presence.reason,
        };
      }
      if (presence.kind === "history_without_current") {
        trajectory =
          (await input.trajectories.findByProjectAndVersion(
            input.projectId,
            1,
          )) ?? null;
      }
    }
  } catch (error) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
      reason:
        error instanceof Error ? error.message : "trajectory_reader_failed",
    };
  }

  if (!trajectory || trajectory.status !== "candidate") {
    return { ok: true, candidate: null };
  }

  const current = await input.trajectories.findCurrentByProjectId(
    input.projectId,
  );
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    // Candidate must not be effective current — refuse to mis-present.
    return { ok: true, candidate: null };
  }

  const first = trajectory.steps[0] ?? null;
  // Presentation only — never identity.
  const catalogLabel = first?.label ?? null;

  let epistemicItems: EpistemicItem[];
  try {
    epistemicItems = await input.listEpistemicByProject(input.projectId);
  } catch {
    return {
      ok: false,
      code: "TRJ_BRIDGE_EPISTEMIC_UNAVAILABLE",
      reason: "epistemic_reader_failed",
    };
  }

  const provenance = resolveCandidateTrajectoryProvenance({
    projectId: input.projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems,
  });

  if (provenance.status === "RESOLVED") {
    const entry = getCycleTypeById(provenance.targetCycleTypeId);
    return {
      ok: true,
      candidate: {
        trajectoryId: trajectory.trajectoryId,
        version: trajectory.version,
        status: "candidate",
        projectId: trajectory.projectId,
        steps: trajectory.steps,
        catalogLabel: entry?.label ?? catalogLabel,
        targetCycleTypeId: provenance.targetCycleTypeId,
        provenanceStatus: "RESOLVED",
        provenanceObservationId: provenance.provenanceObservationId,
        recommendationId: provenance.recommendationId,
        semanticKey: provenance.semanticKey,
        decidedByDecisionRef: null,
        isEffectiveCurrent: false,
      },
    };
  }

  return {
    ok: true,
    candidate: {
      trajectoryId: trajectory.trajectoryId,
      version: trajectory.version,
      status: "candidate",
      projectId: trajectory.projectId,
      steps: trajectory.steps,
      catalogLabel,
      // Do not invent cyc:* from label.
      targetCycleTypeId: null,
      provenanceStatus: provenance.status,
      provenanceObservationId: null,
      recommendationId: null,
      semanticKey: null,
      decidedByDecisionRef: null,
      isEffectiveCurrent: false,
    },
  };
}
```


## FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`

```typescript
export * from "./types";
export * from "./basisFingerprint";
export * from "./resolveCanonicalBasis";
export * from "./validateLifecycleRecommendation";
export * from "./materializeLifecycleRecommendation";
export * from "./currentness";
export * from "./produceLifecycleRecommendation";
export * from "./materializeFromProductTurn";
export * from "./materialReaderContract";
export * from "./noraActor";
export * from "./greenfieldLifecycleBootstrap";
export * from "./prepareCandidateTrajectoryFromCurrentRecommendation";
export * from "./candidateTrajectoryProvenance";
```


## FILE: `projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts`

```typescript
"use server";

/**
 * Greenfield pre-cycle candidate trajectory bridge — thin server actions.
 * Client may send projectId only. ZERO model calls. No HD / Cycle / START.
 */

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import type { CandidateTrajectoryProvenanceStatus } from "@/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance";

export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  recommendationId?: string;
  semanticKey?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  provenanceObservationId?: string;
  correlationId?: string;
  lpsVersionAfter?: number;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const result = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId: input.projectId,
    deps: {
      trajectories: oa.cycleServices.trajectories,
      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      runInTransaction: (fn) => oa.projectServices.store.runInTransaction(fn),
      listEpistemicByProject: (projectId) =>
        oa.cycleServices.epistemic.listByProject(projectId),
      listCyclesByProject: (projectId) =>
        oa.cycleServices.cycles.listByProject(projectId),
      listDecisionsByProject: (projectId) =>
        oa.decisionServices.decisions.listByProject(projectId),
      listEvidenceByProject: (projectId) =>
        oa.evidenceReviewServices.repository.listByProject(projectId),
      getCurrentLps: (projectId) =>
        oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
      getProjectDoctrinePin: async (projectId) => {
        const project = await oa.projectServices.getProject.execute({
          projectId,
        });
        if (!project.ok) return null;
        const pin = project.project.doctrinePackageRef;
        return pin
          ? {
              doctrinePackageId: pin.doctrinePackageId,
              version: pin.version,
              digest: pin.digest,
            }
          : null;
      },
    },
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      correlationId: result.correlationId,
    };
  }
  return {
    ok: true,
    recommendationId: result.recommendationId,
    semanticKey: result.semanticKey,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    provenanceObservationId: result.provenanceObservationId,
    correlationId: result.correlationId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}

/**
 * Durable pre-cycle projection: candidate trajectory + CURRENT NEXT_CYCLE flag.
 * CURRENT flag uses the same material basis as lifecycle read-side (incl. blockers).
 * Authoritative targetCycleTypeId only when provenanceStatus === RESOLVED.
 */
export async function projectAssistantReadPreCycleCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  candidate?: {
    trajectoryId: string;
    version: number;
    status: "candidate";
    projectId: string;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
    }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus: CandidateTrajectoryProvenanceStatus;
    provenanceObservationId: string | null;
    recommendationId: string | null;
    semanticKey: string | null;
    decidedByDecisionRef: null;
    isEffectiveCurrent: false;
  } | null;
  activeCycleInstanceId?: string | null;
  /** Server-derived via selectCurrentLifecycleRecommendations (canonical basis). */
  hasCurrentNextCycleRecommendation?: boolean;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const activeCycleInstanceId = lps.ok
    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
    : null;

  const result = await readPreCycleCandidateTrajectory({
    projectId: input.projectId,
    trajectories: oa.cycleServices.trajectories,
    getCurrentLps: (projectId) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    listCyclesByProject: (projectId) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listEpistemicByProject: (projectId) =>
      oa.cycleServices.epistemic.listByProject(projectId),
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      activeCycleInstanceId,
      hasCurrentNextCycleRecommendation: false,
    };
  }

  let hasCurrentNextCycleRecommendation = false;
  try {
    const epistemicItems = await oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
    const cycles = await oa.cycleServices.cycles.listByProject(input.projectId);
    const decisions =
      await oa.decisionServices.decisions.listByProject(input.projectId);
    let evidence: Awaited<
      ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
    > = [];
    const failed = new Set<LifecycleRecommendationMaterialDimension>();
    try {
      evidence = await oa.evidenceReviewServices.repository.listByProject(
        input.projectId,
      );
    } catch {
      failed.add("evidence");
    }

    let trajectory = null;
    try {
      const traj = await oa.cycleServices.getCurrentTrajectory.execute({
        projectId: input.projectId,
      });
      trajectory = traj.ok ? traj.trajectory : null;
    } catch {
      failed.add("trajectory");
    }

    const project = await oa.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    const doctrinePin = project.ok
      ? (project.project.doctrinePackageRef ??
        (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
      : lps.ok
        ? lps.livingProjectState.doctrinePackageRef
        : undefined;

    const blockersSnap =
      deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
    const current = selectCurrentLifecycleRecommendations({
      items: epistemicItems,
      cycles,
      lpsActiveCycleInstanceId: activeCycleInstanceId,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
      doctrinePackageVersion: doctrinePin?.version ?? null,
      doctrinePackageDigest: doctrinePin?.digest ?? null,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.statements,
      failedMaterialDimensions: failed,
    });
    hasCurrentNextCycleRecommendation = current.some(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    );
  } catch {
    // Fail closed for the flag — do not invent CURRENT.
    hasCurrentNextCycleRecommendation = false;
  }

  return {
    ok: true,
    candidate: result.candidate,
    activeCycleInstanceId,
    hasCurrentNextCycleRecommendation,
  };
}
```


## FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```typescript
"use client";

/**
 * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection, effective authority, and (W3-A) fixture
 * governed Execute after AUTHORIZED.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path.
 */

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  w2AmendExecutionContractAction,
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2GovernedExecuteCancelAction,
  w2GovernedExecuteCompleteAction,
  w2GovernedExecuteSelectAction,
  w2GovernedExecuteStartAction,
  w2InspectExecutionContractAction,
  w2MaterializeProductOutcomeAction,
  w2PrepareExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
  w2RehydrateProductOutcomeAction,
} from "@/features/project-assistant/w2/actions";
import { projectAssistantReadPreCycleCandidateTrajectoryAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import type {
  AmendExecutionContractSuccess,
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseSuccess,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
  W3BProductOutcomeDto,
  W3cPostEvidenceLoopDto,
} from "@/features/project-assistant/w2/types";
import {
  W4C_NEXT_ACTION_LEAD,
  W4C_POST_EVIDENCE_HEADING,
  W4C_PRODUCT_OUTCOME_LABELS,
} from "@/features/project-assistant/presentationLabels";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
import styles from "./TrajectorySurface.module.css";

/**
 * Presentation-only labels for ExecutionContractStatus.
 * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
 */
const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
  {
    draft: "Brouillon",
    proposed: "Proposé",
    validated: "Validé",
    confirmation_required: "Confirmation requise",
    confirmed: "Confirmation enregistrée",
    executing: "Exécution en cours",
    completed: "Exécution terminée",
    failed: "Échec d'exécution",
    cancelled: "Annulé",
    superseded: "Remplacé",
  };

function executionContractStatusLabel(status: string): string {
  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
  }
  return "État du contrat indisponible";
}

/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly effectConfirmationRequired?: boolean;
  readonly effectConfirmationLevel?: string | null;
};

type AmendmentNotice = {
  readonly priorExecutionContractId: string;
  readonly additionalConstraint: string;
  readonly statusLabel: string;
  readonly priorInspectionDoesNotCoverSuccessor: true;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "qualify"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization"
  | "amendment"
  | "execute";

/**
 * Yield so React can commit and the browser can paint each Attempt phase.
 * Double rAF only — no fixed-duration sleep / business latency (R09-R).
 */
function yieldBrowserPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
  recoveryProposeSignal = 0,
  durableRefreshSignal = 0,
  composition = "standalone",
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
  recoveryProposeSignal?: number;
  /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
  durableRefreshSignal?: number;
  /**
   * H-01 Option A: embed visually in the LPS piloting region.
   * Presentation-only — does not change ProjectTrajectory domain identity.
   */
  composition?: "standalone" | "lps-embedded";
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [preCycleCandidate, setPreCycleCandidate] = useState<{
    trajectoryId: string;
    version: number;
    status: "candidate";
    steps: readonly { stepId: string; order: number; label: string; state: string }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus?: string;
    provenanceObservationId?: string | null;
    recommendationId?: string | null;
    semanticKey?: string | null;
  } | null>(null);
  const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
    string | null
  >(null);
  const [hasCurrentNextCycleRecommendation, setHasCurrentNextCycleRecommendation] =
    useState(false);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);
  const [amendmentDraft, setAmendmentDraft] = useState("");
  const [amendmentNotice, setAmendmentNotice] =
    useState<AmendmentNotice | null>(null);
  const [attempt, setAttempt] =
    useState<GovernedExecuteAttemptProjection | null>(null);
  const [attemptPhase, setAttemptPhase] = useState<
    GovernedExecutePhaseSuccess["phase"] | null
  >(null);
  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
    null,
  );
  const [productOutcome, setProductOutcome] =
    useState<W3BProductOutcomeDto | null>(null);
  const [postEvidence, setPostEvidence] =
    useState<W3cPostEvidenceLoopDto | null>(null);
  const [productEvidencePending, setProductEvidencePending] = useState(false);
  const [qualifiedOperationKind, setQualifiedOperationKind] =
    useState<QualifiedOperationKind | null>(null);

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
  ): void {
    flushSync(() => {
      if (nextAttempt) setAttempt(nextAttempt);
      setAttemptPhase(phase);
      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
      setAttemptPhaseHistory((prev) =>
        prev[prev.length - 1] === phase ? prev : [...prev, phase],
      );
    });
  }

  const proposeOptions = useCallback(async () => {
    setBusy("options");
    setError(null);
    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setProductOutcome(null);
    setPostEvidence(null);
    onDurableFactsChanged?.();
  }, [projectId, onDurableFactsChanged]);

  const refreshPreCycleCandidate = useCallback(async () => {
    const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
      projectId,
    });
    if (!result.ok) {
      setPreCycleCandidate(null);
      setActiveCycleInstanceId(null);
      setHasCurrentNextCycleRecommendation(false);
      return;
    }
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    setPreCycleCandidate(result.candidate ?? null);
    setHasCurrentNextCycleRecommendation(
      result.hasCurrentNextCycleRecommendation === true,
    );
  }, [projectId]);

  useEffect(() => {
    void refreshPreCycleCandidate();
  }, [refreshPreCycleCandidate]);

  useEffect(() => {
    if (durableRefreshSignal > 0) {
      void refreshPreCycleCandidate();
    }
  }, [durableRefreshSignal, refreshPreCycleCandidate]);

  useEffect(() => {
    if (recoveryProposeSignal > 0) {
      void proposeOptions();
    }
  }, [recoveryProposeSignal, proposeOptions]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const result = await w2DecideTrajectoryAction({
        projectId,
        optionSetRef: optionSet.optionSetRef,
        trajectoryId: optionSet.proposedTrajectory.trajectoryId,
        candidateVersion: optionSet.proposedTrajectory.version,
        selectedOptionRef,
      });
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory);
      onDurableFactsChanged?.();
    },
    [optionSet, projectId, onDurableFactsChanged],
  );

  const prepareContract = useCallback(async () => {
    if (!decision || !qualifiedOperationKind) return;
    setBusy("contract");
    setError(null);
    const result = await w2PrepareExecutionContractAction({
      projectId,
      decisionId: decision.decisionId,
      qualifiedOperationKind,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      effectConfirmationRequired: prepared.effectConfirmationRequired,
      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

  const inspect = useCallback(async () => {
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
    if (amendmentNotice && state.inspectionSufficient) {
      setAmendmentNotice({
        ...amendmentNotice,
        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      });
    }
  }, [contract, projectId, amendmentNotice]);

  const amendContract = useCallback(async () => {
    if (!contract || !inspection?.inspectionSufficient) return;
    const constraint = amendmentDraft.trim();
    if (!constraint) {
      setError("Indiquez une contrainte d'exécution supplémentaire.");
      return;
    }
    setBusy("amendment");
    setError(null);
    const result = await w2AmendExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
      additionalConstraint: constraint,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const amended = result as AmendExecutionContractSuccess;
    setContract({
      executionContractId: amended.successor.executionContractId,
      version: amended.successor.version,
      status: amended.successor.status,
      action: amended.successor.action,
      target: amended.successor.target,
      scope: amended.successor.scope,
      requiredAuthority: amended.successor.requiredAuthority,
      constraints: [...amended.successor.constraints],
      stopConditions: [...amended.successor.stopConditions],
      requiredCapabilities: [...amended.successor.requiredCapabilities],
      reversibility: amended.successor.reversibility,
      semanticFingerprint: amended.successor.semanticFingerprint,
    });
    setInspection(amended.successorInspection);
    setAuthorization(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: amended.priorExecutionContractId,
      additionalConstraint: amended.additionalConstraint,
      statusLabel: amended.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    inspection,
    amendmentDraft,
    projectId,
    onDurableFactsChanged,
  ]);

  const confirmForAuthorization = useCallback(async () => {
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [contract, projectId]);

  const authorize = useCallback(async () => {
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptPhaseHistory([]);
    setAttemptStatusLabel(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [contract, projectId]);

  const governedExecute = useCallback(async () => {
    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
    setBusy("execute");
    setError(null);
    flushSync(() => {
      setAttempt(null);
      setAttemptPhase(null);
      setAttemptPhaseHistory([]);
      setAttemptStatusLabel(null);
      setProductOutcome(null);
      setProductEvidencePending(false);
    });

    const selected = await w2GovernedExecuteSelectAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    if (!selected.ok) {
      setBusy(null);
      setError(selected.message);
      if (selected.attempt) {
        paintAttemptPhase("accepted", selected.attempt, null);
      }
      return;
    }
    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
    await yieldBrowserPaint();

    if (selected.phase === "terminal") {
      setBusy(null);
      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
      onDurableFactsChanged?.();
      return;
    }

    const started = await w2GovernedExecuteStartAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
    });
    if (!started.ok) {
      setBusy(null);
      setError(started.message);
      if (started.attempt) {
        flushSync(() => {
          setAttempt(started.attempt!);
        });
      }
      return;
    }

    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
    if (started.phase === "terminal") {
      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
      flushSync(() => {
        setProductEvidencePending(true);
      });
      await yieldBrowserPaint();
      const materializedEarly = await w2MaterializeProductOutcomeAction({
        projectId,
        attemptId: started.attemptId,
      });
      setBusy(null);
      if (!materializedEarly.ok) {
        setError(materializedEarly.message);
        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
        if (materializedEarly.postEvidence)
          setPostEvidence(materializedEarly.postEvidence);
        return;
      }
      flushSync(() => {
        setProductEvidencePending(false);
        setProductOutcome(materializedEarly.product);
        setPostEvidence(materializedEarly.postEvidence ?? null);
      });
      onDurableFactsChanged?.();
      return;
    }

    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
    await yieldBrowserPaint();

    const completed = await w2GovernedExecuteCompleteAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: started.attemptId,
    });
    if (!completed.ok) {
      setBusy(null);
      setError(completed.message);
      if (completed.attempt) {
        flushSync(() => {
          setAttempt(completed.attempt!);
        });
      }
      return;
    }
    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();

    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: completed.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [contract, authorization, projectId, onDurableFactsChanged]);

  const stopRunningExecution = useCallback(async () => {
    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
    setBusy("execute");
    setError(null);
    const cancelled = await w2GovernedExecuteCancelAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: attempt.attemptId,
    });
    if (!cancelled.ok) {
      setBusy(null);
      setError(cancelled.message);
      return;
    }
    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();
    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: cancelled.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    attempt,
    attemptPhase,
    projectId,
    onDurableFactsChanged,
  ]);

  const rehydrateProduct = useCallback(async () => {
    if (!attempt?.attemptId) return;
    setBusy("execute");
    setError(null);
    const result = await w2RehydrateProductOutcomeAction({
      projectId,
      attemptId: attempt.attemptId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setProductOutcome(result.product);
    setPostEvidence(result.postEvidence ?? null);
    setProductEvidencePending(false);
  }, [attempt, projectId]);

  return (
    <section
      className={[
        styles.root,
        composition === "lps-embedded" ? styles.embedded : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="w2-trajectory-panel"
      data-composition={composition}
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire du projet</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. L&apos;exécution n&apos;est possible qu&apos;après une
          autorisation vérifiée, via une action Exécuter explicite et distincte.
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      {preCycleCandidate && !activeCycleInstanceId ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-candidate-title"
          data-testid="pre-cycle-candidate-trajectory"
        >
          <h3 id="pre-cycle-candidate-title" className={styles.blockTitle}>
            Trajectoire proposée
          </h3>
          <p className={styles.blockNote}>
            Cycle proposé :{" "}
            {preCycleCandidate.catalogLabel ??
              preCycleCandidate.steps[0]?.label ??
              "—"}
          </p>
          <p className={styles.blockNote} data-testid="pre-cycle-candidate-status">
            Statut : candidate / en attente de décision · Non décidée · Aucun
            cycle démarré
          </p>
          <ul className={styles.optionList} data-testid="pre-cycle-candidate-steps">
            {preCycleCandidate.steps.map((step) => (
              <li key={step.stepId} className={styles.option}>
                <div className={styles.optionHead}>
                  <span className={styles.optionBadge}>Étape {step.order}</span>
                  <span className={styles.optionLabel}>{step.label}</span>
                </div>
                <p className={styles.optionIntent}>En attente</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/*
        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
      */}
      {activeCycleInstanceId ? (
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null}
        >
          {optionSet ? "Réinstruire les options" : "Instruire les options"}
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>
      ) : null}

      {!activeCycleInstanceId &&
      !preCycleCandidate &&
      hasCurrentNextCycleRecommendation ? (
        <p
          className={styles.blockNote}
          data-testid="pre-cycle-prepare-trajectory-hint"
        >
          Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
          courante — les options W2 nécessitent un cycle actif.
        </p>
      ) : null}

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              <span className={styles.sectionKind} data-kind="option">
                Option
              </span>
              Options proposées
            </h3>
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory.statusLabel} · version{" "}
              {optionSet.proposedTrajectory.version} · pas encore courante
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    <ul className={styles.impacts}>
                      {option.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={busy !== null || decision !== null}
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              <span className={styles.sectionKind} data-kind="recommendation">
                Recommandation
              </span>
              {optionSet.recommendation.label}
            </h3>
            <p className={styles.blockBody}>
              {optionSet.recommendation.rationale}
            </p>
            <p className={styles.blockNote}>
              Cette recommandation ne promeut aucune trajectoire.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : " Aucun contexte de cycle rattaché."}
            </p>
          </section>
        </>
      ) : null}

      {decision && decided ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            <span className={styles.sectionKind} data-kind="decision">
              Décision humaine
            </span>
            Décision de trajectoire — {decision.statusLabel}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {decision.selectedOptionRef}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided.statusLabel} · version {decided.version}
              </dd>
            </div>
          </dl>
          <div
            className={styles.actions}
            data-testid="w3a-qualify-execution-work"
          >
            <p className={styles.blockNote}>
              Qualifier le travail d&apos;exécution réel (indépendant de
              l&apos;option de trajectoire déjà décidée).
            </p>
            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
              Opération d&apos;exécution
            </label>
            <select
              id="w3a-operation-kind"
              className={styles.amendmentInput}
              data-testid="w3a-operation-kind"
              value={qualifiedOperationKind ?? ""}
              disabled={busy !== null}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "generate-temporary-artifact" ||
                  value === "simulate" ||
                  value === "read"
                ) {
                  setQualifiedOperationKind(value);
                  setContract(null);
                  setInspection(null);
                  setAuthorization(null);
                  setAttempt(null);
                  setAttemptPhase(null);
                } else {
                  setQualifiedOperationKind(null);
                }
              }}
            >
              <option value="">— Choisir —</option>
              <option value="generate-temporary-artifact">
                Générer un artefact temporaire local (réversible)
              </option>
              <option value="simulate">Simuler (sandbox)</option>
              <option value="read">Lecture seule</option>
            </select>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareContract()}
              disabled={busy !== null || qualifiedOperationKind === null}
              title={
                qualifiedOperationKind === null
                  ? "Qualifier d'abord le travail d'exécution"
                  : undefined
              }
            >
              {contract
                ? "Repréparer le contrat d'exécution"
                : "Préparer le contrat d'exécution"}
            </button>
          </div>
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution — résumé
          </h3>
          <p className={styles.blockNote}>
            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
            toute confirmation. Confirmer n&apos;exécute pas.
          </p>
          <dl className={styles.facts} data-testid="w2-contract-facts">
            <div>
              <dt>Ce qui sera fait</dt>
              <dd data-testid="w2-contract-action">{contract.action}</dd>
            </div>
            <div>
              <dt>Résultat / cible</dt>
              <dd data-testid="w2-contract-target">{contract.target}</dd>
            </div>
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
            </div>
            <div>
              <dt>État du contrat</dt>
              <dd
                data-testid="w2-contract-status"
                data-status={contract.status}
              >
                {executionContractStatusLabel(contract.status)}
              </dd>
            </div>
            <div>
              <dt>Prochaine action utile</dt>
              <dd>
                {inspection?.inspectionSufficient
                  ? contract.status === "confirmation_required"
                    ? "Confirmer si requis, puis statuer sur l'autorisation"
                    : "Statuer sur l'autorisation"
                  : "Inspecter le détail du contrat"}
              </dd>
            </div>
          </dl>
          <details className={styles.contractLevel2}>
            <summary>Détails métier du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Version</dt>
                <dd data-testid="w2-contract-version">v{contract.version}</dd>
              </div>
              <div>
                <dt>Autorité requise</dt>
                <dd data-testid="w2-contract-authority">
                  {contract.requiredAuthority}
                </dd>
              </div>
              <div>
                <dt>Capacités</dt>
                <dd data-testid="w2-contract-capabilities">
                  {contract.requiredCapabilities.length
                    ? contract.requiredCapabilities.join(", ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Réversibilité</dt>
                <dd data-testid="w2-contract-reversibility">
                  {contract.reversibility}
                </dd>
              </div>
              <div>
                <dt>Contraintes</dt>
                <dd data-testid="w2-contract-constraints">
                  {contract.constraints.length
                    ? contract.constraints.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Conditions d&apos;arrêt</dt>
                <dd data-testid="w2-contract-stops">
                  {contract.stopConditions.length
                    ? contract.stopConditions.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
            </dl>
          </details>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Statut technique</dt>
                <dd
                  className={styles.code}
                  data-testid="w2-contract-status-tech"
                >
                  {contract.status}
                </dd>
              </div>
              <div>
                <dt>Empreinte sémantique</dt>
                <dd className={styles.code} data-testid="w2-contract-fingerprint">
                  {contract.semanticFingerprint.slice(0, 12)}…
                </dd>
              </div>
              <div>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="w2-contract-id-tech">
                  {contract.executionContractId}
                </dd>
              </div>
            </dl>
          </details>

          {amendmentNotice ? (
            <div
              className={styles.amendmentNotice}
              data-testid="w2-amendment-notice"
              role="status"
            >
              <p className={styles.blockBody} data-testid="w2-amendment-status">
                {amendmentNotice.statusLabel}
              </p>
              <p className={styles.blockNote}>
                L&apos;inspection précédente couvrait le contrat précédent, pas
                le successeur amendé.
              </p>
              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
                Successeur de {amendmentNotice.priorExecutionContractId} ·
                contrainte ajoutée : {amendmentNotice.additionalConstraint}
              </p>
            </div>
          ) : null}

          {inspection?.inspectionSufficient ? (
            <div
              className={styles.amendmentForm}
              data-testid="w2-amendment-form"
            >
              <p className={styles.blockTitle}>Amender le contrat</p>
              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
                Contrainte d&apos;exécution supplémentaire
              </label>
              <input
                id="w2-amend-constraint"
                className={styles.amendmentInput}
                data-testid="w2-amend-constraint"
                type="text"
                value={amendmentDraft}
                onChange={(event) => setAmendmentDraft(event.target.value)}
                disabled={busy !== null}
                placeholder="Ex. : borner strictement le slice livré"
              />
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-amend-contract"
                onClick={() => void amendContract()}
                disabled={busy !== null || amendmentDraft.trim().length === 0}
              >
                Appliquer l&apos;amendement
              </button>
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null}
            >
              Inspecter le contrat
            </button>
            {contract.status === "confirmation_required" ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={
                  busy !== null ||
                  inspection === null ||
                  !inspection.inspectionSufficient
                }
                title={
                  inspection === null || !inspection.inspectionSufficient
                    ? "Inspection suffisante requise avant de confirmer"
                    : undefined
                }
              >
                Confirmer mon consentement
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={busy !== null}
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span
              data-testid="w2-authorization-outcome"
              data-outcome={authorization.outcome}
            >
              {authorization.outcome === "AUTHORIZED"
                ? "Autorisation vérifiée — l'exécution peut être lancée"
                : "Exécution bloquée"}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
          </dl>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques d&apos;autorité</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Verdict technique</dt>
                <dd data-testid="w2-authorization-outcome-tech">
                  {authorization.outcomeLabel}
                </dd>
              </div>
              <div>
                <dt>Trace d&apos;autorité</dt>
                <dd className={styles.code} data-testid="w2-authority-receipt">
                  {authorization.authorityReceiptRef}
                </dd>
              </div>
            </dl>
          </details>
          {authorization.outcome === "AUTHORIZED" && !attempt ? (
            <>
              <p
                className={styles.stopNotice}
                data-testid="w2-stop-before-execute"
              >
                Autorisation évaluée — aucune tentative lancée tant que vous
                n&apos;exécutez pas explicitement.
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w3a-governed-execute"
                  onClick={() => void governedExecute()}
                  disabled={busy !== null}
                >
                  Exécuter
                </button>
              </div>
            </>
          ) : null}
          {authorization.outcome === "BLOCKED" ? (
            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
            </p>
          ) : null}
        </section>
      ) : null}

      {attempt || attemptPhaseHistory.length > 0 ? (
        <section
          className={styles.attempt}
          aria-labelledby="w3a-attempt-title"
          data-testid="w3a-attempt"
          role="status"
        >
          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
            Tentative d&apos;exécution
          </h3>
          <p className={styles.blockBody} data-testid="w3a-attempt-status">
            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
            <span data-testid="w3a-attempt-lifecycle">
              {attemptPhase ?? "—"}
            </span>{" "}
            · historique{" "}
            <code data-testid="w3a-attempt-phase-history">
              {attemptPhaseHistory.join("|")}
            </code>{" "}
            · statut technique{" "}
            <span data-testid="w3a-attempt-technical-status">
              {attempt?.attemptStatus ?? "—"}
            </span>
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Attempt</dt>
              <dd className={styles.code} data-testid="w3a-attempt-id">
                {attempt?.attemptId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Adapter</dt>
              <dd data-testid="w3a-attempt-adapter">
                {attempt?.adapterId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Effets externes</dt>
              <dd data-testid="w3a-attempt-real">non</dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3a-cycle-closed">non</dd>
            </div>
          </dl>
          {attemptPhase === "running" ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w3b-stop-running"
                onClick={() => void stopRunningExecution()}
                disabled={busy !== null}
              >
                Arrêter l&apos;exécution
              </button>
            </div>
          ) : null}
          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
            {productOutcome?.claimAllowed
              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
              : productEvidencePending
                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
                : "Terminal technique — résultat produit non encore qualifié."}
          </p>
          {productEvidencePending ? (
            <p
              className={styles.blockNote}
              data-testid="w3b-evidence-pending"
            >
              Evidence requise avant tout claim de résultat produit.
            </p>
          ) : null}
          {attempt?.attemptId && !productOutcome ? (
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w3b-rehydrate-product"
              onClick={() => void rehydrateProduct()}
              disabled={busy !== null}
            >
              Recharger résultat produit (durable)
            </button>
          ) : null}
        </section>
      ) : null}

      {productOutcome ? (
        <section
          className={styles.productOutcome}
          aria-labelledby="w3b-product-title"
          data-testid="w3b-product-outcome"
          data-outcome={productOutcome.outcome}
          role="status"
        >
          <h3 id="w3b-product-title" className={styles.blockTitle}>
            Résultat
          </h3>
          <p
            className={styles.productHeadline}
            data-testid="w3b-product-headline"
          >
            <span
              data-testid="w3b-product-outcome-kind"
              data-kind={productOutcome.outcome}
            >
              {W4C_PRODUCT_OUTCOME_LABELS[productOutcome.outcome]}
            </span>
            {" — "}
            {productOutcome.businessHeadline}
          </p>
          <p className={styles.blockBody} data-testid="w3b-product-reason">
            {productOutcome.businessReason}
          </p>
          {productOutcome.governedBoundary ? (
            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
              Frontière : {productOutcome.governedBoundary}
            </p>
          ) : null}
          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
            {productOutcome.evidenceSummary ??
              "Aucune preuve enregistrée — aucun résultat produit revendiqué."}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Preuve disponible</dt>
              <dd data-testid="w3b-review-bundle-completeness">
                {productOutcome.reviewBundleCompleteness ?? "—"}
              </dd>
            </div>
          </dl>
          {postEvidence && postEvidence.ok ? (
            <section
              className={styles.postEvidence}
              data-testid="w3c-post-evidence"
              aria-label={W4C_POST_EVIDENCE_HEADING}
            >
              <h4 className={styles.blockTitle}>{W4C_POST_EVIDENCE_HEADING}</h4>
              <p
                className={styles.productHeadline}
                data-testid="w3c-recommendation-headline"
              >
                {postEvidence.recommendation.headline}
              </p>
              <p className={styles.blockBody} data-testid="w3c-recommendation-rationale">
                {postEvidence.recommendation.rationale}
              </p>
              <p className={styles.blockBody} data-testid="w3c-next-step">
                <strong>{W4C_NEXT_ACTION_LEAD} :</strong>{" "}
                {postEvidence.recommendation.nextStep}
              </p>
              <p className={styles.blockBody} data-testid="w3c-nora-analysis">
                {postEvidence.analysisText ??
                  postEvidence.analysisUnavailableReason ??
                  "Analyse indisponible"}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>Orientation</dt>
                  <dd data-testid="w3c-recommendation-kind">
                    {postEvidence.recommendation.kind}
                  </dd>
                </div>
                <div>
                  <dt>Décision humaine</dt>
                  <dd data-testid="w3c-requires-human-decision">
                    {postEvidence.recommendation.requiresHumanDecision
                      ? "oui"
                      : "non"}
                  </dd>
                </div>
              </dl>
              <details className={styles.technicalDetails}>
                <summary>Détail de recommandation (secondaire)</summary>
                <dl className={styles.facts}>
                  <div>
                    <dt>Authority</dt>
                    <dd data-testid="w3c-recommendation-authority">
                      none — Recommendation ≠ HumanDecision
                    </dd>
                  </div>
                  <div>
                    <dt>LPS version</dt>
                    <dd data-testid="w3c-lps-version">
                      {postEvidence.lpsVersion ?? "—"}
                    </dd>
                  </div>
                </dl>
              </details>
              {postEvidence.recommendation.kind === "recover" ||
              postEvidence.recommendation.kind === "replan" ||
              postEvidence.recommendation.requiresHumanDecision ? (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  data-testid="w3c-propose-trajectory"
                  onClick={() => void proposeOptions()}
                  disabled={busy !== null}
                >
                  Proposer des options de trajectoire
                </button>
              ) : null}
            </section>
          ) : null}
          <details className={styles.technicalDetails}>
            <summary data-testid="w3b-technical-details-toggle">
              Détail technique (secondaire)
            </summary>
            <dl className={styles.facts}>
              <div>
                <dt>Evidence ID</dt>
                <dd className={styles.code} data-testid="w3b-evidence-id">
                  {productOutcome.evidenceId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>ReviewBundle ID</dt>
                <dd className={styles.code} data-testid="w3b-review-bundle-id">
                  {productOutcome.reviewBundleId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>Claim autorisé</dt>
                <dd data-testid="w3b-claim-allowed">
                  {productOutcome.claimAllowed ? "oui" : "non"}
                </dd>
              </div>
              <div>
                <dt>Apprentissage / replan</dt>
                <dd data-testid="w3b-nora-replan">
                  {`analyse: ${
                    postEvidence && postEvidence.ok && postEvidence.noraInvoked
                      ? "oui"
                      : "non"
                  } · replan auto: non`}
                </dd>
              </div>
              <div>
                <dt>Cycle auto-fermé</dt>
                <dd data-testid="w3b-cycle-closed">non</dd>
              </div>
              <div>
                <dt>READY</dt>
                <dd data-testid="w3b-ready">non</dd>
              </div>
              <div>
                <dt>Attempt</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-attempt-id"
                >
                  {productOutcome.technicalDetail.attemptId}
                </dd>
              </div>
              <div>
                <dt>Statut technique</dt>
                <dd data-testid="w3b-technical-status">
                  {productOutcome.technicalDetail.attemptStatus}
                </dd>
              </div>
              <div>
                <dt>resultRef</dt>
                <dd className={styles.code} data-testid="w3b-technical-result-ref">
                  {productOutcome.technicalDetail.resultRef ?? "—"}
                </dd>
              </div>
              <div>
                <dt>errorRef / stopReason</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-error-or-stop"
                >
                  {productOutcome.technicalDetail.errorRef ??
                    productOutcome.technicalDetail.stopReason ??
                    "—"}
                </dd>
              </div>
            </dl>
          </details>
          {(() => {
            const visibleReservations = filterProductReservationsForDisplay(
              productOutcome.reservations,
              Boolean(postEvidence && postEvidence.ok),
            );
            if (visibleReservations.length === 0) return null;
            return (
              <ul data-testid="w3b-reservations" className={styles.blockNote}>
                {visibleReservations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            );
          })()}
          <button
            type="button"
            className={styles.secondaryAction}
            data-testid="w3b-rehydrate-product"
            onClick={() => void rehydrateProduct()}
            disabled={busy !== null || !attempt?.attemptId}
          >
            Recharger résultat produit (durable)
          </button>
        </section>
      ) : null}
    </section>
  );
}
```


## FILE: `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryProvenance.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * GREENFIELD CANDIDATE TRAJECTORY DURABLE PROVENANCE — BAR-PROV-01…20
 * ZERO NEW REAL. Option B Epistemic Observation.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
  CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
  buildCandidateTrajectoryProvenanceObservationItem,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  resolveCandidateTrajectoryProvenance,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
  deriveLifecycleBlockersFromEpistemicItems,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-prov-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
  };
}

function productTurn(lr: ReturnType<typeof nextCycleLr>) {
  return {
    narrative: "Narrative Cadrage recommandée.",
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

async function bootFreshProject(suffix: string, dbPath?: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = dbPath ?? tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`prov-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  if (!dbPath) {
    const created = await runtime.createProject({
      name: `Fresh provenance ${suffix}`,
      objective: "gestion de tâches",
      context: "application web personnelle",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `PRV${suffix}`,
      idempotencyKey: `idem:prov-${suffix}`,
    });
    if (!created.ok) throw new Error("create failed");
    return { runtime, projectId: created.projectId, productDbPath };
  }
  // reopen existing db — project already exists
  return { runtime, projectId: "", productDbPath };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  return materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr),
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
}

function expectMaterialized(
  mat: Awaited<ReturnType<typeof materializeFreshNext>>,
) {
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization || !mat.materialization.ok) {
    throw new Error(
      `materialization failed: ${mat.materialization && !mat.materialization.ok ? mat.materialization.code : "null"}`,
    );
  }
  return mat.materialization;
}

function recommendationIdOf(
  mat: ReturnType<typeof expectMaterialized>,
): string {
  return mat.item.epistemicItemId;
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

async function countAuthority(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
) {
  const oa = runtime.oa!;
  const trajV1 = await oa.cycleServices.trajectories.findByProjectAndVersion(
    projectId,
    1,
  );
  return {
    traj: trajV1 ? 1 : 0,
    hasAnyTraj: await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    epi: (await oa.cycleServices.epistemic.listByProject(projectId)).length,
    cycles: (await oa.cycleServices.cycles.listByProject(projectId)).length,
    hd: (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ec: (await oa.executionContractServices.contracts.listByProject(projectId))
      .length,
  };
}

describe("GREENFIELD CANDIDATE TRAJECTORY DURABLE PROVENANCE — BAR-PROV", () => {
  it("BAR-PROV-01/02/03/15/16/18 — success write + exact relatedObjects + authority", async () => {
    const { runtime, projectId } = await bootFreshProject("01");
    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov01",
        newStepId: () => "stp:cadrage-prov01",
        newProvenanceObservationId: () => "epi:trj-prov-fixed01",
        correlationId: "cor:prov-01",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    expect(prepared.provenanceObservationId).toBe("epi:trj-prov-fixed01");
    expect(prepared.trajectoryId).toBe("trj:lr-bridge-prov01");
    expect(prepared.recommendationId).toBe(recommendationIdOf(mat));
    expect(prepared.targetCycleTypeId).toBe("cyc:framing");

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const observations = items.filter(
      (i) =>
        i.type === "Observation" &&
        i.source === CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
    );
    expect(observations).toHaveLength(1);
    const obs = observations[0]!;
    expect(obs.status).toBe("active");
    expect(obs.lifecycleRecommendation).toBeUndefined();
    expect(obs.relatedObjects).toEqual([
      projectId,
      recommendationIdOf(mat),
      "trj:lr-bridge-prov01",
    ]);
    expect(obs.statement).not.toContain(recommendationIdOf(mat));
    expect(obs.createdBy.actorId).toBe(
      CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR.actorId,
    );
    expect(obs.createdBy.role).toBe("system");
    expect(obs.createdBy.authorityLevel).toBe("none");

    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: [],
      lpsActiveCycleInstanceId: null,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: (
        await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
          projectId,
          1,
        )
      ),
      decisions: [],
      evidence: [],
      blockingReservationStatements: blockers.ok ? blockers.statements : [],
    });
    expect(
      current.filter(
        (r) => r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
      ),
    ).toHaveLength(0);

    const counts = await countAuthority(runtime, projectId);
    expect(counts.traj).toBe(1);
    expect(counts.cycles).toBe(0);
    expect(counts.hd).toBe(0);
    expect(counts.ec).toBe(0);
  });

  it("BAR-PROV-04/19 — exact restart reconstruction even when LR is STALE", async () => {
    const dbPath = tempDbPath("04.sqlite");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T20:00:00.000Z",
      idSource: new FixedIdSource("prov-04"),
      auditMode: "noop",
      productDbPath: dbPath,
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "Fresh provenance 04",
      objective: "gestion de tâches",
      context: "application web personnelle",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "PRV04",
      idempotencyKey: "idem:prov-04",
    });
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;

    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov04",
        newStepId: () => "stp:cadrage-prov04",
        newProvenanceObservationId: () => "epi:trj-prov-fixed04",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    // Close runtime and reopen SAME sqlite — no process memory.
    resetRuntimeApplicationServiceForTests();
    const reopened = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T21:00:00.000Z",
      idSource: new FixedIdSource("prov-04b"),
      auditMode: "noop",
      productDbPath: dbPath,
    });
    if (!reopened.oa) throw new Error("oa missing");

    const items = await reopened.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:lr-bridge-prov04",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("RESOLVED");
    if (resolved.status !== "RESOLVED") return;
    expect(resolved.recommendationId).toBe(recommendationIdOf(mat));
    expect(resolved.semanticKey).toBe(prepared.semanticKey);
    expect(resolved.targetCycleTypeId).toBe("cyc:framing");
    expect(resolved.provenanceObservationId).toBe("epi:trj-prov-fixed04");

    // LR is STALE by currentness but still resolvable by id.
    const lps = await reopened.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    const traj = await reopened.oa.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: [],
      lpsActiveCycleInstanceId: null,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [],
      blockingReservationStatements: blockers.ok ? blockers.statements : [],
    });
    expect(current).toHaveLength(0);
  });

  it("BAR-PROV-05 — label is not identity authority", async () => {
    const { runtime, projectId } = await bootFreshProject("05");
    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov05",
        newStepId: () => "stp:cadrage-prov05",
        newProvenanceObservationId: () => "epi:trj-prov-fixed05",
      }),
    });
    expect(prepared.ok).toBe(true);

    const traj =
      await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
        projectId,
        1,
      );
    expect(traj).toBeTruthy();
    const mutated = structuredClone(traj!);
    mutated.steps = [
      {
        ...mutated.steps[0]!,
        label: "Label Qui Ne Mappe Pas",
      },
    ];
    await runtime.oa!.cycleServices.trajectories.save(mutated);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:lr-bridge-prov05",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("RESOLVED");
    if (resolved.status !== "RESOLVED") return;
    expect(resolved.targetCycleTypeId).toBe("cyc:framing");
    expect(resolved.recommendationId).toBe(recommendationIdOf(mat));

    const read = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read.ok && read.candidate?.targetCycleTypeId).toBe("cyc:framing");
    expect(read.ok && read.candidate?.steps[0]?.label).toBe(
      "Label Qui Ne Mappe Pas",
    );
  });

  it("BAR-PROV-06 — legacy candidate without Observation → MISSING", async () => {
    const { runtime, projectId } = await bootFreshProject("06");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    const created = await runtime.oa!.cycleServices.createInitialTrajectory.execute({
      trajectoryId: "trj:legacy-no-prov-06",
      projectId,
      steps: [
        {
          stepId: "stp:cadrage-legacy06",
          order: 1,
          label: "Cadrage",
          state: "pending",
        },
      ],
      status: "candidate",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      expectedLpsVersion: lps.ok ? lps.livingProjectState.version : 1,
      correlationId: "cor:legacy-06",
    });
    expect(created.ok).toBe(true);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:legacy-no-prov-06",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("MISSING");

    const read = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read.ok).toBe(true);
    if (!read.ok || !read.candidate) throw new Error("expected candidate");
    expect(read.candidate.provenanceStatus).toBe("MISSING");
    expect(read.candidate.targetCycleTypeId).toBeNull();
    expect(read.candidate.catalogLabel).toBe("Cadrage");
  });

  it("BAR-PROV-07 — ambiguous duplicate Observations fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("07");
    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov07",
        newStepId: () => "stp:cadrage-prov07",
        newProvenanceObservationId: () => "epi:trj-prov-fixed07a",
      }),
    });
    expect(prepared.ok).toBe(true);

    const dup = buildCandidateTrajectoryProvenanceObservationItem({
      epistemicItemId: "epi:trj-prov-fixed07b",
      projectId,
      recommendationId: recommendationIdOf(mat),
      trajectoryId: "trj:lr-bridge-prov07",
    });
    const write = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      items: [dup],
      createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
      correlationId: "cor:dup-07",
    });
    expect(write.ok).toBe(true);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:lr-bridge-prov07",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("AMBIGUOUS");
  });

  it("BAR-PROV-08 — missing source Recommendation → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-orphan08",
        type: "Observation",
        statement: "orphan",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-08-1",
          "epi:lr:missing-source",
          "trj:lr-bridge-prov08",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-08-1",
      trajectoryId: "trj:lr-bridge-prov08",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe("source_recommendation_absent");
    }
  });

  it("BAR-PROV-09 — wrong source type → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:not-rec-09",
        type: "Observation",
        statement: "not a recommendation",
        status: "active",
        source: "other",
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: ["prj:prov-09-1"],
      },
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-09",
        type: "Observation",
        statement: "link",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-09-1",
          "epi:not-rec-09",
          "trj:lr-bridge-prov09",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-09-1",
      trajectoryId: "trj:lr-bridge-prov09",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe("source_not_recommendation");
    }
  });

  it("BAR-PROV-10 — Recommendation without lifecycle payload → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:rec-bare-10",
        type: "Recommendation",
        statement: "bare recommendation",
        status: "active",
        source: "lifecycle-recommendation:nora",
        createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: ["prj:prov-10-1"],
      },
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-10",
        type: "Observation",
        statement: "link",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-10-1",
          "epi:rec-bare-10",
          "trj:lr-bridge-prov10",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-10-1",
      trajectoryId: "trj:lr-bridge-prov10",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe(
        "source_missing_lifecycle_recommendation_payload",
      );
    }
  });

  it("BAR-PROV-11 — project mismatch → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:lr:other-project",
        type: "Recommendation",
        statement: "other",
        status: "active",
        source: "lifecycle-recommendation:nora",
        createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: ["prj:other"],
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE",
          basisFingerprint: "fp",
          basisRefs: {
            projectId: "prj:other",
            subjectCycleInstanceId: null,
            subjectCycleStatus: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: "cyc:framing",
            lpsActiveCycleInstanceId: null,
            lpsVersion: 1,
            doctrinePackageId: VALID_PIN.doctrinePackageId,
            doctrinePackageVersion: VALID_PIN.version,
            doctrinePackageDigest: VALID_PIN.digest,
            trajectoryId: null,
            trajectoryVersion: null,
            trajectoryStatus: null,
            decisionFingerprint: "none",
            blockerFingerprint: "none",
            reservationBlockingCount: 0,
            finalizeAccepted: null,
            resumeClean: null,
            evidenceFingerprint: null,
          },
          semanticKey: "sem-other",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:framing",
          authority: "none",
        },
      },
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-11",
        type: "Observation",
        statement: "link",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-11-1",
          "epi:lr:other-project",
          "trj:lr-bridge-prov11",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-11-1",
      trajectoryId: "trj:lr-bridge-prov11",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe("source_project_mismatch");
    }
  });

  it("BAR-PROV-12 — atomic rollback when provenance write fails after trajectory create", async () => {
    const { runtime, projectId } = await bootFreshProject("12");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const lpsBefore = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsBefore.ok).toBe(true);
    const versionBefore = lpsBefore.ok
      ? lpsBefore.livingProjectState.version
      : 0;
    const trajBefore = await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(
      projectId,
    );
    const epiBefore = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).length;

    const store = runtime.oa!.projectServices.store;
    expect(store).toBeInstanceOf(SqliteProductStore);
    (store as SqliteProductStore).failNextSave = "epistemic";

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov12",
        newStepId: () => "stp:cadrage-prov12",
        newProvenanceObservationId: () => "epi:trj-prov-fixed12",
      }),
    });
    expect(prepared.ok).toBe(false);

    const trajAfter = await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(
      projectId,
    );
    const epiAfter = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).length;
    const lpsAfter = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(trajAfter).toBe(trajBefore);
    expect(epiAfter).toBe(epiBefore);
    expect(lpsAfter.ok && lpsAfter.livingProjectState.version).toBe(
      versionBefore,
    );
    expect(lpsAfter.ok && lpsAfter.livingProjectState.trajectoryId).toBeFalsy();
  });

  it("BAR-PROV-13 — CreateInitialTrajectory failure writes no Observation", async () => {
    const { runtime, projectId } = await bootFreshProject("13");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    // Force invalid trajectory id so create fails before/at persist.
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "not-a-trj-id",
        newStepId: () => "stp:cadrage-prov13",
        newProvenanceObservationId: () => "epi:trj-prov-fixed13",
      }),
    });
    expect(prepared.ok).toBe(false);
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    expect(
      items.filter(
        (i) => i.source === CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
      ),
    ).toHaveLength(0);
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-PROV-14 — double invocation ≤1 candidate and ≤1 provenance Observation", async () => {
    const { runtime, projectId } = await bootFreshProject("14");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime, {
      newTrajectoryId: () => "trj:lr-bridge-prov14",
      newStepId: () => "stp:cadrage-prov14",
      newProvenanceObservationId: () => "epi:trj-prov-fixed14",
    });
    const first = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(first.ok).toBe(true);
    const second = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov14b",
        newStepId: () => "stp:cadrage-prov14b",
        newProvenanceObservationId: () => "epi:trj-prov-fixed14b",
      }),
    });
    expect(second.ok).toBe(false);
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
    expect(
      (
        await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
      ).filter((i) => i.source === CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE),
    ).toHaveLength(1);
  });

  it("BAR-PROV-17 — server action takes projectId only (structural)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/preCycleCandidateTrajectoryActions.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(
      /projectAssistantPrepareCandidateTrajectoryAction\(input:\s*\{\s*projectId:\s*string;\s*\}\)/,
    );
    expect(src).toContain("runInTransaction");
    expect(src).toContain("updateEpistemicState");
    // Client hostile: prepare call must not pass recommendationId from input.
    expect(src).toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{\s*projectId: input\.projectId,\s*deps:/,
    );
    expect(src).not.toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{[^}]*recommendationId:\s*input/,
    );
  });

  it("BAR-PROV-20 — W2 / pre-cycle CTA / bridge regressions remain wired", () => {
    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(trajSrc).toContain("Instruire les options");
    expect(trajSrc).toContain("activeCycleInstanceId");
    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");

    const lifecycleSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(lifecycleSrc).toContain("Préparer la trajectoire");

    const bridgeSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts",
      ),
      "utf8",
    );
    expect(bridgeSrc).toContain("CandidateTrajectoryBridgeAtomicFailure");
    expect(bridgeSrc).toContain("resolveCandidateTrajectoryProvenance");
    expect(bridgeSrc).not.toContain("CYCLE_TYPE_CATALOG.entries.filter");
  });
});
```


## FILE: `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * GREENFIELD CURRENT LR → CANDIDATE PROJECT TRAJECTORY BRIDGE — BAR-TRJ-01…24
 * ZERO NEW REAL. D-RB-BOOT-01 / Option B2.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
  selectExactCurrentNextCycleRecommendation,
  buildSingleRecommendedCycleStep,
  rebuildBasisRefsForRecommendation,
  deriveLifecycleRecommendationCurrentness,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { ActorReference } from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { isCurrentHumanDecisionStatus } from "@/lib/oa/cycle/application/assessFinalization";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-bridge-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
  };
}

function productTurn(
  lr: ReturnType<typeof nextCycleLr>,
  narrative = "Narrative Cadrage recommandée.",
) {
  return {
    narrative,
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

async function bootFreshProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`trj-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh bridge ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `TRJ${suffix}`,
    idempotencyKey: `idem:trj-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const result = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr),
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  return result;
}

function expectMaterialized(
  mat: Awaited<ReturnType<typeof materializeFreshNext>>,
) {
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization || !mat.materialization.ok) {
    throw new Error(
      `materialization failed: ${mat.materialization && !mat.materialization.ok ? mat.materialization.code : "null"}`,
    );
  }
  return mat.materialization;
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

describe("GREENFIELD LR → CANDIDATE TRAJECTORY BRIDGE — BAR-TRJ", () => {
  it("BAR-TRJ-01/02/03/04/05/22/23/24 — prepare succeeds with single catalog step, no authority", async () => {
    const { runtime, projectId } = await bootFreshProject("01");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    const materialized = expectMaterialized(mat);

    const lpsBefore = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsBefore.ok).toBe(true);
    const versionBefore = lpsBefore.ok ? lpsBefore.livingProjectState.version : 0;

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed01",
        newStepId: () => "stp:cadrage-fixed01",
        correlationId: "cor:trj-bridge-01",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    expect(prepared.recommendationId).toBe(materialized.item.epistemicItemId);
    expect(prepared.targetCycleTypeId).toBe("cyc:framing");
    expect(prepared.catalogLabel).toBe(getCycleTypeById("cyc:framing")!.label);
    expect(prepared.trajectoryId).toBe("trj:lr-bridge-fixed01");
    expect(prepared.trajectoryVersion).toBe(1);
    expect(prepared.correlationId).toBe("cor:trj-bridge-01");

    const traj = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(traj).not.toBeNull();
    expect(traj!.status).toBe("candidate");
    expect(traj!.version).toBe(1);
    expect(traj!.steps).toHaveLength(1);
    expect(traj!.steps[0]!.label).toBe("Cadrage");
    expect(traj!.steps[0]!.state).toBe("pending");
    expect(traj!.steps[0]!.stepId).toBe("stp:cadrage-fixed01");
    expect(traj!.decidedByDecisionRef).toBeUndefined();

    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();

    expect(
      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(0);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
    const lpsAfter = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsAfter.ok).toBe(true);
    if (lpsAfter.ok) {
      expect(lpsAfter.livingProjectState.version).toBeGreaterThan(versionBefore);
      expect(lpsAfter.livingProjectState.trajectoryId).toBe(
        "trj:lr-bridge-fixed01",
      );
      expect(lpsAfter.livingProjectState.trajectoryVersion).toBe(1);
      expect(lpsAfter.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
  });

  it("BAR-TRJ-06 — source CURRENT LR becomes STALE after candidate material basis change", async () => {
    const { runtime, projectId } = await bootFreshProject("06");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    const materialized = expectMaterialized(mat);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed06",
        newStepId: () => "stp:cadrage-fixed06",
      }),
    });
    expect(prepared.ok).toBe(true);

    const oa = runtime.oa!;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await oa.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine =
      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;

    const current = selectCurrentLifecycleRecommendations({
      items: await oa.cycleServices.epistemic.listByProject(projectId),
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: traj,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
    });
    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);

    const rebuilt = rebuildBasisRefsForRecommendation({
      item: materialized.item,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: doctrine.doctrinePackageId,
        doctrinePackageVersion: doctrine.version,
        doctrinePackageDigest: doctrine.digest,
        trajectory: traj,
        decisions: [],
        evidence: [],
      },
    });
    expect(rebuilt).not.toBeNull();
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: materialized.item,
        currentBasisRefs: rebuilt!,
      }),
    ).toBe("STALE");
  });

  it("BAR-TRJ-07 — no CURRENT NEXT_CYCLE refuses without mutation", async () => {
    const { runtime, projectId } = await bootFreshProject("07");
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime),
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-08 — multiple CURRENT NEXT_CYCLE fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("08");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Cadrage A."),
      ),
    );
    // Ambiguity unit: selector refuses >1 CURRENT NEXT_CYCLE without picking by order.
    const envelopes = [
      {
        recommendationId: "epi:lr:a",
        projectId,
        intent: "NEXT_CYCLE" as const,
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        producer: "nora" as const,
        producedAt: "2026-09-09T20:01:00.000Z",
        statement: "A",
        basisFingerprint: "fp-a",
        basisRefs: { projectId },
        semanticKey: "key-a",
        authority: "none" as const,
        isHumanDecision: false as const,
        doesNotActivateCycle: true as const,
        doesNotFinalize: true as const,
        doesNotCreateHumanDecision: true as const,
        epistemicStatus: "active" as const,
        supersedesRecommendationId: null,
        derivedCurrentness: "CURRENT" as const,
      },
      {
        recommendationId: "epi:lr:b",
        projectId,
        intent: "NEXT_CYCLE" as const,
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:architecture",
        producer: "nora" as const,
        producedAt: "2026-09-09T20:02:00.000Z",
        statement: "B",
        basisFingerprint: "fp-b",
        basisRefs: { projectId },
        semanticKey: "key-b",
        authority: "none" as const,
        isHumanDecision: false as const,
        doesNotActivateCycle: true as const,
        doesNotFinalize: true as const,
        doesNotCreateHumanDecision: true as const,
        epistemicStatus: "active" as const,
        supersedesRecommendationId: null,
        derivedCurrentness: "CURRENT" as const,
      },
    ];
    const selected = selectExactCurrentNextCycleRecommendation(envelopes);
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE");
    }
  });

  it("BAR-TRJ-09 — non-canonical targetCycleTypeId fail-closed", async () => {
    const step = buildSingleRecommendedCycleStep({
      targetCycleTypeId: "Cadrage",
      stepId: "stp:bad",
    });
    expect(step.ok).toBe(false);
    if (!step.ok) {
      expect(step.code).toMatch(/LR_TARGET_CYCLE_TYPE/);
    }
  });

  it("BAR-TRJ-10/15 — existing candidate refuses second prepare; double invocation ≤1", async () => {
    const { runtime, projectId } = await bootFreshProject("10");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const first = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed10a",
        newStepId: () => "stp:cadrage-fixed10a",
      }),
    });
    expect(first.ok).toBe(true);

    const second = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed10b",
        newStepId: () => "stp:cadrage-fixed10b",
      }),
    });
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(
        second.code === "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT" ||
          second.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    const v2 = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      2,
    );
    expect(v2).toBeNull();
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
  });

  it("BAR-TRJ-11 — CycleInstance present refuses bridge", async () => {
    const { runtime, projectId } = await bootFreshProject("11");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime);
    deps.listCyclesByProject = async () =>
      [
        {
          cycleInstanceId: "cycinst:trj-bridge-11",
          projectId,
          cycleTypeId: "cyc:framing",
          status: "active",
        },
      ] as never;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(
        prepared.code === "LR_BOOTSTRAP_CYCLE_PRESENT" ||
          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-12 — incompatible current HumanDecision refuses", async () => {
    const { runtime, projectId } = await bootFreshProject("12");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    expect(isCurrentHumanDecisionStatus("accepted")).toBe(true);
    const deps = bridgeDeps(runtime);
    deps.listDecisionsByProject = async () =>
      [
        {
          decisionId: "hd:fake-12",
          projectId,
          status: "accepted",
          subject: "trajectory",
          authority: "N2",
          actor: {
            actorId: "actor:pilote",
            role: "project_owner",
            authorityLevel: "N2",
          },
          selectedOptionId: "opt:x",
          effectiveAt: "2026-09-09T20:00:00.000Z",
        },
      ] as never;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      // HD either makes LR STALE (basis fingerprint) or fails greenfield eligibility.
      expect(
        prepared.code === "LR_BOOTSTRAP_HD_PRESENT" ||
          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-13 — trajectory read UNKNOWN fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("13");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime);
    deps.trajectories = {
      ...deps.trajectories,
      findCurrentByProjectId: async () => {
        throw new Error("boom");
      },
      hasAnyByProjectId: async () => {
        throw new Error("boom");
      },
    };
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("TRJ_BRIDGE_TRAJECTORY_UNKNOWN");
    }
  });

  it("BAR-TRJ-14 — LPS OCC failure leaves no second trajectory", async () => {
    const { runtime, projectId } = await bootFreshProject("14");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime, {
      newTrajectoryId: () => "trj:lr-bridge-occ14",
      newStepId: () => "stp:cadrage-occ14",
    });
    const originalCreate = deps.createInitialTrajectory;
    deps.createInitialTrajectory = {
      execute: async (request) =>
        originalCreate.execute({
          ...request,
          expectedLpsVersion: request.expectedLpsVersion + 99,
        }),
    } as typeof originalCreate;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("LPS_VERSION_CONFLICT");
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
    // UoW rollback: no durable candidate row.
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-16 — durable candidate read survives fresh rehydrate", async () => {
    const { runtime, projectId } = await bootFreshProject("16");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed16",
        newStepId: () => "stp:cadrage-fixed16",
      }),
    });
    expect(prepared.ok).toBe(true);

    const read1 = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read1.ok).toBe(true);
    if (!read1.ok || !read1.candidate) throw new Error("missing candidate");
    expect(read1.candidate.status).toBe("candidate");
    expect(read1.candidate.isEffectiveCurrent).toBe(false);
    expect(read1.candidate.catalogLabel).toBe("Cadrage");
    expect(read1.candidate.steps).toHaveLength(1);
    expect(read1.candidate.provenanceStatus).toBe("RESOLVED");
    expect(read1.candidate.targetCycleTypeId).toBe("cyc:framing");

    // Fresh reader path (no React) — second call equals first.
    const read2 = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read2.ok && read2.candidate?.trajectoryId).toBe(
      read1.candidate.trajectoryId,
    );
  });

  it("BAR-TRJ-17/18/20/21 — CTA bridge wiring + no W2 weaken + no model call (structural)", () => {
    const lifecycleSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(lifecycleSrc).toContain("Préparer la trajectoire");
    expect(lifecycleSrc).toContain(
      "projectAssistantPrepareCandidateTrajectoryAction",
    );
    expect(lifecycleSrc).toContain("preCycleCandidateTrajectoryActions");
    expect(lifecycleSrc).toContain("projectId");
    expect(lifecycleSrc).not.toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{[\s\S]*targetCycleTypeId:/,
    );

    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(trajSrc).toContain("Trajectoire proposée");
    expect(trajSrc).toContain("en attente de décision");
    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");
    expect(trajSrc).toContain("activeCycleInstanceId");
    // Pre-cycle candidate hides W2 propose (gated), does not weaken qualificationInputs.
    const qualSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(qualSrc).toContain("CYCLE_NOT_QUALIFIED");
    expect(qualSrc).toContain("activeCycleInstanceId");

    const bridgeSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts",
      ),
      "utf8",
    );
    expect(bridgeSrc).not.toMatch(/openai|OpenAI|runNora|Agents/i);
    expect(bridgeSrc).toContain("createInitialTrajectory.execute");
    expect(bridgeSrc).toContain("NORA_LIFECYCLE_RECOMMENDATION_ACTOR");
    expect(bridgeSrc).toContain("deriveLifecycleBlockersFromEpistemicItems");
    expect(bridgeSrc).not.toMatch(
      /blockingReservationStatements:\s*input\.blockingReservationStatements\s*\?\?\s*\[\]/,
    );
  });

  it("BAR-TRJ-19 — W2 proposeTrajectoryOptions module still requires active cycle (regression)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/Aucun cycle qualifié n'est actif/);
  });

  it("BAR-TRJ-25 — blocking Reservation stales LR and bridge refuses", async () => {
    const { runtime, projectId } = await bootFreshProject("25");
    const materialized = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );

    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: "epi:rsv-blocking-25",
          type: "Reservation",
          statement: "blocking_reservation_trj25",
          status: "active",
          blocking: true,
        },
      ],
    });
    expect(epi.ok).toBe(true);

    const oa = runtime.oa!;
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine =
      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const items = await oa.cycleServices.epistemic.listByProject(projectId);
    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
      "@/lib/oa/cycle"
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    expect(blockers.statements).toContain("blocking_reservation_trj25");

    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
      blockingReservationStatements: blockers.statements,
    });
    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);

    const rebuilt = rebuildBasisRefsForRecommendation({
      item: materialized.item,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: doctrine.doctrinePackageId,
        doctrinePackageVersion: doctrine.version,
        doctrinePackageDigest: doctrine.digest,
        trajectory: null,
        decisions: [],
        evidence: [],
        blockingReservationStatements: blockers.statements,
      },
    });
    expect(rebuilt).not.toBeNull();
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: materialized.item,
        currentBasisRefs: rebuilt!,
      }),
    ).toBe("STALE");

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-should-not-25",
        newStepId: () => "stp:should-not-25",
      }),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
    }
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);
  });

  it("BAR-TRJ-26 — non-blocking Reservation does not stale LR / bridge still succeeds", async () => {
    const { runtime, projectId } = await bootFreshProject("26");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: "epi:rsv-nonblocking-26",
          type: "Reservation",
          statement: "non_blocking_note_trj26",
          status: "active",
          blocking: false,
        },
      ],
    });
    expect(epi.ok).toBe(true);

    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
      "@/lib/oa/cycle"
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    expect(blockers.statements).not.toContain("non_blocking_note_trj26");
    expect(blockers.statements).toHaveLength(0);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed26",
        newStepId: () => "stp:cadrage-fixed26",
      }),
    });
    expect(prepared.ok).toBe(true);
  });

  it("BAR-TRJ-29 — W2 active-cycle qualification contract unchanged (structural)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(src).toContain("CYCLE_NOT_QUALIFIED");
    expect(src).toContain("activeCycleInstanceId");
    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    // W2 CTA gated strictly on activeCycleInstanceId truth.
    expect(trajSrc).toMatch(/activeCycleInstanceId \? \(/);
    expect(trajSrc).toContain("hasCurrentNextCycleRecommendation");
  });
});
```


## Final git status (Product)
```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/candidate-bridge-diffs/
?? .tmp-sfia-review/candidate-f70-diffs/
?? .tmp-sfia-review/live-diagnostic/
?? .tmp-sfia-review/runtime-captures/
```

## Commit
```
2177277c feat(sfia-studio): persist candidate trajectory provenance
 .../candidateTrajectoryBridge.d0.test.ts           |  12 +
 .../candidateTrajectoryProvenance.d0.test.ts       | 969 +++++++++++++++++++++
 .../surfaces/TrajectorySurface.tsx                 |   4 +
 .../preCycleCandidateTrajectoryActions.ts          |  12 +
 .../candidateTrajectoryProvenance.ts               | 257 ++++++
 .../application/lifecycleRecommendation/index.ts   |   1 +
 ...CandidateTrajectoryFromCurrentRecommendation.ts | 204 ++++-
 7 files changed, 1423 insertions(+), 36 deletions(-)
```
