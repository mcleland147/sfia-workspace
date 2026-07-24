# T-A3 — Decision / Confirmation / Authority Foundation (Delivery Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A3 — Decision/Confirmation/Authority |
| **Profil** | Critical |
| **Gate consommé** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A3` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority` |
| **Base** | `5f5c6161063e11065aaf5be74d8181ee2c2eeaea` (T-A2 merge on main) |
| **Tests T-A3** | **38** PASS |
| **Dépendance** | T-A1 Project/LPS · T-A2 Cycle/Trajectory/Epistemic · T-A0 Doctrine |
| **Merge / Push / PR** | **interdit** dans ce cycle (local delivery only) |
| **Réserves OPEN** | **B5** · **R1** (héritées) · **R-T-A3-1** · **R-T-A3-2** |

## Objectif

Fournir une fondation runtime minimale, testée et fail-closed pour `HumanDecision`, `Confirmation` (N1/N2/N3) et `AuthorityResolverPort` v3-native : preuve N2/N3 auditable, supersession immuable, jamais de confiance client sur `authorityLevel` / `displayName`, sans cutover, sans UI, sans T-A4+.

## Contenu

1. [01-scope-and-canonical-slice-definition.md](./01-scope-and-canonical-slice-definition.md)
2. [02-decision-and-confirmation-contracts.md](./02-decision-and-confirmation-contracts.md)
3. [03-authority-n2-n3-and-audit.md](./03-authority-n2-n3-and-audit.md)
4. [04-supersession-consistency-and-failure-modes.md](./04-supersession-consistency-and-failure-modes.md)
5. [05-tests-evidence-and-reserves.md](./05-tests-evidence-and-reserves.md)
6. [06-delivery-validation-and-decision-pack.md](./06-delivery-validation-and-decision-pack.md)

## Anti-claims

- Pas T-A3 **MERGED** / **PUSHED** / **PR OPEN**
- Pas READY FOR DELIVERY GLOBAL
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED runtime (modeled schemas non édités)
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / ExecutionContract / Evidence / ReviewBundle
- Pas décisions T-A3 **VALIDATED BY MORRIS**
- Pas B5 / R1 / R-T-A3-1 / R-T-A3-2 fermées
- Pas Critical cycle auto-acknowledged
