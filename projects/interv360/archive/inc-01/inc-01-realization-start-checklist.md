# Interv360 — INC-01 realization start checklist

**Type** : Checklist avant autorisation de démarrage code  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization start  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-start`  
**Documents associés** : [`realization-start-plan.md`](realization-start-plan.md), [`inc-01-stack-options.md`](inc-01-stack-options.md), [`2026-06-29-inc-01-project-structure-decision.md`](2026-06-29-inc-01-project-structure-decision.md), [`2026-06-29-inc-01-front-back-start-decision.md`](2026-06-29-inc-01-front-back-start-decision.md), [`implementation-planning-summary.md`](implementation-planning-summary.md)

---

## 1. Objectif

Ce document liste les conditions minimales à vérifier avant toute **autorisation explicite** de démarrage code pour :

**INC-01 — Flux SAV minimal démontrable**

Il sert de checklist de décision.

Ce document **ne constitue pas** une autorisation de coder.

Il **ne crée pas** :

- de code ;
- de projet applicatif ;
- de dossier applicatif réel ;
- de framework initialisé ;
- d'API ;
- d'OpenAPI ;
- de payload JSON ;
- de SQL ;
- de tests automatisés ;
- de scripts ;
- de tickets Jira réels ;
- de sprint plan ferme.

---

## 2. Décisions héritées

| Décision | Statut |
|----------|--------|
| **INC-01 prêt documentairement** | Retenu |
| **Stack indicative** | Mono-app web simple |
| **Structure cible** | Mono-app avec séparation logique interne |
| **Front / back** | Séparation logique interne, pas de séparation physique pour INC-01 |
| **API externe** | Non obligatoire |
| **CRM réel** | Hors périmètre |
| **Dashboard / BI** | Hors périmètre |
| **STAT-07 / STAT-08** | Hors INC-01 |
| **Figma** | Non bloquant |
| **Autorisation de code** | Non donnée |

---

## 3. Checklist périmètre INC-01

- [ ] Le flux INC-01 est limité à RS-01 → RS-05
- [ ] Le chemin nominal est limité à STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06
- [ ] STAT-05 reste hors chemin nominal
- [ ] STAT-07 reste hors INC-01
- [ ] STAT-08 reste hors INC-01
- [ ] Le CRM réel reste hors périmètre
- [ ] Le dashboard / BI reste hors périmètre
- [ ] La synchronisation externe reste non bloquante
- [ ] La mise en production reste hors cycle
- [ ] INC-01 n'est pas élargi

---

## 4. Checklist stack

- [ ] L'option stack cible est confirmée
- [ ] L'option mono-app web simple est confirmée ou remplacée par décision motivée
- [ ] La stack concrète est nommée avant code
- [ ] Les contraintes de setup sont comprises
- [ ] Aucune dépendance n'est installée avant autorisation
- [ ] Aucun framework n'est initialisé avant autorisation
- [ ] Le risque de surdimensionnement est accepté ou réduit
- [ ] La compatibilité avec une future séparation front / back est confirmée

---

## 5. Checklist structure projet

- [ ] La structure mono-app est confirmée
- [ ] La séparation logique interne est confirmée
- [ ] Les couches UI / application / métier / data / QA sont confirmées
- [ ] Les règles de statuts seront isolées
- [ ] Les règles de refus seront isolées
- [ ] Les données de démonstration seront isolées
- [ ] Les scénarios QA seront isolés
- [ ] Aucun dossier applicatif réel n'est créé avant autorisation
- [ ] La structure cible reste compatible avec une future extraction front / back

---

## 6. Checklist front / back

- [ ] L'UI reste limitée à l'affichage et aux actions utilisateur
- [ ] L'UI ne décide pas seule des transitions de statut
- [ ] Les règles métier critiques restent hors UI
- [ ] L'orchestration RS-01 à RS-05 est isolée
- [ ] Les transitions autorisées sont contrôlées
- [ ] Les transitions interdites sont refusées
- [ ] Aucune API externe n'est obligatoire pour INC-01
- [ ] Aucun OpenAPI n'est requis pour INC-01
- [ ] Aucune séparation physique front / back n'est imposée pour INC-01
- [ ] Une future séparation reste possible si conditions post-INC-01 réunies

---

## 7. Checklist data

- [ ] La stratégie data est confirmée avant code
- [ ] Les objets demande / qualification / intervention / CR / résultat sont couverts
- [ ] Le statut courant est couvert
- [ ] Le journal fonctionnel minimal est couvert
- [ ] Les données de démonstration SAV-DEMO-001 / INT-DEMO-001 sont disponibles
- [ ] Aucune donnée réelle n'est requise
- [ ] Aucune donnée personnelle réelle n'est introduite
- [ ] Aucun SQL n'est produit avant autorisation
- [ ] Aucune migration n'est produite avant autorisation
- [ ] Aucune dépendance CRM n'est introduite

---

## 8. Checklist QA / validation

- [ ] Les scénarios QA-NOM-001 à QA-NOM-016 sont disponibles
- [ ] Les scénarios REF-001 à REF-010 sont disponibles
- [ ] Les contrôles QA par RS sont identifiés
- [ ] Les refus métier sont couverts
- [ ] La vérification liste / fiche est prévue
- [ ] La vérification planning est prévue
- [ ] La vérification technicien / CR est prévue
- [ ] La vérification STAT-06 est prévue
- [ ] Le journal minimal est vérifiable
- [ ] Aucun test automatisé n'est créé avant autorisation spécifique

---

## 9. Checklist backlog / tickets

- [ ] Le backlog préparatoire est disponible
- [ ] Les 23 items préparatoires sont disponibles
- [ ] Les P0 sont centrés sur STAT-06
- [ ] Les P1 ne sont pas prioritaires sur P0
- [ ] Aucun ticket Jira réel n'est créé avant décision
- [ ] Aucun sprint plan ferme n'est créé avant décision
- [ ] Aucune date ferme n'est engagée
- [ ] Aucune capacité de livraison n'est engagée

---

## 10. Checklist design / Figma

- [ ] Figma est confirmé non bloquant
- [ ] Les specs Git sont suffisantes pour cadrer INC-01
- [ ] Aucun redesign complet n'est requis avant code
- [ ] Aucune modification Figma n'est nécessaire dans ce cycle
- [ ] Aucun export PNG n'est ajouté au commit
- [ ] Le design pixel perfect n'est pas requis pour INC-01
- [ ] Les 5 écrans MVP restent le périmètre de référence

---

## 11. Checklist garde-fous

- [ ] Pas de code avant autorisation explicite
- [ ] Pas de projet applicatif avant autorisation explicite
- [ ] Pas de framework avant autorisation explicite
- [ ] Pas d'API avant autorisation explicite
- [ ] Pas d'OpenAPI avant autorisation explicite
- [ ] Pas de payload JSON avant autorisation explicite
- [ ] Pas de SQL avant autorisation explicite
- [ ] Pas de tests automatisés avant autorisation explicite
- [ ] Pas de scripts avant autorisation explicite
- [ ] Pas de tickets Jira réels avant autorisation explicite
- [ ] Pas de sprint plan ferme avant autorisation explicite
- [ ] Pas de CRM réel
- [ ] Pas de dashboard / BI
- [ ] Pas de STAT-07 / STAT-08
- [ ] Pas d'élargissement INC-01

---

## 12. Conditions bloquantes

| Condition bloquante | Effet |
|---------------------|-------|
| **Stack concrète non décidée** | Pas de démarrage code |
| **Structure projet non confirmée** | Pas de démarrage code |
| **Stratégie data non confirmée** | Pas de démarrage code |
| **Périmètre INC-01 non gelé** | Pas de démarrage code |
| **CRM réintroduit** | Pas de démarrage code |
| **Dashboard réintroduit** | Pas de démarrage code |
| **STAT-07 / STAT-08 activés** | Pas de démarrage code |
| **Autorisation explicite absente** | Pas de démarrage code |

---

## 13. Décision possible en sortie de checklist

| Décision possible | Signification |
|-------------------|---------------|
| **Go documentaire** | Tous les prérequis sont suffisamment cadrés, mais code non démarré |
| **Go réalisation** | Autorisation explicite de créer le projet et démarrer code |
| **Go partiel** | Certains choix sont validés, d'autres restent à décider |
| **No-go** | Conditions bloquantes présentes |

La décision **Go réalisation** ne peut être prise que dans un **futur acte explicite**. Ce document prépare cette décision mais **ne la donne pas**.

---

## 14. Recommandation actuelle

À ce stade, la recommandation est :

**Go documentaire — préparation suffisante pour décider, mais autorisation de code non donnée.**

### Justification

- stack indicative définie ;
- structure cible définie ;
- séparation front / back décidée au niveau logique ;
- backlog préparatoire disponible ;
- QA et refus disponibles ;
- garde-fous consolidés ;
- stratégie data et stack concrète encore à confirmer ;
- autorisation explicite absente.

---

## 15. Décisions retenues

| Décision | Statut |
|----------|--------|
| Checklist avant code créée | Retenu |
| Go documentaire recommandé | Retenu |
| Go réalisation non donné | Retenu |
| Stack concrète à confirmer | Retenu |
| Stratégie data à confirmer | Retenu |
| Périmètre INC-01 à geler explicitement | Retenu |
| Aucun ticket réel avant décision | Retenu |
| Aucun sprint plan ferme avant décision | Retenu |
| Aucun code avant autorisation explicite | Retenu |
| Garde-fous INC-01 maintenus | Retenu |

---

## 16. Garde-fous

- ne pas démarrer le code ;
- ne pas créer de projet applicatif ;
- ne pas créer de dossier applicatif réel ;
- ne pas initialiser de framework ;
- ne pas installer de dépendances ;
- ne pas créer d'API ;
- ne pas créer d'OpenAPI ;
- ne pas créer de payload JSON ;
- ne pas créer de SQL ;
- ne pas créer de tests automatisés ;
- ne pas créer de scripts ;
- ne pas créer de ticket Jira réel ;
- ne pas créer de sprint plan ferme ;
- ne pas introduire CRM réel ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 17. Critères de sortie

- [x] décisions héritées listées ;
- [x] checklist périmètre définie ;
- [x] checklist stack définie ;
- [x] checklist structure projet définie ;
- [x] checklist front / back définie ;
- [x] checklist data définie ;
- [x] checklist QA / validation définie ;
- [x] checklist backlog / tickets définie ;
- [x] checklist design / Figma définie ;
- [x] checklist garde-fous définie ;
- [x] conditions bloquantes listées ;
- [x] décisions possibles listées ;
- [x] recommandation actuelle formulée ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 18. Prochaine action

Le prochain livrable est :

`realization-start-summary.md`

**Objectif :** synthétiser le cycle realization start et décider si la branche peut être proposée en PR.
