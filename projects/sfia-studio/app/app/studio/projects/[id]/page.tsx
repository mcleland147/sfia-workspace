import { StudioShell } from "@/components/shell/StudioShell";
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
        name: "Nora · Project Copilot",
        subtitle: "Lecture seule · aucune autorité",
        avatarTone: "purple",
        levelPill: "Aucune décision",
        summary:
          "Je rappelle le contexte local du Project. Je ne recommande aucun cycle et je ne prends aucune décision Morris.",
        watchLabel: "GARDE-FOUS",
        watchItems: [
          { label: "État process-local volatil", dotColor: "#faa629" },
          { label: "IAM non sélectionné", dotColor: "#7a4df5" },
          { label: "Agent réel désactivé", dotColor: "#51607a" },
        ],
        riskTitle: "MODE LOCAL UNIQUEMENT",
        riskText:
          "Un redémarrage ou hot reload peut perdre le Project et son LPS. Aucune persistance produit, delivery ou cutover.",
      }}
    >
      <div className={styles.page}>
        <RuntimeDisclosureBanner surface="workspace" />
        <ProjectWorkspaceClient projectId={projectId} />
      </div>
    </StudioShell>
  );
}
