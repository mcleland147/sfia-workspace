# SFIA Studio Next — Ensemble 06 Documents — CORRECTIVE CYCLE Review Pack FULL

```text
TIMESTAMP: 2026-11-19 23:43:52 +0100
PRODUIT: SFIA Studio Next
DÉPÔT: mcleland147/sfia-workspace
CYCLE: 08 Delivery / EVOL — Correction Documents Bibliothèque (R1–R5)
PROFIL: Standard + contrôles P0 renforcés
ENV: DEV (isolation) — aucune mutation RECETTE/STABLE
VERSION PRODUIT: aucune release attribuée
FAKE/REAL: fixtures Nora FAKE (STUDIO_FORCE_NORA_FIXTURE / E2E lane) ≠ LIVE OpenAI
```

## 1. Git Truth Check

### Avant cycle correctif (références mandat)
```text
worktree: /Users/morris/Projects/sfia-wt-documents-delivery-20261119
branch: sfia/next-documents-delivery-20261119
HEAD déclaré: 6516c7b56ec61bd72943ae0d26e625bf21139d4e
origin/main déclaré: d3d199adb782462b93467934f5f1e8a0c98fb492
handoff tip déclaré: be84f3bddbed9a7b696a93b3d3f9d674fd9dbdd6
blob handoff déclaré: 982bbdccea2fe6a0bce9a29f46ba77c0c40d2b71
```

### Après corrections (état local actuel, avant publication handoff)
```text
pwd: /Users/morris/Projects/sfia-wt-documents-delivery-20261119
branch: sfia/next-documents-delivery-20261119
HEAD: 6516c7b56ec61bd72943ae0d26e625bf21139d4e
origin/main: d3d199adb782462b93467934f5f1e8a0c98fb492
status: DIRTY / NON COMMITTÉ (attendu — pas de commit projet)
handoff remote tip (pré-publish): be84f3bddbed9a7b696a93b3d3f9d674fd9dbdd6
```

### Fichiers
- 12 fichiers déjà modifiés (cycle précédent) + correctifs R1–R5
- 3 fichiers de tests créés conservés + enrichis
- fixture-semantic-qualify.ts modifié (scénarios Documents)
- Aucun reset --hard / clean -fd

```text
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/document/service.ts
 M projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/web/tests/e2e/documents-bibliotheque-08.spec.ts
?? projects/sfia-studio-next/web/tests/integration/documents-historical-revise.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
```

### Diff stat
```text
 .tmp-sfia-review/chatgpt-review.md                 | 166 ----
 .../documents/[documentId]/route.ts                |  23 +-
 .../preparations/[preparationId]/messages/route.ts |  18 +
 .../web/src/app/projects/[projectId]/page.tsx      | 894 +++++++++++++++++----
 .../web/src/components/figma/DocumentSurfaces.tsx  | 794 ++++++++++++++++--
 .../web/src/components/figma/ProjectChrome.tsx     |  23 +-
 .../web/src/components/figma/TravailViewer.tsx     |  56 +-
 .../web/src/components/figma/tokens.css            | 482 +++++++++++
 .../web/src/domains/conversation/document-act.ts   | 139 ++++
 .../src/domains/conversation/document-command.ts   |  69 +-
 .../conversation/fixture-semantic-qualify.ts       |  66 ++
 .../web/src/domains/conversation/service.ts        | 188 ++++-
 .../web/src/domains/document/service.ts            | 125 ++-
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  26 +-
 14 files changed, 2624 insertions(+), 445 deletions(-)
```

## 2. Findings R1–R5 — verdicts

| ID | Priorité | Statut initial | Statut final | Preuve |
|---|---|---|---|---|
| R1 | P0 | NON CONFORME | **PASS** | resolveReviseTarget ignore sourceContentMarkdown; service toujours getDocumentRevision |
| R2 | P0 | NON CONFORME | **PASS** | regex lexical supprimée; resolveHistoricalConfirmation contextualisée |
| R3 | P0 | NON DÉMONTRÉ | **PASS** | sous documentFocus, REVISE → PROPOSAL_PENDING_CONSERVATION; conserve explicite |
| R4 | P1 | PARTIEL | **PASS** | formatPilotFacingProvenance; plus d'invention « Production Nora » sans donnée |
| R5 | P1 | PARTIEL | **PASS WITH VISUAL RESERVES** | libellés Figma alignés; 8 captures distinctes; géométrie ≤2px non re-prouvée pixel-perfect |

## 3. Blast radius

- Domaines: conversation (document-act, service, fixtures), document (revise historique déjà en place), UI Documents/Travail
- API: messages documentFocus étendu; documents route inchangée fonctionnellement hors champs historiques déjà livrés
- Hors scope: Journal V4, D6/D9, SEF, main, RECETTE, push projet

## 4. Modifications réalisées (résumé)

### R1 — Source D4 canonique
- `resolveReviseTarget`: ne lit plus `sourceContentMarkdown` client; historique → baseContent vide
- `postUserMessageAndNora` REVISE: **toujours** `getDocumentRevision` si focus.sourceRevisionId; refuse silencieux vers latest

### R2 — Confirmation historique
- Nouveau `resolveHistoricalConfirmation` + `historicalConfirmation` bound IDs
- Suppression totale du regex `oui|confirme` × `version|historique`
- UI boutons: « Repartir de la vN » / « Partir de la vN courante » avec confirmation structurée

### R3 — Proposition ≠ conservation
- Sous `documentFocus`: pas de `sealAndApply` tant que `conserveProposal !== true` et pas de `PRIOR_ASSISTANT_MESSAGE`
- Raison `PROPOSAL_PENDING_CONSERVATION`; UI 930:10 + fixture conserve
- Conservation explicite via CTA / message fixture

### R4 — Provenance
- `formatPilotFacingProvenance`; fallback « Provenance non renseignée »
- ORIGINE n'invente plus depuis le seul nom de projet

### Continuity documentFocus
- sessionStorage `sfia.docFocus.v1:{projectId}:{preparationId}`
- reconstitution au load; conserveProposal jamais rejoué; confirmation invalidable

### R5 — Figma
- Libellés 08.01–08.08 alignés (inventaire MCP)
- Historique ordre décroissant; VERSION DE DÉPART; heroes Travail/Documents
- Banner/alert lecture retirée (non Figma)

## 5. ENV-01 / Fake-Real

```text
ENV: DEV worktree sfia-wt-documents-delivery-20261119
Port operator: :3100 (captures)
E2E isolé: :3101 + sfia_next_e2e (Playwright webServer)
Nora fixtures: FAKE — DETERMINISTIC PROVEN ≠ LIVE/REAL PROVEN
PostgreSQL: preuves invariants sur DB réellement utilisée
RECETTE: aucune mutation
```

## 6. Tests exécutés

| Suite | Résultat | Preuve |
|---|---|---|
| vitest unit documents-surfaces-projection (12) | PASS | R1/R2/R4 |
| vitest unit document-act + document-command (57) | PASS | non-régression |
| vitest PG documents-historical-revise (4) | PASS | V2→V4, concurrence V5, idempotence |
| Playwright documents-bibliotheque-08 | PASS | DOC-UAT select/read/history |
| Playwright g4-b1-b4-correctifs | PASS | deep-link, missing foreign, revise→Travail |
| Captures runtime 8 frames | DONE | 930:9≠930:10 MD5 distincts |

### Matrice UAT/TECH (IDs contractuels)

| ID | Résultat | Preuve |
|---|---|---|
| DOC-UAT-01 | PASS | e2e select≠open |
| DOC-UAT-02 | PASS | e2e read-only |
| DOC-UAT-03 | PARTIAL | lecture contenu réel — e2e smoke |
| DOC-UAT-04 | PASS | pas de textarea |
| DOC-UAT-05 | PASS | historique |
| DOC-UAT-06 | PARTIAL | ordre décroissant — unit/UI + capture |
| DOC-UAT-07 | PASS | comparateur |
| DOC-UAT-08 | PARTIAL | comparaison capture 930:8 |
| DOC-UAT-09 | PASS | PG historical V2→V4 |
| DOC-UAT-10 | PASS | PG concurrence |
| DOC-UAT-11 | PASS | proposition non enregistrée (runtime 930:10 + reason code) |
| DOC-UAT-12 | PASS | conserve CTA + fixture path |
| DOC-UAT-13 | PARTIAL | documentFocus sessionStorage — code + restore path |
| DOC-TECH-14 | PASS | R1 unit ignore forged markdown |
| DOC-TECH-15 | PASS | R2 unit REFUSED/HEAD_MOVED/IDENTITY |
| DOC-TECH-16 | PASS | R3 PROPOSAL_PENDING_CONSERVATION |
| DOC-TECH-17 | PASS | R4 provenance formatter |
| DOC-TECH-18 | PARTIAL | géométrie F2 — captures + geometry.json; delta 0 non re-mesuré exhaustif |

## 7. Captures visuelles

Répertoire local (binaires non poussables dans handoff git textuel):
`projects/sfia-studio-next/.tmp-sfia-review/documents-runtime/`

| Frame | Fichier | MD5 / note |
|---|---|---|
| 930:3 | runtime-930-3-bibliotheque.png | + geometry.json |
| 930:4 | runtime-930-4-lecture.png | |
| 930:5 | runtime-930-5-travail-5050.png | |
| 930:6 | runtime-930-6-historique-replie.png | |
| 930:7 | runtime-930-7-comparateur-deplie.png | |
| 930:8 | runtime-930-8-comparaison-5050.png | |
| 930:9 | runtime-930-9-nora-historique.png | MD5 186326eabef76677fff2fcc91f35a9a0 |
| 930:10 | runtime-930-10-nora-proposition.png | MD5 48a509debea9d506643aed744385b58a |

**930:9 ≠ 930:10** — hashes distincts (obligation respectée).

Figma labels inventory: `projects/sfia-studio-next/.tmp-sfia-review/figma-labels-inventory-08.md`
Runtime label matrix: `.../documents-runtime/label-runtime-matrix-corrective.md`

LIMITE: ChatGPT ne peut pas ouvrir les PNG locaux; la revue s'appuie sur hashes, matrice, diffs et tests.

## 8. Réserves classées

1. **VISUAL / F2** — delta géométrique exhaustif ≤2px non re-prouvé point par point sur les 8 frames après correctifs (captures présentes; mesures partielles).
2. **FAKE** — scénarios Nora Documents prouvés en fixture lane, pas LIVE OpenAI.
3. **documentFocus** — sessionStorage tab-scoped; pas de sync multi-onglet / serveur.
4. **CREATE auto-save** — inchangé hors Documents focus; R3 gate activé quand `documentFocus` présent.

## 9. Verdict unique

```text
READY FOR INDEPENDENT CHATGPT REVIEW
(WITH VISUAL RESERVES — géométrie F2 exhaustive partielle)
```

P0 R1/R2/R3 corrigés et testés. P1 R4/R5 + focus traités. Pas d'acceptation RECETTE. Pas de GO publication projet.

## 10. Gate Morris restant

1. Revue indépendante ChatGPT sur handoff distant
2. Recette utilisateur Morris
3. GO distinct pour commit/push/PR projet si accepté

## 11. Instruction ChatGPT

Lire depuis Git branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md` (ce document après publish). Vérifier créations, diffs, tests R1–R3, états Figma 930:9≠930:10, résultats exécutés vs déclarés.

---

# §16 — Fichiers de tests créés (contenu intégral)

## 16.1 tests/unit/documents-surfaces-projection.test.ts

```typescript
import { describe, expect, it } from "vitest";
import {
  formatPilotFacingProvenance,
  revisionCurrencyLabel,
} from "@/components/figma/DocumentSurfaces";
import {
  resolveHistoricalConfirmation,
  resolveReviseTarget,
  type DocumentListItem,
  type DocumentReviseFocus,
} from "@/domains/conversation/document-act";

describe("revisionCurrencyLabel", () => {
  it("marks head as Courante and others Historique", () => {
    expect(revisionCurrencyLabel(3, 3)).toBe("Courante");
    expect(revisionCurrencyLabel(2, 3)).toBe("Historique");
    expect(revisionCurrencyLabel(1, null)).toBe("Historique");
  });
});

describe("R1 resolveReviseTarget — client markdown never authoritative", () => {
  const docs: DocumentListItem[] = [
    {
      document: { id: "doc-1", title: "Parcours" },
      latestRevision: {
        id: "rev-3",
        revisionNumber: 3,
        status: "AVAILABLE",
        contentMarkdown: "# V3 canonical from list\n",
      },
    },
  ];

  it("ignores forged sourceContentMarkdown for historical focus (empty base → D4 reload)", () => {
    const focus: DocumentReviseFocus = {
      documentId: "doc-1",
      sourceRevisionId: "rev-2",
      sourceRevisionNumber: 2,
      sourceContentMarkdown: "# FORGED CLIENT MARKDOWN — must not be used\n",
      observedHeadRevisionId: "rev-3",
      observedHeadRevisionNumber: 3,
      confirmedHistoricalSource: false,
    };
    const target = resolveReviseTarget(docs, null, focus);
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseRevisionId).toBe("rev-2");
    expect(target.baseContent).toBe("");
    expect(target.baseContent).not.toContain("FORGED");
  });

  it("uses authorized list head body only when source === head", () => {
    const focus: DocumentReviseFocus = {
      documentId: "doc-1",
      sourceRevisionId: "rev-3",
      sourceRevisionNumber: 3,
      sourceContentMarkdown: "# forged head\n",
      observedHeadRevisionId: "rev-3",
      observedHeadRevisionNumber: 3,
    };
    const target = resolveReviseTarget(docs, null, focus);
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseContent).toBe("# V3 canonical from list\n");
    expect(target.baseContent).not.toContain("forged");
  });

  it("falls back to hint/latest when no focus", () => {
    const target = resolveReviseTarget(docs, "doc-1");
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseRevisionId).toBe("rev-3");
  });
});

describe("R2 resolveHistoricalConfirmation — no lexical authority", () => {
  const baseFocus: DocumentReviseFocus = {
    documentId: "doc-A",
    sourceRevisionId: "rev-2",
    observedHeadRevisionId: "rev-3",
    confirmedHistoricalSource: false,
  };

  it("REFUSED structured choice → not confirmed", () => {
    const r = resolveHistoricalConfirmation({
      focus: {
        ...baseFocus,
        historicalConfirmation: {
          documentId: "doc-A",
          sourceRevisionId: "rev-2",
          observedHeadRevisionId: "rev-3",
          choice: "REFUSED",
        },
      },
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("REFUSED");
  });

  it("USE_SOURCE with matching identities → confirmed", () => {
    const r = resolveHistoricalConfirmation({
      focus: {
        ...baseFocus,
        historicalConfirmation: {
          documentId: "doc-A",
          sourceRevisionId: "rev-2",
          observedHeadRevisionId: "rev-3",
          choice: "USE_SOURCE",
        },
      },
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
    });
    expect(r.confirmed).toBe(true);
    expect(r.reason).toBe("CONFIRMED_STRUCTURED");
  });

  it("confirmation for document A is unusable for document B", () => {
    const r = resolveHistoricalConfirmation({
      focus: {
        ...baseFocus,
        historicalConfirmation: {
          documentId: "doc-A",
          sourceRevisionId: "rev-2",
          observedHeadRevisionId: "rev-3",
          choice: "USE_SOURCE",
        },
      },
      documentId: "doc-B",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("IDENTITY_MISMATCH");
  });

  it("head moved V3→V4 → HEAD_MOVED", () => {
    const r = resolveHistoricalConfirmation({
      focus: {
        ...baseFocus,
        confirmedHistoricalSource: true,
        historicalConfirmation: {
          documentId: "doc-A",
          sourceRevisionId: "rev-2",
          observedHeadRevisionId: "rev-3",
          choice: "USE_SOURCE",
        },
      },
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-4",
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("HEAD_MOVED");
  });

  it("missing confirmation → not confirmed (no regex path)", () => {
    const r = resolveHistoricalConfirmation({
      focus: baseFocus,
      documentId: "doc-A",
      sourceRevisionId: "rev-2",
      claimedObservedHeadRevisionId: "rev-3",
      actualHeadRevisionId: "rev-3",
    });
    expect(r.confirmed).toBe(false);
    expect(r.reason).toBe("MISSING_CONFIRMATION");
  });
});

describe("R4 formatPilotFacingProvenance", () => {
  it("sealed Nora binding → Production Nora (+ project)", () => {
    expect(
      formatPilotFacingProvenance(
        JSON.stringify({
          documentCommandBinding: true,
          action: "REVISE",
          correlationKey: "secret-key",
          commandId: "cmd_x",
        }),
        { projectName: "CampusNova" },
      ),
    ).toBe("Production Nora  ·  CampusNova");
  });

  it("empty / absent → Provenance non renseignée (no invention from title)", () => {
    expect(formatPilotFacingProvenance(null)).toBe("Provenance non renseignée");
    expect(formatPilotFacingProvenance("{}")).toBe("Provenance non renseignée");
  });

  it("pilot api-revise → Révision Pilote", () => {
    expect(
      formatPilotFacingProvenance(
        JSON.stringify({ sourceKind: "pilot", via: "api-revise" }),
      ),
    ).toBe("Révision Pilote");
  });
});

```

## 16.2 tests/integration/documents-historical-revise.pg.test.ts

```typescript
/**
 * DOC-TECH / DOC-UAT-09–10 — historical source revise (V2→V4) with observed head concurrency.
 */
import { describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  compareDocumentRevisions,
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { openOrCreatePreparation } from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("documents historical revise (V2→V4)", () => {
  it("V1→V2→V3 then historical V2→V4 with confirmation; V1–V3 intact", async () => {
    const pilotId = await seedPilot("DOC-hist");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(
      pilotId,
      prep.id,
      "Parcours",
      "# V1\n\nobjet initial\n",
    );
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# V2\n\nverification ressources\n",
      correlationKey: "hist-v2",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE") throw new Error("v2");

    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# V3\n\nconfirmation responsabilites\n",
      correlationKey: "hist-v3",
    });
    expect(v3.status).toBe("AVAILABLE");
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    const withoutConfirm = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: false,
      contentMarkdown: "# V4 from V2 without confirm\n",
      correlationKey: "hist-v4-noconfirm",
    });
    expect(withoutConfirm.status).toBe("FAILED");
    if (withoutConfirm.status === "FAILED") {
      expect(withoutConfirm.reason).toBe("HISTORICAL_CONFIRMATION_REQUIRED");
    }

    const v4 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: "# V4 from V2\n\nproposition Nora\n",
      correlationKey: "hist-v4",
    });
    expect(v4.status).toBe("AVAILABLE");
    if (v4.status !== "AVAILABLE") throw new Error("v4");
    expect(v4.revisionNumber).toBe(4);
    expect("baseRevisionId" in v4 ? v4.baseRevisionId : null).toBe(v2.revisionId);

    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(list.status).toBe("AVAILABLE");
    if (list.status !== "AVAILABLE") throw new Error("list");
    const byNum = Object.fromEntries(list.revisions.map((r) => [r.revisionNumber, r]));
    expect(byNum[1]?.contentMarkdown).toContain("objet initial");
    expect(byNum[2]?.contentMarkdown).toContain("verification");
    expect(byNum[3]?.contentMarkdown).toContain("confirmation");
    expect(byNum[4]?.contentMarkdown).toContain("proposition Nora");
    expect(byNum[4]?.baseRevisionId).toBe(v2.revisionId);
  });

  it("concurrent head after historical confirmation → CONFLICT, next is V5", async () => {
    const pilotId = await seedPilot("DOC-hist-race");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Race", "# A\n");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# B\n",
      correlationKey: "race-v2",
    });
    if (v2.status !== "AVAILABLE") throw new Error("v2");
    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# C\n",
      correlationKey: "race-v3",
    });
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    // Concurrent V4 from head while another actor still holds observedHead=V3 + source=V2.
    const concurrentV4 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v3.revisionId,
      contentMarkdown: "# D concurrent\n",
      correlationKey: "race-v4-head",
    });
    expect(concurrentV4.status).toBe("AVAILABLE");
    if (concurrentV4.status !== "AVAILABLE") throw new Error("v4 concurrent");

    const staleHistorical = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId, // stale — actual head is V4
      confirmedHistoricalSource: true,
      contentMarkdown: "# from V2 stale head\n",
      correlationKey: "race-v4-hist-stale",
    });
    expect(staleHistorical.status).toBe("CONFLICT");
    if (staleHistorical.status === "CONFLICT") {
      expect(staleHistorical.reason).toBe("BASE_STALE");
      expect(
        "actualLatestRevisionId" in staleHistorical
          ? staleHistorical.actualLatestRevisionId
          : null,
      ).toBe(concurrentV4.revisionId);
    }

    const v5 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: concurrentV4.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: "# V5 from V2 after requalify\n",
      correlationKey: "race-v5",
    });
    expect(v5.status).toBe("AVAILABLE");
    if (v5.status !== "AVAILABLE") throw new Error("v5");
    expect(v5.revisionNumber).toBe(5);
  });

  it("legacy baseRevisionId-only still requires head match (BASE_STALE)", async () => {
    const pilotId = await seedPilot("DOC-legacy");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Legacy", "# L1\n");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# L2\n",
      correlationKey: "leg-v2",
    });
    if (v2.status !== "AVAILABLE") throw new Error("v2");

    const stale = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# stale\n",
      correlationKey: "leg-stale",
    });
    expect(stale.status).toBe("CONFLICT");
    if (stale.status === "CONFLICT") expect(stale.reason).toBe("BASE_STALE");
  });

  it("idempotent replay of historical V4 correlation", async () => {
    const pilotId = await seedPilot("DOC-hist-idem");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Idem", "# I1\n");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# I2\n",
      correlationKey: "idem-v2",
    });
    if (v2.status !== "AVAILABLE") throw new Error("v2");
    const v3 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# I3\n",
      correlationKey: "idem-v3",
    });
    if (v3.status !== "AVAILABLE") throw new Error("v3");

    const payload = "# I4 historical\n";
    const first = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: payload,
      correlationKey: "idem-v4",
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE") throw new Error("first");

    const replay = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      sourceRevisionId: v2.revisionId,
      observedHeadRevisionId: v3.revisionId,
      confirmedHistoricalSource: true,
      contentMarkdown: payload,
      correlationKey: "idem-v4",
    });
    expect(replay.status).toBe("AVAILABLE");
    if (replay.status !== "AVAILABLE") throw new Error("replay");
    expect(replay.revisionId).toBe(first.revisionId);
    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);

    const cmp = await compareDocumentRevisions(
      pilotId,
      prep.id,
      v1.documentId,
      v2.revisionId,
      first.revisionId,
    );
    expect(["AVAILABLE", "DEGRADED"]).toContain(cmp.status);
  });
});

```

## 16.3 tests/e2e/documents-bibliotheque-08.spec.ts

```typescript
import { test, expect } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  openSasSecondaryTool,
  backToSasConversation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 06 — Documents Bibliothèque (page 08) browser smoke on E2E lane.
 * Covers DOC-UAT-01/02/04/05/07 selection, read-only, history, compare shell.
 */
test("Documents 08: select≠open, read-only, history, compare", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await openNewPreparation(page);
  await sendPrepMessage(page, "Bonjour Nora documents bibliotheque");
  await expect(page.getByText("Nora", { exact: false }).first()).toBeVisible({ timeout: 30000 });

  await openSasSecondaryTool(page, "Documents");
  await page.getByTestId("doc-start-create").click();
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit initial.\n\n## Responsabilites\nCentres.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });
  await backToSasConversation(page);

  await constituteAndCreateProject(page, {
    name: `Docs08 ${Date.now()}`,
    summary: "bibliotheque",
  });
  await page.waitForURL("**/projects/**");
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  await page.getByTestId("nav-documents").click();
  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });

  const firstDoc = page.locator('[data-testid^="doc-open-"]').first();
  await expect(firstDoc).toBeVisible({ timeout: 15000 });
  const documentId = (await firstDoc.getAttribute("data-testid"))?.replace("doc-open-", "");
  expect(documentId).toBeTruthy();

  // DOC-UAT-01 — select without opening
  await firstDoc.click();
  await expect(page.getByTestId("document-selection-aside")).toBeVisible();
  await expect(page).not.toHaveURL(/documentId=/);
  await expect(page.getByTestId("doc-action-open")).toBeVisible();

  // DOC-UAT-02/04 — open read-only, no textarea (Figma 08.02: no alert banner in body)
  await page.getByTestId("doc-action-open").click();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
  await expect(page.getByTestId("document-read")).toBeVisible();
  await expect(page.getByTestId("document-read-aside")).toContainText("DOCUMENT / ACTIONS");
  await expect(page.getByTestId("doc-action-request-revision")).toContainText(
    "Demander une révision à Nora",
  );
  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

  // DOC-UAT-05/07 — history + comparator collapsed then expand
  await page.getByTestId("doc-action-history").click();
  await expect(page.getByTestId("document-history-surface")).toBeVisible();
  await expect(page.getByTestId("document-compare-controls")).toHaveCount(0);
  await page.getByTestId("doc-action-compare-toggle").click();
  await expect(page.getByTestId("document-compare-controls")).toBeVisible();
});

```

---

# §17 — Diffs complets (vs HEAD 6516c7b5)

## 17.A P0 serveur + fixtures

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
index 3658f0ca..00399b42 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
@@ -57,14 +57,18 @@ export async function POST(
     const body = (await req.json()) as {
       action?: "revise";
       baseRevisionId?: string;
+      sourceRevisionId?: string;
+      observedHeadRevisionId?: string;
+      confirmedHistoricalSource?: boolean;
       contentMarkdown?: string;
       correlationKey?: string;
       scope?: string;
       sectionHint?: string;
     };
+    const sourceRevisionId = body.sourceRevisionId ?? body.baseRevisionId;
     if (
       body.action !== "revise" ||
-      !body.baseRevisionId ||
+      !sourceRevisionId ||
       !body.contentMarkdown ||
       !body.correlationKey
     ) {
@@ -72,12 +76,25 @@ export async function POST(
     }
     const result = await reviseDocument(session.pilotId, preparationId, {
       documentId,
-      baseRevisionId: body.baseRevisionId,
+      baseRevisionId: sourceRevisionId,
+      sourceRevisionId: body.sourceRevisionId,
+      observedHeadRevisionId: body.observedHeadRevisionId,
+      confirmedHistoricalSource: body.confirmedHistoricalSource,
       contentMarkdown: body.contentMarkdown,
       correlationKey: body.correlationKey,
       scope: body.scope,
       sectionHint: body.sectionHint,
-      provenance: { sourceKind: "pilot", via: "api-revise" },
+      provenance: {
+        sourceKind: "pilot",
+        via: "api-revise",
+        ...(body.sourceRevisionId
+          ? {
+              sourceRevisionId: body.sourceRevisionId,
+              observedHeadRevisionId: body.observedHeadRevisionId ?? null,
+              confirmedHistoricalSource: body.confirmedHistoricalSource === true,
+            }
+          : {}),
+      },
     });
     const status =
       result.status === "CONFLICT" ? 409 : result.status === "FAILED" ? 400 : 200;
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
index f7e845ec..5be4ff8f 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
@@ -34,6 +34,23 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       correlationKey?: string;
       clientTurnKey?: string;
       unresolvedPendingClientTurnKey?: string;
+      documentFocus?: {
+        documentId: string;
+        sourceRevisionId: string;
+        sourceRevisionNumber?: number;
+        /** Client body ignored by server drafting authority (R1). */
+        sourceContentMarkdown?: string;
+        observedHeadRevisionId: string;
+        observedHeadRevisionNumber?: number;
+        confirmedHistoricalSource?: boolean;
+        historicalConfirmation?: {
+          documentId: string;
+          sourceRevisionId: string;
+          observedHeadRevisionId: string;
+          choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
+        };
+        conserveProposal?: boolean;
+      } | null;
     };
     if (!body.content?.trim()) {
       return NextResponse.json(
@@ -49,6 +66,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
         correlationKey: body.correlationKey,
         clientTurnKey: body.clientTurnKey ?? body.correlationKey,
         unresolvedPendingClientTurnKey: body.unresolvedPendingClientTurnKey,
+        documentFocus: body.documentFocus ?? null,
         requestId,
       },
     );
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 3ca58197..0a1eb864 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -314,15 +314,154 @@ export type ResolvedReviseTarget =
     }
   | { ok: false; reason: "NOT_FOUND" | "AMBIGUOUS" | "NO_AVAILABLE_REVISION"; candidates?: string[] };

+/**
+ * Explicit historical-base confirmation bound to concrete identities.
+ * Lexical regex alone must never authorize a historical revise (R2).
+ */
+export type HistoricalSourceConfirmation = {
+  documentId: string;
+  sourceRevisionId: string;
+  observedHeadRevisionId: string;
+  choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
+};
+
+/** Optional Documents→Travail focus: exact drafting source may be historical. */
+export type DocumentReviseFocus = {
+  documentId: string;
+  sourceRevisionId: string;
+  sourceRevisionNumber?: number;
+  /**
+   * Client-supplied body is NEVER authoritative (R1). Kept optional for transport
+   * compatibility only — resolveReviseTarget and the conversation owner path ignore it.
+   */
+  sourceContentMarkdown?: string;
+  observedHeadRevisionId: string;
+  observedHeadRevisionNumber?: number;
+  /** Legacy UX bool — accepted only when identities still match (see resolveHistoricalConfirmation). */
+  confirmedHistoricalSource?: boolean;
+  /** Preferred R2 confirmation: explicit choice bound to document/source/head IDs. */
+  historicalConfirmation?: HistoricalSourceConfirmation;
+  /**
+   * R3 — when Documents focus is active, D4 REVISE mutate requires explicit conserve.
+   * Proposal turns leave this false/undefined; conservation sets true (or uses PRIOR_ASSISTANT).
+   */
+  conserveProposal?: boolean;
+};
+
+/**
+ * R2 — resolve whether a historical source is explicitly confirmed.
+ * Never uses free-text lexical matching. Negation / REFUSED / identity mismatch → not confirmed.
+ */
+export function resolveHistoricalConfirmation(input: {
+  focus: DocumentReviseFocus | null | undefined;
+  documentId: string;
+  sourceRevisionId: string;
+  /** Head claimed at confirmation / focus time. */
+  claimedObservedHeadRevisionId: string;
+  /** Actual AVAILABLE head from D4 at evaluation time. */
+  actualHeadRevisionId: string;
+}): {
+  confirmed: boolean;
+  reason:
+    | "NOT_HISTORICAL"
+    | "CONFIRMED_UX"
+    | "CONFIRMED_STRUCTURED"
+    | "REFUSED"
+    | "USE_HEAD"
+    | "MISSING_CONFIRMATION"
+    | "IDENTITY_MISMATCH"
+    | "HEAD_MOVED";
+} {
+  const sourceIsHistorical = input.sourceRevisionId !== input.actualHeadRevisionId;
+  if (!sourceIsHistorical) {
+    return { confirmed: false, reason: "NOT_HISTORICAL" };
+  }
+
+  const hc = input.focus?.historicalConfirmation;
+  if (hc) {
+    if (
+      hc.documentId !== input.documentId ||
+      hc.sourceRevisionId !== input.sourceRevisionId ||
+      hc.observedHeadRevisionId !== input.claimedObservedHeadRevisionId
+    ) {
+      return { confirmed: false, reason: "IDENTITY_MISMATCH" };
+    }
+    if (hc.observedHeadRevisionId !== input.actualHeadRevisionId) {
+      return { confirmed: false, reason: "HEAD_MOVED" };
+    }
+    if (hc.choice === "REFUSED") {
+      return { confirmed: false, reason: "REFUSED" };
+    }
+    if (hc.choice === "USE_HEAD") {
+      return { confirmed: false, reason: "USE_HEAD" };
+    }
+    if (hc.choice === "USE_SOURCE") {
+      return { confirmed: true, reason: "CONFIRMED_STRUCTURED" };
+    }
+    return { confirmed: false, reason: "MISSING_CONFIRMATION" };
+  }
+
+  // UX bool path: only when focus identities still match claimed + actual head.
+  if (input.focus?.confirmedHistoricalSource === true) {
+    if (
+      !input.focus.documentId ||
+      input.focus.documentId !== input.documentId ||
+      input.focus.sourceRevisionId !== input.sourceRevisionId ||
+      input.focus.observedHeadRevisionId !== input.claimedObservedHeadRevisionId
+    ) {
+      return { confirmed: false, reason: "IDENTITY_MISMATCH" };
+    }
+    if (input.focus.observedHeadRevisionId !== input.actualHeadRevisionId) {
+      return { confirmed: false, reason: "HEAD_MOVED" };
+    }
+    return { confirmed: true, reason: "CONFIRMED_UX" };
+  }
+
+  return { confirmed: false, reason: "MISSING_CONFIRMATION" };
+}
+
 export function resolveReviseTarget(
   docs: DocumentListItem[],
   hint: string | null,
+  focus?: DocumentReviseFocus | null,
 ): ResolvedReviseTarget {
   const available = docs.filter((d) => d.latestRevision?.status === "AVAILABLE");
   if (available.length === 0) {
     return { ok: false, reason: "NO_AVAILABLE_REVISION" };
   }

+  if (focus?.documentId && focus.sourceRevisionId && focus.observedHeadRevisionId) {
+    const d = available.find((x) => x.document.id === focus.documentId);
+    if (!d?.latestRevision) {
+      return { ok: false, reason: "NOT_FOUND" };
+    }
+    if (d.latestRevision.id !== focus.observedHeadRevisionId) {
+      // Head moved since focus was taken — caller must requalify; still resolve
+      // to current head as observed for CONFLICT at D4 commit.
+    }
+    // R1: never use client sourceContentMarkdown. Head body may come from the
+    // authorized list payload (D4-backed); any non-head source forces empty
+    // baseContent so the owner path reloads the exact revision via getDocumentRevision.
+    if (focus.sourceRevisionId === d.latestRevision.id) {
+      return {
+        ok: true,
+        documentId: d.document.id,
+        title: d.document.title,
+        baseRevisionId: focus.sourceRevisionId,
+        baseRevisionNumber: focus.sourceRevisionNumber ?? d.latestRevision.revisionNumber,
+        baseContent: d.latestRevision.contentMarkdown,
+      };
+    }
+    return {
+      ok: true,
+      documentId: d.document.id,
+      title: d.document.title,
+      baseRevisionId: focus.sourceRevisionId,
+      baseRevisionNumber: focus.sourceRevisionNumber ?? d.latestRevision.revisionNumber,
+      baseContent: "",
+    };
+  }
+
   if (hint) {
     const byId = available.filter((d) => d.document.id === hint);
     if (byId.length === 1) {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
index ae7a5842..30d8aa10 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
@@ -44,7 +44,11 @@ export type DocumentCommandBinding = {
   source: DocumentCommandSource;
   preparationId: string;
   documentId: string | null;
+  /** Drafting source (legacy field; equals sourceRevisionId when historical protocol used). */
   baseRevisionId: string | null;
+  sourceRevisionId?: string | null;
+  observedHeadRevisionId?: string | null;
+  confirmedHistoricalSource?: boolean;
   title: string;
   contentMarkdown: string;
   contentSha256: string;
@@ -71,10 +75,17 @@ export function payloadSha256(parts: {
   preparationId: string;
   documentId: string | null;
   baseRevisionId: string | null;
+  sourceRevisionId?: string | null;
+  observedHeadRevisionId?: string | null;
+  confirmedHistoricalSource?: boolean;
   sectionHint?: string | null;
   title: string;
   contentSha256: string;
 }): string {
+  const historical =
+    parts.sourceRevisionId != null ||
+    parts.observedHeadRevisionId != null ||
+    parts.confirmedHistoricalSource === true;
   const canonical = JSON.stringify({
     schemaVersion: DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION,
     action: parts.action,
@@ -82,6 +93,13 @@ export function payloadSha256(parts: {
     preparationId: parts.preparationId,
     documentId: parts.documentId,
     baseRevisionId: parts.baseRevisionId,
+    ...(historical
+      ? {
+          sourceRevisionId: parts.sourceRevisionId ?? parts.baseRevisionId,
+          observedHeadRevisionId: parts.observedHeadRevisionId ?? null,
+          confirmedHistoricalSource: parts.confirmedHistoricalSource === true,
+        }
+      : {}),
     sectionHint: parts.sectionHint ?? null,
     title: parts.title,
     contentSha256: parts.contentSha256,
@@ -503,6 +521,9 @@ export function admitDocumentCommand(input: {
   preparationId: string;
   documentId?: string | null;
   baseRevisionId?: string | null;
+  sourceRevisionId?: string | null;
+  observedHeadRevisionId?: string | null;
+  confirmedHistoricalSource?: boolean;
   sectionHint?: string | null;
   source: DocumentCommandSource;
   title: string;
@@ -520,16 +541,28 @@ export function admitDocumentCommand(input: {
   if (!input.userMessageId || !input.qualifiedIntentId) {
     return { ok: false, verdict: "NOT_EXECUTED", reason: "MISSING_IDENTITIES" };
   }
-  if (input.action === "REVISE" && (!input.documentId || !input.baseRevisionId)) {
+  const sourceRevisionId = input.sourceRevisionId ?? input.baseRevisionId ?? null;
+  if (input.action === "REVISE" && (!input.documentId || !sourceRevisionId)) {
     return { ok: false, verdict: "NOT_EXECUTED", reason: "REVISE_TARGET_INCOMPLETE" };
   }
   const { title, contentMarkdown, contentSha256: cSha } = canonical.proposal;
+  const useHistorical =
+    input.sourceRevisionId != null ||
+    input.observedHeadRevisionId != null ||
+    input.confirmedHistoricalSource === true;
   const pSha = payloadSha256({
     action: input.action,
     source: input.source,
     preparationId: input.preparationId,
     documentId: input.documentId ?? null,
-    baseRevisionId: input.baseRevisionId ?? null,
+    baseRevisionId: sourceRevisionId,
+    ...(useHistorical
+      ? {
+          sourceRevisionId,
+          observedHeadRevisionId: input.observedHeadRevisionId ?? null,
+          confirmedHistoricalSource: input.confirmedHistoricalSource === true,
+        }
+      : {}),
     sectionHint: input.sectionHint,
     title,
     contentSha256: cSha,
@@ -557,7 +590,14 @@ export function admitDocumentCommand(input: {
       source: input.source,
       preparationId: input.preparationId,
       documentId: input.documentId ?? null,
-      baseRevisionId: input.baseRevisionId ?? null,
+      baseRevisionId: sourceRevisionId,
+      ...(useHistorical
+        ? {
+            sourceRevisionId,
+            observedHeadRevisionId: input.observedHeadRevisionId ?? null,
+            confirmedHistoricalSource: input.confirmedHistoricalSource === true,
+          }
+        : {}),
       title,
       contentMarkdown,
       contentSha256: cSha,
@@ -607,9 +647,19 @@ export async function sealAndApplyDocumentCommand(input: {
     return { sealApplied: true, effect };
   }

+  const sourceRevisionId =
+    input.binding.sourceRevisionId ?? input.binding.baseRevisionId!;
+  const observedHeadRevisionId = input.binding.observedHeadRevisionId ?? undefined;
+  const historical =
+    Boolean(observedHeadRevisionId) &&
+    observedHeadRevisionId !== sourceRevisionId;
   const effect = await reviseDocument(input.pilotId, input.binding.preparationId, {
     documentId: input.binding.documentId!,
-    baseRevisionId: input.binding.baseRevisionId!,
+    baseRevisionId: sourceRevisionId,
+    sourceRevisionId,
+    observedHeadRevisionId,
+    confirmedHistoricalSource:
+      input.binding.confirmedHistoricalSource === true || undefined,
     contentMarkdown: input.binding.contentMarkdown,
     correlationKey: input.binding.correlationKey,
     scope: input.binding.sectionHint ? "section" : "document",
@@ -617,7 +667,16 @@ export async function sealAndApplyDocumentCommand(input: {
     turnFence: input.fence,
     expectedTitle: input.binding.title,
     expectedContentSha256: input.binding.contentSha256,
-    provenance: buildSealedProvenance(sealedIdentityFromBinding(input.binding)),
+    provenance: {
+      ...buildSealedProvenance(sealedIdentityFromBinding(input.binding)),
+      ...(historical
+        ? {
+            sourceRevisionId,
+            observedHeadRevisionId,
+            confirmedHistoricalSource: input.binding.confirmedHistoricalSource === true,
+          }
+        : {}),
+    },
   });
   return { sealApplied: true, effect };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 68cf1f5a..ef2e39aa 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -120,6 +120,9 @@ function effect(
     replyDraft: reply,
     preparationAssessment: extras?.preparationAssessment,
     preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
+    continueChoices: extras?.continueChoices,
+    resourceReferences: extras?.resourceReferences,
+    visualComposition: extras?.visualComposition,
   };
 }

@@ -1862,6 +1865,69 @@ register(
 );


+/** Ensemble 06 Documents — revise proposal then explicit conserve (FAKE fixture lane). */
+register(
+  "Je souhaite clarifier les responsabilités entre les trois centres.",
+  {
+    ...effect(
+      "Réviser document — proposition",
+      "Je peux proposer une nouvelle rédaction de la section « Responsabilités ». Le document actuel ne change pas tant que nous n’avons pas conservé la révision.\n\n```sfia-document\n# Parcours de réservation et responsabilités\n\n## Responsabilités\n\nChaque centre valide ses disponibilités ; le coordinateur consolide les ressources communes.\n```\n",
+      [
+        {
+          capabilityId: "d4.revise_document",
+          mode: "REQUEST_EFFECT",
+          summary: "Réviser les responsabilités",
+          parameters: { sectionHint: "Responsabilités" },
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+      {
+        continueChoices: [
+          {
+            id: "conserve",
+            label: "Conserver comme nouvelle version",
+            transmitText:
+              "Conserver comme nouvelle version la proposition documentaire préparée.",
+          },
+        ],
+      },
+    ),
+    documentProposal: {
+      title: "Parcours de réservation et responsabilités",
+      contentMarkdown:
+        "# Parcours de réservation et responsabilités\n\n## Responsabilités\n\nChaque centre valide ses disponibilités ; le coordinateur consolide les ressources communes.\n",
+    },
+  },
+);
+
+register(
+  "Conserver comme nouvelle version la proposition documentaire préparée.",
+  {
+    ...effect(
+      "Conserver proposition documentaire",
+      "Proposition conservée comme nouvelle version documentaire — après contrôle D4 de la tête observée.",
+      [
+        {
+          capabilityId: "d4.revise_document",
+          mode: "REQUEST_EFFECT",
+          summary: "Conserver la proposition comme nouvelle version",
+          parameters: {},
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+    ),
+    documentProposal: {
+      title: "Parcours de réservation et responsabilités",
+      contentMarkdown:
+        "# Parcours de réservation et responsabilités\n\n## Responsabilités\n\nChaque centre valide ses disponibilités ; le coordinateur consolide les ressources communes ; le demandeur reçoit une confirmation tracée.\n",
+    },
+  },
+);
+
 /** Short TEST_BOUNDARY keys for e2e (exact match, same envelopes as the natural utterances). */
 for (const [short, long] of [
   ["E05_S2_DIAGNOSTIC", E05_S2_DIAGNOSTIC],
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 4cfc23d6..f15be446 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -26,7 +26,7 @@ import {
   reconstituteConfirmedD4Effects,
   selectRelevantKnowledgeContext,
 } from "@/domains/knowledge/service";
-import { listDocuments } from "@/domains/document/service";
+import { getDocumentRevision, listDocuments } from "@/domains/document/service";
 import {
   admitDocumentCommand,
   canonicalizeDocumentProposal,
@@ -62,6 +62,7 @@ import {
   applyTargetedSectionRevision,
   assertSectionScope,
   extractContractualDocumentProposal,
+  resolveHistoricalConfirmation,
   resolveReviseTarget,
   stripContractualDocumentFences,
   type DocumentEffectSummary,
@@ -758,6 +759,25 @@ export async function postUserMessageAndNora(
     requestId?: string;
     /** Client UX hint only — server DB siblings are authoritative for S05. */
     unresolvedPendingClientTurnKey?: string;
+    /** Documents→Travail focus: exact source revision (may be historical). */
+    documentFocus?: {
+      documentId: string;
+      sourceRevisionId: string;
+      sourceRevisionNumber?: number;
+      /** Ignored for drafting authority (R1) — D4 getDocumentRevision is sole source. */
+      sourceContentMarkdown?: string;
+      observedHeadRevisionId: string;
+      observedHeadRevisionNumber?: number;
+      confirmedHistoricalSource?: boolean;
+      historicalConfirmation?: {
+        documentId: string;
+        sourceRevisionId: string;
+        observedHeadRevisionId: string;
+        choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
+      };
+      /** R3 — explicit conservation of a prepared proposal under Documents focus. */
+      conserveProposal?: boolean;
+    } | null;
   },
 ): Promise<TurnResult> {
   const requestId = opts?.requestId ?? newRequestId();
@@ -1717,7 +1737,36 @@ export async function postUserMessageAndNora(
       } else if (documentAct.kind === "REVISE" && !ownershipLostBeforeD4) {
         try {
           const docs = await listDocuments(pilotId, preparationId);
-          const target = resolveReviseTarget(docs, documentAct.documentHint);
+          const focus = opts?.documentFocus ?? null;
+          let target = resolveReviseTarget(docs, documentAct.documentHint, focus);
+          // R1: when Documents focus names a source revision, ALWAYS reload body from D4.
+          // Client sourceContentMarkdown is never drafting authority — including when
+          // resolveReviseTarget already filled head content from the list payload.
+          if (target.ok && focus?.sourceRevisionId) {
+            const loaded = await getDocumentRevision(
+              pilotId,
+              preparationId,
+              target.documentId,
+              focus.sourceRevisionId,
+            );
+            if (
+              loaded.status === "AVAILABLE" &&
+              loaded.revision &&
+              loaded.revision.id === focus.sourceRevisionId &&
+              typeof loaded.revision.contentMarkdown === "string" &&
+              loaded.revision.contentMarkdown.length > 0
+            ) {
+              target = {
+                ...target,
+                baseRevisionId: loaded.revision.id,
+                baseRevisionNumber: loaded.revision.revisionNumber,
+                baseContent: loaded.revision.contentMarkdown,
+              };
+            } else {
+              // No silent fallback to latest / client markdown when exact source is unavailable.
+              target = { ok: false, reason: "NOT_FOUND" };
+            }
+          }
           if (!target.ok) {
             documentSave = {
               status: "FAILED",
@@ -1890,6 +1939,80 @@ export async function postUserMessageAndNora(
                     const clientSalt =
                       opts?.correlationKey?.trim() ||
                       `${target.documentId}:${target.baseRevisionId}`;
+                    const actualHeadId =
+                      docs.find((d) => d.document.id === target.documentId)?.latestRevision
+                        ?.id ?? target.baseRevisionId;
+                    const claimedObservedHeadId =
+                      focus?.observedHeadRevisionId ?? actualHeadId;
+                    const observedHeadId = claimedObservedHeadId;
+                    const sourceIsHistorical = target.baseRevisionId !== actualHeadId;
+                    // R2: no lexical confirmation — structured UX / historicalConfirmation only.
+                    const histConfirm = resolveHistoricalConfirmation({
+                      focus,
+                      documentId: target.documentId,
+                      sourceRevisionId: target.baseRevisionId,
+                      claimedObservedHeadRevisionId: claimedObservedHeadId,
+                      actualHeadRevisionId: actualHeadId,
+                    });
+                    const confirmedHistoricalSource =
+                      sourceIsHistorical && histConfirm.confirmed;
+                    if (
+                      sourceIsHistorical &&
+                      !confirmedHistoricalSource &&
+                      focus?.sourceRevisionId
+                    ) {
+                      documentSave = {
+                        status: "NOT_EXECUTED",
+                        reason:
+                          histConfirm.reason === "HEAD_MOVED"
+                            ? "HISTORICAL_HEAD_MOVED"
+                            : histConfirm.reason === "IDENTITY_MISMATCH"
+                              ? "HISTORICAL_CONFIRMATION_IDENTITY_MISMATCH"
+                              : histConfirm.reason === "REFUSED"
+                                ? "HISTORICAL_CONFIRMATION_REFUSED"
+                                : "HISTORICAL_CONFIRMATION_REQUIRED",
+                        documentId: target.documentId,
+                        baseRevisionId: target.baseRevisionId,
+                        act: "REVISE",
+                      };
+                      emitDocumentProposalObs({
+                        requestId,
+                        operationId: reserved.operationId,
+                        generationId: reply.generationId,
+                        act: "REVISE",
+                        extracted,
+                        refuseCode:
+                          typeof documentSave.reason === "string"
+                            ? documentSave.reason
+                            : "HISTORICAL_CONFIRMATION_REQUIRED",
+                        d4Attempted: false,
+                        d4Effect: null,
+                      });
+                    } else {
+                    // R3: under Documents focus, prepare proposal without D4 until explicit conserve.
+                    const conserveAuthorized =
+                      !focus ||
+                      focus.conserveProposal === true ||
+                      qualification.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE";
+                    if (!conserveAuthorized) {
+                      documentSave = {
+                        status: "NOT_EXECUTED",
+                        reason: "PROPOSAL_PENDING_CONSERVATION",
+                        documentId: target.documentId,
+                        baseRevisionId: target.baseRevisionId,
+                        act: "REVISE",
+                      };
+                      emitDocumentProposalObs({
+                        requestId,
+                        operationId: reserved.operationId,
+                        generationId: reply.generationId,
+                        act: "REVISE",
+                        extracted,
+                        refuseCode: "PROPOSAL_PENDING_CONSERVATION",
+                        d4Attempted: false,
+                        d4Effect: null,
+                      });
+                    } else {
                     const admitted = admitDocumentCommand({
                       commandId: reserved.commandId,
                       operationId: reserved.operationId,
@@ -1899,6 +2022,19 @@ export async function postUserMessageAndNora(
                       preparationId,
                       documentId: target.documentId,
                       baseRevisionId: target.baseRevisionId,
+                      ...(sourceIsHistorical
+                        ? {
+                            sourceRevisionId: target.baseRevisionId,
+                            observedHeadRevisionId: observedHeadId,
+                            confirmedHistoricalSource,
+                          }
+                        : focus?.sourceRevisionId
+                          ? {
+                              sourceRevisionId: target.baseRevisionId,
+                              observedHeadRevisionId: observedHeadId,
+                              confirmedHistoricalSource: false,
+                            }
+                          : {}),
                       sectionHint: documentAct.sectionHint,
                       source: reviseSource,
                       title: target.title,
@@ -1945,29 +2081,31 @@ export async function postUserMessageAndNora(
                         };
                       }
                     }
-                  }
-                  if (
-                    documentSave.status !== "AVAILABLE" &&
-                    documentSave.status !== "CONFLICT" &&
-                    !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
-                  ) {
-                    documentSaveUnknown =
-                      documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
-                  }
-                  emitDocumentProposalObs({
-                    requestId,
-                    operationId: reserved.operationId,
-                    generationId: reply.generationId,
-                    act: "REVISE",
-                    extracted,
-                    scopeVerdict: "OK",
-                    refuseCode:
-                      documentSave.status === "AVAILABLE" || documentSave.status === "CONFLICT"
-                        ? null
-                        : (documentSave.reason ?? null),
-                    d4Attempted: true,
-                    d4Effect: documentSave.status ?? null,
-                  });
+                    if (
+                      documentSave.status !== "AVAILABLE" &&
+                      documentSave.status !== "CONFLICT" &&
+                      !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
+                    ) {
+                      documentSaveUnknown =
+                        documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
+                    }
+                    emitDocumentProposalObs({
+                      requestId,
+                      operationId: reserved.operationId,
+                      generationId: reply.generationId,
+                      act: "REVISE",
+                      extracted,
+                      scopeVerdict: "OK",
+                      refuseCode:
+                        documentSave.status === "AVAILABLE" || documentSave.status === "CONFLICT"
+                          ? null
+                          : (documentSave.reason ?? null),
+                      d4Attempted: true,
+                      d4Effect: documentSave.status ?? null,
+                    });
+                    } // conserveAuthorized
+                    } // historical confirmation gate
+                  } // reviseIntents cardinality else
                 }
               }
             }
diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index 296527ce..cd673449 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -1,4 +1,4 @@
-import { and, asc, desc, eq, sql } from "drizzle-orm";
+import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { documentRevisions, documents } from "@/db/schema";
 import { newId } from "@/lib/ids";
@@ -822,15 +822,28 @@ export async function savePreparationDocument(
 }

 /**
- * Targeted non-destructive revision with atomic base-revision control.
- * Document row FOR UPDATE serializes concurrent successors of the same base.
+ * Targeted non-destructive revision with atomic concurrency control.
+ * Document row FOR UPDATE serializes successors.
+ *
+ * Protocol:
+ * - Legacy (baseRevisionId only): source must equal current AVAILABLE head (BASE_STALE otherwise).
+ * - Historical-capable: sourceRevisionId (content lineage) + observedHeadRevisionId (concurrency)
+ *   + confirmedHistoricalSource when source ≠ head. New revision number is always monotone
+ *   above the max assigned AVAILABLE head — never renumbered from the source.
  */
 export async function reviseDocument(
   pilotId: string,
   preparationId: string,
   input: {
     documentId: string;
-    baseRevisionId: string;
+    /** Legacy alias: when alone, means both source and observed head. */
+    baseRevisionId?: string;
+    /** Exact revision chosen as drafting source (may be historical). */
+    sourceRevisionId?: string;
+    /** Head AVAILABLE revision observed at confirmation time. */
+    observedHeadRevisionId?: string;
+    /** Required when sourceRevisionId ≠ actual head at commit. */
+    confirmedHistoricalSource?: boolean;
     contentMarkdown: string;
     correlationKey: string;
     scope?: string;
@@ -848,6 +861,24 @@ export async function reviseDocument(
     return { status: "FAILED" as const, reason: "content too large" };
   }

+  const sourceRevisionId = input.sourceRevisionId ?? input.baseRevisionId;
+  if (!sourceRevisionId) {
+    return { status: "FAILED" as const, reason: "SOURCE_REVISION_REQUIRED" };
+  }
+
+  const historicalProtocol =
+    Boolean(input.sourceRevisionId) ||
+    Boolean(input.observedHeadRevisionId) ||
+    input.confirmedHistoricalSource === true;
+
+  const observedHeadRevisionId = historicalProtocol
+    ? input.observedHeadRevisionId ?? null
+    : sourceRevisionId;
+
+  if (historicalProtocol && !observedHeadRevisionId) {
+    return { status: "FAILED" as const, reason: "OBSERVED_HEAD_REQUIRED" };
+  }
+
   // P0: sealed-invalid REVISE provenance refuses before mutation.
   if (input.provenance) {
     const early = resolveProvenanceIdentity(input.provenance);
@@ -916,21 +947,49 @@ export async function reviseDocument(
         });
       }

-      const base = (
+      const source = (
+        await tx
+          .select()
+          .from(documentRevisions)
+          .where(
+            and(
+              eq(documentRevisions.id, sourceRevisionId),
+              eq(documentRevisions.documentId, input.documentId),
+            ),
+          )
+          .limit(1)
+      )[0];
+      if (!source) return { status: "FAILED" as const, reason: "BASE_NOT_FOUND" };
+      if (source.status !== "AVAILABLE") {
+        return {
+          status: "FAILED" as const,
+          reason: "BASE_NOT_AVAILABLE",
+          baseStatus: source.status,
+        };
+      }
+
+      // Refuse silent commit while a non-terminal revision exists.
+      const nonTerminal = (
         await tx
           .select()
           .from(documentRevisions)
           .where(
             and(
-              eq(documentRevisions.id, input.baseRevisionId),
               eq(documentRevisions.documentId, input.documentId),
+              inArray(documentRevisions.status, ["SAVING", "UNKNOWN"]),
             ),
           )
           .limit(1)
       )[0];
-      if (!base) return { status: "FAILED" as const, reason: "BASE_NOT_FOUND" };
-      if (base.status !== "AVAILABLE") {
-        return { status: "FAILED" as const, reason: "BASE_NOT_AVAILABLE", baseStatus: base.status };
+      if (nonTerminal) {
+        return {
+          status: "FAILED" as const,
+          reason: "HEAD_UNCERTAIN",
+          documentId: input.documentId,
+          actualLatestRevisionId: nonTerminal.id,
+          actualLatestRevisionNumber: nonTerminal.revisionNumber,
+          baseStatus: nonTerminal.status,
+        };
       }

       const latest = (
@@ -947,14 +1006,38 @@ export async function reviseDocument(
           .limit(1)
       )[0];

-      if (!latest || latest.id !== input.baseRevisionId) {
+      if (!latest) {
         return {
           status: "CONFLICT" as const,
           reason: "BASE_STALE",
           documentId: input.documentId,
-          expectedBaseRevisionId: input.baseRevisionId,
-          actualLatestRevisionId: latest?.id ?? null,
-          actualLatestRevisionNumber: latest?.revisionNumber ?? null,
+          expectedBaseRevisionId: observedHeadRevisionId ?? sourceRevisionId,
+          actualLatestRevisionId: null,
+          actualLatestRevisionNumber: null,
+        };
+      }
+
+      const expectedHeadId = observedHeadRevisionId ?? sourceRevisionId;
+      if (latest.id !== expectedHeadId) {
+        return {
+          status: "CONFLICT" as const,
+          reason: "BASE_STALE",
+          documentId: input.documentId,
+          expectedBaseRevisionId: expectedHeadId,
+          actualLatestRevisionId: latest.id,
+          actualLatestRevisionNumber: latest.revisionNumber,
+        };
+      }
+
+      const sourceIsHistorical = source.id !== latest.id;
+      if (sourceIsHistorical && input.confirmedHistoricalSource !== true) {
+        return {
+          status: "FAILED" as const,
+          reason: "HISTORICAL_CONFIRMATION_REQUIRED",
+          documentId: input.documentId,
+          expectedBaseRevisionId: source.id,
+          actualLatestRevisionId: latest.id,
+          actualLatestRevisionNumber: latest.revisionNumber,
         };
       }

@@ -970,12 +1053,17 @@ export async function reviseDocument(
         revisionNumber,
         contentMarkdown: input.contentMarkdown,
         status: "SAVING",
-        baseRevisionId: input.baseRevisionId,
+        baseRevisionId: source.id,
         correlationKey: input.correlationKey,
         provenanceJson: JSON.stringify({
           ...(input.provenance ?? {}),
           sectionHint: input.sectionHint ?? null,
           contentFingerprint: expectedFp,
+          sourceRevisionId: source.id,
+          observedHeadRevisionId: latest.id,
+          confirmedHistoricalSource: sourceIsHistorical
+            ? true
+            : input.confirmedHistoricalSource === true,
         }),
         scope: input.scope ?? "section",
       });
@@ -989,11 +1077,14 @@ export async function reviseDocument(
         documentId: input.documentId,
         revisionId,
         revisionNumber,
-        baseRevisionId: input.baseRevisionId,
+        baseRevisionId: source.id,
+        sourceRevisionId: source.id,
+        observedHeadRevisionId: latest.id,
+        confirmedHistoricalSource: sourceIsHistorical,
       };
     });
   } catch (e) {
-    // Unique (documentId, revisionNumber) race → treat as conflict if base became stale
+    // Unique (documentId, revisionNumber) race → treat as conflict if head moved
     const msg = e instanceof Error ? e.message : "persist failed";
     if (/unique|duplicate/i.test(msg)) {
       const latest = await latestRevisionFor(input.documentId);
@@ -1001,7 +1092,7 @@ export async function reviseDocument(
         status: "CONFLICT" as const,
         reason: "BASE_STALE",
         documentId: input.documentId,
-        expectedBaseRevisionId: input.baseRevisionId,
+        expectedBaseRevisionId: observedHeadRevisionId ?? sourceRevisionId,
         actualLatestRevisionId: latest?.id ?? null,
         actualLatestRevisionNumber: latest?.revisionNumber ?? null,
       };

```

## 17.B UI + tokens + e2e g4

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index db39d5a5..f3202f54 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -13,10 +13,14 @@ import {
   type ProjectUnavailableKind,
 } from "@/components/figma/ProjectUnavailable";
 import {
-  DocumentHistory,
-  DocumentInspector,
-  DocumentLibrary,
+  DocumentBibliothequeSurface,
+  DocumentCompareSurface,
+  DocumentHistorySurface,
+  DocumentReadSurface,
+  formatPilotFacingProvenance,
+  type DocumentComparePayload,
   type RevisionRow,
+  revisionCurrencyLabel,
 } from "@/components/figma/DocumentSurfaces";
 import {
   conversationalClientCommandKey,
@@ -60,6 +64,7 @@ type Doc = {
     revisionNumber: number;
     status: string;
     contentMarkdown: string;
+    provenanceJson?: string;
   } | null;
 };
 type Knowledge = {
@@ -77,6 +82,93 @@ type Surface =
   | "git"
   | "publication";
 type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";
+type DocView = "library" | "read" | "history" | "compare";
+type HistoricalSourceConfirmation = {
+  documentId: string;
+  sourceRevisionId: string;
+  observedHeadRevisionId: string;
+  choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
+};
+
+type DocumentFocus = {
+  documentId: string;
+  sourceRevisionId: string;
+  sourceRevisionNumber?: number;
+  /** Display/cache only — server never trusts this as drafting authority (R1). */
+  sourceContentMarkdown?: string;
+  observedHeadRevisionId: string;
+  observedHeadRevisionNumber?: number;
+  confirmedHistoricalSource?: boolean;
+  historicalConfirmation?: HistoricalSourceConfirmation;
+  /** R3 — set only when Pilot explicitly asks to conserve a prepared proposal. */
+  conserveProposal?: boolean;
+};
+
+const DOCUMENT_FOCUS_STORAGE_PREFIX = "sfia.docFocus.v1:";
+
+function documentFocusStorageKey(projectId: string, preparationId: string): string {
+  return `${DOCUMENT_FOCUS_STORAGE_PREFIX}${projectId}:${preparationId}`;
+}
+
+function persistDocumentFocus(
+  projectId: string,
+  preparationId: string | null,
+  focus: DocumentFocus | null,
+): void {
+  if (typeof window === "undefined" || !preparationId) return;
+  const key = documentFocusStorageKey(projectId, preparationId);
+  try {
+    if (!focus) {
+      sessionStorage.removeItem(key);
+      return;
+    }
+    // Durable minimal focus — never persist canonical document body as authority.
+    const durable: DocumentFocus = {
+      documentId: focus.documentId,
+      sourceRevisionId: focus.sourceRevisionId,
+      sourceRevisionNumber: focus.sourceRevisionNumber,
+      observedHeadRevisionId: focus.observedHeadRevisionId,
+      observedHeadRevisionNumber: focus.observedHeadRevisionNumber,
+      confirmedHistoricalSource: focus.confirmedHistoricalSource === true,
+      historicalConfirmation: focus.historicalConfirmation,
+      conserveProposal: focus.conserveProposal === true,
+    };
+    sessionStorage.setItem(key, JSON.stringify(durable));
+  } catch {
+    /* sessionStorage may be unavailable */
+  }
+}
+
+function readPersistedDocumentFocus(
+  projectId: string,
+  preparationId: string,
+): DocumentFocus | null {
+  if (typeof window === "undefined") return null;
+  try {
+    const raw = sessionStorage.getItem(documentFocusStorageKey(projectId, preparationId));
+    if (!raw) return null;
+    const parsed = JSON.parse(raw) as DocumentFocus;
+    if (
+      !parsed?.documentId ||
+      !parsed?.sourceRevisionId ||
+      !parsed?.observedHeadRevisionId
+    ) {
+      return null;
+    }
+    return {
+      documentId: parsed.documentId,
+      sourceRevisionId: parsed.sourceRevisionId,
+      sourceRevisionNumber: parsed.sourceRevisionNumber,
+      observedHeadRevisionId: parsed.observedHeadRevisionId,
+      observedHeadRevisionNumber: parsed.observedHeadRevisionNumber,
+      confirmedHistoricalSource: parsed.confirmedHistoricalSource === true,
+      historicalConfirmation: parsed.historicalConfirmation,
+      conserveProposal: false, // never replay conserve across reload
+    };
+  } catch {
+    return null;
+  }
+}

 const SURFACES: Surface[] = [
   "travail",
@@ -161,7 +253,25 @@ export default function ProjectPage() {
   const [reviseMessage, setReviseMessage] = useState("");
   const [docMissing, setDocMissing] = useState("");
   const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
-  const [docDiffText, setDocDiffText] = useState("");
+  const [docHistoryLoading, setDocHistoryLoading] = useState(false);
+  const [docView, setDocView] = useState<DocView>("library");
+  const [selectedLibraryId, setSelectedLibraryId] = useState<string | null>(null);
+  const [readingRevisionId, setReadingRevisionId] = useState<string | null>(null);
+  const [readingRevisionNumber, setReadingRevisionNumber] = useState<number | null>(null);
+  const [readingMarkdown, setReadingMarkdown] = useState<string | null>(null);
+  const [readLoading, setReadLoading] = useState(false);
+  const [historySelectedRevisionId, setHistorySelectedRevisionId] = useState<string | null>(null);
+  const [comparatorExpanded, setComparatorExpanded] = useState(false);
+  const [compareLeftId, setCompareLeftId] = useState<string | null>(null);
+  const [compareRightId, setCompareRightId] = useState<string | null>(null);
+  const [comparePayload, setComparePayload] = useState<DocumentComparePayload | null>(null);
+  const [compareLeftMarkdown, setCompareLeftMarkdown] = useState<string | null>(null);
+  const [compareRightMarkdown, setCompareRightMarkdown] = useState<string | null>(null);
+  const [compareError, setCompareError] = useState<string | null>(null);
+  const [originOpen, setOriginOpen] = useState(false);
+  const [documentFocus, setDocumentFocus] = useState<DocumentFocus | null>(null);
+  /** R3 — proposal prepared under Documents focus, awaiting explicit conserve. */
+  const [pendingDocumentProposal, setPendingDocumentProposal] = useState(false);
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
   const draftVersionRef = useRef(0);
   const pilotIdRef = useRef<string | null>(null);
@@ -178,6 +288,9 @@ export default function ProjectPage() {
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
   const viewerOpenRef = useRef(false);
+  const docViewRef = useRef<DocView>("library");
+  const documentFocusRef = useRef<DocumentFocus | null>(null);
+  const readingLoadSeqRef = useRef(0);

   useEffect(() => {
     // Clear previous project identity immediately — no cross-project leak in the rail.
@@ -199,6 +312,12 @@ export default function ProjectPage() {
   useEffect(() => {
     reviseDraftRef.current = reviseDraft;
   }, [reviseDraft]);
+  useEffect(() => {
+    docViewRef.current = docView;
+  }, [docView]);
+  useEffect(() => {
+    documentFocusRef.current = documentFocus;
+  }, [documentFocus]);
   useEffect(() => {
     documentsRef.current = documents;
   }, [documents]);
@@ -640,6 +759,26 @@ export default function ProjectPage() {
     else router.push(href, { scroll: false });
   }

+  function resetDocumentBibliothequeState() {
+    setDocView("library");
+    setSelectedLibraryId(null);
+    setReadingRevisionId(null);
+    setReadingRevisionNumber(null);
+    setReadingMarkdown(null);
+    setReadLoading(false);
+    setHistorySelectedRevisionId(null);
+    setComparatorExpanded(false);
+    setCompareLeftId(null);
+    setCompareRightId(null);
+    setComparePayload(null);
+    setCompareLeftMarkdown(null);
+    setCompareRightMarkdown(null);
+    setCompareError(null);
+    setOriginOpen(false);
+    setDocHistory([]);
+    setDocHistoryLoading(false);
+  }
+
   function selectSurface(next: Surface) {
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
@@ -652,20 +791,36 @@ export default function ProjectPage() {
       setReviseMessage("");
       reviseCorrelationRef.current = null;
       reviseBaseIdRef.current = null;
+      resetDocumentBibliothequeState();
       syncSurfaceUrl(next, null, "push");
     } else {
-      syncSurfaceUrl(next, inspect?.document.id ?? null, "push");
+      resetDocumentBibliothequeState();
+      syncSurfaceUrl(next, null, "push");
     }
   }

+  function headRevisionFromRows(rows: RevisionRow[]): RevisionRow | null {
+    const available = rows.filter((r) => r.status === "AVAILABLE");
+    if (available.length === 0) return null;
+    return available.reduce((best, r) =>
+      r.revisionNumber > best.revisionNumber ? r : best,
+    );
+  }
+
+  function headRevisionNumberFromRows(rows: RevisionRow[]): number | null {
+    const head = headRevisionFromRows(rows);
+    return head?.revisionNumber ?? null;
+  }
+
   async function loadDocHistory(preparationIdValue: string, documentId: string) {
+    setDocHistoryLoading(true);
     try {
       const res = await fetch(
         `/api/preparations/${preparationIdValue}/documents/${documentId}`,
       );
       if (!res.ok) {
         setDocHistory([]);
-        return;
+        return [];
       }
       const j = await res.json();
       const rows = (j.revisions ?? []) as Array<{
@@ -673,34 +828,231 @@ export default function ProjectPage() {
         revisionNumber: number;
         status: string;
         createdAt?: string;
+        contentMarkdown?: string;
       }>;
-      setDocHistory(
-        rows.map((r) => ({
-          id: r.id,
-          revisionNumber: r.revisionNumber,
-          status: r.status,
-          createdAt: r.createdAt,
-        })),
-      );
+      const mapped = rows.map((r) => ({
+        id: r.id,
+        revisionNumber: r.revisionNumber,
+        status: r.status,
+        createdAt: r.createdAt,
+        excerpt:
+          typeof r.contentMarkdown === "string"
+            ? r.contentMarkdown.trim().slice(0, 140)
+            : undefined,
+      }));
+      setDocHistory(mapped);
+      return mapped;
     } catch {
       setDocHistory([]);
+      return [];
+    } finally {
+      setDocHistoryLoading(false);
     }
   }

-  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
+  async function fetchRevisionMarkdown(
+    preparationIdValue: string,
+    documentId: string,
+    revisionId: string,
+  ): Promise<{
+    id: string;
+    revisionNumber: number;
+    contentMarkdown: string | null;
+    status: string;
+  } | null> {
+    try {
+      const res = await fetch(
+        `/api/preparations/${preparationIdValue}/documents/${documentId}?revisionId=${encodeURIComponent(revisionId)}`,
+      );
+      if (!res.ok) return null;
+      const j = (await res.json()) as D4RevisionPayload;
+      const rev = j.revision;
+      if (!rev?.id) return null;
+      const markdown =
+        j.status === "AVAILABLE" && typeof rev.contentMarkdown === "string"
+          ? rev.contentMarkdown
+          : null;
+      return {
+        id: rev.id,
+        revisionNumber: rev.revisionNumber ?? 0,
+        contentMarkdown: markdown,
+        status: String(rev.status ?? j.status ?? ""),
+      };
+    } catch {
+      return null;
+    }
+  }
+
+  async function loadReadingRevision(
+    doc: Doc,
+    revisionId?: string | null,
+  ) {
+    const prepId = preparationIdRef.current;
+    const targetId = revisionId?.trim() || doc.latestRevision?.id || null;
+    if (!prepId || !targetId) {
+      setReadingMarkdown(null);
+      setReadingRevisionId(targetId);
+      setReadingRevisionNumber(doc.latestRevision?.revisionNumber ?? null);
+      setReadLoading(false);
+      return;
+    }
+    const seq = ++readingLoadSeqRef.current;
+    setReadLoading(true);
+    setReadingRevisionId(targetId);
+    const fetched = await fetchRevisionMarkdown(prepId, doc.document.id, targetId);
+    if (seq !== readingLoadSeqRef.current) return;
+    if (fetched) {
+      setReadingRevisionId(fetched.id);
+      setReadingRevisionNumber(fetched.revisionNumber);
+      setReadingMarkdown(fetched.contentMarkdown);
+    } else {
+      setReadingMarkdown(null);
+      setReadingRevisionNumber(doc.latestRevision?.revisionNumber ?? null);
+    }
+    setReadLoading(false);
+  }
+
+  function openDocumentReadView(
+    doc: Doc,
+    revisionId?: string | null,
+    mode: "push" | "replace" = "push",
+  ) {
     setInspect(doc);
     setDocMissing("");
-    setDocUi("READING");
-    setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
-    setReviseMessage("");
-    setDocDiffText("");
-    reviseCorrelationRef.current = null;
-    reviseBaseIdRef.current = doc.latestRevision?.id ?? null;
+    setSelectedLibraryId(doc.document.id);
+    setDocView("read");
+    setOriginOpen(false);
+    setComparatorExpanded(false);
+    setComparePayload(null);
+    setCompareError(null);
     setSurface("document");
     syncSurfaceUrl("document", doc.document.id, mode);
+    void loadReadingRevision(doc, revisionId);
     if (preparationId) void loadDocHistory(preparationId, doc.document.id);
   }

+  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
+    openDocumentReadView(doc, doc.latestRevision?.id ?? null, mode);
+  }
+
+  function applyDocumentFocus(focus: DocumentFocus | null) {
+    setDocumentFocus(focus);
+    documentFocusRef.current = focus;
+    persistDocumentFocus(params.projectId, preparationIdRef.current, focus);
+  }
+
+  async function resolveObservedHead(
+    preparationIdValue: string,
+    documentId: string,
+  ): Promise<RevisionRow | null> {
+    const rows = await loadDocHistory(preparationIdValue, documentId);
+    return headRevisionFromRows(rows);
+  }
+
+  async function resumeNoraWithDocumentRevision(input: {
+    doc: Doc;
+    sourceRevisionId: string;
+    sourceRevisionNumber?: number | null;
+    sourceContentMarkdown?: string | null;
+    confirmedHistoricalSource?: boolean;
+  }) {
+    const prepId = preparationIdRef.current;
+    if (!prepId) return;
+    const head = await resolveObservedHead(prepId, input.doc.document.id);
+    if (!head) {
+      setStatusHint("Aucune révision courante AVAILABLE — reprise Nora impossible.");
+      return;
+    }
+    const historical = input.sourceRevisionId !== head.id;
+    const confirmed =
+      historical && input.confirmedHistoricalSource === true
+        ? true
+        : false;
+    applyDocumentFocus({
+      documentId: input.doc.document.id,
+      sourceRevisionId: input.sourceRevisionId,
+      sourceRevisionNumber: input.sourceRevisionNumber ?? undefined,
+      // R1: optional local cache only — server reloads from D4.
+      sourceContentMarkdown: undefined,
+      observedHeadRevisionId: head.id,
+      observedHeadRevisionNumber: head.revisionNumber,
+      confirmedHistoricalSource: confirmed,
+      historicalConfirmation: confirmed
+        ? {
+            documentId: input.doc.document.id,
+            sourceRevisionId: input.sourceRevisionId,
+            observedHeadRevisionId: head.id,
+            choice: "USE_SOURCE",
+          }
+        : historical
+          ? undefined
+          : undefined,
+      conserveProposal: false,
+    });
+    const projectIdAtStart = params.projectId;
+    const seq = ++viewerRequestSeqRef.current;
+    viewerOpenRef.current = true;
+    selectSurface("travail");
+    setViewer({
+      kind: "document",
+      documentId: input.doc.document.id,
+      title: input.doc.document.title,
+      revisionId: input.sourceRevisionId,
+      revisionNumber: input.sourceRevisionNumber ?? null,
+      versionSource: historical ? "exact" : "current",
+      markdown: null,
+      available: false,
+      unavailableReason: "Chargement de la version source…",
+    });
+    setViewerEnlarged(false);
+    setStatusHint(
+      historical
+        ? "Reprise Nora depuis une version historique — la version courante reste distincte."
+        : "Fil durable · reprise Nora sur la version courante",
+    );
+    void fetchDocumentViewerViaD4({
+      documentId: input.doc.document.id,
+      titleHint: input.doc.document.title,
+      revisionId: historical ? input.sourceRevisionId : null,
+      versionSource: historical ? "exact" : "current",
+      seq,
+      projectIdAtStart,
+    });
+  }
+
+  async function loadDocumentComparison() {
+    if (!preparationId || !inspect || !compareLeftId || !compareRightId) return;
+    setCompareError(null);
+    setComparePayload(null);
+    setCompareLeftMarkdown(null);
+    setCompareRightMarkdown(null);
+    try {
+      const cmpRes = await fetch(
+        `/api/preparations/${preparationId}/documents/${inspect.document.id}?left=${encodeURIComponent(compareLeftId)}&right=${encodeURIComponent(compareRightId)}`,
+      );
+      const cmp = (await cmpRes.json()) as DocumentComparePayload & {
+        reason?: string;
+        status?: string;
+      };
+      if (!cmpRes.ok || cmp.status !== "AVAILABLE") {
+        setCompareError(
+          cmp.reason ?? `Comparaison indisponible (${String(cmp.status ?? cmpRes.status)})`,
+        );
+        return;
+      }
+      setComparePayload(cmp);
+      const [leftMd, rightMd] = await Promise.all([
+        fetchRevisionMarkdown(preparationId, inspect.document.id, compareLeftId),
+        fetchRevisionMarkdown(preparationId, inspect.document.id, compareRightId),
+      ]);
+      setCompareLeftMarkdown(leftMd?.contentMarkdown ?? null);
+      setCompareRightMarkdown(rightMd?.contentMarkdown ?? null);
+      setDocView("compare");
+    } catch {
+      setCompareError("Échec de chargement de la comparaison.");
+    }
+  }
+
   function applyUrlDocumentState(docs: Doc[], qSurface: Surface | null, qDocId: string | null) {
     if (qSurface) setSurface(qSurface);
     else setSurface("travail");
@@ -709,26 +1061,30 @@ export default function ProjectPage() {
       if (!qDocId) {
         setInspect(null);
         setDocMissing("");
+        setDocView("library");
+        setSelectedLibraryId(null);
         return;
       }
       const match = docs.find((d) => d.document.id === qDocId);
       if (match) {
         setInspect(match);
         setDocMissing("");
-        const ui = docUiRef.current;
-        const preserveDraft =
-          Boolean(reviseCorrelationRef.current) ||
-          ui === "EDITING" ||
-          ui === "SAVING" ||
-          ui === "CONFLICT" ||
-          ui === "UNKNOWN";
-        if (!preserveDraft) {
-          setDocUi("READING");
-          setReviseDraft(match.latestRevision?.contentMarkdown ?? "");
+        setSelectedLibraryId(match.document.id);
+        const view = docViewRef.current;
+        if (view === "library") {
+          setDocView("read");
+          void loadReadingRevision(match, match.latestRevision?.id ?? null);
+          if (preparationId) void loadDocHistory(preparationId, match.document.id);
         }
       } else {
         setInspect(null);
         setDocMissing("Document introuvable ou non autorisé pour ce Pilote.");
+        // Stay on read surface so the controlled missing state is visible (DOC-UAT / G4 B2).
+        setDocView("read");
+        setSelectedLibraryId(null);
+        setReadingMarkdown(null);
+        setReadingRevisionId(null);
+        setReadingRevisionNumber(null);
       }
       return;
     }
@@ -1069,13 +1425,28 @@ export default function ProjectPage() {
         setChoiceFrozen(true);
       }
       setKnowledge(j.knowledge ?? null);
-      setPreparationId(j.preparation?.id ?? null);
+      const nextPrepId = j.preparation?.id ?? null;
+      setPreparationId(nextPrepId);
+      preparationIdRef.current = nextPrepId;
       setProjectName(name);
-      setStatusHint(
-        j.preparation?.id
-          ? "Fil durable · préparation liée · réouverture par projet"
-          : "Fil durable · réouverture par projet",
-      );
+      setStatusHint(name ? `Projet · ${name}` : "Projet");
+      // Restore Documents→Travail focus after reload (identities only; revalidate via D4 on use).
+      if (nextPrepId) {
+        const restored = readPersistedDocumentFocus(params.projectId, nextPrepId);
+        if (restored) {
+          const stillOwned = (docs as Doc[]).some(
+            (d) => d.document.id === restored.documentId,
+          );
+          if (stillOwned) {
+            setDocumentFocus(restored);
+            documentFocusRef.current = restored;
+          } else {
+            applyDocumentFocus(null);
+          }
+        }
+      } else {
+        applyDocumentFocus(null);
+      }
       setUnavailableKind(null);
       setProjectSpaceInfo({
         projectId: params.projectId,
@@ -1452,6 +1823,9 @@ export default function ProjectPage() {
           content: text,
           clientTurnKey,
           unresolvedPendingClientTurnKey: pendingBefore?.clientTurnKey,
+          ...(documentFocusRef.current
+            ? { documentFocus: documentFocusRef.current }
+            : {}),
         }),
       });
       let j: Record<string, unknown> = {};
@@ -1476,6 +1850,33 @@ export default function ProjectPage() {
           (independent || effectBlocked || distinctFromUnresolved) && Boolean(pendingBefore);
         setMessages((j.messages as Msg[]) ?? []);
         setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
+        const save = j.documentSave as
+          | { status?: string; reason?: string; documentId?: string; revisionNumber?: number }
+          | null
+          | undefined;
+        if (save?.reason === "PROPOSAL_PENDING_CONSERVATION") {
+          setPendingDocumentProposal(true);
+          if (documentFocusRef.current) {
+            applyDocumentFocus({
+              ...documentFocusRef.current,
+              conserveProposal: false,
+            });
+          }
+          setStatusHint("Proposition non enregistrée — conservez pour créer une nouvelle version.");
+        } else if (save?.status === "AVAILABLE") {
+          setPendingDocumentProposal(false);
+          if (documentFocusRef.current) {
+            applyDocumentFocus({
+              ...documentFocusRef.current,
+              conserveProposal: false,
+              confirmedHistoricalSource: false,
+              historicalConfirmation: undefined,
+            });
+          }
+          if (typeof save.revisionNumber === "number") {
+            setStatusHint(`Version v${save.revisionNumber} conservée.`);
+          }
+        }
         const effect = j.pilotageEffect as PilotageEffectView | undefined;
         setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
         const tp = parseTurnProjection(j.turnProjection);
@@ -1591,6 +1992,69 @@ export default function ProjectPage() {

   const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";

+  const docListItems = documents.map((d) => ({
+    document: { ...d.document, projectId: params.projectId },
+    latestRevision: d.latestRevision ?? null,
+    originLabel: formatPilotFacingProvenance(d.latestRevision?.provenanceJson, {
+      projectName,
+    }),
+  }));
+
+  const headRevisionNumber =
+    headRevisionNumberFromRows(docHistory) ?? inspect?.latestRevision?.revisionNumber ?? null;
+
+  const readCurrency =
+    readingRevisionNumber != null
+      ? revisionCurrencyLabel(readingRevisionNumber, headRevisionNumber)
+      : "Courante";
+
+  const documentHero =
+    surface !== "document"
+      ? null
+      : docView === "library"
+        ? null
+        : docView === "read"
+          ? {
+              kicker: "DOCUMENTS / INSPECTION",
+              title: "Lecture du document",
+              sub: "Le document complet occupe la zone centrale ; ses actions restent accessibles sur la droite.",
+            }
+          : docView === "history"
+            ? {
+                kicker: "DOCUMENTS / HISTORIQUE",
+                title: "Historique des versions",
+                sub: "Sélectionnez une version dans la liste, puis consultez les actions disponibles sur la droite.",
+              }
+            : {
+                kicker: "DOCUMENTS / HISTORIQUE / COMPARAISON",
+                title: "Comparer deux versions",
+                sub: "Deux documents côte à côte, avec un résumé des différences en lecture seule.",
+              };
+
+  const travailDocumentFocusBanner = pendingDocumentProposal
+    ? ("proposal" as const)
+    : viewer?.kind === "document" && viewer.versionSource === "exact"
+      ? ("historical" as const)
+      : null;
+
+  const travailHero =
+    surface !== "travail"
+      ? null
+      : pendingDocumentProposal
+        ? {
+            kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
+            title: "Examiner une proposition de Nora",
+            sub: "Le Pilote peut préciser sa demande ou demander la conservation d’une nouvelle version documentaire.",
+          }
+        : documentFocus &&
+            documentFocus.sourceRevisionId !== documentFocus.observedHeadRevisionId
+          ? {
+              kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
+              title: "Réviser une version historique avec Nora",
+              sub: "Nora vérifie la version courante avant de proposer une révision fondée sur une ancienne version.",
+            }
+          : null;
+
   return (
     <ProjectChrome
       projectId={params.projectId}
@@ -1599,6 +2063,8 @@ export default function ProjectPage() {
       statusHint={statusHint}
       loadState={projectLoadState}
       travailLayout={travailLayout}
+      documentHero={documentHero}
+      travailHero={travailHero}
     >
       {surface === "projet" ? (
         <ProjectOverview
@@ -1613,6 +2079,111 @@ export default function ProjectPage() {
       ) : null}

       {surface === "travail" ? (
+        <>
+          {documentFocus &&
+          documentFocus.sourceRevisionId !== documentFocus.observedHeadRevisionId &&
+          !documentFocus.confirmedHistoricalSource ? (
+            <div
+              className="doc-historical-confirm"
+              data-testid="document-historical-confirm"
+              data-figma-frame="930:9"
+              role="group"
+              aria-label="Confirmation de base historique"
+            >
+              <p className="doc-historical-confirm-text">
+                La version {documentFocus.sourceRevisionNumber ?? "sélectionnée"} est historique.
+                La version courante est v{documentFocus.observedHeadRevisionNumber ?? "?"}. Confirmez
+                la base voulue avant conservation.
+              </p>
+              <div className="doc-historical-confirm-actions">
+                <button
+                  type="button"
+                  className="doc-action doc-action-primary"
+                  data-testid="doc-confirm-historical-source"
+                  onClick={() =>
+                    applyDocumentFocus({
+                      ...documentFocus,
+                      confirmedHistoricalSource: true,
+                      historicalConfirmation: {
+                        documentId: documentFocus.documentId,
+                        sourceRevisionId: documentFocus.sourceRevisionId,
+                        observedHeadRevisionId: documentFocus.observedHeadRevisionId,
+                        choice: "USE_SOURCE",
+                      },
+                      conserveProposal: false,
+                    })
+                  }
+                >
+                  Repartir de la v{documentFocus.sourceRevisionNumber ?? "?"}
+                </button>
+                <button
+                  type="button"
+                  className="doc-action doc-action-secondary"
+                  data-testid="doc-use-current-head"
+                  onClick={() => {
+                    const match = documents.find((d) => d.document.id === documentFocus.documentId);
+                    if (!match?.latestRevision) return;
+                    applyDocumentFocus({
+                      ...documentFocus,
+                      confirmedHistoricalSource: false,
+                      historicalConfirmation: {
+                        documentId: documentFocus.documentId,
+                        sourceRevisionId: documentFocus.sourceRevisionId,
+                        observedHeadRevisionId: documentFocus.observedHeadRevisionId,
+                        choice: "USE_HEAD",
+                      },
+                      conserveProposal: false,
+                    });
+                    void resumeNoraWithDocumentRevision({
+                      doc: match,
+                      sourceRevisionId: match.latestRevision.id,
+                      sourceRevisionNumber: match.latestRevision.revisionNumber,
+                      confirmedHistoricalSource: false,
+                    });
+                  }}
+                >
+                  Partir de la v{documentFocus.observedHeadRevisionNumber ?? "?"} courante
+                </button>
+              </div>
+            </div>
+          ) : null}
+          {pendingDocumentProposal && documentFocus ? (
+            <div
+              className="doc-proposal-conserve"
+              data-testid="document-proposal-conserve"
+              data-figma-frame="930:10"
+              role="group"
+              aria-label="Conservation de la proposition Nora"
+            >
+              <p className="doc-proposal-conserve-badge" data-testid="doc-proposal-unregistered">
+                PROPOSITION NON ENREGISTRÉE
+              </p>
+              <p className="doc-historical-confirm-text">
+                Examiner une proposition de Nora — aucune nouvelle version durable tant que vous
+                n&apos;avez pas demandé la conservation.
+              </p>
+              <div className="doc-historical-confirm-actions">
+                <button
+                  type="button"
+                  className="doc-action doc-action-primary"
+                  data-testid="doc-conserve-proposal"
+                  disabled={busy || !preparationId}
+                  onClick={() => {
+                    if (!documentFocusRef.current) return;
+                    applyDocumentFocus({
+                      ...documentFocusRef.current,
+                      conserveProposal: true,
+                    });
+                    void sendMessage(
+                      "Conserver comme nouvelle version la proposition documentaire préparée.",
+                    );
+                  }}
+                >
+                  Conserver comme nouvelle version
+                </button>
+              </div>
+            </div>
+          ) : null}
         <NoraConversation
           embeddedInStage
           messages={messages}
@@ -1649,6 +2220,7 @@ export default function ProjectPage() {
               <TravailViewer
                 resource={viewer}
                 enlarged={viewerEnlarged}
+                documentFocusBanner={travailDocumentFocusBanner}
                 onEnlarge={() => setViewerEnlarged(true)}
                 onReduce={() => setViewerEnlarged(false)}
                 onClose={closeViewer}
@@ -1744,6 +2316,7 @@ export default function ProjectPage() {
             )
           }
         />
+        </>
       ) : null}

       {surface === "pilotage" ? (
@@ -1786,124 +2359,135 @@ export default function ProjectPage() {
         </div>
       ) : null}

-      {surface === "document" ? (
-        <div className="fig-workspace-3" data-figma-frame="94:370">
-          <DocumentLibrary
-            documents={documents.map((d) => ({
-              document: { ...d.document, projectId: params.projectId },
-              latestRevision: d.latestRevision ?? null,
-            }))}
-            selectedId={inspect?.document.id ?? null}
-            onSelect={(d) => {
-              const match = documents.find((x) => x.document.id === d.document.id);
-              if (match) openDocumentReadOnly(match);
-            }}
-          />
-          <div className="space-y-3">
-            <DocumentInspector
-              frameId={docUi === "CONFLICT" ? "160:391" : "97:359"}
-              title={
-                docUi === "EDITING" ||
-                docUi === "SAVING" ||
-                docUi === "CONFLICT" ||
-                docUi === "UNKNOWN"
-                  ? "Révision"
-                  : "Inspection"
-              }
-              uiState={docUi}
-              missing={docMissing || null}
-              markdown={
-                docUi === "READING" || docUi === "FAILED"
-                  ? inspect?.latestRevision?.contentMarkdown ?? null
-                  : null
-              }
-              editing={
-                docUi === "EDITING" ||
-                docUi === "SAVING" ||
-                docUi === "CONFLICT" ||
-                docUi === "UNKNOWN" ||
-                docUi === "FAILED"
-              }
-              draft={reviseDraft}
-              onDraft={setReviseDraft}
-              busy={docUi === "SAVING"}
-              onStartRevise={
-                inspect?.latestRevision
-                  ? () => {
-                      setDocUi("EDITING");
-                      setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
-                      reviseCorrelationRef.current = null;
-                      reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
-                    }
-                  : undefined
-              }
-              onSaveRevise={() => void saveRevision()}
-              onConflictRebase={docUi === "CONFLICT" ? acceptConflictRebase : undefined}
-              onCancel={() => {
-                setDocUi("READING");
-                setReviseDraft(inspect?.latestRevision?.contentMarkdown ?? "");
-                setReviseMessage("");
-                reviseCorrelationRef.current = null;
-                reviseBaseIdRef.current = inspect?.latestRevision?.id ?? null;
-              }}
-              reviseMessage={reviseMessage}
-            >
-              {inspect?.latestRevision && docUi === "READING" ? (
-                <button
-                  type="button"
-                  className="btn secondary"
-                  onClick={() => {
-                    setInspect(null);
-                    setDocUi("READING");
-                    selectSurface("travail");
-                  }}
-                >
-                  Retour au fil
-                </button>
-              ) : null}
-            </DocumentInspector>
-            <DocumentHistory
-              revisions={docHistory}
-              activeRevisionId={inspect?.latestRevision?.id}
-              onCompareLatest={
-                preparationId && inspect
-                  ? () => {
-                      void (async () => {
-                        const listRes = await fetch(
-                          `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
-                        );
-                        const list = await listRes.json();
-                        const revs = (list.revisions ?? []).filter(
-                          (r: { status: string }) => r.status === "AVAILABLE",
-                        );
-                        if (revs.length < 2) {
-                          setDocDiffText("Comparaison: moins de deux versions AVAILABLE");
-                          return;
-                        }
-                        const left = revs[revs.length - 2];
-                        const right = revs[revs.length - 1];
-                        const cmpRes = await fetch(
-                          `/api/preparations/${preparationId}/documents/${inspect.document.id}?left=${left.id}&right=${right.id}`,
-                        );
-                        const cmp = await cmpRes.json();
-                        if (cmp.status === "AVAILABLE" && !cmp.diff?.degraded) {
-                          setDocDiffText(
-                            `v${cmp.left.revisionNumber} → v${cmp.right.revisionNumber}\n` +
-                              `+ ${cmp.diff.added.length} / - ${cmp.diff.removed.length}`,
-                          );
-                        } else {
-                          setDocDiffText(
-                            `Diff ${cmp.status}: ${cmp.reason ?? cmp.diff?.reason ?? ""}`,
-                          );
-                        }
-                      })();
-                    }
-                  : undefined
-              }
-              diffText={docDiffText}
-            />
-          </div>
-        </div>
+      {surface === "document" && docView === "library" ? (
+        <DocumentBibliothequeSurface
+          documents={docListItems}
+          selectedId={selectedLibraryId}
+          projectName={projectName}
+          onSelect={(d) => setSelectedLibraryId(d.document.id)}
+          onOpen={(d) => {
+            const match = documents.find((x) => x.document.id === d.document.id);
+            if (match) openDocumentReadView(match, match.latestRevision?.id ?? null);
+          }}
+          onResumeNora={(d) => {
+            const match = documents.find((x) => x.document.id === d.document.id);
+            if (!match?.latestRevision?.id) return;
+            void resumeNoraWithDocumentRevision({
+              doc: match,
+              sourceRevisionId: match.latestRevision.id,
+              sourceRevisionNumber: match.latestRevision.revisionNumber,
+              confirmedHistoricalSource: false,
+            });
+          }}
+          onVersions={(d) => {
+            const match = documents.find((x) => x.document.id === d.document.id);
+            if (!match || !preparationId) return;
+            setInspect(match);
+            setSelectedLibraryId(match.document.id);
+            setDocView("history");
+            setComparatorExpanded(false);
+            setOriginOpen(false);
+            syncSurfaceUrl("document", match.document.id, "push");
+            void (async () => {
+              const rows = await loadDocHistory(preparationId, match.document.id);
+              const head = headRevisionFromRows(rows);
+              setHistorySelectedRevisionId(head?.id ?? rows[0]?.id ?? null);
+            })();
+          }}
+        />
+      ) : null}
+
+      {surface === "document" && docView === "read" && docMissing && !inspect ? (
+        <p className="text-sm" data-testid="document-missing" role="status">
+          {docMissing}
+        </p>
+      ) : null}
+
+      {surface === "document" && docView === "read" && inspect ? (
+        <DocumentReadSurface
+          title={inspect.document.title}
+          markdown={readingMarkdown}
+          missing={null}
+          revisionLabel={
+            readingRevisionNumber != null ? `v${readingRevisionNumber}` : "Version"
+          }
+          currency={readCurrency}
+          loading={readLoading}
+          originOpen={originOpen}
+          originText={formatPilotFacingProvenance(inspect.latestRevision?.provenanceJson, {
+            projectName,
+          })}
+          onRequestRevision={() => {
+            const revId = readingRevisionId ?? inspect.latestRevision?.id;
+            if (!revId) return;
+            void resumeNoraWithDocumentRevision({
+              doc: inspect,
+              sourceRevisionId: revId,
+              sourceRevisionNumber: readingRevisionNumber ?? inspect.latestRevision?.revisionNumber,
+            });
+          }}
+          onHistory={() => {
+            if (!preparationId) return;
+            setDocView("history");
+            setComparatorExpanded(false);
+            void (async () => {
+              const rows = await loadDocHistory(preparationId, inspect.document.id);
+              const head = headRevisionFromRows(rows);
+              setHistorySelectedRevisionId(
+                readingRevisionId ?? head?.id ?? rows[0]?.id ?? null,
+              );
+            })();
+          }}
+          onOrigin={() => setOriginOpen((v) => !v)}
+        />
+      ) : null}
+
+      {surface === "document" && docView === "history" && inspect ? (
+        <DocumentHistorySurface
+          documentTitle={inspect.document.title}
+          revisions={docHistory}
+          headRevisionNumber={headRevisionNumber}
+          selectedRevisionId={historySelectedRevisionId}
+          loading={docHistoryLoading}
+          comparatorExpanded={comparatorExpanded}
+          compareLeftId={compareLeftId}
+          compareRightId={compareRightId}
+          onSelectRevision={setHistorySelectedRevisionId}
+          onToggleComparator={() => setComparatorExpanded((v) => !v)}
+          onCompareLeft={setCompareLeftId}
+          onCompareRight={setCompareRightId}
+          onShowComparison={() => void loadDocumentComparison()}
+          onRead={() => {
+            const revId = historySelectedRevisionId;
+            if (!revId) return;
+            openDocumentReadView(inspect, revId);
+          }}
+          onResumeNora={() => {
+            const row = docHistory.find((r) => r.id === historySelectedRevisionId);
+            if (!row) return;
+            void resumeNoraWithDocumentRevision({
+              doc: inspect,
+              sourceRevisionId: row.id,
+              sourceRevisionNumber: row.revisionNumber,
+            });
+          }}
+        />
+      ) : null}
+
+      {surface === "document" && docView === "compare" && inspect ? (
+        <DocumentCompareSurface
+          documentTitle={inspect.document.title}
+          headRevisionNumber={headRevisionNumber}
+          comparison={comparePayload}
+          leftMarkdown={compareLeftMarkdown}
+          rightMarkdown={compareRightMarkdown}
+          error={compareError}
+          onBack={() => {
+            setDocView("history");
+            setComparePayload(null);
+            setCompareError(null);
+          }}
+        />
       ) : null}

       {surface === "git" || surface === "publication" ? (
diff --git a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
index b1d50549..0001016c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
@@ -1,5 +1,6 @@
 "use client";

+import { useMemo, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";

 export type DocListItem = {
@@ -10,6 +11,9 @@ export type DocListItem = {
     status: string;
     contentMarkdown: string;
   } | null;
+  /** Optional D4-derived document kind label (never invented). */
+  documentKind?: string | null;
+  originLabel?: string | null;
 };

 export type RevisionRow = {
@@ -17,8 +21,115 @@ export type RevisionRow = {
   revisionNumber: number;
   status: string;
   createdAt?: string;
+  /** Short excerpt for history rows — projection only. */
+  excerpt?: string | null;
 };

+export type DiffOp = { op: "equal" | "add" | "remove"; line: string };
+
+export type DocumentComparePayload = {
+  left: { id: string; revisionNumber: number; status: string; contentMarkdown?: string };
+  right: { id: string; revisionNumber: number; status: string; contentMarkdown?: string };
+  diff: {
+    added: string[];
+    removed: string[];
+    ops?: DiffOp[];
+    degraded?: boolean;
+    reason?: string;
+  };
+  status: string;
+  note?: string;
+};
+
+/** Projection UI only — Courante = max AVAILABLE revision number. */
+export function revisionCurrencyLabel(
+  revisionNumber: number,
+  headRevisionNumber: number | null | undefined,
+): "Courante" | "Historique" {
+  if (headRevisionNumber != null && revisionNumber === headRevisionNumber) return "Courante";
+  return "Historique";
+}
+
+/**
+ * R4 — pilot-facing provenance only. Never invents Git commits or sources from titles.
+ * Never surfaces correlationKey / requestId / raw provenanceJson / debug ids.
+ */
+export function formatPilotFacingProvenance(
+  provenanceJson: unknown,
+  opts?: { projectName?: string | null },
+): string {
+  let parsed: Record<string, unknown> | null = null;
+  if (typeof provenanceJson === "string" && provenanceJson.trim()) {
+    try {
+      parsed = JSON.parse(provenanceJson) as Record<string, unknown>;
+    } catch {
+      parsed = null;
+    }
+  } else if (provenanceJson && typeof provenanceJson === "object") {
+    parsed = provenanceJson as Record<string, unknown>;
+  }
+  if (!parsed || Object.keys(parsed).length === 0) {
+    return "Provenance non renseignée";
+  }
+
+  const project = opts?.projectName?.trim() || null;
+  const sealed = parsed.documentCommandBinding === true;
+  const action = parsed.action === "CREATE" || parsed.action === "REVISE" ? parsed.action : null;
+  const sourceKind = typeof parsed.sourceKind === "string" ? parsed.sourceKind : null;
+  const via = typeof parsed.via === "string" ? parsed.via : null;
+
+  if (sealed || action) {
+    return project ? `Production Nora  ·  ${project}` : "Production Nora";
+  }
+  if (sourceKind === "pilot" || via === "api-revise") {
+    return "Révision Pilote";
+  }
+  if (typeof parsed.originLabel === "string" && parsed.originLabel.trim()) {
+    // Only accept an already pilot-facing label — refuse technical payloads.
+    const label = parsed.originLabel.trim();
+    if (/correlation|requestId|commandId|payloadSha|contentSha/i.test(label)) {
+      return "Provenance non renseignée";
+    }
+    return label;
+  }
+  return "Provenance non renseignée";
+}
+
+function DocActionButton(props: {
+  variant: "primary" | "secondary";
+  label: string;
+  onClick?: () => void;
+  disabled?: boolean;
+  testId?: string;
+}) {
+  return (
+    <button
+      type="button"
+      className={
+        props.variant === "primary" ? "doc-action doc-action-primary" : "doc-action doc-action-secondary"
+      }
+      onClick={props.onClick}
+      disabled={props.disabled}
+      data-testid={props.testId}
+    >
+      {props.label}
+    </button>
+  );
+}
+
+function MetaBlock(props: { label: string; value: string }) {
+  return (
+    <div className="doc-meta-block">
+      <div className="doc-meta-label">{props.label}</div>
+      <div className="doc-meta-value">{props.value}</div>
+    </div>
+  );
+}
+
+/* -------------------------------------------------------------------------- */
+/* Legacy exports (Sas / preparations) — retained for non-projet surfaces      */
+/* -------------------------------------------------------------------------- */
+
 export function DocumentLibrary(props: {
   documents: DocListItem[];
   selectedId: string | null;
@@ -26,43 +137,13 @@ export function DocumentLibrary(props: {
   emptyHint?: string;
 }) {
   return (
-    <section className="space-y-2" data-figma-frame="160:175" data-testid="document-library">
-      <div className="fig-section-head">
-        <h2 className="fig-section-title">Bibliothèque</h2>
-        <span className="fig-tag fig-tag-muted">{props.documents.length} doc(s)</span>
-      </div>
-      {props.documents.length === 0 ? (
-        <div className="fig-panel">
-          <p className="text-sm muted" data-testid="document-library-empty">
-            {props.emptyHint ??
-              "Aucun document D4. La bibliothèque reste navigable — créez ou capitalisez depuis le fil."}
-          </p>
-        </div>
-      ) : (
-        props.documents.map((d) => (
-          <button
-            key={d.document.id}
-            type="button"
-            className={`fig-card !min-h-0 text-left w-full ${
-              props.selectedId === d.document.id ? "ring-1 ring-[var(--accent)]" : ""
-            }`}
-            onClick={() => props.onSelect(d)}
-            data-testid={`doc-open-${d.document.id}`}
-          >
-            <div className="fig-card-top">
-              <div className="fig-card-title text-sm">{d.document.title}</div>
-              <span className="fig-tag fig-tag-muted">
-                v{d.latestRevision?.revisionNumber ?? "?"}
-              </span>
-            </div>
-            <div className="fig-card-desc line-clamp-3">
-              {(d.latestRevision?.contentMarkdown ?? "").slice(0, 180) || "Sans contenu"}
-            </div>
-            <div className="fig-card-meta">{d.latestRevision?.status ?? "—"}</div>
-          </button>
-        ))
-      )}
-    </section>
+    <BibliothequeListPanel
+      documents={props.documents}
+      selectedId={props.selectedId}
+      onSelect={props.onSelect}
+      emptyHint={props.emptyHint}
+      headRevisionByDoc={() => null}
+    />
   );
 }

@@ -74,12 +155,12 @@ export function DocumentHistory(props: {
   onCompareLatest?: () => void;
   diffText?: string;
 }) {
+  const head = props.revisions.reduce(
+    (max, r) => (r.status === "AVAILABLE" ? Math.max(max, r.revisionNumber) : max),
+    0,
+  );
   return (
-    <section
-      className="fig-panel space-y-2"
-      data-figma-frame="241:385"
-      data-testid="document-history"
-    >
+    <section className="fig-panel space-y-2" data-figma-frame="241:385" data-testid="document-history">
       <div className="fig-section-head">
         <h3 className="fig-panel-title !mb-0">Historique des révisions</h3>
         {props.onCompareLatest ? (
@@ -108,12 +189,12 @@ export function DocumentHistory(props: {
                 <div>
                   <div className="text-sm">
                     Version {r.revisionNumber}{" "}
-                    <span className="fig-tag fig-tag-muted ml-1">{r.status}</span>
+                    <span className="fig-tag fig-tag-muted ml-1">
+                      {revisionCurrencyLabel(r.revisionNumber, head || null)}
+                    </span>
                   </div>
                   {r.createdAt ? (
-                    <div className="text-xs muted">
-                      {new Date(r.createdAt).toLocaleString("fr-FR")}
-                    </div>
+                    <div className="text-xs muted">{new Date(r.createdAt).toLocaleString("fr-FR")}</div>
                   ) : null}
                 </div>
               </button>
@@ -128,6 +209,7 @@ export function DocumentHistory(props: {
   );
 }

+/** @deprecated Manual revise path — kept for Sas only; Projet Documents must not mount editor. */
 export function DocumentInspector(props: {
   frameId?: string;
   title: string;
@@ -246,3 +328,623 @@ export function DocumentInspector(props: {
     </section>
   );
 }
+
+/* -------------------------------------------------------------------------- */
+/* Projet Documents — Figma page 08                                          */
+/* -------------------------------------------------------------------------- */
+
+function BibliothequeListPanel(props: {
+  documents: DocListItem[];
+  selectedId: string | null;
+  onSelect: (d: DocListItem) => void;
+  emptyHint?: string;
+  headRevisionByDoc: (d: DocListItem) => number | null;
+  search?: string;
+  onSearch?: (v: string) => void;
+}) {
+  const filtered = useMemo(() => {
+    const q = (props.search ?? "").trim().toLowerCase();
+    if (!q) return props.documents;
+    return props.documents.filter((d) => d.document.title.toLowerCase().includes(q));
+  }, [props.documents, props.search]);
+
+  return (
+    <section
+      className="doc-panel doc-panel-list"
+      data-figma-frame="930:3"
+      data-testid="document-library"
+      data-node-id="937:327"
+    >
+      <div className="doc-panel-list-head">
+        <h2 className="doc-panel-heading">Documents du projet</h2>
+        <span className="doc-panel-count">
+          {props.documents.length} DOCUMENT{props.documents.length === 1 ? "" : "S"}
+        </span>
+      </div>
+      {props.onSearch ? (
+        <label className="doc-search" data-node-id="937:331">
+          <span className="doc-search-icon" aria-hidden>
+            ⌕
+          </span>
+          <input
+            type="search"
+            value={props.search ?? ""}
+            onChange={(e) => props.onSearch?.(e.target.value)}
+            placeholder="Rechercher un document..."
+            aria-label="Rechercher un document"
+            data-testid="document-library-search"
+          />
+        </label>
+      ) : null}
+      {filtered.length === 0 ? (
+        <div className="doc-empty" data-testid="document-library-empty">
+          <p className="text-sm muted">
+            {props.emptyHint ??
+              "Aucun document D4. La bibliothèque reste navigable — créez ou capitalisez depuis le fil."}
+          </p>
+        </div>
+      ) : (
+        <ul className="doc-card-list">
+          {filtered.map((d) => {
+            const selected = props.selectedId === d.document.id;
+            const head = props.headRevisionByDoc(d) ?? d.latestRevision?.revisionNumber ?? null;
+            const kind = d.documentKind?.trim() || "Document";
+            const ver = d.latestRevision?.revisionNumber;
+            const currency =
+              ver != null ? revisionCurrencyLabel(ver, head) : "—";
+            return (
+              <li key={d.document.id}>
+                <button
+                  type="button"
+                  className={`doc-card ${selected ? "doc-card-selected" : ""}`}
+                  onClick={() => props.onSelect(d)}
+                  aria-pressed={selected}
+                  data-testid={`doc-open-${d.document.id}`}
+                  data-doc-select="1"
+                  data-node-id={selected ? "935:328" : undefined}
+                >
+                  <div className="doc-card-body">
+                    <div className="doc-card-title">{d.document.title}</div>
+                    <div className="doc-card-sub">
+                      {kind}
+                      {"  ·  "}
+                      {ver != null ? `v${ver}` : "v?"}
+                      {"  ·  "}
+                      {currency}
+                    </div>
+                  </div>
+                  {!selected ? (
+                    <span className="doc-card-chevron" aria-hidden>
+                      ›
+                    </span>
+                  ) : null}
+                </button>
+              </li>
+            );
+          })}
+        </ul>
+      )}
+      <p className="doc-panel-footnote">
+        Sélectionner un document affiche ses détails à droite, sans l’ouvrir automatiquement.
+      </p>
+    </section>
+  );
+}
+
+function BibliothequeAside(props: {
+  selected: DocListItem | null;
+  projectName?: string | null;
+  onOpen: () => void;
+  onResumeNora: () => void;
+  onVersions: () => void;
+  onProvenance: () => void;
+  provenanceOpen?: boolean;
+  provenanceText?: string | null;
+}) {
+  if (!props.selected) {
+    return (
+      <aside
+        className="doc-panel doc-panel-aside"
+        data-testid="document-selection-aside"
+        data-node-id="937:328"
+      >
+        <p className="doc-aside-kicker">DOCUMENT SÉLECTIONNÉ</p>
+        <p className="text-sm muted">Sélectionnez un document dans la liste.</p>
+      </aside>
+    );
+  }
+  const d = props.selected;
+  const ver = d.latestRevision?.revisionNumber;
+  const status = d.latestRevision?.status ?? "—";
+  return (
+    <aside
+      className="doc-panel doc-panel-aside"
+      data-testid="document-selection-aside"
+      data-node-id="937:328"
+    >
+      <p className="doc-aside-kicker">DOCUMENT SÉLECTIONNÉ</p>
+      <h3 className="doc-aside-title">{d.document.title}</h3>
+      <div className="doc-aside-divider" />
+      <MetaBlock
+        label="VERSION COURANTE"
+        value={ver != null ? `v${ver}  ·  ${status === "AVAILABLE" ? "Disponible" : status}` : "—"}
+      />
+      <div className="doc-aside-divider" />
+      <MetaBlock label="TYPE" value={d.documentKind?.trim() || "Document"} />
+      <div className="doc-aside-divider" />
+      <MetaBlock
+        label="ORIGINE"
+        value={d.originLabel?.trim() || "Provenance non renseignée"}
+      />
+      <div className="doc-aside-actions">
+        <DocActionButton
+          variant="primary"
+          label="Ouvrir le document"
+          onClick={props.onOpen}
+          testId="doc-action-open"
+        />
+        <DocActionButton
+          variant="secondary"
+          label="Reprendre avec Nora"
+          onClick={props.onResumeNora}
+          testId="doc-action-resume-nora"
+        />
+        <DocActionButton
+          variant="secondary"
+          label="Voir les versions"
+          onClick={props.onVersions}
+          testId="doc-action-versions"
+        />
+        <DocActionButton
+          variant="secondary"
+          label="Sources et provenance"
+          onClick={props.onProvenance}
+          testId="doc-action-provenance"
+        />
+      </div>
+      {props.provenanceOpen ? (
+        <div className="doc-provenance" data-testid="document-provenance-panel" role="region">
+          <p className="doc-meta-label">PROVENANCE</p>
+          <p className="text-sm muted">
+            {props.provenanceText?.trim() ||
+              d.originLabel?.trim() ||
+              "Provenance non renseignée"}
+          </p>
+        </div>
+      ) : null}
+    </aside>
+  );
+}
+
+/** 08.01 — Bibliothèque : sélection ≠ ouverture, layout ~70/30. */
+export function DocumentBibliothequeSurface(props: {
+  documents: DocListItem[];
+  selectedId: string | null;
+  onSelect: (d: DocListItem) => void;
+  onOpen: (d: DocListItem) => void;
+  onResumeNora: (d: DocListItem) => void;
+  onVersions: (d: DocListItem) => void;
+  projectName?: string | null;
+  emptyHint?: string;
+}) {
+  const [search, setSearch] = useState("");
+  const [provenanceOpen, setProvenanceOpen] = useState(false);
+  const selected = props.documents.find((d) => d.document.id === props.selectedId) ?? null;
+
+  return (
+    <div className="doc-workspace-7030" data-testid="document-bibliotheque" data-figma-frame="930:3">
+      <BibliothequeListPanel
+        documents={props.documents}
+        selectedId={props.selectedId}
+        onSelect={(d) => {
+          setProvenanceOpen(false);
+          props.onSelect(d);
+        }}
+        emptyHint={props.emptyHint}
+        headRevisionByDoc={(d) => d.latestRevision?.revisionNumber ?? null}
+        search={search}
+        onSearch={setSearch}
+      />
+      <BibliothequeAside
+        selected={selected}
+        projectName={props.projectName}
+        onOpen={() => selected && props.onOpen(selected)}
+        onResumeNora={() => selected && props.onResumeNora(selected)}
+        onVersions={() => selected && props.onVersions(selected)}
+        onProvenance={() => setProvenanceOpen((v) => !v)}
+        provenanceOpen={provenanceOpen}
+        provenanceText={null}
+      />
+    </div>
+  );
+}
+
+/** 08.02 — Lecture seule 70/30, sans textarea. */
+export function DocumentReadSurface(props: {
+  title: string;
+  markdown: string | null;
+  missing?: string | null;
+  revisionLabel: string;
+  currency: "Courante" | "Historique";
+  loading?: boolean;
+  onRequestRevision: () => void;
+  onHistory: () => void;
+  onOrigin: () => void;
+  originOpen?: boolean;
+  originText?: string | null;
+  statusLabel?: string | null;
+}) {
+  const versionValue =
+    props.revisionLabel.startsWith("v") || props.revisionLabel.startsWith("Version")
+      ? `${props.revisionLabel.replace(/^Version\s+/i, "v")}  ·  ${props.currency}`
+      : `${props.revisionLabel}  ·  ${props.currency}`;
+  return (
+    <div className="doc-workspace-7030" data-testid="document-read" data-figma-frame="930:4">
+      <section className="doc-panel doc-panel-read" data-node-id="937:327">
+        {props.missing ? (
+          <p className="text-sm" data-testid="document-missing" role="status">
+            {props.missing}
+          </p>
+        ) : props.loading ? (
+          <p className="text-sm muted">Chargement de la version…</p>
+        ) : props.markdown != null ? (
+          <div className="doc-read-body" data-testid="document-read-body">
+            <SafeMarkdown content={props.markdown} />
+          </div>
+        ) : (
+          <p className="text-sm muted">Contenu indisponible.</p>
+        )}
+      </section>
+      <aside className="doc-panel doc-panel-aside" data-testid="document-read-aside">
+        <p className="doc-aside-kicker">DOCUMENT / ACTIONS</p>
+        <h3 className="doc-aside-title">{props.title}</h3>
+        <div className="doc-aside-divider" />
+        <MetaBlock label="VERSION AFFICHÉE" value={versionValue} />
+        <div className="doc-aside-divider" />
+        <MetaBlock
+          label="STATUT"
+          value={props.statusLabel?.trim() || "Disponible  ·  Lecture seule"}
+        />
+        <div className="doc-aside-actions">
+          <DocActionButton
+            variant="primary"
+            label="Demander une révision à Nora"
+            onClick={props.onRequestRevision}
+            testId="doc-action-request-revision"
+          />
+          <DocActionButton
+            variant="secondary"
+            label="Historique des versions"
+            onClick={props.onHistory}
+            testId="doc-action-history"
+          />
+          <DocActionButton
+            variant="secondary"
+            label="Origine et références"
+            onClick={props.onOrigin}
+            testId="doc-action-origin"
+          />
+        </div>
+        <p className="doc-panel-footnote">
+          Aucune édition manuelle. La révision se demande dans le fil Travail avec Nora.
+        </p>
+        {props.originOpen ? (
+          <div className="doc-provenance" data-testid="document-origin-panel">
+            <p className="doc-meta-label">ORIGINE</p>
+            <p className="text-sm muted">
+              {props.originText?.trim() || "Provenance non renseignée"}
+            </p>
+          </div>
+        ) : null}
+      </aside>
+    </div>
+  );
+}
+
+/** 08.04 / 08.05 — Historique + comparateur replié/déplié. */
+export function DocumentHistorySurface(props: {
+  documentTitle: string;
+  revisions: RevisionRow[];
+  headRevisionNumber: number | null;
+  selectedRevisionId: string | null;
+  loading?: boolean;
+  comparatorExpanded: boolean;
+  compareLeftId: string | null;
+  compareRightId: string | null;
+  onSelectRevision: (id: string) => void;
+  onToggleComparator: () => void;
+  onCompareLeft: (id: string) => void;
+  onCompareRight: (id: string) => void;
+  onShowComparison: () => void;
+  onRead: () => void;
+  onResumeNora: () => void;
+}) {
+  const selected =
+    props.revisions.find((r) => r.id === props.selectedRevisionId) ?? null;
+  const available = props.revisions.filter((r) => r.status === "AVAILABLE");
+
+  return (
+    <div
+      className="doc-workspace-7030"
+      data-testid="document-history-surface"
+      data-figma-frame={props.comparatorExpanded ? "930:7" : "930:6"}
+    >
+      <section className="doc-panel doc-panel-list" data-node-id="938:335">
+        <div className="doc-panel-list-head">
+          <h2 className="doc-panel-heading">{props.documentTitle}</h2>
+          <span className="doc-panel-count">
+            {props.revisions.length} VERSION{props.revisions.length === 1 ? "" : "S"}
+          </span>
+        </div>
+        <div className="doc-aside-divider" />
+        {props.loading ? <p className="text-sm muted">Chargement…</p> : null}
+        {!props.loading && props.revisions.length === 0 ? (
+          <p className="text-sm muted" data-testid="document-history-empty">
+            Aucune révision listée pour ce document.
+          </p>
+        ) : (
+          <ul className="doc-version-list">
+            {[...props.revisions]
+              .sort((a, b) => b.revisionNumber - a.revisionNumber)
+              .map((r) => {
+              const currency = revisionCurrencyLabel(r.revisionNumber, props.headRevisionNumber);
+              const selectedRow = props.selectedRevisionId === r.id;
+              return (
+                <li key={r.id}>
+                  <button
+                    type="button"
+                    className={`doc-version-row ${selectedRow ? "doc-version-row-selected" : ""}`}
+                    onClick={() => props.onSelectRevision(r.id)}
+                    aria-pressed={selectedRow}
+                    data-testid={`doc-rev-${r.revisionNumber}`}
+                  >
+                    <div className="doc-version-row-top">
+                      <span className="doc-version-title">Version {r.revisionNumber}</span>
+                      <span
+                        className={
+                          currency === "Courante"
+                            ? "doc-badge doc-badge-current"
+                            : "doc-badge doc-badge-historical"
+                        }
+                      >
+                        {currency.toUpperCase()}
+                      </span>
+                    </div>
+                    <p className="doc-version-excerpt">
+                      {r.excerpt?.trim() ||
+                        (r.createdAt
+                          ? new Date(r.createdAt).toLocaleString("fr-FR")
+                          : `Statut ${r.status}`)}
+                    </p>
+                  </button>
+                </li>
+              );
+            })}
+          </ul>
+        )}
+        <p className="doc-panel-footnote">
+          Une ancienne version reste lisible sans redevenir automatiquement la version courante.
+        </p>
+      </section>
+
+      <aside className="doc-panel doc-panel-aside" data-testid="document-history-aside">
+        <p className="doc-aside-kicker">VERSION SÉLECTIONNÉE</p>
+        {selected ? (
+          <>
+            <h3 className="doc-aside-title">Version {selected.revisionNumber}</h3>
+            <span
+              className={
+                revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
+                "Courante"
+                  ? "doc-badge doc-badge-current"
+                  : "doc-badge doc-badge-historical"
+              }
+            >
+              {revisionCurrencyLabel(
+                selected.revisionNumber,
+                props.headRevisionNumber,
+              ).toUpperCase()}
+            </span>
+            <MetaBlock
+              label="STATUT"
+              value={
+                revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
+                "Courante"
+                  ? "Version courante"
+                  : "Version précédente conservée"
+              }
+            />
+            <div className="doc-aside-divider" />
+            <div className="doc-aside-actions">
+              <DocActionButton
+                variant="secondary"
+                label="Lire cette version"
+                onClick={props.onRead}
+                testId="doc-action-read-version"
+              />
+              <DocActionButton
+                variant="primary"
+                label="Retravailler avec Nora"
+                onClick={props.onResumeNora}
+                testId="doc-action-rework-nora"
+              />
+            </div>
+          </>
+        ) : (
+          <p className="text-sm muted">Sélectionnez une version.</p>
+        )}
+
+        <div className="doc-aside-divider" />
+        <p className="doc-meta-label">COMPARER DEUX VERSIONS</p>
+        <DocActionButton
+          variant="secondary"
+          label={
+            props.comparatorExpanded
+              ? "Comparer deux versions  ⌃"
+              : "Comparer deux versions  ⌄"
+          }
+          onClick={props.onToggleComparator}
+          testId="doc-action-compare-toggle"
+        />
+        {props.comparatorExpanded ? (
+          <div className="doc-compare-controls" data-testid="document-compare-controls">
+            <label className="doc-select-label">
+              VERSION DE DÉPART
+              <select
+                className="doc-select"
+                value={props.compareLeftId ?? ""}
+                onChange={(e) => props.onCompareLeft(e.target.value)}
+                data-testid="doc-compare-left"
+              >
+                <option value="">Choisir…</option>
+                {[...available]
+                  .sort((a, b) => b.revisionNumber - a.revisionNumber)
+                  .map((r) => (
+                  <option key={r.id} value={r.id}>
+                    v{r.revisionNumber}
+                  </option>
+                ))}
+              </select>
+            </label>
+            <label className="doc-select-label">
+              <span className="sr-only">Version d&apos;arrivée</span>
+              <select
+                className="doc-select"
+                value={props.compareRightId ?? ""}
+                onChange={(e) => props.onCompareRight(e.target.value)}
+                data-testid="doc-compare-right"
+                aria-label="Version d'arrivée"
+              >
+                <option value="">Choisir…</option>
+                {[...available]
+                  .sort((a, b) => b.revisionNumber - a.revisionNumber)
+                  .map((r) => (
+                  <option key={r.id} value={r.id}>
+                    v{r.revisionNumber}
+                  </option>
+                ))}
+              </select>
+            </label>
+            <DocActionButton
+              variant="primary"
+              label="Afficher la comparaison"
+              onClick={props.onShowComparison}
+              disabled={
+                !props.compareLeftId ||
+                !props.compareRightId ||
+                props.compareLeftId === props.compareRightId
+              }
+              testId="doc-action-show-comparison"
+            />
+          </div>
+        ) : (
+          <p className="doc-compare-hint">
+            Choisissez « Comparer » pour sélectionner les deux versions à confronter.
+          </p>
+        )}
+      </aside>
+    </div>
+  );
+}
+
+/** 08.06 — Comparaison 50/50 lecture seule. */
+export function DocumentCompareSurface(props: {
+  documentTitle: string;
+  headRevisionNumber: number | null;
+  comparison: DocumentComparePayload | null;
+  leftMarkdown: string | null;
+  rightMarkdown: string | null;
+  error?: string | null;
+  onBack: () => void;
+}) {
+  const left = props.comparison?.left;
+  const right = props.comparison?.right;
+  const degraded = Boolean(props.comparison?.diff?.degraded);
+  const removed = props.comparison?.diff?.removed ?? [];
+  const added = props.comparison?.diff?.added ?? [];
+
+  return (
+    <div className="doc-compare-workspace" data-testid="document-compare" data-figma-frame="930:8">
+      <div className="doc-compare-toolbar">
+        <DocActionButton
+          variant="secondary"
+          label="Retour à l’historique"
+          onClick={props.onBack}
+          testId="doc-action-back-history"
+        />
+      </div>
+      {props.error ? (
+        <p className="text-sm" role="alert" data-testid="document-compare-error">
+          {props.error}
+        </p>
+      ) : null}
+      {degraded ? (
+        <div className="fig-alert" data-testid="document-compare-degraded" role="status">
+          Comparaison dégradée
+          {props.comparison?.diff?.reason ? ` (${props.comparison.diff.reason})` : ""} — résumé
+          non exhaustif. {props.comparison?.note ?? ""}
+        </div>
+      ) : null}
+      <div className="doc-compare-columns">
+        <section className="doc-panel doc-compare-col">
+          <p className="doc-aside-kicker">
+            VERSION {left?.revisionNumber ?? "?"}
+            {"   ·   "}
+            {left
+              ? revisionCurrencyLabel(left.revisionNumber, props.headRevisionNumber).toUpperCase()
+              : ""}
+          </p>
+          <div className="doc-aside-divider" />
+          <h3 className="doc-compare-doc-title">{props.documentTitle}</h3>
+          <div className="doc-read-body">
+            {props.leftMarkdown != null ? (
+              <SafeMarkdown content={props.leftMarkdown} />
+            ) : (
+              <p className="text-sm muted">Contenu indisponible.</p>
+            )}
+          </div>
+          {removed.length > 0 ? (
+            <div className="doc-diff-removed" data-testid="document-diff-removed">
+              {removed.slice(0, 8).map((line, i) => (
+                <p key={`rm-${i}`}>{line || " "}</p>
+              ))}
+            </div>
+          ) : null}
+        </section>
+        <section className="doc-panel doc-compare-col">
+          <p className="doc-aside-kicker">
+            VERSION {right?.revisionNumber ?? "?"}
+            {"   ·   "}
+            {right
+              ? revisionCurrencyLabel(right.revisionNumber, props.headRevisionNumber).toUpperCase()
+              : ""}
+          </p>
+          <div className="doc-aside-divider" />
+          <h3 className="doc-compare-doc-title">{props.documentTitle}</h3>
+          <div className="doc-read-body">
+            {props.rightMarkdown != null ? (
+              <SafeMarkdown content={props.rightMarkdown} />
+            ) : (
+              <p className="text-sm muted">Contenu indisponible.</p>
+            )}
+          </div>
+          {added.length > 0 ? (
+            <div className="doc-diff-added" data-testid="document-diff-added">
+              {added.slice(0, 8).map((line, i) => (
+                <p key={`ad-${i}`}>{line || " "}</p>
+              ))}
+            </div>
+          ) : null}
+        </section>
+      </div>
+      <div className="doc-compare-summary" data-testid="document-compare-summary">
+        <p className="doc-aside-kicker">MODIFICATIONS IDENTIFIÉES</p>
+        <p className="text-sm muted">
+          {degraded
+            ? "Différentiel exhaustif indisponible — voir l’avertissement ci-dessus."
+            : `+ ${added.length} ligne(s)  ·  − ${removed.length} ligne(s)  ·  Versions historiques conservées`}
+        </p>
+      </div>
+    </div>
+  );
+}
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 05b45841..49b2ad7d 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -12,9 +12,9 @@ const HERO: Record<
   { kicker: string; title: string; sub: string }
 > = {
   travail: {
-    kicker: "Espace projet  /  Travail",
-    title: "Reprendre le fil du projet",
-    sub: "La préparation et les échanges avec Nora restent dans le contexte de ce projet.",
+    kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
+    title: "Réviser un document avec Nora",
+    sub: "Le chat reste à gauche ; le document sélectionné s’ouvre dans la visionneuse à droite.",
   },
   projet: {
     kicker: "Espace projet  /  Projet",
@@ -32,9 +32,9 @@ const HERO: Record<
     sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
   },
   document: {
-    kicker: "Espace projet  /  Documents Nora",
-    title: "Bibliothèque",
-    sub: "Bibliothèque, inspection et révision sous autorité D4.",
+    kicker: "ESPACE PROJET  /  DOCUMENTS",
+    title: "Bibliothèque du projet",
+    sub: "Retrouvez les documents durables du projet, leurs versions et les actions disponibles.",
   },
   git: {
     kicker: "Espace projet  /  Sources Git",
@@ -58,10 +58,19 @@ export function ProjectChrome(props: {
   loadState?: "loading" | "ready";
   /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
   travailLayout?: "normal" | "split" | "enlarged";
+  /** Documents sub-views (08.02–08.06) — overrides default Bibliothèque hero. */
+  documentHero?: { kicker: string; title: string; sub: string } | null;
+  /** Travail states 08.07 / 08.08 — overrides default Travail hero. */
+  travailHero?: { kicker: string; title: string; sub: string } | null;
   children: React.ReactNode;
 }) {
   const loadState = props.loadState ?? "ready";
-  const hero = HERO[props.surface];
+  const hero =
+    props.surface === "document" && props.documentHero
+      ? props.documentHero
+      : props.surface === "travail" && props.travailHero
+        ? props.travailHero
+        : HERO[props.surface];
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
   const isTravail = props.surface === "travail";
diff --git a/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx b/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
index fdc16203..3aa10fc2 100644
--- a/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
@@ -30,6 +30,8 @@ export type TravailViewerResource =
 export function TravailViewer(props: {
   resource: TravailViewerResource;
   enlarged: boolean;
+  /** When Nora works from a non-current revision — informational only. */
+  documentFocusBanner?: "historical" | "proposal" | null;
   onEnlarge: () => void;
   onReduce: () => void;
   onClose: () => void;
@@ -40,8 +42,24 @@ export function TravailViewer(props: {
     resource.kind === "document" ? resource.title : resource.title || "Source Git";
   const kicker =
     resource.kind === "document"
-      ? "Visionneuse · lecture seule"
-      : "Visionneuse · source Git";
+      ? "VISIONNEUSE  /  LECTURE SEULE"
+      : "VISIONNEUSE  /  SOURCE GIT";
+  const currencyBadge =
+    resource.kind === "document"
+      ? props.documentFocusBanner === "proposal"
+        ? "PROPOSITION"
+        : resource.versionSource === "exact"
+          ? "HISTORIQUE"
+          : "COURANTE"
+      : null;
+  const versionLine =
+    resource.kind === "document" && resource.revisionNumber != null
+      ? props.documentFocusBanner === "proposal"
+        ? `v${resource.revisionNumber}  ·  Candidate`
+        : resource.versionSource === "exact"
+          ? `v${resource.revisionNumber}  ·  Historique`
+          : `v${resource.revisionNumber}  ·  Courante`
+      : null;

   return (
     <div
@@ -49,6 +67,7 @@ export function TravailViewer(props: {
       data-testid="travail-viewer"
       data-viewer-kind={resource.kind}
       data-viewer-enlarged={props.enlarged ? "1" : "0"}
+      data-focus-banner={props.documentFocusBanner ?? ""}
     >
       <header className="fig-travail-viewer-head">
         <div>
@@ -56,15 +75,23 @@ export function TravailViewer(props: {
           <h2 className="fig-inspector-title" data-testid="travail-viewer-title">
             {title}
           </h2>
-          {resource.kind === "document" && resource.revisionNumber != null ? (
+          {currencyBadge ? (
+            <span
+              className={
+                currencyBadge === "COURANTE"
+                  ? "doc-badge doc-badge-current"
+                  : currencyBadge === "PROPOSITION"
+                    ? "doc-badge doc-badge-proposal"
+                    : "doc-badge doc-badge-historical"
+              }
+              data-testid="travail-viewer-currency"
+            >
+              {currencyBadge}
+            </span>
+          ) : null}
+          {versionLine ? (
             <p className="fig-travail-viewer-meta" data-testid="travail-viewer-revision">
-              Version {resource.revisionNumber}
-              {resource.revisionId ? ` · ${resource.revisionId.slice(0, 8)}` : ""}
-              {resource.versionSource === "current"
-                ? " · version courante"
-                : resource.versionSource === "exact"
-                  ? " · révision citée"
-                  : ""}
+              {versionLine}
             </p>
           ) : null}
           {resource.kind === "git" ? (
@@ -118,6 +145,15 @@ export function TravailViewer(props: {
       </header>

       <div className="fig-travail-viewer-body" data-testid="travail-viewer-body">
+        {props.documentFocusBanner === "historical" ? (
+          <div className="fig-alert" data-testid="document-focus-banner" role="status">
+            VERSION PLUS RÉCENTE DISPONIBLE · Aucun changement enregistré
+          </div>
+        ) : props.documentFocusBanner === "proposal" ? (
+          <div className="fig-alert" data-testid="document-focus-banner" role="status">
+            PROPOSITION NON ENREGISTRÉE · Pas de publication Git automatique
+          </div>
+        ) : null}
         {!resource.available ? (
           <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
             {resource.unavailableReason ??
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index f9c8640c..6d41e0c7 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -1294,6 +1294,488 @@
   align-items: start;
 }

+/* Ensemble 06 — Documents page 08 (1680×970: list ~928 / aside ~414 ≈ 70/30) */
+.doc-workspace-7030 {
+  display: grid;
+  grid-template-columns: minmax(0, 928fr) minmax(300px, 414fr);
+  gap: 16px;
+  align-items: stretch;
+  min-height: 634px;
+}
+
+.doc-panel {
+  background: #151c2b;
+  border: 1px solid #29334b;
+  border-radius: 10px;
+  padding: 24px 22px;
+  min-height: 0;
+}
+
+.doc-panel-list,
+.doc-panel-read {
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+}
+
+.doc-panel-aside {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+
+.doc-panel-list-head {
+  display: flex;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: 12px;
+}
+
+.doc-panel-heading {
+  margin: 0;
+  font-size: 20px;
+  font-weight: 600;
+  color: #f5f6fe;
+  line-height: 1.2;
+}
+
+.doc-panel-count {
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  color: #7889a6;
+  text-transform: uppercase;
+}
+
+.doc-search {
+  display: flex;
+  align-items: center;
+  gap: 10px;
+  height: 49px;
+  padding: 0 16px;
+  border-radius: 8px;
+  border: 1px solid #29334b;
+  background: #101624;
+}
+
+.doc-search-icon {
+  color: #a3b0c7;
+  font-size: 18px;
+}
+
+.doc-search input {
+  flex: 1;
+  min-width: 0;
+  border: 0;
+  outline: none;
+  background: transparent;
+  color: #f5f6fe;
+  font-size: 13px;
+}
+
+.doc-search input::placeholder {
+  color: #7889a6;
+}
+
+.doc-card-list,
+.doc-version-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 18px;
+  flex: 1;
+}
+
+.doc-card {
+  display: flex;
+  align-items: center;
+  width: 100%;
+  min-height: 107px;
+  padding: 20px 24px;
+  border-radius: 10px;
+  border: 1px solid #29334b;
+  background: #101624;
+  text-align: left;
+  cursor: pointer;
+  color: inherit;
+}
+
+.doc-card:hover {
+  border-color: color-mix(in srgb, var(--fig-accent) 45%, #29334b);
+}
+
+.doc-card:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.doc-card-selected {
+  background: #252d52;
+  border-color: var(--fig-accent);
+}
+
+.doc-card-body {
+  flex: 1;
+  min-width: 0;
+}
+
+.doc-card-title {
+  font-size: 17px;
+  font-weight: 600;
+  color: #f5f6fe;
+  line-height: 1.3;
+}
+
+.doc-card-sub {
+  margin-top: 10px;
+  font-size: 13px;
+  color: #a3b0c7;
+}
+
+.doc-card-chevron {
+  color: #7889a6;
+  font-size: 22px;
+  margin-left: 12px;
+}
+
+.doc-panel-footnote {
+  margin: auto 0 0;
+  font-size: 12px;
+  color: #7889a6;
+  line-height: 1.4;
+}
+
+.doc-aside-kicker {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  color: #b2b4ff;
+  text-transform: uppercase;
+}
+
+.doc-aside-title {
+  margin: 0;
+  font-size: 20px;
+  font-weight: 600;
+  color: #f5f6fe;
+  line-height: 1.25;
+}
+
+.doc-aside-divider {
+  height: 1px;
+  background: #29334b;
+  margin: 4px 0;
+}
+
+.doc-meta-block {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+}
+
+.doc-meta-label {
+  font-size: 11px;
+  font-weight: 500;
+  letter-spacing: 0.04em;
+  color: #7889a6;
+  text-transform: uppercase;
+}
+
+.doc-meta-value {
+  font-size: 13px;
+  font-weight: 600;
+  color: #f5f6fe;
+}
+
+.doc-aside-actions {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+  margin-top: 8px;
+}
+
+.doc-action {
+  display: flex;
+  align-items: center;
+  width: 100%;
+  min-height: 49px;
+  padding: 0 16px;
+  border-radius: 8px;
+  font-size: 13px;
+  font-weight: 600;
+  cursor: pointer;
+  text-align: left;
+}
+
+.doc-action:disabled {
+  opacity: 0.45;
+  cursor: not-allowed;
+}
+
+.doc-action:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.doc-action-primary {
+  background: var(--fig-accent);
+  border: 1px solid var(--fig-accent);
+  color: #fff;
+}
+
+.doc-action-secondary {
+  background: #101624;
+  border: 1px solid #303b54;
+  color: #e5eaf8;
+}
+
+.doc-provenance {
+  margin-top: 8px;
+  padding-top: 8px;
+  border-top: 1px solid #29334b;
+}
+
+.doc-read-body {
+  overflow: auto;
+  flex: 1;
+  min-height: 0;
+  max-height: 560px;
+  padding-right: 4px;
+}
+
+.doc-version-row {
+  width: 100%;
+  min-height: 124px;
+  padding: 18px 22px;
+  border-radius: 8px;
+  border: 1px solid #29334b;
+  background: #101624;
+  text-align: left;
+  cursor: pointer;
+  color: inherit;
+}
+
+.doc-version-row-selected {
+  background: #272f53;
+  border-color: var(--fig-accent);
+}
+
+.doc-version-row:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.doc-version-row-top {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 12px;
+}
+
+.doc-version-title {
+  font-size: 20px;
+  font-weight: 600;
+  color: #f5f6fe;
+}
+
+.doc-version-excerpt {
+  margin: 12px 0 0;
+  font-size: 13px;
+  color: #a3b0c7;
+  line-height: 1.35;
+}
+
+.doc-badge {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 120px;
+  height: 28px;
+  padding: 0 14px;
+  border-radius: 14px;
+  font-size: 10px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+}
+
+.doc-badge-current {
+  background: #1d372f;
+  color: #b2dec7;
+}
+
+.doc-badge-historical {
+  background: #222b42;
+  color: #a3b0c7;
+  border: 1px solid #29334b;
+}
+
+.doc-compare-controls {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+
+.doc-select-label {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  font-size: 11px;
+  color: #7889a6;
+  font-weight: 500;
+}
+
+.doc-select {
+  height: 38px;
+  border-radius: 8px;
+  border: 1px solid #29334b;
+  background: #101624;
+  color: #f5f6fe;
+  padding: 0 10px;
+  font-size: 13px;
+}
+
+.doc-compare-hint {
+  margin: 0;
+  font-size: 11px;
+  color: #7889a6;
+  line-height: 1.45;
+}
+
+.doc-compare-workspace {
+  display: flex;
+  flex-direction: column;
+  gap: 16px;
+}
+
+.doc-compare-toolbar {
+  display: flex;
+  justify-content: flex-end;
+}
+
+.doc-compare-toolbar .doc-action {
+  max-width: 348px;
+}
+
+.doc-compare-columns {
+  display: grid;
+  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
+  gap: 17px;
+  align-items: stretch;
+}
+
+.doc-compare-col {
+  min-height: 500px;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+
+.doc-compare-doc-title {
+  margin: 0;
+  font-size: 19px;
+  font-weight: 600;
+  color: #f5f6fe;
+}
+
+.doc-diff-removed {
+  margin-top: auto;
+  padding: 14px 16px;
+  border-radius: 7px;
+  background: #292334;
+  border: 1px solid #744659;
+  font-size: 13px;
+  color: #f5f6fe;
+}
+
+.doc-diff-added {
+  margin-top: auto;
+  padding: 14px 16px;
+  border-radius: 7px;
+  background: #1b3236;
+  border: 1px solid #407b76;
+  font-size: 13px;
+  color: #f5f6fe;
+}
+
+.doc-compare-summary {
+  background: #151c2b;
+  border: 1px solid #29334b;
+  border-radius: 8px;
+  padding: 18px 22px;
+  min-height: 110px;
+}
+
+@media (max-width: 1100px) {
+  .doc-workspace-7030,
+  .doc-compare-columns {
+    grid-template-columns: 1fr;
+  }
+}
+
+.doc-historical-confirm {
+  margin: 0 0 12px;
+  padding: 14px 16px;
+  border-radius: 10px;
+  border: 1px solid #29334b;
+  background: #151c2b;
+}
+
+.doc-historical-confirm-text {
+  margin: 0 0 12px;
+  font-size: 13px;
+  color: #a3b0c7;
+  line-height: 1.4;
+}
+
+.doc-historical-confirm-actions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 10px;
+}
+
+.doc-historical-confirm-actions .doc-action {
+  width: auto;
+  min-width: 280px;
+  max-width: 348px;
+}
+
+.doc-proposal-conserve {
+  margin: 0 0 12px;
+  padding: 14px 16px;
+  border-radius: 10px;
+  border: 1px solid #3d4f2f;
+  background: #152015;
+}
+
+.doc-proposal-conserve-badge {
+  margin: 0 0 8px;
+  font-size: 11px;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  color: #d4e8a8;
+}
+
+.doc-badge-proposal {
+  background: color-mix(in srgb, #c9a227 22%, transparent);
+  color: #f0d878;
+  border: 1px solid color-mix(in srgb, #c9a227 45%, transparent);
+}
+
+.sr-only {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
 .fig-panel {
   background: color-mix(in srgb, var(--fig-panel) 92%, black);
   border: 1px solid var(--fig-line);
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
index 3b41419b..06a5e8c9 100644
--- a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
@@ -60,22 +60,29 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
   await rail.getByTestId("nav-documents").click();
   await expect(page).toHaveURL(new RegExp(`surface=document`));
   await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
-  await expect(page.getByTestId("document-inspect")).toBeVisible({ timeout: 10000 });
+  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 10000 });

-  // Open first document if listed
+  // Select (not open) then Ouvrir
   const firstDoc = page.locator('[data-testid^="doc-open-"]').first();
   await expect(firstDoc).toBeVisible({ timeout: 15000 });
   const docTestId = await firstDoc.getAttribute("data-testid");
   const documentId = docTestId?.replace("doc-open-", "");
   expect(documentId).toBeTruthy();
   await firstDoc.click();
+  await expect(page.getByTestId("document-selection-aside")).toBeVisible();
+  // Selection must not push documentId into the URL.
+  await expect(page).not.toHaveURL(new RegExp(`documentId=${documentId}`));
+  await page.getByTestId("doc-action-open").click();
   await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
+  await expect(page.getByTestId("document-read")).toBeVisible();

   // B2 — reload keeps deep-link; no mutation claimed on open
   await page.reload();
   await expect(page).toHaveURL(new RegExp(`surface=document`));
   await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
-  await expect(page.getByTestId("document-ui-state")).toContainText("READING");
+  await expect(page.getByTestId("document-read")).toBeVisible();
+  await expect(page.getByTestId("document-read-aside")).toContainText("DOCUMENT / ACTIONS");
+  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

   // Back to travail then Forward
   await page.goBack();
@@ -86,15 +93,12 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
   await page.goto(`/projects/${projectId}?surface=document&documentId=doc_foreign_denied`);
   await expect(page.getByTestId("document-missing")).toBeVisible();

-  // B3 — revise AVAILABLE only
+  // B3 — Ensemble 06: no Pilote textarea; Demander une révision → Travail / Nora
   await page.goto(`/projects/${projectId}?surface=document&documentId=${documentId}`);
-  await page.getByTestId("document-revise-start").click();
-  await page.getByTestId("document-revise-draft").fill("# Doc G4\nligne révisée");
-  await page.getByTestId("document-revise-save").click();
-  await expect(page.getByTestId("document-revise-message")).toContainText(/AVAILABLE/i, {
-    timeout: 15000,
-  });
-  await expect(page.getByTestId("document-ui-state")).toContainText("READING");
+  await expect(page.getByTestId("document-read")).toBeVisible({ timeout: 10000 });
+  await page.getByTestId("doc-action-request-revision").click();
+  await expect(page).toHaveURL(new RegExp(`surface=travail`));
+  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

   // B4 — Reprendre = GET only (no POST to /api/preparations on resume)
   let prepPostCount = 0;

```

---

# §18 — Anti-stale handoff metadata

Après publish L3, remplacer mentalement tip/blob par les SHA \`git ls-remote\` / \`git cat-file\` vérifiés. Ne pas faire confiance à un Commit SHA auto-référentiel non relu.

FIN DU REVIEW PACK FULL — Ensemble 06 Documents CORRECTIVE.
