import { afterEach, describe, expect, it, vi } from "vitest";

describe("Next distDir isolation (operator vs E2E)", () => {
  const prev = process.env.STUDIO_E2E;

  afterEach(() => {
    if (prev === undefined) delete process.env.STUDIO_E2E;
    else process.env.STUDIO_E2E = prev;
    vi.resetModules();
  });

  it("operator (no STUDIO_E2E) uses .next", async () => {
    delete process.env.STUDIO_E2E;
    vi.resetModules();
    const mod = await import("../../next.config");
    expect(mod.default.distDir).toBe(".next");
  });

  it("E2E (STUDIO_E2E=1) uses .next-e2e", async () => {
    process.env.STUDIO_E2E = "1";
    vi.resetModules();
    const mod = await import("../../next.config");
    expect(mod.default.distDir).toBe(".next-e2e");
  });
});
