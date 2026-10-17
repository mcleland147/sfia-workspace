/**
 * M-HD-02 — client-safe Generic Mission presentation types & option ids.
 * Option ids MUST match w2/genericMissionSubject.ts (server authority).
 * No OA / node imports — safe for ConversationSurface client bundle.
 */

export const UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
  "opt:generic-mission:accept-prepare" as const;
export const UI_GENERIC_MISSION_OPTION_REFUSE =
  "opt:generic-mission:refuse" as const;
export const UI_GENERIC_MISSION_OPTION_REQUEST_AMEND =
  "opt:generic-mission:request-amend" as const;

/** Projection of sealed subject fields needed by the Pilot card. */
export type GenericMissionSubjectView = {
  readonly missionSubjectId: string;
  readonly presentationDigest: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly impactSignals: {
    readonly structuralChange: boolean;
    readonly securityImpact: boolean;
    readonly architectureImpact: boolean;
    readonly dataImpact: boolean;
    readonly irreversible: boolean;
  };
  readonly effects: {
    readonly intentKind: string | null;
    readonly artifactType: string | null;
    readonly requestedOperation: string | null;
    readonly requiredCapabilities: readonly string[];
    readonly expectedOutputs: readonly string[];
    readonly risks: readonly string[];
    readonly reservations: readonly string[];
  };
};
