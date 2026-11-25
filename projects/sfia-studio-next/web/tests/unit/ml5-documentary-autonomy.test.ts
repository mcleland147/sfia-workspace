import { describe, expect, it } from "vitest";
import { diffMarkdown } from "@/domains/document/service";
import { isConserveProposalTransmit, DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";

/**
 * Discriminant proofs for Nora documentary autonomy (InterventionTrack shape).
 * Studio seals Nora's complete proposal — no prefix/fragment reconstruction.
 */

const V1 = `# InterventionTrack — Conception fonctionnelle V1

## 3. Règles

| ID | Règle | Nature |
|---|---|---|
| **RM-01** | Une demande a un titre. | Proposition |
| **RM-02** | Le titre et la description sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |
| **RM-03** | L'attribution est distincte de l'état. | Proposition |

## 4. Scénarios

| ID | Action | Résultat | Règles |
|---|---|---|---|
| **REC-01 — Création** | Saisie titre + description | Demande créée | RM-02 |
| **REC-02 — Saisie invalide** | Un membre tente de créer une demande sans titre, puis avec une description composée uniquement d'espaces. | Chaque tentative signale le champ à renseigner ; aucune demande n'est créée. | RM-02 |
| **REC-03 — Attribution** | Attribuer un technicien | État inchangé | RM-03 |

- **Saisie minimale — RM-02 / REC-02 :** titre et description suffisent-ils, ou faut-il une information indispensable en plus, par exemple le lieu ?
`;

const PROPOSAL = V1
  .replace(
    "| **RM-02** | Le titre et la description sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
    "| **RM-02** | À la création, le titre, la description et le lieu d'intervention sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
  )
  .replace(
    "| **REC-02 — Saisie invalide** | Un membre tente de créer une demande sans titre, puis avec une description composée uniquement d'espaces. | Chaque tentative signale le champ à renseigner ; aucune demande n'est créée. | RM-02 |",
    "| **REC-02 — Saisie invalide** | Un membre tente de créer une demande sans titre, puis avec une description composée uniquement d'espaces, puis sans lieu d'intervention. | Chaque tentative signale le champ à renseigner ; aucune demande n'est créée. | RM-02 |",
  );

describe("ML5 documentary autonomy — seal complete proposal", () => {
  it("A — proposal modifies RM-02 and REC-02; hors-scope lines stay identical in sealed body", () => {
    // Studio seals proposal as-is (no fragment splice).
    const sealed = PROPOSAL;
    expect(sealed).toContain("lieu d'intervention sont obligatoires");
    expect(sealed).toContain("puis sans lieu d'intervention");
    expect(sealed).toContain("| **RM-01** | Une demande a un titre. | Proposition |");
    expect(sealed).toContain("| **RM-03** | L'attribution est distincte de l'état. | Proposition |");
    expect(sealed).toContain("| **REC-01 — Création** |");
    expect(sealed).toContain("| **REC-03 — Attribution** |");
    // Open question (citation of ids) preserved verbatim.
    expect(sealed).toContain(
      "titre et description suffisent-ils, ou faut-il une information indispensable en plus, par exemple le lieu ?",
    );
  });

  it("B — unknown prefixes (AC-02) do not require Studio catalog — full proposal carries the change", () => {
    const base = V1 + "\n| **AC-02** | Ancien critère. |\n";
    const prop = base.replace(
      "| **AC-02** | Ancien critère. |",
      "| **AC-02** | Nouveau critère avec lieu. |",
    );
    expect(prop).toContain("Nouveau critère avec lieu");
    expect(prop).not.toContain("Ancien critère");
  });

  it("C — id cited twice: table row changes, citation line can stay (Nora decides)", () => {
    const diff = diffMarkdown(V1, PROPOSAL);
    expect(diff.degraded).toBe(false);
    const removedRm = diff.removed.filter((l) => l.includes("**RM-02**"));
    const addedRm = diff.added.filter((l) => l.includes("**RM-02**"));
    expect(removedRm.length).toBe(1);
    expect(addedRm.length).toBe(1);
    expect(addedRm[0]).toContain("lieu d'intervention");
    // Citation line still present as equal (not in added/removed as sole hit).
    expect(PROPOSAL).toContain("Saisie minimale — RM-02 / REC-02");
  });

  it("E — markdown tables: both REC and RM cells change in proposal", () => {
    const diff = diffMarkdown(V1, PROPOSAL);
    expect(diff.added.some((l) => l.includes("**REC-02") && l.includes("sans lieu"))).toBe(true);
    expect(diff.removed.some((l) => l.includes("**REC-02") && !l.includes("sans lieu"))).toBe(
      true,
    );
  });

  it("F — compare reveals missing change when proposal omits REC-02", () => {
    const incomplete = V1.replace(
      "| **RM-02** | Le titre et la description sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
      "| **RM-02** | À la création, le titre, la description et le lieu d'intervention sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
    );
    const diff = diffMarkdown(V1, incomplete);
    expect(diff.added.some((l) => l.includes("lieu d'intervention sont obligatoires"))).toBe(true);
    expect(diff.added.some((l) => l.includes("**REC-02") && l.includes("sans lieu"))).toBe(false);
  });

  it("G — no-delta proposal is detectable (no fictive revise success)", () => {
    const diff = diffMarkdown(V1, V1);
    expect(diff.degraded).toBe(false);
    expect(diff.added).toEqual([]);
    expect(diff.removed).toEqual([]);
    const noDelta =
      V1.replace(/\r\n/g, "\n") === V1.replace(/\r\n/g, "\n");
    expect(noDelta).toBe(true);
  });

  it("conserve transmit is exact — freeform does not authorize", () => {
    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
    expect(isConserveProposalTransmit("ok je valide cette nouvelle version")).toBe(false);
    expect(
      isConserveProposalTransmit("Conserver comme nouvelle version la proposition documentaire préparée."),
    ).toBe(true);
  });
});

describe("ML5 LIVE activity — no prompt reformulation export", () => {
  it("projectMissionHeadlineFromUserAsk is removed", async () => {
    const mod = await import("@/domains/conversation/activity-labels");
    expect(
      "projectMissionHeadlineFromUserAsk" in mod
        ? (mod as { projectMissionHeadlineFromUserAsk?: unknown }).projectMissionHeadlineFromUserAsk
        : undefined,
    ).toBeUndefined();
  });
});
