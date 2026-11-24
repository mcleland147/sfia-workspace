import { mkdtempSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { describe, expect, it } from "vitest";
import { resolveCursorWorkspace } from "@/domains/execution/workspace-resolver";
import { StudioError } from "@/lib/http-errors";

describe("ML5 P0-02 — workspace confinement", () => {
  it("resolves under approved root with hashed pilot/project segments", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    const r = resolveCursorWorkspace({
      pilotId: "pilot_a",
      projectId: "proj_b",
      workspaceKey: "default",
      env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
    });
    expect(r.workspaceCwd.startsWith(realpathSync(root))).toBe(true);
    expect(r.workspaceKey).toBe("default");
  });

  it("rejects absolute client cwd", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        clientDeclaredCwd: "/etc/passwd",
        env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(StudioError);
  });

  it("rejects traversal workspaceKey", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        workspaceKey: "../escape",
        env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(StudioError);
  });

  it("rejects symlink escaping the root", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    const outside = mkdtempSync(join(tmpdir(), "sfia-out-"));
    writeFileSync(join(outside, "secret.txt"), "x");
    // Build the expected sandbox path then replace leaf with symlink out.
    const first = resolveCursorWorkspace({
      pilotId: "p1",
      projectId: "j1",
      workspaceKey: "linkme",
      env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
    });
    rmSync(first.workspaceCwd, { recursive: true, force: true });
    symlinkSync(outside, first.workspaceCwd);
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p1",
        projectId: "j1",
        workspaceKey: "linkme",
        ensureDir: false,
        env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(StudioError);
  });

  it("requires SFIA_CURSOR_WORKSPACE_ROOT", () => {
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        env: {} as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(/SFIA_CURSOR_WORKSPACE_ROOT/);
  });

  it("rejects workspace root inside a product/method tree", () => {
    const productLike = mkdtempSync(join(tmpdir(), "sfia-wt-next-fake-"));
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        env: { SFIA_CURSOR_WORKSPACE_ROOT: productLike } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(/arbre produit|dépôt produit|ACCESS_DENIED|refuse/);
  });
});
