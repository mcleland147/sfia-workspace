/**
 * REAL Cursor allowlist — generalist | read-only | local-commit | push | PR create | PR merge.
 * Product missions use the generalist. Git ports keep their bounded agents.
 */
import type { AgentDescriptor } from "../domain/types";
import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
import { isM4BoundedPrCreateRealAgent } from "./m4BoundedPrCreateCursorAgent";
import { isM4BoundedPrMergeRealAgent } from "./m4BoundedPrMergeCursorAgent";
import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";
import { isM4BoundedRemotePushRealAgent } from "./m4BoundedRemotePushCursorAgent";
import { isStudioCursorGeneralistRealAgent } from "./studioCursorGeneralistAgent";

export function isM4AuthorizedCursorRealAgent(
  agent: AgentDescriptor,
): boolean {
  return (
    isStudioCursorGeneralistRealAgent(agent) ||
    isM4BoundedReadOnlyRealAgent(agent) ||
    isM4BoundedLocalCommitRealAgent(agent) ||
    isM4BoundedRemotePushRealAgent(agent) ||
    isM4BoundedPrCreateRealAgent(agent) ||
    isM4BoundedPrMergeRealAgent(agent)
  );
}
