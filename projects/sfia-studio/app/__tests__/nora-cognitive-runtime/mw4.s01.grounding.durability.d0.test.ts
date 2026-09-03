/** @vitest-environment node */
/**
 * MW4-S01 — Cross-turn grounding durability D0 (Fake only, ZERO LIVE OpenAI).
 * Scenarios S01-A..F: re-resolve, downgrade, fabricated ID, project isolation,
 * compaction preserve/filter, session reopen.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  buildGroundingCognitiveDisclosure,
  createMemoryBSessionView,
  isGroundingRefsRecord,
  loadGroundingRefsFromSession,
  loadSessionRows,
  rememberEvidenceIds,
  resolveReplayItems,
  runNoraCognitiveTurn,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";

const tempDirs: string[] = [];
const NOW = "2026-09-03T08:00:00.000Z";
const REV = { lpsId: "lps:mw4", lpsVersion: 1 };

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-s01-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: input.status ?? "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

afterEach(() => {
  setMw3AvailableEvidenceForTests(null);
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW4-S01 — grounding durability D0", () => {
  it("S01-A — re-resolve remembered IDs → valid attributable Evidence", async () => {
    const projectId = "prj:mw4-a";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:1",
          source: "src:a",
          projectId,
        }),
        catalogEvidence({
          evidenceId: "ev:2",
          source: "src:b",
          projectId,
        }),
      ],
    });
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    await rememberEvidenceIds(session, projectId, ["ev:1", "ev:2"], NOW);
    session.close();

    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn 2." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-s01-a",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Revisit prior Evidence." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
    });

    expect(turn.mw4Grounding?.validIds).toEqual(["ev:1", "ev:2"]);
    expect(turn.mw4Grounding?.downgradedIds).toEqual([]);
    expect(turn.mw4Grounding?.missingIds).toEqual([]);
    expect(turn.mw4Grounding?.disclosure).toMatch(/Currently attributable Evidence/);
    expect(turn.mw4Grounding?.disclosure).toMatch(/Narrative text ≠ Evidence/);
    expect(turn.mw4Grounding?.disclosure).toMatch(/Compacted Memory B summary ≠ Evidence/);
  });

  it("S01-B — unavailable Evidence downgraded with honesty", async () => {
    const projectId = "prj:mw4-b";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:gone",
          source: "src:x",
          projectId,
          status: "unavailable",
        }),
      ],
    });
    const resolution = await resolveRememberedEvidence(projectId, ["ev:gone"]);
    expect(resolution.valid).toHaveLength(0);
    expect(resolution.downgraded.map((d) => d.evidenceId)).toEqual(["ev:gone"]);
    expect(resolution.downgraded[0]?.reason).toBe("unavailable_status");
    const disclosure = buildGroundingCognitiveDisclosure(resolution);
    expect(disclosure).toMatch(/Withdrawn \/ downgraded/);
    expect(disclosure).toMatch(/unavailable_status/);
  });

  it("S01-C — fabricated narrative ID never accepted without resolver hit", async () => {
    const projectId = "prj:mw4-c";
    setMw3AvailableEvidenceForTests({ projectId, evidence: [] });
    const resolution = await resolveRememberedEvidence(projectId, [
      "ev:fabricated-from-narrative",
    ]);
    expect(resolution.valid).toHaveLength(0);
    expect(resolution.missing[0]?.reason).toBe(
      "fabricated_without_resolver_hit",
    );
    expect(buildGroundingCognitiveDisclosure(resolution)).toMatch(
      /Missing \/ not re-resolvable/,
    );
  });

  it("S01-D — cross-project isolation fail-closed", async () => {
    const projectA = "prj:mw4-d-a";
    const projectB = "prj:mw4-d-b";
    setMw3AvailableEvidenceForTests({
      projectId: projectA,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:a-only",
          source: "src:a",
          projectId: projectA,
        }),
      ],
    });
    // Same ID claimed under project B → no catalog hit for B.
    const resolution = await resolveRememberedEvidence(projectB, ["ev:a-only"]);
    expect(resolution.valid).toHaveLength(0);
    expect(resolution.missing.length).toBeGreaterThan(0);

    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId: projectB,
      dbPath,
      sessionKey: "f1-default",
    });
    // Record wrongly stamped for project A while session is project B —
    // acceptGroundingRefsForProject rejects via load path in turn.
    await rememberEvidenceIds(session, projectA, ["ev:a-only"], NOW);
    const loaded = await loadGroundingRefsFromSession(session);
    expect(loaded?.projectId).toBe(projectA);
    session.close();

    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] iso." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-s01-d",
      projectId: projectB,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Cross project?" },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      resolveRememberedEvidence,
    });
    // Wrong project record rejected → no remembered surface from that record.
    expect(turn.mw4Grounding?.rememberedIds ?? []).toEqual([]);
  });

  it("S01-E — grounding filtered from replay and preserved across compaction", async () => {
    const projectId = "prj:mw4-e";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    const items = Array.from({ length: 6 }, (_, i) =>
      i % 2 === 0
        ? userTextItem(`noise-${i}-${"x".repeat(40)}`)
        : assistantTextItem(`reply-${i}`),
    );
    await session.addItems(items);
    await rememberEvidenceIds(session, projectId, ["ev:keep"], NOW);

    const before = await loadSessionRows(session);
    expect(before.grounding).toBeTruthy();
    expect(isGroundingRefsRecord(before.grounding)).toBe(true);
    expect(before.conversation.every((r) => !isGroundingRefsRecord(r.item))).toBe(
      true,
    );

    const compacted = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 800 },
      nowIso: NOW,
    });
    expect(compacted.applied).toBe(true);

    const after = await loadSessionRows(session);
    expect(isGroundingRefsRecord(after.grounding)).toBe(true);
    expect(
      (after.grounding as { evidenceRefs: Array<{ evidenceId: string }> })
        .evidenceRefs[0]?.evidenceId,
    ).toBe("ev:keep");

    const replay = resolveReplayItems({
      loaded: after,
      currentTruthCRevision: REV,
    });
    expect(
      JSON.stringify(replay.items).includes("sfia_grounding_refs_v1"),
    ).toBe(false);
    expect(JSON.stringify(replay.items)).not.toContain("ev:keep");

    const view = await createMemoryBSessionView({
      session,
      truthCRevision: REV,
      nowIso: NOW,
    });
    const replayed = await view.view.getItems();
    expect(JSON.stringify(replayed)).not.toContain("sfia_grounding_refs_v1");
    session.close();
  });

  it("S01-F — session reopen still re-resolves prior refs", async () => {
    const projectId = "prj:mw4-f";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:persist",
          source: "src:p",
          projectId,
        }),
      ],
    });
    const dbPath = tempDb();

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn1." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "mw4-s01-f1",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Remember evidence." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          evidencePointers: [
            {
              evidenceId: "ev:persist",
              sourceId: "src:p",
              domain: projectId,
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
      },
    });

    // Reopen: new process-equivalent — only sqlite path shared.
    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn2 reopen." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-s01-f2",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Reopen session." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      resolveRememberedEvidence,
    });

    expect(turn2.mw4Grounding?.rememberedIds).toContain("ev:persist");
    expect(turn2.mw4Grounding?.validIds).toContain("ev:persist");
    expect(turn2.mw4Grounding?.disclosure).toMatch(/ZERO authority until re-resolved/);
  });
});
