---
status: candidate
version: v1.1
cycle_type: technical / Notion Provisioning Engine design
scope: Generic config-driven Notion provisioning — inspect & dry-run foundation
---

# SFIA Notion Provisioning Engine — Design

**Version :** v1.1  
**Statut :** Candidate  
**Cycle :** Notion Provisioning Engine Design & Dry-run Foundation  
**Branche :** `notion/provisioning-engine-design`  
**Base :** `main` @ post Lot 0A (`a7b22ec`)

## 1. Objectif

Transformer l'approche Notion en **outil générique piloté par configuration**, et non en script jetable spécifique à SFIA v1.1.

```text
Repo SFIA → configuration Notion → Notion Provisioning Engine → inspect / dry-run / apply contrôlé
```

Ce cycle **n'exécute pas** d'apply Notion live.

## 2. Audit de `tools/cmp-001/`

### 2.1 Stack existante

| Élément | Valeur |
|---------|--------|
| Langage | JavaScript (ES modules) |
| Runtime | Node.js ≥ 18 |
| CLI | `commander` via `src/cli.js` |
| Client Notion | `@notionhq/client` ^2.2.15 |
| Config | `.env` + schémas JSON par type d'objet |
| Version package | 1.1.2 (`sfia-notion-sync`) |

### 2.2 Capacités actuelles (CMP-001 legacy)

| Commande | Rôle | Mode |
|----------|------|------|
| `create <type> <json>` | Créer une page dans une base existante | **Write** |
| `update <type> <page-id> <json>` | Mettre à jour knowledge/project | **Write** |
| `export [type]` | Exporter bases → JSON local | **Read-only** |
| `discover` | Lister bases + remplir `.env` | **Read-only** |
| `types` | Lister types supportés | Local |
| `archive-test-objects.js` | Archiver objets test | **Write** (ciblé) |

**11 types d'objets** mappés via `src/schemas/*.schema.json` : experiment, component, prompt, template, standard, adr, rex, kpi, knowledge, project, reference-page.

### 2.3 Ce qui peut être réutilisé

| Composant | Réutilisation |
|-----------|---------------|
| `src/notionClient.js` | Client, builders propriétés, markdown→blocks, search databases — **apply futur** |
| `src/config.js` | Pattern env vars — **référence**, pas remplacement config provisioning |
| `@notionhq/client` | Dépendance existante — **aucune nouvelle dépendance** |
| `scripts/` convention | Emplacement `notion-provision.js` cohérent |
| Garde-fous export read-only | Modèle pour mode inspect sans write |

### 2.4 Ce qu'il ne faut pas réutiliser

| Élément | Raison |
|---------|--------|
| Payloads `examples/real-objects/*.json` | Objets legacy CMP — Lot 0A : pas de reprise |
| Exports `exports/*.json` | Snapshots juin 2026 — obsolètes pour v1.1 |
| Schémas 11 types legacy | Orientés registry CMP, pas modèle 7 sections v1.1 |
| Commande `create` directe | Un objet = une page — pas provisioning workspace |
| Import CSV export Notion | Interdit — Lot 0A |
| Database IDs legacy `.env` | Bases anciennes — nouvel espace v1.1 |

### 2.5 Risques legacy identifiés

- **Couplage fort** schéma JSON → base Notion existante (noms colonnes fixes)
- **Pas de dry-run** dans CLI actuelle
- **Pas de planner** — actions ad hoc par commande
- **Write par défaut** sur `create` — risque si utilisé pour provisioning
- **Relations non gérées** entre bases

## 3. Décision réutilisation vs nouveau module

**Décision : extension modulaire de CMP-001, pas remplacement.**

| Couche | Statut |
|--------|--------|
| CMP-001 CLI existante (`create`, `export`, `discover`) | **Conservée** — usage objet par objet |
| Nouveau module `src/provisioning/` | **Créé** — config-driven workspace provisioning |
| Nouveau script `scripts/notion-provision.js` | **Créé** — inspect / dry-run / apply (futur) |
| Config `config/sfia-v1-1-workspace.config.json` | **Créé** — première config cible |

Le provisioning engine **coexiste** avec le connecteur objet existant. Lot 0B utilisera le provisioning engine ; la publication contenu Lot 1+ pourra combiner provisioning + create ciblé.

## 4. Architecture cible

```text
Notion Provisioning Engine
├── notion client          → réutilise src/notionClient.js (apply futur)
├── config loader          → src/provisioning/configLoader.js
├── planner                → src/provisioning/planner.js
├── inspector              → src/provisioning/inspector.js
├── dry-run renderer       → src/provisioning/dryRunRenderer.js
├── apply executor         → [FUTUR] — non implémenté ce cycle
├── report writer          → dry-run console + sfia-notion-provisioning-dry-run-report.md
└── safety guardrails      → src/provisioning/guardrails.js
```

### 4.1 Flux

```text
config JSON
    ↓
configLoader (validate + merge strategy)
    ↓
planner (build action plan)
    ↓
┌─────────────┬──────────────┬─────────────┐
│  --inspect  │  --dry-run   │  --apply    │
│  env+checks │  render plan │  BLOCKED    │
└─────────────┴──────────────┴─────────────┘
```

### 4.2 Configuration décrite

La config JSON décrit :

- page racine cible (`rootPage.title`)
- 8 sections modèle v1.1
- 22 sous-pages planifiées (statut `planned` — contenu Lot 1+)
- 8 bases avec propriétés alignées modèle cible §5
- stratégie : `create-only`, `no-delete`, `no legacy import`
- variables env : `NOTION_PARENT_PAGE_ID`, `NOTION_TOKEN` (placeholders)

### 4.3 Modes

| Mode | Ce cycle | Comportement |
|------|----------|--------------|
| `--inspect` | **Implémenté** | Valide config, env, guardrails — **aucun appel API** |
| `--dry-run` | **Implémenté** | Affiche plan de création — **aucun appel API** |
| `--apply` | **Bloqué** | Retourne `APPLY_DISABLED_IN_THIS_CYCLE` |

## 5. Stratégie config-driven

| Règle | Application |
|-------|-------------|
| Config-driven | Toute structure workspace dans JSON versionné |
| Idempotent (futur apply) | Planner prévoit create-only ; update/delete opt-in |
| No-delete par défaut | `allowDelete: false` |
| No-import CSV legacy | `importLegacyCsv: false` — Lot 0A |
| No legacy payload reuse | `reuseLegacyPayloads: false` |
| Secrets jamais commités | `${NOTION_TOKEN}`, `${NOTION_PARENT_PAGE_ID}` placeholders |
| Repo = source de vérité | `repoLinks` dans config ; contenu Lot 1+ depuis Git |

## 6. Configuration SFIA v1.1

**Fichier :** `tools/cmp-001/config/sfia-v1-1-workspace.config.json`

| Élément | Valeur |
|---------|--------|
| Root page | `SFIA v1.1 — Workspace` |
| Sections | 8 (Accueil + 7 sections numérotées) |
| Sous-pages planifiées | 22 |
| Bases | 8 (Documents, Prompt Templates, Prompt Cards, Checklists, ADR, Practices, Projets, Assets) |
| Propriétés | Alignées `sfia-notion-target-model-and-integration-plan.md` §5 |
| Entrées initiales | 1 projet Interv360 (repo-driven, pas CSV) |

## 7. Garde-fous

- `--apply` bloqué explicitement
- Aucun appel API Notion dans inspect/dry-run
- Aucun token affiché
- Aucun ID Notion privé dans config commitée
- Chemins protégés repo non modifiés
- Payloads historiques non réutilisés

## 8. Limites de ce cycle

| Limite | Impact |
|--------|--------|
| Apply non implémenté | Lot 0B nécessitera cycle apply dédié |
| Pas d'appel API read-only | Inspect local uniquement — pas de vérification parent page live |
| Sous-pages `planned` | Structure vide — contenu éditorial Lot 1+ |
| Relations bases | Non modélisées — cycle futur |
| Idempotence apply | Spécifiée, non testée live |
| Lockfile | Non modifié — aucune nouvelle dépendance |

## 9. Prochaines étapes

1. **Validation humaine** de ce design
2. **Lot 0B** — création espace Notion structure vide (apply cycle dédié avec GO humain)
3. **Implémenter apply executor** — réutiliser `notionClient.js`, create pages + databases
4. **Lot 1** — publication éditoriale Operating Model depuis repo
5. **Tests intégration** apply avec token sandbox si disponible

## 10. Décision

**Décision proposée : NOTION PROVISIONING ENGINE DESIGN READY WITH RESERVES**

| Critère | Statut |
|---------|--------|
| Audit CMP-001 | Oui — §2 |
| Architecture générique | Oui — §4 |
| Config SFIA v1.1 | Oui |
| Mode inspect | Oui — testé |
| Mode dry-run | Oui — testé |
| Apply bloqué | Oui |
| Aucune action Notion live | Confirmé |
| Aucun secret commité | Confirmé |

**Réserves :**

- Apply executor à implémenter (cycle futur)
- Env vars absentes en local — normal pour dry-run
- Lot 0A mergé localement dans `main` — push origin/main et PR Lot 0A à finaliser côté Morris (`gh` indisponible dans l'environnement agent)
