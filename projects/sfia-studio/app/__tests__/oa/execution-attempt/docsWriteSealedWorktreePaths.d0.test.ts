/**
 * Sealed docs-write path absolutization under prepared worktree.
 * ZERO REAL.
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  resolveSealedDocsWriteWorktreePaths,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";

const WT = "/tmp/fake-exec-root/wt-sealed-paths";
const SEALED =
  "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const ALLOW = "projects/sfia-studio/.sandbox";

describe("resolveSealedDocsWriteWorktreePaths", () => {
  it("docs_write_instruction_paths_preserve_projects_sfia_studio_prefix", () => {
    const r = resolveSealedDocsWriteWorktreePaths({
      worktreeRoot: WT,
      targetPath: SEALED,
      pathAllowlist: [ALLOW],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.sealedTargetPath).toBe(SEALED);
    expect(r.absoluteTargetPath).toBe(path.resolve(WT, ...SEALED.split("/")));
    expect(r.sealedPathAllowlist).toEqual([ALLOW]);
    expect(r.absolutePathAllowlist).toEqual([
      path.resolve(WT, ...ALLOW.split("/")),
    ]);
    expect(r.absoluteTargetPath).toContain("projects/sfia-studio/.sandbox/");
    expect(r.absoluteTargetPath.endsWith("gestion-de-taches.md")).toBe(true);
  });

  it("rejects traversal outside worktree", () => {
    expect(
      resolveSealedDocsWriteWorktreePaths({
        worktreeRoot: WT,
        targetPath: "projects/sfia-studio/../../etc/passwd",
        pathAllowlist: [ALLOW],
      }).ok,
    ).toBe(false);
  });

  it("rejects target outside sealed allowlist", () => {
    const r = resolveSealedDocsWriteWorktreePaths({
      worktreeRoot: WT,
      targetPath: ".sandbox/gestion-de-taches.md",
      pathAllowlist: [ALLOW],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("target_outside_allowlist");
  });

  it("rejects empty allowlist", () => {
    const r = resolveSealedDocsWriteWorktreePaths({
      worktreeRoot: WT,
      targetPath: SEALED,
      pathAllowlist: [],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("path_allowlist_empty");
  });
});

describe("verifyWorkspaceFileEffects sealed vs wrong-path", () => {
  it("root_dot_sandbox_does_not_satisfy_sealed_projects_sfia_studio_target", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: WT,
      pathAllowlist: [ALLOW],
      targetPath: SEALED,
      nameStatusText: "A\t.sandbox/gestion-de-taches.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toBe("unexpected_files_outside_allowlist");
      expect(r.unexpectedFiles).toContain(".sandbox/gestion-de-taches.md");
    }
  });

  it("missing sealed target fails even if wrong-path present", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: WT,
      pathAllowlist: [ALLOW],
      targetPath: SEALED,
      nameStatusText: "",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("target_path_missing");
  });
});
