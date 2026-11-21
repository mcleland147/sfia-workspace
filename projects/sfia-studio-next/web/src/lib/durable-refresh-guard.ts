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
