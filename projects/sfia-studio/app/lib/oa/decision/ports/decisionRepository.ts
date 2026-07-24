import type { HumanDecision } from "../domain/types";

export interface DecisionRepositoryPort {
  findById(decisionId: string): Promise<HumanDecision | null>;
  exists(decisionId: string): Promise<boolean>;
  save(decision: HumanDecision): Promise<void>;
  listByProject(projectId: string): Promise<HumanDecision[]>;
  listBySubject(subject: string): Promise<HumanDecision[]>;
  /** Accepted decisions for subject within a project (one-current invariant). */
  listAcceptedBySubject(
    projectId: string,
    subject: string,
  ): Promise<HumanDecision[]>;
}
