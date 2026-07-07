# MVP Capitalization Report — Chantiers360 v2

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/09-capitalization/mvp-capitalization-report.md`  
**Date :** 2026-07-07  
**Branche :** `main` @ `bc3e097`  
**Type de cycle :** Capitalisation post-MVP — documentaire uniquement  
**Référence méthode :** `sfia-v2-incremental-delivery-closure-standard.md` — chaîne INC-n ; capitalisation INC-01 (`inc-01-capitalization-report.md`, PR #111)

---

## 1. Résumé exécutif

### **MVP CAPITALIZED WITH RESERVES**

Chantiers360 v2 a traversé le **cycle de vie projet complet** du pilote SFIA v2.0 : bootstrap → cadrage → architecture fonctionnelle → UX/UI → backlog → design Figma MVP → architecture technique → spike fidélité → delivery incrémental **INC-01 à INC-05** → QA-G3 / PR readiness / QA-G4 → clôtures documentaires. Le MVP est **fonctionnellement bouclé avec réserves** ; les 13 user stories P1/P2 du backlog initial sont couvertes par le code livré. Aucun cycle post-MVP (V0, micro-cycle réserves, design coverage, ADR/DAA/DAT) n'est lancé dans ce document.

---

## 2. Statut final du MVP

| Élément | Statut |
|---------|--------|
| **MVP delivery** | **Fonctionnellement bouclé avec réserves** |
| **INC-01** | CLOSED WITH RESERVES — PR #108–#110 |
| **INC-02** | CLOSED WITH RESERVES — PR #115–#117 |
| **INC-03** | CLOSED WITH RESERVES — PR #119–#121 |
| **INC-04** | CLOSED WITH RESERVES — PR #122–#124 |
| **INC-05** | CLOSED WITH RESERVES — PR #125–#127 |
| **Capitalisation INC-01** | Mergée PR #111 — `ff32170` |
| **Capitalisation MVP** | Ce rapport — cycle séparé post-clôture INC-05 |
| **Post-MVP** | Non lancé (hors capitalisation documentaire MVP) |

**Stack livrée :** Next.js App Router + PostgreSQL + Drizzle + Tailwind — auth différée ; infra test Docker port 5433 ; Playwright E2E cumulatif **16 passed** en fin de MVP.

---

## 3. Chronologie Git / PR

### Phase intention → design

| Phase | PR | Commit | Contenu |
|-------|-----|--------|---------|
| Bootstrap pilote | [#95](https://github.com/mcleland147/sfia-workspace/pull/95) | `c3ca02d` | Structure projet, framing initial |
| Cadrage détaillé | [#96](https://github.com/mcleland147/sfia-workspace/pull/96) | `e90e824` | Objectif, risques, critères succès |
| Architecture fonctionnelle | [#97](https://github.com/mcleland147/sfia-workspace/pull/97) | `4a5b2fa` | Domaines, navigation, états métier |
| UX/UI Markdown | [#98](https://github.com/mcleland147/sfia-workspace/pull/98) | `1d9feb9` | Screen map, wireframes, flux |
| Backlog MVP | [#99](https://github.com/mcleland147/sfia-workspace/pull/99) | `93d6810` | Epics, US-01 à US-13, INC-01 à INC-05 |
| Standard Design Figma | [#100](https://github.com/mcleland147/sfia-workspace/pull/100) | `7ee45bb` | Standard SFIA v2.0 design cycle |
| Design Figma P1 | [#101](https://github.com/mcleland147/sfia-workspace/pull/101) | `7e37b58` | 4 frames P1 validées Morris |
| Architecture technique | [#102](https://github.com/mcleland147/sfia-workspace/pull/102) | `57308aa` | Stack options, data model léger |
| Arbitrages Morris | [#103](https://github.com/mcleland147/sfia-workspace/pull/103) | `20d2941` | Option B + Drizzle + Tailwind actés |
| Figma Fidelity Spike | [#104](https://github.com/mcleland147/sfia-workspace/pull/104) | `87de625` | Dashboard pixel-close frame `38:502` |
| Alignement post-spike | [#105](https://github.com/mcleland147/sfia-workspace/pull/105) | `534637e` | Statut post-merge spike |
| Standard Figma gate | [#106](https://github.com/mcleland147/sfia-workspace/pull/106) | `7929cfd` | Capitalisation gate fidélité |
| Standard QA delivery | [#107](https://github.com/mcleland147/sfia-workspace/pull/107) | `cadf25a` | SFIA v2.0 Delivery QA/Test |

### Phase delivery incrémental

| Incrément | Delivery | QA-G4 | Clôture | Capitalisation |
|-----------|----------|-------|---------|----------------|
| **INC-01** | [#108](https://github.com/mcleland147/sfia-workspace/pull/108) `1b9e41f` | [#109](https://github.com/mcleland147/sfia-workspace/pull/109) `128d6fc` | [#110](https://github.com/mcleland147/sfia-workspace/pull/110) `2bbb699` | [#111](https://github.com/mcleland147/sfia-workspace/pull/111) `ff32170` |
| **INC-02** | [#115](https://github.com/mcleland147/sfia-workspace/pull/115) `c1c00b7` | [#116](https://github.com/mcleland147/sfia-workspace/pull/116) `aa52953` | [#117](https://github.com/mcleland147/sfia-workspace/pull/117) `af9c101` | — |
| **INC-03** | [#119](https://github.com/mcleland147/sfia-workspace/pull/119) `ebece11` | [#120](https://github.com/mcleland147/sfia-workspace/pull/120) `57c277b` | [#121](https://github.com/mcleland147/sfia-workspace/pull/121) `04e172c` | — |
| **INC-04** | [#122](https://github.com/mcleland147/sfia-workspace/pull/122) `9e9c124` | [#123](https://github.com/mcleland147/sfia-workspace/pull/123) `e124323` | [#124](https://github.com/mcleland147/sfia-workspace/pull/124) `3f7acfe` | — |
| **INC-05** | [#125](https://github.com/mcleland147/sfia-workspace/pull/125) `6fe91df` | [#126](https://github.com/mcleland147/sfia-workspace/pull/126) `6e5ec82` | [#127](https://github.com/mcleland147/sfia-workspace/pull/127) `bc3e097` | **Ce rapport** |

**Cycles transverses documentaires :** PR #114 — levée R-QA-02 (alignement backlog statut chantier) ; PR #113 — prompts QA SFIA v2.

---

## 4. Synthèse des incréments

| Incrément | Périmètre | US | Preuve clé | E2E cumulatif (QA-G4) |
|-----------|-----------|-----|------------|------------------------|
| **INC-01** | Socle chantier — liste, création, fiche, statut | US-01 à US-04 | App + Drizzle + PostgreSQL test | 4 passed |
| **INC-02** | Tâches et réserves | US-06 à US-09 | Tables `taches` / `reserves`, onglets fiche | 8 passed |
| **INC-03** | Jalons simples et retard | US-05, US-10 | Migration `0002_simple_milestones` | 10 passed |
| **INC-04** | Comptes rendus rapides | US-11 | Migration `0003_comptes_rendus` | 12 passed |
| **INC-05** | Prochaines actions dérivées | US-12, US-13 | `/prochaines-actions`, agrégation sans table dédiée | **16 passed** |

**Note INC-05 :** arbitrage prompt delivery vs repo — le **prompt delivery initial** proposait une table `prochaines_actions` ; le **repo / backlog / décisions fonctionnelles** indiquaient une logique de prochaines actions **dérivées**. Le delivery a donc retenu une **agrégation depuis les sources existantes** (tâches, réserves, jalons, retards). **Aucune table dédiée ni migration INC-05** n'a été créée. Décision validée par la chaîne QA et clôture.

---

## 5. Ce qui a bien fonctionné

| # | Succès | Détail |
|---|--------|--------|
| S1 | **Delivery incrémental** | 5 incréments livrés séquentiellement — scope borné, valeur cumulative |
| S2 | **QA-G3 / QA-G4** | Gates obligatoires — preuves avant PR, re-vérification post-merge |
| S3 | **PR readiness** | Rapports `pr-readiness-inc-0n.md` — périmètre, réserves, test plan avant chaque PR delivery |
| S4 | **Clôture documentaire séparée** | PR closure distincte de delivery et QA-G4 — statut CLOSED WITH RESERVES traçable |
| S5 | **Séparation delivery / validation / clôture** | Morris GO explicite à chaque étape L0 |
| S6 | **Arbitrage prompt vs repo (INC-05)** | Prompt delivery = table dédiée ; repo/backlog = logique dérivée — agrégation depuis sources existantes retenue |
| S7 | **Réserves acceptées sans blocage artificiel** | CLOSED WITH RESERVES = statut valide — pas de masquage des écarts |
| S8 | **Réutilisation spike Figma** | Dashboard INC-01 branché DB sans refonte UI complète |
| S9 | **Infra test reproductible** | Docker PostgreSQL 5433 + `test:e2e:full` dès INC-01 |
| S10 | **Standards méthode capitalisés en cours de route** | Figma gate (#106), QA delivery (#107), closure INC-01 (#111) |
| S11 | **Post-merge check read-only** | Contrôle systématique après merge QA-G4 et closure |
| S12 | **E2E cumulatif par incrément** | Régression INC-01+ à chaque livraison — 4 → 8 → 10 → 12 → 16 |

---

## 6. Frictions observées

| # | Friction | Impact | Traitement |
|---|----------|--------|------------|
| F1 | **Divergence `main` local / `origin/main`** | Contrôles sur mauvaise base si non synchronisé | Toujours `git fetch` + `origin/main` comme référence |
| F2 | **Réserves héritées** | R-QA-03 à R-QA-05 portées INC-01 → INC-05 | Acceptées — non bloquantes à la clôture |
| F3 | **Port 3000 / environnement** | R-QA-05 — `test:e2e:full` vs instance dev | Fallback port 3001 documenté ; E2E passent sur cycles QA |
| F4 | **Couverture design non systématique** | R-UX-01 — `/prochaines-actions` sans frame Figma | Acceptée INC-05 — extrapolation patterns UI |
| F5 | **Besoin règles ADR / DAA / DAT** | Décisions techniques dispersées dans docs projet | Cycle méthode séparé — non lancé |
| F6 | **Documentation volumineuse** | Multiples PRs docs par incrément (delivery + QA-G4 + closure) | Lisibilité maintenue par dossiers `07-delivery-inc-0n/` et `08-qa-test/inc-0n/` |
| F7 | **Multiples PRs par incrément** | Charge review Morris | Contrepartie : traçabilité forte — chaîne standard validée |
| F8 | **Écart prompt delivery initial / repo (INC-05)** | Prompt proposait table `prochaines_actions` — repo/backlog indiquaient dérivation | Agrégation depuis sources existantes — pas de table ni migration INC-05 |

---

## 7. Réserves restantes

| Réserve | Origine | Statut | Bloquante MVP ? |
|---------|---------|--------|-----------------|
| **R-UX-01** | INC-05 — écran `/prochaines-actions` sans frame Figma dédiée | Ouverte — acceptée | Non |
| **R-QA-03** | INC-01 — validation HTML5 `required` formulaire chantier | Ouverte — acceptée | Non |
| **R-QA-04** | INC-01 — panneaux dashboard droite mockés (spike) | Ouverte — acceptée | Non |
| **R-QA-05** | INC-01 — port 3000 / environnement E2E | Ouverte — environnementale | Non |

**Réserves levées en cours de MVP :** R-QA-01 (E2E Playwright), R-QA-02 (alignement backlog statut « En retard » — PR #114).

Aucune réserve bloquante à la capitalisation MVP.

---

## 8. Enseignements produit

| # | Enseignement |
|---|--------------|
| P1 | **MVP utile** — socle opérationnel chantier utilisable : liste, fiche, tâches, réserves, jalons, CR, prochaines actions |
| P2 | **Logique chantier complète** — chaîne `chantier → tâches → réserves → statut → jalons → CR → prochaines actions` tenue |
| P3 | **Prochaines actions dérivées** — agrégation sans saisie manuelle réduit la dette données et simplifie le modèle |
| P4 | **Extensions exclues avec clarté** — billing, espace client, planning avancé, IA — hors MVP documenté |
| P5 | **Trajectoire produit suivante non décidée** — capitalisation ≠ roadmap post-MVP |
| P6 | **Comparaison V0** — à traiter dans un cycle dédié fin de pilote uniquement — non consultée durant le MVP |

---

## 9. Enseignements méthode SFIA v2.0

| # | Enseignement |
|---|--------------|
| M1 | **Git = source de vérité** — prompts utiles mais inférieurs au repo versionné |
| M2 | **Morris = décisionnaire L0** — GO scope, PR, merge, clôture, capitalisation |
| M3 | **Cursor = exécuteur contrôlé L3** — cycles bornés, garde-fous stricts |
| M4 | **ChatGPT = routeur / cadre / analyste** — prompts, challenge, lecture rapports |
| M5 | **QA obligatoire avant PR readiness** — QA-G3 bloque la PR sans preuves |
| M6 | **Post-merge check utile** — confirme `main` = attente documentée |
| M7 | **Clôture séparée du delivery** — statut officiel CLOSED WITH RESERVES |
| M8 | **Capitalisation séparée de la clôture** — retour d'expérience post-MVP distinct de la clôture INC-05 |
| M9 | **Chaîne INC-n reproductible** — standardisée après INC-01 (PR #111) |
| M10 | **CLOSED WITH RESERVES ≠ échec** — statut valide pilote avec écarts acceptés |
| M11 | **Un cycle post-MVP à la fois** — éviter parallélisation V0 + réserves + design coverage |

---

## 10. Niveaux d'automatisation observés

| Niveau | Rôle observé sur le pilote | Exemples Chantiers360 v2 |
|--------|---------------------------|--------------------------|
| **L0** | Décisions Morris | GO INC-n, merge PR, clôture, capitalisation |
| **L1** | Contrôles | Post-merge check read-only, `git fetch`, vérification ancêtres |
| **L2** | Génération guidée | Docs framing, backlog, architecture, rapports QA/closure |
| **L3** | Exécution bornée Cursor | Delivery code, E2E, migrations, docs cycles |
| **L4** | Orchestration contrôlée | Enchaînement delivery → QA → PR → closure sur instruction Morris |
| **L5 global** | Hors cible | Pas d'automatisation bout-en-bout sans gates Morris |

---

## 11. Décisions post-MVP à prendre séparément

| # | Cycle | Statut |
|---|-------|--------|
| 1 | **Comparaison V0** | Non lancée — fin de pilote uniquement |
| 2 | **Micro-cycle réserves** R-QA-03 / R-QA-04 / R-QA-05 | Non lancé |
| 3 | **Design coverage / R-UX-01** | Non lancé — règles SFIA v2.0 à formaliser |
| 4 | **ADR / DAA / DAT** | Non lancé — cycle méthode séparé |
| 5 | **Trajectoire produit suivante** | Non décidée — extensions métier, auth, déploiement, etc. |

> **Invariant :** la capitalisation MVP **ne remplace pas** un GO produit post-MVP.

---

## 12. Recommandation finale

### **MVP capitalisé — choisir un prochain cycle unique**

1. **Ne pas lancer plusieurs cycles post-MVP en parallèle** — V0, réserves, design coverage et ADR/DAA/DAT sont indépendants mais consomment l'attention Morris.
2. **Ordre suggéré (non acté)** — au choix Morris :
   - comparaison V0 si fin de pilote SFIA v2.0 sur Chantiers360 ;
   - ou micro-cycle réserves si objectif qualité opérationnelle ;
   - ou formalisation design coverage si objectif méthode SFIA v2.0 ;
   - ou ADR/DAA/DAT si objectif gouvernance technique transverse.
3. **Git reste la source de vérité** — toute décision post-MVP = cycle documentaire ou delivery borné avec PR Morris.

---

## Documents sources

| Zone | Documents |
|------|-----------|
| Framing | `README.md`, `00-framing/project-framing.md` |
| Backlog | `03-backlog/delivery-increments.md` |
| Clôtures | `07-delivery-inc-01/` à `07-delivery-inc-05/inc-0n-closure-report.md` |
| QA-G4 | `08-qa-test/inc-01/` à `inc-05/qa-g4-post-merge-report.md` |
| Capitalisation INC-01 | `09-capitalization/inc-01-capitalization-report.md` |
| Méthode | `sfia-v2-incremental-delivery-closure-standard.md`, `sfia-v2-delivery-qa-test-standard.md` |

---

**Verdict capitalisation :** **MVP CAPITALIZED WITH RESERVES**
