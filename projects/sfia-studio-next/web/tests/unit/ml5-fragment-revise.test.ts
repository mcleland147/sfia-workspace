import { describe, expect, it } from "vitest";
import {
  applyTargetedFragmentRevision,
  assertFragmentScope,
  extractFragmentIds,
} from "@/domains/conversation/document-act";

const BASE = `# Doc

## 2. Règles

| Règle | Comportement |
|---|---|
| RM-01 — Un seul prêt | Refus double prêt. |
| RM-02 — Infos minimales | Matériel + emprunteur. |
| RM-03 — Date facultative | Peut omettre l'échéance. |
| RM-04 — Retour | Clôt le prêt actif. |

## 4. Scénarios

| ID | Action | Résultat |
|---|---|---|
| R01 — Consulter | Liste | États distincts. |
| R04 — Prêt sans échéance | Laisser vide | Création acceptée. |
| R05 — Retour | Enregistrer | Matériel disponible. |
`;

const PROPOSED = `# Doc

## 2. Règles

| Règle | Comportement |
|---|---|
| RM-01 — Un seul prêt | CHANGED SHOULD NOT APPLY. |
| RM-03 — Date obligatoire | Doit renseigner l'échéance. |
| RM-99 — Intrus | Should not appear. |

## 4. Scénarios

| ID | Action | Résultat |
|---|---|---|
| R04 — Refuser sans échéance | Laisser vide | Création refusée. |
`;

describe("ML5 fragment-level revise", () => {
  it("extracts RM-03 and R04 from natural wording", () => {
    expect(
      extractFragmentIds("Modifier uniquement RM-03 en section 2 et R04 en section 4"),
    ).toEqual(["RM-03", "R-04"]);
  });

  it("replaces only authorized fragment lines", () => {
    const merged = applyTargetedFragmentRevision(BASE, PROPOSED, ["RM-03", "R-04"]);
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    expect(merged.content).toContain("Date obligatoire");
    expect(merged.content).toContain("Création refusée");
    expect(merged.content).toContain("RM-01 — Un seul prêt | Refus double prêt");
    expect(merged.content).not.toContain("CHANGED SHOULD NOT APPLY");
    expect(merged.content).not.toContain("RM-99");
    expect(assertFragmentScope(BASE, merged.content, ["RM-03", "R-04"])).toEqual({
      ok: true,
    });
  });

  it("detects unauthorized drift outside fragments", () => {
    const drifted = BASE.replace("RM-01 — Un seul prêt | Refus double prêt.", "RM-01 — HACKED");
    expect(assertFragmentScope(BASE, drifted, ["RM-03"])).toEqual({
      ok: false,
      reason: "FRAGMENT_SCOPE_EXCEEDED",
    });
  });
});
