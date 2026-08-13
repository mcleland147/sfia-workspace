import "./serverGuard";
import type { RuntimeOaStack } from "./service";

/**
 * Live Project/LPS/cycle linkage reader for F2 (M2).
 * Authority = RuntimeOaStack Product SQLite — not UI components.
 */
export type LiveProjectContext = {
  readonly projectId: string;
  readonly projectTitle: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly doctrinePackageId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
  readonly objective: string;
  readonly context: string | undefined;
  readonly scope: string | undefined;
  readonly activeCycleInstanceId: string | null;
  readonly ckcResolutionRef: string | null;
};

export async function readLiveProjectContext(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; context: LiveProjectContext }
  | { ok: false; code: string; message: string }
> {
  const [projectResult, lpsResult] = await Promise.all([
    oa.projectServices.getProject.execute({ projectId }),
    oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
  ]);
  if (!projectResult.ok) {
    return {
      ok: false,
      code: projectResult.error.detailCode,
      message: "Project introuvable dans Product SQLite.",
    };
  }
  if (!lpsResult.ok) {
    return {
      ok: false,
      code: lpsResult.error.detailCode,
      message: "Living Project State courant introuvable.",
    };
  }

  const project = projectResult.project;
  const lps = lpsResult.livingProjectState;
  const doctrine = lps.doctrinePackageRef;

  return {
    ok: true,
    context: {
      projectId: project.projectId,
      projectTitle: project.title,
      lpsId: lps.lpsVersionId,
      lpsVersion: lps.version,
      doctrineDigest: doctrine.digest,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrineVersion: doctrine.version,
      doctrineStatus: doctrine.status,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      activeCycleInstanceId:
        lps.activeCycleInstanceId ?? project.activeCycleInstanceId ?? null,
      ckcResolutionRef: lps.ckcResolutionRef ?? null,
    },
  };
}
