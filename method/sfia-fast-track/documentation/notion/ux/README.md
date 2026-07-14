# SFIA Notion — Corpus de conception UX documentaire

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Contrat UX pour implémentation future — non capitalisé dans la méthode |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycle ultérieur (UX-02 à UX-06) |
| **Horodatage** | 2026-07-14 12:06 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## Rôle du dossier

Ce répertoire formalise le **contrat UX documentaire** validé par Morris pour l'espace Notion SFIA existant (11 pages P0 publiées, bases Référentiel et Cycles peuplées, visibilité privée Morris).

Il ne modifie pas Notion. Il ne crée pas un nouveau type de cycle SFIA. Il prépare les futurs cycles d'implémentation UX.

| Couche | Rôle |
|--------|------|
| **Git** | Source de vérité — méthode, prompts, décisions |
| **Notion (actuel)** | Espace privé Morris — contenus P0 publiés manuellement |
| **Ce corpus UX** | Contrat Candidate — gabarits, navigation, design system, parcours |

---

## Contexte des cycles précédents

| Cycle | Livrable | Statut |
|-------|----------|--------|
| Cycle 1 | Conception produit (vision, IA, gouvernance, backlog) | Mergé PR #191 |
| Cycle 2 | Brouillons éditoriaux P0 (12 fichiers) | Mergé PR #193 |
| Cycle 3 | Publication Notion P0 + bases (25 + 15 entrées) | Réalisé — espace privé Morris |
| **UX-01 (présent)** | Contrat UX documentaire (8 fichiers) | Candidate — non commité |

---

## Inventaire des documents

| # | Fichier | Responsabilité |
|---|---------|----------------|
| 1 | [01-sfia-notion-ux-vision.md](01-sfia-notion-ux-vision.md) | Vision, principes, personas, critères de réussite |
| 2 | [02-sfia-notion-experience-architecture.md](02-sfia-notion-experience-architecture.md) | Architecture par intentions (Découvrir, Utiliser, Exécuter, Gouverner) |
| 3 | [03-sfia-notion-navigation-model.md](03-sfia-notion-navigation-model.md) | Navigation, parcours, transitions entre pages P0 |
| 4 | [04-sfia-notion-design-system.md](04-sfia-notion-design-system.md) | Design system Notion — typographie, callouts, icônes, QA |
| 5 | [05-sfia-notion-page-templates.md](05-sfia-notion-page-templates.md) | Gabarits de pages (8 types) |
| 6 | [06-sfia-notion-user-journeys.md](06-sfia-notion-user-journeys.md) | Parcours utilisateur détaillés (6 minimum) |
| 7 | [07-sfia-notion-ux-roadmap.md](07-sfia-notion-ux-roadmap.md) | Roadmap implémentation UX-02 à UX-06 |

**Total :** 8 fichiers (README + 7 documents numérotés).

---

## Ordre de lecture recommandé

1. **01 Vision** — comprendre le problème et les principes
2. **02 Architecture de l'expérience** — intentions et carte logique
3. **03 Modèle de navigation** — parcours et transitions
4. **05 Templates de pages** — gabarits concrets
5. **04 Design system** — règles visuelles et composants Notion
6. **06 User journeys** — scénarios par persona
7. **07 Roadmap** — séquence d'implémentation

---

## Règles de gouvernance

| Règle | Application |
|-------|-------------|
| **Candidate** | Ce corpus n'est pas baseline SFIA ni méthode validée |
| **Git prime** | En cas de divergence Notion ↔ Git → Git prime |
| **Pas de capitalisation** | Aucune promotion dans `method/core` avant expérimentation réelle |
| **Pas de nouveau cycle SFIA** | UX-01 est un cycle documentaire type 4 — pas une extension du catalogue cycles |
| **Espace privé** | Visibilité Morris maintenue jusqu'à décision distincte |
| **Sidebar hors sujet** | La sidebar Notion native n'est pas un levier UX de ce contrat |
| **L0 manuel assisté** | Implémentation Notion sans API, CMP ni raw sync |

---

## Distinction conception / implémentation / capitalisation

```text
1. Conception UX (UX-01 — présent)     → contrat Candidate dans Git
2. Validation Morris                   → GO commit/PR puis revue contrat
3. Implémentation Notion (UX-02–06)    → application manuelle L0
4. QA par l'usage                      → friction réelle, parcours testés
5. Capitalisation éventuelle           → GO Morris explicite + critères §07
```

---

## Sources Git principales

- `method/sfia-fast-track/documentation/notion/sfia-notion-product-vision.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-information-architecture.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-governance.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-mvp-backlog.md`
- `method/sfia-fast-track/documentation/notion/editorial/` (pack P0 PR #193)
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

---

## Décisions Morris validées

- GO formalisation du contrat UX complet dans Git
- Contrat UX = base de conception **Candidate**
- Aucune implémentation Notion dans UX-01
- Aucune capitalisation méthode avant expérimentation réelle
- Morris reste propriétaire éditorial
- Git reste la source de vérité

## Décisions non prises

- Visibilité externe de l'espace Notion
- Promotion du contrat UX en baseline SFIA
- Capitalisation dans `method/core` ou templates génériques
- Automatisation L1+ (métadonnées, publication assistée)
- §09 Cas d'usage (P1)
- Stratégie legacy Notion (archive vs nouveau workspace)

---

## Critères pour envisager une future capitalisation

Capitalisation envisageable **uniquement si** (voir [07-sfia-notion-ux-roadmap.md](07-sfia-notion-ux-roadmap.md)) :

- Plusieurs itérations réelles UX-02 à UX-06 menées
- Navigation améliore effectivement l'usage constaté
- Gabarits réutilisables hors seul workspace Morris
- Règles non spécifiques à un cas unique
- Dette de maintenance synced blocks acceptable
- **GO Morris explicite** pour capitalisation

---

## Garde-fous

- Ne pas présenter ce corpus comme méthode validée ou standard SFIA officiel
- Ne pas modifier l'espace Notion depuis ce cycle
- Ne pas modifier les brouillons éditoriaux P0
- Ne pas utiliser API Notion, CMP ou raw sync
