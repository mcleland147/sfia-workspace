import { describe, expect, it } from "vitest";
import {
  buildActivityGroups,
  projectMissionHeadline,
} from "@/domains/conversation/activity-labels";

describe("ML5 LIVE activity hierarchy", () => {
  it("groups sources under consultation with counts — not flat filename as mission title", () => {
    const events = [
      {
        sequence: 1,
        phase: "nora.objective",
        nature: "ANNOUNCED",
        status: "RUNNING",
        summary: "Analyse des mécanismes de prévention du double prêt",
        detail: { objective: "Analyse des mécanismes de prévention du double prêt", kind: "OBJECTIVE" },
      },
      {
        sequence: 2,
        phase: "nora.source.git",
        nature: "OBSERVED",
        status: "COMPLETED",
        summary: "Consultation Git — planning.api.spec.ts",
        sourceRef: "git-file:1:a",
        detail: { kind: "GIT", coverage: "CONSULTED", title: "planning.api.spec.ts" },
      },
      {
        sequence: 3,
        phase: "nora.source.git",
        nature: "OBSERVED",
        status: "LIMITED",
        summary: "Consultation Git partielle — migration.sql",
        sourceRef: "git-file:1:b",
        detail: { kind: "GIT", coverage: "PARTIAL", title: "migration.sql" },
      },
      {
        sequence: 4,
        phase: "nora.generate",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: "Réponse Nora disponible",
        detail: {},
      },
    ];
    const groups = buildActivityGroups(events);
    expect(groups.some((g) => g.key === "sources")).toBe(true);
    const sources = groups.find((g) => g.key === "sources")!;
    expect(sources.resultSummary).toMatch(/2 source/);
    expect(sources.details.length).toBe(2);
    expect(projectMissionHeadline(events)).toBe(
      "Analyse des mécanismes de prévention du double prêt",
    );
  });

  it("supports 45 deterministic operations without flattening all into the mission title", () => {
    const events = Array.from({ length: 45 }, (_, i) => ({
      sequence: i + 1,
      phase: "nora.source.git",
      nature: "OBSERVED" as const,
      status: "COMPLETED",
      summary: `Consultation Git — file-${i}.ts`,
      sourceRef: `git-file:r:file-${i}.ts`,
      detail: { kind: "GIT", coverage: "CONSULTED", title: `file-${i}.ts` },
    }));
    events.unshift({
      sequence: 0,
      phase: "nora.objective",
      nature: "ANNOUNCED",
      status: "RUNNING",
      summary: "Investigation ciblée",
      sourceRef: null as unknown as string,
      detail: { objective: "Investigation ciblée", kind: "OBJECTIVE" },
    });
    const groups = buildActivityGroups(events);
    const sources = groups.find((g) => g.key === "sources")!;
    // Projection caps detail rows; counters still reflect known volume.
    expect(sources.resultSummary).toMatch(/45 source/);
    expect(sources.details.length).toBe(45);
    expect(projectMissionHeadline(events)).toBe("Investigation ciblée");
  });

  it("retires a RUNNING objective once the same operation is completed", () => {
    const groups = buildActivityGroups([
      {
        sequence: 1,
        phase: "nora.objective",
        nature: "ANNOUNCED",
        status: "RUNNING",
        summary: "Orientation du travail à partir de la demande du Pilote",
        detail: {
          objective: "Orientation du travail à partir de la demande du Pilote",
          kind: "OBJECTIVE",
        },
      },
      {
        sequence: 2,
        phase: "nora.objective",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: "Orientation du travail terminée",
        detail: { objective: "Analyse des règles d'habilitation", metierTitle: "Analyse des règles d'habilitation" },
      },
    ]);
    const understand = groups.find((g) => g.key === "understand");
    expect(understand?.state).toBe("done");
    expect(understand?.title).toBe("Analyse des règles d'habilitation");
  });

  it("does not mark a group done while another operation stays unknown", () => {
    const groups = buildActivityGroups([
      {
        sequence: 1,
        phase: "nora.source.git",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: "Consultation Git — a.ts",
        sourceRef: "git:a",
        detail: { kind: "GIT", coverage: "CONSULTED", title: "a.ts" },
      },
      {
        sequence: 2,
        phase: "nora.source.git",
        nature: "UNCERTAIN",
        status: "UNKNOWN",
        summary: "Consultation Git — b.ts",
        sourceRef: "git:b",
        detail: { kind: "GIT", coverage: "UNKNOWN", title: "b.ts" },
      },
    ]);
    expect(groups.find((g) => g.key === "sources")?.state).not.toBe("done");
  });
});

