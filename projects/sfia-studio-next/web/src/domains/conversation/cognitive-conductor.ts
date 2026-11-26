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
  normalizeConclusionKey,
  type InvestigationState,
} from "./investigation-state";
import type { NoraTurnQualification } from "./semantic-qualification";

/** Fingerprint of measurable progress — sources, conclusions, remaining work, questions. */
function progressFingerprint(state: InvestigationState): string {
  const sources = state.sources
    .map((s) => `${s.ref}:${s.coverage}:${s.versionOrSha ?? ""}`)
    .sort()
    .join("|");
  // C1 / D2 — reformulations of the same conclusion must not count as progress.
  const conclusions = [...new Set((state.conclusions ?? []).map(normalizeConclusionKey))]
    .filter(Boolean)
    .sort()
    .join("|");
  const remaining = state.remainingWork
    .map((w) => normalizeConclusionKey(w))
    .filter(Boolean)
    .sort()
    .join("|");
  const questions = state.questions
    .map((q) => `${q.id}:${q.status}:${normalizeConclusionKey(q.answerSummary ?? "")}`)
    .sort()
    .join("|");
  const inventory = `${state.inventoryExamined ?? 0}:${state.inventoryPartial ?? 0}:${state.inventoryDenied ?? 0}:${state.inventoryTotal ?? ""}`;
  return `${sources}#${conclusions}#${remaining}#${questions}#${inventory}`;
}

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
  /** B4 — provenance when forceNew reuses prior acquis. */
  parentWorkId?: string | null;
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
    parentWorkId: input.parentWorkId,
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
  let stagnantSegments = 0;
  let lastProgressKey = progressFingerprint(investigation);
  let reevaluationNoted = false;
  /** D4 — once set, next segment may consume the restitution reserve (no further investigation). */
  let restitutionPhase = (resources.limits ?? []).includes("RESTITUTION_PHASE");

  for (let i = 0; i < maxLocal; i++) {
    // Preventive check with restitution reserve + projected next-segment cost.
    // Soft stop before another heavy segment; hard stop when already at/over ceiling.
    // D4 — restitution phase may spend the reserve (reserveForRestitution: 0).
    const usedBefore =
      (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0);
    const projectedNext =
      i === 0 && usedBefore === 0
        ? 0
        : restitutionPhase
          ? Math.min(24_000, Math.max(8_000, Math.floor(usedBefore * 0.04) || 12_000))
          : Math.min(60_000, Math.max(20_000, Math.floor(usedBefore * 0.12) || 30_000));
    const envelope = evaluateGlobalResourceEnvelope(resources, process.env, {
      reserveForRestitution: i === 0 || restitutionPhase ? 0 : 24_000,
      projectedNextSegmentTokens: i === 0 ? 0 : projectedNext,
    });
    if (!envelope.ok) {
      // Soft stop with acquis → enter restitution once instead of discarding the reserve.
      const hasAcquis =
        investigation.sources.some((s) =>
          ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
        ) || (investigation.conclusions?.length ?? 0) > 0;
      if (
        envelope.softStop &&
        !restitutionPhase &&
        hasAcquis &&
        i < maxLocal
      ) {
        restitutionPhase = true;
        resources = {
          ...resources,
          limits: [
            ...(resources.limits ?? []).filter((l) => l !== "RESTITUTION_PHASE"),
            "RESTITUTION_PHASE",
          ].slice(-40),
        };
        investigation = {
          ...investigation,
          remainingWork: [
            ...investigation.remainingWork.filter(
              (w) => !/restitution|synthèse finale/i.test(w),
            ),
            "Restitution — produire la synthèse finale avec références et limites explicites",
          ].slice(0, 12),
        };
        // Retry this iteration under restitution accounting.
        i -= 1;
        continue;
      }
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
    if (envelope.reevaluationNeeded && !reevaluationNoted) {
      reevaluationNoted = true;
      // D5 — 1M threshold changes strategy (restitution / narrower continue), not only text.
      restitutionPhase = true;
      investigation = {
        ...investigation,
        remainingWork: [
          ...investigation.remainingWork.filter((w) => !/réévaluation/i.test(w)),
          "Réévaluation stratégique 1M — restreindre aux questions ouvertes déterminantes ou restituer",
        ].slice(0, 12),
      };
      resources = {
        ...resources,
        limits: [
          ...(resources.limits ?? []),
          "REEVAL_THRESHOLD_1M",
          "RESTITUTION_PHASE",
        ].slice(-40),
      };
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

    // S2 — refused resource proposal without silent substitution → honest SUSPEND.
    const resourceSuspend = (segment.resourcesDelta?.limits ?? []).includes(
      "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
    );
    if (resourceSuspend) {
      suspended = true;
      suspendReason = "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION";
    }

    const nextProgressKey = progressFingerprint(investigation);
    if (nextProgressKey === lastProgressKey && segment.continueWork) {
      stagnantSegments += 1;
    } else {
      stagnantSegments = 0;
      lastProgressKey = nextProgressKey;
    }

    work = await checkpointCognitiveWork({
      pilotId: input.pilotId,
      workId: work.id,
      ownerToken,
      expectedRevision: revision,
      cause: resourceSuspend
        ? "BUDGET"
        : segment.continueWork
          ? "SEGMENT_CONTINUE"
          : "SEGMENT_COMPLETE",
      state: investigation,
      resources,
      production,
      status: resourceSuspend ? "SUSPENDED" : "RUNNING",
      interruptCause: resourceSuspend ? suspendReason : null,
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
        const inventoryTotal =
          typeof investigation.inventoryTotal === "number"
            ? investigation.inventoryTotal
            : null;
        const progressSummary = segment.continueWork
          ? consulted > 0
            ? inventoryTotal != null && inventoryTotal > 0
              ? `Approfondissement — ${consulted}/${inventoryTotal} sources examinées`
              : `Approfondissement — ${consulted} source${consulted > 1 ? "s" : ""} consultée${consulted > 1 ? "s" : ""}${discovered ? ` · ${discovered} découverte${discovered > 1 ? "s" : ""}` : ""}`
            : `Approfondissement du travail — segment ${segmentsRun}`
          : consulted > 0
            ? inventoryTotal != null && inventoryTotal > 0
              ? `Consolidation — ${consulted}/${inventoryTotal} sources couvertes`
              : `Consolidation — ${consulted} source${consulted > 1 ? "s" : ""} exploitée${consulted > 1 ? "s" : ""}`
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
            inventoryTotal,
            objective: (investigation.intentSummary || work.objective || "").slice(0, 140),
          },
          sourceRef: work.id,
          ownerToken,
        });
      } catch {
        /* observational */
      }
    }

    if (!segment.continueWork || resourceSuspend) {
      break;
    }

    // Anti-loop: three consecutive segments without new sources/conclusions/questions.
    if (stagnantSegments >= 3) {
      suspended = true;
      suspendReason = "NO_PROGRESS_DETECTED";
      investigation = {
        ...investigation,
        contractReady: false,
        contractReadyBlockedReason: suspendReason,
        remainingWork: [
          ...investigation.remainingWork,
          "Suspension — absence de progression mesurable sur trois segments",
        ].slice(0, 12),
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

    // Enter restitution when Nora marks the objective sufficient mid-run.
    if (
      !restitutionPhase &&
      (qualification?.investigationSufficiency === "SUFFICIENT" ||
        investigation.sufficiency === "SUFFICIENT")
    ) {
      restitutionPhase = true;
      resources = {
        ...resources,
        limits: [
          ...(resources.limits ?? []).filter((l) => l !== "RESTITUTION_PHASE"),
          "RESTITUTION_PHASE",
        ].slice(-40),
      };
    }

    const again = evaluateGlobalResourceEnvelope(resources, process.env, {
      reserveForRestitution: restitutionPhase ? 0 : 24_000,
      projectedNextSegmentTokens: restitutionPhase
        ? Math.min(
            24_000,
            Math.max(
              8_000,
              Math.floor(
                ((resources.inputTokens ?? 0) + (resources.outputTokens ?? 0)) *
                  0.04,
              ) || 12_000,
            ),
          )
        : Math.min(
            60_000,
            Math.max(
              20_000,
              Math.floor(
                ((resources.inputTokens ?? 0) + (resources.outputTokens ?? 0)) *
                  0.12,
              ) || 30_000,
            ),
          ),
    });
    if (!again.ok) {
      const hasAcquisAfter =
        investigation.sources.some((s) =>
          ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
        ) || (investigation.conclusions?.length ?? 0) > 0;
      // Soft-stop enters restitution only when acquis exist — otherwise suspend honestly.
      if (again.softStop && !restitutionPhase && hasAcquisAfter) {
        restitutionPhase = true;
        resources = {
          ...resources,
          limits: [
            ...(resources.limits ?? []).filter((l) => l !== "RESTITUTION_PHASE"),
            "RESTITUTION_PHASE",
          ].slice(-40),
        };
        // Allow one more loop iteration under restitution accounting.
        continue;
      }
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
