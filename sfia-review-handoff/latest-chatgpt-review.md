# SFIA Studio — AUTH SOURCE FINGERPRINT FORENSIC Review Pack FULL

**Timestamp:** 2026-09-05 02:53:41 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE · FULL · READ-ONLY DIAGNOSTIC
**Supersedes:** handoff `1f8bd0b7` (premature METHOD_DRIFT PASS — withdrawn; H01 does not reproduce a312 on current Auth)
**Unique verdict:** AUTH FINGERPRINT FORENSIC INCONCLUSIVE — HISTORICAL SNAPSHOT/METHOD NOT SUFFICIENTLY RECONSTRUCTIBLE / MW6 REAL NOT STARTED

## A. Timestamp
- 2026-09-05 02:53:41 CEST

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
- HEAD `1f8bd0b78476a94cda5173a1b18dc3f7daf6e9e4`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

## D. main / current review-handoff
- origin/main expected/actual: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- review-handoff tip at forensic start: `754625eaf3d0c55e380540bee603904e1372028d`
- prior erroneous forensic tip (withdrawn): `1f8bd0b78476a94cda5173a1b18dc3f7daf6e9e4`

## E. Cycle / profile / typology
- CRITICAL · READ-ONLY FORENSIC · no product correction · no MW6 REAL

## F. Convergence qualification
- Capability: MW6 External Source Intelligence / Nora Cognitive Completion
- MW6 source candidate fingerprint: stable (`20828a42…`) under dirty porcelain method
- Auth source candidate fingerprint: **disputed**; historical a312 not reproducible on current tree
- MW6↔Auth composition technical proof: blocked pending Auth anchor requalification
- MW6 REAL: NOT STARTED · runtime v3: NON ADOPTED

## G. Initial mismatch
- Historical expected Auth FP: `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae`
- Last-cycle reported Auth FP: `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` (dirty porcelain n=38)
- Dirty path count: **38** · Auth WRITES claimed=0 · staged=0

## H. Historical handoff inventory (a312)
| handoff SHA | timestamp | role | method documented | notes |
| --- | --- | --- | --- | --- |
| `5c7cd338…` | 2026-09-04T23:49:00+02:00 | **FIRST occurrence** of a312 | partial (“Auth projects fingerprint”); materialization Auth **38** listed separately | a312 minted here; not present in earlier AUTH REAL handoffs |
| `1951080e…` | 2026-09-05T00:15:45+02:00 | MATCH carry | not restated | |
| `2d7f95f8…` | 2026-09-05T00:47:47+02:00 | MATCH + first dual method doc | MW6=porcelain `-uall`; **Auth=`projects/**` rglob excl node_modules/.next** | |
| `d12c5baa…` | 2026-09-05T01:43:00+02:00 | **last MATCH claim** | carried | |
| `754625ea…` | 2026-09-05T02:23:11+02:00 | MISMATCH report | applied dirty porcelain to Auth → d66 n=38 | ChatGPT STOP |
| `1f8bd0b7…` | 2026-09-05T02:48:12+02:00 | erroneous METHOD_DRIFT PASS | claimed H01→a312 | **WITHDRAWN by this pack** — claim not reproducible |

## I. First a312 occurrence
- `5c7cd338b950bd2581f809581112b809e6a20a59` @ 2026-09-04T23:49:00+02:00
- Context: STOP MW6 Auth binding; post worktree-recovery claim “Auth projects fingerprint unchanged: a312…”
- No prior handoff contains a312 (AUTH REAL tips `d8000206` / `45bbf95f` do not mint it)
- No published path inventory / per-file hashes for the a312 snapshot

## J. Last a312 MATCH occurrence
- `d12c5baa4c594fb9d8f02f93667743aadfdcebb5` @ 2026-09-05T01:43:00+02:00

## K. Exact historical fingerprint method(s)
### METHOD-H01 (documented Auth at `2d7f95f8`)
- `projects/**` rglob; exclude path parts `node_modules`, `.next`
- Serialization: sorted relpath + NUL + file_bytes + NUL; SHA-256
- Historical packs never published n=2852 explicitly; current H01 cardinality is 2852

### METHOD-H02 (last pack `754625ea` / forensic dirty)
- `git status --porcelain -uall -- projects/`; path = `line[3:]` (rename RHS); sorted unique
- Same path\0bytes\0 serialization
- Observed: d66… n=38 — **CONFIRMED**

### METHOD-H03 (control)
- porcelain without `-uall` → n=21 → other FP

## L. Exact current fingerprint method (last pack)
- METHOD-H02 → `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` n=38 **CONFIRMED**

## M. Reproduction table (CURRENT Auth tree)
| ID | Algorithm | n | Current FP | equals a312? | equals d66? |
| --- | --- | --- | --- | --- | --- |
| H01 | rglob excl node_modules/.next · path\0bytes\0 | **2852** | `ae8f638a098e94a8201cf92f8982137400a8bee80f064561f719a034b4b66fda` | **NO** | no |
| H01−volatile4 | H01 minus 4 ignored volatiles | 2848 | `94d7b767977aee3795bed7ca91d03b4acef3edfc5e479c828d240168c2321846` | **NO** | no |
| H01 tracked+other | git ls-files -co --exclude-standard projects | 2848 | `94d7b767…` (same) | **NO** | no |
| H02 | porcelain -uall projects dirty | **38** | `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` | no | **YES** |
| H03 | porcelain no -uall | 21 | (other) | no | no |

**Primary question:** Does any documented historical method on **current** Auth reproduce a312?
**Answer: NO.** H01 (the documented Auth method) yields `ae8f638a…`, not `a312…`.

### Correction notice
Prior pack `1f8bd0b7` incorrectly claimed H01→a312 MATCH. That claim is **false** on the current Auth tree and is withdrawn. Likely cause of error: conversation-summary hallucination / unverified carry of prior MATCH language.

## N. Historical/current path-set comparison
### Historical a312 path-set
- Status: **NOT EXACTLY RECORDED** (no full inventory in handoffs)
- Method EXACT at `2d7f95f8` (rglob); cardinality/path list **INFERRED only** from current H01 (n=2852) — **not** proven identical to a312-era set

### Current dirty path-set (H02 / d66) — EXACT (38)
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

### Ignored files included in H01 but invisible to porcelain (EXACT current)
- `projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite` (gitignored; not in `git status --porcelain -uall`; **included in H01**)
- `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` (gitignored; not in `git status --porcelain -uall`; **included in H01**)
- `projects/sfia-studio/app/.env.local` (gitignored; not in `git status --porcelain -uall`; **included in H01**)
- `projects/sfia-studio/app/tsconfig.tsbuildinfo` (gitignored; not in `git status --porcelain -uall`; **included in H01**)
- `.env.local`: present; size=268; **value NOT read/printed**
- These volatiles make H01 a fragile “source” anchor (sqlite / tsbuildinfo / secrets)

### Added/removed vs historical a312 inventory
- **Cannot be computed EXACTLY** — historical inventory absent
- INFERRED: “Auth 38” in `5c7cd338` was materialization/dirty leaf inventory, not H01 cardinality

## O. Per-file current hashes
- Dirty 38: §N
- Full H01: aggregate only (`ae8f638a…`); 2852-path dump omitted

## P. Byte-level content delta vs a312
- Aggregate: current H01 (`ae8f638a…`) **≠** a312 with **same method** and same current n=2852
- Therefore **at least one** file byte in the H01 domain differs from the unknown a312-era snapshot
- Exact file list: **NOT ATTRIBUTABLE** (no historical per-file hashes / FULL pack snapshot of Auth tree)
- Excluding 4 ignored volatiles still ≠ a312 → drift is **not solely** explained by those four under current bytes (either historical set differed, or other files also differ, or a312 was never correctly measured)
- Dirty Auth candidate (H02) stable at d66 across this forensic — does **not** prove identity to a312-era product bytes

## Q. Materialization evidence
- `5c7cd338` Auth 38 + MW6 17 overlap=0 is a copy inventory, not a312 path-set
- Integration later corrected — naïve Auth↔Integration diff is **not** historical a312 proof
- Assessment: **INCONCLUSIVE** as byte anchor

## R. mtime (SECONDARY ONLY)
- Volatile ignored files mtimes (local): sqlite/env ~2026-09-04 evening; `tsconfig.tsbuildinfo` ~2026-09-04 23:24
- Not used as content-identity proof

## S. BEFORE/AFTER source proof (this forensic)
- BEFORE dirty FP (H02): `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c`
- AFTER dirty FP (H02): `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c`
- BEFORE == AFTER (H02): **YES**
- `git status --porcelain=v1 -uall` BEFORE/AFTER: **byte-identical** (2645 bytes; sha256 `7e3483759a9a856fd6c183279f3f01f13a6af599d5054229de41595891e85d7c`; equal=True)
- H01 after forensic: `ae8f638a098e94a8201cf92f8982137400a8bee80f064561f719a034b4b66fda` (≠ a312)
- Product/source writes this forensic: **0** (status identity)

## T. Classification
**HISTORICAL_PROOF_INSUFFICIENT**

## U. Exact reasoning
1. a312 vs d66 is partly a **method/scope** difference (rglob≈2852 vs dirty=38) — but that alone is not CASE A.
2. CASE A METHOD_DRIFT requires proven **content identity** under the historical method. Current H01 ≠ a312 → identity **not** proven.
3. CASE B REAL_CONTENT_DRIFT requires identifying **exact** changed files vs a312. No historical per-file snapshot exists → cannot list them.
4. a312 was first minted at `5c7cd338` without a published path inventory; subsequent MATCH claims appear carried; tool-result hashes for the mint are not recoverable from handoff artifacts.
5. H01 includes gitignored volatiles invisible to dirty fingerprints — further undermines a312 as a durable Auth “source candidate” proof.
6. Therefore the honest gate is **HISTORICAL_PROOF_INSUFFICIENT** (requalify anchor), not METHOD_DRIFT PASS and not a forced REAL_CONTENT_DRIFT file list.

## V. Affected files if REAL_CONTENT_DRIFT
- **Not asserted** — exact a312 delta files unknown
- Suspect class (not proof of sole cause): 4 ignored H01 members listed in §N

## W. Source worktrees writes = 0
- Auth / MW6 / Integration product sources unchanged by forensic (status proof)

## X. staged = 0
- All product worktrees staged=0

## Y. Product Git actions = 0
- commit/push/PR/merge product = 0

## Z. MW6 REAL NOT STARTED
- Confirmed

## AA. Next required decision
- ChatGPT/Morris: choose a **new qualified Auth anchor strategy**, e.g.:
  - redefine Auth candidate FP as dirty porcelain H02 (document dual methods), and freeze current d66 + path inventory; or
  - redefine Auth candidate FP as tracked+untracked-not-ignored only (exclude ignored volatiles), mint new baseline with full path inventory; or
  - reconstruct a312-era snapshot from other evidence if any exists outside handoff
- **No silent rebaseline** without explicit decision
- Do **not** start MW6 REAL
- Do **not** treat withdrawn `1f8bd0b7` METHOD_DRIFT PASS as valid

## AB. Unique verdict

**AUTH FINGERPRINT FORENSIC INCONCLUSIVE — HISTORICAL SNAPSHOT/METHOD NOT SUFFICIENTLY RECONSTRUCTIBLE / MW6 REAL NOT STARTED**
