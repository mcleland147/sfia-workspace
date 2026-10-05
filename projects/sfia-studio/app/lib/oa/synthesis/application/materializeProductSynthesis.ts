import { SynthesisDomainError } from "../domain/errors";
import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";
import {
  buildProductSynthesis,
  type BuildProductSynthesisInput,
} from "./buildProductSynthesis";

export type MaterializeProductSynthesisInput = BuildProductSynthesisInput;

async function writeSuccessor(
  repository: SynthesisRepositoryPort,
  input: MaterializeProductSynthesisInput,
  prior: ProductSynthesisProjection,
  candidate: ProductSynthesisProjection,
): Promise<ProductSynthesisProjection> {
  await repository.softSupersede(prior.synthesisId);
  const successor = buildProductSynthesis({
    ...input,
    supersedes: prior.synthesisId,
    version: prior.version + 1,
    generatedAt: candidate.generatedAt,
    synthesisId: candidate.synthesisId,
  });
  await repository.create(successor);
  return successor;
}

export async function materializeProductSynthesis(
  repository: SynthesisRepositoryPort,
  input: MaterializeProductSynthesisInput,
): Promise<ProductSynthesisProjection> {
  if (!input.claimEvaluation) {
    throw new SynthesisDomainError(
      "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
    );
  }

  const candidate = buildProductSynthesis(input);

  const byFingerprint = await repository.findByFingerprint(
    candidate.projectId,
    candidate.sourceFingerprint,
  );
  if (byFingerprint && byFingerprint.status === "current") {
    return byFingerprint;
  }

  const priorCurrent = await repository.findCurrentByClaimEvaluationId(
    candidate.projectId,
    candidate.sourceBindings.claimEvaluationId,
  );

  if (
    priorCurrent &&
    priorCurrent.sourceFingerprint !== candidate.sourceFingerprint
  ) {
    return writeSuccessor(repository, input, priorCurrent, candidate);
  }

  // CE-B supersedesClaimEvaluationId = CE-A → Synthesis-B supersedes Synthesis-A
  const supersededCeId = input.claimEvaluation.supersedesClaimEvaluationId;
  if (supersededCeId) {
    const priorFromSupersededCe =
      await repository.findCurrentByClaimEvaluationId(
        candidate.projectId,
        supersededCeId,
      );
    if (
      priorFromSupersededCe &&
      priorFromSupersededCe.sourceFingerprint !== candidate.sourceFingerprint
    ) {
      return writeSuccessor(
        repository,
        input,
        priorFromSupersededCe,
        candidate,
      );
    }
  }

  await repository.create(candidate);
  return candidate;
}
