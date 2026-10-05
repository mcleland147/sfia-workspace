import type { ProductSqliteHandle } from "@/lib/oa/project";
import {
  buildProductSynthesis,
  type BuildProductSynthesisInput,
} from "../../application/buildProductSynthesis";
import { materializeProductSynthesis } from "../../application/materializeProductSynthesis";
import { rebuildProductSynthesis } from "../../application/rebuildProductSynthesis";
import { searchProductSyntheses } from "../../application/searchProductSyntheses";
import type { ProductSynthesisProjection } from "../../domain/types";
import type { SynthesisRepositoryPort } from "../../ports/synthesisRepositoryPort";
import { SqliteSynthesisRepository } from "./sqliteSynthesisRepository";

export type CreateSqliteSynthesisServicesOptions = {
  productStore: ProductSqliteHandle;
};

export type SqliteSynthesisServices = {
  repository: SynthesisRepositoryPort;
  build: (input: BuildProductSynthesisInput) => ProductSynthesisProjection;
  materialize: (
    input: BuildProductSynthesisInput,
  ) => Promise<ProductSynthesisProjection>;
  search: (
    projectId: string,
    query: string,
  ) => Promise<ProductSynthesisProjection[]>;
  rebuild: (
    projectId: string,
    lineage: readonly BuildProductSynthesisInput[],
  ) => Promise<ProductSynthesisProjection[]>;
};

export function createSqliteSynthesisServices(
  options: CreateSqliteSynthesisServicesOptions,
): SqliteSynthesisServices {
  const repository = new SqliteSynthesisRepository(options.productStore);
  return {
    repository,
    build: buildProductSynthesis,
    materialize: (input) => materializeProductSynthesis(repository, input),
    search: (projectId, query) =>
      searchProductSyntheses(repository, projectId, query),
    rebuild: (projectId, lineage) =>
      rebuildProductSynthesis(repository, projectId, lineage),
  };
}
