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

function sameAllowlist(a: string[] | undefined, b: string[] | undefined): boolean {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

export class GateValidator {
  private consumedDecisionIds = new Set<string>();

  validate(input: {
    gate: GateDecision;
    contract: ExecutionContract;
    expectedHash: string;
    /** Current branch at revalidation time (Increment B). */
    expectedBranch?: string;
    /** Current HEAD at revalidation time (Increment B). */
    expectedHead?: string;
    now?: Date;
  }): GateValidationResult {
    const { gate, contract, expectedHash } = input;
    const now = input.now ?? new Date();

    if (gate.requestId !== contract.requestId) {
      return fail("GATE_REQUEST_MISMATCH", "requestId mismatch");
    }
    if (!gate.decision) {
      return fail("GATE_DECISION_MISSING", "decision required");
    }
    if (
      gate.decision !== "GO" &&
      gate.decision !== "STOP" &&
      gate.decision !== "CORRIGER" &&
      gate.decision !== "CLOSE" &&
      gate.decision !== "NO-GO"
    ) {
      return fail("GATE_DECISION_INVALID", "decision not explicit");
    }
    if (!gate.decidedBy || gate.decidedBy.trim() === "") {
      return fail("GATE_DECIDER_MISSING", "decidedBy required — Morris decision absent");
    }
    const allow = contract.decidedByAllowlist ?? ["Morris"];
    if (!allow.includes(gate.decidedBy)) {
      return fail("GATE_DECIDER_UNAUTHORIZED", `decidedBy not allowed: ${gate.decidedBy}`);
    }

    // STOP short-circuits structural GO checks after identity/decider checks
    if (gate.decision === "STOP") {
      return { ok: true };
    }

    if (gate.contractHash !== expectedHash) {
      return fail("GATE_HASH_MISMATCH", "contractHash mismatch — GO invalidated");
    }

    if (input.expectedBranch !== undefined) {
      if (!gate.gitBranch) {
        return fail("GATE_BRANCH_MISSING", "GO missing gitBranch anchor");
      }
      if (gate.gitBranch !== input.expectedBranch) {
        return fail("GATE_BRANCH_MISMATCH", "branch changed — GO invalidated");
      }
    }

    if (input.expectedHead !== undefined) {
      if (!gate.gitHead) {
        return fail("GATE_HEAD_MISSING", "GO missing gitHead anchor");
      }
      if (gate.gitHead !== input.expectedHead) {
        return fail("GATE_HEAD_MISMATCH", "HEAD changed — GO invalidated");
      }
    }

    if (gate.allowlistSnapshot) {
      if (!sameAllowlist(gate.allowlistSnapshot, contract.allowedPaths)) {
        return fail("GATE_ALLOWLIST_MISMATCH", "allowlist changed — GO invalidated");
      }
    }

    if (this.consumedDecisionIds.has(gate.decisionId) && gate.decision === "GO") {
      return fail("GATE_REPLAY", "GO already consumed — no automatic retry");
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
