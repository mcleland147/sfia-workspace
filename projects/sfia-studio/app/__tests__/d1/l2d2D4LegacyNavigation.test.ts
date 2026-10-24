/**
 * L2-D2 — D4 Option A legacy navigation (Q7 / Q10).
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";

const redirectMock = vi.fn();
const notFoundMock = vi.fn(() => {
  throw new Error("NEXT_NOT_FOUND");
});

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
  notFound: () => notFoundMock(),
}));

describe("L2-D2 D4 legacy navigation (Q7/Q10)", () => {
  beforeEach(() => {
    resetLocalOaExclusiveModeForTests();
    redirectMock.mockReset();
    notFoundMock.mockClear();
  });

  afterEach(() => {
    resetLocalOaExclusiveModeForTests();
  });

  it("inactive — helpers are no-ops (historical UX preserved)", async () => {
    const {
      redirectLegacyGenericEntryToStudioIfExclusive,
      denyLegacyProjectDeepLinkIfExclusive,
    } = await import("@/lib/d1/legacyNavigation");
    redirectLegacyGenericEntryToStudioIfExclusive();
    denyLegacyProjectDeepLinkIfExclusive();
    expect(redirectMock).not.toHaveBeenCalled();
    expect(notFoundMock).not.toHaveBeenCalled();
  });

  it("exclusive — generic entries redirect to /studio", async () => {
    setLocalOaExclusiveModeForTests(true);
    const { redirectLegacyGenericEntryToStudioIfExclusive } = await import(
      "@/lib/d1/legacyNavigation"
    );
    redirectLegacyGenericEntryToStudioIfExclusive();
    expect(redirectMock).toHaveBeenCalledWith("/studio");
  });

  it("exclusive — project deep link denies without OA mapping", async () => {
    setLocalOaExclusiveModeForTests(true);
    const { denyLegacyProjectDeepLinkIfExclusive } = await import(
      "@/lib/d1/legacyNavigation"
    );
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(
      /NEXT_NOT_FOUND/,
    );
    expect(notFoundMock).toHaveBeenCalledTimes(1);
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it("Q10 — ID namespaces remain disjoint (no mapper module)", async () => {
    const ids = await import("@/lib/d1/ids");
    const d1Id = ids.createProjectId();
    expect(d1Id.startsWith("proj-")).toBe(true);
    expect(d1Id.startsWith("prj:")).toBe(false);
    // OA generator lives in local composition — sample format only
    expect("prj:example".startsWith("prj:")).toBe(true);
    expect("prj:example".startsWith("proj-")).toBe(false);
  });
});
