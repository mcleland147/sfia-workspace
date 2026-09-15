/**
 * DETERMINISTIC NORA BOUNDARY PARITY — FakeConversationProvider
 * user-valid natural Pilot artifact materialization (no hidden sentinel).
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";

const F2_SYSTEM = "SFIA Studio F2 intent analysis";

const CANONICAL_NATURAL = `Matérialise le livrable attendu dans
projects/sfia-studio/.sandbox/gestion-de-taches.md.
Le livrable attendu est une fiche de cadrage fonctionnel minimale pour
l’application de gestion de tâches, décrivant l’objectif, le périmètre
fonctionnel — ajouter une tâche, la marquer comme terminée et la supprimer —
ainsi que les critères d’acceptation essentiels.
N’exécute rien : prépare la proposition correspondante pour ma décision.`;

function parseFakeF2(text: string): Record<string, unknown> {
  const i = text.indexOf("{");
  const j = text.lastIndexOf("}");
  expect(i).toBeGreaterThanOrEqual(0);
  expect(j).toBeGreaterThan(i);
  return JSON.parse(text.slice(i, j + 1)) as Record<string, unknown>;
}

async function analyze(content: string): Promise<Record<string, unknown>> {
  const provider = new FakeConversationProvider();
  const result = await provider.complete([
    { role: "system", content: F2_SYSTEM },
    { role: "user", content },
  ]);
  return parseFakeF2(result.text);
}

describe("FakeConversationProvider — user-valid artifact materialization", () => {
  it("P1 — canonical natural FR request WITHOUT sentinel → materialization F2", async () => {
    const obj = await analyze(CANONICAL_NATURAL);
    expect(obj.intentClass).toBe("execution_request");
    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
    expect(obj.artifactMaterializationOperation).toBe(
      "cursor.docs_write.apply",
    );
    expect(obj.executionIntent).toBeTruthy();
    const ei = obj.executionIntent as Record<string, unknown>;
    expect(ei.targetPath).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(ei.intentKind).toBe("docs_write");
    expect(ei.requiredCapabilities).toEqual(["cap:cursor.docs_write"]);
  });

  it("P2 — canonical natural request contains no fixture sentinel", () => {
    expect(CANONICAL_NATURAL).not.toMatch(/__F2_/);
    expect(CANONICAL_NATURAL).not.toMatch(/__MW5_/);
  });

  it("P3 — targetPath extracted from current demand (second safe .md)", async () => {
    const content = `Matérialise le livrable attendu dans
projects/sfia-studio/.sandbox/autre-livrable.md.
N'exécute rien : prépare la proposition pour ma décision.`;
    const obj = await analyze(content);
    const ei = obj.executionIntent as Record<string, unknown>;
    expect(ei.targetPath).toBe(
      "projects/sfia-studio/.sandbox/autre-livrable.md",
    );
    expect(ei.targetPath).not.toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(ei.targetPath).not.toBe("docs/livrable-cycle.md");
  });

  it("P4 — missing explicit path does not enter natural materialization", async () => {
    const obj = await analyze(
      "Matérialise le livrable attendu. N'exécute rien : prépare la proposition pour ma décision.",
    );
    expect(obj.intentClass).toBe("informative");
    expect(obj.continuationKind ?? null).toBeNull();
    expect(obj.executionIntent ?? null).toBeNull();
  });

  it("P5 — two target paths fails closed / falls through", async () => {
    const obj = await analyze(
      `Matérialise a.md et aussi b.md sous projects/sfia-studio/.sandbox/a.md et projects/sfia-studio/.sandbox/b.md.
N'exécute rien : prépare la proposition pour ma décision.`,
    );
    expect(obj.intentClass).toBe("informative");
    expect(obj.continuationKind ?? null).toBeNull();
  });

  it("P6 — traversal target does not enter natural materialization", async () => {
    const obj = await analyze(
      `Matérialise le livrable dans ../something.md.
N'exécute rien : prépare la proposition pour ma décision.`,
    );
    expect(obj.intentClass).toBe("informative");
    expect(obj.continuationKind ?? null).toBeNull();
  });

  it("P7 — question/reference only is not materialization", async () => {
    const obj = await analyze(
      "Que contient projects/sfia-studio/.sandbox/gestion-de-taches.md ?",
    );
    expect(obj.intentClass).toBe("informative");
    expect(obj.continuationKind ?? null).toBeNull();
  });

  it("P8 — materialize wording without proposal/no-execution guard does not promote", async () => {
    const obj = await analyze(
      "Matérialise le livrable dans projects/sfia-studio/.sandbox/gestion-de-taches.md.",
    );
    expect(obj.intentClass).toBe("informative");
    expect(obj.continuationKind ?? null).toBeNull();
  });

  it("P9 — existing __F2_ARTIFACT_MATERIALIZE__ remains green", async () => {
    const obj = await analyze(
      "Matérialise ce livrable __F2_ARTIFACT_MATERIALIZE__",
    );
    expect(obj.intentClass).toBe("execution_request");
    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
    expect(obj.artifactMaterializationOperation).toBe(
      "cursor.docs_write.apply",
    );
    const ei = obj.executionIntent as Record<string, unknown>;
    expect(ei.targetPath).toBe("docs/livrable-cycle.md");
  });

  it("P10 — hostile merge fixture remains green and distinct", async () => {
    const obj = await analyze(
      "Matérialise ce livrable __F2_ARTIFACT_HOSTILE_MERGE_OP__",
    );
    expect(obj.intentClass).toBe("execution_request");
    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
    expect(obj.artifactMaterializationOperation).toBeNull();
    expect(obj.requestedOperation).toBe("github.pr.merge");
    const ei = obj.executionIntent as Record<string, unknown>;
    expect(ei.requiredCapabilities).toEqual(["cap:github.pr.merge"]);
    expect(ei.requestedOperation).toBe("github.pr.merge");
  });

  it("P11 — same natural request outside F2 context is ordinary fake, not F2 materialization", async () => {
    const provider = new FakeConversationProvider();
    const result = await provider.complete([
      { role: "system", content: "SFIA Studio ordinary conversation test" },
      { role: "user", content: CANONICAL_NATURAL },
    ]);
    expect(result.text).toContain("TEST/FAKE");
    expect(result.text).toContain("Réponse fake");
    expect(result.text).not.toContain("active_cycle_artifact_materialization");
    expect(result.text).not.toContain("cursor.docs_write.apply");
    expect(result.text).not.toContain('"intentClass":"execution_request"');
    expect(result.text).not.toContain('"intentClass": "execution_request"');
  });

  it("P12 — CKC cognition context is not overridden by natural materialization wording", async () => {
    const provider = new FakeConversationProvider();
    const result = await provider.complete([
      {
        role: "system",
        content: "SFIA Studio CKC COGNITIVE REASONING — framing",
      },
      {
        role: "user",
        content: `${CANONICAL_NATURAL}\nintention périmètre besoin réel`,
      },
    ]);
    expect(result.text).toContain("RECOMMANDATION CKC");
    expect(result.text).not.toContain("active_cycle_artifact_materialization");
    expect(result.text).not.toContain("cursor.docs_write.apply");
  });
});
