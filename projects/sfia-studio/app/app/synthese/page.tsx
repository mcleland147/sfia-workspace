import { StudioShell } from "@/components/shell/StudioShell";
import { SyntheseScreen } from "@/features/synthese/SyntheseScreen";

export default function SynthesePage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/synthese"
      title="Vue synthèse"
      pills={[
        { label: "fixture · slice-only", tone: "blueFlush" },
        { label: "Increment A", tone: "purpleFlush" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Project Copilot",
        subtitle: "Clôture slice courant",
        avatarTone: "purple",
        summary:
          "Synthèse limitée au vertical slice POC. Aucun portefeuille multi-projet. Aucun claim MVP.",
        watchItems: [
          { label: "Slice-only — pas de portfolio", dotColor: "#21c28a" },
          { label: "Décision Morris humaine", dotColor: "#3863f5" },
          { label: "Fixture — aucun live", dotColor: "#7a4df5" },
        ],
        riskTitle: "POINT D'ATTENTION",
        riskText:
          "Incrément A uniquement. Adaptateur, GPT live et Cursor live restent hors périmètre.",
      }}
    >
      <SyntheseScreen />
    </StudioShell>
  );
}
