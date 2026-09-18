/**
 * Checkpoint E resume — durable pursue HumanDecision → PREPARE continuation.
 *
 * After DecisionRef closes a Proposal OptionSet, `readActiveProposalDecisionSubject`
 * correctly returns `none` (subject already decided). Restart must still surface
 * PREPARE when the durable pursue HD + DecisionBasis remain valid and no EC
 * exists for that decision — without ProposalStore or a new HumanDecision.
 *
 * Composed exclusively from existing OA reads (listDecisionHistory,
 * listExecutionContractHistory, readLiveProjectContext). No new persistence.
 */

import {
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import type { HumanDecision } from "@/lib/oa/decision";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
import type { TrajectoryDecisionRecordDto } from "./types";

export type PrepareReadyProposalPursueContinuation =
  | { readonly ok: true; readonly kind: "none" }
  | {
      readonly ok: true;
      readonly kind: "pursue_prepare_ready";
      readonly decision: TrajectoryDecisionRecordDto;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function projectToDecisionDto(
  decision: HumanDecision,
): TrajectoryDecisionRecordDto | null {
  if (decision.status !== "accepted") return null;
  if (decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF) return null;
  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "proposal") return null;
  const proposalId = basis.sourceRef?.trim();
  if (!proposalId || !proposalId.startsWith("prop:")) return null;
  return {
    decisionId: decision.decisionId,
    selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    actorRole: "Pilote",
    authorityClass: "morris",
    statusLabel: "DÉCISION HUMAINE PRISE",
    capturedAt: decision.effectiveAt,
    decisionBasisLinked: true,
    reservesText:
      decision.reservations?.map((r) => r.statement).join("\n") || null,
    proposalId,
  };
}

/**
 * Mirror prepareM3FromDecision CONTEXT_STALE gates that block PREPARE.
 * Missing doctrineDigest on basis is allowed (same as prepare path).
 */
export function isPursueDecisionBasisCurrentForPrepare(input: {
  readonly decision: HumanDecision;
  readonly liveDoctrineDigest: string;
  readonly liveLpsVersion: number;
}): boolean {
  const basis = input.decision.decisionBasis;
  if (!basis) return false;
  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.liveDoctrineDigest
  ) {
    return false;
  }
  if (ctx.lpsVersion > input.liveLpsVersion) {
    return false;
  }
  return true;
}

function decisionHasAssociatedContract(
  decisionId: string,
  contracts: ReadonlyArray<{
    readonly decisionRefs?: readonly string[] | null;
    readonly status: string;
  }>,
): boolean {
  for (const contract of contracts) {
    const refs = contract.decisionRefs ?? [];
    if (!refs.includes(decisionId)) continue;
    // Any associated contract means PREPARE identity may already exist —
    // EC continuity / rematerialize owns the next step.
    return true;
  }
  return false;
}

/**
 * Newest accepted proposal-pursue HD with linked basis, current vs live LPS/
 * doctrine, and no associated ExecutionContract → PREPARE continuation DTO.
 */
export async function readPrepareReadyProposalPursueContinuation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<PrepareReadyProposalPursueContinuation> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      message: "Identifiant de projet invalide — reprise PREPARE refusée.",
    };
  }

  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const decisionsResult =
    await oa.decisionServices.listDecisionHistory.execute({ projectId });
  if (!decisionsResult.ok) {
    return {
      ok: false,
      code: decisionsResult.error.detailCode,
      message:
        decisionsResult.error.message ??
        "Historique des décisions illisible — reprise PREPARE refusée.",
    };
  }

  const contractsResult =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!contractsResult.ok) {
    return {
      ok: false,
      code: contractsResult.error.detailCode,
      message:
        contractsResult.error.message ??
        "Historique des contrats illisible — reprise PREPARE refusée.",
    };
  }

  const ordered = [...decisionsResult.decisions].sort((a, b) =>
    a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
  );

  for (const decision of ordered) {
    if (decision.projectId !== projectId) continue;
    if (
      decisionHasAssociatedContract(decision.decisionId, contractsResult.contracts)
    ) {
      continue;
    }
    if (
      !isPursueDecisionBasisCurrentForPrepare({
        decision,
        liveDoctrineDigest: live.context.doctrineDigest,
        liveLpsVersion: live.context.lpsVersion,
      })
    ) {
      continue;
    }
    const dto = projectToDecisionDto(decision);
    if (!dto) continue;
    return { ok: true, kind: "pursue_prepare_ready", decision: dto };
  }

  return { ok: true, kind: "none" };
}
