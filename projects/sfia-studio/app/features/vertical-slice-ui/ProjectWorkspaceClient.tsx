"use client";

import { useEffect, useState } from "react";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { ProjectWorkspaceView } from "./ProjectWorkspaceView";
import styles from "./project-workspace.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;

/**
 * Client loader: process-local V2-A1 state is reached through Server Actions,
 * matching Create Project. The V2-A1 singleton is process-anchored on globalThis
 * so create (/new) and get (/[id]) share the same in-memory store in one Node process.
 */
export function ProjectWorkspaceClient({ projectId }: { projectId: string }) {
  const [result, setResult] = useState<GetProjectResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    void getProjectRuntimeAction(projectId).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  if (!result) {
    return (
      <p className={styles.hint} data-testid="project-workspace-loading">
        Chargement de la projection locale…
      </p>
    );
  }

  return <ProjectWorkspaceView projectId={projectId} result={result} />;
}
