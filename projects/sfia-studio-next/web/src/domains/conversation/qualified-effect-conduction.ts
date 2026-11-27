/**
 * D3 internal sequencing of already-qualified integrated owner effects.
 *
 * Scope: d4.record_knowledge / d5.pilotage_command / d6.human_decision.
 * Organises intents Nora already qualified — not an autonomous orchestrator,
 * not a second qualification, not a new persistence pivot (ARCH-01…05).
 */

import type { NoraTurnQualification, QualifiedIntentItem } from "./semantic-qualification";
import { effectIntents } from "./semantic-qualification";

export const INTEGRATED_KNOWLEDGE_CAPABILITY = "d4.record_knowledge" as const;
export const INTEGRATED_PILOTAGE_CAPABILITIES = new Set([
  "d5.pilotage_command",
  "d6.human_decision",
] as const);

export type IntegratedEffectFamily = "knowledge" | "pilotage";

/** Owner outcomes that satisfy a dependsOn precondition (never PARTIAL/FAILED/SKIPPED/UNKNOWN). */
export function isSatisfiedOwnerOutcome(status: string | undefined | null): boolean {
  const u = (status ?? "").toUpperCase();
  return (
    u === "APPLIED" ||
    u === "ALREADY_APPLIED" ||
    u === "AVAILABLE" ||
    u === "OK" ||
    u === "SUCCESS"
  );
}

export function integratedEffectFamily(
  capabilityId: string,
): IntegratedEffectFamily | null {
  if (capabilityId === INTEGRATED_KNOWLEDGE_CAPABILITY) return "knowledge";
  if (
    capabilityId === "d5.pilotage_command" ||
    capabilityId === "d6.human_decision"
  ) {
    return "pilotage";
  }
  return null;
}

/** REQUEST_EFFECT intents in the integrated D4-knowledge / D5 / D6 perimeter. */
export function listIntegratedEffectIntents(
  q: NoraTurnQualification,
): QualifiedIntentItem[] {
  return effectIntents(q).filter((i) => integratedEffectFamily(i.capabilityId) !== null);
}

/**
 * Stable topological order among a subset (dependsOn within subset only).
 * Cycles are skipped into the result (caller marks FAILED via validation/DFS).
 */
export function orderIntegratedEffectIntents(
  q: NoraTurnQualification,
  hits: QualifiedIntentItem[],
): QualifiedIntentItem[] {
  const subset = new Set(hits.map((h) => h.id));
  const byId = new Map(q.intents.map((i) => [i.id, i] as const));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const ordered: string[] = [];
  const visit = (id: string) => {
    if (!subset.has(id) || visited.has(id)) return;
    if (visiting.has(id)) return;
    visiting.add(id);
    for (const dep of byId.get(id)?.dependsOn ?? []) {
      if (subset.has(dep)) visit(dep);
    }
    visiting.delete(id);
    visited.add(id);
    ordered.push(id);
  };
  for (const id of [...subset].sort()) visit(id);
  return ordered.map((id) => hits.find((h) => h.id === id)!);
}

export type IntegratedWavePlan = {
  /** Intents whose dependsOn are all satisfied (or empty) — ready this wave. */
  ready: string[];
  /** Permanently blocked this pass (unsatisfied / hors-périmètre / ambiguous dep). */
  blocked: Array<{ id: string; reason: string }>;
};

/**
 * Plan the next conduction wave from pending integrated intents.
 * Does not invoke owners — pure sequencing.
 */
export function planIntegratedEffectWave(input: {
  pendingIds: Iterable<string>;
  /** Stable preferred order (typically topo). */
  orderedIds: string[];
  dependsOn: Map<string, string[]>;
  outcomes: Map<string, string>;
  /** All integrated intent ids on the turn (knowledge + pilotage). */
  integratedIds: Set<string>;
}): IntegratedWavePlan {
  const pending = new Set(input.pendingIds);
  const ready: string[] = [];
  const blocked: Array<{ id: string; reason: string }> = [];

  for (const id of input.orderedIds) {
    if (!pending.has(id)) continue;
    const deps = input.dependsOn.get(id) ?? [];
    let waiting = false;
    let blockReason: string | null = null;

    for (const dep of deps) {
      if (pending.has(dep)) {
        waiting = true;
        break;
      }
      const prior = input.outcomes.get(dep);
      if (prior !== undefined) {
        if (prior === "AMBIGUOUS") {
          blockReason = `L'intention prérequis (${dep}) est ambiguë — effet dépendant non lancé.`;
          break;
        }
        if (!isSatisfiedOwnerOutcome(prior)) {
          blockReason =
            `L'acte prérequis (${dep}) n'est pas appliqué (${prior}) — ` +
            `effet dépendant non exécuté.`;
          break;
        }
        continue;
      }
      if (input.integratedIds.has(dep)) {
        // Integrated peer not yet outcome and not pending → stuck; wait once more.
        waiting = true;
        break;
      }
      blockReason =
        `Dépendance (${dep}) hors intentions intégrées D4-connaissance/D5/D6 — ` +
        `précondition non satisfaite par un propriétaire vérifiable; effet dépendant non exécuté.`;
      break;
    }

    if (blockReason) {
      blocked.push({ id, reason: blockReason });
      continue;
    }
    if (waiting) continue;
    ready.push(id);
  }

  return { ready, blocked };
}

export function partitionWaveByFamily(
  readyIds: string[],
  familyById: Map<string, IntegratedEffectFamily>,
): { knowledgeIds: string[]; pilotageIds: string[] } {
  const knowledgeIds: string[] = [];
  const pilotageIds: string[] = [];
  for (const id of readyIds) {
    const family = familyById.get(id);
    if (family === "knowledge") knowledgeIds.push(id);
    else if (family === "pilotage") pilotageIds.push(id);
  }
  return { knowledgeIds, pilotageIds };
}
