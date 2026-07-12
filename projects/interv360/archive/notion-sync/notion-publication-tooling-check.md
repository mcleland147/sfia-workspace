# Interv360 — Vérification outillage publication Notion

**Projet** : PRJ-INTERV360
**Phase** : 02-architecture
**Date diagnostic** : 2026-06-27
**Objet** : vérifier si une publication Notion peut être réalisée depuis Cursor à partir des outils existants du repo — **sans publication effectuée**

**Payload concerné (non modifié)** :

- `notion-sync-figma-v1-closure-payload.json` — `publish_to_notion: false`, `notion_publication_mode: manual_review_required`
- `2026-06-28-notion-sync-2026-06-28-figma-v1-closure-summary.md`

---

## 1. Objectif

Vérifier si une **publication Notion** de la clôture Figma V1 peut être réalisée **depuis Cursor** en s'appuyant sur l'outillage **déjà présent** dans le workspace SFIA.

**Cette vérification n'a pas**

- appelé l'API Notion ;
- publié dans Notion ;
- modifié le payload ni la synthèse ;
- lu ni affiché de secret (`.env` non consulté).

---

## 2. Fichiers recherchés

### Recherche effectuée

Motifs : `notion`, `sync`, `governance`, `CMP-001`, `publish_to_notion`, `NOTION_TOKEN`, `notion_api`, `notion-client`, `notion-sync`, `governance_tool`.

### Éléments trouvés

| Chemin / occurrence | Nature |
|---------------------|--------|
| `tools/cmp-001/` | Connecteur officiel **CMP-001 — SFIA Notion Sync** (CLI Node.js, `@notionhq/client`) |
| `tools/cmp-001/README.md` | Documentation installation, configuration, commandes |
| `tools/cmp-001/workspace.md` | Point d'entrée workspace (`npm install`, `.env`) |
| `tools/cmp-001/.env.example` | Modèle variables `NOTION_TOKEN`, `NOTION_DATABASE_*` |
| `tools/cmp-001/src/cli.js` | CLI : `create`, `update`, `discover`, `export`, `types` |
| `tools/cmp-001/src/notionClient.js` | Client API Notion |
| `tools/cmp-001/src/config.js` | Mapping types → database IDs |
| `tools/cmp-001/src/schemas/*.schema.json` | Schémas Domain Model SFIA (11 types) |
| `tools/cmp-001/exports/` | Exports lecture seule Notion → JSON |
| `exports/notion/` | Copie workspace des exports (audit) |
| `prompts/prompt-catalog.md` | **PROMPT-GOV-001** — sync gouvernance via CMP-001 ; **PROMPT-UXUI-011** |
| `README.md` (racine workspace) | Section connecteur Notion ↔ local |
| `projects/interv360/**/notion-sync-*.md` / `*.json` | Payloads et synthèses gouvernance (cadrage, ADR P1/P2, Figma V1) |
| `projects/interv360/01-cadrage/cadrage-phase-gate.md` | Référence sync Notion cadrage publiée historiquement |

### Non trouvé

| Élément recherché | Résultat |
|-------------------|----------|
| `prompts/governance/notion/` | Dossier **absent** (référencé dans le catalogue uniquement) |
| Script dédié `publish-governance` / `sync-milestone` | **Absent** |
| Lecture automatique de `publish_to_notion` dans CMP-001 | **Absent** — flag documentaire dans payloads projet |
| Mapping direct payload Figma V1 → Notion | **Absent** — format gouvernance custom, non schéma CMP natif |

---

## 3. Outillage identifié

| Élément | Trouvé | Commentaire |
|---------|--------|-------------|
| **Script Notion** | Oui | `tools/cmp-001/src/cli.js` — commandes `create`, `update`, `discover`, `export` |
| **Documentation Notion** | Oui | `tools/cmp-001/README.md`, `workspace.md`, `CHANGELOG.md` ; `README.md` workspace |
| **CMP-001** | Oui | Connecteur officiel v1.1.2 ; `update project` ajouté en 1.1.2 |
| **Payload governance** | Oui (préparé) | Payloads `notion-sync-*-payload.json` — dont Figma V1 closure |
| **Variable NOTION_TOKEN** | Oui (documentée) | `.env.example` ; requis par `config.js` — **présence locale non vérifiée** (`.env` non lu) |
| **Mapping page/database** | Partiel | Database IDs via `NOTION_DATABASE_PROJECTS` etc. ; page Interv360 identifiable dans `exports/notion/projects.json` |
| **Commande de publication** | Partielle | Pas de commande « publish governance » ; publication possible via **`update project <page-id> <json-cmp>`** après transformation du payload |

### Commandes CMP-001 exploitables (depuis `tools/cmp-001/`)

```bash
node src/cli.js discover          # configurer .env (bases Notion)
node src/cli.js update project <page-id> <fichier.json>   # mise à jour page Projet
node src/cli.js create knowledge <fichier.json>           # article connaissance (alternative)
node src/cli.js export projects   # lecture seule — audit
```

---

## 4. Prérequis identifiés

Si publication via CMP-001 :

1. **`NOTION_TOKEN`** renseigné dans `tools/cmp-001/.env` (intégration Notion connectée aux bases).
2. **`NOTION_DATABASE_PROJECTS`** (et autres si besoin) — via `discover` ou saisie manuelle.
3. **Page ID Notion** du projet Interv360 — référence export : entrée `PRJ-INTERV360 — Interv360` dans `exports/notion/projects.json` (id page documenté dans l'export, pas un secret).
4. **Transformation du payload** Figma V1 closure vers schéma **Project** CMP-001 (`title`, `status`, `priority`, `health`, `summary`, `content` markdown) — le payload actuel (`sync_type: governance_milestone_closure`, `decision`, `validated_items`, etc.) **n'est pas** directement consommable par la CLI.
5. **Décision explicite** de publication — lever conceptuellement `publish_to_notion: false` après revue manuelle.
6. **Exécution manuelle** de la commande `update` depuis le terminal (Cursor ou shell) — **aucune automatisation** liée au flag payload.

**Alternative** : publication **manuelle** dans Notion (copier le message §9 de `2026-06-28-notion-sync-2026-06-28-figma-v1-closure-summary.md`) sans CMP-001.

---

## 5. Risques / points de vigilance

- **Token absent ou non configuré** — `update` / `create` échouent sans `NOTION_TOKEN` valide.
- **Mapping page/database** — mauvaise page ID = mise à jour au mauvais objet Notion.
- **Format payload incompatible** — risque d'erreur si le JSON Figma V1 closure est passé tel quel à CMP-001.
- **Payload en `publish_to_notion: false`** — garde-fou actif ; aucun mécanisme repo ne publie tant qu'une action humaine n'est pas déclenchée.
- **Décision explicite requise** — clôture Figma V1 ne doit pas impliquer delivery, backlog, stories ou code.
- **README CMP-001 partiellement obsolète** — section « Limites » indique encore « création uniquement » alors que `update project` existe en v1.1.2.
- **Pas de script de transformation** governance → Project JSON — travail manuel ou tâche dédiée future.

---

## 6. Décision recommandée

**Cas A — outil trouvé** :

> **Publication techniquement possible après validation des prérequis et décision explicite.**

Le repo dispose de **CMP-001** (`tools/cmp-001/`) comme connecteur Notion exploitable depuis Cursor (terminal intégré). Il n'existe **pas** de script bout-en-bout pour le payload Figma V1 closure : il faudra **transformer** le contenu gouvernance en JSON conforme au schéma Project (ou publier manuellement la synthèse markdown).

**Non réalisé dans ce diagnostic** : appel API, publication, modification payload.

---

## 7. Conclusion

Un **mécanisme de publication Notion exploitable existe** dans le repo via **CMP-001** (CLI `update project` / `create knowledge`, configuration `.env`, exports pour retrouver les page IDs).

Il **n'existe pas** de pipeline automatique lisant `notion-sync-figma-v1-closure-payload.json` ni respectant automatiquement `publish_to_notion: false`.

**Prochaine action recommandée** (hors scope immédiat) :

1. Décision explicite d'autoriser la publication Figma V1 en gouvernance Notion.
2. Produire un **JSON Project CMP-001** dérivé de la synthèse closure (ou tâche de transformation dédiée).
3. Exécuter manuellement `node src/cli.js update project <page-id> <fichier-transformé.json>` depuis `tools/cmp-001/` avec `.env` configuré — **ou** collage manuel du message Notion proposé.

**Aucune publication n'a été effectuée dans le cadre de cette vérification.**

---

*Diagnostic outillage Notion — projet Interv360 — gouvernance SFIA — lecture seule.*
