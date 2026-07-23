# 12 — Slices delivery T-A0–T-A7

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `12-delivery-slices-dependencies-and-technical-gates.md` |

| Slice | Contenu | Dépend | Gate candidate | Preuve | Rollback |
|-------|---------|--------|----------------|--------|----------|
| **T-A0** | Doctrine registry/resolver, schema, digest, fail-closed | — | GO DELIVERY T-A0 | tests resolve/deny | feature flag |
| **T-A1** | Project/LPS repos, versioning, conflict | T-A0 | T-A1 | optimistic lock tests | restore snapshot |
| **T-A2** | Cycle/Trajectory/Epistemic/CKC | T-A1 | T-A2 | qualif Critical | version traj |
| **T-A3** | Decision/Confirmation/authority | T-A2 | T-A3 | N2/N3 audit | supersede |
| **T-A4** | ExecutionContract governance | T-A3 | T-A4 | immutability tests | supersede contract |
| **T-A5** | Agent adapter/Attempt/timeout | T-A4 | T-A5 | timeout≠success | cancel attempt |
| **T-A6** | Evidence/Review/Claim/maturity | T-A5 | T-A6 | claim reject incomplete | incomplete bundle |
| **T-A7** | Legacy cutover MethodMode/method/**/OPS1 isolate | T-A6 | cutover Morris | boundary tests | hold flag |

Fichiers probables (indicatifs, non créés) : modules sous `app/lib/oa/**` futurs — **hors ce cycle**.

**Aucune autorisation delivery.**
