# 07 — Roadmap UX — SFIA Notion

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Roadmap implémentation — non capitalisé |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycles UX-02 à UX-06 |
| **Horodatage** | 2026-07-14 15:02 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## 1. Positionnement

| Dimension | Valeur |
|-----------|--------|
| **Niveau automatisation** | **L0 — manuel assisté** |
| **Périmètre** | Espace Notion privé Morris — 11 pages P0 + 2 bases |
| **Hors périmètre** | API, CMP, raw sync, capitalisation method/core |
| **Prérequis** | UX-01 contrat validé + GO Morris commit/PR |

---

## 2. Incréments UX-02 à UX-06

### UX-02 — Landing page

| Champ | Valeur |
|-------|--------|
| **Objectif** | Appliquer gabarit landing sur 00 Accueil |
| **Pages** | 00 Accueil |
| **Dépendances** | UX-01 validé, design system §04 |
| **Actions Notion** | Hero, 3 parcours, callout Git, schéma, footer synced |
| **Hors périmètre** | §09, visibilité publique |
| **Critères acceptation** | 3 CTA ; mobile empilé ; QA checklist §04 |
| **Preuves** | Capture desktop + mobile ; lien pages parcours |
| **Gate Morris** | Revue visuelle accueil |
| **Rollback** | Restaurer version éditoriale cycle 3 |
| **Risque** | Surcharge hero — **moyen** |
| **Dette** | Synced block footer à maintenir |
| **Priorité** | **P0** — quick win |

### UX-03 — Navigation des pages

| Champ | Valeur |
|-------|--------|
| **Objectif** | En-têtes, précédent/suivant, liens transverses |
| **Pages** | 01–08, 11 (10 pages éditoriales) |
| **Dépendances** | UX-02 (footer synced) |
| **Actions Notion** | Blocs navigation en-tête/pied ; tableau transitions §03 |
| **Hors périmètre** | Sidebar optimisation |
| **Critères acceptation** | Zéro impasse ; P/S cohérents §03 |
| **Preuves** | Walkthrough 4 parcours |
| **Gate Morris** | Test parcours 5 min + 30 min |
| **Rollback** | Retirer blocs nav — contenu intact |
| **Risque** | Incohérence P/S — **faible** |
| **Dette** | Mise à jour manuelle si nouvelle page |
| **Priorité** | **P0** |

### UX-04 — Bases et vues

| Champ | Valeur |
|-------|--------|
| **Objectif** | Vues Référentiel et Cycles par intention |
| **Bases** | Référentiel (25), Cycles (15) |
| **Dépendances** | UX-01 ; liens finaux pages ↔ bases après stabilisation UX-03 |
| **Actions Notion** | Vues filtrées ; embed §10 ; fiches liées |
| **Hors périmètre** | Nouvelles entrées massives |
| **Critères acceptation** | Parcours F (trouver actif) < 3 clics |
| **Preuves** | Test parcours F + E |
| **Gate Morris** | Validation liste fermée Référentiel |
| **Rollback** | Revenir vues cycle 3 |
| **Risque** | Miroir catalog — **moyen** |
| **Dette** | Sync métadonnées Git manuel |
| **Priorité** | **P0** |

### UX-05 — Cohérence visuelle

| Champ | Valeur |
|-------|--------|
| **Objectif** | Design system §04 sur 11 pages |
| **Pages** | Toutes P0 |
| **Dépendances** | UX-02, UX-03 |
| **Actions Notion** | Callouts, icônes, métadonnées, toggles mobile |
| **Hors périmètre** | Rebrand complet |
| **Critères acceptation** | Matrice QA §04 — 100 % pages |
| **Preuves** | Checklist design system par page |
| **Gate Morris** | Revue sobriété + accessibilité |
| **Rollback** | Page par page |
| **Risque** | Synced blocks divergence — **moyen** |
| **Dette** | 4 synced blocks à auditer |
| **Priorité** | **P0** |

### UX-06 — QA de l'espace

| Champ | Valeur |
|-------|--------|
| **Objectif** | Validation globale parcours + cohérence |
| **Pages** | Espace complet |
| **Dépendances** | UX-02 à UX-05 |
| **Actions Notion** | Corrections liens, métadonnées, impasses |
| **Hors périmètre** | §09 P1, public launch |
| **Critères acceptation** | 6 parcours §06 passent ; 0 lien mort |
| **Preuves** | Rapport QA Morris ; captures |
| **Gate Morris** | GO clôture UX ou réserves |
| **Rollback** | Backlog corrections |
| **Risque** | Dette non résolue — **faible** |
| **Dette** | Process QA manuel récurrent |
| **Priorité** | **P0** |

---

## 3. Priorisation P0 / P1 / P2

| Priorité | Incréments | Éléments |
|----------|------------|----------|
| **P0** | UX-02 à UX-06 | Contrat UX appliqué espace existant |
| **P1** | Post UX-06 | §09 Cas d'usage ; parcours personas ; captures |
| **P2** | Post-MVP | L1 métadonnées ; visibilité publique ; capitalisation |

---

## 4. Quick wins

| Quick win | Incrément | Effort |
|-----------|-----------|--------|
| Callout « À retenir » standardisé | UX-05 | Faible |
| Footer synced Git prime | UX-02 | Faible |
| Icônes en-tête pages | UX-05 | Faible |
| Badge Candidate pages 03–04 | UX-05 | Faible |

---

## 5. Dépendances bloquantes

Les relations ci-dessous sont **obligatoires** — un incrément ne démarre pas tant que son prérequis bloquant n'est pas satisfait.

| Relation | Règle |
|----------|-------|
| UX-01 → tous | Le contrat UX validé est prérequis à UX-02 à UX-06 |
| UX-02 → UX-03 | La landing page précède la validation globale de la navigation UX-03 |
| UX-03 → UX-06 | La navigation doit être suffisamment stabilisée avant la QA finale |
| UX-04 → UX-06 | Les bases et vues doivent être terminées avant UX-06 |
| UX-05 → UX-06 | La cohérence visuelle doit être terminée avant UX-06 |
| UX-06 | **Terminal** — clôture l'expérimentation UX |

```text
UX-01
├── UX-02 Landing
│   └── UX-03 Navigation
├── UX-04 Bases et vues
└── UX-05 Cohérence visuelle
    ↓
UX-06 QA finale
    ↓
Décision Morris éventuelle de capitalisation
```

**Note :** UX-04 et UX-05 sont des branches parallèles après UX-01 ; UX-03 reste une branche dépendante de UX-02. UX-06 agrège toutes les branches.

---

## 6. Travaux parallélisables

Le parallélisme concerne la **préparation** et l'exécution partielle — pas la **validation finale** ni la clôture.

| Travail | Parallélisme | Condition |
|---------|--------------|-----------|
| UX-04 Bases et vues | Peut démarrer après UX-01 | Sans attendre la finalisation complète de UX-03 |
| UX-05 composants simples | Peut démarrer en parallèle de UX-02 / UX-03 | Callouts, icônes, badges Candidate, footer synced |
| UX-05 composants navigation | **Non parallèle** | Attendre les décisions UX-03 (P/S, en-têtes) |
| UX-06 QA finale | **Jamais parallèle** | Attend UX-02, UX-03, UX-04, UX-05 terminés |

**Règle :** aucun incrément n'est déclaré **terminé** sans ses propres critères d'acceptation et gate Morris — le parallélisme n'abroge pas les gates.

---

## 7. Ordre de livraison recommandé

Ordre de **validation et clôture** (séquentiel) :

1. **UX-02** — Landing page
2. **UX-03** — Navigation structurante
3. **UX-04** — Bases et vues
4. **UX-05** — Cohérence visuelle et finitions
5. **UX-06** — QA finale

| Distinction | Description |
|-------------|-------------|
| **Ordre de préparation** | Peut comporter du parallélisme (§6) — ex. quick wins UX-05 pendant UX-02/03 |
| **Ordre de validation** | Reste séquentiel — chaque incrément validé par Morris avant clôture |
| **Ordre de livraison** | UX-02 → UX-03 → UX-04 → UX-05 → UX-06 pour déclaration « terminé » |

**Quick wins préparatoires (UX-05 partiel) :** callout « À retenir », footer synced Git prime, icônes en-tête, badge Candidate — réalisables dès UX-02 sans clôturer UX-05.

---

## 8. Gates Morris par incrément

| Incrément | Gate |
|-----------|------|
| UX-01 | GO commit/PR contrat (présent cycle) |
| UX-02 | Revue accueil |
| UX-03 | Test 4 parcours |
| UX-04 | Liste fermée Référentiel |
| UX-05 | Checklist design system |
| UX-06 | GO clôture UX ou réserves documentées |

---

## 9. Critères capitalisation future

Capitalisation dans `method/core` ou template générique **uniquement si** :

| # | Critère |
|---|---------|
| 1 | ≥ 2 itérations réelles UX-02–06 menées |
| 2 | Navigation améliore usage constaté (preuve QA) |
| 3 | Gabarits réutilisables hors workspace Morris |
| 4 | Règles non spécifiques à un seul espace |
| 5 | Dette synced blocks acceptable |
| 6 | **GO Morris explicite** capitalisation |

---

## 10. Critères de non-capitalisation

| Situation | Action |
|-----------|--------|
| Règles trop spécifiques Notion Morris | Rester dans `documentation/notion/ux/` |
| Dette synced blocks excessive | Simplifier avant capitalisation |
| Usage faible constaté | Ne pas promouvoir baseline |
| Conflit doctrine SFIA | **STOP** — revue Morris |
| Tentative promotion baseline UX | **Interdit** sans GO |

---

## 11. Synthèse risques roadmap

| Risque global | Niveau | Mitigation |
|---------------|--------|------------|
| Scope creep §09 | Moyen | P1 explicite |
| Automatisation prématurée | Faible | L0 only |
| Capitalisation hâtive | Moyen | Critères §8 stricts |
| Divergence Git/Notion | Moyen | Métadonnées + QA E |

---

## Liens

→ [README](README.md) · [01 Vision](01-sfia-notion-ux-vision.md) · [06 User journeys](06-sfia-notion-user-journeys.md)
