# 08 — PR readiness — T-A2 Cycle / Trajectory / Epistemic / CKC

| Champ | Valeur |
|-------|--------|
| **Date/heure Europe/Paris** | 2026-07-24 13:17:57 CEST (+0200) |
| **Gate consommé** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Base** | `origin/main` @ `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` |
| **HEAD avant PR readiness** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **HEAD final** | 5a4d3bc87751f843e64ada221ba4bfca64c9e8c3 (docs PR readiness tip at authoring; re-verify on PR head SHA) |
| **merge-base(HEAD, origin/main)** | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Diff vs origin/main** | 40 files changed, 4974 insertions(+), 6 deletions(-) |
| **Validation technique** | **PASSED AFTER CORRECTION** — 48/30/28/10 |
| **Décisions Morris T-A2-D01…D10** | **encore requises** (recommandations agents uniquement ; pas de source Git Morris-validated) |
| **Push / PR** | autorisés par ce gate |
| **Merge** | **interdit** dans ce cycle |
| **Gate suivant (non consommé)** | `GO MERGE PR T-A2` |

## Scope

- Module `projects/sfia-studio/app/lib/oa/cycle/**` — CycleInstance, ProjectTrajectory, EpistemicItem, CkcResolution
- Qualification déterministe (Critical / Light / Standard) ; Critical reste `proposed`
- Trajectoire versionnée + LPS link via T-A1 `AppendLivingProjectStateVersion`
- CKC guidance-only (`executionAuthority=false`) ; absent CKC n’bloque pas Create
- Tests foundation + adversarial + anti-legacy (48)
- Extensions LPS minimales (champs de liaison)
- Corrections validation B1 / B3 / B4 / E
- Documentation `t-a2-cycle-trajectory-epistemic-ckc/**`

## Hors scope

HumanDecision · Confirmation · ExecutionContract · agents · Evidence / ReviewBundle / ClaimEvaluation · UI Option A · cutover v2.6 · MethodMode / OPS1 · SQL / migrations · IAM · DATABASE SELECTED · schemas modeled · `method/**` · `prompts/**` · `package.json` · T-A3+ · Critical Morris ack · inventer API T-A1 `reservationIds` (B5)

## Architecture

Modular monolith `lib/oa/cycle` (domain / application / ports / infrastructure mémoire) :

```
QualifyCycle → recommendation only (isMorrisDecision=false)
CreateCycle → ProjectServices.GetProject → persist CycleInstance
CreateInitialTrajectory / ProposeTrajectoryVersion
  → clone-first steps → validate → TrajectoryRepository (mutex)
  → AppendLivingProjectStateVersion (expectedVersion / expectedLpsVersion)
ResolveCycleKnowledgeContract → CkcResolverPort (guidance; executionAuthority=false)
UpdateEpistemicState → refuse Hypothesis/Observation→DecisionRef promotion
```

## Corrections B1 / B3 / B4 / E (corrigées)

| ID | Defect | Fix | Status |
|----|--------|-----|--------|
| **B1** | TOCTOU: validate then await then clone `request.steps` | Clone-first avant validate/persist | **CORRECTED** |
| **B3** | Orphan deps accepted (DFS skipped unknowns) + self-deps | Reject orphan + explicit `self_dependency` | **CORRECTED** |
| **B4** | Propose `stale`/`superseded` orphans current pointer | Allowlist `candidate\|validated\|active` | **CORRECTED** |
| **E** | Same-id Hypothesis/Observation → DecisionRef overwrite | Guard in `assertNoHypothesisDecisionPromotion` | **CORRECTED** |

## Tests adversariaux

Suite `__tests__/oa/cycle/adversarialValidation.test.ts` — prouve B1/B3/B4/E, hostile CKC, qualification edges, failNextSave rollback, immutabilité, concurrency `TRAJECTORY_VERSION_CONFLICT`, Critical stays proposed, same-id promotion, B5 LPS carry probe (documents OPEN RESERVE).

## Résultats de validation (matrice PR readiness)

| Suite | Attendu | Résultat |
|-------|---------|----------|
| `npx vitest run __tests__/oa/cycle` | 48 | PASS (réexécuté ce cycle) |
| `npx vitest run __tests__/oa/project` | 30 | PASS |
| `npx vitest run __tests__/oa/doctrine` | 28 | PASS |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 10 | PASS |
| `npx tsc --noEmit` | PASS | PASS |
| lint `lib/oa/cycle` + `lib/oa/project` (+ tests cycle) | PASS | PASS |
| `npx next build` | PASS si faisable | PASS / noté dans review pack |
| `git diff --check origin/main...HEAD` | PASS | PASS |

Total connu : **116** tests PASS.

## Réserves OPEN (non fermées)

| ID | Réserve | Statut |
|----|---------|--------|
| **B5 / R6** | T-A1 append ne porte pas `reservationIds` / ids satellites LPS ; T-A2 ne doit pas inventer l’API | **OPEN RESERVE** |
| **R1** | Pas d’atomicité cross-store stricte Project↔Cycle (deux mutex mémoire) | **OPEN RESERVE** |

Autres dettes documentées (non blockers fondation) : ErrorRecord enum borné · bornes nombre versions/étapes/items · mémoire uniquement · Capitalization via `cycleTypeId` · Critical acknowledgement hors T-A2.

## Dettes

1. **B5** — évolution explicite contrat LPS T-A1 pour carry-forward satellite ids
2. **R1** — transaction unique / outbox avant persistance réelle ou exécution critique
3. **ErrorRecord** — extension enum modeled pour detail codes T-A2 (mapping actuel documenté)
4. **Capitalization** — schema `profile` sans valeur Capitalization (porté par `cycleTypeId`)
5. **DATABASE SELECTED** — ports mémoire seulement
6. **Critical ack** — hors T-A2 (reste `proposed`)

## Décisions T-A2-D01…D10 — recommandations (Morris encore requis)

| ID | Observation | Preuve | Option | Alternative rejetée | Réserve / dette | Réversibilité | Recommandation | Morris |
|----|-------------|--------|--------|---------------------|-----------------|---------------|----------------|--------|
| **T-A2-D01** | Isolation module cycle | anti-legacy + suite 48 | `lib/oa/cycle` | fusion d1/OPS1 | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D02** | Capitalization hors enum profile | tests Capitalization | `cycleTypeId=cyc:capitalization` | étendre enum maintenant | schema gap | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D03** | Qualification déterministe | edges adversarial | Critical/Light/Standard | scores inventés | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D04** | Critical sans auto-ack | `never auto-acks Critical` | status `proposed` | auto-acknowledge | ack T-A3+ | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D05** | Versioning + concurrency | B1/B3/B4 fixed + concurrent conflict | expectedVersion + clone-first + allowlist | in-place / stale propose | **R1/B5** | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |
| **T-A2-D06** | Repos locaux | failNextSave rollback | in-memory + ports | SQL maintenant | adapter DB futur | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D07** | CKC guidance | hostile denied ; absent OK | unavailable + `intra_v3_only` | inventer detailed / bloquer Create | contenu CKC futur | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D08** | Erreurs bornées | mapping detail codes | map vers codes existants | étendre schema enum | enum debt | Moyenne | **ACCEPT** | **REQUISE** |
| **T-A2-D09** | Cap taille traj | size cap test | `MAX_TRAJECTORY_SNAPSHOT_BYTES=256_000` | illimité | tuning | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D10** | Foundation-only | exclusions + docs | slice bornée | wiring session/decision | **B5/R1** + activation | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |

Pas de claim `VALIDATED BY MORRIS` — aucune source Git Morris-validated pour T-A2-D01…D10.

## Anti-claims

- Pas T-A2 **MERGED**
- Pas merge autorisé dans ce cycle
- Pas Morris **VALIDATED** décisions T-A2 (recommandations seulement)
- Pas T-A3 **AUTHORIZED** / **LAUNCHED**
- Pas DATABASE SELECTED / SQL / schemas modeled runtime adoptés
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / HumanDecision / Confirmation / Execution / Evidence
- Pas B5 / R1 **CLOSED**
- Pas `VALIDATED WITH RESERVES` comme verdict Morris — verdict technique = **PASSED AFTER CORRECTION**

## Stratégie de rollback

- Trajectoire : proposer une nouvelle version restaurée (jamais rewrite in-place des versions historiques)
- Cycle / epistemic : fail-closed ; rollback logique store mémoire sur `failNextSave`
- LPS : `expectedVersion` / conflict — pas d’overwrite silencieux
- Rollback produit = revert / non-merge de la PR ; branche conservée

## Risques de merge

| Risque | Mitigation |
|--------|------------|
| Partial Project↔Cycle (R1) | Accepté fondation ; documenté OPEN |
| LPS satellite ids drop (B5) | OPEN RESERVE ; pas d’API inventée |
| Reviewer confond validation technique / décision Morris | Status discipline explicite dans PR + docs |
| Scope creep T-A3 / UI | Exclusions + anti-claims |
| Concurrent propose | Mutex + `TRAJECTORY_VERSION_CONFLICT` prouvé |

## Review focus

1. Transaction / concurrence trajectoire + LPS expectedVersion
2. Intégration LPS (champs de liaison uniquement)
3. Corrections B1 / B3 / B4 / E
4. Distinction recommandation vs décision (`isMorrisDecision=false`)
5. Critical reste `proposed`
6. CKC sans autorité d’exécution
7. Trajectoire immutable (versions)
8. Promotion épistémique interdite
9. Réserves B5 / R1 toujours OPEN

## Checklist PR

- [x] Truth Check branche / HEAD / merge-base / diff
- [x] Corrections B1/B3/B4/E présentes + tests adversariaux verts
- [x] Matrice 48/30/28/10 + tsc/lint/build/diff-check
- [x] Chemins protégés absents du diff
- [x] Docs PR readiness (`08` + wording)
- [x] Commit docs local
- [ ] Push `-u` (ce cycle)
- [ ] PR non-draft vers `main` (ce cycle)
- [ ] Review pack FULL + handoff publish (ce cycle)
- [ ] **Merge** — **NON** (gate `GO MERGE PR T-A2` non consommé)

## Gate de merge requis

**Non consommé** : `GO MERGE PR T-A2`.

Ce cycle crée uniquement la PR pour revue Morris. Merge, auto-merge, force-push, rebase/squash rewrite, et lancement T-A3 sont **interdits**.

## Verdict cycle (après PR créée)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 PR CREATED — MORRIS REVIEW REQUIRED**
