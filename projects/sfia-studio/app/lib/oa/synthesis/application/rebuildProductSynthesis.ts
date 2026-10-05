import type { ProductSynthesisProjection } from "../domain/types";
import type { SynthesisRepositoryPort } from "../ports/synthesisRepositoryPort";
import {
  materializeProductSynthesis,
  type MaterializeProductSynthesisInput,
} from "./materializeProductSynthesis";

export type RebuildProductSynthesisLineage = MaterializeProductSynthesisInput;

/**
 * Test/rebuild helper: deletes all derived syntheses for a project, then
 * rematerializes from provided lineage. Never deletes Truth C objects.
 */
export async function rebuildProductSynthesis(
  repository: SynthesisRepositoryPort,
  projectId: string,
  lineage: readonly RebuildProductSynthesisLineage[],
): Promise<ProductSynthesisProjection[]> {
  await repository.deleteAllByProject(projectId);
  const out: ProductSynthesisProjection[] = [];
  for (const item of lineage) {
    if (item.projectId !== projectId) {
      continue;
    }
    out.push(await materializeProductSynthesis(repository, item));
  }
  return out;
}
