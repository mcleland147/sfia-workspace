# SFIA Review Pack — FULL

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-19 ~13:40 CET |
| Cycle | 8 — Delivery / implémentation corrective |
| Profil | CRITICAL |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 |
| Typologie | UX CORRECTIVE / CONFORMANCE / QA / RECETTE |
| Versioning | **NO RELEASE** — STABLE NOT AVAILABLE |
| Review Pack | FULL |
| Review Handoff | REQUIRED / PUBLISH-IN-CYCLE |

---

## 1. Source Git et vérifications

| Contrôle | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-journal-delivery-20261119` |
| Remote | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-journal-delivery-20261119` |
| HEAD initial (pixel) | `6c658f9124b3ada48fb01047b2b0ffb7fa5703c3` |
| Tree initial | `fa420659cd652953435c3b53a5b6d783accae745` |
| HEAD final gelé | `3fc8af5fe97e2d03d139854d008b4724ab4cbd5c` |
| Tree final | `57cdb89a693a58ff5c1098d762a22f1e1372c401` |
| Base `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Push produit | **AUCUN** |
| Matrice v0.7 | **non modifiée** (lecture seule) |

Commit gel :

```
fix(next): Journal V4 final Figma label and liseré conformance
```

Fichiers du gel (hors as-built post-cutover) :

- `projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css`
- `projects/sfia-studio-next/web/tests/e2e/journal-v4-figma-captures.spec.ts`
- `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

Artefacts `.tmp-sfia-review/**` : **préservés, non commités**.

---

## 2. Extraction Figma (MCP) — libellés statiques

Fichier `itgvCulInEnFY6DvgIegvP` · page `828:2` · onze frames.

| Frame | Parcours | Libellés statiques contractuels (extrait) |
|---|---|---|
| `835:71` | Exploration | Journal · Sujets/Décisions · THÈMES DU PROJET · Points ouverts |
| `842:26` | Autonome 40/60 | LA SYNTHÈSE · CE QU’ON RETIENT · À ÉCLAIRCIR · CONTINUER LE TRAVAIL |
| `842:131` | Parent 40/60 | LA SYNTHÈSE · EXPLORER LES SOUS-SUJETS · LA VISION GLOBALE |
| `835:159` | Autonome agrandi | LA SYNTHÈSE · CE QU’ON RETIENT · À ÉCLAIRCIR · ÉCHANGE DE RÉFÉRENCE · REPÈRES DU SUJET · SOURCES ET HISTORIQUE · POUR ALLER PLUS LOIN |
| `835:239` | Parent agrandi | PARCOURS DU THÈME / SOUS-SUJETS · REPÈRES DU SUJET |
| `859:42` | Recherche | SYNTHÈSE ACTUELLE · POURQUOI CE SUJET · CHEMIN D’ORIGINE · RÉFÉRENCE ESSENTIELLE |
| `859:146` | Points ouverts | POINTS SIGNIFICATIFS ENCORE OUVERTS · QUESTION ENCORE OUVERTE · CONTEXTE DU SUJET · ORIGINE ET SUIVI |
| `860:58` | Décisions nominales | DÉCISIONS DURABLES DU PROJET · statuts D6 |
| `860:136` | Décision 40/60 | LE CHOIX RETENU · LE RAISONNEMENT… · CONTEXTE ET SOURCES… |
| `860:251` | Recherche décisions | même structure lecteur décision |
| `860:360` | Décision agrandie | REPÈRES DE DÉCISION · AUTORITÉ / SOURCE · PORTÉE / VALIDITÉ · ÉVOLUTIONS |

Preuves PNG Figma : `.tmp-sfia-review/figma-v4-frames/`
Contrat visuel : `.tmp-sfia-review/figma-v4-visual-contract.md`

---

## 3. Table de correspondance Figma → Runtime (statique)

| Frame | Section Figma | Texte Figma | Runtime (COPY / UI) | Verdict |
|---|---|---|---|---|
| 842:131 | Parent explorer | EXPLORER LES SOUS-SUJETS | COPY exact | CORRIGÉ |
| 842:131 | Parent vision | LA VISION GLOBALE | COPY exact (≠ REPÈRE PARENT) | CORRIGÉ |
| 835:239 | Parent parcours | PARCOURS DU THÈME / SOUS-SUJETS | COPY exact | CORRIGÉ |
| 835:159 / 239 | Aside | REPÈRES DU SUJET | COPY exact | CORRIGÉ |
| 835:159 | Aside | SOURCES ET HISTORIQUE · POUR ALLER PLUS LOIN | COPY exact | CORRIGÉ |
| 859:42 | Recherche | SYNTHÈSE ACTUELLE · POURQUOI CE SUJET · CHEMIN D’ORIGINE · RÉFÉRENCE ESSENTIELLE | COPY exact | CORRIGÉ |
| 859:146 | Points | POINTS SIGNIFICATIFS… · QUESTION… · CONTEXTE… · ORIGINE ET SUIVI | COPY exact | CORRIGÉ |
| 860:360 | Décision | LE CHOIX RETENU · LE RAISONNEMENT QUI A CONDUIT AU CHOIX · CONTEXTE ET SOURCES ESSENTIELLES · REPÈRES DE DÉCISION · AUTORITÉ / SOURCE · PORTÉE / VALIDITÉ · ÉVOLUTIONS | COPY exact (≠ POURQUOI CE CHOIX / REPÈRES générique) | CORRIGÉ |
| * | Contenu métier | titres / synthèses / D6 | données réelles Journal | PRÉSERVÉ |
| C09 | Liserés | barre accent | padding ≥18px · overlap assert | CORRIGÉ |
| C10 | Empty | panneau compact | flex 0 0 auto · height &lt;320 | CORRIGÉ |

---

## 4. Diffs utiles (résumé)

**ProjectJournal.tsx** — réconciliation objet `COPY` et sections C01–C08 (parent ≠ autonome ; recherche ; points ouverts ; décision agrandie).

**tokens.css** — liserés hors texte ; `.journal-empty { flex: 0 0 auto; }`.

**journal-v4-figma-captures.spec.ts** — oracles de libellés exacts + géométrie empty + absence de chevauchement liseré.

---

## 5. Tests

| Suite | Résultat |
|---|---|
| TypeScript `tsc --noEmit` | PASS |
| Playwright Journal V4 captures + parcours + seed gate | **3/3 PASS** (~25.8s) — `/tmp/pw-final-ux.txt` |
| Captures runtime 1680×970 (11 + empty) | `.tmp-sfia-review/figma-ux-after/` · `capture-report.json` ok=true |
| Distinctions parent ≠ leaf | leaf=`Continuité Git` · parent=`Architecture cible` |
| Fixtures en production RECETTE | 403 `E2E_FIXTURE_FORBIDDEN` |

Comparaison visuelle frame-par-frame : Figma PNGs vs runtime PNGs dans `.tmp-sfia-review/`. Différences de **données illustratives** tolérées. Différences de **libellés statiques / sections / chevauchement** : bloquantes → corrigées et oracle-assertées. Revue esthétique finale : **Morris UAT**.

---

## 6. RECETTE — identité post-cutover

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `3fc8af5fe97e2d03d139854d008b4724ab4cbd5c` |
| BUILD_ID (fichier + HTML) | `VkuCNyaO0VIUbNtM2KJfO` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble06-recette-build-3fc8af5f` |
| Service / PID | `com.sfia.studio.next.recette.ml4d-ux004` / launchd pid 33153 · node 33168 |
| DB (non secret) | `sfia_next_recette_ml4` · host `127.0.0.1:5434` · rôle `sfia_next_recette_ml4` |
| Schéma 014 | présent (tables revisions / open_point_events) — **aucune migration nouvelle** |
| Données | projects=23 · messages=560 · conversations=196 · knowledge_subjects=4 |
| Backup dump | `…/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump` |
| Rollback | `…/3fc8af5f/ROLLBACK-TO-d5bf7eb7.sh` → `PV12SV9VToVGK-ReSxTqk` |
| Préflight | dérive ML3/`ZCk…` sur :3200 ; KeepAlive concurrents bootout temporaire (plists conservés) |

### Smoke technique

- `/login` 200 · BUILD_ID HTML = `VkuCNyaO0VIUbNtM2KJfO`
- DEV test login → portfolio OK
- Projet historique ouverture · API journal 200 · clés knowledge/decisions/restrictions
- Journal non auth → 401
- Fixtures E2E → 403
- Aucune injection fixture / seed RECETTE
- Compteurs DB inchangés après bascule

Preuves : `.tmp-sfia-review/recette-smoke-final-20261119/`

---

## 7. Couverture produit (impact)

| Obligation | Statut |
|---|---|
| J-C01–J-C16 (libellés / compositions / empty / liserés touchés) | IMPLEMENTED + COVERAGE VERIFIED (oracles) |
| Comportements parcours / recherche / points / décisions | BEHAVIOR PROVEN (Playwright E2E) |
| RECETTE | RECETTE TECHNICALLY AVAILABLE |
| UAT Morris | MORRIS UAT PENDING |

Hors impact non réouvert : LIVE Nora, REAL Git externe, Gate C, STABLE, ADOPTED.

---

## 8. Interdictions contrôlées

| Interdit | Statut |
|---|---|
| Push produit / PR / merge / main | Respecté |
| Matrice v0.7 / SEF / Roadmap / ADR | Non modifiés |
| Figma redesign | Non |
| Nouvelle RECETTE / DB / migration | Non |
| Mutation D6 / fixtures RECETTE | Non |
| Gate C / STABLE / ADOPTED | Non |

---

## 9. Gaps / réserves

- Revue visuelle esthétique finale = **Morris** (pas revendiquée ALIGNED 11/11 esthétique).
- Agents LaunchAgent concurrents (ml3/ml4/…) ont été déchargés pour libérer `:3200` ; plists intacts — réactivation hors mandat Journal si besoin.
- Portfolio Pilot A n’expose qu’un sous-ensemble des 23 projets (ownership) — compteurs DB globaux préservés.

---

## 10. Verdict

**JOURNAL V4 CORRECTIVE DELIVERY VERIFIED — RECETTE TECHNICALLY AVAILABLE — MORRIS UAT PENDING**

Décisions Morris encore requises : réception visuelle/fonctionnelle UAT sur `http://127.0.0.1:3200` ; arbitrage éventuel sur réactivation des autres lanes RECETTE (ml3/ml4) hors port 3200.
