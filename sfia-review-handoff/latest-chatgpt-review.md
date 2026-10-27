# SFIA REVIEW PACK — FULL / CRITICAL / MONO-CYCLE

## 1. Horodatage
- Local write: 2026-10-27 ~13:35 Europe/Paris
- Cycle executed: 2026-10-27
- Corrective ID: CORR-CI-623-01

## 2. GO Morris
**GO Morris : 2026-10-27 — CORR-CI-623-01.**

Authorized: targeted CI failure investigation · minimal W3-C cognitive-boundary correction · targeted + CI-compatible tests · single corrective commit · FF push on same branch · Draft PR #623 update · Review Pack FULL · Review Handoff publish-in-cycle.

**NOT authorized:** undraft · merge · auto-merge · new PR/branch · doctrinal change · architecture pivot · Pilote/Nora authority change · Product Completion expansion · REAL/L4 · runtime v3 promotion.

## 3. Git Truth — initial / final
### Initial
- pwd: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity`
- branch: `feat/akg-m5-l3-s2-generic-proof-continuity`
- HEAD: `90bbf479a31a08d70e8d498825bfd49f0ba49314` (= remote feat)
- origin/main: `6e957ecbf50b009b692cf1fcba2748ee1aa9c862`
- staged: empty
- dirty: only `.tmp-sfia-review/chatgpt-review.md`
- PR #623: OPEN / DRAFT / Required Gate FAIL on run `40500124340`

### Final (project)
- HEAD / remote feat: `f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f`
- origin/main unchanged: `6e957ecbf50b009b692cf1fcba2748ee1aa9c862`
- PR #623: OPEN / **isDraft=true** / mergedAt=null / headRefOid=`f7c9ba78…` / 3 commits
- dirty residual: `.tmp-sfia-review/chatgpt-review.md` only

**Git Truth: PASS**

## 4. Source Routing
- Prior handoff tip `4a923966291c9a9503b723547f50f1284daf41d5` / blob `be8b4f572b6ff375d40a0449fec83b8e7b4c3d6b`
- Product commits on PR: `0577ca5c…` (Product+tests) · `90bbf479…` (R24/manifest) · **`f7c9ba78…` (this fix)**
- Primary evidence: GitHub Actions logs run `40500124340` + local reproduction + code inspection

## 5. Convergence Pre-check
- Build Doctrine VALIDATED ON MAIN · Roadmap ACTIVE · T-C ADOPTED · L3-S1 ON MAIN
- L3-S2: Draft PR #623 / NOT ON MAIN
- S8 TECHNICAL RELIABILITY ACCEPTED DET · R24 SEMANTIC REVIEW PASS
- Required CI was FAILED (CI-623-01) → corrected candidate on new HEAD
- MERGE NOT AUTHORIZED · L3 GLOBAL OPEN · EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL
- G-REAL NOT GRANTED · runtime v3 NON ADOPTED

## 6. R23 architecture (proportional)
Chain unchanged: Project → Generic PREPARE → SHE → EC → Attempt → Cursor → VerifiedChangeSet → Verification Evidence → GERM → W3-B → RB/CE → Product Result → **W3-C / Nora Deep Review**.

This cycle touches only the **Nora initial cognitive assembly** inside W3-C (`runW3cPostEvidenceLoop`), not OA aggregates, Evidence admission, or SHE authority.

## 7. Cause du FAIL CI
### Symptom
Workflow `SFIA Studio CI` run **40500124340** @ HEAD `90bbf479…`:
- Typecheck PASS · Lint PASS · Build PASS · Vitest FAIL · Required Gate FAIL
- 1 failed / 556 passed / 22 skipped (files); 1 failed / 6067 passed / 142 skipped (tests)
- Exact test: `__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` · **CP2-10 MAIN**
- Assertion: `expect(promptText).not.toMatch(/\bb\.md\b/)` FAILED

### Observed first-prompt leak
Nora round-0 facts JSON contained:
- `blockersSummary`: `CLAIM_FACT_MISMATCH unclaimed=b.md`
- `cursorReportSummary`: `… blockers=CLAIM_FACT_MISMATCH unclaimed=b.md`

### Root cause (R23)
Option B commit `0577ca5c…` filled `projectW3cExecutionReportSurfaceFromDurable` (was a stub returning empty on main). That correctly projects durable GERM blockers including path-level `CLAIM_FACT_MISMATCH unclaimed=<paths>`.

`runW3cPostEvidenceLoop` then passed that **full** durable surface into `analyzePostEvidenceWithProvider` as Nora's **initial** cognitive facts, short-circuiting the CP2-10 Tool-First contract: path-level Claim≠Fact detail must arrive via `execution_review_get_manifest`, not the first prompt.

Not a semantic Product Result change; a cognitive presentation sequencing regression introduced by restoring the durable surface for Pilot/completeness honesty (CORR-S2-03 / R-S2-04) without separating Nora-initial assembly.

Leak paths identified:
1. `blockersSummary` ← `manifest.blockers` (`finalizeGenericExecutionReview` writes `CLAIM_FACT_MISMATCH unclaimed=…`)
2. `cursorReportSummary` embeds blockersSummary
3. Potential (guarded): `Studio observed:` workPerformed fallback with VCS paths; artifact material if preferred path is unclaimed

Durable GERM / Pilot `executionReport` / rehydrate / tool output correctly retained `b.md` — those must stay.

## 8. Logs GitHub exacts
- Failed run: https://github.com/mcleland147/sfia-workspace/actions/runs/40500124340
- Job: Build and validate SFIA Studio — conclusion FAILURE (completed 2026-10-27T12:05:35Z)
- Required Gate: FAILURE
- Detect: SUCCESS

## 9. Reproduction locale
Before fix @ `90bbf479…`:
```
npx vitest run …genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts -t "CP2-10"
→ FAIL — promptText matches /\bb\.md\b/
```
After fix: same command → **PASS** (1189ms).

## 10. Contrat cognitif applicable (preserved)
- A Claim ≠ Fact · B VerifiedChangeSet = observed effects · C mismatch durable · D tool can obtain mismatch · E first prompt must not short-circuit Tool-First · F no b.md in first prompt ≠ reserve gone from Product · G Technical SUCCESS ≠ Product PASS · H Nora invents no HD/Confirm · I Pilot/rehydrate honesty · J PARTIAL ≠ FULL artificial

Correction does **not** filename-filter `b.md` alone; it redacts the structured `unclaimed=…` class at Nora-initial assembly only.

## 11. Options considérées
1. Weaken CP2-10 assertion — **REJECTED** (GO forbids)
2. Strip mismatch entirely from Nora facts — **REJECTED** (loses CLAIM_FACT_MISMATCH signal)
3. Redact inside durable shared projection — **REJECTED** (would starve Pilot/rehydrate)
4. **Nora-initial assembly boundary in W3-C** — **RETAINED**

## 12. Correction retenue
File: `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts` only.

- Keep `projectW3cExecutionReportSurfaceFromDurable` full for Pilot/`executionReport`.
- Add `redactClaimFactUnclaimedPathsForNoraInitialContext` · `omitUnclaimedPathsFromStudioObservedWorkSummary` · `projectNoraInitialPostEvidenceSurface`.
- Wire Nora facts through `projectNoraInitialPostEvidenceSurface` before `analyzePostEvidenceWithProvider`.
- No change to `postEvidenceNoraAnalysis.ts`, GERM persistence, Evidence/RB/CE, or tests requirements.

## 13. Diff complet du correctif
Commit `f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f` — 1 file · +115 / −7.

```diff
+function redactClaimFactUnclaimedPathsForNoraInitialContext(...)
+function omitUnclaimedPathsFromStudioObservedWorkSummary(...)
+function projectNoraInitialPostEvidenceSurface(...)
…
-  const workPerformedSummary = durableProjection.workPerformedSummary;
-  const blockersSummary = durableProjection.blockersSummary;
-  …
+  const executionReport = durableProjection.executionReport; // FULL for Pilot
+  const noraInitial = projectNoraInitialPostEvidenceSurface({ durable, unclaimedObservedPaths, artifactLogicalPath });
+  // Nora facts from noraInitial only
```

Full patch auditable at: `git show f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f`

## 14. Tests ajoutés/modifiés
- **None weakened.** Existing CP2-10 remains the substantive oracle.
- No new test file required; CP2-10 already asserts tool call + tool output `unclaimedObservedPaths=["b.md"]` + Product honesty + Pilot reader + remount.

## 15. Oracle CP2-10 avant/après
| Step | Before | After |
|---|---|---|
| First prompt contains `b.md` | YES (FAIL) | NO (PASS) |
| Tool `execution_review_get_manifest` called | (not reached / asserted after) | YES |
| Tool output claimFactMismatch / unclaimed=["b.md"] | durable present | YES asserted |
| Product PASS | no | no |
| ContractResult PASS | no | no |
| Pilot read b.md | yes | yes |
| Remount VerifiedChangeSet unclaimed | ["b.md"] | ["b.md"] |

## 16. Tool output b.md
CP2-10 continues to require tool output:
- `verifiedEffects.claimFactMismatch === true`
- `unclaimedObservedPaths === ["b.md"]`
Provenance: Studio ReviewManifest / VerifiedChangeSet (not Cursor CLAIM reinterpreted as FACT).

## 17. Conservation GERM / Evidence
- Durable blockers still store full `CLAIM_FACT_MISMATCH unclaimed=…`
- Verification Evidence / RB bindings / CE snapshots untouched by this commit
- `executionReport` on W3-C success remains full durable projection

## 18. Product Result inchangé
No Product PASS invented. Technical Attempt success preserved. UNCLAIMED / FAIL honesty retained (CP2-10 path).

## 19. Non-régressions (local)
Targeted matrix (9 files): **139/139 PASS** including front-door 12, S8 17, LotsAC 27, L3-S1, Mission, W3-C loop/correction, continuation, PRR conformance 5.

Full CI-equivalent `npm test` (retry after one flaky trajectorySurface isolation pass):
- **Test Files 557 passed | 22 skipped**
- **Tests 6068 passed | 142 skipped**
(Baseline failed CI: 6067 pass + 1 fail → fix restores the missing pass.)

Note: first full local run showed 3 flaky failures in `…trajectorySurface.d0.test.ts` under suite load; same file **6/6 PASS** in isolation and **green on full retry**. Not introduced by the Nora-initial redaction path (UI scheduler mocks). Reported for honesty.

## 20. Typecheck / lint
- `npm run typecheck` → PASS (after removing invalid `verifiedEffects.unclaimedObservedPaths` access)
- `npm run lint` → PASS (2 pre-existing unused-var warnings unchanged)
- PRR checker → CONFORMANCE OK (no manifest change)

## 21. Suite CI complète
Local full `npm test` PASS on retry (see §19). GitHub Actions on new HEAD: see §27.

## 22. R24 impact
**NO SEMANTIC IMPACT** — restores already-decided Tool-First cognitive sequencing; does not change Product Result policy, GERM schema, Roadmap, or PRR overlays. Roadmap/PRR/manifest **not modified** this cycle.

## 23. Security check
Scoped scan of modified Product file: **NO FINDING IN SCANNED SCOPE** (≠ full audit claim).

## 24. Staging / commit SHA
- Staged explicitly: only `w3cPostEvidenceLoop.ts` (no `git add .`)
- Commit: `f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f`
- Message: `fix(studio): restore W3-C Nora review tool-first boundary`

## 25. Push / remote SHA
- Fast-forward push to `origin/feat/akg-m5-l3-s2-generic-proof-continuity`
- Remote == local: `f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f`
- main unchanged

## 26. État Draft PR #623
- URL: https://github.com/mcleland147/sfia-workspace/pull/623
- OPEN · **draft=true** · base=main · head SHA `f7c9ba78…`
- commits: 3 · changed files (PR aggregate): 22 Product/docs paths from Option B + this one-file fix within that set
- Not undrafted · Not merged

## 27. Nouvelle CI
- New workflow run: **40504093149** @ head `f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f`
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/40504093149
- Detect SFIA Studio changes: **pass** (7s)
- Build and validate SFIA Studio: **pass** (8m51s)
- SFIA Studio Required Gate: **pass** (2s)
- Workflow conclusion: **success**

**Sub-status: CI GREEN VERIFIED ON NEW HEAD.**
Do not reuse CI of `90bbf479`. Merge still NOT authorized without distinct Morris GO after Critical PR Re-Review.

## 28. EP-S2 inchangés
01–04 PASS DET · **05 NOT PROVEN** · 06–07 PASS DET · **08 PARTIAL** · 09–12 PASS at tested scope. No promotion.

## 29. Fake/Real
Unchanged: TestOnlyRealExecutionLaunchPort · DET FS worktree · REAL Cursor NOT PROVEN · G-REAL NOT GRANTED · OA-exclusive DEFAULT OFF · DETERMINISTIC AT TESTED SCOPE.

## 30. Dettes / réserves
- CI run `40504093149` **GREEN** on `f7c9ba78…` (Detect + Build/validate + Required Gate)
- Local trajectorySurface flake observed once under first full-suite load (green on retry + green on GitHub CI)
- EP-S2-05/08 · late Evidence supersession · Generic Product PASS · REAL · post-merge R24 — unchanged open debts
- MERGE still requires distinct Morris GO after Critical PR Re-Review

## 31. Git Review Index
| Ref | SHA / ID |
|---|---|
| origin/main | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Prior PR HEAD (failed CI) | `90bbf479a31a08d70e8d498825bfd49f0ba49314` |
| Corrective commit / new HEAD | `f7c9ba78dafe0ee1bc0ff3f5b878022c1bbabe6f` |
| Failed CI run | `40500124340` |
| New CI run | `40504093149` |
| Draft PR | #623 |
| Prior handoff tip | `4a923966291c9a9503b723547f50f1284daf41d5` |

## 32. Verdict unique
**AKG-M5 L3-S2 OPTION B — CORR-CI-623-01 DELIVERED ON DRAFT PR #623 — READY FOR CHATGPT CRITICAL PR RE-REVIEW — MERGE NOT AUTHORIZED.**

Sous-statut: **CI GREEN VERIFIED ON NEW HEAD.**

Non-claims: ≠ MERGE AUTHORIZED · ≠ L3-S2 CURRENT ON MAIN · ≠ L3 GLOBAL CLOSED · ≠ REAL PROVEN · ≠ runtime v3 ADOPTED.

---
## Appendix A — Instruction ChatGPT obligatoire
Avant toute réponse sur ce rapport Cursor, consulter Git distant:

- Branch: `sfia/review-handoff`
- Path: `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier cycle CORR-CI-623-01, profil CRITICAL, branche projet, HEAD `f7c9ba78…`, base `6e957ecb…`, fichier modifié, commit/push, Draft PR #623, CI run `40504093149` (success / Required Gate pass), réserves, et verification distante. Produire ensuite une synthèse globale et un verdict motivé. Merge remains a distinct Morris GO.

## Appendix B — Cognitive boundary summary
| Surface | b.md / unclaimed paths |
|---|---|
| Durable GERM / manifest blockers | PRESENT (full) |
| Pilot executionReport / Product Resolution | PRESENT (full) |
| Nora first prompt | REDACTED (`CLAIM_FACT_MISMATCH` without `unclaimed=…`) |
| `execution_review_get_manifest` tool | PRESENT (full) |
| Product PASS | still refused |
