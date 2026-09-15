/**
 * CORR-PROOF-10 remediation — durable Epistemic Observation marking a
 * pending Proposal decision subject before PresentedOptionSet binding.
 *
 * NOT a HumanDecision, NOT a durable Proposal, NOT a new table.
 * Prevents silent fallback to generic ProjectTrajectory options after
 * process-local ProposalStore loss (restart-before-binding).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

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
    return {
      kind: PENDING_DECISION_SUBJECT_KIND,
      proposalId: v.proposalId,
      projectId: v.projectId,
      subjectDigest: v.subjectDigest,
      lpsId: v.lpsId,
      lpsVersion: v.lpsVersion as number,
      doctrineDigest: v.doctrineDigest,
      status: "pending_binding",
    };
  } catch {
    return null;
  }
}

export type WritePendingDecisionSubjectMarkerInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
  readonly subjectDigest: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
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

export async function resolvePendingDecisionSubjectMarker(
  input: {
    readonly oa: RuntimeOaStack;
    readonly projectId: string;
    readonly proposalId: string;
    readonly reason: "option_set_bound" | "decided" | "amended" | "refused";
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
