import { describe, expect, it } from "vitest";

/**
 * Mirror of mandate D4 ref parsing — keep in sync with mandate-applicability.ts.
 * Full PG ownership check is covered by director prepare after rebuild.
 */
function parseD4Ref(ref: string): {
  documentId: string | null;
  revisionId: string | null;
  ok: boolean;
} {
  let documentId: string | null = null;
  let revisionId: string | null = null;
  let stripped = ref.trim().replace(/^d4:/i, "").trim();
  const slashRev = stripped.match(
    /^(?:document:)?(doc_[A-Za-z0-9-]+)\/(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
  );
  const atRev = stripped.match(
    /^(?:document:)?(doc_[A-Za-z0-9-]+)@(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
  );
  if (slashRev) {
    documentId = slashRev[1];
    revisionId = slashRev[2];
  } else if (atRev) {
    documentId = atRev[1];
    revisionId = atRev[2];
  } else {
    stripped = stripped
      .replace(/^document:/i, "")
      .replace(/^revision:/i, "")
      .trim();
    if (stripped.startsWith("drev_") || stripped.startsWith("rev_")) {
      revisionId = stripped;
    } else if (stripped.startsWith("doc_")) {
      documentId = stripped.split(/[/@]/)[0] || stripped;
    } else {
      return { documentId: null, revisionId: null, ok: false };
    }
  }
  return { documentId, revisionId, ok: Boolean(documentId || revisionId) };
}

describe("C24 D4 ref parse (journal slash form)", () => {
  it("parses document:doc_/revision:drev_", () => {
    const r = parseD4Ref(
      "document:doc_76b7500a-cd19-49cb-ad88-a4988daf9eb2/revision:drev_4e27edfa-755d-40aa-b111-222233334444",
    );
    expect(r.ok).toBe(true);
    expect(r.documentId).toBe("doc_76b7500a-cd19-49cb-ad88-a4988daf9eb2");
    expect(r.revisionId).toBe("drev_4e27edfa-755d-40aa-b111-222233334444");
  });

  it("parses legacy @ form", () => {
    const r = parseD4Ref("document:doc_abc@drev_xyz");
    expect(r.documentId).toBe("doc_abc");
    expect(r.revisionId).toBe("drev_xyz");
  });

  it("parses bare doc_", () => {
    const r = parseD4Ref("doc_only");
    expect(r.documentId).toBe("doc_only");
    expect(r.revisionId).toBeNull();
  });
});
