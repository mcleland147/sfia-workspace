import { StudioShell } from "@/components/shell/StudioShell";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";

export default function NouvelleDemandePage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/nouvelle-demande"
      title="Nouvelle demande"
      pills={[
        { label: "MODE FIXTURE / NON LIVE", tone: "orange" },
        { label: "OPS1 I1", tone: "blueFlush" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · SFIA Copilot",
        subtitle: "OPS1 I1 — session locale",
        avatarTone: "blue",
        levelPill: "L0 humain",
        summary:
          "Session CycleSession OPEN et journal fixture. Aucun GPT live, aucun Cursor live, aucune action Markdown.",
        checklist: [
          "Créer session OPEN",
          "Journaliser tours fixture",
          "Recharger et retrouver le journal",
          "Aucun effet d’exécution",
        ],
        checklistTitle: "Parcours I1",
        riskTitle: "PÉRIMÈTRE",
        riskText:
          "I1 n’ouvre pas I2–I7, la clôture CLOSED, ni la CI. E01-03 hors scope.",
      }}
    >
      <NouvelleDemandeScreen />
    </StudioShell>
  );
}
