# Interv360 — Request Model Productization

**Projet** : Interv360  
**Cycle** : Request Model Productization  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-02 réalisé  
**Branche** : `delivery/interv360-request-model-productization`

---

## 1. Objectif

Ce batch démarre la productisation du modèle métier Interv360 après :

- clôture Demo MVP ;
- backend SQLite persistant ;
- API `/api/v1` conservée ;
- mode API local stabilisé ;
- runbook API reproductible.

L’objectif est d’enrichir de manière ciblée le modèle `Request` / `RequestDetail`, sans ouvrir auth, users, rôles, CRM, données réelles ou workflow étendu.

---

## 2. Décision roadmap intégrée

Aucune PR dédiée n’est créée pour la décision roadmap post-persistance.

La décision est intégrée dans ce batch afin d’éviter une étape administrative intermédiaire.

Décision :

> prioriser un batch produit court autour du **modèle métier + API produit**, avant auth/users/rôles.

Raison :

- le socle technique est prêt ;
- auth/users/rôles est structurant et doit rester différé ;
- le cœur produit doit d’abord clarifier ce qu’est une demande Interv360 ;
- le batch permet de regrouper plusieurs incréments cohérents avant une PR finale.

Options différées (référence intégrée) :

| Option | Verdict |
|--------|---------|
| Auth / users / rôles | Différé — `architecture/interv360-auth-and-user-framing` |
| Workflow étendu (STAT-05/07/08) | Différé — modèle métier d’abord |
| Industrialisation | Différé |
| UX API isolée | Support uniquement si besoin produit clair |

---

## 3. Périmètre du batch

Le batch peut inclure :

- décision des champs métier minimaux ;
- enrichissement limité de `Request` / `RequestDetail` ;
- adaptation SQLite ;
- adaptation du seed fictif ;
- validation API ciblée ;
- tests backend ;
- documentation.

Le batch ne doit pas inclure :

- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- PostgreSQL ;
- ORM lourd ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte frontend ;
- refonte API ;
- production / déploiement.

---

## 4. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Borner les champs métier minimaux | Réalisé |
| INC-PROD-02 | Implémenter les champs côté backend + SQLite | Réalisé |
| INC-PROD-03 | Ajouter validation API ciblée | Non retenu — couvert par tests INC-PROD-02 |
| INC-PROD-04 | Mettre à jour documentation / runbook | À faire |
| INC-PROD-05 | Préparer PR du batch | À venir |

---

## 5. INC-PROD-01 — Décision champs métier minimaux

### Objectif

- choisir peu de champs ;
- privilégier les champs utiles au produit ;
- éviter les champs utilisateurs, CRM, données réelles, rôles ou workflow étendu ;
- rester compatible avec le seed fictif.

### Candidats évalués

| Champ candidat | Type | Localisation | Valeur produit | Risque | Décision |
|----------------|------|--------------|----------------|--------|----------|
| `category` | string | RequestDetail | Classer le type de demande | Faible | **Retenu** — déjà présent, à productiser explicitement |
| `site` | string | Request | Situer la demande fictive | Faible | **Retenu** — aligner sur `siteLabel` existant |
| `requestedDate` | ISO string | RequestDetail | Donner une temporalité métier | Faible | **Retenu** |
| `plannedInterventionDate` | ISO string | RequestDetail | Préparer planification simple | Moyen | **Différé** |
| `equipmentLabel` | string | RequestDetail | Donner un objet d’intervention | Faible | **Retenu** |
| `businessImpact` | string | RequestDetail | Qualifier l’impact métier | Moyen | **Retenu** — distinct de `impact` démo existant |
| `requesterName` | string | RequestDetail | Simuler un demandeur | Moyen | **Différé** |
| `assignedTechnician` | string | RequestDetail | Simuler assignation | Moyen | **Différé** — `assignedTechnicianLabel` existe déjà sur Request |
| `crmReference` | string | RequestDetail | Lien CRM | Fort | **Exclu** |
| `userId` | string | RequestDetail | Lien utilisateur | Fort | **Exclu** |

### Décision ferme

**Retenir uniquement :**

- `category`
- `site`
- `requestedDate`
- `equipmentLabel`
- `businessImpact`

**Différer :**

- `plannedInterventionDate`
- `requesterName`
- `assignedTechnician`

**Exclure :**

- `crmReference`
- `userId`

### Justification

| Champ | Justification |
|-------|---------------|
| `category` | Classer la demande (panne, maintenance, suivi) — renforce la lecture produit sans nouveau statut |
| `site` | Donner un contexte métier fictif — s’appuie sur `siteLabel` déjà porté par Request |
| `requestedDate` | Temporaliser la demande côté détail — complète `createdAt` technique |
| `equipmentLabel` | Préciser l’objet d’intervention — rend la demande plus crédible produit |
| `businessImpact` | Mieux qualifier l’impact métier — complète priorité/criticité sans changer le workflow |

### Point d’attention INC-PROD-02

Le socle actuel contient déjà :

- `category`, `impact`, `channel`, `demoCenter` sur `RequestDetail` ;
- `siteLabel`, `assignedTechnicianLabel` sur `Request`.

INC-PROD-02 devra **productiser** les champs retenus (exposition API cohérente, seed, SQLite) plutôt que dupliquer :

- `site` ↔ formaliser `siteLabel` ou ajouter alias documenté ;
- `businessImpact` ↔ champ distinct de `impact` (libellé démo court vs impact métier productisé).

---

## 6. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Champs métier minimaux décidés | OK |
| Nombre de champs limité | OK — 5 champs retenus |
| SQLite adaptée | OK |
| Seed fictif adapté | OK |
| API `/api/v1` conservée | OK |
| Tests backend adaptés | OK |
| Frontend source non modifié ou justification mineure | OK — non modifié par défaut |
| Pas d’auth / users / rôles | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| Champs retenus | `category`, `siteLabel` comme exposition site, `requestedDate`, `equipmentLabel`, `businessImpact` |
| Champs effectivement ajoutés | `requestedDate`, `equipmentLabel`, `businessImpact` |
| Champs existants productisés | `category`, `siteLabel` |
| Champs différés | `plannedInterventionDate`, `requesterName`, `assignedTechnician` |
| Champs exclus | `crmReference`, `userId` |
| SQLite | Colonnes `requested_date`, `equipment_label`, `business_impact` sur `request_details` ; migration `ALTER TABLE` ciblée si base locale existante |
| Seed | Données fictives enrichies sur les 3 demandes démo |
| API contract | Conservé — enrichissement payload sans rupture |
| Frontend | Non modifié |

---

## 8. Changements réalisés

**INC-PROD-01** — documentation uniquement :

- création du document de batch ;
- intégration de la décision roadmap post-persistance ;
- décision ferme sur les champs métier minimaux.

**INC-PROD-02** — backend + SQLite :

- ajout de `requestedDate`, `equipmentLabel`, `businessImpact` sur `RequestDetail` ;
- conservation de `category` ;
- conservation de `siteLabel` comme exposition site côté `Request` ;
- conservation de `impact` comme libellé démo court distinct de `businessImpact` ;
- adaptation du schéma SQLite (`sqliteSchema.ts`) avec migration `ALTER TABLE` ciblée ;
- adaptation du seed et du mapping store (`sqliteSeed.ts`, `demoStore.ts`) ;
- adaptation des tests backend (`api.test.ts`, `persistence.test.ts`).

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 27 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| API curl | OK — `requestedDate`, `equipmentLabel`, `businessImpact`, `category`, `siteLabel` |
| Reset API | OK |
| Persistance SQLite | OK — tests persistence + migration colonnes |

---

## 10. Limites assumées

- données fictives uniquement ;
- pas d’authentification ;
- pas d’utilisateurs ;
- pas de rôles ;
- pas de CRM ;
- pas de workflow étendu ;
- pas de nouveaux statuts ;
- pas de production ;
- INC-PROD-02 limité au backend ; frontend inchangé ;
- bases SQLite locales existantes : exécuter un reset démo ou supprimer `data/interv360.sqlite` pour recharger le seed enrichi si colonnes migrées vides.

---

## 11. Prochaine étape recommandée

**INC-PROD-04** : mettre à jour documentation / runbook (INC-PROD-03 validation API ciblée à arbitrer selon couverture tests).
