# Chantiers360 v2 — Décision stack

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/stack-decision.md`  
**Cycle :** Architecture technique légère

> **Aucune stack n'est considérée comme validée tant que Morris n'a pas confirmé explicitement.**

## 1. Décision recommandée (proposition Cursor)

| Élément | Valeur proposée |
|---------|-----------------|
| **Frontend / framework** | Next.js 14+ (App Router) + React + TypeScript |
| **Persistance** | PostgreSQL |
| **Couche données** | ORM léger (Drizzle ou Prisma — choix à confirmer Morris) |
| **API / logique serveur** | Server Actions et/ou Route Handlers Next.js |
| **Styling** | CSS Modules ou Tailwind — aligné design Figma P1 (à confirmer) |
| **Hébergement (indicatif)** | Vercel (app) + PostgreSQL managé (Neon, Railway, ou équivalent) |

**Référence :** Option B dans `stack-options.md`.

## 2. Décision Morris attendue

| # | Point à trancher | Statut |
|---|------------------|--------|
| 1 | Valider ou rejeter Option B | ⏳ En attente |
| 2 | Si rejet — choisir Option A ou C | ⏳ En attente |
| 3 | ORM : Drizzle vs Prisma vs autre | ⏳ En attente |
| 4 | Approche styling (Tailwind, CSS Modules, autre) | ⏳ En attente |
| 5 | Hébergement cible (indicatif) | ⏳ En attente |
| 6 | Auth au MVP : oui/non, et quand | ⏳ En attente — hors INC-01 strict |

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

## 4. Hypothèses

| # | Hypothèse |
|---|-----------|
| 1 | MVP = application web responsive — pas d'app native |
| 2 | Un seul tenant / organisation au MVP — multi-user léger sans rôles fins |
| 3 | PostgreSQL suffit — pas de besoin NoSQL au MVP |
| 4 | Volume données faible — pas d'optimisation performance prématurée |
| 5 | Auth peut être différée ou simplifiée pour INC-01 pilote local — à arbitrer Morris |
| 6 | Design Figma P1 guide le styling — pas de design system complet obligatoire |

## 5. Risques

| Risque | Impact | Mitigation proposée |
|--------|--------|---------------------|
| Sur-ingénierie stack | Retard INC-01 | Rester sur Option B minimale — pas de microservices |
| Choix ORM bloquant | Dette légère | Décision Morris rapide ; migrations simples |
| Auth non tranchée | Blocage déploiement | Décider avant INC-01 prod ; pilote local possible sans auth |
| Écart Figma / implémentation | UX dégradée | Référencer captures `04-design/captures/` en delivery |
| Dépendance hébergeur DB | Indisponibilité | PostgreSQL standard — migration possible |

## 6. Statut

| Élément | Valeur |
|---------|--------|
| **Statut global** | ⏳ **En attente validation Morris** |
| **Stack validée** | ❌ **Non** |
| **GO architecture technique** | ❌ **Non** |
| **GO delivery INC-01** | ❌ **Non** |

---

**Documents liés :** `stack-options.md`, `technical-decisions.md`, `validation-and-delivery-readiness.md`
