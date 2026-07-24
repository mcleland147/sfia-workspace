import type {
  DoctrineResolveRequest,
  DoctrineResolveResult,
} from "../domain/types";

export interface DoctrinePackageResolverPort {
  resolve(request: DoctrineResolveRequest): Promise<DoctrineResolveResult>;
}
