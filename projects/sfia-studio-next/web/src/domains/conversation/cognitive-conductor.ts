/**
 * Adaptive D3 cognitive conductor (Option B) — one or more provider segments
 * for the same cognitive work. Reuses OpenAI Agents SDK via nora-adapter.
 * No second cognitive engine. No lexical depth routing.
 */

import {
  buildCognitivePolicy,
  type CognitivePolicy,
} from "./cognitive-policy";
import {
  accumulateResources,
  checkpointCognitiveWork,
  evaluateGlobalResourceEnvelope,
  heartbeatCognitiveWork,
  openOrResumeCognitiveWork,
  releaseCognitiveWorkLease,
  type CognitiveProductionState,
  type CognitiveResources,
  type CognitiveWorkRow,
} from "./cognitive-work";
import {
  evaluateContractReadiness,
  type InvestigationState,
} from "./investigation-state";
import type { NoraTurnQualification } from "./semantic-qualification";

export type ConductorSegmentResult = {
  replyText: string;
  qualification: NoraTurnQualification | null;
  investigation: InvestigationState;
  generationId?: string | null;
  resourcesDelta: Partial<CognitiveResources>;
  /** Semantic signal: more read-only work remains useful. */
  continueWork: boolean;
  production?: Partial<CognitiveProductionState>;
};

export type ConductorRunInput = {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  objective: string;
  expectedOutcome?: string;
  workId?: string | null;
  forceNewWork?: boolean;
  turnCommandId?: string | null;
  ownerTokenTurn?: string | null;
  /** Execute one provider segment; conductor decides whether to continue. */
  runSegment: (ctx: {
    work: CognitiveWorkRow;
    segmentIndex: number;
    policy: CognitivePolicy;
  }) => Promise<ConductorSegmentResult>;
  /** Optional semantic policy resolver — must not use message length. */
  resolvePolicy?: (work: CognitiveWorkRow, segmentIndex: number) => CognitivePolicy;
  maxSegmentsThisInvocation?: number;
};

export type ConductorRunResult = {
  work: CognitiveWorkRow;
  ownerToken: string;
  resumed: boolean;
  segmentsRun: number;
  replyText: string;
  qualification: NoraTurnQualification | null;
  investigation: InvestigationState;
  suspended: boolean;
  suspendReason: string | null;
  production: CognitiveProductionState;
};

/**
 * Run adaptive conductor for one user-facing invocation.
 * May execute several segments until done, suspended, or local max reached.
 * Global resource counters accumulate across segments and invocations.
 */
export async function runCognitiveConductor(
  input: ConductorRunInput,
): Promise<ConductorRunResult> {
  const opened = await openOrResumeCognitiveWork({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: input.objective,
    expectedOutcome: input.expectedOutcome,
    workId: input.workId,
    forceNew: input.forceNewWork,
  });

  let work = opened.work;
  const ownerToken = opened.ownerToken;
  let revision = work.revision;
  let resources: CognitiveResources = { ...work.resources };
  let production: CognitiveProductionState = { ...work.production };
  let investigation = evaluateContractReadiness(work.state);
  let replyText = "";
  let qualification: NoraTurnQualification | null = null;
  let suspended = false;
  let suspendReason: string | null = null;
  let segmentsRun = 0;

  // C21 — functional activity: investigation engaged (ANNOUNCED ≠ OBSERVED).
  if (input.conversationId && input.turnCommandId) {
    try {
      const { appendActivityEvent } = await import("./activity-projection");
      const objective = (input.objective || work.objective || "").trim();
      const objectiveLabel = objective
        ? objective.length > 140
          ? `${objective.slice(0, 137)}…`
          : objective
        : null;
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.investigation.engaged",
        nature: "ANNOUNCED",
        status: "RUNNING",
        summary: opened.resumed
          ? objectiveLabel
            ? `Reprise — ${objectiveLabel}`
            : "Reprise du travail cognitif en cours"
          : objectiveLabel
            ? `Investigation — ${objectiveLabel}`
            : "Investigation engagée",
        detail: {
          workId: work.id,
          revision: work.revision,
          resumed: opened.resumed,
          objective: objectiveLabel,
        },
        sourceRef: work.id,
        ownerToken,
      });
      if (objectiveLabel) {
        await appendActivityEvent({
          conversationId: input.conversationId,
          turnCommandId: input.turnCommandId,
          ownerPilotId: input.pilotId,
          phase: "nora.objective",
          nature: "ANNOUNCED",
          status: "RUNNING",
          summary: objectiveLabel,
          detail: { objective: objectiveLabel, workId: work.id },
          sourceRef: work.id,
          ownerToken,
        });
      }
    } catch {
      /* activity must not fail the conductor */
    }
  }

  const maxLocal = Math.max(1, input.maxSegmentsThisInvocation ?? 3);

  for (let i = 0; i < maxLocal; i++) {
    // RB-27 — preventive check with restitution reserve + projected next-segment cost.
    // Soft stop before another heavy segment; hard stop when already at/over ceiling.
    const usedBefore =
      (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0);
    const projectedNext =
      i === 0 && usedBefore === 0
        ? 0
        : Math.min(80_000, Math.max(25_000, Math.floor(usedBefore * 0.35) || 40_000));
    const envelope = evaluateGlobalResourceEnvelope(resources, process.env, {
      reserveForRestitution: i === 0 ? 0 : 12_000,
      projectedNextSegmentTokens: i === 0 ? 0 : projectedNext,
    });
    if (!envelope.ok) {
      suspended = true;
      suspendReason = envelope.reason ?? "GLOBAL_BUDGET_EXHAUSTED";
      investigation = {
        ...investigation,
        sufficiency: "BUDGET_EXHAUSTED",
        contractReady: false,
        contractReadyBlockedReason: suspendReason,
      };
      break;
    }

    const policy =
      input.resolvePolicy?.(work, i) ??
      buildCognitivePolicy(work.objective || input.objective);

    await heartbeatCognitiveWork({ workId: work.id, ownerToken });

    const started = Date.now();
    const segment = await input.runSegment({ work, segmentIndex: i, policy });
    segmentsRun += 1;

    resources = accumulateResources(resources, {
      ...segment.resourcesDelta,
      segmentCalls: 1,
      durationMs: Date.now() - started,
    });
    investigation = evaluateContractReadiness(segment.investigation);
    replyText = segment.replyText || replyText;
    qualification = segment.qualification ?? qualification;
    if (segment.production) {
      production = {
        ...production,
        ...segment.production,
        parts: segment.production.parts ?? production.parts,
      };
    }

    work = await checkpointCognitiveWork({
      pilotId: input.pilotId,
      workId: work.id,
      ownerToken,
      expectedRevision: revision,
      cause: segment.continueWork ? "SEGMENT_CONTINUE" : "SEGMENT_COMPLETE",
      state: investigation,
      resources,
      production,
      status: "RUNNING",
      turnCommandId: input.turnCommandId,
      generationId: segment.generationId,
      objective: investigation.intentSummary || work.objective,
      expectedOutcome: investigation.desiredOutcome || work.expectedOutcome,
    });
    revision = work.revision;

    // RB-15/22 — segment progress as métier activity (not raw SDK dump).
    if (input.conversationId && input.turnCommandId) {
      try {
        const { appendActivityEvent } = await import("./activity-projection");
        const consulted = investigation.sources.filter(
          (s) =>
            s.coverage === "CONSULTED" ||
            s.coverage === "VERIFIED" ||
            s.coverage === "PARTIAL",
        ).length;
        const discovered = investigation.sources.filter(
          (s) => s.coverage === "DISCOVERED",
        ).length;
        const progressSummary = segment.continueWork
          ? consulted > 0
            ? `Approfondissement — ${consulted} source${consulted > 1 ? "s" : ""} consultée${consulted > 1 ? "s" : ""}${discovered ? ` · ${discovered} découverte${discovered > 1 ? "s" : ""}` : ""}`
            : `Approfondissement du travail — segment ${segmentsRun}`
          : consulted > 0
            ? `Consolidation — ${consulted} source${consulted > 1 ? "s" : ""} exploitée${consulted > 1 ? "s" : ""}`
            : "Consolidation de la réponse";
        await appendActivityEvent({
          conversationId: input.conversationId,
          turnCommandId: input.turnCommandId,
          ownerPilotId: input.pilotId,
          phase: "nora.investigation",
          nature: segment.continueWork ? "OBSERVED" : "COMPLETED",
          status: segment.continueWork ? "RUNNING" : "COMPLETED",
          summary: progressSummary,
          detail: {
            workId: work.id,
            segmentIndex: i,
            segmentsRun,
            consulted,
            discovered,
            objective: (investigation.intentSummary || work.objective || "").slice(0, 140),
          },
          sourceRef: work.id,
          ownerToken,
        });
      } catch {
        /* observational */
      }
    }

    if (!segment.continueWork) {
      break;
    }

    const again = evaluateGlobalResourceEnvelope(resources, process.env, {
      reserveForRestitution: 12_000,
      projectedNextSegmentTokens: Math.min(
        80_000,
        Math.max(
          25_000,
          Math.floor(
            ((resources.inputTokens ?? 0) + (resources.outputTokens ?? 0)) * 0.35,
          ) || 40_000,
        ),
      ),
    });
    if (!again.ok) {
      suspended = true;
      suspendReason = again.reason ?? "GLOBAL_BUDGET_EXHAUSTED";
      break;
    }

    // C16: local invocation segment cap is technical, not a business COMPLETE.
    if (i === maxLocal - 1) {
      suspended = true;
      suspendReason = "SEGMENT_INVOCATION_LIMIT";
      investigation = {
        ...investigation,
        contractReady: false,
        contractReadyBlockedReason: suspendReason,
        remainingWork:
          investigation.remainingWork.length > 0
            ? investigation.remainingWork
            : ["Continuation requise — limite de segments de cette invocation"],
      };
      work = await checkpointCognitiveWork({
        pilotId: input.pilotId,
        workId: work.id,
        ownerToken,
        expectedRevision: revision,
        cause: "BUDGET",
        state: investigation,
        resources,
        production,
        status: "SUSPENDED",
        interruptCause: suspendReason,
        turnCommandId: input.turnCommandId,
      });
      revision = work.revision;
      break;
    }
  }

  // C17: only a real global envelope exhaustion poisons sufficiency as BUDGET_EXHAUSTED.
  // SEGMENT_INVOCATION_LIMIT is a technical local cap — suspend honestly, stay resumable,
  // and never block later READY as if the global budget were spent.
  const isGlobalBudget =
    Boolean(suspendReason) &&
    (suspendReason === "GLOBAL_BUDGET_EXHAUSTED" ||
      suspendReason === "GLOBAL_SEGMENT_BUDGET_EXHAUSTED" ||
      suspendReason === "GLOBAL_TOKEN_BUDGET_EXHAUSTED" ||
      (suspendReason?.startsWith("GLOBAL_") === true &&
        suspendReason.includes("BUDGET")));
  if (suspended && isGlobalBudget) {
    investigation = {
      ...investigation,
      sufficiency: "BUDGET_EXHAUSTED",
      contractReady: false,
      contractReadyBlockedReason: suspendReason,
    };
  } else if (suspended && suspendReason === "SEGMENT_INVOCATION_LIMIT") {
    investigation = {
      ...investigation,
      sufficiency:
        investigation.sufficiency === "BUDGET_EXHAUSTED"
          ? "UNKNOWN"
          : investigation.sufficiency,
      contractReady: false,
      contractReadyBlockedReason: suspendReason,
    };
  } else if (!suspended && investigation.sufficiency === "BUDGET_EXHAUSTED") {
    // Resume completed after a prior false budget poison (segment cap) — re-evaluate.
    investigation = evaluateContractReadiness({
      ...investigation,
      sufficiency: "UNKNOWN",
      contractReadyBlockedReason: null,
    });
  }

  // C18: AWAIT_PILOT / open determinant clarifications must leave an OPEN work —
  // not a false COMPLETE — so the next pilot turn can resume without injecting workId.
  const openDeterminantStructured = (qualification?.determiningQuestions ?? []).some(
    (q) => q.importance === "DETERMINANT" && q.status === "OPEN",
  );
  const openClarifications = (qualification?.clarifications?.length ?? 0) > 0;
  const awaitPilot =
    qualification?.workDisposition === "AWAIT_PILOT" ||
    qualification?.workDisposition === "SUSPEND" ||
    qualification?.status === "NEEDS_CLARIFICATION" ||
    openDeterminantStructured ||
    openClarifications;
  const terminalStatus = suspended
    ? "SUSPENDED"
    : production.status === "PARTIAL" || production.status === "FAILED"
      ? "SUSPENDED"
      : awaitPilot
        ? "OPEN"
        : "COMPLETE";
  const terminalInterrupt =
    suspendReason ??
    (awaitPilot
      ? qualification?.workDisposition === "SUSPEND"
        ? "AWAIT_OR_SUSPEND"
        : "AWAIT_PILOT"
      : null);

  // Persist terminal investigation while ownership still holds (READY reads this state).
  work = await checkpointCognitiveWork({
    pilotId: input.pilotId,
    workId: work.id,
    ownerToken,
    expectedRevision: revision,
    cause: suspended ? "BUDGET" : awaitPilot ? "AWAIT_PILOT" : "SEGMENT_COMPLETE",
    state: investigation,
    resources,
    production,
    status: terminalStatus === "COMPLETE" ? "COMPLETE" : terminalStatus === "OPEN" ? "OPEN" : "SUSPENDED",
    interruptCause: terminalInterrupt,
    turnCommandId: input.turnCommandId,
  });
  revision = work.revision;

  await releaseCognitiveWorkLease({
    workId: work.id,
    ownerToken,
    status: terminalStatus,
    interruptCause: terminalInterrupt,
  });

  return {
    work: { ...work, status: terminalStatus, resources, production, state: investigation },
    ownerToken,
    resumed: opened.resumed,
    segmentsRun,
    replyText,
    qualification,
    investigation,
    suspended,
    suspendReason,
    production,
  };
}
