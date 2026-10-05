import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";

export async function searchProductSyntheses(
  repository: SynthesisRepositoryPort,
  projectId: string,
  query: string,
): Promise<ProductSynthesisProjection[]> {
  return repository.searchByProject(projectId, query);
}
