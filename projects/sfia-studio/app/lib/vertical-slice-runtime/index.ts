import "./serverGuard";

export {
  RUNTIME_DISCLOSURES,
  RUNTIME_DISCLOSURE_MESSAGES,
  RUNTIME_READINESS_NOT_READY,
  type RuntimeDisclosures,
  type RuntimeReadinessProjection,
} from "./disclosures";
export {
  toCreateLocalProjectCommand,
  toCreateProjectRuntimeFailure,
  toCreateProjectRuntimeSuccess,
  toGetProjectRuntimeFailure,
  toGetProjectRuntimeSuccess,
  toListProjectsRuntimeFailure,
  toListProjectsRuntimeSuccess,
  toRuntimeErrorDto,
  toRuntimeProjectListItem,
  toRuntimeProjectState,
} from "./mapping";
export { resolveDefaultVerticalSliceRoots, resolveProductDoctrineRegistryRoot } from "./paths";
export {
  RuntimeApplicationService,
  createRuntimeApplicationService,
  type RuntimeApplicationServiceOptions,
  type RuntimeAuditMode,
  type RuntimeOaStack,
} from "./service";
export {
  composeStudioProductRealBoundary,
  findGitToplevelByDotGit,
  resolveComposeManagedRepoRootBase,
  resolveStudioSfiaExecRoot,
  type ComposeStudioProductRealBoundaryInput,
} from "./composeStudioProductRealBoundary";
export {
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "./managedRepoRootBaseConfig";
export {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "./resolveBoundedReadOnlyBaseHeadSha";
export {
  readLiveProjectContext,
  type LiveProjectContext,
} from "./liveProjectContext";
export {
  getRuntimeApplicationService,
  isRuntimeApplicationServiceInitialized,
  resetRuntimeApplicationServiceForTests,
} from "./singleton";
export type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
  RuntimeCriticality,
  RuntimeDoctrineState,
  RuntimeErrorDto,
  RuntimeLivingProjectState,
  RuntimeProjectListItem,
  RuntimeProjectState,
} from "./types";
