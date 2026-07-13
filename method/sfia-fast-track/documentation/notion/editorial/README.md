# SFIA Notion — Brouillons éditoriaux P0 (Cycle 2)

**Répertoire :** `method/sfia-fast-track/documentation/notion/editorial/`
**Horodatage :** 2026-07-13 13:11 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 2 — Préparation éditoriale P0 dans Git
**Statut :** **Draft éditorial validé pour intégration Git — non publié dans Notion**
**Validation Morris :** pack éditorial P0 validé le **2026-07-13**
**Propriétaire éditorial :** **Morris**
**Contrat éditorial d'origine :** PR #191 — merge `6407913689b14e84e0a487a3137ff290bb6e2ff8`
**Branche de travail :** `documentation/sfia-notion-editorial-p0`

---

## Rôle du répertoire

Ce dossier contient les **brouillons éditoriaux Markdown** des pages Notion **P0** définies dans le cycle 1 (Product Vision, Information Architecture, Publication Governance, MVP Backlog).

| Principe | Application |
|----------|-------------|
| **Git prime** | Ces fichiers sont des drafts versionnés ; la source canonique de la méthode reste dans `docs/`, `method/`, `prompts/` |
| **Non publié** | Aucun contenu de ce dossier n'est publié dans Notion tant que le cycle 3 n'a pas reçu un GO Morris explicite |
| **Éditorialisation** | Synthèses pédagogiques — pas de copie intégrale des documents canoniques |
| **Baseline** | SFIA **v2.4** = baseline opérationnelle ; éléments **v2.5 Candidate** explicitement marqués |

---

## Inventaire des brouillons

| Fichier | Page cible | Niveau |
|---------|------------|--------|
| `sfia-notion-00-home-editorial-draft.md` | Accueil | L0–L1 |
| `sfia-notion-01-understand-sfia-editorial-draft.md` | 01 — Comprendre SFIA | L1–L2 |
| `sfia-notion-02-value-proposition-editorial-draft.md` | 02 — Proposition de valeur | L1 |
| `sfia-notion-03-how-a-cycle-works-editorial-draft.md` | 03 — Comment fonctionne un cycle | L2 |
| `sfia-notion-04-cycles-profiles-gates-editorial-draft.md` | 04 — Cycles, profils et gates | L2 |
| `sfia-notion-05-request-routing-editorial-draft.md` | 05 — Routage des demandes | L2 |
| `sfia-notion-06-templates-prompts-deliverables-editorial-draft.md` | 06 — Templates, prompts et livrables | L3 |
| `sfia-notion-07-governance-guardrails-editorial-draft.md` | 07 — Gouvernance et garde-fous | L2–L3 |
| `sfia-notion-08-setup-sfia-editorial-draft.md` | 08 — Mettre SFIA en place | L3 |
| `sfia-notion-11-glossary-editorial-draft.md` | 11 — Glossaire | L1–L4 |
| `sfia-notion-p0-editorial-review-checklist.md` | Checklist relecture pack P0 | — |

**Hors périmètre cycle 2 :**

- **§09 Cas d'usage** — P1
- **§10 Documents de référence** — vue Base Référentiel (cycle 3)

---

## Validation et suite (cycle 13 — PR readiness)

| Élément | Statut |
|---------|--------|
| Pack éditorial P0 validé par Morris | **2026-07-13** |
| Propriétaire éditorial | **Morris** |
| Publication Notion | **Non autorisée** dans ce cycle |
| Cycle 3 publication Notion | **GO Morris séparé** requis |

---

## Règles de passage au cycle 3

1. **Revue Morris** des brouillons P0 (checklist incluse).
2. **Commit + PR** du pack editorial sur `main`.
3. **GO Morris** publication Notion P0 (cycle 3 distinct).
4. Création **nouvel espace Notion** recommandé (décision cycle 1) — pas de raw sync.
5. Publication **L0 manuelle assistée** — métadonnées Git sur chaque page.
6. Aucune utilisation de `tools/cmp-001/`, API Notion ou payload JSON sans cycle dédié.

---

## Garde-fous

- Ne pas traiter ces drafts comme source canonique.
- Ne pas modifier les prompts, templates ou core method depuis ce dossier.
- En cas de divergence avec Git → **Git prime**.
