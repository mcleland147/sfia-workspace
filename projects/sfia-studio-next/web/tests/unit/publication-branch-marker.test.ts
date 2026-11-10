import { afterEach, describe, expect, it } from "vitest";
import { publicationBranchFromCorrelationKey } from "@/domains/execution/fingerprint";
import {
  isBoundedRealMutationAllowed,
  prBodyHasPublicationMarker,
} from "@/domains/integrations/real-github-provider";

describe("publicationBranchFromCorrelationKey", () => {
  it("is stable for the same correlationKey", () => {
    const a = publicationBranchFromCorrelationKey("pub-e2e-20261109001806-retry1");
    const b = publicationBranchFromCorrelationKey("pub-e2e-20261109001806-retry1");
    expect(a).toBe(b);
    expect(a).toMatch(/^sfia\/pub-[0-9a-f]{16}$/);
  });

  it("does not collide on shared 12-char prefixes", () => {
    const left = publicationBranchFromCorrelationKey("abcdefghijkl-ONE");
    const right = publicationBranchFromCorrelationKey("abcdefghijkl-TWO");
    expect(left).not.toBe(right);
    // Legacy truncation would have produced the same name for both.
    expect(`sfia/pub-${"abcdefghijkl-ONE".slice(0, 12)}`).toBe(
      `sfia/pub-${"abcdefghijkl-TWO".slice(0, 12)}`,
    );
  });
});

describe("prBodyHasPublicationMarker", () => {
  it("accepts exact line match", () => {
    const body = "Publication documentaire ML4\nsfia-publication:abc-123\n";
    expect(prBodyHasPublicationMarker(body, "abc-123")).toBe(true);
  });

  it("refuses substring / prefix collisions", () => {
    const body = "note\nsfia-publication:abc-123-other\n";
    expect(prBodyHasPublicationMarker(body, "abc-123")).toBe(false);
    expect(prBodyHasPublicationMarker(body, "abc-123-other")).toBe(true);
  });

  it("refuses bare includes without line boundary", () => {
    expect(prBodyHasPublicationMarker("xxsfia-publication:abc", "abc")).toBe(false);
  });
});

describe("REAL mutation gate contract", () => {
  const prev = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

  afterEach(() => {
    if (prev === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prev;
  });

  it("rejects legacy aliases 1 and bounded", () => {
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "1";
    expect(isBoundedRealMutationAllowed()).toBe(false);
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "bounded";
    expect(isBoundedRealMutationAllowed()).toBe(false);
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
    expect(isBoundedRealMutationAllowed()).toBe(true);
  });
});
