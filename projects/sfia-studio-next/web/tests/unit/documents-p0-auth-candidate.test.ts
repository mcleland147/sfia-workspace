import { describe, expect, it } from "vitest";
import {
  assertHistoricalAuthBoundToCandidate,
  DOC_CONSERVE_PROPOSAL,
  isConserveProposalTransmit,
  type HistoricalSourceAuthorization,
  type PendingDocumentCandidate,
} from "@/domains/conversation/document-candidate";

function auth(overrides: Partial<HistoricalSourceAuthorization> = {}): HistoricalSourceAuthorization {
  return {
    id: "hauth_1",
    turnCommandId: "cmd_1",
    preparationId: "prep_1",
    pilotId: "pilot_1",
    documentId: "doc_1",
    sourceRevisionId: "rev_v2",
    observedHeadRevisionId: "rev_v3",
    choice: "USE_SOURCE",
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

function candidate(
  overrides: Partial<PendingDocumentCandidate> = {},
): PendingDocumentCandidate {
  return {
    id: "pdoc_1",
    turnCommandId: "cmd_1",
    preparationId: "prep_1",
    pilotId: "pilot_1",
    documentId: "doc_1",
    sourceRevisionId: "rev_v2",
    observedHeadRevisionId: "rev_v3",
    title: "Parcours",
    contentMarkdown: "# Parcours\n\nP\n",
    contentSha256: "a".repeat(64),
    historicalAuthorizationId: "hauth_1",
    status: "PENDING",
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

describe("P0-A conserve transmit gate", () => {
  it("exact conserve transmit only — not freeform", () => {
    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
    expect(isConserveProposalTransmit("oui conserve")).toBe(false);
    expect(isConserveProposalTransmit("Conserver comme nouvelle version")).toBe(false);
  });
});

describe("P0-B assertHistoricalAuthBoundToCandidate", () => {
  it("B1 — historical + matching hauth → ok", () => {
    const r = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: true,
      candidate: candidate(),
      authorization: auth(),
      actualHeadRevisionId: "rev_v3",
    });
    expect(r).toEqual({ ok: true });
  });

  it("B2 — other hauth id → mismatch", () => {
    const r = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: true,
      candidate: candidate({ historicalAuthorizationId: "hauth_other" }),
      authorization: auth(),
      actualHeadRevisionId: "rev_v3",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("HISTORICAL_AUTH_CANDIDATE_MISMATCH");
  });

  it("B3 — other document on auth → context mismatch", () => {
    const r = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: true,
      candidate: candidate(),
      authorization: auth({ documentId: "doc_other" }),
      actualHeadRevisionId: "rev_v3",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("HISTORICAL_AUTH_CONTEXT_MISMATCH");
  });

  it("B5 — head moved → HISTORICAL_HEAD_MOVED", () => {
    const r = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: true,
      candidate: candidate(),
      authorization: auth(),
      actualHeadRevisionId: "rev_v4",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("HISTORICAL_HEAD_MOVED");
  });

  it("B6 — hauth absent → required", () => {
    const r = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: true,
      candidate: candidate({ historicalAuthorizationId: null }),
      authorization: null,
      actualHeadRevisionId: "rev_v3",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("CANDIDATE_HISTORICAL_AUTH_REQUIRED");
  });

  it("B7 — current head source → ok without hauth", () => {
    const r = assertHistoricalAuthBoundToCandidate({
      sourceIsHistorical: false,
      candidate: candidate({ historicalAuthorizationId: null }),
      authorization: null,
      actualHeadRevisionId: "rev_v3",
    });
    expect(r).toEqual({ ok: true });
  });
});
