/**
 * M5 B1 strong restart proof — two independent Node processes, same DB file.
 * Real use cases: Attempt succeeded + Evidence(execution_attempt) + RB + W1 + rehydrate.
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
  "__tests__/oa/project/m5RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M5 process restart proof (B1)", () => {
  it(
    "create via real use cases in process A, rehydrate in process B",
    () => {
      expect(fs.existsSync(TSX)).toBe(true);
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-proc-"));
      const dbPath = path.join(dir, "oa-product.sqlite");
      const projectId = "prj:m5-proc";

      try {
        const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
          cwd: APP_ROOT,
          encoding: "utf8",
          env: { ...process.env },
          timeout: 90_000,
        });
        expect(create.status, create.stderr || create.stdout).toBe(0);
        const created = JSON.parse(create.stdout.trim()) as {
          ok: boolean;
          attemptId?: string;
          resultRef?: string;
          evidenceId?: string;
          reviewBundleId?: string;
          executionContractId?: string;
          lpsVersion?: number;
          evidence?: {
            sourceKind?: string;
            technicalResultRef?: string | null;
            bindings?: Record<string, string | undefined>;
          };
          recommendation?: {
            kind?: string;
            executionAuthority?: boolean;
            gateConsumed?: boolean;
            decisionCreated?: boolean;
            attemptAutoLaunchNextCycle?: boolean;
          };
        };
        expect(created.ok).toBe(true);
        expect(created.attemptId).toBe("xat:m5-proc");
        expect(created.resultRef).toBe("res:m5-proc-fixture");
        expect(created.evidenceId).toBe("ev:m5-proc");
        expect(created.reviewBundleId).toBe("rb:m5-proc");
        expect(created.executionContractId).toBe("xct:m5-proc");
        expect(created.evidence?.sourceKind).toBe("execution_attempt");
        expect(created.evidence?.technicalResultRef).toBe(
          "res:m5-proc-fixture",
        );
        expect(created.evidence?.bindings?.projectId).toBe(projectId);
        expect(created.evidence?.bindings?.executionContractId).toBe(
          "xct:m5-proc",
        );
        expect(created.recommendation?.kind).toBe("recommendation");
        expect(created.recommendation?.executionAuthority).toBe(false);
        expect(created.recommendation?.gateConsumed).toBe(false);
        expect(created.recommendation?.decisionCreated).toBe(false);
        expect(created.recommendation?.attemptAutoLaunchNextCycle).toBe(false);

        const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
          cwd: APP_ROOT,
          encoding: "utf8",
          env: { ...process.env },
          timeout: 90_000,
        });
        expect(read.status, read.stderr || read.stdout).toBe(0);
        const loaded = JSON.parse(read.stdout.trim()) as {
          ok: boolean;
          attemptStatus?: string;
          resultRef?: string;
          evidenceId?: string;
          reviewBundleId?: string;
          evidence?: {
            sourceKind?: string;
            technicalResultRef?: string | null;
            bindings?: Record<string, string | undefined>;
          };
          evidenceIds?: string[];
          reviewBundleIds?: string[];
          lpsVersion?: number;
          recommendation?: {
            kind?: string;
            executionAuthority?: boolean;
            gateConsumed?: boolean;
            decisionCreated?: boolean;
            attemptAutoLaunchNextCycle?: boolean;
          };
        };
        expect(loaded.ok).toBe(true);
        expect(loaded.attemptStatus).toBe("succeeded");
        expect(loaded.resultRef).toBe(created.resultRef);
        expect(loaded.evidenceId).toBe("ev:m5-proc");
        expect(loaded.reviewBundleId).toBe("rb:m5-proc");
        expect(loaded.evidence?.sourceKind).toBe("execution_attempt");
        expect(loaded.evidence?.technicalResultRef).toBe(created.resultRef);
        expect(loaded.evidence?.bindings?.projectId).toBe(projectId);
        expect(loaded.evidence?.bindings?.executionContractId).toBe(
          "xct:m5-proc",
        );
        expect(loaded.evidence?.bindings?.executionAttemptId).toBe(
          "xat:m5-proc",
        );
        expect(loaded.evidenceIds).toEqual(["ev:m5-proc"]);
        expect(loaded.reviewBundleIds).toEqual(["rb:m5-proc"]);
        expect(loaded.lpsVersion).toBe(created.lpsVersion);
        expect(loaded.recommendation?.kind).toBe("recommendation");
        expect(loaded.recommendation?.executionAuthority).toBe(false);
        expect(loaded.recommendation?.gateConsumed).toBe(false);
        expect(loaded.recommendation?.decisionCreated).toBe(false);
        expect(loaded.recommendation?.attemptAutoLaunchNextCycle).toBe(false);
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    90_000,
  );
});
