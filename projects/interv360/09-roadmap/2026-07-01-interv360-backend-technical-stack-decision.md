# Interv360 — Backend Technical Stack Decision

**Projet** : Interv360
**Cycle** : Backend Technical Stack Decision
**Mode** : SFIA Fast Delivery documentaire
**Statut** : Décision architecture technique
**Branche** : `architecture/interv360-backend-technical-stack-decision`

---

## 1. Objectif

Ce document décide la stack technique minimale à retenir pour préparer un futur prototype backend connecté Interv360.

Il ne lance aucune implémentation.

L'objectif est de cadrer :

- le type de backend ;
- l'approche API ;
- la stratégie de persistance ;
- l'approche de tests ;
- les garde-fous techniques ;
- les décisions à prendre avant tout prototype backend.

---

## 2. Point de départ

Le cadrage backend ([`interv360-backend-target-framing.md`](./interv360-backend-target-framing.md)) recommande un **prototype connecté minimal**.

Le modèle de données minimal retenu ([`interv360-backend-data-model-decision.md`](./interv360-backend-data-model-decision.md)) :

- `Request`
- `RequestDetail`
- `WorkflowEvent`
- `RequestStatus`
- `Priority`
- `Criticality`
- `DemoSeed`

Le futur prototype doit rester limité à des **données fictives**.

Il doit permettre de tester :

- lecture des demandes ;
- lecture d'une demande ;
- application d'une transition ;
- écriture d'un événement journal ;
- reset d'un seed fictif.

L'app frontend actuelle reste **React + TypeScript + Vite** avec persistance locale (`localStorage`) et tests Vitest.

---

## 3. Réflexion d'optimisation SFIA

Le sujet reste structurant, mais il est maintenant suffisamment cadré pour décider la stack technique.

Il ne faut pas encore implémenter.

Décision de méthode :

- conserver **Fast Delivery documentaire** ;
- produire un seul document de décision technique ;
- ne pas créer de backend ;
- ne pas écrire de code ;
- ne pas choisir une stack trop ambitieuse.

---

## 4. Critères de décision

La stack retenue doit être :

- simple ;
- cohérente avec l'app React / TypeScript existante ;
- rapide à prototyper ;
- testable ;
- adaptée aux données fictives ;
- compatible avec un futur contrat API ;
- suffisamment réaliste pour préparer une trajectoire backend ;
- sans surdimensionnement production.

Elle ne doit pas introduire trop tôt :

- cloud obligatoire ;
- IAM avancé ;
- CRM ;
- architecture microservices ;
- base de données complexe ;
- déploiement production ;
- observabilité avancée.

---

## 5. Options backend étudiées

### Option A — Node.js / TypeScript minimal

**Description :**

- backend Node.js ;
- TypeScript ;
- API REST légère ;
- runtime proche du frontend ;
- logique métier backend testable.

**Avantages :**

- cohérent avec l'écosystème actuel ;
- faible friction ;
- réutilisation possible de types ou conventions ;
- rapide pour prototype ;
- bonne testabilité.

**Limites :**

- nécessite cadrage strict pour éviter un backend trop improvisé ;
- nécessite choix de framework ou serveur minimal.

---

### Option B — Python FastAPI

**Description :**

- backend Python ;
- FastAPI ;
- API REST documentable ;
- validation de modèles.

**Avantages :**

- très lisible pour API ;
- documentation automatique ;
- bon pour prototype API.

**Limites :**

- écosystème différent du frontend ;
- duplication de types TypeScript / Python ;
- moins cohérent avec l'existant immédiat.

---

### Option C — Backend serverless

**Description :**

- fonctions serverless ;
- endpoints légers ;
- persistance associée.

**Avantages :**

- possible trajectoire cloud ;
- pas de serveur dédié.

**Limites :**

- trop tôt pour le prototype ;
- dépendance plateforme ;
- complexité de déploiement ;
- moins adapté au cadre local contrôlé.

---

### Option D — Pas de backend pour l'instant

**Description :**

- conserver uniquement le démonstrateur local ;
- reporter la stack technique.

**Avantages :**

- aucun risque ;
- pas de complexité.

**Limites :**

- ne permet pas de progresser vers prototype connecté ;
- bloque le cadrage API / persistance.

---

## 6. Options de persistance étudiées

### Option 1 — JSON fichier serveur

**Description :**

- stockage dans un fichier JSON côté backend ;
- seed fictif simple ;
- reset facile.

**Avantages :**

- très simple ;
- aucun SQL ;
- parfait pour prototype démo ;
- cohérent avec données fictives ;
- aligné avec le reset recommandé (vider journal + restaurer seed).

**Limites :**

- pas robuste ;
- pas représentatif d'une cible durable ;
- concurrence non traitée.

---

### Option 2 — SQLite

**Description :**

- base locale légère ;
- persistance structurée ;
- possible tests d'intégration.

**Avantages :**

- plus réaliste que JSON ;
- léger ;
- pas besoin d'infrastructure ;
- adapté à un prototype local.

**Limites :**

- introduit modèle relationnel ;
- peut pousser trop tôt vers schéma SQL ;
- nécessite arbitrage migrations.

---

### Option 3 — PostgreSQL

**Description :**

- base relationnelle cible plus sérieuse.

**Avantages :**

- proche production ;
- robuste ;
- extensible.

**Limites :**

- trop lourd pour un premier prototype fictif ;
- nécessite infra ;
- risque de ralentir la démarche.

---

## 7. Analyse comparative

### Backend

| Option | Simplicité | Réalisme prototype | Effort | Risque | Pertinence immédiate |
|--------|------------|-------------------|--------|--------|----------------------|
| Node.js / TypeScript | Forte | Forte | Faible à moyen | Moyen | **Recommandé** |
| Python FastAPI | Moyenne | Forte | Moyen | Moyen | Possible mais moins aligné |
| Serverless | Faible à moyenne | Moyenne | Moyen à élevé | Élevé | Trop tôt |
| Pas de backend | Forte | Faible | Faible | Faible | Report seulement |

### Persistance

| Option | Simplicité | Réalisme | Effort | Risque | Pertinence immédiate |
|--------|------------|----------|--------|--------|----------------------|
| JSON fichier | Très forte | Faible à moyen | Faible | Faible | **Recommandé pour POC backend** |
| SQLite | Forte | Moyen à fort | Moyen | Moyen | Étape suivante possible |
| PostgreSQL | Moyenne | Forte | Élevé | Moyen à élevé | Trop tôt |

---

## 8. Décision proposée

**Décision proposée :**

- **Backend :** Node.js / TypeScript
- **API :** REST minimale
- **Persistance initiale :** JSON fichier serveur
- **Tests :** tests unitaires + tests API
- **Données :** fictives uniquement
- **Mode :** prototype connecté local

**Justification :**

- cohérence avec l'écosystème React / TypeScript ;
- effort limité ;
- permet de valider API, transitions et journal ;
- évite de figer trop tôt un schéma SQL ;
- compatible avec un passage ultérieur vers SQLite ou PostgreSQL ;
- suffisamment réaliste pour tester le passage frontend → API → persistance.

---

## 9. Architecture technique minimale proposée

```text
Frontend React / TypeScript (Vite)
        ↓ REST
Backend Node.js / TypeScript (Express)
        ↓
JSON store fictif (requests, details, events)
```

**Responsabilités backend minimales :**

- charger les demandes fictives ;
- exposer la liste ;
- exposer le détail ;
- valider une transition ;
- mettre à jour le statut ;
- écrire un événement journal ;
- reset du seed démo.

**Responsabilités frontend conservées :**

- affichage ;
- filtres / recherche locaux ou côté frontend dans un premier temps ;
- sélection ;
- scénario guidé ;
- readiness ;
- présentation.

---

## 10. Framework backend à cadrer

Options Node.js possibles :

| Option | Description | Recommandation |
|--------|-------------|----------------|
| Express | Standard, simple, très connu | **Recommandé** |
| Fastify | Plus structuré / performance | Possible |
| Node HTTP natif | Très minimal | Trop artisanal |
| NestJS | Cadre complet | Trop lourd pour prototype |

**Décision proposée :** Express + TypeScript pour le prototype backend minimal.

**Justification :**

- simple ;
- connu ;
- suffisant ;
- peu prescriptif ;
- adapté à un prototype REST.

---

## 11. Tests backend

Tests attendus dans un futur prototype :

- lecture liste demandes ;
- lecture détail demande ;
- transition valide ;
- transition invalide refusée ;
- statut terminal STAT-06 refusé ;
- journal écrit après transition ;
- reset démo ;
- absence de données réelles.

**Approche proposée :**

- tests unitaires pour règles de transition ;
- tests API pour endpoints principaux (supertest ou équivalent) ;
- test reset seed.

Alignement avec l'app : Vitest côté frontend ; Vitest ou Jest côté backend (à trancher à l'implémentation, Vitest privilégié pour cohérence monorepo).

---

## 12. Garde-fous techniques

Un futur prototype backend devra respecter :

- données fictives uniquement ;
- pas de CRM ;
- pas d'authentification réelle ;
- pas de données personnelles ;
- pas de production ;
- pas de SQL au premier palier si JSON retenu ;
- validation backend des transitions ;
- reset démo explicite ;
- tests backend obligatoires ;
- séparation claire entre demo store et future persistance cible ;
- pas de STAT-05 / STAT-07 / STAT-08.

---

## 13. Décisions ouvertes

| Décision | Statut | Commentaire |
|----------|--------|-------------|
| Express vs Fastify | Express recommandé | À confirmer avant implémentation |
| JSON vs SQLite | JSON recommandé premier palier | SQLite possible en palier suivant |
| Monorepo app / backend | Ouvert | Probable dossier `projects/interv360/backend` |
| Partage types frontend / backend | Ouvert | Package partagé ou duplication prudente |
| Contrat API exact | Ouvert | Cycle suivant recommandé |
| Tests API (Vitest vs Jest) | Recommandés | Vitest privilégié pour cohérence |
| Port / CORS local | Ouvert | À cadrer avec contrat API |
| Stratégie reset journal | Recommandé vider | Aligné data model decision |

---

## 14. Décision proposée (synthèse)

- Retenir **Node.js / TypeScript**
- Retenir **Express** pour API REST minimale
- Retenir **JSON fichier serveur** pour premier palier
- Reporter **SQLite / PostgreSQL**
- Reporter **CRM / authentification**
- Imposer **tests backend** dès le prototype
- Maintenir **données fictives uniquement**

---

## 15. Prochaine étape recommandée

**Cycle recommandé :** `architecture/interv360-backend-api-contract-framing`

Objectif :

- cadrer les endpoints ;
- cadrer les payloads ;
- cadrer les erreurs ;
- cadrer les règles de transition ;
- ne pas implémenter encore.

**Alternative :** `delivery/interv360-backend-minimal-prototype`

Uniquement si l'on accepte de cadrer le contrat API directement dans le cycle d'implémentation.

**Ordre recommandé :**

1. modèle de données ;
2. stack technique (ce cycle) ;
3. contrat API ;
4. prototype backend minimal.

---

## 16. Validation

| Contrôle | Résultat |
|----------|----------|
| Code applicatif modifié | Non |
| Backend implémenté | Non |
| API créée | Non |
| DB créée | Non |
| SQL écrit | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 17. Décision finale

Ce cycle clôt la décision de stack technique backend minimale.

**Stack retenue :**

```text
Node.js / TypeScript
Express
REST minimale
JSON fichier serveur
Tests backend obligatoires
```

Le passage à l'implémentation reste conditionné à une décision séparée sur :

- contrat API ;
- payloads ;
- erreurs ;
- stratégie de reset ;
- organisation repo backend.
