# Interv360 — INC-01 realization slicing

**Type** : Découpage de réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization preparation  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-preparation`  
**Documents associés** : [`realization-preparation-plan.md`](realization-preparation-plan.md), [`delivery-detailing-summary.md`](delivery-detailing-summary.md), [`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md), [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md), [`inc-01-user-stories.md`](inc-01-user-stories.md)

---

## 1. Objectif

Ce document découpe **INC-01 — Flux SAV minimal démontrable** en **séquences progressives de réalisation**.

L'objectif est de préparer une trajectoire de réalisation cohérente, **sans démarrer le code**.

Le découpage doit permettre de construire progressivement la valeur métier :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

---

## 2. Principes de découpage

Le découpage respecte les principes suivants :

- construire le flux métier dans l'ordre logique ;
- produire une valeur démontrable à chaque séquence ;
- éviter un découpage uniquement par écran ;
- ne pas introduire INC-02 à INC-06 ;
- ne pas ajouter de nouveaux statuts ;
- ne pas introduire de CRM réel ;
- ne pas rendre Figma bloquant ;
- ne pas créer de choix technique définitif dans ce document.

---

## 3. Périmètre rappelé

| Élément | Valeur |
|---------|--------|
| **Incrément** | INC-01 — Flux SAV minimal démontrable |
| **Priorité** | P0-A |
| **MB couverts** | 16 |
| **User stories** | 16 |
| **Critères d'acceptation métier** | 68 |
| **Lots couverts** | LOT-01 à LOT-05 |
| **Statuts actifs** | STAT-01, STAT-02, STAT-03, STAT-04, STAT-06 |
| **Statut existant hors chemin nominal** | STAT-05 |
| **Statuts hors INC-01** | STAT-07, STAT-08 |
| **Résultat cible** | STAT-06 — Clôturée localement |
| **Code** | Hors de ce document |
| **API / SQL** | Hors de ce document |

---

## 4. Séquences de réalisation proposées

### RS-01 — Socle demande SAV

**Objectif**

Permettre de créer une demande et de la retrouver dans Interv360.

**Stories couvertes**

- US-INC01-001 — Créer une demande SAV manuelle
- US-INC01-002 — Consulter la liste des demandes
- US-INC01-003 — Ouvrir une fiche demande
- US-INC01-004 — Consulter le détail d'une demande

**MB couverts**

- MB-001
- MB-003
- MB-005
- MB-007

**Résultat démontrable**

Une demande SAV est créée en **STAT-01**, visible dans la liste et consultable dans sa fiche.

**Écrans concernés**

- Liste demandes
- Fiche demande SAV

**Garde-fous**

- la liste reste un point d'accès ;
- la fiche reste la source détaillée ;
- pas de dashboard ;
- pas de CRM réel.

---

### RS-02 — Qualification minimale

**Objectif**

Permettre de qualifier une demande et de la rendre planifiable.

**Stories couvertes**

- US-INC01-005 — Réaliser la qualification minimale
- US-INC01-006 — Passer une demande en qualifiée

**MB couverts**

- MB-009
- MB-010

**Résultat démontrable**

Une demande passe de **STAT-01 — À qualifier** à **STAT-02 — Qualifiée**.

**Écrans concernés**

- Fiche demande SAV
- Liste demandes

**Garde-fous**

- pas de workflow complexe ;
- pas de validation multi-acteurs ;
- pas de statut intermédiaire ;
- STAT-02 seulement après qualification minimale.

---

### RS-03 — Planification intervention

**Objectif**

Créer une intervention depuis une demande qualifiée, choisir un créneau et affecter un technicien.

**Stories couvertes**

- US-INC01-007 — Créer une intervention depuis une demande qualifiée
- US-INC01-008 — Sélectionner un créneau d'intervention
- US-INC01-009 — Affecter un technicien
- US-INC01-010 — Confirmer l'intervention planifiée

**MB couverts**

- MB-013
- MB-014
- MB-015
- MB-017

**Résultat démontrable**

Une intervention liée à une demande qualifiée est planifiée en **STAT-03**.

**Écrans concernés**

- Fiche demande SAV
- Planning
- Liste demandes

**Garde-fous**

- pas de planning avancé ;
- pas d'optimisation automatique ;
- pas de notifications avancées ;
- STAT-03 uniquement après créneau + technicien.

---

### RS-04 — Réalisation terrain et compte rendu

**Objectif**

Permettre au technicien de consulter son intervention, saisir un compte rendu et indiquer le résultat.

**Stories couvertes**

- US-INC01-011 — Consulter une intervention côté technicien
- US-INC01-012 — Saisir un compte rendu simple
- US-INC01-013 — Indiquer le résultat d'intervention

**MB couverts**

- MB-019
- MB-021
- MB-022

**Résultat démontrable**

Le technicien consulte l'intervention, saisit un CR simple et renseigne un résultat exploitable pour clôture.

**Écrans concernés**

- Fiche intervention mobile
- Compte rendu mobile

**Garde-fous**

- pas d'application mobile native complète ;
- pas d'offline avancé ;
- pas de CR PDF obligatoire ;
- pas de pièces jointes avancées ;
- pas de règles complexes de résultat.

---

### RS-05 — Clôture locale et visualisation STAT-06

**Objectif**

Permettre la clôture locale et rendre le statut clôturé visible.

**Stories couvertes**

- US-INC01-014 — Préparer la clôture locale
- US-INC01-015 — Clôturer localement une intervention
- US-INC01-016 — Visualiser le statut clôturé

**MB couverts**

- MB-024
- MB-026
- MB-027

**Résultat démontrable**

Une intervention est clôturée localement en **STAT-06**, visible sur la fiche et la liste.

**Écrans concernés**

- Compte rendu mobile
- Fiche demande SAV
- Liste demandes

**Garde-fous**

- pas de CRM réel ;
- pas de synchronisation bloquante ;
- pas de validation complexe multi-acteurs ;
- pas de dashboard nécessaire pour constater la clôture.

---

## 5. Vue synthétique des séquences

| Séquence | Objectif | Stories | Résultat démontrable |
|----------|----------|---------|----------------------|
| **RS-01** — Socle demande SAV | Créer et consulter une demande | US-INC01-001 à 004 | Demande en STAT-01 visible liste + fiche |
| **RS-02** — Qualification minimale | Qualifier une demande | US-INC01-005, 006 | Demande en STAT-02 |
| **RS-03** — Planification intervention | Planifier une intervention | US-INC01-007 à 010 | Intervention en STAT-03 |
| **RS-04** — Réalisation terrain et CR | Réaliser et documenter l'intervention | US-INC01-011 à 013 | CR et résultat saisis |
| **RS-05** — Clôture locale et STAT-06 | Clôturer et visualiser | US-INC01-014 à 016 | Intervention en STAT-06 visible |

---

## 6. Dépendances entre séquences

| Séquence | Dépend de | Justification |
|----------|-----------|---------------|
| **RS-01** | — | Point d'entrée du flux |
| **RS-02** | RS-01 | Qualification sur demande existante |
| **RS-03** | RS-02 | Intervention depuis demande qualifiée |
| **RS-04** | RS-03 | Intervention planifiée consultable par technicien |
| **RS-05** | RS-04 | Clôture après CR et résultat |

Le chemin recommandé est **strictement séquentiel** pour préserver la démonstration de valeur.

---

## 7. Couverture par stories

| Story | Séquence | Statut |
|-------|----------|:------:|
| US-INC01-001 | RS-01 | ✅ |
| US-INC01-002 | RS-01 | ✅ |
| US-INC01-003 | RS-01 | ✅ |
| US-INC01-004 | RS-01 | ✅ |
| US-INC01-005 | RS-02 | ✅ |
| US-INC01-006 | RS-02 | ✅ |
| US-INC01-007 | RS-03 | ✅ |
| US-INC01-008 | RS-03 | ✅ |
| US-INC01-009 | RS-03 | ✅ |
| US-INC01-010 | RS-03 | ✅ |
| US-INC01-011 | RS-04 | ✅ |
| US-INC01-012 | RS-04 | ✅ |
| US-INC01-013 | RS-04 | ✅ |
| US-INC01-014 | RS-05 | ✅ |
| US-INC01-015 | RS-05 | ✅ |
| US-INC01-016 | RS-05 | ✅ |

---

## 8. Couverture par écrans

| Écran | Séquences concernées | Rôle |
|-------|----------------------|------|
| **Liste demandes** | RS-01, RS-02, RS-03, RS-05 | Accès et visibilité statuts |
| **Fiche demande SAV** | RS-01, RS-02, RS-03, RS-05 | Source détaillée |
| **Planning** | RS-03 | Planification |
| **Fiche intervention mobile** | RS-04 | Consultation terrain |
| **Compte rendu mobile** | RS-04, RS-05 | CR, résultat, clôture |

---

## 9. Valeur démontrable par étape

| Étape | Valeur démontrable |
|-------|--------------------|
| Après **RS-01** | Une demande peut exister et être consultée. |
| Après **RS-02** | Une demande peut devenir qualifiée. |
| Après **RS-03** | Une intervention peut être planifiée. |
| Après **RS-04** | Une intervention peut être réalisée avec CR et résultat. |
| Après **RS-05** | Une intervention peut être clôturée localement en STAT-06. |

---

## 10. Points à cadrer avant réalisation

| Point | Pourquoi | À traiter dans |
|-------|----------|----------------|
| Structure des données fonctionnelles minimales | Nécessaire à la cohérence du flux | [`inc-01-technical-framing.md`](inc-01-technical-framing.md) |
| Stratégie de persistance | Nécessaire à la démo bout en bout | [`inc-01-technical-framing.md`](inc-01-technical-framing.md) |
| Règles minimales de transition statut | Nécessaire pour STAT-01 à STAT-06 | [`inc-01-technical-framing.md`](inc-01-technical-framing.md) |
| Approche QA par séquence | Nécessaire pour vérifier le flux | [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md) |
| Effort par séquence | Nécessaire pour planifier | [`inc-01-effort-estimation.md`](inc-01-effort-estimation.md) |
| Dépendances design restantes | À traiter au fil de l'eau | [`inc-01-technical-framing.md`](inc-01-technical-framing.md) |

---

## 11. Garde-fous

- ne **pas** transformer ce document en plan technique ;
- ne **pas** créer de code ;
- ne **pas** créer d'API ;
- ne **pas** créer de SQL ;
- ne **pas** créer de tests automatisés ;
- ne **pas** ajouter de nouveau statut ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** introduire CRM réel ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** rendre Figma bloquant.

---

## 12. Critères de sortie

- [x] séquences de réalisation définies ;
- [x] couverture des 16 stories vérifiée ;
- [x] dépendances entre séquences explicites ;
- [x] écrans concernés identifiés ;
- [x] valeur démontrable par séquence définie ;
- [x] points à cadrer avant réalisation identifiés ;
- [x] garde-fous repris.

---

## 13. Prochaine action

Le prochain livrable est :

**[`inc-01-technical-framing.md`](inc-01-technical-framing.md)**

**Objectif :** identifier les cadrages techniques nécessaires à INC-01 sans figer prématurément les choix de mise en œuvre.

---

*Découpage de réalisation INC-01 — Draft.*
