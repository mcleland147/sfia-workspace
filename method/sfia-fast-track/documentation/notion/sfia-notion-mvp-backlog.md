# SFIA Notion — MVP Backlog

**Document :** `method/sfia-fast-track/documentation/notion/sfia-notion-mvp-backlog.md`
**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle
**Statut :** **Candidate** — backlog exploitable — **non exécuté**
**Branche :** `conception/sfia-notion-product-space`
**Références :** `sfia-notion-product-vision.md` ; `sfia-notion-information-architecture.md` ; `sfia-notion-publication-governance.md`

---

## 1. Objectif

Fournir un backlog structuré (epics, features, pages, contenus) pour les cycles 2–4 — sans ouvrir ni exécuter ces cycles.

---

## 2. Epics

| ID | Epic | Priorité | Cycle SFIA | Gate Morris |
|----|------|----------|------------|-------------|
| E1 | Architecture et gouvernance validées | P0 | Cycle 1 (présent) | Review merge conception |
| E2 | Contenus éditoriaux P0 préparés dans Git | P0 | **Cycle 2** | GO cycle 2 |
| E3 | Espace Notion MVP publié (L0) | P0 | **Cycle 3** | GO publication P0 |
| E4 | QA et cohérence espace Notion | P0 | **Cycle 4** | GO clôture MVP |
| E5 | Cas d'usage et personas P1 | P1 | Cycle 2–3 | Sélection contenu |
| E6 | Automatisation métadonnées L1 | P2 | Post-MVP | GO outillage |

---

## 3. Périmètre MVP par priorité

### P0 — Indispensable MVP

| Élément | Description |
|---------|-------------|
| Accueil | Page d'orientation L0–L1 |
| Comprendre SFIA | Cadre méthode et acteurs |
| Fonctionnement d'un cycle | Séquence cycle + readiness |
| Cycles / profils / gates | Base Cycles + page synthèse |
| Routage | Matrice demande → cycle |
| Templates / prompts / livrables | Vue Référentiel |
| Gouvernance | Garde-fous + lien governance doc |
| Mise en place | Checklist démarrage |
| Glossaire initial | ≥ 20 termes |
| Référentiel minimal | Base ≥ 25 entrées |
| Base cycles minimale | 15 cycles projet |

### P1 — Forte valeur post-MVP immédiat

| Élément | Description |
|---------|-------------|
| Cas d'usage | Interv360, Chantiers360 éditorialisés |
| Parcours personas | Pages ou toggles par persona |
| Documents fondateurs éditorialisés | Foundation/architecture long form |
| Matrices avancées | Blocs activables, Figma contract |
| Exemples projet | 3–5 fiches max |

### P2 — Évolution

| Élément | Description |
|---------|-------------|
| Releases / roadmap Notion | Synthèse roadmaps Git |
| Automatisation contrôles L1 | Scripts métadonnées |
| Publication assistée L2 | Brouillons Git → Notion |
| Contenus commerciaux avancés | Decks, comparatifs |

---

## 4. Backlog détaillé — Pages P0

| ID | Page | Epic | Priorité | Sources Git principales | Effort | Risque | Gate | Cycle | Critères d'acceptation |
|----|------|------|----------|-------------------------|--------|--------|------|-------|------------------------|
| P-00 | Accueil | E3 | P0 | README, method README, knowledge-layer | M | Faible | M4 | 3 | 3 CTA ; schéma Git↔Notion ; métadonnées |
| P-01 | Comprendre SFIA | E2/E3 | P0 | operating-model, engineering-principles | M | Faible | M4 | 2→3 | L1 complet ; 5 termes liés glossaire |
| P-02 | Proposition de valeur | E2/E3 | P0 | global-capitalization-ref, platform-architecture | M | Moyen | M4 | 2→3 | Bénéfices métier/marketing ; pas de jargon merge |
| P-03 | Comment fonctionne un cycle | E2/E3 | P0 | operating-model, cycle-execution-template (extrait) | L | Moyen | M4 | 2→3 | Diagramme séquence ; readiness unique |
| P-04 | Cycles, profils, gates | E2/E3 | P0 | routing-guide, cycle-execution-template §4 | L | Moyen | M1 | 2→3 | 15 cycles ; 4 profils ; base peuplée |
| P-05 | Routage des demandes | E2/E3 | P0 | routing-guide | M | Faible | M1 | 2→3 | Matrice ≥ 8 demandes types |
| P-06 | Templates, prompts, livrables | E2/E3 | P0 | prompt-catalog, templates README | M | Moyen | M4 | 2→3 | Référentiel lié ; pas copie catalog |
| P-07 | Gouvernance et garde-fous | E2/E3 | P0 | rules-and-guardrails, knowledge-layer | M | Faible | M4 | 2→3 | Table garde-fous ; Git prime |
| P-08 | Mettre SFIA en place | E2/E3 | P0 | repository-blueprint, checklists index | M | Faible | M4 | 2→3 | Checklist ≥ 10 items actionnables |
| P-10 | Documents de référence | E3 | P0 | foundation, architecture, core (liste fermée) | S | Faible | M4 | 3 | Vue base Référentiel filtrée |
| P-11 | Glossaire | E2/E3 | P0 | operating-model, routing-guide | M | Faible | M4 | 2→3 | ≥ 20 entrées ; liens croisés |

**Effort :** S = small (< 4h éditorial), M = medium (4–8h), L = large (8–16h)

---

## 5. Backlog — Bases et contenus

| ID | Feature | Type | Priorité | Sources | Responsable | Cycle | Critères d'acceptation |
|----|---------|------|----------|---------|-------------|-------|------------------------|
| B-A | Base Référentiel SFIA | Base | P0 | Voir IA §5 | Éditorial | 3 | 11 propriétés ; ≥ 25 entrées P0 |
| B-B | Base Cycles SFIA | Base | P0 | routing-guide §4 | Éditorial | 3 | 15 lignes ; relation templates |
| C-01 | Brouillon éditorial Accueil | Contenu Git | P0 | — | Cycle 2 | 2 | Fichier dérivé dans `documentation/notion/drafts/` ou équivalent |
| C-02 | Pack brouillons P0 (×9) | Contenu Git | P0 | Sources pages | Cycle 2 | 2 | Un MD dérivé par page P0 |
| C-03 | Checklist publication P0 | Contenu | P0 | governance doc | Cycle 3 | 3 | Dérivée `archive/checklists/notion-publication-checklist.md` |
| C-04 | Stratégie legacy Notion | Décision | P0 | target-model plan | Morris | 3 | M3 tranchée — archive ou nouveau workspace |
| C-05 | Fiche cas Interv360 MVP | Page P1 | P1 | mvp capitalization | Morris | 2–3 | 1 page ; gate sélection |
| C-06 | Fiche cas Chantiers360 | Page P1 | P1 | chantiers capitalization | Morris | 3 | Synthèse post-MVP |
| C-07 | Script L1 métadonnées | Outil | P2 | — | Post-MVP | — | Hors cmp-001 ; local only |

---

## 6. Dépendances

```text
E1 (conception cycle 1)
  → E2 (brouillons Git cycle 2)
    → E3 (publish L0 cycle 3)
      → E4 (QA cycle 4)
E5 (P1) parallèle après E3 partiel
E6 (P2) après E4
```

| ID | Dépend de | Bloque |
|----|-----------|--------|
| B-A, B-B | M1 architecture validée | P-06, P-10 |
| C-02 | E1 merged | E3 |
| E3 | M4 GO publication | E4 |
| C-05, C-06 | M5 sélection | §09 |

---

## 7. Cycles suivants proposés (non ouverts)

### Cycle 2 — Préparation éditoriale dans Git

| Champ | Contenu |
|-------|---------|
| **Objectif** | Produire brouillons éditoriaux versionnés pour pages P0 |
| **Profil** | Standard |
| **Livrables** | `drafts/*.md` ou `editorial/*.md` ; checklist relecture |
| **Interdit** | Notion API ; publish ; CMP |
| **Gate** | GO Morris cycle 2 |

### Cycle 3 — Publication Notion contrôlée

| Champ | Contenu |
|-------|---------|
| **Objectif** | Créer espace MVP ; pages P0 ; bases ; L0 manuel |
| **Profil** | Standard → Critical si espace prod |
| **Livrables** | Espace Notion ; rapport publication ; métadonnées |
| **Interdit** | raw sync ; L3+ sans GO |
| **Gate** | M3 espace + M4 GO publication |

### Cycle 4 — QA / validation espace Notion

| Champ | Contenu |
|-------|---------|
| **Objectif** | Valider parcours, liens, métadonnées, gouvernance appliquée |
| **Profil** | Standard |
| **Livrables** | Rapport QA ; réserves ; verdict MVP |
| **Gate** | Morris clôture MVP |

---

## 8. Matrice effort / risque / responsable

| Lot | Items | Effort cumulé | Risque dominant | Responsable suggéré |
|-----|-------|---------------|-----------------|---------------------|
| Conception (E1) | 4 docs Git | Fait cycle 1 | Scope creep | Cursor + Morris review |
| Éditorial P0 (E2) | 11 brouillons | ~80–100h | Terminologie candidate | Éditorial + méthode |
| Publication (E3) | 11 pages + 2 bases | ~40h | Legacy espace | Morris + éditorial |
| QA (E4) | Parcours + grep | ~16h | Liens morts | Qualité |
| P1 cas d'usage | 3–5 fiches | ~24h | Sur-publication projet | Morris |

---

## 9. Critères d'acceptation globaux MVP

| # | Critère |
|---|---------|
| AC1 | 11 pages P0 existent dans Notion avec modèle commun |
| AC2 | 2 bases peuplées selon seuils IA |
| AC3 | 100 % pages P0 : source Git + commit + propriétaire |
| AC4 | Parcours 5 min et 30 min testés sans lien mort |
| AC5 | Zéro instruction exécutable raw sync / CMP dans contenu publié |
| AC6 | Gouvernance §7 appliquée sur au moins 1 mise à jour pilote |
| AC7 | Legacy Notion traité selon M3 |
| AC8 | Rapport QA cycle 4 — verdict Morris |

---

## 10. Décisions Morris backlog

| ID | Décision | Priorité |
|----|----------|----------|
| M1 | Valider architecture §01–11 | Avant cycle 2 |
| M2 | Valider modèle page + métadonnées | Avant cycle 2 |
| M3 | Legacy vs nouvel espace Notion | Avant cycle 3 |
| M4 | GO publication P0 | Cycle 3 |
| M5 | Sélection cas P1 | Cycle 2–3 |
| M6 | Niveau automatisation post-MVP | P2 |

---

## 11. Réserves backlog

1. Estimation effort indicative — à affiner après cycle 2 premier brouillon.
2. 15 cycles v2.5 **candidate** — badge obligatoire jusqu'à validation baseline Morris.
3. `sfia-notion-target-model-and-integration-plan.md` (7 lots) **supplanté** par ce backlog — conserver comme référence historique.
4. Pas de ligne backlog pour modification `tools/cmp-001` — **exclu**.

---

## 12. Verdict document

**Backlog MVP P0/P1/P2 défini — cycles 2–4 proposés — prêt pour revue Morris.**

*Aucun cycle 2/3/4 ouvert. Aucune page Notion créée.*
