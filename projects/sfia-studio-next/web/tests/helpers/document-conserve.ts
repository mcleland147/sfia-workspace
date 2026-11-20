/**
 * Ensemble 06 — conversational REVISE is proposal → explicit conserve → D4 AVAILABLE.
 * Shared fixture for PG tests that previously assumed implicit write on the revise turn.
 */
import { expect } from "vitest";
import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";
import { postUserMessageAndNora } from "@/domains/conversation/service";

type TurnOpts = NonNullable<Parameters<typeof postUserMessageAndNora>[3]>;
type TurnResult = Awaited<ReturnType<typeof postUserMessageAndNora>>;

/** Local noraTurn wrappers may add `fixture`; keep typing structural and permissive. */
type NoraTurnFn = (
  pilotId: string,
  preparationId: string,
  text: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  opts?: TurnOpts & Record<string, any>,
) => Promise<TurnResult>;

export async function proposeThenConserveRevise(
  noraTurn: NoraTurnFn,
  pilotId: string,
  preparationId: string,
  reviseText: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  opts?: TurnOpts & Record<string, any>,
): Promise<{ proposed: TurnResult; conserved: TurnResult }> {
  const proposed = await noraTurn(pilotId, preparationId, reviseText, opts);
  expect(proposed.documentSave?.status).toBe("NOT_EXECUTED");
  expect(proposed.documentSave?.reason).toBe("PROPOSAL_PENDING_CONSERVATION");
  expect(proposed.documentSave?.act).toBe("REVISE");
  const cand = proposed.pendingDocumentCandidate;
  expect(cand?.candidateId).toBeTruthy();
  expect(cand?.documentId).toBeTruthy();
  if (!cand?.candidateId || !cand.documentId) {
    throw new Error("expected pending document candidate after REVISE proposal");
  }

  const conserved = await noraTurn(pilotId, preparationId, DOC_CONSERVE_PROPOSAL, {
    documentFocus: {
      documentId: cand.documentId,
      sourceRevisionId: cand.sourceRevisionId,
      observedHeadRevisionId: cand.observedHeadRevisionId,
      conserveProposal: true,
      pendingCandidateId: cand.candidateId,
      pendingCandidateContentSha256: cand.contentSha256,
    },
  });
  return { proposed, conserved };
}
