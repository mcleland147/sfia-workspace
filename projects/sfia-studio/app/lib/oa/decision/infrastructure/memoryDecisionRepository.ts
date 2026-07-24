import type { HumanDecision } from "../domain/types";
import type { DecisionRepositoryPort } from "../ports/decisionRepository";
import type { MemoryDecisionStore } from "./memoryDecisionStore";

export class MemoryDecisionRepository implements DecisionRepositoryPort {
  constructor(private readonly store: MemoryDecisionStore) {}

  async findById(decisionId: string): Promise<HumanDecision | null> {
    const found = this.store.decisions.get(decisionId);
    return found ? structuredClone(found) : null;
  }

  async exists(decisionId: string): Promise<boolean> {
    return this.store.decisions.has(decisionId);
  }

  async save(decision: HumanDecision): Promise<void> {
    if (this.store.failNextSave === "decision") {
      this.store.failNextSave = null;
      throw new Error("forced_decision_save_failure");
    }
    this.store.decisions.set(decision.decisionId, structuredClone(decision));
  }

  async listByProject(projectId: string): Promise<HumanDecision[]> {
    const out: HumanDecision[] = [];
    for (const d of this.store.decisions.values()) {
      if (d.projectId === projectId) {
        out.push(structuredClone(d));
      }
    }
    return out;
  }

  async listBySubject(subject: string): Promise<HumanDecision[]> {
    const out: HumanDecision[] = [];
    for (const d of this.store.decisions.values()) {
      if (d.subject === subject) {
        out.push(structuredClone(d));
      }
    }
    return out;
  }

  async listAcceptedBySubject(
    projectId: string,
    subject: string,
  ): Promise<HumanDecision[]> {
    const out: HumanDecision[] = [];
    for (const d of this.store.decisions.values()) {
      if (
        d.projectId === projectId &&
        d.subject === subject &&
        d.status === "accepted"
      ) {
        out.push(structuredClone(d));
      }
    }
    return out;
  }
}
