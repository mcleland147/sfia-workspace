# SFIA Review Pack — FULL — Final Cycle 9 DETERMINISTIC QA

## 1. Timestamp + timezone

- Timestamp: 2026-08-17 11:53:04 CEST
- Timezone: Europe/Paris

## 2. Cycle identity

- Repo: `mcleland147/sfia-workspace`
- Cycle: 9 — QA / validation
- Typologie: INC — Final QA Pre-M6
- Profil: **Critical**
- Justification: dernier gate déterministe avant décision Morris distincte sur FIRST REAL; autorité HumanDecision/Confirmation/Gate D; continuité Attempt→Evidence→Nora→LPS; persistence/recovery; preuve browser G-UX-11. Critical porte sur la rigueur de preuve, PAS une autorisation REAL.

## 3. GO Morris consumed

`GO — NEW FINAL CYCLE 9 — DETERMINISTIC QA — ZERO REAL`

Authorized and used: local inspection; existing tests; isolated Product DB runtime; existing Playwright; captures under `.tmp-sfia-review/**`; FULL pack; L3 handoff.

Not authorized and not done: product/test/config mutation; OpenAI live; Cursor REAL; project commit/push/PR/merge; UAT; M6; FIRST REAL.

## 4. Git Truth PRE

```
timestamp=2026-08-17 11:48:20 CEST
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=0d33478566627a9bf507d5a06323962d349308ee
origin/sfia/review-handoff=38491f2be2e91fe8fafbee2f090a1d6dfc4b536a
staged_count=0
candidate=DIRTY expected
```

HEAD = origin/main = `0d33478566627a9bf507d5a06323962d349308ee`
origin/sfia/review-handoff (before this publish) = `38491f2be2e91fe8fafbee2f090a1d6dfc4b536a`
staged = none
DIRTY candidate preserved. No reset/clean/stash/rebase/merge/destructive checkout/project staging.

## 5. Git Truth POST (before handoff publish)

```
timestamp=2026-08-17 11:51:36 CEST
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=0d33478566627a9bf507d5a06323962d349308ee
origin/sfia/review-handoff=38491f2be2e91fe8fafbee2f090a1d6dfc4b536a
staged_count=0
```

HEAD unchanged. Project files not staged. Candidate dirty preserved except `.tmp-sfia-review/**` campaign artifacts.

## 6. Parent handoff / origin/main

- origin/main: `0d33478566627a9bf507d5a06323962d349308ee`
- Parent handoff: `38491f2be2e91fe8fafbee2f090a1d6dfc4b536a`
- Path: `sfia-review-handoff/latest-chatgpt-review.md`
- R1/R2/R3 accepted CLOSED; R3 async continuation TEST-ONLY EXIT PROOF ACCEPTED.

## 7. Sources consulted

Governance: `sfia-studio-convergence-build-doctrine.md`, `sfia-studio-convergence-roadmap.md`

Doctrine v3: framing 30, 32, 34, 35

Process: `sfia-cycle-routing-guide.md`, `sfia-chatgpt-cursor-operating-model.md`, `sfia-rules-and-guardrails.md`, `sfia-knowledge-layer.md`, `sfia-cycle-execution-template.md`

CKC Cycle 9: `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`

Handoff: `git show origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`

## 8. CKC QA

- Path: `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`
- SHA (git hash-object): `9d9970d611dbb6e52297ac215604d3a08e87e738`
- Status: `candidate` / experimental cognitive guidance
- Usage: cognitive only — no execution authority; did not expand or shrink this GO.

Applied: object exact; référentiel; Observation/Réserve/Verdict; nominal+négatif+recovery; skip classification; anti-claims.

## 9. Convergence qualification

KEEP: Product SQLite, Project/LPS, HumanDecision, DecisionBasis, ExecutionContract, Confirmation, ExecutionAttempt, Evidence, ReviewBundle, Recommendation, History/Recovery, clean-slate Option A, R1/R2/R3, existing deterministic harness.

HARVEST: existing Playwright Option A specs + `/api/e2e/option-a-qa-scenario` (gated).

COMPLETE this cycle: deterministic browser/product exit proof candidate (G-UX-11).

FREEZE: legacy presentation.

Gap closed as SATISFIED CANDIDATE: G-UX-11 deterministic browser/product proof.

Reserves preserved: studio.m4.real_off; old C8 canonical DB pollution; G-UX-08 OPEN/DEFERRED; G-UX-09 KEEP RESERVE; FULL REAL not proven.

## 10. Candidate manifests

- Files hashed: 979 under `projects/sfia-studio/app/` (TS/TSX/JS/JSON/CSS + configs; excluded node_modules/.next/coverage/caches/test-results)
- candidate-pre.manifest.sha256: `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873`
- candidate-post.manifest.sha256: `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873`
- Byte-for-byte equal: **YES**
- Source drift verdict: **ZERO SOURCE/TEST/CONFIG DRIFT**

Full pre manifest (post identical):

```
{"bytes": 1830, "path": "projects/sfia-studio/app/README.md", "sha256": "dfdf7235bf457fdc7860a82949acdc71da7ce3ca345fd508bb74b77ac83279c7"}
{"bytes": 7620, "path": "projects/sfia-studio/app/__tests__/d1/intake-c1.test.tsx", "sha256": "3aad60915cf9f429c8047538f2482152234d17d120ed5f7d9b7b7a9e718bfca6"}
{"bytes": 5577, "path": "projects/sfia-studio/app/__tests__/d1/intake-c2.test.ts", "sha256": "183869938193e484cc2b27827ff6862eb703929617379f99ab4791150041d6f8"}
{"bytes": 16671, "path": "projects/sfia-studio/app/__tests__/d1/intake-c3.test.ts", "sha256": "70a9f867d52eada1ea71aa11aaf012a087fc0e1757229c88500889148eadc438"}
{"bytes": 10419, "path": "projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts", "sha256": "25ab04bb8e5f82965654111c5a4c8c4cd636b5224f788647696c3bd3be8221e6"}
{"bytes": 3344, "path": "projects/sfia-studio/app/__tests__/d1/intake-platform-integration.test.ts", "sha256": "5f8d9890c34810e717c848682c7427945948bd3a878863117fad29bd95633c1a"}
{"bytes": 3986, "path": "projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts", "sha256": "d27c68e48c5282018494d41a68fdf3b776f55fa29f54d984a9e628ebb8368727"}
{"bytes": 4974, "path": "projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts", "sha256": "112e20e9491fbd6aa8ab5523bcf734b8dcec99356f966abee416e110a6feacf4"}
{"bytes": 3926, "path": "projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts", "sha256": "48af5456dccf5f62cd5db461fb0a7cf464e16d47726f48459674f9d2ce80d567"}
{"bytes": 4712, "path": "projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts", "sha256": "f2955617c7bfb582b2301e836794184ee16b0c3105deb94cc233105a58668a60"}
{"bytes": 1429, "path": "projects/sfia-studio/app/__tests__/fixtures.test.ts", "sha256": "021aa1802270ea77cc4125b618a9fd9f24c576bed97acdf805b38c86bca65d84"}
{"bytes": 555, "path": "projects/sfia-studio/app/__tests__/gates.test.tsx", "sha256": "2d41d99f2f55202ca49da7fa1f81ab5f0ca75cd1e0c8d567d206f168acbe8e58"}
{"bytes": 5469, "path": "projects/sfia-studio/app/__tests__/increment-a.test.tsx", "sha256": "5082e57451d04557de2bf01199c300bc714b14a22dac014df34d522433593632"}
{"bytes": 4719, "path": "projects/sfia-studio/app/__tests__/increment-b.test.tsx", "sha256": "c15e1b1e1888771a772b820f6fc384a2562ead416a1d474b723786ee18dc23f4"}
{"bytes": 7874, "path": "projects/sfia-studio/app/__tests__/increment-c.test.tsx", "sha256": "d03e6fd707d9489e63d5e1b8e21a6dcfb09dbc24d9653a337bb18eec68275a82"}
{"bytes": 2944, "path": "projects/sfia-studio/app/__tests__/increment-d.test.tsx", "sha256": "6dbbafcc6537b034f44245a258cab3c3d00bf0fd20488da10cea5fb5d984406c"}
{"bytes": 3655, "path": "projects/sfia-studio/app/__tests__/increment-e.test.tsx", "sha256": "10188356bddbc19292c0c7859bef0fa9847559ee5f24243790a2228c187157f5"}
{"bytes": 2037, "path": "projects/sfia-studio/app/__tests__/navigation.test.tsx", "sha256": "7e07b40fa75f0a0d60153beb6f84ac7d6e9f76861a85bf3ffa226d265f2afec3"}
{"bytes": 24001, "path": "projects/sfia-studio/app/__tests__/oa/cycle/adversarialValidation.test.ts", "sha256": "da805b6197ed9c1f07daab71f9f35a7e2b6286425fe0716f36d9892313c04a7f"}
{"bytes": 3295, "path": "projects/sfia-studio/app/__tests__/oa/cycle/antiLegacy.test.ts", "sha256": "1632619fcb4b68bb23577e7d6d27fc4653543abbf8689d7db88d2a56678ec73d"}
{"bytes": 10309, "path": "projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts", "sha256": "4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6"}
{"bytes": 4323, "path": "projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts", "sha256": "75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680"}
{"bytes": 21622, "path": "projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts", "sha256": "26486149b9f588ae712086713dd0a67805c00c00b11e8d5248d8053193280b0a"}
{"bytes": 8002, "path": "projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts", "sha256": "136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6"}
{"bytes": 7844, "path": "projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts", "sha256": "19fdba2abed7b10ce2b13a33106aae06891925b51588c09995356576de74b0c5"}
{"bytes": 10681, "path": "projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts", "sha256": "fe4c2a5ba1525f99c4600d36577c9eef476a07229013cc235fa20970411d9fdb"}
{"bytes": 10998, "path": "projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts", "sha256": "19c856a93c6638619dcbde626076ffaa427a808488368080e1efd1708d6cd885"}
{"bytes": 3762, "path": "projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts", "sha256": "a22b7cfe9dbcde7acb1bab4507b2bd7e2477798385cf5a08d1c7cbc1858052e5"}
{"bytes": 3609, "path": "projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts", "sha256": "f2c7454ca20b07452777cff8129381f14e65c32ab0a28e7c6250a5c0342c7ba2"}
{"bytes": 22299, "path": "projects/sfia-studio/app/__tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts", "sha256": "06df9e75266f716a520e497eb460e7a4e8b0c74d6eca3916d76de33074a8b54e"}
{"bytes": 22559, "path": "projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts", "sha256": "719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1"}
{"bytes": 14754, "path": "projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts", "sha256": "dc6bc2ab96ed33a3253ea65aa6872f0b5c6501b66c9a936cf928b30888318ce0"}
{"bytes": 3108, "path": "projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessProof.test.ts", "sha256": "5f65d11af0c748a90769ba5930fc46c862bc018fb0aa1a2b519f1b0398469680"}
{"bytes": 4816, "path": "projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessWorker.ts", "sha256": "6773d852c1cb11e7d3121f6b8daef7f2234853a74e612986996ce2bf939ad9d5"}
{"bytes": 34196, "path": "projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts", "sha256": "6db51af01260ef18b649e642c546812882c716302697bcc91c56953c964ffbec"}
{"bytes": 10617, "path": "projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts", "sha256": "bba7116dfdd935071d2d2340e604ba8bd6b4b6b4c429dd3499ad278854468601"}
{"bytes": 6617, "path": "projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts", "sha256": "fd94d62088da9604fa124667060e394ffbd0d1f20c818f2679aadcf0a6381db6"}
{"bytes": 12464, "path": "projects/sfia-studio/app/__tests__/oa/decision/adversarialAuthority.test.ts", "sha256": "d2eefe1e9bffffb382be5eaf877eaade0488dea1ee6a1a967c71aaa3dc0fdde5"}
{"bytes": 3385, "path": "projects/sfia-studio/app/__tests__/oa/decision/antiLegacy.test.ts", "sha256": "bd63ff54185f4e07eefba34596c24be582001ca0896b4d9ee0a4ac660414e06c"}
{"bytes": 28989, "path": "projects/sfia-studio/app/__tests__/oa/decision/decisionConfirmationAuthority.test.ts", "sha256": "470ff358d07d5e69822f77df406e07750d57bbe5cafadc4decb10e7ec32d1d47"}
{"bytes": 11057, "path": "projects/sfia-studio/app/__tests__/oa/decision/m3HumanDecisionDurability.test.ts", "sha256": "d81b7f1bc27905b23d79410c868c6b6508310c8bc64b36fdf8e10a8693efb058"}
{"bytes": 5551, "path": "projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts", "sha256": "829c7a022468251af84f862e0c70a1fad08943711a0da58a52a7dbaee41c88d1"}
{"bytes": 7542, "path": "projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessProof.test.ts", "sha256": "df0d51e9f579b314f5409f3dffc98c3a3f834fc3934fb037902e975fcd602fd9"}
{"bytes": 13401, "path": "projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessWorker.ts", "sha256": "24c446472b4039a89a9969b15cee484ae2bb84ddd84943078f4d8097d1922f6a"}
{"bytes": 19616, "path": "projects/sfia-studio/app/__tests__/oa/decision/validationAdversarial.test.ts", "sha256": "3062b8ce616e9ab116416605ebfb123fba9256210369f8c2088b7b501664b644"}
{"bytes": 2848, "path": "projects/sfia-studio/app/__tests__/oa/doctrine/antiLegacy.test.ts", "sha256": "4ae0937420eafc329fd9ba57c714faa5fd5aaf1390caba24fd33806962d190b6"}
{"bytes": 21426, "path": "projects/sfia-studio/app/__tests__/oa/doctrine/resolveDoctrinePackage.test.ts", "sha256": "247357b1444e61be587d94dbeae4a2059baae2edcdc75245598f450e2da095e6"}
{"bytes": 1972, "path": "projects/sfia-studio/app/__tests__/oa/doctrine/schemaValidation.test.ts", "sha256": "2dc96ff57657cd3b1643bd4dae9b407741d99da5dec273bbc830b5a3be244d1f"}
{"bytes": 7208, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts", "sha256": "52b93f83dbbc48edee7695bb07a57db0e9bf0fd980b0183963f22c1d6ce34fe7"}
{"bytes": 8865, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts", "sha256": "a7e0e6a25082f412caa7858fc1dcfaff662adc0552fe68005b555dc921aa4724"}
{"bytes": 7810, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialMaturityValidation.test.ts", "sha256": "b374bd1ca850da1491b6fa73f22d7b966d49595048d4d380de2b1e330cdb1dc8"}
{"bytes": 8124, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts", "sha256": "8faf0064c86c7140a25f4c4e8b637e3f5149a2e023d0badc7daaddb1e99eebfc"}
{"bytes": 8850, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts", "sha256": "33db5f2a738030df0f62a348a9f8d7bb248e5d4225485dd3dd4b6b5475b1a5ce"}
{"bytes": 21082, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts", "sha256": "c3e02c54de12c112fbd9445630c4f613bc5bef5ce3f972b8e9de4168ee48954a"}
{"bytes": 3828, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/domainInvariants.test.ts", "sha256": "b70aa92519e9153d0fa4334d2bb2e580bf3835cd2e3cdd137c962988da4942bc"}
{"bytes": 3789, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts", "sha256": "e3304e32b27c08752701b43ed4e501db3519176df25c535d91b8ded1f0b7a1d3"}
{"bytes": 846, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/helpers.ts", "sha256": "c9cf958e802a46cbfc5ea40303e81388034011e162b1a4758891aaf1c1eac6e0"}
{"bytes": 6041, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts", "sha256": "20be2516d42f2f5c457e49650e93d18efbd1ce6ea91176b67e1b6e09706703a8"}
{"bytes": 12060, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts", "sha256": "b2fce6ea89711fa0998a4905e28a55c413e537e6e6032aa24b26d781b2eef9c5"}
{"bytes": 6193, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts", "sha256": "fdd0d2a2e775dac52ed58c4d773e086c342b53939b1afd8af12595c4eb2795d4"}
{"bytes": 19752, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts", "sha256": "4ce2f2e6915165dfb31c9615f66234273f3e1134cd1c2b4781bc98b62e0bc9fa"}
{"bytes": 16219, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/recommendNextGate.test.ts", "sha256": "19954e7918d053b9f5ddf8a01f52bfe1af2620cfc80f34976a99f5f9e68003a8"}
{"bytes": 6047, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/registerEvidence.test.ts", "sha256": "cd16b63cbc570187efb68786ed341d39dd2b7cf9e6a93d14c4dfb114e9cdee3b"}
{"bytes": 5450, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/reviewBundleDomain.test.ts", "sha256": "2e9aa155f67232cbfbee6696d5e4fcb1a209699cbc2cb54756fc95b5d8c88de2"}
{"bytes": 15027, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/reviewBundleLifecycle.test.ts", "sha256": "51ce2345793287eb762eb852f8d3025b8b436602231bc4aaf8c65e40464b986e"}
{"bytes": 9334, "path": "projects/sfia-studio/app/__tests__/oa/evidence-review/verifyAndUnavailable.test.ts", "sha256": "f4647b5cc18fb3ca8574bca1e29fdc1270f4d7de06b0a4fecf9215637a81e525"}
{"bytes": 12667, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/attemptRepository.test.ts", "sha256": "9d1051cd074a45a75dcfc1944c1af50e385253b5678506b6c84c8a8a3e8653ce"}
{"bytes": 16435, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts", "sha256": "7388e556b080cfd775b83f926e205bb3be59ddc5c192f9dc1e7820117fc58555"}
{"bytes": 23132, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts", "sha256": "66dbffc9ca43c59acec12338fea3cbfbbe2618c7a3f20f748931c830392620e0"}
{"bytes": 19253, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts", "sha256": "866f3e26def6a12be7b6404d21b02b650aa8459b0212c4c1c63292c8ac8e2072"}
{"bytes": 11121, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts", "sha256": "6e6777cc2b7786cad994f95b77f4898c0daacd97e0963acbf719870e7277d4fa"}
{"bytes": 21325, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts", "sha256": "d3d7606f07006e9247cfdf438490c47784b17addc4c93f37e0c5a0a74ee7f282"}
{"bytes": 7995, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts", "sha256": "0c054e21437dff03765e090d52ded202d7510e818cdd6484453d3e1f126df738"}
{"bytes": 8387, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts", "sha256": "bffa97080ff6bc4d321b58594fcfc35de7957ac8cc13a8ec612db4fbe8043f1b"}
{"bytes": 11294, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m4SpawnAckLifecycle.test.ts", "sha256": "6db4ffb20265e6ea915566f7d82675c88789b99cea3b0e66e290e0027f52f811"}
{"bytes": 8111, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts", "sha256": "ddf35894d6fd9f7d5d78a593d0e71e6b151a6e0e1a29071568a9add0a82a727f"}
{"bytes": 13700, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/qaAdversarialValidation.test.ts", "sha256": "ce668cd19fb6349a07ef6682ba4d75b0c8e4d4248f486d8f275f7b17929d9ec9"}
{"bytes": 8907, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/registryAndAdapters.test.ts", "sha256": "98983936a305ad8af788405be7a1bd6b1cea25c86c9431279154049937bce074"}
{"bytes": 1185, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeProcessRunner.ts", "sha256": "54f3dbe22700a29f352c9a16e83b3e57ec6c5079cc40361e44de32ea7c02eae6"}
{"bytes": 7132, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts", "sha256": "2339c22a7bd7938abc9ffba95c9a70beed5b23ddb2cdcf962c70ecece5091e88"}
{"bytes": 350, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts", "sha256": "55f826e92ea7222079f6b2a1b316529f45c514d409317712189574d4050e6e17"}
{"bytes": 6618, "path": "projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts", "sha256": "9cdd588562cdc7959b9f8efc97a5ecf8c838500eb71a7307535edc58163d871f"}
{"bytes": 13236, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts", "sha256": "fe73b011b1bf9bce572c2ad0c2b65bf17dda9cc4a7b4d39a3a7c549cd6a2f1f4"}
{"bytes": 3770, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/antiLegacy.test.ts", "sha256": "5c2953468a15ce81e2ab6e127fc5bcfcf004476571160f59c71dc313017cedb7"}
{"bytes": 13819, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts", "sha256": "0ba161f012819cd0e51ed9e1680abe59100a01d42b5e179303bea00b7f236726"}
{"bytes": 10322, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/helpers.ts", "sha256": "4e7cf744c530e1fc888cb06e1a0675db04ae89a4ac2862a4470c285a6432cc34"}
{"bytes": 19341, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts", "sha256": "b822338d2cf6f2cfb8765b6f1fea45a88ce6fe5f911a3e4a04fdbd848a571aa7"}
{"bytes": 16528, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/runtimeValidationHardening.test.ts", "sha256": "0d8b2183614dc173163e339bc3d2d025281a3a9c0ac8996ae7ef315b58e522de"}
{"bytes": 12375, "path": "projects/sfia-studio/app/__tests__/oa/execution-contract/supersedeCancelAuthz.test.ts", "sha256": "92861a8c60c42beaa3eda605b4faf873f250d129f7be54fc50dad424e640dd51"}
{"bytes": 2297, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts", "sha256": "69e1f37b499d0b58ce90be35a49a858e59347f1da41fff0901cab4c08ec01d7d"}
{"bytes": 2567, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts", "sha256": "ae49d6a9a6b1d7ae983c39ca945a5c3b4272a8d3ca060042efdc5b4428d2a45f"}
{"bytes": 4387, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts", "sha256": "2df67fde10af26ee6c1b9510b21fbc29e4a6dc890f19274744f81c3aff83a180"}
{"bytes": 2663, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts", "sha256": "d7211631aaf40e64fb0b1d30a3567ea33bc0305e29429096e0df2067ad113b57"}
{"bytes": 2414, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts", "sha256": "17d878125df40c0ba045750b535e27f70de2aa0b734204a48c5fe58a2929d704"}
{"bytes": 2496, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts", "sha256": "4adf3258ae8c3d6576cb057b7f52bbaa61e2d49c3a9b844421af6c0818f5744c"}
{"bytes": 3845, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.create.test.ts", "sha256": "a7788d301db9922c102acb10aead686034c7d30bd52cd9a95bac6f0bc8592320"}
{"bytes": 3440, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/boundaries.transition.test.ts", "sha256": "65dabd7f2dab4ea8634857f569c75265c3bed08331c212d8e011d818da7c2cd0"}
{"bytes": 6301, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/contract.equivalence.test.ts", "sha256": "9b9ad9a2c706cc52a4b1850d2318ce6d16e55924fca2cd62bad4bfbeaac4584c"}
{"bytes": 1229, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts", "sha256": "93f8ac924c5dda2d961ecee1e94b57ee11bc4e58f0a8dbe85e0bcbecc225fbf0"}
{"bytes": 4753, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts", "sha256": "15b5f9e50f968a39242398516420c0205dab9b04223af4a402613d07eb25e65d"}
{"bytes": 8245, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts", "sha256": "9018f96b580301a7ab776667ee6967f1b65f53dd47c8fbfe75e371bc3e7f28c6"}
{"bytes": 9964, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts", "sha256": "db7d44217dd7e5454eb004621d1d3c52303c04a56051daf84203f3d947b0c7ce"}
{"bytes": 3173, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts", "sha256": "1b04de32b2a4175b8b0286c645c835094a31ed2840dca5550c0c4381f941a168"}
{"bytes": 34832, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts", "sha256": "2b57c0fa534c7325f079828ec8333afd2ee63069902d53d03e46bd82ccfd5d36"}
{"bytes": 4168, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts", "sha256": "bb3b66c83245f5389d8850dd7f67f872bfce7cfc80eb257c8121ef55d785f29a"}
{"bytes": 1520, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts", "sha256": "a6e5d12345b4cfbcd86d44f520f65bf1e8b9507acca036ff384abe40849a60e8"}
{"bytes": 8821, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts", "sha256": "c548cf1286683e60fefc871358b831cb1170ddc9214db74839ca460e19b2a265"}
{"bytes": 5570, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/lateResult.test.ts", "sha256": "69359a7675c82bf86e4092d63788abeb43f9477d9418d72a6716642311b29f64"}
{"bytes": 3890, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts", "sha256": "479680754ae5d81a2e45010e30b60d3a6f88752ca660d54e376ea39da144625b"}
{"bytes": 5851, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/persist.guards.test.ts", "sha256": "20cdd1d1aed1553b76338cd1a2fbec987115aed79e23739141d2a67a9bbadb24"}
{"bytes": 3143, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts", "sha256": "d31d148a49d1849a34e28ef11248b7b1c72a10913b849728deb9f05ca4099a86"}
{"bytes": 5894, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts", "sha256": "9a7c8cc6c86cccd4ca847517bda4dfc7613bb593bf0b4544500d4804cae00046"}
{"bytes": 11725, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/qaFindings.closure.test.ts", "sha256": "3705ef0064d162ef954c3e6553282d190d517957f64825459884ac643b5d131c"}
{"bytes": 2316, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts", "sha256": "402de089833ed7999dd440d584956dded292921a4d11a104309b87b092d6ea20"}
{"bytes": 5953, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts", "sha256": "a18727d6a4bea0ef4cc9d07a38e5b12456c4476401b56544bd6f27145534f11b"}
{"bytes": 5884, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts", "sha256": "267d1b6dea51bb4c5b37b67eee0d785fd89b4139c8721d4be5ea64054849fe1d"}
{"bytes": 10989, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/t4.enforcement-boundary.unit.test.ts", "sha256": "7b4da381fe9b414e82f6c678da639ea249ca83f8bcf4236e08f32613e2b8fab9"}
{"bytes": 2430, "path": "projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts", "sha256": "db038b585d16f28c63ca25247d265de233f601be06cd43334a5f5a98f4418837"}
{"bytes": 2460, "path": "projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts", "sha256": "d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4"}
{"bytes": 2864, "path": "projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts", "sha256": "8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2"}
{"bytes": 7603, "path": "projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts", "sha256": "db8b4a6b9f558179250a14e91d099b0941d20295ba0f93c10aedc0ba836b9e7f"}
{"bytes": 9075, "path": "projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts", "sha256": "e22187f6342bd4dda9d5ed663e2fc1bd74253c40e635047c3b728dc210212bdb"}
{"bytes": 5463, "path": "projects/sfia-studio/app/__tests__/oa/finops/period.test.ts", "sha256": "d142cfd2d53466f054eb2f42a632ec8e9ffc143f6abb71418a290f057975f705"}
{"bytes": 10077, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts", "sha256": "b83e0fcb8740a27786e435fe97e0b2ffc69660cacaf4a86c1071ff8c6a7a0190"}
{"bytes": 15010, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts", "sha256": "1f0efceab2eeeed62468384dc7cb974d0384081178eb9c0e8695f70f2f3890b2"}
{"bytes": 14152, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts", "sha256": "60c7d5c0559590cc962d710a5176de63c0838f869c53bde5692341c2836f5a21"}
{"bytes": 7318, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts", "sha256": "585d2472cc24bf2895f929ea4a8362c361bf671fb60696395628c7012ff346a7"}
{"bytes": 16437, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t3.alert-review.integration.test.ts", "sha256": "f9418e2a6b3233ca6e1863e441afb5bf7d75d3d52f7bf01bc650863e677724a1"}
{"bytes": 24227, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts", "sha256": "1aad85effd2d93c2e82694dfd83fad1283ed3ae97a8452c70b6e66ec036ce5ea"}
{"bytes": 20327, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts", "sha256": "c49c5921aacc9eb928901032cf2414d0e232f249d3823fb390a283464c70e446"}
{"bytes": 5512, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts", "sha256": "6f08b0895d93e1ee180af9f7187ee4c7fc6f114bde0391a0204ae328af15588d"}
{"bytes": 8165, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts", "sha256": "c95e44f56d054d5bdb7c34bd0dca8ff72b70c154184aab9ea7cf27d03f5b2168"}
{"bytes": 14237, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts", "sha256": "fa3ed246ee9451e571b70bc028cbe775038ead39237a3aaded9401fb816299d0"}
{"bytes": 11181, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.rollout.integration.test.ts", "sha256": "cfd8359e106595a0f2be50763057b3c5aaf6e7fd6dc3086e50c902940676d504"}
{"bytes": 17310, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts", "sha256": "1c27b1c97521fecebd577f686c80f7fa2c9f20ba1a32a19d59d4a5e92b580e8d"}
{"bytes": 31490, "path": "projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts", "sha256": "35c3ef229bd709f0382ee6dacafaf7a1e5f0bb5b166946748200b2fa06f19c34"}
{"bytes": 2235, "path": "projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts", "sha256": "8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0"}
{"bytes": 11712, "path": "projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts", "sha256": "8577bd0fdce8f9a4c8d55d32f23489e8f41b891308999136e144b3952588c4e9"}
{"bytes": 5023, "path": "projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts", "sha256": "35d8f22b065d59b7dcba8dbdb72b121f2413122e7db398930d091938e1faede5"}
{"bytes": 9492, "path": "projects/sfia-studio/app/__tests__/oa/finops/t2.aggregate.unit.test.ts", "sha256": "ea9e5df94dc54d73800c2c816d57cce18635b3236246bf6acc65a0e21fab9c6e"}
{"bytes": 42800, "path": "projects/sfia-studio/app/__tests__/oa/finops/t2.billed-period.unit.test.ts", "sha256": "9cd9fed84fe54ec1295486f639c1d2215b873cb42a4cb80e93792484f5b47bcd"}
{"bytes": 5055, "path": "projects/sfia-studio/app/__tests__/oa/finops/t2.money.unit.test.ts", "sha256": "017298fcfacc3f0537b55e98f99b6d56ed62fd1e85dd5ed4c7b62fd5a6100810"}
{"bytes": 8222, "path": "projects/sfia-studio/app/__tests__/oa/finops/t2.reconciliation.unit.test.ts", "sha256": "a3d17e3aff9199e5373f56e0bb6ec1fb5eaad30b294464fe976497da9798a556"}
{"bytes": 37045, "path": "projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts", "sha256": "1d31697f23aec1bb8902baae4fe68cca1f82bde8c9bf3d64fa6f00ee658f3d75"}
{"bytes": 20479, "path": "projects/sfia-studio/app/__tests__/oa/finops/t4.enforcement.unit.test.ts", "sha256": "f9fa544d21e22089dac4c90f8013e021861ad05eb2d21ef2dd266c68f731d5ca"}
{"bytes": 18077, "path": "projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts", "sha256": "d7cec99edbb2a6ab5fbf0622100182c540d5c6b0ad3072fab02933a7ce4fcf13"}
{"bytes": 7155, "path": "projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts", "sha256": "840779e31a9e6fe0859769a6ff16dbb53840efb421ab9496e6f28f57f67c45de"}
{"bytes": 6296, "path": "projects/sfia-studio/app/__tests__/oa/finops/t7.rollout.unit.test.ts", "sha256": "56b7853abe9ecef7f50e47b402ca57427e88e6d0358b5badc3da881c554bb06c"}
{"bytes": 12154, "path": "projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts", "sha256": "c3d26627c6016863a464f20f62971953c5a3e6c87b6c4a9960f032af5c837b02"}
{"bytes": 3798, "path": "projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts", "sha256": "16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a"}
{"bytes": 3013, "path": "projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-policy-source-option-a.unit.test.ts", "sha256": "154835271482167fb39b67db0fe58a43dc8f9cd628c5906a59024a3bf4d59bff"}
{"bytes": 7450, "path": "projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts", "sha256": "db942972da149092a7eb4ee6a3f2569ed67ef200041306e1ae5c15747be1f425"}
{"bytes": 3399, "path": "projects/sfia-studio/app/__tests__/oa/project/antiLegacy.test.ts", "sha256": "ff2ca6040cb77c07f4f773e188b653d306fc1d7932667a1ab2ab2da9efa5055b"}
{"bytes": 10252, "path": "projects/sfia-studio/app/__tests__/oa/project/m1ProductSqliteDurability.test.ts", "sha256": "20df3d4c42eaa10e8686b5cbff0bb97096d6d517edbdba50b19a19e5e20b0334"}
{"bytes": 2563, "path": "projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts", "sha256": "52310076b5843b11eaa683bec36ff5657268821c8bb46ff50e7f81135ac5bdee"}
{"bytes": 3511, "path": "projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessWorker.ts", "sha256": "995b2b44608b6b6e1633e79aacd44ec041edd8f4b10826509a9d658ca070d520"}
{"bytes": 7582, "path": "projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts", "sha256": "6f07865c70a670acffa6ef56f2a3a54cbadd240b0de5176f746527fc82cedfa0"}
{"bytes": 5328, "path": "projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts", "sha256": "15da6954cb5e210b81a71d2e748879eba24b0313c935a7a13dfff4ee66ef78dd"}
{"bytes": 16892, "path": "projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts", "sha256": "58f76df577c08827831d49d3c2ee98ae0c7b346d35692906de6371178d64f829"}
{"bytes": 6768, "path": "projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts", "sha256": "f49619cb46f49faf14fe8bfae894013a925f2d0ca5af2cb0dab64ae8858e9f14"}
{"bytes": 24810, "path": "projects/sfia-studio/app/__tests__/oa/project/projectLpsFoundation.test.ts", "sha256": "72e462eee6bdee7c45c711d1c817ea8f124a6eb13b5f814f780b3810bff8b7b0"}
{"bytes": 6680, "path": "projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts", "sha256": "fdd5522e22cf0be6fc3cb2fa5462c9bb5c812c53523a057cb9920c41a09f07c5"}
{"bytes": 8080, "path": "projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx", "sha256": "76239b14eef25d5b97ecb8f1a8b91dafd626743c81c12d7697d9cb6278392f70"}
{"bytes": 7618, "path": "projects/sfia-studio/app/__tests__/ops1/actionGate.test.ts", "sha256": "31c3d424c149a41c4eb4d9b52ead075b270bc9c7fa4719f004e94d4e1b61774d"}
{"bytes": 11287, "path": "projects/sfia-studio/app/__tests__/ops1/allowlistEvaluation.test.ts", "sha256": "ce9c2bbd5e14f3894092e118af2f41a3f385921adbe933e8a0f2fcceaf6c8279"}
{"bytes": 2558, "path": "projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts", "sha256": "69e0a37b1e2d1475346e6300654a2757dd75b934b0d12b45a23342a45701b38d"}
{"bytes": 4845, "path": "projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts", "sha256": "573c73b069f633f138b07bef479d4b3965d0bd73c51a491726d3622d1bd0cb44"}
{"bytes": 3959, "path": "projects/sfia-studio/app/__tests__/ops1/conversation-domain.test.ts", "sha256": "9fbb5a0b1a4f8c1930a66697ca8b2482ae9022af4f3571570cd1d9a64a07e5fd"}
{"bytes": 10048, "path": "projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts", "sha256": "0ab71b535ee2e49d6333d3059d7dbd3f10990a1c6485c3947b7defa15b6f586a"}
{"bytes": 1841, "path": "projects/sfia-studio/app/__tests__/ops1/domain.test.ts", "sha256": "c8893441c08d78a7f33865da272b7f04d04a3cba7cfa1beb81ed2412380cf904"}
{"bytes": 10066, "path": "projects/sfia-studio/app/__tests__/ops1/executionI5.test.ts", "sha256": "777fb2ffb4a6c60c83eeeb9448ccfe3864c7af7d74ca298e4bd9cf816b44c4cf"}
{"bytes": 14440, "path": "projects/sfia-studio/app/__tests__/ops1/executionI6.test.ts", "sha256": "ed88d4e24d59201a50baeb90719009ebbb35a600b83d85b081aa544bdff539da"}
{"bytes": 2257, "path": "projects/sfia-studio/app/__tests__/ops1/globalModeBadge.test.ts", "sha256": "e82e8a976728f1f7804d92ec172cee433525fc7dcf34cc0d670a91bb74449676"}
{"bytes": 6712, "path": "projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx", "sha256": "967b6df8e4f47d4d16b59873578c405ff018620e2faa6e46a5cfedb61c454dbe"}
{"bytes": 3602, "path": "projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts", "sha256": "c5f63eda5017e8a39fa2a4a257760bb3dd90f19609bd30024d1ae1b7dd3b2ec2"}
{"bytes": 4306, "path": "projects/sfia-studio/app/__tests__/ops1/repository.test.ts", "sha256": "0a03fdfdf4c9cc46a1d4304f39c589098ae1a898b3f696eb5e81066e7b1ec2f0"}
{"bytes": 12349, "path": "projects/sfia-studio/app/__tests__/ops1/sfia/canonicalEngine.test.ts", "sha256": "9f97d2fe4562dc6a24a30c7672cccc8ebca25106156f7f1cdfaaf0c4295a4b67"}
{"bytes": 2578, "path": "projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts", "sha256": "dc19b7fddec131ffd28a9ec2c6f51f73a936cf83df14f18d5d1f3e585bd314c6"}
{"bytes": 4837, "path": "projects/sfia-studio/app/__tests__/ops1/workspaceOps1Continuity.test.tsx", "sha256": "ce4bc88a60779235aec8adbaaa944abf2dc896e80346463bb3a388da2e0538c6"}
{"bytes": 3245, "path": "projects/sfia-studio/app/__tests__/platform/import-boundaries.test.ts", "sha256": "1f989df71f916519983e4f8a209f73d6a4a35f84346ce2edf4acd0b0d48f9a34"}
{"bytes": 2325, "path": "projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts", "sha256": "f9616651afa0dbd5b939155162446fb0772f680adc415d36beb870d8c125090e"}
{"bytes": 5996, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts", "sha256": "2168781862bed795bf64df07154c5dc25110aa55128f13934e062920f12dcd70"}
{"bytes": 3194, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-canonical-consumers.probe.test.ts", "sha256": "5ae525299727f37ea4da70e1fe3ea58be671ff23125da1f262db69edf4c020a4"}
{"bytes": 9664, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-consolidated-blocker-reduction.test.ts", "sha256": "d49ea98e966ea56b374377d073328dee449674424fc997e2cbe4b326cc916470"}
{"bytes": 1290, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts", "sha256": "2c551a6692df09421b13020fc9c8c1c140d12ed0995ee6cfff7a9b901d716300"}
{"bytes": 9163, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts", "sha256": "20f197ecb6a683431035d177f6153fac8ff244a0a6162cb312f75ae43625cd45"}
{"bytes": 2312, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-local-volume.probe.test.ts", "sha256": "551cd9a18cd5027d557d819dce77b33dafff8cbe41235aea7c17f9d879d3a4ba"}
{"bytes": 3150, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts", "sha256": "90da43b93978eb9f76022144f7123bf40836b95fafcd27c0b088d1f81effe795"}
{"bytes": 2503, "path": "projects/sfia-studio/app/__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts", "sha256": "a48d5842689c342648fec2a4ab91e02386e667a13602839ba064c36692c27e06"}
{"bytes": 19012, "path": "projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx", "sha256": "3a3579e46049f9c527a7a9d7d48f47835f01c19cda7361cd6ecfa8476d19dd23"}
{"bytes": 20143, "path": "projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts", "sha256": "faf018dfb178c777ace67beee756d776895efbe483ccc162feb68a1fad87bb10"}
{"bytes": 18079, "path": "projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts", "sha256": "1df057d88501850e6a10c7aee805bb5c44e7a426b47cb241cc642ecd13736e7c"}
{"bytes": 56604, "path": "projects/sfia-studio/app/__tests__/project-assistant/gux15.resolveM3ExecutionContract.test.ts", "sha256": "38685bbf9440ce06752a26ed156376fa15ea3baf621001f86dc822e35a288570"}
{"bytes": 2227, "path": "projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts", "sha256": "2bf5909374b31643cb5c5db11f7e0927af0909948da39506fb5c1bd94c49bde9"}
{"bytes": 6467, "path": "projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts", "sha256": "4ecf56b0223943df71c9010d988d61a444bf4d45d3eba40fd8192bc8369aac7f"}
{"bytes": 8395, "path": "projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts", "sha256": "6abd1259c6b9dcd8db540c7afa363cfd3aaf532fc5051c07e22cc603ddb39c91"}
{"bytes": 5544, "path": "projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts", "sha256": "17ce7753bd1c05ab4f4faf659db4f2ab799a913cb745bb080a20d7ef0732567c"}
{"bytes": 6869, "path": "projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts", "sha256": "1294695cfb825aee860bc722a188ee40f1a0c0359cefbc7410c0931d51d31810"}
{"bytes": 27687, "path": "projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts", "sha256": "876e789fe1929c160cd92833a40c79eaa815550858a3e372f0aa7c45a9821876"}
{"bytes": 31539, "path": "projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts", "sha256": "be7c396c2fc6fc5683ef9240f1a498f436e402413c58582ddf9b2989612e85df"}
{"bytes": 5388, "path": "projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts", "sha256": "99a11709d3344a20780f8be53b289d34b00ab257776e7454c7cf0320329e55ea"}
{"bytes": 29520, "path": "projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts", "sha256": "1d4563a361cdcf6a4e5d9a153b606a4825248e085634b7c880aca4b2c09639cf"}
{"bytes": 16105, "path": "projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts", "sha256": "e8f8711a04cb335b0452ac3ab0c06baa97dd6b242c4e136eab5ec6b8c418bcf4"}
{"bytes": 4090, "path": "projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts", "sha256": "85dc6878c53dc925a65dee511ee27f2e85043942114cb26e715a4c7538a2e61b"}
{"bytes": 1201, "path": "projects/sfia-studio/app/__tests__/recommendation-vs-decision.test.tsx", "sha256": "885cfb4e28fe15182e9d2d99be914543401263ea0b0acaa398cb98d3216ea062"}
{"bytes": 43, "path": "projects/sfia-studio/app/__tests__/setup.ts", "sha256": "9b328c4843431fa76d8de00008fc159e95f99a840211085ff3b8f25e53d14409"}
{"bytes": 1284, "path": "projects/sfia-studio/app/__tests__/shell.test.tsx", "sha256": "4854e5229f82b7b39ba34d42da76965023dd94f60a9dae21101ed2a92ccdf42c"}
{"bytes": 385, "path": "projects/sfia-studio/app/__tests__/status-pill.test.tsx", "sha256": "26b2368d6cf17bb48d19a82db1ac93fafcd78ffb35c29f9f2d7718d4711a0a70"}
{"bytes": 6496, "path": "projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx", "sha256": "b840086f41e79ee18a8294574970747f059d63ecddcbef849b4ac8c6f16018e9"}
{"bytes": 3987, "path": "projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalReadback.test.tsx", "sha256": "fd247e345cf6570d886b3db2365010576ea4e15e2db307be5968ccd7e3c5249e"}
{"bytes": 2000, "path": "projects/sfia-studio/app/__tests__/studio-projects/studioProjectsHome.test.tsx", "sha256": "15d707c91df00db4b1dd8b643b75179216bd52b3f12f6420b3bf7dce83fe341f"}
{"bytes": 2835, "path": "projects/sfia-studio/app/__tests__/vertical-slice-core/importBoundaries.test.ts", "sha256": "1c25921812c86690ae4d55817a69d5426e2af1b81bf1828613681c7d8d530dd0"}
{"bytes": 11352, "path": "projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts", "sha256": "5813606495fe05df80ba725bbae27a4258dd8bcb4cbdf274e496fe9cb221e600"}
{"bytes": 6762, "path": "projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts", "sha256": "3de802a2e166f93b1113eb2fa4eebc6c3d0d54288f19007034b3260ca49ffd6b"}
{"bytes": 7679, "path": "projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts", "sha256": "549ee921d8b182d9a3f51b09e9fbc79367162a68e3f5a26171e438a8c3ed7c1a"}
{"bytes": 16366, "path": "projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx", "sha256": "91d6c4d43d39f2460644e8ec1b6ff42508ed02e8b9139b8060a7460a17174034"}
{"bytes": 8740, "path": "projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx", "sha256": "d6932367ce946799e5e0c98ea2011b78a86b20e9b56748332230a7aef405cf79"}
{"bytes": 4970, "path": "projects/sfia-studio/app/app/api/e2e/option-a-qa-scenario/route.ts", "sha256": "d8cbdce9515ebefcf538fb809d040f370dddd371bf5046fba56ca8fa9c2630cb"}
{"bytes": 1182, "path": "projects/sfia-studio/app/app/cycle-actif/page.tsx", "sha256": "35140d0b30fc8b093263cd115ae067cfa028f31d8c18d1aef7d3f41485f4c934"}
{"bytes": 1206, "path": "projects/sfia-studio/app/app/decision/page.tsx", "sha256": "1c70990db0b9b1e299ca7386ce6fcc97d34812efcd63c4dd460790114159cd07"}
{"bytes": 1600, "path": "projects/sfia-studio/app/app/globals.css", "sha256": "03e86d5b9892b4670edbc88a2798349f15b1545ffbf979c1b05992e0328b40ed"}
{"bytes": 566, "path": "projects/sfia-studio/app/app/layout.tsx", "sha256": "36776e6a686744889acec0407fd164e847d58e40d9e00a6f3c82edd033789b1c"}
{"bytes": 783, "path": "projects/sfia-studio/app/app/not-found.tsx", "sha256": "eb39f3cb38c1e81c44eb92853dbbba701f5630f77c1f2631bd4364edc9a9f5c3"}
{"bytes": 719, "path": "projects/sfia-studio/app/app/nouvelle-demande/page.tsx", "sha256": "a211b3ee13d38529c12d11a0db55352e5a8ad4cb07d6a6bcec92f32d5457ccbb"}
{"bytes": 272, "path": "projects/sfia-studio/app/app/ops1/nouvelle-demande/page.tsx", "sha256": "c1c7a4f6b249ce1cff4e6fc86a452d46f47d52e4dc2bf2fee1be4eeed3da2adb"}
{"bytes": 109, "path": "projects/sfia-studio/app/app/page.tsx", "sha256": "f5ca4c805fa35a04ff687c5cec801439fc84faa5eaa8aea5d55ca4b39ea2cc7a"}
{"bytes": 680, "path": "projects/sfia-studio/app/app/projects/[id]/page.tsx", "sha256": "91a6a2bf2570482ff0296d016c9a2c0ca1fce6b91184a67de9d3d94038ef6356"}
{"bytes": 138, "path": "projects/sfia-studio/app/app/projects/new/page.tsx", "sha256": "7b265b631a832d9082f86a7c29986cc42ce1bf9b01d3a4e7e5128c84c57150ca"}
{"bytes": 220, "path": "projects/sfia-studio/app/app/studio/page.tsx", "sha256": "5405dfa5472e44b2e8a069fbd012d9ea1e9b27a45531727b74ec0eb93df50db5"}
{"bytes": 550, "path": "projects/sfia-studio/app/app/studio/projects/[id]/page.tsx", "sha256": "55eeed70c654e47a4765f12aa19f0f1c0f9e930c6a96b5983ee19ffc64b119d8"}
{"bytes": 251, "path": "projects/sfia-studio/app/app/studio/projects/new/page.tsx", "sha256": "0116da3eb72f0c1893990c20de0e9d8812b4b0d84ac239fd93476702e2b4533e"}
{"bytes": 1175, "path": "projects/sfia-studio/app/app/synthese/page.tsx", "sha256": "e6cb1b237b71467c9e7af3e3f59eb0062e5476b2e3c9020948c00671361ea2d1"}
{"bytes": 556, "path": "projects/sfia-studio/app/app/workspace/page.tsx", "sha256": "da43d9cfd247cff19e43d3872efbbb9d5af732f9ffd354ae14bfd4d6d9354417"}
{"bytes": 5405, "path": "projects/sfia-studio/app/components/shell/CopilotPanel.tsx", "sha256": "f174340d00d9ee7c5654faead5ca3dbf2d01d41313d6fbcb07396dadbac6d9d3"}
{"bytes": 3146, "path": "projects/sfia-studio/app/components/shell/StudioShell.tsx", "sha256": "e7de9bdfda15558f922a1478976b63b15f168821e0b59f4bf8e4b886390c4a52"}
{"bytes": 4338, "path": "projects/sfia-studio/app/components/shell/Topbar.tsx", "sha256": "6da3f5a3d83a7bea5fc24e1154f2e2b87a11c06bab63c8eeebe4be1fe3012b7c"}
{"bytes": 2653, "path": "projects/sfia-studio/app/components/shell/UtilityRail.tsx", "sha256": "10bdacefdb766da5525e62d3d8ea7fb516048d05aa5fc2abc724de58d402e503"}
{"bytes": 5150, "path": "projects/sfia-studio/app/components/shell/copilot-panel.module.css", "sha256": "0735c8083bd851e06ed6fe8f6be5cc8133093e8087ab9aa0d0e35eca00e4da95"}
{"bytes": 2536, "path": "projects/sfia-studio/app/components/shell/topbar.module.css", "sha256": "cfff61fb25d2d85e3510ffcc0ec82ff7f4e1f7a76f1e5896d2ce17be162faed1"}
{"bytes": 1936, "path": "projects/sfia-studio/app/components/shell/utility-rail.module.css", "sha256": "cd5ec81f0f88b5276c04c2f6b48f973a12f6091e8916ecd834e1c7451dbce2ac"}
{"bytes": 431, "path": "projects/sfia-studio/app/components/ui/Card.tsx", "sha256": "2cf7cb43f1bf2c8cf249d335acefd7c54ee2a0a48f7519b1379a418106c00d4b"}
{"bytes": 1650, "path": "projects/sfia-studio/app/components/ui/CtaButton.tsx", "sha256": "0ffd7c6bda2373768e741176727c28f2f867519cb223f8a578693db0a45d9cd0"}
{"bytes": 1120, "path": "projects/sfia-studio/app/components/ui/EvidenceList.tsx", "sha256": "996448c2c3a39276e79db4a3eb0395ffd6a910f801d37c15e676c6ee20f7a62c"}
{"bytes": 821, "path": "projects/sfia-studio/app/components/ui/GateList.tsx", "sha256": "5aa67385e35d676b2d4bb41215b7b7c5661c41aa38552c9ea56dc0ae105a5b0d"}
{"bytes": 691, "path": "projects/sfia-studio/app/components/ui/MetricCard.tsx", "sha256": "463256ebcf13727c6a175b5ca863ed4816c4393809899dd61f265558c38e868b"}
{"bytes": 582, "path": "projects/sfia-studio/app/components/ui/StatusPill.tsx", "sha256": "4c12b6cd6b250ca6a5e6dfb6ce7a9c0a737e887a405103e780f364388c9829d9"}
{"bytes": 299, "path": "projects/sfia-studio/app/components/ui/card.module.css", "sha256": "f191394414cc317b22dfdf26546d5552c095ebcb2951ac0a5d8b2466f2e448a6"}
{"bytes": 1032, "path": "projects/sfia-studio/app/components/ui/cta-button.module.css", "sha256": "0b3b78b3c06236967afbcbb45adfe8e26a33e517130eca1d970c3424f7108644"}
{"bytes": 713, "path": "projects/sfia-studio/app/components/ui/evidence-list.module.css", "sha256": "ef4de4b91c265920395d3539b7f3bb92978817e9bb6ccd6d897df07c3ea9ae62"}
{"bytes": 872, "path": "projects/sfia-studio/app/components/ui/gate-list.module.css", "sha256": "5962e44aa4c56f5a1cd488086cf2ffa4e09feb8421729f3a90e894f98a408045"}
{"bytes": 953, "path": "projects/sfia-studio/app/components/ui/metric-card.module.css", "sha256": "4e345f0223c62d9514203a004640cab0266e9dd02cebbf7a7d4191ec3dd01717"}
{"bytes": 1178, "path": "projects/sfia-studio/app/components/ui/status-pill.module.css", "sha256": "a6a49d224a13b054ad32a2ccdfb0694ab307f84f07719c39d5d50507056114f1"}
{"bytes": 2117, "path": "projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx", "sha256": "ea402a40a4bd121767dcef1b75067d678bda87128fa24716bd069bf4f97e07c1"}
{"bytes": 606, "path": "projects/sfia-studio/app/components/vertical-slice/VsDemoRoot.tsx", "sha256": "465b5530aa1c160e50611d8486fd4c32e1aad2592d90b6107345eb5b8c0da513"}
{"bytes": 5159, "path": "projects/sfia-studio/app/components/vertical-slice/VsShared.tsx", "sha256": "60e73d2207447b1f872edc767b84c50444c47708563c6ab56415808a39042343"}
{"bytes": 1244, "path": "projects/sfia-studio/app/components/vertical-slice/vs-demo.module.css", "sha256": "4940637b292622e7638b05935bb18068a5ba838546042f8203d00640ea07735c"}
{"bytes": 4710, "path": "projects/sfia-studio/app/components/vertical-slice/vs-panels.module.css", "sha256": "9eefdae256c8c736001e91682a7187e87537863b0a90eeaae50d59a856429e3a"}
{"bytes": 3977, "path": "projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js", "sha256": "4a43c879303bf5bb0241ef761c9045df93db7227732edd12b7f392251c4d9e9a"}
{"bytes": 8099, "path": "projects/sfia-studio/app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js", "sha256": "1a6c6a93968eb7a2dff32a2b9f5474a09d29f5f9d91ed6ce09e0b49abb7fe81d"}
{"bytes": 2485, "path": "projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js", "sha256": "e4fb4ad2ca65465b4628cca09213f23755fd2da0c337ec7968d6a64a07ecda00"}
{"bytes": 5532, "path": "projects/sfia-studio/app/db/migrations/1754600002000_finops-t3-alert-review-state.js", "sha256": "4b5d11785db303eaae015d34d27f5fe628d9bc3074fe2f8f75f3e9d923f08ddb"}
{"bytes": 2913, "path": "projects/sfia-studio/app/db/migrations/1754600003000_finops-t4-enforcement-projection.js", "sha256": "ac455859526f1feee4614057740bf1c57664d476e675b0fa79bbfd2e9c239ef7"}
{"bytes": 1584, "path": "projects/sfia-studio/app/db/migrations/1754600004000_finops-t7-rollout-config.js", "sha256": "20b85c4080bd2feca6dd345b48be9ece1c8881aa8fbef5f2ec35b1af5f4f42a9"}
{"bytes": 2866, "path": "projects/sfia-studio/app/db/migrations/1754600005000_finops-t2-billed-period-attribution.js", "sha256": "c92dcf6d9a9aa073ec4173d528ec916e5eddf98cefe256e69a7385cc62a566c8"}
{"bytes": 2160, "path": "projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts", "sha256": "e019e46cfca26abc1106246be3cbecda471bfbe0c00293a897b0222276e8b588"}
{"bytes": 4127, "path": "projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts", "sha256": "09dadea16bca1699c56fce0cf585e41b3cd43e9a0a8a088796ab7f2a1e107d37"}
{"bytes": 4741, "path": "projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts", "sha256": "4fc235e179e128cc90589080bd0ec75453644bd731c81cdb3f57089929f03fc7"}
{"bytes": 8100, "path": "projects/sfia-studio/app/e2e/d1-c3-context-matching.spec.ts", "sha256": "87d390a37f545eddc3e144df398e8ff3af328dfe081e6bb1631171492d0e4e9b"}
{"bytes": 9774, "path": "projects/sfia-studio/app/e2e/d1-c4-confirmation-mutation.spec.ts", "sha256": "073933043be18bcac8968e7f9a1b83eb82b1ff5e67b8b078758f309b42fea51a"}
{"bytes": 4244, "path": "projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts", "sha256": "bbd0947629553c8174c2cb08a432762069de269d2e640b341ee0740999d7d89e"}
{"bytes": 2733, "path": "projects/sfia-studio/app/e2e/d1-platform-integration.spec.ts", "sha256": "8cc42daafb343b78f99af6f2e93d0b0136a668889463e7bec2a3c265e5850bf0"}
{"bytes": 5844, "path": "projects/sfia-studio/app/e2e/increment-a.spec.ts", "sha256": "87faf52da8c3eaddd023cca1f857a0cf70b2e8709d4658698fa62ceac280b2fb"}
{"bytes": 4311, "path": "projects/sfia-studio/app/e2e/increment-b.spec.ts", "sha256": "f8ecc494e004838747f5f447acce1f1fe699bad8408171e4668e56afce9094ca"}
{"bytes": 4808, "path": "projects/sfia-studio/app/e2e/increment-c.spec.ts", "sha256": "9a8f888537ed982e3a2070b23009f538f4018ef143dc348d7e0c2f35cf40518b"}
{"bytes": 6546, "path": "projects/sfia-studio/app/e2e/increment-d.spec.ts", "sha256": "a6fa695d478a154e364f92ebdfa0e62a51f6575fc28fb64def73d2905d9b2c27"}
{"bytes": 6351, "path": "projects/sfia-studio/app/e2e/increment-e.spec.ts", "sha256": "5c72c8f49bba63dea6329c6b66e489bab7d680e61f00da22c7c80f6499bfe798"}
{"bytes": 2757, "path": "projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts", "sha256": "77cb5eff7f81e40f0861b75dc53d5f1c186cf336c4b2911220c9b3dd66bed3b0"}
{"bytes": 6326, "path": "projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts", "sha256": "36a2e0f85c57c8c55ccdbe194f6f1aaf9edfa500e977c18fe613ae62d9d3f885"}
{"bytes": 2303, "path": "projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts", "sha256": "89b8ffa1b168625a90828ad8a02cc75d3814c3dd3347ef9470f2a8223db83b37"}
{"bytes": 3081, "path": "projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts", "sha256": "4ec09d9c0103fbed0f30ddc1b7ed22a658830298cffaf8857af7d2fe8ef9d38c"}
{"bytes": 7026, "path": "projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts", "sha256": "04bc7abfef9b0b78f3afd32fe1800032495adcc2075ac0f628b102db5892c629"}
{"bytes": 5104, "path": "projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts", "sha256": "4204d32a845cd537aaa84269eda29b7b855b64fb63de02d2be455739978a9348"}
{"bytes": 3568, "path": "projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts", "sha256": "8c383ce858507a43667f4ec95016cc9e866f7548e7a3df59b60dbb5408a0e706"}
{"bytes": 6358, "path": "projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts", "sha256": "5fe8efe8c51b6fa51108a060c4672adebafda1d5a8f68ed21fb1a8672a6f7502"}
{"bytes": 1714, "path": "projects/sfia-studio/app/e2e/p0-polish-2-screenshots.spec.ts", "sha256": "5f2403b7c7db5d005ece42c4a542a22598e077c56b4dcc3104953cb300bee29b"}
{"bytes": 1927, "path": "projects/sfia-studio/app/e2e/p0-polish-screenshots.spec.ts", "sha256": "4d988f9e6f6230a1cad70825be0908ff223eb50190a9149772c9657b377dd77a"}
{"bytes": 2982, "path": "projects/sfia-studio/app/e2e/p0-smoke.spec.ts", "sha256": "1683b167285fb4e7107bbeaafa07f26b8669b0e8c11f6ab236c004cf84d766c5"}
{"bytes": 3114, "path": "projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts", "sha256": "cc30b05918548fde8bd930f6e6209a4318f9070adcecd295e8a4296707572bea"}
{"bytes": 12032, "path": "projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts", "sha256": "d28169231eb4fe327d876634bf4cf4a580d15605bb02154ba53577252fa7a677"}
{"bytes": 10933, "path": "projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts", "sha256": "e4c55c7c9ddf7f73945bf1918a6d06cd21b5de7f2dc9d663822653630e3d3161"}
{"bytes": 10759, "path": "projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts", "sha256": "28d6d74fc306a723df5d19857e361c9e0ff713fbf12859839de8d14f9c1231aa"}
{"bytes": 16537, "path": "projects/sfia-studio/app/e2e/studio-option-a.spec.ts", "sha256": "2847008d15113dda0f89b8f588eebfd0c6e8240149755f671e52d5605d1f5469"}
{"bytes": 2453, "path": "projects/sfia-studio/app/e2e/support/optionAQaScenarioControl.ts", "sha256": "55fcba2d88826c91b69b1e8988358d39970d17d8134da8e359ab9bff51185151"}
{"bytes": 388, "path": "projects/sfia-studio/app/eslint.config.mjs", "sha256": "ef22c8df53c0693023abce1911d4ab0fc519a7bb80218c1285adcd1f0bf8d218"}
{"bytes": 332, "path": "projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx", "sha256": "614928c115c95d2a227606d8580cd613928a7f45cd55be57632497cd9216149b"}
{"bytes": 17048, "path": "projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx", "sha256": "db85f5e27643b27fdde111a9db55649d2b389b439a4068ec7037c447f1a4ff14"}
{"bytes": 4941, "path": "projects/sfia-studio/app/features/cycle-actif/cycle-actif.module.css", "sha256": "5f6c7f367c56c3e246e5fc67e60807cb58ac73652ebbbd9e8454286aec12d3a2"}
{"bytes": 943, "path": "projects/sfia-studio/app/features/d1/Badges.tsx", "sha256": "3682aa2c8208ab596b4d8acd29fc6229664e354564ec4364af714bd77f04f0aa"}
{"bytes": 1824, "path": "projects/sfia-studio/app/features/d1/ContextualRail.tsx", "sha256": "83e23f8a967d45d1f5734ad55546d69249dc8f94685abc6420a7d1fcf8159a51"}
{"bytes": 2411, "path": "projects/sfia-studio/app/features/d1/D1AppShell.tsx", "sha256": "4ef505e1a7639ca293a210a94334bf5045697ed17a8f9a0caea59bf11c477434"}
{"bytes": 4142, "path": "projects/sfia-studio/app/features/d1/NewProjectForm.tsx", "sha256": "49e929da79157872ffe011fb826e05b17205164383966e0e386c35611c409aeb"}
{"bytes": 3656, "path": "projects/sfia-studio/app/features/d1/ProjectCockpitView.tsx", "sha256": "4e7d5aa5cae57b23d0907fea0906a5ff7aeef7a16b581d3f515f8461921cc1b4"}
{"bytes": 2924, "path": "projects/sfia-studio/app/features/d1/WorkspaceHomeView.tsx", "sha256": "ebb8fb1e53acf22806105f7d1b337fa8d18a9fb2676f4fd22aff569f9d8aa40a"}
{"bytes": 9062, "path": "projects/sfia-studio/app/features/d1/confirmation/ConfirmationPanel.tsx", "sha256": "158f174c031a249072da1684057344d85b30e57c0300fa1f7e4c7d946cb8c5a8"}
{"bytes": 4065, "path": "projects/sfia-studio/app/features/d1/d1-shell.module.css", "sha256": "107a0fe20ea37d808beb92dd52b4c7416617046382f4ec6d9ad0dec77d40170f"}
{"bytes": 9771, "path": "projects/sfia-studio/app/features/d1/intake/ContextMatchPanel.tsx", "sha256": "2610463521399de0bfadd1020c0f26e3fc684e3ce6a9bbf37c189f726f68c358"}
{"bytes": 2146, "path": "projects/sfia-studio/app/features/d1/intake/IntakeContextRail.tsx", "sha256": "e46fd92260753fe297841afeb86f06c5f54519964fd16c61904f740ad3ef3294"}
{"bytes": 28598, "path": "projects/sfia-studio/app/features/d1/intake/IntakeView.tsx", "sha256": "4e9861ce4467878ee4d7216871425d867a9a075e6cdad96a822079bd19f58721"}
{"bytes": 7713, "path": "projects/sfia-studio/app/features/d1/intake/intake.module.css", "sha256": "2fee9aac66730295052f68fcbebe1ad8721c9ec4f6874049703b8f587f9964dd"}
{"bytes": 335, "path": "projects/sfia-studio/app/features/decision/DecisionScreen.tsx", "sha256": "339882e36687aa77e2537e43253be6d1bfb4aea4d4b060b5cb417355b8d6e97f"}
{"bytes": 14231, "path": "projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx", "sha256": "2ddfb3a721930cfe27d3aa77df3a460e6ca3cb44a500457327e9eb5f4efe2e79"}
{"bytes": 4218, "path": "projects/sfia-studio/app/features/decision/decision.module.css", "sha256": "e5a31215f646a94ab5dbad5a658e0f1c433d1eee23b1d4d0b3994248f2675a67"}
{"bytes": 3443, "path": "projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandePageClient.tsx", "sha256": "6a5c6592d654e016776bab3beb1168735fc594dd007356dc091ad78d8017fe96"}
{"bytes": 778, "path": "projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx", "sha256": "c62e98198fb7dddfb7c2be2e248474827a7c986463bb3bb1b57d05ea9e189785"}
{"bytes": 18161, "path": "projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx", "sha256": "82bfce13e7e471a1aa545a477723098f594d38ee995b62acc983a575c19b92ff"}
{"bytes": 6509, "path": "projects/sfia-studio/app/features/nouvelle-demande/nouvelle-demande.module.css", "sha256": "ba3dda6978e26e29e6aa9ab4e654d6c783615c11dbde79cc1dccc7e3bc8dbab3"}
{"bytes": 85958, "path": "projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx", "sha256": "d2475934b88d5d8649e3ce85dccb61683005485f1132efd27b1bbed838a56638"}
{"bytes": 9445, "path": "projects/sfia-studio/app/features/ops1/ops1-session.module.css", "sha256": "b47de57dd84099988900c86386e8f3559a76531e984f9363620f6264ea33ae64"}
{"bytes": 3570, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css", "sha256": "a210cf15605a1563fabec0d6215811b312ea5619342c546b95ee71593fc0a4f9"}
{"bytes": 10765, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx", "sha256": "b1c0546bd4f72d4cc6772123852b0ecc8d6621c4d651876247295115285e1502"}
{"bytes": 2791, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css", "sha256": "aa5b1188fc15878bb6ced8f5ccb5e27e3037464c6d3967f29ae43ba969a4d70a"}
{"bytes": 3101, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx", "sha256": "0def34f740f46d770c5f2a4d6a1ef24cf736b6d13fab88288b311f342aa383be"}
{"bytes": 4142, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css", "sha256": "fd207dd58c5f97e24ccaa930f9269e99ac603089d097393c6c0997eed29b31e0"}
{"bytes": 5654, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx", "sha256": "65cdb318610701e957cb6a85095850229566756cbca1f9247fa8359424cf59b7"}
{"bytes": 4019, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css", "sha256": "0bafcd3d731e7ed55d6fa687721d7e1fc4fe8da02a9f9ce49dda541649e9b0a3"}
{"bytes": 6272, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx", "sha256": "8c4956913013e7efae96d8642f1ab6065cea7423716462fa0bef3fdcb5932604"}
{"bytes": 3878, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/README.md", "sha256": "808560d414164cd2ab062305ed7d83c54cbcaa691001cfa3944a67999e547c1b"}
{"bytes": 17553, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts", "sha256": "282737b2cf17aac21dab8cbdd8a276dc1d13ab6cc5eef2ccf708e6cdff03d13c"}
{"bytes": 295, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/index.ts", "sha256": "6ad480094ccbbe0236657cf1ca2ed5997ce51dd9a5d7c0a9783be9c783cab80b"}
{"bytes": 1516, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css", "sha256": "834386960b549addf1e3942af7f9f22b927114244490063c3952c042bd054acf"}
{"bytes": 13807, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css", "sha256": "abd592cc848850077f026fa29e2f14f67db2b19cec3b9a165b30692803b6d4ec"}
{"bytes": 38139, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx", "sha256": "94c66e2c22d8fb914fd59af81a882567a8bad6ba67d4a201bfc32d4700de8dd1"}
{"bytes": 1768, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css", "sha256": "1a6b4b0d47ff5dd04f58483ca16297e634465d6fd2cab86fb7f4cbfe76798340"}
{"bytes": 3145, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx", "sha256": "49213a6f520a02bf97d9b28d4e3781d8f8e30156baf5e1fed2bad7f352cb0b2b"}
{"bytes": 2136, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.module.css", "sha256": "21cf3fdc48e2a29023f412e9633e877d02b476b209ddaf3c470b3d005862b98d"}
{"bytes": 4283, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx", "sha256": "4e839360cb4296e3f86fc6a231d131db5e0893c06f3728cefbb910501bfeff3f"}
{"bytes": 1293, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css", "sha256": "f261e79dbeb87a060e39631491e5beb7182edbc0dbc5a92f641923341e894502"}
{"bytes": 1545, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx", "sha256": "d508871f6242fa6d68c892957f125dc498894105eaefb7389ad8b19eb11ebd8d"}
{"bytes": 317, "path": "projects/sfia-studio/app/features/pre-m6-product-ui/types.ts", "sha256": "2e1d190138acb3666d1ce301a0f3af7356c165b292f58514809a06123b7102ef"}
{"bytes": 47965, "path": "projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx", "sha256": "a422768cfa48747a4913eac53702c1900c675d3cb1fd03209d6039eb257174f1"}
{"bytes": 24769, "path": "projects/sfia-studio/app/features/project-assistant/actions.ts", "sha256": "b269556c0fd608e2feab253b3ac91ea687301ba522b3fe7a3d4626dab53e37cd"}
{"bytes": 1998, "path": "projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts", "sha256": "6647a4d0baba7e83da92d44c57d5ea2e525a398480063faf63c80e144cfec8c9"}
{"bytes": 2387, "path": "projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts", "sha256": "94ef7ae0847320d08e2aedc7c78d07b71765d8031ece20b9772fd454e9e3ce1a"}
{"bytes": 1953, "path": "projects/sfia-studio/app/features/project-assistant/f2/gatePolicy.ts", "sha256": "9a1b76adfe392a4785a0a2ee02647c1c81b403fa5e72e491dbddaf6cd9fe1961"}
{"bytes": 8725, "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts", "sha256": "c21e52cfe58e544ef88fbe626b909904204ab7cf82d2bf55c3ed8628bd5af729"}
{"bytes": 17001, "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts", "sha256": "b39a9d529925725941a968015d28dd167a0b5c457b295dff8ec1f1501790765e"}
{"bytes": 2726, "path": "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts", "sha256": "24d06abb150af96950b65e26053b0d9f352657e7f037fc63f4eea8fca843f3e6"}
{"bytes": 2485, "path": "projects/sfia-studio/app/features/project-assistant/f2/qualify.ts", "sha256": "99fadc09c339af8357dada14dc67f48fd9dc43b1a7fab09d870501e27c4ab40d"}
{"bytes": 9349, "path": "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts", "sha256": "8a9673f09a25c45885defa19b33578f2be644485ec49c3b05dc21e1f3e707f4d"}
{"bytes": 3513, "path": "projects/sfia-studio/app/features/project-assistant/f2/types.ts", "sha256": "bc3221c3835ea7624d29a9536558b6706807c7718db0cf5de6c2d1235ff5b981"}
{"bytes": 2259, "path": "projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts", "sha256": "41249d77fbc02ab4ee08a77e160240dcd198da57eeb9c44967364c814f2296ea"}
{"bytes": 1084, "path": "projects/sfia-studio/app/features/project-assistant/f3/attemptReaderBridge.ts", "sha256": "8367d94a12702115605b1b176415f7a521d5cc398984ec11cfb8003dc6a098ce"}
{"bytes": 1578, "path": "projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts", "sha256": "4ea9d9fcf2905aac602e73bb08f893de96b6eb9fe9520d287a9f5e9a2d535b02"}
{"bytes": 9243, "path": "projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts", "sha256": "df7cc1cb00b80d9c9b777631edce93b7f8b849666ea78ca7c87d1f32ad4e03af"}
{"bytes": 6578, "path": "projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts", "sha256": "53f1f4730388081da47d68feb19c30f79fe590f3533e6e7dc40972a015187eaf"}
{"bytes": 7501, "path": "projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts", "sha256": "51d4464c3e4d1059679ca8aa2bdc0f21f22c77cf0d8f031bd64a77a2ee228de3"}
{"bytes": 2973, "path": "projects/sfia-studio/app/features/project-assistant/f3/constants.ts", "sha256": "dff1611cad3b97603edd6e94d9ef01ee28f8cbdabd121d26ae53300dfbfd0f68"}
{"bytes": 2444, "path": "projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts", "sha256": "e4045dabe304a2430895b8c874ce045809dc561fbadf3f1c7cf3b957c1dc5512"}
{"bytes": 10830, "path": "projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts", "sha256": "a3f78f9d86f7c370f02a2a3b20f6a4ff0c7cd17b295fc5f7f675f566fb62b95a"}
{"bytes": 15158, "path": "projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts", "sha256": "e33f8f870ed785fa051cd86c7994448bfbeaf15c2e2e781db7eb1056274fe6aa"}
{"bytes": 11841, "path": "projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts", "sha256": "af79faec7078d226e81b6d2c4c7b4dc51663d42c293dfe1c55100ce8eccd8bb4"}
{"bytes": 1982, "path": "projects/sfia-studio/app/features/project-assistant/f3/fixtureAgent.ts", "sha256": "4ab8a368595f2706bd0912e288f6ce3f12906e9b86218c338a0999a53a04a58f"}
{"bytes": 1531, "path": "projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts", "sha256": "b44df45ba51de4f544a55b992249d3351dd0bbf7bc2ed2d08f84cc36cd3dc71c"}
{"bytes": 3325, "path": "projects/sfia-studio/app/features/project-assistant/f3/index.ts", "sha256": "486a76ad30ef37ae3d56524bb539ccb938dac452d0d2dab1c6078dbc6b364a57"}
{"bytes": 10403, "path": "projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts", "sha256": "ea160bda2c38671a3071dd0a4a7b5fa167bd15fd190af8cc5a05789c23471f4c"}
{"bytes": 5144, "path": "projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts", "sha256": "26284a194a9ca092adcaed5b94a41594ddd3f8232142e24710cb0235f4f92fcb"}
{"bytes": 6022, "path": "projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts", "sha256": "09baf85debe5ada9b911790d32ac4a348ffd265c6ee6dd0540f61695df1e8ff4"}
{"bytes": 6151, "path": "projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts", "sha256": "d0815387238270c9444917d0ba6e471ea23ee86240c580d9f6bd142a11a2d73d"}
{"bytes": 9943, "path": "projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts", "sha256": "8692b02bfcf397a1f01f4e3721987f783b048b444c482dd91f99db5079d7d21a"}
{"bytes": 7982, "path": "projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts", "sha256": "bb3be5c72d38b3371adf750a222b47063533326b8ed104876adb205953d2a3b4"}
{"bytes": 26368, "path": "projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts", "sha256": "136ae3f962e8f4be8de4316459d1bb3b37b2d4998b1c95e1993bd24608907fb3"}
{"bytes": 3055, "path": "projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts", "sha256": "e82ced5da6d5abb054f63faecaf78fd3ca473963880d1056129862dd1b61ce8b"}
{"bytes": 678, "path": "projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts", "sha256": "29f7a16d78c56671eb96c0da6a038ffcd96d141552fdf7d6bb0a161e785121a7"}
{"bytes": 3259, "path": "projects/sfia-studio/app/features/project-assistant/f3/types.ts", "sha256": "d1930c7809af4d28085c5c8da381fcb793f549fe76d7e99020a0ea5de1d068da"}
{"bytes": 2968, "path": "projects/sfia-studio/app/features/project-assistant/f3/validateF2ForPrepare.ts", "sha256": "67ed05ee97a43071b966713a1f1eaeeb3091453670c76f1d107e313b197594cd"}
{"bytes": 7898, "path": "projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts", "sha256": "136a89e743091ffd35452aad1cc215215aee015556349e644e5f965e09149344"}
{"bytes": 196, "path": "projects/sfia-studio/app/features/project-assistant/index.ts", "sha256": "6d0cb8bef97ad55c408e0198207410f0bfa76fa39aa3798079a645931f36a3a8"}
{"bytes": 1028, "path": "projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts", "sha256": "497656c94ab328eb891329cb64ade93c0a7afeecd19b92d59da2986ef01fd0e6"}
{"bytes": 5646, "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts", "sha256": "ba906c869a16d8016403b81836b0d82754505c53a1358cf1b515f9131300cb87"}
{"bytes": 4635, "path": "projects/sfia-studio/app/features/project-assistant/presentationLabels.ts", "sha256": "03c9abc44ed34fd8c09a070010edf1a40aed8d9397e79cb47fc9bda5f5c01347"}
{"bytes": 5667, "path": "projects/sfia-studio/app/features/project-assistant/project-assistant.module.css", "sha256": "9eaa27f0299d36a2bdeeff760fac33e391d3085cd33c20f4038abde45f6dff3e"}
{"bytes": 6926, "path": "projects/sfia-studio/app/features/project-assistant/types.ts", "sha256": "9909b0b7cba405f4e27b860a9eec3e390a9bc0602d6827032ff4addf7383337a"}
{"bytes": 4086, "path": "projects/sfia-studio/app/features/studio-projects/LivingProjectStatePanel.tsx", "sha256": "583fa58be79436737d3cd88047c381bf3f39cc8c6b50d8b39fb4b655bc3d89a1"}
{"bytes": 3335, "path": "projects/sfia-studio/app/features/studio-projects/ProjectHistoryPanel.tsx", "sha256": "c07caa6d94cc2fe4ab0ab0b0b7f5e6639cfc89b9d34d323c4f81d1f0ce4b245a"}
{"bytes": 5581, "path": "projects/sfia-studio/app/features/studio-projects/ProjectPrincipalClient.tsx", "sha256": "7bc666b7b0639877b4269ec386ebad81df882ce8da7e73828813cb55e80532df"}
{"bytes": 1522, "path": "projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx", "sha256": "621988f46470f951961d3ffd0063f7dc18c5b98cb07a8d4512257add9e6546b1"}
{"bytes": 5422, "path": "projects/sfia-studio/app/features/studio-projects/StudioProjectsHome.tsx", "sha256": "25a73539d265ac90c02f78347c0a29c0fa4dd438e0416966525ae2bd8bc58032"}
{"bytes": 321, "path": "projects/sfia-studio/app/features/studio-projects/index.ts", "sha256": "88043f63776cdff0146f2e5f85cd15a035775a384aae8cdc721820fbf852e740"}
{"bytes": 1553, "path": "projects/sfia-studio/app/features/studio-projects/living-project-state-panel.module.css", "sha256": "c2b262b644d37d9dff4c22fe76cab810b661d3486bb8ff11f77efdc39420000d"}
{"bytes": 898, "path": "projects/sfia-studio/app/features/studio-projects/project-history-panel.module.css", "sha256": "1134e8785c5c0f140fb05417ba76dc3904413feb3655844a0c71d54231540ace"}
{"bytes": 3085, "path": "projects/sfia-studio/app/features/studio-projects/project-principal.module.css", "sha256": "f6bbda8dc5042144966cd2d13841804fd6db7554c1fa2dba160a303416caa349"}
{"bytes": 1004, "path": "projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css", "sha256": "59ca482a161fbd813fb0274ba7be6885a24edd16c49f8f031241103516604bf1"}
{"bytes": 2480, "path": "projects/sfia-studio/app/features/studio-projects/studio-projects-home.module.css", "sha256": "740209d26f85a8b06cbed8b559d760a40ca88dd955b3727c75fd15f8055518b9"}
{"bytes": 328, "path": "projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx", "sha256": "5395094328e888d2dd36a4a10763c72bf4556fbbfa72f75ee76babea7f5264e6"}
{"bytes": 8826, "path": "projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx", "sha256": "1d8381fe80cd9d3e81bdcec6f10540f893384094edbfb30562e02c2d37788261"}
{"bytes": 3812, "path": "projects/sfia-studio/app/features/synthese/synthese.module.css", "sha256": "1cdca9fa270375ea82c35811bb550e984c028a021ddb54fdac2a4a7309544dd5"}
{"bytes": 21035, "path": "projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx", "sha256": "67eec47211abdbcd1d77885bfd9fa18e1cc170837d1cc085d76114be5d3cf465"}
{"bytes": 1216, "path": "projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceClient.tsx", "sha256": "13c1219f1607d3ddb9ba3f46b188685501465f0538f85edb7b4445abe099c7d9"}
{"bytes": 7236, "path": "projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx", "sha256": "cec43c6495d54a712c0427e4734bccceb9f5bc0148e18f9083c64399dd856bcc"}
{"bytes": 1486, "path": "projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx", "sha256": "de3db7e00ca0d59a1aa799208ca34590d36dc5bc50ba6369274998183b48807e"}
{"bytes": 5628, "path": "projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css", "sha256": "5501a398ad96f1b175ff13371834fe4575e10ce6a358795488de33699a0dd12e"}
{"bytes": 2911, "path": "projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css", "sha256": "56762a3866a1833ea1ec79e8d61941c7da9badb8c108f8c5073921d104e9c014"}
{"bytes": 1144, "path": "projects/sfia-studio/app/fixtures/cycles.ts", "sha256": "5951fef1eb2f77b4149c13f4fc0394a7fd64035dedc4b3716baff4dc9bef89e9"}
{"bytes": 932, "path": "projects/sfia-studio/app/fixtures/evidence.ts", "sha256": "2306458f8c83b9409147ce705a8162c4b1726da2e8811a5e13ae7f382e9d395f"}
{"bytes": 496, "path": "projects/sfia-studio/app/fixtures/gates.ts", "sha256": "d8e7105aac1801996c62e1245641d48c625febe6ad82ac772fe1e5e9e37b6714"}
{"bytes": 245, "path": "projects/sfia-studio/app/fixtures/git-status.ts", "sha256": "f2ad3885d9907985920d446fb8b226a653b1a000c73bc2259a5e83092a75696b"}
{"bytes": 1306, "path": "projects/sfia-studio/app/fixtures/index.ts", "sha256": "a396b5153e679b555fd0574080d14a31fd2944a140272a3a709132fabdf53659"}
{"bytes": 3147, "path": "projects/sfia-studio/app/fixtures/vertical-slice.ts", "sha256": "e807b2087767be276bd005f50d5f08616d3e98a2a094f51dcf5464f116d3e506"}
{"bytes": 353, "path": "projects/sfia-studio/app/lib/a11y.ts", "sha256": "880ac6705f80f877225b57107e7d4fba7d7d12b64b9b1e2481ca4ff36e151c7c"}
{"bytes": 247, "path": "projects/sfia-studio/app/lib/adapters/cycles.ts", "sha256": "2e2be997861d176c8d22cc9bb87d2989ebe70e78b2d406fb01485246f183769b"}
{"bytes": 428, "path": "projects/sfia-studio/app/lib/adapters/decisions.ts", "sha256": "1f63b267937f4db5679d31ee17ccabf12d6bb8a8d28ac06abc8fc83c75061716"}
{"bytes": 194, "path": "projects/sfia-studio/app/lib/adapters/evidence.ts", "sha256": "1778b37debb3951e9afdc390a1aceef797808fb2dfe065ee5c23c5505f498702"}
{"bytes": 160, "path": "projects/sfia-studio/app/lib/adapters/gates.ts", "sha256": "7d4703d3493d0cde477acdc7937db4a773560ce0e5224cc1263de7873da121ad"}
{"bytes": 490, "path": "projects/sfia-studio/app/lib/adapters/git-status.ts", "sha256": "91c37e818134aa5c580ce822639c27cf433a47394c1bec8bd5f94c322e6263d0"}
{"bytes": 1547, "path": "projects/sfia-studio/app/lib/d1/actions.ts", "sha256": "16ad0ee2f092771f2190e66f57a1e950d8308221877635f43cd6870fd7f6fac2"}
{"bytes": 698, "path": "projects/sfia-studio/app/lib/d1/authz.ts", "sha256": "4e449fe213ef81779a59dffbaf80acb39e796e5373f7274a22219fb956719a1d"}
{"bytes": 4299, "path": "projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts", "sha256": "954b90d97984db874334147d3e506238290f0925c7d51dc6001c037b8960c827"}
{"bytes": 6452, "path": "projects/sfia-studio/app/lib/d1/commands.ts", "sha256": "731fe8510f0da317f24845633c215eadb7c2c09afe265faefa6de962fb326fcd"}
{"bytes": 2504, "path": "projects/sfia-studio/app/lib/d1/confirmation/actions.ts", "sha256": "34e9a49cd7179357c7c247d59251b101eccdcbad4318366069bb053e6d88f130"}
{"bytes": 11927, "path": "projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts", "sha256": "c72be7637582ba23915caf42de77aa852bcd5c1108f9616b8e774e3a85d59c88"}
{"bytes": 246, "path": "projects/sfia-studio/app/lib/d1/confirmation/index.ts", "sha256": "1da6636e397f4070e64b93fab01ef5f8575572b5a731bff2b6d6f85544ad3f1d"}
{"bytes": 3259, "path": "projects/sfia-studio/app/lib/d1/confirmation/summary.ts", "sha256": "62d405918664e345ecc983cbd99550aca1d29c92c9645b1d1ba902297ed86fc5"}
{"bytes": 2819, "path": "projects/sfia-studio/app/lib/d1/confirmation/types.ts", "sha256": "8c88a606fa4325744fb550da75a7691c2ae8beb633858789ebf68917fe04d402"}
{"bytes": 5166, "path": "projects/sfia-studio/app/lib/d1/confirmation/validate.ts", "sha256": "b05fa66718a4c38c2963f7c9dcfdba7c7c5355af36ff212e7bd6f6031861738b"}
{"bytes": 1646, "path": "projects/sfia-studio/app/lib/d1/context/actions.ts", "sha256": "0d7e3bf158d0b656ba2f6eb4c5c648358cfefb2c1ff5a160f3a76fac492e5cf0"}
{"bytes": 3580, "path": "projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts", "sha256": "48ccf45c513bdfabdfc24da8fda6ec181b0deb17044fa349de68b4c68960acd7"}
{"bytes": 242, "path": "projects/sfia-studio/app/lib/d1/context/index.ts", "sha256": "b9623f0a347738fdc9822b4067536ce017c0fd07cac34f1c8522aea06e4ea54b"}
{"bytes": 11055, "path": "projects/sfia-studio/app/lib/d1/context/matchExistingContext.ts", "sha256": "7cb5c4968f0cf49e67360fe9423034ded3190694c67cc52cd70530af219f61bb"}
{"bytes": 2712, "path": "projects/sfia-studio/app/lib/d1/context/normalize.ts", "sha256": "8ac4992425884d9f97f2acc8276c71eb2c277451953ee3ea696013bdf042ef7b"}
{"bytes": 4313, "path": "projects/sfia-studio/app/lib/d1/context/scoring.ts", "sha256": "cc0b2e01e58a9cddcddf0ed175018516b0ecf88de866c69930486df49e0fc453"}
{"bytes": 4144, "path": "projects/sfia-studio/app/lib/d1/context/types.ts", "sha256": "8f72701dab04ea32532904dc5f09ff2086352ef2267077f3d6fc1792cba68a9b"}
{"bytes": 3878, "path": "projects/sfia-studio/app/lib/d1/db.ts", "sha256": "be6f88d68e9904f71636076654357d8ba15f55f766dd898e9a0459134a1e0952"}
{"bytes": 2071, "path": "projects/sfia-studio/app/lib/d1/domain.ts", "sha256": "1c2b9ffa83252c0d9f71ef65b078ec938300f079ed72bf26920f1bb51c59cd6f"}
{"bytes": 459, "path": "projects/sfia-studio/app/lib/d1/errors.ts", "sha256": "8841b99e64d5f27566e50996c4112e0fe8a73530cf2d0fcc3638effb90dcba05"}
{"bytes": 291, "path": "projects/sfia-studio/app/lib/d1/ids.ts", "sha256": "23bf4c458c17a3eb049e2d5a88cb8da6466b5b125a387ea0454dd82cdfe94c1f"}
{"bytes": 1078, "path": "projects/sfia-studio/app/lib/d1/index.ts", "sha256": "9d84cee94fe920272f8340832735b6296ee03af06cbdbf8682421faf4d4138d0"}
{"bytes": 2392, "path": "projects/sfia-studio/app/lib/d1/intake/actions.ts", "sha256": "5b727045ebc583522f69493d26cbc4123d393bc67073b466d9e3452f0f08c531"}
{"bytes": 10032, "path": "projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts", "sha256": "90e53d69e671866efeca4ed36001825687f098dc1ede099d038f45b66f040c4c"}
{"bytes": 1980, "path": "projects/sfia-studio/app/lib/d1/intake/canonicalContext.ts", "sha256": "fe500acb598b08eabfbef432514a9db2e3f254574769a8a5d59775aeffd832f5"}
{"bytes": 2680, "path": "projects/sfia-studio/app/lib/d1/intake/d1EventSink.ts", "sha256": "7194903272a55bb657350c2e2a33df7ad4d39cf515c5dc41e351eec8ebac9a1f"}
{"bytes": 11284, "path": "projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts", "sha256": "37f3c663f05f4017af8a49449234543aea73a2b16485ddd43edaa6a898a8045c"}
{"bytes": 387, "path": "projects/sfia-studio/app/lib/d1/intake/index.ts", "sha256": "7c0709cc659e1827dfb4e394966b1b085aed7808c94636f19fcb6f7f2e556c30"}
{"bytes": 596, "path": "projects/sfia-studio/app/lib/d1/intake/platformFlag.ts", "sha256": "589030272807c5962837f8470a44b63db6a00e649dfa510233b74e1b4cc3bbff"}
{"bytes": 1965, "path": "projects/sfia-studio/app/lib/d1/intake/prompt.ts", "sha256": "bd0e1da2d283407984fca958f30bc673150fc30baee95833bbe002f22679bb89"}
{"bytes": 2510, "path": "projects/sfia-studio/app/lib/d1/intake/resolveProvider.ts", "sha256": "8ef769d5c81d1f0a819a6d3d788fbe109f2c18abb69a7bfc3021bcc52e29f8a6"}
{"bytes": 1979, "path": "projects/sfia-studio/app/lib/d1/intake/types.ts", "sha256": "28ebac78e50f84d99219ae0502bab9952258c7a94c16282a9be06b8f59a41260"}
{"bytes": 7507, "path": "projects/sfia-studio/app/lib/d1/intake/validateProposal.ts", "sha256": "36430facc05bbb168829499e1b3f8c5c08ff4cf470dfe3b8a08b176182526b06"}
{"bytes": 2248, "path": "projects/sfia-studio/app/lib/d1/intakeObservability.ts", "sha256": "04331d961d40b4f7e4bcbbd0001b16ce03d53530c496fa8e44cb06f6c0f27fee"}
{"bytes": 361, "path": "projects/sfia-studio/app/lib/d1/methodModeHold.store.ts", "sha256": "9db2f1a93c4f32bf82bdd7941ceeb32a7ae7db6e9ea0ca0ad5c7059694dae6ca"}
{"bytes": 970, "path": "projects/sfia-studio/app/lib/d1/methodModeHold.test-only.ts", "sha256": "715baa2e922894dc1d8339c88d93d40e26bc9440381ab1ffd0a9ec9d6542ab80"}
{"bytes": 3187, "path": "projects/sfia-studio/app/lib/d1/methodModeHold.ts", "sha256": "561c509e3c040e2a26462fb756ffa689220b6d833eb9c8c82f556f4383da1f11"}
{"bytes": 864, "path": "projects/sfia-studio/app/lib/d1/methodModeHold.types.ts", "sha256": "f2e90b3005d58be6ad776da6bedd779c24620a54d36da188cb8d3b7b105bb4d1"}
{"bytes": 326, "path": "projects/sfia-studio/app/lib/d1/observability.ts", "sha256": "f47f0e4803cea6a1b3fb7fcdd1c4d8da5292c64b099da266c2acaa5431a09f5d"}
{"bytes": 8768, "path": "projects/sfia-studio/app/lib/d1/operationalReadiness.ts", "sha256": "788b9b2a0afb8e0b476d3b82b8bccd28a7f9ae2771fd4b87b2e9896daf9a7181"}
{"bytes": 1197, "path": "projects/sfia-studio/app/lib/d1/paths.ts", "sha256": "80406ebd62af72e3b149f40df87e635b2bdeac238afb74e7f31cd96682ab8f0d"}
{"bytes": 8006, "path": "projects/sfia-studio/app/lib/d1/repository.ts", "sha256": "f04085d916be398b40bf046d54df9722730b52f5333e8011e92b8b302b46b618"}
{"bytes": 2625, "path": "projects/sfia-studio/app/lib/d1/types.ts", "sha256": "6b1c9404e9858cc188cfdeeb093cf932d3334cab4d0ba0889f691ac8db7b0a79"}
{"bytes": 322, "path": "projects/sfia-studio/app/lib/domain/cycle.ts", "sha256": "91e5b0cdd2e454bc1c02760ec7bad464476c24ee33879c9f35ee8a228b370e87"}
{"bytes": 262, "path": "projects/sfia-studio/app/lib/domain/evidence.ts", "sha256": "345787bbb81de8e03ddb748970e03317cd7f140150384d4de337197e40096b8b"}
{"bytes": 213, "path": "projects/sfia-studio/app/lib/domain/gate.ts", "sha256": "4028a1dad0f3ae5fc64b51bb1b10bdbe7448de224fb25472e17201d8d9e4c330"}
{"bytes": 208, "path": "projects/sfia-studio/app/lib/domain/git-status.ts", "sha256": "c8748a76ea613b4359ae5d8eba9e7f893fbd661d8354d994b69a9103321f9e7f"}
{"bytes": 176, "path": "projects/sfia-studio/app/lib/domain/index.ts", "sha256": "699be13a5c8f684bd4198b0ac373d2e17c2723af46da4f9c83c3eb9b427fa3f3"}
{"bytes": 1081, "path": "projects/sfia-studio/app/lib/domain/morris-decision.ts", "sha256": "a4ebf533133ec0beee2e4c3ef467cbbaed1bbcce23de29aa459731c411233b08"}
{"bytes": 547, "path": "projects/sfia-studio/app/lib/domain/recommendation.ts", "sha256": "98cfd43f4cc2aa84b3c24378cc138e23eaa0a6dc03fde18a68db644267a32bc4"}
{"bytes": 366, "path": "projects/sfia-studio/app/lib/harness/actions.ts", "sha256": "b05fc4efde574e8dc9f8ff31b7b5858c83746e4b2e11942863bc0f57e2f8ea8d"}
{"bytes": 2571, "path": "projects/sfia-studio/app/lib/harness/analysisAction.ts", "sha256": "15f284ac85cdcadeb35bf03f48baec97727da7fab40b50dc8100e53771f31133"}
{"bytes": 1446, "path": "projects/sfia-studio/app/lib/harness/buildRequest.ts", "sha256": "3a08f02c93117f4ddbcba93fd5221497e5d27e190fbbf36d50b241114ec2a1ef"}
{"bytes": 1956, "path": "projects/sfia-studio/app/lib/harness/defaultIncEPackBuild.ts", "sha256": "ad115ab1f4b7629d7682adb2b06ccad8bb96b4a28e94cd722629ad782746aa9a"}
{"bytes": 1539, "path": "projects/sfia-studio/app/lib/harness/demandTextValidation.ts", "sha256": "90c7c646654753c2e0f85e8cb2ff352c3d1ffd7b6ff940e28b8369b09216002e"}
{"bytes": 2343, "path": "projects/sfia-studio/app/lib/harness/incrementDAction.ts", "sha256": "e903bb0aafdac8502f2584fbc24a17c4a3f0b5fcae1295b96f82bc7f82d2ff40"}
{"bytes": 11222, "path": "projects/sfia-studio/app/lib/harness/incrementEClosureArtifact.ts", "sha256": "068a9a67fe225ccdc38e01cfe79887995b3c0d0a46aab2e2323abe9142c4b9cb"}
{"bytes": 250, "path": "projects/sfia-studio/app/lib/harness/index.ts", "sha256": "2306b881e3d4bca6352fdb63f746f19b8a4aff1d0be6192a42f0084895c0f622"}
{"bytes": 3151, "path": "projects/sfia-studio/app/lib/harness/invokeHarness.ts", "sha256": "f973e8f4b4bc3d232c8c7257a50bcf911f8defb050d923faac211df23d037dd7"}
{"bytes": 2551, "path": "projects/sfia-studio/app/lib/harness/qualifyAction.ts", "sha256": "1ea8718a8b636595e4055a44c495a36ca7a0db0d58c800d9c88d897048a888ed"}
{"bytes": 1845, "path": "projects/sfia-studio/app/lib/harness/sfiaCanonicalLabels.ts", "sha256": "9f61fcc199e87336ffc79a86a8b39bfc14e49f1347bf3d35cd1ac550447b1ad9"}
{"bytes": 1729, "path": "projects/sfia-studio/app/lib/harness/types.ts", "sha256": "b0ce1e40e641c901c90ae777a2614745e1a1a66346fd8392c5c47d866f75b92b"}
{"bytes": 3674, "path": "projects/sfia-studio/app/lib/navigation.ts", "sha256": "dfba3b1b9224475c149d84522508e018f794670eb90dcef3e2a6b9c39bffb3b8"}
{"bytes": 7224, "path": "projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts", "sha256": "f4e0c22de04c92c4ce9c999b3868a76fbf2431e4d04be4c7f6ba2ae9dcbcd399"}
{"bytes": 7139, "path": "projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts", "sha256": "c9975882baa28f4c2031e1c5ff2c97077d18eab529e1723cac47a09947508708"}
{"bytes": 1422, "path": "projects/sfia-studio/app/lib/oa/cycle/application/getCurrentTrajectory.ts", "sha256": "4fde8a36bec520ba9f998a80eb8c93d523e1703c153eeff685038dc23dcec787"}
{"bytes": 1309, "path": "projects/sfia-studio/app/lib/oa/cycle/application/getCycle.ts", "sha256": "7fcc3c07e56e2195612ac9561a622fee4bac90f69bb6cd4631a96c3eb1470760"}
{"bytes": 1470, "path": "projects/sfia-studio/app/lib/oa/cycle/application/getEpistemicState.ts", "sha256": "0366a1bb16993e620c6f9ef9d98ad466601705c1d9badd9d9e75ac2c29e66b11"}
{"bytes": 1507, "path": "projects/sfia-studio/app/lib/oa/cycle/application/getTrajectoryVersion.ts", "sha256": "e6d59609867a6c43ba7fb9e23f53217185a559f65fb06e47e775ed85b1e686de"}
{"bytes": 9182, "path": "projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts", "sha256": "a9a4bf87288da65f70b9d471950f8e9facbd2d551fac80a85901d0fb6e2a7335"}
{"bytes": 940, "path": "projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycle.ts", "sha256": "f9a11fdb887bf85f6e16a7c4dcfa0b225421f08f07c1e82cadc7f0fdd4eac356"}
{"bytes": 9097, "path": "projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts", "sha256": "f656728ffb29e4e6a273b9a522fc3dc379bab805bc27631af71fc6893fc503d2"}
{"bytes": 3171, "path": "projects/sfia-studio/app/lib/oa/cycle/application/resolveCycleKnowledgeContract.ts", "sha256": "961905cdb980fead4ebd7e7372c3361bfd0cdab619804d439aff9b8098211ad1"}
{"bytes": 6407, "path": "projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts", "sha256": "b9babb2ebff1333f78ed9970bbfb08acb6227f0e5345bb7e66832e6b7fbb59ef"}
{"bytes": 1894, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts", "sha256": "f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c"}
{"bytes": 5982, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts", "sha256": "235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d"}
{"bytes": 6654, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts", "sha256": "47eec7b6cbe238e2b9b9bd1c0f2e4d7673007f421e58c8e5444403b4fd6d4663"}
{"bytes": 3571, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts", "sha256": "89d528b3917c035f8b6ed5ae2300468a403a35459e5f77a75a8c734ef911507f"}
{"bytes": 1795, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts", "sha256": "025f34191576c58222643356836fb7c62c193b3315d6b5be9085958e8609a279"}
{"bytes": 5395, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts", "sha256": "e54b5d277daafea87ada74f8c5e428726256665ac2e203e3526eb32e9b9bd0b9"}
{"bytes": 20792, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts", "sha256": "f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682"}
{"bytes": 3929, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts", "sha256": "e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da"}
{"bytes": 10693, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts", "sha256": "d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643"}
{"bytes": 941, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/qualification.ts", "sha256": "f482502c3f05d00249d1aa2ae725d680fd71670e5d6c32cde73788037af0d605"}
{"bytes": 9551, "path": "projects/sfia-studio/app/lib/oa/cycle/domain/types.ts", "sha256": "b05b4a1838bc657a45aafda0e717d115dc1bb5d08f2b96de51000a3cd98a7d60"}
{"bytes": 9711, "path": "projects/sfia-studio/app/lib/oa/cycle/index.ts", "sha256": "6c81898c73a98774c144e69811084dbaaf2284c5c9d411d2cc5ced176692036a"}
{"bytes": 13085, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts", "sha256": "9522a919648a3ea50b810d634af9ceefb777752d0f1633e37905d6b1d7d976a4"}
{"bytes": 5043, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts", "sha256": "7beadca57bb27f171a1755f872d7176e288c102416784a30a7e52838d8fce875"}
{"bytes": 2179, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryCkcResolver.ts", "sha256": "2af3b43cc493b9d453d8d4e04d033d6e39113b6e652743bfffa8947002c51acf"}
{"bytes": 1171, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryCycleRepository.ts", "sha256": "dd2965f05b04a555b19d99b9548ff1e5fb0940ba9e9f6a43c30fff2da7743e67"}
{"bytes": 3081, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryCycleStore.ts", "sha256": "2225bd7e249a392bcd42344a9c50cc3755c098d906fe82670b72764ae36d345e"}
{"bytes": 2055, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryEpistemicRepository.ts", "sha256": "593ef7e3ab739ce78ce99be1ccdfb02fb03db286e954abfd9d9b221bb3f708a1"}
{"bytes": 2957, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts", "sha256": "0a23bbbf55637ece7d94189121558f4b5aabb3dcb8958d2e2dc2ec87cb7746bb"}
{"bytes": 507, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/observability.ts", "sha256": "13867275c171b022ce9848adb9a6e4a642a8711a109b86c47fa266878f79fe1a"}
{"bytes": 5031, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts", "sha256": "3bd7f64a8ab5e27d4172776293230e9a26da0ec8927b62b4495bb6133bb9ede8"}
{"bytes": 864, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteCycleAuditJournal.ts", "sha256": "70201badf7770e64032a8c31406ae04acfc3774af8d34fb7a16df7cc6ca2aa16"}
{"bytes": 3206, "path": "projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteCycleRepository.ts", "sha256": "beccb001b02f66d476439a26fa0c8a0cb29ef596fe0e4d62e0a70afbbbdead5a"}
{"bytes": 953, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts", "sha256": "96e14671e3bd4aa9f3771589041ba81057759730182d2c234f6a1f9e54c75fda"}
{"bytes": 387, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/ckcResolver.ts", "sha256": "604d2e6bf3f9e1ba621e54e11149d4dc92d174ccad46f9a36518663fc8fd1af9"}
{"bytes": 3052, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts", "sha256": "66c3ba947f86885d8fff6ec2381f3b07472c8a725297fd5657f87deb421dec8c"}
{"bytes": 252, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort.ts", "sha256": "265bc38279491ed5a28fdd20b322675b809d86f9d93ac5bb77e84147244d89e8"}
{"bytes": 324, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/cycleRepository.ts", "sha256": "ceb38895cef844598a2de6d2b67bc1314c99b4532727ecb57bb1aa97e71c7227"}
{"bytes": 332, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/epistemicRepository.ts", "sha256": "26e3642d05ceede950f42e4bf5c8b80d0152b8e504c232fde95b72b25e61e47a"}
{"bytes": 550, "path": "projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts", "sha256": "258b72003bc3aa04fc5764857219d008ba253ef724b207f58c5f4ba75ee95dab"}
{"bytes": 4273, "path": "projects/sfia-studio/app/lib/oa/decision/application/cancelConfirmation.ts", "sha256": "50b1bac0373655e6e00abd4895ac7d54bf2eb9409a4f8cc88e5311d7a34cc459"}
{"bytes": 4877, "path": "projects/sfia-studio/app/lib/oa/decision/application/consumeConfirmation.ts", "sha256": "755c23441f079f097f1e88ae2acc56f0f7d68e6e385bce589a4c779a813c1bd5"}
{"bytes": 1565, "path": "projects/sfia-studio/app/lib/oa/decision/application/getHumanDecision.ts", "sha256": "1b934e5927ef9075874af44846e5f83293ac37172ec7156d69bc6ccd5d705583"}
{"bytes": 5960, "path": "projects/sfia-studio/app/lib/oa/decision/application/grantConfirmation.ts", "sha256": "fb691ba2ef5b8e4ac194bed2ed3e1ca6a4eedaabf6f6f5977a4ccaeb1ee80d98"}
{"bytes": 1695, "path": "projects/sfia-studio/app/lib/oa/decision/application/listDecisionHistory.ts", "sha256": "7de1c2bc81c501df62353f1bdaa0c96aa038588cbecf5c213e6427a88e81e5ff"}
{"bytes": 18635, "path": "projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts", "sha256": "f3c54585d3b9deac068d02c02589ec72b9da7adcb2ed54cd62a421314b89319c"}
{"bytes": 4086, "path": "projects/sfia-studio/app/lib/oa/decision/application/refuseConfirmation.ts", "sha256": "bc9cc86ef452e3895311b3f899ce5907fe7f4158def72cdde3d1793b4a4aaffd"}
{"bytes": 6453, "path": "projects/sfia-studio/app/lib/oa/decision/application/requestConfirmation.ts", "sha256": "f113de5bdb54d72b4549218e9bfa2deb2d10287c514f3eb1c280217f636d6e91"}
{"bytes": 12593, "path": "projects/sfia-studio/app/lib/oa/decision/application/supersedeHumanDecision.ts", "sha256": "1ceb86c393b33c22e722936c2136cc17e879e28633f71ed72cd5ef4dfb86f37f"}
{"bytes": 1575, "path": "projects/sfia-studio/app/lib/oa/decision/application/verifyAuthority.ts", "sha256": "0171f28a3c5146b4a3a90beb85bc47255ab46acd8295750d252c560c136f25d5"}
{"bytes": 437, "path": "projects/sfia-studio/app/lib/oa/decision/domain/decisionBasisDigest.ts", "sha256": "d1ddca8630640280daaab39659a8e2817e5d723dfb8d2cd48dd941908c975f22"}
{"bytes": 4375, "path": "projects/sfia-studio/app/lib/oa/decision/domain/errors.ts", "sha256": "78b9b1680badce9ef7f98bb2c8a66d7e804ac9d3127bf4495edf800eaacf4dc0"}
{"bytes": 6911, "path": "projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts", "sha256": "9ea8a5dee1446d27d8e19d34df48f9cbcfb85374c1cad7b58d383fe64ef0a661"}
{"bytes": 10788, "path": "projects/sfia-studio/app/lib/oa/decision/domain/types.ts", "sha256": "fab00706fbd0dc0180e59587ab2527696ad7c0662d1b371935c79d0b32ab649a"}
{"bytes": 8056, "path": "projects/sfia-studio/app/lib/oa/decision/index.ts", "sha256": "b33d4db4fc0a9ea0aad49139527aa012ef1d37bb05e6eed0a5c4aa5f83dfa79d"}
{"bytes": 2994, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts", "sha256": "d3b391fd7d35d49f0388722bd73fd2604b052d0019deabf6b01d588d76b43aa7"}
{"bytes": 4906, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts", "sha256": "9da3cf5422f5d47f3d2ac812adc651740b7c53a270db13c89cc8b66d9158009f"}
{"bytes": 1330, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/memoryConfirmationRepository.ts", "sha256": "35b77280386385c9187b3507df917c797f37076c19092e2a7a84bc73d407875a"}
{"bytes": 1840, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/memoryDecisionRepository.ts", "sha256": "56897a8b84a4e219fae41909189029d2e54ee49de49e53c41f52707d2a8c6ec7"}
{"bytes": 2315, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/memoryDecisionStore.ts", "sha256": "df2ac93ee58d8aff9d3f86b3d2be9da38caca82e53b1759eddf9eef744d5e6c4"}
{"bytes": 532, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/observability.ts", "sha256": "3ecca8b2d6ec38d55a17dc6f847e70d3bcdca5dc926cb7758a792e637c31d920"}
{"bytes": 5266, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts", "sha256": "5cda5604d6da7e13fbf30d75b1045bce4d12875fbfa42cdef37ec42bad60e732"}
{"bytes": 891, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteDecisionAuditJournal.ts", "sha256": "68ebc2e4fc9149d7fe9e714856e2fff76eed0f8bb3e2c5f01394305de7d3ee89"}
{"bytes": 4251, "path": "projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteDecisionRepository.ts", "sha256": "fd5f7fe56cb4f7673133d7f62e20de9aadb8d7117b6589f24a3bcbcddd82bf5f"}
{"bytes": 782, "path": "projects/sfia-studio/app/lib/oa/decision/ports/authorityResolver.ts", "sha256": "8a2c8df1d116d4a9355b765f2ad765a78ed6eb43c5cfa065492e70899278b367"}
{"bytes": 349, "path": "projects/sfia-studio/app/lib/oa/decision/ports/confirmationRepository.ts", "sha256": "3f64471d360afa46a72b100b5060befbf08b2164f80b2a77fad373f799485d45"}
{"bytes": 2559, "path": "projects/sfia-studio/app/lib/oa/decision/ports/decisionAudit.ts", "sha256": "6ab7a0ad777f250075f6bf8507a88fbc76c3d81b59897d6bc22f93316d67a82b"}
{"bytes": 258, "path": "projects/sfia-studio/app/lib/oa/decision/ports/decisionPersistenceUnitOfWorkPort.ts", "sha256": "d98819eba09188cba5f9a0291d328db36baecb6e9445e20d2ccc1feb20e9d850"}
{"bytes": 562, "path": "projects/sfia-studio/app/lib/oa/decision/ports/decisionRepository.ts", "sha256": "be612556a1934704c4bc8dc237fdaa6447ef9fc978faab3fad61b05e3b839a98"}
{"bytes": 6563, "path": "projects/sfia-studio/app/lib/oa/doctrine/application/resolveDoctrinePackage.ts", "sha256": "3ceea3bce7fb2799ea904dca9d87e1739367525d801d7227fa7476b6fa6da47c"}
{"bytes": 5530, "path": "projects/sfia-studio/app/lib/oa/doctrine/application/validateDoctrinePackage.ts", "sha256": "f8d413921bbdca2f06922e21b4f4f3ce362fdf21d4dff08fec3750c79a90643e"}
{"bytes": 1738, "path": "projects/sfia-studio/app/lib/oa/doctrine/domain/digest.ts", "sha256": "9c99e6e2e8df7bd42a23143c9c35e8e8d950e1eb4bfaeb5e4ab49f3351d2e913"}
{"bytes": 2767, "path": "projects/sfia-studio/app/lib/oa/doctrine/domain/errors.ts", "sha256": "9e0b39466ee2ed84b2cb52482a9568a59776422446657f6f38cf15af15556d58"}
{"bytes": 5216, "path": "projects/sfia-studio/app/lib/oa/doctrine/domain/invariants.ts", "sha256": "1fc4c92a22d3f80e512e3e3a48c1158eb1ae503cc9056869a20b141110ed1515"}
{"bytes": 4617, "path": "projects/sfia-studio/app/lib/oa/doctrine/domain/types.ts", "sha256": "0c72fa47c48c5bea7fd3484274e606d9d22c5eecd6300f8f081439be6fa60ebb"}
{"bytes": 876, "path": "projects/sfia-studio/app/lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json", "sha256": "ea7ffafea8e1c79165fd8c526636ff8079f91c937bd84d71ad74668ed145d330"}
{"bytes": 330, "path": "projects/sfia-studio/app/lib/oa/doctrine/fixtures/registry.json", "sha256": "08c55383e990a02fe8bc64838585fb11c937bdd069b7cdea2b096fa651ffd333"}
{"bytes": 3134, "path": "projects/sfia-studio/app/lib/oa/doctrine/index.ts", "sha256": "315a440a8c844aa6c098d32788173c32a9b8d067635bd527c0b06e49b752084f"}
{"bytes": 2559, "path": "projects/sfia-studio/app/lib/oa/doctrine/infrastructure/ajvSchemaValidationAdapter.ts", "sha256": "03bbabb05931eedbc332d93e3920407ebafbceb9e8f6d42d9a7ffb51f10ca8fb"}
{"bytes": 5801, "path": "projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts", "sha256": "d76c2049e67cd2146acdb67ab86637df82d0e2a846171144a58aa3ab5e429d4d"}
{"bytes": 518, "path": "projects/sfia-studio/app/lib/oa/doctrine/infrastructure/observability.ts", "sha256": "0da7ebb6890545914794b8927ffdb7a4941c217b48f5e37e5ac1f56d95f4eef8"}
{"bytes": 864, "path": "projects/sfia-studio/app/lib/oa/doctrine/infrastructure/sha256DigestVerificationAdapter.ts", "sha256": "ca6121d073584baa909a16564325146b0f4f51e8a5982f2e110ad12c2c95b238"}
{"bytes": 309, "path": "projects/sfia-studio/app/lib/oa/doctrine/infrastructure/systemClock.ts", "sha256": "da0ca22f117366d1480d0ed54bee727c51560e938a899315ce6ca29bb7296e0c"}
{"bytes": 610, "path": "projects/sfia-studio/app/lib/oa/doctrine/ports/auditJournalPort.ts", "sha256": "3e0453d265dc21cc316dc9a45991cf9d1e17184573ba80cdb4049732a61ef40d"}
{"bytes": 51, "path": "projects/sfia-studio/app/lib/oa/doctrine/ports/clockPort.ts", "sha256": "1ee935be91426cc4aaa9564b939f393ca73891be7f119abc6c78bf979615f749"}
{"bytes": 218, "path": "projects/sfia-studio/app/lib/oa/doctrine/ports/digestVerificationPort.ts", "sha256": "9bf3d74ddca8cf1628abf74e3bdf97b03398077da7434628c87d6ce8e4bcf571"}
{"bytes": 998, "path": "projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts", "sha256": "feb5e45f2b65b579b867f403e03970625c535d49c90026d25ac702cc8a8ee599"}
{"bytes": 217, "path": "projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageResolverPort.ts", "sha256": "57265aa5179710e5d835d4fcdc6b33d8c58ba647dd865725ca5db8ceb027b660"}
{"bytes": 363, "path": "projects/sfia-studio/app/lib/oa/doctrine/ports/schemaValidationPort.ts", "sha256": "61bba2ed29337a9b15c1323d4651dc75a361d48962336d83a431afc6898bba78"}
{"bytes": 7880, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts", "sha256": "71c51c6e0a01ef0f0c2c0b8824e2caa062fd3666e1a54299df22c1b33fa2e605"}
{"bytes": 5378, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/claimEvidenceAssessment.ts", "sha256": "8089884c4a01ea7c91ed0bc0863d7b062c9f0a1524cd4aa90105aebcdbf131ad"}
{"bytes": 8966, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/completeReview.ts", "sha256": "5aee71421767d0836dc7388e364f9d8eae4b8ec5446485589aa2969de2bfdbe4"}
{"bytes": 12299, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts", "sha256": "6bee4326d053b632ffcda76304c351e62e5913446f95d85ff27356ceedc4af8c"}
{"bytes": 13740, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts", "sha256": "d3086563820a20d076c4a9dfbf289c9093d250db4454dcbdf6a7fa94264c860a"}
{"bytes": 8357, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts", "sha256": "7095894b3b279e6cc06569652355d8479383d05146a853abe0ef9552755e4fce"}
{"bytes": 15768, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/downgradeMaturity.ts", "sha256": "b6b11f049ea07ea8c1a6742cf6243d0e4e5f0121d6d4b4e5852a462bf41639aa"}
{"bytes": 21482, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateClaim.ts", "sha256": "074841cad2ac960a3db7aa764083c42e8634adb3e2f6a05ae8cfc6bbffa6bd27"}
{"bytes": 2974, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts", "sha256": "6b74dd8fb76095d08f6ddce26b05cf5775a65ca873221b862f4bc179bdb35264"}
{"bytes": 8227, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts", "sha256": "27a654d4b7e7a3121b0c9d2bb3609398b626563f5cb35e64d9081760163d1688"}
{"bytes": 8953, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts", "sha256": "4fdaa01399af80bc99b83a5b19969956833c0d25fb5678b4f4aa529a137541c7"}
{"bytes": 7413, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/markEvidenceUnavailable.ts", "sha256": "469611e561766a69f221e060f38c340fc13dcf7cc50449646a1f87fed32bd24d"}
{"bytes": 11595, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts", "sha256": "da8b035f424cd71d6b9ecf51dbe9849bae4096ba4df8daa8138779968fcf8d28"}
{"bytes": 11880, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts", "sha256": "594f30784c622fa6b4a4a5ce5a2733f1b78e643411c3d319681545a060867910"}
{"bytes": 36789, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/recommendNextGate.ts", "sha256": "9802d791fc0b658d51bf631875aaeb480bde97a02e0242f9d25c08b6d93afd81"}
{"bytes": 7925, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts", "sha256": "57c78aed837b2327b2ed6ba065ccb4af1e242fb578a119881d7ea72d7fbf6b06"}
{"bytes": 7624, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/rejectClaimEvaluation.ts", "sha256": "62dfb2e5d9bb400091d56aceb183d3e9da201edf176be80b881ca853b0b9f430"}
{"bytes": 7922, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts", "sha256": "d1afb561a047a67c61bc183feb9dee4e326fb8200474505e3ff7730a06098c63"}
{"bytes": 10281, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts", "sha256": "613e7edb2788ab982ee68dec948e00a10a702156051d661f43d7a90a748593cb"}
{"bytes": 6668, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/startReview.ts", "sha256": "e1ab4e0e99406ca647d8bc29701631501e8fce2da4bafb06607c884ca1000beb"}
{"bytes": 6467, "path": "projects/sfia-studio/app/lib/oa/evidence-review/application/verifyEvidenceIntegrity.ts", "sha256": "86e7b0c7cd8702b9ac1f1e8f9b53ab77e4a8bb66f2b80bcb45c89eb5f4706468"}
{"bytes": 4681, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationErrors.ts", "sha256": "8d23e2000fc03bb79fb7b9975eb1afa9b21e7beda315e526f7c61c8346d6b464"}
{"bytes": 8112, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts", "sha256": "c69d8e628e2849be15b1f5d78f361967dca0fe8b682c0df78f0fe85fcd1b862e"}
{"bytes": 5506, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts", "sha256": "dca5a1d57c3caeedd8f2341344c11aed9fdccd897da24823d34e7d491667976e"}
{"bytes": 2343, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/coordinationErrors.ts", "sha256": "fcd27fa89b50e49c3a8e8967f4b985ad5376f3487b20f4f0d723b8248ab39edf"}
{"bytes": 6029, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/coordinationTypes.ts", "sha256": "960172056cef20c58dc11476d7ed6b3ac5f1a8f201a12677309fc1323b9d31d6"}
{"bytes": 4422, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/errors.ts", "sha256": "b9506047cbb765383168f660982e34f380c6359dc650fbd9c32c60923151b4e5"}
{"bytes": 10190, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts", "sha256": "df442da231818c1215b244473abc2ad316f940853a822b06bf8a0c29eb536552"}
{"bytes": 4878, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentErrors.ts", "sha256": "56375d3c7d6222df7ff7c82625bfc96d0a798f109e5236cf4f68a020ceef6830"}
{"bytes": 4959, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentInvariants.ts", "sha256": "1c69770cbce2167ef8941a33a87d61e869ca6b0920a7e83628ed3ccf20923655"}
{"bytes": 6851, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentTypes.ts", "sha256": "98720e68edaaa22820161bf3f22cd36d1d6208ecdb2659b6bc04c8a1e53badeb"}
{"bytes": 4743, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleErrors.ts", "sha256": "635346041aec3693d657ede6677358cb2da6784e9ac1d07be43a7926455771c6"}
{"bytes": 7173, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleInvariants.ts", "sha256": "7d5885ce86160a90321cfc531b0ddb38217e5aab26eaeeef1609caec5890c719"}
{"bytes": 5383, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts", "sha256": "d5e1bb635cb007ff498c5d82cdda195b80649c297ef1fc68a815148c656f346d"}
{"bytes": 6172, "path": "projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts", "sha256": "22b193fcbdd96d020e114993537c3e8af297a0015e67161ea2087837840c6938"}
{"bytes": 18077, "path": "projects/sfia-studio/app/lib/oa/evidence-review/index.ts", "sha256": "5093caba901e10cbe81311564dcaf515006bc506f04bf3a6faefef71e456c543"}
{"bytes": 2427, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/claimAuthorityAdapter.ts", "sha256": "8c723eb2c29542b390be0078a2e82894356e5ce0ac14b78ae927b78ff123d41e"}
{"bytes": 1053, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/claimEvaluationRepositoryReader.ts", "sha256": "ed1dcf63b25e6d6ee4db49743f30afef05b3e68a2ee7f6785904581c3691e198"}
{"bytes": 513, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/evidenceRepositoryReader.ts", "sha256": "458cc05039284d23e7e8cca9228a94b753b90bedc73058d955bac9d7256a0ed5"}
{"bytes": 2171, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts", "sha256": "0c59e4486511108c3230d8a59eb55860e8d59a0e5d815d522697ad475935953b"}
{"bytes": 1074, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeExecutionAttemptReader.ts", "sha256": "fd77d914dec495d49c662fc7b91cc2fe607b2cc0b23872b2f8bffa2970883e96"}
{"bytes": 682, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/idGenerator.ts", "sha256": "f6f6e52fa535095dd3a6432c1ba135029135605794e47e4e518050192407ed37"}
{"bytes": 662, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/maturityAssessmentRepositoryReader.ts", "sha256": "a2e25ffa9c0ea56e605808f8c9a5563e0ac3790adc81c88d2dde8e355211c76c"}
{"bytes": 3746, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts", "sha256": "63899e5c4320d177dd9f9be5b78c3298c3be5e7296df4edb5aeedc429f721323"}
{"bytes": 436, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationStore.ts", "sha256": "397ff09b745a658ec970c2a544b67402df85c802cb4b7e4034a9cfb166a96fd5"}
{"bytes": 3714, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts", "sha256": "67775241f6d6d4144373e9da1611b60b2488673b726109c16300b001e3b060d6"}
{"bytes": 1495, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceStore.ts", "sha256": "921e853792eb12a4fc8340cc3eaafa1973b2f80d0182d175d95c3c54d146e8b4"}
{"bytes": 7176, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentRepository.ts", "sha256": "c44eebd14f602252a14dbc0a95802ddb3bf362b356986c36042e8e99b3e915d4"}
{"bytes": 484, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentStore.ts", "sha256": "0f04f0f1027fd60d4b14531c91480e39e3281edf207165e09d1060371ce609a0"}
{"bytes": 6785, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts", "sha256": "91309794d6658e00fa3e4b242f3ead2029f8fd0040cc88146b25acf4260b947d"}
{"bytes": 452, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleStore.ts", "sha256": "67a7ffd1321e82b98271ca776243c977bcf018d4d259a2e287000eb4bfa332bb"}
{"bytes": 611, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/observability.ts", "sha256": "c193ae680056caaa584b7e4d0fa6fb4a5e0a16ae5ea1432c0b7248e0056180c6"}
{"bytes": 491, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/reviewBundleRepositoryReader.ts", "sha256": "81476da3e628e0bdfdd70930452109d7a9271871a778558ee66bc71aec9289d7"}
{"bytes": 12332, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts", "sha256": "3e584c71e47e67e8a3c88cd31f8b169e28ac368b1e534745693bad9b8131692c"}
{"bytes": 6602, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts", "sha256": "2a9983756109697a6412b299dba8d70f9992b1043180be3ccc4fe1efab82f66e"}
{"bytes": 9982, "path": "projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts", "sha256": "2b9677147a70eca8f5e0f4225bd13fb64dc8331147e6dcdab32a661eb9c71ded"}
{"bytes": 601, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/claimAuthorityPort.ts", "sha256": "aecfdb7acb5349a67ce0d919db746b4410c040ac59bd1e3aa64ea4fd665157e2"}
{"bytes": 422, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationReader.ts", "sha256": "5aae3269ea40b2200c28730247219c314c6447a46583e34fb246141f91ef4958"}
{"bytes": 815, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts", "sha256": "3aa80add4274bab9f886b9f14790efd3611ee7582dff053302514b12999d2969"}
{"bytes": 2756, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts", "sha256": "fde41a68d0b38a070073989f8823d41b574bfef899ee43178bfc92b19f9de68d"}
{"bytes": 752, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/evidencePayloadPort.ts", "sha256": "39fdc1e9b37227bfd50a9e5b0cd4c819df5c86f24bbae46c940e5cead640c8d1"}
{"bytes": 251, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceReader.ts", "sha256": "da6edd3bc903a904d1eeceaa600e74be6d1c5b069dbc418618746eec66ed3293"}
{"bytes": 840, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts", "sha256": "b0f947545761f02fd2fe82437dd4e24e329ee6da66b63ce191a3b01fe6a2df23"}
{"bytes": 319, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/executionAttemptReader.ts", "sha256": "3071c08741b81239701b5d73ee0542678d1388776f8cce18c1e64ebfac2de29e"}
{"bytes": 318, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/idGenerator.ts", "sha256": "ebd14228ba8693e867ad0199aeac612f7633e7f465838bb1e46ad375f144809f"}
{"bytes": 311, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/maturityAssessmentReader.ts", "sha256": "67b4436afda78208c2404d655f203edbb64e941806d37f60ce212bfb03cd1e5d"}
{"bytes": 1192, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/maturityAssessmentRepository.ts", "sha256": "708fb5c207e4ffa213142aa585fb5154c7d6eeabafff1fc0248ced3c08ab216e"}
{"bytes": 250, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleReader.ts", "sha256": "bd6f0b1e8eb4f1977e3f9ed12aefcb19c6d3ba7e0b6fa7610e60cf28953ee5d2"}
{"bytes": 1341, "path": "projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts", "sha256": "3a47dfbfb0380f55dc36834bcf730ba55f32e4717d231dbf909bc6893f96ec7a"}
{"bytes": 1530, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptPolicy.ts", "sha256": "e3cf70a7036166f4de83fcd28a79786c317467ec471436d5fe482cb313725753"}
{"bytes": 2972, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts", "sha256": "eb9713f19caaeeff01fc72613ce00e35fd9cfdb4be908ecf4a841655f9118b32"}
{"bytes": 10294, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts", "sha256": "3bd4376e51e3ad3e0eb6eded70a137e5f18e6f79eed590cbc01f894c146c589e"}
{"bytes": 5404, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/checkAttemptAuthorization.ts", "sha256": "b202f51728372ec7d33073133b198162ce53701f899360bc1fc787c78ae8fb20"}
{"bytes": 5587, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts", "sha256": "ba34232dcb76395e9f616a4e7a27cac2975c59e6e73c85bb476eec6e235e5b4c"}
{"bytes": 1544, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/getExecutionAttempt.ts", "sha256": "ed71262e2f8bc279c5218c25816badf8981d4517eedbe85e30abc23ade8419c6"}
{"bytes": 7582, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts", "sha256": "c02cd0465f392af47e73a321ca6a9582c94c400788655c32e1a62a54da59f30e"}
{"bytes": 385, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts", "sha256": "6855241c0c967c3149cbd6c3d9cc242151ee981046dc602d572e05c01e46ede7"}
{"bytes": 1822, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/listExecutionAttempts.ts", "sha256": "cf086651f047687ddd9ae2969e12230272e2d215875f15d518bf123a4c5d4d7c"}
{"bytes": 6524, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts", "sha256": "fc20764519b5fa7cff99b0adf08d7ba1fcb677681bc685d55a211ba0b27bae4f"}
{"bytes": 12767, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts", "sha256": "2f809eac324bdc912ea7b84917962c122bf0e44904d5cb97af52cdf9b599118f"}
{"bytes": 7381, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/retryExecutionAttempt.ts", "sha256": "6302bb0d96a3d39f095a10306ea278510065da3b0abf55d79580bf41e135f9b8"}
{"bytes": 18219, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts", "sha256": "a0ccef790441ced85dec06fb81ddf82176f80780679fbeb243aead145de9dd60"}
{"bytes": 42265, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts", "sha256": "1482b7e62e964020f02987349587d97a24f5af1ba9ae6e56ce4f85d1d67823d2"}
{"bytes": 7122, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts", "sha256": "f622dba24a4681f68b57c7c4f489d01abec2d375254c514f1510a7fc96781cc4"}
{"bytes": 11099, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts", "sha256": "da8e1b9230c0ad80b694f66efd25c3f5f78f56ac02b232e5fa8484d379f1bc77"}
{"bytes": 21469, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts", "sha256": "ade49910408eeae8f3de697d951fef281145c136979a42332b6591a1f5411807"}
{"bytes": 2871, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts", "sha256": "7d0332748d495336997fc6d5bfd09933a2aad7d5047b2e85dda28dbd89c6a5ef"}
{"bytes": 11924, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts", "sha256": "037702540975605a57cddb7e27624aa67e155e1556ad5bf584eafec2d7561c72"}
{"bytes": 16867, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/index.ts", "sha256": "79583c6ce3599a2efdafef864e7430c38ab0a9013316b0f2d6a6b4bca05eb914"}
{"bytes": 771, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts", "sha256": "f7fde0b70f8eba03a10a8ca2375854e9f18ee1ecb4ad19a64bdcb6f8499aa4a4"}
{"bytes": 2781, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts", "sha256": "67d251d651cea912621da2d900f1a6f1ab78490eb921007b8f2978f79bf7c4e1"}
{"bytes": 2112, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryAgentRegistry.ts", "sha256": "a3b656c0b1d4a4fb5a89deb719da070857ed17d3a72b556f893940d82e8191b6"}
{"bytes": 7239, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptRepository.ts", "sha256": "2b34868792e97a2d831ee853dbc5d61c77016a82d7238108b1beb0b1dc891969"}
{"bytes": 3124, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryExecutionAttemptStore.ts", "sha256": "ce2eade0558743311b627a6aa269cbb4fd65cd106ca7be5171b49dbacdcef40f"}
{"bytes": 8307, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts", "sha256": "64bea3df041d01dbcd51138374c1353b6df36c0aaa50ba40b792340d155234c6"}
{"bytes": 1452, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/noOpExecutionAdapter.ts", "sha256": "21431cb11587b2291b1728a85ad9db88d97a457cf0168b5423b92f09f78a27c8"}
{"bytes": 8483, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts", "sha256": "3dba3118e867824fb802d94711059b589c2464ce2ed4142959630d363979c2e0"}
{"bytes": 822, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/observability.ts", "sha256": "cd8f61b047e62e84925c4c9f87b0ab4c1f0a1e621b85c9c5d061d776291dd9ea"}
{"bytes": 9437, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts", "sha256": "4ce2d80054e166b6326aa2233fc179d5bc1f94072f7fc672549c31280753b2af"}
{"bytes": 11234, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts", "sha256": "cd890b7010d033257ca391c26684c35d4027585532591a09ddbb65b2558b46b1"}
{"bytes": 1584, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts", "sha256": "77fe85904b1236ef9ddbf9f4fef4f2b3f631545108c1df3ef9d0688e82064c4b"}
{"bytes": 15704, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts", "sha256": "80a5fdc730923efa437aa49c2564796aae2103a65eff85657a9dded2d8bb6367"}
{"bytes": 424, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts", "sha256": "fce024c9290a08f8e0e6acfaff7db01fd1f025f5a7fcfc5b416606ee1b0d561e"}
{"bytes": 9076, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts", "sha256": "04d205ca7cc9bf8777e02423307d6e60bfdd5acf9b403b56cc11d1248b60e17b"}
{"bytes": 5152, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts", "sha256": "88fcceeba4ec6ccf1311d9e967ea37194bf4ccfb50f827fc803ca40781659d45"}
{"bytes": 5473, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts", "sha256": "0bfab7f7a3d4622716652087b73c9808209a755a3e007229e0c7c1e3542c1b78"}
{"bytes": 673, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/agentRegistry.ts", "sha256": "ccb69047114274359d29c8ca5f9495309f5b17c0ba4e3fbcf765be1a8f869907"}
{"bytes": 2101, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAdapter.ts", "sha256": "a0c6ef75f096bdba05dfff231a4591d1e120ccbfddfd9bfb63182df39f87dca0"}
{"bytes": 1656, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts", "sha256": "dac85e4fff57cbb291d575f663b5804e9cc14392c99731f53784738a78d3499d"}
{"bytes": 1948, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptRepository.ts", "sha256": "b5056db86d60fc90d88713f8263505d6243d0e7f2bdfe1d3633e136862b7fa55"}
{"bytes": 776, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts", "sha256": "15cfba7a07173a712ba873dae53f4cb5113618d6cc91246b1b72043c856a4f0d"}
{"bytes": 521, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts", "sha256": "bf896b4708fe4ff780c8f9689a5f5b5de6568d17936e49bb5f7bc536f1198cfd"}
{"bytes": 3931, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts", "sha256": "e12c2e1fb6402f6fcd6362560d4f83266b6657010dc54e3f402a45a0771de414"}
{"bytes": 647, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts", "sha256": "ce19cc462fca8da687722cfd5d1247fcc047276eeacc2298272e49ec089b4ea9"}
{"bytes": 4291, "path": "projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts", "sha256": "9ba7cd5f4e90b3b9457777e3d30165da837da38fb3f7d7344166834f2b0bfb05"}
{"bytes": 1654, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts", "sha256": "259decc681552a6d7563a1fdde7da8c9df55e825561921f391e3286525f4d082"}
{"bytes": 14441, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts", "sha256": "d2a86fc82abc83ce16d67dc046f4532a0e96010f9ce81bd7d2a9f17553b03f9f"}
{"bytes": 8339, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts", "sha256": "caf32435578fc5c2dfef8d6986306137089ed2cdaeb4f9802a3069ba98477cd5"}
{"bytes": 8410, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts", "sha256": "911b50b27b01afeb4012485f61cc5b4216f8b6c44bc52fd3e4f3468e5bf089cb"}
{"bytes": 14657, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts", "sha256": "31b0907cf0ca858cb10b15b180ee211858eb0bda700f441dd086e13c85962567"}
{"bytes": 2363, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/getExecutionContract.ts", "sha256": "6143488f7c0aa539cebf145a96d9da11de625f3735042b18e42845fe9c8da304"}
{"bytes": 1864, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/listExecutionContractHistory.ts", "sha256": "2d9416d274d252171d692631417981805504ebff2e982728b58f4d69946f4c40"}
{"bytes": 15799, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts", "sha256": "3bd64d277398a28d0a76e049223800110e36ebdbdaae5f60491fdf713b39016a"}
{"bytes": 8202, "path": "projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts", "sha256": "d5f8947a77d7dd0624fdf01f6667407066748d5773d5c5fdb4768661e2e17cfd"}
{"bytes": 5350, "path": "projects/sfia-studio/app/lib/oa/execution-contract/domain/errors.ts", "sha256": "fc1897a6dc66ace95dde63485420785cdaddb8ee34fd83374a8de1bdddb72638"}
{"bytes": 12894, "path": "projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts", "sha256": "3e648edc6ae281676eb00d0556e6be4f71ca055513c5aff996ade404c92df874"}
{"bytes": 4269, "path": "projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts", "sha256": "0403a54c1e60d46d844123d45ba9daa0f5abc2078112ee5821e27992c328cdd9"}
{"bytes": 8701, "path": "projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts", "sha256": "1713d99d5afa33046503cfcbc75f78c97f41dc9d01b33d1f4d794c43753747d1"}
{"bytes": 8012, "path": "projects/sfia-studio/app/lib/oa/execution-contract/index.ts", "sha256": "fa1453348a91d445cb890f66012bec41d5f88d778b950c1f26a14606ff72ed62"}
{"bytes": 2001, "path": "projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryExecutionContractRepository.ts", "sha256": "59561bd78b5b3c8884d0b64251b52581e733b736b1ae520379b6129e70c73188"}
{"bytes": 2352, "path": "projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryExecutionContractStore.ts", "sha256": "70bccba8948adc5fafa00876718efaeacb00988e1d30e153b053a732f4da61fb"}
{"bytes": 535, "path": "projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/observability.ts", "sha256": "e5c03d1cbeeff4e0139f80990e0473f3e70a4e73e81db4a625cca71467ab98f7"}
{"bytes": 4890, "path": "projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts", "sha256": "781bc877acefe96668fb4383253dc95df4ac08e8abfaeed6da101e22db443eea"}
{"bytes": 836, "path": "projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteExecutionAuditJournal.ts", "sha256": "0204b96008c074f0682830a35faec09d9bcc74ad6ef3d5a8fc7398f40de4f12a"}
{"bytes": 4522, "path": "projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteExecutionContractRepository.ts", "sha256": "09b0221f932aeebd58dc72b04cc3ee5a8123e03ad05104d18e08dcf8d1a6153e"}
{"bytes": 2889, "path": "projects/sfia-studio/app/lib/oa/execution-contract/ports/executionAudit.ts", "sha256": "c38bd88f43689f4b0af4255fffa90c84f18674f69c94fbc53a41cbecd1eac415"}
{"bytes": 280, "path": "projects/sfia-studio/app/lib/oa/execution-contract/ports/executionContractPersistenceUnitOfWorkPort.ts", "sha256": "5a9de17c9283ca5f6eda9c629e3ddcdd66689424ba2a7fc504f065584341c35d"}
{"bytes": 626, "path": "projects/sfia-studio/app/lib/oa/execution-contract/ports/executionContractRepository.ts", "sha256": "c775b0157034b616f1baee74f3174849292d59eb7742495b8f3108c423342a95"}
{"bytes": 1635, "path": "projects/sfia-studio/app/lib/oa/execution-contract/projection/cursorPrepareOnlyProjection.ts", "sha256": "7a86be1f28d0f14197a86b36806438609fe006cd78ca9e7509449f893b12d716"}
{"bytes": 39914, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts", "sha256": "d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48"}
{"bytes": 4151, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts", "sha256": "81db1d2f49b9f794245f0783403fc407368b298724e6967f03275c52c6b98400"}
{"bytes": 14002, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts", "sha256": "b974104d2cf407b8fa1dc76112fc934434e172d25936f9768eba874b38b8bba0"}
{"bytes": 6032, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts", "sha256": "ecf03864a8df0e49337710be7a2c7c80a93ad2d2ce32d9c2201a02b815ae780b"}
{"bytes": 1827, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/internal/persistExecutionRunInternal.ts", "sha256": "07c5aa38990739c24d27aa87fe5f0da5e90d7f42e03dd2055ff169cd639d0474"}
{"bytes": 6547, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts", "sha256": "d5e4c8e93d1199f0c03bbdcc60cdef44d3d5cd6789f4782587f28f0b54f3e17c"}
{"bytes": 10613, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts", "sha256": "06ccb2072eae804e9443a697dc622019e5bf726a0b730c47b3f1658ab7a63367"}
{"bytes": 7907, "path": "projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts", "sha256": "e7cdd8850249618853d47ae7ea6a61b703d1cef4e77113eb028d24744c035069"}
{"bytes": 472, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts", "sha256": "834e64b77bb9a0d95a21ca0bcc3857968905a38928b02a88babdc24a161f3862"}
{"bytes": 1790, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts", "sha256": "b82fa2b66d703a1278a999a1bc39afa9114e6a4dee4c32ef69bb23dbe06265de"}
{"bytes": 3852, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts", "sha256": "ade894c7db0d89370a240388072c5e2e8690bd541721b4d34d961feb59d0cd41"}
{"bytes": 5226, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts", "sha256": "e2b24adcf919e86f0deed2774b43ba85772025395c036685843f2fbaccb4e395"}
{"bytes": 7190, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts", "sha256": "0b1e483a63432028683e39243d8b90e3fa12d13061682859f4f3da6fa8513585"}
{"bytes": 5955, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts", "sha256": "32e4ebe27d81e0107fd30ac6891a09b11f54fed3541798c40c843a97e751b74e"}
{"bytes": 3280, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts", "sha256": "71dd7b791d82d877026d78b1e540ccecf23e51bc29e31df9bf8bc9bd9f403506"}
{"bytes": 6744, "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts", "sha256": "4f3c1551d684abd9e7ca4ce8d2262746882ac70680bc563143aa939d6251daf0"}
{"bytes": 7072, "path": "projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts", "sha256": "08ceaff616ab9d1d01597dae5da0b6c60a8d9dc86fe7d47ad3519212c75782db"}
{"bytes": 4366, "path": "projects/sfia-studio/app/lib/oa/execution-run/index.ts", "sha256": "6c4fa21fb127d9435545b2389695e3c3d1c3fe58c543c282f2eb662cc8af0044"}
{"bytes": 2317, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts", "sha256": "bcd6ab4f4a5f7b553c3b9e1e66c2a962fa6dd8d453f9f1564a88389de9671a8a"}
{"bytes": 5446, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts", "sha256": "4955dd7eea4075e3ef21b025a618b1c7f20b6e5657ce388361e6667d940cf721"}
{"bytes": 4899, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts", "sha256": "3661388cee0d413d8a64edd9c15ce700c1faf38c66cba50a0728bfc2e72e80f6"}
{"bytes": 3893, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts", "sha256": "2213b732db96c92795c6c9c54b0192bf943f352d5afd5755b39f97d27b1df0f8"}
{"bytes": 2608, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts", "sha256": "62c8bcb77150afb46ee05d2f4df705f8810ad9c413d47a13aaa3788f7b07e206"}
{"bytes": 1198, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts", "sha256": "0866c259af1ece75a558222765c71ff14fbbfebc9ee6823851d65c2660b0722c"}
{"bytes": 2791, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts", "sha256": "95ca7a73785b9910c2022088ddfe90a0f5ae46a9e0aba733580a3d2a9e294555"}
{"bytes": 196, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts", "sha256": "1fb80fdea26e2ff745963b886101bf199098714fb218d22a64f2c399668571f9"}
{"bytes": 4474, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts", "sha256": "1853efc1604f22b66be162ded898b78d075e97cfed5e249e9a56c2bf0c71346f"}
{"bytes": 9318, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts", "sha256": "2dd303ffe6b6c8bec180497ff3b6a429715d7bfeaa022f44b714fe51bb285b9e"}
{"bytes": 1023, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts", "sha256": "548c06695589cc49289a235ff7c9c3daeef7322d0cd789a8de3bc79bcef59f64"}
{"bytes": 146, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts", "sha256": "12ba9ce92b7001346cb4fc888d1644d55369b66d698023a079c2c777ffcc89a9"}
{"bytes": 6383, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts", "sha256": "7b9d7a9b5991ebed4a9fb3a5bc62e3102b27394b43b414c7b2b9719b6eaa265e"}
{"bytes": 1176, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts", "sha256": "5b0eca3e6df3b29a5d4f34008cd7515fb8e332abd1ef55169f4e9a9d4fb19713"}
{"bytes": 1179, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts", "sha256": "1e7478d74acfc4e22e8a9bf92c6e0fa5d6d0c8da8fee6be1a9782772b3a9da87"}
{"bytes": 891, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts", "sha256": "7a11734d690c25fb1d32d44ed63ba2f852f3ce441cd7af87dd070648d3215aef"}
{"bytes": 550, "path": "projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts", "sha256": "de9f307963d7579256a88f41ca607e8f76bb7f36bdd0b9f96207bb934bf8abd4"}
{"bytes": 399, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts", "sha256": "3b635c753e43b66756bb99af820e93b3b17675aa787a5d929ec554581416dcf9"}
{"bytes": 51, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts", "sha256": "1ee935be91426cc4aaa9564b939f393ca73891be7f119abc6c78bf979615f749"}
{"bytes": 504, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts", "sha256": "b449e978a1d16584b3dbde7eab256dff52c76775cf192d81d8534bd924354767"}
{"bytes": 721, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts", "sha256": "8a99776ae0426a924c8dd1e71599c060fb9e9487bc1af4cb3ddd0b039c4154c3"}
{"bytes": 271, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts", "sha256": "2e8da3f81799a0b8faf579278a541822880f4594bc74f70125e1f3e3d93e1446"}
{"bytes": 960, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts", "sha256": "f8951453aa9f68b3e0415b8dd325d37861a8a37ebdf57d728ebb4832c241718a"}
{"bytes": 477, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts", "sha256": "60c2abf3c462d2e8796bd6474f06e3133f99994902465ed9b9df9aa70eb66e32"}
{"bytes": 111, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts", "sha256": "6c2c25ab63a18ba148f97b45262f08335da2811f59720cf26e7d0f6ea7212016"}
{"bytes": 2487, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts", "sha256": "d7bb649176ea22541530cd9b0af122c5d7837963e2dbd42a5c1814667266a444"}
{"bytes": 709, "path": "projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts", "sha256": "05cfed91d0b20e6e81a1610ffe81e84ff5238471c9d8808b5e6596b1c2940aaa"}
{"bytes": 578, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/create-execution-run-input.schema.json", "sha256": "36ca3f266792903d0c73c95745a43472289be0c7bb76700511000463f35c600c"}
{"bytes": 1359, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-context.schema.json", "sha256": "18a973cf08a6869846eecf8fd7f962879c958ca847102261ad5671920ea53b4e"}
{"bytes": 1231, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json", "sha256": "901b0222fa7e974827a7d7aebef584aac2f4360824b03e31ddca65c737dfc939"}
{"bytes": 1230, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json", "sha256": "4f9c940bcf7311d99409852cbb932704ad01f74a4acb5f1e97c41ebc489e1c28"}
{"bytes": 4839, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json", "sha256": "73f906733dde4944bfc25ce8d8d1a3b1bb77ab28919e2eb822c7b6d2dae72941"}
{"bytes": 1107, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/external-result.schema.json", "sha256": "b44d0ef53d052ac94d2f5751bddd02b91b34722a72633422f319056d75526375"}
{"bytes": 738, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/human-decision-gate.schema.json", "sha256": "aa366a8f57434b0c057ea182c9cc4ea61045a63fc5bee301e02444a54231eaa1"}
{"bytes": 1606, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json", "sha256": "e4ca4c729a70bfab9c3473b526ddb938c1222822b99997e7e9813e1ae3a02bee"}
{"bytes": 778, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/provider-capability-descriptor.schema.json", "sha256": "f2faced872f8283c89acce59232bb4f2fd0482de61566b5c209679e436818d30"}
{"bytes": 828, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json", "sha256": "d3290a69899ced9ef159661d439e77241aaa939d3c454f9406d32e9058701114"}
{"bytes": 1950, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/transition-execution-run-input.schema.json", "sha256": "16593acb88ae7888417dfb7fa7b919d6472be8e3b258317dc37ba5fffb8fe7aa"}
{"bytes": 911, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/usage-summary.schema.json", "sha256": "058258541c3d6052755d05f6bc67dcf728fe8155325a6ef9772b5dafa74afdf2"}
{"bytes": 878, "path": "projects/sfia-studio/app/lib/oa/execution-run/schemas/validation-outcome.schema.json", "sha256": "0997d39dc8ed797b6a4678938392ec583f7efae367683af9de2a5879c649934b"}
{"bytes": 4601, "path": "projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts", "sha256": "e01680312be004c2a7cd78259de9020d57206912e9f3d3aac25d6932444bf655"}
{"bytes": 4333, "path": "projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts", "sha256": "c6bf13e1056fd0d8bc38d32d47160d1b4e097c39b5e927120e12a5ac9393479c"}
{"bytes": 2511, "path": "projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunMemory.ts", "sha256": "2c206494e0d399d88b8ebe0a8edd6507634127f382dc51febde0c288e9594ef9"}
{"bytes": 2821, "path": "projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts", "sha256": "cdbb74fce7160c008c8415ffe0a5edd3d56393bb6f09526bc3af3a6887f28c9e"}
{"bytes": 879, "path": "projects/sfia-studio/app/lib/oa/execution-run/server/index.ts", "sha256": "2f542011fc22a795de4f63d9f9e13680aba9f26b681442a1e89efa0eb34c6d2a"}
{"bytes": 452, "path": "projects/sfia-studio/app/lib/oa/execution-run/server/serverOnly.ts", "sha256": "e8001369c96d7d555a23b614f42a8628eaa9df35ef29e408df5688c7fa75b527"}
{"bytes": 7130, "path": "projects/sfia-studio/app/lib/oa/finops/application/billedPeriodIdentity.ts", "sha256": "2403a9b3a6bee701470519c2b74f6b7921d3c1981e3ae888fd17c365c6fca615"}
{"bytes": 5234, "path": "projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts", "sha256": "a39e349235739cab780327df1827c681f2c700cfc83d1c640920edc79a3fcdce"}
{"bytes": 4575, "path": "projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts", "sha256": "606a03a459ac5e40171568a57f18b2f0a8abb7cd64938a1bc37798e8bc19ef27"}
{"bytes": 2491, "path": "projects/sfia-studio/app/lib/oa/finops/application/estimateUsageCost.ts", "sha256": "2c05dc1a33b14e30e4ef76b5448c4b57fbbc57c8e46124ab88ed56ad44b2c7a1"}
{"bytes": 4099, "path": "projects/sfia-studio/app/lib/oa/finops/application/evaluateAfterT2.ts", "sha256": "6649b42d0c8fc6641fef77865a2d6cb77e138bbbf61804175180818c8ad6024a"}
{"bytes": 5021, "path": "projects/sfia-studio/app/lib/oa/finops/application/evaluateFinOpsEnforcement.ts", "sha256": "8c1ce1bf2b512b858b342302af2d50ef309af3c0fe6fdba4cbc13b5806763b39"}
{"bytes": 9027, "path": "projects/sfia-studio/app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts", "sha256": "c0b5b2481df367c0fdc1945d1187ea517b56e969565a504e7b821dcccc001c40"}
{"bytes": 1290, "path": "projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts", "sha256": "856e3a9d0e2a11e1c71a83eadedcb49644b6c41ada9b52721531f49c99e429c9"}
{"bytes": 1727, "path": "projects/sfia-studio/app/lib/oa/finops/application/identity.ts", "sha256": "3252557b82284873b0b3c5fa15d19fe7aff63dc60d2c5527ba02f2a445944445"}
{"bytes": 2032, "path": "projects/sfia-studio/app/lib/oa/finops/application/providerMoneyBoundary.ts", "sha256": "76c6539263d24cb7157961d972d7e149af7fb7b45cd2457f71dd49b4c538b502"}
{"bytes": 7295, "path": "projects/sfia-studio/app/lib/oa/finops/application/rebuildEnforcementProjection.ts", "sha256": "1708c2e23a4b4ab7e16c0ee3262cb411fe8d571a1bb0ff65dfa0cb7f9a7b56be"}
{"bytes": 5687, "path": "projects/sfia-studio/app/lib/oa/finops/application/recomputeAggregates.ts", "sha256": "1dab9e5003c7ea77902ad0f4ef373c2cb5057119878be52b7bdbf2a1b6b35283"}
{"bytes": 26610, "path": "projects/sfia-studio/app/lib/oa/finops/application/reconcileBilledPeriod.ts", "sha256": "e1f6cf70d9e2f787ec90a500b8fa2a06e9b8c99104ca6101c4f8b4a824d45550"}
{"bytes": 8345, "path": "projects/sfia-studio/app/lib/oa/finops/application/reconcileProjectPeriod.ts", "sha256": "729285e6967481ecda1b3b5d3f54dfb0b9348404daa4ea3ba4e77c606a15987e"}
{"bytes": 5513, "path": "projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts", "sha256": "33164035b5893f75e761e8a2194385d718643aa879fbef6feba006ca06df50d2"}
{"bytes": 2853, "path": "projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts", "sha256": "79390c14e1541f45c2516d96ecc2a7853203c5888d759aba58205850b4dd821d"}
{"bytes": 1278, "path": "projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts", "sha256": "c75dc1116b6baac3460a1680d3522688712c706ea3524a8f00fae2afc6235c4c"}
{"bytes": 3485, "path": "projects/sfia-studio/app/lib/oa/finops/application/t2Identity.ts", "sha256": "8eac270dd638e60cb974f5425711fd7af85b7d92c8b978becd8eb7c58590ae50"}
{"bytes": 1292, "path": "projects/sfia-studio/app/lib/oa/finops/application/t3Identity.ts", "sha256": "43719b69c4051ac36fd7fcd2bf8598688bc5a5f07c161fa01a9f230ced1ee58b"}
{"bytes": 6926, "path": "projects/sfia-studio/app/lib/oa/finops/application/types.aggregate.ts", "sha256": "9f17965aadbd2ecf8d8fe99d630452cbe0cd114e68f272c1bbbc574bd98db3b8"}
{"bytes": 4080, "path": "projects/sfia-studio/app/lib/oa/finops/application/types.alertReview.ts", "sha256": "1ebe08e1395594896c2c1657ca56ad0620505335880963132b5896e0054dd943"}
{"bytes": 4240, "path": "projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts", "sha256": "890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a"}
{"bytes": 1793, "path": "projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts", "sha256": "b83fdca4df8fa22ea463ad197db86256bd068625875341c74a4e395717b3c161"}
{"bytes": 2808, "path": "projects/sfia-studio/app/lib/oa/finops/application/types.ts", "sha256": "e3e57340435b81a91468a2a3495a2a6682f75d9460a7cc5225bc92b1c388ee85"}
{"bytes": 1653, "path": "projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts", "sha256": "664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898"}
{"bytes": 1277, "path": "projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts", "sha256": "eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c"}
{"bytes": 912, "path": "projects/sfia-studio/app/lib/oa/finops/domain/errors.ts", "sha256": "9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498"}
{"bytes": 7547, "path": "projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts", "sha256": "69f590de4e4c0b35a6787800c95c870d3b7fbe2b5c04b833e964dfef934a1fa6"}
{"bytes": 7048, "path": "projects/sfia-studio/app/lib/oa/finops/domain/money.ts", "sha256": "fe548b2cd707ea4e92ab61deedffbc71e74e157e7c47855adb1be40c1c4499fc"}
{"bytes": 2060, "path": "projects/sfia-studio/app/lib/oa/finops/domain/period.ts", "sha256": "83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689"}
{"bytes": 1718, "path": "projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts", "sha256": "33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e"}
{"bytes": 1495, "path": "projects/sfia-studio/app/lib/oa/finops/domain/types.ts", "sha256": "f32ccf3f4532b04d7dc82948276bddb83c869e6abb78e1093819c819ffcad254"}
{"bytes": 1175, "path": "projects/sfia-studio/app/lib/oa/finops/index.ts", "sha256": "978fba3f48988b442909aa8cc4de39932c72d224a11dcfd6ef8ad127237b027f"}
{"bytes": 9649, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview.ts", "sha256": "0730c508006e4b9e022ed11057350aa7352a1a057fc1e2ea39e4286034aae2e2"}
{"bytes": 3868, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsEnforcementProjection.ts", "sha256": "00fb963dc03724d132c38757c89b8610823b9233a6958c4e953223f34b4b295f"}
{"bytes": 9154, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts", "sha256": "da048130a83e8b0debb241cd77c56175181efe0be11407342eb6ecacb520e70e"}
{"bytes": 2199, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts", "sha256": "cdc69b2b35068c119421d1882b1b57eb56fe3a267c59cbdb6bd7294bc5679e8f"}
{"bytes": 10318, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts", "sha256": "bbcb8b92fcc2f90e7f273e5f13a5f6d7a78e0c69c35e6713ff2c6e688c599e44"}
{"bytes": 16355, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore.ts", "sha256": "695bfa1f372b7d82e6abcf271cd718fb71da8cbed3c05ab3ad5d7237daffab10"}
{"bytes": 4189, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts", "sha256": "ffee02911dae0ccec0fa63e7a598b92d6516c2173f01f3b47ce35cd28bf45a49"}
{"bytes": 8550, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore.ts", "sha256": "b61d4f895f9447a6177ea7398bd1d0f520072c8029d86ca0e5a3135faa4a0fce"}
{"bytes": 2390, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsPriceCatalog.ts", "sha256": "8ea01b7b202a6c382864d2a210c1792edf4f1db62080087bd61434b76c3b0c19"}
{"bytes": 14393, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts", "sha256": "64ae20ec648a92cd0df9440f60e5110421b78ecc0c01261b00b488c159dfd0e7"}
{"bytes": 8760, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts", "sha256": "f8b802481970176c6a6ed83df40d64418014c0b4cae13167ecd9699305b965af"}
{"bytes": 6254, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts", "sha256": "1835221afa570ca3e611abe4d195992f302c3017509668063a7b5e8979b9c958"}
{"bytes": 2846, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts", "sha256": "2cb87f5c736c84c61afda0dd0dcd3fcb3f492abdf607333c71d9471907b926c0"}
{"bytes": 2562, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts", "sha256": "ad496294926bb811d1670475cfae160de6b76e2a88106816118cfe4293eb4bff"}
{"bytes": 2227, "path": "projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts", "sha256": "5a071522cf513995fe628ca79ebab96426f2991da8996c5fd68afcb9f6b317fe"}
{"bytes": 2203, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsAggregatePort.ts", "sha256": "1de6c7ff64269c7a8053dbedcce48ac56d60e0fd752b27a3474e9929dc86bd91"}
{"bytes": 1024, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsAlertReviewPort.ts", "sha256": "b2af29b0ecc4620ff60e40c75a859bd3a4b33aaf0c6510b02471d3358055042b"}
{"bytes": 341, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts", "sha256": "8cfa7c2dd7e0a6dcc41170a33b38e2b2539afeb27aa27881b6d3cca87321d539"}
{"bytes": 1101, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts", "sha256": "4e8a9804b83c57c9d9de57b9e319b81330c67c64af265baa81418d2f38eec08c"}
{"bytes": 474, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsEnforcementPort.ts", "sha256": "98359cccaf53b2a10493af24510d9b08d7da97dec4b4c82370fae7dc4337424d"}
{"bytes": 1459, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsEnforcementProjectionPort.ts", "sha256": "ccd33ce0f96985277463d6cb7e8dfe82f51c794da226567235978522894e52d7"}
{"bytes": 1275, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsPriceCatalogPort.ts", "sha256": "cdf44e520a78f5f96901f5ebcf56746d7c0833d5796cae838e0ab2356ff72345"}
{"bytes": 1811, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsReconciliationPort.ts", "sha256": "15726516eff3df807192aab103d0be2bed0d63d6a28bc8465002fb9191b9cb5e"}
{"bytes": 2511, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts", "sha256": "97cee2f8bac5099ed67c470b458c96ce387f73a24bbc044852d2f6d5e8ca669d"}
{"bytes": 537, "path": "projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts", "sha256": "9169d166be5e5c77a650a5d5fdbe3c252d69c34995e68446bf24e32952b7bb86"}
{"bytes": 2078, "path": "projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsRuntime.ts", "sha256": "ca78fd293f7ade9f1f2effc2a03fb6ed23af0d774b4395e2a9a0c990398d8340"}
{"bytes": 4407, "path": "projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts", "sha256": "74865e1cf820275cde08e2215ab4ef4356ec0bd1b1bbbd3644ea116a26f9a8c6"}
{"bytes": 10367, "path": "projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts", "sha256": "47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24"}
{"bytes": 5981, "path": "projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts", "sha256": "aa22fa82632544b4e2eccf28e7884c23f422897dc44581f6241e034d318d518f"}
{"bytes": 11142, "path": "projects/sfia-studio/app/lib/oa/finops/server/openaiOrganizationCostsAdapter.ts", "sha256": "9f67e67489521ea4e6161b54e86861d3a0630e195ef484a1648511a34f756a9d"}
{"bytes": 8247, "path": "projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts", "sha256": "78d237d7127d894f78b39d48c43b909d29152a9c31b79745d3af39b2f62245c5"}
{"bytes": 1983, "path": "projects/sfia-studio/app/lib/oa/finops/server/versionedFinOpsT7ShadowPolicySource.ts", "sha256": "f5f23972740178ec1fc099c4d453a403c4fd89d4ebcfafe5eb91f4441dd5e2d3"}
{"bytes": 11474, "path": "projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts", "sha256": "cacfc7ae3bb8c7fa6917224e0856b6c9f24617b5a5dedb9e4c59a956c19ceac8"}
{"bytes": 8578, "path": "projects/sfia-studio/app/lib/oa/project/application/createProject.ts", "sha256": "86faced1116d021ffa6937b9f86b4a121b79d800e44cceb98076e056613ac481"}
{"bytes": 3333, "path": "projects/sfia-studio/app/lib/oa/project/application/getCurrentLivingProjectState.ts", "sha256": "7db6e4c6167acd7778255d2db77139d74937a8993e03ae756c1a59ce4c54ceb4"}
{"bytes": 3709, "path": "projects/sfia-studio/app/lib/oa/project/application/getLivingProjectStateVersion.ts", "sha256": "600e3ba53fb790ef6e0c10f5c269203e09b9a73d679e1f62faac6d20a3172822"}
{"bytes": 2646, "path": "projects/sfia-studio/app/lib/oa/project/application/getProject.ts", "sha256": "6d8bcf7e41f6dd990c38655809f4b092a9e635f5ea283e6be26bb0c49652f859"}
{"bytes": 1653, "path": "projects/sfia-studio/app/lib/oa/project/application/listProjects.ts", "sha256": "9fb716116538a5f26d4f48b869a17e293f0fd1920839990dee1174e6074098a9"}
{"bytes": 2811, "path": "projects/sfia-studio/app/lib/oa/project/domain/errors.ts", "sha256": "5638b661950bbabce74fed5fc74e121536bba5e2ab2adb4efe0a15916cec67b6"}
{"bytes": 4838, "path": "projects/sfia-studio/app/lib/oa/project/domain/invariants.ts", "sha256": "70e6205f8a9df9c37fa3892bb8ba7b3f8dbf40ce76e306080dd5d34e6673f181"}
{"bytes": 6048, "path": "projects/sfia-studio/app/lib/oa/project/domain/types.ts", "sha256": "d3b6365b0fd9690dd332dcd1d3150a44e11e10f2c1e3994a76d9d3f9335ef4e8"}
{"bytes": 6324, "path": "projects/sfia-studio/app/lib/oa/project/index.ts", "sha256": "344c17e5492fd47e2f2ce856f81e18874df1080b105094834f25dcfb4cb66bf6"}
{"bytes": 1974, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/memoryLivingProjectStateRepository.ts", "sha256": "b9cc85d8ebae41bd44d77ebd583a7337ac68bf117777e57bd3aa9815f419af9d"}
{"bytes": 1691, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts", "sha256": "575369fd862cc908140e09f01308cfb96ad04344f13a490dd02ed2144a133298"}
{"bytes": 2969, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts", "sha256": "50e7f5fe94ce58b284618cb38a6e09be77e6240e6e171b846d1ba19ee164214e"}
{"bytes": 543, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/observability.ts", "sha256": "4c6ec1881bb78a23a71322c4c13558ea6106091175a59210404455b530da1415"}
{"bytes": 4922, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts", "sha256": "75537a1e8894e7ed6dd9415c35da74020c31d220b101dcedb578bc7642c103a9"}
{"bytes": 8050, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts", "sha256": "04f02e4206e65d674536d86942aa5879a1acc2394908a9e75c9ec0167f9ac2fb"}
{"bytes": 1754, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/paths.ts", "sha256": "28aae2b432cb05615131434ab4d400ce40c0c7a19ddae380fd83755482099889"}
{"bytes": 619, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts", "sha256": "d30fe3b5fd2d8883c1de366317c60f06e5dc3b11f6733ec90ca756b81dbc92c6"}
{"bytes": 3431, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteLivingProjectStateRepository.ts", "sha256": "3895b1c794687b8770fc0c6a34aaa03dc00f7c99ccff6dc061ac3e46116d3c96"}
{"bytes": 2970, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts", "sha256": "61904f8389eb11b8b4340d4f8e13829f931e51f5fd5c15801944d8ebfaacd6f5"}
{"bytes": 1196, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectAuditJournal.ts", "sha256": "d95024697d194afa17ecb4f8aa4a19e4e8b1d0701f3878195cb5b256907f1847"}
{"bytes": 2979, "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts", "sha256": "8fe173d3e033f0b7044131e3301e5778860eade0a9b072065f67926b8f7578ef"}
{"bytes": 605, "path": "projects/sfia-studio/app/lib/oa/project/ports/livingProjectStateRepositoryPort.ts", "sha256": "a6416358053e93fe7929010e0cf006fcb10f5072b75d9fa6008e4bb8911862dc"}
{"bytes": 1565, "path": "projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts", "sha256": "3e7c250449a12ebd724577c6e5c772d983a5fff5d76afbea1d4cb9e23a75f7ba"}
{"bytes": 248, "path": "projects/sfia-studio/app/lib/oa/project/ports/projectPersistenceUnitOfWorkPort.ts", "sha256": "b49810e4a9e78c9e5a19f3654d711780d2ec0e54e96fba4f7b8167ebe3f96510"}
{"bytes": 672, "path": "projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts", "sha256": "acdcfd24be30fdaa676be77fa7bb376390194f0044141ee199851fe578fc423d"}
{"bytes": 14022, "path": "projects/sfia-studio/app/lib/ops1/actionGate.ts", "sha256": "4b078f4a52aac7d0baa9598b052b2bdc00a8798679ae560f17eacc23c3c81f9a"}
{"bytes": 22398, "path": "projects/sfia-studio/app/lib/ops1/actions.ts", "sha256": "6add0f46e23107f6477eccfdee8b9318b257a205a84f300bf012f32af75449ca"}
{"bytes": 13881, "path": "projects/sfia-studio/app/lib/ops1/allowlistEvaluation.ts", "sha256": "f607dd922052081a0b0c6bdad8e9d3a903b9f8388c6973d47f284637ae2e2d65"}
{"bytes": 5440, "path": "projects/sfia-studio/app/lib/ops1/allowlistService.ts", "sha256": "ed962af8567511563fb5bd77041ab3b25d360c2b146d80790a79f2a25e60c240"}
{"bytes": 421, "path": "projects/sfia-studio/app/lib/ops1/conversation/config.ts", "sha256": "5f213f7821549548173ad5280363cab43da2c6ead95b6b996572a0c651ae1fc6"}
{"bytes": 356, "path": "projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts", "sha256": "a5c3d1307c0883456b8c87e9435b219e6b65df2d6da5d974952eaeaa75174401"}
{"bytes": 285, "path": "projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts", "sha256": "155c247619db34a737dca48ce99512be5ff0dc2d9bff9b14e87a53c01eabacc5"}
{"bytes": 318, "path": "projects/sfia-studio/app/lib/ops1/conversation/provider.ts", "sha256": "7869107e74815e84be1650389488a7d6680d1af00bb45bff31b8a3cedd1290bc"}
{"bytes": 14082, "path": "projects/sfia-studio/app/lib/ops1/conversation/service.ts", "sha256": "b954b2e9037f9e72e0e3f1c1b58b37021d3ef1c23c0921baf128ed92b5585c3d"}
{"bytes": 1186, "path": "projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts", "sha256": "f43b499293178d77147e428a9d12ee150983203c0fe66fd681e150e38bacce85"}
{"bytes": 2531, "path": "projects/sfia-studio/app/lib/ops1/conversation/types.ts", "sha256": "f88830f2d1862f28ab3e20909b1b3840e05ed68bf10c183947f7bef074a84107"}
{"bytes": 7920, "path": "projects/sfia-studio/app/lib/ops1/cursorExecutionAdapter.ts", "sha256": "ebd9da2b6572305549d1ad19baa699ba4c8f96283ef4dc9a981b80f8b47e8dec"}
{"bytes": 15986, "path": "projects/sfia-studio/app/lib/ops1/db.ts", "sha256": "bd154c18d761d4e8914b3a14591e45a8eab5c979aee33521bf24ecb6a90641d9"}
{"bytes": 1601, "path": "projects/sfia-studio/app/lib/ops1/errors.ts", "sha256": "75da7e9a27d7930fdf442da77fd15799b01ac85d8b23e114fc9f17d59901abfe"}
{"bytes": 1330, "path": "projects/sfia-studio/app/lib/ops1/executionCanonicalize.ts", "sha256": "e0500a3d7a6c013f46f51b488faa33929f96a447e1590a0ba213226146b6764e"}
{"bytes": 15727, "path": "projects/sfia-studio/app/lib/ops1/executionContractService.ts", "sha256": "0673f99f644aff117de50405e851ed61ba84378f17a2371f5c662b4237592a19"}
{"bytes": 14192, "path": "projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts", "sha256": "ab17421e9f48b68e2316bf7b181825cb25c462212c2e206bc1666b6819f1ef1d"}
{"bytes": 4251, "path": "projects/sfia-studio/app/lib/ops1/executionPostCheck.ts", "sha256": "bf0a5b49a8e7f149b132ee8fc4771ea5b56a6d4eb81b7fd0aa2f9fd79d3d06a0"}
{"bytes": 7703, "path": "projects/sfia-studio/app/lib/ops1/executionRevalidation.ts", "sha256": "756d300ff8757483cb74e4564312839b629040530b7b4e1370f4aa28a6e3d0f0"}
{"bytes": 3665, "path": "projects/sfia-studio/app/lib/ops1/executionWorktree.ts", "sha256": "6ea5313fb8bc9282c0b03f39e4d905c67492b3053d0a2fa054a73fbbafee00c7"}
{"bytes": 429, "path": "projects/sfia-studio/app/lib/ops1/fixtureReply.ts", "sha256": "dbc4ae9a1b0c1a3f4eea30ab4085fc9e88cd2fb4af9dc38829ba3ffc9968f300"}
{"bytes": 1892, "path": "projects/sfia-studio/app/lib/ops1/globalModeBadge.ts", "sha256": "a5dd0cbe59b34f34fcd35a2015cd99bf1b2832d58ce8ea9997d92d80d7f3aca9"}
{"bytes": 1100, "path": "projects/sfia-studio/app/lib/ops1/ids.ts", "sha256": "3f61ac2e42eee09a47687871cb507ccb6ae88712add312d132898132798bd6fc"}
{"bytes": 1892, "path": "projects/sfia-studio/app/lib/ops1/index.ts", "sha256": "ce4cb859c97ab269c0c5255dd87850de2edee5041b3ae6dbd96e1f34ee176429"}
{"bytes": 2011, "path": "projects/sfia-studio/app/lib/ops1/ops1EventSink.ts", "sha256": "91abfa0fbf6a32f3ec9197fe81a3a64093a7c02319f9bbfb45f7e4b615940c15"}
{"bytes": 1743, "path": "projects/sfia-studio/app/lib/ops1/paths.ts", "sha256": "94ab8a3ad20251a1c023b196c6c1ccfd95a8df6024823f2c94936e6c0d10eaa3"}
{"bytes": 8259, "path": "projects/sfia-studio/app/lib/ops1/reportReinjection.ts", "sha256": "008d9cac68b5b00414f317551643e9d58f5232b05f7187d9d3c2231eacd3f15b"}
{"bytes": 14728, "path": "projects/sfia-studio/app/lib/ops1/reportService.ts", "sha256": "e915ca646144ac9e45711ebd3657306afe845b44807946101d57a5294080a324"}
{"bytes": 13927, "path": "projects/sfia-studio/app/lib/ops1/repository.ts", "sha256": "0b303648651f7c361b7de478fcd7d369164055b1c719fae5863f343ad22c0d4a"}
{"bytes": 6096, "path": "projects/sfia-studio/app/lib/ops1/sessionLifecycle.ts", "sha256": "a29adf75291bb11ad2662d542edd39ccf3b3468281e03648d625459d839b5766"}
{"bytes": 8875, "path": "projects/sfia-studio/app/lib/ops1/sfia/actionCompiler.ts", "sha256": "2c5b1c87526fd0f2ec6fe50c1ef57cf8d77d677a913fcbdeef716e916a0e4946"}
{"bytes": 266, "path": "projects/sfia-studio/app/lib/ops1/sfia/canonicalPaths.ts", "sha256": "0e66d094446194c6c3593fe0addc446b74746cee4b1fa0ae1c54bb56c7d3d53a"}
{"bytes": 267, "path": "projects/sfia-studio/app/lib/ops1/sfia/contextResolver.ts", "sha256": "7f323983fa89ada050fe2dbcea4c8dcfe289b64418d6bfc2b312ebeb97a78dd0"}
{"bytes": 3139, "path": "projects/sfia-studio/app/lib/ops1/sfia/cursorPromptInstantiator.ts", "sha256": "b0a698160064eea392363b3a94e00bfb24e501827cebda04d1f65bbcf91e6fdb"}
{"bytes": 272, "path": "projects/sfia-studio/app/lib/ops1/sfia/index.ts", "sha256": "22183f8feba159d0cd40019063f0807220a2c4c9743779570fcfbfdce1ccbd37"}
{"bytes": 7625, "path": "projects/sfia-studio/app/lib/ops1/sfia/proposalSchema.ts", "sha256": "68c45fdac22b41ed9b94abe9003027f34d1a90a1efca361f34450bf39dddd562"}
{"bytes": 3111, "path": "projects/sfia-studio/app/lib/ops1/sfia/sessionContext.ts", "sha256": "bc462fbd04fc2713a9d1c6246b91532dfe82e148fd043a5ac85b6d1c51ed10f9"}
{"bytes": 264, "path": "projects/sfia-studio/app/lib/ops1/sfia/sourceLoader.ts", "sha256": "b337bd45b1d089a4a9acf13682bba21aa56a3d2ff775d3ccfd3e51aaa8010d8a"}
{"bytes": 2968, "path": "projects/sfia-studio/app/lib/ops1/sfia/types.ts", "sha256": "d5cfdf622a71638dc67fb6bfc05d36b81901f55f166c0493725add4d3f752821"}
{"bytes": 291, "path": "projects/sfia-studio/app/lib/ops1/tools/gitLocalReadAdapter.ts", "sha256": "b71299f4c4337810e01e701889a1646d9855d5b70bfe94c43c512c938ab993a5"}
{"bytes": 581, "path": "projects/sfia-studio/app/lib/ops1/tools/githubReadAdapter.ts", "sha256": "c93037ad7dca3e6877184c310b3f2b57f1de0d3ed1be775b831b8bab92bd0661"}
{"bytes": 258, "path": "projects/sfia-studio/app/lib/ops1/tools/pathPolicy.ts", "sha256": "e26125fbd79cfcd2beaaa4149d8e1bed844dfccb7366a8bf12cfc52f668652a9"}
{"bytes": 257, "path": "projects/sfia-studio/app/lib/ops1/tools/redaction.ts", "sha256": "f04c441d47377188810bca24d3b9ee408bf393039aa5074def87355fc9ee7487"}
{"bytes": 1297, "path": "projects/sfia-studio/app/lib/ops1/tools/toolRouter.ts", "sha256": "3a75776b25ea7e2607e7b8a419e243be5959ed66531f40e2dd8e0b8e413733dc"}
{"bytes": 250, "path": "projects/sfia-studio/app/lib/ops1/tools/types.ts", "sha256": "83b4f9aa84ef17ba12170e3ead8869543ebae08002829edeb4444e618bd6dcaa"}
{"bytes": 13452, "path": "projects/sfia-studio/app/lib/ops1/types.ts", "sha256": "e581c81ed6ab290dfd169f3d7841a8866a81a1feae420d094fde23f9ac763406"}
{"bytes": 3559, "path": "projects/sfia-studio/app/lib/ops1/validation.ts", "sha256": "89aef37ecd520c93a89467d7e7187466a898c36267f6fdd1c9cc4cddb41e6105"}
{"bytes": 487, "path": "projects/sfia-studio/app/lib/ops1/worktreeDisplay.ts", "sha256": "54e33bf26fe61d2b05403dba7eb5d15f09de95a0f383e1c855b1fea2f6abf458"}
{"bytes": 1417, "path": "projects/sfia-studio/app/lib/platform/ai/config.ts", "sha256": "b0b7ca5e4a722ac36d4dd1a9a9ab29ef54c2506879efce00d18f6879b3e232ad"}
{"bytes": 575, "path": "projects/sfia-studio/app/lib/platform/ai/errors.ts", "sha256": "a101cd565d9cf2dbd1943f65f0a5ccc4c85dae7124e1583c2a54c847874cbca8"}
{"bytes": 15160, "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts", "sha256": "ef4ebd4113494054442e1441623c6f3136bee0ef494530ccf8971160713b6afb"}
{"bytes": 811, "path": "projects/sfia-studio/app/lib/platform/ai/index.ts", "sha256": "254380f65134a2ed677abacc839d02ed7f86a540ccd6e2e625b55c0cb71776e1"}
{"bytes": 5915, "path": "projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts", "sha256": "7badca350d20319a3e9b6211ccb8ad10f8659e28d1a8391aefea1441e0f634c6"}
{"bytes": 855, "path": "projects/sfia-studio/app/lib/platform/ai/provider.ts", "sha256": "372db0a9db662ab34b8d865279f5e3c8b6512c1cd2a97fdef2e5be49487fc35a"}
{"bytes": 2127, "path": "projects/sfia-studio/app/lib/platform/ai/types.ts", "sha256": "56e7cf9a5be356e4624b69c9bfa5e00b4bce503b9d487042420ba353bbb6dc10"}
{"bytes": 345, "path": "projects/sfia-studio/app/lib/platform/observability/eventSink.ts", "sha256": "57b16a0a4b5ebeff3053f2777fc4b3d60ad6cbf99cb9e8e6e43631182b5ea2e1"}
{"bytes": 173, "path": "projects/sfia-studio/app/lib/platform/observability/index.ts", "sha256": "655450e196ca54ac3b393eb68ccb809adff0d37443ed68ce404fbf3794692463"}
{"bytes": 637, "path": "projects/sfia-studio/app/lib/platform/observability/types.ts", "sha256": "e1973a89564d3f609431fc3477e5520c8833ce0bdbf361512678eb5417540370"}
{"bytes": 6725, "path": "projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts", "sha256": "752deffd116da6cda68d36c0643351130d94970a20bcaf29f99913c58eb39f43"}
{"bytes": 11960, "path": "projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts", "sha256": "a8a6103bbc435317d581499a8559382d55ff8a00dfb780224fa71faf1dd99e94"}
{"bytes": 454, "path": "projects/sfia-studio/app/lib/platform/repository/index.ts", "sha256": "322db826146bac2c3a470a5004d9e71d5ccdbbf6f704654b9ba111f9abf250cf"}
{"bytes": 236, "path": "projects/sfia-studio/app/lib/platform/repository/workspaceRoot.ts", "sha256": "a4ba68bba7e0947231e196cbae6e3d8c05178cdbeab1d52f9940d982db043f01"}
{"bytes": 190, "path": "projects/sfia-studio/app/lib/platform/security/index.ts", "sha256": "788181ba77db8b2a884aec9ec8b522866e9cd6e277e47c79a08dcd9e9fe04da8"}
{"bytes": 3638, "path": "projects/sfia-studio/app/lib/platform/security/pathPolicy.ts", "sha256": "b8791dfb4ffefb598d83db3f1cf454f3720ff535bf016dee0515ba9acb8f5396"}
{"bytes": 916, "path": "projects/sfia-studio/app/lib/platform/security/redaction.ts", "sha256": "137698214a4c34b82fd8d350891064289e624a3c606993c11fe04ea3dd965e74"}
{"bytes": 2667, "path": "projects/sfia-studio/app/lib/platform/sfia-context/canonicalPaths.ts", "sha256": "1b329cd42be5ce39095088cd059acfc7e323d69508c3fe3740851fdd18d64e08"}
{"bytes": 7307, "path": "projects/sfia-studio/app/lib/platform/sfia-context/contextResolver.ts", "sha256": "09c40331439cddfe071aac08a50246fb6d6d7891112cd1b411affbcbd99be36f"}
{"bytes": 126, "path": "projects/sfia-studio/app/lib/platform/sfia-context/index.ts", "sha256": "4d94ce42a30fca74d7b3b3db072797773694196898c6ecd9d73f35818be164b8"}
{"bytes": 4274, "path": "projects/sfia-studio/app/lib/platform/sfia-context/sourceLoader.ts", "sha256": "f7957cae49ca14145bb9ba52a595161cb33a94feef8d9f12040a34ca7d6532c7"}
{"bytes": 1832, "path": "projects/sfia-studio/app/lib/platform/sfia-context/types.ts", "sha256": "052d4c54f50e4f6853403c5be0e8390ab4c7ae71548d88f3b35e30e3cccde905"}
{"bytes": 5055, "path": "projects/sfia-studio/app/lib/platform/t-a7/blockerAggregation.ts", "sha256": "48f89aa3e36a6f8fbc8a0e3defe4ef9bb022b480cbfe24d6f9bc62f92b3ed00a"}
{"bytes": 5397, "path": "projects/sfia-studio/app/lib/platform/t-a7/blockerControlPlane.ts", "sha256": "16639fa861d8f1eb146db99ef37dd80bdb387210bb46cc5ef8c8b7e3379295e8"}
{"bytes": 6999, "path": "projects/sfia-studio/app/lib/platform/t-a7/boundedClaimEvaluator.ts", "sha256": "5e2a24ed99bd5bd411c233b7430295be95e1bfd975bd256456b0a0d4b4a7f095"}
{"bytes": 12057, "path": "projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts", "sha256": "1965c1c9a2653291b2fa51c6e4339852784ae84f54a06cd57ef89f91347d6422"}
{"bytes": 1161, "path": "projects/sfia-studio/app/lib/platform/t-a7/boundedPersistenceDecision.ts", "sha256": "1cd3bc85e0756febcf36fbbf4bf7ea23813211e013f3972e7f16113a10c36fe6"}
{"bytes": 5713, "path": "projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts", "sha256": "876f88ba5979b866ff12ebaf3effb9185d581a8730d829704b985e1bdc85f71c"}
{"bytes": 2376, "path": "projects/sfia-studio/app/lib/platform/t-a7/hardTa6FoundationAggregation.ts", "sha256": "c89a7b36aa21d6e2de24564699f4a92f797f900491ab5575755c43b635575e3b"}
{"bytes": 516, "path": "projects/sfia-studio/app/lib/platform/t-a7/index.ts", "sha256": "fffb30bf6e0785a1e3b9e493316a68708e8fb07720e02171402ad7427a3fe227"}
{"bytes": 8246, "path": "projects/sfia-studio/app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts", "sha256": "41a0713b5a992c6218ae0b252e94f66ee2ab06ca86a536b38a29735bd113cc3d"}
{"bytes": 6243, "path": "projects/sfia-studio/app/lib/platform/t-a7/simulatedAtomicOperation.ts", "sha256": "1ada96677a3f1908a0819e8c0cf8ffae5d6915c51af7fb790daad5bd7030e50a"}
{"bytes": 3973, "path": "projects/sfia-studio/app/lib/platform/t-a7/tA6FoundationStatus.ts", "sha256": "01c4c511d2312588ea0f5b31a8a0f37b374342536de0b5d3326b35234b8a06a7"}
{"bytes": 686, "path": "projects/sfia-studio/app/lib/platform/tools/index.ts", "sha256": "d3a9b59cc6abbce709efebe103cfd9a828a733f6f5bfccf65a681eacc9e5d858"}
{"bytes": 5536, "path": "projects/sfia-studio/app/lib/platform/tools/toolLoop.ts", "sha256": "086aef494ab33a34b2cb5a8ca9db8fba9787572c34434941ad918d18acbddd15"}
{"bytes": 16035, "path": "projects/sfia-studio/app/lib/platform/tools/toolRouter.ts", "sha256": "1bd897009b11e0b93083627c2bd0d4109ac4515db9f33b8f520886a9d390d0c4"}
{"bytes": 6375, "path": "projects/sfia-studio/app/lib/platform/tools/types.ts", "sha256": "de66acf3d239c33e097643344477ba2c212ca6fb006892071a71b255de39c825"}
{"bytes": 1366, "path": "projects/sfia-studio/app/lib/vertical-slice-core/audit.ts", "sha256": "1a3cf11a40f885e9bde4a5ef373865b5a538574981a96114c287d1a62f07faa6"}
{"bytes": 129, "path": "projects/sfia-studio/app/lib/vertical-slice-core/index.ts", "sha256": "8954d9f75955d60e61208e0e5fd176f5f19488482ef5fa92e04863d380cea737"}
{"bytes": 15156, "path": "projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts", "sha256": "eba231cb20f4b1c095f8dbcc87afa30fe1867db169ab89583478e9a9f89d587c"}
{"bytes": 1802, "path": "projects/sfia-studio/app/lib/vertical-slice-core/localSqliteAudit.ts", "sha256": "20f726e6f5300ade21407110b8e7a4f50eb337a5d5050b3cee3d3700de4deffa"}
{"bytes": 4170, "path": "projects/sfia-studio/app/lib/vertical-slice-core/types.ts", "sha256": "318b52df7e86770f1c85bc67dcbf7594e853fb30a697ceef78365a2b04f6fee9"}
{"bytes": 891, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts", "sha256": "b27ce610fd200e8ecbdc717020d7add029adee9c437376f3c8b82200acf34d62"}
{"bytes": 3573, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts", "sha256": "6d62db37cca84e5deecef949f3ecd5197f0b72d1d593060f907e726d5b0d630e"}
{"bytes": 3939, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts", "sha256": "2cf1f1fcf72ea51e979ffb19ea0b64252ac33be5edc43b10718f7cd10c57700e"}
{"bytes": 8225, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts", "sha256": "29b257124f6cd9e879eac8ce5c3fb0449b69391addccc81f8ac750ca93dbff7d"}
{"bytes": 2909, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts", "sha256": "7b264f29f095df439bdb630eb2d003c0875cff055b3efd2c4f9d8df1443a7de1"}
{"bytes": 1608, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts", "sha256": "4bc7dc93774b7f32f3f6afffc1e209be3e815fc16a49563ae722bb218b63f845"}
{"bytes": 2172, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/liveProjectContext.ts", "sha256": "c8fe55f97d50c090ef312439bec2bd7f1031227911ea2815559782bc82c128db"}
{"bytes": 4587, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts", "sha256": "497e2684273b3e158531bd34c8ee1798e23791c48850b0f2a62250b5dcab4189"}
{"bytes": 567, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/paths.ts", "sha256": "b746dbc38d94575a45dc86519b4abf7051fab6e243f947da2203cb6b16dd0e95"}
{"bytes": 2108, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts", "sha256": "8a5cd0e7e5c848edd83d5f1712360ea036dcac8fb11338096904da0465b44268"}
{"bytes": 493, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/serverGuard.ts", "sha256": "5e623af3c6764229e8357ec5aa6b39325d8aacb9cab5e14e8d79d85aa3c020e9"}
{"bytes": 12789, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts", "sha256": "0d462b9c554535f5a56ff2c85da5da05d8d449aadf7db6574828b61a973498db"}
{"bytes": 2735, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts", "sha256": "2b94d3b4be24c51bf1b24daf0fc39c028df60d0c8e88979d4340f615e78b9ef4"}
{"bytes": 3663, "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts", "sha256": "cadfd7954e3fedd7582e6ba1e9d26f038a1b049160e59904b16b770f8021c2e6"}
{"bytes": 9211, "path": "projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx", "sha256": "f7dc700e40d6c83154fa6a15c3a3bb1d26a75cc0f0b2aeacb8d305a562a069a2"}
{"bytes": 241, "path": "projects/sfia-studio/app/lib/vertical-slice/index.ts", "sha256": "2735eaa11f81593c584b1753778baeda8101abf8118d20edb40100d2fc2e0191"}
{"bytes": 4098, "path": "projects/sfia-studio/app/lib/vertical-slice/mapping.ts", "sha256": "428876783001c50aa4201148e0e673073b018d1d7631c658fd4f7f52748c77fc"}
{"bytes": 1156, "path": "projects/sfia-studio/app/lib/vertical-slice/types.ts", "sha256": "419b8b1363599dbeeef5ac048551c5977780d5c993435d739ff588f4ecbfbb99"}
{"bytes": 262, "path": "projects/sfia-studio/app/next-env.d.ts", "sha256": "85ae5aee75f011967cf2d25cbc342f62d69314e9d925f7f4aa3456fc2cffcca6"}
{"bytes": 130, "path": "projects/sfia-studio/app/next.config.ts", "sha256": "c5efcdb15ee66db5a3a749082d8a2d68abdd0555ce251baee0e3fd920b4c55b5"}
{"bytes": 292344, "path": "projects/sfia-studio/app/package-lock.json", "sha256": "5494ccd725b8e956c0328085c1a8b51c19e3003215e0dd2b3f9461f4af670f75"}
{"bytes": 1484, "path": "projects/sfia-studio/app/package.json", "sha256": "f52e62bbe74458ae0df0bdae77b031d937bda7abbe97156a3e51c3df8c8306eb"}
{"bytes": 1245, "path": "projects/sfia-studio/app/playwright.config.ts", "sha256": "d64326267f7434aa3599eb31589ab6541435d52653490f982d177a5d66c7a6b9"}
{"bytes": 5425, "path": "projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts", "sha256": "78b38dc677191fe7c413f0ff5001ed806daeba502def109f8a5e2f196a27eb5b"}
{"bytes": 4122, "path": "projects/sfia-studio/app/styles/shell.module.css", "sha256": "477dcbe342b4d444626956ce4e21875cb876847a575a55e18cfcf665a48b1f1e"}
{"bytes": 3958, "path": "projects/sfia-studio/app/styles/tokens.css", "sha256": "3faf703471aa58a5732c091abcc80b57e95e15f24567b18d31798ee1e382541a"}
{"bytes": 580, "path": "projects/sfia-studio/app/tsconfig.json", "sha256": "4cca494e98e5a6e04d9274917d7fffdb27dfb966c6035a944dce806f70c3751c"}
{"bytes": 355, "path": "projects/sfia-studio/app/vitest.config.ts", "sha256": "70e681a8d10ddc9432750f2b932fcea48019c6a4def46d830e3b806f026cf550"}

```

## 11. Source drift

```
ZERO SOURCE/TEST/CONFIG DRIFT
pre==post byte-for-byte

```

## 12. Isolated Product DB

Path: `.tmp-sfia-review/final-cycle-9-deterministic-qa/runtime/qa-product.sqlite`

After Playwright:

```
{
  "exists": true,
  "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/final-cycle-9-deterministic-qa/runtime/qa-product.sqlite",
  "bytes": 827392,
  "mtime": 1786960264.2673275,
  "sha256": "64899673bab7ac5c791e41f6d4965130e48042d842d3af8f29b800566a83c9e7"
}

```

Vitest suites use per-test `mkdtempSync` Product DBs (do not use this file).

Campaign note: first targeted Vitest attempt (command 01) incorrectly set `SFIA_STUDIO_PRODUCT_DB_PATH` for all tests, causing sqlite lock / create-failed. That is a **campaign env contamination**, not a product defect. Canonical targeted re-run is command 02 without that env var, as specified for deterministic tests.

## 13. Canonical Product DB before/after

BEFORE:

```
{
  "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite",
  "exists": true,
  "bytes": 4792320,
  "mtime": 1786950527.0966747,
  "sha256": "766405130d750cc0cf28595f7e95f77cdc510361c71cd1966ea3ac7c0ecd6ebd"
}

```

AFTER:

```
{
  "exists": true,
  "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite",
  "bytes": 4792320,
  "mtime": 1786950527.0966747,
  "sha256": "766405130d750cc0cf28595f7e95f77cdc510361c71cd1966ea3ac7c0ecd6ebd"
}

```

**Unchanged** (`766405130d750cc0cf28595f7e95f77cdc510361c71cd1966ea3ac7c0ecd6ebd`). This pass mutation of canonical Product DB = 0.

Leftover next-dev on :3020 (PID 53221) had unset `SFIA_STUDIO_PRODUCT_DB_PATH` (would hit canonical). Stopped before Playwright. Fake OPENAI_API_KEY length 26 = `sk-e2e-fake-not-a-real-key`.

## 14. Env ZERO REAL

Deterministic tests:
`NODE_ENV=test SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL= OPS1_CONVERSATION_PROVIDER=fake OPENAI_API_KEY=` (unset)

Browser Playwright webServer (existing playwright.config.ts):
- spreads process.env
- forces `OPS1_CONVERSATION_PROVIDER=fake` unless OPS1_ALLOW_LIVE_SMOKE=1 (not set)
- injects `OPENAI_API_KEY=sk-e2e-fake-not-a-real-key` placeholder
- this campaign additionally: `SFIA_STUDIO_PRODUCT_DB_PATH=<isolated> SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 SFIA_STUDIO_E2E_QA_CONTROL=1 SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL=`

No live OpenAI. No Cursor REAL. No real git worktree runtime.

## 15. Browser tooling discovery

PRESENT:
- package manager: npm (`projects/sfia-studio/app/package.json`)
- scripts: `test` vitest, `test:e2e` playwright, `dev` next :3020, `build`, `lint`, `typecheck`
- Playwright `@playwright/test` + `playwright.config.ts` (baseURL http://127.0.0.1:3020, webServer `npm run dev`)
- E2E Option A: `e2e/studio-option-a.spec.ts`, `e2e/studio-option-a-negative-states.spec.ts`, `e2e/studio-option-a-clean-slate-captures.spec.ts`, `e2e/studio-option-a-new-design-captures.spec.ts`
- Control: `app/api/e2e/option-a-qa-scenario/route.ts` + `lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts` (404 unless gates; disabled in production)
- Routes: `/studio`, `/studio/projects/new`, `/studio/projects/[id]` present
- Fake provider: `OPS1_CONVERSATION_PROVIDER=fake` + markers `__F2_GATED_STANDARD__` / `__F2_STRUCTURING__`

ABSENT (not created): new harness, new tests, new endpoints, Figma MCP comparison this cycle.

UI-DRIVEN: New Project form, GO/NO_GO clicks, prepare, confirm/execute, reload.
MARKER-SEEDED conversation: FakeConversationProvider gated by `__F2_*` tokens (deterministic qualification, not live Nora organic).
HARNESS-SEEDED negatives: `invokeOptionAQaScenario` arms failed/timeout/cancelled/missing/stale/rehydrate-failure then UI confirm.
DOMAIN/INTEGRATION: R1/R2/R3 residual Vitest (including async continuation).

## 16. Package/scripts

See package.json scripts above. Command runner: npm / npx from `projects/sfia-studio/app`.

## 17. Exact targeted commands/results

| id | command | exit | note |
|---|---|---|---|
| 01-targeted-residual | vitest 9 targeted files WITH shared SFIA_STUDIO_PRODUCT_DB_PATH | 1 | campaign env contamination (sqlite lock); not a product FAIL |
| 02-targeted-suites | same 9 files, DB path UNSET | 0 | 9 files / 80 tests PASS |
| 03-full-vitest | npm run test | 0 | 1808 passed / 131 skipped / 0 failed |
| 04-typecheck | npx tsc --noEmit | 0 | PASS |
| 05-lint | npm run lint | 0 | PASS |
| 06-build | npm run build | 0 | PASS |
| 07-playwright-option-a | playwright 3 Option A specs | 0 | 17 passed / 29.0s |

Logs: `.tmp-sfia-review/final-cycle-9-deterministic-qa/commands/*.log`

Targeted files in 02: residual (incl. T-R3-ASYNC-CONTINUATION), amend, qa-pre-m6-01 finalHardening, qa-pre-m6-01 postGoDurableM3Path, gux15, f3.fixtureVerticalSlice, m5C1C2, m4SpawnAckLifecycle, importBoundaries.

## 18. Full Vitest

```
{
  "full_vitest": {
    "passed": 1808,
    "failed": 0,
    "skipped": 131,
    "files_passed": 191,
    "files_skipped": 13,
    "files_failed": 0
  },
  "skipped_files": [
    {
      "file": "__tests__/oa/finops/postgres/t1.ledger.integration.test.ts",
      "tests": 10
    },
    {
      "file": "__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts",
      "tests": 7
    },
    {
      "file": "__tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts",
      "tests": 4
    },
    {
      "file": "__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts",
      "tests": 3
    },
    {
      "file": "__tests__/oa/finops/postgres/t3.alert-review.integration.test.ts",
      "tests": 7
    },
    {
      "file": "__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts",
      "tests": 4
    },
    {
      "file": "__tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts",
      "tests": 4
    },
    {
      "file": "__tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts",
      "tests": 14
    },
    {
      "file": "__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts",
      "tests": 8
    },
    {
      "file": "__tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts",
      "tests": 16
    },
    {
      "file": "__tests__/oa/finops/postgres/t7.rollout.integration.test.ts",
      "tests": 12
    },
    {
      "file": "__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts",
      "tests": 19
    },
    {
      "file": "__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts",
      "tests": 23
    }
  ],
  "cause": "describe.skip when DATABASE_URL unset \u2014 FinOps Postgres integration, never Neon, not Pre-M6 critical path",
  "touches_pre_m6_critical_path": false,
  "blocking_for_final_c9": false
}

```

Skip cause: `describe.skip` when `DATABASE_URL` unset. FinOps Postgres integration (never Neon). **Does not touch Pre-M6 critical path.** Non-blocking for Final C9.

No Pre-M6 critical skipped tests.

## 19. Typecheck / lint / build

All PASS (commands 04/05/06).

## 20. R1/R2/R3 proof matrix

| item | evidence | result |
|---|---|---|
| R1 OFF-by-default | T-R1-OFF | PASS |
| R1 construct ON simulated no launch | T-R1-CONSTRUCT | PASS |
| R2 40-hex server pin | T-R2-HEAD | PASS |
| R2 hostile client SHA ignored | T-R2-HOSTILE | PASS |
| R2 invalid HEAD fail-closed | T-R2-INVALID | PASS |
| R3 pending no Evidence | T-R3-PENDING | PASS |
| R3 success E2E chain | T-R3-E2E-SUCCESS | PASS |
| R3 non-zero no Evidence success | T-R3-NONZERO | PASS |
| R3 timeout no Evidence success | T-R3-TIMEOUT | PASS |
| R3 no awaitCompletion fail-closed | T-R3-NO-AWAIT | PASS |
| R3 provider failure keeps Evidence/RB, no invented Decision | T-R3-PROVIDER-FAILURE | PASS |
| R3 deferred async same Attempt / one launch | T-R3-ASYNC-CONTINUATION | PASS |

## 21. Negative authority matrix

| id | expectation | evidence | result | impact |
|---|---|---|---|---|
| N1 | no HumanDecision required => no execution | e2e N2 NO_GO blocks prepare; f3 AC-F3-FIX-06/07; qa-pre-m6 T9 | PASS | blocking if fail |
| N2 | Confirmation / Gate D govern bounded path | amend T3 GATE_D_REQUIRED launch=0; e2e N3 Attempt 0 until confirm | PASS | blocking if fail |
| N3 | invalid/absent baseHeadSha fail-closed | T-R2-INVALID | PASS | blocking if fail |
| N4 | realBoundary absent fail-closed no fixture fallback | amend T4 REAL_BOUNDARY_REQUIRED | PASS | blocking if fail |
| N5 | awaitCompletion absent fail-closed | T-R3-NO-AWAIT | PASS | blocking if fail |
| N6 | LAUNCHED/processRef required | completeBoundedReadOnlyLaunch fail-closed + T-R3-ASYNC frontiers 1 CREATED/1 LAUNCHED; m4SpawnAckLifecycle | PASS (indirect+code; no extra test added) | non-blocking given ACK writes LAUNCHED |
| N7 | nonzero => failure, no success Evidence | T-R3-NONZERO; browser N7 harness-seeded failed | PASS | blocking if fail |
| N8 | timeout => no success Evidence | T-R3-TIMEOUT; browser N8 harness-seeded | PASS | blocking if fail |
| N9 | provider failure keeps Evidence/RB, no implicit Decision | T-R3-PROVIDER-FAILURE | PASS | blocking if fail |
| N10 | hostile client fields ignored | T-R2-HOSTILE; f3 AC-F3-FIX-05 | PASS | blocking if fail |
| N11 | fixture default when REAL flag OFF | T-R1-OFF; browser happy path fixture-safe succeeded | PASS | blocking if fail |
| N12 | Recommendation executionAuthority=false decisionCreated=false | T-R3-E2E-SUCCESS / ASYNC; amend T8/T12; e2e PAS UNE DÉCISION | PASS | blocking if fail |

No critical-path MISSING that would force INCOMPLETE.

## 22. Persistence / recovery matrix

| artifact | durable? | evidence | note |
|---|---|---|---|
| Project | yes Product SQLite | create via UI + reload | isolated DB 827392 bytes after E2E |
| LPS | yes | F10 recovery LPS visible | |
| HumanDecision / DecisionBasis | yes | post-GO tests + F5 capture | |
| ExecutionContract | yes | F6 resolved successor | |
| Attempt | yes | F7 succeeded | |
| Evidence / ReviewBundle | yes | F7 ids visible; Vitest rehydrate | |
| Recommendation analysis | yes after Evidence | F8; rehydrateEvidenceOutcomeFromLps | |
| Conversation / Proposal | **process-local** | F10 / N12 empty composer after reload | **G-UX-09 KEEP RESERVE** — not closed |
| History | yes | F9 panel | |

## 23. Browser scenarios

### UI-DRIVEN (with marker-seeded fake conversation)

Route `/studio` → `/studio/projects/new` → `/studio/projects/[id]`:
- create project (form fields + submit) — UI-DRIVEN
- send `__F2_GATED_STANDARD__` — MARKER-SEEDED fake Nora qualification
- click GO — UI-DRIVEN HumanDecision
- click prepare — UI-DRIVEN ExecutionContract
- click confirm/execute — UI-DRIVEN Confirmation + fixture Attempt
- History visible; reload recovery — UI-DRIVEN

Proven in `e2e/studio-option-a.spec.ts` F1→F11 (this campaign 2026-08-17T09:50:56Z).

### HARNESS-SEEDED

`e2e/studio-option-a-negative-states.spec.ts` via `/api/e2e/option-a-qa-scenario`:
failed / timeout / cancelled / evidence_missing / recommendation_stale / rehydrate_read_failure.
Control 404 without `SFIA_STUDIO_E2E_QA_CONTROL`.

These are **not** claimed as organic user-triggered Cursor REAL failures.

### DOMAIN/INTEGRATION-PROVEN (not browser)

R1/R2/R3 REAL wiring including async continuation.

### NOT PROVEN IN BROWSER

- live OpenAI Nora (forbidden)
- Cursor REAL process (forbidden)
- organic un-marked qualification without `__F2_*`
- Figma pixel alignment (no MCP comparison this cycle)

## 24. Screenshots (this campaign)

Copied from Playwright captures dated 2026-08-17T09:50:56Z:

```
[
  {
    "file": "01-studio-home.png",
    "bytes": 147481,
    "sha256": "10999575a7d8ba84422d464f1890dae52611863c27c3b19dcc601da5d41b7d9e",
    "copied_at": "2026-08-17T11:51:36.902239+02:00",
    "campaign": "final-cycle-9-deterministic-qa"
  },
  {
    "file": "02-new-project.png",
    "bytes": 66447,
    "sha256": "b833b625d3f6e66097028772a49e363aa079d8148adc548e34dd079a2dd4816d",
    "copied_at": "2026-08-17T11:51:36.902769+02:00",
    "campaign": "final-cycle-9-deterministic-qa"
  },
  {
    "file": "03-project-workspace.png",
    "bytes": 151252,
    "sha256": "158eee9ffaf08ca7d7645e1479642b8aebaf0a5d60f16acb5f783a66c41e945a",
    "copied_at": "2026-08-17T11:51:36.903044+02:00",
    "campaign": "final-cycle-9-deterministic-qa"
  },
  {
    "file": "04-decision-contract.png",
    "bytes": 426380,
    "sha256": "f30c5b4ec7b778001eaef1d3220df26b9c7782e50f24aec36de9cf9b8b7d35d1",
    "copied_at": "2026-08-17T11:51:36.903453+02:00",
    "campaign": "final-cycle-9-deterministic-qa"
  },
  {
    "file": "05-attempt-evidence.png",
    "bytes": 462167,
    "sha256": "a2fa2db9da1ad1842ed7471305cbb4bde77b4466c6d4537a61497e6223b9cdcc",
    "copied_at": "2026-08-17T11:51:36.903867+02:00",
    "campaign": "final-cycle-9-deterministic-qa"
  },
  {
    "file": "06-reloaded-project.png",
    "bytes": 303748,
    "sha256": "584c7d0024d0665d3a7c989f5148425ff75e698784253805b66ddf5f9177cd80",
    "copied_at": "2026-08-17T11:51:36.904191+02:00",
    "campaign": "final-cycle-9-deterministic-qa"
  }
]

```

| file | route/state | proves | does NOT prove |
|---|---|---|---|
| 01-studio-home.png | /studio F1 | clean-slate home | Figma delta |
| 02-new-project.png | /studio/projects/new | New Project intention (CS-R19) | every field regression vs Figma |
| 03-project-workspace.png | /studio/projects/[id] F2 | Project+LPS+assistant | durable conversation |
| 04-decision-contract.png | F6 | resolved contract awaiting Confirmation | REAL launch |
| 05-attempt-evidence.png | F7 | fixture Attempt succeeded + Evidence/RB | Cursor REAL |
| 06-reloaded-project.png | F10 | recovery process-local cleared, LPS retained | Proposal persistence (G-UX-09) |

Source captures also: `.tmp-sfia-review/runtime-captures/cycle-9-rerun/` last 14 manifest lines:

```
{"id":"R01-F1-Projects","file":"R01-F1-Projects.png","screen":"F1","state":"Projects entry","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:56.611Z","sha256":"10999575a7d8ba84422d464f1890dae52611863c27c3b19dcc601da5d41b7d9e","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R02-F2-Project-1440","file":"R02-F2-Project-1440.png","screen":"F2","state":"Project principal conversation + LPS @1440","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:57.111Z","sha256":"158eee9ffaf08ca7d7645e1479642b8aebaf0a5d60f16acb5f783a66c41e945a","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R03-F3-Project-1280","file":"R03-F3-Project-1280.png","screen":"F3","state":"Project principal @1280","viewport":{"width":1280,"height":900},"timestamp":"2026-08-17T09:50:57.163Z","sha256":"c6ad76d84697fad2f9b9e0a378e5ec85e9ea231b1eecf1cfc7d2536c338f4a3f","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R04-F4-Qualification","file":"R04-F4-Qualification.png","screen":"F4","state":"Qualification + Proposal ≠ HumanDecision (gated Standard/Light)","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:57.326Z","sha256":"b838a72ae4618513b785d2ee2b0780c1c4bc001e24d7063744e84494dbb66527","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R05-F5-HumanDecision","file":"R05-F5-HumanDecision.png","screen":"F5","state":"HumanDecision GO recorded","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:57.498Z","sha256":"e8501f634696da135d82150b85bb54e1d613a0baceb0e2a1747f14b57ab9a491","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R06-F6-Resolved-Contract","file":"R06-F6-Resolved-Contract.png","screen":"F6","state":"Durable resolved successor awaiting Confirmation","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:57.652Z","sha256":"f30c5b4ec7b778001eaef1d3220df26b9c7782e50f24aec36de9cf9b8b7d35d1","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R07-F7-Succeeded","file":"R07-F7-Succeeded.png","screen":"F7","state":"Fixture-safe Attempt succeeded + Evidence + ReviewBundle","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:57.835Z","sha256":"a2fa2db9da1ad1842ed7471305cbb4bde77b4466c6d4537a61497e6223b9cdcc","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R08-F8-Recommendation-Current","file":"R08-F8-Recommendation-Current.png","screen":"F8","state":"Recommendation current; executionAuthority false","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:57.924Z","sha256":"3a0ea9d62ba783255c57eb2103b2f17141dfc426dd1b3ad2fc0c0e92a8a6e5d5","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R10-F9-History","file":"R10-F9-History.png","screen":"F9","state":"History durable readback after execution","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:58.024Z","sha256":"879e6b270603fbf16418ee6f696597095e94bb8efaab0745530faef3ffbb8148","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R11-F10-Recovery","file":"R11-F10-Recovery.png","screen":"F10","state":"Recovery — process-local cleared; durable LPS retained","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:58.467Z","sha256":"584c7d0024d0665d3a7c989f5148425ff75e698784253805b66ddf5f9177cd80","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R12-F11-LPS-Closed-1024","file":"R12-F11-LPS-Closed-1024.png","screen":"F11A","state":"Responsive @1024 LPS closed/default","viewport":{"width":1024,"height":800},"timestamp":"2026-08-17T09:50:58.520Z","sha256":"573f3f1afbeca844bdb931506d950099806f7f3875386f105b52b0064f4cebec","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R13-F11-LPS-Open-1024","file":"R13-F11-LPS-Open-1024.png","screen":"F11B","state":"Responsive @1024 LPS drawer open","viewport":{"width":1024,"height":800},"timestamp":"2026-08-17T09:50:58.628Z","sha256":"66728e2ce3ae6da77013e86276d217cc032a59d341784e7cc101d06db24ba45a","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R14-F11-Sub768","file":"R14-F11-Sub768.png","screen":"F11-mobile","state":"Sub-768 conversation full width; composer accessible","viewport":{"width":390,"height":844},"timestamp":"2026-08-17T09:50:58.679Z","sha256":"8411e5b97ea1455e342d11c9f9ff3f5e82a4bdb780c83cdc5ecbaa583e3eb9ac","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
{"id":"R06b-Legacy-STALE-Preserved","file":"R06b-Legacy-STALE-Preserved.png","screen":"F6-neg","state":"Legacy Proposal prepare STALE after GO LPS advance","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-17T09:50:59.512Z","sha256":"d64428bbb1dc49fc942aaccf4b067822c2a327897dc396281667321bfc470867","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT"}
```

## 25. Runtime logs

- Playwright: `commands/07-playwright-option-a.log` (17 passed, 29.0s)
- Vitest/typecheck/lint/build: `commands/0-4-*.log`
- Isolated DB: `runtime/qa-product.sqlite`

## 26. G-UX-11 assessment

**G-UX-11 DETERMINISTIC BROWSER EXIT PROOF = SATISFIED CANDIDATE**

Basis: existing Playwright F1→F11 UI journey on isolated DB, fake provider, REAL flags OFF, screenshots+assertions this campaign.

Limits (honest): conversation is FakeProvider + `__F2_GATED_STANDARD__` marker (deterministic, not live Nora). Attempt in browser happy path is **fixture-safe**, not Cursor REAL (REAL remains Vitest-simulated). G-UX-11 is **candidate** pending ChatGPT/Morris. Not CLOSED automatically.

## 27. Reserves with severity

| reserve | severity | blocking Final C9 PASS? |
|---|---|---|
| G-UX-08 OPEN/DEFERRED (AMEND in-place) | nonblocking if disclosed | no — e2e asserts deferred message |
| G-UX-09 Conversation/Proposal process-local | KEEP RESERVE | no — recovery honesty proven |
| historical studio.m4.real_off naming | historical | no |
| old C8 canonical Product DB pollution | historical, untouched | no |
| FULL REAL PRODUCT LOOP not proven | governance | no — anti-claim |
| marker-seeded fake qualification | campaign limit | no if disclosed |
| browser happy path uses fixture Attempt not Cursor REAL | expected ZERO REAL | no |

## 28. Reproducibility

Replay (from `projects/sfia-studio/app`):

```
NODE_ENV=test SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL= OPS1_CONVERSATION_PROVIDER=fake OPENAI_API_KEY= npm run test
npx tsc --noEmit && npm run lint && npm run build

# browser — isolated DB, do not reuse a server bound to canonical sqlite
SFIA_STUDIO_PRODUCT_DB_PATH=<abs>/final-cycle-9-deterministic-qa/runtime/qa-product.sqlite \
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 SFIA_STUDIO_E2E_QA_CONTROL=1 \
SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL= OPS1_CONVERSATION_PROVIDER=fake OPENAI_API_KEY= \
npx playwright test e2e/studio-option-a.spec.ts e2e/studio-option-a-negative-states.spec.ts e2e/studio-option-a-clean-slate-captures.spec.ts
```

## 29. ZERO REAL proof

- OpenAI live this pass: 0 (fake provider; placeholder key only in Playwright webServer)
- Cursor REAL / NodeCursorProcessRunner live: 0
- runtime REAL git worktree: 0
- TestOnly/Fake doubles not counted as REAL

## 30. Source mutations this pass

**0** (manifests equal). Only `.tmp-sfia-review/**` written.

## 31. Project git mutations

commit/push/PR/merge = **0**

## 32. Claims / anti-claims

Mandatory:

M1→M5 FUNCTIONAL BACKBONE VALIDATED UNDER DETERMINISTIC QA, WITH SELECTIVE REAL BOUNDARY PROOFS; FULL REAL PRODUCT LOOP NOT YET PROVEN.

Even in PASS:
- Pre-M6 = NON COMPLETE
- UAT = NOT READY
- M6 = NON AUTHORIZED
- Runtime v3 = NON ADOPTED
- FULL REAL PRODUCT LOOP = NOT YET PROVEN
- READY FOR REAL = FALSE
- G-UX-11 = SATISFIED CANDIDATE (not CLOSED)

Forbidden: REAL PRODUCT VALIDATED; FULL REAL PRODUCT LOOP PROVEN; READY FOR REAL; READY FOR UAT; PRE-M6 COMPLETE; G-UX-11 CLOSED automatically; M6 AUTHORIZED; runtime v3 ADOPTED; production ready; no bugs; full coverage; implicit GO FIRST REAL.

## 33. Verdict

**PASS — FINAL CYCLE 9 DETERMINISTIC QA VALIDATED CANDIDATE**

CLEAN-SLATE PRE-M6 PRODUCT JOURNEY PROVEN UNDER DETERMINISTIC BROWSER/QA
R1/R2/R3 WIRING REGRESSION PASS
NEGATIVE AUTHORITY PATHS PASS
ZERO REAL EXECUTED
READY FOR MORRIS DECISION ON FIRST REAL PRODUCT LOOP

**G-UX-11 DETERMINISTIC BROWSER EXIT PROOF = SATISFIED CANDIDATE**

NOT READY FOR REAL.

## 34. Next Morris gate (NOT executed)

MORRIS DECISION ON FIRST REAL PRODUCT LOOP

Distinct GO required. No `SFIA_STUDIO_CURSOR_REAL=1`. No OpenAI live. No Cursor REAL.

## 35. Campaign artifacts index

- `.tmp-sfia-review/final-cycle-9-deterministic-qa/candidate-pre.manifest`
- `.tmp-sfia-review/final-cycle-9-deterministic-qa/candidate-post.manifest`
- `.tmp-sfia-review/final-cycle-9-deterministic-qa/candidate-source-drift.diff`
- `.tmp-sfia-review/final-cycle-9-deterministic-qa/commands/`
- `.tmp-sfia-review/final-cycle-9-deterministic-qa/screenshots/`
- `.tmp-sfia-review/final-cycle-9-deterministic-qa/runtime/qa-product.sqlite`
