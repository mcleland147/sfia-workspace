import { StudioShell } from "@/components/shell/StudioShell";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";

export default function NouvelleDemandePage() {
  return (
    <StudioShell
      variant="floating"
      activeRoute="/nouvelle-demande"
      title="Nouvelle demande"
      pills={[
        { label: "Brouillon", tone: "orange" },
        { label: "main · clean", tone: "green" },
      ]}
      copilot={{
        variant: "floating",
        name: "Nora · SFIA Copilot",
        subtitle: "Qualification en direct",
        avatarTone: "pink",
        levelPill: "L0 humain",
        summary:
          "Votre demande semble relever d'un cycle de conception fonctionnelle, avec un gate Morris avant préparation du prompt Cursor.",
        checklist: [
          "Cycle et profil",
          "Périmètre autorisé",
          "Gates et stop conditions",
          "Review pack attendu",
        ],
        checklistTitle: "Ce que je vais préparer",
        showRecommendationLabel: true,
        riskTitle: "RISQUE DÉTECTÉ",
        riskText:
          "Le besoin mélange automatisation et arbitrage humain. Je séparerai clairement les deux.",
      }}
    >
      <NouvelleDemandeScreen />
    </StudioShell>
  );
}
