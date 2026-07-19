import type { CursorInstruction, CursorResult } from "../types/contracts.js";

export interface CursorExecutorPort {
  execute(instruction: CursorInstruction): Promise<CursorResult>;
}
