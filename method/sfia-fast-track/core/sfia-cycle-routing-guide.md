---
status: candidate
version: v1.1
updated_after: SFIA foundation v1.1 closure
scope: cycle routing and reference selection
---

# Guide de routage des cycles SFIA

**Version:** v1.1  
**Status:** Candidate  
**Scope:** Routage des cycles, sélection des références, templates et validations

## 1. Objectif

Ce document définit comment SFIA sélectionne, pour chaque cycle :

- les bons documents de référence ;
- les bons templates ou familles de prompts ;
- les bons contrôles de validation ;
- les bonnes décisions attendues.

SFIA ne repose pas sur la mémoire implicite de ChatGPT ou Cursor. Chaque cycle doit appliquer un **routage explicite** :

```text
type de cycle → documents à lire → template → validation → décision
```

Un cycle SFIA conforme doit :

1. déclarer son type de cycle ;
2. sélectionner les références obligatoires adaptées ;
3. utiliser le bon template ou la bonne famille de prompts ;
4. déclarer le périmètre et le hors périmètre ;
5. appliquer les garde-fous nécessaires ;
6. produire un résultat vérifiable ;
7. être validé avec la SFIA Validation Checklist ;
8. se terminer par une décision explicite.

Ce guide **ne remplace pas** :

- le Prompt Generation Engine ;
- le Repository Execution Engine ;
- le Validation Engine ;
- la SFIA Validation Checklist ;
- le Prompt Catalog ;
- les Prompt Templates.

Il les **relie opérationnellement** pour garantir que la bonne documentation est appliquée au bon moment.

## 2. Principe directeur

SFIA ne doit pas supposer que ChatGPT ou Cursor se souviennent automatiquement de toute la documentation.

Chaque cycle doit déclarer explicitement les références qu'il utilise.

> Pas de mémoire implicite.  
> Pas de routage documentaire non déclaré.  
> Pas d'exécution sans références obligatoires.  
> Pas de clôture sans validation.

La documentation SFIA est appliquée par le **routage des cycles**, pas uniquement par la mémoire du modèle.

## 3. Positionnement dans SFIA

Ce guide sert de **couche d'orchestration opérationnelle** pour les cycles SFIA.

Il répond à la question :

> Quels documents SFIA doivent être utilisés pour ce cycle ?

Il se situe entre :

| Amont | Ce guide | Aval |
|-------|----------|------|
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Sélection explicite par type de cycle | `method/sfia-fast-track/checklists/sfia-validation-checklist.md` |
| `prompts/prompt-catalog.md` | | Décision explicite |
| `prompts/templates/` | | |

Il soutient le modèle ChatGPT ↔ Cursor (`sfia-chatgpt-cursor-operating-model.md`) en rendant explicite la sélection documentaire **avant** chaque exécution.

**Complémentarité avec la Knowledge Layer :**

- `sfia-knowledge-layer.md` définit la Documentation Routing Matrix (où produire un livrable) ;
- ce guide définit le **routage des références et contrôles** (quoi lire, quel template, quelle validation) selon le type de cycle.

## 4. Règle centrale — identifier le type de cycle d'abord

Avant de rédiger ou d'exécuter un prompt, identifier le **type de cycle**.

SFIA distingue deux grandes familles :

1. **cycles méthode / fondation SFIA** — évolution de la méthode, des fondations, des prompts, de la capitalisation ;
2. **cycles projet SFIA** — application de SFIA à un projet concret (Intake, cadrage, architecture, delivery, REX, etc.).

Si le type de cycle n'est pas clair, lancer d'abord un **cycle de cadrage** (méthode ou projet selon le contexte).

### 4.1 Cycles méthode / fondation SFIA

| Type de cycle | Objectif |
|---------------|----------|
| Cadrage méthode | Clarifier une intention d'évolution SFIA |
| Création foundation | Créer un nouveau document foundation ou architecture |
| Consolidation foundation | Mettre à jour ou aligner un document existant |
| Capitalisation méthode | Transformer un résultat de cycle en actif méthode réutilisable |
| Création checklist | Produire une checklist opérationnelle depuis une méthode ou un moteur |
| Prompt catalog / template | Créer ou mettre à jour des prompt cards ou templates |
| Exécution repository | Exécuter un changement documentaire contrôlé dans le repository |
| Validation | Valider un résultat Cursor, un diff, un commit ou un livrable |
| PR readiness | Décider si une branche est prête pour une PR |
| PR summary | Préparer le titre et le corps d'une PR |
| Post-merge | Tracer le statut après merge |
| Préparation Notion | Préparer un mapping ou un dry-run sans publication |
| Cleanup | Déplacer, renommer ou réorganiser des fichiers de manière sécurisée |
| Audit méthode | Identifier des écarts, incohérences, réserves ou travaux restants |

### 4.2 Cycles projet SFIA

| Type de cycle projet | Objectif |
|----------------------|----------|
| Intake projet | Capturer le besoin initial, le contexte, les parties prenantes et les contraintes |
| Cadrage projet | Définir le périmètre, les objectifs, les hypothèses, les risques et la trajectoire |
| Architecture fonctionnelle | Décrire les usages, rôles, parcours, objets métier et règles fonctionnelles |
| Architecture technique | Décrire les composants, flux, dépendances, contraintes techniques et scénarios |
| Design / UX-UI | Préparer ou analyser les maquettes, parcours, écrans, composants et règles d'interface |
| Delivery projet | Préparer l'exécution, les lots, les tâches, les dépendances, les validations et la recette |
| Pilotage / décision projet | Produire des supports d'arbitrage, synthèses, statuts, risques ou décisions |
| Audit projet | Vérifier la cohérence, les écarts, les risques ou la maturité d'un projet |
| REX projet | Formaliser les apprentissages, réussites, irritants, réserves et recommandations |
| Capitalisation projet | Transformer un résultat projet en actif SFIA réutilisable |
| Roadmap projet | Structurer les prochaines étapes, jalons, dépendances et priorités |

## 5. Références obligatoires par type de cycle (méthode / fondation)

### 5.1 Cycle de cadrage méthode

**À utiliser quand** l'intention d'évolution SFIA n'est pas encore prête pour exécution.

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `prompts/prompt-catalog.md`

**Famille recommandée :** Framing prompts

**Décision attendue :** GO | NEEDS CLARIFICATION | NO-GO

### 5.2 Cycle de création foundation

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Template :** `prompts/templates/01-create-foundation-document.md`

**Décision attendue :** COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE | NO-GO

### 5.3 Cycle de consolidation foundation

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Template :** `prompts/templates/02-update-document-v1-1.md`

**Décision attendue :** COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 5.4 Cycle de capitalisation méthode

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `prompts/prompt-catalog.md`

**Template :** `prompts/templates/08-capitalize-method-asset.md`

**Décision attendue :** CAPITALIZATION COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 5.5 Cycle de création checklist

**Références obligatoires :**

- document source de la méthode ou spec concernée
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

**Template :** `prompts/templates/03-create-operational-checklist.md`

**Décision attendue :** COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 5.6 Cycle Prompt Catalog ou Prompt Template

**Références obligatoires :**

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `prompts/prompt-catalog.md`
- `prompts/templates/README.md`
- `docs/foundation/sfia-engineering-principles.md`

**Templates utiles selon le cas :**

- `prompts/templates/01-create-foundation-document.md`
- `prompts/templates/02-update-document-v1-1.md`
- `prompts/templates/08-capitalize-method-asset.md`

**Décision attendue :** PROMPT ASSET COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 5.7 Cycle d'exécution repository

**Références obligatoires :**

- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Template :** `prompts/templates/10-perform-safe-repository-cleanup.md` — uniquement si déplacement, renommage ou nettoyage.

Sinon utiliser le template de création ou consolidation adapté.

**Décision attendue :** EXECUTION COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE | NO-GO

### 5.8 Cycle de validation

**Références obligatoires :**

- prompt initial
- retour Cursor
- diff ou informations de commit
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/architecture/sfia-decision-engine.md`

**Template :** `prompts/templates/04-validate-cursor-result.md`

**Décision attendue :** GO | GO WITH RESERVES | NO-GO | COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 5.9 Cycle PR readiness

**Références obligatoires :**

- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `prompts/templates/05-validate-pr-readiness.md`
- documents de clôture ou de validation de la branche

**Template :** `prompts/templates/05-validate-pr-readiness.md`

**Décision attendue :** READY FOR PR | READY FOR PR WITH RESERVES | NOT READY FOR PR

> **Aucune PR ne doit être créée dans ce cycle.**

### 5.10 Cycle PR summary

**Références obligatoires :**

- rapport PR readiness
- `docs/architecture/sfia-delivery-pipeline.md`
- `prompts/templates/06-prepare-pr-summary.md`

**Template :** `prompts/templates/06-prepare-pr-summary.md`

**Décision attendue :** PR SUMMARY READY | PR SUMMARY WITH RESERVES | NOT READY

> **Aucune PR ne doit être créée sans demande explicite après validation humaine.**

### 5.11 Cycle post-merge

**Références obligatoires :**

- PR mergée
- commit de merge
- `docs/architecture/sfia-delivery-pipeline.md`
- `prompts/templates/07-write-post-merge-status.md`
- documents de clôture ou validation liés au cycle

**Template :** `prompts/templates/07-write-post-merge-status.md`

**Décision attendue :** POST-MERGE COMPLETE | POST-MERGE COMPLETE WITH RESERVES | INCOMPLETE

### 5.12 Cycle de préparation Notion

**Références obligatoires :**

- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `prompts/templates/09-prepare-notion-mapping.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- documents repository sources à mapper

**Template :** `prompts/templates/09-prepare-notion-mapping.md`

**Garde-fous stricts :**

- aucune raw Notion sync ;
- aucune publication Notion ;
- aucune modification de `tools/cmp-001/` ;
- aucune régénération de payload JSON CMP ;
- validation humaine obligatoire.

**Décision attendue :** NOTION PREPARATION READY | NOTION PREPARATION WITH RESERVES | BLOCKED

### 5.13 Cycle cleanup

**Références obligatoires :**

- `docs/architecture/sfia-repository-blueprint.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Template :** `prompts/templates/10-perform-safe-repository-cleanup.md`

**Décision attendue :** CLEANUP COMPLETE | CLEANUP COMPLETE WITH RESERVES | NO-GO

### 5.14 Cycle d'audit méthode

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- documents audités
- catalogues, index ou matrices concernés

**Décision attendue :** GO FOR NEXT CYCLE | GO WITH RESERVES | NO-GO | AUDIT COMPLETE

## 6. Cycles projet SFIA

Les cycles projet appliquent SFIA à un **projet concret**.

Ils doivent toujours déclarer :

- le projet concerné ;
- la phase projet ;
- le livrable attendu ;
- les sources projet disponibles ;
- les contraintes métier, techniques ou organisationnelles ;
- les décisions déjà prises ;
- les éléments hors périmètre ;
- le type de capitalisation attendue.

### 6.1 Intake projet

**À utiliser** lorsqu'un nouveau projet ou besoin est identifié.

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- documents projet disponibles

**Livrables attendus :** synthèse du besoin, contexte, parties prenantes, objectifs, contraintes, risques initiaux, questions ouvertes, recommandation de prochain cycle.

**Décision attendue :** INTAKE COMPLETE | NEEDS CLARIFICATION | NO-GO

### 6.2 Cadrage projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- documents projet disponibles

**Livrables attendus :** objectifs, périmètre, hors périmètre, hypothèses, dépendances, risques, décisions à prendre, roadmap initiale.

**Décision attendue :** CADRAGE COMPLETE | COMPLETE WITH RESERVES | NEEDS ARBITRATION

### 6.3 Architecture fonctionnelle projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-domain-model.md`
- `docs/architecture/sfia-meta-model.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- documents projet disponibles

**Livrables attendus :** rôles, parcours, cas d'usage, règles fonctionnelles, objets métier, flux fonctionnels, décisions ouvertes, réserves.

**Décision attendue :** FUNCTIONAL ARCHITECTURE COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 6.4 Architecture technique projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- documents techniques projet disponibles

**Livrables attendus :** composants, flux, dépendances, prérequis, contraintes, risques, scénarios, décisions techniques.

**Décision attendue :** TECHNICAL ARCHITECTURE COMPLETE | COMPLETE WITH RESERVES | NEEDS ARBITRATION

### 6.5 Design / UX-UI projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- documents design disponibles
- maquettes ou exports si disponibles

**Livrables attendus :** parcours utilisateur, écrans clés, règles UX, composants, écarts, décisions design, contraintes frontend.

**Décision attendue :** DESIGN READY | DESIGN READY WITH RESERVES | NEEDS DESIGN ARBITRATION

### 6.6 Delivery projet

**Références obligatoires :**

- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- documents projet disponibles

**Livrables attendus :** lots, tâches, dépendances, critères de validation, risques, points d'arbitrage, prochaines actions.

**Décision attendue :** DELIVERY READY | DELIVERY READY WITH RESERVES | BLOCKED

### 6.7 Pilotage / décision projet

**Références obligatoires :**

- `docs/architecture/sfia-decision-engine.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- documents projet disponibles

**Livrables attendus :** synthèse d'avancement, décisions attendues, arbitrages, risques, dépendances, points bloquants, options, recommandation.

**Décision attendue :** DECISION READY | NEEDS ARBITRATION | BLOCKED

### 6.8 Audit projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- documents projet audités

**Livrables attendus :** constats, écarts, risques, réserves, recommandations, priorités, prochaine décision.

**Décision attendue :** AUDIT COMPLETE | GO WITH RESERVES | NO-GO

### 6.9 REX projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- documents projet
- livrables finaux
- décisions et incidents éventuels

**Livrables attendus :** contexte, objectifs, déroulé, réussites, difficultés, arbitrages, apprentissages, recommandations, éléments capitalisables.

**Décision attendue :** REX COMPLETE | CAPITALIZATION RECOMMENDED | NO CAPITALIZATION NEEDED

### 6.10 Capitalisation projet

**Références obligatoires :**

- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `prompts/templates/08-capitalize-method-asset.md`
- livrables projet sources

**Livrables attendus :** actif réutilisable, type d'actif, niveau de maturité, chemin cible, liens vers sources, réserves.

**Décision attendue :** PROJECT CAPITALIZATION COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

### 6.11 Roadmap projet

**Références obligatoires :**

- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-decision-engine.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- documents projet disponibles

**Livrables attendus :** trajectoire, jalons, dépendances, priorités, risques, hypothèses, décisions nécessaires, prochaines actions.

**Décision attendue :** ROADMAP READY | ROADMAP READY WITH RESERVES | NEEDS ARBITRATION

### 6.12 Delivery QA/Test incrément (SFIA v2.0 — pilote)

> Complète §6.6 pour un **incrément delivery** (INC-n) avec gates QA-G3/G4. Référence pilote : Chantiers360 v2 INC-01.

**Références obligatoires :**

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `prompts/qa/delivery-qa-test-prompt-family.md` — `PROMPT-QA-D-001` à `008`
- `prompts/prompt-catalog.md` — §14 Supplément SFIA v2.0
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` — §12.1, §13.1
- rapports `projects/<project>/08-qa-test/inc-<nn>/`

**Livrables attendus :** stratégie QA, scénarios, tests, rapports d'exécution, réserves, QA readiness (QA-G3).

**Décision attendue :** GO QA | GO QA WITH RESERVES | NO-GO QA

### 6.13 Clôture incrément delivery (SFIA v2.0 — pilote)

**Références obligatoires :**

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
- rapport QA-G4 post-merge — `qa-g4-post-merge-report.md`
- `07-delivery-inc-<nn>/inc-<nn>-closure-report.md`

**Livrables attendus :** statut CLOSED ou CLOSED WITH RESERVES ; réserves documentées.

**Décision attendue :** INC-n CLOSED | CLOSED WITH RESERVES

> **Clôture ≠ GO incrément suivant** — GO INC-(n+1) = décision Morris séparée (L0).

### 6.14 Capitalisation post-incrément (SFIA v2.0 — pilote)

**Références obligatoires :**

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`
- `prompts/templates/08-capitalize-method-asset.md`
- `projects/<project>/09-capitalization/inc-<nn>-capitalization-report.md`

**Livrables attendus :** retour d'expérience incrément ; actif méthode si généralisable.

**Décision attendue :** CAPITALIZATION COMPLETE | COMPLETE WITH RESERVES | INCOMPLETE

> Recommandée après **premier incrément pilote** — distincte du GO INC-(n+1).

### 6.15 Design coverage / extrapolation UI (SFIA v2.0 — pilote)

> Formalise quand Figma est obligatoire vs quand Cursor peut extrapoler depuis une DA existante. Source : Chantiers360 v2 R-UX-01.

**Références obligatoires :**

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
- `projects/<project>/04-design/` — brief, spec, décisions
- `projects/<project>/08-qa-test/inc-<nn>/qa-reserves.md` — réserves R-UX-XX

**Livrables attendus :** matrice couverture par écran ; sources de cohérence ; réserves UX ; prompt extrapolation si applicable.

**Décision attendue :** DESIGN COVERAGE DOCUMENTED | ACCEPTED WITH RESERVES | NEEDS DESIGN ARBITRATION

> **Extrapolation acceptée ≠ polish design** — rattrapage Figma = cycle Morris séparé.

### 6.16 Technical Architecture & Decision Documentation (SFIA v2.0 — pilote)

> Formalise quand produire registre technique, ADR, DAA light, DAT light. Source : Chantiers360 v2 `05-technical-architecture/`.

**Références obligatoires :**

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
- `projects/<project>/05-technical-architecture/` — overview, stack, decisions, data model
- `projects/<project>/07-delivery-inc-<nn>/delivery-inc-<nn>-decisions.md`
- `sfia-v2-delivery-qa-test-standard.md` — lien QA
- `sfia-v2-design-coverage-standard.md` — frontend / R-UX-XX

**Livrables attendus :** matrice doc technique ; register ; ADR/DAA/DAT si déclenchés ; gates Morris.

**Décision attendue :** TECH DOC STANDARD DOCUMENTED | DOCUMENTED WITH RESERVES | NEEDS ARBITRATION

> **Standard ≠ ADR projet** — adoption du standard ne produit pas les ADR Chantiers360 complets.

## 7. Contrat minimal d'un prompt SFIA

Tout prompt d'exécution SFIA doit contenir au minimum :

| Élément | Description |
|---------|-------------|
| Objectif | Intention du cycle |
| Chemin du repository | Racine workspace |
| Branche | Branche de travail |
| Commit attendu | Base de référence |
| Type de cycle | Voir §4 |
| Famille de cycle | méthode / fondation ou projet |
| Références obligatoires | Liste explicite des documents |
| Dossier cible | Où produire le livrable |
| Périmètre | Ce qui est inclus |
| Hors périmètre | Ce qui est exclu |
| Fichiers à lire | Sources concrètes |
| Fichiers à modifier | Cibles autorisées |
| Chemins protégés | Zones interdites |
| Actions attendues | Étapes d'exécution |
| Commandes de vérification | Contrôles post-exécution |
| Message de commit attendu | Si applicable |
| Résultat attendu | Livrable concret |
| Méthode de validation | Checklist ou moteur |
| Décision attendue | Statut de clôture |

Si l'un de ces éléments manque, le prompt doit être considéré comme **incomplet**.

Référence : `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`, `prompts/prompt-catalog.md`.

## 8. Règle de validation

Tout cycle exécuté doit être validé avec :

- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

| Question | Réponse obligatoire |
|----------|---------------------|
| Le type de cycle a-t-il été déclaré ? | oui / non |
| La famille méthode / projet a-t-elle été déclarée ? | oui / non |
| Les références obligatoires ont-elles été sélectionnées ? | oui / non |
| Le bon template a-t-il été utilisé ? | oui / non |
| Les garde-fous ont-ils été déclarés ? | oui / non |
| Les chemins protégés ont-ils été respectés ? | oui / non |
| Le résultat est-il dans le périmètre ? | oui / non |
| Les réserves sont-elles classées ? | oui / non |
| Une décision explicite a-t-elle été produite ? | oui / non |

Un cycle **sans validation n'est pas clôturé**.

## 9. Règle de validation humaine

SFIA peut automatiser :

- la préparation ;
- l'assistance à l'exécution ;
- les contrôles ;
- les rapports ;
- les validations préliminaires.

SFIA **ne doit pas** automatiser la décision finale.

**Validation humaine obligatoire pour :**

- création de PR ;
- push ;
- merge ;
- publication Notion ;
- modification de chemins protégés ;
- création d'un nouveau moteur (y compris Documentation Engine — décision dédiée requise) ;
- cleanup repository majeur ;
- passage d'un actif de Candidate à Validated ;
- décision d'architecture structurante ;
- arbitrage projet ;
- décision de delivery impactante.

## 10. Règle d'exécution Cursor

Cursor doit exécuter **uniquement** le contrat du prompt.

Cursor ne doit pas déduire seul un périmètre manquant.

| Situation | Réponse attendue |
|-----------|------------------|
| Input obligatoire manquant | `INCOMPLETE PROMPT — missing required input.` |
| Chemin protégé à risque | `NO-GO — protected path risk.` |
| Action nécessitant validation humaine | `NEEDS HUMAN VALIDATION.` |

Référence : `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`

## 11. Anti-patterns

| Anti-pattern | Risque |
|--------------|--------|
| Lancer une exécution sans type de cycle | Mauvaises références sélectionnées |
| Ne pas distinguer cycle méthode et cycle projet | Mauvais livrable ou mauvaise validation |
| S'appuyer uniquement sur la mémoire ChatGPT | Documents de gouvernance oubliés |
| Prompt sans commit attendu | Exécution sur une mauvaise base |
| Prompt sans chemins protégés | Risque repository |
| Prompt sans étape de validation | Résultat accepté au ressenti |
| Mélanger audit et exécution | Dérive de périmètre |
| Mélanger PR readiness et création PR | Contournement de la validation humaine |
| Créer un nouveau moteur sans décision dédiée | Dérive d'architecture |
| Lancer une raw Notion sync depuis le repo | Contournement de la gouvernance knowledge |
| Auto-merge | Contournement de la décision humaine |
| Réécriture massive d'un historique | Perte de traçabilité |
| Appliquer un template méthode à un besoin projet | Résultat trop théorique |
| Appliquer un template projet à une évolution SFIA | Gouvernance méthode incomplète |

## 12. Exemples de routage

### Exemple 1 — Créer un nouveau document méthode

| Élément | Valeur |
|---------|--------|
| Type de cycle | Création foundation ou capitalisation méthode |
| Famille | méthode / fondation |
| Template | `01-create-foundation-document.md` ou `08-capitalize-method-asset.md` |
| Références | Engineering Principles, Decision Engine, Knowledge Layer, Rules & Guardrails, Validation Checklist |
| Décision attendue | COMPLETE \| COMPLETE WITH RESERVES \| INCOMPLETE |

### Exemple 2 — Vérifier si une branche est prête pour PR

| Élément | Valeur |
|---------|--------|
| Type de cycle | PR readiness |
| Famille | méthode / fondation |
| Template | `05-validate-pr-readiness.md` |
| Références | Delivery Pipeline, Decision Engine, Validation Checklist, documents de clôture de la branche |
| Décision attendue | READY FOR PR \| READY FOR PR WITH RESERVES \| NOT READY FOR PR |

### Exemple 3 — Préparer une publication Notion

| Élément | Valeur |
|---------|--------|
| Type de cycle | Préparation Notion |
| Famille | méthode / fondation |
| Template | `09-prepare-notion-mapping.md` |
| Règles | pas de raw sync ; pas de publication sans validation humaine |

### Exemple 4 — Cadrer un projet Interv360

| Élément | Valeur |
|---------|--------|
| Type de cycle | Cadrage projet |
| Famille | projet |
| Références | Engineering Principles, Decision Engine, Operating Model, Knowledge Layer, Rules & Guardrails, documents projet |
| Livrables | objectifs, périmètre, hors périmètre, hypothèses, risques, dépendances, roadmap initiale |
| Décision attendue | CADRAGE COMPLETE \| COMPLETE WITH RESERVES \| NEEDS ARBITRATION |

### Exemple 5 — Produire une architecture fonctionnelle projet

| Élément | Valeur |
|---------|--------|
| Type de cycle | Architecture fonctionnelle |
| Famille | projet |
| Références | Engineering Principles, Domain Model, Meta-Model, Decision Engine, Knowledge Layer, documents projet |
| Livrables | rôles, parcours, cas d'usage, règles fonctionnelles, objets métier, flux fonctionnels, réserves |
| Décision attendue | FUNCTIONAL ARCHITECTURE COMPLETE \| COMPLETE WITH RESERVES \| INCOMPLETE |

### Exemple 6 — Faire un REX projet

| Élément | Valeur |
|---------|--------|
| Type de cycle | REX projet |
| Famille | projet |
| Références | Engineering Principles, Knowledge Layer, documents projet, livrables finaux, décisions et incidents |
| Livrables | contexte, objectifs, déroulé, réussites, difficultés, arbitrages, apprentissages, recommandations, éléments capitalisables |
| Décision attendue | REX COMPLETE \| CAPITALIZATION RECOMMENDED \| NO CAPITALIZATION NEEDED |

## 13. Décision

`sfia-cycle-routing-guide.md` est le **guide candidat SFIA v1.1** pour sélectionner les références, templates et contrôles de validation selon le type de cycle.

Il fournit le mécanisme opérationnel permettant de s'assurer que la documentation SFIA est appliquée au bon moment.

Il ne repose pas sur la mémoire implicite du modèle.

Il rend la sélection documentaire **explicite, auditable et validable**.

## 14. Prochaines étapes

1. utiliser ce guide avant chaque nouveau cycle SFIA ;
2. mettre à jour les prompt templates pour référencer ce guide lorsque pertinent ;
3. utiliser ce guide pendant les validations pour vérifier que les bonnes références ont été sélectionnées ;
4. affiner les types de cycles après usage réel ;
5. évaluer les futures Cursor Automations uniquement après stabilisation de ce modèle de routage.

---

*Référentiel SFIA — Guide de routage des cycles v1.1 — candidate document.*
