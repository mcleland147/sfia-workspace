import { listWorkspaceProjects } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import { IntakeView } from "@/features/d1/intake/IntakeView";

export const dynamic = "force-dynamic";

/** D1-C1: conversational intake is the primary Nouvelle demande surface. */
export default function NouvelleDemandePage() {
  try {
    const projects = listWorkspaceProjects();
    return <IntakeView projects={projects} />;
  } catch (error) {
    const message =
      error instanceof D1Error
        ? error.message
        : "Erreur de chargement des projets récents";
    // Still render intake; empty resume with soft error via empty list
    void message;
    return <IntakeView projects={[]} />;
  }
}
