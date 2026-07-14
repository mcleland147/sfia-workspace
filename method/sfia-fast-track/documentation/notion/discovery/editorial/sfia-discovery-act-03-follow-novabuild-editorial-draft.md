# ACTE III — Suivons NovaBuild

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A (préparation éditoriale Git — Acte III) |
| **Acte** | III — Suivons NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| **HEAD / base** | `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` |
| **Horodatage** | 2026-07-14 22:50 Europe/Paris (CEST) |
| **Niveau lecture** | L1–L2 |
| **Durée cible** | 15–20 minutes (page + quatre séquences) |
| **NovaBuild** | **Cas pédagogique composite** |
| **Implémentation Notion** | Non — gate PD-04B futur |
| **Réaction recherchée** | « Je vois comment SFIA accompagne réellement un projet. » |

---

## 1. Continuité avec l'Acte II

Dans l'**Acte II**, vous avez vu **comment** SFIA organise un projet : contrastes, rôles, cycles, gates, traçabilité Git.

L'**Acte III** répond à la question suivante :

> **À quoi ressemble un projet conduit avec SFIA, de l'intention métier à la mise en service ?**

Vous allez suivre **NovaBuild** — pas pour copier un dossier technique, mais pour **reconnaître la chaîne** : intention → cadrage → conception → delivery → QA → release → exploitation → capitalisation.

---

## 2. Présentation de NovaBuild

> **NovaBuild** est une **PME du BTP fictive**. L'entreprise, les personnages et la chronologie sont **scénarisés** pour la pédagogie Discovery.

**Ce que NovaBuild n'est pas :**

- un client réel ;
- un témoignage ;
- une reproduction exacte d'un historique projet ;
- une preuve chiffrée de performance.

**Ce que NovaBuild permet :**

- illustrer une intention métier reconnaissable ;
- montrer comment SFIA structure les étapes ;
- relier fiction narrative et **catégories de livrables** vérifiables dans Git.

---

## 3. Le besoin métier initial

Le dirigeant de NovaBuild veut **piloter chantiers, interventions, photos terrain et réserves** — sans perdre le fil entre le bureau et le chantier.

Son équipe a déjà testé ChatGPT et Cursor « en libre ». Résultat : des fragments utiles, **aucune version de référence**, des règles métier implicites.

SFIA entre en jeu **après** cette prise de conscience — pas comme une baguette magique, mais comme un **cadre de conduite**.

---

## 4. Ce que nous allons suivre

Quatre séquences — chacune avec une question, un conflit, une preuve et une transition :

| Séquence | Question | Fichier |
|----------|----------|---------|
| **III.1** | Comment une demande simple devient-elle un projet borné ? | [Intention et cadrage](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) |
| **III.2** | Comment transformer le cadrage en parcours cohérents ? | [Conception et UX](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) |
| **III.3** | Comment livrer sans perdre décisions et qualité ? | [Delivery et QA](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) |
| **III.4** | Comment passer à un service exploitable ? | [Release et RUN](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) |

---

## 5. Vue du parcours projet

```text
Intention ──► Cadrage ──► Conception / UX ──► Delivery ──► QA
                                                      │
Release ◄── RUN readiness ◄── Merge validé ◄──────────┘
   │
Capitalisation proportionnée
```

Chaque étape produit des **artefacts identifiables** et des **points de décision humaine** — pas seulement du code ou des slides.

---

## 6. Les acteurs visibles

| Acteur | Rôle dans NovaBuild |
|--------|---------------------|
| **Dirigeant / sponsor NovaBuild** | Porte l'intention métier · valide le périmètre |
| **Chef de projet / PO** | Traduit le besoin · tient le backlog |
| **Équipe métier** | Règles chantier · réserves · terrain |
| **Morris** | Gates structurants — scope, architecture, merge, release |
| **ChatGPT** | Qualifie · structure · challenge · prépare documents |
| **Cursor** | Exécute dans le repo — docs et code bornés |
| **Git** | Source de vérité — historique · PR · preuves |

---

## 7. Les moments de preuve

Quatre moments clés — le lecteur doit **voir** que quelque chose existe, pas seulement entendre une promesse :

| # | Moment | Ce que le lecteur retient |
|---|--------|---------------------------|
| **P1** | Scope validé et versionné | « Le périmètre est explicite » |
| **P2** | Architecture fonctionnelle alignée avec l'UX | « Les écrans respectent les règles métier » |
| **P3** | Premier incrément mergé + QA documentée | « L'implémentation est reliée aux critères » |
| **P4** | Release et reprise du projet possibles | « Le projet survit au merge » |

---

## 8. Ce qui est réel et ce qui est scénarisé

| Élément | Statut NovaBuild |
|---------|------------------|
| Entreprise · dirigeant · équipe | **Fiction pédagogique** |
| Enchaînement des étapes | **Scénarisé** — lisible et pédagogique |
| Catégories de livrables (cadrage, backlog, archi, UX, PR, QA, REX…) | **Inspirées** d'actifs SFIA vérifiables dans Git |
| Gates Morris | **Narrés** — reflètent la gouvernance SFIA |
| Métriques · délais · coûts · taux de bugs | **Absents** — non inventés |
| Attribution à un client réel | **Interdit** |

Les chemins Git détaillés et la matrice de traçabilité sont réservés aux **sections gouvernance** et au review pack — pas au corps lecteur.

---

## 9. Navigation vers III.1

Vous connaissez le cadre SFIA. NovaBuild va maintenant **montrer le premier mouvement** : transformer une demande large en projet borné.

> **Comment une demande simple devient-elle un projet borné et gouverné ?**

**→ Continuer : [ACTE III.1 — Intention et cadrage](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md)**

---

## 10. Notes d'implémentation PD-04B

| Élément | Recommandation |
|---------|----------------|
| **Structure Notion** | Page hub Acte III + 4 sous-pages enfant |
| **Navigation** | Fil d'Ariane · progression III.1 → III.4 |
| **Callouts** | « Composite » sur chaque page · distinction fiction / preuve |
| **Visuels** | Schéma parcours · icônes phases — pas de dump Git |
| **Interdit** | Chemins projects/ · prompts · commandes · contenu PR brut |

---

## 11. Sources Git (gouvernance)

| Source | Usage |
|--------|-------|
| `discovery-product-design/02-sfia-discovery-narrative-architecture.md` | Cadrage Acte III |
| `discovery-product-design/03-sfia-discovery-storyline.md` | Fil rouge NovaBuild |
| `discovery-product-design/06-sfia-discovery-target-information-architecture.md` | Architecture pages III |
| Pilote documentaire SFIA (catégories framing → capitalisation) | Inspiration catégories livrables — **non exposé lecteur** |
| `sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md` | Continuité Acte II |

---

## 12. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | NovaBuild qualifié composite partout | ✓ |
| A2 | Quatre séquences III.1–III.4 liées | ✓ |
| A3 | Moments de preuve P1–P4 annoncés | ✓ |
| A4 | Distinction fiction / catégories réelles | ✓ |
| A5 | Transition vers III.1 | ✓ |
| A6 | Aucune statistique inventée | ✓ |
| A7 | Pas de duplication Acte IV | ✓ |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–9 ci-dessus.*
