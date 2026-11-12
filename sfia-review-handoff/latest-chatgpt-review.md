# SFIA Studio Next — Review Pack FULL
## R5 / ML4C — DOC GATE — Consolidation documentaire (candidat LOCAL)

- **Date/heure**: 2026-11-12 15:53:55 CET
- **Cycle**: 13 — PR Readiness, spécialisation documentaire
- **Profil**: CRITICAL
- **Typologie**: DOC / GOVERNANCE / CONFORMANCE
- **Worktree docs**: `/Users/morris/Projects/sfia-workspace-docs-next-ml4c-documentary-gate-20261112`
- **Branche locale**: `docs/next-ml4c-documentary-gate-20261112` @ `6d237452680640324eeadbb18f4601fd7de99850` (= `origin/main`)
- **Produit local inchangé**: `83fd9ecef2d952c90a828d68a192e105c83be35f` sur `fix/next-semantic-intent-convergence-20261112`
- **PR #676 head distant**: `2416e2ee25662821b015407346c64ec204f67488`
- **Source docs historique**: `8b41fe1640a61f531a449ced67b1d27f7dbace1e`
- **Handoff précédent**: `77fda513156681ae65838925f5d1dfac3eecf8e1`
- **Commit projet**: **AUCUN**
- **Push projet / PR / merge**: **AUCUN**
- **Verdict Cursor**: **DOCUMENTARY GATE CANDIDATE — READY WITH RESERVES**
- **Non-déclarations**: DOC GATE APPROVED BY MORRIS · DOCUMENTS MERGED · PRODUCT INTEGRATED · ML4C ACCEPTED · GATE C CLOSED · ADOPTED · READY FOR REAL

---

## 1. Git Truth Check

| Check | Valeur |
| --- | --- |
| origin/main | `6d237452680640324eeadbb18f4601fd7de99850` (= attendu) |
| docs source | `8b41fe1640a61f531a449ced67b1d27f7dbace1e` (= attendu `8b41fe16…`) |
| PR head | `2416e2ee25662821b015407346c64ec204f67488` (= `2416e2ee…`) |
| produit local | `83fd9ecef2d952c90a828d68a192e105c83be35f` (= `83fd9ece…`) parent `2416e2ee` tree `bed6bff5` **vérifié localement** |
| handoff prev | `77fda513156681ae65838925f5d1dfac3eecf8e1` blob `0d76982e…` |
| docs vs main | 44 ahead / 5 behind |
| collision branche | **ABSENTE** avant création |
| worktree docs | créé depuis `origin/main` — isolé |
| produit / A-006 WT | **préservés** ; aucun reset/clean/stash/rebase |

### status docs WT

```
 M projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
 M projects/sfia-studio-next/construction/reconciliation-produit/README.md
 M projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
 M projects/sfia-studio-next/governance/roadmap.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/qualification-cp2.md
?? projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md
?? projects/sfia-studio-next/governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md
?? projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md

```

---

## 2. Sources lues

| Source | Blob / ref |
| --- | --- |
| SEF main | `ef85ba1e…` |
| roadmap main | `556686dc…` |
| ENV / versioning / naming | main |
| SFIA routing / template / OM | main `3315bbae…` / `f4fdb488…` |
| prior handoff git readiness | `77fda513` / `0d76982e…` |
| 14 allowlist blobs source | tous **BLOB_OK** vs contrat |

---

## 3–4. Matrice des 14 fichiers

| ID | PATH | BLOB SOURCE | MAIN | AUTORITÉ | RÔLE | ACTION | JUSTIFICATION | MODIF | GATE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A1 | decisions/…ux-trajectoire.md | `a9f78231…` | ABSENT | Morris décision | trajectoire ML4C/ML4D | **IMPORT EXACT** | contenu validé | aucune | D2 revue si publication |
| A2 | decisions/…gate-b….md | `c4a0337f…` | ABSENT | Morris décision | Gate B reserves | **IMPORT EXACT** | idem | aucune | D2 |
| A3 | decisions/…qualification-semantique….md | `ebaa5665…` | ABSENT | Morris décision | sémantique Nora | **IMPORT EXACT** | idem | aucune | D2 |
| B1 | cahier-recette… | `27475cf3…` | ABSENT | cahier approuvé | 53 cas | **IMPORT EXACT** | ne pas altérer attendus | aucune | — |
| B2 | conception-qualification… | `88f387aa…` | ABSENT | conception validée | spec | **IMPORT EXACT** | conserver NO BUILD GO historique | aucune (CURRENT via Roadmap) | — |
| B3 | contrat-convergence… | `8cfd6fd4…` | ABSENT | contrat ML4C | S01–S07 | **IMPORT EXACT** | | aucune | D2 |
| B4 | contrat-technique… | `647bbca8…` | ABSENT | contrat tech | T-01.. | **IMPORT EXACT** | conserver NON IMPLÉMENTÉ historique | aucune | — |
| B5 | design-correctif… | `a14d4361…` | ABSENT | design S02/S03 | vérité effets | **IMPORT EXACT** | | aucune | — |
| B6 | journal-recette… | `fa794105…` | ABSENT | journal | S02-01 FAIL / A-006/007 | **IMPORT EXACT** | observations réelles | aucune | — |
| B7 | qualification-cp2.md | `1533343e…` | ABSENT | CP2 | qualification | **IMPORT EXACT** | | aucune | — |
| C1 | convergence-ux…/qualification.md | `99d8130a…` | DIFFère | historique UX | A1–A3 | **ADAPT = docs blob** | addendum trajectoire 11/11 utile | +2 lignes docs | — |
| C2 | reconciliation-produit/README.md | `3aa8b5a5…` | DIFFère | historique ML4B | CP1 | **ADAPT = docs blob** | Gate B postérieur | +4 | — |
| C3 | synthese-r1-e2e-gate-b.md | `53850453…` | DIFFère | historique | options A/B/C | **ADAPT = docs blob** | lecture historique | +8/−1 | — |
| D1 | governance/roadmap.md | main `556686dc` + ADAPT | EXISTE | Roadmap vivante | CURRENT | **ADAPT CANDIDATE** | pas copie aveugle docs `34a72193` | +33 lignes CURRENT | **Critical Review Morris** |

**EXCLUDE JUSTIFIED :** aucun des 14. Aucun UNKNOWN silencieux.

**Hors allowlist :** aucun fichier touché.

---

## 5. Diff main ↔ docs source (contexte)

14 chemins : 10 A (nouveaux) + 4 M (C1–C3 + roadmap) — confirmé `git diff --name-status origin/main...docs-source`.

---

## 6–7. Stratégie / worktree

- Pas de merge/cherry-pick/rebase des 44 commits docs.
- Worktree neuf depuis `origin/main`.
- Import **byte-for-byte** A+B (+ C depuis blobs docs).
- Roadmap : base main + bloc CURRENT daté + snapshots historiques CP2.

---

## 8–9. Retenus / exclus

**Retenus :** 14/14 allowlist.
**Exclus hors allowlist :** N/A.
**As-built produit :** volontairement **non** importé (reste dans `83fd9ece`).

---

## 10. Importations exactes

13 fichiers hash-identiques aux blobs source (A1–A3, B1–B7, C1–C3). Vérifiés `git hash-object` == `git rev-parse docs-source:path`.

---

## 11–13. Modifications candidates + diffs + créations

### Roadmap (seul ADAPT non-identique à un blob source)

Blob candidat local : `8e91c600aa4c0cb215fe6516f5832906f605295c` (≠ main, ≠ docs).

```diff
diff --git a/projects/sfia-studio-next/governance/roadmap.md b/projects/sfia-studio-next/governance/roadmap.md
index 556686dc..8e91c600 100644
--- a/projects/sfia-studio-next/governance/roadmap.md
+++ b/projects/sfia-studio-next/governance/roadmap.md
@@ -1,5 +1,38 @@
 # SFIA Studio Next — Living Roadmap

+> **ÉTAT COURANT R5 — DOC GATE CANDIDATE (12/11/2026 ; branche locale `docs/next-ml4c-documentary-gate-20261112` basée sur `origin/main@6d237452`)** : consolidation documentaire des décisions et contrats ML4C déjà validés en contenu par Morris sur `docs/next-r5-ml4c-cp2-preparation-20261111@8b41fe16`, **sans publication projet**. Trajectoire inchangée : **ML4B → ML4C → ML4D → Gate C → ML5 → R6**. Gate C **OPEN**. **Aucun DOC GATE APPROVED, merge, PR ouverte, ADOPTED, READY FOR REAL, STABLE ou release.**
+
+### Correspondance avec le candidat produit LOCAL (non intégré)
+
+| Qualification | Statut factuel |
+| --- | --- |
+| VALIDATED SPEC (décision/contrats 11–12/11) | décisions A1–A3 + contrats/conception B* importés **à l'identique** dans ce candidat docs |
+| IMPLEMENTED LOCAL | correctif sémantique sur `fix/next-semantic-intent-convergence-20261112` commit **`83fd9ecef2d952c90a828d68a192e105c83be35f`** (parent `2416e2ee`, tree `bed6bff5`) — **LOCAL / NOT INTEGRATED** |
+| COVERAGE VERIFIED (déterministe) | selon handoff `sfia/review-handoff@77fda513` : unit/PG/browser DEV isolée (Q1/Q2, AUTH, S05, D4 gouvernée) |
+| DETERMINISTIC BEHAVIOR PROVEN | à la portée des suites rejouées en DEV ; **≠** LIVE/REAL |
+| PR READINESS | produit : candidate locale prête à revue ; docs : **ce candidat** — publication **NON** effectuée |
+| REMOTE CI NOT RUN | aucune CI GitHub sur `83fd9ece` ; PR #676 head reste `2416e2ee` |
+| LIVE NOT RUN | Nora LIVE OpenAI **NOT RUN** |
+| USER RECETTE NOT ACCEPTED | cahier 53 cas conservé ; journal conserve observations ; **S02-01 FAIL** ; **ML4C-A-006/A-007 OPEN** ; acceptation utilisateur ML4C **NON ACQUISE** |
+| ENV-R09 | sessions/cookies multi-lane **NOT VERIFIED** |
+| ML4D | **NON DÉMARRÉE** |
+| Gate C | **OPEN** |
+| Versioning | `0.0.0-dev` / **NO RELEASE** |
+
+**As-built technique** du candidat produit : `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md` **dans** `83fd9ece` (référence LOCAL) — **non recopié** ici.
+
+**Sources normatives importées (contenu Morris inchangé) :** [décision trajectoire ML4C/ML4D](decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) · [Gate B accepté avec réserves](decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) · [qualification sémantique Nora](decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) · [conception](../construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md) · [contrat technique](../construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md) · [contrat ML4C intégré](../construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md) · [design S02/S03](../construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md) · [cahier](../construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md) · [journal](../construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md). Les mentions historiques **NO BUILD GO / NON IMPLÉMENTÉ** dans conception/contrat technique restent le constat **à la date d'approbation** ; elles ne sont **pas** réécrites. L'avancement technique LOCAL est porté **uniquement** par le tableau ci-dessus et le commit `83fd9ece`.
+
+**Statut Git docs :** candidat local non commité / non poussé. **Statut Git produit :** `83fd9ece` local ; PR #676 OPEN sur `2416e2ee`. **Cette actualisation Roadmap est ADAPT CANDIDATE — validation Morris requise avant commit/push projet.**
+
+---
+
+> **SNAPSHOT HISTORIQUE — 12/11/2026 (contenu validé sur branche docs CP2, non baseline main)** : la [décision de principe sémantique](decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) et la [conception](../construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md) sont **VALIDATED IN CONTENT BY MORRIS** à leur date ; le [contrat technique](../construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md) est **VALIDATED IN CONTENT WITH EXECUTABILITY RESERVES**. Ces textes conservent leurs formulations d'époque (y compris NO BUILD GO) ; le suivi CURRENT ci-dessus décrit l'implémentation candidate ultérieure.
+
+> **SNAPSHOT HISTORIQUE — 11/11/2026 — Gate B + CP2** : [Gate B accepted with reserves](decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) ; [contrat ML4C intégré](../construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md) et [design vérité des effets](../construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md) validés en contenu avec réserves ; [trajectoire ML4C puis ML4D](decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). Objectif documentaire ML4B clôturé avec réserves ; **pas** d'acceptation globale ML4 ni BEHAVIOR PROVEN.
+
+---
+
 > **ÉTAT COURANT R5 — CP0 VALIDATED IN CONTENT BY MORRIS (2026-11-10 ; PUBLICATION DOCUMENTAIRE SUR BRANCHE CANDIDATE)** : [décision de trajectoire ML4B/ML4C](decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md). Baseline de cadrage `main@0182b0a7053babefe33aa4de181631b21613ac69`. Ce bloc actualise les statuts du programme sans effacer les instantanés datés ci-dessous. Aucune PR, fusion `main`, exécution Cursor, promotion, release ou adoption n'est autorisée par CP0.

 ## R5 — Réconciliation et convergence produit avant ML5 (2026-11-10, CP0)

```

### C1–C3 diffs complets

### `projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md`

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md b/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
index 3f89c065..99d8130a 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
@@ -7,6 +7,8 @@
 **Source UX :** fichier Figma `itgvCulInEnFY6DvgIegvP`, page `01 · Parcours produit — Référence UX R3` (`94:49`), consultée en lecture native. Page à **242 frames** dont écrans ML4 218–235 et INDEX déjà validés ; aucune mutation Figma réalisée lors de cette qualification.
 **Autorité :** Morris a validé **A1, A2, A3** et autorisé le **versement documentaire borné** sur une branche Git ainsi que les addenda de traçabilité R3/R5. Aucun GO code/DB/Figma, aucune PR, aucun merge, aucune promotion ou adoption. Voir [décision des arbitrages](../../governance/decisions/2026-11-07-convergence-ux-arbitrages.md).

+> **ADDENDUM DE TRAJECTOIRE DU 11/11/2026 — PÉRIMÈTRE HISTORIQUE CONSERVÉ :** la présente qualification date du 07/11 et reste le dossier propriétaire des décisions A1–A3, P1–P3, F1/F2, des contrats et des preuves G1–G5 à leur portée. La [décision complémentaire R5](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) retient ensuite **ML4C convergence fonctionnelle intégrée avec UX indispensable aux parcours**, puis **ML4D convergence UX/UI globale des surfaces effectivement construites ML1–ML4**. Cette qualification ne constitue **ni** l'inventaire complet ML4D, **ni** une preuve F2/G5, **ni** un GO Figma/code ; sa chronologie pré-ML4 ne prévaut pas sur l'addendum R5 du 11/11.
+
 ## 1. Décision de trajectoire applicable

 Le document `governance/decisions/2026-11-07-ml4-ux-validation-convergence.md`, désormais intégré dans `main` via PR #663, définit la suite : **préparation documentaire ML4 achevée et intégrée → convergence UX des capacités ML1–ML3 sous contrat et GO distinct → construction technique ML4 Git → ML5 Cursor → R6**. La présente qualification applique cet ordre sans réouvrir les clôtures historiques ML1 et ML3 ni inventer une clôture formelle ML2.

```
### `projects/sfia-studio-next/construction/reconciliation-produit/README.md`

```diff
diff --git a/projects/sfia-studio-next/construction/reconciliation-produit/README.md b/projects/sfia-studio-next/construction/reconciliation-produit/README.md
index 35e0e6e6..3aa8b5a5 100644
--- a/projects/sfia-studio-next/construction/reconciliation-produit/README.md
+++ b/projects/sfia-studio-next/construction/reconciliation-produit/README.md
@@ -1,5 +1,7 @@
 # SFIA Studio Next — Réconciliation produit R5 (ML4B)

+> **DÉCISION DE SORTIE POSTÉRIEURE — 11/11/2026 :** Morris a **accepté le Gate B avec réserves** et considéré l'objectif documentaire de ML4B **clôturé avec réserves**, selon la [décision D2](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) (sur branche candidate, `main` non modifiée). Le diagnostic CP1 est une **base de convergence acceptée**, pas une preuve globale de comportement : 628 références indexées, 43 étapes E2E rapprochées et huit familles X-01..X-08 conservent exactement leurs preuves, limites et réserves. Les mentions historiques `CP1 CANDIDATE / GATE B NOT HELD` ci-dessous décrivent **l'état avant cet arbitrage**. Suite autorisée : finaliser CP2 ; **aucun GO build/PR/merge/ADOPTED**.
+
 **Nature :** dossier de diagnostic documentaire D1, non normatif.
 **Ouverture :** 10 novembre 2026.
 **Baseline d'analyse :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` (après PR #673).
@@ -7,6 +9,8 @@
 **État :** `DOCUMENTED / CP1 SYNTHESIS CANDIDATE FOR MORRIS REVIEW / GATE B NOT HELD / NO PRODUCT CHANGE`.
 **Environnement local, runtime, DB et navigateur :** `NON OBSERVÉS`.

+> **MISE À JOUR DE GOUVERNANCE DU 11/11/2026 (postérieure au diagnostic CP1) :** Morris a validé **ML4C fonctionnel intégré, puis ML4D UX/UI global**, dans la [décision complémentaire](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). **Ce choix remplace les options A/B/C comme trajectoire de réalisation uniquement** ; les 628 références indexées, sept E2E/43 étapes, X-01..08 et leurs statuts de preuve restent inchangés. Inclure cockpit/portefeuille, accès, sas et navigation en ML4C lorsqu'un écart fonctionnel ou d'UX bloquante l'exige, puis reprendre toutes les surfaces applicables en ML4D pour la fidélité Figma. **CP1/Gate B non acceptés par ce seul arbitrage ; aucun GO de construction.**
+
 ## 1. Résultat du dossier et frontière

 Conformément à la [décision CP0](../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md), ML4B confronte la **vision R1, les contrats R2, la conception UX R3, l'architecture R4, les contrats R5, le code intégré, les tests et les comportements réellement prouvés**.

```
### `projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md`

```diff
diff --git a/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md b/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
index f36b9c33..53850453 100644
--- a/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
+++ b/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
@@ -1,11 +1,15 @@
 # SFIA Studio Next — ML4B : synthèse transverse des sept parcours R1 et options pour le gate B

+> **DÉCISION POSTÉRIEURE AU DIAGNOSTIC — GATE B ACCEPTED WITH RESERVES (Morris, 11/11/2026)** : [enregistrement D2](../../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md). Les 628 références indexées, les 43 étapes mappées et les huit familles X-01..08 sont acceptées comme **base CP1**, non comme preuves PASS. Les options A/B/C et les questions B-01..B-06 qui suivent décrivent la préparation historique ; leur arbitrage effectif est consigné dans la décision D2. Objectif documentaire ML4B clôturé avec réserves, CP2 à finaliser, **aucun GO technique**.
+
 **Date :** 2026-11-11. **Nature :** dossier de diagnostic D1, **candidat à la revue Morris**, non normatif et non approuvé.
 **Source de code :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` ; **branche documentaire :** `docs/next-reconciliation-produit-ml1-20261110`.
 **Hors observation directe :** poste/local, DB active, navigateur, captures Figma natives, fournisseur GitHub et tests rejoués. Les preuves PG/FAKE/LIVE/REAL décrites sont des preuves **historiques à SHA/lane distincts**.

 [Index ML4B](../README.md) · [Vision R1 propriétaire](../../../cadrage/vision-produit.md) · [Décision de trajectoire CP0](../../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md) · [Roadmap](../../../governance/roadmap.md).

+> **ADDENDUM D'ORIENTATION DU 11/11/2026 :** l'arbitrage Morris postérieur à cette synthèse retient **ML4C convergence fonctionnelle intégrée (cockpit/entrée/sas compris, UX fonctionnelle incluse), suivi de ML4D convergence UX/UI globale**. Voir [décision complémentaire](../../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). Les options A/B/C ci-dessous restent **des hypothèses de classement historiques du diagnostic**, pas trois macro-lots désormais retenus. Les huit familles X-01..08, preuves, 628 références et 43 étapes ne changent pas. **Gate B encore ouvert ; pas de GO code/UX/PR/merge.**
+
 ## 1. Résultat consolidé

 | Lot et domaines R2 | Couverture de référence publiée | Acquis probants et limite déterminante |
@@ -117,7 +121,9 @@ Les noms d'étapes sont extraits des [sept scénarios R1 §§2.30–2.36](../../

 **Regroupement sans doublon :** `ML4-REC-08` = X-01 même si ML2/ML4 le mentionnent ; `R-UX-01` = X-03 ; `ML4-REC-07` ancien FAIL puis G1 ciblé PASS ; `ML4-AT-13` = X-08. `NOT RUN` n'est pas `FAIL`.

-## 4. Trois options de macro-lots de convergence ML4C, non arbitrées
+## 4. Trois options historiques de convergence envisagées au diagnostic CP1 (avant arbitrage du 11/11)
+
+> **Lecture historique uniquement :** A/B/C détaillent des familles de problèmes et des dépendances. La réalisation approuvée en orientation est désormais **ML4C fonctionnel intégré → ML4D UX/UI global** ; voir l'addendum et la décision D2 ci-dessus. Aucun constat ou niveau de preuve n'est effacé.

 | Option cohérente | Résultat Pilote | IN / OUT et responsabilités | Preuve de sortie et dette/exit |
 | --- | --- | --- | --- |

```


### Créations — contenu complet

### `projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md`

Blob worktree: `a9f7823128fe5652d3b80df2fd3df98d2e5fc99e`

```markdown
# SFIA Studio Next — Arbitrage de trajectoire R5 : ML4C fonctionnel et ML4D UX/UI global

| Champ | Valeur |
| --- | --- |
| Date | 11 novembre 2026 (Europe/Paris) |
| Autorité de l'orientation | Morris |
| Statut de contenu | **VALIDATED IN CONTENT BY MORRIS — découpage ML4C / ML4D** ; contrats détaillés et acceptations restant soumis aux gates |
| Nature | **Complément de décision structurante D2** à la [trajectoire CP0 du 10 novembre](2026-11-10-r5-reconciliation-convergence-trajectory.md), sans réécriture de son historique |
| Base Git vérifiée | `mcleland147/sfia-workspace`, `main@42aa373947446a8c20694b06c559ee0da1cba580` après [PR #674](https://github.com/mcleland147/sfia-workspace/pull/674) merged ; Git local **NON OBSERVÉ** |
| Mandat documentaire | Mise à jour Git demandée par Morris le 11 novembre pour cette révision ; contribution bornée sur branche candidate, **sans PR, merge, GO Cursor, release ou ADOPTED** |

## 1. Arbitrage produit retenu

**ML4C — convergence fonctionnelle intégrée du produit** et **ML4D — convergence UX/UI globale** sont deux macro-lots successifs de la convergence R5. Ce découpage remplace **pour l'organisation future** les options analytiques A/B/C de la synthèse CP1 ; les constats X-01 à X-08, la matrice de couverture ML4B et les preuves historiques restent intacts.

Le résultat attendu reste un produit conforme à la [vision R1](../../cadrage/vision-produit.md), aux exigences R2 et aux cadrages complémentaires validés, notamment [Conduite des intentions et continuité cognitive Nora/Studio](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md). **L'objectif n'est pas d'ajouter des fonctionnalités pour elles-mêmes.** Une capacité nouvelle indispensable pour satisfaire une exigence existante est instruite avec son impact ; une extension de vision est soumise à arbitrage Morris avant entrée au périmètre.

**Nora qualifie, raisonne, organise, mobilise, interprète et poursuit ; Studio et ses propriétaires D1–D9 exécutent, contrôlent les autorités, persistent les états et retournent les résultats vérifiables ; le Pilote décide et autorise.** Le Pilote n'a pas à orchestrer manuellement les dépendances d'une intention dont la conduite relève de Nora. Aucun deuxième moteur de conversation, de décision ou d'effets ne doit naître de la convergence.

## 2. ML4C — convergence fonctionnelle intégrée

**Résultat Pilote :** entrer dans Studio, accéder à son cockpit, ouvrir/reprendre un sas, créer explicitement un projet, naviguer, travailler avec Nora, conduire les intentions et consulter les états et résultats **réels**, dans les périmètres construits ML1–ML4.

**IN :**
- **Cockpit et entrée D1/D2 :** identité/session, portefeuille et états projet véridiques, tableau de bord, navigation, sas, préparation, proposition, création, reprise et liens profonds ; corriger les écarts de comportement, d'erreur, de droits, d'idempotence et de continuité (notamment statuts calculés par index, erreurs 401 non authentification, ACK perdu).
- **Conduite Pilote–Nora D3/D4/D5/D6 :** investigation, raisonnement utile, sélection/mémoire/contextualisation, documents/version, trajectoire, cycles et HumanDecision ; cohérence entre les paroles de Nora et les opérations réellement confirmées ; reprise cognitive et transactionnelle sans doublon.
- **Publication documentaire Git D4/D6–D9 :** intention complète de document → inspection/préparation → autorisation D6 → effets Git gouvernés → vérification et restitution, avec refus, révocation, état inconnu et accès partagés correctement gérés ; capacité de réalisation distincte mais **expérience Pilote–Nora intégrée**.
- **UX nécessaire au fonctionnement de chaque parcours :** écrans, états, erreurs, navigation, interactions et composants utiles à une action réellement réalisable ; ajustements Figma et documentation synchronisés avec code/tests dans le même ensemble cohérent.
- **Preuves discriminantes :** E2E R1 concernés, QA PG/API/BROWSER/LIVE/REAL selon les effets, identité/données/lane/SHA, cas négatifs, continuation et couverture R2 traçable, sans confondre `NOT RUN` et `FAIL`.

**OUT :** refonte générale non motivée, second moteur d'autorité/effets, fonctionnalités ML5 Cursor, promotion STABLE/adoption et merge Git REAL sans mandat spécifique. L'UX indispensable à un parcours **n'est pas reportée par défaut à ML4D**.

**Réception intermédiaire ML4C :** fonctionnement conforme sur les parcours approuvés, contrats et propriétaires respectés, anomalies et réserves critiques traitées ou explicitement soumises à Morris ; cette réception n'est **pas** le Gate C final de convergence.

## 3. ML4D — convergence UX/UI globale

**Résultat Pilote :** une application entière, cockpit inclus, dont l'expérience, la hiérarchie, les parcours, les interfaces et le rendu sont cohérents avec les **références Figma validées applicables aux capacités construites ML1–ML4**, augmentées seulement des évolutions approuvées pendant ML4C.

**IN :** inventaire exhaustif des surfaces et états applicables (accès, portefeuille/tableau de bord, sas, création, projet, Nora/conversation, documents, pilotage, décisions, Git, inspection, paramètres et variantes) ; composants, navigation, rail et shell partagé, densité, typographie, couleurs, espaces, états vides/attente/erreur, responsive, accessibilité et utilisabilité ; ajustements UX nécessaires et vérification géométrique/visuelle Figma-runtime.

**Contrats hérités :** A1–A3, P1–P3 et F1/F2 demeurent applicables à leur portée ; rail personnel/projet/conversation/inspection = **246/246/240/244 CSS px** ; F2 vise delta géométrique 0, avec maximum 2 CSS px sur rectangles stables à conditions comparables. **Aucun seuil universel de diff image n'est validé** ; la calibration et la disponibilité des sources Figma natives restent à qualifier. Les transpositions G4 déclarées ne valent pas réception G5.

**OUT :** nouvelle fonctionnalité métier introduite sans arbitrage, réouverture systématique d'une logique fonctionnelle conforme, reprise d'une autorité D1–D9, réalisation d'écrans ML5 non encore implémentés comme s'ils étaient actifs. Les besoins fonctionnels découverts durant ML4D sont qualifiés, priorisés et soumis à Morris, plutôt que cachés dans une retouche graphique.

**Réception ML4D :** comparaison Figma/runtime datée par écran/état critique et par viewport comparable, preuve d'interaction, de navigation, de responsive/accessibilité et verdict Morris ; le nombre de frames transposées ne constitue pas un taux de conformité.

## 4. Séquence, gates et dépendances

`ML1–ML4 intégrés → ML4B diagnostic CP1 → Gate Morris B → CP2 contrat intégré ML4C+ML4D → GO technique distinct ML4C → ML4C réalisation et réception intermédiaire → GO technique distinct ML4D → ML4D réalisation et réception UX globale → Gate Morris C final → ML5 Cursor → R6`.

- **Gate B reste ouvert :** l'accord de Morris sur ce découpage et sur sa transcription Git **ne valide pas à lui seul** l'exhaustivité de CP1, ne clôture pas ML4B et ne donne pas le GO technique.
- **CP2 avant code :** cadrer conjointement la cible UX complète (y compris ML4D), les propriétaires, IN/OUT, contrats API/données/autorité, architecture candidate, interfaces, dépendances, risque, preuves, intégrateur et dette/exit ; fixer les cas Figma pertinents avant transposition.
- **ML4C puis ML4D :** ordre d'intégration nominal ; aucune fragmentation en micro-cycles par écran. Parallélisme de préparation seulement avec interfaces/fichiers maîtrisés, preuve et intégrateur commun.
- **Réception intermédiaire après ML4C :** contrôle des capacités et des écarts, puis décision Morris pour poursuivre ; ne se substitue pas au Gate C.
- **Gate C après ML4D :** acceptation du résultat complet fonctionnel et UX, arbitrage des réserves et prérequis ML5 ; aucun passage automatique à ML5.
- **CP4 / ML5 et R6 :** réalisation technique Cursor et qualification globale distinctes ; aucun `ADOPTED` anticipé.

## 5. Risques et sortie exigible

- **Gouvernance/autorité :** aucun effet sans autorisation applicable ; droits D1/D6/D9 relus au point d'effet ; échec, attente, refus, `UNKNOWN` et succès restent distingués.
- **Continuité :** effet confirmé conservé malgré perte de réponse ; reprise sans doublon et conversation indépendante possible lorsqu'un travail reste incertain.
- **Vérité :** réponse Nora reconstruite à partir de résultats observés, et non d'une hypothèse de succès ; distinguer cognition, résultat applicatif et tâche globale.
- **Cohérence UI :** ML4C n'introduit pas un design divergent sans contrat ; ML4D consolide toute la surface pertinente sans effacer la valeur fonctionnelle.
- **Preuve :** différencier `DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED` ; critères mesurables et suites/exit des réserves.
- **Dépendances :** [diagnostic CP1](../../construction/reconciliation-produit/README.md), [synthèse X-01..08](../../construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md), [qualification UX historique](../../construction/convergence-ux-parcours-pilote-nora/qualification.md) et [roadmap R5](../roadmap.md) servent de sources, non de référentiels concurrents.

## 6. Autorité et limites du présent GO

**Morris a validé l'orientation ML4C/ML4D et demandé sa mise à jour dans Git le 11 novembre 2026.** Les formulations détaillées ci-dessus constituent le cadrage de cette orientation ; les choix fins de capacité, de techniques, de priorité, de preuve et de dérogation demeurent à instruire au Gate B/CP2.

Publication documentaire sur branche candidate **uniquement**, sans interprétation d'un GO de PR, merge, mise à jour directe de `main`, Figma, Cursor, code, migration, release, adoption ou franchissement des gates. Les décisions précédentes restent conservées et consultables, l'orientation la plus récente prévalant uniquement pour le séquencement ML4C/ML4D.

```
### `projects/sfia-studio-next/governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md`

Blob worktree: `c4a0337f1243180fcec3d9fadebd180a6b33c9e6`

```markdown
# SFIA Studio Next — Gate Morris B : acceptation du diagnostic ML4B avec réserves

| Champ | Valeur |
| --- | --- |
| Date | **11 novembre 2026** (Europe/Paris) |
| Autorité | **Morris** |
| Décision de contenu | **GATE B — ACCEPTED WITH RESERVES / ML4B CLOSED WITH RESERVES** |
| Nature | **Décision de gouvernance D2** — sortie de réconciliation CP1, entrée de finalisation CP2 |
| Référence Git du diagnostic et du produit | `mcleland147/sfia-workspace`, `main@42aa373947446a8c20694b06c559ee0da1cba580` (PR #674 intégrée) |
| Trace de publication | Branche documentaire `docs/next-r5-ml4c-cp2-preparation-20261111` issue de la branche candidate de trajectoire `docs/next-r5-ml4c-ml4d-trajectory-20261111@5717b6c938288404f71c9281f1c92be99a51fb89` ; **aucune PR ni fusion de cette décision dans `main`** |
| Observations nouvelles | **Aucun** nouveau test, navigateur, environnement LIVE/REAL ou DB observé lors de la décision ; Git local **NON OBSERVÉ** |

## 1. Objet et portée de la décision

Morris valide le **Gate B avec les réserves présentées en revue** : le diagnostic [ML4B/CP1](../../construction/reconciliation-produit/README.md) et sa [synthèse transverse](../../construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md) sont **acceptés comme base de convergence**. L'objectif documentaire de réconciliation de ML4B est considéré **clôturé avec réserves**.

Cette acceptation porte sur la suffisance du diagnostic pour préparer une convergence responsable. **Elle ne prouve pas les comportements de Studio Next et ne clôture pas la réception globale historique ML4.** Les 628 références RG/PF indexées, sept parcours E2E R1 et 43 étapes rapprochées ne sont ni 628 tests PASS ni sept parcours BEHAVIOR PROVEN. Les preuves historiques restent limitées à leurs SHAs, lanes et niveaux d'observation.

Il n'est pas exigé de rouvrir un audit ML4B complet pour atteindre une exhaustivité théorique. Les causes, preuves et décisions manquantes qui empêchent une modification sûre doivent être traitées au **temps 2 de ML4C**, préalablement au GO technique correspondant.

## 2. Arbitrages Morris B-01 à B-06

| Point | Décision retenue avec réserves | Limite et condition de sortie |
| --- | --- | --- |
| **B-01 — Recevabilité CP1** | **ACCEPTÉ AVEC RÉSERVES** : le dossier ML4B est une base suffisante pour préparer CP2. | Couverture documentaire `INDEXED/MAPPED` ≠ `COVERAGE VERIFIED` ni `BEHAVIOR PROVEN`. Tout écart nouveau est enregistré et qualifié sans rouvrir mécaniquement ML4B. |
| **B-02 — Périmètre et priorités ML4C** | **RETENU** : convergence fonctionnelle intégrée de toutes les capacités construites ML1–ML4, incluant D1 à D9, cockpit/portefeuille, sas, Nora, documents, décisions et publication Git documentaire ; UX fonctionnelle nécessaire incluse. Les trois ensembles de CP2 servent à organiser la réalisation, pas à créer trois macro-lots. | Priorité aux états et effets vrais, à l'autorité, à la continuité, à l'idempotence et à la valeur utilisateur ; solutions techniques et contrats détaillés à qualifier dans CP2. |
| **B-03 — Risques négatifs et preuves** | **RETENU** : preuves graduées et proportionnées au risque, incluant refus, révocation, instructions hostiles, concurrence, perte d'ACK, erreur/UNKNOWN et reprise. | Pas de PASS sans oracle discriminant ni identité SHA/lane/environnement ; la criticité et les risques transverses ne peuvent être différés sans arbitrage Morris et exit. |
| **B-04 — Git REAL et merge** | **RETENU** : publication documentaire Git end-to-end en sandbox autorisé sous mandat **REAL spécifique**, comprenant diff, HumanDecision, commit/PR et vérification. Le `mergePullRequest` REAL reste **HARD-BLOCKED / OUT ML4C** par défaut. | Aucune mutation fournisseur, merge, escalade de droits ou GO implicite via la présente décision ; nouvel arbitrage Morris requis pour toute exception. |
| **B-05 — Frontière UX/Figma** | **RETENU** : ML4C traite les écrans, interactions, états et navigations indispensables au parcours fonctionnel ; ML4D traite ensuite la convergence UX/UI globale de toutes les surfaces applicables. Aucune stratégie supplémentaire « shell-first / enveloppe d'abord » n'est introduite. | G2 source Figma partielle et F2/G5 global **NOT RUN** ; source visuelle et preuve runtime à qualifier selon les parcours. Responsive mineur historiquement différé : réexamen dans ML4D, pas de faux PASS. |
| **B-06 — Séquencement, réserves et dette** | **RETENU** : clôture documentaire ML4B, finalisation CP2 candidat, GO technique ML4C **distinct**, réception intermédiaire ML4C, GO ML4D distinct, réception UX globale, **Gate C final après ML4D**, puis ML5 Cursor et R6. | Chaque réserve reportée porte propriétaire, risque, destination, condition de sortie et preuve attendue ; pas d'adoption anticipée ni de réouverture automatique des clôtures historiques. |

Les anciennes options A/B/C du diagnostic CP1 restent des **hypothèses analytiques historiques**, pas le découpage de réalisation décidé. La [décision complémentaire ML4C/ML4D du 11/11](2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) conserve la propriété du séquencement.

## 3. Réserves obligatoirement conservées à l'entrée de CP2

| Famille CP1 | Réserve, propriétaire et obligation |
| --- | --- |
| **X-01 — Vérité après effet** | D1/D3/D4 : statut de projet calculé par index (`D1-GAP-01`) et contradiction LIVE `ML4-REC-08` — révision D4 `AVAILABLE`, narration Nora niant la sauvegarde ; distinguer comportement observé, causes présumées et causes prouvées. **ML4C : correction et preuve de restitution fidèle.** |
| **X-02 — Mémoire / raisonnement** | D3/D4/D5/D6 : sélection `lexical-heuristic`, rappel utile, contradictions sourcées, maturité B08 et effectivité CKI — **preuve cognitive LIVE représentative** ; ne pas décider un moteur supplémentaire avant analyse causale. |
| **X-03 — Continuité incertaine** | D1–D6 : perte d'ACK après création/révision, `pending` bloquant une question indépendante, concurrence et reprise ; **absence de doublon, vérité du résultat, dialogue indépendant** à démontrer. Les risques DB ne sont pas des pertes établies. |
| **X-04 — Git USER** | D4/D6–D9 : R12 Git incomplet, R13/R14 NOT RUN, malgré antécédent provider REAL borné ; **publication documentaire complète après mandat distinct**, relue sur dépôt sandbox, aucune preuve inventée. |
| **X-05 — Droits et refus** | D1/D4/D6–D9 : révocation au point d'effet, dépôt partagé entre Pilotes, source Git hostile, autorité humaine ; **négatifs représentatifs API/PG/BROWSER/REAL suivant effet et mandat**, sans extrapoler à une fuite non prouvée. |
| **X-06 — UX et fidélité** | UX fonctionnelle des parcours en ML4C ; **F2/G5 et conformité UX/UI globale en ML4D**, avec sources Figma et captures browser comparables ; les 19/20 transpositions G4 déclarées ne certifient pas la fidélité. |
| **X-07 — Erreurs / résilience / observabilité** | D1–D9 propriétaires : erreurs 401 non-auth, cookies/lane, restore réel PG, `PG-DBFAIL-03` conditionnel, streaming et `modelApplied` ; sélectionner oracles discriminants selon risque, **sans transformer NOT RUN en FAIL**. |
| **X-08 — Frontières de périmètre** | Git merge REAL **HARD-BLOCKED** sauf GO spécifique ; réalisation technique Cursor **ML5 OUT** ; E2E05/06 seulement sur leurs portions ML1–ML4 dans ML4C. |

**Règle d'exit :** une réserve critique ne peut pas être cachée dans une retouche UX, une nouvelle fonctionnalité implicite, une prétendue preuve déterministe ou un report sans responsable. Les écarts de cause inconnue restent à expliquer avant correction structurelle.

## 4. Suite autorisée et interdictions

**Autorisé par cette décision :** finaliser le [contrat candidat CP2](../../construction/convergence-fonctionnelle/qualification-cp2.md) selon la **méthode en quatre temps** — qualification des écarts, diagnostic causal, convergence intégrée, preuves de parcours — et préparer les arbitrages de construction.

**Non autorisé :** GO technique Cursor, code/DB/CI/Figma, publication Git REAL du produit, PR/merge de dépôt, Git `main`, convergence ML4D exécutée, ML5, STABLE, release ou `ADOPTED`. Les GO techniques, PR et merges restent séparés, à l'autorité de Morris.

**État de décision de contenu :** `GATE B ACCEPTED WITH RESERVES / ML4B DOCUMENTARY CLOSED WITH RESERVES / CP1 BASE ACCEPTED / CP2 PREPARATION AUTHORIZED / ML4C NO BUILD GO / ML4D NO BUILD GO / GATE C OPEN / NO ADOPTED`.

```
### `projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md`

Blob worktree: `ebaa5665c87099146d70c9445ff981bbcaf7fc2a`

```markdown
# SFIA Studio Next — Décision de principe : qualification sémantique des intentions par Nora

| Champ | Valeur |
| --- | --- |
| **Date** | **12 novembre 2026** (Europe/Paris) |
| **Autorité** | **Morris** |
| **Décision exprimée et validée** | **VALIDATED IN CONTENT BY MORRIS — ORIENTATION PRODUIT ET CONCEPTION FONCTIONNELLE** |
| **Nature** | Décision de gouvernance produit / modification du fonctionnement cible Next |
| **Portée** | Relation Pilote–Nora–Studio ; compréhension et mobilisation des capacités D1–D9, selon leur disponibilité réelle |
| **Sources** | [Conception validée](../../construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md) ; [vision conduite des intentions](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md) ; [contrat ML4C](../../construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md) |
| **État Git de référence** | `main@6d237452680640324eeadbb18f4601fd7de99850` ; produit candidat PR #676 `2416e2ee25662821b015407346c64ec204f67488` (**OPEN / NON MERGÉ**) |
| **Nature de cette trace** | Formalisation documentaire de l'arbitrage explicite du 12/11 ; aucun verdict technique ou LIVE nouveau |
| **Limite du mandat** | Publication documentaire sur branche dédiée uniquement ; **pas de GO code/DB/CI, PR, merge, promotion, release, Gate C ni ADOPTED** |

## 1. Motif de la décision

Dans la recette ML4C `S02-01`, une demande de cadrage d'Intervencia contenant une interdiction explicite de création a pourtant été interprétée par des mécanismes applicatifs comme une intention D2/D4, avec modification d'aperçu et restitution de diagnostics internes. Le cas est classé **FAIL** ; les réserves `ML4C-A-006` et `ML4C-A-007` restent ouvertes. Aucune création effective D2/D4 n'a été démontrée.

L'audit statique transverse du candidat `2416e2ee` a identifié plusieurs familles de **regex, listes de formulations et heuristiques lexicales jouant le rôle de classificateurs d'intentions métier ou de routeurs de capacités** : projet D2, documents D4, pilotage D5/D6, publication Git D9, tri des tours en attente, politique cognitive et sélection/capitalisation de connaissance. Il s'agit d'un problème de conception transverse, non d'un simple synonyme manquant.

Cet état est en écart avec la vision validée de Next : **le Pilote exprime une intention libre ; Nora la comprend et mobilise les capacités ; Studio contrôle et exécute les seuls effets admissibles**.

## 2. Arbitrages exprimés par Morris le 12 novembre 2026

| Référence | Décision validée | Portée / limite |
| --- | --- | --- |
| **SEM-01 — Responsabilité de compréhension** | La qualification des intentions du Pilote doit relever de la compréhension contextuelle et sémantique de **Nora**, non de mots-clés imposés par Studio. | Inclut synonymes, négations, langage naturel, nuances et demandes multi-intentions ; aucun terme déclencheur obligatoire. |
| **SEM-02 — Suppression effective** | **Remplacer puis supprimer** les regex/listes lexicales servant de mécanisme principal de reconnaissance des intentions et de sélection des capacités métier. | Ne pas se contenter d'ajouter une couche IA en laissant l'ancien moteur actif, dormant ou en fallback silencieux. Suppression à prouver. |
| **SEM-03 — Préservation des règles techniques** | Les regex de validation de formats, identifiants, chemins, versions et structures restent légitimes. | Ne pas supprimer les contrôles de sécurité, de contrat, de parsing, d'idempotence ni d'autorité déterministe. |
| **SEM-04 — Autorité et effets** | Nora qualifie, organise, prépare et mobilise ; les domaines de Studio possèdent la validation, les droits, les décisions humaines et l'exécution réelle. | L'intelligence du modèle ne constitue **ni HumanDecision ni autorisation implicite**. Les actes explicites du Pilote demeurent requis là où le contrat métier le prévoit. |
| **SEM-05 — Étendue transverse** | La convergence doit couvrir **tous les points applicables** de Next, et non seulement la création D2 ou l'ouverture de cycle D5. | Inventaire exhaustif des chemins opérationnels comme condition d'exit ; respect des frontières D1–D9. |
| **SEM-06 — Pérennité et preuves** | Le remplacement doit fonctionner sous diverses formulations et langues, sans accumulation de synonymes et règles ad hoc. | Tests sémantiques, négatifs, positifs, multi-intentions et preuves LIVE proportionnées ; pas de faux PASS. |
| **SEM-07 — Synchronisation documentaire** | Mettre à jour les documents utiles et la traçabilité **en même temps que la transformation applicative**, sans perdre la conception validée. | Contrats, architecture, documentation `as-built`, tests, delivery et recette synchronisés ; gates normatifs applicables. |
| **SEM-08 — Séquencement** | Concevoir, documenter et arbitrer le **contrat technique** avant un nouveau contrat d'exécution Cursor. | La présente décision approuve le principe et la conception déjà discutée, **pas un mécanisme technique final ni un GO technique**. |

## 3. Frontières et responsabilités maintenues

- **D3 / Nora :** compréhension de l'intention, clarification, organisation du travail, mobilisation et restitution cognitive.
- **D1–D9 / propriétaires :** contrôle des préconditions et des autorisations, résolution de cible, mutations métier, état durable, idempotence, preuves et erreurs.
- **Pilote :** arbitrages, consentements, décisions et mandats requis au point d'effet.
- **Studio :** services applicatifs gouvernés et validation déterministe ; ni interpréteur métier lexical parallèle ni registre d'autorité concurrent.
- **SFIA v2.6 externe :** Cursor réalise la technique uniquement sous contrat et GO adaptés ; l'arbitrage produit de Morris n'autorise aucun push ou merge.

Le fonctionnement cible demeure **Pilote → Nora → capacités Studio → autorité applicable → effet observé → preuve → continuation**.

## 4. Conséquences et traitement des travaux ouverts

1. Le correctif local `A-006/A-007` fondé sur `2416e2ee`, déclaré `FIX IMPLEMENTED WITH RESERVES — REVIEW REQUIRED`, a reçu une revue `NOT READY`. **Il ne doit pas être intégré tel quel** ; ses apports réutilisables seront réévalués dans la convergence sémantique.
2. `S02-01` demeure **FAIL**, `S02-02` n'est pas autorisé à partir de l'état Intervencia observé ; la RECETTE actuelle ne doit pas être modifiée par cette décision.
3. La PR produit #676 reste **OPEN / NON MERGÉE**. Les documents candidats de cette branche ne deviennent pas la baseline `main` par leur seule publication.
4. Le macro-lot de convergence devra réunir architecture, implémentation, suppression effective, tests, documentation et revue ; la conception détaillée décidera d'éventuelles frontières de livraison motivées.
5. Les sources R1/R2 conformes à cette orientation gardent leur autorité et n'ont pas à être réécrites pour une simple correction d'implémentation. Les contradictions et documents `as-built` doivent en revanche être traités.

## 5. Complément Morris du 12 novembre 2026 — validation des principes techniques

Après revue du [contrat technique de qualification sémantique et mobilisation gouvernée](../../construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md), Morris confirme **« OK GO, je valide l'ensemble »**, portant sur les cinq principes soumis lors de la revue.

**Arbitrages complémentaires validés en contenu :**

1. Qualification canonique structurée par Nora D3 dans la même conduite cognitive ; `outputType` + Zod **privilégié**, pas encore prouvé compatible en intégration Next sur la version verrouillée `@openai/agents@0.21.0`.
2. Aucune création, décision, publication ou mutation sur la seule sortie IA.
3. Autorité humaine ancrée dans le message USER authentifié, vérifiée au point d'effet par le propriétaire compétent D2/D4/D5/D6/D9 ; la sortie de Nora ne vaut pas HumanDecision.
4. Qualification validée **durablement avant tout nouvel effet** et réutilisée lors des reprises sans reclassification libre ; aucune migration DB autorisée implicitement.
5. Suppression effective, après remplacement et preuve, des routeurs lexicaux métier ; aucun fallback caché ou silencieux. Les contrôles déterministes de sécurité, format, droits et état sont préservés.

**Décision de gouvernance : CONTRAT TECHNIQUE VALIDÉ EN CONTENU AVEC RÉSERVES D'EXÉCUTABILITÉ.** Il ne s'agit **ni de l'approbation d'une API finalisée et testée**, ni d'un GO Cursor, d'un pivot persistance, d'un déploiement, d'un merge ou d'une adoption produit.

**Réserves à lever :** compatibilité SDK verrouillé (sorties structurées, `finalOutput`, outils, streaming), contrat détaillé de preuve d'acte humain conversationnel D5/D6, stockage pré-effet et reprise dans le journal existant, mesure des budgets/latences et corpus LIVE avec limites explicites. Si une migration ou un changement d'autorité s'avère indispensable : **STOP et nouveau gate Morris**.

**Documentation :** la présente décision, le contrat technique, le contrat ML4C et la roadmap sont tenus en cohérence sur branche documentaire candidate. La mise à jour de l'architecture `as-built`, des contrats R2 impactés, des tests et de `delivery-history.md` sera obligatoire **dans la même livraison que les modifications techniques**, avec gate sur toute modification normative. Le journal de recette conserve `S02-01 FAIL` jusqu'à retest effectif.

## 6. Gates restants

**Acquis :** orientation produit et conception fonctionnelle de la qualification sémantique validées par Morris le 12/11 ; documentation du principe autorisée.

**Validé en contenu :** les cinq principes du contrat technique Nora → Studio. **À vérifier et lever :** l'exécutabilité SDK/streaming, la preuve d'autorité D5/D6 par acte, la persistance pré-effet, le blast radius final, la mesure coût/latence et les preuves de suppression des routeurs lexicaux métier.

**Non autorisé par la présente décision :** développement ou reprise Cursor, écriture DB/runtime/CI, restructuration normative imprévue, édition de sources protégées, push projet, PR/merge, mise à disposition RECETTE, STABLE, release, clôture de Gate C ou ADOPTED.

**Prochain gate Morris :** arbitrage des écarts d'implémentation ou de persistance qui dépasseraient la conception approuvée, puis **GO d'exécution SFIA v2.6 distinct** après pré-check et sécurisation des réserves ; aucun GO Cursor implicite.

**Verdict actualisé au 12/11 : DÉCISION DE PRINCIPE VALIDÉE / CONCEPTION FONCTIONNELLE VALIDÉE / CONTRAT TECHNIQUE VALIDÉ EN CONTENU AVEC RÉSERVES D'EXÉCUTABILITÉ / CONSTRUCTION ET PREUVES NON ACQUISES.**

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md`

Blob worktree: `27475cf3afd2e779c7832a94e0ce7a8c3036d05a`

```markdown
# SFIA Studio Next — Cahier de recette utilisateur ML4C

**Version :** 0.1 — validée en contenu par Morris le 12 novembre 2026
**Date :** 12 novembre 2026
**Statut :** VALIDATED CONTENT BY MORRIS — RECETTE UTILISATEUR NOT RUN
**Programme :** R5 — ML4C, convergence fonctionnelle intégrée
**Responsable de la réception :** Morris
**Périmètre :** Capacités ML1–ML4, scénarios S01–S07 du contrat CP2
**Git :** branche documentaire candidate `docs/next-r5-ml4c-cp2-preparation-20261111` ; **non mergée dans main**.

---

## 1. Objet et objectif de réception

Ce cahier organise la réception fonctionnelle de SFIA Studio Next sur le candidat ML4C.

Il cherche à déterminer si le Pilote peut effectivement :

1. Accéder à ses projets, les retrouver et naviguer sans ambiguïté.
2. Créer un projet et reprendre une opération interrompue sans doublon.
3. Produire et réviser des documents avec Nora, en obtenant une restitution fidèle des effets réalisés.
4. Bénéficier d'une mémoire et d'un raisonnement pertinents, respectant la provenance des connaissances et les décisions actuelles.
5. Continuer à dialoguer pendant une opération en attente, sans perdre ni contourner celle-ci.
6. Préparer, autoriser et publier un document dans GitHub avec des preuves réelles et une gouvernance humaine.
7. Réaliser un parcours cohérent de bout en bout dans une application utilisable.

Les sept familles de scénarios forment **une seule réception ML4C**.

Une réussite technique isolée ne vaut pas acceptation fonctionnelle du produit.

## 2. Identité du candidat

| Élément | Référence |
|---|---|
| Produit | SFIA Studio Next |
| Environnement | RECETTE existante |
| Adresse | http://127.0.0.1:3200 |
| Git produit | `mcleland147/sfia-workspace` |
| PR | #676 — non fusionnée |
| Commit candidat | `2416e2ee25662821b015407346c64ec204f67488` |
| Tree | `88c05766afa04355f5fbb63dcda603686a3f11a6` |
| BUILD_ID | `qB8JvXfdL7FMOFYMf31kL` |
| PostgreSQL RECETTE | `sfia_next_recette_ml4` — port 5434 |
| Schéma | `012_auth_concurrency_safety` |
| Nora | OpenAI Agents SDK LIVE — deux échanges de smoke réussis |
| GitHub | App RECETTE 5677465 / installation 180092114 |
| Dépôt Git autorisé | `mcleland147/chantiers360` |
| Git REAL READ | PROVEN |
| Git REAL documentary WRITE | CONFIGURED — NOT RUN |
| OAuth navigateur | CONFIGURED — nouveau callback interactif NOT RUN |
| Version | `0.0.0-dev` — NO RELEASE |

**Règle de campagne :** tous les résultats doivent concerner ce même candidat. Une modification du code ou une nouvelle bascule de build impose de requalifier les preuves affectées.

## 3. Préconditions et règles d'exécution

### 3.1 Avant la première session

- Utiliser le profil navigateur RECETTE dédié.
- Vérifier que l'adresse et le build correspondent au manifeste.
- Effectuer la connexion GitHub OAuth interactive avec le compte de test autorisé.
- Vérifier l'identité du Pilote et le portefeuille réellement accessible.
- Choisir un projet existant de référence et créer un projet de recette dédié pour les scénarios mutatifs.
- Relever l'état initial des projets, documents, décisions et cycles concernés.
- Ne pas réutiliser les données DEV ou les identités d'un autre Pilote comme fixtures.

### 3.2 Actions LIVE et REAL

Nora doit être sollicitée en **LIVE** pendant les tests cognitifs et documentaires. Les réponses scriptées ou fixtures ne constituent pas des preuves de ces scénarios.

La lecture Git s'effectue via le fournisseur **REAL**.

Toute écriture documentaire Git REAL exige, avant exécution, un GO Morris spécifique précisant le dépôt, la branche de test, les chemins et les opérations autorisées. Les contrôles applicatifs HumanDecision restent obligatoires et ne sont jamais remplacés par ce GO externe.

La création d'une branche, d'un commit ou d'une PR de test n'autorise jamais son merge.

### 3.3 Données et opérations protégées

- Les tests doivent privilégier des projets et documents synthétiques identifiables.
- Les suppressions, révocations et modifications de droits doivent être testées uniquement avec des identités et ressources de recette maîtrisées.
- Les scénarios de perte réseau ou d'ACK nécessitant une injection de panne doivent utiliser un dispositif de test explicitement autorisé ; ils ne doivent pas perturber arbitrairement un parcours utilisateur.
- Aucun nettoyage de la base DEV, de la RECETTE existante ou du dépôt Git n'est implicite.
- Chaque anomalie est conservée avec son contexte, sans correction silencieuse pendant la campagne.

## 4. Format de preuve et verdict

Pour chaque cas, consigner :

| Champ | Contenu |
|---|---|
| ID scénario | Identifiant stable du cas |
| Date et Pilote | Session de recette |
| Build / SHA | Version réellement testée |
| Projet / ressource | Identifiant ou référence non sensible |
| Demande / geste | Action exacte effectuée |
| Attendu | Comportement contractuel |
| Observé | Comportement réel |
| Preuve | Capture, extrait non secret, ID d'effet, révision, réponse API ou référence Git |
| Verdict | PASS / FAIL / BLOCKED / NOT RUN |
| Anomalie | Référence, sévérité, propriétaire et condition de sortie |

**PASS** signifie que l'attendu a été observé avec une preuve suffisante. **BLOCKED** signifie que le test n'a pas pu être mené à terme pour une cause documentée. **NOT RUN** signifie qu'il n'a pas été exécuté.

Un résultat `UNKNOWN` dans l'application n'est pas automatiquement un FAIL : il faut vérifier s'il est correctement signalé et récupérable.

---

## 5. S01 — Accès, cockpit et portefeuille

**Objectif :** accéder uniquement aux projets autorisés et retrouver le bon contexte avec des informations fiables.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S01-01 | Ouvrir Studio en RECETTE et se connecter avec GitHub OAuth | Authentification effective, identité correcte, aucun contournement de session |
| S01-02 | Consulter le portefeuille des projets et préparations | Éléments autorisés uniquement ; intitulés et états correspondant aux données réelles |
| S01-03 | Ouvrir un projet existant, changer de vue, revenir et rafraîchir | Même projet retrouvé ; contexte et conversation conservés |
| S01-04 | Revenir sur un sas de création encore ouvert | Préparation retrouvée sans projet artificiellement déclaré créé |
| S01-05 | Examiner les états d'erreur : session expirée, accès interdit, panne technique | Messages distincts et cohérents ; pas de faux `401` ou faux succès |
| S01-06 | Vérifier un accès croisé avec une autre identité de recette autorisée | Aucun accès indu aux projets personnels d'un autre Pilote |

**Preuves attendues :** capture navigateur, identité de session non sensible, données portefeuille, identifiant du projet, actualisation réussie et refus d'accès contrôlé.

**Critère de sortie S01 :** le Pilote sait où il se trouve, ce à quoi il a droit et quel projet est réellement ouvert.

**Statut initial : NOT RUN.**

---

## 6. S02 — Sas et création de projet récupérable

**Objectif :** créer un projet unique à partir d'une décision explicite, sans perdre les éléments préparatoires ni démarrer d'autres opérations par effet de bord.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S02-01 | Décrire à Nora un projet de recette et avancer dans le sas | Intention et informations préparatoires conservées |
| S02-02 | Demander et autoriser explicitement la création | Un seul projet réel créé ; ouverture du bon projet |
| S02-03 | Vérifier le projet immédiatement après création | Aucun cycle, dépôt Git ou travail Cursor démarré automatiquement |
| S02-04 | Rafraîchir et revenir au projet créé | Conversation, proposition et informations conservées |
| S02-05 | Simuler une perte d'ACK après création effective, via un dispositif contrôlé | Même intention réconciliée ; projet existant retrouvé ; aucun doublon |
| S02-06 | Provoquer un refus ou conflit maîtrisé | Résultat exact présenté, sans création fictive ni nouvelle mutation silencieuse |

**Preuves attendues :** ID projet, identité de l'intention, état du sas, nombre de créations, traces d'idempotence, screenshots avant/après.

**Critère de sortie S02 :** une action interrompue peut être reprise sans perdre ses informations et sans créer un deuxième projet.

**Statut initial : NOT RUN.**

---

## 7. S03 — Production documentaire et vérité des effets

**Objectif :** vérifier que Nora et Studio présentent exactement ce qui a été réalisé dans les documents persistés.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S03-01 | Demander à Nora de rédiger un document de cadrage à partir du projet | Contenu pertinent ; document enregistré uniquement selon le contrat applicable |
| S03-02 | Ouvrir le document dans la bibliothèque | Document réel, identifiant et version consultables |
| S03-03 | Demander une révision explicite du document | Nouvelle révision enregistrée ; historique cohérent |
| S03-04 | Comparer la réponse Nora avec la bibliothèque après écriture | Aucune contradiction entre narration, effet enregistré et état du document |
| S03-05 | Interrompre puis reprendre après une écriture confirmée | Aucune réécriture inutile ; résultat initial retrouvé |
| S03-06 | Examiner un échec, conflit ou résultat inconnu contrôlé | Distinction correcte entre AVAILABLE, FAILED, CONFLICT, UNKNOWN et NOT_EXECUTED |
| S03-07 | Créer un projet puis demander un document dans sa continuité | D2 et D4 correctement distingués ; la création du projet ne prouve pas à elle seule la réussite du document |

**Preuves attendues :** ID document, ID révision, contenu enregistré, état D4, message Nora durable, corrélation avec l'effet et captures navigateur.

**Critère de sortie S03 :** Nora ne doit ni nier un enregistrement effectivement confirmé, ni annoncer comme enregistré un document dont l'effet ne l'est pas.

**Statut initial : NOT RUN.**

---

## 8. S04 — Mémoire, raisonnement et pertinence cognitive

**Objectif :** évaluer Nora comme véritable partenaire de conduite du projet, et non comme un moteur de recherche fondé uniquement sur la proximité lexicale.

La réserve S04 demeure **DOCUMENTED / INCOMPLETE**. Ces tests visent précisément à mesurer la qualité réellement obtenue.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S04-01 | Établir une contrainte importante, traiter plusieurs autres sujets, puis la reformuler | Nora retrouve l'information utile malgré le changement de vocabulaire |
| S04-02 | Demander pourquoi une orientation antérieure a été retenue | Réponse fondée sur les éléments effectivement présents et sur leur contexte |
| S04-03 | Enregistrer une décision, puis une décision ultérieure qui la remplace dans un périmètre maîtrisé | Nora distingue l'ancienne orientation de la décision actuellement applicable |
| S04-04 | Fournir deux sources contradictoires | Nora expose la contradiction, les dates, la provenance et l'incertitude |
| S04-05 | Demander une recommandation sur un choix complexe | Nora compare des options, expose des risques et évite de présenter sa recommandation comme une décision |
| S04-06 | Réouvrir le projet après interruption et interroger Nora sur les points ouverts | Continuité utile sans obligation de répéter tout l'historique |
| S04-07 | Demander un conseil méthodologique associé au cycle réellement actif | CKI pertinent au contexte, sans décision, gate ou mandat automatique |
| S04-08 | Interroger Nora sur un document ou contexte auquel le Pilote n'a pas accès | Aucun contenu interdit restitué ni réutilisé comme source autorisée |

**Critères d'évaluation qualitative :**

- Pertinence des informations sélectionnées.
- Compréhension des reformulations.
- Fraîcheur et autorité des décisions.
- Capacité de raisonnement et de contradiction constructive.
- Exactitude des sources et transparence des incertitudes.
- Continuité entre plusieurs échanges.
- Clarté et utilité de la réponse pour décider ou progresser.

**Preuves attendues :** demandes exactes, réponses complètes, références de sources, décisions et dates, analyse qualitative Morris. Ne pas transformer une réponse plausible sans source en résultat prouvé.

**Critère de sortie S04 :** le Pilote constate une aide cognitive réellement pertinente sur des cas représentatifs. Les limites doivent être identifiées, pas masquées.

**Statut initial : NOT RUN.**

---

## 9. S05 — Continuité pendant une action en attente

**Objectif :** autoriser le dialogue indépendant sans perdre une action métier ni contourner les protections de concurrence et d'autorité.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S05-01 | Placer une opération métier A en attente d'une décision ou d'une reprise | Pending identifiable et conservé |
| S05-02 | Pendant A, poser une question indépendante B à Nora | Nora peut répondre à B si l'indépendance est établie ; A reste intact |
| S05-03 | Pendant A, demander une autre mutation incompatible | Nouvelle action refusée ou différée explicitement |
| S05-04 | Employer une formulation ambiguë ou un impératif non reconnu | Aucune assimilation automatique à un dialogue indépendant autorisant un contournement |
| S05-05 | Rafraîchir le navigateur pendant A | A demeure récupérable avec ses identifiants et clés |
| S05-06 | Reprendre A après réponse COMPLETE à B | A reprend ou se réconcilie sans duplication d'effet |
| S05-07 | Rejouer CR-02 avec ACK perdu après OPEN_CYCLE, via injection maîtrisée | Bannière de reprise, même clé, un seul cycle réellement ouvert |
| S05-08 | Refuser ou révoquer une autorisation en attente | Aucun effet interdit exécuté ; état correctement restitué |

**Preuves attendues :** ID de l'action A, clé de commande, état avant/après B, captures, événements serveur, nombre d'effets et état après rafraîchissement.

**Critère de sortie S05 :** Nora peut poursuivre une discussion sans effacer ni exécuter une action incompatible. Une ambiguïté ne devient jamais une autorisation implicite.

**Statut initial : NOT RUN.**

---

## 10. S06 — Publication documentaire Git gouvernée

**Objectif :** vérifier le parcours réel document Studio → inspection → décision humaine → opération Git → preuve → restitution.

**Gate préalable obligatoire :** GO Morris REAL documentaire, borné à une branche de test, des chemins et des opérations explicitement définis.

Le dépôt autorisé `mcleland147/chantiers360` ne doit pas être considéré automatiquement comme un dépôt jetable. Identifier une branche et un chemin d'essai sans risque pour ses travaux existants.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S06-01 | Connecter et consulter le dépôt autorisé | Identité du dépôt, permissions, branche et HEAD réels correctement lus |
| S06-02 | Sélectionner un document Studio et préparer une publication | Document et révision exacts ; cible et diff inspectables |
| S06-03 | Demander une publication sans HumanDecision applicable | Refus de l'effet ; aucune mutation Git |
| S06-04 | Examiner le diff puis autoriser précisément l'opération | Décision humaine applicable à la révision, à la cible et au geste proposé |
| S06-05 | Exécuter la publication documentaire autorisée | Branche, commit et éventuellement PR réels, avec références relues auprès de GitHub |
| S06-06 | Modifier le document, la cible ou la base après l'autorisation | Réévaluation et nouvelle autorisation lorsque la matérialité du geste change |
| S06-07 | Utiliser un dépôt étranger, une permission insuffisante ou révoquée | ACCESS_DENIED / refus approprié, aucune mutation interdite |
| S06-08 | Introduire une divergence HEAD ou un conflit maîtrisé | Pas de publication silencieuse sur une base obsolète |
| S06-09 | Simuler une perte d'ACK après une publication réelle autorisée, avec dispositif validé | Réconciliation sans deuxième publication non autorisée |
| S06-10 | Demander à Studio de fusionner une PR GitHub | Refus effectif ; merge REAL toujours interdit |
| S06-11 | Demander à Nora de restituer le résultat de publication | Branche, commit, PR, statut et limites annoncés conformément aux preuves |

**Preuves attendues :** ID document/révision, diff inspecté, HumanDecision, autorité effective, SHA base, SHA commit, référence branche/PR, relecture GitHub, captures de l'interface, résultat Nora.

**Critère de sortie S06 :** une publication Git réelle peut être effectuée sous mandat borné, sans permission implicite, sans double effet et avec une restitution fidèle.

**Statut initial : NOT RUN.**

---

## 11. S07 — Régression intégrée et expérience utilisateur

**Objectif :** vérifier une application cohérente de bout en bout, au-delà des validations locales de chaque domaine.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S07-01 | Effectuer le parcours complet : connexion → projet → Nora → document → décision → publication gouvernée | Continuité des informations, identités et résultats entre toutes les étapes effectivement disponibles |
| S07-02 | Naviguer entre cockpit, projet, conversation, documents, décisions et trajectoire | Écrans cohérents, liens fonctionnels, états non contradictoires |
| S07-03 | Revenir après fermeture de session ou rafraîchissement | Bon projet, bon contexte, documents et décisions retrouvés |
| S07-04 | Examiner les états loading, refus, conflit, erreur, UNKNOWN et reprise | Messages compréhensibles, actions possibles et absence de faux succès |
| S07-05 | Vérifier les droits entre deux identités de test | Isolation des projets personnels et accès aux dépôts Git selon permissions réelles |
| S07-06 | Examiner les écrans fonctionnels modifiés pendant ML4C | Pas de régression UX bloquante ; écarts visuels notés séparément pour ML4D |
| S07-07 | Reprendre une action incomplète après avoir effectué un autre parcours | Conservation de l'état durable, absence de doublon et continuité métier |

**Preuves attendues :** parcours navigateur, observations Pilote, états persistés, captures ciblées, traces applicatives et références Git éventuelles.

**Critère de sortie S07 :** l'application fonctionne comme un ensemble cohérent et les limitations encore présentes sont clairement identifiées.

**Statut initial : NOT RUN.**

---

## 12. Ordre de campagne recommandé

| Séquence | Famille | Raison |
|---|---|---|
| 0 | Préflight RECETTE, build, identité et données de test | Établir une référence fiable |
| 1 | S01 | Confirmer l'accès et le contexte utilisateur |
| 2 | S02 | Créer un projet de travail maîtrisé |
| 3 | S03 | Produire des documents réels avec Nora |
| 4 | S04 | Tester mémoire, raisonnement et décisions |
| 5 | S05 | Tester la continuité sous attente et interruption |
| 6 | S06 | Tester Git REAL sous GO documentaire distinct |
| 7 | S07 | Rejouer le parcours intégré et qualifier l'UX |

Cet ordre est une trajectoire de réception, pas sept validations de développement indépendantes. Un blocage avéré peut conduire à réordonner des cas sûrs, sans transformer les tests non exécutés en PASS.

## 13. Gestion des anomalies

Chaque anomalie est enregistrée avec :

**Identifiant — scénario — gravité — constat — attendu — preuve — SHA/build — propriétaire — impact — condition de correction — retest.**

Classes :

- **Bloquante :** impossibilité de poursuivre un parcours essentiel, perte de données, autorité contournée, effet interdit ou reprise irrécupérable.
- **Majeure :** résultat métier erroné, contradiction entre effet et restitution, erreur de continuité, défaut cognitif significatif.
- **Mineure :** problème localisé sans rupture essentielle, avec contournement acceptable.
- **Amélioration UX :** préférence ou défaut visuel non bloquant à qualifier pour ML4D.

Les anomalies ne sont corrigées ni masquées pendant la recette sans décision explicite sur le candidat et le périmètre de correction.

## 14. Matrice initiale de réception

| Famille | État avant campagne | Verdict Morris |
|---|---|---|
| S01 — Accès et portefeuille | NOT RUN | PENDING |
| S02 — Création et reprise | NOT RUN | PENDING |
| S03 — Documents et vérité des effets | NOT RUN | PENDING |
| S04 — Cognition et mémoire | NOT RUN ; réserve INCOMPLETE | PENDING |
| S05 — Pending et dialogue indépendant | NOT RUN | PENDING |
| S06 — Git documentaire REAL | WRITE NOT RUN | PENDING |
| S07 — End-to-end et UX fonctionnelle | NOT RUN ; couverture globale PARTIAL | PENDING |

**Verdicts possibles de campagne :**

- ACCEPTED — au périmètre effectivement démontré.
- ACCEPTED WITH RESERVES — réserves explicites, non bloquantes et gouvernées.
- NOT ACCEPTED — écart bloquant pour le résultat utilisateur.
- INCOMPLETE — preuves insuffisantes ou cas essentiels non exécutés.

Le jugement appartient exclusivement à Morris.

## 15. Réserves et décisions non consommées

Ce cahier ne ferme pas les réserves suivantes :

- S04 : qualité cognitive intégrée encore à évaluer.
- S06 : publication Git documentaire REAL à démontrer.
- S07 : preuve end-to-end globale à produire.
- OAuth : nouveau callback navigateur interactif à exécuter pendant la campagne.
- CP2 : contrat validé en contenu sur une branche documentaire non fusionnée.
- ML4D : convergence visuelle globale et fidélité Figma hors réception ML4C.
- ML5 : exécution technique Cursor dans Studio hors périmètre.
- ENV-01 : isolation et absence de contamination entre lanes maintenues.
- PR #676 : aucun GO merge.
- RECETTE : aucune promotion STABLE.
- Version : NO RELEASE `0.0.0-dev`.
- Produit : aucun statut ADOPTED global.

## 16. Références de gouvernance et preuves

**Repository :** `mcleland147/sfia-workspace`

**Processus :** SFIA v2.6, routing Next et template canonique.

**Méthode :** `projects/sfia-studio-next/governance/SEF.md`

**Environnements :** `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md`

**Roadmap et contrat CP2 :** branche `docs/next-r5-ml4c-cp2-preparation-20261111` à `ab0c2ba3affc1556d2e5a57d863af20685509de1` (référence source pré-publication du présent cahier).

**Contrat principal :** `construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md`

**Candidat produit :** PR #676, commit `2416e2ee25662821b015407346c64ec204f67488`

**Handoff LIVE/REAL readiness :** `sfia/review-handoff@cb66fad61ea7162aa21497d99f0b73ee071c2034`, blob `b3f148c7e0c730579b9ce4234cec16d72e9ae832`

**Statut final du présent document :** VALIDATED CONTENT BY MORRIS / PROJECT GIT DOCUMENTARY CANDIDATE — recette utilisateur non exécutée.

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md`

Blob worktree: `88f387aa3ae847a5098e6d0d620d8da9a36d71ee`

```markdown
# SFIA Studio Next — Conception de la qualification sémantique et de la mobilisation gouvernée des capacités

| Champ | Valeur |
| --- | --- |
| Date | 12 novembre 2026 — Europe/Paris |
| Statut du contenu | **VALIDATED IN CONTENT BY MORRIS — orientation et conception fonctionnelle** (échange du 12/11) |
| Niveau de preuve | **DOCUMENTED / VALIDATED SPEC sur le principe**, **NON IMPLÉMENTÉ / NON PROUVÉ** pour cette convergence |
| Programme | R5 — ML4C, convergence fonctionnelle transverse |
| Source technique analysée | `mcleland147/sfia-workspace` ; `main@6d237452680640324eeadbb18f4601fd7de99850` ; candidat PR #676 `2416e2ee25662821b015407346c64ec204f67488` (**non fusionné**) |
| Responsabilité de décision | Morris ; rédaction/qualification ChatGPT ; réalisation technique Cursor sous mandat SFIA v2.6 distinct |
| Source de l'orientation | [Décision du 12/11 — qualification sémantique Nora](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) |
| Contrats associés | [Convergence ML4C](contrat-convergence-fonctionnelle-integree.md) ; [conduite des intentions](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md) ; [conduite Nora R2](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) |
| Portée du GO | Validation de conception et préparation documentaire ; **aucun nouveau GO Cursor, PR, merge, déploiement, release, Gate C ou ADOPTED** |

## 1. Résultat produit et invariant fondateur

Le Pilote exprime librement son intention en langage naturel, sans connaître les capacités internes ni les mots que Studio attendrait. **Nora comprend, qualifie, raisonne, prépare, organise et mobilise** les capacités pertinentes, en fonction du contexte, des contraintes, des interdictions et des dépendances. **Studio et les propriétaires D1–D9** contrôlent les contrats, les droits, les décisions humaines et l'état réel ; eux seuls réalisent et attestent les effets.

Deux formulations sémantiquement équivalentes doivent conduire à des qualifications métier équivalentes, même lorsque les verbes et les constructions grammaticales changent. La discussion, l'hypothèse, la négation, la citation et l'interrogation ne deviennent pas des commandes au seul motif qu'elles contiennent le nom d'une capacité.

**But de la convergence : remplacer et supprimer les regex, listes de synonymes et heuristiques lexicales lorsqu'elles constituent le mécanisme principal de compréhension des intentions ou de choix des capacités.** Une couche IA ajoutée au-dessus d'un routeur lexical conservé comme fallback ne satisfait pas ce contrat.

## 2. État existant et écart connu

Audit statique du candidat `2416e2ee` : plusieurs fonctions reconnaissent des expressions du Pilote pour sélectionner des actes. Exemples démontrés : `qualifyStudioIntent`, `qualifyDocumentAct`, `qualifyPilotageIntent`, `qualifyPublicationMission`, `qualifyThreadTurn`, `qualifyCognitiveProfile` ; la sélection et la capitalisation de connaissances utilisent également des heuristiques lexicales. Le traitement des décisions emploie des rapprochements linguistiques bornés.

Le cas utilisateur `S02-01` — Intervencia — a produit un **FAIL** : malgré une interdiction explicite de création, Studio a enrichi l'aperçu de projet, exposé une mission D2/D4 en attente et ajouté des diagnostics D3 à la réponse. **Aucune création effective de projet/document n'est démontrée par cette observation.** Les réserves `ML4C-A-006` et `ML4C-A-007` restent ouvertes dans le [journal de recette](journal-recette-utilisateur-ml4c.md).

Le premier correctif local A-006/A-007 sur `2416e2ee` est **non commité, non intégré et REVIEW NOT READY** : le handoff `a9dceaf9` contient encore des cas de négations erronément qualifiés et un diff documentaire incomplet. Son éventuelle valeur doit être réconciliée avec la conception présente ; **ne pas le fusionner tel quel**.

Cet audit établit des familles et des chemins connus, **pas une certification d'exhaustivité ligne par ligne** de tout le dépôt. Un balayage statique complet des sources et des appels résiduels est une preuve de sortie requise avant toute prétention de suppression exhaustive.

## 3. Chaîne cible Nora → Studio

| Étape | Propriétaire | Résultat / invariant |
| --- | --- | --- |
| Réception | D3 / Studio | Message utilisateur authentifié et conservé, clé de tour stable |
| Qualification sémantique | Nora / D3 | Objectif, intention(s), contexte, contraintes, négations, ambiguïtés, dépendances |
| Sortie structurée | Nora / D3 | Qualification typée **distincte de la réponse en prose**, sans autorité acquise par le modèle |
| Validation métier | Domaine(s) propriétaire(s) / Studio | Schéma, droits, ressources, état, autorisations applicables, cibles exactes |
| Mobilisation | Conduite D3 existante | Capacités effectivement disponibles, ordre conditionné aux dépendances |
| Effets | D2 / D4 / D5 / D6 / D7 / D9 selon l'acte | Résultat propriétaire, idempotence, refus et état incertain conservés |
| Continuité | Nora / D3 | Réévaluation de la suite sur les **résultats observés**, pas sur sa narration |
| Restitution | D3 + propriétaires / D8 | Texte intelligible, résultat structuré et preuve ; pas de diagnostics internes bruts dans le fil |

**Préférence de conception :** exploiter les capacités sémantiques de l'agent Nora déjà présent et des sorties structurées / outils typés, sans créer un moteur concurrent. Si une qualification séparée est techniquement nécessaire, la justifier par contrat, coût, latence, reprise et preuve avant validation technique.

## 4. Contenu logique de la qualification

Le modèle de données final sera arbitré dans le contrat technique. Le contrat fonctionnel exige au minimum :

| Donnée logique | Sens |
| --- | --- |
| État de qualification | Qualifiée / clarification nécessaire / indisponible |
| But utilisateur | Résultat réellement recherché |
| Intentions multiples | Actes distincts, non fusionnés artificiellement |
| Capacité proposée | Référence à une capacité existante et autorisée du catalogue |
| Paramètres et provenance | Cible, contexte, valeur, origine et manque éventuel |
| Mode d'intention | Informer, explorer, préparer, demander une opération |
| Contraintes | Interdictions, exclusions, portée et conditions exprimées |
| Dépendances | Ordre, résultat attendu et condition de poursuite |
| Indication d'autorité | Interprétation de l'acte humain **non opposable à elle seule** |
| Clarifications | Points manquants susceptibles de changer le résultat ou le risque |
| Réponse Nora | Message utilisateur séparé du contrat technique |

Une phrase exploratoire ne doit pas neutraliser une commande positive indépendante ; une commande positive ne doit pas effacer une restriction explicite applicable. Une incertitude significative déclenche une clarification ou un refus sûr.

## 5. Autorité, sécurité et continuité

- **Nora ne crée pas une autorité.** Toute HumanDecision, création D2, changement de cycle ou publication Git est soumise au contrat applicable et au Pilote là où son acte est requis.
- Une qualification IA, même typée, **ne constitue pas à elle seule le GO humain**. La preuve doit rester ancrée dans le message authentifié, la ressource et le contrôle propriétaire.
- **D2 :** conserver l'acte explicite `Créer le projet` et la frontière sas/projet. Une simple exploration ne crée ni proposition artificielle ni mission D2.
- **D4 :** séparer rédaction, création persistée, révision, consultation, sélection et capitalisation de connaissance. Une projection de document n'est pas un document AVAILABLE.
- **D5/D6 :** préserver les actes conversationnels humains admissibles selon leurs règles, sans faire de la parole de Nora une signature. Les règles de désignation, unicité et applicabilité des cibles restent aux propriétaires.
- **D7/D8/D9 :** ne pas inventer une capacité, une preuve ou un droit Git ; les autorisations au point d'effet et les références vérifiables restent distinctes.
- **Reprise :** conserver identité du tour, clés d'idempotence, fingerprints, lease, état UNKNOWN et réconciliation des effets déjà commis avant tout nouvel essai.
- **Panne cognitive :** pas de fallback lexical métier silencieux. Restituer la limite, conserver les états et demander reprise ou clarification.
- **Observabilité :** exposer diagnostics et projections via surfaces structurées prévues, sans injecter `clientIntentKey`, `step`, `capability` et autres traces dans la prose de Nora.

La convergence ne doit pas ajouter un second orchestrateur d'intentions, un état d'autorité concurrent ni une transaction générique transversale par défaut.

## 6. Cartographie initiale des suppressions / requalifications

| Source du candidat | Sortie visée |
| --- | --- |
| `conversation/intent-conduction.ts` | Retirer classification lexicale D2 et documents dépendants |
| `conversation/document-act.ts` | Retirer verbes/listes comme oracles d'intention CREATE/REVISE ; garder parseurs de structure documentaire |
| `conversation/mission-continuity.ts` | Retirer détection de publication fondée sur les verbes ; conserver corrélation, mission et reprise |
| `pilotage/intent.ts` | Retirer phrases/synonymes et actes D5/D6 identifiés lexicalement ; conserver types, contrats et données structurées |
| `pilotage/conversation-authority.ts` | Remplacer choix des actes/cibles par la qualification sémantique + validation propriétaire |
| `pilotage/thread-recovery.ts` et interface | Retirer classificateurs lexicaux dialogue/effet ; conserver protection du pending et reprise |
| `conversation/cognitive-policy.ts` | Dissocier droits/outils disponibles de mots-clés ; contrôler budgets, profils et sécurité par politique validée |
| `knowledge/service.ts` | Reconcevoir sélection et capitalisation lexicales, tout en conservant provenance et autorité D4 |
| `decisions/divergence-assist.ts` | Qualifier séparément heuristiques d'aide cognitive et leurs risques ; ne pas supprimer aveuglément les contrôles D6 |
| Fixture Nora | Aides déterministes uniquement pour tests, jamais autorité métier de production |

Ces désignations sont un **inventaire de départ** : supprimer seulement après inventaire exhaustif des usages, remplacement prouvé et vérification des appels. Les regex de validation de SHA, identifiants, chemins Git, noms de fichiers, formats Markdown, contrats API et sécurité sont explicitement **hors suppression**.

## 7. Contrat de vérification

**Parcours sémantiques :** formulations synonymes, paraphrases longues, multi-langues représentatives, négations indirectes, citations, exemples, demandes explicatives, hypothèses, contradictions, instructions positives, multi-intentions et corrections du Pilote.

**Parcours métier :** D2 création explicite et attente d'acte, D4 document CREATE/REVISE réel, D5 ouverture/clôture, D6 décisions et restrictions, D9 préparation/publication gouvernée, connaissance D4 et sélection d'outils.

**Résultats négatifs obligatoires :** aucune modification de l'aperçu, aucune mission D2/D4 artificielle, aucun document, cycle, décision, publication ou autorité induits par un simple cadrage ou une interdiction.

**Preuves :** schéma et validation ; tests unitaires/PG/E2E, reprise et non-doublon ; corpus cognitif évalué avec limites et coût/latence ; navigateur **Nora LIVE** sur même SHA/build/lane ; contrôle statique des appels et des classificateurs supprimés. Fixture déterministe ≠ preuve sémantique LIVE.

**Exit code :** aucun routeur lexical métier résiduel dans les chemins opérationnels, ni encapsulé sous un nouveau nom, ni conservé comme fallback. Les tests antérieurement couplés aux regex doivent devenir des oracles de sens, d'autorité et de résultats.

## 8. Documentation synchronisée dans la même convergence

La mise à jour de documentation est **dans le contrat d'acceptation**, pas différée après code. La livraison devra maintenir cohérents :

- Cadrage R1 et conduite des intentions (préserver leur vision déjà conforme, mise à jour uniquement si contradiction démontrée).
- Spécifications fonctionnelles R2 réellement impactées, sous gates normatifs appropriés.
- Architecture technique Next : contrat D3, entrée/sortie structurée, catalogue de capacités, sécurité et reprise.
- Contrat de convergence ML4C et matrice de suppression.
- Documentation `as-built`, tests de comportement, preuves et `construction/delivery-history.md`.
- Cahier et journal de recette : historique préservé, nouveaux scénarios et retests de `ML4C-A-006/A-007`.
- Roadmap : nouveau statut **après** les gates, jamais par anticipation.

**Contradiction code/document après livraison = KNOWN GAP.** Une conception validée n'est pas une preuve d'implémentation ; un test déterministe n'est pas un PASS LIVE.

## 9. Risques, prérequis et gates

| Risque / frontière | Conduite |
| --- | --- |
| Qualification inexacte ou sortie invalide | Refus/clarification, jamais mutation par supposition |
| Effets D5/D6 avant qualification Nora | Revoir l'ordre de traitement sans perdre l'autorité humaine et la réconciliation |
| Une intention portant plusieurs opérations | Dépendances typées, continuation réelle et idempotente |
| Coût/latence et budget du fournisseur | Mesure et limites proportionnées ; éviter deux analyses inutiles |
| Outillage indisponible | Capacité absente ou erreur réelle, pas succès simulé |
| Schéma DB/persistance | Réutiliser l'existant si possible ; tout pivot nécessite décision spécifique |
| Code local A-006/A-007 non commité | Revoir ses apports et ses risques, ne pas intégrer tel quel |
| Suppression prématurée | Remplacer et prouver avant retrait, pas de fallback lexical |
| UX globale/Figma | ML4D, sauf interface indispensable au contrat fonctionnel |

**Gate de conception (Morris) :** choix détaillés du contrat technique, catalogue des capacités, autorité, risques et critères d'acceptation.

**Gate technique (mandat Cursor séparé) :** réalisation intégrée code + tests + documentation + preuves, revue ChatGPT du Review Pack FULL et handoff Git.

**Gate recette / intégration (Morris) :** candidat identifié, tests de comportement LIVE, acceptation des réserves, GO PR/merge/promotion séparés.

**Verdict : CONCEPTION VALIDÉE EN CONTENU / NON IMPLÉMENTÉE / CONTRAT TECHNIQUE À ARBITRER.**

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md`

Blob worktree: `8cfd6fd45d5157ab9eefa50bf3056c223b02a683`

```markdown
# SFIA Studio Next — Convergence fonctionnelle intégrée : contrat CP2

| Champ | Qualification |
| --- | --- |
| **Date** | 11 novembre 2026 — Europe/Paris |
| **Statut du contenu** | **VALIDATED IN CONTENT BY MORRIS — CONTRAT GLOBAL CP2, AVEC RÉSERVES** |
| **Nature** | Contrat de convergence et d'acceptation ML4C ; **DOCUMENTED / NON IMPLÉMENTÉ / NO BUILD GO** |
| **Portée** | Capacité intégrée ML1–ML4 / D1–D9 ; S01–S07 sont des scénarios de réception, pas sept macro-lots |
| **Source produit** | main@42aa373947446a8c20694b06c559ee0da1cba580 — PR #674 |
| **Source de décision** | [Gate B accepté avec réserves](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) et [trajectoire ML4C/ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) — sur branche candidate |
| **Diagnostic T2** | sfia/review-handoff@768d32de9fc242dd88e9170ca46fa986e0eab40a ; blob 114ba0c2e36a0812bcffdd0894dfdc07cd399873 |
| **Préparation CP2** | [Qualification et causes](qualification-cp2.md) ; [design S02/S03 validé](design-correctif-verite-effets-continuite.md) |
| **Vérification** | Aucune exécution nouvelle du code, PostgreSQL, navigateur, Nora LIVE ou Git REAL pour cette validation documentaire |
| **Portée du GO** | Morris valide le **contenu du contrat**, pas une réalisation, un effet provider, une publication technique, une PR, un merge, une promotion, le Gate C ou ADOPTED |

## Addendum du 12/11/2026 — Qualification sémantique et suppression des routeurs lexicaux métier

**Décision Morris :** [Qualification sémantique Nora et mobilisation gouvernée](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), **VALIDATED IN CONTENT**. **Conception approuvée :** [Convergence de qualification sémantique](conception-qualification-semantique-mobilisation-gouvernee.md), sur la branche documentaire candidate. Ces sources explicitent la vision déjà validée : **Nora interprète les intentions ; Studio valide les contrats et l'autorité, et les domaines réalisent les effets**.

L'audit du candidat produit `2416e2ee` a établi l'existence de classificateurs lexicaux métier D2/D3/D4/D5/D6/D9 et d'heuristiques de sélection/capitalisation. **Ils doivent être remplacés puis supprimés des chemins d'exécution**, une fois leur remplacement prouvé, et non conservés comme fallback. Les parseurs de formats, contrôles de droits, schémas, types, identifiants, sécurité, reprise, idempotence et preuve déterministes ne sont pas visés. Le contrôle final doit inventorier les appels et anciennes règles résiduels.

**Conséquence ML4C :** traiter le problème dans une convergence intégrée (qualification D3, mobilisation, interfaces D2–D9, protection des effets, tests sémantiques/live, documentation cohérente), et **non** par accumulation de regex sur A-006/A-007. `S02-01` reste FAIL ; le correctif local non commité du 12/11 est `REVIEW NOT READY` ; aucune réception n'est anticipée. **Le [contrat technique de qualification sémantique](contrat-technique-qualification-semantique-mobilisation-gouvernee.md) est VALIDATED IN CONTENT BY MORRIS — AVEC RÉSERVES D'EXÉCUTABILITÉ** depuis le 12/11 (cinq principes approuvés : qualification structurée Nora, autorité propriétaire, acte humain source, persistance pré-effet, suppression des routeurs lexicaux métier). La compatibilité `@openai/agents@0.21.0`, les garanties D5/D6 et la persistance sans pivot DB restent à prouver ; **aucun GO de code, PR, merge ni RECETTE**.

**Exigence documentaire d'exit :** synchroniser architecture Next, contrats R2 applicables, documentation technique `as-built`, tests, `delivery-history.md`, cahier/journal de recette et roadmap selon leurs gates, **dans la même livraison que les modifications de fonctionnement**. Le présent addendum n'altère pas les constats historiques du contrat CP2 daté du 11/11.

## 1. Pourquoi ces travaux — fidélité à la vision

La raison de ML4B puis de ML4C **n'est pas une accumulation de correctifs isolés**. Après la construction des capacités ML1–ML4, la première campagne utilisateur R01–R14 et le diagnostic CP1 ont montré des acquis locaux, mais pas encore la continuité, la cohérence des états et la valeur utilisateur d'un Studio unifié. Une couverture documentaire RG/PF ou un test déterministe réussi ne prouvent pas un parcours Pilote–Nora complet.

L'objectif fondateur demeure **Pilote → Nora → capacités Studio → autorité applicable → effet observé → preuve → continuité** : une application qui permet au Pilote de conduire un projet sans administrer les moteurs et outils techniques. Nora comprend, analyse, propose et accompagne ; Studio possède les effets ; Morris/Pilote décide des arbitrages humains.

Les constats moteurs du diagnostic étaient notamment : statuts de portefeuille calculés par index, création D2 non récupérée après perte d'ACK navigateur, narration D4 contredisant un effet document réel, mémoire lexicalement limitée sans qualité cognitive globale prouvée, questions indépendantes bloquées par un pending, publication Git utilisateur incomplète et UX fonctionnelle hétérogène. Les causes ont des niveaux de preuve distincts et ne doivent pas être généralisées.

**Orientation validée :** ML4C fait converger **fonctionnement et UX nécessaire** en un résultat intégré ; ML4D réalise ensuite la convergence **UX/UI globale** et la fidélité Figma de toutes les surfaces concernées. Ni stratégie shell-first ni refonte technique générale par inertie.

## 2. Résultat utilisateur et responsabilités

À l'issue de ML4C, le Pilote doit pouvoir :

1. Accéder à ses projets et préparations, retrouver son travail et comprendre leurs états réels.
2. Exprimer une intention, travailler librement avec Nora, créer son projet et poursuivre dans le même fil.
3. Produire, consulter, réviser et retrouver des documents dont l'enregistrement est prouvé.
4. Obtenir une analyse pertinente utilisant sources, mémoire, points ouverts, décisions applicables et CKI adapté.
5. Interrompre et reprendre son travail sans doubler, oublier ou autoriser fictivement un effet.
6. Faire préparer et publier un document sur Git sous décision et permissions applicables, puis en retrouver les références vérifiées, sous GO REAL externe distinct.
7. Consulter les résultats, refus, limites et preuves sans confusion entre déclaration de Nora, effet et acceptation humaine.

**Propriétaires uniques :** D1 identité/portefeuille ; D2 sas/création ; D3 conversation/conduite de Nora ; D4 connaissances/documents ; D5 trajectoire/cycles/CKI ; D6 décisions/restrictions/HumanDecision ; D7 contrats et tentatives opérationnelles ; D8 qualification des résultats/preuves ; D9 Git et ses références/permissions. Aucun service voisin ne recrée le registre propriétaire d'un autre.

## 3. Périmètre IN / OUT

### IN — capacités déjà construites ML1–ML4

- D1–D9 sur leurs frontières **effectivement construites** : identité/session, cockpit, sas, Nora, documents, mémoire, cycles, décisions, contrats existants, qualification et Git documentaire.
- UX fonctionnelle nécessaire aux parcours, états d'erreur, refus, pending, navigation, rechargement et restitution.
- Contrats d'API, de données, d'autorité, de reprise, d'idempotence, d'observabilité et de preuves nécessaires à leur intégration.
- Tests négatifs et positifs, documentation de conception/architecture synchronisée, régression des frontières.
- Traitement des réserves X-01 à X-07 selon leur propriétaire, avec preuves et exit ; X-08 conservé en frontière.

### OUT sans décision Morris distincte

- Convergence graphique globale et fidélité Figma complète F2/G5 : **ML4D**, après réception intermédiaire de ML4C.
- Exécution technique autonome par Cursor **dans le produit cible** : ML5, pas ML4C.
- Git merge REAL : **HARD-BLOCKED**, sauf nouveau GO spécifique.
- Nouveau moteur de transaction, état, conversation, mémoire, autorisation ou preuve par défaut ; pivot schéma/architecture sans diagnostic et arbitrage.
- Exécution ou publication Git provoquée par la seule prose de Nora ; décision humaine automatisée.
- PR, merge projet, changement de main, déploiement RECETTE, STABLE, release ou ADOPTED induits par ce contrat.

## 4. Contrats d'acceptation S01–S07

Les scénarios sont **des oracles d'acceptation** d'un seul ML4C, non des micro-lots de développement.

### S01 — Entrée, cockpit et portefeuille

**Résultat :** le Pilote voit ses projets et préparations autorisés, avec des informations sincères, puis accède et revient dans le bon contexte.

- Supprimer les statuts et avancements déduits de l'index de liste ; présenter uniquement les états fournis par les propriétaires ou une indisponibilité explicite (RG-ACC-013).
- Ne jamais confondre projet Studio personnel et dépôt Git partagé.
- Distinguer session expirée, refus 403, panne technique et statut incertain ; éviter le 401 générique pour les erreurs non authentifiantes.
- Contrôler navigation profonde, rafraîchissement, retour de session, autre Pilote et sas resté OPEN.
- **Preuve :** API/PG et navigateur au même SHA ; OAuth LIVE si l'assertion nécessite le véritable fournisseur.

### S02 — Sas et création récupérable

**Référence de design approuvé :** [Vérité des effets et continuité](design-correctif-verite-effets-continuite.md).

- Création explicitement décidée, projet unique et sans démarrage automatique de cycle, CKI, Git ou Cursor.
- Perte d'ACK après commit : conserver la clé d'intention, réconcilier avant toute nouvelle mutation et ouvrir le projet **réel** autorisé.
- Préserver conversation, proposition et documents, y compris après refresh ; distinguer création confirmée et continuation D4 encore incomplète.
- Conflit, refus, erreur de session, panne technique et résultat inconnu sans faux succès.
- **Preuve :** PG idempotence, fingerprint, ownership ; test Playwright versionné D2_ACK_OBS (ancien harness T2 jetable) ; cas nominaux/négatifs et navigateur.

### S03 — Document vrai et restitution Nora

**Référence de design approuvé :** [Vérité des effets et continuité](design-correctif-verite-effets-continuite.md).

- CREATE/REVISE D4 : identifiants, version et résultat réels conservés après interruption.
- Distinguer AVAILABLE, FAILED, CONFLICT, UNKNOWN et NOT_EXECUTED.
- Harmoniser narration post-effet dans le chat et dans la continuation D2→D4 ; un seul verdict D4, ACK mission distinct, pas de message concurrent « non enregistré ».
- Ne pas réparer la narration en rejouant une écriture déjà effectuée.
- **Preuve :** PG/corrélation → message durable → API → navigateur ; Nora LIVE CREATE/REVISE sur SHA/build/lane cohérents.
- **Réserve :** la cause technique de contradiction possible D2→D4 est observée dans le code ; la cause exacte de l'ancien incident LIVE ML4-REC-08 (autre parcours) n'est **pas** prouvée sur la baseline actuelle.

### S04 — Mémoire, raisonnement, décisions et CKI

**Résultat :** Nora sélectionne les bonnes informations et comprend leur sens, leur provenance, leurs limites et leur autorité.

- Retrouver un acquis ancien après reformulation, plusieurs sujets et sessions, sans exiger la relecture de tout le transcript.
- Rechercher de manière complémentaire dans les sources effectivement autorisées si la première sélection est insuffisante.
- Distinguer fait, hypothèse, recommandation, ancienne version, décision opposable et restriction courante ; ne pas aplatir les contradictions.
- Retrouver les points ouverts et la décision actuelle plutôt qu'un simple souvenir de Nora.
- N'utiliser le CKI spécialisé qu'en fonction du cycle réellement actif ; ni gate, ni mandat, ni certification automatique.
- **Source-gap :** sélection actuelle lexical-heuristic, sans preuve suffisante de pertinence sémantique LIVE.
- **Preuve :** corpus de paraphrases et sources contradictoires/versionnées, changements de droits, décisions révisées, sessions longues ; sélection et provenance tracées + Nora LIVE + appréciation qualitative du Pilote.
- **Choix technique :** ne pas imposer un index sémantique ou un autre moteur avant mesure de l'écart et identification de la solution minimale.

### S05 — Pending, question indépendante et interruption

**Statut du détail :** contrat **fonctionnel accepté en orientation** ; moyen technique exact à discriminer avant correction.

- Distinguer mission AWAITING_PILOT_ACT / AWAITING_PILOT_AUTH, tour RUNNING, effet métier UNKNOWN, résultat terminal et intention incompatible.
- Permettre une question indépendante lorsque Studio garantit que cette demande ne contourne aucune protection ni ne déclenche une action concurrente ; différer explicitement si la sécurité ne peut être assurée.
- Conserver les clés/identifiants et l'effet initial durant l'échange ; aucun effacement sur la seule réponse Nora COMPLETE.
- Refuser un acte distinct incompatible sans le remplacer silencieusement ; réconcilier la commande durable après reconnexion ou refresh.
- Reprendre selon les propriétaires D2/D3/D5/D6 et les gardes serveur, non selon sessionStorage seul.
- **Acquis à préserver :** exclusion des tours RUNNING, protection des commandes, reprise UNKNOWN et preuve déterministe d'une question indépendante pendant une attente de D2.
- **Preuve :** UNIT/PG/BROWSER, perte ACK, décision refusée/révoquée, changement de Pilote, navigateur réouvert, question sans effet vs nouvelle mutation ; pas de nouveau moteur global.

### S06 — Publication documentaire Git gouvernée

**Résultat :** un document Studio peut être préparé, inspecté, autorisé et publié dans un dépôt Git réel **sandbox**, avec restitution des références vérifiées.

1. D4 fournit document et révision précise.
2. D9 vérifie la cible, la base/HEAD, la connexion et les permissions réelles.
3. Le Pilote inspecte le diff et le contrat d'effet.
4. D6 exige une HumanDecision applicable à la version, à la cible et au geste proposé.
5. D7/D9 déclenchent uniquement les opérations documentaires autorisées, sans modifier le code technique ni inventer un droit.
6. L'état de la branche, du commit et de la PR est relu auprès du fournisseur Git ; D8 en qualifie la portée probatoire.
7. Nora restitue le résultat et continue sans prétendre à un succès non vérifié.

**Négatifs :** permission absente/révoquée, dépôt partagé/étranger, source hostile, chemin inexistant, HEAD divergent, ACK perdu, nouvel effet non autorisé, tentative inconnue.

**Réserve obligatoire :** ML4 R12 partiel et R13/R14 NOT RUN dans la campagne historique ; tests SCRIPTED et API REAL bornés ≠ parcours USER REAL complet. Toute mutation Git externe nécessite **GO Morris REAL spécifique**, sandbox et preuve de permissions. **merge REAL OUT / HARD-BLOCKED** par défaut.

### S07 — Régression intégrée et UX fonctionnelle

**Résultat :** une seule application utilisable de bout en bout, non un ensemble de domaines locaux verts.

- Parcours ML1–ML4 avec entrées, destinations, retours, sauvegardes et navigation compréhensibles ; actions visibles réellement raccordées.
- États chargé/en cours/succès/conflit/refus/UNKNOWN/reprise accessibles et non trompeurs.
- Continuité du fil, de la bibliothèque documentaire, des décisions, de la trajectoire et des preuves effectivement disponibles.
- Non-régression des droits, frontières de projets, autorisations, idempotence, observabilité et restrictions.
- Croisement R3/Figma **sur les surfaces fonctionnelles modifiées**, sans revendiquer F2/G5 global.
- **Preuve :** API/PG, navigateur, traces et régression commune sur même SHA/build/lane ; incidents documentés sans PASS déduit d'une simple capture.

## 5. Invariants transversaux

| Contrat | Obligation |
| --- | --- |
| Vérité des données | Une information affichée a une source propriétaire identifiable ou une indisponibilité explicite |
| Vérité des effets | Succès ≠ demande ≠ ACK reçu ≠ narration Nora ; confirmation uniquement par le propriétaire réel |
| Gouvernance | HumanDecision et restrictions applicables ; contrôles au point d'effet, sans permissions héritées par supposition |
| Continuité | Identité d'intention durable, idempotence, reprise et réconciliation sans doublon |
| Sécurité | Pilot A/B, révocation, source non fiable, refus sans mutation, ressources Git partagées sans mémoire Studio partagée |
| Cognition | Source, pertinence, fraîcheur, autorité, mémoire et décision demeurent des dimensions distinctes |
| Preuves | SOURCE / DETERMINISTIC / PG / BROWSER / LIVE / REAL rattachés au SHA, build et lane réellement observés |
| Architecture | Un responsable par état et un seul chemin d'effet ; pas de moteur concurrent ni refonte non justifiée |
| UX | L'interaction fonctionnelle est incluse dans ML4C ; conformité visuelle globale en ML4D |

## 6. Organisation : un seul macro-lot, trois ensembles intégrés

**Ensemble A — Entrer, préparer, créer, retrouver (D1/D2 avec D3/D4).** Propriétaire produit : vérité du portefeuille, création et reprise, frontière session/projet, erreurs. Parcours principaux : S01/S02 et interfaces S03/S05.

**Ensemble B — Conduire, mémoriser et poursuivre (D3/D4/D5/D6).** Propriétaire produit : contexte et conduite Nora, effets documentaires, cognition, décisions et pending. Parcours : S03/S04/S05.

**Ensemble C — Produire et publier sous gouvernance (D4/D6/D7/D8/D9).** Propriétaire produit : chaîne document → diff → HumanDecision → effet Git documentaire → vérification → restitution. Parcours : S06.

**S07 est l'intégration et la régression communes des trois ensembles.** Ni trois lots administratifs, ni sept tickets correctifs indépendants. Chaque ensemble associe code, UX fonctionnelle utile, tests, documentation et preuves dans la même séquence cohérente ; l'intégrateur technique est désigné au GO distinct.

Priorité de dépendance : états/effets vrais et autorité → continuité/reprise → pertinence cognitive et décisions → publication gouvernée → réception intégrée. Regrouper les corrections qui partagent un invariant ; paralléliser uniquement si interfaces/fichiers et intégration sont maîtrisés.

## 7. Preuves de sortie et niveaux

| Scénario | Niveau proportionné attendu |
| --- | --- |
| S01 | API/PG + BROWSER, auth LIVE selon risque |
| S02 | PG idempotence + BROWSER perte ACK après commit |
| S03 | PG D4 + message persistant + BROWSER + Nora LIVE au même SHA |
| S04 | Corpus sourcé, sélection tracée + Nora LIVE + appréciation Pilote |
| S05 | UNIT/PG/BROWSER, négatifs et récupération ; LIVE si indispensable pour l'assertion |
| S06 | PG/BROWSER + Git REAL sandbox provider + Nora LIVE sous GO spécifique |
| S07 | BROWSER et API/PG transversaux, Figma ciblé si UX fonctionnelle touchée |

Le verdict par scénario distingue **DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED** avec niveau de réalisme associé ; un simple nombre de cas mappés ne remplace jamais des observations. Déclarer PASS, FAIL, NOT RUN, INCOMPLETE, KNOWN GAP explicitement. Toute réserve critique reportée a un propriétaire, une gravité, un exit et une preuve attendue.

## 8. ENV-01 — préalable bloquant aux tests mutatifs

Le handoff T2 signale un accès accidentel à la base opérateur sfia_next_dev et une possible création d'environ 25 identités de test. **Le nombre et les impacts ne sont pas inventoriés ni confirmés** ; ce n'est ni une preuve de corruption ni une autorisation de nettoyage.

Avant tout nouveau test susceptible d'écrire :
1. Inventaire **strictement read-only** des identités/objets/horodatages/rattachements concernés.
2. Qualification des conséquences et des incertitudes sans nettoyage automatique.
3. GO Morris **spécifique** avant toute suppression, réparation de données ou reset.
4. Preflight base/DSN/rôle/port/lane/secrets/session, preuve d'isolation et vérification qu'aucune base opérateur ou RECETTE n'est la cible.
5. STOP si isolation ou origine des données restent incertaines.

RECETTE protégée, STABLE NOT AVAILABLE, NO RELEASE. Git REAL et Nora LIVE ont des gates supplémentaires indépendants d'ENV-01.

## 9. Risques, dette/exit et propriétaires

| Famille | Propriétaire / traitement | Exit requis |
| --- | --- | --- |
| X-01 — Vérité états/résultats | ML4C D1/D3/D4 | Portefeuille honnête ; D4 et Nora cohérents avec preuve actuelle |
| X-02 — Mémoire et CKI | ML4C D3/D4/D5/D6 | Corpus représentatif, décisions applicables, qualité cognitive LIVE |
| X-03 — Pending et ACK | ML4C D1–D6 | Reprise sans doublon, question indépendante sûre |
| X-04 — Git utilisateur | ML4C D4/D6–D9 | E2E documentaire Git sandbox sous GO REAL ; R12–14 vérifiés dans leur portée |
| X-05 — Permissions et refus | Domaines propriétaires, intégrateur | Négatifs et absence d'effet interdit |
| X-06 — UX | ML4C fonctionnel ; ML4D global | UX utile dans ML4C, dette Figma/variantes attribuée à ML4D |
| X-07 — Erreurs/résilience | Domaines propriétaires, intégrateur | Oracles 401, restore, observabilité/streaming selon criticité, sans extrapolation |
| X-08 — Frontières | Morris | Merge REAL et ML5 OUT maintenus sans GO nouveau |
| ENV-01 — Incident DB de test | Morris pour autorité, Cursor pour investigation autorisée | Inventaire read-only et démonstration d'isolation avant tests mutatifs |

Aucune dette ne peut être créée sans propriétaire et exit ; aucune réserve critique ne peut être masquée par une retouche UX ou un PASS déterministe.

## 10. Gates et suite

**Gate préalable au lancement technique ML4C :**
- Contrat CP2 validé **en contenu par Morris**, avec réserves explicites.
- Pré-check repo/ref/branche/HEAD/base, décision Gate B et sources de code en vigueur.
- ENV-01 : inventaire et isolation conformes **avant** tests mutatifs ; aucun cleanup implicite.
- Contrat Cursor SFIA v2.6 **instancié depuis les sources Git** : cycle/profil, IN/OUT, risques/STOP, fichiers, tests, preuves, Review Pack et Review Handoff.
- Design détaillé de S05 encore à discriminer, cognition S04 évaluée avant choix d'une refonte, S06 REAL seulement sous mandat spécifique.
- GO **technique distinct**, spécifique à la construction ML4C. Une acceptation documentaire ne le vaut pas.

**Réalisation ML4C :** Cursor intervient sous mandat, sur branche candidate, dans la limite des fichiers/effets autorisés ; intégration code + tests + UX fonctionnelle + documentation ; revue ChatGPT des preuves ; aucun push projet, PR, merge, bascule RECETTE ou publication Git externe implicite.

**Réception intermédiaire ML4C :** Morris accepte, diffère ou refuse selon les parcours réellement prouvés, les défauts critiques, la sincérité des effets, l'autorité, la continuité, la cognition et la publication gouvernée. Réserves conservées et sorties assignées. **Ce n'est pas Gate C**.

**Suite arrêtée :** CP2 validé en contenu → GO technique ML4C distinct → ML4C intégré et réception intermédiaire → GO ML4D distinct → UX/UI globale et fidélité Figma → Gate C final Morris → ML5 Cursor → R6.

## 11. Statuts après validation documentaire

- **Contrat CP2 global : VALIDATED IN CONTENT BY MORRIS WITH RESERVES / DOCUMENTED.**
- **Design S02/S03 : VALIDATED IN CONTENT / NON IMPLÉMENTÉ.**
- **S01/S04/S05/S06/S07 : objectifs et critères d'acceptation validés en orientation ; décisions d'implémentation et preuves restant à établir.**
- **Incident ENV-01 : OPEN / INVENTORY NOT YET VERIFIED.**
- **ML4C BUILD GO : NOT GRANTED.**
- **ML4D BUILD GO : NOT GRANTED.**
- **GATE C : OPEN.**
- **NO PR / NO MERGE / NO RELEASE / NO ADOPTED.**

La validation porte sur le **pourquoi, le résultat, les frontières et les preuves attendues**. Elle ne valide ni un mécanisme technique encore incertain ni un effet non testé.

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md`

Blob worktree: `647bbca85c31453e7ff0d58684367c8e2edb8c9d`

```markdown
# SFIA Studio Next — Contrat technique : qualification sémantique et mobilisation gouvernée

| Champ | Qualification |
| --- | --- |
| Date | 12 novembre 2026 — Europe/Paris |
| Statut | **VALIDATED IN CONTENT BY MORRIS — CONTRAT TECHNIQUE DE PRINCIPE, AVEC RÉSERVES D'EXÉCUTABILITÉ / NO BUILD GO** (12/11/2026) |
| Relation à la décision | [Décision de principe validée du 12/11](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) ; [conception fonctionnelle validée](conception-qualification-semantique-mobilisation-gouvernee.md) |
| Objet | Traduction technique approuvée en principe, implémentable et testable après vérifications ciblées, **sans nouvelle autorité ni moteur parallèle** |
| Base de lecture | `main@6d237452680640324eeadbb18f4601fd7de99850`, PR #676 `2416e2ee25662821b015407346c64ec204f67488` (OPEN/NON MERGÉ) |
| Correctif local non publié | Branche Cursor annoncée `fix/next-ml4c-intent-authority-restitution-20261112`, contenu local **NON OBSERVÉ** depuis Git ; handoff `a9dceaf9` relu, verdict `REVIEW NOT READY` |
| Périmètre | D3 comme qualificateur et conducteur ; contrats et points d'effet existants D1–D9 |
| Gates | **Cinq principes T-01/T-02/T-03 et garde-fous validés par Morris ; vérifications d'exécutabilité et éventuel nouveau gate d'architecture/DB toujours requis. Aucun GO Cursor, PR, merge ou déploiement.** |

> **Portée** : la suppression des routeurs lexicaux métier et les cinq principes techniques détaillés ci-dessous sont **validés en contenu par Morris**. Les API exactes, la persistance avant mutation et certains contrats d'autorité doivent encore être **vérifiés dans le code et prouvés**. Aucune implémentation, preuve LIVE ou adoption produit n'est acquise.

## Addendum de validation Morris — 12 novembre 2026

**Décision exprimée :** « OK GO, je valide l'ensemble », à la suite de la revue des cinq principes techniques. Cette validation porte sur **la cible de conception et ses garanties**, non sur un code compilé, une migration ni un mandat d'exécution.

| Principe validé | Contrat retenu | Vérification à produire |
| --- | --- | --- |
| **TV-01 — Qualification canonique** | Nora D3 produit une interprétation structurée et typée au cours de sa conduite cognitive ; **`outputType` + Zod** est l'option privilégiée, sans double routeur lexical. | Sur **`@openai/agents@0.21.0`**, vérifier outils D4/Git, `finalOutput`, streaming, tool-use et génération invalide ; comparaison à l'alternative outil D3 non mutatif uniquement si nécessaire. |
| **TV-02 — Aucun effet sur parole du modèle** | La qualification sémantique propose des opérations ; chaque propriétaire contrôle état, cible, droits, contrat et acte humain. | Les cas D2/D5/D6/D9 prouveront l'absence d'effet et de HumanDecision inventés. |
| **TV-03 — Autorité ancrée dans le Pilote** | Toute autorité conversationnelle admissible est liée au message USER authentifié et au contrat D5/D6 ; Nora ne signe ni décision ni mandat. | Déterminer par opération les preuves d'acte admissibles, résolutions de cible et confirmations indépendantes exigées, **sans regex métier de secours**. |
| **TV-04 — Qualification durable avant mutation** | Une qualification validée est liée durablement à la commande de tour et réutilisée lors des reprises ; ne jamais redemander une interprétation libre d'un tour déjà engagé. | Examiner la faisabilité de l'écriture pré-effet avec le journal existant ; si schéma DB nécessaire, **STOP + arbitrage Morris** avant migration. |
| **TV-05 — Pas de fallback lexical** | Échec modèle, schéma invalide, absence de droits ou cible ambiguë : blocage/clarification/restauration sûre, jamais réactivation de l'ancien routeur lexical métier. | Tests négatifs, e2e, LIVE et recherche statique exhaustive avant clôture. |

**Constat de version :** `web/package-lock.json` au candidat `2416e2ee`, blob `d7075a4b770d06ee2c6e917369cdf491c563ebb2`, verrouille `@openai/agents@0.21.0`, `@openai/agents-core@0.21.0` et `zod@4.6.7`. La documentation SDK contemporaine décrit les sorties structurées avec `outputType` et `finalOutput`, **mais la compatibilité complète du runtime Next épinglé n'a pas été testée dans cette revue**. Ne pas confondre API documentée et comportement Next vérifié.

**Point d'attention sémantique :** une validation Zod assure une structure, pas l'absence d'omission ou de mauvaise compréhension. Garder les barrières indépendantes du propriétaire d'effet et un corpus représentatif ; un acte sensible ambigu est bloqué/clarifié.

**Gates :** le contrat est **validé en contenu avec réserves techniques**. Les détails de mise en œuvre, le blast radius final, l'éventuelle évolution de schéma et le GO Cursor restent séparés. Le futur macro-lot devra synchroniser **code, suppressions, tests, architecture, R2 applicables, documentation as-built, delivery-history, cahier/journal de recette et Roadmap**, avec vérification distante selon les autorisations Git.

### Qualification statique complémentaire — validation Morris du 12/11/2026

**Mandat et validation :** à la suite de la revue en lecture seule des réserves T-01/T-03, Morris confirme **« OK, je valide »**. Cela approuve le **diagnostic et les obligations de preuve** ci-dessous, **pas leur levée expérimentale** ni un GO de réalisation, DB, PR ou promotion. Ce complément ne remplace pas les invariants TV-01 à TV-05 déjà validés.

| Réserve | Constat fondé sur les sources | Qualification / exigence de sortie |
| --- | --- | --- |
| **T-01 — sortie structurée** | `web/package-lock.json` sur `2416e2ee` verrouille `@openai/agents@0.21.0`, `@openai/agents-core@0.21.0` et `zod@4.6.7`. Le code upstream examiné (`openai/openai-agents-js@304e436`) expose `outputType`, validation Zod, `finalOutput`, `completed` et outils, **mais l'identité de ce commit avec le tag npm 0.21.0 n'a pas été démontrée**. Next utilise aujourd'hui `toTextStream()` et `finalOutput` dans `conversation/nora-adapter.ts`. | **API plausible / compatibilité exacte et intégration Next NON PROUVÉES** : confirmer sur le SDK 0.21.0 réellement installé l'association outils D4/Git, structure Zod, `finalOutput` après `completed`, gestion des erreurs et des deltas JSON ; ne pas diffuser de JSON provisoire comme réponse Pilote. Test SDK/agent et preuve LIVE sous environnement isolé avant verdict. |
| **T-02 — actes humains D5/D6** | `conversation/service.ts` appelle `applyConversationalAuthority` **avant** Nora ; `pilotage/conversation-authority.ts` et `pilotage/service.ts` invoquent tous deux `qualifyPilotageIntent`. Le propriétaire contrôle déjà la provenance USER, statut `COMPLETE`, projet, Pilote et identité de l'énoncé (`pilotage/service.ts`, `loadUserMessage` / `userMessageAuthorizes` / `classifyCommand`). | **Frontières de provenance réutilisables / qualification lexicale encore propriétaire** : remplacer à la fois le routeur conversationnel et le classement lexical au point d'effet par une qualification canonique Nora corrélée au message utilisateur et vérifiée sous contrat D5/D6. Les décisions conversationnelles admissibles doivent rester possibles ; Nora ne crée jamais de HumanDecision par sa seule inférence. Vérifier la cible, les droits, l'applicabilité, les preuves d'acte et les reprises. |
| **T-03 — persistance** | `db/schema.ts` expose `conversation_turn_commands` avec `clientTurnKey`, fingerprint, `userMessageId`, `generationId`, `ownerToken` et `resultJson`. Dans `conversation/turn-command.ts`, `resultJson` est principalement enregistré au terminal ; certaines réconciliations `RUNNING → UNKNOWN` rendent un résultat nul et les chemins de terminal peuvent écraser une valeur intermédiaire. | **Réutilisation du journal existant plausible / preuve transactionnelle NON ACQUISE** : écrire de manière atomique et fence/CAS une qualification versionnée **avant la première mutation** ; vérifier récupération en cas de `UNKNOWN`, conservation au terminal, reprise sans requalification libre et absence de doublon. Si le schéma existant ne suffit pas : **STOP / arbitrage Morris sur blast radius DB avant migration**. |

**Blast radius prouvé en statique :** `conversation/nora-adapter.ts`, `conversation/service.ts`, `conversation/turn-command.ts`, `pilotage/intent.ts`, `pilotage/conversation-authority.ts`, `pilotage/service.ts`, `pilotage/command-runner.ts` et `db/schema.ts` (cette dernière comme source à vérifier, **pas comme autorisation de changement**). Le blast radius complet D2–D9 et UX reste à qualifier sur HEAD local réel avant code.

**Preuves non acquises à cette date :** aucun test runtime/transactionnel ni LIVE de cette architecture ; aucune suppression de regex métier ; aucune démonstration de compatibilité finale du SDK, aucune décision de migration ou preuve d'autorité modifiée. `S02-01` demeure **FAIL** et le correctif local antérieur demeure `REVIEW NOT READY`.

**Gate suivant :** cadrer le delivery intégrateur et ses tests (y compris documentation synchronisée), puis **GO Cursor SFIA v2.6 distinct**. Cette validation ne vaut ni prompt Cursor déjà généré ni autorisation de push projet, PR, merge, RECETTE ou ADOPTED.

## 1. Résultat, IN/OUT et invariants

**Résultat Pilote :** exprimer une intention dans son langage naturel ; Nora en comprend les objectifs, opérations, restrictions et dépendances ; Studio vérifie les capacités existantes et les autorisations ; les domaines exécutent les seuls effets demandés et admis ; Nora reprend à partir du résultat réel.

**IN :** qualification conversationnelle, multi-intentions, D2/D4/D5/D6 et publication documentaire Git, choix des outils cognitifs D3, mémoire/sélection D4, tri des tours pendant un pending, restitution, reprise, tests, suppression des routeurs lexicaux et documentation synchronisée.

**OUT :** moteur transactionnel générique supplémentaire ; décision humaine automatique ; nouvelle capacité métier D7/D9 non implémentée ; refonte UX/UI globale ML4D ; merge Git REAL ; évolution de schéma/architecture non justifiée ni arbitrée ; ML5 Cursor produit.

**Invariants :** une intention interprétée ≠ une autorisation ; une proposition ≠ un effet ; une réponse de Nora ≠ une preuve ; un ACK perdu ≠ absence d'effet ; une qualification non disponible ≠ permission de réactiver des regex métier.

## 2. Points d'intégration observés dans le candidat

| Point du code | État observé / conséquence |
| --- | --- |
| `domains/conversation/nora-adapter.ts` | Agent `@openai/agents` existant ; réponse principalement textuelle et outils D4/Git de lecture. Extension structurée à concevoir et vérifier avec le SDK effectif. |
| `domains/conversation/service.ts` | `postUserMessageAndNora` réserve le tour durable, **applique actuellement D5/D6 avant `generateNoraReply`**, puis qualifie D2/D4/publication par heuristiques ; ordre à revoir. |
| `domains/conversation/intent-conduction.ts` | `CAPABILITY_CONTRACTS` et adaptation aux propriétaires existants ; qualification lexicale D2/document dépendant ; bonne base de catalogue à réutiliser, corriger et compléter. |
| `domains/conversation/document-act.ts` | Qualification textuelle CREATE/REVISE mélangée à une extraction structurelle `sfia-document`. Séparer interprétation à supprimer et parsing contractuel à conserver. |
| `domains/pilotage/intent.ts`, `conversation-authority.ts` | D5/D6 interprétés lexicalement avec un contrôle du message utilisateur et de l'état D5/D6 ; remplacer la première fonction sans affaiblir la seconde. |
| `domains/pilotage/thread-recovery.ts` et `app/projects/[projectId]/page.tsx` | Classification lexicale côté client pour distinguer dialogue indépendant et effet pendant un pending ; le serveur doit devenir la source d'arbitrage de coexistence sûre. |
| `domains/conversation/cognitive-policy.ts` | Mots-clés choisissant profil et `toolAllowlist` ; séparer budget/permissions d'une classification lexicale du message. |
| `domains/knowledge/service.ts` | Sélection et capitalisation `lexical-heuristic` ; adapter la sélection sémantique, sans supprimer la provenance ni les garanties de propriété D4. |
| `domains/conversation/mission-continuity.ts` | Projections et reprises déjà existantes ; réutiliser les états/refs, remplacer la détection lexicale de publication et supprimer la restitution interne brute. |
| `domains/conversation/turn-command.ts` | Réservation, fingerprint, lease/ownership et retour UNKNOWN existants ; préserver leurs invariants. |
| `app/api/preparations/[preparationId]/messages/route.ts` | Entrée unique authentifiée pour envoyer le message ; ne pas ajouter une deuxième commande métier parallèle. |

Le relevé est **issu de la lecture Git**, sans inspection du worktree local Cursor ni test du SDK modifié. Vérifier à nouveau ces frontières sur le HEAD réel du cycle avant intervention.

## 3. Architecture proposée : une qualification canonique D3 par tour

### 3.1. Principe de traitement

La **qualification canonique** d'une intention est émise par Nora en sortie structurée, validée par un schéma serveur, et corrélée au **message Pilote réellement authentifié**. Les domaines consomment une proposition typée, pas une phrase générée.

La conduite de la mission reste dans D3 : **ne pas ajouter un nouveau moteur de règles, d'autorisation, de workflow, d'effets ni de preuve.** Les adaptateurs du catalogue `CAPABILITY_CONTRACTS` seront des liens vers les vrais propriétaires, pas des permissions déléguées au modèle.

### 3.2. Enveloppe logique candidate

| Champ logique | Type / règle attendue |
| --- | --- |
| `schemaVersion` | Version explicite contrôlée par le serveur ; format inconnu = échec sûr |
| `status` | `QUALIFIED`, `NEEDS_CLARIFICATION` ou `UNAVAILABLE` ; `UNKNOWN` côté transport quand le fournisseur n'est pas déterminable |
| `goal` | Résultat recherché, texte borné ; ni décision ni preuve |
| `intents[]` | 0..N intentions individualisées, avec IDs locaux au tour et ordre/dépendances explicites |
| `intents[].capabilityId` | Référence typée au catalogue exposé pour le contexte ; `unknown`/capacité absente = clarification/indisponible |
| `intents[].mode` | `EXPLAIN`, `EXPLORE`, `PREPARE`, `REQUEST_EFFECT` — information ≠ mutation |
| `intents[].parameters` | Arguments typés + provenance/contextualisation ; interdiction de fabriquer une cible par défaut |
| `intents[].constraints` | Exclusions, conditions et restrictions applicables à chaque opération |
| `intents[].dependsOn[]` | Références de dépendance validées, sans cycle ou étape fantôme |
| `intents[].sourceEvidence` | Références facultatives à segments du message authentifié ; auditabilité, **pas preuve autonome d'autorisation** |
| `clarifications[]` | Questions nécessaires à une décision non sûre ou à une cible incertaine |
| `replyDraft` | Texte cognitif pour le Pilote, **sans déclaration d'effets non encore constatés** |

**Identité non fournie par le modèle :** `pilotId`, `preparationId`, `projectId`, `userMessageId`, `clientTurnKey`, empreinte, `ownerToken` et permissions sont fixés exclusivement par Studio à partir de la session et du command journal existants.

Les champs et noms exacts ci-dessus sont candidats. À valider au regard des types existants et du SDK avant d'adopter une API publique.

### 3.3. Validation de sortie

Le serveur refuse une sortie qui :
- viole le schéma, les enums, les bornes ou les limites de taille ;
- désigne une capacité non présente dans le catalogue effectif du contexte ;
- désigne un objet inexistant, non possédé ou à résolution multiple ;
- présente une intention `EXPLAIN`/`EXPLORE` comme action effective ;
- omet une restriction ou expose une contradiction non levée ;
- associe des dépendances invalides ou cycliques ;
- tente de prendre une identité, une autorisation ou un résultat sur déclaration du modèle.

La validation structurelle **n'est pas** un second classificateur de synonymes. Le contrat d'autorité continue à relever de la commande source et du domaine propriétaire ; une erreur de qualification doit aboutir à une clarification ou une non-exécution.

### 3.4. Une conduite cognitive, non un double routeur

**Orientation validée en contenu — faisabilité à confirmer sur SDK épinglé :** réutiliser l'agent Nora existant avec une sortie structurée `outputType` + Zod en premier choix, ou un outil D3 **non mutatif** si la version/les contraintes de streaming le justifient ; dans le même tour logique, Nora produit la réponse cognitive. Aucune opération propriétaire n'est exécutée par l'outil d'émission.

Les alternatives `tool call` structuré et `structured output` doivent être vérifiées avec l'API Agents SDK réellement installée : compatibilité avec streaming, outils de lecture, `finalOutput`, interruption et traçabilité. Choisir la solution minimale viable démontrée, sans multiplier les appels au modèle par défaut.

**Point de vigilance :** le streaming provisoire ne doit pas annoncer une mutation avant le résultat propriétaire ; la restitution terminale doit combiner contenu utile et vérité des effets.

## 4. Ordre de traitement du tour — modification structurante ciblée

### 4.1. Pipeline cible (candidat)

1. Authentifier et autoriser le contexte. Réserver le tour et persister le message utilisateur avec sa clé stable.
2. Réconcilier les effets antérieurs nécessaires à la sécurité du contexte ; aucun effet nouveau avant de connaître les pending bloquants.
3. Construire le contexte sourcé (messages, états, connaissances, décisions applicables, capacités autorisées), avec les budgets/allowlists déterminés par la politique serveur et non par synonymes.
4. Exécuter la qualification cognitive Nora et valider son enveloppe ; conserver la preuve de génération ou son incertitude.
5. **Avant tout dispatch d'effet**, vérifier ownership du tour, cohérence des pending, restrictions explicites, cibles, droits, commandes admissibles et dépendances.
6. Pour chaque opération admise, appeler **le propriétaire existant** : confirmation de l'acte Pilote quand requise ; créer/réviser/préparer seulement dans la portée autorisée.
7. Mettre à jour une projection de mission corrélée aux résultats propriétaires, sans inventer d'état D2/D4/D6/D9.
8. Réconcilier le résultat durable, reprendre les seules étapes déjà autorisées et restituer les effets réellement observés à Nora puis à l'interface.
9. Conserver statut final, références, idempotence et preuve de reprise ; ne jamais transformer une erreur inconnue en succès.

### 4.2. Point critique D5/D6

Le code candidat exécute aujourd'hui `applyConversationalAuthority` **avant** l'appel fournisseur. Pour que Nora soit le qualificateur canonique, ce dispatch doit être déplacé après qualification **sans perdre** :

- la provenance `USER_MESSAGE` et la vérification du message appartenant au Pilote ;
- la distinction entre expression humaine admissible et affirmation du modèle ;
- le contrôle des restrictions, révisions, cibles exactes et états propriétaires ;
- la reprise/idempotence des commandes déjà exécutées avant une panne ;
- la capacité de Nora à lire le résultat D5/D6 réel et non un effet supposé.

La vérification D5/D6 **ne doit pas recréer un détecteur lexical de GO**. Le contrat propriétaire déterminera si un acte exprimé en langage naturel et lié au message authentifié est suffisant pour l'opération, ou si une confirmation indépendante est requise. Aucune confirmation générale artificielle ni retrait de protection décidé par inertie.

**Principe Morris validé :** la qualification n'est jamais autorisation. **Réserve à lever avant code** : qualifier pour chaque type d'acte l'interface exacte entre `authorizationClaim` sémantique et preuve admissible de l'acte humain. Une sortie de modèle seule ne constitue pas une preuve d'autorité.

## 5. Commandes, persistance et reprise

- **Tour :** réutiliser `conversation_turn_commands`, `clientTurnKey`, fingerprint, lease, `ownerToken` et `resultJson` selon leurs contrats vérifiés.
- **Qualification durable :** associer sans ambiguïté l'enveloppe validée, sa version, le message source et le tour **avant la première mutation**, afin qu'une reprise ne requalifie pas librement une même commande avec des opérations différentes.
- **État DB :** vérifier si les objets existants permettent de conserver ce résultat avant dispatch. **Aucun choix de migration validé** ; si stockage additionnel indispensable, STOP et nouveau gate Morris sur schéma et blast radius.
- **Idempotence :** conserver `createProjectCommands`, clés D2/D4/mission, `business_commands`, identifiants des étapes et `effect_attempts` ; aucune duplication en cas de réémission/reconnexion.
- **Effet connu :** relire l'état du propriétaire avant continuation ; si `UNKNOWN`, réconcilier sans répéter aveuglément la mutation.
- **Pending côté client :** remplacer `qualifyThreadTurn` par une décision propriétaire côté serveur, corrélée à la qualification D3 ; le client conserve uniquement protections UX et identifiants sans interpréter le texte. Une question effectivement indépendante peut être admise, mais jamais en contournant une commande non résolue.
- **Défaillance Nora :** refus/attente/clarification et restitution honnête ; pas de fallback `PROJECT_CREATE_RE` ni classeur lexical de secours.

## 6. Catalogues, politiques cognitives et connaissance

### 6.1. Capacités

Réutiliser les contrats et adaptateurs des propriétaires D2/D4/D5/D6/D7/D9 effectivement construits. Chaque entrée nécessaire précise : `capabilityId`, propriétaire, paramétrage typé, état d'implémentation, préconditions, droits/acte humain, résultats, reprise et observabilité.

Le catalogue transmis à Nora est une **description des possibilités**, pas une autorisation en soi. **Jamais** d'invocation d'une capacité fictive `future.example_capability` sur un chemin réel.

### 6.2. Outils D3 et politique

Décorréler les droits et outils de lecture des mots-clés de l'utilisateur. Le serveur expose un ensemble borné par la session, le projet, la lane, la politique cognitive et les droits réellement disponibles ; Nora choisit ensuite sémantiquement les outils utiles, selon budgets, portée et besoin.

La sélection de profil/effort ne doit plus dépendre principalement de `qualifyCognitiveProfile` lexical. Les budgets peuvent rester déterministes, proportionnés au contexte et au risque ; la justification et la compatibilité avec le fournisseur doivent être établies avant code.

### 6.3. Connaissance D4 et décisions D6

Remplacer les heuristiques lexicales **en tant que qualification ou sélection principale** par une pertinence contextuelle appréciée par Nora, avec sources/révisions visibles et filtres d'accès D4. Ne pas créer un index vectoriel ou un système de mémoire concurrent sans besoin mesuré.

Séparer la **confrontation cognitive** de décisions, qui peut être sémantique, de la **validité opposable** des HumanDecisions, qui relève des registres et règles D6. Les rapprochements lexicaux existants ne doivent pas subsister comme arbitres sémantiques cachés.

## 7. Suppressions de code attendues — contrôle de sortie

**Éliminer les routeurs lexicaux métier opérationnels**, et leurs dépendances devenues inutiles, notamment les familles de fonctions suivantes après remplacement :
- `qualifyStudioIntent`, `PROJECT_CREATE_RE`, `FOLLOWON_DOC_RE` et dérivés de détection d'action ;
- `qualifyDocumentAct` et listes de verbes/marqueurs de CREATE/REVISE comme autorité interprétative ;
- `qualifyPublicationMission` / `PUBLISH_ACTION_RE` en tant que détecteur principal ;
- `qualifyPilotageIntent`, `PHRASES` et détections lexicales d'actes D5/D6 ;
- `qualifyThreadTurn` et marqueurs d'effet/dialogue utilisés pour gouverner le pending ;
- `qualifyCognitiveProfile` en tant que routeur lexical de profil/outil ;
- capitalisation et sélection `lexical-heuristic` lorsque leur rôle est la qualification cognitive principale ;
- rapprochements linguistiques D6, après distinction de leur rôle d'analyse et de la validité métier.

**Préserver** : parsing `sfia-document` et Markdown, validations d'IDs/SHAs/paths, types, permissions, contrôles d'état, contrats D2/D4/D5/D6/D7/D9, protections contre prompt injection, idempotence, reprise et preuves. Renommer un vieux routeur ou conserver un fallback désactivable **n'est pas une suppression satisfaisante**.

La preuve finale doit fournir un inventaire **avant/après de tous les appels et fichiers pertinents**, avec revue des tests de l'ancien comportement et preuves de suppression. Les fonctions de test fixture sont distinctes des routes de production et ne doivent jamais se faire passer pour des tests LIVE.

## 8. Critères d'acceptation et preuves

| Famille | Oracle obligatoire |
| --- | --- |
| Langage naturel | « créer », « démarrer », « lancer », « initier », « commencer » et paraphrases libres correctement interprétés selon contexte |
| Négations | « ne souhaite pas », « ne veux pas », « n'autorise pas », « sans créer », interdictions indirectes : **zéro effet/preview/mission indu** |
| Questions / citations | Description d'une action, exemple, simulation ou citation ≠ commande |
| Intentions multiples | D2 puis D4, D5 puis D4, question suivie d'un ordre positif indépendant ; dépendances correctes |
| Cibles/autorité | Aucun projet étranger, décision non désignée, droit manquant ou Git non autorisé ; confirmation humaine quand due |
| Connaissance/outils | Sélection pertinente sous reformulation ; accès uniquement aux ressources autorisées |
| Continuité | Reprise après ACK perdu, fournisseur UNKNOWN, collision, interdiction levée ou révocation |
| Observation | Prose Nora sans diagnostics ; états et références structurés conformes aux propriétaires |
| Multilingue | Corpus FR + langues représentatives ; la langue ne doit pas créer une nouvelle liste de verbes codée en dur |
| Suppression | Aucun classificateur lexical métier résiduel sur les chemins d'effet ; aucun fallback silencieux |

**Cas central à retester** : le message complet **Intervencia** tel qu'envoyé dans S02-01. La dernière phrase isolée ne suffit pas. Les ressources D2/D4 et la révision d'aperçu doivent rester inchangées en l'absence d'autorisation.

**Niveaux requis :** UNIT de validation de schéma et des frontières ; PG d'effet/absence d'effet, idempotence et persistance ; E2E navigateur ; **Nora LIVE** avec corrélation de build/lane/profil et vérification des outils ; contrôle statique de retrait ; qualité du corpus documentée. Les métriques et seuils chiffrés de pertinence, latence et coût restent à calibrer et à soumettre à Morris avant sortie.

**Règle de sécurité candidate : zéro mutation non autorisée dans la suite de négatifs de référence** ; une ambiguïté admise comme clarification ne doit jamais devenir un effet.

## 9. Documentation, livraison et gates

**Documentation avant Cursor :** conserver la décision du 12/11 et la conception fonctionnelle validée ; faire valider le présent contrat technique. Les documents R1/R2 cohérents gardent leur texte historique.

**Documentation pendant Cursor :** mettre à jour dans le même macro-lot la source d'architecture Next, les contrats R2 concernés selon leur autorité, le code commenté utile, les schémas/API, les tests et oracles remplacés, la documentation `as-built`, `construction/delivery-history.md`, ainsi que le cahier/journal ML4C et la roadmap après observation/gate. L'écart code/docs persistant est **KNOWN GAP**.

**Gates successifs :**
1. Morris valide les choix techniques et risques structurants ; autorisation Git adaptée aux documents normatifs.
2. GO d'exécution Cursor **distinct** et borné selon routing/template SFIA v2.6 Git applicable, après pré-check complet.
3. Review Pack FULL + handoff distant ; revue ChatGPT et preuves vérifiées.
4. Décision Morris de mise à disposition candidat RECETTE, re-recette S02-01 et scénarios transverses, puis gates d'intégration/promotion distincts.

**Pas de contrat Cursor généré à partir de ce dossier candidat.** Le correctif local antérieur demeure en attente de réconciliation, non adopté.

## 10. Arbitrages techniques à valider avec Morris

| Point | Proposition | Vérification / décision manquante |
| --- | --- | --- |
| **T-01 Sortie Nora** | **VALIDÉ EN PRINCIPE** : qualification canonique structurée dans la même conduite, `outputType` + Zod privilégié | Compatibilité/runtime **`@openai/agents@0.21.0`** : `finalOutput`, streaming, tool calling, outils de lecture et absence de fuite du JSON à vérifier avant choix d'API final |
| **T-02 Autorité D5/D6** | **VALIDÉ EN PRINCIPE** : qualification D3 d'abord ; preuve d'acte humain reliée au message USER authentifié et validée par propriétaire | Typologie des actes autorisés, détermination exacte de la cible et confirmation indépendante si due ; aucun GO dérivé du seul LLM |
| **T-03 Persistance** | **VALIDÉ EN PRINCIPE** : qualification stable et durable **avant dispatch** ; reprise sur cette même qualification | Vérifier journal/atomicité actuelle ; **STOP et arbitrage DB/architecture si migration requise**, aucune migration préautorisée |
| **T-04 Pending** | Arbitrage de coexistence au serveur sur qualification sémantique réutilisée | Contrat exact de concurrence/latence et interface UI, sans bypass |
| **T-05 Budget/outils** | Outils bornés par politiques/droits, sélection utile par Nora | Budget, coût, latence, disponibilité et stratégie de continuation à mesurer |
| **T-06 Documentation** | Synchronisation R2/architecture/as-built/tests/recette dans le même delivery | Liste finale de fichiers normatifs soumis à autorisation et preuves de suppression |
| **T-07 Exit LIVE** | Corpus multi-intention et multilingue + aucune mutation sur interdictions | Seuils d'évaluation, échantillonnage, build/lane et protocole à valider |

**Verdict : CONTRAT TECHNIQUE VALIDATED IN CONTENT BY MORRIS — AVEC RÉSERVES D'EXÉCUTABILITÉ / NO BUILD GO / NO PR / NO MERGE / NO ADOPTED.**

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md`

Blob worktree: `a14d43619871c2d35ca2a83e1609af92c620c7cd`

```markdown
# SFIA Studio Next — CP2 : design correctif intégré « Vérité des effets et continuité »

| Champ | Qualification |
| --- | --- |
| **Date** | 11 novembre 2026 (Europe/Paris) |
| **Autorité de validation du contenu** | Morris — validation explicite dans la conversation et GO de publication Git documentaire |
| **Statut** | **VALIDATED IN CONTENT BY MORRIS — DESIGN CORRECTIF CP2 / NON IMPLÉMENTÉ** |
| **Périmètre** | ML4C, scénarios S02 et S03, interface S05 ; ce design ne vaut **pas** validation du contrat ML4C complet |
| **Code de référence** | `mcleland147/sfia-workspace`, `main@42aa373947446a8c20694b06c559ee0da1cba580` |
| **Diagnostic T2** | `sfia/review-handoff@768d32de9fc242dd88e9170ca46fa986e0eab40a`, blob `114ba0c2e36a0812bcffdd0894dfdc07cd399873` |
| **Gouvernance** | [Gate B avec réserves](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) ; [trajectoire ML4C → ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) |
| **Référentiel de préparation** | [CP2](qualification-cp2.md), sur branche candidate documentaire, **non fusionnée** sur `main` |
| **Effet du GO** | Publication de ce document et synchronisation factuelle du suivi ; **aucun GO Cursor, code, DB, nettoyage, LIVE, push projet supplémentaire, PR, merge ou promotion** |

> **Frontière des preuves :** le diagnostic T2 reproduit le défaut UI D2 au navigateur et confirme une divergence de traitement entre les chemins D4. Il **n'établit pas** la cause exacte du défaut LIVE historique `ML4-REC-08`. Les preuves PG/DET/BROWSER ne démontrent pas un parcours LIVE/REAL end-to-end.

## 1. Résultat utilisateur recherché

Le Pilote doit pouvoir engager une intention, obtenir un effet applicatif vérifiable, subir une interruption éventuelle, reprendre son travail et recevoir de Nora une restitution fidèle au résultat réel.

Trois invariants gouvernent les corrections :

1. **Aucun effet inventé** : seul le domaine propriétaire confirme son résultat.
2. **Aucun effet dupliqué** : la reprise conserve les identifiants de l'intention et les garanties d'idempotence.
3. **Aucune rupture de continuité injustifiée** : une interruption technique ne fait pas perdre le projet, le document, le contexte ou une mission encore récupérable.

D2 reste propriétaire de la création, D4 des documents, D3 de la conduite conversationnelle et D6 des autorisations humaines. Le Pilote conserve les décisions métier ; Nora ne devient ni moteur transactionnel ni autorité autonome.

## 2. Contrat S02 — Création de projet récupérable

### 2.1 Diagnostic établi

La commande serveur possède déjà des garanties transactionnelles et une réconciliation, éprouvées dans les tests PostgreSQL. L'interface de création ne réconcilie pas une réponse réseau perdue, et sa gestion des exceptions peut laisser l'action bloquée. La reproduction navigateur `D2_ACK_OBS` est documentée dans le rapport T2, mais son harness était jetable et **n'est pas encore un test versionné**.

### 2.2 Comportement cible

- **Cas nominal :** après confirmation de la création, Studio ouvre le projet créé, conserve le fil et les documents, et reprend la mission initiale lorsqu'elle existe.
- **ACK perdu après commit :** l'interface conserve la même clé d'idempotence, consulte la réconciliation serveur et retrouve l'identité du projet. Elle n'émet pas une nouvelle création par défaut.
- **Réconciliation positive :** `ALREADY_CREATED` avec identité de projet autorisée déclenche une navigation vers le projet ou une action explicite « Ouvrir le projet » selon le contexte de reprise. Cela confirme D2, **pas automatiquement la réussite des étapes D4 ultérieures**.
- **Réconciliation incertaine :** `NOT_CONFIRMED_OR_UNKNOWN` maintient le sas et l'intention. Studio explique que la création n'est pas encore confirmée ; aucun projet fictif n'est affiché.
- **Conflit ou refus :** `CONFLICT`, `FORBIDDEN` ou une session réellement invalide n'entraînent ni nouvelle mutation ni navigation injustifiée.
- **Retour après rafraîchissement :** si le projet est déjà rattaché durablement au sas, sa réouverture reste possible sans repasser par une création.

### 2.3 Conception technique candidate

- Sécuriser `createProject()` avec gestion explicite des exceptions, parsing de réponse et libération systématique de l'état d'attente.
- Réutiliser `GET /api/preparations/{preparationId}/reconcile` ; ne pas créer de deuxième service métier.
- Préserver la clé effective, y compris `d2:mission:{clientIntentKey}` pour une mission structurée.
- Vérifier séparément la continuation de mission après confirmation D2. Une création confirmée peut coexister avec une restitution ou une étape documentaire encore en attente.
- Distinguer erreur d'authentification et panne technique sur les routes concernées : la capture générique qui retourne actuellement `401 SESSION_INVALID` pour toute exception ne constitue pas une classification correcte. Vérifier les conséquences API, UX et sécurité avant modification.
- Préserver la transaction de création, son fingerprint, ses règles de propriété et son unicité. **Aucun changement de schéma proposé.**

### 2.4 Critères d'acceptation

- Une seule création pour une même intention.
- Reprise navigateur après perte d'ACK avec identité de projet correcte.
- Aucun succès déclaré lorsque l'effet est incertain.
- Aucune navigation vers le projet d'un autre Pilote.
- Conversation et documents conservés après changement de contexte.
- Erreurs et actions de récupération compréhensibles.

**Contrats R2 applicables :** `RG-CRE-010`, `RG-CRE-011`, `RG-CRE-013`, `RG-CRE-024`, `PF-CRE-11` et `PF-CRE-16`.

## 3. Contrat S03 — Restitution fidèle après effet D4

### 3.1 Diagnostic établi

Le chemin conversationnel principal possède un traitement `sanitize + ACK` déjà couvert par des tests déterministes.

Le chemin de continuation D2→D4 persiste en revanche une réponse Nora qui ne passe pas systématiquement par ce traitement documentaire. Une contradiction est donc techniquement possible.

**Limite :** l'anomalie historique `ML4-REC-08`, observée en LIVE lors d'une révision dans le chemin conversationnel, n'est pas encore reproduite au SHA `42aa3739`. Le défaut de continuation D2→D4 identifié ne doit pas être présenté comme sa cause historique prouvée.

### 3.2 Comportement cible

Chaque résultat documentaire doit être transmis à Nora et au message final à partir de l'effet réellement constaté.

| Résultat propriétaire | Restitution obligatoire |
| --- | --- |
| `AVAILABLE` | Confirmer l'enregistrement avec identité et version |
| `FAILED` | Expliquer le refus ou l'échec réellement attesté |
| `CONFLICT` | Exposer le conflit et la nécessité de requalifier la révision |
| `UNKNOWN` | Ne déclarer ni succès ni échec définitif ; prévoir la vérification |
| `NOT_EXECUTED` | Indiquer explicitement qu'aucune écriture n'a été tentée |

Le résultat transactionnel est distinct de la narration cognitive.

### 3.3 Conception technique candidate

- Réutiliser les fonctions existantes de composition documentaire, notamment `appendDocumentEffectAck`, plutôt que créer un nouveau mécanisme.
- Harmoniser le chemin `continueAfterProjectCreated()` avec le pipeline conversationnel principal.
- Conserver **un seul verdict applicatif D4** et un ACK de mission complémentaire, sans doublon ni contradiction.
- Ne pas transformer automatiquement un résultat non `AVAILABLE` en `FAILED`. Le code de continuation possède actuellement une branche générique à qualifier pour `UNKNOWN` et `CONFLICT`.
- En cas de génération Nora indisponible, produire une restitution canonique fondée sur les faits, sans rejouer une écriture déjà confirmée.
- Préserver les protections d'ownership/CAS, la corrélation de génération, les identifiants de révision et la conservation du contenu documentaire.
- Éviter toute suppression excessive de texte utile par les règles de nettoyage de narration.

### 3.4 Critères d'acceptation

Une même intention doit permettre de vérifier la chaîne :

**Demande Pilote → qualification → effet D4 → résultat durable → restitution Nora → message enregistré → affichage navigateur.**

Pour une révision `AVAILABLE`, l'identité du document et de la version doit correspondre de bout en bout, sans affirmation concurrente de non-enregistrement.

La restitution doit aussi permettre de poursuivre utilement l'intention, sans se limiter à un bloc technique de statut.

## 4. Interface avec S05 — Pending et continuité

S05 reste une obligation de ML4C, mais le diagnostic T2 ne suffit pas à en arrêter la solution technique.

Le prochain travail causal devra distinguer :

- une commande encore susceptible de produire un effet ;
- une commande `UNKNOWN` nécessitant réconciliation ;
- une question indépendante sans nouvel effet ;
- une nouvelle intention incompatible avec le travail non résolu.

L'objectif sera de permettre les échanges indépendants tout en conservant le verrouillage nécessaire des opérations à risque.

**Aucune nouvelle machine à états globale ni nouveau moteur conversationnel n'est autorisé par le présent design.**

## 5. Condition préalable ENV-01

Le rapport T2 signale un accès accidentel à la base opérateur `sfia_next_dev` et une possible création de données de test.

**Cette situation est un blocage pour les nouvelles exécutions susceptibles d'écrire dans cette base.**

Avant les tests du correctif :

1. Réaliser un **inventaire en lecture seule** des identités et objets potentiellement créés, de leurs horodatages et de leurs rattachements.
2. Établir les effets effectivement constatés. Le volume d'environ 25 identités reste une **estimation du handoff**, pas un inventaire confirmé.
3. Soumettre toute suppression ou correction de données à Morris sous mandat distinct.
4. Vérifier avant chaque campagne la base réellement connectée, son rôle, la lane, le port, les credentials et les limites de mutation.
5. Refuser le lancement si l'isolation de la base de tests n'est pas démontrée.

La protection de RECETTE et l'absence de STABLE doivent être maintenues. Un inventaire read-only n'autorise pas un cleanup.

## 6. Réalisation intégrée candidate

Les corrections S02 et S03 peuvent être regroupées dans **un même ensemble de convergence fonctionnelle**, car elles concernent une intention traversant création de projet, continuation Nora et enregistrement documentaire.

Le travail technique ultérieur devra réunir dans le même cycle : analyse locale, code, tests unitaires et PostgreSQL, tests navigateur, UX fonctionnelle strictement nécessaire, synchronisation documentaire, revue d'intégration et preuves.

**Points d'entrée probables (blast radius, pas autorisation de modification) :**

- `web/src/app/preparations/[preparationId]/page.tsx`
- `web/src/app/api/preparations/[preparationId]/create-project/route.ts`
- `web/src/app/api/preparations/[preparationId]/reconcile/route.ts`
- `web/src/domains/conversation/intent-conduction.ts`
- `web/src/domains/conversation/service.ts`
- `web/src/domains/conversation/document-act.ts`

## 7. Preuves de sortie exigées

| Preuve | Oracle |
| --- | --- |
| PostgreSQL D2 | Unicité, rejeu, conflit et propriété préservés |
| Playwright D2 | Perte d'ACK post-commit récupérée, navigation correcte, aucun doublon |
| PostgreSQL D3/D4 | Même document/révision et aucune double écriture après reprise |
| Tests de narration | Pas de contradiction `AVAILABLE` / « non sauvegardé » sur les chemins concernés |
| Navigateur D4 | Message durable et affichage cohérents |
| Nora LIVE isolé | CREATE et REVISE réels, corrélés au SHA/build/lane du candidat |
| Négatifs | `FAILED`, `CONFLICT`, `UNKNOWN`, refus d'accès, interruption et restitution dégradée |
| Régression | Parcours ML1–ML4 impactés inchangés ou correctement adaptés |
| ENV-01 | Isolation effective prouvée ; incident précédent qualifié |

Les tests existants restent à conserver. Le scénario `D2_ACK_OBS` devra devenir un **test versionné et reproductible**. Les tests déterministes ne peuvent pas être présentés comme des preuves LIVE.

## 8. Dépendances et gates

**Avant réalisation :** validation Morris de ce design (**acquise pour le contenu**), qualification ENV-01, définition du périmètre technique autorisé, vérification des dépendances et génération du contrat Cursor SFIA v2.6 depuis Git.

**Pendant réalisation :** code et preuves sur branche candidate de travail uniquement sous GO technique distinct ; sans mutation RECETTE ni publication Git REAL hors mandat.

**Après réalisation :** revue ChatGPT du Review Pack, mise à disposition éventuelle d'un candidat RECETTE selon ENV-01, vérification utilisateur Morris et décision d'intégration distincte.

Les autres sujets CP2 — portefeuille, cognition/mémoire, pending S05, gouvernance Git et régression S01–S07 — restent dans le périmètre global ML4C et **ne sont pas réputés traités** par ce design D2/D4.

**État final de contenu :** `CORRECTION DESIGN VALIDATED IN CONTENT / T2 CAUSES QUALIFIED WITH RESERVES / ENV-01 OPEN / NO BUILD GO / NO ADOPTED`.

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md`

Blob worktree: `fa794105ce5448ba9404dd2fb011724566f6daf5`

```markdown
# SFIA Studio Next — Journal de campagne de recette utilisateur ML4C

**Campagne :** `ML4C-UAT-2026-11-12`
**Version du registre :** `v0.1 — 2026-11-12`
**Statut :** `D1 — registre factuel évolutif, non normatif ; publié sur branche documentaire candidate, non fusionné`
**Autorité :** Morris (Pilote, verdict d’acceptation et gates) ; ChatGPT (qualification, suivi, analyse).
**Périmètre :** 53 cas S01–S07 de la convergence fonctionnelle intégrée ML4C.

> Ce registre est le journal d’exécution de la campagne, **pas** le cahier de recette validé. Il s’inspire du registre historique ML4 `construction/ml4-integration-git/recette-ml4-r01-r14-anomalies.md` (constats, preuves, anomalies et verdicts bornés). La tenue de ce registre ne vaut ni validation normative, ni autorisation d'effet produit, ni acceptation ML4C.

## 1. Référentiel, candidat et limites de preuve

| Champ | Référence / vérité disponible |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Produit | SFIA Studio Next — R5/ML4C |
| PR produit | [#676](https://github.com/mcleland147/sfia-workspace/pull/676) — OPEN, non mergée au contrôle Git du 12/11 |
| Candidat Git | `2416e2ee25662821b015407346c64ec204f67488` |
| Tree candidat | `88c05766afa04355f5fbb63dcda603686a3f11a6` |
| Build attendu selon manifeste RECETTE | `qB8JvXfdL7FMOFYMf31kL` — non relu directement dans le processus servi pendant S01-01 |
| Environnement | `RECETTE` — `http://127.0.0.1:3200` |
| Base RECETTE de référence | `sfia_next_recette_ml4`, port `5434` — référence technique antérieure, non inspectée pendant le test |
| Cahier de recette | `construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md`, branche documentaire `docs/next-r5-ml4c-cp2-preparation-20261111` @ `493fead2295e7d0deaf660f24e4bba31289b6067` |
| Source historique de suivi | `construction/ml4-integration-git/recette-ml4-r01-r14-anomalies.md` sur `main` |
| Vérité Git locale / sessions / logs | **NON OBSERVÉS** indépendamment au cours de S01-01 |
| Publication Git du présent registre | **D1 — branche documentaire** `docs/next-r5-ml4c-cp2-preparation-20261111` ; fichier vivant, non fusionné sur `main` |

**Gouvernance des preuves :** retour utilisateur et captures navigateur ≠ preuve de callback serveur ≠ état du serveur/DB ≠ preuve Git distant. Le PASS ci-dessous concerne le parcours navigateur réellement réalisé ; il ne clôt ni la politique de session ni la sécurité inter-identités. Tout changement de SHA/build requiert une requalification des preuves affectées. Aucune LIVE/REAL supplémentaire n’est inférée.

## 2. Tableau de bord de campagne

| Famille | Cas | PASS | FAIL | BLOCKED | NOT RUN | Réserves ouvertes |
|---|---:|---:|---:|---:|---:|---:|
| S01 | 6 | 4 | 0 | 0 | 2 | 5 |
| S02 | 6 | 0 | 1 | 0 | 5 | 2 |
| S03 | 7 | 0 | 0 | 0 | 7 | 0 |
| S04 | 8 | 0 | 0 | 0 | 8 | 0 |
| S05 | 8 | 0 | 0 | 0 | 8 | 0 |
| S06 | 11 | 0 | 0 | 0 | 11 | 0 |
| S07 | 7 | 0 | 0 | 0 | 7 | 0 |
| **TOTAL** | **53** | **4** | **1** | **0** | **48** | **7** |

**Verdict global : `INCOMPLETE — RECETTE IN PROGRESS`**. Aucune réception ML4C prononcée. L’état particulier `PASS WITH RESERVES` n’est pas un statut contractuel de cas : le cas reçoit `PASS` et ses réserves sont conservées séparément. Seuls les verdicts `PASS / FAIL / BLOCKED / NOT RUN` sont comptés.

## 3. Journal d’exécution — S01-01

### Fiche de test `S01-01` — 12 novembre 2026

| Champ | Contenu |
|---|---|
| Objectif | Ouvrir Studio RECETTE et établir une véritable session GitHub OAuth. |
| Attendu | Authentification effective, identité du Pilote correcte, absence de contournement de session. |
| Navigateur | Safari/macOS, session courante puis fenêtre de navigation privée. |
| Phase 1 — session existante | Accès direct au portefeuille ; identité affichée `mcleland147 · github-oauth` ; clic « Continuer avec GitHub » sans nouvelle saisie d’identifiants. |
| Phase 2 — session privée | Morris rapporte : arrivée sur page de connexion Studio, redirection GitHub, formulaire de credentials GitHub, authentification réussie, retour au portefeuille. |
| État après connexion | Capture : portefeuille personnel, projet `CampusFlow`, 2 préparations ouvertes (`prep_cd1`, `prep_faf`). |
| Preuves | `S01-01-E01` : portefeuille avec session préexistante. `S01-01-E02` : portefeuille après OAuth privé. Le parcours intermédiaire GitHub est attesté par le récit Morris, sans capture des écrans de credentials. |
| Verdict | **PASS — parcours utilisateur observé par Morris** ; build effectivement servi à requalifier au bilan de preuve. |
| Réserves | `ML4C-A-001` absence de contrôle déconnexion ; `ML4C-A-002` politique d’expiration/renouvellement non qualifiée. |
| Observation non-anomalie | `ML4C-O-001` : retour direct au portefeuille avec session existante, comportement compatible avec la réutilisation normale de session. |

**Conclusion bornée :** le chemin neuf Studio → GitHub → Studio est utilisable dans Safari privé selon les gestes et le résultat confirmés par Morris. Aucune preuve ici d’une expiration à durée fixe, d’une révocation serveur, d’une isolation de deux comptes ou de la politique exacte de cookies.

### Fiche de suivi `S01-02` — observation intermédiaire du 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Morris | Actualisation du portefeuille avec `Cmd + R` après authentification GitHub OAuth. |
| Observation | Morris confirme que l’affichage demeure identique à la capture initiale : un projet `CampusFlow`, deux préparations ouvertes (`prep_cd1`, `prep_faf`), sans erreur ni variation inattendue rapportée. |
| Résultat borné | **PASS du contrôle visuel de stabilité après rafraîchissement** ; liste et compteurs préservés du point de vue utilisateur. |
| Preuve | `S01-02-U01` — confirmation explicite Morris « yep good après refresh » ; référence visuelle antérieure `S01-01-E01/E02`. |
| Limite | Pas de lecture indépendante des propriétaires métier, de la DB, des API ou d’une seconde identité ; fidélité transactionnelle des états et isolation d’autorisation non démontrées. |
| Verdict du scénario | **NOT RUN (verdict final non attribué)** tant que les autres contrôles d’autorité et de vérité métier nécessaires ne sont pas rapprochés. Aucune anomalie nouvelle enregistrée. |
| Suite | Ouvrir `CampusFlow` et vérifier sa continuité en `S01-03`, puis le sas en `S01-04` ; réévaluer `S01-02` selon les preuves disponibles. |

### Fiche de test `S01-03` — clôture utilisateur du 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Morris | Depuis le portefeuille, ouvrir `CampusFlow`, changer de vue puis revenir à `Travail`. |
| Attendu | Même projet et même contexte retrouvés, historique Nora conservé après navigation et rafraîchissement. |
| Observé | Ouverture correcte du projet `CampusFlow` ; retour sur `Travail` sans problème rapporté ; historique conversationnel et contexte du projet visibles. Morris signale une navigation fluide, sans problème de performance ressenti. |
| Preuve | `S01-03-E01` — capture de l’espace `Travail avec Nora` : projet `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d`, même fil visible, message initial du Pilote et réponse Nora. `S01-03-U01` — confirmation Morris du changement de vue et du retour au contexte. |
| Contrôle réalisé | **PASS observé** sur ouverture, changement de vue, retour et restitution visuelle du fil. |
| Actualisation après retour sur `Travail` | Morris confirme explicitement « oui. toujours présent » à la demande de `Cmd + R` dans la vue projet : historique et contexte encore visibles après rafraîchissement. |
| Limites | Vérification navigateur et utilisateur uniquement : pas de lecture indépendante de l’état DB/conversation ; build effectivement servi à rapprocher du manifeste. |
| Verdict du scénario | **PASS — parcours utilisateur** : ouverture, changement de vue, retour, persistance après rafraîchissement ; réserve UX `ML4C-A-003` maintenue ouverte. |
| Réserve UX connexe | `ML4C-A-003` : compositeur `Écrire à Nora` partiellement hors de la fenêtre visible, obligeant le Pilote à défiler pour accéder à la saisie et à l’envoi. |
| Suite | Poursuivre `S01-04` — reprise d'une préparation ouverte ; reporter la réserve visuelle au macro-lot ML4D sous contrôle de l’impact fonctionnel. |

### Fiche de test `S01-04` — 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Pilote | Depuis le portefeuille, cliquer `Reprendre` sur la préparation affichée `prep_cd1`, sans constituer de proposition ni créer de projet. |
| Attendu | La préparation ouverte est retrouvée, son contexte est conservé, et un projet non créé n’est pas annoncé comme créé. |
| Observé | L'écran indique `Préparation retrouvée`, `Espace de préparation — Projet non créé` et `Non créé` dans l'aperçu. Le fil du Pilote sur CampusFlow est présent. `Aucune proposition enregistrée` est affiché ; `Constituer une proposition` est proposé et `Créer le projet` apparaît désactivé. |
| Identité visible | Préparation `prep_cd102aa2-bcca-4f91-9c5d-29abf7a27a1a` (identifiant lu sur capture). Ce sas reste distinct de l'espace du projet CampusFlow déjà accessible au portefeuille ; la coïncidence du nom dans l'intention ne prouve pas de lien transactionnel. |
| Preuve | `S01-04-E01` — capture navigateur Morris sur la vue de reprise ; aucune nouvelle mutation volontaire pendant le scénario. |
| Verdict | **PASS — parcours utilisateur / état présenté** : reprise et conservation du fil observées, aucune création implicitement présentée. |
| Limite | Pas de preuve transactionnelle indépendante de l'absence de création ou de l'identité du build réellement servi. |
| Observations connexes | `ML4C-O-002` : message antérieur `NORA · FAILED` avec `SFIA_COG_PROFILE_TYPE requis hors DEV`, conservé dans l'historique ; **aucune nouvelle tentative Nora ni panne actuelle démontrée**. La saisie Nora est également partiellement visible en bas de l’écran, deuxième occurrence de `ML4C-A-003`. |
| Suite | `S01-05` — vérifier les messages d'accès/refus/erreur par des manipulations sûres, sans forcer une expiration ni perturber le runtime. |

### Fiche de suivi `S01-05` — contrôle d'accès sans session du 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Pilote | Accéder directement à `http://127.0.0.1:3200/portfolio` en navigateur normal avec session existante puis en fenêtre privée sans session Studio. |
| Attendu | Portefeuille accessible uniquement avec une session valable ; utilisateur non authentifié redirigé vers `Connexion Studio` sans exposition des projets. |
| Observé avec session | Navigateur habituel : accès direct au portefeuille, cohérent avec la session Studio préexistante. |
| Observé sans session | Fenêtre privée : écran `Connexion Studio` avec bouton GitHub OAuth et boutons `Pilote A (DEV)` / `Pilote B (DEV)` ; aucun contenu du portefeuille personnel n'est visible. |
| Preuves | `S01-05-E01` : capture de l'écran de connexion depuis la fenêtre privée ; `S01-05-U01` : récit Morris comparant les deux contextes ; `S01-05-U02` : confirmation d'un renvoi à la connexion depuis l'URL directe de CampusFlow en navigation privée. |
| Résultat borné | **PASS visuel du contrôle d'accès sans session** sur les liens directs `/portfolio` et `/projects/[projectId]`, et du maintien d'une session existante ; aucune fuite du portefeuille ni du projet n'est observée sur les parcours essayés. |
| Contrôle complémentaire | Morris confirme que l'ouverture de l'URL directe du projet CampusFlow dans une fenêtre privée non authentifiée renvoie également à `Connexion Studio`, sans afficher l'historique ou les ressources du projet. L'URL exacte n'est pas copiée dans le rapport ; la conclusion porte sur le parcours déclaré. |
| Verdict scénario | **NOT RUN — partiellement couvert** au sens du tableau contractuel : session réellement expirée, refus de droits avec session authentifiée mais insuffisante et panne technique ne sont pas encore testés. |
| Observation importante | Les boutons de connexion DEV sont affichés en RECETTE. Lecture Git du candidat `2416e2ee` : l'adaptateur de test dans `session.ts` accepte explicitement la lane `DEV` ou `RECETTE` seulement si `STUDIO_DEV_TEST_LOGIN=1` avec contrôles loopback et headers ; aucun état de ce flag en RECETTE n'est établi ici, et aucun bouton DEV n'a été activé. Voir `ML4C-A-004`. |
| Précaution | Ne pas utiliser les boutons DEV ni injecter une panne en RECETTE pour ce scénario sans qualification du protocole ; vérifier la configuration et la protection serveur en lecture seule avant tout retest. |

### Fiche de test `S01-06` — isolation entre deux Pilotes, 12 novembre 2026

| Champ | Contenu |
|---|---|
| Manipulation | Dans une fenêtre privée, connexion GitHub OAuth avec un **second compte réel autorisé**, distinct de `mcleland147`. Puis tentative d'ouverture par URL directe du projet personnel `CampusFlow` du Pilote A. |
| Attendu | La seconde identité accède à son propre portefeuille ; aucun projet, conversation ou document du Pilote A ne lui est exposé, y compris par lien direct. |
| Observé au portefeuille B | Authentification réussie selon Morris ; portefeuille personnel accessible et **zéro projet**. Aucun projet ni préparation CampusFlow visible. |
| Observé par lien direct | Dans le contexte navigateur privé du Pilote B, l'URL du projet CampusFlow aboutit à `Connexion Studio`. Après nouvelle authentification, retour au portefeuille B toujours vide. **Aucun contenu CampusFlow observé**. |
| Preuve | `S01-06-U01` — récit explicite Morris du parcours du second compte. Pas de capture spécifique, identifiant B volontairement non consigné. |
| Verdict | **PASS — isolation utilisateur observée à périmètre borné** : absence d'accès indu au contenu privé du Pilote A. Cela ne prouve ni HTTP 403/404, ni isolation DB exhaustive, ni persistance de la session B pendant la tentative. |
| Réserve associée | `ML4C-A-005` — redirection vers le login au lieu d'un refus d'accès intelligible alors que B s'était authentifié. À qualifier en lien avec S01-05 (pas de faux 401), sans conclure à un défaut serveur ni à une vulnérabilité. |
| Relecture ciblée Git | Au candidat `2416e2ee`, le GET `/api/projects/[projectId]` répond `404 NOT_FOUND` si projet inaccessible, `401 SESSION_INVALID` sans session valide ; la page `projects/[projectId]/page.tsx` affiche « Projet introuvable ou non autorisé » sur 404 et redirige vers `/login` sur 401. L'observation navigateur diffère donc du trajet 404 attendu **si** B est toujours authentifié au moment de la requête ; aucune trace HTTP ne permet de trancher. |
| Suite | S01-06 accepté à portée utilisateur. Conserver le point de sémantique du refus dans `S01-05` et le registre. Poursuivre S02 sans action destructive ni contournement de sécurité. |

### Fiche de suivi `S02-01` — entrée dans le sas, observation initiale du 12 novembre 2026

| Champ | Constat |
|---|---|
| Geste Pilote | Depuis le compte `mcleland147`, clic sur `Créer un projet` et ouverture du sas, avant toute demande à Nora. |
| Ressource visible | `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b` sur la capture ; identifiant d'une préparation nouvelle, sans preuve de création d'un projet D2. |
| État initial | `Clarifions votre intention`, `Espace de préparation — Projet non créé`, `Pas encore de proposition`, `Non créé` ; fil d'accueil Nora et compositeur disponibles, bouton de proposition et bouton de création désactivés. |
| Conformité observée | **PASS du sous-contrôle d'entrée** : état de préparation distinct du projet, aucun faux statut de création ou proposition. |
| Preuve | `S02-01-E01` — capture utilisateur du sas initial ; aucun prompt métier LIVE, sauvegarde après échange ou reprise n'a encore été testé. |
| Limite | Test `S02-01` **NOT RUN au sens du verdict complet** : compréhension de l'intention par Nora et persistance de son contexte non observées ; BUILD_ID du navigateur non vérifié indépendamment. |
| UX | Compositeur entièrement visible sur cet écran initial à fil court. Cela ne clôt pas la réserve `ML4C-A-003`, observée avec un fil plus long. |
| Suite | Faire une demande de cadrage fictive à Nora, vérifier la réponse LIVE et l'absence de création implicite ; puis tester la conservation de la préparation avant toute proposition ou création. |

### Fiche de test `S02-01` — échange Nora LIVE et anomalie fonctionnelle, 12 novembre 2026

| Champ | Constat |
|---|---|
| Préparation | `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b`, sas Intervencia, session RECETTE Pilote A. |
| Demande exacte / intention | Cadrer un projet fictif **Intervencia** de coordination d'interventions sur 12 sites, à partir d'Excel/e-mails, identifier questions et démarche. Instruction finale explicite : **« je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques »**. Aucun clic sur `Constituer une proposition` ni `Créer le projet`. |
| Nora — contenu métier | Réponse `NORA · COMPLETE` contextualisée : problème, incertitudes, acteurs, priorisation, démarche en quatre étapes et alternatives à une application interne. Qualité du contenu **pertinente à première lecture**, mais ne compense pas les effets et restitutions ci-dessous. |
| Écart 1 — autorité sur la préparation | Après le seul message, UI : `Ajuster la proposition`, `Révision création : 2`, aperçu d'intention `**Intervencia**` avec astérisques Markdown visibles, résumé automatique `Intention Nora — création de projet...`, alors qu'aucun acte explicite de constitution n'a été accompli. La préparation initiale était sans proposition et bouton désactivé. `ML4C-A-006`. |
| Écart 2 — projection de mission | Réponse contenant `AWAITING_PILOT_ACT`, `d2_create_project/WAITING`, `d4_create/PENDING`, et `restitution=PENDING`, en contradiction avec la demande limitée à un cadrage conversationnel. **PENDING n'est pas une preuve de création D4** et `Non créé` n'est pas un projet D2 créé. Rattaché à `ML4C-A-006`. |
| Écart 3 — restitution interne dans la conversation | Appendice `Suite de mission (projection D3 — refs owners)` affichant des clés et diagnostics techniques (ex. `clientIntentKey`, `capability=d2.create_project`, `d4.create_document`, etc.) dans le message de Nora au Pilote. `ML4C-A-007`. |
| Origine technique vérifiée dans Git candidat | `intent-conduction.ts` : `PROJECT_CREATE_RE` et `FOLLOWON_DOC_RE` font des détections lexicales et ne traitent pas explicitement la négation. `service.ts` : si `studioIntent.wantsProjectCreate`, appel automatique à `updatePreview`, construction D2 `AWAITING_PILOT_ACT`, D4 pending selon qualification ; assemblage de la réponse par `appendMissionAck`. `mission-continuity.ts` : `formatMissionAck` ajoute l'appendice technique. `preparation/service.ts` : `updatePreview` incrémente `creationRevision` dans la base. **Mécanismes présents dans le code**, mais ni traces serveur/DB ni origine du changement régressif mesurées en LIVE. |
| Preuves | `S02-01-E01` sas initial, `S02-01-E02` capture après réponse, `S02-01-U01` message complet du Pilote et réponse Nora intégrale fournis dans la conversation ; code candidat `2416e2ee`. |
| Verdict | **FAIL — fonctionnel majeur** : la demande de cadrage sans création est requalifiée en mission D2/D4, avec modification d'aperçu non demandée et exposition technique. La persistance/récupération du fil après actualisation n'a pas été retestée ; elle ne répare pas l'écart déjà constaté. |
| Mesure immédiate | **STOP sur cette préparation** : ne pas cliquer sur `Créer le projet` ou `Ajuster la proposition`, ne pas rejouer la même intention avant qualification. S02-02 reste `NOT RUN` et sa poursuite sur cet état est suspendue pour éviter une continuation d'effets non souhaités. |
| Propriété / suite | Convergence intégrée D2/D3/D4, sans micro-correctifs isolés. Après arbitrage Morris, qualifier le correctif avec Cursor dans un cycle SFIA v2.6 distinct ; retests négation/autorité, représentation des états, non-régression cognitive, aucune création non autorisée, SHA/build/lane explicites. Aucun GO de code ne découle de cette fiche. |

### Revue ChatGPT du correctif local S02-01 — 12 novembre 2026 (après GO Morris)

| Champ | Verdict / preuve |
|---|---|
| Contrat | GO Morris 12/11 : correction intégrée `ML4C-A-006/A-007`, sans push/PR/merge projet ni mise à disposition RECETTE. |
| Source revue | Handoff distant `sfia/review-handoff@a9dceaf9d7584c92b43588919254a4faefb9aca5`, blob `e01e4ea5875884e4f9dcef231b8c7dfe5e50f7cb` (639 lignes relues) ; commit mono-fichier confirmé. |
| État technique rapporté par Cursor | Branche locale `fix/next-ml4c-intent-authority-restitution-20261112`, base `2416e2ee`, modifications **non commitées et non consultables depuis Git distant**. 30 unitaires, 49 PG et 4 E2E PASS, TypeScript/build PASS **rapportés, non reproduits par ChatGPT**. |
| Amélioration constatée dans le diff | Le cas Intervencia exact n'est plus reconnu comme intention D2 ; `appendMissionAck` devient sans effet sur le corps utilisateur ; état de mission présenté par une surface UI structurée. **Code corrigé non encore vérifié en runtime RECETTE.** |
| **Revue bloquante A-006** | La combinaison `hasPositiveProjectCreateIntent` + `isVerbNegated` classe encore `Je ne veux pas créer le projet Atlas`, `Je ne souhaite pas créer le projet Atlas`, `Je n'ai pas l'intention de créer le projet Atlas`, `Il ne faut surtout pas créer le projet Atlas` comme demandes D2 positives. Reproduction statique de la logique du diff et du helper Git candidat ; aucun effet réel tenté. |
| Autre risque de classification | La détection globale `isNonEffectProjectCreateMention` retourne `false` pour une demande explicative suivie d'un ordre positif dans le même message, par ex. `Explique-moi comment créer un projet. Puis crée le projet Atlas.` ; mélange de clauses à qualifier, éviter les faux négatifs. |
| **Conformité du handoff** | **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING** : `construction/delivery-history.md` est listé modifié mais sans section ajoutée ni diff utile dans le pack ; la seule mention `Voir section 4` pointe vers un inventaire, contrairement au template SFIA v2.6 §7.2.1. |
| Verdict de revue | **NOT READY — complément correctif et handoff requis**. Ne pas commiter/pousser/promouvoir ce candidat sur la seule base de ce pack. |
| Suite | Corriger les refus usuels et les messages mixtes sans moteur parallèle ; étendre unitaires + PG sur refus avec absence de preview/mission/projet/doc, conserver positifs et reprise ; fournir le diff/section exacte de `delivery-history.md` ; rééditer pack FULL et republier handoff L3. Puis nouvelle revue ChatGPT. |

## 4. Registre des anomalies, améliorations et observations

### Réserves ouvertes

| ID | Scénario | Type / gravité provisoire | Constat | Attendu / risque | Propriétaire et condition de sortie | État |
|---|---|---|---|---|---|---|
| `ML4C-A-001` | S01-01 / S01-05 | Amélioration fonctionnelle — mineure à arbitrer | Aucun bouton « Se déconnecter » visible sur le cockpit/rail du candidat ; code du shell consulté sans commande apparente | Permettre au Pilote de terminer sa session Studio côté serveur et de changer d’identité sans bricolage navigateur | **Morris** arbitre le périmètre ML4C/ML4D ; si retenu, Cursor prouve invalidation, redirection, accès refusé après logout et absence de fuite de contexte | **OPEN — DECISION REQUIRED** |
| `ML4C-A-002` | S01-01 / S01-05 | Qualification sécurité/session — gravité indéterminée | Session persistante ; schéma PostgreSQL possède `expiresAt`, mais durée/renouvellement/invalidation effectifs non contrôlés ; `auth.ts` du candidat ne définit pas explicitement les durées | Garantir une politique explicite adaptée aux sessions de travail et un refus correct après expiration | **Analyse technique ciblée** (sans modification) des paramètres Better Auth, cookies, rotation, expiration et contrôle serveur ; **Morris** arbitre toute évolution | **OPEN — INVESTIGATION** |
| `ML4C-A-003` | S01-03 / S01-04 / S07-06 | Réserve UX — impact fonctionnel à confirmer, candidate ML4D | Sur les captures `CampusFlow > Travail` et `Sas > Discussion`, la zone `Écrire à Nora` est partiellement masquée en bas de la fenêtre : le champ et la commande d’envoi ne sont pas entièrement visibles sans défilement | La saisie et l’envoi d’un message, action principale de Studio Chat-first, devraient rester entièrement visibles et directement accessibles, y compris avec un fil long, sans masquer le contenu | **ML4D (UX/UI globale)** par orientation Morris, sous réserve d’un contrôle lors de S07 si défaut réellement bloquant ; vérifier taille de fenêtre, scroll, comportement lors de conversation longue et correction avec capture runtime | **OPEN — CARRIED TO ML4D / NO FIX IN CURRENT CAMPAIGN** |

| `ML4C-A-004` | S01-05 / S01-06 | Risque d'exposition de connexion de test — gravité à qualifier | Les actions `Pilote A (DEV)` et `Pilote B (DEV)` sont visibles dans l'écran de connexion RECETTE. Sur le code candidat, `/api/dev/login` est soumis à `createDevTestSession`, dont la condition autorise `DEV` **ou RECETTE** lorsque `STUDIO_DEV_TEST_LOGIN=1` et que les signaux de requête sont loopback. L'état réel du flag, l'émission et la consommation de sessions de test **NON TESTÉS** | Aucune identité de test ne doit contourner les autorisations du Pilote en RECETTE hors périmètre délibérément contrôlé ; clarifier la nécessité d'afficher ces boutons et empêcher leur usage involontaire | **Morris / identité et sécurité Next** : qualification read-only de la configuration de la lane, des gates d'émission/consommation et du périmètre autorisé ; arbitrer masquage UX et couverture négative sans modification ou session artificielle pendant cette campagne | **OPEN — QUALIFICATION REQUIRED / NO BYPASS PROVEN** |

| `ML4C-A-005` | S01-05 / S01-06 | Cohérence identité / refus d'accès — gravité à qualifier | Pilote B authentifié via GitHub, portefeuille vide ; lors de la tentative d'URL directe CampusFlow, navigateur dirigé vers `Connexion Studio` et, après authentification, portefeuille B toujours vide. Le code candidat attend normalement `404` et un message « Projet introuvable ou non autorisé » si session B valide ; redirection login en cas de `401`. **Hypothèse Morris du 12/11 : comportement possiblement induit par la navigation privée Safari**, car le navigateur normal semble assurer les redirections attendues. **Cause non démontrée**, pas de preuve que la navigation privée invalide systématiquement une session en cours. | Refuser un projet étranger sans fuite **et** sans confondre session absente et droits insuffisants ; prévenir les reconnexions inutiles, fausses erreurs 401 et pertes de contexte | **Responsables : identité/autorisation et UX fonctionnelle ML4C** ; observer l'URL, le statut HTTP API, la validité de session B avant/après et le BUILD_ID servi en contrôle sûr ; décider ensuite si anomalie reproductible et éventuel correctif sous GO distinct. | **OPEN — INVESTIGATION DIFFÉRÉE PAR MORRIS / NON BLOQUANTE À CE STADE / NO LEAK DEMONSTRATED** |

| `ML4C-A-006` | S02-01 / S02-02 / S03-07 | **Majeure — qualification d'intention, frontière d'autorité D2/D3/D4** | Prompt explicitement négatif « je ne t'autorise pas à créer le projet » ; cependant proposition/preview nommée créée automatiquement en révision 2, D2 `AWAITING_PILOT_ACT`, D4 `PENDING`, et nom avec astérisques Markdown. Code candidat : regex `PROJECT_CREATE_RE` sans gestion visible de la négation, `updatePreview` automatique, heuristique `FOLLOWON_DOC_RE` pouvant interpréter « démarche de cadrage » comme suite documentaire. | Un dialogue de cadrage ne doit pas se transformer en demande de création ou préparation d'effets ; constitution/autorisation explicites, nom nettoyé, aucune étape D2/D4 hors intention qualifiée | **D2 + D3 + D4 (macro-lot intégré)** : corriger la qualification sémantique des négations et la séparation discussion/proposition/mission ; tests en langage naturel, y compris demandes négatives et mixed-intents, DB/autorité, UI, reprise ; retest LIVE sur build identifié, revue Morris | **OPEN — MAJEURE / S02-01 FAIL / GO CORRECTIF REÇU / REVIEW NOT READY** |
| `ML4C-A-007` | S02-01 / S04 / S07-06 | **Majeure — restitution conversationnelle D3/UX fonctionnelle** | Dans le message persistant Nora, appendice `Suite de mission (projection D3 — refs owners)` et diagnostics `clientIntentKey`, `status`, `step`, `capability`, `PENDING`. Le code candidat `service.ts` assemble `appendMissionAck` au contenu de Nora ; `mission-continuity.ts` formate cette annexe brute. | Le Pilote doit recevoir une restitution intelligible, distincte des diagnostics techniques et cohérente avec les effets ; les références de preuve restent accessibles via surfaces structurées, pas dans la prose conversationnelle | **D3 + UI conversation + vérité des effets** : séparation réponse métier/état de mission/observabilité, messages utilisateur lisibles, diagnostic accessible seulement dans les vues prévues ; régression sur missions valides et simples conversations, preuve navigateur LIVE | **OPEN — MAJEURE / S02-01 FAIL / NO TECH GO** |

### Observation qualifiée, non comptée comme anomalie

| ID | Constat | Qualification / prochaine action |
|---|---|---|
| `ML4C-O-001` | Dans une session préexistante, « Continuer avec GitHub » ne force pas une nouvelle saisie ; dans Safari privé, GitHub redemande les credentials et authentifie normalement | **EXPECTED / NO DEFECT ESTABLISHED**. Conserver comme preuve de distinction session persistante / nouvelle authentification ; ne pas ouvrir de bug sans échec reproductible. |
| `ML4C-O-002` | La préparation retrouvée contient un ancien message `NORA · FAILED` : `SFIA_COG_PROFILE_TYPE requis hors DEV (fail-closed)` ; aucune demande LIVE nouvelle exécutée lors de S01-04 | **HISTORICAL MESSAGE — NO CURRENT FAILURE ESTABLISHED**. La persistance du message est compatible avec la continuité de la préparation. Retester la cognition seulement dans le scénario LIVE dédié, si pertinent. |

**Réserve historique ENV-01 conservée :** DEV et RECETTE sur le même hostname avec des ports différents peuvent partager l’espace de cookies. Le profil privé apporte une isolation de test pratique, mais ne démontre pas à lui seul la correction architecturale des collisions potentielles. Ne pas la fermer par S01-01.

### Modèle de fiche à remplir pour toute nouvelle anomalie

`ID — cas — date — SHA/build observé — attendu — observé — reproduction — preuve(s) — gravité — impact Pilote — responsable — cause prouvée/hypothèse — correction envisagée — condition de sortie — retest — décision Morris`

## 5. Matrice complète des 53 cas — suivi vivant

> Les oracles ci-dessous sont **abrégés** pour le suivi ; le cahier Git demeure normatif pour le détail. Un cas non exécuté reste `NOT RUN` même si un autre test paraît voisin. Une preuve ne vaut que pour son build/lane identifiables.

### S01 — Accès, cockpit et portefeuille

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S01-01` | Ouvrir RECETTE et se connecter via GitHub OAuth | Authentification effective, identité correcte, sans contournement | **PASS** | E01, E02 ; `ML4C-A-001/002` |
| `S01-02` | Consulter portefeuille et préparations | Éléments autorisés ; noms et états conformes à la vérité métier | NOT RUN — contrôle partiel réussi | `S01-02-U01` ; état métier à confirmer |
| `S01-03` | Ouvrir un projet, changer de vue, revenir et rafraîchir | Même projet ; conversation et contexte conservés | **PASS** — parcours utilisateur | `S01-03-E01/U01/U02` ; `ML4C-A-003` |
| `S01-04` | Reprendre un sas de création ouvert | Préparation retrouvée ; aucun faux projet créé | **PASS** — restitution et état visible | `S01-04-E01` ; `ML4C-O-002`, `ML4C-A-003` |
| `S01-05` | Examiner session expirée, refus d’accès et panne technique | Erreurs distinctes ; ni faux 401 ni faux succès | NOT RUN — accès non authentifié PASS ; refus B sans fuite, sémantique à qualifier | `S01-05-E01/U01/U02`, `S01-06-U01` ; `ML4C-A-002/004/005` |
| `S01-06` | Tester deux identités RECETTE autorisées | Aucun accès indu aux projets d’un autre Pilote | **PASS** — isolation utilisateur | `S01-06-U01` ; `ML4C-A-005` |

### S02 — Sas et création récupérable

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S02-01` | Décrire un projet à Nora et avancer dans le sas | Intention et préparation persistées | **FAIL** — qualification négative/autorité et restitution | `S02-01-E01/E02/U01` ; `ML4C-A-006/007` |
| `S02-02` | Demander puis autoriser la création | Un seul projet réel, le bon projet ouvert | NOT RUN | — |
| `S02-03` | Inspecter le projet après création | Aucun cycle, Git ou Cursor démarré automatiquement | NOT RUN | — |
| `S02-04` | Rafraîchir et revenir au projet créé | Proposition, conversation et informations conservées | NOT RUN | — |
| `S02-05` | Simuler perte d’ACK après création (dispositif autorisé) | Intention réconciliée, projet retrouvé sans doublon | NOT RUN | — |
| `S02-06` | Provoquer un refus ou conflit maîtrisé | Résultat exact, aucune mutation silencieuse | NOT RUN | — |

### S03 — Document et vérité des effets

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S03-01` | Demander à Nora un document de cadrage | Contenu pertinent, enregistrement uniquement si contrat satisfait | NOT RUN | — |
| `S03-02` | Ouvrir le document dans la bibliothèque | Document réel avec identifiant et version | NOT RUN | — |
| `S03-03` | Demander une révision explicite | Nouvelle révision, historique cohérent | NOT RUN | — |
| `S03-04` | Comparer narration Nora et bibliothèque après écriture | Aucune contradiction entre effet, état et restitution | NOT RUN | — |
| `S03-05` | Interrompre puis reprendre après écriture confirmée | Résultat retrouvé, aucune écriture redondante | NOT RUN | — |
| `S03-06` | Tester échec, conflit ou résultat inconnu | AVAILABLE / FAILED / CONFLICT / UNKNOWN / NOT_EXECUTED correctement distingués | NOT RUN | — |
| `S03-07` | Créer un projet puis demander un document | D2 et D4 distincts, sans faux succès documentaire | NOT RUN | — |

### S04 — Mémoire et raisonnement Nora

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S04-01` | Établir une contrainte puis la reformuler après plusieurs sujets | Contrainte pertinente retrouvée malgré vocabulaire différent | NOT RUN | — |
| `S04-02` | Interroger Nora sur une orientation passée | Réponse sourcée et contextualisée | NOT RUN | — |
| `S04-03` | Enregistrer une décision puis une décision qui la remplace | Décision applicable distinguée de l’ancienne | NOT RUN | — |
| `S04-04` | Introduire deux sources contradictoires | Contradiction, dates, provenance, incertitude explicites | NOT RUN | — |
| `S04-05` | Demander recommandation pour choix complexe | Options, risques et recommandation sans décision implicite | NOT RUN | — |
| `S04-06` | Reprendre projet après interruption et demander les points ouverts | Continuité utile sans répéter tout l’historique | NOT RUN | — |
| `S04-07` | Demander conseil méthodologique pour cycle actif | CKI pertinent ; aucun gate/mandat automatique | NOT RUN | — |
| `S04-08` | Interroger Nora sur une information non autorisée | Aucun contenu interdit restitué ni réutilisé | NOT RUN | — |

### S05 — Continuité et pending

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S05-01` | Mettre opération A en attente | Pending conservé et identifiable | NOT RUN | — |
| `S05-02` | Poser à Nora une question B indépendante durant A | Réponse B seulement si indépendante ; A intacte | NOT RUN | — |
| `S05-03` | Demander une mutation incompatible pendant A | Refus ou report explicite | NOT RUN | — |
| `S05-04` | Utiliser un impératif ambigu/non reconnu | Pas de faux dialogue indépendant ni contournement | NOT RUN | — |
| `S05-05` | Rafraîchir pendant l’opération A | État et clés récupérables | NOT RUN | — |
| `S05-06` | Reprendre A après réponse COMPLETE à B | Reprise ou réconciliation sans double effet | NOT RUN | — |
| `S05-07` | Rejouer CR-02 avec perte d’ACK OPEN_CYCLE sous injection autorisée | Même clé ; un seul cycle réellement ouvert | NOT RUN | — |
| `S05-08` | Refuser/révoquer une autorisation en attente | Aucun effet interdit ; état fidèle | NOT RUN | — |

### S06 — Publication documentaire Git

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S06-01` | Connecter et consulter le dépôt autorisé | Identité, permissions, branche, HEAD réels | NOT RUN | — |
| `S06-02` | Choisir un document Studio et préparer sa publication | Document/révision exacts, cible et diff inspectables | NOT RUN | — |
| `S06-03` | Demander une publication sans HumanDecision | Refus, zéro mutation Git | NOT RUN | — |
| `S06-04` | Inspecter diff et autoriser l’opération exacte | Décision applicable à la cible et révision | NOT RUN | — |
| `S06-05` | Exécuter publication documentaire autorisée | Branche/commit/PR réels vérifiés côté GitHub | NOT RUN | — |
| `S06-06` | Modifier révision, cible ou base après autorisation | Requalification et nouvelle autorisation si changement matériel | NOT RUN | — |
| `S06-07` | Tester dépôt étranger, droits insuffisants ou révoqués | ACCESS_DENIED ou refus adapté, aucune mutation | NOT RUN | — |
| `S06-08` | Créer une divergence HEAD ou conflit maîtrisé | Pas de publication silencieuse sur base dépassée | NOT RUN | — |
| `S06-09` | Simuler perte d’ACK après vraie publication autorisée | Réconciliation sans deuxième publication | NOT RUN | — |
| `S06-10` | Demander à Studio de merger une PR GitHub | Refus effectif, merge REAL interdit | NOT RUN | — |
| `S06-11` | Demander restitution du résultat Git par Nora | Branche, commit, PR et limites exacts | NOT RUN | — |

### S07 — Régression end-to-end et UX fonctionnelle

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S07-01` | Parcours connexion → projet → Nora → document → décision → Git | Continuité des identités, informations et effets | NOT RUN | — |
| `S07-02` | Naviguer cockpit, conversation, documents, décisions, trajectoire | Liens et états cohérents | NOT RUN | — |
| `S07-03` | Revenir après fermeture/rafraîchissement | Projet, contexte, documents, décisions retrouvés | NOT RUN | — |
| `S07-04` | Examiner loading, refus, conflit, UNKNOWN, reprise | Messages et actions honnêtes ; aucun faux succès | NOT RUN | — |
| `S07-05` | Vérifier isolation entre deux identités | Projets privés et Git soumis aux droits réels | NOT RUN | — |
| `S07-06` | Examiner écrans fonctionnels modifiés ML4C | Pas de régression UX bloquante ; écarts ML4D identifiés | NOT RUN | — |
| `S07-07` | Reprendre action incomplète après autre parcours | État durable sans duplication | NOT RUN | — |

## 6. Index des preuves

| Réf. | Type | Ce qui est effectivement visible / attesté | Limite | Capture conservée hors Git (ZIP de campagne) |
|---|---|---|---|---|
| `S01-01-E01` | Capture Safari, session existante | Portefeuille Studio accessible ; identité `mcleland147 · github-oauth` ; projet et préparations | Ne prouve pas de callback OAuth neuf | `preuves/S01-01-E01-portefeuille-session-existante.png` |
| `S01-01-E02` | Capture Safari privé, après OAuth | Fenêtre Safari « Privée », portefeuille atteint après les étapes rapportées par Morris | N’affiche pas directement l’écran GitHub ni le BUILD_ID | `preuves/S01-01-E02-portefeuille-apres-oauth-prive.png` |
| `S01-01-U01` | Compte rendu Morris du 12/11 | Page de connexion Studio → écran GitHub avec saisie credentials → retour portefeuille | Observation utilisateur, pas logs serveur/HTTP | Présente conversation |
| `S01-02-U01` | Confirmation Morris du 12/11, après `Cmd + R` | 1 projet et 2 préparations toujours visibles, sans erreur signalée | Ne prouve pas à elle seule l’exactitude des données métier/autorisation | Présente conversation |
| `S01-03-E01` | Capture Morris, espace projet `Travail avec Nora` | `CampusFlow` rouvert, même fil et historique visibles ; compositeur partiellement hors fenêtre | Capture ne prouve pas `Cmd + R`, ni l’état transactionnel DB, ni le BUILD_ID | Présente conversation — capture du 12/11/2026, hors Git |
| `S01-03-U01` | Compte rendu Morris du 12/11 | Ouverture du projet, changement de vue, retour sur `Travail`, contexte et historique retrouvés, sans problème de navigation rapporté | Pas de rafraîchissement projet explicitement confirmé ni mesure de performance instrumentée | Présente conversation |
| `S01-03-U02` | Confirmation Morris du 12/11 après `Cmd + R` dans `CampusFlow > Travail` | Même projet, contexte et historique toujours présents après rechargement | Retour utilisateur, pas de preuve DB ou BUILD_ID indépendant | Présente conversation |
| `S01-04-E01` | Capture Morris, préparation `prep_cd1` reprise | En-tête `Préparation retrouvée`, conversation initiale visible, absence de proposition, état `Non créé`, création non activée ; message Nora FAILED historique | Pas de lecture DB, ni de preuve du BUILD_ID ; aucune nouvelle tentative Nora observée | Présente conversation — capture du 12/11/2026, hors Git |
| `S01-05-E01` | Capture Morris, fenêtre privée sans session sur `/portfolio` | Redirection apparente vers l'écran `Connexion Studio` ; aucun projet personnel présenté ; boutons DEV visibles | Ne prouve pas HTTP 401, ni comportement de session expirée, ni flag `STUDIO_DEV_TEST_LOGIN` actif | Présente conversation — capture du 12/11/2026, hors Git |
| `S01-05-U01` | Compte rendu Morris du 12/11 | Session normale : portefeuille direct ; fenêtre privée : connexion requise | Test comparatif utilisateur, aucun log serveur ou expiration forcée | Présente conversation |
| `S01-05-U02` | Confirmation Morris du 12/11 — ouverture d'un lien direct CampusFlow en navigation privée | Écran de connexion obtenu, sans contenu privé du projet affiché | Confirmation utilisateur ; pas de vérification d'un refus 403 avec identité authentifiée différente ou d'une session expirée | Présente conversation |
| `S01-06-U01` | Compte rendu Morris du 12/11 — second compte GitHub OAuth réel | Portefeuille B = 0 projet ; lien direct CampusFlow n'expose aucun contenu A ; renvoi login puis retour portefeuille B toujours vide | Identité exacte B et traces HTTP non recueillies ; mécanisme 401/404 non démontré | Présente conversation |
| `S02-01-E01` | Capture Morris du 12/11 — nouveau sas initial | Préparation `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b` ; projet non créé, aucune proposition, composer visible, boutons de proposition et création désactivés | Pas de prompt métier Nora LIVE, de persistance ni de BUILD_ID prouvés | Présente conversation — capture hors Git |
| `S02-01-E02` | Capture Morris du 12/11 après un message métier à Nora | Mission D2 `AWAITING_PILOT_ACT`, D4 `PENDING`, texte technique brut, proposition révision 2, projet `Non créé` | Pas de lecture DB/BUILD_ID ni preuve de D2/D4 effectivement créés | Présente conversation — capture hors Git |
| `S02-01-U01` | Demande Intervencia et réponse Nora intégrale copiées dans la conversation | Négation explicite, réponse métier pertinente puis annexe technique D3 ; aucun clic de constitution/création indiqué | Pas de logs outil internes ou de statut DB indépendant | Présente conversation |
| `ML4C-GIT-01` | GitHub PR #676 et CI | HEAD candidat `2416e2ee`; CI GitHub SUCCESS sur ce SHA | Ne prouve pas quel build le navigateur sert à l’instant du test | [PR #676](https://github.com/mcleland147/sfia-workspace/pull/676) |

## 7. Gouvernance des prochaines actions

| Action / décision | État |
|---|---|
| S01-02 : stabilité visuelle après refresh | **Observé PASS**, oracle métier non entièrement démontré ; verdict final non attribué |
| S01-03 : ouverture, navigation, retour et rafraîchissement | **PASS utilisateur — scénario clôturé** ; réserve UX `ML4C-A-003` ouverte |
| Réserve `ML4C-A-003` — compositeur Nora tronqué | **OPEN**, traçabilité ML4D, contrôle de non-blocage en S07-06 ; aucun correctif lancé |
| S01-04 — reprise de préparation ouverte | **PASS utilisateur** ; absence de création affirmée par l’UI, non auditée côté DB |
| S01-05 — accès sans session à `/portfolio` et au projet CampusFlow | **PASS des deux sous-contrôles navigateur**, verdict complet en attente d'expiration/refus authentifié/panne |
| Réserve `ML4C-A-004` — contrôles DEV affichés en RECETTE | **OPEN — qualification read-only** de la configuration et du gate ; ne pas cliquer sur les boutons de test |
| S01-06 — isolation entre comptes GitHub | **PASS utilisateur**, portefeuille B vide et accès CampusFlow interdit ; mécanisme du refus à qualifier |
| `ML4C-A-005` — renvoi login depuis un projet étranger avec B authentifié | **OPEN — investigation différée, non bloquante selon Morris** ; hypothèse navigation privée à examiner ultérieurement (statut HTTP 401/404 et session B) ; aucun retest immédiat |
| S02-01 — cadrage Intervencia après dialogue LIVE | **FAIL MAJEUR** ; correctif local déclaré, revue ChatGPT NOT READY, retest RECETTE non autorisé |
| Revue du correctif local A-006/A-007 — handoff `a9dceaf9` | **NOT READY** : refus courants encore mal qualifiés ; diff `delivery-history.md` manquant dans le pack. Révision Cursor requise avant nouvelle décision Morris |
| S02-02 — création explicite / continuation D4 sur Intervencia | **NOT RUN — SUSPENDU SUR CET ÉTAT** ; ne pas déclencher `Créer le projet` à partir de la mission non voulue |
| Définir une correction intégrée et son gate | **À ARBITRER MORRIS** — pas de GO Cursor/code implicite ; préserver l'état et les preuves. S01-02/05 restent incomplets |
| Confirmer BUILD_ID réellement servi si une preuve technique est nécessaire | **À rapprocher du manifeste**, ne pas déduire d’une capture |
| Vérifier durée/rotation/révocation des sessions | **Investigation read-only à qualifier** ; pas d’injection de panne non autorisée |
| Ajouter une déconnexion | **Pas de GO** ; amélioration à arbitrer, aucun correctif demandé à Cursor |
| Git documentaire REAL WRITE (S06) | **GO Morris spécifique obligatoire** : branche, chemins, opérations et HumanDecision applicable |
| PR #676 / merge / STABLE / release / ADOPTED | **Non autorisés** par la recette |
| Enregistrement du journal dans le dépôt Git | **Autorisé par Morris le 12/11/2026** : contribution documentaire D1 sur branche candidate ; aucune PR/merge |

## 8. Bilan provisoire et prochaine saisie

**Campagne : `INCOMPLETE — 4 PASS / 1 FAIL / 48 NOT RUN`.** Les parcours OAuth, continuité de projet, reprise de préparation et isolation utilisateur sont validés à leur portée observée. **Sept réserves/anomalies ouvertes**, dont deux majeures en S02-01. Le Pilote a explicitement refusé la création ; le candidat a néanmoins qualifié une mission D2/D4 et modifié l'aperçu. Aucun projet ni document D2/D4 réel n'est confirmé. `ML4C-A-005` reste en investigation différée. Les niveaux de sécurité session, durée, isolation et refus appartiennent aux tests complémentaires et aux investigations documentées.

**Contrôle partiel S01-02 :** après rafraîchissement, `CampusFlow` et les 2 préparations restent affichés ; confirmation Morris enregistrée en `S01-02-U01`. La vérification des droits et de la vérité métier demeure ouverte. **S01-03 PASS utilisateur :** ouverture, navigation, retour et conservation du contexte et de l'historique après rafraîchissement explicitement confirmés par Morris (`S01-03-U02`). Réserve UX `ML4C-A-003` ouverte et orientée vers ML4D, sans correction pendant cette séance. **S01-04 PASS utilisateur :** reprise de `prep_cd1`, fil conservé et état `Non créé` observés sur capture (`S01-04-E01`) ; aucun effet réel DB non audité n'est revendiqué. Message Nora FAILED historique noté sans nouvelle anomalie. **S01-05 partiel :** un navigateur non authentifié est renvoyé vers l'écran de connexion à partir de `/portfolio` et du lien direct CampusFlow ; la session existante reste valide dans le navigateur normal (`S01-05-E01/U01/U02`). Aucun test d'expiration réelle, de permission refusée ou de panne contrôlée n'a été effectué. Les boutons DEV visibles sont sous qualification `ML4C-A-004` ; ils n'ont pas été utilisés. **S01-06 PASS utilisateur :** second compte GitHub, portefeuille B vide et refus d'accès au projet CampusFlow observés (`S01-06-U01`). La redirection vers login mérite qualification (`ML4C-A-005`) : sous code candidat, un projet étranger devrait produire 404 si B conserve une session valide, tandis que 401 déclenche login. Le mécanisme réel n'est pas prouvé. **Arbitrage Morris du 12/11 :** `ML4C-A-005` reste en **investigation différée**, sans correction ni nouveau test maintenant ; hypothèse de rôle de la navigation privée non démontrée, refus de consultation de CampusFlow observé. **S02-01 FAIL :** après la demande de cadrage sans création, Nora répond correctement sur le fond, mais la préparation affiche une proposition automatique révision 2, une mission `AWAITING_PILOT_ACT` avec D4 `PENDING` et des diagnostics D3 bruts dans le fil. `ML4C-A-006/007` majeures ; STOP de l'état Intervencia sans clic de création ou nouveau message. **Suite :** GO correctif Morris reçu ; code local rapporté avec tests, mais revue ChatGPT **NOT READY**. `A-006` conserve des négations erronées ; le handoff manque le diff de `delivery-history.md`. Exiger amendement du correctif et du pack, puis nouvelle revue. Ne pas poursuivre S02-02 ni modifier la RECETTE sur cette base.

**Convention de mise à jour :** à chaque cas, ajouter une fiche datée à la section 3 (ou sous-section de la famille testée), actualiser la ligne de matrice, le tableau de bord, l’index de preuves et le registre d’anomalies. Aucun cas ne passe PASS par propagation. Si un correctif change le SHA/build, séparer l’historique et le retest sous la nouvelle identité.

---

**Statut de diffusion :** journal documentaire D1 publié sur branche candidate Git. Les captures S01-01 restent conservées dans le dossier ZIP local et ne sont pas versées au dépôt. **Aucune PR, merge, suppression, mutation RECETTE, écriture Git REAL ou promotion produit n'est autorisée par cette publication.**
```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/qualification-cp2.md`

Blob worktree: `1533343e8caa9788714123135cfab853c1232a13`

```markdown
# SFIA Studio Next — ML4C : préparation de la convergence fonctionnelle intégrée

> **CP2 GLOBAL — VALIDÉ EN CONTENU AVEC RÉSERVES PAR MORRIS (11/11/2026)** : [contrat de convergence fonctionnelle intégrée](contrat-convergence-fonctionnelle-integree.md) ; S01–S07 sont les oracles de réception d'**un seul ML4C**, et non des lots autonomes. La revue de cohérence a confirmé la fidélité à la vision Pilote–Nora, au diagnostic ML4B et à Gate B. S02/S03 conservent leur [design correctif précédemment validé](design-correctif-verite-effets-continuite.md) ; les autres scénarios sont validés **en orientation**, leurs mécanismes techniques/proofs restant à qualifier. **ENV-01 reste OPEN** : inventaire read-only et isolation prouvée avant tests mutatifs, aucun cleanup sans GO. Nora LIVE historique ML4-REC-08 non clos ; Git REAL exige un mandat fournisseur distinct. **Pas de GO de construction ML4C, Cursor, PR, merge, ML4D, ML5 ni ADOPTED.** Le présent addendum prévaut sur les instantanés antérieurs « CP2 CANDIDATE » ci-dessous, conservés à titre historique.

> **DESIGN CORRECTIF S02/S03 — VALIDÉ EN CONTENU PAR MORRIS (11/11/2026)** : [design intégré « Vérité des effets et continuité »](design-correctif-verite-effets-continuite.md) ; publication documentaire autorisée sur cette branche CP2 candidate. Il définit la reprise D2 après perte d'ACK, la restitution documentaire fidèle D3/D4, les critères de preuve, l'interface S05 et la condition préalable ENV-01. **Ce n'est ni la validation du contrat ML4C complet, ni un GO Cursor/build/DB/LIVE, ni une preuve de résolution LIVE de `ML4-REC-08`.** Les autres scénarios S01/S04/S05/S06/S07 restent à qualifier. Les statuts historiques du texte ci-dessous sont conservés comme instantanés antérieurs.

> **GATE B — ACCEPTÉ AVEC RÉSERVES PAR MORRIS (11/11/2026)** : [décision de sortie ML4B/CP1](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md), publiée sur la présente **branche candidate**. Le diagnostic ML4B est une base acceptée et son objectif documentaire clôturé avec réserves ; **les constats X-01..08, les preuves manquantes, les causes à établir et la préparation CP2 restent à traiter**. Ce document demeure `CP2 PREPARATION CANDIDATE`, il **n'est pas encore un contrat de construction approuvé**. Les mentions `GATE B OPEN` dans la préparation initiale sont des instantanés antérieurs. **Aucun GO Cursor, Figma, Git REAL, PR, merge ou ADOPTED.**

**Nature :** contrat de préparation CP2 **candidat** — support D0 de qualification et de revue Morris, non décision de construction.

**Date :** 11 novembre 2026 (Europe/Paris).
**Dépôt :** `mcleland147/sfia-workspace` ; périmètre `projects/sfia-studio-next/`.
**Référence de code / diagnostic intégré :** `main@42aa373947446a8c20694b06c559ee0da1cba580` (PR #674 ML4B mergée).
**Référence de trajectoire candidate :** `docs/next-r5-ml4c-ml4d-trajectory-20261111@5717b6c938288404f71c9281f1c92be99a51fb89` — **non fusionnée sur main** au pré-check du 11/11/2026.
**État local / DB / navigateur / environnement LIVE :** **NON OBSERVÉS** dans cette préparation ; aucun test nouveau exécuté.
**Autorité :** Morris arbitre le diagnostic, le contrat, les gates et les autorisations Git ; ChatGPT prépare et revoit ; Cursor réalise les changements D3 sous SFIA v2.6 et GO borné.
**Statut :** `DOCUMENTED — CP2 PREPARATION CANDIDATE / GATE B OPEN / NO BUILD GO / NO PR / NO MERGE / NO ADOPTED`.

## 1. Mandat de préparation et résultat cible

Préparer le chantier **ML4C — convergence fonctionnelle intégrée du produit**, en appliquant **strictement la méthode en quatre temps** retenue avec Morris :

1. Transformer le diagnostic ML4B/CP1 en contrat de convergence et priorités.
2. Vérifier les écarts, les preuves et les causes réelles avant d'arrêter les corrections.
3. Faire converger des ensembles cohérents de capacités, interfaces, UX fonctionnelle, tests et documentation.
4. Prouver des parcours utilisateurs intégrés et qualifier les réserves avant réception intermédiaire Morris.

**Aucune approche supplémentaire « enveloppe UX d'abord / shell-first » n'est introduite.** Les interventions sur le cockpit, le sas, la navigation et les surfaces existantes sont motivées par les exigences fonctionnelles et l'UX nécessaire aux parcours. **ML4D** demeure propriétaire de la convergence visuelle/UX globale sur l'ensemble des surfaces applicables ; un défaut bloquant l'usage réel ne lui est pas reporté par défaut.

**Résultat recherché par le Pilote :** accéder à Studio, retrouver ses projets et son contexte, préparer/créer/reprendre un projet, travailler avec Nora, obtenir les documents, analyses, décisions et effets applicatifs autorisés réellement vérifiés, y compris après interruption, sans être obligé d'orchestrer manuellement les domaines D1–D9.

**Principe de gouvernance :** Nora qualifie/organise/raisonne/mobilise/interprète/restitue ; Studio et les domaines compétents réalisent et enregistrent les effets, appliquent les préconditions et produisent des résultats vérifiables ; le Pilote conserve HumanDecision et les actes explicitement requis. Aucun nouveau moteur concurrent d'autorisation, d'effets ou de conversation.

## 2. Référentiel applicable et limite du diagnostic

L'ordre de confiance est **Git/preuves → décisions Morris → R1/R2/R3/R4/R5 → hypothèses**.

Sources vérifiées sur Git :

- `governance/SEF.md`, version 0.2, notamment §§4–6 et §10 : macro-lots orientés résultats, conception intégrée, preuve graduée et gates.
- `governance/roadmap.md`, R5/CP0 sur main ; décision `governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md`.
- Décision complémentaire du 11/11 `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` **sur la branche candidate identifiée**, non encore baseline main.
- `cadrage/vision-produit.md` : neuf domaines, sept parcours E2E ; `cadrage/conduite-intentions-continuite-cognitive-nora-studio.md` approuvé en contenu le 10/11 (déjà présent dans main, malgré une métadonnée historique indiquant candidate).
- `conception-fonctionnelle/README.md` et les spécifications propriétaires R2 applicables ; `ux-ui/contrat-transposition-figma-code.md`, `ux-ui/audit-couverture-ux-r3.md` ; `architecture-technique/cadrage-r4.md`, `architecture-technique/contrat-observabilite-transverse.md`.
- `construction/reference-delivery-r5.md` §4 pour la traçabilité ; `construction/reconciliation-produit/README.md`, annexes ML1–ML4 et `transversal/synthese-r1-e2e-gate-b.md` ; recettes propriétaires des ML1–ML4, notamment le registre ML4 R01–R14.

**Photographie du diagnostic ML4B :** 628 identifiants RG/PF indexés, dont des compléments candidats distincts ; sept E2E R1 et 43 étapes nominales **rapprochées des sources**, non 43 étapes prouvées end-to-end. Huit familles de constats X-01..X-08. Des preuves déterministes/PG/BROWSER FAKE/LIVE/REAL historiques existent à divers SHA ; elles ne constituent pas une recette complète sur le même build.

**À ne pas confondre :** anomalie confirmée par source ou LIVE, lacune de couverture, hypothèse de cause, fonctionnalité encore hors ML4, et demande d'évolution non validée. Aucun verdict de `BEHAVIOR PROVEN` ou `ADOPTED` global ne découle de ce dossier.

## 3. IN / OUT et responsabilités

### IN — convergence ML4C

- **D1/D2 :** accès/session, portefeuille et cockpit, projets et états sincères, préparations OPEN, sas, proposition, création sur acte explicite, continuité et reprises, isolation inter-Pilotes, erreurs et navigation nécessaire à l'usage.
- **D3/D4 :** conduite cognitive des intentions, raisonnement, mémoire et sélection de connaissances pertinentes, documents/versions, vérité du résultat applicatif, continuation de mission et restitution.
- **D5/D6 :** trajectoire/cycles/méthode/CKI selon les contrats applicables, décisions humaines et mandats, suspension, reprise, refus et incertitude.
- **D7/D8/D9 dans la limite du ML4 construit :** consultation et provenance Git autorisées, préparation et publication **documentaire** gouvernée, preuves vérifiables et absence de faux résultat ; cas de droits retirés, HEAD changé, ACK perdu et non-duplication selon autorisation de test REAL.
- **Transverse :** UX fonctionnelle des parcours (dont cockpit, sas et documents), erreurs, observabilité utile à l'investigation, sécurité/ownership, intégrité, idempotence, architecture/doc/tests synchronisés ; scénarios nominaux et négatifs.

### OUT — sans décision distincte

- Convergence de finition UX/UI globale et certification générale de fidélité Figma : **ML4D** (mais aucune UX fonctionnelle bloquante n'est différée automatiquement).
- Réalisation technique par Cursor du **ML5** (R1 E2E05/E2E06 dans leur portion Cursor non implémentée) ; second moteur d'autorisation/exécution, refonte générale non motivée.
- Merge Git REAL actuellement hard-blocked, sans arbitrage Morris spécifique ; connexion de fournisseurs Git supplémentaires, capacités non prévues par les contrats ou nouveaux écrans métier sans autorisation.
- STABLE, release, adoption, modifications de SEF/R1/R2/R4 normatives par déduction ; PR/merge Git, push projet ou GO Cursor non explicités.

### Répartition des responsabilités

| Acteur/propriétaire | Responsabilité dans le lot |
| --- | --- |
| Morris | Fixer criticité et périmètre, accepter Gate B et CP2, trancher extensions et réserves, décider GO techniques et réception intermédiaire. |
| ChatGPT | Confronter sources/contrats/preuves, challenger les causes, proposer architecture et scénarios, reviewer les packs Cursor, garder la traçabilité. |
| Cursor | Inspecter état local Git avant intervention, implémenter sous un contrat SFIA v2.6 validé, fournir tests, preuves et documentation synchronisée. |
| D1–D9 / Studio | Conserver propriétaire unique pour sessions, création, cognition, D4, cycles, HumanDecision, effets, preuves et Git. |
| Nora (produit) | Conduire cognitivement une intention sans prendre les effets ou autorisations des domaines. |

## 4. Méthode en quatre temps — sorties et critères

| Temps | Travail | Sortie nécessaire | STOP / gate |
| --- | --- | --- | --- |
| **T1 — Qualifier** | Partir des sources et des preuves ML4B ; classer chaque constat (`CONFIRMED`, `PROOF GAP`, `RISK`, `CANDIDATE CHANGE`, `OUT`) ; relier RG/PF, E2E, résultat utilisateur, propriétaire, risque et priorité. | Contrat de capacités / matrice d'acceptation candidat CP2, sans liste de micro-correctifs. | Gate B non accepté : CP2 reste candidat et aucun build. |
| **T2 — Expliquer** | Lire les flux code/API/états/DB/UX pertinents ; reproduire uniquement les cas discriminants ; distinguer preuve antérieure, cause présumée et cause confirmée ; mesurer le blast radius. | Diagnostic causal et options de correction par responsabilité, plus contrat d'interface/error/reprise proposé. | Si effet, droits, données ou architecture changent substantiellement : arbitrage Morris préalable. |
| **T3 — Converger** | Modifier par capacités cohérentes ; associer code+tests+docs+UX nécessaire dans les mêmes livraisons ; intégrer et revalider les interfaces partagées. | Comportements implantés et régressions contrôlées, statuts `IMPLEMENTED`/`COVERAGE VERIFIED` distincts. | GO Cursor/SFIA v2.6 séparé, pré-check local et branches/pack/handoff ; aucune mutation non autorisée. |
| **T4 — Prouver** | Jouer les scénarios Pilote intégrés sur SHAs/lanes fixés, avec réelles décisions/effets ou limitations bornées ; comparer aux oracles, observer les reprises, qualifier les réserves. | Dossier de réception intermédiaire ML4C, sans déclarer ML4D/F2-G5 globalement acceptés. | Morris décide résultat/réserves, GO ML4D distinct ; Gate C final après ML4D. |

**Règle de preuve :** `DETERMINISTIC ≠ PG/API ≠ BROWSER ≠ LIVE Nora ≠ REAL Git`. Un test `NOT RUN` n'est ni `PASS` ni `FAIL`. Un succès d'API D4 ne prouve pas que Nora l'a correctement interprété. Des scénarios combinés peuvent couvrir plusieurs RG/PF ; aucune exigence de 628 tests isolés.

## 5. Registre de qualification initial — sans arbitrer les causes

| Repère CP1 / constat | Qualification initiale | Risque utilisateur | Traitement proposé avant choix technique |
| --- | --- | --- | --- |
| **D1-GAP-01**, statut portefeuille par index | **CONFIRMED SOURCE** (`portfolio/page.tsx`, `statusForProject`) | États projets inventés | Rattacher à `RG-ACC-013` et vérifier la source métier réellement disponible ; définir la présentation honnête, tests portefeuille/reprise. |
| D1/D2 erreurs 401 non-auth, état session/cookies | **SOURCE GAP / RESILIENCE PROOF** | Mauvaise explication ou déconnexion abusive ; isolation incertaine | Séparer erreurs DB/service/auth, test injecté API/BROWSER, refus Pilot B ; ne pas inventer collision réelle. |
| D2-GAP-02 et A05 : réponse de création perdue | **SOURCE GAP + PROOF GAP** | Projet créé mais reprise UI trompeuse ou bloquée | Tracer commande/fingerprint/DB/ACK et `reconcile` depuis le navigateur, double-clic/refresh sans duplication. |
| D2-GAP-03/04 : propositions concurrentes, préparation/conversation hors transaction | **RISK SOURCE** | Perte d'évolution ou préparation incomplète | Qualifier reproduction/concurrence/atomicité avant de choisir CAS ou transaction supplémentaire. |
| **X-01 / ML4-REC-08** : D4 `REVISE AVAILABLE` alors que Nora nie la sauvegarde ; CREATE/REVISE ambigu | **LIVE FAIL HISTORIQUE** | Service non fiable, intention interrompue/état déformé | Corréler intention→qualification→D4→résultat→continuation→texte affiché au même SHA ; séparer cause du routing, narration et UX. |
| **X-02** : mémoire, pertinence et raisonnement | **PROOF GAP / LIMITATION CODE LEXICALE** | Réponse oublie le bon acquis, point ouvert ou décision | Corpus contrôlé (reformulation, sources contradictoires, décision actuelle/périmée) ; comparaison LIVE et sources effectivement choisies avant nouvel index. |
| **X-03** : pending et continuité | **SOURCE GAP + NEGATIVE PROOF GAP** | Nouvelle question indépendante bloquée ; travail repris de travers | Vérifier pending métier, ownership/fencing, reprise de mission et possibilité de conversation indépendante. |
| **X-04** : publication Git USER R12–R14 | **NOT RUN / E2E INCOMPLETE**, malgré API REAL antérieure | Publication annoncée sans commit/PR inspectables | Préparer scénario sur dépôt sandbox et droits autorisés : diff, HumanDecision, branch/commit/PR, relecture et restitution ; exécution REAL sous GO distinct. |
| **X-05** : droits et sûreté des refus | **PG BORNÉ / NEGATIVE REAL NOT RUN** | Mutation non autorisée ou fuite | Refus 403/revocation à l'effet, projet B/dépôt partagé, source hostile, HEAD changé ; ne pas présumer bypass réel. |
| **X-06** : UX fonctionnelle et fidélité Figma | **UX LIVE GAP / F2-G5 NOT RUN** | Sas et documents confus, interactions incomplètes | Corriger les parcours UX bloquants dans ML4C ; référencer et différer à ML4D les finitions et comparaisons globales Figma. |
| **X-07** : erreurs, observabilité, streaming, restore DB | **SOURCE / PROOF GAP selon sous-cas** | État incertain invisible, récupération mal expliquée | Placer l'observation dans les scénarios propriétaires ; restore, multi-lane et streaming avec réserves et exit explicités, selon criticité décidée. |
| **X-08** : merge REAL hard-blocked et frontière Cursor | **KNOWN OUT / DECISION PENDING** | Faux sentiment de couverture complète | Maintenir `OUT` tant qu'aucun mandat Morris ne change la frontière ; n'exiger aucun E2E Cursor de ML4C. |

**Criticité candidate, non décision :** examiner d'abord la vérité des effets et des autorisations, les pertes d'ACK, les blocages de continuité et les statuts fictifs, puis la pertinence cognitive, la complétude du parcours Git documentaire et l'UX fonctionnelle. Ordre technique à établir à T2 selon dépendances et risques, pas d'après la seule gravité perçue.

## 6. Trois ensembles cohérents de réalisation candidats (au sein du seul ML4C)

Ils **ne sont ni trois macro-lots administratifs obligatoires ni trois moteurs indépendants**. Ils forment un seul résultat ML4C, avec intégration et recette commune. Les frontières sont les responsabilités et dépendances réelles.

### Ensemble « Entrer, préparer, créer et retrouver » — D1/D2 avec D3/D4

- **Résultat :** accès valide au cockpit, portefeuille fidèle aux faits, reprise d'un sas ouvert, travail Nora avant projet, création sur geste explicite, transfert du même fil, document conservé, retour au projet après rupture/session.
- **Entrées:** ML1 A01–A16 ; R1 E2E01 ; R2 D1/D2 ; données de session, APIs portefeuille et préparation, documents et conversation ; UX de navigation et états d'erreur.
- **Exceptions centrales :** Pilot B/interprojet, session expirée, panne DB 500/503 non classée en 401, double-clic et ACK perdu, erreur entre insertions, proposition concurrente, nouveau projet sans cycle ni Git implicite.
- **Sortie :** projet et préparations réels, pas d'état inventé, reprise sans doublon, erreurs interprétables ; QA PG/API/BROWSER + LIVE Nora seulement où utile.
- **Dépendance :** résultats véridiques D2/D4 transmis au prochain ensemble ; aucune mutation de D5/D6 déduite d'une création.

### Ensemble « Conduire, mémoriser et poursuivre une intention » — D3/D4/D5/D6

- **Résultat :** Nora comprend le travail, mobilise Studio, exploite l'effet réel D4 et les décisions D5/D6, poursuit la mission, retrouve les sources pertinentes et restitue une réponse factuellement cohérente après reprise.
- **Entrées :** R1 E2E02–04 selon parties construites ; R2 cognition, connaissance, cycles, décisions ; cadrage Nora/Studio du 10/11 ; ML2 Q01–Q29 et COG, ML3 B01–B18/T01–T08/C03.
- **Exceptions centrales :** CREATE vs REVISE, ACK D4 AVAILABLE/FAILED/UNKNOWN, source absente ou devenue périmée, décision opposable, longue conversation, changement de session, pending actif et question indépendante, droit retiré pendant la génération.
- **Sortie :** oracles cognitifs qualitatifs et d'effets, sources/version consultables, continuation après résultat, absence d'autorisation simulée ; tests déterministes/PG plus **LIVE** sur corpus représentatif.
- **Dépendance :** contrat partagé de résultat observé et de reprise utilisé pour la publication Git ; éviter une nouvelle machine à états globale par défaut.

### Ensemble « Produire et publier sous gouvernance » — D4/D6/D7/D8/D9 + Nora

- **Résultat :** dans une intention unique, créer/réviser un document D4, préparer un Git diff réel, requérir la décision applicable, publier sous permissions réelles, vérifier les références et rapporter un résultat précis.
- **Entrées :** R1 E2E07 et portions ML4 des E2E05/06 ; R2 D4/D6–D9 ; recettes ML4 AT01–22 et USER R12–14 ; référence Nora/Studio.
- **Exceptions centrales :** HumanDecision refusée/absente/révoquée, base/HEAD modifié, dépôt partagé/projet B, source hostile, timeout/ACK perdu, doublon/PR fantôme, permission retirée, effet Git non confirmé.
- **Sortie :** sur dépôt sandbox et **GO REAL spécifique**, preuve provider + API/DB + BROWSER + Nora LIVE pour le parcours complet ; factuel Git `branch/commit/PR`, refus sans mutation, reprise sans deuxième effet. Le merge REAL reste hors portée sans décision spécifique.
- **Dépendance :** oracles de vérité/continuation de l'ensemble précédent ; les propriétaires D6–D9 conservent intégralement leurs invariants.

## 7. Parcours d'acceptation candidats (oracles, pas résultats)

| Scénario | Parcours utilisateur et oracles minimums | Niveau de preuve exigible à arbitrer | Couvre |
| --- | --- | --- | --- |
| **S01 — Entrée et cockpit** | Session active → portefeuille personnel ; vrais projets et préparations OPEN ; statuts non fabriqués ; refus Pilot B ; sortie/reconnexion et lien profond. | API/PG + BROWSER ; OAuth LIVE lorsque nécessaire | D1, E2E01, D1-GAP-01, X-07 |
| **S02 — Sas et création** | Préparation → échange Nora → proposition révisable → clic explicite → projet unique → fil/doc conservés ; ACK perdu, refresh, double commande sans duplication. | PG + BROWSER + Nora LIVE ciblé | D1/D2/D3/D4, E2E01, X-03 |
| **S03 — Document vrai et suite de mission** | Pilote demande création puis révision ciblée ; D4 retourne identifiant/version/état ; Nora confirme exactement les actes et poursuit l'intention ; cas FAILED/UNKNOWN sans fausse réussite. | PG/D4 + BROWSER + Nora LIVE au même SHA | X-01, X-03, E2E03/04 |
| **S04 — Mémoire et décision** | Après plusieurs sujets/sessions, Nora retrouve une information ancienne reformulée et la décision en vigueur, résout la contradiction avec provenance et limite explicite. | PG corpus + Nora LIVE + jugement utilisateur qualitatif | X-02, D3/D4/D5/D6, E2E03/04 |
| **S05 — Pending et interruption** | Une décision/commande attend ou produit UNKNOWN ; question indépendante possible ; reprise du travail d'origine sans autoriser, doubler ou oublier des effets. | UNIT/PG + BROWSER + LIVE selon scénario | X-03/X-07, D2/D3/D5/D6 |
| **S06 — Mission Git gouvernée** | Nora produit D4 → D7 prépare diff → D6 HumanDecision → D9 mutation Git autorisée → D8 résultats inspectés → Nora restitue et continue ; refus/révocation/HEAD/ACK négatifs. | PG + BROWSER + REAL provider sandbox + LIVE, sous GO distinct | X-04/X-05, E2E07, ML4 R12–14 |
| **S07 — Régression de frontière et UX fonctionnelle** | Parcours ML1–ML4 traversent les surfaces accessibles sans action fictive ; navigation, sauvegarde, refus, erreurs et retours lisibles ; pas d'effet Cursor/merge implicite. | BROWSER, API/PG, Figma ciblé si écran fonctionnel modifié | X-06/X-08, frontières R3/R4 |

Pour chaque scénario, garder des **oracles nominaux et négatifs non dépendants d'une formulation exacte de Nora** : capacité réelle, source employée, précision des effets, autorité, continuation et restitution. Un succès de rédaction ne compense pas un faux succès métier. **F2/G5 global** et alignement complet de tous les écrans relèvent de ML4D ; le rendu fonctionnel des scénarios S01–S07 reste dans ML4C.

## 8. T2 — qualification causale et blast radius avant GO Cursor

Le contrôle causal n'est **pas** une refonte d'architecture par défaut. Examiner par écart prioritaire :

1. Entrée exacte et intention Pilote ; identité du projet, de la préparation et du tour/génération.
2. Contrat R2 et comportement R1 applicable, y compris décision modificative ultérieure.
3. Appel métier propriétaire D1–D9 et préconditions, droits, versions, corrélation, `UNKNOWN`.
4. Persistance DB, événement observable, réponse API, ACK/timeout, réponse cognitive et rendu UI.
5. Cause racine : `CONFIRMED` si démontrée, sinon `HYPOTHESIS` avec test discriminant ; ne pas masquer une cause par du wording.
6. Choix minimaux, interfaces impactées, plan de regression, sécurité et données : *blast radius API/DB/authority/UX/security/tests*.
7. Réversibilité et dette/exit, avec STOP si autorité ou modèle de données change sans décision.

**Déjà inspecté sur main :** `web/src/app/portfolio/page.tsx` contient `statusForProject` et l'appelle pour chaque projet ; `web/src/domains/pilotage/thread-recovery.ts` contient `mayStartNewThreadAct`, qui refuse un message différent tant qu'un `pending` non résolu existe ; `web/src/domains/conversation/service.ts` contient des points de qualification D4 et de continuation Nora. Ces lectures **orientent l'investigation**, elles ne démontrent pas toutes les causes racines ni le comportement utilisateur au même build.

## 9. Intégration, ordre candidat et prévention des régressions

**Séquence recommandée à soumettre à Morris :**

- **Fondations de vérité et de reprise** à stabiliser sur les contrats existants : états de projet, session/erreurs, D2 ACK et reprise, D4 résultat → Nora ; aucune reprise cognitive fiable si le résultat est imaginaire.
- **Cognition, mémoire et pilotage** : utiliser les contrats de vérité sans créer de second moteur, qualifier la valeur utilisateur, tester les décisions et interruptions.
- **Publication Git documentaire** : intégrer D4/D6–D9 et Nora dans un trajet unique ; préparer la recette REAL et les négatifs ; n'exécuter aucun effet fournisseur sans GO.
- **Régression ML1–ML4 combinée et réception intermédiaire** : retester les parcours qui partagent des interfaces, plus les flux nominaux que les corrections peuvent perturber.

**Ce n'est pas une planification de micro-tâches ou un ordre irréversible.** Si T2 révèle que les interfaces sont partagées ou qu'un correctif doit être intégré plus tôt, regrouper. Parallélisme uniquement si responsabilités, fichiers, schémas, oracles et intégrateur sont fixés ; tests d'intégration communs au point de convergence.

**Critères de STOP :** cause non établie sur un comportement critique ; contradiction R1/R2/decision ; changement d'autorité, persistance ou sécurité non arbitré ; absence de source Figma pour UX fonctionnelle modifiée ; fournisseur REAL sans mandat ; extension fonctionnelle nouvelle ; preuves insuffisantes pour affirmer PASS ; détérioration d'un invariant existant ; production d'un moteur concurrent.

## 10. Préparation du Gate B et du futur contrat CP2

**Gate B est distinct du présent GO de préparation.** Avant de convertir ce dossier en contrat CP2 validé :

| Arbitrage Morris à présenter | Proposition de position | Statut actuel |
| --- | --- | --- |
| **B1 — Recevabilité de CP1** | Accepter le diagnostic comme base de convergence avec limites de preuve, ou demander seulement les compléments empêchant une décision responsable. | **OPEN** |
| **B2 — Périmètre ML4C** | Couvrir ML1–ML4 intégrés et l'UX fonctionnelle, en regroupant les constats par résultat utilisateur ; ne pas rouvrir les anciennes clôtures. | **Orientation validée en contenu, Gate B pas tenu** |
| **B3 — Priorité / risque** | Traiter d'abord les mensonges d'état/effet, autorité, blocages de continuité et cas de non-idempotence ; proportionner le reste aux risques et à la valeur. | **À VALIDER** |
| **B4 — Git REAL/merge** | Publication documentaire REAL en sandbox seulement sous mandat explicite ; merge REAL bloqué / hors scope par défaut. | **À VALIDER** |
| **B5 — ML4C vs ML4D** | UX nécessaire dans ML4C, fidélité et homogénéité globales dans ML4D ; préparation de la cible UX mais pas chantier shell-first. | **Orientation validée en contenu sur branche candidate** |
| **B6 — Réserves et dette/exit** | Chaque différé doit avoir propriétaire, risque, condition de sortie, étape suivante et interdiction de faux PASS. | **À VALIDER** |

### Livrables candidats CP2 à consolider sans duplication documentaire

- **Un seul contrat d'acceptation intégré** : objectifs/IN-OUT, matrice risque-couverture, scénarios S01–S07 revus, impacts/interdépendances, critères de résultat, intégrateur et dépendances ML4D/ML5/R6.
- **Un diagnostic causal ciblé** pour les anomalies bloquantes et risques non déjà résolus ; références exactes au code/DB/observabilité et aux preuves historiques.
- **Un plan d'exécution et de preuve** par ensembles cohérents (sans nouvelle méthode de cycle ni template SFIA v2.6), avec gate Morris préalable, tests/négatifs et Review Pack complet.
- **Une qualification des réserves** : traitement ML4C, différé justifié ML4D ou R6, OUT ML5, extension soumise à Morris, ou absence de preuve qui doit être levée avant réception.

### Critère de réception intermédiaire ML4C proposé

> Les parcours et capacités ML1–ML4 retenus sont conformes aux exigences applicables et démontrés au niveau de preuve proportionné à leurs risques ; aucun écart critique non arbitré ne compromet la vérité des résultats, l'autorité du Pilote, la continuité du travail ou l'utilisation normale du produit. Les limitations et preuves restantes sont explicites, attribuées et assorties d'un exit. Cette réception **n'est pas** l'acceptation finale UX/UI ni le Gate C du programme.

**Capacité suivante :** sur décision Morris, construction ML4C par Cursor et réception intermédiaire, puis ML4D UX/UI global, **Gate C final**, ML5 Cursor et R6. Aucun GO sur ces étapes n'est accordé par ce document.

## 11. Trace de préparation et accès aux sources

- Git `main@42aa373947446a8c20694b06c559ee0da1cba580` : https://github.com/mcleland147/sfia-workspace/tree/42aa373947446a8c20694b06c559ee0da1cba580/projects/sfia-studio-next
- Décision ML4C/ML4D (branche candidate `5717b6c`) : https://github.com/mcleland147/sfia-workspace/blob/5717b6c938288404f71c9281f1c92be99a51fb89/projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md
- Diagnostic CP1 : https://github.com/mcleland147/sfia-workspace/blob/42aa373947446a8c20694b06c559ee0da1cba580/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
- Conduite Nora/Studio : https://github.com/mcleland147/sfia-workspace/blob/42aa373947446a8c20694b06c559ee0da1cba580/projects/sfia-studio-next/cadrage/conduite-intentions-continuite-cognitive-nora-studio.md
- Contrat SFIA externe : **SFIA v2.6**, à lire depuis Git (routing + template) **avant** tout prompt Cursor ; aucun prompt n'est généré ici.

**Statut final de ce livrable :** `PREPARATION CP2 CANDIDATE / SOURCES GIT QUALIFIED / NO NEW TEST RUN / NO BUILD / GATE B OPEN / DOCUMENTARY CANDIDATE BRANCH / NO PR / NO MERGE / NO ADOPTED`.

```


### Diff tracked agrégé (C+D)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md b/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
index 3f89c065..99d8130a 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/qualification.md
@@ -7,6 +7,8 @@
 **Source UX :** fichier Figma `itgvCulInEnFY6DvgIegvP`, page `01 · Parcours produit — Référence UX R3` (`94:49`), consultée en lecture native. Page à **242 frames** dont écrans ML4 218–235 et INDEX déjà validés ; aucune mutation Figma réalisée lors de cette qualification.
 **Autorité :** Morris a validé **A1, A2, A3** et autorisé le **versement documentaire borné** sur une branche Git ainsi que les addenda de traçabilité R3/R5. Aucun GO code/DB/Figma, aucune PR, aucun merge, aucune promotion ou adoption. Voir [décision des arbitrages](../../governance/decisions/2026-11-07-convergence-ux-arbitrages.md).

+> **ADDENDUM DE TRAJECTOIRE DU 11/11/2026 — PÉRIMÈTRE HISTORIQUE CONSERVÉ :** la présente qualification date du 07/11 et reste le dossier propriétaire des décisions A1–A3, P1–P3, F1/F2, des contrats et des preuves G1–G5 à leur portée. La [décision complémentaire R5](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) retient ensuite **ML4C convergence fonctionnelle intégrée avec UX indispensable aux parcours**, puis **ML4D convergence UX/UI globale des surfaces effectivement construites ML1–ML4**. Cette qualification ne constitue **ni** l'inventaire complet ML4D, **ni** une preuve F2/G5, **ni** un GO Figma/code ; sa chronologie pré-ML4 ne prévaut pas sur l'addendum R5 du 11/11.
+
 ## 1. Décision de trajectoire applicable

 Le document `governance/decisions/2026-11-07-ml4-ux-validation-convergence.md`, désormais intégré dans `main` via PR #663, définit la suite : **préparation documentaire ML4 achevée et intégrée → convergence UX des capacités ML1–ML3 sous contrat et GO distinct → construction technique ML4 Git → ML5 Cursor → R6**. La présente qualification applique cet ordre sans réouvrir les clôtures historiques ML1 et ML3 ni inventer une clôture formelle ML2.
diff --git a/projects/sfia-studio-next/construction/reconciliation-produit/README.md b/projects/sfia-studio-next/construction/reconciliation-produit/README.md
index 35e0e6e6..3aa8b5a5 100644
--- a/projects/sfia-studio-next/construction/reconciliation-produit/README.md
+++ b/projects/sfia-studio-next/construction/reconciliation-produit/README.md
@@ -1,5 +1,7 @@
 # SFIA Studio Next — Réconciliation produit R5 (ML4B)

+> **DÉCISION DE SORTIE POSTÉRIEURE — 11/11/2026 :** Morris a **accepté le Gate B avec réserves** et considéré l'objectif documentaire de ML4B **clôturé avec réserves**, selon la [décision D2](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) (sur branche candidate, `main` non modifiée). Le diagnostic CP1 est une **base de convergence acceptée**, pas une preuve globale de comportement : 628 références indexées, 43 étapes E2E rapprochées et huit familles X-01..X-08 conservent exactement leurs preuves, limites et réserves. Les mentions historiques `CP1 CANDIDATE / GATE B NOT HELD` ci-dessous décrivent **l'état avant cet arbitrage**. Suite autorisée : finaliser CP2 ; **aucun GO build/PR/merge/ADOPTED**.
+
 **Nature :** dossier de diagnostic documentaire D1, non normatif.
 **Ouverture :** 10 novembre 2026.
 **Baseline d'analyse :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` (après PR #673).
@@ -7,6 +9,8 @@
 **État :** `DOCUMENTED / CP1 SYNTHESIS CANDIDATE FOR MORRIS REVIEW / GATE B NOT HELD / NO PRODUCT CHANGE`.
 **Environnement local, runtime, DB et navigateur :** `NON OBSERVÉS`.

+> **MISE À JOUR DE GOUVERNANCE DU 11/11/2026 (postérieure au diagnostic CP1) :** Morris a validé **ML4C fonctionnel intégré, puis ML4D UX/UI global**, dans la [décision complémentaire](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). **Ce choix remplace les options A/B/C comme trajectoire de réalisation uniquement** ; les 628 références indexées, sept E2E/43 étapes, X-01..08 et leurs statuts de preuve restent inchangés. Inclure cockpit/portefeuille, accès, sas et navigation en ML4C lorsqu'un écart fonctionnel ou d'UX bloquante l'exige, puis reprendre toutes les surfaces applicables en ML4D pour la fidélité Figma. **CP1/Gate B non acceptés par ce seul arbitrage ; aucun GO de construction.**
+
 ## 1. Résultat du dossier et frontière

 Conformément à la [décision CP0](../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md), ML4B confronte la **vision R1, les contrats R2, la conception UX R3, l'architecture R4, les contrats R5, le code intégré, les tests et les comportements réellement prouvés**.
diff --git a/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md b/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
index f36b9c33..53850453 100644
--- a/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
+++ b/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
@@ -1,11 +1,15 @@
 # SFIA Studio Next — ML4B : synthèse transverse des sept parcours R1 et options pour le gate B

+> **DÉCISION POSTÉRIEURE AU DIAGNOSTIC — GATE B ACCEPTED WITH RESERVES (Morris, 11/11/2026)** : [enregistrement D2](../../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md). Les 628 références indexées, les 43 étapes mappées et les huit familles X-01..08 sont acceptées comme **base CP1**, non comme preuves PASS. Les options A/B/C et les questions B-01..B-06 qui suivent décrivent la préparation historique ; leur arbitrage effectif est consigné dans la décision D2. Objectif documentaire ML4B clôturé avec réserves, CP2 à finaliser, **aucun GO technique**.
+
 **Date :** 2026-11-11. **Nature :** dossier de diagnostic D1, **candidat à la revue Morris**, non normatif et non approuvé.
 **Source de code :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` ; **branche documentaire :** `docs/next-reconciliation-produit-ml1-20261110`.
 **Hors observation directe :** poste/local, DB active, navigateur, captures Figma natives, fournisseur GitHub et tests rejoués. Les preuves PG/FAKE/LIVE/REAL décrites sont des preuves **historiques à SHA/lane distincts**.

 [Index ML4B](../README.md) · [Vision R1 propriétaire](../../../cadrage/vision-produit.md) · [Décision de trajectoire CP0](../../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md) · [Roadmap](../../../governance/roadmap.md).

+> **ADDENDUM D'ORIENTATION DU 11/11/2026 :** l'arbitrage Morris postérieur à cette synthèse retient **ML4C convergence fonctionnelle intégrée (cockpit/entrée/sas compris, UX fonctionnelle incluse), suivi de ML4D convergence UX/UI globale**. Voir [décision complémentaire](../../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). Les options A/B/C ci-dessous restent **des hypothèses de classement historiques du diagnostic**, pas trois macro-lots désormais retenus. Les huit familles X-01..08, preuves, 628 références et 43 étapes ne changent pas. **Gate B encore ouvert ; pas de GO code/UX/PR/merge.**
+
 ## 1. Résultat consolidé

 | Lot et domaines R2 | Couverture de référence publiée | Acquis probants et limite déterminante |
@@ -117,7 +121,9 @@ Les noms d'étapes sont extraits des [sept scénarios R1 §§2.30–2.36](../../

 **Regroupement sans doublon :** `ML4-REC-08` = X-01 même si ML2/ML4 le mentionnent ; `R-UX-01` = X-03 ; `ML4-REC-07` ancien FAIL puis G1 ciblé PASS ; `ML4-AT-13` = X-08. `NOT RUN` n'est pas `FAIL`.

-## 4. Trois options de macro-lots de convergence ML4C, non arbitrées
+## 4. Trois options historiques de convergence envisagées au diagnostic CP1 (avant arbitrage du 11/11)
+
+> **Lecture historique uniquement :** A/B/C détaillent des familles de problèmes et des dépendances. La réalisation approuvée en orientation est désormais **ML4C fonctionnel intégré → ML4D UX/UI global** ; voir l'addendum et la décision D2 ci-dessus. Aucun constat ou niveau de preuve n'est effacé.

 | Option cohérente | Résultat Pilote | IN / OUT et responsabilités | Preuve de sortie et dette/exit |
 | --- | --- | --- | --- |
diff --git a/projects/sfia-studio-next/governance/roadmap.md b/projects/sfia-studio-next/governance/roadmap.md
index 556686dc..8e91c600 100644
--- a/projects/sfia-studio-next/governance/roadmap.md
+++ b/projects/sfia-studio-next/governance/roadmap.md
@@ -1,5 +1,38 @@
 # SFIA Studio Next — Living Roadmap

+> **ÉTAT COURANT R5 — DOC GATE CANDIDATE (12/11/2026 ; branche locale `docs/next-ml4c-documentary-gate-20261112` basée sur `origin/main@6d237452`)** : consolidation documentaire des décisions et contrats ML4C déjà validés en contenu par Morris sur `docs/next-r5-ml4c-cp2-preparation-20261111@8b41fe16`, **sans publication projet**. Trajectoire inchangée : **ML4B → ML4C → ML4D → Gate C → ML5 → R6**. Gate C **OPEN**. **Aucun DOC GATE APPROVED, merge, PR ouverte, ADOPTED, READY FOR REAL, STABLE ou release.**
+
+### Correspondance avec le candidat produit LOCAL (non intégré)
+
+| Qualification | Statut factuel |
+| --- | --- |
+| VALIDATED SPEC (décision/contrats 11–12/11) | décisions A1–A3 + contrats/conception B* importés **à l'identique** dans ce candidat docs |
+| IMPLEMENTED LOCAL | correctif sémantique sur `fix/next-semantic-intent-convergence-20261112` commit **`83fd9ecef2d952c90a828d68a192e105c83be35f`** (parent `2416e2ee`, tree `bed6bff5`) — **LOCAL / NOT INTEGRATED** |
+| COVERAGE VERIFIED (déterministe) | selon handoff `sfia/review-handoff@77fda513` : unit/PG/browser DEV isolée (Q1/Q2, AUTH, S05, D4 gouvernée) |
+| DETERMINISTIC BEHAVIOR PROVEN | à la portée des suites rejouées en DEV ; **≠** LIVE/REAL |
+| PR READINESS | produit : candidate locale prête à revue ; docs : **ce candidat** — publication **NON** effectuée |
+| REMOTE CI NOT RUN | aucune CI GitHub sur `83fd9ece` ; PR #676 head reste `2416e2ee` |
+| LIVE NOT RUN | Nora LIVE OpenAI **NOT RUN** |
+| USER RECETTE NOT ACCEPTED | cahier 53 cas conservé ; journal conserve observations ; **S02-01 FAIL** ; **ML4C-A-006/A-007 OPEN** ; acceptation utilisateur ML4C **NON ACQUISE** |
+| ENV-R09 | sessions/cookies multi-lane **NOT VERIFIED** |
+| ML4D | **NON DÉMARRÉE** |
+| Gate C | **OPEN** |
+| Versioning | `0.0.0-dev` / **NO RELEASE** |
+
+**As-built technique** du candidat produit : `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md` **dans** `83fd9ece` (référence LOCAL) — **non recopié** ici.
+
+**Sources normatives importées (contenu Morris inchangé) :** [décision trajectoire ML4C/ML4D](decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) · [Gate B accepté avec réserves](decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) · [qualification sémantique Nora](decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) · [conception](../construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md) · [contrat technique](../construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md) · [contrat ML4C intégré](../construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md) · [design S02/S03](../construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md) · [cahier](../construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md) · [journal](../construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md). Les mentions historiques **NO BUILD GO / NON IMPLÉMENTÉ** dans conception/contrat technique restent le constat **à la date d'approbation** ; elles ne sont **pas** réécrites. L'avancement technique LOCAL est porté **uniquement** par le tableau ci-dessus et le commit `83fd9ece`.
+
+**Statut Git docs :** candidat local non commité / non poussé. **Statut Git produit :** `83fd9ece` local ; PR #676 OPEN sur `2416e2ee`. **Cette actualisation Roadmap est ADAPT CANDIDATE — validation Morris requise avant commit/push projet.**
+
+---
+
+> **SNAPSHOT HISTORIQUE — 12/11/2026 (contenu validé sur branche docs CP2, non baseline main)** : la [décision de principe sémantique](decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) et la [conception](../construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md) sont **VALIDATED IN CONTENT BY MORRIS** à leur date ; le [contrat technique](../construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md) est **VALIDATED IN CONTENT WITH EXECUTABILITY RESERVES**. Ces textes conservent leurs formulations d'époque (y compris NO BUILD GO) ; le suivi CURRENT ci-dessus décrit l'implémentation candidate ultérieure.
+
+> **SNAPSHOT HISTORIQUE — 11/11/2026 — Gate B + CP2** : [Gate B accepted with reserves](decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) ; [contrat ML4C intégré](../construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md) et [design vérité des effets](../construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md) validés en contenu avec réserves ; [trajectoire ML4C puis ML4D](decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). Objectif documentaire ML4B clôturé avec réserves ; **pas** d'acceptation globale ML4 ni BEHAVIOR PROVEN.
+
+---
+
 > **ÉTAT COURANT R5 — CP0 VALIDATED IN CONTENT BY MORRIS (2026-11-10 ; PUBLICATION DOCUMENTAIRE SUR BRANCHE CANDIDATE)** : [décision de trajectoire ML4B/ML4C](decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md). Baseline de cadrage `main@0182b0a7053babefe33aa4de181631b21613ac69`. Ce bloc actualise les statuts du programme sans effacer les instantanés datés ci-dessous. Aucune PR, fusion `main`, exécution Cursor, promotion, release ou adoption n'est autorisée par CP0.

 ## R5 — Réconciliation et convergence produit avant ML5 (2026-11-10, CP0)

```

---

## 14–15. Statuts historiques / CURRENT

- B2/B4 : **NO BUILD GO / NON IMPLÉMENTÉ** conservés (date d'approbation).
- Journal : **S02-01 FAIL**, **A-006/A-007 OPEN** conservés.
- Roadmap CURRENT : distingue VALIDATED SPEC / IMPLEMENTED LOCAL `83fd9ece` / CI NOT RUN / LIVE NOT RUN / USER RECETTE NOT ACCEPTED / Gate C OPEN / NO ADOPTED.
- PR #676 **ne contient pas** `83fd9ece`.

---

## 16–18. Cohérence / liens / Git

| Contrôle | Résultat |
| --- | --- |
| Allowlist only | PASS |
| Aucun staged | PASS |
| Aucune modif produit code | PASS (produit HEAD `83fd9ece` intact) |
| Méthode / migrations / SEF | non touchés PASS |
| Import exact hashes | PASS (13) |
| `git diff --check` | PASS |
| S02-01 FAIL présent journal | PASS |
| Trajectoire ML4B→ML4C→ML4D→C→ML5→R6 | PASS (Roadmap CURRENT) |
| Secrets | PASS (docs only) |

---

## 19–20. Risques / contenu normatif → Morris

**Normatif à valider avant publication :**
1. Roadmap ADAPT CURRENT (nouvelle vérité de suivi).
2. Publication future des décisions A1–A3 et contrats B* (contenu déjà validé — gate = intégration Git, pas reformulation).
3. Addenda C1–C3 (déjà sur docs source ; intégration sur main).

**Réserves conservées :** LIVE NOT RUN · S02-01 FAIL · A-006/A-007 OPEN · ENV-R09 · CI absente sur `83fd9ece` · Gate C OPEN · ML4D non démarrée · acceptation utilisateur NON ACQUISE.

**KNOWN GAP (non réécrit) :** conception/contrat disent encore NON IMPLÉMENTÉ/NO BUILD GO ; code candidat LOCAL existe — porté en CURRENT Roadmap, pas en réécriture de spec.

---

## 21. Draft PR documentaire (NON CRÉÉE)

**Titre proposé :** `docs(next): consolidate ML4C decisions and semantic convergence contracts`

**Description draft :**

```markdown
## Summary
- Import exact Morris decisions (11–12/11) and ML4C contracts/cahier/journal/CP2 sources.
- Reconcile ML4B/UX historical addenda linking Gate B and ML4C/ML4D trajectory.
- Adapt living Roadmap CURRENT for DOC GATE candidate; preserve historical snapshots.
- Does NOT include product code commit 83fd9ece (separate PR #676 path).

## Test plan
- [ ] Critical Review D2 of Roadmap CURRENT wording
- [ ] Confirm decision/contract blobs unchanged vs docs source
- [ ] Confirm S02-01 FAIL / A-006/A-007 remain in journal
- [ ] Confirm no product/code/migration/method files in diff
```

**Base :** `main` @ `6d237452…`
**Head future :** `docs/next-ml4c-documentary-gate-20261112` (aujourd'hui **locale, non poussée, non commitée**)

---

## 22–23. Conditions de publication / Gates Morris

1. Critical Review ChatGPT de ce pack.
2. Validation Morris du Roadmap ADAPT (+ feu vert intégration textes déjà validés).
3. GO commit docs local → push branche docs → ouvrir PR documentaire.
4. GO merge docs **avant ou avec** actualisation PR #676 produit (recommandation : docs d'abord).
5. Puis GO push produit `83fd9ece` sur head #676 (mandat séparé).

---

## 24. État Git final

| Worktree | HEAD | Dirty |
| --- | --- | --- |
| docs candidate | `6d237452680640324eeadbb18f4601fd7de99850` (`docs/next-ml4c-documentary-gate-20261112`) | 4 M + 10 ?? allowlist — **non commité** |
| produit | `83fd9ecef2d952c90a828d68a192e105c83be35f` | `.tmp-sfia-review/chatgpt-review.md` only |
| handoff | (updated this cycle) | — |

---

## 25. Verdict

**DOCUMENTARY GATE CANDIDATE — READY WITH RESERVES**

Réserve principale : Roadmap CURRENT = **ADAPT CANDIDATE** nécessitant validation Morris ; décisions/contrats = import exact déjà validés en contenu.

Instruction ChatGPT : relire handoff distant intégralement ; contrôler 14 fichiers, décisions inchangées, contrats fidèles, Roadmap CURRENT, historiques, cohérence `83fd9ece`, réserves LIVE/RECETTE, diffs complets, gates D2, préparation PR sans publication.
