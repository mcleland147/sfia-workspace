# SFIA Fast Track — Rules Update

## 1. Objectif

Ce document formalise les règles mises à jour de SFIA Fast Track après la consolidation Interv360.

Il transforme les apprentissages des chantiers 1 à 4 en règles opérationnelles applicables aux prochains cycles.

## 2. Règles fondamentales

### Règle 1 — Un cycle = un objectif

Un cycle SFIA doit porter un seul objectif principal.

Exemples :

- cadrage produit ;
- architecture fonctionnelle ;
- architecture technique ;
- MVP ;
- UI premium ;
- backend/API ;
- documentation ;
- audit ;
- REX ;
- release ;
- publication Notion.

À éviter :

- UI + backend + auth dans le même cycle ;
- refonte design + modification modèle métier ;
- documentation + réorganisation + publication Notion ;
- correction opportuniste hors périmètre.

### Règle 2 — Garde-fous explicites

Chaque cycle doit préciser :

- ce qui est autorisé ;
- ce qui est interdit ;
- les fichiers ou zones hors scope ;
- les validations attendues ;
- les critères de sortie.

### Règle 3 — PR unique par cycle

La PR unique est le format par défaut.

Elle doit être lisible, ciblée et accompagnée d'un body explicite.

### Règle 4 — Post-merge obligatoire

Toute PR significative doit être suivie d'un commit post-merge documentant :

- PR ;
- branche source ;
- branche cible ;
- commit d'intégration ;
- statut ;
- garde-fous ;
- décision ;
- prochaine étape.

### Règle 5 — Audit avant cycle majeur

Avant un nouveau cycle produit majeur, auditer l'état réel du socle.

### Règle 6 — REX après jalon majeur

Après un jalon majeur générant des apprentissages réutilisables, produire un REX.

### Règle 7 — Figma Design-first pour UI premium

Toute UI premium doit partir d'une vraie maquette Figma Design validée.

Figma Make peut être utilisé en exploration, mais ne doit pas être la source de vérité finale.

### Règle 8 — Notion jamais automatique

Aucune publication Notion ne doit être faite sans plan de publication validé.

### Règle 9 — Backend/API dans cycle dédié

Toute modification backend/API doit avoir un cycle distinct avec contrat, tests et impacts documentés.

### Règle 10 — Automatisation progressive

Automatiser d'abord :

- prompts ;
- templates ;
- validations ;
- documentation ;
- PR body ;
- release notes.

Ne pas automatiser la génération complète d'application avant d'avoir stabilisé les garde-fous exécutables.

## 3. Règles de branche

| Type de cycle | Convention recommandée |
|---------------|-------------------------|
| Consolidation | `consolidation/...` |
| Méthode | `method/...` |
| UI | `ui/...` |
| Delivery produit | `delivery/...` |
| Feature | `feature/...` |
| Correction | `fix/...` |
| Documentation | `docs/...` |
| Release | `release/...` |

## 4. Règles de commit

Commits recommandés :

| Type | Format |
|------|--------|
| Documentation | `docs: ...` |
| Fonctionnel | `feat: ...` |
| Correction | `fix: ...` |
| Refactor | `refactor: ...` |
| Tests | `test: ...` |
| Build/outillage | `chore: ...` |

## 5. Règles de validation

Chaque cycle doit se terminer par :

- `git status --short` ;
- `git diff --stat` ;
- vérification des zones hors scope ;
- build/tests si code ;
- confirmation docs-only si documentation ;
- décision de suite.

## 6. Règles de sortie de cycle

Un cycle est terminé quand :

- le livrable attendu existe ;
- les validations sont passées ;
- le diff est conforme ;
- le commit est créé ;
- la PR est mergée si nécessaire ;
- le post-merge est documenté ;
- la roadmap est mise à jour.

## 7. Règles anti-dérive

Interdits par défaut :

- ajout auth non cadrée ;
- ajout CRUD non cadré ;
- ajout backend/API dans un cycle UI ;
- modification CI opportuniste ;
- publication Notion sans plan ;
- suppression documentaire sans audit ;
- tracking exports Figma ;
- modification `sfia-notion-sync` hors cycle dédié.

## 8. Décision

Décision :

> Les règles SFIA Fast Track deviennent exécutables, vérifiables et réutilisables. Elles doivent guider les futurs prompts, templates, checklists et moteurs d'automatisation.
