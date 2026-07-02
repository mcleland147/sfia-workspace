# Interv360 — Backend Users & Session

**Projet** : Interv360  
**Cycle** : Backend Users & Session  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 1  
**Branche** : `delivery/interv360-backend-users-session`

---

## 1. Objectif

Ce lot matérialise les utilisateurs côté backend et introduit une session applicative minimale.

L'objectif est de faire évoluer Interv360 depuis un user switcher purement frontend vers une fondation utilisateur produit, sans basculer vers une authentification réelle complète.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `../09-architecture/interv360-auth-foundation-framing.md`
- `./auth-user-switcher.md`

Décision roadmap :

- la phase démo est clôturée ;
- la cible est un MVP produit structuré ;
- le Lot 1 prioritaire est `delivery/interv360-backend-users-session`.

---

## 3. Point de départ

Interv360 dispose déjà :

- de 5 utilisateurs fictifs côté frontend ;
- d'une session locale frontend via `interv360:current-user-id` ;
- d'un rôle actif dérivé depuis l'utilisateur courant ;
- d'une matrice de permissions existante ;
- d'un reset réservé à `admin` ;
- d'un backend SQLite persistant ;
- d'une API `/api/v1` existante ;
- de tests backend et frontend stables.

Limite actuelle :

> les utilisateurs n'existent pas encore côté backend.

---

## 4. Problème à résoudre

Le produit ne peut pas finaliser son audit trail et sa traçabilité tant que les actions ne sont pas rattachées à un utilisateur backend.

Le user switcher frontend est utile, mais il reste insuffisant pour un MVP produit finalisable.

---

## 5. Périmètre du lot

À livrer :

- modèle utilisateur backend ;
- seed des 5 utilisateurs de démonstration côté backend ;
- repository users ;
- endpoint de lecture des utilisateurs ;
- endpoint ou mécanisme de session applicative minimale ;
- rôle porté par l'utilisateur backend ;
- frontend branché sur la source backend en mode API ;
- fallback local conservé si nécessaire ;
- permissions existantes conservées ;
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
- gestion avancée des droits ;
- administration des utilisateurs ;
- audit trail complet ;
- nouveau statut workflow ;
- `STAT-08`.

---

## 7. Utilisateurs de référence

Les utilisateurs backend doivent reprendre les utilisateurs déjà validés côté frontend :

| ID | Nom affiché | Email | Rôle | Équipe |
|----|-------------|-------|------|--------|
| `user-requester` | Alice Demandeur | `alice.demandeur@example.test` | `requester` | Centre demandeur |
| `user-technician` | Théo Technicien | `theo.technicien@example.test` | `technician` | Support technique |
| `user-manager` | Maya Responsable | `maya.responsable@example.test` | `manager` | Pilotage SAV |
| `user-admin` | Amin Admin | `amin.admin@example.test` | `admin` | Administration |
| `user-viewer` | Victor Lecteur | `victor.lecteur@example.test` | `viewer` | Lecture seule |

Utilisateur par défaut :

`user-technician`

---

## 8. Modèle utilisateur cible minimal

Modèle minimal :

```ts
type User = {
  id: string;
  displayName: string;
  email: string;
  role: "requester" | "technician" | "manager" | "admin" | "viewer";
  team: string;
  isActive: boolean;
};
```

Champs non retenus dans ce lot :

- password ;
- passwordHash ;
- provider ;
- externalId ;
- lastLoginAt ;
- permissions custom ;
- organisation avancée.

---

## 9. Session applicative minimale

La session cible reste volontairement simple.

Décision proposée :

- la session applicative est représentée par l'utilisateur courant ;
- le frontend conserve l'id utilisateur courant ;
- en mode API, l'utilisateur courant doit être validé contre les users backend ;
- le backend n'émet pas de token ;
- le backend ne crée pas de session sécurisée ;
- aucun cookie d'auth n'est introduit.

Option technique à préciser pendant delivery :

| Option | Description | Décision |
|--------|-------------|----------|
| A | `GET /api/v1/users` seulement + session frontend validée par liste users | Recommandée pour premier incrément |
| B | `GET /api/v1/session/current-user` avec paramètre/header user id | Possible |
| C | `POST /api/v1/session` sans mot de passe | Possible mais peut simuler un login |
| D | JWT / cookie auth | Exclu |

Décision initiale :

privilégier l'option A pour rester simple et éviter une fausse authentification.

---

## 10. API cible minimale

Endpoints envisagés :

| Endpoint | Usage |
|----------|-------|
| `GET /api/v1/users` | Retourne les utilisateurs actifs |
| `GET /api/v1/users/:id` | Retourne un utilisateur si nécessaire |

À éviter dans ce lot :

- `POST /api/v1/login` ;
- `POST /api/v1/logout` ;
- `POST /api/v1/session` si cela crée une confusion avec une auth réelle ;
- émission de token ;
- gestion de mot de passe.

---

## 11. SQLite cible

Table envisagée :

`users`

Champs :

| Champ | Type | Contrainte |
|-------|------|------------|
| `id` | TEXT | primary key |
| `display_name` | TEXT | not null |
| `email` | TEXT | not null unique |
| `role` | TEXT | not null |
| `team` | TEXT | not null |
| `is_active` | INTEGER | not null default 1 |

Seed :

- insérer les 5 utilisateurs de référence ;
- seed idempotent ;
- ne pas supprimer les données existantes.

---

## 12. Frontend cible

En mode local :

- le user switcher peut continuer à utiliser les utilisateurs locaux.

En mode API :

- le user switcher doit charger les users depuis `GET /api/v1/users` ;
- le rôle actif vient de l'utilisateur sélectionné ;
- si l'API est indisponible, conserver le comportement d'erreur existant ou fallback documenté ;
- ne pas envoyer encore l'utilisateur courant dans les transitions, sauf si déjà nécessaire à un test.

Point important :

l'audit trail avec acteur sera traité dans le Lot 2.

---

## 13. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| BUS-01 | Cadrage opérationnel backend users/session | Réalisé |
| BUS-02 | Modèle users SQLite + seed backend | Réalisé |
| BUS-03 | Repository users + endpoints API | Réalisé |
| BUS-04 | Frontend API users + fallback local | Réalisé |
| BUS-05 | Tests backend/frontend et non-régression | Réalisé |
| BUS-06 | Documentation runbook/README | Réalisé |
| BUS-07 | Préparation PR unique | Réalisé |

---

## 14. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Users backend modélisés | OK |
| Table users créée | OK |
| Seed 5 utilisateurs backend | OK |
| Endpoint users créé | OK |
| Session minimale documentée | OK |
| Frontend mode API branché sur users backend | OK |
| Permissions existantes conservées | OK |
| Backend tests | OK — 93 tests |
| Frontend tests | OK — 157 tests |
| Backend build | OK |
| Frontend build | OK |
| Runbook mis à jour | OK |
| README frontend mis à jour | OK |
| README backend/global mis à jour | OK |
| Audit trail complet exclu | OK |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |

---

## 15. Garde-fous

Le lot doit préserver :

- API transitions existante ;
- workflow existant ;
- statuts existants ;
- permissions existantes ;
- reset admin existant ;
- compatibilité mode local ;
- compatibilité mode API.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- STAT-08.

---

## 16. Décision BUS-01

BUS-01 valide le cadrage opérationnel du Lot 1.

Décisions :

- créer une table backend `users` ;
- seeder les 5 utilisateurs déjà utilisés côté frontend ;
- exposer au minimum `GET /api/v1/users` ;
- conserver une session applicative minimale portée par l'id utilisateur courant côté frontend ;
- ne pas introduire de login/password ;
- ne pas introduire de token ;
- ne pas introduire d'OAuth/JWT/SSO ;
- ne pas traiter l'audit trail complet dans ce lot ;
- préparer le Lot 2 Audit Trail en rendant les utilisateurs disponibles côté backend.

---

## 16.1. Changements BUS-02

BUS-02 introduit le socle users côté SQLite.

Changements réalisés :

- création du modèle backend `User` ;
- création de la table SQLite `users` ;
- ajout d'un seed idempotent des 5 utilisateurs de référence ;
- alignement strict des IDs avec le user switcher frontend ;
- conservation des tables existantes ;
- aucun endpoint API exposé dans cet incrément ;
- aucune modification frontend ;
- aucune session backend réelle.

Utilisateurs seedés :

| ID | Nom affiché | Rôle |
|----|-------------|------|
| `user-requester` | Alice Demandeur | `requester` |
| `user-technician` | Théo Technicien | `technician` |
| `user-manager` | Maya Responsable | `manager` |
| `user-admin` | Amin Admin | `admin` |
| `user-viewer` | Victor Lecteur | `viewer` |

Garde-fous confirmés :

- pas de login ;
- pas de mot de passe ;
- pas de hash de mot de passe ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas d'Entra ID ;
- pas de CRM ;
- pas de données réelles ;
- pas d'audit trail complet ;
- pas de nouveau statut.

---

## 16.2. Changements BUS-03

BUS-03 expose les utilisateurs backend via une API minimale.

Changements réalisés :

- création du repository users ;
- mapping SQLite vers le modèle domaine `User` ;
- ajout de `GET /api/v1/users` ;
- ajout de `GET /api/v1/users/:id` ;
- réponse API sans mot de passe, sans token, sans donnée sensible ;
- tests repository users ;
- tests API users ;
- aucune modification frontend ;
- aucune session backend réelle ;
- aucune modification des transitions ;
- aucun audit trail complet.

Endpoints exposés :

| Endpoint | Résultat |
|----------|----------|
| `GET /api/v1/users` | Liste les utilisateurs actifs |
| `GET /api/v1/users/:id` | Retourne un utilisateur ou `USER_NOT_FOUND` |

Garde-fous confirmés :

- pas de login ;
- pas de logout ;
- pas de mot de passe ;
- pas de hash de mot de passe ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas d'Entra ID ;
- pas de CRM ;
- pas de données réelles ;
- pas d'audit trail complet ;
- pas de nouveau statut.

---

## 16.3. Changements BUS-04

BUS-04 branche le frontend sur les utilisateurs backend en mode API.

Changements réalisés :

- ajout d'un client frontend pour `GET /api/v1/users` ;
- chargement des utilisateurs backend lorsque le mode API est actif ;
- conservation des utilisateurs locaux en mode local ;
- conservation de la session locale `interv360:current-user-id` ;
- validation de l'utilisateur courant contre la liste disponible ;
- fallback vers `user-technician` quand disponible ;
- rôle actif toujours dérivé depuis l'utilisateur courant ;
- permissions existantes conservées ;
- aucun envoi d'utilisateur dans les transitions ;
- aucune session backend réelle ;
- aucun login/logout.

Comportement confirmé :

| Mode | Source utilisateurs | Session |
|------|---------------------|---------|
| Local | `DEMO_USERS` frontend | `interv360:current-user-id` |
| API | `GET /api/v1/users` | `interv360:current-user-id` validé contre la liste API |

Garde-fous confirmés :

- pas de login ;
- pas de logout ;
- pas de mot de passe ;
- pas de hash de mot de passe ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas d'Entra ID ;
- pas de CRM ;
- pas de données réelles ;
- pas d'audit trail complet ;
- pas de nouveau statut.

---

## 16.4. Changements BUS-05

BUS-05 stabilise le lot Backend Users & Session par les tests et la non-régression.

Changements réalisés :

- renforcement des tests backend users ;
- renforcement des tests API users ;
- renforcement des tests frontend du client users API ;
- renforcement des tests du mode API dans l'application ;
- confirmation du fallback utilisateur ;
- confirmation de la persistance via `interv360:current-user-id` ;
- confirmation de la compatibilité mode local ;
- confirmation que les transitions ne reçoivent pas d'utilisateur, session ou token ;
- confirmation qu'aucun endpoint login/logout/session/auth/token n'est appelé ;
- confirmation que l'audit trail complet reste reporté au Lot 2.

Contrat confirmé :

| Élément | Résultat |
|---------|----------|
| Users backend | OK |
| API users | OK |
| Frontend mode API | OK |
| Mode local | OK |
| Session locale | OK |
| Transitions inchangées | OK |
| Auth réelle | Non |
| Token | Non |
| Login/logout | Non |
| Audit trail complet | Non |

Garde-fous confirmés :

- pas de login ;
- pas de logout ;
- pas de mot de passe ;
- pas de hash de mot de passe ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas d'Entra ID ;
- pas de CRM ;
- pas de données réelles ;
- pas d'audit trail complet ;
- pas de nouveau statut.

---

## 16.5. Changements BUS-06

BUS-06 finalise la documentation du lot Backend Users & Session.

Changements réalisés :

- documentation du chargement des utilisateurs backend en mode API ;
- documentation de `GET /api/v1/users` ;
- documentation de `GET /api/v1/users/:id` ;
- documentation des 5 utilisateurs backend seedés ;
- documentation de la session locale `interv360:current-user-id` ;
- documentation des règles de fallback utilisateur ;
- documentation du maintien du mode local via `DEMO_USERS` ;
- documentation de l'absence d'envoi `userId/session/token` dans les transitions ;
- documentation du report de l'audit trail complet au Lot 2 ;
- mise à jour du runbook ;
- mise à jour du README frontend ;
- mise à jour du README backend.

Synthèse :

| Élément | Résultat |
|---------|----------|
| Users backend | Documentés |
| API users | Documentée |
| Mode API frontend | Documenté |
| Mode local | Documenté |
| Session locale | Documentée |
| Fallback utilisateur | Documenté |
| Transitions | Inchangées |
| Audit trail complet | Reporté Lot 2 |

Garde-fous confirmés :

- pas de login ;
- pas de logout ;
- pas de mot de passe ;
- pas de hash de mot de passe ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas d'Entra ID ;
- pas de CRM ;
- pas de données réelles ;
- pas d'audit trail complet ;
- pas de nouveau statut.

---

## 17. Prochaine étape

Lot **Backend Users & Session** prêt pour revue et merge via PR unique.

---

## 18. Synthèse avant PR

Le lot **Backend Users & Session** est fonctionnellement prêt.

Capacités ajoutées :

- modèle backend `User` ;
- table SQLite `users` ;
- seed idempotent des 5 utilisateurs ;
- repository users ;
- endpoints :
  - `GET /api/v1/users`
  - `GET /api/v1/users/:id`
- frontend mode API branché sur les users backend ;
- mode local conservé ;
- session locale `interv360:current-user-id` conservée ;
- fallback utilisateur documenté et testé ;
- transitions inchangées ;
- tests backend/frontend renforcés ;
- runbook/README mis à jour.

Le lot ne met pas en place une authentification réelle.

---

## 19. Validations finales BUS-07

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 157 tests |
| Backend build | OK |
| Backend tests | OK — 93 tests |
| Diff global vs main | OK |
| Transitions inchangées | OK |
| Aucun user/session/token envoyé dans transitions | OK |
| Aucun endpoint login/logout/session/auth/token | OK |
| Audit trail complet reporté Lot 2 | OK |
| Auth réelle exclue | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| `STAT-08` exclu | OK |
| sfia-notion-sync exclu | OK |
| Exports Figma exclus | OK |

---

## 20. Préparation PR intégrée

### Titre proposé

`Add Interv360 backend users session`

### Description proposée

```markdown
## Summary
This PR delivers Lot 1 of the Interv360 MVP Final Roadmap: Backend Users & Session.
It moves Interv360 from a frontend-only demo user switcher toward a product-oriented user foundation backed by SQLite and exposed through the backend API.
This is not real authentication.
## What changed
### Product delivery
- opens Lot 1 from the MVP Final Roadmap;
- adds the Backend Users & Session delivery document;
- keeps the SFIA Fast Track delivery approach;
- confirms that Audit Trail with actor attribution is deferred to Lot 2.
### Backend
- adds a backend `User` domain model;
- adds a SQLite `users` table;
- seeds the 5 demo users idempotently:
  - Alice Demandeur — `requester`;
  - Théo Technicien — `technician`;
  - Maya Responsable — `manager`;
  - Amin Admin — `admin`;
  - Victor Lecteur — `viewer`;
- adds a users repository;
- exposes:
  - `GET /api/v1/users`;
  - `GET /api/v1/users/:id`;
- returns users without sensitive authentication fields.
### Frontend
- adds a users API client;
- loads users from `GET /api/v1/users` in API mode;
- keeps local mode based on frontend `DEMO_USERS`;
- keeps local session storage with:
  `interv360:current-user-id`
- keeps fallback to `user-technician` when available;
- derives the active role from the selected user;
- keeps the existing permissions matrix;
- keeps transition payloads unchanged.
### Tests
- adds backend seed tests;
- adds backend users repository tests;
- extends backend API tests;
- adds frontend users API client tests;
- strengthens frontend API mode tests;
- strengthens local mode non-regression tests.
### Documentation
- updates the E2E runbook with Backend Users & Session controls;
- updates frontend README;
- updates backend README;
- updates the delivery document with BUS-01 to BUS-07 status.
## Validation
- Frontend build: OK
- Frontend tests: 157 passed
- Backend build: OK
- Backend tests: 93 passed
## Guardrails
No real authentication, login, logout, password, password hash, token, OAuth, JWT, SSO, Entra ID, backend auth session, CRM integration, real data, workflow status, `STAT-08`, audit trail actor attribution, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
Transition payloads remain unchanged and still send only `{ "action": "<action>" }`.
Audit Trail with actor attribution is explicitly deferred to Lot 2.
```

---

## 21. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-backend-users-session?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-backend-users-session` |
| Merge automatique | Non |
