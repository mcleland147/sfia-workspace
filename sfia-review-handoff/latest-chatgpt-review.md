# SFIA Studio Next — ML5 RoomBooking Integrated Corrective — Review Pack FULL

**Cycle:** 8 — Delivery / implémentation · Typologie INC · Critical
**Date:** 2026-11-25
**Verdict:** ROOMBOOKING CORRECTIVE DELIVERY — INCOMPLETE — NOT READY FOR RECETTE

> Completeness Gate failed on discriminant LIVE/PG proofs still open after mechanism delivery. Mechanisms A–D landed; candidate DEV identifiable. Do not cutover RECETTE.

---

## 1. Qualification du cycle

| Champ | Valeur |
|---|---|
| Repository | `mcleland147/sfia-workspace` (worktree local) |
| Scope | `projects/sfia-studio-next/` |
| SEF / SFIA | v0.2 / v2.6 |
| R5 | IN PROGRESS · ML5 OPEN · Livraison 1 NON ACCEPTÉE |
| Mandate | GO Morris — macro-lot correctif intégré RB-01..31 |
| Integrator | Cursor |
| Product Versioning | NO RELEASE |
| Livraison 2 | NOT STARTED |

---

## 2. Git Truth Check

| Check | Result |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| Tip local | `4d3a9d67212fac7c0acee57b6e3394394b5f1323` (docs pin; web tree = `98e58ec4`) |
| Pre-delivery HEAD | `3c663fd2809cae9e91b3f4929515d859b0284e81` |
| UAT candidate (recetté) | `2a024b1c8d713ded6260d2a6427448a29f98a646` |
| Tree | `76efa6f2487a18291f13fe8fb99dc94da770ba2e` |
| Web tree | `bf00736cafa90ad233afbce59d6ae08be4a18d9a` |
| Staged | none at pack time (docs may be pending) |
| Push projet | NONE |
| RECETTE HEAD | `2a024b1c8d713ded6260d2a6427448a29f98a646` unchanged |
| RECETTE Build | `3RyhswMcKrNv8woukVXsT` unchanged |
| DEV Build | `iPIn-B5JYIW9udTiFAG7o` |
| DEV Digest | `dd3565f9e2aa527cd4c50f7b7318f30b65edd3b9a01c537132717f408650feb8` |
| DEV | `:3100` / PG `:5433` · AUTO_SESSION=1 · COG=OPERATIONAL_PROVISIONAL · WEB LIVE=0 |
| Diff tip vs UAT | includes corrective commits `47818360` + `98e58ec4` on product web |

Commits product:
1. `47818360` — axes A–D mechanisms
2. `98e58ec4` — SAS LIVE clear / hide SDK status

---

## 3. Sources consultées

- PV RoomBooking UAT (docs branch blob `d428b3d1…`) — 31 écarts
- Diagnostic causal handoff `a4bd34b5` / blob `89e82e48` §§4–13
- `governance/environnements-recette-et-promotions.md` · `product-versioning.md`
- SEF / roadmap / decisions Git A / DATA-01
- Code owners D3/D4/D5 paths under `web/src/domains/**`

Diagnostic NOT re-done; used as execution baseline.

---

## 4. Matrice d'exécution (pilotage)

| Axe | Statut technique | Notes |
|---|---|---|
| A Production/révision doc | IMPLEMENTED + unit VERIFIED | Multi-section merge + ack honesty; conserve full PG path not re-proven this cycle |
| B Ressources/continuité | IMPLEMENTED + unit VERIFIED | Preventive envelope + conclusions + fork create; LIVE token before/after measures incomplete |
| C Activité LIVE | IMPLEMENTED + partial LIVE | DRAFT parasite removed; single projection; SAS mid-turn observed; rich Git métier ops not fully re-observed |
| D SAS/UX/personnalité | IMPLEMENTED + partial BROWSER | IQ cognitive path; SAS dwell 1200ms; markdown lists; cycle count; context aside; F2 not claimed |
| E Intégration | PARTIAL | Build+DEV+unit+SAS smoke; scenarios 3/4/5 discriminant incomplete |

---

## 5. Corrections par axe

### Axe A
- `expandSectionHints` + atomic multi-section `applyTargetedSectionRevision` / `assertSectionScope`
- Honest `formatDocumentEffectAck` (no false « non qualifiée » for SECTION_* / downstream reasons)
- Unit discriminant RoomBooking sections 2+3 PASS

### Axe B
- `evaluateGlobalResourceEnvelope` reserve + projected soft-stop (ceilings still 24/200k)
- Conductor preventive checks before/between segments
- `conclusions[]` on investigation + REPLY `contentMarkdown` persistence
- Restitution humanizes GLOBAL_TOKEN_* and surfaces acquis
- Create-doc without relation → `NEW_PRODUCTION_FROM_PRIOR_ACQUIS`; exhausted CONTINUE clarify

### Axe C
- Removed QUALIFIED&&!wantsPrepare parasite DRAFT LIMITED event in `service.ts`
- Single LIVE projection (`NoraLiveActivity` xor legacy preparer)
- `active` prop; idle simple card hidden; late poll fence on SAS
- Tool producers already emit métier summaries (preserved)

### Axe D
- SAS popup: min dwell 1200ms steps 2/3; `complete` terminal sync; info icon square box
- IQ: `buildCognitiveTrajectoryNarrative` via D3 Nora (tools off) + tutoiement fallback; D5 still publishes structure
- TrajectoryBoard cycle count dynamic
- Travail aside cycle/trajectoire from pilotage
- Markdown list-style restored; default Travail hero not « Réviser… »; statusHint clear on non-doc turns

---

## 6. Décisions d'implémentation

1. Multi-section = generic hint expansion + region replace; no RoomBooking hardcode.
2. Envelope soft-stop leaves restitution reserve; no ceiling raise.
3. IQ narrative uses Nora generate with empty tool allowlist; D5 remains trajectory authority.
4. N/A contract ≠ LIMITED — stop emitting prepare diagnostics when !wantsPrepare.
5. UX dwell is client-only; backend not delayed.

---

## 7. Blast radius

Touched: D3 conductor/work/run-turn, D4 document-act, conversation service, IQ pilotage, SAS/Travail UI, globals.css, unit tests.
Not touched: D7/D8/D9 authorities, WEB LIVE, RECETTE, migrations, method/, prompts/.

---

## 8. Git Review Index

| Path | Change |
|---|---|
| `web/src/domains/conversation/document-act.ts` | Multi-section revise + ack |
| `web/src/domains/conversation/cognitive-work.ts` | Preventive envelope |
| `web/src/domains/conversation/cognitive-conductor.ts` | Soft-stop loop |
| `web/src/domains/conversation/run-nora-cognitive-turn.ts` | Conclusions, fork, REPLY body |
| `web/src/domains/conversation/investigation-*.ts` | Restitution + conclusions field |
| `web/src/domains/conversation/service.ts` | Remove DRAFT parasite |
| `web/src/domains/pilotage/initial-qualification.ts` | Cognitive IQ narrative |
| `web/src/components/figma/*` | LIVE, SAS, trajectory, chrome |
| `web/src/app/preparations/...` | SAS dwell + status |
| `web/src/app/projects/...` | Focus clear + aside cycle |
| `web/src/app/globals.css` | List bullets |
| `web/tests/unit/ml5-*.test.ts` | New + fix DOCUMENT→D4 |

---

## 9–11. Files / diffs / docs

Product commits above. Docs: `construction/delivery-history.md` append (this delivery). Review pack resets `.tmp-sfia-review/chatgpt-review.md` (not product tree).

---

## 12. Tests et résultats

| Suite | Result |
|---|---|
| `ml5-multi-section-revise.test.ts` | 7 PASS |
| `ml5-cognitive-envelope-and-continuity.test.ts` | 6 PASS |
| `ml5-c24-dossier-attachment-continuity.test.ts` | 7 PASS |
| `tsc --noEmit` | clean (after DOCUMENT→D4 fix) |
| `next build` | success → BUILD_ID `iPIn-B5JYIW9udTiFAG7o` |

---

## 13. Mesures cognitives avant/après

| Metric | RoomBooking UAT (before) | After (this delivery) |
|---|---|---|
| Global ceiling | 200k / 24 | unchanged |
| T10 observed | 391581 tokens | N/A this cycle (not re-run) |
| Soft-stop | late post-segment only | preventive reserve + projected next |
| Proof of <200k on Git investigation | REQUIRED | **NOT CLOSED** this cycle |

---

## 14–18. Preuves parcours

### SAS LIVE (DEV, prep_32fbf86b…)
- Auto-session issued (`dev-test-login`)
- Mid-turn: ACTIVITÉ NORA · En cours · « Nora prépare une réponse » (screenshot `page-2026-11-25T08-52-20-279Z.png` local only)
- Post-turn: COMPLETE; create CTA ContiguBook; residual activity observed then fixed in `98e58ec4` (rebuild includes fix)
- Technical `openai-agents-sdk-live · COMPLETE` was exposed then removed from status line

### Missing discriminant proofs (gate fail)
- Scénario 3: natural multi-section → candidate → conserve → v2 exact PG
- Scénario 4: Git multi-source investigation → note from acquis with new work + token measures
- Scénario 5: controlled interrupt/resume without duplicate effects
- Multi-state Git LIVE métier operations correlation

---

## 19. Matrice individuelle RB-01..31

| ID | Cause confirmée | Mécanisme | Correction | Preuve | Statut |
|---|---|---|---|---|---|
| RB-01 | Idle card stayed | NoraLiveActivity active/richHistory | Hide simple idle | SAS partial | IMPLEMENTED_UNVERIFIED (post-fix rebuild) |
| RB-02 | En cours residual | active=false + clear events + poll fence | Done | SAS partial | IMPLEMENTED_UNVERIFIED |
| RB-03 | list-style none | globals.css safe-md | disc/decimal | CSS+code | VERIFIED (static) |
| RB-04 | SDK mode in status | prep status métier only | Done | code | VERIFIED (code) / UAT pending |
| RB-05 | Static popup | SAS progress from IQ | Animation via current step | code | IMPLEMENTED_UNVERIFIED |
| RB-06 | No UX dwell | 1200ms client dwell | Done | code | IMPLEMENTED_UNVERIFIED |
| RB-07 | Step3 stuck EN COURS | `complete` prop | Done | code | IMPLEMENTED_UNVERIFIED |
| RB-08 | Terminal confirm | complete title + Accéder | Done | code | IMPLEMENTED_UNVERIFIED |
| RB-09 | Oval info icon | fixed 22×22 box | Done | code | VERIFIED (static) |
| RB-10 | Hardcoded « trois » | dynamic forecast.length | Done | code | VERIFIED (static) |
| RB-11 | Template IQ | Nora cognitive narrative | Done | code path | IMPLEMENTED_UNVERIFIED |
| RB-12 | Vouvoiement IQ | tutoiement fallback + Nora | Done | code | IMPLEMENTED_UNVERIFIED |
| RB-13 | msg_iq deterministic | generateNoraReply IQ | Done | code path | IMPLEMENTED_UNVERIFIED |
| RB-14 | Dual activity | single projection | Done | code | VERIFIED (code) |
| RB-15 | Generic activity | producers + labels | Partial enrich | SAS smoke | PARTIAL |
| RB-16 | DRAFT LIMITED | removed producer | Done | code | VERIFIED (code) |
| RB-17 | Partiel N/A | same as RB-16 | Done | code | VERIFIED (code) |
| RB-18 | False ack | formatDocumentEffectAck | Done | unit | VERIFIED (unit) |
| RB-19 | Stale context | aside cycle from pilotage | Done | code | IMPLEMENTED_UNVERIFIED |
| RB-20 | Raw IDs | labels filter + status | Partial | SAS residual before fix | PARTIAL |
| RB-21 | Cross-turn bleed | poll fence + turn id | Existing+fence | code | PARTIAL |
| RB-22 | Status stuck | active/complete | Done | code | PARTIAL |
| RB-23 | Source grain | existing journal coverage | Preserved | — | ALREADY_SATISFIED_WITH_PROOF (prior) / not re-proven |
| RB-24 | Single section only | multi-section merge | Done | unit discriminant | VERIFIED (unit) |
| RB-25 | Fake candidate | existing candidate path + multi merge | Partial | unit only | IMPLEMENTED_UNVERIFIED |
| RB-26 | Ack lie | formatDocumentEffectAck | Done | unit | VERIFIED (unit) |
| RB-27 | Late envelope | preventive soft-stop | Done | unit | VERIFIED (unit) / LIVE measure open |
| RB-28 | Blind resume | exhausted clarify + restitution | Done | unit restitution | IMPLEMENTED_UNVERIFIED |
| RB-29 | Revise mode sticky | statusHint clear + hero default | Done | code | IMPLEMENTED_UNVERIFIED |
| RB-30 | Conclusions lost | conclusions[] + REPLY body | Done | unit | VERIFIED (unit) |
| RB-31 | Note on same work | forceNew create-doc | Done | code | IMPLEMENTED_UNVERIFIED |

**None of the above closes UAT for Morris.** Technical statuses ≠ user acceptance.

---

## 20. Non-régression

Preserved: D3 single conductor, D4/D5 authorities, HumanDecision, RETAIN≠OPEN, WEB LIVE blocked, D8 off, RECETTE untouched, 24/200k ceilings, conserve-only path code (not re-proven), T9/T10 quality not re-run.

---

## 21. Completeness Gate final

| Gate item | OK? |
|---|---|
| 31 IDs present in matrix | YES |
| 31 IDs corrected or pre-proven | NO — several IMPLEMENTED_UNVERIFIED / PARTIAL |
| Axes A–D mechanisms landed | YES |
| Multi-section unit discriminant | YES |
| Candidate inspectable + conserve PG proven this cycle | NO |
| Investigation→note LIVE + token measures | NO |
| LIVE multi-state Git activity | NO (SAS mid-turn only) |
| Build + DEV identity | YES |
| RECETTE unchanged | YES |
| Documentation synced | PARTIAL (delivery-history appended) |

**GATE RESULT: FAIL — return for remaining proofs OR declare INCOMPLETE (chosen).**

---

## 22. Manifeste candidat DEV

| Field | Value |
|---|---|
| Delivery SHA (web) | `98e58ec46b4d9cac2921b68c361ded91a714e8f3` |
| Tip local | `4d3a9d67212fac7c0acee57b6e3394394b5f1323` |
| Tree | `76efa6f2487a18291f13fe8fb99dc94da770ba2e` |
| Web tree | `bf00736cafa90ad233afbce59d6ae08be4a18d9a` |
| BUILD_ID | `iPIn-B5JYIW9udTiFAG7o` |
| Digest | `dd3565f9e2aa527cd4c50f7b7318f30b65edd3b9a01c537132717f408650feb8` |
| Lane | DEV `:3100` / `:5433` |
| Policy | OPERATIONAL_PROVISIONAL · 24 / 200000 |
| WEB LIVE | BLOCKED |
| RECETTE | `2a024b1c` / `3RyhswMcKrNv8woukVXsT` / `:3200` / `:5434` UNCHANGED |

---

## 23. Réserves réellement restantes

1. Discriminant PG multi-section conserve + v1 history (RB-24/25 path end-to-end)
2. Git investigation LIVE → note from acquis + resource measures (RB-27/30/31)
3. SAS create popup dwell/terminal not browser-proven after rebuild
4. F2 global not claimed
5. User reception Morris pending

---

## 24. Verdict

**ROOMBOOKING CORRECTIVE DELIVERY — INCOMPLETE — NOT READY FOR RECETTE**

Instruction ChatGPT: re-read remote handoff; verify real diffs; individual RB coverage; axes; LIVE/PG gaps; Completeness Gate honesty; candidate identity `98e58ec4` / build `iPIn-B5JYIW9udTiFAG7o`. Do not declare USER ACCEPTED / ML5 CLOSED / STABLE / RELEASE.

Suite: Morris GO only after closing gate gaps or explicit acceptance of residual proof plan — then cutover distinct.
