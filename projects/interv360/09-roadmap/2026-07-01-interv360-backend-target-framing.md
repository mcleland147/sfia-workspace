# Interv360 — Backend Target Framing

**Projet** : Interv360
**Cycle** : Backend Target Framing
**Mode** : SFIA Fast Delivery documentaire
**Statut** : Cadrage architecture
**Branche** : `architecture/interv360-backend-target-framing`

---

## 1. Objectif

Ce document cadre le passage potentiel d'Interv360 d'un démonstrateur local vers un prototype connecté.

Il ne lance aucune implémentation.

L'objectif est de clarifier :

- pourquoi un backend pourrait devenir nécessaire ;
- ce qui doit rester local dans l'immédiat ;
- les scénarios d'architecture envisageables ;
- les impacts sur les données, le journal, le workflow, la sécurité et les intégrations ;
- les décisions à prendre avant tout développement backend.

---

## 2. Point de départ

Interv360 est actuellement un démonstrateur local.

Il couvre :

- plusieurs demandes SAV fictives ;
- un workflow nominal `STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06` ;
- un journal local filtré par demande ;
- des filtres et une recherche locale ;
- des priorités et criticités fictives ;
- un scénario guidé ;
- un panneau readiness ;
- un package de présentation externe (`08-presentation/`).

Le démonstrateur ne couvre pas :

- backend ;
- API ;
- base de données serveur ;
- CRM ;
- authentification ;
- multi-utilisateur ;
- production.

---

## 3. Réflexion d'optimisation SFIA

Le sujet n'est plus un simple enrichissement local de démonstration.

Il touche à une trajectoire structurante :

- architecture ;
- persistance ;
- sécurité ;
- intégrations ;
- modèle de données ;
- évolutivité.

Le **Batch Delivery** n'est donc pas adapté : le risque et l'impact architectural dépassent le périmètre des lots produit précédents.

Décision de méthode :

- utiliser **Fast Delivery documentaire** ;
- produire un cadrage d'architecture unique ;
- ne pas implémenter ;
- revenir à un niveau de contrôle plus fort que les lots Batch 01 à 04.

---

## 4. Problème à résoudre

Le démonstrateur local est suffisant pour présenter un parcours SAV.

Mais il ne permet pas encore de traiter :

- persistance partagée ;
- consultation multi-utilisateur ;
- traçabilité centralisée ;
- gestion de rôles ;
- intégration CRM ;
- historisation serveur ;
- supervision ou reporting réel ;
- exploitation production.

Le passage backend doit donc être **cadré avant tout développement**.

---

## 5. Hypothèses

Hypothèses de cadrage :

- Interv360 reste un prototype dans l'immédiat ;
- les données réelles ne sont pas introduites sans décision séparée ;
- le CRM reste hors périmètre tant qu'une cible d'intégration n'est pas décidée ;
- le workflow nominal reste la base de départ ;
- les statuts hors nominal (STAT-05, STAT-07, STAT-08) ne sont pas ajoutés automatiquement ;
- le journal doit rester traçable et explicable ;
- l'architecture cible doit rester simple au départ.

---

## 6. Scénarios d'architecture envisageables

### Scénario A — Local demo maintenu

**Description :**

- conserver le démonstrateur local ;
- continuer à enrichir les scénarios fictifs ;
- aucune API ;
- aucune persistance serveur.

**Avantages :**

- faible coût ;
- faible risque ;
- très rapide ;
- idéal pour présentation et discussion métier.

**Limites :**

- pas de collaboration ;
- pas de données partagées ;
- pas de traçabilité serveur ;
- pas de trajectoire production.

---

### Scénario B — Prototype connecté minimal

**Description :**

- ajouter une API simple ;
- ajouter une persistance serveur ;
- conserver un frontend proche de l'existant ;
- exposer demandes, statuts, transitions et journal.

**Avantages :**

- prépare un prototype plus réaliste ;
- permet de tester la persistance ;
- clarifie le modèle de données ;
- reste maîtrisable.

**Limites :**

- introduit sécurité, hébergement, API, tests backend ;
- nécessite une décision technique ;
- nécessite des garde-fous renforcés.

---

### Scénario C — Prototype intégré CRM

**Description :**

- connecter Interv360 à un CRM ou à un système SAV cible ;
- synchroniser demandes, statuts, événements ou comptes rendus.

**Avantages :**

- proche d'un cas réel ;
- utile pour une trajectoire SI cible.

**Limites :**

- dépendance externe forte ;
- complexité d'intégration ;
- sécurité et données réelles ;
- gouvernance des flux ;
- pas adapté comme prochaine étape immédiate.

---

### Scénario D — Architecture cible complète

**Description :**

- cadrer une cible complète incluant frontend, backend, base, IAM, CRM, audit, exploitation, supervision.

**Avantages :**

- vision long terme ;
- utile pour cadrage SI complet.

**Limites :**

- trop lourd pour la suite immédiate ;
- risque de ralentir la dynamique ;
- nécessite des décisions métier et SI non disponibles.

---

## 7. Analyse comparative

| Scénario | Valeur immédiate | Risque | Effort | Données réelles | Pertinence prochaine étape |
|----------|------------------|--------|--------|-----------------|---------------------------|
| A — Local demo maintenu | Moyenne | Faible | Faible | Non | Possible si objectif présentation uniquement |
| B — Prototype connecté minimal | Forte | Moyen | Moyen | Non au départ | **Recommandé** |
| C — Prototype intégré CRM | Forte | Élevé | Élevé | Probable | Trop tôt |
| D — Architecture cible complète | Moyenne | Élevé | Élevé | À cadrer | Trop lourd maintenant |

---

## 8. Recommandation

**Recommandation : Scénario B — Prototype connecté minimal**

**Justification :**

- Interv360 est déjà présentable localement (Batches 01 à 04) ;
- la prochaine valeur structurante est de tester une persistance partagée ;
- l'API permettrait de clarifier le modèle sans aller jusqu'au CRM ;
- les données peuvent rester fictives ;
- le workflow nominal peut rester inchangé ;
- le risque reste maîtrisable si le périmètre est strict.

**Scénarios écartés comme prochaine étape :**

- **A** — pertinent si l'objectif reste uniquement la présentation sans évolution technique ;
- **C** — trop tôt, dépendances et gouvernance non cadrées ;
- **D** — trop lourd, décisions SI et métier insuffisantes.

---

## 9. Architecture cible minimale proposée

Cible minimale :

```text
Frontend React
   ↓
API backend minimale
   ↓
Persistance serveur
```

**Capacités backend minimales :**

- lire les demandes ;
- lire une demande ;
- appliquer une transition ;
- écrire un événement journal ;
- réinitialiser un seed fictif si mode démo ;
- exposer uniquement des données fictives dans un premier temps.

**Hors cible immédiate :**

- CRM ;
- IAM avancé ;
- production ;
- multi-tenant ;
- reporting avancé ;
- workflow alternatif ;
- données réelles.

---

## 10. Domaines à cadrer avant implémentation

Avant tout développement backend, cadrer :

### 10.1 Modèle de données

**Entités probables :**

- Request
- RequestStatus
- WorkflowEvent
- RequestDetail
- Priority
- Criticality

**Questions :**

- quels champs deviennent obligatoires ?
- quels champs restent fictifs ?
- comment modéliser le journal ?
- comment conserver l'historique des transitions ?

### 10.2 API

**Endpoints candidats :**

- `GET /requests`
- `GET /requests/:id`
- `POST /requests/:id/transitions`
- `GET /requests/:id/events`
- `POST /demo/reset`

**Questions :**

- REST ou autre approche ?
- quelle validation métier côté backend ?
- quelle responsabilité reste côté frontend ?

### 10.3 Persistance

**Options :**

- fichier JSON serveur pour prototype ;
- SQLite pour prototype local ;
- PostgreSQL pour cible plus sérieuse.

**Questions :**

- faut-il commencer très léger ?
- faut-il éviter PostgreSQL tant que le modèle n'est pas stabilisé ?
- quelle stratégie de seed fictif ?

### 10.4 Sécurité

À cadrer sans implémenter tout de suite :

- authentification nécessaire ou non en prototype ;
- séparation démonstration / production ;
- absence de données réelles ;
- journal d'audit ;
- protection des endpoints de transition.

### 10.5 Intégrations

À maintenir hors périmètre immédiat :

- CRM ;
- référentiel client ;
- outil ticketing ;
- messagerie ;
- IAM d'entreprise.

---

## 11. Garde-fous pour un futur backend

Un futur cycle backend devra respecter :

- données fictives uniquement au départ ;
- pas de CRM sans décision dédiée ;
- pas de données personnelles réelles ;
- pas de production ;
- pas d'intégration externe implicite ;
- tests backend obligatoires ;
- validation des transitions côté backend ;
- journal serveur explicite ;
- rollback ou reset de démonstration.

---

## 12. Décisions ouvertes

| Décision | Statut | Commentaire |
|----------|--------|-------------|
| Backend ou local maintenu ? | Recommandation B | À confirmer avant implémentation |
| Type d'API | Ouvert | REST probable |
| Persistance | Ouvert | JSON / SQLite / PostgreSQL à arbitrer |
| CRM | Hors périmètre | Décision séparée nécessaire |
| Authentification | Hors périmètre immédiat | À cadrer plus tard |
| Données réelles | Exclues | Prototype fictif uniquement |
| Statuts hors nominal | Exclus | Décision métier séparée |

---

## 13. Décision proposée

| Scénario | Décision |
|----------|----------|
| A — Local demo maintenu | Reporté (suffisant si présentation seule) |
| B — Prototype connecté minimal | **Recommandé** |
| C — Prototype intégré CRM | Écarté pour l'immédiat |
| D — Architecture cible complète | Écarté pour l'immédiat |

**Décision :** le prochain palier recommandé est un **prototype connecté minimal**, limité à une API et une persistance serveur sur données fictives.

Aucune implémentation n'est lancée par ce document.

---

## 14. Prochaine étape recommandée

**Cycle recommandé :** `architecture/interv360-backend-data-model-decision`

**Objectif :**

- décider le modèle de données cible minimal ;
- cadrer les entités ;
- cadrer le journal ;
- cadrer les transitions ;
- ne pas implémenter encore.

**Alternative :** `architecture/interv360-backend-technical-stack-decision`

**Objectif :**

- choisir le type de backend, API et persistance.

**Ordre recommandé :**

1. modèle de données ;
2. choix technique ;
3. prototype backend minimal.

---

## 15. Validation

| Contrôle | Résultat |
|----------|----------|
| Code applicatif modifié | Non |
| Backend implémenté | Non |
| API créée | Non |
| DB créée | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Publication Notion | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 16. Décision finale

Ce cycle clôt le cadrage initial de la trajectoire backend.

Le scénario recommandé est :

**Prototype connecté minimal sur données fictives.**

Le passage à l'implémentation reste conditionné à des décisions séparées sur :

- modèle de données ;
- stack technique ;
- stratégie de persistance ;
- garde-fous de sécurité.
