# 06 — Architecture cible de l'information — SFIA Discovery Experience

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

Proposer une **nouvelle architecture de pages** orientée Discovery — sans supprimer réellement les pages Notion existantes. Mapping ancien → cible pour migration future.

---

## 2. Arborescence cible (narrative)

```text
SFIA Discovery — Accueil (Hub)
├── ACTE I — Pourquoi SFIA existe
├── ACTE II — Une nouvelle façon de piloter un projet
├── ACTE III — Suivons NovaBuild (fil rouge)
│   ├── III.1 Intention et cadrage
│   ├── III.2 Conception et UX
│   ├── III.3 Delivery et QA
│   └── III.4 Release et RUN
├── ACTE IV — Ce que SFIA produit (galerie livrables)
├── ACTE V — Pourquoi cela fonctionne (garanties et limites)
├── ACTE VI — Se projeter (par persona)
│   ├── VI.1 Dirigeant PME
│   ├── VI.2 Chef de projet
│   ├── VI.3 Équipe technique
│   └── VI.4 ESN partenaire
├── ACTE VII — Explorer la méthode (annexes)
│   ├── Cycles et profils (simplifié)
│   ├── Routage (orientation)
│   ├── Templates et assets (index)
│   ├── Gouvernance (résumé)
│   ├── Mettre SFIA en place
│   ├── Documents de référence (vue base)
│   └── Glossaire
└── Meta — Gouvernance espace · Sources Git · Statut Candidate
```

**Bases (position inchangée conceptuellement) :**

- **Référentiel SFIA** — embed Acte IV + VII
- **Cycles SFIA** — embed Acte VII

---

## 3. Table page actuelle → page cible

| Page P0 actuelle | Action cible | Destination narrative |
|------------------|--------------|---------------------|
| 00 Accueil | **Remplacer** | Hub Discovery (nouveau hero + parcours temps) |
| 01 Comprendre SFIA | **Fusionner** | Acte II + extrait Acte V |
| 02 Proposition de valeur | **Fusionner** | Acte I + Acte VI |
| 03 Comment fonctionne un cycle | **Déplacer** | Acte III (schéma) + Acte VII |
| 04 Cycles, profils, gates | **Renommer + simplifier** | Acte VII — Cycles (Candidate badge) |
| 05 Routage | **Réduire** | Acte VII — orientation uniquement |
| 06 Templates, prompts | **Index** | Acte VII — liens Référentiel |
| 07 Gouvernance | **Fusionner** | Acte V + Meta |
| 08 Mise en place | **Conserver annexe** | Acte VII |
| 10 Documents référence | **Conserver** | Acte VII — vue base |
| 11 Glossaire | **Conserver annexe** | Acte VII |

**§09 Cas d'usage :** création future P1 — hors parcours principal Discovery.

---

## 4. Table chapitre → question lecteur

| Chapitre | Question |
|----------|----------|
| Hub | Par où commencer selon mon temps ? |
| Acte I | Pourquoi SFIA ? |
| Acte II | En quoi est-ce différent ? |
| Acte III | Comment se déroule un vrai projet ? |
| Acte IV | Que produit-on ? |
| Acte V | Pourquoi faire confiance ? |
| Acte VI | Qu'est-ce que j'y gagne ? |
| Acte VII | Comment approfondir ? |

---

## 5. Table chapitre → source Git

| Chapitre | Sources principales |
|----------|---------------------|
| Acte I | engineering-principles, platform-architecture (résumé) |
| Acte II | operating-model, product-vision |
| Acte III | delivery-pipeline, projects/chantiers360 (synthèse) |
| Acte IV | bpmn-deliverables-standard, review pack examples |
| Acte V | rules-and-guardrails, publication-governance |
| Acte VI | product-vision personas, capitalization |
| Acte VII | editorial P0 existant, routing-guide (index) |

---

## 6. Table chapitre → preuve métier

| Chapitre | Preuve |
|----------|--------|
| Acte I | Anti-patterns documentés |
| Acte II | Tableau comparatif |
| Acte III | Fil rouge NovaBuild |
| Acte IV | Captures livrables |
| Acte V | Gates Morris, Git prime |
| Acte VI | Fiches persona |
| Acte VII | Bases peuplées |

---

## 7. Table chapitre → confidentialité

| Chapitre | Niveau max |
|----------|------------|
| I–VI | Public / pédagogique |
| VII cycles/routage | Pédagogique — pas catalog |
| VII templates | Index → Git |
| Meta | Gouvernance résumée |

---

## 8. Transitions précédent / suivant (extrait)

| Page | Précédent | Suivant |
|------|-----------|---------|
| Hub | — | Acte I ou parcours choisi |
| Acte I | Hub | Acte II |
| Acte II | I | III |
| Acte III.1 | II | III.2 |
| … | … | … |
| Acte VII | VI | Hub / Git |

*(Détail complet en implémentation PD-04B+)*

---

## 9. Portes d'entrée par persona

| Persona | Entrée | Parcours défaut |
|---------|--------|-----------------|
| Dirigeant PME | Hub → « 10 min » | I → II → VI.1 |
| PO | Hub → « Projet » | I → III |
| Technique | Hub → « Livrables » | IV → VII |
| ESN | Hub → « Partenaire » | II → VI.4 |
| Prospect | Hub → « 3 min » | I teaser |

---

## 10. Navigation globale

- **Hub central** — jamais sidebar Notion comme navigation primaire
- **Fil d'Ariane narratif** — Acte · Section
- **Parcours temps** — badges 3/10/20/45 min
- **Footer** — Git prime · Candidate · Morris · date sync

---

## 11. Niveaux de lecture L0–L4

| Niveau | Pages |
|--------|-------|
| L0 | Hub, Acte I teaser |
| L1 | I, II, VI |
| L2 | III, IV, V |
| L3 | VII setup, templates index |
| L4 | VII référence, glossaire complet |

---

## 12. Hypothèses

- Anciennes pages P0 **archivées** ou **redirigées** en PD-07B — pas supprimées sans GO
- Numérotation §00–11 **retirée du parcours principal** — conservée en métadonnées Git

---

## Liens

→ [07 Roadmap](07-sfia-discovery-transformation-roadmap.md) · [03 Storyline](03-sfia-discovery-storyline.md)
