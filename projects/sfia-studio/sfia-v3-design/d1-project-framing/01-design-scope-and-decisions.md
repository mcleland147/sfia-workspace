# 01 — Design scope and decisions

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-PROJECT-FRAMING-DESIGN |
| Modeled source | BCDI-D1-PROJECT-FRAMING-MODEL |

## 1. Périmètre inclus

Parcours unique :

Workspace → CreateProject → SelectMethodMode → ProjectTrajectory → Propose/Open Cycle cadrage → GuidedSession → ContextSnapshot → conversation guidée → EnforcementEvaluation → Reserve/DecisionRequest → GateInstance → HumanDecision → TransitionProposal → CycleReviewBundle → DecideTransition → CompleteCycle → AuditEvents.

Objets : WorkspaceReference, Project, ProjectTrajectory, CycleInstance, GuidedSession, ContextSnapshot, EnforcementRule/Evaluation, Reserve, DecisionRequest, GateInstance, HumanDecision, TransitionProposal, CycleReviewBundle, AuditEvent, Assignment, DoctrineDefinitionApplied.

## 2. Hors périmètre (placeholders / refs externes)

ActionCandidate, ExecutionContract, Cursor runtime, Evidence technique D2, Action/ReleaseReview, Capitalization D3, connecteurs externes complets, OpenAPI exécutable, Figma.

## 3. Décisions de conception candidates (ce cycle)

| ID | Décision | Statut |
|----|----------|--------|
| DD-01 | Modular monolith Next.js (même app Studio) | candidate |
| DD-02 | Façade = Server Actions + command handlers internes | candidate |
| DD-03 | Persistance D1 : SQLite (`node:sqlite`) pour 1er incrément ; schéma portable PostgreSQL | candidate |
| DD-04 | JSON Schema Draft-07 (ajv6 présent) pour validation instances | candidate (héritage modeled) |
| DD-05 | GPT = dual channel (prose + propositions structurées) ; jamais mutateur d’état | candidate |
| DD-06 | Policy Engine déterministe avant/après GPT | candidate |
| DD-07 | Audit append-only ; pas d’event sourcing complet | candidate (D5 framing) |
| DD-08 | Premier incrément utile = D1-I1 Project foundation | candidate |

## 4. Non-décisions (gates humains)

- Adoption v3 · GO IMPLEMENTATION D1 · choix définitif PostgreSQL prod · multi-user IdP · ajv8 / Draft 2020-12 · découpage microservices.

## 5. Contraintes dures

- Fail-closed E4 · human-governed E3 · git-truth ContextSnapshot · ReviewBundle résolvable+vérifié · aucune règle déterministe portée par GPT.
