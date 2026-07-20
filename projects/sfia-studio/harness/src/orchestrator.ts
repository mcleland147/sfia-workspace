import { randomUUID } from "node:crypto";
import { unlinkSync, existsSync } from "node:fs";
import path from "node:path";
import type {
  ExecutionContract,
  GateDecision,
  POCRequest,
  CursorResult,
  GitCommandResult,
} from "./types/contracts.js";
import { HarnessError } from "./types/contracts.js";
import { computeContractHash } from "./hash/contractHash.js";
import { StateMachine } from "./state/machine.js";
import { GateValidator } from "./gate/gateValidator.js";
import { PolicyEngine } from "./policy/policyEngine.js";
import { GitReaderImpl, denyWriteOp } from "./ports/gitReaderImpl.js";
import { CursorExecutorPortFixture } from "./ports/cursorFixture.js";
import { EventJournal } from "./journal/eventJournal.js";
import { ProofStore } from "./proof/proofStore.js";
import { verifyProofPack } from "./proof/verifyProofPack.js";

export interface RunInput {
  request: POCRequest;
  contract: ExecutionContract;
  gate: GateDecision;
  stopAfterAuthorize?: boolean;
  cursorSimulate?: "success" | "timeout" | "error";
  attemptForbiddenGit?: boolean;
  /** Current branch for GO anchor revalidation (Increment B). */
  expectedBranch?: string;
  /** Current HEAD for GO anchor revalidation (Increment B). */
  expectedHead?: string;
  /** Re-check GO anchors immediately before fixture cursor execution. */
  revalidateBeforeExecute?: boolean;
  /** Skip writing summary.json — blocks successful proof pack. */
  simulateIncompleteReport?: boolean;
  /** Remove a core proof artifact after run path — blocks progression. */
  simulateMissingProof?: boolean;
  /** Attempt to invoke non-fixture cursor mode — must fail closed. */
  attemptLiveCursor?: boolean;
  /** Prefer Studio correlation when provided (adapter forward). */
  studioCorrelationId?: string;
}

export interface RunResult {
  ok: boolean;
  terminalState: string;
  contractHash: string;
  executionId: string;
  correlationId: string;
  proofDir: string;
  journalPath: string;
  gitResults: GitCommandResult[];
  cursor?: CursorResult;
  errorCode?: string;
  projectedState?: string;
  report?: Record<string, unknown> | null;
}

export class Orchestrator {
  readonly gateValidator = new GateValidator();
  readonly policy = new PolicyEngine();

  async run(input: RunInput): Promise<RunResult> {
    const correlationId = input.studioCorrelationId ?? randomUUID();
    const executionId = randomUUID();
    const machine = new StateMachine("CREATED");
    const journal = new EventJournal(input.contract.proofDir, correlationId);
    const proofs = new ProofStore(input.contract.proofDir);
    const gitResults: GitCommandResult[] = [];
    let report: Record<string, unknown> | null = null;

    const log = (
      eventType: string,
      fields: Partial<Parameters<EventJournal["append"]>[0]> & { result?: string; errorCode?: string },
    ) => {
      const { detail: fieldDetail, ...rest } = fields;
      journal.append({
        eventType,
        requestId: input.request.requestId,
        executionId,
        contractHash: computeContractHash(input.contract),
        stateBefore: machine.current,
        ...rest,
        detail: { source: "harness", ...(fieldDetail ?? {}) },
      });
    };

    try {
      this.policy.assertContract(input.contract);
      const hash = computeContractHash(input.contract);
      proofs.writeJson("contract.json", input.contract);
      proofs.writeText("contractHash.txt", `${hash}\n`);
      proofs.writeJson("request.json", input.request);
      proofs.writeJson("gate.json", input.gate);

      machine.transition("CONTRACT_VALIDATED");
      log("contract.validated", { stateAfter: "CONTRACT_VALIDATED", result: "ok" });

      machine.transition("AWAITING_GATE");
      log("gate.awaiting", { stateAfter: "AWAITING_GATE", result: "ok" });

      if (input.gate.decision === "STOP") {
        const stopGate = this.gateValidator.validate({
          gate: input.gate,
          contract: input.contract,
          expectedHash: hash,
          expectedBranch: input.expectedBranch,
          expectedHead: input.expectedHead,
        });
        if (!stopGate.ok) {
          machine.transition("REJECTED");
          log("gate.rejected", {
            stateAfter: "REJECTED",
            result: "rejected",
            errorCode: stopGate.code,
            detail: { message: stopGate.message },
          });
          machine.transition("CLOSED");
          return finish(false, "CLOSED", hash, stopGate.code);
        }
        machine.transition("STOP_REQUESTED");
        log("gate.stop", { stateAfter: "STOP_REQUESTED", result: "stop", errorCode: "GATE_STOP" });
        machine.transition("CLOSED");
        log("execution.closed", { stateAfter: "CLOSED", result: "stopped_before_run" });
        proofs.writeJson("stop.json", { reason: "morris_stop", at: new Date().toISOString() });
        return finish(false, "CLOSED", hash, "GATE_STOP");
      }

      const gateResult = this.gateValidator.validate({
        gate: input.gate,
        contract: input.contract,
        expectedHash: hash,
        expectedBranch: input.expectedBranch,
        expectedHead: input.expectedHead,
      });
      if (!gateResult.ok) {
        machine.transition("REJECTED");
        log("gate.rejected", {
          stateAfter: "REJECTED",
          result: "rejected",
          errorCode: gateResult.code,
          detail: { message: gateResult.message },
        });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, gateResult.code);
      }

      if (input.gate.decision === "NO-GO") {
        machine.transition("REJECTED");
        log("gate.rejected", {
          stateAfter: "REJECTED",
          result: "rejected",
          errorCode: "GATE_NO_GO",
          detail: { message: "Morris NO-GO — no execution" },
        });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, "GATE_NO_GO");
      }

      if (input.gate.decision !== "GO") {
        machine.transition("REJECTED");
        log("gate.rejected", {
          stateAfter: "REJECTED",
          result: "rejected",
          errorCode: "GATE_NOT_GO",
        });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, "GATE_NOT_GO");
      }

      this.gateValidator.consume(input.gate.decisionId);
      machine.transition("AUTHORIZED");
      log("gate.authorized", { stateAfter: "AUTHORIZED", result: "ok" });

      if (input.stopAfterAuthorize) {
        machine.transition("STOP_REQUESTED");
        log("execution.stopped", { stateAfter: "STOP_REQUESTED", result: "stop", errorCode: "STOP" });
        machine.transition("CLOSED");
        log("execution.closed", { stateAfter: "CLOSED", result: "stopped" });
        proofs.writeJson("stop.json", { reason: "explicit_stop", at: new Date().toISOString() });
        return finish(false, "CLOSED", hash, "STOP");
      }

      if (input.revalidateBeforeExecute) {
        const reval = this.revalidateGo(input, hash);
        if (!reval.ok) {
          machine.transition("REJECTED");
          log("gate.revalidation_failed", {
            stateAfter: "REJECTED",
            result: "rejected",
            errorCode: reval.code,
            detail: { message: reval.message },
          });
          machine.transition("CLOSED");
          return finish(false, "CLOSED", hash, reval.code);
        }
        log("gate.revalidated", { stateAfter: "AUTHORIZED", result: "ok" });
      }

      machine.transition("RUNNING");
      log("execution.running", { stateAfter: "RUNNING", result: "ok" });

      const git = new GitReaderImpl(input.contract, this.policy);
      if (input.attemptForbiddenGit) {
        try {
          this.policy.assertDeniedShellCommand("git push");
          denyWriteOp("push");
        } catch (err) {
          const he = err as HarnessError;
          log("git.denied", {
            stateAfter: "RUNNING",
            result: "denied",
            errorCode: he.code,
          });
          proofs.writeJson("git-denied.json", { code: he.code, message: he.message });
          machine.transition("REJECTED");
          log("execution.rejected", { stateAfter: "REJECTED", result: "denied", errorCode: he.code });
          machine.transition("CLOSED");
          return finish(false, "CLOSED", hash, he.code);
        }
      }

      const ops = [
        { op: "branch-show-current" as const },
        { op: "rev-parse" as const, ref: "HEAD" },
        { op: "status-short" as const },
      ];
      for (const op of ops) {
        if (!input.contract.allowedCommands.includes(op.op)) continue;
        const res = await git.run(op);
        gitResults.push(res);
        log("git.read", {
          stateAfter: "RUNNING",
          result: res.exitCode === 0 ? "ok" : "git_error",
          detail: { argv: res.argv, exitCode: res.exitCode },
        });
      }
      proofs.writeJson("git-results.json", gitResults);

      if (input.attemptLiveCursor) {
        log("security.refusal", {
          stateAfter: "RUNNING",
          result: "denied",
          errorCode: "LIVE_PORT_DENIED",
          detail: { message: "Live Cursor port refused — fixtures only" },
        });
        machine.transition("REJECTED");
        log("execution.rejected", {
          stateAfter: "REJECTED",
          result: "denied",
          errorCode: "LIVE_PORT_DENIED",
        });
        machine.transition("CLOSED");
        log("execution.closed", {
          stateAfter: "CLOSED",
          result: "denied",
          errorCode: "LIVE_PORT_DENIED",
        });
        return finish(false, "CLOSED", hash, "LIVE_PORT_DENIED");
      }

      const cursor = new CursorExecutorPortFixture();
      const cursorResult = await cursor.execute({
        requestId: input.request.requestId,
        executionId,
        mode: "fixture",
        objective: input.request.title,
        timeoutMs: input.contract.timeoutMs,
        simulate: input.cursorSimulate ?? "success",
      });
      proofs.writeJson("cursor-fixture.json", cursorResult);
      log("cursor.fixture", {
        stateAfter: "RUNNING",
        result: cursorResult.ok ? "ok" : "cursor_error",
        errorCode: cursorResult.errorCode,
        detail: { realCursorClaimed: false },
      });

      if (!cursorResult.ok) {
        // Timeout / error never become success
        machine.transition("FAILED");
        log("execution.failed", {
          stateAfter: "FAILED",
          result: "failed",
          errorCode: cursorResult.errorCode,
        });
        machine.transition("CLOSED");
        log("execution.closed", {
          stateAfter: "CLOSED",
          result: "failed",
          errorCode: cursorResult.errorCode,
        });
        return finish(false, "CLOSED", hash, cursorResult.errorCode, cursorResult);
      }

      if (input.simulateMissingProof) {
        const hashPath = path.join(input.contract.proofDir, "contractHash.txt");
        if (existsSync(hashPath)) unlinkSync(hashPath);
        const pack = verifyProofPack(input.contract.proofDir, { requireSuccessArtifacts: true });
        machine.transition("FAILED");
        log("proof.incomplete", {
          stateAfter: "FAILED",
          result: "failed",
          errorCode: "PROOF_INCOMPLETE",
          detail: { missing: pack.missing },
        });
        machine.transition("CLOSED");
        log("execution.closed", {
          stateAfter: "CLOSED",
          result: "failed",
          errorCode: "PROOF_INCOMPLETE",
        });
        return finish(false, "CLOSED", hash, "PROOF_INCOMPLETE", cursorResult);
      }

      if (input.simulateIncompleteReport) {
        machine.transition("FAILED");
        log("report.incomplete", {
          stateAfter: "FAILED",
          result: "failed",
          errorCode: "REPORT_INCOMPLETE",
          detail: { message: "summary.json not written — progression blocked" },
        });
        machine.transition("CLOSED");
        log("execution.closed", {
          stateAfter: "CLOSED",
          result: "failed",
          errorCode: "REPORT_INCOMPLETE",
        });
        return finish(false, "CLOSED", hash, "REPORT_INCOMPLETE", cursorResult);
      }

      machine.transition("COMPLETED");
      log("execution.completed", { stateAfter: "COMPLETED", result: "ok" });
      machine.transition("CLOSED");
      log("execution.closed", { stateAfter: "CLOSED", result: "completed" });

      const summary = {
        ok: true,
        contractHash: hash,
        executionId,
        correlationId,
        gitOps: gitResults.length,
        cursorMode: "fixture",
        realCursorClaimed: false,
        gitEffect: "none-remote",
        terminalState: "CLOSED",
        statusSource: "harness",
        mode: "fixture",
      };
      proofs.writeJson("summary.json", summary);
      report = summary;
      return finish(true, "CLOSED", hash, undefined, cursorResult);
    } catch (err) {
      const he = err as HarnessError;
      const code = he.code ?? "FAILED";
      try {
        if (machine.canTransition("FAILED")) machine.transition("FAILED");
        log("execution.failed", {
          stateAfter: machine.current,
          result: "failed",
          errorCode: code,
          detail: { message: he.message },
        });
        if (machine.canTransition("CLOSED")) machine.transition("CLOSED");
      } catch {
        /* ignore secondary */
      }
      return finish(false, machine.current, computeContractHash(input.contract), code);
    }

    function finish(
      ok: boolean,
      terminalState: string,
      contractHash: string,
      errorCode?: string,
      cursor?: CursorResult,
    ): RunResult {
      return {
        ok,
        terminalState,
        contractHash,
        executionId,
        correlationId,
        proofDir: input.contract.proofDir,
        journalPath: journal.filePath,
        gitResults,
        cursor,
        errorCode,
        projectedState: journal.projectLastState(),
        report,
      };
    }
  }

  private revalidateGo(
    input: RunInput,
    hash: string,
  ): { ok: true } | { ok: false; code: string; message: string } {
    const gate = input.gate;
    if (gate.contractHash !== hash) {
      return { ok: false, code: "GATE_HASH_MISMATCH", message: "revalidation hash mismatch" };
    }
    if (input.expectedBranch !== undefined && gate.gitBranch !== input.expectedBranch) {
      return { ok: false, code: "GATE_BRANCH_MISMATCH", message: "revalidation branch mismatch" };
    }
    if (input.expectedHead !== undefined && gate.gitHead !== input.expectedHead) {
      return { ok: false, code: "GATE_HEAD_MISMATCH", message: "revalidation HEAD mismatch" };
    }
    if (
      gate.allowlistSnapshot &&
      JSON.stringify([...gate.allowlistSnapshot].sort()) !==
        JSON.stringify([...input.contract.allowedPaths].sort())
    ) {
      return { ok: false, code: "GATE_ALLOWLIST_MISMATCH", message: "revalidation allowlist mismatch" };
    }
    return { ok: true };
  }
}

export function validateContractOnly(contract: ExecutionContract): { hash: string } {
  const policy = new PolicyEngine();
  policy.assertContract(contract);
  return { hash: computeContractHash(contract) };
}
