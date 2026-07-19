import { StudioShell } from "@/components/shell/StudioShell";
import { SyntheseScreen } from "@/features/synthese/SyntheseScreen";

export default function SynthesePage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/synthese"
      title="Vue synthèse"
      pills={[
        { label: "main · clean", tone: "blueFlush" },
        { label: "Morris · décideur", tone: "purpleFlush" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Project Copilot",
        subtitle: "Vue consolidée active",
        avatarTone: "purple",
        summary:
          "La trajectoire est cohérente. Deux décisions Morris restent ouvertes avant la suite.",
        watchItems: [
          { label: "Vérité Git synchronisée", dotColor: "#21c28a" },
          { label: "Décisions candidates séparées", dotColor: "#3863f5" },
          { label: "Aucun périmètre technique engagé", dotColor: "#7a4df5" },
        ],
        riskTitle: "POINT D'ATTENTION",
        riskText:
          "La clôture architecture et le choix du prochain jalon doivent rester des décisions distinctes.",
      }}
    >
      <SyntheseScreen />
    </StudioShell>
  );
}
