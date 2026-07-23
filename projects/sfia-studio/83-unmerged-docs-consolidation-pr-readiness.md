# SFIA Studio — Consolidation des documents non intégrés — PR readiness

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `83-unmerged-docs-consolidation-pr-readiness.md` |
| **Statut** | `draft-pr-candidate` |
| **Cycle** | PR readiness — branches / worktrees non mergés |
| **Profil** | Critical |
| **Base** | `origin/main` @ `445702dcad750734cef4b97122e7ccb1e67b24ee` |
| **Branche** | `docs/sfia-studio-recover-unmerged-project-docs` |
| **Gate** | Consolidation documentaire bornée (pas de merge sans GO Morris) |

---

## 1. Objectif

Récupérer sur `main` les documents Studio **75–80** produits dans le worktree de cadrage et jamais commités, tout en alignant le README sur l’état **post-merge PR #255**.

## 2. Inventaire (synthèse)

| Source | Verdict |
|--------|---------|
| `framing/sfia-studio-next-product-increment` @ `88fa465…` | Tip **ancêtre** de main ; **0** commit propre ; docs 75–80 **untracked** uniquement |
| `delivery/sfia-studio-shared-technical-platform` | Contenu **absorbé** par squash #255 (blob 81 identique) ; tip non ancêtre (squash) — **écarté** |
| `delivery/sfia-studio-control-tower-fast-track` | Absorbé par squash #254 — **écarté** |
| Branches OPS1 delivery historiques | Code produit obsolète / déjà mergé via squash — **écartées** |
| `sfia/review-handoff` | Branche handoff (hors consolidation Studio docs) — **écartée** |
| Worktree framing untracked 75–80 | **Retenu** — contenu utile, absent de main |

Aucun conflit de versions concurrentes pour 79/80 (une seule source : framing WT).

## 3. Contenu consolidé

| Fichier | Provenance | Statut préservé |
|---------|------------|-----------------|
| `75`…`78` | Framing WT untracked | candidates live/B′ (non exécutés) |
| `79`, `80` | Framing WT untracked | architecture/decision **candidates** + note historique post-#255 |
| `README.md` | Alignement | liens 75–83 ; #255 = **MERGED** |
| `83` | Ce cycle | rapport consolidation |

**Aucune** modification `app/**`, `method/**`, `prompts/**`, `.github/**`.

## 4. Validations

- `git diff --check` : à confirmer avant push
- Chemins protégés : absents du diff
- Secrets : absents
- Code produit : absent
- Cohérence : 79/80 ne prétendent pas remplacer 81/82

## 5. Anti-claims

Pas de merge de cette PR sans GO Morris. Pas Live Validation exécutée. Pas B′. Pas cleanup OPS1. Pas V3-ADOPTED. Pas de réouverture delivery platform.

## 6. Rollback

`git revert` des commits de la branche docs, ou fermeture de la draft PR sans merge.

## 7. MERGE REQUIRES MORRIS GO
