# 08 — PR readiness — T-A3 Decision / Confirmation / Authority

| Champ | Valeur |
|-------|--------|
| **Date/heure Europe/Paris** | 2026-07-24 15:12:00 CEST (+0200) |
| **Gate consommé** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A3` |
| **Base** | `origin/main` @ `5f5c6161063e11065aaf5be74d8181ee2c2eeaea` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority` |
| **HEAD avant PR readiness** | `7afd12a76e4450451e1a84a5f0add16eac5c222f` |
| **HEAD final** | `276c530ff918734a59139474298e404e9b2c772b` |
| **merge-base(HEAD, origin/main)** | `5f5c6161063e11065aaf5be74d8181ee2c2eeaea` |
| **Diff vs origin/main** | 38 files changed, 6073 insertions(+), 1 deletion(-) _(at prepare docs commit; tip may include align)_ |
| **Validation technique** | **PASSED AFTER CORRECTION** — 50/48/30/28/10 = **166** |
| **Décisions Morris T-A3-D01…D10** | **encore requises** (recommandations agents uniquement ; pas de source Git Morris-validated) |
| **Push / PR** | **DONE this cycle** — remote SHA / PR filled after push |
| **Merge** | **interdit** / **not done** (gate `GO MERGE PR T-A3` non consommé) |
| **Gate suivant (non consommé)** | `GO MERGE PR T-A3` |

## Scope

- Module `projects/sfia-studio/app/lib/oa/decision/**` — HumanDecision, Confirmation (N1/N2/N3), AuthorityResolverPort
- Dual enums: Decision.authority vs Confirmation.level; Morris gate = N3 + `canActAsMorris`
- One accepted decision per subject; supersede = immutable history
- In-memory ports/stores; failNextSave rollback; audit events
- Optional LPS `decisionIds` + Epistemic `DecisionRef` via public T-A1/T-A2 APIs only
- Corrections validation B1–B4 (+ evidence immutability)
- Tests foundation + adversarial delivery + adversarial validation + anti-legacy (**50**)
- Documentation `t-a3-decision-confirmation-authority/**`

## Hors scope

ExecutionContract · agents · Evidence / ReviewBundle / ClaimEvaluation · UI Option A · cutover v2.6 · MethodMode / OPS1 · SQL / migrations · IAM · DATABASE SELECTED · schemas modeled · `method/**` · `prompts/**` · `package.json` · T-A4+ · Critical Morris acknowledge API (R-T-A3-1) · inventer API T-A1 satellite ids (B5)

## Architecture

Modular monolith `lib/oa/decision` (domain / application / ports / infrastructure mémoire) :

```
RecordHumanDecision / SupersedeHumanDecision
  → snapshot request fields BEFORE awaits (B1)
  → AuthorityResolverPort (never trust client authorityLevel/displayName)
  → MemoryDecisionStore txn (mutex) + begin/commit/rollback
  → optional LPS decisionIds / Epistemic DecisionRef (fail-closed + compensate — B4)
Request/Grant/Refuse/Cancel/Consume Confirmation
  → re-load under txn; refuse only from requested; cancel only from requested|granted (B2)
VerifyAuthority · ListDecisionHistory · GetHumanDecision
```

## Corrections B1–B4 (corrigées ; réserves restent OPEN)

| ID | Defect | Fix | Status |
|----|--------|-----|--------|
| **B1** | TOCTOU: authority/actor/selectedOptionId/status/subject/scope after await | Snapshot before any await; persist snapshots only | **CORRECTED** |
| **B2** | Refuse/cancel overwrite grant (stale status outside txn) | Re-load under txn; refuse=`requested` only; cancel=`requested\|granted` | **CORRECTED** |
| **B3** | Concurrent supersede → dual accepted | Inside txn: require `expectedPreStatus`; reject second supersede; clear other accepted | **CORRECTED** |
| **B4** | Silent LPS/epistemic link failures after persist | Fail-closed; compensate supersede orphan; residual if compensate fails → R-T-A3-2 | **CORRECTED** |
| **E** | actorId/evidence mismatch / mutable evidence | Guard + immutable evidence register (`evidence_immutable`) | **CONFIRMED** |

## Tests adversariaux

- `__tests__/oa/decision/adversarialAuthority.test.ts` — delivery adversarial
- `__tests__/oa/decision/validationAdversarial.test.ts` — proves B1–B4, actor/evidence mismatch, evidence immutability

## Résultats de validation (matrice PR readiness)

| Suite | Attendu | Résultat |
|-------|---------|----------|
| `npx vitest run __tests__/oa/decision` | 50 | PASS (réexécuté ce cycle) |
| `npx vitest run __tests__/oa/cycle` | 48 | PASS |
| `npx vitest run __tests__/oa/project` | 30 | PASS |
| `npx vitest run __tests__/oa/doctrine` | 28 | PASS |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 10 | PASS |
| `npx tsc --noEmit` | PASS | PASS |
| lint `lib/oa/decision` (+ tests decision) | PASS | PASS |
| `npx next build` | PASS si faisable | PASS / noté dans review pack |
| `git diff --check origin/main...HEAD` | PASS | PASS |

Total connu : **166** tests PASS (50+48+30+28+10).

## Réserves OPEN (non fermées)

| ID | Réserve | Statut |
|----|---------|--------|
| **B5** | T-A1 append ne porte pas `reservationIds` / ids satellites LPS au-delà de `decisionIds` | **OPEN RESERVE** |
| **R1** | Pas d’atomicité cross-store stricte Project↔Cycle | **OPEN RESERVE** |
| **R-T-A3-1** | Pas d’API publique Critical acknowledge (T-A2) | **OPEN RESERVE** |
| **R-T-A3-2** | Decision↔LPS/Epistemic sans txn distribuée ; résiduel si compensate échoue | **OPEN RESERVE** |
| **R-T-A3-3** | Authority registry in-memory only | **OPEN RESERVE** |
| **R-T-A3-4** | `AUTHORITY_SCOPE_MISMATCH` → modeled `AUTHORITY_DENIED` | **OPEN RESERVE** |

## Dettes

1. **B5** — évolution explicite contrat LPS T-A1 pour carry-forward satellite ids
2. **R1 / R-T-A3-2** — transaction unique / outbox avant persistance réelle
3. **R-T-A3-1** — Critical acknowledge public sur T-A2 (hors ce PR)
4. **R-T-A3-3** — adapter authority persistant après DATABASE SELECTED
5. **R-T-A3-4** — extension enum ErrorRecord modeled
6. **DATABASE SELECTED** — ports mémoire seulement

## Décisions T-A3-D01…D10 — recommandations (Morris encore requis)

| ID | Observation | Preuve | Option | Alternative rejetée | Réserve / dette | Réversibilité | Recommandation | Morris |
|----|-------------|--------|--------|---------------------|-----------------|---------------|----------------|--------|
| **T-A3-D01** | Dual enums authority vs level | anti-legacy + suite 50 | split intentionnel | fusionner enums | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A3-D02** | Morris = N3 + canActAsMorris | hostile displayName tests | gate composé | N3 seul | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A3-D03** | Never trust client authority | B1 snapshots | server snapshots | client authorityLevel | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A3-D04** | One accepted per subject | B3 fixed | auto-supersede default | multi-accepted | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A3-D05** | Supersede immutable history | supersede tests | history append | rewrite in-place | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A3-D06** | In-memory authority + immutable register | evidence_immutable | mémoire + ports | SQL maintenant | **R-T-A3-3** | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |
| **T-A3-D07** | Critical stays proposed | cycle link tests | no status mutate | auto-ack | **R-T-A3-1** | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |
| **T-A3-D08** | LPS decisionIds extension | LPS link tests | non-breaking append | inventer reservationIds | **B5** | Haute | **ACCEPT** | **REQUISE** |
| **T-A3-D09** | Detail→modeled mapping; B4 fail-closed | B4 + mapping tests | AUTHORITY_DENIED map | étendre enum maintenant | **R-T-A3-4** | Moyenne | **ACCEPT WITH RESERVE** | **REQUISE** |
| **T-A3-D10** | Foundation-only + compensate | exclusions + B4 | slice bornée | UI/execution/T-A4 | **R1 / R-T-A3-2** | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |

Pas de claim `VALIDATED BY MORRIS` — aucune source Git Morris-validated pour T-A3-D01…D10.

## Anti-claims

- Pas T-A3 **MERGED**
- Pas merge autorisé dans ce cycle
- Pas Morris **VALIDATED** décisions T-A3 (recommandations seulement)
- Pas T-A4 **AUTHORIZED** / **LAUNCHED**
- Pas DATABASE SELECTED / SQL / schemas modeled runtime adoptés
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / ExecutionContract / Evidence / ReviewBundle
- Pas B5 / R1 / R-T-A3-* **CLOSED**
- Pas `VALIDATED WITH RESERVES` comme verdict Morris — verdict technique = **PASSED AFTER CORRECTION**
- Pas claiming Morris validated this PR readiness

## Stratégie de rollback

- Decision / Confirmation : fail-closed ; rollback logique store mémoire sur `failNextSave`
- Supersede : historique immuable (jamais rewrite in-place)
- LPS / Epistemic links : compensate supersede on failure (B4) ; résiduel documenté R-T-A3-2
- Rollback produit = revert / non-merge de la PR ; branche conservée

## Risques de merge

| Risque | Mitigation |
|--------|------------|
| Cross-store Decision↔LPS residual (R-T-A3-2) | Fail-closed + compensate ; OPEN RESERVE |
| LPS satellite ids drop (B5) | OPEN RESERVE ; pas d’API inventée |
| Reviewer confond validation technique / décision Morris | Status discipline explicite dans PR + docs |
| Scope creep T-A4 / UI / Execution | Exclusions + anti-claims |
| Concurrent supersede / refuse races | B1–B3 prouvés + corrigés |

## Review focus

1. Authority never trusts client `authorityLevel` / `displayName` (B1 snapshots)
2. Confirmation state machine under txn (B2 refuse/cancel)
3. One accepted per subject + concurrent supersede (B3)
4. LPS/Epistemic link fail-closed + compensate (B4)
5. Dual enums + Morris gate N3 ∧ canActAsMorris
6. Critical cycle remains `proposed` (R-T-A3-1)
7. Reserves B5 / R1 / R-T-A3-1..4 still OPEN
8. No protected-path edits (schemas / method / package.json / T-A4)

## Checklist PR

- [x] Truth Check branche / HEAD / merge-base / diff
- [x] Corrections B1–B4 présentes + tests adversariaux verts
- [x] Matrice 50/48/30/28/10 + tsc/lint/build/diff-check
- [x] Chemins protégés absents du diff
- [x] Docs PR readiness (`08` + wording)
- [x] Commit docs local
- [x] Push `-u` (ce cycle)
- [x] PR non-draft vers `main` (ce cycle)
- [x] Review pack FULL + handoff publish (ce cycle)
- [ ] **Merge** — **NON** (gate `GO MERGE PR T-A3` non consommé)

## Gate de merge requis

**Non consommé** : `GO MERGE PR T-A3`.

Ce cycle crée uniquement la PR pour revue Morris. Merge, auto-merge, force-push, rebase/squash rewrite, et lancement T-A4 sont **interdits**.

## Verdict cycle (après PR créée)

**SFIA STUDIO V3-NATIVE OPTION A T-A3 PR CREATED — MORRIS REVIEW REQUIRED**
