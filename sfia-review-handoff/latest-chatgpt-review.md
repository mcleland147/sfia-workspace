# SFIA Review Pack — Cycle 13 PR readiness — Capitalisation SFIA Studio P0

- **Date / heure :** 2026-07-19 12:15:17 CEST (UTC+0200)
- **Cycle :** 13 — PR readiness (contexte : capitalisation post-Delivery P0)
- **Profil :** Standard
- **Typologie :** DOC / CAPA légère
- **Repository :** `/Users/morris/Projects/sfia-workspace`
- **Décision Morris consommée :** GO créer branche `capitalization/sfia-studio-p0-status-sync` ; committer ; pousser ; ouvrir PR vers `main`
- **Merge :** **non exécuté** (attendu)

## Verdict

**CAPITALIZATION PR OPEN — READY FOR MORRIS MERGE DECISION**

Gate Morris restante : **GO merge** de la PR de capitalisation uniquement.  
Cadrage POC orchestration **bloqué** jusqu’à intégration + post-merge de cette PR.

---

## 1. État Git initial

| Champ | Valeur |
|-------|--------|
| Branche | `main` |
| HEAD / origin/main | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Staged | aucun |
| Modifiés | exactement 2 fichiers Studio |
| Untracked | `.tmp-sfia-review/**` |
| Branche cible locale/distante | **absente** |

```
 M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
# 2 files changed, 244 insertions(+), 224 deletions(-)
git diff --check  # OK (vide)
```

## 2. Handoff capitalisation consulté

Branche `sfia/review-handoff` @ `6cb7ff0…` :

- Verdict : **CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY**
- 2 fichiers uniquement ; statut `p0-delivery-integrated-next-poc-orchestration-framing`
- Option B = cadrage futur ; POC non lancé ; aucun code ; aucun commit/push/PR projet déjà exécuté

## 3. Cohérence textuelle (grep)

Occurrences restantes qualifiées :

| Fichier:ligne | Qualification |
|---------------|---------------|
| README.md:284 — D-VAL-11 « prochain cycle non sélectionné » | **Historique exact** (contenu de la décision D-VAL-11) |
| 07:41 — citation « Delivery autorisé — non exécuté » | **Historique explicite** — phrase d’obsolescence |
| 07:83 — D-VAL-11 « prochain cycle non sélectionné » | **Historique exact** |

Aucune formulation **actuelle** incohérente (« Delivery non exécuté » comme état courant).

## 4. Branche / commit / push

```
git switch -c capitalization/sfia-studio-p0-status-sync
git add projects/sfia-studio/README.md \
        projects/sfia-studio/07-product-trajectory-and-decision-pack.md
git commit -m "docs(sfia-studio): synchronize P0 status and POC trajectory"
# e97e083a749d88b8556ffd81edc0160a432df137
git push -u origin capitalization/sfia-studio-p0-status-sync
# LOCAL = REMOTE = e97e083a749d88b8556ffd81edc0160a432df137
# left-right remote...HEAD = 0 0
```

### Commit

| Champ | Valeur |
|-------|--------|
| SHA | `e97e083a749d88b8556ffd81edc0160a432df137` |
| Message | `docs(sfia-studio): synchronize P0 status and POC trajectory` |
| Fichiers | 2 — README.md ; 07-product-trajectory-and-decision-pack.md |
| Stat | +244 / −224 |
| Au-dessus de main | 1 commit (`0	1`) |

```
commit e97e083a749d88b8556ffd81edc0160a432df137
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sun Jul 19 12:14:47 2026 +0200

    docs(sfia-studio): synchronize P0 status and POC trajectory

M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/README.md
```

## 5. Pull Request #218

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/218 |
| Titre | `docs: synchronize SFIA Studio P0 status and POC trajectory` |
| État | **OPEN** |
| Draft | **false** |
| Base | `main` |
| Head | `capitalization/sfia-studio-p0-status-sync` |
| Commits | **1** |
| Fichiers | **2** |
| Additions / deletions | +244 / −224 |
| Mergeable | **MERGEABLE** |
| Checks | aucun check configuré (`statusCheckRollup: []`) — pas de check rouge |
| Merge | **non exécuté** |

### Corps PR (publié)

## Objet

Synchronise la documentation SFIA Studio après l’intégration et la clôture du Delivery P0.

## Changements

- met à jour le statut réel de SFIA Studio ;
- trace l’intégration de la PR #217 ;
- clôture les formulations pré-Delivery devenues obsolètes ;
- met à jour la trajectoire produit ;
- trace la décision Morris :
  Option B — cadrage POC orchestration comme prochaine étape ;
- maintient explicitement le POC, le MVP et l’industrialisation non lancés.

## État P0 tracé

- PR #217 mergée ;
- merge squash `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` ;
- 77 fichiers intégrés ;
- Delivery P0 validé visuellement ;
- post-merge conforme ;
- cleanup Delivery terminé ;
- aucune gate Morris restante sur le Delivery P0.

## Fichiers

- `projects/sfia-studio/README.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

## Hors périmètre

- code applicatif ;
- méthode SFIA ;
- architecture Runtime ;
- implémentation du POC ;
- API, schéma JSON ou backlog POC ;
- Figma ;
- Campus360.

## Validation

- [x] deux fichiers uniquement
- [x] `git diff --check`
- [x] aucun code modifié
- [x] aucune baseline méthode modifiée
- [x] Option B tracée comme cadrage futur
- [x] POC orchestration non lancé

## Gouvernance

- Git reste la source de vérité ;
- Morris décide ;
- cette PR ne lance pas le POC ;
- merge soumis à un GO Morris séparé.

## 6. Contenu documentaire (rappel)

- Statut : `p0-delivery-integrated-next-poc-orchestration-framing`
- Delivery P0 **CLÔTURÉ** (PR #217)
- Option B = **cadrage** POC orchestration — **non lancé**
- MVP / industrialisation / Runtime réel **ouverts**
- Aucune baseline méthode modifiée
- Aucun code `app/**`

## 7. Diff complet `origin/main...HEAD`

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 0dde30e..08babef 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,67 +4,52 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
-| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
+| **Cycle** | 15 — Capitalisation / REX (post-Delivery P0) ; historique cadrage / conception conservé |
+| **Profil** | Capitalization — Standard |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `ux-ui-closed-implementation-reference` ; architecture `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` ; cycle 2 **clôturé** ; UX/UI **clôturé** |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; **AF-CAND-11B VALIDÉE** (UX/UI clôturé) ; Option B UX **VALIDÉE** ; acceptation #211 **VALIDÉE** |
+| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle intégrée (clôture formelle **ouverte**) |
+| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND / AF-CAND / TA-DEC historiques inchangés ; **Option B — POC orchestration** = prochaine orientation Morris (**cadrage**, non lancé) |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` — cadrage + conception + architecture + sync + finalisation + trace **intégrés** ; sync UX locale worktree |
+| **Source de vérité** | Git `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` — cadrage → Delivery P0 intégrés |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`). Acceptation/régularisation #211 **VALIDÉE** (Morris — 2026-07-18). Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Delivery P0 **CLÔTURÉ** (PR #217). Prochaine orientation : **cadrage POC orchestration** (Option B) — **non démarré**. Clôture formelle architecture fonctionnelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
-## 0. État post-merge
+## 0. État produit (capitalisation post-Delivery P0)
 
 | Élément | Valeur |
 |---------|--------|
-| PR #207 | **MERGED** |
-| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
-| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
-| Intégration | Techniquement vérifiée ; **reconnue** (D-VAL-11) |
-| D-VAL-10 | Historique — **n’autorisait pas** le merge |
-| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Cadrage documentaire | **Clôturé** (inchangé) |
-| Branche projet historique | Conservée ; intégrée à `main` ; suppression = décision distincte |
-| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` via PR #209 |
-| FD-CAND-01…08 | **VALIDÉES** — Morris — 2026-07-18 |
-| Intégration Git conception | **Réalisée** — PR #209 / merge `fdade59…` / commit `99eaeaa…` |
-| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 |
-| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 ; sans réécriture rétroactive du GO draft |
-| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
-| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
-| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **VALIDÉE** — UX/UI **clôturé** |
-| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
-| Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
-| Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
-| Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
-| Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` |
-| Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
-| Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Cycle UX/UI | **CLÔTURÉ** — Option B ; Figma `lrjA1WEyRpL05vKR8k29LO` ; docs `14`–`16` |
-| Prochain cycle | **Delivery** autorisé — **non exécuté** ; tech/POC/MVP **non lancés** |
-| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
-
-> Merges #207 / #209/#210 : historiques. Merge #211 (`84e4863…`) : architecture **intégrée** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). Merge #212 (`cb870544…`) : sync **intégrée**. Merge #213 (`19302836…`) : finalisation documentaire **intégrée** — ne prononce ni clôture formelle, ni AF-CAND-11B, ni suppression de branches.
-
-### Trace factuelle — cycle 2 (conception fonctionnelle)
+| Cadrage documentaire | **Clôturé** (D-VAL-11) |
+| Conception fonctionnelle | **VALIDÉE** / **CLÔTURÉE** / **INTÉGRÉE** (PR #209) |
+| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle **NON PRONONCÉE** |
+| UX/UI P0 | **CLÔTURÉ** — Option B ; Figma ; docs `14`–`16` |
+| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** (`18`/`19`) |
+| Delivery P0 | **CLÔTURÉ** — implémenté, validé visuellement, mergé, post-mergé, cleanup |
+| PR #217 | **MERGED** — `feat: implement SFIA Studio P0 governed workspace` |
+| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
+| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
+| Périmètre | 77 fichiers ; +12830 / −0 ; 4 routes P0 |
+| Squash | Commit de branche non ancêtre de `main` ; trees app **identiques** |
+| Branche Delivery | **Supprimée** (local + remote) |
+| Gate Morris Delivery P0 | **Aucune restante** |
+| App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
+| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non démarrée** |
+| Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
+| Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
+
+> Les lignes « Delivery autorisé — non exécuté » des versions antérieures de ce document étaient **exactes à leur date**. Elles sont **obsolètes** après PR #217 et remplacées ici par l’état factuel ci-dessus.
+
+### Trace factuelle — Delivery P0 (historique compact)
 
 | Champ | Valeur |
 |-------|--------|
-| Sélection / lancement | **2026-07-18** — décision Morris |
-| Production et revue | Documents `08`–`10` |
-| **Validation Morris** | **2026-07-18** — conception **VALIDÉE** |
-| FD-CAND-01…08 | **VALIDÉES** |
-| Profil | Critical |
-| Statut conception | `functional-design-validated` puis **intégrée** |
-| Intégration Git | **Réalisée** — PR #209 MERGED ; `99eaeaa…` → `fdade59…` |
-| Clôture cycle 2 | **Oui** — technique et documentaire (acceptation Morris post-merge) |
-| Exclu / réserve | Architecture non validée ; UX visuelle non lancée ; stack non décidée ; POC non lancé ; MVP non défini |
-| D-VAL-1…11 | **Inchangées** — **aucune D-VAL-12** |
-| Branches | `functional-design` et `pre-framing` **conservées** |
+| Autorisation initiale (TA-DEC-18) | Delivery P0 autorisé (historique `19`) |
+| Exécution | Implémentation + polish + validation visuelle Morris |
+| Intégration | PR #217 squash-mergée sur `main` |
+| Post-merge | Validations reproductibles vertes |
+| Cleanup | Branche Delivery locale + distante supprimées |
+| Exclu / réserve | Responsive ; a11y complète ; CI ; fix postcss ; Runtime/Git/Cursor réels ; MVP |
 
 ---
 
@@ -119,47 +104,57 @@ G7 **≠** autorisation rétroactive de merge.
 ## 3. Trajectoire produit (état factuel)
 
 ```text
-Pré-cadrage                         ← terminé historiquement
-  → cadrage détaillé                ← VALIDÉ (D-VAL-9 / DF-G1)
-  → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
-  → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
-  → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
-  → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (`5f1eb908…`) — clôture formelle **ouverte**
-  → UX/UI                           ← **SÉLECTIONNÉ → EXÉCUTÉ → CLÔTURÉ** (AF-CAND-11B ; Option B)
-  → synchronisation documentaire    ← **locale** (worktree)
-  → delivery / implémentation       ← **autorisé** — **non exécuté**
-  → architecture technique candidate
-  → définition du POC
-  → POC de faisabilité (lot multi-cycle)
-  → décision de poursuite
-  → backlog / MVP
-  → delivery incrémental
-  → QA / sécurité / release / RUN
-  → industrialisation plateforme
-  → capitalisation
+Pré-cadrage
+  → cadrage détaillé
+  → conception fonctionnelle
+  → architecture fonctionnelle
+  → UX/UI P0
+  → architecture technique P0
+  → Delivery P0
+  → PR #217 / intégration main
+  → post-merge / cleanup
+  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
+  → architecture POC ciblée             ← candidate
+  → backlog POC borné                   ← candidate
+  → delivery POC                        ← candidate
+  → décision Morris : abandon / itération / préparation MVP
 ```
 
 ### Précisions
 
-- Trajectoire **non séquentielle rigide** ; activation par déclencheurs.
-- POC = **lot** multi-cycle, pas un cycle SFIA autonome.
-- MVP **distinct** du POC.
-- G7 historique = versionnement (commit / push / draft PR) — **distinct** du merge.
-- Merge #207 = fait Git ; régularisation cadrage = **D-VAL-11**.
-- Merge #209 / #210 = faits Git ; conception intégrée ; sync documentaire clôturable (post-#210).
-- Aucune stack / architecture **technique** validée.
-- Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18.
-- Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
-- Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`).
-- **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
-- **AF-CAND-11B** : **VALIDÉE** — UX/UI clôturé.
-- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
-- Clôture formelle architecture **non prononcée**.
+- Étapes jusqu’au cleanup P0 : **terminées**.
+- Cadrage POC orchestration : **sélectionné** (Option B Morris), **non démarré**.
+- Étapes post-cadrage POC : **candidates**, soumises aux résultats du cadrage.
+- POC ≠ MVP ≠ industrialisation — **aucun** de ces jalons n’est engagé.
+- Architecture **fonctionnelle** : VALIDÉE / INTÉGRÉE ; clôture formelle **non prononcée**.
+- Architecture **technique P0** : VALIDÉE / INTÉGRÉE ; Delivery P0 **exécuté**.
+- Desktop P0 uniquement (1440×1024) ; responsive / a11y complète / CI / Runtime réel **ouverts**.
+
+### Orientation Option B — cadrage POC orchestration
+
+> Le prochain cycle SFIA Studio sera un cycle de cadrage visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique sans préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.
+
+**Sujets du futur cadrage (préparation — non exécution) :**
+
+1. Objectif de preuve
+2. Scénario métier unique
+3. Frontières Studio / orchestrateur
+4. Niveau d’automatisation maximal
+5. Actions read-only ou simulées
+6. Gates Morris
+7. Stop conditions
+8. Données de test
+9. Preuves attendues
+10. Critères de succès et d’abandon
+11. Sécurité et réversibilité
+12. Périmètre Git
+13. Stratégie de démonstration
+
+**Hors ce cycle de capitalisation :** architecture détaillée ; schéma API ; contrat JSON ; backlog complet ; choix d’outil Runtime ; code ; planning détaillé.
 
 ---
 
-## 4. Prochains cycles candidats (options de routage — non lancés)
+## 4. Cycles (historique et prochain)
 
 ### 4.0 Synchronisation documentaire post-merge
 
@@ -206,22 +201,39 @@ Pré-cadrage                         ← terminé historiquement
 | Statut | **CLÔTURÉ** — AF-CAND-11B VALIDÉE ; Option B ; Figma P0-00C…03C |
 | Référence | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
 | Livrables | `14` / `15` / `16` |
-| Suite | Delivery autorisé — non exécuté ; runtime screenshot avant verdict visuel fort |
-| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; clôture architecture |
+| Suite | Delivery P0 **exécuté et clôturé** (PR #217) |
+| Ne lance pas | POC ; MVP ; Runtime réel ; clôture architecture fonctionnelle |
+
+### 4.4 Architecture technique P0
+
+| Champ | Contenu |
+|-------|---------|
+| Statut | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) |
+| Suite | Delivery P0 **CLÔTURÉ** depuis TA-DEC-18 (autorisation historique → exécution #217) |
+| Ne lance pas | Architecture Runtime ; orchestration réelle ; MVP |
+
+### 4.5 Delivery P0
+
+| Champ | Contenu |
+|-------|---------|
+| Statut | **CLÔTURÉ** — PR #217 ; post-merge ; cleanup branche |
+| Livrable | `projects/sfia-studio/app/` sur `main` @ `759ab0b…` |
+| Ne lance pas | POC orchestration ; Git/Cursor réels ; CI Studio |
 
-### 4.4 Architecture technique
+### 4.6 Cadrage POC orchestration (prochain)
 
 | Champ | Contenu |
 |-------|---------|
-| Déclencheur | Après archi fonctionnelle suffisante |
-| Pourquoi pas maintenant | Prématuré ; stack non décidée |
+| Statut | **Sélectionné** (Option B Morris) — **non démarré** |
+| Objectif | Définir un POC d’orchestration borné (faisabilité) |
+| Ne lance pas | Architecture POC détaillée ; code ; outil Runtime ; MVP |
 
-### 4.5 Sécurité (bornée)
+### 4.7 Sécurité (bornée)
 
 | Champ | Contenu |
 |-------|---------|
 | Déclencheur | Avant POC à permissions élevées |
-| Pourquoi pas maintenant | Identification déjà faite au cadrage |
+| Pourquoi pas maintenant | Identification déjà faite au cadrage ; sujets à rouvrir dans le cadrage POC |
 
 ---
 
@@ -243,19 +255,23 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
 | D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI clôturé |
 | D-NEXT-2g1 | Option B consolidation UX docs | Morris | **VALIDÉE** |
-| D-NEXT-2g2 | Lancement delivery | Morris | **Autorisé** — non exécuté |
-| D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Non autorisé** (ce cycle) |
+| D-NEXT-2g2 | Lancement delivery P0 | Morris | **CLÔTURÉ** — PR #217 |
+| D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Historique** — intégré via trajectoire Delivery |
+| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE** — sélectionnée, **non lancée** |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
-| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture validée ; **UX/UI clôturé** ; delivery suivant |
-| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
+| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au Delivery P0 **terminé** ; prochain = cadrage POC |
+| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | À traiter dans le cadrage POC |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
-| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
+| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris — à rouvrir au cadrage POC |
 | D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
 | D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
 | D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
-| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée (poussée ; intégrée) ; décision distincte |
+| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
+| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** (ce cycle) |
+| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **Attendue** |
+| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Attendue** après intégration capitalisation |
 
 ---
 
@@ -291,9 +307,11 @@ Pré-cadrage                         ← terminé historiquement
 
 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
 
-**AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery = prochain GO. Clôture architecture = GO distinct.
+**AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery P0 **exécuté et clôturé** (PR #217).
+
+**Option B (Morris — capitalisation) :** prochaine orientation = **cadrage POC orchestration** — **non lancé**.
 
-Morris reste libre. Aucun cycle delivery, architecture technique, POC ou MVP n’est lancé ici. Clôture formelle architecture **non prononcée**.
+Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industrialisation **non engagés**.
 
 ---
 
@@ -302,25 +320,24 @@ Morris reste libre. Aucun cycle delivery, architecture technique, POC ou MVP n
 | Gate proposé | Objet | Statut |
 |--------------|-------|--------|
 | **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
-| **DF-G2** | Sélectionner le prochain cycle | **FAIT** pour conception ; suite après conception **ouverte** |
-| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique ; merge hors périmètre D-VAL-10 |
-| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
+| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à Delivery P0 ; prochain = cadrage POC (Option B) |
+| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique |
+| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** — objet du prochain cadrage |
 | **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync #212 + finalisation #213 : **INTÉGRÉES** (`19302836…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **VALIDÉE** (UX/UI clôturé).
+Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **sélectionné**, non démarré.
 
 ---
 
 ## 8. Questions Morris
 
-1. Autorisez-vous commit / push / PR de la sync UX (Option B) ?
-2. Lancez-vous le cycle **delivery / implémentation** ?
-3. Clôturez-vous formellement le cycle architecture (décision **distincte**) ?
-4. Quel sort pour les branches historiques ?
-5. Quelles priorités NFR / accessibilité avant le premier runtime review ?
-6. Quand planifiez-vous une itération UX post-runtime ?
+1. Autorisez-vous **commit / push / PR** de la capitalisation documentaire (README + `07`) ?
+2. Après intégration : autorisez-vous le **GO cadrage POC orchestration** ?
+3. Clôturez-vous formellement le cycle architecture fonctionnelle (décision **distincte**) ?
+4. Quel sort pour les branches historiques restantes ?
+5. Quelles réserves P0 (responsive / a11y / CI / postcss) prioriser avant ou pendant le POC ?
 
 ---
 
@@ -328,23 +345,17 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 
 | Critère | État |
 |---------|------|
-| 04–07 complets et cohérents | **Oui** |
+| 04–07 complets et cohérents | **Oui** (07 synchronisé post-P0) |
 | Alignement D-VAL-1…11 / G1–G7 / DF-G1 | **Oui** |
-| Pas d’archi/stack/MVP/POC démarrés | **Oui** |
 | DF-G1 validé | **Oui** (D-VAL-9) |
-| G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
-| Merge PR #207 | **Fait Git** — régularisé D-VAL-11 |
-| Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
-| Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 / #210 |
-| FD-CAND-01…08 | **VALIDÉES** |
-| Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
-| Sync post-merge | **INTÉGRÉE** — `cb870544…` / PR #212 |
-| Finalisation post-merge | **INTÉGRÉE** — `19302836…` / PR #213 |
-| Acceptation #211 | **VALIDÉE** — 2026-07-18 |
-| AF-Option C | **VALIDÉE** |
-| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
-| Prochain cycle après architecture | UX/UI sélectionné, exécuté et clôturé — delivery suivant non lancé |
+| Clôture formelle cadrage | **FAIT** (D-VAL-11) |
+| Cycle conception | **CLÔTURÉ** |
+| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle ouverte |
+| UX/UI | **CLÔTURÉ** |
+| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** |
+| Delivery P0 | **CLÔTURÉ** (PR #217) |
+| Prochain cycle | **Cadrage POC orchestration** — sélectionné, non lancé |
+| MVP / industrialisation / Runtime réel | **Non engagés** |
 
 ---
 
@@ -352,23 +363,13 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 
 | Élément | Valeur |
 |---------|--------|
-| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
-| Intégration cadrage `main` | **Oui** (PR #207 / #208) |
-| Cadrage documentaire | **Clôturé** |
-| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** |
-| FD-CAND-01…08 | **VALIDÉES** |
-| Cycle 2 | **CLÔTURÉ** |
-| Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
-| Sync post-merge | **INTÉGRÉE** — `cb870544…` |
-| Finalisation #213 | **INTÉGRÉE** — `19302836…` |
-| Acceptation #211 | **VALIDÉE** |
-| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
-| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
-| Ready for POC / MVP / tech | **Non** |
-| Ready for Morris #213 post-merge review | **Oui** (trace locale) |
+| Delivery P0 | **CLÔTURÉ** — `759ab0b…` / PR #217 |
+| Statut produit | `p0-delivery-integrated-next-poc-orchestration-framing` |
+| Option B POC | **Sélectionnée** — cadrage **non démarré** |
+| Ready for POC code / Runtime | **Non** |
+| Ready for Morris capitalisation review | **Oui** |
 
-**Verdict :** `READY FOR CHATGPT DOCUMENTARY REVIEW`
+**Verdict :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`
 
 ---
 
@@ -388,5 +389,8 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
 | [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — écrans P0 |
 | [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — décisions |
+| [18-technical-architecture.md](./18-technical-architecture.md) | Architecture technique P0 |
+| [19-technical-architecture-decision-pack.md](./19-technical-architecture-decision-pack.md) | TA-DEC (historique « delivery autorisé ») |
+| [app/README.md](./app/README.md) | Runtime P0 intégré |
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE — UX/UI CLÔTURÉ (Option B) — delivery NON LANCÉ — clôture architecture NON PRONONCÉE — Morris décide.*
+*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Morris décide.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 470e8dc..bbc2c1d 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,31 +4,29 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `ux-ui-closed-implementation-reference` — UX/UI **CLÔTURÉ** (référence Figma initiale) ; architecture **VALIDÉE** + **INTÉGRÉE** ; clôture formelle architecture **non prononcée** |
+| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` — Delivery P0 **CLÔTURÉ** et intégré sur `main` ; prochaine orientation = **cadrage POC orchestration** (Option B) — **non lancé** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — capitalisation UX/UI Option B (DOC, Standard) — worktree local |
-| **Typologie cycle** | DOC — clôture documentaire UX/UI / transition delivery |
-| **Cycle projet** | 4 — UX/UI (**CLÔTURÉ**) ; architecture cycle 3 **intégrée** ; clôture formelle architecture **ouverte** |
-| **Profil SFIA** | Critical |
+| **Exécuteur** | Cursor — capitalisation post-Delivery P0 (DOC / CAPA légère, Standard) |
+| **Typologie cycle** | DOC / CAPA légère — synchronisation statut produit + trajectoire |
+| **Cycle projet** | 15 — Capitalisation / REX ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle **intégrée** (clôture formelle **ouverte**) |
+| **Profil SFIA** | Standard (capitalisation) |
 | **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée**) |
-| **Branche UX (worktree)** | `project/sfia-studio-ux-ui-reconciliation` — locale ; **non poussée** |
-| **Figma UX** | [lrjA1WEyRpL05vKR8k29LO](https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO) — P0-00C…P0-03C @ 1440×1024 |
-| **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
-| **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
+| **Branche Delivery P0** | `project/sfia-studio-delivery-p0-implementation` — **supprimée** (local + remote) après cleanup post-merge |
+| **Figma UX** | [lrjA1WEyRpL05vKR8k29LO](https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO) — P0-00C…P0-03C @ 1440×1024 (référence initiale) |
+| **App P0** | `projects/sfia-studio/app/` — Next.js 15 / React 19 / TypeScript ; 4 routes ; fixtures locales |
+| **PR Delivery P0** | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
+| **Commit projet Delivery** | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
+| **Merge Delivery** | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
+| **Périmètre Delivery** | 77 fichiers ; +12830 / −0 |
 | **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
 | **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **Acceptation Morris #211** | **OUI** — 2026-07-18 (régularisation documentaire ; sans D-VAL-12) |
-| **PR sync post-merge** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) — **MERGED** |
-| **Commit sync** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
-| **Merge sync** | `cb87054423ed80905f633e86d907eee1709611b2` |
-| **PR finalisation post-merge** | [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
-| **Commit finalisation** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
-| **Merge finalisation** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
+| **PR sync / finalisation archi** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) / [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
+| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **Base canonique** | `origin/main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
@@ -36,43 +34,39 @@
 | **AF-CAND-11B** | **VALIDÉE** — UX/UI sélectionné, exécuté et **clôturé** |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
 | **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` — clôture formelle **NON PRONONCÉE** |
+| **Architecture technique P0** | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) — Delivery P0 **exécuté** depuis |
 | **UX/UI** | **CLÔTURÉ** — Option B ; 4 frames Figma ; docs `14`–`16` |
-| **Prochain cycle** | **Delivery** autorisé — **non exécuté** ; tech/POC/MVP **non lancés** |
+| **Delivery P0** | **CLÔTURÉ** — implémenté, validé visuellement, mergé (#217), post-mergé, cleanup branche effectué ; **aucune gate Morris restante** |
+| **Prochain cycle** | **Cadrage POC orchestration** (Option B Morris) — **sélectionné**, **non démarré** ; POC / MVP / industrialisation **non lancés** |
 
 ---
 
-## 0. État post-merge (observation) et conception
+## 0. État produit (capitalisation post-Delivery P0)
 
 | Élément | Valeur |
 |---------|--------|
-| PR cadrage | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
-| PR conception | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
-| Commit conception | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
-| Merge conception | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
-| Documents Studio sur `main` | **Quatorze** (`01`–`13` + README) — cadrage + conception + architecture |
-| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
-| Cadrage documentaire | **Clôturé** (D-VAL-11) |
-| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
-| FD-CAND-01…08 | **VALIDÉES** |
-| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` |
-| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
-| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
-| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
-| Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
-| Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
-| Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
-| Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` ; commit `33d61e3…` |
-| Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
-| Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
-| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
-| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
-| Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Cycle UX/UI | **CLÔTURÉ** — Option B ; Figma référence initiale |
-| Prochain cycle | **Delivery** autorisé — **non exécuté** |
-| Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
-
-> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). PR #212 : sync post-merge **intégrée** (`cb870544…`). PR #213 : finalisation documentaire **intégrée** (`19302836…`). Les merges architecture/sync/finalisation ne prononcent pas la clôture formelle architecture ni la suppression des branches. **AF-CAND-11B a depuis été VALIDÉE** (UX/UI clôturé — décision Morris distincte).
+| Cadrage | **Clôturé** (D-VAL-11) |
+| Conception fonctionnelle | **Clôturée** et **intégrée** (PR #209 / #210) |
+| Architecture fonctionnelle | **Validée** et **intégrée** (#211–#214) — clôture formelle **ouverte** |
+| UX/UI P0 | **Clôturé** (Option B ; `14`–`16` ; Figma) |
+| Architecture technique P0 | **Validée** et **intégrée** (`18`/`19`) |
+| Delivery P0 | **Clôturé** — implémenté, validé, mergé, post-mergé, cleanup effectué |
+| PR Delivery P0 | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
+| Titre | `feat: implement SFIA Studio P0 governed workspace` |
+| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
+| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
+| Périmètre | 77 fichiers sous `projects/sfia-studio/app/**` ; +12830 / −0 |
+| Routes P0 | `/` → `/synthese` ; `/nouvelle-demande` ; `/cycle-actif` ; `/decision` |
+| Preuves | Validation visuelle Morris ; lint / typecheck / Vitest / build / Playwright post-merge verts |
+| Nature squash | Commit de branche **non ancêtre** de `main` ; trees applicatifs **vérifiés identiques** |
+| Branche Delivery | **Supprimée** (locale + distante) — aucune gate Morris restante sur Delivery P0 |
+| App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
+| Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
+| Produit complet / MVP / industrialisation | **Non atteints** |
+| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non lancée** |
+| Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
+
+> Historique antérieur (PR #207–#216) : inchangé dans son rôle. La capitalisation synchronise le statut **après** clôture Delivery P0 ; elle ne réécrit pas les décisions D-VAL / AF-CAND / TA-DEC.
 
 ---
 
@@ -138,21 +132,23 @@ Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution m
 ## 2. Trajectoire macro (état factuel)
 
 ```text
-Pré-cadrage                    ← terminé historiquement
-  → cadrage détaillé           ← VALIDÉ (D-VAL-9 / DF-G1)
-  → versionnement (G7)         ← commit / push / draft PR réalisés (D-VAL-10)
-  → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
-  → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
-  → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (#211–#214 / `5f1eb908…`) — clôture formelle **ouverte**
-  → UX/UI ← **SÉLECTIONNÉ** → **EXÉCUTÉ** → **CLÔTURÉ** (AF-CAND-11B ; Option B ; Figma P0-00C…03C)
-  → synchronisation documentaire ← **en cours** (worktree local)
-  → delivery / implémentation ← **autorisé** — **non exécuté**
-  → architecture technique / POC / MVP ← **non lancés**
-  → industrialisation plateforme
+Pré-cadrage
+  → cadrage détaillé
+  → conception fonctionnelle
+  → architecture fonctionnelle
+  → UX/UI P0
+  → architecture technique P0
+  → Delivery P0
+  → PR #217 / intégration main
+  → post-merge / cleanup
+  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
+  → architecture POC ciblée             ← candidate (après cadrage)
+  → backlog POC borné                   ← candidate
+  → delivery POC                        ← candidate
+  → décision Morris : abandon / itération / préparation MVP
 ```
 
-Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE**. UX/UI **CLÔTURÉ**. Delivery **non lancé**. POC / MVP non lancés. Clôture formelle architecture **non automatique**.
+Étapes jusqu’au cleanup P0 : **terminées**. Cadrage POC orchestration : **sélectionné**, **non démarré**. Étapes suivantes : **candidates**, soumises aux résultats du cadrage. POC / MVP / industrialisation : **non engagés**. Clôture formelle architecture fonctionnelle : **non automatique**.
 
 ---
 
@@ -213,7 +209,16 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | P0-02C Cycle actif | `22:133` | 1440×1024 |
 | P0-03C Décision Morris | `22:270` | 1440×1024 |
 
-> Statut `ux-ui-closed-implementation-reference`. Référence Figma = implémentation **initiale** (non intangible). Delivery **autorisé**, non exécuté. Runtime screenshot obligatoire avant verdict visuel fort.
+> UX/UI **CLÔTURÉ**. Référence Figma = implémentation **initiale** (non intangible). Delivery P0 **exécuté et clôturé** (PR #217). Desktop 1440×1024 uniquement ; responsive / a11y complète / CI / Runtime réel **non validés**.
+
+### Delivery P0 — CLÔTURÉ (PR #217)
+
+| Document / artefact | Rôle |
+|---------------------|------|
+| [app/README.md](./app/README.md) | Runtime P0 — stack, routes, contraintes |
+| `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |
+
+> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Prochaine orientation : **cadrage POC orchestration** (non lancé).
 
 ---
 
@@ -302,34 +307,44 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
 | D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |
 
-### Décisions encore ouvertes
+### Décisions encore ouvertes / clôturées depuis
 
 | Décision | Statut |
 |----------|--------|
-| AF-CAND-11B — sélection / lancement prochain cycle | **VALIDÉE** — UX/UI clôturé |
+| AF-CAND-11B — UX/UI | **VALIDÉE** — UX/UI clôturé |
 | Option B consolidation 14/15/16 | **VALIDÉE** |
-| Delivery | **Autorisé** — non exécuté |
-| Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
-| Commit / push / PR sync (#212) + finalisation (#213) | **Réalisés et intégrés** — trace post-#213 locale éventuelle **non versionnée** ici |
+| Delivery P0 | **CLÔTURÉ** — PR #217 mergée ; post-merge + cleanup effectués ; aucune gate restante |
+| Acceptation / régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 |
+| Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
-| Sort des branches | Conservées ; décisions distinctes |
-| Contenu POC / définition MVP | Non pris |
-| Stack / architecture technique | Non pris |
+| Sort des branches historiques | Conservées ; décisions distinctes |
+| Contenu / architecture du POC orchestration | **Non pris** — cadrage à venir |
+| Définition MVP | **Non pris** |
+| Industrialisation | **Non engagée** |
+| Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
+| Vulnérabilités moderate postcss (via Next) | **Ouvertes** — pas de fix forcé |
+| Runtime / Git / Cursor réels | **Hors périmètre P0** — sujets du futur cadrage POC |
+
+> Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.
+
+### Orientation Morris — Option B (POC orchestration)
+
+> Le prochain cycle SFIA Studio sera un cycle de **cadrage** visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique **sans** préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.
+
+**Décision consommée :** Option B sélectionnée comme prochaine orientation — **cadrage uniquement** ; POC **non lancé** ; aucune techno Runtime sélectionnée ; aucune intégration Studio ↔ Git ↔ Cursor ↔ orchestrateur autorisée dans ce cycle de capitalisation.
 
-> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — acceptée/régularisée Morris 2026-07-18. Sync #212 + finalisation #213 : **intégrées** (`cb870544…` / `19302836…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
+**Sujets préparés pour le futur cadrage POC :** objectif de preuve ; scénario métier unique ; frontières Studio / orchestrateur ; niveau d’automatisation maximal ; actions read-only ou simulées ; gates Morris ; stop conditions ; données de test ; preuves attendues ; critères de succès et d’abandon ; sécurité et réversibilité ; périmètre Git ; stratégie de démonstration.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT de la synchronisation documentaire UX Option B.
-2. GO commit de la branche projet.
-3. GO push et PR distincts.
-4. Lancement du cycle delivery / implémentation.
-5. Clôture formelle du cycle architecture, décision distincte.
-6. Sort des branches `pre-framing` / `functional-design` / `functional-architecture`.
+1. **GO commit / push / PR** de la présente capitalisation documentaire.
+2. Après intégration : **GO cadrage POC orchestration**.
+3. Clôture formelle du cycle architecture fonctionnelle (décision **distincte**, toujours ouverte).
+4. Sort des branches historiques (`pre-framing` / `functional-design` / `functional-architecture`).
 
-**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
+**Verdict documentaire :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`
 
 ---
 
@@ -339,16 +354,17 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 |---------|--------|
 | Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
-| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
-| Conception fonctionnelle validée | **`08`–`10`** sur **`main`** — baseline **inchangée** |
-| Architecture fonctionnelle validée + intégrée | **`11`–`13`** sur **`main`** (`84e4863…` / PR #211) |
-| Sync post-merge intégrée | PR #212 / `cb870544…` |
-| Finalisation post-merge intégrée | PR #213 / `19302836…` — statut `functional-architecture-post-merge-integrated` |
+| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** |
+| Conception fonctionnelle | **`08`–`10`** sur **`main`** |
+| Architecture fonctionnelle | **`11`–`13`** sur **`main`** |
+| UX/UI | **`14`–`16`** sur **`main`** |
+| Architecture technique P0 | **`18`–`19`** sur **`main`** |
+| Delivery P0 / app | `projects/sfia-studio/app/` — PR #217 / merge `759ab0b…` |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` @ `19302836…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync post-merge** et de la **finalisation documentaire** intégrées. Toute trace post-#213 éventuelle = **locale** jusqu’à GO versionnement.
+> `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de l’**UX/UI**, de l’**architecture technique P0** et du **Delivery P0** intégrés.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE — UX/UI CLÔTURÉ (Option B ; Figma P0) — delivery NON LANCÉ — clôture architecture NON PRONONCÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Option C méthode préservée — Morris décide.*

```

## 8. Contrôle final

```
git branch --show-current
# capitalization/sfia-studio-p0-status-sync
git rev-parse HEAD
# e97e083a749d88b8556ffd81edc0160a432df137
git rev-parse origin/capitalization/sfia-studio-p0-status-sync
# e97e083a749d88b8556ffd81edc0160a432df137
git status --short
# ?? .tmp-sfia-review/
git rev-list --left-right --count origin/main...HEAD
# 0	1
```

- Aucun staged ; aucun fichier projet modifié restant
- Aucun push `main` ; aucun merge
- `.tmp-sfia-review/**` conservé (untracked)

## 9. Décisions Morris restantes

1. **GO merge** PR #218 uniquement.
2. Après intégration + post-merge : **GO cadrage POC orchestration** (bloqué jusque-là).

## 10. Verdict final

**CAPITALIZATION PR OPEN — READY FOR MORRIS MERGE DECISION**
