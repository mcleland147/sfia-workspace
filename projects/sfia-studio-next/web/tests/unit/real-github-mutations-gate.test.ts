import { afterEach, describe, expect, it } from "vitest";
import { isBoundedRealMutationAllowed } from "@/domains/integrations/real-github-provider";
import { classifyPublicationPath } from "@/domains/integrations/path-policy";

describe("REAL bounded mutation gate", () => {
  const prev = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

  afterEach(() => {
    if (prev === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prev;
  });

  it("refuses mutations when flag absent", () => {
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(isBoundedRealMutationAllowed()).toBe(false);
  });

  it("allows documentary flag only", () => {
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
    expect(isBoundedRealMutationAllowed()).toBe(true);
  });

  it("rejects non-documentary aliases", () => {
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "1";
    expect(isBoundedRealMutationAllowed()).toBe(false);
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "bounded";
    expect(isBoundedRealMutationAllowed()).toBe(false);
  });

  it("allows sandbox documentary path", () => {
    const p = classifyPublicationPath("docs/studio-next/publication-e2e.md");
    expect(p.allowed).toBe(true);
    expect(p.classification).toBe("DOCUMENTARY");
  });

  it("refuses code/CI paths for ML4 publication", () => {
    expect(classifyPublicationPath("src/app/page.tsx").allowed).toBe(false);
    expect(classifyPublicationPath(".github/workflows/ci.yml").allowed).toBe(false);
    expect(classifyPublicationPath("scripts/publish.sh").allowed).toBe(false);
  });
});
