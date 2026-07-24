# 05 — Cycle, trajectoire, décision, confirmation

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `05-cycle-trajectory-decision-and-confirmation-architecture.md` |

## Services

CycleQualification · Trajectory · Decision · Confirmation.

## Transactions

| TX | Agrégat | Atomicité | Events |
|----|---------|-----------|--------|
| Propose/Ack cycle | CycleInstance | locale | QualificationProposed/Acknowledged |
| Propose/Replan traj | Trajectory | nouvelle version | TrajectoryProposed/Replanned |
| Record HumanDecision | HumanDecision | locale + LPS link version | HumanDecisionRecorded |
| Request/Grant/Consume Confirmation | Confirmation | locale + idempotencyKey | Confirmation* |

## Règles

Decision et Confirmation stores séparés · actor+authority obligatoires · scope-bound · double consume interdit · N3 audit renforcé · expiry explicite · Critical proposed jusqu’ack.
