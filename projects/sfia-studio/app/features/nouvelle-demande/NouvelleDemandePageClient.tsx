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
  subtitle: "OPS1 I3 — action gate / fixture first",
  avatarTone: "blue" as const,
  levelPill: "L0 humain",
  summary:
    "Proposition d’action hors chat et gate Morris (GO / NO_GO / CORRIGER / ABANDONNER). Fixture first — aucune exécution ; allowlist reportée à I4.",
  checklist: [
    "Créer session OPEN (fixture first)",
    "Qualifier ou proposer un ActionCandidate",
    "Décider via les quatre gate actions",
    "Aucune exécution Cursor / Git / filesystem",
  ],
  checklistTitle: "Parcours I3",
  riskTitle: "PÉRIMÈTRE",
  riskText:
    "I3 n’ouvre pas l’exécution ni l’allowlist I4, ni la clôture CLOSED, ni la CI. GO ≠ exécution.",
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
        { label: "OPS1 I3", tone: "blueFlush", testId: "ops1-increment-badge" },
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
