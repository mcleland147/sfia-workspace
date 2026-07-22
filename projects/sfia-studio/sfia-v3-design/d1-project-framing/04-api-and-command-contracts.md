# 04 — API and command contracts

## 1. Modèle d’accès recommandé (candidat)

| Option | Verdict |
|--------|---------|
| REST public large | Non pour D1 |
| **Server Actions + command handlers** | **Recommandé** (aligné Next/OPS1) |
| Event bus distribué | Non |
| Internal in-process command bus | Oui (handlers purs testables) |

Version API logique : `d1/v0`. Correlation-ID obligatoire. Idempotency-Key sur mutations.

## 2. Commandes synchrones (candidats)

| Commande | Méthode/chemin candidat | Rôle | Enforcement | Request (min) | Response | Errors |
|----------|-------------------------|------|-------------|---------------|----------|--------|
| CreateProject | SA `d1.createProject` | user→owner | — | `{workspaceId,title,idempotencyKey}` | `{projectId,state}` | 403,404,409 |
| SelectMethodMode | SA `d1.selectMethodMode` | owner | D1-MODE / V3-CLAIM | `{projectId,methodMode,expectedVersion}` | `{project}` | 403,409,422 |
| DefineTrajectory | SA `d1.defineTrajectory` | owner | — | `{projectId,contentRef}` | `{trajectoryId}` | 403,409 |
| ProposeCycle | SA `d1.proposeCycle` | owner | D1-MODE, CYCLE-INCOMPAT | `{projectId,cycleType}` | `{cycleId,state}` | 422 |
| OpenCycle | SA `d1.openCycle` | owner | same | `{cycleId}` | `{cycle}` | 409 |
| CreateGuidedSession | SA `d1.createGuidedSession` | user | D1-FREE-CHAT | `{cycleId}` | `{sessionId}` | 422 |
| LoadCanonicalContext | SA `d1.loadCanonicalContext` | system/user | CONTEXT-* | `{sessionId}` | `{snapshotId,status}` | 503,STALE |
| StartGuidedConversation | SA `d1.sendGuidedTurn` | user | FREE-CHAT, CONTEXT-STALE | `{sessionId,message}` | `{turn,proposals[]}` | 429,503 |
| EvaluatePolicy | internal | system | — | `{trigger,refs,actor}` | `{evaluation}` | ENGINE_FAIL→E4 |
| CreateReserve | SA/internal | system/user | E2 | `{cycleId,type,reason}` | `{reserveId}` | — |
| RequestHumanDecision | SA `d1.requestDecision` | system/user | E3 | `{cycleId,kind}` | `{decisionRequestId}` | — |
| OpenGate | SA `d1.openGate` | system | ROLE | `{decisionRequestId,gateKind}` | `{gateId}` | 403 |
| RecordHumanDecision | SA `d1.recordDecision` | decideur | ROLE | `{gateId,verdict,rationale,expectedVersion}` | `{decisionId}` | 403,409,EXPIRED |
| ProposeTransition | SA `d1.proposeTransition` | owner/GPT-draft | HUMAN-DECISION, INVALID-TRANSITION | `{cycleId,to}` | `{proposalId}` | 422 |
| BuildReviewBundle | SA `d1.buildReviewBundle` | system/owner | — | `{cycleId}` | `{bundleId,status:DRAFT}` | — |
| SealReviewBundle | SA `d1.sealReviewBundle` | decideur | NO-REVIEW | `{bundleId}` | `{status:SEALED,digests}` | UNRESOLVED_REF |
| DecideTransition | SA `d1.decideTransition` | decideur | gates | `{proposalId,verdict}` | `{cycleState}` | 403 |
| CompleteCycle | SA `d1.completeCycle` | owner/decideur | NO-REVIEW | `{cycleId}` | `{state:COMPLETED}` | 422 |
| OpenNextCycle | SA `d1.openNextCycle` | owner | — | `{projectId,fromCycleId}` | `{nextCycleId}` | — |
| ArchiveProject | SA `d1.archiveProject` | admin/owner | — | `{projectId}` | `{state:ARCHIVED}` | 409 |

## 3. Lectures

| Query | Path candidat | Notes |
|-------|---------------|-------|
| GetWorkspaceHome | `d1.getWorkspace` | projects list |
| GetProjectCockpit | `d1.getProject` | cycles, mode, open gates |
| GetGuidedSession | `d1.getSession` | turns, context status |
| GetDecisionCenter | `d1.listOpenDecisions` | gates OPEN |
| GetAuditTimeline | `d1.listAuditEvents` | filter project/cycle |
| GetReviewBundle | `d1.getReviewBundle` | DRAFT/SEALED view |

## 4. Événements internes

Bus **in-process** : après commit SQL, émettre vers Audit Service (même transaction) + hooks UI (revalidate). Pas de broker externe D1.

## 5. Contrats GPT / Git / Review

- GPT : input `GuidedTurnRequest` → output `{prose, proposals: GuidedProposal[]}` validé JSON Schema candidat  
- Git : `resolveBlob(path,ref) → {bytes,sha256}` ; `getHead() → sha`  
- Review : `resolveAndVerify(refs[]) → {ok,failures[]}`

## 6. Headers / meta communs

`correlationId`, `causationId?`, `actorId`, `idempotencyKey?`, `doctrineVersion`, `clientSchemaVersion: 0.1.0-d1`.
