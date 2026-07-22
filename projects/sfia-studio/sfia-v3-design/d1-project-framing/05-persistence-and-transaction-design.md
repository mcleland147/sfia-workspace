# 05 — Persistence and transaction design

## 1. Recommandation candidate (1er incrément)

| Option | Verdict |
|--------|---------|
| **SQLite via `node:sqlite` (comme OPS1)** | **Recommandé candidat D1-I1** |
| PostgreSQL immédiat | Option future prod multi-user |
| Abstraction SQL portable (types + repositories) | **Oui** — écrire SQL dialect-safe |
| ORM (Prisma/Drizzle) | **Non pour D1** — absent du package.json ; SQL explicite |

Statut : **candidate jusqu’au gate humain**. Pas de migration dans ce cycle.

## 2. Agrégats transactionnels

| Agrégat | Racine | Inclus |
|---------|--------|--------|
| ProjectAgg | projects | trajectories, assignments, doctrine_definitions_applied |
| CycleAgg | cycle_instances | guided_sessions (ref), transition_proposals |
| SessionAgg | guided_sessions | turns (table fille), context_snapshot_id |
| DecisionAgg | decision_requests | gate_instances, human_decisions |
| ReviewAgg | review_bundles | review_bundle_refs |
| AuditStream | audit_events | append-only, no update |

## 3. Frontières de transaction

Une commande = **une transaction SQL** :
1. load aggregates + version check  
2. EvaluatePolicy (read)  
3. mutate aggregates  
4. insert audit_events  
5. commit  

Exceptions : LoadCanonicalContext peut commit snapshot même si session BLOCKED ; GPT call **hors** transaction (call → puis commande ApplyGuidedProposals).

## 4. Tables candidates (physique logique)

Alignées modeled doc 04 + :

- `guided_turns` (session_id, seq, role, prose_ref, proposals_json, created_at)  
- `enforcement_evaluations` (optional materialization ; sinon payload audit)  
- `idempotency_keys` (key, command, response_json, created_at)  
- `schema_meta` (version)

Contraintes CHECK sur enums d’état (modeled 03).  
`version INTEGER NOT NULL` sur projects, cycles, sessions, gates, bundles.  
Sealed : human_decisions, context_snapshots, audit_events, sealed review payload — **no UPDATE**.

## 5. Index

Comme modeled + `idempotency_keys(key UNIQUE)` · `guided_turns(session_id,seq UNIQUE)` · `assignments(project_id,principal_id)`.

## 6. Soft delete / rétention

- projects/cycles/sessions : `deleted_at` nullable  
- audit_events : never delete ; redaction job candidate  
- PII actors : store actorId ; email hors audit payload  

## 7. Concurrence

Optimistic locking `WHERE version=?` → 409 CONFLICT.  
Gates EXPIRED via job/lecture lazy.  
Pas de distributed lock D1.

## 8. Snapshots & digests

ContextSnapshot stocke `head_sha`, `definition_digests_json`, `created_at`.  
Stale si `head_sha != current HEAD` ou digest map mismatch.

## 9. Portabilité PG

Éviter extensions SQLite-only dans SQL D1 ; JSON as TEXT ; timestamps ISO-8601 TEXT/TIMESTAMPTZ compatible.
