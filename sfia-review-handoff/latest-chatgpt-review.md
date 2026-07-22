# Review Pack Full — SFIA v3.0 V3-MODELED Foundation & Slice D1

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 17:54:10 CEST
- **Cycle :** 6 — Architecture fonctionnelle (EVOL/DOC/ARCHI)
- **Profil :** Critical
- **Gates consommés :** GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0 · GO OUVERTURE V3-MODELED
- **Gate suivant :** GO VALIDATION V3-MODELED — FOUNDATION AND SLICE D1
- **Repo/branche :** mcleland147/sfia-workspace · delivery/sfia-studio-control-tower-fast-track
- **HEAD/base :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Handoff précédent :** 2749565ccc35739c6c1bd8d6bc29148a7d1a56f3
- **Baseline :** SFIA v2.6
- **Statut v3 initial :** V3-DOCUMENTED
- **Statut v3 proposé :** **V3-MODELED CANDIDATE** (Slice D1 modeled)
- **BCDI :** BCDI-D1-PROJECT-FRAMING-MODEL
- **État Git initial :** dirty attendu (CT + framing + modeled) · staged vide · HEAD=origin/main

## 2. Validation structurelle

- Outil : ajv@6.15.0 (Draft-07) — Draft 2020-12 non supporté sans nouvelle dépendance (incompatibilité locale documentée)
- Schémas : 19 · parse OK · $id uniques · compile OK · $ref résolus
- Exemples : 11/11 OK (13 rules + 6 audit events) — `.tmp-sfia-review/v3-modeled-d1-validation.json`
- package.json / lockfiles : **non modifiés** · aucune install

## 3. Périmètre D1 / hors scope

Inclus : Project framing jusqu’à Transition + CycleReviewBundle + Audit.
Exclus (placeholders) : ActionCandidate, ExecutionContract, Cursor, Evidence exec, D2/D3.

## 4. Fichiers Markdown créés (contenu complet)


### `projects/sfia-studio/sfia-v3-modeled/README.md`

```markdown
# SFIA v3.0 — V3-MODELED Foundation & Slice D1

| Champ | Valeur |
|-------|--------|
| **Statut** | **V3-MODELED CANDIDATE** (si critères cycle satisfaits) |
| **Cadrage** | V3-DOCUMENTED validé (`GO VALIDATION DOCUMENTAIRE`) |
| **Gate consommé** | `GO OUVERTURE V3-MODELED` |
| **Gate suivant** | `GO VALIDATION V3-MODELED — FOUNDATION AND SLICE D1` |
| **BCDI** | `BCDI-D1-PROJECT-FRAMING-MODEL` |
| **Baseline** | SFIA v2.6 |
| **Adoption v3** | Non |
| **Implémentation** | Non autorisée |

## Contenu

| # | Fichier |
|---|---------|
| 01 | Conventions & scope |
| 02 | Modèle fonctionnel D1 |
| 03 | États & transitions |
| 04 | Modèle SQL logique |
| 05 | Catalogue enforcement E0–E4 |
| 06 | Catalogue événements |
| 07 | CycleReviewBundle |
| 08 | Traçabilité doctrine→modèle |
| 09 | Plan de validation |
| 10 | Decision pack |
| schemas/ | JSON Schema Draft-07 (compat ajv 6 local) |
| examples/ | Exemples non canoniques |

## Anti-claims

Pas V3-IMPLEMENTED / VALIDATED / ELIGIBLE / ADOPTED.
Pas de code Studio. Pas de migration SQL. Canoniques v2.6 intactes.

```

### `projects/sfia-studio/sfia-v3-modeled/01-modeling-scope-and-conventions.md`

```markdown
# 01 — Scope and modeling conventions

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-PROJECT-FRAMING-MODEL |
| JSON Schema | **Draft-07** (ajv@6.15.0 local — Draft 2020-12 non supporté sans nouvelle dépendance) |

## 1. Périmètre inclus

Project framing : WorkspaceReference → Project → Trajectory → CycleInstance cadrage → GuidedSession → ContextSnapshot → DecisionRequest/Gate/HumanDecision → TransitionProposal → CycleReviewBundle → AuditEvents.

## 2. Hors périmètre (placeholders only)

ActionCandidate, ExecutionContract, Cursor execution, Evidence technique, ReleaseReview, CapitalizationReview, D2/D3.

## 3. Conventions

- `$id` : `https://sfia.local/schemas/v3-modeled/<area>/<name>.schema.json`
- `schemaVersion` : `0.1.0-d1` sur objets instance
- `additionalProperties`: false sauf `payload` events (documenté)
- IDs : string pattern `^[a-z][a-z0-9-]*-[a-z0-9-]+$` ou UUID v4 selon objet
- Dates : `date-time` RFC3339
- `doctrineVersion` : string (ex. `SFIA-v2.6` baseline ; `SFIA-v3.0-candidate` claim)
- `definitionDigests` : map path→sha256
- Exemples **non canoniques**
- TypeScript **non SoT**
- Propriétés `candidate*` marquées dans docs si incertitude

## 4. Canonicalité

| Format | Rôle |
|--------|------|
| Markdown (framing + modeled docs) | Pourquoi |
| JSON Schema + instances defs | Quoi (candidates) |
| SQL logique (doc 04) | État futur |
| examples/*.json | Illustrations |

## 5. Outils validation

ajv@6 dans `projects/sfia-studio/app/node_modules` — aucune install, aucun package.json modifié.

```

### `projects/sfia-studio/sfia-v3-modeled/02-slice-d1-functional-model.md`

```markdown
# 02 — Slice D1 functional model

## Parcours (17 étapes)

| # | Étape | Acteur | Lit | Crée/MAJ | E | Gate | Event | État suivant |
|---|-------|--------|-----|----------|---|------|-------|--------------|
| 1 | Entrée Workspace | User | WorkspaceReference | — | E0 | — | — | — |
| 2 | Créer Project | Responsable | WS | Project DRAFT | E3 si hors WS | create | PROJECT_CREATED | DRAFT |
| 3 | Sélection mode méthodo | Responsable | Project | mode | E3 si absent | — | PROJECT_MODE_SELECTED | DRAFT |
| 4 | ProjectTrajectory | Responsable+GPT | Project | Trajectory | E1 | — | — | — |
| 5 | CycleInstance cadrage | Moteur+User | Project ACTIVE/DRAFT | Cycle PROPOSED | E3 si mode absent | — | CYCLE_PROPOSED | QUALIFYING |
| 6 | GuidedSession | Studio | Cycle | Session CREATED | E4 free-chat | — | SESSION_CREATED | CONTEXT_LOADING |
| 7 | ContextSnapshot | Moteur | Git digests | Snapshot | E4 si indispo | — | CONTEXT_READY / STALE | READY |
| 8 | Conversation guidée | GPT+User | Context | turns (ref) | E1–E3 rules | — | RULE_MATCHED | IN_PROGRESS |
| 9 | Rules applicables | Moteur | policies | EnforcementEvaluation | E0–E4 | — | ENFORCEMENT_EVALUATED | — |
| 10 | Reserve / DecisionRequest | Moteur/User | eval | Reserve/DR | E2/E3 | — | RESERVE_*/DECISION_REQUESTED | AWAITING_HUMAN |
| 11 | GateInstance | Studio | DR | Gate OPEN | E3 | UI | — | DECISION_REQUIRED |
| 12 | HumanDecision | Décideur | Gate | Decision sealed | E4 si role KO | GO/NO_GO | HUMAN_DECISION_RECORDED | — |
| 13 | TransitionProposal | Moteur/GPT | Decision | Proposal | E1 | — | TRANSITION_PROPOSED | VALIDATING |
| 14 | CycleReviewBundle | Studio | cycle artifacts | Bundle DRAFT→SEALED | E3 sans revue | — | CYCLE_REVIEW_SEALED | — |
| 15 | Décision transition | Décideur | Bundle | Gate transition | E3 | GO | TRANSITION_APPROVED | — |
| 16 | MAJ Project/Cycle | Moteur | Decision | states | E4 invalid | — | CYCLE_COMPLETED | COMPLETED |
| 17 | Audit trail | Moteur | all | AuditEvents | — | — | * | — |

### Colonnes complémentaires (toutes étapes)

| Dimension | Règle D1 |
|-----------|----------|
| Préconditions | Workspace résolu ; pour effets structurants : mode méthodo + ContextSnapshot non stale |
| Entrée | Intent utilisateur ou proposition GPT bornée ; jamais free-chat hors Project en mode v3 |
| Policy | Catalogue `05` / `enforcement-rules.example.json` (E0–E4) |
| Preuve | AuditEvent append-only + digests ContextSnapshot + HumanDecision sealed si E3/E4 gate |
| Erreur / stop | Voir stop conditions ; fail-closed (E4) sans contournement silencieux |

### Stop conditions D1

Contexte stale non résolu · rôle non habilité · claim v3 hors éligibilité · transition invalide · cycle sans revue sealed · doctrineVersion/definitionDigests incohérents.

```

### `projects/sfia-studio/sfia-v3-modeled/03-slice-d1-state-and-transition-model.md`

```markdown
# 03 — Slice D1 state and transition model

États **simplifiés** vs cadrage 04 (challenge : moins d’états redondants pour D1).

## Project
`DRAFT → ACTIVE → PAUSED ↔ ACTIVE → CLOSED → ARCHIVED`

| Transition | Preconditions | Role | E | Events |
|------------|---------------|------|---|--------|
| DRAFT→ACTIVE | mode sélectionné | Responsable | E3 | PROJECT_ACTIVATED |
| *→PAUSED | décision ou système | Responsable | E1 | — |
| *→CLOSED | cycles terminés ou GO | Décideur | E3 | — |
| CLOSED→ARCHIVED | rétention | Admin | E3 | — |

## CycleInstance
`PROPOSED → QUALIFYING → READY → ACTIVE → DECISION_REQUIRED → VALIDATING → COMPLETED`

Aussi : `→ PAUSED | BLOCKED | CANCELLED` depuis états non terminaux.

| Transition | Preconditions | E |
|------------|---------------|---|
| PROPOSED→QUALIFYING | Project DRAFT/ACTIVE | E0 |
| QUALIFYING→READY | Context READY | E3 si stale |
| READY→ACTIVE | session ready | E0 |
| ACTIVE→DECISION_REQUIRED | DecisionRequest OPEN | E0 |
| DECISION_REQUIRED→VALIDATING | HumanDecision recorded | E3 |
| VALIDATING→COMPLETED | ReviewBundle SEALED + transition GO | E3 |

## GuidedSession
`CREATED → CONTEXT_LOADING → READY → IN_PROGRESS → AWAITING_HUMAN → COMPLETED | BLOCKED | ABANDONED`

## GateInstance
`OPEN → APPROVED | REJECTED | EXPIRED | REVOKED` (irréversible sauf REVOKED correctif)

## DecisionRequest
`DRAFT → OPEN → DECIDED | CANCELLED | EXPIRED`

## ReviewBundle
`DRAFT → SEALED → EXPORTED? → ARCHIVED` (SEALED immuable)

```

### `projects/sfia-studio/sfia-v3-modeled/04-slice-d1-logical-data-model.md`

```markdown
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

```

### `projects/sfia-studio/sfia-v3-modeled/05-slice-d1-enforcement-policy-catalog.md`

```markdown
# 05 — Slice D1 enforcement policy catalog

Règles **bornées D1** (pas policies Cursor D2).

| ruleId | scope | trigger | condition | E | correction | role | audit |
|--------|-------|---------|-----------|---|------------|------|-------|
| D1-NO-PROJECT | global | chat/action | projectId absent mode v3 | E4 | create/select project | user | ENFORCEMENT_EVALUATED |
| D1-MODE-REQUIRED | project | activate/cycle | methodMode null | E3 | select mode | responsable | DECISION_REQUESTED |
| D1-CONTEXT-UNAVAILABLE | session | context load | Git/defs fail | E4 | retry/fallback mode | system | CONTEXT_* |
| D1-CONTEXT-STALE | session | any effect | digest≠HEAD | E4 | requalify | user | CONTEXT_STALE |
| D1-CYCLE-INCOMPAT | cycle | open | project state invalid | E3 | fix project state | responsable | RULE_MATCHED |
| D1-ROLE-UNAUTHORIZED | gate | decide | role not assigned | E4 | assign role | admin | ENFORCEMENT_EVALUATED |
| D1-HUMAN-DECISION-REQUIRED | cycle | transition | DecisionRequest OPEN | E3 | open gate UI | décideur | DECISION_REQUESTED |
| D1-INVALID-TRANSITION | state | transition | not in machine | E4 | choose valid | moteur | ENFORCEMENT_EVALUATED |
| D1-V3-CLAIM-INELIGIBLE | project | claim v3 | platform/project not eligible | E4 | claim v2.6/transition | décideur | RULE_MATCHED |
| D1-FREE-CHAT | session | message | no project bind mode v3 | E4 | bind project | user | ENFORCEMENT_EVALUATED |
| D1-DEF-MODIFY | defs | write def | no method GO | E4 | stop | — | ENFORCEMENT_EVALUATED |
| D1-DIGEST-MISMATCH | context | compile | doctrineVersion mismatch | E4 | reload context | moteur | CONTEXT_STALE |
| D1-CYCLE-NO-REVIEW | cycle | complete | ReviewBundle not SEALED | E3 | seal review | décideur | DECISION_REQUESTED |

Schéma : `schemas/policy/enforcement-rule.schema.json` · exemple : `examples/enforcement-rules.example.json`.

```

### `projects/sfia-studio/sfia-v3-modeled/06-slice-d1-event-and-audit-catalog.md`

```markdown
# 06 — Slice D1 event and audit catalog

Append-only. Pas de PII dans payload (ids only).

| eventType | objectType | payload min | redaction |
|-----------|------------|-------------|-----------|
| PROJECT_CREATED | Project | title, workspaceId | — |
| PROJECT_MODE_SELECTED | Project | methodMode | — |
| PROJECT_ACTIVATED | Project | fromState | — |
| CYCLE_PROPOSED | CycleInstance | cycleType | — |
| CYCLE_QUALIFICATION_STARTED | CycleInstance | — | — |
| CYCLE_OPENED | CycleInstance | — | — |
| SESSION_CREATED | GuidedSession | cycleId | — |
| CONTEXT_LOADING_STARTED | ContextSnapshot | — | — |
| CONTEXT_READY | ContextSnapshot | headSha, digestsCount | digests truncated OK |
| CONTEXT_STALE | ContextSnapshot | expected/actual head | — |
| RULE_MATCHED | EnforcementRule | ruleId | — |
| ENFORCEMENT_EVALUATED | EnforcementRule | ruleId, level E0–E4 | — |
| RESERVE_CREATED | Reserve | reserveType | — |
| DECISION_REQUESTED | DecisionRequest | kind | — |
| HUMAN_DECISION_RECORDED | HumanDecision | verdict | motif redacted if sensitive |
| GATE_APPROVED / GATE_REJECTED | GateInstance | gateKind | — |
| TRANSITION_PROPOSED | TransitionProposal | from,to | — |
| CYCLE_REVIEW_SEALED | ReviewBundle | reviewBundleId | — |
| TRANSITION_APPROVED | TransitionProposal | — | — |
| CYCLE_COMPLETED | CycleInstance | — | — |
| NEXT_CYCLE_OPENED | CycleInstance | nextCycleId | — |

Champs communs AuditEvent : eventId, occurredAt, actor, correlationId, causationId, projectId, cycleId?, doctrineVersion, definitionDigests, objectType, objectId, payload.

```

### `projects/sfia-studio/sfia-v3-modeled/07-slice-d1-reviewbundle-model.md`

```markdown
# 07 — Slice D1 CycleReviewBundle model

## Règle

**MODIFIED CONTENT MUST BE RESOLVABLE AND VERIFIED**

Chaque ref : source · path/objectId · digest · accessibilityStatus · resolveCheck · verifyCheck · redaction · immutability.

## Structure

- ReviewManifest
- ContextSnapshotReference
- DeliverableReferences[]
- ValidationResults
- DecisionRequests[]
- Reserves[]
- HumanVerdict
- AuditReferences[]

## Lifecycle

DRAFT → SEALED → EXPORTED? → ARCHIVED

Sous baseline v2.6 : export Markdown handoff encore requis pour cycles Cursor ; pour D1 modeled, export optionnel tant que pas d’exécution Cursor.

## Contrôles par référence

| Contrôle | Exigence |
|----------|----------|
| Resolve | path ou objectId accessible depuis source déclarée |
| Verify | digest sha256 correspond au contenu résolu |
| Accessibility | `resolved` \| `missing` \| `redacted` \| `external-placeholder` |
| Redaction | pas de secret / PII dans bundle exporté |
| Immutability | après SEALED, payload + refs figés ; seul état → EXPORTED/ARCHIVED |

Schémas : `schemas/review/*` · exemple : `examples/cycle-review-bundle.example.json`.

```

### `projects/sfia-studio/sfia-v3-modeled/08-doctrine-to-model-traceability.md`

```markdown
# 08 — Doctrine → model traceability (D1)

| Source | Schéma / modèle | SQL | Policy | State | GPT | Gate | Event | Preuve |
|--------|-----------------|-----|--------|-------|-----|------|-------|--------|
| D1 Studio-native | project, guided-session | projects, sessions | D1-FREE-CHAT | — | bound chat | — | SESSION_* | sessionId |
| D2 ReviewBundle | cycle-review-bundle | review_bundles | D1-CYCLE-NO-REVIEW | DRAFT/SEALED | — | seal | CYCLE_REVIEW_SEALED | digests |
| D3 MD/JSON/SQL | all schemas | doctrine_definitions_applied | D1-DIGEST-MISMATCH | — | context | — | CONTEXT_* | digests |
| D4 E0–E4 | enforcement-rule | — | catalog 05 | — | explain | E3 gates | ENFORCEMENT_* | ruleId |
| D5 SQL hybrid | 04 logical | all entities | — | — | — | — | audit_events | event_id |
| D6 maturity | project.methodMode | projects | D1-V3-CLAIM | — | claim text | — | RULE_MATCHED | mode |
| D7 no migration | — | — | — | — | — | — | — | — |
| D8 Option D | BCDI D1 | — | — | — | — | validation | — | pack |
| P1 projet-first | project | projects | D1-NO-PROJECT | DRAFT+ | — | create | PROJECT_CREATED | — |
| P3 human-governed | human-decision, gate | decisions, gates | D1-HUMAN-DECISION | DECISION_REQUIRED | DecisionRequest | GO | HUMAN_DECISION_* | decisionId |
| P6 git-truth | context-snapshot, git-reference | context_snapshots | D1-CONTEXT-* | READY/STALE | — | — | CONTEXT_* | headSha |
| P8 no-free-chat | guided-session | sessions | D1-FREE-CHAT | — | refuse unbound | — | ENFORCEMENT_* | — |
| P9 fail-closed | enforcement-rule | — | E4 rules | BLOCKED | explain | — | — | — |
| framing 23–29 | schemas/* | 04–07 | 05 | 03 | 02 | gates | 06 | examples |

Aucun schéma sans source. Aucune règle D1 structurante sans projection candidate.

```

### `projects/sfia-studio/sfia-v3-modeled/09-validation-and-conformance-plan.md`

```markdown
# 09 — Validation and conformance plan

## Outils

- `ajv@6.15.0` (Draft-07) dans app/node_modules
- Script temporaire non versionné sous `.tmp-sfia-review/` pour validate
- **Pas** d’install npm · **pas** de modif package.json

## Contrôles

1. JSON.parse tous schemas + examples
2. `$id` uniques
3. `$ref` résolus (ajv compile)
4. examples validate against schemas
5. pas de secrets / chemins absolus user
6. enums cohérents avec doc 03/05
7. alignement D1–D8

## Limites documentées

Draft 2020-12 non utilisé (incompatibilité ajv6). Migration éventuelle en V3-MODELED+ si ajv8 ajouté sous GO deps.

```

### `projects/sfia-studio/sfia-v3-modeled/10-v3-modeled-foundation-decision-pack.md`

```markdown
# 10 — V3-MODELED foundation decision pack

| Champ | Valeur |
|-------|--------|
| Statut proposé | **V3-MODELED CANDIDATE** — Slice D1 modeled |
| Gate suivant | `GO VALIDATION V3-MODELED — FOUNDATION AND SLICE D1` |

## Décisions de ce cycle (modeling)

- BCDI-D1 borné
- Draft-07 pour tooling local
- États D1 simplifiés
- Catalogue E0–E4 D1
- SQL logique documenté
- CycleReviewBundle minimal

## Décisions humaines requises

1. Valider V3-MODELED foundation + D1 (`GO VALIDATION V3-MODELED — FOUNDATION AND SLICE D1`)
2. Accepter Draft-07 vs 2020-12
3. Accepter simplification d’états
4. Prioriser suite D1 UI/SQL vs D2 modeling

## Non prises

V3-IMPLEMENTED · adoption · migrations · code · D2/D3 schemas complets · stack SQL

## Anti-claims

Pas runtime · pas baseline v3 · framing non modifié · CT non modifié

## Verdict cible

**SFIA v3.0 V3-MODELED FOUNDATION READY — SLICE D1 MODELED — HUMAN DECISION REQUIRED**

```

## 5. Schémas JSON (contenu complet)

### `projects/sfia-studio/sfia-v3-modeled/schemas/audit/audit-event.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/audit/audit-event.schema.json",
  "title": "AuditEvent",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "eventId",
    "eventType",
    "occurredAt",
    "actor",
    "correlationId",
    "projectId",
    "objectType",
    "objectId",
    "schemaVersion"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "eventId": {
      "$ref": "../common/identifier.schema.json"
    },
    "eventType": {
      "type": "string"
    },
    "occurredAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "actor": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "correlationId": {
      "$ref": "../common/identifier.schema.json"
    },
    "causationId": {
      "$ref": "../common/identifier.schema.json"
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "cycleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "doctrineVersion": {
      "type": "string"
    },
    "definitionDigests": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "objectType": {
      "type": "string"
    },
    "objectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "payload": {
      "type": "object"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/common/actor-reference.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/common/actor-reference.schema.json",
  "title": "ActorReference",
  "type": "object",
  "additionalProperties": false,
  "required": ["actorId", "role"],
  "properties": {
    "actorId": { "$ref": "identifier.schema.json" },
    "role": { "type": "string", "enum": ["user", "project_owner", "decision_maker", "approver", "system"] },
    "displayName": { "type": "string", "maxLength": 200 }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/common/doctrine-reference.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/common/doctrine-reference.schema.json",
  "title": "DoctrineReference",
  "type": "object",
  "additionalProperties": false,
  "required": ["doctrineVersion"],
  "properties": {
    "doctrineVersion": { "type": "string", "enum": ["SFIA-v2.6", "SFIA-v3.0-candidate"] },
    "definitionDigests": {
      "type": "object",
      "additionalProperties": { "type": "string", "pattern": "^[0-9a-f]{64}$" }
    },
    "methodMode": { "type": "string", "enum": ["v2.6_manual", "v2.6_assisted", "transition", "v3_studio_native", "fallback"] }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/common/git-reference.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/common/git-reference.schema.json",
  "title": "GitReference",
  "type": "object",
  "additionalProperties": false,
  "required": ["headSha", "branch"],
  "properties": {
    "repository": { "type": "string" },
    "branch": { "type": "string" },
    "headSha": { "type": "string", "pattern": "^[0-9a-f]{40}$" },
    "baseSha": { "type": "string", "pattern": "^[0-9a-f]{40}$" }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/common/identifier.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/common/identifier.schema.json",
  "title": "SfiaIdentifier",
  "description": "Stable string identifier for SFIA v3 modeled objects.",
  "type": "string",
  "minLength": 3,
  "maxLength": 128,
  "pattern": "^[a-zA-Z0-9][a-zA-Z0-9:_\\-\\.]*$"
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/common/timestamp.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/common/timestamp.schema.json",
  "title": "SfiaTimestamp",
  "description": "RFC3339 date-time.",
  "type": "string",
  "format": "date-time"
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/context-snapshot.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/cycle/context-snapshot.schema.json",
  "title": "ContextSnapshot",
  "description": "Immutable snapshot — sealed",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "snapshotId",
    "sessionId",
    "git",
    "doctrine",
    "generatedAt",
    "schemaVersion",
    "immutable"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "snapshotId": {
      "$ref": "../common/identifier.schema.json"
    },
    "sessionId": {
      "$ref": "../common/identifier.schema.json"
    },
    "git": {
      "$ref": "../common/git-reference.schema.json"
    },
    "doctrine": {
      "$ref": "../common/doctrine-reference.schema.json"
    },
    "generatedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "immutable": {
      "type": "boolean",
      "const": true
    },
    "stale": {
      "type": "boolean"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/cycle-instance.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/cycle/cycle-instance.schema.json",
  "title": "CycleInstance",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "cycleId",
    "projectId",
    "cycleType",
    "state",
    "schemaVersion",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "cycleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "cycleType": {
      "type": "string",
      "enum": [
        "framing",
        "delivery",
        "qa",
        "capitalization",
        "other"
      ]
    },
    "profile": {
      "type": "string",
      "enum": [
        "Light",
        "Standard",
        "Critical",
        "Capitalization"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "PROPOSED",
        "QUALIFYING",
        "READY",
        "ACTIVE",
        "DECISION_REQUIRED",
        "VALIDATING",
        "COMPLETED",
        "PAUSED",
        "BLOCKED",
        "CANCELLED"
      ]
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "doctrine": {
      "$ref": "../common/doctrine-reference.schema.json"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/guided-session.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/cycle/guided-session.schema.json",
  "title": "GuidedSession",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "sessionId",
    "projectId",
    "cycleId",
    "state",
    "schemaVersion",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "sessionId": {
      "$ref": "../common/identifier.schema.json"
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "cycleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "state": {
      "type": "string",
      "enum": [
        "CREATED",
        "CONTEXT_LOADING",
        "READY",
        "IN_PROGRESS",
        "AWAITING_HUMAN",
        "COMPLETED",
        "BLOCKED",
        "ABANDONED"
      ]
    },
    "contextSnapshotId": {
      "$ref": "../common/identifier.schema.json"
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/cycle/transition-proposal.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/cycle/transition-proposal.schema.json",
  "title": "TransitionProposal",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "proposalId",
    "cycleId",
    "fromState",
    "toState",
    "schemaVersion",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "proposalId": {
      "$ref": "../common/identifier.schema.json"
    },
    "cycleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "fromState": {
      "type": "string"
    },
    "toState": {
      "type": "string"
    },
    "rationale": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "PROPOSED",
        "APPROVED",
        "REJECTED",
        "CANCELLED"
      ]
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/decision/decision-request.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/decision/decision-request.schema.json",
  "title": "DecisionRequest",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "decisionRequestId",
    "projectId",
    "cycleId",
    "kind",
    "state",
    "schemaVersion",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "decisionRequestId": {
      "$ref": "../common/identifier.schema.json"
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "cycleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "kind": {
      "type": "string",
      "enum": [
        "project_activation",
        "transition",
        "mode_selection",
        "other"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "DRAFT",
        "OPEN",
        "DECIDED",
        "CANCELLED",
        "EXPIRED"
      ]
    },
    "question": {
      "type": "string"
    },
    "options": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/decision/gate-instance.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/decision/gate-instance.schema.json",
  "title": "GateInstance",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "gateId",
    "decisionRequestId",
    "kind",
    "state",
    "schemaVersion",
    "openedAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "gateId": {
      "$ref": "../common/identifier.schema.json"
    },
    "decisionRequestId": {
      "$ref": "../common/identifier.schema.json"
    },
    "kind": {
      "type": "string"
    },
    "state": {
      "type": "string",
      "enum": [
        "OPEN",
        "APPROVED",
        "REJECTED",
        "EXPIRED",
        "REVOKED"
      ]
    },
    "openedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "expiresAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "requiredRole": {
      "type": "string",
      "enum": [
        "decision_maker",
        "approver",
        "project_owner"
      ]
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/decision/human-decision.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/decision/human-decision.schema.json",
  "title": "HumanDecision",
  "description": "Immutable sealed human decision",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "decisionId",
    "decisionRequestId",
    "gateId",
    "verdict",
    "decidedAt",
    "decidedBy",
    "schemaVersion",
    "immutable"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "decisionId": {
      "$ref": "../common/identifier.schema.json"
    },
    "decisionRequestId": {
      "$ref": "../common/identifier.schema.json"
    },
    "gateId": {
      "$ref": "../common/identifier.schema.json"
    },
    "verdict": {
      "type": "string",
      "enum": [
        "GO",
        "NO_GO",
        "DEFER"
      ]
    },
    "motif": {
      "type": "string"
    },
    "decidedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "decidedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "immutable": {
      "type": "boolean",
      "const": true
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/policy/enforcement-rule.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/policy/enforcement-rule.schema.json",
  "title": "EnforcementRule",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "ruleId",
    "scope",
    "trigger",
    "condition",
    "enforcementLevel",
    "schemaVersion"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "ruleId": {
      "type": "string",
      "pattern": "^D1-[A-Z0-9\\-]+$"
    },
    "scope": {
      "type": "string",
      "enum": [
        "global",
        "project",
        "cycle",
        "session",
        "security",
        "transition"
      ]
    },
    "trigger": {
      "type": "string"
    },
    "condition": {
      "type": "string"
    },
    "enforcementLevel": {
      "type": "string",
      "enum": [
        "E0",
        "E1",
        "E2",
        "E3",
        "E4"
      ]
    },
    "userExplanationKey": {
      "type": "string"
    },
    "correctionOptions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "requiredRole": {
      "type": ["string", "null"]
    },
    "reserveType": {
      "type": [
        "string",
        "null"
      ]
    },
    "decisionRequestType": {
      "type": [
        "string",
        "null"
      ]
    },
    "auditEventType": {
      "type": "string"
    },
    "effect": {
      "type": "string"
    },
    "testCases": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/project/project-trajectory.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/project/project-trajectory.schema.json",
  "title": "ProjectTrajectory",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "trajectoryId",
    "projectId",
    "summary",
    "schemaVersion"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "trajectoryId": {
      "$ref": "../common/identifier.schema.json"
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "summary": {
      "type": "string"
    },
    "milestones": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "candidateOptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Options ≠ decisions"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/project/project.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/project/project.schema.json",
  "title": "Project",
  "description": "SFIA Studio project instance (D1). schemaVersion 0.1.0-d1",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "projectId",
    "workspaceId",
    "title",
    "state",
    "schemaVersion",
    "createdAt",
    "createdBy",
    "doctrine"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "workspaceId": {
      "$ref": "../common/identifier.schema.json"
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    },
    "state": {
      "type": "string",
      "enum": [
        "DRAFT",
        "ACTIVE",
        "PAUSED",
        "CLOSED",
        "ARCHIVED"
      ]
    },
    "methodMode": {
      "type": "string",
      "enum": [
        "v2.6_manual",
        "v2.6_assisted",
        "transition",
        "v3_studio_native",
        "fallback"
      ]
    },
    "doctrine": {
      "$ref": "../common/doctrine-reference.schema.json"
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "updatedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "createdBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "ownerActorId": {
      "$ref": "../common/identifier.schema.json"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/project/workspace-reference.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/project/workspace-reference.schema.json",
  "title": "WorkspaceReference",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "workspaceId"
  ],
  "properties": {
    "workspaceId": {
      "$ref": "../common/identifier.schema.json"
    },
    "name": {
      "type": "string",
      "maxLength": 200
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/review/cycle-review-bundle.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/review/cycle-review-bundle.schema.json",
  "title": "CycleReviewBundle",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "manifest",
    "contextSnapshotRef",
    "deliverableReferences",
    "validationResults",
    "decisionRequests",
    "reserves",
    "humanVerdict",
    "auditReferences",
    "schemaVersion"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "manifest": {
      "$ref": "review-manifest.schema.json"
    },
    "contextSnapshotRef": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "objectId",
        "digest",
        "accessibilityStatus"
      ],
      "properties": {
        "objectId": {
          "$ref": "../common/identifier.schema.json"
        },
        "path": {
          "type": "string"
        },
        "digest": {
          "type": "string",
          "pattern": "^[0-9a-f]{64}$"
        },
        "accessibilityStatus": {
          "type": "string",
          "enum": [
            "RESOLVED",
            "MISSING",
            "DENIED"
          ]
        },
        "verified": {
          "type": "boolean"
        }
      }
    },
    "deliverableReferences": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "objectId",
          "digest",
          "accessibilityStatus"
        ],
        "properties": {
          "objectId": {
            "$ref": "../common/identifier.schema.json"
          },
          "path": {
            "type": "string"
          },
          "digest": {
            "type": "string",
            "pattern": "^[0-9a-f]{64}$"
          },
          "accessibilityStatus": {
            "type": "string",
            "enum": [
              "RESOLVED",
              "MISSING",
              "DENIED"
            ]
          },
          "verified": {
            "type": "boolean"
          }
        }
      }
    },
    "validationResults": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "status"
      ],
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "PASS",
            "FAIL",
            "PASS_WITH_RESERVES",
            "PENDING"
          ]
        },
        "notes": {
          "type": "string"
        }
      }
    },
    "decisionRequests": {
      "type": "array",
      "items": {
        "$ref": "../common/identifier.schema.json"
      }
    },
    "reserves": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "humanVerdict": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "verdict"
      ],
      "properties": {
        "verdict": {
          "type": "string",
          "enum": [
            "GO",
            "NO_GO",
            "DEFER",
            "PENDING"
          ]
        },
        "decisionId": {
          "$ref": "../common/identifier.schema.json"
        }
      }
    },
    "auditReferences": {
      "type": "array",
      "items": {
        "$ref": "../common/identifier.schema.json"
      }
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/schemas/review/review-manifest.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/review/review-manifest.schema.json",
  "title": "ReviewManifest",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "reviewBundleId",
    "reviewType",
    "projectId",
    "cycleId",
    "state",
    "schemaVersion",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d1"
    },
    "reviewBundleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "reviewType": {
      "type": "string",
      "enum": [
        "CycleReview",
        "ActionReview",
        "TransitionReview",
        "ReleaseReview",
        "CapitalizationReview"
      ]
    },
    "projectId": {
      "$ref": "../common/identifier.schema.json"
    },
    "cycleId": {
      "$ref": "../common/identifier.schema.json"
    },
    "state": {
      "type": "string",
      "enum": [
        "DRAFT",
        "SEALED",
        "EXPORTED",
        "ARCHIVED"
      ]
    },
    "doctrine": {
      "$ref": "../common/doctrine-reference.schema.json"
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    }
  }
}

```

## 6. Exemples JSON (contenu complet)

### `projects/sfia-studio/sfia-v3-modeled/examples/audit-events.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "events": [
    {
      "schemaVersion": "0.1.0-d1",
      "eventId": "evt-001",
      "eventType": "PROJECT_CREATED",
      "occurredAt": "2026-07-22T15:00:00.000Z",
      "actor": { "actorId": "actor-owner", "role": "project_owner" },
      "correlationId": "corr-d1-001",
      "projectId": "proj-demo-framing-001",
      "doctrineVersion": "SFIA-v2.6",
      "objectType": "Project",
      "objectId": "proj-demo-framing-001",
      "payload": { "title": "Demo Project Framing D1", "workspaceId": "ws-demo-001" }
    },
    {
      "schemaVersion": "0.1.0-d1",
      "eventId": "evt-002",
      "eventType": "PROJECT_MODE_SELECTED",
      "occurredAt": "2026-07-22T15:01:00.000Z",
      "actor": { "actorId": "actor-owner", "role": "project_owner" },
      "correlationId": "corr-d1-001",
      "causationId": "evt-001",
      "projectId": "proj-demo-framing-001",
      "doctrineVersion": "SFIA-v2.6",
      "objectType": "Project",
      "objectId": "proj-demo-framing-001",
      "payload": { "methodMode": "v3_candidate" }
    },
    {
      "schemaVersion": "0.1.0-d1",
      "eventId": "evt-003",
      "eventType": "CYCLE_PROPOSED",
      "occurredAt": "2026-07-22T15:02:00.000Z",
      "actor": { "actorId": "actor-owner", "role": "project_owner" },
      "correlationId": "corr-d1-001",
      "causationId": "evt-002",
      "projectId": "proj-demo-framing-001",
      "cycleId": "cycle-demo-framing-001",
      "doctrineVersion": "SFIA-v2.6",
      "objectType": "CycleInstance",
      "objectId": "cycle-demo-framing-001",
      "payload": { "cycleType": "project_framing" }
    },
    {
      "schemaVersion": "0.1.0-d1",
      "eventId": "evt-004",
      "eventType": "CONTEXT_READY",
      "occurredAt": "2026-07-22T15:05:00.000Z",
      "actor": { "actorId": "system", "role": "system" },
      "correlationId": "corr-d1-001",
      "projectId": "proj-demo-framing-001",
      "cycleId": "cycle-demo-framing-001",
      "doctrineVersion": "SFIA-v2.6",
      "definitionDigests": {
        "method/sfia-fast-track/core/sfia-rules-and-guardrails.md": "sha256:deadbeef"
      },
      "objectType": "ContextSnapshot",
      "objectId": "ctx-demo-001",
      "payload": { "headSha": "32e5271842b9a344a7e292614675c27ea8ed941b", "digestsCount": 1 }
    },
    {
      "schemaVersion": "0.1.0-d1",
      "eventId": "evt-005",
      "eventType": "HUMAN_DECISION_RECORDED",
      "occurredAt": "2026-07-22T15:30:00.000Z",
      "actor": { "actorId": "actor-decider", "role": "decision_maker" },
      "correlationId": "corr-d1-001",
      "projectId": "proj-demo-framing-001",
      "cycleId": "cycle-demo-framing-001",
      "doctrineVersion": "SFIA-v2.6",
      "objectType": "HumanDecision",
      "objectId": "hd-demo-001",
      "payload": { "verdict": "GO" }
    },
    {
      "schemaVersion": "0.1.0-d1",
      "eventId": "evt-006",
      "eventType": "CYCLE_REVIEW_SEALED",
      "occurredAt": "2026-07-22T15:40:00.000Z",
      "actor": { "actorId": "actor-decider", "role": "decision_maker" },
      "correlationId": "corr-d1-001",
      "projectId": "proj-demo-framing-001",
      "cycleId": "cycle-demo-framing-001",
      "doctrineVersion": "SFIA-v2.6",
      "objectType": "ReviewBundle",
      "objectId": "rb-demo-001",
      "payload": { "reviewBundleId": "rb-demo-001" }
    }
  ]
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/context-snapshot.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "snapshotId": "snap-ctx-001",
  "sessionId": "sess-guided-001",
  "git": {
    "repository": "mcleland147/sfia-workspace",
    "branch": "delivery/sfia-studio-control-tower-fast-track",
    "headSha": "32e5271842b9a344a7e292614675c27ea8ed941b",
    "baseSha": "32e5271842b9a344a7e292614675c27ea8ed941b"
  },
  "doctrine": {
    "doctrineVersion": "SFIA-v2.6",
    "methodMode": "transition",
    "definitionDigests": {
      "projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
  },
  "generatedAt": "2026-07-22T15:12:30.000Z",
  "immutable": true,
  "stale": false
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/cycle-instance.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "cycleId": "cycle-framing-001",
  "projectId": "proj-demo-framing-001",
  "cycleType": "framing",
  "profile": "Critical",
  "state": "ACTIVE",
  "createdAt": "2026-07-22T15:10:00.000Z",
  "doctrine": {
    "doctrineVersion": "SFIA-v2.6",
    "methodMode": "transition",
    "definitionDigests": {
      "projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
  }
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/cycle-review-bundle.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "manifest": {
    "schemaVersion": "0.1.0-d1",
    "reviewBundleId": "rb-cycle-001",
    "reviewType": "CycleReview",
    "projectId": "proj-demo-framing-001",
    "cycleId": "cycle-framing-001",
    "state": "SEALED",
    "doctrine": {
      "doctrineVersion": "SFIA-v2.6",
      "methodMode": "transition",
      "definitionDigests": {
        "projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    },
    "createdAt": "2026-07-22T15:55:00.000Z"
  },
  "contextSnapshotRef": {
    "objectId": "snap-ctx-001",
    "digest": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "accessibilityStatus": "RESOLVED",
    "verified": true
  },
  "deliverableReferences": [
    {
      "objectId": "traj-001",
      "path": "logical:project_trajectory/traj-001",
      "digest": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "accessibilityStatus": "RESOLVED",
      "verified": true
    }
  ],
  "validationResults": {
    "status": "PASS_WITH_RESERVES",
    "notes": "D1 modeled only"
  },
  "decisionRequests": [
    "dr-transition-001"
  ],
  "reserves": [
    "MODELED-R01-draft07"
  ],
  "humanVerdict": {
    "verdict": "GO",
    "decisionId": "hd-001"
  },
  "auditReferences": [
    "evt-001"
  ]
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/decision-request.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "decisionRequestId": "dr-transition-001",
  "projectId": "proj-demo-framing-001",
  "cycleId": "cycle-framing-001",
  "kind": "transition",
  "state": "OPEN",
  "question": "Approve transition to next cycle after framing?",
  "options": [
    "GO",
    "NO_GO",
    "DEFER"
  ],
  "createdAt": "2026-07-22T15:40:00.000Z"
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/enforcement-rules.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "rules": [
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-NO-PROJECT",
      "scope": "global",
      "trigger": "chat_or_action",
      "condition": "projectId absent in v3/transition mode",
      "enforcementLevel": "E4",
      "userExplanationKey": "bind_or_create_project",
      "correctionOptions": ["create_project", "select_project"],
      "requiredRole": "user",
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "ENFORCEMENT_EVALUATED",
      "effect": "block",
      "testCases": ["message without projectId"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-MODE-REQUIRED",
      "scope": "project",
      "trigger": "activate_or_open_cycle",
      "condition": "methodMode is null",
      "enforcementLevel": "E3",
      "userExplanationKey": "select_method_mode",
      "correctionOptions": ["select_mode_v26", "select_mode_v3_candidate", "select_mode_transition"],
      "requiredRole": "responsable",
      "reserveType": null,
      "decisionRequestType": "METHOD_MODE_SELECTION",
      "auditEventType": "DECISION_REQUESTED",
      "effect": "require_decision",
      "testCases": ["activate project without mode"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-CONTEXT-UNAVAILABLE",
      "scope": "session",
      "trigger": "context_load",
      "condition": "canonical git context or definition digests unavailable",
      "enforcementLevel": "E4",
      "userExplanationKey": "context_unavailable",
      "correctionOptions": ["retry_load", "fallback_manual_v26"],
      "requiredRole": "system",
      "reserveType": "CONTEXT_UNAVAILABLE",
      "decisionRequestType": null,
      "auditEventType": "CONTEXT_LOADING_STARTED",
      "effect": "block",
      "testCases": ["git unavailable"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-CONTEXT-STALE",
      "scope": "session",
      "trigger": "any_effect",
      "condition": "context digest mismatch HEAD",
      "enforcementLevel": "E4",
      "userExplanationKey": "requalify_context",
      "correctionOptions": ["reload_context"],
      "requiredRole": "user",
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "CONTEXT_STALE",
      "effect": "block",
      "testCases": ["head drift"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-CYCLE-INCOMPAT",
      "scope": "cycle",
      "trigger": "open_cycle",
      "condition": "project state incompatible with cycle type",
      "enforcementLevel": "E3",
      "userExplanationKey": "fix_project_state",
      "correctionOptions": ["activate_project", "choose_other_cycle"],
      "requiredRole": "responsable",
      "reserveType": null,
      "decisionRequestType": "CYCLE_COMPATIBILITY",
      "auditEventType": "RULE_MATCHED",
      "effect": "require_decision",
      "testCases": ["open framing cycle on ARCHIVED project"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-ROLE-UNAUTHORIZED",
      "scope": "security",
      "trigger": "decide_gate",
      "condition": "actor role not assigned for gate kind",
      "enforcementLevel": "E4",
      "userExplanationKey": "role_unauthorized",
      "correctionOptions": ["assign_role", "delegate_decider"],
      "requiredRole": "admin",
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "ENFORCEMENT_EVALUATED",
      "effect": "block",
      "testCases": ["user without decider role approves gate"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-HUMAN-DECISION-REQUIRED",
      "scope": "cycle",
      "trigger": "transition",
      "condition": "DecisionRequest OPEN without HumanDecision",
      "enforcementLevel": "E3",
      "userExplanationKey": "human_decision_required",
      "correctionOptions": ["open_gate_ui"],
      "requiredRole": "decideur",
      "reserveType": null,
      "decisionRequestType": "TRANSITION_GO",
      "auditEventType": "DECISION_REQUESTED",
      "effect": "require_decision",
      "testCases": ["propose transition while DR open"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-INVALID-TRANSITION",
      "scope": "transition",
      "trigger": "state_transition",
      "condition": "transition not in machine",
      "enforcementLevel": "E4",
      "userExplanationKey": "invalid_transition",
      "correctionOptions": ["choose_valid_transition"],
      "requiredRole": "moteur",
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "ENFORCEMENT_EVALUATED",
      "effect": "block",
      "testCases": ["COMPLETED → ACTIVE"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-V3-CLAIM-INELIGIBLE",
      "scope": "project",
      "trigger": "claim_v3",
      "condition": "platform or project not eligible for v3 claim",
      "enforcementLevel": "E4",
      "userExplanationKey": "v3_claim_ineligible",
      "correctionOptions": ["remain_v26", "open_eligibility_cycle"],
      "requiredRole": "decideur",
      "reserveType": "V3_CLAIM_INELIGIBLE",
      "decisionRequestType": null,
      "auditEventType": "RULE_MATCHED",
      "effect": "block",
      "testCases": ["claim V3-ADOPTED while only DOCUMENTED"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-FREE-CHAT",
      "scope": "session",
      "trigger": "message",
      "condition": "free-chat without project bind in v3 mode",
      "enforcementLevel": "E4",
      "userExplanationKey": "free_chat_forbidden",
      "correctionOptions": ["bind_project"],
      "requiredRole": "user",
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "ENFORCEMENT_EVALUATED",
      "effect": "block",
      "testCases": ["unbound chat in v3 mode"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-DEF-MODIFY",
      "scope": "global",
      "trigger": "write_definition",
      "condition": "attempt to modify doctrine definition without method GO",
      "enforcementLevel": "E4",
      "userExplanationKey": "definition_write_forbidden",
      "correctionOptions": ["stop", "open_method_cycle"],
      "requiredRole": null,
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "ENFORCEMENT_EVALUATED",
      "effect": "block",
      "testCases": ["patch method canonical from Studio"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-DIGEST-MISMATCH",
      "scope": "session",
      "trigger": "compile_or_effect",
      "condition": "doctrineVersion or definitionDigests inconsistent with ContextSnapshot",
      "enforcementLevel": "E4",
      "userExplanationKey": "digest_mismatch",
      "correctionOptions": ["reload_context"],
      "requiredRole": "moteur",
      "reserveType": null,
      "decisionRequestType": null,
      "auditEventType": "CONTEXT_STALE",
      "effect": "block",
      "testCases": ["stale definition digest on DecisionRequest"]
    },
    {
      "schemaVersion": "0.1.0-d1",
      "ruleId": "D1-CYCLE-NO-REVIEW",
      "scope": "cycle",
      "trigger": "complete_cycle",
      "condition": "CycleReviewBundle not SEALED",
      "enforcementLevel": "E3",
      "userExplanationKey": "review_required",
      "correctionOptions": ["seal_cycle_review"],
      "requiredRole": "decideur",
      "reserveType": null,
      "decisionRequestType": "CYCLE_REVIEW_SEAL",
      "auditEventType": "DECISION_REQUESTED",
      "effect": "require_decision",
      "testCases": ["complete cycle without sealed review"]
    }
  ]
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/gate-instance.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "gateId": "gate-001",
  "decisionRequestId": "dr-transition-001",
  "kind": "transition_approval",
  "state": "OPEN",
  "openedAt": "2026-07-22T15:41:00.000Z",
  "requiredRole": "decision_maker"
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/guided-session.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "sessionId": "sess-guided-001",
  "projectId": "proj-demo-framing-001",
  "cycleId": "cycle-framing-001",
  "state": "IN_PROGRESS",
  "contextSnapshotId": "snap-ctx-001",
  "createdAt": "2026-07-22T15:12:00.000Z"
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/human-decision.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "decisionId": "hd-001",
  "decisionRequestId": "dr-transition-001",
  "gateId": "gate-001",
  "verdict": "GO",
  "motif": "Framing sufficient for D1 modeled exit",
  "decidedAt": "2026-07-22T16:00:00.000Z",
  "decidedBy": {
    "actorId": "actor-morris-demo",
    "role": "decision_maker",
    "displayName": "Demo Decision Maker"
  },
  "immutable": true
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/project.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "projectId": "proj-demo-framing-001",
  "workspaceId": "ws-demo-001",
  "title": "Demo Project Framing D1",
  "state": "DRAFT",
  "methodMode": "transition",
  "doctrine": {
    "doctrineVersion": "SFIA-v2.6",
    "methodMode": "transition",
    "definitionDigests": {
      "projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
  },
  "createdAt": "2026-07-22T15:00:00.000Z",
  "updatedAt": "2026-07-22T15:05:00.000Z",
  "createdBy": {
    "actorId": "actor-owner",
    "role": "project_owner"
  },
  "ownerActorId": "actor-owner"
}

```

### `projects/sfia-studio/sfia-v3-modeled/examples/transition-proposal.example.json`

```json
{
  "schemaVersion": "0.1.0-d1",
  "proposalId": "tp-001",
  "cycleId": "cycle-framing-001",
  "fromState": "VALIDATING",
  "toState": "COMPLETED",
  "rationale": "Framing complete; propose COMPLETED then next cycle",
  "status": "PROPOSED",
  "createdAt": "2026-07-22T15:50:00.000Z"
}

```

## 7. Rapport validation

```json
{
  "validatedAt": "2026-07-22T15:54:10.638Z",
  "tool": "ajv@6.15.0 draft-07",
  "schemaCount": 19,
  "idDupes": [],
  "allOk": true,
  "results": [
    {
      "ex": "project.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "cycle-instance.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "guided-session.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "context-snapshot.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "decision-request.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "human-decision.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "gate-instance.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "transition-proposal.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "cycle-review-bundle.example.json",
      "ok": true,
      "errors": null
    },
    {
      "ex": "enforcement-rules.example.json",
      "ok": true,
      "count": 13,
      "errors": null
    },
    {
      "ex": "audit-events.example.json",
      "ok": true,
      "count": 6,
      "errors": null
    }
  ],
  "schemaIds": [
    "https://sfia.local/schemas/v3-modeled/audit/audit-event.schema.json",
    "https://sfia.local/schemas/v3-modeled/common/actor-reference.schema.json",
    "https://sfia.local/schemas/v3-modeled/common/doctrine-reference.schema.json",
    "https://sfia.local/schemas/v3-modeled/common/git-reference.schema.json",
    "https://sfia.local/schemas/v3-modeled/common/identifier.schema.json",
    "https://sfia.local/schemas/v3-modeled/common/timestamp.schema.json",
    "https://sfia.local/schemas/v3-modeled/cycle/context-snapshot.schema.json",
    "https://sfia.local/schemas/v3-modeled/cycle/cycle-instance.schema.json",
    "https://sfia.local/schemas/v3-modeled/cycle/guided-session.schema.json",
    "https://sfia.local/schemas/v3-modeled/cycle/transition-proposal.schema.json",
    "https://sfia.local/schemas/v3-modeled/decision/decision-request.schema.json",
    "https://sfia.local/schemas/v3-modeled/decision/gate-instance.schema.json",
    "https://sfia.local/schemas/v3-modeled/decision/human-decision.schema.json",
    "https://sfia.local/schemas/v3-modeled/policy/enforcement-rule.schema.json",
    "https://sfia.local/schemas/v3-modeled/project/project-trajectory.schema.json",
    "https://sfia.local/schemas/v3-modeled/project/project.schema.json",
    "https://sfia.local/schemas/v3-modeled/project/workspace-reference.schema.json",
    "https://sfia.local/schemas/v3-modeled/review/cycle-review-bundle.schema.json",
    "https://sfia.local/schemas/v3-modeled/review/review-manifest.schema.json"
  ]
}
```

## 8. Réserves / dette / anti-claims

- MODELED-R01 : Draft-07 au lieu de 2020-12 (tooling ajv6 local)
- MODELED-R02 : docs Markdown condensés en tables (rationale framing 01–29 reste SoT narratif)
- Dette : schémas Action/Execution D2 ; migrations SQL ; UI ; ajv8 éventuel sous GO deps
- Anti-claims : pas IMPLEMENTED/ADOPTED ; framing non modifié ; pas de code CT ; v2.6 intact ; aucun commit projet

## 9. Décisions humaines requises / non prises

Requises : GO VALIDATION V3-MODELED — FOUNDATION AND SLICE D1 ; accepter Draft-07 ; accepter états simplifiés.
Non prises : implémentation, adoption, D2/D3, stack SQL, deps.

## 10. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
staged=0 files
?? projects/sfia-studio/sfia-v3-modeled/
```

**VERDICT :** SFIA v3.0 V3-MODELED FOUNDATION READY — SLICE D1 MODELED — HUMAN DECISION REQUIRED
