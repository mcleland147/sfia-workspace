# 03 — Application services and responsibilities

Chaque cas d’usage = commande applicative (handler) dans le modular monolith.

Légende colonnes : AuthZ · Preconditions · Aggregates · Rules · Tx · Events · Idempotence · Errors.

## Catalogue des use cases

### CreateProject
- Commande : `CreateProject`  
- Acteur : user assignable `project_owner`  
- AuthZ : workspace membership  
- Précond : WorkspaceReference résolu  
- Aggregats : Workspace → new Project(DRAFT)  
- Rules : —  
- Tx : insert project + assignment owner + audit  
- Events : PROJECT_CREATED  
- Résultat : projectId  
- Idempotence : Idempotency-Key → même projectId  
- Errors : WS_NOT_FOUND, UNAUTHORIZED  
- Tests : nominal + duplicate key  

### SelectProjectMethodMode
- Acteur : project_owner  
- Précond : Project DRAFT|ACTIVE ; mode null ou change gated  
- Rules : D1-MODE-REQUIRED (si activate sans mode)  
- Events : PROJECT_MODE_SELECTED  
- Gate : MethodModeGate (E3) si claim v3_candidate  

### DefineProjectTrajectory
- Acteur : owner + GPT suggestion optionnelle  
- Aggregats : ProjectTrajectory  
- Events : (candidate) TRAJECTORY_UPDATED — ou audit générique  
- GPT : peut proposer draft ; commit = humain  

### ProposeCycle / OpenCycle
- Acteur : owner  
- Précond : methodMode set ; Project not ARCHIVED  
- Rules : D1-MODE-REQUIRED, D1-CYCLE-INCOMPAT, D1-V3-CLAIM-INELIGIBLE  
- States : PROPOSED → QUALIFYING → READY  
- Events : CYCLE_PROPOSED, CYCLE_QUALIFICATION_STARTED, CYCLE_OPENED  

### CreateGuidedSession
- Précond : Cycle READY|ACTIVE  
- Rules : D1-FREE-CHAT, D1-NO-PROJECT  
- Events : SESSION_CREATED  

### LoadCanonicalContext
- Service : Canonical Context + Git Adapter + Definition Registry  
- Rules : D1-CONTEXT-UNAVAILABLE, D1-CONTEXT-STALE, D1-DIGEST-MISMATCH  
- Events : CONTEXT_LOADING_STARTED, CONTEXT_READY | CONTEXT_STALE  
- Snapshot sealed immutable  

### StartGuidedConversation
- Dual channel GPT  
- Policy evaluate after each structured proposal  
- Events : RULE_MATCHED, ENFORCEMENT_EVALUATED  
- GPT ne mute pas state  

### EvaluatePolicy
- Input : trigger + object refs + actor  
- Output : EnforcementEvaluation { level, ruleIds, effect, explanationKey, correctionOptions }  
- Fail-closed on engine error (E4)  

### CreateReserve / RequestHumanDecision / OpenGate
- E2/E3 paths  
- Events : RESERVE_CREATED, DECISION_REQUESTED  
- Gate types : voir doc 07  

### RecordHumanDecision
- Acteur : decision_maker / approver selon gate  
- Rules : D1-ROLE-UNAUTHORIZED  
- Sealed record immutable  
- Events : HUMAN_DECISION_RECORDED, GATE_APPROVED|REJECTED  

### ProposeTransition / DecideTransition
- Rules : D1-HUMAN-DECISION-REQUIRED, D1-INVALID-TRANSITION  
- Events : TRANSITION_PROPOSED, TRANSITION_APPROVED  

### BuildCycleReviewBundle / SealCycleReviewBundle
- Rules : refs résolvables + digests vérifiés  
- Events : CYCLE_REVIEW_SEALED  
- Incomplete → cannot complete cycle  

### CompleteCycle / OpenNextCycle
- Rules : D1-CYCLE-NO-REVIEW  
- Events : CYCLE_COMPLETED, NEXT_CYCLE_OPENED  

### ArchiveProject
- Précond : CLOSED or GO  
- Soft delete assignments optional ; audit retained  

## Responsabilités croisées

| Concern | Owner |
|---------|-------|
| State machine integrity | Cycle / Project Services + Policy |
| Deterministic rules | Policy Engine only |
| Prose & suggestions | GPT Adapter via Guided Session |
| Proof & non-repudiation | HumanDecision + Audit + ReviewBundle |
| Git truth | Context Service + Git Adapter |
