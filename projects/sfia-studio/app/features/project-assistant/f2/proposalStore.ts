/**
 * Process-local F2 proposal store (no durable persistence).
 */

import { randomUUID } from "node:crypto";
import type { ProposalDto, F2ContextSnapshot, F2ProposalStatus } from "./types";

const STORE_KEY = "__SFIA_F2_PROPOSAL_STORE__" as const;

type StoreSlot = {
  byId: Map<string, ProposalDto>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byId: new Map() };
  }
  return g[STORE_KEY];
}

export const F2_PROCESS_LOCAL_NOTICE =
  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL.";

export function createProposalId(): string {
  return `prop:f2:${randomUUID()}`;
}

export function saveProposal(proposal: ProposalDto): ProposalDto {
  const frozen = Object.freeze({
    ...proposal,
    outOfScope: Object.freeze([...proposal.outOfScope]) as string[],
    activatedBlocks: Object.freeze([...proposal.activatedBlocks]) as string[],
    sources: Object.freeze([...proposal.sources]) as string[],
    risks: Object.freeze([...proposal.risks]) as string[],
    reservations: Object.freeze([...proposal.reservations]) as string[],
    stopConditions: Object.freeze([...proposal.stopConditions]) as string[],
    contextSnapshot: Object.freeze({ ...proposal.contextSnapshot }),
  }) as ProposalDto;
  getSlot().byId.set(frozen.proposalId, frozen);
  return frozen;
}

export function getProposal(proposalId: string): ProposalDto | null {
  return getSlot().byId.get(proposalId) ?? null;
}

export function updateProposalStatus(
  proposalId: string,
  status: F2ProposalStatus,
  patch: Partial<ProposalDto> = {},
): ProposalDto | null {
  const existing = getProposal(proposalId);
  if (!existing) return null;
  return saveProposal({ ...existing, ...patch, status, proposalId });
}

export function markProposalStale(proposalId: string): ProposalDto | null {
  return updateProposalStatus(proposalId, "STALE");
}

export function contextMatches(
  snapshot: F2ContextSnapshot,
  current: F2ContextSnapshot,
): boolean {
  return (
    snapshot.projectId === current.projectId &&
    snapshot.lpsId === current.lpsId &&
    snapshot.lpsVersion === current.lpsVersion &&
    snapshot.doctrineDigest === current.doctrineDigest
  );
}

/** Test-only reset. */
export function resetF2ProposalStoreForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error("resetF2ProposalStoreForTests only allowed in tests.");
  }
  getSlot().byId.clear();
}
