# ChatGPT Review Pack — P6 HUMAN QA ACTIVATION READINESS (COMPLETE)

- timestamp: 2026-10-09T07:19:31Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- scope: COG01 + F01 + UI05
- cycle: 9 — QA / validation
- typology: RUN / QA readiness
- profile: CRITICAL
- Morris GO consumed: GO P6 ACTIVATION READINESS — PHASE 1 NON-REAL BORNÉ
- GO P6 REAL — BOUNDED: NOT ACTIVATED this execution
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- prior preflight handoff: 1320907656f0728642bb267eeefcde9500810f10
- project creation: NONE
- provider Nora REAL call: NONE
- START / HumanDecision: NONE
- Product mutation: NONE
- .env.local edited: NO
- server kill/restart: NO
- P6 PASS / PHASE 1 PASS / runtime v3 ADOPTED: NOT CLAIMED
- Human QA executed: NO

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
PRIOR_HANDOFF=1320907656f0728642bb267eeefcde9500810f10
STAGED=(empty)
```

Continuity: PASS — matches prior preflight tip. Worktree remains dirty with local COG01/F01/UI05/UI-01…04 candidates (preserved; not committed).

## Sources / continuity

- Consumed preflight pack @ handoff `13209076` (READY WITH RESERVES).
- Local corrections on disk preserved.
- Convergence tip unchanged: P6 Human QA not executed; runtime v3 NON ADOPTED.

---

## BLOC 1 — Runtime Version Verification

| Fact | Evidence |
|------|----------|
| Listener | PID **41720** `next-server (v15.5.20)` on `[::1]:3020` |
| Parent | PID **41717** `node …/projects/sfia-studio/app/node_modules/.bin/next dev --port 3020 --hostname localhost` |
| Grandparent | PID **41697** `npm run dev --hostname localhost --port 3020` |
| Mode | **next dev** (HMR), NOT `next start` |
| CWD | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app` = expected workspace |
| Started | Fri Oct 9 **07:51:42** 2026 |
| Correction mtimes | F01/UI05 sources **07:40–07:41** (< server start) |
| HTTP | /login **200**; /studio **307** → `/login?error=NO_SESSION`; /studio/projects/new **307** |
| Product DB fd | open on configured `…/new-project-campaign-01/product/oa-product.sqlite` |

### Served-version proof (beyond port/HTTP)

Compiled Next bundle for project workspace contains local correction markers:

| Marker | `.next/server/.../[id]/page.js` | client chunk |
|--------|-----------------------------------|--------------|
| `data-ui05-object` | 4 | 4 |
| `suppress_mint` | 2 | 0 (server F01 path) |
| `evaluateExplicitStartForSubject` | 6 | 0 |
| `composeF2PilotFacingNarrative` | 17 | 0 |
| `resolveChatFirstCycleStartGate` | 12 | 0 |

**RUNTIME VERSION VERIFIED — LOCAL COG01/F01/UI05 SERVED** via `next dev` from the QA worktree, with compiled `.next` markers matching disk corrections.

Caveat: verification is for this PID/session. If Morris restarts later without this worktree, re-verify.

Reconciliation if ever NOT VERIFIED (not needed now): Morris stops current `npm run dev` intentionally under a future GO, relaunches from `projects/sfia-studio/app` on :3020, re-check markers — **not executed this cycle**.

---

## BLOC 2 — Cursor REAL Safety

| Item | Finding |
|------|---------|
| `.env.local` `SFIA_STUDIO_CURSOR_REAL` | **PRESENT = 1** (not edited) |
| `OPS1_CURSOR_REAL` | ABSENT |
| Contract | `isStudioCursorRealEnabled` ⇒ REAL boundary **composed** when flag === "1" (`composeStudioProductRealBoundary`) |
| Launch | Still gated by HD → EC → Confirmation → agent → Gate D → StartExecution; construction ≠ spawn |
| Nora REAL | Distinct — OpenAI/conversation provider; **not** Cursor REAL |
| OFF behavior | Flag ≠ "1" ⇒ `composeStudioProductRealBoundary` returns `undefined` (no REAL wiring) |
| Restart need | Yes — Next loads `.env.local` at process start; change requires Morris restart of `npm run dev` |

**Qualification: UNSAFE** for Human QA activation while flag remains 1.

Not SAFE merely because no Cursor action ran this cycle.

### Morris procedure (manual; NOT executed by Cursor)

1. Edit `projects/sfia-studio/app/.env.local`: set `SFIA_STUDIO_CURSOR_REAL=0` (or remove/comment the line).
2. Stop the current Studio process on :3020 (Morris).
3. Restart: `cd projects/sfia-studio/app && npm run dev -- --hostname localhost --port 3020`.
4. Confirm flag offline before any START / EC execution path.
5. Keep Cursor REAL off until a distinct **GO P6 REAL — BOUNDED** covering Cursor effects is activated.

Impact: disables product Cursor REAL boundary wiring; does not disable Nora/OpenAI by itself; does not mutate Product DB.

---

## BLOC 3 — Authentification / autorité Pilote

| Check | Result |
|-------|--------|
| /login | 200 |
| /studio without session | 307 → `/login?error=NO_SESSION&from=%2Fstudio` |
| Authenticated session | **WAITING HUMAN LOGIN** |
| Cookies/secrets read | NOT DONE (forbidden) |
| Login bypass | NOT ATTEMPTED |

Authority config (static, no mutation):

| Env | Status |
|-----|--------|
| `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` (canonical) | ABSENT |
| `SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY` | ABSENT |
| `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` (legacy) | PRESENT = 1 |

Precedence (`localSingleUserAuthority.ts`): canonical if defined; else legacy may enable Pilot **or** Morris helper separately (single-grant each). Legacy=1 ⇒ Pilot helper enabled for START/HD paths. **≠** runtime v3 governance adoption.

Human actions: Morris logs into Studio with authorized GitHub account; optionally set canonical `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY=1` (requires restart) for clarity over legacy.

---

## BLOC 4 — Deterministic validations (executed)

Isolation demonstrated before run:
- F01 / corrProof01 / candidateTrajectoryCycleStart: `fs.mkdtemp` product DB under `os.tmpdir()`; `OPS1_CONVERSATION_PROVIDER=fake`; OPENAI key deleted in hooks.
- COG01: pure unit composer (no DB).
- UI03/UI04/UI05: jsdom RTL (no Product DB, no provider).
- Test process env forced: `SFIA_STUDIO_CURSOR_REAL=` / `OPS1_CURSOR_REAL=` / fake provider.
- Product DB before/after: HQ-01 cycles **5→5**, projects **21→21**.

### Results this cycle

| File | Tests | Result |
|------|------:|--------|
| `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts` | 18 | PASS |
| `p6.hqa.ui03.noraActivityThread.ui.test.tsx` | 6 | PASS |
| `p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx` | 9 | PASS |
| `p6.hqa.ui05.compactObjectCards.ui.test.tsx` | 8 | PASS |
| `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` | 13 | PASS |
| `corrProof01.d1.conversation.d0.test.ts` | 17 | PASS |
| `candidateTrajectoryCycleStart.d0.test.ts` | 13 | PASS |
| **TOTAL** | **84** | **84 PASS** |

Matches prior “84 PASS” claim **because re-run this cycle** (not inherited).

NOT RUN: global suites; `p6-campaign/*.real.test.ts` (REAL naming / uncontrolled boundaries); Playwright e2e against live Studio; Nora live; any test touching Product DB path.

Impact on readiness: deterministic regression gate **PASS** for COG01/F01/UI05 + trajectory START UoW + corrProof01.

---

## BLOC 5 — Browser / UI05 capture readiness

| Tool | Status |
|------|--------|
| Playwright CLI | 1.61.1 PASS |
| Chromium cache | chromium-1228 PRESENT |
| Desktop viewport config | 1440×1024 PASS |
| Mobile devices | AVAILABLE via Playwright (NOT exercised) |
| reuseExistingServer | true (safe with :3020 up) |
| Auth for captures | WAITING HUMAN LOGIN |
| Figma parity | **NOT CLAIMED** — no runtime captures this cycle |

Capture plan (next Human QA, after login + new project):
1. Recommendation closed 2. Recommendation open 3. Proposal READY_NO_GATE 4. Proposal DECISION_REQUIRED 5. ProductSynthesis (`data-ui05-object=synthesis`) 6. True ExecutionContract only from governed continuity 7. Mobile 8. Long content.
Figma refs: 46:98 / 46:107 / 748×82 — directional only.

---

## BLOC 6 — Isolation QA / HQ-01

Shared Product DB (read-only recheck):
- Path: `…/new-project-campaign-01/product/oa-product.sqlite` (same as process fd)
- projects=21; HQ-01 `prj:6b1151f7-7369-434a-a967-bbfe88c76f53` PRESENT
- HQ-01 cycles=5 Delivery `acknowledged`
- LPS current active; `activeCycleInstanceId=null`

**Logical isolation: SUFFICIENT** for bounded Human QA if protocol followed (new project via UX; never open HQ-01; before/after counts). No separate DB required for Phase 1 **if** discipline held.

STOP — ISOLATION GATE REQUIRED: **NOT triggered**.

Protocol (Morris creates; Cursor does not):
1. Login → `/studio/projects/new`
2. Name e.g. `P6-HQA-COG-F01-UI05-2026-10-09`
3. Record `projectId`; assert ≠ HQ-01 id
4. Baseline: HQ-01 cycles=5; projects=N; record N
5. After scenarios: HQ-01 still 5; new project evidence retained; no delete/reset
6. Second QA project allowed if initial state incompatible

---

## BLOC 7 — Human QA protocol (NOT executed)

A. Morris creates QA project
B. Note projectId + initial state
C. COG01 recommendation + challenge
D. UI05 inspect cards
E. F01 hesitation then refuse without activation
F. Cycle inventory + LPS
G. Prepare trajectory via Product
H. HumanDecision when required
I. START only under applicable REAL/execution GO
J. Verify LPS / CycleInstance / conversation / cards
K. Desktop/mobile captures
L. Session resume + per-finding verdicts

Per-finding Human QA verdicts (future): COG01 / F01 / UI05 / E2E INTEGRATED — each PASS/FAIL/RESERVES. None equals P6 PASS.

---

## Fake / Real Qualification

- Entry: preflight READY WITH RESERVES; deterministic candidates.
- This proof: runtime version verified; Cursor REAL flagged UNSAFE; auth WAITING HUMAN LOGIN; 84 PASS isolated; capture tooling ready; isolation logical OK.
- Out of scope: Human QA; Nora REAL; Cursor REAL execution; P6 PASS; CLOSED findings; HQ-01 disposition; runtime v3 ADOPTED.
- Gates remaining: Cursor REAL mitigation (Morris); human login; **GO P6 REAL — BOUNDED** before Nora live / Cursor effects; execution GO before START/campaign play.

---

## Readiness matrix

| Precondition | Result |
|--------------|--------|
| Git continuity | PASS |
| Local corrections on disk | PASS |
| Runtime serves local COG01/F01/UI05 | PASS (VERIFIED) |
| Cursor REAL safe | FAIL / UNSAFE (flag=1) |
| Auth session | WAITING HUMAN LOGIN |
| Pilot authority usable (legacy) | PASS WITH RESERVE |
| Deterministic 84 PASS | PASS (re-run) |
| Playwright/capture tooling | PASS |
| UI05 Figma parity | NOT RUN |
| HQ-01 isolation protocol | PASS |
| HQ-01 unchanged this cycle | PASS |
| Nora REAL | NOT RUN / GO NOT ACTIVATED |
| Project QA created | NOT RUN |
| START | NOT RUN |

---

## Actions executed vs not

**Executed:** git truth; process/cwd/cmdline/lsof; .next marker counts; env key inspection (no secret values); RO SQLite HQ-01; vitest 7 files / 84 tests; Playwright version/cache; HTTP observe; pack + handoff publish.

**Not executed:** edit .env; kill/restart Studio; createProject; Nora REAL; START; HD; Playwright browser Human QA; Product writes; source edits; project git commit/push.

## Morris actions required (ordered)

1. Set `SFIA_STUDIO_CURSOR_REAL=0` and restart Studio on :3020.
2. Log in (authorized account) — clear WAITING HUMAN LOGIN.
3. Optional: set `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY=1` (canonical) + restart.
4. Obtain/confirm **GO P6 REAL — BOUNDED** (spend envelope) before Nora live.
5. Under execution GO: create QA project manually; run Human QA protocol.

## Verdict

**READY WITH RESERVES — MANUAL ACTIONS REQUIRED.**

Reserves that block “ready for manual project creation” without caveat:
- Cursor REAL still armed (UNSAFE);
- no authenticated Pilot session yet.

After Morris completes (1)+(2), the environment is positioned for **manual project creation subject to Morris REAL gate** before Nora live / START.

---

## Appendix — sanitized diagnostics

```
PID=41720 next-server v15.5.20
PARENT=41717 next dev --port 3020 --hostname localhost
CWD=…/projects/sfia-studio/app
STARTED=2026-10-09 07:51:42
login=200 studio=307 NO_SESSION
CURSOR_REAL=1 (UNSAFE)
LOCAL_PILOT_AUTHORITY=(absent) M3_LOCAL_MORRIS_AUTHORITY=1
PRODUCT_DB=oa-product.sqlite projects=21 hq01_cycles=5 activeCycle=null
vitest=84 PASS (7 files) HQ-01 unchanged
playwright=1.61.1 chromium-1228
```

END OF COMPLETE REVIEW PACK — P6 HUMAN QA ACTIVATION READINESS
