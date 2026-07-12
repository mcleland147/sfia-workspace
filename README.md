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
├── docs/                      # Documentation plateforme SFIA
│   ├── practices/             # Pratiques plateforme par rôle/discipline
│   ├── templates/             # Templates plateforme
│   └── standards/             # Standards plateforme
├── method/                    # Méthodes de delivery SFIA
│   ├── sfia-fast-track/       # Méthode active
│   └── complementary/         # Méthodes complémentaires
├── prompts/                   # Familles de prompts
├── projects/                  # Projets pilotes (ex. Interv360)
├── tools/cmp-001/             # Connecteur Notion CMP
├── components/                # Composants réutilisables
└── exports/notion/            # Snapshots JSON Notion
```

### Référentiels réutilisables

| Dossier | Contenu |
|---------|---------|
| **docs/** | Documentation plateforme, architecture, standards, tooling |
| **docs/practices/** | Pratiques plateforme — rôles, BPMN, archi fonctionnelle, UX |
| **method/sfia-fast-track/** | Méthode active de delivery (cycles, templates, checklists) |
| **method/complementary/** | Méthodes delivery complémentaires |
| **prompts/** | Prompts réutilisables et catalogue |
| **projects/** | Projets pilotes (ex. Interv360) |
| **tools/** | Outillage SFIA (ex. CMP-001) |
| **exports/notion/** | Exports JSON Notion pour audit local |

## Method Layers

| Zone | Rôle |
|------|------|
| `method/sfia-fast-track/` | Méthode active de delivery |
| `method/complementary/` | Méthodes complémentaires |
| `docs/practices/` | Pratiques plateforme par rôle ou discipline |
| `prompts/` | Assets de prompts |

## Notion

Notion est l'IDE métier cible de la SFA.

La mise à jour Notion doit être faite dans un chantier dédié, à partir du repo nettoyé et d'un mapping éditorialisé (`method/sfia-fast-track/documentation/archive/notion/notion-target-content-map.md`).

`sfia-notion-sync` est un repo séparé et n'est pas présent dans ce workspace.

## Projets réels

Les projets applicatifs (ex. Interv360) doivent être créés dans **`projects/`**, chacun avec son propre dépôt Git si nécessaire.

Ce workspace ne remplace pas le dépôt d'un projet : il fournit le cadre SFIA commun.

## Principes

Voir dans Notion : **KNO-001 — SFIA Engineering Principles**.

## Version CMP-001 embarquée

`tools/cmp-001/` — SFIA Notion Sync **v1.1.1**
