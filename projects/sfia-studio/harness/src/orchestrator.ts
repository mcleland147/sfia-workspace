import { randomUUID } from "node:crypto";
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
import { GateValidator, assertGateOk } from "./gate/gateValidator.js";
import { PolicyEngine } from "./policy/policyEngine.js";
import { GitReaderImpl, denyWriteOp } from "./ports/gitReaderImpl.js";
import { CursorExecutorPortFixture } from "./ports/cursorFixture.js";
import { EventJournal } from "./journal/eventJournal.js";
import { ProofStore } from "./proof/proofStore.js";

export interface RunInput {
  request: POCRequest;
  contract: ExecutionContract;
  gate: GateDecision;
  stopAfterAuthorize?: boolean;
  cursorSimulate?: "success" | "timeout" | "error";
  attemptForbiddenGit?: boolean;
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
}

export class Orchestrator {
  readonly gateValidator = new GateValidator();
  readonly policy = new PolicyEngine();

  async run(input: RunInput): Promise<RunResult> {
    const correlationId = randomUUID();
    const executionId = randomUUID();
    const machine = new StateMachine("CREATED");
    const journal = new EventJournal(input.contract.proofDir, correlationId);
    const proofs = new ProofStore(input.contract.proofDir);
    const gitResults: GitCommandResult[] = [];

    const log = (
      eventType: string,
      fields: Partial<Parameters<EventJournal["append"]>[0]> & { result?: string; errorCode?: string },
    ) => {
      journal.append({
        eventType,
        requestId: input.request.requestId,
        executionId,
        contractHash: computeContractHash(input.contract),
        stateBefore: machine.current,
        ...fields,
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
        machine.transition("STOP_REQUESTED");
        log("gate.stop", { stateAfter: "STOP_REQUESTED", result: "stop" });
        machine.transition("CLOSED");
        log("execution.closed", { stateAfter: "CLOSED", result: "stopped_before_run" });
        return finish(false, "CLOSED", hash, "GATE_STOP");
      }

      const gateResult = this.gateValidator.validate({
        gate: input.gate,
        contract: input.contract,
        expectedHash: hash,
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
        log("execution.stopped", { stateAfter: "STOP_REQUESTED", result: "stop" });
        machine.transition("CLOSED");
        log("execution.closed", { stateAfter: "CLOSED", result: "stopped" });
        proofs.writeJson("stop.json", { reason: "explicit_stop", at: new Date().toISOString() });
        return finish(false, "CLOSED", hash, "STOP");
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
        machine.transition("FAILED");
        log("execution.failed", { stateAfter: "FAILED", result: "failed", errorCode: cursorResult.errorCode });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, cursorResult.errorCode, cursorResult);
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
      };
      proofs.writeJson("summary.json", summary);
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
      };
    }
  }
}

export function validateContractOnly(contract: ExecutionContract): { hash: string } {
  const policy = new PolicyEngine();
  policy.assertContract(contract);
  return { hash: computeContractHash(contract) };
}
