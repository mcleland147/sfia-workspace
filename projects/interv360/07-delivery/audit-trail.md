# Interv360 — Audit Trail

**Projet** : Interv360  
**Cycle** : Audit Trail  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 2  
**Branche** : `delivery/interv360-audit-trail`

---

## 1. Objectif

Ce lot enrichit l'historique Interv360 afin de rendre les actions métier traçables et exploitables.

L'objectif est de rattacher les événements workflow à un acteur utilisateur, tout en conservant une approche simple sans authentification réelle.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- les utilisateurs backend sont disponibles ;
- l'audit trail complet est le Lot 2 prioritaire ;
- la cible est un MVP produit structuré.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un modèle backend `User` ;
- d'une table SQLite `users` ;
- d'un seed idempotent de 5 utilisateurs ;
- d'un repository users ;
- des endpoints :
  - `GET /api/v1/users`
  - `GET /api/v1/users/:id`
- d'un frontend mode API branché sur les users backend ;
- d'une session locale `interv360:current-user-id` ;
- d'un workflow métier enrichi ;
- d'une table `workflow_events` existante ;
- d'un journal affiché côté frontend.

Limite actuelle :

> les événements workflow ne sont pas encore rattachés à un acteur métier exploitable.

---

## 4. Problème à résoudre

Le produit ne peut pas être considéré comme finalisable tant que le journal ne permet pas de savoir :

- qui a réalisé l'action ;
- quelle action a été réalisée ;
- quand elle a été réalisée ;
- depuis quel statut ;
- vers quel statut ;
- sur quelle demande.

---

## 5. Périmètre du lot

À livrer :

- enrichissement du modèle d'événement ;
- rattachement optionnel d'un acteur utilisateur aux transitions ;
- conservation du workflow existant ;
- conservation des statuts existants ;
- conservation des actions existantes ;
- adaptation SQLite de `workflow_events` ;
- adaptation repository/events ;
- adaptation API events ;
- adaptation frontend pour afficher l'acteur ;
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
- gestion avancée des permissions ;
- administration des utilisateurs.

---

## 7. Modèle audit trail cible

Événement cible minimal :

```ts
type WorkflowEvent = {
  id: string;
  requestId: string;
  eventType: string;
  action?: string;
  fromStatus?: string;
  toStatus?: string;
  actorUserId?: string;
  actorDisplayName?: string;
  actorRole?: string;
  createdAt: string;
};
```

Note :

- `actorUserId` référence l'utilisateur courant ;
- `actorDisplayName` et `actorRole` peuvent être dénormalisés pour faciliter l'affichage ;
- aucun token ou identifiant de session sécurisé n'est introduit.

---

## 8. SQLite cible

Table existante :

`workflow_events`

Champs à envisager :

| Champ | Type | Décision |
|-------|------|----------|
| `action` | TEXT nullable | À ajouter si absent |
| `from_status` | TEXT nullable | À ajouter si absent |
| `to_status` | TEXT nullable | À ajouter si absent |
| `actor_user_id` | TEXT nullable | À ajouter |
| `actor_display_name` | TEXT nullable | À ajouter |
| `actor_role` | TEXT nullable | À ajouter |

Contraintes :

- migration compatible avec les événements existants ;
- ne pas supprimer l'historique ;
- ne pas rendre l'acteur obligatoire pour les anciens événements ;
- conserver le reset démo ;
- conserver les tests existants.

---

## 9. API cible minimale

### Transitions

Endpoint existant :

```text
POST /api/v1/requests/:id/transitions
```

Évolution envisagée :

```json
{
  "action": "qualify",
  "actorUserId": "user-technician"
}
```

Règles :

- `action` reste obligatoire ;
- `actorUserId` est optionnel dans un premier temps ou requis uniquement en mode API si validé ;
- si `actorUserId` est fourni, il doit correspondre à un user backend actif ;
- si `actorUserId` est absent, comportement fallback documenté ;
- ne pas introduire token/session/password.

### Events

Endpoint existant :

```text
GET /api/v1/requests/:id/events
```

Évolution attendue :

- retourner l'acteur si disponible ;
- retourner `action` / `fromStatus` / `toStatus` si disponible ;
- conserver compatibilité avec les événements existants.

---

## 10. Frontend cible

En mode API :

- envoyer `actorUserId` dans les transitions si utilisateur courant disponible ;
- afficher l'acteur dans le journal ;
- afficher action / ancien statut / nouveau statut si disponibles.

En mode local :

- conserver le journal local ;
- si possible enrichir les événements locaux avec l'utilisateur courant ;
- ne pas complexifier si cela crée trop de bruit.

Important :

- le rôle reste dérivé de l'utilisateur courant ;
- permissions existantes conservées ;
- reset admin conservé ;
- pas d'auth réelle.

---

## 11. Décision initiale

Décision proposée pour rester Fast Track :

- enrichir les transitions API avec `actorUserId` ;
- valider `actorUserId` côté backend uniquement s'il est fourni ;
- stocker un snapshot acteur dans `workflow_events` :
  - `actor_user_id`
  - `actor_display_name`
  - `actor_role`
- stocker aussi :
  - `action`
  - `from_status`
  - `to_status`
- conserver les anciens événements compatibles ;
- ne pas créer de table audit séparée ;
- ne pas créer de session backend.

---

## 12. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| AT-01 | Cadrage opérationnel audit trail | Réalisé |
| AT-02 | SQLite workflow_events enrichi | Réalisé |
| AT-03 | Transitions API avec acteur | Réalisé |
| AT-04 | Events API enrichis | Réalisé |
| AT-05 | Frontend historique enrichi | Réalisé |
| AT-06 | Tests backend/frontend et non-régression | Réalisé |
| AT-07 | Documentation runbook/README | À faire |
| AT-08 | Préparation PR unique | À venir |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Acteur utilisateur cadré | OK |
| SQLite audit enrichi | OK |
| Transitions API compatibles | OK |
| Validation acteur backend | OK |
| Events API enrichis | OK |
| Frontend historique enrichi | OK |
| Permissions existantes conservées | OK |
| Mode local conservé | OK |
| Backend tests | OK — 112 tests |
| Frontend tests | OK — 167 tests |
| Backend build | OK |
| Frontend build | OK |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |

---

## 14. Garde-fous

Le lot doit préserver :

- workflow existant ;
- statuts existants ;
- actions existantes ;
- permissions existantes ;
- reset admin existant ;
- mode local ;
- mode API ;
- users backend existants ;
- API users existante.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08`.

---

## 15. Décision AT-01

AT-01 valide le cadrage opérationnel du Lot 2.

Décisions :

- enrichir `workflow_events` plutôt que créer une nouvelle table ;
- rattacher les transitions API à un acteur via `actorUserId` ;
- valider l'acteur contre les users backend si fourni ;
- stocker un snapshot acteur dans l'événement ;
- stocker `action` / `fromStatus` / `toStatus` ;
- conserver les anciens événements compatibles ;
- ne pas introduire de session backend ;
- ne pas introduire de login/password ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire de nouveau statut ;
- ne pas traiter CRM ou données réelles.

---

## 15.1. Changements AT-02

AT-02 prépare la persistance de l'audit trail enrichi côté SQLite.

Changements réalisés :

- enrichissement compatible de la table `workflow_events` ;
- ajout du champ `action` ;
- ajout des champs acteur :
  - `actor_user_id`
  - `actor_display_name`
  - `actor_role`
- conservation de `from_status` et `to_status` ;
- nouveaux champs nullable pour préserver les événements existants ;
- mapping repository vers le modèle backend ;
- tests de persistance audit trail ;
- aucune modification frontend ;
- aucune modification du payload transition ;
- aucun acteur encore envoyé par le frontend ;
- aucune session backend réelle.

Compatibilité confirmée :

| Élément | Résultat |
|---------|----------|
| Événements existants | Compatibles |
| Acteur obligatoire | Non |
| Données existantes supprimées | Non |
| Table audit séparée | Non |
| Transitions API modifiées | Non |
| Frontend modifié | Non |

Garde-fous confirmés :

- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de nouveau statut.

---

## 15.2. Changements AT-03

AT-03 rattache les transitions API à un acteur utilisateur optionnel.

Changements réalisés :

- extension compatible du payload transition avec `actorUserId` optionnel ;
- conservation de `action` comme champ obligatoire ;
- validation de `actorUserId` contre les users backend actifs ;
- refus explicite des acteurs inconnus ou inactifs ;
- stockage de `action` dans `workflow_events` ;
- stockage du snapshot acteur :
  - `actor_user_id`
  - `actor_display_name`
  - `actor_role`
- conservation de `from_status` et `to_status` ;
- compatibilité des transitions sans acteur ;
- aucune modification frontend ;
- aucune session backend réelle ;
- aucun token ;
- aucune auth réelle.

Contrat transition confirmé :

```json
{
  "action": "qualify",
  "actorUserId": "user-technician"
}
```

`actorUserId` reste optionnel.

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
- pas de nouveau statut.

---

## 15.3. Changements AT-04

AT-04 formalise l'API events enrichie.

Changements réalisés :

- confirmation de l'exposition de `action` dans `GET /api/v1/requests/:id/events` ;
- confirmation de l'exposition de `fromStatus` et `toStatus` ;
- confirmation de l'exposition du snapshot acteur quand disponible :
  - `actorUserId`
  - `actorDisplayName`
  - `actorRole`
- compatibilité confirmée avec les événements sans acteur ;
- conservation du contrat existant des events (`items`) ;
- tests API events enrichis ;
- aucune modification frontend ;
- aucune modification UI ;
- aucune session backend réelle ;
- aucun token ;
- aucune auth réelle.

Contrat events confirmé :

```json
{
  "items": [
    {
      "id": "evt-...",
      "requestId": "SAV-DEMO-001",
      "type": "qualification.confirmed",
      "label": "Demande qualifiée",
      "action": "qualify",
      "fromStatus": "STAT-01",
      "toStatus": "STAT-02",
      "actorUserId": "user-technician",
      "actorDisplayName": "Théo Technicien",
      "actorRole": "technician",
      "createdAt": "..."
    }
  ]
}
```

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
- pas de nouveau statut.

---

## 15.4. Changements AT-05

AT-05 branche le frontend sur l'audit trail enrichi.

Changements réalisés :

- envoi de `actorUserId` dans les transitions API ;
- conservation de `action` comme champ obligatoire ;
- absence d'envoi token/session/password ;
- enrichissement des types frontend events ;
- mapping frontend des champs events enrichis :
  - `action`
  - `fromStatus`
  - `toStatus`
  - `actorUserId`
  - `actorDisplayName`
  - `actorRole`
- affichage de l'acteur dans le journal si disponible ;
- affichage de l'action si disponible ;
- affichage de la transition de statut si disponible ;
- enrichissement optionnel du journal local avec l'utilisateur courant ;
- compatibilité avec les événements legacy sans acteur ;
- mode local conservé ;
- permissions existantes conservées ;
- aucune session backend réelle ;
- aucune authentification réelle.

Contrat frontend confirmé :

```json
{
  "action": "qualify",
  "actorUserId": "user-technician"
}
```

Le frontend n'envoie pas :

- token ;
- session ;
- password ;
- passwordHash.

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
- pas de nouveau statut.

---

## 15.5. Changements AT-06

AT-06 stabilise le lot Audit Trail par les tests et la non-régression.

Changements réalisés :

- vérification des tests backend audit trail ;
- vérification des tests frontend audit trail ;
- confirmation du stockage de l'action ;
- confirmation du snapshot acteur ;
- confirmation de l'exposition des events enrichis ;
- confirmation de l'affichage frontend enrichi ;
- confirmation de la compatibilité avec les événements legacy ;
- confirmation du mode local ;
- confirmation du mode API ;
- confirmation des permissions existantes ;
- confirmation du reset admin ;
- confirmation de l'absence d'authentification réelle ;
- confirmation de l'absence de token/session/password ;
- confirmation de l'absence de nouveau statut.

Contrat stabilisé :

| Élément | Résultat |
|---------|----------|
| SQLite `workflow_events` enrichi | OK |
| Transition avec `actorUserId` optionnel | OK |
| Validation acteur backend | OK |
| Events API enrichis | OK |
| Journal frontend enrichi | OK |
| Events legacy compatibles | OK |
| Mode local | OK |
| Mode API | OK |
| Permissions | OK |
| Reset admin | OK |
| Auth réelle | Non |
| Token | Non |
| Login/logout | Non |
| Nouveau statut | Non |

Validations :

| Cible | Résultat |
|-------|----------|
| Backend build | OK |
| Backend tests | OK — 112 tests |
| Frontend build | OK |
| Frontend tests | OK — 167 tests |

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
- pas de nouveau statut ;
- pas de `STAT-08`.

---

## 16. Prochaine étape

Exécuter **AT-07** :

Documentation runbook/README
