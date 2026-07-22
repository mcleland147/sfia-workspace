import { listWorkspaceProjects } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";

export const dynamic = "force-dynamic";

export default function WorkspacePage() {
  try {
    const projects = listWorkspaceProjects();
    return <WorkspaceHomeView projects={projects} />;
  } catch (error) {
    const message =
      error instanceof D1Error ? error.message : "Erreur de chargement workspace";
    return <WorkspaceHomeView projects={[]} error={message} />;
  }
}
