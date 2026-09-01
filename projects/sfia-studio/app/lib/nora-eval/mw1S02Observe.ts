/**
 * MW1-S02 / CORR-01+CORR-02 — runtime-derived DeterministicObservation.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  COMPACTION_COGNITIVE_DISCLOSURE,
  COMPACTION_PILOTE_NOTICE,
  ProductSqliteSession,
  applyCompactionIfNeeded,
  computeRawProvenanceCoverage,
  loadSessionRows,
  partitionMemoryBForCompaction,
  resolveReplayItems,
  staleDisclosureMatchesReplaySemantics,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { DeterministicObservation } from "./scorers";

export type Mw1S02RuntimeFacts = {
  compactionTriggered: boolean;
  replayFootprintReduced: boolean;
  compactionProvenancePresent: boolean;
  lossSignaledCorrectly: boolean;
  noFalseExhaustiveClaim: boolean;
  governingContextSafe: boolean;
  truthCRevisionRecorded: boolean;
  staleDetected: boolean;
  staleReplayPrevented: boolean;
  sessionNeqTruthC: boolean;
  agentsRuntimeUsed: boolean;
  /** CORR-01 */
  partitionComplete: boolean;
  noOrphanedRemovedItems: boolean;
  provenanceCoverageComplete: boolean;
  recompactionLineagePreserved: boolean;
  lossHonestForOmission: boolean;
  lossMonotonic: boolean;
  staleDisclosureMatchesReplay: boolean;
  /** CORR-02 */
  staleSemanticLineageNotResurrected: boolean;
  staleGoverningLineageNotResurrected: boolean;
  crossRevisionRecompactionUsesCurrentTruthC: boolean;
  currentRawProvenanceCoverageIndependent: boolean;
  stalePriorInvalidationSignaled: boolean;
};

const EVAL_POLICY = {
  itemThreshold: 4,
  keepRecentCount: 2,
  maxSummaryChars: 900,
};
const NOW = "2026-08-31T12:00:00.000Z";
const R1_MARKER = "STALE-R1-CONTEXT-DO-NOT-RESURRECT";
const R1_STOP = "STOP-R1-BEFORE-MERGE";

export function observationFromMw1S02Facts(
  facts: Mw1S02RuntimeFacts,
): DeterministicObservation {
  const criteriaOk =
    facts.compactionTriggered &&
    facts.replayFootprintReduced &&
    facts.compactionProvenancePresent &&
    facts.lossSignaledCorrectly &&
    facts.noFalseExhaustiveClaim &&
    facts.governingContextSafe &&
    facts.truthCRevisionRecorded &&
    facts.staleDetected &&
    facts.staleReplayPrevented &&
    facts.sessionNeqTruthC &&
    facts.agentsRuntimeUsed &&
    facts.partitionComplete &&
    facts.noOrphanedRemovedItems &&
    facts.provenanceCoverageComplete &&
    facts.recompactionLineagePreserved &&
    facts.lossHonestForOmission &&
    facts.lossMonotonic &&
    facts.staleDisclosureMatchesReplay &&
    facts.staleSemanticLineageNotResurrected &&
    facts.staleGoverningLineageNotResurrected &&
    facts.crossRevisionRecompactionUsesCurrentTruthC &&
    facts.currentRawProvenanceCoverageIndependent &&
    facts.stalePriorInvalidationSignaled;

  return {
    productPath: facts.agentsRuntimeUsed ? "agents" : "none",
    compactionTriggered: facts.compactionTriggered,
    replayFootprintReduced: facts.replayFootprintReduced,
    compactionProvenancePresent: facts.compactionProvenancePresent,
    lossSignaledCorrectly: facts.lossSignaledCorrectly,
    noFalseExhaustiveClaim: facts.noFalseExhaustiveClaim,
    governingContextSafe: facts.governingContextSafe,
    truthCRevisionRecorded: facts.truthCRevisionRecorded,
    staleDetected: facts.staleDetected,
    staleReplayPrevented: facts.staleReplayPrevented,
    sessionNeqTruthC: facts.sessionNeqTruthC,
    partitionComplete: facts.partitionComplete,
    noOrphanedRemovedItems: facts.noOrphanedRemovedItems,
    provenanceCoverageComplete: facts.provenanceCoverageComplete,
    recompactionLineagePreserved: facts.recompactionLineagePreserved,
    lossHonestForOmission: facts.lossHonestForOmission,
    lossMonotonic: facts.lossMonotonic,
    staleDisclosureMatchesReplay: facts.staleDisclosureMatchesReplay,
    staleSemanticLineageNotResurrected: facts.staleSemanticLineageNotResurrected,
    staleGoverningLineageNotResurrected:
      facts.staleGoverningLineageNotResurrected,
    crossRevisionRecompactionUsesCurrentTruthC:
      facts.crossRevisionRecompactionUsesCurrentTruthC,
    currentRawProvenanceCoverageIndependent:
      facts.currentRawProvenanceCoverageIndependent,
    stalePriorInvalidationSignaled: facts.stalePriorInvalidationSignaled,
    observedObservableIds: criteriaOk ? ["obs.memory.honest_continuity"] : [],
  };
}

function failFacts(
  overrides: Partial<Mw1S02RuntimeFacts> = {},
): Mw1S02RuntimeFacts {
  return {
    compactionTriggered: false,
    replayFootprintReduced: false,
    compactionProvenancePresent: false,
    lossSignaledCorrectly: false,
    noFalseExhaustiveClaim: false,
    governingContextSafe: false,
    truthCRevisionRecorded: false,
    staleDetected: false,
    staleReplayPrevented: false,
    sessionNeqTruthC: false,
    agentsRuntimeUsed: false,
    partitionComplete: false,
    noOrphanedRemovedItems: false,
    provenanceCoverageComplete: false,
    recompactionLineagePreserved: false,
    lossHonestForOmission: false,
    lossMonotonic: false,
    staleDisclosureMatchesReplay: false,
    staleSemanticLineageNotResurrected: false,
    staleGoverningLineageNotResurrected: false,
    crossRevisionRecompactionUsesCurrentTruthC: false,
    currentRawProvenanceCoverageIndependent: false,
    stalePriorInvalidationSignaled: false,
    ...overrides,
  };
}

export async function observeMw1S02FromRuntime(): Promise<DeterministicObservation> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-obs-"));
  const sessionDb = path.join(dir, "nora-session.sqlite");
  const productDb = path.join(dir, "oa-product.sqlite");
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;

  try {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    resetRuntimeApplicationServiceForTests();

    const runtime = getRuntimeApplicationService({
      productDbPath: productDb,
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "S02 eval observe",
      objective: "Compaction eval",
      context: "MW1-S02",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "S02EV",
      idempotencyKey: `s02-obs-${Date.now()}`,
    });
    if (!created.ok) {
      return observationFromMw1S02Facts(failFacts());
    }
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    if (!overview.ok) {
      return observationFromMw1S02Facts(
        failFacts({ sessionNeqTruthC: true }),
      );
    }
    const rev1 = {
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDb,
      sessionKey: "f1-default",
    });

    const seed = [
      userTextItem("Useful premise for eval"),
      assistantTextItem("Acknowledged"),
      userTextItem(`${R1_MARKER} ${"z".repeat(40)}`),
      assistantTextItem("noise-reply"),
      userTextItem(`governing premise: ${R1_STOP}`),
      assistantTextItem("Will not merge"),
      userTextItem(`filler-${"y".repeat(40)}`),
      assistantTextItem("filler-reply"),
    ];
    await session.addItems(seed);
    const beforeCount = seed.length;
    const before = await loadSessionRows(session);
    const { toCompact, recent } = partitionMemoryBForCompaction(
      before.conversation,
      EVAL_POLICY.keepRecentCount,
    );
    const partitionComplete =
      toCompact.length + recent.length === before.conversation.length &&
      toCompact.every((c) => !recent.some((r) => r.seq === c.seq));

    const compact = await applyCompactionIfNeeded({
      session,
      truthCRevision: rev1,
      policy: EVAL_POLICY,
      nowIso: NOW,
    });
    const loaded = await loadSessionRows(session);
    const record = loaded.compaction;
    const coverage = record
      ? computeRawProvenanceCoverage({
          removedSourceSeqs: toCompact.map((r) => r.seq),
          provenance: record.provenance,
        })
      : null;

    const replayValid = resolveReplayItems({
      loaded,
      currentTruthCRevision: rev1,
    });

    // Same-revision recompaction lineage (CORR-01)
    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(`recomp-${i}-${"w".repeat(35)}`),
        assistantTextItem(`recomp-reply-${i}`),
      ]);
    }
    const firstLoss = record?.loss.occurred === true;
    const firstProvLen = record?.provenance.length ?? 0;
    const secondApplied = await applyCompactionIfNeeded({
      session,
      truthCRevision: rev1,
      policy: EVAL_POLICY,
      nowIso: NOW,
    });
    const loaded2 = await loadSessionRows(session);
    const rec2 = loaded2.compaction;
    const recompactionLineagePreserved =
      secondApplied.applied &&
      !!rec2 &&
      rec2.generation === 2 &&
      rec2.provenance.some((p) => p.kind === "inherited") &&
      rec2.provenance.filter((p) => p.kind === "inherited").length ===
        firstProvLen &&
      rec2.provenance.some((p) => p.kind === "raw") &&
      /STOP-R1-BEFORE-MERGE|inherited-compaction|STALE-R1/i.test(
        rec2.summaryText,
      );
    const lossMonotonic = firstLoss && rec2?.loss.occurred === true;

    // Immediate stale detection under bumped revision (before product LPS bump)
    const staleReplay = resolveReplayItems({
      loaded: loaded2,
      currentTruthCRevision: {
        lpsId: rev1.lpsId,
        lpsVersion: rev1.lpsVersion + 1,
      },
    });
    const recentRawReplayed = staleReplay.items.length > 0;
    const staleDisclosureMatchesReplay =
      staleDisclosureMatchesReplaySemantics({
        cognitiveText: COMPACTION_COGNITIVE_DISCLOSURE.stale_invalidated,
        piloteText: COMPACTION_PILOTE_NOTICE.stale_invalidated,
        recentRawReplayed,
      });

    // CORR-02: bump Truth C via Product API, then recompact under R2
    const oa = runtime.oa!;
    const appended =
      await oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: rev1.lpsVersion,
        objective: "S02-OBS-R2",
        createdBy: {
          actorId: "actor:s02-obs",
          role: "project_owner",
          displayName: "S02OBS",
          authorityLevel: "N3",
        },
        lpsVersionId: `${rev1.lpsId}-obs-v2`,
      });
    const overview2 = await runtime.getProject(projectId);
    const rev2 =
      appended.ok && overview2.ok
        ? {
            lpsId: overview2.livingState.id,
            lpsVersion: overview2.livingState.version,
          }
        : null;

    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(`cross-r2-${i}-${"v".repeat(35)}`),
        assistantTextItem(`cross-r2-reply-${i}`),
      ]);
    }
    const beforeCross = await loadSessionRows(session);
    const { toCompact: crossC } = partitionMemoryBForCompaction(
      beforeCross.conversation,
      EVAL_POLICY.keepRecentCount,
    );
    const cross =
      rev2 &&
      (await applyCompactionIfNeeded({
        session,
        truthCRevision: rev2,
        policy: EVAL_POLICY,
        nowIso: NOW,
      }));
    const loaded3 = await loadSessionRows(session);
    const rec3 = loaded3.compaction;
    const crossCoverage =
      cross && rec3
        ? computeRawProvenanceCoverage({
            removedSourceSeqs: crossC.map((r) => r.seq),
            provenance: rec3.provenance,
          })
        : null;

    const staleSemanticLineageNotResurrected = Boolean(
      cross &&
        rec3 &&
        !rec3.summaryText.includes(R1_MARKER) &&
        !/inherited-compaction/i.test(rec3.summaryText) &&
        rec3.provenance.every((p) => p.kind === "raw"),
    );
    const staleGoverningLineageNotResurrected = Boolean(
      cross &&
        rec3 &&
        !rec3.summaryText.includes(R1_STOP) &&
        rec3.loss.governingContextExplicitLoss === true,
    );
    const crossRevisionRecompactionUsesCurrentTruthC = Boolean(
      rev2 &&
        rec3 &&
        rec3.truthCRevision.lpsId === rev2.lpsId &&
        rec3.truthCRevision.lpsVersion === rev2.lpsVersion,
    );
    const currentRawProvenanceCoverageIndependent = Boolean(
      crossCoverage &&
        crossCoverage.orphanedRemovedSourceCount === 0 &&
        crossCoverage.duplicateCoverageCount === 0 &&
        crossCoverage.provenanceCoveredSourceCount ===
          crossCoverage.removedSourceCount &&
        rec3?.provenance.every((p) => p.kind === "raw"),
    );
    const stalePriorInvalidationSignaled = Boolean(
      cross?.stalePriorInvalidated &&
        rec3?.invalidatedPriorCompaction?.invalidatedBecause ===
          "truth_c_revision_changed" &&
        rec3.loss.occurred === true,
    );

    const { runNoraCognitiveTurn } = await import(
      "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn"
    );
    const turn = await runNoraCognitiveTurn({
      correlationId: "s02-obs",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary" },
        { role: "user", content: "Check compaction" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] ok"],
      }),
      enableTools: false,
      sessionDbPath: sessionDb,
      truthCRevision: rev2 ?? rev1,
      compactionNowIso: NOW,
    });
    session.close();

    const lossOk =
      !!record &&
      record.loss.occurred === true &&
      replayValid.state === "compacted_with_loss";

    return observationFromMw1S02Facts({
      compactionTriggered: compact.applied,
      replayFootprintReduced:
        compact.applied && replayValid.items.length < beforeCount,
      compactionProvenancePresent:
        !!record &&
        !!coverage &&
        coverage.provenanceCoveredSourceCount === coverage.removedSourceCount &&
        coverage.orphanedRemovedSourceCount === 0,
      lossSignaledCorrectly: lossOk,
      noFalseExhaustiveClaim:
        !!record && /NOT EXHAUSTIVE/i.test(record.summaryText),
      governingContextSafe:
        !!record &&
        (record.loss.governingContextRetained ||
          record.loss.governingContextExplicitLoss) &&
        record.summaryText.includes(R1_STOP),
      truthCRevisionRecorded:
        !!record &&
        record.truthCRevision.lpsId === rev1.lpsId &&
        record.truthCRevision.lpsVersion === rev1.lpsVersion,
      staleDetected: staleReplay.state === "stale_invalidated",
      staleReplayPrevented:
        staleReplay.state === "stale_invalidated" &&
        !JSON.stringify(staleReplay.items).includes("MW1-S02 COMPACTED"),
      sessionNeqTruthC: loaded.conversation.every(
        (r) => !JSON.stringify(r.item).includes("oa_"),
      ),
      agentsRuntimeUsed: turn.cognitiveRuntime === "agents",
      partitionComplete,
      noOrphanedRemovedItems: coverage?.orphanedRemovedSourceCount === 0,
      provenanceCoverageComplete:
        !!coverage &&
        coverage.orphanedRemovedSourceCount === 0 &&
        coverage.duplicateCoverageCount === 0 &&
        coverage.provenanceCoveredSourceCount === coverage.removedSourceCount,
      recompactionLineagePreserved,
      lossHonestForOmission: lossOk,
      lossMonotonic: Boolean(lossMonotonic),
      staleDisclosureMatchesReplay,
      staleSemanticLineageNotResurrected,
      staleGoverningLineageNotResurrected,
      crossRevisionRecompactionUsesCurrentTruthC,
      currentRawProvenanceCoverageIndependent,
      stalePriorInvalidationSignaled,
    });
  } finally {
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    try {
      resetRuntimeApplicationServiceForTests();
    } catch {
      /* ignore */
    }
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
