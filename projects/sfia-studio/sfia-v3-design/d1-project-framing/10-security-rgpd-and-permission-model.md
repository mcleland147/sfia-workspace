# 10 — Security, RGPD and permission model

## 1. Rôles D1

| Rôle | Capacité principale |
|------|---------------------|
| user | participer session liée |
| project_owner (responsable) | créer/activer projet, cycles, trajectory |
| decision_maker (décideur) | gates E3, seal review, transitions |
| approver | gates où séparation requise (candidate) |
| admin | assignments, archive policies |
| system | context load, policy eval |

Séparation **responsable / décideur** recommandée pour TransitionGate & CycleCompletionGate (même personne tolérée en proto mono-opérateur avec audit explicite — **risque** à gate sécurité).

## 2. Matrice Role × Action × Object × Enforcement × Audit

| Role | Action | Object | E | Audit |
|------|--------|--------|---|-------|
| user | sendGuidedTurn | GuidedSession | E4 free-chat/stale | SESSION/ENFORCEMENT |
| owner | createProject | Workspace | — | PROJECT_CREATED |
| owner | selectMethodMode | Project | E3/E4 claim | PROJECT_MODE_SELECTED |
| owner | openCycle | Cycle | E3 incompat | CYCLE_* |
| decideur | recordDecision | Gate | E4 role | HUMAN_DECISION_* |
| decideur | sealReview | Bundle | E3 | CYCLE_REVIEW_SEALED |
| decideur | decideTransition | Proposal | E3/E4 | TRANSITION_* |
| admin | assignRole | Assignment | — | (audit) |
| system | evaluatePolicy | * | fail-closed | ENFORCEMENT_* |
| * | writeDoctrine | defs | E4 DEF-MODIFY | ENFORCEMENT |

## 3. Contrôles serveur

Toujours AuthZ server-side. UI hide ≠ security.  
Workspace isolation : queries filtrées `workspace_id`.  
Git : read-only adapter ; path allowlist doctrine.  
GPT : no secrets ; limited tools ; prompt-injection guards (doc 06).  
Idempotency keys bound to actor.

## 4. RGPD

- Données perso : actor identifiers, conversation prose  
- Base légale candidate : intérêt légitime outil interne / contrat travail (à valider RSSI)  
- Rétention : audit long ; prose session TTL plus court (candidate)  
- Soft delete projets ; anonymiser actor display on export  
- Droit d’accès : export ReviewBundle redacted  
- Pas de sous-traitance GPT sans DPA revue (risque cycle sécu)

## 5. Risques → cycle sécurité dédié avant implémentation large

- Multi-user réel / IdP  
- Séparation des devoirs stricte  
- DPA OpenAI / logging prompts  
- Retention & purge jobs  
- Threat model prompt injection avancé  

Proto mono-opérateur D1-I1 acceptable **si** anti-claims et audit présents.
