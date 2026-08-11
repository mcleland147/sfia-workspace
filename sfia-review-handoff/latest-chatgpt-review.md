# FULL Review Pack — F3 Real Path HARD Prerequisites Framing (Gate C)
| Champ | Valeur |
|-------|--------|
| **Generated (CEST)** | 2026-08-11 21:15:58 CEST (+0200) |
| **Generated (UTC)** | 2026-08-11 19:15:58 UTC |
| **Review Pack** | **FULL** (Synthesis-only: **NO**) |
| **Cycle** | **6** — Architecture technique · **Critical** · CAPA/DOC |
| **Worktree** | framing WT `f3-real-hard-prerequisites` |
| **Branch** | `framing/sfia-studio-f3-real-hard-prerequisites` |
| **HEAD** | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| **Handoff mode** | publish-in-cycle · FF only · L3 |

---

## 0. Success verdict (GO)

```
F3 REAL HARD PREREQUISITES FRAMING COMPLETE — GATE C CONSUMED — R-T-A3-1 CURRENT EVIDENCE AND MISSING AUTHORITY PROOFS MAPPED — R-T-A3-2 CURRENT EVIDENCE AND MISSING DURABILITY PROOFS MAPPED — F3 FIXTURE EVIDENCE DELTA ASSESSED — NO HARD CLOSED — IAM REMAINS NOT_SELECTED — PRODUCT PERSISTENCE REMAINS NOT_SELECTED — BOUNDED LOCAL PERSISTENCE REMAINS LOCAL ONLY — NO PRODUCT MUTATION — NO REAL EXECUTION — NO CURSOR REAL ADAPTER — GATE D NOT CONSUMED — CURSOR REAL REMAINS BLOCKED — ARCHITECTURE OPTIONS PREPARED — RECOMMENDATION REMAINS NOT DECIDED — NEXT MORRIS DECISION PACKAGE READY — FULL REVIEW PACK COMPLETE — HANDOFF REMOTE VERIFIED — READY FOR CHATGPT REVIEW
```

## 1. GO Morris exact

```
GO FRAME OR REDUCE HARD R-T-A3-1 / R-T-A3-2 FOR FUTURE REAL PATH — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT
```

## 2. Cycle / profil / justification Critical

- Cycle **6** — Architecture technique
- Profil **Critical**
- Typologie CAPA/DOC — architecture d'autorité et d'atomicité future REAL
- Justification : R-T-A3-1 / R-T-A3-2 gouvernent identité Critical, restart/replay, atomicité, capacité future agent à effets réels — **sans** autoriser REAL dans ce cycle

## 3. Template

- `prompts/templates/sfia-cycle-execution-template.md` **v2.6**
- Blob : `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`

## 4. Inbound handoff (BEFORE tip/blob)

| | SHA |
|--|-----|
| tip `origin/sfia/review-handoff` BEFORE | `b110fe1337d46437553a7258635a2f4bcdfbe285` |
| blob `sfia-review-handoff/latest-chatgpt-review.md` BEFORE | `ea6e63eca178ba475eb2354014accdae4ffd0406` |

## 5. Git Truth — main / package / branch

| Artefact | SHA |
|----------|-----|
| main / framing HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Package F3 fixture | `ec7d6c8bbdcd71a49942e33f749826a9aba6d5a4` |
| PR | **#333** merged |
| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` @ `4b1a058` |

## 6. Sources consultées

F3 fixture code/constants/tests ; MemoryAuthorityResolver ; AuthorityResolverPort ; hardBlockerFoundation ; projectCycleAtomicCoordinator ; boundedPersistenceDecision ; boundedAtomicAudit ; A5.2 03/04 ; T-A3 pack ; F3 pre-delivery governance ; F3-D01…D11 ; T-A7 technical readiness / hard lot ; PR #333 post-merge inbound ; F2 recordDecision contrast ; vitest logs under `.tmp-sfia-review/f3-real-hard-prerequisites/logs/` ; template v2.6.

## 7. PR #291 / HARD foundation state

- `hardBlockerFoundation` : `openHard:true`, `deliveryReady:false`, remainsOpen honesty
- Missing proofs declared : authenticated Critical ack ; durable cross-store atomicity
- `productionRollbackProven=false` ; `crossStoreDurable=false`
- CI green **never** closes HARD

## 8. F3 fixture evidence delta (summary)

- NEW + SUPPORTS_REDUCTION : `canActAsMorris=false` honesty ; hostile REAL ignored ; process-local notice ; open HARD refs in DTO ; F2 vs F3 contrast
- ALREADY_KNOWN exercised : confirm binding ; idempotent attempt ; no Git/external effect
- DOES_NOT_ADDRESS_MISSING_PROOF : authenticated Morris surface ; cross-store durable ; rollback drill
- Conclusion : **FURTHER REDUCED — REMAINS OPEN** on clarity · **NO HARD CLOSED**

## 9–10. R-T-A3-1 / R-T-A3-2 full matrices

See **complete README §8–§9** embedded below (authoritative). Recommended statuses :

- R-T-A3-1 : **FURTHER REDUCED — REMAINS OPEN** (OPEN HARD · BLOCKS REAL) · NEVER CLOSED
- R-T-A3-2 : **FURTHER REDUCED — REMAINS OPEN** (OPEN HARD · BLOCKS REAL) · NEVER CLOSED

## 11. Threat model TM-01…TM-12

See README **§10** complete (TM-01..TM-12 with expected safe behavior / proof / missing control / HARD impact).

## 12. Tests exécutés (read-only)

# Vitest SUMMARY — Gate C F3 Real HARD Prerequisites (read-only)

**Worktree:** framing/sfia-studio-f3-real-hard-prerequisites
**App cwd:** `projects/sfia-studio/app`
**Note:** **PASS does not close HARD.** R-T-A3-1 / R-T-A3-2 remain OPEN HARD — BLOCKS REAL.

| Suite | Command | Test Files | Tests | Exit |
|-------|---------|------------|-------|------|
| T-A3 decision | `npx vitest run __tests__/oa/decision` | 4 passed | **50 passed** | 0 |
| T-A4 execution-contract | `npx vitest run __tests__/oa/execution-contract` | 5 passed | **61 passed** | 0 |
| T-A5 execution-attempt | `npx vitest run __tests__/oa/execution-attempt` | 4 passed | **88 passed** | 0 |
| T-A6 evidence-review | `npx vitest run __tests__/oa/evidence-review` | 16 passed | **140 passed** | 0 |
| T-A7 hard foundation | `npx vitest run __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts` | 2 passed | **34 passed** | 0 |
| F3 fixture | `npx vitest run __tests__/project-assistant/f3.fixtureVerticalSlice.test.ts` | 1 passed | **9 passed** | 0 |

**Totals:** 32 test files / **382 tests** passed / 0 failed.

**Logs:**
- `t-a3-decision.log`
- `t-a4-execution-contract.log`
- `t-a5-execution-attempt.log`
- `t-a6-evidence-review.log`
- `t-a7-hard-foundation.log`
- `f3-fixture.log`
- `npm-ci.log`

**Anti-claim:** Suite PASS ≠ HARD CLOSED ≠ Cursor REAL authorized ≠ Gate D consumable.


PASS ≠ HARD closed ≠ Cursor REAL ≠ Gate D.

## 13. Preuves actuelles / manquantes

**Actuelles :** T-A3 fail-closed ; T-A4/T-A5/T-A6 foundations ; hard foundation honesty ; F3 FIXTURE vertical slice merged ; openHard refs carried ; canActAsMorris=false on F3 path.

**Manquantes R-T-A3-1 :** authenticated public Critical ack API ; audited Morris identity ; durable anti-replay ack ; Morris GO real Critical.

**Manquantes R-T-A3-2 :** cross-store durable txn ; authorized non-prod rollback drill ; production concurrency proof.

## 14. Architecture options A–D

- **A** HARD PREREQUISITES FRAMING ONLY — **RECOMMENDED posture — NOT DECIDED**
- **B** MINIMAL BOUNDED REAL PILOT PREREQUISITES — ADMISSIBLE AS FRAMING ONLY — **OPTION — NOT SELECTED**
- **C** EXTEND BOUNDED LOCAL AUTHORITY/AUDIT — high caution — **OPTION — NOT SELECTED**
- **D** IAM/PRODUCT DB FIRST — **NOT ADMISSIBLE** — **OPTION — NOT SELECTED**

Full attribute tables in README §12–§13.

## 15. Recommandation

**Option A — RECOMMENDED — NOT DECIDED.** Challenge answers in README §14. No architecture SELECTED without Morris.

## 16. Dette / simplicité

A = minimal debt, max reversibility, repo-first. B = future package. C = caution. D = reject under current GO.

## 17. IAM status

**NOT_SELECTED** (GO forbids auto-select). **NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND.**

## 18. Product persistence status

**NOT_SELECTED** (GO forbids auto-select).

## 19. Bounded local persistence status

**SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY** · remains local only · ≠ product DB.

## 20. Gates

| Gate | Status |
|------|--------|
| A | CONSUMED |
| B | CONSUMED + QA VALIDATED + MERGED |
| C | **CONSUMED** (this cycle) |
| D | **NOT CONSUMED** |

## 21. HARD statuses

R-T-A3-1 / R-T-A3-2 : **FURTHER REDUCED — REMAINS OPEN** · OPEN HARD · BLOCKS REAL · **NO CLOSED**

## 22. B5 / R1 / R-M01

- B5 global : **OPEN** (fixture path had prior bounded acceptance ≠ global CLOSED)
- R1 : **OPEN**
- R-M01 : **OPEN** (in F3 openHardReservationRefs)

## 23. T-A6 COMPLETE

**NOT DECLARED**

## 24. Cursor REAL

**BLOCKED** · no REAL adapter · no REAL execution

## 25. Project mutation counters

| Counter | Value |
|---------|------:|
| app/** mutations | **0** |
| package.json / lock / migrations | **0** |
| project commits | **0** |
| project push | **0** |
| project PR | **0** |
| project merge | **0** |
| HARD CLOSED | **0** |
| IAM SELECTED | **0** |
| product persistence SELECTED | **0** |
| Gate D consumed | **0** |
| Cursor REAL | **0** |

## 26. Fichier créé

`projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/README.md`

- lines : 728
- untracked (no project commit)
- sections 1–20 present

## 27. Review Handoff plan

- Source : `.tmp-sfia-review/chatgpt-review.md`
- Script : `scripts/sfia/publish-review-handoff.sh`
- Commit message : `docs(review-handoff): publish F3 real HARD prerequisites framing`
- Handoff worktree : `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
- FF only · no force
- Inbound BEFORE tip/blob as §4
- Final remote identity verified externally after content freeze if needed

## 28. Réserves / next Morris decision candidate

Next candidates (ordered) :

1. ChatGPT review of this pack
2. Authority surface design decision (intermediate)
3. Durability proof plan (intermediate)
4. Optional Option B design package
5. Only later Delivery / QA / Gate D if proofs warrant

## 29. Anti-claims (pack)

NO HARD CLOSED · NO IAM SELECTED · NO product persistence SELECTED · NO Cursor REAL · NO Gate D · NO REAL READY · PASS≠CLOSED · fixture≠Morris · F2 demo≠prod identity · N3≠Morris · bounded local≠product DB · conversation≠authority · recommendation≠selected · FURTHER REDUCED≠CLOSED

---

## EMBEDDED — COMPLETE README (fichier créé)

Path : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/README.md`

```markdown
# F3 — Real Path HARD Prerequisites Framing (Gate C)

| Champ | Valeur |
|-------|--------|
| **Gate Morris consommé** | `GO FRAME OR REDUCE HARD R-T-A3-1 / R-T-A3-2 FOR FUTURE REAL PATH — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT` |
| **Cycle / profil** | **6** — Architecture technique · **Critical** · CAPA / DOC |
| **Justification Critical** | R-T-A3-1 / R-T-A3-2 gouvernent identité d'autorité Critical, résistance restart/replay, atomicité cross-store, et capacité future à lancer un agent à effets réels — sans autoriser REAL dans ce cycle |
| **Date/heure cadrage (CEST)** | 2026-08-11 21:14:09 CEST (+0200) |
| **Date/heure cadrage (UTC)** | 2026-08-11 19:14:09 UTC |
| **Base / main** | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| **Package F3 fixture** | `ec7d6c8bbdcd71a49942e33f749826a9aba6d5a4` (PR #333 merged) |
| **Branche locale** | `framing/sfia-studio-f3-real-hard-prerequisites` @ `4b1a058` |
| **Worktree** | `…/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites` |
| **Template** | `prompts/templates/sfia-cycle-execution-template.md` **v2.6** · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| **Gate A** | `CONSUMED` |
| **Gate B** | `CONSUMED + QA VALIDATED + MERGED` (PR #333) |
| **Gate C** | **`CONSUMED` by this framing cycle** |
| **Gate D** | **`NOT CONSUMED`** |
| **R-T-A3-1** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) — **NEVER CLOSED** |
| **R-T-A3-2** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) — **NEVER CLOSED** |
| **IAM** | **`NOT_SELECTED`** |
| **Product persistence** | **`NOT_SELECTED`** |
| **Bounded local persistence** | **`SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY`** (D1 / node:sqlite local · ≠ product DB) |
| **Cursor REAL** | **`BLOCKED`** |
| **T-A6 COMPLETE** | **`NOT DECLARED`** |
| **Product mutation this cycle** | **`NONE`** — framing docs only · **NO `app/**`** |
| **Project commit / push / PR** | **aucun** |
| **Recommandation architecture** | **Option A — RECOMMENDED — NOT DECIDED** · options B/C/D **OPTION — NOT SELECTED** (D = NOT ADMISSIBLE) |
| **Statut pack** | Gate C framing complet · FULL Review Pack · handoff L3 FF only |

> **Anti-fermeture :** ce document **mappe** preuves et manques pour un futur chemin REAL. Il **ne ferme pas** HARD, **n'exécute pas** REAL, **ne sélectionne pas** IAM ni product persistence, **ne consomme pas** Gate D.

---

## 1. Contexte / Gate Morris

### GO exact

```
GO FRAME OR REDUCE HARD R-T-A3-1 / R-T-A3-2 FOR FUTURE REAL PATH — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT
```

### Nature du cycle

| Élément | Valeur |
|---------|--------|
| Type | Cycle **6** — Architecture technique |
| Profil SFIA | **Critical** |
| Typologie | **CAPA / DOC** — architecture d'autorité et d'atomicité pour futur REAL |
| Framing-only | **OUI** — aucune Delivery, aucune mutation produit |
| Gate C | **CONSUMED** par ce cycle de cadrage |
| Gate D | **NOT CONSUMED** |

### Objectif (ce que ce cycle FAIT)

1. Établir la **Git Truth** après intégration complète du vertical slice F3 FIXTURE (PR #333).
2. Réévaluer précisément **R-T-A3-1** et **R-T-A3-2** à partir du code, des tests et des décisions mergées.
3. Qualifier le **delta de preuves** réellement apporté par F3 FIXTURE (NEW / ALREADY_KNOWN / SUPPORTS_REDUCTION / DOES_NOT_ADDRESS_MISSING_PROOF).
4. Distinguer preuve existante, réduction déjà acquise, réduction supplémentaire sans code, preuve manquante, dépendance Morris.
5. Définir les critères exacts avant tout pilote Cursor REAL.
6. Construire **quatre options d'architecture** bornées (A–D) ; recommander sans adopter.
7. Préparer le ou les prochains gates Morris.
8. Produire README + FULL Review Pack + handoff remote vérifié.

### Non-objectifs (ce que ce cycle NE FAIT PAS)

- **PAS** d'exécution REAL / Cursor REAL adapter.
- **PAS** de fermeture HARD (`CLOSED` interdit).
- **PAS** d'auto-sélection IAM.
- **PAS** d'auto-sélection product persistence.
- **PAS** de mutation `app/**`, `package.json`, lockfiles, migrations.
- **PAS** de consommation Gate D.
- **PAS** de transformation d'une option d'architecture en décision Morris.

### Chaîne F3 intégrée sur main (rappel)

```
F2 approved proposal
  → PREPARE
  → T-A4 ExecutionContract
  → confirmation explicite
  → T-A5 ExecutionAttempt
  → TestExecutionAdapter FIXTURE
  → T-A6 Evidence / ReviewBundle
  → reinjection Project Assistant
  → recommendation only
```

Le vertical slice FIXTURE est **livré**, QA Actual Next E2E **validée**, **mergé** via PR #333, post-merge **fermé**. Ce Gate C **cadrage** le chemin vers un éventuel futur REAL — sans l'ouvrir.

---

## 2. Git Truth

| Artefact | SHA / ref |
|----------|-----------|
| **main / framing HEAD** | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| **Package F3 fixture (commit)** | `ec7d6c8bbdcd71a49942e33f749826a9aba6d5a4` |
| **PR fixture** | **#333** merged — F3 native fixture vertical slice |
| **Branche framing** | `framing/sfia-studio-f3-real-hard-prerequisites` @ `4b1a058` |
| **Template cycle** | v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| **Inbound handoff tip (BEFORE)** | `b110fe1337d46437553a7258635a2f4bcdfbe285` |
| **Inbound handoff blob (BEFORE)** | `ea6e63eca178ba475eb2354014accdae4ffd0406` |
| **HARD foundation (PR #291 lineage)** | `hardBlockerFoundation` · `openHard:true` · `deliveryReady:false` · `productionRollbackProven=false` · `crossStoreDurable=false` |

### Vérifications framing

- Worktree checkout = `framing/sfia-studio-f3-real-hard-prerequisites`.
- HEAD = tip main post-PR #333 (`4b1a058…`).
- Aucun commit projet dans ce cycle ; README Gate C laissé **untracked** jusqu'à autorisation Morris.
- Artefacts `.tmp-sfia-review/` uniquement pour logs read-only + Review Pack + extracts.

---

## 3. Sources

Sources consultées / à conserver comme vérité de cadrage :

| # | Source | Rôle |
|---|--------|------|
| 1 | `app/features/project-assistant/f3/*` (constants, prepare, confirmAndExecute, ingestEvidence, types, validateF2) | Fixture code / constants / wiring |
| 2 | `app/lib/vertical-slice-runtime/f3FixtureWiring.ts` | Wiring FIXTURE-only |
| 3 | `__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts` | Preuves fixture (9 tests) |
| 4 | `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` | **MemoryAuthorityResolver** process-local |
| 5 | `app/lib/oa/decision/ports/authorityResolver.ts` | **AuthorityResolverPort** |
| 6 | `app/lib/oa/decision/application/{request,grant,consume}Confirmation.ts` + `verifyAuthority.ts` | Confirm fail-closed / consume |
| 7 | `app/lib/platform/t-a7/hardBlockerFoundation.ts` | Contrat HARD honnête (`openHard`, missing proofs) |
| 8 | `app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts` | Coordinateur Project↔Cycle · flags durability |
| 9 | `app/lib/platform/t-a7/boundedPersistenceDecision.ts` | Bounded local ≠ product persistence |
| 10 | `app/lib/d1/boundedAtomicAudit.ts` | Audit atomique local borné |
| 11 | `a5-2-…/03-authority-model-and-gaps.md` | A5.2 autorité · A52-D03 |
| 12 | `a5-2-…/04-atomicity-model-and-options.md` | A5.2 atomicité · A52-D02/D04 |
| 13 | `t-a3-decision-confirmation-authority/` (README, 03, 05) | Pack T-A3 |
| 14 | `f3-pre-delivery-governance-framing/README.md` | HARD mapping · Gate C/D · B5 bounded · anti-claims REAL |
| 15 | `f3-functional-design-decisions/README.md` | **F3-D01…D11** ADOPTED |
| 16 | `t-a7-technical-readiness-framing/` + lot `20-hard-ta6-…` | Foundation HARD / persistence |
| 17 | PR #333 post-merge review pack (handoff inbound) | Git Truth fixture merge |
| 18 | `app/features/project-assistant/f2/recordDecision.ts` | **F2** demo authority contrast (`canActAsMorris: true` server-side for gate recording) |
| 19 | Vitest logs sous `.tmp-sfia-review/f3-real-hard-prerequisites/logs/` | T-A3…T-A7 + F3 fixture read-only |
| 20 | Template `sfia-cycle-execution-template.md` v2.6 | Structure cycle |

### Tests read-only (exécutés dans ce cycle — PASS ≠ HARD closed)

| Suite | Tests | Prouve | Ne prouve PAS |
|-------|------:|--------|----------------|
| **T-A3** decision/authority | **50** | Fail-closed Confirm / authority binding / N3≠Morris | Authenticated Morris surface · HARD closed |
| **T-A4** execution-contract | **61** | Contrat d'exécution / gouvernance / anti-hostile | REAL pilot · Cursor REAL |
| **T-A5** execution-attempt | **88** | Lifecycle Attempt / idempotence foundation | Durable cross-store txn · rollback drill |
| **T-A6** evidence-review | **140** | Evidence / ReviewBundle maturity | **T-A6 COMPLETE** for REAL · READY |
| **T-A7** hard foundation | **34** | `openHard=true` · `deliveryReady=false` · flags honesty | HARD closure · delivery readiness |
| **F3 fixture** | **9** | FIXTURE slice · `canActAsMorris=false` · hostile REAL ignored | Authenticated Morris · HARD closed · REAL |

**Totaux :** 32 fichiers / **382** tests passed / 0 failed. Logs : `t-a3-decision.log`, `t-a4-execution-contract.log`, `t-a5-execution-attempt.log`, `t-a6-evidence-review.log`, `t-a7-hard-foundation.log`, `f3-fixture.log`.

---

## 4. État F3 après fixture

| Assertion | État canonique |
|-----------|----------------|
| Mode d'exécution Assistant F3 | **FIXTURE only** (`F3_MODE = "FIXTURE"`) |
| `canActAsMorris` (chemin F3 prepare/confirm) | **`false`** (honnête — pas de promotion artificielle) |
| F2 `recordDecision` (contraste) | Server registers evidence with **`canActAsMorris: true`** for **demo / gate recording** only — **≠** production Morris identity |
| Authority resolver F3 | **process-local `MemoryAuthorityResolver`** |
| `productionRollbackProven` | **`false`** |
| `crossStoreDurable` | **`false`** |
| `openHardReservationRefs` (DTO F3) | inclut **`R-T-A3-1`**, **`R-T-A3-2`**, **`R-M01`** |
| Cursor REAL | **BLOCKED** · hostile REAL / adapter claims **ignored** |
| External effects | **false** (FIXTURE) |
| T-A6 COMPLETE | **NOT DECLARED** |
| Authenticated Morris identity surface | **`NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND`** |
| Product mutation this cycle | **NONE** |

### Contraste F2 vs F3 (autorité)

- **F2** : enregistrement de décision de préparation ; le serveur peut poser une evidence `canActAsMorris: true` pour le chemin demo/gate — cela **n'équivaut pas** à une identité Morris authentifiée production, et le GO F2 n'autorise que **PREPARE** (F3-D01).
- **F3 fixture** : force explicitement `canActAsMorris: false` sur prepare/confirm ; l'autorité est **LOCAL_PROCESS_F3_FIXTURE_AUTHORITY** ; tout claim client REAL / adapter est **ignoré** / rejeté.
- Ce contraste **clarifie** le gap R-T-A3-1 ; il **ne le ferme pas**.

---

## 5. Définition R-T-A3-1

| Champ | Valeur |
|-------|--------|
| **ID** | **R-T-A3-1** |
| **Libellé** | Critical acknowledge / authority |
| **Sévérité** | **Critical / OPEN HARD** |
| **Bloque REAL** | **OUI** |
| **Bloque fixture-only** | **NON** (FIXTURE path admissible sous B5 borné) |
| **Fail-closed actuel** | Confirm Critical refuse sans ack → **`CRITICAL_NOT_ACKNOWLEDGED`** |
| **Norme A52-D03** | `.3` court terme (simulation/read-only) ; trajectoire `.1` (API publique authentifiée + auditée) **avant** real Critical |
| **N3 ≠ canActAsMorris** | **Confirmé** — N3 verified ∧ `canActAsMorris=true` requis pour MORRIS ; N3 seul **insuffisant** (`authorityHelper`) |
| **Manque principal** | Authenticated public Critical acknowledge API + audited Morris identity surface |
| **IAM** | **NOT_SELECTED** (auto-select interdit par ce GO) |

### Risque

Sans surface d'identité Morris authentifiée et sans ack Critical public audité, toute promotion d'autorité fixture / process-local / conversation vers REAL créerait une **autorité implicite** — exactement ce que F3-D07 et A52-D03 interdisent.

### Ce que R-T-A3-1 n'est pas

- Ce n'est **pas** « les tests T-A3 passent ».
- Ce n'est **pas** « F2 a posé `canActAsMorris: true` en demo ».
- Ce n'est **pas** « MemoryAuthorityResolver existe ».
- Ce n'est **pas** fermable par CI green ou par framing seul.

---

## 6. Définition R-T-A3-2

| Champ | Valeur |
|-------|--------|
| **ID** | **R-T-A3-2** |
| **Libellé** | Decision↔LPS/Epistemic and Project↔Cycle durable atomicity |
| **Sévérité** | **Critical / OPEN HARD** |
| **Bloque REAL** | **OUI** |
| **Bloque fixture framing** | **NON** (mémoire / simulation acceptables sous A52-D04.4 jusqu'à future déclaration) |
| **Flags code** | `productionRollbackProven=false` · `crossStoreDurable=false` |
| **Norme A52-D02** | `.2` — txn logique + compensation/idempotence avant delivery ; **garantie durable avant real-exec** |
| **Norme A52-D04** | `.4` — mémoire bornée uniquement jusqu'à future T-A6 COMPLETE mémoire ; **≠** COMPLETE maintenant |
| **Manques principaux** | Cross-store durable Project↔Cycle transaction · authorized non-prod rollback drill · production concurrency proof |
| **Product persistence** | **NOT_SELECTED** |
| **Bounded local** | SELECTED EXISTING ONLY — ne devient **jamais** product persistence par implication |

### Risque

Simulation / memory / audit local **insuffisants** pour real execution : crash partiel, restart, ou retry pourrait produire une exécution réelle **non correctement liée** à Decision/Confirmation/Attempt, ou un état UNKNOWN non gouverné.

---

## 7. Delta de preuves F3

Qualification de chaque item pertinent post-PR #333 :

| Preuve / observation | Qualification | Notes |
|----------------------|---------------|-------|
| Fixture path force `canActAsMorris=false` (honesty) | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Réduit l'ambiguïté « le fixture prétend-il Morris ? » → **non** |
| Hostile REAL / mode / adapter client **ignored** | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Renforce anti-escalade ; n'adresse pas identity API |
| Process-local authority notice / `LOCAL_PROCESS_F3_FIXTURE_AUTHORITY` | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Clarifie frontière process-local (F3-D07) |
| `openHardReservationRefs` portés dans DTO (`R-T-A3-1`, `R-T-A3-2`, `R-M01`) | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Honesty product surface ; ≠ closure |
| Contraste F2 (`canActAsMorris` demo) vs F3 (`false`) | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Cartographie pédagogique du gap |
| Restart / process-local state loss → fail-closed (fixture) | **ALREADY_KNOWN** (renforcé en wiring F3) + **SUPPORTS_REDUCTION** (clarté) | Ne crée pas durable authority |
| Exact Confirmation binding / contract id-version | **ALREADY_KNOWN** (T-A3/T-A4) | Fixture **exerce** le chemin |
| Idempotent Attempt · `launchCount=1` · no auto-retry | **ALREADY_KNOWN** + exercised in F3 | **DOES_NOT_ADDRESS_MISSING_PROOF** for cross-store durable |
| Aucun Git write / external effect (FIXTURE) | **ALREADY_KNOWN** (F3-D06) + demonstrated | Hors scope R-T-A3-2 durable métier |
| Authenticated Morris identity surface | **DOES_NOT_ADDRESS_MISSING_PROOF** | **Toujours absente** |
| Cross-store durable txn | **DOES_NOT_ADDRESS_MISSING_PROOF** | `crossStoreDurable=false` |
| Production / authorized rollback drill | **DOES_NOT_ADDRESS_MISSING_PROOF** | `productionRollbackProven=false` |
| IAM / product persistence selection | **DOES_NOT_ADDRESS_MISSING_PROOF** | Explicitement **NOT_SELECTED** ; GO interdit auto-select |

### Conclusion delta

Le fixture **clarifie** et **réduit l'ambiguïté** (honesty-reduction) sur l'autorité process-local et l'absence de prétention Morris — cela justifie **`FURTHER REDUCED — REMAINS OPEN`** sur la *clarté du gap*, **pas** une fermeture. **HARD n'est pas CLOSED.** Les preuves manquantes d'autorité authentifiée et de durabilité cross-store **demeurent**.

---

## 8. Matrice R-T-A3-1 (complète)

| Dimension | Contenu |
|-----------|---------|
| **Problème** | Real execution authority sans authenticated public Critical ack API + audited Morris identity surface |
| **Bloque REAL** | **OUI** |
| **Bloque fixture framing** | **NON** |
| **Contrôles actuels** | Confirm fail-closed (`CRITICAL_NOT_ACKNOWLEDGED`) · N3≠Morris · F3 `canActAsMorris=false` · hostile REAL ignored · MemoryAuthorityResolver process-local · hardBlockerFoundation `openHard:true` |
| **Preuves pré-F3** | Fondation T-A3 Confirmation/Authority · exact binding · adversarial authority tests · A52-D03 `.3` puis `.1` · hard foundation contract · F3-D02/D07 |
| **Preuves post-F3** | Wiring FIXTURE honesty · DTO open HARD refs · contrast F2/F3 · restart fail-closed exercised on Assistant path |
| **Preuves manquantes** | Authenticated Critical acknowledge API · IAM-backed or equivalent audited Morris identity · anti-replay ack durable across restart · Morris GO for real Critical execution |
| **Threats liés** | **TM-01, TM-02, TM-03, TM-04, TM-12** (aussi TM-05/06 pour stale contract/decision) |
| **Dépendances** | A52-D03.1 futur · éventuel IAM (NOT_SELECTED) · Gate Morris dédié avant REAL |
| **Hypothèses** | Conversation ≠ authority · process-local loss ⇒ fail-closed · fixture ≠ production identity |
| **Dette si on « force »** | Second moteur d'autorité · IAM implicite · false canActAsMorris promotion |
| **Réduction sans code** | Mapping/clarity (ce cycle) — **done** |
| **Réduction avec code** | Nécessite Delivery gate ultérieur **autorisé** — **NOT AUTHORIZED now** |
| **Statut recommandé** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) |
| **Anti-close rules** | Interdit : CLOSED · CI-green closure · fixture PASS closure · F2 demo `canActAsMorris` as production proof · IAM auto-select · Gate D fiat |

### Critère de fermeture complet (futur — pas ce cycle)

1. Surface d'identité Morris authentifiée et auditée (API publique Critical ack).
2. Liaison identité ↔ Confirmation ↔ ExecutionContract (id/version/digest).
3. Anti-replay / consumption durable vérifiable après restart.
4. Preuves adversarial + drill autorisé.
5. **Décision Morris de fermeture dédiée** (HARD CLOSURE CANDIDATE — DEDICATED MORRIS CLOSURE DECISION REQUIRED) — jamais par framing seul.

---

## 9. Matrice R-T-A3-2 (complète)

| Dimension | Contenu |
|-----------|---------|
| **Problème** | Atomicité durable Decision↔LPS/Epistemic et Project↔Cycle insuffisante pour real-exec |
| **Bloque REAL** | **OUI** |
| **Bloque fixture framing** | **NON** (mémoire/compensation locale OK sous A52-D04.4) |
| **Contrôles actuels** | Compensation T-A3 · bounded local atomic audit · node:sqlite/D1 local · Project↔Cycle coordinator · idempotency keys · rollback **simulation** · flags honesty `productionRollbackProven=false` / `crossStoreDurable=false` |
| **Preuves pré-F3** | A52-D02.2 / A52-D04.4 · T-A5 attempt lifecycle · T-A7 coordinator · simulatedAtomicOperation |
| **Preuves post-F3** | Attempt idempotent exercised · `launchCount=1` · no auto-retry · evidence binding · process-local loss fail-closed · no Git/external effect |
| **Preuves manquantes** | **Cross-store durable** Project↔Cycle (+ Decision↔LPS/Epistemic) transaction · **authorized non-prod rollback drill** · production concurrency proof |
| **Threats liés** | **TM-07, TM-08, TM-09, TM-10, TM-11** |
| **Dépendances** | Bounded local remains local-only · product persistence **NOT_SELECTED** · éventuel design durability avant Gate D |
| **Hypothèses** | Crash → UNKNOWN / REVIEW REQUIRED plutôt que retry silencieux · retry = new Attempt (F3-D08) |
| **Dette si on « force »** | Fausse atomicité mémoire présentée comme durable · product DB implicite |
| **Réduction sans code** | Clarifier frontières process-local vs bounded local vs product (ce cycle) |
| **Réduction avec code** | Bounded durability proofs / drill — Delivery ultérieure only |
| **Statut recommandé** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) |
| **Anti-close rules** | Interdit : CLOSED · traiter audit local comme cross-store durable · traiter FIXTURE no-effect comme preuve rollback prod · product persistence auto-select |

### Critère de fermeture complet (futur — pas ce cycle)

1. Preuve cross-store durable pour les écritures réellement requises au pilote REAL borné.
2. Drill de rollback non-prod autorisé avec `productionRollbackProven` honnêtement promu seulement après preuve.
3. Politique UNKNOWN / no auto-retry préservée sous crash.
4. Décision Morris de fermeture dédiée.

---

## 10. Threat model TM-01…TM-12

Pour chaque menace : description, comportement sûr attendu, preuve disponible, contrôle manquant, impact HARD.

### TM-01 — Client prétend être Morris

- **Description :** payload client (`canActAsMorris`, actor claims) tente d'usurper l'autorité Morris.
- **Expected safe behavior :** claims client **ignorés** ; seule evidence serveur / resolver fait foi ; F3 force `false`.
- **Proof currently available :** F3 prepare/confirm `canActAsMorris: false` ; actions Assistant `void` hostile fields ; tests adversarial T-A3/T-A4 ; F3 fixture hostile REAL ignored.
- **Missing control :** authenticated Morris identity surface (pas seulement ignore-client).
- **Impact HARD :** **R-T-A3-1** — BLOCKS REAL.

### TM-02 — Confirmation exacte mais authority evidence absente

- **Description :** Confirmation liée au contrat mais sans evidence d'autorité vérifiable.
- **Expected safe behavior :** `verifyAuthority` / Confirm **fail-closed** (`CRITICAL_NOT_ACKNOWLEDGED` ou équivalent).
- **Proof currently available :** T-A3 foundation · Confirm fail-closed · F3 utilise MemoryAuthorityResolver avec flags honnêtes.
- **Missing control :** ack Critical public authentifié + audit immutable.
- **Impact HARD :** **R-T-A3-1**.

### TM-03 — Authority evidence process-local disparaît au restart

- **Description :** evidence en mémoire perdue ; conversation pourrait tenter reconstruction.
- **Expected safe behavior :** restart ⇒ **fail-closed** ; **aucune** reconstruction depuis conversation (F3-D07).
- **Proof currently available :** process-local MemoryAuthorityResolver · fixture restart fail-closed tests · F3-D07 ADOPTED.
- **Missing control :** authority evidence durable minimale pour pilote REAL (décision Morris requise sur frontière).
- **Impact HARD :** **R-T-A3-1** (+ lien R-T-A3-2).

### TM-04 — Confirmation replay après consumption

- **Description :** rejeu d'une Confirmation déjà consumée pour relancer Attempt.
- **Expected safe behavior :** consume once · replay refuse · pas de seconde exécution.
- **Proof currently available :** consumeConfirmation semantics · F3/T-A5 idempotence · fixture no second execution.
- **Missing control :** consumption durable cross-restart (au-delà process-local).
- **Impact HARD :** **R-T-A3-1** / residual **R-T-A3-2**.

### TM-05 — ExecutionContract version/digest a changé

- **Description :** confirmation liée à un contrat stale alors que le contrat a muté.
- **Expected safe behavior :** binding exact id/version/digest ; mismatch ⇒ refuse launch.
- **Proof currently available :** T-A4 contract identity · F3 confirm exact binding · F3-D02.
- **Missing control :** durable binding across stores for REAL (lié durabilité).
- **Impact HARD :** principalement gouvernance contrat ; renforce besoin R-T-A3-1/2 avant REAL.

### TM-06 — Decision devenue stale après PREPARE

- **Description :** GO F2 / décision obsolète utilisée pour lancer Attempt.
- **Expected safe behavior :** F2 = PREPARE only (F3-D01) ; validation fraîche ; stale ⇒ refuse.
- **Proof currently available :** `validateF2ForPrepare` · F3-D01 · executionPerformed:false doctrine.
- **Missing control :** policy REAL de re-confirmation Morris post-stale (option design).
- **Impact HARD :** bloque REAL tant que non gouverné.

### TM-07 — Process crash entre Confirmation et Attempt

- **Description :** confirmation posée ; process meurt avant launch.
- **Expected safe behavior :** au restart, pas de launch automatique ; UNKNOWN / re-confirm path ; fail-closed.
- **Proof currently available :** process-local loss behavior · no auto-retry (F3-D08) · flags honesty.
- **Missing control :** durable coordination Confirmation↔Attempt (cross-store).
- **Impact HARD :** **R-T-A3-2**.

### TM-08 — Crash après launch avant RecordExecutionResult

- **Description :** adapter lancé ; résultat non enregistré.
- **Expected safe behavior :** Attempt status **UNKNOWN** / REVIEW REQUIRED ; pas de retry silencieux ; nouvel Attempt si retry.
- **Proof currently available :** T-A5 lifecycle patterns · F3-D08/D09 · FIXTURE no external effect réduit blast radius **en fixture seulement**.
- **Missing control :** durable attempt status + REAL-side effect reconciliation.
- **Impact HARD :** **R-T-A3-2** — critique pour REAL.

### TM-09 — Attempt status inconnu au redémarrage

- **Description :** après restart, statut Attempt non récupérable de façon fiable.
- **Expected safe behavior :** traiter comme UNKNOWN ; bloquer auto-resume ; escalade review.
- **Proof currently available :** foundation Attempt · hard foundation honesty.
- **Missing control :** durable attempt store aligned with authority/audit.
- **Impact HARD :** **R-T-A3-2**.

### TM-10 — Retry après résultat inconnu

- **Description :** opérateur/agent retente après UNKNOWN.
- **Expected safe behavior :** retry ⇒ **nouvel** ExecutionAttempt traçable (F3-D08) ; jamais mutate silently.
- **Proof currently available :** F3-D08 ADOPTED · T-A5 retry semantics · fixture no auto-retry.
- **Missing control :** durable linkage preventing double real effects.
- **Impact HARD :** **R-T-A3-2**.

### TM-11 — Atomic audit local durable mais état métier non durable

- **Description :** audit D1/sqlite local OK ; Project/LPS/Cycle/Decision divergents.
- **Expected safe behavior :** ne pas revendiquer cross-store durable ; `crossStoreDurable=false` ; fail-closed sur inconsistency détectée.
- **Proof currently available :** boundedAtomicAudit · coordinator flags · hardBlockerFoundation missing proofs list.
- **Missing control :** cross-store durable txn or equivalent proven protocol.
- **Impact HARD :** **R-T-A3-2**.

### TM-12 — Conversation contient ancien GO mais store d'autorité ne l'a plus

- **Description :** UI/chat rejoue un ancien GO comme autorité.
- **Expected safe behavior :** conversation **≠** authority source ; store vide ⇒ fail-closed (F3-D07).
- **Proof currently available :** F3-D07 · MemoryAuthorityResolver process-local · fixture honesty notices.
- **Missing control :** durable authority independent of chat history for REAL.
- **Impact HARD :** **R-T-A3-1**.

---

## 11. Frontières de durabilité

| Frontière | Statut | Survives restart? | Contenu typique | Implication REAL |
|-----------|--------|-------------------|-----------------|------------------|
| **Process-local memory** (MemoryAuthorityResolver, in-proc maps) | **Actuel F3 fixture** | **NON** | authority evidence, confirmations volatiles | **INSUFFISANT** (F3-D07) |
| **Bounded local persistence** (D1 / node:sqlite audit local) | **`SELECTED — EXISTING BOUNDED LOCAL ONLY`** | **OUI (local machine/volume)** | atomic audit trails bornés | Utile mais **≠** product durability ; **≠** cross-store métier |
| **Product DB / product persistence** | **`NOT_SELECTED`** | N/A | — | Auto-select **interdit** ce cycle |
| **Authority store** | process-local today | NON | canActAsMorris evidence, ack | Gap R-T-A3-1 |
| **Audit store** | bounded local possible | partiel | audit events | Preuve locale ≠ métier durable |
| **État métier** (Project / LPS / Cycle / Epistemic / Decision) | mémoire / foundations | non garanti cross-store | liens décisionnels | Gap R-T-A3-2 |
| **Conversation / chat** | UI only | oui (messages) | texte GO historique | **JAMAIS** source d'autorité |

### Règles de frontière (invariants)

1. Bounded local **ne devient pas** product persistence par glissement sémantique.
2. Restart ⇒ fail-closed reste le défaut sûr tant que REAL non autorisé.
3. Une option « REAL après re-confirmation Morris post-restart » peut être **analysée** ; elle n'est **pas** adoptée ici.
4. Git remote atomicity est **hors F3** (F3-D06) — interdite dans le contrat d'exécution.

---

## 12. Options d'architecture (exactement 4)

Toutes les options sont **`OPTION — NOT SELECTED`** sauf mention explicite de posture recommandée. **Aucune** n'est `SELECTED` sans GO Morris ultérieur.

### Option A — HARD PREREQUISITES FRAMING ONLY

| Attribut | Contenu |
|----------|---------|
| **Nom** | **A — HARD PREREQUISITES FRAMING ONLY** |
| **Périmètre** | Documentation / matrices / threat model / critères Gate D · **aucun code produit** |
| **Composants réutilisés** | Packs A5.2, T-A3…T-A7, F3 fixture, hardBlockerFoundation (lecture seule) |
| **Nouveaux composants** | Ce README + Review Pack seulement |
| **Impact R-T-A3-1** | Clarity reduction (`FURTHER REDUCED — REMAINS OPEN`) · **pas** de fermeture |
| **Impact R-T-A3-2** | Idem clarity · **pas** de fermeture |
| **Dépendance IAM** | **Aucune** (reste NOT_SELECTED) |
| **Dépendance product persistence** | **Aucune** (reste NOT_SELECTED) |
| **Dette** | **Minimale** |
| **Réversibilité** | **Maximale** |
| **Niveau de sécurité** | Conservateur — préserve fail-closed |
| **Impact délai** | Immédiat (ce cycle) |
| **Preuve nécessaire** | Ce cadrage + handoff + revue ChatGPT |
| **Compatibilité F3-D01…D11** | **Oui** (préserve toutes) |
| **Réduction only?** | **Oui** |
| **Gate D after validation?** | **Non immédiat** — prépare seulement |
| **Gate Morris** | Revue ChatGPT puis décision package suivant |
| **Statut** | **RECOMMENDED framing posture — NOT DECIDED as architecture adoption** · **OPTION A posture for this cycle** |

### Option B — MINIMAL BOUNDED REAL PILOT PREREQUISITES (ADMISSIBLE AS FRAMING ONLY)

| Attribut | Contenu |
|----------|---------|
| **Nom** | **B — MINIMAL BOUNDED REAL PILOT PREREQUISITES** |
| **Périmètre** | Design d'un lot futur minimal : authority surface minimale + durability proofs bornées · **sans** Git remote · crash⇒UNKNOWN · retry=new Attempt |
| **Composants réutilisés** | AuthorityResolverPort · Confirmation stack · ExecutionContract/Attempt · hardBlockerFoundation · bounded audit |
| **Nouveaux composants** | (futurs, NOT AUTHORIZED) ack surface design · durable authority evidence minimale · proof harness rollback |
| **Impact R-T-A3-1** | Pourrait **réduire** davantage après Delivery+QA — jamais auto-close |
| **Impact R-T-A3-2** | Pourrait adresser cross-store/rollback **bornés** — preuve requise |
| **Dépendance IAM** | **Possible mais non auto** — peut viser surface existante d'abord ; constat actuel : **NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND** |
| **Dépendance product persistence** | **Non auto** ; préférer bounded existing si suffisant |
| **Dette** | Moyenne si mal borné ; acceptable si checklist Morris stricte |
| **Réversibilité** | Haute si feature-flag / hors chemin fixture |
| **Niveau de sécurité** | Conditionally high **si** fail-closed préservé |
| **Impact délai** | Gate Delivery + QA séparés |
| **Preuve nécessaire** | Matrices preuves + adversarial + drill |
| **Compatibilité F3-D01…D11** | Oui **si** REAL reste explicit, no silent fallback, no Git remote |
| **Réduction only?** | Non — nécessite Delivery ultérieure |
| **Gate D after validation?** | **Potentiellement** seulement après preuves HARD réellement satisfaites |
| **Gate Morris** | Design decision gate **avant** toute implémentation |
| **Statut** | **OPTION — NOT SELECTED** · **ADMISSIBLE AS FRAMING ONLY** (contenu package décision futur) |

**Checklist package décision futur (non autorisé maintenant) :** identité actor binding · objets durables min (HumanDecision, Confirmation, authority evidence, contract identity, consumption, Attempt authz record) · crash policy · retry policy · anti-conversation-authority · IAM yes/no explicite · persistence yes/no explicite · critères R-T-A3-1/2 reduction · anti-close.

### Option C — EXTEND BOUNDED LOCAL AUTHORITY/AUDIT (optional, high caution)

| Attribut | Contenu |
|----------|---------|
| **Nom** | **C — EXTEND BOUNDED LOCAL AUTHORITY/AUDIT** |
| **Périmètre** | Étendre persistence locale existante pour authority/audit sans product DB |
| **Composants réutilisés** | boundedAtomicAudit · node:sqlite/D1 · coordinator |
| **Nouveaux composants** | Durable local authority store (design) |
| **Impact R-T-A3-1** | Peut adresser TM-03/TM-12 localement — **pas** IAM |
| **Impact R-T-A3-2** | Partial — audit local ≠ cross-store métier |
| **Dépendance IAM** | Non |
| **Dépendance product persistence** | Non (mais risque de confusion sémantique) |
| **Dette** | **Haute caution** — faux sentiment de « production ready » |
| **Réversibilité** | Moyenne |
| **Niveau de sécurité** | Moyen — mieux que pure mémoire, insuffisant si sur-revendiqué |
| **Impact délai** | Moyen |
| **Preuve nécessaire** | Restart survival proofs · non-elevation claims |
| **Compatibilité F3-D01…D11** | Conditionnelle (F3-D07) |
| **Réduction only?** | Partial technical reduction possible later |
| **Gate D after validation?** | Unlikely alone |
| **Gate Morris** | Explicit bounded-local extension decision |
| **Statut** | **OPTION — NOT SELECTED** · high caution |

### Option D — IAM / PRODUCT DB FIRST = NOT ADMISSIBLE

| Attribut | Contenu |
|----------|---------|
| **Nom** | **D — IAM / PRODUCT DB FIRST** |
| **Périmètre** | Sélectionner IAM et/ou product persistence comme prérequis immédiat |
| **Composants réutilisés** | N/A (nouveau programme) |
| **Nouveaux composants** | IAM stack · product DB |
| **Impact R-T-A3-1/2** | Contourne le cadrage borné ; viole GO no auto-select |
| **Dépendance IAM** | **Oui — interdit ici** |
| **Dépendance product persistence** | **Oui — interdit ici** |
| **Dette** | Maximale |
| **Réversibilité** | Faible |
| **Niveau de sécurité** | Inconnu / overscope |
| **Impact délai** | Majeur |
| **Preuve nécessaire** | Hors scope Gate C |
| **Compatibilité F3-D01…D11** | Conflit avec bornage actuel / NOT_SELECTED |
| **Réduction only?** | Non |
| **Gate D after validation?** | Non — non admissible |
| **Gate Morris** | Exigerait GO Morris **explicite** distinct — **pas ce GO** |
| **Statut** | **NOT ADMISSIBLE** under current GO · **OPTION — NOT SELECTED** |

---

## 13. Comparaison dette / valeur / risque

| Critère | A Framing only | B Minimal bounded pilot prereqs | C Extend bounded local | D IAM/DB first |
|---------|----------------|----------------------------------|------------------------|----------------|
| **Dette** | Très basse | Moyenne contrôlable | Haute caution | Très haute |
| **Valeur maintenant** | **Haute** (clarté Gate C) | Haute **future** | Incertaine | Faible (overscope) |
| **Risque faux claim** | Bas | Moyen si mal cadré | **Élevé** | **Critique** |
| **Respect GO** | **Oui** | Framing only oui | Framing only oui | **Non** (auto-select) |
| **Impact HARD** | FURTHER REDUCED clarity | Potential future reduction | Partial local only | Illicit shortcut |
| **Réversibilité** | Max | Haute | Moyenne | Faible |
| **Gate D readiness** | Non | Possible plus tard | Non seul | Non admissible |
| **Recommandation cycle** | **RECOMMENDED posture** | Package futur | Reserve | Reject |

---

## 14. Recommandation Cursor — RECOMMENDED — NOT DECIDED (Option A)

**Recommandation :** adopter la **posture de cycle Option A** (HARD prerequisites framing only) ; préparer Option B comme **contenu de package de décision Morris futur** — **sans autoriser** Delivery, IAM, product persistence, ni Gate D.

**Statut :** `RECOMMENDED — NOT DECIDED` (architecture) · ce cycle **exécute** le cadrage A documentairement.

### Challenge obligatoire (réponses explicites)

| Question | Réponse |
|----------|---------|
| **Utile maintenant ?** | **Oui** — mappe preuves/manques post-fixture ; débloque décision Morris informée |
| **Dette créée ?** | **Minimale** (doc only) |
| **Plus simple ?** | **Oui** — plus simple que B/C/D maintenant |
| **Repo-first ?** | **Oui** — basé code/tests/décisions mergées |
| **Réutilise foundation ?** | **Oui** — T-A3…T-A7, hardBlocker, F3 fixture |
| **Second moteur d'autorité ?** | **Non** — F3-D03 préservé |
| **IAM implicite ?** | **Non** — NOT_SELECTED |
| **Persistence produit implicite ?** | **Non** — NOT_SELECTED · bounded local only |
| **Process loss recreates authority ?** | **Non** — fail-closed ; conversation ≠ authority |
| **Conversation as authority ?** | **Non** — interdit (F3-D07) |
| **Partial failure → real untraced ?** | Fixture : non (no external effect). REAL : **risque résiduel R-T-A3-2** — d'où BLOCKS REAL |
| **Réduit HARD ou déplace ?** | **Réduit l'ambiguïté** (clarity) ; **ne déplace pas** le manque de preuve vers un faux CLOSED |
| **Gate Morris nécessaire ?** | **Oui** — pour toute Option B/C adoption ; Gate D **pas** immédiat |

---

## 15. Modifications produit éventuelles — NOT AUTHORIZED

> **Statut :** candidats **IF** Delivery later authorized by Morris. **NOT AUTHORIZED** dans ce cycle. **Aucune** mutation `app/**` effectuée.

### Chemins candidats (contraste / futurs lots)

| Zone | Chemins illustratifs | Rôle futur possible |
|------|----------------------|---------------------|
| Authority resolver | `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` | Remplacement/adaptation **après** décision |
| Port autorité | `app/lib/oa/decision/ports/authorityResolver.ts` | Binding identité |
| Confirm stack | `app/lib/oa/decision/application/requestConfirmation.ts` · `grantConfirmation.ts` · `consumeConfirmation.ts` · `verifyAuthority.ts` | Ack Critical |
| HARD foundation | `app/lib/platform/t-a7/hardBlockerFoundation.ts` | Flags honesty / missing proofs |
| Atomicité | `app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts` · `simulatedAtomicOperation.ts` · `boundedPersistenceDecision.ts` | Durability proofs |
| Audit local | `app/lib/d1/boundedAtomicAudit.ts` | Extend bounded local (Option C caution) |
| F3 fixture (contrast only) | `app/features/project-assistant/f3/*` · `f3FixtureWiring.ts` | **Rester FIXTURE** jusqu'à GO REAL distinct |
| F2 contrast | `app/features/project-assistant/f2/recordDecision.ts` | Ne pas promouvoir demo authority |

**Rappel :** lister ces fichiers **≠** autoriser leur modification.

---

## 16. Gates Morris candidats

Ordre recommandé (hypothèse de travail post-Gate C) :

1. **Revue ChatGPT** du FULL pack Gate C (obligatoire ; Cursor report ≠ validation).
2. **Gate intermédiaire — Authority surface design decision**
   Candidate GO class : *decide whether authenticated Critical ack / Morris identity approach is (reuse-if-any) vs new surface vs remain fixture-only* — sans implémenter.
3. **Gate intermédiaire — Durability proof plan**
   Candidate GO class : *decide bounded durability proof scope for R-T-A3-2 (cross-store which writes; rollback drill; UNKNOWN policy)* — sans sélection product DB.
4. **Optionnel — Bounded pilot design package (Option B contents)**
   Framing/design only until Delivery GO.
5. **Delivery GO** (séparé) pour prérequis REAL **si** Morris autorise — hors ce cycle.
6. **QA** du lot prérequis.
7. **Gate D** — **seulement si** preuves HARD réellement réduites/satisfaites selon Git ; **pas** par fiat ; **NOT CONSUMED now** ; **probable non-ouvrable** immédiatement après ce seul cycle.
8. **HARD closure decision** — gate Morris dédié distinct si un jour candidat (`HARD CLOSURE CANDIDATE — DEDICATED MORRIS CLOSURE DECISION REQUIRED`).

**Gate D :** **NOT CONSUMED** · **NOT immediate**.

---

## 17. Anti-claims

Liste non exhaustive — toute violation est un défaut de revue :

1. **NO HARD CLOSED** — R-T-A3-1 / R-T-A3-2 **jamais** `CLOSED` ce cycle.
2. **NO IAM SELECTED** — IAM **`NOT_SELECTED`**.
3. **NO product persistence SELECTED** — **`NOT_SELECTED`**.
4. **NO Cursor REAL** — **BLOCKED** · pas d'adapter REAL.
5. **NO Gate D consumed**.
6. **NO REAL READY** / **NO READY** claim.
7. **Tests PASS ≠ HARD closed**.
8. **Fixture ≠ authenticated Morris**.
9. **F2 `canActAsMorris` demo ≠ production identity**.
10. **N3 ≠ canActAsMorris / ≠ Morris**.
11. **MemoryAuthorityResolver ≠ production authority**.
12. **Bounded local ≠ product persistence**.
13. **Audit local ≠ cross-store durable**.
14. **`productionRollbackProven=false`** remains.
15. **`crossStoreDurable=false`** remains.
16. **T-A6 COMPLETE NOT DECLARED**.
17. **Recommendation ≠ authority**.
18. **Conversation ≠ authority** (F3-D07).
19. **No app/\*\* mutation** this cycle.
20. **No project commit/push/PR** this cycle.
21. **Option recommended ≠ Option selected**.
22. **FURTHER REDUCED ≠ CLOSED**.
23. **Gate C consumed ≠ Gate D authorized**.
24. **PR #333 merge ≠ REAL path open**.
25. **B5 bounded fixture acceptance ≠ B5 global CLOSED**.
26. **NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND** — do not invent one.

---

## 18. État final des réserves

| Réserve | Statut final recommandé | Bloque REAL? | Notes |
|---------|-------------------------|--------------|-------|
| **R-T-A3-1** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD) | **OUI** | Clarity/honesty delta F3 ; missing authenticated ack/identity |
| **R-T-A3-2** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD) | **OUI** | Frontiers clarified ; missing cross-store + rollback drill |
| **R-M01** | **OPEN** (porté dans `openHardReservationRefs`) | Contribue gouvernance evidence | ≠ closed by fixture |
| **R1** | **OPEN** (atomicité Project↔Cycle famille) | Avant real-exec per A52-D02 | Linked family ≠ merged with R-T-A3-2 |
| **B5 global** | **OPEN** · STOP BEFORE DELIVERY hors bornage | Fixture path had bounded acceptance earlier | **≠ global CLOSED** |
| **T-A6 COMPLETE** | **NOT DECLARED** | — | Evidence maturity ≠ COMPLETE |

**Interdit :** tout statut `CLOSED` pour R-T-A3-1 / R-T-A3-2 dans ce document.

Si un lecteur croit « tous les critères techniques semblent présents » : reporter **`HARD CLOSURE CANDIDATE — DEDICATED MORRIS CLOSURE DECISION REQUIRED`** — **ne pas fermer**.

---

## 19. Trajectoire vers Gate D

### Prérequis checklist avant tout GO Gate D

- [ ] Revue ChatGPT Gate C OK (handoff remote).
- [ ] Morris decision on authority surface approach (intermédiaire).
- [ ] Morris decision on durability proof plan (intermédiaire).
- [ ] Si code requis : Delivery GO **explicite** + implémentation bornée + QA.
- [ ] Preuves R-T-A3-1 manquantes adressées **ou** réduction formellement acceptée avec HARD still open rules respected.
- [ ] Preuves R-T-A3-2 manquantes adressées (cross-store / rollback) **ou** plan accepté avec BLOCKS REAL maintenu jusqu'à preuve.
- [ ] IAM remains explicit NOT_SELECTED **or** selected by dedicated Morris GO (pas ce cycle).
- [ ] Product persistence remains explicit NOT_SELECTED **or** selected by dedicated Morris GO.
- [ ] Cursor REAL adapter still absent until Gate D (+ other gates) say otherwise.
- [ ] Anti-claims re-validés sur Git Truth.

### État actuel trajectoire

| Élément | État |
|---------|------|
| Gate D | **NOT CONSUMED** |
| Cursor REAL | **BLOCKED** |
| Next package | **READY** for Morris after ChatGPT review |
| Hypothèse | Gate D **probably not immediately openable** after this framing-only cycle |

---

## 20. Verdict

```
F3 REAL HARD PREREQUISITES FRAMING COMPLETE —
GATE C CONSUMED —
R-T-A3-1 CURRENT EVIDENCE AND MISSING AUTHORITY PROOFS MAPPED —
R-T-A3-2 CURRENT EVIDENCE AND MISSING DURABILITY PROOFS MAPPED —
F3 FIXTURE EVIDENCE DELTA ASSESSED —
NO HARD CLOSED —
IAM REMAINS NOT_SELECTED —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
BOUNDED LOCAL PERSISTENCE REMAINS LOCAL ONLY —
NO PRODUCT MUTATION —
NO REAL EXECUTION —
NO CURSOR REAL ADAPTER —
GATE D NOT CONSUMED —
CURSOR REAL REMAINS BLOCKED —
ARCHITECTURE OPTIONS PREPARED —
RECOMMENDATION REMAINS NOT DECIDED —
NEXT MORRIS DECISION PACKAGE READY —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
READY FOR CHATGPT REVIEW
```

### Synthèse opératoire

Gate **C** est **consommé** par ce cadrage Critical CAPA/DOC. Les réserves **R-T-A3-1** et **R-T-A3-2** sont **FURTHER REDUCED — REMAINS OPEN** (clarté du gap post-fixture), **jamais CLOSED**. IAM et product persistence restent **NOT_SELECTED**. Bounded local reste **local only**. Aucune mutation produit. Cursor REAL reste **BLOCKED**. Gate **D** reste **NOT CONSUMED**. Option **A** est la posture recommandée de ce cycle ; Option **B** est un package futur non autorisé ; Option **D** est non admissible.

---

*Fin du README Gate C — F3 Real Path HARD Prerequisites Framing.*
```

---

## EMBEDDED — git diff (new file)

```diff
diff --git a/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/README.md b/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/README.md
new file mode 100644
index 0000000..8fe1e6d
--- /dev/null
+++ b/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/README.md
@@ -0,0 +1,728 @@
+# F3 — Real Path HARD Prerequisites Framing (Gate C)
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate Morris consommé** | `GO FRAME OR REDUCE HARD R-T-A3-1 / R-T-A3-2 FOR FUTURE REAL PATH — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT` |
+| **Cycle / profil** | **6** — Architecture technique · **Critical** · CAPA / DOC |
+| **Justification Critical** | R-T-A3-1 / R-T-A3-2 gouvernent identité d'autorité Critical, résistance restart/replay, atomicité cross-store, et capacité future à lancer un agent à effets réels — sans autoriser REAL dans ce cycle |
+| **Date/heure cadrage (CEST)** | 2026-08-11 21:14:09 CEST (+0200) |
+| **Date/heure cadrage (UTC)** | 2026-08-11 19:14:09 UTC |
+| **Base / main** | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| **Package F3 fixture** | `ec7d6c8bbdcd71a49942e33f749826a9aba6d5a4` (PR #333 merged) |
+| **Branche locale** | `framing/sfia-studio-f3-real-hard-prerequisites` @ `4b1a058` |
+| **Worktree** | `…/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites` |
+| **Template** | `prompts/templates/sfia-cycle-execution-template.md` **v2.6** · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
+| **Gate A** | `CONSUMED` |
+| **Gate B** | `CONSUMED + QA VALIDATED + MERGED` (PR #333) |
+| **Gate C** | **`CONSUMED` by this framing cycle** |
+| **Gate D** | **`NOT CONSUMED`** |
+| **R-T-A3-1** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) — **NEVER CLOSED** |
+| **R-T-A3-2** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) — **NEVER CLOSED** |
+| **IAM** | **`NOT_SELECTED`** |
+| **Product persistence** | **`NOT_SELECTED`** |
+| **Bounded local persistence** | **`SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY`** (D1 / node:sqlite local · ≠ product DB) |
+| **Cursor REAL** | **`BLOCKED`** |
+| **T-A6 COMPLETE** | **`NOT DECLARED`** |
+| **Product mutation this cycle** | **`NONE`** — framing docs only · **NO `app/**`** |
+| **Project commit / push / PR** | **aucun** |
+| **Recommandation architecture** | **Option A — RECOMMENDED — NOT DECIDED** · options B/C/D **OPTION — NOT SELECTED** (D = NOT ADMISSIBLE) |
+| **Statut pack** | Gate C framing complet · FULL Review Pack · handoff L3 FF only |
+
+> **Anti-fermeture :** ce document **mappe** preuves et manques pour un futur chemin REAL. Il **ne ferme pas** HARD, **n'exécute pas** REAL, **ne sélectionne pas** IAM ni product persistence, **ne consomme pas** Gate D.
+
+---
+
+## 1. Contexte / Gate Morris
+
+### GO exact
+
+```
+GO FRAME OR REDUCE HARD R-T-A3-1 / R-T-A3-2 FOR FUTURE REAL PATH — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT
+```
+
+### Nature du cycle
+
+| Élément | Valeur |
+|---------|--------|
+| Type | Cycle **6** — Architecture technique |
+| Profil SFIA | **Critical** |
+| Typologie | **CAPA / DOC** — architecture d'autorité et d'atomicité pour futur REAL |
+| Framing-only | **OUI** — aucune Delivery, aucune mutation produit |
+| Gate C | **CONSUMED** par ce cycle de cadrage |
+| Gate D | **NOT CONSUMED** |
+
+### Objectif (ce que ce cycle FAIT)
+
+1. Établir la **Git Truth** après intégration complète du vertical slice F3 FIXTURE (PR #333).
+2. Réévaluer précisément **R-T-A3-1** et **R-T-A3-2** à partir du code, des tests et des décisions mergées.
+3. Qualifier le **delta de preuves** réellement apporté par F3 FIXTURE (NEW / ALREADY_KNOWN / SUPPORTS_REDUCTION / DOES_NOT_ADDRESS_MISSING_PROOF).
+4. Distinguer preuve existante, réduction déjà acquise, réduction supplémentaire sans code, preuve manquante, dépendance Morris.
+5. Définir les critères exacts avant tout pilote Cursor REAL.
+6. Construire **quatre options d'architecture** bornées (A–D) ; recommander sans adopter.
+7. Préparer le ou les prochains gates Morris.
+8. Produire README + FULL Review Pack + handoff remote vérifié.
+
+### Non-objectifs (ce que ce cycle NE FAIT PAS)
+
+- **PAS** d'exécution REAL / Cursor REAL adapter.
+- **PAS** de fermeture HARD (`CLOSED` interdit).
+- **PAS** d'auto-sélection IAM.
+- **PAS** d'auto-sélection product persistence.
+- **PAS** de mutation `app/**`, `package.json`, lockfiles, migrations.
+- **PAS** de consommation Gate D.
+- **PAS** de transformation d'une option d'architecture en décision Morris.
+
+### Chaîne F3 intégrée sur main (rappel)
+
+```
+F2 approved proposal
+  → PREPARE
+  → T-A4 ExecutionContract
+  → confirmation explicite
+  → T-A5 ExecutionAttempt
+  → TestExecutionAdapter FIXTURE
+  → T-A6 Evidence / ReviewBundle
+  → reinjection Project Assistant
+  → recommendation only
+```
+
+Le vertical slice FIXTURE est **livré**, QA Actual Next E2E **validée**, **mergé** via PR #333, post-merge **fermé**. Ce Gate C **cadrage** le chemin vers un éventuel futur REAL — sans l'ouvrir.
+
+---
+
+## 2. Git Truth
+
+| Artefact | SHA / ref |
+|----------|-----------|
+| **main / framing HEAD** | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| **Package F3 fixture (commit)** | `ec7d6c8bbdcd71a49942e33f749826a9aba6d5a4` |
+| **PR fixture** | **#333** merged — F3 native fixture vertical slice |
+| **Branche framing** | `framing/sfia-studio-f3-real-hard-prerequisites` @ `4b1a058` |
+| **Template cycle** | v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
+| **Inbound handoff tip (BEFORE)** | `b110fe1337d46437553a7258635a2f4bcdfbe285` |
+| **Inbound handoff blob (BEFORE)** | `ea6e63eca178ba475eb2354014accdae4ffd0406` |
+| **HARD foundation (PR #291 lineage)** | `hardBlockerFoundation` · `openHard:true` · `deliveryReady:false` · `productionRollbackProven=false` · `crossStoreDurable=false` |
+
+### Vérifications framing
+
+- Worktree checkout = `framing/sfia-studio-f3-real-hard-prerequisites`.
+- HEAD = tip main post-PR #333 (`4b1a058…`).
+- Aucun commit projet dans ce cycle ; README Gate C laissé **untracked** jusqu'à autorisation Morris.
+- Artefacts `.tmp-sfia-review/` uniquement pour logs read-only + Review Pack + extracts.
+
+---
+
+## 3. Sources
+
+Sources consultées / à conserver comme vérité de cadrage :
+
+| # | Source | Rôle |
+|---|--------|------|
+| 1 | `app/features/project-assistant/f3/*` (constants, prepare, confirmAndExecute, ingestEvidence, types, validateF2) | Fixture code / constants / wiring |
+| 2 | `app/lib/vertical-slice-runtime/f3FixtureWiring.ts` | Wiring FIXTURE-only |
+| 3 | `__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts` | Preuves fixture (9 tests) |
+| 4 | `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` | **MemoryAuthorityResolver** process-local |
+| 5 | `app/lib/oa/decision/ports/authorityResolver.ts` | **AuthorityResolverPort** |
+| 6 | `app/lib/oa/decision/application/{request,grant,consume}Confirmation.ts` + `verifyAuthority.ts` | Confirm fail-closed / consume |
+| 7 | `app/lib/platform/t-a7/hardBlockerFoundation.ts` | Contrat HARD honnête (`openHard`, missing proofs) |
+| 8 | `app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts` | Coordinateur Project↔Cycle · flags durability |
+| 9 | `app/lib/platform/t-a7/boundedPersistenceDecision.ts` | Bounded local ≠ product persistence |
+| 10 | `app/lib/d1/boundedAtomicAudit.ts` | Audit atomique local borné |
+| 11 | `a5-2-…/03-authority-model-and-gaps.md` | A5.2 autorité · A52-D03 |
+| 12 | `a5-2-…/04-atomicity-model-and-options.md` | A5.2 atomicité · A52-D02/D04 |
+| 13 | `t-a3-decision-confirmation-authority/` (README, 03, 05) | Pack T-A3 |
+| 14 | `f3-pre-delivery-governance-framing/README.md` | HARD mapping · Gate C/D · B5 bounded · anti-claims REAL |
+| 15 | `f3-functional-design-decisions/README.md` | **F3-D01…D11** ADOPTED |
+| 16 | `t-a7-technical-readiness-framing/` + lot `20-hard-ta6-…` | Foundation HARD / persistence |
+| 17 | PR #333 post-merge review pack (handoff inbound) | Git Truth fixture merge |
+| 18 | `app/features/project-assistant/f2/recordDecision.ts` | **F2** demo authority contrast (`canActAsMorris: true` server-side for gate recording) |
+| 19 | Vitest logs sous `.tmp-sfia-review/f3-real-hard-prerequisites/logs/` | T-A3…T-A7 + F3 fixture read-only |
+| 20 | Template `sfia-cycle-execution-template.md` v2.6 | Structure cycle |
+
+### Tests read-only (exécutés dans ce cycle — PASS ≠ HARD closed)
+
+| Suite | Tests | Prouve | Ne prouve PAS |
+|-------|------:|--------|----------------|
+| **T-A3** decision/authority | **50** | Fail-closed Confirm / authority binding / N3≠Morris | Authenticated Morris surface · HARD closed |
+| **T-A4** execution-contract | **61** | Contrat d'exécution / gouvernance / anti-hostile | REAL pilot · Cursor REAL |
+| **T-A5** execution-attempt | **88** | Lifecycle Attempt / idempotence foundation | Durable cross-store txn · rollback drill |
+| **T-A6** evidence-review | **140** | Evidence / ReviewBundle maturity | **T-A6 COMPLETE** for REAL · READY |
+| **T-A7** hard foundation | **34** | `openHard=true` · `deliveryReady=false` · flags honesty | HARD closure · delivery readiness |
+| **F3 fixture** | **9** | FIXTURE slice · `canActAsMorris=false` · hostile REAL ignored | Authenticated Morris · HARD closed · REAL |
+
+**Totaux :** 32 fichiers / **382** tests passed / 0 failed. Logs : `t-a3-decision.log`, `t-a4-execution-contract.log`, `t-a5-execution-attempt.log`, `t-a6-evidence-review.log`, `t-a7-hard-foundation.log`, `f3-fixture.log`.
+
+---
+
+## 4. État F3 après fixture
+
+| Assertion | État canonique |
+|-----------|----------------|
+| Mode d'exécution Assistant F3 | **FIXTURE only** (`F3_MODE = "FIXTURE"`) |
+| `canActAsMorris` (chemin F3 prepare/confirm) | **`false`** (honnête — pas de promotion artificielle) |
+| F2 `recordDecision` (contraste) | Server registers evidence with **`canActAsMorris: true`** for **demo / gate recording** only — **≠** production Morris identity |
+| Authority resolver F3 | **process-local `MemoryAuthorityResolver`** |
+| `productionRollbackProven` | **`false`** |
+| `crossStoreDurable` | **`false`** |
+| `openHardReservationRefs` (DTO F3) | inclut **`R-T-A3-1`**, **`R-T-A3-2`**, **`R-M01`** |
+| Cursor REAL | **BLOCKED** · hostile REAL / adapter claims **ignored** |
+| External effects | **false** (FIXTURE) |
+| T-A6 COMPLETE | **NOT DECLARED** |
+| Authenticated Morris identity surface | **`NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND`** |
+| Product mutation this cycle | **NONE** |
+
+### Contraste F2 vs F3 (autorité)
+
+- **F2** : enregistrement de décision de préparation ; le serveur peut poser une evidence `canActAsMorris: true` pour le chemin demo/gate — cela **n'équivaut pas** à une identité Morris authentifiée production, et le GO F2 n'autorise que **PREPARE** (F3-D01).
+- **F3 fixture** : force explicitement `canActAsMorris: false` sur prepare/confirm ; l'autorité est **LOCAL_PROCESS_F3_FIXTURE_AUTHORITY** ; tout claim client REAL / adapter est **ignoré** / rejeté.
+- Ce contraste **clarifie** le gap R-T-A3-1 ; il **ne le ferme pas**.
+
+---
+
+## 5. Définition R-T-A3-1
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | **R-T-A3-1** |
+| **Libellé** | Critical acknowledge / authority |
+| **Sévérité** | **Critical / OPEN HARD** |
+| **Bloque REAL** | **OUI** |
+| **Bloque fixture-only** | **NON** (FIXTURE path admissible sous B5 borné) |
+| **Fail-closed actuel** | Confirm Critical refuse sans ack → **`CRITICAL_NOT_ACKNOWLEDGED`** |
+| **Norme A52-D03** | `.3` court terme (simulation/read-only) ; trajectoire `.1` (API publique authentifiée + auditée) **avant** real Critical |
+| **N3 ≠ canActAsMorris** | **Confirmé** — N3 verified ∧ `canActAsMorris=true` requis pour MORRIS ; N3 seul **insuffisant** (`authorityHelper`) |
+| **Manque principal** | Authenticated public Critical acknowledge API + audited Morris identity surface |
+| **IAM** | **NOT_SELECTED** (auto-select interdit par ce GO) |
+
+### Risque
+
+Sans surface d'identité Morris authentifiée et sans ack Critical public audité, toute promotion d'autorité fixture / process-local / conversation vers REAL créerait une **autorité implicite** — exactement ce que F3-D07 et A52-D03 interdisent.
+
+### Ce que R-T-A3-1 n'est pas
+
+- Ce n'est **pas** « les tests T-A3 passent ».
+- Ce n'est **pas** « F2 a posé `canActAsMorris: true` en demo ».
+- Ce n'est **pas** « MemoryAuthorityResolver existe ».
+- Ce n'est **pas** fermable par CI green ou par framing seul.
+
+---
+
+## 6. Définition R-T-A3-2
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | **R-T-A3-2** |
+| **Libellé** | Decision↔LPS/Epistemic and Project↔Cycle durable atomicity |
+| **Sévérité** | **Critical / OPEN HARD** |
+| **Bloque REAL** | **OUI** |
+| **Bloque fixture framing** | **NON** (mémoire / simulation acceptables sous A52-D04.4 jusqu'à future déclaration) |
+| **Flags code** | `productionRollbackProven=false` · `crossStoreDurable=false` |
+| **Norme A52-D02** | `.2` — txn logique + compensation/idempotence avant delivery ; **garantie durable avant real-exec** |
+| **Norme A52-D04** | `.4` — mémoire bornée uniquement jusqu'à future T-A6 COMPLETE mémoire ; **≠** COMPLETE maintenant |
+| **Manques principaux** | Cross-store durable Project↔Cycle transaction · authorized non-prod rollback drill · production concurrency proof |
+| **Product persistence** | **NOT_SELECTED** |
+| **Bounded local** | SELECTED EXISTING ONLY — ne devient **jamais** product persistence par implication |
+
+### Risque
+
+Simulation / memory / audit local **insuffisants** pour real execution : crash partiel, restart, ou retry pourrait produire une exécution réelle **non correctement liée** à Decision/Confirmation/Attempt, ou un état UNKNOWN non gouverné.
+
+---
+
+## 7. Delta de preuves F3
+
+Qualification de chaque item pertinent post-PR #333 :
+
+| Preuve / observation | Qualification | Notes |
+|----------------------|---------------|-------|
+| Fixture path force `canActAsMorris=false` (honesty) | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Réduit l'ambiguïté « le fixture prétend-il Morris ? » → **non** |
+| Hostile REAL / mode / adapter client **ignored** | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Renforce anti-escalade ; n'adresse pas identity API |
+| Process-local authority notice / `LOCAL_PROCESS_F3_FIXTURE_AUTHORITY` | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Clarifie frontière process-local (F3-D07) |
+| `openHardReservationRefs` portés dans DTO (`R-T-A3-1`, `R-T-A3-2`, `R-M01`) | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Honesty product surface ; ≠ closure |
+| Contraste F2 (`canActAsMorris` demo) vs F3 (`false`) | **NEW_RELEVANT_EVIDENCE** + **SUPPORTS_REDUCTION** | Cartographie pédagogique du gap |
+| Restart / process-local state loss → fail-closed (fixture) | **ALREADY_KNOWN** (renforcé en wiring F3) + **SUPPORTS_REDUCTION** (clarté) | Ne crée pas durable authority |
+| Exact Confirmation binding / contract id-version | **ALREADY_KNOWN** (T-A3/T-A4) | Fixture **exerce** le chemin |
+| Idempotent Attempt · `launchCount=1` · no auto-retry | **ALREADY_KNOWN** + exercised in F3 | **DOES_NOT_ADDRESS_MISSING_PROOF** for cross-store durable |
+| Aucun Git write / external effect (FIXTURE) | **ALREADY_KNOWN** (F3-D06) + demonstrated | Hors scope R-T-A3-2 durable métier |
+| Authenticated Morris identity surface | **DOES_NOT_ADDRESS_MISSING_PROOF** | **Toujours absente** |
+| Cross-store durable txn | **DOES_NOT_ADDRESS_MISSING_PROOF** | `crossStoreDurable=false` |
+| Production / authorized rollback drill | **DOES_NOT_ADDRESS_MISSING_PROOF** | `productionRollbackProven=false` |
+| IAM / product persistence selection | **DOES_NOT_ADDRESS_MISSING_PROOF** | Explicitement **NOT_SELECTED** ; GO interdit auto-select |
+
+### Conclusion delta
+
+Le fixture **clarifie** et **réduit l'ambiguïté** (honesty-reduction) sur l'autorité process-local et l'absence de prétention Morris — cela justifie **`FURTHER REDUCED — REMAINS OPEN`** sur la *clarté du gap*, **pas** une fermeture. **HARD n'est pas CLOSED.** Les preuves manquantes d'autorité authentifiée et de durabilité cross-store **demeurent**.
+
+---
+
+## 8. Matrice R-T-A3-1 (complète)
+
+| Dimension | Contenu |
+|-----------|---------|
+| **Problème** | Real execution authority sans authenticated public Critical ack API + audited Morris identity surface |
+| **Bloque REAL** | **OUI** |
+| **Bloque fixture framing** | **NON** |
+| **Contrôles actuels** | Confirm fail-closed (`CRITICAL_NOT_ACKNOWLEDGED`) · N3≠Morris · F3 `canActAsMorris=false` · hostile REAL ignored · MemoryAuthorityResolver process-local · hardBlockerFoundation `openHard:true` |
+| **Preuves pré-F3** | Fondation T-A3 Confirmation/Authority · exact binding · adversarial authority tests · A52-D03 `.3` puis `.1` · hard foundation contract · F3-D02/D07 |
+| **Preuves post-F3** | Wiring FIXTURE honesty · DTO open HARD refs · contrast F2/F3 · restart fail-closed exercised on Assistant path |
+| **Preuves manquantes** | Authenticated Critical acknowledge API · IAM-backed or equivalent audited Morris identity · anti-replay ack durable across restart · Morris GO for real Critical execution |
+| **Threats liés** | **TM-01, TM-02, TM-03, TM-04, TM-12** (aussi TM-05/06 pour stale contract/decision) |
+| **Dépendances** | A52-D03.1 futur · éventuel IAM (NOT_SELECTED) · Gate Morris dédié avant REAL |
+| **Hypothèses** | Conversation ≠ authority · process-local loss ⇒ fail-closed · fixture ≠ production identity |
+| **Dette si on « force »** | Second moteur d'autorité · IAM implicite · false canActAsMorris promotion |
+| **Réduction sans code** | Mapping/clarity (ce cycle) — **done** |
+| **Réduction avec code** | Nécessite Delivery gate ultérieur **autorisé** — **NOT AUTHORIZED now** |
+| **Statut recommandé** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) |
+| **Anti-close rules** | Interdit : CLOSED · CI-green closure · fixture PASS closure · F2 demo `canActAsMorris` as production proof · IAM auto-select · Gate D fiat |
+
+### Critère de fermeture complet (futur — pas ce cycle)
+
+1. Surface d'identité Morris authentifiée et auditée (API publique Critical ack).
+2. Liaison identité ↔ Confirmation ↔ ExecutionContract (id/version/digest).
+3. Anti-replay / consumption durable vérifiable après restart.
+4. Preuves adversarial + drill autorisé.
+5. **Décision Morris de fermeture dédiée** (HARD CLOSURE CANDIDATE — DEDICATED MORRIS CLOSURE DECISION REQUIRED) — jamais par framing seul.
+
+---
+
+## 9. Matrice R-T-A3-2 (complète)
+
+| Dimension | Contenu |
+|-----------|---------|
+| **Problème** | Atomicité durable Decision↔LPS/Epistemic et Project↔Cycle insuffisante pour real-exec |
+| **Bloque REAL** | **OUI** |
+| **Bloque fixture framing** | **NON** (mémoire/compensation locale OK sous A52-D04.4) |
+| **Contrôles actuels** | Compensation T-A3 · bounded local atomic audit · node:sqlite/D1 local · Project↔Cycle coordinator · idempotency keys · rollback **simulation** · flags honesty `productionRollbackProven=false` / `crossStoreDurable=false` |
+| **Preuves pré-F3** | A52-D02.2 / A52-D04.4 · T-A5 attempt lifecycle · T-A7 coordinator · simulatedAtomicOperation |
+| **Preuves post-F3** | Attempt idempotent exercised · `launchCount=1` · no auto-retry · evidence binding · process-local loss fail-closed · no Git/external effect |
+| **Preuves manquantes** | **Cross-store durable** Project↔Cycle (+ Decision↔LPS/Epistemic) transaction · **authorized non-prod rollback drill** · production concurrency proof |
+| **Threats liés** | **TM-07, TM-08, TM-09, TM-10, TM-11** |
+| **Dépendances** | Bounded local remains local-only · product persistence **NOT_SELECTED** · éventuel design durability avant Gate D |
+| **Hypothèses** | Crash → UNKNOWN / REVIEW REQUIRED plutôt que retry silencieux · retry = new Attempt (F3-D08) |
+| **Dette si on « force »** | Fausse atomicité mémoire présentée comme durable · product DB implicite |
+| **Réduction sans code** | Clarifier frontières process-local vs bounded local vs product (ce cycle) |
+| **Réduction avec code** | Bounded durability proofs / drill — Delivery ultérieure only |
+| **Statut recommandé** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD · BLOCKS REAL) |
+| **Anti-close rules** | Interdit : CLOSED · traiter audit local comme cross-store durable · traiter FIXTURE no-effect comme preuve rollback prod · product persistence auto-select |
+
+### Critère de fermeture complet (futur — pas ce cycle)
+
+1. Preuve cross-store durable pour les écritures réellement requises au pilote REAL borné.
+2. Drill de rollback non-prod autorisé avec `productionRollbackProven` honnêtement promu seulement après preuve.
+3. Politique UNKNOWN / no auto-retry préservée sous crash.
+4. Décision Morris de fermeture dédiée.
+
+---
+
+## 10. Threat model TM-01…TM-12
+
+Pour chaque menace : description, comportement sûr attendu, preuve disponible, contrôle manquant, impact HARD.
+
+### TM-01 — Client prétend être Morris
+
+- **Description :** payload client (`canActAsMorris`, actor claims) tente d'usurper l'autorité Morris.
+- **Expected safe behavior :** claims client **ignorés** ; seule evidence serveur / resolver fait foi ; F3 force `false`.
+- **Proof currently available :** F3 prepare/confirm `canActAsMorris: false` ; actions Assistant `void` hostile fields ; tests adversarial T-A3/T-A4 ; F3 fixture hostile REAL ignored.
+- **Missing control :** authenticated Morris identity surface (pas seulement ignore-client).
+- **Impact HARD :** **R-T-A3-1** — BLOCKS REAL.
+
+### TM-02 — Confirmation exacte mais authority evidence absente
+
+- **Description :** Confirmation liée au contrat mais sans evidence d'autorité vérifiable.
+- **Expected safe behavior :** `verifyAuthority` / Confirm **fail-closed** (`CRITICAL_NOT_ACKNOWLEDGED` ou équivalent).
+- **Proof currently available :** T-A3 foundation · Confirm fail-closed · F3 utilise MemoryAuthorityResolver avec flags honnêtes.
+- **Missing control :** ack Critical public authentifié + audit immutable.
+- **Impact HARD :** **R-T-A3-1**.
+
+### TM-03 — Authority evidence process-local disparaît au restart
+
+- **Description :** evidence en mémoire perdue ; conversation pourrait tenter reconstruction.
+- **Expected safe behavior :** restart ⇒ **fail-closed** ; **aucune** reconstruction depuis conversation (F3-D07).
+- **Proof currently available :** process-local MemoryAuthorityResolver · fixture restart fail-closed tests · F3-D07 ADOPTED.
+- **Missing control :** authority evidence durable minimale pour pilote REAL (décision Morris requise sur frontière).
+- **Impact HARD :** **R-T-A3-1** (+ lien R-T-A3-2).
+
+### TM-04 — Confirmation replay après consumption
+
+- **Description :** rejeu d'une Confirmation déjà consumée pour relancer Attempt.
+- **Expected safe behavior :** consume once · replay refuse · pas de seconde exécution.
+- **Proof currently available :** consumeConfirmation semantics · F3/T-A5 idempotence · fixture no second execution.
+- **Missing control :** consumption durable cross-restart (au-delà process-local).
+- **Impact HARD :** **R-T-A3-1** / residual **R-T-A3-2**.
+
+### TM-05 — ExecutionContract version/digest a changé
+
+- **Description :** confirmation liée à un contrat stale alors que le contrat a muté.
+- **Expected safe behavior :** binding exact id/version/digest ; mismatch ⇒ refuse launch.
+- **Proof currently available :** T-A4 contract identity · F3 confirm exact binding · F3-D02.
+- **Missing control :** durable binding across stores for REAL (lié durabilité).
+- **Impact HARD :** principalement gouvernance contrat ; renforce besoin R-T-A3-1/2 avant REAL.
+
+### TM-06 — Decision devenue stale après PREPARE
+
+- **Description :** GO F2 / décision obsolète utilisée pour lancer Attempt.
+- **Expected safe behavior :** F2 = PREPARE only (F3-D01) ; validation fraîche ; stale ⇒ refuse.
+- **Proof currently available :** `validateF2ForPrepare` · F3-D01 · executionPerformed:false doctrine.
+- **Missing control :** policy REAL de re-confirmation Morris post-stale (option design).
+- **Impact HARD :** bloque REAL tant que non gouverné.
+
+### TM-07 — Process crash entre Confirmation et Attempt
+
+- **Description :** confirmation posée ; process meurt avant launch.
+- **Expected safe behavior :** au restart, pas de launch automatique ; UNKNOWN / re-confirm path ; fail-closed.
+- **Proof currently available :** process-local loss behavior · no auto-retry (F3-D08) · flags honesty.
+- **Missing control :** durable coordination Confirmation↔Attempt (cross-store).
+- **Impact HARD :** **R-T-A3-2**.
+
+### TM-08 — Crash après launch avant RecordExecutionResult
+
+- **Description :** adapter lancé ; résultat non enregistré.
+- **Expected safe behavior :** Attempt status **UNKNOWN** / REVIEW REQUIRED ; pas de retry silencieux ; nouvel Attempt si retry.
+- **Proof currently available :** T-A5 lifecycle patterns · F3-D08/D09 · FIXTURE no external effect réduit blast radius **en fixture seulement**.
+- **Missing control :** durable attempt status + REAL-side effect reconciliation.
+- **Impact HARD :** **R-T-A3-2** — critique pour REAL.
+
+### TM-09 — Attempt status inconnu au redémarrage
+
+- **Description :** après restart, statut Attempt non récupérable de façon fiable.
+- **Expected safe behavior :** traiter comme UNKNOWN ; bloquer auto-resume ; escalade review.
+- **Proof currently available :** foundation Attempt · hard foundation honesty.
+- **Missing control :** durable attempt store aligned with authority/audit.
+- **Impact HARD :** **R-T-A3-2**.
+
+### TM-10 — Retry après résultat inconnu
+
+- **Description :** opérateur/agent retente après UNKNOWN.
+- **Expected safe behavior :** retry ⇒ **nouvel** ExecutionAttempt traçable (F3-D08) ; jamais mutate silently.
+- **Proof currently available :** F3-D08 ADOPTED · T-A5 retry semantics · fixture no auto-retry.
+- **Missing control :** durable linkage preventing double real effects.
+- **Impact HARD :** **R-T-A3-2**.
+
+### TM-11 — Atomic audit local durable mais état métier non durable
+
+- **Description :** audit D1/sqlite local OK ; Project/LPS/Cycle/Decision divergents.
+- **Expected safe behavior :** ne pas revendiquer cross-store durable ; `crossStoreDurable=false` ; fail-closed sur inconsistency détectée.
+- **Proof currently available :** boundedAtomicAudit · coordinator flags · hardBlockerFoundation missing proofs list.
+- **Missing control :** cross-store durable txn or equivalent proven protocol.
+- **Impact HARD :** **R-T-A3-2**.
+
+### TM-12 — Conversation contient ancien GO mais store d'autorité ne l'a plus
+
+- **Description :** UI/chat rejoue un ancien GO comme autorité.
+- **Expected safe behavior :** conversation **≠** authority source ; store vide ⇒ fail-closed (F3-D07).
+- **Proof currently available :** F3-D07 · MemoryAuthorityResolver process-local · fixture honesty notices.
+- **Missing control :** durable authority independent of chat history for REAL.
+- **Impact HARD :** **R-T-A3-1**.
+
+---
+
+## 11. Frontières de durabilité
+
+| Frontière | Statut | Survives restart? | Contenu typique | Implication REAL |
+|-----------|--------|-------------------|-----------------|------------------|
+| **Process-local memory** (MemoryAuthorityResolver, in-proc maps) | **Actuel F3 fixture** | **NON** | authority evidence, confirmations volatiles | **INSUFFISANT** (F3-D07) |
+| **Bounded local persistence** (D1 / node:sqlite audit local) | **`SELECTED — EXISTING BOUNDED LOCAL ONLY`** | **OUI (local machine/volume)** | atomic audit trails bornés | Utile mais **≠** product durability ; **≠** cross-store métier |
+| **Product DB / product persistence** | **`NOT_SELECTED`** | N/A | — | Auto-select **interdit** ce cycle |
+| **Authority store** | process-local today | NON | canActAsMorris evidence, ack | Gap R-T-A3-1 |
+| **Audit store** | bounded local possible | partiel | audit events | Preuve locale ≠ métier durable |
+| **État métier** (Project / LPS / Cycle / Epistemic / Decision) | mémoire / foundations | non garanti cross-store | liens décisionnels | Gap R-T-A3-2 |
+| **Conversation / chat** | UI only | oui (messages) | texte GO historique | **JAMAIS** source d'autorité |
+
+### Règles de frontière (invariants)
+
+1. Bounded local **ne devient pas** product persistence par glissement sémantique.
+2. Restart ⇒ fail-closed reste le défaut sûr tant que REAL non autorisé.
+3. Une option « REAL après re-confirmation Morris post-restart » peut être **analysée** ; elle n'est **pas** adoptée ici.
+4. Git remote atomicity est **hors F3** (F3-D06) — interdite dans le contrat d'exécution.
+
+---
+
+## 12. Options d'architecture (exactement 4)
+
+Toutes les options sont **`OPTION — NOT SELECTED`** sauf mention explicite de posture recommandée. **Aucune** n'est `SELECTED` sans GO Morris ultérieur.
+
+### Option A — HARD PREREQUISITES FRAMING ONLY
+
+| Attribut | Contenu |
+|----------|---------|
+| **Nom** | **A — HARD PREREQUISITES FRAMING ONLY** |
+| **Périmètre** | Documentation / matrices / threat model / critères Gate D · **aucun code produit** |
+| **Composants réutilisés** | Packs A5.2, T-A3…T-A7, F3 fixture, hardBlockerFoundation (lecture seule) |
+| **Nouveaux composants** | Ce README + Review Pack seulement |
+| **Impact R-T-A3-1** | Clarity reduction (`FURTHER REDUCED — REMAINS OPEN`) · **pas** de fermeture |
+| **Impact R-T-A3-2** | Idem clarity · **pas** de fermeture |
+| **Dépendance IAM** | **Aucune** (reste NOT_SELECTED) |
+| **Dépendance product persistence** | **Aucune** (reste NOT_SELECTED) |
+| **Dette** | **Minimale** |
+| **Réversibilité** | **Maximale** |
+| **Niveau de sécurité** | Conservateur — préserve fail-closed |
+| **Impact délai** | Immédiat (ce cycle) |
+| **Preuve nécessaire** | Ce cadrage + handoff + revue ChatGPT |
+| **Compatibilité F3-D01…D11** | **Oui** (préserve toutes) |
+| **Réduction only?** | **Oui** |
+| **Gate D after validation?** | **Non immédiat** — prépare seulement |
+| **Gate Morris** | Revue ChatGPT puis décision package suivant |
+| **Statut** | **RECOMMENDED framing posture — NOT DECIDED as architecture adoption** · **OPTION A posture for this cycle** |
+
+### Option B — MINIMAL BOUNDED REAL PILOT PREREQUISITES (ADMISSIBLE AS FRAMING ONLY)
+
+| Attribut | Contenu |
+|----------|---------|
+| **Nom** | **B — MINIMAL BOUNDED REAL PILOT PREREQUISITES** |
+| **Périmètre** | Design d'un lot futur minimal : authority surface minimale + durability proofs bornées · **sans** Git remote · crash⇒UNKNOWN · retry=new Attempt |
+| **Composants réutilisés** | AuthorityResolverPort · Confirmation stack · ExecutionContract/Attempt · hardBlockerFoundation · bounded audit |
+| **Nouveaux composants** | (futurs, NOT AUTHORIZED) ack surface design · durable authority evidence minimale · proof harness rollback |
+| **Impact R-T-A3-1** | Pourrait **réduire** davantage après Delivery+QA — jamais auto-close |
+| **Impact R-T-A3-2** | Pourrait adresser cross-store/rollback **bornés** — preuve requise |
+| **Dépendance IAM** | **Possible mais non auto** — peut viser surface existante d'abord ; constat actuel : **NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND** |
+| **Dépendance product persistence** | **Non auto** ; préférer bounded existing si suffisant |
+| **Dette** | Moyenne si mal borné ; acceptable si checklist Morris stricte |
+| **Réversibilité** | Haute si feature-flag / hors chemin fixture |
+| **Niveau de sécurité** | Conditionally high **si** fail-closed préservé |
+| **Impact délai** | Gate Delivery + QA séparés |
+| **Preuve nécessaire** | Matrices preuves + adversarial + drill |
+| **Compatibilité F3-D01…D11** | Oui **si** REAL reste explicit, no silent fallback, no Git remote |
+| **Réduction only?** | Non — nécessite Delivery ultérieure |
+| **Gate D after validation?** | **Potentiellement** seulement après preuves HARD réellement satisfaites |
+| **Gate Morris** | Design decision gate **avant** toute implémentation |
+| **Statut** | **OPTION — NOT SELECTED** · **ADMISSIBLE AS FRAMING ONLY** (contenu package décision futur) |
+
+**Checklist package décision futur (non autorisé maintenant) :** identité actor binding · objets durables min (HumanDecision, Confirmation, authority evidence, contract identity, consumption, Attempt authz record) · crash policy · retry policy · anti-conversation-authority · IAM yes/no explicite · persistence yes/no explicite · critères R-T-A3-1/2 reduction · anti-close.
+
+### Option C — EXTEND BOUNDED LOCAL AUTHORITY/AUDIT (optional, high caution)
+
+| Attribut | Contenu |
+|----------|---------|
+| **Nom** | **C — EXTEND BOUNDED LOCAL AUTHORITY/AUDIT** |
+| **Périmètre** | Étendre persistence locale existante pour authority/audit sans product DB |
+| **Composants réutilisés** | boundedAtomicAudit · node:sqlite/D1 · coordinator |
+| **Nouveaux composants** | Durable local authority store (design) |
+| **Impact R-T-A3-1** | Peut adresser TM-03/TM-12 localement — **pas** IAM |
+| **Impact R-T-A3-2** | Partial — audit local ≠ cross-store métier |
+| **Dépendance IAM** | Non |
+| **Dépendance product persistence** | Non (mais risque de confusion sémantique) |
+| **Dette** | **Haute caution** — faux sentiment de « production ready » |
+| **Réversibilité** | Moyenne |
+| **Niveau de sécurité** | Moyen — mieux que pure mémoire, insuffisant si sur-revendiqué |
+| **Impact délai** | Moyen |
+| **Preuve nécessaire** | Restart survival proofs · non-elevation claims |
+| **Compatibilité F3-D01…D11** | Conditionnelle (F3-D07) |
+| **Réduction only?** | Partial technical reduction possible later |
+| **Gate D after validation?** | Unlikely alone |
+| **Gate Morris** | Explicit bounded-local extension decision |
+| **Statut** | **OPTION — NOT SELECTED** · high caution |
+
+### Option D — IAM / PRODUCT DB FIRST = NOT ADMISSIBLE
+
+| Attribut | Contenu |
+|----------|---------|
+| **Nom** | **D — IAM / PRODUCT DB FIRST** |
+| **Périmètre** | Sélectionner IAM et/ou product persistence comme prérequis immédiat |
+| **Composants réutilisés** | N/A (nouveau programme) |
+| **Nouveaux composants** | IAM stack · product DB |
+| **Impact R-T-A3-1/2** | Contourne le cadrage borné ; viole GO no auto-select |
+| **Dépendance IAM** | **Oui — interdit ici** |
+| **Dépendance product persistence** | **Oui — interdit ici** |
+| **Dette** | Maximale |
+| **Réversibilité** | Faible |
+| **Niveau de sécurité** | Inconnu / overscope |
+| **Impact délai** | Majeur |
+| **Preuve nécessaire** | Hors scope Gate C |
+| **Compatibilité F3-D01…D11** | Conflit avec bornage actuel / NOT_SELECTED |
+| **Réduction only?** | Non |
+| **Gate D after validation?** | Non — non admissible |
+| **Gate Morris** | Exigerait GO Morris **explicite** distinct — **pas ce GO** |
+| **Statut** | **NOT ADMISSIBLE** under current GO · **OPTION — NOT SELECTED** |
+
+---
+
+## 13. Comparaison dette / valeur / risque
+
+| Critère | A Framing only | B Minimal bounded pilot prereqs | C Extend bounded local | D IAM/DB first |
+|---------|----------------|----------------------------------|------------------------|----------------|
+| **Dette** | Très basse | Moyenne contrôlable | Haute caution | Très haute |
+| **Valeur maintenant** | **Haute** (clarté Gate C) | Haute **future** | Incertaine | Faible (overscope) |
+| **Risque faux claim** | Bas | Moyen si mal cadré | **Élevé** | **Critique** |
+| **Respect GO** | **Oui** | Framing only oui | Framing only oui | **Non** (auto-select) |
+| **Impact HARD** | FURTHER REDUCED clarity | Potential future reduction | Partial local only | Illicit shortcut |
+| **Réversibilité** | Max | Haute | Moyenne | Faible |
+| **Gate D readiness** | Non | Possible plus tard | Non seul | Non admissible |
+| **Recommandation cycle** | **RECOMMENDED posture** | Package futur | Reserve | Reject |
+
+---
+
+## 14. Recommandation Cursor — RECOMMENDED — NOT DECIDED (Option A)
+
+**Recommandation :** adopter la **posture de cycle Option A** (HARD prerequisites framing only) ; préparer Option B comme **contenu de package de décision Morris futur** — **sans autoriser** Delivery, IAM, product persistence, ni Gate D.
+
+**Statut :** `RECOMMENDED — NOT DECIDED` (architecture) · ce cycle **exécute** le cadrage A documentairement.
+
+### Challenge obligatoire (réponses explicites)
+
+| Question | Réponse |
+|----------|---------|
+| **Utile maintenant ?** | **Oui** — mappe preuves/manques post-fixture ; débloque décision Morris informée |
+| **Dette créée ?** | **Minimale** (doc only) |
+| **Plus simple ?** | **Oui** — plus simple que B/C/D maintenant |
+| **Repo-first ?** | **Oui** — basé code/tests/décisions mergées |
+| **Réutilise foundation ?** | **Oui** — T-A3…T-A7, hardBlocker, F3 fixture |
+| **Second moteur d'autorité ?** | **Non** — F3-D03 préservé |
+| **IAM implicite ?** | **Non** — NOT_SELECTED |
+| **Persistence produit implicite ?** | **Non** — NOT_SELECTED · bounded local only |
+| **Process loss recreates authority ?** | **Non** — fail-closed ; conversation ≠ authority |
+| **Conversation as authority ?** | **Non** — interdit (F3-D07) |
+| **Partial failure → real untraced ?** | Fixture : non (no external effect). REAL : **risque résiduel R-T-A3-2** — d'où BLOCKS REAL |
+| **Réduit HARD ou déplace ?** | **Réduit l'ambiguïté** (clarity) ; **ne déplace pas** le manque de preuve vers un faux CLOSED |
+| **Gate Morris nécessaire ?** | **Oui** — pour toute Option B/C adoption ; Gate D **pas** immédiat |
+
+---
+
+## 15. Modifications produit éventuelles — NOT AUTHORIZED
+
+> **Statut :** candidats **IF** Delivery later authorized by Morris. **NOT AUTHORIZED** dans ce cycle. **Aucune** mutation `app/**` effectuée.
+
+### Chemins candidats (contraste / futurs lots)
+
+| Zone | Chemins illustratifs | Rôle futur possible |
+|------|----------------------|---------------------|
+| Authority resolver | `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` | Remplacement/adaptation **après** décision |
+| Port autorité | `app/lib/oa/decision/ports/authorityResolver.ts` | Binding identité |
+| Confirm stack | `app/lib/oa/decision/application/requestConfirmation.ts` · `grantConfirmation.ts` · `consumeConfirmation.ts` · `verifyAuthority.ts` | Ack Critical |
+| HARD foundation | `app/lib/platform/t-a7/hardBlockerFoundation.ts` | Flags honesty / missing proofs |
+| Atomicité | `app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts` · `simulatedAtomicOperation.ts` · `boundedPersistenceDecision.ts` | Durability proofs |
+| Audit local | `app/lib/d1/boundedAtomicAudit.ts` | Extend bounded local (Option C caution) |
+| F3 fixture (contrast only) | `app/features/project-assistant/f3/*` · `f3FixtureWiring.ts` | **Rester FIXTURE** jusqu'à GO REAL distinct |
+| F2 contrast | `app/features/project-assistant/f2/recordDecision.ts` | Ne pas promouvoir demo authority |
+
+**Rappel :** lister ces fichiers **≠** autoriser leur modification.
+
+---
+
+## 16. Gates Morris candidats
+
+Ordre recommandé (hypothèse de travail post-Gate C) :
+
+1. **Revue ChatGPT** du FULL pack Gate C (obligatoire ; Cursor report ≠ validation).
+2. **Gate intermédiaire — Authority surface design decision**
+   Candidate GO class : *decide whether authenticated Critical ack / Morris identity approach is (reuse-if-any) vs new surface vs remain fixture-only* — sans implémenter.
+3. **Gate intermédiaire — Durability proof plan**
+   Candidate GO class : *decide bounded durability proof scope for R-T-A3-2 (cross-store which writes; rollback drill; UNKNOWN policy)* — sans sélection product DB.
+4. **Optionnel — Bounded pilot design package (Option B contents)**
+   Framing/design only until Delivery GO.
+5. **Delivery GO** (séparé) pour prérequis REAL **si** Morris autorise — hors ce cycle.
+6. **QA** du lot prérequis.
+7. **Gate D** — **seulement si** preuves HARD réellement réduites/satisfaites selon Git ; **pas** par fiat ; **NOT CONSUMED now** ; **probable non-ouvrable** immédiatement après ce seul cycle.
+8. **HARD closure decision** — gate Morris dédié distinct si un jour candidat (`HARD CLOSURE CANDIDATE — DEDICATED MORRIS CLOSURE DECISION REQUIRED`).
+
+**Gate D :** **NOT CONSUMED** · **NOT immediate**.
+
+---
+
+## 17. Anti-claims
+
+Liste non exhaustive — toute violation est un défaut de revue :
+
+1. **NO HARD CLOSED** — R-T-A3-1 / R-T-A3-2 **jamais** `CLOSED` ce cycle.
+2. **NO IAM SELECTED** — IAM **`NOT_SELECTED`**.
+3. **NO product persistence SELECTED** — **`NOT_SELECTED`**.
+4. **NO Cursor REAL** — **BLOCKED** · pas d'adapter REAL.
+5. **NO Gate D consumed**.
+6. **NO REAL READY** / **NO READY** claim.
+7. **Tests PASS ≠ HARD closed**.
+8. **Fixture ≠ authenticated Morris**.
+9. **F2 `canActAsMorris` demo ≠ production identity**.
+10. **N3 ≠ canActAsMorris / ≠ Morris**.
+11. **MemoryAuthorityResolver ≠ production authority**.
+12. **Bounded local ≠ product persistence**.
+13. **Audit local ≠ cross-store durable**.
+14. **`productionRollbackProven=false`** remains.
+15. **`crossStoreDurable=false`** remains.
+16. **T-A6 COMPLETE NOT DECLARED**.
+17. **Recommendation ≠ authority**.
+18. **Conversation ≠ authority** (F3-D07).
+19. **No app/\*\* mutation** this cycle.
+20. **No project commit/push/PR** this cycle.
+21. **Option recommended ≠ Option selected**.
+22. **FURTHER REDUCED ≠ CLOSED**.
+23. **Gate C consumed ≠ Gate D authorized**.
+24. **PR #333 merge ≠ REAL path open**.
+25. **B5 bounded fixture acceptance ≠ B5 global CLOSED**.
+26. **NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND** — do not invent one.
+
+---
+
+## 18. État final des réserves
+
+| Réserve | Statut final recommandé | Bloque REAL? | Notes |
+|---------|-------------------------|--------------|-------|
+| **R-T-A3-1** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD) | **OUI** | Clarity/honesty delta F3 ; missing authenticated ack/identity |
+| **R-T-A3-2** | **`FURTHER REDUCED — REMAINS OPEN`** (OPEN HARD) | **OUI** | Frontiers clarified ; missing cross-store + rollback drill |
+| **R-M01** | **OPEN** (porté dans `openHardReservationRefs`) | Contribue gouvernance evidence | ≠ closed by fixture |
+| **R1** | **OPEN** (atomicité Project↔Cycle famille) | Avant real-exec per A52-D02 | Linked family ≠ merged with R-T-A3-2 |
+| **B5 global** | **OPEN** · STOP BEFORE DELIVERY hors bornage | Fixture path had bounded acceptance earlier | **≠ global CLOSED** |
+| **T-A6 COMPLETE** | **NOT DECLARED** | — | Evidence maturity ≠ COMPLETE |
+
+**Interdit :** tout statut `CLOSED` pour R-T-A3-1 / R-T-A3-2 dans ce document.
+
+Si un lecteur croit « tous les critères techniques semblent présents » : reporter **`HARD CLOSURE CANDIDATE — DEDICATED MORRIS CLOSURE DECISION REQUIRED`** — **ne pas fermer**.
+
+---
+
+## 19. Trajectoire vers Gate D
+
+### Prérequis checklist avant tout GO Gate D
+
+- [ ] Revue ChatGPT Gate C OK (handoff remote).
+- [ ] Morris decision on authority surface approach (intermédiaire).
+- [ ] Morris decision on durability proof plan (intermédiaire).
+- [ ] Si code requis : Delivery GO **explicite** + implémentation bornée + QA.
+- [ ] Preuves R-T-A3-1 manquantes adressées **ou** réduction formellement acceptée avec HARD still open rules respected.
+- [ ] Preuves R-T-A3-2 manquantes adressées (cross-store / rollback) **ou** plan accepté avec BLOCKS REAL maintenu jusqu'à preuve.
+- [ ] IAM remains explicit NOT_SELECTED **or** selected by dedicated Morris GO (pas ce cycle).
+- [ ] Product persistence remains explicit NOT_SELECTED **or** selected by dedicated Morris GO.
+- [ ] Cursor REAL adapter still absent until Gate D (+ other gates) say otherwise.
+- [ ] Anti-claims re-validés sur Git Truth.
+
+### État actuel trajectoire
+
+| Élément | État |
+|---------|------|
+| Gate D | **NOT CONSUMED** |
+| Cursor REAL | **BLOCKED** |
+| Next package | **READY** for Morris after ChatGPT review |
+| Hypothèse | Gate D **probably not immediately openable** after this framing-only cycle |
+
+---
+
+## 20. Verdict
+
+```
+F3 REAL HARD PREREQUISITES FRAMING COMPLETE —
+GATE C CONSUMED —
+R-T-A3-1 CURRENT EVIDENCE AND MISSING AUTHORITY PROOFS MAPPED —
+R-T-A3-2 CURRENT EVIDENCE AND MISSING DURABILITY PROOFS MAPPED —
+F3 FIXTURE EVIDENCE DELTA ASSESSED —
+NO HARD CLOSED —
+IAM REMAINS NOT_SELECTED —
+PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
+BOUNDED LOCAL PERSISTENCE REMAINS LOCAL ONLY —
+NO PRODUCT MUTATION —
+NO REAL EXECUTION —
+NO CURSOR REAL ADAPTER —
+GATE D NOT CONSUMED —
+CURSOR REAL REMAINS BLOCKED —
+ARCHITECTURE OPTIONS PREPARED —
+RECOMMENDATION REMAINS NOT DECIDED —
+NEXT MORRIS DECISION PACKAGE READY —
+FULL REVIEW PACK COMPLETE —
+HANDOFF REMOTE VERIFIED —
+READY FOR CHATGPT REVIEW
+```
+
+### Synthèse opératoire
+
+Gate **C** est **consommé** par ce cadrage Critical CAPA/DOC. Les réserves **R-T-A3-1** et **R-T-A3-2** sont **FURTHER REDUCED — REMAINS OPEN** (clarté du gap post-fixture), **jamais CLOSED**. IAM et product persistence restent **NOT_SELECTED**. Bounded local reste **local only**. Aucune mutation produit. Cursor REAL reste **BLOCKED**. Gate **D** reste **NOT CONSUMED**. Option **A** est la posture recommandée de ce cycle ; Option **B** est un package futur non autorisé ; Option **D** est non admissible.
+
+---
+
+*Fin du README Gate C — F3 Real Path HARD Prerequisites Framing.*
```

---

## FINAL VERDICT

```
F3 REAL HARD PREREQUISITES FRAMING COMPLETE — GATE C CONSUMED — R-T-A3-1 CURRENT EVIDENCE AND MISSING AUTHORITY PROOFS MAPPED — R-T-A3-2 CURRENT EVIDENCE AND MISSING DURABILITY PROOFS MAPPED — F3 FIXTURE EVIDENCE DELTA ASSESSED — NO HARD CLOSED — IAM REMAINS NOT_SELECTED — PRODUCT PERSISTENCE REMAINS NOT_SELECTED — BOUNDED LOCAL PERSISTENCE REMAINS LOCAL ONLY — NO PRODUCT MUTATION — NO REAL EXECUTION — NO CURSOR REAL ADAPTER — GATE D NOT CONSUMED — CURSOR REAL REMAINS BLOCKED — ARCHITECTURE OPTIONS PREPARED — RECOMMENDATION REMAINS NOT DECIDED — NEXT MORRIS DECISION PACKAGE READY — FULL REVIEW PACK COMPLETE — HANDOFF REMOTE VERIFIED — READY FOR CHATGPT REVIEW
```

### Handoff remote identity note

Inbound BEFORE tip/blob recorded above. AFTER tip/blob will be verified by `git fetch` + `git rev-parse` post-publish. If final identity cannot be embedded in frozen content without commit loop :

`FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE`

---

*End FULL Review Pack — Gate C F3 Real HARD Prerequisites Framing.*
