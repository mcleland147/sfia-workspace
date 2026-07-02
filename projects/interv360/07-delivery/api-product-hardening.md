# Interv360 — API Product Hardening

**Projet** : Interv360  
**Cycle** : API Product Hardening  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 4  
**Branche** : `delivery/interv360-api-product-hardening`

---

## 1. Objectif

Ce lot durcit l'API Interv360 afin de la rendre plus propre, plus homogène, plus testable et plus exploitable côté produit.

L'objectif est de consolider le contrat API après les lots :

- Backend Users & Session ;
- Audit Trail ;
- Request Model Finalization.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `./request-model-finalization.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 Request Model Finalization est clôturé ;
- le Lot 4 prioritaire est le durcissement API produit.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend Node.js / TypeScript ;
- d'une persistance SQLite locale ;
- d'une API `/api/v1` ;
- d'un frontend connecté en mode API ;
- d'un mode local conservé ;
- d'un endpoint users ;
- d'un modèle Request enrichi ;
- d'un audit trail enrichi ;
- de transitions workflow testées ;
- d'un reset démo ;
- d'erreurs API déjà structurées sur certains cas ;
- de tests backend/frontend.

Limite actuelle :

> l'API fonctionne, mais son contrat doit être durci et homogénéisé avant finalisation UX et industrialisation.

---

## 4. Problème à résoudre

Le produit ne peut pas être considéré comme finalisable tant que le contrat API n'est pas suffisamment clair sur :

- les endpoints disponibles ;
- les formes de réponses ;
- les formes d'erreurs ;
- les codes d'erreur ;
- les validations d'entrée ;
- la compatibilité frontend ;
- les limites assumées ;
- les garde-fous de sécurité.

---

## 5. Périmètre du lot

À livrer :

- cadrage du contrat API cible ;
- audit des endpoints existants ;
- audit des erreurs existantes ;
- décision d'homogénéisation des erreurs ;
- durcissement des validations backend si nécessaire ;
- tests API renforcés ;
- ajustements frontend uniquement si nécessaires pour compatibilité ;
- documentation README / runbook ;
- PR unique en fin de lot.

---

## 6. Hors scope

Ce lot n'introduit pas :

- auth réelle ;
- login réel ;
- logout réel ;
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
- nouveau workflow ;
- nouvelle action métier ;
- CRUD complet ;
- formulaire création demande ;
- administration utilisateurs ;
- reporting avancé ;
- notifications ;
- pagination avancée ;
- tri avancé ;
- versioning API complexe.

---

## 7. Contrat API cible minimal

Endpoints à consolider :

| Endpoint | Objectif |
|----------|----------|
| `GET /health` | Santé backend |
| `GET /api/v1/users` | Liste users fictifs backend |
| `GET /api/v1/requests` | Liste demandes enrichies |
| `GET /api/v1/requests/:id` | Détail demande enrichie |
| `POST /api/v1/requests/:id/transitions` | Transition workflow |
| `GET /api/v1/requests/:id/events` | Journal enrichi |
| `POST /api/v1/demo/reset` | Reset démo |

Formats à préserver :

- liste users : réponse existante ;
- liste requests : `{ items: [...] }` ;
- détail request : `{ request, detail }` ;
- events : `{ items: [...] }` ;
- reset : format existant ;
- erreurs : `{ error: { code, message } }`.

---

## 8. Erreurs API cibles

Erreurs déjà attendues / à consolider :

| Code | HTTP | Cas |
|------|------|-----|
| `REQUEST_NOT_FOUND` | 404 | Demande inconnue |
| `INVALID_TRANSITION_ACTION` | 400 | Action absente ou inconnue |
| `TRANSITION_NOT_ALLOWED` | 409 | Transition métier impossible |
| `INVALID_JSON_BODY` | 400 | Body JSON invalide |
| `INVALID_ACTOR_USER` | 400 | Acteur inconnu ou inactif |
| `DEMO_RESET_FAILED` | 500 | Reset impossible si cas existant |

Objectif :

- homogénéiser la forme d'erreur ;
- éviter les erreurs Express brutes ;
- documenter les cas ;
- tester les statuts HTTP ;
- tester les codes ;
- tester le format `{ error: { code, message } }`.

---

## 9. Validations d'entrée cibles

À auditer puis durcir si nécessaire :

- body JSON absent ;
- body JSON invalide ;
- `action` absent ;
- `action` non string ;
- `action` inconnue ;
- `actorUserId` non string ;
- `actorUserId` inconnu ;
- `actorUserId` inactif ;
- request id inconnu ;
- méthode non supportée si déjà gérée ;
- routes inconnues si déjà gérées.

Décision initiale :

- durcir uniquement les validations utiles au contrat existant ;
- ne pas créer de framework de validation lourd ;
- ne pas introduire de dépendance externe si inutile ;
- conserver le contrat frontend.

---

## 10. Frontend cible

À préserver :

- mode API ;
- mode local ;
- mapping users ;
- mapping requests ;
- mapping events ;
- transitions avec `actorUserId` ;
- reset admin ;
- erreurs API déjà affichées ;
- absence de fallback silencieux.

À ajuster seulement si nécessaire :

- messages d'erreur ;
- parsing d'erreur ;
- fallback d'erreur ;
- tests de compatibilité.

---

## 11. Décision initiale

Décision proposée pour rester Fast Track :

- commencer par auditer le contrat API existant ;
- formaliser les décisions d'erreurs et de validations ;
- durcir le backend ensuite ;
- ajuster le frontend uniquement si nécessaire ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas ajouter de nouveau statut ;
- ne pas modifier le workflow ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles ;
- PR unique en fin de lot.

---

## 12. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| APH-01 | Cadrage opérationnel API hardening | Réalisé |
| APH-02 | Audit contrat API et décisions erreurs/validations | À faire |
| APH-03 | Backend API errors/validation hardening | À faire |
| APH-04 | Frontend API compatibility hardening | À faire |
| APH-05 | Tests backend/frontend et non-régression | À faire |
| APH-06 | Documentation runbook/README | À faire |
| APH-07 | Préparation PR unique | À venir |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Contrat API cible cadré | OK |
| Audit endpoints réalisé | À faire |
| Décisions erreurs/validations prises | À faire |
| Backend erreurs alignées | À faire |
| Backend validations alignées | À faire |
| Frontend compatibilité API conservée | À valider |
| Mode local conservé | À valider |
| Mode API conservé | À valider |
| Audit trail conservé | À valider |
| Request model conservé | À valider |
| Permissions conservées | À valider |
| Backend tests | À faire |
| Frontend tests | À faire |
| Backend build | À faire |
| Frontend build | À faire |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| CRUD complet exclu | OK |

---

## 14. Garde-fous

Le lot doit préserver :

- users backend ;
- session locale ;
- request model enrichi ;
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

## 15. Décision APH-01

APH-01 valide le cadrage opérationnel du Lot 4.

Décisions :

- durcir le contrat API existant ;
- homogénéiser les erreurs utiles ;
- renforcer les validations d'entrée utiles ;
- préserver le contrat frontend ;
- conserver le mode local ;
- conserver le mode API ;
- conserver le request model enrichi ;
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

## 16. Prochaine étape

Exécuter **APH-02** :

Audit contrat API et décisions erreurs/validations
