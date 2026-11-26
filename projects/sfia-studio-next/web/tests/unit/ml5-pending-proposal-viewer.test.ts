import { describe, expect, it } from "vitest";

/**
 * Discriminant for InterventionTrack CAS D:
 * Candidate badge must not activate on V1 markdown.
 * Projection must not require a prior documentFocusRef to show candidate body.
 */
function projectPendingCandidate(input: {
  candidateId: string;
  contentSha256: string;
  documentId: string;
  title: string;
  contentMarkdown: string;
  revisionNumberHint: number | null;
  priorFocus: null | { documentId: string };
}) {
  if (!input.contentMarkdown.trim()) {
    return { pending: null as null, viewerMarkdown: null as string | null, banner: null as string | null };
  }
  const pending = {
    candidateId: input.candidateId,
    contentSha256: input.contentSha256,
    documentId: input.documentId,
    title: input.title,
    contentMarkdown: input.contentMarkdown,
    revisionNumberHint: input.revisionNumberHint,
  };
  // Always project candidate body — focus optional.
  const viewerMarkdown = pending.contentMarkdown;
  const banner =
    pending && viewerMarkdown === pending.contentMarkdown ? ("proposal" as const) : null;
  void input.priorFocus; // intentionally unused — no gate
  return { pending, viewerMarkdown, banner };
}

describe("ML5 pending proposal viewer coherence", () => {
  const candidateBody = [
    "# InterventionTrack — Conception fonctionnelle V1",
    "",
    "| **RM-02** | Le titre, la description et le lieu d’intervention sont obligatoires. |",
  ].join("\n");
  const v1Body = [
    "# InterventionTrack — Conception fonctionnelle V1",
    "",
    "| **RM-02** | Le titre et la description sont obligatoires. |",
  ].join("\n");

  it("shows candidate markdown without prior document focus", () => {
    const r = projectPendingCandidate({
      candidateId: "pdoc_test",
      contentSha256: "abc",
      documentId: "doc_test",
      title: "InterventionTrack — Conception fonctionnelle V1",
      contentMarkdown: candidateBody,
      revisionNumberHint: 2,
      priorFocus: null,
    });
    expect(r.pending).not.toBeNull();
    expect(r.viewerMarkdown).toBe(candidateBody);
    expect(r.viewerMarkdown).toContain("lieu d’intervention");
    expect(r.banner).toBe("proposal");
  });

  it("does not mark Candidate when viewer still shows V1", () => {
    const pending = {
      candidateId: "pdoc_test",
      contentMarkdown: candidateBody,
    };
    const viewerMarkdown = v1Body; // stale
    const banner =
      pending && viewerMarkdown === pending.contentMarkdown ? "proposal" : null;
    expect(banner).toBeNull();
    expect(viewerMarkdown).not.toContain("lieu d’intervention");
  });
});
