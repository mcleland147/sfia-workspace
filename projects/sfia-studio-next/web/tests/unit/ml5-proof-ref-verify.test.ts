import { describe, expect, it } from "vitest";
import {
  collectManifestRefs,
  verifyNewProofRef,
} from "@/domains/proofs/proof-ref-verify";
import {
  buildWebSourceCitation,
  formatCitationForDisplay,
} from "@/domains/conversation/web-source-citation";
import {
  assertMcpReadyForDispatch,
  checkRequiredMcpCapabilities,
} from "@/domains/execution/mcp-capability-check";
import {
  detectImageMime,
  sha256Buffer,
  storeEvidenceCapture,
  listEvidenceCapturesForAttempt,
} from "@/domains/proofs/evidence-captures";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  normalizeGitHubRepoFromUrl,
  qualifyCursorGitPublication,
} from "@/domains/execution/cursor-git-option-a";
import { probeDevListenConfinement } from "@/domains/identity/dev-listen-probe";

describe("C8 B1 proof-ref exact", () => {
  it("rejects substring matches and empty new_proof fallback", () => {
    const partial = verifyNewProofRef({
      newProofRef: "a",
      attemptId: "efx_1",
      handoffId: "rh_abc",
      handoffIntegrityHash: null,
      manifestRefs: ["src/a.ts"],
      mode: "new_proof",
    });
    expect(partial.ok).toBe(false);

    const exact = verifyNewProofRef({
      newProofRef: "src/a.ts",
      attemptId: "efx_1",
      handoffId: "rh_abc",
      handoffIntegrityHash: null,
      manifestRefs: ["src/a.ts"],
      mode: "new_proof",
    });
    expect(exact.ok).toBe(true);
  });

  it("rejects echoing prior handoff as new_proof", () => {
    const r = verifyNewProofRef({
      newProofRef: "rh_abc",
      attemptId: "efx_1",
      handoffId: "rh_abc",
      handoffIntegrityHash: null,
      manifestRefs: [],
      mode: "new_proof",
      priorHandoffId: "rh_abc",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/NOT_NEW/);
  });

  it("collects manifest refs", () => {
    expect(
      collectManifestRefs({
        filesCreated: ["a.ts"],
        captures: ["cap1"],
      }),
    ).toEqual(["a.ts", "cap1"]);
  });
});

describe("C8 A1 Git publication / origin", () => {
  it("normalizes SSH/HTTPS remotes", () => {
    expect(normalizeGitHubRepoFromUrl("git@github.com:Org/Repo.git")).toBe("org/repo");
    expect(normalizeGitHubRepoFromUrl("https://github.com/Org/Repo")).toBe("org/repo");
  });

  it("REMOTE_VERIFIED requires local HEAD match — not remote alone", () => {
    expect(
      qualifyCursorGitPublication({
        localHeadSha: null,
        remoteHeadShaVerified: "abc",
        pushDeclaredByCursor: true,
      }),
    ).toBe("PUSHED_UNVERIFIED");
    expect(
      qualifyCursorGitPublication({
        localHeadSha: "abc",
        remoteHeadShaVerified: "abc",
        pushDeclaredByCursor: true,
      }),
    ).toBe("REMOTE_VERIFIED");
  });
});

describe("B04 web citations", () => {
  it("formats discovered vs consulted citations", () => {
    const c = buildWebSourceCitation({
      url: "https://example.com/doc",
      title: "Doc",
      coverage: "DISCOVERED",
    });
    expect(c.limits.some((l) => l.includes("DISCOVERED_NOT_OPENED"))).toBe(true);
    expect(formatCitationForDisplay(c)).toMatch(/découvert/);
  });
});

describe("C8 A3 MCP fail-closed", () => {
  it("UNKNOWN blocks dispatch; SCRIPTED_SIMULATED needs opt-in", () => {
    const unknown = checkRequiredMcpCapabilities(["figma"], {});
    expect(unknown[0]?.status).toBe("UNKNOWN");
    expect(assertMcpReadyForDispatch(unknown).ok).toBe(false);

    const inventoryOnly = checkRequiredMcpCapabilities(["figma"], {
      SFIA_CURSOR_MCP_AVAILABLE: "figma",
    });
    expect(inventoryOnly[0]?.status).toBe("UNKNOWN");
    expect(assertMcpReadyForDispatch(inventoryOnly).ok).toBe(false);

    const scripted = checkRequiredMcpCapabilities(["figma"], {}, { scriptedSimulation: true });
    expect(scripted[0]?.status).toBe("SCRIPTED_SIMULATED");
    expect(assertMcpReadyForDispatch(scripted).ok).toBe(false);
    expect(assertMcpReadyForDispatch(scripted, { allowScriptedSimulation: true }).ok).toBe(true);
  });
});

describe("G07 evidence captures hardened", () => {
  it("stores PNG with magic check and lists by attempt", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ecap-"));
    const prev = process.env.SFIA_EVIDENCE_ROOT;
    process.env.SFIA_EVIDENCE_ROOT = root;
    try {
      // Minimal PNG signature + padding
      const buf = Buffer.from([
        0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0,
      ]);
      expect(detectImageMime(buf)).toBe("image/png");
      const meta = storeEvidenceCapture({
        attemptId: "efx_test",
        projectId: "proj_x",
        pilotId: "pilot_x",
        bytes: buf,
        label: "runtime-execution",
        viewport: { w: 1280, h: 800 },
      });
      expect(meta.contentSha256).toBe(sha256Buffer(buf));
      expect(listEvidenceCapturesForAttempt("efx_test")).toHaveLength(1);
      expect(() =>
        storeEvidenceCapture({
          attemptId: "efx_test",
          projectId: "proj_x",
          pilotId: "pilot_x",
          bytes: Buffer.from("not-an-image"),
          label: "bad",
        }),
      ).toThrow(/NOT_PNG/);
    } finally {
      process.env.SFIA_EVIDENCE_ROOT = prev;
      rmSync(root, { recursive: true, force: true });
    }
  });
});

describe("C8 A2 listen probe helper", () => {
  it("rejects non-loopback declared bind", async () => {
    const r = await probeDevListenConfinement({
      port: 1,
      declaredBind: "0.0.0.0",
    });
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("DECLARED_BIND_NOT_LOOPBACK");
  });
});
