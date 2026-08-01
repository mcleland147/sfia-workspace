# SFIA Review Pack — Full
# PR #297 V3.1-D1 Capitalization — Source branch cleanup

## Meta
- Date/heure/fuseau: 2026-08-01 09:27:09 CEST (+0200)
- Niveau: Full — obligatoire
- Worktree principal: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
- MERGE_SHA: e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## Gate Morris (complet)
GO CLEANUP PR #297 SOURCE BRANCH IN PRIMARY WORKTREE SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
USE VERIFIED POST-MERGE CLEANUP PLAN —
PRESERVE ALL .TMP-SFIA-REVIEW EVIDENCE —
SWITCH PRIMARY WORKTREE OFF THE SOURCE BRANCH —
SYNCHRONIZE LOCAL MAIN BY FAST-FORWARD ONLY TO e1befcb80ed5e3c789a7de9036a8207d6b3e6771 —
DO NOT REMOVE PRIMARY WORKTREE —
DELETE LOCAL SOURCE BRANCH WITH git branch -d ONLY —
DELETE REMOTE SOURCE BRANCH WITHOUT FORCE —
PRESERVE ALL OTHER WORKTREES AND THE SFIA REVIEW HANDOFF BRANCH —
VERIFY MAIN BRANCHES WORKTREES HANDOFF AND ACCEPTED MINOR RESERVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

Date/heure/fuseau du GO : 2026-07-31 09:54 CEST (+0200)

## Cycle / profil / typologie / CKC
- Cycle 14 — Post-merge (cleanup borné)
- Profil Standard · Typologie DOC · L3 borné
- CKC method-candidate Léger/P2 ; fallback synthetic map + §4.14 ; executionAuthority=false
- Risque principal: perte de preuves, remove du primaire, suppression non intégrée
- Limite: GO Morris explicite uniquement

## Handoff source
- tip attendu 0fe120a… / blob e7f0e56…
- tip distant démarrage 24987074… AHEAD (EventOps×3) — expected tip is ancestor — NOT DIVERGED
```
HANDOFF_STATUS=AHEAD_NOT_DIVERGED
expected_tip=0fe120a31986ef01740b75ef3d39fb8285e68432
expected_blob=e7f0e566ec01873786a987003e6440579eb2b450
current_tip=24987074f4aa728cff616efa927ca016bc124831
current_blob=3b3fa9057c6dbae4a9f3e8ffad9a1bacc7c43eac
expected_is_ancestor=YES
commits_ahead:
2498707 docs(review-handoff): align eventops poc slice 01 handoff metadata
aa298a0 docs(review-handoff): finalize eventops poc visible slice 01 handoff section
738723d docs(review-handoff): publish eventops poc visible slice 01 review

```

## PR / merge / CI
- PR #297 MERGED mergeCommit e1befcb80ed5e3c789a7de9036a8207d6b3e6771
- CI 30612872178 completed/success on e1befcb80ed5e3c789a7de9036a8207d6b3e6771
- comments/reviews []
```json
{
  "number": 297,
  "url": null,
  "state": "MERGED",
  "isDraft": false,
  "mergedAt": "2026-07-31T07:27:13Z",
  "mergeCommit": {
    "oid": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771"
  },
  "changedFiles": 1,
  "additions": 436,
  "deletions": 0
}
```

## Réserve
INHERITED-R-01 ACCEPTED — STILL TRACEABLE — NOT LIFTED — NON-BLOCKING

## Git Truth initial
```
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
origin/cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
L/R main...origin/main=0	2
L/R origin/cap...HEAD=0	0
L/R origin/cap...origin/main=0	1
ancestor src->origin/main: YES
=== DIFF CAP..MAIN ===
=== STATUS NON-TMP ===
(none)
=== STAGED ===
=== WORKTREE COUNT ===
77
=== MAIN CHECKOUTS ===
main checkout count: 0
=== PRUNE DRY-RUN ===
=== LS-REMOTE ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771	refs/heads/main
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
24987074f4aa728cff616efa927ca016bc124831	refs/heads/sfia/review-handoff
=== GH AUTH ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## Inventaire complet des preuves initiales
- count: 261
- manifesto path: .tmp-sfia-review/pr-297-cleanup-tmp-evidence-before.json
```json
[
  {
    "path": ".tmp-sfia-review/MERGE_SHA.txt",
    "size": 41,
    "sha256": "f9c1afe43b66d3463e896da89c62474e7da019a78887e1fec4d99f0a93e79b4e"
  },
  {
    "path": ".tmp-sfia-review/archive-comparison.txt",
    "size": 1875,
    "sha256": "30c89806c6be7b956d6de50a4d187e073e35ad5c75e8ec8ab250129d9c8757bc"
  },
  {
    "path": ".tmp-sfia-review/archive-source-sha256.txt",
    "size": 315,
    "sha256": "d83e1c542202ef6eb8b3e1d6d222ade1d94e830d86d9aabb1d2e28a6483ac52c"
  },
  {
    "path": ".tmp-sfia-review/archive-target-sha256.txt",
    "size": 331,
    "sha256": "c74c538112fc6f3f74951f90b011b6c3c7e5cc63ef4da1826fbe23f85044bf5e"
  },
  {
    "path": ".tmp-sfia-review/before/08-implementation-backlog-and-slicing.md",
    "size": 2626,
    "sha256": "19e0d97eb72fa0b1fdacdfa25d8372fdf673faae3cda3a9cd0b1455281879513"
  },
  {
    "path": ".tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md",
    "size": 24260,
    "sha256": "76ae09ac4529a7740a3348961fa29f55785ef33d408bbccd927faee6e22d0014"
  },
  {
    "path": ".tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md",
    "size": 21068,
    "sha256": "fc690f926869468909e889607769f1222ced2ecac36a7192db21532087b594a7"
  },
  {
    "path": ".tmp-sfia-review/before/README.md",
    "size": 5491,
    "sha256": "0b1ac441232848e2067fe218590e4bff9837012116fcebe85aeda3eebcb7c731"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/01-qa-validation-report.md",
    "size": 13062,
    "sha256": "9ccfe0465fcc0ca27eaec43ce39a88cc1d386bec6132c8bb190cccf131a734a6"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md",
    "size": 2685,
    "sha256": "51ccfc509b33ae4462cbefeaf1ca63d7d63e9389fc0fb746cea763a58f5c6261"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md",
    "size": 24676,
    "sha256": "d0d3c93aecb10bd40a5a20e66c125a64534d6152af253f98530024a6d99f730b"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md",
    "size": 21453,
    "sha256": "cc85072959c0441e6345d66d0c9e7d42375da4e04cd38223978b67597e5210fa"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts",
    "size": 22559,
    "sha256": "719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/cycleTypeCatalog.ts",
    "size": 17372,
    "sha256": "18d71525d271bcdcd48edd8d7ed0970f33a613a3e1d0b1247552ec28baa99a6d"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/d1-README.md",
    "size": 6240,
    "sha256": "0a25a41573708b735cd5a23db618422cb75c44c5624445f8b206abc864eb7cfc"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/framing-README.md",
    "size": 2822,
    "sha256": "ddcf2b3a0a5e36480ef1469d7ecd2a8a0fd14ed6cc035d4d2a4234bc17be6fae"
  },
  {
    "path": ".tmp-sfia-review/before-corrective/index.ts",
    "size": 6541,
    "sha256": "ee80c12e213480b2dd374216b3001424583cbdb3321b054472cf42eab8279c17"
  },
  {
    "path": ".tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md",
    "size": 2095,
    "sha256": "31e7a267450c85f3070241db57c0db25fbddcdba7698268b5cc7f3f7f733ed4a"
  },
  {
    "path": ".tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md",
    "size": 24676,
    "sha256": "d0d3c93aecb10bd40a5a20e66c125a64534d6152af253f98530024a6d99f730b"
  },
  {
    "path": ".tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md",
    "size": 19886,
    "sha256": "273bfcc859ba1ab9525d19301429f2f180d56a004ae6ed0c3edf37c579c41031"
  },
  {
    "path": ".tmp-sfia-review/before-d1/README.md",
    "size": 3156,
    "sha256": "c70fe794397540c44214ea1674b353804aac4fb0edcb378cd19f48560173d9b1"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md",
    "size": 13062,
    "sha256": "9ccfe0465fcc0ca27eaec43ce39a88cc1d386bec6132c8bb190cccf131a734a6"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md",
    "size": 5820,
    "sha256": "1c9243fb9ab7a026af3aec7400ffdaded629381e85008f70d100e2f69588ee5e"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md",
    "size": 7343,
    "sha256": "5bbaeb5992a392b8edfc6e453da64fa5826feaf2837f37a9e7de541e9fd289bc"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md",
    "size": 2580,
    "sha256": "26034cd0593418b4d700052b2bbadceb32b50880c8497b485c8f9223be9163fd"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md",
    "size": 24676,
    "sha256": "d0d3c93aecb10bd40a5a20e66c125a64534d6152af253f98530024a6d99f730b"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md",
    "size": 22143,
    "sha256": "7f30c851e0fc644a4b187a67a97089d5305c943f64336d4b5c2f5c90d3fb18c7"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts",
    "size": 22559,
    "sha256": "719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts",
    "size": 20792,
    "sha256": "f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/d1-README.md",
    "size": 7180,
    "sha256": "1699d399d7824deb9ba69c8608030eb1d611c597e8bc80dcd6aa65411964d060"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/framing-README.md",
    "size": 2307,
    "sha256": "afa78405b8ed9d53330b58a437e02e02430f0c193608a1b26f52a6c68ecf42f6"
  },
  {
    "path": ".tmp-sfia-review/before-pr-readiness/index.ts",
    "size": 6541,
    "sha256": "ee80c12e213480b2dd374216b3001424583cbdb3321b054472cf42eab8279c17"
  },
  {
    "path": ".tmp-sfia-review/before-publication/01.md",
    "size": 13062,
    "sha256": "9ccfe0465fcc0ca27eaec43ce39a88cc1d386bec6132c8bb190cccf131a734a6"
  },
  {
    "path": ".tmp-sfia-review/before-publication/02.md",
    "size": 5820,
    "sha256": "1c9243fb9ab7a026af3aec7400ffdaded629381e85008f70d100e2f69588ee5e"
  },
  {
    "path": ".tmp-sfia-review/before-publication/03.md",
    "size": 7343,
    "sha256": "5bbaeb5992a392b8edfc6e453da64fa5826feaf2837f37a9e7de541e9fd289bc"
  },
  {
    "path": ".tmp-sfia-review/before-publication/04.md",
    "size": 8749,
    "sha256": "8526713ea0cad67d8e23f4de34297585679c81738ecea51c6050b929ac5fa4b4"
  },
  {
    "path": ".tmp-sfia-review/before-publication/08.md",
    "size": 2760,
    "sha256": "32ab480dd12ff324c8d3e1ffc4b82fee894d0b165d803c9080a9123fc4704444"
  },
  {
    "path": ".tmp-sfia-review/before-publication/12.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before-publication/13.md",
    "size": 24676,
    "sha256": "d0d3c93aecb10bd40a5a20e66c125a64534d6152af253f98530024a6d99f730b"
  },
  {
    "path": ".tmp-sfia-review/before-publication/14.md",
    "size": 22286,
    "sha256": "15e6836e071622adfacfe4322a567062124a63bf3ac323160962f6d9db69be14"
  },
  {
    "path": ".tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts",
    "size": 22559,
    "sha256": "719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1"
  },
  {
    "path": ".tmp-sfia-review/before-publication/cycleTypeCatalog.ts",
    "size": 20792,
    "sha256": "f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682"
  },
  {
    "path": ".tmp-sfia-review/before-publication/d1-README.md",
    "size": 7311,
    "sha256": "2366fede29a4b32556af739983fda3cc048911ac482fbfce5e81f9fea89dbed1"
  },
  {
    "path": ".tmp-sfia-review/before-publication/framing-README.md",
    "size": 2279,
    "sha256": "c00961c737cf4530b8eaf248bde8f542cc29f0da025ccd095d50217891bc0211"
  },
  {
    "path": ".tmp-sfia-review/before-publication/index.ts",
    "size": 6541,
    "sha256": "ee80c12e213480b2dd374216b3001424583cbdb3321b054472cf42eab8279c17"
  },
  {
    "path": ".tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md",
    "size": 1773,
    "sha256": "0a9046edfc543f97ce423ae9f06ba934c8e35dfb70126b72fb82b559b7d9150c"
  },
  {
    "path": ".tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md",
    "size": 24676,
    "sha256": "d0d3c93aecb10bd40a5a20e66c125a64534d6152af253f98530024a6d99f730b"
  },
  {
    "path": ".tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md",
    "size": 20648,
    "sha256": "10a2173d52da1fd5fdef6d263007fbb8426e19f34a87db93a16f8e654f179162"
  },
  {
    "path": ".tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts",
    "size": 11381,
    "sha256": "11ec643322ffba4a748d9deaf546376fcd71654bc128ee1f25effb46f18b3366"
  },
  {
    "path": ".tmp-sfia-review/before-qa/cycleTypeCatalog.ts",
    "size": 17372,
    "sha256": "18d71525d271bcdcd48edd8d7ed0970f33a613a3e1d0b1247552ec28baa99a6d"
  },
  {
    "path": ".tmp-sfia-review/before-qa/d1-README.md",
    "size": 5317,
    "sha256": "be4def29d41094cf9b9554134a11beeb9730b23cfac95b0f9a4265578789b2a0"
  },
  {
    "path": ".tmp-sfia-review/before-qa/framing-README.md",
    "size": 2492,
    "sha256": "c8d9ea7ab4ec6aa3c27c901a4beed7acdd55b786440568ef10571ac7db6418e9"
  },
  {
    "path": ".tmp-sfia-review/before-qa/index.ts",
    "size": 6541,
    "sha256": "ee80c12e213480b2dd374216b3001424583cbdb3321b054472cf42eab8279c17"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/01-qa-validation-report.md",
    "size": 13062,
    "sha256": "9ccfe0465fcc0ca27eaec43ce39a88cc1d386bec6132c8bb190cccf131a734a6"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md",
    "size": 5820,
    "sha256": "1c9243fb9ab7a026af3aec7400ffdaded629381e85008f70d100e2f69588ee5e"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md",
    "size": 2838,
    "sha256": "a7eecc8d3399c55535c1f2cbc9f7c112c3e618c9f52c084622c56d003af98cb1"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md",
    "size": 20693,
    "sha256": "1398d604c83a3fbd7dc35551e148b47e1c1e51456780aa5c49ff7c5caa62ca87"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md",
    "size": 24676,
    "sha256": "d0d3c93aecb10bd40a5a20e66c125a64534d6152af253f98530024a6d99f730b"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md",
    "size": 21666,
    "sha256": "34993c429331c2d2513d925908becf2c88ba96c88dc7c307a4adb08fa0fff6f6"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts",
    "size": 22559,
    "sha256": "719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts",
    "size": 20792,
    "sha256": "f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/d1-README.md",
    "size": 6747,
    "sha256": "4806d4ec96e555426d072d98fcbf4f3ae22233cdbeb0319646fef3987b1e6db3"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/framing-README.md",
    "size": 2494,
    "sha256": "b25223256f7c02cfb8b7287b3f38fe860ae5a8f2791276302f15a1999d54cf86"
  },
  {
    "path": ".tmp-sfia-review/before-revalidation/index.ts",
    "size": 6541,
    "sha256": "ee80c12e213480b2dd374216b3001424583cbdb3321b054472cf42eab8279c17"
  },
  {
    "path": ".tmp-sfia-review/cap-truth.txt",
    "size": 645,
    "sha256": "2bf60ee80a6eab6bed6f6641d036dc52eb70b660b70210ee28fc19620684820d"
  },
  {
    "path": ".tmp-sfia-review/chatgpt-review.md",
    "size": 685834,
    "sha256": "7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d"
  },
  {
    "path": ".tmp-sfia-review/ci-jobs.json",
    "size": 1303,
    "sha256": "7cdd9baf5d8406ed86ce95a585abf8718acd122d6fd3747ef6d5ef4b8f1d7b96"
  },
  {
    "path": ".tmp-sfia-review/ci-run.json",
    "size": 4486,
    "sha256": "c54c213bd6de9f0779521c12ebcd5ed7ac8c574bff439a036ff593555a0a0727"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a2/01-initial.png",
    "size": 162653,
    "sha256": "115cb3638ff44db471e4b9de0e82afc52c8014aba872d5ea38a91dd0bddb756e"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a2/02-validation-errors.png",
    "size": 156000,
    "sha256": "b43536125dc5bb52fa1676389ac6ef43f5649c043422909ca0fd5e7ed8991197"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png",
    "size": 171185,
    "sha256": "7def6c798c4c1ccd3f69d60fb3d1a979f4a65f0a896d49862576325fbf0db821"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png",
    "size": 156612,
    "sha256": "0696d8508e8f49205dd6795c9c0009e1253a5bebbee611ff7a780b265f5a03d3"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png",
    "size": 159372,
    "sha256": "8a8124bbcc3f1b6b5c7eedab35e9d4ee7578368cd46d7874ec97af605c666402"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png",
    "size": 416505,
    "sha256": "e43ee9c8b298f901e050c75d69e433c90482e742e6ae7005f8596e3f54f08448"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a3/04-create-success.png",
    "size": 423379,
    "sha256": "8b8666ec618eb73e1f939a498f5e7c36e4fe97a89a178ed908a8d04d5e732a2d"
  },
  {
    "path": ".tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png",
    "size": 451223,
    "sha256": "bff616a9a4de23476ee6b594efdcc2ff08dfe4f4e684d5e475de072f9f9ad228"
  },
  {
    "path": ".tmp-sfia-review/final-git-state.txt",
    "size": 366,
    "sha256": "efd0fb65da51131d5088801e01bcb25a31177a0cc8c98e49d25fc5e2611b38b7"
  },
  {
    "path": ".tmp-sfia-review/framing-README-main.md",
    "size": 6668,
    "sha256": "19be19b5b4ed8b1db524d7a759110ffb5fe7f206a9682631715d66421e882856"
  },
  {
    "path": ".tmp-sfia-review/framing-README-pr.md",
    "size": 2279,
    "sha256": "c00961c737cf4530b8eaf248bde8f542cc29f0da025ccd095d50217891bc0211"
  },
  {
    "path": ".tmp-sfia-review/local-numstat.txt",
    "size": 1702,
    "sha256": "90e30dcc6d4352a2dafd24699f832488cd905c413690b7c29a03a931227dcfeb"
  },
  {
    "path": ".tmp-sfia-review/main-worktree-inspection.txt",
    "size": 2236,
    "sha256": "4f6faed4228ad63f512f667829a8c2e439d01f1b065c840ee4df9f4af63f4b02"
  },
  {
    "path": ".tmp-sfia-review/main-worktree-status.txt",
    "size": 54,
    "sha256": "85745855a3cee7d82b882f3388a2cae16ef652bd5bbb1752b293c22e011ea871"
  },
  {
    "path": ".tmp-sfia-review/main-worktree-untracked-evidence.txt",
    "size": 5182,
    "sha256": "15bdc9ebd4b01c182afed82f9277b7959ea5da13b10fa331eb7ce508fe726ada"
  },
  {
    "path": ".tmp-sfia-review/merge-commit-source.txt",
    "size": 422,
    "sha256": "842a9dd18ca771ff130ff832ef3ac20237022003c475d48e2db157414581c161"
  },
  {
    "path": ".tmp-sfia-review/merge-readiness-truth.txt",
    "size": 527,
    "sha256": "77190eb0284d6a7ba2c6d231e2ea47864f09d3c61f7a6311dec33dd97459abfa"
  },
  {
    "path": ".tmp-sfia-review/merge-revalidation.txt",
    "size": 3251,
    "sha256": "49a27ae1ae3856d421faabfeb0975088fa31b8a04d6b9911b5b7bf439cd80548"
  },
  {
    "path": ".tmp-sfia-review/merge-truth.txt",
    "size": 678,
    "sha256": "2d1fbbf97f917cd528482af5a5b18cc80c677270c848cfe05ee1914bbfe2c298"
  },
  {
    "path": ".tmp-sfia-review/pr-296-after-api.json",
    "size": 21755,
    "sha256": "9091040a0598d3f3f4be219e09112ff2e79d9691ba5bf8b02e095cb4bda41346"
  },
  {
    "path": ".tmp-sfia-review/pr-296-after-body-metadata.json",
    "size": 9191,
    "sha256": "08279dd115859d3ad1226ca98bb699ef5c6a7b6e500104149dae98ac81b55cef"
  },
  {
    "path": ".tmp-sfia-review/pr-296-after-merge.json",
    "size": 8312,
    "sha256": "16bda7188851a95e5ea66ac2b0ef6d2a059eed6cefb91e26dacf43b0065f02a1"
  },
  {
    "path": ".tmp-sfia-review/pr-296-archive-and-cleanup-report.md",
    "size": 6513,
    "sha256": "227da35eb262aa3e5b431099b2063cb49cf51f90b893800eaf55518f57a5edeb"
  },
  {
    "path": ".tmp-sfia-review/pr-296-before-metadata.json",
    "size": 9189,
    "sha256": "f698181f54e302b4111a88334a0dc0b74f341f13529556204ffb61416da47934"
  },
  {
    "path": ".tmp-sfia-review/pr-296-before-view.json",
    "size": 9243,
    "sha256": "3952abb411d457cc9b8652b1afd1bf6e5466ceaef9d96164270279d41cd2e89a"
  },
  {
    "path": ".tmp-sfia-review/pr-296-before.json",
    "size": 20763,
    "sha256": "baa533d0d0449386a519bc8096841fc1683d1a3fa3411865fe00a1b2dcc8cddf"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-after.md",
    "size": 4203,
    "sha256": "d616fd5028f3b1a8de2f6efa3df8791ab7ca5e762ac082373fd4d48b3cd20571"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-api-json.md",
    "size": 4203,
    "sha256": "d616fd5028f3b1a8de2f6efa3df8791ab7ca5e762ac082373fd4d48b3cd20571"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-api-raw.md",
    "size": 4204,
    "sha256": "53e8a80a7f669cb95aa2dd4033a01c11a63a6bd5bb2dc3cb580ded683e4ed5f5"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-authorized.diff",
    "size": 390,
    "sha256": "c88a86f96e2d65d4cfae35cc9c82c5485121ef0727d39683df7a26ce400334fb"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-before-vs-remote-after.diff",
    "size": 401,
    "sha256": "76774ea88f2b482624d5bcd7530b1ec3e40373a08539c905727fa4a84b08fefc"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-before.md",
    "size": 4203,
    "sha256": "e02e5c54e5feef3f71dbf54b5e0a46cdff7e34768f39abc1613614e2904a938f"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-concurrent-check.md",
    "size": 4203,
    "sha256": "e02e5c54e5feef3f71dbf54b5e0a46cdff7e34768f39abc1613614e2904a938f"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-final.md",
    "size": 4203,
    "sha256": "d616fd5028f3b1a8de2f6efa3df8791ab7ca5e762ac082373fd4d48b3cd20571"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-hashes.txt",
    "size": 303,
    "sha256": "48015bb700a3d21974ec5b32a327ece16bd42a3b40cccc7a49a43ba79852d4f6"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-remote-after.md",
    "size": 4203,
    "sha256": "d616fd5028f3b1a8de2f6efa3df8791ab7ca5e762ac082373fd4d48b3cd20571"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-update-response.json",
    "size": 20757,
    "sha256": "85a38268b4ec23adca065628e45c09068efce8ab10d1d6906da7dcea3225efbf"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body-update.json",
    "size": 4356,
    "sha256": "5d11d5a524039d4dffd73252e65e01ad2153017a86acb16ddabdcc67ac56660d"
  },
  {
    "path": ".tmp-sfia-review/pr-296-body.md",
    "size": 4202,
    "sha256": "3cc623da80a46c28c24739f84c66aa98937c26898915a1f7ff2a1ae530bf8a1b"
  },
  {
    "path": ".tmp-sfia-review/pr-296-checks.json",
    "size": 0,
    "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  {
    "path": ".tmp-sfia-review/pr-296-checks.txt",
    "size": 375,
    "sha256": "9a8e5647a68541d377a8740f1ca87245992236e5ba75f307ec8d717ced670699"
  },
  {
    "path": ".tmp-sfia-review/pr-296-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-commits.txt",
    "size": 2421,
    "sha256": "6f562728174ffba42991d1ab6518aefcab906f14a76eead9b7b7c4d25e284e4d"
  },
  {
    "path": ".tmp-sfia-review/pr-296-concurrent-meta.json",
    "size": 160,
    "sha256": "6ea30991594921c3b90aad3c748d0eef779dfd068e6de422c913f5c851dc8273"
  },
  {
    "path": ".tmp-sfia-review/pr-296-concurrent.json",
    "size": 20763,
    "sha256": "baa533d0d0449386a519bc8096841fc1683d1a3fa3411865fe00a1b2dcc8cddf"
  },
  {
    "path": ".tmp-sfia-review/pr-296-diff-correspondence.txt",
    "size": 1178,
    "sha256": "41606b7545037cc65eae301c862172d363aa19f82bc7601999d32fbbfed554ce"
  },
  {
    "path": ".tmp-sfia-review/pr-296-fetch-main-attempt.txt",
    "size": 129,
    "sha256": "be0d33ec25d0d2bdf738f494e88670cb02c8cb080ed354ba0bd360d11f05aacd"
  },
  {
    "path": ".tmp-sfia-review/pr-296-files.txt",
    "size": 1625,
    "sha256": "ca315fcd3138df793595c06d8b1143b4928726fc3ee44546ac93f1fbc7360273"
  },
  {
    "path": ".tmp-sfia-review/pr-296-final-metadata.json",
    "size": 9192,
    "sha256": "e39df0011d7dca9414d6d3d2aef4e1d1f0decff6f5eee2d5e1420153e7551856"
  },
  {
    "path": ".tmp-sfia-review/pr-296-inline-comments-after.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-inline-comments-before.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-inline-comments-concurrent.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-issue-comments-after.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-issue-comments-before.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-issue-comments-concurrent.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-issue-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-jobs.json",
    "size": 6438,
    "sha256": "0486d32671bb1973ad9a865dce0782c1983ebe95867931d1bce928a3070de321"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-body-after.md",
    "size": 4197,
    "sha256": "c5a8f57f92af305b7c8527590557dcf024637e6e94461f3b2bd92e4833c55a33"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-body-authorized.diff",
    "size": 775,
    "sha256": "02e5defda719048983a91486cde26e20351b45d361a1d75caf3abf9bf2af1732"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-body-before.md",
    "size": 4203,
    "sha256": "d616fd5028f3b1a8de2f6efa3df8791ab7ca5e762ac082373fd4d48b3cd20571"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-body-concurrent.md",
    "size": 4203,
    "sha256": "d616fd5028f3b1a8de2f6efa3df8791ab7ca5e762ac082373fd4d48b3cd20571"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-body-final.md",
    "size": 4197,
    "sha256": "c5a8f57f92af305b7c8527590557dcf024637e6e94461f3b2bd92e4833c55a33"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-body-remote-after.md",
    "size": 4197,
    "sha256": "c5a8f57f92af305b7c8527590557dcf024637e6e94461f3b2bd92e4833c55a33"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-report.md",
    "size": 5037,
    "sha256": "e5f5422906a6b438c951eb41bf26fed3fa0dad3b57cdf816ac9055d364620ac2"
  },
  {
    "path": ".tmp-sfia-review/pr-296-merge-response.json",
    "size": 109,
    "sha256": "6560353123be470028638fd45193ca85300160613ce6650aa4add029ca9cf102"
  },
  {
    "path": ".tmp-sfia-review/pr-296-metadata.json",
    "size": 9225,
    "sha256": "1e7efbd9e7986689d832f1f3b83f0e632cd5fdf4694ba9472efe652e72a4dd70"
  },
  {
    "path": ".tmp-sfia-review/pr-296-pm-inline-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-pm-issue-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-pm-reviews.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-post-merge-cleanup-report.md",
    "size": 7111,
    "sha256": "c10fae9854449e3b5bc5b686597a032b987a9d1ca9c668bc10929cb084a0496f"
  },
  {
    "path": ".tmp-sfia-review/pr-296-post-merge-runs.json",
    "size": 269,
    "sha256": "edba1345d64809c409177c74282b2cb25d34cdcc403f48306514458c9c472d6e"
  },
  {
    "path": ".tmp-sfia-review/pr-296-postmerge-body.md",
    "size": 4197,
    "sha256": "c5a8f57f92af305b7c8527590557dcf024637e6e94461f3b2bd92e4833c55a33"
  },
  {
    "path": ".tmp-sfia-review/pr-296-postmerge-jobs.json",
    "size": 6243,
    "sha256": "25902fe34a1d05647a5196adde388e94c3830343caece500d3eb0296da542e26"
  },
  {
    "path": ".tmp-sfia-review/pr-296-postmerge-pr.json",
    "size": 8266,
    "sha256": "03f4ff5d428c183e74fb3ec547fd169a71847e466feb56d607986688c9c78b0e"
  },
  {
    "path": ".tmp-sfia-review/pr-296-postmerge-run.json",
    "size": 4486,
    "sha256": "c54c213bd6de9f0779521c12ebcd5ed7ac8c574bff439a036ff593555a0a0727"
  },
  {
    "path": ".tmp-sfia-review/pr-296-pre-merge.json",
    "size": 3732,
    "sha256": "894af58b89ec16580307e451b21bc6dc27a8bccf8ba158d4f90c03acb7871646"
  },
  {
    "path": ".tmp-sfia-review/pr-296-pre-ready.json",
    "size": 299,
    "sha256": "c477f7c1312cbd29a035f062cb25216a0eb16a9890eba9220aa5c7563523e478"
  },
  {
    "path": ".tmp-sfia-review/pr-296-ready-transition-report.md",
    "size": 5446,
    "sha256": "ae37b17924c9a22e2e2921132fe38302445bccd0813fe89ec44e98728775bda2"
  },
  {
    "path": ".tmp-sfia-review/pr-296-remote-review-report.md",
    "size": 14380,
    "sha256": "68d2dfc742d65020f7a91fb4148264688a09ee5707ce93680dab7d5e8db83c20"
  },
  {
    "path": ".tmp-sfia-review/pr-296-remote.diff",
    "size": 177011,
    "sha256": "84bbac86e5376cf72ec85858b859143ec64d355f99dd8b938e262d60f98431d4"
  },
  {
    "path": ".tmp-sfia-review/pr-296-resume-inline-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-resume-issue-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-resume-pr.json",
    "size": 3800,
    "sha256": "888f7f2d85c8122019f0936b3eb250a5ba6a3f209bf7db7132ffecabf350358d"
  },
  {
    "path": ".tmp-sfia-review/pr-296-resume-reviews.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md",
    "size": 9116,
    "sha256": "7917743a0007e2478818001273c9ab88b30f6c3579be1c18e79348baa2346c5a"
  },
  {
    "path": ".tmp-sfia-review/pr-296-reviews-after.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-reviews-before.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-reviews-concurrent.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-reviews.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-296-run.json",
    "size": 4623,
    "sha256": "d415923248de2f7f14ff6be305d8b181a8c57df2964de9c36c8a497875fe35b1"
  },
  {
    "path": ".tmp-sfia-review/pr-296-runs-after.json",
    "size": 292,
    "sha256": "d3c13436a1613248f23d0115d2379db65a1d78c1f2d3b89f11d099e2355129a5"
  },
  {
    "path": ".tmp-sfia-review/pr-296-switch-main-attempt.txt",
    "size": 104,
    "sha256": "6c0498c83c245cacf413b9e0eb929c4850e9c251a641ad4e231a4bce46e4b528"
  },
  {
    "path": ".tmp-sfia-review/pr-296-view.json",
    "size": 419,
    "sha256": "6e618e643ba2daa00118f1e5221c6c0405d606cf100647aad917d3f536df97a9"
  },
  {
    "path": ".tmp-sfia-review/pr-297-after-ready.json",
    "size": 7045,
    "sha256": "49d8f1ac635b035f7169b0c65d126f4b7fefb15a2c18d37a7d1c87b61b31456a"
  },
  {
    "path": ".tmp-sfia-review/pr-297-before-ready.json",
    "size": 7042,
    "sha256": "7977bdb7f4af353c0b37783ddda15501d151ba814f0d20f895a3fb52f306a8d0"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-after-ci-checkbox.md",
    "size": 4788,
    "sha256": "f085801287f1e83559b887806b5099c95b3fbca702071af286b54d81c0b2c323"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-after-merge-go.md",
    "size": 4783,
    "sha256": "f74aa6c48512e7962a1a45ed7cbe49f33ce84c63b711601e0c705c1ccc05104e"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-after-publish.md",
    "size": 4788,
    "sha256": "f085801287f1e83559b887806b5099c95b3fbca702071af286b54d81c0b2c323"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-before-merge.md",
    "size": 4789,
    "sha256": "03fd9d77b2691924d455bd67c3d195cc0edf58bafb1620a6fb7268c80911b036"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-before-ready.md",
    "size": 4788,
    "sha256": "eeea6d085de53e50d9736c283d72cc054f633a51542774fed08166a428a27077"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-checkbox-diff.patch",
    "size": 352,
    "sha256": "b5955f6286845ced255d428fd84a35ef3775b6e933b591a2ae92297b5866466f"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-current.md",
    "size": 4788,
    "sha256": "f085801287f1e83559b887806b5099c95b3fbca702071af286b54d81c0b2c323"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-final-merged.md",
    "size": 4783,
    "sha256": "f74aa6c48512e7962a1a45ed7cbe49f33ce84c63b711601e0c705c1ccc05104e"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-merge-diff.patch",
    "size": 810,
    "sha256": "a5073a773150ce571388dfa075e87a7be5b3af3fac0eefa5294b65d8d772a443"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-only-correction-pack.md",
    "size": 1810,
    "sha256": "e1d9d73a62f3d2e2c835b06a27915eb9138f7a8dfb9a8a2758aa9a8a78ceb8b1"
  },
  {
    "path": ".tmp-sfia-review/pr-297-body-ready-f02-correction.md",
    "size": 4782,
    "sha256": "ce6c2b4473fdb7387fa09d7bc731af82f4d0b0338f655a319aeadcaca4d57b31"
  },
  {
    "path": ".tmp-sfia-review/pr-297-branch-inventory.txt",
    "size": 116034,
    "sha256": "9669832245561421856a38631f9456d7cb1d6b9b051a2bd66e9a1398636f6cbb"
  },
  {
    "path": ".tmp-sfia-review/pr-297-ci-premerge.json",
    "size": 4526,
    "sha256": "7fe82816c4c03c6ad597b0da42b9d828bdb8294c78f9bec03046a62335f96aa7"
  },
  {
    "path": ".tmp-sfia-review/pr-297-cleanup-ci.json",
    "size": 4479,
    "sha256": "a66db54a1552266af5491921e1f732530f1b65ae920da58178d31a4726800996"
  },
  {
    "path": ".tmp-sfia-review/pr-297-cleanup-git-truth-initial.txt",
    "size": 1327,
    "sha256": "885414b7011207504615d5e7c2c5291753005bb27b029b1d03ebb7e61627cce7"
  },
  {
    "path": ".tmp-sfia-review/pr-297-cleanup-pr.json",
    "size": 6277,
    "sha256": "1e9e859bfde21c8729c42fe86038051cc1b07e01d43bc3be91455136a7cd8d3a"
  },
  {
    "path": ".tmp-sfia-review/pr-297-cleanup-readiness.md",
    "size": 3527,
    "sha256": "be1dc7b92895b2e449fe4f738717979dbcc27af43efe54fc18a5a1b3b1738232"
  },
  {
    "path": ".tmp-sfia-review/pr-297-document-05.md",
    "size": 24796,
    "sha256": "6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577"
  },
  {
    "path": ".tmp-sfia-review/pr-297-final-findings.md",
    "size": 995,
    "sha256": "211fb191f371231b4406e6d9b82cf24301e9c8afa00f78770a8d605fb6635f95"
  },
  {
    "path": ".tmp-sfia-review/pr-297-main-proof.txt",
    "size": 351,
    "sha256": "1dc3e5f17420ef0adc75f97e318d9264a115f93dc27af08a0d1b7bf694f8d4a7"
  },
  {
    "path": ".tmp-sfia-review/pr-297-merge-commit-proof.txt",
    "size": 12800,
    "sha256": "d19da627c09e3049b27dbabc7bf2f38b0d4cb8d5465a7c921573ac760a35e80c"
  },
  {
    "path": ".tmp-sfia-review/pr-297-merge-decision-pack.md",
    "size": 1793,
    "sha256": "29054ef40767748a01d68f486c415902008e0109a2d8cf1432beb7e73d75c041"
  },
  {
    "path": ".tmp-sfia-review/pr-297-merge-readiness-body.md",
    "size": 4788,
    "sha256": "f085801287f1e83559b887806b5099c95b3fbca702071af286b54d81c0b2c323"
  },
  {
    "path": ".tmp-sfia-review/pr-297-merge-readiness-findings.md",
    "size": 594,
    "sha256": "06848986be5eb3e053a00355f1ee9362e15a8771c3ffbb04ce75cfc8609a1299"
  },
  {
    "path": ".tmp-sfia-review/pr-297-merge-readiness.diff",
    "size": 25784,
    "sha256": "35ff226c61bff30defc6521fcba851aa607bed7170c7ea1cea0a2c803c5cce0d"
  },
  {
    "path": ".tmp-sfia-review/pr-297-merge-readiness.json",
    "size": 7045,
    "sha256": "49d8f1ac635b035f7169b0c65d126f4b7fefb15a2c18d37a7d1c87b61b31456a"
  },
  {
    "path": ".tmp-sfia-review/pr-297-pm-inline-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-297-pm-issue-comments.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-297-pm-reviews.json",
    "size": 2,
    "sha256": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-body.md",
    "size": 4783,
    "sha256": "f74aa6c48512e7962a1a45ed7cbe49f33ce84c63b711601e0c705c1ccc05104e"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-ci-initial.json",
    "size": 341,
    "sha256": "e842d5af6bc3d61dd6d8578c07fb3e077291f30aa651634b3c1246d44e1572b9"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-ci-list.json",
    "size": 346,
    "sha256": "6073f33fdb6b2526138babee8ac245147a1fb1bf6a6757c85e88830fceebd92e"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-ci-status.txt",
    "size": 8,
    "sha256": "45fc7ab706e6fb509993b6fcae9d4d423c96f8e840c8f64c1a61f5c817c8a870"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-ci-view.txt",
    "size": 1033,
    "sha256": "96e31bd751ce22e8b3598ae670c6a7121426509c92569951199209b64bd5258f"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-ci.json",
    "size": 4588,
    "sha256": "3172b69e0daad6a658ab6846be5ed77333ad5bd0255073cb508f2742f370763b"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-commit-proof.txt",
    "size": 983,
    "sha256": "19945fcd8632469f0d74def6273e310e5a31860c202c898f9d021549044bd723"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-doc-proof.txt",
    "size": 334,
    "sha256": "4c5aae99efed59abb436d72ab1ff9d5c3ee3ed90f7a3c0c09c352fa660a03dca"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-findings.md",
    "size": 2328,
    "sha256": "e8a28ed8517e6a1ebd313bea77b177cfdf16b87abc2f869610006969cdb86ed8"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge-pr.json",
    "size": 7102,
    "sha256": "dd0e6233d2ef8b248b84e9292ab36c943741dae50c75a77d7b4903eaafbb041b"
  },
  {
    "path": ".tmp-sfia-review/pr-297-post-merge.json",
    "size": 7124,
    "sha256": "f20f39cde45bcc4c4a51702dbd917961afe9196cea753420ca0d265f2498a7bb"
  },
  {
    "path": ".tmp-sfia-review/pr-297-postmerge-final-git.txt",
    "size": 424,
    "sha256": "8386a69ac53d1040f2bbe10816b10708003a9516abd167747dc89894e9080428"
  },
  {
    "path": ".tmp-sfia-review/pr-297-postmerge-git-truth.txt",
    "size": 1980,
    "sha256": "3b19145857c855fa754cac2daf3e9026fcbe441105ba3d3e32226046383e0249"
  },
  {
    "path": ".tmp-sfia-review/pr-297-pre-merge-final.json",
    "size": 7041,
    "sha256": "6ed65d6e63018af5311df11a257ca4223891c62fd7cf4da3e0f96399c094ad34"
  },
  {
    "path": ".tmp-sfia-review/pr-297-pre-merge.json",
    "size": 7045,
    "sha256": "49d8f1ac635b035f7169b0c65d126f4b7fefb15a2c18d37a7d1c87b61b31456a"
  },
  {
    "path": ".tmp-sfia-review/pr-297-pre-ready.json",
    "size": 6192,
    "sha256": "dba43be6ca253202884d9b9fc2911e6fb8844b6e653a13cf2cf6bb533a62f9c0"
  },
  {
    "path": ".tmp-sfia-review/pr-297-premerge-ci-ref.json",
    "size": 282,
    "sha256": "575de111390ed76bc2bb9f378dbca5503b2275a91cfe7cd3abdef3455f6e1051"
  },
  {
    "path": ".tmp-sfia-review/pr-297-ready-f02-body-diff.patch",
    "size": 332,
    "sha256": "707bc7f79b116d75c4240f6c153e14d45f7f5a277fcedf8a5642defd757bf639"
  },
  {
    "path": ".tmp-sfia-review/pr-297-ready-findings.md",
    "size": 872,
    "sha256": "f94bd8cbed171ead3c5575b033b749b5b0f1777fae31278e5642a4cd84e377f0"
  },
  {
    "path": ".tmp-sfia-review/pr-297-source-one-file.diff",
    "size": 26032,
    "sha256": "81ec01da93a7b5059302641998122adbdc2c57df3d2503cfc47f2bda35cd64f8"
  },
  {
    "path": ".tmp-sfia-review/pr-297-worktree-inventory.txt",
    "size": 17296,
    "sha256": "6a91f8c11b8e46609a3ea6c75cdf8b01f9d99a1c27140c24ed3d7894a75aaaaf"
  },
  {
    "path": ".tmp-sfia-review/pr-297-worktree-paths.txt",
    "size": 7463,
    "sha256": "7b1f3fe6f810ca53f895673066fdb7d4c34183163d04df372b425fd229b525f0"
  },
  {
    "path": ".tmp-sfia-review/pr-297-worktree-statuses.txt",
    "size": 164803,
    "sha256": "947a381a6863df3d2cc88f62136ad8eb7847dfbbcd748d4cbacc027bcb1e740e"
  },
  {
    "path": ".tmp-sfia-review/pr-297-worktree-summary.json",
    "size": 69605,
    "sha256": "376964e3b438cb08501736bd8aa699d7ccdd73d322ca62a11d4e32ae69ea7f41"
  },
  {
    "path": ".tmp-sfia-review/pr-body-v2-a3.md",
    "size": 2881,
    "sha256": "978ac5d74da90c77ebbfd7b9ee4febaa9180c0e42396958e8ed9ffd47eba91a7"
  },
  {
    "path": ".tmp-sfia-review/pr-body.md",
    "size": 3904,
    "sha256": "f69377aa904281f767cb8d5f22e1b6e79f8a98b27db385428f18063ac033b38f"
  },
  {
    "path": ".tmp-sfia-review/pr-checks.txt",
    "size": 375,
    "sha256": "9a8e5647a68541d377a8740f1ca87245992236e5ba75f307ec8d717ced670699"
  },
  {
    "path": ".tmp-sfia-review/pr-readiness-truth.txt",
    "size": 1401,
    "sha256": "2fbdeae26b44938a96b96e80f755167440395e642215b60a12168ec6ee370091"
  },
  {
    "path": ".tmp-sfia-review/primary-truth.txt",
    "size": 5781,
    "sha256": "39d9b14572de5628ff4932a93d35defb7685d91f8e71831f47de7a66fa4b0a9c"
  },
  {
    "path": ".tmp-sfia-review/pub-truth.txt",
    "size": 1408,
    "sha256": "6a5cf33d47c5e48ab60b6b3ba059170c005512b704ec97b1b724194668e2914e"
  },
  {
    "path": ".tmp-sfia-review/ready-final-git.txt",
    "size": 264,
    "sha256": "30c4a531cae51707ae835430da6b83988cd7ca9a6d03e73ad1b57599b112a45a"
  },
  {
    "path": ".tmp-sfia-review/ready-truth.txt",
    "size": 701,
    "sha256": "89fad8c7ba3fa69377d946edf9f3334f3d49cb535ea680f26e414f591b126d49"
  },
  {
    "path": ".tmp-sfia-review/remote-review-commit.txt",
    "size": 595,
    "sha256": "71965bdd6632f789f56f269df0cc719ff59c12ffd6c12d34ed25ac5e21525a6a"
  },
  {
    "path": ".tmp-sfia-review/remote-review-truth.txt",
    "size": 740,
    "sha256": "b7db97c0526e780bab08c743dccfad9c1703c0992c89314a20d6480700aab88f"
  },
  {
    "path": ".tmp-sfia-review/review-timestamp-cleanup.txt",
    "size": 33,
    "sha256": "2cb2d2bbdb53b9676cf9ce572c6bb8b0f77884a736b0a34eb785f93aae8b7f28"
  },
  {
    "path": ".tmp-sfia-review/review-timestamp.txt",
    "size": 33,
    "sha256": "119a84b8883dbcaecf3923db6dab10a2ffb4b4b13418bd787d50dd8ac893c63a"
  },
  {
    "path": ".tmp-sfia-review/source-inspection.txt",
    "size": 1587,
    "sha256": "62be2af0cba4bc764bb639cbf6d39868a042e7868099dd9c2c35dedcad3ac680"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-cap-source-commit.txt",
    "size": 696,
    "sha256": "1b6091f42632611c678561fdaf914aac4895ae85d1dfde6cb78966f2577cf658"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt",
    "size": 150,
    "sha256": "80cf4b50e8d10903865aaf8589ef8b69991238d6f1c7ea9e389238a4fd096185"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt",
    "size": 1003,
    "sha256": "90a787548566dd4de318695cc9a7f4d1c4a0a4a0b909753bc84e1ed4f3cb234f"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt",
    "size": 663,
    "sha256": "dc04e08c6ab78da426cea44a24351e0138b4bfe690ed8bf4cc0c68cb9db7f4b4"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md",
    "size": 12441,
    "sha256": "266cf7af356264b42d131041a27f1c4b533e134a1bfb4bfe7889148b61f4147a"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-merge-report.md",
    "size": 33585,
    "sha256": "3f9c2eea6ca376eadb0766f58e819477d6bdd5170297f18a56132288c4d3e686"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md",
    "size": 1446,
    "sha256": "cb54a5ea541d9ec7b8d86d483957b7341e38a9cd983c49ade0af22a90874000d"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-package.diff",
    "size": 25782,
    "sha256": "9b99b6440b4ca57811149c03a9001ecb6b48c0e6227556cdf41c92c1cbd657f0"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md",
    "size": 327193,
    "sha256": "a031a7e1b4bc7c54a1a5060c08b11c6b0432dec47802e892ffedb415eb4d429d"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-pr-body.md",
    "size": 4787,
    "sha256": "bdce5cc29315397c4df6e43ed662aa228bd298cfe8652ca385d6fc9e1685e980"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json",
    "size": 6705,
    "sha256": "c5c17ffde293458e1d200fb7fd0ee87f79b674a3b807ff456e012ad12b656a90"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md",
    "size": 35952,
    "sha256": "883e4e6425e479e4c3bf6314c33b2a6bd81dcf9356c5ba75a4c2577dacd7c62a"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-publication-body.md",
    "size": 4787,
    "sha256": "19da6a8a0ccc4c2e5617e1dd921df5ae0e4c4e3f0f4130678fc1ba857cb6c267"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-publication-report.md",
    "size": 72289,
    "sha256": "be68911a675eecf65d48ae3da51edb8d285bbda20079ae90d0312b47b8612f54"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-ready-report.md",
    "size": 20024,
    "sha256": "9805bb8a4fcaa59271d51eb7358ca5da7b2ee7b48a915d749a1336e04a900bbf"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-body.md",
    "size": 4787,
    "sha256": "19da6a8a0ccc4c2e5617e1dd921df5ae0e4c4e3f0f4130678fc1ba857cb6c267"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt",
    "size": 1395,
    "sha256": "1abed91b7071ad87075f90b865a96a9b080e7657ba564e5960951c87d060f7d1"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json",
    "size": 4526,
    "sha256": "7fe82816c4c03c6ad597b0da42b9d828bdb8294c78f9bec03046a62335f96aa7"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch",
    "size": 25784,
    "sha256": "35ff226c61bff30defc6521fcba851aa607bed7170c7ea1cea0a2c803c5cce0d"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md",
    "size": 1027,
    "sha256": "3e9630d4897ca3950e90871334a58058dbe3988bc384fd5edaf1ae10c81d2e1e"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json",
    "size": 7042,
    "sha256": "7977bdb7f4af353c0b37783ddda15501d151ba814f0d20f895a3fb52f306a8d0"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt",
    "size": 678,
    "sha256": "c344ee1e3d9c3ff91f3d1e0bcd7b6008cbb0f1d2cebe8f7897c21b049801e490"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md",
    "size": 35051,
    "sha256": "071860ba99930a4f899be4e8e47aab4e6c919c32600a2e4c2bbc854f31342e04"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-capitalization-rex-report.md",
    "size": 28977,
    "sha256": "c831af6b92119851c18e01f850a1aa6306bf60a0bb9fe5957a302bac6509cfdd"
  },
  {
    "path": ".tmp-sfia-review/v3-1-d1-pr-body.md",
    "size": 4202,
    "sha256": "3cc623da80a46c28c24739f84c66aa98937c26898915a1f7ff2a1ae530bf8a1b"
  },
  {
    "path": ".tmp-sfia-review/worktree-after.txt",
    "size": 17305,
    "sha256": "f25ea00ce1fc412ab56c325f3aa49ac97048d0dbbde61a0e812e2a0528cd0717"
  },
  {
    "path": ".tmp-sfia-review/worktree-before.txt",
    "size": 17441,
    "sha256": "0532fa07f074ee810fb6e76c28463b22dd324ecaaedf786cfe9340f05da8f751"
  }
]
```

## Hash review pack précédent et archive
- initial sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- archive sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- git blob: e7f0e566ec01873786a987003e6440579eb2b450
- archive path: pr-297-post-merge-validation-chatgpt-review-preserved.md

## Branches locales avant
```
refs/heads/architecture/interv360-backend-api-contract-framing 7f24665adcff5022c32832d4a543f44345011488
refs/heads/architecture/interv360-backend-data-model-decision 0f2f6c4d740677da922c45e85b3d5814e6cf9bf0
refs/heads/architecture/interv360-backend-persistence-decision 4ee36eea7a5c06953af2f653af9f3a96e178e4f2
refs/heads/architecture/interv360-backend-target-framing 4b59b51e743a87951a704d0df3075aa9e7702309
refs/heads/architecture/interv360-backend-technical-stack-decision 98567700c5edbbebc18728fd60c7cfb5ed7e1663
refs/heads/architecture/interv360-product-industrialization-framing bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35
refs/heads/architecture/interv360-product-roadmap-after-persistence 572d06137cfe5d56b1fd1ee848f9fb1e79ad1d8c
refs/heads/architecture/interv360-product-roadmap-after-role-simulation 70a11108f9a778f92f6f98f45117818f09477fe8
refs/heads/architecture/interv360-product-roadmap-next 69b82461398c32be1dcc60a91cd1cb1036703f1e
refs/heads/architecture/interv360-role-simulation-review 733cbfffbaaa796240fa68f6c9148f9b62cabeb2
refs/heads/architecture/sfia-studio-v3-native-option-a-technical e8166adb2634a659667bdfd246d5cf851958cccc
refs/heads/archive/sfia-v2.6-lot-0-completion 2830efd0f2735141641e816ccac82475ccb30c74
refs/heads/archive/sfia-v2.6-lot-0-inventories 6cf7d361d9543a2a8b1fff8f78ea72be75f303f0
refs/heads/archive/sfia-v2.6-lot-c-v3-mcp d4401c3da6c08cb7e8716fea5a513df22d467c0e
refs/heads/audit/sfia-studio-v3-native-dependencies 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
refs/heads/audit/sfia-v2.6-lot-0-qualification e2006897c492fc8d83a185ce818ddb5e3ea47164
refs/heads/audit/sfia-v2.6-repository-cartography 4ae75a9d590d397456ba2e3de3815555a5b57ddf
refs/heads/backlog/sfia-studio-ops1 4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e
refs/heads/backlog/sfia-studio-poc-vertical-slice b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05
refs/heads/cadrage/sfia-v2.6-lot-h d54c952c3c4118f37a95800a55a7bfcd99a8af98
refs/heads/cadrage/task-tracker-light b763a318fb84e23e482ed23a0bd561c1d9e719e6
refs/heads/capitalization/sfia-documentation-completeness ef2f7bf16fdfcb8c74d425cf561fabd89d951c80
refs/heads/capitalization/sfia-studio-p0-status-sync e97e083a749d88b8556ffd81edc0160a432df137
refs/heads/capitalization/sfia-studio-poc-framing-post-merge 18d21511efaaf62b8a332b9e289f2355830b9617
refs/heads/capitalization/sfia-studio-v3-1-d1-rex d77c775f6114eddd04af330cc943a869a5c4f6a2
refs/heads/capitalization/sfia-v2.6-repository-rationalization 40b6f00d4dce6f8524dbfc9f4574fba87ea491d8
refs/heads/cleanup/sfia-v2.6-lot-j c4cc0b02c18300808d788810d8830dcfdc4979fa
refs/heads/conception/sfia-notion-product-space f7f2e18d825add5195c611760788fbd79aaf98aa
refs/heads/consolidation/interv360-application-rex dc4c971543258317166f79bf1e1f8baaee38f207
refs/heads/consolidation/interv360-current-app-audit 8099a96de369d820c7a82c27d8309ecf2da34217
refs/heads/consolidation/sfia-documentation-review 45e4498813734884ca57c9e822e3392c8e75cc0e
refs/heads/consolidation/sfia-global-capitalization b11b318ab1b79d72be484d784c1607c4d6a95a81
refs/heads/cycle/chantiers360-v2-design-figma 5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d
refs/heads/cycle/chantiers360-v2-detailed-framing 4546d88edbf47b4eee65933fccaa21c076f6d148
refs/heads/cycle/chantiers360-v2-figma-fidelity-spike 6d44882dc76acb628481e55916b6cc04f400d13a
refs/heads/cycle/chantiers360-v2-functional-architecture 934be03e55dd3e237ab42f0ebec597a377ecfbaf
refs/heads/cycle/chantiers360-v2-light-architecture 55b2f0c2fdde34b6775d5d8201768eab98200014
refs/heads/cycle/chantiers360-v2-mvp-backlog 9babc8c052626e971b8eb4d324d58e16ccf9e307
refs/heads/cycle/chantiers360-v2-ux-ui be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6
refs/heads/decision/chantiers360-v2-architecture-arbitrages 9d425dd842e1317ec9213d3ec220d2633f0dff31
refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data 824883c8d4593276fa7129187dba7efcf7b117ef
refs/heads/delivery/chantiers360-v2-inc-01 e65a4d23443b8745639e045eccabe7be304b0809
refs/heads/delivery/chantiers360-v2-inc-02 c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2
refs/heads/delivery/chantiers360-v2-inc-03 6583ddf31da43db0d9fde2b630da806d0a9c9d06
refs/heads/delivery/chantiers360-v2-inc-04 406a8839945236f9eb8a0cd858ef53f7ef64ece9
refs/heads/delivery/chantiers360-v2-inc-05 bcc6d379571280142aa5eff6c8baa9615978fc95
refs/heads/delivery/eventops-poc-visible-slice-01 e1befcb80ed5e3c789a7de9036a8207d6b3e6771
refs/heads/delivery/interv360-api-demo-hardening 7ef233a93b3c76099247937dc4deb524e623ab0a
refs/heads/delivery/interv360-api-product-hardening 04183050b7a6ffe271ce4eec05b4cf2ddba65c99
refs/heads/delivery/interv360-api-product-validation 69a33ed0ee72745b693ae82329bfb7a5dcec55ce
refs/heads/delivery/interv360-audit-trail 87662a20e9a885e44acf50dee74a7017ab2ac9e9
refs/heads/delivery/interv360-auth-user-switcher be10f7a92828cfb7761bdcbb591c38c759d9ffa3
refs/heads/delivery/interv360-backend-minimal-prototype a310850ab136d84ca45f784ccc44df9cbe63ae6c
refs/heads/delivery/interv360-backend-persistence f39adb8c23be6740ba57194608ada3a62f0d72ca
refs/heads/delivery/interv360-backend-users-session 1c0311d2a18a38b739e8429c90ff347a0c05436c
refs/heads/delivery/interv360-batch-01-demo-credibility 12efbb6bcad65a988588a33a54d574c0b08c7620
refs/heads/delivery/interv360-batch-02-demo-control-scenario a6eb49d0f003bf4411c40dd799b54047e86f1d8a
refs/heads/delivery/interv360-batch-03-demo-readiness-package 4d6e465eec7fef6cf0f4f8af3435636ca1bd456a
refs/heads/delivery/interv360-batch-04-demo-presentation-package bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4
refs/heads/delivery/interv360-connected-ux-productization 6f8c72b007661790b85be3f811c4c649e8238b6b
refs/heads/delivery/interv360-demo-feedback-review 5febd0f6ce250181e5fe4918813e05526ea2b3f0
refs/heads/delivery/interv360-demo-mvp-closure 091eebba81aa6dc80019c25584b9d8aa99517659
refs/heads/delivery/interv360-demo-polish d8394b75ec7a28c3e39f074b025d9eef877c900c
refs/heads/delivery/interv360-demo-presentation-feedback 5481b748e9b2968b5801149a762e255bb926ca38
refs/heads/delivery/interv360-demo-presentation-review 4a6c7b7c2b409b9e1eed43655432636a9f0a40c8
refs/heads/delivery/interv360-end-to-end-demo-hardening ed2c0f4c63355867ab322f850189fac4144f064f
refs/heads/delivery/interv360-frontend-api-connection a23cefcb90bd78ff3ff692cf194c4d0fdc06f229
refs/heads/delivery/interv360-frontend-api-connection-framing f15956a414d89e18b8254447972195d93f36586d
refs/heads/delivery/interv360-implementation-go-no-go 8cc09b11b82f05d28d51f49b3de209e5206b8389
refs/heads/delivery/interv360-inc-01-action-transition-decision aa5092f862e556888731830939ec5c5ec8b97347
refs/heads/delivery/interv360-inc-01-app-foundation 2d7f1215c832065766aad74ad1480b321b2c7c33
refs/heads/delivery/interv360-inc-01-controlled-workflow-skeleton 1fae1ce091ee8bf3f37c85fec6ee0c2e05242370
refs/heads/delivery/interv360-inc-01-controlled-workflow-validation 16c333903f4e21151db772736f921baf02edfec9
refs/heads/delivery/interv360-inc-01-demo-reset 5588977299d11b2db0525cc0f2c92f6e70cad3ce
refs/heads/delivery/interv360-inc-01-demo-script 95695751d516c1732f1c00e79728e54a46c12ed1
refs/heads/delivery/interv360-inc-01-final-demo-package 140a5beb8178e79efe39facd4022a1f742edbe1c
refs/heads/delivery/interv360-inc-01-global-summary 985ebcb5491207f411ed6b5f7664ba226aeda050
refs/heads/delivery/interv360-inc-01-implementation-preparation 0588ee22f1fd985f6febd5c5275b2d4282332b2c
refs/heads/delivery/interv360-inc-01-intervention-readonly-skeleton ed5f9ba8cb14781a681a06db09ef4545e420966f
refs/heads/delivery/interv360-inc-01-list-skeleton 58193676881df0818727ae49d4d5913c8b20024f
refs/heads/delivery/interv360-inc-01-local-persistence-decision 020f773bbfa6674a92ad97e0db16112a732206f6
refs/heads/delivery/interv360-inc-01-phase-2-delivery-decision 4f1eb6ab91dfb055ba3a9045a1be6de87a5ad583
refs/heads/delivery/interv360-inc-01-phase-2-rex 7a428a70db16ef815b32e423e9d2569aea22834e
refs/heads/delivery/interv360-inc-01-planning-readonly-skeleton 841113896fa93617fe39c6bd37f136771b262298
refs/heads/delivery/interv360-inc-01-pr-preparation 4f7af01d22d214dd3a3ae3e9a1fcf833425c5c5e
refs/heads/delivery/interv360-inc-01-push-and-pr 06751adf3a03843723c1c16f916b4b7c8a3187a4
refs/heads/delivery/interv360-inc-01-qualification-readonly-skeleton 5033c2400b18802dfa1c4dd821398c5604a7a197
refs/heads/delivery/interv360-inc-01-readonly-demo-summary 0e25e584636c8c786da3b9bb72699dfcfb0918d2
refs/heads/delivery/interv360-inc-01-report-readonly-skeleton 94a50c0fc08bfe199d99b2422bd44d55545015a9
refs/heads/delivery/interv360-inc-01-request-detail-skeleton ab27aad6dd1d8ea69e90c1a351171b5ca8f994f7
refs/heads/delivery/interv360-inc-02-pr-preparation 82c78239ec1cbb83a66c714685374a70025fbae2
refs/heads/delivery/interv360-inc-02-ux-demo-improvement e9de7bebe2384c42983ec86db846d3a2f2193b53
refs/heads/delivery/interv360-inc-03-multi-requests-local-demo 5f6e2cc86bfb5e2624ebdd79068de1d6729e8e7c
refs/heads/delivery/interv360-inc-03-pr-preparation 69325d09cc9d2936694412efee5d107c9ee62cf4
refs/heads/delivery/interv360-inc-04-list-filtering-local-summary d306054f7622c48e86ca23ff4386a0a35590c9c6
refs/heads/delivery/interv360-product-demo-consolidation 1b44bc1c063b977a5f309108fc8b45f3e1d425fe
refs/heads/delivery/interv360-product-industrialization 3bba55b7b34ef118006a9fe61464ba61f3f941d2
refs/heads/delivery/interv360-product-ux-finalization e106d9143def77ac92164299c8977ab96a43517a
refs/heads/delivery/interv360-request-model-finalization b3bd01f4e81fe4b9e30f4a039232f7824ac29c19
refs/heads/delivery/interv360-request-model-productization 6dded2000063b14ad4500d7b9b65b926578726e1
refs/heads/delivery/interv360-role-simulation 1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa
refs/heads/delivery/interv360-technical-arbitration ba81999c47296ae86ff2f908ea8f34f0035a8ee2
refs/heads/delivery/interv360-workflow-light-extension 5cd2b4e78ad434a5fe40c90ee2107466dd074896
refs/heads/delivery/interv360-workflow-requalification a830842aa0b60b35ebc845e88550fe1927288eec
refs/heads/delivery/sfia-studio-control-tower-fast-track c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
refs/heads/delivery/sfia-studio-d1-shared-platform-integration c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
refs/heads/delivery/sfia-studio-ops1-i1-session-journal 97df7d5127455297b942775dd9159f7eba121bdb
refs/heads/delivery/sfia-studio-ops1-i3-action-gate 3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57
refs/heads/delivery/sfia-studio-poc-increment-a 89cb7565507a0a5303de9004feb1e2e9f14d3d39
refs/heads/delivery/sfia-studio-poc-increment-b 8316f26de1ade4bbf0e698ce03666e977daa87cb
refs/heads/delivery/sfia-studio-poc-increment-c 96bb808bb6f2ea7f09878c970bb89b5978c2abb8
refs/heads/delivery/sfia-studio-poc-increment-d 41b9c46f5b02e352267920eb1cefef5cf447d324
refs/heads/delivery/sfia-studio-shared-technical-platform 08c282abafd97685bcc0b7e525ec96e6721ec589
refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction c24da112ed3d67479d7b3e7715c78da3c26be78e
refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion 5afe09516fd94fff466340dc0c1f877712f13f42
refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation 9c125059f3323a7df862b96d32f1940b1cbdefc1
refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance 2f9560534e285c5b8105f81dca39c5252667860c
refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916243c470587f6958e058fd58909e5bd75a
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation 9e0a9c81ceaf54e2147ba1cf87884d2c23399306
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation 5733d25b4b4c7ada042af2776fe1d3154c0b5583
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc 75aee25a33e45b63b96805e85d72326d1525b056
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority f8d25c2dc523020b0443c2b16f375edbf7f5631b
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance 245f515c3f8baaf0c2cf72b59af0635a1b0efb67
refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition ca93e0805b499f9cae6cacd84e37cbb122d89a1c
refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge 7ef160c6fd8a99267a9e553fd77d13aa7e6f95da
refs/heads/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui 55a28d3cb30adb5b00ac347ffe9876879e199458
refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes 78859034e769c449901835a1b9431deb56dc0c3c
refs/heads/delivery/sfia-v2.6-lot-h 694fedcca20b960815d55cf825315d3b497c93ba
refs/heads/design/sfia-studio-ops1-scenario d248b9db91f4f10c16885c9f931f4cdd0f966316
refs/heads/design/sfia-studio-ops1-technical-architecture b495a567afab1f74fe816ad210bdf25812cf55ec
refs/heads/design/sfia-studio-poc-vertical-slice 58fb275038bde920cf58001973f6809a6e10ffdf
refs/heads/design/sfia-studio-v3-native-option-a-functional e22bc243c8854df4e9422fafe46e92135fe242e9
refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture 577ff0c22491288d2293fd9730ed26f0af4095b0
refs/heads/design/sfia-studio-v3-native-option-a-ux-ui 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
refs/heads/devops/sfia-studio-ops1-foundation 04a3b4570b6116ff3fb3dbdc1295b0858caa2a1c
refs/heads/docs/chantiers360-close-r-qa-04 662f1c3d36e7755a18f120e848e69e730b6446c6
refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison 158bdf01c5cd72ed723d56d28cc69d3d44276632
refs/heads/docs/chantiers360-v0-vs-v2-post-merge 2e6816653b2c7030a83039c799346860dd5ec097
refs/heads/docs/chantiers360-v2-design-coverage-post-merge bbd54bf46d211b467e1b3a82404e700a82270984
refs/heads/docs/chantiers360-v2-final-pilot-rex 438b3bbe8e610c1a485b71c7e152709f69a1b624
refs/heads/docs/chantiers360-v2-inc-01-closure 09204fcadc42e5c053d2c8d435a5b9fb9d082daa
refs/heads/docs/chantiers360-v2-inc-01-qa-g4 94f71f21db99026992ffb638fcf18f23d8e9227c
refs/heads/docs/chantiers360-v2-inc-02-closure e461c6f238de494872fd1cbba6356ea08f0b9db5
refs/heads/docs/chantiers360-v2-inc-02-qa-g4 ec073f646eb75bd5696fb26ee0b4508a99315444
refs/heads/docs/chantiers360-v2-inc-03-closure 1d795fc6afd39a512179350b49ff67c14b7db201
refs/heads/docs/chantiers360-v2-inc-03-qa-g4 f136c33204b4df9c01198d7ff65fb9612d88e265
refs/heads/docs/chantiers360-v2-inc-04-closure eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4
refs/heads/docs/chantiers360-v2-inc-04-qa-g4 96bd25ee22643a1ad8e3d8077bbb0ecf218430ad
refs/heads/docs/chantiers360-v2-inc-05-closure 9987df647b0e6af1519ec46168decd9db5493075
refs/heads/docs/chantiers360-v2-inc-05-qa-g4 d30ca7299a13a3ce9955d06e69e9ea976d150551
refs/heads/docs/chantiers360-v2-post-capitalization-alignment 314794a39a73dbf8287ec3b7d5275cdf535a4705
refs/heads/docs/chantiers360-v2-post-spike-alignment fe9309006aa05493418be9ac6cc38d38ad1b1c39
refs/heads/docs/chantiers360-v2-readme-post-closure d672317108ca30c3df5a6d2f9b19b33c0c717476
refs/heads/docs/chantiers360-v2-technical-architecture-post-merge 9e7bcb3deca0b909370e13b91440aa872a460ba0
refs/heads/docs/close-lot-d1-status 8815f0f1e4576f07c4768decb8990b2bbf6e7a54
refs/heads/docs/close-lot-d2-status c0fc4b26af701a97ebec7b75c54247ab775ab4c1
refs/heads/docs/close-lot-d3-status 6cdda92f2354effd93213f971051c22df76c05d2
refs/heads/docs/fix-lot-d-plan-status af5d9a25f0c832367f21e520c3d2e10998bcfe23
refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
refs/heads/docs/sfia-studio-fa6-mitigated-from-main 67f140a19cf4a992dbc0d7b053abfde579a9a68c
refs/heads/docs/sfia-studio-m1-capitalization-rex fa0eebe00ce3b765a8a486aa660dddfab40123a0
refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge a42a85c0c0b3e146e59f82ea753329ed9253f278
refs/heads/docs/sfia-studio-pr226-post-merge-sync ed3304402d5c9d2f014c50741e9dc7fd508cb24a
refs/heads/docs/sfia-studio-recover-unmerged-project-docs 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status 960c90b32b2c1c5701a668b0ebc70fdd847c681b
refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization c520b819446cbc5cf28cb7327357f5cd60049293
refs/heads/docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing dcdc90a0779859ec5d34a91021bab65122447ee5
refs/heads/docs/sfia-v2.6-lot-e-closure 0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a
refs/heads/docs/sfia-v231-final-status 2bddcedfff871e2dd61d60c39ff48554bbbb4049
refs/heads/docs/sfia-v2x-versioning-post-merge c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5
refs/heads/documentation/sfia-discovery-act-02-editorial 153c50bc4e1638128e42629e828774bbadfce369
refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial 6fcc76a2353c4d9322280845100fad2c2bb93ea1
refs/heads/documentation/sfia-discovery-acts-04-05-editorial 7e65429b22338b40438307e3f64fa3b46d6cc233
refs/heads/documentation/sfia-discovery-acts-06-07-editorial a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb
refs/heads/documentation/sfia-discovery-legacy-migration-plan 402150287434bd844e1948c1b85ef6f58b90d3c2
refs/heads/documentation/sfia-discovery-pd-08-qa f934a3c54260a880b4c8d28130407961c46cdc28
refs/heads/documentation/sfia-discovery-pd-09-capitalization 28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f
refs/heads/evol/chantiers360-post-mvp-framing 8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb
refs/heads/fix/chantiers360-v2-rqa02-status-alignment 1ef4d67f080fd42789e3daa3ded1f4247848a1f9
refs/heads/fix/remove-controlled-delivery-broken-link b8eb9454c94b74fbdfdfdf596a9329c749dfd266
refs/heads/framing/sfia-studio-control-tower 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/framing/sfia-studio-first-user-visible-vertical-slice c1955179a36079e060c41a845c2a1950084966c8
refs/heads/framing/sfia-studio-next-product-increment 88fa4658da07156614de270d8172f147535ddbf9
refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity bd3608c6220e820cc3fa017422a7564a565a1296
refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6 aef7fd6d5a678857cf36e490f1550866d47c8887
refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution 65e5b606c2cddf443b95a890855f5097cb2ec93f
refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity 0b696ed970823aa75d013336e44e72de08f2ac57
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step 33ea3e87facc8c99c9c5619d6d2424030d3918a2
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness b6a19335f5116940175f5986492e3693722563bc
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
refs/heads/framing/sfia-studio-visible-slice-v2-runtime-ui-contract a1e207bdefef022858eb2ffd07b66727bed75dd3
refs/heads/framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage 3e8a4374405dce98866e35fb60c5c7329701f191
refs/heads/main b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
refs/heads/method/chantiers360-v2-inc-01-capitalization 5b5758f701903410f27f7d2bc8cb5fa980293599
refs/heads/method/chantiers360-v2-mvp-capitalization adcda831ff1805e14a464085628c2e4b3d5d4eac
refs/heads/method/codex-operating-model-pilot ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/method/controlled-delivery-index-integration 61187dcf2659e4336394b64bed9e2f7a81db902a
refs/heads/method/controlled-delivery-publication-package 8dc82696103431aeab8cbe2a540ff23f2cdf5828
refs/heads/method/controlled-delivery-publication-prep 9a6e0ae09861c8e19cc31cb06fe29635990ce62b
refs/heads/method/controlled-delivery-standard bf5734d9ca8cc3effbbd0fc86e4201c0dcb71afc
refs/heads/method/controlled-delivery-standard-hardening 834533706d90b7a58c399ccdf0331cd9e68f9104
refs/heads/method/delivery-acceleration-level-3-rex 008dbff2b64221a1a86204a2d93da57d8bd34e8b
refs/heads/method/interv360-final-capitalization 8763417ab21060ae1ba83083696d704ec4b6507c
refs/heads/method/interv360-mvp-delivery-capitalization 2ef34cb8c4d65eae4a35143a4a60589654a73fe2
refs/heads/method/sfia-3-exploration-closure f2a822ea2b2800484a0525b72a0473e55997f14f
refs/heads/method/sfia-consolidation-roadmap 10cb8c05e0b5cd924a70f5142fca9dc0ae60f077
refs/heads/method/sfia-cycle-knowledge-contracts cae841519ed1d2dd825e6ecb998337cd47b4a1e1
refs/heads/method/sfia-studio-v3-doctrine-consolidation daf6f7d02bbac09024f6275a793769e66b2b3878
refs/heads/method/sfia-v2-automation-levels 80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e
refs/heads/method/sfia-v2-automation-vision 1398a465537db503c562e2e40ab1010fd0bcfd8f
refs/heads/method/sfia-v2-delivery-qa-test-standard 2645df2b35676780eb42c6f9a50f3e8fde04a768
refs/heads/method/sfia-v2-design-coverage-rules bc697d8c87a2c660c3e51f2079eb1817e59c89b0
refs/heads/method/sfia-v2-figma-design-cycle 1bb55f01c1f87cf1a2d51f379831bb2b910394e0
refs/heads/method/sfia-v2-figma-fidelity-gate-standard 672d72bb2794bc66e575c2e4d47625b69035caff
refs/heads/method/sfia-v2-pilot-selection-decision 728231760b2414147c655eacc44afa46fb0f9192
refs/heads/method/sfia-v2-pilot-selection-scoring 22d8dcfc009c39cd2645252f05a85a61136d71ad
refs/heads/method/sfia-v2-project-bootstrap-standard cbba66bfc4bf3b780f54945a562900fb1ce74603
refs/heads/method/sfia-v2-prompt-routing-alignment 1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4
refs/heads/method/sfia-v2-technical-architecture-decision-standard d8f43775cd3fcd1cf8b633a63bd575caffc1cc03
refs/heads/method/sfia-v2.4-consolidation-operating-efficiency d96dfcea5d081fce9e65a3629c1c4ed67c23619a
refs/heads/method/sfia-v2.4-reference-documentation-alignment e79a4408f50500e121c8ecaf009a9ed489e4a450
refs/heads/method/sfia-v2.4.1-documentation-status-promotion ecaf416da0d121176b618cefb1826ce6ac40b76e
refs/heads/method/sfia-v2.5-cycle-1-mvp 4e3947fe996e10d50bc77ce82f6ef409180c2193
refs/heads/method/sfia-v2.5-project-plan 7751855037cbf5a1e08977364d7ee0ca5f04ef0b
refs/heads/method/sfia-v2.5-review-pack-reset a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6
refs/heads/method/sfia-v2.6-repository-standard-decisions 56ce850cdee5fb219e48bc39af01a33a949cc765
refs/heads/method/sfia-v2x-method-versioning-standard a76c3f80af76cfd997d6d87bb2888bad9a74da78
refs/heads/migration/sfia-v2.6-lot-a-core d630c6cd765a51617917a9869ee20814657e586f
refs/heads/migration/sfia-v2.6-lot-d1-naming 930d5a243e372ddae4c856cfb199e0f4aa260906
refs/heads/migration/sfia-v2.6-lot-d2-naming f56c768506965f09523b60cd36f21ff75acd3c25
refs/heads/migration/sfia-v2.6-lot-d3-naming 093c91a39bdca3fac576568899c531cddb94e36d
refs/heads/modeled/sfia-studio-v3-native-option-a 52891e5c5a9b1254143e422111ea4955ca3a0940
refs/heads/notion/pause-notion-publication-track c79992b71b859847abbc8f1921f1832c133a272e
refs/heads/notion/provisioning-engine-design 38b91eb566ae6e016dfa2566e03cd3979366c9b8
refs/heads/notion/sfia-live-export-audit a7b22ec9e3ba2daa25c0ae19987d917077188051
refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
refs/heads/pr/sfia-studio-v3-native-option-a-foundation 9c0f6f970da896235dd1f62a8ba76aacae14243b
refs/heads/product/interv360-mvp-final-roadmap 14cadbe299bd959c9f9d934f1b711caf1ebaa489
refs/heads/project/campus360-detailed-framing ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/project/campus360-opportunity-framing 4275a60cf81acffa00e5faa77c33bd3a583ed599
refs/heads/project/chantiers360-v2-bootstrap 774beed72ce74f72c6f016554cccbfe157f4de1e
refs/heads/project/sfia-studio-functional-architecture 4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3
refs/heads/project/sfia-studio-functional-design cf64fdd82f9b71960111d22d10c0fb7e0433cb4d
refs/heads/project/sfia-studio-poc-orchestration-framing 3b162ecb5212e9f62ac20f0066df9fbc545be4cc
refs/heads/project/sfia-studio-pre-framing 18c642749e0c7bfe658a3a76868a251b92323183
refs/heads/project/sfia-studio-ux-ui-reconciliation 7bdabdcc0ea5f760383da190a661250dcd5d2598
refs/heads/prompts/create-templates-context-pack b6d9a881a24a2817469e7b818204ec8993d0bceb
refs/heads/qa/sfia-studio-m1-bypass-probe f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
refs/heads/qa/sfia-studio-m1-bypass-probe-revert b502c0069f836a729090bdc187dd98a0c26591ca
refs/heads/qualification/sfia-v2.6-lot-d-naming 3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99
refs/heads/qualification/sfia-v2.6-lot-e-global-controls b87413b54858af0740b3d1e37c7e3fee63aca726
refs/heads/qualification/sfia-v2.6-lot-f-superseded 2f89afdb6c29f1ab562e6b4e16ce51863b4281f7
refs/heads/qualification/sfia-v2.6-lot-f2-f005 7d87331a37e1899bdca32c2fafa2fabb0dc8d514
refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions f89ba5fb6cfca4e3de97667d944569a20266a8aa
refs/heads/recovery/campus360-detailed-framing 32690b618ba0ab208db7f1b6c16b6d79bf76dc78
refs/heads/recovery/sfia-studio-functional-architecture-sync a5ad0c07b60d652596d4962103ec445391a7827b
refs/heads/release/interv360-mvp-release-readiness dfc643097c07a676a8a17059f7aa8041dd74d2f7
refs/heads/sfia/review-handoff 24987074f4aa728cff616efa927ca016bc124831
refs/heads/spike/sfia-studio-openai-gpt-adapter 056c97f6a9838a99125f81e1a84cf17cd070b3fe
refs/heads/tooling/review-handoff-canonical-publisher 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
refs/heads/ux/sfia-studio-d1-conversational-convergence 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
refs/heads/validation/sfia-v2.6-lot-e2-validation 477fe5508a5bce8d396ee8214c4f03b97f9f0ad1
refs/heads/validation/sfia-v2.6-lot-f1a-f1b 15185f334960c93cdc8c6c6f0cb13200d95b0902

```

## Branches distantes avant
```
008dbff2b64221a1a86204a2d93da57d8bd34e8b	refs/heads/method/delivery-acceleration-level-3-rex
04183050b7a6ffe271ce4eec05b4cf2ddba65c99	refs/heads/delivery/interv360-api-product-hardening
056c97f6a9838a99125f81e1a84cf17cd070b3fe	refs/heads/spike/sfia-studio-openai-gpt-adapter
06751adf3a03843723c1c16f916b4b7c8a3187a4	refs/heads/delivery/interv360-inc-01-push-and-pr
08c282abafd97685bcc0b7e525ec96e6721ec589	refs/heads/delivery/sfia-studio-shared-technical-platform
091eebba81aa6dc80019c25584b9d8aa99517659	refs/heads/delivery/interv360-demo-mvp-closure
09204fcadc42e5c053d2c8d435a5b9fb9d082daa	refs/heads/docs/chantiers360-v2-inc-01-closure
093c91a39bdca3fac576568899c531cddb94e36d	refs/heads/migration/sfia-v2.6-lot-d3-naming
0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a	refs/heads/docs/sfia-v2.6-lot-e-closure
0b696ed970823aa75d013336e44e72de08f2ac57	refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
10cb8c05e0b5cd924a70f5142fca9dc0ae60f077	refs/heads/method/sfia-consolidation-roadmap
12efbb6bcad65a988588a33a54d574c0b08c7620	refs/heads/delivery/interv360-batch-01-demo-credibility
1398a465537db503c562e2e40ab1010fd0bcfd8f	refs/heads/method/sfia-v2-automation-vision
14cadbe299bd959c9f9d934f1b711caf1ebaa489	refs/heads/product/interv360-mvp-final-roadmap
14d58fe95a8f29c3dc1f72c794a64fedbc795bbe	refs/heads/tooling/review-handoff-canonical-publisher
15185f334960c93cdc8c6c6f0cb13200d95b0902	refs/heads/validation/sfia-v2.6-lot-f1a-f1b
153c50bc4e1638128e42629e828774bbadfce369	refs/heads/documentation/sfia-discovery-act-02-editorial
1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa	refs/heads/delivery/interv360-role-simulation
158bdf01c5cd72ed723d56d28cc69d3d44276632	refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison
16fe9c36859e9798c9e158f2c7a461b85d275dd5	refs/heads/tooling/penpot-mcp-self-host-feedback
18c642749e0c7bfe658a3a76868a251b92323183	refs/heads/project/sfia-studio-pre-framing
18d21511efaaf62b8a332b9e289f2355830b9617	refs/heads/capitalization/sfia-studio-poc-framing-post-merge
1a2fa31fab6343bdd0eab7211febb3bcc5326c33	refs/heads/docs/sfia-studio-recover-unmerged-project-docs
1b44bc1c063b977a5f309108fc8b45f3e1d425fe	refs/heads/delivery/interv360-product-demo-consolidation
1bb55f01c1f87cf1a2d51f379831bb2b910394e0	refs/heads/method/sfia-v2-figma-design-cycle
1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4	refs/heads/method/sfia-v2-prompt-routing-alignment
1c0311d2a18a38b739e8429c90ff347a0c05436c	refs/heads/delivery/interv360-backend-users-session
1d795fc6afd39a512179350b49ff67c14b7db201	refs/heads/docs/chantiers360-v2-inc-03-closure
1ef4d67f080fd42789e3daa3ded1f4247848a1f9	refs/heads/fix/chantiers360-v2-rqa02-status-alignment
22d8dcfc009c39cd2645252f05a85a61136d71ad	refs/heads/method/sfia-v2-pilot-selection-scoring
245f515c3f8baaf0c2cf72b59af0635a1b0efb67	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
24987074f4aa728cff616efa927ca016bc124831	refs/heads/sfia/review-handoff
2645df2b35676780eb42c6f9a50f3e8fde04a768	refs/heads/method/sfia-v2-delivery-qa-test-standard
2830efd0f2735141641e816ccac82475ccb30c74	refs/heads/archive/sfia-v2.6-lot-0-completion
28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f	refs/heads/documentation/sfia-discovery-pd-09-capitalization
2bddcedfff871e2dd61d60c39ff48554bbbb4049	refs/heads/docs/sfia-v231-final-status
2e6816653b2c7030a83039c799346860dd5ec097	refs/heads/docs/chantiers360-v0-vs-v2-post-merge
2ef34cb8c4d65eae4a35143a4a60589654a73fe2	refs/heads/method/interv360-mvp-delivery-capitalization
2f89afdb6c29f1ab562e6b4e16ce51863b4281f7	refs/heads/qualification/sfia-v2.6-lot-f-superseded
314794a39a73dbf8287ec3b7d5275cdf535a4705	refs/heads/docs/chantiers360-v2-post-capitalization-alignment
33ea3e87facc8c99c9c5619d6d2424030d3918a2	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57	refs/heads/delivery/sfia-studio-ops1-i3-action-gate
38b91eb566ae6e016dfa2566e03cd3979366c9b8	refs/heads/notion/provisioning-engine-design
3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99	refs/heads/qualification/sfia-v2.6-lot-d-naming
3b162ecb5212e9f62ac20f0066df9fbc545be4cc	refs/heads/project/sfia-studio-poc-orchestration-framing
3bba55b7b34ef118006a9fe61464ba61f3f941d2	refs/heads/delivery/interv360-product-industrialization
402150287434bd844e1948c1b85ef6f58b90d3c2	refs/heads/documentation/sfia-discovery-legacy-migration-plan
406a8839945236f9eb8a0cd858ef53f7ef64ece9	refs/heads/delivery/chantiers360-v2-inc-04
40b6f00d4dce6f8524dbfc9f4574fba87ea491d8	refs/heads/capitalization/sfia-v2.6-repository-rationalization
41b9c46f5b02e352267920eb1cefef5cf447d324	refs/heads/delivery/sfia-studio-poc-increment-d
4275a60cf81acffa00e5faa77c33bd3a583ed599	refs/heads/project/campus360-opportunity-framing
438b3bbe8e610c1a485b71c7e152709f69a1b624	refs/heads/docs/chantiers360-v2-final-pilot-rex
4546d88edbf47b4eee65933fccaa21c076f6d148	refs/heads/cycle/chantiers360-v2-detailed-framing
45e4498813734884ca57c9e822e3392c8e75cc0e	refs/heads/consolidation/sfia-documentation-review
477fe5508a5bce8d396ee8214c4f03b97f9f0ad1	refs/heads/validation/sfia-v2.6-lot-e2-validation
4a6c7b7c2b409b9e1eed43655432636a9f0a40c8	refs/heads/delivery/interv360-demo-presentation-review
4ae75a9d590d397456ba2e3de3815555a5b57ddf	refs/heads/audit/sfia-v2.6-repository-cartography
4d6e465eec7fef6cf0f4f8af3435636ca1bd456a	refs/heads/delivery/interv360-batch-03-demo-readiness-package
4e3947fe996e10d50bc77ce82f6ef409180c2193	refs/heads/method/sfia-v2.5-cycle-1-mvp
4ee36eea7a5c06953af2f653af9f3a96e178e4f2	refs/heads/architecture/interv360-backend-persistence-decision
4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3	refs/heads/project/sfia-studio-functional-architecture
4fad47f72a7d6cde655d98a64351bb4624ed9ad1	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
5481b748e9b2968b5801149a762e255bb926ca38	refs/heads/delivery/interv360-demo-presentation-feedback
55b2f0c2fdde34b6775d5d8201768eab98200014	refs/heads/cycle/chantiers360-v2-light-architecture
56ce850cdee5fb219e48bc39af01a33a949cc765	refs/heads/method/sfia-v2.6-repository-standard-decisions
5733d25b4b4c7ada042af2776fe1d3154c0b5583	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
58fb275038bde920cf58001973f6809a6e10ffdf	refs/heads/design/sfia-studio-poc-vertical-slice
5afe09516fd94fff466340dc0c1f877712f13f42	refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion
5b5758f701903410f27f7d2bc8cb5fa980293599	refs/heads/method/chantiers360-v2-inc-01-capitalization
5cd2b4e78ad434a5fe40c90ee2107466dd074896	refs/heads/delivery/interv360-workflow-light-extension
5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d	refs/heads/cycle/chantiers360-v2-design-figma
5febd0f6ce250181e5fe4918813e05526ea2b3f0	refs/heads/delivery/interv360-demo-feedback-review
6583ddf31da43db0d9fde2b630da806d0a9c9d06	refs/heads/delivery/chantiers360-v2-inc-03
65e5b606c2cddf443b95a890855f5097cb2ec93f	refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
662f1c3d36e7755a18f120e848e69e730b6446c6	refs/heads/docs/chantiers360-close-r-qa-04
672d72bb2794bc66e575c2e4d47625b69035caff	refs/heads/method/sfia-v2-figma-fidelity-gate-standard
67f140a19cf4a992dbc0d7b053abfde579a9a68c	refs/heads/docs/sfia-studio-fa6-mitigated-from-main
6849b6f7530310ae669a5bd2e4f4a3f3323ccda6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
69325d09cc9d2936694412efee5d107c9ee62cf4	refs/heads/delivery/interv360-inc-03-pr-preparation
694fedcca20b960815d55cf825315d3b497c93ba	refs/heads/delivery/sfia-v2.6-lot-h
69a33ed0ee72745b693ae82329bfb7a5dcec55ce	refs/heads/delivery/interv360-api-product-validation
69b82461398c32be1dcc60a91cd1cb1036703f1e	refs/heads/architecture/interv360-product-roadmap-next
6cdda92f2354effd93213f971051c22df76c05d2	refs/heads/docs/close-lot-d3-status
6cf7d361d9543a2a8b1fff8f78ea72be75f303f0	refs/heads/archive/sfia-v2.6-lot-0-inventories
6d44882dc76acb628481e55916b6cc04f400d13a	refs/heads/cycle/chantiers360-v2-figma-fidelity-spike
6dded2000063b14ad4500d7b9b65b926578726e1	refs/heads/delivery/interv360-request-model-productization
6f8c72b007661790b85be3f811c4c649e8238b6b	refs/heads/delivery/interv360-connected-ux-productization
6fcc76a2353c4d9322280845100fad2c2bb93ea1	refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial
70a11108f9a778f92f6f98f45117818f09477fe8	refs/heads/architecture/interv360-product-roadmap-after-role-simulation
728231760b2414147c655eacc44afa46fb0f9192	refs/heads/method/sfia-v2-pilot-selection-decision
733cbfffbaaa796240fa68f6c9148f9b62cabeb2	refs/heads/architecture/interv360-role-simulation-review
75aee25a33e45b63b96805e85d72326d1525b056	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
774beed72ce74f72c6f016554cccbfe157f4de1e	refs/heads/project/chantiers360-v2-bootstrap
7751855037cbf5a1e08977364d7ee0ca5f04ef0b	refs/heads/method/sfia-v2.5-project-plan
78859034e769c449901835a1b9431deb56dc0c3c	refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes
7bdabdcc0ea5f760383da190a661250dcd5d2598	refs/heads/project/sfia-studio-ux-ui-reconciliation
7d87331a37e1899bdca32c2fafa2fabb0dc8d514	refs/heads/qualification/sfia-v2.6-lot-f2-f005
7e65429b22338b40438307e3f64fa3b46d6cc233	refs/heads/documentation/sfia-discovery-acts-04-05-editorial
7ef160c6fd8a99267a9e553fd77d13aa7e6f95da	refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
7ef233a93b3c76099247937dc4deb524e623ab0a	refs/heads/delivery/interv360-api-demo-hardening
8099a96de369d820c7a82c27d8309ecf2da34217	refs/heads/consolidation/interv360-current-app-audit
80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e	refs/heads/method/sfia-v2-automation-levels
824883c8d4593276fa7129187dba7efcf7b117ef	refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data
82c78239ec1cbb83a66c714685374a70025fbae2	refs/heads/delivery/interv360-inc-02-pr-preparation
8316f26de1ade4bbf0e698ce03666e977daa87cb	refs/heads/delivery/sfia-studio-poc-increment-b
8763417ab21060ae1ba83083696d704ec4b6507c	refs/heads/method/interv360-final-capitalization
87662a20e9a885e44acf50dee74a7017ab2ac9e9	refs/heads/delivery/interv360-audit-trail
8815f0f1e4576f07c4768decb8990b2bbf6e7a54	refs/heads/docs/close-lot-d1-status
89cb7565507a0a5303de9004feb1e2e9f14d3d39	refs/heads/delivery/sfia-studio-poc-increment-a
8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb	refs/heads/evol/chantiers360-post-mvp-framing
930d5a243e372ddae4c856cfb199e0f4aa260906	refs/heads/migration/sfia-v2.6-lot-d1-naming
934be03e55dd3e237ab42f0ebec597a377ecfbaf	refs/heads/cycle/chantiers360-v2-functional-architecture
94f71f21db99026992ffb638fcf18f23d8e9227c	refs/heads/docs/chantiers360-v2-inc-01-qa-g4
960c90b32b2c1c5701a668b0ebc70fdd847c681b	refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
96bb808bb6f2ea7f09878c970bb89b5978c2abb8	refs/heads/delivery/sfia-studio-poc-increment-c
96bd25ee22643a1ad8e3d8077bbb0ecf218430ad	refs/heads/docs/chantiers360-v2-inc-04-qa-g4
9987df647b0e6af1519ec46168decd9db5493075	refs/heads/docs/chantiers360-v2-inc-05-closure
9babc8c052626e971b8eb4d324d58e16ccf9e307	refs/heads/cycle/chantiers360-v2-mvp-backlog
9c0f6f970da896235dd1f62a8ba76aacae14243b	refs/heads/pr/sfia-studio-v3-native-option-a-foundation
9c125059f3323a7df862b96d32f1940b1cbdefc1	refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
9d425dd842e1317ec9213d3ec220d2633f0dff31	refs/heads/decision/chantiers360-v2-architecture-arbitrages
9e0a9c81ceaf54e2147ba1cf87884d2c23399306	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
9e7bcb3deca0b909370e13b91440aa872a460ba0	refs/heads/docs/chantiers360-v2-technical-architecture-post-merge
9f03916243c470587f6958e058fd58909e5bd75a	refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
a23cefcb90bd78ff3ff692cf194c4d0fdc06f229	refs/heads/delivery/interv360-frontend-api-connection
a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb	refs/heads/documentation/sfia-discovery-acts-06-07-editorial
a310850ab136d84ca45f784ccc44df9cbe63ae6c	refs/heads/delivery/interv360-backend-minimal-prototype
a42a85c0c0b3e146e59f82ea753329ed9253f278	refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge
a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6	refs/heads/method/sfia-v2.5-review-pack-reset
a6eb49d0f003bf4411c40dd799b54047e86f1d8a	refs/heads/delivery/interv360-batch-02-demo-control-scenario
a76c3f80af76cfd997d6d87bb2888bad9a74da78	refs/heads/method/sfia-v2x-method-versioning-standard
a7b22ec9e3ba2daa25c0ae19987d917077188051	refs/heads/notion/sfia-live-export-audit
a830842aa0b60b35ebc845e88550fe1927288eec	refs/heads/delivery/interv360-workflow-requalification
adcda831ff1805e14a464085628c2e4b3d5d4eac	refs/heads/method/chantiers360-v2-mvp-capitalization
af5d9a25f0c832367f21e520c3d2e10998bcfe23	refs/heads/docs/fix-lot-d-plan-status
b11b318ab1b79d72be484d784c1607c4d6a95a81	refs/heads/consolidation/sfia-global-capitalization
b3bd01f4e81fe4b9e30f4a039232f7824ac29c19	refs/heads/delivery/interv360-request-model-finalization
b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05	refs/heads/backlog/sfia-studio-poc-vertical-slice
b502c0069f836a729090bdc187dd98a0c26591ca	refs/heads/qa/sfia-studio-m1-bypass-probe-revert
b6a19335f5116940175f5986492e3693722563bc	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6d9a881a24a2817469e7b818204ec8993d0bceb	refs/heads/prompts/create-templates-context-pack
b763a318fb84e23e482ed23a0bd561c1d9e719e6	refs/heads/cadrage/task-tracker-light
b7a5e827fddb7e80f03a71b3b64ca89271ede0a6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
b87413b54858af0740b3d1e37c7e3fee63aca726	refs/heads/qualification/sfia-v2.6-lot-e-global-controls
b8eb9454c94b74fbdfdfdf596a9329c749dfd266	refs/heads/fix/remove-controlled-delivery-broken-link
bbd54bf46d211b467e1b3a82404e700a82270984	refs/heads/docs/chantiers360-v2-design-coverage-post-merge
bc697d8c87a2c660c3e51f2079eb1817e59c89b0	refs/heads/method/sfia-v2-design-coverage-rules
bcc6d379571280142aa5eff6c8baa9615978fc95	refs/heads/delivery/chantiers360-v2-inc-05
bd3608c6220e820cc3fa017422a7564a565a1296	refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
be10f7a92828cfb7761bdcbb591c38c759d9ffa3	refs/heads/delivery/interv360-auth-user-switcher
be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6	refs/heads/cycle/chantiers360-v2-ux-ui
bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35	refs/heads/architecture/interv360-product-industrialization-framing
bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4	refs/heads/delivery/interv360-batch-04-demo-presentation-package
c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5	refs/heads/docs/sfia-v2x-versioning-post-merge
c0fc4b26af701a97ebec7b75c54247ab775ab4c1	refs/heads/docs/close-lot-d2-status
c24da112ed3d67479d7b3e7715c78da3c26be78e	refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction
c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9	refs/heads/delivery/sfia-studio-d1-shared-platform-integration
c4cc0b02c18300808d788810d8830dcfdc4979fa	refs/heads/cleanup/sfia-v2.6-lot-j
c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2	refs/heads/delivery/chantiers360-v2-inc-02
c520b819446cbc5cf28cb7327357f5cd60049293	refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
c79992b71b859847abbc8f1921f1832c133a272e	refs/heads/notion/pause-notion-publication-track
c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf	refs/heads/delivery/sfia-studio-control-tower-fast-track
ca93e0805b499f9cae6cacd84e37cbb122d89a1c	refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition
cae841519ed1d2dd825e6ecb998337cd47b4a1e1	refs/heads/method/sfia-cycle-knowledge-contracts
cbba66bfc4bf3b780f54945a562900fb1ce74603	refs/heads/method/sfia-v2-project-bootstrap-standard
cf64fdd82f9b71960111d22d10c0fb7e0433cb4d	refs/heads/project/sfia-studio-functional-design
d248b9db91f4f10c16885c9f931f4cdd0f966316	refs/heads/design/sfia-studio-ops1-scenario
d306054f7622c48e86ca23ff4386a0a35590c9c6	refs/heads/delivery/interv360-inc-04-list-filtering-local-summary
d30ca7299a13a3ce9955d06e69e9ea976d150551	refs/heads/docs/chantiers360-v2-inc-05-qa-g4
d4401c3da6c08cb7e8716fea5a513df22d467c0e	refs/heads/archive/sfia-v2.6-lot-c-v3-mcp
d54c952c3c4118f37a95800a55a7bfcd99a8af98	refs/heads/cadrage/sfia-v2.6-lot-h
d630c6cd765a51617917a9869ee20814657e586f	refs/heads/migration/sfia-v2.6-lot-a-core
d672317108ca30c3df5a6d2f9b19b33c0c717476	refs/heads/docs/chantiers360-v2-readme-post-closure
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
d8394b75ec7a28c3e39f074b025d9eef877c900c	refs/heads/delivery/interv360-demo-polish
d8f43775cd3fcd1cf8b633a63bd575caffc1cc03	refs/heads/method/sfia-v2-technical-architecture-decision-standard
d96dfcea5d081fce9e65a3629c1c4ed67c23619a	refs/heads/method/sfia-v2.4-consolidation-operating-efficiency
daf6f7d02bbac09024f6275a793769e66b2b3878	refs/heads/method/sfia-studio-v3-doctrine-consolidation
dc4c971543258317166f79bf1e1f8baaee38f207	refs/heads/consolidation/interv360-application-rex
dc7a24cfed4c3cd3fe584e4948847551e7af4cff	refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
dd2a68c6a1e45fee1e1f397cb644c2c082a3d877	refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction
dfc643097c07a676a8a17059f7aa8041dd74d2f7	refs/heads/release/interv360-mvp-release-readiness
e106d9143def77ac92164299c8977ab96a43517a	refs/heads/delivery/interv360-product-ux-finalization
e1befcb80ed5e3c789a7de9036a8207d6b3e6771	refs/heads/main
e2006897c492fc8d83a185ce818ddb5e3ea47164	refs/heads/audit/sfia-v2.6-lot-0-qualification
e461c6f238de494872fd1cbba6356ea08f0b9db5	refs/heads/docs/chantiers360-v2-inc-02-closure
e65a4d23443b8745639e045eccabe7be304b0809	refs/heads/delivery/chantiers360-v2-inc-01
e79a4408f50500e121c8ecaf009a9ed489e4a450	refs/heads/method/sfia-v2.4-reference-documentation-alignment
e97e083a749d88b8556ffd81edc0160a432df137	refs/heads/capitalization/sfia-studio-p0-status-sync
eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4	refs/heads/docs/chantiers360-v2-inc-04-closure
ec073f646eb75bd5696fb26ee0b4508a99315444	refs/heads/docs/chantiers360-v2-inc-02-qa-g4
ecaf416da0d121176b618cefb1826ce6ac40b76e	refs/heads/method/sfia-v2.4.1-documentation-status-promotion
ed2c0f4c63355867ab322f850189fac4144f064f	refs/heads/delivery/interv360-end-to-end-demo-hardening
ed3304402d5c9d2f014c50741e9dc7fd508cb24a	refs/heads/docs/sfia-studio-pr226-post-merge-sync
f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23	refs/heads/qa/sfia-studio-m1-bypass-probe
f136c33204b4df9c01198d7ff65fb9612d88e265	refs/heads/docs/chantiers360-v2-inc-03-qa-g4
f2a822ea2b2800484a0525b72a0473e55997f14f	refs/heads/method/sfia-3-exploration-closure
f39adb8c23be6740ba57194608ada3a62f0d72ca	refs/heads/delivery/interv360-backend-persistence
f56c768506965f09523b60cd36f21ff75acd3c25	refs/heads/migration/sfia-v2.6-lot-d2-naming
f7f2e18d825add5195c611760788fbd79aaf98aa	refs/heads/conception/sfia-notion-product-space
f89ba5fb6cfca4e3de97667d944569a20266a8aa	refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
f8d25c2dc523020b0443c2b16f375edbf7f5631b	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
f934a3c54260a880b4c8d28130407961c46cdc28	refs/heads/documentation/sfia-discovery-pd-08-qa
fa0eebe00ce3b765a8a486aa660dddfab40123a0	refs/heads/docs/sfia-studio-m1-capitalization-rex
fe9309006aa05493418be9ac6cc38d38ad1b1c39	refs/heads/docs/chantiers360-v2-post-spike-alignment

```

## Worktrees avant
```
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca
branch refs/heads/qa/sfia-studio-m1-bypass-probe-revert

worktree /Users/morris/Projects/sfia-workspace-m1-capitalization
HEAD fa0eebe00ce3b765a8a486aa660dddfab40123a0
branch refs/heads/docs/sfia-studio-m1-capitalization-rex

worktree /Users/morris/Projects/sfia-workspace-option-a-after-t-a6
HEAD aef7fd6d5a678857cf36e490f1550866d47c8887
branch refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance
HEAD 2f9560534e285c5b8105f81dca39c5252667860c
branch refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
HEAD a42a85c0c0b3e146e59f82ea753329ed9253f278
branch refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge

worktree /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
HEAD 9f03916243c470587f6958e058fd58909e5bd75a
branch refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-t-a6-post-merge
HEAD 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
branch refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
HEAD 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
HEAD 960c90b32b2c1c5701a668b0ebc70fdd847c681b
branch refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status

worktree /Users/morris/Projects/sfia-workspace-t-a7-framing
HEAD b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
HEAD d77c775f6114eddd04af330cc943a869a5c4f6a2
branch refs/heads/capitalization/sfia-studio-v3-1-d1-rex

worktree /Users/morris/Projects/sfia-workspace-t-a7-next-decision
HEAD 33ea3e87facc8c99c9c5619d6d2424030d3918a2
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step

worktree /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
HEAD b6a19335f5116940175f5986492e3693722563bc
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
HEAD f89ba5fb6cfca4e3de97667d944569a20266a8aa
branch refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
HEAD 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope

worktree /Users/morris/Projects/sfia-workspace-template-handoff-fix
HEAD 134be301792efbf6f9739d13f0572062ef976da7
detached

worktree /Users/morris/Projects/sfia-workspace-ux-reconciliation
HEAD 7bdabdcc0ea5f760383da190a661250dcd5d2598
branch refs/heads/project/sfia-studio-ux-ui-reconciliation

worktree /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
HEAD daf6f7d02bbac09024f6275a793769e66b2b3878
branch refs/heads/method/sfia-studio-v3-doctrine-consolidation

worktree /Users/morris/Projects/sfia-workspace-v3-native-audit
HEAD 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
branch refs/heads/audit/sfia-studio-v3-native-dependencies

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
HEAD 577ff0c22491288d2293fd9730ed26f0af4095b0
branch refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-design
HEAD e22bc243c8854df4e9422fafe46e92135fe242e9
branch refs/heads/design/sfia-studio-v3-native-option-a-functional

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
HEAD 52891e5c5a9b1254143e422111ea4955ca3a0940
branch refs/heads/modeled/sfia-studio-v3-native-option-a

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
HEAD 0b696ed970823aa75d013336e44e72de08f2ac57
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
HEAD 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
branch refs/heads/design/sfia-studio-v3-native-option-a-ux-ui

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0

worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
HEAD 24987074f4aa728cff616efa927ca016bc124831
branch refs/heads/sfia/review-handoff


```

## Pre-check / switch / FF
Command log:
```
=== RECHECK BEFORE SWITCH ===
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
non_tmp_status=[]
staged=       0
wt_count=77
main_checkouts=0
remote_cap=d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
=== SWITCH ===
switch_exit=0
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
current=main
HEAD=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
non_tmp_after_switch=[]
staged=       0
wt_count=77
source_checkouts=0
=== FF PRECHECK ===
ancestor_ok=YES
L/R=0	2
=== FF ONLY ===
ff_exit=0
current=main
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
L/R=0	0
non_tmp_after_ff=[]
=== PRECHECK LOCAL DELETE ===
src_ancestor=YES
diff_src_main=
merged_has_source=1
source_checked_out=0
=== LOCAL DELETE -d ===
local_delete_exit=0
LOCAL_SOURCE_ABSENT=YES
remote_cap_still=d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
=== PRECHECK REMOTE DELETE ===
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
remote_cap=d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
wt_count=77
=== REMOTE DELETE ===
remote_delete_exit=0
=== AFTER SOURCE CLEANUP ===
current=main
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
LOCAL_ABSENT=YES
remote_tracking=
ls_remote_cap=
wt_count=77
non_tmp=[]
staged=       0

```

## Preuve main = origin/main
e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## Suppression locale exacte
`git branch -d capitalization/sfia-studio-v3-1-d1-rex` — Deleted (was d77c775)
Absence `git branch -D`: OUI

## Suppression distante exacte
`git push origin --delete capitalization/sfia-studio-v3-1-d1-rex` — deleted
Absence force: OUI

## Branches après cleanup
```
refs/heads/architecture/interv360-backend-api-contract-framing 7f24665adcff5022c32832d4a543f44345011488
refs/heads/architecture/interv360-backend-data-model-decision 0f2f6c4d740677da922c45e85b3d5814e6cf9bf0
refs/heads/architecture/interv360-backend-persistence-decision 4ee36eea7a5c06953af2f653af9f3a96e178e4f2
refs/heads/architecture/interv360-backend-target-framing 4b59b51e743a87951a704d0df3075aa9e7702309
refs/heads/architecture/interv360-backend-technical-stack-decision 98567700c5edbbebc18728fd60c7cfb5ed7e1663
refs/heads/architecture/interv360-product-industrialization-framing bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35
refs/heads/architecture/interv360-product-roadmap-after-persistence 572d06137cfe5d56b1fd1ee848f9fb1e79ad1d8c
refs/heads/architecture/interv360-product-roadmap-after-role-simulation 70a11108f9a778f92f6f98f45117818f09477fe8
refs/heads/architecture/interv360-product-roadmap-next 69b82461398c32be1dcc60a91cd1cb1036703f1e
refs/heads/architecture/interv360-role-simulation-review 733cbfffbaaa796240fa68f6c9148f9b62cabeb2
refs/heads/architecture/sfia-studio-v3-native-option-a-technical e8166adb2634a659667bdfd246d5cf851958cccc
refs/heads/archive/sfia-v2.6-lot-0-completion 2830efd0f2735141641e816ccac82475ccb30c74
refs/heads/archive/sfia-v2.6-lot-0-inventories 6cf7d361d9543a2a8b1fff8f78ea72be75f303f0
refs/heads/archive/sfia-v2.6-lot-c-v3-mcp d4401c3da6c08cb7e8716fea5a513df22d467c0e
refs/heads/audit/sfia-studio-v3-native-dependencies 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
refs/heads/audit/sfia-v2.6-lot-0-qualification e2006897c492fc8d83a185ce818ddb5e3ea47164
refs/heads/audit/sfia-v2.6-repository-cartography 4ae75a9d590d397456ba2e3de3815555a5b57ddf
refs/heads/backlog/sfia-studio-ops1 4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e
refs/heads/backlog/sfia-studio-poc-vertical-slice b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05
refs/heads/cadrage/sfia-v2.6-lot-h d54c952c3c4118f37a95800a55a7bfcd99a8af98
refs/heads/cadrage/task-tracker-light b763a318fb84e23e482ed23a0bd561c1d9e719e6
refs/heads/capitalization/sfia-documentation-completeness ef2f7bf16fdfcb8c74d425cf561fabd89d951c80
refs/heads/capitalization/sfia-studio-p0-status-sync e97e083a749d88b8556ffd81edc0160a432df137
refs/heads/capitalization/sfia-studio-poc-framing-post-merge 18d21511efaaf62b8a332b9e289f2355830b9617
refs/heads/capitalization/sfia-v2.6-repository-rationalization 40b6f00d4dce6f8524dbfc9f4574fba87ea491d8
refs/heads/cleanup/sfia-v2.6-lot-j c4cc0b02c18300808d788810d8830dcfdc4979fa
refs/heads/conception/sfia-notion-product-space f7f2e18d825add5195c611760788fbd79aaf98aa
refs/heads/consolidation/interv360-application-rex dc4c971543258317166f79bf1e1f8baaee38f207
refs/heads/consolidation/interv360-current-app-audit 8099a96de369d820c7a82c27d8309ecf2da34217
refs/heads/consolidation/sfia-documentation-review 45e4498813734884ca57c9e822e3392c8e75cc0e
refs/heads/consolidation/sfia-global-capitalization b11b318ab1b79d72be484d784c1607c4d6a95a81
refs/heads/cycle/chantiers360-v2-design-figma 5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d
refs/heads/cycle/chantiers360-v2-detailed-framing 4546d88edbf47b4eee65933fccaa21c076f6d148
refs/heads/cycle/chantiers360-v2-figma-fidelity-spike 6d44882dc76acb628481e55916b6cc04f400d13a
refs/heads/cycle/chantiers360-v2-functional-architecture 934be03e55dd3e237ab42f0ebec597a377ecfbaf
refs/heads/cycle/chantiers360-v2-light-architecture 55b2f0c2fdde34b6775d5d8201768eab98200014
refs/heads/cycle/chantiers360-v2-mvp-backlog 9babc8c052626e971b8eb4d324d58e16ccf9e307
refs/heads/cycle/chantiers360-v2-ux-ui be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6
refs/heads/decision/chantiers360-v2-architecture-arbitrages 9d425dd842e1317ec9213d3ec220d2633f0dff31
refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data 824883c8d4593276fa7129187dba7efcf7b117ef
refs/heads/delivery/chantiers360-v2-inc-01 e65a4d23443b8745639e045eccabe7be304b0809
refs/heads/delivery/chantiers360-v2-inc-02 c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2
refs/heads/delivery/chantiers360-v2-inc-03 6583ddf31da43db0d9fde2b630da806d0a9c9d06
refs/heads/delivery/chantiers360-v2-inc-04 406a8839945236f9eb8a0cd858ef53f7ef64ece9
refs/heads/delivery/chantiers360-v2-inc-05 bcc6d379571280142aa5eff6c8baa9615978fc95
refs/heads/delivery/eventops-poc-visible-slice-01 e1befcb80ed5e3c789a7de9036a8207d6b3e6771
refs/heads/delivery/interv360-api-demo-hardening 7ef233a93b3c76099247937dc4deb524e623ab0a
refs/heads/delivery/interv360-api-product-hardening 04183050b7a6ffe271ce4eec05b4cf2ddba65c99
refs/heads/delivery/interv360-api-product-validation 69a33ed0ee72745b693ae82329bfb7a5dcec55ce
refs/heads/delivery/interv360-audit-trail 87662a20e9a885e44acf50dee74a7017ab2ac9e9
refs/heads/delivery/interv360-auth-user-switcher be10f7a92828cfb7761bdcbb591c38c759d9ffa3
refs/heads/delivery/interv360-backend-minimal-prototype a310850ab136d84ca45f784ccc44df9cbe63ae6c
refs/heads/delivery/interv360-backend-persistence f39adb8c23be6740ba57194608ada3a62f0d72ca
refs/heads/delivery/interv360-backend-users-session 1c0311d2a18a38b739e8429c90ff347a0c05436c
refs/heads/delivery/interv360-batch-01-demo-credibility 12efbb6bcad65a988588a33a54d574c0b08c7620
refs/heads/delivery/interv360-batch-02-demo-control-scenario a6eb49d0f003bf4411c40dd799b54047e86f1d8a
refs/heads/delivery/interv360-batch-03-demo-readiness-package 4d6e465eec7fef6cf0f4f8af3435636ca1bd456a
refs/heads/delivery/interv360-batch-04-demo-presentation-package bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4
refs/heads/delivery/interv360-connected-ux-productization 6f8c72b007661790b85be3f811c4c649e8238b6b
refs/heads/delivery/interv360-demo-feedback-review 5febd0f6ce250181e5fe4918813e05526ea2b3f0
refs/heads/delivery/interv360-demo-mvp-closure 091eebba81aa6dc80019c25584b9d8aa99517659
refs/heads/delivery/interv360-demo-polish d8394b75ec7a28c3e39f074b025d9eef877c900c
refs/heads/delivery/interv360-demo-presentation-feedback 5481b748e9b2968b5801149a762e255bb926ca38
refs/heads/delivery/interv360-demo-presentation-review 4a6c7b7c2b409b9e1eed43655432636a9f0a40c8
refs/heads/delivery/interv360-end-to-end-demo-hardening ed2c0f4c63355867ab322f850189fac4144f064f
refs/heads/delivery/interv360-frontend-api-connection a23cefcb90bd78ff3ff692cf194c4d0fdc06f229
refs/heads/delivery/interv360-frontend-api-connection-framing f15956a414d89e18b8254447972195d93f36586d
refs/heads/delivery/interv360-implementation-go-no-go 8cc09b11b82f05d28d51f49b3de209e5206b8389
refs/heads/delivery/interv360-inc-01-action-transition-decision aa5092f862e556888731830939ec5c5ec8b97347
refs/heads/delivery/interv360-inc-01-app-foundation 2d7f1215c832065766aad74ad1480b321b2c7c33
refs/heads/delivery/interv360-inc-01-controlled-workflow-skeleton 1fae1ce091ee8bf3f37c85fec6ee0c2e05242370
refs/heads/delivery/interv360-inc-01-controlled-workflow-validation 16c333903f4e21151db772736f921baf02edfec9
refs/heads/delivery/interv360-inc-01-demo-reset 5588977299d11b2db0525cc0f2c92f6e70cad3ce
refs/heads/delivery/interv360-inc-01-demo-script 95695751d516c1732f1c00e79728e54a46c12ed1
refs/heads/delivery/interv360-inc-01-final-demo-package 140a5beb8178e79efe39facd4022a1f742edbe1c
refs/heads/delivery/interv360-inc-01-global-summary 985ebcb5491207f411ed6b5f7664ba226aeda050
refs/heads/delivery/interv360-inc-01-implementation-preparation 0588ee22f1fd985f6febd5c5275b2d4282332b2c
refs/heads/delivery/interv360-inc-01-intervention-readonly-skeleton ed5f9ba8cb14781a681a06db09ef4545e420966f
refs/heads/delivery/interv360-inc-01-list-skeleton 58193676881df0818727ae49d4d5913c8b20024f
refs/heads/delivery/interv360-inc-01-local-persistence-decision 020f773bbfa6674a92ad97e0db16112a732206f6
refs/heads/delivery/interv360-inc-01-phase-2-delivery-decision 4f1eb6ab91dfb055ba3a9045a1be6de87a5ad583
refs/heads/delivery/interv360-inc-01-phase-2-rex 7a428a70db16ef815b32e423e9d2569aea22834e
refs/heads/delivery/interv360-inc-01-planning-readonly-skeleton 841113896fa93617fe39c6bd37f136771b262298
refs/heads/delivery/interv360-inc-01-pr-preparation 4f7af01d22d214dd3a3ae3e9a1fcf833425c5c5e
refs/heads/delivery/interv360-inc-01-push-and-pr 06751adf3a03843723c1c16f916b4b7c8a3187a4
refs/heads/delivery/interv360-inc-01-qualification-readonly-skeleton 5033c2400b18802dfa1c4dd821398c5604a7a197
refs/heads/delivery/interv360-inc-01-readonly-demo-summary 0e25e584636c8c786da3b9bb72699dfcfb0918d2
refs/heads/delivery/interv360-inc-01-report-readonly-skeleton 94a50c0fc08bfe199d99b2422bd44d55545015a9
refs/heads/delivery/interv360-inc-01-request-detail-skeleton ab27aad6dd1d8ea69e90c1a351171b5ca8f994f7
refs/heads/delivery/interv360-inc-02-pr-preparation 82c78239ec1cbb83a66c714685374a70025fbae2
refs/heads/delivery/interv360-inc-02-ux-demo-improvement e9de7bebe2384c42983ec86db846d3a2f2193b53
refs/heads/delivery/interv360-inc-03-multi-requests-local-demo 5f6e2cc86bfb5e2624ebdd79068de1d6729e8e7c
refs/heads/delivery/interv360-inc-03-pr-preparation 69325d09cc9d2936694412efee5d107c9ee62cf4
refs/heads/delivery/interv360-inc-04-list-filtering-local-summary d306054f7622c48e86ca23ff4386a0a35590c9c6
refs/heads/delivery/interv360-product-demo-consolidation 1b44bc1c063b977a5f309108fc8b45f3e1d425fe
refs/heads/delivery/interv360-product-industrialization 3bba55b7b34ef118006a9fe61464ba61f3f941d2
refs/heads/delivery/interv360-product-ux-finalization e106d9143def77ac92164299c8977ab96a43517a
refs/heads/delivery/interv360-request-model-finalization b3bd01f4e81fe4b9e30f4a039232f7824ac29c19
refs/heads/delivery/interv360-request-model-productization 6dded2000063b14ad4500d7b9b65b926578726e1
refs/heads/delivery/interv360-role-simulation 1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa
refs/heads/delivery/interv360-technical-arbitration ba81999c47296ae86ff2f908ea8f34f0035a8ee2
refs/heads/delivery/interv360-workflow-light-extension 5cd2b4e78ad434a5fe40c90ee2107466dd074896
refs/heads/delivery/interv360-workflow-requalification a830842aa0b60b35ebc845e88550fe1927288eec
refs/heads/delivery/sfia-studio-control-tower-fast-track c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
refs/heads/delivery/sfia-studio-d1-shared-platform-integration c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
refs/heads/delivery/sfia-studio-ops1-i1-session-journal 97df7d5127455297b942775dd9159f7eba121bdb
refs/heads/delivery/sfia-studio-ops1-i3-action-gate 3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57
refs/heads/delivery/sfia-studio-poc-increment-a 89cb7565507a0a5303de9004feb1e2e9f14d3d39
refs/heads/delivery/sfia-studio-poc-increment-b 8316f26de1ade4bbf0e698ce03666e977daa87cb
refs/heads/delivery/sfia-studio-poc-increment-c 96bb808bb6f2ea7f09878c970bb89b5978c2abb8
refs/heads/delivery/sfia-studio-poc-increment-d 41b9c46f5b02e352267920eb1cefef5cf447d324
refs/heads/delivery/sfia-studio-shared-technical-platform 08c282abafd97685bcc0b7e525ec96e6721ec589
refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction c24da112ed3d67479d7b3e7715c78da3c26be78e
refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion 5afe09516fd94fff466340dc0c1f877712f13f42
refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation 9c125059f3323a7df862b96d32f1940b1cbdefc1
refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance 2f9560534e285c5b8105f81dca39c5252667860c
refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916243c470587f6958e058fd58909e5bd75a
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation 9e0a9c81ceaf54e2147ba1cf87884d2c23399306
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation 5733d25b4b4c7ada042af2776fe1d3154c0b5583
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc 75aee25a33e45b63b96805e85d72326d1525b056
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority f8d25c2dc523020b0443c2b16f375edbf7f5631b
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance 245f515c3f8baaf0c2cf72b59af0635a1b0efb67
refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition ca93e0805b499f9cae6cacd84e37cbb122d89a1c
refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge 7ef160c6fd8a99267a9e553fd77d13aa7e6f95da
refs/heads/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui 55a28d3cb30adb5b00ac347ffe9876879e199458
refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes 78859034e769c449901835a1b9431deb56dc0c3c
refs/heads/delivery/sfia-v2.6-lot-h 694fedcca20b960815d55cf825315d3b497c93ba
refs/heads/design/sfia-studio-ops1-scenario d248b9db91f4f10c16885c9f931f4cdd0f966316
refs/heads/design/sfia-studio-ops1-technical-architecture b495a567afab1f74fe816ad210bdf25812cf55ec
refs/heads/design/sfia-studio-poc-vertical-slice 58fb275038bde920cf58001973f6809a6e10ffdf
refs/heads/design/sfia-studio-v3-native-option-a-functional e22bc243c8854df4e9422fafe46e92135fe242e9
refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture 577ff0c22491288d2293fd9730ed26f0af4095b0
refs/heads/design/sfia-studio-v3-native-option-a-ux-ui 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
refs/heads/devops/sfia-studio-ops1-foundation 04a3b4570b6116ff3fb3dbdc1295b0858caa2a1c
refs/heads/docs/chantiers360-close-r-qa-04 662f1c3d36e7755a18f120e848e69e730b6446c6
refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison 158bdf01c5cd72ed723d56d28cc69d3d44276632
refs/heads/docs/chantiers360-v0-vs-v2-post-merge 2e6816653b2c7030a83039c799346860dd5ec097
refs/heads/docs/chantiers360-v2-design-coverage-post-merge bbd54bf46d211b467e1b3a82404e700a82270984
refs/heads/docs/chantiers360-v2-final-pilot-rex 438b3bbe8e610c1a485b71c7e152709f69a1b624
refs/heads/docs/chantiers360-v2-inc-01-closure 09204fcadc42e5c053d2c8d435a5b9fb9d082daa
refs/heads/docs/chantiers360-v2-inc-01-qa-g4 94f71f21db99026992ffb638fcf18f23d8e9227c
refs/heads/docs/chantiers360-v2-inc-02-closure e461c6f238de494872fd1cbba6356ea08f0b9db5
refs/heads/docs/chantiers360-v2-inc-02-qa-g4 ec073f646eb75bd5696fb26ee0b4508a99315444
refs/heads/docs/chantiers360-v2-inc-03-closure 1d795fc6afd39a512179350b49ff67c14b7db201
refs/heads/docs/chantiers360-v2-inc-03-qa-g4 f136c33204b4df9c01198d7ff65fb9612d88e265
refs/heads/docs/chantiers360-v2-inc-04-closure eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4
refs/heads/docs/chantiers360-v2-inc-04-qa-g4 96bd25ee22643a1ad8e3d8077bbb0ecf218430ad
refs/heads/docs/chantiers360-v2-inc-05-closure 9987df647b0e6af1519ec46168decd9db5493075
refs/heads/docs/chantiers360-v2-inc-05-qa-g4 d30ca7299a13a3ce9955d06e69e9ea976d150551
refs/heads/docs/chantiers360-v2-post-capitalization-alignment 314794a39a73dbf8287ec3b7d5275cdf535a4705
refs/heads/docs/chantiers360-v2-post-spike-alignment fe9309006aa05493418be9ac6cc38d38ad1b1c39
refs/heads/docs/chantiers360-v2-readme-post-closure d672317108ca30c3df5a6d2f9b19b33c0c717476
refs/heads/docs/chantiers360-v2-technical-architecture-post-merge 9e7bcb3deca0b909370e13b91440aa872a460ba0
refs/heads/docs/close-lot-d1-status 8815f0f1e4576f07c4768decb8990b2bbf6e7a54
refs/heads/docs/close-lot-d2-status c0fc4b26af701a97ebec7b75c54247ab775ab4c1
refs/heads/docs/close-lot-d3-status 6cdda92f2354effd93213f971051c22df76c05d2
refs/heads/docs/fix-lot-d-plan-status af5d9a25f0c832367f21e520c3d2e10998bcfe23
refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
refs/heads/docs/sfia-studio-fa6-mitigated-from-main 67f140a19cf4a992dbc0d7b053abfde579a9a68c
refs/heads/docs/sfia-studio-m1-capitalization-rex fa0eebe00ce3b765a8a486aa660dddfab40123a0
refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge a42a85c0c0b3e146e59f82ea753329ed9253f278
refs/heads/docs/sfia-studio-pr226-post-merge-sync ed3304402d5c9d2f014c50741e9dc7fd508cb24a
refs/heads/docs/sfia-studio-recover-unmerged-project-docs 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status 960c90b32b2c1c5701a668b0ebc70fdd847c681b
refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization c520b819446cbc5cf28cb7327357f5cd60049293
refs/heads/docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing dcdc90a0779859ec5d34a91021bab65122447ee5
refs/heads/docs/sfia-v2.6-lot-e-closure 0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a
refs/heads/docs/sfia-v231-final-status 2bddcedfff871e2dd61d60c39ff48554bbbb4049
refs/heads/docs/sfia-v2x-versioning-post-merge c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5
refs/heads/documentation/sfia-discovery-act-02-editorial 153c50bc4e1638128e42629e828774bbadfce369
refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial 6fcc76a2353c4d9322280845100fad2c2bb93ea1
refs/heads/documentation/sfia-discovery-acts-04-05-editorial 7e65429b22338b40438307e3f64fa3b46d6cc233
refs/heads/documentation/sfia-discovery-acts-06-07-editorial a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb
refs/heads/documentation/sfia-discovery-legacy-migration-plan 402150287434bd844e1948c1b85ef6f58b90d3c2
refs/heads/documentation/sfia-discovery-pd-08-qa f934a3c54260a880b4c8d28130407961c46cdc28
refs/heads/documentation/sfia-discovery-pd-09-capitalization 28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f
refs/heads/evol/chantiers360-post-mvp-framing 8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb
refs/heads/fix/chantiers360-v2-rqa02-status-alignment 1ef4d67f080fd42789e3daa3ded1f4247848a1f9
refs/heads/fix/remove-controlled-delivery-broken-link b8eb9454c94b74fbdfdfdf596a9329c749dfd266
refs/heads/framing/sfia-studio-control-tower 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/framing/sfia-studio-first-user-visible-vertical-slice c1955179a36079e060c41a845c2a1950084966c8
refs/heads/framing/sfia-studio-next-product-increment 88fa4658da07156614de270d8172f147535ddbf9
refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity bd3608c6220e820cc3fa017422a7564a565a1296
refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6 aef7fd6d5a678857cf36e490f1550866d47c8887
refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution 65e5b606c2cddf443b95a890855f5097cb2ec93f
refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity 0b696ed970823aa75d013336e44e72de08f2ac57
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step 33ea3e87facc8c99c9c5619d6d2424030d3918a2
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness b6a19335f5116940175f5986492e3693722563bc
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
refs/heads/framing/sfia-studio-visible-slice-v2-runtime-ui-contract a1e207bdefef022858eb2ffd07b66727bed75dd3
refs/heads/framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage 3e8a4374405dce98866e35fb60c5c7329701f191
refs/heads/main e1befcb80ed5e3c789a7de9036a8207d6b3e6771
refs/heads/method/chantiers360-v2-inc-01-capitalization 5b5758f701903410f27f7d2bc8cb5fa980293599
refs/heads/method/chantiers360-v2-mvp-capitalization adcda831ff1805e14a464085628c2e4b3d5d4eac
refs/heads/method/codex-operating-model-pilot ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/method/controlled-delivery-index-integration 61187dcf2659e4336394b64bed9e2f7a81db902a
refs/heads/method/controlled-delivery-publication-package 8dc82696103431aeab8cbe2a540ff23f2cdf5828
refs/heads/method/controlled-delivery-publication-prep 9a6e0ae09861c8e19cc31cb06fe29635990ce62b
refs/heads/method/controlled-delivery-standard bf5734d9ca8cc3effbbd0fc86e4201c0dcb71afc
refs/heads/method/controlled-delivery-standard-hardening 834533706d90b7a58c399ccdf0331cd9e68f9104
refs/heads/method/delivery-acceleration-level-3-rex 008dbff2b64221a1a86204a2d93da57d8bd34e8b
refs/heads/method/interv360-final-capitalization 8763417ab21060ae1ba83083696d704ec4b6507c
refs/heads/method/interv360-mvp-delivery-capitalization 2ef34cb8c4d65eae4a35143a4a60589654a73fe2
refs/heads/method/sfia-3-exploration-closure f2a822ea2b2800484a0525b72a0473e55997f14f
refs/heads/method/sfia-consolidation-roadmap 10cb8c05e0b5cd924a70f5142fca9dc0ae60f077
refs/heads/method/sfia-cycle-knowledge-contracts cae841519ed1d2dd825e6ecb998337cd47b4a1e1
refs/heads/method/sfia-studio-v3-doctrine-consolidation daf6f7d02bbac09024f6275a793769e66b2b3878
refs/heads/method/sfia-v2-automation-levels 80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e
refs/heads/method/sfia-v2-automation-vision 1398a465537db503c562e2e40ab1010fd0bcfd8f
refs/heads/method/sfia-v2-delivery-qa-test-standard 2645df2b35676780eb42c6f9a50f3e8fde04a768
refs/heads/method/sfia-v2-design-coverage-rules bc697d8c87a2c660c3e51f2079eb1817e59c89b0
refs/heads/method/sfia-v2-figma-design-cycle 1bb55f01c1f87cf1a2d51f379831bb2b910394e0
refs/heads/method/sfia-v2-figma-fidelity-gate-standard 672d72bb2794bc66e575c2e4d47625b69035caff
refs/heads/method/sfia-v2-pilot-selection-decision 728231760b2414147c655eacc44afa46fb0f9192
refs/heads/method/sfia-v2-pilot-selection-scoring 22d8dcfc009c39cd2645252f05a85a61136d71ad
refs/heads/method/sfia-v2-project-bootstrap-standard cbba66bfc4bf3b780f54945a562900fb1ce74603
refs/heads/method/sfia-v2-prompt-routing-alignment 1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4
refs/heads/method/sfia-v2-technical-architecture-decision-standard d8f43775cd3fcd1cf8b633a63bd575caffc1cc03
refs/heads/method/sfia-v2.4-consolidation-operating-efficiency d96dfcea5d081fce9e65a3629c1c4ed67c23619a
refs/heads/method/sfia-v2.4-reference-documentation-alignment e79a4408f50500e121c8ecaf009a9ed489e4a450
refs/heads/method/sfia-v2.4.1-documentation-status-promotion ecaf416da0d121176b618cefb1826ce6ac40b76e
refs/heads/method/sfia-v2.5-cycle-1-mvp 4e3947fe996e10d50bc77ce82f6ef409180c2193
refs/heads/method/sfia-v2.5-project-plan 7751855037cbf5a1e08977364d7ee0ca5f04ef0b
refs/heads/method/sfia-v2.5-review-pack-reset a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6
refs/heads/method/sfia-v2.6-repository-standard-decisions 56ce850cdee5fb219e48bc39af01a33a949cc765
refs/heads/method/sfia-v2x-method-versioning-standard a76c3f80af76cfd997d6d87bb2888bad9a74da78
refs/heads/migration/sfia-v2.6-lot-a-core d630c6cd765a51617917a9869ee20814657e586f
refs/heads/migration/sfia-v2.6-lot-d1-naming 930d5a243e372ddae4c856cfb199e0f4aa260906
refs/heads/migration/sfia-v2.6-lot-d2-naming f56c768506965f09523b60cd36f21ff75acd3c25
refs/heads/migration/sfia-v2.6-lot-d3-naming 093c91a39bdca3fac576568899c531cddb94e36d
refs/heads/modeled/sfia-studio-v3-native-option-a 52891e5c5a9b1254143e422111ea4955ca3a0940
refs/heads/notion/pause-notion-publication-track c79992b71b859847abbc8f1921f1832c133a272e
refs/heads/notion/provisioning-engine-design 38b91eb566ae6e016dfa2566e03cd3979366c9b8
refs/heads/notion/sfia-live-export-audit a7b22ec9e3ba2daa25c0ae19987d917077188051
refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
refs/heads/pr/sfia-studio-v3-native-option-a-foundation 9c0f6f970da896235dd1f62a8ba76aacae14243b
refs/heads/product/interv360-mvp-final-roadmap 14cadbe299bd959c9f9d934f1b711caf1ebaa489
refs/heads/project/campus360-detailed-framing ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/project/campus360-opportunity-framing 4275a60cf81acffa00e5faa77c33bd3a583ed599
refs/heads/project/chantiers360-v2-bootstrap 774beed72ce74f72c6f016554cccbfe157f4de1e
refs/heads/project/sfia-studio-functional-architecture 4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3
refs/heads/project/sfia-studio-functional-design cf64fdd82f9b71960111d22d10c0fb7e0433cb4d
refs/heads/project/sfia-studio-poc-orchestration-framing 3b162ecb5212e9f62ac20f0066df9fbc545be4cc
refs/heads/project/sfia-studio-pre-framing 18c642749e0c7bfe658a3a76868a251b92323183
refs/heads/project/sfia-studio-ux-ui-reconciliation 7bdabdcc0ea5f760383da190a661250dcd5d2598
refs/heads/prompts/create-templates-context-pack b6d9a881a24a2817469e7b818204ec8993d0bceb
refs/heads/qa/sfia-studio-m1-bypass-probe f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
refs/heads/qa/sfia-studio-m1-bypass-probe-revert b502c0069f836a729090bdc187dd98a0c26591ca
refs/heads/qualification/sfia-v2.6-lot-d-naming 3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99
refs/heads/qualification/sfia-v2.6-lot-e-global-controls b87413b54858af0740b3d1e37c7e3fee63aca726
refs/heads/qualification/sfia-v2.6-lot-f-superseded 2f89afdb6c29f1ab562e6b4e16ce51863b4281f7
refs/heads/qualification/sfia-v2.6-lot-f2-f005 7d87331a37e1899bdca32c2fafa2fabb0dc8d514
refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions f89ba5fb6cfca4e3de97667d944569a20266a8aa
refs/heads/recovery/campus360-detailed-framing 32690b618ba0ab208db7f1b6c16b6d79bf76dc78
refs/heads/recovery/sfia-studio-functional-architecture-sync a5ad0c07b60d652596d4962103ec445391a7827b
refs/heads/release/interv360-mvp-release-readiness dfc643097c07a676a8a17059f7aa8041dd74d2f7
refs/heads/sfia/review-handoff 24987074f4aa728cff616efa927ca016bc124831
refs/heads/spike/sfia-studio-openai-gpt-adapter 056c97f6a9838a99125f81e1a84cf17cd070b3fe
refs/heads/tooling/review-handoff-canonical-publisher 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
refs/heads/ux/sfia-studio-d1-conversational-convergence 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
refs/heads/validation/sfia-v2.6-lot-e2-validation 477fe5508a5bce8d396ee8214c4f03b97f9f0ad1
refs/heads/validation/sfia-v2.6-lot-f1a-f1b 15185f334960c93cdc8c6c6f0cb13200d95b0902

```
```
008dbff2b64221a1a86204a2d93da57d8bd34e8b	refs/heads/method/delivery-acceleration-level-3-rex
04183050b7a6ffe271ce4eec05b4cf2ddba65c99	refs/heads/delivery/interv360-api-product-hardening
056c97f6a9838a99125f81e1a84cf17cd070b3fe	refs/heads/spike/sfia-studio-openai-gpt-adapter
06751adf3a03843723c1c16f916b4b7c8a3187a4	refs/heads/delivery/interv360-inc-01-push-and-pr
08c282abafd97685bcc0b7e525ec96e6721ec589	refs/heads/delivery/sfia-studio-shared-technical-platform
091eebba81aa6dc80019c25584b9d8aa99517659	refs/heads/delivery/interv360-demo-mvp-closure
09204fcadc42e5c053d2c8d435a5b9fb9d082daa	refs/heads/docs/chantiers360-v2-inc-01-closure
093c91a39bdca3fac576568899c531cddb94e36d	refs/heads/migration/sfia-v2.6-lot-d3-naming
0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a	refs/heads/docs/sfia-v2.6-lot-e-closure
0b696ed970823aa75d013336e44e72de08f2ac57	refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
10cb8c05e0b5cd924a70f5142fca9dc0ae60f077	refs/heads/method/sfia-consolidation-roadmap
12efbb6bcad65a988588a33a54d574c0b08c7620	refs/heads/delivery/interv360-batch-01-demo-credibility
1398a465537db503c562e2e40ab1010fd0bcfd8f	refs/heads/method/sfia-v2-automation-vision
14cadbe299bd959c9f9d934f1b711caf1ebaa489	refs/heads/product/interv360-mvp-final-roadmap
14d58fe95a8f29c3dc1f72c794a64fedbc795bbe	refs/heads/tooling/review-handoff-canonical-publisher
15185f334960c93cdc8c6c6f0cb13200d95b0902	refs/heads/validation/sfia-v2.6-lot-f1a-f1b
153c50bc4e1638128e42629e828774bbadfce369	refs/heads/documentation/sfia-discovery-act-02-editorial
1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa	refs/heads/delivery/interv360-role-simulation
158bdf01c5cd72ed723d56d28cc69d3d44276632	refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison
16fe9c36859e9798c9e158f2c7a461b85d275dd5	refs/heads/tooling/penpot-mcp-self-host-feedback
18c642749e0c7bfe658a3a76868a251b92323183	refs/heads/project/sfia-studio-pre-framing
18d21511efaaf62b8a332b9e289f2355830b9617	refs/heads/capitalization/sfia-studio-poc-framing-post-merge
1a2fa31fab6343bdd0eab7211febb3bcc5326c33	refs/heads/docs/sfia-studio-recover-unmerged-project-docs
1b44bc1c063b977a5f309108fc8b45f3e1d425fe	refs/heads/delivery/interv360-product-demo-consolidation
1bb55f01c1f87cf1a2d51f379831bb2b910394e0	refs/heads/method/sfia-v2-figma-design-cycle
1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4	refs/heads/method/sfia-v2-prompt-routing-alignment
1c0311d2a18a38b739e8429c90ff347a0c05436c	refs/heads/delivery/interv360-backend-users-session
1d795fc6afd39a512179350b49ff67c14b7db201	refs/heads/docs/chantiers360-v2-inc-03-closure
1ef4d67f080fd42789e3daa3ded1f4247848a1f9	refs/heads/fix/chantiers360-v2-rqa02-status-alignment
22d8dcfc009c39cd2645252f05a85a61136d71ad	refs/heads/method/sfia-v2-pilot-selection-scoring
245f515c3f8baaf0c2cf72b59af0635a1b0efb67	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
24987074f4aa728cff616efa927ca016bc124831	refs/heads/sfia/review-handoff
2645df2b35676780eb42c6f9a50f3e8fde04a768	refs/heads/method/sfia-v2-delivery-qa-test-standard
2830efd0f2735141641e816ccac82475ccb30c74	refs/heads/archive/sfia-v2.6-lot-0-completion
28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f	refs/heads/documentation/sfia-discovery-pd-09-capitalization
2bddcedfff871e2dd61d60c39ff48554bbbb4049	refs/heads/docs/sfia-v231-final-status
2e6816653b2c7030a83039c799346860dd5ec097	refs/heads/docs/chantiers360-v0-vs-v2-post-merge
2ef34cb8c4d65eae4a35143a4a60589654a73fe2	refs/heads/method/interv360-mvp-delivery-capitalization
2f89afdb6c29f1ab562e6b4e16ce51863b4281f7	refs/heads/qualification/sfia-v2.6-lot-f-superseded
314794a39a73dbf8287ec3b7d5275cdf535a4705	refs/heads/docs/chantiers360-v2-post-capitalization-alignment
33ea3e87facc8c99c9c5619d6d2424030d3918a2	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57	refs/heads/delivery/sfia-studio-ops1-i3-action-gate
38b91eb566ae6e016dfa2566e03cd3979366c9b8	refs/heads/notion/provisioning-engine-design
3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99	refs/heads/qualification/sfia-v2.6-lot-d-naming
3b162ecb5212e9f62ac20f0066df9fbc545be4cc	refs/heads/project/sfia-studio-poc-orchestration-framing
3bba55b7b34ef118006a9fe61464ba61f3f941d2	refs/heads/delivery/interv360-product-industrialization
402150287434bd844e1948c1b85ef6f58b90d3c2	refs/heads/documentation/sfia-discovery-legacy-migration-plan
406a8839945236f9eb8a0cd858ef53f7ef64ece9	refs/heads/delivery/chantiers360-v2-inc-04
40b6f00d4dce6f8524dbfc9f4574fba87ea491d8	refs/heads/capitalization/sfia-v2.6-repository-rationalization
41b9c46f5b02e352267920eb1cefef5cf447d324	refs/heads/delivery/sfia-studio-poc-increment-d
4275a60cf81acffa00e5faa77c33bd3a583ed599	refs/heads/project/campus360-opportunity-framing
438b3bbe8e610c1a485b71c7e152709f69a1b624	refs/heads/docs/chantiers360-v2-final-pilot-rex
4546d88edbf47b4eee65933fccaa21c076f6d148	refs/heads/cycle/chantiers360-v2-detailed-framing
45e4498813734884ca57c9e822e3392c8e75cc0e	refs/heads/consolidation/sfia-documentation-review
477fe5508a5bce8d396ee8214c4f03b97f9f0ad1	refs/heads/validation/sfia-v2.6-lot-e2-validation
4a6c7b7c2b409b9e1eed43655432636a9f0a40c8	refs/heads/delivery/interv360-demo-presentation-review
4ae75a9d590d397456ba2e3de3815555a5b57ddf	refs/heads/audit/sfia-v2.6-repository-cartography
4d6e465eec7fef6cf0f4f8af3435636ca1bd456a	refs/heads/delivery/interv360-batch-03-demo-readiness-package
4e3947fe996e10d50bc77ce82f6ef409180c2193	refs/heads/method/sfia-v2.5-cycle-1-mvp
4ee36eea7a5c06953af2f653af9f3a96e178e4f2	refs/heads/architecture/interv360-backend-persistence-decision
4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3	refs/heads/project/sfia-studio-functional-architecture
4fad47f72a7d6cde655d98a64351bb4624ed9ad1	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
5481b748e9b2968b5801149a762e255bb926ca38	refs/heads/delivery/interv360-demo-presentation-feedback
55b2f0c2fdde34b6775d5d8201768eab98200014	refs/heads/cycle/chantiers360-v2-light-architecture
56ce850cdee5fb219e48bc39af01a33a949cc765	refs/heads/method/sfia-v2.6-repository-standard-decisions
5733d25b4b4c7ada042af2776fe1d3154c0b5583	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
58fb275038bde920cf58001973f6809a6e10ffdf	refs/heads/design/sfia-studio-poc-vertical-slice
5afe09516fd94fff466340dc0c1f877712f13f42	refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion
5b5758f701903410f27f7d2bc8cb5fa980293599	refs/heads/method/chantiers360-v2-inc-01-capitalization
5cd2b4e78ad434a5fe40c90ee2107466dd074896	refs/heads/delivery/interv360-workflow-light-extension
5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d	refs/heads/cycle/chantiers360-v2-design-figma
5febd0f6ce250181e5fe4918813e05526ea2b3f0	refs/heads/delivery/interv360-demo-feedback-review
6583ddf31da43db0d9fde2b630da806d0a9c9d06	refs/heads/delivery/chantiers360-v2-inc-03
65e5b606c2cddf443b95a890855f5097cb2ec93f	refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
662f1c3d36e7755a18f120e848e69e730b6446c6	refs/heads/docs/chantiers360-close-r-qa-04
672d72bb2794bc66e575c2e4d47625b69035caff	refs/heads/method/sfia-v2-figma-fidelity-gate-standard
67f140a19cf4a992dbc0d7b053abfde579a9a68c	refs/heads/docs/sfia-studio-fa6-mitigated-from-main
6849b6f7530310ae669a5bd2e4f4a3f3323ccda6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
69325d09cc9d2936694412efee5d107c9ee62cf4	refs/heads/delivery/interv360-inc-03-pr-preparation
694fedcca20b960815d55cf825315d3b497c93ba	refs/heads/delivery/sfia-v2.6-lot-h
69a33ed0ee72745b693ae82329bfb7a5dcec55ce	refs/heads/delivery/interv360-api-product-validation
69b82461398c32be1dcc60a91cd1cb1036703f1e	refs/heads/architecture/interv360-product-roadmap-next
6cdda92f2354effd93213f971051c22df76c05d2	refs/heads/docs/close-lot-d3-status
6cf7d361d9543a2a8b1fff8f78ea72be75f303f0	refs/heads/archive/sfia-v2.6-lot-0-inventories
6d44882dc76acb628481e55916b6cc04f400d13a	refs/heads/cycle/chantiers360-v2-figma-fidelity-spike
6dded2000063b14ad4500d7b9b65b926578726e1	refs/heads/delivery/interv360-request-model-productization
6f8c72b007661790b85be3f811c4c649e8238b6b	refs/heads/delivery/interv360-connected-ux-productization
6fcc76a2353c4d9322280845100fad2c2bb93ea1	refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial
70a11108f9a778f92f6f98f45117818f09477fe8	refs/heads/architecture/interv360-product-roadmap-after-role-simulation
728231760b2414147c655eacc44afa46fb0f9192	refs/heads/method/sfia-v2-pilot-selection-decision
733cbfffbaaa796240fa68f6c9148f9b62cabeb2	refs/heads/architecture/interv360-role-simulation-review
75aee25a33e45b63b96805e85d72326d1525b056	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
774beed72ce74f72c6f016554cccbfe157f4de1e	refs/heads/project/chantiers360-v2-bootstrap
7751855037cbf5a1e08977364d7ee0ca5f04ef0b	refs/heads/method/sfia-v2.5-project-plan
78859034e769c449901835a1b9431deb56dc0c3c	refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes
7bdabdcc0ea5f760383da190a661250dcd5d2598	refs/heads/project/sfia-studio-ux-ui-reconciliation
7d87331a37e1899bdca32c2fafa2fabb0dc8d514	refs/heads/qualification/sfia-v2.6-lot-f2-f005
7e65429b22338b40438307e3f64fa3b46d6cc233	refs/heads/documentation/sfia-discovery-acts-04-05-editorial
7ef160c6fd8a99267a9e553fd77d13aa7e6f95da	refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
7ef233a93b3c76099247937dc4deb524e623ab0a	refs/heads/delivery/interv360-api-demo-hardening
8099a96de369d820c7a82c27d8309ecf2da34217	refs/heads/consolidation/interv360-current-app-audit
80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e	refs/heads/method/sfia-v2-automation-levels
824883c8d4593276fa7129187dba7efcf7b117ef	refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data
82c78239ec1cbb83a66c714685374a70025fbae2	refs/heads/delivery/interv360-inc-02-pr-preparation
8316f26de1ade4bbf0e698ce03666e977daa87cb	refs/heads/delivery/sfia-studio-poc-increment-b
8763417ab21060ae1ba83083696d704ec4b6507c	refs/heads/method/interv360-final-capitalization
87662a20e9a885e44acf50dee74a7017ab2ac9e9	refs/heads/delivery/interv360-audit-trail
8815f0f1e4576f07c4768decb8990b2bbf6e7a54	refs/heads/docs/close-lot-d1-status
89cb7565507a0a5303de9004feb1e2e9f14d3d39	refs/heads/delivery/sfia-studio-poc-increment-a
8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb	refs/heads/evol/chantiers360-post-mvp-framing
930d5a243e372ddae4c856cfb199e0f4aa260906	refs/heads/migration/sfia-v2.6-lot-d1-naming
934be03e55dd3e237ab42f0ebec597a377ecfbaf	refs/heads/cycle/chantiers360-v2-functional-architecture
94f71f21db99026992ffb638fcf18f23d8e9227c	refs/heads/docs/chantiers360-v2-inc-01-qa-g4
960c90b32b2c1c5701a668b0ebc70fdd847c681b	refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
96bb808bb6f2ea7f09878c970bb89b5978c2abb8	refs/heads/delivery/sfia-studio-poc-increment-c
96bd25ee22643a1ad8e3d8077bbb0ecf218430ad	refs/heads/docs/chantiers360-v2-inc-04-qa-g4
9987df647b0e6af1519ec46168decd9db5493075	refs/heads/docs/chantiers360-v2-inc-05-closure
9babc8c052626e971b8eb4d324d58e16ccf9e307	refs/heads/cycle/chantiers360-v2-mvp-backlog
9c0f6f970da896235dd1f62a8ba76aacae14243b	refs/heads/pr/sfia-studio-v3-native-option-a-foundation
9c125059f3323a7df862b96d32f1940b1cbdefc1	refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
9d425dd842e1317ec9213d3ec220d2633f0dff31	refs/heads/decision/chantiers360-v2-architecture-arbitrages
9e0a9c81ceaf54e2147ba1cf87884d2c23399306	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
9e7bcb3deca0b909370e13b91440aa872a460ba0	refs/heads/docs/chantiers360-v2-technical-architecture-post-merge
9f03916243c470587f6958e058fd58909e5bd75a	refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
a23cefcb90bd78ff3ff692cf194c4d0fdc06f229	refs/heads/delivery/interv360-frontend-api-connection
a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb	refs/heads/documentation/sfia-discovery-acts-06-07-editorial
a310850ab136d84ca45f784ccc44df9cbe63ae6c	refs/heads/delivery/interv360-backend-minimal-prototype
a42a85c0c0b3e146e59f82ea753329ed9253f278	refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge
a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6	refs/heads/method/sfia-v2.5-review-pack-reset
a6eb49d0f003bf4411c40dd799b54047e86f1d8a	refs/heads/delivery/interv360-batch-02-demo-control-scenario
a76c3f80af76cfd997d6d87bb2888bad9a74da78	refs/heads/method/sfia-v2x-method-versioning-standard
a7b22ec9e3ba2daa25c0ae19987d917077188051	refs/heads/notion/sfia-live-export-audit
a830842aa0b60b35ebc845e88550fe1927288eec	refs/heads/delivery/interv360-workflow-requalification
adcda831ff1805e14a464085628c2e4b3d5d4eac	refs/heads/method/chantiers360-v2-mvp-capitalization
af5d9a25f0c832367f21e520c3d2e10998bcfe23	refs/heads/docs/fix-lot-d-plan-status
b11b318ab1b79d72be484d784c1607c4d6a95a81	refs/heads/consolidation/sfia-global-capitalization
b3bd01f4e81fe4b9e30f4a039232f7824ac29c19	refs/heads/delivery/interv360-request-model-finalization
b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05	refs/heads/backlog/sfia-studio-poc-vertical-slice
b502c0069f836a729090bdc187dd98a0c26591ca	refs/heads/qa/sfia-studio-m1-bypass-probe-revert
b6a19335f5116940175f5986492e3693722563bc	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6d9a881a24a2817469e7b818204ec8993d0bceb	refs/heads/prompts/create-templates-context-pack
b763a318fb84e23e482ed23a0bd561c1d9e719e6	refs/heads/cadrage/task-tracker-light
b7a5e827fddb7e80f03a71b3b64ca89271ede0a6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
b87413b54858af0740b3d1e37c7e3fee63aca726	refs/heads/qualification/sfia-v2.6-lot-e-global-controls
b8eb9454c94b74fbdfdfdf596a9329c749dfd266	refs/heads/fix/remove-controlled-delivery-broken-link
bbd54bf46d211b467e1b3a82404e700a82270984	refs/heads/docs/chantiers360-v2-design-coverage-post-merge
bc697d8c87a2c660c3e51f2079eb1817e59c89b0	refs/heads/method/sfia-v2-design-coverage-rules
bcc6d379571280142aa5eff6c8baa9615978fc95	refs/heads/delivery/chantiers360-v2-inc-05
bd3608c6220e820cc3fa017422a7564a565a1296	refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
be10f7a92828cfb7761bdcbb591c38c759d9ffa3	refs/heads/delivery/interv360-auth-user-switcher
be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6	refs/heads/cycle/chantiers360-v2-ux-ui
bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35	refs/heads/architecture/interv360-product-industrialization-framing
bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4	refs/heads/delivery/interv360-batch-04-demo-presentation-package
c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5	refs/heads/docs/sfia-v2x-versioning-post-merge
c0fc4b26af701a97ebec7b75c54247ab775ab4c1	refs/heads/docs/close-lot-d2-status
c24da112ed3d67479d7b3e7715c78da3c26be78e	refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction
c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9	refs/heads/delivery/sfia-studio-d1-shared-platform-integration
c4cc0b02c18300808d788810d8830dcfdc4979fa	refs/heads/cleanup/sfia-v2.6-lot-j
c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2	refs/heads/delivery/chantiers360-v2-inc-02
c520b819446cbc5cf28cb7327357f5cd60049293	refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
c79992b71b859847abbc8f1921f1832c133a272e	refs/heads/notion/pause-notion-publication-track
c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf	refs/heads/delivery/sfia-studio-control-tower-fast-track
ca93e0805b499f9cae6cacd84e37cbb122d89a1c	refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition
cae841519ed1d2dd825e6ecb998337cd47b4a1e1	refs/heads/method/sfia-cycle-knowledge-contracts
cbba66bfc4bf3b780f54945a562900fb1ce74603	refs/heads/method/sfia-v2-project-bootstrap-standard
cf64fdd82f9b71960111d22d10c0fb7e0433cb4d	refs/heads/project/sfia-studio-functional-design
d248b9db91f4f10c16885c9f931f4cdd0f966316	refs/heads/design/sfia-studio-ops1-scenario
d306054f7622c48e86ca23ff4386a0a35590c9c6	refs/heads/delivery/interv360-inc-04-list-filtering-local-summary
d30ca7299a13a3ce9955d06e69e9ea976d150551	refs/heads/docs/chantiers360-v2-inc-05-qa-g4
d4401c3da6c08cb7e8716fea5a513df22d467c0e	refs/heads/archive/sfia-v2.6-lot-c-v3-mcp
d54c952c3c4118f37a95800a55a7bfcd99a8af98	refs/heads/cadrage/sfia-v2.6-lot-h
d630c6cd765a51617917a9869ee20814657e586f	refs/heads/migration/sfia-v2.6-lot-a-core
d672317108ca30c3df5a6d2f9b19b33c0c717476	refs/heads/docs/chantiers360-v2-readme-post-closure
d8394b75ec7a28c3e39f074b025d9eef877c900c	refs/heads/delivery/interv360-demo-polish
d8f43775cd3fcd1cf8b633a63bd575caffc1cc03	refs/heads/method/sfia-v2-technical-architecture-decision-standard
d96dfcea5d081fce9e65a3629c1c4ed67c23619a	refs/heads/method/sfia-v2.4-consolidation-operating-efficiency
daf6f7d02bbac09024f6275a793769e66b2b3878	refs/heads/method/sfia-studio-v3-doctrine-consolidation
dc4c971543258317166f79bf1e1f8baaee38f207	refs/heads/consolidation/interv360-application-rex
dc7a24cfed4c3cd3fe584e4948847551e7af4cff	refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
dd2a68c6a1e45fee1e1f397cb644c2c082a3d877	refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction
dfc643097c07a676a8a17059f7aa8041dd74d2f7	refs/heads/release/interv360-mvp-release-readiness
e106d9143def77ac92164299c8977ab96a43517a	refs/heads/delivery/interv360-product-ux-finalization
e1befcb80ed5e3c789a7de9036a8207d6b3e6771	refs/heads/main
e2006897c492fc8d83a185ce818ddb5e3ea47164	refs/heads/audit/sfia-v2.6-lot-0-qualification
e461c6f238de494872fd1cbba6356ea08f0b9db5	refs/heads/docs/chantiers360-v2-inc-02-closure
e65a4d23443b8745639e045eccabe7be304b0809	refs/heads/delivery/chantiers360-v2-inc-01
e79a4408f50500e121c8ecaf009a9ed489e4a450	refs/heads/method/sfia-v2.4-reference-documentation-alignment
e97e083a749d88b8556ffd81edc0160a432df137	refs/heads/capitalization/sfia-studio-p0-status-sync
eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4	refs/heads/docs/chantiers360-v2-inc-04-closure
ec073f646eb75bd5696fb26ee0b4508a99315444	refs/heads/docs/chantiers360-v2-inc-02-qa-g4
ecaf416da0d121176b618cefb1826ce6ac40b76e	refs/heads/method/sfia-v2.4.1-documentation-status-promotion
ed2c0f4c63355867ab322f850189fac4144f064f	refs/heads/delivery/interv360-end-to-end-demo-hardening
ed3304402d5c9d2f014c50741e9dc7fd508cb24a	refs/heads/docs/sfia-studio-pr226-post-merge-sync
f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23	refs/heads/qa/sfia-studio-m1-bypass-probe
f136c33204b4df9c01198d7ff65fb9612d88e265	refs/heads/docs/chantiers360-v2-inc-03-qa-g4
f2a822ea2b2800484a0525b72a0473e55997f14f	refs/heads/method/sfia-3-exploration-closure
f39adb8c23be6740ba57194608ada3a62f0d72ca	refs/heads/delivery/interv360-backend-persistence
f56c768506965f09523b60cd36f21ff75acd3c25	refs/heads/migration/sfia-v2.6-lot-d2-naming
f7f2e18d825add5195c611760788fbd79aaf98aa	refs/heads/conception/sfia-notion-product-space
f89ba5fb6cfca4e3de97667d944569a20266a8aa	refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
f8d25c2dc523020b0443c2b16f375edbf7f5631b	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
f934a3c54260a880b4c8d28130407961c46cdc28	refs/heads/documentation/sfia-discovery-pd-08-qa
fa0eebe00ce3b765a8a486aa660dddfab40123a0	refs/heads/docs/sfia-studio-m1-capitalization-rex
fe9309006aa05493418be9ac6cc38d38ad1b1c39	refs/heads/docs/chantiers360-v2-post-spike-alignment

```

## Worktrees après cleanup
```
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca
branch refs/heads/qa/sfia-studio-m1-bypass-probe-revert

worktree /Users/morris/Projects/sfia-workspace-m1-capitalization
HEAD fa0eebe00ce3b765a8a486aa660dddfab40123a0
branch refs/heads/docs/sfia-studio-m1-capitalization-rex

worktree /Users/morris/Projects/sfia-workspace-option-a-after-t-a6
HEAD aef7fd6d5a678857cf36e490f1550866d47c8887
branch refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance
HEAD 2f9560534e285c5b8105f81dca39c5252667860c
branch refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
HEAD a42a85c0c0b3e146e59f82ea753329ed9253f278
branch refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge

worktree /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
HEAD 9f03916243c470587f6958e058fd58909e5bd75a
branch refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-t-a6-post-merge
HEAD 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
branch refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
HEAD 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
HEAD 960c90b32b2c1c5701a668b0ebc70fdd847c681b
branch refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status

worktree /Users/morris/Projects/sfia-workspace-t-a7-framing
HEAD b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/main

worktree /Users/morris/Projects/sfia-workspace-t-a7-next-decision
HEAD 33ea3e87facc8c99c9c5619d6d2424030d3918a2
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step

worktree /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
HEAD b6a19335f5116940175f5986492e3693722563bc
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
HEAD f89ba5fb6cfca4e3de97667d944569a20266a8aa
branch refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
HEAD 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope

worktree /Users/morris/Projects/sfia-workspace-template-handoff-fix
HEAD 134be301792efbf6f9739d13f0572062ef976da7
detached

worktree /Users/morris/Projects/sfia-workspace-ux-reconciliation
HEAD 7bdabdcc0ea5f760383da190a661250dcd5d2598
branch refs/heads/project/sfia-studio-ux-ui-reconciliation

worktree /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
HEAD daf6f7d02bbac09024f6275a793769e66b2b3878
branch refs/heads/method/sfia-studio-v3-doctrine-consolidation

worktree /Users/morris/Projects/sfia-workspace-v3-native-audit
HEAD 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
branch refs/heads/audit/sfia-studio-v3-native-dependencies

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
HEAD 577ff0c22491288d2293fd9730ed26f0af4095b0
branch refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-design
HEAD e22bc243c8854df4e9422fafe46e92135fe242e9
branch refs/heads/design/sfia-studio-v3-native-option-a-functional

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
HEAD 52891e5c5a9b1254143e422111ea4955ca3a0940
branch refs/heads/modeled/sfia-studio-v3-native-option-a

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
HEAD 0b696ed970823aa75d013336e44e72de08f2ac57
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
HEAD 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
branch refs/heads/design/sfia-studio-v3-native-option-a-ux-ui

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0

worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
HEAD 24987074f4aa728cff616efa927ca016bc124831
branch refs/heads/sfia/review-handoff


```

## Comparaison structurée avant/après
```json
{
  "local_deleted": [
    "refs/heads/capitalization/sfia-studio-v3-1-d1-rex"
  ],
  "local_added": [],
  "local_changed": {
    "refs/heads/main": {
      "before": "b553f0aaec120e03b8cfca27f3f0e5fc03f1480e",
      "after": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771"
    }
  },
  "remote_deleted": [
    "refs/heads/capitalization/sfia-studio-v3-1-d1-rex"
  ],
  "remote_added": [],
  "remote_changed": [],
  "worktree_count_before": 77,
  "worktree_count_after": 77,
  "primary_before": {
    "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge",
    "head": "d77c775f6114eddd04af330cc943a869a5c4f6a2",
    "branch": "refs/heads/capitalization/sfia-studio-v3-1-d1-rex",
    "locked": false,
    "prunable": false,
    "detached": false
  },
  "primary_after": {
    "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge",
    "head": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771",
    "branch": "refs/heads/main",
    "locked": false,
    "prunable": false,
    "detached": false
  },
  "other_worktrees_identical": true,
  "handoff_unchanged_before_publish": true,
  "handoff": {
    "path": "/Users/morris/Projects/sfia-workspace/sfia-review-handoff",
    "head": "24987074f4aa728cff616efa927ca016bc124831",
    "branch": "refs/heads/sfia/review-handoff",
    "locked": false,
    "prunable": false,
    "detached": false
  }
}
```

## Preuve 77 worktrees / primaire / handoff
- count before=after=77
- primary preserved path, switched source→main
- handoff unchanged before publish

## Preuve `.tmp` préservé
```
# PR #297 Cleanup — TMP Evidence Verification

## Verdict
TMP-SFIA-REVIEW EVIDENCE PRESERVED — ALL PRE-EXISTING FILES VERIFIED — PREVIOUS CHATGPT REVIEW PACK ARCHIVED BYTE-FOR-BYTE

## Counts
- initial_manifest_files: 261
- verified_ok: 261
- missing: 0
- diverged: 0

## chatgpt-review.md handling
- initial_sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- initial_size: 685834
- archive_path: .tmp-sfia-review/pr-297-post-merge-validation-chatgpt-review-preserved.md
- archive_sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- archive_cmp: identical to initial chatgpt-review.md content
- git_blob_expected: e7f0e566ec01873786a987003e6440579eb2b450

## Rule
All pre-existing files except chatgpt-review.md retained path/size/sha256.
chatgpt-review.md initial content preserved via archive (may be replaced later for new Full pack).

```

## Findings finaux
```
# PR #297 Cleanup Findings

## REMOTE-F-01
- statut: CLOSED

## READY-F-02
- statut: CLOSED

## POSTMERGE-CI-01
- statut: CLOSED / PASS
- preuve: run 30612872178 completed/success on e1befcb8…

## POSTMERGE-F-01
- statut: CLOSED
- preuve:
  - worktree principal préservé (`/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`)
  - preuves `.tmp-sfia-review/**` préservées (manifeste 261 fichiers vérifiés)
  - worktree basculé sur `main` @ e1befcb8…
  - source locale supprimée avec `git branch -d` uniquement
  - source distante supprimée sans force

## POSTMERGE-F-02
- statut: NOTED — OUT OF SCOPE
- autres worktrees inchangés (77/77)
- aucun cleanup global

## INHERITED-R-01
- statut: ACCEPTED — STILL TRACEABLE — NOT LIFTED
- non bloquant
- aucune promotion méthode
- D2 non autorisé

## CLEANUP-OBS-01 — HANDOFF TIP AHEAD (NOT DIVERGED)
- observation: tip handoff distant avancé à 24987074… (3 commits EventOps) au-delà du tip source 0fe120a… ; tip attendu reste ancêtre ; blob source e7f0e56… toujours vérifiable ; pack local archivé identique
- sévérité: informative
- bloquant cleanup: NON
- action: publisher FF puis publication du rapport cleanup
- statut: NOTED

```

## Réserve non levée / absence méthode / D2/D3
OUI / OUI / OUI

## État Git avant handoff
```
current=main
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
local_source=ABSENT
remote_tracking=ls_remote_cap=wt_count=77
handoff_tip=24987074f4aa728cff616efa927ca016bc124831
=== non-tmp status ===
(none)
=== staged ===

```

## Rapport temporaire complet
--- BEGIN CLEANUP REPORT ---
# V3.1-D1 Capitalization Cleanup Report — PR #297

## A. Métadonnées
- Horodatage: 2026-08-01 09:27:09 CEST (+0200)
- Repository: mcleland147/sfia-workspace
- Worktree principal: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
- PR: https://github.com/mcleland147/sfia-workspace/pull/297
- MERGE_SHA: e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## B. Gate Morris
GO CLEANUP PR #297 SOURCE BRANCH IN PRIMARY WORKTREE SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
USE VERIFIED POST-MERGE CLEANUP PLAN —
PRESERVE ALL .TMP-SFIA-REVIEW EVIDENCE —
SWITCH PRIMARY WORKTREE OFF THE SOURCE BRANCH —
SYNCHRONIZE LOCAL MAIN BY FAST-FORWARD ONLY TO e1befcb80ed5e3c789a7de9036a8207d6b3e6771 —
DO NOT REMOVE PRIMARY WORKTREE —
DELETE LOCAL SOURCE BRANCH WITH git branch -d ONLY —
DELETE REMOTE SOURCE BRANCH WITHOUT FORCE —
PRESERVE ALL OTHER WORKTREES AND THE SFIA REVIEW HANDOFF BRANCH —
VERIFY MAIN BRANCHES WORKTREES HANDOFF AND ACCEPTED MINOR RESERVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

Date/heure/fuseau du GO : 2026-07-31 09:54 CEST (+0200)

## C. Cycle, profil, typologie et CKC
- Cycle: 14 — Post-merge (phase cleanup borné)
- Profil: Standard
- Typologie: DOC
- Automatisation: L3 borné
- CKC: method-candidate / Léger / P2 / consommation obligatoire
- Fallback: 02-fifteen-cycles-synthetic-map.md + §4.14
- executionAuthority=false

## D. Handoff source
- tip attendu: 0fe120a31986ef01740b75ef3d39fb8285e68432
- blob attendu: e7f0e566ec01873786a987003e6440579eb2b450
- tip distant au démarrage: 24987074f4aa728cff616efa927ca016bc124831 (AHEAD, not diverged; expected tip is ancestor)
- 3 commits EventOps au-dessus du tip source
- pack local archivé = blob attendu

## E. Git Truth initial
```
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
origin/cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
L/R main...origin/main=0	2
L/R origin/cap...HEAD=0	0
L/R origin/cap...origin/main=0	1
ancestor src->origin/main: YES
=== DIFF CAP..MAIN ===
=== STATUS NON-TMP ===
(none)
=== STAGED ===
=== WORKTREE COUNT ===
77
=== MAIN CHECKOUTS ===
main checkout count: 0
=== PRUNE DRY-RUN ===
=== LS-REMOTE ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771	refs/heads/main
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
24987074f4aa728cff616efa927ca016bc124831	refs/heads/sfia/review-handoff
=== GH AUTH ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## F. PR et CI confirmées
```json
{
  "additions": 436,
  "baseRefName": "main",
  "baseRefOid": "b553f0aaec120e03b8cfca27f3f0e5fc03f1480e",
  "body": "# docs(sfia-studio): add V3.1-D1 capitalization REX\n\n## 1. Summary\n\nThis PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.\n\nIt captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup \u2014 without promoting method assets and without opening D2/D3.\n\n## 2. Context\n\n- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).\n- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.\n- This publication is documentation-only and remains subject to a distinct Morris merge GO.\n\n## 3. Scope\n\n**In scope (exactly one file):**\n\n- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`\n\n**Out of scope:**\n\n- framing README / backlog 08 / documents 12\u201314\n- D1 reports 01\u201304\n- code / tests / config / dependencies\n- method / templates / CKC\n- D2 resolver / QualifyCycle bridge\n- D3 / UI / Figma / CreateCycle / persistence\n\n## 4. Capitalization coverage\n\nDocument sections A\u2013T cover:\n\n- chronology (framing \u2192 cleanup \u2192 local capitalization)\n- Morris decisions consumed\n- factual observations\n- lessons and candidate reusable practices\n- candidate recommendations (not applied)\n- future decision pack D-REX-01\u202606 (NOT DECIDED)\n- reserves register\n- anti-claims and next-gate candidate\n\n## 5. Morris decisions\n\nReferenced as already adopted/executed (not reinvented):\n\n- D-V3-01\u202608 and D-V3.1-CAT-01\u202608\n- QA-G3 PASS\n- publication / ready-for-review / merge of PR #296\n- post-merge / worktree / archive / cleanup GOs\n- capitalization GO (local document only)\n\nNo new Morris decision is created by this PR.\n\n## 6. Evidence and metrics\n\n- Catalog: 15 entries \u00b7 4 detailed / 11 synthetic CKC mappings\n- QA reinforced before fix: 34 PASS / 12 FAIL\n- After corrective + revalidation: 46/46 \u00b7 94/94 \u00b7 827/827 \u00b7 typecheck/lint/build PASS\n- PR #296: 13 files \u00b7 2 source commits \u00b7 +3667 / \u2212155\n- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`\n- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`\n- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`\n- CI pre-merge: run `30577786752` PASS\n- CI post-merge: run `30585808183` PASS\n- Archive SHA-256 proofs (event only; not Git truth):\n  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`\n  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`\n\n## 7. Epistemic distinctions\n\nThe document keeps strict prefixes/status labels:\n\n- `Observation \u2014`\n- `Enseignement \u2014`\n- `Pratique candidate r\u00e9utilisable \u2014`\n- `Recommandation candidate \u2014`\n- Morris decisions: adopted / executed\n- D-REX-01\u202606: `NOT DECIDED \u2014 MORRIS DECISION REQUIRED`\n\nCandidate practices are **not** method baseline.\nRecommendations are **not** applied in this PR.\n\n## 8. Risks and reserves\n\n**Inherited minor reserve (not a new defect of document 05):**\n\n`ACCEPTED MINOR DOCUMENTATION RESERVE \u2014 STILL TRACEABLE \u2014 NOT LIFTED`\n\nFraming README condensation remains accepted and traceable via docs 12/13/14, reports 01\u201305, PR #296, and handoffs. Not lifted. Not D2.\n\n**Other risks:**\n\n- misreading capitalization as method promotion \u2192 mitigated by anti-claims and boundaries\n- misreading D-REX-06 as D2 authorization \u2192 explicitly NOT DECIDED / not automatic\n\n## 9. Boundaries\n\nThis PR does **not** claim:\n\n- D2/D3 open\n- resolver / QualifyCycle / UI / CreateCycle / persistence implemented\n- method baseline promotion\n- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED\n- zero bugs\n\n## 10.
```
```json
{
  "conclusion": "success",
  "databaseId": 30612872178,
  "headSha": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771",
  "jobs": [
    {
      "completedAt": "2026-07-31T07:27:25Z",
      "conclusion": "success",
      "databaseId": 91099412334,
      "name": "Detect SFIA Studio changes",
      "startedAt": "2026-07-31T07:27:18Z",
      "status": "completed",
      "steps": [
        {
          "completedAt": "2026-07-31T07:27:20Z",
          "conclusion": "success",
          "name": "Set up job",
          "number": 1,
          "startedAt": "2026-07-31T07:27:19Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:22Z",
          "conclusion": "success",
          "name": "Checkout",
          "number": 2,
          "startedAt": "2026-07-31T07:27:20Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:22Z",
          "conclusion": "success",
          "name": "Detect Studio scope",
          "number": 3,
          "startedAt": "2026-07-31T07:27:22Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:23Z",
          "conclusion": "success",
          "name": "Post Checkout",
          "number": 6,
          "startedAt": "2026-07-31T07:27:22Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:23Z",
          "conclusion": "success",
          "name": "Complete job",
          "number": 7,
          "startedAt": "2026-07-31T07:27:23Z",
          "status": "completed"
        }
      ],
      "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178/job/91099412334"
    },
    {
      "completedAt": "2026-07-31T07:29:05Z",
      "conclusion": "success",
      "databaseId": 91099442024,
      "name": "Build and validate SFIA Studio",
      "startedAt": "2026-07-31T07:27:29Z",
      "status": "completed",
      "steps": [
        {
          "completedAt": "2026-07-31T07:27:32Z",
          "conclusion": "success",
          "name": "Set up job",
          "number": 1,
          "startedAt": "2026-07-31T07:27:31Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:34Z",
          "conclusion": "success",
          "name": "Checkout",
          "number": 2,
          "startedAt": "2026-07-31T07:27:32Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:40Z",
          "conclusion": "success",
          "name": "Setup Node.js",
          "number": 3,
          "startedAt": "2026-07-31T07:27:34Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:27:55Z",
          "conclusion": "success",
          "name": "Install dependencies",
          "number": 4,
          "startedAt": "2026-07-31T07:27:40Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:28:02Z",
          "conclusion": "success",
          "name": "Typecheck",
          "number": 5,
          "startedAt": "2026-07-31T07:27:55Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:28:08Z",
          "conclusion": "success",
          "name": "Lint",
          "number": 6,
          "startedAt": "2026-07-31T07:28:02Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:28:35Z",
          "conclusion": "success",
          "name": "Build",
          "number": 7,
          "startedAt": "2026-07-31T07:28:08Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:00Z",
          "conclusion": "success",
          "name": "Unit tests (Vitest)",
          "number": 8,
          "startedAt": "2026-07-31T07:28:35Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Modeled governan
```
- comments/reviews: []

## G. Réserve héritée
INHERITED-R-01 — ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED — NON-BLOCKING

## H. État `.tmp-sfia-review` initial
- fichiers inventoriés: 261
- untracked hors tmp: aucun
- tracked/staged: aucun

## I. Manifeste des preuves
Voir `.tmp-sfia-review/pr-297-cleanup-tmp-evidence-before.json` (261 records).

## J. Archivage du review pack précédent
- archive: pr-297-post-merge-validation-chatgpt-review-preserved.md
- sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- initial chatgpt-review sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- git blob: e7f0e566ec01873786a987003e6440579eb2b450
- cmp: identical

## K. Inventaire branches avant
```
refs/heads/architecture/interv360-backend-api-contract-framing 7f24665adcff5022c32832d4a543f44345011488
refs/heads/architecture/interv360-backend-data-model-decision 0f2f6c4d740677da922c45e85b3d5814e6cf9bf0
refs/heads/architecture/interv360-backend-persistence-decision 4ee36eea7a5c06953af2f653af9f3a96e178e4f2
refs/heads/architecture/interv360-backend-target-framing 4b59b51e743a87951a704d0df3075aa9e7702309
refs/heads/architecture/interv360-backend-technical-stack-decision 98567700c5edbbebc18728fd60c7cfb5ed7e1663
refs/heads/architecture/interv360-product-industrialization-framing bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35
refs/heads/architecture/interv360-product-roadmap-after-persistence 572d06137cfe5d56b1fd1ee848f9fb1e79ad1d8c
refs/heads/architecture/interv360-product-roadmap-after-role-simulation 70a11108f9a778f92f6f98f45117818f09477fe8
refs/heads/architecture/interv360-product-roadmap-next 69b82461398c32be1dcc60a91cd1cb1036703f1e
refs/heads/architecture/interv360-role-simulation-review 733cbfffbaaa796240fa68f6c9148f9b62cabeb2
refs/heads/architecture/sfia-studio-v3-native-option-a-technical e8166adb2634a659667bdfd246d5cf851958cccc
refs/heads/archive/sfia-v2.6-lot-0-completion 2830efd0f2735141641e816ccac82475ccb30c74
refs/heads/archive/sfia-v2.6-lot-0-inventories 6cf7d361d9543a2a8b1fff8f78ea72be75f303f0
refs/heads/archive/sfia-v2.6-lot-c-v3-mcp d4401c3da6c08cb7e8716fea5a513df22d467c0e
refs/heads/audit/sfia-studio-v3-native-dependencies 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
refs/heads/audit/sfia-v2.6-lot-0-qualification e2006897c492fc8d83a185ce818ddb5e3ea47164
refs/heads/audit/sfia-v2.6-repository-cartography 4ae75a9d590d397456ba2e3de3815555a5b57ddf
refs/heads/backlog/sfia-studio-ops1 4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e
refs/heads/backlog/sfia-studio-poc-vertical-slice b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05
refs/heads/cadrage/sfia-v2.6-lot-h d54c952c3c4118f37a95800a55a7bfcd99a8af98
refs/heads/cadrage/task-tracker-light b763a318fb84e23e482ed23a0bd561c1d9e719e6
refs/heads/capitalization/sfia-documentation-completeness ef2f7bf16fdfcb8c74d425cf561fabd89d951c80
refs/heads/capitalization/sfia-studio-p0-status-sync e97e083a749d88b8556ffd81edc0160a432df137
refs/heads/capitalization/sfia-studio-poc-framing-post-merge 18d21511efaaf62b8a332b9e289f2355830b9617
refs/heads/capitalization/sfia-studio-v3-1-d1-rex d77c775f6114eddd04af330cc943a869a5c4f6a2
refs/heads/capitalization/sfia-v2.6-repository-rationalization 40b6f00d4dce6f8524dbfc9f4574fba87ea491d8
refs/heads/cleanup/sfia-v2.6-lot-j c4cc0b02c18300808d788810d8830dcfdc4979fa
refs/heads/conception/sfia-notion-product-space f7f2e18d825add5195c611760788fbd79aaf98aa
refs/heads/consolidation/interv360-application-rex dc4c971543258317166f79bf1e1f8baaee38f207
refs/heads/consolidation/interv360-current-app-audit 8099a96de369d820c7a82c27d8309ecf2da34217
refs/heads/consolidation/sfia-documentation-review 45e4498813734884ca57c9e822e3392c8e75cc0e
refs/heads/consolidation/sfia-global-capitalization b11b318ab1b79d72be484d784c1607c4d6a95a81
refs/heads/cycle/chantiers360-v2-design-figma 5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d
refs/heads/cycle/chantiers360-v2-detailed-framing 4546d88edbf47b4eee65933fccaa21c076f6d148
refs/heads/cycle/chantiers360-v2-figma-fidelity-spike 6d44882dc76acb628481e55916b6cc04f400d13a
refs/heads/cycle/chantiers360-v2-functional-architecture 934be03e55dd3e237ab42f0ebec597a377ecfbaf
refs/heads/cycle/chantiers360-v2-light-architecture 55b2f0c2fdde34b6775d5d8201768eab98200014
refs/heads/cycle/chantiers360-v2-mvp-backlog 9babc8c052626e971b8eb4d324d58e16ccf9e307
refs/heads/cycle/chantiers360-v2-ux-ui be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6
refs/heads/decision/chantiers360-v2-architecture-arbitrages 9d425dd842e1317ec9213d3ec220d2633f0dff31
refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data 824883c8d4593276fa7129187dba7efcf7b117ef
refs/heads/delivery/chantiers360-v2-inc-01 e65a4d23443b8745639e045eccabe7be304b0809
refs/heads/delivery/chantiers360-v2-inc-02 c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2
refs/heads/delivery/chantiers360-v2-inc-03 6583ddf31da43db0d9fde2b630da806d0a9c9d06
refs/heads/delivery/chantiers360-v2-inc-04 406a8839945236f9eb8a0cd858ef53f7ef64ece9
refs/heads/delivery/chantiers360-v2-inc-05 bcc6d379571280142aa5eff6c8baa9615978fc95
refs/heads/delivery/eventops-poc-visible-slice-01 e1befcb80ed5e3c789a7de9036a8207d6b3e6771
refs/heads/delivery/interv360-api-demo-hardening 7ef233a93b3c76099247937dc4deb524e623ab0a
refs/heads/delivery/interv360-api-product-hardening 04183050b7a6ffe271ce4eec05b4cf2ddba65c99
refs/heads/delivery/interv360-api-product-validation 69a33ed0ee72745b693ae82329bfb7a5dcec55ce
refs/heads/delivery/interv360-audit-trail 87662a20e9a885e44acf50dee74a7017ab2ac9e9
refs/heads/delivery/interv360-auth-user-switcher be10f7a92828cfb7761bdcbb591c38c759d9ffa3
refs/heads/delivery/interv360-backend-minimal-prototype a310850ab136d84ca45f784ccc44df9cbe63ae6c
refs/heads/delivery/interv360-backend-persistence f39adb8c23be6740ba57194608ada3a62f0d72ca
refs/heads/delivery/interv360-backend-users-session 1c0311d2a18a38b739e8429c90ff347a0c05436c
refs/heads/delivery/interv360-batch-01-demo-credibility 12efbb6bcad65a988588a33a54d574c0b08c7620
refs/heads/delivery/interv360-batch-02-demo-control-scenario a6eb49d0f003bf4411c40dd799b54047e86f1d8a
refs/heads/delivery/interv360-batch-03-demo-readiness-package 4d6e465eec7fef6cf0f4f8af3435636ca1bd456a
refs/heads/delivery/interv360-batch-04-demo-presentation-package bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4
refs/heads/delivery/interv360-connected-ux-productization 6f8c72b007661790b85be3f811c4c649e8238b6b
refs/heads/delivery/interv360-demo-feedback-review 5febd0f6ce250181e5fe4918813e05526ea2b3f0
refs/heads/delivery/interv360-demo-mvp-closure 091eebba81aa6dc80019c25584b9d8aa99517659
refs/heads/delivery/interv360-demo-polish d8394b75ec7a28c3e39f074b025d9eef877c900c
refs/heads/delivery/interv360-demo-presentation-feedback 5481b748e9b2968b5801149a762e255bb926ca38
refs/heads/delivery/interv360-demo-presentation-review 4a6c7b7c2b409b9e1eed43655432636a9f0a40c8
refs/heads/delivery/interv360-end-to-end-demo-hardening ed2c0f4c63355867ab322f850189fac4144f064f
refs/heads/delivery/interv360-frontend-api-connection a23cefcb90bd78ff3ff692cf194c4d0fdc06f229
refs/heads/delivery/interv360-frontend-api-connection-framing f15956a414d89e18b8254447972195d93f36586d
refs/heads/delivery/interv360-implementation-go-no-go 8cc09b11b82f05d28d51f49b3de209e5206b8389
refs/heads/delivery/interv360-inc-01-action-transition-decision aa5092f862e556888731830939ec5c5ec8b97347
refs/heads/delivery/interv360-inc-01-app-foundation 2d7f1215c832065766aad74ad1480b321b2c7c33
refs/heads/delivery/interv360-inc-01-controlled-workflow-skeleton 1fae1ce091ee8bf3f37c85fec6ee0c2e05242370
refs/heads/delivery/interv360-inc-01-controlled-workflow-validation 16c333903f4e21151db772736f921baf02edfec9
refs/heads/delivery/interv360-inc-01-demo-reset 5588977299d11b2db0525cc0f2c92f6e70cad3ce
refs/heads/delivery/interv360-inc-01-demo-script 95695751d516c1732f1c00e79728e54a46c12ed1
refs/heads/delivery/interv360-inc-01-final-demo-package 140a5beb8178e79efe39facd4022a1f742edbe1c
refs/heads/delivery/interv360-inc-01-global-summary 985ebcb5491207f411ed6b5f7664ba226aeda050
refs/heads/delivery/interv360-inc-01-implementation-preparation 0588ee22f1fd985f6febd5c5275b2d4282332b2c
refs/heads/delivery/interv360-inc-01-intervention-readonly-skeleton ed5f9ba8cb14781a681a06db09ef4545e420966f
refs/heads/delivery/interv360-inc-01-list-skeleton 58193676881df0818727ae49d4d5913c8b20024f
refs/heads/delivery/interv360-inc-01-local-persistence-decision 020f773bbfa6674a92ad97e0db16112a732206f6
refs/heads/delivery/interv360-inc-01-phase-2-delivery-decision 4f1eb6ab91dfb055ba3a9045a1be6de87a5ad583
refs/heads/delivery/interv360-inc-01-phase-2-rex 7a428a70db16ef815b32e423e9d2569aea22834e
refs/heads/delivery/interv360-inc-01-planning-readonly-skeleton 841113896fa93617fe39c6bd37f136771b262298
refs/heads/delivery/interv360-inc-01-pr-preparation 4f7af01d22d214dd3a3ae3e9a1fcf833425c5c5e
refs/heads/delivery/interv360-inc-01-push-and-pr 06751adf3a03843723c1c16f916b4b7c8a3187a4
refs/heads/delivery/interv360-inc-01-qualification-readonly-skeleton 5033c2400b18802dfa1c4dd821398c5604a7a197
refs/heads/delivery/interv360-inc-01-readonly-demo-summary 0e25e584636c8c786da3b9bb72699dfcfb0918d2
refs/heads/delivery/interv360-inc-01-report-readonly-skeleton 94a50c0fc08bfe199d99b2422bd44d55545015a9
refs/heads/delivery/interv360-inc-01-request-detail-skeleton ab27aad6dd1d8ea69e90c1a351171b5ca8f994f7
refs/heads/delivery/interv360-inc-02-pr-preparation 82c78239ec1cbb83a66c714685374a70025fbae2
refs/heads/delivery/interv360-inc-02-ux-demo-improvement e9de7bebe2384c42983ec86db846d3a2f2193b53
refs/heads/delivery/interv360-inc-03-multi-requests-local-demo 5f6e2cc86bfb5e2624ebdd79068de1d6729e8e7c
refs/heads/delivery/interv360-inc-03-pr-preparation 69325d09cc9d2936694412efee5d107c9ee62cf4
refs/heads/delivery/interv360-inc-04-list-filtering-local-summary d306054f7622c48e86ca23ff4386a0a35590c9c6
refs/heads/delivery/interv360-product-demo-consolidation 1b44bc1c063b977a5f309108fc8b45f3e1d425fe
refs/heads/delivery/interv360-product-industrialization 3bba55b7b34ef118006a9fe61464ba61f3f941d2
refs/heads/delivery/interv360-product-ux-finalization e106d9143def77ac92164299c8977ab96a43517a
refs/heads/delivery/interv360-request-model-finalization b3bd01f4e81fe4b9e30f4a039232f7824ac29c19
refs/heads/delivery/interv360-request-model-productization 6dded2000063b14ad4500d7b9b65b926578726e1
refs/heads/delivery/interv360-role-simulation 1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa
refs/heads/delivery/interv360-technical-arbitration ba81999c47296ae86ff2f908ea8f34f0035a8ee2
refs/heads/delivery/interv360-workflow-light-extension 5cd2b4e78ad434a5fe40c90ee2107466dd074896
refs/heads/delivery/interv360-workflow-requalification a830842aa0b60b35ebc845e88550fe1927288eec
refs/heads/delivery/sfia-studio-control-tower-fast-track c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
refs/heads/delivery/sfia-studio-d1-shared-platform-integration c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
refs/heads/delivery/sfia-studio-ops1-i1-session-journal 97df7d5127455297b942775dd9159f7eba121bdb
refs/heads/delivery/sfia-studio-ops1-i3-action-gate 3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57
refs/heads/delivery/sfia-studio-poc-increment-a 89cb7565507a0a5303de9004feb1e2e9f14d3d39
refs/heads/delivery/sfia-studio-poc-increment-b 8316f26de1ade4bbf0e698ce03666e977daa87cb
refs/heads/delivery/sfia-studio-poc-increment-c 96bb808bb6f2ea7f09878c970bb89b5978c2abb8
refs/heads/delivery/sfia-studio-poc-increment-d 41b9c46f5b02e352267920eb1cefef5cf447d324
refs/heads/delivery/sfia-studio-shared-technical-platform 08c282abafd97685bcc0b7e525ec96e6721ec589
refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction c24da112ed3d67479d7b3e7715c78da3c26be78e
refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion 5afe09516fd94fff466340dc0c1f877712f13f42
refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation 9c125059f3323a7df862b96d32f1940b1cbdefc1
refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance 2f9560534e285c5b8105f81dca39c5252667860c
refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916243c470587f6958e058fd58909e5bd75a
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation 9e0a9c81ceaf54e2147ba1cf87884d2c23399306
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation 5733d25b4b4c7ada042af2776fe1d3154c0b5583
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc 75aee25a33e45b63b96805e85d72326d1525b056
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority f8d25c2dc523020b0443c2b16f375edbf7f5631b
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance 245f515c3f8baaf0c2cf72b59af0635a1b0efb67
refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition ca93e0805b499f9cae6cacd84e37cbb122d89a1c
refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge 7ef160c6fd8a99267a9e553fd77d13aa7e6f95da
refs/heads/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui 55a28d3cb30adb5b00ac347ffe9876879e199458
refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes 78859034e769c449901835a1b9431deb56dc0c3c
refs/heads/delivery/sfia-v2.6-lot-h 694fedcca20b960815d55cf825315d3b497c93ba
refs/heads/design/sfia-studio-ops1-scenario d248b9db91f4f10c16885c9f931f4cdd0f966316
refs/heads/design/sfia-studio-ops1-technical-architecture b495a567afab1f74fe816ad210bdf25812cf55ec
refs/heads/design/sfia-studio-poc-vertical-slice 58fb275038bde920cf58001973f6809a6e10ffdf
refs/heads/design/sfia-studio-v3-native-option-a-functional e22bc243c8854df4e9422fafe46e92135fe242e9
refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture 577ff0c22491288d2293fd9730ed26f0af4095b0
refs/heads/design/sfia-studio-v3-native-option-a-ux-ui 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
refs/heads/devops/sfia-studio-ops1-foundation 04a3b4570b6116ff3fb3dbdc1295b0858caa2a1c
refs/heads/docs/chantiers360-close-r-qa-04 662f1c3d36e7755a18f120e848e69e730b6446c6
refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison 158bdf01c5cd72ed723d56d28cc69d3d44276632
refs/heads/docs/chantiers360-v0-vs-v2-post-merge 2e6816653b2c7030a83039c799346860dd5ec097
refs/heads/docs/chantiers360-v2-design-coverage-post-merge bbd54bf46d211b467e1b3a82404e700a82270984
refs/heads/docs/chantiers360-v2-final-pilot-rex 438b3bbe8e610c1a485b71c7e152709f69a1b624
refs/heads/docs/chantiers360-v2-inc-01-closure 09204fcadc42e5c053d2c8d435a5b9fb9d082daa
refs/heads/docs/chantiers360-v2-inc-01-qa-g4 94f71f21db99026992ffb638fcf18f23d8e9227c
refs/heads/docs/chantiers360-v2-inc-02-closure e461c6f238de494872fd1cbba6356ea08f0b9db5
refs/heads/docs/chantiers360-v2-inc-02-qa-g4 ec073f646eb75bd5696fb26ee0b4508a99315444
refs/heads/docs/chantiers360-v2-inc-03-closure 1d795fc6afd39a512179350b49ff67c14b7db201
refs/heads/docs/chantiers360-v2-inc-03-qa-g4 f136c33204b4df9c01198d7ff65fb9612d88e265
refs/heads/docs/chantiers360-v2-inc-04-closure eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4
refs/heads/docs/chantiers360-v2-inc-04-qa-g4 96bd25ee22643a1ad8e3d8077bbb0ecf218430ad
refs/heads/docs/chantiers360-v2-inc-05-closure 9987df647b0e6af1519ec46168decd9db5493075
refs/heads/docs/chantiers360-v2-inc-05-qa-g4 d30ca7299a13a3ce9955d06e69e9ea976d150551
refs/heads/docs/chantiers360-v2-post-capitalization-alignment 314794a39a73dbf8287ec3b7d5275cdf535a4705
refs/heads/docs/chantiers360-v2-post-spike-alignment fe9309006aa05493418be9ac6cc38d38ad1b1c39
refs/heads/docs/chantiers360-v2-readme-post-closure d672317108ca30c3df5a6d2f9b19b33c0c717476
refs/heads/docs/chantiers360-v2-technical-architecture-post-merge 9e7bcb3deca0b909370e13b91440aa872a460ba0
refs/heads/docs/close-lot-d1-status 8815f0f1e4576f07c4768decb8990b2bbf6e7a54
refs/heads/docs/close-lot-d2-status c0fc4b26af701a97ebec7b75c54247ab775ab4c1
refs/heads/docs/close-lot-d3-status 6cdda92f2354effd93213f971051c22df76c05d2
refs/heads/docs/fix-lot-d-plan-status af5d9a25f0c832367f21e520c3d2e10998bcfe23
refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
refs/heads/docs/sfia-studio-fa6-mitigated-from-main 67f140a19cf4a992dbc0d7b053abfde579a9a68c
refs/heads/docs/sfia-studio-m1-capitalization-rex fa0eebe00ce3b765a8a486aa660dddfab40123a0
refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge a42a85c0c0b3e146e59f82ea753329ed9253f278
refs/heads/docs/sfia-studio-pr226-post-merge-sync ed3304402d5c9d2f014c50741e9dc7fd508cb24a
refs/heads/docs/sfia-studio-recover-unmerged-project-docs 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status 960c90b32b2c1c5701a668b0ebc70fdd847c681b
refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization c520b819446cbc5cf28cb7327357f5cd60049293
refs/heads/docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing dcdc90a0779859ec5d34a91021bab65122447ee5
refs/heads/docs/sfia-v2.6-lot-e-closure 0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a
refs/heads/docs/sfia-v231-final-status 2bddcedfff871e2dd61d60c39ff48554bbbb4049
refs/heads/docs/sfia-v2x-versioning-post-merge c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5
refs/heads/documentation/sfia-discovery-act-02-editorial 153c50bc4e1638128e42629e828774bbadfce369
refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial 6fcc76a2353c4d9322280845100fad2c2bb93ea1
refs/heads/documentation/sfia-discovery-acts-04-05-editorial 7e65429b22338b40438307e3f64fa3b46d6cc233
refs/heads/documentation/sfia-discovery-acts-06-07-editorial a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb
refs/heads/documentation/sfia-discovery-legacy-migration-plan 402150287434bd844e1948c1b85ef6f58b90d3c2
refs/heads/documentation/sfia-discovery-pd-08-qa f934a3c54260a880b4c8d28130407961c46cdc28
refs/heads/documentation/sfia-discovery-pd-09-capitalization 28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f
refs/heads/evol/chantiers360-post-mvp-framing 8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb
refs/heads/fix/chantiers360-v2-rqa02-status-alignment 1ef4d67f080fd42789e3daa3ded1f4247848a1f9
refs/heads/fix/remove-controlled-delivery-broken-link b8eb9454c94b74fbdfdfdf596a9329c749dfd266
refs/heads/framing/sfia-studio-control-tower 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/framing/sfia-studio-first-user-visible-vertical-slice c1955179a36079e060c41a845c2a1950084966c8
refs/heads/framing/sfia-studio-next-product-increment 88fa4658da07156614de270d8172f147535ddbf9
refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity bd3608c6220e820cc3fa017422a7564a565a1296
refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6 aef7fd6d5a678857cf36e490f1550866d47c8887
refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution 65e5b606c2cddf443b95a890855f5097cb2ec93f
refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity 0b696ed970823aa75d013336e44e72de08f2ac57
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step 33ea3e87facc8c99c9c5619d6d2424030d3918a2
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness b6a19335f5116940175f5986492e3693722563bc
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
refs/heads/framing/sfia-studio-visible-slice-v2-runtime-ui-contract a1e207bdefef022858eb2ffd07b66727bed75dd3
refs/heads/framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage 3e8a4374405dce98866e35fb60c5c7329701f191
refs/heads/main b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
refs/heads/method/chantiers360-v2-inc-01-capitalization 5b5758f701903410f27f7d2bc8cb5fa980293599
refs/heads/method/chantiers360-v2-mvp-capitalization adcda831ff1805e14a464085628c2e4b3d5d4eac
refs/heads/method/codex-operating-model-pilot ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/method/controlled-delivery-index-integration 61187dcf2659e4336394b64bed9e2f7a81db902a
refs/heads/method/controlled-delivery-publication-package 8dc82696103431aeab8cbe2a540ff23f2cdf5828
refs/heads/method/controlled-delivery-publication-prep 9a6e0ae09861c8e19cc31cb06fe29635990ce62b
refs/heads/method/controlled-delivery-standard bf5734d9ca8cc3effbbd0fc86e4201c0dcb71afc
refs/heads/method/controlled-delivery-standard-hardening 834533706d90b7a58c399ccdf0331cd9e68f9104
refs/heads/method/delivery-acceleration-level-3-rex 008dbff2b64221a1a86204a2d93da57d8bd34e8b
refs/heads/method/interv360-final-capitalization 8763417ab21060ae1ba83083696d704ec4b6507c
refs/heads/method/interv360-mvp-delivery-capitalization 2ef34cb8c4d65eae4a35143a4a60589654a73fe2
refs/heads/method/sfia-3-exploration-closure f2a822ea2b2800484a0525b72a0473e55997f14f
refs/heads/method/sfia-consolidation-roadmap 10cb8c05e0b5cd924a70f5142fca9dc0ae60f077
refs/heads/method/sfia-cycle-knowledge-contracts cae841519ed1d2dd825e6ecb998337cd47b4a1e1
refs/heads/method/sfia-studio-v3-doctrine-consolidation daf6f7d02bbac09024f6275a793769e66b2b3878
refs/heads/method/sfia-v2-automation-levels 80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e
refs/heads/method/sfia-v2-automation-vision 1398a465537db503c562e2e40ab1010fd0bcfd8f
refs/heads/method/sfia-v2-delivery-qa-test-standard 2645df2b35676780eb42c6f9a50f3e8fde04a768
refs/heads/method/sfia-v2-design-coverage-rules bc697d8c87a2c660c3e51f2079eb1817e59c89b0
refs/heads/method/sfia-v2-figma-design-cycle 1bb55f01c1f87cf1a2d51f379831bb2b910394e0
refs/heads/method/sfia-v2-figma-fidelity-gate-standard 672d72bb2794bc66e575c2e4d47625b69035caff
refs/heads/method/sfia-v2-pilot-selection-decision 728231760b2414147c655eacc44afa46fb0f9192
refs/heads/method/sfia-v2-pilot-selection-scoring 22d8dcfc009c39cd2645252f05a85a61136d71ad
refs/heads/method/sfia-v2-project-bootstrap-standard cbba66bfc4bf3b780f54945a562900fb1ce74603
refs/heads/method/sfia-v2-prompt-routing-alignment 1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4
refs/heads/method/sfia-v2-technical-architecture-decision-standard d8f43775cd3fcd1cf8b633a63bd575caffc1cc03
refs/heads/method/sfia-v2.4-consolidation-operating-efficiency d96dfcea5d081fce9e65a3629c1c4ed67c23619a
refs/heads/method/sfia-v2.4-reference-documentation-alignment e79a4408f50500e121c8ecaf009a9ed489e4a450
refs/heads/method/sfia-v2.4.1-documentation-status-promotion ecaf416da0d121176b618cefb1826ce6ac40b76e
refs/heads/method/sfia-v2.5-cycle-1-mvp 4e3947fe996e10d50bc77ce82f6ef409180c2193
refs/heads/method/sfia-v2.5-project-plan 7751855037cbf5a1e08977364d7ee0ca5f04ef0b
refs/heads/method/sfia-v2.5-review-pack-reset a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6
refs/heads/method/sfia-v2.6-repository-standard-decisions 56ce850cdee5fb219e48bc39af01a33a949cc765
refs/heads/method/sfia-v2x-method-versioning-standard a76c3f80af76cfd997d6d87bb2888bad9a74da78
refs/heads/migration/sfia-v2.6-lot-a-core d630c6cd765a51617917a9869ee20814657e586f
refs/heads/migration/sfia-v2.6-lot-d1-naming 930d5a243e372ddae4c856cfb199e0f4aa260906
refs/heads/migration/sfia-v2.6-lot-d2-naming f56c768506965f09523b60cd36f21ff75acd3c25
refs/heads/migration/sfia-v2.6-lot-d3-naming 093c91a39bdca3fac576568899c531cddb94e36d
refs/heads/modeled/sfia-studio-v3-native-option-a 52891e5c5a9b1254143e422111ea4955ca3a0940
refs/heads/notion/pause-notion-publication-track c79992b71b859847abbc8f1921f1832c133a272e
refs/heads/notion/provisioning-engine-design 38b91eb566ae6e016dfa2566e03cd3979366c9b8
refs/heads/notion/sfia-live-export-audit a7b22ec9e3ba2daa25c0ae19987d917077188051
refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
refs/heads/pr/sfia-studio-v3-native-option-a-foundation 9c0f6f970da896235dd1f62a8ba76aacae14243b
refs/heads/product/interv360-mvp-final-roadmap 14cadbe299bd959c9f9d934f1b711caf1ebaa489
refs/heads/project/campus360-detailed-framing ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/project/campus360-opportunity-framing 4275a60cf81acffa00e5faa77c33bd3a583ed599
refs/heads/project/chantiers360-v2-bootstrap 774beed72ce74f72c6f016554cccbfe157f4de1e
refs/heads/project/sfia-studio-functional-architecture 4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3
refs/heads/project/sfia-studio-functional-design cf64fdd82f9b71960111d22d10c0fb7e0433cb4d
refs/heads/project/sfia-studio-poc-orchestration-framing 3b162ecb5212e9f62ac20f0066df9fbc545be4cc
refs/heads/project/sfia-studio-pre-framing 18c642749e0c7bfe658a3a76868a251b92323183
refs/heads/project/sfia-studio-ux-ui-reconciliation 7bdabdcc0ea5f760383da190a661250dcd5d2598
refs/heads/prompts/create-templates-context-pack b6d9a881a24a2817469e7b818204ec8993d0bceb
refs/heads/qa/sfia-studio-m1-bypass-probe f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
refs/heads/qa/sfia-studio-m1-bypass-probe-revert b502c0069f836a729090bdc187dd98a0c26591ca
refs/heads/qualification/sfia-v2.6-lot-d-naming 3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99
refs/heads/qualification/sfia-v2.6-lot-e-global-controls b87413b54858af0740b3d1e37c7e3fee63aca726
refs/heads/qualification/sfia-v2.6-lot-f-superseded 2f89afdb6c29f1ab562e6b4e16ce51863b4281f7
refs/heads/qualification/sfia-v2.6-lot-f2-f005 7d87331a37e1899bdca32c2fafa2fabb0dc8d514
refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions f89ba5fb6cfca4e3de97667d944569a20266a8aa
refs/heads/recovery/campus360-detailed-framing 32690b618ba0ab208db7f1b6c16b6d79bf76dc78
refs/heads/recovery/sfia-studio-functional-architecture-sync a5ad0c07b60d652596d4962103ec445391a7827b
refs/heads/release/interv360-mvp-release-readiness dfc643097c07a676a8a17059f7aa8041dd74d2f7
refs/heads/sfia/review-handoff 24987074f4aa728cff616efa927ca016bc124831
refs/heads/spike/sfia-studio-openai-gpt-adapter 056c97f6a9838a99125f81e1a84cf17cd070b3fe
refs/heads/tooling/review-handoff-canonical-publisher 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
refs/heads/ux/sfia-studio-d1-conversational-convergence 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
refs/heads/validation/sfia-v2.6-lot-e2-validation 477fe5508a5bce8d396ee8214c4f03b97f9f0ad1
refs/heads/validation/sfia-v2.6-lot-f1a-f1b 15185f334960c93cdc8c6c6f0cb13200d95b0902

```
Remote heads before:
```
008dbff2b64221a1a86204a2d93da57d8bd34e8b	refs/heads/method/delivery-acceleration-level-3-rex
04183050b7a6ffe271ce4eec05b4cf2ddba65c99	refs/heads/delivery/interv360-api-product-hardening
056c97f6a9838a99125f81e1a84cf17cd070b3fe	refs/heads/spike/sfia-studio-openai-gpt-adapter
06751adf3a03843723c1c16f916b4b7c8a3187a4	refs/heads/delivery/interv360-inc-01-push-and-pr
08c282abafd97685bcc0b7e525ec96e6721ec589	refs/heads/delivery/sfia-studio-shared-technical-platform
091eebba81aa6dc80019c25584b9d8aa99517659	refs/heads/delivery/interv360-demo-mvp-closure
09204fcadc42e5c053d2c8d435a5b9fb9d082daa	refs/heads/docs/chantiers360-v2-inc-01-closure
093c91a39bdca3fac576568899c531cddb94e36d	refs/heads/migration/sfia-v2.6-lot-d3-naming
0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a	refs/heads/docs/sfia-v2.6-lot-e-closure
0b696ed970823aa75d013336e44e72de08f2ac57	refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
10cb8c05e0b5cd924a70f5142fca9dc0ae60f077	refs/heads/method/sfia-consolidation-roadmap
12efbb6bcad65a988588a33a54d574c0b08c7620	refs/heads/delivery/interv360-batch-01-demo-credibility
1398a465537db503c562e2e40ab1010fd0bcfd8f	refs/heads/method/sfia-v2-automation-vision
14cadbe299bd959c9f9d934f1b711caf1ebaa489	refs/heads/product/interv360-mvp-final-roadmap
14d58fe95a8f29c3dc1f72c794a64fedbc795bbe	refs/heads/tooling/review-handoff-canonical-publisher
15185f334960c93cdc8c6c6f0cb13200d95b0902	refs/heads/validation/sfia-v2.6-lot-f1a-f1b
153c50bc4e1638128e42629e828774bbadfce369	refs/heads/documentation/sfia-discovery-act-02-editorial
1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa	refs/heads/delivery/interv360-role-simulation
158bdf01c5cd72ed723d56d28cc69d3d44276632	refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison
16fe9c36859e9798c9e158f2c7a461b85d275dd5	refs/heads/tooling/penpot-mcp-self-host-feedback
18c642749e0c7bfe658a3a76868a251b92323183	refs/heads/project/sfia-studio-pre-framing
18d21511efaaf62b8a332b9e289f2355830b9617	refs/heads/capitalization/sfia-studio-poc-framing-post-merge
1a2fa31fab6343bdd0eab7211febb3bcc5326c33	refs/heads/docs/sfia-studio-recover-unmerged-project-docs
1b44bc1c063b977a5f309108fc8b45f3e1d425fe	refs/heads/delivery/interv360-product-demo-consolidation
1bb55f01c1f87cf1a2d51f379831bb2b910394e0	refs/heads/method/sfia-v2-figma-design-cycle
1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4	refs/heads/method/sfia-v2-prompt-routing-alignment
1c0311d2a18a38b739e8429c90ff347a0c05436c	refs/heads/delivery/interv360-backend-users-session
1d795fc6afd39a512179350b49ff67c14b7db201	refs/heads/docs/chantiers360-v2-inc-03-closure
1ef4d67f080fd42789e3daa3ded1f4247848a1f9	refs/heads/fix/chantiers360-v2-rqa02-status-alignment
22d8dcfc009c39cd2645252f05a85a61136d71ad	refs/heads/method/sfia-v2-pilot-selection-scoring
245f515c3f8baaf0c2cf72b59af0635a1b0efb67	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
24987074f4aa728cff616efa927ca016bc124831	refs/heads/sfia/review-handoff
2645df2b35676780eb42c6f9a50f3e8fde04a768	refs/heads/method/sfia-v2-delivery-qa-test-standard
2830efd0f2735141641e816ccac82475ccb30c74	refs/heads/archive/sfia-v2.6-lot-0-completion
28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f	refs/heads/documentation/sfia-discovery-pd-09-capitalization
2bddcedfff871e2dd61d60c39ff48554bbbb4049	refs/heads/docs/sfia-v231-final-status
2e6816653b2c7030a83039c799346860dd5ec097	refs/heads/docs/chantiers360-v0-vs-v2-post-merge
2ef34cb8c4d65eae4a35143a4a60589654a73fe2	refs/heads/method/interv360-mvp-delivery-capitalization
2f89afdb6c29f1ab562e6b4e16ce51863b4281f7	refs/heads/qualification/sfia-v2.6-lot-f-superseded
314794a39a73dbf8287ec3b7d5275cdf535a4705	refs/heads/docs/chantiers360-v2-post-capitalization-alignment
33ea3e87facc8c99c9c5619d6d2424030d3918a2	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57	refs/heads/delivery/sfia-studio-ops1-i3-action-gate
38b91eb566ae6e016dfa2566e03cd3979366c9b8	refs/heads/notion/provisioning-engine-design
3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99	refs/heads/qualification/sfia-v2.6-lot-d-naming
3b162ecb5212e9f62ac20f0066df9fbc545be4cc	refs/heads/project/sfia-studio-poc-orchestration-framing
3bba55b7b34ef118006a9fe61464ba61f3f941d2	refs/heads/delivery/interv360-product-industrialization
402150287434bd844e1948c1b85ef6f58b90d3c2	refs/heads/documentation/sfia-discovery-legacy-migration-plan
406a8839945236f9eb8a0cd858ef53f7ef64ece9	refs/heads/delivery/chantiers360-v2-inc-04
40b6f00d4dce6f8524dbfc9f4574fba87ea491d8	refs/heads/capitalization/sfia-v2.6-repository-rationalization
41b9c46f5b02e352267920eb1cefef5cf447d324	refs/heads/delivery/sfia-studio-poc-increment-d
4275a60cf81acffa00e5faa77c33bd3a583ed599	refs/heads/project/campus360-opportunity-framing
438b3bbe8e610c1a485b71c7e152709f69a1b624	refs/heads/docs/chantiers360-v2-final-pilot-rex
4546d88edbf47b4eee65933fccaa21c076f6d148	refs/heads/cycle/chantiers360-v2-detailed-framing
45e4498813734884ca57c9e822e3392c8e75cc0e	refs/heads/consolidation/sfia-documentation-review
477fe5508a5bce8d396ee8214c4f03b97f9f0ad1	refs/heads/validation/sfia-v2.6-lot-e2-validation
4a6c7b7c2b409b9e1eed43655432636a9f0a40c8	refs/heads/delivery/interv360-demo-presentation-review
4ae75a9d590d397456ba2e3de3815555a5b57ddf	refs/heads/audit/sfia-v2.6-repository-cartography
4d6e465eec7fef6cf0f4f8af3435636ca1bd456a	refs/heads/delivery/interv360-batch-03-demo-readiness-package
4e3947fe996e10d50bc77ce82f6ef409180c2193	refs/heads/method/sfia-v2.5-cycle-1-mvp
4ee36eea7a5c06953af2f653af9f3a96e178e4f2	refs/heads/architecture/interv360-backend-persistence-decision
4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3	refs/heads/project/sfia-studio-functional-architecture
4fad47f72a7d6cde655d98a64351bb4624ed9ad1	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
5481b748e9b2968b5801149a762e255bb926ca38	refs/heads/delivery/interv360-demo-presentation-feedback
55b2f0c2fdde34b6775d5d8201768eab98200014	refs/heads/cycle/chantiers360-v2-light-architecture
56ce850cdee5fb219e48bc39af01a33a949cc765	refs/heads/method/sfia-v2.6-repository-standard-decisions
5733d25b4b4c7ada042af2776fe1d3154c0b5583	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
58fb275038bde920cf58001973f6809a6e10ffdf	refs/heads/design/sfia-studio-poc-vertical-slice
5afe09516fd94fff466340dc0c1f877712f13f42	refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion
5b5758f701903410f27f7d2bc8cb5fa980293599	refs/heads/method/chantiers360-v2-inc-01-capitalization
5cd2b4e78ad434a5fe40c90ee2107466dd074896	refs/heads/delivery/interv360-workflow-light-extension
5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d	refs/heads/cycle/chantiers360-v2-design-figma
5febd0f6ce250181e5fe4918813e05526ea2b3f0	refs/heads/delivery/interv360-demo-feedback-review
6583ddf31da43db0d9fde2b630da806d0a9c9d06	refs/heads/delivery/chantiers360-v2-inc-03
65e5b606c2cddf443b95a890855f5097cb2ec93f	refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
662f1c3d36e7755a18f120e848e69e730b6446c6	refs/heads/docs/chantiers360-close-r-qa-04
672d72bb2794bc66e575c2e4d47625b69035caff	refs/heads/method/sfia-v2-figma-fidelity-gate-standard
67f140a19cf4a992dbc0d7b053abfde579a9a68c	refs/heads/docs/sfia-studio-fa6-mitigated-from-main
6849b6f7530310ae669a5bd2e4f4a3f3323ccda6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
69325d09cc9d2936694412efee5d107c9ee62cf4	refs/heads/delivery/interv360-inc-03-pr-preparation
694fedcca20b960815d55cf825315d3b497c93ba	refs/heads/delivery/sfia-v2.6-lot-h
69a33ed0ee72745b693ae82329bfb7a5dcec55ce	refs/heads/delivery/interv360-api-product-validation
69b82461398c32be1dcc60a91cd1cb1036703f1e	refs/heads/architecture/interv360-product-roadmap-next
6cdda92f2354effd93213f971051c22df76c05d2	refs/heads/docs/close-lot-d3-status
6cf7d361d9543a2a8b1fff8f78ea72be75f303f0	refs/heads/archive/sfia-v2.6-lot-0-inventories
6d44882dc76acb628481e55916b6cc04f400d13a	refs/heads/cycle/chantiers360-v2-figma-fidelity-spike
6dded2000063b14ad4500d7b9b65b926578726e1	refs/heads/delivery/interv360-request-model-productization
6f8c72b007661790b85be3f811c4c649e8238b6b	refs/heads/delivery/interv360-connected-ux-productization
6fcc76a2353c4d9322280845100fad2c2bb93ea1	refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial
70a11108f9a778f92f6f98f45117818f09477fe8	refs/heads/architecture/interv360-product-roadmap-after-role-simulation
728231760b2414147c655eacc44afa46fb0f9192	refs/heads/method/sfia-v2-pilot-selection-decision
733cbfffbaaa796240fa68f6c9148f9b62cabeb2	refs/heads/architecture/interv360-role-simulation-review
75aee25a33e45b63b96805e85d72326d1525b056	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
774beed72ce74f72c6f016554cccbfe157f4de1e	refs/heads/project/chantiers360-v2-bootstrap
7751855037cbf5a1e08977364d7ee0ca5f04ef0b	refs/heads/method/sfia-v2.5-project-plan
78859034e769c449901835a1b9431deb56dc0c3c	refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes
7bdabdcc0ea5f760383da190a661250dcd5d2598	refs/heads/project/sfia-studio-ux-ui-reconciliation
7d87331a37e1899bdca32c2fafa2fabb0dc8d514	refs/heads/qualification/sfia-v2.6-lot-f2-f005
7e65429b22338b40438307e3f64fa3b46d6cc233	refs/heads/documentation/sfia-discovery-acts-04-05-editorial
7ef160c6fd8a99267a9e553fd77d13aa7e6f95da	refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
7ef233a93b3c76099247937dc4deb524e623ab0a	refs/heads/delivery/interv360-api-demo-hardening
8099a96de369d820c7a82c27d8309ecf2da34217	refs/heads/consolidation/interv360-current-app-audit
80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e	refs/heads/method/sfia-v2-automation-levels
824883c8d4593276fa7129187dba7efcf7b117ef	refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data
82c78239ec1cbb83a66c714685374a70025fbae2	refs/heads/delivery/interv360-inc-02-pr-preparation
8316f26de1ade4bbf0e698ce03666e977daa87cb	refs/heads/delivery/sfia-studio-poc-increment-b
8763417ab21060ae1ba83083696d704ec4b6507c	refs/heads/method/interv360-final-capitalization
87662a20e9a885e44acf50dee74a7017ab2ac9e9	refs/heads/delivery/interv360-audit-trail
8815f0f1e4576f07c4768decb8990b2bbf6e7a54	refs/heads/docs/close-lot-d1-status
89cb7565507a0a5303de9004feb1e2e9f14d3d39	refs/heads/delivery/sfia-studio-poc-increment-a
8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb	refs/heads/evol/chantiers360-post-mvp-framing
930d5a243e372ddae4c856cfb199e0f4aa260906	refs/heads/migration/sfia-v2.6-lot-d1-naming
934be03e55dd3e237ab42f0ebec597a377ecfbaf	refs/heads/cycle/chantiers360-v2-functional-architecture
94f71f21db99026992ffb638fcf18f23d8e9227c	refs/heads/docs/chantiers360-v2-inc-01-qa-g4
960c90b32b2c1c5701a668b0ebc70fdd847c681b	refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
96bb808bb6f2ea7f09878c970bb89b5978c2abb8	refs/heads/delivery/sfia-studio-poc-increment-c
96bd25ee22643a1ad8e3d8077bbb0ecf218430ad	refs/heads/docs/chantiers360-v2-inc-04-qa-g4
9987df647b0e6af1519ec46168decd9db5493075	refs/heads/docs/chantiers360-v2-inc-05-closure
9babc8c052626e971b8eb4d324d58e16ccf9e307	refs/heads/cycle/chantiers360-v2-mvp-backlog
9c0f6f970da896235dd1f62a8ba76aacae14243b	refs/heads/pr/sfia-studio-v3-native-option-a-foundation
9c125059f3323a7df862b96d32f1940b1cbdefc1	refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
9d425dd842e1317ec9213d3ec220d2633f0dff31	refs/heads/decision/chantiers360-v2-architecture-arbitrages
9e0a9c81ceaf54e2147ba1cf87884d2c23399306	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
9e7bcb3deca0b909370e13b91440aa872a460ba0	refs/heads/docs/chantiers360-v2-technical-architecture-post-merge
9f03916243c470587f6958e058fd58909e5bd75a	refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
a23cefcb90bd78ff3ff692cf194c4d0fdc06f229	refs/heads/delivery/interv360-frontend-api-connection
a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb	refs/heads/documentation/sfia-discovery-acts-06-07-editorial
a310850ab136d84ca45f784ccc44df9cbe63ae6c	refs/heads/delivery/interv360-backend-minimal-prototype
a42a85c0c0b3e146e59f82ea753329ed9253f278	refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge
a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6	refs/heads/method/sfia-v2.5-review-pack-reset
a6eb49d0f003bf4411c40dd799b54047e86f1d8a	refs/heads/delivery/interv360-batch-02-demo-control-scenario
a76c3f80af76cfd997d6d87bb2888bad9a74da78	refs/heads/method/sfia-v2x-method-versioning-standard
a7b22ec9e3ba2daa25c0ae19987d917077188051	refs/heads/notion/sfia-live-export-audit
a830842aa0b60b35ebc845e88550fe1927288eec	refs/heads/delivery/interv360-workflow-requalification
adcda831ff1805e14a464085628c2e4b3d5d4eac	refs/heads/method/chantiers360-v2-mvp-capitalization
af5d9a25f0c832367f21e520c3d2e10998bcfe23	refs/heads/docs/fix-lot-d-plan-status
b11b318ab1b79d72be484d784c1607c4d6a95a81	refs/heads/consolidation/sfia-global-capitalization
b3bd01f4e81fe4b9e30f4a039232f7824ac29c19	refs/heads/delivery/interv360-request-model-finalization
b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05	refs/heads/backlog/sfia-studio-poc-vertical-slice
b502c0069f836a729090bdc187dd98a0c26591ca	refs/heads/qa/sfia-studio-m1-bypass-probe-revert
b6a19335f5116940175f5986492e3693722563bc	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6d9a881a24a2817469e7b818204ec8993d0bceb	refs/heads/prompts/create-templates-context-pack
b763a318fb84e23e482ed23a0bd561c1d9e719e6	refs/heads/cadrage/task-tracker-light
b7a5e827fddb7e80f03a71b3b64ca89271ede0a6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
b87413b54858af0740b3d1e37c7e3fee63aca726	refs/heads/qualification/sfia-v2.6-lot-e-global-controls
b8eb9454c94b74fbdfdfdf596a9329c749dfd266	refs/heads/fix/remove-controlled-delivery-broken-link
bbd54bf46d211b467e1b3a82404e700a82270984	refs/heads/docs/chantiers360-v2-design-coverage-post-merge
bc697d8c87a2c660c3e51f2079eb1817e59c89b0	refs/heads/method/sfia-v2-design-coverage-rules
bcc6d379571280142aa5eff6c8baa9615978fc95	refs/heads/delivery/chantiers360-v2-inc-05
bd3608c6220e820cc3fa017422a7564a565a1296	refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
be10f7a92828cfb7761bdcbb591c38c759d9ffa3	refs/heads/delivery/interv360-auth-user-switcher
be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6	refs/heads/cycle/chantiers360-v2-ux-ui
bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35	refs/heads/architecture/interv360-product-industrialization-framing
bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4	refs/heads/delivery/interv360-batch-04-demo-presentation-package
c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5	refs/heads/docs/sfia-v2x-versioning-post-merge
c0fc4b26af701a97ebec7b75c54247ab775ab4c1	refs/heads/docs/close-lot-d2-status
c24da112ed3d67479d7b3e7715c78da3c26be78e	refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction
c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9	refs/heads/delivery/sfia-studio-d1-shared-platform-integration
c4cc0b02c18300808d788810d8830dcfdc4979fa	refs/heads/cleanup/sfia-v2.6-lot-j
c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2	refs/heads/delivery/chantiers360-v2-inc-02
c520b819446cbc5cf28cb7327357f5cd60049293	refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
c79992b71b859847abbc8f1921f1832c133a272e	refs/heads/notion/pause-notion-publication-track
c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf	refs/heads/delivery/sfia-studio-control-tower-fast-track
ca93e0805b499f9cae6cacd84e37cbb122d89a1c	refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition
cae841519ed1d2dd825e6ecb998337cd47b4a1e1	refs/heads/method/sfia-cycle-knowledge-contracts
cbba66bfc4bf3b780f54945a562900fb1ce74603	refs/heads/method/sfia-v2-project-bootstrap-standard
cf64fdd82f9b71960111d22d10c0fb7e0433cb4d	refs/heads/project/sfia-studio-functional-design
d248b9db91f4f10c16885c9f931f4cdd0f966316	refs/heads/design/sfia-studio-ops1-scenario
d306054f7622c48e86ca23ff4386a0a35590c9c6	refs/heads/delivery/interv360-inc-04-list-filtering-local-summary
d30ca7299a13a3ce9955d06e69e9ea976d150551	refs/heads/docs/chantiers360-v2-inc-05-qa-g4
d4401c3da6c08cb7e8716fea5a513df22d467c0e	refs/heads/archive/sfia-v2.6-lot-c-v3-mcp
d54c952c3c4118f37a95800a55a7bfcd99a8af98	refs/heads/cadrage/sfia-v2.6-lot-h
d630c6cd765a51617917a9869ee20814657e586f	refs/heads/migration/sfia-v2.6-lot-a-core
d672317108ca30c3df5a6d2f9b19b33c0c717476	refs/heads/docs/chantiers360-v2-readme-post-closure
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
d8394b75ec7a28c3e39f074b025d9eef877c900c	refs/heads/delivery/interv360-demo-polish
d8f43775cd3fcd1cf8b633a63bd575caffc1cc03	refs/heads/method/sfia-v2-technical-architecture-decision-standard
d96dfcea5d081fce9e65a3629c1c4ed67c23619a	refs/heads/method/sfia-v2.4-consolidation-operating-efficiency
daf6f7d02bbac09024f6275a793769e66b2b3878	refs/heads/method/sfia-studio-v3-doctrine-consolidation
dc4c971543258317166f79bf1e1f8baaee38f207	refs/heads/consolidation/interv360-application-rex
dc7a24cfed4c3cd3fe584e4948847551e7af4cff	refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
dd2a68c6a1e45fee1e1f397cb644c2c082a3d877	refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction
dfc643097c07a676a8a17059f7aa8041dd74d2f7	refs/heads/release/interv360-mvp-release-readiness
e106d9143def77ac92164299c8977ab96a43517a	refs/heads/delivery/interv360-product-ux-finalization
e1befcb80ed5e3c789a7de9036a8207d6b3e6771	refs/heads/main
e2006897c492fc8d83a185ce818ddb5e3ea47164	refs/heads/audit/sfia-v2.6-lot-0-qualification
e461c6f238de494872fd1cbba6356ea08f0b9db5	refs/heads/docs/chantiers360-v2-inc-02-closure
e65a4d23443b8745639e045eccabe7be304b0809	refs/heads/delivery/chantiers360-v2-inc-01
e79a4408f50500e121c8ecaf009a9ed489e4a450	refs/heads/method/sfia-v2.4-reference-documentation-alignment
e97e083a749d88b8556ffd81edc0160a432df137	refs/heads/capitalization/sfia-studio-p0-status-sync
eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4	refs/heads/docs/chantiers360-v2-inc-04-closure
ec073f646eb75bd5696fb26ee0b4508a99315444	refs/heads/docs/chantiers360-v2-inc-02-qa-g4
ecaf416da0d121176b618cefb1826ce6ac40b76e	refs/heads/method/sfia-v2.4.1-documentation-status-promotion
ed2c0f4c63355867ab322f850189fac4144f064f	refs/heads/delivery/interv360-end-to-end-demo-hardening
ed3304402d5c9d2f014c50741e9dc7fd508cb24a	refs/heads/docs/sfia-studio-pr226-post-merge-sync
f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23	refs/heads/qa/sfia-studio-m1-bypass-probe
f136c33204b4df9c01198d7ff65fb9612d88e265	refs/heads/docs/chantiers360-v2-inc-03-qa-g4
f2a822ea2b2800484a0525b72a0473e55997f14f	refs/heads/method/sfia-3-exploration-closure
f39adb8c23be6740ba57194608ada3a62f0d72ca	refs/heads/delivery/interv360-backend-persistence
f56c768506965f09523b60cd36f21ff75acd3c25	refs/heads/migration/sfia-v2.6-lot-d2-naming
f7f2e18d825add5195c611760788fbd79aaf98aa	refs/heads/conception/sfia-notion-product-space
f89ba5fb6cfca4e3de97667d944569a20266a8aa	refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
f8d25c2dc523020b0443c2b16f375edbf7f5631b	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
f934a3c54260a880b4c8d28130407961c46cdc28	refs/heads/documentation/sfia-discovery-pd-08-qa
fa0eebe00ce3b765a8a486aa660dddfab40123a0	refs/heads/docs/sfia-studio-m1-capitalization-rex
fe9309006aa05493418be9ac6cc38d38ad1b1c39	refs/heads/docs/chantiers360-v2-post-spike-alignment

```

## L. Inventaire worktrees avant
```
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca
branch refs/heads/qa/sfia-studio-m1-bypass-probe-revert

worktree /Users/morris/Projects/sfia-workspace-m1-capitalization
HEAD fa0eebe00ce3b765a8a486aa660dddfab40123a0
branch refs/heads/docs/sfia-studio-m1-capitalization-rex

worktree /Users/morris/Projects/sfia-workspace-option-a-after-t-a6
HEAD aef7fd6d5a678857cf36e490f1550866d47c8887
branch refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance
HEAD 2f9560534e285c5b8105f81dca39c5252667860c
branch refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
HEAD a42a85c0c0b3e146e59f82ea753329ed9253f278
branch refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge

worktree /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
HEAD 9f03916243c470587f6958e058fd58909e5bd75a
branch refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-t-a6-post-merge
HEAD 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
branch refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
HEAD 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
HEAD 960c90b32b2c1c5701a668b0ebc70fdd847c681b
branch refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status

worktree /Users/morris/Projects/sfia-workspace-t-a7-framing
HEAD b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
HEAD d77c775f6114eddd04af330cc943a869a5c4f6a2
branch refs/heads/capitalization/sfia-studio-v3-1-d1-rex

worktree /Users/morris/Projects/sfia-workspace-t-a7-next-decision
HEAD 33ea3e87facc8c99c9c5619d6d2424030d3918a2
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step

worktree /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
HEAD b6a19335f5116940175f5986492e3693722563bc
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
HEAD f89ba5fb6cfca4e3de97667d944569a20266a8aa
branch refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
HEAD 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope

worktree /Users/morris/Projects/sfia-workspace-template-handoff-fix
HEAD 134be301792efbf6f9739d13f0572062ef976da7
detached

worktree /Users/morris/Projects/sfia-workspace-ux-reconciliation
HEAD 7bdabdcc0ea5f760383da190a661250dcd5d2598
branch refs/heads/project/sfia-studio-ux-ui-reconciliation

worktree /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
HEAD daf6f7d02bbac09024f6275a793769e66b2b3878
branch refs/heads/method/sfia-studio-v3-doctrine-consolidation

worktree /Users/morris/Projects/sfia-workspace-v3-native-audit
HEAD 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
branch refs/heads/audit/sfia-studio-v3-native-dependencies

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
HEAD 577ff0c22491288d2293fd9730ed26f0af4095b0
branch refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-design
HEAD e22bc243c8854df4e9422fafe46e92135fe242e9
branch refs/heads/design/sfia-studio-v3-native-option-a-functional

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
HEAD 52891e5c5a9b1254143e422111ea4955ca3a0940
branch refs/heads/modeled/sfia-studio-v3-native-option-a

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
HEAD 0b696ed970823aa75d013336e44e72de08f2ac57
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
HEAD 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
branch refs/heads/design/sfia-studio-v3-native-option-a-ux-ui

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0

worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
HEAD 24987074f4aa728cff616efa927ca016bc124831
branch refs/heads/sfia/review-handoff


```

## M. Pre-check switch
PRECHECK_OK — source @ d77c775f6114eddd04af330cc943a869a5c4f6a2, main locale b553f0aaec120e03b8cfca27f3f0e5fc03f1480e, origin/main e1befcb80ed5e3c789a7de9036a8207d6b3e6771, 77 WT, main checkout count 0

## N. Switch source → main
```
git switch main
```
Résultat: current=main HEAD=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e wt=77 preuves présentes source_checkouts=0

## O. Fast-forward main
```
git merge --ff-only origin/main
```
b553f0a..e1befcb Fast-forward (+436 doc 05)

## P. Vérification main
HEAD=main=origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771 ; L/R 0/0

## Q. Pre-check suppression locale
source ancêtre de main ; diff vide ; branch --merged contient source ; source non checkoutée

## R. Commande et résultat `git branch -d`
```
git branch -d capitalization/sfia-studio-v3-1-d1-rex
```
Deleted branch capitalization/sfia-studio-v3-1-d1-rex (was d77c775).
Absence `-D`: confirmée

## S. Pre-check suppression distante
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771; remote source encore d77c775f6114eddd04af330cc943a869a5c4f6a2; local absente; wt=77

## T. Commande et résultat suppression distante
```
git push origin --delete capitalization/sfia-studio-v3-1-d1-rex
```
deleted ; absence de force confirmée

## U. Branches après source cleanup
```
refs/heads/architecture/interv360-backend-api-contract-framing 7f24665adcff5022c32832d4a543f44345011488
refs/heads/architecture/interv360-backend-data-model-decision 0f2f6c4d740677da922c45e85b3d5814e6cf9bf0
refs/heads/architecture/interv360-backend-persistence-decision 4ee36eea7a5c06953af2f653af9f3a96e178e4f2
refs/heads/architecture/interv360-backend-target-framing 4b59b51e743a87951a704d0df3075aa9e7702309
refs/heads/architecture/interv360-backend-technical-stack-decision 98567700c5edbbebc18728fd60c7cfb5ed7e1663
refs/heads/architecture/interv360-product-industrialization-framing bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35
refs/heads/architecture/interv360-product-roadmap-after-persistence 572d06137cfe5d56b1fd1ee848f9fb1e79ad1d8c
refs/heads/architecture/interv360-product-roadmap-after-role-simulation 70a11108f9a778f92f6f98f45117818f09477fe8
refs/heads/architecture/interv360-product-roadmap-next 69b82461398c32be1dcc60a91cd1cb1036703f1e
refs/heads/architecture/interv360-role-simulation-review 733cbfffbaaa796240fa68f6c9148f9b62cabeb2
refs/heads/architecture/sfia-studio-v3-native-option-a-technical e8166adb2634a659667bdfd246d5cf851958cccc
refs/heads/archive/sfia-v2.6-lot-0-completion 2830efd0f2735141641e816ccac82475ccb30c74
refs/heads/archive/sfia-v2.6-lot-0-inventories 6cf7d361d9543a2a8b1fff8f78ea72be75f303f0
refs/heads/archive/sfia-v2.6-lot-c-v3-mcp d4401c3da6c08cb7e8716fea5a513df22d467c0e
refs/heads/audit/sfia-studio-v3-native-dependencies 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
refs/heads/audit/sfia-v2.6-lot-0-qualification e2006897c492fc8d83a185ce818ddb5e3ea47164
refs/heads/audit/sfia-v2.6-repository-cartography 4ae75a9d590d397456ba2e3de3815555a5b57ddf
refs/heads/backlog/sfia-studio-ops1 4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e
refs/heads/backlog/sfia-studio-poc-vertical-slice b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05
refs/heads/cadrage/sfia-v2.6-lot-h d54c952c3c4118f37a95800a55a7bfcd99a8af98
refs/heads/cadrage/task-tracker-light b763a318fb84e23e482ed23a0bd561c1d9e719e6
refs/heads/capitalization/sfia-documentation-completeness ef2f7bf16fdfcb8c74d425cf561fabd89d951c80
refs/heads/capitalization/sfia-studio-p0-status-sync e97e083a749d88b8556ffd81edc0160a432df137
refs/heads/capitalization/sfia-studio-poc-framing-post-merge 18d21511efaaf62b8a332b9e289f2355830b9617
refs/heads/capitalization/sfia-v2.6-repository-rationalization 40b6f00d4dce6f8524dbfc9f4574fba87ea491d8
refs/heads/cleanup/sfia-v2.6-lot-j c4cc0b02c18300808d788810d8830dcfdc4979fa
refs/heads/conception/sfia-notion-product-space f7f2e18d825add5195c611760788fbd79aaf98aa
refs/heads/consolidation/interv360-application-rex dc4c971543258317166f79bf1e1f8baaee38f207
refs/heads/consolidation/interv360-current-app-audit 8099a96de369d820c7a82c27d8309ecf2da34217
refs/heads/consolidation/sfia-documentation-review 45e4498813734884ca57c9e822e3392c8e75cc0e
refs/heads/consolidation/sfia-global-capitalization b11b318ab1b79d72be484d784c1607c4d6a95a81
refs/heads/cycle/chantiers360-v2-design-figma 5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d
refs/heads/cycle/chantiers360-v2-detailed-framing 4546d88edbf47b4eee65933fccaa21c076f6d148
refs/heads/cycle/chantiers360-v2-figma-fidelity-spike 6d44882dc76acb628481e55916b6cc04f400d13a
refs/heads/cycle/chantiers360-v2-functional-architecture 934be03e55dd3e237ab42f0ebec597a377ecfbaf
refs/heads/cycle/chantiers360-v2-light-architecture 55b2f0c2fdde34b6775d5d8201768eab98200014
refs/heads/cycle/chantiers360-v2-mvp-backlog 9babc8c052626e971b8eb4d324d58e16ccf9e307
refs/heads/cycle/chantiers360-v2-ux-ui be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6
refs/heads/decision/chantiers360-v2-architecture-arbitrages 9d425dd842e1317ec9213d3ec220d2633f0dff31
refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data 824883c8d4593276fa7129187dba7efcf7b117ef
refs/heads/delivery/chantiers360-v2-inc-01 e65a4d23443b8745639e045eccabe7be304b0809
refs/heads/delivery/chantiers360-v2-inc-02 c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2
refs/heads/delivery/chantiers360-v2-inc-03 6583ddf31da43db0d9fde2b630da806d0a9c9d06
refs/heads/delivery/chantiers360-v2-inc-04 406a8839945236f9eb8a0cd858ef53f7ef64ece9
refs/heads/delivery/chantiers360-v2-inc-05 bcc6d379571280142aa5eff6c8baa9615978fc95
refs/heads/delivery/eventops-poc-visible-slice-01 e1befcb80ed5e3c789a7de9036a8207d6b3e6771
refs/heads/delivery/interv360-api-demo-hardening 7ef233a93b3c76099247937dc4deb524e623ab0a
refs/heads/delivery/interv360-api-product-hardening 04183050b7a6ffe271ce4eec05b4cf2ddba65c99
refs/heads/delivery/interv360-api-product-validation 69a33ed0ee72745b693ae82329bfb7a5dcec55ce
refs/heads/delivery/interv360-audit-trail 87662a20e9a885e44acf50dee74a7017ab2ac9e9
refs/heads/delivery/interv360-auth-user-switcher be10f7a92828cfb7761bdcbb591c38c759d9ffa3
refs/heads/delivery/interv360-backend-minimal-prototype a310850ab136d84ca45f784ccc44df9cbe63ae6c
refs/heads/delivery/interv360-backend-persistence f39adb8c23be6740ba57194608ada3a62f0d72ca
refs/heads/delivery/interv360-backend-users-session 1c0311d2a18a38b739e8429c90ff347a0c05436c
refs/heads/delivery/interv360-batch-01-demo-credibility 12efbb6bcad65a988588a33a54d574c0b08c7620
refs/heads/delivery/interv360-batch-02-demo-control-scenario a6eb49d0f003bf4411c40dd799b54047e86f1d8a
refs/heads/delivery/interv360-batch-03-demo-readiness-package 4d6e465eec7fef6cf0f4f8af3435636ca1bd456a
refs/heads/delivery/interv360-batch-04-demo-presentation-package bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4
refs/heads/delivery/interv360-connected-ux-productization 6f8c72b007661790b85be3f811c4c649e8238b6b
refs/heads/delivery/interv360-demo-feedback-review 5febd0f6ce250181e5fe4918813e05526ea2b3f0
refs/heads/delivery/interv360-demo-mvp-closure 091eebba81aa6dc80019c25584b9d8aa99517659
refs/heads/delivery/interv360-demo-polish d8394b75ec7a28c3e39f074b025d9eef877c900c
refs/heads/delivery/interv360-demo-presentation-feedback 5481b748e9b2968b5801149a762e255bb926ca38
refs/heads/delivery/interv360-demo-presentation-review 4a6c7b7c2b409b9e1eed43655432636a9f0a40c8
refs/heads/delivery/interv360-end-to-end-demo-hardening ed2c0f4c63355867ab322f850189fac4144f064f
refs/heads/delivery/interv360-frontend-api-connection a23cefcb90bd78ff3ff692cf194c4d0fdc06f229
refs/heads/delivery/interv360-frontend-api-connection-framing f15956a414d89e18b8254447972195d93f36586d
refs/heads/delivery/interv360-implementation-go-no-go 8cc09b11b82f05d28d51f49b3de209e5206b8389
refs/heads/delivery/interv360-inc-01-action-transition-decision aa5092f862e556888731830939ec5c5ec8b97347
refs/heads/delivery/interv360-inc-01-app-foundation 2d7f1215c832065766aad74ad1480b321b2c7c33
refs/heads/delivery/interv360-inc-01-controlled-workflow-skeleton 1fae1ce091ee8bf3f37c85fec6ee0c2e05242370
refs/heads/delivery/interv360-inc-01-controlled-workflow-validation 16c333903f4e21151db772736f921baf02edfec9
refs/heads/delivery/interv360-inc-01-demo-reset 5588977299d11b2db0525cc0f2c92f6e70cad3ce
refs/heads/delivery/interv360-inc-01-demo-script 95695751d516c1732f1c00e79728e54a46c12ed1
refs/heads/delivery/interv360-inc-01-final-demo-package 140a5beb8178e79efe39facd4022a1f742edbe1c
refs/heads/delivery/interv360-inc-01-global-summary 985ebcb5491207f411ed6b5f7664ba226aeda050
refs/heads/delivery/interv360-inc-01-implementation-preparation 0588ee22f1fd985f6febd5c5275b2d4282332b2c
refs/heads/delivery/interv360-inc-01-intervention-readonly-skeleton ed5f9ba8cb14781a681a06db09ef4545e420966f
refs/heads/delivery/interv360-inc-01-list-skeleton 58193676881df0818727ae49d4d5913c8b20024f
refs/heads/delivery/interv360-inc-01-local-persistence-decision 020f773bbfa6674a92ad97e0db16112a732206f6
refs/heads/delivery/interv360-inc-01-phase-2-delivery-decision 4f1eb6ab91dfb055ba3a9045a1be6de87a5ad583
refs/heads/delivery/interv360-inc-01-phase-2-rex 7a428a70db16ef815b32e423e9d2569aea22834e
refs/heads/delivery/interv360-inc-01-planning-readonly-skeleton 841113896fa93617fe39c6bd37f136771b262298
refs/heads/delivery/interv360-inc-01-pr-preparation 4f7af01d22d214dd3a3ae3e9a1fcf833425c5c5e
refs/heads/delivery/interv360-inc-01-push-and-pr 06751adf3a03843723c1c16f916b4b7c8a3187a4
refs/heads/delivery/interv360-inc-01-qualification-readonly-skeleton 5033c2400b18802dfa1c4dd821398c5604a7a197
refs/heads/delivery/interv360-inc-01-readonly-demo-summary 0e25e584636c8c786da3b9bb72699dfcfb0918d2
refs/heads/delivery/interv360-inc-01-report-readonly-skeleton 94a50c0fc08bfe199d99b2422bd44d55545015a9
refs/heads/delivery/interv360-inc-01-request-detail-skeleton ab27aad6dd1d8ea69e90c1a351171b5ca8f994f7
refs/heads/delivery/interv360-inc-02-pr-preparation 82c78239ec1cbb83a66c714685374a70025fbae2
refs/heads/delivery/interv360-inc-02-ux-demo-improvement e9de7bebe2384c42983ec86db846d3a2f2193b53
refs/heads/delivery/interv360-inc-03-multi-requests-local-demo 5f6e2cc86bfb5e2624ebdd79068de1d6729e8e7c
refs/heads/delivery/interv360-inc-03-pr-preparation 69325d09cc9d2936694412efee5d107c9ee62cf4
refs/heads/delivery/interv360-inc-04-list-filtering-local-summary d306054f7622c48e86ca23ff4386a0a35590c9c6
refs/heads/delivery/interv360-product-demo-consolidation 1b44bc1c063b977a5f309108fc8b45f3e1d425fe
refs/heads/delivery/interv360-product-industrialization 3bba55b7b34ef118006a9fe61464ba61f3f941d2
refs/heads/delivery/interv360-product-ux-finalization e106d9143def77ac92164299c8977ab96a43517a
refs/heads/delivery/interv360-request-model-finalization b3bd01f4e81fe4b9e30f4a039232f7824ac29c19
refs/heads/delivery/interv360-request-model-productization 6dded2000063b14ad4500d7b9b65b926578726e1
refs/heads/delivery/interv360-role-simulation 1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa
refs/heads/delivery/interv360-technical-arbitration ba81999c47296ae86ff2f908ea8f34f0035a8ee2
refs/heads/delivery/interv360-workflow-light-extension 5cd2b4e78ad434a5fe40c90ee2107466dd074896
refs/heads/delivery/interv360-workflow-requalification a830842aa0b60b35ebc845e88550fe1927288eec
refs/heads/delivery/sfia-studio-control-tower-fast-track c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
refs/heads/delivery/sfia-studio-d1-shared-platform-integration c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
refs/heads/delivery/sfia-studio-ops1-i1-session-journal 97df7d5127455297b942775dd9159f7eba121bdb
refs/heads/delivery/sfia-studio-ops1-i3-action-gate 3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57
refs/heads/delivery/sfia-studio-poc-increment-a 89cb7565507a0a5303de9004feb1e2e9f14d3d39
refs/heads/delivery/sfia-studio-poc-increment-b 8316f26de1ade4bbf0e698ce03666e977daa87cb
refs/heads/delivery/sfia-studio-poc-increment-c 96bb808bb6f2ea7f09878c970bb89b5978c2abb8
refs/heads/delivery/sfia-studio-poc-increment-d 41b9c46f5b02e352267920eb1cefef5cf447d324
refs/heads/delivery/sfia-studio-shared-technical-platform 08c282abafd97685bcc0b7e525ec96e6721ec589
refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction c24da112ed3d67479d7b3e7715c78da3c26be78e
refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion 5afe09516fd94fff466340dc0c1f877712f13f42
refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation 9c125059f3323a7df862b96d32f1940b1cbdefc1
refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance 2f9560534e285c5b8105f81dca39c5252667860c
refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916243c470587f6958e058fd58909e5bd75a
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation 9e0a9c81ceaf54e2147ba1cf87884d2c23399306
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation 5733d25b4b4c7ada042af2776fe1d3154c0b5583
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc 75aee25a33e45b63b96805e85d72326d1525b056
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority f8d25c2dc523020b0443c2b16f375edbf7f5631b
refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance 245f515c3f8baaf0c2cf72b59af0635a1b0efb67
refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition ca93e0805b499f9cae6cacd84e37cbb122d89a1c
refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge 7ef160c6fd8a99267a9e553fd77d13aa7e6f95da
refs/heads/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui 55a28d3cb30adb5b00ac347ffe9876879e199458
refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes 78859034e769c449901835a1b9431deb56dc0c3c
refs/heads/delivery/sfia-v2.6-lot-h 694fedcca20b960815d55cf825315d3b497c93ba
refs/heads/design/sfia-studio-ops1-scenario d248b9db91f4f10c16885c9f931f4cdd0f966316
refs/heads/design/sfia-studio-ops1-technical-architecture b495a567afab1f74fe816ad210bdf25812cf55ec
refs/heads/design/sfia-studio-poc-vertical-slice 58fb275038bde920cf58001973f6809a6e10ffdf
refs/heads/design/sfia-studio-v3-native-option-a-functional e22bc243c8854df4e9422fafe46e92135fe242e9
refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture 577ff0c22491288d2293fd9730ed26f0af4095b0
refs/heads/design/sfia-studio-v3-native-option-a-ux-ui 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
refs/heads/devops/sfia-studio-ops1-foundation 04a3b4570b6116ff3fb3dbdc1295b0858caa2a1c
refs/heads/docs/chantiers360-close-r-qa-04 662f1c3d36e7755a18f120e848e69e730b6446c6
refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison 158bdf01c5cd72ed723d56d28cc69d3d44276632
refs/heads/docs/chantiers360-v0-vs-v2-post-merge 2e6816653b2c7030a83039c799346860dd5ec097
refs/heads/docs/chantiers360-v2-design-coverage-post-merge bbd54bf46d211b467e1b3a82404e700a82270984
refs/heads/docs/chantiers360-v2-final-pilot-rex 438b3bbe8e610c1a485b71c7e152709f69a1b624
refs/heads/docs/chantiers360-v2-inc-01-closure 09204fcadc42e5c053d2c8d435a5b9fb9d082daa
refs/heads/docs/chantiers360-v2-inc-01-qa-g4 94f71f21db99026992ffb638fcf18f23d8e9227c
refs/heads/docs/chantiers360-v2-inc-02-closure e461c6f238de494872fd1cbba6356ea08f0b9db5
refs/heads/docs/chantiers360-v2-inc-02-qa-g4 ec073f646eb75bd5696fb26ee0b4508a99315444
refs/heads/docs/chantiers360-v2-inc-03-closure 1d795fc6afd39a512179350b49ff67c14b7db201
refs/heads/docs/chantiers360-v2-inc-03-qa-g4 f136c33204b4df9c01198d7ff65fb9612d88e265
refs/heads/docs/chantiers360-v2-inc-04-closure eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4
refs/heads/docs/chantiers360-v2-inc-04-qa-g4 96bd25ee22643a1ad8e3d8077bbb0ecf218430ad
refs/heads/docs/chantiers360-v2-inc-05-closure 9987df647b0e6af1519ec46168decd9db5493075
refs/heads/docs/chantiers360-v2-inc-05-qa-g4 d30ca7299a13a3ce9955d06e69e9ea976d150551
refs/heads/docs/chantiers360-v2-post-capitalization-alignment 314794a39a73dbf8287ec3b7d5275cdf535a4705
refs/heads/docs/chantiers360-v2-post-spike-alignment fe9309006aa05493418be9ac6cc38d38ad1b1c39
refs/heads/docs/chantiers360-v2-readme-post-closure d672317108ca30c3df5a6d2f9b19b33c0c717476
refs/heads/docs/chantiers360-v2-technical-architecture-post-merge 9e7bcb3deca0b909370e13b91440aa872a460ba0
refs/heads/docs/close-lot-d1-status 8815f0f1e4576f07c4768decb8990b2bbf6e7a54
refs/heads/docs/close-lot-d2-status c0fc4b26af701a97ebec7b75c54247ab775ab4c1
refs/heads/docs/close-lot-d3-status 6cdda92f2354effd93213f971051c22df76c05d2
refs/heads/docs/fix-lot-d-plan-status af5d9a25f0c832367f21e520c3d2e10998bcfe23
refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
refs/heads/docs/sfia-studio-fa6-mitigated-from-main 67f140a19cf4a992dbc0d7b053abfde579a9a68c
refs/heads/docs/sfia-studio-m1-capitalization-rex fa0eebe00ce3b765a8a486aa660dddfab40123a0
refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge a42a85c0c0b3e146e59f82ea753329ed9253f278
refs/heads/docs/sfia-studio-pr226-post-merge-sync ed3304402d5c9d2f014c50741e9dc7fd508cb24a
refs/heads/docs/sfia-studio-recover-unmerged-project-docs 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status 960c90b32b2c1c5701a668b0ebc70fdd847c681b
refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization c520b819446cbc5cf28cb7327357f5cd60049293
refs/heads/docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing dcdc90a0779859ec5d34a91021bab65122447ee5
refs/heads/docs/sfia-v2.6-lot-e-closure 0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a
refs/heads/docs/sfia-v231-final-status 2bddcedfff871e2dd61d60c39ff48554bbbb4049
refs/heads/docs/sfia-v2x-versioning-post-merge c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5
refs/heads/documentation/sfia-discovery-act-02-editorial 153c50bc4e1638128e42629e828774bbadfce369
refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial 6fcc76a2353c4d9322280845100fad2c2bb93ea1
refs/heads/documentation/sfia-discovery-acts-04-05-editorial 7e65429b22338b40438307e3f64fa3b46d6cc233
refs/heads/documentation/sfia-discovery-acts-06-07-editorial a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb
refs/heads/documentation/sfia-discovery-legacy-migration-plan 402150287434bd844e1948c1b85ef6f58b90d3c2
refs/heads/documentation/sfia-discovery-pd-08-qa f934a3c54260a880b4c8d28130407961c46cdc28
refs/heads/documentation/sfia-discovery-pd-09-capitalization 28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f
refs/heads/evol/chantiers360-post-mvp-framing 8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb
refs/heads/fix/chantiers360-v2-rqa02-status-alignment 1ef4d67f080fd42789e3daa3ded1f4247848a1f9
refs/heads/fix/remove-controlled-delivery-broken-link b8eb9454c94b74fbdfdfdf596a9329c749dfd266
refs/heads/framing/sfia-studio-control-tower 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/framing/sfia-studio-first-user-visible-vertical-slice c1955179a36079e060c41a845c2a1950084966c8
refs/heads/framing/sfia-studio-next-product-increment 88fa4658da07156614de270d8172f147535ddbf9
refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity bd3608c6220e820cc3fa017422a7564a565a1296
refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6 aef7fd6d5a678857cf36e490f1550866d47c8887
refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution 65e5b606c2cddf443b95a890855f5097cb2ec93f
refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity 0b696ed970823aa75d013336e44e72de08f2ac57
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step 33ea3e87facc8c99c9c5619d6d2424030d3918a2
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness b6a19335f5116940175f5986492e3693722563bc
refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
refs/heads/framing/sfia-studio-visible-slice-v2-runtime-ui-contract a1e207bdefef022858eb2ffd07b66727bed75dd3
refs/heads/framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage 3e8a4374405dce98866e35fb60c5c7329701f191
refs/heads/main e1befcb80ed5e3c789a7de9036a8207d6b3e6771
refs/heads/method/chantiers360-v2-inc-01-capitalization 5b5758f701903410f27f7d2bc8cb5fa980293599
refs/heads/method/chantiers360-v2-mvp-capitalization adcda831ff1805e14a464085628c2e4b3d5d4eac
refs/heads/method/codex-operating-model-pilot ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/method/controlled-delivery-index-integration 61187dcf2659e4336394b64bed9e2f7a81db902a
refs/heads/method/controlled-delivery-publication-package 8dc82696103431aeab8cbe2a540ff23f2cdf5828
refs/heads/method/controlled-delivery-publication-prep 9a6e0ae09861c8e19cc31cb06fe29635990ce62b
refs/heads/method/controlled-delivery-standard bf5734d9ca8cc3effbbd0fc86e4201c0dcb71afc
refs/heads/method/controlled-delivery-standard-hardening 834533706d90b7a58c399ccdf0331cd9e68f9104
refs/heads/method/delivery-acceleration-level-3-rex 008dbff2b64221a1a86204a2d93da57d8bd34e8b
refs/heads/method/interv360-final-capitalization 8763417ab21060ae1ba83083696d704ec4b6507c
refs/heads/method/interv360-mvp-delivery-capitalization 2ef34cb8c4d65eae4a35143a4a60589654a73fe2
refs/heads/method/sfia-3-exploration-closure f2a822ea2b2800484a0525b72a0473e55997f14f
refs/heads/method/sfia-consolidation-roadmap 10cb8c05e0b5cd924a70f5142fca9dc0ae60f077
refs/heads/method/sfia-cycle-knowledge-contracts cae841519ed1d2dd825e6ecb998337cd47b4a1e1
refs/heads/method/sfia-studio-v3-doctrine-consolidation daf6f7d02bbac09024f6275a793769e66b2b3878
refs/heads/method/sfia-v2-automation-levels 80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e
refs/heads/method/sfia-v2-automation-vision 1398a465537db503c562e2e40ab1010fd0bcfd8f
refs/heads/method/sfia-v2-delivery-qa-test-standard 2645df2b35676780eb42c6f9a50f3e8fde04a768
refs/heads/method/sfia-v2-design-coverage-rules bc697d8c87a2c660c3e51f2079eb1817e59c89b0
refs/heads/method/sfia-v2-figma-design-cycle 1bb55f01c1f87cf1a2d51f379831bb2b910394e0
refs/heads/method/sfia-v2-figma-fidelity-gate-standard 672d72bb2794bc66e575c2e4d47625b69035caff
refs/heads/method/sfia-v2-pilot-selection-decision 728231760b2414147c655eacc44afa46fb0f9192
refs/heads/method/sfia-v2-pilot-selection-scoring 22d8dcfc009c39cd2645252f05a85a61136d71ad
refs/heads/method/sfia-v2-project-bootstrap-standard cbba66bfc4bf3b780f54945a562900fb1ce74603
refs/heads/method/sfia-v2-prompt-routing-alignment 1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4
refs/heads/method/sfia-v2-technical-architecture-decision-standard d8f43775cd3fcd1cf8b633a63bd575caffc1cc03
refs/heads/method/sfia-v2.4-consolidation-operating-efficiency d96dfcea5d081fce9e65a3629c1c4ed67c23619a
refs/heads/method/sfia-v2.4-reference-documentation-alignment e79a4408f50500e121c8ecaf009a9ed489e4a450
refs/heads/method/sfia-v2.4.1-documentation-status-promotion ecaf416da0d121176b618cefb1826ce6ac40b76e
refs/heads/method/sfia-v2.5-cycle-1-mvp 4e3947fe996e10d50bc77ce82f6ef409180c2193
refs/heads/method/sfia-v2.5-project-plan 7751855037cbf5a1e08977364d7ee0ca5f04ef0b
refs/heads/method/sfia-v2.5-review-pack-reset a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6
refs/heads/method/sfia-v2.6-repository-standard-decisions 56ce850cdee5fb219e48bc39af01a33a949cc765
refs/heads/method/sfia-v2x-method-versioning-standard a76c3f80af76cfd997d6d87bb2888bad9a74da78
refs/heads/migration/sfia-v2.6-lot-a-core d630c6cd765a51617917a9869ee20814657e586f
refs/heads/migration/sfia-v2.6-lot-d1-naming 930d5a243e372ddae4c856cfb199e0f4aa260906
refs/heads/migration/sfia-v2.6-lot-d2-naming f56c768506965f09523b60cd36f21ff75acd3c25
refs/heads/migration/sfia-v2.6-lot-d3-naming 093c91a39bdca3fac576568899c531cddb94e36d
refs/heads/modeled/sfia-studio-v3-native-option-a 52891e5c5a9b1254143e422111ea4955ca3a0940
refs/heads/notion/pause-notion-publication-track c79992b71b859847abbc8f1921f1832c133a272e
refs/heads/notion/provisioning-engine-design 38b91eb566ae6e016dfa2566e03cd3979366c9b8
refs/heads/notion/sfia-live-export-audit a7b22ec9e3ba2daa25c0ae19987d917077188051
refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4 32e5271842b9a344a7e292614675c27ea8ed941b
refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230 27811e8f5f3747706bbbe417a5dc949a066c9187
refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0 4b279b8af41559c4e6e9c41a481c9c3b76675026
refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
refs/heads/pr/sfia-studio-v3-native-option-a-foundation 9c0f6f970da896235dd1f62a8ba76aacae14243b
refs/heads/product/interv360-mvp-final-roadmap 14cadbe299bd959c9f9d934f1b711caf1ebaa489
refs/heads/project/campus360-detailed-framing ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
refs/heads/project/campus360-opportunity-framing 4275a60cf81acffa00e5faa77c33bd3a583ed599
refs/heads/project/chantiers360-v2-bootstrap 774beed72ce74f72c6f016554cccbfe157f4de1e
refs/heads/project/sfia-studio-functional-architecture 4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3
refs/heads/project/sfia-studio-functional-design cf64fdd82f9b71960111d22d10c0fb7e0433cb4d
refs/heads/project/sfia-studio-poc-orchestration-framing 3b162ecb5212e9f62ac20f0066df9fbc545be4cc
refs/heads/project/sfia-studio-pre-framing 18c642749e0c7bfe658a3a76868a251b92323183
refs/heads/project/sfia-studio-ux-ui-reconciliation 7bdabdcc0ea5f760383da190a661250dcd5d2598
refs/heads/prompts/create-templates-context-pack b6d9a881a24a2817469e7b818204ec8993d0bceb
refs/heads/qa/sfia-studio-m1-bypass-probe f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
refs/heads/qa/sfia-studio-m1-bypass-probe-revert b502c0069f836a729090bdc187dd98a0c26591ca
refs/heads/qualification/sfia-v2.6-lot-d-naming 3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99
refs/heads/qualification/sfia-v2.6-lot-e-global-controls b87413b54858af0740b3d1e37c7e3fee63aca726
refs/heads/qualification/sfia-v2.6-lot-f-superseded 2f89afdb6c29f1ab562e6b4e16ce51863b4281f7
refs/heads/qualification/sfia-v2.6-lot-f2-f005 7d87331a37e1899bdca32c2fafa2fabb0dc8d514
refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions f89ba5fb6cfca4e3de97667d944569a20266a8aa
refs/heads/recovery/campus360-detailed-framing 32690b618ba0ab208db7f1b6c16b6d79bf76dc78
refs/heads/recovery/sfia-studio-functional-architecture-sync a5ad0c07b60d652596d4962103ec445391a7827b
refs/heads/release/interv360-mvp-release-readiness dfc643097c07a676a8a17059f7aa8041dd74d2f7
refs/heads/sfia/review-handoff 24987074f4aa728cff616efa927ca016bc124831
refs/heads/spike/sfia-studio-openai-gpt-adapter 056c97f6a9838a99125f81e1a84cf17cd070b3fe
refs/heads/tooling/review-handoff-canonical-publisher 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
refs/heads/ux/sfia-studio-d1-conversational-convergence 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
refs/heads/validation/sfia-v2.6-lot-e2-validation 477fe5508a5bce8d396ee8214c4f03b97f9f0ad1
refs/heads/validation/sfia-v2.6-lot-f1a-f1b 15185f334960c93cdc8c6c6f0cb13200d95b0902

```
```
008dbff2b64221a1a86204a2d93da57d8bd34e8b	refs/heads/method/delivery-acceleration-level-3-rex
04183050b7a6ffe271ce4eec05b4cf2ddba65c99	refs/heads/delivery/interv360-api-product-hardening
056c97f6a9838a99125f81e1a84cf17cd070b3fe	refs/heads/spike/sfia-studio-openai-gpt-adapter
06751adf3a03843723c1c16f916b4b7c8a3187a4	refs/heads/delivery/interv360-inc-01-push-and-pr
08c282abafd97685bcc0b7e525ec96e6721ec589	refs/heads/delivery/sfia-studio-shared-technical-platform
091eebba81aa6dc80019c25584b9d8aa99517659	refs/heads/delivery/interv360-demo-mvp-closure
09204fcadc42e5c053d2c8d435a5b9fb9d082daa	refs/heads/docs/chantiers360-v2-inc-01-closure
093c91a39bdca3fac576568899c531cddb94e36d	refs/heads/migration/sfia-v2.6-lot-d3-naming
0ae4bb3e9aa3c51e706c5391e0255f0e4c5c5d8a	refs/heads/docs/sfia-v2.6-lot-e-closure
0b696ed970823aa75d013336e44e72de08f2ac57	refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
10cb8c05e0b5cd924a70f5142fca9dc0ae60f077	refs/heads/method/sfia-consolidation-roadmap
12efbb6bcad65a988588a33a54d574c0b08c7620	refs/heads/delivery/interv360-batch-01-demo-credibility
1398a465537db503c562e2e40ab1010fd0bcfd8f	refs/heads/method/sfia-v2-automation-vision
14cadbe299bd959c9f9d934f1b711caf1ebaa489	refs/heads/product/interv360-mvp-final-roadmap
14d58fe95a8f29c3dc1f72c794a64fedbc795bbe	refs/heads/tooling/review-handoff-canonical-publisher
15185f334960c93cdc8c6c6f0cb13200d95b0902	refs/heads/validation/sfia-v2.6-lot-f1a-f1b
153c50bc4e1638128e42629e828774bbadfce369	refs/heads/documentation/sfia-discovery-act-02-editorial
1547ff5869a1c71ac93ede6f4e05fd72fdeb02aa	refs/heads/delivery/interv360-role-simulation
158bdf01c5cd72ed723d56d28cc69d3d44276632	refs/heads/docs/chantiers360-v0-vs-sfia-v2-comparison
16fe9c36859e9798c9e158f2c7a461b85d275dd5	refs/heads/tooling/penpot-mcp-self-host-feedback
18c642749e0c7bfe658a3a76868a251b92323183	refs/heads/project/sfia-studio-pre-framing
18d21511efaaf62b8a332b9e289f2355830b9617	refs/heads/capitalization/sfia-studio-poc-framing-post-merge
1a2fa31fab6343bdd0eab7211febb3bcc5326c33	refs/heads/docs/sfia-studio-recover-unmerged-project-docs
1b44bc1c063b977a5f309108fc8b45f3e1d425fe	refs/heads/delivery/interv360-product-demo-consolidation
1bb55f01c1f87cf1a2d51f379831bb2b910394e0	refs/heads/method/sfia-v2-figma-design-cycle
1bc9f3adcc0346c2c1ed2b4f5adcfdd5db896cd4	refs/heads/method/sfia-v2-prompt-routing-alignment
1c0311d2a18a38b739e8429c90ff347a0c05436c	refs/heads/delivery/interv360-backend-users-session
1d795fc6afd39a512179350b49ff67c14b7db201	refs/heads/docs/chantiers360-v2-inc-03-closure
1ef4d67f080fd42789e3daa3ded1f4247848a1f9	refs/heads/fix/chantiers360-v2-rqa02-status-alignment
22d8dcfc009c39cd2645252f05a85a61136d71ad	refs/heads/method/sfia-v2-pilot-selection-scoring
245f515c3f8baaf0c2cf72b59af0635a1b0efb67	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
24987074f4aa728cff616efa927ca016bc124831	refs/heads/sfia/review-handoff
2645df2b35676780eb42c6f9a50f3e8fde04a768	refs/heads/method/sfia-v2-delivery-qa-test-standard
2830efd0f2735141641e816ccac82475ccb30c74	refs/heads/archive/sfia-v2.6-lot-0-completion
28966a8dd9cbf4b9ee88de422c6c3f7c52f7288f	refs/heads/documentation/sfia-discovery-pd-09-capitalization
2bddcedfff871e2dd61d60c39ff48554bbbb4049	refs/heads/docs/sfia-v231-final-status
2e6816653b2c7030a83039c799346860dd5ec097	refs/heads/docs/chantiers360-v0-vs-v2-post-merge
2ef34cb8c4d65eae4a35143a4a60589654a73fe2	refs/heads/method/interv360-mvp-delivery-capitalization
2f89afdb6c29f1ab562e6b4e16ce51863b4281f7	refs/heads/qualification/sfia-v2.6-lot-f-superseded
314794a39a73dbf8287ec3b7d5275cdf535a4705	refs/heads/docs/chantiers360-v2-post-capitalization-alignment
33ea3e87facc8c99c9c5619d6d2424030d3918a2	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
3607a3a9ca5fb880f7fcc0d42ca5f7c62d16af57	refs/heads/delivery/sfia-studio-ops1-i3-action-gate
38b91eb566ae6e016dfa2566e03cd3979366c9b8	refs/heads/notion/provisioning-engine-design
3a6d1e7bc0a94eb7ead71269f9ffe8b8d3043c99	refs/heads/qualification/sfia-v2.6-lot-d-naming
3b162ecb5212e9f62ac20f0066df9fbc545be4cc	refs/heads/project/sfia-studio-poc-orchestration-framing
3bba55b7b34ef118006a9fe61464ba61f3f941d2	refs/heads/delivery/interv360-product-industrialization
402150287434bd844e1948c1b85ef6f58b90d3c2	refs/heads/documentation/sfia-discovery-legacy-migration-plan
406a8839945236f9eb8a0cd858ef53f7ef64ece9	refs/heads/delivery/chantiers360-v2-inc-04
40b6f00d4dce6f8524dbfc9f4574fba87ea491d8	refs/heads/capitalization/sfia-v2.6-repository-rationalization
41b9c46f5b02e352267920eb1cefef5cf447d324	refs/heads/delivery/sfia-studio-poc-increment-d
4275a60cf81acffa00e5faa77c33bd3a583ed599	refs/heads/project/campus360-opportunity-framing
438b3bbe8e610c1a485b71c7e152709f69a1b624	refs/heads/docs/chantiers360-v2-final-pilot-rex
4546d88edbf47b4eee65933fccaa21c076f6d148	refs/heads/cycle/chantiers360-v2-detailed-framing
45e4498813734884ca57c9e822e3392c8e75cc0e	refs/heads/consolidation/sfia-documentation-review
477fe5508a5bce8d396ee8214c4f03b97f9f0ad1	refs/heads/validation/sfia-v2.6-lot-e2-validation
4a6c7b7c2b409b9e1eed43655432636a9f0a40c8	refs/heads/delivery/interv360-demo-presentation-review
4ae75a9d590d397456ba2e3de3815555a5b57ddf	refs/heads/audit/sfia-v2.6-repository-cartography
4d6e465eec7fef6cf0f4f8af3435636ca1bd456a	refs/heads/delivery/interv360-batch-03-demo-readiness-package
4e3947fe996e10d50bc77ce82f6ef409180c2193	refs/heads/method/sfia-v2.5-cycle-1-mvp
4ee36eea7a5c06953af2f653af9f3a96e178e4f2	refs/heads/architecture/interv360-backend-persistence-decision
4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3	refs/heads/project/sfia-studio-functional-architecture
4fad47f72a7d6cde655d98a64351bb4624ed9ad1	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
5481b748e9b2968b5801149a762e255bb926ca38	refs/heads/delivery/interv360-demo-presentation-feedback
55b2f0c2fdde34b6775d5d8201768eab98200014	refs/heads/cycle/chantiers360-v2-light-architecture
56ce850cdee5fb219e48bc39af01a33a949cc765	refs/heads/method/sfia-v2.6-repository-standard-decisions
5733d25b4b4c7ada042af2776fe1d3154c0b5583	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
58fb275038bde920cf58001973f6809a6e10ffdf	refs/heads/design/sfia-studio-poc-vertical-slice
5afe09516fd94fff466340dc0c1f877712f13f42	refs/heads/delivery/sfia-studio-t-a7-f11-f13-internal-completion
5b5758f701903410f27f7d2bc8cb5fa980293599	refs/heads/method/chantiers360-v2-inc-01-capitalization
5cd2b4e78ad434a5fe40c90ee2107466dd074896	refs/heads/delivery/interv360-workflow-light-extension
5fa9fcb3daba05337b9b496b57cfbc0d1cb1bb8d	refs/heads/cycle/chantiers360-v2-design-figma
5febd0f6ce250181e5fe4918813e05526ea2b3f0	refs/heads/delivery/interv360-demo-feedback-review
6583ddf31da43db0d9fde2b630da806d0a9c9d06	refs/heads/delivery/chantiers360-v2-inc-03
65e5b606c2cddf443b95a890855f5097cb2ec93f	refs/heads/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
662f1c3d36e7755a18f120e848e69e730b6446c6	refs/heads/docs/chantiers360-close-r-qa-04
672d72bb2794bc66e575c2e4d47625b69035caff	refs/heads/method/sfia-v2-figma-fidelity-gate-standard
67f140a19cf4a992dbc0d7b053abfde579a9a68c	refs/heads/docs/sfia-studio-fa6-mitigated-from-main
6849b6f7530310ae669a5bd2e4f4a3f3323ccda6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
69325d09cc9d2936694412efee5d107c9ee62cf4	refs/heads/delivery/interv360-inc-03-pr-preparation
694fedcca20b960815d55cf825315d3b497c93ba	refs/heads/delivery/sfia-v2.6-lot-h
69a33ed0ee72745b693ae82329bfb7a5dcec55ce	refs/heads/delivery/interv360-api-product-validation
69b82461398c32be1dcc60a91cd1cb1036703f1e	refs/heads/architecture/interv360-product-roadmap-next
6cdda92f2354effd93213f971051c22df76c05d2	refs/heads/docs/close-lot-d3-status
6cf7d361d9543a2a8b1fff8f78ea72be75f303f0	refs/heads/archive/sfia-v2.6-lot-0-inventories
6d44882dc76acb628481e55916b6cc04f400d13a	refs/heads/cycle/chantiers360-v2-figma-fidelity-spike
6dded2000063b14ad4500d7b9b65b926578726e1	refs/heads/delivery/interv360-request-model-productization
6f8c72b007661790b85be3f811c4c649e8238b6b	refs/heads/delivery/interv360-connected-ux-productization
6fcc76a2353c4d9322280845100fad2c2bb93ea1	refs/heads/documentation/sfia-discovery-act-03-novabuild-editorial
70a11108f9a778f92f6f98f45117818f09477fe8	refs/heads/architecture/interv360-product-roadmap-after-role-simulation
728231760b2414147c655eacc44afa46fb0f9192	refs/heads/method/sfia-v2-pilot-selection-decision
733cbfffbaaa796240fa68f6c9148f9b62cabeb2	refs/heads/architecture/interv360-role-simulation-review
75aee25a33e45b63b96805e85d72326d1525b056	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
774beed72ce74f72c6f016554cccbfe157f4de1e	refs/heads/project/chantiers360-v2-bootstrap
7751855037cbf5a1e08977364d7ee0ca5f04ef0b	refs/heads/method/sfia-v2.5-project-plan
78859034e769c449901835a1b9431deb56dc0c3c	refs/heads/delivery/sfia-v2.6-lot-e1-link-fixes
7bdabdcc0ea5f760383da190a661250dcd5d2598	refs/heads/project/sfia-studio-ux-ui-reconciliation
7d87331a37e1899bdca32c2fafa2fabb0dc8d514	refs/heads/qualification/sfia-v2.6-lot-f2-f005
7e65429b22338b40438307e3f64fa3b46d6cc233	refs/heads/documentation/sfia-discovery-acts-04-05-editorial
7ef160c6fd8a99267a9e553fd77d13aa7e6f95da	refs/heads/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
7ef233a93b3c76099247937dc4deb524e623ab0a	refs/heads/delivery/interv360-api-demo-hardening
8099a96de369d820c7a82c27d8309ecf2da34217	refs/heads/consolidation/interv360-current-app-audit
80aac9ca7c89a655c8fbebc2034c2bda8e96ab2e	refs/heads/method/sfia-v2-automation-levels
824883c8d4593276fa7129187dba7efcf7b117ef	refs/heads/delivery/chantiers360-r-qa-04-dashboard-real-data
82c78239ec1cbb83a66c714685374a70025fbae2	refs/heads/delivery/interv360-inc-02-pr-preparation
8316f26de1ade4bbf0e698ce03666e977daa87cb	refs/heads/delivery/sfia-studio-poc-increment-b
8763417ab21060ae1ba83083696d704ec4b6507c	refs/heads/method/interv360-final-capitalization
87662a20e9a885e44acf50dee74a7017ab2ac9e9	refs/heads/delivery/interv360-audit-trail
8815f0f1e4576f07c4768decb8990b2bbf6e7a54	refs/heads/docs/close-lot-d1-status
89cb7565507a0a5303de9004feb1e2e9f14d3d39	refs/heads/delivery/sfia-studio-poc-increment-a
8b40a0bd38e1006db67dca5bcaca7b36ada0f3fb	refs/heads/evol/chantiers360-post-mvp-framing
930d5a243e372ddae4c856cfb199e0f4aa260906	refs/heads/migration/sfia-v2.6-lot-d1-naming
934be03e55dd3e237ab42f0ebec597a377ecfbaf	refs/heads/cycle/chantiers360-v2-functional-architecture
94f71f21db99026992ffb638fcf18f23d8e9227c	refs/heads/docs/chantiers360-v2-inc-01-qa-g4
960c90b32b2c1c5701a668b0ebc70fdd847c681b	refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
96bb808bb6f2ea7f09878c970bb89b5978c2abb8	refs/heads/delivery/sfia-studio-poc-increment-c
96bd25ee22643a1ad8e3d8077bbb0ecf218430ad	refs/heads/docs/chantiers360-v2-inc-04-qa-g4
9987df647b0e6af1519ec46168decd9db5493075	refs/heads/docs/chantiers360-v2-inc-05-closure
9babc8c052626e971b8eb4d324d58e16ccf9e307	refs/heads/cycle/chantiers360-v2-mvp-backlog
9c0f6f970da896235dd1f62a8ba76aacae14243b	refs/heads/pr/sfia-studio-v3-native-option-a-foundation
9c125059f3323a7df862b96d32f1940b1cbdefc1	refs/heads/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
9d425dd842e1317ec9213d3ec220d2633f0dff31	refs/heads/decision/chantiers360-v2-architecture-arbitrages
9e0a9c81ceaf54e2147ba1cf87884d2c23399306	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
9e7bcb3deca0b909370e13b91440aa872a460ba0	refs/heads/docs/chantiers360-v2-technical-architecture-post-merge
9f03916243c470587f6958e058fd58909e5bd75a	refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
a23cefcb90bd78ff3ff692cf194c4d0fdc06f229	refs/heads/delivery/interv360-frontend-api-connection
a25cb1c7244e0c163a1a3c647e8cd09005ff2ecb	refs/heads/documentation/sfia-discovery-acts-06-07-editorial
a310850ab136d84ca45f784ccc44df9cbe63ae6c	refs/heads/delivery/interv360-backend-minimal-prototype
a42a85c0c0b3e146e59f82ea753329ed9253f278	refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge
a5497ef16b9d6692b39cca0d4d5d1db61f7cb1d6	refs/heads/method/sfia-v2.5-review-pack-reset
a6eb49d0f003bf4411c40dd799b54047e86f1d8a	refs/heads/delivery/interv360-batch-02-demo-control-scenario
a76c3f80af76cfd997d6d87bb2888bad9a74da78	refs/heads/method/sfia-v2x-method-versioning-standard
a7b22ec9e3ba2daa25c0ae19987d917077188051	refs/heads/notion/sfia-live-export-audit
a830842aa0b60b35ebc845e88550fe1927288eec	refs/heads/delivery/interv360-workflow-requalification
adcda831ff1805e14a464085628c2e4b3d5d4eac	refs/heads/method/chantiers360-v2-mvp-capitalization
af5d9a25f0c832367f21e520c3d2e10998bcfe23	refs/heads/docs/fix-lot-d-plan-status
b11b318ab1b79d72be484d784c1607c4d6a95a81	refs/heads/consolidation/sfia-global-capitalization
b3bd01f4e81fe4b9e30f4a039232f7824ac29c19	refs/heads/delivery/interv360-request-model-finalization
b4b26b260d6a4a3b3f1b3ef4441f126e322c1f05	refs/heads/backlog/sfia-studio-poc-vertical-slice
b502c0069f836a729090bdc187dd98a0c26591ca	refs/heads/qa/sfia-studio-m1-bypass-probe-revert
b6a19335f5116940175f5986492e3693722563bc	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6d9a881a24a2817469e7b818204ec8993d0bceb	refs/heads/prompts/create-templates-context-pack
b763a318fb84e23e482ed23a0bd561c1d9e719e6	refs/heads/cadrage/task-tracker-light
b7a5e827fddb7e80f03a71b3b64ca89271ede0a6	refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
b87413b54858af0740b3d1e37c7e3fee63aca726	refs/heads/qualification/sfia-v2.6-lot-e-global-controls
b8eb9454c94b74fbdfdfdf596a9329c749dfd266	refs/heads/fix/remove-controlled-delivery-broken-link
bbd54bf46d211b467e1b3a82404e700a82270984	refs/heads/docs/chantiers360-v2-design-coverage-post-merge
bc697d8c87a2c660c3e51f2079eb1817e59c89b0	refs/heads/method/sfia-v2-design-coverage-rules
bcc6d379571280142aa5eff6c8baa9615978fc95	refs/heads/delivery/chantiers360-v2-inc-05
bd3608c6220e820cc3fa017422a7564a565a1296	refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
be10f7a92828cfb7761bdcbb591c38c759d9ffa3	refs/heads/delivery/interv360-auth-user-switcher
be9b2f362bf92d5a8b6c4c8254331b5b6cd3a1a6	refs/heads/cycle/chantiers360-v2-ux-ui
bf01af0abbbd2f4c3b10b810f51c4dc1f3419a35	refs/heads/architecture/interv360-product-industrialization-framing
bfa5e2829cfe8ec2f9de85d565cefce6dac04fd4	refs/heads/delivery/interv360-batch-04-demo-presentation-package
c0a4a745045b76e1eb77f7e09a7dd9bd32b3a4a5	refs/heads/docs/sfia-v2x-versioning-post-merge
c0fc4b26af701a97ebec7b75c54247ab775ab4c1	refs/heads/docs/close-lot-d2-status
c24da112ed3d67479d7b3e7715c78da3c26be78e	refs/heads/delivery/sfia-studio-t-a7-consolidated-blocker-reduction
c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9	refs/heads/delivery/sfia-studio-d1-shared-platform-integration
c4cc0b02c18300808d788810d8830dcfdc4979fa	refs/heads/cleanup/sfia-v2.6-lot-j
c4cc4dc011fa5655bb4c8aaf39136c19ff1808f2	refs/heads/delivery/chantiers360-v2-inc-02
c520b819446cbc5cf28cb7327357f5cd60049293	refs/heads/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
c79992b71b859847abbc8f1921f1832c133a272e	refs/heads/notion/pause-notion-publication-track
c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf	refs/heads/delivery/sfia-studio-control-tower-fast-track
ca93e0805b499f9cae6cacd84e37cbb122d89a1c	refs/heads/delivery/sfia-studio-visible-slice-v1-project-core-composition
cae841519ed1d2dd825e6ecb998337cd47b4a1e1	refs/heads/method/sfia-cycle-knowledge-contracts
cbba66bfc4bf3b780f54945a562900fb1ce74603	refs/heads/method/sfia-v2-project-bootstrap-standard
cf64fdd82f9b71960111d22d10c0fb7e0433cb4d	refs/heads/project/sfia-studio-functional-design
d248b9db91f4f10c16885c9f931f4cdd0f966316	refs/heads/design/sfia-studio-ops1-scenario
d306054f7622c48e86ca23ff4386a0a35590c9c6	refs/heads/delivery/interv360-inc-04-list-filtering-local-summary
d30ca7299a13a3ce9955d06e69e9ea976d150551	refs/heads/docs/chantiers360-v2-inc-05-qa-g4
d4401c3da6c08cb7e8716fea5a513df22d467c0e	refs/heads/archive/sfia-v2.6-lot-c-v3-mcp
d54c952c3c4118f37a95800a55a7bfcd99a8af98	refs/heads/cadrage/sfia-v2.6-lot-h
d630c6cd765a51617917a9869ee20814657e586f	refs/heads/migration/sfia-v2.6-lot-a-core
d672317108ca30c3df5a6d2f9b19b33c0c717476	refs/heads/docs/chantiers360-v2-readme-post-closure
d8394b75ec7a28c3e39f074b025d9eef877c900c	refs/heads/delivery/interv360-demo-polish
d8f43775cd3fcd1cf8b633a63bd575caffc1cc03	refs/heads/method/sfia-v2-technical-architecture-decision-standard
d96dfcea5d081fce9e65a3629c1c4ed67c23619a	refs/heads/method/sfia-v2.4-consolidation-operating-efficiency
daf6f7d02bbac09024f6275a793769e66b2b3878	refs/heads/method/sfia-studio-v3-doctrine-consolidation
dc4c971543258317166f79bf1e1f8baaee38f207	refs/heads/consolidation/interv360-application-rex
dc7a24cfed4c3cd3fe584e4948847551e7af4cff	refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
dd2a68c6a1e45fee1e1f397cb644c2c082a3d877	refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction
dfc643097c07a676a8a17059f7aa8041dd74d2f7	refs/heads/release/interv360-mvp-release-readiness
e106d9143def77ac92164299c8977ab96a43517a	refs/heads/delivery/interv360-product-ux-finalization
e1befcb80ed5e3c789a7de9036a8207d6b3e6771	refs/heads/main
e2006897c492fc8d83a185ce818ddb5e3ea47164	refs/heads/audit/sfia-v2.6-lot-0-qualification
e461c6f238de494872fd1cbba6356ea08f0b9db5	refs/heads/docs/chantiers360-v2-inc-02-closure
e65a4d23443b8745639e045eccabe7be304b0809	refs/heads/delivery/chantiers360-v2-inc-01
e79a4408f50500e121c8ecaf009a9ed489e4a450	refs/heads/method/sfia-v2.4-reference-documentation-alignment
e97e083a749d88b8556ffd81edc0160a432df137	refs/heads/capitalization/sfia-studio-p0-status-sync
eb174d0dc2bd3c5a5ec86d9bf4569e05f65a1ea4	refs/heads/docs/chantiers360-v2-inc-04-closure
ec073f646eb75bd5696fb26ee0b4508a99315444	refs/heads/docs/chantiers360-v2-inc-02-qa-g4
ecaf416da0d121176b618cefb1826ce6ac40b76e	refs/heads/method/sfia-v2.4.1-documentation-status-promotion
ed2c0f4c63355867ab322f850189fac4144f064f	refs/heads/delivery/interv360-end-to-end-demo-hardening
ed3304402d5c9d2f014c50741e9dc7fd508cb24a	refs/heads/docs/sfia-studio-pr226-post-merge-sync
f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23	refs/heads/qa/sfia-studio-m1-bypass-probe
f136c33204b4df9c01198d7ff65fb9612d88e265	refs/heads/docs/chantiers360-v2-inc-03-qa-g4
f2a822ea2b2800484a0525b72a0473e55997f14f	refs/heads/method/sfia-3-exploration-closure
f39adb8c23be6740ba57194608ada3a62f0d72ca	refs/heads/delivery/interv360-backend-persistence
f56c768506965f09523b60cd36f21ff75acd3c25	refs/heads/migration/sfia-v2.6-lot-d2-naming
f7f2e18d825add5195c611760788fbd79aaf98aa	refs/heads/conception/sfia-notion-product-space
f89ba5fb6cfca4e3de97667d944569a20266a8aa	refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
f8d25c2dc523020b0443c2b16f375edbf7f5631b	refs/heads/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
f934a3c54260a880b4c8d28130407961c46cdc28	refs/heads/documentation/sfia-discovery-pd-08-qa
fa0eebe00ce3b765a8a486aa660dddfab40123a0	refs/heads/docs/sfia-studio-m1-capitalization-rex
fe9309006aa05493418be9ac6cc38d38ad1b1c39	refs/heads/docs/chantiers360-v2-post-spike-alignment

```

## V. Worktrees après source cleanup
```
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca
branch refs/heads/qa/sfia-studio-m1-bypass-probe-revert

worktree /Users/morris/Projects/sfia-workspace-m1-capitalization
HEAD fa0eebe00ce3b765a8a486aa660dddfab40123a0
branch refs/heads/docs/sfia-studio-m1-capitalization-rex

worktree /Users/morris/Projects/sfia-workspace-option-a-after-t-a6
HEAD aef7fd6d5a678857cf36e490f1550866d47c8887
branch refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance
HEAD 2f9560534e285c5b8105f81dca39c5252667860c
branch refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
HEAD a42a85c0c0b3e146e59f82ea753329ed9253f278
branch refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge

worktree /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
HEAD 9f03916243c470587f6958e058fd58909e5bd75a
branch refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-t-a6-post-merge
HEAD 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
branch refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
HEAD 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
HEAD 960c90b32b2c1c5701a668b0ebc70fdd847c681b
branch refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status

worktree /Users/morris/Projects/sfia-workspace-t-a7-framing
HEAD b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/main

worktree /Users/morris/Projects/sfia-workspace-t-a7-next-decision
HEAD 33ea3e87facc8c99c9c5619d6d2424030d3918a2
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step

worktree /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
HEAD b6a19335f5116940175f5986492e3693722563bc
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
HEAD f89ba5fb6cfca4e3de97667d944569a20266a8aa
branch refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
HEAD 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope

worktree /Users/morris/Projects/sfia-workspace-template-handoff-fix
HEAD 134be301792efbf6f9739d13f0572062ef976da7
detached

worktree /Users/morris/Projects/sfia-workspace-ux-reconciliation
HEAD 7bdabdcc0ea5f760383da190a661250dcd5d2598
branch refs/heads/project/sfia-studio-ux-ui-reconciliation

worktree /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
HEAD daf6f7d02bbac09024f6275a793769e66b2b3878
branch refs/heads/method/sfia-studio-v3-doctrine-consolidation

worktree /Users/morris/Projects/sfia-workspace-v3-native-audit
HEAD 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
branch refs/heads/audit/sfia-studio-v3-native-dependencies

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
HEAD 577ff0c22491288d2293fd9730ed26f0af4095b0
branch refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-design
HEAD e22bc243c8854df4e9422fafe46e92135fe242e9
branch refs/heads/design/sfia-studio-v3-native-option-a-functional

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
HEAD 52891e5c5a9b1254143e422111ea4955ca3a0940
branch refs/heads/modeled/sfia-studio-v3-native-option-a

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
HEAD 0b696ed970823aa75d013336e44e72de08f2ac57
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
HEAD 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
branch refs/heads/design/sfia-studio-v3-native-option-a-ux-ui

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0

worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
HEAD 24987074f4aa728cff616efa927ca016bc124831
branch refs/heads/sfia/review-handoff


```

## W. Comparaison avant/après
```json
{
  "local_deleted": [
    "refs/heads/capitalization/sfia-studio-v3-1-d1-rex"
  ],
  "local_added": [],
  "local_changed": {
    "refs/heads/main": {
      "before": "b553f0aaec120e03b8cfca27f3f0e5fc03f1480e",
      "after": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771"
    }
  },
  "remote_deleted": [
    "refs/heads/capitalization/sfia-studio-v3-1-d1-rex"
  ],
  "remote_added": [],
  "remote_changed": [],
  "worktree_count_before": 77,
  "worktree_count_after": 77,
  "primary_before": {
    "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge",
    "head": "d77c775f6114eddd04af330cc943a869a5c4f6a2",
    "branch": "refs/heads/capitalization/sfia-studio-v3-1-d1-rex",
    "locked": false,
    "prunable": false,
    "detached": false
  },
  "primary_after": {
    "path": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge",
    "head": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771",
    "branch": "refs/heads/main",
    "locked": false,
    "prunable": false,
    "detached": false
  },
  "other_worktrees_identical": true,
  "handoff_unchanged_before_publish": true,
  "handoff": {
    "path": "/Users/morris/Projects/sfia-workspace/sfia-review-handoff",
    "head": "24987074f4aa728cff616efa927ca016bc124831",
    "branch": "refs/heads/sfia/review-handoff",
    "locked": false,
    "prunable": false,
    "detached": false
  }
}
```

## X. Vérification des preuves `.tmp`
```
# PR #297 Cleanup — TMP Evidence Verification

## Verdict
TMP-SFIA-REVIEW EVIDENCE PRESERVED — ALL PRE-EXISTING FILES VERIFIED — PREVIOUS CHATGPT REVIEW PACK ARCHIVED BYTE-FOR-BYTE

## Counts
- initial_manifest_files: 261
- verified_ok: 261
- missing: 0
- diverged: 0

## chatgpt-review.md handling
- initial_sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- initial_size: 685834
- archive_path: .tmp-sfia-review/pr-297-post-merge-validation-chatgpt-review-preserved.md
- archive_sha256: 7416977638dfbbdad4eb6e4f94a0ecb209ffd75899ea2420ece7ac67f6e6008d
- archive_cmp: identical to initial chatgpt-review.md content
- git_blob_expected: e7f0e566ec01873786a987003e6440579eb2b450

## Rule
All pre-existing files except chatgpt-review.md retained path/size/sha256.
chatgpt-review.md initial content preserved via archive (may be replaced later for new Full pack).

```

## Y. Findings finaux
```
# PR #297 Cleanup Findings

## REMOTE-F-01
- statut: CLOSED

## READY-F-02
- statut: CLOSED

## POSTMERGE-CI-01
- statut: CLOSED / PASS
- preuve: run 30612872178 completed/success on e1befcb8…

## POSTMERGE-F-01
- statut: CLOSED
- preuve:
  - worktree principal préservé (`/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`)
  - preuves `.tmp-sfia-review/**` préservées (manifeste 261 fichiers vérifiés)
  - worktree basculé sur `main` @ e1befcb8…
  - source locale supprimée avec `git branch -d` uniquement
  - source distante supprimée sans force

## POSTMERGE-F-02
- statut: NOTED — OUT OF SCOPE
- autres worktrees inchangés (77/77)
- aucun cleanup global

## INHERITED-R-01
- statut: ACCEPTED — STILL TRACEABLE — NOT LIFTED
- non bloquant
- aucune promotion méthode
- D2 non autorisé

## CLEANUP-OBS-01 — HANDOFF TIP AHEAD (NOT DIVERGED)
- observation: tip handoff distant avancé à 24987074… (3 commits EventOps) au-delà du tip source 0fe120a… ; tip attendu reste ancêtre ; blob source e7f0e56… toujours vérifiable ; pack local archivé identique
- sévérité: informative
- bloquant cleanup: NON
- action: publisher FF puis publication du rapport cleanup
- statut: NOTED

```

## Z. État Git avant handoff
```
current=main
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
local_source=ABSENT
remote_tracking=ls_remote_cap=wt_count=77
handoff_tip=24987074f4aa728cff616efa927ca016bc124831
=== non-tmp status ===
(none)
=== staged ===

```

## AA. Publication handoff
(à compléter après publish)

## AB. État Git final
(à compléter après publish)

## AC. Confirmations
- PR mergée / CI PASS: OUI
- worktree principal préservé / non retiré: OUI / NON (retiré)
- autres worktrees retirés: NON
- preuves `.tmp` préservées / pack archivé: OUI
- main FF only / main=origin/main: OUI
- source locale `-d` / `-D` utilisé: OUI / NON
- source distante sans force: OUI
- autre branche supprimée / force / git clean / projet modifié: NON
- méthode / baseline / réserve levée / D2 / D3 / UI / CreateCycle: NON

## AD. Verdict
V3.1-D1 CAPITALIZATION PR #297 SOURCE BRANCH CLEANUP COMPLETE —
PRIMARY WORKTREE PRESERVED AND SWITCHED TO MAIN —
LOCAL MAIN FAST-FORWARDED ONLY TO e1befcb80ed5e3c789a7de9036a8207d6b3e6771 —
LOCAL SOURCE BRANCH DELETED WITH git branch -d —
REMOTE SOURCE BRANCH DELETED WITHOUT FORCE —
ALL 77 WORKTREES PRESERVED —
SFIA REVIEW HANDOFF WORKTREE AND BRANCH PRESERVED —
ALL PRE-EXISTING .TMP-SFIA-REVIEW EVIDENCE PRESERVED —
POSTMERGE-F-01 CLOSED —
POSTMERGE-F-02 REMAINS OUT OF SCOPE —
ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED

Statut: V3.1-D1 CAPITALIZATION TECHNICAL CYCLE CLOSED — MAIN ALIGNED — SOURCE BRANCH CLEANUP COMPLETE — PRIMARY WORKTREE PRESERVED — NO AUTOMATIC NEXT CYCLE — D2 NOT OPENED

--- END CLEANUP REPORT ---

## Content coverage
- gate Morris complete: yes
- CKC complete: yes
- handoff source complete: yes
- PR / merge / CI complete: yes
- inherited reserve complete: yes
- initial Git Truth complete: yes
- initial tmp evidence manifest complete: yes
- previous review pack archive complete: yes
- local branches before complete: yes
- remote heads before complete: yes
- worktrees before complete: yes
- switch proof complete: yes
- main fast-forward proof complete: yes
- local branch deletion proof complete: yes
- remote branch deletion proof complete: yes
- no force proof complete: yes
- local branches after complete: yes
- remote heads after complete: yes
- worktrees after complete: yes
- before/after comparison complete: yes
- all tmp evidence preservation complete: yes
- primary worktree preservation complete: yes
- other worktree preservation complete: yes
- findings complete: yes
- final Git state complete: yes (pre-handoff; post-handoff appended after publish)
- temporary report full content: yes
- synthesis only: no
- review pack verdict: complete

## Gate suivant
Aucun gate d'exécution automatique. Tout D2/D3/méthode/nouveau lot exige un nouveau GO Morris.

## Verdict
V3.1-D1 CAPITALIZATION PR #297 SOURCE BRANCH CLEANUP COMPLETE —
PRIMARY WORKTREE PRESERVED AND SWITCHED TO MAIN —
LOCAL MAIN FAST-FORWARDED ONLY TO e1befcb80ed5e3c789a7de9036a8207d6b3e6771 —
LOCAL SOURCE BRANCH DELETED WITH git branch -d —
REMOTE SOURCE BRANCH DELETED WITHOUT FORCE —
ALL 77 WORKTREES PRESERVED —
SFIA REVIEW HANDOFF WORKTREE AND BRANCH PRESERVED —
ALL PRE-EXISTING .TMP-SFIA-REVIEW EVIDENCE PRESERVED —
POSTMERGE-F-01 CLOSED —
POSTMERGE-F-02 REMAINS OUT OF SCOPE —
ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED

Statut: V3.1-D1 CAPITALIZATION TECHNICAL CYCLE CLOSED — MAIN ALIGNED — SOURCE BRANCH CLEANUP COMPLETE — PRIMARY WORKTREE PRESERVED — NO AUTOMATIC NEXT CYCLE — D2 NOT OPENED
