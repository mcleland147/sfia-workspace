import { describe, expect, it } from "vitest";
import {
  buildPublicWebSearchTool,
  canAttachWebSearchTool,
  isWebSearchIsolationProven,
  preparePublicWebQuery,
  WEB_SEARCH_BOUNDARY_NOTE,
} from "@/domains/conversation/web-search-tools";
import type { CognitivePolicy } from "@/domains/conversation/cognitive-policy";

const analysePolicy = {
  profile: "analyse",
  profileType: "STANDARD",
} as unknown as CognitivePolicy;

describe("ML5 P0-03 — B1 web search boundary", () => {
  it("keeps tool detached when isolation is not proven", () => {
    const env = {
      SFIA_WEB_SEARCH_ENABLED: "1",
    } as unknown as NodeJS.ProcessEnv;
    expect(isWebSearchIsolationProven(env)).toBe(false);
    expect(canAttachWebSearchTool(analysePolicy, env)).toBe(false);
    expect(buildPublicWebSearchTool(env)).toBeNull();
    expect(WEB_SEARCH_BOUNDARY_NOTE).toMatch(/DISABLED/);
  });

  it("still requires both env flags when isolation claimed", () => {
    const env = {
      SFIA_WEB_SEARCH_ENABLED: "1",
      SFIA_WEB_SEARCH_ISOLATION_PROVEN: "1",
    } as unknown as NodeJS.ProcessEnv;
    expect(canAttachWebSearchTool(analysePolicy, env)).toBe(true);
  });

  it("sanitizer blocks or redacts secrets in public query formulation", () => {
    const r = preparePublicWebQuery(
      "search for sk-abcdefghijklmnopqrstuvwxyz0123456789 and project /Users/morris/secret/path",
    );
    if (r.ok) {
      expect(r.query).not.toMatch(/sk-[A-Za-z0-9]{20,}/);
      expect(r.redactions.length).toBeGreaterThan(0);
    } else {
      expect(r.reason.length).toBeGreaterThan(0);
    }
  });

  it("refuses tool for simple profile even if isolation proven", () => {
    const env = {
      SFIA_WEB_SEARCH_ENABLED: "1",
      SFIA_WEB_SEARCH_ISOLATION_PROVEN: "1",
    } as unknown as NodeJS.ProcessEnv;
    const simple = { profile: "simple", profileType: "STANDARD" } as unknown as CognitivePolicy;
    expect(canAttachWebSearchTool(simple, env)).toBe(false);
  });
});
