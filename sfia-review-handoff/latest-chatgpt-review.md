# SFIA Review Pack FULL — ML3 RCT-02 documentation published + Draft PR #661
**Date / fuseau :** 2026-11-07 · Europe/Paris (UTC+1)
**Profil :** Critical · QA / consolidation preuves / publication documentaire + Draft PR
**Produit :** SFIA Studio Next (`projects/sfia-studio-next/`)
**GO Morris :** AUTORISÉ — commit/push documentaire borné (4 fichiers) + PR Draft vers `main`
**Frontières :** aucun merge · aucun redeploy RECETTE · aucun changement fonctionnel · pas de ML3 CLOSED / STABLE / ADOPTED / release

---

## 0. Verdict

`ML3 RCT-02 DOCUMENTATION PUBLISHED — DRAFT PR OPEN — CI GATE PASS`

Préparation au merge (hors décision) : **READY FOR CHATGPT REVIEW** — pas de GO merge.

---

## 1. Git Truth Check — initial / final

### Initial (avant mutation)
| Champ | Valeur |
|---|---|
| Branche | `sfia/next-ml3-rct02-live-remediation` |
| HEAD | `61fe295b6704e820694d2379e7f6ab1814143172` = remote |
| `origin/main` | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Ahead/behind | 5 / 0 · 42 fichiers |
| PR existante | aucune |
| Dirty | `M .tmp-sfia-review/chatgpt-review.md` ; `??` LIVE report |
| Handoff source | tip `24575c58…` · blob `321c8e94…` — **confirmés** |

### Final
| Champ | Valeur |
|---|---|
| HEAD / remote tip | `03b38e5df5e8229cb4d4febcfda873426223ad9a` |
| Parent | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Ahead/behind `main` | **6 / 0** |
| Push | FF `61fe295b..03b38e5d` → `origin/sfia/next-ml3-rct02-live-remediation` |
| Local = remote | oui |
| `.tmp-sfia-review` | non commitée |

---

## 2. Sources

- Handoff PR readiness Full `24575c58` / blob `321c8e94` §5.1–5.4 (réutilisé).
- SEF / ENV-01 / product-versioning / naming / roadmap (lecture).
- Workflow `.github/workflows/sfia-studio-next-ci.yml`.
- Publisher `scripts/sfia/publish-review-handoff.sh`.
- Captures PNG : **non présentes** worktree Cursor — index conservé ; T07/T08 empreinte identique signalée.

---

## 3. Allowlist — 4 fichiers exacts

1. **A** `…/recette-ml3-rct02-live-retest-61fe295b.md` (création)
2. **M** `…/delivery-history.md` (append DELIV LIVE-RETEST-61FE)
3. **M** `…/tracabilite-r2-r3-r4.md` (statut C04–C06 + table T01–T08)
4. **M** `…/recette-ml3-rct02-live-corrective-gaps.md` (note post-publication §5.4)

`git show 03b38e5d --name-status` = ces 4 chemins uniquement.

### 3.1 Document créé — contenu intégral

<details><summary>recette-ml3-rct02-live-retest-61fe295b.md</summary>

> **Consolidation documentaire (GO Morris 2026-11-07).** Rapport D0 ChatGPT consolidé pour traçabilité Git.
> Captures PNG indexées (§5) **non présentes** dans le worktree Cursor au moment de la consolidation — constats repris du rapport D0 + conversation ; **pas de lecture directe des images** par Cursor.
> Non normative. Documente le SHA **recetté** `61fe295b` (pas une nouvelle recette du commit documentaire).

# SFIA Studio Next — R5 / ML3 — RCT-02 : restitution consolidée de recette LIVE ciblée

**Date des observations :** 7 novembre 2026 (Europe/Paris)
**Nature :** D0 — restitution de tests utilisateur et revue à partir des transcriptions/captures en conversation. Non normative ; ne vaut ni adoption, ni merge, ni clôture ML3.
**Auteur de la consolidation :** ChatGPT, sur les observations fournies par Morris.
**Statut :** **TARGETED LIVE RECETTE PASSED — 8/8 scénarios observés conformes ; C04/C05/C06 corrigés sur parcours testés ; DOCUMENTATION + DRAFT PR GATE**.
**Autorité de recette :** Morris. Ce rapport prépare la traçabilité et la revue d'intégration ; il n'est pas un GO de merge.

## 1. Identité du candidat et provenance

| Objet | Valeur | Niveau de vérification |
|---|---|---|
| Dépôt | `mcleland147/sfia-workspace` | GitHub distant consulté |
| Branche candidate | `sfia/next-ml3-rct02-live-remediation` | distante = SHA ci-dessous au pré-check |
| SHA candidat **recetté** | `61fe295b6704e820694d2379e7f6ab1814143172` | GitHub distant ; arbre `web/`/`cki/` de référence LIVE |
| Base précédente RECETTE | `d646d42addb5a4c4a3cab441e9e39018d85fae70` | parent précédent du correctif |
| Écart à `main` au pré-check | 5 commits ahead, 0 behind, merge-base `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` | GitHub compare ; revalider avant PR |
| Lane | RECETTE — `http://127.0.0.1:3200` | attribution de Cursor et captures utilisateur ; accès runtime direct de ChatGPT non disponible |
| Build | `ZCkIWQ341KK1KOHTD1a5L` | handoff Cursor `2be79663` + manifest rapporté ; ChatGPT n'a pas lu directement le runtime local |
| Schéma | `007_ml3_pilotage_decisions` | handoff Cursor ; pas de preuve SQL indépendante |
| Base RECETTE | `127.0.0.1:5434/sfia_next_recette_ml3` | handoff Cursor ; ne jamais exposer secret |
| Handoff de déploiement | `sfia/review-handoff@2be796638a61073639793d8a53b068f103644584`, blob `c873eb94358394b67c5184f612d0100f41fb0258` | GitHub distant vérifié |
| Version produit | `0.0.0-dev`, `NO RELEASE`, STABLE `NOT AVAILABLE` | Git / handoff |
| CI SHA correctif | `NOT RUN` au pré-check PR readiness ; résultat CI = observation après Draft PR | Aucun PASS implicite local |

**Périmètre de preuve :** les captures montrent les projections et journaux visibles après les actions. Les réponses Nora, rapportées dans la conversation, permettent de qualifier son discours. Cette preuve utilisateur ne remplace pas une extraction PostgreSQL, des traces runtime, un test de restauration ou une CI.

## 2. Contrat de test et scoreboard

| Test | Action utilisateur / précondition | Vérification sur Pilotage et Nora | Verdict |
|---|---|---|---|
| T01 — ouverture | GO naturel pour CADRAGE avec objectif exact | `CADRAGE ACTIVE`, rev1, 1 décision `OPEN_CYCLE APPLICABLE`, aucune restriction ; Nora propose une démarche sans valider les besoins | **PASS** |
| T02 / C04 — record | Message LIVE original de priorisation exploratoire | Rev2, 2 décisions ; `RECORD_DECISION APPLICABLE`; `objectRef` sur difficultés de coordination et suivi, pas sur la réserve ; texte sans `que,` ; Nora propose une question d'enquête | **PASS** |
| T03 / C05 — revise | Message LIVE original révisant la priorité d'exploration | Rev3, 3 décisions ; ancien RECORD `REVISED`, nouveau RECORD `APPLICABLE`, OPEN fondatrice toujours applicable ; Nora confirme la nouvelle orientation | **PASS** |
| T04 — précondition | Application cockpit d'une restriction `CYCLE_MUTATION` limitée à l'instance CADRAGE | Rev4, 4 décisions ; restriction ACTIVE sur `cyc_6fc63656-0109-45df-a7e1-5aa286605cd5` | **PASS** |
| T05 / C06 — lift | Message LIVE original levant cette seule restriction, sans clore ni ouvrir | Rev5, 5 décisions ; `LIFT_RESTRICTION APPLICABLE`, aucune restriction active, historique APPLY/LIFT conservé, CADRAGE toujours actif ; Nora annonce effet APPLIED | **PASS** |
| T06 / C07 — lecture | Question de constat sans décision D6 | Nora explique état projet rev5, aucune restriction active et journal historique ; capture après réponse : rev5, 5 décisions, CADRAGE ACTIVE | **PASS** |
| T07 / C08 — close | GO explicite de clôture, sans autre ouverture | Rev6, 6 décisions ; `CLOSE_CYCLE APPLICABLE`, aucun cycle actif, aucune restriction ; Nora confirme | **PASS** |
| T08 — faux GO | Citation « Ouvre le cycle CONCEPTION_FONCTIONNELLE » explicitement non exécutoire | Nora reconnaît l'illustration sans GO ; capture après réponse : rev6, 6 décisions, aucun cycle actif, aucune restriction | **PASS** |

**Bilan vérifié sur ces huit scénarios : 8/8 PASS.** Il ne prouve pas la qualification générale ML3, l'ensemble des scénarios R5/R6, ni l'absence de tout bug linguistique hors des formulations testées.

**Distinction C01 retract vs T08 :** le **retrait explicite d'un GO** (négation du même OPEN demandé) est couvert par des **tests locaux unit/PG**, pas par T08. Le **T08 LIVE** prouve seulement qu'une **commande citée / non exécutoire** ne mute pas l'état après clôture. Ne pas fusionner ces deux preuves.

## 3. Les trois défauts initiaux et leur sortie

**C04 — décision mal identifiée** : l'ancienne RECETTE enregistrait un `objectRef` provenant de la réserve « mais ne signifie pas que le besoin utilisateur... », et un énoncé commençant par « que, ». La nouvelle capture T02 montre un objet de coordination et un énoncé propre. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**C05 — révision non appliquée** : l'ancien moteur traitait `OPEN_CYCLE` fondateur et `RECORD_DECISION` comme deux cibles concurrentes avant filtrage. T03 montre la révision persistante et la conservation de la décision fondatrice. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**C06 — levée non appliquée** : « je ne souhaite ni clôturer » était interprété comme une seconde clôture affirmative. T05 montre la levée persistante de `CYCLE_MUTATION` sur l'instance active, sans clôture ni ouverture. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**T01, T06, T07, T08** assurent des contrôles de non-régression ciblés de l'autorité, de la lecture sans mutation, de la clôture et des citations non exécutoires ; ils ne constituent pas une campagne exhaustive de sûreté D6.

## 4. Chronologie d'état observée

| Instant | Révision | Décisions visibles | Cycle actif | Restrictions actives | Événement principal |
|---|---:|---:|---|---:|---|
| T01 | 1 | 1 | CADRAGE | 0 | OPEN |
| T02 | 2 | 2 | CADRAGE | 0 | RECORD |
| T03 | 3 | 3 | CADRAGE | 0 | REVISE |
| T04 | 4 | 4 | CADRAGE | 1 | APPLY |
| T05 | 5 | 5 | CADRAGE | 0 | LIFT |
| T06 | 5 | 5 | CADRAGE | 0 | Lecture seule |
| T07 | 6 | 6 | Aucun | 0 | CLOSE |
| T08 | 6 | 6 | Aucun | 0 | Citation non exécutée |

## 5. Index des captures primaires

Les fichiers ci-dessous sont les originaux téléversés dans la conversation et vérifiés dans la session d'analyse ChatGPT. Le préfixe SHA-256 permet de confirmer qu'une copie n'a pas été substituée ; le hash complet peut être recalculé sur la copie fournie. **Ils ne sont pas automatiquement accessibles au worktree Cursor, ni publiés dans Git.**

| Test | Lien au cas | Capture source | SHA-256 (16 premiers caractères) | Ce qui est visible |
|---|---|---|---|---|
| T01 | C01/C02 | `image(20261107-021710).png` | `0880cc706e571ef3` | CADRAGE ACTIVE, révision 1, objectif, OPEN_CYCLE applicable, 1 décision, aucune restriction |
| T02 | C04 | `image(20261107-021932).png` | `9ee57b3ff2f29e50` | Révision 2, 2 décisions, RECORD_DECISION applicable, objectRef coordination, énoncé sans « que, » |
| T03 | C05 | `image(20261107-022313).png` | `b4c6cf03f4fece1e` | Révision 3, 3 décisions, ancien RECORD REVISED, nouveau RECORD APPLICABLE, OPEN_CYCLE applicable |
| T04 | Prérequis C06 | `image(20261107-022507).png` | `24b12a6d8232d82e` | Révision 4, 4 décisions, CYCLE_MUTATION active sur instance CADRAGE |
| T05 | C06 | `image(20261107-022705).png` | `235d30b625171406` | Révision 5, 5 décisions, aucune restriction active, APPLY/LIFT conservées, CADRAGE actif |
| T06 | C07 | `image(20261107-023138).png` | `0ea0d869efa490c6` | Révision 5 et 5 décisions inchangées après lecture Nora, aucune restriction active |
| T07 | C08 | `image(20261107-023259).png` | `927284256c33325d` | Révision 6, 6 décisions, CLOSE_CYCLE applicable, aucun cycle actif, aucune restriction active |
| T08 | Faux GO | `image(20261107-023513).png` | `927284256c33325d` | Révision 6 et 6 décisions inchangées après citation non exécutoire, aucun cycle actif |

**Limite T07/T08 :** les empreintes SHA-256 (16 car.) de T07 et T08 sont **identiques** (`927284256c33325d`). Ne **pas** les traiter comme deux preuves visuelles indépendantes ; la distinction T07 vs T08 s'appuie sur la chronologie conversationnelle (CLOSE puis citation) et les transcriptions Nora, pas sur deux bitstreams distincts.

Transcriptions Nora : reproduites dans la conversation utilisateur aux mêmes étapes. Les messages C04/C05/C06 de test sont exactement ceux du document candidat `construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md` (source historique des anomalies), non de nouvelles variantes.

## 6. Réserves / dettes / exits

| Réserve | Constat | Condition de sortie | Gate |
|---|---|---|---|
| **CI SHA correctif / tip PR** | Aucun run prouvé sur `61fe295b` au pré-check ; tip documentaire distinct | Exécuter la CI Next sur le head de PR et vérifier les checks applicables ; tout rebase/modification invalide le lien direct de recette sans requalification | **Draft PR / merge** ; qualifier blocage si required checks manquants |
| **C03 CKI intercycles** | Pas de test d'accompagnement intercycles à partir de cette recette | Test ciblé distinct selon contrat ; ne pas le présenter comme validé | Avant clôture ML3 selon arbitrage Morris |
| **ENV-01 Reserve A** | Cookies potentiellement partagés sur host `127.0.0.1` malgré ports différents | Isolation technique et re-recette concernée ; mitigation actuelle : profils isolés | Avant STABLE |
| **Rollback DB** | Dump conservatoire créé, restauration non testée | Vérification de restauration adaptée sur environnement non destructif | Selon exigence ENV-01/DATA-01 avant promotion |
| **LIVE/REAL couverture** | 8 scénarios spécifiques, pas E2E produit global | Qualification R6, contrôles négatifs et parcours élargis selon criticité | R6 |
| **Preuve runtime autonome** | Handoff indique SHA/build ; captures montrent état fonctionnel, pas identifiant build affiché dans les screenshots | Relecture manifeste/servi par Cursor en PR readiness | Avant merge |
| **Ancien rapport C04–C06** | En-tête historique « non publié sur Git » persiste dans le fichier désormais publié | Note post-publication additive (sans changer le diagnostic historique) | Lot documentaire présent |

Aucune de ces réserves ne transforme le verdict 8/8 en FAIL. **Elles empêchent de revendiquer CI PASS, ML3 CLOSED, STABLE, release, ADOPTED ou qualité globale R6.**

## 7. Gate d'intégration et préparation de PR

- **État :** `TARGETED LIVE RECETTE PASSED (8/8)` sur SHA recetté `61fe295b` / build `ZCkIWQ341KK1KOHTD1a5L`.
- **GO Morris documentation + Draft PR :** consolidation Git des preuves et ouverture PR Draft vers `main` pour déclencher la CI ; **pas** de merge, clôture ML3, redeploy RECETTE, release ou ADOPTED.
- **SHA documentaire :** tout commit docs produira un SHA Git distinct ; l'arbre exécutable `web/`/`cki/` doit rester **identique** à `61fe295b`.
- **Décision distincte à venir :** revue ChatGPT de la PR/CI, puis GO Morris merge séparé.

**Verdict final borné : `ML3 RCT-02 TARGETED LIVE RECETTE PASSED (8/8) — DOCUMENTATION + DRAFT PR GATE`.**


</details>

### 3.2 Diffs des trois documents modifiés (+ création)

```
commit 03b38e5df5e8229cb4d4febcfda873426223ad9a
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sat Nov 7 04:02:51 2026 +0100

    docs(next): consolidate ML3 RCT-02 targeted LIVE acceptance

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index c2efa92f..05e035e0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -687,3 +687,22 @@ Append-only logical journal of Cursor product deliveries.
 | Preuves | unit 3 formulations ; PG zéro mutation négatifs + positif C01 ; non-régression LIVE C04/C05/C06 |
 | Push projet / PR / merge / deploy RECETTE | **NON** |
 | Verdict candidat | `READY FOR CHATGPT FINAL REVIEW — LOCAL LIVE REMEDIATION` |
+
+## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-RETEST-61FE
+
+| Champ | Valeur |
+|---|---|
+| Date UTC | 2026-11-07 |
+| Macro-lot | R5 / ML3 — consolidation LIVE retest 8/8 + publication documentaire + Draft PR |
+| Type | QA / capitalisation preuve (Critical) |
+| SHA recetté (LIVE) | `61fe295b6704e820694d2379e7f6ab1814143172` |
+| Parent correctif | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
+| Branche | `sfia/next-ml3-rct02-live-remediation` |
+| Preuve LIVE | T01–T08 PASS ; rapport `construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md` |
+| Build RECETTE | `ZCkIWQ341KK1KOHTD1a5L` ; lane `:3200` ; schema `007_ml3_pilotage_decisions` ; DB `5434/sfia_next_recette_ml3` |
+| Product version | `NO RELEASE` / package `0.0.0-dev` |
+| Push documentaire / Draft PR | **OUI** (GO Morris borné) — merge / STABLE / ADOPTED / redeploy RECETTE : **NON** |
+| CI | à observer sur la Draft PR (≠ PASS local) |
+| Verdict candidat | `ML3 RCT-02 DOCUMENTATION PUBLISHED — DRAFT PR OPEN — CI GATE [à relever]` |
+
+> Le SHA Git du commit documentaire ≠ SHA recetté `61fe295b`. L'arbre fonctionnel `web/`/`cki/` doit rester identique au candidat LIVE.
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md
index 842ebdb5..d5876656 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md
@@ -17,6 +17,9 @@
 | Décideur | Morris ; ChatGPT prépare/revoit ; Cursor réalise D3 |
 | Statut | **RCT-02 TARGETED LIVE TEST COMPLETED — CORRECTIVE GAPS OPEN** ; pas de ML3 CLOSED/RECETTE ACCEPTED/ADOPTED |

+
+> **Note post-publication (PR readiness 2026-11-07).** Ce rapport gaps a depuis été intégré dans Git sur la branche candidate (`61fe295b` et parents). La mention « non publiée sur Git » ci-dessus reste une qualification **historique** du D0 au moment de la rédaction sur `d646d42a`. Ne pas l’interpréter comme l’état Git courant.
+
 > **Règle de lecture.** Les écrans montrent des effets réellement visibles en RECETTE. Les causes indiquées comme « reproduites statiquement » correspondent à la logique du code Git inspecté ou à sa simulation sur les phrases fournies. Seules les traces de l'application, les tests d'intégration et les effets DB peuvent confirmer la chaîne d'exécution exacte. Ne pas transformer une hypothèse en preuve.

 ## 1. Résumé de la micro-recette
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md
new file mode 100644
index 00000000..f2943b22
--- /dev/null
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md
@@ -0,0 +1,112 @@
+> **Consolidation documentaire (GO Morris 2026-11-07).** Rapport D0 ChatGPT consolidé pour traçabilité Git.
+> Captures PNG indexées (§5) **non présentes** dans le worktree Cursor au moment de la consolidation — constats repris du rapport D0 + conversation ; **pas de lecture directe des images** par Cursor.
+> Non normative. Documente le SHA **recetté** `61fe295b` (pas une nouvelle recette du commit documentaire).
+
+# SFIA Studio Next — R5 / ML3 — RCT-02 : restitution consolidée de recette LIVE ciblée
+
+**Date des observations :** 7 novembre 2026 (Europe/Paris)
+**Nature :** D0 — restitution de tests utilisateur et revue à partir des transcriptions/captures en conversation. Non normative ; ne vaut ni adoption, ni merge, ni clôture ML3.
+**Auteur de la consolidation :** ChatGPT, sur les observations fournies par Morris.
+**Statut :** **TARGETED LIVE RECETTE PASSED — 8/8 scénarios observés conformes ; C04/C05/C06 corrigés sur parcours testés ; DOCUMENTATION + DRAFT PR GATE**.
+**Autorité de recette :** Morris. Ce rapport prépare la traçabilité et la revue d'intégration ; il n'est pas un GO de merge.
+
+## 1. Identité du candidat et provenance
+
+| Objet | Valeur | Niveau de vérification |
+|---|---|---|
+| Dépôt | `mcleland147/sfia-workspace` | GitHub distant consulté |
+| Branche candidate | `sfia/next-ml3-rct02-live-remediation` | distante = SHA ci-dessous au pré-check |
+| SHA candidat **recetté** | `61fe295b6704e820694d2379e7f6ab1814143172` | GitHub distant ; arbre `web/`/`cki/` de référence LIVE |
+| Base précédente RECETTE | `d646d42addb5a4c4a3cab441e9e39018d85fae70` | parent précédent du correctif |
+| Écart à `main` au pré-check | 5 commits ahead, 0 behind, merge-base `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` | GitHub compare ; revalider avant PR |
+| Lane | RECETTE — `http://127.0.0.1:3200` | attribution de Cursor et captures utilisateur ; accès runtime direct de ChatGPT non disponible |
+| Build | `ZCkIWQ341KK1KOHTD1a5L` | handoff Cursor `2be79663` + manifest rapporté ; ChatGPT n'a pas lu directement le runtime local |
+| Schéma | `007_ml3_pilotage_decisions` | handoff Cursor ; pas de preuve SQL indépendante |
+| Base RECETTE | `127.0.0.1:5434/sfia_next_recette_ml3` | handoff Cursor ; ne jamais exposer secret |
+| Handoff de déploiement | `sfia/review-handoff@2be796638a61073639793d8a53b068f103644584`, blob `c873eb94358394b67c5184f612d0100f41fb0258` | GitHub distant vérifié |
+| Version produit | `0.0.0-dev`, `NO RELEASE`, STABLE `NOT AVAILABLE` | Git / handoff |
+| CI SHA correctif | `NOT RUN` au pré-check PR readiness ; résultat CI = observation après Draft PR | Aucun PASS implicite local |
+
+**Périmètre de preuve :** les captures montrent les projections et journaux visibles après les actions. Les réponses Nora, rapportées dans la conversation, permettent de qualifier son discours. Cette preuve utilisateur ne remplace pas une extraction PostgreSQL, des traces runtime, un test de restauration ou une CI.
+
+## 2. Contrat de test et scoreboard
+
+| Test | Action utilisateur / précondition | Vérification sur Pilotage et Nora | Verdict |
+|---|---|---|---|
+| T01 — ouverture | GO naturel pour CADRAGE avec objectif exact | `CADRAGE ACTIVE`, rev1, 1 décision `OPEN_CYCLE APPLICABLE`, aucune restriction ; Nora propose une démarche sans valider les besoins | **PASS** |
+| T02 / C04 — record | Message LIVE original de priorisation exploratoire | Rev2, 2 décisions ; `RECORD_DECISION APPLICABLE`; `objectRef` sur difficultés de coordination et suivi, pas sur la réserve ; texte sans `que,` ; Nora propose une question d'enquête | **PASS** |
+| T03 / C05 — revise | Message LIVE original révisant la priorité d'exploration | Rev3, 3 décisions ; ancien RECORD `REVISED`, nouveau RECORD `APPLICABLE`, OPEN fondatrice toujours applicable ; Nora confirme la nouvelle orientation | **PASS** |
+| T04 — précondition | Application cockpit d'une restriction `CYCLE_MUTATION` limitée à l'instance CADRAGE | Rev4, 4 décisions ; restriction ACTIVE sur `cyc_6fc63656-0109-45df-a7e1-5aa286605cd5` | **PASS** |
+| T05 / C06 — lift | Message LIVE original levant cette seule restriction, sans clore ni ouvrir | Rev5, 5 décisions ; `LIFT_RESTRICTION APPLICABLE`, aucune restriction active, historique APPLY/LIFT conservé, CADRAGE toujours actif ; Nora annonce effet APPLIED | **PASS** |
+| T06 / C07 — lecture | Question de constat sans décision D6 | Nora explique état projet rev5, aucune restriction active et journal historique ; capture après réponse : rev5, 5 décisions, CADRAGE ACTIVE | **PASS** |
+| T07 / C08 — close | GO explicite de clôture, sans autre ouverture | Rev6, 6 décisions ; `CLOSE_CYCLE APPLICABLE`, aucun cycle actif, aucune restriction ; Nora confirme | **PASS** |
+| T08 — faux GO | Citation « Ouvre le cycle CONCEPTION_FONCTIONNELLE » explicitement non exécutoire | Nora reconnaît l'illustration sans GO ; capture après réponse : rev6, 6 décisions, aucun cycle actif, aucune restriction | **PASS** |
+
+**Bilan vérifié sur ces huit scénarios : 8/8 PASS.** Il ne prouve pas la qualification générale ML3, l'ensemble des scénarios R5/R6, ni l'absence de tout bug linguistique hors des formulations testées.
+
+**Distinction C01 retract vs T08 :** le **retrait explicite d'un GO** (négation du même OPEN demandé) est couvert par des **tests locaux unit/PG**, pas par T08. Le **T08 LIVE** prouve seulement qu'une **commande citée / non exécutoire** ne mute pas l'état après clôture. Ne pas fusionner ces deux preuves.
+
+## 3. Les trois défauts initiaux et leur sortie
+
+**C04 — décision mal identifiée** : l'ancienne RECETTE enregistrait un `objectRef` provenant de la réserve « mais ne signifie pas que le besoin utilisateur... », et un énoncé commençant par « que, ». La nouvelle capture T02 montre un objet de coordination et un énoncé propre. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**
+
+**C05 — révision non appliquée** : l'ancien moteur traitait `OPEN_CYCLE` fondateur et `RECORD_DECISION` comme deux cibles concurrentes avant filtrage. T03 montre la révision persistante et la conservation de la décision fondatrice. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**
+
+**C06 — levée non appliquée** : « je ne souhaite ni clôturer » était interprété comme une seconde clôture affirmative. T05 montre la levée persistante de `CYCLE_MUTATION` sur l'instance active, sans clôture ni ouverture. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**
+
+**T01, T06, T07, T08** assurent des contrôles de non-régression ciblés de l'autorité, de la lecture sans mutation, de la clôture et des citations non exécutoires ; ils ne constituent pas une campagne exhaustive de sûreté D6.
+
+## 4. Chronologie d'état observée
+
+| Instant | Révision | Décisions visibles | Cycle actif | Restrictions actives | Événement principal |
+|---|---:|---:|---|---:|---|
+| T01 | 1 | 1 | CADRAGE | 0 | OPEN |
+| T02 | 2 | 2 | CADRAGE | 0 | RECORD |
+| T03 | 3 | 3 | CADRAGE | 0 | REVISE |
+| T04 | 4 | 4 | CADRAGE | 1 | APPLY |
+| T05 | 5 | 5 | CADRAGE | 0 | LIFT |
+| T06 | 5 | 5 | CADRAGE | 0 | Lecture seule |
+| T07 | 6 | 6 | Aucun | 0 | CLOSE |
+| T08 | 6 | 6 | Aucun | 0 | Citation non exécutée |
+
+## 5. Index des captures primaires
+
+Les fichiers ci-dessous sont les originaux téléversés dans la conversation et vérifiés dans la session d'analyse ChatGPT. Le préfixe SHA-256 permet de confirmer qu'une copie n'a pas été substituée ; le hash complet peut être recalculé sur la copie fournie. **Ils ne sont pas automatiquement accessibles au worktree Cursor, ni publiés dans Git.**
+
+| Test | Lien au cas | Capture source | SHA-256 (16 premiers caractères) | Ce qui est visible |
+|---|---|---|---|---|
+| T01 | C01/C02 | `image(20261107-021710).png` | `0880cc706e571ef3` | CADRAGE ACTIVE, révision 1, objectif, OPEN_CYCLE applicable, 1 décision, aucune restriction |
+| T02 | C04 | `image(20261107-021932).png` | `9ee57b3ff2f29e50` | Révision 2, 2 décisions, RECORD_DECISION applicable, objectRef coordination, énoncé sans « que, » |
+| T03 | C05 | `image(20261107-022313).png` | `b4c6cf03f4fece1e` | Révision 3, 3 décisions, ancien RECORD REVISED, nouveau RECORD APPLICABLE, OPEN_CYCLE applicable |
+| T04 | Prérequis C06 | `image(20261107-022507).png` | `24b12a6d8232d82e` | Révision 4, 4 décisions, CYCLE_MUTATION active sur instance CADRAGE |
+| T05 | C06 | `image(20261107-022705).png` | `235d30b625171406` | Révision 5, 5 décisions, aucune restriction active, APPLY/LIFT conservées, CADRAGE actif |
+| T06 | C07 | `image(20261107-023138).png` | `0ea0d869efa490c6` | Révision 5 et 5 décisions inchangées après lecture Nora, aucune restriction active |
+| T07 | C08 | `image(20261107-023259).png` | `927284256c33325d` | Révision 6, 6 décisions, CLOSE_CYCLE applicable, aucun cycle actif, aucune restriction active |
+| T08 | Faux GO | `image(20261107-023513).png` | `927284256c33325d` | Révision 6 et 6 décisions inchangées après citation non exécutoire, aucun cycle actif |
+
+**Limite T07/T08 :** les empreintes SHA-256 (16 car.) de T07 et T08 sont **identiques** (`927284256c33325d`). Ne **pas** les traiter comme deux preuves visuelles indépendantes ; la distinction T07 vs T08 s'appuie sur la chronologie conversationnelle (CLOSE puis citation) et les transcriptions Nora, pas sur deux bitstreams distincts.
+
+Transcriptions Nora : reproduites dans la conversation utilisateur aux mêmes étapes. Les messages C04/C05/C06 de test sont exactement ceux du document candidat `construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md` (source historique des anomalies), non de nouvelles variantes.
+
+## 6. Réserves / dettes / exits
+
+| Réserve | Constat | Condition de sortie | Gate |
+|---|---|---|---|
+| **CI SHA correctif / tip PR** | Aucun run prouvé sur `61fe295b` au pré-check ; tip documentaire distinct | Exécuter la CI Next sur le head de PR et vérifier les checks applicables ; tout rebase/modification invalide le lien direct de recette sans requalification | **Draft PR / merge** ; qualifier blocage si required checks manquants |
+| **C03 CKI intercycles** | Pas de test d'accompagnement intercycles à partir de cette recette | Test ciblé distinct selon contrat ; ne pas le présenter comme validé | Avant clôture ML3 selon arbitrage Morris |
+| **ENV-01 Reserve A** | Cookies potentiellement partagés sur host `127.0.0.1` malgré ports différents | Isolation technique et re-recette concernée ; mitigation actuelle : profils isolés | Avant STABLE |
+| **Rollback DB** | Dump conservatoire créé, restauration non testée | Vérification de restauration adaptée sur environnement non destructif | Selon exigence ENV-01/DATA-01 avant promotion |
+| **LIVE/REAL couverture** | 8 scénarios spécifiques, pas E2E produit global | Qualification R6, contrôles négatifs et parcours élargis selon criticité | R6 |
+| **Preuve runtime autonome** | Handoff indique SHA/build ; captures montrent état fonctionnel, pas identifiant build affiché dans les screenshots | Relecture manifeste/servi par Cursor en PR readiness | Avant merge |
+| **Ancien rapport C04–C06** | En-tête historique « non publié sur Git » persiste dans le fichier désormais publié | Note post-publication additive (sans changer le diagnostic historique) | Lot documentaire présent |
+
+Aucune de ces réserves ne transforme le verdict 8/8 en FAIL. **Elles empêchent de revendiquer CI PASS, ML3 CLOSED, STABLE, release, ADOPTED ou qualité globale R6.**
+
+## 7. Gate d'intégration et préparation de PR
+
+- **État :** `TARGETED LIVE RECETTE PASSED (8/8)` sur SHA recetté `61fe295b` / build `ZCkIWQ341KK1KOHTD1a5L`.
+- **GO Morris documentation + Draft PR :** consolidation Git des preuves et ouverture PR Draft vers `main` pour déclencher la CI ; **pas** de merge, clôture ML3, redeploy RECETTE, release ou ADOPTED.
+- **SHA documentaire :** tout commit docs produira un SHA Git distinct ; l'arbre exécutable `web/`/`cki/` doit rester **identique** à `61fe295b`.
+- **Décision distincte à venir :** revue ChatGPT de la PR/CI, puis GO Morris merge séparé.
+
+**Verdict final borné : `ML3 RCT-02 TARGETED LIVE RECETTE PASSED (8/8) — DOCUMENTATION + DRAFT PR GATE`.**
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
index 6bf96601..16d1043d 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
@@ -311,10 +311,25 @@ Statut : **IMPLEMENTED — LOCAL CORRECTIVE (Critical Re-Review faux GO)** sur `
 | C05 | LIVE FAIL : 0 REVISE (OPEN+RECORD lexical) | éligibilité RECORD avant unicité | unit C05 LIVE lexical ; PG REVISE + `supersedesDecisionId` | 2 RECORD distincts → clarification |
 | C06 | LIVE FAIL : AMBIGUOUS « Levée et clôture » | `assertsAffirmativeCloseAct` | unit C06 LIVE + LIFT+CLOSE affirmatif AMBIGUOUS ; PG LIFT, cycle ACTIVE | — |

-Statut : **IMPLEMENTED — LOCAL LIVE REMEDIATION** sur branche locale `sfia/next-ml3-rct02-live-remediation` depuis `d646d42a` — **NOT PUSHED** — **NOT RECETTE redeploy** — **NOT MERGED** — **NOT ADOPTED**. LIVE Nora retest : **REQUIRES GO** sur nouveau candidat.
+Statut historique (au lot correctif local) : **IMPLEMENTED — LOCAL LIVE REMEDIATION** depuis `d646d42a` — puis **poussé @ `61fe295b`** ; **RECETTE redeployée** (build `ZCkIWQ341KK1KOHTD1a5L`) ; **LIVE 8/8 observé** — **NOT MERGED** — **NOT ADOPTED**. Les constats d'échec/partial sur `d646d42a` (C04 PARTIAL, C05/C06 FAIL) restent la vérité historique avant correctif.

 | ID | Rework ChatGPT | Preuve |
 | --- | --- | --- |
 | C01 | OPEN + « ni clôturer / ni en ouvrir » | unit + PG : 1 OPEN CADRAGE, objectif conservé, 0 CLOSE |
 | C01 | retrait / contradiction du même OPEN | unit + PG : AMBIGUOUS, 0 cycle, 0 HumanDecision |
 | C05 | désignation fondatrice OPEN ≠ REVISE RECORD | PG zéro mutation + `objectRef` historique pollué toujours révisable via C05 LIVE |
+
+### LIVE retest 61fe295b — 8/8 (2026-11-07)
+
+| ID | Oracle LIVE | Preuve | Limite |
+| --- | --- | --- | --- |
+| T01 | OPEN_CYCLE CADRAGE ACTIVE ; rév.1 ; journal 1 | D0 consolidé + index capture T01 | PNG non lus par Cursor |
+| T02/C04 | RECORD ; objectRef coordination/suivi ; sans `que,` | D0 + index capture T02 | historiques d646 non migrés |
+| T03/C05 | REVISE RECORD ; OPEN fondateur préservé | D0 + index capture T03 | — |
+| T04 | Restriction cockpit instance ; rév.4 | D0 + index capture T04 | précondition manuelle |
+| T05/C06 | LIFT ; cycle ACTIVE ; pas CLOSE | D0 + index capture T05 | — |
+| T06/C07 | Lecture projection ; zéro mutation | D0 + index capture T06 | — |
+| T07/C08 | CLOSE ; aucun cycle actif | D0 + index capture T07 | empreinte T07/T08 identique — pas 2 preuves visuelles indépendantes |
+| T08 | Citation faux GO ; zéro mutation | D0 + index capture T08 | ≠ retrait explicite GO (couvert unit/PG C01) |
+
+Statut : **LIVE TARGETED RECETTE 8/8 OBSERVED** sur SHA recetté `61fe295b` / build `ZCkIWQ341KK1KOHTD1a5L` — documentation publiée sous GO Morris — Draft PR pour CI — **NOT MERGED** — **NOT ADOPTED**. C03 intercycle **NOT PROVEN**.

```

---

## 4. Identité arbre fonctionnel vs SHA recetté

| Contrôle | Résultat |
|---|---|
| Diff `61fe295b…03b38e5d` hors allowlist | **vide** (4 docs seulement) |
| `web/` tree | `d6130f6a…` = identique |
| `cki/` tree | `fd32000d…` = identique |
| Migrations / fixtures / workflows / `.env` | **inchangés** |
| Secrets dans le commit | aucun |

Le SHA documentaire ≠ SHA recetté ; le rapport documente explicitement `61fe295b` comme candidat LIVE.

---

## 5. Commit / push documentaire

| Objet | Valeur |
|---|---|
| Message | `docs(next): consolidate ML3 RCT-02 targeted LIVE acceptance` |
| SHA | `03b38e5df5e8229cb4d4febcfda873426223ad9a` |
| Parent | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Push | fast-forward only · **pas** de force |
| Relecture distante | 4 fichiers OK · tip égal |

---

## 6. Draft PR

| Champ | Valeur |
|---|---|
| Numéro | **#661** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/661 |
| Statut | **OPEN · DRAFT** |
| Base | `main` @ `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Head | `sfia/next-ml3-rct02-live-remediation` @ `03b38e5d…` |
| Titre | `feat(next): ML3 — Pilotage et décisions D5/D6 — RCT-02 LIVE 8/8` |
| Merge / auto-delete | **non** |

---

## 7. CI observée — PASS (validate exécuté)

| Objet | Valeur |
|---|---|
| Workflow | SFIA Studio Next CI |
| Run ID | **42332186084** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/42332186084 |
| Head SHA | `03b38e5df5e8229cb4d4febcfda873426223ad9a` |
| Detect Next | **success** (Next in scope) |
| Build and validate SFIA Studio Next | **success** (~5m6s) — **non skippé** |
| SFIA Studio Next Required Gate | **success** |
| Conclusion run | **success** |

Étapes validate notables : TypeScript · ESLint · Build · Vitest unit · `npm run db:migrate` · Vitest PG · Playwright FAKE · secret scan · whitespace — toutes **success**.

**Migration 007 :** le libellé du step CI reste « Apply migrations 001→006 » (stale naming), mais le log montre :
`Applying 007_ml3_pilotage_decisions.sql` puis `db:migrate OK (001→007)`.
Réserve cosmétique de naming workflow — **pas** un skip de 007.

Workflow legacy SFIA Studio : detect pass · validate skipping · Required Gate pass (hors Next).

---

## 8. Tests locaux

Non réexécutés ce cycle (impact documentaire only ; résultats antérieurs unit 112 / PG 142 / e2e 7 / lint/tsc/build PASS restent **≠ CI**). CI ci-dessus est la preuve gate.

---

## 9. ENV-01 / versioning / réserves reportées

- DEV inchangée ; RECETTE `:3200` / `61fe295b` / `ZCkIWQ341KK1KOHTD1a5L` / `007` **intouchable**.
- STABLE NOT AVAILABLE · package `0.0.0-dev` · NO RELEASE · pas de tag.
- C03 intercycles NOT PROVEN.
- ENV-01 Reserve A cookies.
- Dump restore non prouvée.
- R6 non acquise.
- LIVE bornée 8 scénarios.
- T07/T08 empreinte visuelle non indépendante.
- C01 retract = unit/PG ≠ T08 citation LIVE.

---

## 10. Décisions restantes (Morris)

1. Revue ChatGPT PR #661 + CI run 42332186084.
2. GO merge distinct (si acceptation réserves).
3. Optionnel ultérieur : renommer step CI « 001→007 » (hors ce GO).
4. Pas de STABLE / ADOPTED / clôture ML3 depuis cette PR seule.

---

## 11. Non-revendications

Pas de merge · ML3 CLOSED · STABLE · release · R6 · ADOPTED. CI PASS ≠ merge autorisé.

---

## 12. Couverture pack

Git Truth · sources · docs intégraux/diffs · arbre `web/`/`cki/` · commit/push · PR Draft · CI run+jobs · ENV/réserves · verdict — **oui**.
