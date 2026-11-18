# SFIA Review Pack FULL — F1–F5 Integrated Corrective (fidélité / topologie / relations)

**Date/heure :** 2026-11-18T03:55:00+01:00
**Cycle :** Delivery / EVOL Critical — correctif intégré F1–F5
**GO Morris :** 18/11/2026 (« go » après contrat préparé)
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT non commitée)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs ML4D :** `af0891fe` (doc 06 inclus)
**Handoff précédent :** `a55f95ea` / blob `cf6c8eb23b654d556720fcd1ef95f486d89c6abe`
**Review Pack :** Full — réinitialisé (aucun append)
**ENV :** DEV only · **NO RELEASE** · pas push produit / PR / merge / RECETTE / LIVE

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche locale | `sfia/next-ml4d-composition-adaptative` non poussée |
| HEAD | `a783f014` |
| merge-base origin/main | `997d4c4e` |
| Handoff distant avant | `a55f95ea` / `cf6c8eb2…` |
| Docs tip | `af0891fe` |
| STOP divergence | non |
| Mutations destructives | aucune (`reset`/`clean`/`stash` non utilisés) |

WT = socle convergence + mutations F1–F5 (fidelity claims, topology, deps layers, write schema, fixtures, T02/F5 captures).

---

## 2. Sources

- SFIA v2.6 routing / operating model / guardrails (main)
- Next SEF, ENV-01, versioning (main)
- Doc 06 @ `af0891fe` (CANDIDATE)
- Handoff `a55f95ea` (convergence READY WITH RESERVES) comme baseline
- Doctrine 30/33/34/35 (lecture)

---

## 3. Objectif livré

Fermer les réserves P0/P1 du contrat F1–F5 sans conflater :

1. **Fidélité** (claims ⊆ replyDraft)
2. **Topologie** (DAG / racine / cycles)
3. **Présentation** (CSS dirigé)
4. **Schéma write vs read**
5. **Preuves BROWSER** familles Figma 03/04/07/08/09

---

## 4. Mutations (chemins)

### F1 — Fidélité adversariale
- `web/src/domains/conversation/conversational-composition/fidelity.ts` — claims substance (pas titres seuls) ; `maySubstituteNarrative` ; préférence contradictoire
- `admission.ts` — narrative substitute gate ; bodyPolicy fail-closed
- Fixtures replyDraft élargis (S2/S3/S5) pour claims supportés

### F2 — Topologie
- `conversational-composition/topology.ts` — `validateDecisionTree|Dependencies|ParallelProcess` ; `topologicalLayers`
- `selectRelationsVariant` — topologie avant directed ; sinon list

### F3 — Relations dirigées
- `NoraComposition.tsx` — deps en couches topo + arêtes `data-directed=1`
- `tokens.css` — layers / accent flèche

### F4 — Write vs read
- `VisualCompositionAgentOutputSchema.schemaVersion` = `z.literal(conversational-composition-projection-v1)`
- `parseVisualComposition` conserve dual-read e05 + projection-v1
- Prompt adapter : WRITE projection-v1 only ; substance ⊆ replyDraft

### F5 — BROWSER
- Fixtures `E05_F5_DECISION_TREE` / `E05_F5_PARALLEL`
- T02 étendu : deps layers + tree + parallel + captures `f5-runtime-*.png`

### Preuves / journal
- `docs/evidence/.../f-matrix-fidelity-topology.md`
- `docs/evidence/.../f5-runtime-{dependencies-directed,decision-tree,parallel}-1440.png`
- `construction/delivery-history.md` (entrée F1–F5)

---

## 5. Tests

| Suite | Résultat |
| --- | --- |
| Vitest fidelity + admission | **24 PASS** |
| Vitest nora-live-output-schema (F4 write) | PASS (suite antérieure) |
| Playwright T02 (+ F5) | **1 PASS** (~24s) |
| Captures F5 | 3 PNG runtime |

---

## 6. Matrice F1–F5 (synthèse)

Voir `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f-matrix-fidelity-topology.md` — **tous PASS** avec réserves listées.

| Famille Figma | Runtime |
| --- | --- |
| 03 comparaison | S3 T02 + corrective comparison PNG |
| 04 matrice/détails | conservation cycle précédent (MAX_ALTS=12 + alt-detail) |
| 07 dépendances | `f5-runtime-dependencies-directed-1440.png` |
| 08 arbre | `f5-runtime-decision-tree-1440.png` |
| 09 parallèle | `f5-runtime-parallel-1440.png` |

---

## 7. Non-scope / non fait

- Commit / push produit / PR / merge
- RECETTE / STABLE / LIVE OpenAI
- Migration DB / Strategy A
- ELK / React Flow / ECharts
- Pixel-audit exhaustif Figma vs CSS (familles prouvées ; écarts de chrome Figma possibles)

---

## 8. Risques & réserves

1. Sync parallèle noté `↔` (sémantique sync) vs flèches `→` deps — assumé.
2. Heuristique préférence F1-01 = patterns FR déterministes, pas NLU.
3. Fixtures e05 schemaVersion en historique S* ; WRITE path = projection-v1 (F5 fixtures déjà projection-v1).
4. Produit toujours **LOCAL ONLY** (WT dirty).

---

## 9. Verdict

**READY WITH RESERVES** — F1–F5 exécutés en DEV ; preuves unit + T02/BROWSER ; pas de promotion.

**Next Morris :** revue ChatGPT L3 → décision commit local éventuel / suite UAT ; **pas** de push produit sans GO distinct.

---

## 10. ACK attendu (ChatGPT)

Confirmer : (a) claims ≠ ancres titres ; (b) topologie ≠ fidélité ≠ CSS ; (c) write projection-v1 / read dual ; (d) captures F5 familles 07/08/09.
