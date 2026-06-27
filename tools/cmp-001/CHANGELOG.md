# Changelog

Toutes les modifications notables de **CMP-001 — SFIA Notion Sync** sont documentées dans ce fichier.

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et le projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.1.1] — 2026-06-27

### Fixed / Added

- Ajout du support `page_content` pour les Knowledge Articles.
- Création de contenus de page Notion structurés depuis JSON.
- Validation avec KNO-001 — SFIA Engineering Principles.

## [1.1.0] — 2026-06-27

### Added

- Commande **`export`** — export lecture seule Notion → JSON local pour audit SFIA (ChatGPT, Cursor)
  - `node src/cli.js export` — exporte toutes les bases configurées dans `.env`
  - `node src/cli.js export <type>` — exporte une base (ex. `experiments`, `components`, `projects`)
  - Génération du dossier `exports/` avec un fichier JSON par base
  - Fichier `export-manifest.json` (date, bases exportées, nombre d'objets)
  - Confirmation avant écrasement des fichiers existants (`--yes` pour forcer)
- Script npm `export`
- Fonctions de lecture Notion : `queryDatabasePages`, `retrieveDatabase`

### Changed

- Version du composant : **v1.1.0**

### Security

- Export en **lecture seule** — aucune modification ni suppression dans Notion

## [1.0.0] — 2026-06-27

### Added

- Connecteur local Node.js pour créer des objets SFIA structurés dans Notion via l'API officielle (`@notionhq/client`)
- Support des **11 objets du Domain Model SFIA** :
  - Experiment, Component, Project, Prompt, Template, Standard, ADR, REX, KPI, Knowledge Article, Reference Page
- CLI (`commander`) avec les commandes :
  - `create <type> <fichier.json>` — création d'une page Notion à partir d'un JSON validé
  - `discover` — liste des bases accessibles et préremplissage automatique du `.env`
  - `types` — liste des types supportés
- Schémas JSON par type (`src/schemas/`) avec mapping explicite vers les propriétés Notion
- Services de création dédiés par type (`src/services/`)
- Validation JSON légère avant envoi (`src/validate.js`)
- Configuration par variables d'environnement (`.env.example`)
- Exemples JSON (`examples/`)
- Suite de tests d'intégration (`tests/run-all-tests.js`, `npm run test:all`)

### Validated

- Tests d'intégration Notion : **10/10 objets créés avec succès**
  - Experiment, Component, Prompt, Template, Standard, ADR, REX, KPI, Knowledge Article, Project
- Objets de test identifiables via le préfixe `[TEST SFIA Sync]`
- Aucune suppression de données dans les scripts livrés

### Known limitations

- Création uniquement (pas de mise à jour ni de suppression via le connecteur)
- Pas de gestion des relations Notion entre objets
- Les schémas doivent correspondre aux colonnes des bases Notion cibles
- Champs `rich_text` limités à 2000 caractères par bloc (contrainte API Notion)

[1.1.1]: https://github.com/example/sfia-notion-sync/releases/tag/v1.1.1
[1.1.0]: https://github.com/example/sfia-notion-sync/releases/tag/v1.1.0
[1.0.0]: https://github.com/example/sfia-notion-sync/releases/tag/v1.0.0
