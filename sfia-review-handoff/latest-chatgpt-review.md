# Review Pack — MW1 FINAL DETERMINISTIC PROOF / EXIT QA
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**

## 1. Timestamp Europe/Paris
2026-09-01 06:47:58 CEST

## 2. Repository
mcleland147/sfia-workspace

## 3. Cycle 9 / INC / CRITICAL
Cycle 9 QA/validation · INC · CRITICAL · MW1 aggregate deterministic exit proof
CKC: pilots/04-qa-validation.md v0.1.0 candidate authority NONE

## 4. Exact Morris Final Proof GO consumed
"ok go" — FINAL MW1 DETERMINISTIC PROOF ONLY (no project Git, no REAL, no production correction)

## 5. origin/main SHA/tree
`0f265149dc7e088ac62ff99c6f998274bec6c94f` / `92fce49d245ffb4cbfc43b2b55e1004648b6a900`

## 6. Local worktree/branch/HEAD/tree/ahead
`/Users/morris/Projects/sfia-workspace-nora-mw1-s01-honest-memory-b`
`delivery/sfia-studio-nora-mw1-s01-honest-memory-b`
HEAD `0f265149…` · tree `92fce49d…` · ahead **0**

## 7. Input handoff
`aa5d5937a47e19d4bccedda525e4fea4871246a4` (parent `a9fc06bd…` — MW1-S03 CORR-02)

## 8. Pre-final candidate fingerprints
```
b508a77ec547ca45fce41e543dfce22616ad0ffd11712d84966e860e41674fea  /tmp/mw1-final-fp-6399b4/tracked.diff
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  /tmp/mw1-final-fp-6399b4/staged.diff
1d5cd4b762d04d3080450263f92898067bcb1810dfb60f09055a22daed4d8915  /tmp/mw1-final-fp-6399b4/untracked.manifest
FPDIR=/tmp/mw1-final-fp-6399b4

PRE_CORR02_TRACKED_DIFF_SHA=b508a77ec547ca45fce41e543dfce22616ad0ffd11712d84966e860e41674fea
PRE_CORR02_STAGED_DIFF_SHA=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
PRE_CORR02_UNTRACKED_MANIFEST_SHA=1d5cd4b762d04d3080450263f92898067bcb1810dfb60f09055a22daed4d8915
PRE_CORR02_UNTRACKED_CONTENT_SHA=5f34b3d958bf98f0c131b0cd08a05a37640b3fab29ffd7b0b3bb4ff223fd21f0
```

## 9. Aggregate candidate file inventory
Tracked modified (23): S01/S02/S03 delivery + eval integration (unchanged during QA)
Untracked MW1 assets: memoryBAvailability.ts, memoryBCompaction.ts, materializeFromMemoryB.ts, S01/S02/S03 tests+eval, mw1S01Observe.ts, mw1S02Observe.ts
**QA-only addition:** `mw1.final.deterministic.e2e.test.ts`

## 10. Sources read
Process templates, routing guide, operating model, guardrails, cycles map, CKC 04-qa-validation, convergence doctrine/roadmap, product-completion cadrage, NORA completion docs, v3 framing 30/32/33/35, handoff aa5d5937

## 11. Convergence Pre-check
MW1-S01/S02/S03 KEEP · RuntimeOaStack KEEP · Responses Compaction NOT ADOPTED · TA=0 · MW2 NOT AUTHORIZED

## 12. CKC QA candidate
Evidence-based verdict · explicit oracle · positive+negative · reproducibility · PASS only from evidence

## 13–15. C5 exact S01/S02/S03 oracles
**S01:** honest inter-session Memory B continuity; Truth C restore; B unavailable disclosed; no invented transcript; DETERMINISTIC E2E+BOUNDARY+EVAL; NCC-BAR-07
**S02:** compaction provenance/loss/governing STOP; same-revision recompaction; cross-revision stale invalidation; UNIT+MODELED+EVAL; NCC-BAR-07
**S03:** Class1–4 + MaterializationBasis; never silent B→C; Pilote HD explicit executionBasis.scope; RuntimeOaStack materializer; DETERMINISTIC E2E

## 16–17. C2 B3/B5 + v3 invariants
Memory A≠B≠C; B never silently C; Truth C wins; Session≠Truth C; Recommendation≠HD; HumanDecision.scope≠structural basis; Pilote≠Morris; Trace≠Evidence; Provenance≠Evidence

## 18. Proof asset discovery
| Story | Files |
|-------|-------|
| S01 D0+E2E+EVAL | mw1.s01.honestMemoryB.d0.test.ts, mw1.s01.productTruthC.e2e.test.ts, mw1.s01.honestMemoryB.eval.test.ts |
| S02 unit+modeled+eval | mw1.s02.compaction.unit.test.ts, mw1.s02.compaction.modeled.test.ts, mw1.s02.compaction.eval.test.ts |
| S03 E2E | mw1.s03.materialization.e2e.test.ts (11 tests, NEG-C3-18/19) |
| Aggregate FINAL | mw1.final.deterministic.e2e.test.ts (NEW QA-only) |
| NCC-BAR-07 | obs.memory.honest_continuity via mw1S01Observe + S01/S02 eval |
| Option C D0 | sessionTruthC, session, runner, authority, fakeConvergence d0 tests |

## 19. CORR-MW1-07/08 discovery
Repository search: labels appear only in doctrine/backlog docs (`05-nora-source-locked-cognitive-backlog.md`, `07-nora-openai-cognitive-runtime-architecture-decision.md`, roadmap).
**Classification: CLOSED / already satisfied by S03 delivery**
- CORR-MW1-07 (materializationBasis / Class matrix) → S03 CORR-01/02 Class1–4 + basis enforcement
- CORR-MW1-08 (materializeToTruthC / real Evidence) → S03 Class1 actual Evidence E2E
No active separate deterministic requirement beyond proven S03 suite.

## 20. S01 test campaign — PASS
`npx vitest run mw1.s01.*` + eval: **25/25 PASS**
Covers: available_with_history, available_empty, unavailable, unavailable≠empty, restart/remount, Truth C restore, no invented transcript, same Agents Runner, product F1 route, NCC-BAR-07

## 21. S02 unit — PASS
mw1.s02.compaction.unit.test.ts: **PASS**

## 22. S02 modeled — PASS
mw1.s02.compaction.modeled.test.ts: **5/5 PASS** (noisy history, Truth C change, HD non-promotion, recompaction lineage, stale→recompaction CORR-02)

## 23. S02 eval — PASS
mw1.s02.compaction.eval.test.ts: **15/15 PASS** incl. NEG-S02-01→11

## 24. S03 E2E — PASS
mw1.s03.materialization.e2e.test.ts: **11/11 PASS** (Class1–4, NEG-C3-18/19, compacted stale, RuntimeOaStack composition)

## 25. NEG-S02 matrix — PASS
NEG-S02-01→11 all PASS via eval + modeled proofs

## 26. NEG-S03 matrix — PASS
NEG-S03-01→19 all PASS via S03 E2E (incl. NEG-C3-18 hd.scope-without-executionBasis, NEG-C3-19 cross-project DecisionBasis)

## 27. Aggregate MW1 E2E design
Single Product lifecycle: R1 Project+Session → S01 resume → S02 compaction → reject no-basis → Class2 accept (R1→R2) → stale compaction on resume → stale B materialization rejected
Companion: unavailable B branch

## 28. Aggregate MW1 E2E — COMPLETE CONTENT
```typescript
/** @vitest-environment node */
/**
 * MW1 FINAL — aggregate deterministic cross-story E2E (QA-only).
 *
 * One Product lifecycle exercising S01 → S02 → S03 interaction:
 * - Truth C resume + honest Memory B availability (S01)
 * - compaction with governing context + provenance (S02)
 * - never-silent B→C materialization via RuntimeOaStack (S03)
 * - Truth C change invalidates stale compaction (S02 × S03)
 *
 * Production code FROZEN — proof-only test asset.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  computeRawProvenanceCoverage,
  contentHash,
  extractItemText,
  loadSessionRows,
  partitionMemoryBForCompaction,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import { CapturingRoundFakeProvider } from "@/lib/nora-eval/mw1S01Observe";
import type { RuntimeStateTransition } from "@/lib/oa/project";
import {
  SqliteProductStore,
  SqliteProjectAuditJournal,
} from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const SEMANTIC_MARKER = "MW1-FINAL-R1-SEMANTIC-CONTEXT";
const STOP_MARKER = "MW1-FINAL-STOP-R1";
const POLICY = { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 };
const NOW = "2026-09-01T04:00:00.000Z";

const ACTOR = {
  actorId: "actor:studio-system",
  role: "system" as const,
  authorityLevel: "none" as const,
};

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function listMaterializationAudit(runtime: RuntimeApplicationService) {
  const store = runtime.oa!.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    throw new Error("expected SqliteProductStore");
  }
  return new SqliteProjectAuditJournal(store)
    .listAll()
    .filter(
      (e) =>
        e.event === "oa.memory.materialization.accepted" ||
        e.event === "oa.memory.materialization.rejected",
    );
}

function class2Transition(input: {
  projectId: string;
  lpsVersion: number;
  nextStep: string;
}): RuntimeStateTransition {
  return {
    kind: "set_next_step",
    projectId: input.projectId,
    fromLpsVersion: input.lpsVersion,
    targetKind: "nextStep",
    nextStep: input.nextStep,
  };
}

describe("MW1 FINAL — aggregate deterministic cross-story E2E", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;

  afterEach(() => {
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
  });

  it("Phases A–F — S01 resume → S02 compaction → S03 B→C → stale invalidation", async () => {
    const dir = tempDir("sfia-mw1-final-");
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const sessionDbPath = path.join(dir, "nora-session.sqlite");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    // ── Phase A — baseline Project R1 + Memory B ──────────────────────────
    resetRuntimeApplicationServiceForTests();
    const runtime1 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    expect(runtime1.oa?.materializationServices.materializeFromMemoryB).toBeTruthy();

    const truthMarkerR1 = `MW1-FINAL-R1-OBJECTIVE-${Date.now()}`;
    const created = await runtime1.createProject({
      name: "MW1 Final Aggregate",
      objective: truthMarkerR1,
      context: "Aggregate S01+S02+S03 deterministic exit proof",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "MW1FIN",
      idempotencyKey: `mw1-final-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const v1 = await runtime1.getProject(projectId);
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    const rev1 = {
      lpsId: v1.livingState.id,
      lpsVersion: v1.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem(`Useful premise: ${SEMANTIC_MARKER}`),
      assistantTextItem("Acknowledged semantic context."),
      userTextItem("noise ".repeat(30)),
      assistantTextItem("noise reply"),
      userTextItem(`governing premise: ${STOP_MARKER}`),
      assistantTextItem("Will not proceed without review."),
      userTextItem("More filler ".repeat(20)),
      assistantTextItem("More filler reply"),
    ]);
    const beforeCompact = await loadSessionRows(session);
    const { toCompact } = partitionMemoryBForCompaction(
      beforeCompact.conversation,
      POLICY.keepRecentCount,
    );
    const stopSeq = beforeCompact.conversation[4]!.seq;
    session.close();

    expect(beforeCompact.conversation.length).toBeGreaterThan(0);
    expect(toCompact.map((r) => r.seq)).toContain(stopSeq);

    // ── Phase B — S01 resume (available_with_history) ─────────────────────
    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const remounted = await runtime2.getProject(projectId);
    expect(remounted.ok).toBe(true);
    if (!remounted.ok) return;
    expect(remounted.project.objective).toBe(truthMarkerR1);
    expect(remounted.livingState.id).toBe(rev1.lpsId);

    const capturingB = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resume with available Memory B history."],
    });
    const resume = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume after restart with Memory B history.",
      provider: capturingB,
      sessionDbPath,
    });
    expect(resume.ok).toBe(true);
    if (!resume.ok) return;
    expect(resume.memoryBAvailability).toBe("available_with_history");
    expect(resume.cognitiveRuntime).toBe("agents");
    expect(resume.project.objective).toBe(truthMarkerR1);
    expect(capturingB.capturedText()).toContain(truthMarkerR1);
    expect(capturingB.capturedText()).not.toMatch(
      /HumanDecision fabriqu|autorisation GO invent/i,
    );

    // ── Phase C — S02 compaction at R1 ────────────────────────────────────
    const sessionC = new ProductSqliteSession({
      projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    const compacted = await applyCompactionIfNeeded({
      session: sessionC,
      truthCRevision: rev1,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(compacted.applied).toBe(true);
    const loadedR1 = await loadSessionRows(sessionC);
    expect(loadedR1.compaction).not.toBeNull();
    expect(loadedR1.compaction!.summaryText).toMatch(new RegExp(STOP_MARKER));
    expect(loadedR1.compaction!.loss.occurred).toBe(true);
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: toCompact.map((r) => r.seq),
      provenance: loadedR1.compaction!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(coverage.coveredSourceSeqs).toContain(stopSeq);

    const provenanceEntry = loadedR1.compaction!.provenance.find(
      (p) => p.kind === "raw",
    );
    expect(provenanceEntry).toBeTruthy();
    const staleCompactSource = {
      kind: "compacted_provenance" as const,
      sessionKey: "f1-default",
      generation: loadedR1.compaction!.generation,
      sourceSeq: provenanceEntry!.sourceSeq ?? provenanceEntry!.seq,
      contentHash: provenanceEntry!.contentHash,
    };
    sessionC.close();

    const materializer = runtime2.oa!.materializationServices.materializeFromMemoryB;
    const rawRow = loadedR1.conversation[loadedR1.conversation.length - 1]!;
    const rawSource = {
      kind: "raw" as const,
      sessionKey: "f1-default",
      seq: rawRow.seq,
      contentHash: contentHash(extractItemText(rawRow.item)),
    };

    // ── Phase D — never-silent B→C ────────────────────────────────────────
    const beforeMat = await runtime2.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(beforeMat.ok).toBe(true);
    if (!beforeMat.ok) return;
    const lpsBefore = beforeMat.livingProjectState.version;

    const noBasis = await materializer.execute({
      projectId,
      materializationClass: 2,
      basis: null,
      memoryBSource: rawSource,
      target: { kind: "nextStep", nextStep: "mw1-final-next" },
      expectedLpsVersion: lpsBefore,
      correlationId: "cor:mw1-final-no-basis",
      actor: ACTOR,
      sessionDbPath,
    });
    expect(noBasis.ok).toBe(false);
    if (!noBasis.ok) {
      expect(noBasis.detailCode).toBe("MATERIALIZATION_BASIS_REQUIRED");
    }

    const afterReject = await runtime2.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(afterReject.ok).toBe(true);
    if (!afterReject.ok) return;
    expect(afterReject.livingProjectState.version).toBe(lpsBefore);
    expect(afterReject.livingProjectState.nextStep).toBe(
      beforeMat.livingProjectState.nextStep,
    );
    expect(
      listMaterializationAudit(runtime2).some(
        (e) => e.event === "oa.memory.materialization.rejected",
      ),
    ).toBe(true);

    const accepted = await materializer.execute({
      projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: class2Transition({
          projectId,
          lpsVersion: lpsBefore,
          nextStep: "mw1-final-r2-step",
        }),
      },
      memoryBSource: rawSource,
      target: { kind: "nextStep", nextStep: "mw1-final-r2-step" },
      expectedLpsVersion: lpsBefore,
      correlationId: "cor:mw1-final-accept",
      actor: ACTOR,
      sessionDbPath,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;

    const v2 = await runtime2.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.livingProjectState.version).toBeGreaterThan(lpsBefore);
    expect(v2.livingProjectState.nextStep).toBe("mw1-final-r2-step");
    const rev2 = {
      lpsId: v2.livingProjectState.lpsVersionId,
      lpsVersion: v2.livingProjectState.version,
    };

    // ── Phase E — R1 compaction stale after R2 Truth C ────────────────────
    resetRuntimeApplicationServiceForTests();
    const runtime3 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const capturingE = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resume after Truth C R2 mutation."],
    });
    const afterTruthChange = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume after Truth C advanced to R2.",
      provider: capturingE,
      sessionDbPath,
    });
    expect(afterTruthChange.ok).toBe(true);
    if (!afterTruthChange.ok) return;
    expect(afterTruthChange.memoryBCompactionState).toBe("stale_invalidated");
    expect(afterTruthChange.project.lpsVersion).toBe(rev2.lpsVersion);
    const cognition = capturingE.capturedText();
    expect(cognition).toMatch(/\(v2[,)]/);
    expect(cognition).not.toContain(SEMANTIC_MARKER);
    expect(cognition).not.toMatch(/\[MW1-S02 COMPACTED MEMORY B/);
    expect(cognition).toMatch(/STALE|invalid/i);

    const projectAfterR2 =
      await runtime3.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(projectAfterR2.ok).toBe(true);
    if (!projectAfterR2.ok) return;
    expect(projectAfterR2.livingProjectState.nextStep).toBe("mw1-final-r2-step");

    // ── Phase F — stale compacted B cannot materialize into R2 ──────────
    const staleMat = await runtime3.oa!.materializationServices.materializeFromMemoryB.execute({
      projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: class2Transition({
          projectId,
          lpsVersion: rev2.lpsVersion,
          nextStep: "stale-should-fail",
        }),
      },
      memoryBSource: staleCompactSource,
      target: { kind: "nextStep", nextStep: "stale-should-fail" },
      expectedLpsVersion: rev2.lpsVersion,
      correlationId: "cor:mw1-final-stale-b",
      actor: ACTOR,
      sessionDbPath,
    });
    expect(staleMat.ok).toBe(false);
    if (!staleMat.ok) {
      expect(staleMat.detailCode).toBe("MEMORY_B_SOURCE_STALE");
    }

    const afterStale = await runtime3.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(afterStale.ok).toBe(true);
    if (!afterStale.ok) return;
    expect(afterStale.livingProjectState.version).toBe(rev2.lpsVersion);
    expect(afterStale.livingProjectState.nextStep).toBe("mw1-final-r2-step");
    expect(
      listMaterializationAudit(runtime3).filter(
        (e) => e.event === "oa.memory.materialization.rejected",
      ).length,
    ).toBeGreaterThanOrEqual(2);
  });

  it("Phase B companion — unavailable Memory B discloses; Truth C still restores", async () => {
    const dir = tempDir("sfia-mw1-final-unavail-");
    const productDbPath = path.join(dir, "oa-product.sqlite");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const marker = `MW1-FINAL-UNAVAIL-${Date.now()}`;
    const created = await runtime.createProject({
      name: "MW1 Final Unavailable B",
      objective: marker,
      context: "S01 unavailable branch in aggregate campaign",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW1FU",
      idempotencyKey: `mw1-final-unavail-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });

    const blocker = path.join(dir, "session-parent-blocked");
    fs.writeFileSync(blocker, "not-a-directory");
    const blockedSessionPath = path.join(blocker, "nora-session.sqlite");

    const capturing = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Truth C only — B unavailable."],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume with unavailable Memory B.",
      provider: capturing,
      sessionDbPath: blockedSessionPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.memoryBAvailability).toBe("unavailable");
    expect(result.memoryBAvailability).not.toBe("available_empty");
    expect(result.project.objective).toBe(marker);
    expect(result.ephemeralNotice).toMatch(/Contexte conversationnel non disponible/i);
    expect(capturing.capturedText()).toContain(marker);
    expect(capturing.capturedText()).not.toMatch(/invented transcript/i);
  });
});

```

## 29–34. Aggregate Phases A–F — PASS
A baseline R1+B separate from C · B S01 resume available_with_history · C S02 compaction STOP+provenance+loss · D no-basis reject + Class2 accept · E stale_invalidated cognition · F MEMORY_B_SOURCE_STALE

## 35. NCC-BAR-07 — PASS
S01 eval D0 causal binding PASS · S02 eval obs.memory.honest_continuity PASS · aggregate proves B≠C, no silent promotion, stale honesty

## 36. Option C CI-01→14 — PASS
Mapped to Option C D0 suite (5 files, 38 tests): Session≠Truth C, single Runner, routeToolCall, authority boundaries, fake convergence, no runToolCallingLoop re-entry

## 37. MW0 D0 — PASS
mw0.d0.test.ts: **9/9 PASS** (full D0 suite green)

## 38. S01/S02/S03 interaction analysis
Aggregate proves cross-story: compaction at R1 invalidated by S03 Class2 R2 mutation; stale compacted provenance cannot materialize; current Truth C wins; no silent B→C

## 39. Production candidate mutation check — PASS
PRE_FINAL_TRACKED == POST_FINAL_TRACKED (`b508a77e…`) — **no production code changed during QA**

## 40. Fake/Real qualification
DETERMINISTIC only · FakeConversationProvider/CapturingRoundFakeProvider · FakeEvidencePayloadAdapter · same Product orchestration · NO LIVE/REAL

## 41. Proof ceiling
DETERMINISTIC PROVEN LOCALLY ≠ REAL BOUNDARY PROVEN ≠ READY FOR REAL

## 42. Responses Compaction — NOT ADOPTED

## 43. Architecture trigger — AT-01/AT-04 TA CANDIDATE only; TA REQUIRED=0

## 44. package/lock/schema — UNCHANGED

## 45–48. typecheck/lint/build/full npm test — ALL PASS
- typecheck PASS
- lint PASS (no warnings)
- build PASS
- npm test: **242 files / 2327 tests PASS** (132 skipped) · 19.39s

## 49. FINAL-MW1-01→38 matrix
FINAL-MW1-01 Git truth exact → **PASS**
FINAL-MW1-02..07 S01 cases → **PASS** (25 tests)
FINAL-MW1-08..14 S02 cases → **PASS** (41 tests)
FINAL-MW1-15..23 S03 cases → **PASS** (11 tests)
FINAL-MW1-24 aggregate lifecycle → **PASS**
FINAL-MW1-25 R1 compaction invalid after B→C → **PASS**
FINAL-MW1-26 stale semantic absent → **PASS**
FINAL-MW1-27 stale B cannot materialize → **PASS**
FINAL-MW1-28 current Truth C wins → **PASS**
FINAL-MW1-29 NCC-BAR-07 → **PASS**
FINAL-MW1-30 Option C → **PASS** (38 tests)
FINAL-MW1-31 MW0 D0 → **PASS**
FINAL-MW1-32 no arch/persistence expansion → **PASS**
FINAL-MW1-33 Responses Compaction NOT ADOPTED → **PASS**
FINAL-MW1-34 no REAL → **PASS**
FINAL-MW1-35 production unchanged by QA → **PASS**
FINAL-MW1-36 typecheck/lint/build/suite → **PASS**
FINAL-MW1-37 Review Pack FULL → **PASS**
FINAL-MW1-38 Review Handoff → pending publish

## 50. Blocking reserves
**NONE**

## 51. Non-blocking reserves (preserved)
MW0-R01 NOT_PROVEN/NON-BLOCKING · MW0-R02 NOT_PROVEN/NON-BLOCKING · RESERVE-OPT-C-02 OPEN/NON-BLOCKING · RESERVE-OPT-C-03 OPEN/NON-BLOCKING

## 52. Historical reserves unchanged
As above — not upgraded or closed

## 53. Proof-only changed files
`projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.final.deterministic.e2e.test.ts` (NEW, 443 lines)

## 54. Final fingerprints
POST_FINAL_TRACKED_DIFF_SHA=b508a77e… (unchanged)
POST_FINAL_UNTRACKED_MANIFEST adds mw1.final.deterministic.e2e.test.ts only vs pre-final

## 55. Final git status
```
M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr05.evidenceIntegrity.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr06.bar09Semantics.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr07.offlineRescoreFailClosed.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/nora-eval/barBindings.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.final.deterministic.e2e.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.productTruthC.e2e.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.modeled.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.unit.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw1.s01.honestMemoryB.eval.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw1.s02.compaction.eval.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBAvailability.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
?? projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
?? projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts
?? projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts
```

## 56. Project Git — NONE

## 57. Final verdict
**MW1 FINAL DETERMINISTIC PROOF — PASS LOCALLY** — SOURCE-LOCKED MW1-S01 HONEST INTER-SESSION CONTINUITY PROVEN — MW1-S02 COMPACTION PROVEN WITH GOVERNING CONTEXT / PROVENANCE / LOSS / TRUTH-C INVALIDATION — MW1-S03 NEVER-SILENT B→C MATERIALIZATION PROVEN WITH CLASS 1–4 + MATERIALIZATIONBASIS + PILOTE HD BOUNDARY — AGGREGATE S01→S02→S03 PRODUCT LIFECYCLE PROVEN — CURRENT TRUTH C WINS OVER STALE MEMORY B — STALE COMPACTION CANNOT RESURRECT OR MATERIALIZE — NCC-BAR-07 PASS FOR MW1 DETERMINISTIC SCOPE — OPTION C REGRESSION PASS — FULL DETERMINISTIC REGRESSION PASS — NO PRODUCTION CORRECTION REQUIRED — NO NEW ARCHITECTURE/PERSISTENCE — RESPONSES COMPACTION NOT ADOPTED — NO REAL — PROJECT GIT INTEGRATION NONE — MW1 DETERMINISTIC EXIT PROOF ACHIEVED LOCALLY — READY FOR CHATGPT CRITICAL REVIEW AND THEN DISTINCT MORRIS SINGLE-INTEGRATION DECISION

## 58. Allowed claims
MW1 FINAL DETERMINISTIC PROOF PASS LOCALLY · MW1-S01/S02/S03 DETERMINISTIC PROVEN CANDIDATE PASS LOCALLY · MW1 DETERMINISTIC EXIT PROOF ACHIEVED LOCALLY · READY FOR MORRIS DECISION ON SINGLE PROJECT GIT INTEGRATION

## 59. Forbidden claims
MW1 CLOSED ON MAIN · MW1 INTEGRATED · MW1 COMPLETE globally · Cognitive Completion PROVEN · runtime v3 ADOPTED · READY FOR REAL · Responses Compaction ADOPTED · MW2 AUTHORIZED

## 60. Next gate
CHATGPT CRITICAL REVIEW of Final MW1 proof → then DISTINCT Morris decision on single project Git integration of S01+S02+S03
---

# MW1 FINAL PROOF EVIDENCE CORR-01 — Untracked Baseline Parity (bounded)

## EVIDENCE-CORR-01 Timestamp
2026-09-01 07:04:49 CEST

## Morris GO consumed
GO MORRIS — MW1 FINAL PROOF EVIDENCE CORR-01 BOUNDED ONLY — PROVE PRE/POST CONTENT PARITY FOR ALL PRE-EXISTING UNTRACKED MW1 CANDIDATE FILES EXCLUDING ONLY THE NEW QA-ONLY FINAL TEST + REVIEW PACK — NO PRODUCTION MODIFICATION

## Exclusions from baseline set
- `.tmp-sfia-review/`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.final.deterministic.e2e.test.ts` (FINAL_QA_ONLY_DELTA)

## Aggregate fingerprint comparison

| Fingerprint | Pre (Final Proof entry @ FPDIR `/tmp/mw1-final-fp-6399b4`) | Post (current local) | Parity |
|-------------|--------------------------------------------------------------|----------------------|--------|
| `PRE_FINAL_UNTRACKED_BASELINE_MANIFEST_SHA` | `1d5cd4b762d04d3080450263f92898067bcb1810dfb60f09055a22daed4d8915` | `1d5cd4b762d04d3080450263f92898067bcb1810dfb60f09055a22daed4d8915` | **EXACT** |
| `PRE_FINAL_UNTRACKED_BASELINE_CONTENT_SHA` | `3ee27783280630a6bf449d78aadb7600225dd96043e293248e27ba76bb4d0ba8` | `3ee27783280630a6bf449d78aadb7600225dd96043e293248e27ba76bb4d0ba8` | **EXACT** |
| `PRE_FINAL_TRACKED_DIFF_SHA` | `b508a77ec547ca45fce41e543dfce22616ad0ffd11712d84966e860e41674fea` | `b508a77ec547ca45fce41e543dfce22616ad0ffd11712d84966e860e41674fea` | **EXACT** |

## Historical CORR-02-pre aggregate content (context only)
`PRE_CORR02_UNTRACKED_CONTENT_SHA` = `5f34b3d958bf98f0c131b0cd08a05a37640b3fab29ffd7b0b3bb4ff223fd21f0` differs from current baseline content `3ee27783…` because **CORR-02** modified exactly **2** untracked files (already ChatGPT-reviewed PASS at handoff `aa5d5937`):
1. `projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts`
2. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts`

**No other untracked MW1 candidate file changed between CORR-02-pre and Final Proof entry.**

## FINAL_QA_ONLY_DELTA (separate from baseline)
| File | SHA-256 | Bytes |
|------|---------|-------|
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.final.deterministic.e2e.test.ts` | `514b24b2b7bd145fc4d67eea36c1ee370bb0b4753dcededaf5b8521839952321` | 16263 |

## Per-file audit table (12 baseline untracked files — pre Final Proof entry vs post)

# MW1 Untracked Baseline Parity Audit

| Path | Pre SHA256 | Post SHA256 | Status |
|------|------------|-------------|--------|
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts` | `10171255e8bf79c5b73b1a10fd103095a47c725e66a6f7b0916fd97919117b28` | `10171255e8bf79c5b73b1a10fd103095a47c725e66a6f7b0916fd97919117b28` | MATCH |
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.productTruthC.e2e.test.ts` | `aa7a62088d14031370c07e2f527d7ddabbbc816a888765b4521d62149b477f3e` | `aa7a62088d14031370c07e2f527d7ddabbbc816a888765b4521d62149b477f3e` | MATCH |
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.modeled.test.ts` | `bfd9b57f27786a57cecec6c4540d8c6d7b9dbbf1eac15cb83249bd41466ff4c0` | `bfd9b57f27786a57cecec6c4540d8c6d7b9dbbf1eac15cb83249bd41466ff4c0` | MATCH |
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.unit.test.ts` | `7472f135eec467aac0d57fbfc935ec9c512ece2d4312955f1640e204f1830327` | `7472f135eec467aac0d57fbfc935ec9c512ece2d4312955f1640e204f1830327` | MATCH |
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts` | `dfe9b984cbe8adbea1c45b527e3ade3bff28a9f65a657240500b5ec59e8d22c1` | `dfe9b984cbe8adbea1c45b527e3ade3bff28a9f65a657240500b5ec59e8d22c1` | MATCH |
| `projects/sfia-studio/app/__tests__/nora-eval/mw1.s01.honestMemoryB.eval.test.ts` | `0b6b50e8e2e0b31ba4f92a6cad3a01a9f049247a1d2fe917d6317addc400dfd3` | `0b6b50e8e2e0b31ba4f92a6cad3a01a9f049247a1d2fe917d6317addc400dfd3` | MATCH |
| `projects/sfia-studio/app/__tests__/nora-eval/mw1.s02.compaction.eval.test.ts` | `e9cadb3f1707c5a382a0275e0c894440a53895fdda7429939c88d33943cdaf67` | `e9cadb3f1707c5a382a0275e0c894440a53895fdda7429939c88d33943cdaf67` | MATCH |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBAvailability.ts` | `8e38b468e7e0059c8b8a8739028053742134e10326a39dafbe805faf6be7f47e` | `8e38b468e7e0059c8b8a8739028053742134e10326a39dafbe805faf6be7f47e` | MATCH |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts` | `ca6d7e4b17e645cbc4ce4c79b3523c40e2d75450b0f36d9b5d560cc8b20ad6ca` | `ca6d7e4b17e645cbc4ce4c79b3523c40e2d75450b0f36d9b5d560cc8b20ad6ca` | MATCH |
| `projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts` | `824b33f178ddb13ff1470117268fb6d1120f522360f15759ef2f61693086e7f9` | `824b33f178ddb13ff1470117268fb6d1120f522360f15759ef2f61693086e7f9` | MATCH |
| `projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts` | `4f179947c572c0c9e4a33d7d205e542a4989bdc8d99b3fd890982627529ecd55` | `4f179947c572c0c9e4a33d7d205e542a4989bdc8d99b3fd890982627529ecd55` | MATCH |
| `projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts` | `934fee005e3a535615a1ece82640a2d51aa5d901875e2c55355c338567e7c556` | `934fee005e3a535615a1ece82640a2d51aa5d901875e2c55355c338567e7c556` | MATCH |


**Result:** 12/12 files **MATCH** · 0 content divergences · 0 removals · 0 unexpected additions in baseline set.

## EVIDENCE-CORR-01 verdict
**PASS** — Final Proof QA cycle did not mutate any pre-existing untracked MW1 candidate file. Only authorized `FINAL_QA_ONLY_DELTA` added. Tracked production candidate unchanged. **No S01/S02/S03 functional rework required.**

## CORR-02-pre vs current (2-file delta — not Final QA)

| Path | CORR-02-pre SHA | Current SHA | Changed by |
|------|-----------------|-------------|------------|
| `materializeFromMemoryB.ts` | `4db959cf0aed8cab42788d8933df1b0a93af31d3e8189d65430461ba4bc3f691` | `934fee005e3a535615a1ece82640a2d51aa5d901875e2c55355c338567e7c556` | CORR-02 (reviewed) |
| `mw1.s03.materialization.e2e.test.ts` | `c9d9dff52dbe262a5115f8f64200a59f6e7170434bdb7accbac8c2f52ecdc6ab` | `dfe9b984cbe8adbea1c45b527e3ade3bff28a9f65a657240500b5ec59e8d22c1` | CORR-02 (reviewed) |
