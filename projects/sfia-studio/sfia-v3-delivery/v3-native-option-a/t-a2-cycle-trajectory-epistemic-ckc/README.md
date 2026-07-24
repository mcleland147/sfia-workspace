# T-A2 — Cycle / Trajectory / Epistemic / CKC Foundation (Delivery Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A2 — Cycle/Trajectory/Epistemic/CKC |
| **Profil** | Critical |
| **Gate consommé** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` + validation gate |
| **Statut** | **VALIDATED WITH RESERVES** (candidate) — Morris decision required |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` |
| **Base** | `origin/main` @ `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Dépendance** | T-A1 Project/LPS Foundation (merged PR #262) · T-A0 Doctrine |
| **Merge / push / PR** | **interdit** dans ce cycle |

## Objectif

Fournir une fondation runtime minimale, testée et fail-closed pour `CycleInstance`, `ProjectTrajectory`, `EpistemicItem` et `CkcResolution` v3-native : qualification déterministe, création cycle (Critical `proposed`), trajectoire versionnée liée au LPS via T-A1, épistémologie sans promotion Hypothesis→DecisionRef, CKC guidance-only — sans cutover, sans UI, sans T-A3+.

## Contenu

1. [01-scope-and-canonical-slice-definition.md](./01-scope-and-canonical-slice-definition.md)
2. [02-domain-contracts-and-invariants.md](./02-domain-contracts-and-invariants.md)
3. [03-persistence-consistency-and-failure-modes.md](./03-persistence-consistency-and-failure-modes.md)
4. [04-tests-evidence-and-reserves.md](./04-tests-evidence-and-reserves.md)
5. [05-delivery-validation-and-decision-pack.md](./05-delivery-validation-and-decision-pack.md)
6. [06-morris-validation-and-pr-readiness.md](./06-morris-validation-and-pr-readiness.md)
7. [07-validation-findings-and-morris-decision-pack.md](./07-validation-findings-and-morris-decision-pack.md)

## Anti-claims

- Pas T-A2 **MERGED**
- Pas T-A3 **AUTHORIZED**
- Pas READY FOR DELIVERY GLOBAL
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED runtime
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / HumanDecision / Confirmation / Execution / Evidence
- Pas autorisation de merge / push / PR dans ce cycle
- Pas Capitalization dans l’enum `profile` (schema gap — voir T-A2-D02)
