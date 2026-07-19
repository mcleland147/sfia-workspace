"use client";

import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";

/** Increment A : états VS-UX-01…03 (+ variantes) dans la route Nouvelle demande. */
export function NouvelleDemandeScreen() {
  return (
    <VsDemoRoot>
      <VsNouvelleDemandeScreen />
    </VsDemoRoot>
  );
}
