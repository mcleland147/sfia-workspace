/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, and reconstructs prior mission state from turn resultJson.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands } from "@/db/schema";
import { qualifyDocumentAct } from "./document-act";
import {
  qualifyPublicationMission,
  type MissionProjection,
  type MissionStep,
  type MissionStatus,
} from "./mission-continuity";

/** Logical capability ids — mapping only, not a second permission catalog. */
export type StudioCapabilityId =
  | "d2.create_project"
  | "d3.converse"
  | "d4.create_document"
  | "d4.revise_document"
  | "d4.read_knowledge"
  | "d5.pilotage_command"
  | "d6.human_decision"
  | "d7.prepare_publication"
  | "d7.dispatch_publication"
  | "d9.git_integration";

export type QualifiedIntent = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  documentAct: ReturnType<typeof qualifyDocumentAct>;
  publication: ReturnType<typeof qualifyPublicationMission>;
  /** Pilotage/D5-D6 left to applyConversationalAuthority (existing owner path). */
  likelyPilotageSignal: boolean;
  simpleDialogue: boolean;
};

const PROJECT_CREATE_RE =
  /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/i;
const PROJECT_NAME_RE =
  /projet\s+(?:nomm[eé]|intitul[eé]|appel[eé])\s+[«"]?([^»"\n.]{2,80})[»"]?/i;
const PILOTAGE_SIGNAL_RE =
  /\b(?:ouvre|ouvrir|cl[oô]ture|cl[oô]turer|cycle|m[eé]thode|trajectoire|restriction|r[eé]voque)\b/i;

/**
 * Contract for integrating a future capability without rebuilding D3.
 * Scenario K uses this shape in tests — not a runtime registry engine.
 */
export type CapabilityMobilizationContract = {
  capabilityId: StudioCapabilityId | string;
  ownerDomain: "D1" | "D2" | "D3" | "D4" | "D5" | "D6" | "D7" | "D8" | "D9" | string;
  invokeOwner: string;
  preconditions: string[];
  rightsBoundary: string;
  structuredResultKeys: string[];
  continuationHook: "cognitiveContinueFromFacts" | "authoritySnippets" | "missionProjection" | "none";
  interruptionRecovery: string;
};

export const CAPABILITY_CONTRACTS: CapabilityMobilizationContract[] = [
  {
    capabilityId: "d2.create_project",
    ownerDomain: "D2",
    invokeOwner: "createProjectCommand (Pilot explicit act)",
    preconditions: ["preparation OPEN", "previewName/summary", "Pilot click/API"],
    rightsBoundary: "ownerPilotId + creationRevision CAS",
    structuredResultKeys: ["status", "projectId"],
    continuationHook: "missionProjection",
    interruptionRecovery: "create_project_commands idempotencyKey + reconcileCreateProject",
  },
  {
    capabilityId: "d4.create_document",
    ownerDomain: "D4",
    invokeOwner: "createDocument / document-act in postUserMessageAndNora",
    preconditions: ["explicit CREATE intent", "proposal extract", "turn fence"],
    rightsBoundary: "preparation ownership + turn lease",
    structuredResultKeys: ["documentId", "revisionId", "status"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "creationCorrelationKey / reconstituteConfirmedD4Effects",
  },
  {
    capabilityId: "d5.pilotage_command",
    ownerDomain: "D5",
    invokeOwner: "applyConversationalAuthority → executePilotageCommand",
    preconditions: ["project linked", "CLEAR intent", "USER message COMPLETE"],
    rightsBoundary: "project ownership + HumanDecision when required",
    structuredResultKeys: ["command.status", "effects", "decisionId"],
    continuationHook: "authoritySnippets",
    interruptionRecovery: "business_commands clientCommandKey",
  },
  {
    capabilityId: "d6.human_decision",
    ownerDomain: "D6",
    invokeOwner: "insertHumanDecision / authorizePublication",
    preconditions: ["Pilot act", "fingerprint/mandate when effect-bound"],
    rightsBoundary: "D6 owner only — Nora never invents HD",
    structuredResultKeys: ["decisionId", "state"],
    continuationHook: "missionProjection",
    interruptionRecovery: "human_decisions + effect_attempts.decisionId",
  },
  {
    capabilityId: "d7.prepare_publication",
    ownerDomain: "D7",
    invokeOwner: "preparePublication",
    preconditions: ["AVAILABLE revision", "git link", "explicit path for Nora mission"],
    rightsBoundary: "D1/D9 permissions at prepare",
    structuredResultKeys: ["attemptId", "status", "fingerprint"],
    continuationHook: "missionProjection",
    interruptionRecovery: "effect_attempts correlationKey pub:mission:*",
  },
  {
    capabilityId: "future.example_capability",
    ownerDomain: "Dn",
    invokeOwner: "<owner service>",
    preconditions: ["declared by owner"],
    rightsBoundary: "owner rights — never Nora",
    structuredResultKeys: ["status", "id"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "owner correlation / idempotency",
  },
];

export function qualifyStudioIntent(userText: string): QualifiedIntent {
  const documentAct = qualifyDocumentAct(userText);
  const publication = qualifyPublicationMission(userText);
  const wantsProjectCreate = PROJECT_CREATE_RE.test(userText);
  const nameMatch = userText.match(PROJECT_NAME_RE);
  const proposedProjectName = nameMatch?.[1]?.trim() ?? null;
  const likelyPilotageSignal = PILOTAGE_SIGNAL_RE.test(userText);
  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !likelyPilotageSignal;

  return {
    wantsProjectCreate,
    proposedProjectName,
    documentAct,
    publication,
    likelyPilotageSignal,
    simpleDialogue,
  };
}

export function emptyMission(clientIntentKey: string, goalSummary: string): MissionProjection {
  return {
    clientIntentKey,
    status: "ACTIVE",
    goalSummary,
    steps: [],
    restitution: "PENDING",
  };
}

export function mergeMissionSteps(
  base: MissionProjection,
  steps: MissionStep[],
  status?: MissionStatus,
): MissionProjection {
  return {
    ...base,
    status: status ?? base.status,
    steps: [...base.steps, ...steps],
  };
}

/** Reconstruct last missionProjection from durable turn resultJson (no WorkIntent table). */
export async function loadPriorMissionProjection(
  conversationId: string,
): Promise<MissionProjection | null> {
  const rows = await db
    .select({ resultJson: conversationTurnCommands.resultJson, status: conversationTurnCommands.status })
    .from(conversationTurnCommands)
    .where(
      and(
        eq(conversationTurnCommands.conversationId, conversationId),
        eq(conversationTurnCommands.status, "COMPLETE"),
      ),
    )
    .orderBy(desc(conversationTurnCommands.createdAt))
    .limit(8);

  for (const row of rows) {
    if (!row.resultJson) continue;
    try {
      const parsed = JSON.parse(row.resultJson) as { missionProjection?: MissionProjection | null };
      if (parsed.missionProjection?.clientIntentKey) {
        return parsed.missionProjection;
      }
    } catch {
      /* skip */
    }
  }
  return null;
}

/**
 * After Pilot creates the project (D2 owner), advance a prior AWAITING_PILOT_ACT
 * projection so Nora can pursue dependent steps without reassembly.
 */
export function advanceMissionAfterProjectCreated(
  prior: MissionProjection,
  projectId: string,
): MissionProjection {
  const steps = prior.steps.map((s) =>
    s.id === "d2_create_project" || s.capabilityId === "d2.create_project"
      ? {
          ...s,
          status: "DONE" as const,
          reason: `projectId=${projectId}`,
        }
      : s,
  );
  const stillWaiting = steps.some((s) => s.status === "WAITING" || s.status === "PENDING");
  return {
    ...prior,
    steps,
    status: stillWaiting ? "ACTIVE" : "COMPLETED",
    goalSummary: prior.goalSummary.includes("projet")
      ? `${prior.goalSummary} — projet confirmé ${projectId}`
      : prior.goalSummary,
    restitution: "PENDING",
  };
}

export function buildD2AwaitingStep(proposedName: string | null): MissionStep {
  return {
    id: "d2_create_project",
    capabilityId: "d2.create_project",
    status: "WAITING",
    reason: proposedName
      ? `Acte Pilote requis (Créer le projet) — preview «${proposedName}»`
      : "Acte Pilote requis (Créer le projet) — préciser le nom si besoin",
  };
}

export function buildPendingDocumentStep(kind: "CREATE" | "REVISE"): MissionStep {
  return {
    id: kind === "CREATE" ? "d4_create" : "d4_revise",
    capabilityId: kind === "CREATE" ? "d4.create_document" : "d4.revise_document",
    status: "PENDING",
    reason: "En attente après création projet / contexte",
  };
}
