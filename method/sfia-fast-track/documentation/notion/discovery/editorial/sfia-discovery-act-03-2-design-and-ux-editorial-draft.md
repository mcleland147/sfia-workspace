# ACTE III.2 — Conception et UX

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.2 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment transformer le cadrage en règles, parcours et écrans cohérents ? |

---

## 1. Point de départ

NovaBuild dispose d'un **MVP cadré**. L'équipe pourrait coder immédiatement — SFIA retarde l'exécution **juste assez** pour aligner métier, règles et expérience.

---

## 2. Rôles utilisateurs

| Rôle NovaBuild (fiction) | Responsabilité |
|--------------------------|----------------|
| **Admin / dirigeant** | Paramétrage léger · vue synthèse |
| **Conducteur de travaux** | Saisie terrain · réserves · tâches |
| **Membre bureau** | Consolidation · compte rendu |
| **Lecture seule** *(option)* | Consultation chantier |

Les rôles **conditionnent** ce que chaque écran autorise — pas seulement l'apparence.

---

## 3. Règles métier essentielles

Exemples de règles **validées avant UX** (NovaBuild fiction) :

| Objet | Règle |
|-------|-------|
| **Réserve** | Statuts : ouverte · en cours · levée · refusée |
| **Clôture réserve** | Action réservée au conducteur ou au bureau — selon arbitrage |
| **Chantier** | Statuts : à démarrer · en cours · en pause · terminé |
| **Retard** | Signal dérivé des jalons — pas un module planning complet |

> Ces règles évitent qu'un écran « joli » implémente une **mauvaise logique métier**.

---

## 4. Objets et scénarios principaux

| Objet | Scénario prioritaire |
|-------|---------------------|
| **Chantier** | Créer · consulter · mettre à jour le statut |
| **Tâche** | Ajouter · lister · changer statut |
| **Réserve** | Signaler · suivre · clôturer |
| **Jalon simple** | Date prévue · prochaine intervention |
| **Compte rendu** | Rédiger · consulter sur la fiche chantier |

---

## 5. Architecture fonctionnelle

L'**architecture fonctionnelle** décrit **ce que le produit fait** — sans stack technique :

- domaines fonctionnels (chantier, tâches, réserves…) ;
- modèle d'états ;
- navigation fonctionnelle ;
- **décisions structurantes** tracées.

**ChatGPT** aide à structurer · **Cursor** peut produire des brouillons · **Morris** tranche aux points qui engagent la suite.

---

## 6. Parcours terrain / bureau

Deux contextes — un même référentiel :

| Contexte | Besoin UX |
|----------|-----------|
| **Terrain** | Saisie rapide · réserves · statuts · mobile web |
| **Bureau** | Vue liste · consolidation · prochaines actions |

Les parcours sont **validés** avant le premier incrément code — pas recollés après coup.

---

## 7. Conception UX et contrat visuel

Le cycle UX produit :

- **carte des écrans** — quelles pages existent ;
- **wireframes fonctionnels** — structure, pas pixel-perfect obligatoire ;
- **flux utilisateur** — chemins principaux ;
- **brief design** — principes visuels et cohérence.

NovaBuild (fiction) vise une interface **lisible sur chantier** — contrastes, libellés métier, pas de jargon technique.

---

## 8. Revue Morris

Avant delivery, Morris valide :

- cohérence **règles ↔ écrans** ;
- périmètre UX **aligné MVP** ;
- absence de **feature creep** déguisé en « amélioration UI ».

C'est une **gate de conception** — distincte de la gate merge code.

---

## 9. Alignement besoin · règles · écrans

| Couche | Question |
|--------|----------|
| **Besoin** | Quel problème métier ? |
| **Règles** | Quelles transitions autorisées ? |
| **Parcours** | Qui fait quoi, où ? |
| **Écrans** | Comment le supporte-t-on ? |

SFIA exige que ces quatre couches **disent la même chose** avant l'incrément delivery.

---

## 10. Trace Git

Livrables typiques de cette phase (catégories — contenu NovaBuild scénarisé) :

- architecture fonctionnelle ;
- modèle d'états ;
- décisions UX tracées ;
- carte écrans et flux ;
- checklist revue design.

Le lecteur retient : **la conception est versionnée**, pas figée dans des fichiers locaux ou des fils de discussion.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Une interface peut sembler claire tout en implémentant une mauvaise règle métier. |
| **Résolution** | Rôles, règles et parcours sont **validés avant** le delivery. |
| **Preuve P2** | Architecture fonctionnelle et UX **décrivent la même version** du produit. |

---

## 12. Transition vers III.3

Les choix sont conçus et validés. Il faut les **matérialiser** en incrément fonctionnel.

> **Comment livrer rapidement sans perdre les décisions et la qualité ?**

**→ Continuer : [ACTE III.3 — Delivery et QA](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md)**

**← Retour : [ACTE III.1 — Intention et cadrage](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md)**

---

## 13. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Architecture fonctionnelle | Dossier 01-functional-architecture/ pilote |
| UX / wireframes / flux | Dossier 02-ux-ui/ pilote |
| Design / revue | Dossier 04-design/ · spike fidélité |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–12 ci-dessus.*
