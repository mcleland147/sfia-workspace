# Chantiers360 v2

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/`  
**Statut :** **MVP CAPITALIZED WITH RESERVES** — INC-01 à INC-05 clôturés — décisions post-MVP séparées  
**Bootstrap :** mergé via PR #95 (`c3ca02d`)  
**Cadrage détaillé :** mergé via PR #96 (`e90e824`)  
**Architecture fonctionnelle :** mergée via PR #97 (`4a5b2fa`)  
**UX/UI :** mergée via PR #98 (`1d9feb9`)  
**Backlog MVP :** mergé via PR #99 (`93d6810`)  
**Méthode Design Figma :** standard mergé via PR #100 (`7ee45bb`)  
**Design Figma P1 :** mergé via PR #101 (`7e37b58`)  
**Architecture technique légère :** mergée via PR #102 (`57308aa`) — arbitrages Morris documentés  
**Cycle courant :** Comparaison V0 vs SFIA v2 bouclée (PR #136) — décision suivante séparée — SFIA v2.3.1 baseline opérationnelle — v2.4 / v3.0 non lancés  
**QA INC-05 :** `08-qa-test/inc-05/` — clôture `inc-05-closure-report.md`  
**QA INC-03 :** `08-qa-test/inc-03/` — clôture `inc-03-closure-report.md`  
**QA INC-02 :** `08-qa-test/inc-02/` — clôture `inc-02-closure-report.md`  
**Capitalisation INC-01 :** `09-capitalization/inc-01-capitalization-report.md`  
**Capitalisation MVP :** `09-capitalization/mvp-capitalization-report.md`  
**Comparaison V0 vs SFIA v2 :** ✅ mergée PR #136 — `09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` — verdict : V2 NEEDS LIGHT CONSOLIDATION  
**Méthode :** SFIA v1.1 (baseline) + SFIA v2.0 (delivery progressif)

## 1. Purpose

Chantiers360 v2 est le **premier projet pilote SFIA v2.0**, destiné à tester la méthode SFIA sur un **produit métier réel**.

- **Outil de suivi de chantier** pour artisans et petites entreprises du bâtiment
- Projet conduit **from scratch** — aucune reprise de Chantiers360 V0
- **Git** = source de vérité
- **SFIA v1.1** = baseline méthode stable
- **SFIA v2.0** = cadre de delivery progressif et automatisation contrôlée

## 2. Project status

| Élément | Valeur |
|---------|--------|
| **Statut** | **MVP CAPITALIZED WITH RESERVES** — Morris (2026-07-07) |
| **Cycle** | Post-merge versioning PR #133 — aligné PR #134 — SFIA v2.3 / v2.3.1 actées — décisions post-MVP séparées |
| **Bootstrap** | Mergé PR #95 — `c3ca02d` |
| **Cadrage détaillé** | Mergé PR #96 — `e90e824` |
| **Architecture fonctionnelle** | Mergée PR #97 — `4a5b2fa` |
| **UX/UI** | Mergée PR #98 — `1d9feb9` |
| **Nom projet** | `chantiers360-v2` — **validé Morris** |
| **Décision** | Candidate B validé — pilote v2.0 (PR #94) ; bootstrap validé avec réserve mineure sur commit local |
| **Architecture technique** | Mergée PR #102 — arbitrages Morris validés |
| **Figma Fidelity Spike** | Mergé PR #104 — `87de625` — D1/D2 validés Morris |
| **Delivery applicatif** | INC-01 clôturé PR #108–#110 ; INC-02 clôturé PR #115–#117 ; INC-03 clôturé PR #119–#121 ; INC-04 clôturé PR #122–#124 ; INC-05 clôturé PR #125–#127 ; capitalisation INC-01 PR #111 ; capitalisation MVP `mvp-capitalization-report.md` |
| **app** | Next.js + Drizzle + PostgreSQL — socle chantier INC-01 + tâches/réserves INC-02 + jalons INC-03 + comptes rendus INC-04 + prochaines actions dérivées INC-05 |
| **Backlog produit détaillé** | Mergé PR #99 |
| **Design Figma MVP** | Mergé PR #101 — `04-design/` |

## 3. SFIA v2.0 pilot rationale

Ce projet est retenu comme pilote v2.0 car il permet de :

- tester SFIA sur un **métier externe réel** (bâtiment / chantier) ;
- cadrer un **MVP clair et borné** ;
- exercer **UX / workflow / delivery** de manière concrète ;
- traverser le **cycle de vie projet complet** (intention → capitalisation) ;
- valider la chaîne **Git / Markdown / Cursor / PR / post-merge / capitalisation** ;
- préparer une **comparaison V0 vs SFIA v2** — uniquement **en fin de pilote**.

## 4. From scratch rule

> **Chantiers360 v2 est conduit comme un projet neuf.** Les travaux Chantiers360 V0 ne doivent **pas** être utilisés comme base de cadrage, de documentation, de conception, de backlog, de code ou de structure projet. La V0 pourra **uniquement** être consultée **en fin de pilote**, dans un cycle dédié de comparaison et de capitalisation méthodologique.

## 5. Initial product idea

Idée produit initiale (non détaillée — cadrage ultérieur) :

- liste des chantiers ;
- statut du chantier ;
- client ;
- adresse ;
- dates prévues et **jalons simples** (planning simple) ;
- tâches à faire ;
- réserves ;
- compte rendu rapide ;
- prochaines actions.

Pas d'écrans, pas d'architecture, pas de backlog dans ce bootstrap.

## 6. Initial MVP direction

**MVP initial (validé Morris — ajusté) :**

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

### Planning simple / jalons chantier (inclus au MVP)

Le MVP intègre un **planning simple** — pas un planning avancé. Éléments possibles :

- date de début prévue ;
- date de fin prévue ;
- prochaine intervention ;
- jalon à venir ;
- retard éventuel ;
- commentaire planning simple.

**Hors MVP :** planning avancé, gestion des ressources, dépendances, charges, calendrier complet, planification multi-équipe.

### Extensions métier prioritaires (hors MVP initial)

Les éléments suivants sont **hors MVP initial** mais repositionnés comme **extensions métier prioritaires** à cadrer après validation du socle chantier :

- **devis** ;
- **facturation** ;
- **intégrations comptables**.

Ils relèvent d'un domaine métier plus large que le suivi opérationnel chantier — futur module possible autour de la **gestion commerciale chantier**. Exclus du MVP initial pour éviter dérive de scope et dette fonctionnelle prématurée ; intéressants pour monter en compétence sur ce domaine ultérieurement.

### Accès client (hors MVP initial)

- futur **espace de consultation ou de validation** pour le client final du chantier ;
- potentiellement utile plus tard : avancement, réserves, comptes rendus ;
- **exclu du MVP** pour conserver un produit centré sur l'usage artisan / petite entreprise.

## 7. Out of scope for bootstrap and MVP initial

- `app/` / `backend/` / `frontend` / API / base de données
- design UI détaillé
- backlog complet
- architecture technique
- **devis, facturation, intégrations comptables** *(extension métier prioritaire future — hors MVP)*
- **accès client** *(futur espace consultation — hors MVP)*
- **planning avancé** *(jalons simples OK — planning avancé hors MVP)*
- application mobile native
- IA générative avancée
- reprise Chantiers360 V0
- comparaison V0 avant fin de pilote
- Notion / CMP
- automatisation **L5 global**

## 8. Framing documents

| Document | Rôle |
|----------|------|
| `00-framing/project-framing.md` | Framing initial bootstrap |
| `00-framing/detailed-framing.md` | Cadrage détaillé — objectif, risques, critères succès |
| `00-framing/use-cases.md` | Cas d'usage prioritaires (sans backlog) |
| `00-framing/business-rules.md` | Règles métier simples MVP |
| `00-framing/scope-boundaries.md` | Limites MVP / hors MVP |

## 9. Functional architecture documents

| Document | Rôle |
|----------|------|
| `01-functional-architecture/functional-architecture.md` | Vue globale architecture fonctionnelle MVP |
| `01-functional-architecture/functional-domains.md` | 8 domaines fonctionnels |
| `01-functional-architecture/navigation-model.md` | Navigation fonctionnelle (sans UI) |
| `01-functional-architecture/state-model.md` | États métier chantier, tâche, réserve, retard |
| `01-functional-architecture/functional-decisions.md` | Décisions Morris intégrées |

## 10. UX/UI documents

| Document | Rôle |
|----------|------|
| `02-ux-ui/ux-ui-overview.md` | Objectif cycle, principes UX, critères validation |
| `02-ux-ui/screen-map.md` | Carte des 8 écrans fonctionnels |
| `02-ux-ui/wireframes-functional.md` | Wireframes textuels (sans design graphique) |
| `02-ux-ui/user-flows.md` | 7 flux UX prioritaires (sans backlog) |
| `02-ux-ui/ux-decisions.md` | Décisions UX/UI tracées |

## 11. Design Figma MVP documents

| Document | Rôle |
|----------|------|
| `04-design/figma-brief.md` | Brief design — périmètre écrans, fidélité, lien Figma |
| `04-design/screen-design-spec.md` | Spécification écran par écran pour Figma |
| `04-design/figma-review-checklist.md` | Checklist revue Morris |
| `04-design/design-decisions.md` | Décisions design tracées |
| `04-design/design-to-backlog-alignment.md` | Alignement backlog — écarts éventuels |

## 12. Technical architecture documents

| Document | Rôle |
|----------|------|
| `05-technical-architecture/technical-architecture-overview.md` | Objectif cycle, périmètre, lien INC-01 |
| `05-technical-architecture/stack-options.md` | Comparaison options stack MVP |
| `05-technical-architecture/stack-decision.md` | Décision stack — validée Morris |
| `05-technical-architecture/application-structure.md` | Structure applicative cible |
| `05-technical-architecture/data-model-light.md` | Modèle de données léger |
| `05-technical-architecture/frontend-architecture.md` | Architecture frontend P1 |
| `05-technical-architecture/validation-and-delivery-readiness.md` | Conditions avant INC-01 |
| `05-technical-architecture/technical-decisions.md` | Registre décisions techniques |

## 13. Backlog MVP documents

| Document | Rôle |
|----------|------|
| `03-backlog/mvp-backlog-overview.md` | Objectif cycle, périmètre, critères validation |
| `03-backlog/epics.md` | 7 epics fonctionnels EPIC-01 à EPIC-07 |
| `03-backlog/user-stories.md` | 13 user stories US-01 à US-13 |
| `03-backlog/acceptance-criteria.md` | Critères d'acceptation fonctionnels |
| `03-backlog/delivery-increments.md` | 5 incréments INC-01 à INC-05 |
| `03-backlog/backlog-traceability.md` | Matrice traçabilité cadrage → backlog |
| `03-backlog/backlog-decisions.md` | Décisions backlog tracées |

## 14. Next SFIA cycles

**Cycle courant :** Comparaison V0 vs SFIA v2 bouclée (PR #136) — décision suivante séparée — SFIA v2.3.1 baseline opérationnelle — v2.4 / v3.0 non lancés.

1. Cadrage détaillé — ✅ mergé PR #96
2. Architecture fonctionnelle — ✅ mergée PR #97
3. UX/UI Markdown — ✅ mergée PR #98
4. Backlog MVP — ✅ mergé PR #99
5. Design Figma MVP — ✅ mergé PR #101
6. Architecture technique légère — ✅ mergée PR #102 — arbitrages Morris validés
7. **Figma Fidelity Spike** — ✅ mergé PR #104 — gate M8/M9 satisfait
8. **Capitalisation Figma Fidelity Gate** — ✅ mergé PR #106
9. **Delivery INC-01** — ✅ clôturé — PR #108–#110 — CLOSED WITH RESERVES
10. **Capitalisation INC-01** — ✅ mergée PR #111 — `ff32170` — standard Incremental Delivery Closure
11. **Delivery INC-02** — ✅ clôturé — PR #115–#117 — CLOSED WITH RESERVES
12. **Delivery INC-03** — ✅ clôturé — PR #119–#121 — CLOSED WITH RESERVES
13. **Delivery INC-04** — ✅ clôturé — PR #122–#124 — CLOSED WITH RESERVES
14. **Delivery INC-05** — ✅ clôturé — PR #125–#127 — CLOSED WITH RESERVES — MVP bouclé avec réserves
15. **Capitalisation MVP** — ✅ mergée PR #128 — `mvp-capitalization-report.md` — MVP CAPITALIZED WITH RESERVES
16. **Design coverage SFIA v2.0** — ✅ mergé PR #129 — aligné PR #130 — R-UX-01 ouverte, acceptée, non levée
17. **Technical Architecture & Decision Documentation** — ✅ mergé PR #131 — aligné PR #132 — ADR/DAA/DAT projet non produits
18. ~~**Comparaison V0 vs SFIA v2**~~ — ✅ mergée PR #136 — `v0-vs-sfia-v2-methodological-comparison.md` — verdict : V2 NEEDS LIGHT CONSOLIDATION
19. **SFIA v2.x Method Versioning** — ✅ mergé PR #133 — `sfia-v2-method-versioning-standard.md` — v2.3 actée
20. **Alignement v2.3.1** — ✅ mergé PR #134 — post-merge Method Versioning
21. **Décision méthode suivante** — GO SFIA v2.4 consolidation ou maintien baseline v2.3.1 — **non actée**

## 15. Decision authority

| Rôle | Responsabilité |
|------|----------------|
| **Morris** | Arbitrages structurants, GO scope, PR, merge |
| **Cursor** | Exécution cycles bornés (L3) |
| **ChatGPT** | Cadrage, challenge, prompts, analyse rapports |
| **Git** | Source de vérité — Markdown versionné, PR |

## SFIA references

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
