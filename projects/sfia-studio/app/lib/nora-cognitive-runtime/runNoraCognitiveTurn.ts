/**
 * Nora cognitive turn entry — Option C single Agents Runner path.
 * MW1-S01: honest Memory B availability.
 * MW1-S02: governed compaction + Truth C revision invalidation before cognition.
 */
import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import {
  appendMemoryBCognitiveDisclosure,
  probeMemoryBAvailability,
} from "./memoryBAvailability";
import type { Session } from "@openai/agents";
import {
  appendMemoryBCompactionDisclosure,
  createMemoryBSessionView,
  type TruthCRevision,
} from "./memoryBCompaction";
import { resolveNoraSessionSqlitePath } from "./sessionPaths";
import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
import type { NoraCognitiveTurnResult } from "./types";

export type RunNoraCognitiveTurnInput = {
  correlationId: string;
  projectId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  sink?: EventSink;
  workspaceRoot?: string;
  sessionDbPath?: string;
  sessionKey?: string;
  simulateMemoryBUnavailable?: boolean;
  /** MW1-S02 — Truth C revision token for compaction invalidation. */
  truthCRevision?: TruthCRevision;
  /** Test-only fixed timestamp for deterministic compaction. */
  compactionNowIso?: string;
};

export async function runNoraCognitiveTurn(
  input: RunNoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const system = input.messages.find((m) => m.role === "system");
  const userMessages = input.messages.filter((m) => m.role === "user");
  const lastUser = userMessages[userMessages.length - 1];
  if (!system?.content?.trim() || !lastUser?.content?.trim()) {
    throw new Error("NORA_AGENTS_TURN_REQUIRES_SYSTEM_AND_USER");
  }

  let dbPath: string;
  try {
    dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
  } catch {
    const systemInstructions = appendMemoryBCognitiveDisclosure(
      system.content,
      "unavailable",
    );
    const turn = await runNoraAgentsTurn({
      correlationId: input.correlationId,
      projectId: input.projectId,
      systemInstructions,
      userContent: lastUser.content.trim(),
      session: null,
      memoryBAvailability: "unavailable",
      workspaceRoot: input.workspaceRoot,
      sink: input.sink,
      enableTools: input.enableTools,
      provider: input.provider,
    });
    return {
      ...turn,
      memoryBCompactionState: "none",
      memoryBCompactionDetails: null,
    };
  }

  const probe = await probeMemoryBAvailability({
    projectId: input.projectId,
    dbPath,
    sessionKey: input.sessionKey ?? "f1-default",
    simulateUnavailable: input.simulateMemoryBUnavailable,
  });

  // CORR-OPT-C-01: do NOT auto-import caller-provided process-local
  // user/assistant history into durable Runner Session (untrusted provenance).
  let systemInstructions = appendMemoryBCognitiveDisclosure(
    system.content,
    probe.availability,
  );

  let sessionForRunner: Session | null = probe.session;
  let compactionDetails = null;
  let compactionState: NoraCognitiveTurnResult["memoryBCompactionState"] =
    "none";

  if (
    probe.session &&
    probe.availability !== "unavailable" &&
    input.truthCRevision
  ) {
    const prepared = await createMemoryBSessionView({
      session: probe.session,
      truthCRevision: input.truthCRevision,
      nowIso: input.compactionNowIso,
    });
    sessionForRunner = prepared.view;
    compactionDetails = prepared.details;
    compactionState = prepared.details.state;
    systemInstructions = appendMemoryBCompactionDisclosure(
      systemInstructions,
      compactionState,
      { stalePriorInvalidated: prepared.details.stalePriorInvalidated },
    );
  }

  try {
    const turn = await runNoraAgentsTurn({
      correlationId: input.correlationId,
      projectId: input.projectId,
      systemInstructions,
      userContent: lastUser.content.trim(),
      session: sessionForRunner,
      memoryBAvailability: probe.availability,
      workspaceRoot: input.workspaceRoot,
      sink: input.sink,
      enableTools: input.enableTools,
      provider: input.provider,
    });
    return {
      ...turn,
      memoryBCompactionState: compactionState,
      memoryBCompactionDetails: compactionDetails,
    };
  } finally {
    if (probe.session) {
      probe.session.close();
    }
  }
}
