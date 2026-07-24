# 01 — Principes et frontières d’agrégats

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
| **Document** | `01-modeling-principles-and-aggregate-boundaries.md` |

## Principes

- Studio v3 exclusif ; aucun fallback v2.6.
- Fail-closed ; mutations gouvernées.
- UX panel ≠ source d’autorité (FA-OA-01).
- HumanDecision ≠ Confirmation ≠ ExecutionContract ≠ Markdown Cursor.
- Evidence ≠ ReviewBundle ≠ ClaimEvaluation.
- Domaines A–H (FA-OA-02) ; F ≠ G.

## Agrégats candidats

| Agrégat | Racine | Contenu clé | Ownership |
|---------|--------|-------------|-----------|
| Project identity | `Project` | id, title, status, currentLpsVersionId, doctrinePackageRef | C (+ identité) |
| Living Project State | `LivingProjectState` (versionnée) | objectifs, épistémique, traj, décisions, preuves, maturité | **C** |
| HumanDecision | `HumanDecision` | options, selected, actor, authority | E |
| Confirmation | `Confirmation` | N1–N3, scope, expiry, idempotency | E |
| ExecutionContract | `ExecutionContract` | action/scope/caps/authority/stops | F |
| ExecutionAttempt | `ExecutionAttempt` | attempt/result/timeout | G (résultat) / F (lien) |
| ReviewBundle | `ReviewBundle` | evidence set + completeness | H |

## Frontières transactionnelles conceptuelles

- Mutation LPS → nouvelle `lpsVersionId` (pas update in-place).
- Contrat confirmé → immutable ; retry → nouvel Attempt.
- Chat message hors agrégat décision.
