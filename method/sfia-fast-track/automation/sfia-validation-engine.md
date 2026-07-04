---
status: foundation
version: v1.1
previous: sfia-automation-architecture.md
updated_after: SFIA foundation v1.1 consolidation
scope: validation engine
---

# SFIA Validation Engine v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** Validation engine

## 1. Objectif

Ce document définit le **SFIA Validation Engine v1.1**.

Le Validation Engine contrôle la conformité d'un cycle SFIA, d'un prompt Cursor, d'une exécution repository, d'un diff, d'un commit, d'un livrable, d'une PR, d'un post-merge, d'une capitalisation ou d'une préparation Notion.

Il ne se limite pas à dire si un fichier existe.

Il produit une décision SFIA explicite, traçable et exploitable.

Il permet de répondre à trois questions :

1. le résultat est-il conforme aux règles SFIA ?
2. les réserves sont-elles identifiées et classées ?
3. quelle décision doit être prise ensuite ?

## 2. Positionnement v1.1

En SFIA v1.1, le Validation Engine est une **spec moteur**, pas encore un moteur autonome exécutable.

Il appartient à la trajectoire suivante :

| Niveau | Description |
|--------|-------------|
| Niveau 0 | Validation manuelle assistée par ChatGPT |
| Niveau 1 | Checklists et critères standardisés |
| Niveau 2 | Specs moteurs semi-formalisées |
| Niveau 3 | Orchestration contrôlée |
| Niveau 4 | SFIA v2.0 automatisée |

Le Validation Engine intervient après :

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`

Le Prompt Generation Engine produit le contrat d'exécution.

Le Repository Execution Engine exécute le contrat dans Git.

Le Validation Engine contrôle :

- le prompt ;
- l'exécution ;
- le diff ;
- le commit ;
- le livrable ;
- le compte rendu ;
- les réserves ;
- la décision de suite.

## 3. Engineering Principles Compliance

Le Validation Engine doit respecter :

- `docs/foundation/sfia-engineering-principles.md`

Il applique notamment les principes suivants :

| Principe | Application au Validation Engine |
|----------|----------------------------------|
| One cycle, one useful result | La validation contrôle que le cycle produit un résultat utile |
| Repository first | La validation contrôle la traçabilité dans Git |
| Prompt as contract | La validation compare le résultat au prompt |
| Human validation first | La validation ne remplace pas la décision humaine |
| Guardrails before execution | La validation vérifie que les garde-fous ont été respectés |
| Documentation routing by default | La validation contrôle sources et dossier cible |
| Capitalization by default | La validation contrôle la trace de capitalisation |
| Controlled automation | Le moteur reste non autonome en v1.1 |
| Quality by evidence | La validation repose sur preuves, diff, checks, audits et REX |

## 4. Documents sources obligatoires

Le Validation Engine s'appuie sur les documents suivants :

| Document | Rôle |
|----------|------|
| `docs/foundation/sfia-engineering-principles.md` | Norme supérieure d'exécution |
| `docs/architecture/sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Structure du prompt attendu |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | Exécution repository attendue |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Boucle ChatGPT ↔ Cursor |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles et garde-fous |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Documentation Routing Matrix |
| `docs/architecture/sfia-repository-blueprint.md` | Structure repository |
| `docs/architecture/sfia-delivery-pipeline.md` | PR, post-merge et delivery |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision automation et moteur validation |
| `method/sfia-fast-track/checklists/` | Checklists de contrôle |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage par type de cycle |

## 5. Inputs

Le Validation Engine prend en entrée :

| Input | Description |
|-------|-------------|
| Prompt Cursor | Contrat d'exécution initial |
| Retour Cursor | Compte rendu d'exécution |
| Repository | Chemin du repository |
| Branche | Branche utilisée |
| Commit attendu | Commit de départ ou commit cible |
| Commit produit | Commit local éventuel |
| Diff | Changements produits |
| Fichiers modifiés | Liste des fichiers touchés |
| Fichiers créés | Liste des fichiers nouveaux |
| Sources lues | Documents de référence consultés |
| Dossier cible | Destination attendue |
| Chemins protégés | Chemins génériques et spécifiques au projet |
| Commandes exécutées | Vérifications lancées |
| Résultats de commandes | Sorties ou erreurs |
| Livrables produits | Documents ou artefacts créés |
| Réserves signalées | Réserves éventuelles |
| Décision proposée | COMPLETE, GO, NO-GO, etc. |

## 6. Outputs

Le Validation Engine produit :

| Output | Description |
|--------|-------------|
| Décision SFIA | GO, GO avec réserves, NO-GO, COMPLETE, etc. |
| Niveau de conformité | Conforme, conforme avec réserves, non conforme |
| Réserves classées | Bloquantes, mineures, résiduelles, P0, P1, P2 |
| Écarts identifiés | Liste des non-conformités |
| Actions correctives | Reprises ou compléments attendus |
| Validation du prompt | Prompt complet ou incomplet |
| Validation repository | Exécution conforme ou non |
| Validation du livrable | Document conforme ou à reprendre |
| Validation PR | Prêt pour PR ou non |
| Validation post-merge | Trace de clôture suffisante ou non |
| Validation Notion | Préparation conforme ou bloquée |
| Prochaine étape | Corriger, valider, PR, post-merge, capitaliser, bloquer |

## 7. Périmètre de validation

Le Validation Engine peut contrôler :

| Objet validé | Contrôles principaux |
|--------------|---------------------|
| Prompt Cursor | Structure, sources, dossier cible, périmètre, interdits |
| Exécution repository | Branche, commit, status, diff, chemins protégés |
| Livrable documentaire | Cohérence, emplacement, complétude, sources |
| Commit | Message, périmètre, diff, absence de fichiers interdits |
| PR preparation | Readiness, synthèse, réserves, validation humaine |
| Post-merge | Trace de clôture, réserves, capitalisation |
| Capitalisation | Routing, type d'actif, traçabilité |
| Notion preparation | Mapping, dry-run, validation humaine, no raw sync |
| Automation readiness | Maturité, garde-fous, non-autonomie v1.1 |

## 8. Workflow de validation

Le Validation Engine suit le workflow suivant :

1. Recevoir le prompt et le retour d'exécution ;
2. vérifier la structure du prompt ;
3. vérifier la conformité aux Engineering Principles ;
4. vérifier la conformité aux Rules & Guardrails ;
5. vérifier la phase ou le contexte SFIA ;
6. vérifier l'usage de la Documentation Routing Matrix ;
7. vérifier les sources annoncées ;
8. vérifier le dossier cible ;
9. vérifier le hors périmètre ;
10. vérifier les chemins protégés génériques SFIA ;
11. vérifier les chemins protégés spécifiques au projet ;
12. vérifier le diff ;
13. vérifier les commandes exécutées ;
14. vérifier le commit si créé ;
15. vérifier les livrables produits ;
16. identifier les écarts ;
17. classer les réserves ;
18. produire une décision SFIA ;
19. proposer la prochaine étape ;
20. demander validation humaine si nécessaire.

## 8.1 Validation du routage de cycle

La validation doit vérifier que le cycle exécuté respecte le routage défini dans :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

Un résultat n'est pas pleinement valide s'il ne déclare pas :

- le type de cycle ;
- la famille de cycle : méthode / fondation ou projet ;
- les références obligatoires ;
- le template ou la famille de prompt ;
- les garde-fous ;
- la décision attendue.

Si le routage est absent ou incohérent, la validation doit produire une réserve ou un **NO-GO** selon l'impact.

## 9. Validation du prompt

Un prompt est valide si :

| Critère | Attendu |
|---------|---------|
| Objectif clair | Un résultat utile et identifiable |
| Repo indiqué | Chemin repository explicite |
| Branche indiquée | Branche attendue explicite |
| Commit attendu indiqué | Base d'exécution contrôlable |
| Contexte décrit | Contexte suffisant |
| Phase SFIA indiquée | Phase ou contexte identifiable |
| Sources listées | Documents à lire indiqués |
| Dossier cible indiqué | Destination explicite |
| Type de capitalisation indiqué | Foundation, method, practice, prompt, template, audit, REX, roadmap, archive |
| Périmètre explicite | Actions autorisées |
| Hors périmètre explicite | Actions interdites |
| Fichiers à lire indiqués | Sources opérationnelles |
| Fichiers à modifier indiqués | Cibles connues |
| Fichiers interdits indiqués | Chemins protégés déclarés |
| Actions attendues indiquées | Exécution claire |
| Vérifications indiquées | Contrôles reproductibles |
| Commit attendu indiqué | Message ou logique attendue |
| Résultat attendu indiqué | Compte rendu exploitable |

Si un de ces éléments manque, le prompt peut être classé :

- conforme avec réserve ;
- incomplet ;
- NO-GO selon criticité.

## 10. Validation repository

Une exécution repository est valide si :

| Critère | Attendu |
|---------|---------|
| Branche vérifiée | Oui |
| Commit de départ vérifié | Oui |
| `git status --short` compris | Oui |
| Sources lues | Oui |
| Dossier cible respecté | Oui |
| Hors périmètre respecté | Oui |
| Chemins protégés respectés | Oui |
| Diff contrôlé | Oui |
| Commandes exécutées | Oui |
| Commit conforme | Oui si créé |
| Pas de push automatique | Oui |
| Pas de PR automatique | Oui |
| Pas de merge automatique | Oui |
| Pas de Notion sync | Oui |
| Compte rendu structuré | Oui |

## 11. Validation des chemins protégés

Le Validation Engine doit distinguer deux niveaux de validation :

1. **Chemins protégés génériques SFIA** ;
2. **Chemins protégés spécifiques au projet ou au cycle**.

### 11.1 Chemins protégés génériques SFIA

Le moteur vérifie que les catégories sensibles n'ont pas été touchées sans demande explicite :

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

### 11.2 Chemins protégés spécifiques au projet

Le moteur vérifie que les chemins spécifiques déclarés par le prompt ont été respectés.

Ces chemins doivent venir :

- du projet courant ;
- du Repository Blueprint ;
- du type de cycle ;
- des garde-fous applicables ;
- des zones sensibles identifiées par l'humain.

Exemple :

```text
projects/interv360/app/
projects/interv360/backend/
.github/workflows/
tools/cmp-001/
projects/interv360/03-design/exports/
```

Cet exemple illustre un contexte projet.

Il ne constitue pas un standard universel.

### 11.3 Décision sur chemin protégé

Si un chemin protégé est touché sans demande explicite :

| Cas | Décision |
|-----|----------|
| Chemin sensible touché sans autorisation | NO-GO |
| Chemin sensible touché avec justification incomplète | GO avec réserve ou NO-GO |
| Chemin sensible touché dans le périmètre validé | Acceptable avec contrôle renforcé |
| Export non suivi ajouté par erreur | NO-GO ou correction obligatoire |
| Fichier temporaire ajouté | Correction obligatoire |

Règle :

> En cas de doute, classer la réserve et demander validation humaine.

## 12. Validation du diff

Le diff est valide si :

- il correspond au périmètre ;
- il respecte le dossier cible ;
- il ne touche pas les chemins protégés ;
- il ne contient pas de modification accidentelle ;
- il ne mélange pas plusieurs cycles ;
- il ne modifie pas de code si le cycle est documentaire ;
- il ne contient pas de fichiers temporaires ;
- il reste lisible et reviewable.

Un diff trop large doit être classé :

- GO avec réserves ;
- COMPLETE AVEC RÉSERVES ;
- ou NO-GO selon criticité.

## 13. Validation du commit

Un commit est valide si :

- son message est clair ;
- son message reflète le contenu réel ;
- il respecte le format attendu ;
- il correspond à un objectif unique ;
- il ne contient pas de fichiers hors périmètre ;
- il ne contient pas de chemins protégés non autorisés ;
- il ne contient pas de fichiers temporaires ;
- il est rattachable au cycle courant.

Format recommandé :

```text
docs: <action> <objet SFIA>
```

## 14. Validation PR readiness

Une PR est prête si :

| Critère | Attendu |
|---------|---------|
| Branche correcte | Oui |
| Commit cohérent | Oui |
| Diff contrôlé | Oui |
| Chemins protégés non touchés ou autorisés | Oui |
| Documents attendus présents | Oui |
| Contrôles exécutés | Oui |
| Réserves identifiées | Oui |
| Synthèse PR disponible | Oui |
| Pas de Notion sync | Oui |
| Validation humaine obtenue avant création | Requise |

Le Validation Engine ne crée pas la PR.

Il produit une décision de readiness :

- READY FOR PR ;
- READY FOR PR WITH RESERVES ;
- NOT READY FOR PR.

## 15. Validation post-merge

Un post-merge status est valide s'il inclut :

- PR ;
- branche source ;
- branche cible ;
- commit d'intégration ;
- décision ;
- réserves éventuelles ;
- garde-fous ;
- éléments capitalisés ;
- prochaine étape.

Une PR significative n'est pas entièrement clôturée tant que cette trace n'existe pas.

Décisions possibles :

- POST-MERGE COMPLETE ;
- POST-MERGE COMPLETE WITH RESERVES ;
- POST-MERGE INCOMPLETE.

## 16. Validation de la capitalisation

Une capitalisation est valide si :

| Critère | Attendu |
|---------|---------|
| Type d'actif identifié | Foundation, method, practice, template, prompt, checklist, audit, REX, roadmap, archive |
| Dossier cible correct | Selon Documentation Routing Matrix |
| Sources indiquées | Oui |
| Décision explicite | Oui |
| Réserves suivies | Oui si présentes |
| Relation avec projet ou méthode | Claire |
| Réutilisation possible | Oui ou justification |
| Index mis à jour | Oui si applicable |

## 17. Validation Notion

Le Validation Engine ne publie pas dans Notion.

Il peut valider une préparation Notion uniquement si :

| Critère | Attendu |
|---------|---------|
| Source repository identifiée | Oui |
| Mapping défini | Oui |
| Editorialisation prévue | Oui |
| Dry-run prévu ou réalisé | Oui si demandé |
| Validation humaine prévue | Oui |
| Raw sync absente | Oui |
| Publication non automatique | Oui |

Décisions possibles :

- NOTION PREPARATION READY ;
- NOTION PREPARATION WITH RESERVES ;
- NOTION PREPARATION BLOCKED.

## 18. Décisions SFIA

Le Validation Engine utilise les décisions définies par le Decision Engine.

| Décision | Usage |
|----------|-------|
| GO | Résultat acceptable |
| GO avec réserves | Acceptable avec réserves suivies |
| NO-GO | Résultat non acceptable |
| COMPLETE | Travail complet |
| COMPLETE AVEC RÉSERVES | Exploitable avec réserves |
| INCOMPLETE | Travail insuffisant ou partiel |
| BLOCKED | Action impossible sans arbitrage |
| NEEDS HUMAN VALIDATION | Action prête mais validation requise |
| READY FOR PR | PR prête |
| READY FOR PR WITH RESERVES | PR prête avec réserves |
| NOT READY FOR PR | PR non prête |
| POST-MERGE COMPLETE | Clôture post-merge complète |
| POST-MERGE INCOMPLETE | Clôture post-merge incomplète |

## 19. Classification des réserves

Les réserves doivent être classées selon deux axes :

### 19.1 Nature

| Nature | Signification |
|--------|---------------|
| Bloquante | Empêche la validation ou la suite |
| Mineure | À traiter mais non bloquante |
| Résiduelle | Connue, suivie, non bloquante |

### 19.2 Priorité

| Priorité | Signification |
|----------|---------------|
| P0 | À traiter immédiatement |
| P1 | À traiter au prochain cycle structuré |
| P2 | À conserver en amélioration future |

Une réserve doit idéalement contenir :

- description ;
- fichier ou zone concernée ;
- impact ;
- criticité ;
- priorité ;
- action proposée.

## 20. Compte rendu de validation standard

Le Validation Engine doit produire un compte rendu structuré :

```text
Décision :
- ...

Niveau de conformité :
- ...

Prompt :
- conforme / conforme avec réserves / incomplet

Repository execution :
- conforme / conforme avec réserves / non conforme

Diff :
- conforme / réserve / non conforme

Commit :
- conforme / non applicable / réserve

Chemins protégés :
- OK / KO / réserve

Livrables :
- conformes / réserves / incomplets

PR readiness :
- READY / READY WITH RESERVES / NOT READY / N/A

Post-merge :
- COMPLETE / INCOMPLETE / N/A

Notion :
- READY / BLOCKED / N/A

Réserves :
- ...

Actions correctives :
- ...

Prochaine étape :
- ...
```

## 21. Validation criteria

Une validation SFIA est recevable si :

| Critère | Attendu |
|---------|---------|
| Sources analysées | Oui |
| Prompt contrôlé | Oui si applicable |
| Exécution contrôlée | Oui si applicable |
| Diff contrôlé | Oui si applicable |
| Chemins protégés contrôlés | Oui |
| Livrables contrôlés | Oui si applicable |
| Réserves classées | Oui si présentes |
| Décision explicite | Oui |
| Prochaine étape proposée | Oui |
| Validation humaine respectée | Oui |
| No raw Notion sync | Oui |

## 22. Anti-patterns

| Anti-pattern | Risque |
|--------------|--------|
| GO sans analyse du diff | Erreur non détectée |
| GO sans vérifier les chemins protégés | Risque projet ou plateforme |
| GO sans vérifier les sources | Validation superficielle |
| Réserve non classée | Suivi impossible |
| NO-GO sans action corrective | Blocage non exploitable |
| PR ready sans réserves identifiées | Revue incomplète |
| Post-merge absent | Perte de traçabilité |
| Validation Notion sans mapping | Publication fragile |
| Raw sync validée | Knowledge non gouvernée |
| Validation humaine contournée | Gouvernance affaiblie |
| Diff trop large accepté sans réserve | Dette de revue |
| Prompt incomplet validé | Exécution future risquée |

## 23. Maturity Model

| Niveau | Critère |
|--------|---------|
| Draft | Critères de validation définis |
| Candidate | Utilisé sur quelques cycles manuels |
| Validated | Appliqué sur plusieurs familles de cycles |
| Gold | Relié aux moteurs Prompt Generation et Repository Execution |

**Statut v1.1 :**

Candidate — specification ready for use in manual ChatGPT ↔ Cursor validation cycles.

## 24. Relation avec les autres moteurs

Le Validation Engine contrôle les sorties de :

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`

Il contribue à :

- `method/sfia-fast-track/automation/sfia-documentation-engine.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `docs/architecture/sfia-decision-engine.md`

Relation logique :

```text
Prompt Generation Engine
→ Repository Execution Engine
→ Validation Engine
→ Documentation / Knowledge capitalization
```

## 25. Risques

| Risque | Description | Mitigation |
|--------|-------------|------------|
| Validation superficielle | La décision ne repose pas sur les preuves | Quality by evidence |
| Réserves mal classées | Suivi impossible | Classification obligatoire |
| Chemin protégé oublié | Risque repository | Validation générique + projet |
| Trop de critères | Validation lourde | Adapter au contexte du cycle |
| Décision ambiguë | Suite difficile à exécuter | Décision SFIA explicite |
| Notion validé trop tôt | Publication non gouvernée | Mapping + dry-run + validation humaine |
| Validation Engine traité comme autonome | Contournement humain | Human validation first |

## 26. Related Documents

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/checklists/`

## 27. Décision

Le SFIA Validation Engine v1.1 est défini comme la spécification du moteur chargé de contrôler la conformité des prompts, exécutions repository, diffs, commits, livrables, PR readiness, post-merge, capitalisation et préparation Notion.

En v1.1, il reste non autonome et s'inscrit dans la boucle manuelle assistée ChatGPT ↔ Cursor.

Il devient la référence pour produire des décisions SFIA explicites, classer les réserves et proposer les prochaines étapes.

## 28. Next Steps

1. Valider ce document ;
2. utiliser ce moteur pour contrôler les prochains cycles SFIA ;
3. mettre à jour `sfia-automation-architecture.md` après création des trois specs moteurs ;
4. consolider les checklists de validation ;
5. consolider le prompt catalog ;
6. préparer une passe P2 de cross-références v1.1.
