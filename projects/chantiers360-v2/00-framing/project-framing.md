# Chantiers360 v2 — Project Framing

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/project-framing.md`  
**Version :** Bootstrap + cadrage (PR #96) + archi fonctionnelle (PR #97) + UX/UI (PR #98) + backlog MVP (PR #99) + Design Figma MVP (PR #101) + architecture technique légère (PR #102) + arbitrages Morris + Figma Fidelity Spike (PR #104)

## 1. Framing status

| Élément | Valeur |
|---------|--------|
| **Statut** | **INC-02 CLOSED WITH RESERVES** — Morris (2026-07-06) |
| **Nom projet** | `chantiers360-v2` — validé |
| **Cycle courant** | Post-clôture INC-02 — GO INC-03 non accordé ; INC-03 non lancé |
| **Bootstrap** | PR #95 mergée — `c3ca02d` |
| **Cadrage détaillé** | PR #96 mergée — `e90e824` |
| **Architecture fonctionnelle** | PR #97 mergée — `4a5b2fa` |
| **UX/UI** | PR #98 mergée — `1d9feb9` |
| **Origine** | Projet créé **from scratch** |
| **V0** | Aucun élément V0 utilisé |
| **Backlog MVP** | PR #99 mergée — `93d6810` |
| **Standard Design Figma** | PR #100 mergée — `7ee45bb` |
| **Design Figma P1** | PR #101 mergée — `7e37b58` |
| **Architecture technique** | PR #102 mergée — `57308aa` — arbitrages Morris validés |
| **Figma Fidelity Spike** | PR #104 mergée — `87de625` — D1/D2 validés Morris ; gate M8/M9 satisfait |
| **Delivery INC-01** | **Clôturé** — PR #108–#110 — CLOSED WITH RESERVES |
| **Capitalisation INC-01** | Mergée PR #111 — `ff32170` — `09-capitalization/inc-01-capitalization-report.md` |
| **Delivery INC-02** | **Clôturé** — PR #115–#116 — CLOSED WITH RESERVES — `inc-02-closure-report.md` |

## 2. Initial intent

Créer un **mini-produit de suivi de chantier** pour artisans ou petites entreprises du bâtiment, afin de centraliser les chantiers, les tâches, les réserves, les statuts, les **jalons simples** (planning simple) et les comptes rendus rapides.

## 3. Problem statement

Les petites structures du bâtiment peuvent avoir du mal à suivre clairement l'état de leurs chantiers, les tâches restantes, les réserves clients, les prochaines actions et les informations opérationnelles dispersées (carnets, messages, fichiers éparpillés).

## 4. Target users

| Utilisateur | Rôle |
|-------------|------|
| **Artisan indépendant** | Utilisateur principal — suivi de ses chantiers |
| **Petite entreprise du bâtiment** | Équipe légère — vue d'ensemble chantiers |
| **Conducteur de travaux léger** | Coordination tâches et réserves |
| **Responsable opérationnel** | Pilotage statuts et prochaines actions |
| **Client final** | Consultation future via espace dédié — **hors MVP initial** (futur espace consultation / validation) |

## 5. Initial scope

Périmètre initial (MVP validé Morris) :

- création / suivi d'un chantier ;
- statut du chantier ;
- tâches associées ;
- réserves ;
- **jalons simples / planning simple** (dates prévues, prochaine intervention, jalon à venir, retard, commentaire) ;
- compte rendu rapide ;
- prochaines actions.

**Planning simple inclus ; planning avancé exclu** (pas de ressources, dépendances, charges, calendrier complet, multi-équipe).

## 6. Initial MVP hypothesis

**MVP validé Morris :**

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

### Planning simple / jalons chantier

Inclus au MVP — planning **simple** uniquement :

- date de début / fin prévue ;
- prochaine intervention ;
- jalon à venir ;
- retard éventuel ;
- commentaire planning simple.

**Hors MVP :** planning avancé (ressources, dépendances, charges, calendrier complet, multi-équipe).

## 7. Explicit out of scope

### Hors MVP initial

- **planning avancé** ;
- **accès client** — futur espace consultation / validation client final ; exclu pour centrer sur artisan / PME ;
- gestion documentaire complète ;
- photos avant / après détaillées *(idée future — hors MVP initial)* ;
- application mobile native ;
- IA générative avancée ;
- reprise Chantiers360 V0 ;
- comparaison V0 avant fin de pilote ;
- code applicatif ;
- architecture technique détaillée.

### Extensions métier prioritaires (hors MVP — cadrage ultérieur)

Repositionnées comme **priorité future** après validation du socle chantier — **non rejetées définitivement** :

| Extension | Statut | Justification |
|-----------|--------|---------------|
| **Devis** | Extension métier prioritaire | Domaine gestion commerciale chantier — hors suivi opérationnel MVP |
| **Facturation** | Extension métier prioritaire | Futur module facturation — compétence domaine intéressante |
| **Intégrations comptables** | Extension métier prioritaire | Lié au cycle commercial — exclu pour éviter dette fonctionnelle |

Ces fonctionnalités pourraient couvrir un futur projet ou module ; exclues du MVP initial pour **éviter dérive de scope**.

## 8. Assumptions

- Projet **générique**, non rattaché à un client réel ;
- **Données fictives** uniquement dans les phases initiales ;
- Objectif principal = **tester SFIA v2.0** sur un produit métier réel ;
- Le MVP doit rester **simple et borné** ;
- L'exécution applicative viendra **plus tard** ;
- **Pas d'usage de V0** avant le cycle final de comparaison et capitalisation.

## 9. Risks

| Risque | Mitigation |
|--------|------------|
| Dérive de scope | MVP figé, gate Morris avant extension |
| Réintroduction implicite V0 | Règle from scratch — V0 fin pilote only |
| Confusion comparaison vs cadrage | V0 = capitalisation finale, pas input |
| Création trop rapide de code | Pas d'app/backend au bootstrap |
| Backlog complet prématuré | Cycle dédié après cadrage Morris |
| Surconception planning | Jalons simples only — planning avancé hors MVP |
| Extension commerciale prématurée | Devis/facturation/compta = extension future prioritaire |
| Automatisation prématurée | L3 max bootstrap — L5 global hors cible |

## 10. Guardrails

- **Git** = source de vérité
- **Pas de V0** — cadrage, docs, backlog, code, structure
- **Pas d'app/backend** au bootstrap
- **Pas de Notion/CMP**
- **Pas de L5 global**
- **Gate Morris** avant extension de scope
- **Cycles courts** — diff borné
- **Documents bornés** — pas de surproduction
- **Validation** avant PR / merge

## 11. Validation criteria for this bootstrap

Le bootstrap est **valide** si :

| Critère | Attendu |
|---------|---------|
| Structure minimale | `README.md` + `00-framing/project-framing.md` |
| Autres fichiers projet | Aucun |
| V0 utilisée | Non |
| Code créé | Non |
| Backlog détaillé | Non |
| MVP initial formulé | Oui |
| Hors périmètre explicites | Oui |
| Prochain cycle identifié | Oui |

## 12. Decisions Morris

**Décisions prises :**

| # | Décision | Statut |
|---|----------|--------|
| 1 | Nom `chantiers360-v2` | ✅ Validé |
| 2 | Bootstrap minimal | ✅ Validé (réserve mineure commit local) |
| 3 | MVP ajusté avec jalons simples / planning simple | ✅ Validé |
| 4 | Devis / facturation / intégrations comptables | Hors MVP — **extension métier prioritaire future** |
| 5 | Accès client | Hors MVP — futur espace consultation / validation |
| 6 | Planning avancé | Hors MVP |
| 7 | Prochain cycle après merge | **Cadrage détaillé** (pas architecture fonctionnelle) |
| 8 | Nettoyage branches | Reporté |
| 9 | PR readiness | En attente — après mise à jour documentaire MVP |

**Design Figma MVP (rattrapage — standard SFIA v2.0 PR #100) :**

- Backlog déjà mergé PR #99 — **non remis en cause**
- Design Figma requis **avant** architecture technique et delivery code
- Dossier `04-design/` — brief, spec, checklist, décisions, alignement backlog
- **Gate Morris design P1** — ✅ validé PR #101

**Architecture technique légère (post PR #101, mergée PR #102) :**

- Dossier `05-technical-architecture/` — cycle documentaire terminé
- **Stack validée Morris** — Option B : Next.js App Router + PostgreSQL + **Drizzle** + **Tailwind**
- **Auth différée** après INC-01 (M3) — hébergement DB local/dev d'abord (M4)
- **GO architecture technique** — ✅ validé (M6)
- **Figma Fidelity Spike** — ✅ mergé PR #104 — validé Morris (D1/D2) — frame Dashboard `38:502` (M9) — gate M8/M9 satisfait
- **App spike** — `projects/chantiers360-v2/app/` — dashboard mocké uniquement ; pas de backend / DB / auth
- Delivery INC-01 — **clôturé** — `inc-01-closure-report.md`
- Delivery INC-02 — **clôturé** — `inc-02-closure-report.md`
- **App** — PostgreSQL + Drizzle ; auth différée ; tâches/réserves INC-02 livrées

**Décisions à venir :**

1. ~~**Valider** architecture technique légère~~ — ✅ arbitrages Morris documentés
2. ~~**Réaliser** Figma Fidelity Spike~~ — ✅ mergé PR #104 — validé Morris (D1/D2)
3. ~~**Capitaliser** Figma Fidelity Gate~~ — ✅ mergé PR #106
4. ~~**PR readiness INC-01**~~ — ✅ PR #108 mergée
5. ~~**Clôture INC-01**~~ — ✅ CLOSED WITH RESERVES — PR #110
6. ~~**Capitalisation post-INC-01**~~ — ✅ mergée PR #111 — `ff32170`
7. ~~**GO INC-02**~~ — ✅ livré et clôturé — PR #115–#116 — CLOSED WITH RESERVES
8. **GO INC-03** — décision Morris explicite requise — non accordé
9. **Planifier** comparaison V0 — fin de pilote uniquement

## 13. Detailed framing documents

| Document | Contenu |
|----------|---------|
| `detailed-framing.md` | Objectif, problème, utilisateurs, hypothèses, risques, critères succès |
| `use-cases.md` | 9 cas d'usage prioritaires — sans user stories ni backlog |
| `business-rules.md` | Statuts, jalons, retard, compte rendu, données minimales |
| `scope-boundaries.md` | Limites MVP / hors MVP, extensions métier futures |

## 14. Functional architecture documents

| Document | Contenu |
|----------|---------|
| `functional-architecture.md` | Vue globale — modules, parcours, relations |
| `functional-domains.md` | 8 domaines fonctionnels MVP |
| `navigation-model.md` | Navigation fonctionnelle sans design UI |
| `state-model.md` | États métier — statuts, retard, prochaines actions dérivées |
| `functional-decisions.md` | Décisions Morris intégrées (P1/P2, statuts, CR, retard, multi-user) |

## 15. UX/UI documents

| Document | Contenu |
|----------|---------|
| `ux-ui-overview.md` | Principes UX, contraintes, critères validation |
| `screen-map.md` | 8 écrans fonctionnels P1/P2 |
| `wireframes-functional.md` | Wireframes textuels Markdown |
| `user-flows.md` | 7 flux UX sans backlog |
| `ux-decisions.md` | Décisions navigation, exclusions, limites cycle |

## 16. Backlog MVP documents

| Document | Contenu |
|----------|---------|
| `mvp-backlog-overview.md` | Vue d'ensemble cycle backlog |
| `epics.md` | 7 epics EPIC-01 à EPIC-07 |
| `user-stories.md` | 13 user stories US-01 à US-13 |
| `acceptance-criteria.md` | Critères d'acceptation par story |
| `delivery-increments.md` | 5 incréments INC-01 à INC-05 |
| `backlog-traceability.md` | Matrice traçabilité |
| `backlog-decisions.md` | Décisions backlog — gate delivery |

---

## 17. Design Figma MVP documents

| Document | Contenu |
|----------|---------|
| `04-design/figma-brief.md` | Brief design, lien Figma, périmètre écrans |
| `04-design/screen-design-spec.md` | Spec écran par écran |
| `04-design/figma-review-checklist.md` | Checklist revue Morris |
| `04-design/design-decisions.md` | Décisions design |
| `04-design/design-to-backlog-alignment.md` | Alignement backlog — écarts éventuels |

## 18. Technical architecture documents

| Document | Contenu |
|----------|---------|
| `05-technical-architecture/technical-architecture-overview.md` | Vue d'ensemble cycle architecture légère |
| `05-technical-architecture/stack-options.md` | Comparaison options stack |
| `05-technical-architecture/stack-decision.md` | Décision stack — validée Morris (Option B + Drizzle + Tailwind) |
| `05-technical-architecture/application-structure.md` | Structure applicative cible |
| `05-technical-architecture/data-model-light.md` | Modèle de données documentaire |
| `05-technical-architecture/frontend-architecture.md` | Architecture frontend P1 |
| `05-technical-architecture/validation-and-delivery-readiness.md` | Readiness INC-01 |
| `05-technical-architecture/technical-decisions.md` | Décisions techniques tracées |

---

**Automation level autorisé :** L2–L3 — gate Morris avant spike Figma Fidelity et delivery INC-01.

**Références SFIA :**

- `sfia-v2-project-bootstrap-standard.md`
- `sfia-v2-design-figma-cycle-standard.md`
- `sfia-v2-pilot-selection-scoring.md`
