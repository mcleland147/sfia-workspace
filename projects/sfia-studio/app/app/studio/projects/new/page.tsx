import { StudioShell } from "@/components/shell/StudioShell";
import { CreateProjectForm } from "@/features/vertical-slice-ui/CreateProjectForm";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import styles from "@/features/vertical-slice-ui/create-project.module.css";

export default function CreateStudioProjectPage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/studio/projects/new"
      title="Créer un projet"
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
          "Je rappelle les limites du mode local. Je ne recommande aucun cycle et je ne prends aucune décision Morris.",
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
        <RuntimeDisclosureBanner />
        <CreateProjectForm />
      </div>
    </StudioShell>
  );
}
