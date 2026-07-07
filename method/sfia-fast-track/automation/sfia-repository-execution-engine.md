---
status: foundation
version: v1.1
previous: sfia-automation-architecture.md
updated_after: SFIA foundation v1.1 consolidation
scope: repository execution engine
---

# SFIA Repository Execution Engine v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** Repository execution engine

## 1. Objectif

Ce document définit le **SFIA Repository Execution Engine v1.1**.

Le Repository Execution Engine encadre l'exécution repository d'un prompt Cursor généré selon les règles SFIA.

Il transforme un contrat d'exécution Cursor en modifications repository contrôlées, traçables et validables.

Il ne se limite pas à modifier des fichiers.

Il garantit que l'exécution respecte :

- le repository Git comme source de vérité opérationnelle ;
- le périmètre du prompt ;
- les sources de référence ;
- le dossier cible ;
- les chemins interdits ;
- les règles de commit ;
- les contrôles demandés ;
- la validation humaine ;
- les règles de PR et post-merge ;
- les garde-fous Notion et automation.

## 2. Positionnement v1.1

En SFIA v1.1, le Repository Execution Engine est une **spec moteur**, pas encore un moteur autonome exécutable.

Il appartient à la trajectoire suivante :

| Niveau | Description |
|--------|-------------|
| Niveau 0 | Exécution manuelle assistée dans Cursor |
| Niveau 1 | Prompts standardisés et exécution contrôlée |
| Niveau 2 | Specs moteurs semi-formalisées |
| Niveau 3 | Orchestration contrôlée |
| Niveau 4 | SFIA v2.0 automatisée |

Le Repository Execution Engine intervient après :

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`

Il prépare :

- `method/sfia-fast-track/automation/sfia-validation-engine.md`

Le Prompt Generation Engine produit le contrat d'exécution.

Le Repository Execution Engine exécute ce contrat dans le repository.

Le Validation Engine contrôlera ensuite le prompt, le diff, le résultat, les réserves et la conformité globale.

## 3. Engineering Principles Compliance

Le Repository Execution Engine doit respecter :

- `docs/foundation/sfia-engineering-principles.md`

Il applique notamment les principes suivants :

| Principe | Application au Repository Execution Engine |
|----------|--------------------------------------------|
| Repository first | Git est la source de vérité opérationnelle |
| Prompt as contract | Cursor exécute uniquement le contrat reçu |
| Human validation first | Pas de push, PR ou merge sans validation |
| Guardrails before execution | Les chemins interdits sont protégés avant action |
| Documentation routing by default | Les livrables sont placés dans le dossier cible |
| Capitalization by default | Les résultats doivent être traçables et capitalisables |
| Controlled automation | L'exécution reste non autonome en v1.1 |
| Quality by evidence | Le diff, les contrôles et le commit servent de preuves |

## 4. Documents sources obligatoires

Le Repository Execution Engine s'appuie sur les documents suivants :

| Document | Rôle |
|----------|------|
| `docs/foundation/sfia-engineering-principles.md` | Norme supérieure d'exécution |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Contrat d'exécution produit en entrée |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Boucle ChatGPT ↔ Cursor |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles et garde-fous |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Dossier cible et routage documentaire |
| `docs/architecture/sfia-repository-blueprint.md` | Structure repository et source de vérité |
| `docs/architecture/sfia-delivery-pipeline.md` | Cycle, PR, post-merge et delivery |
| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision automation et moteur repository execution |
| `method/sfia-fast-track/checklists/` | Checklists de validation et garde-fous |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` | Handoff documentaire v2.4 — non implémenté comme agent |

## 5. Inputs

Le Repository Execution Engine prend en entrée :

| Input | Description |
|-------|-------------|
| Prompt Cursor | Contrat d'exécution complet |
| Repository | Chemin du repository cible |
| Branche courante | Branche active attendue |
| Dernier commit attendu | Commit attendu avant exécution |
| Sources à lire | Documents sources définis par le prompt |
| Dossier cible | Dossier où produire ou modifier les livrables |
| Fichiers à modifier | Fichiers autorisés |
| Fichiers interdits | Chemins interdits ou sensibles |
| Actions attendues | Liste d'actions à exécuter |
| Commandes de vérification | Commandes à lancer avant ou après modification |
| Commit attendu | Message ou logique de commit |
| Contraintes | No push, no PR, no merge, no Notion sync, etc. |
| Validation attendue | GO, COMPLETE, réserves, etc. |

## 6. Outputs

Le Repository Execution Engine produit :

| Output | Description |
|--------|-------------|
| Fichiers modifiés | Liste des fichiers modifiés ou créés |
| Diff contrôlé | Changements vérifiables |
| Commandes exécutées | Vérifications réalisées |
| Résultats de commandes | Sorties utiles ou alertes |
| Commit local | Commit créé si demandé et validé par le prompt |
| Compte rendu d'exécution | Résumé structuré de l'exécution |
| Liste des chemins touchés | Contrôle de périmètre |
| Alertes | Écarts, blocages, réserves |
| Statut de sortie | COMPLETE, COMPLETE AVEC RÉSERVES, INCOMPLETE ou NO-GO |
| Prochaine étape proposée | Correction, validation, PR, post-merge, autre cycle |

## 7. Workflow d'exécution repository

Le Repository Execution Engine suit le workflow suivant :

1. Lire le prompt Cursor ;
2. vérifier le repository cible ;
3. vérifier la branche courante ;
4. vérifier le dernier commit attendu ;
5. vérifier `git status --short` ;
6. identifier les sources à lire ;
7. identifier les fichiers et dossiers cibles ;
8. identifier les chemins interdits ;
9. lire les sources ;
10. appliquer les modifications dans le périmètre ;
11. vérifier le diff ;
12. vérifier les chemins touchés ;
13. exécuter les commandes de vérification ;
14. préparer le commit si demandé ;
15. produire un compte rendu structuré ;
16. signaler les réserves ou blocages ;
17. attendre validation humaine pour push / PR / merge.

## 8. Pré-vérifications obligatoires

Avant toute modification, le moteur doit vérifier :

```bash
git branch --show-current
git status --short
git log --oneline --decorate -20
```

Selon le prompt, il doit également vérifier :

```bash
git rev-parse --short HEAD
```

Le moteur doit comparer :

- branche attendue ;
- commit attendu ;
- working tree attendu ;
- fichiers non suivis attendus ;
- chemins interdits.

Si une anomalie bloquante est détectée, l'exécution doit s'arrêter ou demander clarification.

## 9. Règles d'exécution

| Règle | Description |
|-------|-------------|
| Execute only the prompt | Ne pas improviser hors contrat |
| Verify before modify | Vérifier branche, commit et status avant action |
| Read before write | Lire les sources avant modification |
| Target folder only | Produire dans le dossier cible |
| Forbidden paths protected | Ne jamais toucher aux chemins interdits |
| No destructive cleanup | Pas de suppression brutale |
| Use git mv | Utiliser `git mv` pour les déplacements |
| Diff before commit | Vérifier le diff avant commit |
| Checks before report | Exécuter les contrôles demandés |
| No push by default | Ne pas push sans validation humaine |
| No PR by default | Ne pas créer de PR sans validation humaine |
| No merge ever | Ne jamais merger automatiquement |
| No raw Notion sync | Ne jamais lancer de sync Notion |
| Report everything | Restituer fichiers, diff, contrôles, réserves |

## 10. Chemins protégés standard

Le Repository Execution Engine doit distinguer deux niveaux de chemins protégés :

1. **Chemins protégés génériques SFIA** ;
2. **Chemins protégés spécifiques au projet ou au cycle en cours**.

Cette distinction évite de figer le moteur sur un projet particulier.

Le moteur définit les catégories de chemins sensibles.

Le prompt Cursor du cycle définit les chemins exacts applicables au contexte courant.

### 10.1 Chemins protégés génériques SFIA

Les catégories suivantes sont protégées par défaut, sauf demande explicite, périmètre clair et validation humaine :

- code applicatif ;
- backend ;
- API ;
- authentification ;
- CI/CD ;
- workflows GitHub ;
- outils internes sensibles ;
- scripts de synchronisation ;
- payloads générés ;
- exports de design non suivis ;
- fichiers temporaires ;
- fichiers générés automatiquement ;
- fichiers de configuration sensibles ;
- secrets, clés ou variables d'environnement.

Exemples de patterns génériques :

```text
<project>/app/
<project>/backend/
<project>/api/
<project>/auth/
.github/workflows/
tools/<sensitive-tool>/
<project>/design/exports/
<project>/03-design/exports/
exports/generated/
*.env
*.secret
```

Ces patterns sont indicatifs.

Ils doivent être adaptés par le prompt au repository, au projet et au cycle concernés.

### 10.2 Chemins protégés spécifiques au projet

Chaque prompt Cursor doit déclarer les chemins protégés applicables au projet courant.

Ces chemins spécifiques doivent être déduits :

- du Repository Blueprint ;
- du projet concerné ;
- du type de cycle ;
- du périmètre autorisé ;
- des garde-fous applicables ;
- des zones sensibles identifiées par l'humain.

Exemple pour Interv360 :

```text
projects/interv360/app/
projects/interv360/backend/
.github/workflows/
tools/cmp-001/
projects/interv360/03-design/exports/
```

Ces chemins ne constituent pas un standard universel.

Ils illustrent uniquement les chemins protégés du projet Interv360 dans le contexte actuel.

### 10.3 Conditions de modification

Un chemin protégé ne peut être modifié que si toutes les conditions suivantes sont réunies :

1. le prompt le demande explicitement ;
2. le chemin appartient au périmètre du cycle ;
3. la modification est justifiée ;
4. la validation humaine a été obtenue ;
5. les contrôles demandés sont exécutés ;
6. le diff est relu avant commit.

Règle :

> En cas de doute, ne pas modifier.

## 11. Gestion des fichiers non suivis

Les fichiers non suivis doivent être analysés avant commit.

| Cas | Action |
|-----|--------|
| Fichier non suivi attendu | Le signaler et ne pas le toucher sauf demande explicite |
| Export Figma non suivi | Ne jamais l'ajouter par défaut |
| Fichier généré par le cycle | L'ajouter seulement s'il fait partie du périmètre |
| Fichier inconnu | Demander clarification ou l'exclure |
| Artefact temporaire | Ne pas l'ajouter au commit |

Exemple connu :

```text
?? projects/interv360/03-design/exports/
```

Ce chemin est attendu et ne doit pas être ajouté.

## 12. Gestion du diff

Avant commit, le moteur doit produire ou vérifier :

```bash
git diff --stat
git diff --name-only
```

Pour chaque fichier modifié, le moteur doit vérifier :

- appartenance au périmètre ;
- cohérence avec le dossier cible ;
- absence de chemin interdit ;
- absence de modification accidentelle ;
- cohérence documentaire ;
- absence de changement code non demandé.

## 13. Règles de commit

Un commit SFIA doit être :

- ciblé ;
- lisible ;
- lié à un objectif unique ;
- cohérent avec le cycle ;
- sans chemins interdits ;
- sans fichiers temporaires ;
- sans exports non suivis ;
- sans modification hors périmètre.

Format recommandé :

```text
docs: <action> <objet SFIA>
```

Exemples :

```text
docs: specify SFIA repository execution engine
docs: update SFIA foundation references
docs: consolidate SFIA prompt catalog
```

Le commit ne doit être créé que si :

- le prompt le demande ;
- le diff est cohérent ;
- les chemins interdits sont respectés ;
- les contrôles demandés ont été exécutés ;
- aucune réserve bloquante n'est présente.

## 14. PR readiness

Le Repository Execution Engine ne crée pas automatiquement de PR.

Il peut préparer une synthèse de PR si demandé.

Une PR est prête uniquement si :

| Critère | Attendu |
|---------|---------|
| Branche correcte | Oui |
| Commit cohérent | Oui |
| Diff contrôlé | Oui |
| Chemins interdits non touchés | Oui |
| Documents attendus présents | Oui |
| Contrôles exécutés | Oui |
| Réserves identifiées | Oui |
| Pas de Notion sync | Oui |
| Validation humaine obtenue | Requise avant création PR |

## 15. Post-merge readiness

Le Repository Execution Engine ne documente le post-merge que si le cycle ou le prompt le demande.

Un post-merge status doit inclure :

- PR ;
- branche source ;
- branche cible ;
- commit d'intégration ;
- décision ;
- réserves éventuelles ;
- garde-fous ;
- éléments capitalisés ;
- prochaine étape.

Une PR significative n'est pas considérée entièrement clôturée tant que le post-merge status ou une trace équivalente n'a pas été produit.

## 16. Statuts de sortie

Le Repository Execution Engine doit produire un statut de sortie :

| Statut | Signification |
|--------|---------------|
| COMPLETE | Exécution terminée sans réserve significative |
| COMPLETE AVEC RÉSERVES | Exécution terminée avec réserves non bloquantes |
| INCOMPLETE | Exécution partielle ou non finalisée |
| NO-GO | Exécution bloquée ou non conforme |
| BLOCKED | Action impossible sans arbitrage |
| NEEDS HUMAN VALIDATION | Action prête mais nécessite validation humaine |

Les réserves doivent être classées selon :

- bloquantes ;
- mineures ;
- résiduelles ;
- P0 ;
- P1 ;
- P2.

## 17. Compte rendu d'exécution standard

Le compte rendu Cursor doit afficher :

```text
Résumé :
- ...

Fichiers modifiés :
- ...

Fichiers créés :
- ...

Commandes exécutées :
- ...

Résultats :
- ...

Chemins interdits :
- OK / KO

Fichiers non suivis :
- ...

Commit :
- <hash> <message> ou non créé

Statut :
- COMPLETE / COMPLETE AVEC RÉSERVES / INCOMPLETE / NO-GO

Réserves :
- ...

Prochaine étape :
- ...
```

## 18. Validation criteria

Une exécution repository est valide si :

| Critère | Attendu |
|---------|---------|
| Branche vérifiée | Oui |
| Commit attendu vérifié | Oui |
| Working tree compris | Oui |
| Sources lues | Oui |
| Dossier cible respecté | Oui |
| Hors périmètre respecté | Oui |
| Chemins interdits non touchés | Oui |
| Diff cohérent | Oui |
| Contrôles exécutés | Oui |
| Commit conforme | Oui si demandé |
| Pas de push / PR / merge auto | Oui |
| Compte rendu structuré | Oui |

## 19. Anti-patterns

| Anti-pattern | Risque |
|--------------|--------|
| Exécution sans git status | Modification sur base instable |
| Exécution sans vérifier la branche | Mauvaise branche modifiée |
| Exécution sans vérifier le commit | Base de travail incorrecte |
| Modification hors scope | Dérive de périmètre |
| Chemin interdit touché | Risque projet ou plateforme |
| Suppression brutale | Perte historique |
| Fichier non suivi ajouté par erreur | Pollution du commit |
| Commit trop large | Revue difficile |
| Diff non relu | Erreur non détectée |
| Commande non tracée | Résultat non auditable |
| Push automatique | Validation humaine contournée |
| PR automatique | Revue humaine court-circuitée |
| Merge automatique | Gouvernance contournée |
| Sync Notion automatique | Publication non gouvernée |

## 20. Maturity Model

| Niveau | Critère |
|--------|---------|
| Draft | Workflow d'exécution défini |
| Candidate | Utilisé dans des cycles manuels ChatGPT ↔ Cursor |
| Validated | Appliqué sur plusieurs types de cycles sans dérive |
| Gold | Relié au Prompt Generation Engine et au Validation Engine |

**Statut v1.1 :**

Candidate — specification ready for use in manual ChatGPT ↔ Cursor repository cycles.

## 21. Relation avec les autres moteurs

Le Repository Execution Engine consomme les prompts produits par :

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`

Il sera contrôlé par :

- `method/sfia-fast-track/automation/sfia-validation-engine.md`

Il contribue à :

- `method/sfia-fast-track/automation/sfia-documentation-engine.md`

Relation logique :

```text
Prompt Generation Engine
→ Repository Execution Engine
→ Validation Engine
→ Documentation / Knowledge capitalization
```

## 22. Risques

| Risque | Description | Mitigation |
|--------|-------------|------------|
| Mauvaise branche | Exécution sur une branche incorrecte | Vérifier branche avant action |
| Base instable | Working tree non compris | Vérifier `git status --short` |
| Commit attendu différent | Exécution sur mauvais état | Vérifier HEAD |
| Chemin interdit touché | Régression ou pollution repo | Contrôle des chemins |
| Commit trop large | Revue difficile | One cycle, one useful result |
| PR prématurée | Gouvernance court-circuitée | Human validation first |
| Post-merge absent | Perte de traçabilité | Post-merge readiness |
| Notion déclenché trop tôt | Publication non contrôlée | No raw Notion sync |

## 23. Complément SFIA v2.4 — handoff documentaire et exécution

> **Référence :** `sfia-v2.4-consolidation-operating-efficiency-standard.md` §10 — handoff **documentaire uniquement** ; **aucun agent handoff réel** ; v3.0 immediate NO-GO.

### 23.1 Handoff ChatGPT ↔ Cursor ↔ Git

| Acteur | Rôle v2.4 |
|--------|-----------|
| **ChatGPT** | Cadre, challenge, route, prépare le prompt, analyse les rapports |
| **Cursor** | Exécute le périmètre **borné** du prompt |
| **Git** | Trace commits, branches, historique — source de vérité |
| **Morris** | Décide gates structurants, merge, clôture, élargissement périmètre |

Le handoff est **borné**, **repo-first**, **non autonome** — trajectoire agent future **non implémentée**.

### 23.2 Rôle Cursor (rappel v2.4)

| Autorisé | Interdit |
|----------|----------|
| Exécuter le périmètre du prompt | Déduire profil, QA ou périmètre manquant |
| Produire un rapport structuré | Push sans demande explicite |
| Commit local si explicitement demandé | Créer PR / merge |
| Contrôles L1 read-only | Décider d'un gate Morris |
| | Modifier statut documentaire structurant sans Morris |

### 23.3 Rapport Cursor standardisé v2.4

Format minimal attendu :

1. **Branche / HEAD**
2. **Base** (commit de référence)
3. **Fichiers modifiés**
4. **Périmètre / hors périmètre**
5. **Garde-fous respectés**
6. **Validations locales**
7. **Réserves / alertes**
8. **PR readiness** (READY FOR REVIEW / READY WITH RESERVES / NOT READY)
9. **Décision Morris attendue**

### 23.4 Niveaux L1 / L2 / L3 borné

| Niveau | Rôle exécution | Gate Morris |
|--------|----------------|-------------|
| **L1** | Contrôle read-only — diff, liens, statuts | Non — sauf écart bloquant |
| **L2** | Génération guidée — rapports, synthèses | Non — sauf structurant |
| **L3** | Exécution **bornée** — périmètre explicite uniquement | Si structurant ou élargissement |
| **L4** | Orchestration — **hors patch courant** | Obligatoire |
| **L5 global** | **Interdit** | — |

Cursor **ne décide pas seul** d'une mise à jour documentaire L3 ni d'un élargissement de périmètre.

## 24. Related Documents

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/checklists/`

## 25. Décision

Le SFIA Repository Execution Engine v1.1 est défini comme la spécification du moteur chargé d'exécuter un prompt Cursor dans le repository de manière contrôlée, traçable et validable.

En v1.1, il reste non autonome et s'inscrit dans la boucle manuelle assistée ChatGPT ↔ Cursor.

Il devient la référence pour encadrer :

- les modifications repository ;
- la protection des chemins interdits ;
- les commits ;
- les préparations PR ;
- les statuts post-merge ;
- les comptes rendus d'exécution Cursor.

## 26. Next Steps

1. Valider ce document ;
2. utiliser ce moteur pour encadrer les prochains cycles repository ;
3. créer `sfia-validation-engine.md` ;
4. mettre à jour `sfia-automation-architecture.md` après création des trois specs moteurs ;
5. consolider les checklists d'exécution repository.
