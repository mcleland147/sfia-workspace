import { describe, expect, it } from "vitest";
import {
  buildActivityGroups,
  buildActivitySteps,
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

  it("keeps every effect in the detail and the counter", () => {
    const events = Array.from({ length: 10 }, (_, i) => ({
      sequence: i + 1,
      phase: "nora.effect.knowledge",
      nature: "COMPLETED" as const,
      status: "COMPLETED",
      summary: `Connaissance ${i + 1} enregistrée`,
      detail: { ownerRef: `acq_${i + 1}` },
    }));
    const group = buildActivityGroups(events).find((g) => g.key === "produce");
    expect(group?.details).toHaveLength(10);
    expect(group?.resultSummary).toBe("10 opérations");
    expect(buildActivitySteps(events)).toHaveLength(10);
  });

  it("closes repeated announcements of the same operation", () => {
    const groups = buildActivityGroups([
      {
        sequence: 1,
        phase: "nora.objective",
        nature: "ANNOUNCED",
        status: "RUNNING",
        summary: "Orientation du travail à partir de la demande du Pilote",
        detail: { objective: "Orientation du travail à partir de la demande du Pilote" },
      },
      {
        sequence: 2,
        phase: "nora.objective",
        nature: "ANNOUNCED",
        status: "RUNNING",
        summary: "Orientation du travail à partir de la demande du Pilote",
        detail: { objective: "Orientation du travail à partir de la demande du Pilote" },
      },
      {
        sequence: 3,
        phase: "nora.objective",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: "Orientation du travail terminée",
        detail: { objective: "Analyse des règles d'habilitation" },
      },
    ]);
    expect(groups.find((g) => g.key === "understand")?.state).toBe("done");
  });

  it("keeps two operations on the same source and every comparison", () => {
    const groups = buildActivityGroups([
      {
        sequence: 1,
        phase: "nora.source.d4",
        nature: "OBSERVED",
        status: "LIMITED",
        summary: "Lecture partielle — Cadrage",
        sourceRef: "document:doc_x/revision:v1",
        detail: { kind: "D4", coverage: "PARTIAL", title: "Cadrage", operation: "read-v1" },
      },
      {
        sequence: 2,
        phase: "nora.source.d4",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: "Comparaison documentaire — V1 → V2 — +3 lignes / −1 ligne",
        sourceRef: "document:doc_x/revision:v1",
        detail: { kind: "D4", coverage: "COMPLETE", title: "Cadrage", operation: "compare-v1-v2" },
      },
      {
        sequence: 3,
        phase: "nora.source.d4",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: "Comparaison documentaire — V2 → V3 — +1 ligne / −4 lignes",
        sourceRef: "document:doc_x/revision:v2",
        detail: { kind: "D4", coverage: "COMPLETE", title: "Cadrage", operation: "compare-v2-v3" },
      },
    ]);
    const sources = groups.find((g) => g.key === "sources");
    expect(sources?.state).not.toBe("done");
    expect(sources?.resultSummary).toMatch(/2 comparaisons/);
    const titles = sources?.details.map((d) => d.title) ?? [];
    expect(titles.some((t) => t.includes("V1 → V2"))).toBe(true);
    expect(titles.some((t) => t.includes("V2 → V3"))).toBe(true);
    expect(projectMissionHeadline(groups.flatMap(() => []))).toBe("Orientation du travail");
  });
});

