# Interv360 — Role Simulation

**Projet** : Interv360  
**Cycle** : Role Simulation  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-04 réalisé  
**Branche** : `delivery/interv360-role-simulation`

---

## 1. Objectif

Ce batch vise à introduire une **simulation de rôle contrôlée** dans Interv360, afin de préparer le produit à une logique multi-acteurs sans implémenter d’authentification réelle.

L’objectif n’est pas de sécuriser techniquement l’application.

L’objectif est de rendre démontrables :

- les rôles produit ;
- les responsabilités ;
- les actions autorisées ou non ;
- les limites assumées avant authentification réelle.

---

## 2. Point de départ

Le cadrage auth/users/rôles a été réalisé dans :

[`projects/interv360/09-architecture/interv360-auth-and-user-framing.md`](../09-architecture/interv360-auth-and-user-framing.md)

Décision retenue :

- rôles et responsabilités d’abord ;
- pas d’auth réelle immédiate ;
- simulation de rôle comme prochain pas possible ;
- OAuth / JWT / SSO différés ;
- base users complète différée ;
- workflow extension toujours différé.

---

## 3. Périmètre du batch

Le batch peut inclure :

- rôle actif simulé ;
- sélection ou affichage du rôle actif ;
- conditionnement des actions selon le rôle ;
- message explicite lorsqu’une action est non autorisée ;
- tests frontend ;
- documentation / runbook.

Le batch ne doit pas inclure :

- authentification réelle ;
- OAuth ;
- JWT ;
- SSO ;
- annuaire ;
- base users complète ;
- administration utilisateurs ;
- CRM ;
- données réelles ;
- workflow étendu ;
- nouveaux statuts ;
- PostgreSQL ;
- ORM lourd ;
- production.

---

## 4. Rôles retenus

Rôles du cadrage :

| Rôle | Intention |
|------|-----------|
| `requester` | Consulter ou créer une demande |
| `technician` | Qualifier, planifier, traiter |
| `manager` | Superviser, prioriser, arbitrer |
| `admin` | Administrer les référentiels et droits |
| `viewer` | Consulter sans agir |

---

## 5. Matrice cible de simulation

| Action | requester | technician | manager | admin | viewer |
|--------|-----------|------------|---------|-------|--------|
| Voir liste demandes | Oui | Oui | Oui | Oui | Oui |
| Voir détail demande | Oui | Oui | Oui | Oui | Oui |
| Qualifier | Non | Oui | Oui | Oui | Non |
| Planifier | Non | Oui | Oui | Oui | Non |
| Clôturer intervention | Non | Oui | Oui | Oui | Non |
| Clôturer rapport | Non | Oui | Oui | Oui | Non |
| Reset démo | Non | Non | Non | Oui | Non |

---

## 6. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Intégrer le cadrage rôles / responsabilités | Réalisé |
| INC-PROD-02 | Définir le comportement UX de simulation | Réalisé |
| INC-PROD-03 | Implémenter la simulation de rôle | Réalisé |
| INC-PROD-04 | Tests et documentation | Réalisé |
| INC-PROD-05 | Préparer PR du batch | À venir |

---

## 7. Décisions INC-PROD-01

Décisions issues du cadrage :

- conserver une simulation de rôle, pas une auth réelle ;
- ne pas introduire OAuth / JWT / SSO ;
- ne pas créer de base users complète ;
- ne pas ouvrir l’administration utilisateurs ;
- ne pas modifier le workflow ;
- ne pas ajouter de nouveaux statuts ;
- conditionner uniquement les actions déjà existantes ;
- conserver le mode local et le mode API.

---

## 7.1. Décisions INC-PROD-02 — comportement UX de simulation

### Rôle par défaut

Le rôle par défaut est :

`technician`

Justification :

- c’est le rôle le plus utile pour démontrer le workflow nominal ;
- il permet d’exécuter les transitions principales ;
- il évite de bloquer la démonstration au premier lancement ;
- il reste cohérent avec le scénario actuel d’intervention.

### Rôles disponibles dans la simulation

La simulation expose les rôles suivants :

| Rôle | Libellé UI | Intention |
|------|------------|-----------|
| `requester` | Demandeur | Suit la demande mais ne traite pas |
| `technician` | Technicien | Qualifie, planifie et traite |
| `manager` | Responsable | Supervise et peut agir |
| `admin` | Administrateur | Peut agir et réinitialiser la démo |
| `viewer` | Observateur | Lecture seule |

### Affichage du rôle actif

Le rôle actif doit être visible dans l’interface.

Affichage recommandé :

- badge ou bloc discret dans l’en-tête / panneau de contrôle existant ;
- libellé clair : `Rôle simulé : Technicien` ;
- mention explicite : `Simulation — aucune authentification réelle`.

Point d’intégration prévu : zone de contrôles existante dans `App.tsx` (à côté du badge mode local/API).

### Changement de rôle

Le changement de rôle est autorisé dans la démonstration.

Comportement recommandé :

- sélecteur simple ;
- aucune page login ;
- aucun mot de passe ;
- aucun compte utilisateur ;
- changement immédiat du rôle actif.

### Stockage du rôle

Le rôle simulé peut être conservé côté frontend via `localStorage`.

Clé recommandée :

`interv360:simulated-role`

Comportement :

- si aucune valeur n’existe, utiliser `technician` ;
- si la valeur stockée est inconnue, revenir à `technician` ;
- le reset démo ne réinitialise pas le rôle simulé.

Décision :

> conserver le rôle simulé lors du reset démo, afin que le reset reste centré sur les demandes et le workflow.

### Permissions simulées

La simulation applique la matrice suivante :

| Action | requester | technician | manager | admin | viewer |
|--------|-----------|------------|---------|-------|--------|
| Voir liste demandes | Oui | Oui | Oui | Oui | Oui |
| Voir détail demande | Oui | Oui | Oui | Oui | Oui |
| Qualifier | Non | Oui | Oui | Oui | Non |
| Planifier | Non | Oui | Oui | Oui | Non |
| Clôturer intervention | Non | Oui | Oui | Oui | Non |
| Clôturer rapport | Non | Oui | Oui | Oui | Non |
| Reset démo | Non | Non | Non | Oui | Non |

Mapping technique prévu (INC-PROD-03) :

- transitions workflow → `WorkflowActionControl` / handlers dans `App.tsx` ;
- reset démo → `DemoResetControl`.

### Actions non autorisées

Lorsqu’une action n’est pas autorisée :

- ne pas appeler l’API ;
- ne pas modifier l’état local ;
- afficher un message utilisateur clair via `lastActionMessage` ;
- conserver le workflow existant.

Message recommandé :

`Action non autorisée pour le rôle simulé : <libellé rôle>.`

Exemple :

`Action non autorisée pour le rôle simulé : Observateur.`

### Reset démo

Le reset démo est réservé au rôle `admin`.

Comportement :

- si rôle `admin` : reset autorisé ;
- sinon : reset bloqué côté frontend avec message explicite ;
- aucun changement backend requis.

### Mode local et mode API

La simulation de rôle s’applique :

- en mode local ;
- en mode API opt-in.

La simulation reste frontend-first.

Aucune sécurité réelle n’est apportée : le backend ne doit pas être considéré comme protégé par cette simulation.

### Hors scope confirmé

INC-PROD-02 ne prévoit pas :

- login ;
- logout ;
- mot de passe ;
- compte utilisateur ;
- OAuth ;
- JWT ;
- SSO ;
- annuaire ;
- base users ;
- droits backend réels ;
- nouvelle table SQLite ;
- nouvelle API ;
- nouveau statut workflow.

---

## 8. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Cadrage rôles intégré | OK |
| Rôle actif simulé défini | OK |
| Permissions par action définies | OK |
| Actions non autorisées gérées | OK |
| Frontend testé | OK |
| Backend non modifié ou justification claire | OK — non modifié |
| API `/api/v1` conservée | OK |
| Workflow conservé | OK |
| Pas d’auth réelle | OK |
| Pas d’OAuth / JWT / SSO | OK |
| Pas de base users complète | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 9. Décisions techniques

| Sujet | Décision |
|------|----------|
| Rôle par défaut | `technician` |
| Sélection rôle | Sélecteur frontend simple |
| Stockage rôle | `localStorage` — clé `interv360:simulated-role` |
| Permissions | Matrice frontend par action existante |
| Action non autorisée | Message utilisateur, aucun appel API, aucun changement d’état |
| Reset démo | Réservé à `admin` côté frontend |
| Backend | Non modifié |
| API contract | Conservé |
| Workflow | Conservé |
| Mode local | Conservé |
| Mode API | Conservé |

---

## 10. Changements réalisés

**INC-PROD-01** — cadrage intégré :

- reprise du cadrage auth/users/rôles comme première étape du batch ;
- décision de simuler un rôle plutôt que d’implémenter une auth réelle ;
- réduction volontaire du nombre de PR documentaires ;
- objectif d’une PR unique en fin de batch.

**INC-PROD-02** — comportement UX de simulation défini :

- rôle par défaut : `technician` ;
- rôles disponibles : `requester`, `technician`, `manager`, `admin`, `viewer` ;
- affichage explicite du rôle actif ;
- changement de rôle via sélecteur frontend simple ;
- stockage du rôle simulé en `localStorage` ;
- permissions par action existante ;
- blocage frontend des actions non autorisées ;
- reset démo réservé à `admin` ;
- application en mode local et en mode API ;
- aucune auth réelle introduite.

**INC-PROD-03** — simulation de rôle implémentée :

- ajout du modèle de rôles simulés (`domain/simulatedRoles.ts`) ;
- ajout du rôle par défaut `technician` ;
- ajout du stockage `localStorage` via `interv360:simulated-role` ;
- ajout d’un contrôle UI de rôle simulé (`SimulatedRoleControl`) ;
- application des permissions sur les actions workflow existantes ;
- reset démo réservé à `admin` côté frontend ;
- message utilisateur pour les actions non autorisées ;
- tests frontend ajoutés ;
- aucun backend modifié ;
- aucune auth réelle introduite.

**INC-PROD-04** — tests et documentation finaux :

- mise à jour du runbook de démonstration ;
- documentation du contrôle de rôle simulé ;
- documentation du blocage des actions non autorisées ;
- documentation du reset réservé à `admin` ;
- documentation de la clé `localStorage` ;
- validation frontend build/tests ;
- validation backend build/tests ;
- aucun ajustement UX supplémentaire.

---

## 11. Validations

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 96 tests |
| Backend build | OK |
| Backend tests | OK — 32 tests |
| Validation navigateur local | Documentée — exécution optionnelle |
| Validation navigateur API | Documentée — exécution optionnelle |

---

## 12. Limites assumées

- pas d’auth réelle ;
- pas de sécurité effective ;
- pas d’OAuth ;
- pas de JWT ;
- pas de SSO ;
- pas d’annuaire ;
- pas de base users complète ;
- pas d’administration utilisateurs ;
- pas de CRM ;
- pas de données réelles ;
- pas de workflow étendu ;
- pas de nouveaux statuts ;
- pas de production.

---

## 13. Prochaine étape

**INC-PROD-05** : préparer la PR unique du batch `delivery/interv360-role-simulation`.

---

## 14. Synthèse du batch

Le batch **Role Simulation** introduit une simulation de rôle frontend contrôlée.

Le produit permet désormais de démontrer :

- un rôle actif simulé ;
- une sélection de rôle ;
- des permissions différenciées selon le rôle ;
- le blocage des transitions pour les rôles non autorisés ;
- le reset réservé à `admin` ;
- la conservation du rôle simulé après reset.

La simulation reste volontairement limitée :

- aucune authentification réelle ;
- aucune sécurité backend ;
- aucun OAuth / JWT / SSO ;
- aucune base users ;
- aucune donnée réelle ;
- aucun CRM ;
- aucun workflow étendu.
