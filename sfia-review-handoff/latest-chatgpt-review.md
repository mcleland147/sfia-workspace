# SFIA Studio Next — FULL Review Pack
## Ensemble 06 / Journal V4 — Dernier correctif de consolidation
**Processus** SFIA v2.6 · **Cycle** DELIVERY CORRECTIF INTÉGRÉ · **Profil** CRITICAL  
**Date** 2026-11-19 · **NO RELEASE** · **NO PRODUCT PUSH/PR/MERGE** · **STABLE NOT AVAILABLE**

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Repo local | `/Users/morris/Projects/sfia-wt-journal-delivery-20261119` |
| Branche | `sfia/next-journal-delivery-20261119` |
| HEAD code consolidation | `02e24e4292733a85ae1c4f506971909b1849d4b4` |
| Tree | `fc89dad4749f8d85b2d8d9d0b9b6bcadbe697a54` |
| Docs cutover follow-up | *(commit docs as-built après cutover)* |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Matrice docs | `sfia/next-journal-conception-fonctionnelle-ux-20261119` @ `f0d2d033` (lecture seule) |
| Publication produit | **NON** — candidat local uniquement |

### Pré-check

- Branche et worktree compatibles avec le mandat.
- Untracked : `.tmp-sfia-review/`, script investigate WIP — hors pack.
- Modified WIP non inclus : `campusnova-unknown-dev-investigate.mts`.

---

## 2. Sources / décisions applicables (lecture)

- governance SEF / roadmap / ENV-01 / product-versioning (NO RELEASE)
- R2 D3/D4/D6 · R3 UX Journal · contrats Journal (matrice v0.7 lecture seule)
- Figma Journal V4 page 828:2 (référence visuelle, non modifiée)
- Gel E05 maintenu · Nora textuelle maintenue · D6 autorité unique

---

## 3. Causes racines

### 3.1 Synthèse absente malgré acquis à jour (UAT CampusNova)

**PROUVÉ** : `maybeCapitalizeFromExchange` n’appelait `appendSubjectSummaryRevision` / `writeSubjectSummary` que pour `p.kind === "SUBJECT"`.  
Un tour riche en `ACQUIS` (avec `subjectId` / `subjectTitle`) mettait à jour les acquis **sans** synthèse courante → UI « Synthèse non encore disponible. »

Fichier : `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`

### 3.2 Densité / scannabilité

Acquis et ouverts affichés en paragraphes longs, sans priorisation nominale ni overflow contrôlé.  
Contrat : bullets courts en restitution ; **pas** de troncature d’autorité en base.

### 3.3 UX résiduelle

- CTA « Poursuivre avec Nora » dupliqué en vue agrandie (bas + aside).
- Aside sources : `message · HISTORICAL` non utile.
- Journal→Travail : `focusLock` relâché à la fin du highlight → stick-to-bottom pouvait reprendre.

### 3.4 (Hors mandat UAT mais livré juste avant)

UNKNOWN LIVE immédiat (fp `b7feb141`) causé par schéma LIVE `z.preprocess` incompatible Agents SDK — corrigé en ZodObject plain + non-stream (`9ef214ad`), conservé dans l’historique de branche.

---

## 4. Correctifs livrés (code)

### D4 — synthèse révisable après ACQUIS

Après capitalisation d’acquis `AVAILABLE` sur un sujet, **si** aucune synthèse SUBJECT explicite du même tour :

1. Charger acquis CURRENT + ouverts OPEN du sujet
2. `composeSubjectSummaryFromCurrentKnowledge` (déterministe, ~400–650 car.)
3. `appendSubjectSummaryRevision` (idempotent, skip `NO_SIGNIFICANT_CHANGE`)

Pas de génération à l’ouverture Journal. Pas de faux texte frontend.

### Éditorial (module client-safe)

Nouveau : `journal-editorial.ts` — importable depuis `ProjectJournal` **sans** tirer `service.ts` / `node:crypto` (régression Playwright web bundler évitée).

- Storage soft max 2000 + strip preamble
- Display bullet ≈160
- Priorisation acquis (6) / ouverts (4) + overflow `<details>`

### UX

- Agrandi : CTA bas retiré ; aside conservé
- Aside sources : contributions liées + provenance Pilote/Nora + révision synthèse
- `useNoraThreadScroll` : suppress sticky jusqu’à `forceStickToken` (envoi) ou thread vide

---

## 5. Preuve de synthèse révisable

Test PG : `journal-d4-revisions.pg.test.ts`  
« ACQUIS-only enrichment on existing subject creates/revises synthesis without SUBJECT intent » — **PASS**

Scénario : sujet créé → synthèses effacées en fixture → ACQUIS seuls → `subject_summary` + markdown non vide contenant faits Lille.

Tests existants SUBJECT revision / supersession / no-op — **PASS** (18 tests fichier).

---

## 6. Qualité acquis / ouverts / densité

Unit : `journal-editorial-density.test.ts` — **PASS** (5)  
E2E : bullets + aside sources + CTA unique agrandi — assertés dans `journal-v4-parcours.spec.ts` — **PASS**

---

## 7. Préservation données

- Aucune migration DB
- Aucun backfill CampusNova
- Compteurs RECETTE avant/après cutover : projects=24 · messages=606 · knowledge_subjects=6 — **COUNTERS_OK**
- Dump : `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-02e24e42/sfia_next_recette_ml4.dump`
- Rollback : `…/recette-build-02e24e42/ROLLBACK-TO-9ef214ad.sh`

**Dette bornée** : sujets CampusNova déjà sans synthèse ne se réparent qu’à la **prochaine capitalisation significative** (pas d’ouverture Journal). Exit : GO séparé si réconciliation historique exigée.

---

## 8. Navigation exacte Journal→Travail

- Suppress sticky après deep-link jusqu’à envoi volontaire
- Playwright : focus early message + wait 2.8s post-highlight + bounding box encore dans viewport — **PASS**

---

## 9. Tests (gates)

| Gate | Résultat |
|---|---|
| TypeScript `tsc --noEmit` | **PASS** |
| ESLint fichiers touchés | **PASS** |
| Unit editorial + freeze | **PASS** |
| PG `journal-d4-revisions` | **PASS** (18) |
| Playwright `journal-v4-parcours` | **PASS** (2) |
| LIVE auto | **NOT RUN** (interdit) |
| Morris UAT CampusNova | **PENDING** |

---

## 10. RECETTE (ENV-01)

| Champ | Valeur |
|---|---|
| URL | http://127.0.0.1:3200 |
| SOURCE_SHA | `02e24e4292733a85ae1c4f506971909b1849d4b4` |
| BUILD_ID | `7yhVJFP0_Bm4cYc62Bo7` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble06-recette-build-02e24e42` |
| DB | `sfia_next_recette_ml4` @ 5434 |
| login smoke | HTTP 200 |
| E05 textuel | conservé (gel) |

---

## 11. Diffs exploitables (fichiers)

```
projects/sfia-studio-next/web/src/domains/knowledge/service.ts
projects/sfia-studio-next/web/src/domains/knowledge/journal-editorial.ts  (new)
projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
projects/sfia-studio-next/web/src/components/figma/tokens.css
projects/sfia-studio-next/web/src/hooks/useNoraThreadScroll.ts
projects/sfia-studio-next/web/tests/unit/journal-editorial-density.test.ts  (new)
projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
projects/sfia-studio-next/construction/delivery-history.md
```

Relire : `git show 02e24e42` dans le worktree local.

---

## 12. Instruction de vérification distante (ChatGPT) — CRITICAL §9.1

1. Cloner / checkout la branche handoff L3 et lire `sfia-review-handoff/latest-chatgpt-review.md`.
2. Vérifier que le SHA/blob distant correspond au pack.
3. Contrôler la cause SUBJECT-only vs correctif ACQUIS→synthèse.
4. Confirmer : pas de push produit, pas de migration, pas de backfill CampusNova.
5. UAT Morris : ouvrir CampusNova Journal après **un nouvel échange capitalisant** sur « Parcours de réservation… » — synthèse doit apparaître/réviser ; acquis en bullets ; focus source stable.

---

## 13. Verdict Cursor

**JOURNAL V4 CONSOLIDATION VERIFIED — RECETTE TECHNICALLY AVAILABLE — MORRIS UAT PENDING**

Non annoncé : ADOPTED · Gate C · STABLE · réception utilisateur.
