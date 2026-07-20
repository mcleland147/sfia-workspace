import type { StudioRoute } from "@/lib/navigation";
import type { StudioHarnessView } from "@/lib/harness/types";

/** Dix états fonctionnels + quatre variantes — pas de routes dédiées. */
export type VsStateId =
  | "VS-UX-01"
  | "VS-UX-02"
  | "VS-UX-03"
  | "VS-UX-04"
  | "VS-UX-05"
  | "VS-UX-06"
  | "VS-UX-07"
  | "VS-UX-08"
  | "VS-UX-09"
  | "VS-UX-10"
  | "VS-UX-VAR-LOADING"
  | "VS-UX-VAR-ERROR"
  | "VS-UX-VAR-STOP"
  | "VS-UX-VAR-GO-INVALID";

export type VsGateAction = "GO" | "NO-GO" | "CORRIGER" | "ABANDONNER";

export type VsFinalAction =
  | "CLOTURER"
  | "CORRIGER"
  | "RELANCER"
  | "ABANDONNER";

export interface VsStateMeta {
  id: VsStateId;
  label: string;
  route: StudioRoute;
  kind: "state" | "variant";
  figmaNode: string;
  dimensions: string;
}

export interface VsDemoUiState {
  stateId: VsStateId;
  abandoned: boolean;
  gateAction: VsGateAction | null;
  gateConfirmed: boolean;
  abandonConfirmOpen: boolean;
  finalAction: VsFinalAction | null;
  stopFired: boolean;
  /** Derived from harness — never a second authoritative store. */
  harnessView: StudioHarnessView | null;
  harnessBusy: boolean;
}
