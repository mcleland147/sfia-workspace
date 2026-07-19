"use client";

import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
import { VsSyntheseScreen } from "./VsSyntheseScreen";

/** Increment A : clôture slice-only VS-UX-10 (pas de portefeuille). */
export function SyntheseScreen() {
  return (
    <VsDemoRoot>
      <VsSyntheseScreen />
    </VsDemoRoot>
  );
}
