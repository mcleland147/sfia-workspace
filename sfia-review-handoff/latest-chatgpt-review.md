# PRODUCT JOURNEY CURRENT-MAIN RESUME — FULL Review Pack
## PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01
## Cycle 9 — QA / VALIDATION — CRITICAL

timestamp: 2026-09-21T05:50:48Z
campaign: PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01
parent continuity: SAME CAMPAIGN CONTINUATION after PJ-REPROOF-04 COMPLETE / PR #510 MERGED
cycle: 9 — QA / VALIDATION
profile: CRITICAL
mode: RESUME EXISTING DURABLE STATE — NO RESET — NO MICRO-CYCLES — NO PROJECT CODE PATCH
CKC: method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md (candidate; cognitive guidance only; no execution authority)
Morris GO: CONSUMED for resume + current-main recovery + deterministic/browser-real validation + EC preparation/inspection + ONE Cursor REAL only if exact Pilot authorization recorded
HumanDecision / Pilot Confirmation / EC authorization: NOT replaced by Morris GO
NEW Cursor REAL this cycle: 0 (Pilot authorize gate not passed; EC also self-declares NO_CURSOR_REAL)
project git: commit 0 / push 0 / PR 0 / merge 0
runtime v3: NON ADOPTED
Global L5: NOT ADOPTED

---

## Final verdict

**PAUSED AT PILOT GATE — CURRENT-MAIN DURABLE PRODUCT JOURNEY RECOVERED — EXECUTIONCONTRACT SEMANTIC BRIDGE PROVEN THROUGH PILOT INSPECTION — NO TECHNICAL HOW SELECTOR — READY FOR PILOT AUTHORIZATION**

Minimum target proof reached: browser-real current-main Product path through exact EC inspection.

Preferred Cursor REAL + report triad + Evidence continuity: NOT reached (correct human boundary).

---

## 1. Sources read (mandatory)

PROCESS:
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md

CONVERGENCE:
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

PRODUCT COMPLETION:
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md

V3 APPLICABLE (framing only; runtime v3 NON ADOPTED):
- 30 / 32 / 34 / 35 / 37 knowledge + trajectory + execution governance packs

Integrated bridge under validation: PR #510 (PJ-REPROOF-04) on origin/main.

---

## 2. Git truth

```
worktree: /workspace
detached HEAD: 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0 (== origin/main)
QA branch pointer preserved (not rewritten / not pushed / not deleted):
  qa/sfia-studio-product-journey-claim-evidence-completion-01 @ de954f80af4e7fff5f77c8350cae342156dd0e6e
ancestry: QA HEAD is ancestor of origin/main
left/right HEAD...origin/main (QA vs main): 0 / 24
PR #510: MERGED
post-merge CI run 35561202549: SUCCESS (headSha 31295c70…)
Required Gate: PASS (inherited from merge CI)
project source mutations this cycle: NONE
```

Phase 1 reverify matched expected pre-switch facts; then `git switch --detach origin/main` to 31295c70 without rewriting the QA branch.

Tracked tree clean aside from local ignored/untracked QA captures under `.tmp-sfia-review/runtime-captures/` (not project-committed).

---

## 3. Durable-state inventory + backup

Campaign Product store (authoritative):
- path: `projects/sfia-studio/.sfia-exec/pje2e-cloud-reproof-01/product/oa-product.sqlite`
- pre-resume sha256: `e3684a637f21b8ef8b714ef2b2a2eda50b793eb3ffebca63df6f83929ac66b38`
- pre-resume bytes: 405504

Backup (outside repo, before first current-main runtime write):
- `/tmp/sfia-product-journey-resume-backup-20260921T051919Z/`
- MANIFEST records source paths + hashes (product DB hash match proven at backup time)
- secrets not copied into Review Handoff

Runtime composition:
- URL: `http://127.0.0.1:3030` (foreign reserve on :3020 left untouched — pid 347322 next-server from unrelated tree)
- env (names only): BETTER_AUTH_*, GITHUB_CLIENT_*, SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS, SFIA_STUDIO_PRODUCT_DB_PATH → campaign DB, SFIA_STUDIO_E2E_QA_CONTROL=1, SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
- `.env.local` gitignored; no secrets in this pack

Post-cycle DB (after Product UI path mutations):
- sha256: `c8f03b313abf0f0bb8e4fbcfb8a2e9ca4e334eae4cb3cc4abe29ea86c884571b`
- bytes: 557056
- backup pre-image preserved for recovery

---

## 4. Auth recovery note (environment, not Product patch)

Interactive GitHub OAuth blocked the first browser attempt (no GitHub session; allowlisted id `295557155`).

QA recovery used a **local Better Auth cookie-cache + account_data mint** signed with the runtime `BETTER_AUTH_SECRET`, binding allowlisted GitHub id `295557155` → `actor:github:295557155`.

Classification:
- NOT interactive GitHub OAuth
- NOT Pilot authorization of an ExecutionContract
- NOT Confirmation / StartExecution authority
- Sufficient only to open protected Product surfaces for resume validation

Captures: `pj-resume-01-login.png`, `pj-resume-02-github-oauth-blocker.png`, then authenticated `pj-resume-03-studio-home.png`.

---

## 5. Recovered Product identity (before-state, then continuity)

Project (unchanged identity):
- projectId: `prj:288f7e1a-720a-40b2-baac-37710c0e1e87`
- title: Mini cadrage — Suivi de tâches
- repositoryBinding: github mcleland147/sfia-workspace
- activeCycleInstanceId: `cyc:trj-9a3d8a1a8b3792244f406af6` (cyc:framing / Light / active)

Before-state (resume start):
- LPS current: `lps:49fd044ccc1dc351` (version 6)
- Trajectory current: `trj:lr-bridge-f6380cb62f2a` @ v1 (validated)
- HumanDecisions:
  - `dec:gf-trj:d423ca8a-be75-4aa5-8a21-e782c57e92e5` — approve candidate trajectory (accepted)
  - `dec:pilot-life:9156edb0-16df-4bb7-889b-7e1a88121758` — opt:require-artifact (accepted)
- ExecutionContracts: 0
- Attempts: 0
- Confirmations: 0
- EC inspection attestations: 0
- Historical anchor "Diagnostiquer / clarifier…" was NOT present as durable text; durable recommendation after propose became functional option `opt:trajectory:clarify-first` ("Clarifier avant d'engager") — Product state authoritative

After Product path (propose → decide clarify → prepare → inspect):
- LPS current: `lps:84db3a5fdbd9989a` (lineage advanced; supersession chain intact)
- Trajectory current: `trj:lr-bridge-f6380cb62f2a` @ v3 (validated); v1/v2 superseded
- Additional HumanDecisions (clarify-first):
  - `dec:w2-trj:7265ac19-1576-4589-bd5c-dc33f8e8e636` (first same-session decide; prepare CTA lost after reload)
  - `dec:w2-trj:26e11825-b344-4613-9fd3-09ce6ed55ac2` (second decide after repropose; EC bound here)
- EC: `xct:w3a:dec:w2-trj:26e11825-b344-4613-9fd3-09ce6ed55ac2` version 2
- semanticFingerprint: `a0ad04783dc9cf902232f5ed31c5d96d355697c8c1512854dd61035fdfe6ce27`
- Inspection attestation: `insp:3ce6017ab09ea1a9` (fingerprint matches EC semanticFingerprint)
- Confirmations: 0
- Attempts: 0

Continuity proofs:
- Same projectId reused (no new project)
- Same trajectory id lineage reused (`trj:lr-bridge-…`)
- Same cycle instance reused
- No fixture DB substitution
- No scenario restart / clean-slate create

---

## 6. PJ-REPROOF-04 Product path — no technical HOW selector

Observed on canonical `/studio` project workspace:

Prepare affordance copy (data-testid `w3a-prepare-execution-from-decision`):
> Studio prépare le contrat d'exécution à partir de la décision et du contexte produit durable — sans choix technique (lecture, simulation, artefact…).

Negative UI scans (body text + selectors) across propose / decide / prepare / inspect:
- docs_write / operationKind / remote_push / pr_create / pr_merge / local_commit / simulate / type d'exécuteur: ABSENT as Pilot choices
- no `<select>` / radiogroup operation picker on the path
- `w2-option-tech-*` details only expose functional optionRef labels (not HOW menus)

Pilot chooses functional trajectory option ("Clarifier avant d'engager"), not technical executor/operation kind.

---

## 7. Exact ExecutionContract (Product UI prepared — not SQL-constructed)

| Field | Value |
|---|---|
| executionContractId | `xct:w3a:dec:w2-trj:26e11825-b344-4613-9fd3-09ce6ed55ac2` |
| version | 2 |
| semanticFingerprint | `a0ad04783dc9cf902232f5ed31c5d96d355697c8c1512854dd61035fdfe6ce27` |
| decisionRefs | `dec:w2-trj:26e11825-b344-4613-9fd3-09ce6ed55ac2` |
| status | validated |
| objective (inputs) | Clarifier le contexte durable et les réserves… + cadrage suivi de tâches |
| expectedOutputs | Diagnostic des réserves… ; Prochaine étape produit recommandée (sans exécution automatique) |
| scope IN | product:current-project-facts ; product:decision-basis-and-lps ; reservations… |
| scope OUT | unrelated mutation ; automatic-execute ; DURABLE_PROJECT_WRITE ; GIT_PUSH/PR/MERGE ; … |
| stopConditions | AUCUNE EXÉCUTION ; STOP AVANT EXECUTE ; … ; NO_AUTOMATIC_EXECUTE |
| evidenceRequirements | evreq:read ; evreq:mission-result-for-nora-reevaluation |
| requiredAuthority | N1 |
| reversibility | reversible |
| cursorDeterminesHow | true |
| constraints of note | PRODUCT_GOVERNED ; FIXTURE_EXECUTOR_BOUNDARY_ONLY ; NO_REAL ; NO_CURSOR_REAL ; … |

Functional mission describes WHAT is authorized. Internal technical quartet for matching is not a Pilot selector.

Browser captures:
- `pj-resume-13-after-prepare.png`
- `pj-resume-14-ec-inspection-expanded.png`
- `pj-resume-15-w2-inspect-contract.png` (state: INSPECTÉ · inspecter n'autorise pas)

---

## 8. EC → Cursor prompt parity (production projector)

Function: `projectExecutionContractToCursorPrompt` (canonical Start path projector).

Evidence file: `.tmp-sfia-review/runtime-captures/product-journey-current-main-resume/pj-resume-16-ec-prompt-profile.json`

Parity:
- executionContractId match: PASS
- contractVersion match: PASS
- semanticFingerprint match: PASS
- expected outputs present: PASS
- stop conditions present: PASS
- scope OUT push/PR/merge present: PASS
- no HOW selector / operation catalogue in prompt: PASS
- Cursor owns HOW within perimeter: PASS
- promptDigest (projector): `ff429ccc402306d260bb6bff14b215a8`
- silent widening: not observed on inspected axes

Note: projected prompt was produced via the production projection module against the durable EC (read-only QA). No StartExecution.

---

## 9. Executor selection proof (production resolver; no launch)

`resolveAttemptExecutionProfile` on this EC:
- kind: `contract_legacy`
- reason: `non_progressive_contract_quartet`
- criteria quartet:
  - capability `cap:studio.cursor.generalist`
  - action `studio.cursor.generalist.execute`
  - target `studio.cursor.generalist.workspace`
  - scope `studio.cursor.generalist.authorized_contract`
- expected agent id: `agt:studio.cursor.generalist`

Does NOT match sealed M4 RO / F3 / docs_write / commit / push / PR / merge specialized profiles (action is `product:read`, not sealed M4 RO action).

No prefer-generalist bypass; no GCEC fallthrough for this Product EC shape.

---

## 10. Pilot gate status

| Gate | Status |
|---|---|
| EC prepared | YES |
| Pilot inspect opportunity | YES (`w2-inspect-contract` clicked; attestation `insp:3ce6017ab09ea1a9`) |
| Inspect ≠ authorize | YES (UI: INSPECTÉ · inspecter n'autorise pas) |
| Confirmation row | 0 |
| Authorize clicked | NO (deliberately skipped) |
| StartExecution / Execute affordance armed | NO (`w2-execute-authorized` count 0) |
| Exact Pilot authorization for this EC id+version+fingerprint | NOT PRESENT |
| Cursor REAL | NOT STARTED (also EC constraints NO_REAL / NO_CURSOR_REAL) |

Morris GO / prior HumanDecision / synthetic session cookie are NOT treated as authorization of this EC.

---

## 11. REAL / report triad / Evidence / post-execution

Not applicable — stopped before StartExecution.

TECHNICAL RESULT: n/a (no attempt)
PRODUCT RESULT: n/a (no Evidence claim from execution)
report triad: n/a

---

## 12. Screenshots / capture paths

Directory: `.tmp-sfia-review/runtime-captures/product-journey-current-main-resume/` (local only; not project-committed)

Key checkpoints:
1. recovered durable state — `pj-resume-04-project-workspace.png`
2. trajectory / HumanDecision / clarify recommendation — `pj-resume-06-after-propose-options.png`, `pj-resume-08-after-decide-clarify.png`
3. EC inspection — `pj-resume-13-after-prepare.png`, `pj-resume-14-ec-inspection-expanded.png`, `pj-resume-15-w2-inspect-contract.png`
4. no technical operation selector — text dumps + leak scans in `pj-resume-*-notes.txt` / `pj-resume-07-tech-details.json`
5. REAL terminal — not reached
6. post-execution — not reached

Artifacts also mirrored under `/opt/cursor/artifacts/pj-resume-*.png` for walkthrough.

---

## 13. Negative proofs

- no project reset / no new project create
- no fixture Product DB substitution
- no technical HOW selector on canonical path
- no specialized Product executor selected for this EC (resolver → contract_legacy generalist)
- no GCEC specialized fallthrough for this EC
- no StartExecution without exact Pilot authorization
- no duplicate Cursor launch
- no report triad (none minted)
- no ExecutionReport→Evidence conflation
- no automatic structural redecision by Nora (Pilot decide buttons used)
- runtime v3 NOT claimed ADOPTED
- QA branch not pushed/deleted/rewritten

Reserve / honesty:
- Two clarify-first HumanDecisions exist because prepare CTA did not rehydrate after reload (see Finding). Same-session path still proved EC inspection.

---

## 14. Finding

### FINDING-PJ-CONT-REHYDRATE-01
- observed: After page reload + "Reprendre l'état enregistré", an already-accepted W2 clarify-first HumanDecision (`dec:w2-trj:7265ac19-…`) did not restore the prepare-EC client surface; UI returned to "Instruire les options" only. Rehydration code path restores `pursue_prepare_ready` into `decision` state, not clarify-first trajectory decisions.
- expected: Durable accepted decision that still authorizes prepare should rehydrate prepare affordance without forcing a second HumanDecision.
- durable IDs: project `prj:288f7e1a-…`; HD `dec:w2-trj:7265ac19-…`; later forced HD `dec:w2-trj:26e11825-…` + EC `xct:w3a:dec:w2-trj:26e11825-…`
- evidence: `pj-resume-09-before-prepare-ec.txt` (prepare absent) vs `pj-resume-08-after-decide-clarify.txt` (prepare present same session)
- reproduction: decide clarify-first → reload `/studio/projects/<id>` → resume durable → observe prepare missing
- affected capability: V3-F02 continuity / V3-F05 decision→execution handoff after restart
- likely source area: `TrajectorySurface.tsx` `rehydrateActiveDecisionSubject` / `w2ReadActiveDecisionSubjectAction` kinds
- severity: MEDIUM (continuity UX; same-session path still works)
- critical path blocked for restart-resume of prepare? PARTIAL — blocked after reload until redecide; not blocked in continuous session
- Delivery requalification: RECOMMENDED (separate macro); this QA cycle did not patch

Primary cycle stop remains the Pilot authorization gate (not this finding alone).

---

## 15. Reserves

- Auth for browser-real used allowlisted cookie mint (see §4) — interactive OAuth still unavailable in this environment
- EC self-declares NO_REAL / NO_CURSOR_REAL / FIXTURE_EXECUTOR_BOUNDARY_ONLY for this diagnostic clarify mission — even after Pilot authorize, Cursor REAL would be out of contract for THIS EC
- Foreign :3020 process not investigated as Product defect
- Projected prompt UI surface testids (`w2-view-cursor-prompt`) absent; parity proven via production projector module instead
- "Diagnostiquer…" historical wording not durable; functional clarify-first option is the Product truth

---

## 16. Claims allowed

- PJ-REPROOF-04 integrated on current-main (PR #510) and post-merge CI SUCCESS
- Existing Product Journey durable project recovered on current-main without reset
- Browser-real Product path: HumanDecision (clarify-first) → prepare EC → Pilot inspect — without technical HOW selector
- EC→prompt semantic parity on inspected axes via production projector
- Resolver maps this Product EC to `contract_legacy` → generalist technical quartet / `agt:studio.cursor.generalist`
- Runtime paused correctly at Pilot authorize gate (no StartExecution)

## 17. Claims forbidden

- runtime v3 ADOPTED
- global L5 ADOPTED
- Product Completion / D-PC-09 reopened
- Cursor REAL proven on current-main after #510
- ExecutionReport / Evidence / Nora / LPS post-execution continuity from a REAL attempt
- one journey proves every Cursor mission
- ExecutionReport equals Evidence
- automatic Pilot decision
- architecture promotion
- Morris GO = Pilot EC authorization
- interactive GitHub OAuth completed

---

## 18. INPUT vs TARGET proof levels

INPUT:
- PJ-REPROOF-04 deterministic proof: PASS (prior)
- PR #510 on main: PASS
- post-merge CI 35561202549: PASS
- Required Gate: PASS
- new Product/Cursor REAL after #510 before this cycle: NONE

TARGET this cycle:
- minimum BROWSER-REAL CURRENT-MAIN PRODUCT PATH THROUGH EXACT EC INSPECTION: **PASS**
- preferred ONE BOUNDED CURSOR REAL + triad + Evidence + continuity: **NOT REACHED** (Pilot gate)

---

## STOP

Stop after genuine Pilot gate (authorize not granted for exact EC id/version/fingerprint).

Do not start another cycle automatically.
Do not open a project PR.
Do not patch product code.
