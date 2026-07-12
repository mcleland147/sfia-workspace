# Chantiers360 v2 — Décisions techniques

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/2026-07-06-technical-decisions.md`  
**Cycle :** Architecture technique légère — arbitrages Morris post PR #102

> Registre des décisions techniques — **arbitrages Morris documentés** le 2026-07-06.

## 1. Décisions techniques

| # | Décision | Valeur retenue | Statut |
|---|----------|----------------|--------|
| T1 | Stack principale | Next.js App Router + PostgreSQL + Drizzle — **Option B** | ✅ Validé Morris |
| T2 | Monolithe full-stack | Pas de backend séparé au MVP | ✅ Validé Morris |
| T3 | Planning simple | Attributs sur Chantier — pas d'entité Jalon séparée | ✅ Validé Morris |
| T4 | Prochaines actions | Vue dérivée non persistée | ✅ Validé Morris |
| T5 | Navigation fiche | Onglets client alignés Figma P1 | ✅ Validé Morris |
| T6 | Client métier | Champ texte sur Chantier — pas de table Client | ✅ Validé Morris |
| T7 | Retard | Booléen manuel — pas de calcul auto | ✅ Validé Morris |
| T8 | Styling | **Tailwind CSS** | ✅ Validé Morris |
| T9 | TypeScript | Typage fort sur entités métier | ✅ Validé Morris |
| T10 | Ordre delivery | INC-01 strict avant INC-02 | ✅ Validé Morris |
| T11 | Gate fidélité Figma | Spike pixel-close frame P1 avant clôture INC-01 complet | ✅ Validé Morris |

## 2. Arbitrages Morris

| # | Sujet | Décision Morris | Statut |
|---|-------|-----------------|--------|
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

## 3. Exclusions explicites

| # | Exclusion | Raison |
|---|-----------|--------|
| E1 | Consultation Chantiers360 V0 | Règle from scratch — comparaison fin de pilote |
| E2 | Code dans ce cycle | Cycle documentaire uniquement |
| E3 | `app/`, `backend/`, `package.json` | Pas créés avant GO delivery M7 |
| E4 | Microservices | Sur-ingénierie MVP |
| E5 | Design system package | Non requis — composants locaux + Tailwind |
| E6 | Table prochaines_actions | Vue dérivée uniquement |
| E7 | Calcul auto retard | Hors MVP fonctionnel |
| E8 | Rôles / permissions fins | Hors MVP |
| E9 | Auth au INC-01 | Différée — M3 |
| E10 | Modification backlog / design | Hors périmètre |

## 4. Risques

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| Auth différée — dette déploiement | Moyenne | Décision auth avant prod |
| Hébergement DB reporté | Faible | Local/dev pour spike et INC-01 pilote |
| Écart onglets Figma / implémentation | Faible | M5 validé — onglets client |
| Scope creep INC-01 | Moyenne | US-01 à US-04 strict |
| Écart Figma / code — UI générique | Moyenne | Spike Frame 01 — M8/M9 |
| Référence V0 involontaire | Faible | Règle V0 rappelée — non consultée |

## 5. Gates

| Gate | Condition | Statut |
|------|-----------|--------|
| **Gate design P1** | Figma P1 validé Morris | ✅ PR #101 |
| **Gate architecture** | Stack + modèle + structure validés Morris | ✅ M6 — PR #102 + arbitrages |
| **Gate fidélité Figma** | Spike pixel-close Frame Dashboard `38:502` | ⏳ **Requis** — M8 validé, à exécuter |
| **Gate delivery INC-01** | GO Morris explicite M7 + spike fidélité validé | ❌ Non autorisé |
| **Gate delivery INC-02+** | INC-01 mergé + GO Morris | ❌ Non applicable |

## 6. Confirmations

| Affirmation | Statut |
|-------------|--------|
| Architecture technique **validée** Morris (M6) | ✅ Confirmé |
| Delivery INC-01 **non autorisé** (M7) | ✅ Confirmé |
| Spike Figma Fidelity **requis** avant INC-01 complet (M8) | ✅ Confirmé |
| Chantiers360 V0 **non consultée** | ✅ Confirmé |
| Aucun code créé dans ce cycle arbitrages | ✅ Confirmé |

## 7. Prochain cycle recommandé

| Étape | Cycle | Statut |
|-------|-------|--------|
| 1 | ~~Validation Morris architecture~~ | ✅ Fait |
| 2 | ~~PR architecture technique~~ | ✅ PR #102 mergée |
| 3 | **Figma Fidelity Spike** — Frame Dashboard `38:502` | ⏳ **Prochain cycle** |
| 4 | **Delivery INC-01** | ❌ Après spike + GO delivery M7 |
| 5 | **Delivery INC-02** | ❌ Après merge INC-01 + GO Morris |
| 6 | Écrans P2 + prototype Figma | Optionnel — parallélisable |

---

**Documents liés :** `2026-07-06-stack-decision.md`, `2026-07-06-validation-and-delivery-readiness.md`, `technical-architecture-overview.md`
