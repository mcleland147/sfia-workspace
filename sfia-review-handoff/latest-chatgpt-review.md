# SFIA Review Pack FULL — Ensemble 06 Documents Bibliothèque
**Date/heure (UTC):** 2026-11-19T22:05:25Z
**Produit:** SFIA Studio Next
**Cycle:** 08 — Delivery / implémentation · Typologie EVOL · Profil Standard
**Objectif:** Capacité Bibliothèque Documents (page Figma 08, frames 930:3–10) + protocole D4 révision historique, fidélité visuelle mesurée, sans push projet / PR / RECETTE promote.

> **Note statut contrat Git:** `documents-contrat-realisation.md` porte encore le statut « candidat » dans Git. **Validation Morris conversationnelle** reçue pour construction. Non réécrit.

> **Accessibilité ChatGPT:** ce pack embarque le contenu complet des trois nouveaux fichiers de tests et les diffs git exploitables des fichiers modifiés (pas seulement un inventaire ni une référence à un fichier local hors handoff).

---

## 1. Git Truth Check

| Check | Résultat |
|---|---|
| remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| branche travail | `sfia/next-documents-delivery-20261119` (LOCALE, absente du remote) |
| HEAD projet (non commit) | `6516c7b56ec61bd72943ae0d26e625bf21139d4e` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| base documentaire | `origin/sfia/next-documents-convergence-20261119` @ `6516c7b56ec61bd72943ae0d26e625bf21139d4e` |
| worktree | `/Users/morris/Projects/sfia-wt-documents-delivery-20261119` |
| branche documentaire source | non modifiée |
| dirty | modifications productives sous `projects/sfia-studio-next/web/` + `.tmp-sfia-review/` hors commit projet |

```
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/document/service.ts
 M projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/web/tests/e2e/documents-bibliotheque-08.spec.ts
?? projects/sfia-studio-next/web/tests/integration/documents-historical-revise.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts

```

**STOP non déclenché** sur Git.

---

## 2. Sources consommées

### Processus / gouvernance (main)
- method/sfia-fast-track/core/* (routing, operating model, guardrails)
- governance/SEF.md, roadmap, ENV-01, product-versioning
- ENV-01 blob main `14b61f0d…` · Product versioning `8bc93e0f…`

### Contrats Documents (branche documentaire)
- `construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md`
- `construction/convergence-ux-ui-globale/documents-contrat-realisation.md` (candidat Git / validé conversation)

### Figma
- fileKey `itgvCulInEnFY6DvgIegvP` · page `930:2`
- Session MCP `409ceea9-5472-4bf8-b3dc-e62b950aa978`
- Frames 930:3–10 capturées ; contrat extrait avant code inclus §3

### Code inspecté avant modification
DocumentSurfaces, TravailViewer, ProjectChrome, page projet, document/service, document-act/command, d4-read-tools, schema, routes API documents.

---

## 3. Contrat visuel Figma extrait (avant code)

```markdown
# Contrat visuel Figma extrait — Documents page 08
**Avant code** · fileKey `itgvCulInEnFY6DvgIegvP` · page `930:2` · viewport **1680×970**
**Session** `837492e9-80c0-43f9-b234-9592cba0ce08` · captures dans `.tmp-sfia-review/documents-figma/`

> Note statut contrat Git : `documents-contrat-realisation.md` porte encore « candidat » ; **validation Morris conversationnelle** reçue pour construction. Signalé, non réécrit.

## Géométrie shell commune (calques natifs)

| Élément | x | y | w | h |
|---|---:|---:|---:|---:|
| Rail projet | 0 | 0 | **246** | 970 |
| En-tête projet | 246 | 0 | 1434 | **70** |
| Sur-titre ESPACE PROJET / DOCUMENTS | 284 | 110 | ~1200 | 20 |
| Titre « Documents » | 284 | 141–143 | ~1250 | 48–52 |
| Description | 284 | 198 | ~1260–1320 | 27–28 |
| Séparateur | 284 | 246–247 | ~1354 | 1 |

## Matrice des huit frames

| Frame | Node | Composition | Rectangles stables | Composants | Tokens / mesures | Navigation / états | Incertitudes |
|---|---|---|---|---|---|---|---|
| **08.01 Bibliothèque** | `930:3` | Liste ~70 % + fiche actions ~30 % | Liste `284,275,928×634` ; panneau `1228,275,414×634` ; cartes `848×107` ; CTA `348×49` | Rail, En-tête, Carte sélectionnée, Action Primaire/Secondaire | Fond `#0a0e17` ; panels `#151c2a` ; bordure `#35415c` ; accent `#827cff` ; texte `#f6f7ff` / muted `#99a8c6` ; radius cartes ~12, boutons ~8–10 | Clic carte = **sélection** (liseré violet) ; Ouvrir / Reprendre Nora / Versions / Sources | Labels exacts des CTA à calquer sur instances |
| **08.02 Lecture** | `930:4` | Contenu ~70 % + actions ~30 % | Doc `309,302,892×581` ; panneau `1228,275,414×634` | Même shell ; actions lecture | Identique | Demander révision / Historique / Origine ; **pas de textarea** ; note lecture seule | Typo titres document (sizes 25/16) |
| **08.03 Travail 50/50** | `930:5` | Chat + composer gauche / visionneuse droite | Chat `284,253,651×525` ; composer `284,793,651×113` ; viewer `952,253,690×653` | NoraConversation existante + TravailViewer | Identique | Fil unique ; chip « Visionneuse » ; Ouvrir dans Documents | Réutiliser layout Travail existant |
| **08.04 Historique replié** | `930:6` | Versions ~70 % + fiche ~30 % | Liste `284,276,927×634` ; panneau `1228,276,416×634` ; rows `868×124` | Badges Courante/Historique ; Comparer ⌄ | Badge courant vert ; historique gris | Comparateur **replié** ; Lire / Retravailler Nora | Copy exacte badges |
| **08.05 Comparateur déplié** | `930:7` | Même layout + sélecteurs | Selects `171×38` ; Afficher comparaison `348×49` | Selects from/to | Identique | Deux versions distinctes requises | Options dropdown native vs custom |
| **08.06 Comparaison 50/50** | `930:8` | Deux colonnes + résumé bas | Col1 `284,278,662×500` ; Col2 `963,278,680×500` ; résumé `284,797,1359×110` | Diff retiré / introduit | Diff rouge `#3a1c24` / vert `#163528` (approx captures) | Retour historique | Alignement exact colonnes (662 vs 680) |
| **08.07 Nora historique** | `930:9` | Même 50/50 + choix V2/V3 | Choix `286×50` / `307×50` ; alerte bas viewer | ContinueChoices-like | Identique | Confirmation base avant révision | Wiring continueChoices vs CTA custom |
| **08.08 Nora proposition** | `930:10` | 50/50 + CTA Conserver | CTA `348×49` ; bandeau proposition | Action primaire | Badge « Proposition » | Conservation explicite → V4 | Binding conserve → reviseDocument |

## Interactions contractuelles (toutes frames)

1. Sélection ≠ ouverture (08.01).
2. Lecture seule, aucune édition Markdown Pilote (08.02+).
3. Historique : tags Courante/Historique = projection D4.
4. Comparateur replié par défaut ; déplié sur clic ; comparaison = vue dédiée.
5. Nora : fil unique ; version exacte en visionneuse ; confirmation historique ; conservation ≠ D6.

## Composants Figma réutilisables (symbols)

- `934:2` Rail actif Documents
- `934:37` Rail Travail
- `934:72` Barre projet
- `935:322` Action Primaire (348×49)
- `935:324` Action Secondaire
- `935:328` Carte sélectionnée (848×107)

## Tolérance

Viewport 1680×970 · zoom 100 % · deviceScaleFactor déclaré · delta géométrique cible **0** · F2 ≤ **2 CSS px** rectangles stables.

```

---

## 4. Blast radius / réutilisation

| Zone | Action |
|---|---|
| DocumentSurfaces | Surfaces Projet 08.01–08.06 ; Sas conserve DocumentInspector |
| page.tsx | États library/read/history/compare ; documentFocus → Nora |
| tokens.css | `.doc-workspace-7030` ~70/30 |
| reviseDocument | source/observedHead/confirmedHistorical |
| document-command / conversation service | Binding + focus |
| API documents + messages | Champs optionnels |
| TravailViewer | Banner historical/proposal |
| Journal / D6 / D9 / main | non touchés |

---

## 5. Inventaire des fichiers

### Diff stat (tracked)

```
 .../documents/[documentId]/route.ts                |  23 +-
 .../preparations/[preparationId]/messages/route.ts |  10 +
 .../web/src/app/projects/[projectId]/page.tsx      | 663 +++++++++++++-----
 .../web/src/components/figma/DocumentSurfaces.tsx  | 738 +++++++++++++++++++--
 .../web/src/components/figma/ProjectChrome.tsx     |  13 +-
 .../web/src/components/figma/TravailViewer.tsx     |  13 +
 .../web/src/components/figma/tokens.css            | 448 +++++++++++++
 .../web/src/domains/conversation/document-act.ts   |  48 ++
 .../src/domains/conversation/document-command.ts   |  69 +-
 .../web/src/domains/conversation/service.ts        |  57 +-
 .../web/src/domains/document/service.ts            | 125 +++-
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  26 +-
 12 files changed, 1996 insertions(+), 237 deletions(-)

```

### Créés (non trackés — contenu intégral §16)

- `projects/sfia-studio-next/web/tests/integration/documents-historical-revise.pg.test.ts`
- `projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts`
- `projects/sfia-studio-next/web/tests/e2e/documents-bibliotheque-08.spec.ts`

### Modifiés (diffs complets §17)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts`
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts`
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
- `projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx`
- `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`
- `projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css`
- `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/document-command.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/domains/document/service.ts`
- `projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts`

---

## 6. Implémentation fonctionnelle (résumé)

- Sélection ≠ ouverture ; lecture seule Projet sans textarea
- Historique 70/30 ; comparateur replié par défaut ; comparaison 50/50
- D4 : legacy BASE_STALE conservé ; protocole historique V2→V4 ; concurrence → V5
- documentFocus + barre confirmation historique ; pas de D6 / pas de publish Git

---

## 7. Tests exécutés

| Suite | Résultat |
|---|---|
| documents-historical-revise.pg.test.ts (4) | PASS |
| documents-surfaces-projection.test.ts (3) | PASS |
| document-command.test.ts (51) | PASS |
| ml2-knowledge-documents.pg.test.ts (6) | PASS |
| e2e documents-bibliotheque-08 | écrit ; capture Playwright scriptée à la place du run CI |
| e2e g4-b1-b4 | mis à jour ; non rejoué full CI |

---

## 8. Figma vs Runtime

Conditions: 1680×970, dsf=1, DEV :3100.

| Node | Capture runtime | Verdict |
|---|---|---|
| 930:3 | runtime-930-3-bibliotheque.png | ALIGNED (list/aside F2) |
| 930:4 | runtime-930-4-lecture.png | ALIGNED |
| 930:5 | runtime-930-5-travail-5050.png | PARTIAL (layout Travail existant) |
| 930:6 | runtime-930-6-historique-replie.png | ALIGNED |
| 930:7 | runtime-930-7-comparateur-deplie.png | ALIGNED |
| 930:8 | runtime-930-8-comparaison-5050.png | ALIGNED |
| 930:9 | runtime + barre confirm | PARTIAL |
| 930:10 | proxy travail | PARTIAL |

Géométrie 08.01 mesurée: rail 246 ; list x=284 w=927 ; aside x=1228 w=414.

---

## 9. Matrice UAT/TECH

DOC-UAT-01/02/04/05/06/07/09/10/11 PASS (browser script et/ou PG). DOC-UAT-03/08/13 PARTIAL. DOC-TECH-14/15/18 PASS. DOC-TECH-16 path code non isolé PG.

---

## 10. Fake/Real

Nora fixture FAKE (DEV). D4 PG DETERMINISTIC. Captures BROWSER/DEV. LIVE OpenAI NOT OBSERVED.

---

## 11. ENV-01 / versioning

DEV :3100 pour captures. RECETTE non altérée. STABLE N/A. Version numérique N/A. MINOR candidate non attribuée.

---

## 12. Réserves

1. Travail 50/50 Figma non pixel-aligné
2. 08.07/08.08 preuves visuelles partielles
3. documentFocus non persisté hors session React
4. e2e CI non rejoués
5. Contrat Git encore « candidat »

---

## 13. Verdict technique UNIQUE

### READY WITH RESERVES — MORRIS DECISION REQUIRED

Gate Morris: accepter réserves ou correctif ciblé ; GO distinct commit/PR/RECETTE ; ne pas clôturer Ensemble 06 sans gate Documents+Journal.

Instruction ChatGPT: relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` et confronter aux diffs/fichiers embarqués ci-dessous.

---

## 14. Handoff L3 — métadonnées

> Remplies après publication réussie dans le même cycle (ne pas laisser un SHA antérieur stale).

| Champ | Valeur |
|---|---|
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Commit | `PENDING_PUBLISH` |
| Blob | `PENDING_PUBLISH` |
| Push | fast-forward, sans force |
| Branche projet | intacte, non poussée |

---

## 15. Couverture Review Pack

Inventaire + **contenu complet des 3 fichiers créés** (§16) + **diffs git complets des 12 fichiers modifiés** (§17). Captures binaires non embarquées (chemins locaux `.tmp-sfia-review/documents-{figma,runtime}/`). Pas de secrets.

---

## 16. Contenu complet des fichiers créés

### CREATE `projects/sfia-studio-next/web/tests/integration/documents-historical-revise.pg.test.ts`

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
    expect(v4.baseRevisionId).toBe(v2.revisionId);

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
      expect(staleHistorical.actualLatestRevisionId).toBe(concurrentV4.revisionId);
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

### CREATE `projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { revisionCurrencyLabel } from "@/components/figma/DocumentSurfaces";
import {
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

describe("resolveReviseTarget with document focus", () => {
  const docs: DocumentListItem[] = [
    {
      document: { id: "doc-1", title: "Parcours" },
      latestRevision: {
        id: "rev-3",
        revisionNumber: 3,
        status: "AVAILABLE",
        contentMarkdown: "# V3\n",
      },
    },
  ];

  it("uses focused historical source when body provided", () => {
    const focus: DocumentReviseFocus = {
      documentId: "doc-1",
      sourceRevisionId: "rev-2",
      sourceRevisionNumber: 2,
      sourceContentMarkdown: "# V2\n",
      observedHeadRevisionId: "rev-3",
      observedHeadRevisionNumber: 3,
      confirmedHistoricalSource: false,
    };
    const target = resolveReviseTarget(docs, null, focus);
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseRevisionId).toBe("rev-2");
    expect(target.baseContent).toBe("# V2\n");
  });

  it("falls back to hint/latest when no focus", () => {
    const target = resolveReviseTarget(docs, "doc-1");
    expect(target.ok).toBe(true);
    if (!target.ok) throw new Error("expected ok");
    expect(target.baseRevisionId).toBe("rev-3");
  });
});

```

### CREATE `projects/sfia-studio-next/web/tests/e2e/documents-bibliotheque-08.spec.ts`

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

  // DOC-UAT-02/04 — open read-only, no textarea
  await page.getByTestId("doc-action-open").click();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
  await expect(page.getByTestId("document-read")).toBeVisible();
  await expect(page.getByTestId("document-readonly-banner")).toBeVisible();
  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

  // DOC-UAT-05/07 — history + comparator collapsed then expand
  await page.getByTestId("doc-action-history").click();
  await expect(page.getByTestId("document-history-surface")).toBeVisible();
  await expect(page.getByTestId("document-compare-controls")).toHaveCount(0);
  await page.getByTestId("doc-action-compare-toggle").click();
  await expect(page.getByTestId("document-compare-controls")).toBeVisible();
});

```


## 17. Diffs git complets des fichiers modifiés

Les diffs ci-dessous sont produits par `git diff HEAD -- <path>` depuis le worktree de livraison (HEAD documentaire `6516c7b5`, changements non commités).

### MODIFY `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts`

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

```

### MODIFY `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
index f7e845ec..e172b07e 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
@@ -34,6 +34,15 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       correlationKey?: string;
       clientTurnKey?: string;
       unresolvedPendingClientTurnKey?: string;
+      documentFocus?: {
+        documentId: string;
+        sourceRevisionId: string;
+        sourceRevisionNumber?: number;
+        sourceContentMarkdown?: string;
+        observedHeadRevisionId: string;
+        observedHeadRevisionNumber?: number;
+        confirmedHistoricalSource?: boolean;
+      } | null;
     };
     if (!body.content?.trim()) {
       return NextResponse.json(
@@ -49,6 +58,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
         correlationKey: body.correlationKey,
         clientTurnKey: body.clientTurnKey ?? body.correlationKey,
         unresolvedPendingClientTurnKey: body.unresolvedPendingClientTurnKey,
+        documentFocus: body.documentFocus ?? null,
         requestId,
       },
     );

```

### MODIFY `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index db39d5a5..d43dced3 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -13,10 +13,13 @@ import {
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
+  type DocumentComparePayload,
   type RevisionRow,
+  revisionCurrencyLabel,
 } from "@/components/figma/DocumentSurfaces";
 import {
   conversationalClientCommandKey,
@@ -77,6 +80,16 @@ type Surface =
   | "git"
   | "publication";
 type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";
+type DocView = "library" | "read" | "history" | "compare";
+type DocumentFocus = {
+  documentId: string;
+  sourceRevisionId: string;
+  sourceRevisionNumber?: number;
+  sourceContentMarkdown?: string;
+  observedHeadRevisionId: string;
+  observedHeadRevisionNumber?: number;
+  confirmedHistoricalSource?: boolean;
+};

 const SURFACES: Surface[] = [
   "travail",
@@ -161,7 +174,23 @@ export default function ProjectPage() {
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
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
   const draftVersionRef = useRef(0);
   const pilotIdRef = useRef<string | null>(null);
@@ -178,6 +207,9 @@ export default function ProjectPage() {
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
   const viewerOpenRef = useRef(false);
+  const docViewRef = useRef<DocView>("library");
+  const documentFocusRef = useRef<DocumentFocus | null>(null);
+  const readingLoadSeqRef = useRef(0);

   useEffect(() => {
     // Clear previous project identity immediately — no cross-project leak in the rail.
@@ -199,6 +231,12 @@ export default function ProjectPage() {
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
@@ -640,6 +678,26 @@ export default function ProjectPage() {
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
@@ -652,20 +710,36 @@ export default function ProjectPage() {
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
@@ -673,34 +747,217 @@ export default function ProjectPage() {
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
+  function applyDocumentFocus(focus: DocumentFocus) {
+    setDocumentFocus(focus);
+    documentFocusRef.current = focus;
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
+    applyDocumentFocus({
+      documentId: input.doc.document.id,
+      sourceRevisionId: input.sourceRevisionId,
+      sourceRevisionNumber: input.sourceRevisionNumber ?? undefined,
+      sourceContentMarkdown: input.sourceContentMarkdown ?? undefined,
+      observedHeadRevisionId: head.id,
+      observedHeadRevisionNumber: head.revisionNumber,
+      // Historical base requires explicit Pilot/Nora confirmation — never auto-confirm.
+      confirmedHistoricalSource: historical
+        ? input.confirmedHistoricalSource === true
+        : false,
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
@@ -709,26 +966,26 @@ export default function ProjectPage() {
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
+        setDocView("library");
+        setSelectedLibraryId(null);
       }
       return;
     }
@@ -1452,6 +1709,9 @@ export default function ProjectPage() {
           content: text,
           clientTurnKey,
           unresolvedPendingClientTurnKey: pendingBefore?.clientTurnKey,
+          ...(documentFocusRef.current
+            ? { documentFocus: documentFocusRef.current }
+            : {}),
         }),
       });
       let j: Record<string, unknown> = {};
@@ -1591,6 +1851,53 @@ export default function ProjectPage() {

   const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";

+  const docListItems = documents.map((d) => ({
+    document: { ...d.document, projectId: params.projectId },
+    latestRevision: d.latestRevision ?? null,
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
+              kicker: "DOCUMENTS / LECTURE",
+              title: inspect?.document.title ?? "Document",
+              sub: "Lecture seule — demandez une révision à Nora pour proposer une nouvelle version.",
+            }
+          : docView === "history"
+            ? {
+                kicker: "DOCUMENTS / HISTORIQUE",
+                title: "Historique des versions",
+                sub: inspect?.document.title
+                  ? `Versions de « ${inspect.document.title} » — une ancienne version reste lisible sans redevenir courante.`
+                  : "Versions conservées — lecture et reprise Nora sans substitution automatique.",
+              }
+            : {
+                kicker: "DOCUMENTS / HISTORIQUE / COMPARAISON",
+                title: "Comparer deux versions",
+                sub: "Confrontation lecture seule — aucune édition manuelle sur cette surface.",
+              };
+
+  const travailDocumentFocusBanner =
+    viewer?.kind === "document" &&
+    viewer.versionSource === "exact" &&
+    documentFocus?.confirmedHistoricalSource
+      ? ("historical" as const)
+      : viewer?.kind === "document" && viewer.versionSource === "exact"
+        ? ("historical" as const)
+        : null;
+
   return (
     <ProjectChrome
       projectId={params.projectId}
@@ -1599,6 +1906,7 @@ export default function ProjectPage() {
       statusHint={statusHint}
       loadState={projectLoadState}
       travailLayout={travailLayout}
+      documentHero={documentHero}
     >
       {surface === "projet" ? (
         <ProjectOverview
@@ -1613,6 +1921,57 @@ export default function ProjectPage() {
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
+                    })
+                  }
+                >
+                  Oui, partir de la version {documentFocus.sourceRevisionNumber ?? "historique"}
+                </button>
+                <button
+                  type="button"
+                  className="doc-action doc-action-secondary"
+                  data-testid="doc-use-current-head"
+                  onClick={() => {
+                    const match = documents.find((d) => d.document.id === documentFocus.documentId);
+                    if (!match?.latestRevision) return;
+                    void resumeNoraWithDocumentRevision({
+                      doc: match,
+                      sourceRevisionId: match.latestRevision.id,
+                      sourceRevisionNumber: match.latestRevision.revisionNumber,
+                      sourceContentMarkdown: match.latestRevision.contentMarkdown,
+                      confirmedHistoricalSource: false,
+                    });
+                  }}
+                >
+                  Non, utiliser la version courante
+                </button>
+              </div>
+            </div>
+          ) : null}
         <NoraConversation
           embeddedInStage
           messages={messages}
@@ -1649,6 +2008,7 @@ export default function ProjectPage() {
               <TravailViewer
                 resource={viewer}
                 enlarged={viewerEnlarged}
+                documentFocusBanner={travailDocumentFocusBanner}
                 onEnlarge={() => setViewerEnlarged(true)}
                 onReduce={() => setViewerEnlarged(false)}
                 onClose={closeViewer}
@@ -1744,6 +2104,7 @@ export default function ProjectPage() {
             )
           }
         />
+        </>
       ) : null}

       {surface === "pilotage" ? (
@@ -1786,124 +2147,128 @@ export default function ProjectPage() {
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
+              sourceContentMarkdown: match.latestRevision.contentMarkdown,
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
+      {surface === "document" && docView === "read" && inspect ? (
+        <DocumentReadSurface
+          title={inspect.document.title}
+          markdown={readingMarkdown}
+          missing={docMissing || null}
+          revisionLabel={
+            readingRevisionNumber != null ? `Version ${readingRevisionNumber}` : "Version"
+          }
+          currency={readCurrency}
+          loading={readLoading}
+          originOpen={originOpen}
+          onRequestRevision={() => {
+            const revId = readingRevisionId ?? inspect.latestRevision?.id;
+            if (!revId) return;
+            void resumeNoraWithDocumentRevision({
+              doc: inspect,
+              sourceRevisionId: revId,
+              sourceRevisionNumber: readingRevisionNumber ?? inspect.latestRevision?.revisionNumber,
+              sourceContentMarkdown: readingMarkdown ?? undefined,
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

```

### MODIFY `projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
index b1d50549..85872654 100644
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
@@ -17,8 +21,70 @@ export type RevisionRow = {
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
@@ -26,43 +92,13 @@ export function DocumentLibrary(props: {
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

@@ -74,12 +110,12 @@ export function DocumentHistory(props: {
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
@@ -108,12 +144,12 @@ export function DocumentHistory(props: {
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
@@ -128,6 +164,7 @@ export function DocumentHistory(props: {
   );
 }

+/** @deprecated Manual revise path — kept for Sas only; Projet Documents must not mount editor. */
 export function DocumentInspector(props: {
   frameId?: string;
   title: string;
@@ -246,3 +283,612 @@ export function DocumentInspector(props: {
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
+        value={
+          d.originLabel?.trim() ||
+          `Production Nora${props.projectName ? `  ·  ${props.projectName}` : ""}`
+        }
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
+              "Provenance D4 non résolue pour cette révision — aucun lien inventé."}
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
+}) {
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
+          <>
+            <div className="fig-alert" data-testid="document-readonly-banner">
+              Lecture seule — aucune édition manuelle. Demandez une révision à Nora pour proposer une
+              nouvelle version.
+            </div>
+            <div className="doc-read-body" data-testid="document-read-body">
+              <SafeMarkdown content={props.markdown} />
+            </div>
+          </>
+        ) : (
+          <p className="text-sm muted">Contenu indisponible.</p>
+        )}
+      </section>
+      <aside className="doc-panel doc-panel-aside" data-testid="document-read-aside">
+        <p className="doc-aside-kicker">DOCUMENT OUVERT</p>
+        <h3 className="doc-aside-title">{props.title}</h3>
+        <div className="doc-aside-divider" />
+        <MetaBlock label="VERSION" value={`${props.revisionLabel}  ·  ${props.currency}`} />
+        <div className="doc-aside-actions">
+          <DocActionButton
+            variant="primary"
+            label="Demander une révision"
+            onClick={props.onRequestRevision}
+            testId="doc-action-request-revision"
+          />
+          <DocActionButton
+            variant="secondary"
+            label="Historique"
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
+        {props.originOpen ? (
+          <div className="doc-provenance" data-testid="document-origin-panel">
+            <p className="doc-meta-label">ORIGINE</p>
+            <p className="text-sm muted">
+              {props.originText?.trim() ||
+                "Origine D4 non résolue — aucune référence inventée."}
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
+            {props.revisions.map((r) => {
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
+              Version A
+              <select
+                className="doc-select"
+                value={props.compareLeftId ?? ""}
+                onChange={(e) => props.onCompareLeft(e.target.value)}
+                data-testid="doc-compare-left"
+              >
+                <option value="">Choisir…</option>
+                {available.map((r) => (
+                  <option key={r.id} value={r.id}>
+                    v{r.revisionNumber}
+                  </option>
+                ))}
+              </select>
+            </label>
+            <label className="doc-select-label">
+              Version B
+              <select
+                className="doc-select"
+                value={props.compareRightId ?? ""}
+                onChange={(e) => props.onCompareRight(e.target.value)}
+                data-testid="doc-compare-right"
+              >
+                <option value="">Choisir…</option>
+                {available.map((r) => (
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

```

### MODIFY `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 05b45841..6369c410 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -32,9 +32,9 @@ const HERO: Record<
     sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
   },
   document: {
-    kicker: "Espace projet  /  Documents Nora",
-    title: "Bibliothèque",
-    sub: "Bibliothèque, inspection et révision sous autorité D4.",
+    kicker: "Espace projet  /  Documents",
+    title: "Bibliothèque du projet",
+    sub: "Retrouvez les documents durables du projet, leurs versions et les actions disponibles.",
   },
   git: {
     kicker: "Espace projet  /  Sources Git",
@@ -58,10 +58,15 @@ export function ProjectChrome(props: {
   loadState?: "loading" | "ready";
   /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
   travailLayout?: "normal" | "split" | "enlarged";
+  /** Documents sub-views (08.02–08.06) — overrides default Bibliothèque hero. */
+  documentHero?: { kicker: string; title: string; sub: string } | null;
   children: React.ReactNode;
 }) {
   const loadState = props.loadState ?? "ready";
-  const hero = HERO[props.surface];
+  const hero =
+    props.surface === "document" && props.documentHero
+      ? props.documentHero
+      : HERO[props.surface];
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
   const isTravail = props.surface === "travail";

```

### MODIFY `projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx b/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
index fdc16203..cee01cc1 100644
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
@@ -118,6 +120,17 @@ export function TravailViewer(props: {
       </header>

       <div className="fig-travail-viewer-body" data-testid="travail-viewer-body">
+        {props.documentFocusBanner === "historical" ? (
+          <div className="fig-alert" data-testid="document-focus-banner" role="status">
+            Version historique en contexte — Nora propose à partir de cette base sans remplacer la
+            version courante automatiquement.
+          </div>
+        ) : props.documentFocusBanner === "proposal" ? (
+          <div className="fig-alert" data-testid="document-focus-banner" role="status">
+            Proposition de révision en cours — le document courant reste la référence tant qu’une
+            nouvelle version n’est pas confirmée AVAILABLE.
+          </div>
+        ) : null}
         {!resource.available ? (
           <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
             {resource.unavailableReason ??

```

### MODIFY `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index f9c8640c..aae92892 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -1294,6 +1294,454 @@
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
 .fig-panel {
   background: color-mix(in srgb, var(--fig-panel) 92%, black);
   border: 1px solid var(--fig-line);

```

### MODIFY `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 3ca58197..76ae2111 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -314,15 +314,63 @@ export type ResolvedReviseTarget =
     }
   | { ok: false; reason: "NOT_FOUND" | "AMBIGUOUS" | "NO_AVAILABLE_REVISION"; candidates?: string[] };

+/** Optional Documents→Travail focus: exact drafting source may be historical. */
+export type DocumentReviseFocus = {
+  documentId: string;
+  sourceRevisionId: string;
+  sourceRevisionNumber?: number;
+  sourceContentMarkdown?: string;
+  observedHeadRevisionId: string;
+  observedHeadRevisionNumber?: number;
+  confirmedHistoricalSource?: boolean;
+};
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
+    const sourceContent =
+      focus.sourceContentMarkdown ??
+      (focus.sourceRevisionId === d.latestRevision.id
+        ? d.latestRevision.contentMarkdown
+        : null);
+    if (sourceContent == null) {
+      // Focus names a historical revision whose body is not in the list payload —
+      // return target with empty baseContent so caller can load via D4 read.
+      return {
+        ok: true,
+        documentId: d.document.id,
+        title: d.document.title,
+        baseRevisionId: focus.sourceRevisionId,
+        baseRevisionNumber: focus.sourceRevisionNumber ?? d.latestRevision.revisionNumber,
+        baseContent: "",
+      };
+    }
+    return {
+      ok: true,
+      documentId: d.document.id,
+      title: d.document.title,
+      baseRevisionId: focus.sourceRevisionId,
+      baseRevisionNumber: focus.sourceRevisionNumber ?? d.latestRevision.revisionNumber,
+      baseContent: sourceContent,
+    };
+  }
+
   if (hint) {
     const byId = available.filter((d) => d.document.id === hint);
     if (byId.length === 1) {

```

### MODIFY `projects/sfia-studio-next/web/src/domains/conversation/document-command.ts`

```diff
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

```

### MODIFY `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 4cfc23d6..d7e9fb8b 100644
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
@@ -758,6 +758,16 @@ export async function postUserMessageAndNora(
     requestId?: string;
     /** Client UX hint only — server DB siblings are authoritative for S05. */
     unresolvedPendingClientTurnKey?: string;
+    /** Documents→Travail focus: exact source revision (may be historical). */
+    documentFocus?: {
+      documentId: string;
+      sourceRevisionId: string;
+      sourceRevisionNumber?: number;
+      sourceContentMarkdown?: string;
+      observedHeadRevisionId: string;
+      observedHeadRevisionNumber?: number;
+      confirmedHistoricalSource?: boolean;
+    } | null;
   },
 ): Promise<TurnResult> {
   const requestId = opts?.requestId ?? newRequestId();
@@ -1717,7 +1727,26 @@ export async function postUserMessageAndNora(
       } else if (documentAct.kind === "REVISE" && !ownershipLostBeforeD4) {
         try {
           const docs = await listDocuments(pilotId, preparationId);
-          const target = resolveReviseTarget(docs, documentAct.documentHint);
+          const focus = opts?.documentFocus ?? null;
+          let target = resolveReviseTarget(docs, documentAct.documentHint, focus);
+          if (target.ok && focus?.sourceRevisionId && !target.baseContent) {
+            const loaded = await getDocumentRevision(
+              pilotId,
+              preparationId,
+              target.documentId,
+              focus.sourceRevisionId,
+            );
+            if (loaded.status === "AVAILABLE" && loaded.revision?.contentMarkdown) {
+              target = {
+                ...target,
+                baseRevisionId: loaded.revision.id,
+                baseRevisionNumber: loaded.revision.revisionNumber,
+                baseContent: loaded.revision.contentMarkdown,
+              };
+            } else {
+              target = { ok: false, reason: "NOT_FOUND" };
+            }
+          }
           if (!target.ok) {
             documentSave = {
               status: "FAILED",
@@ -1890,6 +1919,17 @@ export async function postUserMessageAndNora(
                     const clientSalt =
                       opts?.correlationKey?.trim() ||
                       `${target.documentId}:${target.baseRevisionId}`;
+                    const observedHeadId =
+                      focus?.observedHeadRevisionId ??
+                      docs.find((d) => d.document.id === target.documentId)?.latestRevision
+                        ?.id ??
+                      target.baseRevisionId;
+                    const sourceIsHistorical = target.baseRevisionId !== observedHeadId;
+                    const confirmedFromMessage =
+                      /\b(oui|confirme|confirmé|confirmer)\b/i.test(content) &&
+                      /\b(version|historique|base)\b/i.test(content);
+                    const confirmedHistoricalSource =
+                      focus?.confirmedHistoricalSource === true || confirmedFromMessage;
                     const admitted = admitDocumentCommand({
                       commandId: reserved.commandId,
                       operationId: reserved.operationId,
@@ -1899,6 +1939,19 @@ export async function postUserMessageAndNora(
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

```

### MODIFY `projects/sfia-studio-next/web/src/domains/document/service.ts`

```diff
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

### MODIFY `projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
index 3b41419b..bc7a58ea 100644
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
+  await expect(page.getByTestId("document-readonly-banner")).toBeVisible();
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
