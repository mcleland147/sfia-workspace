import type { ExecutionContract, GateDecision } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

export interface GateValidationOk {
  ok: true;
}

export interface GateValidationFail {
  ok: false;
  code: string;
  message: string;
}

export type GateValidationResult = GateValidationOk | GateValidationFail;

export class GateValidator {
  private consumedDecisionIds = new Set<string>();

  validate(input: {
    gate: GateDecision;
    contract: ExecutionContract;
    expectedHash: string;
    now?: Date;
  }): GateValidationResult {
    const { gate, contract, expectedHash } = input;
    const now = input.now ?? new Date();

    if (gate.requestId !== contract.requestId) {
      return fail("GATE_REQUEST_MISMATCH", "requestId mismatch");
    }
    if (gate.contractHash !== expectedHash) {
      return fail("GATE_HASH_MISMATCH", "contractHash mismatch");
    }
    if (gate.decision !== "GO" && gate.decision !== "STOP" && gate.decision !== "CORRIGER" && gate.decision !== "CLOSE") {
      return fail("GATE_DECISION_INVALID", "decision not explicit");
    }
    if (!gate.decidedBy || gate.decidedBy.trim() === "") {
      return fail("GATE_DECIDER_MISSING", "decidedBy required");
    }
    const allow = contract.decidedByAllowlist ?? ["Morris"];
    if (!allow.includes(gate.decidedBy)) {
      return fail("GATE_DECIDER_UNAUTHORIZED", `decidedBy not allowed: ${gate.decidedBy}`);
    }
    if (this.consumedDecisionIds.has(gate.decisionId) && gate.decision === "GO") {
      return fail("GATE_REPLAY", "GO already consumed");
    }
    const expires = gate.expiresAt ?? contract.gateExpiresAt;
    if (expires && new Date(expires).getTime() < now.getTime()) {
      return fail("GATE_EXPIRED", "gate decision expired");
    }
    return { ok: true };
  }

  consume(decisionId: string): void {
    this.consumedDecisionIds.add(decisionId);
  }

  isConsumed(decisionId: string): boolean {
    return this.consumedDecisionIds.has(decisionId);
  }
}

function fail(code: string, message: string): GateValidationFail {
  return { ok: false, code, message };
}

export function assertGateOk(result: GateValidationResult): void {
  if (!result.ok) {
    throw new HarnessError(result.code, result.message);
  }
}
