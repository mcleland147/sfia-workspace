/**
 * Guard for applying durable GET revalidation results.
 * Reject stale responses BEFORE any React state mutation.
 *
 * A response is applicable only when:
 * - its generation token still matches the latest requester generation, AND
 * - it targets the same project id currently mounted.
 *
 * Navigation generation ≠ métier revision: we discard out-of-order reads for the
 * same surface refresh sequence / project identity, not because métier changed.
 */

export type DurableRefreshRequestIdentity = {
  generation: number;
  projectId: string;
};

export function shouldApplyDurableRefresh(input: {
  request: DurableRefreshRequestIdentity;
  currentGeneration: number;
  currentProjectId: string;
}): boolean {
  if (!input.request.projectId || !input.currentProjectId) return false;
  if (input.request.projectId !== input.currentProjectId) return false;
  if (input.request.generation !== input.currentGeneration) return false;
  return true;
}

/** One generation per read. A newer read, even a failed one, retires older responses. */
export function openProjectionRead(input: {
  currentGeneration: number;
  projectId: string;
}): { generation: number; request: DurableRefreshRequestIdentity } {
  const generation = input.currentGeneration + 1;
  return {
    generation,
    request: { generation, projectId: input.projectId },
  };
}

export function projectionReadApplies(input: {
  request: DurableRefreshRequestIdentity;
  latestGeneration: number;
  currentProjectId: string;
}): boolean {
  return shouldApplyDurableRefresh({
    request: input.request,
    currentGeneration: input.latestGeneration,
    currentProjectId: input.currentProjectId,
  });
}
