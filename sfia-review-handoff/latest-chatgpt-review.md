# ChatGPT Review Pack — FULL
## F3 LIVE GitHub OAuth Proof — Cycle 9 QA Critical — PAUSED AT HUMAN CHECKPOINT

| Field | Value |
| --- | --- |
| **Role** | F3 LIVE GitHub OAuth proof (AS-1 AuthJsGitHubIdentityAdapter live authn path) |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 01:51:16 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 23:51:16 UTC |
| **Timestamp CEST ISO** | `2026-08-12T01:51:16+0200` |
| **Timestamp UTC ISO** | `2026-08-11T23:51:16Z` |
| **Cycle** | 9 — QA / validation (CAPA) — PAUSED at Morris manual OAuth setup |
| **Profil** | Critical |
| **Typologie** | CAPA / validation |
| **Critical** | OUI — EXPLICITE |
| **Template** | prompts/templates/sfia-cycle-execution-template.md v2.6 |
| **Template blob** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| **Source mutation this cycle** | **0** |
| **Package mutation this cycle** | **0** |

---

## GO exact (Morris — full contextual GO)

```
GO PROVE F3 LIVE GITHUB OAUTH

PROVE F3 LIVE GITHUB OAUTH —
MANUAL GITHUB OAUTH APP + LOCAL SECRET SETUP —
VALIDATE REAL GITHUB LOGIN —
PROVE STABLE GITHUB NUMERIC SUBJECT —
PROVE AuthJsGitHubIdentityAdapter LIVE AUTHENTICATION PATH —
REASSESS R-T-A3-1 / R-T-A3-2 / GATE D READINESS —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
NO PROJECT GIT WRITE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED
```

**Justification Critical :** preuve d'identité authentifiée Morris (live GitHub OAuth) protégeant Critical Acks / futur Cursor REAL — erreur possible = mauvaise identité, session non authentifiée, mauvais compte GitHub, confused deputy, autorisation Morris implicite, Gate D prématuré. Cursor REAL interdit ; Gate D non consommé ; aucune mutation source/package ce cycle.

---

## Inbound Review Handoff

| Field | Value |
| --- | --- |
| Tip BEFORE | `9d1c59a9294457e10c1327dfd450487508a18359` |
| Blob BEFORE | `8ecd1ca7ad3768a9006b4552c29296ab6275615b` |
| Role (inbound) | F3 Auth.js + GitHub IAM Delivery + Independent QA (Cycle 8/9) |
| Pack (inbound) | FULL |
| Synthesis-only (inbound) | NO |
| Remote verify BEFORE | `git ls-remote` tip exact + `git rev-parse origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` blob exact |

**Outbound remote identity:** FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE

---

## Local Git Truth

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` (non-divergent) |
| Remote delivery branch | **ABSENT** (local only; `git ls-remote` empty) |
| Staged | empty (package remains local uncommitted candidate) |
| Project commit/push/PR/merge/force | **0 / 0 / 0 / 0 / 0** |
| Package local | YES — frozen candidate unchanged |

---

## Framing documents (READ-ONLY other WT) — SHA-256 verified unchanged

| Doc | SHA-256 | Byte-identical |
| --- | --- | --- |
| README.md | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | **YES** |
| 01-authority-surface-decision.md | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | **YES** |
| 02-accelerated-authority-durability-decision.md | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` | **YES** |
| 03-iam-provider-decision.md | `6b39fd62f43a5513b940b5b775e107461fd7b2945178c6f7b3b7bf2f991789e7` | **YES** |

---

## Candidate integrity (this cycle — no freeze change)

| Field | Value |
| --- | --- |
| Candidate SHA BEFORE | `e2c3b9326ec41910f808842f9b545dca126c2016bf6a7eccba4c597a6dd2468e` |
| Candidate SHA AFTER | `e2c3b9326ec41910f808842f9b545dca126c2016bf6a7eccba4c597a6dd2468e` |
| Byte-identical | **YES — MATCH — 0 drift** |
| Source mutation count | **0** |
| Package mutation count | **0** |
| Corrective loops this cycle | **0** |
| next-auth | `5.0.0-beta.32` (unchanged) |

Recompute method: SHA-256 of concatenated `path sha256` lines from frozen candidate manifest (34 paths) — identical to FREEZE_SHA.

---

## Baseline IAM (unchanged — read-only confirmation)

- Provider: Auth.js (`next-auth@5.0.0-beta.32`) + GitHub OAuth
- Session: JWT / **NO DB adapter**
- Scope: `read:user` only
- Stable subject: GitHub numeric account id → `github:<id>`
- Adapter class: `AuthJsGitHubIdentityAdapter` EXISTS (exported from critical-ack main barrel)
- `AcknowledgeCritical` resolves principal via injected `AuthenticatedIdentityPort`
- **NO non-test production wiring** of `new AuthJsGitHubIdentityAdapter(...)` constructor (tests only)
- FakeAuthenticatedIdentityAdapter: testing barrel only; Fake fallback count this cycle = **0**
- AuthorityResolverPort remains sole authz / `canActAsMorris` boundary

---

## Secrets / credential presence (booleans only — NO values)

| Variable class | Ambient / file presence |
| --- | --- |
| AUTH_SECRET | **ABSENT** |
| AUTH_GITHUB_ID | **ABSENT** |
| AUTH_GITHUB_SECRET | **ABSENT** |
| AUTH_MORRIS_GITHUB_SUBJECT | **ABSENT** |
| `.env.local` | **ENV_LOCAL_EXISTS=no** |
| `.env.*` gitignore | YES — ignored by `.gitignore` (`.env`, `.env.*`, `!.env.example`) |

Secret values exposed in pack/logs/chat: **0**
OAuth authorization codes / cookies / JWT raw / GitHub access tokens: **0**

---

## HUMAN CHECKPOINT — MORRIS MANUAL GITHUB OAUTH SETUP REQUIRED

**Status:** LIVE login **NOT ATTEMPTED** (credentials absent). Cycle **PAUSED** — not a failure.

### Exact OAuth App params (GO §8)

GitHub → Settings → Developer settings → OAuth Apps → **New OAuth App**

| Param | Value |
| --- | --- |
| Application name | `SFIA Studio Local F3` |
| Homepage URL | `http://localhost:3020` |
| Authorization callback URL | `http://localhost:3020/api/auth/callback/github` |

### After creation — place **four** vars in local file only

Path (never commit; gitignored):

`projects/sfia-studio/app/.env.local`

| Variable | Source (classes / binding only — **no secret values in chat**) |
| --- | --- |
| AUTH_GITHUB_ID | Client ID de l'OAuth App |
| AUTH_GITHUB_SECRET | Client Secret généré dans GitHub |
| AUTH_SECRET | secret local fort Auth.js |
| AUTH_MORRIS_GITHUB_SUBJECT | `github:295557155` (GO §8 binding for expected Morris pilot subject) |

**Do not paste secrets into Cursor/chat.** Morris edits `.env.local` locally.

Then Morris replies **only**:

```
OAUTH SETUP DONE
```

Cursor resumes **this same cycle** (live login + adapter proof). No automatic OAuth App creation by Cursor.

### Callback vs login entrypoint

| Role | URL | Status |
| --- | --- | --- |
| Callback (GitHub OAuth App) | `http://localhost:3020/api/auth/callback/github` | registered expectation — **not** login start |
| Login entrypoint (expected) | `http://localhost:3020/api/auth/signin` then GitHub | **not yet exercised** |

### Expected identity (when live resumes)

| Field | Expected |
| --- | --- |
| GitHub login | `mcleland147` |
| Numeric id | `295557155` |
| Principal | `github:295557155` |

---

## Live proof results (paused — not run)

| Proof item | Result |
| --- | --- |
| OAuth App configured | **NO** (manual Morris) |
| Live login | **NOT ATTEMPTED** |
| GitHub login observed | n/a |
| GitHub numeric id observed | n/a |
| Auth.js session proof | n/a |
| AuthJsGitHubIdentityAdapter live invocation | n/a |
| resulting principalId | n/a |
| actor:morris binding | n/a |
| AuthorityResolver live result | n/a |
| authn≠authz separation live | n/a (architecture unchanged; not re-proven live) |
| restart / DUR-4 live | n/a |
| logout / null-session live | n/a |
| Fake fallback | **0** |
| External GitHub write effects | **0** |
| Cursor REAL | **0** |
| Gate D consumed | **0 / NOT CONSUMED** |

---

## Targeted tests this cycle

Not re-run (no source/package mutation; candidate frozen identical). Prior Cycle 8/9 automated IAM + Critical Ack QA remains the last executed automated suite on this candidate. Live interactive OAuth pending Morris setup.

---

## R-T-A3 / honesty / Gate D

| Item | Assessment |
| --- | --- |
| R-T-A3-1 | **Unchanged OPEN HARD** — live GitHub OAuth proof **not yet run** |
| R-T-A3-2 | **Unchanged** — `crossStoreDurable=false` ; `productionRollbackProven=false` ; persistenceProduct=NOT_SELECTED |
| IAM honesty | SELECTED Auth.js+GitHub JWT/no-DB ; **IMPLEMENTED_BUT_LIVE_UNPROVEN** |
| openHard | true |
| deliveryReady | false |
| Gate D technical prerequisites | **NOT_SATISFIED** |
| Gate D consumed | **NOT CONSUMED** |
| Cursor REAL | **0** |
| External REAL effects | **0** |
| Project git write | **0** |

---

## Reserves

1. **LIVE_GITHUB_OAUTH_PROOF** blocked — Morris must create OAuth App + set four AUTH_* vars in `.env.local`
2. Production HTTP wiring of `AuthJsGitHubIdentityAdapter` constructor still absent outside tests (resume cycle must address live resolvePrincipal path per GO)
3. Product persistence remains NOT_SELECTED
4. Gate D NOT READY / NOT CONSUMED
5. No Cursor REAL

---

## Next Morris action (exact)

1. Create GitHub OAuth App with GO §8 params above
2. Write four vars into `projects/sfia-studio/app/.env.local` (never paste secrets in chat)
3. Reply only: `OAUTH SETUP DONE`
4. Cursor resumes **same** live proof cycle (signin → GitHub → session → adapter → R-T-A3 / Gate D reassessment)

**Not authorized by current GO:** project commit / push / PR / merge / Cursor REAL / Gate D consumption.

---

## Verdict (exact §31)

```
F3 LIVE GITHUB OAUTH PROOF PAUSED AT HUMAN CHECKPOINT —
IMPLEMENTATION UNCHANGED —
GITHUB OAUTH APP / LOCAL CREDENTIAL SETUP REQUIRED BY MORRIS —
NO SECRET EXPOSED —
NO CURSOR REAL —
NO GATE D —
NO PROJECT GIT WRITE
```

---

## Handoff publication (publish-in-cycle)

| Field | Value |
| --- | --- |
| Mode | publish-in-cycle |
| Branch | `sfia/review-handoff` |
| Canonical file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Expected commit message | `docs(review-handoff): publish F3 live GitHub OAuth proof` |
| Fast-forward only | YES |
| Force | NO |
| Inbound tip/blob | `9d1c59a…` / `8ecd1ca7…` |
| Remote FINAL tip/blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

END OF FULL REVIEW PACK
