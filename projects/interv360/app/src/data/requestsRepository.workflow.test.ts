import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_JOURNAL, STORAGE_KEY_REQUESTS } from "./localStorageKeys";
import {
  cancelDemoRequest,
  closeDemoRequest,
  completeDemoIntervention,
  getDemoWorkflowEvents,
  getRequestById,
  getRequests,
  planDemoIntervention,
  putDemoRequestOnHold,
  qualifyDemoRequest,
  requalifyDemoRequest,
  resetDemoData,
  resumeDemoRequest,
} from "./requestsRepository";
import { getAvailableWorkflowActions } from "./requestsRepository.types";

const DEMO_REQUEST_ID = "SAV-DEMO-001";

describe("requestsRepository controlled workflow", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
    localStorage.removeItem(STORAGE_KEY_JOURNAL);
  });

  it("qualifies SAV-DEMO-001 from STAT-01 to STAT-02", () => {
    getRequests();
    const updated = qualifyDemoRequest(DEMO_REQUEST_ID);

    expect(updated?.status).toBe("STAT-02");
    expect(getRequestById(DEMO_REQUEST_ID)?.status).toBe("STAT-02");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)).toHaveLength(1);
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)[0]).toMatchObject({
      type: "qualification.confirmed",
      fromStatus: "STAT-01",
      toStatus: "STAT-02",
    });
  });

  it("plans intervention from STAT-02 to STAT-03", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);
    const updated = planDemoIntervention(DEMO_REQUEST_ID);

    expect(updated?.status).toBe("STAT-03");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)[1]).toMatchObject({
      type: "planning.confirmed",
      fromStatus: "STAT-02",
      toStatus: "STAT-03",
    });
  });

  it("completes intervention from STAT-03 to STAT-04", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);
    planDemoIntervention(DEMO_REQUEST_ID);
    const updated = completeDemoIntervention(DEMO_REQUEST_ID);

    expect(updated?.status).toBe("STAT-04");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)[2]).toMatchObject({
      type: "intervention.completed",
      fromStatus: "STAT-03",
      toStatus: "STAT-04",
    });
  });

  it("closes request from STAT-04 to STAT-06", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);
    planDemoIntervention(DEMO_REQUEST_ID);
    completeDemoIntervention(DEMO_REQUEST_ID);
    const updated = closeDemoRequest(DEMO_REQUEST_ID);

    expect(updated?.status).toBe("STAT-06");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)[3]).toMatchObject({
      type: "report.closed",
      fromStatus: "STAT-04",
      toStatus: "STAT-06",
    });
  });

  it("rejects invalid transitions", () => {
    getRequests();
    expect(planDemoIntervention(DEMO_REQUEST_ID)).toBeUndefined();
    expect(completeDemoIntervention(DEMO_REQUEST_ID)).toBeUndefined();
    expect(closeDemoRequest(DEMO_REQUEST_ID)).toBeUndefined();
    expect(qualifyDemoRequest("SAV-OTHER")).toBeUndefined();
    expect(getRequestById(DEMO_REQUEST_ID)?.status).toBe("STAT-01");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)).toHaveLength(0);
  });

  it("creates workflow events in order through the full nominal path", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);
    planDemoIntervention(DEMO_REQUEST_ID);
    completeDemoIntervention(DEMO_REQUEST_ID);
    closeDemoRequest(DEMO_REQUEST_ID);

    const events = getDemoWorkflowEvents(DEMO_REQUEST_ID);
    expect(events.map((event) => event.type)).toEqual([
      "qualification.confirmed",
      "planning.confirmed",
      "intervention.completed",
      "report.closed",
    ]);
  });

  it("restores STAT-01 and clears journal on reset", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);
    planDemoIntervention(DEMO_REQUEST_ID);
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID).length).toBeGreaterThan(0);

    resetDemoData();

    expect(getRequestById(DEMO_REQUEST_ID)?.status).toBe("STAT-01");
    expect(getRequestById("SAV-DEMO-002")?.status).toBe("STAT-03");
    expect(getRequestById("SAV-DEMO-003")?.status).toBe("STAT-06");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)).toHaveLength(0);
    expect(localStorage.getItem(STORAGE_KEY_JOURNAL)).toBeNull();
  });

  it("keeps workflow events scoped per request", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);

    expect(getRequestById(DEMO_REQUEST_ID)?.status).toBe("STAT-02");
    expect(getRequestById("SAV-DEMO-002")?.status).toBe("STAT-03");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)).toHaveLength(1);
    expect(getDemoWorkflowEvents("SAV-DEMO-002")).toHaveLength(0);
  });

  it("puts request on hold from STAT-03 to STAT-05", () => {
    getRequests();
    const updated = putDemoRequestOnHold("SAV-DEMO-002");

    expect(updated?.status).toBe("STAT-05");
    expect(getDemoWorkflowEvents("SAV-DEMO-002")[0]).toMatchObject({
      type: "hold.placed",
      fromStatus: "STAT-03",
      toStatus: "STAT-05",
    });
  });

  it("resumes request from STAT-05 to STAT-03", () => {
    getRequests();
    putDemoRequestOnHold("SAV-DEMO-002");
    const updated = resumeDemoRequest("SAV-DEMO-002");

    expect(updated?.status).toBe("STAT-03");
    expect(getDemoWorkflowEvents("SAV-DEMO-002")[1]).toMatchObject({
      type: "hold.resumed",
      fromStatus: "STAT-05",
      toStatus: "STAT-03",
    });
  });

  it("cancels request from STAT-01 to STAT-07", () => {
    getRequests();
    const updated = cancelDemoRequest(DEMO_REQUEST_ID);

    expect(updated?.status).toBe("STAT-07");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)[0]).toMatchObject({
      type: "request.cancelled",
      fromStatus: "STAT-01",
      toStatus: "STAT-07",
    });
  });

  it("rejects put_on_hold from STAT-04", () => {
    getRequests();
    completeDemoIntervention("SAV-DEMO-002");

    expect(putDemoRequestOnHold("SAV-DEMO-002")).toBeUndefined();
    expect(getRequestById("SAV-DEMO-002")?.status).toBe("STAT-04");
  });

  it("rejects cancel from STAT-04", () => {
    getRequests();
    completeDemoIntervention("SAV-DEMO-002");

    expect(cancelDemoRequest("SAV-DEMO-002")).toBeUndefined();
    expect(getRequestById("SAV-DEMO-002")?.status).toBe("STAT-04");
  });

  it("requalifies request from STAT-02 and stays in STAT-02", () => {
    getRequests();
    qualifyDemoRequest(DEMO_REQUEST_ID);
    const updated = requalifyDemoRequest(DEMO_REQUEST_ID);

    expect(updated?.status).toBe("STAT-02");
    expect(getDemoWorkflowEvents(DEMO_REQUEST_ID)[1]).toMatchObject({
      type: "request.requalified",
      fromStatus: "STAT-02",
      toStatus: "STAT-02",
    });
  });

  it("requalifies request from STAT-03 to STAT-02", () => {
    getRequests();
    const updated = requalifyDemoRequest("SAV-DEMO-002");

    expect(updated?.status).toBe("STAT-02");
    expect(getDemoWorkflowEvents("SAV-DEMO-002")[0]).toMatchObject({
      type: "request.requalified",
      fromStatus: "STAT-03",
      toStatus: "STAT-02",
    });
  });

  it("requalifies request from STAT-05 to STAT-02", () => {
    getRequests();
    putDemoRequestOnHold("SAV-DEMO-002");
    const updated = requalifyDemoRequest("SAV-DEMO-002");

    expect(updated?.status).toBe("STAT-02");
    expect(getDemoWorkflowEvents("SAV-DEMO-002")[1]).toMatchObject({
      type: "request.requalified",
      fromStatus: "STAT-05",
      toStatus: "STAT-02",
    });
  });

  it("rejects requalify from STAT-01", () => {
    getRequests();
    expect(requalifyDemoRequest(DEMO_REQUEST_ID)).toBeUndefined();
    expect(getRequestById(DEMO_REQUEST_ID)?.status).toBe("STAT-01");
  });

  it("rejects requalify from STAT-04", () => {
    getRequests();
    completeDemoIntervention("SAV-DEMO-002");

    expect(requalifyDemoRequest("SAV-DEMO-002")).toBeUndefined();
    expect(getRequestById("SAV-DEMO-002")?.status).toBe("STAT-04");
  });

  it("exposes requalify only from STAT-02, STAT-03 and STAT-05", () => {
    expect(getAvailableWorkflowActions("STAT-02")).toContain("requalify");
    expect(getAvailableWorkflowActions("STAT-03")).toContain("requalify");
    expect(getAvailableWorkflowActions("STAT-05")).toContain("requalify");
    expect(getAvailableWorkflowActions("STAT-01")).not.toContain("requalify");
    expect(getAvailableWorkflowActions("STAT-04")).not.toContain("requalify");
    expect(getAvailableWorkflowActions("STAT-06")).toHaveLength(0);
    expect(getAvailableWorkflowActions("STAT-07")).toHaveLength(0);
  });

  it("keeps cancel last when present in available actions", () => {
    for (const status of ["STAT-01", "STAT-02", "STAT-03", "STAT-05"] as const) {
      const actions = getAvailableWorkflowActions(status);
      if (actions.includes("cancel")) {
        expect(actions[actions.length - 1]).toBe("cancel");
      }
    }
  });
});
