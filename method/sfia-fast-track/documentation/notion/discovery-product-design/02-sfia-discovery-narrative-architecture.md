# 02 — Architecture narrative — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## 1. Objectif

Concevoir le **récit produit** en sept actes — indépendamment de la numérotation Notion §00–11. Chaque acte répond à une question du lecteur et prépare l'acte suivant.

---

## 2. Vue d'ensemble

```text
ACTE I   Pourquoi SFIA existe
ACTE II  Une nouvelle façon de conduire un projet
ACTE III Suivons un vrai projet
ACTE IV  Ce que SFIA produit
ACTE V   Pourquoi cela fonctionne
ACTE VI  Se projeter avec SFIA
ACTE VII Explorer la méthode (annexes)
```

---

## 3. ACTE I — Pourquoi SFIA existe

| Champ | Contenu |
|-------|---------|
| **Question lecteur** | Pourquoi une autre méthode ? Quel problème concret ? |
| **Objectif** | Créer l'urgence et la reconnaissance du problème |
| **Message** | Les projets numériques échouent par manque de cadre, pas par manque d'outils IA |
| **Émotion** | « C'est notre situation » |
| **Preuve** | Observations qualitatives vérifiables : fragmentation des responsabilités · perte de décisions · spécifications contradictoires · rework · dépendance à quelques experts · prompts improvisés · résultats IA difficiles à reproduire · manque de traçabilité · passage difficile du besoin au delivery · gouvernance implicite · coûts organisationnels décrits **sans chiffres inventés** (anti-patterns documentés · situations métier reconnaissables · illustration NovaBuild · hypothèses explicitement signalées) |
| **Niveau détail** | L0–L1 |
| **Révélé** | Douleur PME, chaos IA libre, coût du flou |
| **Masqué** | Architecture SFIA interne |
| **Transition** | « Et si une autre voie existait ? » |
| **Durée** | 3–5 min |
| **Personas** | Dirigeant PME, prospect |

---

## 4. ACTE II — Une nouvelle façon de conduire un projet

| Champ | Contenu |
|-------|---------|
| **Question** | En quoi SFIA diffère-t-elle de ChatGPT/Cursor libres et d'une ESN classique ? |
| **Objectif** | Poser le contraste tripartite |
| **Message** | SFIA = cycles + gouvernance + IA assistée + traçabilité Git |
| **Émotion** | « Enfin un cadre » |
| **Preuve** | Tableau comparatif (projet classique / IA libre / SFIA) |
| **Niveau** | L1 |
| **Révélé** | Rôles Morris / ChatGPT / Cursor / Git / Notion |
| **Masqué** | Prompt catalog, routing détaillé |
| **Transition** | « Voyons concrètement sur un projet » |
| **Durée** | 8–10 min |
| **Personas** | Chef de projet, ESN, technique |

---

## 5. ACTE III — Suivons un vrai projet

| Champ | Contenu |
|-------|---------|
| **Question** | À quoi ressemble un projet piloté avec SFIA ? |
| **Objectif** | Fil rouge narratif bout en bout |
| **Message** | De l'intention métier à la mise en service — avec gates humaines |
| **Émotion** | « Je me projette » |
| **Preuve** | Fil rouge **NovaBuild** (cas pédagogique composite) — catégories de livrables et mécanismes inspirés d'actifs SFIA vérifiables (ex. cycles Chantiers360 en Git) ; récit fictif, pas reproduction exacte d'un projet client |
| **Niveau** | L1–L2 |
| **Révélé** | Étapes cadrage → RUN, livrables par phase |
| **Masqué** | Contenu brut projects/, prompts exécutés |
| **Transition** | « Que produit-on exactement ? » |
| **Durée** | 15–20 min |
| **Personas** | Tous — cœur Discovery |

---

## 6. ACTE IV — Ce que SFIA produit

| Champ | Contenu |
|-------|---------|
| **Question** | Quels livrables et résultats concrets ? |
| **Objectif** | Matérialiser la valeur |
| **Message** | Chaque cycle produit un artefact identifiable et traçable |
| **Émotion** | « C'est tangible » |
| **Preuve** | Galerie livrables (ADR, BPMN, backlog, review pack, QA…) |
| **Niveau** | L2 |
| **Révélé** | Types livrables, exemples visuels autorisés |
| **Masqué** | Templates complets |
| **Transition** | « Pourquoi ça tient la route ? » |
| **Durée** | 10 min |
| **Personas** | PO, PMO, ESN |

---

## 7. ACTE V — Pourquoi cela fonctionne

| Champ | Contenu |
|-------|---------|
| **Question** | Quelles garanties et limites ? |
| **Objectif** | Crédibilité — pas sur-promesse |
| **Message** | Garde-fous, gates Morris, Git prime, capitalisation |
| **Émotion** | « Confiance raisonnée » |
| **Preuve** | Gouvernance résumée, limites explicites |
| **Niveau** | L2 |
| **Révélé** | Ce qui est garanti vs ce qui ne l'est pas |
| **Masqué** | Protected paths, rules complètes |
| **Transition** | « Et pour mon contexte ? » |
| **Durée** | 8 min |
| **Personas** | Dirigeant, responsable méthode |

---

## 8. ACTE VI — Se projeter avec SFIA

| Champ | Contenu |
|-------|---------|
| **Question** | Quelle valeur pour moi (PME, ESN, tech) ? |
| **Objectif** | Personnalisation par persona |
| **Message** | Parcours et gains spécifiques |
| **Émotion** | « C'est pour nous » |
| **Preuve** | Fiches persona + CTA |
| **Niveau** | L1 |
| **Révélé** | Bénéfices par segment |
| **Masqué** | Pricing, contrats commerciaux (hors scope) |
| **Transition** | « Approfondir la méthode ? » |
| **Durée** | 5–10 min |
| **Personas** | Ciblés |

---

## 9. ACTE VII — Explorer la méthode

| Champ | Contenu |
|-------|---------|
| **Question** | Comment approfondir / exécuter ? |
| **Objectif** | Porte vers annexes et Git |
| **Message** | Méthode disponible — exécution dans Git |
| **Émotion** | « Je sais où aller » |
| **Preuve** | Liens Référentiel, glossaire, setup |
| **Niveau** | L2–L4 |
| **Révélé** | Index méthode simplifié |
| **Masqué** | — (renvoi Git pour détail) |
| **Transition** | Sortie ou boucle approfondissement |
| **Durée** | Libre |
| **Personas** | Contributeur, architecte |

---

## 10. Règles transversales actes

- Un acte = une intention principale
- Chaque acte se termine par une **question** ou **CTA** vers le suivant
- Les pages P0 actuelles (§01–08) deviennent **matière** des actes VII ou annexes — pas structure primaire
- Durée totale parcours complet : 45–60 min (lecture active)

---

## 11. Hypothèses et options

| Élément | Statut |
|---------|--------|
| 7 actes | **Validé** Morris |
| Fil rouge NovaBuild (composite) | **Validé** Morris — R1 |
| Acte VII reprend glossaire/routage | **Hypothèse** — contenu P0 recyclé en annexe |

---

## Liens

→ [03 Storyline](03-sfia-discovery-storyline.md) · [06 IA cible](06-sfia-discovery-target-information-architecture.md)
