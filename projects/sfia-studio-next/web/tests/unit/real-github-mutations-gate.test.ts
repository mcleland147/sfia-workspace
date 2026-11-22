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

describe("REAL WRITE allowlist separation", () => {
  it("documentary flag alone does not open publicationWriteGate without WRITE list", async () => {
    const { publicationWriteGate } = await import(
      "@/domains/conversation/publication-effect-restitution"
    );
    const prevP = process.env.STUDIO_GITHUB_PROVIDER;
    const prevM = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    const prevW = process.env.GITHUB_APP_WRITE_ALLOWED_REPOS;
    try {
      process.env.STUDIO_GITHUB_PROVIDER = "real";
      process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
      delete process.env.GITHUB_APP_WRITE_ALLOWED_REPOS;
      expect(publicationWriteGate().allowed).toBe(false);
      process.env.GITHUB_APP_WRITE_ALLOWED_REPOS = "mcleland147/chantiers360";
      expect(publicationWriteGate().allowed).toBe(true);
    } finally {
      if (prevP === undefined) delete process.env.STUDIO_GITHUB_PROVIDER;
      else process.env.STUDIO_GITHUB_PROVIDER = prevP;
      if (prevM === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
      else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevM;
      if (prevW === undefined) delete process.env.GITHUB_APP_WRITE_ALLOWED_REPOS;
      else process.env.GITHUB_APP_WRITE_ALLOWED_REPOS = prevW;
    }
  });
});
