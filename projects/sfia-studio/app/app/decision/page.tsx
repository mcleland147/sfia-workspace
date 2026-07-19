import { StudioShell } from "@/components/shell/StudioShell";
import { DecisionScreen } from "@/features/decision/DecisionScreen";

export default function DecisionPage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/decision"
      title="Décision Morris"
      pills={[
        { label: "main · clean", tone: "blueFlush" },
        { label: "Morris · décideur", tone: "purpleFlush" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Decision Copilot",
        subtitle: "Gate Morris ouverte",
        avatarTone: "pinkFlush",
        summary:
          "Les preuves sont suffisantes pour une décision visuelle, mais pas pour un verdict runtime.",
        watchItems: [
          { label: "Portée bornée au cycle UX/UI", dotColor: "#21c28a" },
          { label: "Aucun commit ou push projet", dotColor: "#3863f5" },
          { label: "Choix traçable et révocable", dotColor: "#7a4df5" },
        ],
        riskTitle: "POINT D'ATTENTION",
        riskText:
          "Un GO visuel ne vaut pas GO développement. L'architecture technique et le POC restent hors périmètre.",
      }}
    >
      <DecisionScreen />
    </StudioShell>
  );
}
