import type { ExecutionState } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

const ALLOWED: Record<ExecutionState, ExecutionState[]> = {
  CREATED: ["CONTRACT_VALIDATED", "REJECTED", "FAILED"],
  CONTRACT_VALIDATED: ["AWAITING_GATE", "REJECTED", "FAILED"],
  AWAITING_GATE: ["AUTHORIZED", "REJECTED", "STOP_REQUESTED", "FAILED"],
  AUTHORIZED: ["RUNNING", "REJECTED", "STOP_REQUESTED", "FAILED"],
  RUNNING: ["COMPLETED", "REJECTED", "STOP_REQUESTED", "FAILED"],
  STOP_REQUESTED: ["CLOSED", "FAILED"],
  REJECTED: ["CLOSED"],
  FAILED: ["CLOSED"],
  COMPLETED: ["CLOSED"],
  CLOSED: [],
};

export class StateMachine {
  constructor(private state: ExecutionState = "CREATED") {}

  get current(): ExecutionState {
    return this.state;
  }

  canTransition(to: ExecutionState): boolean {
    return ALLOWED[this.state].includes(to);
  }

  transition(to: ExecutionState): { from: ExecutionState; to: ExecutionState } {
    if (!this.canTransition(to)) {
      throw new HarnessError(
        "STATE_TRANSITION_DENIED",
        `Illegal transition ${this.state} → ${to}`,
        { from: this.state, to },
      );
    }
    const from = this.state;
    this.state = to;
    return { from, to };
  }
}
