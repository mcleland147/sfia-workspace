# SFIA Review Pack — PR 4 draft (Git granularity + post-MVP stop + post-merge cleanup + handoff push rule)

**Date/heure :** 2026-07-11 00:31 UTC+2  
**Cycle :** Capitalisation / REX — PR 4 draft (correction handoff)  
**Profil :** Capitalization — Standard  
**Branche projet :** `capitalization/sfia-v2.5-git-granularity-stop-rules`  
**Review pack level :** full  
**Statut SFIA :** v2.4 baseline opérationnelle ; v2.5 candidate — **aucune promotion baseline**

---

## Local Git Truth Check

| Commande | Résultat |
|----------|----------|
| pwd | `/Users/morris/Projects/sfia-workspace` |
| git branch --show-current | `capitalization/sfia-v2.5-git-granularity-stop-rules` |
| git rev-parse --short HEAD | `91e568a` (base main — draft PR 4 non commité) |
| git rev-parse --short origin/main | `91e568a` |
| merge-base 91e568a origin/main | `PR 3 present on origin/main` |
| Fichiers tracked modifiés | 5 fichiers méthode PR 4 uniquement — périmètre OK |
| sfia-review-handoff/ sur branche PR 4 | absent — OK |
| Fichiers applicatif / v3 / MCP / .sfia | non modifiés — OK |

---

## Sources consultées

| Source | Rôle |
|--------|------|
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | REX PR 1 ; cadrage PR 4 |
| `prompts/templates/sfia-cycle-execution-template.md` | §6.12–6.15 ; §7.10 handoff ; stop conditions |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | §18.2.8.H handoff ; §18.2.8.J PR 4 |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Pointeurs candidate v2.5 PR 2–4 |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` | §4.13–4.15 bis |

---

## Fichiers modifiés (branche PR 4 — non commités)

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
3. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
4. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
5. `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`

**Diff stat :** 5 files changed, 216 insertions(+), 24 deletions(-)

---

## Règle handoff — commit + push + vérification remote obligatoire

Quand le mode Review Handoff Git Branch est activé :

| Étape | Obligation |
|-------|------------|
| Commit local | `sfia/review-handoff` — fichier `sfia-review-handoff/latest-chatgpt-review.md` uniquement |
| Push | `git push origin sfia/review-handoff` — autorisé même si push branche projet interdit |
| Vérification remote | `git ls-remote origin refs/heads/sfia/review-handoff` — SHA remote = SHA local |

**Verdicts :**
- Commit + push + remote OK → `HANDOFF UPDATED` / push verified
- Commit local sans push → `**HANDOFF LOCAL ONLY — PUSH MISSING**` — pas `HANDOFF UPDATED`
- Rapport demande lecture handoff Git sans push → cycle incomplet

**Handoff remote before (cycle) :** `b18b71d` (`b18b71da3f1a0a8602717e9851f47accaf48217c`)

---

## Contenu exploitable — diff complet PR 4

diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index e4b2f09..c7dba19 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -765,6 +765,8 @@ Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, san
 
 - **peut lire** `sfia-review-handoff/latest-chatgpt-review.md` depuis Git (branche `sfia/review-handoff`) ;
 - **doit consulter** ce handoff **avant** de répondre à Morris sur le fond d'un rapport Cursor mentionnant review pack ou handoff ;
+- **lit** le handoff depuis **`origin/sfia/review-handoff`** (remote) — pas uniquement un commit local non pushé ;
+- **signale** si le rapport Cursor indique `HANDOFF UPDATED` mais remote verification = no ou push handoff = not done ;
 - **utilise** ce fichier comme **contexte de revue** — dernier handoff Cursor ;
 - **ne traite pas** ce fichier comme source de vérité canonique ;
 - **vérifie toujours** Git `main` / branche projet pour les faits durables, décisions validées et doctrine ;
@@ -779,6 +781,10 @@ Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, san
 - **signale explicitement** toute impossibilité de fournir ce contenu ;
 - **si mode activé** (GO Morris), copie le contenu vers `sfia-review-handoff/latest-chatgpt-review.md` ;
 - **met à jour uniquement** la branche `sfia/review-handoff` ;
+- **commit + push obligatoires** vers `origin/sfia/review-handoff` — push autorisé dans le cycle même si push branche projet interdit (template §7.10) ;
+- **vérifie remote** après push : `git ls-remote origin refs/heads/sfia/review-handoff` — SHA remote = commit local ;
+- **ne déclare pas** `HANDOFF UPDATED` si push absent — verdict **`HANDOFF LOCAL ONLY — PUSH MISSING`** ;
+- **rapporte** : handoff local SHA ; remote before/after ; push done/not done ; remote verification yes/no ;
 - **ne merge jamais** cette branche ;
 - **ne push rien d'autre** sans GO Morris.
 
@@ -837,6 +843,39 @@ Standard transverse pour sécuriser les cycles UX/UI et Figma-to-code — ancrag
 
 **Règle dure :** MCP Figma ne suffit pas — contrat visuel extrait avant code ; revue runtime obligatoire après modification ; aucun verdict « aligné » sans comparaison capture Figma vs capture runtime.
 
+##### J. Git granularity, post-MVP stop rules et post-merge cleanup (candidate — capitalisation v2.5 PR 4)
+
+> **Référence détaillée :** template §6.12.1, §6.14, §6.15 — **candidate** ; ne valide pas v2.5 ; Morris décide.
+
+**ChatGPT :**
+
+- **recommande** le regroupement Git (commits/PR par livrable cohérent) ;
+- **signale** la fatigue de gouvernance (micro-PR, micro-cycles répétés) ;
+- **distingue** gate décisionnel Morris vs opération Git routinière ;
+- **qualifie** les réserves ouvertes : bloquante / acceptée / reportée ;
+- **ne lance pas** Option B/C sans GO Morris ;
+- **recommande** l'arrêt post-MVP quand conditions §6.15 remplies — Morris tranche.
+
+**Cursor :**
+
+- **ne multiplie pas** commits/PR sans contrat explicite ;
+- **regroupe** quand périmètre stable et prompt l'autorise ;
+- **post-merge** : exécute vérification intégration **+** cleanup branche PR dans le **même cycle** si conditions §6.12.1 OK ;
+- **stoppe** cleanup si `git branch -d` refuse — ne force pas avec `-D` sans GO Morris ;
+- **ne supprime jamais** `main`, `sfia/review-handoff`, ou branche non liée à la PR mergée.
+
+**Morris :**
+
+- **décide** arrêt post-MVP, report de réserves, lancement Option B/C ;
+- **GO post-merge** inclut cleanup branche PR **si** conditions de sécurité OK ;
+- **conserve** autorité sur gates structurants, scope, baseline.
+
+**Git :**
+
+- **`main`** reste source de vérité ;
+- **granularité proportionnée** — pas une PR par micro-ajustement sans justification ;
+- **post-merge check simple** ne génère pas de nouvelle PR sauf anomalie.
+
 ## 19. Décision
 
 Le modèle ChatGPT ↔ Cursor est reconnu comme **fondation opérationnelle SFIA v1.1**.
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index a80538d..bafcda8 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -68,6 +68,10 @@ La documentation SFIA est appliquée par le **routage des cycles**, pas uniqueme
 
 **Complément review pack completeness :** pour tout cycle documentaire, capitalisation ou delivery avec fichiers créés/modifiés, le review pack doit contenir le **contenu exploitable** des fichiers créés/modifiés selon le template d'exécution §7.2.1. Une synthèse seule ne suffit pas pour une revue ChatGPT détaillée.
 
+**Complément Git granularity + post-MVP stop rules + post-merge cleanup (candidate v2.5 — PR 4) :** granularité Git proportionnée, règles d'arrêt post-MVP avec réserves acceptées, cleanup branche PR intégré au post-merge — template §6.12.1, §6.14, §6.15 ; operating model §18.2.8.J.
+
+**Complément Review Handoff commit + push + remote verification (candidate v2.5 — PR 4) :** mode handoff activé = commit + push `origin/sfia/review-handoff` + vérification remote obligatoires — template §7.10 ; operating model §18.2.8.H. Verdict `HANDOFF LOCAL ONLY — PUSH MISSING` si push absent.
+
 ## 3. Positionnement dans SFIA
 
 Ce guide sert de **couche d'orchestration opérationnelle** pour les cycles SFIA.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md
index 0db18bb..38ed5d4 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md
@@ -199,6 +199,7 @@ PR 1 (cette PR) ──► PR 2 ──► PR 3 ──► PR 4
 | **Cibles probables** | `sfia-v2.5-project-cycles-method-candidate.md` ; operating model § granularité ; post-MVP framing pattern |
 | **Ancrage REX** | Chaîne R-UX-01 (13+ commits/gates) ; arrêt post-MVP Morris |
 | **Gate Morris** | GO PR 4 ; puis évaluation promotion v2.5 (hors scope automatique) |
+| **Draft PR 4 (candidate)** | Granularité Git §6.14 ; stop rules §6.15 ; post-merge cleanup §6.12.1 — branche `capitalization/sfia-v2.5-git-granularity-stop-rules` |
 
 ---
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
index 5b394c5..d28fb15 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
@@ -340,7 +340,7 @@ Chaque cycle est documenté au niveau **méthodologique exploitable** — pas de
 | **Gates Morris** | GO PR si demandé — pas d'ouverture PR sans GO |
 | **ChatGPT** | Revue readiness ; challenge réserves |
 | **Cursor** | Exécute checks ; ne push pas ; ne ouvre pas PR sans GO |
-| **Validations** | Budget fichiers ; fichiers interdits ; single readiness |
+| **Validations** | Budget fichiers ; fichiers interdits ; single readiness ; **granularité Git proportionnée** (template §6.14 — livrable cohérent, pas micro-PR non justifiée) |
 | **Risques** | PR prématurée ; scope caché |
 | **Stop conditions** | Push/PR sans GO |
 | **Amont / aval** | Amont : delivery/QA — Aval : merge (gate Morris) |
@@ -350,21 +350,21 @@ Chaque cycle est documenté au niveau **méthodologique exploitable** — pas de
 
 | Champ | Contenu |
 |-------|---------|
-| **Objectif** | Clôturer le cycle après merge : sync, réserves, suite, capitalisation si besoin |
-| **Déclenchement** | Merge effectué par Morris |
-| **Entrée** | PR mergée ; commit merge ; réserves éventuelles |
-| **Déroulé** | Sync main → vérif intégration → rapport court → suite recommandée |
-| **Livrables** | Rapport post-merge ; réserves tracées |
-| **Critères sortie** | Main aligné ; réserves classées ; suite identifiée |
-| **Profils possibles** | **Light** (trivial, skip possible) ; Standard ; Critical (complet) |
-| **Gates Morris** | Aucun si trivial ; escalade si réserve bloquante |
-| **ChatGPT** | Recommandation suite |
-| **Cursor** | Sync ; vérif ; rapport — pas de commit hors scope |
-| **Validations** | HEAD = origin/main ; fichiers intégrés |
-| **Risques** | Oublier réserves ; relancer cycle sans clôture |
-| **Stop conditions** | Main désaligné non expliqué |
+| **Objectif** | Clôturer le cycle après merge : sync, réserves, suite, capitalisation si besoin ; **cleanup branche PR** si post-merge check OK (PR 4 candidate §6.12.1) |
+| **Déclenchement** | Merge effectué par Morris ; post-merge check demandé |
+| **Entrée** | PR mergée ; commit merge ; branche source identifiée ; réserves éventuelles |
+| **Déroulé** | Sync main → vérif merge commit + commit PR → rapport post-merge → **cleanup branche PR si conditions OK** → suite recommandée |
+| **Livrables** | Rapport post-merge ; rapport cleanup (done/skipped/blocked) ; réserves tracées |
+| **Critères sortie** | Main aligné ; réserves classées ; branche PR nettoyée ou blocage documenté ; suite identifiée |
+| **Profils possibles** | **Light** (trivial, skip cleanup possible) ; Standard ; Critical (complet) |
+| **Gates Morris** | GO post-merge inclut cleanup si conditions OK ; escalade si réserve bloquante |
+| **ChatGPT** | Recommandation suite ; signale si cleanup requis ou bloqué |
+| **Cursor** | Sync ; vérif ; rapport ; **cleanup branche PR dans le même cycle** si §6.12.1 OK — pas de `-D` sans GO |
+| **Validations** | HEAD = origin/main ; merge commit + commit PR présents ; branche ≠ main/handoff |
+| **Risques** | Oublier réserves ; cleanup branche ambigu ; micro-cycle cleanup séparé inutile |
+| **Stop conditions** | Main désaligné ; branche non mergée ; `git branch -d` refuse ; branche handoff ciblée |
 | **Amont / aval** | Amont : merge — Aval : capitalisation, cycle suivant |
-| **Impact Cycle 3** | Profondeur rapport selon profil ; template `07-write-post-merge-status` |
+| **Impact Cycle 3** | Template §6.12 — post-merge + cleanup intégré |
 
 ### 4.15 Capitalisation / REX
 
@@ -382,10 +382,23 @@ Chaque cycle est documenté au niveau **méthodologique exploitable** — pas de
 | **Cursor** | Rédaction doc si périmètre ; pas d'actation version |
 | **Validations** | Ne pas confondre Capitalization (profil) et CAPA (type v2.4) |
 | **Risques** | Promotion prématurée ; brouillage candidate/validé |
-| **Stop conditions** | Promotion v2.5 implicite ; modification doctrine sans gate |
+| **Stop conditions** | Promotion v2.5 implicite ; modification doctrine sans gate ; **confondre Capitalization avec obligation de clore toutes les réserves** (voir §4.15 bis) |
 | **Amont / aval** | Amont : post-merge, épreuves — Aval : cycles méthode futurs |
 | **Impact Cycle 3** | Section Capitalization activable ; template `08-capitalize-method-asset` |
 
+### 4.15 bis Post-MVP stop rules (candidate — PR 4)
+
+> **Référence :** template §6.15 ; roadmap REX Chantiers360 — **candidate** ; Morris décide l'arrêt.
+
+| Champ | Contenu |
+|-------|---------|
+| **Objectif** | Permettre l'arrêt d'une phase post-MVP sans clore toutes les réserves |
+| **Déclenchement** | Phase post-MVP ; réserves structurantes ciblées traitées ou report explicite |
+| **Conditions** | Réserves ciblées closed ; restantes acceptées/reportées ; Option B/C non lancées ; REX suffisant ; risques documentés ; GO Morris arrêt |
+| **Exemple** | Chantiers360 : R-QA-04/R-UX-01 closed ; R-QA-03/R-QA-05 acceptées ; Option B/C non lancées |
+| **Profil Capitalization** | Capitaliser l'apprentissage — **ne pas** confondre avec obligation de traiter chaque réserve ouverte |
+| **SFIA v2.5** | Reste **candidate** — cette règle ne promeut pas la baseline |
+
 ### 4.16 Méthodologie des transverses activables
 
 > Sections activables par contexte, risque ou profil — **pas des cycles cœur obligatoires**. Voir aussi §3.2 et §5.C.
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 0be0352..cea92a7 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -640,15 +640,66 @@ Cursor stoppe ou demande décision Morris si :
 | **Gates Morris** | GO PR si demandé |
 | **Stop** | Fichier interdit dans diff ; staged inattendu |
 
-### 6.12 Post-merge
+### 6.12 Post-merge — check intégration + cleanup branche PR
+
+> **Candidate v2.5 — capitalisation PR 4.** Post-merge check = vérification intégration **+** cleanup branche PR si toutes les conditions de sécurité sont remplies. Le cleanup devient **automatique** dans le cadre du GO post-merge Morris, sauf stop condition.
 
 | Élément | Contenu |
 |---------|---------|
-| **Activer si** | Après merge PR |
-| **Consignes** | `git checkout main` ; `git pull --ff-only` ; vérifier intégration ; log ; réserves |
-| **Livrables** | Rapport post-merge ; réserves documentées |
-| **Gates Morris** | Si réserve bloquante |
-| **Stop** | Main non aligné ; réserve bloquante non traitée |
+| **Activer si** | Après merge PR — post-merge check explicitement demandé par Morris |
+| **Consignes** | `git checkout main` ; `git pull --ff-only` ; vérifier merge commit + commit PR sur main ; log ; réserves ; **cleanup branche PR si conditions OK** (§6.12.1) |
+| **Livrables** | Rapport post-merge ; réserves documentées ; rapport cleanup branche (done / skipped / blocked) |
+| **Gates Morris** | GO post-merge inclut cleanup branche **si conditions OK** ; escalade si réserve bloquante |
+| **Stop** | Main non aligné ; réserve bloquante non traitée ; cleanup ambigu (§6.12.1) |
+
+#### 6.12.1 Post-merge branch cleanup (intégré)
+
+Lorsqu'un **post-merge check** est demandé par Morris après une PR mergée, le nettoyage de la branche associée fait partie du **même cycle post-merge** — pas de second GO Morris, sous conditions.
+
+**Conditions obligatoires (toutes) :**
+
+| # | Condition |
+|---|-----------|
+| 1 | PR confirmée **merged** |
+| 2 | `main` local et `origin/main` alignés |
+| 3 | Merge commit présent sur `main` |
+| 4 | Commit de la PR présent sur `main` |
+| 5 | Working tree tracked propre |
+| 6 | Branche à supprimer = branche de la PR mergée (identifiée explicitement) |
+| 7 | Branche locale et/ou distante non protégée |
+| 8 | Aucune divergence non mergée détectée |
+| 9 | Branche **≠** `main`, **≠** `sfia/review-handoff`, **≠** branche spéciale/handoff |
+
+**Actions autorisées automatiquement (post-merge) :**
+
+- `git branch -d <branche-pr>` si merge confirmé ;
+- `git push origin --delete <branche-pr>` si branche distante présente ;
+- `git fetch origin --prune` ;
+- rapport final incluant post-merge **+** cleanup.
+
+**Actions interdites sans GO Morris distinct :**
+
+- supprimer `main` ;
+- supprimer `sfia/review-handoff` ;
+- supprimer une branche non liée à la PR ;
+- `git branch -D` si `git branch -d` refuse ;
+- supprimer branche avec commits non mergés ;
+- supprimer branche protégée ou ambiguë.
+
+**Stop conditions cleanup :**
+
+- PR non mergée ; main non aligné ; merge commit absent ; branche PR ambiguë ; branche non mergée ; `git branch -d` refuse ; fichiers tracked modifiés ; doute sur la branche cible.
+
+**Séquence Cursor (post-merge + cleanup) :**
+
+```text
+1. Local Git Truth Check sur main
+2. Vérifier merge commit + commit PR sur main
+3. Rapport post-merge (intégration, réserves, suite)
+4. Si conditions §6.12.1 OK → git branch -d <branche-pr>
+5. Si branche distante présente → git push origin --delete <branche-pr>
+6. fetch/prune + rapport cleanup (done / skipped / blocked)
+```
 
 ### 6.13 Capitalisation / REX
 
@@ -660,6 +711,48 @@ Cursor stoppe ou demande décision Morris si :
 | **Gates Morris** | GO capitalisation ou promotion méthode |
 | **Stop** | Promotion v2.5 ou doctrine sans gate |
 
+### 6.14 Git granularity / commit strategy
+
+> **Candidate v2.5 — capitalisation PR 4.** Réduire la fatigue de gouvernance — regrouper les opérations Git quand le périmètre est stable.
+
+| Règle | Application |
+|-------|-------------|
+| **Gates Morris** | Fréquents sur **arbitrages structurants** — pas sur chaque micro-alignement |
+| **Commits / PR** | Regroupés par **livrable cohérent** quand périmètre stable |
+| **Éviter** | Une PR par micro-ajustement si risque faible, périmètre stable, validation locale suffisante |
+| **Micro-commit autorisé** | Correction isolée ; risque régression ; traçabilité requise ; séparation fonctionnelle claire |
+| **PR séparée obligatoire** | Changement de scope ; risque accru ; fichiers protégés ; décision structurante ; dette potentielle ; changement baseline |
+| **Post-merge checks simples** | Ne génèrent **pas** de nouvelle PR sauf anomalie détectée |
+
+**ChatGPT** recommande le regroupement ; **Cursor** ne multiplie pas commits/PR sans contrat explicite ; **Morris** tranche scope et gates structurants.
+
+### 6.15 Post-MVP stop rules
+
+> **Candidate v2.5 — capitalisation PR 4.** Un cycle post-MVP peut s'arrêter sans traiter toutes les réserves si conditions remplies et Morris valide.
+
+**Conditions d'arrêt post-MVP (candidate) :**
+
+| # | Condition |
+|---|-----------|
+| 1 | Réserves **structurantes ciblées** traitées |
+| 2 | Réserves restantes **explicitement** acceptées, reportées ou classées non bloquantes |
+| 3 | Options d'évolution produit (ex. Option B/C) **non lancées** sans GO Morris distinct |
+| 4 | Matière REX **suffisante** pour capitalisation |
+| 5 | Risques restants **documentés** |
+| 6 | **Morris valide** l'arrêt |
+
+**Exemple Chantiers360 post-MVP (REX validé) :**
+
+| Élément | Statut |
+|---------|--------|
+| R-QA-04 | CLOSED |
+| R-UX-01 | CLOSED |
+| R-QA-03 / R-QA-05 | Ouvertes — **acceptées** / reportées |
+| Option B / C | Non lancées |
+| Arrêt | Décision Morris — capitalisation méthode |
+
+> **Capitalization ≠ poursuivre toutes les réserves.** Le profil Capitalization qualifie l'intention de capitaliser — pas l'obligation de clore chaque réserve ouverte.
+
 ---
 
 ## 7. Review pack proportionné
@@ -916,6 +1009,42 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,
 - **push autorisé** uniquement vers `sfia/review-handoff` et uniquement pour `sfia-review-handoff/latest-chatgpt-review.md` ;
 - toute autre action Git distante reste **interdite** sans GO explicite.
 
+#### Règle pérenne — commit + push + vérification remote obligatoire (PR 4 candidate)
+
+> Quand le mode Review Handoff Git Branch est **activé**, le handoff n'est **pas complet** sans publication remote.
+
+| Étape | Obligation |
+|-------|------------|
+| 1. Review pack local | `.tmp-sfia-review/chatgpt-review.md` complété (niveau light/full) |
+| 2. Copie handoff | Overwrite `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
+| 3. Commit | Commit local sur `sfia/review-handoff` — **fichier handoff uniquement** |
+| 4. Push | **`git push origin sfia/review-handoff`** — autorisé dans le cycle même si push branche projet interdit |
+| 5. Vérification remote | `git ls-remote origin refs/heads/sfia/review-handoff` — SHA remote = SHA local attendu |
+
+**Push strictement limité à :**
+
+- branche : `sfia/review-handoff`
+- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
+- aucun autre fichier ; aucune PR ; aucun merge ; aucun impact `main`
+
+**Verdicts handoff :**
+
+| Situation | Verdict obligatoire |
+|-----------|---------------------|
+| Commit local + push OK + remote vérifié | `HANDOFF UPDATED` (ou variante explicite push + remote verified) |
+| Commit local **sans** push | **`HANDOFF LOCAL ONLY — PUSH MISSING`** — **pas** `HANDOFF UPDATED` |
+| Rapport demande lecture handoff Git mais remote non à jour | **Cycle incomplet** — stop condition |
+
+**Rapport final Cursor — champs obligatoires si handoff activé :**
+
+- handoff local commit : SHA / none
+- handoff remote commit before : SHA / none
+- handoff remote commit after : SHA / none
+- push handoff : done / not done
+- remote verification : yes / no
+
+**Stop condition :** si le rapport Cursor demande à ChatGPT de lire le handoff Git, mais que le handoff n'a **pas** été pushé sur `origin/sfia/review-handoff`, le cycle est **incomplet**.
+
 #### Niveau d'automatisation
 
 **L3 — exécution bornée.**
@@ -944,8 +1073,9 @@ Cursor doit **stopper** si :
 2. Vérifier absence de secrets / données sensibles
 3. Copier (overwrite) vers sfia-review-handoff/latest-chatgpt-review.md
 4. Commit sur sfia/review-handoff — fichier handoff uniquement
-5. Push vers origin sfia/review-handoff — pas d'autre push
-6. Confirmer dans le rapport Cursor : handoff effectué / refusé / stop condition
+5. git push origin sfia/review-handoff — push obligatoire, pas d'autre push
+6. git ls-remote origin refs/heads/sfia/review-handoff — vérifier SHA remote = commit local
+7. Confirmer dans le rapport Cursor : handoff local SHA ; remote before/after ; push done ; remote verification yes/no
 ```
 
 ---
@@ -985,6 +1115,11 @@ Cursor doit **stopper** et demander Morris si :
 29. **Figma visual contract** : verdict visuel fort sans capture runtime (§6.6.G)
 30. **Review pack** : contenu créé/modifié absent alors que light/full requis (§7.2.1)
 31. **Review pack** : synthèse seule sans contenu exploitable — `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING` (§7.2.2)
+32. **Git granularity** : micro-PR non justifiée ; commit/PR dispersé sans livrable cohérent
+33. **Post-MVP stop** : arrêt post-MVP sans décision Morris ; réserve ouverte non qualifiée ; Option B/C lancée sans GO Morris
+34. **Post-merge cleanup** : branche ambiguë ; branche non mergée ; `git branch -d` refuse ; branche spéciale/handoff ciblée ; cleanup sans GO post-merge
+35. **Review Handoff** : handoff commité localement mais **non pushé** sur `origin/sfia/review-handoff` — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` ; cycle incomplet si ChatGPT doit lire handoff distant
+36. **Review Handoff** : rapport demande lecture handoff Git sans vérification remote (`git ls-remote`) — SHA remote ≠ SHA local attendu
 
 ---
 

---

## Garde-fous

- SFIA v2.5 reste **candidate** — aucune promotion baseline
- SFIA v2.4 reste baseline opérationnelle
- Aucune modification applicatif Chantiers360 / SFIA v3 / MCP / `.sfia`
- Aucun commit ni push sur branche PR 4
- Push autorisé **uniquement** `origin/sfia/review-handoff`
- Branche `sfia/review-handoff` : un seul fichier — jamais merge vers `main`

---

## Réserves

| # | Réserve |
|---|---------|
| R1 | Draft PR 4 non commité — GO Morris requis pour commit/push PR 4 |
| R2 | Handoff précédent (PR 3) restait sur remote `b18b71d` jusqu'à push correction |
| R3 | Évaluation promotion v2.5 baseline hors scope PR 4 |

---

## Décisions Morris requises

1. Valider contenu candidate PR 4 (granularité, stop rules, post-merge cleanup, handoff push rule)
2. GO commit branche PR 4 (non demandé)
3. GO push + PR PR 4 (non demandé)

---

## Review pack content coverage

| Critère | Valeur |
|---------|--------|
| created files full content | not applicable |
| modified sections complete | **yes** — diff git complet inclus |
| useful diff included | **yes** |
| synthesis only | **no** |
| **review pack verdict** | **complete** |

---

## Synthèse règles PR 4

1. **Granularité Git proportionnée** — template §6.14
2. **Post-MVP stop rules** — template §6.15 ; cycles §4.15 bis
3. **Post-merge cleanup intégré** — template §6.12.1 ; cycles §4.14
4. **Handoff commit + push + remote verification** — template §7.10 ; operating model §18.2.8.H

---

## Verdict cycle (review pack)

**PR 4 HANDOFF RULE ADDED — HANDOFF PUSH PENDING REMOTE UPDATE IN THIS SECTION**

*(Handoff push/remote fields complétés dans rapport Cursor final)*

