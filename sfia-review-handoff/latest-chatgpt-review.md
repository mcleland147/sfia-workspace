# Review pack Full — Post-merge PR #247 review pack mandatory routing

## Métadonnées

- Date / heure / fuseau : 2026-07-21 04:54:11 CEST
- Repo : mcleland147/sfia-workspace
- Cycle : post-merge
- Gate Morris : go merge
- Review pack : Full
- Review Handoff Git : required
- Mode handoff : publish-in-cycle

## Décision Morris

Merge autorisé de la PR portant :

```text
RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE
```

Granularité Light / Full inchangée.

## Git

- origin/main avant : `84e624feaf7cc318c9c0729da66bfefa1c730d6f`
- origin/main après / merge commit : `abd0541e23fcbc279196d9f862b7bddc86623eff`
- PR : https://github.com/mcleland147/sfia-workspace/pull/247
- État : MERGED
- Merged at : 2026-07-21T02:53:05Z
- Titre : docs(method): require review handoff for every Cursor report
- Mode merge : squash

## Métadonnées commit merge

```text
commit abd0541e23fcbc279196d9f862b7bddc86623eff
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Tue Jul 21 04:53:05 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Tue Jul 21 04:53:05 2026 +0200

    docs(method): require review handoff for every Cursor report (#247)

    Co-authored-by: Morris Cleland <morris@macbook-air1.home>
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../core/sfia-chatgpt-cursor-operating-model.md    |  68 ++++--
 .../core/sfia-cycle-routing-guide.md               |  29 +--
 .../core/sfia-rules-and-guardrails.md              |  19 +-
 prompts/templates/sfia-cycle-execution-template.md | 270 +++++++++++++--------
 4 files changed, 241 insertions(+), 145 deletions(-)

```

## Fichiers sur main

```text
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
method/sfia-fast-track/core/sfia-cycle-routing-guide.md
method/sfia-fast-track/core/sfia-rules-and-guardrails.md
prompts/templates/sfia-cycle-execution-template.md
```

## Preuves doctrine sur main

- `prompts/templates/sfia-cycle-execution-template.md` contient `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE` : OK
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` contient `MANDATORY REVIEW HANDOFF MISSING` : OK
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` contient `Flux handoff de validation` : OK
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` contient `HANDOFF PUBLICATION BLOCKED` : OK

## Diff utile complet (squash sur main)

```diff
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index c3e219d..b5c3135 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -166,11 +166,25 @@ La boucle ChatGPT ↔ Cursor suit le flux suivant :

 ```text
 Humain → ChatGPT (cadrage + prompt) → Cursor (exécution)
-       → Retour Cursor → ChatGPT (validation) → Humain (GO/NO-GO)
-       → Commit → PR → Merge → Post-merge → Capitalisation
+       → Retour Cursor
+         → review pack obligatoire (light/full)
+         → publication handoff (sfia/review-handoff) — L3 borné
+         → vérification distante
+       → ChatGPT (analyse via handoff Git) → Humain (GO/NO-GO)
+       → Commit projet / PR / Merge (gates Morris — flux projet distinct)
+       → Post-merge → Capitalisation
        → [Notion preparation — optional, after validation]
 ```

+**Distinction des flux :**
+
+| Flux | Contenu | Autorisation |
+|------|---------|--------------|
+| **Flux handoff de validation** | Review pack → `sfia-review-handoff/latest-chatgpt-review.md` → push `sfia/review-handoff` → vérification distante | L3 bornée automatique pour tout rapport Cursor |
+| **Flux projet** | Commit / push branche projet / PR / merge / baseline | Gates Morris — **jamais** autorisés par le push handoff |
+
+> Le push L3 borné du handoff est une étape technique répétable incluse dans tout cycle produisant un rapport. Il ne constitue pas une autorisation de push du travail projet.
+
 ## 6. Détail des étapes

 | Étape | Description | Responsable principal | Sortie attendue |
@@ -580,7 +594,7 @@ Cycle simple, faible risque, faible impact.

 **Critères indicatifs :** correction doc simple ; mono-fichier ou ≤ 3 fichiers ; pas de code applicatif ; pas de chemin protégé ; pas de décision doctrine ; pas de décision produit structurante ; pas de risque sécurité ; pas de relance tooling ou architecture.

-**Exécution :** prompt court mais clair ; rapport Cursor court ; readiness allégée et unique ; post-merge court ou optionnel si trivial ; review pack **none** par défaut — **light** si consultation documentaire (template §7).
+**Exécution :** prompt court mais clair ; rapport Cursor court ; readiness allégée et unique ; post-merge court ou optionnel si trivial ; review pack **light** obligatoire si rapport Cursor (template §7.0) — jamais `none` pour un rapport ; handoff **required + publish-in-cycle**.

 ##### Standard

@@ -681,7 +695,7 @@ routing guide → méthode cycles v2.5 → template d'exécution → operating m

 - **prépare** le contrat Cursor (prompt d'exécution) ;
 - **distingue** observations, options, recommandations et décisions validées ;
-- **recommande** le niveau review pack : none / light / full ;
+- **recommande** le niveau review pack : **light / full** (obligatoire si rapport Cursor — jamais `none`) ;
 - **ne décide pas** à la place de Morris.

 Si Git n'est pas accessible : signaler explicitement et générer un prompt prudent — Cursor renforce la découverte locale.
@@ -695,7 +709,7 @@ Cursor :
 - **vérifie** que le workspace local correspond au contrat généré ;
 - **stoppe** si divergence ;
 - **ne découvre pas** un scope large si ChatGPT a déjà cadré le repo ;
-- **remplit** le review pack selon le niveau demandé (none / light / full) ;
+- **remplit** le review pack selon le niveau demandé (**light / full** si rapport Cursor) ;
 - **ne laisse pas** de stub final si review pack light/full requis ;
 - **ne push / PR / merge jamais** sans GO Morris.

@@ -737,13 +751,15 @@ Morris :
 | **Review pack temporaire** | Hors commit ; purge/suppression possible après validation Morris/ChatGPT |
 | **Apprentissages durables** | Document versionné dédié — jamais `.tmp-sfia-review/` comme doctrine permanente |

-**Niveaux :**
+**Niveaux (si rapport Cursor) :**

 | Niveau | Quand |
 |--------|-------|
-| **none** | Micro-cycle technique sans doc consulté/modifié/créé |
-| **light** | Cycle standard borné ; Git accessible ; diff suffisant |
-| **full** | Capitalisation ; modification méthode/template ; décision structurante ; sources non accessibles Git |
+| **light** | Cycle simple/borné ; Git accessible ; diff suffisant |
+| **full** | Capitalisation ; modification méthode/template ; décision structurante ; delivery/QA/PR readiness/post-merge selon portée ; sources non accessibles Git |
+| **Hors contrat** | Opération read-only **sans** rapport Cursor — pas de review pack / handoff |
+
+> Ancienne valeur `none` : **retirée** pour les cycles Cursor produisant un rapport (template §7.0).

 **Anti-stub final :** si light ou full requis, le review pack doit être complété avant le rapport final Cursor — jamais un stub minimal en clôture.

@@ -751,40 +767,42 @@ Morris :

 Proposition d'instruction (à ajouter aux projets ChatGPT — hors modification directe Git) :

-> Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push branche projet, PR, merge et promotions de baseline. Le review pack est proportionné. **Tout prompt nécessitant review pack light/full et analyse ChatGPT doit inclure une décision Review Handoff Git required / not required (template §7.10–§7.11). Lorsque required : copie, commit, push et vérification remote du handoff, plus instruction ChatGPT §9.1 dans le rapport final.**
+> Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push branche projet, PR, merge et promotions de baseline. **Règle centrale : RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE (light/full) = PUBLICATION HANDOFF DANS LE MÊME CYCLE (template §7.0, §7.10–§7.11). publish-in-cycle + push L3 borné automatiques. local-only = exception technique uniquement. Aucun `none` / `not required` pour un rapport Cursor.**

 Détail opérationnel : template §10.

-##### H. Review Handoff Git Branch — décision required / not required
+##### H. Review Handoff Git Branch — obligatoire pour tout rapport Cursor

-> **Référence détaillée :** template §7.10–§7.11 — **candidate** ; décision **obligatoire** ; plus « optionnel par omission ».
+> **Référence détaillée :** template §7.0, §7.10–§7.11 — règle centrale : `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE`.

-Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, sans extension ni copier-coller.
+Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, sans extension ni copier-coller. Le push L3 borné du handoff est une étape technique répétable incluse dans tout cycle produisant un rapport. Il ne constitue pas une autorisation de push du travail projet.

 **ChatGPT :**

-- **qualifie explicitement** required / not required dans chaque prompt ;
+- **exige** review pack light/full + handoff **required** + **publish-in-cycle** pour tout prompt produisant un rapport Cursor ;
+- **refuse** `none` / `not required` / `local-only` non conforme — **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** ;
 - **injecte** la section Review Handoff Git complète (template §5) ;
-- **refuse** un prompt sans décision — **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** ;
-- **doit consulter** le handoff remote **avant** de répondre lorsque handoff = required ;
-- **refuse** un verdict READY si handoff required absent, obsolète ou synthesis-only ;
+- **doit consulter** le handoff remote **avant** de répondre ;
+- **refuse** un verdict READY si handoff absent, obsolète ou synthesis-only ;
 - **signale** `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` si incohérent.

 **Cursor :**

-- **publie le handoff** lorsque prompt qualifie **required** — ne désactive pas un handoff required ;
-- **copie, commit, push, vérifie remote** — L3 borné (template §7.10.1) ;
-- **affiche** le bloc Instruction ChatGPT obligatoire (template §9.1) si required ;
+- **produit le review pack** puis **publie le handoff** dans le même cycle (template §7.10.1) ;
+- **copie, commit, push, vérifie remote** — L3 borné ;
+- **affiche** le bloc Instruction ChatGPT obligatoire (template §9.1) ;
 - **rapporte** tous les champs handoff §9.1 ;
-- **ne merge jamais** `sfia/review-handoff`.
+- **ne merge jamais** `sfia/review-handoff` ;
+- en exception technique `local-only` : **`HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED`**.

 **Morris :**

-- **valide** la règle candidate ;
-- **décide** des exceptions not required ;
-- **n'a pas** à répéter un micro-GO handoff lorsque required est conforme à §7.11.
+- **valide** la règle ;
+- **peut interdire explicitement** une publication handoff (exception technique) ;
+- **n'a pas** à répéter un micro-GO handoff lorsque publish-in-cycle est conforme à §7.11 ;
+- **garde** l'autorité exclusive sur commit/push/PR/merge **projet**.

-**Automatisation :** L3 bornée lorsque handoff = required.
+**Automatisation :** L3 bornée pour tout cycle produisant un rapport Cursor (sauf exception technique documentée).

 ##### I. Figma visual contract / Figma-to-code (candidate — capitalisation v2.5 PR 3)

diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index f2a402c..b3925cc 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -61,7 +61,7 @@ Chaque cycle doit déclarer explicitement les références qu'il utilise.

 La documentation SFIA est appliquée par le **routage des cycles**, pas uniquement par la mémoire du modèle.

-**Complément Repo-informed (candidate v2.5 — PR 2) :** avant génération d'un prompt Cursor repo-based, ChatGPT consulte Git si accessible et applique la matrice de routage documentaire. Le détail de la procédure Repo-informed pre-check et du review pack proportionné (none / light / full) est dans `prompts/templates/sfia-cycle-execution-template.md` §2.0 et §7. Le **Review Handoff Git Branch** exige une décision **required / not required** explicite (template §7.10–§7.11) ; il ne remplace pas le routage documentaire ni Git `main`.
+**Complément Repo-informed (candidate v2.5 — PR 2) :** avant génération d'un prompt Cursor repo-based, ChatGPT consulte Git si accessible et applique la matrice de routage documentaire. Le détail de la procédure Repo-informed pre-check et du review pack proportionné (**light / full** pour tout rapport Cursor — template §2.0, §7.0, §7) est dans `prompts/templates/sfia-cycle-execution-template.md`. Le **Review Handoff Git Branch** est **required + publish-in-cycle** pour tout cycle Cursor produisant un rapport (template §7.10–§7.11) ; il ne remplace pas le routage documentaire ni Git `main`.

 **Complément Figma visual contract (candidate v2.5 — PR 3) :** pour les cycles UX/UI ou delivery UI avec fidélité Figma attendue, appliquer le standard Figma visual contract du template d'exécution §6.6 ; **aucun verdict visuel fort** sans contrat visuel extrait et sans comparaison runtime.

@@ -75,19 +75,20 @@ La documentation SFIA est appliquée par le **routage des cycles**, pas uniqueme

 ### 2.1 Matrice Review Handoff Git × review pack

-| Review pack | Analyse ChatGPT | Handoff | Notes |
-|-------------|-----------------|---------|-------|
-| **none** | — | **not required** | |
-| **light / full** | oui | **required** | Publication remote obligatoire |
-| **light / full** | non | **not required** | Justification obligatoire |
-| PR readiness documentaire | oui | **required** | |
-| Capitalisation / méthode / template / règle | oui | **required** | |
-| Audit documentaire | oui | **required** | |
-| Contrôle contenu créé/modifié | oui | **required** | |
-| Cycle local sans ChatGPT | non | **not required** | Justification |
-| Décision Morris contraire | — | **not required** | Traçabilité |
-
-> Verdict prompt incomplet : `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`.
+> **Règle centrale :** `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE` (template §7.0).
+
+| Situation | Review pack | Handoff |
+|-----------|-------------|---------|
+| Cycle Cursor produisant un rapport simple | Light | Required + publish-in-cycle |
+| Cycle Cursor substantiel | Full | Required + publish-in-cycle |
+| Cycle documentaire / méthode / template / règle | Light ou Full selon portée | Required + publish-in-cycle |
+| PR readiness / post-merge / capitalisation | Light ou Full selon portée | Required + publish-in-cycle |
+| Publication techniquement bloquée | Light ou Full | Local-only exceptionnel + régularisation |
+| Opération read-only sans rapport Cursor | Hors contrat | Aucun rapport / aucun handoff |
+
+> Verdict prompt incomplet : `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` (rapport Cursor + review pack absent/`none`, handoff `not required`, ou `local-only` non conforme).
+>
+> La granularité Light / Full existante est **conservée**. `none` et `not required` ne sont **plus** des options pour un cycle Cursor produisant un rapport.

 ## 3. Positionnement dans SFIA

diff --git a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
index e1445c1..a0ac9e0 100644
--- a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
+++ b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
@@ -213,21 +213,24 @@ SFIA utilise les décisions suivantes :
 | Document créé sans source | Connaissance non traçable |
 | UI avant maquette stable | Écart visuel et rework |
 | Mélange UI + backend + auth | Dérive de périmètre |
-| Prompt sans décision Review Handoff Git | Handoff omis — ChatGPT lit un cycle obsolète |
-| Review pack light/full pour ChatGPT sans handoff required | Cycle incomplet — pas de publication remote |
+| Rapport Cursor sans review pack light/full | Cycle incomplet — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |
+| Rapport Cursor avec handoff `not required` ou `none` | Ambiguïté interdite — publication handoff obligatoire |
+| Review pack light/full sans publish-in-cycle | Cycle incomplet — pas de publication remote |

 ## 13.1 Review Handoff Git — règle transverse (absorbée v2.6 — origine capitalisation v2.5)

-> **Référence :** template §7.10–§7.11 ; operating model §18.2.8.H ; routing guide §2.1.
+> **Référence :** template §7.0, §7.10–§7.11 ; operating model §18.2.8.H ; routing guide §2.1.
+> **Règle centrale :** `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE`.

 | Règle | Application |
 |-------|-------------|
-| **Décision obligatoire** | Tout prompt Cursor SFIA doit qualifier Review Handoff Git : **required** ou **not required** |
-| **Prompt incomplet** | Review pack light/full destiné à ChatGPT sans décision handoff → **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** |
-| **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné |
+| **Décision obligatoire** | Tout cycle Cursor produisant un rapport : Review Handoff Git = **required** + Mode **`publish-in-cycle`** + Push **oui — L3 borné** |
+| **Prompt incomplet** | Rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme → **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** |
+| **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné **dans le même cycle** |
+| **Exception `local-only`** | Uniquement blocage technique / interdiction Morris explicite → **`HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED`** |
 | **Rapport incomplet** | Rapport demandant lecture handoff sans push/remote confirmés → cycle incomplet |
-| **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor lorsque handoff required |
-| **Baseline** | Règle **absorbée dans SFIA v2.6 (baseline opérationnelle)** — origine capitalisation v2.5 ; v2.6 active sur `main` après merge PR #204 |
+| **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor pour tout rapport Cursor |
+| **Baseline** | Règle **absorbée dans SFIA v2.6 (baseline opérationnelle)** — origine capitalisation v2.5 ; v2.6 active sur `main` après merge PR #204 — alignement mandatory routing en attente de merge méthode |

 ## 14. Documents associés

diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index c5d8dbb..8270388 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -93,12 +93,12 @@ Repo-informed pre-check ChatGPT
 - fichiers autorisés :
 - fichiers interdits :
 - gates Morris :
-- niveau review pack recommandé : none / light / full
-- review handoff Git : required / not required — obligatoire
+- niveau review pack recommandé : light / full (obligatoire si rapport Cursor ; hors contrat si opération read-only sans rapport)
+- review handoff Git : required (obligatoire si rapport Cursor) — exception technique local-only documentée uniquement
 - justification handoff :
-- mode handoff : publish-in-cycle / local-only / not-required
-- motif local-only : [obligatoire si local-only]
-- push handoff autorisé : oui — L3 borné / non
+- mode handoff : publish-in-cycle (défaut) / local-only (exception technique uniquement)
+- motif local-only : [obligatoire si local-only — exception technique conforme §7.10.3]
+- push handoff autorisé : oui — L3 borné (automatique si rapport Cursor, sauf exception technique)
 - limites / incertitudes :
 - verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION
 ```
@@ -137,8 +137,8 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 5. **Activer les blocs pertinents** — §6 selon type, risque, transverses
 6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
-8. **Décider review pack** — §7 : niveau none / light / full
-9. **Décider Review Handoff Git** — §7.10–§7.11 : **required** ou **not required** — **obligatoire, pas de valeur vide** ; décider aussi le **mode** `publish-in-cycle` / `local-only` / `not-required` ; `required` + `Push handoff autorisé = oui — L3 borné` implique **automatiquement** `publish-in-cycle` (publication distante **dans le même cycle**) ; combinaison `required` + push oui + `local-only` = invalide → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` ; verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si décision absente
+8. **Décider review pack** — §7 : pour tout cycle Cursor **produisant un rapport** → **light** ou **full** obligatoire (jamais `none`) ; opération read-only sans rapport Cursor → hors contrat review pack
+9. **Décider Review Handoff Git** — §7.10–§7.11 : pour tout cycle Cursor **produisant un rapport** → **required** + Mode **`publish-in-cycle`** + `Push handoff autorisé = oui — L3 borné` **automatiques** ; `local-only` = exception technique documentée uniquement (§7.10.3) — jamais `not required` pour un rapport Cursor ; combinaison invalide (rapport + none / not required / local-only non conforme) → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` ; mode contradictoire → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
 10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite

 ### 2.2 Nouveau chat et sources projet
@@ -156,10 +156,16 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 - Omettre type de cycle ou profil SFIA
 - Critical sans justification
 - Prompt sans périmètre / hors périmètre
-- Oublier review pack sur cycle documentaire
-- Omettre la décision Review Handoff Git (required / not required)
+- Produire un rapport Cursor sans review pack (light/full)
+- Utiliser `review pack = none` pour un cycle Cursor produisant un rapport
+- Déclarer le handoff `not required` alors qu'un rapport Cursor est produit
+- Confondre interdiction de push projet et interdiction de push handoff
+- Utiliser `local-only` parce que le cycle est Light, par prudence générique, ou pour reporter la publication
+- Créer systématiquement un second cycle uniquement pour republier le rapport
+- Conclure READY alors que le handoff distant est obsolète
+- Demander à ChatGPT de valider un rapport inaccessible depuis Git
 - Déclarer handoff `required` + push L3 autorisé puis s'arrêter après une préparation **locale** sans publication distante (`publish-in-cycle`)
-- Combiner `required` + `Push handoff autorisé = oui` avec `Mode handoff = local-only`
+- Combiner `required` + `Push handoff autorisé = oui` avec `Mode handoff = local-only` sans exception technique conforme
 - Présenter le fichier racine `latest-chatgpt-review.md` comme chemin canonique (le canonique unique est `sfia-review-handoff/latest-chatgpt-review.md`)
 - Présenter une candidate non mergée comme baseline validée
 - Présenter une version non mergée comme baseline officielle
@@ -195,26 +201,28 @@ Blocs activés :                 [liste §6]
 Blocs désactivés :

 Gates Morris :                  [liste explicite ou « aucun sauf merge si demandé »]
-Review pack :                   [none / light / full — voir §7]
+Review pack :                   [light / full — OBLIGATOIRE si rapport Cursor — jamais none — voir §7]
+                                  [hors contrat si opération read-only sans rapport Cursor]

-Review Handoff Git :            [required / not required — OBLIGATOIRE — pas de valeur vide]
-Justification handoff :         [obligatoire dans les deux cas]
-Mode handoff :                  [publish-in-cycle / local-only / not-required]
-Motif local-only :              [obligatoire si local-only — sinon N/A]
+Review Handoff Git :            [required — OBLIGATOIRE si rapport Cursor — jamais not required pour un rapport]
+Justification handoff :         [obligatoire]
+Mode handoff :                  [publish-in-cycle (défaut automatique) / local-only (exception technique uniquement)]
+Motif local-only :              [obligatoire si local-only — exception technique §7.10.3 — sinon N/A]
 Branche handoff :               sfia/review-handoff
 Fichier handoff :               sfia-review-handoff/latest-chatgpt-review.md
-Push handoff autorisé :         [oui — L3 borné / non]
+Push handoff autorisé :         [oui — L3 borné — automatique si rapport Cursor, sauf exception technique]
 Commit handoff attendu :        [message ou convention — ex. docs(review-handoff): publish …]
 Retour branche initiale :       [obligatoire si publish-in-cycle]
 Vérification remote :           [obligatoire si publish-in-cycle]
-Verdict distant attendu :       [ex. HANDOFF UPDATED — REMOTE VERIFIED / N/A]
-Instruction ChatGPT finale :  [bloc §9.1 si required / N/A si not required]
+Verdict distant attendu :       [ex. HANDOFF UPDATED — REMOTE VERIFIED / HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED]
+Instruction ChatGPT finale :  [bloc §9.1 — obligatoire si rapport Cursor + publish-in-cycle]

 Règles mode handoff (ChatGPT — avant génération) :
-- required + Push handoff autorisé = oui — L3 borné  →  Mode = publish-in-cycle (automatique)
-- required + local-only                              →  Motif local-only obligatoire
-- required + push oui + local-only                   →  INVALIDE → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
-- not required                                       →  Mode = not-required
+Règle centrale : RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE
+- rapport Cursor attendu → Review pack light/full + Handoff required + Mode publish-in-cycle + Push oui — L3 borné (automatiques)
+- local-only                                              → Motif exception technique obligatoire (§7.10.3) + verdict HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED
+- rapport + none / not required / local-only non conforme → INVALIDE → PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING
+- required + push oui + local-only sans exception         → INVALIDE → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
 - Chemin canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
   (le fichier racine latest-chatgpt-review.md n'est JAMAIS le canonique)

@@ -380,34 +388,36 @@ Validations attendues :
 - [Contrôles spécifiques]

 Review pack :
-[none / light / full — si light ou full, référencer §7 — réinitialiser le fichier en début de cycle (étape 2) avant toute écriture ; mono-cycle uniquement ; anti-stub final obligatoire]
+[light / full — OBLIGATOIRE si rapport Cursor — jamais none — référencer §7 — réinitialiser le fichier en début de cycle (étape 2) ; mono-cycle ; anti-stub final obligatoire]
+[hors contrat si opération read-only sans rapport Cursor]

 Review Handoff Git :
-- décision : [required / not required — obligatoire]
+- décision : [required — OBLIGATOIRE si rapport Cursor — jamais not required pour un rapport]
 - justification : [obligatoire]
-- mode handoff : [publish-in-cycle / local-only / not-required]
-- motif local-only : [obligatoire si local-only / N/A]
+- mode handoff : [publish-in-cycle (défaut) / local-only (exception technique uniquement)]
+- motif local-only : [obligatoire si local-only — exception technique §7.10.3 / N/A]
 - branche : sfia/review-handoff
 - fichier canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
   (interdit : traiter latest-chatgpt-review.md à la racine comme canonique)
 - review pack source : .tmp-sfia-review/chatgpt-review.md
-- push handoff autorisé : [oui — L3 borné / non]
+- push handoff autorisé : [oui — L3 borné — automatique si rapport Cursor, sauf exception technique]
 - commit handoff attendu : [message]
 - retour branche initiale : obligatoire si publish-in-cycle
 - vérification remote : obligatoire si publish-in-cycle (SHA + relecture fichier distant)
-- règle atomique : required + push oui — L3 borné ⇒ publish-in-cycle dans le MÊME cycle (pas de second GO Morris)
+- règle atomique : RAPPORT CURSOR ⇒ review pack light/full + required + publish-in-cycle + push L3 dans le MÊME cycle (pas de second GO Morris)
 - verdicts handoff :
   - HANDOFF UPDATED — REMOTE VERIFIED
-  - HANDOFF LOCAL ONLY — PUSH MISSING (uniquement si mode local-only justifié)
+  - HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED (local-only exception technique)
+  - HANDOFF LOCAL ONLY — PUSH MISSING (alias legacy — préférer HANDOFF PUBLICATION BLOCKED)
   - REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED
   - REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING
   - REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
   - REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED
   - STOP — REVIEW HANDOFF SCOPE MISMATCH
   - STOP — REVIEW HANDOFF REMOTE DIVERGENCE
+  - PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING
   - PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
-  - HANDOFF NOT REQUIRED — JUSTIFIED
-- instruction ChatGPT finale : inclure bloc §9.1 si required
+- instruction ChatGPT finale : inclure bloc §9.1 si rapport Cursor
 - Actions interdites par le push handoff L3 : commit projet · push projet · PR · merge · modification main · suppression de branche

 Rapport final attendu :
@@ -827,14 +837,47 @@ Lorsqu'un **post-merge check** est demandé par Morris après une PR mergée, le

 ## 7. Review pack proportionné

+### 7.0 Règle centrale — rapport Cursor = review pack = handoff
+
+> **RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE**
+
+Pour **tout cycle Cursor SFIA qui produit un rapport** :
+
+1. un review pack est **obligatoire** ;
+2. le niveau est exclusivement **Light** ou **Full** selon la qualification existante (§7.3) — **la granularité Light / Full n'est pas modifiée** ;
+3. `publish-in-cycle` est le mode **normal et automatique** ;
+4. le push du handoff est une action **L3 bornée** automatiquement incluse dans le cycle ;
+5. la branche autorisée est exclusivement `sfia/review-handoff` ;
+6. le fichier canonique unique est `sfia-review-handoff/latest-chatgpt-review.md` ;
+7. la vérification distante est **obligatoire** ;
+8. le retour au worktree / branche initiale est **obligatoire** ;
+9. les changements projet doivent rester **intacts**.
+
+**Hors contrat :** une opération **read-only sans rapport Cursor** n'exige ni review pack ni handoff.
+
+**Valeurs interdites** pour un cycle Cursor produisant un rapport :
+
+- `review pack = none` ;
+- `Review Handoff Git = not required` ;
+- `Mode handoff = local-only` **sans** exception technique conforme (§7.10.3).
+
+**Contrôle bloquant** (ChatGPT avant génération / Cursor avant exécution) — si un prompt contient un rapport Cursor attendu **et** (review pack absent / `none` **ou** handoff `not required` **ou** `local-only` non conforme) :
+
+```text
+PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING
+```
+
+Le push L3 borné du handoff **ne constitue pas** une autorisation de push du travail projet.
+
 ### 7.1 Règle structurante — artefact temporaire mono-cycle

 Le review pack `.tmp-sfia-review/chatgpt-review.md` est un **artefact temporaire mono-cycle** de revue — **pas** un miroir intégral de tous les documents consultés lorsque Git est accessible à ChatGPT.

-Tout prompt Cursor impliquant **consultation**, **modification** ou **création** documentaire structurante doit déclarer un niveau review pack — **none**, **light** ou **full** (§7.3).
+Tout cycle Cursor **produisant un rapport** doit déclarer un niveau review pack — exclusivement **light** ou **full** (§7.3). La granularité Light / Full existante est **conservée**.

-> **none** : pas de fichier `chatgpt-review.md` requis — rapport chat ou rapport Cursor court suffit.
 > **light** / **full** : fichier obligatoire, complété avant le rapport final — jamais un stub final (§7.5).
+> **`none` n'est plus une valeur valide** pour un cycle Cursor produisant un rapport (§7.0).
+> Opération **read-only sans rapport Cursor** : hors contrat review pack / handoff.

 **Au démarrage de chaque cycle Cursor (avant toute écriture du review pack) :**

@@ -919,13 +962,15 @@ Le review pack **ne peut pas** être considéré complet dans ce cas.

 ### 7.3 Niveaux de review pack

-#### none
+#### Hors contrat (pas un niveau review pack Cursor)

 | Champ | Contenu |
 |-------|---------|
-| **Usage** | Checks Git simples ; post-merge simple ; cleanup branche ; micro-cycle sans document consulté/modifié/créé ; vérification technique sans décision structurante |
-| **Contenu** | Pas de fichier `chatgpt-review.md` requis — rapport chat ou rapport Cursor court suffit |
-| **Interdit si** | Création/modification documentaire structurante ; consultation documentaire comme base de décision ; PR readiness ; capitalisation ; modification méthode/template/règle |
+| **Usage** | Opération **read-only sans rapport Cursor** (hors contrat §7.0) |
+| **Contenu** | Aucun review pack / aucun handoff exigés par ce contrat |
+| **Interdit** | Proposer `review pack = none` pour un cycle Cursor **produisant un rapport** — utiliser **light** ou **full** |
+
+> Ancienne valeur `none` : **retirée** de la fiche d'instanciation des cycles Cursor avec rapport. Ne pas la réintroduire.

 #### light

@@ -957,7 +1002,7 @@ Git Review Index
 - diff stat :
 - diff name-status :
 - décisions Morris requises :
-- review pack : none / light / full
+- review pack : light / full (obligatoire si rapport Cursor)
 - réserves :
 ```

@@ -974,7 +1019,7 @@ Le rapport final Cursor doit confirmer :

 - review pack réinitialisé au début : oui / non ;
 - review pack complété avant rapport final : oui / non ;
-- niveau appliqué : none / light / full ;
+- niveau appliqué : light / full ;
 - absence de stub final : confirmé / non ;
 - **Review pack content coverage** (§7.2.1) :
   - created files full content : yes / no / not applicable ;
@@ -1034,31 +1079,34 @@ Cursor doit :
 - **Ne jamais** recopier intégralement des documents consultés accessibles dans Git — sauf extrait court justifiant une décision
 - **Ne jamais** laisser un stub final si light ou full est requis (§7.5)

-### 7.10 Review Handoff Git Branch — décision required / not required
+### 7.10 Review Handoff Git Branch — obligatoire pour tout rapport Cursor

-> **Candidate v2.5 — correctif routing PR handoff.** Tout prompt Cursor SFIA doit **qualifier explicitement** le Review Handoff Git : **required** ou **not required**. Aucune omission silencieuse. Le handoff n'est plus « optionnel par défaut » lorsque review pack light/full est destiné à ChatGPT.
+> **Règle centrale (§7.0) :** `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE`.
+> Pour tout cycle Cursor produisant un rapport : Review Handoff Git = **required** ; Mode = **`publish-in-cycle`** ; Push = **oui — L3 borné**. Aucune valeur `not required` pour un rapport Cursor. `local-only` = **exception technique documentée uniquement**.

 #### Décision obligatoire (fiche d'instanciation §3 et squelette §5)

 | Champ | Règle |
 |-------|-------|
-| **Review Handoff Git** | **required** ou **not required** — valeur **obligatoire** |
-| **Justification** | Obligatoire dans les deux cas |
-| **Valeur vide / implicite** | Interdite — verdict ChatGPT : **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** |
+| **Review Handoff Git** | **required** pour tout cycle Cursor produisant un rapport |
+| **Justification** | Obligatoire |
+| **Valeur `not required`** | **Interdite** si un rapport Cursor est produit → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |
+| **Valeur vide / implicite** | Interdite — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |

-#### Mode handoff (obligatoire dès que la décision est prise)
+#### Mode handoff

 | Mode | Quand | Effet |
 |------|-------|-------|
-| **`publish-in-cycle`** | `required` + `Push handoff autorisé = oui — L3 borné` | Publication distante **obligatoire dans le même cycle** avant tout verdict métier/documentaire |
-| **`local-only`** | `required` + push **non**, ou motif explicite (interdit distant, divergence, contenu incomplet, etc.) | Préparation locale uniquement — **revue Git distante non disponible** |
-| **`not-required`** | `Review Handoff Git = not required` | Aucun handoff |
+| **`publish-in-cycle`** | **Défaut automatique** pour tout rapport Cursor | Publication distante **obligatoire dans le même cycle** avant tout verdict métier/documentaire |
+| **`local-only`** | **Exception technique uniquement** (§7.10.3) | Préparation locale + régularisation obligatoire — cycle **non complètement clôturé** |
+| **`not-required`** | **Hors contrat** pour un rapport Cursor | Réservé aux opérations read-only **sans** rapport Cursor |

 **Règles de cohérence :**

-- `required` + push oui → mode **`publish-in-cycle` automatique** ;
-- `required` + `local-only` → **motif local-only obligatoire** ;
-- `required` + push oui + `local-only` → **invalide** → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` ;
+- rapport Cursor → review pack light/full + `required` + push oui → mode **`publish-in-cycle` automatique** ;
+- `local-only` → **motif d'exception technique obligatoire** + verdict `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` ;
+- rapport + `none` / `not required` / `local-only` non conforme → **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** ;
+- `required` + push oui + `local-only` sans exception technique → **`PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`** ;
 - chemin canonique **unique** : `sfia-review-handoff/latest-chatgpt-review.md` ;
 - le fichier racine `latest-chatgpt-review.md` **n'est jamais** le canonique.

@@ -1102,7 +1150,7 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,
 - **aucun** secret ;
 - **aucune** décision Morris déduite automatiquement du contenu ;
 - `main` reste source de vérité ;
-- **décision required / not required obligatoire** dans chaque prompt (§3, §5) ;
+- **décision handoff = required** obligatoire pour tout prompt produisant un rapport Cursor (§3, §5, §7.0) ;
 - lorsque Mode = **`publish-in-cycle`** : exécution L3 bornée **sans micro-GO Morris supplémentaire** (§7.10.1–§7.10.2) — publication distante **dans le même cycle** ;
 - **push autorisé** uniquement vers `sfia/review-handoff` et uniquement pour `sfia-review-handoff/latest-chatgpt-review.md` ;
 - toute autre action Git distante reste **interdite** sans GO explicite ;
@@ -1162,21 +1210,48 @@ Ce push est une exécution **répétable, bornée et réversible** de niveau **L
 - **aucune** inclusion de `.tmp-sfia-review/**` dans Git ;
 - aucun secret ; aucune PR ; aucun merge ; aucun impact `main`.

-#### 7.10.3 Cas `local-only` / publication interdite
+#### 7.10.3 Cas `local-only` — exception technique uniquement

-La publication distante reste **interdite** (mode `local-only` ou arrêt) si **l'une** des situations suivantes est explicite :
+Le mode `local-only` reste possible **uniquement** si la publication est **techniquement bloquée** par :

-- `Review Handoff Git : not required` ;
-- `Push handoff autorisé : non` ;
-- Morris interdit explicitement toute action distante ;
-- divergence incompatible de la branche handoff → `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` ;
+- Git distant indisponible ;
+- réseau ou authentification indisponible ;
+- secret détecté ou risque de secret non résolu ;
+- impossibilité de préserver le worktree ;
+- **interdiction explicite de Morris**.
+
+`local-only` **ne doit jamais** être utilisé :
+
+- par prudence générique ;
+- pour éviter un push handoff ;
+- parce que le cycle est Light ;
+- parce qu'aucun push projet n'est autorisé ;
+- pour reporter automatiquement la publication dans un second cycle.
+
+Un cycle en `local-only` doit **obligatoirement** documenter :
+
+- le motif ;
+- l'impact ;
+- l'action de régularisation ;
+- le gate Morris éventuel ;
+- le fait que le cycle **n'est pas complètement clôturé**.
+
+Verdict obligatoire :
+
+```text
+HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED
+```
+
+(Alias legacy acceptable dans les rapports : `HANDOFF LOCAL ONLY — PUSH MISSING` — préciser « revue Git distante non disponible ».)
+
+Autres arrêts (sans assimilation à une exception `local-only` « choisie ») :
+
+- divergence incompatible → `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` ;
 - force push requis ;
 - contenu incomplet → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` ;
-- mauvais chemin canonique / multi-fichiers → `STOP — REVIEW HANDOFF SCOPE MISMATCH`.
-
-Dans ces cas, le verdict / rapport doit indiquer clairement que la **revue Git distante n'est pas disponible**.
+- mauvais chemin / multi-fichiers → `STOP — REVIEW HANDOFF SCOPE MISMATCH`.

-**Exceptions `not required`** (justification obligatoire) : review pack **none** ; revue locale sans analyse ChatGPT ; absence d'action documentaire ; **GO Morris explicite** de ne pas utiliser le handoff.
+> **`not required` pour un rapport Cursor :** interdit (§7.0). Hors contrat uniquement pour opération read-only **sans** rapport Cursor.

 #### 7.10.4 Séquence et verdicts — `publish-in-cycle`

@@ -1200,7 +1275,7 @@ Dans ces cas, le verdict / rapport doit indiquer clairement que la **revue Git d
 | Poussé mais fichier distant non relu | **`REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`** |
 | Contenu synthétique / manquant | **`REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`** |
 | Cursor annonce publié mais remote ancien/absent/incomplet | **`REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`** |
-| Mode `local-only` justifié (push non) | `HANDOFF LOCAL ONLY — PUSH MISSING` — préciser « revue Git distante non disponible » |
+| Mode `local-only` exception technique | `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` (alias legacy `HANDOFF LOCAL ONLY — PUSH MISSING`) |
 | Autre fichier inclus / mauvais chemin | `STOP — REVIEW HANDOFF SCOPE MISMATCH` |
 | Divergence remote incompatible | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` |

@@ -1259,54 +1334,51 @@ Cursor doit **stopper** si :
 16. Verdict — seulement après 11–14
 ```

-#### Séquence Cursor (si Mode = `local-only`)
+#### Séquence Cursor (si Mode = `local-only` — exception technique)

 ```text
-1. Compléter le review pack
-2. Écrire le handoff local (.tmp-sfia-review/handoff-local/… ou équivalent)
-3. NE PAS push / NE PAS commit la branche handoff sauf instruction contraire explicite
-4. Rapport : HANDOFF LOCAL ONLY — PUSH MISSING + « revue Git distante non disponible » + motif
-5. Ne pas présenter un verdict de readiness comme si ChatGPT pouvait lire le handoff Git
+1. Compléter le review pack (light/full)
+2. Documenter motif / impact / action de régularisation / gate Morris éventuel
+3. Écrire le handoff local (.tmp-sfia-review/handoff-local/… ou équivalent) si utile
+4. NE PAS push / NE PAS commit la branche handoff sauf instruction contraire explicite
+5. Rapport : HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED + « revue Git distante non disponible »
+6. Ne pas présenter un verdict de readiness comme si ChatGPT pouvait lire le handoff Git
+7. Le cycle n'est PAS complètement clôturé
 ```

-### 7.11 Matrice d'activation Review Handoff Git
+### 7.11 Matrice Review Handoff Git × review pack

-> **Règle non ambiguë.** Le Review Handoff Git est **required** lorsqu'un review pack **light** ou **full** doit être utilisé par ChatGPT pour analyser, valider ou décider à partir du rapport Cursor et que Git est le canal de transmission disponible.
+> **Règle non ambiguë (§7.0).** Tout cycle Cursor produisant un rapport → review pack **Light** ou **Full** + handoff **required** + **`publish-in-cycle`**.

-| Situation | Handoff | Justification type |
-|-----------|---------|-------------------|
-| Review pack **none** | **not required** | Pas de matière review pack à transmettre |
-| Review pack light/full **sans** analyse ChatGPT ultérieure | **not required** | Revue locale uniquement — justification explicite |
-| Review pack light/full **destiné à ChatGPT** | **required** | Canal Git — publication remote obligatoire |
-| PR readiness documentaire analysée par ChatGPT | **required** | Contrôle contenu avant GO PR |
-| Capitalisation / REX | **required** | Contrôle contenu et diff |
-| Modification méthode / template / règle / garde-fou | **required** | Contrôle sections modifiées |
-| Audit documentaire | **required** | Contrôle livrables |
-| Décision structurante | **required** | Traçabilité Morris |
-| Fichier créé ou modifié — ChatGPT doit contrôler contenu complet ou diff | **required** | Review pack completeness |
-| Rapport final demande lecture handoff / review pack par ChatGPT | **required** | Cohérence cycle courant |
-| Décision Morris contraire | **not required** | GO Morris explicite + traçabilité |
+| Situation | Review pack | Handoff |
+|-----------|-------------|---------|
+| Cycle Cursor produisant un rapport simple | Light | Required + publish-in-cycle |
+| Cycle Cursor substantiel | Full | Required + publish-in-cycle |
+| Cycle documentaire / méthode / template / règle | Light ou Full selon portée | Required + publish-in-cycle |
+| PR readiness / post-merge / capitalisation | Light ou Full selon portée | Required + publish-in-cycle |
+| Publication techniquement bloquée | Light ou Full | Local-only exceptionnel + régularisation |
+| Opération read-only sans rapport Cursor | Hors contrat | Aucun rapport / aucun handoff |

 **Verdicts handoff (Cursor) :**

 | Verdict | Condition |
 |---------|-----------|
 | `HANDOFF UPDATED — REMOTE VERIFIED` | Commit + push + SHA OK + relecture distante OK |
-| `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode `local-only` justifié — revue Git distante non disponible |
+| `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` | Exception technique `local-only` — cycle non complètement clôturé |
+| `HANDOFF LOCAL ONLY — PUSH MISSING` | Alias legacy de l'exception `local-only` |
 | `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | `publish-in-cycle` requis mais non poussé |
 | `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Poussé mais relecture / SHA distant manquant |
 | `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff synthesis-only ou contenu manquant |
 | `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote ancien/absent/incomplet |
 | `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Autre fichier / mauvais chemin |
 | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible / force push requis |
-| `HANDOFF NOT REQUIRED — JUSTIFIED` | not required avec justification |

 **Verdicts prompt (ChatGPT) :**

 | Verdict | Condition |
 |---------|-----------|
-| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Décision required/not required absente |
-| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Combinaison mode/push contradictoire (ex. required + push oui + local-only) |
+| `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` | Rapport Cursor attendu avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme |
+| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Combinaison mode/push contradictoire (ex. required + push oui + local-only sans exception) |

 **Règle :** un verdict de readiness métier ou documentaire **ne peut pas** être émis avant publication + vérification lorsque `publish-in-cycle` est requis.

@@ -1331,7 +1403,7 @@ Cursor doit **stopper** et demander Morris si :
 13. Relance SFIA 3.0 implicite
 14. Modification Prompt Catalog sans GO Morris
 15. Tentative d'automatiser un arbitrage humain
-16. **Absence de review pack** alors que niveau **light** ou **full** requis
+16. **Absence de review pack** alors qu'un rapport Cursor est produit — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` / niveau **light** ou **full** requis
 17. Contenu créé/modifié **absent** du review pack (niveau light/full)
 18. **Divergence** entre fichier réel et contenu présenté dans le review pack
 19. **Stub final** du review pack alors que light ou full requis (§7.5)
@@ -1350,10 +1422,10 @@ Cursor doit **stopper** et demander Morris si :
 32. **Git granularity** : micro-PR non justifiée ; commit/PR dispersé sans livrable cohérent
 33. **Post-MVP stop** : arrêt post-MVP sans décision Morris ; réserve ouverte non qualifiée ; Option B/C lancée sans GO Morris
 34. **Post-merge cleanup** : branche ambiguë ; branche non mergée ; `git branch -d` refuse ; branche spéciale/handoff ciblée ; cleanup sans GO post-merge
-35. **Review Handoff** : Mode `local-only` justifié — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` + « revue Git distante non disponible » ; **ne pas** présenter comme publication réussie
+35. **Review Handoff** : Mode `local-only` exception technique — `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` ; cycle non complètement clôturé ; **ne pas** présenter comme publication réussie
 36. **Review Handoff** : Mode `publish-in-cycle` mais **non poussé** — `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` ; **interdit** readiness métier/documentaire
 37. **Review Handoff** : poussé sans relecture / SHA distant — `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`
-38. **Review Handoff** : décision required / not required **absente** — `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
+38. **Review Handoff** : rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`
 39. **Review Handoff** : mode incohérent (required + push oui + local-only) — `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
 40. **Review Handoff** : Cursor annonce publié mais remote ancien/absent/incomplet — `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`
 41. **Review Handoff** : force push requis ou divergence incompatible — `STOP — REVIEW HANDOFF REMOTE DIVERGENCE`
@@ -1379,7 +1451,7 @@ Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fus
 8. Garde-fous confirmés
 9. Review pack réinitialisé au début du cycle (oui/non)
 10. Review pack créé / mis à jour (oui/non) — **mono-cycle uniquement**
-11. Niveau review pack appliqué : none / light / full
+11. Niveau review pack appliqué : light / full (obligatoire si rapport Cursor)
 12. Review pack complété avant rapport final — absence de stub final (confirmé / non)
 13. Review pack ne contient que le cycle courant (confirmé / non)
 14. Ouverture review pack (confirmé / best effort)
@@ -1387,7 +1459,7 @@ Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fus
 16. Décisions Morris requises (oui/non + liste)
 17. **Review pack content coverage** (§7.5 — created/modified/diff/synthesis only/verdict)
 18. **Review Handoff Git** (§7.10–§7.11) :
-    - handoff decision : required / not required
+    - handoff decision : required (obligatoire si rapport Cursor)
     - handoff justification
     - mode handoff : publish-in-cycle / local-only / not-required
     - motif local-only : … / N/A
@@ -1461,7 +1533,9 @@ Si `synthesis only = yes` → verdict **ne peut pas** être READY.
 > branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
 > (jamais le fichier racine historique comme canonique).

-Si handoff = **not required** : indiquer `HANDOFF NOT REQUIRED — JUSTIFIED` + justification — **ne pas** afficher le bloc ci-dessus.
+Si opération **read-only sans rapport Cursor** (hors contrat) : indiquer clairement « hors contrat review pack / handoff » — **ne pas** afficher le bloc ci-dessus.
+Si exception `local-only` : indiquer `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` + motif — **ne pas** présenter le handoff Git comme disponible.
+`not required` pour un rapport Cursor : **interdit** → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`.

 Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'est pas disponible** ; ne pas traiter le rapport Cursor comme substitut du handoff distant.

@@ -1490,7 +1564,7 @@ Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'e
 | `READY FOR MORRIS GO PUSH / PR` | À utiliser uniquement si le prompt mentionne explicitement qu'un GO Morris préalable ou attendu couvre cette étape. Sinon utiliser READY FOR PR READINESS. |
 | `STOP — MORRIS DECISION REQUIRED` | Gate ou arbitrage requis |
 | `NOT READY` | Écart bloquant documenté |
-| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Prompt sans décision handoff required/not required |
+| `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` | Rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme |
 | `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Mode/push contradictoires (ex. required + push oui + local-only) |
 | `HANDOFF UPDATED — REMOTE VERIFIED` | Handoff publié, SHA vérifié, fichier distant relu |
 | `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode local-only justifié — revue Git distante non disponible |
@@ -1500,7 +1574,7 @@ Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'e
 | `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote non à jour |
 | `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Périmètre handoff multi-fichier / mauvais chemin |
 | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible ou force push requis |
-| `HANDOFF NOT REQUIRED — JUSTIFIED` | Handoff not required avec justification |
+| `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` | Exception technique local-only — régularisation requise |

 ---

@@ -1519,8 +1593,8 @@ Procédure détaillée :
 3. Utiliser le template canonique : prompts/templates/sfia-cycle-execution-template.md (Git main).
 4. Si ajouté aux sources projet ChatGPT : aide d'instanciation — en cas d'écart, Git main > sources projet.
 5. Critical : toujours justifier. Standard par défaut si doute.
-6. Review pack proportionné : none / light / full — voir template §7. Jamais de stub final si light ou full requis.
-7. Review Handoff Git : décision required / not required + mode publish-in-cycle / local-only / not-required (template §3, §5, §7.10–§7.11). required + Push handoff autorisé = oui — L3 borné ⇒ publish-in-cycle dans le MÊME cycle (copie, commit mono-fichier, push origin/sfia/review-handoff, vérification SHA + relecture distante, retour branche) — pas de second GO Morris. local-only exige un motif. Combinaison contradictoire → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT. Décision absente → PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING. Chemin canonique unique : sfia-review-handoff/latest-chatgpt-review.md.
+6. Review pack : light / full obligatoire pour tout cycle Cursor produisant un rapport (§7.0). Jamais `none` pour un rapport. Jamais de stub final.
+7. Review Handoff Git : required + publish-in-cycle + Push oui — L3 borné automatiques pour tout rapport Cursor (template §3, §5, §7.0, §7.10–§7.11). Publication dans le MÊME cycle. local-only = exception technique uniquement → HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED. Rapport + none/not required/local-only non conforme → PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING. Chemin canonique unique : sfia-review-handoff/latest-chatgpt-review.md.
 8. v2.6 = baseline opérationnelle officielle (active sur `main`). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
 9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff publish-in-cycle = L3 borné sans micro-GO Morris — n'autorise jamais push projet, PR, merge, force push ni L5.
 ```

```

## Worktrees

- OPS1 : préservé — `delivery/sfia-studio-ops1-i2-live-conversation` non modifié par ce merge
- Branche méthode : non supprimée
- Aucun force push

## Réserves

- Documents historiques v2.5/v2.6 / Notion non réécrits
- Suppression branche méthode : non demandée

## Verdict

`REVIEW PACK MANDATORY ROUTING — MERGED TO MAIN — READY FOR HANDOFF`
