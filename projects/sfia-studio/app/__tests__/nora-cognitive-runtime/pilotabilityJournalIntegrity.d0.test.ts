/**
 * PILOTABILITY & JOURNAL SEMANTIC INTEGRITY — JPI / EPI / LIFE / ARH.
 * DETERMINISTIC only — no REAL provider.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  deriveCurrentTopicEntryId,
  listCycleJournalEntries,
  materializeCycleJournalDelta,
  buildCycleJournalCompactProjection,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";
import { formatCycleJournalCompactForPrompt } from "@/lib/nora-cognitive-runtime/cycleJournalPrompt";
import { resolveProjectOpenContinuityPresentation } from "@/features/project-assistant/presentationLabels";
import { resolveActiveCycleWorkBlockingFlag } from "@/features/project-assistant/materializeActiveCycleWork";
import {
  blockerLabel,
  presentLifecycleBlockerRows,
} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
import { getCycleTypeById } from "@/lib/oa/cycle";
import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";

function tempDb(): string {
  return path.join(
    fs.mkdtempSync(path.join(os.tmpdir(), "jpi-")),
    "nora-session.sqlite",
  );
}

function openSession(projectId: string, dbPath: string): ProductSqliteSession {
  const session = new ProductSqliteSession({
    projectId,
    dbPath,
    sessionKey: "conversation",
  });
  session.ensurePilotTranscriptAndJournalSchema();
  return session;
}

describe("JPI — Journal pilotability integrity", () => {
  it("JPI-05/06/07/08 — stable ordinals; UPDATE does not reorder; ARCHIVE/MERGE/SPLIT no renumber", () => {
    const dbPath = tempDb();
    const session = openSession("prj:jpi-ord", dbPath);
    const cycle = "cyc:ord";
    const t1 = appendPilotTranscriptTurn(session, {
      role: "user",
      content: "a",
      logicalTurnId: "ltu:1",
      cycleInstanceId: cycle,
    });
    const t2 = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "b",
      logicalTurnId: "ltu:1",
      cycleInstanceId: cycle,
    });

    for (const [i, title] of ["Alpha", "Beta", "Gamma"].entries()) {
      const r = materializeCycleJournalDelta({
        session,
        cycleInstanceId: cycle,
        logicalTurnId: `ltu:create-${i}`,
        boundSourceTurnIds: [t1.turnId, t2.turnId],
        delta: {
          operations: [
            {
              op: "CREATE",
              targetEntryId: null,
              title,
              currentSummary: title,
              stabilizedPoints: [`stab-${i}`],
              openPoints: [`open-${i}`],
              sourceTurnRefs: [],
              relatedEntryIds: [],
            },
          ],
        },
      });
      expect(r.ok).toBe(true);
    }

    let listed = listCycleJournalEntries(session, cycle);
    expect(listed.map((e) => e.topicOrdinal)).toEqual([1, 2, 3]);
    expect(listed.map((e) => e.title)).toEqual(["Alpha", "Beta", "Gamma"]);
    const id1 = listed[0]!.journalEntryId;
    const id2 = listed[1]!.journalEntryId;
    const id3 = listed[2]!.journalEntryId;

    // UPDATE Sujet 1 — order stays 1/2/3
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:upd-1",
      boundSourceTurnIds: [t1.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: id1,
            title: "Alpha raffiné",
            currentSummary: "maj",
            stabilizedPoints: ["stab-0", "extra"],
            openPoints: ["open-0b"],
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    listed = listCycleJournalEntries(session, cycle);
    expect(listed.map((e) => e.topicOrdinal)).toEqual([1, 2, 3]);
    expect(listed[0]!.title).toBe("Alpha raffiné");
    expect(listed[0]!.stabilizedPoints).toEqual(["stab-0", "extra"]);
    expect(listed[0]!.openPoints).toEqual(["open-0b"]);
    expect(deriveCurrentTopicEntryId(listed)).toBe(id1);

    // ARCHIVE #3 — no renumber
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: id3,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    listed = listCycleJournalEntries(session, cycle);
    expect(listed.find((e) => e.journalEntryId === id3)!.topicOrdinal).toBe(3);
    expect(listed.find((e) => e.journalEntryId === id3)!.status).toBe(
      "archived",
    );

    // SPLIT #2 → new ordinal 4; parent keeps 2
    const split = materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:split",
      boundSourceTurnIds: [t2.turnId],
      delta: {
        operations: [
          {
            op: "SPLIT",
            targetEntryId: id2,
            title: "Beta-suite",
            currentSummary: "child",
            stabilizedPoints: ["child-stab"],
            openPoints: ["child-open"],
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(split.applied).toBe(1);
    listed = listCycleJournalEntries(session, cycle);
    expect(listed.find((e) => e.journalEntryId === id2)!.topicOrdinal).toBe(2);
    expect(listed.find((e) => e.journalEntryId === id2)!.status).toBe("split");
    const sibling = listed.find((e) => e.title === "Beta-suite")!;
    expect(sibling.topicOrdinal).toBe(4);

    // MERGE sibling into #1 — target keeps ordinal 1
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:merge",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: id1,
            title: "Alpha+suite",
            currentSummary: "merged",
            stabilizedPoints: null,
            openPoints: null,
            sourceTurnRefs: [],
            relatedEntryIds: [sibling.journalEntryId],
          },
        ],
      },
    });
    listed = listCycleJournalEntries(session, cycle);
    expect(listed.find((e) => e.journalEntryId === id1)!.topicOrdinal).toBe(1);
    expect(
      listed.find((e) => e.journalEntryId === sibling.journalEntryId)!.status,
    ).toBe("merged");

    // Legacy reopen / backfill path — reopen schema on same DB
    session.close();
    const session2 = openSession("prj:jpi-ord", dbPath);
    const again = listCycleJournalEntries(session2, cycle);
    expect(again.find((e) => e.journalEntryId === id1)!.topicOrdinal).toBe(1);
    session2.close();
  });

  it("JPI-10/11/12/13 — rich points persist; legacy empty arrays; compact prompt", () => {
    const dbPath = tempDb();
    const session = openSession("prj:jpi-rich", dbPath);
    const cycle = "cyc:rich";
    const turn = appendPilotTranscriptTurn(session, {
      role: "user",
      content: "hello",
      logicalTurnId: "ltu:r1",
      cycleInstanceId: cycle,
    });
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:r1",
      boundSourceTurnIds: [turn.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Richesse",
            currentSummary: "résumé",
            // omit points → empty (legacy-compatible)
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    let e = listCycleJournalEntries(session, cycle)[0]!;
    expect(e.stabilizedPoints).toEqual([]);
    expect(e.openPoints).toEqual([]);
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:r2",
      boundSourceTurnIds: [turn.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: e.journalEntryId,
            title: null,
            currentSummary: "résumé 2",
            stabilizedPoints: ["point A"],
            openPoints: ["question B"],
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    e = listCycleJournalEntries(session, cycle)[0]!;
    expect(e.stabilizedPoints).toEqual(["point A"]);
    expect(e.openPoints).toEqual(["question B"]);
    const compact = buildCycleJournalCompactProjection(session, cycle);
    const prompt = formatCycleJournalCompactForPrompt(compact);
    expect(prompt).toContain("Sujet 1");
    expect(prompt).toContain("EN_COURS");
    expect(prompt).toContain("stabilisé:");
    expect(prompt).toContain("ouvert:");
    session.close();
  });

  it("JPI-14…18 — semantic ops CREATE/UPDATE/SPLIT/MERGE remain materializable (generic)", () => {
    const dbPath = tempDb();
    const session = openSession("prj:jpi-sem", dbPath);
    const cycle = "cyc:sem";
    const u = appendPilotTranscriptTurn(session, {
      role: "user",
      content: "problem",
      logicalTurnId: "ltu:s1",
      cycleInstanceId: cycle,
    });
    // long same-topic → UPDATE
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:s1",
      boundSourceTurnIds: [u.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Problème produit",
            currentSummary: "v1",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const first = listCycleJournalEntries(session, cycle)[0]!;
    for (let i = 0; i < 5; i += 1) {
      materializeCycleJournalDelta({
        session,
        cycleInstanceId: cycle,
        logicalTurnId: `ltu:upd-${i}`,
        boundSourceTurnIds: [u.turnId],
        delta: {
          operations: [
            {
              op: "UPDATE",
              targetEntryId: first.journalEntryId,
              title: null,
              currentSummary: `v${i + 2}`,
              sourceTurnRefs: [],
              relatedEntryIds: [],
            },
          ],
        },
      });
    }
    expect(listCycleJournalEntries(session, cycle)).toHaveLength(1);

    // distinct axis → CREATE
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:roles",
      boundSourceTurnIds: [u.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Participants et rôles",
            currentSummary: "rôles",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(listCycleJournalEntries(session, cycle).filter((e) => e.status === "active")).toHaveLength(2);

    // return to old → UPDATE old id
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:back",
      boundSourceTurnIds: [u.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: first.journalEntryId,
            title: null,
            currentSummary: "retour problème",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(
      listCycleJournalEntries(session, cycle).find(
        (e) => e.journalEntryId === first.journalEntryId,
      )!.currentSummary,
    ).toBe("retour problème");

    // overgrown → SPLIT
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:split-sem",
      boundSourceTurnIds: [u.turnId],
      delta: {
        operations: [
          {
            op: "SPLIT",
            targetEntryId: first.journalEntryId,
            title: "Sous-axe indépendant",
            currentSummary: "split",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const active = listCycleJournalEntries(session, cycle).filter(
      (e) => e.status === "active",
    );
    expect(active.some((e) => e.title === "Sous-axe indépendant")).toBe(true);
    expect(
      listCycleJournalEntries(session, cycle).find(
        (e) => e.journalEntryId === first.journalEntryId,
      )!.status,
    ).toBe("split");

    // convergent → MERGE remaining actives into roles topic
    const roles = active.find((e) => e.title === "Participants et rôles")!;
    const child = active.find((e) => e.title === "Sous-axe indépendant")!;
    materializeCycleJournalDelta({
      session,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:merge-sem",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: roles.journalEntryId,
            title: "Rôles consolidés",
            currentSummary: "merged",
            sourceTurnRefs: [],
            relatedEntryIds: [child.journalEntryId],
          },
        ],
      },
    });
    expect(
      listCycleJournalEntries(session, cycle).find(
        (e) => e.journalEntryId === child.journalEntryId,
      )!.status,
    ).toBe("merged");
    session.close();
  });
});

describe("ARH — Automatic resume hint", () => {
  it("ARH-01…05 — restored hint only when allowRestoredHint", () => {
    expect(
      resolveProjectOpenContinuityPresentation("available", {
        allowRestoredHint: true,
      }).kind,
    ).toBe("restored_hint");
    expect(
      resolveProjectOpenContinuityPresentation("available", {
        allowRestoredHint: false,
      }).kind,
    ).toBe("none");
    expect(resolveProjectOpenContinuityPresentation("available").kind).toBe(
      "none",
    );
    expect(resolveProjectOpenContinuityPresentation("empty").kind).toBe("none");
    expect(resolveProjectOpenContinuityPresentation("pending").kind).toBe(
      "none",
    );
    expect(
      resolveProjectOpenContinuityPresentation("unavailable").kind,
    ).toBe("transcript_unavailable");
  });
});

describe("LIFE — Lifecycle pilotability presentation", () => {
  it("LIFE-01/02 — framing → Cadrage; other types use catalog labels", () => {
    expect(getCycleTypeById("cyc:framing")?.label).toBe("Cadrage");
    const other = getCycleTypeById("cyc:design");
    if (other) {
      expect(other.label.length).toBeGreaterThan(0);
      expect(other.label).not.toBe("Cycle");
    }
  });

  it("LIFE-03/04 — applicability unknowns grouped; underlying ids preserved as members", () => {
    const ids = [
      "artifact_applicability_unknown",
      "execution_contract_applicability_unknown",
      "evidence_applicability_unknown",
      "review_bundle_applicability_unknown",
      "git_repository_applicability_unknown",
      "exit_criteria_open",
    ];
    const rows = presentLifecycleBlockerRows(ids);
    expect(rows).toHaveLength(2);
    const group = rows.find(
      (r) => r.id === "governed_effects_applicability_group",
    )!;
    expect(group.label).toBe("Effets gouvernés à qualifier");
    expect(group.memberIds).toHaveLength(5);
    expect(rows.some((r) => r.id === "exit_criteria_open")).toBe(true);
    // labels for members still map (truth unchanged)
    expect(blockerLabel("artifact_applicability_unknown")).toBe(
      "Effets gouvernés à qualifier",
    );
  });
});

describe("EPI — blocking reservation integrity (materialize gate)", () => {
  it("EPI-01/02/03/04 — blocking only on Reservation; non-reservation stripped", () => {
    expect(
      resolveActiveCycleWorkBlockingFlag("Observation", true),
    ).toBeUndefined();
    expect(
      resolveActiveCycleWorkBlockingFlag("Hypothesis", true),
    ).toBeUndefined();
    expect(
      resolveActiveCycleWorkBlockingFlag("Reservation", false),
    ).toBe(false);
    expect(
      resolveActiveCycleWorkBlockingFlag("Reservation", true),
    ).toBe(true);
    expect(
      resolveActiveCycleWorkBlockingFlag("Reservation", null),
    ).toBeUndefined();
  });

  it("EPI-02/03 — deriveLifecycleBlockers only from Reservation blocking=true", () => {
    const snap = deriveLifecycleBlockersFromEpistemicItems([
      {
        epistemicItemId: "epi:obs",
        type: "Observation",
        statement: "simplicité contrainte forte",
        status: "active",
        blocking: true,
      } as never,
      {
        epistemicItemId: "epi:res-open",
        type: "Reservation",
        statement: "hors V1 stocks",
        status: "active",
        blocking: false,
      } as never,
      {
        epistemicItemId: "epi:res-block",
        type: "Reservation",
        statement: "blocage réel à lever",
        status: "active",
        blocking: true,
      } as never,
    ]);
    expect(snap.ok).toBe(true);
    expect(snap.statements).toEqual(["blocage réel à lever"]);
  });
});
