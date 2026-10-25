/**
 * L2-D2 G-ACTIVATION PREPARATION S3 — D4 navigation readiness harness (DET).
 * Exercises page modules with next/navigation mocks + real exclusive env trim.
 * Does NOT start a LIVE Studio HTTP server (G-REAL not granted).
 * @vitest-environment node
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { LOCAL_OA_EXCLUSIVE_ENV_KEY } from "@/lib/d1/localOaExclusiveMode";
import {
  denyLegacyProjectDeepLinkIfExclusive,
  redirectLegacyGenericEntryToStudioIfExclusive,
} from "@/lib/d1/legacyNavigation";

const redirect = vi.fn((url: string) => {
  const err = new Error(`NEXT_REDIRECT:${url}`);
  (err as Error & { digest?: string }).digest = `NEXT_REDIRECT;${url}`;
  throw err;
});
const notFound = vi.fn(() => {
  const err = new Error("NEXT_NOT_FOUND");
  (err as Error & { digest?: string }).digest = "NEXT_NOT_FOUND";
  throw err;
});

vi.mock("next/navigation", () => ({
  redirect: (url: string) => redirect(url),
  notFound: () => notFound(),
}));

beforeEach(() => {
  resetLocalOaExclusiveModeForTests();
  delete process.env[LOCAL_OA_EXCLUSIVE_ENV_KEY];
  redirect.mockClear();
  notFound.mockClear();
});

describe("L2-D2 S3 D4 HTTP readiness harness (DET)", () => {
  it("marker OFF — helpers are no-ops (historical D1 navigation preserved)", () => {
    setLocalOaExclusiveModeForTests(false);
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).not.toThrow();
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).not.toThrow();
    expect(redirect).not.toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });

  it("marker ON via test override — generic → /studio ; deep link → notFound", () => {
    setLocalOaExclusiveModeForTests(true);
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).toThrow(
      /NEXT_REDIRECT:\/studio/,
    );
    expect(redirect).toHaveBeenCalledWith("/studio");
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(/NEXT_NOT_FOUND/);
    expect(notFound).toHaveBeenCalled();
  });

  it("marker ON via real process.env trim (\" 1 \") — no test override", () => {
    resetLocalOaExclusiveModeForTests();
    process.env[LOCAL_OA_EXCLUSIVE_ENV_KEY] = " 1 ";
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).toThrow(
      /NEXT_REDIRECT:\/studio/,
    );
    expect(redirect).toHaveBeenCalledWith("/studio");
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(/NEXT_NOT_FOUND/);
  });

  it("no proj-* → prj:* translator module is imported by D4 pages", async () => {
    // Structural: deep-link helper never returns an OA id — only notFound.
    setLocalOaExclusiveModeForTests(true);
    try {
      denyLegacyProjectDeepLinkIfExclusive();
    } catch {
      /* expected */
    }
    expect(notFound).toHaveBeenCalledTimes(1);
    // Namespace disjointness: D1 ids stay D1; OA uses prj: — no mapper file in D4 surface.
    const fs = await import("node:fs");
    const path = await import("node:path");
    const appRoot = path.resolve(__dirname, "../..");
    const pageFiles = [
      "app/workspace/page.tsx",
      "app/projects/new/page.tsx",
      "app/nouvelle-demande/page.tsx",
      "app/projects/[id]/page.tsx",
    ];
    for (const rel of pageFiles) {
      const src = fs.readFileSync(path.join(appRoot, rel), "utf8");
      expect(src).toMatch(/legacyNavigation/);
      // Reject executable mapping (not the Option A denial comment).
      expect(src).not.toMatch(/mapProj|`prj:`\s*\+|prj:`\s*\+|toPrj|projIdToPrj/);
      expect(src).not.toMatch(/replace\(\s*\/proj/);
    }
  });

  it("OPS1 /ops1/nouvelle-demande is outside D4 helper wiring (inventory)", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const ops1Page = path.resolve(
      __dirname,
      "../../app/ops1/nouvelle-demande/page.tsx",
    );
    expect(fs.existsSync(ops1Page)).toBe(true);
    const src = fs.readFileSync(ops1Page, "utf8");
    expect(src).not.toMatch(/legacyNavigation/);
    expect(src).not.toMatch(/@\/lib\/d1/);
    // Policy: OPS1 remains OUT of initial D4 exclusive cutover surface (DET inventory).
    // Any future writer under exclusive requires distinct Morris decision.
  });
});
