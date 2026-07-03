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

Aucun fichier QA en attente — tous archivés en finition (§9).

| Point | Statut |
|-------|--------|
| `06-audit-rex/README.md` | Placeholder obsolète — réécriture optionnelle post-PR |

## 9. Finition avant PR

Une passe finale a été réalisée pour traiter les points résiduels :

- arbitrage des fichiers QA restants dans `02-architecture/` ;
- correction ciblée des liens résiduels vers les anciens chemins Interv360 ;
- confirmation que les documents actifs pointent vers la séquence finale `00` à `09`.

### Fichiers QA

| Fichier | Contenu réel | Décision |
|---------|--------------|----------|
| `qa-transverse-analysis.md` | Relecture QA transverse du cadrage (cycle clos) | **Archivé** → `archive/role-enrichment/` |
| `qa-transverse-analysis-summary.md` | Synthèse de l'analyse ci-dessus | **Archivé** → `archive/role-enrichment/` |
| `qa-tester-role-candidate-framing.md` | Cadrage rôle candidat QA (pré-`qa-tester-method.md`) | **Archivé** → `archive/role-enrichment/` |
| `qa-tester-role-candidate-review.md` | Revue maturité candidat QA | **Archivé** → `archive/role-enrichment/` |
| `qa-tester-role-research-and-benchmark.md` | Benchmark méthodologique QA | **Archivé** → `archive/role-enrichment/` |

Référence active du rôle : `docs/methods/roles/qa-tester-method.md`.

### Liens corrigés

| Ancien chemin | Nouveau chemin | Zone |
|--------------|----------------|------|
| `07-presentation/` | `08-presentation/` | `04-delivery/`, `05-release/`, `08-presentation/` |
| `08-roadmap/` | `09-roadmap/` | `04-delivery/`, `05-release/`, `09-roadmap/` |
| `09-architecture/` | `09-roadmap/` | `04-delivery/`, `09-roadmap/` |
| `07-delivery/` | `04-delivery/` | docs delivery, roadmap, `methods/controlled-delivery/` |
| `07-rex/` | `06-audit-rex/` | si présent |
| Chemins archivés (`inc-01`, pre-delivery) | `archive/...` | `implementation-go-no-go.md` |

**Non modifié :** `projects/interv360/app/README.md` et sous-dossiers `app/`.

Décision :

> Le workspace SFIA est prêt pour revue PR avant ouverture du chantier Notion.

## 10. Inventaire post-Round 2

- `post-round-2-markdown-files.txt` — ~493 fichiers Markdown

## 11. Décision

Le workspace SFIA est prêt pour revue PR.

**Suite recommandée :**

1. Ouvrir PR de nettoyage workspace sur `consolidation/sfia-method-improvements` ;
2. Chantier Notion éditorialisé (sans sync brute).
