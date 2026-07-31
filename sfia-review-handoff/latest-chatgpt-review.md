# SFIA Review Pack — Full
# PR #297 V3.1-D1 Capitalization — Post-merge validation

## Meta
- Date/heure/fuseau: 2026-07-31 09:44:06 CEST (+0200)
- Niveau: Full — obligatoire
- Repository: mcleland147/sfia-workspace
- Workspace: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
- PR: https://github.com/mcleland147/sfia-workspace/pull/297
- MERGE_SHA: e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## Gate Morris (complet)
GO POST-MERGE VALIDATION PR #297 SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
VERIFY MERGE COMMIT PARENTS ORIGIN MAIN DOCUMENT HASH POST-MERGE CI RESERVE BODY COMMENTS REVIEWS AND LOCAL WORKTREES —
CLASSIFY CLEANUP READINESS —
NO BRANCH DELETE —
NO WORKTREE REMOVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

Date/heure/fuseau du GO : 2026-07-31 09:37 CEST (+0200)

## Cycle / profil / typologie / CKC
- Cycle: 14 — Post-merge
- Profil: Standard
- Typologie: DOC
- CKC method-candidate Léger/P2 ; fallback synthetic map + §4.14 ; executionAuthority=false
- Preuve centrale: origin/main, merge commit, CI post-merge, document intégré, inventaire worktrees
- Risque principal: conclure cleanup-ready malgré worktree sale / untracked / divergence
- Limite: aucune suppression ou mutation

## Handoff source
- tip 3e61efc188f9b25e9a96982d07d0313656d2a2e8 / blob ac5895b43db85e9eb2a8f588616d07773c269f42
- POSTMERGE-CI-01 source PENDING → repo-informed PASS

## Git Truth initial
```
=== PWD/TOP/REMOTE ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
=== FETCH ===
=== BRANCH/HEADS ===
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
HEAD^=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
origin/cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
L/R origin/cap...HEAD=0	0
L/R main...origin/main=0	2
L/R origin/cap...origin/main=0	1
=== STATUS ===
--- untracked non-tmp count ---
       0
=== STAGED ===
=== LOG ===
d77c775 (HEAD -> capitalization/sfia-studio-v3-1-d1-rex, origin/capitalization/sfia-studio-v3-1-d1-rex) docs(sfia-studio): add V3.1-D1 capitalization REX
b553f0a (main) Merge pull request #296 from mcleland147/delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime
e2e8984 docs(sfia-studio): document V3.1-D1 catalog design and QA evidence
9123252 feat(sfia-studio): add V3.1-D1 cycle type catalog contract
3e8a437 (framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage) Merge pull request #295 from mcleland147/delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui
e1db1f5 feat(sfia-studio): add V2-A3 project workspace UI over process-local runtime
d0e498e Merge pull request #294 from mcleland147/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui
55a28d3 (delivery/sfia-studio-visible-slice-v2-a2-create-project-ui) fix(sfia-studio): resolve V2-A2 readiness findings
=== GH AUTH ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## PR post-merge complète
```json
{
  "additions": 436,
  "baseRefName": "main",
  "baseRefOid": "b553f0aaec120e03b8cfca27f3f0e5fc03f1480e",
  "body": "# docs(sfia-studio): add V3.1-D1 capitalization REX\n\n## 1. Summary\n\nThis PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.\n\nIt captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup \u2014 without promoting method assets and without opening D2/D3.\n\n## 2. Context\n\n- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).\n- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.\n- This publication is documentation-only and remains subject to a distinct Morris merge GO.\n\n## 3. Scope\n\n**In scope (exactly one file):**\n\n- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`\n\n**Out of scope:**\n\n- framing README / backlog 08 / documents 12\u201314\n- D1 reports 01\u201304\n- code / tests / config / dependencies\n- method / templates / CKC\n- D2 resolver / QualifyCycle bridge\n- D3 / UI / Figma / CreateCycle / persistence\n\n## 4. Capitalization coverage\n\nDocument sections A\u2013T cover:\n\n- chronology (framing \u2192 cleanup \u2192 local capitalization)\n- Morris decisions consumed\n- factual observations\n- lessons and candidate reusable practices\n- candidate recommendations (not applied)\n- future decision pack D-REX-01\u202606 (NOT DECIDED)\n- reserves register\n- anti-claims and next-gate candidate\n\n## 5. Morris decisions\n\nReferenced as already adopted/executed (not reinvented):\n\n- D-V3-01\u202608 and D-V3.1-CAT-01\u202608\n- QA-G3 PASS\n- publication / ready-for-review / merge of PR #296\n- post-merge / worktree / archive / cleanup GOs\n- capitalization GO (local document only)\n\nNo new Morris decision is created by this PR.\n\n## 6. Evidence and metrics\n\n- Catalog: 15 entries \u00b7 4 detailed / 11 synthetic CKC mappings\n- QA reinforced before fix: 34 PASS / 12 FAIL\n- After corrective + revalidation: 46/46 \u00b7 94/94 \u00b7 827/827 \u00b7 typecheck/lint/build PASS\n- PR #296: 13 files \u00b7 2 source commits \u00b7 +3667 / \u2212155\n- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`\n- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`\n- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`\n- CI pre-merge: run `30577786752` PASS\n- CI post-merge: run `30585808183` PASS\n- Archive SHA-256 proofs (event only; not Git truth):\n  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`\n  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`\n\n## 7. Epistemic distinctions\n\nThe document keeps strict prefixes/status labels:\n\n- `Observation \u2014`\n- `Enseignement \u2014`\n- `Pratique candidate r\u00e9utilisable \u2014`\n- `Recommandation candidate \u2014`\n- Morris decisions: adopted / executed\n- D-REX-01\u202606: `NOT DECIDED \u2014 MORRIS DECISION REQUIRED`\n\nCandidate practices are **not** method baseline.\nRecommendations are **not** applied in this PR.\n\n## 8. Risks and reserves\n\n**Inherited minor reserve (not a new defect of document 05):**\n\n`ACCEPTED MINOR DOCUMENTATION RESERVE \u2014 STILL TRACEABLE \u2014 NOT LIFTED`\n\nFraming README condensation remains accepted and traceable via docs 12/13/14, reports 01\u201305, PR #296, and handoffs. Not lifted. Not D2.\n\n**Other risks:**\n\n- misreading capitalization as method promotion \u2192 mitigated by anti-claims and boundaries\n- misreading D-REX-06 as D2 authorization \u2192 explicitly NOT DECIDED / not automatic\n\n## 9. Boundaries\n\nThis PR does **not** claim:\n\n- D2/D3 open\n- resolver / QualifyCycle / UI / CreateCycle / persistence implemented\n- method baseline promotion\n- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED\n- zero bugs\n\n## 10. Validation\n\n- Local Git Truth on capitalization branch @ `b553f0aa\u2026` (0/0 vs main)\n- Document structure A\u2013T complete\n- Metrics/SHAs cross-checked against PR #296, CI runs, and D1 reports\n- Epistemic distinctions verified\n- No project mutation during PR readiness\n- Full Studio test suite not re-run (documentation-only; metrics already evidenced)\n\n## 11. Review guidance\n\nReviewers should verify:\n\n1. single-file documentation scope\n2. no method/code/test changes\n3. observations \u2260 recommendations \u2260 Morris decisions\n4. D-REX remain NOT DECIDED\n5. README reserve remains accepted and not lifted\n6. no implicit D2/D3 authorization\n\n## 12. Checklist\n\n- [x] Capitalization cycle complete\n- [x] Observations and recommendations separated\n- [x] Morris decisions identifiable\n- [x] Future decision pack remains NOT DECIDED\n- [x] Accepted README reserve remains traceable and not lifted\n- [x] No code, tests, dependencies or method changes\n- [x] No D2/D3, UI or CreateCycle\n- [x] Commit and push authorized by Morris\n- [x] Draft PR opened\n- [x] Remote CI completed\n- [x] Morris merge GO granted\n\n\n",
  "changedFiles": 1,
  "commits": [
    {
      "authoredDate": "2026-07-31T05:47:50Z",
      "authors": [
        {
          "email": "morris@macbook-air1.home",
          "id": "",
          "login": "",
          "name": "Morris Cleland"
        },
        {
          "email": "cursoragent@cursor.com",
          "id": "U_kgDOC972lw",
          "login": "cursoragent",
          "name": "Cursor"
        }
      ],
      "committedDate": "2026-07-31T05:47:50Z",
      "messageBody": "Co-authored-by: Cursor <cursoragent@cursor.com>",
      "messageHeadline": "docs(sfia-studio): add V3.1-D1 capitalization REX",
      "oid": "d77c775f6114eddd04af330cc943a869a5c4f6a2"
    }
  ],
  "deletions": 0,
  "files": [
    {
      "path": "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md",
      "additions": 436,
      "deletions": 0,
      "changeType": "ADDED"
    }
  ],
  "headRefName": "capitalization/sfia-studio-v3-1-d1-rex",
  "headRefOid": "d77c775f6114eddd04af330cc943a869a5c4f6a2",
  "isDraft": false,
  "mergeCommit": {
    "oid": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771"
  },
  "mergedAt": "2026-07-31T07:27:13Z",
  "number": 297,
  "reviewDecision": "",
  "state": "MERGED",
  "statusCheckRollup": [
    {
      "__typename": "CheckRun",
      "completedAt": "2026-07-31T05:48:12Z",
      "conclusion": "SUCCESS",
      "detailsUrl": "https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083728085",
      "name": "Detect SFIA Studio changes",
      "startedAt": "2026-07-31T05:48:01Z",
      "status": "COMPLETED",
      "workflowName": "SFIA Studio CI"
    },
    {
      "__typename": "CheckRun",
      "completedAt": "2026-07-31T05:49:57Z",
      "conclusion": "SUCCESS",
      "detailsUrl": "https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083759279",
      "name": "Build and validate SFIA Studio",
      "startedAt": "2026-07-31T05:48:14Z",
      "status": "COMPLETED",
      "workflowName": "SFIA Studio CI"
    },
    {
      "__typename": "CheckRun",
      "completedAt": "2026-07-31T05:50:02Z",
      "conclusion": "SUCCESS",
      "detailsUrl": "https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083988720",
      "name": "SFIA Studio Required Gate",
      "startedAt": "2026-07-31T05:50:00Z",
      "status": "COMPLETED",
      "workflowName": "SFIA Studio CI"
    }
  ],
  "title": "docs(sfia-studio): add V3.1-D1 capitalization REX",
  "url": "https://github.com/mcleland147/sfia-workspace/pull/297"
}
```

## Body final complet
```markdown
# docs(sfia-studio): add V3.1-D1 capitalization REX

## 1. Summary

This PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.

It captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup — without promoting method assets and without opening D2/D3.

## 2. Context

- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).
- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.
- This publication is documentation-only and remains subject to a distinct Morris merge GO.

## 3. Scope

**In scope (exactly one file):**

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`

**Out of scope:**

- framing README / backlog 08 / documents 12–14
- D1 reports 01–04
- code / tests / config / dependencies
- method / templates / CKC
- D2 resolver / QualifyCycle bridge
- D3 / UI / Figma / CreateCycle / persistence

## 4. Capitalization coverage

Document sections A–T cover:

- chronology (framing → cleanup → local capitalization)
- Morris decisions consumed
- factual observations
- lessons and candidate reusable practices
- candidate recommendations (not applied)
- future decision pack D-REX-01…06 (NOT DECIDED)
- reserves register
- anti-claims and next-gate candidate

## 5. Morris decisions

Referenced as already adopted/executed (not reinvented):

- D-V3-01…08 and D-V3.1-CAT-01…08
- QA-G3 PASS
- publication / ready-for-review / merge of PR #296
- post-merge / worktree / archive / cleanup GOs
- capitalization GO (local document only)

No new Morris decision is created by this PR.

## 6. Evidence and metrics

- Catalog: 15 entries · 4 detailed / 11 synthetic CKC mappings
- QA reinforced before fix: 34 PASS / 12 FAIL
- After corrective + revalidation: 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS
- PR #296: 13 files · 2 source commits · +3667 / −155
- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`
- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`
- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`
- CI pre-merge: run `30577786752` PASS
- CI post-merge: run `30585808183` PASS
- Archive SHA-256 proofs (event only; not Git truth):
  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`
  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`

## 7. Epistemic distinctions

The document keeps strict prefixes/status labels:

- `Observation —`
- `Enseignement —`
- `Pratique candidate réutilisable —`
- `Recommandation candidate —`
- Morris decisions: adopted / executed
- D-REX-01…06: `NOT DECIDED — MORRIS DECISION REQUIRED`

Candidate practices are **not** method baseline.
Recommendations are **not** applied in this PR.

## 8. Risks and reserves

**Inherited minor reserve (not a new defect of document 05):**

`ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED`

Framing README condensation remains accepted and traceable via docs 12/13/14, reports 01–05, PR #296, and handoffs. Not lifted. Not D2.

**Other risks:**

- misreading capitalization as method promotion → mitigated by anti-claims and boundaries
- misreading D-REX-06 as D2 authorization → explicitly NOT DECIDED / not automatic

## 9. Boundaries

This PR does **not** claim:

- D2/D3 open
- resolver / QualifyCycle / UI / CreateCycle / persistence implemented
- method baseline promotion
- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED
- zero bugs

## 10. Validation

- Local Git Truth on capitalization branch @ `b553f0aa…` (0/0 vs main)
- Document structure A–T complete
- Metrics/SHAs cross-checked against PR #296, CI runs, and D1 reports
- Epistemic distinctions verified
- No project mutation during PR readiness
- Full Studio test suite not re-run (documentation-only; metrics already evidenced)

## 11. Review guidance

Reviewers should verify:

1. single-file documentation scope
2. no method/code/test changes
3. observations ≠ recommendations ≠ Morris decisions
4. D-REX remain NOT DECIDED
5. README reserve remains accepted and not lifted
6. no implicit D2/D3 authorization

## 12. Checklist

- [x] Capitalization cycle complete
- [x] Observations and recommendations separated
- [x] Morris decisions identifiable
- [x] Future decision pack remains NOT DECIDED
- [x] Accepted README reserve remains traceable and not lifted
- [x] No code, tests, dependencies or method changes
- [x] No D2/D3, UI or CreateCycle
- [x] Commit and push authorized by Morris
- [x] Draft PR opened
- [x] Remote CI completed
- [x] Morris merge GO granted



```

## Merge commit et parents
```
=== MERGE SHOW ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
b553f0aaec120e03b8cfca27f3f0e5fc03f1480e d77c775f6114eddd04af330cc943a869a5c4f6a2
Merge pull request #297 from mcleland147/capitalization/sfia-studio-v3-1-d1-rex
mcleland147
Fri Jul 31 09:27:12 2026 +0200
=== PARENTS ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771 b553f0aaec120e03b8cfca27f3f0e5fc03f1480e d77c775f6114eddd04af330cc943a869a5c4f6a2
=== DIFF-TREE CC ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
=== DIFF NAME-STATUS BASE..MERGE ===
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md
=== DIFF STAT ===
 .../05-capitalization-rex.md                       | 436 +++++++++++++++++++++
 1 file changed, 436 insertions(+)
ancestor base: YES
ancestor src: YES
=== TREES ===
merge_tree=ccd9ad20779bc1f41534ee98f3e24461b9620a72
src_tree=ccd9ad20779bc1f41534ee98f3e24461b9620a72
=== DIFF SRC..MERGE ===
(empty expected)

```

## Comparaison des arbres
merge^{tree} == source^{tree} == ccd9ad20779bc1f41534ee98f3e24461b9620a72 ; diff source..merge vide

## origin/main
e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## Commit source
d77c775f6114eddd04af330cc943a869a5c4f6a2 parent b553f0aaec120e03b8cfca27f3f0e5fc03f1480e — docs(sfia-studio): add V3.1-D1 capitalization REX

## Document 05 complet
```markdown
# V3.1-D1 — Capitalisation / REX

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-31 06:52:41 CEST (+0200) |
| **Cycle projet** | 15 — Capitalisation / REX |
| **Profil SFIA** | Capitalization |
| **Profondeur** | Standard |
| **Typologie** | CAPA |
| **Gate Morris consommé** | `GO CAPITALIZATION / REX SFIA STUDIO V3.1-D1 — CAPTURE CATALOG DELIVERY QA PR MERGE POST-MERGE ARCHIVE AND CLEANUP LESSONS — KEEP OBSERVATIONS RECOMMENDATIONS AND MORRIS DECISIONS DISTINCT — NO METHOD PROMOTION WITHOUT MORRIS GO — NO D2 — NO UI — NO CREATECYCLE` (2026-07-31 06:43 CEST) |
| **Branche** | `capitalization/sfia-studio-v3-1-d1-rex` |
| **Base** | `main` @ `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e` |
| **CKC** | fallback carte synthétique + méthode §4.15 · method-candidate · consommation obligatoire · niveau P2 / léger · `executionAuthority=false` |
| **Template capitalisation** | `prompts/templates/08-capitalize-method-asset.md` lu — **non applicable** ici (promotion d’actif méthode) ; structure alignée sur §4.15 (faits ≠ reco ≠ décision) |
| **Statut du document** | `CAPITALIZATION COMPLETE LOCALLY — DOCUMENT 05 READY FOR DOCUMENTARY PR READINESS — NO PUBLICATION` |
| **Publication projet** | **non autorisée** par ce gate (commit / push / PR soumis à un GO distinct) |
| **Méthode / baseline** | **aucune promotion** |
| **D2 / D3 / UI / CreateCycle** | **non autorisés** |

## B. Objet et périmètre

### Objectif

Capturer les apprentissages réutilisables du lot **V3.1-D1 Cycle Type Catalog Runtime Contract**, depuis le cadrage jusqu’au cleanup post-merge, en séparant strictement :

- observations factuelles ;
- enseignements ;
- recommandations candidates ;
- décisions Morris déjà validées ;
- options futures non décidées.

### Phases couvertes

Cadrage V3 → conception V3.1 → architecture catalogue (CAT) → Delivery D1 → QA Critical FAIL → Delivery corrective → QA revalidation PASS → QA-G3 Morris → PR readiness → publication → remote review → ready-for-review → merge → CI post-merge → blocages worktree → archivage contrôlé → cleanup final → handoffs successifs.

### Phases explicitement exclues

- Ouverture ou conception de **V3.1-D2** (resolver / QualifyCycle bridge).
- Ouverture ou conception de **V3.1-D3** (UI / Figma / vertical-slice UX).
- CreateCycle, persistance, LPS, epistemic UI.
- Promotion method-candidate → baseline.
- Publication Git du présent document (GO distinct requis).
- Recopie des archives locales non versionnées (seuls événement et hashes SHA-256 cités depuis le handoff final).

## C. Résumé exécutif

V3.1-D1 a livré et intégré sur `main` le **contrat runtime** des quinze types de cycle SFIA Studio :

- quinze identifiants stables `cyc:*` (CAT-I1), dont `cyc:capitalization` conservé ;
- quatre mappings CKC **detailed** avec fallback synthétique ;
- onze mappings CKC **synthetic** ;
- métadonnées fail-closed (`executionAuthority=false`, doctrineStatus, unavailableBehavior) ;
- validateur multi-issues sans throw ;
- suite de tests renforcée (46) + suite `oa/cycle` (94) + suite Studio (827) après correctif ;
- package de **13 fichiers** intégré via PR **#296** (merge `b553f0aa…`).

Le lot a traversé une QA Critical légitimement FAIL, un correctif **limité au validateur**, une revalidation complète, une publication GitHub gouvernée, et un post-merge rendu difficile par des contraintes de worktrees locaux — résolues par archivage byte-for-byte puis cleanup sans force.

**Valeur :** un contrat produit exécutable et testé, sans ouvrir D2/D3, sans promouvoir la méthode.

## D. Chronologie vérifiable

| # | Étape | Statut | Source principale | Décision Morris | Observation / leçon principale |
|---|-------|--------|-------------------|-----------------|--------------------------------|
| 1 | Cadrage V3 (doc 12) | Adopté | `…/framing/12-v3-cycle-recommendation-cadrage.md` | D-V3-01…08 | Intention produit et gates avant Delivery |
| 2 | Conception V3.1 (doc 13) | Adopté | `…/framing/13-v3-1-profile-qualification-functional-design.md` | Suite D-V3 | Qualification profil / routing avant catalogue |
| 3 | Architecture catalogue (doc 14) | Adopté | `…/framing/14-….md` | D-V3.1-CAT-01…08 | IDs + CKC obligatoire + slicing D1→D2→D3 |
| 4 | Delivery D1 initiale | Implémenté | `cycleTypeCatalog.ts` · README D1 | GO Delivery | Contrat + tests positifs ; validateur incomplet |
| 5 | QA Critical | **FAIL** | `01-qa-validation-report.md` | GO QA | 34 PASS / 12 FAIL ; R-QA-01…09 ouvertes |
| 6 | Delivery corrective | Corrigé | `02-corrective-delivery-report.md` | GO corrective | Correctif **validateur seul** ; données/API stables |
| 7 | QA revalidation | **PASS** | `03-qa-revalidation-report.md` | — | 46/46 · 94/94 · 827/827 ; R-QA CLOSED |
| 8 | QA-G3 Morris | **PASS** | handoff / README D1 | GO QA-G3 ACCEPT | Acceptation humaine des preuves |
| 9 | PR readiness | READY FOR PR | `04-pr-readiness-report.md` | GO PR readiness | Package 13 fichiers ; réserve README tracée |
| 10 | Publication | Publié | commits `9123252…` · `e2e8984…` · PR #296 | GO commit/push/PR | Deux commits code/docs séparés |
| 11 | Remote review | PASS w/ reserves | handoff cycle 13 | — | CI pré-merge verte ; réserve mineure OK |
| 12 | Ready-for-review | Non-draft | PR #296 | GO ready | Body checkbox CI ; wording draft ensuite stale |
| 13 | Merge | MERGED | merge `b553f0aa…` | GO merge | Parents `3e8a437…` + `e2e8984…` |
| 14 | CI post-merge | PASS | run `30585808183` | — | Distinct de CI PR `30577786752` |
| 15 | Post-merge #1 | **BLOCKED** | handoff | GO post-merge | `main` verrouillée par worktree externe stale |
| 16 | Post-merge #2 | **BLOCKED** | handoff | GO resolve WT | Deux fichiers untracked bloquent remove |
| 17 | Archivage | Vérifié | handoff final | GO archive | `cp -p` + SHA-256 + `cmp` puis `rm` exact |
| 18 | Cleanup final | COMPLETE | handoff final | (même GO) | WT remove sans force ; `branch -d` ; remote delete |
| 19 | Capitalisation | LOCAL ONLY | **ce document** | GO capitalization | Aucune publication projet |

## E. Décisions Morris consommées

| Décision | Source | Conséquence D1 | Statut | N’autorise pas |
|----------|--------|----------------|--------|----------------|
| D-V3-01…08 | doc `12` | Cadre produit / gates amont | Adoptées | Delivery D2/D3, CreateCycle |
| D-V3.1-CAT-01 = CAT-S1 | doc `14` | Catalogue = projection des 15 cycles | Adoptée | Runtime hors contrat |
| D-V3.1-CAT-02 = CAT-I1 | doc `14` | 15 IDs `cyc:*` ; `cyc:capitalization` inchangé | Adoptée | Renommage ID sans gate |
| D-V3.1-CAT-03 | doc `14` | Noyau minimal + CKC core | Adoptée | Sur-modélisation TS |
| D-V3.1-CAT-04 | doc `14` | Alias contrôlés | Adoptée | Alias libres / recyclage |
| D-V3.1-CAT-05 | doc `14` | Changements structurants → Morris | Adoptée | Mutation structurante implicite |
| D-V3.1-CAT-06 | doc `14` | ID neutre / labels localisés | Adoptée | ID localisé comme clé |
| D-V3.1-CAT-07 | doc `14` | CKC obligatoire dans le produit candidate | Adoptée | Baseline méthode globale ; `executionAuthority=true` |
| D-V3.1-CAT-08 | doc `14` | Slicing D1 puis D2 puis D3 | Adoptée | Fusion D1/D2/D3 |
| QA-G3 = PASS | GO QA-G3 | R-QA-01…09 CLOSED ; PR readiness | Accepté | Merge automatique ; D2 |
| Publication PR #296 | GO commit/push/PR | Draft PR ouverte | Exécuté | Merge sans GO merge |
| Ready-for-review | GO ready | `isDraft=false` | Exécuté | Merge |
| Merge PR #296 | GO merge | `b553f0aa…` sur main | Exécuté | Cleanup forcé ; D2 |
| Archivage untracked | GO archive | Deux fichiers préservés hors repo | Exécuté | `git clean` ; force |
| Cleanup WT + branches | GO archive/cleanup | WT retiré ; Delivery locale/distante absentes | Exécuté | `-D` ; force push ; prune forcé |
| Réserve README | PR readiness + reviews | Condensation acceptée | **ACCEPTED — NOT LIFTED** | Assimilation à D2 ; levée implicite |

Aucune nouvelle décision n’est créée par ce document.

## F. Observations factuelles

Observation — Les contrats amont (docs 12/13/14) étaient nécessaires pour borner une Delivery D1 sans dérive vers resolver ou UI.

Observation — Les tests Delivery initiaux couvraient insuffisamment les invariants **négatifs** du validateur (bornes, doctrine, alias croisés, version).

Observation — La QA indépendante a transformé une suite apparemment verte en **FAIL légitime** (34 PASS / 12 FAIL après renforcement).

Observation — Le correctif a pu rester limité à `validateCycleTypeCatalog` ; données catalogue, API publique et tests QA sont restés stables.

Observation — La revalidation a fermé R-QA-01 à R-QA-09 sans réécriture des oracles.

Observation — La publication en **deux commits** a conservé la séparation code/tests (`9123252…`) et documentation (`e2e8984…`).

Observation — La CI distante a confirmé le package sur les SHAs publiés (pré-merge `30577786752` sur `e2e8984…` ; post-merge `30585808183` sur `b553f0aa…`).

Observation — Le post-merge a distingué CI de PR et CI de `main` (événements et runs distincts).

Observation — Le cleanup local a révélé un worktree `main` externe **stale** (HEAD pré-merge), bloquant le switch/FF.

Observation — L’inspection tracked/staged/untracked a empêché la suppression d’un worktree contenant deux fichiers non suivis.

Observation — Les hashes SHA-256 et `cmp` byte-for-byte ont permis un archivage sûr avant suppression des originaux.

Observation — Le cleanup final a supprimé la branche source avec `git branch -d` puis delete remote **sans** perdre l’historique (commits présents via merge).

Observation — La réserve de condensation du framing README reste traçable via docs 12/13/14, rapports 01–04, PR #296 et handoffs.

## G. Ce qui a bien fonctionné

### Cadrage / conception / architecture

- Décisions CAT explicites avant code.
- Slicing D1/D2/D3 adopté avant Delivery.
- CKC obligatoire dans le produit avec `executionAuthority=false`.

### Delivery

- Contrat pur (ops pures, freezes, pas d’I/O runtime).
- Export public minimal via `index.ts`.
- Frontières D2/D3 documentées dans le README D1.

### QA

- Renforcement indépendant des oracles négatifs.
- FAIL honnête plutôt que greenwashing.
- Correctif minimal + revalidation complète.

### PR readiness

- Package unique cohérent (13 fichiers).
- Réserve documentaire explicite, non dissimulée.
- Séparation commit/push/PR du verdict READY FOR PR.

### Publication et review

- Deux commits logiques.
- Remote review avant ready-for-review.
- CI pré-merge verte avant merge.

### Merge

- Merge commit explicite (parents vérifiables).
- Arbre merge ≡ head source.

### Post-merge

- Distinction CI PR / CI main.
- Arrêt immédiat sur worktree non propre (pas de force).

### Archivage et cleanup

- Archive hors repository.
- Preuve d’identité avant `rm`.
- Worktree remove sans `--force`.
- `git branch -d` uniquement.

### Handoff ChatGPT

- Handoffs successifs sur `sfia/review-handoff` avec tip/blob vérifiés.
- Continuité de preuve entre cycles 14 et 15.

## H. Frictions et écarts rencontrés

| Friction | Nature | Échec produit ? |
|----------|--------|-----------------|
| Validateur initial incomplet | Dette technique D1 découverte en QA | Non — détecté avant merge |
| 12 tests négatifs ajoutés en QA | Effort QA > Delivery initiale | Non — qualité accrue |
| Review packs Full volumineux | Friction opérationnelle | Non |
| Condensation framing README | Perte partielle de découvrabilité | Non — réserve acceptée |
| Checkbox CI body devenue stale | Artefact GitHub | Non — corrigée avant ready |
| Wording « draft PR » stale après transition | Artefact GitHub | Non — corrigé avant merge |
| Enchaînement de plusieurs gates GitHub | Charge gouvernance | Non — intentionnel |
| Worktree `main` externe stale | Environnement local | Non — cleanup bloqué à raison |
| Untracked bloquant remove | Environnement local | Non — données préservées |
| Cycle d’archivage supplémentaire | Friction cleanup | Non — preuve renforcée |
| État distant ≠ contraintes workspaces locaux | DevOps local | Non |

## I. Métriques et preuves

| Métrique | Valeur |
|----------|--------|
| Entrées catalogue | 15 |
| CKC detailed / synthetic | 4 / 11 |
| QA renforcée avant correctif | **34 PASS / 12 FAIL** |
| Après correctif / revalidation | **46/46** · **94/94** · **827/827** |
| typecheck / lint / build | PASS |
| Fichiers PR #296 | 13 |
| Commits source | `91232520440b77fe8200427f3321c7ff0454ad24` · `e2e898405c0a555573187e04dd6c3de777595f19` |
| Diff intégré | +3667 / −155 |
| Merge commit | `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e` |
| Parents | `3e8a4374405dce98866e35fb60c5c7329701f191` · `e2e898405c0a555573187e04dd6c3de777595f19` |
| CI pré-merge | run `30577786752` — PASS (event `pull_request`, head `e2e8984…`) |
| CI post-merge | run `30585808183` — PASS (event `push`, head `b553f0aa…`) |
| Archives (SHA-256) | `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309` · `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb` |
| Handoff post-cleanup | tip `35eae1355d6363748622fd812223f3b6d6103aa1` · blob `01fd5e748e02b065f562668707d4de9ab606dc30` |

Sources code/tests : `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` · `app/lib/oa/cycle/index.ts` · `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`.

## J. Enseignements

Enseignement — **Produit** : un contrat runtime catalogue + mapping CKC peut être livré sans resolver ni UI, à condition que les frontières D2/D3 soient adoptées **avant** Delivery.

Enseignement — **Delivery** : une suite locale verte sur chemins nominaux n’établit pas la couverture des invariants négatifs du validateur.

Enseignement — **QA** : l’indépendance QA (nouveaux oracles) convertit des défauts latents en FINDING actionnables avant publication.

Enseignement — **QA** : si les données de production sont conformes, le correctif doit cibler le validateur — pas réécrire le catalogue ni les tests pour « faire passer ».

Enseignement — **Git / PR** : deux commits logiques (code/tests vs docs) facilitent la revue et la traçabilité.

Enseignement — **Git / PR** : le body PR est un artefact gouverné ; les transitions d’état (draft → ready → merge) rendent des formulations stale.

Enseignement — **Post-merge** : CI PR ≠ CI main ; les deux doivent être vérifiées séparément.

Enseignement — **Worktrees** : `main` active dans un autre worktree bloque switch/FF ; l’inspection doit précéder toute mutation.

Enseignement — **Worktrees** : untracked ≠ « temporaire jetable » ; absence de preuve d’identité interdit remove.

Enseignement — **Documentation** : condenser un README en index vivant exige une réserve explicite et des sources de conservation.

Enseignement — **Handoff** : tip/blob distants successifs permettent de reprendre un cleanup Critical sans perdre le fil épistémique.

Enseignement — **Automatisation** : les contrôles répétés (Truth Check, safety gates, hashes) sont automatisables ; l’arbitrage (merge, archivage, promotion) ne l’est pas.

## K. Pratiques réutilisables

Pratique candidate réutilisable — Contrat fonctionnel / architecture (docs 12–14) avant implémentation runtime.

Pratique candidate réutilisable — Découpage D1 / D2 / D3 adopté avant code.

Pratique candidate réutilisable — QA indépendante avec oracle négatif avant PR.

Pratique candidate réutilisable — Correctif minimal (validateur) sans réécriture du contrat de données.

Pratique candidate réutilisable — Revalidation complète après correctif (mêmes commandes, mêmes oracles).

Pratique candidate réutilisable — Package PR en deux commits logiques.

Pratique candidate réutilisable — Remote review avant ready-for-review.

Pratique candidate réutilisable — Body GitHub traité comme artefact gouverné (checklist + wording).

Pratique candidate réutilisable — Distinction CI PR / CI main.

Pratique candidate réutilisable — Cleanup conditionné à l’ancestry (`rev-list` source..main = 0).

Pratique candidate réutilisable — `git branch -d` sans `-D`.

Pratique candidate réutilisable — Inspection tracked / staged / untracked avant `git worktree remove`.

Pratique candidate réutilisable — Archivage `cp -p` + SHA-256 + `cmp` avant suppression d’originaux non versionnés.

Pratique candidate réutilisable — Handoff Git canonique (`sfia/review-handoff`) à chaque clôture de cycle.

Ces pratiques restent **candidates** — elles ne sont ni baseline officielle, ni doctrine validée, ni règle de méthode adoptée.

## L. Anti-patterns observés ou évités

| Anti-pattern | Statut dans V3.1-D1 |
|--------------|---------------------|
| Suite locale verte = QA suffisante | Évité (QA FAIL légitime) |
| Corriger les données catalogue alors que le défaut est dans le validateur | Évité |
| Réécrire les tests pour faire passer le correctif | Évité |
| Fusionner D1/D2/D3 | Évité (CAT-08) |
| Mapping CKC = resolver | Évité |
| Merger sans remote review | Évité |
| Confondre ready-for-review et autorisation de merge | Évité |
| Supprimer branche avant CI post-merge | Évité |
| Supprimer worktree contenant untracked | Évité (STOP) |
| Force / clean / reset hard / branch -D | Évité |
| Ignorer réserves après merge | Évité (réserve maintenue) |
| Transformer recommandation en décision Morris | Évité (ce document) |

## M. Analyse de l’automatisation (L0–L5)

| Action | Niveau observé | Répétable | Soumis à Morris | Garde-fous | Risque si sur-automatisé |
|--------|----------------|-----------|-----------------|------------|--------------------------|
| Contrôles Git / CI | L1–L2 | Oui | Non (lecture) | Truth Check, SHAs attendus | Faux PASS si SHA ignoré |
| Validation invariants (tests) | L2 | Oui | Non pour rejeu | Oracles figés | Greenwashing si oracles édités |
| Génération rapports | L2–L3 | Partiel | Contenu / verdict | Templates + sources | Synthèse sans preuve |
| Publication handoff | L3 borné | Oui | GO implicite cycle | Un fichier, tip/blob | Pollution handoff |
| Modification body PR | L2–L3 | Oui | GO explicite | Diff body borné | Wording non gouverné |
| Ready-for-review | L3 | Oui | GO explicite | État draft | Confusion avec merge |
| Merge | L0–L3 | Technique oui | **GO merge** | Method, SHA head | Merge non autorisé |
| Archivage fichiers | L1–L2 | Oui | **GO archive** | hashes + cmp | Perte données |
| Suppression worktree | L1 | Oui | Après gate clean | no `--force` | Destruction locale |
| Cleanup branche | L1–L3 | Oui | Après safety gate | `-d` only | Perte ref utile |

**Conclusion :** automatiser l’exécution répétable, jamais l’arbitrage structurant. Aucun L5 global n’est recommandé.

## N. Recommandations candidates

Recommandation candidate — Renforcer les tests négatifs du validateur **dès** la Delivery initiale (pas seulement en QA).

Recommandation candidate — Formaliser une vérification du body PR après chaque changement d’état (draft / ready / merge GO).

Recommandation candidate — Améliorer la découvrabilité du framing README (liens vers 12/13/14) sans restaurer toute la duplication historique.

Recommandation candidate — Conserver la séparation CI PR / CI main dans les checklists post-merge.

Recommandation candidate — Vérifier les worktrees dès le pre-check post-merge (`git worktree list`).

Recommandation candidate — Détecter les contenus non suivis avant de planifier le cleanup.

Recommandation candidate — Conserver un pattern d’archive byte-for-byte pour fichiers non versionnés utiles.

Recommandation candidate — Réduire la duplication des review packs Full tout en préservant les preuves complètes (index + annexes).

Recommandation candidate — Conserver un lien explicite entre docs 12/13/14, rapports 01–05 et PR #296 dans les index.

Aucune de ces recommandations n’est appliquée dans ce cycle.

## O. Decision pack futur

| ID | Question | Observation source | Bénéfice | Dette potentielle | Option simple | Gate Morris requis | Statut |
|----|----------|--------------------|----------|-------------------|---------------|--------------------|--------|
| D-REX-01 | Publier le document 05 sur `main` ? | Capitalisation locale complète | Traçabilité Git | Revue doc | Documentation-only PR | GO PR readiness + commit/push/PR | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-02 | Mettre à jour README D1 / framing / backlog pour référencer 05 ? | Index vivant | Découvrabilité | Toucher README déjà condensé | Liens minimalistes | GO doc index | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-03 | Capitaliser le pattern d’archivage sécurisé dans la méthode ? | Cleanup Critical | Réutilisation | Promotion prématurée | Note candidate séparée | GO capitalisation méthode | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-04 | Créer un contrôle L1 body PR stale ? | Checkbox / wording stale | Moins d’erreurs GitHub | Outillage | Checklist manuelle d’abord | GO tooling | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-05 | Améliorer le format des review packs Full ? | Volume packs | Lisibilité | Perte de preuve | Structure index+annexes | GO process | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-06 | Ouvrir une étude V3.1-D2 ? | CAT-08 slicing | Suite produit | Scope resolver | Étude seule, sans Delivery | GO cadrage/étude D2 **distinct** | **NOT DECIDED — MORRIS DECISION REQUIRED** |

D-REX-06 n’est **pas** une recommandation automatique d’ouverture D2.

## P. Registre des réserves

### Bloquantes

Aucune pour la clôture technique D1 (sauf découverte nouvelle hors périmètre de ce document).

### Majeures

Aucune validée actuellement.

### Mineures

| Réserve | Statut |
|---------|--------|
| Condensation du framing README (index vivant) | **ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED** |

Conservation : docs 12, 13, 14 ; rapports V3.1-D1 01–04 ; PR #296 ; handoffs successifs ; ce document 05.

Cette réserve ne bloque pas la capitalisation ; elle n’est pas corrigée ici ; elle n’est pas assimilée à D2.

### Hors périmètre D1

Resolver orchestré · QualifyCycle bridge · exposition vertical-slice · UI · Figma · CreateCycle · persistance.

### Environnementales résolues

Worktree `main` stale retiré sans force · fichiers non suivis archivés (hashes ci-dessus) · branche Delivery locale/distante absentes.

## Q. Anti-claims

- D1 fermé ≠ D2 ouvert
- Catalogue runtime ≠ mécanisme CKC complet / resolver
- Mapping statique ≠ résolution orchestrée
- Quinze IDs ≠ CycleInstance
- CKC obligatoire dans le produit candidate ≠ baseline méthode globale
- QA PASS ≠ zero bug
- CI PASS ≠ validation produit end-to-end
- Merge ≠ capitalisation publiée
- Capitalisation locale ≠ décision Morris
- Pratique candidate ≠ méthode adoptée
- Réserve acceptée ≠ réserve levée
- Branche supprimée ≠ historique supprimé
- Archive locale ≠ source de vérité Git
- Pas de PRODUCT READY / RUN READY / IAM READY / AGENT READY / CUTOVER AUTHORIZED

## R. Recommandation de suite

**Une seule étape immédiate :** PR readiness **documentaire** du document 05 (revue contenu, traçabilité, distinctions épistémiques, réserve) — sans commit, push ni PR tant qu’un GO Morris distinct ne l’autorise.

Ne pas ouvrir D2 comme étape automatique.

## S. Gate suivant candidat

```
GO PR READINESS SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
REVIEW DOCUMENT 05 CONTENT TRACEABILITY OBSERVATIONS RECOMMENDATIONS DECISIONS AND RESERVES —
PREPARE DOCUMENTATION-ONLY PUBLICATION PACKAGE —
NO COMMIT —
NO PUSH —
NO PR —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE
```

Ce gate candidat **n’est pas exécuté** par le présent cycle.

## T. Verdict

```
V3.1-D1 CAPITALIZATION / REX COMPLETE —
CATALOG DELIVERY QA PR MERGE POST-MERGE ARCHIVE AND CLEANUP LESSONS CAPTURED —
OBSERVATIONS RECOMMENDATIONS AND MORRIS DECISIONS KEPT DISTINCT —
ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
DOCUMENTATION PUBLICATION REQUIRES DISTINCT MORRIS GO —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED
```

**Statut :** `CAPITALIZATION COMPLETE LOCALLY — DOCUMENT 05 READY FOR DOCUMENTARY PR READINESS — NO PUBLICATION — D2 NOT OPENED`

```

## Hash, blob, lignes et octets
- SHA-256 6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577
- blob 785256a777976877461a841d3351a72e94aeb793
- 436 / 24796
```
=== DOC MAIN ===
6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577  -
     436   24796
blob_main=785256a777976877461a841d3351a72e94aeb793
=== DOC SOURCE ===
6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577  -
     436   24796
blob_src=785256a777976877461a841d3351a72e94aeb793
=== CMP ===
BYTE_IDENTICAL

```

## CI pré-merge
```json
{
  "conclusion": "success",
  "databaseId": 30607787551,
  "event": "pull_request",
  "headSha": "d77c775f6114eddd04af330cc943a869a5c4f6a2",
  "name": "SFIA Studio CI",
  "status": "completed",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551",
  "workflowName": "SFIA Studio CI"
}
```

## CI post-merge complète
```

✓ main SFIA Studio CI · 30612872178
Triggered via push about 17 minutes ago

JOBS
✓ Detect SFIA Studio changes in 7s (ID 91099412334)
✓ Build and validate SFIA Studio in 1m36s (ID 91099442024)
✓ SFIA Studio Required Gate in 2s (ID 91099736550)

ANNOTATIONS
! Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
Detect SFIA Studio changes: .github#4

! Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
Build and validate SFIA Studio: .github#2


For more information about a job, try: gh run view --job=<job-id>
View this run on GitHub: https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178

```
```json
{
  "conclusion": "success",
  "createdAt": "2026-07-31T07:27:15Z",
  "databaseId": 30612872178,
  "event": "push",
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
          "name": "Modeled governance tests",
          "number": 9,
          "startedAt": "2026-07-31T07:29:00Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Secret pattern scan (targeted)",
          "number": 10,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Trailing whitespace check",
          "number": 11,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Post Setup Node.js",
          "number": 21,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Post Checkout",
          "number": 22,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Complete job",
          "number": 23,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        }
      ],
      "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178/job/91099442024"
    },
    {
      "completedAt": "2026-07-31T07:29:16Z",
      "conclusion": "success",
      "databaseId": 91099736550,
      "name": "SFIA Studio Required Gate",
      "startedAt": "2026-07-31T07:29:14Z",
      "status": "completed",
      "steps": [
        {
          "completedAt": "2026-07-31T07:29:14Z",
          "conclusion": "success",
          "name": "Set up job",
          "number": 1,
          "startedAt": "2026-07-31T07:29:14Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:15Z",
          "conclusion": "success",
          "name": "Aggregate required gate",
          "number": 2,
          "startedAt": "2026-07-31T07:29:14Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:15Z",
          "conclusion": "success",
          "name": "Complete job",
          "number": 3,
          "startedAt": "2026-07-31T07:29:15Z",
          "status": "completed"
        }
      ],
      "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178/job/91099736550"
    }
  ],
  "name": "SFIA Studio CI",
  "status": "completed",
  "updatedAt": "2026-07-31T07:29:17Z",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178",
  "workflowName": "SFIA Studio CI"
}
```
```json
[
  {
    "conclusion": "success",
    "createdAt": "2026-07-31T07:27:15Z",
    "databaseId": 30612872178,
    "event": "push",
    "headSha": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771",
    "name": "SFIA Studio CI",
    "status": "completed",
    "updatedAt": "2026-07-31T07:29:17Z",
    "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178",
    "workflowName": "SFIA Studio CI"
  }
]
```

## Comments / reviews
[] / [] / []

## Réserve héritée
INHERITED-R-01 ACCEPTED — STILL TRACEABLE — NOT LIFTED — NON-BLOCKING

## Findings complets
# PR #297 Post-Merge Findings

## REMOTE-F-01
- statut: CLOSED
- preuve: checkbox Remote CI completed cochée après run pré-merge PASS 30607787551

## READY-F-02
- statut: CLOSED
- preuve: wording “This draft PR” → “This PR” appliqué avant merge; body final vérifié

## POSTMERGE-CI-01
- statut: PASS / CLOSED
- handoff source: PENDING
- requalification: PASS — run 30612872178 completed/success on MERGE_SHA e1befcb80ed5e3c789a7de9036a8207d6b3e6771
- jobs: Detect / Build and validate / Required Gate — success
- steps: Typecheck, Lint, Build, Unit tests, Modeled governance tests, Secret pattern scan, Trailing whitespace — success

## INHERITED-R-01
- statut: ACCEPTED — STILL TRACEABLE — NOT LIFTED
- nature: réserve héritée (condensation framing README)
- bloquant post-merge: NON
- bloquant cleanup: NON
- D2: non autorisé

## POSTMERGE-F-01 — SOURCE CHECKED OUT IN PRIMARY WORKTREE WITH TMP UNTRACKED
- observation: le tip source `capitalization/sfia-studio-v3-1-d1-rex` @ d77c775f… est la branche courante du worktree principal `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`, avec 255 fichiers non suivis exclusivement sous `.tmp-sfia-review/**` ; aucun tracked/staged projet
- source: inventaire worktree + status
- sévérité: mineure / opérationnelle
- bloquant post-merge: NON
- bloquant cleanup READY absolu: OUI pour un éventuel `git worktree remove` du primaire (interdit / impossible) ; NON pour un cleanup branche après checkout main, si les preuves tmp sont laissées en place
- action candidate: dans un futur GO cleanup — FF main, checkout main, `git branch -d` local, delete remote ; ne pas retirer le worktree principal ; optionnellement archiver `.tmp-sfia-review` hors cycle si besoin
- gate requis: GO CLEANUP distinct
- statut: OPEN — observation locale (non résolue ici)

## POSTMERGE-F-02 — UNRELATED WORKTREES DIRTY (OUT OF SCOPE)
- observation: 77 worktrees inventoriés ; plusieurs hors lot portent tracked/untracked non liés à PR #297 ; handoff `sfia/review-handoff` exclu du cleanup projet
- source: inventaire global
- sévérité: informative
- bloquant post-merge: NON
- bloquant cleanup source PR #297: NON (hors périmètre)
- action candidate: aucune dans ce cycle
- gate requis: aucun pour ce lot
- statut: NOTED — hors scope


## Sortie brute git worktree list --porcelain (+ prune dry-run)
```
worktree /Users/morris/Projects/sfia-workspace
HEAD c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

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
HEAD 3e61efc188f9b25e9a96982d07d0313656d2a2e8
branch refs/heads/sfia/review-handoff

=== PRUNE DRY-RUN ===

```

## Sortie brute de tous les statuts worktrees
```

===== WORKTREE: /Users/morris/Projects/sfia-workspace =====
/Users/morris/Projects/sfia-workspace
branch=delivery/sfia-studio-control-tower-fast-track
HEAD=c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
locked=MAIN_OR_BARE
--- status --untracked=all ---
?? .tmp-sfia-review/a5-2-decide/handoff-publish.out
?? .tmp-sfia-review/a5-2-decide/truth.txt
?? .tmp-sfia-review/a5-2-framing/commit.txt
?? .tmp-sfia-review/a5-2-framing/diff-stat.txt
?? .tmp-sfia-review/a5-2-framing/full.diff
?? .tmp-sfia-review/a5-2-framing/handoff-publish.out
?? .tmp-sfia-review/a5-2-framing/ls-remote.txt
?? .tmp-sfia-review/a5-2-framing/merge-check-runs.json
?? .tmp-sfia-review/a5-2-framing/name-status.txt
?? .tmp-sfia-review/a5-2-framing/pr280.json
?? .tmp-sfia-review/a5-2-framing/run-view.json
?? .tmp-sfia-review/a5-2-framing/runs-for-commit.json
?? .tmp-sfia-review/a5-2-framing/show.txt
?? .tmp-sfia-review/a5-2-framing/source-inventory.txt
?? .tmp-sfia-review/a5-2-framing/src-t-a7-01-framing-and-scope.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-02-t-a7-cutover-preconditions.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-03-t-a6-and-option-a-completion-criteria.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-04-reservations-risks-and-stop-conditions.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-05-morris-decision-pack.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-README.md
?? .tmp-sfia-review/a5-2-framing/status.txt
?? .tmp-sfia-review/a5-2-framing/truth.txt
?? .tmp-sfia-review/a5-2-framing/worktree-truth.txt
?? .tmp-sfia-review/a5-2-review/full.diff
?? .tmp-sfia-review/a5-2-review/handoff-publish.out
?? .tmp-sfia-review/a5-2-review/run.json
?? .tmp-sfia-review/a5-2-review/truth.txt
?? .tmp-sfia-review/a52-decision-record.diff
?? .tmp-sfia-review/a52-pr-cumulative.diff
?? .tmp-sfia-review/a52-pr-decision-record.diff
?? .tmp-sfia-review/a52-pr281-body.md
?? .tmp-sfia-review/a52-pr281-checks.txt
?? .tmp-sfia-review/a52-pr281-cumulative.diff
?? .tmp-sfia-review/a52-pr281-meta.json
?? .tmp-sfia-review/accel-05.md
?? .tmp-sfia-review/accel-README.md
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/commit-plan/commit-1-files.txt
?? .tmp-sfia-review/commit-plan/commit-2-files.txt
?? .tmp-sfia-review/commit-plan/commit-3-files.txt
?? .tmp-sfia-review/commit-plan/commit-4-files.txt
?? .tmp-sfia-review/commit-plan/commit-5-files.txt
?? .tmp-sfia-review/commit-plan/commit-6-files.txt
?? .tmp-sfia-review/commit-plan/duplicate-files.txt
?? .tmp-sfia-review/commit-plan/excluded-files.txt
?? .tmp-sfia-review/commit-plan/unclassified-files.txt
?? .tmp-sfia-review/control-tower-fast-track-evidence/00-live-ready-morris.txt
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png
?? .tmp-sfia-review/d1-c1-created-files.txt
?? .tmp-sfia-review/d1-c1-modified.diff
?? .tmp-sfia-review/d1-i1-created-files.txt
?? .tmp-sfia-review/d1-i1-modified.diff
?? .tmp-sfia-review/doc32-commit/commit-ec.txt
?? .tmp-sfia-review/doc32-commit/commit-fuller.txt
?? .tmp-sfia-review/doc32-commit/commit-stdout.txt
?? .tmp-sfia-review/doc32-commit/commit-ts.txt
?? .tmp-sfia-review/doc32-commit/commit.diff
?? .tmp-sfia-review/doc32-commit/empty-cached.stat
?? .tmp-sfia-review/doc32-commit/left-right.txt
?? .tmp-sfia-review/doc32-commit/pre-commit.diff
?? .tmp-sfia-review/doc32-commit/pre-commit.stat
?? .tmp-sfia-review/doc32-commit/show-full.txt
?? .tmp-sfia-review/doc32-commit/show-name-status.txt
?? .tmp-sfia-review/doc32-commit/show-stat.txt
?? .tmp-sfia-review/doc32-commit/staged.diff
?? .tmp-sfia-review/doc32-commit/staged.diff.bak
?? .tmp-sfia-review/doc32-commit/staged.name-status
?? .tmp-sfia-review/doc32-commit/staged.stat
?? .tmp-sfia-review/doc32-commit/status-final.txt
?? .tmp-sfia-review/doc32-post-p3-m1/after-acquis.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-hors-perimetre.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-meta.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-reserves.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-succes-reserve.md
?? .tmp-sfia-review/doc32-post-p3-m1/all-32.txt
?? .tmp-sfia-review/doc32-post-p3-m1/before-acquis.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-hors-perimetre.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-meta.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-reserves.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-succes-reserve.md
?? .tmp-sfia-review/doc32-post-p3-m1/blob-initial.txt
?? .tmp-sfia-review/doc32-post-p3-m1/doc32-before.md
?? .tmp-sfia-review/doc32-post-p3-m1/doc32-path.txt
?? .tmp-sfia-review/doc32-post-p3-m1/doc32-paths.txt
?? .tmp-sfia-review/doc32-post-p3-m1/full.diff
?? .tmp-sfia-review/doc32-post-p3-m1/occurrences-full.txt
?? .tmp-sfia-review/doc32-post-p3-m1/occurrences-raw.txt
?? .tmp-sfia-review/doc32-post-p3-m1/semantic-review.txt
?? .tmp-sfia-review/doc32-pr-body.md
?? .tmp-sfia-review/doc32-pr275-merge/ci-found
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-jobs.txt
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-qual.txt
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-run.json
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-view.json
?? .tmp-sfia-review/doc32-pr275-merge/ci-pr.json
?? .tmp-sfia-review/doc32-pr275-merge/merge-cmd.txt
?? .tmp-sfia-review/doc32-pr275-merge/merge-ec.txt
?? .tmp-sfia-review/doc32-pr275-merge/merge-out.txt
?? .tmp-sfia-review/doc32-pr275-merge/merge-ts.txt
?? .tmp-sfia-review/doc32-pr275-merge/postmerge-runs.json
?? .tmp-sfia-review/doc32-pr275-merge/pr-after.json
?? .tmp-sfia-review/doc32-pr275-merge/pr-before.json
?? .tmp-sfia-review/doc32-pr275-merge/pr-body-before.md
?? .tmp-sfia-review/doc32-pr275-merge/pr-diff-before.txt
?? .tmp-sfia-review/doc32-pr275-merge/pr-threads-before.json
?? .tmp-sfia-review/doc32-pr275-merge/remote-branch-after.txt
?? .tmp-sfia-review/doc32-pr275-merge/ruleset.json
?? .tmp-sfia-review/doc32-pr275-merge/squash-fuller.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash-name-status.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash-sha.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash-stat.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash.diff
?? .tmp-sfia-review/doc32-pr275-merge/ts-start.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/branches-contains.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/bypass.json
?? .tmp-sfia-review/doc32-pr275-postmerge/ci-post.json
?? .tmp-sfia-review/doc32-pr275-postmerge/doc32-on-main.md
?? .tmp-sfia-review/doc32-pr275-postmerge/doc32-useful.md
?? .tmp-sfia-review/doc32-pr275-postmerge/job-90018681920.meta.json
?? .tmp-sfia-review/doc32-pr275-postmerge/job-90018732641.meta.json
?? .tmp-sfia-review/doc32-pr275-postmerge/job-90019119514.meta.json
?? .tmp-sfia-review/doc32-pr275-postmerge/local-branch.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/local-src-sha.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/origin-main-fuller.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/origin-main-sha.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/pr-after.json
?? .tmp-sfia-review/doc32-pr275-postmerge/pr-body.md
?? .tmp-sfia-review/doc32-pr275-postmerge/remote-src.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/ruleset-summary.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/ruleset.json
?? .tmp-sfia-review/doc32-pr275-postmerge/squash-fuller.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/squash-name-status.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/squash-stat.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/squash.diff
?? .tmp-sfia-review/doc32-pr275-postmerge/ts.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/worktree-list.txt
?? .tmp-sfia-review/doc32-pr275-readiness/bypass.json
?? .tmp-sfia-review/doc32-pr275-readiness/ci-run.json
?? .tmp-sfia-review/doc32-pr275-readiness/commit-fuller.txt
?? .tmp-sfia-review/doc32-pr275-readiness/commit.diff
?? .tmp-sfia-review/doc32-pr275-readiness/github-compare.diff
?? .tmp-sfia-review/doc32-pr275-readiness/job-90013737560.json
?? .tmp-sfia-review/doc32-pr275-readiness/job-90013783710.json
?? .tmp-sfia-review/doc32-pr275-readiness/job-90014180221.json
?? .tmp-sfia-review/doc32-pr275-readiness/pr-body.md
?? .tmp-sfia-review/doc32-pr275-readiness/pr-threads.json
?? .tmp-sfia-review/doc32-pr275-readiness/pr-view.json
?? .tmp-sfia-review/doc32-pr275-readiness/ruleset-summary.txt
?? .tmp-sfia-review/doc32-pr275-readiness/ruleset.json
?? .tmp-sfia-review/doc32-pr275-readiness/ts.txt
?? .tmp-sfia-review/doc32-push-pr/ci-found
?? .tmp-sfia-review/doc32-push-pr/ci-qual.txt
?? .tmp-sfia-review/doc32-push-pr/ci-run-view.json
?? .tmp-sfia-review/doc32-push-pr/ci-run.json
?? .tmp-sfia-review/doc32-push-pr/commit-fuller.txt
?? .tmp-sfia-review/doc32-push-pr/commit.diff
?? .tmp-sfia-review/doc32-push-pr/compare.stat
?? .tmp-sfia-review/doc32-push-pr/github-compare.diff
?? .tmp-sfia-review/doc32-push-pr/ls-remote-before.txt
?? .tmp-sfia-review/doc32-push-pr/pr-body.md
?? .tmp-sfia-review/doc32-push-pr/pr-checks-rollup.json
?? .tmp-sfia-review/doc32-push-pr/pr-checks.txt
?? .tmp-sfia-review/doc32-push-pr/pr-create-ec.txt
?? .tmp-sfia-review/doc32-push-pr/pr-create-out.txt
?? .tmp-sfia-review/doc32-push-pr/pr-create-ts.txt
?? .tmp-sfia-review/doc32-push-pr/pr-list-before.json
?? .tmp-sfia-review/doc32-push-pr/pr-merge-guard.json
?? .tmp-sfia-review/doc32-push-pr/pr-search-commit.json
?? .tmp-sfia-review/doc32-push-pr/pr-view.json
?? .tmp-sfia-review/doc32-push-pr/push-ec.txt
?? .tmp-sfia-review/doc32-push-pr/push-out.txt
?? .tmp-sfia-review/doc32-push-pr/push-ts.txt
?? .tmp-sfia-review/doc32-push-pr/runs.json
?? .tmp-sfia-review/doc32-push-pr/show-name-status.txt
?? .tmp-sfia-review/doc32-push-pr/show-stat.txt
?? .tmp-sfia-review/doc32-squash-body.txt
?? .tmp-sfia-review/fa6-clean-branch/baseline-doc24.md
?? .tmp-sfia-review/fa6-clean-branch/commit-fuller.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-name-status.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-stat.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-stderr.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-stdout.txt
?? .tmp-sfia-review/fa6-clean-branch/diff-tree.txt
?? .tmp-sfia-review/fa6-clean-branch/fa6-section.md
?? .tmp-sfia-review/fa6-clean-branch/left-right.txt
?? .tmp-sfia-review/fa6-clean-branch/new-commit.txt
?? .tmp-sfia-review/fa6-clean-branch/pr-local-full.diff
?? .tmp-sfia-review/fa6-clean-branch/pr-local-name-status.txt
?? .tmp-sfia-review/fa6-clean-branch/pr-local-stat.txt
?? .tmp-sfia-review/fa6-clean-branch/ruleset.json
?? .tmp-sfia-review/fa6-clean-branch/source-delta.diff
?? .tmp-sfia-review/fa6-clean-branch/source-delta.patch
?? .tmp-sfia-review/fa6-clean-branch/staged-name-status.txt
?? .tmp-sfia-review/fa6-clean-branch/staged-stat.txt
?? .tmp-sfia-review/fa6-clean-branch/staged.diff
?? .tmp-sfia-review/fa6-clean-branch/status-after.txt
?? .tmp-sfia-review/fa6-clean-branch/target-doc24.md
?? .tmp-sfia-review/fa6-clean-branch/worktree-pre-stage.diff
?? .tmp-sfia-review/fa6-clean-pr/check-runs.json
?? .tmp-sfia-review/fa6-clean-pr/commits-lr.txt
?? .tmp-sfia-review/fa6-clean-pr/diff-stat.txt
?? .tmp-sfia-review/fa6-clean-pr/fa6-section.md
?? .tmp-sfia-review/fa6-clean-pr/full.diff
?? .tmp-sfia-review/fa6-clean-pr/gh-compare.json
?? .tmp-sfia-review/fa6-clean-pr/name-status.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-checks-2.err
?? .tmp-sfia-review/fa6-clean-pr/pr-checks-2.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-checks.err
?? .tmp-sfia-review/fa6-clean-pr/pr-checks.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-create-exit.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-create-stderr.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-create-stdout.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-diff.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-num.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-view.json
?? .tmp-sfia-review/fa6-clean-pr/ruleset.json
?? .tmp-sfia-review/fa6-clean-pr/run-view.json
?? .tmp-sfia-review/fa6-clean-pr/runs.json
?? .tmp-sfia-review/fa6-clean-pr/status-final.txt
?? .tmp-sfia-review/fa6-clean-push/ahead-behind-u.txt
?? .tmp-sfia-review/fa6-clean-push/diff-tree.txt
?? .tmp-sfia-review/fa6-clean-push/fa6-section.md
?? .tmp-sfia-review/fa6-clean-push/gh-commit.json
?? .tmp-sfia-review/fa6-clean-push/gh-file-meta.json
?? .tmp-sfia-review/fa6-clean-push/local-before.txt
?? .tmp-sfia-review/fa6-clean-push/local-full.diff
?? .tmp-sfia-review/fa6-clean-push/local-name-status.txt
?? .tmp-sfia-review/fa6-clean-push/local-stat.txt
?? .tmp-sfia-review/fa6-clean-push/lr-remote.txt
?? .tmp-sfia-review/fa6-clean-push/prs-after.json
?? .tmp-sfia-review/fa6-clean-push/push-exit.txt
?? .tmp-sfia-review/fa6-clean-push/push-stderr.txt
?? .tmp-sfia-review/fa6-clean-push/push-stdout.txt
?? .tmp-sfia-review/fa6-clean-push/remote-after.txt
?? .tmp-sfia-review/fa6-clean-push/remote-before.txt
?? .tmp-sfia-review/fa6-clean-push/remote-full.diff
?? .tmp-sfia-review/fa6-clean-push/remote-ns.txt
?? .tmp-sfia-review/fa6-clean-push/remote-stat.txt
?? .tmp-sfia-review/fa6-clean-push/ruleset.json
?? .tmp-sfia-review/fa6-clean-push/runs.json
?? .tmp-sfia-review/fa6-clean-push/show-name-status.txt
?? .tmp-sfia-review/fa6-clean-push/show-stat.txt
?? .tmp-sfia-review/fa6-clean-push/status-after.txt
?? .tmp-sfia-review/fa6-cleanup/24-main.md
?? .tmp-sfia-review/fa6-cleanup/fa6-worktree-block.txt
?? .tmp-sfia-review/fa6-cleanup/handoff-initial.txt
?? .tmp-sfia-review/fa6-cleanup/local-branch-meta.txt
?? .tmp-sfia-review/fa6-cleanup/local-branches-after.txt
?? .tmp-sfia-review/fa6-cleanup/local-branches-before.txt
?? .tmp-sfia-review/fa6-cleanup/local-d-stderr.txt
?? .tmp-sfia-review/fa6-cleanup/local-d-stdout.txt
?? .tmp-sfia-review/fa6-cleanup/post-cleanup.txt
?? .tmp-sfia-review/fa6-cleanup/pr-after.json
?? .tmp-sfia-review/fa6-cleanup/pr-before.json
?? .tmp-sfia-review/fa6-cleanup/remote-delete-meta.txt
?? .tmp-sfia-review/fa6-cleanup/remote-delete-stderr.txt
?? .tmp-sfia-review/fa6-cleanup/remote-delete-stdout.txt
?? .tmp-sfia-review/fa6-cleanup/remote-heads-after.txt
?? .tmp-sfia-review/fa6-cleanup/remote-heads-before.txt
?? .tmp-sfia-review/fa6-cleanup/ruleset.json
?? .tmp-sfia-review/fa6-cleanup/safe-porcelain.txt
?? .tmp-sfia-review/fa6-cleanup/safe-unexpected.txt
?? .tmp-sfia-review/fa6-cleanup/target-status.txt
?? .tmp-sfia-review/fa6-cleanup/tree-compare.txt
?? .tmp-sfia-review/fa6-cleanup/truth-safe.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-after.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-before.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-list-after.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-list-before.txt
?? .tmp-sfia-review/fa6-cleanup/wt-remove-meta.txt
?? .tmp-sfia-review/fa6-cleanup/wt-remove-stderr.txt
?? .tmp-sfia-review/fa6-cleanup/wt-remove-stdout.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/24-after.md
?? .tmp-sfia-review/fa6-closure-pr-ready/24-before.md
?? .tmp-sfia-review/fa6-closure-pr-ready/blobs.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/commit-check.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/commit-name-status.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/commit-stat.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/contradiction-rows.json
?? .tmp-sfia-review/fa6-closure-pr-ready/contradictions-real.json
?? .tmp-sfia-review/fa6-closure-pr-ready/diff-check.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/full-diff.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/handoff-initial.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/log-graph.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/pr-body-candidate.md
?? .tmp-sfia-review/fa6-closure-pr-ready/range-name-status.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/range-stat.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/ruleset.json
?? .tmp-sfia-review/fa6-closure-pr-ready/section-12.md
?? .tmp-sfia-review/fa6-closure-pr-ready/section-17.md
?? .tmp-sfia-review/fa6-closure-pr-ready/sections-modified.md
?? .tmp-sfia-review/fa6-closure-pr-ready/truth.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/ts.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/word-diff.txt
?? .tmp-sfia-review/fa6-closure-publish/check-runs.json
?? .tmp-sfia-review/fa6-closure-publish/commit-status.json
?? .tmp-sfia-review/fa6-closure-publish/content-keys.txt
?? .tmp-sfia-review/fa6-closure-publish/handoff-initial.txt
?? .tmp-sfia-review/fa6-closure-publish/local-diff.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-body-remote.md
?? .tmp-sfia-review/fa6-closure-publish/pr-body.md
?? .tmp-sfia-review/fa6-closure-publish/pr-checks-refresh.json
?? .tmp-sfia-review/fa6-closure-publish/pr-checks.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-create-meta.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-create-stdout.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-metadata.json
?? .tmp-sfia-review/fa6-closure-publish/push-meta.txt
?? .tmp-sfia-review/fa6-closure-publish/push-stderr.txt
?? .tmp-sfia-review/fa6-closure-publish/push-stdout.txt
?? .tmp-sfia-review/fa6-closure-publish/remote-before.txt
?? .tmp-sfia-review/fa6-closure-publish/remote-blob.txt
?? .tmp-sfia-review/fa6-closure-publish/remote-diff.txt
?? .tmp-sfia-review/fa6-closure-publish/scope.txt
?? .tmp-sfia-review/fa6-closure-publish/status-after-push.txt
?? .tmp-sfia-review/fa6-closure-publish/truth.txt
?? .tmp-sfia-review/fa6-closure/24-before.md
?? .tmp-sfia-review/fa6-closure/blob24-before.txt
?? .tmp-sfia-review/fa6-closure/commit-check.txt
?? .tmp-sfia-review/fa6-closure/commit-fuller.txt
?? .tmp-sfia-review/fa6-closure/commit-stat.txt
?? .tmp-sfia-review/fa6-closure/commit.txt
?? .tmp-sfia-review/fa6-closure/contradiction-scan.txt
?? .tmp-sfia-review/fa6-closure/doc24-diff.txt
?? .tmp-sfia-review/fa6-closure/existing-branch.txt
?? .tmp-sfia-review/fa6-closure/handoff-initial.txt
?? .tmp-sfia-review/fa6-closure/remote-project-branch.txt
?? .tmp-sfia-review/fa6-closure/ruleset-summary.json
?? .tmp-sfia-review/fa6-closure/sections-modified.md
?? .tmp-sfia-review/fa6-closure/sections-other.md
?? .tmp-sfia-review/fa6-closure/truth.txt
?? .tmp-sfia-review/fa6-closure/ts.txt
?? .tmp-sfia-review/fa6-closure/wt-head.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/24-after.md
?? .tmp-sfia-review/fa6-correction-rereadiness/24-base.md
?? .tmp-sfia-review/fa6-correction-rereadiness/blobs.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/blocker-scan.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/bp-lines-after.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/contradiction-rows.json
?? .tmp-sfia-review/fa6-correction-rereadiness/contradictions-real.json
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-commit.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-diff-stat.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-diff.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-name-status.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/cumulative-diff.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/cumulative-name-status.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/cumulative-stat.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/handoff-initial.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/header-bp.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/log-two-commits.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/pr-body-candidate.md
?? .tmp-sfia-review/fa6-correction-rereadiness/ruleset.json
?? .tmp-sfia-review/fa6-correction-rereadiness/section-12.md
?? .tmp-sfia-review/fa6-correction-rereadiness/section-17.md
?? .tmp-sfia-review/fa6-correction-rereadiness/section17-before.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/sections-capitalisation.md
?? .tmp-sfia-review/fa6-correction-rereadiness/truth-final.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/truth-initial.txt
?? .tmp-sfia-review/fa6-cycle-close/24-canonical.md
?? .tmp-sfia-review/fa6-cycle-close/blob.txt
?? .tmp-sfia-review/fa6-cycle-close/branch-commits.txt
?? .tmp-sfia-review/fa6-cycle-close/ci-on-squash.json
?? .tmp-sfia-review/fa6-cycle-close/ci-post-jobs.json
?? .tmp-sfia-review/fa6-cycle-close/ci-post.json
?? .tmp-sfia-review/fa6-cycle-close/contradiction-rows.json
?? .tmp-sfia-review/fa6-cycle-close/contradictions-real.json
?? .tmp-sfia-review/fa6-cycle-close/handoff-initial.txt
?? .tmp-sfia-review/fa6-cycle-close/main-freshness.txt
?? .tmp-sfia-review/fa6-cycle-close/main.txt
?? .tmp-sfia-review/fa6-cycle-close/pr.json
?? .tmp-sfia-review/fa6-cycle-close/ruleset.json
?? .tmp-sfia-review/fa6-cycle-close/squash-commit.txt
?? .tmp-sfia-review/fa6-cycle-close/squash-parent.txt
?? .tmp-sfia-review/fa6-cycle-close/tree-compare.txt
?? .tmp-sfia-review/fa6-cycle-close/truth.txt
?? .tmp-sfia-review/fa6-cycle-close/worktree-inventory.txt
?? .tmp-sfia-review/fa6-cycle-close/worktrees-summary.txt
?? .tmp-sfia-review/fa6-merge-279/24-canonical.md
?? .tmp-sfia-review/fa6-merge-279/24-premerge.md
?? .tmp-sfia-review/fa6-merge-279/blob-main.txt
?? .tmp-sfia-review/fa6-merge-279/blob-pre.txt
?? .tmp-sfia-review/fa6-merge-279/checks-pre.json
?? .tmp-sfia-review/fa6-merge-279/ci-main-runs.json
?? .tmp-sfia-review/fa6-merge-279/ci-post-jobs.json
?? .tmp-sfia-review/fa6-merge-279/ci-post.json
?? .tmp-sfia-review/fa6-merge-279/ci-pre.json
?? .tmp-sfia-review/fa6-merge-279/ci-runs-head.json
?? .tmp-sfia-review/fa6-merge-279/diff-ns.txt
?? .tmp-sfia-review/fa6-merge-279/handoff-initial.txt
?? .tmp-sfia-review/fa6-merge-279/inline.json
?? .tmp-sfia-review/fa6-merge-279/issue-comments.json
?? .tmp-sfia-review/fa6-merge-279/local-branch.txt
?? .tmp-sfia-review/fa6-merge-279/main-after.txt
?? .tmp-sfia-review/fa6-merge-279/main-commit.txt
?? .tmp-sfia-review/fa6-merge-279/main-ns.txt
?? .tmp-sfia-review/fa6-merge-279/main-stat.txt
?? .tmp-sfia-review/fa6-merge-279/merge-meta.txt
?? .tmp-sfia-review/fa6-merge-279/merge-stderr.txt
?? .tmp-sfia-review/fa6-merge-279/merge-stdout.txt
?? .tmp-sfia-review/fa6-merge-279/post-merge-checks.json
?? .tmp-sfia-review/fa6-merge-279/post-merge-done
?? .tmp-sfia-review/fa6-merge-279/post-merge-runs.json
?? .tmp-sfia-review/fa6-merge-279/pr-after.json
?? .tmp-sfia-review/fa6-merge-279/pr-before.json
?? .tmp-sfia-review/fa6-merge-279/pr-diff.txt
?? .tmp-sfia-review/fa6-merge-279/pre-merge-main.txt
?? .tmp-sfia-review/fa6-merge-279/remote-branch.txt
?? .tmp-sfia-review/fa6-merge-279/reviews.json
?? .tmp-sfia-review/fa6-merge-279/ruleset.json
?? .tmp-sfia-review/fa6-merge-279/squash-body.txt
?? .tmp-sfia-review/fa6-merge-279/squash-sha.txt
?? .tmp-sfia-review/fa6-merge-279/truth.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/24-before.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/24-final.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/blob-final.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/blob-initial.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/blocker-context-before.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/check-runs.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-jobs.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-log-excerpts.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-run.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-runs-poll.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/corrective-diff.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/corrective-name-status.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/corrective-stat.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/cumulative-stat.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/handoff-initial.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/inline-comments.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/issue-comments.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/lines-after-edit.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/log-3-commits.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/merge-pack-candidate.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/new-head.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/new-run-id.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/occurrence-scan-before.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-after-push.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-body-after.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-body-before.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-final.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-initial.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/push-meta.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/push-stderr.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/push-stdout.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/remote-diff.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/reviews.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ruleset.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/target-run.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/third-commit.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/truth-initial.txt
?? .tmp-sfia-review/fa6-pr274-merge/blob-main.txt
?? .tmp-sfia-review/fa6-pr274-merge/branch-remote-after.txt
?? .tmp-sfia-review/fa6-pr274-merge/diff-stat.txt
?? .tmp-sfia-review/fa6-pr274-merge/fa6-section-main.md
?? .tmp-sfia-review/fa6-pr274-merge/findings-line-main.txt
?? .tmp-sfia-review/fa6-pr274-merge/full.diff
?? .tmp-sfia-review/fa6-pr274-merge/integrated-diff.txt
?? .tmp-sfia-review/fa6-pr274-merge/integrated-ns.txt
?? .tmp-sfia-review/fa6-pr274-merge/integrated-stat.txt
?? .tmp-sfia-review/fa6-pr274-merge/left-right.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-after.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-before.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-commit-diff.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-diff-tree.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-fuller.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-name-status.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-stat.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-base.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-exit.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-stderr.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-stdout.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-timestamp.txt
?? .tmp-sfia-review/fa6-pr274-merge/merged-at.txt
?? .tmp-sfia-review/fa6-pr274-merge/merged-by.txt
?? .tmp-sfia-review/fa6-pr274-merge/name-status.txt
?? .tmp-sfia-review/fa6-pr274-merge/post-merge-ci-qual.txt
?? .tmp-sfia-review/fa6-pr274-merge/post-merge-run.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-after.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-before.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-diff.txt
?? .tmp-sfia-review/fa6-pr274-merge/pr-rest-after.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-rest-before.json
?? .tmp-sfia-review/fa6-pr274-merge/pre-merge-timestamp.txt
?? .tmp-sfia-review/fa6-pr274-merge/ruleset-after.json
?? .tmp-sfia-review/fa6-pr274-merge/ruleset-before.json
?? .tmp-sfia-review/fa6-pr274-merge/run-pr.json
?? .tmp-sfia-review/fa6-pr274-merge/runs-main.json
?? .tmp-sfia-review/fa6-pr274-merge/runs-related.json
?? .tmp-sfia-review/fa6-pr274-merge/squash-sha.txt
?? .tmp-sfia-review/fa6-pr274-merge/status-after.txt
?? .tmp-sfia-review/fa6-pr274-merge/status-before.txt
?? .tmp-sfia-review/fa6-pr274-merge/threads-before.json
?? .tmp-sfia-review/fa6-pr274-postmerge/blob-main.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/blob-squash.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/branch-clean-remote.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/build_pack.py
?? .tmp-sfia-review/fa6-pr274-postmerge/check-runs-main.json
?? .tmp-sfia-review/fa6-pr274-postmerge/clean-wt-head.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/clean-wt-status.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/diff-tree.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/fa6-section-main.md
?? .tmp-sfia-review/fa6-pr274-postmerge/findings-line.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/gh-commit.json
?? .tmp-sfia-review/fa6-pr274-postmerge/job-89979087968-steps.json
?? .tmp-sfia-review/fa6-pr274-postmerge/job-89979119270-steps.json
?? .tmp-sfia-review/fa6-pr274-postmerge/job-89979436234-steps.json
?? .tmp-sfia-review/fa6-pr274-postmerge/main-fuller.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/main-ns.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/main-stat.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/origin-main.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/parent.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/postmerge-run-rest.json
?? .tmp-sfia-review/fa6-pr274-postmerge/postmerge-run.json
?? .tmp-sfia-review/fa6-pr274-postmerge/pr-rest.json
?? .tmp-sfia-review/fa6-pr274-postmerge/pr-run.json
?? .tmp-sfia-review/fa6-pr274-postmerge/pr-view.json
?? .tmp-sfia-review/fa6-pr274-postmerge/ruleset-useful.json
?? .tmp-sfia-review/fa6-pr274-postmerge/ruleset.json
?? .tmp-sfia-review/fa6-pr274-postmerge/squash-diff.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/status.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/workflow-blob.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/worktree-present.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/worktrees.txt
?? .tmp-sfia-review/fa6-pr274-readiness/blob.txt
?? .tmp-sfia-review/fa6-pr274-readiness/check-runs.json
?? .tmp-sfia-review/fa6-pr274-readiness/commit-status.json
?? .tmp-sfia-review/fa6-pr274-readiness/commits-lr.txt
?? .tmp-sfia-review/fa6-pr274-readiness/diff-stat.txt
?? .tmp-sfia-review/fa6-pr274-readiness/fa6-section.md
?? .tmp-sfia-review/fa6-pr274-readiness/findings-line.txt
?? .tmp-sfia-review/fa6-pr274-readiness/full.diff
?? .tmp-sfia-review/fa6-pr274-readiness/gh-compare.json
?? .tmp-sfia-review/fa6-pr274-readiness/issue-comments.json
?? .tmp-sfia-review/fa6-pr274-readiness/job-89969671952-steps.json
?? .tmp-sfia-review/fa6-pr274-readiness/job-89969708873-steps.json
?? .tmp-sfia-review/fa6-pr274-readiness/job-89970005590-steps.json
?? .tmp-sfia-review/fa6-pr274-readiness/left-right.txt
?? .tmp-sfia-review/fa6-pr274-readiness/merge-base.txt
?? .tmp-sfia-review/fa6-pr274-readiness/name-status.txt
?? .tmp-sfia-review/fa6-pr274-readiness/pr-diff.txt
?? .tmp-sfia-review/fa6-pr274-readiness/pr-rest.json
?? .tmp-sfia-review/fa6-pr274-readiness/pr-summary.json
?? .tmp-sfia-review/fa6-pr274-readiness/pr-view.json
?? .tmp-sfia-review/fa6-pr274-readiness/review-comments.json
?? .tmp-sfia-review/fa6-pr274-readiness/reviews.json
?? .tmp-sfia-review/fa6-pr274-readiness/ruleset-useful.json
?? .tmp-sfia-review/fa6-pr274-readiness/ruleset.json
?? .tmp-sfia-review/fa6-pr274-readiness/run-view.json
?? .tmp-sfia-review/fa6-pr274-readiness/status.txt
?? .tmp-sfia-review/fa6-pr274-readiness/threads.json
?? .tmp-sfia-review/fa6-pr279-review/24-final.md
?? .tmp-sfia-review/fa6-pr279-review/blob.txt
?? .tmp-sfia-review/fa6-pr279-review/check-runs.json
?? .tmp-sfia-review/fa6-pr279-review/ci-jobs.json
?? .tmp-sfia-review/fa6-pr279-review/ci-log-excerpts.txt
?? .tmp-sfia-review/fa6-pr279-review/ci-run.json
?? .tmp-sfia-review/fa6-pr279-review/contradiction-rows.json
?? .tmp-sfia-review/fa6-pr279-review/handoff-initial.txt
?? .tmp-sfia-review/fa6-pr279-review/inline-comments.json
?? .tmp-sfia-review/fa6-pr279-review/issue-comments.json
?? .tmp-sfia-review/fa6-pr279-review/local-diff.txt
?? .tmp-sfia-review/fa6-pr279-review/log-detect.zip
?? .tmp-sfia-review/fa6-pr279-review/log-gate.zip
?? .tmp-sfia-review/fa6-pr279-review/main-freshness.txt
?? .tmp-sfia-review/fa6-pr279-review/merge-pack-candidate.md
?? .tmp-sfia-review/fa6-pr279-review/post-merge-blockers.json
?? .tmp-sfia-review/fa6-pr279-review/post-merge-sensitive.txt
?? .tmp-sfia-review/fa6-pr279-review/pr-body.md
?? .tmp-sfia-review/fa6-pr279-review/pr-metadata.json
?? .tmp-sfia-review/fa6-pr279-review/remote-diff.txt
?? .tmp-sfia-review/fa6-pr279-review/review-threads.json
?? .tmp-sfia-review/fa6-pr279-review/reviews.json
?? .tmp-sfia-review/fa6-pr279-review/ruleset.json
?? .tmp-sfia-review/fa6-pr279-review/truth.txt
?? .tmp-sfia-review/fa6-reassessment/24-fa6-sections.md
?? .tmp-sfia-review/fa6-reassessment/24-full.md
?? .tmp-sfia-review/fa6-reassessment/24-headings.txt
?? .tmp-sfia-review/fa6-reassessment/33-full.md
?? .tmp-sfia-review/fa6-reassessment/33-headings.txt
?? .tmp-sfia-review/fa6-reassessment/doc-stats.txt
?? .tmp-sfia-review/fa6-reassessment/handoff-initial.txt
?? .tmp-sfia-review/fa6-reassessment/main.txt
?? .tmp-sfia-review/fa6-reassessment/prs-268-278.json
?? .tmp-sfia-review/fa6-reassessment/ruleset.json
?? .tmp-sfia-review/fa6-reassessment/truth.txt
?? .tmp-sfia-review/fa6-reassessment/ts.txt
?? .tmp-sfia-review/fa6-reassessment/workflow.yml
?? .tmp-sfia-review/final-01-scope-and-source-truth.md
?? .tmp-sfia-review/final-02-reservation-dependency-matrix.md
?? .tmp-sfia-review/final-03-authority-model-and-gaps.md
?? .tmp-sfia-review/final-04-atomicity-model-and-options.md
?? .tmp-sfia-review/final-05-r-m01-and-c1-c4-assessment.md
?? .tmp-sfia-review/final-06-morris-arbitration-pack.md
?? .tmp-sfia-review/final-README.md
?? .tmp-sfia-review/m1-apply-snapshot/00-timestamp-europe-paris.txt
?? .tmp-sfia-review/m1-apply-snapshot/01-repo-metadata-before.json
?? .tmp-sfia-review/m1-apply-snapshot/02-main-branch-before.json
?? .tmp-sfia-review/m1-apply-snapshot/03-main-protection-before.err
?? .tmp-sfia-review/m1-apply-snapshot/03-main-protection-before.json
?? .tmp-sfia-review/m1-apply-snapshot/04-rulesets-before.json
?? .tmp-sfia-review/m1-apply-snapshot/05-effective-rules-before.json
?? .tmp-sfia-review/m1-apply-snapshot/06-permissions-before.json
?? .tmp-sfia-review/m1-apply-snapshot/07-user-mcleland147.json
?? .tmp-sfia-review/m1-apply-snapshot/08-check-run-source-before.json
?? .tmp-sfia-review/m1-apply-snapshot/09-payload-final.json
?? .tmp-sfia-review/m1-apply-snapshot/10-application-timestamp.txt
?? .tmp-sfia-review/m1-apply-snapshot/11-create-raw-response.txt
?? .tmp-sfia-review/m1-apply-snapshot/11-create-stderr.txt
?? .tmp-sfia-review/m1-apply-snapshot/11-http-status.txt
?? .tmp-sfia-review/m1-apply-snapshot/12-create-response-body.json
?? .tmp-sfia-review/m1-apply-snapshot/13-ruleset-reread.json
?? .tmp-sfia-review/m1-apply-snapshot/14-rulesets-after.json
?? .tmp-sfia-review/m1-apply-snapshot/15-effective-rules-after.json
?? .tmp-sfia-review/m1-apply-snapshot/16-main-branch-after.json
?? .tmp-sfia-review/m1-apply-snapshot/17-main-protection-after.err
?? .tmp-sfia-review/m1-apply-snapshot/17-main-protection-after.json
?? .tmp-sfia-review/m1-apply-snapshot/18-origin-main-after.txt
?? .tmp-sfia-review/m1-apply-snapshot/19-workflow-blob-after.txt
?? .tmp-sfia-review/m1-bypass-behavior/branches-preserved.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-epoch.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-exit.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-mechanism.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-payload.json
?? .tmp-sfia-review/m1-bypass-behavior/bypass-stderr.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-stdout.json
?? .tmp-sfia-review/m1-bypass-behavior/bypass-window-ts.txt
?? .tmp-sfia-review/m1-bypass-behavior/cached-diff-check.txt
?? .tmp-sfia-review/m1-bypass-behavior/commit-diff-check.txt
?? .tmp-sfia-review/m1-bypass-behavior/existing-probe-branches.txt
?? .tmp-sfia-review/m1-bypass-behavior/existing-probe-prs.json
?? .tmp-sfia-review/m1-bypass-behavior/handoff-initial.txt
?? .tmp-sfia-review/m1-bypass-behavior/local-diff-check.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-final.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-initial.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-inprog.json
?? .tmp-sfia-review/m1-bypass-behavior/main-polluted.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-pre-bypass.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-queued.json
?? .tmp-sfia-review/m1-bypass-behavior/net-diff-stat.txt
?? .tmp-sfia-review/m1-bypass-behavior/net-diff-verdict.txt
?? .tmp-sfia-review/m1-bypass-behavior/net-diff.txt
?? .tmp-sfia-review/m1-bypass-behavior/neutralization-plan.md
?? .tmp-sfia-review/m1-bypass-behavior/normal-block-verdict.txt
?? .tmp-sfia-review/m1-bypass-behavior/normal-merge-exit.txt
?? .tmp-sfia-review/m1-bypass-behavior/normal-merge-stderr.txt
?? .tmp-sfia-review/m1-bypass-behavior/normal-merge-stdout.txt
?? .tmp-sfia-review/m1-bypass-behavior/open-prs-pre-bypass.json
?? .tmp-sfia-review/m1-bypass-behavior/open-prs.json
?? .tmp-sfia-review/m1-bypass-behavior/polluted-main-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/pollution-duration-seconds.txt
?? .tmp-sfia-review/m1-bypass-behavior/pollution-start-epoch.txt
?? .tmp-sfia-review/m1-bypass-behavior/pollution-start-ts.txt
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-ci-state.txt
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-match.json
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-runs.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-after-merge.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-checks-log.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-checks.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-create.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-diff.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-graphql-pre.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-number.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-status.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-after.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-checks-log.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-checks.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-create.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-diff.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-number.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-status.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert.json
?? .tmp-sfia-review/m1-bypass-behavior/pr277-timeline-slim.json
?? .tmp-sfia-review/m1-bypass-behavior/probe-absent-err.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-absent.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-base.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/probe-commit.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-file-bytes.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-file-visible.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-fuller.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-merge-sha.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-push.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-runs.json
?? .tmp-sfia-review/m1-bypass-behavior/probe-stat.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/revert-commit.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-fuller.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-exit.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-sha.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-stderr.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-stdout.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-ts.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-push.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-runs.json
?? .tmp-sfia-review/m1-bypass-behavior/revert-squash-body.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-stat.txt
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-final.json
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-initial.json
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-meta-diffs.json
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-pre-bypass.json
?? .tmp-sfia-review/m1-bypass-behavior/sfia-studio-ci.yml
?? .tmp-sfia-review/m1-bypass-behavior/truth.txt
?? .tmp-sfia-review/m1-bypass-behavior/whitespace-workflow.txt
?? .tmp-sfia-review/m1-cap-commit/33-full.md
?? .tmp-sfia-review/m1-cap-commit/commit-ec.txt
?? .tmp-sfia-review/m1-cap-commit/commit-fuller.txt
?? .tmp-sfia-review/m1-cap-commit/commit-out.txt
?? .tmp-sfia-review/m1-cap-commit/commit-ts.txt
?? .tmp-sfia-review/m1-cap-commit/commit.diff
?? .tmp-sfia-review/m1-cap-commit/diff-tree.txt
?? .tmp-sfia-review/m1-cap-commit/pre-stage-check.txt
?? .tmp-sfia-review/m1-cap-commit/pre-stage.diff
?? .tmp-sfia-review/m1-cap-commit/show-name-status.txt
?? .tmp-sfia-review/m1-cap-commit/show-stat.txt
?? .tmp-sfia-review/m1-cap-commit/staged.diff
?? .tmp-sfia-review/m1-cap-commit/staged.name-status
?? .tmp-sfia-review/m1-cap-commit/staged.numstat
?? .tmp-sfia-review/m1-cap-commit/staged.stat
?? .tmp-sfia-review/m1-cap-commit/status-final.txt
?? .tmp-sfia-review/m1-cap-commit/status-staged.txt
?? .tmp-sfia-review/m1-cap-commit/ts.txt
?? .tmp-sfia-review/m1-cap-commit/untracked-project.txt
?? .tmp-sfia-review/m1-cap-commit/wc.txt
?? .tmp-sfia-review/m1-cap-pr-body.md
?? .tmp-sfia-review/m1-cap-push-pr/33-full.md
?? .tmp-sfia-review/m1-cap-push-pr/ci-found
?? .tmp-sfia-review/m1-cap-push-pr/ci-qual.txt
?? .tmp-sfia-review/m1-cap-push-pr/ci-run-view.json
?? .tmp-sfia-review/m1-cap-push-pr/ci-run.json
?? .tmp-sfia-review/m1-cap-push-pr/commit-fuller.txt
?? .tmp-sfia-review/m1-cap-push-pr/commit.diff
?? .tmp-sfia-review/m1-cap-push-pr/github-compare.diff
?? .tmp-sfia-review/m1-cap-push-pr/ls-remote-before.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-body.md
?? .tmp-sfia-review/m1-cap-push-pr/pr-checks.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-create-ec.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-create-out.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-create-ts.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-list-before.json
?? .tmp-sfia-review/m1-cap-push-pr/pr-merge-guard.json
?? .tmp-sfia-review/m1-cap-push-pr/pr-num.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-search-33.json
?? .tmp-sfia-review/m1-cap-push-pr/pr-url.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-view.json
?? .tmp-sfia-review/m1-cap-push-pr/push-ec.txt
?? .tmp-sfia-review/m1-cap-push-pr/push-out.txt
?? .tmp-sfia-review/m1-cap-push-pr/push-ts.txt
?? .tmp-sfia-review/m1-cap-push-pr/runs.json
?? .tmp-sfia-review/m1-cap-push-pr/show-name-status.txt
?? .tmp-sfia-review/m1-cap-push-pr/show-stat.txt
?? .tmp-sfia-review/m1-cap-push-pr/ts.txt
?? .tmp-sfia-review/m1-capitalization/33-m1-implementation-and-proofs-rex.md
?? .tmp-sfia-review/m1-capitalization/discovery-paths.txt
?? .tmp-sfia-review/m1-capitalization/doc24-claims.txt
?? .tmp-sfia-review/m1-capitalization/full.diff
?? .tmp-sfia-review/m1-capitalization/option-a-files.txt
?? .tmp-sfia-review/m1-capitalization/pr-268.err
?? .tmp-sfia-review/m1-capitalization/pr-268.json
?? .tmp-sfia-review/m1-capitalization/pr-269.err
?? .tmp-sfia-review/m1-capitalization/pr-269.json
?? .tmp-sfia-review/m1-capitalization/pr-270.err
?? .tmp-sfia-review/m1-capitalization/pr-270.json
?? .tmp-sfia-review/m1-capitalization/pr-271.err
?? .tmp-sfia-review/m1-capitalization/pr-271.json
?? .tmp-sfia-review/m1-capitalization/pr-272-detail.json
?? .tmp-sfia-review/m1-capitalization/pr-272.err
?? .tmp-sfia-review/m1-capitalization/pr-272.json
?? .tmp-sfia-review/m1-capitalization/pr-273.err
?? .tmp-sfia-review/m1-capitalization/pr-273.json
?? .tmp-sfia-review/m1-capitalization/pr-274.err
?? .tmp-sfia-review/m1-capitalization/pr-274.json
?? .tmp-sfia-review/m1-capitalization/pr-275.err
?? .tmp-sfia-review/m1-capitalization/pr-275.json
?? .tmp-sfia-review/m1-capitalization/root-nums.txt
?? .tmp-sfia-review/m1-capitalization/ruleset.json
?? .tmp-sfia-review/m1-capitalization/run-30239805289.json
?? .tmp-sfia-review/m1-capitalization/run-30248284607.json
?? .tmp-sfia-review/m1-capitalization/run-30248328467.json
?? .tmp-sfia-review/m1-capitalization/run-30248480927.json
?? .tmp-sfia-review/m1-capitalization/run-30277076735.json
?? .tmp-sfia-review/m1-capitalization/run-30278533761.json
?? .tmp-sfia-review/m1-capitalization/runs-271.json
?? .tmp-sfia-review/m1-capitalization/runs-272.json
?? .tmp-sfia-review/m1-capitalization/runs-272b.json
?? .tmp-sfia-review/m1-capitalization/runs-273.json
?? .tmp-sfia-review/m1-capitalization/ts.txt
?? .tmp-sfia-review/m1-capitalization/workflow-blob.txt
?? .tmp-sfia-review/m1-capitalization/workflow-structure.txt
?? .tmp-sfia-review/m1-capitalization/worktrees.txt
?? .tmp-sfia-review/m1-closure-decision/classic.err
?? .tmp-sfia-review/m1-closure-decision/classic.exit
?? .tmp-sfia-review/m1-closure-decision/classic.json
?? .tmp-sfia-review/m1-closure-decision/effective-rules.json
?? .tmp-sfia-review/m1-closure-decision/main-branch.json
?? .tmp-sfia-review/m1-closure-decision/pr-270.json
?? .tmp-sfia-review/m1-closure-decision/pr-271.json
?? .tmp-sfia-review/m1-closure-decision/pr-272.json
?? .tmp-sfia-review/m1-closure-decision/pr-273.json
?? .tmp-sfia-review/m1-closure-decision/ruleset.json
?? .tmp-sfia-review/m1-closure-decision/rulesets-list.json
?? .tmp-sfia-review/m1-closure-decision/run-30237044632.json
?? .tmp-sfia-review/m1-closure-decision/run-30237640228.json
?? .tmp-sfia-review/m1-closure-decision/run-30238651843.json
?? .tmp-sfia-review/m1-closure-decision/run-30239805289.json
?? .tmp-sfia-review/m1-closure-decision/run-30248284607.json
?? .tmp-sfia-review/m1-closure-decision/run-30248328467.json
?? .tmp-sfia-review/m1-closure-decision/run-30248480927.json
?? .tmp-sfia-review/m1-closure-readiness/classic-protection.err
?? .tmp-sfia-review/m1-closure-readiness/classic-protection.exit
?? .tmp-sfia-review/m1-closure-readiness/classic-protection.json
?? .tmp-sfia-review/m1-closure-readiness/effective-rules.json
?? .tmp-sfia-review/m1-closure-readiness/jobs-30248284607.json
?? .tmp-sfia-review/m1-closure-readiness/jobs-30248328467.json
?? .tmp-sfia-review/m1-closure-readiness/jobs-30248480927.json
?? .tmp-sfia-review/m1-closure-readiness/log-fail-snippets.txt
?? .tmp-sfia-review/m1-closure-readiness/log-non-snippets.txt
?? .tmp-sfia-review/m1-closure-readiness/log-recovery-snippets.txt
?? .tmp-sfia-review/m1-closure-readiness/main-branch.json
?? .tmp-sfia-review/m1-closure-readiness/open-prs.json
?? .tmp-sfia-review/m1-closure-readiness/pr-270.json
?? .tmp-sfia-review/m1-closure-readiness/pr-271.json
?? .tmp-sfia-review/m1-closure-readiness/pr-272.json
?? .tmp-sfia-review/m1-closure-readiness/pr-273.json
?? .tmp-sfia-review/m1-closure-readiness/ruleset.json
?? .tmp-sfia-review/m1-closure-readiness/rulesets-list.json
?? .tmp-sfia-review/m1-closure-readiness/run-30237044632.json
?? .tmp-sfia-review/m1-closure-readiness/run-30237640228.json
?? .tmp-sfia-review/m1-closure-readiness/run-30238651843.json
?? .tmp-sfia-review/m1-closure-readiness/run-30239805289.json
?? .tmp-sfia-review/m1-closure-readiness/run-30248284607.json
?? .tmp-sfia-review/m1-closure-readiness/run-30248328467.json
?? .tmp-sfia-review/m1-closure-readiness/run-30248480927.json
?? .tmp-sfia-review/m1-closure-readiness/workflow.yml
?? .tmp-sfia-review/m1-controlled-pr-closure/00-timestamp-before.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/01-pr272-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/02-pr273-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/03-pr272-rest-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/04-pr273-rest-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/10-ruleset-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/11-rulesets-list-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/12-effective-rules-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/13-main-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/14-classic-protection-before.err
?? .tmp-sfia-review/m1-controlled-pr-closure/14-classic-protection-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/20-close-272-exit.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/20-close-272-out.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/21-pr272-after-gh.json
?? .tmp-sfia-review/m1-controlled-pr-closure/22-pr272-rest-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/23-non-local-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/24-non-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/25-run-non-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/30-close-273-exit.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/30-close-273-out.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/31-pr273-after-gh.json
?? .tmp-sfia-review/m1-controlled-pr-closure/32-pr273-rest-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/33-stu-local-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/34-stu-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/35-run-fail-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/36-run-recovery-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/40-ruleset-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/41-rulesets-list-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/42-effective-rules-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/43-main-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/44-classic-protection-after.err
?? .tmp-sfia-review/m1-controlled-pr-closure/44-classic-protection-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/45-origin-main-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/46-workflow-blob-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/47-remote-heads-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/48-local-branches-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/49-worktrees-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/run-30248284607.json
?? .tmp-sfia-review/m1-controlled-pr-closure/run-30248328467.json
?? .tmp-sfia-review/m1-controlled-pr-closure/run-30248480927.json
?? .tmp-sfia-review/m1-controlled-pr-proof/00-timestamp-before.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/01-ruleset-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/02-rulesets-list-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/03-effective-rules-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/04-main-branch-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/05-classic-protection-before.err
?? .tmp-sfia-review/m1-controlled-pr-proof/05-classic-protection-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/10-non-studio-commit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/10-non-studio-pr-url.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/20-studio-diff-check-exit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/20-studio-diff-check-expected-fail.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/21-studio-commit-out.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/21-studio-fail-commit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/21-studio-pr-url.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/30-non-studio-essential-logs.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/31-studio-fail-essential-logs.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/32-pr272-api.json
?? .tmp-sfia-review/m1-controlled-pr-proof/33-pr273-api-fail.json
?? .tmp-sfia-review/m1-controlled-pr-proof/34-pr272-commit-status.json
?? .tmp-sfia-review/m1-controlled-pr-proof/35-pr273-fail-commit-status.json
?? .tmp-sfia-review/m1-controlled-pr-proof/36-pr273-fail-gate-check.json
?? .tmp-sfia-review/m1-controlled-pr-proof/37-bypass-visibility.json
?? .tmp-sfia-review/m1-controlled-pr-proof/40-studio-fix-commit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/40-studio-fix-diff.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/41-pr273-recovery.json
?? .tmp-sfia-review/m1-controlled-pr-proof/42-studio-recovery-run-id.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/43-studio-recovery-essential-logs.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/44-pr273-recovery-final.json
?? .tmp-sfia-review/m1-controlled-pr-proof/45-pr273-api-recovery.json
?? .tmp-sfia-review/m1-controlled-pr-proof/50-ruleset-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/51-rulesets-list-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/52-effective-rules-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/53-main-branch-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/54-classic-protection-after.err
?? .tmp-sfia-review/m1-controlled-pr-proof/54-classic-protection-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/55-origin-main-after.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/56-workflow-blob-after.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/57-pr272-final.json
?? .tmp-sfia-review/m1-controlled-pr-proof/58-pr273-final.json
?? .tmp-sfia-review/m1-controlled-pr-proof/60-non-studio-file.md
?? .tmp-sfia-review/m1-controlled-pr-proof/61-studio-file-fixed.md
?? .tmp-sfia-review/m1-controlled-pr-proof/62-studio-file-fail.md
?? .tmp-sfia-review/m1-controlled-pr-proof/run-30248284607.json
?? .tmp-sfia-review/m1-controlled-pr-proof/run-30248328467.json
?? .tmp-sfia-review/m1-controlled-pr-proof/run-30248480927.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/00-timestamp-before.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/01-pr272-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/02-pr273-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/10-ruleset-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/11-rulesets-list-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/12-effective-rules-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/13-main-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/14-worktrees-before.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/15-non-local-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/16-stu-local-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/17-non-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/18-stu-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/19-non-wt-status.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/20-stu-wt-status.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/21-log-non.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/22-log-fail.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/23-log-recovery.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/30-non-studio-cleanup-log.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/31-non-wt-remove.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/31-non-wt-remove.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/31-non-wt-remove.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/32-non-local-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/32-non-local-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/32-non-local-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/33-non-remote-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/33-non-remote-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/33-non-remote-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/34-non-fetch-prune.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/34-non-fetch-prune.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/34-non-fetch-prune.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/35-pr272-after-non-cleanup.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/36-run-non-after-non-cleanup.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/40-studio-cleanup-log.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/41-stu-wt-remove.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/41-stu-wt-remove.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/41-stu-wt-remove.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/42-stu-local-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/42-stu-local-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/42-stu-local-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/43-stu-remote-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/43-stu-remote-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/43-stu-remote-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/44-stu-fetch-prune.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/44-stu-fetch-prune.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/44-stu-fetch-prune.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/45-local-proof-branches-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/50-pr272-final.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/51-pr273-final.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/60-ruleset-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/61-rulesets-list-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/62-effective-rules-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/63-main-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/64-origin-main-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/65-workflow-blob-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/66-worktrees-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/final-run-30248284607.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/final-run-30248328467.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/final-run-30248480927.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/run-30248284607.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/run-30248328467.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/run-30248480927.json
?? .tmp-sfia-review/m1-fa6-commit/cached-check.txt
?? .tmp-sfia-review/m1-fa6-commit/cached-diff.txt
?? .tmp-sfia-review/m1-fa6-commit/cached-name-status.txt
?? .tmp-sfia-review/m1-fa6-commit/cached-stat.txt
?? .tmp-sfia-review/m1-fa6-commit/commit-full-diff.txt
?? .tmp-sfia-review/m1-fa6-commit/commit-show-full.txt
?? .tmp-sfia-review/m1-fa6-commit/commit.err
?? .tmp-sfia-review/m1-fa6-commit/commit.exit
?? .tmp-sfia-review/m1-fa6-commit/commit.out
?? .tmp-sfia-review/m1-fa6-commit/diff-check.txt
?? .tmp-sfia-review/m1-fa6-commit/diff-parent-check.txt
?? .tmp-sfia-review/m1-fa6-commit/diff-tree.txt
?? .tmp-sfia-review/m1-fa6-commit/diff-vs-origin-main.diff
?? .tmp-sfia-review/m1-fa6-commit/head-doc24.md
?? .tmp-sfia-review/m1-fa6-commit/local-doc24.md
?? .tmp-sfia-review/m1-fa6-commit/log-fuller.txt
?? .tmp-sfia-review/m1-fa6-commit/metier-diff-post-commit.diff
?? .tmp-sfia-review/m1-fa6-commit/new-head.txt
?? .tmp-sfia-review/m1-fa6-commit/option-a-files.txt
?? .tmp-sfia-review/m1-fa6-commit/origin-main-doc24.md
?? .tmp-sfia-review/m1-fa6-commit/parent.txt
?? .tmp-sfia-review/m1-fa6-commit/show-check.txt
?? .tmp-sfia-review/m1-fa6-commit/show-name-status.txt
?? .tmp-sfia-review/m1-fa6-commit/show-stat.txt
?? .tmp-sfia-review/m1-fa6-commit/status-staged.txt
?? .tmp-sfia-review/m1-fa6-formalization/after-full.md
?? .tmp-sfia-review/m1-fa6-formalization/before-full.md
?? .tmp-sfia-review/m1-fa6-formalization/diff-check.txt
?? .tmp-sfia-review/m1-fa6-formalization/diff-vs-origin-main.diff
?? .tmp-sfia-review/m1-fa6-formalization/mitigation-timestamp.txt
?? .tmp-sfia-review/m1-fa6-formalization/section-after.md
?? .tmp-sfia-review/m1-fa6-formalization/section-before.md
?? .tmp-sfia-review/m1-fa6-pr/commits-on-head-only.txt
?? .tmp-sfia-review/m1-fa6-pr/diff-stat.txt
?? .tmp-sfia-review/m1-fa6-pr/gh-compare-summary.json
?? .tmp-sfia-review/m1-fa6-pr/head-doc24.md
?? .tmp-sfia-review/m1-fa6-pr/left-right.txt
?? .tmp-sfia-review/m1-fa6-pr/log-left-right.txt
?? .tmp-sfia-review/m1-fa6-pr/main-doc24.md
?? .tmp-sfia-review/m1-fa6-pr/merge-base.txt
?? .tmp-sfia-review/m1-fa6-pr/metier-single-file.diff
?? .tmp-sfia-review/m1-fa6-pr/name-status.txt
?? .tmp-sfia-review/m1-fa6-pr/ruleset.json
?? .tmp-sfia-review/m1-fa6-push/diff-check.txt
?? .tmp-sfia-review/m1-fa6-push/diff-tree.txt
?? .tmp-sfia-review/m1-fa6-push/head-doc24.md
?? .tmp-sfia-review/m1-fa6-push/ls-remote-after.txt
?? .tmp-sfia-review/m1-fa6-push/metier-diff.diff
?? .tmp-sfia-review/m1-fa6-push/open-prs-after.json
?? .tmp-sfia-review/m1-fa6-push/origin-main-doc24.md
?? .tmp-sfia-review/m1-fa6-push/prs-after.json
?? .tmp-sfia-review/m1-fa6-push/prs-for-branch.json
?? .tmp-sfia-review/m1-fa6-push/push.err
?? .tmp-sfia-review/m1-fa6-push/push.exit
?? .tmp-sfia-review/m1-fa6-push/push.out
?? .tmp-sfia-review/m1-fa6-push/remote-after.txt
?? .tmp-sfia-review/m1-fa6-push/remote-before.txt
?? .tmp-sfia-review/m1-fa6-push/remote-commit.json
?? .tmp-sfia-review/m1-fa6-push/remote-doc24.md
?? .tmp-sfia-review/m1-fa6-push/remote-file-meta.json
?? .tmp-sfia-review/m1-fa6-push/ruleset-after.json
?? .tmp-sfia-review/m1-fa6-push/ruleset-before.json
?? .tmp-sfia-review/m1-fa6-push/runs-branch.json
?? .tmp-sfia-review/m1-fa6-push/show-check.txt
?? .tmp-sfia-review/m1-fa6-push/show-name-status.txt
?? .tmp-sfia-review/m1-fa6-push/show-stat.txt
?? .tmp-sfia-review/m1-fa6-push/status-after.txt
?? .tmp-sfia-review/m1-pr276-merge/33-full.md
?? .tmp-sfia-review/m1-pr276-merge/33-on-main.md
?? .tmp-sfia-review/m1-pr276-merge/blob-main.txt
?? .tmp-sfia-review/m1-pr276-merge/ci-post-list.json
?? .tmp-sfia-review/m1-pr276-merge/ci-post-run.json
?? .tmp-sfia-review/m1-pr276-merge/ci-post-state.txt
?? .tmp-sfia-review/m1-pr276-merge/ci-pr.json
?? .tmp-sfia-review/m1-pr276-merge/lines-main.txt
?? .tmp-sfia-review/m1-pr276-merge/local-branch.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-cmd.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-exit.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-stderr.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-stdout.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-ts.txt
?? .tmp-sfia-review/m1-pr276-merge/pr-after.json
?? .tmp-sfia-review/m1-pr276-merge/pr-before.json
?? .tmp-sfia-review/m1-pr276-merge/pr-body-before.md
?? .tmp-sfia-review/m1-pr276-merge/pr-diff-before.txt
?? .tmp-sfia-review/m1-pr276-merge/pr-threads.json
?? .tmp-sfia-review/m1-pr276-merge/remote-branch.txt
?? .tmp-sfia-review/m1-pr276-merge/ruleset.json
?? .tmp-sfia-review/m1-pr276-merge/source-diff.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-body.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-diff-clean.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-diff.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-fuller.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-log-fuller.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-message.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-sha.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-stat.txt
?? .tmp-sfia-review/m1-pr276-merge/ts.txt
?? .tmp-sfia-review/m1-pr276-merge/worktree.txt
?? .tmp-sfia-review/m1-pr276-merge/worktrees.txt
?? .tmp-sfia-review/m1-pr276-postmerge/33-on-main.md
?? .tmp-sfia-review/m1-pr276-postmerge/ci-post.json
?? .tmp-sfia-review/m1-pr276-postmerge/diff-cmp.txt
?? .tmp-sfia-review/m1-pr276-postmerge/handoff-initial.txt
?? .tmp-sfia-review/m1-pr276-postmerge/lines-main.txt
?? .tmp-sfia-review/m1-pr276-postmerge/main-advanced.txt
?? .tmp-sfia-review/m1-pr276-postmerge/main-now.txt
?? .tmp-sfia-review/m1-pr276-postmerge/pr-after.json
?? .tmp-sfia-review/m1-pr276-postmerge/pr-body.md
?? .tmp-sfia-review/m1-pr276-postmerge/pr-threads.json
?? .tmp-sfia-review/m1-pr276-postmerge/remote-branch.txt
?? .tmp-sfia-review/m1-pr276-postmerge/ruleset-loose.json
?? .tmp-sfia-review/m1-pr276-postmerge/ruleset.json
?? .tmp-sfia-review/m1-pr276-postmerge/source-diff.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-check.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-diff-check.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-diff.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-fuller.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-message.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-name-status.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-parent.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-stat.txt
?? .tmp-sfia-review/m1-pr276-postmerge/truth.txt
?? .tmp-sfia-review/m1-pr276-postmerge/ts.txt
?? .tmp-sfia-review/m1-pr276-postmerge/worktrees.txt
?? .tmp-sfia-review/m1-pr276-readiness/33-full.md
?? .tmp-sfia-review/m1-pr276-readiness/blockers.txt
?? .tmp-sfia-review/m1-pr276-readiness/bypass.json
?? .tmp-sfia-review/m1-pr276-readiness/ci-run.json
?? .tmp-sfia-review/m1-pr276-readiness/commit-fuller.txt
?? .tmp-sfia-review/m1-pr276-readiness/commit.diff
?? .tmp-sfia-review/m1-pr276-readiness/github.diff
?? .tmp-sfia-review/m1-pr276-readiness/local.diff
?? .tmp-sfia-review/m1-pr276-readiness/pr-body.md
?? .tmp-sfia-review/m1-pr276-readiness/pr-threads.json
?? .tmp-sfia-review/m1-pr276-readiness/pr-view.json
?? .tmp-sfia-review/m1-pr276-readiness/reserves.txt
?? .tmp-sfia-review/m1-pr276-readiness/ruleset-summary.txt
?? .tmp-sfia-review/m1-pr276-readiness/ruleset.json
?? .tmp-sfia-review/m1-pr276-readiness/show-name-status.txt
?? .tmp-sfia-review/m1-pr276-readiness/show-stat.txt
?? .tmp-sfia-review/m1-pr276-readiness/ts.txt
?? .tmp-sfia-review/m1-ruleset-rollback/actor.json
?? .tmp-sfia-review/m1-ruleset-rollback/audit-ec.txt
?? .tmp-sfia-review/m1-ruleset-rollback/audit-log-attempt.json
?? .tmp-sfia-review/m1-ruleset-rollback/audit-log-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/auth-user.json
?? .tmp-sfia-review/m1-ruleset-rollback/bypass-config.json
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-after.json
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-after.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-before.json
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-before.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/disable-cmd.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-duration-seconds.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-epoch.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-exit.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-stdout.json
?? .tmp-sfia-review/m1-ruleset-rollback/disable-ts.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-verdict.txt
?? .tmp-sfia-review/m1-ruleset-rollback/doc33-lines.txt
?? .tmp-sfia-review/m1-ruleset-rollback/graph-ec.txt
?? .tmp-sfia-review/m1-ruleset-rollback/graphql-bypass-fields.json
?? .tmp-sfia-review/m1-ruleset-rollback/graphql-bypass-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/handoff-initial.txt
?? .tmp-sfia-review/m1-ruleset-rollback/main-after.txt
?? .tmp-sfia-review/m1-ruleset-rollback/main-before.txt
?? .tmp-sfia-review/m1-ruleset-rollback/main-runs.json
?? .tmp-sfia-review/m1-ruleset-rollback/merges-during-window.json
?? .tmp-sfia-review/m1-ruleset-rollback/open-prs-after.json
?? .tmp-sfia-review/m1-ruleset-rollback/open-prs.json
?? .tmp-sfia-review/m1-ruleset-rollback/payload-diff.txt
?? .tmp-sfia-review/m1-ruleset-rollback/pre-disable-activity.txt
?? .tmp-sfia-review/m1-ruleset-rollback/recent-merges.json
?? .tmp-sfia-review/m1-ruleset-rollback/remote-branch.txt
?? .tmp-sfia-review/m1-ruleset-rollback/repo-perms.json
?? .tmp-sfia-review/m1-ruleset-rollback/restore-cmd.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-epoch.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-exit.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-stdout.json
?? .tmp-sfia-review/m1-ruleset-rollback/restore-ts.txt
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-after.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-before.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-disable.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-restore.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-after.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-before.keys.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-before.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-disabled.json
?? .tmp-sfia-review/m1-ruleset-rollback/server-meta-diffs.json
?? .tmp-sfia-review/m1-ruleset-rollback/truth.txt
?? .tmp-sfia-review/m1-ruleset-rollback/ts-end.txt
?? .tmp-sfia-review/m1-ruleset-rollback/ts-start.txt
?? .tmp-sfia-review/main-01-a5-2-documentary-closure.md
?? .tmp-sfia-review/main-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/main-03-open-reserves-and-gates.md
?? .tmp-sfia-review/main-04-sequencing-options.md
?? .tmp-sfia-review/main-05-morris-decision-pack.md
?? .tmp-sfia-review/main-README.md
?? .tmp-sfia-review/nd-final-01-a5-2-documentary-closure.md
?? .tmp-sfia-review/nd-final-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/nd-final-03-open-reserves-and-gates.md
?? .tmp-sfia-review/nd-final-04-sequencing-options.md
?? .tmp-sfia-review/nd-final-05-morris-decision-pack.md
?? .tmp-sfia-review/nd-final-README.md
?? .tmp-sfia-review/ops1-i5-real-execution-evidence.json
?? .tmp-sfia-review/ops1-i5-real-postcheck.txt
?? .tmp-sfia-review/ops1-i5-real-run.ts
?? .tmp-sfia-review/ops1-i7-evidence/00-baseline-meta.txt
?? .tmp-sfia-review/ops1-i7-evidence/01-ready-for-morris.txt
?? .tmp-sfia-review/ops1-i7-evidence/02-closure-with-structural-reserve.txt
?? .tmp-sfia-review/ops1-i7-evidence/screenshots/ops1-i7-00-studio-ready-no-session.png
?? .tmp-sfia-review/option-a-post-fa6/all-sfia-files.txt
?? .tmp-sfia-review/option-a-post-fa6/ci-post-fa6-jobs.json
?? .tmp-sfia-review/option-a-post-fa6/ci-post-fa6.json
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_23-next-option-a-step-after-t-a6.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_24-ci-and-merge-governance-preparation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_30-ci-governance-pr-post-correction-review.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_31-ci-governance-post-merge-review.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_32-path-aware-required-check-and-main-protection-preparation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_33-m1-implementation-and-proofs-rex.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a0-doctrine-foundation_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a1-project-lps-foundation_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a2-cycle-trajectory-epistemic-ckc_07-validation-findings-and-morris-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a2-cycle-trajectory-epistemic-ckc_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a3-decision-confirmation-authority_07-validation-findings-and-morris-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a3-decision-confirmation-authority_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a4-execution-contract-governance_10-runtime-validation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a4-execution-contract-governance_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a5-agent-selection-execution_09-runtime-foundation-validation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a5-agent-selection-execution_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a6-evidence-review-claims-maturity_19-next-step-framing.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a6-evidence-review-claims-maturity_22-post-merge-review.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a6-evidence-review-claims-maturity_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_10-functional-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_functional-architecture_10-functional-architecture-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_functional-architecture_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_ux-ui_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-modeled_v3-native-option-a_12-modeled-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-modeled_v3-native-option-a_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_10-resilience-performance-observability-and-run-architecture.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_11-legacy-isolation-migration-and-cutover-architecture.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_12-delivery-slices-dependencies-and-technical-gates.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_13-technical-architecture-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_README.md
?? .tmp-sfia-review/option-a-post-fa6/extracted-manifest.txt
?? .tmp-sfia-review/option-a-post-fa6/f-ci-search.txt
?? .tmp-sfia-review/option-a-post-fa6/handoff-initial.txt
?? .tmp-sfia-review/option-a-post-fa6/key-search.txt
?? .tmp-sfia-review/option-a-post-fa6/main-commit.txt
?? .tmp-sfia-review/option-a-post-fa6/modeled-test-files.txt
?? .tmp-sfia-review/option-a-post-fa6/oa-import-files.txt
?? .tmp-sfia-review/option-a-post-fa6/oa-runtime-files.txt
?? .tmp-sfia-review/option-a-post-fa6/oa-test-files.txt
?? .tmp-sfia-review/option-a-post-fa6/option-a-files.txt
?? .tmp-sfia-review/option-a-post-fa6/pr-254.json
?? .tmp-sfia-review/option-a-post-fa6/pr-255.json
?? .tmp-sfia-review/option-a-post-fa6/pr-260.json
?? .tmp-sfia-review/option-a-post-fa6/pr-261.json
?? .tmp-sfia-review/option-a-post-fa6/pr-262.json
?? .tmp-sfia-review/option-a-post-fa6/pr-263.json
?? .tmp-sfia-review/option-a-post-fa6/pr-264.json
?? .tmp-sfia-review/option-a-post-fa6/pr-265.json
?? .tmp-sfia-review/option-a-post-fa6/pr-266.json
?? .tmp-sfia-review/option-a-post-fa6/pr-267.json
?? .tmp-sfia-review/option-a-post-fa6/pr-268.json
?? .tmp-sfia-review/option-a-post-fa6/pr-269.json
?? .tmp-sfia-review/option-a-post-fa6/pr-270.json
?? .tmp-sfia-review/option-a-post-fa6/pr-271.json
?? .tmp-sfia-review/option-a-post-fa6/pr-274.json
?? .tmp-sfia-review/option-a-post-fa6/pr-275.json
?? .tmp-sfia-review/option-a-post-fa6/pr-276.json
?? .tmp-sfia-review/option-a-post-fa6/pr-279.json
?? .tmp-sfia-review/option-a-post-fa6/pr-structural-summary.txt
?? .tmp-sfia-review/option-a-post-fa6/ruleset.json
?? .tmp-sfia-review/option-a-post-fa6/sfia-studio-ci.yml
?? .tmp-sfia-review/option-a-post-fa6/trajectory-summary.json
?? .tmp-sfia-review/option-a-post-fa6/truth.txt
?? .tmp-sfia-review/option-a-post-fa6/workflow-blob.txt
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-01-intention.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-02-lps.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-03-decision.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-04-n2.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-05-n3.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-06-contract.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-07-execution.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-08-evidence-incomplete.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-09-reviewbundle.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-10-doctrine-error.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-11-mobile.png
?? .tmp-sfia-review/pm-final-01-scope-and-source-truth.md
?? .tmp-sfia-review/pm-final-02-reservation-dependency-matrix.md
?? .tmp-sfia-review/pm-final-03-authority-model-and-gaps.md
?? .tmp-sfia-review/pm-final-04-atomicity-model-and-options.md
?? .tmp-sfia-review/pm-final-05-r-m01-and-c1-c4-assessment.md
?? .tmp-sfia-review/pm-final-06-morris-arbitration-pack.md
?? .tmp-sfia-review/pm-final-README.md
?? .tmp-sfia-review/post-merge-260/at-13.md
?? .tmp-sfia-review/post-merge-260/fa-10.md
?? .tmp-sfia-review/post-merge-260/fd-10.md
?? .tmp-sfia-review/post-merge-260/m-12.md
?? .tmp-sfia-review/post-merge-260/modeled/01-modeling-principles-and-aggregate-boundaries.md
?? .tmp-sfia-review/post-merge-260/modeled/02-core-entities-value-objects-and-identifiers.md
?? .tmp-sfia-review/post-merge-260/modeled/03-living-project-state-model.md
?? .tmp-sfia-review/post-merge-260/modeled/04-doctrine-package-and-ckc-model.md
?? .tmp-sfia-review/post-merge-260/modeled/05-cycle-trajectory-and-epistemic-model.md
?? .tmp-sfia-review/post-merge-260/modeled/06-decision-confirmation-and-authority-model.md
?? .tmp-sfia-review/post-merge-260/modeled/07-execution-contract-attempt-and-agent-model.md
?? .tmp-sfia-review/post-merge-260/modeled/08-evidence-review-bundle-maturity-and-debt-model.md
?? .tmp-sfia-review/post-merge-260/modeled/09-command-event-error-and-transition-catalog.md
?? .tmp-sfia-review/post-merge-260/modeled/10-validation-versioning-provenance-and-security-rules.md
?? .tmp-sfia-review/post-merge-260/modeled/11-existing-models-reuse-and-migration-map.md
?? .tmp-sfia-review/post-merge-260/modeled/12-modeled-validation-and-decision-pack.md
?? .tmp-sfia-review/post-merge-260/modeled/README.md
?? .tmp-sfia-review/post-merge-260/modeled/examples/confirmation-n2.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/confirmation-n3.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/contradiction-blocking.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/doctrine-package-manifest.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/error-doctrine-unresolved.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/evidence-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/execution-attempt-timeout.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/execution-contract.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/human-decision-with-reservations.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/invalid/execution-contract.missing-authority.invalid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/invalid/human-decision.chat-only.invalid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/invalid/review-bundle.synthesis-as-complete.invalid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/lps-after-clarification.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/maturity-assessment-modeled.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/project-lps-initial.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/review-bundle-complete.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/review-bundle-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/trajectory-candidate.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/audit/audit-event.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/actor-reference.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/digest.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/identifier.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/provenance-record.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/timestamp.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/cycle/cycle-instance.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/cycle/project-trajectory.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/decision/confirmation.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/decision/human-decision.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/doctrine/ckc-resolution.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/doctrine/doctrine-package-manifest.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/doctrine/doctrine-package-ref.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/epistemic/epistemic-item.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/error/error-record.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/evidence/evidence.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/evidence/review-bundle.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/execution/execution-attempt.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/maturity/maturity-assessment.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/project/living-project-state.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/project/project.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/01-modeling-principles-and-aggregate-boundaries.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/02-core-entities-value-objects-and-identifiers.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/03-living-project-state-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/04-doctrine-package-and-ckc-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/05-cycle-trajectory-and-epistemic-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/06-decision-confirmation-and-authority-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/07-execution-contract-attempt-and-agent-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/10-validation-versioning-provenance-and-security-rules.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/11-existing-models-reuse-and-migration-map.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/12-modeled-validation-and-decision-pack.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/README.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/confirmation-n2.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/confirmation-n3.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/contradiction-blocking.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/doctrine-package-manifest.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/error-doctrine-unresolved.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-timeout.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-contract.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/human-decision-with-reservations.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-contract.missing-authority.invalid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/human-decision.chat-only.invalid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.synthesis-as-complete.invalid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/lps-after-clarification.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-modeled.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/project-lps-initial.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-complete.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/trajectory-candidate.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/audit/audit-event.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/actor-reference.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/digest.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/identifier.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/provenance-record.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/timestamp.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/cycle/cycle-instance.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/cycle/project-trajectory.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/decision/confirmation.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/decision/human-decision.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/doctrine/ckc-resolution.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/doctrine/doctrine-package-manifest.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/doctrine/doctrine-package-ref.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/error/error-record.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/evidence.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/review-bundle.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-attempt.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/maturity/maturity-assessment.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/project/living-project-state.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/project/project.schema.json
?? .tmp-sfia-review/post-merge-260/oa-readme.md
?? .tmp-sfia-review/post-merge-260/ux-09.md
?? .tmp-sfia-review/post-merge-260/ux-10.md
?? .tmp-sfia-review/post-merge-proofs/04-ops1-i5-execution-proof.md
?? .tmp-sfia-review/post-merge-proofs/05-ops1-i5-manual-ui-proof.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-final-01-scope-and-source-truth.md
?? .tmp-sfia-review/pr-final-02-reservation-dependency-matrix.md
?? .tmp-sfia-review/pr-final-03-authority-model-and-gaps.md
?? .tmp-sfia-review/pr-final-04-atomicity-model-and-options.md
?? .tmp-sfia-review/pr-final-05-r-m01-and-c1-c4-assessment.md
?? .tmp-sfia-review/pr-final-06-morris-arbitration-pack.md
?? .tmp-sfia-review/pr-final-README.md
?? .tmp-sfia-review/pr-readiness-artifacts-i6/created-files-full.txt
?? .tmp-sfia-review/pr-readiness-artifacts-i6/created-files-list.txt
?? .tmp-sfia-review/pr-readiness-artifacts-i6/modified-files.diff
?? .tmp-sfia-review/pr-readiness-artifacts-i6/modified-files.diff.stat
?? .tmp-sfia-review/pr-readiness-artifacts/created-files-full.txt
?? .tmp-sfia-review/pr-readiness-artifacts/exclude-local.txt
?? .tmp-sfia-review/pr-readiness-artifacts/include-candidates.txt
?? .tmp-sfia-review/pr-readiness-artifacts/modified-files.diff
?? .tmp-sfia-review/pr-readiness-artifacts/readiness-lint-fixes.diff
?? .tmp-sfia-review/pr286-run.json
?? .tmp-sfia-review/readme-after.md
?? .tmp-sfia-review/readme-before.md
?? .tmp-sfia-review/readme-correction.diff
?? .tmp-sfia-review/rec-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/rec-03-open-reserves-and-gates.md
?? .tmp-sfia-review/rec-04-sequencing-options.md
?? .tmp-sfia-review/rec-05-morris-decision-pack.md
?? .tmp-sfia-review/rec-README.md
?? .tmp-sfia-review/rev-01-a5-2-documentary-closure.md
?? .tmp-sfia-review/rev-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/rev-03-open-reserves-and-gates.md
?? .tmp-sfia-review/rev-04-sequencing-options.md
?? .tmp-sfia-review/rev-05-morris-decision-pack.md
?? .tmp-sfia-review/rev-README.md
?? .tmp-sfia-review/ruleset-19798462-after.json
?? .tmp-sfia-review/ruleset-19798462-before.json
?? .tmp-sfia-review/ruleset-19798462-disable.json
?? .tmp-sfia-review/ruleset-19798462-restore.json
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/creer-manuellement-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1024.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/workspace-reprendre-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1024.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1280.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1728.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-draft-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-empty-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-feedback-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-resume-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/manual-advanced-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/viewport-metrics.json
?? .tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/clarification-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/error-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1024.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1280.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1728.png
?? .tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/no-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/create-success-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/new-project-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/viewport-metrics.json
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-home-1440.png
?? .tmp-sfia-review/screenshots-d1-intake/empty-1440.png
?? .tmp-sfia-review/screenshots-d1-intake/manual-1440.png
?? .tmp-sfia-review/screenshots-d1-intake/routing-1024.png
?? .tmp-sfia-review/screenshots-d1-intake/routing-1440.png
?? .tmp-sfia-review/screenshots-d1-ux/figma-cockpit-1440.png
?? .tmp-sfia-review/screenshots-d1-ux/figma-cockpit-1728.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1024.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1280.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1440.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1728.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-metrics.json
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-after-reload.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-empty.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-open-journal.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-after-reload-locked.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-fixture-locked.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-global-badge-fixture.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-global-badge-test-provider.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-live-ready.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-live-unavailable.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-mode-change-refused.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-mode-selection.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-multiturn.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-provider-error.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-test-provider-non-live.png
?? .tmp-sfia-review/screenshots-ops1-i3/01-action-not-required.png
?? .tmp-sfia-review/screenshots-ops1-i3/02-candidate-proposed-unauthorized.png
?? .tmp-sfia-review/screenshots-ops1-i3/03-gate-four-actions.png
?? .tmp-sfia-review/screenshots-ops1-i3/04-go-validated-not-executed.png
?? .tmp-sfia-review/screenshots-ops1-i3/05-after-reload.png
?? .tmp-sfia-review/screenshots-ops1-i3/06-corriger-refinement.png
?? .tmp-sfia-review/screenshots-ops1-i4/01-allowlist-valid.png
?? .tmp-sfia-review/screenshots-ops1-i4/02-deny-modify-03.png
?? .tmp-sfia-review/screenshots-ops1-i4/03-deny-wildcard.png
?? .tmp-sfia-review/screenshots-ops1-i4/04-deny-unlisted-campus360-markdown.png
?? .tmp-sfia-review/screenshots-ops1-i5/01-contract-no-go.png
?? .tmp-sfia-review/screenshots-ops1-i5/02-fixture-succeeded.png
?? .tmp-sfia-review/screenshots-ops1-i5/03-microcopies.png
?? .tmp-sfia-review/screenshots-ops1-i5/figma-61-536-execution-cursor.png
?? .tmp-sfia-review/screenshots-ops1-i6/01-report-completed-resume.png
?? .tmp-sfia-review/screenshots-ops1-i6/02-report-status.png
?? .tmp-sfia-review/screenshots-ops1-i6/03-continuation.png
?? .tmp-sfia-review/screenshots/p0-00c-nouvelle-demande-runtime.png
?? .tmp-sfia-review/screenshots/p0-01c-synthese-runtime.png
?? .tmp-sfia-review/screenshots/p0-02c-cycle-actif-runtime.png
?? .tmp-sfia-review/screenshots/p0-03c-decision-runtime.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/01-sfia-context-loaded.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/02-sfia-proposal-compiled.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/03-sfia-action-candidate-live.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/04-sfia-sources-digests.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/05-sfia-forbidden-ops-denied.png
?? .tmp-sfia-review/t-a7-accel-cumul.stat
?? .tmp-sfia-review/t-a7-accel-main.diff
?? .tmp-sfia-review/t-a7-correction/before/01-framing-and-scope.md
?? .tmp-sfia-review/t-a7-correction/before/02-t-a7-cutover-preconditions.md
?? .tmp-sfia-review/t-a7-correction/before/03-t-a6-and-option-a-completion-criteria.md
?? .tmp-sfia-review/t-a7-correction/before/04-reservations-risks-and-stop-conditions.md
?? .tmp-sfia-review/t-a7-correction/before/05-morris-decision-pack.md
?? .tmp-sfia-review/t-a7-correction/before/README.md
?? .tmp-sfia-review/t-a7-correction/blobs-final.txt
?? .tmp-sfia-review/t-a7-correction/commit.diff
?? .tmp-sfia-review/t-a7-correction/parent.txt
?? .tmp-sfia-review/t-a7-correction/show-fuller.txt
?? .tmp-sfia-review/t-a7-correction/truth.txt
?? .tmp-sfia-review/t-a7-d0x-record.diff
?? .tmp-sfia-review/t-a7-decide-session/truth.txt
?? .tmp-sfia-review/t-a7-decision-record/before/01-framing-and-scope.md
?? .tmp-sfia-review/t-a7-decision-record/before/02-t-a7-cutover-preconditions.md
?? .tmp-sfia-review/t-a7-decision-record/before/03-t-a6-and-option-a-completion-criteria.md
?? .tmp-sfia-review/t-a7-decision-record/before/04-reservations-risks-and-stop-conditions.md
?? .tmp-sfia-review/t-a7-decision-record/before/05-morris-decision-pack.md
?? .tmp-sfia-review/t-a7-decision-record/before/README.md
?? .tmp-sfia-review/t-a7-decision-record/blobs.txt
?? .tmp-sfia-review/t-a7-decision-record/commit.diff
?? .tmp-sfia-review/t-a7-decision-record/show.txt
?? .tmp-sfia-review/t-a7-decision-record/truth.txt
?? .tmp-sfia-review/t-a7-framing-review/blob-check.txt
?? .tmp-sfia-review/t-a7-framing-review/commit.diff
?? .tmp-sfia-review/t-a7-framing-review/diff-name-status.txt
?? .tmp-sfia-review/t-a7-framing-review/diff-stat.txt
?? .tmp-sfia-review/t-a7-framing-review/show-check.txt
?? .tmp-sfia-review/t-a7-framing-review/show-fuller.txt
?? .tmp-sfia-review/t-a7-framing-review/truth-final.txt
?? .tmp-sfia-review/t-a7-framing-review/truth.txt
?? .tmp-sfia-review/t-a7-framing/commit-blobs.txt
?? .tmp-sfia-review/t-a7-framing/commit-fuller.txt
?? .tmp-sfia-review/t-a7-framing/commit-name-status.txt
?? .tmp-sfia-review/t-a7-framing/commit-parent.txt
?? .tmp-sfia-review/t-a7-framing/commit-show.txt
?? .tmp-sfia-review/t-a7-framing/commit-stat.txt
?? .tmp-sfia-review/t-a7-framing/commit.diff
?? .tmp-sfia-review/t-a7-framing/created-files.txt
?? .tmp-sfia-review/t-a7-framing/delivery-dirs.txt
?? .tmp-sfia-review/t-a7-framing/local-only-commits.txt
?? .tmp-sfia-review/t-a7-framing/source-blobs.txt
?? .tmp-sfia-review/t-a7-framing/staged-name-status.txt
?? .tmp-sfia-review/t-a7-framing/status-final.txt
?? .tmp-sfia-review/t-a7-framing/truth.txt
?? .tmp-sfia-review/t-a7-framing/worktree-truth.txt
?? .tmp-sfia-review/t-a7-next-decision-review.diff
?? .tmp-sfia-review/t-a7-next-decision.diff
?? .tmp-sfia-review/t-a7-pr-readiness/analysis.json
?? .tmp-sfia-review/t-a7-pr-readiness/blobs.txt
?? .tmp-sfia-review/t-a7-pr-readiness/commit.diff
?? .tmp-sfia-review/t-a7-pr-readiness/full-vs-main.diff
?? .tmp-sfia-review/t-a7-pr-readiness/show.txt
?? .tmp-sfia-review/t-a7-pr-readiness/truth.txt
?? .tmp-sfia-review/t-a7-pr280-merge/branch-rules.json
?? .tmp-sfia-review/t-a7-pr280-merge/handoff-publish.out
?? .tmp-sfia-review/t-a7-pr280-merge/issue-comments.json
?? .tmp-sfia-review/t-a7-pr280-merge/main-before.txt
?? .tmp-sfia-review/t-a7-pr280-merge/main-runs.json
?? .tmp-sfia-review/t-a7-pr280-merge/merge-check-runs.json
?? .tmp-sfia-review/t-a7-pr280-merge/merge-commit.txt
?? .tmp-sfia-review/t-a7-pr280-merge/merge-status.json
?? .tmp-sfia-review/t-a7-pr280-merge/merge.out
?? .tmp-sfia-review/t-a7-pr280-merge/post-local.txt
?? .tmp-sfia-review/t-a7-pr280-merge/post-remote.txt
?? .tmp-sfia-review/t-a7-pr280-merge/pr-checks-pre.txt
?? .tmp-sfia-review/t-a7-pr280-merge/pr-post.json
?? .tmp-sfia-review/t-a7-pr280-merge/pr-pre.json
?? .tmp-sfia-review/t-a7-pr280-merge/pre-truth.txt
?? .tmp-sfia-review/t-a7-pr280-merge/repo-merge-policy.json
?? .tmp-sfia-review/t-a7-pr280-merge/review-comments.json
?? .tmp-sfia-review/t-a7-pr280-merge/reviews.json
?? .tmp-sfia-review/t-a7-pr280-merge/threads.json
?? .tmp-sfia-review/t-a7-pr280-review/branch-rules.json
?? .tmp-sfia-review/t-a7-pr280-review/check-runs.json
?? .tmp-sfia-review/t-a7-pr280-review/commit-status.json
?? .tmp-sfia-review/t-a7-pr280-review/gh-name-only-sorted.txt
?? .tmp-sfia-review/t-a7-pr280-review/handoff-publish.out
?? .tmp-sfia-review/t-a7-pr280-review/issue-comments.json
?? .tmp-sfia-review/t-a7-pr280-review/local-name-status.txt
?? .tmp-sfia-review/t-a7-pr280-review/local.diff
?? .tmp-sfia-review/t-a7-pr280-review/pr-checks.txt
?? .tmp-sfia-review/t-a7-pr280-review/pr-files.json
?? .tmp-sfia-review/t-a7-pr280-review/pr-name-only.txt
?? .tmp-sfia-review/t-a7-pr280-review/pr-view.json
?? .tmp-sfia-review/t-a7-pr280-review/pr.diff
?? .tmp-sfia-review/t-a7-pr280-review/review-comments.json
?? .tmp-sfia-review/t-a7-pr280-review/review-threads.json
?? .tmp-sfia-review/t-a7-pr280-review/reviews.json
?? .tmp-sfia-review/t-a7-pr280-review/truth.txt
?? .tmp-sfia-review/t-a7-push-pr/check-runs.json
?? .tmp-sfia-review/t-a7-push-pr/handoff-publish.out
?? .tmp-sfia-review/t-a7-push-pr/main-before.txt
?? .tmp-sfia-review/t-a7-push-pr/post-create.txt
?? .tmp-sfia-review/t-a7-push-pr/pr-body.md
?? .tmp-sfia-review/t-a7-push-pr/pr-checks-final.txt
?? .tmp-sfia-review/t-a7-push-pr/pr-checks.txt
?? .tmp-sfia-review/t-a7-push-pr/pr-create.out
?? .tmp-sfia-review/t-a7-push-pr/pr-search-head.json
?? .tmp-sfia-review/t-a7-push-pr/pr-search-title.json
?? .tmp-sfia-review/t-a7-push-pr/pr-view.json
?? .tmp-sfia-review/t-a7-push-pr/push.out
?? .tmp-sfia-review/t-a7-push-pr/truth-pre.txt
?? .tmp-sfia-review/t-a7-rereview/analysis.json
?? .tmp-sfia-review/t-a7-rereview/blobs.txt
?? .tmp-sfia-review/t-a7-rereview/corrective.diff
?? .tmp-sfia-review/t-a7-rereview/show-corrective.txt
?? .tmp-sfia-review/t-a7-rereview/show-initial.txt
?? .tmp-sfia-review/t-a7-rereview/truth.txt
?? .tmp-sfia-review/t-a7-w1.diff
?? .tmp-sfia-review/ta7-f03-01-source-truth-and-scope.md
?? .tmp-sfia-review/ta7-f03-02-f03-entry-preconditions-options.md
?? .tmp-sfia-review/ta7-f03-03-f11-api-ui-options.md
?? .tmp-sfia-review/ta7-f03-04-f13-legacy-history-read-only-options.md
?? .tmp-sfia-review/ta7-f03-05-cross-decision-consistency.md
?? .tmp-sfia-review/ta7-f03-06-recommendation-and-risks.md
?? .tmp-sfia-review/ta7-f03-07-morris-decision-pack.md
?? .tmp-sfia-review/ta7-f03-README.md
?? .tmp-sfia-review/ta7-f03-full.diff
?? .tmp-sfia-review/ta7-f03-meta.txt
?? .tmp-sfia-review/v3-modeled-d1-validation.json
?? .tmp-sfia-review/w1-01-source-truth-and-scope.md
?? .tmp-sfia-review/w1-02-methodmode-inventory.md
?? .tmp-sfia-review/w1-03-method-directory-inventory.md
?? .tmp-sfia-review/w1-04-ops1-boundary-assessment.md
?? .tmp-sfia-review/w1-05-dependency-map.md
?? .tmp-sfia-review/w1-06-removal-and-isolation-options.md
?? .tmp-sfia-review/w1-07-validation-rollback-and-stop-conditions.md
?? .tmp-sfia-review/w1-08-morris-decision-pack.md
?? .tmp-sfia-review/w1-README.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-codex-pilot =====
/Users/morris/Projects/sfia-codex-pilot
branch=method/codex-operating-model-pilot
HEAD=ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
locked=NO_OR_N/A
--- status --untracked=all ---
?? .codex/agents/sfia-mechanical.toml
?? .codex/agents/sfia-reviewer.toml
?? .codex/agents/sfia-structurer.toml
?? .codex/config.toml
?? .tmp-sfia-review/chatgpt-review.md
?? AGENTS.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-chatgpt-codex-operating-model-adr-candidate.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-chatgpt-codex-target-operating-model.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-chatgpt-codex-transition-roadmap.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-cursor-adherence-audit.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-cursor-adherence-inventory.csv
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-reasoning-orchestration-routing-model-candidate.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-review-validation-handoff-model-candidate.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-cycle-contract.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-detached-review-01.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-detached-review-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-execution-report.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-review-snapshot-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-review-snapshot-03.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-review-snapshot.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-cycle-contract.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-detached-review-01.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-detached-review-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-execution-report.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-micro-test-log.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-review-snapshot-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-review-snapshot.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/README.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/sfia-codex-cycle-contract-template.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/sfia-codex-execution-report-template.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/sfia-codex-instruction-surface-matrix.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-task-tracker =====
/Users/morris/Projects/sfia-task-tracker
branch=cadrage/task-tracker-light
HEAD=b763a318fb84e23e482ed23a0bd561c1d9e719e6
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-a5-2-framing =====
/Users/morris/Projects/sfia-workspace-a5-2-framing
branch=framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
HEAD=bd3608c6220e820cc3fa017422a7564a565a1296
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts =====
/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
branch=method/sfia-cycle-knowledge-contracts
HEAD=cae841519ed1d2dd825e6ecb998337cd47b4a1e1
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-d1-conversational-convergence =====
/Users/morris/Projects/sfia-workspace-d1-conversational-convergence
branch=ux/sfia-studio-d1-conversational-convergence
HEAD=7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/_when.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/commit-stat.txt
?? .tmp-sfia-review/ux-docs.diff
?? .tmp-sfia-review/ux-validation.diff
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-d1-platform-integration =====
/Users/morris/Projects/sfia-workspace-d1-platform-integration
branch=delivery/sfia-studio-d1-shared-platform-integration
HEAD=c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png
?? .tmp-sfia-review/live-product-validation/lpv-u01-confirmation.png
?? .tmp-sfia-review/live-product-validation/lpv-u01-intake-live.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/creer-manuellement-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1024.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/workspace-reprendre-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/clarification-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/error-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1024.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1280.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1728.png
?? .tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/no-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/create-success-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-after-reload.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-empty.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-open-journal.png
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1 =====
/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
branch=docs/sfia-studio-doc32-post-p3-m1-correction
HEAD=dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-docs-recover =====
/Users/morris/Projects/sfia-workspace-docs-recover
branch=docs/sfia-studio-recover-unmerged-project-docs
HEAD=1a2fa31fab6343bdd0eab7211febb3bcc5326c33
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean =====
/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
branch=docs/sfia-studio-fa6-mitigated-from-main
HEAD=67f140a19cf4a992dbc0d7b053abfde579a9a68c
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-framing-next-increment =====
/Users/morris/Projects/sfia-workspace-framing-next-increment
branch=framing/sfia-studio-next-product-increment
HEAD=88fa4658da07156614de270d8172f147535ddbf9
locked=NO_OR_N/A
--- status --untracked=all ---
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
?? projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
?? projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
?? projects/sfia-studio/79-shared-technical-platform-architecture.md
?? projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md
--- staged ---
--- tracked diff ---
M	projects/sfia-studio/README.md

===== WORKTREE: /Users/morris/Projects/sfia-workspace-m1-bypass-probe =====
/Users/morris/Projects/sfia-workspace-m1-bypass-probe
branch=qa/sfia-studio-m1-bypass-probe
HEAD=f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert =====
/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
branch=qa/sfia-studio-m1-bypass-probe-revert
HEAD=b502c0069f836a729090bdc187dd98a0c26591ca
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-m1-capitalization =====
/Users/morris/Projects/sfia-workspace-m1-capitalization
branch=docs/sfia-studio-m1-capitalization-rex
HEAD=fa0eebe00ce3b765a8a486aa660dddfab40123a0
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-after-t-a6 =====
/Users/morris/Projects/sfia-workspace-option-a-after-t-a6
branch=framing/sfia-studio-v3-native-option-a-after-t-a6
HEAD=aef7fd6d5a678857cf36e490f1550866d47c8887
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-ci-governance =====
/Users/morris/Projects/sfia-workspace-option-a-ci-governance
branch=delivery/sfia-studio-v3-native-option-a-ci-merge-governance
HEAD=2f9560534e285c5b8105f81dca39c5252667860c
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs =====
/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
branch=docs/sfia-studio-option-a-ci-governance-post-merge
HEAD=a42a85c0c0b3e146e59f82ea753329ed9253f278
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check =====
/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
branch=delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
HEAD=9f03916243c470587f6958e058fd58909e5bd75a
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/build_pack.py
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/diff-stat.txt
?? .tmp-sfia-review/doc32.diff
?? .tmp-sfia-review/doc32.diff.clean
?? .tmp-sfia-review/main-wf.yml
?? .tmp-sfia-review/main-wf.yml.clean
?? .tmp-sfia-review/name-status.txt
?? .tmp-sfia-review/postmerge-squash.diff
?? .tmp-sfia-review/postmerge-squash.diff.clean
?? .tmp-sfia-review/pr-body-after.md
?? .tmp-sfia-review/pr-body-before.md
?? .tmp-sfia-review/pr270-doc32.diff
?? .tmp-sfia-review/pr270-doc32.diff.clean
?? .tmp-sfia-review/pr270-fix.diff
?? .tmp-sfia-review/pr270-fix.diff.clean
?? .tmp-sfia-review/pr270-wf.diff
?? .tmp-sfia-review/pr270-wf.diff.clean
?? .tmp-sfia-review/squash-main.diff
?? .tmp-sfia-review/squash-main.diff.clean
?? .tmp-sfia-review/wf.diff
?? .tmp-sfia-review/wf.diff.clean
?? .tmp-sfia-review/whitespace-fix.diff
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-review-handoff-publisher =====
/Users/morris/Projects/sfia-workspace-review-handoff-publisher
branch=tooling/review-handoff-canonical-publisher
HEAD=14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/diffs/commit-stat.txt
?? .tmp-sfia-review/diffs/committed-files.txt
?? .tmp-sfia-review/diffs/method-template.patch
?? .tmp-sfia-review/diffs/modified.patch
?? .tmp-sfia-review/diffs/publisher-sequence-excerpt.md
?? .tmp-sfia-review/diffs/template-alignment.patch
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-shared-platform-delivery =====
/Users/morris/Projects/sfia-workspace-shared-platform-delivery
branch=delivery/sfia-studio-shared-technical-platform
HEAD=08c282abafd97685bcc0b7e525ec96e6721ec589
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/creer-manuellement-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1024.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/workspace-reprendre-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/clarification-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/error-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1024.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1280.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1728.png
?? .tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/no-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/create-success-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/new-project-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-home-1440.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-cloture.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-decision-finale.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-execution.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-gate-morris.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-go-invalide.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-nouvelle-demande.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-qualification-proposee.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-rapport.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-verdict.png
?? .tmp-sfia-review/screenshots-increment-b/inc-b-gate-valide-idle.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-confirm-exact-demand.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-demand-campus360.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-demand-empty.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-demand-invalid.png
?? .tmp-sfia-review/screenshots-increment-c/inc-c-confirm-panel.png
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a6-post-merge =====
/Users/morris/Projects/sfia-workspace-t-a6-post-merge
branch=post-merge/sfia-studio-v3-native-option-a-t-a6
HEAD=1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration =====
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
branch=framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
HEAD=6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge =====
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
branch=docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
HEAD=960c90b32b2c1c5701a668b0ebc70fdd847c681b
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-framing =====
/Users/morris/Projects/sfia-workspace-t-a7-framing
branch=framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
HEAD=b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge =====
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
branch=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
?? .tmp-sfia-review/main-worktree-untracked-evidence.txt
?? .tmp-sfia-review/merge-commit-source.txt
?? .tmp-sfia-review/merge-readiness-truth.txt
?? .tmp-sfia-review/merge-revalidation.txt
?? .tmp-sfia-review/merge-truth.txt
?? .tmp-sfia-review/pr-296-after-api.json
?? .tmp-sfia-review/pr-296-after-body-metadata.json
?? .tmp-sfia-review/pr-296-after-merge.json
?? .tmp-sfia-review/pr-296-archive-and-cleanup-report.md
?? .tmp-sfia-review/pr-296-before-metadata.json
?? .tmp-sfia-review/pr-296-before-view.json
?? .tmp-sfia-review/pr-296-before.json
?? .tmp-sfia-review/pr-296-body-after.md
?? .tmp-sfia-review/pr-296-body-api-json.md
?? .tmp-sfia-review/pr-296-body-api-raw.md
?? .tmp-sfia-review/pr-296-body-authorized.diff
?? .tmp-sfia-review/pr-296-body-before-vs-remote-after.diff
?? .tmp-sfia-review/pr-296-body-before.md
?? .tmp-sfia-review/pr-296-body-concurrent-check.md
?? .tmp-sfia-review/pr-296-body-final.md
?? .tmp-sfia-review/pr-296-body-hashes.txt
?? .tmp-sfia-review/pr-296-body-remote-after.md
?? .tmp-sfia-review/pr-296-body-update-response.json
?? .tmp-sfia-review/pr-296-body-update.json
?? .tmp-sfia-review/pr-296-body.md
?? .tmp-sfia-review/pr-296-checks.json
?? .tmp-sfia-review/pr-296-checks.txt
?? .tmp-sfia-review/pr-296-comments.json
?? .tmp-sfia-review/pr-296-commits.txt
?? .tmp-sfia-review/pr-296-concurrent-meta.json
?? .tmp-sfia-review/pr-296-concurrent.json
?? .tmp-sfia-review/pr-296-diff-correspondence.txt
?? .tmp-sfia-review/pr-296-fetch-main-attempt.txt
?? .tmp-sfia-review/pr-296-files.txt
?? .tmp-sfia-review/pr-296-final-metadata.json
?? .tmp-sfia-review/pr-296-inline-comments-after.json
?? .tmp-sfia-review/pr-296-inline-comments-before.json
?? .tmp-sfia-review/pr-296-inline-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments-after.json
?? .tmp-sfia-review/pr-296-issue-comments-before.json
?? .tmp-sfia-review/pr-296-issue-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments.json
?? .tmp-sfia-review/pr-296-jobs.json
?? .tmp-sfia-review/pr-296-merge-body-after.md
?? .tmp-sfia-review/pr-296-merge-body-authorized.diff
?? .tmp-sfia-review/pr-296-merge-body-before.md
?? .tmp-sfia-review/pr-296-merge-body-concurrent.md
?? .tmp-sfia-review/pr-296-merge-body-final.md
?? .tmp-sfia-review/pr-296-merge-body-remote-after.md
?? .tmp-sfia-review/pr-296-merge-report.md
?? .tmp-sfia-review/pr-296-merge-response.json
?? .tmp-sfia-review/pr-296-metadata.json
?? .tmp-sfia-review/pr-296-pm-inline-comments.json
?? .tmp-sfia-review/pr-296-pm-issue-comments.json
?? .tmp-sfia-review/pr-296-pm-reviews.json
?? .tmp-sfia-review/pr-296-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-post-merge-runs.json
?? .tmp-sfia-review/pr-296-postmerge-body.md
?? .tmp-sfia-review/pr-296-postmerge-jobs.json
?? .tmp-sfia-review/pr-296-postmerge-pr.json
?? .tmp-sfia-review/pr-296-postmerge-run.json
?? .tmp-sfia-review/pr-296-pre-merge.json
?? .tmp-sfia-review/pr-296-pre-ready.json
?? .tmp-sfia-review/pr-296-ready-transition-report.md
?? .tmp-sfia-review/pr-296-remote-review-report.md
?? .tmp-sfia-review/pr-296-remote.diff
?? .tmp-sfia-review/pr-296-resume-inline-comments.json
?? .tmp-sfia-review/pr-296-resume-issue-comments.json
?? .tmp-sfia-review/pr-296-resume-pr.json
?? .tmp-sfia-review/pr-296-resume-reviews.json
?? .tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-reviews-after.json
?? .tmp-sfia-review/pr-296-reviews-before.json
?? .tmp-sfia-review/pr-296-reviews-concurrent.json
?? .tmp-sfia-review/pr-296-reviews.json
?? .tmp-sfia-review/pr-296-run.json
?? .tmp-sfia-review/pr-296-runs-after.json
?? .tmp-sfia-review/pr-296-switch-main-attempt.txt
?? .tmp-sfia-review/pr-296-view.json
?? .tmp-sfia-review/pr-297-after-ready.json
?? .tmp-sfia-review/pr-297-before-ready.json
?? .tmp-sfia-review/pr-297-body-after-ci-checkbox.md
?? .tmp-sfia-review/pr-297-body-after-merge-go.md
?? .tmp-sfia-review/pr-297-body-after-publish.md
?? .tmp-sfia-review/pr-297-body-before-merge.md
?? .tmp-sfia-review/pr-297-body-before-ready.md
?? .tmp-sfia-review/pr-297-body-checkbox-diff.patch
?? .tmp-sfia-review/pr-297-body-current.md
?? .tmp-sfia-review/pr-297-body-final-merged.md
?? .tmp-sfia-review/pr-297-body-merge-diff.patch
?? .tmp-sfia-review/pr-297-body-only-correction-pack.md
?? .tmp-sfia-review/pr-297-body-ready-f02-correction.md
?? .tmp-sfia-review/pr-297-branch-inventory.txt
?? .tmp-sfia-review/pr-297-ci-premerge.json
?? .tmp-sfia-review/pr-297-cleanup-readiness.md
?? .tmp-sfia-review/pr-297-document-05.md
?? .tmp-sfia-review/pr-297-final-findings.md
?? .tmp-sfia-review/pr-297-main-proof.txt
?? .tmp-sfia-review/pr-297-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-merge-decision-pack.md
?? .tmp-sfia-review/pr-297-merge-readiness-body.md
?? .tmp-sfia-review/pr-297-merge-readiness-findings.md
?? .tmp-sfia-review/pr-297-merge-readiness.diff
?? .tmp-sfia-review/pr-297-merge-readiness.json
?? .tmp-sfia-review/pr-297-pm-inline-comments.json
?? .tmp-sfia-review/pr-297-pm-issue-comments.json
?? .tmp-sfia-review/pr-297-pm-reviews.json
?? .tmp-sfia-review/pr-297-post-merge-body.md
?? .tmp-sfia-review/pr-297-post-merge-ci-initial.json
?? .tmp-sfia-review/pr-297-post-merge-ci-list.json
?? .tmp-sfia-review/pr-297-post-merge-ci-status.txt
?? .tmp-sfia-review/pr-297-post-merge-ci-view.txt
?? .tmp-sfia-review/pr-297-post-merge-ci.json
?? .tmp-sfia-review/pr-297-post-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-doc-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-findings.md
?? .tmp-sfia-review/pr-297-post-merge-pr.json
?? .tmp-sfia-review/pr-297-post-merge.json
?? .tmp-sfia-review/pr-297-postmerge-git-truth.txt
?? .tmp-sfia-review/pr-297-pre-merge-final.json
?? .tmp-sfia-review/pr-297-pre-merge.json
?? .tmp-sfia-review/pr-297-pre-ready.json
?? .tmp-sfia-review/pr-297-premerge-ci-ref.json
?? .tmp-sfia-review/pr-297-ready-f02-body-diff.patch
?? .tmp-sfia-review/pr-297-ready-findings.md
?? .tmp-sfia-review/pr-297-source-one-file.diff
?? .tmp-sfia-review/pr-297-worktree-inventory.txt
?? .tmp-sfia-review/pr-297-worktree-paths.txt
?? .tmp-sfia-review/pr-297-worktree-statuses.txt
?? .tmp-sfia-review/pr-body-v2-a3.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-checks.txt
?? .tmp-sfia-review/pr-readiness-truth.txt
?? .tmp-sfia-review/primary-truth.txt
?? .tmp-sfia-review/pub-truth.txt
?? .tmp-sfia-review/ready-final-git.txt
?? .tmp-sfia-review/ready-truth.txt
?? .tmp-sfia-review/remote-review-commit.txt
?? .tmp-sfia-review/remote-review-truth.txt
?? .tmp-sfia-review/review-timestamp.txt
?? .tmp-sfia-review/source-inspection.txt
?? .tmp-sfia-review/v3-1-d1-cap-source-commit.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package.diff
?? .tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-ready-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-rex-report.md
?? .tmp-sfia-review/v3-1-d1-pr-body.md
?? .tmp-sfia-review/worktree-after.txt
?? .tmp-sfia-review/worktree-before.txt
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-next-decision =====
/Users/morris/Projects/sfia-workspace-t-a7-next-decision
branch=framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
HEAD=33ea3e87facc8c99c9c5619d6d2424030d3918a2
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness =====
/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
branch=framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
HEAD=b6a19335f5116940175f5986492e3693722563bc
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions =====
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
branch=record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
HEAD=f89ba5fb6cfca4e3de97667d944569a20266a8aa
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope =====
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
branch=framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
HEAD=4fad47f72a7d6cde655d98a64351bb4624ed9ad1
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-template-handoff-fix =====
/Users/morris/Projects/sfia-workspace-template-handoff-fix
branch=HEAD=134be301792efbf6f9739d13f0572062ef976da7
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/handoff-local/latest-chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-ux-reconciliation =====
/Users/morris/Projects/sfia-workspace-ux-reconciliation
branch=project/sfia-studio-ux-ui-reconciliation
HEAD=7bdabdcc0ea5f760383da190a661250dcd5d2598
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation =====
/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
branch=method/sfia-studio-v3-doctrine-consolidation
HEAD=daf6f7d02bbac09024f6275a793769e66b2b3878
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-audit =====
/Users/morris/Projects/sfia-workspace-v3-native-audit
branch=audit/sfia-studio-v3-native-dependencies
HEAD=56ddf32e811f0f5f8b82f31400da18ceecf3bc30
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
branch=design/sfia-studio-v3-native-option-a-functional-architecture
HEAD=577ff0c22491288d2293fd9730ed26f0af4095b0
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-design =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-design
branch=design/sfia-studio-v3-native-option-a-functional
HEAD=e22bc243c8854df4e9422fafe46e92135fe242e9
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
branch=modeled/sfia-studio-v3-native-option-a
HEAD=52891e5c5a9b1254143e422111ea4955ca3a0940
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
branch=framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
HEAD=0b696ed970823aa75d013336e44e72de08f2ac57
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/14-full.md
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/created.txt
?? .tmp-sfia-review/d3-validation-fix.diff
?? .tmp-sfia-review/d4-tree.txt
?? .tmp-sfia-review/d4-validation-fix.diff
?? .tmp-sfia-review/d5-feat-stat.txt
?? .tmp-sfia-review/d5-runtime.diff
?? .tmp-sfia-review/d5-tests.diff
?? .tmp-sfia-review/d5-validation-fix.diff
?? .tmp-sfia-review/feat-stat.txt
?? .tmp-sfia-review/fix-stat.txt
?? .tmp-sfia-review/handoff-blob.txt
?? .tmp-sfia-review/modified.txt
?? .tmp-sfia-review/now.txt
?? .tmp-sfia-review/out-build.txt
?? .tmp-sfia-review/out-decision.txt
?? .tmp-sfia-review/out-evidence-review.txt
?? .tmp-sfia-review/out-execution-attempt.txt
?? .tmp-sfia-review/out-execution-contract.txt
?? .tmp-sfia-review/out-lint.txt
?? .tmp-sfia-review/out-modeled.txt
?? .tmp-sfia-review/out-tsc.txt
?? .tmp-sfia-review/pm-build.txt
?? .tmp-sfia-review/pm-decision.txt
?? .tmp-sfia-review/pm-diff-check.txt
?? .tmp-sfia-review/pm-evidence-review.txt
?? .tmp-sfia-review/pm-execution-attempt.txt
?? .tmp-sfia-review/pm-execution-contract.txt
?? .tmp-sfia-review/pm-files.txt
?? .tmp-sfia-review/pm-lint.txt
?? .tmp-sfia-review/pm-modeled.txt
?? .tmp-sfia-review/pm-secrets.txt
?? .tmp-sfia-review/pm-tsc.txt
?? .tmp-sfia-review/pr-body-live.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-commits.txt
?? .tmp-sfia-review/pr-conflict-markers.txt
?? .tmp-sfia-review/pr-create-body.md
?? .tmp-sfia-review/pr-debug.txt
?? .tmp-sfia-review/pr-diff-check.txt
?? .tmp-sfia-review/pr-diff-stat.txt
?? .tmp-sfia-review/pr-empty.txt
?? .tmp-sfia-review/pr-files.txt
?? .tmp-sfia-review/pr-forbidden-ish.txt
?? .tmp-sfia-review/pr-meta.json
?? .tmp-sfia-review/pr-name-status.txt
?? .tmp-sfia-review/pr-out-of-scope-candidates.txt
?? .tmp-sfia-review/pr-secrets.txt
?? .tmp-sfia-review/pr-todo.txt
?? .tmp-sfia-review/pr-volumes.txt
?? .tmp-sfia-review/pr-ws-files.txt
?? .tmp-sfia-review/pr-ws-wt.txt
?? .tmp-sfia-review/readme-full.md
?? .tmp-sfia-review/secret-scan.txt
?? .tmp-sfia-review/status.txt
?? .tmp-sfia-review/test-decision.txt
?? .tmp-sfia-review/test-evidence-review.txt
?? .tmp-sfia-review/test-execution-attempt.txt
?? .tmp-sfia-review/test-execution-contract.txt
?? .tmp-sfia-review/test-modeled.txt
?? .tmp-sfia-review/untracked.txt
?? .tmp-sfia-review/worktrees.txt
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
branch=design/sfia-studio-v3-native-option-a-ux-ui
HEAD=608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
branch=ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
branch=ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
branch=ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
branch=ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
branch=ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
branch=ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
branch=ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
branch=ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
branch=ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i4-note.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
branch=ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
branch=ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
branch=ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
branch=ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
branch=ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i4-note.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
branch=ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
branch=ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
branch=ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
branch=ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
branch=ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/05-test01.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
branch=ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
branch=ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
branch=ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
branch=ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
branch=ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
branch=ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
branch=ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
branch=ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
branch=ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
branch=ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
branch=ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
branch=ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
branch=ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
branch=ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
branch=ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
branch=ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i4-note.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
branch=ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
branch=ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
branch=ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/sfia-review-handoff =====
/Users/morris/Projects/sfia-workspace/sfia-review-handoff
branch=sfia/review-handoff
HEAD=3e61efc188f9b25e9a96982d07d0313656d2a2e8
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

```

## Sortie brute inventaire branches
```
=== LOCAL -vv ===
  architecture/interv360-backend-api-contract-framing                           7f24665 docs: frame Interv360 backend API contract
  architecture/interv360-backend-data-model-decision                            0f2f6c4 docs: decide Interv360 backend data model
  architecture/interv360-backend-persistence-decision                           4ee36ee [origin/architecture/interv360-backend-persistence-decision] docs: record backend persistence decision PR status
  architecture/interv360-backend-target-framing                                 4b59b51 docs: frame Interv360 backend target
  architecture/interv360-backend-technical-stack-decision                       9856770 docs: decide Interv360 backend technical stack
  architecture/interv360-product-industrialization-framing                      bf01af0 [origin/architecture/interv360-product-industrialization-framing] docs: record product industrialization PR status
  architecture/interv360-product-roadmap-after-persistence                      572d061 docs: define Interv360 roadmap after persistence
  architecture/interv360-product-roadmap-after-role-simulation                  70a1110 [origin/architecture/interv360-product-roadmap-after-role-simulation] docs: record roadmap after role simulation PR status
  architecture/interv360-product-roadmap-next                                   69b8246 [origin/architecture/interv360-product-roadmap-next] docs: record product roadmap next PR status
  architecture/interv360-role-simulation-review                                 733cbff [origin/architecture/interv360-role-simulation-review] docs: record role simulation review PR status
  architecture/sfia-studio-v3-native-option-a-technical                         e8166ad docs(sfia-studio): record Option A technical architecture validation
  archive/sfia-v2.6-lot-0-completion                                            2830efd [origin/archive/sfia-v2.6-lot-0-completion] docs: complete lot 0 archive execution tracking
  archive/sfia-v2.6-lot-0-inventories                                           6cf7d36 [origin/archive/sfia-v2.6-lot-0-inventories] fix: correct archived inventory relative links
  archive/sfia-v2.6-lot-c-v3-mcp                                                d4401c3 [origin/archive/sfia-v2.6-lot-c-v3-mcp] docs: record sfia v2.6 lot c execution
+ audit/sfia-studio-v3-native-dependencies                                      56ddf32 (/Users/morris/Projects/sfia-workspace-v3-native-audit) [origin/main: behind 219] docs(sfia-studio): validate v3 knowledge-driven doctrine (#259)
  audit/sfia-v2.6-lot-0-qualification                                           e200689 [origin/audit/sfia-v2.6-lot-0-qualification] docs: record morris lot 0 decisions
  audit/sfia-v2.6-repository-cartography                                        4ae75a9 [origin/audit/sfia-v2.6-repository-cartography] docs: restore section headers in pass authority traceability
  backlog/sfia-studio-ops1                                                      4032c25 [origin/backlog/sfia-studio-ops1: gone] docs: validate OPS1 backlog
  backlog/sfia-studio-poc-vertical-slice                                        b4b26b2 [origin/backlog/sfia-studio-poc-vertical-slice] docs(sfia-studio): define validated vertical slice backlog
  cadrage/sfia-v2.6-lot-h                                                       d54c952 [origin/cadrage/sfia-v2.6-lot-h] docs: align Lot H single-cycle execution strategy
+ cadrage/task-tracker-light                                                    b763a31 (/Users/morris/Projects/sfia-task-tracker) [origin/cadrage/task-tracker-light] feat: add task tracker MVP
  capitalization/sfia-documentation-completeness                                ef2f7bf docs: inventory SFIA v1.1 capitalization inputs
  capitalization/sfia-studio-p0-status-sync                                     e97e083 [origin/capitalization/sfia-studio-p0-status-sync] docs(sfia-studio): synchronize P0 status and POC trajectory
  capitalization/sfia-studio-poc-framing-post-merge                             18d2151 [origin/capitalization/sfia-studio-poc-framing-post-merge] docs(sfia-studio): correct post-merge versioning status
* capitalization/sfia-studio-v3-1-d1-rex                                        d77c775 [origin/capitalization/sfia-studio-v3-1-d1-rex] docs(sfia-studio): add V3.1-D1 capitalization REX
  capitalization/sfia-v2.6-repository-rationalization                           40b6f00 [origin/capitalization/sfia-v2.6-repository-rationalization] docs: capitalize SFIA v2.6 repository rationalization
  cleanup/sfia-v2.6-lot-j                                                       c4cc0b0 [origin/cleanup/sfia-v2.6-lot-j] docs: execute SFIA v2.6 Lot J
  conception/sfia-notion-product-space                                          f7f2e18 [origin/conception/sfia-notion-product-space] docs: design SFIA Notion product space
  consolidation/interv360-application-rex                                       dc4c971 [origin/consolidation/interv360-application-rex] docs: add Interv360 application REX
  consolidation/interv360-current-app-audit                                     8099a96 [origin/consolidation/interv360-current-app-audit] docs: audit current Interv360 application
  consolidation/sfia-documentation-review                                       45e4498 [origin/consolidation/sfia-documentation-review] docs: audit SFIA documentation structure
  consolidation/sfia-global-capitalization                                      b11b318 [origin/consolidation/sfia-global-capitalization] docs: add SFIA automation architecture vision
  cycle/chantiers360-v2-design-figma                                            5fa9fcb [origin/cycle/chantiers360-v2-design-figma] docs: add Figma P1 node ids and design captures
  cycle/chantiers360-v2-detailed-framing                                        4546d88 [origin/cycle/chantiers360-v2-detailed-framing] docs: add detailed framing for Chantiers360 v2
  cycle/chantiers360-v2-figma-fidelity-spike                                    6d44882 [origin/cycle/chantiers360-v2-figma-fidelity-spike] docs: record Morris validation for Chantiers360 v2 Figma spike
  cycle/chantiers360-v2-functional-architecture                                 934be03 [origin/cycle/chantiers360-v2-functional-architecture] docs: fix Chantiers360 v2 cycle list
  cycle/chantiers360-v2-light-architecture                                      55b2f0c [origin/cycle/chantiers360-v2-light-architecture] docs: align Chantiers360 v2 architecture decisions before readiness
  cycle/chantiers360-v2-mvp-backlog                                             9babc8c [origin/cycle/chantiers360-v2-mvp-backlog] docs: fix Chantiers360 v2 backlog increment mapping
  cycle/chantiers360-v2-ux-ui                                                   be9b2f3 [origin/cycle/chantiers360-v2-ux-ui] docs: add UX UI framing for Chantiers360 v2
  decision/chantiers360-v2-architecture-arbitrages                              9d425dd [origin/decision/chantiers360-v2-architecture-arbitrages] docs: align Chantiers360 v2 framing stack arbitration wording
  delivery/chantiers360-r-qa-04-dashboard-real-data                             824883c [origin/delivery/chantiers360-r-qa-04-dashboard-real-data] docs: fix Chantiers360 R-QA-04 QA report status
  delivery/chantiers360-v2-inc-01                                               e65a4d2 [origin/delivery/chantiers360-v2-inc-01] docs: prepare PR readiness for Chantiers360 v2 INC-01
  delivery/chantiers360-v2-inc-02                                               c4cc4dc [origin/delivery/chantiers360-v2-inc-02] docs: prepare PR readiness for Chantiers360 v2 INC-02
  delivery/chantiers360-v2-inc-03                                               6583ddf [origin/delivery/chantiers360-v2-inc-03] docs: prepare PR readiness for Chantiers360 v2 INC-03
  delivery/chantiers360-v2-inc-04                                               406a883 [origin/delivery/chantiers360-v2-inc-04] docs: prepare PR readiness for Chantiers360 v2 INC-04
  delivery/chantiers360-v2-inc-05                                               bcc6d37 [origin/delivery/chantiers360-v2-inc-05] docs: prepare PR readiness for Chantiers360 v2 INC-05
  delivery/interv360-api-demo-hardening                                         7ef233a [origin/delivery/interv360-api-demo-hardening] docs: record API demo hardening PR status
  delivery/interv360-api-product-hardening                                      0418305 [origin/delivery/interv360-api-product-hardening] docs: record API hardening PR status
  delivery/interv360-api-product-validation                                     69a33ed [origin/delivery/interv360-api-product-validation] docs: record API product validation PR status
  delivery/interv360-audit-trail                                                87662a2 [origin/delivery/interv360-audit-trail] docs: record audit trail PR status
  delivery/interv360-auth-user-switcher                                         be10f7a [origin/delivery/interv360-auth-user-switcher] docs: record auth user switcher PR status
  delivery/interv360-backend-minimal-prototype                                  a310850 [origin/delivery/interv360-backend-minimal-prototype] docs: record backend minimal prototype PR status
  delivery/interv360-backend-persistence                                        f39adb8 [origin/delivery/interv360-backend-persistence] docs: record backend persistence PR status
  delivery/interv360-backend-users-session                                      1c0311d [origin/delivery/interv360-backend-users-session] docs: record backend users session PR status
  delivery/interv360-batch-01-demo-credibility                                  12efbb6 [origin/delivery/interv360-batch-01-demo-credibility] docs: record Batch 01 PR status
  delivery/interv360-batch-02-demo-control-scenario                             a6eb49d [origin/delivery/interv360-batch-02-demo-control-scenario] docs: record Batch 02 PR status
  delivery/interv360-batch-03-demo-readiness-package                            4d6e465 [origin/delivery/interv360-batch-03-demo-readiness-package] docs: record Batch 03 PR status
  delivery/interv360-batch-04-demo-presentation-package                         bfa5e28 [origin/delivery/interv360-batch-04-demo-presentation-package] docs: record Batch 04 PR status
  delivery/interv360-connected-ux-productization                                6f8c72b [origin/delivery/interv360-connected-ux-productization] docs: record connected UX productization PR status
  delivery/interv360-demo-feedback-review                                       5febd0f [origin/delivery/interv360-demo-feedback-review] docs: record demo feedback review PR status
  delivery/interv360-demo-mvp-closure                                           091eebb [origin/delivery/interv360-demo-mvp-closure] docs: record demo MVP closure PR status
  delivery/interv360-demo-polish                                                d8394b7 [origin/delivery/interv360-demo-polish] docs: record demo polish visual review
  delivery/interv360-demo-presentation-feedback                                 5481b74 [origin/delivery/interv360-demo-presentation-feedback] docs: record demo presentation feedback PR status
  delivery/interv360-demo-presentation-review                                   4a6c7b7 [origin/delivery/interv360-demo-presentation-review] docs: record demo presentation review PR status
  delivery/interv360-end-to-end-demo-hardening                                  ed2c0f4 [origin/delivery/interv360-end-to-end-demo-hardening] docs: record end-to-end demo hardening PR status
  delivery/interv360-frontend-api-connection                                    a23cefc [origin/delivery/interv360-frontend-api-connection] docs: record frontend API connection PR status
  delivery/interv360-frontend-api-connection-framing                            f15956a docs: frame Interv360 frontend API connection
  delivery/interv360-implementation-go-no-go                                    8cc09b1 docs: confirm Interv360 conditional go decision
  delivery/interv360-inc-01-action-transition-decision                          aa5092f docs: decide INC-01 first action transition
  delivery/interv360-inc-01-app-foundation                                      2d7f121 docs: summarize INC-01 app foundation
  delivery/interv360-inc-01-controlled-workflow-skeleton                        1fae1ce docs: summarize INC-01 controlled workflow skeleton
  delivery/interv360-inc-01-controlled-workflow-validation                      16c3339 docs: validate INC-01 controlled workflow
  delivery/interv360-inc-01-demo-reset                                          5588977 docs: summarize INC-01 demo reset
  delivery/interv360-inc-01-demo-script                                         9569575 docs: add INC-01 demo script
  delivery/interv360-inc-01-final-demo-package                                  140a5be docs: add INC-01 final demo package
  delivery/interv360-inc-01-global-summary                                      985ebcb docs: summarize INC-01 globally
  delivery/interv360-inc-01-implementation-preparation                          0588ee2 docs: summarize INC-01 implementation preparation
  delivery/interv360-inc-01-intervention-readonly-skeleton                      ed5f9ba docs: summarize INC-01 intervention readonly skeleton
  delivery/interv360-inc-01-list-skeleton                                       5819367 docs: summarize INC-01 requests list skeleton
  delivery/interv360-inc-01-local-persistence-decision                          020f773 docs: decide INC-01 local persistence
  delivery/interv360-inc-01-phase-2-delivery-decision                           4f1eb6a docs: decide INC-01 phase 2 delivery
  delivery/interv360-inc-01-phase-2-rex                                         7a428a7 docs: capture INC-01 phase 2 REX
  delivery/interv360-inc-01-planning-readonly-skeleton                          8411138 docs: summarize INC-01 planning readonly skeleton
  delivery/interv360-inc-01-pr-preparation                                      4f7af01 docs: prepare INC-01 PR
  delivery/interv360-inc-01-push-and-pr                                         06751ad [origin/delivery/interv360-inc-01-push-and-pr] docs: record INC-01 PR creation
  delivery/interv360-inc-01-qualification-readonly-skeleton                     5033c24 docs: summarize INC-01 qualification readonly skeleton
  delivery/interv360-inc-01-readonly-demo-summary                               0e25e58 docs: consolidate INC-01 readonly demo
  delivery/interv360-inc-01-report-readonly-skeleton                            94a50c0 docs: summarize INC-01 report readonly skeleton
  delivery/interv360-inc-01-request-detail-skeleton                             ab27aad docs: summarize INC-01 request detail skeleton
  delivery/interv360-inc-02-pr-preparation                                      82c7823 [origin/delivery/interv360-inc-02-pr-preparation] docs: record INC-02 push status
  delivery/interv360-inc-02-ux-demo-improvement                                 e9de7be feat: improve INC-02 demo UX
  delivery/interv360-inc-03-multi-requests-local-demo                           5f6e2cc feat: add INC-03 multi-request local demo
  delivery/interv360-inc-03-pr-preparation                                      69325d0 [origin/delivery/interv360-inc-03-pr-preparation] docs: record INC-03 push status
  delivery/interv360-inc-04-list-filtering-local-summary                        d306054 [origin/delivery/interv360-inc-04-list-filtering-local-summary] docs: record INC-04 PR status
  delivery/interv360-product-demo-consolidation                                 1b44bc1 [origin/delivery/interv360-product-demo-consolidation] docs: record product demo consolidation PR status
  delivery/interv360-product-industrialization                                  3bba55b [origin/delivery/interv360-product-industrialization] docs: record product industrialization PR status
  delivery/interv360-product-ux-finalization                                    e106d91 [origin/delivery/interv360-product-ux-finalization] docs: record product UX PR status
  delivery/interv360-request-model-finalization                                 b3bd01f [origin/delivery/interv360-request-model-finalization] docs: record request model PR status
  delivery/interv360-request-model-productization                               6dded20 [origin/delivery/interv360-request-model-productization] docs: record request model productization PR status
  delivery/interv360-role-simulation                                            1547ff5 [origin/delivery/interv360-role-simulation] docs: record role simulation PR status
  delivery/interv360-technical-arbitration                                      ba81999 docs: assess Interv360 technical arbitration
  delivery/interv360-workflow-light-extension                                   5cd2b4e [origin/delivery/interv360-workflow-light-extension] docs: record workflow light extension PR status
  delivery/interv360-workflow-requalification                                   a830842 [origin/delivery/interv360-workflow-requalification] docs: record workflow requalification PR status
+ delivery/sfia-studio-control-tower-fast-track                                 c895a96 (/Users/morris/Projects/sfia-workspace) [origin/delivery/sfia-studio-control-tower-fast-track] docs(sfia-studio): formalize F-A6 as mitigated after M1
+ delivery/sfia-studio-d1-shared-platform-integration                           c2d39a7 (/Users/morris/Projects/sfia-workspace-d1-platform-integration) [origin/delivery/sfia-studio-d1-shared-platform-integration] fix(sfia-studio): raise D1 intake provider timeout to 60s
  delivery/sfia-studio-ops1-i1-session-journal                                  97df7d5 [origin/delivery/sfia-studio-ops1-i1-session-journal: gone] feat: implement OPS1 I1 session and journal
  delivery/sfia-studio-ops1-i3-action-gate                                      3607a3a [origin/delivery/sfia-studio-ops1-i3-action-gate] feat(sfia-studio): deliver OPS1 I3 action gate
  delivery/sfia-studio-poc-increment-a                                          89cb756 [origin/delivery/sfia-studio-poc-increment-a] feat(sfia-studio): implement vertical slice increment A cockpit
  delivery/sfia-studio-poc-increment-b                                          8316f26 [origin/delivery/sfia-studio-poc-increment-b] feat(sfia-studio): connect cockpit to fixture harness
  delivery/sfia-studio-poc-increment-c                                          96bb808 [origin/delivery/sfia-studio-poc-increment-c] feat(sfia-studio): add bounded live GPT qualification
  delivery/sfia-studio-poc-increment-d                                          41b9c46 [origin/delivery/sfia-studio-poc-increment-d] feat(sfia-studio): add controlled Cursor sandbox execution
+ delivery/sfia-studio-shared-technical-platform                                08c282a (/Users/morris/Projects/sfia-workspace-shared-platform-delivery) [origin/delivery/sfia-studio-shared-technical-platform] docs(sfia-studio): record shared platform PR #255 metadata
  delivery/sfia-studio-t-a7-consolidated-blocker-reduction                      c24da11 [origin/delivery/sfia-studio-t-a7-consolidated-blocker-reduction] docs(sfia-studio): document consolidated T-A7 blocker reduction lot
  delivery/sfia-studio-t-a7-f11-f13-internal-completion                         5afe095 [origin/delivery/sfia-studio-t-a7-f11-f13-internal-completion] fix(sfia-studio): correct bounded history provider typing
  delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation                     9c12505 [origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation] docs(sfia-studio): document HARD T-A6 atomicity and persistence foundation lot
+ delivery/sfia-studio-v3-native-option-a-ci-merge-governance                   2f95605 (/Users/morris/Projects/sfia-workspace-option-a-ci-governance) [origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance: ahead 2] docs(sfia-studio): review CI governance post-merge integration
+ delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916 (/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check) [origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation] docs(sfia-studio): remove trailing whitespace from path-aware preparation
  delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation              9e0a9c8 [origin/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation] docs(sfia-studio): prepare T-A0 Doctrine Foundation PR
  delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation           5733d25 [origin/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation] docs(sfia-studio): prepare T-A1 Project and LPS PR
  delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc   75aee25 [origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc] docs(sfia-studio): align T-A2 PR readiness HEAD and checklist
  delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority  f8d25c2 [origin/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority] docs(sfia-studio): align T-A3 PR readiness HEAD and checklist
  delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance    245f515 [origin/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance] docs(sfia-studio): prepare T-A4 ExecutionContract PR readiness
  delivery/sfia-studio-visible-slice-v1-project-core-composition                ca93e08 [origin/delivery/sfia-studio-visible-slice-v1-project-core-composition] fix(sfia-studio): share injected clock across V1 composition
  delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge           7ef160c [origin/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge] docs(sfia-studio): document V2-A1 runtime bridge
  delivery/sfia-studio-visible-slice-v2-a2-create-project-ui                    55a28d3 [origin/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui: gone] fix(sfia-studio): resolve V2-A2 readiness findings
  delivery/sfia-v2.6-lot-e1-link-fixes                                          7885903 [origin/delivery/sfia-v2.6-lot-e1-link-fixes] docs: align e1 report correction HEAD sha
  delivery/sfia-v2.6-lot-h                                                      694fedc [origin/delivery/sfia-v2.6-lot-h] docs: execute SFIA v2.6 Lot H
  design/sfia-studio-ops1-scenario                                              d248b9d [origin/design/sfia-studio-ops1-scenario] docs: validate OPS1 operational scenario
  design/sfia-studio-ops1-technical-architecture                                b495a56 [origin/design/sfia-studio-ops1-technical-architecture: gone] docs: validate OPS1 technical architecture
  design/sfia-studio-poc-vertical-slice                                         58fb275 [origin/design/sfia-studio-poc-vertical-slice] docs(sfia-studio): align remaining VS-CAND status
+ design/sfia-studio-v3-native-option-a-functional                              e22bc24 (/Users/morris/Projects/sfia-workspace-v3-native-option-a-design) [origin/main: behind 218] docs(sfia-studio): design v3-native option A functional flow
+ design/sfia-studio-v3-native-option-a-functional-architecture                 577ff0c (/Users/morris/Projects/sfia-workspace-v3-native-option-a-arch) docs(sfia-studio): document Option A functional architecture
+ design/sfia-studio-v3-native-option-a-ux-ui                                   608d3d4 (/Users/morris/Projects/sfia-workspace-v3-native-option-a-ux) design(sfia-studio): define Option A UX and Figma contract
  devops/sfia-studio-ops1-foundation                                            04a3b45 [origin/devops/sfia-studio-ops1-foundation: gone] docs: validate OPS1 integration DevOps foundation
  docs/chantiers360-close-r-qa-04                                               662f1c3 [origin/docs/chantiers360-close-r-qa-04] docs: close Chantiers360 R-QA-04 reserve
  docs/chantiers360-v0-vs-sfia-v2-comparison                                    158bdf0 [origin/docs/chantiers360-v0-vs-sfia-v2-comparison] docs: add V0 vs SFIA v2 methodological comparison
  docs/chantiers360-v0-vs-v2-post-merge                                         2e68166 [origin/docs/chantiers360-v0-vs-v2-post-merge] docs: align V0 vs SFIA v2 comparison post-merge status
  docs/chantiers360-v2-design-coverage-post-merge                               bbd54bf [origin/docs/chantiers360-v2-design-coverage-post-merge] docs: align Chantiers360 v2 design coverage post-merge status
  docs/chantiers360-v2-final-pilot-rex                                          438b3bb [origin/docs/chantiers360-v2-final-pilot-rex] docs: add Chantiers360 v2 final pilot REX
  docs/chantiers360-v2-inc-01-closure                                           09204fc [origin/docs/chantiers360-v2-inc-01-closure] docs: close Chantiers360 v2 INC-01 with reserves
  docs/chantiers360-v2-inc-01-qa-g4                                             94f71f2 [origin/docs/chantiers360-v2-inc-01-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-01
  docs/chantiers360-v2-inc-02-closure                                           e461c6f [origin/docs/chantiers360-v2-inc-02-closure] merge: resolve conflicts with main for INC-02 closure docs
  docs/chantiers360-v2-inc-02-qa-g4                                             ec073f6 [origin/docs/chantiers360-v2-inc-02-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-02
  docs/chantiers360-v2-inc-03-closure                                           1d795fc [origin/docs/chantiers360-v2-inc-03-closure] docs: close Chantiers360 v2 INC-03 with reserves
  docs/chantiers360-v2-inc-03-qa-g4                                             f136c33 [origin/docs/chantiers360-v2-inc-03-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-03
  docs/chantiers360-v2-inc-04-closure                                           eb174d0 [origin/docs/chantiers360-v2-inc-04-closure] docs: close Chantiers360 v2 INC-04 with reserves
  docs/chantiers360-v2-inc-04-qa-g4                                             96bd25e [origin/docs/chantiers360-v2-inc-04-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-04
  docs/chantiers360-v2-inc-05-closure                                           9987df6 [origin/docs/chantiers360-v2-inc-05-closure] docs: close Chantiers360 v2 INC-05 with reserves
  docs/chantiers360-v2-inc-05-qa-g4                                             d30ca72 [origin/docs/chantiers360-v2-inc-05-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-05
  docs/chantiers360-v2-post-capitalization-alignment                            314794a [origin/docs/chantiers360-v2-post-capitalization-alignment] docs: align Chantiers360 v2 post-capitalization status
  docs/chantiers360-v2-post-spike-alignment                                     fe93090 [origin/docs/chantiers360-v2-post-spike-alignment] docs: align Chantiers360 v2 post-spike status
  docs/chantiers360-v2-readme-post-closure                                      d672317 [origin/docs/chantiers360-v2-readme-post-closure] docs: align Chantiers360 v2 README after INC-02 closure
  docs/chantiers360-v2-technical-architecture-post-merge                        9e7bcb3 [origin/docs/chantiers360-v2-technical-architecture-post-merge] docs: align Chantiers360 v2 technical architecture post-merge status
  docs/close-lot-d1-status                                                      8815f0f [origin/docs/close-lot-d1-status] docs: close sfia v2.6 lot d1 status
  docs/close-lot-d2-status                                                      c0fc4b2 [origin/docs/close-lot-d2-status] docs: close sfia v2.6 lot d2 status
  docs/close-lot-d3-status                                                      6cdda92 [origin/docs/close-lot-d3-status] docs: close sfia v2.6 lot d3 status
  docs/fix-lot-d-plan-status                                                    af5d9a2 [origin/docs/fix-lot-d-plan-status] docs: refresh lot d migration plan status
+ docs/sfia-studio-doc32-post-p3-m1-correction                                  dd2a68c (/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1) [origin/docs/sfia-studio-doc32-post-p3-m1-correction] docs(sfia-studio): align document 32 after P3 and M1
+ docs/sfia-studio-fa6-mitigated-from-main                                      67f140a (/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean) [origin/docs/sfia-studio-fa6-mitigated-from-main] docs(sfia-studio): formalize F-A6 as mitigated after M1
+ docs/sfia-studio-m1-capitalization-rex                                        fa0eebe (/Users/morris/Projects/sfia-workspace-m1-capitalization) [origin/docs/sfia-studio-m1-capitalization-rex] docs(sfia-studio): capitalize M1 implementation and proofs
+ docs/sfia-studio-option-a-ci-governance-post-merge                            a42a85c (/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs) [origin/docs/sfia-studio-option-a-ci-governance-post-merge] docs(sfia-studio): review CI governance post-merge integration
  docs/sfia-studio-pr226-post-merge-sync                                        ed33044 [origin/docs/sfia-studio-pr226-post-merge-sync] docs(sfia-studio): sync status after PR 226 merge
+ docs/sfia-studio-recover-unmerged-project-docs                                1a2fa31 (/Users/morris/Projects/sfia-workspace-docs-recover) [origin/docs/sfia-studio-recover-unmerged-project-docs] docs(sfia-studio): record draft PR #256 on consolidation report
+ docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status                    960c90b (/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge) [origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status] docs(sfia-studio): align T-A7 F03 F11 F13 README post-merge status
  docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization                       c520b81 [origin/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization] docs(sfia-studio): capitalize T-A7 F11 F13 post-merge validation
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing                    dcdc90a docs(sfia-studio): record F11 F13 completion decisions
  docs/sfia-v2.6-lot-e-closure                                                  0ae4bb3 [origin/docs/sfia-v2.6-lot-e-closure] docs: close sfia v2.6 lot e status
  docs/sfia-v231-final-status                                                   2bddced [origin/docs/sfia-v231-final-status] docs: finalize SFIA v2.3.1 versioning status
  docs/sfia-v2x-versioning-post-merge                                           c0a4a74 [origin/docs/sfia-v2x-versioning-post-merge] docs: align SFIA v2.x versioning post-merge status
  documentation/sfia-discovery-act-02-editorial                                 153c50b [origin/documentation/sfia-discovery-act-02-editorial] docs(discovery): add Act II editorial and reorder roadmap
  documentation/sfia-discovery-act-03-novabuild-editorial                       6fcc76a [origin/documentation/sfia-discovery-act-03-novabuild-editorial] docs(discovery): fix Act III PR metadata
  documentation/sfia-discovery-acts-04-05-editorial                             7e65429 [origin/documentation/sfia-discovery-acts-04-05-editorial] docs(discovery): add Acts IV-V editorial content
  documentation/sfia-discovery-acts-06-07-editorial                             a25cb1c [origin/documentation/sfia-discovery-acts-06-07-editorial] docs(discovery): add Acts VI-VII editorial content
  documentation/sfia-discovery-legacy-migration-plan                            4021502 [origin/documentation/sfia-discovery-legacy-migration-plan] docs(discovery): add legacy migration plan
  documentation/sfia-discovery-pd-08-qa                                         f934a3c [origin/documentation/sfia-discovery-pd-08-qa] docs(discovery): complete PD-08 QA and editorial resync
  documentation/sfia-discovery-pd-09-capitalization                             28966a8 [origin/documentation/sfia-discovery-pd-09-capitalization] docs(discovery): record PD-09 capitalization decision
  evol/chantiers360-post-mvp-framing                                            8b40a0b [origin/evol/chantiers360-post-mvp-framing] docs: add Chantiers360 post-MVP roadmap framing
  fix/chantiers360-v2-rqa02-status-alignment                                    1ef4d67 [origin/fix/chantiers360-v2-rqa02-status-alignment] docs: align Chantiers360 v2 status wording for R-QA-02
  fix/remove-controlled-delivery-broken-link                                    b8eb945 [origin/fix/remove-controlled-delivery-broken-link] docs: remove obsolete controlled delivery terrain link
  framing/sfia-studio-control-tower                                             32e5271 feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
  framing/sfia-studio-first-user-visible-vertical-slice                         c195517 docs(sfia-studio): frame first user-visible vertical slice journey
+ framing/sfia-studio-next-product-increment                                    88fa465 (/Users/morris/Projects/sfia-workspace-framing-next-increment) [origin/main: behind 224] feat(sfia-studio): deliver control tower and AI-guided project intake foundation (#254)
+ framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity  bd3608c (/Users/morris/Projects/sfia-workspace-a5-2-framing) [origin/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity] docs(sfia-studio): record Morris A5.2 decisions
+ framing/sfia-studio-v3-native-option-a-after-t-a6                             aef7fd6 (/Users/morris/Projects/sfia-workspace-option-a-after-t-a6) docs(sfia-studio): frame next Option A step after T-A6
  framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution         65e5b60 [origin/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution] docs(sfia-studio): clarify T-A5 PR readiness HEAD tip reference
+ framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity   0b696ed (/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech) [origin/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity] docs(sfia-studio): freeze T-A6 PR publication tip metadata
+ framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions             b7a5e82 (/Users/morris/Projects/sfia-workspace-t-a7-framing) [origin/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions] docs(sfia-studio): record Morris T-A7 framing decisions
+ framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration           6849b6f (/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration) [origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration] docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions
+ framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step                33ea3e8 (/Users/morris/Projects/sfia-workspace-t-a7-next-decision) [origin/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step] docs(sfia-studio): record Morris T-A7 next-step decisions
+ framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness               b6a1933 (/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness) [origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness] fix(sfia-studio): harden T-A7 bounded readiness foundations
+ framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope               4fad47f (/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope) [origin/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope] docs(sfia-studio): remove trailing whitespace from wave 1 pack
  framing/sfia-studio-visible-slice-v2-runtime-ui-contract                      a1e207b docs(sfia-studio): fix V2 framing trailing whitespace
  framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage             3e8a437 [origin/main: behind 5] Merge pull request #295 from mcleland147/delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui
  main                                                                          b553f0a [origin/main: behind 2] Merge pull request #296 from mcleland147/delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime
  method/chantiers360-v2-inc-01-capitalization                                  5b5758f [origin/method/chantiers360-v2-inc-01-capitalization] docs: capitalize Chantiers360 v2 INC-01 delivery lifecycle
  method/chantiers360-v2-mvp-capitalization                                     adcda83 [origin/method/chantiers360-v2-mvp-capitalization] docs: adjust Chantiers360 v2 MVP capitalization references
+ method/codex-operating-model-pilot                                            ec7f397 (/Users/morris/Projects/sfia-codex-pilot) [origin/main: behind 284] Merge pull request #206 from mcleland147/project/campus360-opportunity-framing
  method/controlled-delivery-index-integration                                  61187dc docs: integrate controlled delivery index
  method/controlled-delivery-publication-package                                8dc8269 docs: summarize controlled delivery publication package
  method/controlled-delivery-publication-prep                                   9a6e0ae docs: prepare controlled delivery publication
  method/controlled-delivery-standard                                           bf5734d docs: summarize controlled delivery standard
  method/controlled-delivery-standard-hardening                                 8345337 docs: summarize controlled delivery standard hardening
  method/delivery-acceleration-level-3-rex                                      008dbff [origin/method/delivery-acceleration-level-3-rex] docs: capture delivery acceleration level 3 REX
  method/interv360-final-capitalization                                         8763417 [origin/method/interv360-final-capitalization] docs: add Interv360 final SFIA capitalization
  method/interv360-mvp-delivery-capitalization                                  2ef34cb [origin/method/interv360-mvp-delivery-capitalization] docs: add SFIA Fast Track MVP delivery template
  method/sfia-3-exploration-closure                                             f2a822e [origin/method/sfia-3-exploration-closure] docs: close SFIA 3.0 exploration and return to v2.4 baseline
  method/sfia-consolidation-roadmap                                             10cb8c0 [origin/method/sfia-consolidation-roadmap] docs: plan SFIA consolidation roadmap
+ method/sfia-cycle-knowledge-contracts                                         cae8415 (/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts) [origin/method/sfia-cycle-knowledge-contracts] docs(sfia): fix candidate CKC routing references
+ method/sfia-studio-v3-doctrine-consolidation                                  daf6f7d (/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation) [origin/method/sfia-studio-v3-doctrine-consolidation] docs(sfia-studio): validate v3 doctrine as Studio-exclusive
  method/sfia-v2-automation-levels                                              80aac9c [origin/method/sfia-v2-automation-levels] docs: add SFIA v2 project lifecycle automation trajectory
  method/sfia-v2-automation-vision                                              1398a46 [origin/method/sfia-v2-automation-vision] docs: define SFIA v2 automation and delivery vision
  method/sfia-v2-delivery-qa-test-standard                                      2645df2 [origin/method/sfia-v2-delivery-qa-test-standard] docs: disambiguate delivery QA prompt IDs
  method/sfia-v2-design-coverage-rules                                          bc697d8 [origin/method/sfia-v2-design-coverage-rules] docs: add SFIA v2 design coverage standard
  method/sfia-v2-figma-design-cycle                                             1bb55f0 [origin/method/sfia-v2-figma-design-cycle] docs: add SFIA v2 Figma design cycle standard
  method/sfia-v2-figma-fidelity-gate-standard                                   672d72b [origin/method/sfia-v2-figma-fidelity-gate-standard] docs: add SFIA v2 Figma fidelity gate standard
  method/sfia-v2-pilot-selection-decision                                       7282317 [origin/method/sfia-v2-pilot-selection-decision] docs: define SFIA v2 pilot selection decision framework
  method/sfia-v2-pilot-selection-scoring                                        22d8dcf [origin/method/sfia-v2-pilot-selection-scoring] docs: refine SFIA v2 pilot scoring strategy
  method/sfia-v2-project-bootstrap-standard                                     cbba66b [origin/method/sfia-v2-project-bootstrap-standard] docs: define SFIA v2 project bootstrap standard
  method/sfia-v2-prompt-routing-alignment                                       1bc9f3a [origin/method/sfia-v2-prompt-routing-alignment] docs: align SFIA v2 delivery QA prompts and routing
  method/sfia-v2-technical-architecture-decision-standard                       d8f4377 [origin/method/sfia-v2-technical-architecture-decision-standard] docs: add SFIA v2 technical architecture decision documentation standard
  method/sfia-v2.4-consolidation-operating-efficiency                           d96dfce [origin/method/sfia-v2.4-consolidation-operating-efficiency] docs: add SFIA v2.4 consolidation operating efficiency standard
  method/sfia-v2.4-reference-documentation-alignment                            e79a440 [origin/method/sfia-v2.4-reference-documentation-alignment] docs: align SFIA prompt handoff and knowledge with v2.4
  method/sfia-v2.4.1-documentation-status-promotion                             ecaf416 [origin/method/sfia-v2.4.1-documentation-status-promotion] docs: open SFIA 3.0 documentation trajectory
  method/sfia-v2.5-cycle-1-mvp                                                  4e3947f [origin/method/sfia-v2.5-cycle-1-mvp] docs: operationalize SFIA v2.5 proportional method MVP
  method/sfia-v2.5-project-plan                                                 7751855 [origin/method/sfia-v2.5-project-plan] docs: open SFIA v2.5 candidate project plan
  method/sfia-v2.5-review-pack-reset                                            a5497ef [origin/method/sfia-v2.5-review-pack-reset] docs: enforce mono-cycle SFIA review pack reset
  method/sfia-v2.6-repository-standard-decisions                                56ce850 [origin/method/sfia-v2.6-repository-standard-decisions] docs: finalize Morris repository standard decisions
  method/sfia-v2x-method-versioning-standard                                    a76c3f8 [origin/method/sfia-v2x-method-versioning-standard] docs: add SFIA v2.x method versioning standard
  migration/sfia-v2.6-lot-a-core                                                d630c6c [origin/migration/sfia-v2.6-lot-a-core] docs: record lot a branch sync with main after pr 170
  migration/sfia-v2.6-lot-d1-naming                                             930d5a2 [origin/migration/sfia-v2.6-lot-d1-naming] docs: record sfia v2.6 lot d1 execution
  migration/sfia-v2.6-lot-d2-naming                                             f56c768 [origin/migration/sfia-v2.6-lot-d2-naming] docs: record sfia v2.6 lot d2 execution
  migration/sfia-v2.6-lot-d3-naming                                             093c91a [origin/migration/sfia-v2.6-lot-d3-naming] docs: record sfia v2.6 lot d3 execution
+ modeled/sfia-studio-v3-native-option-a                                        52891e5 (/Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled) modeled(sfia-studio): define Option A v3-native contracts
  notion/pause-notion-publication-track                                         c79992b [origin/notion/pause-notion-publication-track] docs: pause SFIA Notion publication track
  notion/provisioning-engine-design                                             38b91eb [origin/notion/provisioning-engine-design] feat: add Notion provisioning engine dry-run
  notion/sfia-live-export-audit                                                 a7b22ec [origin/notion/sfia-live-export-audit] docs: audit SFIA Notion legacy export
+ ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ post-merge/sfia-studio-v3-native-option-a-t-a6                                1f25857 (/Users/morris/Projects/sfia-workspace-t-a6-post-merge) docs(sfia-studio): record T-A6 post-merge review
  pr/sfia-studio-v3-native-option-a-foundation                                  9c0f6f9 [origin/pr/sfia-studio-v3-native-option-a-foundation] docs(sfia-studio): prepare Option A foundation PR
  product/interv360-mvp-final-roadmap                                           14cadbe [origin/product/interv360-mvp-final-roadmap] docs: record MVP final roadmap PR status
  project/campus360-detailed-framing                                            ec7f397 Merge pull request #206 from mcleland147/project/campus360-opportunity-framing
  project/campus360-opportunity-framing                                         4275a60 [origin/project/campus360-opportunity-framing] docs(campus360): close pre-framing and validate G2 G3
  project/chantiers360-v2-bootstrap                                             774beed [origin/project/chantiers360-v2-bootstrap] docs: refine Chantiers360 v2 MVP scope
  project/sfia-studio-functional-architecture                                   4f4e7cf [origin/project/sfia-studio-functional-architecture] docs: sync SFIA Studio PR 213 post-merge integration
  project/sfia-studio-functional-design                                         cf64fdd [origin/project/sfia-studio-functional-design] docs(sfia-studio): synchronize functional design post-merge status
  project/sfia-studio-poc-orchestration-framing                                 3b162ec [origin/project/sfia-studio-poc-orchestration-framing] docs(sfia-studio): validate POC orchestration framing
  project/sfia-studio-pre-framing                                               18c6427 [origin/project/sfia-studio-pre-framing] docs(sfia-studio): finalize post-merge documentation
+ project/sfia-studio-ux-ui-reconciliation                                      7bdabdc (/Users/morris/Projects/sfia-workspace-ux-reconciliation) [origin/project/sfia-studio-ux-ui-reconciliation] docs: consolidate SFIA Studio UX Option B
  prompts/create-templates-context-pack                                         b6d9a88 [origin/prompts/create-templates-context-pack] docs: add SFIA prompt templates context pack
+ qa/sfia-studio-m1-bypass-probe                                                f0f0e0f (/Users/morris/Projects/sfia-workspace-m1-bypass-probe) [origin/qa/sfia-studio-m1-bypass-probe] qa(sfia-studio): add controlled M1 bypass probe
+ qa/sfia-studio-m1-bypass-probe-revert                                         b502c00 (/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert) [origin/qa/sfia-studio-m1-bypass-probe-revert] revert(sfia-studio): remove controlled M1 bypass probe
  qualification/sfia-v2.6-lot-d-naming                                          3a6d1e7 [origin/qualification/sfia-v2.6-lot-d-naming] docs: record sfia v2.6 lot d naming qualification
  qualification/sfia-v2.6-lot-e-global-controls                                 b87413b [origin/qualification/sfia-v2.6-lot-e-global-controls] docs: correct lot e qualification metrics and sublots
  qualification/sfia-v2.6-lot-f-superseded                                      2f89afd [origin/qualification/sfia-v2.6-lot-f-superseded] docs: qualify sfia v2.6 lot f superseded files
  qualification/sfia-v2.6-lot-f2-f005                                           7d87331 [origin/qualification/sfia-v2.6-lot-f2-f005] docs: close SFIA v2.6 Lot F with F2 Option B
+ record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions                   f89ba5f (/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions) [origin/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions] docs(sfia-studio): record T-A7 wave 1 Morris decisions
  recovery/campus360-detailed-framing                                           32690b6 [origin/main: ahead 1, behind 262] docs(campus360): recover detailed framing draft
  recovery/sfia-studio-functional-architecture-sync                             a5ad0c0 [origin/main: ahead 1, behind 262] docs(sfia-studio): recover functional architecture deltas
  release/interv360-mvp-release-readiness                                       dfc6430 [origin/release/interv360-mvp-release-readiness] docs: prepare Interv360 MVP release readiness PR
+ sfia/review-handoff                                                           3e61efc (/Users/morris/Projects/sfia-workspace/sfia-review-handoff) [origin/sfia/review-handoff] docs(review-handoff): publish SFIA Studio V3.1-D1 capitalization merge report
  spike/sfia-studio-openai-gpt-adapter                                          056c97f [origin/spike/sfia-studio-openai-gpt-adapter] fix(sfia-studio): address final PR readiness findings
+ tooling/review-handoff-canonical-publisher                                    14d58fe (/Users/morris/Projects/sfia-workspace-review-handoff-publisher) [origin/tooling/review-handoff-canonical-publisher] feat(tooling): add canonical review handoff publisher
+ ux/sfia-studio-d1-conversational-convergence                                  7dc6f9f (/Users/morris/Projects/sfia-workspace-d1-conversational-convergence) docs(sfia-studio): validate D1 conversational flow decisions
  validation/sfia-v2.6-lot-e2-validation                                        477fe55 [origin/validation/sfia-v2.6-lot-e2-validation] docs: align lot e2 report head
  validation/sfia-v2.6-lot-f1a-f1b                                              15185f3 [origin/validation/sfia-v2.6-lot-f1a-f1b] docs: validate SFIA v2.6 Lot F1a and F1b
=== REMOTE -vv ===
  origin/HEAD                                                                          -> origin/main
  origin/architecture/interv360-backend-persistence-decision                           4ee36ee docs: record backend persistence decision PR status
  origin/architecture/interv360-product-industrialization-framing                      bf01af0 docs: record product industrialization PR status
  origin/architecture/interv360-product-roadmap-after-role-simulation                  70a1110 docs: record roadmap after role simulation PR status
  origin/architecture/interv360-product-roadmap-next                                   69b8246 docs: record product roadmap next PR status
  origin/architecture/interv360-role-simulation-review                                 733cbff docs: record role simulation review PR status
  origin/archive/sfia-v2.6-lot-0-completion                                            2830efd docs: complete lot 0 archive execution tracking
  origin/archive/sfia-v2.6-lot-0-inventories                                           6cf7d36 fix: correct archived inventory relative links
  origin/archive/sfia-v2.6-lot-c-v3-mcp                                                d4401c3 docs: record sfia v2.6 lot c execution
  origin/audit/sfia-v2.6-lot-0-qualification                                           e200689 docs: record morris lot 0 decisions
  origin/audit/sfia-v2.6-repository-cartography                                        4ae75a9 docs: restore section headers in pass authority traceability
  origin/backlog/sfia-studio-poc-vertical-slice                                        b4b26b2 docs(sfia-studio): define validated vertical slice backlog
  origin/cadrage/sfia-v2.6-lot-h                                                       d54c952 docs: align Lot H single-cycle execution strategy
  origin/cadrage/task-tracker-light                                                    b763a31 feat: add task tracker MVP
  origin/capitalization/sfia-studio-p0-status-sync                                     e97e083 docs(sfia-studio): synchronize P0 status and POC trajectory
  origin/capitalization/sfia-studio-poc-framing-post-merge                             18d2151 docs(sfia-studio): correct post-merge versioning status
  origin/capitalization/sfia-studio-v3-1-d1-rex                                        d77c775 docs(sfia-studio): add V3.1-D1 capitalization REX
  origin/capitalization/sfia-v2.6-repository-rationalization                           40b6f00 docs: capitalize SFIA v2.6 repository rationalization
  origin/cleanup/sfia-v2.6-lot-j                                                       c4cc0b0 docs: execute SFIA v2.6 Lot J
  origin/conception/sfia-notion-product-space                                          f7f2e18 docs: design SFIA Notion product space
  origin/consolidation/interv360-application-rex                                       dc4c971 docs: add Interv360 application REX
  origin/consolidation/interv360-current-app-audit                                     8099a96 docs: audit current Interv360 application
  origin/consolidation/sfia-documentation-review                                       45e4498 docs: audit SFIA documentation structure
  origin/consolidation/sfia-global-capitalization                                      b11b318 docs: add SFIA automation architecture vision
  origin/cycle/chantiers360-v2-design-figma                                            5fa9fcb docs: add Figma P1 node ids and design captures
  origin/cycle/chantiers360-v2-detailed-framing                                        4546d88 docs: add detailed framing for Chantiers360 v2
  origin/cycle/chantiers360-v2-figma-fidelity-spike                                    6d44882 docs: record Morris validation for Chantiers360 v2 Figma spike
  origin/cycle/chantiers360-v2-functional-architecture                                 934be03 docs: fix Chantiers360 v2 cycle list
  origin/cycle/chantiers360-v2-light-architecture                                      55b2f0c docs: align Chantiers360 v2 architecture decisions before readiness
  origin/cycle/chantiers360-v2-mvp-backlog                                             9babc8c docs: fix Chantiers360 v2 backlog increment mapping
  origin/cycle/chantiers360-v2-ux-ui                                                   be9b2f3 docs: add UX UI framing for Chantiers360 v2
  origin/decision/chantiers360-v2-architecture-arbitrages                              9d425dd docs: align Chantiers360 v2 framing stack arbitration wording
  origin/delivery/chantiers360-r-qa-04-dashboard-real-data                             824883c docs: fix Chantiers360 R-QA-04 QA report status
  origin/delivery/chantiers360-v2-inc-01                                               e65a4d2 docs: prepare PR readiness for Chantiers360 v2 INC-01
  origin/delivery/chantiers360-v2-inc-02                                               c4cc4dc docs: prepare PR readiness for Chantiers360 v2 INC-02
  origin/delivery/chantiers360-v2-inc-03                                               6583ddf docs: prepare PR readiness for Chantiers360 v2 INC-03
  origin/delivery/chantiers360-v2-inc-04                                               406a883 docs: prepare PR readiness for Chantiers360 v2 INC-04
  origin/delivery/chantiers360-v2-inc-05                                               bcc6d37 docs: prepare PR readiness for Chantiers360 v2 INC-05
  origin/delivery/interv360-api-demo-hardening                                         7ef233a docs: record API demo hardening PR status
  origin/delivery/interv360-api-product-hardening                                      0418305 docs: record API hardening PR status
  origin/delivery/interv360-api-product-validation                                     69a33ed docs: record API product validation PR status
  origin/delivery/interv360-audit-trail                                                87662a2 docs: record audit trail PR status
  origin/delivery/interv360-auth-user-switcher                                         be10f7a docs: record auth user switcher PR status
  origin/delivery/interv360-backend-minimal-prototype                                  a310850 docs: record backend minimal prototype PR status
  origin/delivery/interv360-backend-persistence                                        f39adb8 docs: record backend persistence PR status
  origin/delivery/interv360-backend-users-session                                      1c0311d docs: record backend users session PR status
  origin/delivery/interv360-batch-01-demo-credibility                                  12efbb6 docs: record Batch 01 PR status
  origin/delivery/interv360-batch-02-demo-control-scenario                             a6eb49d docs: record Batch 02 PR status
  origin/delivery/interv360-batch-03-demo-readiness-package                            4d6e465 docs: record Batch 03 PR status
  origin/delivery/interv360-batch-04-demo-presentation-package                         bfa5e28 docs: record Batch 04 PR status
  origin/delivery/interv360-connected-ux-productization                                6f8c72b docs: record connected UX productization PR status
  origin/delivery/interv360-demo-feedback-review                                       5febd0f docs: record demo feedback review PR status
  origin/delivery/interv360-demo-mvp-closure                                           091eebb docs: record demo MVP closure PR status
  origin/delivery/interv360-demo-polish                                                d8394b7 docs: record demo polish visual review
  origin/delivery/interv360-demo-presentation-feedback                                 5481b74 docs: record demo presentation feedback PR status
  origin/delivery/interv360-demo-presentation-review                                   4a6c7b7 docs: record demo presentation review PR status
  origin/delivery/interv360-end-to-end-demo-hardening                                  ed2c0f4 docs: record end-to-end demo hardening PR status
  origin/delivery/interv360-frontend-api-connection                                    a23cefc docs: record frontend API connection PR status
  origin/delivery/interv360-inc-01-push-and-pr                                         06751ad docs: record INC-01 PR creation
  origin/delivery/interv360-inc-02-pr-preparation                                      82c7823 docs: record INC-02 push status
  origin/delivery/interv360-inc-03-pr-preparation                                      69325d0 docs: record INC-03 push status
  origin/delivery/interv360-inc-04-list-filtering-local-summary                        d306054 docs: record INC-04 PR status
  origin/delivery/interv360-product-demo-consolidation                                 1b44bc1 docs: record product demo consolidation PR status
  origin/delivery/interv360-product-industrialization                                  3bba55b docs: record product industrialization PR status
  origin/delivery/interv360-product-ux-finalization                                    e106d91 docs: record product UX PR status
  origin/delivery/interv360-request-model-finalization                                 b3bd01f docs: record request model PR status
  origin/delivery/interv360-request-model-productization                               6dded20 docs: record request model productization PR status
  origin/delivery/interv360-role-simulation                                            1547ff5 docs: record role simulation PR status
  origin/delivery/interv360-workflow-light-extension                                   5cd2b4e docs: record workflow light extension PR status
  origin/delivery/interv360-workflow-requalification                                   a830842 docs: record workflow requalification PR status
  origin/delivery/sfia-studio-control-tower-fast-track                                 c895a96 docs(sfia-studio): formalize F-A6 as mitigated after M1
  origin/delivery/sfia-studio-d1-shared-platform-integration                           c2d39a7 fix(sfia-studio): raise D1 intake provider timeout to 60s
  origin/delivery/sfia-studio-ops1-i3-action-gate                                      3607a3a feat(sfia-studio): deliver OPS1 I3 action gate
  origin/delivery/sfia-studio-poc-increment-a                                          89cb756 feat(sfia-studio): implement vertical slice increment A cockpit
  origin/delivery/sfia-studio-poc-increment-b                                          8316f26 feat(sfia-studio): connect cockpit to fixture harness
  origin/delivery/sfia-studio-poc-increment-c                                          96bb808 feat(sfia-studio): add bounded live GPT qualification
  origin/delivery/sfia-studio-poc-increment-d                                          41b9c46 feat(sfia-studio): add controlled Cursor sandbox execution
  origin/delivery/sfia-studio-shared-technical-platform                                08c282a docs(sfia-studio): record shared platform PR #255 metadata
  origin/delivery/sfia-studio-t-a7-consolidated-blocker-reduction                      c24da11 docs(sfia-studio): document consolidated T-A7 blocker reduction lot
  origin/delivery/sfia-studio-t-a7-f11-f13-internal-completion                         5afe095 fix(sfia-studio): correct bounded history provider typing
  origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation                     9c12505 docs(sfia-studio): document HARD T-A6 atomicity and persistence foundation lot
  origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance                   dc7a24c docs(sfia-studio): record whitespace findings CI success outcome
  origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916 docs(sfia-studio): remove trailing whitespace from path-aware preparation
  origin/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation              9e0a9c8 docs(sfia-studio): prepare T-A0 Doctrine Foundation PR
  origin/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation           5733d25 docs(sfia-studio): prepare T-A1 Project and LPS PR
  origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc   75aee25 docs(sfia-studio): align T-A2 PR readiness HEAD and checklist
  origin/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority  f8d25c2 docs(sfia-studio): align T-A3 PR readiness HEAD and checklist
  origin/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance    245f515 docs(sfia-studio): prepare T-A4 ExecutionContract PR readiness
  origin/delivery/sfia-studio-visible-slice-v1-project-core-composition                ca93e08 fix(sfia-studio): share injected clock across V1 composition
  origin/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge           7ef160c docs(sfia-studio): document V2-A1 runtime bridge
  origin/delivery/sfia-v2.6-lot-e1-link-fixes                                          7885903 docs: align e1 report correction HEAD sha
  origin/delivery/sfia-v2.6-lot-h                                                      694fedc docs: execute SFIA v2.6 Lot H
  origin/design/sfia-studio-ops1-scenario                                              d248b9d docs: validate OPS1 operational scenario
  origin/design/sfia-studio-poc-vertical-slice                                         58fb275 docs(sfia-studio): align remaining VS-CAND status
  origin/docs/chantiers360-close-r-qa-04                                               662f1c3 docs: close Chantiers360 R-QA-04 reserve
  origin/docs/chantiers360-v0-vs-sfia-v2-comparison                                    158bdf0 docs: add V0 vs SFIA v2 methodological comparison
  origin/docs/chantiers360-v0-vs-v2-post-merge                                         2e68166 docs: align V0 vs SFIA v2 comparison post-merge status
  origin/docs/chantiers360-v2-design-coverage-post-merge                               bbd54bf docs: align Chantiers360 v2 design coverage post-merge status
  origin/docs/chantiers360-v2-final-pilot-rex                                          438b3bb docs: add Chantiers360 v2 final pilot REX
  origin/docs/chantiers360-v2-inc-01-closure                                           09204fc docs: close Chantiers360 v2 INC-01 with reserves
  origin/docs/chantiers360-v2-inc-01-qa-g4                                             94f71f2 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-01
  origin/docs/chantiers360-v2-inc-02-closure                                           e461c6f merge: resolve conflicts with main for INC-02 closure docs
  origin/docs/chantiers360-v2-inc-02-qa-g4                                             ec073f6 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-02
  origin/docs/chantiers360-v2-inc-03-closure                                           1d795fc docs: close Chantiers360 v2 INC-03 with reserves
  origin/docs/chantiers360-v2-inc-03-qa-g4                                             f136c33 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-03
  origin/docs/chantiers360-v2-inc-04-closure                                           eb174d0 docs: close Chantiers360 v2 INC-04 with reserves
  origin/docs/chantiers360-v2-inc-04-qa-g4                                             96bd25e docs: add QA-G4 post-merge report for Chantiers360 v2 INC-04
  origin/docs/chantiers360-v2-inc-05-closure                                           9987df6 docs: close Chantiers360 v2 INC-05 with reserves
  origin/docs/chantiers360-v2-inc-05-qa-g4                                             d30ca72 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-05
  origin/docs/chantiers360-v2-post-capitalization-alignment                            314794a docs: align Chantiers360 v2 post-capitalization status
  origin/docs/chantiers360-v2-post-spike-alignment                                     fe93090 docs: align Chantiers360 v2 post-spike status
  origin/docs/chantiers360-v2-readme-post-closure                                      d672317 docs: align Chantiers360 v2 README after INC-02 closure
  origin/docs/chantiers360-v2-technical-architecture-post-merge                        9e7bcb3 docs: align Chantiers360 v2 technical architecture post-merge status
  origin/docs/close-lot-d1-status                                                      8815f0f docs: close sfia v2.6 lot d1 status
  origin/docs/close-lot-d2-status                                                      c0fc4b2 docs: close sfia v2.6 lot d2 status
  origin/docs/close-lot-d3-status                                                      6cdda92 docs: close sfia v2.6 lot d3 status
  origin/docs/fix-lot-d-plan-status                                                    af5d9a2 docs: refresh lot d migration plan status
  origin/docs/sfia-studio-doc32-post-p3-m1-correction                                  dd2a68c docs(sfia-studio): align document 32 after P3 and M1
  origin/docs/sfia-studio-fa6-mitigated-from-main                                      67f140a docs(sfia-studio): formalize F-A6 as mitigated after M1
  origin/docs/sfia-studio-m1-capitalization-rex                                        fa0eebe docs(sfia-studio): capitalize M1 implementation and proofs
  origin/docs/sfia-studio-option-a-ci-governance-post-merge                            a42a85c docs(sfia-studio): review CI governance post-merge integration
  origin/docs/sfia-studio-pr226-post-merge-sync                                        ed33044 docs(sfia-studio): sync status after PR 226 merge
  origin/docs/sfia-studio-recover-unmerged-project-docs                                1a2fa31 docs(sfia-studio): record draft PR #256 on consolidation report
  origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status                    960c90b docs(sfia-studio): align T-A7 F03 F11 F13 README post-merge status
  origin/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization                       c520b81 docs(sfia-studio): capitalize T-A7 F11 F13 post-merge validation
  origin/docs/sfia-v2.6-lot-e-closure                                                  0ae4bb3 docs: close sfia v2.6 lot e status
  origin/docs/sfia-v231-final-status                                                   2bddced docs: finalize SFIA v2.3.1 versioning status
  origin/docs/sfia-v2x-versioning-post-merge                                           c0a4a74 docs: align SFIA v2.x versioning post-merge status
  origin/documentation/sfia-discovery-act-02-editorial                                 153c50b docs(discovery): add Act II editorial and reorder roadmap
  origin/documentation/sfia-discovery-act-03-novabuild-editorial                       6fcc76a docs(discovery): fix Act III PR metadata
  origin/documentation/sfia-discovery-acts-04-05-editorial                             7e65429 docs(discovery): add Acts IV-V editorial content
  origin/documentation/sfia-discovery-acts-06-07-editorial                             a25cb1c docs(discovery): add Acts VI-VII editorial content
  origin/documentation/sfia-discovery-legacy-migration-plan                            4021502 docs(discovery): add legacy migration plan
  origin/documentation/sfia-discovery-pd-08-qa                                         f934a3c docs(discovery): complete PD-08 QA and editorial resync
  origin/documentation/sfia-discovery-pd-09-capitalization                             28966a8 docs(discovery): record PD-09 capitalization decision
  origin/evol/chantiers360-post-mvp-framing                                            8b40a0b docs: add Chantiers360 post-MVP roadmap framing
  origin/fix/chantiers360-v2-rqa02-status-alignment                                    1ef4d67 docs: align Chantiers360 v2 status wording for R-QA-02
  origin/fix/remove-controlled-delivery-broken-link                                    b8eb945 docs: remove obsolete controlled delivery terrain link
  origin/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity  bd3608c docs(sfia-studio): record Morris A5.2 decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution         65e5b60 docs(sfia-studio): clarify T-A5 PR readiness HEAD tip reference
  origin/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity   0b696ed docs(sfia-studio): freeze T-A6 PR publication tip metadata
  origin/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions             b7a5e82 docs(sfia-studio): record Morris T-A7 framing decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration           6849b6f docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step                33ea3e8 docs(sfia-studio): record Morris T-A7 next-step decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness               b6a1933 fix(sfia-studio): harden T-A7 bounded readiness foundations
  origin/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope               4fad47f docs(sfia-studio): remove trailing whitespace from wave 1 pack
  origin/main                                                                          e1befcb Merge pull request #297 from mcleland147/capitalization/sfia-studio-v3-1-d1-rex
  origin/method/chantiers360-v2-inc-01-capitalization                                  5b5758f docs: capitalize Chantiers360 v2 INC-01 delivery lifecycle
  origin/method/chantiers360-v2-mvp-capitalization                                     adcda83 docs: adjust Chantiers360 v2 MVP capitalization references
  origin/method/delivery-acceleration-level-3-rex                                      008dbff docs: capture delivery acceleration level 3 REX
  origin/method/interv360-final-capitalization                                         8763417 docs: add Interv360 final SFIA capitalization
  origin/method/interv360-mvp-delivery-capitalization                                  2ef34cb docs: add SFIA Fast Track MVP delivery template
  origin/method/sfia-3-exploration-closure                                             f2a822e docs: close SFIA 3.0 exploration and return to v2.4 baseline
  origin/method/sfia-consolidation-roadmap                                             10cb8c0 docs: plan SFIA consolidation roadmap
  origin/method/sfia-cycle-knowledge-contracts                                         cae8415 docs(sfia): fix candidate CKC routing references
  origin/method/sfia-studio-v3-doctrine-consolidation                                  daf6f7d docs(sfia-studio): validate v3 doctrine as Studio-exclusive
  origin/method/sfia-v2-automation-levels                                              80aac9c docs: add SFIA v2 project lifecycle automation trajectory
  origin/method/sfia-v2-automation-vision                                              1398a46 docs: define SFIA v2 automation and delivery vision
  origin/method/sfia-v2-delivery-qa-test-standard                                      2645df2 docs: disambiguate delivery QA prompt IDs
  origin/method/sfia-v2-design-coverage-rules                                          bc697d8 docs: add SFIA v2 design coverage standard
  origin/method/sfia-v2-figma-design-cycle                                             1bb55f0 docs: add SFIA v2 Figma design cycle standard
  origin/method/sfia-v2-figma-fidelity-gate-standard                                   672d72b docs: add SFIA v2 Figma fidelity gate standard
  origin/method/sfia-v2-pilot-selection-decision                                       7282317 docs: define SFIA v2 pilot selection decision framework
  origin/method/sfia-v2-pilot-selection-scoring                                        22d8dcf docs: refine SFIA v2 pilot scoring strategy
  origin/method/sfia-v2-project-bootstrap-standard                                     cbba66b docs: define SFIA v2 project bootstrap standard
  origin/method/sfia-v2-prompt-routing-alignment                                       1bc9f3a docs: align SFIA v2 delivery QA prompts and routing
  origin/method/sfia-v2-technical-architecture-decision-standard                       d8f4377 docs: add SFIA v2 technical architecture decision documentation standard
  origin/method/sfia-v2.4-consolidation-operating-efficiency                           d96dfce docs: add SFIA v2.4 consolidation operating efficiency standard
  origin/method/sfia-v2.4-reference-documentation-alignment                            e79a440 docs: align SFIA prompt handoff and knowledge with v2.4
  origin/method/sfia-v2.4.1-documentation-status-promotion                             ecaf416 docs: open SFIA 3.0 documentation trajectory
  origin/method/sfia-v2.5-cycle-1-mvp                                                  4e3947f docs: operationalize SFIA v2.5 proportional method MVP
  origin/method/sfia-v2.5-project-plan                                                 7751855 docs: open SFIA v2.5 candidate project plan
  origin/method/sfia-v2.5-review-pack-reset                                            a5497ef docs: enforce mono-cycle SFIA review pack reset
  origin/method/sfia-v2.6-repository-standard-decisions                                56ce850 docs: finalize Morris repository standard decisions
  origin/method/sfia-v2x-method-versioning-standard                                    a76c3f8 docs: add SFIA v2.x method versioning standard
  origin/migration/sfia-v2.6-lot-a-core                                                d630c6c docs: record lot a branch sync with main after pr 170
  origin/migration/sfia-v2.6-lot-d1-naming                                             930d5a2 docs: record sfia v2.6 lot d1 execution
  origin/migration/sfia-v2.6-lot-d2-naming                                             f56c768 docs: record sfia v2.6 lot d2 execution
  origin/migration/sfia-v2.6-lot-d3-naming                                             093c91a docs: record sfia v2.6 lot d3 execution
  origin/notion/pause-notion-publication-track                                         c79992b docs: pause SFIA Notion publication track
  origin/notion/provisioning-engine-design                                             38b91eb feat: add Notion provisioning engine dry-run
  origin/notion/sfia-live-export-audit                                                 a7b22ec docs: audit SFIA Notion legacy export
  origin/pr/sfia-studio-v3-native-option-a-foundation                                  9c0f6f9 docs(sfia-studio): prepare Option A foundation PR
  origin/product/interv360-mvp-final-roadmap                                           14cadbe docs: record MVP final roadmap PR status
  origin/project/campus360-opportunity-framing                                         4275a60 docs(campus360): close pre-framing and validate G2 G3
  origin/project/chantiers360-v2-bootstrap                                             774beed docs: refine Chantiers360 v2 MVP scope
  origin/project/sfia-studio-functional-architecture                                   4f4e7cf docs: sync SFIA Studio PR 213 post-merge integration
  origin/project/sfia-studio-functional-design                                         cf64fdd docs(sfia-studio): synchronize functional design post-merge status
  origin/project/sfia-studio-poc-orchestration-framing                                 3b162ec docs(sfia-studio): validate POC orchestration framing
  origin/project/sfia-studio-pre-framing                                               18c6427 docs(sfia-studio): finalize post-merge documentation
  origin/project/sfia-studio-ux-ui-reconciliation                                      7bdabdc docs: consolidate SFIA Studio UX Option B
  origin/prompts/create-templates-context-pack                                         b6d9a88 docs: add SFIA prompt templates context pack
  origin/qa/sfia-studio-m1-bypass-probe                                                f0f0e0f qa(sfia-studio): add controlled M1 bypass probe
  origin/qa/sfia-studio-m1-bypass-probe-revert                                         b502c00 revert(sfia-studio): remove controlled M1 bypass probe
  origin/qualification/sfia-v2.6-lot-d-naming                                          3a6d1e7 docs: record sfia v2.6 lot d naming qualification
  origin/qualification/sfia-v2.6-lot-e-global-controls                                 b87413b docs: correct lot e qualification metrics and sublots
  origin/qualification/sfia-v2.6-lot-f-superseded                                      2f89afd docs: qualify sfia v2.6 lot f superseded files
  origin/qualification/sfia-v2.6-lot-f2-f005                                           7d87331 docs: close SFIA v2.6 Lot F with F2 Option B
  origin/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions                   f89ba5f docs(sfia-studio): record T-A7 wave 1 Morris decisions
  origin/release/interv360-mvp-release-readiness                                       dfc6430 docs: prepare Interv360 MVP release readiness PR
  origin/sfia/review-handoff                                                           3e61efc docs(review-handoff): publish SFIA Studio V3.1-D1 capitalization merge report
  origin/spike/sfia-studio-openai-gpt-adapter                                          056c97f fix(sfia-studio): address final PR readiness findings
  origin/tooling/penpot-mcp-self-host-feedback                                         16fe9c3 docs: document Penpot MCP self-host feedback
  origin/tooling/review-handoff-canonical-publisher                                    14d58fe feat(tooling): add canonical review handoff publisher
  origin/validation/sfia-v2.6-lot-e2-validation                                        477fe55 docs: align lot e2 report head
  origin/validation/sfia-v2.6-lot-f1a-f1b                                              15185f3 docs: validate SFIA v2.6 Lot F1a and F1b
=== LOCAL MERGED origin/main ===
  architecture/interv360-backend-api-contract-framing
  architecture/interv360-backend-data-model-decision
  architecture/interv360-backend-persistence-decision
  architecture/interv360-backend-target-framing
  architecture/interv360-backend-technical-stack-decision
  architecture/interv360-product-industrialization-framing
  architecture/interv360-product-roadmap-after-role-simulation
  architecture/interv360-product-roadmap-next
  architecture/interv360-role-simulation-review
  architecture/sfia-studio-v3-native-option-a-technical
  archive/sfia-v2.6-lot-0-completion
  archive/sfia-v2.6-lot-0-inventories
  archive/sfia-v2.6-lot-c-v3-mcp
+ audit/sfia-studio-v3-native-dependencies
  audit/sfia-v2.6-lot-0-qualification
  audit/sfia-v2.6-repository-cartography
  cadrage/sfia-v2.6-lot-h
+ cadrage/task-tracker-light
  capitalization/sfia-documentation-completeness
* capitalization/sfia-studio-v3-1-d1-rex
  capitalization/sfia-v2.6-repository-rationalization
  cleanup/sfia-v2.6-lot-j
  conception/sfia-notion-product-space
  delivery/chantiers360-r-qa-04-dashboard-real-data
  delivery/interv360-api-demo-hardening
  delivery/interv360-api-product-hardening
  delivery/interv360-api-product-validation
  delivery/interv360-audit-trail
  delivery/interv360-auth-user-switcher
  delivery/interv360-backend-minimal-prototype
  delivery/interv360-backend-persistence
  delivery/interv360-backend-users-session
  delivery/interv360-batch-01-demo-credibility
  delivery/interv360-batch-02-demo-control-scenario
  delivery/interv360-batch-03-demo-readiness-package
  delivery/interv360-batch-04-demo-presentation-package
  delivery/interv360-connected-ux-productization
  delivery/interv360-demo-feedback-review
  delivery/interv360-demo-mvp-closure
  delivery/interv360-demo-polish
  delivery/interv360-demo-presentation-feedback
  delivery/interv360-demo-presentation-review
  delivery/interv360-end-to-end-demo-hardening
  delivery/interv360-frontend-api-connection
  delivery/interv360-frontend-api-connection-framing
  delivery/interv360-implementation-go-no-go
  delivery/interv360-inc-01-action-transition-decision
  delivery/interv360-inc-01-app-foundation
  delivery/interv360-inc-01-controlled-workflow-skeleton
  delivery/interv360-inc-01-controlled-workflow-validation
  delivery/interv360-inc-01-demo-reset
  delivery/interv360-inc-01-demo-script
  delivery/interv360-inc-01-final-demo-package
  delivery/interv360-inc-01-global-summary
  delivery/interv360-inc-01-implementation-preparation
  delivery/interv360-inc-01-intervention-readonly-skeleton
  delivery/interv360-inc-01-list-skeleton
  delivery/interv360-inc-01-local-persistence-decision
  delivery/interv360-inc-01-phase-2-delivery-decision
  delivery/interv360-inc-01-phase-2-rex
  delivery/interv360-inc-01-planning-readonly-skeleton
  delivery/interv360-inc-01-pr-preparation
  delivery/interv360-inc-01-push-and-pr
  delivery/interv360-inc-01-qualification-readonly-skeleton
  delivery/interv360-inc-01-readonly-demo-summary
  delivery/interv360-inc-01-report-readonly-skeleton
  delivery/interv360-inc-01-request-detail-skeleton
  delivery/interv360-inc-02-pr-preparation
  delivery/interv360-inc-02-ux-demo-improvement
  delivery/interv360-inc-03-multi-requests-local-demo
  delivery/interv360-inc-03-pr-preparation
  delivery/interv360-inc-04-list-filtering-local-summary
  delivery/interv360-product-demo-consolidation
  delivery/interv360-product-industrialization
  delivery/interv360-product-ux-finalization
  delivery/interv360-request-model-finalization
  delivery/interv360-request-model-productization
  delivery/interv360-role-simulation
  delivery/interv360-technical-arbitration
  delivery/interv360-workflow-light-extension
  delivery/interv360-workflow-requalification
  delivery/sfia-studio-t-a7-consolidated-blocker-reduction
  delivery/sfia-studio-t-a7-f11-f13-internal-completion
  delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
  delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
  delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
  delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
  delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
  delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
  delivery/sfia-studio-visible-slice-v1-project-core-composition
  delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
  delivery/sfia-studio-visible-slice-v2-a2-create-project-ui
  delivery/sfia-v2.6-lot-e1-link-fixes
  delivery/sfia-v2.6-lot-h
+ design/sfia-studio-v3-native-option-a-functional
+ design/sfia-studio-v3-native-option-a-functional-architecture
+ design/sfia-studio-v3-native-option-a-ux-ui
  docs/chantiers360-close-r-qa-04
  docs/close-lot-d1-status
  docs/close-lot-d2-status
  docs/close-lot-d3-status
  docs/fix-lot-d-plan-status
+ docs/sfia-studio-option-a-ci-governance-post-merge
+ docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
  docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing
  docs/sfia-v2.6-lot-e-closure
  documentation/sfia-discovery-act-02-editorial
  documentation/sfia-discovery-act-03-novabuild-editorial
  documentation/sfia-discovery-acts-04-05-editorial
  documentation/sfia-discovery-acts-06-07-editorial
  documentation/sfia-discovery-legacy-migration-plan
  documentation/sfia-discovery-pd-08-qa
  documentation/sfia-discovery-pd-09-capitalization
  evol/chantiers360-post-mvp-framing
  fix/remove-controlled-delivery-broken-link
  framing/sfia-studio-control-tower
  framing/sfia-studio-first-user-visible-vertical-slice
+ framing/sfia-studio-next-product-increment
+ framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
  framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
+ framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
+ framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
+ framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
+ framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
+ framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
+ framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
  framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage
  main
+ method/codex-operating-model-pilot
  method/controlled-delivery-index-integration
  method/controlled-delivery-publication-package
  method/controlled-delivery-publication-prep
  method/controlled-delivery-standard
  method/controlled-delivery-standard-hardening
  method/delivery-acceleration-level-3-rex
  method/interv360-mvp-delivery-capitalization
  method/sfia-3-exploration-closure
  method/sfia-v2.5-cycle-1-mvp
  method/sfia-v2.5-project-plan
  method/sfia-v2.5-review-pack-reset
  method/sfia-v2.6-repository-standard-decisions
  migration/sfia-v2.6-lot-a-core
  migration/sfia-v2.6-lot-d1-naming
  migration/sfia-v2.6-lot-d2-naming
  migration/sfia-v2.6-lot-d3-naming
+ modeled/sfia-studio-v3-native-option-a
  notion/provisioning-engine-design
  notion/sfia-live-export-audit
+ ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
+ ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
+ ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
+ ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
+ ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
+ ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
+ ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
+ ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
+ ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
+ ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
+ ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
+ ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
+ ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
+ ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
+ ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
+ ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
+ ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
+ ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
+ ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
+ ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
+ ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
+ ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
+ ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
+ ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
+ ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
+ ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
+ ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
+ ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
+ ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
+ ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
+ ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
+ ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
+ ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
+ ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
+ ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
+ ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
+ ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
+ ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
  pr/sfia-studio-v3-native-option-a-foundation
  product/interv360-mvp-final-roadmap
  project/campus360-detailed-framing
  project/campus360-opportunity-framing
  project/sfia-studio-functional-architecture
  project/sfia-studio-functional-design
  project/sfia-studio-pre-framing
+ project/sfia-studio-ux-ui-reconciliation
  qualification/sfia-v2.6-lot-d-naming
  qualification/sfia-v2.6-lot-e-global-controls
  qualification/sfia-v2.6-lot-f-superseded
  qualification/sfia-v2.6-lot-f2-f005
+ record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
  release/interv360-mvp-release-readiness
  validation/sfia-v2.6-lot-e2-validation
  validation/sfia-v2.6-lot-f1a-f1b
=== LOCAL NO-MERGED origin/main ===
  architecture/interv360-product-roadmap-after-persistence
  backlog/sfia-studio-ops1
  backlog/sfia-studio-poc-vertical-slice
  capitalization/sfia-studio-p0-status-sync
  capitalization/sfia-studio-poc-framing-post-merge
  consolidation/interv360-application-rex
  consolidation/interv360-current-app-audit
  consolidation/sfia-documentation-review
  consolidation/sfia-global-capitalization
  cycle/chantiers360-v2-design-figma
  cycle/chantiers360-v2-detailed-framing
  cycle/chantiers360-v2-figma-fidelity-spike
  cycle/chantiers360-v2-functional-architecture
  cycle/chantiers360-v2-light-architecture
  cycle/chantiers360-v2-mvp-backlog
  cycle/chantiers360-v2-ux-ui
  decision/chantiers360-v2-architecture-arbitrages
  delivery/chantiers360-v2-inc-01
  delivery/chantiers360-v2-inc-02
  delivery/chantiers360-v2-inc-03
  delivery/chantiers360-v2-inc-04
  delivery/chantiers360-v2-inc-05
+ delivery/sfia-studio-control-tower-fast-track
+ delivery/sfia-studio-d1-shared-platform-integration
  delivery/sfia-studio-ops1-i1-session-journal
  delivery/sfia-studio-ops1-i3-action-gate
  delivery/sfia-studio-poc-increment-a
  delivery/sfia-studio-poc-increment-b
  delivery/sfia-studio-poc-increment-c
  delivery/sfia-studio-poc-increment-d
+ delivery/sfia-studio-shared-technical-platform
+ delivery/sfia-studio-v3-native-option-a-ci-merge-governance
+ delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
  design/sfia-studio-ops1-scenario
  design/sfia-studio-ops1-technical-architecture
  design/sfia-studio-poc-vertical-slice
  devops/sfia-studio-ops1-foundation
  docs/chantiers360-v0-vs-sfia-v2-comparison
  docs/chantiers360-v0-vs-v2-post-merge
  docs/chantiers360-v2-design-coverage-post-merge
  docs/chantiers360-v2-final-pilot-rex
  docs/chantiers360-v2-inc-01-closure
  docs/chantiers360-v2-inc-01-qa-g4
  docs/chantiers360-v2-inc-02-closure
  docs/chantiers360-v2-inc-02-qa-g4
  docs/chantiers360-v2-inc-03-closure
  docs/chantiers360-v2-inc-03-qa-g4
  docs/chantiers360-v2-inc-04-closure
  docs/chantiers360-v2-inc-04-qa-g4
  docs/chantiers360-v2-inc-05-closure
  docs/chantiers360-v2-inc-05-qa-g4
  docs/chantiers360-v2-post-capitalization-alignment
  docs/chantiers360-v2-post-spike-alignment
  docs/chantiers360-v2-readme-post-closure
  docs/chantiers360-v2-technical-architecture-post-merge
+ docs/sfia-studio-doc32-post-p3-m1-correction
+ docs/sfia-studio-fa6-mitigated-from-main
+ docs/sfia-studio-m1-capitalization-rex
  docs/sfia-studio-pr226-post-merge-sync
+ docs/sfia-studio-recover-unmerged-project-docs
  docs/sfia-v231-final-status
  docs/sfia-v2x-versioning-post-merge
  fix/chantiers360-v2-rqa02-status-alignment
+ framing/sfia-studio-v3-native-option-a-after-t-a6
  framing/sfia-studio-visible-slice-v2-runtime-ui-contract
  method/chantiers360-v2-inc-01-capitalization
  method/chantiers360-v2-mvp-capitalization
  method/interv360-final-capitalization
  method/sfia-consolidation-roadmap
+ method/sfia-cycle-knowledge-contracts
+ method/sfia-studio-v3-doctrine-consolidation
  method/sfia-v2-automation-levels
  method/sfia-v2-automation-vision
  method/sfia-v2-delivery-qa-test-standard
  method/sfia-v2-design-coverage-rules
  method/sfia-v2-figma-design-cycle
  method/sfia-v2-figma-fidelity-gate-standard
  method/sfia-v2-pilot-selection-decision
  method/sfia-v2-pilot-selection-scoring
  method/sfia-v2-project-bootstrap-standard
  method/sfia-v2-prompt-routing-alignment
  method/sfia-v2-technical-architecture-decision-standard
  method/sfia-v2.4-consolidation-operating-efficiency
  method/sfia-v2.4-reference-documentation-alignment
  method/sfia-v2.4.1-documentation-status-promotion
  method/sfia-v2x-method-versioning-standard
  notion/pause-notion-publication-track
+ post-merge/sfia-studio-v3-native-option-a-t-a6
  project/chantiers360-v2-bootstrap
  project/sfia-studio-poc-orchestration-framing
  prompts/create-templates-context-pack
+ qa/sfia-studio-m1-bypass-probe
+ qa/sfia-studio-m1-bypass-probe-revert
  recovery/campus360-detailed-framing
  recovery/sfia-studio-functional-architecture-sync
+ sfia/review-handoff
  spike/sfia-studio-openai-gpt-adapter
+ tooling/review-handoff-canonical-publisher
+ ux/sfia-studio-d1-conversational-convergence
=== REMOTE MERGED origin/main ===
  origin/HEAD -> origin/main
  origin/architecture/interv360-backend-persistence-decision
  origin/architecture/interv360-product-industrialization-framing
  origin/architecture/interv360-product-roadmap-after-role-simulation
  origin/architecture/interv360-product-roadmap-next
  origin/architecture/interv360-role-simulation-review
  origin/archive/sfia-v2.6-lot-0-completion
  origin/archive/sfia-v2.6-lot-0-inventories
  origin/archive/sfia-v2.6-lot-c-v3-mcp
  origin/audit/sfia-v2.6-lot-0-qualification
  origin/audit/sfia-v2.6-repository-cartography
  origin/cadrage/sfia-v2.6-lot-h
  origin/cadrage/task-tracker-light
  origin/capitalization/sfia-studio-v3-1-d1-rex
  origin/capitalization/sfia-v2.6-repository-rationalization
  origin/cleanup/sfia-v2.6-lot-j
  origin/conception/sfia-notion-product-space
  origin/delivery/chantiers360-r-qa-04-dashboard-real-data
  origin/delivery/interv360-api-demo-hardening
  origin/delivery/interv360-api-product-hardening
  origin/delivery/interv360-api-product-validation
  origin/delivery/interv360-audit-trail
  origin/delivery/interv360-auth-user-switcher
  origin/delivery/interv360-backend-minimal-prototype
  origin/delivery/interv360-backend-persistence
  origin/delivery/interv360-backend-users-session
  origin/delivery/interv360-batch-01-demo-credibility
  origin/delivery/interv360-batch-02-demo-control-scenario
  origin/delivery/interv360-batch-03-demo-readiness-package
  origin/delivery/interv360-batch-04-demo-presentation-package
  origin/delivery/interv360-connected-ux-productization
  origin/delivery/interv360-demo-feedback-review
  origin/delivery/interv360-demo-mvp-closure
  origin/delivery/interv360-demo-polish
  origin/delivery/interv360-demo-presentation-feedback
  origin/delivery/interv360-demo-presentation-review
  origin/delivery/interv360-end-to-end-demo-hardening
  origin/delivery/interv360-frontend-api-connection
  origin/delivery/interv360-inc-01-push-and-pr
  origin/delivery/interv360-inc-02-pr-preparation
  origin/delivery/interv360-inc-03-pr-preparation
  origin/delivery/interv360-inc-04-list-filtering-local-summary
  origin/delivery/interv360-product-demo-consolidation
  origin/delivery/interv360-product-industrialization
  origin/delivery/interv360-product-ux-finalization
  origin/delivery/interv360-request-model-finalization
  origin/delivery/interv360-request-model-productization
  origin/delivery/interv360-role-simulation
  origin/delivery/interv360-workflow-light-extension
  origin/delivery/interv360-workflow-requalification
  origin/delivery/sfia-studio-t-a7-consolidated-blocker-reduction
  origin/delivery/sfia-studio-t-a7-f11-f13-internal-completion
  origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
  origin/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
  origin/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
  origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
  origin/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
  origin/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
  origin/delivery/sfia-studio-visible-slice-v1-project-core-composition
  origin/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
  origin/delivery/sfia-v2.6-lot-e1-link-fixes
  origin/delivery/sfia-v2.6-lot-h
  origin/docs/chantiers360-close-r-qa-04
  origin/docs/close-lot-d1-status
  origin/docs/close-lot-d2-status
  origin/docs/close-lot-d3-status
  origin/docs/fix-lot-d-plan-status
  origin/docs/sfia-studio-option-a-ci-governance-post-merge
  origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
  origin/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
  origin/docs/sfia-v2.6-lot-e-closure
  origin/documentation/sfia-discovery-act-02-editorial
  origin/documentation/sfia-discovery-act-03-novabuild-editorial
  origin/documentation/sfia-discovery-acts-04-05-editorial
  origin/documentation/sfia-discovery-acts-06-07-editorial
  origin/documentation/sfia-discovery-legacy-migration-plan
  origin/documentation/sfia-discovery-pd-08-qa
  origin/documentation/sfia-discovery-pd-09-capitalization
  origin/evol/chantiers360-post-mvp-framing
  origin/fix/remove-controlled-delivery-broken-link
  origin/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
  origin/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
  origin/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
  origin/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
  origin/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
  origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
  origin/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
  origin/main
  origin/method/delivery-acceleration-level-3-rex
  origin/method/interv360-mvp-delivery-capitalization
  origin/method/sfia-3-exploration-closure
  origin/method/sfia-v2.5-cycle-1-mvp
  origin/method/sfia-v2.5-project-plan
  origin/method/sfia-v2.5-review-pack-reset
  origin/method/sfia-v2.6-repository-standard-decisions
  origin/migration/sfia-v2.6-lot-a-core
  origin/migration/sfia-v2.6-lot-d1-naming
  origin/migration/sfia-v2.6-lot-d2-naming
  origin/migration/sfia-v2.6-lot-d3-naming
  origin/notion/provisioning-engine-design
  origin/notion/sfia-live-export-audit
  origin/pr/sfia-studio-v3-native-option-a-foundation
  origin/product/interv360-mvp-final-roadmap
  origin/project/campus360-opportunity-framing
  origin/project/sfia-studio-functional-architecture
  origin/project/sfia-studio-functional-design
  origin/project/sfia-studio-pre-framing
  origin/project/sfia-studio-ux-ui-reconciliation
  origin/qualification/sfia-v2.6-lot-d-naming
  origin/qualification/sfia-v2.6-lot-e-global-controls
  origin/qualification/sfia-v2.6-lot-f-superseded
  origin/qualification/sfia-v2.6-lot-f2-f005
  origin/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
  origin/release/interv360-mvp-release-readiness
  origin/tooling/penpot-mcp-self-host-feedback
  origin/validation/sfia-v2.6-lot-e2-validation
  origin/validation/sfia-v2.6-lot-f1a-f1b
=== REMOTE NO-MERGED origin/main ===
  origin/backlog/sfia-studio-poc-vertical-slice
  origin/capitalization/sfia-studio-p0-status-sync
  origin/capitalization/sfia-studio-poc-framing-post-merge
  origin/consolidation/interv360-application-rex
  origin/consolidation/interv360-current-app-audit
  origin/consolidation/sfia-documentation-review
  origin/consolidation/sfia-global-capitalization
  origin/cycle/chantiers360-v2-design-figma
  origin/cycle/chantiers360-v2-detailed-framing
  origin/cycle/chantiers360-v2-figma-fidelity-spike
  origin/cycle/chantiers360-v2-functional-architecture
  origin/cycle/chantiers360-v2-light-architecture
  origin/cycle/chantiers360-v2-mvp-backlog
  origin/cycle/chantiers360-v2-ux-ui
  origin/decision/chantiers360-v2-architecture-arbitrages
  origin/delivery/chantiers360-v2-inc-01
  origin/delivery/chantiers360-v2-inc-02
  origin/delivery/chantiers360-v2-inc-03
  origin/delivery/chantiers360-v2-inc-04
  origin/delivery/chantiers360-v2-inc-05
  origin/delivery/sfia-studio-control-tower-fast-track
  origin/delivery/sfia-studio-d1-shared-platform-integration
  origin/delivery/sfia-studio-ops1-i3-action-gate
  origin/delivery/sfia-studio-poc-increment-a
  origin/delivery/sfia-studio-poc-increment-b
  origin/delivery/sfia-studio-poc-increment-c
  origin/delivery/sfia-studio-poc-increment-d
  origin/delivery/sfia-studio-shared-technical-platform
  origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
  origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
  origin/design/sfia-studio-ops1-scenario
  origin/design/sfia-studio-poc-vertical-slice
  origin/docs/chantiers360-v0-vs-sfia-v2-comparison
  origin/docs/chantiers360-v0-vs-v2-post-merge
  origin/docs/chantiers360-v2-design-coverage-post-merge
  origin/docs/chantiers360-v2-final-pilot-rex
  origin/docs/chantiers360-v2-inc-01-closure
  origin/docs/chantiers360-v2-inc-01-qa-g4
  origin/docs/chantiers360-v2-inc-02-closure
  origin/docs/chantiers360-v2-inc-02-qa-g4
  origin/docs/chantiers360-v2-inc-03-closure
  origin/docs/chantiers360-v2-inc-03-qa-g4
  origin/docs/chantiers360-v2-inc-04-closure
  origin/docs/chantiers360-v2-inc-04-qa-g4
  origin/docs/chantiers360-v2-inc-05-closure
  origin/docs/chantiers360-v2-inc-05-qa-g4
  origin/docs/chantiers360-v2-post-capitalization-alignment
  origin/docs/chantiers360-v2-post-spike-alignment
  origin/docs/chantiers360-v2-readme-post-closure
  origin/docs/chantiers360-v2-technical-architecture-post-merge
  origin/docs/sfia-studio-doc32-post-p3-m1-correction
  origin/docs/sfia-studio-fa6-mitigated-from-main
  origin/docs/sfia-studio-m1-capitalization-rex
  origin/docs/sfia-studio-pr226-post-merge-sync
  origin/docs/sfia-studio-recover-unmerged-project-docs
  origin/docs/sfia-v231-final-status
  origin/docs/sfia-v2x-versioning-post-merge
  origin/fix/chantiers360-v2-rqa02-status-alignment
  origin/method/chantiers360-v2-inc-01-capitalization
  origin/method/chantiers360-v2-mvp-capitalization
  origin/method/interv360-final-capitalization
  origin/method/sfia-consolidation-roadmap
  origin/method/sfia-cycle-knowledge-contracts
  origin/method/sfia-studio-v3-doctrine-consolidation
  origin/method/sfia-v2-automation-levels
  origin/method/sfia-v2-automation-vision
  origin/method/sfia-v2-delivery-qa-test-standard
  origin/method/sfia-v2-design-coverage-rules
  origin/method/sfia-v2-figma-design-cycle
  origin/method/sfia-v2-figma-fidelity-gate-standard
  origin/method/sfia-v2-pilot-selection-decision
  origin/method/sfia-v2-pilot-selection-scoring
  origin/method/sfia-v2-project-bootstrap-standard
  origin/method/sfia-v2-prompt-routing-alignment
  origin/method/sfia-v2-technical-architecture-decision-standard
  origin/method/sfia-v2.4-consolidation-operating-efficiency
  origin/method/sfia-v2.4-reference-documentation-alignment
  origin/method/sfia-v2.4.1-documentation-status-promotion
  origin/method/sfia-v2x-method-versioning-standard
  origin/notion/pause-notion-publication-track
  origin/project/chantiers360-v2-bootstrap
  origin/project/sfia-studio-poc-orchestration-framing
  origin/prompts/create-templates-context-pack
  origin/qa/sfia-studio-m1-bypass-probe
  origin/qa/sfia-studio-m1-bypass-probe-revert
  origin/sfia/review-handoff
  origin/spike/sfia-studio-openai-gpt-adapter
  origin/tooling/review-handoff-canonical-publisher
ancestor src->main: YES
L/R origin/cap...origin/main=0	1
=== DIFF CAP..MAIN ===
=== LS-REMOTE ===
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex

```

## Classification cleanup readiness
# PR #297 Cleanup Readiness Classification

## Statut exact
CLEANUP CONDITIONALLY READY — PRECONDITIONS REQUIRED

## Preuves d’intégration
- PR #297 MERGED ; mergeCommit e1befcb80ed5e3c789a7de9036a8207d6b3e6771
- parents: b553f0aa… + d77c775f…
- origin/main = e1befcb8…
- arbres source et merge identiques (ccd9ad20…) ; diff source..merge vide
- document 05 byte-identical main/source ; SHA-256 6d6e7f7b… ; blob 785256a7… ; 436/24796
- CI post-merge 30612872178 PASS
- source ancêtre de origin/main ; L/R origin/cap...origin/main = 0/1 (merge commit seul côté main)
- aucun commit unique non intégré

## Worktrees concernés
- PRINCIPAL / SOURCE CHECKOUT: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`
  - branche: capitalization/sfia-studio-v3-1-d1-rex @ d77c775f…
  - tracked modifié: 0 ; staged: 0
  - untracked: 255 sous `.tmp-sfia-review/**` uniquement
  - locked: non ; prunable: non
  - impact: ne peut pas être `git worktree remove` (worktree principal) ; cleanup = switch branche + delete branches
- HANDOFF (EXCLU): `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` — sfia/review-handoff — hors cleanup projet
- Autres worktrees: hors périmètre PR #297 (POSTMERGE-F-02)

## Branches concernées
- locale: capitalization/sfia-studio-v3-1-d1-rex @ d77c775f… (présente, merged into origin/main)
- distante: origin/capitalization/sfia-studio-v3-1-d1-rex @ d77c775f… (présente)
- main locale: b553f0aa… — 0 ahead / 2 behind origin/main — ancêtre — FF-only possible
- origin/main: e1befcb8…

## Préconditions (mécaniques, explicites, réversibles)
1. Re-vérifier Git Truth au démarrage du GO cleanup
2. Synchroniser `main` locale en fast-forward uniquement vers e1befcb8… (aucune divergence)
3. Quitter la branche source dans le worktree principal (`git switch main` / checkout) — laisser `.tmp-sfia-review/**` en place
4. Ne pas exécuter `git worktree remove` sur le worktree principal
5. Supprimer la branche locale avec `git branch -d capitalization/sfia-studio-v3-1-d1-rex` uniquement
6. Supprimer la branche distante sans force (`git push origin --delete …`)
7. Vérifier main / branches / worktrees / réserve
8. Publier un nouveau handoff

## Opérations candidates futures
- FF main locale
- switch hors source
- `git branch -d` source locale
- delete remote source
- handoff post-cleanup

## Opérations interdites maintenant
- toute suppression branche
- tout worktree remove / prune effectif
- git clean / force / reset
- modification projet
- method / D2 / D3 / UI / CreateCycle

## Risque de perte
- AUCUN sur le contenu intégré (déjà sur origin/main)
- `.tmp-sfia-review/**` : preuves locales non versionnées ; survivant à un switch de branche ; ne pas `git clean`
- autres worktrees sales : hors scope — ne pas toucher

## Gate Morris requis
GO CLEANUP PR #297 SOURCE BRANCH AND WORKTREE SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
USE VERIFIED POST-MERGE CLEANUP PLAN —
SYNC LOCAL MAIN FAST-FORWARD ONLY —
DO NOT REMOVE PRIMARY WORKTREE —
DELETE LOCAL SOURCE BRANCH WITH git branch -d ONLY —
DELETE REMOTE SOURCE BRANCH WITHOUT FORCE —
PRESERVE SFIA REVIEW HANDOFF WORKTREE AND BRANCH —
VERIFY MAIN BRANCHES WORKTREES AND RESERVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

Note: le plan candidat historique mentionnait « remove source worktree » ; ici le tip source est sur le worktree principal — retirer le worktree est NON APPLICABLE ; adapter le GO cleanup en conséquence.


## Preuve no branch delete / no worktree remove
- ls-remote source toujours présent @ d77c775f6114eddd04af330cc943a869a5c4f6a2
- worktree count final: 77 (inchangé)
- branche courante toujours capitalization/…
- aucune commande delete/remove exécutée

## État Git final
```
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
=== status non-tmp ===
(none)
=== staged ===
=== ls-remote ===
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
=== worktree count ===
77

```

## Rapport temporaire complet
--- BEGIN POST-MERGE REPORT ---
# V3.1-D1 Capitalization Post-Merge Validation Report — PR #297

## A. Métadonnées
- Horodatage: 2026-07-31 09:44:06 CEST (+0200)
- Repository: mcleland147/sfia-workspace
- Workspace: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
- PR: https://github.com/mcleland147/sfia-workspace/pull/297
- MERGE_SHA: e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## B. Gate Morris
GO POST-MERGE VALIDATION PR #297 SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
VERIFY MERGE COMMIT PARENTS ORIGIN MAIN DOCUMENT HASH POST-MERGE CI RESERVE BODY COMMENTS REVIEWS AND LOCAL WORKTREES —
CLASSIFY CLEANUP READINESS —
NO BRANCH DELETE —
NO WORKTREE REMOVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

Date/heure/fuseau du GO : 2026-07-31 09:37 CEST (+0200)

## C. Cycle, profil, typologie et CKC
- Cycle: 14 — Post-merge
- Profil: Standard
- Typologie: DOC
- CKC: method-candidate / Léger / P2 / consommation obligatoire
- Fallback: 02-fifteen-cycles-synthetic-map.md + sfia-v2.5-project-cycles-method-candidate.md §4.14
- executionAuthority=false
- Objet: clôture honnête après merge, synchronisation vérifiable, réserves et préparation cleanup
- Limite: aucune suppression ou mutation

## D. Handoff source
- tip: 3e61efc188f9b25e9a96982d07d0313656d2a2e8
- blob: ac5895b43db85e9eb2a8f588616d07773c269f42
- niveau: Full
- verdict: V3.1-D1 CAPITALIZATION PR #297 MERGED INTO MAIN
- POSTMERGE-CI-01 dans handoff source: PENDING → confirmé PASS

## E. Git Truth initial
```
=== PWD/TOP/REMOTE ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
=== FETCH ===
=== BRANCH/HEADS ===
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
HEAD^=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
origin/cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
L/R origin/cap...HEAD=0	0
L/R main...origin/main=0	2
L/R origin/cap...origin/main=0	1
=== STATUS ===
--- untracked non-tmp count ---
       0
=== STAGED ===
=== LOG ===
d77c775 (HEAD -> capitalization/sfia-studio-v3-1-d1-rex, origin/capitalization/sfia-studio-v3-1-d1-rex) docs(sfia-studio): add V3.1-D1 capitalization REX
b553f0a (main) Merge pull request #296 from mcleland147/delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime
e2e8984 docs(sfia-studio): document V3.1-D1 catalog design and QA evidence
9123252 feat(sfia-studio): add V3.1-D1 cycle type catalog contract
3e8a437 (framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage) Merge pull request #295 from mcleland147/delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui
e1db1f5 feat(sfia-studio): add V2-A3 project workspace UI over process-local runtime
d0e498e Merge pull request #294 from mcleland147/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui
55a28d3 (delivery/sfia-studio-visible-slice-v2-a2-create-project-ui) fix(sfia-studio): resolve V2-A2 readiness findings
=== GH AUTH ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## F. PR Truth post-merge
```json
{
  "number": 297,
  "url": "https://github.com/mcleland147/sfia-workspace/pull/297",
  "title": "docs(sfia-studio): add V3.1-D1 capitalization REX",
  "state": "MERGED",
  "isDraft": false,
  "mergedAt": "2026-07-31T07:27:13Z",
  "mergeCommit": {
    "oid": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771"
  },
  "baseRefName": "main",
  "baseRefOid": "b553f0aaec120e03b8cfca27f3f0e5fc03f1480e",
  "headRefName": "capitalization/sfia-studio-v3-1-d1-rex",
  "headRefOid": "d77c775f6114eddd04af330cc943a869a5c4f6a2",
  "changedFiles": 1,
  "additions": 436,
  "deletions": 0,
  "reviewDecision": ""
}
```
- commits: 1
- files: [
  {
    "path": "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md",
    "additions": 436,
    "deletions": 0,
    "changeType": "ADDED"
  }
]

## G. Body final complet
```markdown
# docs(sfia-studio): add V3.1-D1 capitalization REX

## 1. Summary

This PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.

It captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup — without promoting method assets and without opening D2/D3.

## 2. Context

- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).
- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.
- This publication is documentation-only and remains subject to a distinct Morris merge GO.

## 3. Scope

**In scope (exactly one file):**

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`

**Out of scope:**

- framing README / backlog 08 / documents 12–14
- D1 reports 01–04
- code / tests / config / dependencies
- method / templates / CKC
- D2 resolver / QualifyCycle bridge
- D3 / UI / Figma / CreateCycle / persistence

## 4. Capitalization coverage

Document sections A–T cover:

- chronology (framing → cleanup → local capitalization)
- Morris decisions consumed
- factual observations
- lessons and candidate reusable practices
- candidate recommendations (not applied)
- future decision pack D-REX-01…06 (NOT DECIDED)
- reserves register
- anti-claims and next-gate candidate

## 5. Morris decisions

Referenced as already adopted/executed (not reinvented):

- D-V3-01…08 and D-V3.1-CAT-01…08
- QA-G3 PASS
- publication / ready-for-review / merge of PR #296
- post-merge / worktree / archive / cleanup GOs
- capitalization GO (local document only)

No new Morris decision is created by this PR.

## 6. Evidence and metrics

- Catalog: 15 entries · 4 detailed / 11 synthetic CKC mappings
- QA reinforced before fix: 34 PASS / 12 FAIL
- After corrective + revalidation: 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS
- PR #296: 13 files · 2 source commits · +3667 / −155
- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`
- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`
- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`
- CI pre-merge: run `30577786752` PASS
- CI post-merge: run `30585808183` PASS
- Archive SHA-256 proofs (event only; not Git truth):
  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`
  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`

## 7. Epistemic distinctions

The document keeps strict prefixes/status labels:

- `Observation —`
- `Enseignement —`
- `Pratique candidate réutilisable —`
- `Recommandation candidate —`
- Morris decisions: adopted / executed
- D-REX-01…06: `NOT DECIDED — MORRIS DECISION REQUIRED`

Candidate practices are **not** method baseline.
Recommendations are **not** applied in this PR.

## 8. Risks and reserves

**Inherited minor reserve (not a new defect of document 05):**

`ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED`

Framing README condensation remains accepted and traceable via docs 12/13/14, reports 01–05, PR #296, and handoffs. Not lifted. Not D2.

**Other risks:**

- misreading capitalization as method promotion → mitigated by anti-claims and boundaries
- misreading D-REX-06 as D2 authorization → explicitly NOT DECIDED / not automatic

## 9. Boundaries

This PR does **not** claim:

- D2/D3 open
- resolver / QualifyCycle / UI / CreateCycle / persistence implemented
- method baseline promotion
- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED
- zero bugs

## 10. Validation

- Local Git Truth on capitalization branch @ `b553f0aa…` (0/0 vs main)
- Document structure A–T complete
- Metrics/SHAs cross-checked against PR #296, CI runs, and D1 reports
- Epistemic distinctions verified
- No project mutation during PR readiness
- Full Studio test suite not re-run (documentation-only; metrics already evidenced)

## 11. Review guidance

Reviewers should verify:

1. single-file documentation scope
2. no method/code/test changes
3. observations ≠ recommendations ≠ Morris decisions
4. D-REX remain NOT DECIDED
5. README reserve remains accepted and not lifted
6. no implicit D2/D3 authorization

## 12. Checklist

- [x] Capitalization cycle complete
- [x] Observations and recommendations separated
- [x] Morris decisions identifiable
- [x] Future decision pack remains NOT DECIDED
- [x] Accepted README reserve remains traceable and not lifted
- [x] No code, tests, dependencies or method changes
- [x] No D2/D3, UI or CreateCycle
- [x] Commit and push authorized by Morris
- [x] Draft PR opened
- [x] Remote CI completed
- [x] Morris merge GO granted



```

## H. Merge commit
```
=== MERGE SHOW ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
b553f0aaec120e03b8cfca27f3f0e5fc03f1480e d77c775f6114eddd04af330cc943a869a5c4f6a2
Merge pull request #297 from mcleland147/capitalization/sfia-studio-v3-1-d1-rex
mcleland147
Fri Jul 31 09:27:12 2026 +0200
=== PARENTS ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771 b553f0aaec120e03b8cfca27f3f0e5fc03f1480e d77c775f6114eddd04af330cc943a869a5c4f6a2
=== DIFF-TREE CC ===
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
=== DIFF NAME-STATUS BASE..MERGE ===
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md
=== DIFF STAT ===
 .../05-capitalization-rex.md                       | 436 +++++++++++++++++++++
 1 file changed, 436 insertions(+)
ancestor base: YES
ancestor src: YES
=== TREES ===
merge_tree=ccd9ad20779bc1f41534ee98f3e24461b9620a72
src_tree=ccd9ad20779bc1f41534ee98f3e24461b9620a72
=== DIFF SRC..MERGE ===
(empty expected)

```

## I. Parents
- 1er: b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
- 2e: d77c775f6114eddd04af330cc943a869a5c4f6a2
- ordre: OK

## J. Comparaison des arbres
- merge tree = source tree = ccd9ad20779bc1f41534ee98f3e24461b9620a72
- diff d77c775f6114eddd04af330cc943a869a5c4f6a2..e1befcb80ed5e3c789a7de9036a8207d6b3e6771: vide

## K. origin/main
- e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## L. Commit source
- d77c775f6114eddd04af330cc943a869a5c4f6a2 — docs(sfia-studio): add V3.1-D1 capitalization REX
- parent: b553f0aaec120e03b8cfca27f3f0e5fc03f1480e

## M. Document intégré
```
=== DOC MAIN ===
6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577  -
     436   24796
blob_main=785256a777976877461a841d3351a72e94aeb793
=== DOC SOURCE ===
6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577  -
     436   24796
blob_src=785256a777976877461a841d3351a72e94aeb793
=== CMP ===
BYTE_IDENTICAL

```

## N. Hash, blob et métriques
- SHA-256: 6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577
- blob: 785256a777976877461a841d3351a72e94aeb793
- 436 lignes / 24796 octets
- cmp main/source: BYTE_IDENTICAL

## O. CI pré-merge
```json
{
  "conclusion": "success",
  "databaseId": 30607787551,
  "event": "pull_request",
  "headSha": "d77c775f6114eddd04af330cc943a869a5c4f6a2",
  "name": "SFIA Studio CI",
  "status": "completed",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551",
  "workflowName": "SFIA Studio CI"
}
```

## P. CI post-merge complète
```

✓ main SFIA Studio CI · 30612872178
Triggered via push about 17 minutes ago

JOBS
✓ Detect SFIA Studio changes in 7s (ID 91099412334)
✓ Build and validate SFIA Studio in 1m36s (ID 91099442024)
✓ SFIA Studio Required Gate in 2s (ID 91099736550)

ANNOTATIONS
! Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
Detect SFIA Studio changes: .github#4

! Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
Build and validate SFIA Studio: .github#2


For more information about a job, try: gh run view --job=<job-id>
View this run on GitHub: https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178

```
```json
{
  "conclusion": "success",
  "createdAt": "2026-07-31T07:27:15Z",
  "databaseId": 30612872178,
  "event": "push",
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
          "name": "Modeled governance tests",
          "number": 9,
          "startedAt": "2026-07-31T07:29:00Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Secret pattern scan (targeted)",
          "number": 10,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Trailing whitespace check",
          "number": 11,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Post Setup Node.js",
          "number": 21,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Post Checkout",
          "number": 22,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:01Z",
          "conclusion": "success",
          "name": "Complete job",
          "number": 23,
          "startedAt": "2026-07-31T07:29:01Z",
          "status": "completed"
        }
      ],
      "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178/job/91099442024"
    },
    {
      "completedAt": "2026-07-31T07:29:16Z",
      "conclusion": "success",
      "databaseId": 91099736550,
      "name": "SFIA Studio Required Gate",
      "startedAt": "2026-07-31T07:29:14Z",
      "status": "completed",
      "steps": [
        {
          "completedAt": "2026-07-31T07:29:14Z",
          "conclusion": "success",
          "name": "Set up job",
          "number": 1,
          "startedAt": "2026-07-31T07:29:14Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:15Z",
          "conclusion": "success",
          "name": "Aggregate required gate",
          "number": 2,
          "startedAt": "2026-07-31T07:29:14Z",
          "status": "completed"
        },
        {
          "completedAt": "2026-07-31T07:29:15Z",
          "conclusion": "success",
          "name": "Complete job",
          "number": 3,
          "startedAt": "2026-07-31T07:29:15Z",
          "status": "completed"
        }
      ],
      "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178/job/91099736550"
    }
  ],
  "name": "SFIA Studio CI",
  "status": "completed",
  "updatedAt": "2026-07-31T07:29:17Z",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178",
  "workflowName": "SFIA Studio CI"
}
```
Runs on merge SHA:
```json
[
  {
    "conclusion": "success",
    "createdAt": "2026-07-31T07:27:15Z",
    "databaseId": 30612872178,
    "event": "push",
    "headSha": "e1befcb80ed5e3c789a7de9036a8207d6b3e6771",
    "name": "SFIA Studio CI",
    "status": "completed",
    "updatedAt": "2026-07-31T07:29:17Z",
    "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30612872178",
    "workflowName": "SFIA Studio CI"
  }
]
```
POSTMERGE-CI-01 — PASS — RUN 30612872178 COMPLETED SUCCESS ON MERGE SHA

## Q. Comments et reviews
- issue comments: []
- pull comments: []
- reviews: []

## R. Réserve héritée
INHERITED-R-01 — ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED — NON-BLOCKING
Présente dans body ; non levée ; ne bloque pas cleanup ; pas une autorisation D2.

## S. Findings
# PR #297 Post-Merge Findings

## REMOTE-F-01
- statut: CLOSED
- preuve: checkbox Remote CI completed cochée après run pré-merge PASS 30607787551

## READY-F-02
- statut: CLOSED
- preuve: wording “This draft PR” → “This PR” appliqué avant merge; body final vérifié

## POSTMERGE-CI-01
- statut: PASS / CLOSED
- handoff source: PENDING
- requalification: PASS — run 30612872178 completed/success on MERGE_SHA e1befcb80ed5e3c789a7de9036a8207d6b3e6771
- jobs: Detect / Build and validate / Required Gate — success
- steps: Typecheck, Lint, Build, Unit tests, Modeled governance tests, Secret pattern scan, Trailing whitespace — success

## INHERITED-R-01
- statut: ACCEPTED — STILL TRACEABLE — NOT LIFTED
- nature: réserve héritée (condensation framing README)
- bloquant post-merge: NON
- bloquant cleanup: NON
- D2: non autorisé

## POSTMERGE-F-01 — SOURCE CHECKED OUT IN PRIMARY WORKTREE WITH TMP UNTRACKED
- observation: le tip source `capitalization/sfia-studio-v3-1-d1-rex` @ d77c775f… est la branche courante du worktree principal `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`, avec 255 fichiers non suivis exclusivement sous `.tmp-sfia-review/**` ; aucun tracked/staged projet
- source: inventaire worktree + status
- sévérité: mineure / opérationnelle
- bloquant post-merge: NON
- bloquant cleanup READY absolu: OUI pour un éventuel `git worktree remove` du primaire (interdit / impossible) ; NON pour un cleanup branche après checkout main, si les preuves tmp sont laissées en place
- action candidate: dans un futur GO cleanup — FF main, checkout main, `git branch -d` local, delete remote ; ne pas retirer le worktree principal ; optionnellement archiver `.tmp-sfia-review` hors cycle si besoin
- gate requis: GO CLEANUP distinct
- statut: OPEN — observation locale (non résolue ici)

## POSTMERGE-F-02 — UNRELATED WORKTREES DIRTY (OUT OF SCOPE)
- observation: 77 worktrees inventoriés ; plusieurs hors lot portent tracked/untracked non liés à PR #297 ; handoff `sfia/review-handoff` exclu du cleanup projet
- source: inventaire global
- sévérité: informative
- bloquant post-merge: NON
- bloquant cleanup source PR #297: NON (hors périmètre)
- action candidate: aucune dans ce cycle
- gate requis: aucun pour ce lot
- statut: NOTED — hors scope


## T. Inventaire complet des worktrees
```
worktree /Users/morris/Projects/sfia-workspace
HEAD c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

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
HEAD 3e61efc188f9b25e9a96982d07d0313656d2a2e8
branch refs/heads/sfia/review-handoff

=== PRUNE DRY-RUN ===

```

## U. État complet de chaque worktree
```

===== WORKTREE: /Users/morris/Projects/sfia-workspace =====
/Users/morris/Projects/sfia-workspace
branch=delivery/sfia-studio-control-tower-fast-track
HEAD=c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
locked=MAIN_OR_BARE
--- status --untracked=all ---
?? .tmp-sfia-review/a5-2-decide/handoff-publish.out
?? .tmp-sfia-review/a5-2-decide/truth.txt
?? .tmp-sfia-review/a5-2-framing/commit.txt
?? .tmp-sfia-review/a5-2-framing/diff-stat.txt
?? .tmp-sfia-review/a5-2-framing/full.diff
?? .tmp-sfia-review/a5-2-framing/handoff-publish.out
?? .tmp-sfia-review/a5-2-framing/ls-remote.txt
?? .tmp-sfia-review/a5-2-framing/merge-check-runs.json
?? .tmp-sfia-review/a5-2-framing/name-status.txt
?? .tmp-sfia-review/a5-2-framing/pr280.json
?? .tmp-sfia-review/a5-2-framing/run-view.json
?? .tmp-sfia-review/a5-2-framing/runs-for-commit.json
?? .tmp-sfia-review/a5-2-framing/show.txt
?? .tmp-sfia-review/a5-2-framing/source-inventory.txt
?? .tmp-sfia-review/a5-2-framing/src-t-a7-01-framing-and-scope.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-02-t-a7-cutover-preconditions.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-03-t-a6-and-option-a-completion-criteria.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-04-reservations-risks-and-stop-conditions.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-05-morris-decision-pack.md
?? .tmp-sfia-review/a5-2-framing/src-t-a7-README.md
?? .tmp-sfia-review/a5-2-framing/status.txt
?? .tmp-sfia-review/a5-2-framing/truth.txt
?? .tmp-sfia-review/a5-2-framing/worktree-truth.txt
?? .tmp-sfia-review/a5-2-review/full.diff
?? .tmp-sfia-review/a5-2-review/handoff-publish.out
?? .tmp-sfia-review/a5-2-review/run.json
?? .tmp-sfia-review/a5-2-review/truth.txt
?? .tmp-sfia-review/a52-decision-record.diff
?? .tmp-sfia-review/a52-pr-cumulative.diff
?? .tmp-sfia-review/a52-pr-decision-record.diff
?? .tmp-sfia-review/a52-pr281-body.md
?? .tmp-sfia-review/a52-pr281-checks.txt
?? .tmp-sfia-review/a52-pr281-cumulative.diff
?? .tmp-sfia-review/a52-pr281-meta.json
?? .tmp-sfia-review/accel-05.md
?? .tmp-sfia-review/accel-README.md
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/commit-plan/commit-1-files.txt
?? .tmp-sfia-review/commit-plan/commit-2-files.txt
?? .tmp-sfia-review/commit-plan/commit-3-files.txt
?? .tmp-sfia-review/commit-plan/commit-4-files.txt
?? .tmp-sfia-review/commit-plan/commit-5-files.txt
?? .tmp-sfia-review/commit-plan/commit-6-files.txt
?? .tmp-sfia-review/commit-plan/duplicate-files.txt
?? .tmp-sfia-review/commit-plan/excluded-files.txt
?? .tmp-sfia-review/commit-plan/unclassified-files.txt
?? .tmp-sfia-review/control-tower-fast-track-evidence/00-live-ready-morris.txt
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png
?? .tmp-sfia-review/d1-c1-created-files.txt
?? .tmp-sfia-review/d1-c1-modified.diff
?? .tmp-sfia-review/d1-i1-created-files.txt
?? .tmp-sfia-review/d1-i1-modified.diff
?? .tmp-sfia-review/doc32-commit/commit-ec.txt
?? .tmp-sfia-review/doc32-commit/commit-fuller.txt
?? .tmp-sfia-review/doc32-commit/commit-stdout.txt
?? .tmp-sfia-review/doc32-commit/commit-ts.txt
?? .tmp-sfia-review/doc32-commit/commit.diff
?? .tmp-sfia-review/doc32-commit/empty-cached.stat
?? .tmp-sfia-review/doc32-commit/left-right.txt
?? .tmp-sfia-review/doc32-commit/pre-commit.diff
?? .tmp-sfia-review/doc32-commit/pre-commit.stat
?? .tmp-sfia-review/doc32-commit/show-full.txt
?? .tmp-sfia-review/doc32-commit/show-name-status.txt
?? .tmp-sfia-review/doc32-commit/show-stat.txt
?? .tmp-sfia-review/doc32-commit/staged.diff
?? .tmp-sfia-review/doc32-commit/staged.diff.bak
?? .tmp-sfia-review/doc32-commit/staged.name-status
?? .tmp-sfia-review/doc32-commit/staged.stat
?? .tmp-sfia-review/doc32-commit/status-final.txt
?? .tmp-sfia-review/doc32-post-p3-m1/after-acquis.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-hors-perimetre.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-meta.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-reserves.md
?? .tmp-sfia-review/doc32-post-p3-m1/after-succes-reserve.md
?? .tmp-sfia-review/doc32-post-p3-m1/all-32.txt
?? .tmp-sfia-review/doc32-post-p3-m1/before-acquis.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-hors-perimetre.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-meta.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-reserves.md
?? .tmp-sfia-review/doc32-post-p3-m1/before-succes-reserve.md
?? .tmp-sfia-review/doc32-post-p3-m1/blob-initial.txt
?? .tmp-sfia-review/doc32-post-p3-m1/doc32-before.md
?? .tmp-sfia-review/doc32-post-p3-m1/doc32-path.txt
?? .tmp-sfia-review/doc32-post-p3-m1/doc32-paths.txt
?? .tmp-sfia-review/doc32-post-p3-m1/full.diff
?? .tmp-sfia-review/doc32-post-p3-m1/occurrences-full.txt
?? .tmp-sfia-review/doc32-post-p3-m1/occurrences-raw.txt
?? .tmp-sfia-review/doc32-post-p3-m1/semantic-review.txt
?? .tmp-sfia-review/doc32-pr-body.md
?? .tmp-sfia-review/doc32-pr275-merge/ci-found
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-jobs.txt
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-qual.txt
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-run.json
?? .tmp-sfia-review/doc32-pr275-merge/ci-post-view.json
?? .tmp-sfia-review/doc32-pr275-merge/ci-pr.json
?? .tmp-sfia-review/doc32-pr275-merge/merge-cmd.txt
?? .tmp-sfia-review/doc32-pr275-merge/merge-ec.txt
?? .tmp-sfia-review/doc32-pr275-merge/merge-out.txt
?? .tmp-sfia-review/doc32-pr275-merge/merge-ts.txt
?? .tmp-sfia-review/doc32-pr275-merge/postmerge-runs.json
?? .tmp-sfia-review/doc32-pr275-merge/pr-after.json
?? .tmp-sfia-review/doc32-pr275-merge/pr-before.json
?? .tmp-sfia-review/doc32-pr275-merge/pr-body-before.md
?? .tmp-sfia-review/doc32-pr275-merge/pr-diff-before.txt
?? .tmp-sfia-review/doc32-pr275-merge/pr-threads-before.json
?? .tmp-sfia-review/doc32-pr275-merge/remote-branch-after.txt
?? .tmp-sfia-review/doc32-pr275-merge/ruleset.json
?? .tmp-sfia-review/doc32-pr275-merge/squash-fuller.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash-name-status.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash-sha.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash-stat.txt
?? .tmp-sfia-review/doc32-pr275-merge/squash.diff
?? .tmp-sfia-review/doc32-pr275-merge/ts-start.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/branches-contains.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/bypass.json
?? .tmp-sfia-review/doc32-pr275-postmerge/ci-post.json
?? .tmp-sfia-review/doc32-pr275-postmerge/doc32-on-main.md
?? .tmp-sfia-review/doc32-pr275-postmerge/doc32-useful.md
?? .tmp-sfia-review/doc32-pr275-postmerge/job-90018681920.meta.json
?? .tmp-sfia-review/doc32-pr275-postmerge/job-90018732641.meta.json
?? .tmp-sfia-review/doc32-pr275-postmerge/job-90019119514.meta.json
?? .tmp-sfia-review/doc32-pr275-postmerge/local-branch.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/local-src-sha.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/origin-main-fuller.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/origin-main-sha.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/pr-after.json
?? .tmp-sfia-review/doc32-pr275-postmerge/pr-body.md
?? .tmp-sfia-review/doc32-pr275-postmerge/remote-src.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/ruleset-summary.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/ruleset.json
?? .tmp-sfia-review/doc32-pr275-postmerge/squash-fuller.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/squash-name-status.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/squash-stat.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/squash.diff
?? .tmp-sfia-review/doc32-pr275-postmerge/ts.txt
?? .tmp-sfia-review/doc32-pr275-postmerge/worktree-list.txt
?? .tmp-sfia-review/doc32-pr275-readiness/bypass.json
?? .tmp-sfia-review/doc32-pr275-readiness/ci-run.json
?? .tmp-sfia-review/doc32-pr275-readiness/commit-fuller.txt
?? .tmp-sfia-review/doc32-pr275-readiness/commit.diff
?? .tmp-sfia-review/doc32-pr275-readiness/github-compare.diff
?? .tmp-sfia-review/doc32-pr275-readiness/job-90013737560.json
?? .tmp-sfia-review/doc32-pr275-readiness/job-90013783710.json
?? .tmp-sfia-review/doc32-pr275-readiness/job-90014180221.json
?? .tmp-sfia-review/doc32-pr275-readiness/pr-body.md
?? .tmp-sfia-review/doc32-pr275-readiness/pr-threads.json
?? .tmp-sfia-review/doc32-pr275-readiness/pr-view.json
?? .tmp-sfia-review/doc32-pr275-readiness/ruleset-summary.txt
?? .tmp-sfia-review/doc32-pr275-readiness/ruleset.json
?? .tmp-sfia-review/doc32-pr275-readiness/ts.txt
?? .tmp-sfia-review/doc32-push-pr/ci-found
?? .tmp-sfia-review/doc32-push-pr/ci-qual.txt
?? .tmp-sfia-review/doc32-push-pr/ci-run-view.json
?? .tmp-sfia-review/doc32-push-pr/ci-run.json
?? .tmp-sfia-review/doc32-push-pr/commit-fuller.txt
?? .tmp-sfia-review/doc32-push-pr/commit.diff
?? .tmp-sfia-review/doc32-push-pr/compare.stat
?? .tmp-sfia-review/doc32-push-pr/github-compare.diff
?? .tmp-sfia-review/doc32-push-pr/ls-remote-before.txt
?? .tmp-sfia-review/doc32-push-pr/pr-body.md
?? .tmp-sfia-review/doc32-push-pr/pr-checks-rollup.json
?? .tmp-sfia-review/doc32-push-pr/pr-checks.txt
?? .tmp-sfia-review/doc32-push-pr/pr-create-ec.txt
?? .tmp-sfia-review/doc32-push-pr/pr-create-out.txt
?? .tmp-sfia-review/doc32-push-pr/pr-create-ts.txt
?? .tmp-sfia-review/doc32-push-pr/pr-list-before.json
?? .tmp-sfia-review/doc32-push-pr/pr-merge-guard.json
?? .tmp-sfia-review/doc32-push-pr/pr-search-commit.json
?? .tmp-sfia-review/doc32-push-pr/pr-view.json
?? .tmp-sfia-review/doc32-push-pr/push-ec.txt
?? .tmp-sfia-review/doc32-push-pr/push-out.txt
?? .tmp-sfia-review/doc32-push-pr/push-ts.txt
?? .tmp-sfia-review/doc32-push-pr/runs.json
?? .tmp-sfia-review/doc32-push-pr/show-name-status.txt
?? .tmp-sfia-review/doc32-push-pr/show-stat.txt
?? .tmp-sfia-review/doc32-squash-body.txt
?? .tmp-sfia-review/fa6-clean-branch/baseline-doc24.md
?? .tmp-sfia-review/fa6-clean-branch/commit-fuller.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-name-status.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-stat.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-stderr.txt
?? .tmp-sfia-review/fa6-clean-branch/commit-stdout.txt
?? .tmp-sfia-review/fa6-clean-branch/diff-tree.txt
?? .tmp-sfia-review/fa6-clean-branch/fa6-section.md
?? .tmp-sfia-review/fa6-clean-branch/left-right.txt
?? .tmp-sfia-review/fa6-clean-branch/new-commit.txt
?? .tmp-sfia-review/fa6-clean-branch/pr-local-full.diff
?? .tmp-sfia-review/fa6-clean-branch/pr-local-name-status.txt
?? .tmp-sfia-review/fa6-clean-branch/pr-local-stat.txt
?? .tmp-sfia-review/fa6-clean-branch/ruleset.json
?? .tmp-sfia-review/fa6-clean-branch/source-delta.diff
?? .tmp-sfia-review/fa6-clean-branch/source-delta.patch
?? .tmp-sfia-review/fa6-clean-branch/staged-name-status.txt
?? .tmp-sfia-review/fa6-clean-branch/staged-stat.txt
?? .tmp-sfia-review/fa6-clean-branch/staged.diff
?? .tmp-sfia-review/fa6-clean-branch/status-after.txt
?? .tmp-sfia-review/fa6-clean-branch/target-doc24.md
?? .tmp-sfia-review/fa6-clean-branch/worktree-pre-stage.diff
?? .tmp-sfia-review/fa6-clean-pr/check-runs.json
?? .tmp-sfia-review/fa6-clean-pr/commits-lr.txt
?? .tmp-sfia-review/fa6-clean-pr/diff-stat.txt
?? .tmp-sfia-review/fa6-clean-pr/fa6-section.md
?? .tmp-sfia-review/fa6-clean-pr/full.diff
?? .tmp-sfia-review/fa6-clean-pr/gh-compare.json
?? .tmp-sfia-review/fa6-clean-pr/name-status.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-checks-2.err
?? .tmp-sfia-review/fa6-clean-pr/pr-checks-2.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-checks.err
?? .tmp-sfia-review/fa6-clean-pr/pr-checks.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-create-exit.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-create-stderr.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-create-stdout.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-diff.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-num.txt
?? .tmp-sfia-review/fa6-clean-pr/pr-view.json
?? .tmp-sfia-review/fa6-clean-pr/ruleset.json
?? .tmp-sfia-review/fa6-clean-pr/run-view.json
?? .tmp-sfia-review/fa6-clean-pr/runs.json
?? .tmp-sfia-review/fa6-clean-pr/status-final.txt
?? .tmp-sfia-review/fa6-clean-push/ahead-behind-u.txt
?? .tmp-sfia-review/fa6-clean-push/diff-tree.txt
?? .tmp-sfia-review/fa6-clean-push/fa6-section.md
?? .tmp-sfia-review/fa6-clean-push/gh-commit.json
?? .tmp-sfia-review/fa6-clean-push/gh-file-meta.json
?? .tmp-sfia-review/fa6-clean-push/local-before.txt
?? .tmp-sfia-review/fa6-clean-push/local-full.diff
?? .tmp-sfia-review/fa6-clean-push/local-name-status.txt
?? .tmp-sfia-review/fa6-clean-push/local-stat.txt
?? .tmp-sfia-review/fa6-clean-push/lr-remote.txt
?? .tmp-sfia-review/fa6-clean-push/prs-after.json
?? .tmp-sfia-review/fa6-clean-push/push-exit.txt
?? .tmp-sfia-review/fa6-clean-push/push-stderr.txt
?? .tmp-sfia-review/fa6-clean-push/push-stdout.txt
?? .tmp-sfia-review/fa6-clean-push/remote-after.txt
?? .tmp-sfia-review/fa6-clean-push/remote-before.txt
?? .tmp-sfia-review/fa6-clean-push/remote-full.diff
?? .tmp-sfia-review/fa6-clean-push/remote-ns.txt
?? .tmp-sfia-review/fa6-clean-push/remote-stat.txt
?? .tmp-sfia-review/fa6-clean-push/ruleset.json
?? .tmp-sfia-review/fa6-clean-push/runs.json
?? .tmp-sfia-review/fa6-clean-push/show-name-status.txt
?? .tmp-sfia-review/fa6-clean-push/show-stat.txt
?? .tmp-sfia-review/fa6-clean-push/status-after.txt
?? .tmp-sfia-review/fa6-cleanup/24-main.md
?? .tmp-sfia-review/fa6-cleanup/fa6-worktree-block.txt
?? .tmp-sfia-review/fa6-cleanup/handoff-initial.txt
?? .tmp-sfia-review/fa6-cleanup/local-branch-meta.txt
?? .tmp-sfia-review/fa6-cleanup/local-branches-after.txt
?? .tmp-sfia-review/fa6-cleanup/local-branches-before.txt
?? .tmp-sfia-review/fa6-cleanup/local-d-stderr.txt
?? .tmp-sfia-review/fa6-cleanup/local-d-stdout.txt
?? .tmp-sfia-review/fa6-cleanup/post-cleanup.txt
?? .tmp-sfia-review/fa6-cleanup/pr-after.json
?? .tmp-sfia-review/fa6-cleanup/pr-before.json
?? .tmp-sfia-review/fa6-cleanup/remote-delete-meta.txt
?? .tmp-sfia-review/fa6-cleanup/remote-delete-stderr.txt
?? .tmp-sfia-review/fa6-cleanup/remote-delete-stdout.txt
?? .tmp-sfia-review/fa6-cleanup/remote-heads-after.txt
?? .tmp-sfia-review/fa6-cleanup/remote-heads-before.txt
?? .tmp-sfia-review/fa6-cleanup/ruleset.json
?? .tmp-sfia-review/fa6-cleanup/safe-porcelain.txt
?? .tmp-sfia-review/fa6-cleanup/safe-unexpected.txt
?? .tmp-sfia-review/fa6-cleanup/target-status.txt
?? .tmp-sfia-review/fa6-cleanup/tree-compare.txt
?? .tmp-sfia-review/fa6-cleanup/truth-safe.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-after.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-before.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-list-after.txt
?? .tmp-sfia-review/fa6-cleanup/worktrees-list-before.txt
?? .tmp-sfia-review/fa6-cleanup/wt-remove-meta.txt
?? .tmp-sfia-review/fa6-cleanup/wt-remove-stderr.txt
?? .tmp-sfia-review/fa6-cleanup/wt-remove-stdout.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/24-after.md
?? .tmp-sfia-review/fa6-closure-pr-ready/24-before.md
?? .tmp-sfia-review/fa6-closure-pr-ready/blobs.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/commit-check.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/commit-name-status.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/commit-stat.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/contradiction-rows.json
?? .tmp-sfia-review/fa6-closure-pr-ready/contradictions-real.json
?? .tmp-sfia-review/fa6-closure-pr-ready/diff-check.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/full-diff.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/handoff-initial.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/log-graph.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/pr-body-candidate.md
?? .tmp-sfia-review/fa6-closure-pr-ready/range-name-status.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/range-stat.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/ruleset.json
?? .tmp-sfia-review/fa6-closure-pr-ready/section-12.md
?? .tmp-sfia-review/fa6-closure-pr-ready/section-17.md
?? .tmp-sfia-review/fa6-closure-pr-ready/sections-modified.md
?? .tmp-sfia-review/fa6-closure-pr-ready/truth.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/ts.txt
?? .tmp-sfia-review/fa6-closure-pr-ready/word-diff.txt
?? .tmp-sfia-review/fa6-closure-publish/check-runs.json
?? .tmp-sfia-review/fa6-closure-publish/commit-status.json
?? .tmp-sfia-review/fa6-closure-publish/content-keys.txt
?? .tmp-sfia-review/fa6-closure-publish/handoff-initial.txt
?? .tmp-sfia-review/fa6-closure-publish/local-diff.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-body-remote.md
?? .tmp-sfia-review/fa6-closure-publish/pr-body.md
?? .tmp-sfia-review/fa6-closure-publish/pr-checks-refresh.json
?? .tmp-sfia-review/fa6-closure-publish/pr-checks.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-create-meta.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-create-stdout.txt
?? .tmp-sfia-review/fa6-closure-publish/pr-metadata.json
?? .tmp-sfia-review/fa6-closure-publish/push-meta.txt
?? .tmp-sfia-review/fa6-closure-publish/push-stderr.txt
?? .tmp-sfia-review/fa6-closure-publish/push-stdout.txt
?? .tmp-sfia-review/fa6-closure-publish/remote-before.txt
?? .tmp-sfia-review/fa6-closure-publish/remote-blob.txt
?? .tmp-sfia-review/fa6-closure-publish/remote-diff.txt
?? .tmp-sfia-review/fa6-closure-publish/scope.txt
?? .tmp-sfia-review/fa6-closure-publish/status-after-push.txt
?? .tmp-sfia-review/fa6-closure-publish/truth.txt
?? .tmp-sfia-review/fa6-closure/24-before.md
?? .tmp-sfia-review/fa6-closure/blob24-before.txt
?? .tmp-sfia-review/fa6-closure/commit-check.txt
?? .tmp-sfia-review/fa6-closure/commit-fuller.txt
?? .tmp-sfia-review/fa6-closure/commit-stat.txt
?? .tmp-sfia-review/fa6-closure/commit.txt
?? .tmp-sfia-review/fa6-closure/contradiction-scan.txt
?? .tmp-sfia-review/fa6-closure/doc24-diff.txt
?? .tmp-sfia-review/fa6-closure/existing-branch.txt
?? .tmp-sfia-review/fa6-closure/handoff-initial.txt
?? .tmp-sfia-review/fa6-closure/remote-project-branch.txt
?? .tmp-sfia-review/fa6-closure/ruleset-summary.json
?? .tmp-sfia-review/fa6-closure/sections-modified.md
?? .tmp-sfia-review/fa6-closure/sections-other.md
?? .tmp-sfia-review/fa6-closure/truth.txt
?? .tmp-sfia-review/fa6-closure/ts.txt
?? .tmp-sfia-review/fa6-closure/wt-head.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/24-after.md
?? .tmp-sfia-review/fa6-correction-rereadiness/24-base.md
?? .tmp-sfia-review/fa6-correction-rereadiness/blobs.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/blocker-scan.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/bp-lines-after.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/contradiction-rows.json
?? .tmp-sfia-review/fa6-correction-rereadiness/contradictions-real.json
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-commit.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-diff-stat.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-diff.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/corrective-name-status.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/cumulative-diff.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/cumulative-name-status.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/cumulative-stat.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/handoff-initial.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/header-bp.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/log-two-commits.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/pr-body-candidate.md
?? .tmp-sfia-review/fa6-correction-rereadiness/ruleset.json
?? .tmp-sfia-review/fa6-correction-rereadiness/section-12.md
?? .tmp-sfia-review/fa6-correction-rereadiness/section-17.md
?? .tmp-sfia-review/fa6-correction-rereadiness/section17-before.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/sections-capitalisation.md
?? .tmp-sfia-review/fa6-correction-rereadiness/truth-final.txt
?? .tmp-sfia-review/fa6-correction-rereadiness/truth-initial.txt
?? .tmp-sfia-review/fa6-cycle-close/24-canonical.md
?? .tmp-sfia-review/fa6-cycle-close/blob.txt
?? .tmp-sfia-review/fa6-cycle-close/branch-commits.txt
?? .tmp-sfia-review/fa6-cycle-close/ci-on-squash.json
?? .tmp-sfia-review/fa6-cycle-close/ci-post-jobs.json
?? .tmp-sfia-review/fa6-cycle-close/ci-post.json
?? .tmp-sfia-review/fa6-cycle-close/contradiction-rows.json
?? .tmp-sfia-review/fa6-cycle-close/contradictions-real.json
?? .tmp-sfia-review/fa6-cycle-close/handoff-initial.txt
?? .tmp-sfia-review/fa6-cycle-close/main-freshness.txt
?? .tmp-sfia-review/fa6-cycle-close/main.txt
?? .tmp-sfia-review/fa6-cycle-close/pr.json
?? .tmp-sfia-review/fa6-cycle-close/ruleset.json
?? .tmp-sfia-review/fa6-cycle-close/squash-commit.txt
?? .tmp-sfia-review/fa6-cycle-close/squash-parent.txt
?? .tmp-sfia-review/fa6-cycle-close/tree-compare.txt
?? .tmp-sfia-review/fa6-cycle-close/truth.txt
?? .tmp-sfia-review/fa6-cycle-close/worktree-inventory.txt
?? .tmp-sfia-review/fa6-cycle-close/worktrees-summary.txt
?? .tmp-sfia-review/fa6-merge-279/24-canonical.md
?? .tmp-sfia-review/fa6-merge-279/24-premerge.md
?? .tmp-sfia-review/fa6-merge-279/blob-main.txt
?? .tmp-sfia-review/fa6-merge-279/blob-pre.txt
?? .tmp-sfia-review/fa6-merge-279/checks-pre.json
?? .tmp-sfia-review/fa6-merge-279/ci-main-runs.json
?? .tmp-sfia-review/fa6-merge-279/ci-post-jobs.json
?? .tmp-sfia-review/fa6-merge-279/ci-post.json
?? .tmp-sfia-review/fa6-merge-279/ci-pre.json
?? .tmp-sfia-review/fa6-merge-279/ci-runs-head.json
?? .tmp-sfia-review/fa6-merge-279/diff-ns.txt
?? .tmp-sfia-review/fa6-merge-279/handoff-initial.txt
?? .tmp-sfia-review/fa6-merge-279/inline.json
?? .tmp-sfia-review/fa6-merge-279/issue-comments.json
?? .tmp-sfia-review/fa6-merge-279/local-branch.txt
?? .tmp-sfia-review/fa6-merge-279/main-after.txt
?? .tmp-sfia-review/fa6-merge-279/main-commit.txt
?? .tmp-sfia-review/fa6-merge-279/main-ns.txt
?? .tmp-sfia-review/fa6-merge-279/main-stat.txt
?? .tmp-sfia-review/fa6-merge-279/merge-meta.txt
?? .tmp-sfia-review/fa6-merge-279/merge-stderr.txt
?? .tmp-sfia-review/fa6-merge-279/merge-stdout.txt
?? .tmp-sfia-review/fa6-merge-279/post-merge-checks.json
?? .tmp-sfia-review/fa6-merge-279/post-merge-done
?? .tmp-sfia-review/fa6-merge-279/post-merge-runs.json
?? .tmp-sfia-review/fa6-merge-279/pr-after.json
?? .tmp-sfia-review/fa6-merge-279/pr-before.json
?? .tmp-sfia-review/fa6-merge-279/pr-diff.txt
?? .tmp-sfia-review/fa6-merge-279/pre-merge-main.txt
?? .tmp-sfia-review/fa6-merge-279/remote-branch.txt
?? .tmp-sfia-review/fa6-merge-279/reviews.json
?? .tmp-sfia-review/fa6-merge-279/ruleset.json
?? .tmp-sfia-review/fa6-merge-279/squash-body.txt
?? .tmp-sfia-review/fa6-merge-279/squash-sha.txt
?? .tmp-sfia-review/fa6-merge-279/truth.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/24-before.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/24-final.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/blob-final.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/blob-initial.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/blocker-context-before.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/check-runs.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-jobs.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-log-excerpts.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-run.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ci-runs-poll.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/corrective-diff.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/corrective-name-status.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/corrective-stat.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/cumulative-stat.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/handoff-initial.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/inline-comments.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/issue-comments.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/lines-after-edit.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/log-3-commits.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/merge-pack-candidate.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/new-head.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/new-run-id.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/occurrence-scan-before.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-after-push.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-body-after.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-body-before.md
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-final.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/pr-initial.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/push-meta.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/push-stderr.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/push-stdout.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/remote-diff.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/reviews.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/ruleset.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/target-run.json
?? .tmp-sfia-review/fa6-postmerge-lang-fix/third-commit.txt
?? .tmp-sfia-review/fa6-postmerge-lang-fix/truth-initial.txt
?? .tmp-sfia-review/fa6-pr274-merge/blob-main.txt
?? .tmp-sfia-review/fa6-pr274-merge/branch-remote-after.txt
?? .tmp-sfia-review/fa6-pr274-merge/diff-stat.txt
?? .tmp-sfia-review/fa6-pr274-merge/fa6-section-main.md
?? .tmp-sfia-review/fa6-pr274-merge/findings-line-main.txt
?? .tmp-sfia-review/fa6-pr274-merge/full.diff
?? .tmp-sfia-review/fa6-pr274-merge/integrated-diff.txt
?? .tmp-sfia-review/fa6-pr274-merge/integrated-ns.txt
?? .tmp-sfia-review/fa6-pr274-merge/integrated-stat.txt
?? .tmp-sfia-review/fa6-pr274-merge/left-right.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-after.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-before.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-commit-diff.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-diff-tree.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-fuller.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-name-status.txt
?? .tmp-sfia-review/fa6-pr274-merge/main-stat.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-base.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-exit.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-stderr.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-stdout.txt
?? .tmp-sfia-review/fa6-pr274-merge/merge-timestamp.txt
?? .tmp-sfia-review/fa6-pr274-merge/merged-at.txt
?? .tmp-sfia-review/fa6-pr274-merge/merged-by.txt
?? .tmp-sfia-review/fa6-pr274-merge/name-status.txt
?? .tmp-sfia-review/fa6-pr274-merge/post-merge-ci-qual.txt
?? .tmp-sfia-review/fa6-pr274-merge/post-merge-run.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-after.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-before.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-diff.txt
?? .tmp-sfia-review/fa6-pr274-merge/pr-rest-after.json
?? .tmp-sfia-review/fa6-pr274-merge/pr-rest-before.json
?? .tmp-sfia-review/fa6-pr274-merge/pre-merge-timestamp.txt
?? .tmp-sfia-review/fa6-pr274-merge/ruleset-after.json
?? .tmp-sfia-review/fa6-pr274-merge/ruleset-before.json
?? .tmp-sfia-review/fa6-pr274-merge/run-pr.json
?? .tmp-sfia-review/fa6-pr274-merge/runs-main.json
?? .tmp-sfia-review/fa6-pr274-merge/runs-related.json
?? .tmp-sfia-review/fa6-pr274-merge/squash-sha.txt
?? .tmp-sfia-review/fa6-pr274-merge/status-after.txt
?? .tmp-sfia-review/fa6-pr274-merge/status-before.txt
?? .tmp-sfia-review/fa6-pr274-merge/threads-before.json
?? .tmp-sfia-review/fa6-pr274-postmerge/blob-main.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/blob-squash.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/branch-clean-remote.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/build_pack.py
?? .tmp-sfia-review/fa6-pr274-postmerge/check-runs-main.json
?? .tmp-sfia-review/fa6-pr274-postmerge/clean-wt-head.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/clean-wt-status.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/diff-tree.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/fa6-section-main.md
?? .tmp-sfia-review/fa6-pr274-postmerge/findings-line.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/gh-commit.json
?? .tmp-sfia-review/fa6-pr274-postmerge/job-89979087968-steps.json
?? .tmp-sfia-review/fa6-pr274-postmerge/job-89979119270-steps.json
?? .tmp-sfia-review/fa6-pr274-postmerge/job-89979436234-steps.json
?? .tmp-sfia-review/fa6-pr274-postmerge/main-fuller.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/main-ns.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/main-stat.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/origin-main.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/parent.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/postmerge-run-rest.json
?? .tmp-sfia-review/fa6-pr274-postmerge/postmerge-run.json
?? .tmp-sfia-review/fa6-pr274-postmerge/pr-rest.json
?? .tmp-sfia-review/fa6-pr274-postmerge/pr-run.json
?? .tmp-sfia-review/fa6-pr274-postmerge/pr-view.json
?? .tmp-sfia-review/fa6-pr274-postmerge/ruleset-useful.json
?? .tmp-sfia-review/fa6-pr274-postmerge/ruleset.json
?? .tmp-sfia-review/fa6-pr274-postmerge/squash-diff.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/status.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/workflow-blob.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/worktree-present.txt
?? .tmp-sfia-review/fa6-pr274-postmerge/worktrees.txt
?? .tmp-sfia-review/fa6-pr274-readiness/blob.txt
?? .tmp-sfia-review/fa6-pr274-readiness/check-runs.json
?? .tmp-sfia-review/fa6-pr274-readiness/commit-status.json
?? .tmp-sfia-review/fa6-pr274-readiness/commits-lr.txt
?? .tmp-sfia-review/fa6-pr274-readiness/diff-stat.txt
?? .tmp-sfia-review/fa6-pr274-readiness/fa6-section.md
?? .tmp-sfia-review/fa6-pr274-readiness/findings-line.txt
?? .tmp-sfia-review/fa6-pr274-readiness/full.diff
?? .tmp-sfia-review/fa6-pr274-readiness/gh-compare.json
?? .tmp-sfia-review/fa6-pr274-readiness/issue-comments.json
?? .tmp-sfia-review/fa6-pr274-readiness/job-89969671952-steps.json
?? .tmp-sfia-review/fa6-pr274-readiness/job-89969708873-steps.json
?? .tmp-sfia-review/fa6-pr274-readiness/job-89970005590-steps.json
?? .tmp-sfia-review/fa6-pr274-readiness/left-right.txt
?? .tmp-sfia-review/fa6-pr274-readiness/merge-base.txt
?? .tmp-sfia-review/fa6-pr274-readiness/name-status.txt
?? .tmp-sfia-review/fa6-pr274-readiness/pr-diff.txt
?? .tmp-sfia-review/fa6-pr274-readiness/pr-rest.json
?? .tmp-sfia-review/fa6-pr274-readiness/pr-summary.json
?? .tmp-sfia-review/fa6-pr274-readiness/pr-view.json
?? .tmp-sfia-review/fa6-pr274-readiness/review-comments.json
?? .tmp-sfia-review/fa6-pr274-readiness/reviews.json
?? .tmp-sfia-review/fa6-pr274-readiness/ruleset-useful.json
?? .tmp-sfia-review/fa6-pr274-readiness/ruleset.json
?? .tmp-sfia-review/fa6-pr274-readiness/run-view.json
?? .tmp-sfia-review/fa6-pr274-readiness/status.txt
?? .tmp-sfia-review/fa6-pr274-readiness/threads.json
?? .tmp-sfia-review/fa6-pr279-review/24-final.md
?? .tmp-sfia-review/fa6-pr279-review/blob.txt
?? .tmp-sfia-review/fa6-pr279-review/check-runs.json
?? .tmp-sfia-review/fa6-pr279-review/ci-jobs.json
?? .tmp-sfia-review/fa6-pr279-review/ci-log-excerpts.txt
?? .tmp-sfia-review/fa6-pr279-review/ci-run.json
?? .tmp-sfia-review/fa6-pr279-review/contradiction-rows.json
?? .tmp-sfia-review/fa6-pr279-review/handoff-initial.txt
?? .tmp-sfia-review/fa6-pr279-review/inline-comments.json
?? .tmp-sfia-review/fa6-pr279-review/issue-comments.json
?? .tmp-sfia-review/fa6-pr279-review/local-diff.txt
?? .tmp-sfia-review/fa6-pr279-review/log-detect.zip
?? .tmp-sfia-review/fa6-pr279-review/log-gate.zip
?? .tmp-sfia-review/fa6-pr279-review/main-freshness.txt
?? .tmp-sfia-review/fa6-pr279-review/merge-pack-candidate.md
?? .tmp-sfia-review/fa6-pr279-review/post-merge-blockers.json
?? .tmp-sfia-review/fa6-pr279-review/post-merge-sensitive.txt
?? .tmp-sfia-review/fa6-pr279-review/pr-body.md
?? .tmp-sfia-review/fa6-pr279-review/pr-metadata.json
?? .tmp-sfia-review/fa6-pr279-review/remote-diff.txt
?? .tmp-sfia-review/fa6-pr279-review/review-threads.json
?? .tmp-sfia-review/fa6-pr279-review/reviews.json
?? .tmp-sfia-review/fa6-pr279-review/ruleset.json
?? .tmp-sfia-review/fa6-pr279-review/truth.txt
?? .tmp-sfia-review/fa6-reassessment/24-fa6-sections.md
?? .tmp-sfia-review/fa6-reassessment/24-full.md
?? .tmp-sfia-review/fa6-reassessment/24-headings.txt
?? .tmp-sfia-review/fa6-reassessment/33-full.md
?? .tmp-sfia-review/fa6-reassessment/33-headings.txt
?? .tmp-sfia-review/fa6-reassessment/doc-stats.txt
?? .tmp-sfia-review/fa6-reassessment/handoff-initial.txt
?? .tmp-sfia-review/fa6-reassessment/main.txt
?? .tmp-sfia-review/fa6-reassessment/prs-268-278.json
?? .tmp-sfia-review/fa6-reassessment/ruleset.json
?? .tmp-sfia-review/fa6-reassessment/truth.txt
?? .tmp-sfia-review/fa6-reassessment/ts.txt
?? .tmp-sfia-review/fa6-reassessment/workflow.yml
?? .tmp-sfia-review/final-01-scope-and-source-truth.md
?? .tmp-sfia-review/final-02-reservation-dependency-matrix.md
?? .tmp-sfia-review/final-03-authority-model-and-gaps.md
?? .tmp-sfia-review/final-04-atomicity-model-and-options.md
?? .tmp-sfia-review/final-05-r-m01-and-c1-c4-assessment.md
?? .tmp-sfia-review/final-06-morris-arbitration-pack.md
?? .tmp-sfia-review/final-README.md
?? .tmp-sfia-review/m1-apply-snapshot/00-timestamp-europe-paris.txt
?? .tmp-sfia-review/m1-apply-snapshot/01-repo-metadata-before.json
?? .tmp-sfia-review/m1-apply-snapshot/02-main-branch-before.json
?? .tmp-sfia-review/m1-apply-snapshot/03-main-protection-before.err
?? .tmp-sfia-review/m1-apply-snapshot/03-main-protection-before.json
?? .tmp-sfia-review/m1-apply-snapshot/04-rulesets-before.json
?? .tmp-sfia-review/m1-apply-snapshot/05-effective-rules-before.json
?? .tmp-sfia-review/m1-apply-snapshot/06-permissions-before.json
?? .tmp-sfia-review/m1-apply-snapshot/07-user-mcleland147.json
?? .tmp-sfia-review/m1-apply-snapshot/08-check-run-source-before.json
?? .tmp-sfia-review/m1-apply-snapshot/09-payload-final.json
?? .tmp-sfia-review/m1-apply-snapshot/10-application-timestamp.txt
?? .tmp-sfia-review/m1-apply-snapshot/11-create-raw-response.txt
?? .tmp-sfia-review/m1-apply-snapshot/11-create-stderr.txt
?? .tmp-sfia-review/m1-apply-snapshot/11-http-status.txt
?? .tmp-sfia-review/m1-apply-snapshot/12-create-response-body.json
?? .tmp-sfia-review/m1-apply-snapshot/13-ruleset-reread.json
?? .tmp-sfia-review/m1-apply-snapshot/14-rulesets-after.json
?? .tmp-sfia-review/m1-apply-snapshot/15-effective-rules-after.json
?? .tmp-sfia-review/m1-apply-snapshot/16-main-branch-after.json
?? .tmp-sfia-review/m1-apply-snapshot/17-main-protection-after.err
?? .tmp-sfia-review/m1-apply-snapshot/17-main-protection-after.json
?? .tmp-sfia-review/m1-apply-snapshot/18-origin-main-after.txt
?? .tmp-sfia-review/m1-apply-snapshot/19-workflow-blob-after.txt
?? .tmp-sfia-review/m1-bypass-behavior/branches-preserved.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-epoch.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-exit.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-mechanism.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-payload.json
?? .tmp-sfia-review/m1-bypass-behavior/bypass-stderr.txt
?? .tmp-sfia-review/m1-bypass-behavior/bypass-stdout.json
?? .tmp-sfia-review/m1-bypass-behavior/bypass-window-ts.txt
?? .tmp-sfia-review/m1-bypass-behavior/cached-diff-check.txt
?? .tmp-sfia-review/m1-bypass-behavior/commit-diff-check.txt
?? .tmp-sfia-review/m1-bypass-behavior/existing-probe-branches.txt
?? .tmp-sfia-review/m1-bypass-behavior/existing-probe-prs.json
?? .tmp-sfia-review/m1-bypass-behavior/handoff-initial.txt
?? .tmp-sfia-review/m1-bypass-behavior/local-diff-check.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-final.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-initial.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-inprog.json
?? .tmp-sfia-review/m1-bypass-behavior/main-polluted.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-pre-bypass.txt
?? .tmp-sfia-review/m1-bypass-behavior/main-queued.json
?? .tmp-sfia-review/m1-bypass-behavior/net-diff-stat.txt
?? .tmp-sfia-review/m1-bypass-behavior/net-diff-verdict.txt
?? .tmp-sfia-review/m1-bypass-behavior/net-diff.txt
?? .tmp-sfia-review/m1-bypass-behavior/neutralization-plan.md
?? .tmp-sfia-review/m1-bypass-behavior/normal-block-verdict.txt
?? .tmp-sfia-review/m1-bypass-behavior/normal-merge-exit.txt
?? .tmp-sfia-review/m1-bypass-behavior/normal-merge-stderr.txt
?? .tmp-sfia-review/m1-bypass-behavior/normal-merge-stdout.txt
?? .tmp-sfia-review/m1-bypass-behavior/open-prs-pre-bypass.json
?? .tmp-sfia-review/m1-bypass-behavior/open-prs.json
?? .tmp-sfia-review/m1-bypass-behavior/polluted-main-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/pollution-duration-seconds.txt
?? .tmp-sfia-review/m1-bypass-behavior/pollution-start-epoch.txt
?? .tmp-sfia-review/m1-bypass-behavior/pollution-start-ts.txt
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-ci-state.txt
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-match.json
?? .tmp-sfia-review/m1-bypass-behavior/post-revert-runs.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-after-merge.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-checks-log.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-checks.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-create.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-diff.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-graphql-pre.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-number.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe-status.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-probe.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-after.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-checks-log.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-checks.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-create.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-diff.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-number.txt
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert-status.json
?? .tmp-sfia-review/m1-bypass-behavior/pr-revert.json
?? .tmp-sfia-review/m1-bypass-behavior/pr277-timeline-slim.json
?? .tmp-sfia-review/m1-bypass-behavior/probe-absent-err.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-absent.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-base.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/probe-commit.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-file-bytes.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-file-visible.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-fuller.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-merge-sha.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-push.txt
?? .tmp-sfia-review/m1-bypass-behavior/probe-runs.json
?? .tmp-sfia-review/m1-bypass-behavior/probe-stat.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-ci.json
?? .tmp-sfia-review/m1-bypass-behavior/revert-commit.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-fuller.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-exit.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-sha.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-stderr.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-stdout.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-merge-ts.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-push.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-runs.json
?? .tmp-sfia-review/m1-bypass-behavior/revert-squash-body.txt
?? .tmp-sfia-review/m1-bypass-behavior/revert-stat.txt
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-final.json
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-initial.json
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-meta-diffs.json
?? .tmp-sfia-review/m1-bypass-behavior/ruleset-pre-bypass.json
?? .tmp-sfia-review/m1-bypass-behavior/sfia-studio-ci.yml
?? .tmp-sfia-review/m1-bypass-behavior/truth.txt
?? .tmp-sfia-review/m1-bypass-behavior/whitespace-workflow.txt
?? .tmp-sfia-review/m1-cap-commit/33-full.md
?? .tmp-sfia-review/m1-cap-commit/commit-ec.txt
?? .tmp-sfia-review/m1-cap-commit/commit-fuller.txt
?? .tmp-sfia-review/m1-cap-commit/commit-out.txt
?? .tmp-sfia-review/m1-cap-commit/commit-ts.txt
?? .tmp-sfia-review/m1-cap-commit/commit.diff
?? .tmp-sfia-review/m1-cap-commit/diff-tree.txt
?? .tmp-sfia-review/m1-cap-commit/pre-stage-check.txt
?? .tmp-sfia-review/m1-cap-commit/pre-stage.diff
?? .tmp-sfia-review/m1-cap-commit/show-name-status.txt
?? .tmp-sfia-review/m1-cap-commit/show-stat.txt
?? .tmp-sfia-review/m1-cap-commit/staged.diff
?? .tmp-sfia-review/m1-cap-commit/staged.name-status
?? .tmp-sfia-review/m1-cap-commit/staged.numstat
?? .tmp-sfia-review/m1-cap-commit/staged.stat
?? .tmp-sfia-review/m1-cap-commit/status-final.txt
?? .tmp-sfia-review/m1-cap-commit/status-staged.txt
?? .tmp-sfia-review/m1-cap-commit/ts.txt
?? .tmp-sfia-review/m1-cap-commit/untracked-project.txt
?? .tmp-sfia-review/m1-cap-commit/wc.txt
?? .tmp-sfia-review/m1-cap-pr-body.md
?? .tmp-sfia-review/m1-cap-push-pr/33-full.md
?? .tmp-sfia-review/m1-cap-push-pr/ci-found
?? .tmp-sfia-review/m1-cap-push-pr/ci-qual.txt
?? .tmp-sfia-review/m1-cap-push-pr/ci-run-view.json
?? .tmp-sfia-review/m1-cap-push-pr/ci-run.json
?? .tmp-sfia-review/m1-cap-push-pr/commit-fuller.txt
?? .tmp-sfia-review/m1-cap-push-pr/commit.diff
?? .tmp-sfia-review/m1-cap-push-pr/github-compare.diff
?? .tmp-sfia-review/m1-cap-push-pr/ls-remote-before.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-body.md
?? .tmp-sfia-review/m1-cap-push-pr/pr-checks.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-create-ec.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-create-out.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-create-ts.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-list-before.json
?? .tmp-sfia-review/m1-cap-push-pr/pr-merge-guard.json
?? .tmp-sfia-review/m1-cap-push-pr/pr-num.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-search-33.json
?? .tmp-sfia-review/m1-cap-push-pr/pr-url.txt
?? .tmp-sfia-review/m1-cap-push-pr/pr-view.json
?? .tmp-sfia-review/m1-cap-push-pr/push-ec.txt
?? .tmp-sfia-review/m1-cap-push-pr/push-out.txt
?? .tmp-sfia-review/m1-cap-push-pr/push-ts.txt
?? .tmp-sfia-review/m1-cap-push-pr/runs.json
?? .tmp-sfia-review/m1-cap-push-pr/show-name-status.txt
?? .tmp-sfia-review/m1-cap-push-pr/show-stat.txt
?? .tmp-sfia-review/m1-cap-push-pr/ts.txt
?? .tmp-sfia-review/m1-capitalization/33-m1-implementation-and-proofs-rex.md
?? .tmp-sfia-review/m1-capitalization/discovery-paths.txt
?? .tmp-sfia-review/m1-capitalization/doc24-claims.txt
?? .tmp-sfia-review/m1-capitalization/full.diff
?? .tmp-sfia-review/m1-capitalization/option-a-files.txt
?? .tmp-sfia-review/m1-capitalization/pr-268.err
?? .tmp-sfia-review/m1-capitalization/pr-268.json
?? .tmp-sfia-review/m1-capitalization/pr-269.err
?? .tmp-sfia-review/m1-capitalization/pr-269.json
?? .tmp-sfia-review/m1-capitalization/pr-270.err
?? .tmp-sfia-review/m1-capitalization/pr-270.json
?? .tmp-sfia-review/m1-capitalization/pr-271.err
?? .tmp-sfia-review/m1-capitalization/pr-271.json
?? .tmp-sfia-review/m1-capitalization/pr-272-detail.json
?? .tmp-sfia-review/m1-capitalization/pr-272.err
?? .tmp-sfia-review/m1-capitalization/pr-272.json
?? .tmp-sfia-review/m1-capitalization/pr-273.err
?? .tmp-sfia-review/m1-capitalization/pr-273.json
?? .tmp-sfia-review/m1-capitalization/pr-274.err
?? .tmp-sfia-review/m1-capitalization/pr-274.json
?? .tmp-sfia-review/m1-capitalization/pr-275.err
?? .tmp-sfia-review/m1-capitalization/pr-275.json
?? .tmp-sfia-review/m1-capitalization/root-nums.txt
?? .tmp-sfia-review/m1-capitalization/ruleset.json
?? .tmp-sfia-review/m1-capitalization/run-30239805289.json
?? .tmp-sfia-review/m1-capitalization/run-30248284607.json
?? .tmp-sfia-review/m1-capitalization/run-30248328467.json
?? .tmp-sfia-review/m1-capitalization/run-30248480927.json
?? .tmp-sfia-review/m1-capitalization/run-30277076735.json
?? .tmp-sfia-review/m1-capitalization/run-30278533761.json
?? .tmp-sfia-review/m1-capitalization/runs-271.json
?? .tmp-sfia-review/m1-capitalization/runs-272.json
?? .tmp-sfia-review/m1-capitalization/runs-272b.json
?? .tmp-sfia-review/m1-capitalization/runs-273.json
?? .tmp-sfia-review/m1-capitalization/ts.txt
?? .tmp-sfia-review/m1-capitalization/workflow-blob.txt
?? .tmp-sfia-review/m1-capitalization/workflow-structure.txt
?? .tmp-sfia-review/m1-capitalization/worktrees.txt
?? .tmp-sfia-review/m1-closure-decision/classic.err
?? .tmp-sfia-review/m1-closure-decision/classic.exit
?? .tmp-sfia-review/m1-closure-decision/classic.json
?? .tmp-sfia-review/m1-closure-decision/effective-rules.json
?? .tmp-sfia-review/m1-closure-decision/main-branch.json
?? .tmp-sfia-review/m1-closure-decision/pr-270.json
?? .tmp-sfia-review/m1-closure-decision/pr-271.json
?? .tmp-sfia-review/m1-closure-decision/pr-272.json
?? .tmp-sfia-review/m1-closure-decision/pr-273.json
?? .tmp-sfia-review/m1-closure-decision/ruleset.json
?? .tmp-sfia-review/m1-closure-decision/rulesets-list.json
?? .tmp-sfia-review/m1-closure-decision/run-30237044632.json
?? .tmp-sfia-review/m1-closure-decision/run-30237640228.json
?? .tmp-sfia-review/m1-closure-decision/run-30238651843.json
?? .tmp-sfia-review/m1-closure-decision/run-30239805289.json
?? .tmp-sfia-review/m1-closure-decision/run-30248284607.json
?? .tmp-sfia-review/m1-closure-decision/run-30248328467.json
?? .tmp-sfia-review/m1-closure-decision/run-30248480927.json
?? .tmp-sfia-review/m1-closure-readiness/classic-protection.err
?? .tmp-sfia-review/m1-closure-readiness/classic-protection.exit
?? .tmp-sfia-review/m1-closure-readiness/classic-protection.json
?? .tmp-sfia-review/m1-closure-readiness/effective-rules.json
?? .tmp-sfia-review/m1-closure-readiness/jobs-30248284607.json
?? .tmp-sfia-review/m1-closure-readiness/jobs-30248328467.json
?? .tmp-sfia-review/m1-closure-readiness/jobs-30248480927.json
?? .tmp-sfia-review/m1-closure-readiness/log-fail-snippets.txt
?? .tmp-sfia-review/m1-closure-readiness/log-non-snippets.txt
?? .tmp-sfia-review/m1-closure-readiness/log-recovery-snippets.txt
?? .tmp-sfia-review/m1-closure-readiness/main-branch.json
?? .tmp-sfia-review/m1-closure-readiness/open-prs.json
?? .tmp-sfia-review/m1-closure-readiness/pr-270.json
?? .tmp-sfia-review/m1-closure-readiness/pr-271.json
?? .tmp-sfia-review/m1-closure-readiness/pr-272.json
?? .tmp-sfia-review/m1-closure-readiness/pr-273.json
?? .tmp-sfia-review/m1-closure-readiness/ruleset.json
?? .tmp-sfia-review/m1-closure-readiness/rulesets-list.json
?? .tmp-sfia-review/m1-closure-readiness/run-30237044632.json
?? .tmp-sfia-review/m1-closure-readiness/run-30237640228.json
?? .tmp-sfia-review/m1-closure-readiness/run-30238651843.json
?? .tmp-sfia-review/m1-closure-readiness/run-30239805289.json
?? .tmp-sfia-review/m1-closure-readiness/run-30248284607.json
?? .tmp-sfia-review/m1-closure-readiness/run-30248328467.json
?? .tmp-sfia-review/m1-closure-readiness/run-30248480927.json
?? .tmp-sfia-review/m1-closure-readiness/workflow.yml
?? .tmp-sfia-review/m1-controlled-pr-closure/00-timestamp-before.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/01-pr272-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/02-pr273-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/03-pr272-rest-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/04-pr273-rest-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/10-ruleset-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/11-rulesets-list-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/12-effective-rules-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/13-main-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/14-classic-protection-before.err
?? .tmp-sfia-review/m1-controlled-pr-closure/14-classic-protection-before.json
?? .tmp-sfia-review/m1-controlled-pr-closure/20-close-272-exit.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/20-close-272-out.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/21-pr272-after-gh.json
?? .tmp-sfia-review/m1-controlled-pr-closure/22-pr272-rest-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/23-non-local-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/24-non-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/25-run-non-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/30-close-273-exit.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/30-close-273-out.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/31-pr273-after-gh.json
?? .tmp-sfia-review/m1-controlled-pr-closure/32-pr273-rest-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/33-stu-local-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/34-stu-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/35-run-fail-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/36-run-recovery-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/40-ruleset-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/41-rulesets-list-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/42-effective-rules-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/43-main-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/44-classic-protection-after.err
?? .tmp-sfia-review/m1-controlled-pr-closure/44-classic-protection-after.json
?? .tmp-sfia-review/m1-controlled-pr-closure/45-origin-main-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/46-workflow-blob-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/47-remote-heads-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/48-local-branches-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/49-worktrees-after.txt
?? .tmp-sfia-review/m1-controlled-pr-closure/run-30248284607.json
?? .tmp-sfia-review/m1-controlled-pr-closure/run-30248328467.json
?? .tmp-sfia-review/m1-controlled-pr-closure/run-30248480927.json
?? .tmp-sfia-review/m1-controlled-pr-proof/00-timestamp-before.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/01-ruleset-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/02-rulesets-list-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/03-effective-rules-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/04-main-branch-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/05-classic-protection-before.err
?? .tmp-sfia-review/m1-controlled-pr-proof/05-classic-protection-before.json
?? .tmp-sfia-review/m1-controlled-pr-proof/10-non-studio-commit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/10-non-studio-pr-url.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/20-studio-diff-check-exit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/20-studio-diff-check-expected-fail.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/21-studio-commit-out.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/21-studio-fail-commit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/21-studio-pr-url.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/30-non-studio-essential-logs.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/31-studio-fail-essential-logs.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/32-pr272-api.json
?? .tmp-sfia-review/m1-controlled-pr-proof/33-pr273-api-fail.json
?? .tmp-sfia-review/m1-controlled-pr-proof/34-pr272-commit-status.json
?? .tmp-sfia-review/m1-controlled-pr-proof/35-pr273-fail-commit-status.json
?? .tmp-sfia-review/m1-controlled-pr-proof/36-pr273-fail-gate-check.json
?? .tmp-sfia-review/m1-controlled-pr-proof/37-bypass-visibility.json
?? .tmp-sfia-review/m1-controlled-pr-proof/40-studio-fix-commit.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/40-studio-fix-diff.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/41-pr273-recovery.json
?? .tmp-sfia-review/m1-controlled-pr-proof/42-studio-recovery-run-id.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/43-studio-recovery-essential-logs.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/44-pr273-recovery-final.json
?? .tmp-sfia-review/m1-controlled-pr-proof/45-pr273-api-recovery.json
?? .tmp-sfia-review/m1-controlled-pr-proof/50-ruleset-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/51-rulesets-list-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/52-effective-rules-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/53-main-branch-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/54-classic-protection-after.err
?? .tmp-sfia-review/m1-controlled-pr-proof/54-classic-protection-after.json
?? .tmp-sfia-review/m1-controlled-pr-proof/55-origin-main-after.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/56-workflow-blob-after.txt
?? .tmp-sfia-review/m1-controlled-pr-proof/57-pr272-final.json
?? .tmp-sfia-review/m1-controlled-pr-proof/58-pr273-final.json
?? .tmp-sfia-review/m1-controlled-pr-proof/60-non-studio-file.md
?? .tmp-sfia-review/m1-controlled-pr-proof/61-studio-file-fixed.md
?? .tmp-sfia-review/m1-controlled-pr-proof/62-studio-file-fail.md
?? .tmp-sfia-review/m1-controlled-pr-proof/run-30248284607.json
?? .tmp-sfia-review/m1-controlled-pr-proof/run-30248328467.json
?? .tmp-sfia-review/m1-controlled-pr-proof/run-30248480927.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/00-timestamp-before.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/01-pr272-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/02-pr273-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/10-ruleset-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/11-rulesets-list-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/12-effective-rules-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/13-main-before.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/14-worktrees-before.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/15-non-local-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/16-stu-local-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/17-non-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/18-stu-remote-sha.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/19-non-wt-status.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/20-stu-wt-status.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/21-log-non.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/22-log-fail.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/23-log-recovery.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/30-non-studio-cleanup-log.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/31-non-wt-remove.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/31-non-wt-remove.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/31-non-wt-remove.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/32-non-local-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/32-non-local-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/32-non-local-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/33-non-remote-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/33-non-remote-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/33-non-remote-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/34-non-fetch-prune.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/34-non-fetch-prune.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/34-non-fetch-prune.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/35-pr272-after-non-cleanup.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/36-run-non-after-non-cleanup.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/40-studio-cleanup-log.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/41-stu-wt-remove.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/41-stu-wt-remove.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/41-stu-wt-remove.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/42-stu-local-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/42-stu-local-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/42-stu-local-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/43-stu-remote-delete.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/43-stu-remote-delete.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/43-stu-remote-delete.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/44-stu-fetch-prune.err
?? .tmp-sfia-review/m1-controlled-proof-cleanup/44-stu-fetch-prune.exit
?? .tmp-sfia-review/m1-controlled-proof-cleanup/44-stu-fetch-prune.out
?? .tmp-sfia-review/m1-controlled-proof-cleanup/45-local-proof-branches-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/50-pr272-final.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/51-pr273-final.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/60-ruleset-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/61-rulesets-list-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/62-effective-rules-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/63-main-after.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/64-origin-main-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/65-workflow-blob-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/66-worktrees-after.txt
?? .tmp-sfia-review/m1-controlled-proof-cleanup/final-run-30248284607.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/final-run-30248328467.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/final-run-30248480927.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/run-30248284607.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/run-30248328467.json
?? .tmp-sfia-review/m1-controlled-proof-cleanup/run-30248480927.json
?? .tmp-sfia-review/m1-fa6-commit/cached-check.txt
?? .tmp-sfia-review/m1-fa6-commit/cached-diff.txt
?? .tmp-sfia-review/m1-fa6-commit/cached-name-status.txt
?? .tmp-sfia-review/m1-fa6-commit/cached-stat.txt
?? .tmp-sfia-review/m1-fa6-commit/commit-full-diff.txt
?? .tmp-sfia-review/m1-fa6-commit/commit-show-full.txt
?? .tmp-sfia-review/m1-fa6-commit/commit.err
?? .tmp-sfia-review/m1-fa6-commit/commit.exit
?? .tmp-sfia-review/m1-fa6-commit/commit.out
?? .tmp-sfia-review/m1-fa6-commit/diff-check.txt
?? .tmp-sfia-review/m1-fa6-commit/diff-parent-check.txt
?? .tmp-sfia-review/m1-fa6-commit/diff-tree.txt
?? .tmp-sfia-review/m1-fa6-commit/diff-vs-origin-main.diff
?? .tmp-sfia-review/m1-fa6-commit/head-doc24.md
?? .tmp-sfia-review/m1-fa6-commit/local-doc24.md
?? .tmp-sfia-review/m1-fa6-commit/log-fuller.txt
?? .tmp-sfia-review/m1-fa6-commit/metier-diff-post-commit.diff
?? .tmp-sfia-review/m1-fa6-commit/new-head.txt
?? .tmp-sfia-review/m1-fa6-commit/option-a-files.txt
?? .tmp-sfia-review/m1-fa6-commit/origin-main-doc24.md
?? .tmp-sfia-review/m1-fa6-commit/parent.txt
?? .tmp-sfia-review/m1-fa6-commit/show-check.txt
?? .tmp-sfia-review/m1-fa6-commit/show-name-status.txt
?? .tmp-sfia-review/m1-fa6-commit/show-stat.txt
?? .tmp-sfia-review/m1-fa6-commit/status-staged.txt
?? .tmp-sfia-review/m1-fa6-formalization/after-full.md
?? .tmp-sfia-review/m1-fa6-formalization/before-full.md
?? .tmp-sfia-review/m1-fa6-formalization/diff-check.txt
?? .tmp-sfia-review/m1-fa6-formalization/diff-vs-origin-main.diff
?? .tmp-sfia-review/m1-fa6-formalization/mitigation-timestamp.txt
?? .tmp-sfia-review/m1-fa6-formalization/section-after.md
?? .tmp-sfia-review/m1-fa6-formalization/section-before.md
?? .tmp-sfia-review/m1-fa6-pr/commits-on-head-only.txt
?? .tmp-sfia-review/m1-fa6-pr/diff-stat.txt
?? .tmp-sfia-review/m1-fa6-pr/gh-compare-summary.json
?? .tmp-sfia-review/m1-fa6-pr/head-doc24.md
?? .tmp-sfia-review/m1-fa6-pr/left-right.txt
?? .tmp-sfia-review/m1-fa6-pr/log-left-right.txt
?? .tmp-sfia-review/m1-fa6-pr/main-doc24.md
?? .tmp-sfia-review/m1-fa6-pr/merge-base.txt
?? .tmp-sfia-review/m1-fa6-pr/metier-single-file.diff
?? .tmp-sfia-review/m1-fa6-pr/name-status.txt
?? .tmp-sfia-review/m1-fa6-pr/ruleset.json
?? .tmp-sfia-review/m1-fa6-push/diff-check.txt
?? .tmp-sfia-review/m1-fa6-push/diff-tree.txt
?? .tmp-sfia-review/m1-fa6-push/head-doc24.md
?? .tmp-sfia-review/m1-fa6-push/ls-remote-after.txt
?? .tmp-sfia-review/m1-fa6-push/metier-diff.diff
?? .tmp-sfia-review/m1-fa6-push/open-prs-after.json
?? .tmp-sfia-review/m1-fa6-push/origin-main-doc24.md
?? .tmp-sfia-review/m1-fa6-push/prs-after.json
?? .tmp-sfia-review/m1-fa6-push/prs-for-branch.json
?? .tmp-sfia-review/m1-fa6-push/push.err
?? .tmp-sfia-review/m1-fa6-push/push.exit
?? .tmp-sfia-review/m1-fa6-push/push.out
?? .tmp-sfia-review/m1-fa6-push/remote-after.txt
?? .tmp-sfia-review/m1-fa6-push/remote-before.txt
?? .tmp-sfia-review/m1-fa6-push/remote-commit.json
?? .tmp-sfia-review/m1-fa6-push/remote-doc24.md
?? .tmp-sfia-review/m1-fa6-push/remote-file-meta.json
?? .tmp-sfia-review/m1-fa6-push/ruleset-after.json
?? .tmp-sfia-review/m1-fa6-push/ruleset-before.json
?? .tmp-sfia-review/m1-fa6-push/runs-branch.json
?? .tmp-sfia-review/m1-fa6-push/show-check.txt
?? .tmp-sfia-review/m1-fa6-push/show-name-status.txt
?? .tmp-sfia-review/m1-fa6-push/show-stat.txt
?? .tmp-sfia-review/m1-fa6-push/status-after.txt
?? .tmp-sfia-review/m1-pr276-merge/33-full.md
?? .tmp-sfia-review/m1-pr276-merge/33-on-main.md
?? .tmp-sfia-review/m1-pr276-merge/blob-main.txt
?? .tmp-sfia-review/m1-pr276-merge/ci-post-list.json
?? .tmp-sfia-review/m1-pr276-merge/ci-post-run.json
?? .tmp-sfia-review/m1-pr276-merge/ci-post-state.txt
?? .tmp-sfia-review/m1-pr276-merge/ci-pr.json
?? .tmp-sfia-review/m1-pr276-merge/lines-main.txt
?? .tmp-sfia-review/m1-pr276-merge/local-branch.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-cmd.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-exit.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-stderr.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-stdout.txt
?? .tmp-sfia-review/m1-pr276-merge/merge-ts.txt
?? .tmp-sfia-review/m1-pr276-merge/pr-after.json
?? .tmp-sfia-review/m1-pr276-merge/pr-before.json
?? .tmp-sfia-review/m1-pr276-merge/pr-body-before.md
?? .tmp-sfia-review/m1-pr276-merge/pr-diff-before.txt
?? .tmp-sfia-review/m1-pr276-merge/pr-threads.json
?? .tmp-sfia-review/m1-pr276-merge/remote-branch.txt
?? .tmp-sfia-review/m1-pr276-merge/ruleset.json
?? .tmp-sfia-review/m1-pr276-merge/source-diff.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-body.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-diff-clean.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-diff.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-fuller.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-log-fuller.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-message.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-sha.txt
?? .tmp-sfia-review/m1-pr276-merge/squash-stat.txt
?? .tmp-sfia-review/m1-pr276-merge/ts.txt
?? .tmp-sfia-review/m1-pr276-merge/worktree.txt
?? .tmp-sfia-review/m1-pr276-merge/worktrees.txt
?? .tmp-sfia-review/m1-pr276-postmerge/33-on-main.md
?? .tmp-sfia-review/m1-pr276-postmerge/ci-post.json
?? .tmp-sfia-review/m1-pr276-postmerge/diff-cmp.txt
?? .tmp-sfia-review/m1-pr276-postmerge/handoff-initial.txt
?? .tmp-sfia-review/m1-pr276-postmerge/lines-main.txt
?? .tmp-sfia-review/m1-pr276-postmerge/main-advanced.txt
?? .tmp-sfia-review/m1-pr276-postmerge/main-now.txt
?? .tmp-sfia-review/m1-pr276-postmerge/pr-after.json
?? .tmp-sfia-review/m1-pr276-postmerge/pr-body.md
?? .tmp-sfia-review/m1-pr276-postmerge/pr-threads.json
?? .tmp-sfia-review/m1-pr276-postmerge/remote-branch.txt
?? .tmp-sfia-review/m1-pr276-postmerge/ruleset-loose.json
?? .tmp-sfia-review/m1-pr276-postmerge/ruleset.json
?? .tmp-sfia-review/m1-pr276-postmerge/source-diff.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-check.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-diff-check.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-diff.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-fuller.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-message.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-name-status.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-parent.txt
?? .tmp-sfia-review/m1-pr276-postmerge/squash-stat.txt
?? .tmp-sfia-review/m1-pr276-postmerge/truth.txt
?? .tmp-sfia-review/m1-pr276-postmerge/ts.txt
?? .tmp-sfia-review/m1-pr276-postmerge/worktrees.txt
?? .tmp-sfia-review/m1-pr276-readiness/33-full.md
?? .tmp-sfia-review/m1-pr276-readiness/blockers.txt
?? .tmp-sfia-review/m1-pr276-readiness/bypass.json
?? .tmp-sfia-review/m1-pr276-readiness/ci-run.json
?? .tmp-sfia-review/m1-pr276-readiness/commit-fuller.txt
?? .tmp-sfia-review/m1-pr276-readiness/commit.diff
?? .tmp-sfia-review/m1-pr276-readiness/github.diff
?? .tmp-sfia-review/m1-pr276-readiness/local.diff
?? .tmp-sfia-review/m1-pr276-readiness/pr-body.md
?? .tmp-sfia-review/m1-pr276-readiness/pr-threads.json
?? .tmp-sfia-review/m1-pr276-readiness/pr-view.json
?? .tmp-sfia-review/m1-pr276-readiness/reserves.txt
?? .tmp-sfia-review/m1-pr276-readiness/ruleset-summary.txt
?? .tmp-sfia-review/m1-pr276-readiness/ruleset.json
?? .tmp-sfia-review/m1-pr276-readiness/show-name-status.txt
?? .tmp-sfia-review/m1-pr276-readiness/show-stat.txt
?? .tmp-sfia-review/m1-pr276-readiness/ts.txt
?? .tmp-sfia-review/m1-ruleset-rollback/actor.json
?? .tmp-sfia-review/m1-ruleset-rollback/audit-ec.txt
?? .tmp-sfia-review/m1-ruleset-rollback/audit-log-attempt.json
?? .tmp-sfia-review/m1-ruleset-rollback/audit-log-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/auth-user.json
?? .tmp-sfia-review/m1-ruleset-rollback/bypass-config.json
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-after.json
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-after.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-before.json
?? .tmp-sfia-review/m1-ruleset-rollback/comparable-before.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/disable-cmd.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-duration-seconds.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-epoch.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-exit.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-stdout.json
?? .tmp-sfia-review/m1-ruleset-rollback/disable-ts.txt
?? .tmp-sfia-review/m1-ruleset-rollback/disable-verdict.txt
?? .tmp-sfia-review/m1-ruleset-rollback/doc33-lines.txt
?? .tmp-sfia-review/m1-ruleset-rollback/graph-ec.txt
?? .tmp-sfia-review/m1-ruleset-rollback/graphql-bypass-fields.json
?? .tmp-sfia-review/m1-ruleset-rollback/graphql-bypass-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/handoff-initial.txt
?? .tmp-sfia-review/m1-ruleset-rollback/main-after.txt
?? .tmp-sfia-review/m1-ruleset-rollback/main-before.txt
?? .tmp-sfia-review/m1-ruleset-rollback/main-runs.json
?? .tmp-sfia-review/m1-ruleset-rollback/merges-during-window.json
?? .tmp-sfia-review/m1-ruleset-rollback/open-prs-after.json
?? .tmp-sfia-review/m1-ruleset-rollback/open-prs.json
?? .tmp-sfia-review/m1-ruleset-rollback/payload-diff.txt
?? .tmp-sfia-review/m1-ruleset-rollback/pre-disable-activity.txt
?? .tmp-sfia-review/m1-ruleset-rollback/recent-merges.json
?? .tmp-sfia-review/m1-ruleset-rollback/remote-branch.txt
?? .tmp-sfia-review/m1-ruleset-rollback/repo-perms.json
?? .tmp-sfia-review/m1-ruleset-rollback/restore-cmd.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-epoch.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-exit.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-stderr.txt
?? .tmp-sfia-review/m1-ruleset-rollback/restore-stdout.json
?? .tmp-sfia-review/m1-ruleset-rollback/restore-ts.txt
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-after.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-before.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-disable.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-19798462-restore.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-after.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-before.keys.json
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-before.sha256
?? .tmp-sfia-review/m1-ruleset-rollback/ruleset-disabled.json
?? .tmp-sfia-review/m1-ruleset-rollback/server-meta-diffs.json
?? .tmp-sfia-review/m1-ruleset-rollback/truth.txt
?? .tmp-sfia-review/m1-ruleset-rollback/ts-end.txt
?? .tmp-sfia-review/m1-ruleset-rollback/ts-start.txt
?? .tmp-sfia-review/main-01-a5-2-documentary-closure.md
?? .tmp-sfia-review/main-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/main-03-open-reserves-and-gates.md
?? .tmp-sfia-review/main-04-sequencing-options.md
?? .tmp-sfia-review/main-05-morris-decision-pack.md
?? .tmp-sfia-review/main-README.md
?? .tmp-sfia-review/nd-final-01-a5-2-documentary-closure.md
?? .tmp-sfia-review/nd-final-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/nd-final-03-open-reserves-and-gates.md
?? .tmp-sfia-review/nd-final-04-sequencing-options.md
?? .tmp-sfia-review/nd-final-05-morris-decision-pack.md
?? .tmp-sfia-review/nd-final-README.md
?? .tmp-sfia-review/ops1-i5-real-execution-evidence.json
?? .tmp-sfia-review/ops1-i5-real-postcheck.txt
?? .tmp-sfia-review/ops1-i5-real-run.ts
?? .tmp-sfia-review/ops1-i7-evidence/00-baseline-meta.txt
?? .tmp-sfia-review/ops1-i7-evidence/01-ready-for-morris.txt
?? .tmp-sfia-review/ops1-i7-evidence/02-closure-with-structural-reserve.txt
?? .tmp-sfia-review/ops1-i7-evidence/screenshots/ops1-i7-00-studio-ready-no-session.png
?? .tmp-sfia-review/option-a-post-fa6/all-sfia-files.txt
?? .tmp-sfia-review/option-a-post-fa6/ci-post-fa6-jobs.json
?? .tmp-sfia-review/option-a-post-fa6/ci-post-fa6.json
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_23-next-option-a-step-after-t-a6.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_24-ci-and-merge-governance-preparation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_30-ci-governance-pr-post-correction-review.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_31-ci-governance-post-merge-review.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_32-path-aware-required-check-and-main-protection-preparation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_33-m1-implementation-and-proofs-rex.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a0-doctrine-foundation_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a1-project-lps-foundation_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a2-cycle-trajectory-epistemic-ckc_07-validation-findings-and-morris-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a2-cycle-trajectory-epistemic-ckc_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a3-decision-confirmation-authority_07-validation-findings-and-morris-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a3-decision-confirmation-authority_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a4-execution-contract-governance_10-runtime-validation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a4-execution-contract-governance_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a5-agent-selection-execution_09-runtime-foundation-validation.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a5-agent-selection-execution_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a6-evidence-review-claims-maturity_19-next-step-framing.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a6-evidence-review-claims-maturity_22-post-merge-review.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-delivery_v3-native-option-a_t-a6-evidence-review-claims-maturity_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_10-functional-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_functional-architecture_10-functional-architecture-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_functional-architecture_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-design_v3-native-option-a_ux-ui_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-modeled_v3-native-option-a_12-modeled-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-modeled_v3-native-option-a_README.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_10-resilience-performance-observability-and-run-architecture.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_11-legacy-isolation-migration-and-cutover-architecture.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_12-delivery-slices-dependencies-and-technical-gates.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_13-technical-architecture-validation-and-decision-pack.md
?? .tmp-sfia-review/option-a-post-fa6/docs/projects_sfia-studio_sfia-v3-technical-architecture_v3-native-option-a_README.md
?? .tmp-sfia-review/option-a-post-fa6/extracted-manifest.txt
?? .tmp-sfia-review/option-a-post-fa6/f-ci-search.txt
?? .tmp-sfia-review/option-a-post-fa6/handoff-initial.txt
?? .tmp-sfia-review/option-a-post-fa6/key-search.txt
?? .tmp-sfia-review/option-a-post-fa6/main-commit.txt
?? .tmp-sfia-review/option-a-post-fa6/modeled-test-files.txt
?? .tmp-sfia-review/option-a-post-fa6/oa-import-files.txt
?? .tmp-sfia-review/option-a-post-fa6/oa-runtime-files.txt
?? .tmp-sfia-review/option-a-post-fa6/oa-test-files.txt
?? .tmp-sfia-review/option-a-post-fa6/option-a-files.txt
?? .tmp-sfia-review/option-a-post-fa6/pr-254.json
?? .tmp-sfia-review/option-a-post-fa6/pr-255.json
?? .tmp-sfia-review/option-a-post-fa6/pr-260.json
?? .tmp-sfia-review/option-a-post-fa6/pr-261.json
?? .tmp-sfia-review/option-a-post-fa6/pr-262.json
?? .tmp-sfia-review/option-a-post-fa6/pr-263.json
?? .tmp-sfia-review/option-a-post-fa6/pr-264.json
?? .tmp-sfia-review/option-a-post-fa6/pr-265.json
?? .tmp-sfia-review/option-a-post-fa6/pr-266.json
?? .tmp-sfia-review/option-a-post-fa6/pr-267.json
?? .tmp-sfia-review/option-a-post-fa6/pr-268.json
?? .tmp-sfia-review/option-a-post-fa6/pr-269.json
?? .tmp-sfia-review/option-a-post-fa6/pr-270.json
?? .tmp-sfia-review/option-a-post-fa6/pr-271.json
?? .tmp-sfia-review/option-a-post-fa6/pr-274.json
?? .tmp-sfia-review/option-a-post-fa6/pr-275.json
?? .tmp-sfia-review/option-a-post-fa6/pr-276.json
?? .tmp-sfia-review/option-a-post-fa6/pr-279.json
?? .tmp-sfia-review/option-a-post-fa6/pr-structural-summary.txt
?? .tmp-sfia-review/option-a-post-fa6/ruleset.json
?? .tmp-sfia-review/option-a-post-fa6/sfia-studio-ci.yml
?? .tmp-sfia-review/option-a-post-fa6/trajectory-summary.json
?? .tmp-sfia-review/option-a-post-fa6/truth.txt
?? .tmp-sfia-review/option-a-post-fa6/workflow-blob.txt
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-01-intention.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-02-lps.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-03-decision.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-04-n2.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-05-n3.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-06-contract.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-07-execution.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-08-evidence-incomplete.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-09-reviewbundle.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-10-doctrine-error.png
?? .tmp-sfia-review/option-a-ux-ui-evidence/screenshots/OA-11-mobile.png
?? .tmp-sfia-review/pm-final-01-scope-and-source-truth.md
?? .tmp-sfia-review/pm-final-02-reservation-dependency-matrix.md
?? .tmp-sfia-review/pm-final-03-authority-model-and-gaps.md
?? .tmp-sfia-review/pm-final-04-atomicity-model-and-options.md
?? .tmp-sfia-review/pm-final-05-r-m01-and-c1-c4-assessment.md
?? .tmp-sfia-review/pm-final-06-morris-arbitration-pack.md
?? .tmp-sfia-review/pm-final-README.md
?? .tmp-sfia-review/post-merge-260/at-13.md
?? .tmp-sfia-review/post-merge-260/fa-10.md
?? .tmp-sfia-review/post-merge-260/fd-10.md
?? .tmp-sfia-review/post-merge-260/m-12.md
?? .tmp-sfia-review/post-merge-260/modeled/01-modeling-principles-and-aggregate-boundaries.md
?? .tmp-sfia-review/post-merge-260/modeled/02-core-entities-value-objects-and-identifiers.md
?? .tmp-sfia-review/post-merge-260/modeled/03-living-project-state-model.md
?? .tmp-sfia-review/post-merge-260/modeled/04-doctrine-package-and-ckc-model.md
?? .tmp-sfia-review/post-merge-260/modeled/05-cycle-trajectory-and-epistemic-model.md
?? .tmp-sfia-review/post-merge-260/modeled/06-decision-confirmation-and-authority-model.md
?? .tmp-sfia-review/post-merge-260/modeled/07-execution-contract-attempt-and-agent-model.md
?? .tmp-sfia-review/post-merge-260/modeled/08-evidence-review-bundle-maturity-and-debt-model.md
?? .tmp-sfia-review/post-merge-260/modeled/09-command-event-error-and-transition-catalog.md
?? .tmp-sfia-review/post-merge-260/modeled/10-validation-versioning-provenance-and-security-rules.md
?? .tmp-sfia-review/post-merge-260/modeled/11-existing-models-reuse-and-migration-map.md
?? .tmp-sfia-review/post-merge-260/modeled/12-modeled-validation-and-decision-pack.md
?? .tmp-sfia-review/post-merge-260/modeled/README.md
?? .tmp-sfia-review/post-merge-260/modeled/examples/confirmation-n2.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/confirmation-n3.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/contradiction-blocking.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/doctrine-package-manifest.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/error-doctrine-unresolved.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/evidence-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/execution-attempt-timeout.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/execution-contract.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/human-decision-with-reservations.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/invalid/execution-contract.missing-authority.invalid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/invalid/human-decision.chat-only.invalid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/invalid/review-bundle.synthesis-as-complete.invalid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/lps-after-clarification.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/maturity-assessment-modeled.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/project-lps-initial.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/review-bundle-complete.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/review-bundle-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/examples/trajectory-candidate.valid.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/audit/audit-event.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/actor-reference.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/digest.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/identifier.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/provenance-record.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/common/timestamp.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/cycle/cycle-instance.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/cycle/project-trajectory.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/decision/confirmation.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/decision/human-decision.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/doctrine/ckc-resolution.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/doctrine/doctrine-package-manifest.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/doctrine/doctrine-package-ref.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/epistemic/epistemic-item.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/error/error-record.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/evidence/evidence.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/evidence/review-bundle.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/execution/execution-attempt.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/maturity/maturity-assessment.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/project/living-project-state.schema.json
?? .tmp-sfia-review/post-merge-260/modeled/schemas/project/project.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/01-modeling-principles-and-aggregate-boundaries.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/02-core-entities-value-objects-and-identifiers.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/03-living-project-state-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/04-doctrine-package-and-ckc-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/05-cycle-trajectory-and-epistemic-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/06-decision-confirmation-and-authority-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/07-execution-contract-attempt-and-agent-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/10-validation-versioning-provenance-and-security-rules.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/11-existing-models-reuse-and-migration-map.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/12-modeled-validation-and-decision-pack.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/README.md
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/confirmation-n2.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/confirmation-n3.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/contradiction-blocking.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/doctrine-package-manifest.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/error-doctrine-unresolved.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-timeout.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-contract.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/human-decision-with-reservations.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-contract.missing-authority.invalid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/human-decision.chat-only.invalid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.synthesis-as-complete.invalid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/lps-after-clarification.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-modeled.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/project-lps-initial.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-complete.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-incomplete.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/trajectory-candidate.valid.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/audit/audit-event.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/actor-reference.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/digest.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/identifier.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/provenance-record.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/common/timestamp.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/cycle/cycle-instance.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/cycle/project-trajectory.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/decision/confirmation.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/decision/human-decision.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/doctrine/ckc-resolution.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/doctrine/doctrine-package-manifest.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/doctrine/doctrine-package-ref.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/error/error-record.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/evidence.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/review-bundle.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-attempt.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/maturity/maturity-assessment.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/project/living-project-state.schema.json
?? .tmp-sfia-review/post-merge-260/oa-modeled/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/project/project.schema.json
?? .tmp-sfia-review/post-merge-260/oa-readme.md
?? .tmp-sfia-review/post-merge-260/ux-09.md
?? .tmp-sfia-review/post-merge-260/ux-10.md
?? .tmp-sfia-review/post-merge-proofs/04-ops1-i5-execution-proof.md
?? .tmp-sfia-review/post-merge-proofs/05-ops1-i5-manual-ui-proof.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-final-01-scope-and-source-truth.md
?? .tmp-sfia-review/pr-final-02-reservation-dependency-matrix.md
?? .tmp-sfia-review/pr-final-03-authority-model-and-gaps.md
?? .tmp-sfia-review/pr-final-04-atomicity-model-and-options.md
?? .tmp-sfia-review/pr-final-05-r-m01-and-c1-c4-assessment.md
?? .tmp-sfia-review/pr-final-06-morris-arbitration-pack.md
?? .tmp-sfia-review/pr-final-README.md
?? .tmp-sfia-review/pr-readiness-artifacts-i6/created-files-full.txt
?? .tmp-sfia-review/pr-readiness-artifacts-i6/created-files-list.txt
?? .tmp-sfia-review/pr-readiness-artifacts-i6/modified-files.diff
?? .tmp-sfia-review/pr-readiness-artifacts-i6/modified-files.diff.stat
?? .tmp-sfia-review/pr-readiness-artifacts/created-files-full.txt
?? .tmp-sfia-review/pr-readiness-artifacts/exclude-local.txt
?? .tmp-sfia-review/pr-readiness-artifacts/include-candidates.txt
?? .tmp-sfia-review/pr-readiness-artifacts/modified-files.diff
?? .tmp-sfia-review/pr-readiness-artifacts/readiness-lint-fixes.diff
?? .tmp-sfia-review/pr286-run.json
?? .tmp-sfia-review/readme-after.md
?? .tmp-sfia-review/readme-before.md
?? .tmp-sfia-review/readme-correction.diff
?? .tmp-sfia-review/rec-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/rec-03-open-reserves-and-gates.md
?? .tmp-sfia-review/rec-04-sequencing-options.md
?? .tmp-sfia-review/rec-05-morris-decision-pack.md
?? .tmp-sfia-review/rec-README.md
?? .tmp-sfia-review/rev-01-a5-2-documentary-closure.md
?? .tmp-sfia-review/rev-02-t-a7-decision-landscape.md
?? .tmp-sfia-review/rev-03-open-reserves-and-gates.md
?? .tmp-sfia-review/rev-04-sequencing-options.md
?? .tmp-sfia-review/rev-05-morris-decision-pack.md
?? .tmp-sfia-review/rev-README.md
?? .tmp-sfia-review/ruleset-19798462-after.json
?? .tmp-sfia-review/ruleset-19798462-before.json
?? .tmp-sfia-review/ruleset-19798462-disable.json
?? .tmp-sfia-review/ruleset-19798462-restore.json
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/creer-manuellement-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1024.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/workspace-reprendre-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1024.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1280.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-1728.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-draft-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-empty-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-feedback-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/intake-resume-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/manual-advanced-1440.png
?? .tmp-sfia-review/screenshots-d1-c1/viewport-metrics.json
?? .tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/clarification-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/error-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1024.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1280.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1728.png
?? .tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/no-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/create-success-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/new-project-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/viewport-metrics.json
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-home-1440.png
?? .tmp-sfia-review/screenshots-d1-intake/empty-1440.png
?? .tmp-sfia-review/screenshots-d1-intake/manual-1440.png
?? .tmp-sfia-review/screenshots-d1-intake/routing-1024.png
?? .tmp-sfia-review/screenshots-d1-intake/routing-1440.png
?? .tmp-sfia-review/screenshots-d1-ux/figma-cockpit-1440.png
?? .tmp-sfia-review/screenshots-d1-ux/figma-cockpit-1728.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1024.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1280.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1440.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-1728.png
?? .tmp-sfia-review/screenshots-d1-ux/runtime-metrics.json
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-after-reload.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-empty.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-open-journal.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-after-reload-locked.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-fixture-locked.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-global-badge-fixture.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-global-badge-test-provider.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-live-ready.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-live-unavailable.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-mode-change-refused.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-mode-selection.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-multiturn.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-provider-error.png
?? .tmp-sfia-review/screenshots-ops1-i2/ops1-i2-test-provider-non-live.png
?? .tmp-sfia-review/screenshots-ops1-i3/01-action-not-required.png
?? .tmp-sfia-review/screenshots-ops1-i3/02-candidate-proposed-unauthorized.png
?? .tmp-sfia-review/screenshots-ops1-i3/03-gate-four-actions.png
?? .tmp-sfia-review/screenshots-ops1-i3/04-go-validated-not-executed.png
?? .tmp-sfia-review/screenshots-ops1-i3/05-after-reload.png
?? .tmp-sfia-review/screenshots-ops1-i3/06-corriger-refinement.png
?? .tmp-sfia-review/screenshots-ops1-i4/01-allowlist-valid.png
?? .tmp-sfia-review/screenshots-ops1-i4/02-deny-modify-03.png
?? .tmp-sfia-review/screenshots-ops1-i4/03-deny-wildcard.png
?? .tmp-sfia-review/screenshots-ops1-i4/04-deny-unlisted-campus360-markdown.png
?? .tmp-sfia-review/screenshots-ops1-i5/01-contract-no-go.png
?? .tmp-sfia-review/screenshots-ops1-i5/02-fixture-succeeded.png
?? .tmp-sfia-review/screenshots-ops1-i5/03-microcopies.png
?? .tmp-sfia-review/screenshots-ops1-i5/figma-61-536-execution-cursor.png
?? .tmp-sfia-review/screenshots-ops1-i6/01-report-completed-resume.png
?? .tmp-sfia-review/screenshots-ops1-i6/02-report-status.png
?? .tmp-sfia-review/screenshots-ops1-i6/03-continuation.png
?? .tmp-sfia-review/screenshots/p0-00c-nouvelle-demande-runtime.png
?? .tmp-sfia-review/screenshots/p0-01c-synthese-runtime.png
?? .tmp-sfia-review/screenshots/p0-02c-cycle-actif-runtime.png
?? .tmp-sfia-review/screenshots/p0-03c-decision-runtime.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/01-sfia-context-loaded.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/02-sfia-proposal-compiled.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/03-sfia-action-candidate-live.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/04-sfia-sources-digests.png
?? .tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/05-sfia-forbidden-ops-denied.png
?? .tmp-sfia-review/t-a7-accel-cumul.stat
?? .tmp-sfia-review/t-a7-accel-main.diff
?? .tmp-sfia-review/t-a7-correction/before/01-framing-and-scope.md
?? .tmp-sfia-review/t-a7-correction/before/02-t-a7-cutover-preconditions.md
?? .tmp-sfia-review/t-a7-correction/before/03-t-a6-and-option-a-completion-criteria.md
?? .tmp-sfia-review/t-a7-correction/before/04-reservations-risks-and-stop-conditions.md
?? .tmp-sfia-review/t-a7-correction/before/05-morris-decision-pack.md
?? .tmp-sfia-review/t-a7-correction/before/README.md
?? .tmp-sfia-review/t-a7-correction/blobs-final.txt
?? .tmp-sfia-review/t-a7-correction/commit.diff
?? .tmp-sfia-review/t-a7-correction/parent.txt
?? .tmp-sfia-review/t-a7-correction/show-fuller.txt
?? .tmp-sfia-review/t-a7-correction/truth.txt
?? .tmp-sfia-review/t-a7-d0x-record.diff
?? .tmp-sfia-review/t-a7-decide-session/truth.txt
?? .tmp-sfia-review/t-a7-decision-record/before/01-framing-and-scope.md
?? .tmp-sfia-review/t-a7-decision-record/before/02-t-a7-cutover-preconditions.md
?? .tmp-sfia-review/t-a7-decision-record/before/03-t-a6-and-option-a-completion-criteria.md
?? .tmp-sfia-review/t-a7-decision-record/before/04-reservations-risks-and-stop-conditions.md
?? .tmp-sfia-review/t-a7-decision-record/before/05-morris-decision-pack.md
?? .tmp-sfia-review/t-a7-decision-record/before/README.md
?? .tmp-sfia-review/t-a7-decision-record/blobs.txt
?? .tmp-sfia-review/t-a7-decision-record/commit.diff
?? .tmp-sfia-review/t-a7-decision-record/show.txt
?? .tmp-sfia-review/t-a7-decision-record/truth.txt
?? .tmp-sfia-review/t-a7-framing-review/blob-check.txt
?? .tmp-sfia-review/t-a7-framing-review/commit.diff
?? .tmp-sfia-review/t-a7-framing-review/diff-name-status.txt
?? .tmp-sfia-review/t-a7-framing-review/diff-stat.txt
?? .tmp-sfia-review/t-a7-framing-review/show-check.txt
?? .tmp-sfia-review/t-a7-framing-review/show-fuller.txt
?? .tmp-sfia-review/t-a7-framing-review/truth-final.txt
?? .tmp-sfia-review/t-a7-framing-review/truth.txt
?? .tmp-sfia-review/t-a7-framing/commit-blobs.txt
?? .tmp-sfia-review/t-a7-framing/commit-fuller.txt
?? .tmp-sfia-review/t-a7-framing/commit-name-status.txt
?? .tmp-sfia-review/t-a7-framing/commit-parent.txt
?? .tmp-sfia-review/t-a7-framing/commit-show.txt
?? .tmp-sfia-review/t-a7-framing/commit-stat.txt
?? .tmp-sfia-review/t-a7-framing/commit.diff
?? .tmp-sfia-review/t-a7-framing/created-files.txt
?? .tmp-sfia-review/t-a7-framing/delivery-dirs.txt
?? .tmp-sfia-review/t-a7-framing/local-only-commits.txt
?? .tmp-sfia-review/t-a7-framing/source-blobs.txt
?? .tmp-sfia-review/t-a7-framing/staged-name-status.txt
?? .tmp-sfia-review/t-a7-framing/status-final.txt
?? .tmp-sfia-review/t-a7-framing/truth.txt
?? .tmp-sfia-review/t-a7-framing/worktree-truth.txt
?? .tmp-sfia-review/t-a7-next-decision-review.diff
?? .tmp-sfia-review/t-a7-next-decision.diff
?? .tmp-sfia-review/t-a7-pr-readiness/analysis.json
?? .tmp-sfia-review/t-a7-pr-readiness/blobs.txt
?? .tmp-sfia-review/t-a7-pr-readiness/commit.diff
?? .tmp-sfia-review/t-a7-pr-readiness/full-vs-main.diff
?? .tmp-sfia-review/t-a7-pr-readiness/show.txt
?? .tmp-sfia-review/t-a7-pr-readiness/truth.txt
?? .tmp-sfia-review/t-a7-pr280-merge/branch-rules.json
?? .tmp-sfia-review/t-a7-pr280-merge/handoff-publish.out
?? .tmp-sfia-review/t-a7-pr280-merge/issue-comments.json
?? .tmp-sfia-review/t-a7-pr280-merge/main-before.txt
?? .tmp-sfia-review/t-a7-pr280-merge/main-runs.json
?? .tmp-sfia-review/t-a7-pr280-merge/merge-check-runs.json
?? .tmp-sfia-review/t-a7-pr280-merge/merge-commit.txt
?? .tmp-sfia-review/t-a7-pr280-merge/merge-status.json
?? .tmp-sfia-review/t-a7-pr280-merge/merge.out
?? .tmp-sfia-review/t-a7-pr280-merge/post-local.txt
?? .tmp-sfia-review/t-a7-pr280-merge/post-remote.txt
?? .tmp-sfia-review/t-a7-pr280-merge/pr-checks-pre.txt
?? .tmp-sfia-review/t-a7-pr280-merge/pr-post.json
?? .tmp-sfia-review/t-a7-pr280-merge/pr-pre.json
?? .tmp-sfia-review/t-a7-pr280-merge/pre-truth.txt
?? .tmp-sfia-review/t-a7-pr280-merge/repo-merge-policy.json
?? .tmp-sfia-review/t-a7-pr280-merge/review-comments.json
?? .tmp-sfia-review/t-a7-pr280-merge/reviews.json
?? .tmp-sfia-review/t-a7-pr280-merge/threads.json
?? .tmp-sfia-review/t-a7-pr280-review/branch-rules.json
?? .tmp-sfia-review/t-a7-pr280-review/check-runs.json
?? .tmp-sfia-review/t-a7-pr280-review/commit-status.json
?? .tmp-sfia-review/t-a7-pr280-review/gh-name-only-sorted.txt
?? .tmp-sfia-review/t-a7-pr280-review/handoff-publish.out
?? .tmp-sfia-review/t-a7-pr280-review/issue-comments.json
?? .tmp-sfia-review/t-a7-pr280-review/local-name-status.txt
?? .tmp-sfia-review/t-a7-pr280-review/local.diff
?? .tmp-sfia-review/t-a7-pr280-review/pr-checks.txt
?? .tmp-sfia-review/t-a7-pr280-review/pr-files.json
?? .tmp-sfia-review/t-a7-pr280-review/pr-name-only.txt
?? .tmp-sfia-review/t-a7-pr280-review/pr-view.json
?? .tmp-sfia-review/t-a7-pr280-review/pr.diff
?? .tmp-sfia-review/t-a7-pr280-review/review-comments.json
?? .tmp-sfia-review/t-a7-pr280-review/review-threads.json
?? .tmp-sfia-review/t-a7-pr280-review/reviews.json
?? .tmp-sfia-review/t-a7-pr280-review/truth.txt
?? .tmp-sfia-review/t-a7-push-pr/check-runs.json
?? .tmp-sfia-review/t-a7-push-pr/handoff-publish.out
?? .tmp-sfia-review/t-a7-push-pr/main-before.txt
?? .tmp-sfia-review/t-a7-push-pr/post-create.txt
?? .tmp-sfia-review/t-a7-push-pr/pr-body.md
?? .tmp-sfia-review/t-a7-push-pr/pr-checks-final.txt
?? .tmp-sfia-review/t-a7-push-pr/pr-checks.txt
?? .tmp-sfia-review/t-a7-push-pr/pr-create.out
?? .tmp-sfia-review/t-a7-push-pr/pr-search-head.json
?? .tmp-sfia-review/t-a7-push-pr/pr-search-title.json
?? .tmp-sfia-review/t-a7-push-pr/pr-view.json
?? .tmp-sfia-review/t-a7-push-pr/push.out
?? .tmp-sfia-review/t-a7-push-pr/truth-pre.txt
?? .tmp-sfia-review/t-a7-rereview/analysis.json
?? .tmp-sfia-review/t-a7-rereview/blobs.txt
?? .tmp-sfia-review/t-a7-rereview/corrective.diff
?? .tmp-sfia-review/t-a7-rereview/show-corrective.txt
?? .tmp-sfia-review/t-a7-rereview/show-initial.txt
?? .tmp-sfia-review/t-a7-rereview/truth.txt
?? .tmp-sfia-review/t-a7-w1.diff
?? .tmp-sfia-review/ta7-f03-01-source-truth-and-scope.md
?? .tmp-sfia-review/ta7-f03-02-f03-entry-preconditions-options.md
?? .tmp-sfia-review/ta7-f03-03-f11-api-ui-options.md
?? .tmp-sfia-review/ta7-f03-04-f13-legacy-history-read-only-options.md
?? .tmp-sfia-review/ta7-f03-05-cross-decision-consistency.md
?? .tmp-sfia-review/ta7-f03-06-recommendation-and-risks.md
?? .tmp-sfia-review/ta7-f03-07-morris-decision-pack.md
?? .tmp-sfia-review/ta7-f03-README.md
?? .tmp-sfia-review/ta7-f03-full.diff
?? .tmp-sfia-review/ta7-f03-meta.txt
?? .tmp-sfia-review/v3-modeled-d1-validation.json
?? .tmp-sfia-review/w1-01-source-truth-and-scope.md
?? .tmp-sfia-review/w1-02-methodmode-inventory.md
?? .tmp-sfia-review/w1-03-method-directory-inventory.md
?? .tmp-sfia-review/w1-04-ops1-boundary-assessment.md
?? .tmp-sfia-review/w1-05-dependency-map.md
?? .tmp-sfia-review/w1-06-removal-and-isolation-options.md
?? .tmp-sfia-review/w1-07-validation-rollback-and-stop-conditions.md
?? .tmp-sfia-review/w1-08-morris-decision-pack.md
?? .tmp-sfia-review/w1-README.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-codex-pilot =====
/Users/morris/Projects/sfia-codex-pilot
branch=method/codex-operating-model-pilot
HEAD=ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
locked=NO_OR_N/A
--- status --untracked=all ---
?? .codex/agents/sfia-mechanical.toml
?? .codex/agents/sfia-reviewer.toml
?? .codex/agents/sfia-structurer.toml
?? .codex/config.toml
?? .tmp-sfia-review/chatgpt-review.md
?? AGENTS.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-chatgpt-codex-operating-model-adr-candidate.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-chatgpt-codex-target-operating-model.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-chatgpt-codex-transition-roadmap.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-cursor-adherence-audit.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-cursor-adherence-inventory.csv
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-reasoning-orchestration-routing-model-candidate.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/2026-07-18-sfia-v2.7-review-validation-handoff-model-candidate.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-cycle-contract.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-detached-review-01.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-detached-review-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-execution-report.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-review-snapshot-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-review-snapshot-03.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/lot-5/2026-07-18-sfia-v2.7-lot-5-review-snapshot.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-cycle-contract.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-detached-review-01.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-detached-review-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-execution-report.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-micro-test-log.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-review-snapshot-02.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-evidence/reasoning-calibration/2026-07-18-sfia-v2.7-reasoning-calibration-review-snapshot.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/README.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/sfia-codex-cycle-contract-template.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/sfia-codex-execution-report-template.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.7/pilot-kit/sfia-codex-instruction-surface-matrix.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-task-tracker =====
/Users/morris/Projects/sfia-task-tracker
branch=cadrage/task-tracker-light
HEAD=b763a318fb84e23e482ed23a0bd561c1d9e719e6
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-a5-2-framing =====
/Users/morris/Projects/sfia-workspace-a5-2-framing
branch=framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
HEAD=bd3608c6220e820cc3fa017422a7564a565a1296
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts =====
/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
branch=method/sfia-cycle-knowledge-contracts
HEAD=cae841519ed1d2dd825e6ecb998337cd47b4a1e1
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-d1-conversational-convergence =====
/Users/morris/Projects/sfia-workspace-d1-conversational-convergence
branch=ux/sfia-studio-d1-conversational-convergence
HEAD=7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/_when.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/commit-stat.txt
?? .tmp-sfia-review/ux-docs.diff
?? .tmp-sfia-review/ux-validation.diff
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-d1-platform-integration =====
/Users/morris/Projects/sfia-workspace-d1-platform-integration
branch=delivery/sfia-studio-d1-shared-platform-integration
HEAD=c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png
?? .tmp-sfia-review/live-product-validation/lpv-u01-confirmation.png
?? .tmp-sfia-review/live-product-validation/lpv-u01-intake-live.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/creer-manuellement-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1024.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/workspace-reprendre-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/clarification-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/error-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1024.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1280.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1728.png
?? .tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/no-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/create-success-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-after-reload.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-empty.png
?? .tmp-sfia-review/screenshots-ops1-i1/ops1-i1-open-journal.png
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1 =====
/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
branch=docs/sfia-studio-doc32-post-p3-m1-correction
HEAD=dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-docs-recover =====
/Users/morris/Projects/sfia-workspace-docs-recover
branch=docs/sfia-studio-recover-unmerged-project-docs
HEAD=1a2fa31fab6343bdd0eab7211febb3bcc5326c33
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean =====
/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
branch=docs/sfia-studio-fa6-mitigated-from-main
HEAD=67f140a19cf4a992dbc0d7b053abfde579a9a68c
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-framing-next-increment =====
/Users/morris/Projects/sfia-workspace-framing-next-increment
branch=framing/sfia-studio-next-product-increment
HEAD=88fa4658da07156614de270d8172f147535ddbf9
locked=NO_OR_N/A
--- status --untracked=all ---
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
?? projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
?? projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
?? projects/sfia-studio/79-shared-technical-platform-architecture.md
?? projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md
--- staged ---
--- tracked diff ---
M	projects/sfia-studio/README.md

===== WORKTREE: /Users/morris/Projects/sfia-workspace-m1-bypass-probe =====
/Users/morris/Projects/sfia-workspace-m1-bypass-probe
branch=qa/sfia-studio-m1-bypass-probe
HEAD=f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert =====
/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
branch=qa/sfia-studio-m1-bypass-probe-revert
HEAD=b502c0069f836a729090bdc187dd98a0c26591ca
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-m1-capitalization =====
/Users/morris/Projects/sfia-workspace-m1-capitalization
branch=docs/sfia-studio-m1-capitalization-rex
HEAD=fa0eebe00ce3b765a8a486aa660dddfab40123a0
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-after-t-a6 =====
/Users/morris/Projects/sfia-workspace-option-a-after-t-a6
branch=framing/sfia-studio-v3-native-option-a-after-t-a6
HEAD=aef7fd6d5a678857cf36e490f1550866d47c8887
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-ci-governance =====
/Users/morris/Projects/sfia-workspace-option-a-ci-governance
branch=delivery/sfia-studio-v3-native-option-a-ci-merge-governance
HEAD=2f9560534e285c5b8105f81dca39c5252667860c
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs =====
/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
branch=docs/sfia-studio-option-a-ci-governance-post-merge
HEAD=a42a85c0c0b3e146e59f82ea753329ed9253f278
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check =====
/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
branch=delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
HEAD=9f03916243c470587f6958e058fd58909e5bd75a
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/build_pack.py
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/diff-stat.txt
?? .tmp-sfia-review/doc32.diff
?? .tmp-sfia-review/doc32.diff.clean
?? .tmp-sfia-review/main-wf.yml
?? .tmp-sfia-review/main-wf.yml.clean
?? .tmp-sfia-review/name-status.txt
?? .tmp-sfia-review/postmerge-squash.diff
?? .tmp-sfia-review/postmerge-squash.diff.clean
?? .tmp-sfia-review/pr-body-after.md
?? .tmp-sfia-review/pr-body-before.md
?? .tmp-sfia-review/pr270-doc32.diff
?? .tmp-sfia-review/pr270-doc32.diff.clean
?? .tmp-sfia-review/pr270-fix.diff
?? .tmp-sfia-review/pr270-fix.diff.clean
?? .tmp-sfia-review/pr270-wf.diff
?? .tmp-sfia-review/pr270-wf.diff.clean
?? .tmp-sfia-review/squash-main.diff
?? .tmp-sfia-review/squash-main.diff.clean
?? .tmp-sfia-review/wf.diff
?? .tmp-sfia-review/wf.diff.clean
?? .tmp-sfia-review/whitespace-fix.diff
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-review-handoff-publisher =====
/Users/morris/Projects/sfia-workspace-review-handoff-publisher
branch=tooling/review-handoff-canonical-publisher
HEAD=14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/diffs/commit-stat.txt
?? .tmp-sfia-review/diffs/committed-files.txt
?? .tmp-sfia-review/diffs/method-template.patch
?? .tmp-sfia-review/diffs/modified.patch
?? .tmp-sfia-review/diffs/publisher-sequence-excerpt.md
?? .tmp-sfia-review/diffs/template-alignment.patch
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-shared-platform-delivery =====
/Users/morris/Projects/sfia-workspace-shared-platform-delivery
branch=delivery/sfia-studio-shared-technical-platform
HEAD=08c282abafd97685bcc0b7e525ec96e6721ec589
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
?? .tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/creer-manuellement-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1024.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/nouvelle-demande-1440.png
?? .tmp-sfia-review/screenshots-d1-c1-ia-cleanup/workspace-reprendre-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/clarification-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/error-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1024.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1280.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1440.png
?? .tmp-sfia-review/screenshots-d1-c2/proposal-1728.png
?? .tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/no-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png
?? .tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png
?? .tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/create-success-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png
?? .tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/new-project-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/project-cockpit-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1024.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1280.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1440.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-1728.png
?? .tmp-sfia-review/screenshots-d1-i1/workspace-home-1440.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-cloture.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-decision-finale.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-execution.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-gate-morris.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-go-invalide.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-nouvelle-demande.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-qualification-proposee.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-rapport.png
?? .tmp-sfia-review/screenshots-increment-a/inc-a-verdict.png
?? .tmp-sfia-review/screenshots-increment-b/inc-b-gate-valide-idle.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-confirm-exact-demand.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-demand-campus360.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-demand-empty.png
?? .tmp-sfia-review/screenshots-increment-c-user-input/inc-c-demand-invalid.png
?? .tmp-sfia-review/screenshots-increment-c/inc-c-confirm-panel.png
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a6-post-merge =====
/Users/morris/Projects/sfia-workspace-t-a6-post-merge
branch=post-merge/sfia-studio-v3-native-option-a-t-a6
HEAD=1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration =====
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
branch=framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
HEAD=6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge =====
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
branch=docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
HEAD=960c90b32b2c1c5701a668b0ebc70fdd847c681b
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-framing =====
/Users/morris/Projects/sfia-workspace-t-a7-framing
branch=framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
HEAD=b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge =====
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
branch=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
?? .tmp-sfia-review/main-worktree-untracked-evidence.txt
?? .tmp-sfia-review/merge-commit-source.txt
?? .tmp-sfia-review/merge-readiness-truth.txt
?? .tmp-sfia-review/merge-revalidation.txt
?? .tmp-sfia-review/merge-truth.txt
?? .tmp-sfia-review/pr-296-after-api.json
?? .tmp-sfia-review/pr-296-after-body-metadata.json
?? .tmp-sfia-review/pr-296-after-merge.json
?? .tmp-sfia-review/pr-296-archive-and-cleanup-report.md
?? .tmp-sfia-review/pr-296-before-metadata.json
?? .tmp-sfia-review/pr-296-before-view.json
?? .tmp-sfia-review/pr-296-before.json
?? .tmp-sfia-review/pr-296-body-after.md
?? .tmp-sfia-review/pr-296-body-api-json.md
?? .tmp-sfia-review/pr-296-body-api-raw.md
?? .tmp-sfia-review/pr-296-body-authorized.diff
?? .tmp-sfia-review/pr-296-body-before-vs-remote-after.diff
?? .tmp-sfia-review/pr-296-body-before.md
?? .tmp-sfia-review/pr-296-body-concurrent-check.md
?? .tmp-sfia-review/pr-296-body-final.md
?? .tmp-sfia-review/pr-296-body-hashes.txt
?? .tmp-sfia-review/pr-296-body-remote-after.md
?? .tmp-sfia-review/pr-296-body-update-response.json
?? .tmp-sfia-review/pr-296-body-update.json
?? .tmp-sfia-review/pr-296-body.md
?? .tmp-sfia-review/pr-296-checks.json
?? .tmp-sfia-review/pr-296-checks.txt
?? .tmp-sfia-review/pr-296-comments.json
?? .tmp-sfia-review/pr-296-commits.txt
?? .tmp-sfia-review/pr-296-concurrent-meta.json
?? .tmp-sfia-review/pr-296-concurrent.json
?? .tmp-sfia-review/pr-296-diff-correspondence.txt
?? .tmp-sfia-review/pr-296-fetch-main-attempt.txt
?? .tmp-sfia-review/pr-296-files.txt
?? .tmp-sfia-review/pr-296-final-metadata.json
?? .tmp-sfia-review/pr-296-inline-comments-after.json
?? .tmp-sfia-review/pr-296-inline-comments-before.json
?? .tmp-sfia-review/pr-296-inline-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments-after.json
?? .tmp-sfia-review/pr-296-issue-comments-before.json
?? .tmp-sfia-review/pr-296-issue-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments.json
?? .tmp-sfia-review/pr-296-jobs.json
?? .tmp-sfia-review/pr-296-merge-body-after.md
?? .tmp-sfia-review/pr-296-merge-body-authorized.diff
?? .tmp-sfia-review/pr-296-merge-body-before.md
?? .tmp-sfia-review/pr-296-merge-body-concurrent.md
?? .tmp-sfia-review/pr-296-merge-body-final.md
?? .tmp-sfia-review/pr-296-merge-body-remote-after.md
?? .tmp-sfia-review/pr-296-merge-report.md
?? .tmp-sfia-review/pr-296-merge-response.json
?? .tmp-sfia-review/pr-296-metadata.json
?? .tmp-sfia-review/pr-296-pm-inline-comments.json
?? .tmp-sfia-review/pr-296-pm-issue-comments.json
?? .tmp-sfia-review/pr-296-pm-reviews.json
?? .tmp-sfia-review/pr-296-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-post-merge-runs.json
?? .tmp-sfia-review/pr-296-postmerge-body.md
?? .tmp-sfia-review/pr-296-postmerge-jobs.json
?? .tmp-sfia-review/pr-296-postmerge-pr.json
?? .tmp-sfia-review/pr-296-postmerge-run.json
?? .tmp-sfia-review/pr-296-pre-merge.json
?? .tmp-sfia-review/pr-296-pre-ready.json
?? .tmp-sfia-review/pr-296-ready-transition-report.md
?? .tmp-sfia-review/pr-296-remote-review-report.md
?? .tmp-sfia-review/pr-296-remote.diff
?? .tmp-sfia-review/pr-296-resume-inline-comments.json
?? .tmp-sfia-review/pr-296-resume-issue-comments.json
?? .tmp-sfia-review/pr-296-resume-pr.json
?? .tmp-sfia-review/pr-296-resume-reviews.json
?? .tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-reviews-after.json
?? .tmp-sfia-review/pr-296-reviews-before.json
?? .tmp-sfia-review/pr-296-reviews-concurrent.json
?? .tmp-sfia-review/pr-296-reviews.json
?? .tmp-sfia-review/pr-296-run.json
?? .tmp-sfia-review/pr-296-runs-after.json
?? .tmp-sfia-review/pr-296-switch-main-attempt.txt
?? .tmp-sfia-review/pr-296-view.json
?? .tmp-sfia-review/pr-297-after-ready.json
?? .tmp-sfia-review/pr-297-before-ready.json
?? .tmp-sfia-review/pr-297-body-after-ci-checkbox.md
?? .tmp-sfia-review/pr-297-body-after-merge-go.md
?? .tmp-sfia-review/pr-297-body-after-publish.md
?? .tmp-sfia-review/pr-297-body-before-merge.md
?? .tmp-sfia-review/pr-297-body-before-ready.md
?? .tmp-sfia-review/pr-297-body-checkbox-diff.patch
?? .tmp-sfia-review/pr-297-body-current.md
?? .tmp-sfia-review/pr-297-body-final-merged.md
?? .tmp-sfia-review/pr-297-body-merge-diff.patch
?? .tmp-sfia-review/pr-297-body-only-correction-pack.md
?? .tmp-sfia-review/pr-297-body-ready-f02-correction.md
?? .tmp-sfia-review/pr-297-branch-inventory.txt
?? .tmp-sfia-review/pr-297-ci-premerge.json
?? .tmp-sfia-review/pr-297-cleanup-readiness.md
?? .tmp-sfia-review/pr-297-document-05.md
?? .tmp-sfia-review/pr-297-final-findings.md
?? .tmp-sfia-review/pr-297-main-proof.txt
?? .tmp-sfia-review/pr-297-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-merge-decision-pack.md
?? .tmp-sfia-review/pr-297-merge-readiness-body.md
?? .tmp-sfia-review/pr-297-merge-readiness-findings.md
?? .tmp-sfia-review/pr-297-merge-readiness.diff
?? .tmp-sfia-review/pr-297-merge-readiness.json
?? .tmp-sfia-review/pr-297-pm-inline-comments.json
?? .tmp-sfia-review/pr-297-pm-issue-comments.json
?? .tmp-sfia-review/pr-297-pm-reviews.json
?? .tmp-sfia-review/pr-297-post-merge-body.md
?? .tmp-sfia-review/pr-297-post-merge-ci-initial.json
?? .tmp-sfia-review/pr-297-post-merge-ci-list.json
?? .tmp-sfia-review/pr-297-post-merge-ci-status.txt
?? .tmp-sfia-review/pr-297-post-merge-ci-view.txt
?? .tmp-sfia-review/pr-297-post-merge-ci.json
?? .tmp-sfia-review/pr-297-post-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-doc-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-findings.md
?? .tmp-sfia-review/pr-297-post-merge-pr.json
?? .tmp-sfia-review/pr-297-post-merge.json
?? .tmp-sfia-review/pr-297-postmerge-git-truth.txt
?? .tmp-sfia-review/pr-297-pre-merge-final.json
?? .tmp-sfia-review/pr-297-pre-merge.json
?? .tmp-sfia-review/pr-297-pre-ready.json
?? .tmp-sfia-review/pr-297-premerge-ci-ref.json
?? .tmp-sfia-review/pr-297-ready-f02-body-diff.patch
?? .tmp-sfia-review/pr-297-ready-findings.md
?? .tmp-sfia-review/pr-297-source-one-file.diff
?? .tmp-sfia-review/pr-297-worktree-inventory.txt
?? .tmp-sfia-review/pr-297-worktree-paths.txt
?? .tmp-sfia-review/pr-297-worktree-statuses.txt
?? .tmp-sfia-review/pr-body-v2-a3.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-checks.txt
?? .tmp-sfia-review/pr-readiness-truth.txt
?? .tmp-sfia-review/primary-truth.txt
?? .tmp-sfia-review/pub-truth.txt
?? .tmp-sfia-review/ready-final-git.txt
?? .tmp-sfia-review/ready-truth.txt
?? .tmp-sfia-review/remote-review-commit.txt
?? .tmp-sfia-review/remote-review-truth.txt
?? .tmp-sfia-review/review-timestamp.txt
?? .tmp-sfia-review/source-inspection.txt
?? .tmp-sfia-review/v3-1-d1-cap-source-commit.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package.diff
?? .tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-ready-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-rex-report.md
?? .tmp-sfia-review/v3-1-d1-pr-body.md
?? .tmp-sfia-review/worktree-after.txt
?? .tmp-sfia-review/worktree-before.txt
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-next-decision =====
/Users/morris/Projects/sfia-workspace-t-a7-next-decision
branch=framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
HEAD=33ea3e87facc8c99c9c5619d6d2424030d3918a2
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness =====
/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
branch=framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
HEAD=b6a19335f5116940175f5986492e3693722563bc
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions =====
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
branch=record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
HEAD=f89ba5fb6cfca4e3de97667d944569a20266a8aa
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope =====
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
branch=framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
HEAD=4fad47f72a7d6cde655d98a64351bb4624ed9ad1
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-template-handoff-fix =====
/Users/morris/Projects/sfia-workspace-template-handoff-fix
branch=HEAD=134be301792efbf6f9739d13f0572062ef976da7
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/handoff-local/latest-chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-ux-reconciliation =====
/Users/morris/Projects/sfia-workspace-ux-reconciliation
branch=project/sfia-studio-ux-ui-reconciliation
HEAD=7bdabdcc0ea5f760383da190a661250dcd5d2598
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation =====
/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
branch=method/sfia-studio-v3-doctrine-consolidation
HEAD=daf6f7d02bbac09024f6275a793769e66b2b3878
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-audit =====
/Users/morris/Projects/sfia-workspace-v3-native-audit
branch=audit/sfia-studio-v3-native-dependencies
HEAD=56ddf32e811f0f5f8b82f31400da18ceecf3bc30
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
branch=design/sfia-studio-v3-native-option-a-functional-architecture
HEAD=577ff0c22491288d2293fd9730ed26f0af4095b0
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-design =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-design
branch=design/sfia-studio-v3-native-option-a-functional
HEAD=e22bc243c8854df4e9422fafe46e92135fe242e9
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/chatgpt-review.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
branch=modeled/sfia-studio-v3-native-option-a
HEAD=52891e5c5a9b1254143e422111ea4955ca3a0940
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
branch=framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
HEAD=0b696ed970823aa75d013336e44e72de08f2ac57
locked=NO_OR_N/A
--- status --untracked=all ---
?? .tmp-sfia-review/14-full.md
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/created.txt
?? .tmp-sfia-review/d3-validation-fix.diff
?? .tmp-sfia-review/d4-tree.txt
?? .tmp-sfia-review/d4-validation-fix.diff
?? .tmp-sfia-review/d5-feat-stat.txt
?? .tmp-sfia-review/d5-runtime.diff
?? .tmp-sfia-review/d5-tests.diff
?? .tmp-sfia-review/d5-validation-fix.diff
?? .tmp-sfia-review/feat-stat.txt
?? .tmp-sfia-review/fix-stat.txt
?? .tmp-sfia-review/handoff-blob.txt
?? .tmp-sfia-review/modified.txt
?? .tmp-sfia-review/now.txt
?? .tmp-sfia-review/out-build.txt
?? .tmp-sfia-review/out-decision.txt
?? .tmp-sfia-review/out-evidence-review.txt
?? .tmp-sfia-review/out-execution-attempt.txt
?? .tmp-sfia-review/out-execution-contract.txt
?? .tmp-sfia-review/out-lint.txt
?? .tmp-sfia-review/out-modeled.txt
?? .tmp-sfia-review/out-tsc.txt
?? .tmp-sfia-review/pm-build.txt
?? .tmp-sfia-review/pm-decision.txt
?? .tmp-sfia-review/pm-diff-check.txt
?? .tmp-sfia-review/pm-evidence-review.txt
?? .tmp-sfia-review/pm-execution-attempt.txt
?? .tmp-sfia-review/pm-execution-contract.txt
?? .tmp-sfia-review/pm-files.txt
?? .tmp-sfia-review/pm-lint.txt
?? .tmp-sfia-review/pm-modeled.txt
?? .tmp-sfia-review/pm-secrets.txt
?? .tmp-sfia-review/pm-tsc.txt
?? .tmp-sfia-review/pr-body-live.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-commits.txt
?? .tmp-sfia-review/pr-conflict-markers.txt
?? .tmp-sfia-review/pr-create-body.md
?? .tmp-sfia-review/pr-debug.txt
?? .tmp-sfia-review/pr-diff-check.txt
?? .tmp-sfia-review/pr-diff-stat.txt
?? .tmp-sfia-review/pr-empty.txt
?? .tmp-sfia-review/pr-files.txt
?? .tmp-sfia-review/pr-forbidden-ish.txt
?? .tmp-sfia-review/pr-meta.json
?? .tmp-sfia-review/pr-name-status.txt
?? .tmp-sfia-review/pr-out-of-scope-candidates.txt
?? .tmp-sfia-review/pr-secrets.txt
?? .tmp-sfia-review/pr-todo.txt
?? .tmp-sfia-review/pr-volumes.txt
?? .tmp-sfia-review/pr-ws-files.txt
?? .tmp-sfia-review/pr-ws-wt.txt
?? .tmp-sfia-review/readme-full.md
?? .tmp-sfia-review/secret-scan.txt
?? .tmp-sfia-review/status.txt
?? .tmp-sfia-review/test-decision.txt
?? .tmp-sfia-review/test-evidence-review.txt
?? .tmp-sfia-review/test-execution-attempt.txt
?? .tmp-sfia-review/test-execution-contract.txt
?? .tmp-sfia-review/test-modeled.txt
?? .tmp-sfia-review/untracked.txt
?? .tmp-sfia-review/worktrees.txt
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux =====
/Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
branch=design/sfia-studio-v3-native-option-a-ux-ui
HEAD=608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
branch=ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
branch=ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
branch=ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
branch=ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
branch=ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
branch=ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
branch=ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
branch=ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
branch=ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i4-note.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
branch=ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
branch=ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
branch=ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
branch=ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
branch=ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i4-note.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
branch=ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
branch=ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
branch=ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
branch=ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
branch=ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/05-test01.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
branch=ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
branch=ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
branch=ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
branch=ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
branch=ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
branch=ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
branch=ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
branch=ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
branch=ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
branch=ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
branch=ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
branch=ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
branch=ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
branch=ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
branch=ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
branch=ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i4-note.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
branch=ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
branch=ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD=27811e8f5f3747706bbbe417a5dc949a066c9187
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0 =====
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
branch=ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD=4b279b8af41559c4e6e9c41a481c9c3b76675026
locked=NO_OR_N/A
--- status --untracked=all ---
?? projects/campus360/04-ops1-i5-execution-proof.md
--- staged ---
--- tracked diff ---

===== WORKTREE: /Users/morris/Projects/sfia-workspace/sfia-review-handoff =====
/Users/morris/Projects/sfia-workspace/sfia-review-handoff
branch=sfia/review-handoff
HEAD=3e61efc188f9b25e9a96982d07d0313656d2a2e8
locked=NO_OR_N/A
--- status --untracked=all ---
--- staged ---
--- tracked diff ---

```

## V. Inventaire des branches
```
=== LOCAL -vv ===
  architecture/interv360-backend-api-contract-framing                           7f24665 docs: frame Interv360 backend API contract
  architecture/interv360-backend-data-model-decision                            0f2f6c4 docs: decide Interv360 backend data model
  architecture/interv360-backend-persistence-decision                           4ee36ee [origin/architecture/interv360-backend-persistence-decision] docs: record backend persistence decision PR status
  architecture/interv360-backend-target-framing                                 4b59b51 docs: frame Interv360 backend target
  architecture/interv360-backend-technical-stack-decision                       9856770 docs: decide Interv360 backend technical stack
  architecture/interv360-product-industrialization-framing                      bf01af0 [origin/architecture/interv360-product-industrialization-framing] docs: record product industrialization PR status
  architecture/interv360-product-roadmap-after-persistence                      572d061 docs: define Interv360 roadmap after persistence
  architecture/interv360-product-roadmap-after-role-simulation                  70a1110 [origin/architecture/interv360-product-roadmap-after-role-simulation] docs: record roadmap after role simulation PR status
  architecture/interv360-product-roadmap-next                                   69b8246 [origin/architecture/interv360-product-roadmap-next] docs: record product roadmap next PR status
  architecture/interv360-role-simulation-review                                 733cbff [origin/architecture/interv360-role-simulation-review] docs: record role simulation review PR status
  architecture/sfia-studio-v3-native-option-a-technical                         e8166ad docs(sfia-studio): record Option A technical architecture validation
  archive/sfia-v2.6-lot-0-completion                                            2830efd [origin/archive/sfia-v2.6-lot-0-completion] docs: complete lot 0 archive execution tracking
  archive/sfia-v2.6-lot-0-inventories                                           6cf7d36 [origin/archive/sfia-v2.6-lot-0-inventories] fix: correct archived inventory relative links
  archive/sfia-v2.6-lot-c-v3-mcp                                                d4401c3 [origin/archive/sfia-v2.6-lot-c-v3-mcp] docs: record sfia v2.6 lot c execution
+ audit/sfia-studio-v3-native-dependencies                                      56ddf32 (/Users/morris/Projects/sfia-workspace-v3-native-audit) [origin/main: behind 219] docs(sfia-studio): validate v3 knowledge-driven doctrine (#259)
  audit/sfia-v2.6-lot-0-qualification                                           e200689 [origin/audit/sfia-v2.6-lot-0-qualification] docs: record morris lot 0 decisions
  audit/sfia-v2.6-repository-cartography                                        4ae75a9 [origin/audit/sfia-v2.6-repository-cartography] docs: restore section headers in pass authority traceability
  backlog/sfia-studio-ops1                                                      4032c25 [origin/backlog/sfia-studio-ops1: gone] docs: validate OPS1 backlog
  backlog/sfia-studio-poc-vertical-slice                                        b4b26b2 [origin/backlog/sfia-studio-poc-vertical-slice] docs(sfia-studio): define validated vertical slice backlog
  cadrage/sfia-v2.6-lot-h                                                       d54c952 [origin/cadrage/sfia-v2.6-lot-h] docs: align Lot H single-cycle execution strategy
+ cadrage/task-tracker-light                                                    b763a31 (/Users/morris/Projects/sfia-task-tracker) [origin/cadrage/task-tracker-light] feat: add task tracker MVP
  capitalization/sfia-documentation-completeness                                ef2f7bf docs: inventory SFIA v1.1 capitalization inputs
  capitalization/sfia-studio-p0-status-sync                                     e97e083 [origin/capitalization/sfia-studio-p0-status-sync] docs(sfia-studio): synchronize P0 status and POC trajectory
  capitalization/sfia-studio-poc-framing-post-merge                             18d2151 [origin/capitalization/sfia-studio-poc-framing-post-merge] docs(sfia-studio): correct post-merge versioning status
* capitalization/sfia-studio-v3-1-d1-rex                                        d77c775 [origin/capitalization/sfia-studio-v3-1-d1-rex] docs(sfia-studio): add V3.1-D1 capitalization REX
  capitalization/sfia-v2.6-repository-rationalization                           40b6f00 [origin/capitalization/sfia-v2.6-repository-rationalization] docs: capitalize SFIA v2.6 repository rationalization
  cleanup/sfia-v2.6-lot-j                                                       c4cc0b0 [origin/cleanup/sfia-v2.6-lot-j] docs: execute SFIA v2.6 Lot J
  conception/sfia-notion-product-space                                          f7f2e18 [origin/conception/sfia-notion-product-space] docs: design SFIA Notion product space
  consolidation/interv360-application-rex                                       dc4c971 [origin/consolidation/interv360-application-rex] docs: add Interv360 application REX
  consolidation/interv360-current-app-audit                                     8099a96 [origin/consolidation/interv360-current-app-audit] docs: audit current Interv360 application
  consolidation/sfia-documentation-review                                       45e4498 [origin/consolidation/sfia-documentation-review] docs: audit SFIA documentation structure
  consolidation/sfia-global-capitalization                                      b11b318 [origin/consolidation/sfia-global-capitalization] docs: add SFIA automation architecture vision
  cycle/chantiers360-v2-design-figma                                            5fa9fcb [origin/cycle/chantiers360-v2-design-figma] docs: add Figma P1 node ids and design captures
  cycle/chantiers360-v2-detailed-framing                                        4546d88 [origin/cycle/chantiers360-v2-detailed-framing] docs: add detailed framing for Chantiers360 v2
  cycle/chantiers360-v2-figma-fidelity-spike                                    6d44882 [origin/cycle/chantiers360-v2-figma-fidelity-spike] docs: record Morris validation for Chantiers360 v2 Figma spike
  cycle/chantiers360-v2-functional-architecture                                 934be03 [origin/cycle/chantiers360-v2-functional-architecture] docs: fix Chantiers360 v2 cycle list
  cycle/chantiers360-v2-light-architecture                                      55b2f0c [origin/cycle/chantiers360-v2-light-architecture] docs: align Chantiers360 v2 architecture decisions before readiness
  cycle/chantiers360-v2-mvp-backlog                                             9babc8c [origin/cycle/chantiers360-v2-mvp-backlog] docs: fix Chantiers360 v2 backlog increment mapping
  cycle/chantiers360-v2-ux-ui                                                   be9b2f3 [origin/cycle/chantiers360-v2-ux-ui] docs: add UX UI framing for Chantiers360 v2
  decision/chantiers360-v2-architecture-arbitrages                              9d425dd [origin/decision/chantiers360-v2-architecture-arbitrages] docs: align Chantiers360 v2 framing stack arbitration wording
  delivery/chantiers360-r-qa-04-dashboard-real-data                             824883c [origin/delivery/chantiers360-r-qa-04-dashboard-real-data] docs: fix Chantiers360 R-QA-04 QA report status
  delivery/chantiers360-v2-inc-01                                               e65a4d2 [origin/delivery/chantiers360-v2-inc-01] docs: prepare PR readiness for Chantiers360 v2 INC-01
  delivery/chantiers360-v2-inc-02                                               c4cc4dc [origin/delivery/chantiers360-v2-inc-02] docs: prepare PR readiness for Chantiers360 v2 INC-02
  delivery/chantiers360-v2-inc-03                                               6583ddf [origin/delivery/chantiers360-v2-inc-03] docs: prepare PR readiness for Chantiers360 v2 INC-03
  delivery/chantiers360-v2-inc-04                                               406a883 [origin/delivery/chantiers360-v2-inc-04] docs: prepare PR readiness for Chantiers360 v2 INC-04
  delivery/chantiers360-v2-inc-05                                               bcc6d37 [origin/delivery/chantiers360-v2-inc-05] docs: prepare PR readiness for Chantiers360 v2 INC-05
  delivery/interv360-api-demo-hardening                                         7ef233a [origin/delivery/interv360-api-demo-hardening] docs: record API demo hardening PR status
  delivery/interv360-api-product-hardening                                      0418305 [origin/delivery/interv360-api-product-hardening] docs: record API hardening PR status
  delivery/interv360-api-product-validation                                     69a33ed [origin/delivery/interv360-api-product-validation] docs: record API product validation PR status
  delivery/interv360-audit-trail                                                87662a2 [origin/delivery/interv360-audit-trail] docs: record audit trail PR status
  delivery/interv360-auth-user-switcher                                         be10f7a [origin/delivery/interv360-auth-user-switcher] docs: record auth user switcher PR status
  delivery/interv360-backend-minimal-prototype                                  a310850 [origin/delivery/interv360-backend-minimal-prototype] docs: record backend minimal prototype PR status
  delivery/interv360-backend-persistence                                        f39adb8 [origin/delivery/interv360-backend-persistence] docs: record backend persistence PR status
  delivery/interv360-backend-users-session                                      1c0311d [origin/delivery/interv360-backend-users-session] docs: record backend users session PR status
  delivery/interv360-batch-01-demo-credibility                                  12efbb6 [origin/delivery/interv360-batch-01-demo-credibility] docs: record Batch 01 PR status
  delivery/interv360-batch-02-demo-control-scenario                             a6eb49d [origin/delivery/interv360-batch-02-demo-control-scenario] docs: record Batch 02 PR status
  delivery/interv360-batch-03-demo-readiness-package                            4d6e465 [origin/delivery/interv360-batch-03-demo-readiness-package] docs: record Batch 03 PR status
  delivery/interv360-batch-04-demo-presentation-package                         bfa5e28 [origin/delivery/interv360-batch-04-demo-presentation-package] docs: record Batch 04 PR status
  delivery/interv360-connected-ux-productization                                6f8c72b [origin/delivery/interv360-connected-ux-productization] docs: record connected UX productization PR status
  delivery/interv360-demo-feedback-review                                       5febd0f [origin/delivery/interv360-demo-feedback-review] docs: record demo feedback review PR status
  delivery/interv360-demo-mvp-closure                                           091eebb [origin/delivery/interv360-demo-mvp-closure] docs: record demo MVP closure PR status
  delivery/interv360-demo-polish                                                d8394b7 [origin/delivery/interv360-demo-polish] docs: record demo polish visual review
  delivery/interv360-demo-presentation-feedback                                 5481b74 [origin/delivery/interv360-demo-presentation-feedback] docs: record demo presentation feedback PR status
  delivery/interv360-demo-presentation-review                                   4a6c7b7 [origin/delivery/interv360-demo-presentation-review] docs: record demo presentation review PR status
  delivery/interv360-end-to-end-demo-hardening                                  ed2c0f4 [origin/delivery/interv360-end-to-end-demo-hardening] docs: record end-to-end demo hardening PR status
  delivery/interv360-frontend-api-connection                                    a23cefc [origin/delivery/interv360-frontend-api-connection] docs: record frontend API connection PR status
  delivery/interv360-frontend-api-connection-framing                            f15956a docs: frame Interv360 frontend API connection
  delivery/interv360-implementation-go-no-go                                    8cc09b1 docs: confirm Interv360 conditional go decision
  delivery/interv360-inc-01-action-transition-decision                          aa5092f docs: decide INC-01 first action transition
  delivery/interv360-inc-01-app-foundation                                      2d7f121 docs: summarize INC-01 app foundation
  delivery/interv360-inc-01-controlled-workflow-skeleton                        1fae1ce docs: summarize INC-01 controlled workflow skeleton
  delivery/interv360-inc-01-controlled-workflow-validation                      16c3339 docs: validate INC-01 controlled workflow
  delivery/interv360-inc-01-demo-reset                                          5588977 docs: summarize INC-01 demo reset
  delivery/interv360-inc-01-demo-script                                         9569575 docs: add INC-01 demo script
  delivery/interv360-inc-01-final-demo-package                                  140a5be docs: add INC-01 final demo package
  delivery/interv360-inc-01-global-summary                                      985ebcb docs: summarize INC-01 globally
  delivery/interv360-inc-01-implementation-preparation                          0588ee2 docs: summarize INC-01 implementation preparation
  delivery/interv360-inc-01-intervention-readonly-skeleton                      ed5f9ba docs: summarize INC-01 intervention readonly skeleton
  delivery/interv360-inc-01-list-skeleton                                       5819367 docs: summarize INC-01 requests list skeleton
  delivery/interv360-inc-01-local-persistence-decision                          020f773 docs: decide INC-01 local persistence
  delivery/interv360-inc-01-phase-2-delivery-decision                           4f1eb6a docs: decide INC-01 phase 2 delivery
  delivery/interv360-inc-01-phase-2-rex                                         7a428a7 docs: capture INC-01 phase 2 REX
  delivery/interv360-inc-01-planning-readonly-skeleton                          8411138 docs: summarize INC-01 planning readonly skeleton
  delivery/interv360-inc-01-pr-preparation                                      4f7af01 docs: prepare INC-01 PR
  delivery/interv360-inc-01-push-and-pr                                         06751ad [origin/delivery/interv360-inc-01-push-and-pr] docs: record INC-01 PR creation
  delivery/interv360-inc-01-qualification-readonly-skeleton                     5033c24 docs: summarize INC-01 qualification readonly skeleton
  delivery/interv360-inc-01-readonly-demo-summary                               0e25e58 docs: consolidate INC-01 readonly demo
  delivery/interv360-inc-01-report-readonly-skeleton                            94a50c0 docs: summarize INC-01 report readonly skeleton
  delivery/interv360-inc-01-request-detail-skeleton                             ab27aad docs: summarize INC-01 request detail skeleton
  delivery/interv360-inc-02-pr-preparation                                      82c7823 [origin/delivery/interv360-inc-02-pr-preparation] docs: record INC-02 push status
  delivery/interv360-inc-02-ux-demo-improvement                                 e9de7be feat: improve INC-02 demo UX
  delivery/interv360-inc-03-multi-requests-local-demo                           5f6e2cc feat: add INC-03 multi-request local demo
  delivery/interv360-inc-03-pr-preparation                                      69325d0 [origin/delivery/interv360-inc-03-pr-preparation] docs: record INC-03 push status
  delivery/interv360-inc-04-list-filtering-local-summary                        d306054 [origin/delivery/interv360-inc-04-list-filtering-local-summary] docs: record INC-04 PR status
  delivery/interv360-product-demo-consolidation                                 1b44bc1 [origin/delivery/interv360-product-demo-consolidation] docs: record product demo consolidation PR status
  delivery/interv360-product-industrialization                                  3bba55b [origin/delivery/interv360-product-industrialization] docs: record product industrialization PR status
  delivery/interv360-product-ux-finalization                                    e106d91 [origin/delivery/interv360-product-ux-finalization] docs: record product UX PR status
  delivery/interv360-request-model-finalization                                 b3bd01f [origin/delivery/interv360-request-model-finalization] docs: record request model PR status
  delivery/interv360-request-model-productization                               6dded20 [origin/delivery/interv360-request-model-productization] docs: record request model productization PR status
  delivery/interv360-role-simulation                                            1547ff5 [origin/delivery/interv360-role-simulation] docs: record role simulation PR status
  delivery/interv360-technical-arbitration                                      ba81999 docs: assess Interv360 technical arbitration
  delivery/interv360-workflow-light-extension                                   5cd2b4e [origin/delivery/interv360-workflow-light-extension] docs: record workflow light extension PR status
  delivery/interv360-workflow-requalification                                   a830842 [origin/delivery/interv360-workflow-requalification] docs: record workflow requalification PR status
+ delivery/sfia-studio-control-tower-fast-track                                 c895a96 (/Users/morris/Projects/sfia-workspace) [origin/delivery/sfia-studio-control-tower-fast-track] docs(sfia-studio): formalize F-A6 as mitigated after M1
+ delivery/sfia-studio-d1-shared-platform-integration                           c2d39a7 (/Users/morris/Projects/sfia-workspace-d1-platform-integration) [origin/delivery/sfia-studio-d1-shared-platform-integration] fix(sfia-studio): raise D1 intake provider timeout to 60s
  delivery/sfia-studio-ops1-i1-session-journal                                  97df7d5 [origin/delivery/sfia-studio-ops1-i1-session-journal: gone] feat: implement OPS1 I1 session and journal
  delivery/sfia-studio-ops1-i3-action-gate                                      3607a3a [origin/delivery/sfia-studio-ops1-i3-action-gate] feat(sfia-studio): deliver OPS1 I3 action gate
  delivery/sfia-studio-poc-increment-a                                          89cb756 [origin/delivery/sfia-studio-poc-increment-a] feat(sfia-studio): implement vertical slice increment A cockpit
  delivery/sfia-studio-poc-increment-b                                          8316f26 [origin/delivery/sfia-studio-poc-increment-b] feat(sfia-studio): connect cockpit to fixture harness
  delivery/sfia-studio-poc-increment-c                                          96bb808 [origin/delivery/sfia-studio-poc-increment-c] feat(sfia-studio): add bounded live GPT qualification
  delivery/sfia-studio-poc-increment-d                                          41b9c46 [origin/delivery/sfia-studio-poc-increment-d] feat(sfia-studio): add controlled Cursor sandbox execution
+ delivery/sfia-studio-shared-technical-platform                                08c282a (/Users/morris/Projects/sfia-workspace-shared-platform-delivery) [origin/delivery/sfia-studio-shared-technical-platform] docs(sfia-studio): record shared platform PR #255 metadata
  delivery/sfia-studio-t-a7-consolidated-blocker-reduction                      c24da11 [origin/delivery/sfia-studio-t-a7-consolidated-blocker-reduction] docs(sfia-studio): document consolidated T-A7 blocker reduction lot
  delivery/sfia-studio-t-a7-f11-f13-internal-completion                         5afe095 [origin/delivery/sfia-studio-t-a7-f11-f13-internal-completion] fix(sfia-studio): correct bounded history provider typing
  delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation                     9c12505 [origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation] docs(sfia-studio): document HARD T-A6 atomicity and persistence foundation lot
+ delivery/sfia-studio-v3-native-option-a-ci-merge-governance                   2f95605 (/Users/morris/Projects/sfia-workspace-option-a-ci-governance) [origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance: ahead 2] docs(sfia-studio): review CI governance post-merge integration
+ delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916 (/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check) [origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation] docs(sfia-studio): remove trailing whitespace from path-aware preparation
  delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation              9e0a9c8 [origin/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation] docs(sfia-studio): prepare T-A0 Doctrine Foundation PR
  delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation           5733d25 [origin/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation] docs(sfia-studio): prepare T-A1 Project and LPS PR
  delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc   75aee25 [origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc] docs(sfia-studio): align T-A2 PR readiness HEAD and checklist
  delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority  f8d25c2 [origin/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority] docs(sfia-studio): align T-A3 PR readiness HEAD and checklist
  delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance    245f515 [origin/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance] docs(sfia-studio): prepare T-A4 ExecutionContract PR readiness
  delivery/sfia-studio-visible-slice-v1-project-core-composition                ca93e08 [origin/delivery/sfia-studio-visible-slice-v1-project-core-composition] fix(sfia-studio): share injected clock across V1 composition
  delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge           7ef160c [origin/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge] docs(sfia-studio): document V2-A1 runtime bridge
  delivery/sfia-studio-visible-slice-v2-a2-create-project-ui                    55a28d3 [origin/delivery/sfia-studio-visible-slice-v2-a2-create-project-ui: gone] fix(sfia-studio): resolve V2-A2 readiness findings
  delivery/sfia-v2.6-lot-e1-link-fixes                                          7885903 [origin/delivery/sfia-v2.6-lot-e1-link-fixes] docs: align e1 report correction HEAD sha
  delivery/sfia-v2.6-lot-h                                                      694fedc [origin/delivery/sfia-v2.6-lot-h] docs: execute SFIA v2.6 Lot H
  design/sfia-studio-ops1-scenario                                              d248b9d [origin/design/sfia-studio-ops1-scenario] docs: validate OPS1 operational scenario
  design/sfia-studio-ops1-technical-architecture                                b495a56 [origin/design/sfia-studio-ops1-technical-architecture: gone] docs: validate OPS1 technical architecture
  design/sfia-studio-poc-vertical-slice                                         58fb275 [origin/design/sfia-studio-poc-vertical-slice] docs(sfia-studio): align remaining VS-CAND status
+ design/sfia-studio-v3-native-option-a-functional                              e22bc24 (/Users/morris/Projects/sfia-workspace-v3-native-option-a-design) [origin/main: behind 218] docs(sfia-studio): design v3-native option A functional flow
+ design/sfia-studio-v3-native-option-a-functional-architecture                 577ff0c (/Users/morris/Projects/sfia-workspace-v3-native-option-a-arch) docs(sfia-studio): document Option A functional architecture
+ design/sfia-studio-v3-native-option-a-ux-ui                                   608d3d4 (/Users/morris/Projects/sfia-workspace-v3-native-option-a-ux) design(sfia-studio): define Option A UX and Figma contract
  devops/sfia-studio-ops1-foundation                                            04a3b45 [origin/devops/sfia-studio-ops1-foundation: gone] docs: validate OPS1 integration DevOps foundation
  docs/chantiers360-close-r-qa-04                                               662f1c3 [origin/docs/chantiers360-close-r-qa-04] docs: close Chantiers360 R-QA-04 reserve
  docs/chantiers360-v0-vs-sfia-v2-comparison                                    158bdf0 [origin/docs/chantiers360-v0-vs-sfia-v2-comparison] docs: add V0 vs SFIA v2 methodological comparison
  docs/chantiers360-v0-vs-v2-post-merge                                         2e68166 [origin/docs/chantiers360-v0-vs-v2-post-merge] docs: align V0 vs SFIA v2 comparison post-merge status
  docs/chantiers360-v2-design-coverage-post-merge                               bbd54bf [origin/docs/chantiers360-v2-design-coverage-post-merge] docs: align Chantiers360 v2 design coverage post-merge status
  docs/chantiers360-v2-final-pilot-rex                                          438b3bb [origin/docs/chantiers360-v2-final-pilot-rex] docs: add Chantiers360 v2 final pilot REX
  docs/chantiers360-v2-inc-01-closure                                           09204fc [origin/docs/chantiers360-v2-inc-01-closure] docs: close Chantiers360 v2 INC-01 with reserves
  docs/chantiers360-v2-inc-01-qa-g4                                             94f71f2 [origin/docs/chantiers360-v2-inc-01-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-01
  docs/chantiers360-v2-inc-02-closure                                           e461c6f [origin/docs/chantiers360-v2-inc-02-closure] merge: resolve conflicts with main for INC-02 closure docs
  docs/chantiers360-v2-inc-02-qa-g4                                             ec073f6 [origin/docs/chantiers360-v2-inc-02-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-02
  docs/chantiers360-v2-inc-03-closure                                           1d795fc [origin/docs/chantiers360-v2-inc-03-closure] docs: close Chantiers360 v2 INC-03 with reserves
  docs/chantiers360-v2-inc-03-qa-g4                                             f136c33 [origin/docs/chantiers360-v2-inc-03-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-03
  docs/chantiers360-v2-inc-04-closure                                           eb174d0 [origin/docs/chantiers360-v2-inc-04-closure] docs: close Chantiers360 v2 INC-04 with reserves
  docs/chantiers360-v2-inc-04-qa-g4                                             96bd25e [origin/docs/chantiers360-v2-inc-04-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-04
  docs/chantiers360-v2-inc-05-closure                                           9987df6 [origin/docs/chantiers360-v2-inc-05-closure] docs: close Chantiers360 v2 INC-05 with reserves
  docs/chantiers360-v2-inc-05-qa-g4                                             d30ca72 [origin/docs/chantiers360-v2-inc-05-qa-g4] docs: add QA-G4 post-merge report for Chantiers360 v2 INC-05
  docs/chantiers360-v2-post-capitalization-alignment                            314794a [origin/docs/chantiers360-v2-post-capitalization-alignment] docs: align Chantiers360 v2 post-capitalization status
  docs/chantiers360-v2-post-spike-alignment                                     fe93090 [origin/docs/chantiers360-v2-post-spike-alignment] docs: align Chantiers360 v2 post-spike status
  docs/chantiers360-v2-readme-post-closure                                      d672317 [origin/docs/chantiers360-v2-readme-post-closure] docs: align Chantiers360 v2 README after INC-02 closure
  docs/chantiers360-v2-technical-architecture-post-merge                        9e7bcb3 [origin/docs/chantiers360-v2-technical-architecture-post-merge] docs: align Chantiers360 v2 technical architecture post-merge status
  docs/close-lot-d1-status                                                      8815f0f [origin/docs/close-lot-d1-status] docs: close sfia v2.6 lot d1 status
  docs/close-lot-d2-status                                                      c0fc4b2 [origin/docs/close-lot-d2-status] docs: close sfia v2.6 lot d2 status
  docs/close-lot-d3-status                                                      6cdda92 [origin/docs/close-lot-d3-status] docs: close sfia v2.6 lot d3 status
  docs/fix-lot-d-plan-status                                                    af5d9a2 [origin/docs/fix-lot-d-plan-status] docs: refresh lot d migration plan status
+ docs/sfia-studio-doc32-post-p3-m1-correction                                  dd2a68c (/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1) [origin/docs/sfia-studio-doc32-post-p3-m1-correction] docs(sfia-studio): align document 32 after P3 and M1
+ docs/sfia-studio-fa6-mitigated-from-main                                      67f140a (/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean) [origin/docs/sfia-studio-fa6-mitigated-from-main] docs(sfia-studio): formalize F-A6 as mitigated after M1
+ docs/sfia-studio-m1-capitalization-rex                                        fa0eebe (/Users/morris/Projects/sfia-workspace-m1-capitalization) [origin/docs/sfia-studio-m1-capitalization-rex] docs(sfia-studio): capitalize M1 implementation and proofs
+ docs/sfia-studio-option-a-ci-governance-post-merge                            a42a85c (/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs) [origin/docs/sfia-studio-option-a-ci-governance-post-merge] docs(sfia-studio): review CI governance post-merge integration
  docs/sfia-studio-pr226-post-merge-sync                                        ed33044 [origin/docs/sfia-studio-pr226-post-merge-sync] docs(sfia-studio): sync status after PR 226 merge
+ docs/sfia-studio-recover-unmerged-project-docs                                1a2fa31 (/Users/morris/Projects/sfia-workspace-docs-recover) [origin/docs/sfia-studio-recover-unmerged-project-docs] docs(sfia-studio): record draft PR #256 on consolidation report
+ docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status                    960c90b (/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge) [origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status] docs(sfia-studio): align T-A7 F03 F11 F13 README post-merge status
  docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization                       c520b81 [origin/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization] docs(sfia-studio): capitalize T-A7 F11 F13 post-merge validation
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing                    dcdc90a docs(sfia-studio): record F11 F13 completion decisions
  docs/sfia-v2.6-lot-e-closure                                                  0ae4bb3 [origin/docs/sfia-v2.6-lot-e-closure] docs: close sfia v2.6 lot e status
  docs/sfia-v231-final-status                                                   2bddced [origin/docs/sfia-v231-final-status] docs: finalize SFIA v2.3.1 versioning status
  docs/sfia-v2x-versioning-post-merge                                           c0a4a74 [origin/docs/sfia-v2x-versioning-post-merge] docs: align SFIA v2.x versioning post-merge status
  documentation/sfia-discovery-act-02-editorial                                 153c50b [origin/documentation/sfia-discovery-act-02-editorial] docs(discovery): add Act II editorial and reorder roadmap
  documentation/sfia-discovery-act-03-novabuild-editorial                       6fcc76a [origin/documentation/sfia-discovery-act-03-novabuild-editorial] docs(discovery): fix Act III PR metadata
  documentation/sfia-discovery-acts-04-05-editorial                             7e65429 [origin/documentation/sfia-discovery-acts-04-05-editorial] docs(discovery): add Acts IV-V editorial content
  documentation/sfia-discovery-acts-06-07-editorial                             a25cb1c [origin/documentation/sfia-discovery-acts-06-07-editorial] docs(discovery): add Acts VI-VII editorial content
  documentation/sfia-discovery-legacy-migration-plan                            4021502 [origin/documentation/sfia-discovery-legacy-migration-plan] docs(discovery): add legacy migration plan
  documentation/sfia-discovery-pd-08-qa                                         f934a3c [origin/documentation/sfia-discovery-pd-08-qa] docs(discovery): complete PD-08 QA and editorial resync
  documentation/sfia-discovery-pd-09-capitalization                             28966a8 [origin/documentation/sfia-discovery-pd-09-capitalization] docs(discovery): record PD-09 capitalization decision
  evol/chantiers360-post-mvp-framing                                            8b40a0b [origin/evol/chantiers360-post-mvp-framing] docs: add Chantiers360 post-MVP roadmap framing
  fix/chantiers360-v2-rqa02-status-alignment                                    1ef4d67 [origin/fix/chantiers360-v2-rqa02-status-alignment] docs: align Chantiers360 v2 status wording for R-QA-02
  fix/remove-controlled-delivery-broken-link                                    b8eb945 [origin/fix/remove-controlled-delivery-broken-link] docs: remove obsolete controlled delivery terrain link
  framing/sfia-studio-control-tower                                             32e5271 feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
  framing/sfia-studio-first-user-visible-vertical-slice                         c195517 docs(sfia-studio): frame first user-visible vertical slice journey
+ framing/sfia-studio-next-product-increment                                    88fa465 (/Users/morris/Projects/sfia-workspace-framing-next-increment) [origin/main: behind 224] feat(sfia-studio): deliver control tower and AI-guided project intake foundation (#254)
+ framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity  bd3608c (/Users/morris/Projects/sfia-workspace-a5-2-framing) [origin/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity] docs(sfia-studio): record Morris A5.2 decisions
+ framing/sfia-studio-v3-native-option-a-after-t-a6                             aef7fd6 (/Users/morris/Projects/sfia-workspace-option-a-after-t-a6) docs(sfia-studio): frame next Option A step after T-A6
  framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution         65e5b60 [origin/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution] docs(sfia-studio): clarify T-A5 PR readiness HEAD tip reference
+ framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity   0b696ed (/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech) [origin/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity] docs(sfia-studio): freeze T-A6 PR publication tip metadata
+ framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions             b7a5e82 (/Users/morris/Projects/sfia-workspace-t-a7-framing) [origin/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions] docs(sfia-studio): record Morris T-A7 framing decisions
+ framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration           6849b6f (/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration) [origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration] docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions
+ framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step                33ea3e8 (/Users/morris/Projects/sfia-workspace-t-a7-next-decision) [origin/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step] docs(sfia-studio): record Morris T-A7 next-step decisions
+ framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness               b6a1933 (/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness) [origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness] fix(sfia-studio): harden T-A7 bounded readiness foundations
+ framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope               4fad47f (/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope) [origin/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope] docs(sfia-studio): remove trailing whitespace from wave 1 pack
  framing/sfia-studio-visible-slice-v2-runtime-ui-contract                      a1e207b docs(sfia-studio): fix V2 framing trailing whitespace
  framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage             3e8a437 [origin/main: behind 5] Merge pull request #295 from mcleland147/delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui
  main                                                                          b553f0a [origin/main: behind 2] Merge pull request #296 from mcleland147/delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime
  method/chantiers360-v2-inc-01-capitalization                                  5b5758f [origin/method/chantiers360-v2-inc-01-capitalization] docs: capitalize Chantiers360 v2 INC-01 delivery lifecycle
  method/chantiers360-v2-mvp-capitalization                                     adcda83 [origin/method/chantiers360-v2-mvp-capitalization] docs: adjust Chantiers360 v2 MVP capitalization references
+ method/codex-operating-model-pilot                                            ec7f397 (/Users/morris/Projects/sfia-codex-pilot) [origin/main: behind 284] Merge pull request #206 from mcleland147/project/campus360-opportunity-framing
  method/controlled-delivery-index-integration                                  61187dc docs: integrate controlled delivery index
  method/controlled-delivery-publication-package                                8dc8269 docs: summarize controlled delivery publication package
  method/controlled-delivery-publication-prep                                   9a6e0ae docs: prepare controlled delivery publication
  method/controlled-delivery-standard                                           bf5734d docs: summarize controlled delivery standard
  method/controlled-delivery-standard-hardening                                 8345337 docs: summarize controlled delivery standard hardening
  method/delivery-acceleration-level-3-rex                                      008dbff [origin/method/delivery-acceleration-level-3-rex] docs: capture delivery acceleration level 3 REX
  method/interv360-final-capitalization                                         8763417 [origin/method/interv360-final-capitalization] docs: add Interv360 final SFIA capitalization
  method/interv360-mvp-delivery-capitalization                                  2ef34cb [origin/method/interv360-mvp-delivery-capitalization] docs: add SFIA Fast Track MVP delivery template
  method/sfia-3-exploration-closure                                             f2a822e [origin/method/sfia-3-exploration-closure] docs: close SFIA 3.0 exploration and return to v2.4 baseline
  method/sfia-consolidation-roadmap                                             10cb8c0 [origin/method/sfia-consolidation-roadmap] docs: plan SFIA consolidation roadmap
+ method/sfia-cycle-knowledge-contracts                                         cae8415 (/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts) [origin/method/sfia-cycle-knowledge-contracts] docs(sfia): fix candidate CKC routing references
+ method/sfia-studio-v3-doctrine-consolidation                                  daf6f7d (/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation) [origin/method/sfia-studio-v3-doctrine-consolidation] docs(sfia-studio): validate v3 doctrine as Studio-exclusive
  method/sfia-v2-automation-levels                                              80aac9c [origin/method/sfia-v2-automation-levels] docs: add SFIA v2 project lifecycle automation trajectory
  method/sfia-v2-automation-vision                                              1398a46 [origin/method/sfia-v2-automation-vision] docs: define SFIA v2 automation and delivery vision
  method/sfia-v2-delivery-qa-test-standard                                      2645df2 [origin/method/sfia-v2-delivery-qa-test-standard] docs: disambiguate delivery QA prompt IDs
  method/sfia-v2-design-coverage-rules                                          bc697d8 [origin/method/sfia-v2-design-coverage-rules] docs: add SFIA v2 design coverage standard
  method/sfia-v2-figma-design-cycle                                             1bb55f0 [origin/method/sfia-v2-figma-design-cycle] docs: add SFIA v2 Figma design cycle standard
  method/sfia-v2-figma-fidelity-gate-standard                                   672d72b [origin/method/sfia-v2-figma-fidelity-gate-standard] docs: add SFIA v2 Figma fidelity gate standard
  method/sfia-v2-pilot-selection-decision                                       7282317 [origin/method/sfia-v2-pilot-selection-decision] docs: define SFIA v2 pilot selection decision framework
  method/sfia-v2-pilot-selection-scoring                                        22d8dcf [origin/method/sfia-v2-pilot-selection-scoring] docs: refine SFIA v2 pilot scoring strategy
  method/sfia-v2-project-bootstrap-standard                                     cbba66b [origin/method/sfia-v2-project-bootstrap-standard] docs: define SFIA v2 project bootstrap standard
  method/sfia-v2-prompt-routing-alignment                                       1bc9f3a [origin/method/sfia-v2-prompt-routing-alignment] docs: align SFIA v2 delivery QA prompts and routing
  method/sfia-v2-technical-architecture-decision-standard                       d8f4377 [origin/method/sfia-v2-technical-architecture-decision-standard] docs: add SFIA v2 technical architecture decision documentation standard
  method/sfia-v2.4-consolidation-operating-efficiency                           d96dfce [origin/method/sfia-v2.4-consolidation-operating-efficiency] docs: add SFIA v2.4 consolidation operating efficiency standard
  method/sfia-v2.4-reference-documentation-alignment                            e79a440 [origin/method/sfia-v2.4-reference-documentation-alignment] docs: align SFIA prompt handoff and knowledge with v2.4
  method/sfia-v2.4.1-documentation-status-promotion                             ecaf416 [origin/method/sfia-v2.4.1-documentation-status-promotion] docs: open SFIA 3.0 documentation trajectory
  method/sfia-v2.5-cycle-1-mvp                                                  4e3947f [origin/method/sfia-v2.5-cycle-1-mvp] docs: operationalize SFIA v2.5 proportional method MVP
  method/sfia-v2.5-project-plan                                                 7751855 [origin/method/sfia-v2.5-project-plan] docs: open SFIA v2.5 candidate project plan
  method/sfia-v2.5-review-pack-reset                                            a5497ef [origin/method/sfia-v2.5-review-pack-reset] docs: enforce mono-cycle SFIA review pack reset
  method/sfia-v2.6-repository-standard-decisions                                56ce850 [origin/method/sfia-v2.6-repository-standard-decisions] docs: finalize Morris repository standard decisions
  method/sfia-v2x-method-versioning-standard                                    a76c3f8 [origin/method/sfia-v2x-method-versioning-standard] docs: add SFIA v2.x method versioning standard
  migration/sfia-v2.6-lot-a-core                                                d630c6c [origin/migration/sfia-v2.6-lot-a-core] docs: record lot a branch sync with main after pr 170
  migration/sfia-v2.6-lot-d1-naming                                             930d5a2 [origin/migration/sfia-v2.6-lot-d1-naming] docs: record sfia v2.6 lot d1 execution
  migration/sfia-v2.6-lot-d2-naming                                             f56c768 [origin/migration/sfia-v2.6-lot-d2-naming] docs: record sfia v2.6 lot d2 execution
  migration/sfia-v2.6-lot-d3-naming                                             093c91a [origin/migration/sfia-v2.6-lot-d3-naming] docs: record sfia v2.6 lot d3 execution
+ modeled/sfia-studio-v3-native-option-a                                        52891e5 (/Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled) modeled(sfia-studio): define Option A v3-native contracts
  notion/pause-notion-publication-track                                         c79992b [origin/notion/pause-notion-publication-track] docs: pause SFIA Notion publication track
  notion/provisioning-engine-design                                             38b91eb [origin/notion/provisioning-engine-design] feat: add Notion provisioning engine dry-run
  notion/sfia-live-export-audit                                                 a7b22ec [origin/notion/sfia-live-export-audit] docs: audit SFIA Notion legacy export
+ ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4                    32e5271 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
+ ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230                    27811e8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
+ ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0                    4b279b8 (/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
+ post-merge/sfia-studio-v3-native-option-a-t-a6                                1f25857 (/Users/morris/Projects/sfia-workspace-t-a6-post-merge) docs(sfia-studio): record T-A6 post-merge review
  pr/sfia-studio-v3-native-option-a-foundation                                  9c0f6f9 [origin/pr/sfia-studio-v3-native-option-a-foundation] docs(sfia-studio): prepare Option A foundation PR
  product/interv360-mvp-final-roadmap                                           14cadbe [origin/product/interv360-mvp-final-roadmap] docs: record MVP final roadmap PR status
  project/campus360-detailed-framing                                            ec7f397 Merge pull request #206 from mcleland147/project/campus360-opportunity-framing
  project/campus360-opportunity-framing                                         4275a60 [origin/project/campus360-opportunity-framing] docs(campus360): close pre-framing and validate G2 G3
  project/chantiers360-v2-bootstrap                                             774beed [origin/project/chantiers360-v2-bootstrap] docs: refine Chantiers360 v2 MVP scope
  project/sfia-studio-functional-architecture                                   4f4e7cf [origin/project/sfia-studio-functional-architecture] docs: sync SFIA Studio PR 213 post-merge integration
  project/sfia-studio-functional-design                                         cf64fdd [origin/project/sfia-studio-functional-design] docs(sfia-studio): synchronize functional design post-merge status
  project/sfia-studio-poc-orchestration-framing                                 3b162ec [origin/project/sfia-studio-poc-orchestration-framing] docs(sfia-studio): validate POC orchestration framing
  project/sfia-studio-pre-framing                                               18c6427 [origin/project/sfia-studio-pre-framing] docs(sfia-studio): finalize post-merge documentation
+ project/sfia-studio-ux-ui-reconciliation                                      7bdabdc (/Users/morris/Projects/sfia-workspace-ux-reconciliation) [origin/project/sfia-studio-ux-ui-reconciliation] docs: consolidate SFIA Studio UX Option B
  prompts/create-templates-context-pack                                         b6d9a88 [origin/prompts/create-templates-context-pack] docs: add SFIA prompt templates context pack
+ qa/sfia-studio-m1-bypass-probe                                                f0f0e0f (/Users/morris/Projects/sfia-workspace-m1-bypass-probe) [origin/qa/sfia-studio-m1-bypass-probe] qa(sfia-studio): add controlled M1 bypass probe
+ qa/sfia-studio-m1-bypass-probe-revert                                         b502c00 (/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert) [origin/qa/sfia-studio-m1-bypass-probe-revert] revert(sfia-studio): remove controlled M1 bypass probe
  qualification/sfia-v2.6-lot-d-naming                                          3a6d1e7 [origin/qualification/sfia-v2.6-lot-d-naming] docs: record sfia v2.6 lot d naming qualification
  qualification/sfia-v2.6-lot-e-global-controls                                 b87413b [origin/qualification/sfia-v2.6-lot-e-global-controls] docs: correct lot e qualification metrics and sublots
  qualification/sfia-v2.6-lot-f-superseded                                      2f89afd [origin/qualification/sfia-v2.6-lot-f-superseded] docs: qualify sfia v2.6 lot f superseded files
  qualification/sfia-v2.6-lot-f2-f005                                           7d87331 [origin/qualification/sfia-v2.6-lot-f2-f005] docs: close SFIA v2.6 Lot F with F2 Option B
+ record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions                   f89ba5f (/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions) [origin/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions] docs(sfia-studio): record T-A7 wave 1 Morris decisions
  recovery/campus360-detailed-framing                                           32690b6 [origin/main: ahead 1, behind 262] docs(campus360): recover detailed framing draft
  recovery/sfia-studio-functional-architecture-sync                             a5ad0c0 [origin/main: ahead 1, behind 262] docs(sfia-studio): recover functional architecture deltas
  release/interv360-mvp-release-readiness                                       dfc6430 [origin/release/interv360-mvp-release-readiness] docs: prepare Interv360 MVP release readiness PR
+ sfia/review-handoff                                                           3e61efc (/Users/morris/Projects/sfia-workspace/sfia-review-handoff) [origin/sfia/review-handoff] docs(review-handoff): publish SFIA Studio V3.1-D1 capitalization merge report
  spike/sfia-studio-openai-gpt-adapter                                          056c97f [origin/spike/sfia-studio-openai-gpt-adapter] fix(sfia-studio): address final PR readiness findings
+ tooling/review-handoff-canonical-publisher                                    14d58fe (/Users/morris/Projects/sfia-workspace-review-handoff-publisher) [origin/tooling/review-handoff-canonical-publisher] feat(tooling): add canonical review handoff publisher
+ ux/sfia-studio-d1-conversational-convergence                                  7dc6f9f (/Users/morris/Projects/sfia-workspace-d1-conversational-convergence) docs(sfia-studio): validate D1 conversational flow decisions
  validation/sfia-v2.6-lot-e2-validation                                        477fe55 [origin/validation/sfia-v2.6-lot-e2-validation] docs: align lot e2 report head
  validation/sfia-v2.6-lot-f1a-f1b                                              15185f3 [origin/validation/sfia-v2.6-lot-f1a-f1b] docs: validate SFIA v2.6 Lot F1a and F1b
=== REMOTE -vv ===
  origin/HEAD                                                                          -> origin/main
  origin/architecture/interv360-backend-persistence-decision                           4ee36ee docs: record backend persistence decision PR status
  origin/architecture/interv360-product-industrialization-framing                      bf01af0 docs: record product industrialization PR status
  origin/architecture/interv360-product-roadmap-after-role-simulation                  70a1110 docs: record roadmap after role simulation PR status
  origin/architecture/interv360-product-roadmap-next                                   69b8246 docs: record product roadmap next PR status
  origin/architecture/interv360-role-simulation-review                                 733cbff docs: record role simulation review PR status
  origin/archive/sfia-v2.6-lot-0-completion                                            2830efd docs: complete lot 0 archive execution tracking
  origin/archive/sfia-v2.6-lot-0-inventories                                           6cf7d36 fix: correct archived inventory relative links
  origin/archive/sfia-v2.6-lot-c-v3-mcp                                                d4401c3 docs: record sfia v2.6 lot c execution
  origin/audit/sfia-v2.6-lot-0-qualification                                           e200689 docs: record morris lot 0 decisions
  origin/audit/sfia-v2.6-repository-cartography                                        4ae75a9 docs: restore section headers in pass authority traceability
  origin/backlog/sfia-studio-poc-vertical-slice                                        b4b26b2 docs(sfia-studio): define validated vertical slice backlog
  origin/cadrage/sfia-v2.6-lot-h                                                       d54c952 docs: align Lot H single-cycle execution strategy
  origin/cadrage/task-tracker-light                                                    b763a31 feat: add task tracker MVP
  origin/capitalization/sfia-studio-p0-status-sync                                     e97e083 docs(sfia-studio): synchronize P0 status and POC trajectory
  origin/capitalization/sfia-studio-poc-framing-post-merge                             18d2151 docs(sfia-studio): correct post-merge versioning status
  origin/capitalization/sfia-studio-v3-1-d1-rex                                        d77c775 docs(sfia-studio): add V3.1-D1 capitalization REX
  origin/capitalization/sfia-v2.6-repository-rationalization                           40b6f00 docs: capitalize SFIA v2.6 repository rationalization
  origin/cleanup/sfia-v2.6-lot-j                                                       c4cc0b0 docs: execute SFIA v2.6 Lot J
  origin/conception/sfia-notion-product-space                                          f7f2e18 docs: design SFIA Notion product space
  origin/consolidation/interv360-application-rex                                       dc4c971 docs: add Interv360 application REX
  origin/consolidation/interv360-current-app-audit                                     8099a96 docs: audit current Interv360 application
  origin/consolidation/sfia-documentation-review                                       45e4498 docs: audit SFIA documentation structure
  origin/consolidation/sfia-global-capitalization                                      b11b318 docs: add SFIA automation architecture vision
  origin/cycle/chantiers360-v2-design-figma                                            5fa9fcb docs: add Figma P1 node ids and design captures
  origin/cycle/chantiers360-v2-detailed-framing                                        4546d88 docs: add detailed framing for Chantiers360 v2
  origin/cycle/chantiers360-v2-figma-fidelity-spike                                    6d44882 docs: record Morris validation for Chantiers360 v2 Figma spike
  origin/cycle/chantiers360-v2-functional-architecture                                 934be03 docs: fix Chantiers360 v2 cycle list
  origin/cycle/chantiers360-v2-light-architecture                                      55b2f0c docs: align Chantiers360 v2 architecture decisions before readiness
  origin/cycle/chantiers360-v2-mvp-backlog                                             9babc8c docs: fix Chantiers360 v2 backlog increment mapping
  origin/cycle/chantiers360-v2-ux-ui                                                   be9b2f3 docs: add UX UI framing for Chantiers360 v2
  origin/decision/chantiers360-v2-architecture-arbitrages                              9d425dd docs: align Chantiers360 v2 framing stack arbitration wording
  origin/delivery/chantiers360-r-qa-04-dashboard-real-data                             824883c docs: fix Chantiers360 R-QA-04 QA report status
  origin/delivery/chantiers360-v2-inc-01                                               e65a4d2 docs: prepare PR readiness for Chantiers360 v2 INC-01
  origin/delivery/chantiers360-v2-inc-02                                               c4cc4dc docs: prepare PR readiness for Chantiers360 v2 INC-02
  origin/delivery/chantiers360-v2-inc-03                                               6583ddf docs: prepare PR readiness for Chantiers360 v2 INC-03
  origin/delivery/chantiers360-v2-inc-04                                               406a883 docs: prepare PR readiness for Chantiers360 v2 INC-04
  origin/delivery/chantiers360-v2-inc-05                                               bcc6d37 docs: prepare PR readiness for Chantiers360 v2 INC-05
  origin/delivery/interv360-api-demo-hardening                                         7ef233a docs: record API demo hardening PR status
  origin/delivery/interv360-api-product-hardening                                      0418305 docs: record API hardening PR status
  origin/delivery/interv360-api-product-validation                                     69a33ed docs: record API product validation PR status
  origin/delivery/interv360-audit-trail                                                87662a2 docs: record audit trail PR status
  origin/delivery/interv360-auth-user-switcher                                         be10f7a docs: record auth user switcher PR status
  origin/delivery/interv360-backend-minimal-prototype                                  a310850 docs: record backend minimal prototype PR status
  origin/delivery/interv360-backend-persistence                                        f39adb8 docs: record backend persistence PR status
  origin/delivery/interv360-backend-users-session                                      1c0311d docs: record backend users session PR status
  origin/delivery/interv360-batch-01-demo-credibility                                  12efbb6 docs: record Batch 01 PR status
  origin/delivery/interv360-batch-02-demo-control-scenario                             a6eb49d docs: record Batch 02 PR status
  origin/delivery/interv360-batch-03-demo-readiness-package                            4d6e465 docs: record Batch 03 PR status
  origin/delivery/interv360-batch-04-demo-presentation-package                         bfa5e28 docs: record Batch 04 PR status
  origin/delivery/interv360-connected-ux-productization                                6f8c72b docs: record connected UX productization PR status
  origin/delivery/interv360-demo-feedback-review                                       5febd0f docs: record demo feedback review PR status
  origin/delivery/interv360-demo-mvp-closure                                           091eebb docs: record demo MVP closure PR status
  origin/delivery/interv360-demo-polish                                                d8394b7 docs: record demo polish visual review
  origin/delivery/interv360-demo-presentation-feedback                                 5481b74 docs: record demo presentation feedback PR status
  origin/delivery/interv360-demo-presentation-review                                   4a6c7b7 docs: record demo presentation review PR status
  origin/delivery/interv360-end-to-end-demo-hardening                                  ed2c0f4 docs: record end-to-end demo hardening PR status
  origin/delivery/interv360-frontend-api-connection                                    a23cefc docs: record frontend API connection PR status
  origin/delivery/interv360-inc-01-push-and-pr                                         06751ad docs: record INC-01 PR creation
  origin/delivery/interv360-inc-02-pr-preparation                                      82c7823 docs: record INC-02 push status
  origin/delivery/interv360-inc-03-pr-preparation                                      69325d0 docs: record INC-03 push status
  origin/delivery/interv360-inc-04-list-filtering-local-summary                        d306054 docs: record INC-04 PR status
  origin/delivery/interv360-product-demo-consolidation                                 1b44bc1 docs: record product demo consolidation PR status
  origin/delivery/interv360-product-industrialization                                  3bba55b docs: record product industrialization PR status
  origin/delivery/interv360-product-ux-finalization                                    e106d91 docs: record product UX PR status
  origin/delivery/interv360-request-model-finalization                                 b3bd01f docs: record request model PR status
  origin/delivery/interv360-request-model-productization                               6dded20 docs: record request model productization PR status
  origin/delivery/interv360-role-simulation                                            1547ff5 docs: record role simulation PR status
  origin/delivery/interv360-workflow-light-extension                                   5cd2b4e docs: record workflow light extension PR status
  origin/delivery/interv360-workflow-requalification                                   a830842 docs: record workflow requalification PR status
  origin/delivery/sfia-studio-control-tower-fast-track                                 c895a96 docs(sfia-studio): formalize F-A6 as mitigated after M1
  origin/delivery/sfia-studio-d1-shared-platform-integration                           c2d39a7 fix(sfia-studio): raise D1 intake provider timeout to 60s
  origin/delivery/sfia-studio-ops1-i3-action-gate                                      3607a3a feat(sfia-studio): deliver OPS1 I3 action gate
  origin/delivery/sfia-studio-poc-increment-a                                          89cb756 feat(sfia-studio): implement vertical slice increment A cockpit
  origin/delivery/sfia-studio-poc-increment-b                                          8316f26 feat(sfia-studio): connect cockpit to fixture harness
  origin/delivery/sfia-studio-poc-increment-c                                          96bb808 feat(sfia-studio): add bounded live GPT qualification
  origin/delivery/sfia-studio-poc-increment-d                                          41b9c46 feat(sfia-studio): add controlled Cursor sandbox execution
  origin/delivery/sfia-studio-shared-technical-platform                                08c282a docs(sfia-studio): record shared platform PR #255 metadata
  origin/delivery/sfia-studio-t-a7-consolidated-blocker-reduction                      c24da11 docs(sfia-studio): document consolidated T-A7 blocker reduction lot
  origin/delivery/sfia-studio-t-a7-f11-f13-internal-completion                         5afe095 fix(sfia-studio): correct bounded history provider typing
  origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation                     9c12505 docs(sfia-studio): document HARD T-A6 atomicity and persistence foundation lot
  origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance                   dc7a24c docs(sfia-studio): record whitespace findings CI success outcome
  origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation 9f03916 docs(sfia-studio): remove trailing whitespace from path-aware preparation
  origin/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation              9e0a9c8 docs(sfia-studio): prepare T-A0 Doctrine Foundation PR
  origin/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation           5733d25 docs(sfia-studio): prepare T-A1 Project and LPS PR
  origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc   75aee25 docs(sfia-studio): align T-A2 PR readiness HEAD and checklist
  origin/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority  f8d25c2 docs(sfia-studio): align T-A3 PR readiness HEAD and checklist
  origin/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance    245f515 docs(sfia-studio): prepare T-A4 ExecutionContract PR readiness
  origin/delivery/sfia-studio-visible-slice-v1-project-core-composition                ca93e08 fix(sfia-studio): share injected clock across V1 composition
  origin/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge           7ef160c docs(sfia-studio): document V2-A1 runtime bridge
  origin/delivery/sfia-v2.6-lot-e1-link-fixes                                          7885903 docs: align e1 report correction HEAD sha
  origin/delivery/sfia-v2.6-lot-h                                                      694fedc docs: execute SFIA v2.6 Lot H
  origin/design/sfia-studio-ops1-scenario                                              d248b9d docs: validate OPS1 operational scenario
  origin/design/sfia-studio-poc-vertical-slice                                         58fb275 docs(sfia-studio): align remaining VS-CAND status
  origin/docs/chantiers360-close-r-qa-04                                               662f1c3 docs: close Chantiers360 R-QA-04 reserve
  origin/docs/chantiers360-v0-vs-sfia-v2-comparison                                    158bdf0 docs: add V0 vs SFIA v2 methodological comparison
  origin/docs/chantiers360-v0-vs-v2-post-merge                                         2e68166 docs: align V0 vs SFIA v2 comparison post-merge status
  origin/docs/chantiers360-v2-design-coverage-post-merge                               bbd54bf docs: align Chantiers360 v2 design coverage post-merge status
  origin/docs/chantiers360-v2-final-pilot-rex                                          438b3bb docs: add Chantiers360 v2 final pilot REX
  origin/docs/chantiers360-v2-inc-01-closure                                           09204fc docs: close Chantiers360 v2 INC-01 with reserves
  origin/docs/chantiers360-v2-inc-01-qa-g4                                             94f71f2 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-01
  origin/docs/chantiers360-v2-inc-02-closure                                           e461c6f merge: resolve conflicts with main for INC-02 closure docs
  origin/docs/chantiers360-v2-inc-02-qa-g4                                             ec073f6 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-02
  origin/docs/chantiers360-v2-inc-03-closure                                           1d795fc docs: close Chantiers360 v2 INC-03 with reserves
  origin/docs/chantiers360-v2-inc-03-qa-g4                                             f136c33 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-03
  origin/docs/chantiers360-v2-inc-04-closure                                           eb174d0 docs: close Chantiers360 v2 INC-04 with reserves
  origin/docs/chantiers360-v2-inc-04-qa-g4                                             96bd25e docs: add QA-G4 post-merge report for Chantiers360 v2 INC-04
  origin/docs/chantiers360-v2-inc-05-closure                                           9987df6 docs: close Chantiers360 v2 INC-05 with reserves
  origin/docs/chantiers360-v2-inc-05-qa-g4                                             d30ca72 docs: add QA-G4 post-merge report for Chantiers360 v2 INC-05
  origin/docs/chantiers360-v2-post-capitalization-alignment                            314794a docs: align Chantiers360 v2 post-capitalization status
  origin/docs/chantiers360-v2-post-spike-alignment                                     fe93090 docs: align Chantiers360 v2 post-spike status
  origin/docs/chantiers360-v2-readme-post-closure                                      d672317 docs: align Chantiers360 v2 README after INC-02 closure
  origin/docs/chantiers360-v2-technical-architecture-post-merge                        9e7bcb3 docs: align Chantiers360 v2 technical architecture post-merge status
  origin/docs/close-lot-d1-status                                                      8815f0f docs: close sfia v2.6 lot d1 status
  origin/docs/close-lot-d2-status                                                      c0fc4b2 docs: close sfia v2.6 lot d2 status
  origin/docs/close-lot-d3-status                                                      6cdda92 docs: close sfia v2.6 lot d3 status
  origin/docs/fix-lot-d-plan-status                                                    af5d9a2 docs: refresh lot d migration plan status
  origin/docs/sfia-studio-doc32-post-p3-m1-correction                                  dd2a68c docs(sfia-studio): align document 32 after P3 and M1
  origin/docs/sfia-studio-fa6-mitigated-from-main                                      67f140a docs(sfia-studio): formalize F-A6 as mitigated after M1
  origin/docs/sfia-studio-m1-capitalization-rex                                        fa0eebe docs(sfia-studio): capitalize M1 implementation and proofs
  origin/docs/sfia-studio-option-a-ci-governance-post-merge                            a42a85c docs(sfia-studio): review CI governance post-merge integration
  origin/docs/sfia-studio-pr226-post-merge-sync                                        ed33044 docs(sfia-studio): sync status after PR 226 merge
  origin/docs/sfia-studio-recover-unmerged-project-docs                                1a2fa31 docs(sfia-studio): record draft PR #256 on consolidation report
  origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status                    960c90b docs(sfia-studio): align T-A7 F03 F11 F13 README post-merge status
  origin/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization                       c520b81 docs(sfia-studio): capitalize T-A7 F11 F13 post-merge validation
  origin/docs/sfia-v2.6-lot-e-closure                                                  0ae4bb3 docs: close sfia v2.6 lot e status
  origin/docs/sfia-v231-final-status                                                   2bddced docs: finalize SFIA v2.3.1 versioning status
  origin/docs/sfia-v2x-versioning-post-merge                                           c0a4a74 docs: align SFIA v2.x versioning post-merge status
  origin/documentation/sfia-discovery-act-02-editorial                                 153c50b docs(discovery): add Act II editorial and reorder roadmap
  origin/documentation/sfia-discovery-act-03-novabuild-editorial                       6fcc76a docs(discovery): fix Act III PR metadata
  origin/documentation/sfia-discovery-acts-04-05-editorial                             7e65429 docs(discovery): add Acts IV-V editorial content
  origin/documentation/sfia-discovery-acts-06-07-editorial                             a25cb1c docs(discovery): add Acts VI-VII editorial content
  origin/documentation/sfia-discovery-legacy-migration-plan                            4021502 docs(discovery): add legacy migration plan
  origin/documentation/sfia-discovery-pd-08-qa                                         f934a3c docs(discovery): complete PD-08 QA and editorial resync
  origin/documentation/sfia-discovery-pd-09-capitalization                             28966a8 docs(discovery): record PD-09 capitalization decision
  origin/evol/chantiers360-post-mvp-framing                                            8b40a0b docs: add Chantiers360 post-MVP roadmap framing
  origin/fix/chantiers360-v2-rqa02-status-alignment                                    1ef4d67 docs: align Chantiers360 v2 status wording for R-QA-02
  origin/fix/remove-controlled-delivery-broken-link                                    b8eb945 docs: remove obsolete controlled delivery terrain link
  origin/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity  bd3608c docs(sfia-studio): record Morris A5.2 decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution         65e5b60 docs(sfia-studio): clarify T-A5 PR readiness HEAD tip reference
  origin/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity   0b696ed docs(sfia-studio): freeze T-A6 PR publication tip metadata
  origin/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions             b7a5e82 docs(sfia-studio): record Morris T-A7 framing decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration           6849b6f docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step                33ea3e8 docs(sfia-studio): record Morris T-A7 next-step decisions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness               b6a1933 fix(sfia-studio): harden T-A7 bounded readiness foundations
  origin/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope               4fad47f docs(sfia-studio): remove trailing whitespace from wave 1 pack
  origin/main                                                                          e1befcb Merge pull request #297 from mcleland147/capitalization/sfia-studio-v3-1-d1-rex
  origin/method/chantiers360-v2-inc-01-capitalization                                  5b5758f docs: capitalize Chantiers360 v2 INC-01 delivery lifecycle
  origin/method/chantiers360-v2-mvp-capitalization                                     adcda83 docs: adjust Chantiers360 v2 MVP capitalization references
  origin/method/delivery-acceleration-level-3-rex                                      008dbff docs: capture delivery acceleration level 3 REX
  origin/method/interv360-final-capitalization                                         8763417 docs: add Interv360 final SFIA capitalization
  origin/method/interv360-mvp-delivery-capitalization                                  2ef34cb docs: add SFIA Fast Track MVP delivery template
  origin/method/sfia-3-exploration-closure                                             f2a822e docs: close SFIA 3.0 exploration and return to v2.4 baseline
  origin/method/sfia-consolidation-roadmap                                             10cb8c0 docs: plan SFIA consolidation roadmap
  origin/method/sfia-cycle-knowledge-contracts                                         cae8415 docs(sfia): fix candidate CKC routing references
  origin/method/sfia-studio-v3-doctrine-consolidation                                  daf6f7d docs(sfia-studio): validate v3 doctrine as Studio-exclusive
  origin/method/sfia-v2-automation-levels                                              80aac9c docs: add SFIA v2 project lifecycle automation trajectory
  origin/method/sfia-v2-automation-vision                                              1398a46 docs: define SFIA v2 automation and delivery vision
  origin/method/sfia-v2-delivery-qa-test-standard                                      2645df2 docs: disambiguate delivery QA prompt IDs
  origin/method/sfia-v2-design-coverage-rules                                          bc697d8 docs: add SFIA v2 design coverage standard
  origin/method/sfia-v2-figma-design-cycle                                             1bb55f0 docs: add SFIA v2 Figma design cycle standard
  origin/method/sfia-v2-figma-fidelity-gate-standard                                   672d72b docs: add SFIA v2 Figma fidelity gate standard
  origin/method/sfia-v2-pilot-selection-decision                                       7282317 docs: define SFIA v2 pilot selection decision framework
  origin/method/sfia-v2-pilot-selection-scoring                                        22d8dcf docs: refine SFIA v2 pilot scoring strategy
  origin/method/sfia-v2-project-bootstrap-standard                                     cbba66b docs: define SFIA v2 project bootstrap standard
  origin/method/sfia-v2-prompt-routing-alignment                                       1bc9f3a docs: align SFIA v2 delivery QA prompts and routing
  origin/method/sfia-v2-technical-architecture-decision-standard                       d8f4377 docs: add SFIA v2 technical architecture decision documentation standard
  origin/method/sfia-v2.4-consolidation-operating-efficiency                           d96dfce docs: add SFIA v2.4 consolidation operating efficiency standard
  origin/method/sfia-v2.4-reference-documentation-alignment                            e79a440 docs: align SFIA prompt handoff and knowledge with v2.4
  origin/method/sfia-v2.4.1-documentation-status-promotion                             ecaf416 docs: open SFIA 3.0 documentation trajectory
  origin/method/sfia-v2.5-cycle-1-mvp                                                  4e3947f docs: operationalize SFIA v2.5 proportional method MVP
  origin/method/sfia-v2.5-project-plan                                                 7751855 docs: open SFIA v2.5 candidate project plan
  origin/method/sfia-v2.5-review-pack-reset                                            a5497ef docs: enforce mono-cycle SFIA review pack reset
  origin/method/sfia-v2.6-repository-standard-decisions                                56ce850 docs: finalize Morris repository standard decisions
  origin/method/sfia-v2x-method-versioning-standard                                    a76c3f8 docs: add SFIA v2.x method versioning standard
  origin/migration/sfia-v2.6-lot-a-core                                                d630c6c docs: record lot a branch sync with main after pr 170
  origin/migration/sfia-v2.6-lot-d1-naming                                             930d5a2 docs: record sfia v2.6 lot d1 execution
  origin/migration/sfia-v2.6-lot-d2-naming                                             f56c768 docs: record sfia v2.6 lot d2 execution
  origin/migration/sfia-v2.6-lot-d3-naming                                             093c91a docs: record sfia v2.6 lot d3 execution
  origin/notion/pause-notion-publication-track                                         c79992b docs: pause SFIA Notion publication track
  origin/notion/provisioning-engine-design                                             38b91eb feat: add Notion provisioning engine dry-run
  origin/notion/sfia-live-export-audit                                                 a7b22ec docs: audit SFIA Notion legacy export
  origin/pr/sfia-studio-v3-native-option-a-foundation                                  9c0f6f9 docs(sfia-studio): prepare Option A foundation PR
  origin/product/interv360-mvp-final-roadmap                                           14cadbe docs: record MVP final roadmap PR status
  origin/project/campus360-opportunity-framing                                         4275a60 docs(campus360): close pre-framing and validate G2 G3
  origin/project/chantiers360-v2-bootstrap                                             774beed docs: refine Chantiers360 v2 MVP scope
  origin/project/sfia-studio-functional-architecture                                   4f4e7cf docs: sync SFIA Studio PR 213 post-merge integration
  origin/project/sfia-studio-functional-design                                         cf64fdd docs(sfia-studio): synchronize functional design post-merge status
  origin/project/sfia-studio-poc-orchestration-framing                                 3b162ec docs(sfia-studio): validate POC orchestration framing
  origin/project/sfia-studio-pre-framing                                               18c6427 docs(sfia-studio): finalize post-merge documentation
  origin/project/sfia-studio-ux-ui-reconciliation                                      7bdabdc docs: consolidate SFIA Studio UX Option B
  origin/prompts/create-templates-context-pack                                         b6d9a88 docs: add SFIA prompt templates context pack
  origin/qa/sfia-studio-m1-bypass-probe                                                f0f0e0f qa(sfia-studio): add controlled M1 bypass probe
  origin/qa/sfia-studio-m1-bypass-probe-revert                                         b502c00 revert(sfia-studio): remove controlled M1 bypass probe
  origin/qualification/sfia-v2.6-lot-d-naming                                          3a6d1e7 docs: record sfia v2.6 lot d naming qualification
  origin/qualification/sfia-v2.6-lot-e-global-controls                                 b87413b docs: correct lot e qualification metrics and sublots
  origin/qualification/sfia-v2.6-lot-f-superseded                                      2f89afd docs: qualify sfia v2.6 lot f superseded files
  origin/qualification/sfia-v2.6-lot-f2-f005                                           7d87331 docs: close SFIA v2.6 Lot F with F2 Option B
  origin/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions                   f89ba5f docs(sfia-studio): record T-A7 wave 1 Morris decisions
  origin/release/interv360-mvp-release-readiness                                       dfc6430 docs: prepare Interv360 MVP release readiness PR
  origin/sfia/review-handoff                                                           3e61efc docs(review-handoff): publish SFIA Studio V3.1-D1 capitalization merge report
  origin/spike/sfia-studio-openai-gpt-adapter                                          056c97f fix(sfia-studio): address final PR readiness findings
  origin/tooling/penpot-mcp-self-host-feedback                                         16fe9c3 docs: document Penpot MCP self-host feedback
  origin/tooling/review-handoff-canonical-publisher                                    14d58fe feat(tooling): add canonical review handoff publisher
  origin/validation/sfia-v2.6-lot-e2-validation                                        477fe55 docs: align lot e2 report head
  origin/validation/sfia-v2.6-lot-f1a-f1b                                              15185f3 docs: validate SFIA v2.6 Lot F1a and F1b
=== LOCAL MERGED origin/main ===
  architecture/interv360-backend-api-contract-framing
  architecture/interv360-backend-data-model-decision
  architecture/interv360-backend-persistence-decision
  architecture/interv360-backend-target-framing
  architecture/interv360-backend-technical-stack-decision
  architecture/interv360-product-industrialization-framing
  architecture/interv360-product-roadmap-after-role-simulation
  architecture/interv360-product-roadmap-next
  architecture/interv360-role-simulation-review
  architecture/sfia-studio-v3-native-option-a-technical
  archive/sfia-v2.6-lot-0-completion
  archive/sfia-v2.6-lot-0-inventories
  archive/sfia-v2.6-lot-c-v3-mcp
+ audit/sfia-studio-v3-native-dependencies
  audit/sfia-v2.6-lot-0-qualification
  audit/sfia-v2.6-repository-cartography
  cadrage/sfia-v2.6-lot-h
+ cadrage/task-tracker-light
  capitalization/sfia-documentation-completeness
* capitalization/sfia-studio-v3-1-d1-rex
  capitalization/sfia-v2.6-repository-rationalization
  cleanup/sfia-v2.6-lot-j
  conception/sfia-notion-product-space
  delivery/chantiers360-r-qa-04-dashboard-real-data
  delivery/interv360-api-demo-hardening
  delivery/interv360-api-product-hardening
  delivery/interv360-api-product-validation
  delivery/interv360-audit-trail
  delivery/interv360-auth-user-switcher
  delivery/interv360-backend-minimal-prototype
  delivery/interv360-backend-persistence
  delivery/interv360-backend-users-session
  delivery/interv360-batch-01-demo-credibility
  delivery/interv360-batch-02-demo-control-scenario
  delivery/interv360-batch-03-demo-readiness-package
  delivery/interv360-batch-04-demo-presentation-package
  delivery/interv360-connected-ux-productization
  delivery/interv360-demo-feedback-review
  delivery/interv360-demo-mvp-closure
  delivery/interv360-demo-polish
  delivery/interv360-demo-presentation-feedback
  delivery/interv360-demo-presentation-review
  delivery/interv360-end-to-end-demo-hardening
  delivery/interv360-frontend-api-connection
  delivery/interv360-frontend-api-connection-framing
  delivery/interv360-implementation-go-no-go
  delivery/interv360-inc-01-action-transition-decision
  delivery/interv360-inc-01-app-foundation
  delivery/interv360-inc-01-controlled-workflow-skeleton
  delivery/interv360-inc-01-controlled-workflow-validation
  delivery/interv360-inc-01-demo-reset
  delivery/interv360-inc-01-demo-script
  delivery/interv360-inc-01-final-demo-package
  delivery/interv360-inc-01-global-summary
  delivery/interv360-inc-01-implementation-preparation
  delivery/interv360-inc-01-intervention-readonly-skeleton
  delivery/interv360-inc-01-list-skeleton
  delivery/interv360-inc-01-local-persistence-decision
  delivery/interv360-inc-01-phase-2-delivery-decision
  delivery/interv360-inc-01-phase-2-rex
  delivery/interv360-inc-01-planning-readonly-skeleton
  delivery/interv360-inc-01-pr-preparation
  delivery/interv360-inc-01-push-and-pr
  delivery/interv360-inc-01-qualification-readonly-skeleton
  delivery/interv360-inc-01-readonly-demo-summary
  delivery/interv360-inc-01-report-readonly-skeleton
  delivery/interv360-inc-01-request-detail-skeleton
  delivery/interv360-inc-02-pr-preparation
  delivery/interv360-inc-02-ux-demo-improvement
  delivery/interv360-inc-03-multi-requests-local-demo
  delivery/interv360-inc-03-pr-preparation
  delivery/interv360-inc-04-list-filtering-local-summary
  delivery/interv360-product-demo-consolidation
  delivery/interv360-product-industrialization
  delivery/interv360-product-ux-finalization
  delivery/interv360-request-model-finalization
  delivery/interv360-request-model-productization
  delivery/interv360-role-simulation
  delivery/interv360-technical-arbitration
  delivery/interv360-workflow-light-extension
  delivery/interv360-workflow-requalification
  delivery/sfia-studio-t-a7-consolidated-blocker-reduction
  delivery/sfia-studio-t-a7-f11-f13-internal-completion
  delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
  delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
  delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
  delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
  delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
  delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
  delivery/sfia-studio-visible-slice-v1-project-core-composition
  delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
  delivery/sfia-studio-visible-slice-v2-a2-create-project-ui
  delivery/sfia-v2.6-lot-e1-link-fixes
  delivery/sfia-v2.6-lot-h
+ design/sfia-studio-v3-native-option-a-functional
+ design/sfia-studio-v3-native-option-a-functional-architecture
+ design/sfia-studio-v3-native-option-a-ux-ui
  docs/chantiers360-close-r-qa-04
  docs/close-lot-d1-status
  docs/close-lot-d2-status
  docs/close-lot-d3-status
  docs/fix-lot-d-plan-status
+ docs/sfia-studio-option-a-ci-governance-post-merge
+ docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
  docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing
  docs/sfia-v2.6-lot-e-closure
  documentation/sfia-discovery-act-02-editorial
  documentation/sfia-discovery-act-03-novabuild-editorial
  documentation/sfia-discovery-acts-04-05-editorial
  documentation/sfia-discovery-acts-06-07-editorial
  documentation/sfia-discovery-legacy-migration-plan
  documentation/sfia-discovery-pd-08-qa
  documentation/sfia-discovery-pd-09-capitalization
  evol/chantiers360-post-mvp-framing
  fix/remove-controlled-delivery-broken-link
  framing/sfia-studio-control-tower
  framing/sfia-studio-first-user-visible-vertical-slice
+ framing/sfia-studio-next-product-increment
+ framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
  framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
+ framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
+ framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
+ framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
+ framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
+ framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
+ framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
  framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage
  main
+ method/codex-operating-model-pilot
  method/controlled-delivery-index-integration
  method/controlled-delivery-publication-package
  method/controlled-delivery-publication-prep
  method/controlled-delivery-standard
  method/controlled-delivery-standard-hardening
  method/delivery-acceleration-level-3-rex
  method/interv360-mvp-delivery-capitalization
  method/sfia-3-exploration-closure
  method/sfia-v2.5-cycle-1-mvp
  method/sfia-v2.5-project-plan
  method/sfia-v2.5-review-pack-reset
  method/sfia-v2.6-repository-standard-decisions
  migration/sfia-v2.6-lot-a-core
  migration/sfia-v2.6-lot-d1-naming
  migration/sfia-v2.6-lot-d2-naming
  migration/sfia-v2.6-lot-d3-naming
+ modeled/sfia-studio-v3-native-option-a
  notion/provisioning-engine-design
  notion/sfia-live-export-audit
+ ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
+ ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
+ ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
+ ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
+ ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
+ ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
+ ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
+ ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
+ ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
+ ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
+ ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
+ ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
+ ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
+ ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
+ ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
+ ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
+ ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
+ ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
+ ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
+ ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
+ ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
+ ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
+ ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
+ ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
+ ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
+ ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
+ ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
+ ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
+ ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
+ ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
+ ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
+ ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
+ ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
+ ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
+ ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
+ ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
+ ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
+ ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
  pr/sfia-studio-v3-native-option-a-foundation
  product/interv360-mvp-final-roadmap
  project/campus360-detailed-framing
  project/campus360-opportunity-framing
  project/sfia-studio-functional-architecture
  project/sfia-studio-functional-design
  project/sfia-studio-pre-framing
+ project/sfia-studio-ux-ui-reconciliation
  qualification/sfia-v2.6-lot-d-naming
  qualification/sfia-v2.6-lot-e-global-controls
  qualification/sfia-v2.6-lot-f-superseded
  qualification/sfia-v2.6-lot-f2-f005
+ record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
  release/interv360-mvp-release-readiness
  validation/sfia-v2.6-lot-e2-validation
  validation/sfia-v2.6-lot-f1a-f1b
=== LOCAL NO-MERGED origin/main ===
  architecture/interv360-product-roadmap-after-persistence
  backlog/sfia-studio-ops1
  backlog/sfia-studio-poc-vertical-slice
  capitalization/sfia-studio-p0-status-sync
  capitalization/sfia-studio-poc-framing-post-merge
  consolidation/interv360-application-rex
  consolidation/interv360-current-app-audit
  consolidation/sfia-documentation-review
  consolidation/sfia-global-capitalization
  cycle/chantiers360-v2-design-figma
  cycle/chantiers360-v2-detailed-framing
  cycle/chantiers360-v2-figma-fidelity-spike
  cycle/chantiers360-v2-functional-architecture
  cycle/chantiers360-v2-light-architecture
  cycle/chantiers360-v2-mvp-backlog
  cycle/chantiers360-v2-ux-ui
  decision/chantiers360-v2-architecture-arbitrages
  delivery/chantiers360-v2-inc-01
  delivery/chantiers360-v2-inc-02
  delivery/chantiers360-v2-inc-03
  delivery/chantiers360-v2-inc-04
  delivery/chantiers360-v2-inc-05
+ delivery/sfia-studio-control-tower-fast-track
+ delivery/sfia-studio-d1-shared-platform-integration
  delivery/sfia-studio-ops1-i1-session-journal
  delivery/sfia-studio-ops1-i3-action-gate
  delivery/sfia-studio-poc-increment-a
  delivery/sfia-studio-poc-increment-b
  delivery/sfia-studio-poc-increment-c
  delivery/sfia-studio-poc-increment-d
+ delivery/sfia-studio-shared-technical-platform
+ delivery/sfia-studio-v3-native-option-a-ci-merge-governance
+ delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
  design/sfia-studio-ops1-scenario
  design/sfia-studio-ops1-technical-architecture
  design/sfia-studio-poc-vertical-slice
  devops/sfia-studio-ops1-foundation
  docs/chantiers360-v0-vs-sfia-v2-comparison
  docs/chantiers360-v0-vs-v2-post-merge
  docs/chantiers360-v2-design-coverage-post-merge
  docs/chantiers360-v2-final-pilot-rex
  docs/chantiers360-v2-inc-01-closure
  docs/chantiers360-v2-inc-01-qa-g4
  docs/chantiers360-v2-inc-02-closure
  docs/chantiers360-v2-inc-02-qa-g4
  docs/chantiers360-v2-inc-03-closure
  docs/chantiers360-v2-inc-03-qa-g4
  docs/chantiers360-v2-inc-04-closure
  docs/chantiers360-v2-inc-04-qa-g4
  docs/chantiers360-v2-inc-05-closure
  docs/chantiers360-v2-inc-05-qa-g4
  docs/chantiers360-v2-post-capitalization-alignment
  docs/chantiers360-v2-post-spike-alignment
  docs/chantiers360-v2-readme-post-closure
  docs/chantiers360-v2-technical-architecture-post-merge
+ docs/sfia-studio-doc32-post-p3-m1-correction
+ docs/sfia-studio-fa6-mitigated-from-main
+ docs/sfia-studio-m1-capitalization-rex
  docs/sfia-studio-pr226-post-merge-sync
+ docs/sfia-studio-recover-unmerged-project-docs
  docs/sfia-v231-final-status
  docs/sfia-v2x-versioning-post-merge
  fix/chantiers360-v2-rqa02-status-alignment
+ framing/sfia-studio-v3-native-option-a-after-t-a6
  framing/sfia-studio-visible-slice-v2-runtime-ui-contract
  method/chantiers360-v2-inc-01-capitalization
  method/chantiers360-v2-mvp-capitalization
  method/interv360-final-capitalization
  method/sfia-consolidation-roadmap
+ method/sfia-cycle-knowledge-contracts
+ method/sfia-studio-v3-doctrine-consolidation
  method/sfia-v2-automation-levels
  method/sfia-v2-automation-vision
  method/sfia-v2-delivery-qa-test-standard
  method/sfia-v2-design-coverage-rules
  method/sfia-v2-figma-design-cycle
  method/sfia-v2-figma-fidelity-gate-standard
  method/sfia-v2-pilot-selection-decision
  method/sfia-v2-pilot-selection-scoring
  method/sfia-v2-project-bootstrap-standard
  method/sfia-v2-prompt-routing-alignment
  method/sfia-v2-technical-architecture-decision-standard
  method/sfia-v2.4-consolidation-operating-efficiency
  method/sfia-v2.4-reference-documentation-alignment
  method/sfia-v2.4.1-documentation-status-promotion
  method/sfia-v2x-method-versioning-standard
  notion/pause-notion-publication-track
+ post-merge/sfia-studio-v3-native-option-a-t-a6
  project/chantiers360-v2-bootstrap
  project/sfia-studio-poc-orchestration-framing
  prompts/create-templates-context-pack
+ qa/sfia-studio-m1-bypass-probe
+ qa/sfia-studio-m1-bypass-probe-revert
  recovery/campus360-detailed-framing
  recovery/sfia-studio-functional-architecture-sync
+ sfia/review-handoff
  spike/sfia-studio-openai-gpt-adapter
+ tooling/review-handoff-canonical-publisher
+ ux/sfia-studio-d1-conversational-convergence
=== REMOTE MERGED origin/main ===
  origin/HEAD -> origin/main
  origin/architecture/interv360-backend-persistence-decision
  origin/architecture/interv360-product-industrialization-framing
  origin/architecture/interv360-product-roadmap-after-role-simulation
  origin/architecture/interv360-product-roadmap-next
  origin/architecture/interv360-role-simulation-review
  origin/archive/sfia-v2.6-lot-0-completion
  origin/archive/sfia-v2.6-lot-0-inventories
  origin/archive/sfia-v2.6-lot-c-v3-mcp
  origin/audit/sfia-v2.6-lot-0-qualification
  origin/audit/sfia-v2.6-repository-cartography
  origin/cadrage/sfia-v2.6-lot-h
  origin/cadrage/task-tracker-light
  origin/capitalization/sfia-studio-v3-1-d1-rex
  origin/capitalization/sfia-v2.6-repository-rationalization
  origin/cleanup/sfia-v2.6-lot-j
  origin/conception/sfia-notion-product-space
  origin/delivery/chantiers360-r-qa-04-dashboard-real-data
  origin/delivery/interv360-api-demo-hardening
  origin/delivery/interv360-api-product-hardening
  origin/delivery/interv360-api-product-validation
  origin/delivery/interv360-audit-trail
  origin/delivery/interv360-auth-user-switcher
  origin/delivery/interv360-backend-minimal-prototype
  origin/delivery/interv360-backend-persistence
  origin/delivery/interv360-backend-users-session
  origin/delivery/interv360-batch-01-demo-credibility
  origin/delivery/interv360-batch-02-demo-control-scenario
  origin/delivery/interv360-batch-03-demo-readiness-package
  origin/delivery/interv360-batch-04-demo-presentation-package
  origin/delivery/interv360-connected-ux-productization
  origin/delivery/interv360-demo-feedback-review
  origin/delivery/interv360-demo-mvp-closure
  origin/delivery/interv360-demo-polish
  origin/delivery/interv360-demo-presentation-feedback
  origin/delivery/interv360-demo-presentation-review
  origin/delivery/interv360-end-to-end-demo-hardening
  origin/delivery/interv360-frontend-api-connection
  origin/delivery/interv360-inc-01-push-and-pr
  origin/delivery/interv360-inc-02-pr-preparation
  origin/delivery/interv360-inc-03-pr-preparation
  origin/delivery/interv360-inc-04-list-filtering-local-summary
  origin/delivery/interv360-product-demo-consolidation
  origin/delivery/interv360-product-industrialization
  origin/delivery/interv360-product-ux-finalization
  origin/delivery/interv360-request-model-finalization
  origin/delivery/interv360-request-model-productization
  origin/delivery/interv360-role-simulation
  origin/delivery/interv360-workflow-light-extension
  origin/delivery/interv360-workflow-requalification
  origin/delivery/sfia-studio-t-a7-consolidated-blocker-reduction
  origin/delivery/sfia-studio-t-a7-f11-f13-internal-completion
  origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation
  origin/delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
  origin/delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
  origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
  origin/delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority
  origin/delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance
  origin/delivery/sfia-studio-visible-slice-v1-project-core-composition
  origin/delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge
  origin/delivery/sfia-v2.6-lot-e1-link-fixes
  origin/delivery/sfia-v2.6-lot-h
  origin/docs/chantiers360-close-r-qa-04
  origin/docs/close-lot-d1-status
  origin/docs/close-lot-d2-status
  origin/docs/close-lot-d3-status
  origin/docs/fix-lot-d-plan-status
  origin/docs/sfia-studio-option-a-ci-governance-post-merge
  origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
  origin/docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization
  origin/docs/sfia-v2.6-lot-e-closure
  origin/documentation/sfia-discovery-act-02-editorial
  origin/documentation/sfia-discovery-act-03-novabuild-editorial
  origin/documentation/sfia-discovery-acts-04-05-editorial
  origin/documentation/sfia-discovery-acts-06-07-editorial
  origin/documentation/sfia-discovery-legacy-migration-plan
  origin/documentation/sfia-discovery-pd-08-qa
  origin/documentation/sfia-discovery-pd-09-capitalization
  origin/evol/chantiers360-post-mvp-framing
  origin/fix/remove-controlled-delivery-broken-link
  origin/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity
  origin/framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution
  origin/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
  origin/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
  origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
  origin/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step
  origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
  origin/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope
  origin/main
  origin/method/delivery-acceleration-level-3-rex
  origin/method/interv360-mvp-delivery-capitalization
  origin/method/sfia-3-exploration-closure
  origin/method/sfia-v2.5-cycle-1-mvp
  origin/method/sfia-v2.5-project-plan
  origin/method/sfia-v2.5-review-pack-reset
  origin/method/sfia-v2.6-repository-standard-decisions
  origin/migration/sfia-v2.6-lot-a-core
  origin/migration/sfia-v2.6-lot-d1-naming
  origin/migration/sfia-v2.6-lot-d2-naming
  origin/migration/sfia-v2.6-lot-d3-naming
  origin/notion/provisioning-engine-design
  origin/notion/sfia-live-export-audit
  origin/pr/sfia-studio-v3-native-option-a-foundation
  origin/product/interv360-mvp-final-roadmap
  origin/project/campus360-opportunity-framing
  origin/project/sfia-studio-functional-architecture
  origin/project/sfia-studio-functional-design
  origin/project/sfia-studio-pre-framing
  origin/project/sfia-studio-ux-ui-reconciliation
  origin/qualification/sfia-v2.6-lot-d-naming
  origin/qualification/sfia-v2.6-lot-e-global-controls
  origin/qualification/sfia-v2.6-lot-f-superseded
  origin/qualification/sfia-v2.6-lot-f2-f005
  origin/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions
  origin/release/interv360-mvp-release-readiness
  origin/tooling/penpot-mcp-self-host-feedback
  origin/validation/sfia-v2.6-lot-e2-validation
  origin/validation/sfia-v2.6-lot-f1a-f1b
=== REMOTE NO-MERGED origin/main ===
  origin/backlog/sfia-studio-poc-vertical-slice
  origin/capitalization/sfia-studio-p0-status-sync
  origin/capitalization/sfia-studio-poc-framing-post-merge
  origin/consolidation/interv360-application-rex
  origin/consolidation/interv360-current-app-audit
  origin/consolidation/sfia-documentation-review
  origin/consolidation/sfia-global-capitalization
  origin/cycle/chantiers360-v2-design-figma
  origin/cycle/chantiers360-v2-detailed-framing
  origin/cycle/chantiers360-v2-figma-fidelity-spike
  origin/cycle/chantiers360-v2-functional-architecture
  origin/cycle/chantiers360-v2-light-architecture
  origin/cycle/chantiers360-v2-mvp-backlog
  origin/cycle/chantiers360-v2-ux-ui
  origin/decision/chantiers360-v2-architecture-arbitrages
  origin/delivery/chantiers360-v2-inc-01
  origin/delivery/chantiers360-v2-inc-02
  origin/delivery/chantiers360-v2-inc-03
  origin/delivery/chantiers360-v2-inc-04
  origin/delivery/chantiers360-v2-inc-05
  origin/delivery/sfia-studio-control-tower-fast-track
  origin/delivery/sfia-studio-d1-shared-platform-integration
  origin/delivery/sfia-studio-ops1-i3-action-gate
  origin/delivery/sfia-studio-poc-increment-a
  origin/delivery/sfia-studio-poc-increment-b
  origin/delivery/sfia-studio-poc-increment-c
  origin/delivery/sfia-studio-poc-increment-d
  origin/delivery/sfia-studio-shared-technical-platform
  origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
  origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
  origin/design/sfia-studio-ops1-scenario
  origin/design/sfia-studio-poc-vertical-slice
  origin/docs/chantiers360-v0-vs-sfia-v2-comparison
  origin/docs/chantiers360-v0-vs-v2-post-merge
  origin/docs/chantiers360-v2-design-coverage-post-merge
  origin/docs/chantiers360-v2-final-pilot-rex
  origin/docs/chantiers360-v2-inc-01-closure
  origin/docs/chantiers360-v2-inc-01-qa-g4
  origin/docs/chantiers360-v2-inc-02-closure
  origin/docs/chantiers360-v2-inc-02-qa-g4
  origin/docs/chantiers360-v2-inc-03-closure
  origin/docs/chantiers360-v2-inc-03-qa-g4
  origin/docs/chantiers360-v2-inc-04-closure
  origin/docs/chantiers360-v2-inc-04-qa-g4
  origin/docs/chantiers360-v2-inc-05-closure
  origin/docs/chantiers360-v2-inc-05-qa-g4
  origin/docs/chantiers360-v2-post-capitalization-alignment
  origin/docs/chantiers360-v2-post-spike-alignment
  origin/docs/chantiers360-v2-readme-post-closure
  origin/docs/chantiers360-v2-technical-architecture-post-merge
  origin/docs/sfia-studio-doc32-post-p3-m1-correction
  origin/docs/sfia-studio-fa6-mitigated-from-main
  origin/docs/sfia-studio-m1-capitalization-rex
  origin/docs/sfia-studio-pr226-post-merge-sync
  origin/docs/sfia-studio-recover-unmerged-project-docs
  origin/docs/sfia-v231-final-status
  origin/docs/sfia-v2x-versioning-post-merge
  origin/fix/chantiers360-v2-rqa02-status-alignment
  origin/method/chantiers360-v2-inc-01-capitalization
  origin/method/chantiers360-v2-mvp-capitalization
  origin/method/interv360-final-capitalization
  origin/method/sfia-consolidation-roadmap
  origin/method/sfia-cycle-knowledge-contracts
  origin/method/sfia-studio-v3-doctrine-consolidation
  origin/method/sfia-v2-automation-levels
  origin/method/sfia-v2-automation-vision
  origin/method/sfia-v2-delivery-qa-test-standard
  origin/method/sfia-v2-design-coverage-rules
  origin/method/sfia-v2-figma-design-cycle
  origin/method/sfia-v2-figma-fidelity-gate-standard
  origin/method/sfia-v2-pilot-selection-decision
  origin/method/sfia-v2-pilot-selection-scoring
  origin/method/sfia-v2-project-bootstrap-standard
  origin/method/sfia-v2-prompt-routing-alignment
  origin/method/sfia-v2-technical-architecture-decision-standard
  origin/method/sfia-v2.4-consolidation-operating-efficiency
  origin/method/sfia-v2.4-reference-documentation-alignment
  origin/method/sfia-v2.4.1-documentation-status-promotion
  origin/method/sfia-v2x-method-versioning-standard
  origin/notion/pause-notion-publication-track
  origin/project/chantiers360-v2-bootstrap
  origin/project/sfia-studio-poc-orchestration-framing
  origin/prompts/create-templates-context-pack
  origin/qa/sfia-studio-m1-bypass-probe
  origin/qa/sfia-studio-m1-bypass-probe-revert
  origin/sfia/review-handoff
  origin/spike/sfia-studio-openai-gpt-adapter
  origin/tooling/review-handoff-canonical-publisher
ancestor src->main: YES
L/R origin/cap...origin/main=0	1
=== DIFF CAP..MAIN ===
=== LS-REMOTE ===
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex

```

## W. Ancestor / merged checks
- merge-base --is-ancestor d77c775f6114eddd04af330cc943a869a5c4f6a2 origin/main: YES
- L/R origin/cap...origin/main: 0/1
- diff name-status origin/cap..origin/main: vide
- local main ancestor of origin/main: YES (FF-able, behind by 2)

## X. Classification cleanup readiness
# PR #297 Cleanup Readiness Classification

## Statut exact
CLEANUP CONDITIONALLY READY — PRECONDITIONS REQUIRED

## Preuves d’intégration
- PR #297 MERGED ; mergeCommit e1befcb80ed5e3c789a7de9036a8207d6b3e6771
- parents: b553f0aa… + d77c775f…
- origin/main = e1befcb8…
- arbres source et merge identiques (ccd9ad20…) ; diff source..merge vide
- document 05 byte-identical main/source ; SHA-256 6d6e7f7b… ; blob 785256a7… ; 436/24796
- CI post-merge 30612872178 PASS
- source ancêtre de origin/main ; L/R origin/cap...origin/main = 0/1 (merge commit seul côté main)
- aucun commit unique non intégré

## Worktrees concernés
- PRINCIPAL / SOURCE CHECKOUT: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`
  - branche: capitalization/sfia-studio-v3-1-d1-rex @ d77c775f…
  - tracked modifié: 0 ; staged: 0
  - untracked: 255 sous `.tmp-sfia-review/**` uniquement
  - locked: non ; prunable: non
  - impact: ne peut pas être `git worktree remove` (worktree principal) ; cleanup = switch branche + delete branches
- HANDOFF (EXCLU): `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` — sfia/review-handoff — hors cleanup projet
- Autres worktrees: hors périmètre PR #297 (POSTMERGE-F-02)

## Branches concernées
- locale: capitalization/sfia-studio-v3-1-d1-rex @ d77c775f… (présente, merged into origin/main)
- distante: origin/capitalization/sfia-studio-v3-1-d1-rex @ d77c775f… (présente)
- main locale: b553f0aa… — 0 ahead / 2 behind origin/main — ancêtre — FF-only possible
- origin/main: e1befcb8…

## Préconditions (mécaniques, explicites, réversibles)
1. Re-vérifier Git Truth au démarrage du GO cleanup
2. Synchroniser `main` locale en fast-forward uniquement vers e1befcb8… (aucune divergence)
3. Quitter la branche source dans le worktree principal (`git switch main` / checkout) — laisser `.tmp-sfia-review/**` en place
4. Ne pas exécuter `git worktree remove` sur le worktree principal
5. Supprimer la branche locale avec `git branch -d capitalization/sfia-studio-v3-1-d1-rex` uniquement
6. Supprimer la branche distante sans force (`git push origin --delete …`)
7. Vérifier main / branches / worktrees / réserve
8. Publier un nouveau handoff

## Opérations candidates futures
- FF main locale
- switch hors source
- `git branch -d` source locale
- delete remote source
- handoff post-cleanup

## Opérations interdites maintenant
- toute suppression branche
- tout worktree remove / prune effectif
- git clean / force / reset
- modification projet
- method / D2 / D3 / UI / CreateCycle

## Risque de perte
- AUCUN sur le contenu intégré (déjà sur origin/main)
- `.tmp-sfia-review/**` : preuves locales non versionnées ; survivant à un switch de branche ; ne pas `git clean`
- autres worktrees sales : hors scope — ne pas toucher

## Gate Morris requis
GO CLEANUP PR #297 SOURCE BRANCH AND WORKTREE SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
USE VERIFIED POST-MERGE CLEANUP PLAN —
SYNC LOCAL MAIN FAST-FORWARD ONLY —
DO NOT REMOVE PRIMARY WORKTREE —
DELETE LOCAL SOURCE BRANCH WITH git branch -d ONLY —
DELETE REMOTE SOURCE BRANCH WITHOUT FORCE —
PRESERVE SFIA REVIEW HANDOFF WORKTREE AND BRANCH —
VERIFY MAIN BRANCHES WORKTREES AND RESERVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

Note: le plan candidat historique mentionnait « remove source worktree » ; ici le tip source est sur le worktree principal — retirer le worktree est NON APPLICABLE ; adapter le GO cleanup en conséquence.


## Y. Préconditions d’un futur cleanup
Voir section Préconditions du fichier cleanup-readiness (FF main, switch hors source, pas de remove du primaire, branch -d, delete remote, préserver handoff).

## Z. État Git final
```
current=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/cap=d77c775f6114eddd04af330cc943a869a5c4f6a2
=== status non-tmp ===
(none)
=== staged ===
=== ls-remote ===
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
=== worktree count ===
77

```
- aucune branche supprimée ; aucun worktree retiré ; aucun fichier projet modifié

## AA. Confirmations
- PR mergée: OUI
- merge commit / parents / origin/main: OUI
- document identique: OUI
- CI post-merge PASS: OUI
- comments/reviews: 0
- READY-F-02 fermé: OUI
- réserve levée: NON
- fichier projet / commit / push: NON
- main locale modifiée: NON
- branche locale/distante supprimée: NON
- worktree retiré: NON
- git clean / force / cleanup: NON
- méthode / baseline / D2 / D3 / UI / CreateCycle: NON

## AB. Gate suivant candidat
GO CLEANUP PR #297 SOURCE BRANCH AND WORKTREE SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
USE VERIFIED POST-MERGE CLEANUP PLAN —
SYNC LOCAL MAIN FAST-FORWARD ONLY —
DO NOT REMOVE PRIMARY WORKTREE —
DELETE LOCAL SOURCE BRANCH WITH git branch -d ONLY —
DELETE REMOTE SOURCE BRANCH WITHOUT FORCE —
PRESERVE SFIA REVIEW HANDOFF WORKTREE AND BRANCH —
VERIFY MAIN BRANCHES WORKTREES AND RESERVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

## AC. Verdict
V3.1-D1 CAPITALIZATION PR #297 POST-MERGE VALIDATION COMPLETE —
MERGE COMMIT PARENTS ORIGIN MAIN DOCUMENT HASH BODY AND COMMENTS VERIFIED —
POST-MERGE CI PASS —
REMOTE-F-01 READY-F-02 AND POSTMERGE-CI-01 CLOSED —
ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
LOCAL WORKTREES AND BRANCHES INVENTORIED —
CLEANUP READINESS CLASSIFIED —
NO BRANCH DELETE —
NO WORKTREE REMOVE —
NO CLEANUP —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED

Statut: POST-MERGE COMPLETE — CLEANUP CONDITIONALLY READY — DISTINCT MORRIS GO REQUIRED — D2 NOT OPENED

--- END POST-MERGE REPORT ---

## Content coverage
- gate Morris complete: yes
- CKC complete: yes
- handoff source complete: yes
- Git Truth complete: yes
- merged PR Truth complete: yes
- final PR body complete: yes
- merge commit complete: yes
- merge parents complete: yes
- tree comparison complete: yes
- origin/main proof complete: yes
- source commit proof complete: yes
- document 05 content complete: yes
- hash and metrics complete: yes
- pre-merge CI complete: yes
- post-merge CI complete: yes
- comments and reviews complete: yes
- inherited reserve complete: yes
- findings complete: yes
- worktree inventory complete: yes
- every worktree status complete: yes
- branch inventory complete: yes
- cleanup readiness complete: yes
- no branch delete proof complete: yes
- no worktree removal proof complete: yes
- final Git state complete: yes
- temporary report full content: yes
- synthesis only: no
- review pack verdict: complete

## Gate suivant
GO CLEANUP PR #297 SOURCE BRANCH AND WORKTREE SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
USE VERIFIED POST-MERGE CLEANUP PLAN —
SYNC LOCAL MAIN FAST-FORWARD ONLY —
DO NOT REMOVE PRIMARY WORKTREE —
DELETE LOCAL SOURCE BRANCH WITH git branch -d ONLY —
DELETE REMOTE SOURCE BRANCH WITHOUT FORCE —
PRESERVE SFIA REVIEW HANDOFF WORKTREE AND BRANCH —
VERIFY MAIN BRANCHES WORKTREES AND RESERVE —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE

## Verdict
V3.1-D1 CAPITALIZATION PR #297 POST-MERGE VALIDATION COMPLETE —
MERGE COMMIT PARENTS ORIGIN MAIN DOCUMENT HASH BODY AND COMMENTS VERIFIED —
POST-MERGE CI PASS —
REMOTE-F-01 READY-F-02 AND POSTMERGE-CI-01 CLOSED —
ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
LOCAL WORKTREES AND BRANCHES INVENTORIED —
CLEANUP READINESS CLASSIFIED —
NO BRANCH DELETE —
NO WORKTREE REMOVE —
NO CLEANUP —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED

Statut: POST-MERGE COMPLETE — CLEANUP CONDITIONALLY READY — DISTINCT MORRIS GO REQUIRED — D2 NOT OPENED
