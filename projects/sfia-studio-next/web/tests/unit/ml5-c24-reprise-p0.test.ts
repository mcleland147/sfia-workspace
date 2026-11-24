import { describe, expect, it, beforeEach } from "vitest";
import {
  readStudioVerificationArtifact,
  matchCriterionToVerifyId,
  deriveStudioVerifyPlanFromWorkspace,
} from "@/domains/proofs/studio-isolated-verify";
import {
  putStudioVerifyRecord,
  getStudioVerifyRecord,
  __resetStudioVerifyAuthorityForTests,
  __unloadStudioVerifyAuthorityForTests,
  isStudioIsolatedVerifyExecutionEnabled,
} from "@/domains/proofs/studio-verify-authority";
import { qualifyCursorRealization } from "@/domains/proofs/cursor-qualify";
import { mkdirSync, writeFileSync, mkdtempSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

describe("C24 reprise P0A/B — authority vs workspace forge", () => {
  beforeEach(() => {
    __resetStudioVerifyAuthorityForTests();
  });

  it("disables isolated exec by default", () => {
    const g = isStudioIsolatedVerifyExecutionEnabled({
      SFIA_D8_ISOLATED_VERIFY_PROVEN: undefined,
    });
    expect(g.enabled).toBe(false);
    expect(g.limits.some((l) => /DISABLED/.test(l))).toBe(true);
  });

  it("package.json never yields an execution plan", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-plan-"));
    writeFileSync(
      join(root, "package.json"),
      JSON.stringify({ scripts: { test: "echo ok" } }),
    );
    expect(
      deriveStudioVerifyPlanFromWorkspace({
        workspaceCwd: root,
        acceptanceCriteria: ["test exit=0"],
      }),
    ).toEqual([]);
  });

  it("forged workspace STUDIO_ISOLATED_SUBPROCESS does not certify", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-forge-"));
    mkdirSync(join(root, ".sfia/studio-verifications/efx_x"), {
      recursive: true,
    });
    writeFileSync(
      join(root, ".sfia/studio-verifications/efx_x/add.json"),
      JSON.stringify({
        attemptId: "efx_x",
        contractFingerprint: "fp",
        testId: "add",
        exit: 0,
        ok: true,
        verifiedBy: "STUDIO_ISOLATED_SUBPROCESS",
      }),
    );
    const art = readStudioVerificationArtifact({
      workspaceCwd: root,
      attemptId: "efx_x",
      testId: "add",
      contractFingerprint: "fp",
    });
    expect(art.ok).toBe(false);
    expect(art.limits.some((l) => /NOT_CERTIFYING/.test(l))).toBe(true);
  });

  it("Studio HMAC authority survives restart via durable Studio file", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-auth-"));
    process.env.SFIA_D8_VERIFY_AUTHORITY_DIR = dir;
    process.env.SFIA_D8_VERIFY_HMAC_SECRET = "c24-qualify-hmac-secret-32b";
    __resetStudioVerifyAuthorityForTests();
    putStudioVerifyRecord({
      attemptId: "efx_dur",
      contractFingerprint: "fp",
      verifyId: "npm-test",
      ok: true,
      exitCode: 0,
      contentVersionSha256: "abc",
      argvDigest: "def",
    });
    __unloadStudioVerifyAuthorityForTests();
    const got = getStudioVerifyRecord({
      attemptId: "efx_dur",
      contractFingerprint: "fp",
      verifyId: "npm-test",
    });
    expect(got.ok).toBe(true);
    expect(got.record?.hmac).toBeTruthy();
    delete process.env.SFIA_D8_VERIFY_AUTHORITY_DIR;
    delete process.env.SFIA_D8_VERIFY_HMAC_SECRET;
  });

  it("sealed HMAC does not certify a modified content version", () => {
    putStudioVerifyRecord({
      attemptId: "efx_ver",
      contractFingerprint: "fp",
      verifyId: "npm-test",
      ok: true,
      exitCode: 0,
      contentVersionSha256: "content-v1",
      argvDigest: "def",
    });
    const mismatch = getStudioVerifyRecord({
      attemptId: "efx_ver",
      contractFingerprint: "fp",
      verifyId: "npm-test",
      expectedContentVersionSha256: "content-v2-modified",
    });
    expect(mismatch.ok).toBe(false);
    expect(mismatch.limits.some((l) => /CONTENT_VERSION_MISMATCH/.test(l))).toBe(
      true,
    );
    const match = getStudioVerifyRecord({
      attemptId: "efx_ver",
      contractFingerprint: "fp",
      verifyId: "npm-test",
      expectedContentVersionSha256: "content-v1",
    });
    expect(match.ok).toBe(true);
  });

  it("Studio HMAC authority can certify", () => {
    putStudioVerifyRecord({
      attemptId: "efx_a",
      contractFingerprint: "fp",
      verifyId: "npm-test",
      ok: true,
      exitCode: 0,
      contentVersionSha256: "abc",
      argvDigest: "def",
    });
    const r = getStudioVerifyRecord({
      attemptId: "efx_a",
      contractFingerprint: "fp",
      verifyId: "npm-test",
    });
    expect(r.ok).toBe(true);
    const art = readStudioVerificationArtifact({
      workspaceCwd: mkdtempSync(join(tmpdir(), "sfia-empty-")),
      attemptId: "efx_a",
      testId: "npm-test",
      contractFingerprint: "fp",
    });
    expect(art.ok).toBe(true);
    expect(art.verifiedBy).toBe("STUDIO_AUTHORITY_HMAC");
  });

  it("does not loosely map generic test criteria to npm-test", () => {
    expect(
      matchCriterionToVerifyId("test add exit=0", ["npm-test", "add"]),
    ).toBe("add");
    expect(matchCriterionToVerifyId("unit tests pass", ["npm-test"])).toBeNull();
    expect(
      matchCriterionToVerifyId("run npm test", ["npm-test"]),
    ).toBe("npm-test");
  });
});

describe("C24 reprise P0E — Git N/A vs required", () => {
  it("null gitFactsVerified with gitRequired blocks conformity", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "fp",
      acceptanceCriteria: ["src/a.ts export foo"],
      handoffStatus: "RECEIVED",
      reportMarkdown: "ok",
      manifest: {
        filesCreated: ["src/a.ts"],
        filesModified: [],
        filesDeleted: [],
        testsDeclared: [],
        testsExecuted: [],
        testsCaptured: [],
      },
      criterionEvidence: {
        "src/a.ts export foo": { refs: ["src/a.ts"], verified: true },
      },
      gitFactsVerified: null,
      gitRequired: true,
    });
    expect(q.conformityProven).toBe(false);
    expect(q.limits.some((l) => /REQUIS|indéterminé/i.test(l))).toBe(true);
  });

  it("null gitFactsVerified without gitRequired allows conformity path", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "fp",
      acceptanceCriteria: ["src/a.ts export foo"],
      handoffStatus: "RECEIVED",
      reportMarkdown: "ok",
      manifest: {
        filesCreated: ["src/a.ts"],
        filesModified: [],
        filesDeleted: [],
        testsDeclared: [],
        testsExecuted: [],
        testsCaptured: [],
      },
      criterionEvidence: {
        "src/a.ts export foo": { refs: ["src/a.ts"], verified: true },
      },
      gitFactsVerified: null,
      gitRequired: false,
    });
    expect(q.limits.some((l) => /Git D9 N\/A/.test(l))).toBe(true);
    expect(q.conformityProven).toBe(true);
  });
});
