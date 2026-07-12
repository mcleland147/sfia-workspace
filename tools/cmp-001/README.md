# SFIA Notion Sync

**Composant** : CMP-001 — SFIA Notion Sync
**Version** : v1.1.0
**Status** : Stable
**Production Ready** : Yes

Connecteur local pour alimenter Notion avec les objets structurés du Domain Model SFIA, et les exporter en JSON pour audit (ChatGPT, Cursor).

## Prérequis

- **Node.js** ≥ 18
- Un **workspace Notion** avec droits d'administration sur les bases cibles
- Une **intégration Notion** (Internal Integration) avec accès en écriture aux bases concernées

## Installation

```bash
cd sfia-notion-sync
npm install
cp .env.example .env
```

Renseignez ensuite les variables dans `.env` (voir section Configuration).

## Création de l'intégration Notion

1. Ouvrez [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Cliquez sur **New integration**
3. Nommez l'intégration (ex. `SFIA Notion Sync`)
4. Sélectionnez le workspace cible
5. Capabilities : activez au minimum **Read content** et **Update content**
6. Copiez le **Internal Integration Secret** → valeur de `NOTION_TOKEN`

### Connecter l'intégration aux bases

Pour chaque base Notion (Experiments, Components, ADR, etc.) :

1. Ouvrez la base dans Notion
2. Menu `⋯` → **Connections** → ajoutez votre intégration

Sans cette étape, l'API renverra une erreur d'accès.

## Récupération des Database IDs

1. Ouvrez la base Notion dans le navigateur
2. L'URL ressemble à :
   ```
   https://www.notion.so/workspace/abc123def456...?v=...
   ```
3. Le **Database ID** est le segment de 32 caractères (avec ou sans tirets) :
   ```
   abc123de-f456-7890-abcd-ef1234567890
   ```

Collez chaque ID dans la variable `.env` correspondante.

### Découverte automatique (recommandé)

Si `NOTION_TOKEN` est déjà renseigné dans `.env`, la commande `discover` liste les bases accessibles et peut préremplir les Database IDs :

```bash
node src/cli.js discover
```

La commande affiche le nom et l'ID de chaque base, propose des correspondances automatiques (ex. « Experiments » → `NOTION_DATABASE_EXPERIMENTS`), puis demande confirmation avant d'écrire `.env`.

Pour écrire sans confirmation :

```bash
node src/cli.js discover --yes
```

### Alignement des propriétés Notion

Les schémas JSON (`src/schemas/`) mappent les champs vers des propriétés Notion nommées explicitement via `notionProperty` et `notionType`. **Les noms et types de colonnes dans vos bases Notion doivent correspondre** à ces schémas.

| Type SFIA | Propriété titre (exemple) | Fichier schéma |
|-----------|---------------------------|----------------|
| Experiment | `Experiment` | `experiment.schema.json` |
| Component | `Component` | `component.schema.json` |
| Project | `Project` | `project.schema.json` |
| Prompt | `Prompt` | `prompt.schema.json` |
| Template | `Name` | `template.schema.json` |
| Standard | `Name` | `standard.schema.json` |
| ADR | `ADR` | `adr.schema.json` |
| REX | `REX` | `rex.schema.json` |
| KPI | `KPI` | `kpi.schema.json` |
| Knowledge Article | `Article` | `knowledge.schema.json` |
| Reference Page | `Reference Page` | `reference-page.schema.json` |

Les valeurs `select`, `status` et `multi_select` doivent exister dans Notion ou seront créées automatiquement par l'API.

## Configuration `.env`

```env
NOTION_TOKEN=secret_xxxxxxxx
NOTION_DATABASE_EXPERIMENTS=abc123...
NOTION_DATABASE_COMPONENTS=def456...
NOTION_DATABASE_PROMPTS=...
NOTION_DATABASE_TEMPLATES=...
NOTION_DATABASE_STANDARDS=...
NOTION_DATABASE_ADR=...
NOTION_DATABASE_REX=...
NOTION_DATABASE_KPI=...
NOTION_DATABASE_KNOWLEDGE=...
NOTION_DATABASE_PROJECTS=...
NOTION_DATABASE_REFERENCE_PAGES=...
```

## Utilisation

### Découvrir les bases Notion et configurer `.env`

```bash
node src/cli.js discover
node src/cli.js discover --yes
```

### Lister les types supportés

```bash
node src/cli.js types
```

### Créer un objet

```bash
node src/cli.js create <type> <fichier.json>
```

**Exemples :**

```bash
node src/cli.js create experiment examples/experiment.example.json
node src/cli.js create component examples/component.example.json
node src/cli.js create adr examples/adr.example.json
node src/cli.js create prompt mon-prompt.json
node src/cli.js create template mon-template.json
node src/cli.js create standard mon-standard.json
node src/cli.js create rex mon-rex.json
node src/cli.js create kpi mon-kpi.json
node src/cli.js create knowledge mon-article.json
node src/cli.js create project examples/project.example.json
node src/cli.js create reference-page examples/reference-page.example.json
```

En cas de succès, la CLI affiche l'ID et l'URL de la page Notion créée.

### Exporter vers JSON (audit SFIA)

Export **lecture seule** Notion → fichiers JSON locaux dans `exports/` :

```bash
node src/cli.js export
node src/cli.js export --yes
```

Exporter une seule base :

```bash
node src/cli.js export experiments
node src/cli.js export components
node src/cli.js export projects
```

Fichiers générés :

| Fichier | Base |
|---------|------|
| `experiments.json` | Experiments |
| `components.json` | Components |
| `prompts.json` | Prompts |
| `templates.json` | Templates |
| `standards.json` | Standards |
| `adr.json` | ADR |
| `rex.json` | REX |
| `kpi.json` | KPI |
| `knowledge.json` | Knowledge Articles |
| `projects.json` | Projects |
| `export-manifest.json` | Résumé de l'export |

Chaque entrée exportée contient : `id`, `title`, `properties`, `url`, `createdAt`, `updatedAt`.

Les fichiers existants ne sont pas écrasés sans confirmation (utilisez `--yes` pour forcer).

### Flux typique avec ChatGPT / Cursor

1. Demandez à l'IA de produire un JSON conforme au schéma (`src/schemas/<type>.schema.json`)
2. Sauvegardez le fichier (ex. `output/experiment-001.json`)
3. Lancez `node src/cli.js create experiment output/experiment-001.json`

## Tests

Suite de tests d'intégration Notion (création uniquement, objets préfixés `[TEST SFIA Sync]`) :

```bash
npm run test:all
# ou
node tests/run-all-tests.js
```

Résultat attendu en v1.0.0 : **10/10 objets créés avec succès**.

## Architecture

```
src/
├── cli.js              # Point d'entrée CLI (commander)
├── config.js           # Variables d'environnement et mapping bases
├── notionClient.js     # Client Notion + builders de propriétés
├── validate.js         # Validation JSON légère avant envoi
├── schemas/            # Schémas par type d'objet SFIA (11 types)
└── services/           # Un service de création par type + discover

tests/
└── run-all-tests.js    # Suite de tests d'intégration
```

Chaque schéma définit :

- les champs attendus et leurs types
- le mapping vers les propriétés Notion (`notionProperty`, `notionType`)

## Limites connues (v1.1.0)

- **Création uniquement** via `create` — pas de mise à jour ni de suppression de pages existantes
- **Export lecture seule** — `export` ne modifie pas Notion
- **Pas de mise à jour massive** — une commande = un objet = une page
- **Pas de relations** — les liens entre objets SFIA (Project → Component, ADR → Standard, etc.) ne sont pas gérés
- **Validation simple** — pas de JSON Schema complet (AJV) ; validation custom légère
- **Texte limité** — les champs `rich_text` sont tronqués à 2000 caractères (limite API Notion par bloc)
- **Noms de colonnes** — les bases Notion doivent respecter les noms définis dans les schémas

## Documentation projet

- [CHANGELOG.md](CHANGELOG.md) — historique des versions
- [roadmap.md](roadmap.md) — orientations futures (v1.1, v2)

## Licence

MIT
