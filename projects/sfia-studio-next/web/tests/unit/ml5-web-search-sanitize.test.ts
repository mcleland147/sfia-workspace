import { describe, expect, it } from "vitest";
import {
  coverageFromObservation,
  sanitizePublicWebQuery,
} from "@/domains/conversation/web-search-sanitize";

describe("ML5 B — web query sanitization", () => {
  it("allows a public documentation query", () => {
    const r = sanitizePublicWebQuery("Cursor TypeScript SDK local agent documentation");
    expect(r.ok).toBe(true);
    expect(r.query).toMatch(/Cursor/);
  });

  it("blocks secretish keywords", () => {
    const r = sanitizePublicWebQuery("find my api_key for production");
    expect(r.ok).toBe(false);
    expect(r.blockedReason).toBe("SECRETISH_CONTENT");
  });

  it("redacts tokens and paths", () => {
    const r = sanitizePublicWebQuery(
      "docs for sk-abcdefghijklmnopqrstuvwxyz012345 at /Users/morris/workspace/demo",
    );
    expect(r.ok).toBe(true);
    expect(r.query).not.toMatch(/sk-/);
    expect(r.query).not.toMatch(/\/Users\//);
    expect(r.redactions.length).toBeGreaterThan(0);
  });

  it("distinguishes citation from page opened", () => {
    expect(coverageFromObservation({ hasCitation: true })).toBe("CITED");
    expect(coverageFromObservation({ action: "open_page" })).toBe("PAGE_OPENED");
    expect(coverageFromObservation({ action: "search" })).toBe("URL_DISCOVERED");
    expect(coverageFromObservation({ searchEngaged: true })).toBe("SEARCH_ENGAGED");
  });
});
