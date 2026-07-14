# 01 — Vision UX — SFIA Notion

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Contrat vision UX — non capitalisé |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycle ultérieur |
| **Horodatage** | 2026-07-14 12:06 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## 1. Problème traité

L'espace Notion SFIA contient 11 pages P0, deux bases (Référentiel 25 entrées, Cycles 15 entrées) et une visibilité privée Morris. Le contenu éditorial est présent mais l'**expérience** n'est pas encore structurée par un contrat UX explicite :

| Friction | Manifestation |
|----------|---------------|
| Orientation | Visiteur ne sait pas quel parcours choisir en < 30 s |
| Exhaustivité vs synthèse | Risque de reproduire la densité Git dans Notion |
| Navigation | Liens contextuels, précédent/suivant, retour accueil non standardisés |
| Statut documentaire | Candidate vs validated peu visible sans règles UX |
| Cohérence visuelle | Callouts, icônes, hero non unifiés |
| Mobile | Lecture longue non optimisée |

**Principe central :** l'espace Notion SFIA doit fonctionner comme un **portail de connaissance orienté parcours**, et non comme une copie du repository.

---

## 2. Vision cible

> **SFIA Notion UX** = une expérience de lecture guidée, sobre et traçable, qui oriente vers la bonne page ou la bonne base, expose le statut documentaire, et renvoie vers Git quand le détail technique est nécessaire.

| Dimension | Cible |
|-----------|-------|
| **Orientation** | Une intention principale par page ; parcours nommés |
| **Profondeur** | L0–L4 avec progressive disclosure |
| **Confiance** | Git source de vérité visible sans envahir |
| **Gouvernance** | Candidate explicite ; aucune décision structurante dans Notion |
| **Sobriété** | Aucun contenu décoratif sans fonction |

---

## 3. Proposition d'expérience

```text
Visiteur arrive → Accueil (hero + 3 parcours)
       │
       ├─ Découvrir (5 min)  → Valeur → Cycle (schéma) → Glossaire
       ├─ Comprendre (30 min) → Comprendre → Cycle → Profils → Gouvernance
       └─ Exécuter            → Mise en place → Routage → Templates
```

L'utilisateur ne parcourt pas une arborescence §01–11 : il suit une **intention** et des **liens contextuels** dans le corps des pages.

---

## 4. Principes UX obligatoires

| # | Principe | Règle |
|---|----------|-------|
| P1 | Orientation avant exhaustivité | Toujours proposer un prochain pas |
| P2 | Parcours avant arborescence | Navigation par intention, pas par numéro seul |
| P3 | Synthèse avant détail | Détail technique → lien Git |
| P4 | Une intention par page | Une question principale par page P0 |
| P5 | Navigation sans impasse | Accueil, précédent, suivant, ressources |
| P6 | Statut visible | Candidate, baseline v2.4, date sync |
| P7 | Git accessible, non envahissant | Callout source + lien ; pas de dump repo |
| P8 | Sobriété visuelle | Pas de décoration sans fonction |
| P9 | Aucune décision structurante dans Notion | Gates Morris restent hors Notion |
| P10 | Mobile pris en compte | Blocs courts, tables scannables, pas de dépendance couleur |

---

## 5. Objectifs mesurables

| ID | Objectif | Indicateur |
|----|----------|------------|
| O1 | Orientation < 30 s | Utilisateur identifie un parcours depuis l'accueil |
| O2 | Parcours 5 min complétable | 4 pages max sans impasse |
| O3 | Parcours 30 min complétable | 5 pages + sortie claire |
| O4 | Zéro impasse | Chaque page a retour accueil + lien suivant |
| O5 | Statut Candidate visible | Badge sur pages concernées |
| O6 | Lien Git présent | 100 % pages P0 avec source Git |
| O7 | Cohérence visuelle | Design system appliqué UX-05 |

---

## 6. Anti-objectifs

| Anti-objectif | Confirmation |
|---------------|--------------|
| Miroir du repository | **Non** |
| Remplacer Git pour exécution | **Non** |
| Sidebar comme navigation principale | **Non** — hors périmètre UX |
| Publication automatique | **Non** |
| API Notion / CMP / raw sync | **Non** |
| Nouveau cycle SFIA validé | **Non** |
| Baseline UX officielle | **Non** — Candidate uniquement |
| Décisions Morris dans Notion | **Non** |

---

## 7. Personas

### 7.1 Nouveau visiteur

| Dimension | Contenu |
|-----------|---------|
| **Besoin** | Comprendre SFIA en quelques minutes |
| **Frustration** | Jargon Git, trop de pages, pas de point d'entrée |
| **Expérience recherchée** | Parcours 5 min, hero clair, glossaire rapide |
| **Sortie Git** | Rare — reste dans Notion pour découverte |

### 7.2 Chef de projet / PO

| Dimension | Contenu |
|-----------|---------|
| **Besoin** | Savoir comment lancer un cycle, quel profil, quels livrables |
| **Frustration** | Confusion cycles v2.4 vs v2.5 Candidate |
| **Expérience recherchée** | Parcours 30 min + routage + mise en place |
| **Sortie Git** | Vers routing-guide, templates — après qualification Notion |

### 7.3 Contributeur technique

| Dimension | Contenu |
|-----------|---------|
| **Besoin** | Trouver template, prompt, garde-fou, checklist |
| **Frustration** | Duplication catalog dans Notion |
| **Expérience recherchée** | Base Référentiel + page Templates + lien Git direct |
| **Sortie Git** | Fréquente — exécution Cursor |

### 7.4 Morris

| Dimension | Contenu |
|-----------|---------|
| **Besoin** | Vérifier cohérence, statuts, gouvernance, QA espace |
| **Frustration** | Divergence Notion/Git non signalée |
| **Expérience recherchée** | Métadonnées, callouts Décision Morris, checklist QA |
| **Sortie Git** | Pour validation, merge, handoff |

---

## 8. Relation Git ↔ Notion

```text
GIT (vérité)                    NOTION (expérience)
─────────────                   ───────────────────
docs/ foundation                Synthèse L1 pages 01–02
method/ core                    Gouvernance résumée page 07
prompts/ catalog                Index + liens page 06
editorial/ drafts               Contenu publié P0 (manuel L0)
decisions validées              Mention — pas d'autorité Notion
```

**Règle :** Notion explique et oriente ; Git exécute et tranche.

---

## 9. Critères de réussite

- Un visiteur complète le parcours 5 min sans aide externe
- Un PO identifie le cycle adapté via page Routage
- Un contributeur trouve un template via Référentiel sans copie intégrale
- Morris valide la cohérence visuelle et documentaire en QA UX-06
- Aucune régression : Git reste source de vérité

---

## 10. Risques UX

| Risque | Mitigation |
|--------|------------|
| Surcharge informationnelle | Progressive disclosure L0–L4 |
| Confusion v2.5 Candidate | Badge Candidate systématique |
| Dette synced blocks | Usage limité (4 blocs max) — voir design system |
| Divergence contenu | Métadonnées commit + alerte Git prime |
| Mobile illisible | Tables courtes, toggles, pas de wide tables |
| Impasses navigation | Modèle navigation §03 |

---

## 11. Hypothèses à tester (implémentation)

| Hypothèse | Test |
|-----------|------|
| 3 parcours accueil suffisent | Observation usage Morris + 1 contributeur |
| Précédent/suivant améliore le flux | A/B manuel avant/après UX-03 |
| Base Référentiel remplace page §10 longue | Parcours « trouver un actif » |
| Callouts fonctionnels suffisent sans couleur seule | Test accessibilité lecture |

---

## 12. Décisions Morris

### Validées

- Contrat UX Candidate dans Git
- Portail parcours, pas miroir repo
- Morris propriétaire éditorial
- Espace privé maintenu
- Pas de capitalisation méthode dans UX-01

### Non prises

- Visibilité publique espace
- Promotion baseline UX
- Automatisation publication

---

## 13. Éléments Candidate

- Catalogue 15 cycles v2.5 (pages 03–04) — **Candidate — non baseline**
- Template cycle-execution v2.5 — mention explicite
- Ce document entier — **Candidate**

---

## Liens

→ [02 Architecture de l'expérience](02-sfia-notion-experience-architecture.md) · [03 Modèle de navigation](03-sfia-notion-navigation-model.md) · [README](README.md)
