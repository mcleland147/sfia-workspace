/**
 * P5-S07 CP02 — semantic integrity, History identity dedup, responsive bands.
 * ZERO REAL. No architecture reopen.
 */
import { describe, expect, it } from "vitest";
import {
  deriveWorkRepresentationProjection,
  workProductionPilotLabel,
  workRequirementPilotLabel,
  workTriStatePilotLabel,
  workValidationPilotLabel,
} from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import { deriveWorkRepresentationFromLifecycleProjection } from "@/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle";
import {
  deriveProjectHistoryEvents,
  filterProjectHistoryEvents,
} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const PROJECT_ID = "prj:p5-s07-cp02";

function historyFixture(
  overrides: Partial<W2ProjectHistoryReadModel> = {},
): W2ProjectHistoryReadModel {
  return {
    projectId: PROJECT_ID,
    projectTitle: "CP02 Fixture",
    lps: { lpsId: "lps:cp02", version: 1 },
    cycle: {
      activeCycleInstanceId: "cyc:cp02",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: null,
      proposedNotYetDecided: null,
      versions: [],
    },
    decisions: [],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: [],
    boundNote: "test",
    ...overrides,
  };
}

describe("P5-S07 CP02 — B2 Work Representation semantic integrity", () => {
  it("T-SEM-01/02 — Artifact obligation SATISFIED without real IDs → produced + empty refs", () => {
    const projection = {
      projectId: PROJECT_ID,
      selectedCycleInstanceId: "cyc:cp02",
      activeCycleInstanceId: "cyc:cp02",
      selectedStatus: "active",
      assessment: {
        readyExceptFinalizeDecision: false,
        obligations: [
          {
            family: "artifact",
            applicability: "APPLICABLE",
            status: "SATISFIED",
            kind: "TO_TREAT",
            label: "Artifact",
          },
        ],
      },
    } as unknown as PilotLifecycleProjection;

    const work = deriveWorkRepresentationFromLifecycleProjection(projection);
    expect(work).not.toBeNull();
    expect(work!.productionState).toBe("produced");
    expect(work!.artifactRefs).toEqual([]);
    expect(work!.artifactRefs.join(",")).not.toContain("artifact:satisfied");
    expect(JSON.stringify(work)).not.toContain("artifact:satisfied");
  });

  it("T-SEM-03 — Evidence only → validation unknown", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactProduced: true,
      artifactIds: [],
      evidenceIds: ["ev:only"],
      reviewBundleIds: [],
      qualificationHint: null,
    });
    expect(work.validationState).toBe("unknown");
  });

  it("T-SEM-04 — ReviewBundle only → validation unknown", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactProduced: true,
      artifactIds: [],
      evidenceIds: [],
      reviewBundleIds: ["rb:only"],
      qualificationHint: null,
    });
    expect(work.validationState).toBe("unknown");
  });

  it("T-SEM-05 — qualificationHint under_review → under_review", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      qualificationHint: "under_review",
      evidenceIds: [],
      reviewBundleIds: [],
    });
    expect(work.validationState).toBe("under_review");
  });

  it("T-SEM-06 — qualificationHint validated → validated; produced without hint → unknown", () => {
    const validated = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactProduced: true,
      artifactIds: [],
      qualificationHint: "validated",
    });
    expect(validated.validationState).toBe("validated");

    const producedNoHint = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactProduced: true,
      artifactIds: [],
      qualificationHint: null,
    });
    expect(producedNoHint.productionState).toBe("produced");
    expect(producedNoHint.validationState).toBe("unknown");
  });

  it("T-SEM — Pilot-facing labels never expose raw enums nominally", () => {
    expect(workRequirementPilotLabel("expected")).toBe("Attendu");
    expect(workProductionPilotLabel("not_produced")).toBe("Non produit");
    expect(workValidationPilotLabel("under_review")).toBe("En revue");
    expect(
      workTriStatePilotLabel(true, {
        true: "Satisfaite",
        false: "Non satisfaite",
        unknown: "Non déterminée",
      }),
    ).toBe("Satisfaite");
  });
});

describe("P5-S07 CP02 — B4 History identity dedup", () => {
  it("T-HIS-01 / H-D01 — same Evidence in history + durable → 1 event", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      }),
      durable: {
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      },
    });
    const evidenceEvents = events.filter((e) => e.eventId === "evidence:ev:dup");
    expect(evidenceEvents).toHaveLength(1);
  });

  it("T-HIS-02 / H-D02 — same ReviewBundle in history + durable → 1 event", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        reviewBundles: [{ reviewBundleId: "rb:dup", status: "open" }],
      }),
      durable: {
        reviewBundles: [{ reviewBundleId: "rb:dup", status: "open" }],
      },
    });
    const rbEvents = events.filter((e) => e.eventId === "rb:rb:dup");
    expect(rbEvents).toHaveLength(1);
  });

  it("T-HIS-03 / H-D03 — distinct Evidence IDs → 2 events", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [
          { evidenceId: "ev:a", status: "recorded" },
          { evidenceId: "ev:b", status: "recorded" },
        ],
      }),
    });
    expect(events.filter((e) => e.sourceKind === "Evidence")).toHaveLength(2);
  });

  it("T-HIS-04 / H-D04 — all returned event IDs unique", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [{ evidenceId: "ev:x", status: "recorded" }],
        reviewBundles: [{ reviewBundleId: "rb:x", status: "open" }],
      }),
      durable: {
        evidence: [
          { evidenceId: "ev:x", status: "recorded" },
          { evidenceId: "ev:y", status: "recorded" },
        ],
        reviewBundles: [
          { reviewBundleId: "rb:x", status: "open" },
          { reviewBundleId: "rb:y", status: "open" },
        ],
      },
    });
    const ids = events.map((e) => e.eventId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("T-HIS-05 — filter/search does not reintroduce duplicates", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      }),
      durable: {
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      },
    });
    const filtered = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "Preuve",
    });
    expect(
      filtered.filter((e) => e.eventId === "evidence:ev:dup"),
    ).toHaveLength(1);
  });

  it("T-HIS-06 — transcript remains non-History", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture(),
    });
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
  });
});

describe("P5-S07 CP02 — B5 responsive contract source bands", () => {
  const studioRoot = join(__dirname, "../../..");

  function assertMobileBand(cssPath: string) {
    const css = readFileSync(join(studioRoot, cssPath), "utf8");
    expect(css).toMatch(/@media \(max-width:\s*767px\)/);
    expect(css).not.toMatch(/@media \(max-width:\s*899px\)/);
  }

  it("T-RSP — Journal / History / Workspace mobile band is ≤767", () => {
    assertMobileBand(
      "app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css",
    );
    assertMobileBand(
      "app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css",
    );
    assertMobileBand(
      "app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css",
    );
  });

  it("T-RSP — History compact band is 768–1199", () => {
    const css = readFileSync(
      join(
        studioRoot,
        "app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css",
      ),
      "utf8",
    );
    expect(css).toMatch(
      /@media \(min-width:\s*768px\) and \(max-width:\s*1199px\)/,
    );
    expect(css).not.toMatch(
      /@media \(min-width:\s*900px\) and \(max-width:\s*1199px\)/,
    );
  });
});
