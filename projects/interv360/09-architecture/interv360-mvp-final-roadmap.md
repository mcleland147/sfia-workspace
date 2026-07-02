# Interv360 — MVP Final Roadmap

**Projet** : Interv360  
**Cycle** : MVP Final Roadmap  
**Mode** : SFIA Fast Track — Product Roadmap structurante  
**Statut** : Roadmap produit cible  
**Branche** : `product/interv360-mvp-final-roadmap`

---

## 1. Objectif

Ce document définit la roadmap de finalisation produit d'Interv360.

La phase de démonstration est considérée comme validée.

L'objectif est désormais de faire évoluer Interv360 vers un **MVP produit structuré, finalisable et exploitable**, sans se limiter à l'amélioration de la démo.

---

## 2. Point de départ

Interv360 dispose aujourd'hui :

- d'un backend SQLite persistant ;
- d'une API `/api/v1` stabilisée ;
- d'un frontend connecté ;
- d'un mode local et d'un mode API ;
- d'un workflow métier enrichi ;
- d'une mise en attente ;
- d'une reprise ;
- d'une annulation ;
- d'une requalification légère ;
- d'une matrice de permissions ;
- d'un user switcher frontend ;
- de 5 utilisateurs fictifs ;
- d'une session locale frontend ;
- d'un runbook de démonstration ;
- de tests backend et frontend.

La démo n'est plus le sujet principal.

Le sujet devient :

> finaliser un produit MVP cohérent, robuste et livrable.

---

## 3. État d'avancement actuel

Estimation produit :

| Axe | État | Avancement estimé |
|-----|------|-------------------|
| Démo produit | Validée | 90% |
| Workflow métier | Solide MVP | 80% |
| Permissions / rôles | Cohérent en simulation | 75% |
| Utilisateurs / session | Fondation frontend | 40% |
| Backend / API | Stable mais incomplet produit | 65% |
| Audit trail | Partiel | 45% |
| Modèle métier demande | Correct mais à finaliser | 60% |
| UX produit | Correcte mais encore démonstrative | 60% |
| Industrialisation | Partielle | 50% |

Estimation globale :

> Interv360 est à environ **65% d'un MVP produit finalisable**.

---

## 4. Changement de posture produit

Avant :

> construire une démonstration crédible.

Maintenant :

> finaliser un MVP produit structuré.

Conséquences :

- ne plus créer de cycles uniquement orientés démo ;
- privilégier les capacités produit réelles ;
- réduire les incréments cosmétiques ;
- conserver le Fast Track ;
- regrouper les décisions utiles dans des lots cohérents ;
- éviter les PR documentaires intermédiaires sans valeur produit directe.

---

## 5. Définition du MVP final Interv360

Le MVP final doit permettre :

1. de gérer une demande d'intervention ;
2. de suivre son cycle de vie ;
3. d'identifier un utilisateur courant ;
4. d'appliquer des permissions cohérentes ;
5. de tracer les actions ;
6. de consulter un historique exploitable ;
7. de disposer d'une API claire ;
8. de persister les données ;
9. de démontrer un usage produit crédible ;
10. de documenter installation, usage, limites et évolutions.

---

## 6. Critères de sortie du MVP final

Le MVP final sera considéré atteint lorsque :

| Critère | Attendu |
|---------|---------|
| Users backend | Présents |
| Session applicative minimale | Présente |
| Rôle porté par utilisateur | Oui |
| Permissions appliquées | Oui |
| Audit trail enrichi | Oui |
| Historique lisible UI | Oui |
| Modèle demande finalisé | Oui |
| API documentée | Oui |
| Tests backend/frontend stables | Oui |
| Runbook produit final | Oui |
| README installation/usage | Oui |
| Auth réelle externe | Non obligatoire |
| CRM / données réelles | Non obligatoire |
| SSO / Entra ID | Non obligatoire |

---

## 7. Roadmap de finalisation

### Lot 1 — Backend users & session

Objectif :

- sortir du user switcher uniquement frontend ;
- créer une fondation utilisateur côté backend ;
- préparer l'audit trail.

À livrer :

- modèle utilisateur backend ;
- seed utilisateurs fictifs backend ;
- endpoint users ;
- session applicative minimale ;
- rôle porté par l'utilisateur backend ;
- frontend branché sur cette source ;
- conservation des permissions existantes.

Branche recommandée :

`delivery/interv360-backend-users-session`

Priorité :

**Très haute**

---

### Lot 2 — Audit trail produit

Objectif :

- tracer proprement les actions métier.

À livrer :

- acteur dans chaque événement ;
- ancien statut ;
- nouveau statut ;
- action ;
- date ;
- affichage historique UI ;
- tests persistence/API/UI.

Branche recommandée :

`delivery/interv360-audit-trail`

Priorité :

**Très haute**

---

### Lot 3 — Modèle métier demande final

Objectif :

- stabiliser le modèle métier `Request`.

À livrer :

- demandeur ;
- site ;
- équipement ;
- catégorie ;
- priorité ;
- criticité ;
- impact métier ;
- affectation éventuelle ;
- statut ;
- historique ;
- validations métier.

Branche recommandée :

`delivery/interv360-request-model-finalization`

Priorité :

**Haute**

---

### Lot 4 — API product hardening

Objectif :

- rendre l'API plus propre et exploitable.

À livrer :

- endpoints clarifiés ;
- erreurs homogènes ;
- validations API renforcées ;
- documentation API ;
- tests API élargis ;
- compatibilité frontend conservée.

Branche recommandée :

`delivery/interv360-api-product-hardening`

Priorité :

**Haute**

---

### Lot 5 — UX produit final MVP

Objectif :

- sortir de l'interface orientée démonstration.

À livrer :

- parcours utilisateur plus produit ;
- fiche demande plus lisible ;
- historique clair ;
- actions mieux structurées ;
- messages améliorés ;
- états vides / erreurs ;
- vue utilisateur courant clarifiée.

Branche recommandée :

`delivery/interv360-product-ux-finalization`

Priorité :

**Moyenne à haute**

---

### Lot 6 — Industrialisation MVP

Objectif :

- rendre le produit livrable proprement.

À livrer :

- README global ;
- guide installation ;
- guide exploitation locale ;
- variables `.env` propres ;
- scripts build/test/run ;
- limites connues ;
- stratégie de déploiement ;
- éventuellement CI.

Branche recommandée :

`delivery/interv360-product-industrialization`

Priorité :

**Moyenne**

---

## 8. Hors scope du MVP final

Le MVP final n'exige pas encore :

- SSO ;
- Entra ID ;
- OAuth complet ;
- CRM réel ;
- données réelles ;
- multi-tenant ;
- SLA avancés ;
- moteur BPMN ;
- moteur workflow externe ;
- reporting avancé ;
- notifications ;
- supervision ;
- déploiement cloud complet.

Ces sujets restent possibles plus tard, mais ne doivent pas bloquer la finalisation du MVP.

---

## 9. Méthodologie SFIA adaptée

La méthode SFIA doit rester accélérée, mais plus orientée produit.

Règles à appliquer :

1. un lot = une capacité produit exploitable ;
2. pas de PR documentaire isolée sauf décision structurante ;
3. cadrage intégré au delivery quand possible ;
4. PR unique par lot ;
5. post-merge léger ;
6. tests obligatoires à chaque lot ;
7. garde-fous explicites dans chaque delivery doc ;
8. pas de scope creep ;
9. pas de Notion tant que non demandé ;
10. pas de modification `sfia-notion-sync`.

---

## 10. Découpage recommandé des prochains cycles

| Ordre | Cycle | Type | Résultat attendu |
|------|-------|------|------------------|
| 1 | `delivery/interv360-backend-users-session` | Delivery | Users backend + session minimale |
| 2 | `delivery/interv360-audit-trail` | Delivery | Historique fiable avec acteur |
| 3 | `delivery/interv360-request-model-finalization` | Delivery | Modèle demande stabilisé |
| 4 | `delivery/interv360-api-product-hardening` | Delivery | API renforcée/documentée |
| 5 | `delivery/interv360-product-ux-finalization` | Delivery | UX MVP final |
| 6 | `delivery/interv360-product-industrialization` | Delivery | Livrable installable/documenté |

---

## 11. Estimation cible

| Jalons | Estimation |
|--------|------------|
| État actuel | 65% |
| Après Lot 1 users/session | 72% |
| Après Lot 2 audit trail | 80% |
| Après Lot 3 modèle demande | 86% |
| Après Lot 4 API hardening | 90% |
| Après Lot 5 UX finalisation | 94% |
| Après Lot 6 industrialisation | 96–98% |

Objectif réaliste :

> atteindre **90–95% MVP produit structuré** avant d'ouvrir les sujets enterprise lourds.

---

## 12. Premier lot recommandé

Le premier lot à ouvrir est :

`delivery/interv360-backend-users-session`

Objectif :

- matérialiser les utilisateurs côté backend ;
- sortir d'une session purement frontend ;
- préparer l'audit trail ;
- conserver une approche simple sans OAuth/JWT/SSO.

Ce lot ne doit pas introduire :

- login réel ;
- mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles.

---

## 13. Décision finale

| Élément | Décision |
|--------|----------|
| Phase démo | Clôturée |
| Nouvelle cible | MVP produit structuré |
| Avancement actuel | 65% |
| Cible intermédiaire | 90–95% |
| Méthode | SFIA Fast Track produit |
| Prochain lot | Backend users & session |
| Prochaine branche recommandée | `delivery/interv360-backend-users-session` |

---

## 14. Préparation PR

### Titre proposé

`Define Interv360 MVP final roadmap`

### Description proposée

```markdown
## Summary
This PR defines the final MVP roadmap for Interv360.
It marks the end of the demo-oriented phase and shifts the project toward a structured, finalizable product MVP.

## What changed
- defines the current product maturity at approximately 65%;
- defines the target as 90–95% MVP product maturity;
- clarifies that the demo phase is now considered validated;
- defines the MVP final criteria;
- introduces the SFIA Fast Track product-oriented method;
- defines the 6 delivery lots required to finalize the MVP:
  1. Backend users & session
  2. Audit trail
  3. Request model finalization
  4. API product hardening
  5. Product UX finalization
  6. Product industrialization

## Next recommended lot
`delivery/interv360-backend-users-session`
This lot will introduce backend users and a minimal application session, while keeping the approach simple and excluding OAuth/JWT/SSO at this stage.

## Validation
Documentation-only PR.
No code, frontend, backend, SQLite, API, authentication, OAuth/JWT/SSO, CRM, real data, workflow status, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
```

---

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...product/interv360-mvp-final-roadmap?expand=1 |
| Cible | `main` |
| Source | `product/interv360-mvp-final-roadmap` |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #64 — https://github.com/mcleland147/sfia-workspace/pull/64 |
| Source | `product/interv360-mvp-final-roadmap` |
| Cible | `main` |
| Méthode | `Merge commit (GitHub PR merge)` |
| Commit merge | `93c28b0` |
| Main synchronisée | OK |
| Type de PR | Décision structurante |
| Code modifié | Non |
| Frontend modifié | Non |
| Backend modifié | Non |
| SQLite modifiée | Non |
| API modifiée | Non |
| Auth réelle introduite | Non |
| OAuth / JWT / SSO introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveau statut introduit | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

La roadmap **Interv360 MVP Final Roadmap** est mergée dans `main`.

Elle acte la bascule suivante :

> phase démo validée → finalisation MVP produit structuré.

Décisions confirmées :

- avancement actuel estimé : **65%** ;
- cible intermédiaire : **90–95% MVP produit structuré** ;
- méthode : **SFIA Fast Track produit** ;
- découpage en 6 lots ;
- premier lot à ouvrir : `delivery/interv360-backend-users-session`.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Track.

### Prochaine étape

Ouvrir le Lot 1 :

`delivery/interv360-backend-users-session`

Objectif :

- matérialiser les utilisateurs côté backend ;
- introduire une session applicative minimale ;
- conserver une approche simple sans OAuth/JWT/SSO ;
- préparer l'audit trail.

---

## 17. Ouverture du Lot 1

Le Lot 1 de la roadmap est ouvert dans la branche :

`delivery/interv360-backend-users-session`

Objectif :

- matérialiser les utilisateurs côté backend ;
- introduire une session applicative minimale ;
- conserver une approche simple sans OAuth/JWT/SSO ;
- préparer le Lot 2 Audit Trail.

Document delivery associé :

`../07-delivery/backend-users-session.md`

Décision :

- pas de PR documentaire intermédiaire pour BUS-01 ;
- le cadrage opérationnel est intégré directement au lot delivery ;
- PR unique prévue en fin de lot.

---

## 18. Clôture du Lot 1 — Backend Users & Session

Le Lot 1 de la roadmap est mergé dans `main`.

PR :

#65 — https://github.com/mcleland147/sfia-workspace/pull/65

Commit merge :

`7bac858`

Résultat :

- modèle backend `User` ;
- table SQLite `users` ;
- seed idempotent des 5 utilisateurs ;
- API users ;
- frontend mode API branché sur les users backend ;
- mode local conservé ;
- session locale `interv360:current-user-id` ;
- fallback utilisateur ;
- transitions inchangées ;
- audit trail complet reporté au Lot 2.

Impact roadmap :

| Jalons | Estimation |
|--------|------------|
| Avant Lot 1 | 65% |
| Après Lot 1 | 72% |

Prochain lot :

`delivery/interv360-audit-trail`

Objectif :

- introduire l'acteur dans les événements ;
- enrichir l'historique ;
- rendre le journal exploitable côté produit.

---

## 19. Ouverture du Lot 2 — Audit Trail

Le Lot 2 de la roadmap est ouvert dans la branche :

`delivery/interv360-audit-trail`

Objectif :

- rattacher les actions métier à un acteur ;
- enrichir les événements workflow ;
- afficher un historique exploitable ;
- conserver une approche simple sans OAuth/JWT/SSO.

Document delivery associé :

`../07-delivery/audit-trail.md`

Décision :

- pas de PR documentaire intermédiaire pour AT-01 ;
- le cadrage opérationnel est intégré directement au lot delivery ;
- PR unique prévue en fin de lot.

---

## 20. Clôture du Lot 2 — Audit Trail

Le Lot 2 de la roadmap est mergé dans `main`.

PR :

#66 — https://github.com/mcleland147/sfia-workspace/pull/66

Commit merge :

`693113b`

Résultat :

- enrichissement SQLite de `workflow_events` ;
- persistance de `action` ;
- conservation de `fromStatus` / `toStatus` ;
- rattachement optionnel d'un acteur aux transitions API via `actorUserId` ;
- validation de l'acteur contre les users backend actifs ;
- erreur `INVALID_ACTOR_USER` ;
- stockage du snapshot acteur :
  - `actorUserId`
  - `actorDisplayName`
  - `actorRole`
- API events enrichie ;
- réponse events `{ items: [...] }` conservée ;
- journal frontend enrichi ;
- compatibilité avec les événements legacy ;
- mode local conservé ;
- mode API conservé ;
- permissions existantes conservées ;
- reset admin conservé.

Impact roadmap :

| Jalons | Estimation |
|--------|------------|
| Après Lot 1 | 72% |
| Après Lot 2 | 80% |

Prochain lot :

`delivery/interv360-request-model-finalization`

Objectif :

- stabiliser le modèle métier `Request` ;
- finaliser les champs métier structurants ;
- renforcer la cohérence métier avant durcissement API.

---

## 21. Ouverture du Lot 3 — Request Model Finalization

Le Lot 3 de la roadmap est ouvert dans la branche :

`delivery/interv360-request-model-finalization`

Objectif :

- stabiliser le modèle métier `Request` ;
- finaliser les champs métier structurants ;
- aligner backend / SQLite / API / frontend ;
- conserver les modes local et API ;
- préserver l'audit trail enrichi.

Document delivery associé :

`../07-delivery/request-model-finalization.md`

Décision :

- pas de PR documentaire intermédiaire pour RM-01 ;
- le cadrage opérationnel est intégré directement au lot delivery ;
- PR unique prévue en fin de lot.

---

## 22. Clôture du Lot 3 — Request Model Finalization

Le Lot 3 de la roadmap est mergé dans `main`.

PR :

#67 — https://github.com/mcleland147/sfia-workspace/pull/67

Commit merge :

`6638f8c`

Résultat :

- stabilisation du modèle métier `Request` ;
- enrichissement compatible SQLite de la table `requests` ;
- ajout des champs demandeur :
  - `requesterName`
  - `requesterTeam`
- ajout des champs affectation :
  - `assignedToUserId`
  - `assignedToDisplayName`
- conservation des champs legacy :
  - `customerLabel`
  - `assignedTechnicianLabel`
- seed backend enrichi ;
- seed local aligné avec le backend ;
- API liste enrichie ;
- API détail enrichie ;
- frontend fiche demande enrichie ;
- frontend liste demande enrichie ;
- recherche enrichie ;
- mode local conservé ;
- mode API conservé ;
- audit trail conservé ;
- permissions existantes conservées ;
- reset admin conservé.

Limites confirmées :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas d'authentification réelle ;
- pas de CRM ;
- pas de données réelles ;
- pas de nouveau statut ;
- pas de `STAT-08`.

Impact roadmap :

| Jalons | Estimation |
|--------|------------|
| Après Lot 2 | 80% |
| Après Lot 3 | 86% |

Prochain lot :

`delivery/interv360-api-product-hardening`

Objectif :

- clarifier les endpoints API ;
- homogénéiser les erreurs ;
- renforcer les validations API ;
- documenter le contrat API ;
- conserver la compatibilité frontend avant finalisation UX.

---

## 23. Ouverture du Lot 4 — API Product Hardening

Le Lot 4 de la roadmap est ouvert dans la branche :

`delivery/interv360-api-product-hardening`

Objectif :

- clarifier les endpoints API ;
- homogénéiser les erreurs ;
- renforcer les validations API ;
- documenter le contrat API ;
- conserver la compatibilité frontend ;
- préserver le modèle Request enrichi ;
- préserver l'audit trail enrichi.

Document delivery associé :

`../07-delivery/api-product-hardening.md`

Décision :

- pas de PR documentaire intermédiaire pour APH-01 ;
- le cadrage opérationnel est intégré directement au lot delivery ;
- PR unique prévue en fin de lot.

---

## 24. Clôture du Lot 4 — API Product Hardening

Le Lot 4 de la roadmap est mergé dans `main`.

PR :

#68 — https://github.com/mcleland147/sfia-workspace/pull/68

Commit merge :

`157a604`

Résultat :

- contrat API clarifié ;
- endpoints existants préservés ;
- formats OK existants préservés ;
- format d'erreur stabilisé :
  - `{ error: { code, message } }`
- helper backend erreurs API ajouté ;
- validations transitions durcies ;
- codes d'erreur stabilisés :
  - `REQUEST_NOT_FOUND`
  - `INVALID_TRANSITION_ACTION`
  - `TRANSITION_NOT_ALLOWED`
  - `INVALID_JSON_BODY`
  - `INVALID_ACTOR_USER`
  - `USER_NOT_FOUND`
  - `DEMO_MODE_REQUIRED`
  - `INTERNAL_ERROR`
  - `ROUTE_NOT_FOUND`
- `METHOD_NOT_ALLOWED` reporté ;
- `DEMO_RESET_FAILED` non ajouté artificiellement ;
- parsing frontend requests aligné ;
- parsing frontend users aligné ;
- absence de fallback silencieux vers le mode local confirmée ;
- mode local conservé ;
- mode API conservé ;
- request model enrichi conservé ;
- audit trail enrichi conservé ;
- permissions existantes conservées ;
- reset admin conservé.

Limites confirmées :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas d'authentification réelle ;
- pas de session backend réelle ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de nouveau statut ;
- pas de `STAT-08`.

Impact roadmap :

| Jalons | Estimation |
|--------|------------|
| Après Lot 3 | 86% |
| Après Lot 4 | 90% |

Prochain lot :

`delivery/interv360-product-ux-finalization`

Objectif :

- améliorer l'expérience produit MVP ;
- clarifier la fiche demande ;
- clarifier l'historique ;
- clarifier les actions disponibles ;
- améliorer les messages et états vides / erreurs ;
- conserver le socle API, request model, audit trail et permissions.

---

## 25. Ouverture du Lot 5 — Product UX Finalization

Le Lot 5 de la roadmap est ouvert dans la branche :

`delivery/interv360-product-ux-finalization`

Objectif :

- améliorer l'expérience produit MVP ;
- clarifier la fiche demande ;
- clarifier l'historique ;
- clarifier les actions disponibles ;
- améliorer les messages et états vides / erreurs ;
- clarifier l'utilisateur courant ;
- conserver le socle API, request model, audit trail et permissions.

Document delivery associé :

`../07-delivery/product-ux-finalization.md`

Décision :

- pas de PR documentaire intermédiaire pour UX-01 ;
- le cadrage opérationnel est intégré directement au lot delivery ;
- PR unique prévue en fin de lot.
