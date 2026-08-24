/**
 * W3-B SystemGovernedStop — TD-W3B-03/04 unit proofs.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
import {
  buildStack,
  seedConfirmedContract,
  seedRunningAttempt,
  selectStandardAgent,
} from "./helpers";

describe("SystemGovernedStop", () => {
  it("refuses pre-running accepted attempt", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
      attemptId: "xat:sys:1",
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;

    const stopped = await stack.attempts.systemGovernedStop.execute({
      attemptId: "xat:sys:1",
      stopCode: "EXECUTOR_INSUFFICIENT",
      stopSourceRef: "guard:test",
      reason: "EXECUTOR_INSUFFICIENT",
    });
    expect(stopped.ok).toBe(false);
    if (stopped.ok) return;
    expect(stopped.error.detailCode).toBe("ATTEMPT_STATE_CONFLICT");
  });

  it("running attempt → cancelled with SYSTEM_GOVERNED_STOP provenance", async () => {
    const stack = buildStack();
    const { attemptId } = await seedRunningAttempt(stack, "xat:sys:2");

    const stopped = await stack.attempts.systemGovernedStop.execute({
      attemptId,
      stopCode: "EXECUTOR_INSUFFICIENT",
      stopSourceRef: "guard:test:2",
      reason: "EXECUTOR_INSUFFICIENT",
    });
    expect(stopped.ok).toBe(true);
    if (!stopped.ok) return;
    expect(stopped.attempt.status).toBe("cancelled");
    expect(stopped.attempt.stopOrigin).toBe("SYSTEM_GOVERNED_STOP");
    expect(stopped.attempt.stopCode).toBe("EXECUTOR_INSUFFICIENT");
    expect(stopped.attempt.stopSourceRef).toBe("guard:test:2");
    expect(stopped.attempt.selectedAgentRef).toBeTruthy();
    void F3_ADAPTER_ID;
  });
});
