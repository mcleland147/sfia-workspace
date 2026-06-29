# Interv360 — INC-01 status rules

**Type** : Règles de transition de statuts  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-application-architecture.md`](inc-01-application-architecture.md), [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md), [`inc-01-data-model.md`](inc-01-data-model.md), [`inc-01-api-strategy.md`](inc-01-api-strategy.md)

---

## 1. Objectif

Ce document formalise les **règles de transition de statuts** pour **INC-01 — Flux SAV minimal démontrable**.

L'objectif est de sécuriser le flux :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Ce document **ne crée pas** :

- de code ;
- d'automate exécutable ;
- de BPMN ;
- d'API détaillée ;
- de SQL ;
- de tests automatisés.

---

## 2. Principes de gestion des statuts

Les règles de statut doivent respecter les principes suivants :

- les transitions sont **contrôlées côté back / couche métier** ;
- le front **affiche** les statuts mais **ne les décide pas seul** ;
- la data conserve le **statut courant** et une **trace minimale** ;
- **Interv360** reste la source locale du statut INC-01 ;
- **STAT-06** est atteignable localement ;
- aucune synchronisation externe n'est bloquante ;
- aucun CRM réel n'est requis ;
- **STAT-07** et **STAT-08** restent hors INC-01 ;
- **STAT-05** existe mais n'est pas requis dans le chemin nominal ;
- aucun nouveau statut n'est ajouté.

---

## 3. Statuts INC-01

| Statut | Libellé | Usage INC-01 |
|--------|---------|--------------|
| **STAT-01** | À qualifier | Demande créée et non qualifiée |
| **STAT-02** | Qualifiée | Demande exploitable pour intervention |
| **STAT-03** | Planifiée | Intervention créée, créneau et technicien affectés |
| **STAT-04** | En cours | Réalisation engagée ou CR saisi |
| **STAT-05** | En attente client | Statut existant mais hors chemin nominal INC-01 |
| **STAT-06** | Clôturée localement | Demande / intervention clôturée dans Interv360 |
| **STAT-07** | En retard | Hors INC-01 |
| **STAT-08** | Anomalie d'intégration | Hors INC-01 |

Le **chemin nominal INC-01** utilise **STAT-01, STAT-02, STAT-03, STAT-04** et **STAT-06**.

---

## 4. Transitions autorisées

| Transition | Déclencheur métier | Préconditions | Résultat |
|------------|--------------------|---------------|----------|
| Création → **STAT-01** | Création demande SAV | Informations minimales de demande saisies | Demande visible liste + fiche |
| **STAT-01** → **STAT-02** | Qualification minimale validée | Checklist minimale complétée | Demande qualifiée |
| **STAT-02** → **STAT-03** | Intervention planifiée | Intervention créée + créneau + technicien | Intervention planifiée |
| **STAT-03** → **STAT-04** | Intervention engagée / CR saisi | Intervention consultable + début de réalisation ou CR disponible | Réalisation en cours / CR tracé |
| **STAT-04** → **STAT-06** | Clôture locale | CR + résultat exploitables | Demande clôturée localement |

**Précision :** ces transitions sont **conceptuelles** et ne constituent **pas** un automate technique exécutable.

---

## 5. Transitions non autorisées dans INC-01

| Transition refusée | Raison |
|--------------------|--------|
| STAT-01 → STAT-03 | Qualification obligatoire |
| STAT-01 → STAT-06 | Intervention et CR requis |
| STAT-02 → STAT-06 | Planification / réalisation / CR requis |
| STAT-03 → STAT-06 | CR et résultat requis |
| STAT-04 → STAT-08 | Anomalie intégration hors INC-01 |
| STAT-06 → STAT-01 | Réouverture hors INC-01 |
| STAT-06 → STAT-08 | Anomalie intégration ne rouvre pas INC-01 |
| Toute transition vers STAT-07 | Hors INC-01 |
| Toute transition vers STAT-08 | Hors INC-01 |
| Toute transition dépendant d'un retour CRM réel | Hors INC-01 |

---

## 6. Règles détaillées par statut

### STAT-01 — À qualifier

- État initial après création de demande.
- Visible dans la liste et la fiche.
- Ne permet pas encore de créer une intervention planifiée complète.
- Sort uniquement vers **STAT-02** dans le chemin nominal.
- Nécessite une qualification minimale.

### STAT-02 — Qualifiée

- Obtenu après qualification minimale.
- Permet de créer une intervention.
- Nécessite informations minimales exploitables.
- Sort vers **STAT-03** lorsque intervention + créneau + technicien sont définis.
- Ne permet pas une clôture directe.

### STAT-03 — Planifiée

- Obtenu après création intervention, sélection créneau et affectation technicien.
- Visible dans planning, liste et fiche.
- Permet consultation technicien.
- Sort vers **STAT-04** lorsque réalisation / CR démarre.
- Ne permet pas clôture sans CR / résultat.

### STAT-04 — En cours

- Représente réalisation engagée ou CR saisi.
- Permet de rattacher CR et résultat.
- Prépare la clôture locale.
- Sort vers **STAT-06** lorsque CR + résultat exploitables sont validés.
- Ne dépend pas d'un retour CRM.

### STAT-05 — En attente client

- Statut existant dans le référentiel.
- Hors chemin nominal INC-01.
- Non requis pour démontrer le flux minimal.
- Ne doit pas être rendu obligatoire dans INC-01.
- Pourra être traité dans un cycle futur si nécessaire.

### STAT-06 — Clôturée localement

- État cible INC-01.
- Appliqué localement dans Interv360.
- Visible dans la liste et la fiche.
- Ne dépend pas d'un CRM réel.
- Ne dépend pas d'une synchronisation externe réussie.
- Ne doit pas être rouvert par STAT-08 dans INC-01.

### STAT-07 — En retard

- Indicateur hors INC-01.
- Ne doit pas être activé dans ce cycle.
- Ne doit pas bloquer le flux nominal.
- Futur périmètre pilotage.

### STAT-08 — Anomalie d'intégration

- Indicateur hors INC-01.
- Lié à l'intégration / anomalies futures.
- Ne doit pas être activé dans INC-01.
- Ne doit pas rouvrir STAT-06.
- Futur périmètre INC-04.

---

## 7. Responsabilités front / back / data

| Couche | Responsabilité sur les statuts |
|--------|--------------------------------|
| **Front** | Affiche le statut et déclenche les actions utilisateur |
| **Back** | Contrôle les préconditions et applique les transitions |
| **Métier** | Définit les règles de passage |
| **Data** | Conserve le statut courant et la trace minimale |
| **QA** | Vérifie le respect des transitions et refus |

---

## 8. Règles de visibilité

| Statut | Visibilité attendue |
|--------|---------------------|
| **STAT-01** | Liste + fiche |
| **STAT-02** | Liste + fiche |
| **STAT-03** | Liste + fiche + planning |
| **STAT-04** | Fiche + parcours technicien / CR, liste si utile |
| **STAT-05** | Non requis dans chemin nominal |
| **STAT-06** | Liste + fiche |
| **STAT-07** | Non requis INC-01 |
| **STAT-08** | Non requis INC-01 |

---

## 9. Règles de persistance et journal

- Chaque **transition autorisée** met à jour le statut courant.
- Chaque **transition autorisée** crée une trace minimale dans le journal fonctionnel.
- La trace minimale indique l'objet concerné, l'ancien statut, le nouveau statut, l'action, l'acteur fonctionnel et la date.
- Les **transitions refusées** ne doivent **pas** modifier le statut courant.
- Les transitions refusées peuvent être tracées plus tard, mais ce n'est **pas obligatoire** pour INC-01.
- **STAT-06** doit être conservé localement.

---

## 10. Règles de clôture locale

- La **clôture locale** est l'objectif INC-01.
- Elle nécessite **CR + résultat exploitables**.
- Elle applique **STAT-06**.
- Elle est réalisée dans **Interv360**.
- Elle **ne dépend pas** d'un CRM réel.
- Elle **ne dépend pas** d'une synchronisation externe réussie.
- Elle **ne déclenche pas** STAT-08 dans INC-01.
- Elle reste **visible** sur liste et fiche.

---

## 11. Risques liés aux statuts

| Risque | Impact | Réduction |
|--------|--------|-----------|
| Front décide les statuts | Incohérence | Contrôle back |
| Saut de qualification | Flux incomplet | Bloquer STAT-01 → STAT-03 |
| Clôture trop tôt | Données insuffisantes | Exiger CR + résultat |
| CRM implicite | Blocage STAT-06 | Clôture locale |
| STAT-07 activé trop tôt | Élargissement | Hors INC-01 |
| STAT-08 activé trop tôt | Confusion intégration | Hors INC-01 |
| STAT-06 rouvert par anomalie | Incohérence | STAT-08 ne rouvre pas INC-01 |
| Statut non visible | Démo faible | Liste / fiche obligatoires |

---

## 12. Décisions retenues

| Décision | Statut |
|----------|--------|
| Chemin nominal STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 | Retenu |
| STAT-05 hors chemin nominal | Retenu |
| STAT-07 hors INC-01 | Retenu |
| STAT-08 hors INC-01 | Retenu |
| Transitions contrôlées côté back | Retenu |
| Front affichage / déclenchement uniquement | Retenu |
| Statut courant persisté | Retenu |
| Journal fonctionnel minimal | Retenu |
| STAT-06 local sans CRM | Retenu |
| Sync externe non bloquante | Retenu |

---

## 13. Points à traiter dans les livrables suivants

| Point | Livrable cible |
|-------|----------------|
| QA détaillée des transitions | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) |
| Scénarios de refus métier | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) |
| Estimation / planification | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) ou futur cycle planning |
| Éventuelles règles post-MVP | Futurs incréments |

---

## 14. Garde-fous

- ne **pas** créer de nouveau statut ;
- ne **pas** créer d'automate exécutable ;
- ne **pas** créer de BPMN ;
- ne **pas** créer de code ;
- ne **pas** créer d'API détaillée ;
- ne **pas** créer de SQL ;
- ne **pas** activer STAT-07 ;
- ne **pas** activer STAT-08 ;
- ne **pas** rendre STAT-05 obligatoire ;
- ne **pas** rendre un CRM réel obligatoire ;
- ne **pas** rendre une synchronisation externe bloquante ;
- ne **pas** élargir INC-01.

---

## 15. Critères de sortie

- [x] statuts INC-01 listés ;
- [x] chemin nominal défini ;
- [x] transitions autorisées définies ;
- [x] transitions refusées définies ;
- [x] règles par statut formalisées ;
- [x] responsabilités front / back / data définies ;
- [x] visibilité des statuts définie ;
- [x] persistance et journal définis ;
- [x] clôture locale cadrée ;
- [x] risques identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 16. Prochaine action

Le prochain livrable est :

**[`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md)**

**Objectif :** préparer la QA détaillée et la planification technique d'INC-01, sans créer de tests automatisés.

---

*Règles de transition INC-01 — Draft.*
