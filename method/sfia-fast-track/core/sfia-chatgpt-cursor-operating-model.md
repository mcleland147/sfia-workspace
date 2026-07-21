---
status: foundation
version: v1.1
previous: none
updated_after: SFIA foundation v1.1 consolidation
scope: ChatGPT Cursor operating model
---

# SFIA ChatGPT ↔ Cursor Operating Model v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** ChatGPT ↔ Cursor operating model

## 1. Objectif

Ce document définit le modèle opératoire officiel de la boucle ChatGPT ↔ Cursor dans SFIA.

Il décrit comment SFIA orchestre :

- l'intention humaine ;
- l'analyse et la structuration par ChatGPT ;
- l'exécution repository par Cursor ;
- la traçabilité Git ;
- la validation humaine ;
- la capitalisation ;
- la préparation éventuelle de Notion comme couche knowledge éditorialisée.

Ce document ne décrit pas uniquement l'usage de Cursor.

Il formalise un modèle de travail SFIA contrôlé, traçable et capitalisable.

## v1.1 Engineering Principles Reference

All ChatGPT ↔ Cursor interactions, Cursor prompts, repository changes, validation decisions and capitalization activities described in this Operating Model must comply with:

- `docs/foundation/sfia-engineering-principles.md`

ChatGPT must frame and generate prompts according to these principles.

Cursor must execute only within prompts that respect these principles.

Human validation remains required for significant decisions.

## 2. Positionnement dans SFIA v1.1

SFIA v1.1 repose sur une boucle opératoire assistée, mais non autonome.

Le modèle actuel correspond au **niveau 0** :

| Niveau | Description |
|--------|-------------|
| Niveau 0 | Orchestration manuelle assistée entre humain, ChatGPT, Cursor et Git |
| Niveau 1 | Prompts standardisés et familles de prompts gouvernées |
| Niveau 2 | Moteurs semi-spécifiés : prompt generation, validation, repository execution |
| Niveau 3 | Orchestration contrôlée avec validations explicites |
| Niveau 4 | SFIA automatisée v2.0 avec moteurs actifs et intégration Notion opérationnelle |

En v1.1, ChatGPT et Cursor ne constituent pas encore des moteurs autonomes.

Ils forment une boucle opératoire contrôlée par l'humain.

**Documents fondateurs associés :**

- `docs/architecture/sfia-platform-architecture.md` — architecture opérationnelle v1.1
- `docs/architecture/sfia-delivery-pipeline.md` — pipeline Fast Track
- `docs/architecture/sfia-repository-blueprint.md` — structure repository
- `method/sfia-fast-track/automation/sfia-automation-architecture.md` — vision automation et niveaux

## 3. Principes fondamentaux

| Principe | Description |
|----------|-------------|
| Repository first | Le repository Git est la source de vérité opérationnelle |
| Human validation first | L'humain valide les décisions structurantes |
| Prompt as contract | Le prompt transmis à Cursor agit comme contrat d'exécution |
| One cycle, one useful result | Chaque cycle doit produire un résultat utile et identifiable |
| Traceability by default | Chaque changement significatif doit être traçable |
| No raw Notion sync | Notion n'est jamais synchronisé brutalement |
| Controlled automation | L'automatisation progresse par niveaux, sans supprimer la validation humaine |
| Guardrails before execution | Les garde-fous sont posés avant exécution |

## 3.1 Routage des cycles

Avant de préparer ou d'exécuter un prompt Cursor, le type de cycle SFIA doit être identifié à l'aide de :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

Le Guide de routage des cycles définit les références obligatoires, le template de prompt, les contrôles de validation et la décision attendue pour chaque type de cycle.

Il évite que la boucle ChatGPT ↔ Cursor repose sur la mémoire implicite du modèle.

Règle :

> type de cycle → documents à lire → template → validation → décision

## 4. Rôles dans la boucle

| Acteur | Rôle | Responsabilités |
|--------|------|-----------------|
| Humain | Décideur et validateur | Exprime l'intention, arbitre, valide, autorise push/PR/merge/publication |
| ChatGPT | Analyste, architecte méthodologique, générateur de prompts | Cadre, raisonne, structure, identifie les risques, produit les prompts Cursor |
| Cursor | Exécutant repository | Lit les fichiers, modifie les documents, exécute les commandes, prépare les commits |
| Git | Source de vérité opérationnelle | Versionne les changements, conserve l'historique |
| GitHub PR | Espace de revue et de traçabilité | Porte la revue humaine, la décision de merge et l'historique de livraison |
| Notion | Couche knowledge éditorialisée future | Sert à la lecture, navigation et synthèse après mapping validé |

### 4.1. Humain

L'humain reste le décideur final sur :

- l'ouverture et la clôture d'un cycle ;
- le GO / NO-GO avant commit, push, PR et merge ;
- la revue visuelle (UI premium, Figma Design-first) ;
- les arbitrages métier et architecture sensibles ;
- toute publication ou synchronisation Notion ;
- toute modification de zones interdites (code applicatif, CI, outillage transverse).

### 4.2. ChatGPT

ChatGPT ne modifie pas directement le repository.

Il produit :

- le cadrage de cycle ;
- l'analyse de cohérence ;
- les prompts Cursor structurés ;
- les recommandations de validation ;
- les synthèses post-exécution ;
- les documents de capitalisation et post-merge.

### 4.3. Cursor

Cursor exécute strictement le contrat d'exécution (prompt).

Il :

- lit les fichiers demandés ;
- applique les modifications dans le périmètre ;
- exécute les commandes de vérification ;
- prépare les commits ;
- remonte un compte rendu structuré.

Cursor ne doit pas improviser hors du contrat d'exécution.

## 5. Boucle opératoire standard

La boucle ChatGPT ↔ Cursor suit le flux suivant :

1. Intention humaine ;
2. Analyse ChatGPT ;
3. Cadrage du cycle ;
4. Production du prompt Cursor ;
5. Exécution Cursor ;
6. Retour d'exécution Cursor ;
7. Analyse ChatGPT du retour ;
8. Corrections éventuelles ;
9. Commit ;
10. Préparation PR ;
11. Revue humaine ;
12. Merge ;
13. Post-merge ;
14. Capitalisation ;
15. Préparation Notion éventuelle.

```text
Humain → ChatGPT (cadrage + prompt) → Cursor (exécution)
       → Retour Cursor
         → review pack obligatoire (light/full)
         → publication handoff (sfia/review-handoff) — L3 borné
         → vérification distante
       → ChatGPT (analyse via handoff Git) → Humain (GO/NO-GO)
       → Commit projet / PR / Merge (gates Morris — flux projet distinct)
       → Post-merge → Capitalisation
       → [Notion preparation — optional, after validation]
```

**Distinction des flux :**

| Flux | Contenu | Autorisation |
|------|---------|--------------|
| **Flux handoff de validation** | Review pack → `sfia-review-handoff/latest-chatgpt-review.md` → push `sfia/review-handoff` → vérification distante | L3 bornée automatique pour tout rapport Cursor |
| **Flux projet** | Commit / push branche projet / PR / merge / baseline | Gates Morris — **jamais** autorisés par le push handoff |

> Le push L3 borné du handoff est une étape technique répétable incluse dans tout cycle produisant un rapport. Il ne constitue pas une autorisation de push du travail projet.

## 6. Détail des étapes

| Étape | Description | Responsable principal | Sortie attendue |
|-------|-------------|-----------------------|-----------------|
| Intention humaine | L'utilisateur exprime le besoin ou l'objectif | Humain | Besoin initial |
| Analyse | ChatGPT analyse le besoin, les contraintes et le contexte SFIA | ChatGPT | Proposition de trajectoire |
| Cadrage | Définition du périmètre, hors périmètre, branche, livrables et garde-fous | ChatGPT + Humain | Cadrage validable |
| Prompt Cursor | ChatGPT produit une instruction complète pour Cursor | ChatGPT | Prompt exécutable |
| Exécution repo | Cursor applique les changements dans le repository | Cursor | Fichiers modifiés, résultats de commandes |
| Retour | Cursor restitue les changements, commits, statuts, alertes | Cursor | Compte rendu |
| Analyse retour | ChatGPT vérifie la cohérence et propose suite ou correction | ChatGPT | Décision recommandée |
| Validation | L'humain valide ou demande correction | Humain | GO / réserves / NO-GO |
| Commit | Cursor crée un commit cadré | Cursor | Commit local |
| PR | Cursor ou l'humain prépare la PR selon validation | Humain + Cursor | PR prête |
| Merge | L'humain valide le merge | Humain | Merge effectué |
| Post-merge | Cursor documente la clôture | Cursor | Post-merge status |
| Capitalisation | ChatGPT + Cursor extraient les apprentissages | ChatGPT + Cursor | Documents de capitalisation |
| Notion éventuel | Préparation éditoriale uniquement après validation | Humain + ChatGPT | Mapping ou plan Notion |

## 7. Prompt as Contract

Dans SFIA, un prompt Cursor n'est pas une consigne vague.

C'est un **contrat d'exécution**.

Un prompt Cursor doit préciser :

- objectif ;
- repository ;
- branche ;
- dernier commit attendu ;
- contexte ;
- fichiers à lire ;
- fichiers à modifier ;
- fichiers interdits ;
- actions autorisées ;
- actions interdites ;
- commandes à exécuter ;
- contrôles attendus ;
- commit attendu ;
- résultat attendu ;
- confirmations à remonter.

Un prompt Cursor doit également s'appuyer sur la **Documentation Routing Matrix** définie dans :

- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

Cette matrice permet de déterminer :

- les documents sources à lire ;
- les livrables attendus ;
- les dossiers cibles à alimenter ;
- le niveau de capitalisation attendu ;
- les garde-fous documentaires applicables.

Règle :

> Cursor ne doit pas improviser hors du contrat d'exécution.

## 8. Structure standard d'un prompt Cursor

Un prompt Cursor SFIA doit suivre cette structure minimale :

```text
Objectif :
...

Repo :
...

Branche :
...

Dernier commit attendu :
...

Contexte :
...

Phase / contexte SFIA :
...

Sources de référence :
...

Dossier cible :
...

Type de capitalisation attendu :
...

Périmètre :
...

Hors périmètre :
...

Fichiers à lire :
...

Fichiers à modifier :
...

Fichiers interdits :
...

Actions attendues :
...

Commandes de vérification :
...

Commit attendu :
...

Résultat attendu :
...
```

### 8.1. Prompts types (référence)

Extraits de `sfia-global-capitalization-reference.md` §13 :

**Début de cycle :**

```text
Objectif :
Ouvrir un cycle SFIA Fast Track pour <objectif>.
Important :
Définir le périmètre, le hors scope, les garde-fous, les validations, la branche et le livrable attendu.
Ne pas modifier les zones hors scope.
```

**Validation avant PR :**

```text
Objectif :
Valider le cycle avant PR.
Vérifier :
- diff ;
- build/tests ;
- garde-fous ;
- documentation ;
- absence de modifications hors scope ;
- statut Git.
```

**Post-merge :**

```text
Objectif :
Documenter le post-merge de la PR #<numéro>.
Ajouter :
- PR ;
- branche source ;
- branche cible ;
- commit d'intégration ;
- statut ;
- garde-fous ;
- décision ;
- prochaine étape.
```

## 9. Familles de prompts SFIA

Les familles de prompts utilisées dans SFIA sont :

| Famille | Usage |
|---------|-------|
| Cadrage | Préparer un cycle |
| Audit | Analyser l'existant |
| Cleanup | Nettoyer ou restructurer |
| Consolidation | Renforcer des documents ou méthodes |
| Création documentaire | Créer un nouveau document |
| Validation | Vérifier cohérence, chemins, garde-fous |
| PR preparation | Préparer une pull request |
| Post-merge | Documenter la clôture |
| Notion preparation | Préparer mapping, dry-run, publication future |
| REX | Capitaliser les apprentissages |

Catalogue associé : `prompts/prompt-catalog.md`

Templates associés : `method/sfia-fast-track/templates/`

## 10. Guardrails opérationnels

Les garde-fous suivants sont obligatoires dans les cycles SFIA :

- ne pas modifier le code si le cycle est documentaire ;
- ne pas toucher `projects/interv360/app/` sans demande explicite ;
- ne pas toucher `projects/interv360/backend/` sans demande explicite ;
- ne pas toucher `.github/workflows/` sans demande explicite ;
- ne pas toucher `tools/cmp-001/` sans demande explicite ;
- ne pas toucher aux exports Figma non suivis ;
- ne pas supprimer brutalement ;
- utiliser `git mv` pour les déplacements ;
- ne pas push sans validation humaine ;
- ne pas créer de PR sans validation humaine ;
- ne pas merger automatiquement ;
- ne pas exécuter Notion sync ;
- ne pas publier dans Notion ;
- ne pas régénérer de payloads JSON Notion/CMP sans cycle dédié ;
- toujours vérifier `git status --short` ;
- toujours vérifier les chemins interdits ;
- toujours identifier les sources de référence et le dossier cible à partir de la Documentation Routing Matrix (`sfia-knowledge-layer.md` §6).

Checklists associées :

- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/checklists/validation-checklist.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`

## 11. Modèle de validation

SFIA utilise des décisions explicites.

| Décision | Signification |
|----------|---------------|
| GO | Exécution ou livraison acceptable |
| GO avec réserves | Acceptable avec réserves identifiées |
| NO-GO | Non acceptable en l'état |
| COMPLETE | Travail complet |
| COMPLETE AVEC RÉSERVES | Travail exploitable avec réserves |
| INCOMPLETE | Travail insuffisant |
| FONDATIONS IDENTIFIÉES | Fondations repérées et exploitables |
| FONDATIONS PARTIELLES | Fondations présentes mais à consolider |
| FONDATIONS INSUFFISANTES | Fondations non suffisantes |

Les réserves doivent être classées :

- bloquantes ;
- mineures ;
- résiduelles ;
- P0 ;
- P1 ;
- P2.

## 12. Lien avec SFIA Fast Track

Le modèle ChatGPT ↔ Cursor est le mode opératoire actuel du SFIA Fast Track.

Il applique les règles :

- un cycle = un objectif utile ;
- une branche = un cycle ;
- une PR = une livraison consolidée ;
- un post-merge = une clôture officielle ;
- un audit prépare les cycles majeurs ;
- un REX ou une capitalisation enrichit SFIA ;
- Notion n'intervient qu'après capitalisation et validation.

Référence règles : `method/sfia-fast-track/core/sfia-rules-update.md`

## 13. Preuve opérationnelle — Interv360

La boucle ChatGPT ↔ Cursor a été validée sur Interv360 :

| Jalon | Preuve |
|-------|--------|
| MVP delivery | Tag `v0.1.0-mvp`, 6 lots produit, PR uniques |
| Premium UI | Release `v0.2.0-premium-ui`, garde-fous backend respectés |
| Workspace cleanup | PR #81, consolidation documentaire |
| Foundation v1.1 | Consolidation P0 architecture, operating model |
| Audit | Décision `APPLICATION_SAINE_AVEC_RESERVES` |

Interv360 (`projects/interv360/`) reste le projet de référence — les cycles futurs doivent appliquer ce modèle, pas recopier les 299 documents projet.

## 14. Niveau actuel et limites

En v1.1, le modèle est :

- manuel ;
- assisté ;
- piloté par prompts ;
- exécuté dans Cursor ;
- validé humainement ;
- non autonome ;
- non connecté automatiquement à Notion ;
- non conçu pour remplacer l'arbitrage humain.

Il ne faut pas présenter ce modèle comme un moteur automatisé complet.

**Limites observées (Interv360) :**

- copier/coller manuel entre ChatGPT et Cursor ;
- pas de détection automatique hors scope ;
- revue visuelle humaine obligatoire pour UI premium ;
- risque d'interprétation design par Cursor si prompt insuffisant.

## 15. Trajectoire d'automatisation

La trajectoire SFIA est progressive :

| Niveau | Cible | Documents associés |
|--------|-------|-------------------|
| 0 | Boucle manuelle assistée ChatGPT ↔ Cursor | Ce document |
| 1 | Prompts standardisés | `prompts/prompt-catalog.md`, prompt families |
| 2 | Moteurs semi-spécifiés | Prompt Generation, Repository Execution, Validation *(planned)* |
| 3 | Orchestration contrôlée | `sfia-automation-architecture.md` |
| 4 | SFIA v2.0 automatisée | Future integration Notion + engines actifs |

## 16. Futurs documents associés

Ce document prépare les futurs documents :

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/automation/sfia-documentation-engine.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

Ces documents ne doivent être créés qu'**après validation** du présent Operating Model.

## 17. Risques

| Risque | Description | Mitigation |
|--------|-------------|------------|
| Prompt trop vague | Cursor modifie hors périmètre | Utiliser le prompt comme contrat |
| Automatisation prématurée | Perte de contrôle humain | Validation humaine obligatoire |
| Confusion Git / Notion | Source de vérité ambiguë | Git source opérationnelle, Notion couche knowledge |
| Scope creep | Cycle trop large | One cycle, one useful result |
| Dette documentaire | Livrables non capitalisés | Post-merge + capitalisation |
| Suppression abusive | Perte historique | Archive ou `git mv` |
| PR non maîtrisée | Livraison trop large ou non revue | PR humaine et traçable |

## 18. Critères de maturité

| Niveau | Critère |
|--------|---------|
| Draft | Boucle décrite mais non appliquée |
| Candidate | Boucle appliquée sur un cycle réel |
| Validated | Boucle appliquée sur plusieurs cycles avec résultats cohérents |
| Gold | Boucle standardisée, outillée et reliée aux moteurs SFIA |

**Statut v1.1 :**

> Validated through Interv360 and SFIA foundation consolidation cycles.

### 18.1 Complément SFIA v2.4 — rôles et handoff documentaire

> **Référence :** `sfia-v2.4-consolidation-operating-efficiency-standard.md` §4, §10 — **aucun agent autonome implémenté**.

| Acteur | Rôle v2.4 |
|--------|-----------|
| **ChatGPT** | Cadre, challenge, route, prépare prompts, analyse rapports |
| **Cursor** | Exécute périmètre borné — L3 contrôlé |
| **Git** | Trace — source de vérité |
| **Morris (L0)** | Arbitrages structurants, merge, clôture, gates |

**Handoff documentaire minimal :**

| Phase | Livrable |
|-------|----------|
| Cadrage ChatGPT | Type cycle, profil, QA, gate Morris, périmètre, garde-fous |
| Exécution Cursor | Modifications bornées + rapport §23.3 repository engine |
| Validation | Checklist v2.4 §3.2 — décision Morris si structurant |
| Trace Git | Commit(s), branche, diff |

**Limites v2.4 :**

- pas d'automatisation de décision ;
- pas de push / PR / merge sans demande explicite Morris ;
- pas de v3.0 — immediate NO-GO ;
- pas de L5 global ;
- handoff agent = **trajectoire future**, non implémentée.

### 18.2 Complément — acquis SFIA v2.5 absorbés dans v2.6 (MVP méthode proportionnée)

> **Référence historique :** `sfia-v2.5-project-plan.md` — Cycle 1 — capitalisation Chantiers360 post-MVP.
> **Statut version :** acquis **absorbés dans SFIA v2.6 (baseline opérationnelle)** — v2.5 = candidate absorbée, **jamais** baseline.
> **Ne remplace pas** l'héritage v2.4 — **opérationnalise** la proportionnalité.

Ce complément clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables (voir `sfia-cycle-routing-guide.md` §4.3.1).
#### 18.2.1 Distinction type de cycle projet et profil SFIA

| Dimension | Rôle |
|-----------|------|
| **Type de cycle projet** | Nature du travail : cadrage, conception, architecture fonctionnelle, UX/UI, backlog, delivery, QA, release, post-merge, REX, capitalisation, etc. |
| **Profil SFIA** | Niveau de profondeur, contrôle, validation, rapport et readiness applicable au cycle |

**Règle :** les profils Light / Standard / Critical / Capitalization sont **transverses**. Ils ne remplacent pas la cartographie des cycles projet.

> Les profils Light / Standard / Critical / Capitalization ne remplacent pas les cycles projet. Ils définissent le niveau de profondeur, de contrôle et de validation applicable à chaque cycle projet SFIA, qu'il s'agisse de cadrage, conception, UX/UI, architecture, delivery, QA, post-merge ou capitalisation.

**Exemples :**

| Type de cycle | Profils possibles |
|---------------|-------------------|
| UX/UI | Light, Standard ou Critical selon impact |
| Cadrage | Standard ou Critical selon arbitrages |
| Architecture | Standard ou Critical selon risque |
| Correction documentaire | Light si mono-fichier, sans impact structurant |
| QA | Standard ou Critical selon risque produit |
| REX | Capitalization — profil Light, Standard ou Critical selon portée |

Notation recommandée : `UX/UI — Standard`, `Architecture fonctionnelle — Critical`, `Correction documentaire — Light`, `REX projet — Capitalization Standard`.

La cartographie détaillée des cycles projet reste hors périmètre Cycle 1 — cycle dédié ultérieur dans la roadmap v2.5.

> Pour la cartographie et la méthodologie candidate des cycles projet SFIA v2.5, se référer à `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`.

#### 18.2.2 Profils SFIA — niveaux de traitement transverses

##### Light

Cycle simple, faible risque, faible impact.

**Critères indicatifs :** correction doc simple ; mono-fichier ou ≤ 3 fichiers ; pas de code applicatif ; pas de chemin protégé ; pas de décision doctrine ; pas de décision produit structurante ; pas de risque sécurité ; pas de relance tooling ou architecture.

**Exécution :** prompt court mais clair ; rapport Cursor court ; readiness allégée et unique ; post-merge court ou optionnel si trivial ; review pack **light** obligatoire si rapport Cursor (template §7.0) — jamais `none` pour un rapport ; handoff **required + publish-in-cycle**.

##### Standard

Cycle courant, utile, borné, traçabilité requise.

**Critères indicatifs :** cycle documentaire ou méthode courant ; plusieurs fichiers, périmètre clair ; impact maîtrisé ; pas de doctrine majeure ; pas de chemin protégé ; pas de risque bloquant ; rapport structuré requis.

**Exécution :** prompt contractuel ; rapport structuré ; readiness **unique** ; post-merge court obligatoire ; Morris sur gates utiles — pas micro-validation.

##### Critical

Cycle à risque structurant — **indépendamment du type projet**.

Critical **n'est pas** un type de cycle projet. Un cycle cadrage, conception, UX/UI, architecture, delivery, QA ou capitalisation peut être Critical si impact ou risque le justifie.

**Facteurs de criticité :** décision d'architecture structurante ; sécurité / conformité ; chemins protégés ; impact fort méthode / produit / delivery ; gros diff ; dette technique ou méthodologique ; décision difficilement réversible ; réserve bloquante possible ; changement de doctrine ; promotion implicite version ou standard ; relance trajectoire clôturée (ex. SFIA 3.0).

**Exécution :** prompt renforcé ; rapport complet ; review pack **full** recommandé si auditabilité forte — **light** minimum si cycle borné (template §7) ; readiness renforcée ; gates Morris explicites ; aucune hypothèse structurante non validée.

**Règle :** Critical ne doit **jamais** être implicite — justification par facteur(s) de criticité obligatoire.

##### Capitalization

Cycle visant à transformer apprentissage, REX, pratique ou décision en actif méthodologique réutilisable.

**Critères indicatifs :** REX ; standardisation ; promotion méthode ; synthèse post-cycle ; capitalisation réutilisable ; documentation doctrine ou pattern ; clôture cycle projet ou méthode.

**Important :** Capitalization n'est **pas** automatiquement Critical. Portée Light, Standard ou Critical selon impact.

**Exécution :** traçabilité apprentissage ; distinction observation / recommandation / décision ; validation Morris si promotion méthode ; readiness adaptée à la portée.

#### 18.2.3 Règles de qualification du profil

| Règle | Détail |
|-------|--------|
| Doute sans risque structurant | Light **uniquement** si aucun facteur de criticité |
| Sinon | **Standard** par défaut |
| Critical | Jamais implicite — justification explicite |
| Capitalization | Décrit l'**intention** de capitaliser — pas le niveau de risque |
| Combinaison | Type projet + profil SFIA — les deux sont déclarés dans le prompt |

> **Ne pas confondre** le profil SFIA **Capitalization** avec le type de cycle v2.4 **CAPA** : le profil qualifie le niveau de contrôle ; le type `CAPA` qualifie la nature capitalisation méthode (routing guide §4.3.1). Ex. : `CAPA` + profil `Standard`.

#### 18.2.4 Responsabilité bornée (v2.5 candidate)

| Acteur | Responsabilités | Limites |
|--------|-----------------|---------|
| **ChatGPT** | Qualifie le profil ; distingue type cycle et profil ; cadre ; sélectionne références ; produit prompt contractuel ; identifie risques ; recommande décision ; limite sollicitations Morris aux gates listés | **Recommande — ne décide pas** ; pas push / PR / merge / actation version |
| **Cursor** | Local Git Truth Check ; exécute périmètre ; contrôle fichiers touchés ; rapport structuré ; PR-ready si demandé ; signale écarts profil / type incohérents ; **review pack exploitable** — contenu complet créés, sections/diff modifiés (§7.2.1 template) | **Exécute — ne change pas le scope** ; pas d'arbitrage implicite ; **pas de synthèse-only** dans review pack si fichiers créés/modifiés |
| **Morris** | Gates structurants ; doctrine, scope, version, PR, merge, pilote | Autorité L0 — arbitrage structurant jamais automatisé |

#### 18.2.5 Stop conditions (v2.5 candidate)

| Situation | Comportement Cursor |
|-----------|---------------------|
| Prompt complet, périmètre clair, type + profil cohérents, aucun stop | **Continue** jusqu'au rapport final |
| Ambiguïté mineure, wording non structurant, sans impact doctrine / scope / protected path | **Hypothèse conservatrice** documentée dans le rapport |
| Dépassement scope ; conflit canonique ; incohérence type / profil ; doctrine ; chemin protégé ; action Git distante ; suppression ; v3.0 ; promotion v2.5 implicite ; Bridge / Runner / Git Reader ; réserve bloquante | **Stoppe** — demande Morris |

#### 18.2.6 Readiness proportionnée

| Profil | Readiness |
|--------|-----------|
| Light | Courte — périmètre, diff, garde-fous |
| Standard | Normale — **unique** |
| Critical | Renforcée |
| Capitalization | Adaptée promotion doc / méthode |

**Règle centrale :** **une seule readiness par cycle**, sauf réserve bloquante ou demande Morris explicite.

#### 18.2.7 Réduction des interruptions Morris

> « Moins d'interruptions Morris » signifie **plus de cadrage amont**, pas moins de rigueur.

> Un cycle SFIA doit être suffisamment cadré en amont pour permettre une exécution autonome dans le périmètre, avec escalade Morris uniquement sur arbitrage structurant, dépassement de scope ou réserve bloquante.

Morris n'est pas sollicité pour : choix de wording non structurant ; post-merge Light trivial ; qualification Light évidente (sauf contestation).

**Templates Light / Standard / Critical :** prévus au **Cycle 2** — non créés en Cycle 1.

#### 18.2.8 Repo-informed ChatGPT + review pack proportionné (candidate — capitalisation v2.5 PR 2)

> **Référence détaillée :** `prompts/templates/sfia-cycle-execution-template.md` §2.0, §7 — **candidate** ; ne valide pas v2.5 ; Morris décide.

Ce complément formalise le circuit validé post-MVP Chantiers360 : ChatGPT pré-analyse via Git ; Cursor exécute localement ; review pack proportionné.

##### A. Rôle ChatGPT

ChatGPT :

- **déclenche** le Repo-informed pre-check (§2.0 template) avant génération d'un prompt Cursor repo-based ;
- **consulte Git** lorsque disponible — `main` prime sur les sources projet ChatGPT ;
- **applique** la matrice de routage documentaire :

```text
routing guide → méthode cycles v2.5 → template d'exécution → operating model → guardrails → contexte projet → prompt Cursor
```

- **prépare** le contrat Cursor (prompt d'exécution) ;
- **distingue** observations, options, recommandations et décisions validées ;
- **recommande** le niveau review pack : **light / full** (obligatoire si rapport Cursor — jamais `none`) ;
- **ne décide pas** à la place de Morris.

Si Git n'est pas accessible : signaler explicitement et générer un prompt prudent — Cursor renforce la découverte locale.

##### B. Rôle Cursor

Cursor :

- **exécute** localement le contrat du prompt ;
- **commence toujours** par Local Git Truth Check ;
- **vérifie** que le workspace local correspond au contrat généré ;
- **stoppe** si divergence ;
- **ne découvre pas** un scope large si ChatGPT a déjà cadré le repo ;
- **remplit** le review pack selon le niveau demandé (**light / full** si rapport Cursor) ;
- **ne laisse pas** de stub final si review pack light/full requis ;
- **ne push / PR / merge jamais** sans GO Morris.

##### C. Rôle Git

Git :

- **reste** source de vérité opérationnelle ;
- **supporte** la revue via diff, commits, PR, fichiers versionnés ;
- **peut réduire** la duplication dans le review pack quand ChatGPT y a accès ;
- **remplace** la copie intégrale des documents consultés accessibles Git par des références précises (rôle, sections, extraits courts si utiles).

##### D. Rôle Morris

Morris :

- **valide** les gates structurants ;
- **décide** les arbitrages structurants ;
- **valide** promotion méthode / baseline ;
- **garde** l'autorité sur push / PR / merge quand requis ;
- **peut autoriser** suppression ou purge de `.tmp-sfia-review/chatgpt-review.md` après validation du cycle.

##### E. Trois niveaux persistants

| Niveau | Rôle |
|--------|------|
| **1. Instructions projet ChatGPT** | Déclencheur dans un **nouveau chat** — évite la dépendance à la mémoire conversationnelle |
| **2. Template Git** | Source canonique versionnée — `prompts/templates/sfia-cycle-execution-template.md` |
| **3. Prompt Cursor généré** | Contrat d'exécution — vérifié localement par Local Git Truth Check |

##### F. Review pack proportionné

| Contenu | Règle |
|---------|-------|
| **Documents consultés** | Références, rôles, sections — **pas** de duplication intégrale si accessibles Git |
| **Extraits courts** | Uniquement si utiles à une décision, réserve ou arbitrage |
| **Fichiers créés** | Contenu complet obligatoire — sauf dépassement seuil (~500 light / ~1200 full) |
| **Fichiers modifiés** | Sections complètes modifiées ou diff utile complet |
| **Review pack temporaire** | Hors commit ; purge/suppression possible après validation Morris/ChatGPT |
| **Apprentissages durables** | Document versionné dédié — jamais `.tmp-sfia-review/` comme doctrine permanente |

**Niveaux (si rapport Cursor) :**

| Niveau | Quand |
|--------|-------|
| **light** | Cycle simple/borné ; Git accessible ; diff suffisant |
| **full** | Capitalisation ; modification méthode/template ; décision structurante ; delivery/QA/PR readiness/post-merge selon portée ; sources non accessibles Git |
| **Hors contrat** | Opération read-only **sans** rapport Cursor — pas de review pack / handoff |

> Ancienne valeur `none` : **retirée** pour les cycles Cursor produisant un rapport (template §7.0).

**Anti-stub final :** si light ou full requis, le review pack doit être complété avant le rapport final Cursor — jamais un stub minimal en clôture.

##### G. Instruction projet ChatGPT recommandée

Proposition d'instruction (à ajouter aux projets ChatGPT — hors modification directe Git) :

> Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push branche projet, PR, merge et promotions de baseline. **Règle centrale : RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE (light/full) = PUBLICATION HANDOFF DANS LE MÊME CYCLE (template §7.0, §7.10–§7.11). publish-in-cycle + push L3 borné automatiques. local-only = exception technique uniquement. Aucun `none` / `not required` pour un rapport Cursor.**

Détail opérationnel : template §10.

##### H. Review Handoff Git Branch — obligatoire pour tout rapport Cursor

> **Référence détaillée :** template §7.0, §7.10–§7.11 — règle centrale : `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE`.

Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, sans extension ni copier-coller. Le push L3 borné du handoff est une étape technique répétable incluse dans tout cycle produisant un rapport. Il ne constitue pas une autorisation de push du travail projet.

**ChatGPT :**

- **exige** review pack light/full + handoff **required** + **publish-in-cycle** pour tout prompt produisant un rapport Cursor ;
- **refuse** `none` / `not required` / `local-only` non conforme — **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** ;
- **injecte** la section Review Handoff Git complète (template §5) ;
- **doit consulter** le handoff remote **avant** de répondre ;
- **refuse** un verdict READY si handoff absent, obsolète ou synthesis-only ;
- **signale** `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` si incohérent.

**Cursor :**

- **produit le review pack** puis **publie le handoff** dans le même cycle (template §7.10.1) ;
- **copie, commit, push, vérifie remote** — L3 borné ;
- **affiche** le bloc Instruction ChatGPT obligatoire (template §9.1) ;
- **rapporte** tous les champs handoff §9.1 ;
- **ne merge jamais** `sfia/review-handoff` ;
- en exception technique `local-only` : **`HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED`**.

**Morris :**

- **valide** la règle ;
- **peut interdire explicitement** une publication handoff (exception technique) ;
- **n'a pas** à répéter un micro-GO handoff lorsque publish-in-cycle est conforme à §7.11 ;
- **garde** l'autorité exclusive sur commit/push/PR/merge **projet**.

**Automatisation :** L3 bornée pour tout cycle produisant un rapport Cursor (sauf exception technique documentée).

##### I. Figma visual contract / Figma-to-code (candidate — capitalisation v2.5 PR 3)

> **Référence détaillée :** template §6.6 — **candidate** ; ne valide pas v2.5 ; Morris décide.

Standard transverse pour sécuriser les cycles UX/UI et Figma-to-code — ancrage REX Chantiers360 R-UX-01.

**ChatGPT :**

- **préqualifie** la source Figma si disponible ;
- **exige** un contrat visuel avant prompt delivery UI ;
- **ne valide pas** un alignement visuel sans preuve runtime ;
- **distingue** structure présente vs fidélité visuelle ;
- **refuse** de recommander `NO DELIVERY REQUIRED` sans capture runtime comparée à la frame.

**Cursor :**

- **utilise** MCP Figma si disponible ;
- **confirme explicitement** les frames lues via MCP ;
- **liste** les dimensions / layout observés ;
- **extrait** un contrat visuel **avant** code (§6.6.D) ;
- **applique** le contrat dans le code uniquement dans le périmètre autorisé ;
- **produit** une comparaison runtime **après** modification (§6.6.H) ;
- **ne conclut pas** « aligné » uniquement parce que les composants existent ;
- **ne conclut pas** `READY` si un élément visible Figma manque ;
- **ne conclut pas** `NO DELIVERY REQUIRED` sans comparaison capture Figma vs capture runtime.

**Git :**

- **conserve** docs, diffs, commits et PR ;
- **ne remplace pas** les preuves visuelles ;
- **doit référencer** captures ou observations runtime dans review pack / rapport Cursor.

**Morris :**

- **valide** la source Figma si nécessaire ;
- **arbitre** les écarts visuels ;
- **décide** si un écart est acceptable ou doit être corrigé ;
- **reste autorité** sur tout verdict qualitatif sensible.

**Règle dure :** MCP Figma ne suffit pas — contrat visuel extrait avant code ; revue runtime obligatoire après modification ; aucun verdict « aligné » sans comparaison capture Figma vs capture runtime.

##### J. Git granularity, post-MVP stop rules et post-merge cleanup (candidate — capitalisation v2.5 PR 4)

> **Référence détaillée :** template §6.12.1, §6.14, §6.15 — **candidate** ; ne valide pas v2.5 ; Morris décide.

**ChatGPT :**

- **recommande** le regroupement Git (commits/PR par livrable cohérent) ;
- **signale** la fatigue de gouvernance (micro-PR, micro-cycles répétés) ;
- **distingue** gate décisionnel Morris vs opération Git routinière ;
- **qualifie** les réserves ouvertes : bloquante / acceptée / reportée ;
- **ne lance pas** Option B/C sans GO Morris ;
- **recommande** l'arrêt post-MVP quand conditions §6.15 remplies — Morris tranche.

**Cursor :**

- **ne multiplie pas** commits/PR sans contrat explicite ;
- **regroupe** quand périmètre stable et prompt l'autorise ;
- **post-merge** : exécute vérification intégration **+** cleanup branche PR dans le **même cycle** si conditions §6.12.1 OK ;
- **stoppe** cleanup si `git branch -d` refuse — ne force pas avec `-D` sans GO Morris ;
- **ne supprime jamais** `main`, `sfia/review-handoff`, ou branche non liée à la PR mergée.

**Morris :**

- **décide** arrêt post-MVP, report de réserves, lancement Option B/C ;
- **GO post-merge** inclut cleanup branche PR **si** conditions de sécurité OK ;
- **conserve** autorité sur gates structurants, scope, baseline.

**Git :**

- **`main`** reste source de vérité ;
- **granularité proportionnée** — pas une PR par micro-ajustement sans justification ;
- **post-merge check simple** ne génère pas de nouvelle PR sauf anomalie.

## 19. Décision

Le modèle ChatGPT ↔ Cursor est reconnu comme **fondation opérationnelle SFIA v1.1**.

Il constitue le pont entre :

- la méthode Fast Track actuelle ;
- les futurs moteurs d'automatisation ;
- la couche knowledge Notion ;
- la future SFIA v2.0.

## 20. Next Steps

1. Valider ce document ;
2. valider `sfia-rules-and-guardrails.md` ;
3. valider `sfia-knowledge-layer.md` et sa Documentation Routing Matrix ;
4. consolider les familles de prompts ;
5. créer le Prompt Generation Engine ;
6. créer le Repository Execution Engine ;
7. créer le Validation Engine ;
8. préparer ensuite seulement le chantier Notion.
