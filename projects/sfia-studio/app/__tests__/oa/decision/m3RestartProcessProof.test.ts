/**
 * M3 R2 — real Proposal → recordF2Decision → restart → PREPARE without Proposal.
 * Three independent Node processes, same Product DB.
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
  "__tests__/oa/decision/m3RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

function run(
  mode: string,
  dbPath: string,
  projectId: string,
  extra: string[] = [],
) {
  return spawnSync(TSX, [WORKER, mode, dbPath, projectId, ...extra], {
    cwd: APP_ROOT,
    encoding: "utf8",
    env: { ...process.env },
    timeout: 90_000,
  });
}

describe("M3 process restart proof (R2 real F2 chain)", () => {
  it(
    "G — A create, B saveProposal+recordF2Decision, C PREPARE (Proposal absent), D read fingerprint",
    () => {
      expect(fs.existsSync(TSX)).toBe(true);
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-proc-"));
      const dbPath = path.join(dir, "oa-product.sqlite");
      const projectId = "prj:m3-proc";
      const proposalId = "prop:m3-e2e";

      // Anti-cheat: worker source must use real F2 APIs for Process A.
      const workerSrc = fs.readFileSync(WORKER, "utf8");
      expect(workerSrc).toMatch(/saveProposal\(/);
      expect(workerSrc).toMatch(/recordF2Decision\(/);
      expect(workerSrc).toMatch(/prepareM3FromDecision\(/);
      // Process A must not fabricate DecisionBasis for the E2E go path.
      expect(workerSrc).not.toMatch(
        /mode === "go"[\s\S]*decisionBasis:\s*\{/,
      );

      try {
        const create = run("create", dbPath, projectId);
        expect(create.status, create.stderr || create.stdout).toBe(0);
        const created = JSON.parse(create.stdout.trim()) as { ok: boolean };
        expect(created.ok).toBe(true);

        const go = run("go", dbPath, projectId, [proposalId]);
        expect(go.status, go.stderr || go.stdout).toBe(0);
        const decided = JSON.parse(go.stdout.trim()) as {
          ok: boolean;
          path?: string;
          proposalId?: string;
          decisionId?: string;
          sourceRef?: string;
          sourceDigest?: string;
          requestedOperation?: string;
          lpsVersion?: number;
          decisionIds?: string[];
          usedSaveProposal?: boolean;
          usedRecordF2Decision?: boolean;
          manuallyBuiltDecisionBasis?: boolean;
          proposalPresentInProcessA?: boolean;
        };
        expect(decided.ok).toBe(true);
        expect(decided.path).toBe("recordF2Decision");
        expect(decided.usedSaveProposal).toBe(true);
        expect(decided.usedRecordF2Decision).toBe(true);
        expect(decided.manuallyBuiltDecisionBasis).toBe(false);
        expect(decided.proposalPresentInProcessA).toBe(true);
        expect(decided.proposalId).toBe(proposalId);
        expect(decided.sourceRef).toBe(proposalId);
        expect(decided.sourceDigest).toMatch(/^[a-f0-9]{64}$/);
        expect(decided.requestedOperation).toBe("m3-e2e-requested-operation");
        expect(decided.lpsVersion).toBeGreaterThan(1);
        expect(decided.decisionIds).toContain(decided.decisionId!);
        const decisionId = decided.decisionId!;

        const prepare = run("prepare", dbPath, projectId, [
          decisionId,
          proposalId,
        ]);
        expect(prepare.status, prepare.stderr || prepare.stdout).toBe(0);
        expect(prepare.stdout).not.toMatch(/PROPOSAL_NOT_FOUND/);
        const prepared = JSON.parse(prepare.stdout.trim()) as {
          ok: boolean;
          decisionId?: string;
          contractId?: string;
          fingerprint?: string;
          persistedFingerprint?: string;
          recomputedAfterValidate?: string;
          projectionFingerprint?: string;
          action?: string;
          target?: string;
          stopConditions?: string[];
          requiredCapabilities?: string[];
          reversibility?: string;
          status?: string;
          version?: number;
          proposalPresentInProcessB?: boolean;
          projectionOnly?: boolean;
          executionAllowed?: boolean;
          cursorReal?: boolean;
          gateD?: string;
          selectedAgentRef?: string | null;
          attemptCreated?: boolean;
        };
        expect(prepared.ok).toBe(true);
        expect(prepared.proposalPresentInProcessB).toBe(false);
        expect(prepared.decisionId).toBe(decisionId);
        expect(prepared.action).toBe("m3-e2e-requested-operation");
        expect(prepared.action).not.toMatch(/^prepare-from-decision:/);
        expect(prepared.target).toBe("UNRESOLVED_TARGET");
        expect(prepared.target).not.toMatch(/^cycle:|^project:/);
        expect(prepared.requiredCapabilities).toEqual(["cap:unresolved"]);
        expect(prepared.requiredCapabilities).not.toContain(
          "cap:m3-prepare-from-decision",
        );
        expect(prepared.stopConditions).toEqual(
          expect.arrayContaining([
            "TARGET_UNRESOLVED",
            "CAPABILITY_UNRESOLVED",
            "REVERSIBILITY_UNRESOLVED",
          ]),
        );
        expect(prepared.reversibility).toBe("irreversible");
        expect(prepared.fingerprint).toMatch(/^[a-f0-9]{64}$/);
        expect(prepared.persistedFingerprint).toBe(prepared.fingerprint);
        expect(prepared.recomputedAfterValidate).toBe(prepared.fingerprint);
        expect(prepared.projectionFingerprint).toBe(prepared.fingerprint);
        expect(prepared.status).not.toBe("draft");
        expect(prepared.projectionOnly).toBe(true);
        expect(prepared.executionAllowed).toBe(false);
        expect(prepared.cursorReal).toBe(false);
        expect(prepared.gateD).toBe("NOT_CONSUMED");
        expect(prepared.selectedAgentRef).toBeNull();
        expect(prepared.attemptCreated).toBe(false);

        const read = run("read", dbPath, projectId, [decisionId, proposalId]);
        expect(read.status, read.stderr || read.stdout).toBe(0);
        const reread = JSON.parse(read.stdout.trim()) as {
          ok: boolean;
          decisionId?: string;
          contractId?: string;
          fingerprint?: string;
          persistedFingerprint?: string;
          recomputedFingerprint?: string;
          projectionFingerprint?: string;
          proposalPresentInProcessC?: boolean;
          executionAllowed?: boolean;
          cursorReal?: boolean;
          gateD?: string;
          selectedAgentRef?: string | null;
        };
        expect(reread.ok).toBe(true);
        expect(reread.proposalPresentInProcessC).toBe(false);
        expect(reread.decisionId).toBe(decisionId);
        expect(reread.contractId).toBe(prepared.contractId);
        // PERSISTED = RECOMPUTED AFTER VALIDATE = RECOMPUTED AFTER RESTART = PROJECTION
        expect(reread.persistedFingerprint).toBe(prepared.fingerprint);
        expect(reread.recomputedFingerprint).toBe(prepared.fingerprint);
        expect(reread.projectionFingerprint).toBe(prepared.fingerprint);
        expect(reread.fingerprint).toBe(prepared.fingerprint);
        expect(reread.executionAllowed).toBe(false);
        expect(reread.cursorReal).toBe(false);
        expect(reread.gateD).toBe("NOT_CONSUMED");
        expect(reread.selectedAgentRef).toBeNull();
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    120_000,
  );
});
