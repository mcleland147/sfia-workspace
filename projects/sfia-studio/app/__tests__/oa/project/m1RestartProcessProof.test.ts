/**
 * M1 strong restart proof — two independent Node processes, same DB file.
 * @vitest-environment node
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKER = path.join(
  APP_ROOT,
  "__tests__/oa/project/m1RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M1 process restart proof", () => {
  it("create in process A, read in process B against same SQLite file", () => {
    expect(fs.existsSync(TSX)).toBe(true);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m1-proc-"));
    const dbPath = path.join(dir, "oa-product.sqlite");
    const projectId = "prj:m1-proc";

    try {
      const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
      });
      expect(create.status, create.stderr || create.stdout).toBe(0);
      const created = JSON.parse(create.stdout.trim()) as {
        ok: boolean;
        currentLpsVersionId?: string;
        digest?: string;
      };
      expect(created.ok).toBe(true);

      const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
      });
      expect(read.status, read.stderr || read.stdout).toBe(0);
      const loaded = JSON.parse(read.stdout.trim()) as {
        ok: boolean;
        projectId?: string;
        currentLpsVersionId?: string;
        version?: number;
        objective?: string;
        context?: string;
        scope?: string;
        digest?: string;
        doctrinePackageId?: string;
        doctrineVersion?: string;
      };
      expect(loaded.ok).toBe(true);
      expect(loaded.projectId).toBe(projectId);
      expect(loaded.currentLpsVersionId).toBe(created.currentLpsVersionId);
      expect(loaded.version).toBe(1);
      expect(loaded.objective).toBe("process-restart-objective");
      expect(loaded.context).toBe("process-restart-context");
      expect(loaded.scope).toBe("process-restart-scope");
      expect(loaded.digest).toBe(created.digest);
      expect(loaded.doctrinePackageId).toBe("pkg:studio-v3-oa");
      expect(loaded.doctrineVersion).toBe("1.0.0");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
