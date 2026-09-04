# SFIA Review Pack — MW6 R-AUTH-BIND-01 QUALIFICATION CORRECTION

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-09-04 17:25:50 CEST |
| **Cycle (project)** | **6 — Architecture technique** |
| **Type** | EVOL |
| **Profile** | CRITICAL |
| **Programme** | Nora Cognitive Completion |
| **Milestone** | MW6 — External Source Intelligence |
| **Sub-milestone** | R-AUTH-BIND-01 QUALIFICATION CORRECTION |
| **GO Morris consumed** | **GO MORRIS — R-AUTH-BIND-01 QUALIFICATION CORRECTION** |
| **Implementation GO** | **NOT GRANTED** |
| **REAL GO** | **NOT GRANTED** |
| **Product publication** | **NOT GRANTED** |
| **v3 capabilities** | V3-F07 ∩ V3-F11 ∩ V3-F12 |
| **Evidence ceiling** | STATIC + REPO-PROVEN ARCHITECTURE QUALIFICATION (+ existing deterministic tests only) |
| **REAL / network calls** | **0 / 0** |
| **Product files modified this cycle** | **NONE** |
| **GPT-5.6** | RETAINED |
| **GPT-6 Astra** | NOT ADOPTED / DEFER |
| **Handoff input tip** | `97d6591c0a2c08499e13655973809d98f18b7238` |
| **HEAD / origin/main / merge-base** | `ebdae92a96ea1c49444dfb668342c1453f57a540` |

---

## 1. Objective

Close ambiguity on **R-AUTH-BIND-01**: prove from repo truth whether SFIA Studio already has a REAL-compatible canonical chain:

runtime Pilote identity → AuthorityEvidence / source-of-trust → AuthorityResolverPort → HumanDecision / Confirmation / ExecutionContract → CheckExecutionAuthorization → AgentCapability → campaign/runtime guardrails → hosted provider dispatch.

This cycle is **qualification correction only**. Binding is **NOT implemented**.

Prior ChatGPT recommendation that launched this correction (Option A wire CheckExecutionAuthorization) is recorded as **recommendation consumed to start correction**, **NOT** as architecture choice. Option A remains **NON CONSUMABLE** until authority source is closed.

---

## 2. Local Git Truth Check

| Item | Value |
| --- | --- |
| pwd | `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence` |
| branch | `delivery/sfia-studio-nora-mw6-external-source-intelligence` |
| HEAD | `ebdae92a96ea1c49444dfb668342c1453f57a540` |
| origin/main | `ebdae92a96ea1c49444dfb668342c1453f57a540` |
| merge-base | `ebdae92a96ea1c49444dfb668342c1453f57a540` |
| log -1 | `ebdae92a docs(sfia-studio): close Nora MW5 and sync closure truth` |
| working tree | **DIRTY** — local MW6 + PRE-REAL candidate preserved |
| handoff tip (input) | `97d6591c0a2c08499e13655973809d98f18b7238` |
| handoff parent (input) | `e001c48bc1458818548dc6c5d3eecae333f40454` |
| LOCAL GIT TRUTH DIVERGED? | **NO** |
| REVIEW HANDOFF SUPERSEDED? | **NO** |

### Distinction of truth layers
- **main:** HEAD = origin/main = ebdae92… (no MW6 REAL binding on main)
- **local candidate:** uncommitted MW6/PRE-REAL (REAL_AUTHORITY_NOT_BOUND still intentional)
- **handoff:** prior qualification pack at 97d6591c…
- **hypothesis:** none treated as proven

Product tree **not** reset/clean/stash/checkout. This cycle writes **only** `.tmp-sfia-review/chatgpt-review.md` (+ handoff publish).

---

## 3. Git Review Index / Sources read

| Source | Role |
| --- | --- |
| Build Doctrine / Roadmap / C1 cadrage | Convergence context |
| v3 framing 34 | Pilote vs Morris; V3-F11/F12 |
| Nora backlog 05 + trajectory 08 | MW6 trajectory; REAL deferred truths |
| Routing guide | Process |
| CKC `pilots/03-architecture-technique.md` | **candidate** 0.1.0 — cognitive guidance only; **no execution authority** |
| Template `sfia-cycle-execution-template.md` | Process |
| `authorityResolver.ts` | Port contract |
| `memoryAuthorityResolver.ts` | Sole product implementation |
| `localSingleUserAuthority.ts` | TEMPORARY WITH EXIT / FREEZE FOR REAL |
| `createSqliteDecisionServices.ts` | Durable HD/Confirmation; default Memory authority |
| decision `domain/types.ts` | AuthorityEvidence shape |
| W2 `authorizeExecutionContract.ts` | evaluateAgentCapability + evaluateExecutionAuthorization (registerLocalPiloteAuthority) |
| `checkExecutionAuthorization.ts` | Binary AUTH gate |
| `vertical-slice-runtime/service.ts` | Product composition root |
| SQLite `db.ts` schema | No AuthorityEvidence table |
| Nora `runNoraAgentsTurn` / `campaignBudget` | REAL preflight hard-block |
| Prior handoff 97d6591c | Input qualification |

Repo searches performed (non-exhaustive list): AuthorityResolverPort, MemoryAuthorityResolver, AuthorityEvidence, registerLocalPiloteAuthority, LOCAL_PILOTE_ACTOR, CheckExecutionAuthorization, evaluateAgentCapability, canActAsMorris, new MemoryAuthorityResolver, authority_evidence schema, next-auth/Clerk/Auth0, session/currentUser/identity, Nora REAL_AUTHORITY_NOT_BOUND.

---

## 4. Current authority / REAL call graph (repo-proven)

### Product OA composition (main + local share this stack for T-A3/T-A4)
```
createRuntimeOaStack (vertical-slice-runtime/service.ts)
  authorityResolver = new MemoryAuthorityResolver()   // process-local Map
  → createSqliteDecisionServices({ authorityResolver })
  → createSqliteExecutionContractServices({ authorityResolver })
  → createSqliteExecutionAttemptServices({ authorityResolver })
```
**Only** `MemoryAuthorityResolver` implements `AuthorityResolverPort` in the repo.

### W2 authorization path (product feature — NOT Nora REAL)
```
evaluateExecutionAuthorization
  → evaluateAgentCapability(registry, contract)
  → registerLocalPiloteAuthority({ authorityResolver, scope, forceEnable? })  // TEMPORARY
  → checkExecutionAuthorization.execute({ actor: LOCAL_PILOTE_ACTOR, authorityEvidenceId })
  → recordAuthorityVerification (receipt: grantsAuthority=false, non-reusable)
  STOP BEFORE EXECUTE
```

### Nora LIVE hosted path (local MW6 candidate)
```
runNoraCognitiveTurn → runNoraAgentsTurn
  wantRealHostedDispatch?
    → evaluateRealSourceExecutionPreflight(campaign)
         ALWAYS { eligible:false, code: REAL_AUTHORITY_NOT_BOUND }
    → attachHostedWebSearch = false for LIVE OpenAI
  (Runner / web_search not reached for LIVE)
```
No AuthorityResolver / CheckExecutionAuthorization / HD / Confirmation wiring into Nora REAL preflight.

---

## 5. AUTH-SOURCE-01 → 12 (answers)

### AUTH-SOURCE-01 — Canonical Pilote identity source?
**ABSENT** as REAL-compatible product identity.

What exists:
- `LOCAL_PILOTE_ACTOR` constant (`actor:local-pilote`, displayName "Pilote", `authorityLevel: "none"`) in `localSingleUserAuthority.ts` — **fixture/role label**, not authenticated identity.
- Agents SDK `ProductSqliteSession` — conversation session, **not** user authN.
- No NextAuth / Auth.js / Clerk / Auth0 / better-auth in `projects/sfia-studio` package.json or app sources (searched).
- D1 `principal_id` / OPS1 sessions are **other domains**, not OA Pilote AuthorityEvidence issuers wired to Nora.

Trust boundary today: **none proven** against hostile client actor claims. Client `canActAsMorris` / claimed levels are voided in W2/Check paths — but the **server still invents** Pilote via local register when env/test allows.

### AUTH-SOURCE-02 — REAL-compatible AuthorityEvidence issuer?
**ABSENT** for REAL.

Emitters found:
- `MemoryAuthorityResolver.register` — in-process only
- `registerLocalPiloteAuthority` / `registerM3LocalMorrisAuthority` — `source: LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT`, requires `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1` or `forceEnable` (tests)
- Test/fixture registers in adversarialAuthority etc.

No SQLite table for AuthorityEvidence. Schema has `oa_human_decisions`, `oa_confirmations`, `oa_execution_contracts`, `oa_authority_verification_receipts` (audit only).

### AUTH-SOURCE-03 — Is MemoryAuthorityResolver only default/dev/test?
**NO — it is the product runtime resolver today.**

Proof: `vertical-slice-runtime/service.ts` constructs `new MemoryAuthorityResolver()` and injects into Decision, ExecutionContract, ExecutionAttempt. `createSqliteDecisionServices` defaults to `new MemoryAuthorityResolver()` if none injected. **Sole** `implements AuthorityResolverPort` class in repo.

Classification: **IMPLEMENTED product process-local** / **TEMPORARY durability** / **REJECTED FOR REAL as sole trust source**.

### AUTH-SOURCE-04 — Survives process restart?
**NO.** Map cleared on process death.

Reconstructible after restart from REAL-compatible source? **NO** — only via re-invoking temporary `registerLocalPiloteAuthority` (or test register). That is **not** honest REAL reconstruction.

Persistence of AuthorityEvidence is **not** mandated by this finding; what is missing is a **canonical identity/trust source** that can honestly (re)issue or resolve evidence.

### AUTH-SOURCE-05 — Durable HumanDecision authorize without recreating localSingleUserAuthority?
**NO** (for CheckExecutionAuthorization path).

`CheckExecutionAuthorization` calls `verifyRequiredAuthority(authorityResolver, { evidenceId, actorId, scope, requiredAuthority })`. After restart the resolver is empty → `evidence_not_found` / `no_evidence` → AUTHORITY_DENIED.

Durable HD stores business decision state (incl. actor fields in payload); actor fields are **never** trusted as authority proof per port docs. HD acceptance ≠ live AuthorityEvidence.

### AUTH-SOURCE-06 — Do durable Confirmation + HD restore actor authority?
**NO — they restore métier state only.**

Authority level / Morris gate / scope binding live in AuthorityEvidence via AuthorityResolverPort. Confirmations prove consent constraints; HD proves selected options — neither re-registers AuthorityEvidence.

### AUTH-SOURCE-07 — How CheckExecutionAuthorization receives inputs
Request fields: `executionContractId`, `action`, `target`, `scope`, `actor`, optional `authorityEvidenceId`, `claimedAuthorityLevel` (ignored), `correlationId`.

Checks applied (code):
- actor.actorId required
- contract exists; not cancelled/superseded/T-A5; execution-ready status
- no confirmation constraint contradiction
- no superseding successors (currentness)
- deny-by-default action/target/scope match
- Critical cycle ack if applicable
- each decisionRef: exists, same project, status accepted
- `verifyRequiredAuthority` via AuthorityResolver (level, scope, optional Morris gate, expiry)

Note: Confirmation **object** freshness is primarily enforced at ConfirmExecutionContract / W2 confirmation requirement; Check path relies heavily on EC status + decisionRefs + authority verify.

### AUTH-SOURCE-08 — Freshness / mismatch / revocation
| Concern | Mechanism |
| --- | --- |
| Evidence expiry | `expiresAt` on AuthorityEvidence; expired → reason `expired` |
| Scope mismatch | exact scope match required |
| Actor mismatch | evidence.actorId must equal request.actorId |
| Level / Morris | levelSatisfies + canActAsMorris when requireMorrisGate |
| HD current | status must be accepted (not superseded path as current ref) |
| EC current | successors list empty; status not cancelled/superseded |
| Evidence revoke API | **ABSENT** — no revoke on AuthorityResolverPort |

### AUTH-SOURCE-09 — AuthorityEvidence revocation?
**No explicit revoke.** Distinguish:
- **expiration** of evidence (supported)
- **HD supersession/revocation** (durable decision lifecycle — separate)
- **reconstruction/revalidation** of authority (must re-verify resolver at effect time)

Do not conflate HD supersession with evidence revocation.

### AUTH-SOURCE-10 — W2 evaluateExecutionAuthorization AS-IS for REAL?
**NON AS-IS FOR REAL.**

It calls `registerLocalPiloteAuthority` before CheckExecutionAuthorization — creates temporary N3+canActAsMorris evidence for `LOCAL_PILOTE_ACTOR`.

Separately reusable:
- `CheckExecutionAuthorization` (**KEEP / wire later**)
- `evaluateAgentCapability` (**KEEP / adapt envelope**)
- receipt recording (**KEEP audit-only**)
- confirmation/inspection pre-checks in W2 (**KEEP patterns**)

Full helper: **REJECT AS-IS FOR REAL** / **HARVEST** primitives.

### AUTH-SOURCE-11 — AgentCapability envelope for Nora hosted web_search?
**PARTIAL / ABSENT for Nora path.**

`evaluateAgentCapability` is generic over EC `requiredCapabilities` + action/target/scope against `AgentRegistryPort`. Product registry in vertical-slice currently registers F3/W3A/M4 Cursor fixture agents — **not** a Nora hosted-web_search executor capability envelope.

Delta (not implemented): define EC action/target/scope/requiredCapabilities for hosted external source intelligence and a matching AgentCapability descriptor — **without** parallel catalog. Nora cognitive Runner path today does not call evaluateAgentCapability.

### AUTH-SOURCE-12 — Minimal honest future call graph (node status)

| Node | Status |
| --- | --- |
| Pilote authentiqué (identity source) | **ABSENT** (REAL) |
| identity → AuthorityEvidence issue/resolve | **TEMPORARY** only (`localSingleUserAuthority` → Memory) |
| AuthorityResolverPort | **IMPLEMENTED** (Memory only) |
| HumanDecision / Confirmation durable | **IMPLEMENTED** (SQLite) |
| ExecutionContract durable | **IMPLEMENTED** |
| CheckExecutionAuthorization | **IMPLEMENTED** / **UNWIRED** to Nora REAL |
| evaluateAgentCapability | **IMPLEMENTED** / **UNWIRED** to Nora; envelope **PARTIAL** for hosted search |
| campaignBudget / PRE-REAL guards | **IMPLEMENTED** (local candidate) / technical only |
| REAL preflight | **TEMPORARY hard-block** REAL_AUTHORITY_NOT_BOUND |
| hosted provider dispatch LIVE | **BLOCKED** |
| OpenAI HITL/RunState as authority | **REJECTED FOR REAL** |
| localSingleUserAuthority for REAL | **REJECTED FOR REAL** / **FREEZE** |

---

## 6. Authority Asset Inventory

| Asset | Path | Product/test | Responsibility | Identity src | AE src | Persisted? | Restart-safe? | Reconstructible (REAL)? | Actor/Project/Scope | Expiry | Revoke/supersede | canActAsMorris | REAL-compatible today? | Wired Nora REAL? | Class | Gap / Exit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HumanDecision | oa/decision + SQLite | product | métier decision | actor fields declared | verified at write via resolver | YES | YES (state) | N/A — not AE | bound in payload | n/a | supersede/revoke status | via claimed authority class + verify at write | NO as AE | NO | KEEP | ≠ AuthorityEvidence |
| Confirmation | oa/decision + SQLite | product | consent constraint | requestedBy/To | grant may verify | YES | YES | N/A | scope on confirmation | expiresAt | refuse/cancel/consume | n/a | NO as AE | NO | KEEP | métier only |
| VerifyAuthority | verifyAuthority.ts | product | verify via port | actorId | resolver | n/a | depends resolver | depends source | scope/level | expiry | n/a | gate flag | depends AE source | NO | KEEP | needs REAL AE source |
| AuthorityResolverPort | ports/authorityResolver.ts | product | sole N1/N2/N3+Morris truth | — | register/get/verify | interface | — | — | yes | yes | **no revoke API** | explicit | interface OK | NO | KEEP | need REAL issuer behind port |
| MemoryAuthorityResolver | memoryAuthorityResolver.ts | **product runtime** | in-memory AE store | — | Map | NO | **NO** | NO without temp register | yes | expiresAt | immutable id; no revoke | yes | **NO alone** | NO | KEEP impl / **FREEZE as sole REAL trust** | replace/adapt backing source |
| localSingleUserAuthority | localSingleUserAuthority.ts | product TEMP | register N3+Morris for Pilote | LOCAL_PILOTE_ACTOR const | self-issued | NO | NO | only via temp re-register | scope arg | none by default | n/a | **hardcoded true** | **NO** | NO | **FREEZE FOR REAL** | exit when REAL source exists |
| LOCAL_PILOTE_ACTOR | same | product const | role label | constant | — | n/a | n/a | n/a | fixed actorId | n/a | n/a | none on actor | **NO identity proof** | NO | KEEP as role type / not authN | need real subject binding |
| ExecutionContract | oa/execution-contract | product | scope container | — | requiredAuthority class | YES | YES | n/a | action/target/scope | via status | cancel/supersede | MORRIS class may require gate | YES as scope | NO | KEEP | Nora vocabulary delta |
| CheckExecutionAuthorization | checkExecutionAuthorization.ts | product | binary AUTH | request.actor | request.evidenceId→resolver | NO mutation | needs live AE | — | deny-by-default | via resolver | HD/EC paths | via verify | YES if AE REAL | **UNWIRED** | KEEP | wire after source exists |
| AuthorityVerificationReceipt | domain + SQLite | product | audit snapshot | actor on receipt | evidence ids listed | YES audit | YES | **must not** reauthorize | yes | n/a | n/a | recorded | **NO token** | NO | KEEP | grantsAuthority=false |
| evaluateAgentCapability | w2/authorizeExecutionContract.ts | product | capability envelope | — | — | n/a | n/a | n/a | via EC | n/a | agent disabled | n/a | YES as policy term | UNWIRED | KEEP/ADAPT | hosted search envelope |
| evaluateExecutionAuthorization W2 | same | product | full authz helper | LOCAL_PILOTE | registerLocalPilote | receipt durable | needs re-register | via temp only | yes | — | — | via local register | **NO AS-IS** | NO | **HARVEST** / REJECT AS-IS REAL | strip temp register |
| execution-attempt path | oa/execution-attempt | product | T-A5 execute | — | same resolver | YES attempts | — | — | — | — | — | — | adjacent | NO | KEEP adjacent | not Nora cognitive owner |
| Nora REAL preflight | campaignBudget.ts local | local candidate | hard block LIVE | none | none | n/a | n/a | n/a | n/a | n/a | n/a | n/a | intentional block | YES block | ADAPT later | after source+binding GO |
| campaignBudget | campaignBudget.ts | local | technical guardrail | none | none | process-local | NO | n/a | campaign id | counters | exhaustion | n/a | NEVER authority | YES technical | KEEP | realism gap process-local |
| OpenAI HITL/RunState | SDK | deps | interrupt transport | provider | provider | RunState | stale possible | n/a | n/a | n/a | reject/approve | n/a | **NEVER** | unused | COMBINE transport only / REJECT authority | AUTH-23 |
| hosted web_search | Nora adapters | local | transport | — | — | n/a | n/a | n/a | — | — | — | — | transport | gated off LIVE | KEEP transport | behind authority |

---

## 7. Effective Authority Matrix (term 6 = R-AUTH-BIND-01 fix)

| Term | Canonical | Implementation | Durable? | Freshness | Revocation | Fail-close | Nora wiring | REAL compat | Gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1. valid human authorization | v3-34 / T-A3 HD | SQLite HD accepted+current | YES | status | supersede | deny | UNWIRED | HD durable YES; **≠ live AE** | must not treat HD as AE |
| 2. EC scope | V3-F12 | CheckExecutionAuthorization match | YES | successors/status | cancel/supersede | deny | UNWIRED | YES | Nora action/target/scope vocab |
| 3. AgentCapability/policy | V3-F11 | evaluateAgentCapability | eval-time | registry health | disable agent | deny | UNWIRED | PARTIAL | hosted search envelope |
| 4. runtime guardrails | PRE-REAL | campaignBudget + max_tool_calls | process-local | counters | exhaustion | deny | WIRED technical | technical YES | never sole auth |
| 5. Confirmation if required | T-A3/T-A4 | Confirmation + EC constraints / W2 | YES | expire/consume | refuse/cancel | deny | UNWIRED | YES métier | wire with EC |
| **6. runtime identity / AE source** | **missing REAL** | Memory + localSingleUser only | **NO** | expiry only | **no revoke API** | fail if missing | **ABSENT** | **NO** | **R-AUTH-BIND-01 CONFIRMED** |

---

## 8. Restart / Temporal Matrix

| ID | Scenario | Current | Desired fail-close | Primitive | Gap | Det? | REAL later? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TEMP-01 | restart between HD and REAL preflight | AE gone; LIVE already hard-blocked | BLOCK until AE re-resolved from REAL source | Memory empty | REAL identity source | YES | YES |
| TEMP-02 | restart between preflight and dispatch | same | revalidate before effect | Check+resolver | source + wire | YES | YES |
| TEMP-03 | HD superseded after first check | LIVE blocked today | revalidate HD before effect | getHumanDecision | wire | YES | YES |
| TEMP-04 | Confirmation stale after check | LIVE blocked | revalidate confirmation | Confirmation lifecycle | wire | YES | YES |
| TEMP-05 | AE expired after check | Memory expiry works if still in process | revalidate evidence | Memory verify | REAL issuer TTL | YES | YES |
| TEMP-06 | actor/session identity change | no real session identity | mismatch deny | ABSENT identity | **structural** | PARTIAL | YES |
| TEMP-07 | EC superseded/cancelled | Check denies if wired | deny | CheckExecutionAuthorization | wire | YES | YES |
| TEMP-08 | campaign exhausted after auth | claim deny | deny | campaignBudget | keep | YES | YES |
| TEMP-09 | provider HITL pause/resume | unused | revalidate SFIA on resume; approve≠HD | SDK HITL | policy if COMBINE | YES | YES |
| TEMP-10 | future async/mid-turn (GPT-6 DEFER) | not adopted | must not assume eternal auth | revalidate at effect | architecture reserve | PARTIAL | YES |

---

## 9. Proof of absence (canonical REAL source)

1. Sole AuthorityResolver implementation = MemoryAuthorityResolver (process Map).
2. Product composition always constructs MemoryAuthorityResolver.
3. No `oa_authority_evidence` (or equivalent) table; receipts explicitly non-granting.
4. Only product issuer of Pilote AE = `registerLocalPiloteAuthority` marked TEMPORARY WITH EXIT; FREEZE FOR REAL.
5. No IAM/OIDC/session-user binding into AuthorityResolverPort.
6. Nora REAL preflight does not consult any identity/AE source — hard `REAL_AUTHORITY_NOT_BOUND`.

Therefore: **CAS B — SOURCE CANONIQUE ABSENTE OU TEMPORAIRE UNIQUEMENT.**

---

## 10. Missing Authority Source Contract (exact)

Before any binding implementation, Morris must decide a source that answers:

| Question | Status |
| --- | --- |
| Who is the actor? | Role "Pilote" modeled; **authenticated subject ABSENT** |
| What proves identity? | **ABSENT** REAL trust boundary |
| What proves authority level (N1/N2/N3) + optional Morris gate? | Only temp local register today |
| Who emits AuthorityEvidence? | Only Memory register / localSingleUser |
| Validity duration? | optional expiresAt; no product REAL TTL policy |
| Scope binding? | string scope on evidence — OK pattern |
| How revalidate? | AuthorityResolverPort.verify — OK; needs live evidence |
| How revoke/invalidate? | **No AE revoke**; HD/EC supersession separate |
| Persist AE itself? | **NOT predetermined** — may re-issue from identity source each time |
| Owning component? | Should remain behind **existing** AuthorityResolverPort (no parallel) |
| Reuse interface? | AuthorityResolverPort + CheckExecutionAuthorization + evaluateAgentCapability + campaign guards |

**Persistence / IAM are OPTIONS, not conclusions.**

---

## 11. Structural options (2–3 MAX) — NON CONSUMED

### Option S1 — Re-issuable evidence from canonical identity/authN adapter (no mandatory AE table)
- Reuse AuthorityResolverPort (adapt backing: register per request from trusted identity assertion)
- Identity source: **to be chosen by Morris** (out of scope to pick vendor here)
- Persistence: AE **may** be ephemeral if re-issuable from identity source each preflight/dispatch
- Restart: reconstruct by re-authenticating / re-asserting, not by trusting old Memory Map
- Risk: wrong identity adapter; parallel if bypasses port
- Downstream Option A binding: becomes consumable **after** S1 chosen & proven

### Option S2 — Durable AuthorityEvidence store + identity binding
- New durable AE records bound to authenticated subject
- Schema impact: **yes** (new table or equivalent) — requires Morris schema GO
- Restart-safe evidence ids possible; still need freshness/revoke policy
- Risk: treating durable AE as eternal token; receipt confusion
- Higher irreversibility than S1

### Option S3 — Continue FREEZE; keep REAL_AUTHORITY_NOT_BOUND until identity programme exists
- No binding implementation
- Lowest immediate risk; MW6 LIVE remains blocked
- Debt: MW6 cannot reach authority-bound preflight
- Compatible with trajectory honesty

**ChatGPT/Cursor recommendation (NON CONSUMED):** prefer exploring **S1** for reversibility IF Morris can name a Studio-local trust boundary without new parallel authority system; **do not** auto-select IAM vendor or SQLite AE table. **S3** remains valid until that decision.

**MORRIS STRUCTURAL DECISION REQUIRED** before Option A binding is consumable.

---

## 12. Minimal downstream binding seam (QUALIFIED ONLY AFTER SOURCE — NON IMPLEMENTED)

IF AND ONLY IF a REAL-compatible source exists behind AuthorityResolverPort:

```
canonical identity/authority source
→ AuthorityResolverPort (existing)
→ CheckExecutionAuthorization (existing)
→ evaluateAgentCapability (existing; Nora envelope COMPLETE)
→ campaignBudget / runtime guards (existing)
→ hosted provider dispatch
```

Until then: seam is **NOT READY TO IMPLEMENT**; hard block remains correct.

OpenAI HITL: COMBINE transport only; never authority.

---

## 13. R22 / OpenAI (correction-scoped)

| Item | Disposition |
| --- | --- |
| Option C Runner | KEEP |
| GPT-5.6 | KEEP |
| hosted web_search | KEEP transport |
| max_tool_calls | KEEP supporting guardrail |
| HITL / RunState | COMBINE interrupt only / **NEVER AUTHORITY** |
| GPT-6 Astra | DEFER / NOT ADOPT |
| OpenAI identity/authority for SFIA Pilote | **NONE** — cannot satisfy R-AUTH-BIND-01 |

---

## 14. Fake / Real Qualification

| Item | Value |
| --- | --- |
| applicable | yes |
| fake/fixture | localSingleUserAuthority; Memory resolver; deterministic Nora tests |
| REAL boundary | authenticated Pilote + live AE + Check + capability + guards + provider |
| parity | same actor/action/target/scope/decision/confirmation/capability/guardrail invariants |
| known gaps | temp AE ≠ REAL; Memory ≠ durable trust source |
| entry proof | DETERMINISTIC / STATIC |
| this cycle | STATIC + repo-proven + existing tests |
| out of scope | REAL BOUNDARY PROVEN / E2E REAL |
| Morris REAL gate | DISTINCT — NOT GRANTED |

---

## 15. Tests / validations this cycle

```
unset OPENAI_API_KEY OPENAI_API_KEY_PROJECT OPENAI_BASE_URL
cd projects/sfia-studio/app
npx vitest run \
  __tests__/oa/decision/adversarialAuthority.test.ts \
  __tests__/oa/decision/decisionConfirmationAuthority.test.ts \
  __tests__/nora-cognitive-runtime/mw6.pre-real.budget-hardening.d0.test.ts \
  -t 'REAL_AUTHORITY|AUTH-|authority|Authority|registerLocal|evidence_immutable|expired|scope_mismatch|morris_gate'
```
Result: **3 files passed**; **19 passed** / 114 skipped; **exit 0**.
REAL CALLS = 0 · NETWORK PROVIDER CALLS = 0.
No new tests. No npm install.

---

## 16. Product git this cycle

Product modifications = **NONE**.
Project commit/push/PR/merge = **NO**.
Only allowed writes: this Review Pack + handoff L3.

---

## 17. Reserves / Debts / Exits

- RESERVE: provider max_tool_calls snapshot (prior PRE-REAL)
- DEBT: process-local campaign lease realism
- EXIT: localSingleUserAuthority must exit when REAL source exists
- FREEZE: MemoryAuthorityResolver as sole REAL trust
- REJECT: receipt as token; OpenAI approve as HD; W2 full helper AS-IS for REAL
- GPT-6 DEFER

---

## 18. Trajectory / next capability

| Item | Value |
| --- | --- |
| Capability | V3-F07 prepared via F11/F12 |
| Milestone | MW6 |
| Gap closed this cycle | R-AUTH-BIND-01 **ambiguity** → **CONFIRMED BLOCKER** |
| Next capability (unchanged) | authority-bound REAL preflight fail-closed — **blocked on structural source decision** |
| STOP trajectory link? | **NO** — link intact; structural gate inserted |
| Exit proof future | after Morris source decision → binding impl GO → deterministic → separate REAL GO |

---

## 19. Decisions Morris still required

1. **STRUCTURAL:** Authority source for runtime Pilote (S1/S2/S3 or equivalent) — **REQUIRED NOW**
2. Implementation GO for binding — NOT until (1) closed with REAL-compatible source
3. REAL GO — NOT GRANTED
4. Product publication — NOT GRANTED
5. Option A binding recommendation — **NON CONSUMABLE** until (1)

---

## 20. Claim ceiling

### Allowed
- R-AUTH-BIND-01 = CONFIRMED BLOCKER
- Canonical REAL Pilote identity/AE source = ABSENT (temp only)
- MemoryAuthorityResolver = product process-local resolver (not durable trust)
- HumanDecision durable ≠ AuthorityEvidence
- W2 evaluateExecutionAuthorization = NON AS-IS for REAL
- Option A = NON CONSUMABLE pending structural decision
- PRE-REAL budget safety retained at prior ceiling
- Qualification correction complete

### Forbidden
- LIVE bound / REAL authorized / READY FOR REAL
- REAL BOUNDARY PROVEN / MW6 COMPLETE
- Cognitive Completion PROVEN / runtime v3 ADOPTED
- GPT-6 ADOPTED
- SQLite AE or IAM chosen without Morris
- Option A decided/consumed

---

## 21. Verdict R-AUTH-BIND-01

**CONFIRMED BLOCKER**

## 22. Final Qualification Verdict

**QUALIFICATION CORRECTED — MORRIS STRUCTURAL AUTHORITY SOURCE DECISION REQUIRED**

GO REAL = NO · REAL BOUNDARY PROVEN = NO · LIVE BOUND = NO · MW6 COMPLETE = NO · COGNITIVE COMPLETION PROVEN = NO · GPT-6 ADOPTED = NO · RUNTIME V3 ADOPTED = NO
