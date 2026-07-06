# Chantiers360 v2 — Vue d'ensemble architecture technique légère

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`  
**Cycle :** Architecture technique légère (post PR #101 Design Figma P1 validé Morris)  
**Commit main de référence :** `7e37b58`

> **Niveau document :** architecture technique **documentaire** — pas de code, pas de schéma exécutable, pas de déploiement.

## 1. Objectif du cycle

Définir une **architecture technique légère** suffisante pour préparer le delivery incrémental du MVP Chantiers360 v2, en s'appuyant sur :

- le cadrage et l'architecture fonctionnelle (PR #95–#97) ;
- l'UX/UI Markdown (PR #98) ;
- le backlog MVP (PR #99) ;
- le design Figma P1 validé Morris (PR #101).

**Ce cycle ne livre pas de code.** Il trace les choix techniques proposés, les structures cibles et les gates Morris avant INC-01.

## 2. Contexte post-design Figma

| Élément | Statut |
|---------|--------|
| **Gate design P1** | ✅ OK avec réserves mineures (polish non bloquant) |
| **Frames P1 validées** | Dashboard, création chantier, fiche tâches, fiche réserves |
| **Écrans P2** | ⏳ Non produits en Figma — jalons, comptes rendus, prochaines actions |
| **Alignement backlog** | ✅ Aucun écart bloquant (`design-to-backlog-alignment.md`) |
| **Backlog PR #99** | Inchangé — source de vérité fonctionnelle |

L'architecture technique doit **couvrir l'ensemble du MVP backlog** (P1 + P2), tout en priorisant le delivery **INC-01** aligné sur les écrans Figma P1.

## 3. Périmètre architecture légère

| Inclus | Détail |
|--------|--------|
| **Comparaison stack** | 2–3 options réalistes pour MVP web |
| **Recommandation argumentée** | Proposition Cursor — **non actée** sans Morris |
| **Structure applicative cible** | Organisation logique — sans créer les dossiers |
| **Modèle de données léger** | Entités, champs, relations — documentaire |
| **Architecture frontend** | Écrans P1, composants probables, navigation, états UI |
| **Readiness delivery** | Conditions avant INC-01, critères GO code |
| **Décisions techniques** | Proposées / en attente Morris |

## 4. Hors périmètre

- Création de `app/`, `backend/`, `frontend/`, `package.json`
- Code React, Next.js, API, SQL, ORM, migrations
- Base de données réelle, CI/CD, déploiement
- Authentification multi-tenant avancée, rôles fins
- Consultation ou reprise **Chantiers360 V0**
- Modification du backlog (`03-backlog/`) ou du design (`04-design/`)
- Delivery INC-01 (interdit tant que Morris n'a pas validé l'architecture)

## 5. Principes techniques

| # | Principe |
|---|----------|
| 1 | **MVP d'abord** — stack et structure minimales pour INC-01 |
| 2 | **Git = source de vérité** — décisions tracées dans le repo |
| 3 | **Fonctionnel avant technique** — alignement `state-model.md`, `user-stories.md` |
| 4 | **Design P1 comme référence visuelle** — Figma ≠ source unique |
| 5 | **Pas de sur-ingénierie** — pas de microservices, pas de design system complet obligatoire |
| 6 | **Incréments bornés** — INC-01 socle chantier avant INC-02 |
| 7 | **Morris arbitre** — Cursor propose, Morris valide |
| 8 | **V0 exclue** — comparaison réservée au cycle final de capitalisation |

## 6. Lien avec INC-01

**INC-01 — Socle chantier : liste, création, fiche** (`delivery-increments.md`)

| Attribut | Détail |
|----------|--------|
| **User stories** | US-01, US-02, US-03, US-04 |
| **Écrans P1 Figma** | Dashboard, création chantier, fiche chantier (pivot) |
| **Entités données** | Chantier (statut, retard, infos de base) |
| **Dépendances techniques** | Stack validée, structure app, modèle Chantier, routes P1 |

INC-02 (tâches, réserves) et incréments P2 s'appuient sur le socle INC-01 — l'architecture doit **anticiper** les relations sans les implémenter dans le premier delivery.

## 7. Critères de validation architecture

| # | Critère | Statut cycle |
|---|---------|--------------|
| 1 | Stack comparée — options documentées | ⏳ Proposé |
| 2 | Recommandation argumentée — non actée | ⏳ Proposé |
| 3 | Structure applicative cible décrite | ⏳ Proposé |
| 4 | Modèle de données léger couvrant le MVP | ⏳ Proposé |
| 5 | Frontend aligné écrans P1 Figma | ⏳ Proposé |
| 6 | Conditions INC-01 explicites | ⏳ Proposé |
| 7 | **Validation Morris explicite** | ❌ **En attente** |
| 8 | Aucun code créé | ✅ Confirmé |

## 8. Décision Morris requise avant delivery

| Décision | Statut |
|----------|--------|
| Choix de stack | ⏳ En attente Morris |
| Structure applicative retenue | ⏳ En attente Morris |
| Modèle de données validé | ⏳ En attente Morris |
| GO architecture technique | ⏳ En attente Morris |
| GO delivery INC-01 | ❌ **Non autorisé** — après GO architecture |

---

**Documents liés :** `stack-options.md`, `stack-decision.md`, `application-structure.md`, `data-model-light.md`, `frontend-architecture.md`, `validation-and-delivery-readiness.md`, `technical-decisions.md`
