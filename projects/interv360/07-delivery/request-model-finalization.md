# Interv360 — Request Model Finalization

**Projet** : Interv360  
**Cycle** : Request Model Finalization  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 3  
**Branche** : `delivery/interv360-request-model-finalization`

---

## 1. Objectif

Ce lot stabilise le modèle métier `Request` afin de disposer d'une demande d'intervention exploitable côté produit.

L'objectif est de sortir d'un modèle encore partiellement démonstratif et de consolider les champs structurants nécessaires au suivi métier, à l'affichage UI, aux validations API et aux futurs durcissements produit.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 prioritaire est la finalisation du modèle métier `Request` ;
- la cible est un MVP produit structuré.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend SQLite persistant ;
- d'une API `/api/v1` stabilisée ;
- d'un modèle demande déjà enrichi ;
- d'un frontend connecté en mode API ;
- d'un mode local conservé ;
- d'un workflow métier enrichi ;
- d'un audit trail enrichi ;
- d'une fiche demande affichant déjà plusieurs champs métier ;
- de données fictives cohérentes pour la démonstration.

Limite actuelle :

> le modèle `Request` reste à stabiliser comme modèle métier final du MVP.

---

## 4. Problème à résoudre

Le produit ne peut pas être considéré comme finalisable tant que la demande d'intervention ne porte pas clairement les informations métier structurantes :

- qui demande ;
- sur quel site ;
- quel équipement ou objet est concerné ;
- quelle catégorie métier ;
- quelle priorité ;
- quelle criticité ;
- quel impact métier ;
- quelle affectation éventuelle ;
- quel statut ;
- quel historique.

---

## 5. Périmètre du lot

À livrer :

- cadrage du modèle `Request` cible ;
- alignement backend / frontend / SQLite / API ;
- consolidation des champs métier structurants ;
- seed fictif mis à jour si nécessaire ;
- mapping API cohérent ;
- fiche demande UI ajustée si nécessaire ;
- validations backend/API renforcées si nécessaire ;
- tests backend ;
- tests frontend ;
- documentation README / runbook.

---

## 6. Hors scope

Ce lot n'introduit pas :

- auth réelle ;
- login réel ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- multi-tenant ;
- moteur BPMN ;
- nouveau statut ;
- `STAT-08` ;
- nouvelle action workflow métier ;
- nouveau lot audit trail ;
- administration des utilisateurs ;
- reporting avancé ;
- notifications.

---

## 7. Modèle Request cible minimal

Modèle cible à confirmer pendant delivery :

```ts
type Request = {
  id: string;
  title: string;
  description: string;
  requesterName: string;
  requesterTeam?: string;
  siteLabel: string;
  equipmentLabel: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  criticality?: "low" | "medium" | "high" | "critical";
  impact: string;
  businessImpact: string;
  assignedToUserId?: string;
  assignedToDisplayName?: string;
  status: RequestStatus;
  requestedDate: string;
  createdAt: string;
  updatedAt?: string;
};
```

Points à décider :

- conserver les noms existants si déjà stabilisés ;
- éviter les renommages massifs inutiles ;
- privilégier l'alignement backend/frontend/API ;
- garder les données fictives ;
- éviter les champs trop enterprise pour ce lot.

---

## 8. SQLite cible

Table principale à stabiliser :

`requests`

Champs à vérifier / compléter selon l'existant :

| Champ | Objectif |
|-------|----------|
| `requester_name` | Identifier le demandeur |
| `requester_team` | Identifier l'équipe demandeuse si utile |
| `site_label` | Site concerné |
| `equipment_label` | Équipement ou objet concerné |
| `category` | Catégorie métier |
| `priority` | Priorité opérationnelle |
| `criticality` | Criticité métier si retenue |
| `impact` | Impact court / opérationnel |
| `business_impact` | Impact métier |
| `assigned_to_user_id` | Affectation optionnelle à un utilisateur backend |
| `assigned_to_display_name` | Snapshot affichage affectation si retenu |
| `requested_date` | Date de demande |
| `updated_at` | Date de dernière mise à jour si utile |

Contraintes :

- migration compatible avec les données existantes ;
- pas de suppression brutale ;
- seed fictif cohérent ;
- pas de données réelles.

---

## 9. API cible

Endpoints existants à préserver :

- `GET /api/v1/requests`
- `GET /api/v1/requests/:id`
- `POST /api/v1/requests/:id/transitions`
- `GET /api/v1/requests/:id/events`
- `POST /api/v1/demo/reset`

Objectif :

- enrichir les payloads requests si nécessaire ;
- conserver la compatibilité frontend ;
- éviter les ruptures non nécessaires ;
- ne pas créer de CRUD complet dans ce lot sauf décision explicite ;
- ne pas créer de formulaire création demande si cela élargit trop le scope.

---

## 10. Frontend cible

À préserver :

- liste des demandes ;
- fiche demande ;
- workflow actions ;
- journal enrichi ;
- mode local ;
- mode API ;
- permissions existantes ;
- reset admin.

À améliorer si nécessaire :

- affichage des champs métier structurants ;
- cohérence backend/local ;
- lisibilité de la fiche demande ;
- fallback legacy si champ absent ;
- tests UI.

---

## 11. Décision initiale

Décision proposée pour rester Fast Track :

- stabiliser d'abord le modèle Request existant ;
- compléter seulement les champs manquants utiles au MVP ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas ajouter de nouveau statut ;
- ne pas modifier le workflow ;
- ne pas introduire de données réelles ;
- conserver le mode local ;
- conserver le mode API ;
- conserver l'audit trail existant ;
- PR unique en fin de lot.

---

## 12. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| RM-01 | Cadrage opérationnel modèle Request | Réalisé |
| RM-02 | Audit modèle existant et décision champs cibles | Réalisé |
| RM-03 | Backend SQLite/API Request finalisé | Réalisé |
| RM-04 | Frontend fiche/liste Request alignées | Réalisé |
| RM-05 | Tests backend/frontend et non-régression | Réalisé |
| RM-06 | Documentation runbook/README | Réalisé |
| RM-07 | Préparation PR unique | Réalisé |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Modèle Request cible cadré | OK |
| Audit modèle existant réalisé | OK |
| Champs cibles décidés | OK |
| Backend Request aligné | OK |
| SQLite Request aligné | OK |
| API Request alignée | OK |
| Frontend fiche/liste alignés | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Audit trail conservé | OK |
| Permissions conservées | OK |
| Backend tests | OK — 121 tests |
| Frontend tests | OK — 175 tests |
| Backend build | OK |
| Frontend build | OK |
| Runbook mis à jour | OK |
| README frontend mis à jour | OK |
| README backend mis à jour | OK |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |

---

## 14. Garde-fous

Le lot doit préserver :

- users backend ;
- session locale ;
- audit trail enrichi ;
- workflow existant ;
- statuts existants ;
- actions existantes ;
- permissions existantes ;
- reset admin existant ;
- mode local ;
- mode API.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- CRUD complet non cadré ;
- formulaire création demande non cadré.

---

## 15. Décision RM-01

RM-01 valide le cadrage opérationnel du Lot 3.

Décisions :

- stabiliser le modèle Request existant ;
- compléter uniquement les champs utiles au MVP produit ;
- aligner backend / SQLite / API / frontend / local ;
- conserver le workflow existant ;
- conserver l'audit trail enrichi ;
- conserver les permissions existantes ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas introduire de nouveau statut ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles.

---

## 15.1. Audit RM-02 — modèle existant

RM-02 audite le modèle `Request` existant avant implémentation.

### 15.1.1. Backend

| Élément | État actuel |
|---------|-------------|
| Type liste | `DemoRequest` dans `backend/src/domain/types.ts` |
| Type détail | `DemoRequestDetail` dans `backend/src/domain/types.ts` |
| Table principale | `requests` — `id`, `title`, `status`, `priority`, `criticality`, `customer_label`, `site_label`, `assigned_technician_label`, `created_at`, `updated_at`, `detail_id`, `is_demo` |
| Table détail | `request_details` — `id`, `request_id`, `category`, `channel`, `impact`, `requested_date`, `equipment_label`, `business_impact`, `demo_center`, `description`, `readonly_blocks_json` |
| Seed demandes | `backend/src/seed/demoSeed.ts` — 3 demandes (`SAV-DEMO-001` à `003`) + détails associés |
| Mapping API liste | `GET /api/v1/requests` → `{ items: DemoRequest[] }` via `listRequests()` / `rowToRequest()` |
| Mapping API détail | `GET /api/v1/requests/:id` → `{ request: DemoRequest, detail: DemoRequestDetail }` via `getRequestWithDetail()` |

Champs backend liste (`DemoRequest`) :

- `id`, `title`, `status`, `priority`, `criticality`, `customerLabel`, `siteLabel`, `assignedTechnicianLabel`, `createdAt`, `updatedAt`, `detailId`, `isDemo`

Champs backend détail (`DemoRequestDetail`) :

- `id`, `requestId`, `category`, `channel`, `impact`, `requestedDate`, `equipmentLabel`, `businessImpact`, `demoCenter`, `description`, `readonlyBlocks`

Enums actuels :

- `priority` : `"low" | "medium" | "high"`
- `criticality` : `"standard" | "sensitive" | "urgent"`

Absents côté backend :

- `requesterName`, `requesterTeam`
- `assignedToUserId`, `assignedToDisplayName`
- champs métier structurants dans la réponse liste (catégorie, équipement, impact métier, etc.)

### 15.1.2. Frontend

| Élément | État actuel |
|---------|-------------|
| Type demande frontend | `DemoRequest` aplati dans `app/src/domain/requestStatus.ts` |
| Repository local | `localRequestsRepository.ts` + seed `app/src/seed/demoRequests.ts` |
| Repository API | `apiRequestsRepository.ts` — mappe `{ request, detail }` vers `DemoRequest` aplati |
| Liste demandes | `RequestsList.tsx` — `id`, `title`, `status`, badges priorité/criticité, `customerLabel`, `siteLabel`, `assignedTechnicianLabel` |
| Fiche détail | `RequestDetail.tsx` — client, site, date demande, statut, priorité, criticité, catégorie, canal, impact, impact métier, équipement, technicien, description |
| Recherche / filtres | `requestListFilters.ts` + `buildRequestSearchHaystack()` — filtre statut ; recherche sur id, titre, statut, priorité, criticité, labels, `customerLabel`, `siteLabel`, `categoryLabel`, `channelLabel`, `impactLabel` |

Champs frontend (`DemoRequest`) :

- obligatoires de base : `id`, `title`, `customerLabel`, `siteLabel`, `status`, `priority`, `criticality`
- métier optionnels : `categoryLabel`, `channelLabel`, `impactLabel`, `requestedDate`, `equipmentLabel`, `businessImpact`, `siteDetailLabel`, `assignedTechnicianLabel`, `description`, `createdAtLabel`
- parcours readonly embarqué : qualification, planning, intervention, report (hors périmètre modèle Request MVP)

Mapping API :

- liste : `mapListItemToDemoRequest()` — champs réduits (pas de catégorie/équipement tant que le détail n'est pas chargé)
- détail : `mapApiDetailToDemoRequest()` — fusion `request` + `detail` + `readonlyBlocks`
- naming frontend : suffixe `Label` (`categoryLabel`, `impactLabel`, `customerLabel`) vs noms backend (`category`, `impact`, `customerLabel`)

### 15.1.3. Tests existants verrouillant le modèle

| Zone | Tests | Champs couverts |
|------|-------|-----------------|
| Backend API | `api.test.ts` | `siteLabel`, `category`, `requestedDate`, `equipmentLabel`, `businessImpact`, `impact` |
| Backend persistence | `persistence.test.ts` | migration et persistance `requestedDate`, `equipmentLabel`, `businessImpact` |
| Frontend API repo | `apiRequestsRepository.test.ts` | mapping liste/détail, champs productisés |
| Frontend intégration | `App.apiMode.test.tsx`, `App.smoke.test.tsx` | affichage et parcours avec champs métier |

Tests à prévoir en RM-03/RM-04 :

- `requesterName`, `requesterTeam` si ajoutés ;
- `assignedToUserId` / `assignedToDisplayName` ;
- alignement seed local/backend ;
- non-régression liste, fiche, recherche, mode API/local.

### 15.1.4. Écarts identifiés

| Sujet | Écart | Décision |
|-------|-------|----------|
| Demandeur | `customerLabel` représente un client/organisation fictif, pas une personne demandeuse ; pas de `requesterName` ni `requesterTeam` | Ajouter `requesterName` et `requesterTeam?` ; conserver `customerLabel` en alias legacy |
| Affectation | `assignedTechnicianLabel` est un libellé texte libre, sans lien `users` backend | Ajouter `assignedToUserId?` et `assignedToDisplayName?` ; conserver `assignedTechnicianLabel` en legacy |
| Catégorie | Backend `category` vs frontend `categoryLabel` | Canon API : `category` ; mapping frontend inchangé via `categoryLabel` |
| Canal / impact | Backend `channel` / `impact` vs frontend `channelLabel` / `impactLabel` | Conserver les noms backend ; mapping frontend inchangé |
| Priorité | Enum existant `low/medium/high` ; pas de valeur `critical` | Conserver l'enum existant ; ne pas introduire `critical` |
| Criticité | Enum existant `standard/sensitive/urgent` ; distinct de la priorité | Conserver l'enum existant ; ne pas le fusionner avec la priorité |
| Request vs RequestDetail | Split SQLite et API `{ request, detail }` vs modèle frontend aplati | Conserver le split SQLite ; exposer un contrat API cohérent ; mapper côté frontend |
| Backend vs frontend | Seed local et seed backend divergent sur certaines valeurs (`SAV-DEMO-002`, `SAV-DEMO-003`, équipement `SAV-DEMO-001`) | Réaligner les seeds en RM-03/RM-04 sans données réelles |
| Liste API | `GET /requests` n'expose pas les champs détail utiles à la liste | Enrichir progressivement la liste si utile, sans rupture ; priorité au détail |

---

## 15.2. Décision RM-02 — champs cibles MVP

RM-02 fixe les champs cibles du modèle `Request` pour le MVP.

### Champs conservés

| Champ API / domaine | Décision | Justification |
|---------------------|----------|---------------|
| `id` | Conservé | Identifiant stable de demande |
| `title` | Conservé | Libellé court exploitable en liste |
| `description` | Conservé | Description métier de la demande (`request_details.description`) |
| `status` | Conservé | Cycle de vie workflow |
| `customerLabel` | Conservé (legacy) | Organisation cliente fictive déjà affichée |
| `siteLabel` | Conservé | Site concerné |
| `equipmentLabel` | Conservé | Équipement ou objet concerné |
| `category` | Conservé | Catégorie métier ; frontend via `categoryLabel` |
| `channel` | Conservé | Canal de demande ; frontend via `channelLabel` |
| `priority` | Conservé | Priorité opérationnelle `low/medium/high` |
| `criticality` | Conservé | Criticité métier `standard/sensitive/urgent` |
| `impact` | Conservé | Impact court / opérationnel |
| `businessImpact` | Conservé | Impact métier |
| `requestedDate` | Conservé | Date de demande |
| `createdAt` | Conservé | Date technique de création |
| `updatedAt` | Conservé | Date de dernière mise à jour (déjà persistée) |
| `demoCenter` | Conservé | Centre démo ; frontend via `siteDetailLabel` |
| `assignedTechnicianLabel` | Conservé (legacy) | Libellé technicien existant, maintenu pour compatibilité |

### Champs à ajouter ou aligner

| Champ cible | Décision | Justification |
|-------------|----------|---------------|
| `requesterName` | Retenu | Identifier qui demande ; absent aujourd'hui |
| `requesterTeam` | Retenu optionnel | Équipe demandeuse simple ; absent aujourd'hui |
| `assignedToUserId` | Retenu optionnel | Référence utilisateur backend (`users`) pour affectation produit |
| `assignedToDisplayName` | Retenu optionnel | Snapshot d'affichage de l'affectation |

### Champs ou concepts non retenus dans ce lot

| Sujet | Décision |
|-------|----------|
| CRUD complet | Exclu |
| Formulaire création demande | Exclu |
| Données réelles | Exclues |
| CRM | Exclu |
| Multi-tenant | Exclu |
| Nouveau statut | Exclu |
| `STAT-08` | Exclu |
| Moteur BPMN | Exclu |
| Valeur `critical` sur `priority` | Reportée — enum existant suffisant |
| Renommage massif `customerLabel` | Reporté — conservé en legacy |
| Refonte `readonlyBlocks` | Hors périmètre Request MVP |

### Décision de structure

Décision :

- conserver le split SQLite existant `requests` / `request_details` ;
- ajouter les nouveaux champs métier au bon niveau (`requests` pour demandeur/affectation, `request_details` si plus cohérent pour `requesterTeam`) ;
- conserver la réponse API détail `{ request, detail }` ;
- enrichir les payloads sans rupture ;
- mapper vers le modèle frontend aplati existant ;
- éviter les renommages massifs non nécessaires ;
- documenter les champs legacy maintenus pour compatibilité.

### Décision affectation

Décision :

- ajouter une affectation optionnelle à un user backend ;
- utiliser `assignedToUserId` pour la référence ;
- utiliser `assignedToDisplayName` comme snapshot d'affichage ;
- conserver `assignedTechnicianLabel` pour compatibilité et transition douce ;
- ne pas créer de moteur d'assignation ;
- ne pas modifier les permissions.

### Décision priorité / criticité

Décision :

- conserver `priority` comme priorité opérationnelle `low/medium/high` ;
- conserver `criticality` comme criticité métier `standard/sensitive/urgent` ;
- ne pas fusionner priorité et criticité ;
- ne pas créer de moteur de scoring ;
- ne pas introduire WSJF ou scoring automatique dans ce lot.

### Décision finale RM-02

Le modèle cible à implémenter en RM-03/RM-04 est :

```ts
type Request = {
  id: string;
  title: string;
  description: string;
  requesterName: string;
  requesterTeam?: string;
  customerLabel: string;
  siteLabel: string;
  equipmentLabel: string;
  category: string;
  channel: string;
  priority: "low" | "medium" | "high";
  criticality: "standard" | "sensitive" | "urgent";
  impact: string;
  businessImpact: string;
  assignedToUserId?: string;
  assignedToDisplayName?: string;
  assignedTechnicianLabel?: string;
  status: RequestStatus;
  requestedDate: string;
  createdAt: string;
  updatedAt: string;
  demoCenter?: string;
};
```

Notes d'implémentation RM-03 :

- persister `requesterName` et `requesterTeam` via migration SQLite compatible ;
- peupler le seed fictif avec des valeurs cohérentes ;
- lier `assignedToUserId` à `user-technician` dans le seed si simple ;
- exposer les nouveaux champs dans `GET /api/v1/requests` et `GET /api/v1/requests/:id` ;
- conserver les champs legacy existants.

---

## 15.3. Changements RM-03

RM-03 aligne le backend SQLite/API sur le modèle `Request` cible.

Changements réalisés :

- enrichissement compatible du modèle backend `DemoRequest` ;
- ajout des colonnes SQLite sur `requests` :
  - `requester_name`
  - `requester_team`
  - `assigned_to_user_id`
  - `assigned_to_display_name`
- ajout des champs demandeur :
  - `requesterName`
  - `requesterTeam`
- ajout des champs affectation :
  - `assignedToUserId`
  - `assignedToDisplayName`
- conservation des champs legacy :
  - `customerLabel`
  - `assignedTechnicianLabel`
- conservation du split SQLite `requests` / `request_details` ;
- migration SQLite compatible via `addColumnIfMissing` ;
- seed backend enrichi avec des données fictives liées aux users existants ;
- mapping store/API enrichi pour la liste et le détail ;
- tests backend ajoutés/adaptés (`requestModelPersistence.test.ts`, `api.test.ts`, `persistence.test.ts`) ;
- aucune modification frontend ;
- aucune modification workflow ;
- aucune modification audit trail.

Décisions confirmées :

| Sujet | Décision |
|-------|----------|
| Split SQLite | Conservé |
| Emplacement champs | Table `requests` |
| Demandeur | `requesterName` + `requesterTeam` |
| Affectation | `assignedToUserId` + `assignedToDisplayName` |
| Legacy client | `customerLabel` conservé |
| Legacy technicien | `assignedTechnicianLabel` conservé |
| Priorité | Enum `low/medium/high` conservé |
| Criticité | Enum `standard/sensitive/urgent` conservé |
| Workflow | Inchangé |
| Audit trail | Inchangé |
| Frontend | À aligner en RM-04 |

Validations :

| Cible | Résultat |
|-------|----------|
| Backend build | OK |
| Backend tests | OK — 119 tests |
| Frontend build | OK (non-régression) |
| Frontend tests | OK — 167 tests (non-régression) |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 15.4. Changements RM-04

RM-04 aligne le frontend sur le modèle `Request` cible.

Changements réalisés :

- enrichissement des types frontend `DemoRequest` ;
- mapping API des champs :
  - `requesterName`
  - `requesterTeam`
  - `assignedToUserId`
  - `assignedToDisplayName`
- conservation des champs legacy :
  - `customerLabel`
  - `assignedTechnicianLabel`
- réalignement du seed local avec le seed backend ;
- affichage du demandeur dans la fiche demande ;
- affichage de l'équipe demandeuse si disponible ;
- affichage de l'affectation si disponible ;
- fallback legacy via `getRequesterDisplay()` et `getAssignmentDisplay()` ;
- liste enrichie avec demandeur et affectation si disponibles ;
- recherche enrichie avec demandeur, équipe et affectation ;
- tests frontend ajoutés/adaptés ;
- aucune modification backend ;
- aucune modification workflow ;
- aucune modification audit trail.

Décisions confirmées :

| Sujet | Décision |
|-------|----------|
| Demandeur | Affiché via `requesterName` |
| Équipe demandeuse | Affichée via `requesterTeam` si disponible |
| Affectation | Affichée via `assignedToDisplayName` |
| Legacy client | `customerLabel` conservé en fallback demandeur |
| Legacy technicien | `assignedTechnicianLabel` conservé en fallback affectation |
| Liste | Conservée, enrichie avec demandeur/affectation |
| Recherche | Conservée, enrichie avec nouveaux champs |
| Mode local | Conservé |
| Mode API | Conservé |
| Workflow | Inchangé |
| Audit trail | Inchangé |

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 173 tests |
| Backend build | OK (non-régression) |
| Backend tests | OK — 119 tests (non-régression) |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 15.5. Changements RM-05

RM-05 stabilise le lot Request Model Finalization par les tests et la non-régression.

Changements réalisés :

- vérification des tests backend du modèle Request ;
- vérification des tests frontend du modèle Request ;
- confirmation des champs demandeur :
  - `requesterName`
  - `requesterTeam`
- confirmation des champs affectation :
  - `assignedToUserId`
  - `assignedToDisplayName`
- confirmation des champs legacy :
  - `customerLabel`
  - `assignedTechnicianLabel`
- confirmation du mapping API liste et détail ;
- confirmation du seed local aligné avec le backend ;
- confirmation de l'affichage fiche demande ;
- confirmation de l'affichage liste demande ;
- confirmation de la recherche enrichie ;
- confirmation du mode local ;
- confirmation du mode API ;
- confirmation de l'audit trail enrichi ;
- confirmation des permissions existantes ;
- confirmation du reset admin ;
- confirmation de l'absence de nouveau workflow, nouveau statut, CRUD complet ou formulaire création.

Contrat stabilisé :

| Élément | Résultat |
|---------|----------|
| Backend Request | OK |
| SQLite Request | OK |
| API Request | OK |
| Frontend Request | OK |
| Seed local/backend | OK |
| Fiche demande | OK |
| Liste demandes | OK |
| Recherche | OK |
| Mode local | OK |
| Mode API | OK |
| Audit trail | OK |
| Permissions | OK |
| Reset admin | OK |
| CRUD complet | Non |
| Formulaire création | Non |
| Auth réelle | Non |
| Nouveau statut | Non |

Validations :

| Cible | Résultat |
|-------|----------|
| Backend build | OK |
| Backend tests | OK — 121 tests |
| Frontend build | OK |
| Frontend tests | OK — 175 tests |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 15.6. Changements RM-06

RM-06 finalise la documentation du lot Request Model Finalization.

Changements réalisés :

- documentation du modèle `Request` enrichi ;
- documentation des champs demandeur :
  - `requesterName`
  - `requesterTeam`
- documentation des champs affectation :
  - `assignedToUserId`
  - `assignedToDisplayName`
- documentation des champs legacy conservés :
  - `customerLabel`
  - `assignedTechnicianLabel`
- documentation des colonnes SQLite :
  - `requester_name`
  - `requester_team`
  - `assigned_to_user_id`
  - `assigned_to_display_name`
- documentation des endpoints :
  - `GET /api/v1/requests`
  - `GET /api/v1/requests/:id`
- documentation de l'affichage frontend fiche/liste ;
- documentation de la recherche enrichie ;
- documentation de l'alignement seed local/backend ;
- mise à jour du runbook ;
- mise à jour du README frontend ;
- mise à jour du README backend.

Synthèse :

| Élément | Résultat |
|---------|----------|
| Modèle Request enrichi | Documenté |
| Champs demandeur | Documentés |
| Champs affectation | Documentés |
| SQLite | Documentée |
| API liste | Documentée |
| API détail | Documentée |
| Frontend fiche | Documenté |
| Frontend liste | Documenté |
| Recherche enrichie | Documentée |
| Seed local/backend | Documenté |
| Mode local | Conservé |
| Mode API | Conservé |
| Auth réelle | Exclue |
| CRM / données réelles | Exclus |
| Nouveau statut | Exclu |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 16. Prochaine étape

PR unique préparée — revue et merge sur `main` à valider.

---

## 17. Synthèse avant PR

Le lot **Request Model Finalization** est fonctionnellement prêt.

Capacités ajoutées :

- stabilisation du modèle métier `Request` ;
- enrichissement compatible SQLite ;
- ajout des champs demandeur :
  - `requesterName`
  - `requesterTeam`
- ajout des champs affectation :
  - `assignedToUserId`
  - `assignedToDisplayName`
- conservation des champs legacy :
  - `customerLabel`
  - `assignedTechnicianLabel`
- exposition API liste et détail ;
- alignement frontend mode API ;
- alignement frontend mode local ;
- réalignement du seed fictif local/backend ;
- affichage du demandeur dans la fiche ;
- affichage de l'affectation dans la fiche ;
- affichage demandeur/affectation en liste ;
- recherche enrichie ;
- tests backend/frontend renforcés ;
- runbook/README mis à jour.

Le lot ne met pas en place :

- CRUD complet ;
- formulaire création demande ;
- authentification réelle ;
- CRM ;
- données réelles ;
- nouveau statut.

---

## 18. Validations finales RM-07

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 175 tests |
| Backend build | OK |
| Backend tests | OK — 121 tests |
| Diff global vs main | OK |
| Modèle Request enrichi | OK |
| SQLite `requests` enrichie | OK |
| Colonnes `requester_name` / `requester_team` | OK |
| Colonnes `assigned_to_user_id` / `assigned_to_display_name` | OK |
| Seed backend enrichi | OK |
| Seed local aligné | OK |
| API liste enrichie | OK |
| API détail enrichie | OK |
| Frontend fiche enrichie | OK |
| Frontend liste enrichie | OK |
| Recherche enrichie | OK |
| Champs legacy conservés | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Audit trail conservé | OK |
| Permissions conservées | OK |
| Reset admin conservé | OK |
| CRUD complet exclu | OK |
| Formulaire création exclu | OK |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| Token exclu | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| `STAT-08` exclu | OK |
| sfia-notion-sync exclu | OK |
| Exports Figma exclus | OK |

---

## 19. Préparation PR intégrée

### Titre proposé

`Finalize Interv360 request model`

### Description proposée

```markdown
## Summary
This PR delivers Lot 3 of the Interv360 MVP Final Roadmap: Request Model Finalization.
It stabilizes the Interv360 request model by adding requester and assignment fields, aligning backend SQLite/API with frontend local/API modes, and documenting the enriched request contract.
This is not a CRUD expansion and does not introduce real authentication or real CRM data.
## What changed
### Product delivery
- opens Lot 3 from the MVP Final Roadmap;
- adds the Request Model Finalization delivery document;
- confirms that Lot 1 Backend Users & Session and Lot 2 Audit Trail are reused;
- keeps the SFIA Fast Track delivery approach.
### Backend
- enriches the backend `DemoRequest` model with:
  - `requesterName`;
  - `requesterTeam`;
  - `assignedToUserId`;
  - `assignedToDisplayName`;
- adds compatible SQLite migrations on `requests`:
  - `requester_name`;
  - `requester_team`;
  - `assigned_to_user_id`;
  - `assigned_to_display_name`;
- enriches the backend fictive seed for the 3 demo requests;
- keeps the existing `requests` / `request_details` split;
- keeps legacy fields:
  - `customerLabel`;
  - `assignedTechnicianLabel`;
- keeps existing `priority` and `criticality` enums;
- exposes enriched fields through:
  - `GET /api/v1/requests`;
  - `GET /api/v1/requests/:id`.
### Frontend
- enriches the frontend `DemoRequest` type;
- maps enriched API fields in API mode;
- aligns the local seed with the backend seed;
- displays requester and assignment information in the request detail;
- displays requester and assignment information in the request list;
- enriches request search with requester, team and assignment fields;
- keeps fallbacks to legacy fields:
  - `customerLabel`;
  - `assignedTechnicianLabel`;
- keeps local mode and API mode compatible.
### Tests
- adds backend persistence coverage for the enriched request model;
- extends backend API tests for list/detail responses;
- confirms enriched fields survive workflow transitions;
- extends frontend API mapping tests;
- extends request detail/list tests;
- extends search tests;
- confirms mode local/API non-regression;
- confirms audit trail, permissions and reset behavior remain compatible.
### Documentation
- updates the E2E runbook with Request Model controls and curl examples;
- updates frontend README;
- updates backend README;
- updates the Request Model Finalization delivery document with RM-01 to RM-07 status.
## Validation
- Frontend build: OK
- Frontend tests: 175 passed
- Backend build: OK
- Backend tests: 121 passed
## Guardrails
No full CRUD API, request creation form, real authentication, login, logout, password, password hash, token, OAuth, JWT, SSO, Entra ID, backend auth session, CRM integration, real data, workflow status, `STAT-08`, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
Existing workflow, transitions, audit trail, permissions, local mode, API mode and admin reset behavior are preserved.
Legacy request fields remain available:
- `customerLabel`;
- `assignedTechnicianLabel`.
```

---

## 20. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-request-model-finalization?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-request-model-finalization` |
| Merge automatique | Non |

---

## 21. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #67 — https://github.com/mcleland147/sfia-workspace/pull/67 |
| Source | `delivery/interv360-request-model-finalization` |
| Cible | `main` |
| Méthode | `Merge commit (GitHub PR merge)` |
| Commit merge | `6638f8c` |
| Main synchronisée | OK |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 175 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 121 tests |
| RM-01 | OK — cadrage opérationnel |
| RM-02 | OK — audit et décision champs cibles |
| RM-03 | OK — backend SQLite/API Request finalisé |
| RM-04 | OK — frontend fiche/liste Request alignées |
| RM-05 | OK — tests backend/frontend |
| RM-06 | OK — runbook/README |
| RM-07 | OK — PR unique |
| Modèle Request enrichi | OK |
| SQLite `requests` enrichie | OK |
| `requesterName` | OK |
| `requesterTeam` | OK |
| `assignedToUserId` | OK |
| `assignedToDisplayName` | OK |
| `customerLabel` conservé | OK |
| `assignedTechnicianLabel` conservé | OK |
| Seed backend enrichi | OK |
| Seed local aligné | OK |
| API liste enrichie | OK |
| API détail enrichie | OK |
| Frontend fiche enrichie | OK |
| Frontend liste enrichie | OK |
| Recherche enrichie | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Audit trail conservé | OK |
| Permissions conservées | OK |
| Reset admin conservé | OK |
| CRUD complet introduit | Non |
| Formulaire création demande introduit | Non |
| Auth réelle introduite | Non |
| Session backend réelle introduite | Non |
| Login/password introduits | Non |
| Token introduit | Non |
| OAuth / JWT / SSO introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveau statut introduit | Non |
| `STAT-08` introduit | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le Lot 3 **Request Model Finalization** est mergé dans `main`.

Interv360 dispose désormais d'un modèle `Request` MVP plus exploitable :

- demandeur identifié ;
- équipe demandeuse identifiée ;
- affectation optionnelle à un utilisateur backend ;
- affichage d'affectation stabilisé ;
- champs legacy conservés ;
- SQLite enrichie par migration compatible ;
- API liste et détail enrichies ;
- frontend local et API alignés ;
- fiche demande enrichie ;
- liste demande enrichie ;
- recherche enrichie ;
- seeds backend/local alignés ;
- audit trail, permissions et reset admin conservés.

Ce lot ne met pas en place :

- CRUD complet ;
- formulaire de création demande ;
- authentification réelle ;
- CRM ;
- données réelles ;
- nouveau statut.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Track.

### Prochaine étape

Ouvrir le Lot 4 :

`delivery/interv360-api-product-hardening`

Objectif :

- clarifier les endpoints API ;
- homogénéiser les erreurs ;
- renforcer les validations API ;
- documenter le contrat API ;
- conserver la compatibilité frontend.
