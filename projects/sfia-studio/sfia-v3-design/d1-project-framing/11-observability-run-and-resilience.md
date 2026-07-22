# 11 — Observability, RUN and resilience

## 1. Télémétrie

- **Logs** structurés JSON : correlationId, projectId, cycleId, command, outcome  
- **Metrics** : counters/histograms (création projet, context load ms, stale rate, gate latency, seal rate, transition errors)  
- **Traces** : span per command ; child span GPT/Git  
- **Business events** = AuditEvent stream (source of truth métier)

## 2. Dépendances & modes dégradés

| Dépendance | Indispo | Comportement D1 |
|------------|---------|-----------------|
| SQL | down | fail closed 503 ; no mute GPT-only |
| Git | down | CONTEXT_UNAVAILABLE E4 ; fallback claim v2.6 manual path (UI) |
| GPT | down | session BLOCKED ; reserves ; no auto-success |
| Policy engine | fail | E4 |

## 3. Reprise

- Idempotent command retry  
- Rebuild ContextSnapshot  
- Rebuild ReviewBundle DRAFT  
- No silent auto-retry of sealed mutations  

## 4. Backup / restore / archive

- SQLite file backup candidate (ops)  
- Audit export  
- Archived projects read-only  

## 5. Support / diagnostic

Audit Timeline + correlationId search + ContextUsageReceipt + gate history.

## 6. SLI candidats (pas de SLO contractuel)

| SLI | Description |
|-----|-------------|
| project_create_success_rate | CreateProject OK |
| context_load_latency_p95 | LoadCanonicalContext |
| context_stale_rate | stale detections / sessions |
| decision_latency | OPEN gate → HumanDecision |
| gates_blocked_rate | E3/E4 blocks |
| review_sealed_rate | cycles with SEALED bundle |
| transition_error_rate | invalid transitions |
| d1_journey_availability | end-to-end readiness probe |

SLO chiffrés : **gate humain requis** (non fixés ici).
