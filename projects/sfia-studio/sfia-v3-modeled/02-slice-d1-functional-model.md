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
