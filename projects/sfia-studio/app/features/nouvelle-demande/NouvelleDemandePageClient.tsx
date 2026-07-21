"use client";

import { Suspense, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { StudioShell } from "@/components/shell/StudioShell";
import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";
import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";
import {
  mapGlobalModeBadge,
  type GlobalModeContext,
} from "@/lib/ops1/globalModeBadge";

const COPILOT = {
  variant: "flush" as const,
  name: "Nora · SFIA Copilot",
  subtitle: "OPS1 I5 — contrat final / exécution Cursor bornée",
  avatarTone: "blue" as const,
  levelPill: "L0 humain",
  summary:
    "Contrat final, GO lié au hash, revalidation, worktree local et exécution Cursor bornée. I5 exécute — I6 analyse le rapport.",
  checklist: [
    "Allowlist I4 VALID",
    "Saisir objectif + instructions Morris",
    "GO d’exécution lié au contractHash",
    "Revalidation → worktree → Cursor (fixture ou réel gated)",
  ],
  checklistTitle: "Parcours I5",
  riskTitle: "PÉRIMÈTRE",
  riskText:
    "GO DELIVERY ≠ GO d’exécution. Worktree local — pas de push. Aucun retry automatique. I6/I7 hors scope.",
};

function NouvelleDemandeBody({
  onGlobalModeContextChange,
}: {
  onGlobalModeContextChange?: (ctx: GlobalModeContext) => void;
}) {
  const params = useSearchParams();
  const vsMode = params.has("vs");

  if (vsMode) {
    return (
      <VsDemoRoot>
        <VsNouvelleDemandeScreen />
      </VsDemoRoot>
    );
  }

  return (
    <Ops1SessionScreen
      onGlobalModeContextChange={onGlobalModeContextChange}
    />
  );
}

/** Client shell: global mode badge tracks OPS1 presentation context. */
export function NouvelleDemandePageClient() {
  const [modeCtx, setModeCtx] = useState<GlobalModeContext>({
    hasSession: false,
    createMode: "fixture",
    presentation: "fixture",
    testProvider: false,
    liveAvailable: false,
  });

  const onGlobalModeContextChange = useCallback((ctx: GlobalModeContext) => {
    setModeCtx(ctx);
  }, []);

  const badge = mapGlobalModeBadge(modeCtx);

  return (
    <StudioShell
      variant="flush"
      activeRoute="/nouvelle-demande"
      title="Nouvelle demande"
      pills={[
        {
          label: badge.label,
          tone: badge.tone,
          testId: "global-mode-badge",
        },
        { label: "OPS1 I5", tone: "blueFlush", testId: "ops1-increment-badge" },
      ]}
      copilot={COPILOT}
    >
      <Suspense fallback={null}>
        <NouvelleDemandeBody
          onGlobalModeContextChange={onGlobalModeContextChange}
        />
      </Suspense>
    </StudioShell>
  );
}
