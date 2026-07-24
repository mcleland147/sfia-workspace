# T-A1 — Project / LPS Foundation (Delivery Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A1 — Project/LPS Foundation |
| **Profil** | Critical |
| **Gate consommé** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A1` |
| **Statut** | **IMPLEMENTED** — Morris validation required |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation` |
| **Base** | `origin/main` @ `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| **Dépendance** | T-A0 Doctrine Foundation (merged PR #261) |

## Objectif

Fournir une fondation runtime minimale, testée et fail-closed pour `Project` + `LivingProjectState` v3-native : création atomique, pin DoctrinePackage résolu via T-A0, versionnement LPS monotone, concurrence optimiste — sans cutover, sans UI, sans T-A2+.

## Contenu

1. [01-scope-and-canonical-slice-definition.md](./01-scope-and-canonical-slice-definition.md)
2. [02-domain-contracts-and-invariants.md](./02-domain-contracts-and-invariants.md)
3. [03-persistence-consistency-and-failure-modes.md](./03-persistence-consistency-and-failure-modes.md)
4. [04-tests-evidence-and-reserves.md](./04-tests-evidence-and-reserves.md)
5. [05-delivery-validation-and-decision-pack.md](./05-delivery-validation-and-decision-pack.md)

## Anti-claims

- Pas T-A1 MERGED / VALIDATED (Morris)
- Pas T-A2 AUTHORIZED
- Pas READY FOR DELIVERY GLOBAL
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED runtime
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / Cycle / Decision / Execution / Evidence
