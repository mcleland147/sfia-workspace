# Interv360 — Auth User Switcher

**Projet** : Interv360  
**Cycle** : Auth User Switcher  
**Mode** : SFIA Fast Track — Batch Delivery produit contrôlé  
**Statut** : Batch produit — AUTH-US-04 réalisé  
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

- `../09-architecture/interv360-next-product-axis.md`
- `../09-architecture/interv360-auth-foundation-framing.md`

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
| AUTH-US-05 | Préparer PR unique | À venir |

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
