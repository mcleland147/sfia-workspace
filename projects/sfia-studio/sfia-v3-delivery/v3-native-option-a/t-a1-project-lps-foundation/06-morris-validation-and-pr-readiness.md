# 06 — Morris validation and PR readiness

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate consommé** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A1` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation` |
| **HEAD (pre-docs)** | `861ca766cfd081060b1dddd6ef614aad96f264e1` |
| **origin/main** | `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| **Statut slice** | **T-A1 TECHNICALLY VALIDATED BY MORRIS — PR READINESS AUTHORIZED** |
| **PR readiness** | Pack local prêt — push/PR autorisés ; **merge interdit** dans ce cycle |

## Verdict

**T-A1 Project / LPS Foundation TECHNICALLY VALIDATED BY MORRIS** — décisions **T-A1-D01…D10** acceptées with reserves ; correction concurrence `861ca76` (mutex + re-check `expectedVersion` + `structuredClone`) **fermée** ; ouverture PR autorisée sous revue Morris. **Pas** MERGED · **Pas** T-A2 AUTHORIZED · **Pas** DATABASE SELECTED · **Pas** OPTION A IMPLEMENTED.

## Décisions T-A1-D01…D10

| ID | Décision | Statut Morris |
|----|----------|---------------|
| **T-A1-D01** | Boundaries Project/LPS — module `lib/oa/project` isolé (modular monolith OA) | **VALIDATED** |
| **T-A1-D02** | Identité + v1 — prefixes `prj:` / `lps:` / `prv:` ; LPS v1 | **VALIDATED** |
| **T-A1-D03** | Snapshot versionné + audit minimal (ADR-OA-02) | **VALIDATED** |
| **T-A1-D04** | Optimistic concurrency via `expectedVersion` | **VALIDATED** — renforcée par mutex txn |
| **T-A1-D05** | Doctrine pin — resolve on create ; **Option A pin-compare** on append (id+version+digest ; pas de re-resolve) | **VALIDATED** with reserve |
| **T-A1-D06** | Repos locaux in-memory + ports (pas DATABASE SELECTED) | **VALIDATED** with reserve |
| **T-A1-D07** | Audit minimal mémoire/console | **VALIDATED** |
| **T-A1-D08** | Detail codes + map `STATE_CONFLICT` / `DOCTRINE_UNRESOLVED` | **VALIDATED** with reserve (enum modeled = dette) |
| **T-A1-D09** | Limite taille UTF-8 `MAX_LPS_SNAPSHOT_BYTES=256_000` | **VALIDATED** |
| **T-A1-D10** | Readiness foundation-only — pas UI / T-A2 | **VALIDATED** |

## Correction validation (QA) — concurrency

| Item | Commit | Preuve |
|------|--------|--------|
| Mutex + re-check `expectedVersion` + deep-clone | `861ca766cfd081060b1dddd6ef614aad96f264e1` `fix(sfia-studio): correct T-A1 Project and LPS validation` | `runInTransaction` serialise ; re-read under txn ; concurrent double-append → un seul winner ; `structuredClone` write/read/return ; tests étendus |

## Réserves maintenues

1. Persistance mémoire seulement — pas DATABASE SELECTED
2. Detail codes T-A1 non encore dans enum ErrorRecord modeled
3. Mapping NOT_FOUND / INVALID → `STATE_CONFLICT` (`retryable=false` ; clients lisent `detailCode`)
4. Pas de métriques Prometheus ; audit mémoire/console
5. Module non branché sur sessions / UI Studio
6. Pas de re-verify digest à l’append — **Option A pin-compare only** (égalité pin vs Ref projet)
7. Volumétrie historique non bornée en mémoire (profondeur 50–200 = hypothèse AT, non appliquée)
8. Enum modeled sans `NOT_FOUND` / `INVALID` dédiés — extension schema = dette T-A1-D08

## Anti-claims

- Pas T-A1 **MERGED**
- Pas T-A2 **AUTHORIZED** / started
- Pas READY FOR DELIVERY GLOBAL
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED runtime / modeled schemas **inchangés**
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (slice foundation only)
- Pas UI / Cycle / Decision / Execution / Evidence
- Pas autorisation de **merge** dans ce cycle (revue Morris uniquement)

## Gate suivant

Revue PR Morris → merge **uniquement** après décision explicite Morris. Ensuite seulement : `GO DELIVERY … T-A2` (non autorisé ici).
