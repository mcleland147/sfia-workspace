# SFIA Workspace — Cleanup Round 2 Report

## 1. Objectif

Ce document décrit la deuxième passe de nettoyage du workspace SFIA.

## 2. Commits réalisés

| Phase | Commit | Résultat |
|-------|--------|----------|
| Clarification racines méthode | `a6da2e3` | Rôles `method/` / `methods/` / `docs/methods/` / `prompts/` clarifiés |
| Normalisation Interv360 restante | `5b2de29` | Séquence finale Interv360 00–09 ; stubs archivés |
| Archive architecture historique | `65b1069` | 15 fichiers historiques sortis de `02-architecture/` |
| Clarification docs plateforme | `89e8318` | `docs/` README, templates, standards clarifiés |
| Index Notion assets | `2605e1f` | `notion-target-content-map.md` + exports README |
| README racine | `58fd002` | Structure réelle documentée, doublons supprimés |
| Rapport Round 2 | `5888e6f` | Inventaire + rapport |

**Fichiers déplacés Round 2 :** ~22 via `git mv` + README créés/mis à jour.

## 3. Arborescence finale Interv360

```text
projects/interv360/
├── 00-intake/
├── 01-cadrage/
├── 02-architecture/       # allégé (~18 md racine + adr/)
├── 03-design/
├── 04-delivery/
├── 05-release/
├── 06-audit-rex/
├── 07-documentation/      # nouveau
├── 08-presentation/       # ex-07-presentation
├── 09-roadmap/            # ex-08-roadmap
├── app/
├── backend/
└── archive/
    ├── stubs/05-tests, 06-documentation
    ├── role-enrichment/
    ├── notion-sync/ (+2 fichiers)
    ├── cmp/ (+5 fichiers)
    └── figma-v1/ (+5 fichiers)
```

## 4. Couches méthode finales

| Zone | Rôle |
|------|------|
| `method/sfia-fast-track/` | Méthode active de delivery |
| `methods/` | Méthodes complémentaires |
| `docs/methods/` | Méthodes plateforme |
| `prompts/` | Assets de prompts |
| `docs/templates/` | Templates plateforme |
| `method/sfia-fast-track/templates/` | Templates opérationnels Fast Track |

## 5. Archives Round 2

| Archive | Fichiers ajoutés |
|---------|------------------|
| `archive/stubs/05-tests/` | README stub |
| `archive/stubs/06-documentation/` | README stub |
| `archive/notion-sync/` | 2 logs (tooling-check, PR governance) |
| `archive/cmp/` | 5 logs prompt-library / merge |
| `archive/figma-v1/` | 5 docs Figma v1 / UX recherche |
| `archive/role-enrichment/` | 3 enrichissements méthodes rôle |

## 6. Documents supprimés définitivement

Aucun document supprimé définitivement.

## 7. Zones non touchées

- `projects/interv360/app/` (dont `app/README.md`)
- `projects/interv360/backend/`
- `.github/workflows/`
- `tools/cmp-001/`
- `projects/interv360/03-design/exports/`

## 8. Points restant à arbitrer

| Fichier | Emplacement | Statut |
|---------|-------------|--------|
| `qa-transverse-analysis.md` | `02-architecture/` | Non déplacé — décision humaine |
| `qa-transverse-analysis-summary.md` | `02-architecture/` | Idem |
| `qa-tester-role-candidate-framing.md` | `02-architecture/` | Non déplacé — décision humaine |
| `qa-tester-role-candidate-review.md` | `02-architecture/` | Idem |
| `qa-tester-role-research-and-benchmark.md` | `02-architecture/` | Idem |
| Liens `07-presentation/` / `08-roadmap/` | docs delivery actifs | Corriger en passe liens dédiée |
| `06-audit-rex/README.md` | placeholder obsolète | Réécrire si souhaité |

## 9. Inventaire post-Round 2

- `post-round-2-markdown-files.txt` — ~490 fichiers Markdown

## 10. Décision

Le workspace SFIA est désormais suffisamment propre pour préparer le chantier Notion.

**Suite recommandée :**

1. Revue humaine finale (fichiers à arbitrer + liens résiduels) ;
2. PR de nettoyage workspace sur `consolidation/sfia-method-improvements` ;
3. Chantier Notion éditorialisé (sans sync brute).
