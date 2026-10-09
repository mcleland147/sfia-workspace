# ChatGPT Review Pack — P6 FIRST INTEGRATED HUMAN QA

**Level:** FULL
**Cycle type:** 9 — QA / validation — Human REAL QA (first journey)
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T14:31:13Z
**GO Morris reprise:** REPRISE HUMAN QA P6 — AUTHORIZED
**GO P6 HUMAN QA REAL — BOUNDED:** **NOT CONSUMED** (consolidated gate A–G pending Morris answers)
**Cursor REAL config decision:** ON — **preserved** (not changed; not treated as automatic blocker)
**Verdict:** HUMAN QA NOT EXECUTED — MORRIS REAL GATE PENDING

---

## 0. Identity

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| origin/main | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| Tree HEAD | `ffc00d752e52eb2f9eec13ccf466258103506dbf` |
| Tree main | `ffc00d752e52eb2f9eec13ccf466258103506dbf` |
| Trees equal | **YES** |
| Prior precheck handoff | `c793af0825b6d421af2797277fe507dc0d2d64cd` |
| Paid provider calls this cycle | **NONE** |
| Project create / START / HD by Cursor | **NONE** |
| Product source mutations | **NONE** |

---

## 1. Sources consulted

Cycle template / routing / OM v2.6 · Build Doctrine · Roadmap (R/O) · C1 · Product Simplification 01–04, 07 · local Cycle-14 candidate of `p6-qa-integration-state-and-reserves.md` (**preserved, not modified**) · Doctrine framing pointers · prior handoff @ c793af08 · live process/env/HTTP preflight.

---

## 2. Convergence Pre-check

- PR #572 on main; CI 37931365413 SUCCESS; candidates integrated.
- Human QA first REAL journey **not started** pending consolidated REAL gate.
- Cursor REAL capability **ACTIVE** per Morris config decision; effects remain governed.
- P6 NOT PASS · Runtime v3 NON ADOPTED.
- Next: Morris answers gate A–G → if GO REAL borné → first journey under Pilot control.

---

## 3. Minimal preflight (gaps only)

### G1 Runtime
| Item | Result |
|------|--------|
| Process :3020 | YES — next-server v15.5.20 PID **41720** (uptime ~8h39 from 07:51) |
| CWD | `projects/sfia-studio/app` |
| Source tree vs main | **IDENTICAL** |
| Served revision attestation | **LIMIT** — long-lived `next dev`; no rebuild/version endpoint proof |
| Auto restart | **NOT DONE** (not authorized) |

### G2 Auth / session
| Item | Result |
|------|--------|
| Unauth `/studio` | 307 → `/login?error=NO_SESSION` |
| AUTH SESSION PROVEN | **NO** — Morris must login in browser |
| Credentials in pack | NONE |

### G3 Provider (no paid call)
| Item | Result |
|------|--------|
| `OPS1_CONVERSATION_PROVIDER` | ABSENT → Fake **not** forced |
| `OPENAI_API_KEY` | SET |
| `OPENAI_MODEL` | `gpt-5.6-luna` (routing may select differently on F2 path) |
| Live completion | **NOT EXECUTED** |

### G6 Cursor REAL
| Item | Result |
|------|--------|
| `SFIA_STUDIO_CURSOR_REAL` | **ON** (Morris decision: keep ON) |
| Env changed this cycle | **NO** |
| Implicit external Cursor effect | Not authorized; scenario does not require Cursor executor for New Project welcome |
| Treated as Human QA blocker | **NO** (per this GO) |

### Product DB (read-only)
| Item | Result |
|------|--------|
| Campaign Product DB | EXISTS under `.sfia-exec/new-project-campaign-01/product/` (~8.2 MB) |
| HQ-01 | Not targeted; not mutated |

---

## 4. Consolidated Morris REAL gate — AWAITING ANSWERS

Per Block 2: **REPRISE HUMAN QA AUTHORIZED ≠ GO REAL for paid Nora calls.**

Please confirm **explicitly** (one response covering A–G):

| ID | Ask | Proposed default for this first journey |
|----|-----|----------------------------------------|
| **A. Budget** | Accept envelope ≤ **€10** for Nora REAL of this first journey, knowing **no technical hard cap** (`hardCapEnforced=false`)? | YES / NO + any lower cap |
| **B. Operational control** | Accept: cumulative cost ledger (est./actual), no parallel tabs/retries storms, **STOP** if cost not observable / overrun likely / envelope reached? | YES / NO |
| **C. Data** | Use existing campaign Product DB; create **only a NEW** project via UI; **no HQ-01** mutation? | YES / NO |
| **D. Revision** | Accept Studio instance on tree-identical sources with **attestation limit** (long-lived next dev; no forced restart)? | YES / NO / require restart under separate GO |
| **E. REAL scope** | Authorize Nora REAL **only** for first journey: New Project → Create → Workspace → LPS continuity → first orientation (+ COG01/UI observe; F01 only if stable)? | YES / NO |
| **F. Safety** | No implicit Cursor external execution; Cursor REAL ON does not auto-authorize effects? | YES / NO |
| **G. Scenario** | Confirm scenario P6-HQA-NEWPROJECT-01 + COG01 continuity as specified in the execution brief? | YES / NO + edits |

**Until a clear YES covering A–G (or an explicit alternate GO text):**
`STOP BEFORE REAL CALL`
`GO P6 HUMAN QA REAL — BOUNDED` = **NOT CONSUMED**.

---

## 5. Scenario prepared (NOT EXECUTED)

Steps 1–9 as in Morris brief (New Project → exploratory → refuse → reverse → Create → LPS continuity → workspace chat → UI03–05 observe → F01 only if conditions met).
Morris drives browser; Cursor observes/collects after GO REAL.

---

## 6. Budget / stop protocol (proposed; not yet accepted)

- Envelope ≤ €10 documentary; no hard cap assumed.
- Before each paid turn: check cumulative estimate + remaining.
- STOP on missing observability, likely overrun, concurrent uncontrolled calls, authority anomaly, unexpected Product effect, HQ-01 risk.
- No automatic paid retries.

---

## 7. Fake / Real Qualification

| Item | State |
|------|--------|
| Entry | DETERMINISTIC INTEGRATED + post-merge CI SUCCESS |
| This cycle | PREFLIGHT + GATE PRESENTATION ONLY |
| REAL-BOUNDARY / Human QA | **NOT EXECUTED** |
| P6 PASS / v3 ADOPTED / naturalness PASS / €10 HARD CAP | NOT CLAIMED |

---

## 8. Worktree preservation

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/

```

C14 doc sync candidate preserved. No project commit/push/PR/merge. No Cursor REAL env flip.

---

## 9. Verdict

**HUMAN QA NOT EXECUTED — MORRIS REAL GATE PENDING**

Next: Morris replies to gate A–G → Cursor resumes journey under Pilot control with evidence capture → new Review Pack / handoff.

END OF REVIEW PACK
