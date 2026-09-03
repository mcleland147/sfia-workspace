/** @vitest-environment node */
/**
 * CORR-MW4-01F — rememberedAtIso uses wall-clock ISO by default;
 * injected nowIso is preserved for tests.
 * ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ProductSqliteSession,
  loadGroundingRefsFromSession,
  rememberEvidenceIds,
  rememberReadCoverage,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];
const EPOCH = "1970-01-01T00:00:00.000Z";
const INJECTED = "2026-09-03T11:22:33.444Z";

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-corr01f-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("CORR-MW4-01F — grounding timestamps D0", () => {
  it("injected nowIso is preserved on evidence + read coverage", async () => {
    const projectId = "prj:mw4-ts-inject";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });

    await rememberEvidenceIds(session, projectId, ["ev:1"], INJECTED);
    await rememberReadCoverage(
      session,
      projectId,
      [{ pathOrRef: "docs/a.md", coverage: "partial" }],
      INJECTED,
    );

    const loaded = await loadGroundingRefsFromSession(session);
    expect(loaded?.evidenceRefs[0]?.rememberedAtIso).toBe(INJECTED);
    expect(loaded?.readCoverage?.[0]?.rememberedAtIso).toBe(INJECTED);
    session.close();
  });

  it("without nowIso, rememberedAtIso is NOT epoch 1970-01-01", async () => {
    const projectId = "prj:mw4-ts-wall";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });

    const before = Date.now();
    await rememberEvidenceIds(session, projectId, ["ev:wall"]);
    await rememberReadCoverage(session, projectId, [
      { pathOrRef: "docs/b.md", coverage: "full" },
    ]);
    const after = Date.now();

    const loaded = await loadGroundingRefsFromSession(session);
    const evIso = loaded?.evidenceRefs[0]?.rememberedAtIso ?? "";
    const covIso = loaded?.readCoverage?.[0]?.rememberedAtIso ?? "";

    expect(evIso).not.toBe(EPOCH);
    expect(covIso).not.toBe(EPOCH);

    const evMs = Date.parse(evIso);
    const covMs = Date.parse(covIso);
    expect(Number.isFinite(evMs)).toBe(true);
    expect(Number.isFinite(covMs)).toBe(true);
    // Allow small clock skew around the call window.
    expect(evMs).toBeGreaterThanOrEqual(before - 5_000);
    expect(evMs).toBeLessThanOrEqual(after + 5_000);
    expect(covMs).toBeGreaterThanOrEqual(before - 5_000);
    expect(covMs).toBeLessThanOrEqual(after + 5_000);
    session.close();
  });
});
