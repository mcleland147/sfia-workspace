---
status: foundation
version: v1.1
previous: sfia-automation-architecture.md
updated_after: SFIA foundation v1.1 consolidation
scope: prompt generation engine
---

# SFIA Prompt Generation Engine v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** Prompt generation engine

## 1. Objectif

Ce document définit le **SFIA Prompt Generation Engine v1.1**.

Le Prompt Generation Engine transforme une intention humaine, un besoin de cycle ou une demande documentaire en prompt Cursor structuré, conforme, routé et contrôlable.

Il ne se limite pas à produire du texte.

Il produit un **contrat d'exécution SFIA**.

Ce contrat doit permettre à Cursor d'exécuter une action dans le repository avec :

- un objectif clair ;
- un périmètre explicite ;
- des sources de référence ;
- un dossier cible ;
- des garde-fous ;
- des chemins interdits ;
- des actions attendues ;
- des contrôles ;
- un résultat attendu ;
- une validation humaine.

## 2. Positionnement v1.1

En SFIA v1.1, le Prompt Generation Engine est une **spec moteur**, pas encore un moteur autonome exécutable.

Il appartient à la trajectoire suivante :

| Niveau | Description |
|--------|-------------|
| Niveau 0 | Boucle manuelle assistée ChatGPT ↔ Cursor |
| Niveau 1 | Prompts standardisés et familles de prompts gouvernées |
| Niveau 2 | Specs moteurs semi-formalisées |
| Niveau 3 | Orchestration contrôlée |
| Niveau 4 | SFIA v2.0 automatisée |

Le Prompt Generation Engine est le premier moteur P1 à spécifier car il alimente directement :

- la boucle ChatGPT ↔ Cursor ;
- le Repository Execution Engine ;
- le Validation Engine ;
- la production documentaire ;
- la capitalisation ;
- les futurs cycles Notion.

## 3. Engineering Principles Compliance

Le Prompt Generation Engine doit respecter :

- `docs/foundation/sfia-engineering-principles.md`

Il applique notamment les principes suivants :

| Principe | Application au Prompt Generation Engine |
|----------|------------------------------------------|
| One cycle, one useful result | Un prompt doit viser un objectif utile et identifiable |
| Repository first | Le prompt doit être ancré dans le repository |
| Prompt as contract | Le prompt est un contrat d'exécution |
| Human validation first | Le prompt ne doit pas contourner la validation humaine |
| Guardrails before execution | Les garde-fous sont définis avant action |
| Documentation routing by default | Sources et dossier cible doivent être explicités |
| Capitalization by default | Le type de capitalisation attendu doit être défini |
| Controlled automation | Le moteur reste non autonome en v1.1 |
| Quality by evidence | Les prompts doivent prévoir des contrôles et preuves |

## 4. Documents sources obligatoires

Le Prompt Generation Engine s'appuie sur les documents suivants :

| Document | Rôle |
|----------|------|
| `docs/foundation/sfia-engineering-principles.md` | Norme supérieure d'exécution |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Structure du prompt et boucle ChatGPT ↔ Cursor |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles et garde-fous opérationnels |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Documentation Routing Matrix |
| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision automation et moteur prompt generation |
| `prompts/prompt-catalog.md` | Familles et prompts existants |
| `method/sfia-fast-track/templates/` | Templates réutilisables |
| `method/sfia-fast-track/checklists/` | Checklists de validation |

## 5. Inputs

Le Prompt Generation Engine prend en entrée :

| Input | Description |
|-------|-------------|
| Intention humaine | Besoin exprimé par l'utilisateur |
| Phase / contexte SFIA | Phase déterminée par la Documentation Routing Matrix |
| Objectif du cycle | Résultat utile attendu |
| Repository | Chemin du repository cible |
| Branche | Branche courante ou à créer |
| Dernier commit attendu | Référence de contrôle avant exécution |
| Sources de référence | Documents à lire avant production |
| Dossier cible | Dossier à alimenter |
| Type de capitalisation | Foundation, method, practice, prompt, template, audit, REX, roadmap, archive |
| Périmètre | Actions autorisées |
| Hors périmètre | Actions explicitement exclues |
| Chemins interdits | Zones à ne pas toucher |
| Garde-fous applicables | Règles repository, Notion, automation, UI, backend, CI |
| Validation attendue | GO, GO avec réserves, NO-GO, COMPLETE, etc. |
| Commit attendu | Message de commit ou règle de commit |
| Contraintes particulières | Pas de push, pas de PR, pas de Notion sync, etc. |

## 6. Outputs

Le Prompt Generation Engine produit :

| Output | Description |
|--------|-------------|
| Prompt Cursor complet | Contrat d'exécution prêt à utiliser |
| Sources à lire | Liste explicite des documents de référence |
| Dossier cible | Destination du livrable |
| Fichiers à modifier | Liste ou périmètre des fichiers autorisés |
| Fichiers interdits | Liste ou patterns des chemins interdits |
| Actions attendues | Instructions opérationnelles |
| Commandes de vérification | Contrôles à exécuter |
| Critères de validation | Conditions de réussite |
| Commit attendu | Message ou logique de commit |
| Résultat attendu | Format du compte rendu demandé |
| Confirmation de contraintes | No push, no PR, no Notion sync, no forbidden paths |

## 7. Structure obligatoire d'un prompt SFIA

Un prompt Cursor généré par SFIA doit contenir au minimum :

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

Cette structure est dérivée de :

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

## 8. Workflow de génération

Le Prompt Generation Engine suit le workflow suivant :

1. Recevoir l'intention humaine ;
2. qualifier le besoin ;
3. identifier la phase ou le contexte SFIA ;
4. consulter la Documentation Routing Matrix ;
5. déterminer les sources de référence ;
6. déterminer le dossier cible ;
7. déterminer le type de capitalisation attendu ;
8. identifier les garde-fous applicables ;
9. identifier les chemins interdits ;
10. déterminer les actions attendues ;
11. ajouter les commandes de vérification ;
12. définir la validation attendue ;
13. produire le prompt Cursor ;
14. vérifier la conformité aux Engineering Principles ;
15. soumettre le prompt à validation humaine si le cycle est sensible.

## 9. Typologie des prompts générés

| Famille de prompt | Usage | Sources principales |
|-------------------|-------|---------------------|
| Cadrage | Ouvrir ou cadrer un cycle | Operating Model, Rules, Knowledge Layer |
| Audit | Analyser un socle existant | Decision Engine, checklists, docs sources |
| Création documentaire | Créer un document | Knowledge Layer, Routing Matrix, templates |
| Consolidation | Enrichir ou stabiliser un document | Engineering Principles, docs existants |
| Cleanup | Nettoyer ou restructurer | Repository Blueprint, Rules & Guardrails |
| Validation | Contrôler un résultat | Decision Engine, validation checklist |
| PR preparation | Préparer une PR | Delivery Pipeline, Repository Blueprint |
| Post-merge | Documenter une clôture | Decision Engine, Delivery Pipeline |
| REX | Capitaliser un apprentissage | Knowledge Layer, project evidence |
| Notion preparation | Préparer mapping ou dry-run | Knowledge Layer, Notion publication rules |

## 10. Règles de génération

Le Prompt Generation Engine applique les règles suivantes :

| Règle | Description |
|-------|-------------|
| Engineering Principles first | Le prompt doit respecter les principes d'ingénierie SFIA |
| One prompt, one useful result | Le prompt doit viser un résultat utile |
| Prompt as contract | Le prompt doit être assez complet pour encadrer Cursor |
| Documentation routing before prompt | Le prompt doit utiliser la Documentation Routing Matrix |
| Sources explicit | Les sources à lire doivent être listées |
| Target folder explicit | Le dossier cible doit être indiqué |
| Out of scope explicit | Le hors périmètre doit être écrit |
| Forbidden paths explicit | Les chemins interdits doivent être indiqués |
| Human validation required | Pas de push, PR, merge ou publication sans validation |
| No raw Notion sync | Aucun prompt ne doit déclencher une sync brute Notion |
| No destructive cleanup | Pas de suppression brutale sans justification |
| Verification commands required | Les contrôles doivent être listés |
| Expected report required | Le retour attendu de Cursor doit être précisé |

## 11. Guardrails

Un prompt généré doit intégrer les garde-fous applicables.

Garde-fous standard :

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
- toujours vérifier les chemins interdits.

## 12. Décisions et réserves

Le Prompt Generation Engine doit prévoir la décision attendue ou le format de validation attendu.

Décisions possibles :

| Décision | Usage |
|----------|-------|
| GO | Continuer ou livrer |
| GO avec réserves | Continuer avec réserves documentées |
| NO-GO | Bloquer ou reprendre |
| COMPLETE | Travail complet |
| COMPLETE AVEC RÉSERVES | Exploitable avec réserves |
| INCOMPLETE | Insuffisant |
| FONDATIONS IDENTIFIÉES | Socle repéré |
| FONDATIONS PARTIELLES | Socle présent mais à consolider |
| FONDATIONS INSUFFISANTES | Socle non suffisant |

Les réserves doivent pouvoir être classées en :

- bloquantes ;
- mineures ;
- résiduelles ;
- P0 ;
- P1 ;
- P2.

## 13. Exemple de prompt généré

Exemple minimal générique :

```text
Objectif :
Créer ou mettre à jour <livrable> dans le cadre de <phase/contexte SFIA>.

Repo :
/Users/morris/Projects/sfia-workspace

Branche :
<branche>

Dernier commit attendu :
<commit>

Contexte :
<contexte métier / méthode / projet>

Phase / contexte SFIA :
<phase issue de la Documentation Routing Matrix>

Sources de référence :
- <source 1>
- <source 2>
- <source 3>

Dossier cible :
<dossier cible>

Type de capitalisation attendu :
<foundation / method / practice / prompt / template / audit / REX / roadmap / archive>

Périmètre :
- <action autorisée 1>
- <action autorisée 2>

Hors périmètre :
- <exclusion 1>
- <exclusion 2>

Fichiers à lire :
- <fichier 1>
- <fichier 2>

Fichiers à modifier :
- <fichier cible 1>

Fichiers interdits :
- projects/interv360/app/
- projects/interv360/backend/
- .github/workflows/
- tools/cmp-001/
- projects/interv360/03-design/exports/

Actions attendues :
1. Vérifier l'état courant.
2. Lire les sources.
3. Produire ou modifier le livrable.
4. Vérifier les chemins interdits.
5. Préparer le commit demandé.
6. Restituer un compte rendu structuré.

Commandes de vérification :
git status --short
git diff --stat
git diff --name-only <base>..HEAD

Commit attendu :
<message de commit>

Résultat attendu :
Afficher :
- fichiers modifiés ;
- résumé des changements ;
- contrôles exécutés ;
- chemins interdits non touchés ;
- commit créé ;
- pas de push ;
- pas de PR ;
- réserves éventuelles.
```

## 14. Critères de validation d'un prompt généré

Un prompt généré est valide si :

| Critère | Attendu |
|---------|---------|
| Objectif clair | Un seul résultat utile |
| Phase SFIA identifiée | Phase ou contexte explicite |
| Sources listées | Documents de référence indiqués |
| Dossier cible indiqué | Destination claire |
| Hors périmètre explicite | Exclusions définies |
| Chemins interdits indiqués | Zones sensibles protégées |
| Garde-fous présents | Règles adaptées au cycle |
| Commandes de vérification présentes | Contrôles reproductibles |
| Validation humaine respectée | Pas de push / PR / merge automatique |
| Notion protégé | Pas de sync ou publish non validé |
| Résultat attendu clair | Retour Cursor structuré |

## 15. Anti-patterns

| Anti-pattern | Risque |
|--------------|--------|
| Prompt vague | Cursor improvise |
| Prompt sans sources | Production non traçable |
| Prompt sans dossier cible | Livrable mal rangé |
| Prompt sans hors périmètre | Scope creep |
| Prompt trop large | Cycle illisible |
| Prompt sans chemins interdits | Risque de modification sensible |
| Prompt sans vérifications | Résultat non contrôlable |
| Prompt qui push ou crée une PR automatiquement | Validation humaine contournée |
| Prompt qui lance Notion | Publication non gouvernée |
| Prompt qui mélange UI, backend et documentation | Dérive de périmètre |
| Prompt sans décision attendue | Retour difficile à exploiter |

## 16. Maturity Model

| Niveau | Critère |
|--------|---------|
| Draft | Structure du moteur définie |
| Candidate | Utilisé pour générer quelques prompts conformes |
| Validated | Utilisé sur plusieurs familles de cycles |
| Gold | Relié au Repository Execution Engine et au Validation Engine |

**Statut v1.1 :**

Candidate — specification ready for use in manual ChatGPT ↔ Cursor cycles.

## 17. Relation avec les futurs moteurs

Le Prompt Generation Engine alimente :

- Repository Execution Engine ;
- Validation Engine ;
- Documentation Engine.

Le Repository Execution Engine exécutera les prompts générés.

Le Validation Engine contrôlera :

- la complétude du prompt ;
- le respect des Engineering Principles ;
- le respect des Rules & Guardrails ;
- l'usage de la Documentation Routing Matrix ;
- le respect du hors périmètre ;
- les résultats d'exécution.

## 18. Risques

| Risque | Description | Mitigation |
|--------|-------------|------------|
| Sur-génération | Prompt trop lourd ou trop large | One cycle, one useful result |
| Sous-spécification | Prompt incomplet | Structure obligatoire |
| Mauvais routage | Livrable produit au mauvais endroit | Documentation Routing Matrix |
| Conflit de règles | Sources contradictoires | Engineering Principles + Decision Engine |
| Automatisation prématurée | Prompt traité comme moteur autonome | Human validation first |
| Dérive Notion | Publication déclenchée trop tôt | No raw Notion sync |
| Dérive repository | Chemins interdits touchés | Guardrails + verification commands |

## 19. Related Documents

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/templates/`
- `method/sfia-fast-track/checklists/`

## 20. Décision

Le SFIA Prompt Generation Engine v1.1 est défini comme la spécification du moteur chargé de transformer une intention humaine ou un besoin de cycle en prompt Cursor conforme, routé, contrôlable et validable.

En v1.1, il reste non autonome et s'inscrit dans la boucle manuelle assistée ChatGPT ↔ Cursor.

Il devient la référence pour créer, évaluer et améliorer les prompts Cursor SFIA.

## 21. Next Steps

1. Valider ce document ;
2. utiliser ce moteur pour générer les prochains prompts SFIA ;
3. créer `sfia-repository-execution-engine.md` ;
4. créer `sfia-validation-engine.md` ;
5. mettre à jour `sfia-automation-architecture.md` après création des trois specs moteurs ;
6. consolider le prompt catalog.
