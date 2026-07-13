# 08 — Mettre SFIA en place

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 08 — Mettre SFIA en place |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Cycle 2 |
| **Baseline** | SFIA v2.4 |
| **Audience** | Chef de projet, tech lead |
| **Niveau** | L3 |
| **Propriétaire** | Morris |
| **Sources Git** | `docs/architecture/sfia-repository-blueprint.md` ; `method/sfia-fast-track/README.md` ; checklists (index) |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Guider le démarrage pratique d'un projet ou contributeur SFIA — prérequis, rôles, premier cycle — avec checklist actionnable.

## 2. À retenir en 30 secondes

- Cloner le workspace ; comprendre **main** comme référence.
- Identifier **Morris**, **ChatGPT**, **Cursor** et leurs rôles.
- Qualifier la demande → cycle → profil → branche dédiée.
- Exécuter avec **Local Git Truth Check** et **une readiness**.
- PR et merge seulement avec **GO Morris**.

## 3. Contenu éditorial principal

### Prérequis

| Élément | Détail |
|---------|--------|
| Repository | Accès `mcleland147/sfia-workspace` |
| Outils | Git, Cursor, ChatGPT (projet configuré) |
| Connaissance | Lire [01 Comprendre](sfia-notion-01-understand-sfia-editorial-draft.md) |
| Baseline | Méthode **v2.4** — repérer les docs **candidate** |

### Structure minimale à connaître

| Zone Git | Contenu |
|----------|---------|
| `docs/foundation/` | Principes d'ingénierie |
| `docs/architecture/` | Pipeline, blueprint |
| `method/sfia-fast-track/` | Méthode opérationnelle |
| `prompts/` | Catalog et templates |
| `projects/` | Projets de référence (lecture sélective) |

### Rôles sur un nouveau sujet

- **Morris** : objectif, gates, GO PR/merge.
- **ChatGPT** : prompt contrat borné.
- **Cursor** : exécution dans périmètre fichiers.

## 4. Checklist — démarrage (≥10 étapes)

| # | Étape | Action |
|---|-------|--------|
| 1 | Clarifier l'objectif | Une phrase — résultat identifiable |
| 2 | Qualifier le cycle | [05 Routage](sfia-notion-05-request-routing-editorial-draft.md) + routing guide Git |
| 3 | Choisir le profil | Light / Standard / Critical / Capitalization |
| 4 | Lister fichiers autorisés / interdits | Dans le prompt |
| 5 | Vérifier Git local | `main` aligné `origin/main` |
| 6 | Créer une branche dédiée | Nom explicite (`delivery/…`, `docs/…`) |
| 7 | Exécuter Cursor | Respecter stop conditions |
| 8 | Produire review pack | Si light/full requis |
| 9 | Readiness unique | READY FOR REVIEW / COMMIT / etc. |
| 10 | PR si prévu | Après GO Morris — puis post-merge si demandé |
| 11 | Capitaliser si utile | Cycle 15 dédié |
| 12 | Consulter glossaire | [11](sfia-notion-11-glossary-editorial-draft.md) en cas de doute |

## 5. Exemple pédagogique

Nouveau contributeur documentation : cycle **8 Delivery** doc-only, profil **Standard**, branche `documentation/…`, 1–3 fichiers, review pack **light**, pas de merge sans Morris.

## 6. Points de vigilance

- Ne pas commiter `.tmp-sfia-review/` sans GO.
- Ne pas modifier `prompts/` ou `core/` sans cycle et gate explicites.
- Blueprint repository = référence technique — lire dans Git pour le détail.

## 7. Liens

→ [03 Cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) · [05 Routage](sfia-notion-05-request-routing-editorial-draft.md) · [06 Templates](sfia-notion-06-templates-prompts-deliverables-editorial-draft.md) · [11 Glossaire](sfia-notion-11-glossary-editorial-draft.md)

## 8. Sources Git

- `docs/architecture/sfia-repository-blueprint.md`
- `method/sfia-fast-track/README.md`
- `method/sfia-fast-track/checklists/` (index — lecture Git)

## 9. Métadonnées publication

Type : pratique / onboarding. Checklist à maintenir si blueprint évolue.

## 10. Réserves

Détail checklists : renvoi Git — pas de copie intégrale dans Notion.
