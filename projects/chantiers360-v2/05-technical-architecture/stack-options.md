# Chantiers360 v2 — Options de stack MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/stack-options.md`  
**Cycle :** Architecture technique légère

> Comparaison **documentaire** — aucune stack n'est actée sans validation Morris (`stack-decision.md`).

## Contexte de choix

- MVP web interne — artisan / petite équipe bâtiment
- 13 user stories, 5 incréments — volume modéré
- Écrans P1 validés Figma — direction premium, pas de design system exhaustif requis
- Multi-utilisateur léger au MVP — pas de rôles fins
- Pilote SFIA v2.0 — favoriser simplicité et traçabilité

---

## Option A — Next.js (App Router) + Supabase (PostgreSQL managé)

| Critère | Détail |
|---------|--------|
| **Description** | Application full-stack Next.js avec persistance via Supabase (PostgreSQL hébergé, client JS, API REST/Realtime optionnelle) |
| **Avantages** | Time-to-MVP rapide ; PostgreSQL sans ops serveur ; auth intégrée si besoin ultérieur ; hébergement Vercel + Supabase cohérent |
| **Limites** | Dépendance fournisseur Supabase ; logique métier peut se disperser entre Server Actions et client Supabase ; moins de contrôle qu'une API dédiée |
| **Adéquation MVP** | **Élevée** — CRUD simple, peu d'entités, équipe réduite |
| **Risque** | Moyen — vendor lock-in partiel ; courbe Supabase RLS si auth ajoutée |
| **Complexité** | **Faible à moyenne** |
| **Recommandation** | **Option viable** — idéale si priorité vitesse et ops minimales |

---

## Option B — Next.js (App Router) + API interne + PostgreSQL classique

| Critère | Détail |
|---------|--------|
| **Description** | Next.js avec Route Handlers ou Server Actions ; couche données via ORM léger (ex. Drizzle, Prisma) sur PostgreSQL auto-hébergé ou managé (Neon, Railway, etc.) |
| **Avantages** | Contrôle total de la couche données ; modèle relationnel explicite ; alignement naturel avec modèle documentaire ; portable |
| **Limites** | Plus de setup initial (migrations, connexion DB, env) ; ops légèrement plus lourde qu'Option A |
| **Adéquation MVP** | **Élevée** — pattern standard, extensible INC-02 à INC-05 |
| **Risque** | Faible à moyen — stack mature, complexité maîtrisable si scope respecté |
| **Complexité** | **Moyenne** |
| **Recommandation** | **Option recommandée (proposition Cursor)** — meilleur équilibre contrôle / productivité pour un pilote SFIA |

---

## Option C — React (Vite) + backend minimal séparé + PostgreSQL

| Critère | Détail |
|---------|--------|
| **Description** | SPA Vite/React consommant une API REST minimale (ex. Fastify, Hono, Express) avec PostgreSQL en backend séparé |
| **Avantages** | Séparation frontend/backend nette ; SPA légère ; backend interchangeable |
| **Limites** | Deux déploiements ; plus de glue (CORS, auth, types partagés) ; surcoût coordination pour un MVP solo/petite équipe |
| **Adéquation MVP** | **Moyenne** — pertinent si équipe front/back distincte ou contrainte SPA forte |
| **Risque** | Moyen — risque de sur-ingénierie structurelle pour le périmètre MVP |
| **Complexité** | **Moyenne à élevée** (deux artefacts) |
| **Recommandation** | **Option secondaire** — à envisager si Morris exclut Next.js ou impose séparation stricte |

---

## Synthèse comparative

| Critère | Option A (Next + Supabase) | Option B (Next + PG + ORM) | Option C (Vite + API + PG) |
|---------|---------------------------|---------------------------|---------------------------|
| Time-to-MVP | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Contrôle données | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Simplicité ops | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Extensibilité INC-02+ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Risque sur-ingénierie | Faible | Faible | Moyen |
| Alignement pilote SFIA | Bon | **Meilleur** | Acceptable |

## Recommandation Cursor (non actée)

**Option B — Next.js (App Router) + PostgreSQL + couche ORM légère**

**Motifs :**

1. Couverture naturelle des écrans P1 (SSR/SSG optionnel, routing intégré)
2. Modèle relationnel explicite pour Chantier → Tâches → Réserves
3. Pas de dépendance forte à un BaaS — portable pour capitalisation pilote
4. Server Actions ou Route Handlers suffisants au MVP — pas besoin d'un backend séparé
5. Alignement avec INC-01 puis INC-02 sans refonte structurelle

**Alternative si Morris privilégie la vitesse absolue :** Option A (Supabase).

**Décision finale :** ⏳ **Morris** — voir `stack-decision.md`.

---

**Documents liés :** `stack-decision.md`, `technical-decisions.md`
