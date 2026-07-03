# Interv360 — Auth User Switcher

**Projet** : Interv360  
**Cycle** : Auth User Switcher  
**Mode** : SFIA Fast Track — Batch Delivery produit contrôlé  
**Statut** : Batch produit — AUTH-US-05 réalisé  
**Branche** : `delivery/interv360-auth-user-switcher`

---

## 1. Objectif

Ce batch introduit une première fondation utilisateur côté frontend.

L'objectif est de remplacer progressivement le choix direct du rôle simulé par un choix d'utilisateur applicatif fictif.

Ce batch ne met pas en place une authentification réelle.

---

## 2. Point de départ

Le cadrage Auth Foundation recommande :

- une Auth Foundation locale ;
- un user switcher frontend ;
- une session locale ;
- la conservation de la matrice de permissions existante ;
- aucun backend users dans le premier delivery ;
- aucun OAuth/JWT/SSO.

Références :

- `../09-roadmap/interv360-next-product-axis.md`
- `../09-roadmap/interv360-auth-foundation-framing.md`

---

## 3. Périmètre retenu

À livrer dans ce batch :

- utilisateurs fictifs frontend ;
- session locale frontend ;
- user switcher ;
- rôle dérivé depuis l'utilisateur ;
- conservation des permissions existantes ;
- migration progressive depuis le sélecteur de rôle ;
- tests frontend ;
- runbook / README.

---

## 4. Hors scope

Le batch n'introduit pas :

- auth réelle ;
- login réel ;
- mot de passe ;
- hash de mot de passe ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- backend users ;
- session backend ;
- nouvelle table SQLite ;
- nouveau endpoint API ;
- CRM ;
- données réelles ;
- nouveau workflow ;
- nouveau statut ;
- `STAT-08`.

---

## 5. Utilisateurs fictifs retenus

| ID | Nom affiché | Email fictif | Rôle | Équipe |
|----|-------------|--------------|------|--------|
| `user-requester` | Alice Demandeur | `alice.demandeur@example.test` | `requester` | Centre demandeur |
| `user-technician` | Théo Technicien | `theo.technicien@example.test` | `technician` | Support technique |
| `user-manager` | Maya Responsable | `maya.responsable@example.test` | `manager` | Pilotage SAV |
| `user-admin` | Amin Admin | `amin.admin@example.test` | `admin` | Administration |
| `user-viewer` | Victor Lecteur | `victor.lecteur@example.test` | `viewer` | Lecture seule |

Tous ces utilisateurs sont fictifs.

---

## 6. Session locale retenue

Décision :

| Élément | Décision |
|--------|----------|
| Stockage | `localStorage` frontend |
| Clé session | `interv360:current-user-id` |
| Ancienne clé rôle | `interv360:simulated-role` conservée mais non utilisée comme source principale |
| Source du rôle | utilisateur courant |
| Expiration | Différée |
| Login / logout réel | Différé |
| Token | Aucun |
| Backend session | Non |

Règle :

> le rôle actif est dérivé de l'utilisateur sélectionné.

---

## 7. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| AUTH-US-01 | Définir utilisateurs fictifs et session locale | Réalisé |
| AUTH-US-02 | Remplacer le sélecteur de rôle par un sélecteur utilisateur | Réalisé |
| AUTH-US-03 | Adapter permissions/tests | Réalisé |
| AUTH-US-04 | Mettre à jour runbook/README | Réalisé |
| AUTH-US-05 | Préparer PR unique | Réalisé |

---

## 8. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Utilisateurs fictifs définis | OK |
| Session locale définie | OK |
| User switcher visible | OK |
| Rôle dérivé depuis utilisateur | OK |
| Permissions existantes conservées | OK |
| Backend inchangé | OK |
| API inchangée | OK |
| SQLite inchangée | OK |
| Frontend testé | OK |
| Backend non-régression | OK |
| Runbook mis à jour | OK |
| README mis à jour | OK |
| Auth réelle exclue | OK |
| OAuth/JWT/SSO exclus | OK |
| Données réelles exclues | OK |

---

## 9. Décisions AUTH-US-01 / AUTH-US-02

Décisions retenues :

- créer une liste d'utilisateurs fictifs côté frontend ;
- stocker l'utilisateur courant via `interv360:current-user-id` ;
- conserver les rôles existants ;
- dériver le rôle depuis l'utilisateur ;
- remplacer l'exposition directe du sélecteur de rôle par un sélecteur utilisateur ;
- conserver les permissions existantes ;
- ne pas modifier backend/API/SQLite.

---

## 9.1. Changements AUTH-US-01 / AUTH-US-02

AUTH-US-01 / AUTH-US-02 introduisent un premier user switcher frontend.

Changements réalisés :

- définition de 5 utilisateurs fictifs frontend ;
- introduction d'une session locale via `interv360:current-user-id` ;
- utilisateur par défaut : `Théo Technicien` ;
- remplacement progressif du choix direct du rôle par un choix d'utilisateur ;
- rôle actif dérivé depuis l'utilisateur courant ;
- conservation de la matrice de permissions existante ;
- conservation du backend sans modification ;
- conservation de l'API sans modification ;
- conservation de SQLite sans modification.

Utilisateurs disponibles :

| ID | Nom affiché | Rôle |
|----|-------------|------|
| `user-requester` | Alice Demandeur | `requester` |
| `user-technician` | Théo Technicien | `technician` |
| `user-manager` | Maya Responsable | `manager` |
| `user-admin` | Amin Admin | `admin` |
| `user-viewer` | Victor Lecteur | `viewer` |

Décisions confirmées :

- aucun login réel ;
- aucun mot de passe ;
- aucun token ;
- aucun OAuth/JWT/SSO ;
- aucune session backend ;
- aucune table users backend.

---

## 9.2. Changements AUTH-US-03

AUTH-US-03 stabilise le user switcher côté permissions et tests.

Changements réalisés :

- confirmation que le rôle actif est dérivé de l’utilisateur courant ;
- confirmation que la matrice de permissions existante est conservée ;
- renforcement des tests de session locale ;
- renforcement des tests UI par utilisateur ;
- vérification du reset réservé à `admin` ;
- vérification de la persistance de l’utilisateur courant ;
- conservation du backend sans modification ;
- conservation de l’API sans modification ;
- conservation de SQLite sans modification.

Règles confirmées :

| Utilisateur | Rôle | Résultat attendu |
|-------------|------|------------------|
| Alice Demandeur | `requester` | Lecture seule workflow |
| Théo Technicien | `technician` | Traitement autorisé, annulation interdite |
| Maya Responsable | `manager` | Traitement et annulation autorisés |
| Amin Admin | `admin` | Traitement, annulation et reset autorisés |
| Victor Lecteur | `viewer` | Lecture seule workflow |

Garde-fous confirmés :

- aucun login réel ;
- aucun mot de passe ;
- aucun token ;
- aucun OAuth/JWT/SSO ;
- aucune session backend ;
- aucune table users backend ;
- aucun changement API.

---

## 9.3. Changements AUTH-US-04

AUTH-US-04 finalise la documentation du user switcher.

Changements réalisés :

- mise à jour du runbook E2E avec les scénarios par utilisateur ;
- documentation de l'utilisateur par défaut `Théo Technicien` ;
- documentation des profils `requester`, `technician`, `manager`, `admin`, `viewer` ;
- documentation du reset réservé à `admin` ;
- documentation de la persistance locale via `interv360:current-user-id` ;
- mise à jour du README frontend ;
- conservation du backend sans modification ;
- conservation de l'API sans modification ;
- conservation de SQLite sans modification.

Scénarios documentés :

| Scénario | Résultat attendu |
|----------|------------------|
| Utilisateur par défaut | `Théo Technicien` actif |
| Responsable | `Maya Responsable` peut annuler |
| Administrateur | `Amin Admin` peut reset |
| Demandeur | `Alice Demandeur` lecture seule |
| Lecteur | `Victor Lecteur` lecture seule |
| Persistance locale | utilisateur conservé après remount/reload |

Garde-fous confirmés :

- aucune auth réelle ;
- aucun login ;
- aucun mot de passe ;
- aucun token ;
- aucun OAuth/JWT/SSO ;
- aucune session backend ;
- aucune table users backend ;
- aucun changement API.

---

## 10. Validations

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 141 tests |
| Backend build | OK |
| Backend tests | OK — 67 tests |
| Validation navigateur local | Non exécutée — validation automatisée OK |
| Validation navigateur API | Non exécutée — validation automatisée OK |

---

## 11. Synthèse avant PR

Le batch **Auth User Switcher** est fonctionnellement prêt.

Capacités ajoutées :

- 5 utilisateurs fictifs frontend ;
- session locale `interv360:current-user-id` ;
- utilisateur par défaut `Théo Technicien` ;
- sélecteur utilisateur ;
- rôle actif dérivé depuis l'utilisateur courant ;
- permissions existantes conservées ;
- reset toujours réservé à `admin` ;
- runbook mis à jour ;
- README mis à jour.

Le batch ne met pas en place une authentification réelle.

La prochaine étape est **AUTH-US-05** : préparation de la PR unique du batch.

---

## 12. Préparation PR intégrée

### Titre proposé

`Add Interv360 auth user switcher`

### Description proposée

```markdown
## Summary
This PR adds a frontend-only Auth User Switcher to Interv360.
It replaces the direct simulated role selection with a demo user selection. The active role is now derived from the selected demo user.
This is not real authentication.

## What changed
### Product and architecture framing
- records the next product axis decision after the workflow batches;
- frames an Auth Foundation approach;
- recommends a frontend-only user switcher as the first delivery step;
- defers real authentication, OAuth, JWT, SSO, Entra ID, backend users, backend sessions, CRM, and real data.

### Frontend
- adds 5 demo users:
  - Alice Demandeur — `requester`;
  - Théo Technicien — `technician`;
  - Maya Responsable — `manager`;
  - Amin Admin — `admin`;
  - Victor Lecteur — `viewer`;
- adds a local frontend session key:
  `interv360:current-user-id`
- defaults to `Théo Technicien`;
- adds a demo user switcher UI;
- derives the active role from `currentUser.role`;
- keeps the existing permission matrix unchanged;
- preserves the existing unauthorized action message.

### Tests
- adds domain tests for demo users and local session;
- strengthens UI tests by demo user;
- confirms the selected user persists across remount;
- confirms reset remains admin-only;
- confirms the previous `interv360:simulated-role` key is no longer the primary source.

### Documentation
- adds the Auth User Switcher delivery document;
- updates the Auth Foundation framing;
- updates the E2E demo runbook with user-based scenarios;
- updates the frontend README.

## Validation
- Frontend build: OK
- Frontend tests: 141 passed
- Backend build: OK
- Backend tests: 67 passed

## Guardrails
No real authentication, login, password, token, OAuth, JWT, SSO, Entra ID, backend users table, backend session, CRM integration, real data, new API endpoint, SQLite change, workflow change, `STAT-08`, new workflow status, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
The change is frontend-only for the user/session simulation layer.
```

---

## 13. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-auth-user-switcher?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-auth-user-switcher` |
| Merge automatique | Non |

---

## 14. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #63 — https://github.com/mcleland147/sfia-workspace/pull/63 |
| Source | `delivery/interv360-auth-user-switcher` |
| Cible | `main` |
| Méthode | `Merge commit (GitHub PR merge)` |
| Commit merge | `5af4e7c` |
| Main synchronisée | OK |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 141 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 67 tests |
| AUTH-US-01 | OK — utilisateurs fictifs et session locale |
| AUTH-US-02 | OK — user switcher frontend |
| AUTH-US-03 | OK — permissions/tests renforcés |
| AUTH-US-04 | OK — runbook/README |
| AUTH-US-05 | OK — PR unique préparée |
| Utilisateurs fictifs | OK |
| Session locale `interv360:current-user-id` | OK |
| Utilisateur par défaut `Théo Technicien` | OK |
| Rôle dérivé depuis utilisateur | OK |
| Matrice permissions conservée | OK |
| Reset admin conservé | OK |
| Backend modifié | Non |
| API contract modifié | Non |
| SQLite modifiée | Non |
| Auth réelle introduite | Non |
| Login/password introduits | Non |
| OAuth / JWT / SSO introduits | Non |
| Entra ID introduit | Non |
| Base users backend introduite | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| `STAT-08` introduit | Non |
| Nouveau statut introduit | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le batch **Auth User Switcher** est mergé dans `main`.

Interv360 dispose désormais d'une première fondation utilisateur côté frontend :

- 5 utilisateurs fictifs ;
- session locale `interv360:current-user-id` ;
- utilisateur par défaut `Théo Technicien` ;
- sélecteur utilisateur ;
- rôle actif dérivé depuis l'utilisateur courant ;
- matrice de permissions conservée ;
- reset toujours réservé à `admin`.

Ce batch ne met pas en place une authentification réelle.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Track.
