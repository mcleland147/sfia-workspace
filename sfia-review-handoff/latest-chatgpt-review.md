# ChatGPT Review Pack — P6 HUMAN QA READINESS PRE-CHECK

**Level:** FULL
**Cycle type:** 9 — QA / validation — Human QA Pre-check
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T14:14:22Z
**GO Morris:** P6 HUMAN QA READINESS PRE-CHECK — AUTHORIZED / CONSUMED (inspection only)
**GO REAL:** NOT GRANTED / NOT CONSUMED
**Verdict:** PRECHECK BLOCKED — REMEDIATION REQUIRED

---

## 0. Identity

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Local branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| Local HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| origin/main | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| Merge reference | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` (PR #572) |
| Prior handoff | `55ffa22897d47c7f03d18e57ea66ec372a18fed6` |
| Product mutations this cycle | **NONE** |
| Paid provider calls | **NONE** |
| Project create / START / HD | **NONE** |

---

## 1. Sources consulted

Cycle template / routing / Source Routing Map / OM v2.6 · Build Doctrine · Roadmap (R/O) · C1 · Product Simplification 01–04, 07 · local Cycle-14 candidate of `p6-qa-integration-state-and-reserves.md` (preserved, not modified this cycle) · Doctrine framing 30/32/33/35/37 pointers · runtime files: `middleware.ts`, `lib/auth/resolveCurrentPilote.ts`, New Project onboarding path, `resolveF2ProductRoutedProvider.ts`, `campaignBudget.ts`, `lib/platform/ai/config.ts`, `lib/vertical-slice-runtime/actions.ts` · handoff @ 55ffa228 · process/port inspection · unauthenticated HTTP probe.

---

## 2. Convergence Pre-check

- PR #572 INTEGRATED; post-merge CI SUCCESS; candidates on main.
- Human QA not executed on this bundle; **P6 NOT PASS**; Runtime v3 **NON ADOPTED**.
- Gaps G1–G8 inspected read-only.
- Exit proof: documented preflight with PASS/PARTIAL/BLOCKED — no mutations.
- Next capacity after remediations + Morris REAL GO: bounded Human QA on a new project.

---

## 3. Gate matrix

| Gate | Verdict | Evidence summary |
|------|---------|------------------|
| G1 Runtime revision | **PARTIAL / NOT PROVEN as served SHA** | Process identified; source tree == merge tree; no restart/build-id proof |
| G2 Auth / Pilot authority | **PARTIAL** | Code+config present; unauth→NO_SESSION; session/authority **not** proven |
| G3 Nora REAL provider | **PARTIAL** | Code routes to OpenAI when Fake unset; key SET; **no live call** |
| G4 Budget / €10 | **PARTIAL → Morris** | Observability yes; **hardCapEnforced=false**; no NP cumulative enforcer |
| G5 QA data isolation | **PARTIAL** | Campaign-scoped Product DB path; pre-existing ~8MB sqlite; not HQ-01 |
| G6 Cursor REAL safety | **BLOCKED** | `SFIA_STUDIO_CURSOR_REAL=ON` in local env |
| G7 Evidence readiness | **PASS (plan)** | Capture fields identified; no parallel ledger invented |
| G8 Entry scenario | **PASS (proposal only)** | Short scenario drafted; not executed |

**Overall:** **PRECHECK BLOCKED — REMEDIATION REQUIRED**
Primary blockers: Cursor REAL ON; runtime served revision not demonstrably tied to a restarted main tip; Pilot session not proven in-browser.

---

## 4. G1 — Runtime revision identity

| Fact | Value |
|------|--------|
| Listener | `localhost:3020` — `next-server (v15.5.20)` PID **41720** |
| Parent | `next dev --port 3020 --hostname localhost` PID 41717 |
| CWD | `…/projects/sfia-studio/app` |
| Process start | 2026-10-09 07:51:42 local (~8h+ uptime at inspection) |
| Worktree Git top | `/Users/morris/Projects/sfia-workspace` |
| Worktree branch/HEAD | `qa/sfia-studio-p6-global-integrated-product-qa` / `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| Tree `db45e9c4` | `ffc00d752e52eb2f9eec13ccf466258103506dbf` |
| Tree `8581abbf` (merge) | `ffc00d752e52eb2f9eec13ccf466258103506dbf` |
| Tree equivalence | **IDENTICAL** (PR tip content == merge tip content) |
| `8581abbf` ancestor of worktree HEAD? | **NO** (merge is child of PR tip) |
| Served revision demonstrable | **NO** (no version endpoint / rebuild attestation; long-lived `next dev`) |

Distinctions:
1. Source Git known — YES (HEAD + identical tree to merge).
2. Process identified — YES.
3. Build/runtime attached — PARTIAL (`next dev`).
4. Served revision demonstrable — **NOT PROVEN**.

**Claim:** RUNTIME REVISION NOT PROVEN (for “serving main tip rebuild”).
**Observation:** Source content of PR #572 is present in the worktree tree that equals the merge tree.

**Separate GO required** for any restart/rebuild to prove served tip — not authorized here.

---

## 5. G2 — Authentication / Pilot authority

| Class | Result |
|-------|--------|
| AUTH CODE PRESENT | YES — Better Auth + middleware + `resolveCurrentAuthenticatedPilote` |
| AUTH CONFIG PRESENT | YES — `BETTER_AUTH_*`, GitHub OAuth, allowlist keys **SET** (values not disclosed) |
| AUTH SESSION PROVEN | **NO** |
| PILOT AUTHORITY PROVEN | **NO** |

Static facts:
- Middleware fail-closed; public `/login`, `/api/auth/*` only.
- Identity = verified session ∩ bound GitHub account ∩ allowlist (not cookie presence alone).
- Unauthenticated probe `GET /studio` → **307** to `/login?error=NO_SESSION` (middleware live).

Server actions:
- `newProjectOnboardingTurnAction` / `createProjectRuntimeAction` are thin wrappers **without** re-asserting Pilote inside the action body; protection relies on Studio middleware for page access. Future Human QA must stay in authenticated browser surfaces.

**Future verification (Morris):** login as allowlisted Pilote; confirm studio pages load; confirm New Project reachable; no credential capture in packs.

---

## 6. G3 — Nora REAL provider (no call)

| Item | Result |
|------|--------|
| New Project path | `runNewProjectOnboardingTurn` → `resolveF2ProductRoutedProvider` |
| Fake forced? | `OPS1_CONVERSATION_PROVIDER` **ABSENT** → Fake **not** forced |
| Live construction | `createRoutedOpenAiConversationProvider(model×effort from router)` when not Fake/override |
| `OPENAI_API_KEY` | SET (value not disclosed) |
| `OPENAI_MODEL` | SET (`gpt-5.6-luna`) — F2 Product routing selects model×effort independently for routed path |
| Live completion | **NOT EXECUTED** |
| REAL PROVIDER READY | **NOT CLAIMED** (key presence ≠ readiness) |

Historical deterministic Fake proofs remain separate from REAL.

---

## 7. G4 — Real cost / budget safety

| Class | Result |
|-------|--------|
| OBSERVABILITY | YES — tokens / model / providerResponseId / selectedEffort / boundarySubstitution on onboarding result |
| ESTIMATED COST | Router may emit `estimatedCostUsdHint` (F2 telemetry); New Project path does not enforce EUR |
| CUMULATIVE SPEND | **NO** New Project campaign cumulative EUR tracker |
| ENFORCED HARD CAP | **NO** — `hardCapEnforced: false`; `declaredHumanQaBudgetEur: 10` documentary only |
| `campaignBudget.ts` | MW6-scoped process-local lease — **not** wired as New Project onboarding hard stop |

**Operational protocol proposal (not authorized as sufficient by this agent):**
1. Max envelope €10 documentary.
2. Before each REAL turn: estimate from prior usageObservation.
3. Keep cumulative manual ledger (tokens×rates or provider dashboard).
4. Stop if projected spend ≥ envelope or observability missing.
5. No concurrent onboarding tabs/retries storms.
6. Human owner: Morris.
7. Abort UI mid-turn if available.

**REAL BUDGET:** cannot claim hard-cap safety. Morris must explicitly accept operational control **after** remediations, under a distinct **GO REAL**.

---

## 8. G5 — QA data isolation

| Item | Result |
|------|--------|
| Product DB path (env) | under `.sfia-exec/new-project-campaign-01/product/` (campaign-scoped) |
| DB exists | YES (~8.2 MB) — pre-existing campaign data |
| HQ-01 | Not this path; **not opened / not mutated** |
| Isolation | PARTIAL — dedicated campaign root; new UI creates still land in this Product store |
| Reset | NOT performed; `SFIA_V2_RUNTIME_ALLOW_RESET` not activated |

Risk: prior projects in the same sqlite may appear in lists; new Human QA project must be freshly created by Morris and clearly identified. Stop if UI would require HQ-01 mutation.

---

## 9. G6 — Cursor REAL safety — BLOCKER

| Item | Result |
|------|--------|
| `SFIA_STUDIO_CURSOR_REAL` | **ON** |
| `OPS1_CURSOR_REAL` | OFF/ABSENT |
| Activated this cycle | NO (read-only inspection) |
| Safe for observation-only Human QA | **NO** while Cursor REAL remains ON |

**Remediation required (separate GO):** set Cursor REAL **OFF**, restart Studio under controlled procedure, re-verify env classification OFF — **before** any Human QA REAL proposal execution.

---

## 10. G7 — Evidence readiness

Capture plan for future Human QA (reuse existing QA assets; no new ledger):

- Git/runtime identity after remediation restart
- Pilote session proof (allowlisted; no secrets in pack)
- Provider/model/effort + usageObservation + correlation-ish ids
- Cost ledger (manual) vs €10 envelope
- Screenshots of New Project / workspace / cards (UI03–05)
- Draft→Create→LPS context (not Agents full replay)
- CycleInstance / HD presence or absence
- Errors / refusals / reversals
- Reserves R1–R8 status updates

Gaps: naturalness (R2), visual parity (R5), LPS≠Agents (R3) remain REAL NOT PROVEN until Human QA.

---

## 11. G8 — Proposed first Human QA scenario (NOT EXECUTED)

1. Morris opens New Project (authenticated).
2. Exploratory intention.
3. Nora REAL reply (naturalness observe).
4. Hesitation / change of mind.
5. Nora requalifies.
6. Explicit Create only.
7. Durable Project created.
8. Workspace opens.
9. Context continuity (LPS) — not full Agents replay claim.
10. First orientation.
11. Governed START **only if** real conditions satisfied — **not** required to pass New Project welcome.
12. Observe UI03–UI05 along the path.

Criteria: natural exchange; reversible refuse; no rigid questionnaire; no auto-create; context preserved; no false replay; Pilot authority; no auto-HD; no undue Cycle START; traceability; REAL spend under accepted control.

**Proposal only — Morris decides before execution.**

---

## 12. Fake / Real Qualification

| Item | State |
|------|--------|
| Entry | DETERMINISTIC INTEGRATED + POST-MERGE CI SUCCESS |
| This cycle | READ-ONLY READINESS EVIDENCE |
| REAL-BOUNDARY / Human QA / E2E | NOT PROVEN |
| P6 PASS / v3 ADOPTED / naturalness PASS / €10 HARD CAP | **FORBIDDEN / NOT CLAIMED** |

---

## 13. Remediations & Morris decisions remaining

**Remediation (before READY FOR BOUNDED HUMAN QA PROPOSAL):**
1. Turn **OFF** `SFIA_STUDIO_CURSOR_REAL`; controlled Studio restart (separate GO).
2. Re-prove runtime identity after restart (process + optional tree/HEAD note).
3. Morris browser session proof (allowlisted Pilote).

**Morris decisions (gates):**
1. Accept operational €10 control without technical hard cap — or refuse REAL until FinOps exists.
2. Accept campaign Product DB with pre-existing rows for a **new** QA project — or require cleaner isolation.
3. Issue **GO P6 REAL — BOUNDED** for Nora spend if remediations PASS.
4. Approve/adapt the proposed scenario.

---

## 14. Worktree preservation

Cycle-14 documentary candidate **preserved** (not modified this cycle).
Local ephemeral / untracked items preserved. No project commit/push.

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/

```

---

## 15. Verdict

**PRECHECK BLOCKED — REMEDIATION REQUIRED**

Not READY FOR BOUNDED HUMAN QA PROPOSAL.
GO PRECHECK CONSUMED. GO REAL NOT CONSUMED.
P6 NOT PASS. Runtime v3 NON ADOPTED.

END OF REVIEW PACK
