import { StudioShell } from "@/components/shell/StudioShell";
import { CycleActifScreen } from "@/features/cycle-actif/CycleActifScreen";

export default function CycleActifPage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/cycle-actif"
      title="Cycle actif"
      pills={[
        { label: "main · clean", tone: "blueFlush" },
        { label: "Morris · décideur", tone: "purpleFlush" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Cycle Copilot",
        subtitle: "Étape 3 sur 5",
        avatarTone: "blue",
        summary:
          "Le cycle est borné. La preuve visuelle progresse, mais le runtime n'existe pas encore.",
        watchItems: [
          { label: "Contrat documentaire conforme", dotColor: "#3863f5" },
          { label: "Figma premium disponible", dotColor: "#7a4df5" },
          { label: "Aucun code ni POC lancé", dotColor: "#faa629" },
        ],
        riskTitle: "POINT D'ATTENTION",
        riskText:
          "Ne pas confondre maquette Figma et validation runtime. Le verdict final doit rester conditionnel.",
      }}
    >
      <CycleActifScreen />
    </StudioShell>
  );
}
