# SFIA Workspace — Global Audit

## 1. Objectif

Ce document audite toute l'arborescence du workspace SFIA.

Racine auditée :

`/Users/morris/Projects/sfia-workspace`

L'objectif est de comprendre l'état réel du workspace avant nettoyage physique :

- dossiers existants ;
- familles documentaires ;
- documents actifs ;
- documents historiques ;
- doublons ;
- documents obsolètes ;
- documents à archiver ;
- documents utiles à Notion ;
- documents utiles à l'automatisation ;
- documents utiles aux futurs projets ;
- éléments techniques à ne pas toucher.

## 2. Périmètre audité

| Zone | Auditée | Commentaire |
|------|---------|-------------|
| `docs/` | Oui | Documentation transverse plateforme SFIA |
| `method/` | Oui | Méthode SFIA active + `interv360-realization` historique |
| `methods/` | Oui | Controlled Delivery et méthodes parallèles |
| `projects/` | Oui | Interv360 (doc + code inventoriés, code non modifié) |
| `prompts/` | Oui | Familles de prompts SFIA |
| `tools/` | Oui | CMP-001 et outillage Notion (hors `node_modules`) |
| `exports/` | Oui | Exports Notion préparés |
| `scripts/` | Non présent | Dossier absent à la racine |
| `sfia-notion-sync/` | Non présent | Repo séparé — référencé mais absent de ce workspace |
| Code applicatif Interv360 | Inventorié uniquement | `app/` + `backend/` — ne pas modifier |
| Exports Figma | Non | `projects/interv360/03-design/exports/` non suivis |
| `.git`, `node_modules` | Non | Exclus des inventaires actifs |

**Inventaires produits :** `documentation/workspace-audit/pre-cleanup-*.txt`

## 3. Cartographie actuelle

Arborescence de haut niveau (niveau 2) :

```text
sfia-workspace/
├── README.md
├── .github/workflows/
├── .cursor/mcp-templates/
├── components/
├── docker/penpot/
├── docs/                    # Plateforme SFIA transverse
│   ├── adr/
│   ├── architecture/
│   ├── foundation/
│   ├── knowledge/
│   ├── methods/             # Méthodes rôles (BA, PO, architecte…)
│   ├── rex/
│   ├── roadmaps/
│   ├── standards/
│   ├── templates/
│   └── tooling/penpot/
├── exports/notion/
├── method/
│   ├── interv360-realization/   # Méthode pré-Fast Track
│   └── sfia-fast-track/         # Méthode active + consolidation
├── methods/controlled-delivery/
├── projects/interv360/
│   ├── 00-intake/
│   ├── 01-cadrage/
│   ├── 02-architecture/         # ADR + logs Notion + Figma v1
│   ├── 03-design/
│   ├── 07-delivery/             # Delivery actif + inc-* historique
│   ├── 07-rex/
│   ├── 08-presentation/
│   ├── 09-architecture/         # Roadmaps produit post-MVP
│   ├── app/                     # Code frontend
│   └── backend/                 # Code backend
├── prompts/                     # Catalogues prompts par domaine
└── tools/cmp-001/               # Outil publication composants Notion
```

**Observations structurelles immédiates :**

- numérotation Interv360 non continue (`07-delivery`, `07-rex`, `09-architecture` — pas de `04`–`06` à la racine projet) ;
- `method/` et `methods/` coexistent (singulier vs pluriel) ;
- `docs/methods/` et `method/sfia-fast-track/` portent tous deux de la méthode ;
- logs Notion opérationnels mélangés à l'architecture dans `02-architecture/` ;
- micro-incréments `inc-01-*` mélangés au delivery MVP dans `07-delivery/`.

## 4. Volumétrie

| Zone | Fichiers (hors `node_modules`, hors exports Figma) | Rôle observé |
|------|---------------------------------------------------|--------------|
| `docs/` | 58 | Vision plateforme, méthodes rôles, templates BPMN/UX, Penpot |
| `method/` | 36 | Fast Track actif + realization historique + inventaires audit |
| `methods/` | 15 | Controlled Delivery |
| `projects/interv360/` (total) | 483 | Doc projet + code + README techniques |
| `projects/interv360/` (Markdown seul) | ~251 | Documentation projet |
| `projects/interv360/app` + `backend` (code) | ~143 | TypeScript, config, tests — ne pas toucher |
| `prompts/` | 21 | Prompt families + catalogue |
| `tools/cmp-001/` (hors `node_modules`) | 72 | CLI Notion, docs outillage |
| `exports/notion/` | 13 | Exports préparés |
| `sfia-notion-sync/` | 0 | Absent — repo externe |
| **Total workspace** | **~715** | Dont **~463** Markdown |

*Note : l'inventaire brut `pre-cleanup-all-files.txt` compte 1213 entrées car il inclut `tools/cmp-001/node_modules` (~507 fichiers dépendances).*

## 5. Familles documentaires identifiées

### 5.1. Méthode SFIA active (Fast Track)

Documents de référence actuels sous `method/sfia-fast-track/` :

| Document | Rôle |
|----------|------|
| `README.md` | Point d'entrée méthode |
| `sfia-global-capitalization-reference.md` | Règles globales validées |
| `sfia-automation-architecture.md` | Vision orchestration IA |
| `sfia-rules-update.md` | Règles opérationnelles |
| `sfia-architecture-standards.md` | Standards architecture |
| `sfia-consolidation-roadmap.md` | Pilotage consolidation |
| `figma-design-first-ui-method.md` | Règle UI premium |
| `interv360-mvp-delivery-capitalization.md` | Pattern MVP |
| `interv360-final-capitalization.md` | Clôture Interv360 |
| `interv360-application-rex.md` | REX Interv360 |
| `documentation-audit.md` | Audit doc (Chantier 4) |
| `documentation-structure-target.md` | Cible arborescence méthode |
| `notion-publication-plan.md` | Plan Notion |
| `templates/*` (6) | Templates cycle, PR, post-merge, audit, REX, MVP |
| `checklists/*` (3) | Validation, garde-fous, Notion |

### 5.2. Méthode SFIA historique

`method/interv360-realization/` — 8 fichiers, pré-Fast Track :

- `realization-method.md`, `realization-deliverables-standard.md`
- `realization-checklists.md`, `realization-templates.md`, `realization-prompt-family.md`
- `capitalization-plan.md`, `capitalization-summary.md` (obsolètes)
- `notion-integration-plan.md` (remplacé par `notion-publication-plan.md`)

### 5.3. Controlled Delivery / méthodes parallèles

`methods/controlled-delivery/` — 13 fichiers :

- Standard, checklist, template, publication package
- Relation avec Fast Track : **non documentée explicitement**
- Rôle : livraison structurée / publication — complémentaire, pas remplaçante

`docs/methods/` — ~20 fichiers :

- Méthodes par rôle (architecte, BA, PO, PM, QA, RSSI, UX)
- Méthodes process (BPMN, UX reprise, architecture fonctionnelle)
- Niveau plateforme SFIA, antérieur ou parallèle à Fast Track

### 5.4. Projet Interv360

| Phase | Volume `.md` | Contenu principal |
|-------|--------------|-------------------|
| `00-intake/` | 3 | Intake, stratégie test |
| `01-cadrage/` | 15 | Cadrage métier, arbitrages MVP, brief UX |
| `02-architecture/` | 87 | ADR (9), Figma v1, clarification, **~35 logs notion-sync** |
| `03-design/` | 16 | Design system, instructions Figma |
| `07-delivery/` | 111 | MVP lots, premium UI, **~50 inc-01 à inc-04**, release readiness |
| `07-rex/` | 1 | README REX (léger) |
| `08-presentation/` | 4 | Démo, runbook, script présentation |
| `09-architecture/` | 14 | Roadmaps produit post-MVP, auth framing |
| `app/` + `backend/` | README + code | **Ne pas toucher** |

Documents structurants actifs :

- `07-delivery/current-application-audit.md`
- `07-delivery/premium-design-system.md`
- `07-delivery/2026-07-02-mvp-release-readiness.md`
- `09-architecture/interv360-mvp-final-roadmap.md`
- `02-architecture/adr/ADR-001` à `ADR-008`

### 5.5. Notion / IDE métier

| Type | Emplacement | Volume | Statut |
|------|-------------|--------|--------|
| Plan publication actuel | `method/sfia-fast-track/notion-publication-plan.md` | 1 | Actif |
| Plan ancien | `method/interv360-realization/notion-integration-plan.md` | 1 | Obsolète |
| Logs sync architecture | `projects/interv360/02-architecture/notion-sync-*` | ~35 | Archive |
| Logs cadrage | `projects/interv360/01-cadrage/notion-sync-summary.md` | 1 | Archive |
| Outil CMP | `tools/cmp-001/` | 72 | Technique — ne pas modifier sans cycle |
| Exports préparés | `exports/notion/` | 13 | À relier au plan publication |
| Repo sync | `sfia-notion-sync/` | — | **Absent** — repo séparé |

### 5.6. Automatisation / orchestration

| Type | Emplacement | Usage futur moteurs |
|------|-------------|---------------------|
| Architecture automation | `sfia-automation-architecture.md` | Intake, Framing, Validation, Documentation, Release |
| Règles exécutables | `sfia-rules-update.md`, `guardrails-checklist.md` | Validation Engine |
| Templates | `templates/*` | Prompt Generation Engine |
| Checklists | `checklists/*` | Validation Engine |
| Prompts | `prompts/` + `docs/templates/` | Prompt Generation Engine |
| Scripts | Absent à racine | Repository Execution Engine (futur) |

## 6. Documents actifs à conserver

| Document | Zone actuelle | Rôle | Zone cible proposée |
|----------|---------------|------|---------------------|
| `sfia-global-capitalization-reference.md` | `method/sfia-fast-track/` | Méthode référence | `method/sfia-fast-track/core/` |
| `sfia-automation-architecture.md` | idem | Vision automation | `method/sfia-fast-track/automation/` |
| `sfia-rules-update.md` | idem | Règles | `method/sfia-fast-track/core/` |
| `sfia-architecture-standards.md` | idem | Standards | `method/sfia-fast-track/core/` |
| `README.md` | idem | Index | Racine `method/sfia-fast-track/` |
| `current-application-audit.md` | `projects/interv360/07-delivery/` | Audit app | `projects/interv360/06-audit-rex/` |
| `interv360-application-rex.md` | `method/sfia-fast-track/` | REX | `method/sfia-fast-track/audit-rex/` ou projet |
| `premium-design-system.md` | `07-delivery/` | Cycle UI | `projects/interv360/04-delivery/` |
| `ADR-001` à `008` | `02-architecture/adr/` | Décisions | Conserver — index ADR |
| `docs/architecture/sfia-platform-architecture.md` | `docs/` | Vision plateforme | Conserver |
| `controlled-delivery-standard.md` | `methods/` | Méthode parallèle | `methods/controlled-delivery/` + README lien FT |

## 7. Documents à déplacer (après validation)

| Document / famille | Emplacement actuel | Emplacement cible | Justification |
|--------------------|-------------------|-------------------|---------------|
| `sfia-fast-track/*.md` core | racine fast-track | `core/`, `automation/`, `documentation/` | Séparation familles |
| `interv360-realization/*` | `method/interv360-realization/` | `method/sfia-fast-track/documentation/archive/interv360-realization/` | Pré-Fast Track |
| `inc-01-*` à `inc-04-*` (~57) | `07-delivery/` | `projects/interv360/archive/inc/` | Historique pré-MVP |
| `notion-sync-*` (~35) | `02-architecture/` | `projects/interv360/archive/notion-sync/` | Logs opérationnels |
| `clarification-*` (~10) | `02-architecture/` | `projects/interv360/archive/clarification/` | Ateliers clos |
| `cmp-prompt-schema-extension-*` | `02-architecture/` | `projects/interv360/archive/cmp/` | Extensions passées |
| `current-application-audit.md` | `07-delivery/` | `06-audit-rex/` | Séparer audit du delivery |
| `mvp-release-notes.md` | `06-release/` si présent | `05-release/` | Harmoniser numérotation |

## 8. Documents à archiver

| Document ou famille | Emplacement actuel | Archive cible | Raison |
|---------------------|-------------------|---------------|--------|
| `method/interv360-realization/*` | `method/` | `method/sfia-fast-track/documentation/archive/interv360-realization/` | Remplacé par Fast Track |
| `inc-01-*` (~45) | `07-delivery/` | `projects/interv360/archive/inc-01/` | Micro-incréments clos |
| `inc-02-*`, `inc-03-*`, `inc-04-*` | `07-delivery/` | `projects/interv360/archive/inc-02-04/` | Idem |
| `notion-sync-*` (~35) | `02-architecture/` | `projects/interv360/archive/notion-sync/` | Logs, pas référence |
| `clarification-*` | `02-architecture/` | `projects/interv360/archive/clarification/` | Cycles clos |
| `capitalization-plan/summary` | `interv360-realization/` | archive | Remplacés |
| `notion-integration-plan.md` | `interv360-realization/` | archive | Remplacé Chantier 4 |

**Volume archive estimé : ~90–100 fichiers Markdown** (sans suppression).

## 9. Documents potentiellement supprimables

Important : ne rien supprimer sans validation humaine.

| Document | Raison potentielle | Alternative recommandée |
|----------|-------------------|---------------------------|
| `.DS_Store` | Artefact macOS | Ajouter à `.gitignore` si suivi — ne pas committer |
| Doublons `*-summary` + source | Redondance | Archiver summary ou fusionner |
| `tools/cmp-001/node_modules/` | Dépendances | Déjà ignoré — ne pas versionner |
| Entrées inventaire dans `workspace-audit/*.txt` | Snapshots pré-nettoyage | Conserver comme baseline audit |

## 10. Doublons et chevauchements

| Sujet | Documents concernés | Problème | Décision proposée |
|-------|---------------------|----------|-------------------|
| Capitalisation | final / global / MVP / realization | 4 couches | Conserver rôles distincts + README index |
| Méthode delivery | Fast Track / Controlled Delivery / realization | 3 méthodes | Page « quelle méthode » + archiver realization |
| Figma | Design-first / premium-design / figma-v1 docs | 3 époques | Règle / cycle / archive |
| Notion | 3 plans + 35 logs | Bruit | 1 plan actif + archive logs |
| Plateforme vs Fast Track | `docs/architecture/*` vs `method/sfia-fast-track/*` | Double couche | `docs/` = plateforme, `method/` = opérationnel |
| Audit doc | Chantier 4 vs workspace global audit | Complémentaires | Chantier 4 = markdown ; ce doc = workspace entier |
| Numérotation Interv360 | 07-delivery, 07-rex, 09-architecture | Confusion | Renormaliser 04–06 lors migration |

## 11. Problèmes d'arborescence constatés

1. **Trois racines méthode** : `method/`, `methods/`, `docs/methods/` sans carte unique.
2. **Interv360 surchargé** : 111 fichiers dans `07-delivery/` dont ~50 historiques.
3. **Logs Notion dans architecture** : 35 fichiers `notion-sync-*` noient les ADR.
4. **Numérotation phases incohérente** : pas de `04-delivery`, `05-release`, `06-audit-rex` unifiés.

### Doublons de phases Interv360

L'audit complémentaire `interv360/interv360-folder-normalization-audit.md` confirme que l'arborescence Interv360 contient plusieurs doublons ou ambiguïtés de phases :

- `02-architecture/` contient l'architecture active, les ADR, mais aussi des logs et documents historiques ;
- `09-architecture/` porte plutôt des roadmaps ou évolutions futures et ne devrait pas rester nommé architecture ;
- `07-delivery/` mélange delivery actif, readiness release, audit application et micro-incréments historiques ;
- `07-rex/` existe comme dossier séparé mais le REX principal a été capitalisé côté méthode ;
- `08-presentation/` doit être replacé dans une séquence logique après audit/rex ;
- l'absence de `04-delivery`, `05-release`, `06-audit-rex` rend la lecture du projet confuse.

Décision proposée :

> Produire une normalisation dédiée de `projects/interv360/` avant tout nettoyage physique de cette zone.

5. **Pas de README projet Interv360** opérationnel (seulement `projects/interv360/README.md` à vérifier).
6. **sfia-notion-sync absent** du workspace mais référencé partout — clarifier dans README racine.
7. **tools/cmp-001** volumineux (node_modules) — bien isolé mais peu documenté au niveau racine.
8. **prompts/** à la racine vs `docs/templates/` — deux systèmes de templates prompts.
9. **Zones sans statut** : nombreux docs clos sans marqueur « archivé » ou « cycle terminé ».
10. **Méthode active non rangée** : tous les fichiers Fast Track à plat dans un seul dossier.

## 12. Cible de nettoyage proposée

```text
sfia-workspace/
├── README.md                          # Index workspace + liens repos externes
├── docs/                              # Plateforme SFIA (inchangé, README enrichi)
├── method/
│   └── sfia-fast-track/
│       ├── README.md
│       ├── core/                        # global, rules, standards, roadmap
│       ├── automation/                  # automation-architecture
│       ├── cycles/                      # MVP, final capitalization
│       ├── ui/                          # figma-design-first
│       ├── audit-rex/                   # interv360-application-rex
│       ├── documentation/               # audits, plans, workspace-audit
│       ├── templates/
│       ├── checklists/
│       └── archive/
│           └── interv360-realization/
├── methods/
│   ├── README.md                        # Lien Fast Track ↔ Controlled Delivery
│   └── controlled-delivery/
├── projects/
│   └── interv360/
│       ├── README.md                    # Index phases + liens actifs
│       ├── 00-intake/
│       ├── 01-cadrage/
│       ├── 02-architecture/
│       │   └── adr/                     # ADR actifs seulement
│       ├── 03-design/
│       ├── 04-delivery/                 # premium, MVP lots actifs
│       ├── 05-release/
│       ├── 06-audit-rex/
│       ├── 07-presentation/             # ex-08-presentation
│       ├── 08-roadmap/                  # ex-09-architecture roadmaps
│       ├── app/                         # NE PAS TOUCHER
│       ├── backend/                     # NE PAS TOUCHER
│       └── archive/
│           ├── inc-01/
│           ├── inc-02-04/
│           ├── notion-sync/
│           ├── clarification/
│           ├── figma-v1/
│           └── cmp/
├── prompts/                             # + README index
├── tools/cmp-001/                       # NE PAS TOUCHER sans cycle
├── exports/notion/
└── .github/workflows/                   # NE PAS TOUCHER
```

*Repo `sfia-notion-sync` : documenter comme dépendance externe dans README racine.*

## 13. Stratégie de nettoyage recommandée

### Phase 1 — Sécurisation (ce commit)

- inventaire complet ✓ ;
- audit global ✓ ;
- plan migration ✓ ;
- aucun déplacement ✓ ;
- aucune suppression ✓.

### Phase 2 — Méthode active

- créer sous-dossiers `core/`, `automation/`, `documentation/`, etc. ;
- `git mv` fichiers Fast Track ;
- archiver `interv360-realization/` ;
- README Fast Track à jour.

### Phase 3 — Projet Interv360

- créer `projects/interv360/archive/` ;
- archiver `inc-*`, `notion-sync-*`, `clarification-*` ;
- renommer/normaliser phases 04–08 ;
- README projet.

### Phase 4 — Notion

- consolider exports + plan ;
- séparer publiable / logs / technique ;
- préparer base Notion éditorialisée (sans sync).

### Phase 5 — Automatisation

- centraliser templates + checklists + prompts ;
- lier aux moteurs SFIA ;
- préparer garde-fous exécutables.

## 14. Décision

Décision proposée :

> Le workspace SFIA contient toute l'intelligence utile de la SFA (~463 Markdown, ~715 fichiers utiles), mais son arborescence doit être nettoyée globalement avant mise à jour Notion et avant nouveau projet.

## 15. Suites

Ce document doit être validé avant déplacement massif.

Suite recommandée :

1. valider l'audit global ;
2. relire `sfia-workspace-migration-plan.md` ;
3. exécuter le nettoyage par phases avec `git mv` ;
4. produire inventaire post-nettoyage ;
5. préparer mise à jour Notion.
