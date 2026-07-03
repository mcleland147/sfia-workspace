# SFIA Workspace — Migration Plan

## 1. Objectif

Ce document prépare le nettoyage physique de l'arborescence SFIA Workspace.

Il liste les déplacements proposés avant exécution.

Aucun déplacement massif ne doit être réalisé sans validation humaine.

**Référence audit :** `sfia-workspace-global-audit.md`  
**Inventaires :** `pre-cleanup-*.txt`

## 2. Principes

- utiliser `git mv` ;
- ne pas supprimer brutalement ;
- archiver plutôt que supprimer ;
- conserver la traçabilité ;
- ne pas toucher au code applicatif (`projects/interv360/app/`, `projects/interv360/backend/`) ;
- ne pas toucher à `sfia-notion-sync` (repo externe — absent de ce workspace) ;
- ne pas toucher à `tools/cmp-001/` sans cycle dédié ;
- ne pas toucher aux exports Figma non suivis ;
- ne pas toucher à `.github/workflows/` ;
- créer des README dans les zones clés ;
- exécuter par phases avec commit par phase.

## 3. Déplacements proposés — méthode SFIA active

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `method/sfia-fast-track/sfia-global-capitalization.md` | `method/sfia-fast-track/core/` | Déplacer | Noyau méthode |
| `method/sfia-fast-track/sfia-rules-update.md` | `method/sfia-fast-track/core/` | Déplacer | Règles opérationnelles |
| `method/sfia-fast-track/sfia-architecture-standards.md` | `method/sfia-fast-track/core/` | Déplacer | Standards |
| `method/sfia-fast-track/sfia-consolidation-roadmap.md` | `method/sfia-fast-track/core/` | Déplacer | Pilotage consolidation |
| `method/sfia-fast-track/sfia-automation-architecture.md` | `method/sfia-fast-track/automation/` | Déplacer | Vision orchestration |
| `method/sfia-fast-track/interv360-mvp-delivery-capitalization.md` | `method/sfia-fast-track/cycles/` | Déplacer | Pattern MVP |
| `method/sfia-fast-track/interv360-final-capitalization.md` | `method/sfia-fast-track/cycles/` | Déplacer | Clôture Interv360 |
| `method/sfia-fast-track/figma-design-first-ui-method.md` | `method/sfia-fast-track/ui/` | Déplacer | Règle UI |
| `method/sfia-fast-track/interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/` | Déplacer | REX référence |
| `method/sfia-fast-track/documentation-audit.md` | `method/sfia-fast-track/documentation/` | Déplacer | Audit Chantier 4 |
| `method/sfia-fast-track/documentation-structure-target.md` | `method/sfia-fast-track/documentation/` | Déplacer | Cible structure |
| `method/sfia-fast-track/notion-publication-plan.md` | `method/sfia-fast-track/documentation/` | Déplacer | Plan Notion |
| `method/sfia-fast-track/documentation/workspace-audit/` | `method/sfia-fast-track/documentation/workspace-audit/` | Conserver | Déjà bien placé |
| `method/sfia-fast-track/templates/*` | `method/sfia-fast-track/templates/` | Conserver | Déjà bien placé |
| `method/sfia-fast-track/checklists/*` | `method/sfia-fast-track/checklists/` | Conserver | Déjà bien placé |
| `method/sfia-fast-track/README.md` | `method/sfia-fast-track/README.md` | Conserver + mettre à jour | Index — mettre à jour liens après mv |

## 4. Déplacements proposés — méthodes historiques

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `method/interv360-realization/realization-method.md` | `method/sfia-fast-track/archive/interv360-realization/` | Archiver | Pré-Fast Track |
| `method/interv360-realization/realization-deliverables-standard.md` | idem | Archiver | Pré-Fast Track |
| `method/interv360-realization/realization-checklists.md` | idem | Archiver | Pré-Fast Track |
| `method/interv360-realization/realization-templates.md` | idem | Archiver | Pré-Fast Track |
| `method/interv360-realization/realization-prompt-family.md` | idem | Archiver | Pré-Fast Track |
| `method/interv360-realization/capitalization-plan.md` | idem | Archiver | Obsolète |
| `method/interv360-realization/capitalization-summary.md` | idem | Archiver | Obsolète |
| `method/interv360-realization/notion-integration-plan.md` | idem | Archiver | Remplacé |
| `method/interv360-realization/` (dossier vide) | — | Supprimer dossier vide | Après archivage contenu |

## 5. Déplacements proposés — Controlled Delivery

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `methods/controlled-delivery/*` (13 fichiers) | `methods/controlled-delivery/` | Conserver | Méthode parallèle valide |
| — | `methods/README.md` | Créer | Lien Fast Track ↔ Controlled Delivery |
| `methods/README.md` (si existant) | idem | Mettre à jour | Clarifier coexistence |

## 6. Déplacements proposés — Interv360

### 6.1. Archives (priorité haute)

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `projects/interv360/07-delivery/inc-01-*` (~45 fichiers) | `projects/interv360/archive/inc-01/` | Archiver | Micro-incréments pré-MVP |
| `projects/interv360/07-delivery/inc-02-*` | `projects/interv360/archive/inc-02/` | Archiver | Idem |
| `projects/interv360/07-delivery/inc-03-*` | `projects/interv360/archive/inc-03/` | Archiver | Idem |
| `projects/interv360/07-delivery/inc-04-*` | `projects/interv360/archive/inc-04/` | Archiver | Idem |
| `projects/interv360/02-architecture/notion-sync-*` (~35) | `projects/interv360/archive/notion-sync/` | Archiver | Logs opérationnels |
| `projects/interv360/02-architecture/clarification-*` (~10) | `projects/interv360/archive/clarification/` | Archiver | Ateliers clos |
| `projects/interv360/02-architecture/cmp-prompt-schema-extension-*` (~5) | `projects/interv360/archive/cmp/` | Archiver | Extensions CMP passées |

### 6.2. Réorganisation phases (priorité moyenne — validation requise)

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `projects/interv360/07-delivery/current-application-audit.md` | `projects/interv360/06-audit-rex/` | Déplacer | Séparer audit |
| `projects/interv360/07-delivery/premium-design-system.md` | `projects/interv360/04-delivery/` | Déplacer | Delivery actif |
| `projects/interv360/07-delivery/mvp-release-readiness.md` | `projects/interv360/05-release/` | Déplacer | Release |
| `projects/interv360/06-release/*` (si présent) | `projects/interv360/05-release/` | Fusionner | Harmoniser numérotation |
| `projects/interv360/08-presentation/*` | `projects/interv360/07-presentation/` | Renommer dossier | Séquence logique |
| `projects/interv360/09-architecture/*` | `projects/interv360/08-roadmap/` | Renommer dossier | Roadmaps post-MVP |
| `projects/interv360/07-delivery/` (reste actif) | `projects/interv360/04-delivery/` | Déplacer | Lots MVP actifs |
| `projects/interv360/07-rex/README.md` | `projects/interv360/06-audit-rex/` | Fusionner | REX centralisé |
| `projects/interv360/02-architecture/adr/*` | `projects/interv360/02-architecture/adr/` | Conserver | ADR actifs |
| `projects/interv360/02-architecture/figma-*` | `projects/interv360/archive/figma-v1/` ou conserver | À valider | Historique Figma |

### 6.3. Ne pas toucher

| Zone | Raison |
|------|--------|
| `projects/interv360/app/` | Code frontend |
| `projects/interv360/backend/` | Code backend |
| `projects/interv360/03-design/exports/` | Non suivis |
| `projects/interv360/00-intake/` | Référence origine — conserver |
| `projects/interv360/01-cadrage/` | Cadrage actif — conserver (sauf archive future) |

## 7. Déplacements proposés — Notion

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `method/sfia-fast-track/notion-publication-plan.md` | `documentation/` (après phase 2) | Déplacer | Plan actif |
| `method/interv360-realization/notion-integration-plan.md` | `archive/interv360-realization/` | Archiver | Obsolète |
| `projects/interv360/02-architecture/notion-sync-*` | `archive/notion-sync/` | Archiver | Logs |
| `projects/interv360/01-cadrage/notion-sync-summary.md` | `archive/notion-sync/` | Archiver | Log |
| `exports/notion/*` | `exports/notion/` | Conserver | Exports préparés |
| `tools/cmp-001/` | — | Ne pas toucher | Outil technique |

## 8. Déplacements proposés — automation / prompts / templates

| Actuel | Cible | Action | Justification |
|--------|-------|--------|---------------|
| `prompts/prompt-catalog.md` | `prompts/` + lien README | Conserver | Catalogue prompts |
| `prompts/*/` (familles) | `prompts/` | Conserver | Déjà structuré |
| — | `prompts/README.md` | Créer | Index prompts |
| `docs/templates/` | `docs/templates/` | Conserver | Templates plateforme |
| `method/sfia-fast-track/templates/` | idem | Conserver | Templates Fast Track |
| — | Lien croisé README | Créer | Éviter confusion deux systèmes templates |
| `docs/architecture/sfia-*` | `docs/architecture/` | Conserver | Vision plateforme automation |

## 9. Fichiers à ne pas toucher

| Zone | Raison |
|------|--------|
| `projects/interv360/app/` | Code applicatif frontend |
| `projects/interv360/backend/` | Backend |
| `.github/workflows/` | CI |
| `tools/cmp-001/` (sauf README doc) | Outil publication Notion |
| `projects/interv360/03-design/exports/` | Exports Figma non suivis |
| `node_modules/` (tous emplacements) | Dépendances |
| `sfia-notion-sync/` | Repo externe — absent ici |
| `.git/`, `.gitignore` | Infrastructure git |
| `docker/penpot/` | Infra design tooling |

## 10. Ordre d'exécution recommandé

| Phase | Commit message suggéré | Scope |
|-------|------------------------|-------|
| 1 | `docs: audit full SFIA workspace structure` | Inventaires + audit (fait) |
| 2 | `docs: reorganize sfia-fast-track method folders` | `git mv` core/automation/cycles/ui |
| 3 | `docs: archive interv360-realization method` | Archive méthode historique |
| 4 | `docs: archive interv360 incremental delivery docs` | `inc-*` → archive |
| 5 | `docs: archive interv360 notion sync logs` | `notion-sync-*` → archive |
| 6 | `docs: reorganize interv360 project phases` | Renommage 04–08 (validation requise) |
| 7 | `docs: add workspace and project README indexes` | README racine + interv360 + methods |

## 11. Décision attendue

> Ce plan doit être relu et validé avant exécution du nettoyage physique.

Validation requise notamment sur :

- [ ] renommage phases Interv360 (`07-delivery` → `04-delivery`, etc.) ;
- [ ] archivage en bloc `inc-01-*` ;
- [ ] archivage en bloc `notion-sync-*` ;
- [ ] déplacement `figma-v1` vers archive ou conservation ;
- [ ] création sous-dossiers `method/sfia-fast-track/core/` etc.

Après validation : exécuter phase par phase, un commit par phase, sans push massif sans revue.
