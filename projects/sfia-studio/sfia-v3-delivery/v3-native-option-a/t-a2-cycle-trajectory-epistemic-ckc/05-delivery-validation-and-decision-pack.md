# 05 — Delivery validation and decision pack

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Statut** | Décisions **T-A2-D01…D10 CANDIDATES** — Morris validation required |
| **Verdict** | Fondation T-A2 **IMPLEMENTED** ; **merge / push / PR interdits** sans décision Morris |

## Validations exécutées

| Commande | Résultat |
|----------|----------|
| `npx vitest run __tests__/oa/cycle` | PASS — 26 tests |
| `npx vitest run __tests__/oa/project` | PASS — 30 |
| `npx vitest run __tests__/oa/doctrine` | PASS — 28 |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | PASS — 10 |
| `npx tsc --noEmit` | PASS |
| `next lint` (dirs `lib/oa/cycle`, `__tests__/oa/cycle`, `lib/oa/project`) | PASS |
| `npx next build` | PASS |
| `git diff --check` | PASS |

## Décisions candidates T-A2-D01…D10

| ID | Décision | Observation | Option retenue | Alternative rejetée | Dette | Réversibilité | Recommandation | Morris |
|----|----------|-------------|----------------|---------------------|-------|---------------|----------------|--------|
| **T-A2-D01** | Boundaries Cycle module | Modular monolith OA | `lib/oa/cycle` isolé | Fusion d1/OPS1 | — | Haute | Valider isolation | attendue |
| **T-A2-D02** | Capitalization | Schema profile sans Capitalization | `cycleTypeId=cyc:capitalization` + profile règles | Étendre enum profile | Schema gap | Haute | Valider gap | attendue |
| **T-A2-D03** | Qualification | Signaux explicites | Critical/Light/Standard déterministe | Scores inventés | — | Haute | Valider | attendue |
| **T-A2-D04** | Critical status | FD-OA-03 | `proposed` sans auto-ack | Auto-acknowledge | Ack T-A3+ | Haute | Valider | attendue |
| **T-A2-D05** | Trajectory versioning | Canonique T-A2 | expectedVersion + supersede + LPS link | In-place mutate | — | Haute | Valider | attendue |
| **T-A2-D06** | Repos locaux | Pas DB selected | In-memory + ports | SQL maintenant | Adapter DB futur | **Haute** | Valider mémoire | attendue |
| **T-A2-D07** | CKC absent | Guidance only | unavailable + intra_v3_only ; pas de blocage Create | Inventer detailed | Contenu CKC futur | Haute | Valider | attendue |
| **T-A2-D08** | Erreurs | Enum modeled borné | Detail codes + map (STATE_CONFLICT / DECISION_REQUIRED / AUTHORITY_DENIED / CKC_UNAVAILABLE / CONTEXT_STALE) | Étendre schema | Enum extension | Moyenne | Valider mapping | attendue |
| **T-A2-D09** | Limite taille traj | AT <256KB | `MAX_TRAJECTORY_SNAPSHOT_BYTES=256_000` | Illimité | Tuning | Haute | Valider | attendue |
| **T-A2-D10** | Readiness foundation-only | Pas UI/T-A3 | Slice bornée | Wiring session/decision | Activation future | Haute | Valider | attendue |

## Schema gap notes

1. **Capitalization** n’est pas dans `CycleInstance.profile` enum — porté par `cycleTypeId`.
2. Pas de schema `CycleType` / knowledge package dédié — CKC via `CkcResolution` seulement.
3. Detail codes T-A2 hors enum `ErrorRecord.code` — mapping documenté.

## Hypothèses

- Mémoire suffisante pour tests / fondation
- Append LPS T-A1 étendu (linkage) reste compatible non-régression T-A1
- Justify Critical est une string non vide (pas de policy métier plus riche)

## Anti-claims

Pas MERGED · Pas T-A3 AUTHORIZED · Pas DATABASE SELECTED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas cutover · Pas Morris decision inventée

## Gate suivant

Revue Morris — puis éventuellement PR readiness / merge GO. Puis `GO DELIVERY … T-A3` (non autorisé ici).
