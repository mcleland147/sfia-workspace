# Chantiers360 v2 — Vue d'ensemble architecture technique légère

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/technical-architecture-overview.md`  
**Cycle :** Architecture technique légère — **validée Morris** (post PR #102)  
**Commit main de référence :** `57308aa`

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
| **Architecture technique** | ✅ Validée Morris (M6) — PR #102 + arbitrages |
| **Prochain cycle** | **Figma Fidelity Spike** — Frame Dashboard `38:502` (M8/M9) |

L'architecture technique doit **couvrir l'ensemble du MVP backlog** (P1 + P2), tout en priorisant le delivery **INC-01** aligné sur les écrans Figma P1.

## 3. Périmètre architecture légère

| Inclus | Détail |
|--------|--------|
| **Comparaison stack** | 2–3 options réalistes pour MVP web |
| **Stack validée Morris** | Option B + Drizzle + Tailwind |
| **Structure applicative cible** | Organisation logique — sans créer les dossiers |
| **Modèle de données léger** | Entités, champs, relations — documentaire |
| **Architecture frontend** | Écrans P1, composants probables, navigation, états UI |
| **Readiness delivery** | Conditions avant INC-01, critères GO code |
| **Décisions techniques** | Proposées / en attente Morris |
| **Gate fidélité Figma** | Stratégie reproduction P1 pixel-close — avant INC-01 complet |

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
| 1 | Stack comparée — options documentées | ✅ PR #102 |
| 2 | Recommandation argumentée — actée Morris | ✅ Option B |
| 3 | Structure applicative cible décrite | ✅ Validé M6 |
| 4 | Modèle de données léger couvrant le MVP | ✅ Validé M6 |
| 5 | Frontend aligné écrans P1 Figma | ✅ Validé M6 |
| 6 | Conditions INC-01 explicites | ✅ |
| 7 | Stratégie de reproduction Figma P1 documentée | ✅ |
| 8 | Gate de fidélité Figma avant delivery INC-01 complet | ✅ Validé M8 — spike requis |
| 9 | Frame Dashboard cockpit premium spike | ✅ Validé M9 — node `38:502` |
| 10 | **Validation Morris architecture** | ✅ **M6** |
| 11 | Aucun code créé | ✅ Confirmé |

## 8. Statut post-arbitrages Morris

| Décision | Statut |
|----------|--------|
| Stack Option B + Drizzle + Tailwind | ✅ Validé |
| Auth MVP | Différée après INC-01 |
| Hébergement DB | Local/dev d'abord |
| GO architecture technique (M6) | ✅ Validé |
| Figma Fidelity Spike (M8/M9) | ✅ Validé — **prochain cycle** |
| GO delivery INC-01 (M7) | ❌ **Non accordé** |

## 9. Prochain cycle recommandé

**Figma Fidelity Spike** — reproduction pixel-close de la frame **01 — Dashboard cockpit premium** (`38:502`), avant delivery INC-01 complet.

Le **delivery INC-01** reste **non autorisé** sans GO delivery Morris explicite (M7) et sans validation du spike fidélité.

---

**Documents liés :** `stack-options.md`, `stack-decision.md`, `application-structure.md`, `data-model-light.md`, `frontend-architecture.md`, `validation-and-delivery-readiness.md`, `technical-decisions.md`
