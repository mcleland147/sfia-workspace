# Interv360 — INC-01 readiness checklist

**Type** : Checklist de readiness delivery  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery detailing  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-detailing`  
**Documents associés** : [`delivery-detailing-plan.md`](delivery-detailing-plan.md), [`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md), [`inc-01-user-stories.md`](inc-01-user-stories.md), [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md), [`realization-criteria.md`](realization-criteria.md)

---

## 1. Objectif

Ce document vérifie que **INC-01 — Flux SAV minimal démontrable** est suffisamment cadré pour être préparé en **réalisation future**.

Il consolide :

- le backlog détaillé ;
- les user stories ;
- les critères d'acceptation métier ;
- les dépendances ;
- les garde-fous ;
- les hors périmètre.

Ce document **ne lance pas** le code et **ne crée pas** de tests détaillés.

---

## 2. Synthèse INC-01

| Élément | Valeur |
|---------|--------|
| **Incrément** | INC-01 — Flux SAV minimal démontrable |
| **Priorité** | P0-A |
| **Nombre de MB** | 16 |
| **Nombre de user stories** | 16 |
| **Nombre de critères d'acceptation métier** | 68 |
| **Lots couverts** | LOT-01 à LOT-05 |
| **Statuts couverts** | STAT-01 à STAT-06 |
| **Résultat cible** | STAT-06 — Clôturée localement |
| **Écrans concernés** | Liste demandes, Fiche demande SAV, Planning, Fiche intervention mobile, Compte rendu mobile |
| **CRM réel** | Exclu |
| **Dashboard** | Exclu |
| **Tests détaillés** | Non créés dans ce cycle |
| **Code** | Non créé dans ce cycle |

---

## 3. Checklist de couverture documentaire

| Élément | Statut | Référence |
|---------|:------:|-----------|
| Plan du cycle | ✅ | [`delivery-detailing-plan.md`](delivery-detailing-plan.md) |
| Backlog détaillé INC-01 | ✅ | [`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md) |
| User stories INC-01 | ✅ | [`inc-01-user-stories.md`](inc-01-user-stories.md) |
| Critères d'acceptation INC-01 | ✅ | [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md) |
| DoR / DoD macro | ✅ | [`realization-criteria.md`](realization-criteria.md) |
| Slicing source | ✅ | [`delivery-slicing-strategy.md`](delivery-slicing-strategy.md) |
| Priorisation source | ✅ | [`prioritization.md`](prioritization.md) |
| Macro backlog source | ✅ | [`macro-backlog.md`](macro-backlog.md) |

---

## 4. Checklist de couverture fonctionnelle

| Étape | Couverture | Statut |
|-------|------------|:------:|
| 1. Création demande | US-INC01-001 / MB-001 | ✅ |
| 2. Liste demandes | US-INC01-002 / MB-003 | ✅ |
| 3. Accès fiche | US-INC01-003 / MB-005 | ✅ |
| 4. Détail demande | US-INC01-004 / MB-007 | ✅ |
| 5. Qualification minimale | US-INC01-005 / MB-009 | ✅ |
| 6. Passage qualifiée | US-INC01-006 / MB-010 | ✅ |
| 7. Création intervention | US-INC01-007 / MB-013 | ✅ |
| 8. Sélection créneau | US-INC01-008 / MB-014 | ✅ |
| 9. Affectation technicien | US-INC01-009 / MB-015 | ✅ |
| 10. Intervention planifiée | US-INC01-010 / MB-017 | ✅ |
| 11. Consultation technicien | US-INC01-011 / MB-019 | ✅ |
| 12. Saisie CR | US-INC01-012 / MB-021 | ✅ |
| 13. Résultat intervention | US-INC01-013 / MB-022 | ✅ |
| 14. Préparation clôture | US-INC01-014 / MB-024 | ✅ |
| 15. Clôture locale | US-INC01-015 / MB-026 | ✅ |
| 16. Visualisation STAT-06 | US-INC01-016 / MB-027 | ✅ |

---

## 5. Checklist des statuts

| Statut | Usage dans INC-01 | Couvert |
|--------|-------------------|:------:|
| **STAT-01** — À qualifier | Demande créée / à qualifier | ✅ |
| **STAT-02** — Qualifiée | Demande qualifiée | ✅ |
| **STAT-03** — Planifiée | Intervention planifiée | ✅ |
| **STAT-04** — En cours | Intervention en cours / réalisation engagée | ✅ |
| **STAT-05** — En attente client | Hors chemin nominal INC-01 — statut métier existant, non nécessaire à la démo minimale | ⚪ |
| **STAT-06** — Clôturée localement | Clôture locale | ✅ |
| **STAT-07** — En retard | Hors INC-01 — non activé | — |
| **STAT-08** — Anomalie d'intégration | Hors INC-01 — non activé | — |

**Précision :** INC-01 utilise le **chemin nominal** jusqu'à STAT-06 sans activer STAT-07 / STAT-08.

---

## 6. Checklist de dépendances

| Élément | Dépend de | Statut |
|---------|-----------|:------:|
| US-INC01-001 | — | ✅ |
| US-INC01-002 | US-INC01-001 | ✅ |
| US-INC01-003 | US-INC01-002 | ✅ |
| US-INC01-004 | US-INC01-003 | ✅ |
| US-INC01-005 | US-INC01-004 | ✅ |
| US-INC01-006 | US-INC01-005 | ✅ |
| US-INC01-007 | US-INC01-006 | ✅ |
| US-INC01-008 | US-INC01-007 | ✅ |
| US-INC01-009 | US-INC01-007, US-INC01-008 | ✅ |
| US-INC01-010 | US-INC01-008, US-INC01-009 | ✅ |
| US-INC01-011 | US-INC01-010 | ✅ |
| US-INC01-012 | US-INC01-011 | ✅ |
| US-INC01-013 | US-INC01-012 | ✅ |
| US-INC01-014 | US-INC01-012, US-INC01-013 | ✅ |
| US-INC01-015 | US-INC01-014 | ✅ |
| US-INC01-016 | US-INC01-015 | ✅ |

---

## 7. Checklist par écran

| Écran | Couverture INC-01 | Statut |
|-------|-------------------|:------:|
| **Liste demandes** | Accès, visibilité STAT-01/02/03/06 | ✅ |
| **Fiche demande SAV** | Source détaillée, qualification, intervention, clôture | ✅ |
| **Planning** | Création intervention, créneau, affectation, planification | ✅ |
| **Fiche intervention mobile** | Consultation intervention | ✅ |
| **Compte rendu mobile** | CR, résultat, préparation clôture | ✅ |

**Note design :** la Liste demandes dispose d'une base **Figma Design V2** validée (`figma-first-screen-review.md`). Les autres écrans peuvent rester sur **specs Git** / **Figma V1** à ce stade.

---

## 8. Checklist des garde-fous

| Garde-fou | Statut |
|-----------|:------:|
| Aucun nouveau statut | ✅ |
| STAT-01 à STAT-06 uniquement actifs | ✅ |
| STAT-07 / STAT-08 hors INC-01 | ✅ |
| CRM réel exclu | ✅ |
| Synchronisation externe non bloquante | ✅ |
| Dashboard exclu | ✅ |
| BI exclue | ✅ |
| API / SQL / code exclus | ✅ |
| Figma non bloquant | ✅ |
| Tests détaillés non créés | ✅ |
| User stories et critères d'acceptation au niveau métier uniquement | ✅ |

---

## 9. Readiness assessment

| Axe | Évaluation | Commentaire |
|-----|------------|-------------|
| **Périmètre** | Ready | INC-01 strictement limité au P0-A |
| **Backlog** | Ready | 16 MB détaillés |
| **User stories** | Ready | 16 stories métier |
| **Acceptation métier** | Ready | 68 critères |
| **Dépendances** | Ready | Chaîne explicite |
| **Statuts** | Ready | STAT-01 à STAT-06 |
| **Design** | Ready with guardrail | Figma non bloquant |
| **Technique** | Not started by design | Hors cycle detailing |
| **Tests** | Not started by design | Hors cycle detailing |

---

## 10. Décision de readiness INC-01

**INC-01 est prêt pour une future préparation réalisation.**

Cela signifie que le **périmètre métier**, les **user stories** et les **critères d'acceptation métier** sont suffisamment cadrés pour ouvrir un futur travail de **préparation réalisation**.

Cela **ne signifie pas** que le développement peut démarrer sans **cadrage technique complémentaire**.

### Statut recommandé

**`Ready for realization preparation`**

---

## 11. Points à traiter dans un futur cycle

| Sujet | Futur cycle recommandé |
|-------|------------------------|
| Découpage technique | Futur cycle architecture technique |
| Choix front / back / data | Futur cycle conception technique |
| API | Futur cycle conception technique |
| Modèle de données | Futur cycle conception technique |
| Tests détaillés | Futur cycle QA |
| Tests automatisés | Futur cycle QA / dev |
| Maquettage complémentaire | Au fil de l'eau si nécessaire |
| Estimation / charge | Futur cycle delivery planning |
| Plan de sprint | Futur cycle delivery planning |

---

## 12. Critères de sortie

- [x] couverture documentaire vérifiée ;
- [x] couverture fonctionnelle vérifiée ;
- [x] statuts vérifiés ;
- [x] dépendances vérifiées ;
- [x] écrans vérifiés ;
- [x] garde-fous vérifiés ;
- [x] décision de readiness formulée ;
- [x] statut recommandé défini ;
- [x] points futurs identifiés.

---

## 13. Prochaine action

Le prochain livrable est :

**[`delivery-detailing-summary.md`](delivery-detailing-summary.md)**

**Objectif :** synthétiser le cycle delivery detailing INC-01 et décider si la branche peut être clôturée par PR.

---

*Checklist de readiness INC-01 — Flux SAV minimal démontrable — Draft.*
