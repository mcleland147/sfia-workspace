"use client";

import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
import { VsDecisionScreen } from "./VsDecisionScreen";

/** Increment A : gate VS-UX-04 + décision finale VS-UX-09 (+ GO invalide). */
export function DecisionScreen() {
  return (
    <VsDemoRoot>
      <VsDecisionScreen />
    </VsDemoRoot>
  );
}
