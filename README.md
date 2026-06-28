# SFIA Workspace

Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture).

Ce dépôt est le point d'entrée pour travailler dans Cursor sur les projets, composants et artefacts de la plateforme SFIA.

## Rôles des référentiels

| Référentiel | Rôle |
|-------------|------|
| **Notion** | Gouvernance, objets SFIA, décisions, connaissance durable |
| **Git** (ce repo + dépôts projet) | Code source, artefacts versionnés, structure des projets |
| **Workspace local** (`sfia-workspace`) | Zone de travail unifiée pour Cursor, exports et outils |

## Connecteur Notion ↔ local

**CMP-001 — SFIA Notion Sync** (`tools/cmp-001/`) est le connecteur officiel entre Notion et ce workspace :

- `discover` — configurer les bases Notion
- `create` — créer des objets SFIA dans Notion depuis du JSON
- `export` — exporter Notion vers `exports/notion/` pour audit (ChatGPT, Cursor)

```bash
cd tools/cmp-001
npm install
cp .env.example .env
node src/cli.js export --yes
```

Copier les exports vers le workspace :

```bash
cp -r tools/cmp-001/exports/* exports/notion/
```

## Structure

```
sfia-workspace/
├── docs/              # Documentation méthodologique et gouvernance du produit SFIA
│   └── methods/       # Méthodes SFIA réutilisables
│       └── roles/     # Méthodes SFIA par rôle
├── prompts/           # Prompts réutilisables
├── templates/         # Modèles de livrables
├── standards/         # Standards et règles communes
├── projects/          # Projets pilotes alimentant SFIA
├── tools/             # Outillage SFIA
├── components/        # Composants réutilisables
└── exports/           # Exports générés (ex. exports/notion/)
```

### Référentiels réutilisables

| Dossier | Contenu |
|---------|---------|
| **docs/** | Documentation méthodologique et gouvernance du produit SFIA |
| **docs/methods/** | Méthodes SFIA — savoir-faire, savoir-être, postures par rôle |
| **docs/methods/roles/** | Templates Role Method extraits des projets pilotes |
| **prompts/** | Prompts réutilisables |
| **templates/** | Modèles de livrables |
| **standards/** | Standards et règles communes |
| **projects/** | Projets pilotes (ex. Interv360) alimentant la capitalisation SFIA |
| **tools/** | Outillage SFIA (ex. CMP-001) |
| **components/** | Composants réutilisables |
| **exports/** | Exports générés |

## Projets réels

Les projets applicatifs (ex. Interv360) doivent être créés dans **`projects/`**, chacun avec son propre dépôt Git si nécessaire.

Ce workspace ne remplace pas le dépôt d'un projet : il fournit le cadre SFIA commun.

## Principes

Voir dans Notion : **KNO-001 — SFIA Engineering Principles**.

## Version CMP-001 embarquée

`tools/cmp-001/` — SFIA Notion Sync **v1.1.1**
