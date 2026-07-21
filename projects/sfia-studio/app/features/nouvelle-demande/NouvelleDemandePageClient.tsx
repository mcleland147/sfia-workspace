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
  subtitle: "OPS1 I2 — conversation live/fixture",
  avatarTone: "blue" as const,
  levelPill: "L0 humain",
  summary:
    "Conversation multi-tours (fixture ou GPT live serveur). Aucune exécution Cursor, aucun gate d’action.",
  checklist: [
    "Créer session OPEN",
    "Échanger fixture ou live",
    "Persister journal + usage",
    "Aucun effet d’exécution depuis le chat",
  ],
  checklistTitle: "Parcours I2",
  riskTitle: "PÉRIMÈTRE",
  riskText:
    "I2 n’ouvre pas I3–I7, la clôture CLOSED, ni la CI. Chat ≠ exécution.",
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
        { label: "OPS1 I2", tone: "blueFlush" },
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
