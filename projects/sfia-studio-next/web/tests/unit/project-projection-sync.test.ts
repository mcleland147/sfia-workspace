import { describe, expect, it } from "vitest";
import { countProjectLibraryDocuments } from "@/domains/preparation/project-activity-projection";
import {
  activityAfterProjectRead,
  contextPreloadVerdict,
  journalMayReplaceProjectKnowledge,
  preparationAnnouncement,
  preparationContinuityMarks,
  turnProjectionRefreshOutcome,
} from "@/lib/project-projection-sync";
import { openProjectionRead, projectionReadApplies, shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";

const activity = {
  openSubjects: { count: 2, examples: [{ id: "s1", title: "Sujet" }] },
  applicableDecisions: { count: 1, examples: [{ id: "d1", statement: "Décision" }] },
  documentsInProgress: { count: 1, examples: [{ id: "doc", title: "Note" }] },
  openPointsCount: 3,
};

describe("project projection sync", () => {
  it("keeps the last activity when a re-read fails", () => {
    const next = activityAfterProjectRead({
      previous: activity,
      incoming: undefined,
      httpOk: false,
    });
    expect(next.activity).toBe(activity);
    expect(next.freshness).toBe("stale");
  });

  it("does not turn a failed first read into a zero snapshot", () => {
    const next = activityAfterProjectRead({
      previous: null,
      incoming: {
        openSubjects: { count: 0, examples: [] },
        applicableDecisions: { count: 0, examples: [] },
        documentsInProgress: { count: 0, examples: [] },
        openPointsCount: 0,
      },
      httpOk: false,
    });
    expect(next.activity).toBeNull();
    expect(next.freshness).toBe("unavailable");
  });

  it("applies a confirmed owner snapshot, including a real empty project", () => {
    const empty = {
      openSubjects: { count: 0, examples: [] },
      applicableDecisions: { count: 0, examples: [] },
      documentsInProgress: { count: 0, examples: [] },
      openPointsCount: 0,
    };
    const next = activityAfterProjectRead({
      previous: activity,
      incoming: empty,
      httpOk: true,
    });
    expect(next.activity).toEqual(empty);
    expect(next.freshness).toBe("ready");
  });

  it("does not let the journal payload replace project knowledge", () => {
    expect(journalMayReplaceProjectKnowledge()).toBe(false);
  });

  it("counts one document identity across revisions", () => {
    expect(
      countProjectLibraryDocuments([
        { document: { id: "doc-1", title: "Note" } },
        { document: { id: "doc-1", title: "Note" } },
      ]),
    ).toBe(1);
  });

  it("rejects a response from another project or an older generation", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 1, projectId: "p1" },
        currentGeneration: 2,
        currentProjectId: "p1",
      }),
    ).toBe(false);
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 2, projectId: "p1" },
        currentGeneration: 2,
        currentProjectId: "p2",
      }),
    ).toBe(false);
  });

  it("keeps context load independent from trajectory qualification", () => {
    const running = preparationContinuityMarks({
      projectCreated: true,
      context: "loading",
      qualificationStatus: "PROPOSED",
    });
    expect(running.project).toBe("done");
    expect(running.context).toBe("running");
    expect(running.cycles).toBe("done");
    expect(running.reply).toBe("done");

    const contextOnly = preparationContinuityMarks({
      projectCreated: true,
      context: "ready",
      qualificationStatus: "RUNNING",
    });
    expect(contextOnly.context).toBe("done");
    expect(contextOnly.cycles).toBe("running");
    expect(contextOnly.reply).toBe("pending");

    const failedContext = preparationContinuityMarks({
      projectCreated: true,
      context: "failed",
      qualificationStatus: "CLARIFICATION",
    });
    expect(failedContext.context).toBe("failed");
    expect(failedContext.cycles).toBe("incomplete");
    expect(failedContext.reply).toBe("incomplete");
  });

  it("does not treat a missing activity object as a confirmed zero", () => {
    const next = activityAfterProjectRead({
      previous: null,
      incoming: undefined,
      httpOk: true,
      snapshotPresent: false,
    });
    expect(next.activity).toBeNull();
    expect(next.freshness).toBe("unavailable");
  });

  it("keeps a confirmed turn when the projection read fails", () => {
    expect(
      turnProjectionRefreshOutcome({ metierConfirmed: true, projectionFailed: true }),
    ).toBe("preserve-metier");
    expect(
      turnProjectionRefreshOutcome({ metierConfirmed: false, projectionFailed: true }),
    ).toBe("metier-unconfirmed");
  });

  it("rejects a preload that is only an HTTP success", () => {
    expect(
      contextPreloadVerdict({
        expectedProjectId: "p1",
        httpOk: true,
        body: { project: { id: "p2" }, knowledge: {}, activity: {} },
      }),
    ).toBe("failed");
    expect(
      contextPreloadVerdict({
        expectedProjectId: "p1",
        httpOk: true,
        body: { project: { id: "p1" } },
      }),
    ).toBe("partial");
    expect(
      contextPreloadVerdict({
        expectedProjectId: "p1",
        httpOk: true,
        body: { project: { id: "p1" }, knowledge: null, activity: null },
      }),
    ).toBe("partial");
    expect(
      contextPreloadVerdict({
        expectedProjectId: "p1",
        httpOk: true,
        body: { project: { id: "p1" }, knowledge: { subjects: [] }, activity: { openPointsCount: 0 } },
      }),
    ).toBe("ready");
  });

  it("does not announce preparation complete while context is unfinished or qualification is absent", () => {
    const loading = preparationAnnouncement({
      context: "loading",
      qualificationStatus: "PROPOSED",
      dwellComplete: true,
      projectName: "Atlas",
    });
    expect(loading.announceComplete).toBe(false);
    expect(loading.kicker).toContain("CONTEXTE EN CHARGEMENT");
    const absent = preparationAnnouncement({
      context: "ready",
      qualificationStatus: null,
      dwellComplete: true,
      projectName: "Atlas",
    });
    expect(absent.announceComplete).toBe(false);
    expect(absent.title).not.toContain("Préparation terminée");
  });

  it("rejects an older read after a newer one has been opened, including on another project", () => {
    const first = openProjectionRead({ currentGeneration: 0, projectId: "p1" });
    const second = openProjectionRead({
      currentGeneration: first.generation,
      projectId: "p1",
    });
    expect(
      projectionReadApplies({
        request: first.request,
        latestGeneration: second.generation,
        currentProjectId: "p1",
      }),
    ).toBe(false);
    expect(
      projectionReadApplies({
        request: second.request,
        latestGeneration: second.generation,
        currentProjectId: "p2",
      }),
    ).toBe(false);
    expect(
      shouldApplyDurableRefresh({
        request: second.request,
        currentGeneration: second.generation,
        currentProjectId: "p1",
      }),
    ).toBe(true);
  });
});
