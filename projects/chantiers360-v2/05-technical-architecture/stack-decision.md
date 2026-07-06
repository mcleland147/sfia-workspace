# Chantiers360 v2 — Décision stack

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/stack-decision.md`  
**Cycle :** Architecture technique légère — arbitrages Morris post PR #102

> **Stack validée Morris** — 2026-07-06. Delivery INC-01 reste **non autorisé** sans GO delivery dédié et sans spike fidélité Figma si requis.

## 1. Décision validée Morris

| Élément | Valeur retenue |
|---------|----------------|
| **Option stack** | **Option B** — validée Morris (M1) |
| **Frontend / framework** | Next.js App Router + React + TypeScript |
| **Persistance** | PostgreSQL |
| **Couche données** | **Drizzle ORM** — validé Morris (M2) |
| **API / logique serveur** | Server Actions et/ou Route Handlers Next.js |
| **Styling** | **Tailwind CSS** — validé Morris (M10) |
| **Auth MVP** | **Différée après INC-01** — validé Morris (M3) |
| **Hébergement DB** | **Différé** — local/dev d'abord — validé Morris (M4) |

**Référence :** Option B dans `stack-options.md`.

## 2. Historique arbitrages Morris

| # | Point tranché | Décision | Statut |
|---|---------------|----------|--------|
| M1 | Choix stack final | **Option B** — Next.js + PostgreSQL + ORM léger | ✅ Validé |
| M2 | ORM | **Drizzle** | ✅ Validé |
| M3 | Auth MVP | **Différée après INC-01** | ✅ Validé |
| M4 | Hébergement DB | **Différé — local/dev d'abord** | ✅ Validé |
| M5 | Navigation fiche | **Onglets client** alignés Figma | ✅ Validé |
| M6 | GO architecture technique | **GO** | ✅ Validé |
| M7 | GO delivery INC-01 | **Non accordé** pour l'instant | ❌ En attente |
| M8 | Figma Fidelity Spike | **Oui** — requis avant INC-01 complet | ✅ Validé |
| M9 | Frame spike | **Dashboard cockpit premium** — node `38:502` | ✅ Validé |
| M10 | Styling front | **Tailwind CSS** | ✅ Validé |

## 3. Critères de choix retenus

| Critère | Poids |
|---------|-------|
| Time-to-MVP INC-01 | Élevé |
| Simplicité structurelle | Élevé |
| Alignement modèle relationnel MVP | Élevé |
| Portabilité / pas de lock-in fort | Moyen |
| Courbe d'apprentissage Morris / équipe | Moyen |
| Coût ops initial | Moyen |
| Extensibilité INC-02 à INC-05 | Moyen |

## 4. Hypothèses actives

| # | Hypothèse |
|---|-----------|
| 1 | MVP = application web responsive — pas d'app native |
| 2 | Un seul tenant / organisation au MVP — multi-user léger sans rôles fins |
| 3 | PostgreSQL suffit — pas de besoin NoSQL au MVP |
| 4 | Volume données faible — pas d'optimisation performance prématurée |
| 5 | **Auth différée après INC-01** — pilote local/dev sans auth au premier delivery |
| 6 | **Hébergement DB local/dev** — choix prod reporté post-INC-01 |
| 7 | Design Figma P1 guide le styling — Tailwind pour reproduction pixel-close |

## 5. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Sur-ingénierie stack | Retard INC-01 | Rester sur Option B minimale — pas de microservices |
| Auth différée | Dette déploiement | Décision auth avant mise en prod |
| Hébergement DB reporté | Dette ops | Local/dev suffisant pour spike et INC-01 pilote |
| Écart Figma / implémentation | UX dégradée | Spike Figma Fidelity Frame 01 + captures repo |
| Dépendance hébergeur DB | Indisponibilité | PostgreSQL standard — migration possible |

## 6. Statut

| Élément | Valeur |
|---------|--------|
| **Statut global** | ✅ **Validé Morris** |
| **Stack validée** | ✅ **Oui** — Option B + Drizzle + Tailwind |
| **GO architecture technique** | ✅ **Oui** — M6 |
| **Figma Fidelity Spike** | ⏳ **Requis** — M8, avant INC-01 complet |
| **GO delivery INC-01** | ❌ **Non** — M7 non accordé |

> Le **delivery INC-01** n'est pas autorisé tant que le spike fidélité Figma n'est pas réalisé/validé et qu'un **GO delivery Morris explicite** n'a pas été donné.

---

**Documents liés :** `stack-options.md`, `technical-decisions.md`, `validation-and-delivery-readiness.md`
