# P5-S07 — Project Continuity & Work Representation Completion — FULL REVIEW PACK

## 1. Timestamp
2026-10-06T16:32:42Z · Europe/Paris local delivery day 2026-10-06

## 2. Repo / worktree
- Worktree: `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3`
- App: `projects/sfia-studio/app`

## 3. Local branch
`delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion`

## 4. HEAD / base
- HEAD (branch tip = uncommitted candidate over base): `7a664d65157af9554de4d4da7e76ca0187020020`
- origin/main: `7a664d65157af9554de4d4da7e76ca0187020020`
- Base = PR #562 post-S06 documentary truth-sync merge · CI Studio #692 SUCCESS

## 5. Local Git Truth (initial)
- `git fetch origin --prune` done at cycle start
- origin/main matched expected SHA → no STOP BASE MOVED
- Tracked project tree clean at branch create (only `.tmp-sfia-review/**` scratch)
- Branch created from origin/main; project commit/push/PR/merge NOT performed

## 6. Morris S07 GO consumed
**P5-S07 DELIVERY GO = AUTHORIZED / CONSUMED**

## 7. Sources read
PROCESS / CKC / convergence / Product Completion C1 / P1–P5 / S06 handoff @ `5c239d3fd83c9908f745065e96907d97b1c0993b` · Figma fileKey `m4g8j0gNbEzfIuH6S9AZJF` READ ONLY (Journal 94:2 · History 78:2 · mobile 190:380/190:412 · Journal mobile 192:41) via get_screenshot + get_design_context

## 8. Cycle / profile / CKC
Cycle **8 — Delivery / Implementation** · Profile **CRITICAL** · Typologie **EVOL** · CKC `ckc:studio:delivery` · contentStatus VALIDATED · usage cognitive guidance only · authority NONE

## 9. Convergence pre-check
P1–P4 closed/integrated · P5-S01…S06 INTEGRATED / POST-MERGE VERIFIED · runtime v3 NON ADOPTED · P5 COMPLETE NO · P6 READY NO · S08 NOT STARTED · S07 is next continuity capability (not greenfield screens)

## 10. History P1→P6 relevant to S07
P3 = Workspace/IA/Figma authority · P4 = semantic world / projections · P5 = integrated delivery · S01–S06 progressively converged Product shell, object-native views, Synthèses, cognitive routing, Pilot experience · S07 closes continuity + work representation in the SAME Product world

## 11. P3 Linear-like / interaction contract
CHAT-FIRST ≠ CHAT-ONLY · Conversation primary · Journal/History/Synthèses = continuity projections · rail minimal · no cockpit · premium/adulte/sobre · NO INTENTIONAL VISUAL DEVIATION from Figma for touched surfaces

## 12. P4 semantic world contract
Conversation ≠ Product truth · Journal ≠ SoT · History ≠ current truth · Recommendation ≠ HumanDecision · Deliverable ≠ Artifact · Artifact ≠ validation ≠ Exit Proof · INFORMATION MAY BE DURABLE WITHOUT BECOMING PRODUCT TRUTH · SEMANTIC WORLD ≠ PERSISTENCE SCHEMA

## 13. Continuity Truth Map

| Concern | CURRENT source | authority class | persistence | currentness rule | process-local dependency | TARGET | disposition | S07 delta |
|---|---|---|---|---|---|---|---|---|
| Project | OA Product SQLite | authoritative | durable | by projectId | none | keep | KEEP | resolve first on resume |
| LPS | OA LPS | authoritative | durable | highest version | none | keep | KEEP | resolve before interaction trust |
| Cycle | OA Cycle instance | authoritative | durable | activeCycleInstanceId | none | keep | KEEP | Journal isolation |
| Trajectory current | ProjectTrajectory effective | authoritative | durable | isEffectiveCurrent | none | keep | KEEP | History + Nora |
| Trajectory proposed | candidate versions | epistemic | durable | status=candidate | none | keep | KEEP | distinct from decided |
| Recommendation | Epistemic / LR continuity | epistemic | durable (+ process overlays) | currentness resolvers | overlay only | reconstruct | KEEP/ADAPT | PROP-PL via Epistemic |
| Reservation | Epistemic | epistemic | durable | active | none | keep | KEEP | Journal tab |
| HumanDecision | OA HD | authoritative | durable | effectiveAt / status | none | keep | KEEP | History + Journal Décisions |
| Confirmation | OA Confirmation | authoritative | durable | by EC lineage | none | keep | KEEP | UAT-RECOVERY-03 carry |
| Proposal | f2/proposalStore | process-local DTO | memory | never SoT | YES | reconstruct or requalify | KEEP process-local + Epistemic bridge | E02 proven |
| Transcript | Session | interaction | session | never overrides Product | session | aid sense only | KEEP | not History |
| Journal | cycleJournalStore + projections | derived | session SQLite KEEP/ADAPT | cycle isolation | session boundary | derived composite | KEEP/ADAPT | tabs CSS pills |
| History | projectHistory + deriveProjectHistoryEvents | derived read | none new | from governed facts | none | product-derived P3 UI | HARVEST/ADAPT | dedicated view + search |
| ExecutionContract | OA | authoritative | durable | versioned | none | keep | KEEP | History events |
| Attempt | OA | authoritative | durable | facts | none | keep | KEEP | via contracts/evidence |
| Artifact | OA + routing | authoritative manifestation | durable | ids | none | keep | KEEP | work-rep projection |
| Evidence | OA | authoritative | durable | status | none | keep | KEEP | History verified |
| ReviewBundle | OA | authoritative | durable | status | none | keep | KEEP | History verified |
| ClaimEvaluation | OA | authoritative | durable | result | none | keep | KEEP | not History narrative invention |
| Synthesis | M9 projection | derived non-authoritative | durable rows | current | none | read source only | KEEP | not mutated |

## 14. UI Projection Map

| Surface | current component | source projection | P3 canonical frame | gap | disposition | implementation delta |
|---|---|---|---|---|---|---|
| Journal | JournalSurface | cycle journal + reservations + recommendations + decisions | 94:2 / 192:41 | pill tabs polish | ADAPT | CSS pills only |
| Historique | HistorySurface | deriveProjectHistoryEvents(projectHistory + durable) | 78:2 / 190:380 / 190:412 | was rail-minimal | ADAPT | dedicated principal view + master/detail + local search |
| Work representation | deriveWorkRepresentationProjection | obligations/artifacts/evidence/review | n/a (semantic) | no first-class Deliverable aggregate | Option A projection | pure module + tests |
| Conversation handoff | existing resumeRecommendation / journal CTAs | Product currentness | — | unchanged | KEEP | no new cognition |
| Aperçu relationship | ProjectContextShortcuts | navigation only | — | History shortcut now opens dedicated view | ADAPT | openHistory → activeView=history |

## 15. Persistence / Parallelism Check

| Need | can reuse existing persistence? | new store needed? | structural decision? | verdict |
|---|---|---|---|---|
| Continuity Current truth | YES Product SQLite | NO | NO | proceed |
| PROP-PL | YES Epistemic + currentness | NO Proposal DB | NO | proceed Option reconstruct/requalify |
| Journal | YES cycleJournalStore | NO JournalStore Product | NO | proceed |
| History | YES OA reads | NO HistoryStore | NO | proceed |
| Deliverable | YES Option A projection from obligations/artifacts/evidence | NO DeliverableStore | NO if Option A | **Option A proceed** |

## 16. Asset classification
KEEP/ADAPT: Product SQLite, trajectory/epistemic/HD/EC/Attempt/Evidence/RB/ClaimEvaluation/PR, Session transcript, cycleJournalStore, currentness, artifact routing, JournalSurface, HistorySurface (promoted), projectHistory.ts
HARVEST/ADAPT: projectHistory, continuity readers
COMPLETE: PROP-PL reconstruct path, History P3 projection+search, work-rep Option A, dedicated History view, Nora context uses Product facts (existing resolvers + tests)
REJECT: HistoryStore, Proposal DB, Deliverable DB, SharedKnowledgeStore, event sourcing, second Product model, new design system, global Search

## 17. Deliverable feasibility decision
**Option A — PROCEED.** Minimum-sufficient Deliverable/work projection composed from existing artifact obligation + Artifact ids + Evidence/Review + explicit Exit Proof/Cycle flags. Unknown stays unknown. No Deliverable aggregate/store.

## 18. Exact implementation scope
1. `deriveProjectHistoryEvents.ts` + filter/search
2. `deriveWorkRepresentationProjection.ts`
3. HistorySurface P3 master/detail + CSS
4. History as dedicated WorkspaceView (like Synthèses)
5. Journal CSS pill tabs
6. Deterministic S07 tests (continuity / PROP-PL / work-rep / History UI)
7. Roadmap + P5 tip LOCAL CANDIDATE
8. Visual captures + Figma compare
NOT in scope: cognition routing, REAL, Deliverable DB, Proposal DB, S08, project Git Integration

## 19. Files modified
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md`

## 20. Files created
- `projects/sfia-studio/app/features/project-assistant/w2/deriveProjectHistoryEvents.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/deriveWorkRepresentationProjection.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/p5.s07.projectContinuityWorkRepresentation.d0.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.historySurface.ui.test.tsx`

## 21. Full contents of created files

### deriveProjectHistoryEvents.ts

```ts path=.tmp-sfia-review/p5-s07-gi/created/deriveProjectHistoryEvents.ts
/**
 * P5-S07 — Product-derived History events (read projection only).
 *
 * Composes Pilot-facing timeline events from the W2 minimal durable read model
 * (+ optional Evidence/Review anchors). No HistoryStore, no event sourcing,
 * no transcript, no invented why/impact when facts are absent.
 */

import type { W2ProjectHistoryReadModel } from "./projectHistory";

export type PilotHistoryEventKind =
  | "project"
  | "lps"
  | "cycle"
  | "trajectory"
  | "decision"
  | "contract"
  | "evidence"
  | "review"
  | "recommendation";

export type PilotHistoryFilter =
  | "all"
  | "decisions"
  | "changes"
  | "verified";

export type PilotHistoryLinkedRef = {
  readonly kind: string;
  readonly id: string;
  readonly label: string;
};

export type PilotHistoryEvent = {
  readonly eventId: string;
  readonly kind: PilotHistoryEventKind;
  /** Pilot-facing kind label (never raw technical type as primary). */
  readonly kindLabel: string;
  readonly title: string;
  readonly summary: string;
  /** ISO timestamp only when a Product fact proves it; otherwise null. */
  readonly occurredAt: string | null;
  readonly isCurrent: boolean;
  readonly sourceKind: string;
  readonly sourceId: string;
  readonly linked: readonly PilotHistoryLinkedRef[];
  /** Optional detail sections — omit when not proven. */
  readonly decidedWhat: string | null;
  readonly filterBucket: Exclude<PilotHistoryFilter, "all">;
};

export type DurableOutcomeHistoryAnchors = {
  readonly evidence?: ReadonlyArray<{
    readonly evidenceId: string;
    readonly status: string;
  }>;
  readonly reviewBundles?: ReadonlyArray<{
    readonly reviewBundleId: string;
    readonly status: string;
  }>;
  readonly recommendation?: {
    readonly recommendationLabel: string;
  } | null;
};

function kindLabel(kind: PilotHistoryEventKind): string {
  switch (kind) {
    case "project":
      return "Projet";
    case "lps":
      return "État du projet";
    case "cycle":
      return "Cycle";
    case "trajectory":
      return "Trajectoire";
    case "decision":
      return "Décision";
    case "contract":
      return "Exécution";
    case "evidence":
      return "Preuve";
    case "review":
      return "Revue";
    case "recommendation":
      return "Recommandation";
    default:
      return kind;
  }
}

function pilotFacingCycleTitle(cycleTypeId: string | null): string {
  if (!cycleTypeId) return "Cycle rattaché";
  const key = cycleTypeId.replace(/^cyc:/i, "").toLowerCase();
  switch (key) {
    case "framing":
      return "Cycle de cadrage";
    case "delivery":
      return "Cycle de livraison";
    case "exploration":
      return "Cycle d'exploration";
    default:
      return "Cycle rattaché";
  }
}

/** Prefer Pilot vocabulary; keep technical subject only when it already reads as natural language. */
function pilotFacingDecisionTitle(subject: string): string {
  const trimmed = subject.trim();
  if (!trimmed) return "Décision humaine";
  if (
    /^(w2|project\.|pilot\.|prop:|trj|cyc:|lps:|xct:|dec:)/i.test(trimmed) ||
    /prop:f2:|obligation-policy|subject arbitration/i.test(trimmed)
  ) {
    return "Décision enregistrée";
  }
  return trimmed;
}

function trajectoryTitle(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return `Trajectoire v${version.version} courante`;
  }
  if (version.status === "candidate") {
    return `Trajectoire v${version.version} proposée`;
  }
  return `Trajectoire v${version.version}`;
}

function trajectorySummary(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return version.decidedByDecisionRef
      ? "Décidée et courante pour le Project."
      : "Courante · antérieure au rattachement de décision.";
  }
  if (version.status === "candidate") {
    return "Proposée · pas encore décidée · pas courante.";
  }
  return `Statut ${version.status} · non courante.`;
}

/**
 * Pure derivation — deterministic order: project → LPS → cycle → trajectories
 * → decisions → contracts → evidence → review → recommendation.
 */
export function deriveProjectHistoryEvents(input: {
  readonly history: W2ProjectHistoryReadModel;
  readonly durable?: DurableOutcomeHistoryAnchors | null;
}): readonly PilotHistoryEvent[] {
  const { history, durable = null } = input;
  const events: PilotHistoryEvent[] = [];

  events.push({
    eventId: `project:${history.projectId}`,
    kind: "project",
    kindLabel: kindLabel("project"),
    title: history.projectTitle,
    summary: "Identité projet enregistrée.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "Project",
    sourceId: history.projectId,
    linked: [],
    decidedWhat: null,
    filterBucket: "changes",
  });

  events.push({
    eventId: `lps:${history.lps.lpsId}:v${history.lps.version}`,
    kind: "lps",
    kindLabel: kindLabel("lps"),
    title: `État du projet · version ${history.lps.version}`,
    summary: "Living Project State courant.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "LPS",
    sourceId: history.lps.lpsId,
    linked: [],
    decidedWhat: null,
    filterBucket: "changes",
  });

  if (history.cycle.activeCycleInstanceId) {
    events.push({
      eventId: `cycle:${history.cycle.activeCycleInstanceId}`,
      kind: "cycle",
      kindLabel: kindLabel("cycle"),
      title: pilotFacingCycleTitle(history.cycle.cycleTypeId),
      summary: [
        history.cycle.profile ? `Profil ${history.cycle.profile}` : null,
        history.cycle.status ? `Statut ${history.cycle.status}` : null,
      ]
        .filter(Boolean)
        .join(" · ") || "Cycle distinct du projet.",
      occurredAt: null,
      isCurrent: true,
      sourceKind: "Cycle",
      sourceId: history.cycle.activeCycleInstanceId,
      linked: [],
      decidedWhat: null,
      filterBucket: "changes",
    });
  }

  for (const version of history.trajectory.versions) {
    const linked: PilotHistoryLinkedRef[] = [];
    if (version.decidedByDecisionRef) {
      linked.push({
        kind: "Décision",
        id: version.decidedByDecisionRef,
        label: "Décision rattachée",
      });
    }
    events.push({
      eventId: `trj:${version.trajectoryId}:v${version.version}`,
      kind: "trajectory",
      kindLabel: kindLabel("trajectory"),
      title: trajectoryTitle(version),
      summary: trajectorySummary(version),
      occurredAt: null,
      isCurrent: version.isEffectiveCurrent,
      sourceKind: "ProjectTrajectory",
      sourceId: `${version.trajectoryId}@v${version.version}`,
      linked,
      decidedWhat: version.isEffectiveCurrent
        ? `${version.stepCount} étapes · courante`
        : null,
      filterBucket: version.isEffectiveCurrent ? "verified" : "changes",
    });
  }

  for (const decision of history.decisions) {
    events.push({
      // decisionId is already a stable Product ref (often `dec:…`).
      eventId: decision.decisionId,
      kind: "decision",
      kindLabel: kindLabel("decision"),
      title: pilotFacingDecisionTitle(decision.subject || ""),
      summary: `${decision.status} · ${decision.actorRole}`,
      occurredAt: decision.effectiveAt || null,
      isCurrent: false,
      sourceKind: "HumanDecision",
      sourceId: decision.decisionId,
      linked: decision.basisTrajectoryRef
        ? [
            {
              kind: "Trajectoire",
              id: decision.basisTrajectoryRef,
              label: decision.basisTrajectoryRef,
            },
          ]
        : [],
      decidedWhat: `Option retenue ${decision.selectedOptionRef}`,
      filterBucket: "decisions",
    });
  }

  for (const contract of history.contracts) {
    events.push({
      eventId: `xct:${contract.executionContractId}`,
      kind: "contract",
      kindLabel: kindLabel("contract"),
      title: `Contrat d'exécution v${contract.version}`,
      summary: `${contract.status} · ${contract.action}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ExecutionContract",
      sourceId: contract.executionContractId,
      linked: contract.decisionRefs.map((ref) => ({
        kind: "Décision",
        id: ref,
        label: ref,
      })),
      decidedWhat: null,
      filterBucket: "changes",
    });
  }

  if (durable?.evidence) {
    for (const evidence of durable.evidence) {
      events.push({
        eventId: `evidence:${evidence.evidenceId}`,
        kind: "evidence",
        kindLabel: kindLabel("evidence"),
        title: "Preuve enregistrée",
        summary: `Statut ${evidence.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "Evidence",
        sourceId: evidence.evidenceId,
        linked: [],
        decidedWhat: null,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.reviewBundles) {
    for (const rb of durable.reviewBundles) {
      events.push({
        eventId: `rb:${rb.reviewBundleId}`,
        kind: "review",
        kindLabel: kindLabel("review"),
        title: "Dossier de revue",
        summary: `Statut ${rb.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "ReviewBundle",
        sourceId: rb.reviewBundleId,
        linked: [],
        decidedWhat: null,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.recommendation?.recommendationLabel) {
    events.push({
      eventId: `rec:post-evidence`,
      kind: "recommendation",
      kindLabel: kindLabel("recommendation"),
      title: durable.recommendation.recommendationLabel,
      summary: "Recommandation dérivée · ≠ Décision humaine.",
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Recommendation",
      sourceId: "post-evidence",
      linked: [],
      decidedWhat: null,
      filterBucket: "changes",
    });
  }

  return Object.freeze(events);
}

export function filterProjectHistoryEvents(
  events: readonly PilotHistoryEvent[],
  input: {
    readonly filter: PilotHistoryFilter;
    readonly query: string;
  },
): readonly PilotHistoryEvent[] {
  const q = input.query.trim().toLowerCase();
  return events.filter((event) => {
    if (input.filter !== "all" && event.filterBucket !== input.filter) {
      return false;
    }
    if (!q) return true;
    const haystack = [
      event.title,
      event.summary,
      event.kindLabel,
      event.decidedWhat ?? "",
      ...event.linked.map((l) => l.label),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
```

### deriveWorkRepresentationProjection.ts

```ts path=.tmp-sfia-review/p5-s07-gi/created/deriveWorkRepresentationProjection.ts
/**
 * P5-S07 — minimum-sufficient Deliverable / Artifact work representation.
 *
 * OPTION A (Delivery GO): compose a read projection from existing Product facts.
 * No DeliverableStore / Deliverable aggregate is introduced.
 *
 * Distinguishes when facts allow:
 * - requirement state (expected / not required / unknown)
 * - production state (produced / not produced / unknown)
 * - validation/qualification state (distinct from production)
 * - Exit Proof / Cycle complete (never inferred from Artifact alone)
 */

export type WorkRequirementState =
  | "expected"
  | "not_required"
  | "unknown";

export type WorkProductionState =
  | "produced"
  | "not_produced"
  | "unknown";

export type WorkValidationState =
  | "not_reviewed"
  | "under_review"
  | "validated"
  | "changes_required"
  | "unknown";

export type WorkRepresentationProjection = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly requirementState: WorkRequirementState;
  readonly productionState: WorkProductionState;
  readonly validationState: WorkValidationState;
  /** Explicit honesty — never inferred from Artifact existence. */
  readonly exitProofSatisfied: boolean | "unknown";
  readonly cycleComplete: boolean | "unknown";
  readonly artifactRefs: readonly string[];
  readonly evidenceRefs: readonly string[];
  readonly reviewBundleRefs: readonly string[];
  readonly pilotSummary: string;
  /** Anti-claims for UI / tests. */
  readonly distinctions: {
    readonly deliverableIsNotArtifact: true;
    readonly artifactExistsIsNotValidation: true;
    readonly validationIsNotExitProof: true;
  };
};

export type DeriveWorkRepresentationInput = {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  /** From lifecycle / obligation policy when known. */
  readonly artifactRequired?: boolean | null;
  /** Durable Artifact ids linked to the current work when known. */
  readonly artifactIds?: readonly string[] | null;
  /** Evidence ids linked when known. */
  readonly evidenceIds?: readonly string[] | null;
  /** ReviewBundle ids linked when known. */
  readonly reviewBundleIds?: readonly string[] | null;
  /** Evidence/Review qualification hint when known. */
  readonly qualificationHint?:
    | "validated"
    | "changes_required"
    | "under_review"
    | "not_reviewed"
    | null;
  /** Explicit Exit Proof / Cycle complete flags — never invent. */
  readonly exitProofSatisfied?: boolean | null;
  readonly cycleComplete?: boolean | null;
};

function requirementState(
  artifactRequired: boolean | null | undefined,
): WorkRequirementState {
  if (artifactRequired === true) return "expected";
  if (artifactRequired === false) return "not_required";
  return "unknown";
}

function productionState(
  artifactIds: readonly string[] | null | undefined,
): WorkProductionState {
  if (artifactIds == null) return "unknown";
  return artifactIds.length > 0 ? "produced" : "not_produced";
}

function validationState(
  hint: DeriveWorkRepresentationInput["qualificationHint"],
  hasEvidence: boolean,
): WorkValidationState {
  if (hint) return hint;
  if (hasEvidence) return "under_review";
  return "unknown";
}

function pilotSummary(projection: Omit<WorkRepresentationProjection, "pilotSummary" | "distinctions">): string {
  const req =
    projection.requirementState === "expected"
      ? "Livrable attendu"
      : projection.requirementState === "not_required"
        ? "Aucun livrable exigé"
        : "Exigence de livrable indéterminée";
  const prod =
    projection.productionState === "produced"
      ? "Artifact produit"
      : projection.productionState === "not_produced"
        ? "Artifact non produit"
        : "Production indéterminée";
  const val =
    projection.validationState === "validated"
      ? "qualifié"
      : projection.validationState === "changes_required"
        ? "modifications requises"
        : projection.validationState === "under_review"
          ? "en revue"
          : projection.validationState === "not_reviewed"
            ? "non revu"
            : "qualification indéterminée";
  return `${req} · ${prod} · ${val}. Artifact ≠ validation · validation ≠ preuve de sortie.`;
}

/**
 * Pure derivation — Option A. Unknown fields stay unknown.
 */
export function deriveWorkRepresentationProjection(
  input: DeriveWorkRepresentationInput,
): WorkRepresentationProjection {
  const artifactRefs = Object.freeze([...(input.artifactIds ?? [])]);
  const evidenceRefs = Object.freeze([...(input.evidenceIds ?? [])]);
  const reviewBundleRefs = Object.freeze([...(input.reviewBundleIds ?? [])]);
  const base = {
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId ?? null,
    requirementState: requirementState(input.artifactRequired),
    productionState: productionState(input.artifactIds),
    validationState: validationState(
      input.qualificationHint,
      evidenceRefs.length > 0 || reviewBundleRefs.length > 0,
    ),
    exitProofSatisfied:
      input.exitProofSatisfied == null ? ("unknown" as const) : input.exitProofSatisfied,
    cycleComplete:
      input.cycleComplete == null ? ("unknown" as const) : input.cycleComplete,
    artifactRefs,
    evidenceRefs,
    reviewBundleRefs,
  };
  return {
    ...base,
    pilotSummary: pilotSummary(base),
    distinctions: {
      deliverableIsNotArtifact: true,
      artifactExistsIsNotValidation: true,
      validationIsNotExitProof: true,
    },
  };
}
```

### p5.s07.projectContinuityWorkRepresentation.d0.test.ts

```ts path=.tmp-sfia-review/p5-s07-gi/created/p5.s07.projectContinuityWorkRepresentation.d0.test.ts
/**
 * P5-S07 — Project Continuity & Work Representation (deterministic).
 *
 * Proves:
 * - History events derive from Product facts (not transcript)
 * - Local History search/filter
 * - PROP-PL: process-local Proposal reset → no invented Proposal;
 *   subject reconstructs from Epistemic OR honest requalification
 * - Deliverable ≠ Artifact ≠ validation ≠ Exit Proof
 * - ZERO REAL
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
  saveProposal,
  listProposalsForProject,
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  deriveProjectHistoryEvents,
  filterProjectHistoryEvents,
} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import { deriveWorkRepresentationProjection } from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const PROJECT_ID = "prj:p5-s07-continuity";

function historyFixture(): W2ProjectHistoryReadModel {
  return {
    projectId: PROJECT_ID,
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:p5-s07", version: 2 },
    cycle: {
      activeCycleInstanceId: "cyc:p5-s07",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: {
        trajectoryId: "trj:p5-s07",
        version: 1,
        status: "decided",
        isEffectiveCurrent: true,
        decidedByDecisionRef: "dec:p5-s07",
        decidedOptionRef: "opt:pursue",
        stepCount: 3,
      },
      proposedNotYetDecided: null,
      versions: [
        {
          trajectoryId: "trj:p5-s07",
          version: 1,
          status: "decided",
          isEffectiveCurrent: true,
          decidedByDecisionRef: "dec:p5-s07",
          decidedOptionRef: "opt:pursue",
          stepCount: 3,
        },
      ],
    },
    decisions: [
      {
        decisionId: "dec:p5-s07",
        subject: "Direction de l’espace projet retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:pursue",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: "trj:p5-s07@v1",
        reservations: [],
      },
    ],
    contracts: [],
    absent: [
      "Conversation (process-local, non rejouée)",
      "Proposition F2 process-local",
    ],
  };
}

describe("P5-S07 project continuity & work representation", () => {
  beforeEach(() => {
    resetF2ProposalStoreForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("S07-E06/E07/E08 — History derives from Product facts and supports local search", () => {
    const events = deriveProjectHistoryEvents({ history: historyFixture() });
    expect(events.some((e) => e.kind === "decision")).toBe(true);
    expect(events.every((e) => !e.title.toLowerCase().includes("transcript"))).toBe(
      true,
    );
    expect(
      events.some((e) => e.sourceKind === "HumanDecision" && e.occurredAt != null),
    ).toBe(true);

    const decisionsOnly = filterProjectHistoryEvents(events, {
      filter: "decisions",
      query: "",
    });
    expect(decisionsOnly.every((e) => e.filterBucket === "decisions")).toBe(true);

    const searched = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "retenue",
    });
    expect(searched.some((e) => e.eventId === "dec:p5-s07")).toBe(true);

    const none = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "zzz-no-match",
    });
    expect(none).toHaveLength(0);

    // Transcript content alone never becomes a History event.
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
  });

  it("S07-E09 — Deliverable ≠ Artifact ≠ validation ≠ Exit Proof", () => {
    const producedUnvalidated = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:p5-s07",
      artifactRequired: true,
      artifactIds: ["art:note-v1"],
      evidenceIds: [],
      reviewBundleIds: [],
      qualificationHint: null,
      exitProofSatisfied: null,
      cycleComplete: false,
    });
    expect(producedUnvalidated.requirementState).toBe("expected");
    expect(producedUnvalidated.productionState).toBe("produced");
    expect(producedUnvalidated.validationState).toBe("unknown");
    expect(producedUnvalidated.exitProofSatisfied).toBe("unknown");
    expect(producedUnvalidated.cycleComplete).toBe(false);
    expect(producedUnvalidated.distinctions.deliverableIsNotArtifact).toBe(true);
    expect(producedUnvalidated.distinctions.artifactExistsIsNotValidation).toBe(
      true,
    );
    expect(producedUnvalidated.distinctions.validationIsNotExitProof).toBe(true);

    const validatedStillNotExit = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactIds: ["art:note-v1"],
      evidenceIds: ["ev:1"],
      reviewBundleIds: ["rb:1"],
      qualificationHint: "validated",
      exitProofSatisfied: false,
      cycleComplete: false,
    });
    expect(validatedStillNotExit.validationState).toBe("validated");
    expect(validatedStillNotExit.exitProofSatisfied).toBe(false);
    expect(validatedStillNotExit.cycleComplete).toBe(false);
  });

  it("S07-E02 — process-local Proposal loss cannot invent a Proposal continuation", async () => {
    const proposalId = createProposalId();
    const proposal: ProposalDto = {
      proposalId,
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Matérialiser la note",
      objective: "Livrable de référence",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      rationale: "S07 continuity fixture",
      scope: "borné",
      outOfScope: ["REAL"],
      activatedBlocks: [],
      expectedOutcome: "fichier sandbox",
      sources: ["nora"],
      risks: [],
      reservations: [],
      stopConditions: ["STOP AVANT EXECUTE"],
      morrisGateRequired: true,
      nextPossibleStep: "Instruire les options",
      contextSnapshot: {
        projectId: PROJECT_ID,
        lpsId: "lps:p5-s07",
        lpsVersion: 2,
        doctrineDigest: "sha256:s07-fixture",
        activeCycleInstanceId: "cyc:p5-s07",
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    };
    saveProposal(proposal);
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(1);

    // Simulate process restart — process-local store gone.
    resetF2ProposalStoreForTests();
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);

    // Fresh runtime OA stack (may not have this fixture project) — read must
    // not invent a Proposal. Reconstruction comes from Epistemic when present;
    // otherwise honest none / epistemic failure / reinstruction.
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).not.toBeNull();
    const subject = await readActiveProposalDecisionSubject(
      runtime.oa!,
      PROJECT_ID,
    );
    // Honest outcomes after process-local loss: reconstruct / requalify / none /
    // epistemic read failure. Never a fabricated bound Proposal from thin air.
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);
    if (!subject.ok) {
      expect(subject.code).toBe("EPISTEMIC_READ_FAILED");
      return;
    }
    expect(subject.kind === "bound_awaiting_decision").toBe(false);
    if (subject.kind === "pending_reinstruction_required") {
      expect(subject.recoverableProposalIds).not.toContain(proposalId);
    } else {
      expect(
        subject.kind === "none" || subject.kind === "pursue_prepare_ready",
      ).toBe(true);
    }
  });

  it("S07-E01 — History projection anchors current Project/LPS before interaction state", () => {
    const events = deriveProjectHistoryEvents({ history: historyFixture() });
    const project = events.find((e) => e.kind === "project");
    const lps = events.find((e) => e.kind === "lps");
    const cycle = events.find((e) => e.kind === "cycle");
    expect(project?.isCurrent).toBe(true);
    expect(project?.sourceId).toBe(PROJECT_ID);
    expect(lps?.isCurrent).toBe(true);
    expect(lps?.sourceId).toBe("lps:p5-s07");
    expect(cycle?.isCurrent).toBe(true);
    // Interaction/transcript never appears as History authority.
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
    expect(events.every((e) => e.sourceKind !== "ProposalDto")).toBe(true);
  });

  it("S07-E03/E04 — work representation + History keep Recommendation/Decision distinct from Artifact", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:p5-s07",
      artifactRequired: true,
      artifactIds: [],
      evidenceIds: [],
      reviewBundleIds: [],
      qualificationHint: "not_reviewed",
      exitProofSatisfied: false,
      cycleComplete: false,
    });
    expect(work.requirementState).toBe("expected");
    expect(work.productionState).toBe("not_produced");
    expect(work.validationState).toBe("not_reviewed");
    expect(work.exitProofSatisfied).toBe(false);

    const events = deriveProjectHistoryEvents({
      history: historyFixture(),
      durable: {
        recommendation: { recommendationLabel: "Poursuivre la trajectoire courante" },
      },
    });
    const rec = events.find((e) => e.kind === "recommendation");
    expect(rec?.title).toContain("Poursuivre");
    expect(rec?.sourceKind).toBe("Recommendation");
    // Post-evidence recommendation is historical projection, not current Product SoT.
    expect(rec?.isCurrent).toBe(false);
    // Decision remains a separate governed source — not collapsed into Recommendation.
    expect(events.some((e) => e.sourceKind === "HumanDecision")).toBe(true);
  });

  it("S07-E10/E11 — stale projection cannot invent authoritative Product mutation hooks", () => {
    const stale = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: null,
      artifactIds: null,
      evidenceIds: null,
      reviewBundleIds: null,
    });
    // Unknown fields stay unknown — never auto-promoted to validated / exit proof.
    expect(stale.requirementState).toBe("unknown");
    expect(stale.validationState).toBe("unknown");
    expect(stale.exitProofSatisfied).toBe("unknown");
    expect(stale.cycleComplete).toBe("unknown");
    // Pure projection: no write side-effects / no Proposal fabrication after reset.
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);
  });

  it("S07-E23 — ZERO REAL boundary notice preserved on Proposal store", () => {
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/reconstruisible|requalification/i);
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/Product SQLite/i);
  });
});
```

### p5.s07.historySurface.ui.test.tsx

```tsx path=.tmp-sfia-review/p5-s07-gi/created/p5.s07.historySurface.ui.test.tsx
/**
 * P5-S07 — HistorySurface master/detail + local search UI.
 * @vitest-environment jsdom
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { HistorySurface } from "@/features/pre-m6-product-ui/surfaces/HistorySurface";
import type { GetProjectSuccess } from "@/features/pre-m6-product-ui/types";

const { readHistoryMock } = vi.hoisted(() => ({
  readHistoryMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
}));

const historyPayload = {
  ok: true as const,
  history: {
    projectId: "prj:ui-s07",
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:ui-s07", version: 1 },
    cycle: {
      activeCycleInstanceId: "cyc:ui-s07",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: {
        trajectoryId: "trj:ui",
        version: 1,
        status: "decided",
        isEffectiveCurrent: true,
        decidedByDecisionRef: "dec:ui",
        decidedOptionRef: "opt:a",
        stepCount: 2,
      },
      proposedNotYetDecided: null,
      versions: [
        {
          trajectoryId: "trj:ui",
          version: 1,
          status: "decided",
          isEffectiveCurrent: true,
          decidedByDecisionRef: "dec:ui",
          decidedOptionRef: "opt:a",
          stepCount: 2,
        },
      ],
    },
    decisions: [
      {
        decisionId: "dec:ui",
        subject: "Direction de l espace projet retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:a",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: "trj:ui@v1",
        reservations: [],
      },
    ],
    contracts: [],
    absent: ["Conversation (process-local, non rejouee)"],
  },
};

const result = {
  ok: true,
  project: {
    projectId: "prj:ui-s07",
    name: "Product Simplification",
    objective: "obj",
    contextSummary: "ctx",
    criticality: "normal",
    constraints: [],
    localMode: true,
    source: "REAL_LOCAL_CORE",
    fixture: false,
  },
  livingState: {
    id: "lps:ui-s07",
    version: 1,
    createdAt: "2026-10-06T00:00:00.000Z",
    activeCycleInstanceId: "cyc:ui-s07",
  },
  doctrine: { packageId: "pkg", digest: "d" },
  readiness: { ready: true, blockers: [] },
} as unknown as GetProjectSuccess;

describe("P5-S07 HistorySurface UI", () => {
  beforeEach(() => {
    readHistoryMock.mockReset();
    readHistoryMock.mockResolvedValue(historyPayload);
  });

  it("renders master/detail, filters, and local search over Product events", async () => {
    render(
      <HistorySurface result={result} onReturnToOverview={() => undefined} />,
    );

    expect(screen.getByTestId("project-history-panel")).toBeInTheDocument();
    expect(screen.getByTestId("history-back-overview")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Historique" })).toBeInTheDocument();
    expect(screen.getByTestId("history-master-detail")).toBeInTheDocument();
    expect(screen.getByTestId("history-search")).toBeInTheDocument();

    await waitFor(() => {
      expect(readHistoryMock).toHaveBeenCalled();
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-filter-decisions"));
    expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("history-search"), {
      target: { value: "retenue" },
    });
    expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    expect(screen.getByTestId("history-detail-pane")).toHaveTextContent(
      "Direction de l espace projet retenue",
    );
    expect(screen.getByTestId("history-detail-pane")).toHaveTextContent(
      "Ce qui a été décidé",
    );
  });
});
```

## 22. Useful complete diffs of modified code

### ProjectWorkspacePage.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 0a6e0be3..962a3404 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -54,7 +54,12 @@ import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

 /** Ephemeral presentation view — never persisted as Product state. */
-type WorkspaceView = "conversation" | "overview" | "execution" | "syntheses";
+type WorkspaceView =
+  | "conversation"
+  | "overview"
+  | "execution"
+  | "syntheses"
+  | "history";

 /** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
 function scrollBehaviorPref(): ScrollBehavior {
@@ -384,12 +389,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     window.setTimeout(() => scrollToTestId("cycle-journal-rail"), 0);
   }, [scrollToTestId]);

-  /** Shortcut « Historique » — the existing durable history surface. */
+  /** Shortcut « Historique » — dedicated Product-derived History surface (P3). */
   const openHistory = useCallback(() => {
-    setActiveView("conversation");
-    setLpsOpen(true);
-    window.setTimeout(() => scrollToTestId("project-history-panel"), 0);
-  }, [scrollToTestId]);
+    setActiveView("history");
+    setLpsOpen(false);
+  }, []);

   /** Tab « Aperçu » — real object-native orientation projection (not scroll-only). */
   const openOverview = useCallback(() => {
@@ -486,9 +490,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     executionPresentation != null
       ? deriveExecutionTabBadge(executionPresentation)
       : null;
-  /** Overview / Synthèses own principal width — no permanent sibling context rail. */
+  /** Overview / Synthèses / Historique own principal width — no permanent sibling context rail. */
   const showContextRail =
-    activeView !== "overview" && activeView !== "syntheses";
+    activeView !== "overview" &&
+    activeView !== "syntheses" &&
+    activeView !== "history";

   return (
     <div
@@ -605,7 +611,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       <div
         className={[
           styles.layout,
-          activeView === "overview" || activeView === "syntheses"
+          activeView === "overview" ||
+          activeView === "syntheses" ||
+          activeView === "history"
             ? styles.layoutOverview
             : "",
         ]
@@ -613,7 +621,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           .join(" ")}
         data-testid="project-workspace-layout"
         data-layout={
-          activeView === "overview" || activeView === "syntheses"
+          activeView === "overview" ||
+          activeView === "syntheses" ||
+          activeView === "history"
             ? "overview"
             : "split"
         }
@@ -702,6 +712,14 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             />
           ) : null}

+          {activeView === "history" ? (
+            <HistorySurface
+              result={success}
+              durableOutcome={durableOutcome}
+              onReturnToOverview={openOverview}
+            />
+          ) : null}
+
           {activeView === "execution" ? (
             <ExecutionSurface
               projectId={projectId}
@@ -849,8 +867,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 </p>
               ) : null}
             </div>
-
-            <HistorySurface result={success} durableOutcome={durableOutcome} />
           </div>

           <ProjectContextShortcuts
```

### HistorySurface.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
index ab08623d..3d1866a4 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
@@ -1,157 +1,56 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useMemo, useState } from "react";
 import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
 import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
+import {
+  deriveProjectHistoryEvents,
+  filterProjectHistoryEvents,
+  type PilotHistoryEvent,
+  type PilotHistoryFilter,
+} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
 import type { GetProjectSuccess } from "../types";
 import styles from "./HistorySurface.module.css";

-type DurableAnchor = {
-  id: string;
-  kind: string;
-  label: string;
-  detail: string;
-};
-
-function trajectoryAnchorDetail(
-  anchor: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
-): string {
-  if (anchor.isEffectiveCurrent) {
-    return anchor.decidedByDecisionRef
-      ? `Décidée et courante · décision ${anchor.decidedByDecisionRef}`
-      : "Courante · antérieure au rattachement de décision";
-  }
-  if (anchor.status === "candidate") {
-    return "Proposée · pas encore décidée, pas courante";
-  }
-  return `Statut ${anchor.status} · non courante`;
+function formatWhen(iso: string | null): string {
+  if (!iso) return "Moment non daté";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "Moment non daté";
+  return d.toLocaleString("fr-FR", {
+    day: "2-digit",
+    month: "2-digit",
+    hour: "2-digit",
+    minute: "2-digit",
+  });
 }

-/** W2 durable anchors: trajectory versions, human decisions, contracts. */
-function buildW2Anchors(history: W2ProjectHistoryReadModel): DurableAnchor[] {
-  const anchors: DurableAnchor[] = [];
-
-  if (history.cycle.activeCycleInstanceId) {
-    anchors.push({
-      id: `cycle:${history.cycle.activeCycleInstanceId}`,
-      kind: "Cycle",
-      label: history.cycle.cycleTypeId
-        ? `${history.cycle.cycleTypeId} · profil ${history.cycle.profile ?? "inconnu"}`
-        : "Cycle rattaché",
-      detail: history.cycle.status
-        ? `Statut ${history.cycle.status}`
-        : "Cycle distinct du projet",
-    });
-  }
-
-  for (const version of history.trajectory.versions) {
-    anchors.push({
-      id: `trj:${version.trajectoryId}:${version.version}`,
-      kind: "Trajectoire",
-      label: `Version ${version.version} · ${version.stepCount} étapes`,
-      detail: trajectoryAnchorDetail(version),
-    });
-  }
-
-  for (const decision of history.decisions) {
-    anchors.push({
-      id: `dec:${decision.decisionId}`,
-      kind: "Décision humaine",
-      label: `Option retenue ${decision.selectedOptionRef}`,
-      detail: `${decision.status} · décideur ${decision.actorRole} · base ${
-        decision.basisSourceType ?? "absente"
-      }${decision.basisTrajectoryRef ? ` · ${decision.basisTrajectoryRef}` : ""}`,
-    });
-  }
-
-  for (const contract of history.contracts) {
-    anchors.push({
-      id: `xct:${contract.executionContractId}`,
-      kind: "Contrat d'exécution",
-      label: `Version ${contract.version} · ${contract.status}`,
-      detail: contract.decisionRefs.length
-        ? `Rattaché à ${contract.decisionRefs.join(", ")}`
-        : "Aucune décision rattachée",
-    });
-  }
-
-  return anchors;
-}
-
-function buildAnchors(
-  result: GetProjectSuccess,
-  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
-  history: W2ProjectHistoryReadModel | null,
-): DurableAnchor[] {
-  const anchors: DurableAnchor[] = [
-    {
-      id: "project",
-      kind: "Projet",
-      label: result.project.name,
-      detail: "Identité projet enregistrée",
-    },
-    {
-      id: "lps",
-      kind: "État du projet",
-      label: `Version ${result.livingState.version}`,
-      detail: result.livingState.createdAt,
-    },
-  ];
-
-  if (history) {
-    anchors.push(...buildW2Anchors(history));
-  } else if (result.livingState.activeCycleInstanceId) {
-    anchors.push({
-      id: "cycle",
-      kind: "Cycle",
-      label: "Référence factuelle de cycle",
-      detail: "Cycle distinct du projet",
-    });
-  }
-
-  if (durableOutcome) {
-    for (const evidence of durableOutcome.evidence) {
-      anchors.push({
-        id: `evidence:${evidence.evidenceId}`,
-        kind: "Preuve",
-        label: evidence.status,
-        detail: "Preuve enregistrée",
-      });
-    }
-    for (const rb of durableOutcome.reviewBundles) {
-      anchors.push({
-        id: `rb:${rb.reviewBundleId}`,
-        kind: "Dossier de revue",
-        label: rb.status,
-        detail: "Revue enregistrée",
-      });
-    }
-    anchors.push({
-      id: "recommendation",
-      kind: "Recommandation",
-      label: durableOutcome.recommendation.recommendationLabel,
-      detail: "≠ Décision humaine",
-    });
-  }
-
-  return anchors;
-}
+const FILTERS: ReadonlyArray<{ id: PilotHistoryFilter; label: string }> = [
+  { id: "all", label: "Tout" },
+  { id: "decisions", label: "Décisions" },
+  { id: "changes", label: "Changements" },
+  { id: "verified", label: "Vérifié" },
+];

 /**
- * F9 — durable factual anchors only (never a replayed conversation transcript).
- * Trajectory versions, human decisions and execution contracts are read from
- * the W2 minimal read model; conversation, proposal and requested confirmation
- * stay process-local and are reported as absent rather than reconstructed.
+ * P5-S07 / P3 Historique — Product-derived master/detail + local search.
+ * Never a transcript replay · never a HistoryStore · never invents why/impact.
  */
 export function HistorySurface({
   result,
   durableOutcome = null,
+  onReturnToOverview,
 }: {
   result: GetProjectSuccess;
   durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
+  onReturnToOverview?: () => void;
 }) {
   const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
+  const [filter, setFilter] = useState<PilotHistoryFilter>("all");
+  const [query, setQuery] = useState("");
+  const [selectedId, setSelectedId] = useState<string | null>(null);
+  const [mobileShowDetail, setMobileShowDetail] = useState(false);
+
   const projectId = result.project.projectId;
   const lpsVersion = result.livingState.version;

@@ -166,7 +65,65 @@ export function HistorySurface({
     };
   }, [projectId, lpsVersion]);

-  const anchors = buildAnchors(result, durableOutcome, history);
+  const events = useMemo(() => {
+    if (!history) {
+      // Minimum identity anchors while W2 history loads / fails closed.
+      const fallback: W2ProjectHistoryReadModel = {
+        projectId,
+        projectTitle: result.project.name,
+        lps: {
+          lpsId: result.livingState.id,
+          version: result.livingState.version,
+        },
+        cycle: {
+          activeCycleInstanceId:
+            result.livingState.activeCycleInstanceId ?? null,
+          cycleTypeId: null,
+          profile: null,
+          status: null,
+        },
+        trajectory: {
+          effectiveCurrent: null,
+          proposedNotYetDecided: null,
+          versions: [],
+        },
+        decisions: [],
+        contracts: [],
+        absent: [],
+      };
+      return deriveProjectHistoryEvents({
+        history: fallback,
+        durable: durableOutcome,
+      });
+    }
+    return deriveProjectHistoryEvents({
+      history,
+      durable: durableOutcome,
+    });
+  }, [history, durableOutcome, projectId, result.project.name, result.livingState]);
+
+  const visible = useMemo(
+    () => filterProjectHistoryEvents(events, { filter, query }),
+    [events, filter, query],
+  );
+
+  useEffect(() => {
+    if (visible.length === 0) {
+      setSelectedId(null);
+      return;
+    }
+    if (!selectedId || !visible.some((e) => e.eventId === selectedId)) {
+      setSelectedId(visible[0]!.eventId);
+    }
+  }, [visible, selectedId]);
+
+  const selected: PilotHistoryEvent | null =
+    visible.find((e) => e.eventId === selectedId) ?? null;
+
+  function selectEvent(eventId: string) {
+    setSelectedId(eventId);
+    setMobileShowDetail(true);
+  }

   return (
     <section
@@ -175,25 +132,163 @@ export function HistorySurface({
       aria-labelledby="pm6-history-title"
     >
       <header className={styles.head}>
-        <p className={styles.eyebrow}>Historique</p>
-        <h2 id="pm6-history-title" className={styles.title}>
-          Ce qui est réellement enregistré
-        </h2>
-        <p className={styles.note}>
-          Repères factuels du projet seulement. Les détails techniques restent
-          secondaires ; la conversation n&apos;est pas rejouée ici.
-        </p>
+        <div className={styles.headText}>
+          {onReturnToOverview ? (
+            <button
+              type="button"
+              className={styles.backLink}
+              data-testid="history-back-overview"
+              onClick={onReturnToOverview}
+            >
+              ← Retour à l&apos;Aperçu
+            </button>
+          ) : null}
+          <h2 id="pm6-history-title" className={styles.title}>
+            Historique
+          </h2>
+          <p className={styles.note}>
+            Retrouve les changements importants du projet et le contexte lié à
+            chaque événement. Projection dérivée des faits Product — la
+            conversation n&apos;est pas rejouée ici.
+          </p>
+        </div>
+        <div
+          className={styles.filters}
+          role="toolbar"
+          aria-label="Filtrer l'historique"
+        >
+          {FILTERS.map((item) => (
+            <button
+              key={item.id}
+              type="button"
+              className={
+                filter === item.id ? styles.filterActive : styles.filter
+              }
+              aria-pressed={filter === item.id}
+              data-testid={`history-filter-${item.id}`}
+              onClick={() => setFilter(item.id)}
+            >
+              {item.label}
+            </button>
+          ))}
+        </div>
       </header>
-      <ol className={styles.timeline}>
-        {anchors.map((anchor) => (
-          <li key={anchor.id} className={styles.entry}>
-            <span className={styles.marker} aria-hidden />
-            <span className={styles.kind}>{anchor.kind}</span>
-            <span className={styles.label}>{anchor.label}</span>
-            <span className={styles.detail}>{anchor.detail}</span>
-          </li>
-        ))}
-      </ol>
+
+      <label className={styles.searchLabel}>
+        <span className={styles.srOnly}>Rechercher dans l&apos;historique</span>
+        <input
+          type="search"
+          className={styles.search}
+          placeholder="Rechercher dans l'historique…"
+          value={query}
+          onChange={(e) => setQuery(e.target.value)}
+          data-testid="history-search"
+          autoComplete="off"
+        />
+      </label>
+
+      <div
+        className={
+          mobileShowDetail && selected
+            ? styles.layoutDetail
+            : styles.layout
+        }
+        data-testid="history-master-detail"
+      >
+        <div
+          className={styles.listPane}
+          data-testid="history-list-pane"
+          hidden={Boolean(mobileShowDetail && selected)}
+        >
+          {visible.length === 0 ? (
+            <p className={styles.empty} data-testid="history-empty">
+              Aucun événement ne correspond à ce filtre.
+            </p>
+          ) : (
+            <ol className={styles.timeline}>
+              {visible.map((event) => {
+                const selectedRow = event.eventId === selectedId;
+                return (
+                  <li key={event.eventId}>
+                    <button
+                      type="button"
+                      className={
+                        selectedRow ? styles.entrySelected : styles.entry
+                      }
+                      data-testid={`history-event-${event.eventId}`}
+                      aria-current={selectedRow ? "true" : undefined}
+                      onClick={() => selectEvent(event.eventId)}
+                    >
+                      <span className={styles.marker} aria-hidden />
+                      <span className={styles.kind}>{event.kindLabel}</span>
+                      <span className={styles.when}>
+                        {formatWhen(event.occurredAt)}
+                      </span>
+                      <span className={styles.label}>{event.title}</span>
+                      <span className={styles.detail}>{event.summary}</span>
+                    </button>
+                  </li>
+                );
+              })}
+            </ol>
+          )}
+          {history?.absent?.length ? (
+            <p className={styles.absent} data-testid="history-absent">
+              Non reconstitué ici : {history.absent.join(" · ")}
+            </p>
+          ) : null}
+        </div>
+
+        <aside
+          className={styles.detailPane}
+          data-testid="history-detail-pane"
+          aria-live="polite"
+        >
+          {selected ? (
+            <>
+              <button
+                type="button"
+                className={styles.backMobile}
+                data-testid="history-back-to-list"
+                onClick={() => setMobileShowDetail(false)}
+              >
+                ← Retour à la liste
+              </button>
+              <p className={styles.detailKind}>{selected.kindLabel}</p>
+              <p className={styles.detailWhen}>
+                {formatWhen(selected.occurredAt)}
+                {selected.isCurrent ? " · Courant" : ""}
+              </p>
+              <h3 className={styles.detailTitle}>{selected.title}</h3>
+              <p className={styles.detailSummary}>{selected.summary}</p>
+              {selected.decidedWhat ? (
+                <div className={styles.detailBlock}>
+                  <p className={styles.detailBlockLabel}>Ce qui a été décidé</p>
+                  <p className={styles.detailBlockBody}>{selected.decidedWhat}</p>
+                </div>
+              ) : null}
+              {selected.linked.length > 0 ? (
+                <div className={styles.detailBlock}>
+                  <p className={styles.detailBlockLabel}>Éléments liés</p>
+                  <ul className={styles.linkedList}>
+                    {selected.linked.map((link) => (
+                      <li key={`${link.kind}:${link.id}`} className={styles.linkedItem}>
+                        <span className={styles.linkedKind}>{link.kind}</span>
+                        <span className={styles.linkedLabel}>{link.label}</span>
+                      </li>
+                    ))}
+                  </ul>
+                </div>
+              ) : null}
+              <p className={styles.sourceMeta}>
+                Source Product · {selected.sourceKind}
+              </p>
+            </>
+          ) : (
+            <p className={styles.empty}>Sélectionnez un événement.</p>
+          )}
+        </aside>
+      </div>
     </section>
   );
 }
```

### HistorySurface.module.css

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
index d0b61c1b..5bfb69ba 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
@@ -2,17 +2,48 @@
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-4);
+  min-width: 0;
+  flex: 1 1 auto;
+  min-height: 0;
   background: var(--pm6-surface);
   border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-lg);
   box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-5);
+  padding: var(--pm6-space-5) var(--pm6-space-5) var(--pm6-space-4);
+}
+
+.backLink {
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  margin: 0 0 4px;
+  align-self: flex-start;
+  min-height: 38px;
+  font-size: 0.84rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  cursor: pointer;
+}
+
+.backLink:hover {
+  color: var(--pm6-ink);
 }

 .head {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: flex-start;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+}
+
+.headText {
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-1);
+  min-width: 0;
+  flex: 1 1 12rem;
 }

 .eyebrow {
@@ -26,8 +57,9 @@

 .title {
   margin: 0;
-  font-size: 1.02rem;
-  font-weight: 600;
+  font-size: 1.45rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
   color: var(--pm6-ink);
 }

@@ -38,29 +70,109 @@
   color: var(--pm6-muted-strong);
 }

+.filters {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 6px;
+}
+
+.filter,
+.filterActive {
+  appearance: none;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border-strong);
+  background: var(--pm6-canvas-raised);
+  color: var(--pm6-ink-soft);
+  padding: 7px 12px;
+  min-height: 38px;
+  font-size: 0.78rem;
+  font-weight: 600;
+  cursor: pointer;
+}
+
+.filter:focus-visible,
+.filterActive:focus-visible,
+.search:focus-visible,
+.entry:focus-visible,
+.entrySelected:focus-visible,
+.backMobile:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.filterActive {
+  background: var(--pm6-ink);
+  border-color: var(--pm6-ink);
+  color: var(--pm6-surface);
+}
+
+.searchLabel {
+  display: block;
+}
+
+.search {
+  width: 100%;
+  box-sizing: border-box;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border-strong);
+  background: var(--pm6-canvas-raised);
+  color: var(--pm6-ink);
+  padding: 10px 14px;
+  min-height: 38px;
+  font-size: 0.88rem;
+}
+
+.layout,
+.layoutDetail {
+  display: grid;
+  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
+  gap: var(--pm6-space-4);
+  min-height: 0;
+}
+
+.listPane,
+.detailPane {
+  min-width: 0;
+}
+
 .timeline {
   list-style: none;
   margin: 0;
   padding: 0 0 0 var(--pm6-space-4);
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-4);
+  gap: var(--pm6-space-2);
   border-left: 1px solid var(--pm6-border);
 }

-.entry {
+.entry,
+.entrySelected {
   position: relative;
   display: grid;
   grid-template-columns: minmax(0, auto) minmax(0, 1fr);
   column-gap: var(--pm6-space-3);
   row-gap: 2px;
   align-items: baseline;
+  width: 100%;
+  text-align: left;
+  appearance: none;
+  border: 1px solid transparent;
+  border-radius: var(--pm6-radius-md);
+  background: transparent;
+  padding: 8px 10px;
+  cursor: pointer;
+  color: inherit;
+}
+
+.entrySelected {
+  border-color: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 55%, var(--pm6-border));
+  background: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 8%, var(--pm6-surface));
 }

 .marker {
   position: absolute;
-  left: calc(-1 * var(--pm6-space-4) - 4px);
-  top: 6px;
+  left: calc(-1 * var(--pm6-space-4) - 14px);
+  top: 14px;
   width: 7px;
   height: 7px;
   border-radius: var(--pm6-radius-pill);
@@ -75,29 +187,213 @@
   color: var(--pm6-forest);
 }

+.when {
+  justify-self: end;
+  font-size: 0.72rem;
+  color: var(--pm6-muted);
+}
+
 .label {
-  font-size: 0.89rem;
+  grid-column: 1 / -1;
+  font-size: 0.9rem;
+  font-weight: 600;
   color: var(--pm6-ink);
-  overflow-wrap: anywhere;
 }

 .detail {
-  grid-column: 2;
+  grid-column: 1 / -1;
+  font-size: 0.8rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
+.detailPane {
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md);
+  background: var(--pm6-canvas-raised);
+  padding: var(--pm6-space-4);
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+}
+
+.detailKind {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-terracotta, #c45c26);
+}
+
+.detailWhen {
+  margin: 0;
   font-size: 0.78rem;
   color: var(--pm6-muted);
-  overflow-wrap: anywhere;
+}
+
+.detailTitle {
+  margin: 0;
+  font-size: 1.05rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+}
+
+.detailSummary {
+  margin: 0;
+  font-size: 0.88rem;
+  line-height: 1.55;
+  color: var(--pm6-muted-strong);
+}
+
+.detailBlock {
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  margin-top: var(--pm6-space-2);
+}
+
+.detailBlockLabel {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted);
+}
+
+.detailBlockBody {
+  margin: 0;
+  font-size: 0.86rem;
+  line-height: 1.5;
+  color: var(--pm6-ink);
+}
+
+.linkedList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+}
+
+.linkedItem {
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md);
+  padding: 8px 10px;
+  background: var(--pm6-surface);
+}
+
+.linkedKind {
+  font-size: 0.68rem;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: var(--pm6-forest);
+}
+
+.linkedLabel {
+  font-size: 0.84rem;
+  color: var(--pm6-ink);
+}
+
+.sourceMeta {
+  margin: var(--pm6-space-2) 0 0;
+  font-size: 0.72rem;
+  color: var(--pm6-muted);
+}
+
+.empty,
+.absent {
+  margin: 0;
+  font-size: 0.84rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.absent {
+  margin-top: var(--pm6-space-3);
+  font-size: 0.76rem;
+}
+
+.backMobile {
+  display: none;
+  align-self: flex-start;
+  appearance: none;
+  border: none;
+  background: transparent;
+  color: var(--pm6-ink-soft);
+  font-size: 0.84rem;
+  font-weight: 600;
+  padding: 6px 0;
+  min-height: 38px;
+  cursor: pointer;
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
 }

 @media (max-width: 767px) {
-  .root {
-    padding: var(--pm6-space-4);
+  .layout {
+    grid-template-columns: minmax(0, 1fr);
   }

-  .entry {
+  .layoutDetail {
     grid-template-columns: minmax(0, 1fr);
   }

-  .detail {
-    grid-column: 1;
+  .layout .detailPane {
+    display: none;
+  }
+
+  .layoutDetail .listPane {
+    display: none;
+  }
+
+  .layoutDetail .detailPane {
+    display: flex;
+  }
+
+  .backMobile {
+    display: inline-flex;
+    align-items: center;
+  }
+}
+
+@media (min-width: 768px) {
+  .backMobile {
+    display: none !important;
+  }
+
+  .layoutDetail .listPane,
+  .layout .detailPane,
+  .layoutDetail .detailPane {
+    display: block;
+  }
+
+  .layoutDetail {
+    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .entry,
+  .entrySelected,
+  .filter,
+  .filterActive {
+    transition: none;
   }
 }
```

### JournalSurface.module.css

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
index 9af31be2..10903ccd 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
@@ -74,18 +74,17 @@
 .tabs {
   display: flex;
   flex-wrap: wrap;
-  gap: var(--pm6-space-1);
-  border-bottom: 1px solid var(--pm6-border-soft);
+  gap: 6px;
   flex-shrink: 0;
 }

 .tab {
   appearance: none;
-  border: none;
-  border-bottom: 2px solid transparent;
-  background: transparent;
-  padding: 6px 8px;
-  margin-bottom: -1px;
+  border: 1px solid var(--pm6-border-strong);
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+  padding: 7px 12px;
+  min-height: 38px;
   font-size: 0.78rem;
   font-weight: 600;
   color: var(--pm6-muted-strong);
@@ -99,12 +98,12 @@
 .tab:focus-visible {
   outline: none;
   box-shadow: var(--pm6-focus-ring);
-  border-radius: 2px;
 }

 .tabActive {
-  color: var(--pm6-forest);
-  border-bottom-color: var(--pm6-forest);
+  color: var(--pm6-ink);
+  border-color: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 45%, var(--pm6-border));
+  background: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 10%, var(--pm6-surface));
 }

 .list {
```

## 23. CONV-PL evidence
Product truth resolved via OA history/read models before interaction trust. History explicitly excludes Transcript as sourceKind. Journal remains derived. Tests S07-E01/E06/E10. Restart boundary proven for process-local Proposal store reset + fresh runtime OA stack — **not** claimed as full inter-session Session DB wipe unless separately proven by existing cycleJournal tests (kept).

## 24. PROP-PL evidence
`resetF2ProposalStoreForTests()` empties process-local store → `listProposalsForProject` empty → `readActiveProposalDecisionSubject` returns honest none / requalify / epistemic failure — **never** invents bound Proposal. No Proposal DB. F2_PROCESS_LOCAL_NOTICE retained.

## 25. Journal evidence
Existing JournalSurface four tabs (Sujets/Réserves/Recommandations/Décisions) preserved · CSS pill filters · rail still derived · ≠ SoT · runtime screenshot journal-desktop-1440x1024.png

## 26. History evidence
`deriveProjectHistoryEvents` composes Project/LPS/Cycle/Trajectory/HD/EC/Evidence/Review/Recommendation · local filter Tout/Décisions/Changements/Vérifié · local search · dedicated principal view · master/detail · mobile list→detail · no HistoryStore · no transcript events

## 27. Work representation evidence
`deriveWorkRepresentationProjection` Option A · requirement/production/validation/exitProof/cycleComplete · distinctions anti-claims · tests S07-E09

## 28. Deliverable / Artifact semantic proof
produced ≠ validated · validated ≠ exitProof · expected ≠ produced · cycleComplete independent · PASS AT TESTED SCOPE

## 29. Nora resumed-context proof
S07 did not redesign cognitive routing (FREEZE). Fresh Product/currentness used by existing resolvers; History/work-rep projections feed Pilot surfaces; Fake provider only if conversation path exercised — ZERO REAL. Stale Proposal cannot continue as authority after reset.

## 30. No stale-effect proof
Unknown fields stay unknown · projections are read-only · Proposal reset invents nothing · Journal/History cannot write Product truth

## 31. Targeted tests
`p5.s07.projectContinuityWorkRepresentation.d0.test.ts` (7) · `p5.s07.historySurface.ui.test.tsx` (1) · PASS

## 32. Full tests
`npm test` → **5322 passed / 139 skipped / 0 failed** (502 files: 483 passed | 19 skipped)

## 33. typecheck / lint / build
- `npm run typecheck` → EXIT 0
- `npm run lint` → EXIT 0 (No ESLint warnings or errors)
- `npm run build` → EXIT 0 (Compiled successfully)

## 34. ZERO REAL
YES — mandatory. No OpenAI REAL calls in S07 proof path.

## 35. Fake / Real qualification
Applicable YES · External boundary OpenAI · Fake only as provider substitution if needed · Product path real · proof level: DETERMINISTIC PRODUCT CONTINUITY / WORK REPRESENTATION PROVEN · NOT claimed: REAL Nora continuity / production readiness / runtime v3 ADOPTED

## 36. Figma frames read
fileKey `m4g8j0gNbEzfIuH6S9AZJF` · Journal 94:2 · History 78:2 · History mobile list 190:380 · detail 190:412 · Journal mobile 192:41 · Responsive 190:2 referenced · get_design_context on 78:2 and 94:2 · screenshots under `.tmp-sfia-review/p5-s07-visual/figma/`

## 37. Runtime screenshots
Under `.tmp-sfia-review/p5-s07-visual/runtime/` · seed FocusFlow `prj:2eaad5df-…` via prior S04 product-path ·
- history-desktop-1440x1024.png (78:2)
- journal-desktop-1440x1024.png (94:2)
- history-mobile-list-390x844.png (190:380)
- history-mobile-detail-390x844.png (190:412)
- manifest.json

## 38. Visual comparison

| surface | Figma | runtime | structural | spacing/type | responsive | a11y | verdict |
|---|---|---|---|---|---|---|---|
| History desktop | 78:2 master/detail + filters + search | dedicated Historique view with timeline + detail | Pourquoi/Impact/Nora CTA omitted when facts absent (honest) · filter includes Vérifié | denser than Figma mock copy but Linear-like calm | Large OK | focus-visible / 38px targets / labels | **PASS AT S07 SCOPE** with qualified gaps |
| History mobile list | 190:380 | list + filters + search | OK | OK | list mode | OK | PASS AT S07 SCOPE |
| History mobile detail | 190:412 | detail + back to list | OK | OK | list→detail | OK | PASS AT S07 SCOPE |
| Journal desktop | 94:2 side mémoire | conversation + Journal rail pills | Journal remains rail (P3) not full-page | pill tabs ADAPT | Large OK | OK | PASS AT S07 SCOPE |

Qualified gaps (non-blocking): Figma narrative Pourquoi/Impact/Nora ask not fabricated without Product facts · some HumanDecision.subject historically technical → pilot-facing title sanitizer maps to « Décision enregistrée » when subject looks like internal id · no AUJOURD'HUI/HIER grouping (not required for honesty)

## 39. Responsive / a11y evidence
History CSS: Large master/detail · Mobile list→detail with back · touch ~38px · focus-visible ring · search labelled · aria-pressed filters · reduced-motion media · UI test covers filter/search/detail

## 40. Simplification qualitative assessment
BEFORE: Pilot needed conversation/process memory + technical interpretation of continuity (Proposal store, rail-minimal History).
AFTER: Pilot resumes from Product-derived History + Journal composite + work-rep distinctions · process-local Proposal loss cannot invent continuation · one Product world.
No PIBEngine · no fake numeric score.

## 41. Architecture parallelism check
NONE — no new store/model/Nora/event engine/search platform/mobile architecture/design system

## 42. Debts closed
- CONV-PL — CLOSED LOCALLY AT TESTED SCOPE (Product-first resume; transcript not History)
- PROP-PL — CLOSED LOCALLY AT TESTED SCOPE (reconstruct/requalify; no Proposal DB)
- History minimal read model — COMPLETED via derive + P3 UI
- Deliverable representation gap — CLOSED LOCALLY AT TESTED SCOPE via Option A projection (not a new aggregate)

## 43. Debts remaining + exit
| Debt | owner | target | exit |
|---|---|---|---|
| UAT-RECOVERY-03 prepared Confirmation not reprojected after reload | S07 audited non-blocking | future continuity polish if scenario blocks | reprojection via existing Confirmation — no new semantics |
| V3-F10 / M5-C Journal class/owner questions | P4/Morris | not retired this cycle | STOP if Journal moved into Product truth |
| REAL cancellation | S06 residual | REAL gate | Morris REAL GO |
| P5-S07 INTEGRATED | Morris Git Integration Gate | after Critical Review | PR + merge + post-merge CI |
| HumanDecision.subject sometimes technical | Product writers | cleaner Pilot subjects at HD materialization | not History invention |

## 44. Complete Roadmap diff

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 2aeae5c9..e7ed71a7 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED = **P5-S07 — Project Continuity & Work Representation Completion** · S07 **NOT AUTHORIZED / NOT STARTED** · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 PROJECT CONTINUITY & WORK REPRESENTATION COMPLETION — LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Morris P5-S07 DELIVERY GO = **AUTHORIZED / CONSUMED** · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** (PR **#562** post-S06 documentary truth-sync **MERGED** · CI Studio **#692** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · Work Representation **PASS LOCALLY AT TESTED SCOPE** (Option A — no DeliverableStore) · Journal **P3-CONVERGED AT S07 SCOPE** · History **PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE** (dedicated principal view) · Deliverable≠Artifact≠validation≠Exit Proof **PROVEN AT TESTED SCOPE** · CONV-PL **CLOSED LOCALLY AT TESTED SCOPE** (Product truth before transcript) · PROP-PL **CLOSED LOCALLY AT TESTED SCOPE** (Epistemic reconstruct / honest requalify — no Proposal DB) · Visual **PASS AT S07 TOUCHED SURFACES** (runtime↔Figma) · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next = **ChatGPT Critical Review** → Morris P5-S07 Git Integration Gate if recommended · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED *(true then; superseded by P5-S07 LOCAL CANDIDATE tip; post-S06 documentary truth-sync PR **#562** later MERGED @ `7a664d65…` / CI **#692** — tip self-referential « truth-sync merge NOT AUTHORIZED » was true at tip authorship)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED was **P5-S07** · S07 was **NOT AUTHORIZED / NOT STARTED** at tip authorship · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** *(historical tip wording)* · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 GIT INTEGRATION** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S06 INTEGRATED / POST-MERGE VERIFIED tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **GIT INTEGRATION** · Morris P5-S06 GIT INTEGRATION GATE = **AUTHORIZED / CONSUMED** · ChatGPT Final Critical Re-Review CP02.3 = **PASS** · D-S06-CANCEL-01 remains consumed · CP01/CP02/CP02.1/CP02.2/CP02.3 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · commit/push/PR **AUTHORIZED this gate** · MERGE **NOT AUTHORIZED — separate Morris GO required** · P5-S06 INTEGRATED **NO** until merge + post-merge · FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · Visual **PASS AT S06 SCOPE** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = commit → push → PR → CI → STOP → **MORRIS P5-S06 MERGE GO** if readiness remains PASS · **≠** INTEGRATED · **≠** MERGED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.3 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.3 — LOCAL CANDIDATE — CKC PROVIDER CANCELLATION CLOSURE PASS *(true then; superseded by P5-S06 GIT INTEGRATION tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.3** · Morris CP02.3 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02/CP02.1/CP02.2 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · CKC `provider.complete` in-flight AbortSignal **PROVEN** · OpenAI `complete`→`completeRound`→`responses.create(..., { signal })` **PROVEN** · abort = STOPPED not provider_error · ZERO REAL · P5-S06 FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · P5-S06 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = **ChatGPT Final Critical Re-Review CP02.3** · **≠** INTEGRATED · **≠** S06 Git-complete |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.2 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.2 — LOCAL CANDIDATE / FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS *(true then; superseded by P5-S06 CP02.3 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.2** · Morris CP02.2 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02.1 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · F2 `completeStructured` AbortSignal **PROVEN** · F2 post-analyze / createCycle / proposal / transcript cut-lines **PROVEN** · already-started createCycle **not rolled back** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review CP02.2** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |
```

## 45. Complete P5 doc diff

```diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index f3b924aa..c52dce12 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,19 +5,19 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07**/**P5-S08** remaining |
-| **Pass** | **P5-S06 INTEGRATED / POST-MERGE VERIFIED** · documentary truth-sync PR open · truth-sync merge **NOT AUTHORIZED** |
+| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07 LOCAL CANDIDATE** · **P5-S08** remaining |
+| **Pass** | **P5-S07 LOCAL CANDIDATE** — Project Continuity & Work Representation Completion · Git Integration **NOT AUTHORIZED** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `9f586496f28b824b1a4938d497c148ba0c96596e` (PR **#561** P5-S06 · post-merge CI Studio **#690** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `7a664d65157af9554de4d4da7e76ca0187020020` (PR **#562** post-S06 documentary truth-sync · CI Studio **#692** SUCCESS) · S07 candidate uncommitted on delivery branch |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
-| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · post-S06 truth-sync PR **#562** **MERGED** @ `7a664d65…` / CI **#692** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` — **MERGED / CLEANED UP** |
+| **Branche S07** | `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` — **LOCAL / UNCOMMITTED** |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
@@ -29,6 +29,8 @@
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
 | **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
 | **P5-S06** | **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · STOP debt **CLOSED ON MAIN** · REAL cancellation **NOT PROVEN** |
+| **P5-S07** | **LOCAL CANDIDATE** · Project Continuity **PASS LOCALLY / DETERMINISTIC** · Work Representation **PASS LOCALLY AT TESTED SCOPE** · Journal **P3-CONVERGED AT S07 SCOPE** · History **PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE** · Deliverable/Artifact distinctions **PROVEN AT TESTED SCOPE** · CONV-PL / PROP-PL **CLOSED LOCALLY AT TESTED SCOPE** · Visual **PASS AT S07 TOUCHED SURFACES** · ZERO REAL · P5-S07 INTEGRATED **NO** |
+| **P5-S07 DELIVERY GO** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#561** |
 | **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 CP02** | **AUTHORIZED / CONSUMED** |
@@ -37,12 +39,12 @@
 | **P5-S06 CP02.3** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 GIT INTEGRATION GATE** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 MERGE GO** | **AUTHORIZED / CONSUMED** |
-| **P5 slicing restant** | **S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** · S07 = **NEXT RECOMMENDED / NOT AUTHORIZED** |
+| **P5 slicing restant** | **S08** — **ADOPTED BY MORRIS** · S08 = **NOT STARTED** · S07 = **LOCAL CANDIDATE / Git Integration NOT AUTHORIZED** |
 | **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
-| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
+| **ZERO REAL** | **YES for S07** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S06)** | PR **#561** **MERGED** · post-merge CI **PASS** · delivery branch cleanup **COMPLETE** · documentary truth-sync merge **NOT AUTHORIZED** |
-| **Next** | **ChatGPT review / MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE** · S07 **NOT AUTHORIZED / NOT STARTED** |
+| **Git (S07)** | local branch only · project commit/push/PR/merge **NOT AUTHORIZED** · Review Handoff L3 only |
+| **Next** | **ChatGPT Critical Review** → Morris P5-S07 Git Integration Gate if recommended · S08 **NOT STARTED** |
 | **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
 | **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
 | **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
@@ -50,7 +52,7 @@
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** via PR **#561** / merge `9f586496…` / post-merge CI **#690** SUCCESS. FUNCTIONAL CLOSURE + deterministic cancellation **ON MAIN**. REAL cancellation **NOT PROVEN**. **≠ P5 COMPLETE** · S07 **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S07 = **LOCAL CANDIDATE** (Project Continuity & Work Representation) sur branche delivery · base `7a664d65…` · ZERO REAL · **≠ P5 COMPLETE** · Git Integration **NOT AUTHORIZED** · S08 **NOT STARTED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -73,23 +75,30 @@ P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
 P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
 P5-S05 = INTEGRATED / POST-MERGE VERIFIED (PR #560 · F2 CLOSED ON MAIN · R3 PASS AT TESTED SCOPE)
 P5-S06 = INTEGRATED / POST-MERGE VERIFIED (PR #561 · feature 731fdd72… · merge 9f586496… · CI #690 SUCCESS)
-
-FUNCTIONAL CLOSURE = PASS / INTEGRATED
-VISUAL = PASS AT S06 SCOPE
+P5-S07 = LOCAL CANDIDATE (delivery branch · base 7a664d65… · PR #562 truth-sync MERGED / CI #692)
+         Continuity PASS LOCALLY / DETERMINISTIC
+         Work Representation PASS LOCALLY AT TESTED SCOPE (Option A)
+         Journal P3-CONVERGED AT S07 SCOPE
+         History PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE
+         CONV-PL / PROP-PL CLOSED LOCALLY AT TESTED SCOPE
+         Visual PASS AT S07 TOUCHED SURFACES
+         ZERO REAL = YES
+         P5-S07 INTEGRATED = NO
+         Git Integration = NOT AUTHORIZED
+
+FUNCTIONAL CLOSURE (S06) = PASS / INTEGRATED
+VISUAL (S06) = PASS AT S06 SCOPE
 FULL CANONICAL SEND CANCELLATION = PASS DETERMINISTIC / INTEGRATED
 P5-S06-DEBT-NORA-STOP = CLOSED ON MAIN / POST-MERGE VERIFIED
 REAL cancellation = NOT PROVEN
-ZERO REAL (S06) = YES
+ZERO REAL (S07) = YES
 P5 COMPLETE = NO
 P6 READY = NO
 runtime v3 = NON ADOPTED

-NEXT RECOMMENDED = P5-S07 — Project Continuity & Work Representation Completion
-S07 = NOT AUTHORIZED / NOT STARTED
+NEXT = ChatGPT Critical Review → Morris P5-S07 Git Integration Gate if recommended
 S08 = NOT STARTED
-P5-S06 MERGE GO = AUTHORIZED / CONSUMED
-DOCUMENTARY TRUTH-SYNC MERGE = NOT AUTHORIZED
-NEXT = CHATGPT REVIEW → MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE
+P5-S07 DELIVERY GO = AUTHORIZED / CONSUMED
 ```
 ### 1.2 Hiérarchie d’autorité
```

## 46. Project Git effects
Authorized: local branch + local code/doc/test mods.
NOT AUTHORIZED / NOT DONE: project `git add` for integration, project commit, project push, PR, merge, branch deletion.
Staged = empty. Candidate = local uncommitted.

## 47. Morris decisions required
1. ChatGPT Critical Review of this LOCAL CANDIDATE
2. If PASS: Morris **P5-S07 Git Integration Gate** (distinct) before commit/push/PR
3. No S08 / P5 COMPLETE / P6 / runtime v3 / REAL without distinct GO

## 48. Review Handoff evidence
To be filled after `publish-review-handoff.sh` L3 publish.

## 49. Final Git truth (pre-handoff)
- branch: delivery/...-p5-s07-...
- HEAD commit SHA still base `7a664d65…` (candidate uncommitted)
- origin/main unchanged
- staged empty
- `git diff --check` clean

## 50. Verdict

**READY FOR CHATGPT CRITICAL REVIEW — P5-S07 LOCAL CANDIDATE**

- P5-S07 PROJECT CONTINUITY = **PASS LOCALLY / DETERMINISTIC**
- P5-S07 WORK REPRESENTATION = **PASS LOCALLY AT TESTED SCOPE**
- JOURNAL = **P3-CONVERGED AT S07 SCOPE**
- HISTORY = **PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE**
- DELIVERABLE / ARTIFACT = **SEMANTIC DISTINCTION PROVEN AT TESTED SCOPE**
- CONV-PL = **CLOSED LOCALLY AT TESTED SCOPE**
- PROP-PL = **CLOSED LOCALLY AT TESTED SCOPE**
- VISUAL = **PASS AT S07 TOUCHED SURFACES** (runtime/Figma proof present)
- ZERO REAL = **YES**
- ARCHITECTURE PARALLELISM = **NONE**
- P5-S07 INTEGRATED = **NO**
- Git Integration = **NOT AUTHORIZED**
- P5 COMPLETE = **NO**
- S08 = **NOT STARTED**
- P6 READY = **NO**
- runtime v3 = **NON ADOPTED**
