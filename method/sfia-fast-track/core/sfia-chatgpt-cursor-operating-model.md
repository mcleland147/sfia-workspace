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
       → Retour Cursor → ChatGPT (validation) → Humain (GO/NO-GO)
       → Commit → PR → Merge → Post-merge → Capitalisation
       → [Notion preparation — optional, after validation]
```

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

Extraits de `sfia-global-capitalization.md` §13 :

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
