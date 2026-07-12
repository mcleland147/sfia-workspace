# Interv360 — Realization criteria

**Type** : Critères de préparation à la réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 04-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`  
**Documents associés** : [`delivery-preparation-plan.md`](delivery-preparation-plan.md), [`mvp-scope.md`](mvp-scope.md), [`functional-lots.md`](functional-lots.md), [`macro-backlog.md`](macro-backlog.md), [`prioritization.md`](prioritization.md), [`delivery-slicing-strategy.md`](delivery-slicing-strategy.md)

---

## 1. Objectif

Ce document définit les critères permettant de considérer les **incréments**, **lots** et **éléments macro** Interv360 comme suffisamment **prêts pour entrer en réalisation**.

Il **ne s'agit pas** de définir des tests détaillés ni des user stories.

L'objectif est de s'assurer que chaque élément à réaliser dispose d'un niveau de cadrage suffisant :

- périmètre clair ;
- dépendances connues ;
- règles fonctionnelles stabilisées ;
- garde-fous respectés ;
- résultat attendu explicite ;
- hors périmètre identifié.

---

## 2. Niveaux concernés

| Niveau | Description | Exemple |
|--------|-------------|---------|
| **Incrément delivery** | Découpage progressif de réalisation | INC-01 à INC-06 |
| **Lot fonctionnel** | Regroupement cohérent de capacités | LOT-01 à LOT-09 |
| **Élément macro** | Grand item de backlog | MB-001 à MB-051 |

**Précision :** les critères **ne descendent pas** au niveau user story détaillée.

---

## 3. Critères génériques de préparation

| Critère | Description | Obligatoire |
|---------|-------------|:-----------:|
| Objectif fonctionnel explicite | Capacité ou flux clairement formulé | ✅ |
| Rattachement à un incrément | INC-01 à INC-06 identifié | ✅ |
| Rattachement à un lot | LOT-01 à LOT-09 identifié | ✅ |
| Rattachement à un ou plusieurs MB | MB-001 à MB-051 référencé | ✅ |
| Dépendances identifiées | Lots, incréments ou MB prérequis connus | ✅ |
| Résultat attendu décrit | Outcome observable et démontrable | ✅ |
| Règles de statut connues | STAT-01 à STAT-08 — usage correct | ✅ |
| Garde-fous fonctionnels repris | Décisions ADR et delivery respectées | ✅ |
| Hors périmètre identifié | Post-MVP exclu explicitement | ✅ |
| Niveau de design suffisant ou non bloquant | Figma pilote validé ; autres écrans en spec | ✅ |
| Absence d'élément post-MVP réintroduit | CRM réel, BI, etc. exclus | ✅ |
| Absence de dépendance au CRM réel | CRM simulé uniquement | ✅ |
| Absence de dépendance à maquette Figma parfaite | Specs Git et garde-fous suffisants | ✅ |

---

## 4. Critères par incrément

| Incrément | Critère de préparation | Résultat attendu |
|-----------|------------------------|------------------|
| **INC-01** — Flux SAV minimal démontrable | P0-A identifié ; MB-001, 003, 005, 007, 009, 010, 013, 014, 015, 017, 019, 021, 022, 024, 026, 027 couverts ; dépendances internes connues ; STAT-01 à STAT-06 utilisés correctement ; clôture locale STAT-06 possible ; aucun CRM réel requis ; aucun dashboard requis | **Flux SAV minimal prêt à être réalisé** |
| **INC-02** — Flux SAV exploitable | P0-B / P0-C identifiés ; enrichissements du flux minimal clarifiés ; non-blocage sync externe maintenu ; recherche, filtres, historique léger, planning simple et signature optionnelle cadrés ; aucun audit avancé ni workflow complexe ajouté | **Flux exploitable prêt à être réalisé** |
| **INC-03** — Intégration CRM simulée | CRM simulé confirmé ; MB-030 à MB-034 couverts ; retour post-clôture non bloquant ; état de synchronisation visible ; échec simulé représentatif ; Interv360 reste source de vérité locale | **Intégration simulée prête à être réalisée** |
| **INC-04** — Anomalies et reprise manuelle | MB-035 à MB-040 couverts ; STAT-08 maintenu comme indicateur ; anomalie distincte du statut métier ; message métier prévu ; reprise manuelle simple cadrée ; absence de réouverture intervention confirmée | **Gestion des anomalies prête à être réalisée** |
| **INC-05** — Pilotage SAV opérationnel | MB-041 à MB-045 couverts ; dashboard placé après flux opérationnel ; STAT-07 utilisé comme indicateur ; volumes essentiels limités au MVP ; drill-down vers liste ou fiche cadré ; dashboard non source de vérité | **Pilotage SAV prêt à être réalisé** |
| **INC-06** — Vue dirigeant MVP | MB-046 à MB-051 couverts ; vue dirigeant séparée du dashboard SAV ; indicateurs essentiels limités ; retards et anomalies agrégés ; BI complet exclu ; reporting multi-entités exclu | **Vue dirigeant MVP prête à être réalisée** |

### Détail INC-01 — critères de vérification

| # | Vérification |
|---|--------------|
| 1 | Chaîne création → qualification → planification → intervention → CR → clôture documentée |
| 2 | 16 MB P0-A listés dans `prioritization.md` et `delivery-slicing-strategy.md` |
| 3 | Écrans minimaux : liste, fiche, planning, mobile intervention, CR |
| 4 | STAT-06 atteignable sans sync CRM ni dashboard |

---

## 5. Critères par famille fonctionnelle

| Famille | Critères de préparation |
|---------|-------------------------|
| **Demandes SAV** | Demande créable ou reçue simulée ; statut initial STAT-01 ; canal visible ; fiche accessible ; liste = point d'accès, non source détaillée |
| **Qualification** | Checklist minimale identifiée (RG-C05) ; transition STAT-01 → STAT-02 ; fiche demande = source détaillée ; pas de workflow complexe |
| **Planification** | Intervention créée depuis demande qualifiée ; créneau et technicien identifiés ; passage STAT-03 ; planning simple (vue jour) suffisant |
| **Intervention / compte rendu** | Intervention consultable côté technicien ; CR simple cadré ; résultat intervention identifié ; signature optionnelle ou motif ; préparation clôture |
| **Clôture locale** | Passage STAT-06 ; clôture locale autonome ; non-blocage CRM ; retour simulé préparé (MB-028) |
| **Intégration simulée** | CRM réel exclu ; synchronisation simulée ; état de sync visible ; échec représentatif |
| **Anomalies** | STAT-08 = indicateur ; message métier ; reprise manuelle simple ; pas de réouverture intervention |
| **Pilotage** | STAT-07 = indicateur ; dashboard simple ; dashboard ≠ source de vérité ; accès liste / fiche |
| **Vue dirigeant** | Consolidation limitée ; séparation avec dashboard SAV ; pas de BI complet |

---

## 6. Critères de non-préparation

| Signal | Pourquoi bloquant |
|--------|-------------------|
| Dépendance à un CRM réel | Hors périmètre MVP — ADR-002 |
| Statut non prévu ajouté | Violation ADR-001 — STAT-01 à STAT-08 uniquement |
| STAT-07 ou STAT-08 utilisé comme statut métier | Confusion indicateur / cycle métier |
| Clôture locale conditionnée au retour CRM | Violation ADR-004 |
| Dashboard traité comme source de vérité | Violation garde-fous UX et architecture |
| Liste traitée comme source détaillée | Fiche demande doit faire foi |
| Incrément découpé uniquement par écran sans valeur démontrable | Découpage par écran isolé insuffisant |
| Élément post-MVP réintroduit | Surcharge MVP — hors `mvp-scope.md` |
| Besoin d'une maquette Figma parfaite pour avancer | Décision design — Figma non bloquant |
| User stories détaillées créées trop tôt | Hors cycle delivery preparation |
| Choix technique imposé sans cadrage | Hors périmètre phase 04-delivery |

---

## 7. Definition of Ready macro

Checklist applicable à un **incrément**, **lot** ou **élément macro** avant entrée en réalisation :

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Objectif fonctionnel clair | ☐ |
| 2 | Rattachement INC / LOT / MB identifié | ☐ |
| 3 | Dépendances connues | ☐ |
| 4 | Statuts / indicateurs concernés identifiés | ☐ |
| 5 | Garde-fous repris | ☐ |
| 6 | Hors MVP exclu | ☐ |
| 7 | Résultat attendu formulé | ☐ |
| 8 | Design suffisant ou non bloquant | ☐ |
| 9 | Pas de dépendance CRM réel | ☐ |
| 10 | Pas de choix technique imposé | ☐ |
| 11 | Pas de user story détaillée créée dans ce cycle | ☐ |

**Précision :** cette Definition of Ready est volontairement **macro** et devra être affinée lors d'un **futur cycle de delivery détaillé**.

---

## 8. Definition of Done macro

Checklist indicative à la **fin de réalisation** d'un incrément ou lot — **ne remplace pas** tests ou critères d'acceptation détaillés futurs :

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Flux ou capacité démontrable | ☐ |
| 2 | Résultat métier observable | ☐ |
| 3 | Statut ou indicateur conforme (STAT-01 à STAT-08) | ☐ |
| 4 | Garde-fou respecté | ☐ |
| 5 | Dépendance principale levée | ☐ |
| 6 | Post-MVP non réintroduit | ☐ |
| 7 | Documentation delivery mise à jour si nécessaire | ☐ |

**Précision :** cette Definition of Done reste **indicative** et ne constitue pas un plan de test.

---

## 9. Critères de passage vers delivery détaillé

| Condition | Attendu |
|-----------|---------|
| MVP scope validé | `mvp-scope.md` — périmètre, hors MVP, reportés |
| Lots fonctionnels définis | `functional-lots.md` — 9 lots, dépendances |
| Macro backlog défini | `macro-backlog.md` — 51 MB |
| Priorisation définie | `prioritization.md` — P0 / P1 / P2, sous-priorités |
| Slicing défini | `delivery-slicing-strategy.md` — 6 incréments |
| Critères de réalisation définis | `realization-criteria.md` (ce document) |
| Garde-fous consolidés | Repris dans tous les livrables delivery |
| Prochain travail possible | Backlog détaillé **si décidé** — hors obligation de ce cycle |

---

## 10. Garde-fous

- Ne **pas** transformer ce document en **plan de test**.
- Ne **pas** créer de **user stories**.
- Ne **pas** ajouter de **statuts** au-delà de STAT-01 à STAT-08.
- Ne **pas** introduire de **CRM réel**.
- Ne **pas** rendre la **synchronisation bloquante** pour STAT-06.
- Ne **pas** faire du **dashboard** une source de vérité.
- Ne **pas** rendre **Figma bloquant** pour tous les écrans.
- Ne **pas** imposer de **choix technique** dans ce cycle.

---

## 11. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Critères génériques définis | ✅ |
| 2 | Critères par incrément définis (INC-01 à INC-06) | ✅ |
| 3 | Critères par famille fonctionnelle définis | ✅ |
| 4 | Signaux de non-préparation identifiés | ✅ |
| 5 | Definition of Ready macro définie | ✅ |
| 6 | Definition of Done macro définie | ✅ |
| 7 | Conditions de passage delivery détaillé définies | ✅ |
| 8 | Garde-fous repris | ✅ |

---

## 12. Prochaine action

Le prochain livrable est :

**[`2026-06-29-delivery-readiness-summary.md`](2026-06-29-delivery-readiness-summary.md)**

**Objectif :** synthétiser le niveau de préparation du delivery Interv360 et décider si le **cycle delivery preparation** peut être clôturé.

---

*Critères de réalisation Interv360 — Draft.*
