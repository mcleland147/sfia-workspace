# Interv360 — Request Model Productization

**Projet** : Interv360  
**Cycle** : Request Model Productization  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-05 en cours  
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
| INC-PROD-03 | Ajouter validation API ciblée | Non retenu — couvert par les tests INC-PROD-02 |
| INC-PROD-04 | Mettre à jour documentation / runbook | Réalisé |
| INC-PROD-05 | Préparer PR du batch | En cours |

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

**INC-PROD-04** — documentation / runbook :

- documentation des champs métier ajoutés au détail de demande ;
- clarification du mapping `siteLabel` comme exposition site côté `Request` ;
- clarification de `businessImpact` comme impact métier distinct de `impact` ;
- mention de la note dev sur les bases SQLite locales préexistantes ;
- aucune modification de code.

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

**INC-PROD-05** : préparer la PR finale du batch `delivery/interv360-request-model-productization`.

---

## 12. Payload détail productisé

Le payload détail de demande expose désormais les champs métier suivants :

| Champ | Niveau | Description |
|-------|--------|-------------|
| `category` | `RequestDetail` | Catégorie métier de la demande |
| `requestedDate` | `RequestDetail` | Date métier de demande |
| `equipmentLabel` | `RequestDetail` | Équipement ou objet concerné |
| `businessImpact` | `RequestDetail` | Impact métier productisé |
| `siteLabel` | `Request` | Site fictif concerné par la demande |

Clarification :

- `businessImpact` complète `impact`, sans le remplacer ;
- `impact` reste un libellé court existant ;
- `siteLabel` reste le champ canonique exposé côté `Request` pour le site ;
- aucun champ `userId`, `crmReference`, `requesterName` ou `assignedTechnician` n’est introduit.

---

## 13. Préparation PR intégrée

### Titre proposé

`Productize Interv360 request detail model`

### Description proposée

```markdown
## Summary
This PR productizes the Interv360 request detail model after backend SQLite persistence and local API hardening.
It includes a controlled product batch:
1. Request model scope decision
   - selected minimal product fields;
   - deferred user/role/planning fields;
   - excluded CRM/user identifiers.
2. Backend + SQLite implementation
   - adds `requestedDate`, `equipmentLabel`, and `businessImpact` to `RequestDetail`;
   - keeps `category`;
   - keeps `siteLabel` as the site-facing field on `Request`;
   - keeps `businessImpact` distinct from the existing short `impact` field;
   - updates SQLite schema, seed, repository, and reset behavior.
3. Documentation / runbook
   - documents productized request detail payload;
   - documents SQLite local database note;
   - updates API contract note and E2E runbook checks.
## Validation
- Backend build: OK
- Backend tests: 27 passed
- Frontend build: OK
- Frontend tests: 81 passed
- API curl: OK — fields exposed and reset validated
- SQLite persistence: OK
- Frontend source unchanged
## Guardrails
No authentication, users, roles, CRM integration, real data, new workflow status, STAT-05/07/08, PostgreSQL, heavy ORM, frontend source change, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

### Fichiers inclus dans la PR

| Fichier | Incrément |
|---------|-----------|
| `projects/interv360/07-delivery/request-model-productization.md` | Lot + batch |
| `projects/interv360/backend/src/domain/types.ts` | INC-PROD-02 |
| `projects/interv360/backend/src/seed/demoSeed.ts` | INC-PROD-02 |
| `projects/interv360/backend/src/persistence/sqliteSchema.ts` | INC-PROD-02 |
| `projects/interv360/backend/src/persistence/sqliteSeed.ts` | INC-PROD-02 |
| `projects/interv360/backend/src/store/demoStore.ts` | INC-PROD-02 |
| `projects/interv360/backend/test/api.test.ts` | INC-PROD-02 |
| `projects/interv360/backend/test/persistence.test.ts` | INC-PROD-02 |
| `projects/interv360/backend/README.md` | INC-PROD-04 |
| `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md` | INC-PROD-04 |
| `projects/interv360/09-architecture/interv360-backend-api-contract-framing.md` | INC-PROD-04 |

### Vérifications pré-PR

| Contrôle | Résultat |
|----------|----------|
| Diff limité au lot attendu (11 fichiers) | OK |
| Frontend source (`app/src`) non modifié | OK |
| Contrat API `/api/v1` conservé | OK |
| Persistance SQLite adaptée | OK |
| Backend build | OK |
| Backend tests | OK — 27 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |

---

## 14. Statut push / PR

À compléter après push.

| Élément | Valeur |
|---------|--------|
| Push | À compléter |
| PR créée automatiquement | À compléter |
| URL PR ou comparaison | À compléter |
| Cible | `main` |
| Source | `delivery/interv360-request-model-productization` |
| Merge automatique | Non |
