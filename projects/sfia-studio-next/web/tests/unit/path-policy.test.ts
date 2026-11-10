import { describe, expect, it } from "vitest";
import { classifyPublicationPath, normalizePublicationPath } from "@/domains/integrations/path-policy";

describe("path-policy fail-closed (B5)", () => {
  it("allows documentary paths under docs/", () => {
    const r = classifyPublicationPath("docs/spec.md");
    expect(r.allowed).toBe(true);
    expect(r.classification).toBe("DOCUMENTARY");
    expect(r.normalizedPath).toBe("docs/spec.md");
  });

  it("denies root README as protected", () => {
    const r = classifyPublicationPath("README.md");
    expect(r.allowed).toBe(false);
    expect(r.classification).toBe("PROTECTED");
  });

  it("denies adversarial traversal and encodings", () => {
    expect(classifyPublicationPath("docs/../src/secret.md").allowed).toBe(false);
    expect(classifyPublicationPath("docs/%2e%2e/src/secret.md").allowed).toBe(false);
    expect(classifyPublicationPath("docs/x/../../.github/workflows/x.md").allowed).toBe(false);
    expect(normalizePublicationPath("/abs/docs/a.md").allowed).toBe(false);
    expect(normalizePublicationPath("docs\\secret.md").allowed).toBe(false);
    expect(normalizePublicationPath("docs/\0x.md").allowed).toBe(false);
  });

  it("denies secret/technical disguises even under docs/", () => {
    expect(classifyPublicationPath("docs/secret-notes.md").allowed).toBe(false);
    expect(classifyPublicationPath("docs/.env.local.md").allowed).toBe(false);
    expect(classifyPublicationPath("docs/Dockerfile.md").allowed).toBe(false);
    expect(classifyPublicationPath(".github/workflows/ci.md").allowed).toBe(false);
    expect(classifyPublicationPath("src/README.md").allowed).toBe(false);
  });

  it("denies src and secrets and case variants", () => {
    expect(classifyPublicationPath("src/index.ts").allowed).toBe(false);
    expect(classifyPublicationPath("SRC/index.ts").allowed).toBe(false);
    expect(classifyPublicationPath("config/production.env").allowed).toBe(false);
    expect(classifyPublicationPath(".github/workflows/ci.yml").allowed).toBe(false);
  });

  it("does not allow markdown outside documentary zones", () => {
    expect(classifyPublicationPath("notes-at-root.md").allowed).toBe(false);
  });
});
