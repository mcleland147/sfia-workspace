# 05 — Cycle, trajectoire et épistémologie

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `05-cycle-trajectory-and-epistemic-model.md` |

## CycleType vs CycleInstance

CycleInstance statuses : proposed → acknowledged → active → blocked/completed/cancelled/superseded.
Critical : `proposed` jusqu’ack explicite (FD-OA-03).

## ProjectTrajectory / TrajectoryStep

Statuses traj : candidate | validated | active | stale | superseded.
Replan ⇒ nouvelle version. Candidate ≠ décision validée. Pas stepper UX principal.

## EpistemicItem

Types : Observation · Hypothesis · Option · Recommendation · DecisionRef · Reservation · Contradiction · EvidenceRef.
Observation ≠ Hypothesis · Recommendation ≠ HumanDecision · contradiction `blocking=true` stoppe progression · supersession traçable · type immuable (pas de changement silencieux).
