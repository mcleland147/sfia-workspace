# 03 — Data and audit

## SQLite file
`.sfia-exec/local-i1/state/d1.sqlite` (override `D1_SQLITE_PATH`)

## Tables
- d1_projects
- d1_assignments
- d1_audit_events (append-only)
- d1_idempotency_keys

## Events
PROJECT_CREATED · PROJECT_MODE_SELECTED · PROJECT_ACTIVATED

## Mono-opérateur
`actor-mono-i1` = project_owner + decision_maker (DESIGN-R01, temporaire)
