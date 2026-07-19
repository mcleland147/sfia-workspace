import type { GitCommandResult, GitOp } from "../types/contracts.js";

export interface GitReaderPort {
  run(op: GitOp): Promise<GitCommandResult>;
}
