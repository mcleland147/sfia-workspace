# 02 — Architecture de l'expérience — SFIA Notion

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Architecture par intentions — non capitalisé |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycle ultérieur |
| **Horodatage** | 2026-07-14 12:06 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## 1. Objectif

Définir l'architecture de l'expérience **par intentions**, sans dupliquer l'Information Architecture cycle 1. L'IA décrit *quoi* publier ; ce document décrit *comment l'utilisateur vit l'espace*.

---

## 2. Quatre intentions d'expérience

### 2.1 Découvrir

| Champ | Valeur |
|-------|--------|
| **Objectif** | Comprendre SFIA en 5–30 minutes sans ouvrir Git |
| **Audience** | Nouveau visiteur, dirigeant, prospect |
| **Pages** | 00 Accueil, 02 Valeur, 03 Cycle (schéma), 11 Glossaire |
| **Point d'entrée** | Accueil — parcours « 5 minutes » |
| **Sortie attendue** | Décision « aller plus loin » ou sortie |
| **Liens transverses** | → Comprendre (30 min) |
| **Risque confusion** | Trop de détail cycle v2.5 — mitiger par badge Candidate |
| **Retour Git** | Optionnel — lien platform-architecture si curiosité |

### 2.2 Utiliser

| Champ | Valeur |
|-------|--------|
| **Objectif** | Comprendre comment appliquer SFIA au quotidien |
| **Audience** | Chef de projet, PO, PMO |
| **Pages** | 01 Comprendre, 03 Cycle, 04 Profils/gates, 05 Routage |
| **Point d'entrée** | Accueil — parcours « 30 minutes » |
| **Sortie attendue** | Identifier cycle + profil pour une demande |
| **Liens transverses** | → Mise en place, Base Cycles |
| **Risque confusion** | 15 cycles v2.5 présentés comme baseline |
| **Retour Git** | routing-guide, cycle-execution-template (extrait) |

### 2.3 Exécuter

| Champ | Valeur |
|-------|--------|
| **Objectif** | Préparer et lancer un cycle concret |
| **Audience** | PO, tech lead, contributeur |
| **Pages** | 08 Mise en place, 05 Routage, 06 Templates, Bases |
| **Point d'entrée** | Accueil — parcours « Mise en œuvre » |
| **Sortie attendue** | Workspace prêt + cycle identifié + assets trouvés |
| **Liens transverses** | → Référentiel, Glossaire |
| **Risque confusion** | Croire que Notion lance Cursor |
| **Retour Git** | **Obligatoire** — exécution hors Notion |

### 2.4 Gouverner

| Champ | Valeur |
|-------|--------|
| **Objectif** | Comprendre règles, garde-fous, statuts, divergence Git |
| **Audience** | Morris, responsable méthode, qualité |
| **Pages** | 07 Gouvernance, 10 Documents (vue base), 07 + governance doc Git |
| **Point d'entrée** | Footer global, lien depuis toute page |
| **Sortie attendue** | Règles claires ; pas d'action structurante dans Notion |
| **Liens transverses** | → Accueil, Comprendre |
| **Risque confusion** | Modifier méthode dans Notion |
| **Retour Git** | rules-and-guardrails, publication-governance |

---

## 3. Carte logique de l'expérience

```text
                    ┌─────────────┐
                    │ 00 ACCUEIL  │
                    └──────┬──────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
    ┌────────────┐  ┌────────────┐  ┌────────────┐
    │ DÉCOUVRIR  │  │  UTILISER  │  │  EXÉCUTER  │
    │ 02,03,11   │  │ 01,03,04,05│  │ 08,05,06   │
    └────────────┘  └────────────┘  └─────┬──────┘
                                            │
                    ┌────────────┐          │
                    │ GOUVERNER  │◄─────────┘
                    │ 07, 10     │
                    └────────────┘
           Bases transverses : Référentiel · Cycles · Glossaire
```

---

## 4. Correspondance pages P0 actuelles

| Page P0 | Intention(s) | Niveau | Rôle UX |
|---------|--------------|--------|---------|
| 00 Accueil | Toutes (hub) | L0–L1 | Point d'entrée unique |
| 01 Comprendre | Utiliser | L1–L2 | Cadre méthode |
| 02 Valeur | Découvrir | L1 | Pitch et bénéfices |
| 03 Cycle | Découvrir, Utiliser | L2 | Séquence cycle |
| 04 Profils/gates | Utiliser | L2 | Qualification |
| 05 Routage | Utiliser, Exécuter | L2 | Matrice demandes |
| 06 Templates | Exécuter | L3 | Index assets |
| 07 Gouvernance | Gouverner | L2–L3 | Garde-fous |
| 08 Mise en place | Exécuter | L3 | Onboarding pratique |
| 10 Documents | Gouverner | L4 | Vue Base Référentiel |
| 11 Glossaire | Découvrir, transversal | L1–L4 | Vocabulaire |

**Hors P0 publié :** §09 Cas d'usage (P1) — non couvert UX-01.

---

## 5. Rôle des bases

### Base Référentiel SFIA (25 entrées)

| Dimension | Règle UX |
|-----------|----------|
| **Rôle** | Trouver prompts, templates, docs fondateurs |
| **Intention** | Exécuter, Gouverner |
| **Entrée** | Page 06, page 10 (vue filtrée), liens contextuels |
| **Sortie** | Lien Git ou page Notion liée |
| **Risque** | Devenir miroir catalog — **interdit** |

### Base Cycles SFIA (15 entrées)

| Dimension | Règle UX |
|-----------|----------|
| **Rôle** | Explorer cycles projet, profils, gates |
| **Intention** | Utiliser |
| **Entrée** | Page 04, 05, liens depuis Routage |
| **Sortie** | Page 03 ou Git routing-guide |
| **Risque** | Confusion v2.5 baseline — badge Candidate |

---

## 6. Page Documents de référence (§10)

- **Pas** une longue page statique
- **Vue filtrée** Base Référentiel (`visibilité=publique` ou équivalent)
- Intention **Gouverner** + support **Exécuter** (L4)
- Lien depuis page 07 et footer

---

## 7. Place du Glossaire

- Accessible depuis **toute page** (footer + liens inline)
- Intention **Découvrir** (5 termes clés) + support transversal
- Termes liés depuis corps des pages (progressive disclosure)

---

## 8. Profondeur L0 à L4

| Niveau | Contenu Notion | Détail technique |
|--------|----------------|------------------|
| L0 | Hero, 30 secondes, CTA | — |
| L1 | Synthèse métier | Lien Git optionnel |
| L2 | Cycle, routage, profils | routing-guide |
| L3 | Templates, setup, garde-fous | prompts/, method/ |
| L4 | Référentiel, glossaire complet | docs/ foundation |

**Règle :** ne jamais monter de niveau sans signal explicite (« détail technique → Git »).

---

## 9. Numérotation stable vs navigation par intention

| Mécanisme | Usage |
|-----------|-------|
| **Numérotation §00–11** | Stable pour traçabilité Git ↔ Notion, métadonnées |
| **Navigation par intention** | Primaire pour l'utilisateur — parcours nommés |
| **Sidebar Notion** | **Hors sujet UX** — ne pas optimiser ; parcours in-page prioritaire |

---

## 10. Architecture cible desktop

- Largeur lecture confortable (colonnes Notion standard)
- Hero pleine largeur sur accueil
- Tables ≤ 5 colonnes ; toggles pour détail
- Footer synced global en bas de chaque page

---

## 11. Comportement mobile attendu

- Blocs empilés — pas de colonnes multi-sur mobile
- Tables converties en listes ou toggles si > 3 colonnes
- Navigation footer : liens texte courts (Accueil · Suivant)
- Callouts lisibles sans zoom
- Pas de dépendance survol ou sidebar

---

## 12. Zones non couvertes P0

| Zone | Priorité | Cycle |
|------|----------|-------|
| §09 Cas d'usage | P1 | Post UX-06 |
| Parcours personas dédiés | P1 | UX-06+ |
| Visibilité publique | Décision Morris | Hors UX-01 |
| Automatisation L1+ | P2 | Post-MVP |

---

## Liens

→ [01 Vision UX](01-sfia-notion-ux-vision.md) · [03 Navigation](03-sfia-notion-navigation-model.md) · [05 Templates](05-sfia-notion-page-templates.md)
