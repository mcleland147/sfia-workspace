/**
 * CORR-PROOF-10 remediation — durable Epistemic Observation marking a
 * pending Proposal decision subject before PresentedOptionSet binding.
 *
 * CORR-PROOF-11 — explicit reinstruction supersession (atomic resolve+write).
 *
 * NOT a HumanDecision, NOT a durable Proposal, NOT a new table.
 * Prevents silent fallback to generic ProjectTrajectory options after
 * process-local ProposalStore loss (restart-before-binding).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ProposalDto } from "../f2/types";
import { saveProposal, getProposal } from "../f2/proposalStore";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";
import {
  isProposalSubjectPresentedSet,
  parsePresentedOptionSetStatement,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "./proposalSubjectIntegrity";

export const PENDING_DECISION_SUBJECT_KIND =
  "w2_pending_decision_subject" as const;

export type PendingDecisionSubjectMarker = {
  readonly kind: typeof PENDING_DECISION_SUBJECT_KIND;
  readonly proposalId: string;
  readonly projectId: string;
  /** Digest of full sealed execution basis at marker write time. */
  readonly subjectDigest: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly status: "pending_binding";
  /**
   * JOURNEY-INTEGRITY — reconstructible Proposal snapshot inside existing
   * Epistemic Observation (no new table). Optional for legacy markers.
   */
  readonly proposalSnapshot?: ProposalDto;
};

export function pendingDecisionSubjectObservationId(
  projectId: string,
  proposalId: string,
): string {
  const slug = `${projectId}:${proposalId}`.replace(/[^a-zA-Z0-9:_-]/g, "-");
  return `epi:pending-subject:${slug}`.slice(0, 180);
}

export function serializePendingDecisionSubjectMarker(
  marker: PendingDecisionSubjectMarker,
): string {
  return JSON.stringify(marker);
}

export function parsePendingDecisionSubjectMarker(
  statement: string,
): PendingDecisionSubjectMarker | null {
  try {
    const parsed: unknown = JSON.parse(statement);
    if (!parsed || typeof parsed !== "object") return null;
    const v = parsed as Record<string, unknown>;
    if (v.kind !== PENDING_DECISION_SUBJECT_KIND) return null;
    if (typeof v.proposalId !== "string" || !v.proposalId.trim()) return null;
    if (typeof v.projectId !== "string" || !v.projectId.trim()) return null;
    if (typeof v.subjectDigest !== "string" || !v.subjectDigest.trim()) {
      return null;
    }
    if (typeof v.lpsId !== "string") return null;
    if (!Number.isInteger(v.lpsVersion)) return null;
    if (typeof v.doctrineDigest !== "string") return null;
    if (v.status !== "pending_binding") return null;
    const snapshot =
      v.proposalSnapshot &&
      typeof v.proposalSnapshot === "object" &&
      (v.proposalSnapshot as ProposalDto).proposalId === v.proposalId
        ? (v.proposalSnapshot as ProposalDto)
        : undefined;
    return {
      kind: PENDING_DECISION_SUBJECT_KIND,
      proposalId: v.proposalId,
      projectId: v.projectId,
      subjectDigest: v.subjectDigest,
      lpsId: v.lpsId,
      lpsVersion: v.lpsVersion as number,
      doctrineDigest: v.doctrineDigest,
      status: "pending_binding",
      ...(snapshot ? { proposalSnapshot: snapshot } : {}),
    };
  } catch {
    return null;
  }
}

/**
 * Live Product truth a snapshot must still agree with before it may be trusted
 * as a reconstructible decision subject.
 */
export type SnapshotHydrationLiveContext = {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  closedProposalIds?: ReadonlySet<string>;
};

/**
 * JOURNEY-INTEGRITY — a snapshot is admissible only when it is internally
 * coherent with its marker, still decidable, AND still matches live Product
 * truth. Any mismatch means requalification, never silent repair.
 */
export function isValidProposalSnapshotForHydration(
  marker: PendingDecisionSubjectMarker,
  live: SnapshotHydrationLiveContext,
): boolean {
  const snapshot = marker.proposalSnapshot;
  if (!snapshot) return false;
  if (snapshot.proposalId !== marker.proposalId) return false;

  const snapshotContext = snapshot.contextSnapshot;
  if (!snapshotContext) return false;
  if (snapshotContext.projectId !== marker.projectId) return false;
  if (snapshotContext.lpsId !== marker.lpsId) return false;
  if (snapshotContext.lpsVersion !== marker.lpsVersion) return false;
  if (snapshotContext.doctrineDigest !== marker.doctrineDigest) return false;

  if (snapshot.status !== "DECISION_REQUIRED") return false;
  if (snapshot.morrisGateRequired !== true) return false;

  if (live.projectId !== marker.projectId) return false;
  if (live.lpsId !== marker.lpsId) return false;
  if (live.lpsVersion !== marker.lpsVersion) return false;
  if (live.doctrineDigest !== marker.doctrineDigest) return false;

  if (live.closedProposalIds?.has(marker.proposalId)) return false;

  const recomputed = computeProposalSubjectDigest(
    sealProposalExecutionBasis(snapshot),
    snapshot.proposalId,
  );
  return recomputed === marker.subjectDigest;
}

/**
 * Hydrate process-local ProposalStore from durable marker snapshots when
 * missing. Live context is mandatory: continuity is only honest while the
 * snapshot still describes the current Project/LPS/doctrine truth.
 */
export function hydrateProposalsFromPendingMarkers(
  markers: readonly PendingDecisionSubjectMarker[],
  live: SnapshotHydrationLiveContext,
): readonly string[] {
  const hydrated: string[] = [];
  for (const marker of markers) {
    if (getProposal(marker.proposalId)) continue;
    if (!isValidProposalSnapshotForHydration(marker, live)) continue;
    saveProposal(marker.proposalSnapshot!);
    hydrated.push(marker.proposalId);
  }
  return hydrated;
}

export type WritePendingDecisionSubjectMarkerInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
  readonly subjectDigest: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly proposal?: ProposalDto;
  readonly correlationId?: string;
};

export async function writePendingDecisionSubjectMarker(
  input: WritePendingDecisionSubjectMarkerInput,
): Promise<
  | { readonly ok: true; readonly epistemicItemId: string }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const epistemicItemId = pendingDecisionSubjectObservationId(
    input.projectId,
    input.proposalId,
  );
  const marker: PendingDecisionSubjectMarker = {
    kind: PENDING_DECISION_SUBJECT_KIND,
    proposalId: input.proposalId,
    projectId: input.projectId,
    subjectDigest: input.subjectDigest,
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    doctrineDigest: input.doctrineDigest,
    status: "pending_binding",
    ...(input.proposal && input.proposal.proposalId === input.proposalId
      ? { proposalSnapshot: input.proposal }
      : {}),
  };
  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId,
        type: "Observation",
        statement: serializePendingDecisionSubjectMarker(marker),
        status: "active",
        source: input.proposalId,
        relatedObjects: [input.projectId, input.proposalId, epistemicItemId],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId:
      input.correlationId ?? `cor:pending-subject:${input.proposalId}`,
  });
  if (!written.ok) {
    return {
      ok: false,
      code: written.error.detailCode,
      message: `Écriture marqueur pending decision subject échouée (${written.error.detailCode}).`,
    };
  }
  return { ok: true, epistemicItemId };
}

export type ListPendingDecisionSubjectMarkersResult =
  | {
      readonly ok: true;
      readonly markers: readonly PendingDecisionSubjectMarker[];
    }
  | {
      readonly ok: false;
      readonly code: "EPISTEMIC_READ_FAILED";
      readonly message: string;
    };

/**
 * READ FAILURE ≠ EMPTY STATE.
 * Callers must propagate failure — never treat Epistemic errors as "no subject".
 */
export async function listActivePendingDecisionSubjectMarkers(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ListPendingDecisionSubjectMarkersResult> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de lire les marqueurs pending decision subject. Aucun fallback trajectoire générique.",
    };
  }
  const out: PendingDecisionSubjectMarker[] = [];
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePendingDecisionSubjectMarker(item.statement);
    if (!parsed) continue;
    if (parsed.projectId !== projectId) continue;
    out.push(parsed);
  }
  return { ok: true, markers: out };
}

export type PendingDecisionSubjectResolveReason =
  | "option_set_bound"
  | "decided"
  | "amended"
  | "refused"
  | "superseded_by_reinstruction";

export async function resolvePendingDecisionSubjectMarker(
  input: {
    readonly oa: RuntimeOaStack;
    readonly projectId: string;
    readonly proposalId: string;
    readonly reason: PendingDecisionSubjectResolveReason;
    readonly correlationId?: string;
  },
): Promise<
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const epistemicItemId = pendingDecisionSubjectObservationId(
    input.projectId,
    input.proposalId,
  );
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) {
    return { ok: true }; // nothing to resolve
  }
  const existing = epistemic.state.items.find(
    (i) => i.epistemicItemId === epistemicItemId,
  );
  if (!existing || existing.status !== "active") {
    return { ok: true };
  }
  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId,
        type: "Observation",
        statement: `${existing.statement}\n<!-- resolved:${input.reason} -->`,
        status: "resolved",
        source: existing.source,
        relatedObjects: [
          ...(existing.relatedObjects ?? []),
          `resolved:${input.reason}`,
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId:
      input.correlationId ??
      `cor:pending-subject-resolve:${input.proposalId}:${input.reason}`,
  });
  if (!written.ok) {
    return {
      ok: false,
      code: written.error.detailCode,
      message: `Résolution marqueur pending subject échouée (${written.error.detailCode}).`,
    };
  }
  return { ok: true };
}

export type ReplacePendingDecisionSubjectForExplicitReinstructionInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly oldProposalId: string;
  readonly newProposalId: string;
  readonly subjectDigest: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly proposal?: ProposalDto;
  readonly correlationId?: string;
};

/**
 * CORR-PROOF-11 — atomically supersede one effective pending marker with a new
 * pending subject for explicit Nora reinstruction. Fail closed; never clears
 * all pendings blindly; never supersedes when a bound awaiting OptionSet exists.
 */
export async function replacePendingDecisionSubjectForExplicitReinstruction(
  input: ReplacePendingDecisionSubjectForExplicitReinstructionInput,
): Promise<
  | { readonly ok: true; readonly epistemicItemId: string }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const oldProposalId = input.oldProposalId.trim();
  const newProposalId = input.newProposalId.trim();
  if (!oldProposalId || !newProposalId || oldProposalId === newProposalId) {
    return {
      ok: false,
      code: "INVALID_REINSTRUCTION_SUBJECT",
      message:
        "Réinstruction explicite invalide — l'ancienne et la nouvelle proposition doivent être distinctes.",
    };
  }

  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — supersession de sujet pending refusée. Aucune mutation.",
    };
  }

  // Fail closed when a bound Proposal PresentedOptionSet still awaits HD.
  const decidedRefs = new Set<string>();
  for (const item of epistemic.state.items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    for (const rel of item.relatedObjects ?? []) {
      if (rel.startsWith("optset:")) decidedRefs.add(rel);
    }
  }
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (!isProposalSubjectPresentedSet(parsed)) continue;
    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    return {
      ok: false,
      code: "BOUND_PROPOSAL_SUBJECT_BLOCKS_REINSTRUCTION",
      message:
        "Un jeu d'options Proposal est déjà en attente de décision — supersession silencieuse refusée.",
    };
  }

  const closedProposalIds = new Set<string>();
  for (const item of epistemic.state.items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    const related = item.relatedObjects ?? [];
    const hasOptionSet = related.some((r) => r.startsWith("optset:"));
    if (!hasOptionSet) continue;
    for (const rel of related) {
      if (rel.startsWith("prop:")) closedProposalIds.add(rel);
    }
  }

  const activePending = await listActivePendingDecisionSubjectMarkers(
    input.oa,
    input.projectId,
  );
  if (!activePending.ok) {
    return {
      ok: false,
      code: activePending.code,
      message: activePending.message,
    };
  }
  const effective = activePending.markers.filter(
    (m) => !closedProposalIds.has(m.proposalId),
  );
  // Defence in depth: multi-pending is AMBIGUOUS even if a specific oldId is supplied.
  if (effective.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_PENDING_REINSTRUCTION",
      message: pilotAmbiguousPendingMessage(),
    };
  }
  const oldMarker = effective.find((m) => m.proposalId === oldProposalId);
  if (!oldMarker) {
    return {
      ok: false,
      code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
      message:
        "La proposition à remplacer n'est pas un sujet pending effectif pour ce projet.",
    };
  }

  const oldEpistemicItemId = pendingDecisionSubjectObservationId(
    input.projectId,
    oldProposalId,
  );
  const newEpistemicItemId = pendingDecisionSubjectObservationId(
    input.projectId,
    newProposalId,
  );
  const existingOld = epistemic.state.items.find(
    (i) => i.epistemicItemId === oldEpistemicItemId,
  );
  if (!existingOld || existingOld.status !== "active") {
    return {
      ok: false,
      code: "REINSTRUCTION_SUBJECT_NOT_ACTIVE",
      message:
        "Marqueur pending à superséder introuvable ou déjà clos — aucune mutation.",
    };
  }

  const reason = "superseded_by_reinstruction" as const;
  const newMarker: PendingDecisionSubjectMarker = {
    kind: PENDING_DECISION_SUBJECT_KIND,
    proposalId: newProposalId,
    projectId: input.projectId,
    subjectDigest: input.subjectDigest,
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    doctrineDigest: input.doctrineDigest,
    status: "pending_binding",
    ...(input.proposal && input.proposal.proposalId === newProposalId
      ? { proposalSnapshot: input.proposal }
      : {}),
  };

  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId: oldEpistemicItemId,
        type: "Observation",
        statement: `${existingOld.statement}\n<!-- resolved:${reason} -->`,
        status: "resolved",
        source: existingOld.source,
        relatedObjects: [
          ...(existingOld.relatedObjects ?? []),
          `resolved:${reason}`,
          `superseded_by:${newProposalId}`,
        ],
      },
      {
        epistemicItemId: newEpistemicItemId,
        type: "Observation",
        statement: serializePendingDecisionSubjectMarker(newMarker),
        status: "active",
        source: newProposalId,
        relatedObjects: [
          input.projectId,
          newProposalId,
          newEpistemicItemId,
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId:
      input.correlationId ??
      `cor:pending-subject-reinstruction:${oldProposalId}:${newProposalId}`,
  });
  if (!written.ok) {
    return {
      ok: false,
      code: written.error.detailCode,
      message: `Supersession pending decision subject échouée (${written.error.detailCode}).`,
    };
  }
  return { ok: true, epistemicItemId: newEpistemicItemId };
}
