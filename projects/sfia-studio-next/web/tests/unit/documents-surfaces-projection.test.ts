import { describe, expect, it } from "vitest";
import {
  documentTurnMayApply,
  focusAfterAvailableConservation,
  formatPilotFacingProvenance,
  pendingCandidateRestoreIsCurrent,
  resolveTravailDocumentPresentation,
  revisionCurrencyFromIdentity,
  revisionCurrencyLabel,
} from "@/components/figma/DocumentSurfaces";
import {
  resolveHistoricalConfirmation,
  resolveReviseTarget,
  type DocumentListItem,
  type DocumentReviseFocus,
} from "@/domains/conversation/document-act";
import {
  DOC_CONFIRM_HISTORICAL_SOURCE,
  DOC_CONSERVE_PROPOSAL,
  DOC_USE_CURRENT_HEAD,
  isConserveProposalTransmit,
  isHistoricalSourceChoiceTransmit,
} from "@/domains/conversation/document-candidate";
import { contentSha256 } from "@/domains/conversation/document-command";

describe("revisionCurrencyLabel", () => {
  it("marks head as Courante and others Historique", () => {
    expect(revisionCurrencyLabel(3, 3)).toBe("Courante");
    expect(revisionCurrencyLabel(2, 3)).toBe("Historique");
    expect(revisionCurrencyLabel(1, null)).toBe("Non vérifiée");
  });
});

describe("documentary focus after conservation", () => {
  const docs: DocumentListItem[] = [
    {
      document: { id: "doc-1", title: "Parcours" },
      latestRevision: {
        id: "rev-2",
        revisionNumber: 2,
        status: "AVAILABLE",
        contentMarkdown: "# V2\n",
      },
    },
  ];
  const stale: DocumentReviseFocus = {
    documentId: "doc-1",
    sourceRevisionId: "rev-1",
    sourceRevisionNumber: 1,
    observedHeadRevisionId: "rev-1",
    observedHeadRevisionNumber: 1,
    pendingCandidateId: "pdoc-old",
    pendingCandidateContentSha256: "abc",
  };

  it("reproduces the stale focus: the next revise still targets the previous source", () => {
    const target = resolveReviseTarget(docs, null, stale);
    expect(target.ok).toBe(true);
    if (!target.ok) return;
    expect(target.baseRevisionId).toBe("rev-1");
  });

  it("rebases source and observed head onto the revision D4 just wrote", () => {
    const next = focusAfterAvailableConservation(stale, {
      status: "AVAILABLE",
      documentId: "doc-1",
      revisionId: "rev-2",
      revisionNumber: 2,
    });
    expect(next.rebased).toBe(true);
    expect(next.focus?.sourceRevisionId).toBe("rev-2");
    expect(next.focus?.observedHeadRevisionId).toBe("rev-2");
    expect(next.focus?.pendingCandidateId).toBeUndefined();
    const target = resolveReviseTarget(docs, null, next.focus);
    expect(target.ok).toBe(true);
    if (!target.ok) return;
    expect(target.baseRevisionId).toBe("rev-2");
  });

  it("does not rebase another document or a save without a revision id", () => {
    expect(
      focusAfterAvailableConservation(stale, {
        status: "AVAILABLE",
        documentId: "doc-other",
        revisionId: "rev-9",
        revisionNumber: 9,
      }).rebased,
    ).toBe(false);
    expect(
      focusAfterAvailableConservation(stale, {
        status: "AVAILABLE",
        documentId: "doc-1",
      }).rebased,
    ).toBe(false);
    expect(
      focusAfterAvailableConservation(stale, {
        status: "CONFLICT",
        documentId: "doc-1",
        revisionId: "rev-2",
      }).rebased,
    ).toBe(false);
  });
});

describe("viewer currency is not inferred from exact resolution", () => {
  it("treats an exact reference of the current head as Courante", () => {
    const view = resolveTravailDocumentPresentation({
      proposalActive: false,
      revisionId: "rev-2",
      revisionNumber: 2,
      headRevisionId: "rev-2",
      headRevisionNumber: 2,
      knownHeadRevisionId: "rev-2",
    });
    expect(view.currency).toBe("Courante");
    expect(view.banner).toBeNull();
    expect(
      revisionCurrencyFromIdentity({
        revisionId: "rev-2",
        revisionNumber: 2,
        knownHeadRevisionId: "rev-2",
        headRevisionId: "rev-3",
        headRevisionNumber: 3,
      }),
    ).toBe("Historique");
  });

  it("does not call an unknown head historical", () => {
    const view = resolveTravailDocumentPresentation({
      proposalActive: false,
      revisionId: "rev-2",
      revisionNumber: 2,
    });
    expect(view.currency).toBe("Non vérifiée");
    expect(view.banner).toBeNull();
  });

  it("shows the candidate body as a proposal and keeps it distinct from another version", () => {
    const candidate = "# V2 candidate\n";
    const shown = resolveTravailDocumentPresentation({
      proposalActive: true,
      proposalCandidateId: "cand-2",
      viewerProposalCandidateId: "cand-2",
      proposalDocumentId: "doc-1",
      viewerDocumentId: "doc-1",
      proposalMarkdown: candidate,
      viewerMarkdown: candidate,
      revisionId: null,
    });
    expect(shown.banner).toBe("proposal");
    expect(shown.currency).toBe("Proposition");
    const sameTextRevision = resolveTravailDocumentPresentation({
      proposalActive: true,
      proposalCandidateId: "cand-2",
      viewerProposalCandidateId: null,
      proposalDocumentId: "doc-1",
      viewerDocumentId: "doc-1",
      proposalMarkdown: candidate,
      viewerMarkdown: candidate,
      revisionId: "rev-2",
      revisionNumber: 2,
      headRevisionId: "rev-2",
      headRevisionNumber: 2,
      knownHeadRevisionId: "rev-2",
    });
    expect(sameTextRevision.banner).toBe("other-version");
    expect(sameTextRevision.currency).toBe("Courante");
    const other = resolveTravailDocumentPresentation({
      proposalActive: true,
      proposalMarkdown: candidate,
      viewerMarkdown: "# V1\n",
      revisionId: "rev-1",
      headRevisionId: "rev-1",
      revisionNumber: 1,
      headRevisionNumber: 1,
    });
    expect(other.banner).toBe("other-version");
    expect(other.currency).toBe("Courante");
  });
});

describe("document turn scope and candidate restore", () => {
  const base = {
    turnGen: 2,
    latestTurnGen: 2,
    focusDocumentAtSend: "doc-a",
    focusDocumentNow: "doc-a",
    viewerClosedByPilot: false,
    viewerDocumentId: "doc-a",
    effectDocumentId: "doc-a",
  };

  it("does not move document B when a late result belongs to document A", () => {
    const late = documentTurnMayApply({
      ...base,
      focusDocumentNow: "doc-b",
      viewerDocumentId: "doc-b",
    });
    expect(late.focus).toBe(false);
    expect(late.viewer).toBe(false);
  });

  it("does not reopen a viewer the pilot closed", () => {
    const closed = documentTurnMayApply({ ...base, viewerClosedByPilot: true });
    expect(closed.focus).toBe(true);
    expect(closed.viewer).toBe(false);
  });

  it("does not apply an older document result after a newer turn", () => {
    const older = documentTurnMayApply({ ...base, turnGen: 1, latestTurnGen: 2 });
    expect(older.focus).toBe(false);
    expect(older.viewer).toBe(false);
  });

  it("does not restore a candidate over a newer selection", () => {
    expect(
      pendingCandidateRestoreIsCurrent({
        projectIdAtStart: "proj-1",
        projectIdNow: "proj-1",
        documentId: "doc-a",
        candidateId: "cand-a",
        focusDocumentId: "doc-b",
        focusCandidateId: "cand-a",
        requestSeqAtStart: 4,
        requestSeqNow: 4,
        candidateDocumentId: "doc-a",
        candidateMarkdown: "# A",
      }),
    ).toBe(false);
    expect(
      pendingCandidateRestoreIsCurrent({
        projectIdAtStart: "proj-1",
        projectIdNow: "proj-1",
        documentId: "doc-a",
        candidateId: "cand-a",
        focusDocumentId: "doc-a",
        focusCandidateId: "cand-a",
        requestSeqAtStart: 4,
        requestSeqNow: 5,
        candidateDocumentId: "doc-a",
        candidateMarkdown: "# A",
      }),
    ).toBe(false);
  });
});

describe("R1/F1 resolveReviseTarget — client markdown never authoritative", () => {
  const docs: DocumentListItem[] = [
    {
      document: { id: "doc-1", title: "Parcours" },
      latestRevision: {
        id: "rev-3",
        revisionNumber: 3,
        status: "AVAILABLE",
        contentMarkdown: "# V3 canonical from list\n",
      },
    },
  ];

  it("ignores forged sourceContentMarkdown for historical focus", () => {
    const focus: DocumentReviseFocus = {
      documentId: "doc-1",
      sourceRevisionId: "rev-2",
      sourceRevisionNumber: 2,
      sourceContentMarkdown: "# FORGED CLIENT MARKDOWN — must not be used\n",
      observedHeadRevisionId: "rev-3",
      observedHeadRevisionNumber: 3,
      confirmedHistoricalSource: false,
    };
    const target = resolveReviseTarget(docs, null, focus);
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseRevisionId).toBe("rev-2");
    expect(target.baseContent).toBe("");
    expect(target.baseContent).not.toContain("FORGED");
  });

  it("falls back to hint/latest when no focus", () => {
    const target = resolveReviseTarget(docs, "doc-1");
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseRevisionId).toBe("rev-3");
  });
});

describe("F2 resolveHistoricalConfirmation — server authorization required", () => {
  const baseFocus: DocumentReviseFocus = {
    documentId: "doc-A",
    sourceRevisionId: "rev-2",
    observedHeadRevisionId: "rev-3",
    confirmedHistoricalSource: false,
  };

  it("client structured claim alone is insufficient", () => {
    const r = resolveHistoricalConfirmation({
      focus: {
        ...baseFocus,
        historicalConfirmation: {
          documentId: "doc-A",
          sourceRevisionId: "rev-2",
          observedHeadRevisionId: "rev-3",
          choice: "USE_SOURCE",
        },
      },
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("CLIENT_CLAIM_INSUFFICIENT");
  });

  it("client confirmedHistoricalSource bool alone is insufficient", () => {
    const r = resolveHistoricalConfirmation({
      focus: { ...baseFocus, confirmedHistoricalSource: true },
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("CLIENT_CLAIM_INSUFFICIENT");
  });

  it("server authorization USE_SOURCE with matching identities → confirmed", () => {
    const r = resolveHistoricalConfirmation({
      focus: { ...baseFocus, historicalAuthorizationId: "hauth_1" },
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
      serverAuthorization: {
        id: "hauth_1",
        documentId: "doc-A",
        sourceRevisionId: "rev-2",
        observedHeadRevisionId: "rev-3",
        choice: "USE_SOURCE",
      },
    });
    expect(r.confirmed).toBe(true);
    expect(r.reason).toBe("CONFIRMED_SERVER");
  });

  it("server authorization for document A unusable for document B", () => {
    const r = resolveHistoricalConfirmation({
      focus: baseFocus,
      documentId: "doc-B",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
      serverAuthorization: {
        id: "hauth_1",
        documentId: "doc-A",
        sourceRevisionId: "rev-2",
        observedHeadRevisionId: "rev-3",
        choice: "USE_SOURCE",
      },
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("IDENTITY_MISMATCH");
  });

  it("head moved V3→V4 → HEAD_MOVED", () => {
    const r = resolveHistoricalConfirmation({
      focus: baseFocus,
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-4",
      serverAuthorization: {
        id: "hauth_1",
        documentId: "doc-A",
        sourceRevisionId: "rev-2",
        observedHeadRevisionId: "rev-3",
        choice: "USE_SOURCE",
      },
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("HEAD_MOVED");
  });

  it("exact transmit texts are not freeform lexical", () => {
    expect(isHistoricalSourceChoiceTransmit(DOC_CONFIRM_HISTORICAL_SOURCE)).toBe("USE_SOURCE");
    expect(isHistoricalSourceChoiceTransmit(DOC_USE_CURRENT_HEAD)).toBe("USE_HEAD");
    expect(isHistoricalSourceChoiceTransmit("Oui, je confirme la version historique")).toBeNull();
    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
  });
});

describe("F1 candidate content hash identity", () => {
  it("same title+body → stable sha; mutation changes sha", () => {
    const a = contentSha256("Titre", "# P\n\ncorps\n");
    const b = contentSha256("Titre", "# P\n\ncorps\n");
    const c = contentSha256("Titre", "# P\n\ncorps modifié\n");
    expect(a).toBe(b);
    expect(a).not.toBe(c);
  });
});

describe("R4/F3 formatPilotFacingProvenance", () => {
  it("sealed Nora binding → Production Nora (+ project)", () => {
    expect(
      formatPilotFacingProvenance(
        JSON.stringify({
          documentCommandBinding: true,
          action: "REVISE",
          correlationKey: "secret-key",
          commandId: "cmd_x",
        }),
        { projectName: "CampusNova" },
      ),
    ).toBe("Production Nora  ·  CampusNova");
  });

  it("empty / absent → Provenance non renseignée", () => {
    expect(formatPilotFacingProvenance(null)).toBe("Provenance non renseignée");
    expect(formatPilotFacingProvenance("{}")).toBe("Provenance non renseignée");
  });
});
