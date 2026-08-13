/**
 * M2 strong restart proof — two independent Node processes, same Product DB.
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
  "__tests__/oa/cycle/m2RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M2 process restart proof", () => {
  it(
    "C — create Project+Cycle+LPS in process A, read in process B",
    () => {
    expect(fs.existsSync(TSX)).toBe(true);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m2-proc-"));
    const dbPath = path.join(dir, "oa-product.sqlite");
    const projectId = "prj:m2-proc";

    try {
      const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
        timeout: 60_000,
      });
      expect(create.status, create.stderr || create.stdout).toBe(0);
      const created = JSON.parse(create.stdout.trim()) as {
        ok: boolean;
        cycleInstanceId?: string;
        lpsVersion?: number;
        lpsId?: string;
        activeCycleInstanceId?: string;
        ckcResolutionRef?: string;
        digest?: string;
        profile?: string;
        status?: string;
      };
      expect(created.ok).toBe(true);
      expect(created.lpsVersion).toBe(2);
      expect(created.activeCycleInstanceId).toBe("cyc:m2-proc-1");
      expect(created.ckcResolutionRef).toBe("ckc:m2-proc-bind");

      const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
        timeout: 60_000,
      });
      expect(read.status, read.stderr || read.stdout).toBe(0);
      const loaded = JSON.parse(read.stdout.trim()) as {
        ok: boolean;
        projectId?: string;
        cycleInstanceId?: string;
        cycleTypeId?: string;
        profile?: string;
        status?: string;
        lpsVersion?: number;
        lpsId?: string;
        activeCycleInstanceId?: string;
        ckcResolutionRef?: string;
        digest?: string;
        doctrinePackageId?: string;
      };
      expect(loaded.ok).toBe(true);
      expect(loaded.projectId).toBe(projectId);
      expect(loaded.cycleInstanceId).toBe(created.cycleInstanceId);
      expect(loaded.cycleTypeId).toBe("cyc:delivery");
      expect(loaded.profile).toBe(created.profile);
      expect(loaded.status).toBe(created.status);
      expect(loaded.lpsVersion).toBe(created.lpsVersion);
      expect(loaded.lpsId).toBe(created.lpsId);
      expect(loaded.activeCycleInstanceId).toBe(created.activeCycleInstanceId);
      expect(loaded.ckcResolutionRef).toBe(created.ckcResolutionRef);
      expect(loaded.digest).toBe(created.digest);
      expect(loaded.doctrinePackageId).toBe("pkg:studio-v3-oa");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  },
  60_000,
  );
});
