# 03 — T-A0→T-A7 UI mapping

## Principe

UI → `VerticalSliceFacade` → use cases OA / fonctions T-A7 → adapters → projections.

## Matrice

| Étape UI | Module | Use case / API | Input UI | Output UI | Erreurs → UI |
|----------|--------|----------------|----------|-----------|--------------|
| Create | T-A0 | `ResolveDoctrinePackage.resolve` | pin doctrine défaut registry local | doctrine active | DOCTRINE_UNRESOLVED → banner + retry |
| Create | T-A1 | `CreateProject.execute` | title, objective, context, actor local demo, pin, idempotencyKey | Project + LPS v1 | PROJECT_INVALID / ALREADY_EXISTS / PERSISTENCE_FAILURE |
| Overview | T-A1 | `GetProject` / `GetCurrentLivingProjectState` | projectId | fiche | NOT_FOUND |
| Recommend | T-A2 | `QualifyCycle` / `CreateCycle` / `UpdateEpistemicState` / `GetEpistemicState` | projectId, perceived criticality, constraints | CycleInstance + Recommendation epistemic | validation errors → form |
| Decision | T-A3 | `RecordHumanDecision` (+ optional confirmation APIs) | selectedOption, rationale, authority=`LOCAL_DEMO` mapping honnête | HumanDecision | STATE_CONFLICT / authority denied → blocked Critical |
| Authority | T-A3 | `VerifyAuthority` | demo evidence **non authentifiée** | ok=false pour Critical réel | Critical blocked state |
| Evidence/maturity | T-A6 | `EvaluateClaim` / `ProposeMaturity` / `RecommendNextGate` (RO) | project/cycle refs | claims/maturity/next gate | UNKNOWN/BLOCKED honest |
| Readiness | T-A7 | `evaluateHardFoundation`, `evaluateTA6Foundation`, `queryHardTa6FoundationAggregation`, `queryBlockerAggregation`, `evaluateBoundedClaim`, `describeBoundedPersistenceDecision`, `queryOperationalReadiness` | — | dashboard cards | always fail-closed values |
| History | T-A7 F13 | `defaultBoundedHistoryProvider` / documentary | cursor/limit | list bornée | unavailable provider |
| Atomicity (fondation) | T-A7 | `runProjectCycleAtomicOperation` + optional audit port | internal facade | journal local | rollback failed shown honest |
| T-A4/T-A5 | display only | no StartExecution in V1–V5 happy path | — | « non lancé » | — |

## Actor local

`createdBy` / `actor` : ActorReference **demo locale** explicitement non-IAM (ex. `actor:local-morris-demo`).
Jamais `canActAsMorris` authentifié. Critical structurant → **blocked**.

## Interdits UI

Décider Critical · fermer HARD · marquer preuve suffisante · consommer gate Morris · inventer autorité.
