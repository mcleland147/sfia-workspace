/**
 * Nora cognitive turn entry — Option C single Agents Runner path.
 * MW1-S01: honest Memory B availability.
 * MW1-S02: governed compaction + Truth C revision invalidation before cognition.
 * MW2-S01: CWP / Strategy → Runner modelSettings.reasoning (OD-02 Option B).
 * MW4-S01/S02/S03: grounding durability + narrative policy + read partiality.
 */
import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
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
import {
  decideCognitiveStrategy,
  mergeCognitiveWorkloadSignals,
  normalizeCognitiveWorkloadSignals,
  type CognitiveWorkloadSignals,
  type SemanticCognitiveWorkloadAssessment,
  type TurnWorkloadContext,
} from "./cognitiveWorkloadPolicy";
import { validateRuntimeReasoningCapability } from "./reasoningCapability";
import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
import {
  disposeContradiction,
  type ContradictionConflictInput,
} from "./contradictionDisposition";
import { decideCognitiveStop } from "./cognitiveStop";
import {
  acceptGroundingRefsForProject,
  appendGroundingCognitiveDisclosure,
  loadGroundingRefsFromSession,
  rememberEvidenceIds,
  rememberReadCoverage,
  toMw4GroundingTurnSurface,
  type Mw4GroundingTurnSurface,
  type RememberedEvidenceResolution,
} from "./groundingDurability";
import {
  appendPostEvidenceNarrativePolicyDisclosure,
} from "./postEvidenceNarrativePolicy";
import {
  appendReadCoverageDisclosure,
  aggregateReadCoverage,
  buildReadCoverageDisclosure,
  mergeCurrentAndRememberedCoverage,
  overallToGroundingCoverageKind,
  type ReadCoverageFact,
} from "./readCoverage";
import type { ProductSqliteSession } from "./productSqliteSession";

export type Mw3ContradictionAssessmentInput = {
  conflict: ContradictionConflictInput;
  governingPremiseInvalidated?: boolean;
  governingPremise?: string;
  localImpactOnly?: boolean;
  technicalFailure?: boolean;
  technicalFailureMessage?: string;
};

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
  /**
   * MW2 — optional explicit workload signals (tests/eval only).
   * Product path uses turnWorkloadContext + semanticCognitiveWorkload merge.
   */
  cognitiveWorkloadSignals?: Partial<CognitiveWorkloadSignals>;
  /** MW2 — trusted SFIA Profile only when actually available; never invented. */
  trustedSfiaProfile?: string | null;
  /** MW2 — product turn facts for signal derivation. */
  turnWorkloadContext?: TurnWorkloadContext;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent (server-side).
   * Merged with turnWorkloadContext; never a client DTO field.
   */
  semanticCognitiveWorkload?:
    | Partial<SemanticCognitiveWorkloadAssessment>
    | null;
  /** MW2 — skip policy for isolated tests. */
  skipCognitiveStrategy?: boolean;
  /**
   * MW3 — optional contradiction assessment over existing Evidence/source facts.
   * Does not invent Evidence; does not select Hosted Search / model routing.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
  /**
   * MW4 — re-resolve remembered Evidence IDs (product injects Studio/OA resolver).
   * Cognitive runtime stays free of OA repository imports.
   */
  resolveRememberedEvidence?: (
    projectId: string,
    ids: string[],
  ) => Promise<RememberedEvidenceResolution>;
  /** MW4-S02 — attach post-Evidence / recovery narrative honesty disclosure. */
  postEvidenceNarrativePolicy?: boolean;
  /** MW4-S03 — optional prior/current read coverage facts for disclosure. */
  readCoverageFacts?: ReadCoverageFact[];
  /** MW4 — fixed timestamp for deterministic grounding remember. */
  groundingNowIso?: string;
};

function emitCognitiveStrategyTelemetry(
  sink: EventSink | undefined,
  correlationId: string,
  decision: ReturnType<typeof decideCognitiveStrategy>,
): void {
  if (!sink) return;
  sink.emit({
    type: "COGNITIVE_STRATEGY_SELECTED",
    correlationId,
    detail: {
      strategyClass: decision.strategyClass,
      reasoningEffort: decision.reasoningEffort,
      reasoningDemand: decision.reasoningDemand,
      criticalChallengeArmed: decision.criticalChallengeArmed,
      bootstrapUsed: decision.bootstrapUsed,
      reasonCodes: decision.reasonCodes,
      envelope: [...decision.candidateEnvelope],
    },
  });
}

function resolveCognitiveStrategyForTurn(
  input: RunNoraCognitiveTurnInput,
): ReturnType<typeof decideCognitiveStrategy> | null {
  if (input.skipCognitiveStrategy) return null;

  // Test/eval explicit override remains (not product R2 proof).
  if (input.cognitiveWorkloadSignals) {
    return decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals),
      trustedSfiaProfile: input.trustedSfiaProfile,
    });
  }

  // Product path: factual turn context + validated semantic assessment merge.
  if (input.turnWorkloadContext) {
    return decideCognitiveStrategy({
      signals: mergeCognitiveWorkloadSignals({
        turnContext: input.turnWorkloadContext,
        semanticAssessment: input.semanticCognitiveWorkload,
      }),
      trustedSfiaProfile: input.trustedSfiaProfile,
    });
  }

  return decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({}),
    trustedSfiaProfile: input.trustedSfiaProfile,
  });
}

function resolveRunnerModelSettings(
  input: RunNoraCognitiveTurnInput,
  decision: ReturnType<typeof decideCognitiveStrategy> | null,
): ReturnType<typeof buildRunnerModelSettingsForEffort> | undefined {
  if (!decision) return undefined;

  const model =
    typeof input.provider?.providerId === "string" &&
    input.provider.providerId.startsWith("fake")
      ? process.env.OPENAI_MODEL?.trim() || "gpt-5.6-luna"
      : requireLiveConversationSecrets().model;

  validateRuntimeReasoningCapability(model, decision.reasoningEffort);
  return buildRunnerModelSettingsForEffort(decision.reasoningEffort);
}

function withStrategyFields(
  turn: NoraCognitiveTurnResult,
  decision: ReturnType<typeof decideCognitiveStrategy> | null,
): NoraCognitiveTurnResult {
  if (!decision) return turn;
  return {
    ...turn,
    cognitiveStrategyClass: decision.strategyClass,
    selectedReasoningEffort: decision.reasoningEffort,
    criticalChallengeArmed: decision.criticalChallengeArmed,
  };
}

function withMw3Fields(
  turn: NoraCognitiveTurnResult,
  input: RunNoraCognitiveTurnInput,
  strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
): NoraCognitiveTurnResult {
  const assessment = input.contradictionAssessment;
  if (!assessment) return turn;

  const conflict: ContradictionConflictInput = {
    ...assessment.conflict,
    strategyClass:
      assessment.conflict.strategyClass ??
      strategyDecision?.strategyClass ??
      null,
    trustedSfiaProfile:
      assessment.conflict.trustedSfiaProfile !== undefined
        ? assessment.conflict.trustedSfiaProfile
        : input.trustedSfiaProfile,
  };
  const disposition = disposeContradiction(conflict);
  const stop = decideCognitiveStop({
    disposition,
    governingPremiseInvalidated:
      assessment.governingPremiseInvalidated === true,
    governingPremise: assessment.governingPremise,
    localImpactOnly: assessment.localImpactOnly === true,
    technicalFailure: assessment.technicalFailure === true,
    technicalFailureMessage: assessment.technicalFailureMessage,
  });

  let text = turn.text;
  if (stop.cognitiveStop && stop.anatomy) {
    text = [
      turn.text,
      "",
      `[COGNITIVE STOP] ${stop.anatomy.reason}`,
      stop.anatomy.contradictionEvidenceIds.length > 0
        ? `Evidence: ${stop.anatomy.contradictionEvidenceIds.join(", ")}`
        : null,
      `Next: ${stop.anatomy.nextAction}`,
    ]
      .filter(Boolean)
      .join("\n");
  } else if (
    disposition.disposition === "candidate" &&
    disposition.disclosure
  ) {
    text = `${turn.text}\n\n[CONTRADICTION CANDIDATE] ${disposition.disclosure}`;
  } else if (disposition.disposition === "evidence_backed" && stop.anatomy) {
    text = `${turn.text}\n\n[EVIDENCE-BACKED CONTRADICTION] ${stop.anatomy.reason}`;
  }

  return {
    ...turn,
    text,
    contradictionDisposition: disposition,
    cognitiveStopDecision: stop,
  };
}

function finalizeTurn(
  turn: NoraCognitiveTurnResult,
  input: RunNoraCognitiveTurnInput,
  strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
  mw4Grounding?: Mw4GroundingTurnSurface,
): NoraCognitiveTurnResult {
  const withMw3 = withMw3Fields(
    withStrategyFields(turn, strategyDecision),
    input,
    strategyDecision,
  );
  if (!mw4Grounding) return withMw3;
  return { ...withMw3, mw4Grounding };
}

function collectEvidenceIdsToRemember(
  input: RunNoraCognitiveTurnInput,
  turn: NoraCognitiveTurnResult,
): string[] {
  const ids = new Set<string>();
  const pointers = input.contradictionAssessment?.conflict.evidencePointers ?? [];
  for (const p of pointers) {
    const id = p.evidenceId?.trim();
    if (id) ids.add(id);
  }
  for (const id of turn.contradictionDisposition?.acceptedEvidenceIds ?? []) {
    const t = id.trim();
    if (t) ids.add(t);
  }
  for (const id of turn.cognitiveStopDecision?.anatomy?.contradictionEvidenceIds ??
    []) {
    const t = id.trim();
    if (t) ids.add(t);
  }
  return [...ids];
}

async function prepareMw4Grounding(input: {
  session: ProductSqliteSession | null;
  projectId: string;
  resolveRememberedEvidence?: RunNoraCognitiveTurnInput["resolveRememberedEvidence"];
  readCoverageFacts?: ReadCoverageFact[];
}): Promise<{
  resolution: RememberedEvidenceResolution | null;
  surface: Mw4GroundingTurnSurface | null;
  disclosure: string;
  readCoverageDisclosure: string;
}> {
  const empty = {
    resolution: null,
    surface: null,
    disclosure: "",
    readCoverageDisclosure: "",
  };
  if (!input.session) {
    const currentOnly = mergeCurrentAndRememberedCoverage({
      current: input.readCoverageFacts ?? [],
      remembered: [],
    });
    return {
      ...empty,
      readCoverageDisclosure: currentOnly.combinedDisclosure,
      surface:
        currentOnly.currentAggregate.facts.length > 0
          ? {
              rememberedIds: [],
              validIds: [],
              downgradedIds: [],
              missingIds: [],
              disclosure: "",
              readCoverageOverall: overallToGroundingCoverageKind(
                currentOnly.currentAggregate.overall,
              ),
              readCoverageDisclosure: currentOnly.combinedDisclosure || null,
              claimSpecificProvenance: "unbound",
              claimSpecificDisclosure: null,
            }
          : null,
    };
  }

  const raw = await loadGroundingRefsFromSession(input.session);
  const record = acceptGroundingRefsForProject(raw, input.projectId);
  // Cross-project fail-closed: wrong projectId → reject (no durable authority).
  const rememberedIds = (record?.evidenceRefs ?? []).map((r) => r.evidenceId);

  let resolution: RememberedEvidenceResolution | null = null;
  if (rememberedIds.length > 0 && input.resolveRememberedEvidence) {
    resolution = await input.resolveRememberedEvidence(
      input.projectId,
      rememberedIds,
    );
  } else if (rememberedIds.length > 0) {
    // No resolver → all remembered IDs are non-attributable (fail closed).
    resolution = {
      rememberedIds,
      valid: [],
      downgraded: [],
      missing: rememberedIds.map((evidenceId) => ({
        evidenceId,
        reason: "fabricated_without_resolver_hit" as const,
      })),
    };
  }

  // CORR-01B — consume persisted prior read coverage distinctly from current turn.
  const rememberedCoverageFacts: ReadCoverageFact[] = (
    record?.readCoverage ?? []
  ).map((ref) => ({
    pathOrRef: ref.pathOrRef,
    documentPath: ref.pathOrRef.replace(/#L\d+-\d+$/, ""),
    coverage: ref.coverage,
    signals: ["remembered_prior"],
    origin: "remembered_prior" as const,
  }));
  const merged = mergeCurrentAndRememberedCoverage({
    current: (input.readCoverageFacts ?? []).map((f) => ({
      ...f,
      origin: f.origin ?? "current_turn",
    })),
    remembered: rememberedCoverageFacts,
  });
  const readCoverageDisclosure = merged.combinedDisclosure;
  const overallForSurface =
    merged.currentAggregate.facts.length > 0
      ? merged.currentAggregate.overall
      : merged.rememberedAggregate.overall;

  const surface = resolution
    ? toMw4GroundingTurnSurface(resolution, {
        readCoverageOverall: overallToGroundingCoverageKind(overallForSurface),
        readCoverageDisclosure: readCoverageDisclosure || null,
      })
    : readCoverageDisclosure
      ? {
          rememberedIds: [],
          validIds: [],
          downgradedIds: [],
          missingIds: [],
          disclosure: "",
          readCoverageOverall: overallToGroundingCoverageKind(overallForSurface),
          readCoverageDisclosure: readCoverageDisclosure || null,
          claimSpecificProvenance: "unbound" as const,
          claimSpecificDisclosure: null,
        }
      : null;

  return {
    resolution,
    surface,
    disclosure: surface?.disclosure ?? "",
    readCoverageDisclosure,
  };
}

export async function runNoraCognitiveTurn(
  input: RunNoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const strategyDecision = resolveCognitiveStrategyForTurn(input);
  if (strategyDecision) {
    emitCognitiveStrategyTelemetry(
      input.sink,
      input.correlationId,
      strategyDecision,
    );
  }
  const runnerModelSettings = resolveRunnerModelSettings(input, strategyDecision);

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
    let systemInstructions = appendMemoryBCognitiveDisclosure(
      system.content,
      "unavailable",
    );
    if (input.postEvidenceNarrativePolicy) {
      systemInstructions =
        appendPostEvidenceNarrativePolicyDisclosure(systemInstructions);
    }
    const coverageAggregate = aggregateReadCoverage(
      input.readCoverageFacts ?? [],
    );
    const readDisclosure = buildReadCoverageDisclosure(coverageAggregate);
    systemInstructions = appendReadCoverageDisclosure(
      systemInstructions,
      readDisclosure,
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
      runnerModelSettings,
    });
    const mw4 =
      coverageAggregate.facts.length > 0
        ? {
            rememberedIds: [] as string[],
            validIds: [] as string[],
            downgradedIds: [] as string[],
            missingIds: [] as string[],
            disclosure: "",
            readCoverageOverall: overallToGroundingCoverageKind(
              coverageAggregate.overall,
            ),
            readCoverageDisclosure: readDisclosure || null,
          }
        : undefined;
    return finalizeTurn(
      {
        ...turn,
        memoryBCompactionState: "none",
        memoryBCompactionDetails: null,
      },
      input,
      strategyDecision,
      mw4,
    );
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

  const mw4Prep = await prepareMw4Grounding({
    session: probe.session,
    projectId: input.projectId,
    resolveRememberedEvidence: input.resolveRememberedEvidence,
    readCoverageFacts: input.readCoverageFacts,
  });
  systemInstructions = appendGroundingCognitiveDisclosure(
    systemInstructions,
    mw4Prep.disclosure,
  );
  systemInstructions = appendReadCoverageDisclosure(
    systemInstructions,
    mw4Prep.readCoverageDisclosure,
  );
  if (input.postEvidenceNarrativePolicy) {
    systemInstructions =
      appendPostEvidenceNarrativePolicyDisclosure(systemInstructions);
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
      runnerModelSettings,
    });
    const finalized = finalizeTurn(
      {
        ...turn,
        memoryBCompactionState: compactionState,
        memoryBCompactionDetails: compactionDetails,
      },
      input,
      strategyDecision,
      mw4Prep.surface ?? undefined,
    );

    // Persist Evidence IDs claimed/accepted this turn (non-authoritative).
    if (probe.session && probe.availability !== "unavailable") {
      const toRemember = collectEvidenceIdsToRemember(input, finalized);
      if (toRemember.length > 0) {
        await rememberEvidenceIds(
          probe.session,
          input.projectId,
          toRemember,
          input.groundingNowIso,
        );
      }
      // CORR-01B — also persist current-turn read coverage for next-turn honesty.
      const coverageFacts = input.readCoverageFacts ?? [];
      if (coverageFacts.length > 0) {
        await rememberReadCoverage(
          probe.session,
          input.projectId,
          coverageFacts.map((f) => ({
            pathOrRef: f.documentPath ?? f.pathOrRef,
            coverage: f.coverage,
          })),
          input.groundingNowIso,
        );
      }
    }

    return finalized;
  } finally {
    if (probe.session) {
      probe.session.close();
    }
  }
}
