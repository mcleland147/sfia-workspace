# Interv360 — INC-01 stack options

**Type** : Comparaison d'options de stack  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization start  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-start`  
**Documents associés** : [`realization-start-plan.md`](realization-start-plan.md), [`implementation-planning-summary.md`](implementation-planning-summary.md), [`inc-01-realization-backlog.md`](inc-01-realization-backlog.md), [`technical-design-summary.md`](technical-design-summary.md)

---

## 1. Objectif

Ce document compare les options de stack possibles pour préparer la réalisation de :

**INC-01 — Flux SAV minimal démontrable**

Il vise à éclairer une future décision de démarrage réalisation.

Ce document **ne constitue pas** une autorisation de coder.

Il **ne crée pas** :

- de code ;
- de projet applicatif ;
- de framework initialisé ;
- d'installation de dépendances ;
- d'API ;
- de SQL ;
- de tests automatisés ;
- de scripts ;
- de tickets Jira réels.

---

## 2. Rappel du besoin INC-01

INC-01 doit permettre de dérouler le flux minimal :

**RS-01 → RS-02 → RS-03 → RS-04 → RS-05**

Chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Résultat attendu :

**Une demande SAV atteint STAT-06 — Clôturée localement.**

Le périmètre reste limité à :

- création demande ;
- liste demandes ;
- fiche demande ;
- qualification ;
- planification intervention ;
- parcours technicien / compte rendu ;
- clôture locale ;
- journal fonctionnel minimal ;
- QA nominale et refus métier.

---

## 3. Critères de comparaison

| Critère | Description |
|---------|-------------|
| **Simplicité de démarrage** | Facilité à lancer une première réalisation |
| **Capacité à couvrir les 5 écrans MVP** | Liste, fiche, planning, technicien, compte rendu |
| **Clarté front / back / data** | Capacité à respecter les responsabilités cadrées |
| **Facilité de QA** | Déroulement des scénarios QA-NOM et REF |
| **Capacité à gérer les statuts** | Gouvernance STAT-01 à STAT-06 hors UI |
| **Facilité de démonstration** | Présentation du flux avec données fictives |
| **Effort de setup** | Charge initiale avant première valeur |
| **Risque d'élargissement** | Tentation d'ajouter CRM, dashboard, STAT-07/08 |
| **Maintenabilité** | Capacité à faire évoluer sans dette excessive |
| **Capacité à évoluer après INC-01** | Ouverture vers INC-02+ sans refonte totale |

---

## 4. Options étudiées

| Option | Description courte |
|--------|--------------------|
| **Option A** | Mono-app web simple |
| **Option B** | Front / back séparés |
| **Option C** | Prototype local léger |
| **Option D** | Low-code / no-code |
| **Option E** | Documentation + maquette interactive uniquement |

---

## 5. Option A — Mono-app web simple

Une application web unique regroupant interface, logique applicative et persistance simple, avec séparation **interne** claire mais sans séparation physique front / back imposée.

| Axe | Analyse |
|-----|---------|
| **Couverture INC-01** | Bonne |
| **Setup** | Modéré |
| **Front / back** | Séparation logique interne |
| **Data** | Persistance simple possible |
| **QA** | Simple à dérouler |
| **Statut** | Contrôlable dans la couche applicative |
| **Démo** | Bonne |
| **Complexité** | Maîtrisée |
| **Risque** | Peut devenir monolithe si non cadré |
| **Adéquation INC-01** | Élevée |

---

## 6. Option B — Front / back séparés

Une architecture séparant explicitement un front applicatif et un back applicatif, avec interface interne entre les deux.

| Axe | Analyse |
|-----|---------|
| **Couverture INC-01** | Bonne |
| **Setup** | Plus lourd |
| **Front / back** | Séparation claire |
| **Data** | Côté back |
| **QA** | Plus structurée mais plus coûteuse |
| **Statut** | Contrôlé côté back |
| **Démo** | Bonne |
| **Complexité** | Plus élevée |
| **Risque** | Surdimensionnement INC-01 |
| **Adéquation INC-01** | Moyenne à élevée selon ambition |

---

## 7. Option C — Prototype local léger

Un prototype local très limité permettant de valider le parcours métier et les statuts sans viser une architecture de production.

| Axe | Analyse |
|-----|---------|
| **Couverture INC-01** | Suffisante pour démonstration |
| **Setup** | Faible |
| **Front / back** | Simplifié |
| **Data** | Données locales / fictives |
| **QA** | Utile pour valider parcours |
| **Statut** | Démontrable |
| **Démo** | Bonne si cadrée |
| **Complexité** | Faible |
| **Risque** | Dette si transformé en produit |
| **Adéquation INC-01** | Élevée pour preuve, limitée pour industrialisation |

---

## 8. Option D — Low-code / no-code

Une solution outillée permettant de produire rapidement écrans et flux sans développement classique complet.

| Axe | Analyse |
|-----|---------|
| **Couverture INC-01** | Potentiellement bonne |
| **Setup** | Variable |
| **Front / back** | Dépend outil |
| **Data** | Dépend outil |
| **QA** | Possible mais dépend plateforme |
| **Statut** | Possible mais à vérifier |
| **Démo** | Rapide |
| **Complexité** | Faible au départ, variable ensuite |
| **Risque** | Verrouillage outil / limites d'évolution |
| **Adéquation INC-01** | Intéressante pour démo, à valider pour produit |

---

## 9. Option E — Documentation + maquette interactive uniquement

Continuer à démontrer INC-01 uniquement via documentation, données de démonstration et maquettes, sans produit exécutable.

| Axe | Analyse |
|-----|---------|
| **Couverture INC-01** | Documentaire |
| **Setup** | Très faible |
| **Front / back** | Non applicable |
| **Data** | Non persistée |
| **QA** | Non exécutable |
| **Statut** | Démontré théoriquement |
| **Démo** | Limitée |
| **Complexité** | Très faible |
| **Risque** | Ne valide pas la faisabilité réelle |
| **Adéquation INC-01** | Insuffisante pour démarrage réalisation |

---

## 10. Comparaison synthétique

| Critère | Option A Mono-app | Option B Front/back | Option C Prototype | Option D Low-code | Option E Doc/maquette |
|---------|-------------------|---------------------|--------------------|-------------------|-----------------------|
| **Simplicité démarrage** | Élevé | Moyen | Élevé | Moyen | Très élevé |
| **Couverture INC-01** | Bon | Bon | Bon | Bon | Limité |
| **Effort setup** | Moyen | Élevé | Faible | Moyen | Très faible |
| **Clarté architecture** | Bon | Élevé | Moyen | Variable | N/A |
| **QA** | Bon | Bon | Bon | Moyen | Limité |
| **Gestion statuts** | Bon | Élevé | Bon | Moyen | Limité |
| **Démo** | Bon | Bon | Bon | Bon | Limité |
| **Évolutivité** | Bon | Élevé | Limité | Moyen | Faible |
| **Risque surdimensionnement** | Faible | Élevé | Faible | Moyen | Faible |
| **Adéquation globale INC-01** | Élevée | Moyenne à élevée | Élevée (preuve) | Moyenne | Insuffisante |

---

## 11. Recommandation indicative

Pour INC-01, l'option recommandée à ce stade est :

**Option A — Mono-app web simple avec séparation logique interne**

### Justification

- couvre bien le flux INC-01 ;
- limite l'effort de setup ;
- évite de surdimensionner l'architecture ;
- permet de maintenir les règles de statuts côté couche applicative ;
- reste compatible avec une future séparation front / back si le produit évolue ;
- permet de démontrer rapidement le flux STAT-01 → STAT-06 ;
- évite la dépendance CRM / dashboard ;
- reste cohérente avec le périmètre MVP.

Cette recommandation est **indicative** et doit être confirmée dans les livrables suivants avant toute autorisation de code.

---

## 12. Conditions avant décision finale

| Condition | Objectif |
|-----------|----------|
| **Confirmer l'ambition du prototype** | Démo, MVP interne ou base produit |
| **Confirmer la stack technique concrète** | Avant setup |
| **Confirmer la stratégie data** | Locale, fichier, base légère ou autre |
| **Confirmer la séparation front / back** | Mono-app logique ou séparation physique |
| **Confirmer la stratégie QA** | Manuelle documentaire ou future automatisation |
| **Confirmer que Figma reste non bloquant** | Specs Git suffisantes |
| **Confirmer que CRM / dashboard restent hors périmètre** | Garde-fous INC-01 |
| **Confirmer l'autorisation explicite avant code** | Décision formelle |

---

## 13. Risques liés au choix de stack

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Stack surdimensionnée** | Ralentissement | Choisir approche simple |
| **Prototype transformé en produit sans refonte** | Dette | Clarifier ambition |
| **Front / back séparés trop tôt** | Surcharge | Garder séparation logique si suffisant |
| **Low-code verrouillant** | Limites futures | Vérifier avant choix |
| **Documentation seule insuffisante** | Pas de validation réelle | Prévoir réalisation si décision |
| **Démarrage code sans décision** | Dérive | Checklist obligatoire |
| **CRM / dashboard réintroduits** | Élargissement | Garde-fous |

---

## 14. Décisions retenues

| Décision | Statut |
|----------|--------|
| Options comparées sans installation | Retenu |
| Aucune stack installée | Retenu |
| Aucune initialisation projet | Retenu |
| Mono-app simple recommandée indicativement | Retenu |
| Front / back séparés non exclus mais non privilégiés pour INC-01 | Retenu |
| Prototype local possible mais à cadrer | Retenu |
| Low-code à considérer seulement si contrainte forte de vitesse | Retenu |
| Documentation seule insuffisante pour réalisation | Retenu |
| Décision finale reportée | Retenu |
| Autorisation de code non donnée | Retenu |

---

## 15. Garde-fous

- ne pas démarrer le code ;
- ne pas initialiser de framework ;
- ne pas installer de dépendances ;
- ne pas créer de projet applicatif ;
- ne pas créer d'API ;
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

## 16. Critères de sortie

- [x] critères de comparaison définis ;
- [x] options étudiées listées ;
- [x] option mono-app analysée ;
- [x] option front / back analysée ;
- [x] option prototype analysée ;
- [x] option low-code analysée ;
- [x] option documentation / maquette analysée ;
- [x] comparaison synthétique produite ;
- [x] recommandation indicative formulée ;
- [x] conditions avant décision finale listées ;
- [x] risques identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 17. Prochaine action

Le prochain livrable est :

`2026-06-29-inc-01-project-structure-decision.md`

**Objectif :** définir la structure projet cible sans créer le projet applicatif.
