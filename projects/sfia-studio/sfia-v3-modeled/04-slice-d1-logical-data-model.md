# 04 — Slice D1 logical SQL model

Modèle **logique** uniquement — pas de migration, pas de moteur SQL choisi.

## Entités

| Entité | Clé | Relations | Immutable | Mutable | Soft delete | Lock |
|--------|-----|-----------|-----------|---------|-------------|------|
| workspaces | workspace_id | 1-* projects | id, created | name | yes | yes |
| projects | project_id | WS, trajectories, cycles | id, created | state, mode, title | yes | yes |
| project_trajectories | trajectory_id | project | id | content refs | yes | no |
| cycle_instances | cycle_id | project | id, type | state | yes | yes |
| guided_sessions | session_id | cycle | id | state | yes | yes |
| context_snapshots | snapshot_id | session | **full** | — | no | — |
| decision_requests | decision_request_id | cycle/session | id | state | yes | yes |
| human_decisions | decision_id | request/gate | **full** | — | no | — |
| gate_instances | gate_id | request | id | state | no | yes |
| transition_proposals | proposal_id | cycle | id | status | yes | no |
| review_bundles | review_bundle_id | cycle | sealed payload | state | no | yes |
| review_bundle_refs | (bundle_id, ref_key) | bundle | digest, path | accessibility | no | — |
| reserves | reserve_id | cycle | id | status | yes | no |
| audit_events | event_id | * | **full append** | — | no | — |
| doctrine_definitions_applied | (project_id, path, digest) | project | digest | — | no | — |
| assignments | (principal_id, project_id, role) | project | — | role | yes | no |

## Index candidats

`projects(workspace_id, state)` · `cycle_instances(project_id, state)` · `audit_events(project_id, occurred_at)` · `audit_events(correlation_id)` · `gate_instances(state, expires_at)`

## Sensible / rétention

actor emails/ids : rétention RUN ; redaction dans exports ; anonymisation soft-deleted.
