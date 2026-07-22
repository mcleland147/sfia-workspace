# 02 — Target component architecture

## 1. Recommandation de déploiement

| Option | Verdict |
|--------|---------|
| **Modular monolith** (Next.js app + modules domaine) | **Recommandé candidat** |
| Services séparés | Rejeté pour D1 (ops/coût prématurés) |
| Hybride (monolithe + workers) | Reporté ; jobs sync suffisent D1 |

**Justification :** stack Studio existante = Next 15 + React 19 + `node:sqlite` OPS1 + OpenAI provider + server-side orchestration. D1 doit étendre le monolithe modulaire (Option C CT) sans inventer une plateforme.

Voir `diagrams/d1-container-diagram.mmd` et `d1-component-diagram.mmd`.

## 2. Composants logiques D1

| Composant | Responsabilité | Possède | Fusion possible |
|-----------|----------------|---------|-----------------|
| Studio Web Shell | Navigation workspace, mode badge, layout | — | — |
| Project Cockpit UI | Vue projet, cycles, décisions | — | Shell |
| Project Service | CRUD Project, mode, trajectory, archive | Project, Trajectory | — |
| Cycle Service | CycleInstance lifecycle | CycleInstance | Transition Service |
| Guided Session Service | Session + turns orchestration | GuidedSession | Conversation (OPS1) |
| Canonical Context Service | Load/seal ContextSnapshot, stale checks | ContextSnapshot | Definition Registry |
| Definition Registry | doctrineVersion + definitionDigests | DoctrineDefinitionApplied | Context Service |
| Policy Engine | Évalue E0–E4 D1 rules | EnforcementEvaluation | — |
| Decision & Gate Service | DR, Gate, HumanDecision | Decision*, Gate* | — |
| Transition Service | TransitionProposal + effets état | TransitionProposal | Cycle Service |
| Review Service | Build/seal CycleReviewBundle | ReviewBundle | — |
| Audit Service | Append-only AuditEvent | AuditEvent | — |
| Identity/AuthZ Adapter | Rôles, assignments | Assignment | Stub mono-opérateur |
| Git Context Adapter | HEAD, blobs, digests (read-only) | — | Réutilise CT Git local |
| GPT Adapter | Completions structurées bornées | — | Réutilise openaiProvider |
| Persistence Layer | Transactions SQL | tables D1 | `node:sqlite` + future PG |

## 3. Matrice composants (extraits)

### Project Service
- API : CreateProject, SelectMethodMode, DefineTrajectory, ArchiveProject  
- Deps : Persistence, AuthZ, Audit, Policy  
- Events : PROJECT_CREATED, PROJECT_MODE_SELECTED, PROJECT_ACTIVATED  
- GPT : aucun  
- Erreurs : UNAUTHORIZED, CONFLICT (optimistic lock), MODE_REQUIRED  
- Observabilité : project_create_total, project_state  

### Guided Session Service
- API : CreateGuidedSession, StartGuidedConversation  
- Deps : Context, GPT Adapter, Policy, Audit  
- Events : SESSION_*, CONTEXT_*, RULE_MATCHED  
- GPT : reformule/propose ; n’écrit pas l’état  
- Risque : prompt injection → isolation contexte + redaction  

### Policy Engine
- API : EvaluatePolicy  
- Deps : rules catalog (JSON defs), Project/Cycle state  
- Deterministe 100 %  
- Events : ENFORCEMENT_EVALUATED  
- Cache : candidate court TTL ; invalidé sur digest/state change  

### Decision & Gate Service
- API : RequestHumanDecision, OpenGate, RecordHumanDecision  
- Sealed HumanDecision immutable  
- Events : DECISION_*, GATE_*  

### Review Service
- Règle : MODIFIED CONTENT MUST BE RESOLVABLE AND VERIFIED  
- Deps : Git Adapter, Context, Audit refs  
- Events : CYCLE_REVIEW_SEALED  

## 4. Frontières

- **UI** ne mute jamais SQL directement.  
- **GPT Adapter** n’appelle pas Persistence.  
- **Policy** avant effet d’état.  
- **Cursor/Execution** hors D1 (pas de composant D1).

## 5. Mapping acquis OPS1/CT (lecture seule)

| Acquis | Usage D1 design |
|--------|-----------------|
| `conversation/service.ts` + openaiProvider | Pattern Guided Session |
| `db.ts` / repository / session_events | Pattern persistence + audit table |
| actionGate / decisions UI | Pattern Gate Modal / Decision Center |
| Git tools read | Git Context Adapter |
| sfia canonical context engine | Canonical Context + Definition Registry |
| Ops1SessionScreen | Expérimental → remplacé par Project Cockpit / Guided Session screens |
