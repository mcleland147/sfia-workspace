# 07 — Policy and gate orchestration design

## 1. Projection runtime E0–E4

| Niveau | Effet runtime D1 |
|--------|------------------|
| E0 | Informational UI / log |
| E1 | Warning ; continue |
| E2 | Create Reserve ; may continue with banner |
| E3 | DecisionRequest + Gate ; block effect until HumanDecision |
| E4 | Hard block ; no state transition |

## 2. Moments d’évaluation

- Before command mutate  
- After GPT structured proposal  
- Before CompleteCycle / DecideTransition  
- On context load and before each guided turn  

## 3. Priorité / conflits

1. E4 wins over lower  
2. Same level : union of correctionOptions ; most restrictive effect  
3. Engine failure → treat as E4 fail-closed  
4. No GPT arbitration of conflicts  

## 4. Composition

Rules catalog JSON (modeled) loaded by Definition Registry digests.  
`EvaluatePolicy(trigger, facts)` → ordered matched rules + dominant effect.

## 5. Explication / réserve / dérogation

- `userExplanationKey` → i18n UI  
- Reserve : E2 path ; status OPEN until resolved  
- Dérogation : **non** en D1 sauf gate humain explicite futur (hors scope)  
- Expiration gates : `expires_at` ; lazy expire on read  
- Révocation : Gate REVOKED + audit ; does not delete HumanDecision history  

## 6. Cache / stale policy

Cache evaluations by `(ruleDigest, factsHash)` TTL short.  
Invalidate on project/cycle version bump or context digest change.

## 7. Gates D1

| Gate | Trigger | Role | Preuves | Effet débloqué | Events |
|------|---------|------|---------|----------------|--------|
| ProjectCreationGate | optional org policy | owner | workspace auth | CreateProject | GATE_* |
| MethodModeGate | select mode / activate | owner/decideur | eligibility facts | mode persisted / ACTIVE | PROJECT_MODE_SELECTED |
| CycleOpeningGate | OpenCycle | owner | mode, project state | CYCLE_OPENED | |
| HumanDecisionGate | DecisionRequest OPEN | decideur | DR payload, context receipt | DECIDED | HUMAN_DECISION_RECORDED |
| TransitionGate | DecideTransition | decideur | proposal + review sealed? | state transition | TRANSITION_APPROVED |
| CycleCompletionGate | CompleteCycle | decideur/owner | ReviewBundle SEALED | COMPLETED | CYCLE_COMPLETED |

États gate : OPEN → APPROVED|REJECTED|EXPIRED|REVOKED (modeled 03).

## 8. Mapping rules → gates

D1-MODE-REQUIRED → MethodModeGate  
D1-HUMAN-DECISION-REQUIRED / D1-CYCLE-NO-REVIEW → HumanDecisionGate / CycleCompletionGate  
D1-ROLE-UNAUTHORIZED → block OpenGate/Record  
D1-INVALID-TRANSITION → no TransitionGate open  
E4 rules → no gate (hard stop) except informational link to correction.
