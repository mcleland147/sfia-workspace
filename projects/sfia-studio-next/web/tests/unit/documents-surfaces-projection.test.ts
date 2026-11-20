import { describe, expect, it } from "vitest";
import {
  formatPilotFacingProvenance,
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
    expect(revisionCurrencyLabel(1, null)).toBe("Historique");
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
