import { StudioShell } from "@/components/shell/StudioShell";
import { ProjectAssistantPanel } from "@/features/project-assistant";
import { ProjectWorkspaceClient } from "@/features/vertical-slice-ui/ProjectWorkspaceClient";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import styles from "@/features/vertical-slice-ui/project-workspace.module.css";
import type { StudioShellRoute } from "@/lib/navigation";

interface ProjectWorkspacePageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectWorkspacePage({
  params,
}: ProjectWorkspacePageProps) {
  const { id } = await params;
  const projectId = decodeURIComponent(id);
  const activeRoute =
    `/studio/projects/${projectId}` as StudioShellRoute;

  return (
    <StudioShell
      variant="flush"
      activeRoute={activeRoute}
      title="Espace projet"
      showTabs={false}
      primaryAction={null}
      pills={[
        { label: "LOCAL_PROCESS", tone: "orange" },
        { label: "NOT_READY", tone: "orange" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Assistant projet",
        subtitle: "Analyse · conversation · lecture seule",
        avatarTone: "purple",
        levelPill: "F1 · Aucune exécution",
        summary:
          "Assistant contextualisé au Project/LPS — sans OPS1, sans Cursor, sans écriture.",
        interactiveContent: <ProjectAssistantPanel projectId={projectId} />,
      }}
    >
      <div className={styles.page}>
        <RuntimeDisclosureBanner surface="workspace" />
        <ProjectWorkspaceClient projectId={projectId} />
      </div>
    </StudioShell>
  );
}
