# SFIA Workspace — Cleanup Round 2 Plan

## 1. Objectif

Ce document prépare la deuxième passe de nettoyage physique du workspace SFIA.

Aucun déplacement ne doit être réalisé sans validation humaine.

Référence audit : `sfia-workspace-cleanup-round-2-audit.md`

## 2. Principes

- ne pas supprimer brutalement ;
- utiliser `git mv` ;
- commits séparés ;
- ne pas toucher au code ;
- ne pas toucher à la CI ;
- ne pas toucher à `tools/cmp-001/` ;
- ne pas toucher aux exports Figma ;
- ne pas publier dans Notion ;
- **lire le contenu** avant tout déplacement ambigu.

## 3. Décisions à valider

### Méthodes

| Sujet | Décision proposée |
|-------|-------------------|
| `method/` | Méthode delivery active (Fast Track uniquement) |
| `methods/` | Méthodes delivery complémentaires (Controlled Delivery) |
| `docs/methods/` | Méthodes **plateforme** SFIA — conserver, ne pas fusionner avec `methods/` |
| `docs/templates/` | Templates plateforme (BPMN, archi fonctionnelle, UX) — distincts de `method/sfia-fast-track/templates/` |
| `prompts/` | Prompts actifs pour futur Prompt Generation Engine + catalogue |
| README racine | Réécrire — supprimer `templates/` et `standards/` racine fantômes |
| Content map | Créer index expliquant les 4 couches (Fast Track, Controlled Delivery, plateforme, prompts) |

### Interv360

| Sujet | Décision proposée |
|-------|-------------------|
| `05-tests/` | `git mv` README → `archive/stubs/05-tests-readme.md` ; optionnel `04-delivery/tests/README.md` |
| `06-documentation/` | `git mv` README → `archive/stubs/06-documentation-readme.md` |
| `07-presentation/` | Renommer → `08-presentation/` |
| `08-roadmap/` | Renommer → `09-roadmap/` |
| `07-documentation/` | Créer avec README (phase documentation projet) |
| `06-audit-rex/README.md` | Réécrire (audit actif + lien REX méthode) |
| `02-architecture/README.md` | Réécrire (index ADR + synthèses, phase clos) |
| Numérotation | Un seul dossier par numéro (00–09) |
| README Interv360 | Mettre à jour table phases |

### Docs plateforme

| Sujet | Décision proposée |
|-------|-------------------|
| `docs/workspace-readiness-report.md` | Archiver → `docs/archive/workspace-readiness-report.md` |
| `docs/methods/methods-structure-check.md` | Mettre à jour ou archiver (cible obsolète) |
| `docs/foundation/` + `docs/architecture/` | Conserver ; option future `docs/platform/` |
| `docs/knowledge/`, `docs/rex/`, `docs/adr/` | Conserver stubs ; enrichir README |

### Notion

| Sujet | Décision proposée |
|-------|-------------------|
| `exports/notion/` | Conserver comme exports préparés ; rafraîchir via CMP avant chantier Notion |
| `tools/cmp-001/` | Ne pas toucher ; documenter dans README racine |
| Sync | Ne pas exécuter |
| `notion-publication-plan.md` | Référence active pour publication éditorialisée |

## 4. Actions proposées après validation

### Phase 1 — Racines méthode (`docs: clarify sfia method roots`)

| Actuel | Cible | Action |
|--------|-------|--------|
| — | `docs/SFIA-CONTENT-MAP.md` | Créer index 4 couches |
| `README.md` racine | idem | Réécrire section Structure (chemins réels) |
| `method/README.md` | idem | Enrichir liens vers docs/methods et methods/ |
| `docs/methods/README.md` | idem | Clarifier « plateforme » vs Fast Track |

### Phase 2 — Interv360 phases (`docs: normalize remaining interv360 phases`)

| Actuel | Cible | Action |
|--------|-------|--------|
| `projects/interv360/05-tests/README.md` | `archive/stubs/05-tests-readme.md` | Archiver |
| `projects/interv360/06-documentation/README.md` | `archive/stubs/06-documentation-readme.md` | Archiver |
| `projects/interv360/07-presentation/` | `08-presentation/` | `git mv` |
| `projects/interv360/08-roadmap/` | `09-roadmap/` | `git mv` |
| — | `07-documentation/README.md` | Créer |
| `projects/interv360/README.md` | idem | Mettre à jour |
| `projects/interv360/06-audit-rex/README.md` | idem | Réécrire |

### Phase 3 — Architecture logs (`docs: archive remaining interv360 architecture logs`)

| Fichier | Cible | Action |
|---------|-------|--------|
| `02-architecture/notion-publication-tooling-check.md` | `archive/notion-sync/` | Archiver |
| `02-architecture/merge-closure-prompt-library-sync.md` | `archive/cmp/` | Archiver |
| `02-architecture/prompt-catalog-*.md` (3) | `archive/cmp/` | Archiver |
| `02-architecture/pull-request-qa-tester-governance-notion-sync.md` | `archive/notion-sync/` | Archiver |
| `02-architecture/role-methods-enrichment-after-*.md` (3) | `archive/clarification/` | Archiver |
| `02-architecture/sfia-figma-v1-standard-*.md` (3) | `archive/figma-v1/` | Archiver |
| `02-architecture/cmp-project-schema-extension-for-governance-content.md` | `archive/cmp/` | Archiver |
| `02-architecture/ux-ui-design-research-and-benchmark.md` | `archive/pre-delivery-phases/` | Archiver |
| `02-architecture/ux-ui-figma-opening-note.md` | `archive/figma-v1/` | Archiver |
| `02-architecture/qa-tester-role-candidate-*.md` (3) | `docs/methods/roles/` ou `archive/` | **À arbitrer** — contenu méthode rôle |
| `02-architecture/qa-transverse-analysis.md` | Conserver ou archiver | **À arbitrer humainement** |
| `02-architecture/README.md` | idem | Réécrire post-archive |

### Phase 4 — Docs plateforme (`docs: clarify sfia platform docs structure`)

| Actuel | Cible | Action |
|--------|-------|--------|
| `docs/workspace-readiness-report.md` | `docs/archive/workspace-readiness-report.md` | Archiver |
| `docs/methods/methods-structure-check.md` | Mettre à jour | Corriger cible arborescence |
| `docs/README.md` | idem | Lien vers content map + Fast Track |

### Phase 5 — Prompts et Notion (`docs: index sfia prompts and notion assets`)

| Actuel | Cible | Action |
|--------|-------|--------|
| `prompts/README.md` | idem | Lien catalogue + exports/notion |
| `exports/notion/README.md` | idem | Lien CMP + date dernier export |
| `README.md` racine | idem | Section CMP / Notion / exports |

### Phase 6 — Liens (`docs: fix post-cleanup broken links`)

Corriger grep résiduel :

- `projects/interv360/07-delivery`, `08-presentation`, `09-architecture` dans docs actifs ;
- `method/sfia-fast-track/sfia-*` chemins plats ;
- `06-audit-rex/current-application-audit.md` § périmètre ;
- `methods/controlled-delivery/` liens vers archives `inc-*` (déjà partiellement fait).

**Exclure par défaut :** `projects/interv360/app/` (sauf validation explicite).

### Phase 7 — Rapport (`docs: report sfia workspace cleanup round 2`)

- Inventaires `round-2/post-cleanup-*` après exécution ;
- Rapport `operational-cleanup-round-2-report.md` ;
- Mise à jour `operational-cleanup-report.md`.

## 5. Zones interdites

- `projects/interv360/app/`
- `projects/interv360/backend/`
- `.github/workflows/`
- `tools/cmp-001/`
- `projects/interv360/03-design/exports/`
- `node_modules/`

## 6. Fichiers à arbitrer humainement (ne pas déplacer sans décision)

| Fichier | Raison |
|---------|--------|
| `02-architecture/qa-transverse-analysis.md` | Actif ou historique selon lecture cycle QA |
| `02-architecture/qa-tester-role-candidate-*.md` | Cible `docs/methods/roles/` vs archive |
| `02-architecture/mvp-clarifications.md` | Peut rester architecture ou aller `01-cadrage/` |
| `app/README.md` liens obsolètes | Hors scope auto — validation avant correction |

## 7. Décision attendue

> Valider le plan Round 2 avant tout déplacement.

Checklist validation :

- [ ] Séquence Interv360 00–09 acceptée
- [ ] Stubs `05-tests` / `06-documentation` archivés
- [ ] `docs/methods/` reste plateforme (pas fusion `methods/`)
- [ ] ~15 fichiers `02-architecture/` archivables validés
- [ ] `exports/notion/` conservé
- [ ] README racine réécrit

## 8. Estimation

| Métrique | Valeur |
|----------|--------|
| Commits Round 2 | 7 |
| Fichiers à déplacer (estimé) | ~25–35 |
| Dossiers à renommer | 2 (`07-presentation`, `08-roadmap`) |
| Dossiers à créer | 1–2 (`07-documentation`, option `04-delivery/tests`) |
| Suppressions définitives | 0 |
