# Interv360 — Role Simulation

**Projet** : Interv360  
**Cycle** : Role Simulation  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-01 réalisé  
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
| INC-PROD-02 | Définir le comportement UX de simulation | À faire |
| INC-PROD-03 | Implémenter la simulation de rôle | À faire |
| INC-PROD-04 | Tests et documentation | À faire |
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

## 8. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Cadrage rôles intégré | OK |
| Rôle actif simulé défini | `<OK / KO>` |
| Permissions par action définies | `<OK / KO>` |
| Actions non autorisées gérées | `<OK / KO>` |
| Frontend testé | `<OK / KO>` |
| Backend non modifié ou justification claire | `<OK / KO>` |
| API `/api/v1` conservée | `<OK / KO>` |
| Workflow conservé | `<OK / KO>` |
| Pas d’auth réelle | OK |
| Pas d’OAuth / JWT / SSO | OK |
| Pas de base users complète | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 9. Décisions techniques

À compléter après INC-PROD-02.

| Sujet | Décision |
|------|----------|
| Rôle par défaut | `<à définir>` |
| Sélection rôle | `<à définir>` |
| Stockage rôle | `<à définir>` |
| Permissions | `<à définir>` |
| Backend | Non modifié par défaut |
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

---

## 11. Validations

À compléter en fin de batch.

| Contrôle | Résultat |
|----------|----------|
| Frontend build | `<OK / KO>` |
| Frontend tests | `<OK / KO>` |
| Backend build | `<OK / KO>` |
| Backend tests | `<OK / KO>` |
| Validation navigateur local | `<OK / KO / non exécutée>` |
| Validation navigateur API | `<OK / KO / non exécutée>` |

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

**INC-PROD-02** : définir précisément le comportement UX de simulation de rôle avant implémentation.
