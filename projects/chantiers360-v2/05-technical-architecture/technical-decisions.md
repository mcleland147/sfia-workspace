# Chantiers360 v2 — Décisions techniques

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/technical-decisions.md`  
**Cycle :** Architecture technique légère (post PR #101)

> Registre des décisions techniques — proposées par Cursor, **validées par Morris**.

## 1. Décisions techniques proposées

| # | Décision | Proposition Cursor | Statut |
|---|----------|-------------------|--------|
| T1 | Stack principale | Next.js App Router + PostgreSQL + ORM léger | ⏳ En attente Morris |
| T2 | Monolithe full-stack | Pas de backend séparé au MVP | ⏳ En attente Morris |
| T3 | Planning simple | Attributs sur Chantier — pas d'entité Jalon séparée | ⏳ En attente Morris |
| T4 | Prochaines actions | Vue dérivée non persistée | ⏳ En attente Morris |
| T5 | Navigation fiche | Onglets client (aligné Figma P1) | ⏳ En attente Morris |
| T6 | Client métier | Champ texte sur Chantier — pas de table Client | ⏳ En attente Morris |
| T7 | Retard | Booléen manuel — pas de calcul auto | ⏳ En attente Morris |
| T8 | Styling | Tailwind ou CSS Modules — selon préférence Morris | ⏳ En attente Morris |
| T9 | TypeScript | Oui — typage fort sur entités métier | ⏳ En attente Morris |
| T10 | Ordre delivery | INC-01 strict avant INC-02 | ⏳ En attente Morris |

## 2. Décisions en attente Morris

| # | Sujet | Options | Impact |
|---|-------|---------|--------|
| M1 | Choix stack final | A (Supabase) / B (Next+PG) / C (Vite+API) | Setup projet, ops |
| M2 | ORM | Drizzle / Prisma / autre | Migrations, DX |
| M3 | Auth MVP | Aucune (pilote local) / simple / différée post-INC-01 | Déploiement |
| M4 | Hébergement DB | Neon / Railway / Supabase / local | Ops |
| M5 | Onglets vs routes | Onglets SPA / routes distinctes | Routing, URLs |
| M6 | GO architecture technique | GO / NO-GO / ajustements | Déblocage delivery |
| M7 | GO delivery INC-01 | GO / NO-GO | Premier code |

## 3. Exclusions explicites

| # | Exclusion | Raison |
|---|-----------|--------|
| E1 | Consultation Chantiers360 V0 | Règle from scratch — comparaison fin de pilote |
| E2 | Code dans ce cycle | Cycle documentaire uniquement |
| E3 | `app/`, `backend/`, `package.json` | Pas créés avant GO delivery |
| E4 | Microservices | Sur-ingénierie MVP |
| E5 | Design system package | Non requis — composants locaux |
| E6 | Table prochaines_actions | Vue dérivée uniquement |
| E7 | Calcul auto retard | Hors MVP fonctionnel |
| E8 | Rôles / permissions fins | Hors MVP |
| E9 | CI/CD dans ce cycle | Cycle delivery ultérieur |
| E10 | Modification backlog / design | Hors périmètre cycle architecture |

## 4. Risques

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| Stack non validée — travail perdu | Moyenne | Gate Morris avant setup |
| Auth reportée — dette déploiement | Moyenne | Décision M3 avant prod |
| Écart onglets Figma / routes | Faible | Arbitrage M5 |
| Scope creep INC-01 | Moyenne | US-01 à US-04 strict |
| Référence V0 involontaire | Faible | Règle V0 rappelée — non consultée |

## 5. Gates

| Gate | Condition | Statut |
|------|-----------|--------|
| **Gate design P1** | Figma P1 validé Morris | ✅ PR #101 |
| **Gate architecture** | Stack + modèle + structure validés Morris | ❌ En attente |
| **Gate delivery INC-01** | GO Morris explicite post-architecture | ❌ Non autorisé |
| **Gate delivery INC-02+** | INC-01 mergé + GO Morris | ❌ Non applicable |

## 6. Confirmations cycle

| Affirmation | Statut |
|-------------|--------|
| Architecture technique **non validée** tant que Morris n'a pas donné GO | ✅ Confirmé |
| Delivery code **non autorisé** dans ce cycle | ✅ Confirmé |
| Chantiers360 V0 **non consultée** | ✅ Confirmé |
| Aucun fichier backlog ou design modifié | ✅ Confirmé |
| Aucun code créé | ✅ Confirmé |

## 7. Prochain cycle recommandé

| Étape | Cycle | Prérequis |
|-------|-------|-----------|
| 1 | **Validation Morris architecture** | Revue documents `05-technical-architecture/` |
| 2 | **PR architecture technique** | GO Morris + commit local → PR |
| 3 | **Delivery INC-01** | Merge PR architecture + GO delivery Morris |
| 4 | **Delivery INC-02** | Merge INC-01 + GO Morris |
| 5 | Écrans P2 + prototype Figma | Optionnel — parallélisable |

---

**Documents liés :** `stack-decision.md`, `validation-and-delivery-readiness.md`, `technical-architecture-overview.md`
