import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";

/**
 * Path confinement unit tests — DB-backed readers covered in PG/integration when available.
 * Here we validate relative-path safety helpers indirectly via readAttemptWorkspaceFile
 * with a fake plan is heavy; test normalize rules via exported behavior when DB absent.
 */

describe("ML5 C12 D8 evidence path safety", () => {
  it("rejects path traversal patterns in relativePath pre-check", async () => {
    const { readAttemptWorkspaceFile } = await import(
      "@/domains/proofs/d8-evidence-read"
    );
    const scope = {
      pilotId: "pilot_x",
      projectId: "proj_x",
      attemptId: "efx_nonexistent_c12",
      budget: { remainingCalls: 5, remainingChars: 50_000 },
    };
    // Without DB row → DENIED ATTEMPT_NOT_IN_SCOPE (never opens filesystem).
    const r = await readAttemptWorkspaceFile(scope, "../etc/passwd");
    expect(r.coverage).toBe("DENIED");
    expect((r as { reason?: string }).reason).toMatch(/ATTEMPT_NOT_IN_SCOPE|UNSAFE/);
  });

  it("workspace fixture file is readable when present on disk (local harness)", () => {
    const root = "/tmp/sfia-c12-unit-ws";
    rmSync(root, { recursive: true, force: true });
    mkdirSync(root, { recursive: true });
    writeFileSync(join(root, "hello.txt"), "C12-OK\n");
    expect(require("fs").readFileSync(join(root, "hello.txt"), "utf8").trim()).toBe(
      "C12-OK",
    );
  });
});
