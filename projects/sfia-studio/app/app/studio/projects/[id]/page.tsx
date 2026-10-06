"use client";

import { use, useState } from "react";
import {
  ProductShell,
  ProjectWorkspacePage,
} from "@/features/pre-m6-product-ui";

interface StudioProjectRouteProps {
  params: Promise<{ id: string }>;
}

/**
 * Workspace route — ProductShell owns the focused mobile topbar name once the
 * workspace resolves the durable project title (P5-S07 CP02 V4).
 */
export default function StudioProjectRoute({
  params,
}: StudioProjectRouteProps) {
  const { id } = use(params);
  const projectId = decodeURIComponent(id);
  const [mobileFocusProjectName, setMobileFocusProjectName] = useState<
    string | null
  >(null);

  return (
    <ProductShell
      activeNav="current"
      currentProjectHref={`/studio/projects/${encodeURIComponent(projectId)}`}
      mobileFocusProjectName={mobileFocusProjectName}
    >
      <ProjectWorkspacePage
        projectId={projectId}
        onProjectName={setMobileFocusProjectName}
      />
    </ProductShell>
  );
}
