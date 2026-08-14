/**
 * TEST-ONLY ProcessRunner doubles — never spawn Cursor.
 * Not exported from product barrel.
 */
import type {
  ProcessRunner,
  ProcessRunnerInvokeInput,
  ProcessRunnerInvokeResult,
} from "@/lib/oa/execution-attempt";

export class FakeProcessRunner implements ProcessRunner {
  readonly calls: ProcessRunnerInvokeInput[] = [];
  /** SIMULATED TECHNICAL ACK counter — not a real Cursor invoke. */
  simulatedInvokeCount = 0;

  constructor(
    private readonly behavior: {
      realProcessInvoked?: boolean;
      processRef?: string;
      throwError?: boolean;
    } = {},
  ) {}

  async invoke(
    input: ProcessRunnerInvokeInput,
  ): Promise<ProcessRunnerInvokeResult> {
    this.calls.push(input);
    this.simulatedInvokeCount += 1;
    if (this.behavior.throwError) {
      throw new Error("fake_real_process_threw");
    }
    return {
      processRef: this.behavior.processRef ?? `proc:sim:${input.attemptId}`,
      // SIMULATED TECHNICAL ACK — not a live Cursor process.
      realProcessInvoked: this.behavior.realProcessInvoked ?? true,
    };
  }
}

/** @deprecated Prefer FakeProcessRunner. */
export { FakeProcessRunner as FakeRealProcessRunner };
