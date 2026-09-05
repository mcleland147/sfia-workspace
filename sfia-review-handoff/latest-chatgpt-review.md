# SFIA Studio — AUTH SOURCE FINGERPRINT FORENSIC Review Pack FULL

**Timestamp:** 2026-09-05 02:47:33 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE · FULL · READ-ONLY DIAGNOSTIC
**Unique verdict:** AUTH FINGERPRINT FORENSIC PASS — METHOD DRIFT PROVEN / AUTH CONTENT PRESERVATION PROVEN / MW6 REAL NOT STARTED

## A. Timestamp
- 2026-09-05 02:47:33 CEST

## B. GO consumed
`GO MORRIS — AUTH FINGERPRINT MISMATCH FORENSIC READ-ONLY`

## C. Git Truth
### AUTH
- path `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- branch `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### MW6
- path `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence`
- branch `delivery/sfia-studio-nora-mw6-external-source-intelligence`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### INTEGRATION
- path `/Users/morris/Projects/sfia-workspace-mw6-auth-binding`
- branch `delivery/sfia-studio-mw6-auth-binding`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### HANDOFF
- path `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
- branch `sfia/review-handoff`
- HEAD `754625eaf3d0c55e380540bee603904e1372028d`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

## D. main / current review-handoff
- origin/main expected/actual: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- review-handoff tip at forensic start: `754625eaf3d0c55e380540bee603904e1372028d`

## E. Cycle / profile / typology
- CRITICAL · READ-ONLY FORENSIC · no product correction · no MW6 REAL

## F. Convergence qualification
- Capability: MW6 External Source Intelligence / Nora Cognitive Completion
- MW6 source candidate fingerprint: stable (`20828a42…`)
- Auth source candidate fingerprint: disputed → **resolved as method drift**
- MW6↔Auth composition technical proof: previously reviewed but blocked on FP prerequisite
- MW6 REAL: NOT STARTED · runtime v3: NON ADOPTED
- This cycle: classify mismatch only — no maturity promotion

## G. Initial mismatch
- Historical expected Auth FP: `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae`
- Last-cycle reported Auth FP: `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c`
- Last-cycle dirty path count: **38**
- Last pack also claimed Auth WRITES=0 / staged=0

## H. Historical handoff inventory (a312 occurrences)
| handoff SHA | timestamp | claimed a312 | claimed MATCH | method documented | file count |
| --- | --- | --- | --- | --- | --- |
| `5c7cd338…` | 2026-09-04T23:49:00+02:00 | YES (first) | claimed unchanged | partial (“Auth projects fingerprint”); Auth materialization **38** listed separately; porcelain=24 | rglob n not stated; materialization 38 |
| `1951080e…` | 2026-09-05T00:15:45+02:00 | YES | MATCH | not restated | — |
| `2d7f95f8…` | 2026-09-05T00:47:47+02:00 | YES | MATCH | **EXPLICIT:** MW6=porcelain `-uall` path+bytes; **Auth=`projects/**` rglob excl node_modules/.next** | — |
| `d12c5baa…` | 2026-09-05T01:43:00+02:00 | YES (last MATCH claim) | MATCH | not restated (carried) | — |
| `754625ea…` | 2026-09-05T02:23:11+02:00 | expected only | **MISMATCH** | applied **dirty porcelain** to Auth → d66 n=38 | 38 |

Commits containing a312 in tip blob: exactly the five above (first introduce `5c7cd338`; last MATCH `d12c5baa`; first MISMATCH report `754625ea`).

## I. First a312 occurrence
- Commit: `5c7cd338b950bd2581f809581112b809e6a20a59`
- Timestamp: 2026-09-04T23:49:00+02:00
- Context: STOP MW6 Auth binding — authority level not governed
- Claim: Auth projects fingerprint unchanged `a312…` after worktree recovery
- Also: “Files materialized from Auth (**38**)” — this is **materialization inventory**, not the rglob fingerprint cardinality

## J. Last a312 MATCH occurrence
- Commit: `d12c5baa4c594fb9d8f02f93667743aadfdcebb5`
- Timestamp: 2026-09-05T01:43:00+02:00
- Claim: Auth `a312…` MATCH WRITES=0

## K. Exact historical fingerprint method(s)
### METHOD-H01 (canonical Auth — first explicit dual documentation at `2d7f95f8`)
- Scope: all files under `projects/**` via `rglob`
- Excludes: any path part `node_modules` or `.next`
- Serialization: sorted relative paths; for each path: `path + NUL + file_bytes + NUL`
- Digest: SHA-256
- Note: historical wording said “path+bytes”; reproduction with **file contents** (not sizes) matches a312

### METHOD-H02 (incorrectly applied to Auth in `754625ea`)
- Scope: `git status --porcelain -uall -- projects/` dirty/untracked set only
- Parser: `line[3:]`; rename takes RHS of ` -> `; sorted unique paths
- Serialization: `path + NUL + file_bytes + NUL`
- This is the **MW6** method, not the documented Auth method

### METHOD-H03 (control)
- `git status --porcelain -- projects/` without `-uall` → n=21 → different FP (not a312)

## L. Exact current fingerprint method (last pack / forensic BEFORE)
- Identical to METHOD-H02
- Observed: `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` n=38 — **CONFIRMED**

## M. Reproduction table of all methods (on CURRENT Auth tree)
| ID | Algorithm | n | Current FP | equals a312? | equals d66? |
| --- | --- | --- | --- | --- | --- |
| H01 | rglob projects excl node_modules/.next · path\0bytes\0 | **2852** | `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae` | **YES** | no |
| H01b | rglob path:size newline (control) | 2852 | `7fcbd97e…` | no | no |
| H02 | porcelain -uall projects dirty · path\0bytes\0 | **38** | `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` | no | **YES** |
| H03 | porcelain no -uall projects | 21 | `4349bb38…` | no | no |

**Primary question answered:** YES — historical Auth method H01 applied to **current** Auth content reproduces **exactly** `a312…`.

## N. Historical/current path-set comparison
### Historical fingerprint path-set for a312
- Status: method EXACT at `2d7f95f8`; full path inventory not historically published
- Identity proven by: H01 on current Auth → a312 exact match (n=2852)
- Qualification: reconstruction of cardinality/method **EXACT**; full path dump not required once aggregate FP matches

### Current dirty path-set (H02 / d66) — EXACT ordered list (38)
- `??` `projects/sfia-studio/app/.env.example` size=861 sha256=0f05e151955b24238fdb3e43ad159e6a477cb27785b8e6693b3f8755b807f9e1
- `??` `projects/sfia-studio/app/__tests__/auth/allowlist-actor-s1.test.ts` size=7282 sha256=ce23ba2d649198db539fc295509b5bf2a974f944ce2750d468b1644ba225823f
- `??` `projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts` size=12586 sha256=a995369ecd553a003bf50b57106444b357a84e1933535c54af831471557ed31e
- `??` `projects/sfia-studio/app/__tests__/auth/better-auth-foundation.test.ts` size=3364 sha256=5310125a193b8694685c425d5212b85679c1620654c2fe220d4ea114f91638bf
- `??` `projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts` size=20046 sha256=0eaa84a5a5af45b6fee4ff28bac83e8fd40aa038f2e3f7c6925903dd0c814572
- `??` `projects/sfia-studio/app/__tests__/auth/helpers/accountCookie.ts` size=1771 sha256=18260579a52ddb7f294acdb1d724e248e45a1ae1851d5d9e21bea7253c2280ab
- `??` `projects/sfia-studio/app/__tests__/auth/policy-action-scoped-s1.test.ts` size=40266 sha256=b49d59601b323000feb8a015ee0cd882e77cf17c57312567a0888831b856317f
- `??` `projects/sfia-studio/app/__tests__/auth/route-protection.test.ts` size=4662 sha256=be2f5d974cd97bd73a01c75e4466a31b5c5cc43d485903ed8580bebac723db7f
- `??` `projects/sfia-studio/app/__tests__/auth/semantic-binding-build.test.ts` size=16544 sha256=c72fe68263bad4317b85666ddefe165bbb0a13a22a13659d755e0cddde0a8b28
- `??` `projects/sfia-studio/app/app/api/auth/[...all]/route.ts` size=890 sha256=dcd70ed6e6093725a2785d19ad633396e357fb454ec1ed049ee7d6e12e08bb51
- `??` `projects/sfia-studio/app/app/login/login-client.tsx` size=3558 sha256=9c77621fbcbc2a7819f6789e604b2b832a34c1b9c9510e98a004485cd6148056
- `??` `projects/sfia-studio/app/app/login/page.tsx` size=314 sha256=042baf2d5bbb66073c4edf627d9ff9709f7f9cba8f5689f26d4271aca4ee391a
- `??` `projects/sfia-studio/app/components/auth/LogoutButton.tsx` size=697 sha256=90b8876df80fa048f4003bf5be400c76ffb45757d8e4ca838bf4d6c76467ef30
- ` M` `projects/sfia-studio/app/components/shell/StudioShell.tsx` size=3295 sha256=299a288123bfc99e80890a9dbbc6f9cea016b72a97426d1f26e09b6bf8083b8e
- ` M` `projects/sfia-studio/app/components/shell/Topbar.tsx` size=4765 sha256=51b9a2879a88e72416afd9063f6fae73a25daddf2d36e9e37f97e07d92c3dd04
- ` M` `projects/sfia-studio/app/features/project-assistant/w2/actions.ts` size=15607 sha256=2a5720027846738e341ea8e23833c9edac90592e32f07b7b9f48b733951529e7
- ` M` `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts` size=15837 sha256=6e42fa2333b36792aefebbe2a365063957e2bffa8542bc43a448e176cd0c3224
- `??` `projects/sfia-studio/app/lib/auth/actorMapping.ts` size=1265 sha256=832991ec6015178e56dee2072eb6b60b3050d36e8c563254c0f73dd84ffac246
- `??` `projects/sfia-studio/app/lib/auth/allowlist.ts` size=3448 sha256=eadefaa34ab99587fc1a4748b366fdb0a220ebfde611313bf73c1f4a29015333
- `??` `projects/sfia-studio/app/lib/auth/auth-client.ts` size=235 sha256=c71359f9bb58ad46fe70475c03a1145bfe7b7f80f9f544f1b8e0439f14dcb70b
- `??` `projects/sfia-studio/app/lib/auth/auth.ts` size=5155 sha256=93f95474d07444a5efdb78a4965ed936b96cef3f638352888825dc6a1d3b47fd
- `??` `projects/sfia-studio/app/lib/auth/constants.ts` size=1220 sha256=2e9e7c2cfb830a9cfde3bd410198db3d2aec2b3b14b94e57461b306df682f92d
- `??` `projects/sfia-studio/app/lib/auth/index.ts` size=1546 sha256=1f6655729d221846bddd7087336a810a2215e07d9ba56c972cb837bbad2cb9e5
- `??` `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts` size=10900 sha256=70598944db9d9de38dd88d9b1e648953ffcef02817ba3277b7692e6d6fe45cf2
- `??` `projects/sfia-studio/app/lib/auth/providerAccountBinding.ts` size=5331 sha256=98433a62633344233cc886cfb9eab004601ebbe0b824b1b8d68a38186770a57f
- `??` `projects/sfia-studio/app/lib/auth/resolveCurrentPilote.ts` size=3894 sha256=681aafc772cd80f09d81833adbd02649fe17afad598821bce7f980b9fa240efd
- `??` `projects/sfia-studio/app/lib/auth/s1Authority.ts` size=8080 sha256=ee11bc66da4b9d743e93b097725c0841f0020bcaea69f260d157d6affbbeb174
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts` size=3179 sha256=05a3364c7f9597b856afb946faad322e401db8401051e1e8cc8f1c46b9228d53
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts` size=16364 sha256=4f6994cc20c46689ed328fa4a41d51207bd902f542d01bd68a97936c39956c5b
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts` size=8692 sha256=e753b84e7ca1e306bcc5fea15e81ae3cf9091dbd1042ca7b63a892cf30f716b2
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts` size=9202 sha256=0914fed964875815cf52c10b5eaed4313cb85bf6c56639fd67ce3ec31aaaac04
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts` size=15475 sha256=bf7aeb1f5e39200b05cc90d3eec2747fd80f7d3cad8626b80438aab2dc527646
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts` size=17711 sha256=e5299bbbd9a43e03bbdc7bf4294ae2ae1416276824947dfb096c2a988888d79d
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts` size=9167 sha256=a168d689e99a23e231832f65f5f68362cc54ba7595ec3279452f003a0a6d0dfe
- ` M` `projects/sfia-studio/app/lib/oa/execution-contract/index.ts` size=11649 sha256=29699d5bc73409306b71d2e83d43673feb0fedc6cc2c3b810575cfcd25d35008
- `??` `projects/sfia-studio/app/middleware.ts` size=1675 sha256=3eec268503d11da0cb739a16c3bd987a4e0d1dd195084588db4451e740f7506c
- ` M` `projects/sfia-studio/app/package-lock.json` size=313398 sha256=5fa32ea58da04852a3bd4ca4fa944527f49e01a2aa0c07ca3a3d7fbdeb967c11
- ` M` `projects/sfia-studio/app/package.json` size=1605 sha256=5bf2e7310039fdaa50da8c1fcd54446ba657673aab7d112b03427230bd21acfc

### Relation to “Auth 38 materialization” (`5c7cd338` §K)
- Historical materialization (INFERRED as dirty Auth candidate files): `.env.example`, `__tests__/auth/**`, `app/api/auth`, `app/login/**`, `components/auth`, shell Topbar/StudioShell, w2 actions/prepare, `lib/auth/**`, EC helpers, middleware, package.json/lock
- Current dirty 38: same family expanded to leaf files
- Root confusion: last pack used dirty n=38 as Auth fingerprint scope; historical a312 used full projects tree (2852)

## O. Per-file current hashes
- Dirty set (38): listed in §N with individual SHA-256
- Full rglob (2852): aggregate FP = a312 (list not dumped)

## P. Byte-level content delta vs a312 anchor
- Under METHOD-H01 on current Auth: FP == a312 ⇒ **no aggregate content drift** in the historical hash domain
- Control: excluding `projects/sfia-studio/app/.env.local` from H01 yields a **different** FP ⇒ that file is in the historical hash set
- `.env.local`: **present**; size=268 bytes; **value NOT read/printed** (secret)
- Other secret-named paths exist under projects (test/OA secret adapters); names noted; no values printed
- Conclusion: **no REAL_CONTENT_DRIFT** of the Auth candidate relative to a312 under the historical method

## Q. Materialization evidence assessment
- `5c7cd338` documents Auth **38** + MW6 **17** materialization into integration, overlap=0
- That 38 is a **copy inventory**, not the Auth rglob fingerprint cardinality
- Integration later received binding corrections — cannot naively diff current Integration vs Auth as historical a312 proof
- Assessment: explains “38”; **INCONCLUSIVE** as byte anchor for a312; H01 reproduction is decisive

## R. mtime observations (SECONDARY ONLY)
- Auth `lib/auth/*.ts` mtimes remain 2026-09-04
- Not used as content-identity proof; bytes/hashes primary

## S. BEFORE/AFTER source proof (this forensic)
- BEFORE dirty FP (H02): `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c`
- AFTER dirty FP (H02): `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c`
- BEFORE == AFTER: **YES**
- `git status --porcelain=v1 -uall` BEFORE/AFTER: **byte-identical** (2645 bytes)
- AFTER H01 still equals a312: **YES**
- Product/source writes this cycle: **0**

## T. Classification
**METHOD_DRIFT**

## U. Exact reasoning
1. Documented Auth method (H01 rglob) on **current** Auth tree reproduces a312 exactly.
2. Last cycle computed Auth FP with MW6 dirty-porcelain method (H02) → d66 / n=38.
3. Therefore a312 vs d66 is fully explained by algorithm/scope change, not Auth candidate mutation.
4. First explicit method split Auth≠MW6 appears at handoff `2d7f95f8`; last pack `754625ea` collapsed both to dirty porcelain.
5. “Auth 38” historically meant materialization/dirty leaf count, not H01 cardinality (2852).

## V. Affected files if REAL_CONTENT_DRIFT
- **N/A** — classification is METHOD_DRIFT; no Auth candidate content drift under H01

## W. Source worktrees writes = 0
- Auth / MW6 / Integration product sources: **unchanged by this forensic**

## X. staged = 0
- All worktrees staged=0

## Y. Product Git actions = 0
- commit/push/PR/merge product = 0

## Z. MW6 REAL NOT STARTED
- Confirmed

## AA. Next required decision
- Return to ChatGPT: METHOD_DRIFT proven → ChatGPT may reassess the previously blocked final composition verdict (`754625ea` technical composition claims) with Auth preservation prerequisite restored under H01.
- **No silent rebaseline** of Auth FP to d66.
- Recommended continuing Auth anchor: **H01 / a312…** (keep dual methods documented: MW6 dirty vs Auth rglob).
- Do NOT start MW6 REAL in this cycle.

## AB. Unique verdict

**AUTH FINGERPRINT FORENSIC PASS — METHOD DRIFT PROVEN / AUTH CONTENT PRESERVATION PROVEN / MW6 REAL NOT STARTED**
