"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";
import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";

function NouvelleDemandeBody() {
  const params = useSearchParams();
  const vsMode = params.has("vs");

  if (vsMode) {
    return (
      <VsDemoRoot>
        <VsNouvelleDemandeScreen />
      </VsDemoRoot>
    );
  }

  return <Ops1SessionScreen />;
}

/** OPS1 I1 session/journal by default ; POC vertical-slice via `?vs=`. */
export function NouvelleDemandeScreen() {
  return (
    <Suspense fallback={null}>
      <NouvelleDemandeBody />
    </Suspense>
  );
}
