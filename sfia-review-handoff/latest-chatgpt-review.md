# SFIA STUDIO — PRE-M6 UI DELIVERY OPTION A — CYCLE 9 QA / VALIDATION

Timestamp: 2026-08-16 19:42:41 CEST
Level: FULL
Branch: `delivery/sfia-studio-pre-m6-ui-option-a`
HEAD: `0d33478566627a9bf507d5a06323962d349308ee`
origin/main: `0d33478566627a9bf507d5a06323962d349308ee`
Incoming Review Handoff: `18dd538c0d021824b395795c18bf69432cce3756`
Incoming blob expected: `48e4322176e2da7831367e57e4f9e60be5b37145`

---

## 1. Exact GO Morris Consumed

User wording: ok go cycle 9

Interpreted GO: PRE-M6 UI DELIVERY OPTION A — CYCLE 9 QA / VALIDATION

Authorized: local runtime, fake provider, Playwright, Option A E2E tests, engineering tests, local test data via product paths, runtime captures, Figma/runtime comparison, Review Pack FULL, handoff L3.

Forbidden: product fix, new architecture/persistence/migration, package/playwright config mutation, Figma mutation, REAL, project commit/push/PR, M6.

---

## 2. Cycle / Profile / CKC

- Cycle: 9 — QA / validation
- Profile: Critical
- Typology: N/A (QA of existing candidate; test-only mutations)
- CKC: method/.../pilots/04-qa-validation.md v0.1.0 candidate — experimental guidance, no execution authority
- Posture: require referent; separate observation/reserve/verdict; negatives; no soft blockers

---

## 3. Git Truth

| Check | Value |
| --- | --- |
| Branch | delivery/sfia-studio-pre-m6-ui-option-a |
| HEAD | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/main | 0d33478566627a9bf507d5a06323962d349308ee |
| Incoming handoff | 18dd538c0d021824b395795c18bf69432cce3756 |
| Candidate dirty | YES |
| Tracked modified | 34 |
| Created project files | 19 |
| Staged | 0 |
| Project commits/pushes | 0 |
| REAL | unset / 0 |
| Production mutation during Cycle 9 | 0 (fingerprint pre/post E2E identical) |

QA-only deltas:
- e2e/studio-option-a.spec.ts (expanded)
- __tests__/studio-projects/projectPrincipalAmend.test.tsx (type literals for tsc)

---

## 4. Convergence Pre-check

Option A ADOPTED; Execution Authorization CONSUMED; Cycle 8 + AMEND ChatGPT PASS; G-UX-11 OPEN/PENDING this cycle; D-PRE-M6-UX-05 ADOPTED; Pre-M6 NON COMPLETE; M6 NOT AUTHORIZED; runtime v3 NON ADOPTED; REAL 0.

---

## 5. Build Doctrine Challenge

Capacity: prove V3-F05/V3-F02 end-to-end in browser before Morris UAT.
Useful now: YES.
Reuse: candidate, Playwright harness, fake provider, Product Store, Freeze evidence.
Parallel architecture / new persistence: 0.
Exit proof incomplete due to blocking product gap QA-PRE-M6-01.

---

## 6. QA Coverage Map (before tests)

```markdown
# Cycle 9 QA Coverage Map — PRE-M6 Option A
# Timestamp: Europe/Paris — produced before E2E mutation

| Requirement | Frame/G-UX | Browser reachable? | Existing test? | Test to add | Oracle | Evidence | Blocking if missing? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Enter Studio / list | F1 | YES | smoke | keep + deepen | /studio shell + home | screenshot R01 | YES for G-UX-11 |
| Create Project | F1 | YES | no | create via form | unique name → open workspace | R01b | YES |
| Open Project / Nora dominant | F2/F3 | YES | no | after create | principal + conversation | R02/R03 | YES |
| LPS sticky / drawer | F11 | YES | no | viewport 1440/1280/1024/767 | widths + drawer toggle | R11* | YES responsive |
| Qualification/Proposal | F4 | YES via `__F2_STRUCTURING__` | no | send marker | qualif/proposal visible; ≠ HumanDecision | R04 | YES |
| HumanDecision GO | F5 | YES | no | f2-decide-GO | decision card explicit | R05 | YES |
| ExecutionContract + Confirmation process-local | F6 | YES | no | f3-prepare | contract; no Attempt yet; process-local copy | R06 | YES |
| Confirm + Attempt success fixture | F7 | YES (success only) | no | f3-confirm-execute | Attempt terminé; Evidence; RB; REAL=0 | R07 | YES for happy |
| Recommendation ≠ Decision | F8 / N1 | YES | no | assert labels | executionAuthority false; no-ready-claim | R08 | YES |
| Recommendation stale | F8 / N5 | NO without prod/DB seam | unit only | document UNAVAILABLE | — | — | YES → G-UX-11 cannot CLOSE without reserve |
| History durable | F9 | YES | unit | after execute/reload | Evidence/RB; no transcript | R09 | YES |
| Recovery contextual | F10 / N12 | YES | unit | nominal vs advanced/reload | banner absent/present; no fake convo | R10 | YES |
| Rejected decision NO_GO | N2 | YES | no | f2-decide-NO_GO | no F3 prepare ready | — | YES authority |
| Unconfirmed contract | N3 | YES | no | prepare w/o confirm | no Attempt | — | YES |
| Duplicate start | N4 | PARTIAL | no | double-click confirm | UI/idempotent | — | PARTIAL ok w/ note |
| Blocked pre-Attempt | N6 | NO via UI | labels only | UNAVAILABLE | — | — | impacts F7 matrix |
| Failed Attempt | N7 | NO | no | UNAVAILABLE | — | — | impacts F7 matrix |
| Timeout Attempt | N8 | NO | no | UNAVAILABLE | — | — | impacts F7 matrix |
| Cancelled Attempt | N9 | NO | no | UNAVAILABLE | — | — | impacts F7 matrix |
| Missing Evidence | N10 | PARTIAL/NO | no | after success Evidence present; missing path UNAVAILABLE | — | — | note |
| Rehydrate failure | N11 | PARTIAL | unit | optional if UI shows | — | — | note |
| G-UX-08 AMEND deferred | G-UX-08 | YES message | no | f2-decide-AMEND | deferred message; no full loop | — | non-blocking (OPEN) |
| Accessibility bounded | a11y | YES | axe in unit elsewhere | headings/labels/keyboard smoke | no critical blockers | — | non-WCAG |
| Engineering non-regression | — | n/a | suite | typecheck/lint/vitest/build | PASS | logs | YES |
| Full Playwright suite | — | n/a | many | run full | classify failures | logs | classify |

## Fake provider env (existing harness)
- OPS1_CONVERSATION_PROVIDER=fake (playwright.config webServer)
- Marker for gate: `__F2_STRUCTURING__`

## Verdict implication (pre-run)
Mandatory F7 variant negatives + stale Recommendation are BROWSER PROOF UNAVAILABLE without production seams.
→ G-UX-11 likely **PARTIAL / OPEN** or **SATISFIED WITH EXPLICIT RESERVE** on unavailable negatives, depending on observed happy-path + reachable negatives.
→ Do NOT invent unavailable proofs.

```

## 7. Playwright Harness Truth

- Config playwright.config.ts NOT modified
- baseURL http://127.0.0.1:3020 ; workers 1 ; Desktop Chrome 1440x1024
- Provider OPS1_CONVERSATION_PROVIDER=fake via webServer
- Additional env for GO (fail-closed otherwise): SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 via process.env spread (no config file change)
- Marker: __F2_STRUCTURING__ for Morris gate

---

## 8. Files QA Modified / Created

| File | Action |
| --- | --- |
| e2e/studio-option-a.spec.ts | MODIFIED |
| __tests__/studio-projects/projectPrincipalAmend.test.tsx | MODIFIED (typing only) |

Production files mutated during QA: 0

---

## 9. Engineering Validation

npm run typecheck → PASS
npm run lint → PASS
npm test -- --run → 1758 passed / 131 skipped
npm run build → PASS (/studio present)
git diff --check → PASS

---

## 10. Targeted Playwright

Command:
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e -- e2e/studio-option-a.spec.ts

Result: 8 passed (~9.9s)

Includes explicit reproduction of QA-PRE-M6-01 (F6 STALE after GO).

---

## 11. Full Playwright Regression

Command:
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e

Result: 101 passed / 5 skipped / 18 failed (~9.6m)

Classification of 18 failures:
- Class C environment: increment-b/d/e harness CLI missing projects/sfia-studio/harness/node_modules/tsx (MODULE_NOT_FOUND). Not Option A product regression.
- Class B/C historical: increment-a keyboard abandon; increment-c Campus360 flows — historical P0; not Option A blockers.
- Option A specs: all PASS.

No failure masking.

---

## 12. Happy Path F1→F11 (observed)

| Step | Result |
| --- | --- |
| F1 Enter Studio / create project | PASS |
| F2/F3 orientation + LPS widths 1440~380 / 1280~320 | PASS |
| F4 Qualification/Proposal via fake __F2_STRUCTURING__ | PASS; Recommendation != HumanDecision |
| F5 HumanDecision GO | PASS (requires SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1) |
| F6 fixture prepare ExecutionContract | FAIL/BLOCKED — Proposal STALE after GO |
| F7 Attempt / Evidence | NOT REACHED |
| F8 Recommendation post-execute | NOT REACHED |
| F9 History after GO | PASS |
| F10 Recovery after reload | PASS |
| F11 responsive 1024 drawer + 767 | PASS |

---

## 13. BLOCKING ISSUE — QA-PRE-M6-01

| Field | Value |
| --- | --- |
| ID | QA-PRE-M6-01 |
| Type | functional / authority / testability |
| Severity | BLOCKING |
| Screen/step | F6 after F5 GO |
| Precondition | Fake __F2_STRUCTURING__ then GO with local Morris authority env |
| Reproduction | Create project → send structuring → f2-decide-GO → f3-prepare-button |
| Expected | ExecutionContract prepare succeeds (or durable M3 path continues) |
| Observed | Contexte Project/LPS modifié — proposition STALE. Aucune préparation F3. |
| Evidence | R06-F6-Prepare-STALE-Blocked.png + E2E assertion |
| Impact | G-UX-11 cannot be SATISFIED; F6/F7/F8 incomplete; N3/N4 blocked |
| Existing reserve? | No — new vs Cycle 8 AMEND PASS |
| Return path | Cycle 8 Delivery AMEND |
| Morris gate required? | yes |
| Product fix in Cycle 9? | NO |

Root observation: HumanDecision GO advances durable LPS; process-local Proposal contextSnapshot becomes STALE; fixture prepare fail-closed. Fail-closed is correct authority posture; Option A happy path still cannot complete through fixture prepare.

---

## 14. Negative Authority Matrix

| ID | Scenario | Result |
| --- | --- | --- |
| N1 | Recommendation != HumanDecision | PASS (proposal stage) |
| N2 | rejected NO_GO | PASS |
| N3 | unresolved contract / no Attempt | BLOCKED by QA-PRE-M6-01 |
| N4 | duplicate Attempt start | BLOCKED by QA-PRE-M6-01 |
| N5 | stale Recommendation ID mismatch | BROWSER PROOF UNAVAILABLE |
| N6 | blocked pre-Attempt | BROWSER PROOF UNAVAILABLE |
| N7 | failed Attempt | BROWSER PROOF UNAVAILABLE |
| N8 | timeout Attempt | BROWSER PROOF UNAVAILABLE |
| N9 | cancelled Attempt | BROWSER PROOF UNAVAILABLE |
| N10 | missing Evidence | BROWSER PROOF UNAVAILABLE |
| N11 | rehydrate failure injection | BROWSER PROOF UNAVAILABLE |
| N12 | Recovery no fake conversation | PASS |

---

## 15. G-UX-11 Exit Proof

G-UX-11 = FAIL / OPEN

Reasons: happy path incomplete at F6; mandatory negatives incomplete; blocking product gap present.

---

## 16. Accessibility Bounded QA

F1 heading + create CTA visible; Project assistant input focusable. No WCAG compliance claim.

---

## 17. Runtime Capture Inventory

Provenance: CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT

```jsonl
{"id":"R01-F1-Projects","file":"R01-F1-Projects.png","screen":"F1","state":"Projects entry","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:30:55.538Z","sha256":"110d44275eb08824860b853ceea628f0ff81c135131a65a45724152e156f5aa6","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R02-F2-Project-1440","file":"R02-F2-Project-1440.png","screen":"F2","state":"Project principal @1440","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:30:57.075Z","sha256":"decdc5b4d4bd60d0b18f6c0f330d990f60be9b5da270824713c40e1a49a4b1bd","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R03-F3-Project-1280","file":"R03-F3-Project-1280.png","screen":"F3","state":"Project principal @1280","viewport":{"width":1280,"height":1024},"timestamp":"2026-08-16T17:30:57.345Z","sha256":"e4a12d8ddf61d260aadbdfec03e96dc1d96814a3579d04d24851b1e80136e585","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R04-F4-Qualification","file":"R04-F4-Qualification.png","screen":"F4","state":"Qualification + Proposal ≠ HumanDecision","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:30:57.460Z","sha256":"a210a276af70ed5d45afdc064edb5c7feb6e36e44e1ce6b4e548742166a9f8a1","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R05-F5-HumanDecision","file":"R05-F5-HumanDecision.png","screen":"F5","state":"HumanDecision GO recorded","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:30:57.606Z","sha256":"426578e39ea664426602e7277ddd6dbb9cd8a4d15eaa088a425adaa1c3f12908","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R06-F6-Prepare-STALE-Blocked","file":"R06-F6-Prepare-STALE-Blocked.png","screen":"F6","state":"QA-PRE-M6-01 Proposal STALE blocks fixture prepare after GO","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:30:57.709Z","sha256":"e1bee87146abefdf908924d6f6c8172ee08bb835d236b065a1b3066feaff54da","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R09-F9-History-After-GO","file":"R09-F9-History-After-GO.png","screen":"F9","state":"History after GO (pre-Attempt)","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:30:57.740Z","sha256":"56ef160f0a06eadc016b4e095f01a7ebcd2e6963dd5e2c8c21ae4f3cd9f6a2fc","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11A-F11-LPS-Closed-1024","file":"R11A-F11-LPS-Closed-1024.png","screen":"F11A","state":"LPS drawer closed @1024","viewport":{"width":1024,"height":900},"timestamp":"2026-08-16T17:30:58.062Z","sha256":"3a1349a178eae8a5bbe5b4221880049e37658df3fe3e70ce03bbe7eda7f27f2a","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11B-F11-LPS-Open-1024","file":"R11B-F11-LPS-Open-1024.png","screen":"F11B","state":"LPS drawer open @1024","viewport":{"width":1024,"height":900},"timestamp":"2026-08-16T17:30:58.150Z","sha256":"248559a08c7aeaea0055cbbcafe0524802dbbfae2e6679c14ba200f584eee11f","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R12-Sub768-Conversation","file":"R12-Sub768-Conversation.png","screen":"F11/<768","state":"Conversation @767","viewport":{"width":767,"height":900},"timestamp":"2026-08-16T17:30:58.512Z","sha256":"f69b2a74c79136e45f1d71485209bee2023c5199f2e92b26dc2e9b2512808167","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R10-F10-Recovery","file":"R10-F10-Recovery.png","screen":"F10","state":"Recovery after reload post-qualification","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:31:00.676Z","sha256":"ea3e0a124e2ce8ca56927552b3ae72337a9c40941597d893d2cf62e8f0274baf","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R01-F1-Projects","file":"R01-F1-Projects.png","screen":"F1","state":"Projects entry","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:39.379Z","sha256":"110d44275eb08824860b853ceea628f0ff81c135131a65a45724152e156f5aa6","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R02-F2-Project-1440","file":"R02-F2-Project-1440.png","screen":"F2","state":"Project principal @1440","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:41.784Z","sha256":"d9d46ef8a52ecb69a68b5e37f95fc951f3d26d45613ddd01549b21c0e4948523","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R03-F3-Project-1280","file":"R03-F3-Project-1280.png","screen":"F3","state":"Project principal @1280","viewport":{"width":1280,"height":1024},"timestamp":"2026-08-16T17:40:42.039Z","sha256":"0ee77ed770aa15b54d481dbeb32014853030c075ecd7d4c1a8b2d5c41962244d","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R04-F4-Qualification","file":"R04-F4-Qualification.png","screen":"F4","state":"Qualification + Proposal ≠ HumanDecision","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:42.155Z","sha256":"6b14076398af21445eb070ffd5221d15c5d872e81e085d31f79188b22fd2347e","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R05-F5-HumanDecision","file":"R05-F5-HumanDecision.png","screen":"F5","state":"HumanDecision GO recorded","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:42.252Z","sha256":"9f965d949c46856256a77c3103dde4ffb85e1819c25012628f610524be84ecba","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R06-F6-Prepare-STALE-Blocked","file":"R06-F6-Prepare-STALE-Blocked.png","screen":"F6","state":"QA-PRE-M6-01 Proposal STALE blocks fixture prepare after GO","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:42.351Z","sha256":"a223333b11ecdc38bd1d5026e70c45b20a0445290f016a1d10cbdd56a8d51062","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R09-F9-History-After-GO","file":"R09-F9-History-After-GO.png","screen":"F9","state":"History after GO (pre-Attempt)","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:42.384Z","sha256":"5f6f3e974235b97d12bbd21c545d2ff08fa6c7deffb89c5c4185621dd13c2698","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11A-F11-LPS-Closed-1024","file":"R11A-F11-LPS-Closed-1024.png","screen":"F11A","state":"LPS drawer closed @1024","viewport":{"width":1024,"height":900},"timestamp":"2026-08-16T17:40:42.689Z","sha256":"96d64131f1ecf6aadb17e91e1c542b123f8e3544d56e7534e28e02c6e569f5c3","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11B-F11-LPS-Open-1024","file":"R11B-F11-LPS-Open-1024.png","screen":"F11B","state":"LPS drawer open @1024","viewport":{"width":1024,"height":900},"timestamp":"2026-08-16T17:40:42.778Z","sha256":"a63401e8ce878fc87675b46290001d2933c476843d9d585a433324b4195079d6","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R12-Sub768-Conversation","file":"R12-Sub768-Conversation.png","screen":"F11/<768","state":"Conversation @767","viewport":{"width":767,"height":900},"timestamp":"2026-08-16T17:40:43.161Z","sha256":"15e5e96dabe0f2a8e5464e610a17777ae8b75078cd96f7b891cafaae47e023cb","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R10-F10-Recovery","file":"R10-F10-Recovery.png","screen":"F10","state":"Recovery after reload post-qualification","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:40:47.411Z","sha256":"314a0fed714957010b25db2b7b48551f77bef5e522d322d887c624ad92a475d0","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R01-F1-Projects","file":"R01-F1-Projects.png","screen":"F1","state":"Projects entry","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:01.255Z","sha256":"110d44275eb08824860b853ceea628f0ff81c135131a65a45724152e156f5aa6","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R02-F2-Project-1440","file":"R02-F2-Project-1440.png","screen":"F2","state":"Project principal @1440","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:02.808Z","sha256":"6cd51e0e56f8bb808ac951a80d43f94611e19b0d4d2417ebd19575895f950e1c","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R03-F3-Project-1280","file":"R03-F3-Project-1280.png","screen":"F3","state":"Project principal @1280","viewport":{"width":1280,"height":1024},"timestamp":"2026-08-16T17:42:03.060Z","sha256":"455e3234d747cb73a46d73a28700d0c14874dad3ca7d5a7579137050e2c837ff","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R04-F4-Qualification","file":"R04-F4-Qualification.png","screen":"F4","state":"Qualification + Proposal ≠ HumanDecision","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:03.158Z","sha256":"799bd9ddd504d1b719f40b01bff64a6e7bdcd84a0f4bc0b9bb7403fad597ab8f","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R05-F5-HumanDecision","file":"R05-F5-HumanDecision.png","screen":"F5","state":"HumanDecision GO recorded","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:03.262Z","sha256":"44c3589ee4ec0a240c7298b5f520850db2e41a20ca79eba20517bcca7384361a","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R06-F6-Prepare-STALE-Blocked","file":"R06-F6-Prepare-STALE-Blocked.png","screen":"F6","state":"QA-PRE-M6-01 Proposal STALE blocks fixture prepare after GO","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:03.356Z","sha256":"cf8ba287ddfd2497828c071a15ab1eb603b308192d0ad90261da1b2f07c46ac3","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R09-F9-History-After-GO","file":"R09-F9-History-After-GO.png","screen":"F9","state":"History after GO (pre-Attempt)","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:03.390Z","sha256":"bebf709f94a4b0e5516278f04beff519d9fb9b7f7c6655ab70e95f88aa63cff5","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11A-F11-LPS-Closed-1024","file":"R11A-F11-LPS-Closed-1024.png","screen":"F11A","state":"LPS drawer closed @1024","viewport":{"width":1024,"height":900},"timestamp":"2026-08-16T17:42:03.691Z","sha256":"afe8e17f7326c00832d11cf6d15731b7744d15a50969ee19a33cb6109db0c8c0","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11B-F11-LPS-Open-1024","file":"R11B-F11-LPS-Open-1024.png","screen":"F11B","state":"LPS drawer open @1024","viewport":{"width":1024,"height":900},"timestamp":"2026-08-16T17:42:03.783Z","sha256":"3dd309e50f4fad725b3474dcb40ed3742bae35c643560d9094e2186f1db370cc","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R12-Sub768-Conversation","file":"R12-Sub768-Conversation.png","screen":"F11/<768","state":"Conversation @767","viewport":{"width":767,"height":900},"timestamp":"2026-08-16T17:42:04.128Z","sha256":"304131a030ac6309d5abc78a23e11eb8e8312682a8da2821c0bd3b1571400470","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R10-F10-Recovery","file":"R10-F10-Recovery.png","screen":"F10","state":"Recovery after reload post-qualification","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T17:42:06.375Z","sha256":"f8a26114fc5eac66fe8b1d6fed513f755469511c0fc6aadacc3474cf9c1f5f15","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
```

Count: 11 screenshots

Missing vs ideal: F7 variants; F8 post-execute (blocked by QA-PRE-M6-01).

---

## 18. Visual Reference Availability

- Path: .tmp-sfia-review/figma/manual-evidence/
- Count: 19 PNGs
- Handoff inventory 69106c82: 19 rows
- SHA-256 verification: 19/19 MATCH

Local hashes:
```
0b5302d44af6a7a459a607b3adbd827406f5ca1f1b343a27621407fd837dfd1e  F7-Execution-EnCours.png
0c0a5774afe9e03ff882fc58338c44420a8c836d24d4f92c75402a5638f389d3  F11A-Responsive-LPS-Ferme.png
170869fa4784e9f87f2b7922bd9de0b4cc8af524e01fed87a0310dca3dfc83f4  F3-Projet-1280.png
5c08dc4417cea6b3d9d7ec6208881da65e070717dc2890989e1614e6f2422274  D1-Feuille-Conception_part1.png
60bb98adb1177bab5d595cc97c00b40612f2e7b89e7c5c4e21480f5e228b72d1  F9-Historique.png
76c1e5c8a31e138ea7edd31c0360d43d7365f7815223b1866fc43faabf81cef3  F10-Reprise.png
7ce087fcc26964ddbf9166089906704b0ae1a7a7fee7251883e0d6538a9c6f58  F8-Revue-Recommandation.png
81ba003c4ea68410d687cf56e84132f41edea1ce13961a02ca44981bae751781  F8-Recommandation-Perimee.png
9a705353b09d4a225cf0f32aaf285ec1533a9feef2eafd7c040b96ec80521cdd  F7-Timeout.png
a0f79808e897d06851f20cb1d48abf2bd0bffac740899ceb48aaa31df2187e5d  F2-Projet-1440.png
b167e91fa73d6cc279aa1a665d237adb810c4cb787c4e302c7bf60e49588b21a  F6-Contrat-Confirmation.png
b375eb3e82e170fcdf1492df30e80c8d797332e9d1afee914c6ac3238f9be897  F7-Annule.png
bb264b5ad16df4f6f2639039edcb97033a5bcd3146c24b0395a2b2f0258b9695  F1-Projets.png
bccf975dad0b8df6e565c5ee3a4e18a9bfb81c3248a60d5228993ff028bf1ad7  D1-Feuille-Conception_part2.png
be5ab7a201b8e9a7aa58ad9be3fc47e5964cba6d4a2cb5ab2b268a5fdb0b187a  F5-Decision.png
c40a3409484ba749744b6199054c6e61070d23c52b3c2342c9e6277805c8798a  F4-Qualification.png
cf546a24204fa0e842aa8e6bc9c7616a312bf48d3bb5c35ec3854abb452b8848  F7-Echec.png
e24b9a091708f6b21fb20534864913895119a7a979eb1a43c6e41fa496d963f5  F11B-Responsive-LPS-Ouvert.png
fb362e7674d35e11bb81f80a2f5ea2d52d60db3b8e0139e822008b3a71ae9f62  F7-Bloque-Avant-Execution.png
```

Inventory excerpt:
```
72:| E01 | `D1-Feuille-Conception_part1.png` | 3840×2486 | `5c08dc4417cea6b3d9d7ec6208881da65e070717dc2890989e1614e6f2422274` | 691776 o | Feuille part1 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | États & composants A–I |
73:| E02 | `D1-Feuille-Conception_part2.png` | 3840×2486 | `bccf975dad0b8df6e565c5ee3a4e18a9bfb81c3248a60d5228993ff028bf1ad7` | 635740 o | Feuille part2 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Objets gouvernés + règle <768 |
74:| E03 | `F1-Projets.png` | 3840×2486 | `bb264b5ad16df4f6f2639039edcb97033a5bcd3146c24b0395a2b2f0258b9695` | 517238 o | F1 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Projects / Entry — confirmation contenu |
75:| E04 | `F10-Reprise.png` | 3840×2486 | `76c1e5c8a31e138ea7edd31c0360d43d7365f7815223b1866fc43faabf81cef3` | 529851 o | F10 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Recovery — contrôle ciblé |
76:| E05 | `F11A-Responsive-LPS-Ferme.png` | 3840×2486 | `0c0a5774afe9e03ff882fc58338c44420a8c836d24d4f92c75402a5638f389d3` | 619291 o | F11A | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Responsive LPS fermé |
77:| E06 | `F11B-Responsive-LPS-Ouvert.png` | 3840×2486 | `e24b9a091708f6b21fb20534864913895119a7a979eb1a43c6e41fa496d963f5` | 1025072 o | F11B | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Responsive LPS ouvert |
78:| E07 | `F2-Projet-1440.png` | 3840×2486 | `a0f79808e897d06851f20cb1d48abf2bd0bffac740899ceb48aaa31df2187e5d` | 677268 o | F2 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Core shell 1440 — non rejugé sauf contradiction |
79:| E08 | `F3-Projet-1280.png` | 3840×2486 | `170869fa4784e9f87f2b7922bd9de0b4cc8af524e01fed87a0310dca3dfc83f4` | 676833 o | F3 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Core shell 1280 |
80:| E09 | `F4-Qualification.png` | 3840×2486 | `c40a3409484ba749744b6199054c6e61070d23c52b3c2342c9e6277805c8798a` | 768025 o | F4 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Qualification / Proposal |
81:| E10 | `F5-Decision.png` | 3840×2486 | `be5ab7a201b8e9a7aa58ad9be3fc47e5964cba6d4a2cb5ab2b268a5fdb0b187a` | 762445 o | F5 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | HumanDecision |
82:| E11 | `F6-Contrat-Confirmation.png` | 3840×2486 | `b167e91fa73d6cc279aa1a665d237adb810c4cb787c4e302c7bf60e49588b21a` | 761384 o | F6 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | ExecutionContract + Confirmation |
83:| E12 | `F7-Annule.png` | 3840×2486 | `b375eb3e82e170fcdf1492df30e80c8d797332e9d1afee914c6ac3238f9be897` | 604248 o | F7 Annulé | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | contrôle critique |
84:| E13 | `F7-Bloque-Avant-Execution.png` | 3840×2486 | `fb362e7674d35e11bb81f80a2f5ea2d52d60db3b8e0139e822008b3a71ae9f62` | 586181 o | F7 Bloqué pré-Attempt | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | contrôle critique |
85:| E14 | `F7-Echec.png` | 3840×2486 | `cf546a24204fa0e842aa8e6bc9c7616a312bf48d3bb5c35ec3854abb452b8848` | 614673 o | F7 Échec | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | contrôle critique |
86:| E15 | `F7-Execution-EnCours.png` | 3840×2486 | `0b5302d44af6a7a459a607b3adbd827406f5ca1f1b343a27621407fd837dfd1e` | 607588 o | F7 En cours | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Attempt running |
87:| E16 | `F7-Timeout.png` | 3840×2486 | `9a705353b09d4a225cf0f32aaf285ec1533a9feef2eafd7c040b96ec80521cdd` | 613493 o | F7 Timeout | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | contrôle critique |
88:| E17 | `F8-Recommandation-Perimee.png` | 3840×2486 | `81ba003c4ea68410d687cf56e84132f41edea1ce13961a02ca44981bae751781` | 754059 o | F8 stale | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Recommendation périmée |
89:| E18 | `F8-Revue-Recommandation.png` | 3840×2486 | `7ce087fcc26964ddbf9166089906704b0ae1a7a7fee7251883e0d6538a9c6f58` | 740535 o | F8 courante | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | Recommendation courante |
90:| E19 | `F9-Historique.png` | 3840×2486 | `60bb98adb1177bab5d595cc97c00b40612f2e7b89e7c5c4e21480f5e228b72d1` | 596420 o | F9 | MORRIS-PROVIDED MANUAL VISUAL EVIDENCE | History — contrôle ciblé |
```

MCP Figma not required. Figma mutations: 0.

---

## 19. Figma vs Runtime Matrix (summary)

| Frame | Status | Notes |
| --- | --- | --- |
| F1 | PARTIELLEMENT CONFORME | Entry exists; runtime honesty banner denser than Freeze |
| F2/F3 | PARTIELLEMENT CONFORME | Conversation-dominant + LPS widths OK |
| F4 | PARTIELLEMENT CONFORME | Qualification/Proposal present |
| F5 | PARTIELLEMENT CONFORME | HumanDecision GO explicit |
| F6 | NON CONFORME (functional) | Prepare blocked STALE |
| F7 | NON VERIFIABLE | No Attempt runtime |
| F8 | NON VERIFIABLE | No post-execute Recommendation |
| F9 | PARTIELLEMENT CONFORME | Durable history; not transcript |
| F10 | PARTIELLEMENT CONFORME | Contextual recovery; no fake conversation |
| F11A/B / <768 | PARTIELLEMENT CONFORME | Drawer + 767 OK; M-04 ACCEPTED != CLOSED |

Visual verdict: FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED

Not: FIGMA TO RUNTIME ALIGNED — READY

---

## 20. Frame Verdicts

F1 PASS; F2/F3 PASS; F4 PASS; F5 PASS; F6 FAIL; F7 FAIL/not reached; F8 FAIL/not reached; F9 PASS; F10 PASS; F11 PASS.

---

## 21. G-UX / Reserves Status

| Item | Status |
| --- | --- |
| G-UX-08 | OPEN / DEFERRED (AMEND message PASS) |
| G-UX-09 | KEEP RESERVE |
| Confirmation | KEEP RESERVE |
| M5-C | unchanged |
| G-UX-10 | prior unit fix; browser stale path UNAVAILABLE |
| G-UX-11 | FAIL / OPEN |
| New | QA-PRE-M6-01 BLOCKING |

---

## 22. Debt / Exit

| Debt | Exit |
| --- | --- |
| QA-PRE-M6-01 | Cycle 8 AMEND — reconcile Proposal freshness with Decision/LPS write OR durable M3 prepare→confirm path |
| F7/F8 browser variants | After F6 restored; still may need Morris gate if no UI seams |
| Historical harness tsx missing | Env regularization outside Option A Delivery |

---

## 23. Campaign Limitations / Reproducibility

Fake provider only; REAL=0; unique project names; shared Product SQLite.

```
cd projects/sfia-studio/app
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e -- e2e/studio-option-a.spec.ts
# captures -> ../../../.tmp-sfia-review/runtime-captures/
```

---

## 24. Anti-claims

Playwright Option A PASS != G-UX-11 satisfied
Vitest PASS != Pre-M6 accepted
F1-F5 PASS != F6-F8 PASS
STALE fail-closed != Delivery complete
Recovery PASS != Conversation durable
runtime v3 NON ADOPTED; REAL = 0; UAT not consumed

---

## 25. Safety Counters

| Counter | Value |
| --- | --- |
| Candidate project files at entry | 53 |
| QA test files modified | 2 |
| QA test files created | 0 |
| Production files mutated during QA | 0 |
| New persistence/migration/engine/harness | 0 |
| Playwright config / package changes | 0 |
| Figma mutations | 0 |
| REAL | 0 |
| Project staging/commits/pushes/PR/merge | 0 |
| Runtime screenshots | 11 |
| Negative paths tested | 4 |
| Negative paths unavailable/blocked | 8+ |
| Review Handoff | 1 bounded L3 |

---

## 26. QA E2E Spec (full)

```typescript
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * Cycle 9 QA — PRE-M6 Option A (production READ ONLY).
 *
 * Env required (via process.env → playwright webServer spread):
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *
 * Known product finding (do not fix in this cycle):
 *   QA-PRE-M6-01 — After HumanDecision GO, LPS advances; process-local Proposal
 *   becomes STALE; fixture F3 prepare fails closed.
 */

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

function runId(): string {
  return `c9-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function capture(
  page: Page,
  id: string,
  meta: {
    screen: string;
    state: string;
    viewport: { width: number; height: number };
  },
): Promise<string> {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      screen: meta.screen,
      state: meta.state,
      viewport: meta.viewport,
      timestamp: new Date().toISOString(),
      sha256,
      provenance: "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT",
    })}\n`,
  );
  return sha256;
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA Option A ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill("Cycle 9 QA validation parcours Option A");
  await page
    .locator("#project-context")
    .fill("Contexte E2E local fake provider — REAL=0 — preuve G-UX-11.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
  await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
  return name;
}

async function sendStructuring(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une proposition d'architecture __F2_STRUCTURING__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
}

test.describe("Cycle 9 — Option A happy path through F5 + F6 STALE gap", () => {
  test.describe.configure({ timeout: 180_000 });

  test("F1→F5 PASS; F6 fixture prepare blocked by Proposal STALE after GO", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });

    await page.goto("/studio");
    await expect(page.getByTestId("studio-shell")).toBeVisible();
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await capture(page, "R01-F1-Projects", {
      screen: "F1",
      state: "Projects entry",
      viewport: { width: 1440, height: 1024 },
    });

    await createUniqueProject(page, suffix);
    await expect(page.getByTestId("project-recovery-banner")).toHaveCount(0);
    await expect(page.getByTestId("project-durability-hint")).toBeVisible();

    const box1440 = await page.getByTestId("project-lps-column").boundingBox();
    expect(box1440).toBeTruthy();
    if (box1440) {
      expect(box1440.width).toBeGreaterThanOrEqual(360);
      expect(box1440.width).toBeLessThanOrEqual(420);
    }
    await capture(page, "R02-F2-Project-1440", {
      screen: "F2",
      state: "Project principal @1440",
      viewport: { width: 1440, height: 1024 },
    });

    await page.setViewportSize({ width: 1280, height: 1024 });
    await page.waitForTimeout(200);
    const box1280 = await page.getByTestId("project-lps-column").boundingBox();
    expect(box1280).toBeTruthy();
    if (box1280) {
      expect(box1280.width).toBeGreaterThanOrEqual(300);
      expect(box1280.width).toBeLessThanOrEqual(360);
    }
    await capture(page, "R03-F3-Project-1280", {
      screen: "F3",
      state: "Project principal @1280",
      viewport: { width: 1280, height: 1024 },
    });

    await page.setViewportSize({ width: 1440, height: 1024 });
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
    await capture(page, "R04-F4-Qualification", {
      screen: "F4",
      state: "Qualification + Proposal ≠ HumanDecision",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/GO/i);
    await capture(page, "R05-F5-HumanDecision", {
      screen: "F5",
      state: "HumanDecision GO recorded",
      viewport: { width: 1440, height: 1024 },
    });

    // QA-PRE-M6-01 — fixture prepare after GO fails closed (Proposal STALE)
    await expect(page.getByTestId("f3-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-error")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-error")).toContainText(/STALE/i);
    await expect(page.getByTestId("project-assistant-f3-contract")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06-F6-Prepare-STALE-Blocked", {
      screen: "F6",
      state: "QA-PRE-M6-01 Proposal STALE blocks fixture prepare after GO",
      viewport: { width: 1440, height: 1024 },
    });

    // History / LPS still readable
    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await capture(page, "R09-F9-History-After-GO", {
      screen: "F9",
      state: "History after GO (pre-Attempt)",
      viewport: { width: 1440, height: 1024 },
    });

    // Responsive F11
    await page.setViewportSize({ width: 1024, height: 900 });
    await page.waitForTimeout(250);
    await expect(page.getByTestId("lps-drawer-toggle")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    await capture(page, "R11A-F11-LPS-Closed-1024", {
      screen: "F11A",
      state: "LPS drawer closed @1024",
      viewport: { width: 1024, height: 900 },
    });
    await page.getByTestId("lps-drawer-toggle").click();
    await expect(page.getByTestId("lps-drawer-toggle")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await capture(page, "R11B-F11-LPS-Open-1024", {
      screen: "F11B",
      state: "LPS drawer open @1024",
      viewport: { width: 1024, height: 900 },
    });
    await page.getByTestId("lps-drawer-close").click();

    await page.setViewportSize({ width: 767, height: 900 });
    await page.waitForTimeout(250);
    await expect(page.getByTestId("project-conversation-main")).toBeVisible();
    await expect(page.getByTestId("lps-drawer-toggle")).toBeVisible();
    await capture(page, "R12-Sub768-Conversation", {
      screen: "F11/<768",
      state: "Conversation @767",
      viewport: { width: 767, height: 900 },
    });
  });
});

test.describe("Cycle 9 — Negative authority reachable", () => {
  test.describe.configure({ timeout: 120_000 });

  test("N2 rejected HumanDecision NO_GO blocks prepare", async ({ page }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n2-${suffix}`);
    await sendStructuring(page);
    await page.getByTestId("f2-decide-NO_GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/NO_GO|NO-GO/i);
    await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  });

  test("N1 Recommendation remains distinct from HumanDecision at Proposal stage", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n1-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
  });

  test("N3/N4 blocked by QA-PRE-M6-01 — document dependency", async () => {
    // Fixture prepare after GO is STALE; confirm/duplicate Attempt paths unreachable.
    expect(true).toBe(true);
    // eslint-disable-next-line no-console
    console.log(
      "BROWSER PROOF BLOCKED BY QA-PRE-M6-01: N3 unresolved contract after prepare, N4 duplicate Attempt start, F7/F8 execute path.",
    );
  });

  test("N12 Recovery honesty — reload does not rebuild conversation", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n12-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-gate")).toBeVisible();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    // After F2 LPS advance, recovery may appear
    const recovery = page.getByTestId("project-recovery-banner");
    if ((await recovery.count()) > 0) {
      await capture(page, "R10-F10-Recovery", {
        screen: "F10",
        state: "Recovery after reload post-qualification",
        viewport: { width: 1440, height: 1024 },
      });
    }
  });

  test("G-UX-08 AMEND deferred message only", async ({ page }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `amend-${suffix}`);
    await sendStructuring(page);
    await page.getByTestId("f2-decide-AMEND").click();
    await expect(
      page.getByText(/G-UX-08|différé|AMEND complète/i).first(),
    ).toBeVisible({ timeout: 45_000 });
  });
});

test.describe("Cycle 9 — BROWSER PROOF UNAVAILABLE matrix", () => {
  test("N5–N11 + F7 variants unavailable without production seams", async () => {
    const unavailable = [
      "N5 stale Recommendation Evidence-ID mismatch",
      "N6 blocked before execution via UI",
      "N7 failed Attempt via UI",
      "N8 timeout Attempt via UI",
      "N9 cancelled Attempt via UI",
      "N10 missing Evidence injection",
      "N11 durable rehydrate failure injection",
      "F7 execute success path blocked by QA-PRE-M6-01",
      "F8 post-execute recommendation path blocked by QA-PRE-M6-01",
    ];
    expect(unavailable.length).toBeGreaterThan(0);
    // eslint-disable-next-line no-console
    console.log("BROWSER PROOF UNAVAILABLE:\n" + unavailable.map((s) => `- ${s}`).join("\n"));
  });
});

test.describe("Cycle 9 — accessibility bounded smoke", () => {
  test("F1 and Project principal expose structure", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/studio");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const suffix = runId();
    await createUniqueProject(page, `a11y-${suffix}`);
    await page.getByTestId("project-assistant-input").focus();
    await expect(page.getByTestId("project-assistant-input")).toBeFocused();
  });
});

```

## 27. Final QA Verdict

CYCLE 9 QA FAIL — BLOCKING PRODUCT GAP DETECTED — RETURN TO CYCLE 8 DELIVERY AMEND — NO PRODUCT FIX PERFORMED

PRE-M6 UI DELIVERY OPTION A —
CYCLE 9 QA FAIL —
QA-PRE-M6-01 BLOCKING (Proposal STALE after HumanDecision GO blocks fixture F3 prepare) —
G-UX-11 FAIL / OPEN —
HAPPY PATH INCOMPLETE AT F6 —
MANDATORY F7/F8/N3-N11 BROWSER PROOFS INCOMPLETE —
FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
NO M6 —
RUNTIME V3 NON ADOPTED —
ZERO REAL —
READY FOR CHATGPT REVIEW OF QA FAIL / RETURN PATH

---

## 28. Recommended Next Gate

DO NOT open Morris Pre-M6 UAT.

Next: Cycle 8 Delivery AMEND targeting QA-PRE-M6-01 only (bounded), then re-enter Cycle 9 QA.

M6 remains NOT AUTHORIZED.
