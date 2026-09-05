# SFIA Studio — AUTH CANDIDATE ANCHOR REQUALIFICATION Review Pack FULL

**Timestamp:** 2026-09-05 03:01:32 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE · FULL · READ-ONLY
**Unique verdict:** READY FOR CHATGPT AUTH CANDIDATE ANCHOR REVIEW — AUTH-CANDIDATE-ANCHOR-V1 MINTED AND REPRODUCIBLE / HISTORICAL a312 RETIRED AS ACTIVE PRESERVATION ANCHOR / MW6 REAL NOT STARTED

## A. Timestamp
- 2026-09-05 03:01:32 CEST

## B. GO consumed
`GO MORRIS — AUTH CANDIDATE ANCHOR REQUALIFICATION — BASE SHA + NORMALIZED DELTA MANIFEST`

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
- HEAD `a6ce26d3cd5a97de63a352cc3130cc3c9e15724f`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

## D. origin/main / base
- immutable base SHA: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- HEAD Auth/MW6/Integration = `ebdae92a96ea1c49444dfb668342c1453f57a540`

## E. Cycle / profile / typology
- CRITICAL · READ-ONLY · Auth candidate identity anchoring · no functional Auth/MW6 work

## F. Convergence Pre-check
- Capability: Nora Cognitive Completion → MW6 External Source Intelligence
- Foundations: V3-F11 / V3-F12
- Local milestone: AUTH candidate evidence anchoring for MW6 ↔ Auth integration
- Entry: AUTH functional candidate EXISTS; a312 NON-RECONSTRUCTIBLE; H02 d66; MW6 FP stable; composition candidate local; MW6 REAL NOT STARTED
- Gap closed this cycle: durable reproducible Auth candidate anchor
- Exit: AUTH-CANDIDATE-ANCHOR-V1 = MINTED + REPRODUCED + FULL MANIFEST PUBLISHED

## G. Input forensic handoff
- `a6ce26d3cd5a97de63a352cc3130cc3c9e15724f`
- Verdict: AUTH FINGERPRINT FORENSIC INCONCLUSIVE — HISTORICAL SNAPSHOT/METHOD NOT SUFFICIENTLY RECONSTRUCTIBLE / MW6 REAL NOT STARTED

## H. Old anchor disposition
- Historical FP: `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae`
- Disposition (this PASS): **HISTORICAL PROVENANCE · NON-RECONSTRUCTIBLE · RETIRED AS ACTIVE PRESERVATION ANCHOR**
- Explicitly NOT: rewrite of history; NOT claim current == a312-era; NOT automatic AUTH REAL carry-forward

## I. H02 continuity reproduction
- Method: `git status --porcelain -uall -- projects/` · sorted path + NUL + bytes + NUL · SHA-256
- count: **38**
- fingerprint: `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c`
- result: **PASS**
- scope containment: **38/38** under `projects/sfia-studio/app`

## J. Anchor schema name/version
- `AUTH-CANDIDATE-ANCHOR-V1` / header token `SFIA_AUTH_CANDIDATE_ANCHOR_V1`

## K. Exact scope
- `projects/sfia-studio/app`

## L. Exact extraction commands
```
git diff --name-status -z -M HEAD -- projects/sfia-studio/app
git ls-files --others --exclude-standard -z -- projects/sfia-studio/app
```
- Not used: filesystem rglob; ignored files; mtimes; `.env.local`

## M. Exact normalization rules
- Tracked statuses from Git name-status (M/A/D/R\<score\>/C\<score\>/T as reported)
- Untracked non-ignored → status `U`
- Entry fields: status, oldPath (empty unless rename/copy), path, kind, size, sha256
- kind: file | symlink | deleted
- file: size=bytes, sha256=SHA-256(bytes)
- symlink: do not follow; size/sha256 of target string bytes
- deleted: size=0, sha256=`-`
- Sort key (byte-wise): path, oldPath, status

## N. Exact serialization definition
- Header fields NUL-separated:
  `SFIA_AUTH_CANDIDATE_ANCHOR_V1` · `base` · `<base sha>` · `scope` · `projects/sfia-studio/app` · `count` · `<decimal n>`
- Per entry: `<status>` · `<oldPath>` · `<path>` · `<kind>` · `<size>` · `<sha256|->` (each NUL-terminated)
- No newlines semantic; no timestamp; no absolute paths; no secrets
- Digest: SHA-256(canonical serialized bytes)

## O. FULL ordered manifest
| # | status | oldPath | path | kind | size | sha256 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `U` | — | `projects/sfia-studio/app/.env.example` | file | 861 | `0f05e151955b24238fdb3e43ad159e6a477cb27785b8e6693b3f8755b807f9e1` |
| 2 | `U` | — | `projects/sfia-studio/app/__tests__/auth/allowlist-actor-s1.test.ts` | file | 7282 | `ce23ba2d649198db539fc295509b5bf2a974f944ce2750d468b1644ba225823f` |
| 3 | `U` | — | `projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts` | file | 12586 | `a995369ecd553a003bf50b57106444b357a84e1933535c54af831471557ed31e` |
| 4 | `U` | — | `projects/sfia-studio/app/__tests__/auth/better-auth-foundation.test.ts` | file | 3364 | `5310125a193b8694685c425d5212b85679c1620654c2fe220d4ea114f91638bf` |
| 5 | `U` | — | `projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts` | file | 20046 | `0eaa84a5a5af45b6fee4ff28bac83e8fd40aa038f2e3f7c6925903dd0c814572` |
| 6 | `U` | — | `projects/sfia-studio/app/__tests__/auth/helpers/accountCookie.ts` | file | 1771 | `18260579a52ddb7f294acdb1d724e248e45a1ae1851d5d9e21bea7253c2280ab` |
| 7 | `U` | — | `projects/sfia-studio/app/__tests__/auth/policy-action-scoped-s1.test.ts` | file | 40266 | `b49d59601b323000feb8a015ee0cd882e77cf17c57312567a0888831b856317f` |
| 8 | `U` | — | `projects/sfia-studio/app/__tests__/auth/route-protection.test.ts` | file | 4662 | `be2f5d974cd97bd73a01c75e4466a31b5c5cc43d485903ed8580bebac723db7f` |
| 9 | `U` | — | `projects/sfia-studio/app/__tests__/auth/semantic-binding-build.test.ts` | file | 16544 | `c72fe68263bad4317b85666ddefe165bbb0a13a22a13659d755e0cddde0a8b28` |
| 10 | `U` | — | `projects/sfia-studio/app/app/api/auth/[...all]/route.ts` | file | 890 | `dcd70ed6e6093725a2785d19ad633396e357fb454ec1ed049ee7d6e12e08bb51` |
| 11 | `U` | — | `projects/sfia-studio/app/app/login/login-client.tsx` | file | 3558 | `9c77621fbcbc2a7819f6789e604b2b832a34c1b9c9510e98a004485cd6148056` |
| 12 | `U` | — | `projects/sfia-studio/app/app/login/page.tsx` | file | 314 | `042baf2d5bbb66073c4edf627d9ff9709f7f9cba8f5689f26d4271aca4ee391a` |
| 13 | `U` | — | `projects/sfia-studio/app/components/auth/LogoutButton.tsx` | file | 697 | `90b8876df80fa048f4003bf5be400c76ffb45757d8e4ca838bf4d6c76467ef30` |
| 14 | `M` | — | `projects/sfia-studio/app/components/shell/StudioShell.tsx` | file | 3295 | `299a288123bfc99e80890a9dbbc6f9cea016b72a97426d1f26e09b6bf8083b8e` |
| 15 | `M` | — | `projects/sfia-studio/app/components/shell/Topbar.tsx` | file | 4765 | `51b9a2879a88e72416afd9063f6fae73a25daddf2d36e9e37f97e07d92c3dd04` |
| 16 | `M` | — | `projects/sfia-studio/app/features/project-assistant/w2/actions.ts` | file | 15607 | `2a5720027846738e341ea8e23833c9edac90592e32f07b7b9f48b733951529e7` |
| 17 | `M` | — | `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts` | file | 15837 | `6e42fa2333b36792aefebbe2a365063957e2bffa8542bc43a448e176cd0c3224` |
| 18 | `U` | — | `projects/sfia-studio/app/lib/auth/actorMapping.ts` | file | 1265 | `832991ec6015178e56dee2072eb6b60b3050d36e8c563254c0f73dd84ffac246` |
| 19 | `U` | — | `projects/sfia-studio/app/lib/auth/allowlist.ts` | file | 3448 | `eadefaa34ab99587fc1a4748b366fdb0a220ebfde611313bf73c1f4a29015333` |
| 20 | `U` | — | `projects/sfia-studio/app/lib/auth/auth-client.ts` | file | 235 | `c71359f9bb58ad46fe70475c03a1145bfe7b7f80f9f544f1b8e0439f14dcb70b` |
| 21 | `U` | — | `projects/sfia-studio/app/lib/auth/auth.ts` | file | 5155 | `93f95474d07444a5efdb78a4965ed936b96cef3f638352888825dc6a1d3b47fd` |
| 22 | `U` | — | `projects/sfia-studio/app/lib/auth/constants.ts` | file | 1220 | `2e9e7c2cfb830a9cfde3bd410198db3d2aec2b3b14b94e57461b306df682f92d` |
| 23 | `U` | — | `projects/sfia-studio/app/lib/auth/index.ts` | file | 1546 | `1f6655729d221846bddd7087336a810a2215e07d9ba56c972cb837bbad2cb9e5` |
| 24 | `U` | — | `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts` | file | 10900 | `70598944db9d9de38dd88d9b1e648953ffcef02817ba3277b7692e6d6fe45cf2` |
| 25 | `U` | — | `projects/sfia-studio/app/lib/auth/providerAccountBinding.ts` | file | 5331 | `98433a62633344233cc886cfb9eab004601ebbe0b824b1b8d68a38186770a57f` |
| 26 | `U` | — | `projects/sfia-studio/app/lib/auth/resolveCurrentPilote.ts` | file | 3894 | `681aafc772cd80f09d81833adbd02649fe17afad598821bce7f980b9fa240efd` |
| 27 | `U` | — | `projects/sfia-studio/app/lib/auth/s1Authority.ts` | file | 8080 | `ee11bc66da4b9d743e93b097725c0841f0020bcaea69f260d157d6affbbeb174` |
| 28 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts` | file | 3179 | `05a3364c7f9597b856afb946faad322e401db8401051e1e8cc8f1c46b9228d53` |
| 29 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts` | file | 16364 | `4f6994cc20c46689ed328fa4a41d51207bd902f542d01bd68a97936c39956c5b` |
| 30 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts` | file | 8692 | `e753b84e7ca1e306bcc5fea15e81ae3cf9091dbd1042ca7b63a892cf30f716b2` |
| 31 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts` | file | 9202 | `0914fed964875815cf52c10b5eaed4313cb85bf6c56639fd67ce3ec31aaaac04` |
| 32 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts` | file | 15475 | `bf7aeb1f5e39200b05cc90d3eec2747fd80f7d3cad8626b80438aab2dc527646` |
| 33 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts` | file | 17711 | `e5299bbbd9a43e03bbdc7bf4294ae2ae1416276824947dfb096c2a988888d79d` |
| 34 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts` | file | 9167 | `a168d689e99a23e231832f65f5f68362cc54ba7595ec3279452f003a0a6d0dfe` |
| 35 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/index.ts` | file | 11649 | `29699d5bc73409306b71d2e83d43673feb0fedc6cc2c3b810575cfcd25d35008` |
| 36 | `U` | — | `projects/sfia-studio/app/middleware.ts` | file | 1675 | `3eec268503d11da0cb739a16c3bd987a4e0d1dd195084588db4451e740f7506c` |
| 37 | `M` | — | `projects/sfia-studio/app/package-lock.json` | file | 313398 | `5fa32ea58da04852a3bd4ca4fa944527f49e01a2aa0c07ca3a3d7fbdeb967c11` |
| 38 | `M` | — | `projects/sfia-studio/app/package.json` | file | 1605 | `5bf2e7310039fdaa50da8c1fcd54446ba657673aab7d112b03427230bd21acfc` |

- entry count: **38**

## P. Ignored / volatile exclusions
Proven **absent** from manifest (presence may exist on disk; contents not read for secrets):
- `projects/sfia-studio/app/.env.local`
- `projects/sfia-studio/app/tsconfig.tsbuildinfo`
- `projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite`
- `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite`
- Plus all other gitignored paths under scope (extraction uses `--exclude-standard`)

## Q. RUN A
- Implementation: `/tmp/auth_anchor_v1_run_a.py` (Python, fresh process)
- count: **38**
- digest: `24c9f908a529f2d00f0003cd985d763648ac949111389021d198711d27a475e7`
- serialization bytes: 5484

## R. RUN B
- Implementation: `/tmp/auth_anchor_v1_run_b.mjs` (Node, independent parse/sort/hash)
- count: **38**
- digest: `24c9f908a529f2d00f0003cd985d763648ac949111389021d198711d27a475e7`

## S. Reproduction equality
- entry_count_A == entry_count_B: **YES** (38)
- ordered_manifest_A == ordered_manifest_B: **YES**
- anchor_A == anchor_B: **YES**
- serialization bytes A == B: **YES**

## T. FINAL AUTH-CANDIDATE-ANCHOR-V1 digest
- **`24c9f908a529f2d00f0003cd985d763648ac949111389021d198711d27a475e7`**
- base: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- scope: `projects/sfia-studio/app`
- delta entries: 38 (14×M + 24×U; 0 renames/deletes)

## U. BEFORE/AFTER status identity
- BEFORE status bytes: 2645 sha256=`7e3483759a9a856fd6c183279f3f01f13a6af599d5054229de41595891e85d7c`
- AFTER status bytes: 2645 sha256=`7e3483759a9a856fd6c183279f3f01f13a6af599d5054229de41595891e85d7c`
- equal: **True**

## V. BEFORE/AFTER anchor identity
- mint digest: `24c9f908a529f2d00f0003cd985d763648ac949111389021d198711d27a475e7`
- after recompute A/B: `24c9f908a529f2d00f0003cd985d763648ac949111389021d198711d27a475e7`
- H02 before/after: MATCH `d66…` / 38
- equal: **YES**

## W. Source/product writes = 0
- Auth / MW6 / Integration product trees: **unchanged** (read-only cycle)

## X. staged = 0
- Auth/MW6/Integration staged=0

## Y. Product commit/push/PR/merge = 0
- Confirmed intent and local state

## Z. Temporal-validity statement
- AUTH-CANDIDATE-ANCHOR-V1 proves future identity vs **this mint state**.
- It does **not** prove that this mint state is byte-identical to any historical Auth snapshot that produced `a312…` or earlier AUTH REAL proofs.
- Direction: MINT → future preservation checks only.

## AA. Claims allowed (pending ChatGPT review)
- AUTH-CANDIDATE-ANCHOR-V1 = MINTED
- BASE SHA = recorded
- NORMALIZED DELTA MANIFEST = COMPLETE
- CURRENT AUTH CANDIDATE = ANCHORED AT MINT STATE
- ANCHOR = REPRODUCIBLE
- Historical a312 = NON-RECONSTRUCTIBLE / RETIRED AS ACTIVE PRESERVATION ANCHOR

## AB. Claims forbidden
- CURRENT AUTH == HISTORICAL a312
- AUTH REAL CURRENT-CANDIDATE RE-PROVEN
- AUTH REAL historical proof automatically carried forward
- MW6↔AUTH final composition accepted by ChatGPT
- MW6 REAL eligible / proven / COMPLETE
- Cognitive Completion proven · runtime v3 ADOPTED · production-ready

## AC. Debt / reserves
- ChatGPT must decide whether current Auth candidate needs functional revalidation before composition reassessment
- Integration composition candidate remains local / not ChatGPT-accepted as final
- MW6 REAL not started

## AD. Unique verdict

**READY FOR CHATGPT AUTH CANDIDATE ANCHOR REVIEW — AUTH-CANDIDATE-ANCHOR-V1 MINTED AND REPRODUCIBLE / HISTORICAL a312 RETIRED AS ACTIVE PRESERVATION ANCHOR / MW6 REAL NOT STARTED**
