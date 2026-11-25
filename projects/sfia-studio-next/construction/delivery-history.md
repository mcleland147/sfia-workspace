# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-25-ML5-NORA-COGNITIVE-COMPLETION-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-25 (Europe/Paris) |
| Macro-lot | ML5 — Nora cognitive completion · **Cycle 11 cutover RECETTE** |
| Type | RUN Critical · mise à disposition · **NO RELEASE** |
| Branche source | `sfia/next-ml5-integrated-delivery-20261123` |
| Candidate SHA **servi** | `ca0b114c6f7336ba0073d03f8d391fe05182bf86` |
| Tree / web tree | `b555377d…` / `99dd2c6b…` |
| Identité | Divergence `7b93ddc4` (delivery-history @86be) vs `99dd2c6b` (tip) = **métadonnées + script LIVE helper** uniquement ; runtime applicatif inchangé hors docs/script |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-ca0b114c6f73` |
| BUILD_ID RECETTE | `RkthxGW_bZUygxYbwP9Hq` · digest `890007559f60f0b1ed73142dcf93758db5d24ec9ac5dd5bf7210d44ba10ae1ed` |
| URL | `http://127.0.0.1:3200` · PID `48039` · PG `:5434` |
| Cognition effective | OPERATIONAL_PROVISIONAL · gpt-6.2-sol · **2M / 1M / 120** (remplace 200k/24) |
| WEB LIVE | **BLOQUÉ** (0/0/0) |
| Données | counts inchangés projects=28 conversations=207 messages=773 documents=119 revisions=190 cog_works=10 ckpts=104 |
| Sauvegarde | `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T145816Z-pre-ca0b114c` · dump sha256 `3c49b53c…` |
| Rollback | worktree `…-2a024b1c8d71` · build `3RyhswMcKrNv8woukVXsT` · plist bak pré-cutover |
| DEV | **préservé** `:3100` / `:5433` · build `AWs47BqI-EoJvkDkE4Lzi` |
| Push produit | **NONE** |
| Verdict | **NORA COGNITIVE COMPLETION — RECETTE CUTOVER VERIFIED — READY FOR MORRIS UAT** |

## delivery_id: DELIV-2026-11-25-ML5-NORA-COGNITIVE-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-25 (Europe/Paris) |
| Macro-lot | ML5 — Nora cognitive completion (A/B/C/D ciblés) |
| Type | INC Critical · correctif interne · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Parent / tip de base | `d58d42802e50d64c97cdfc9e66bc769c74e0c0fa` |
| Candidate SHA | `86be16899b93f962be3a50efa70d968637ea09d6` (+ docs delivery-history) |
| Candidate tree | `6a6a2564d0f30e86152cc47681f8763fa6871431` |
| Web tree | `7b93ddc4fb2e5ce9eee8bd82b3274a6b79ab1e0b` |
| Build DEV | `AWs47BqI-EoJvkDkE4Lzi` · digest `a9b52e9ed0bd6e48a9307996a466aa56db197d8928178a6410b76bc90e370b51` |
| Lane | DEV `127.0.0.1:3100` / PG `:5433` · PID `31104` |
| RECETTE | **inchangé** `2a024b1c8d713ded6260d2a6427448a29f98a646` / build `3RyhswMcKrNv8woukVXsT` · PID `58642` · worktree `…/sfia-workspace-next-ml5-recette-build-2a024b1c8d71` |
| Contenu | A qualification sémantique (`investigationMode`/`investigationSufficiency`, plus de seed lexical 50/exhausti) ; B identité canonique + PARTIAL/DENIED ; C dédup conclusions + parent par pertinence ; D terminaison / restitution utilisable / 1M reeval stratégique |
| Preuves | unit `ml5-cognitive-completion-abcd.test.ts` (+ envelope/c18) ; LIVE court 5 fichiers Chantiers360 `cgw_71a26db3…` 5/5 TARGETED COMPLETE (~50k tok) ; note D4 depuis acquis `cgw_37e09f04…` parent lié · 0 relecture · `doc_363cea7d…` |
| Compatibilité | Calibration 2M/1M/120 inchangée · pas de multi-modèles · pas de campagne 50 sources |
| Rollback | tip précédent `d58d4280` / app `b34defd0` |
| Push projet | **NONE** |
| Verdict | **NORA COGNITIVE COMPLETION — TARGETED CORRECTIONS VERIFIED — READY FOR CHATGPT REVIEW** (≠ 50 COMPLETE ≠ ML5 CLOSED ≠ STABLE) |

## delivery_id: DELIV-2026-11-25-ML5-NORA-RECETTE-READINESS

| Field | Value |
| --- | --- |
| Date | 2026-11-25 (Europe/Paris) |
| Macro-lot | ML5 — Nora recette readiness (T1/T2/T3) |
| Type | INC Critical · régularisation pré-recette · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Parent HEAD | `3a56eb9d38661586dab79d9c999eef078476b5ac` |
| Candidate SHA | `2a024b1c8d713ded6260d2a6427448a29f98a646` |
| Candidate tree | `031f13043423c0e93d0b94af9fb27e852e262e74` |
| Web tree | `f57bb8eed98af19f4ea6d0a33d6de431084f635d` |
| Build DEV | `prUUuYxFrKalrxiMsKoc4` · digest `44d00186941598b86c4102ab37291b1c006760a36bf194a1afa8ace2a7849d0f` |
| RECETTE | **inchangé** `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
| Contenu | T1 admission sémantique B1 (pas lexical); T2 conserve-only nominal PG; T3 rebuild identité |
| Push projet | **NONE** |
| Verdict | **READY FOR RECETTE CUTOVER REVIEW** |

## delivery_id: DELIV-2026-11-25-ML5-NORA-RESIDUAL-ABCD

| Field | Value |
| --- | --- |
| Date | 2026-11-25 (Europe/Paris) |
| Macro-lot | ML5 — Nora residual functional corrections (A/B/C/D) |
| Type | INC Critical · ciblé · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Parent HEAD | `961ebdbd9361c746a43fa36ea0ee224acb720fc2` |
| Candidate SHA | `9672ec8723939a1d2bc5cf7c5f43696420ace6a5` |
| Candidate tree | `98ec6199a66618fe507e41d1684e2998b0c25228` |
| Web tree | `24d6fde7114eb0b28741c0135645917b97dc0803` |
| Build DEV | `oLyRjFCDc4Y7JSvbzZkFo` |
| RECETTE | **inchangé** `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
| Contenu | A continuation/restitution/scale; B pilot-public-query générique; C URL pilot-only + assertPublicHttpsUrl; D conserve-only sans regen |
| Push projet | **NONE** |
| Verdict | **RESIDUAL FUNCTIONAL CORRECTIONS COMPLETE — READY FOR REVIEW** |

## delivery_id: DELIV-2026-11-25-ML5-NORA-FUNCTIONAL-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-25 (Europe/Paris) |
| Macro-lot | ML5 — Nora functional completion (livraison 1 complément) |
| Type | INC Critical · six lots L1–L6 · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Parent HEAD | `5309dfaa5682cbdc92e9d6d354fd9c6c61d580f0` |
| Candidate SHA | `d0372b856af17793820817a78aa21739cddbdfd8` |
| Candidate tree | `14dbf2066bd991359f0cf6c09ee12af7c4cd4da4` |
| Web tree | `b5b8dc474c3d70f708039ad56798b253a5c1bed0` |
| Build DEV | `oLyRjFCDc4Y7JSvbzZkFo` · digest `5c7c5a812df4d3baddfc64d32414560ac9b64c1fed80729a1cd59176f44bae66` |
| RECETTE | **inchangé** `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
| Contenu | L1 états/identité/contexte activité; L2 NoraLiveActivity; L3 envelope tokens; L4 B1 catalog+pilot URL; L5 viewer/prepare gate; L6 optimistic id |
| Push projet | **NONE** |
| Verdict | **FUNCTIONAL COMPLETION READY FOR REVIEW** · READY WITH RESERVES |

## delivery_id: DELIV-2026-11-25-ML5-NORA-COGNITIVE-EXPERIENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-25 (Europe/Paris) |
| Macro-lot | ML5 — Nora cognition et expérience de travail (livraison 1) |
| Type | INC Critical · delivery intégré · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Parent HEAD | `34c614d988827db798024ac9d0a874927b8bacdf` |
| Candidate SHA | `d98e61133da18a51144b9dea732292584fc28aba` |
| Candidate tree | `d6b21a7856810cfa6747896d5c4617f62c4e48da` |
| Build DEV candidat | `zXUhtTemfQ4rO8vXc_3Nz` · digest `a56c77f4b98ac1e3885d24e86bb7e1275a12a5a3c61be43b7ed115fde8edfa38` |
| RECETTE runtime | **inchangé** `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` — bascule après GO Morris |
| Contenu | Activité LIVE transverse sas+travail ; UI Figma 12.01/12.10 ; labels métier ; composeur optimiste ; WEB≠GIT viewer ; strip fence fil ; envelope tokens cache ; personnalité ; guide recette |
| Push projet | **NONE** |
| Verdict candidat | **NORA COGNITIVE EXPERIENCE — DELIVERY READY FOR USER ACCEPTANCE TESTING** · READY WITH RESERVES |

## delivery_id: DELIV-2026-11-24-ML5-OPERATIONAL-RECETTE-PARITY

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 8 consolidation opérationnelle RECETTE (politique Nora + capacités + Cursor LIVE) |
| Type | RUN · correctif intégré · cutover RECETTE · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Parent HEAD | `807713cb89163b711db33f1f0e28bd9b99dbbc4d` |
| Candidate SHA | `7f48daa28f00f390c34c58951ee5ceeb311f4d40` |
| Candidate tree | `7b8683951dbbe8a2bb6a72b5a0e39fd29b2d7e7e` |
| Build RECETTE | `_ZDI1cWa1hscluvBhaiA4` · digest `ed59106d8706fb8267620682c0fd0abd2636cab06b4e649a18d23ff64bf8514f` |
| Policy version | `ml5-cog-policy-v3-recette-operational-provisional` |
| Contenu | `OPERATIONAL_PROVISIONAL` autorisé DEV+RECETTE ; catalogue WEB public RECETTE ; confinement Cursor refuse racines produit ; probe LIVE sans dispatch ; cutover `:3200` |
| Ancienne RECETTE | `8410906d` / BUILD `e0XwSWvjujz-xaHfXsrQK` / TEST_BOUNDARY + Cursor FAKE |
| Push projet | **NONE** |
| Verdict candidat | **RECETTE OPERATIONAL PARITY — READY FOR MORRIS UAT** · served `http://127.0.0.1:3200` |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE11-RECETTE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 11 Déploiement / mise à disposition RECETTE (NO RELEASE) |
| Type | RUN · consolidation C1–C24 · cutover RECETTE · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD pré-consolidation | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Candidate SHA | d4b89c906411e554f467a9eebe8f8c8e891c8e08 |
| Candidate tree | f8d5a66391451dfac008af234557d41657f0de79 |
| Ancienne RECETTE | SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` · BUILD `2uHrYBsQUvf6aii40hMpj` |
| Build RECETTE | `e0XwSWvjujz-xaHfXsrQK` · digest `a219cff93b7dfecff44abe85211e0db53a4608ea4f28ea6f44b260376df8c111` |
| Contenu | Commit local consolidé ML5 ; worktree RECETTE indépendant ; migrations additives 019–021 ; auth normale (pas auto-session) ; UAT-01…10 capitalisées ouvertes |
| Push projet | **NONE** |
| Verdict candidat | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** · served `http://127.0.0.1:3200` · previous `10128bdb`/`2uHrYBsQUvf6aii40hMpj` backed up |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE24-PRODUCT-UX-FIDELITY

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 24 reprise approfondie Figma-to-code page 12 (fidélité produit réel) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical · §6.6 UX/UI |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C24, aucun commit produit) |
| Build testé | `aXcIQCDMIigpelfT-Jvr5` · contentDigest `84f42bb7f8eb8285696f6d7495cd7e255e764fb0551bdd18b6298170911f2cb7` |
| Contenu | Reprise compositionnelle (pas widgets isolés) : ContractViewer 2×2 + 6 volets ; Exécution liste/détail sans bilan empilé ; Résultats bilans/dossier permanent + 4 onglets thématiques ; ProjectChrome heroes 12.04/12.08/12.09 ; panneau CONTEXTE JOINT ; deep-link `?attempt=` ; publication sans GitRepositories empilé |
| Preuves | Playwright routes produit `:3100` projet `proj_c08249f9-…` ; captures AFTER sous `.sfia-evidence/figma-page12-product-after/` ; comparatifs Figma\|Studio sous `figma-page12-product-compare/` ; continuity unit 7/7 ; `execution-bilan-stacked.txt` PASS |
| Push projet | **NONE** (handoff L3 mono-fichier autorisé) |
| Verdict candidat | **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED** (F2 rectangle ≠ 0 px partout ; densité contenu / icônes rail) · composition structurelle page 12 **alignée** · **READY FOR REVIEW** · pas ML5 CLOSED / pas GO RECETTE |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE24-CONTINUITY-UX-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 24 correctif continuité R2 + convergence UX page 12 + readiness qualification Morris |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C24) |
| Build testé | `KMN8QlvhIkUKTYDCTui_7` (digest `7edea656…`) ; build intermédiaire `ou99IxxSA5an5yI1umd5B` |
| Contenu | Cause racine R2 : question déterminante « joindre dossier D8 » empoisonnait READY après overwrite du brouillon bilan ; correctif chip dossier retirable (12.09) + consolidation `mergeQuestions` ; plafonds qualify 800k/48 **révoqués** (défauts 200k/24) ; Figma page 12 L0–L2 + PNG hashés ; tabs SYNTHÈSE/… ; 3 appréciations ; split bilans/dossier ; fixtures `/dev/ml5-page12-visual/*` |
| Preuves | vitest `ml5-c24-dossier-attachment-continuity` 7/7 ; labels onglets ; inventaire Figma 14 frames ; pas de campagne LIVE exhaustive |
| Push projet | **NONE** (handoff L3 mono-fichier autorisé) |
| Verdict candidat | **R2 CORRECTION: PROVEN (unit)** · **FIGMA PAGE 12: PARTIAL — DELIVERY REQUIRED (F2 runtime)** · **DEV USER QUALIFICATION READINESS: READY WITH RESERVES** — pas ML5 CLOSED / pas GO RECETTE |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE24-INTEGRATED-OPERATIONAL

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 24 convergence opérationnelle intégrée (1 projet / 2 réalisations) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C24) |
| Build testé | `wh16LAR_5NCCh-Q_7FF2t` (digest `00f5c6f8…`) ; antérieurs `5Yoo0gEG…`, `TQGWa9Ig…`, `rHdeFBfa…` |
| Contenu | qualify owned PID + contentDigest + sessionFingerprint ; D6 authorize→dispatch same-request ; resume AUTHORIZED ; avis Nora resume si pipeline COMPLETE ; READY admet travail OPEN ; budget cognitif qualify 800k ; scénario directeur BROWSER |
| Preuves R1 | Multiples COMPLETED LIVE + handoff RECEIVED + D8 PARTIAL + avis Nora (ex. `efx_f9127c71…`, `efx_a0400dcf…`, `efx_46a0462c…`) ; bilan BROWSER |
| Écart R2 | Seconde réalisation READY non closée sur même projet (investigation OPEN / questions déterminantes / budget) — continuité R2 non démontrée E2E |
| Push projet | **NONE** |
| Verdict candidat | **DEV: BEHAVIOR PROVEN** · **ML5 LOT 3: NOT READY** (réserve bloquante: 2e réalisation naturelle) — isolation D8 exec disabled inchangée |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE24-DEV-QUALIFY-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 24 stabilisation mode qualification DEV + finalisation opérationnelle |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C24) |
| Contenu | `npm run qualify` (check/build/start/stop/browser) ; Playwright LIVE `playwright.qualify.config.ts` vs E2E FAKE :3101 ; HMAC D8 durable `.sfia-evidence/` ; fencing atomique handoff/D8/Nora avis ; lease absent refusé ; boot resume collect + Nora différé ; WEB catalog élargi + intent sémantique |
| Build | `k4mH0Ja1tniQZx4umDAM1` |
| Preuves | qualify:check OK ; BROWSER Q0+Q1 LIVE (liveBadge + assistant) ; M1 LIVE+registry ; M2 Cursor LIVE COMPLETE PARTIAL LIVE_D3 ; M3 continuité LIVE recallsVerdict ; restart qualify stop→start /login 200 ; fencing PG + HMAC durable unit |
| Push projet | **NONE** |
| Verdict candidat | **DEV QUALIFICATION MODE: PROVEN** · **ML5 LOT 3: READY WITH RESERVES** — réserves : isolation OS D8 non disponible (exec disabled) ; WEB open page partiel ; Figma F2 non re-qualifié ; STOP/browser-close LIVE non exhaustifs |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE24-OPERATIONAL-REPRISE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 24 reprise opérationnelle (même cycle, pas C25) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Contenu | P0A disable isolated exec default; P0B Studio HMAC authority (workspace forge non-certifying); P0C LIVE Nora criterion assessments; P0D fence before handoff/D8 insert; P0E gitRequired vs N/A; P0F restitutionNoraKind; boot resume sans Nora LIVE storm; Next build `0veM5eBUecko8RAocdAaT` |
| Preuves | unit reprise P0; M1 Nora LIVE+WEB registry; M2 Cursor LIVE efx_94c1230d COMPLETE PARTIAL + D8_COGNITIVE_CRITERIA_LIVE + NORA LIVE_D3; BROWSER IDE TOOLING GAP |
| Push projet | **NONE** |
| Verdict candidat | **NOT READY** — P0 frontière D8/fencing avancés et missions 1–2 LIVE observées; M3/M4/BROWSER/Figma incomplets |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE24-OPERATIONAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 24 lot 3 convergence opérationnelle LIVE/REAL |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C24 non poussés) |
| Contenu | P0 D8: suppression `new Function` / STUDIO_BOUNDED non certifiant ; `studio-isolated-verify` (subprocess scrubbed + static tokens) ; preuves liées au critère ; contribution cognitive D8 (heuristic, no upgrade) ; fencing lease-not-expired sur `persistPipelineOwned` ; registre WEB produit (catalog DEV) ; métriques usage Agents SDK (`state.usage`) ; bilan ouverture sans POST silencieux |
| Preuves | unit C24 safety/registry/usage/cognitive ; PG fencing lease A→B ; NR C20–C24 54 tests ; smoke `c24-mission-smoke` ; LIVE Nora gpt-6.2-sol usage `input=5971 output=137 requests=1` |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — P0 D8 exécution + faux positifs + fencing fermés ; réserves : missions 1–4 E2E BROWSER LIVE/REAL non rejouées intégralement ; Figma F2 non re-qualifié ; WEB LIVE positif fournisseur via parcours Pilote partiel (registry alimenté, probe Nora sans outil WEB) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE23-INTEGRATED-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 23 lot 3 convergence fonctionnelle + qualification intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C23 non poussés) |
| Contenu | GPT-6.2 Sol ; effort adaptatif par profil ; D8 Studio verification (agent exit≠preuve) ; binding rapport field-exact ; fencing Nora CAS ; turnPublicTopics wired ; bilan structuré Figma ; D9 local observe |
| Preuves | unit policy/D8/WEB ; PG D8+CAS ; LIVE `efx_7118c5f9…` CONFORMING+STUDIO_VERIFY+Nora gpt-6.2 ; build `0IfMNnVNQMjcrQ0Z7wppl` |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — P0 D8/model fermés ; réserves BROWSER/F2, WEB LIVE positif, T-05 restart, parcours naturel non-seedé PARTIAL |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE22-EVIDENCE-LIVE-RESTITUTION

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 22 finalisation restitution probante + qualification LIVE intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C22 non poussés) |
| Contenu | WEB provenance EXPLICIT_AUTHORIZED_EXACT \| REGISTERED_PUBLIC_COMPOSITION only ; collecte rapport attempt-bound + confined FS (préférence workspace sur prose SDK) ; CAS restitution owner/version/lease ; D8 evidence workspace → CONFORMING sans injection ; consolidation mergeMode ; avis runNoraCognitiveTurn ; instrumentation boot resume |
| Preuves | Unit WEB/report/consolidation ; PG restitution+CAS+D8 CONFORMING+contradiction ; LIVE director Cursor SDK ; evidence-replay CONFORMING sur workspace LIVE ; build `xDm9gI5jk9N2qEGkFUqN_` |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — frontiers P0 + D8 product path + LIVE chain ; réserves : BROWSER activité long-run PARTIAL ; WEB LIVE fournisseur non rejoué ; D9/Git REAL non exercés |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE21-AUTONOMOUS-REALIZATION-RESTITUTION

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 21 lot de convergence 2 (réalisation et restitution autonomes) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C21 non poussés) |
| Contenu | WEB provenance serveur (publicTopic / exact allowlist) ; consolidation production (supersession finale) ; restitution autonome terminal→handoff→D8→avis ; D8 critère-à-preuve (CONFORMING possible) ; reprise superviseurs au boot auto-session ; activité investigation engagée |
| Preuves | Unit WEB authorize + D8 CONFORMING/PARTIAL ; PG restitution sans POST manuel ; PG dispatch filiation ; tsc ; next build `5mVBWTsOfnWwNfLerv0Ke` ; smoke DEV :3100 |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — chaîne autonome SCRIPTED démontrée ; réserves : WEB LIVE fournisseur+BROWSER activité long-run ; Nora avis cognitif LIVE sous `SFIA_AUTONOMOUS_NORA_AVIS=1` ; D9/Git REAL non exercés (mission locale) ; confinement WEB ≠ qualification WEB complète |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE20-LOT1-EXIT-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 20 qualification de sortie lot convergence 1 |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C20 non poussés) |
| Contenu | Corrections P0 bloquantes uniquement : lease/CAS concurrency ; D4 dependency currency + re-assert post-claim ; WEB discovery URL + confidential sanitize ; ambiguity clarify ; production consolidée → D4 |
| Preuves | I1 PG heartbeat≠reconcile ; I2 `Dépendance D4 supersédée` ; I3 unit open denied sans egress ; I5 clarify sans nouveau work ; I6 production.mdLen = D4 revision length |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — lot 1 exit proposé ; réserves non bloquantes bornées |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE19-RESIDUAL-INVARIANTS

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 19 fermeture invariants résiduels + qualification finale lot convergence 1 |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C19 non poussés) |
| Contenu | I1 révisions immuables (pas de mutate-in-place checkpoint) ; I2 applicabilité mandat aux points d'effet ; I3 sanitize/egress WEB ; I4 reconcile mid-RUNNING + PROCESS_OR_LEASE_INTERRUPT ; I5 rattachement `cognitiveWorkRelation`/`proposedCognitiveWorkId` ; I6 conservation production multi-tours |
| Preuves discriminantes | I1 checkpoints INVESTIGATION_SAVE distincts ; I2 READY r5 puis prepare/authorize 409 « mandat non applicable » ; I4 fence+kill RUNNING → interrupt → même workId ; I5 CONTINUE+INDEPENDENT sans inject ; I6 DOCUMENT 4762→12241→34553 chars, 3 part ids stables |
| Build | `next build` PASS · BUILD_ID `1pvGV0NLFRLhOqgw3Mxn_` ; tsc PASS ; vitest C19+WEB+C18 27 PASS ; smoke DEV :3100 PASS |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — lot 1 invariants I1–I6 démontrés ; réserves non bloquantes : WEB LIVE fournisseur+contexte privé non rejoué ce cycle (DETERMINISTIC/SCRIPTED capitalisés) ; interrupt mid-production I6 non capturé (couvert via I4 + conservation multi-tours) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE18-COGNITIVE-OUTPUT-CONTRACT

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 18 finalisation contrat de sortie cognitive (lot convergence 1) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C18 non poussés) |
| Contenu | Contrat de sortie structuré (qualification + outil `submit_cursor_contract_production`) ; suppression heuristiques A–F C17 ; bridge DRAFT sans collision checkpoint ; READY filiation exacte ; P1–P4 DEV LIVE rejoués |
| Corrections racines | A lexical critères ; B prose>800 ; C auto-ANSWER ; D remainingWork≠criteria ; E policy profileHint ; F fin indépendante de contractReady |
| Preuves LIVE | P1 LIVE Agents SDK ; P2 même workId sans inject + indep + reprise post-restart ; P3 DRAFT + instruction 40994 (>24k) + 15 critères ; P4 READY+refus D6 CANCELLED |
| Build | `npm run build` PASS (état DIRTY testé) ; vitest C18/C15/C16/investigation 24 PASS ; tsc PASS |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — lot 1 démontré DEV LIVE ; réserves : AWAIT_PILOT→OPEN non systématique ; invalidation matérielle d’un mandat READY via nouveau contrat distinct (pas mutation in-place) ; WEB redirect volontairement non suivi (blocage honnête) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE17-VERTICAL-COGNITIVE-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 17 convergence fonctionnelle verticale (lot convergence 1) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C17 non poussés) |
| Contenu | Parcours P1–P4 LIVE ; forceNew corrigé ; merge investigation riche ; SEGMENT≠BUDGET global ; filiation READY migration 021 ; production basis ; D4 document LIVE ; contrat DRAFT→READY→refus D6 LIVE |
| Migration DEV | `021_cognitive_contract_filiation.sql` additive sur DEV |
| Preuves LIVE | P1-A PASS ; P1-B PARTIAL ; P2 continuité PASS ; P3 document D4 PASS ; P4 DRAFT+READY+refus PASS ; invalidation matérielle / restart serveur / instruction ≥24k non clos |
| Tests | investigation 8 PASS ; C16 integration 5 PASS ; PG ownership 5 PASS ; tsc PASS ; build Next PASS (cycle) |
| Push projet | **NONE** |
| Verdict | **NOT READY** — lot 1 non sorti (réserves P1-B/P2-C/P3 long/P4 invalidation) ; convergence fonctionnelle partielle DEV LIVE démontrée |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE16-INTEGRATED-CONDUCTOR

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 16 finalisation fonctionnelle + qualification intégrée du conducteur |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C16 non poussés) |
| Contenu | Raccordement produit `runNoraCognitiveTurn` → conducteur D3 ; claim/lease/fencing ; READY positif + requalification ; DRAFT incomplet sans slice(0,8) ; WEB DNS+connect pinned+timeout lecture ; multi-entrées service/intent/D8 |
| Tests | units C16 5 PASS ; C15 5 PASS ; PG ownership C16 5 PASS ; PG C15 2 PASS |
| Push projet | **NONE** |
| Verdict | **READY WITH RESERVES** — raccordement + P0 ownership/READY/WEB démontrés DETERMINISTIC/INTEGRATION ; LIVE E2E product path encore PARTIAL (Next offline au moment des preuves) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE15-COGNITIVE-CONDUCTOR

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 15 conducteur cognitif Nora (lot convergence 1) |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C15 non poussés) |
| Contenu | Persistance D3 `cognitive_works` ; conducteur multi-segments ; READY positif ; journal non monotone ; contrat sans plafonds 24k/8 ; WEB egress DNS+stream |
| Migration DEV | `020_cognitive_work.sql` sur `sfia_next_dev` + `sfia_next_e2e` |
| Tests | units C15 + investigation/bridge ; PG cognitive work 2 PASS |
| Push projet | **NONE** |
| Verdict | **READY WITH RESERVES** — infrastructure + invariants discriminants ; LIVE intégré lot 1 encore PARTIAL |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE14-COGNITIVE-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 14 conduite cognitive Nora + WEB LIVE + contrats |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C14 non poussés) |
| Contenu | Suppression routage lexical TECH_INTENT ; profil sans longueur ; capability `d7.prepare_cursor_contract` ; WEB LIVE isolé + fetch + parse navigation ; critères métier contrat |
| WEB LIVE | Isolation outbound query-only **PASS** ; search LIVE items **DISCOVERED** (MDN) ; open MDN **PAGE_OPENED** + citation ; hosted tool détaché de Nora privée |
| Scénarios | S2 négation sans contrat ; S5 contrat DRAFT instruction ≥6k ; S4 WEB LIVE ; S8 dispatch sans READY → 400 ; units C14 **31 PASS** |
| Push projet | **NONE** |
| Verdict | **ML5 NORA COGNITIVE CONVERGENCE PROVEN — FUNCTIONAL COMPLETION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE13-RESILIENCE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 13 confinement D8 + supervision durable + STOP LIVE + candidat |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C13 non poussés) |
| Contenu | `d8-path-confine` + journal D8 ; `cursor-live-supervisor` ; STOP LIVE ; handoff honesty ; inventaire candidat |
| STOP LIVE | `efx_03b99d0f…` agent `agent-c6b4acd1…` run `run-1a115791…` — BEFORE_STOP OK ; `LIVE_CANCEL_OBSERVED` ; terminal `cancelled` ; AFTER_STOP absent |
| Long-run T-05 | `efx_53198bd9…` agent `agent-b339a662…` run `run-7159ad8b…` — browser closed 90s → COMPLETED finished ; identities stable ; double-dispatch idempotent |
| D8 security | unit confine 12 PASS ; PG real reader 8 PASS (symlink/traversal/pilot/project) |
| Push projet | **NONE** — `PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW` |
| Verdict | **ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE12-LIVE-RESILIENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 12 LIVE resilience + D8 evidence + candidat |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C12 non poussés) |
| Contenu | LIVE_WAIT=0 ACK-first; observeLiveCursorRun+apiKey; DROP_ACK fault T-04; D8 evidence tools Nora; STOP SCRIPTED; inventaire candidat |
| Scénario LIVE | `ml5-c12-live-20261123` — `efx_6ef408be…` agent `agent-f1b001a0…` run `run-66b05967…` COMPLETED; RESULT_C12.txt OK |
| Incident T-04 | DROP_ACK → AMBIGUOUS + priorSend + refus second dispatch (**PASS**) |
| Nora D8 | `NORA_D8_TOOLS_OBSERVED` (11 tool calls) |
| Push projet | **NONE** — `PROJECT CANDIDATE PREPARED — PUSH REQUIRES MORRIS GO` |
| Verdict | **ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE11-DEV-LIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 11 activation DEV LIVE Nora + Cursor SDK |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C11 non poussés) |
| Contenu | FileCredentialStore + model `composer-2.5` ; observeLiveCursorRun ; attachNoraCognitive→generateNoraReply ; openBilan sans requalify silencieux ; env LIVE DEV |
| Scénario | `ml5-c11-live-20261123` — project `proj_c08249f9…` — Oui `efx_306b2b49…` — agent `agent-29c4c0f4…` — run `run-51c77f21…` — handoff `rhf_90ccccb6…` — témoin DEMO_C11.txt |
| Frontier | **END-TO-END DEV LIVE** — Nora LIVE + Cursor SDK LIVE + D8 + Nora COGNITIVE ; B09/GitHub REAL/MCP N/A |
| Tests | Journey C11 **10 PASS / 0 FAIL / 3 N/A** ; unit ciblés 11 PASS ; D8 verdict PARTIAL (honnête) |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité LIVE améliorée, présence inchangée |
| Push projet | **NONE** |
| Verdict | **ML5 END-TO-END DEV LIVE PROVEN — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE10-UX-D8-QUAL

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 10 convergence UX, D6, D8 et qualification visuelle |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C10 non poussés) |
| Contenu | CSS contrat/D6/D8 ; Travail 50/50 + D6 ; `confirmed` boolean strict ; bilan requalify après handoff ; pièce nouvelle G15 ; viewport 1680×970 |
| Scénario | `ml5-c10-mono-20261123` — project `proj_d54a9443…` — Oui `efx_d4617b21…` — handoff `rhf_cc411abd…` |
| Tests | Unit ML5 **73 PASS** ; Playwright C10 **15 PASS / 0 FAIL** ; F2 **0 PASS / NOT PROVEN** |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) |
| Push projet | **NONE** |
| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE9-E2E-MONO-ATTEMPT

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 9 démonstration fonctionnelle intégrée mono-tentative |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C9 non poussés) |
| Contenu | D6 Non authentifié (CANCELLED+decisionId) ; D6 Oui+fingerprint ; SCRIPTED_PHASED RUNNING→reconcile COMPLETED ; bilan D8 4 onglets ; retour Nora brouillon ; 14 captures + manifeste mono-tentative |
| Scénario | `ml5-c9-mono-20261123` — project `proj_a4525a4a…` — attempt Oui `efx_1e86bf8c…` — refus `efx_b70c69ef…` |
| Frontier | SCRIPTED / DEV — ≠ Nora LIVE, ≠ Cursor SDK LIVE, ≠ WEB LIVE |
| Tests | Unit C9 phased 3 PASS ; unit ML5 ciblés 15+ PASS ; Playwright E2E 15 PASS / 1 PARTIAL (handoff re-ingéré) ; F2 global NOT PROVEN |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité BROWSER améliorée, présence inchangée |
| Push projet | **NONE** |
| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE8-INVARIANTS-INTEGRATED

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 8 fermeture invariants + parcours intégré |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Contenu | A1 origin/ls-remote/REMOTE_VERIFIED ; A2 listen probe ; A3 MCP fail-closed UNKNOWN ; B1 proof exact + no handoff fallback ; G07 PNG magic ; BROWSER intégré SCRIPTED |
| Tests | Unit+PG ML5 **79 PASS** ; tsc PASS ; Playwright C8 ; F2 global NOT PROVEN |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité ≠ présence |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE7-INTEGRATED-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 7 convergence fonctionnelle, sécurisation, qualification |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Checkpoint | R-003 @ `5a4e4405` · handoff C6 `b5466dd7` |
| Contenu | CP-01 observeWorkspaceGitFacts ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref + qualify-in-TX ; G07 evidence-captures ; B04 citations ; E12 MCP check ; Playwright runtime PNG ; fixture SCRIPTED BROWSER |
| Tests | Unit+PG ML5 **75 PASS** ; tsc PASS ; Playwright 4 captures ; F2 global **NOT PROVEN** |
| Inventaire | **1 / 97 / 1** (B09 reste NOT_IMPL) |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE6-GIT-A-DEV-BROWSER

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 6 Git Cursor option A + DEV auto-session + fermeture |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Décision | `1e6929c543a88606488094be2f5dfe7fc34a0cb9` — DÉC-ML5-GIT A + DÉC-ML5-DEV |
| Lane | DEV `sfia_next_dev` :5433 — mig **019** ; RECETTE/STABLE inchangées |
| Contenu | Auto-session Pilote DEV fail-closed ; Git option A preflight/observe/bare harness (Studio non publisher) ; G15 FOR UPDATE + PG concurrent ; activityFlushQueue await ; A04 corrective intent ; next.config serverExternalPackages `@cursor/sdk` ; BROWSER Travail/Exécution/Résultats/sas |
| Tests | Unit+PG ciblés **34 PASS** ; tsc PASS ; BROWSER snapshots OK ; F2 PNG **NOT PROVEN** (capture timeout) ; LIVE/REAL **NOT** |
| Inventaire | **1 / 92 / 6** (was 1/81/17) |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE5-INTEGRATED-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 5 finalisation fonctionnelle intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Lane | DEV `sfia_next_dev` :5433 — mig **019** history_json |
| Contenu | Travail ContractViewer 50/50 ; activité poll RUNNING ; mid-turn OBSERVED ; B1 assertPublicHttpsUrl+confront ; G15 requalify ; Cursor poll/reconcile UI ; preparedContract sur TurnResult |
| Tests | Unit ciblés **22 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-FUNCTIONAL-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Complétude fonctionnelle, sécurisation et stabilisation |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — cycles 3+4 non commités) |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV `sfia_next_dev` :5433 — RECETTE/STABLE inchangées |
| Contenu | Inventaire Impl **1/74/24** (réconcilié explore) ; sendIntent pre-SDK ; tool-source-journal ; READY prepId persisté ; B1 public-web-search-frontier SCRIPTED ; activité OBSERVED sources ; DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE ; D8 critères sans preuve lexicale |
| Tests | Unit ML5 **53 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
| Push projet / PR / merge | **NONE** |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CONVERGENCE-CONFORMITY

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Convergence fonctionnelle et conformité intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV only (`sfia_next_dev` :5433) — RECETTE/STABLE inchangées |
| Contenu | CF-03 anti-duplicat ACK-lost ; CF-02 READY serveur ; provenance handoff ; Nora→contrat DRAFT bridge ; surfaces `execution`/`publication` ; onglets D8 Figma ; analyse cognitive Nora (dossier) ; docs acceptation/registre |
| Tests | Unit ML5 **25 PASS** (fichiers ciblés) ; PG dispatch **8 PASS** incl. T-04 ACK-lost ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
| Push projet / PR / merge | **NONE** |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-INTEGRATION-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Sécurisation et convergence du parcours gouverné |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV — migrations `017`+`018` sur `sfia_next_dev` et `sfia_next_e2e` ; RECETTE inchangée |
| Contenu | P0-01 CAS dispatch ; P0-02 workspace confinement ; P0-03 B1 detached until isolation proven ; P1 reversibility/READY/handoff provenance ; parcours `CursorRealizationSurface` ; activité C1 producer ; Figma L1 metadata |
| Tests | Unit ML5 **29 PASS** ; PG dispatch **7 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
| Push projet / PR / merge | **NONE** |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** (parcours raccordé DEV ; P0 adressés ; F2/LIVE ouverts) |

## delivery_id: DELIV-2026-11-23-ML5-INTEGRATED-DELIVERY-SLICE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cognition transverse + réalisation Cursor |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV only — migration `017` sur `sfia_next_dev` ; RECETTE non touchée |
| Contenu | Contrats techniques, tentatives `CURSOR_EXECUTION`, SDK SCRIPTED/LIVE adapter, handoff D8, activité C1, web sanitize/B1 gated, UI ContractViewer/Bilan, L0 Figma page 12 |
| Tests | Vitest unit ML5 **17 PASS** (DETERMINISTIC) |
| Preuves manquantes | LIVE SDK, LIVE web non-exfil, BROWSER F2 page 12, REAL GitHub, parcours UI câblé projet |
| Push projet / PR / merge | **NONE** (mandat) |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-POSTMERGE-CI

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | E08 — intégration Git vérifiée |
| Type | Sortie post-merge factuelle · **NO RELEASE** |
| GO | Morris : merge autorisé distinctement, HEAD `f11de65f98c3a0429e45c9f2c3935633840aec12` avec réserves et correctif runtime post-RECETTE |
| PR | [#690](https://github.com/mcleland147/sfia-workspace/pull/690) MERGED |
| Main avant | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Main après / merge | `8620b08bfe86fdf92af0c02756ee980f60964490` (parents : `a12f89a15…` et `f11de65f…`) |
| Tree intégré | `8786e7d39d2653fdad78d65e41c062b4b09b6e2e` |
| CI PR | [#45036729361](https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361) **SUCCESS** |
| CI post-merge | [#45039130531](https://github.com/mcleland147/sfia-workspace/actions/runs/45039130531) **SUCCESS** sur SHA de merge exact |
| Revue | `sfia/review-handoff@84309eb719280d1551e84f1f531ccc442b2c4c88` · blob `53fa6bf2c7621dbba00bcb021eecfc6dc2e6ca5b` |
| RECETTE | SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` / BUILD `2uHrYBsQUvf6aii40hMpj` **inchangés** |
| Runtime post-RECETTE | Correctif deep-link `documentId` dans `page.tsx` intégré après UAT ; CI PASS, nouveau build RECETTE non accepté |
| Réserves | MERGE REAL / Nora LIVE merge NOT PROVEN, WRITE-07, PREVIEW PARTIAL, audit D6/D7/D8 REAL partiel, règles GitHub incomplètement observées, R6 non effectué |
| Gates | Gate C OPEN ; NO RELEASE ; STABLE NOT AVAILABLE ; E08 NOT ADOPTED |
| Verdict | **E08 MERGED — POST-MERGE CI VERIFIED — WITH DOCUMENTED RESERVES** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CI-STABILIZATION-PR690

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — stabilisation CI PR #690 |
| Type | CORRECTIF · STANDARD · **NO RELEASE** |
| Fixes | (A) E2E git-surface preview avant detach · (B) race deep-link `documentId` vs `load()` URL normalize |
| Runtime | `page.tsx` — `pendingDocumentOpenIdRef` + préservation documentId à la normalisation |
| Tests | ensemble08-git-surface · g4-b1-b4-correctifs |
| Preuves locales | Playwright **109 PASS / 5 SKIPPED** · RECETTE inchangée |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQ` — runtime correctif **postérieur** au build accepté |
| Push | PR #690 only |
| Merge | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOC-ALIGN-D2-PR-PUBLICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — alignement documentaire D2 + push + création PR (cycle 7) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| GO Morris | Alignement des 3 docs approuvés · sync refs · commit · push branche · PR unique vers `main` · L3 ; **pas** merge / post-merge / STABLE / release |
| Source docs | `docs/next-ensemble08-consolidation-20261122` @ `1479b3d31354f495398bca008a2b511131eb9662` |
| Blobs | A `5d52aa62…` · B `32e3de32…` · C `bd06957b…` |
| Code | **INCHANGÉ** — `web/` `77c89ed84546b3bfb0356164416c04eac26ed229` = SOURCE `10128bdb` |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` · ml4d-ux004 |
| Merge PR | **NONE** ce cycle |
| Verdict cible | `E08 PR OPEN — READY FOR CI AND CHATGPT REVIEW — WITH DOCUMENTED RESERVES` |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-PR-READINESS-DOC-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 13:34 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — consolidation documentaire + PR readiness (cycle 13) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| Base code recettée | SOURCE `10128bdb` · TREE `be778f1b` · BUILD `2uHrYBsQUvf6aii40hMpj` |
| Travail | Intégration PV exact depuis `docs/next-git-recette-20261122` · sections d'exécution datées sur contrats · sync as-built / provenance · **aucun changement `web/`** |
| Addenda ChatGPT (statut **à cette date**) | AWAITING Morris D2 — non intégrés comme normatifs |
| Correction ultérieure | Voir `DELIV-2026-11-22-ENSEMBLE08-DOC-ALIGN-D2-PR-PUBLICATION` — D2 obtenu ; blobs canoniques `1479b3d…` |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` · ml4d-ux004 |
| Push projet / PR / merge | **NONE** (à cette date) |
| Verdict cible | `READY FOR PR WITH RESERVES — MORRIS GATE REQUIRED` (D2 addenda + GO push/PR) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE candidat merge documentaire corrigé |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| SOURCE | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
| BUILD | `2uHrYBsQUvf6aii40hMpj` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` · `http://127.0.0.1:3200` |
| Prior preview | `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` (préservé hors service) |
| Handoff | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
| MERGE REAL | **NOT PROVEN** |
| Verdict | `RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED` |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-CORRECTED

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 13:02 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correction revue merge documentaire REAL (DEV) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| Base candidat | `a087051a` / `7274dcc0` |
| Fix | fail-closed mode UNKNOWN · reconcile provenance · D8 headSha source préservé · SCRIPTED cible seule |
| Preuves | PG documentary-merge-corrections **8/8** · conversation-merge-security **5/5** · unit contract/sha/authority/preview · tsc PASS |
| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` |
| Mutation GitHub REAL | **NONE** — **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **READY FOR CHATGPT REVIEW — E08 DOCUMENTARY REAL MERGE CORRECTED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 12:53 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fusion documentaire GitHub REAL gouvernée via Nora (DEV) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| AS-IS | Chaîne Nora→D6→D7→D9 merge déjà présente ; gaps reconcile `headSha`, pas de `effectProviderMode` merge, éligibilité GitHub insuffisante, SCRIPTED réutilisait HEAD |
| Fix | `MergePlan.effectProviderMode` · reconcile merge_commit_sha + ML4-REC-01 · eligibility clean · SCRIPTED merge SHA distinct · vue MERGE corrélée |
| Preuves | unit documentary-merge-contract + merge-sha + authority · PG conversation-merge-security · git-collaboration B3/T20 slice · tsc PASS |
| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` · ml4d-ux004 |
| Mutation GitHub REAL | **NONE** — merge REAL **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **DEVELOPMENT COMPLETE WITH RESERVES — REAL MERGE NOT YET PROVEN** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UNIVERSAL-PREVIEW-FALLBACK

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 12:16 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — visionneuse Git : aperçu indisponible universel (Figma 11.17) |
| Type | EVOL · STANDARD · **NO RELEASE** |
| Principe | Rendu selon capacité effective — **pas** liste fermée de suffixes |
| AS-IS | binary/too_large → throw 415/413 sans provenance UI |
| Fix | `readGitFile` retourne `preview` + `openUrl` ; UI `GitPreviewUnavailable` ; erreurs Git distinctes |
| Preuves | unit git-preview **7** + suites git ciblées PASS · tsc PASS · e2e PREVIEW UI PASS · captures DEV |
| RECETTE | **INCHANGÉE** `24a8fa9e` / `qCQGWLYYGb0ZCA4BLfzBi` |
| Cutover | **NONE** — GO Morris distinct |
| Push projet / mutation GitHub | **NONE** |
| Verdict | **READY FOR CHATGPT REVIEW — E08 GIT UNIVERSAL PREVIEW FALLBACK** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 11:32 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE correctif mandat WRITE (branche explicite) |
| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD_ID | `qCQGWLYYGb0ZCA4BLfzBi` |
| Avant | `@7115e932` / `OwQrOGhC9rwk_Dtj31OcM` |
| Après | HTTP `<!--qCQGWLYYGb0ZCA4BLfzBi-->` · ml4d-ux004 |
| Backup | `ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` + restore PASS |
| Rollback | prêt vers `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` (non exercé) |
| DB | préservée · métriques stables · PR#19/#20 intactes |
| Rebuild | **NONE** |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — E08 WRITE MANDATE CORRECTIVE SERVED — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-BRANCH

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 11:30 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correctif mandat publication : branche explicite |
| Type | INC / QA · CRITICAL · **NO RELEASE** |
| Cause | `preparePublication` substituait toujours un hash correlation ; regex « Branche à créer » incomplète |
| Fix | `resolvePublicationBranchName` + wiring mission/D6 guards |
| Incident | CampusFlow R12 · `efx_d8f8e550…` · PR#20 (historique inchangé) |
| Preuves | unit **848/848** · PG accept01 **11/11** · tsc PASS |
| RECETTE | cutover **EXECUTED** — voir DELIV-…-WRITE-MANDATE-CUTOVER |
| Cutover | **EXECUTED** |
| Push projet / mutation GitHub | **NONE** |
| STABLE | NOT AVAILABLE |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CORRECTIVE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 10:06 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE build correctif Git READ |
| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
| Avant | `@79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
| Après | HTTP `<!--OwQrOGhC9rwk_Dtj31OcM-->` · ml4d-ux004 |
| Backup | `ml4d-e08-pre-corrective-cutover-20261122T090524Z-from-79188f6c.sql.gz` + restore PASS |
| DB | préservée · métriques stables · PR#19 intact |
| Rebuild | **NONE** |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 09:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correctif revue ChatGPT (handoff `84b524de`) |
| Type | INC / QA · CRITICAL · **NO RELEASE** |
| Écart A | Budget partagé : un objet `createSharedToolBudget` (D4+history calls · Git calls · chars) |
| Écart B | `compareCommitsRemote` : SHA head vérifié si `commits[]` vide |
| Écart C | `fetchCommitStatusRemote` : dual 403 → ACCESS_DENIED pour `withReadToken` |
| Preuves | unit **840/840** · corrective **16/16** · PG accept01 **11/11** · tsc PASS |
| RECETTE | cutover **EXECUTED** — voir DELIV-…-CORRECTIVE-CUTOVER |
| Cutover | **EXECUTED** |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 09:35 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fiabilisation Git READ (réserves UAT) |
| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
| R-READ-03 | Budget Git séparé (`maxGitToolCalls`) — cause TEST_BOUNDARY partagé |
| R-READ-02 | `read_git_commit` + `compare_git_refs` |
| R-READ-01 | `read_git_commit_status` ; protections/rulesets **DENIED** explicite |
| Preuves | unit **824/824** · PG accept01 **11/11** · tsc PASS |
| RECETTE | **INCHANGÉE** `79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
| Cutover | **NONE** — candidat local à figer ; GO cutover ultérieur |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-AUDIT-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 08:38 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE audit capacités GitHub |
| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` |
| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
| Avant | `@c67a6ba8` / `tEiDqhhGWNipSWO_86ZoG` |
| Après | HTTP `<!--hLsmHa3uFYP0PgRtj49Bh-->` · ml4d-ux004 |
| Backup | `ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz` + restore PASS |
| DB | préservée · métriques stables · PR#19 intact |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CAPABILITY-AUDIT

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 08:30 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — audit exhaustif + fiabilisation capacités GitHub |
| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
| Gaps P0 | list/find PR ; fichiers PR ; permissions sources ; token parity READ PR |
| Fix | `list_git_pull_requests` · `list_git_pull_request_files` · permissions · `withReadToken` |
| Preuves | unit policy/tools/scripted · gh REAL READ PR#19 · matrice A–G |
| REAL WRITE / merge | **NOT** (gates ouverts) |
| Cutover | **EXECUTED** — voir DELIV-…-GIT-AUDIT-CUTOVER |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UAT-PR-READ

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 08:15 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — GIT-UAT-01 PR READ + bandeau tour |
| Type | INC / QA · CRITICAL · **NO RELEASE** |
| Cause A | `TOOL_NOT_EXPOSED` — D9 `getPullRequest` non outillé Nora |
| Cause B | UI `activity=error` sur turn `UNKNOWN` (qual UNAVAILABLE) avec copy « tentative/réconciliez » |
| Fix | `read_git_pull_request` + allowlist + banner copy |
| Preuves | unit policy/tools/banner/scripted PR read · tsc · REAL READ oracle PR#19 (gh) |
| Cutover | **NOT EXECUTED** — CANDIDATE FROZEN · RECETTE GO REQUIRED |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CHAIN-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:45 CET (Europe/Paris) |
| SOURCE_SHA | `c67a6ba8bde5c4d818a23fe96d2822a22c050121` |
| TREE | `f54c0aff60af9e47f2f4a181a9d1dcfa75519a95` |
| BUILD_ID | `tEiDqhhGWNipSWO_86ZoG` |
| Avant | `@0b5d6c74` / `RSccgxDslwxMhjjTtFo4Z` |
| Après | HTTP `<!--tEiDqhhGWNipSWO_86ZoG-->` · ml4d-ux004 |
| DB | préservée · attempt PR#19 intact |
| Backup | `ml4d-e08-pre-chain-cutover-20261122T064246Z-from-0b5d6c74.sql.gz` + restore PASS |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CHAIN-FIABILISATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:45 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fiabilisation chaîne Git Nora↔Studio↔GitHub |
| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
| Oracle | PR #19 chantiers360 · attempt `efx_cf6763da…` · mission `turn-67d643cc…` |
| Cause | restitution COMPLETED sparse ; follow-up sans faits D8 ; READ main mal contextualisé |
| Fix | hydrate view depuis D7/D8 · terminalFacts path/SHA/PR/liens · snippets owner · toolScope resume |
| Preuves | unit restitution+view · PG accept01 enrichi · REAL READ PR#19/blob/main-404 |
| REAL E2E mutation | **NOT** (aucune nouvelle mutation Cursor) |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-UAT-GIT-PUB-01-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:11 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — UAT-GIT-PUB-01 cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` |
| TREE | `bf3a60b3b928803292120364fcbdda5833c9e667` |
| BUILD_ID | `RSccgxDslwxMhjjTtFo4Z` |
| Avant | `@f1907aad` / `zKGLfPHM1TMilec4qglJv` |
| Après | servi HTTP `<!--RSccgxDslwxMhjjTtFo4Z-->` · service `ml4d-ux004` |
| DB | préservée · `projects=26 messages=649 documents=117` |
| Backup | `ml4d-e08-pre-pub01-cutover-20261122T061040Z-from-f1907aad.sql.gz` + restore proof PASS |
| WRITE REAL | ON documentary · allowlist `mcleland147/chantiers360` · **E2E REAL NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** (PUB-01..05) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-UAT-GIT-PUB-01

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:10 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — UAT-GIT-PUB-01 publication conversationnelle |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Cause | `MISSION_NOT_RESUMED` / S05 self-block sur clarification → `NOT_ATTEMPTED` (zéro `effect_attempts`) ; root `.md` → `MARKDOWN_OUTSIDE_DOCUMENTARY_ZONE` |
| Fix | `isPublicationPathClarificationResume` + skip S05 self-block · `DOCUMENTARY_ROOT` · D6 `missionClientIntentKey` ≠ turn key |
| Diagnostic | cause racine continuité S05 + path policy ; `DISPATCH_NOT_TRIGGERED` = conséquence |
| Preuves | unit clarification+path-policy · PG accept01 (11) SCRIPTED COMPLETED · PW E08 Nora 2/2 |
| SOURCE_SHA | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` (fix `e78dae5e` + tests) |
| TREE | `bf3a60b3b928803292120364fcbdda5833c9e667` |
| BUILD_ID | `RSccgxDslwxMhjjTtFo4Z` |
| REAL E2E | **NOT PROVEN** — UAT Morris sur RECETTE |
| Push projet | **NONE** |


## delivery_id: DELIV-2026-11-22-ENSEMBLE08-FINALISATION-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 06:12 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — FINALISATION cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| TREE | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| BUILD_ID | `zKGLfPHM1TMilec4qglJv` |
| Avant | `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` |
| Après | servi HTTP `<!--zKGLfPHM1TMilec4qglJv-->` · service `ml4d-ux004` |
| DB | préservée · inventaire projects=26 messages=641 · Equip'Campus présent |
| Backup | `ml4d-e08-pre-final-cutover-20261122T051131Z-from-9f346391.sql.gz` + restore proof PASS |
| WRITE REAL | OFF · NOT PROVEN |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-FINALISATION-UX-REAL-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 06:10 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — FINALISATION 11.06 G5 + GitHub REAL WRITE policy + RECETTE |
| Type | EVOL / QA / RECETTE · CRITICAL · **NO RELEASE** |
| UX | panneaux 610px · y≈293 · banner 44 · F2 ≤2 — `finalisation-11.06-g5-matrix.md` |
| REAL | `GITHUB_APP_WRITE_ALLOWED_REPOS` ⊂ READ ; gate documentary+WRITE ; mutations OFF RECETTE |
| REAL WRITE mutation | **NOT PROVEN** — STOP sandbox/GO |
| Preuves | unit 806 · PG 538 · PW 11.06 3/3 · tsc PASS |
| Push projet | **NONE** |
| Verdict | voir manifeste section D + Review Pack (cutover si gates OK) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-02-INTEGRATIONS-UX

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 05:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 02 Intégrations UX 11.06 |
| Type | EVOL / UI CONFORMANCE · STANDARD · **NO RELEASE** |
| Figma | `itgvCulInEnFY6DvgIegvP` node `1095:339` · PNG SHA256 `d50412ed…` |
| Blast | IntegrationsPanel · tokens 11.06 · StudioShell nav active · tests · evidence |
| D6–D9 / OAuth / WRITE | **NO CHANGE** |
| RECETTE | **préservée** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` — aucun cutover |
| Preuves | unit 4 PASS · Playwright 3 PASS · F2 rail/contenu/panneaux/boutons ≤2px · styles bandeau |
| Push projet | **NONE** |
| Verdict | **DELIVERY READY — G5 PROVEN** (11.06 rectangles stables ; UAT Morris distinct) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 04:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| GO Morris | SHA `9f346391…` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Avant | `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
| Après | servi HTTP `<!--F85QQBTLa8nq5zKYxMKKZ-->` · service `ml4d-ux004` |
| DB | `sfia_next_recette_ml4` préservée · inventaire identique · Equip'Campus présent |
| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` + restore proof PASS |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 04:33 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 freeze local candidat |
| Type | EVOL / QA / FREEZE CANDIDAT · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Parent | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Artefact | `…/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/…/web/.next` |
| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** (à ce stade) |
| Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
| Push projet | **NONE** |
| Cutover | traité ensuite — voir `…-RECETTE-CUTOVER` |
| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** (historique freeze) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 clôture écarts publication Nora |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
| P0 | réconciliation `objectRef`/`documentHint` (conflit → AMBIGUOUS, zéro effet) |
| P1 | `NOT_ATTEMPTED` si intention sans effet ; reprise COMPLETED = restitution métier |
| Preuves | PG WRITE OFF zéro mutation · PG SCRIPTED E2E · Playwright Nora DEV (voir pack) |
| Push projet | **NONE** |
| Cutover | **NOT EXECUTED** |
| Verdict | DELIVERY READY WITH RESERVES (A/B/C traitées au freeze) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 convergence finale (doc/rév · Nora · UX) |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
| P0 | explicite > focus/same-turn ; `confirmPublicationDocumentWithD4` avant D7 |
| P1 | restitution Nora mono-état (pas de narratif contradictoire) |
| P2 | Infos a11y/focus ; Intégrations 11.06 structure |
| Tests | unit PASS · PG `publication-target-post-uat` + accept01 PASS · Playwright DEV (voir pack) |
| Push projet | **NONE** |
| Cutover | **NOT EXECUTED** |
| Verdict | (voir Review Pack final) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — correctif post-UAT 01 (publication Nora + UX) |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
| Diagnostic UAT | Classe **A/B** (+ **C** si path exécuté) : intention reconnue, hedge LLM, **zéro** `effect_attempt` 2026-11-22 ; gate historique `documentEffectForAck.status===AVAILABLE` bloquait publish-existing |
| Correctifs | publish-existing + WRITE-off restitution Nora ; chrome hero unique ; microcopy ; Infos popover ; Intégrations 11.06 structure |
| Tests | unit restitution/target + tsc PASS ; PG/Playwright LIVE **non** déclarés équivalents SCRIPTED |
| Push projet | **NONE** |
| Cutover RECETTE | **NOT EXECUTED** — GO Morris SHA-specific requis |
| Verdict | **DELIVERY READY WITH RESERVES** (G5 Figma runtime + WRITE sandbox hors mandat) |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-21 ≈ 21:02 CET |
| Macro-lot | Ensemble 08 — cutover RECETTE existante E07 |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| GO Morris | SHA `98185598` · BUILD `1xEbvCdTAX6ht262w4oKF` |
| Avant | E07 `@5ad8fa57` / `BtZP6qDx5oAw8jwPQSEhc` |
| Après | E08 servi HTTP `<!--1xEbvCdTAX6ht262w4oKF-->` · service `ml4d-ux004` |
| DB | `sfia_next_recette_ml4` préservée · projects 26 inchangé · +sessions/messages smoke |
| Backup | immédiat + restore proof isolée PASS |
| Playwright SCRIPTED on RECETTE | 3 FAIL (attendu LIVE/REAL) |
| Smoke API/surfaces | PASS (Pilot A test login) |
| G5 | NOT PROVEN — Morris UAT |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CANDIDATE-FREEZE-RECETTE-PREP

| Field | Value |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Macro-lot | Ensemble 08 — freeze candidat + préparation évolution RECETTE E07 |
| Type | EVOL / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `19bd0099` |
| Candidate SHA | `010d59ddc9201a1a3afcf58083da3df91f97a30f` |
| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
| Build worktree | `sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| RECETTE runtime observé | E07 `@5ad8fa57` · BUILD `BtZP6qDx5oAw8jwPQSEhc` · port 3200 · DB `sfia_next_recette_ml4` préservée |
| Backup PG | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` |
| Cutover | **NOT EXECUTED** — GO SHA-specific requis |
| Matrice A/B/S | Totaux corrigés 12 / 17 / 10 / 2 (=41) |
| Push projet | **NONE** |
| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-TECHNICAL-EXIT-RECETTE-PREFLIGHT

| Field | Value |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Macro-lot | Ensemble 08 — finalisation technique et préparation RECETTE |
| Type | EVOL CORRECTIF / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| HEAD | `a12f89a1` (worktree dirty — candidate SHA **NOT AVAILABLE**) |
| Prior handoff | `6492013e` |
| E08-S03 | Fermé : `incompleteCoverage`/`matchedCount` au niveau fournisseur (REAL+SCRIPTED) ; plus de complete=true après troncature silencieuse |
| Matrice A/B/S | 41/41 qualifiés (`matrice-couverture-acceptation-a-b-s.md`) |
| ENV-01 | Préflight only (`env01-recette-preflight.md`) — pas de déploiement |
| Tests | `git-refs-coverage-s03` 19 PASS · tsc PASS · suites E08 ciblées (voir pack) |
| Nora LIVE | **NOT PROVEN** |
| GitHub REAL WRITE/MERGE | **NOT PROVEN** / hors mandat |
| G5 | **NOT PROVEN** — différé RECETTE Morris |
| Revue / handoff | Review Pack FULL + L3 publish-in-cycle |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-EXIT-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — sortie conformité résiduelle et preuves |
| Type | EVOL CORRECTIF / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `08927c38` |
| E08-S01 | conditions ouvertes → CONDITION_OPEN, zéro effet |
| E08-S02 | routage via qual durable ; plus de gate verb-list obligatoire |
| E08-S03 | recherche branche `refPrefix` + résolution exacte |
| E08-S04 | `prStatusKind` / label historique honnête |
| E08-S05 | Review Pack = contenu final exact (empreintes) |
| G5 | à qualifier runtime / sinon NOT PROVEN |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-FINAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — convergence finale (Nora/merge, Git contracts, UX Figma, preuves) |
| Type | EVOL / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `37c0dc81` |
| A1–A3 | qualification merge durable `d7.merge_publication` · cible dépôt+PR · contradiction same-PR fail-closed |
| B1–B5 | `normalizeGitReadPath` · refs `incompleteCoverage` · binaire non rendu · projection MERGE via tentative distincte |
| C1–C3 | publications 30/70 · détails agrandis · confirmation déconnexion 11.07 |
| Tests | unit merge/path/pubs PASS · PG merge-security **3/3 PASS** · tsc PASS |
| G5 Figma runtime | **NOT PROVEN** (pas de captures navigateur F2 ce cycle) |
| GitHub REAL mutation | **NOT PROVEN** / hors mandat |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-MERGE-AUTHORITY-SECURITY

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — correctif CRITICAL sécurisation merge conversationnel |
| Type | CORRECTIVE / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `eebaeeda` |
| P0-M01 | négation/hypothèse → aucun prepare/authorize/dispatch |
| P0-M02 | PR explicite liée à publication documentaire exacte (pas latest) |
| P0-M03 | HumanDecision merge + conversationalProvenance liée au plan |
| Tests | unit merge guards PASS · PG conversation-merge-security **3/3 PASS** |
| REAL mutation | **NOT PROVEN** / hors mandat |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CORRECTIVE-P0P1-G5-REAL

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — cycle correctif intégré (P0/P1, Nora merge, Figma L2, Playwright, REAL allowlist) |
| Type | CORRECTIVE / CRITICAL · **NO RELEASE** · Gate C OPEN |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` (local only) |
| Prior handoff | `74528b81` (FULL §7.2) — pack mono-cycle réinitialisé puis republier |
| P0 | branch hint « du/de » · merge SHA ≠ HEAD · provenance USER persistée |
| P1 | stale async · attach explicite · truncation >200 AMBIGUOUS · pubs D8 non-live |
| Nora | refuse → no PREPARED · `admitConversationalMergeMandate` |
| REAL multi-repo | allowlist `GITHUB_APP_ALLOWED_REPOS` (owner-bound, no allow-all) |
| Figma | L2 11.03 metadata · G5 runtime **NOT PROVEN** |
| Tests | unit **743 PASS** · mission-continuity PG **10 PASS** · git-collaboration PG **93 PASS** · Playwright E08 surface **2 PASS SCRIPTED** · tsc/build PASS |
| REAL mutation | **NOT PROVEN** (pas de GO sandbox) |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-GIT-PUBLICATIONS-NORA

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — Dépôts Git, publications, conduite Nora |
| Type | EVOL / Delivery CRITICAL · **NO RELEASE** · Gate C OPEN |
| Base | `origin/main` `a12f89a1` (annoncé `1dd1a8ec` +2 : Journal nav PR #689) |
| Branche | `feat/next-ensemble08-git-publications-nora` (local only — **no project push**) |
| Capacité A | tree API · publications projection · `GitRepositoriesSurface` · multi-liens |
| Capacité B | mandat conversationnel D6 → `authorizePublication` · `list_git_directory` Nora |
| Merge REAL | code path documentary + SHA (non exercé END-TO-END REAL ce cycle) |
| Figma | L0/L1 + PNG SHA page 11 · G5 runtime **NOT PROVEN** |
| Tests | unit 725 PASS · mission-continuity PG 10 PASS · git-collaboration filtré 24 PASS · build PASS |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** — supersédé par cycle correctif ci-dessus |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-PR687-SAS06-RESPONSIVE-CI

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — remédiation CI PR #687 · SAS06 responsive |
| Type | CORRECTIVE / QA / CI / GIT · **NO RELEASE** · Gate C OPEN |
| Parent tip avant correctif | `8b256c72…` (run CI `44902434109` **CANCELLED** Morris — non FAIL fonctionnel) |
| Cause | CTA « Accéder » hors viewport @1280×720 ; `min(124px,8vh)` dérivait aussi le padding desktop (−46px @970h) |
| Correctif | `clamp(16px, calc(100vh − 726px − 24px), 124px)` + carte 702×726 avec `maxHeight` ; overlay/card scrollables |
| Preuves locales | `sas06-responsive-viewports` 2 PASS · `g4-b1-b4` PASS · `ensemble04-cp01-cp02` PASS · tsc PASS |
| F2 desktop | padTop 124 · card 702×726 · tol ≤2 @1680×970 |
| Push | branche `sfia/next-ensemble07-git-integration` · PR #687 |
| RECETTE / UX 11/11 | **non mutés** · UAT `5ad8fa57` reste ancêtre |
| Follow-up | d2-ack sans popup ACK-lost · PilotagePanel E2E-only (`NEXT_PUBLIC_STUDIO_E2E`) · ml3/journal/CR-02 prouvés localement |
| CI final | run `44908228223` · HEAD `957737c3` · Playwright + Required Gate **SUCCESS** |
| Verdict | **ENSEMBLE 07 — PR #687 CI GREEN — SAS06 RESPONSIVE VERIFIED — DOCUMENTATION ALIGNED — READY FOR INDEPENDENT MERGE REVIEW** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-ACQUIS-PANELS-50-50

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — correctif final UX Acquis / À clarifier 50/50 + RECETTE |
| Type | CORRECTIVE / UX / QA / RECETTE · **NO RELEASE** · Gate C OPEN |
| Parent | `09a935bc…` / tree `5809a0bb…` |
| Propriétaire | `TrajectoryBoard` row `trajectory-cycle-knowledge-row` — `minmax(0,640fr) minmax(0,646fr)` + gap 24 · `min-w-0` · wrap |
| F2 | 09.02 / 09.09 · acquis≈639 / clarifier≈645 / gap 24 · tol≤2 · preuves `.tmp-sfia-review/ensemble07-acquis-panels-fix/` |
| UAT Morris | Acceptation 21/11 avec réserve unique ; réserve **techniquement levée** après F2 + RECETTE |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED — RECETTE UPDATED — READY FOR GIT INTEGRATION REVIEW** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-PAGE10-EXPERIMENT

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — Page 10 Figma expérimentation → Runtime → RECETTE |
| Type | EVOL / UX / QA / DEPLOY · **NO RELEASE** · Gate C OPEN |
| Parent | `ce03f5a7…` / tree `bd9077d5…` |
| Methodo | v1.1 `@ a4516496` blob `3efe8807` (docs branch, non mergée main) |
| Figma | Page 10 `1069:100` · 11 frames · shell instance `1073:2` |
| Preuves | `.tmp-sfia-review/ensemble07-page10-experiment/` |
| F2 critiques | **40/40 PASS** (Δ0) · 09.10 analyzing **exercé** (HOLD DEV) |
| UX | Acquis/À clarifier toujours présents · suite envisagée = forecast · markers SVG |
| Tests | unit 34 PASS · PG E07 15 PASS · tsc PASS · build PASS |
| RECETTE | bascule LaunchAgent `ml4d-ux004` (voir handoff) |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — FIGMA PAGE 10 / RUNTIME ALIGNED — 11/11 VERIFIED — RECETTE DEPLOYED — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — Cycle 8 final Figma→Runtime + deploy RECETTE |
| Type | EVOL / UX / CORRECTIVE / DELIVERY / DEPLOY · **NO RELEASE** · Gate C OPEN |
| Parent | `c500df9c…` / tree `3794e344…` |
| Layout | shell `data-project-figma-layout` · header 70 · hero Figma native · y panels **287** |
| CKI | editorial corpus + display objectif métier (pas instruction OPEN) |
| SAS06 | modal 702×726 + SVG natifs `public/figma/sas06/` |
| F2 | 13/13 examinés · panneaux critiques 09.01/05/06/11 w/h/y ≤2 px |
| Tests | unit 31 PASS · PG E07 15 PASS · tsc PASS · build PASS |
| RECETTE | bascule LaunchAgent `ml4d-ux004` vers candidat final (voir handoff) |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — FIGMA/RUNTIME QUALIFIED — CORRECTED CANDIDATE DEPLOYED TO RECETTE — TECHNICAL SMOKE PASS — MORRIS FINAL UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — Cycle 8 convergence UX Figma → Runtime (intermédiaire) |
| Type | EVOL / UX / CORRECTIVE · **NO RELEASE** · Gate C OPEN |
| Parent gel | `c500df9c…` / tree `3794e344…` (arbre local modifié) |
| Verdict | **FIGMA TO RUNTIME PARTIAL** — supersédé par FINAL |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-LOCAL-GIT-FREEZE-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — gel Git local du correctif continuité (post-QA concurrence) |
| Type | INC / gel candidat DEV · **NO RELEASE** · Gate C OPEN |
| Parent | `6ecdb987ee867a04ff816b699eb8870ac200db0a` (RECETTE figée immuable) |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| QA-FINAL-01 | Course GET A/B : barrières + marqueurs ; rail URL effect appelle `refreshDurablePilotage` |
| Tests gel | tsc PASS · unit **706** · PG **525** · browser continuity **7** · parcours-af **7 PASS / 2 SKIP** · build PASS |
| LIVE / RECETTE | NOT RUN / non mutée (`:3200` HTTP 200 RO) |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — LOCAL GIT CANDIDATE FROZEN — MORRIS RECETTE GATE REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FINAL-QA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — consolidation QA finale avant gel Git |
| Type | INC / QA corrective · **NO RELEASE** · Gate C OPEN |
| QA-01 | Guard `shouldApplyDurableRefresh` **avant** setState ; Playwright race stale GET |
| QA-02 | CKI UI strict (`trajectory-cki-id` / absent) ; matrice Trajectoire n'occulte plus le parcours si ACTIVE |
| QA-03 | Second OPEN corrélé au tour assistant (messageId ↔ turnProjection.pilotageEffect) |
| CONFLICT/UNKNOWN | UNIT DETERMINISTIC ; BROWSER NOT RUN (déclaré) |
| Tests | unit 706 PASS · PG 525 PASS · browser continuity 7 PASS · parcours-af 7/2 · build PASS |
| Verdict | **ENSEMBLE 07 — DEV FINAL QA QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-BROWSER-CONTINUITY-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — qualification navigateur du correctif continuité pilotage |
| Type | INC / QA incrément · **NO RELEASE** · Gate C OPEN |
| Worktree | même arbre DEV local non commité · parent RECETTE `6ecdb987` |
| Preuves | BROWSER-01…06 Playwright `:3101` / `sfia_next_e2e` · fixture `cycleType=cadrage` · captures `.tmp-sfia-review/ensemble07-browser-evidence/` |
| Correctifs QA | `listTurnProjections` expose `pilotageEffect` · `refreshDurablePilotage` recharge projection complète |
| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · browser continuity 6 PASS · LIVE NOT RUN |
| RECETTE | non mutée |
| Verdict | **ENSEMBLE 07 — DEV BROWSER QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-GOVERNED-PILOTAGE-CONTINUITY-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — continuité du pilotage gouverné (correctif post-UAT Equip'Campus) |
| Type | INC / correctif fonctionnel intégré · **NO RELEASE** · Gate C OPEN |
| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` · HEAD parent figé RECETTE `6ecdb987` (arbre DEV non commité) |
| IN | UAT-10 normalize cycleType · UAT-11 restitution post-effet · UAT-08/09 catalogue Nora · UAT-02 filtre messages techniques · UAT-12 sync surfaces · UAT-06 taxonomie concernée |
| OUT | Figma polish · mutation RECETTE · push projet · LIVE fournisseur · migration DB |
| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · OPEN `cadrage`→CADRAGE PG PROVEN · LIVE NOT RUN — GATE REQUIRED |
| RECETTE | inchangée (`:3200` / BUILD `armX_D1HJzN6q-4MuDpYv` / SHA `6ecdb987`) |
| Verdict | **ENSEMBLE 07 — DEV CORRECTIVE QUALIFIED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |


## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FUNCTIONAL-STABILIZATION-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 07 — stabilisation fonctionnelle/technique avant RECETTE |
| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
| P0 | P0-01 fence D5 in-TX · P0-02 resume assistantContent · P0-04 legacy expected flag (016) · P0-05 ensure-before-continue |
| FIX | FIX-04 fingerprint · FIX-07 validateStructuredForecast · FIX-08 RETAIN resolve PROPOSED · FIX-11 docs SAVING |
| Tests | PG 15 PASS · unit E07 10 PASS · tsc PASS · ml3 smoke PASS · E2E browser NOT RUN this cycle |
| UX | **GELÉ** — revue visuelle Morris en RECETTE (hors mandat) |
| Réserves | LIVE Nora NOT PROVEN · GO browser E2E NOT PROVEN · FIX-03 pas de worker autonome · full suite E2E/build NOT RUN |
| Verdict | **DEV STABILIZED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |


## delivery_id: DELIV-2026-11-20-ENSEMBLE07-HIGH-FIDELITY-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 07 — haute fidélité + P0 fencing TOCTOU |
| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
| P0 | FIX-01 fencing write-point · FIX-02 message identity · FIX-05 missing-op lock · SAS modal capture |
| Tests | PG 12 PASS · unit 7 PASS |
| UX | FIGMA TO RUNTIME PARTIAL · modal SAS capturée |
| Réserves | LIVE Nora NOT PROVEN · GO convers. browser NOT PROVEN · FIX-03 worker non introduit |
| Verdict | READY WITH GOVERNED RESERVES / FIGMA TO RUNTIME PARTIAL |


## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FINAL-CONVERGENCE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 07 — Projet/Trajectoire convergence finale (3e passe) |
| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` @ `e36fd8b` (non poussée) |
| P0 | COR-01 reopen/missing-op · COR-03 publish order · COR-04 effect fencing · SAS timers 400/900 retirés |
| Preuves | Figma 13/13 refs MCP · runtime captures distinctes 13 états · PG 10 PASS · unit E07 7 PASS |
| Réserves | LIVE Nora NOT PROVEN · GO conversationnel browser NOT PROVEN · UX PARTIAL · SAS popup live capture incomplete |
| Verdict | **READY WITH GOVERNED RESERVES** / **FIGMA TO RUNTIME PARTIAL** |
| Gates non acquis | Gate C, UAT Morris, STABLE, release, push projet |


## delivery_id: DELIV-2026-11-20-ENSEMBLE06-POST-MERGE-CI-VERIFIED

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 06 — Journal V4 + Bibliothèque Documents ; clôture de l'intégration Git |
| Type | Synchronisation documentaire factuelle post-merge · **NO RELEASE** |
| Autorité | Morris : UAT Journal (19/11), UAT Documents et Ensemble 06 (20/11), GO MERGE PR #683, puis GO de synchronisation documentaire |
| PR et merge | [#683](https://github.com/mcleland147/sfia-workspace/pull/683) **MERGED** par merge commit `f3ee3c5e6f1d1f480e8944567bde763c2ad79c0f` sur `main` |
| Parents vérifiés | `d3d199adb782462b93467934f5f1e8a0c98fb492` + `121a2e38081b2ab2b8f42308d35d664dea4e495a` |
| Code UAT et intégrité | `7a13d7deec488bf62881eec11b5658c45c02c5b0` ; `web/src` tree `4e5e87f5af6e16dbacc6f2218c811b6deabe411b` **préservé sur main** |
| CI pré-merge | [Next CI #44722295427](https://github.com/mcleland147/sfia-workspace/actions/runs/44722295427) PASS sur `121a2e38…` : 680 unitaires, 510 PostgreSQL, 83 Playwright FAKE PASS / 3 SKIPPED |
| CI post-merge | [Next CI #44727223721](https://github.com/mcleland147/sfia-workspace/actions/runs/44727223721) **SUCCESS** sur `f3ee3c5e…` (Build/Validate + Required Gate PASS) |
| Review Pack | [Cycle 14 FULL immuable](https://github.com/mcleland147/sfia-workspace/blob/a87e0efd918bb3aef0bd7b38dffc22f558982a6a/sfia-review-handoff/ensemble-06-cycle14-ci-pg-chatgpt-review-FULL.md) ; historique L3 vérifié |
| RECETTE | `http://127.0.0.1:3200` / BUILD `t4pjnrn3wGVHZEjhiw6yH` ; **non promue**, état runtime actuel non inspecté ici |
| Réserves maintenues | DOC-TECH-15/16 ; Journal R-01…R-11 ; J-C13 Option B ; Sas KNOWN GAP ; F2 et Nora LIVE/REAL non exhaustifs |
| Verdict | **GIT INTEGRATION COMPLETE / POST-MERGE CI VERIFIED / UAT MORRIS ACCEPTED WITH GOVERNED RESERVES** |
| Gates non acquis | Gate C, R6, STABLE, release, ADOPTED ; aucun changement produit ou migration dans cette mise à jour documentaire |


## delivery_id: DELIV-2026-11-20-ENSEMBLE06-UAT-GIT-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 06 — consolidation Git après UAT Morris |
| Type | Cycle 13 Critical · Git Integration / Doc · **NO RELEASE** |
| GO Morris | UAT ACCEPTED WITH GOVERNED RESERVES · commit/push branche · Draft PR · **MERGE INTERDIT** |
| Code recetté | `7a13d7deec488bf62881eec11b5658c45c02c5b0` · tree `2bb984969be6597b76baddb7a3c724ef8dcf22fa` · web `e61a98f4…` |
| Tip pré-docs | `aa568cfab37bec1922b2a6886c621dc7d9d37088` · BUILD `t4pjnrn3wGVHZEjhiw6yH` |
| Base main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs | PV UAT blob `e08c7b6c…` · PV Journal `dbc1ba8e…` · contrats/matrices blobs exacts · tip Roadmap 20/11 · as-built combiné |
| Tree web | **inchangé** vs code recetté (doc-only consolidation) |
| RECETTE | `http://127.0.0.1:3200` préservée |
| Réserves | DOC-TECH-15/16 · Journal R-01…R-11 · Sas KNOWN GAP · LIVE/REAL non globale |
| Verdict | voir PR Draft + Review Pack Cycle 13 |

## delivery_id: DELIV-2026-11-20-ENSEMBLE06-JOURNAL-DOCS-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 ~01:30 CET |
| Macro-lot | Ensemble 06 — intégration Bibliothèque Documents dans RECETTE Journal V4 |
| Type | Cycle 08 Delivery / Intégration / Mise en recette · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Continuité Ensemble 06 · même RECETTE `:3200` · Journal V4 accepté + Documents |
| Base Journal | `5f6e2f3860993acd35d176f60e6a7f0ca69d3a3d` |
| Source Documents | WT dirty sur `6516c7b56ec61bd72943ae0d26e625bf21139d4e` (+ P0/F1–F5) |
| Candidate branch | `sfia/next-ensemble06-journal-docs-recette-20261120` (local only) |
| HEAD | `7a13d7deec488bf62881eec11b5658c45c02c5b0` · tree `2bb984969be6597b76baddb7a3c724ef8dcf22fa` · BUILD `yZFSZj_l8dncTBQcWdP4c` |
| Merge | 3-way Journal∩Documents · TAKE_DOCS hors conflit · TravailViewer/NoraConversation fixes intégration |
| DB | `sfia_next_recette_ml4` @:5434 · **aucune migration structurante** · 014 déjà appliquée |
| Backup | `.tmp-sfia-review/recette-backup-20261120T001915Z/` · rollback code → `5f6e2f38` |
| Tests | tsc · unit docs+journal · PG docs+journal · e2e docs 08/nora/p0 · e2e journal-v4-parcours |
| Verdict Cursor | voir manifeste + Review Pack |


## delivery_id: DELIV-2026-11-19-LIVE-PROSE-SOFT-TARGET-2000

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~19:50 CET |
| Macro-lot | Ensemble 05+06 — anti-UNKNOWN schéma LIVE prose |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Soft target (= anciens max) + hard max 2000 sur prose secondaire · cutover RECETTE `:3200` |
| Fix | `LIVE_PROSE_HARD_MAX` · instructions Nora cibles · IDs/labels UI inchangés |
| HEAD | `d3950948` · tree `926c3822` · BUILD `2HWeuv_daXJXjd5PstRO` |
| Parent | notes-2000 `98225104` / BUILD `b48Kw86lEVMh4Ph_sVyZ` |
| Counters | projects=24 · messages=610 · conversations=197 · knowledge_subjects=6 **COUNTERS_OK** |
| Rollback | `ROLLBACK-TO-98225104.sh` + dump `ml4d-e06-journal-20261119-pre-d3950948` |
| Verdict Cursor | cutover PASS |

## delivery_id: DELIV-2026-11-19-NORA-NOTES-2000-UNKNOWN

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~19:35 CET |
| Macro-lot | Ensemble 05+06 — correctif UNKNOWN schema (notes) |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Forensic DEV + fix + cutover RECETTE `:3200` |
| Cause | LIVE Zod `intents.0.parameters.notes` Too big ≤400 sur formalisation décision CampusNova |
| Fix | `notes` max 400→2000 · instruction Nora notes courtes · diag `cause_chain` |
| HEAD | `98225104` · tree `00f6edb1` · BUILD `b48Kw86lEVMh4Ph_sVyZ` |
| Parent | consolidation `02e24e42` / BUILD `7yhVJFP0_Bm4cYc62Bo7` |
| Counters | projects=24 · messages=610 · conversations=197 · knowledge_subjects=6 **COUNTERS_OK** |
| Rollback | `ROLLBACK-TO-02e24e42.sh` + dump `ml4d-e06-journal-20261119-pre-98225104` |
| Verdict Cursor | cutover PASS · UAT Morris = retester prompt décision CampusNova |

## delivery_id: DELIV-2026-11-19-JOURNAL-CONSOLIDATION-V4

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~19:15 CET |
| Macro-lot | Ensemble 06 — Journal V4 dernier correctif consolidation |
| Type | Cycle 8 Delivery Correctif · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Synthèse absente sur sujet existant · densité acquis/synthèse/ouverts · CTA agrandi · sources · focusLock |
| Cause | `writeSubjectSummary` seulement sur intent SUBJECT — ACQUIS seuls n'ouvraient pas de révision |
| Scope | composeSubjectSummaryFromCurrentKnowledge · journal-editorial (client-safe) · bullets + overflow · aside sources · focus suppress sticky · non-stream Nora (héritage) |
| CampusNova | aucune mutation SQL / backfill — synthèse se met à jour à la prochaine capitalisation significative |
| Docs | as-built E06 descriptif · matrice v0.7 lecture seule |
| Verdict Cursor | voir cutover + Review Pack |

## delivery_id: DELIV-2026-11-19-JOURNAL-LIVING-MEMORY-V4

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~18:00 CET |
| Macro-lot | Ensemble 06 — Journal V4 mémoire vivante / provenance / nav / contradictions |
| Type | Cycle 8 Delivery Correctif · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif RECETTE CampusNova (synthèse, acquis, sources, ancrage, contradictions) |
| Parent | `6457bc8e` pending TURN_IN_PROGRESS |
| Scope | synthèse révisable sur sujet existant · supersession acquis · provenance Pilote+Nora · SourceChip Figma · deep-link Journal→Travail prioritaire · heuristique contradictions |
| CampusNova | aucune mutation SQL / backfill / LIVE auto — correctif sur nouvelles contributions + projection |
| Docs | as-built E06 descriptif · matrice v0.7 lecture seule |
| Verdict Cursor | voir cutover + Review Pack |

## delivery_id: DELIV-2026-11-19-PENDING-TURN-IN-PROGRESS

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~17:20 CET |
| Macro-lot | Ensemble 05+06 — correctif reconcile pending |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** |
| GO Morris | Ne plus mémoriser clé orpheline sur TURN_IN_PROGRESS ; recover depuis fil ; cutover RECETTE |
| Parent | `758d2267` knowledgeStatement 5000 |
| Verdict Cursor | voir cutover |

## delivery_id: DELIV-2026-11-19-KNOWLEDGE-STATEMENT-5000

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~17:10 CET |
| Macro-lot | Ensemble 05+06 — correctif UNKNOWN schema |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Plafond `knowledgeStatement` 500→5000 + cutover RECETTE `:3200` |
| Cause | DEV LIVE: `intents.N.parameters.knowledgeStatement` Too big ≤500 |
| Parent | `d3017338` gel E05 / Journal quality |
| Verdict Cursor | voir cutover |

## delivery_id: DELIV-2026-11-19-E05-FREEZE-JOURNAL-QUALITY

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~16:40 CET |
| Macro-lot | Ensemble 05+06 — gel grammaire visuelle + qualité Journal + UNKNOWN forensic |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Bypass E05 (code préservé) · restitution texte · synthèse/acquis/refs/hauteurs · cutover RECETTE `:3200` |
| Parent | capitalisation `4c49f717` / tree `73efb65d` ; RECETTE BUILD `XOSTMrVvPzbd42ylsUL6Q` |
| Scope | `E05_VISUAL_COMPOSITION_FROZEN` · omit LIVE visual schema · D4 summary wiring · editorial compact · provenance excerpts · focus retry · hierarchy CSS |
| UNKNOWN | PROUVÉ schema/output invalid type stream_drain ; token overflow NON PROUVÉ |
| Docs | as-built E05/E06 descriptifs · matrice v0.7 lecture seule |
| Verdict Cursor | voir Review Pack |


## delivery_id: DELIV-2026-11-19-JOURNAL-D3-D4-CAPITALISATION

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~14:45 CET |
| Macro-lot | Ensemble 06 — restauration capitalisation Nora → D4 |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif conduction D3 + tests fake + cutover RECETTE `:3200` |
| Parent | gel UX `3fc8af5f` / HEAD docs `b9a0c9c3` ; diagnostic handoff `3fac39c1` |
| Scope | QUALIFICATION_INSTRUCTIONS mémoire · REQUEST_EFFECT borné · OBS knowledge_proposals · tests unit/PG |
| Docs | matrice v0.7 lecture seule · as-built mis à jour |
| Verdict Cursor | voir Review Pack |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-FINAL-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~13:30 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 final UX + RECETTE |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif libellés/liserés/empty + cutover RECETTE `:3200` |
| Parent | `6c658f91` pixel cycle ; RECETTE préflight à vérifier (dérive ML3 observée sur :3200) |
| Scope | COPY Figma exact · C09 liserés · C10 empty · oracles · cutover même LaunchAgent |
| Docs | matrice v0.7 §18 lecture seule |
| Verdict Cursor | voir Review Pack |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-PIXEL

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~13:00 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 pixel-perfect corrective |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO RECETTE CUTOVER** |
| GO Morris | 11 états NON RÉCEPTIONNÉS — finition géométrie/liserés/compositions |
| Parent | local `0eb3157b` (RECETTE toujours `d5bf7eb7`) |
| Scope | 40/60 height · liserés Figma · parent≠autonome · agrandi article+aside · search/open-points · D6 status |
| Docs | matrice v0.7 §18 `f0d2d033` |
| Verdict Cursor | voir Review Pack (comparaison 11 frames + réserves) |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-FIGMA-UX

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~12:15 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 Figma UX corrective |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO RECETTE CUTOVER** |
| GO Morris | NON CONFORME UX Figma → correctif obligatoire ; cutover RECETTE hors mandat |
| Parent | local `d5bf7eb7` (build RECETTE toujours servi) |
| Scope | ProjectJournal V4 shell · tokens · Chrome breadcrumb-only · deep-link race · 11 captures |
| Figma | 11 frames `itgvCulInEnFY6DvgIegvP` page 828:2 lus via MCP |
| Provenance CampusFlow | Classification A — titre D4 fragment conversationnel, pas de fuite |
| Verdict Cursor | `FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS VISUAL REVIEW` (réserves pixel / J-C14) |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~11:33 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 qualification + RECETTE |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Qualification technique + mise à disposition sur RECETTE existante |
| Candidate | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` · tree `f5c05cb94f5137d06a26107b7003ab1bf073f923` · BUILD `PV12SV9VToVGK-ReSxTqk` |
| Parent RECETTE | `5c94c867…` / `IEINNuPl0bHWJOWkh0ZhG` |
| Scope | QA DEV · migration 014 additive RECETTE · cutover même `:3200` / LaunchAgent · smoke · manifeste |
| DB | `sfia_next_recette_ml4` · 014 applied · counts 23/560 preserved |
| Rollback | `ROLLBACK-TO-5c94c867.sh` + dump `ml4d-e06-journal-20261119-pre-d5bf7eb7` |
| Manifeste | `construction/ensemble-06-journal-recette-manifest.md` |
| Verdict Cursor | `RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE` |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-LIVE-PARTIAL

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~11:05 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 cycle 4 §5 + LIVE |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Complétude §5 + LIVE 20 tours CampusFlow (arrêt opérateur après E01) |
| Parent | local `a122bf27` |
| Scope | J-C08/11/13/14/07/05/16 oracles · viewerOpenRef J-C14 · LIVE E01 REAL BOUNDARY PARTIAL |
| QA | tsc/lint/build PASS · UNIT+PG Journal PASS · Playwright seeded 2/2 · ML3 PG 49 PASS · LIVE 1/20 puis STOP |
| Visual | **VISUAL REVIEW PENDING MORRIS — RECETTE** |
| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — §5 DETERMINISTIC + LIVE E01 ONLY` |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-E06-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~10:10 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 cycle 3 E06-01..06 |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Corrections ciblées + BROWSER données non vides DEV |
| Parent | local `782c93ec` |
| Scope | E06-05 scope · E06-03 UNVERIFIED Git · E06-04 chrono message · seed BROWSER · resolve source réelle · migrate 014 |
| QA | tsc/lint/build PASS · unit+PG Journal PASS · Playwright seeded PASS · LIVE/REAL NOT RUN |
| Visual | **VISUAL REVIEW PENDING MORRIS — RECETTE** |
| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — E06 CORRECTIVES LOCAL` |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~09:40 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 completion |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Complétude J-C04/06/13/14 + PARTIAL + BROWSER DEV |
| Candidate local | `sfia/next-journal-delivery-20261119` (post-78c3c3b0) |
| Scope | Réactivation D3/D4 · sources/contradictions · message/doc deep-link · UI search reason · PG+BROWSER |
| QA | tsc PASS · lint PASS · unit 4/4 · PG 10/10 · Playwright journal-v4 1/1 |
| Lane | DEV/e2e `:5433` / `:3101` — RECETTE intacte (014 absente) |
| Preuves | `.tmp-sfia-review/journal-v4-captures/` (local, non commit) |
| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 COMPLETION LOCAL` |


## delivery_id: DELIV-2026-11-18-UX01-07-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~18:30 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — UX-01…07 + relivraison RECETTE |
| Type | Cycle 8 Delivery · Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctifs UX-01…07 + build + cutover RECETTE même cycle |
| Parent RECETTE | `90c3e59f` / `5C3be3-ils1iOmH3qXo4d` |
| Candidate | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` · tree `c39e45e6…` · build `qw3FaPD1B4KBrRab3LyKL` |
| Scope | Icon/title · matrix caption · ordinals · graph icons · parallel ELK · synthesis icons/padding · card flow |
| QA | Vitest UX+ELK+UAT03+C2 **PASS** · smoke RECETTE PASS · isolation 404 · DB `23\|117\|556\|4` |
| Rollback | `ROLLBACK-TO-90c3e59f.sh` + backup `ml4d-e05-ux0107-*` |
| Preuves | `docs/evidence/.../ensemble05-ux01-07-recette-20261118/` |
| Verdict Cursor | `ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST` |


## delivery_id: DELIV-2026-11-18-UAT03-FIX-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~17:40 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — UAT-03 correctif + redéploiement RECETTE |
| Type | Cycle 8 Delivery · Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif detail 5000 + obs durable + build + cutover RECETTE même cycle |
| Parent RECETTE | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` / `_eeb9Jy2hV242myk86VTu` |
| Fix | `sequence.steps[].detail` max **5000** · parse `MAX_SEQUENCE_STEP_DETAIL` · instruction D3 SEQUENCE |
| Obs | classification schema/output · zod_issue_path · error_kind · ephemeral DEV-only |
| QA | Vitest bornes+obs **20 PASS** · `next build` OK · smoke RECETTE PASS · isolation B→A 404 |
| Candidate | `90c3e59f4a355b463ea047cc45486906bde15680` · tree `1c7fa402…` · build `5C3be3-ils1iOmH3qXo4d` |
| RECETTE | LaunchAgent basculé · WT `…-ensemble05-recette-build-90c3e59f` · port **3200** |
| DB | counts `23\|117\|544\|4` préservés · **aucune migration** |
| Rollback | `ROLLBACK-TO-ba1e55ec.sh` + backup `ml4d-e05-uat03-fix-20261118-173348` |
| Preuves | `docs/evidence/.../ensemble05-uat03-fix-recette-20261118/` |
| Statut UAT-03 | `FIX DEPLOYED — MORRIS USER RETEST PENDING` |
| Verdict Cursor | `UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST` |


## delivery_id: DELIV-2026-11-18-UAT03-ROOTCAUSE-LIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~17:10 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — UAT-03 root cause |
| Type | Cycle 9 QA + Cycle 8 obs · Critical · **NO RELEASE** · **NO RECETTE DEPLOY** · **NO PRODUCT PUSH** |
| GO Morris | Investigation LIVE + observabilité durable, sans plafond arbitraire |
| Cause | `sequence.steps[].detail` max(400) violé → Agents `ModelBehaviorError` en `stream_drain` |
| Preuve | EXP-02 path Zod ; EXP-04 COMPLETE après contrainte détails courts ; EXP-03 contrôle comparison |
| LIVE | 4 essais DEV · est. **€3,40 TTC** fallback |
| Obs | classification `Invalid output type` · zod_issue_path · error_kind · ephemeral DEV |
| RECETTE | **inchangée** `ba1e55ec` / `_eeb9Jy2hV242myk86VTu` |
| Preuves | `docs/evidence/.../ensemble05-uat03-rootcause-live-20261118/` |
| Verdict Cursor | `UAT-03 ROOT CAUSE PROVEN — CORRECTIVE PLAN READY` |


## delivery_id: DELIV-2026-11-18-ENSEMBLE05-RECETTE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~16:20 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Mise à disposition RECETTE |
| Type | Cycle 8 Delivery · Cycle 9 QA préflight · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO LIVE auto** |
| GO Morris | Ensemble 05 accepté avec réserves — GO intégration/build/cutover RECETTE existante |
| Previous RECETTE | SHA `e224d6278a050bcfbd369c4008d94af504f81d44` · build `MKmBUvdIXyydv_DpUTGZi` |
| Candidate branch | `sfia/next-ml4d-ensemble05-composition-recette-candidate` (local) |
| Candidate SHA | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` · tree `f94e8ecc` |
| Build | `_eeb9Jy2hV242myk86VTu` · WT `…-ensemble05-recette-build-ba1e55ec` · port **3200** |
| Config | `~/.config/sfia-studio-next/recette/.env.local` préservé · FORCE/SIM vidés · fingerprint `8f6dd4c82b61eef6` |
| DB | `sfia_next_recette_ml4` @:5434 · counts 23\|117\|534 inchangés · **aucune migration** |
| QA | Vitest 73 PASS · `next build` OK · smoke login/portfolio/projet/composition PASS |
| Rollback | `ROLLBACK-TO-e224d627.sh` + backup `ml4d-e05-composition-20261118-161805` |
| Preuves | `docs/evidence/.../ensemble05-recette-delivery-20261118/` |
| Fake/Real | LIVE auto **NOT RUN** · composition persistée **BROWSER PROVEN** en RECETTE |
| Verdict Cursor | `RECETTE DEPLOYED — READY FOR MORRIS USER ACCEPTANCE` |


## delivery_id: DELIV-2026-11-18-ENSEMBLE05-FINAL-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~15:45 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Consolidation finale + réception Morris |
| Type | Cycle 8 Delivery · Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO LIVE** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| Audit LIVE | L03/L04 **Cas B** (pas de VC) ; L07 **Cas D** (parallel fidèle) |
| Correctifs | prompt D3 comparison/relations ; admission substance + hint normalize ; discriminants UNIT |
| QA | Vitest discriminants+admission+C2+SIM **PASS** ; Level-B SIM e2e **PASS** ; maturation baseline **PASS** |
| LIVE | **aucun nouvel appel** |
| Preuves | `docs/evidence/.../ensemble05-final-consolidation-20261118/` |
| Verdict Cursor | `READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW` |


## delivery_id: DELIV-2026-11-18-NORA-LIVE-BOUNDED-COMPOSITION-PROVEN

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~15:25 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Qualification LIVE bornée composition Nora |
| Type | Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | LIVE ≤12 tours · plafond **€25 TTC** (levée STOP `cb407251`) |
| Exécution | **12/12** `openai-agents-sdk-live · COMPLETE` · 0 retry · 0 fixture/SIM |
| Composition | Spontanée L05–L09 ; prose L01–L04/L10–L12 ; L10 refus inventé |
| Persist | Reload 12 assistants · fragment match |
| Coût est. | **€10,20 TTC** / €25 (fallback conservateur gpt-6.1-sol $2/$10) |
| Outillage | `live-web-server.sh` · `playwright.live.config.ts` · `ensemble05-live-bounded.spec.ts` |
| Preuves | `docs/evidence/.../live-bounded-campaign-20261118/` |
| Fake/Real | LIVE **PROVEN** · Level-B antérieur PROVEN |
| Verdict Cursor | `LIVE COMPOSITION BEHAVIOR PROVEN — BOUNDED SCOPE` |


## delivery_id: DELIV-2026-11-18-NORA-LIVE-BOUNDED-BUDGET-STOP

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~15:00 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Qualification LIVE bornée composition Nora |
| Type | Cycle 9 QA + Cycle 8 correctif préflight · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **LIVE NOT RUN** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | LIVE ≤12 tours DEV autorisé — **plafond monétaire absent** |
| Préflight PASS | ENV-01 DEV ; C2 `exactShownElsewhere` exact-identity ; SIM unknown fail-closed ; corpus L01–L12 préenregistré |
| QA | Vitest C2+SIM **21 PASS** (cibles) |
| Preuves | `docs/evidence/.../live-bounded-campaign-20261118/` |
| Fake/Real | LIVE **NOT RUN** · Level-B antérieur **PROVEN** |
| Verdict Cursor | `STOP — MORRIS LIVE BUDGET LIMIT REQUIRED` (proposition plafond **€25 TTC**) |


## delivery_id: DELIV-2026-11-18-NORA-E2E-CHAIN-LEVEL-B

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~14:40 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Qualification intégrée Nora→Composition→Persistance |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** · **LIVE NOT RUN** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| Level-B | `STUDIO_NORA_SIMULATED_PROVIDER` — corpus S1–S11 natural prompts ; validate + real D3 path |
| Corrections | Timeline Figma 02 ; matrice 04 Effort/Risque/Délai ; C2 residual exact-identity ; cons complets |
| QA | Vitest Level-B+C2 PASS ; Playwright sim Level-B **PASS** ; R01–R06 / T02 / C2-08 **PASS** |
| Preuves | `docs/evidence/.../level-b-e2e-chain-20261118/` + SHA ; protocole LIVE draft |
| Fake/Real | ADAPTER+BROWSER FAKE **PROVEN** · LIVE **NOT RUN** · HISTORICAL PG **NOT RUN** |
| Verdict Cursor | `DEV END-TO-END CHAIN VERIFIED — READY FOR BOUNDED LIVE DECISION` |


## delivery_id: DELIV-2026-11-18-FIGMA-01-06-VISUAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~14:00 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Convergence visuelle Figma 01–06 |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | Convergence visuelle intégrée Figma 01–06 — GO confirmé |
| Construction | `EditorialSynthesis` v3 ; `EditorialSequence` ; cartes option ; matrice rows ; tokens 01–06 |
| Fixtures | `E05_R01`…`E05_R06` (FIXTURE/DEMONSTRATION) |
| Admission | cards×3 ; matrix critères/5+ ; stacked×2 narrow ; horizontal n≤4 width≥580 ; vertical n≥5 |
| QA | Vitest composition 63 PASS (cibles) ; Playwright R01–R06 **PASS** ; T02 **PASS** ; C2-08 **PASS** |
| Preuves | `docs/evidence/.../figma-01-06-convergence-20261118/` + SHA-256 |
| ELK 07–09 | Conservé (`elkjs@0.10.2`) — non régression T02/G07–G09 |
| Fake/Real | BROWSER FAKE + VISUAL REVIEW **PROVEN** · LIVE **NOT RUN** |
| Verdict Cursor | `READY FOR CHATGPT VISUAL REVIEW — FIGMA 01-06 CONVERGENCE CANDIDATE` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-COMPLETE-ELK-PRODUCT

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~13:15 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Livraison intégrale composition graphique Nora |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | ELKjs produit **autorisé** — lève STOP architecture précédent |
| ELK produit | **`elkjs@0.10.2`** (EPL-2.0) installé ; import bundlé Next ; mesure DOM → layout → paint |
| G09 | Swimlane composer (3 voies verticales + sync + suite) ; largeur cible <720px |
| Fix critique | `preferListFallback` ne bake plus `nodes>10` au parse (sinon G09→list) |
| Remplacement | Artisan Graphs retiré du chemin principal ; probe C2-08 isolé |
| QA | Vitest composition **83 PASS** (cibles) ; Playwright **T02 PASS** ; **C2-08 PASS** |
| Preuves | `runtime-figma07/08/09-*-elk-1440.png` + manifeste SHA-256 + inventaire Figma |
| Fake/Real | BROWSER FAKE **PROVEN** · HISTORICAL PG **NOT RUN** · LIVE **NOT RUN** |
| Verdict Cursor | `READY FOR CHATGPT REVIEW — COMPLETE IMPLEMENTATION CANDIDATE` (réserves visuelles artistiques / Gate C Morris) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-GRAPHICAL-ENGINE-REPLACEMENT

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~12:25 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Remplacement architectural couche graphique |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| Benchmark | Isolé `scripts/layout-engine-benchmark` — G07/G08/G09 artisan vs ELK vs RF+ELK |
| Recommandation | **Solution A : HTML/SVG + ELKjs** (CANDIDATE) — RF non requis pour layout |
| Gate | **STOP — MORRIS ARCHITECTURE DECISION REQUIRED** (ajout `elkjs` produit) |
| Production | `DirectedRelationBoard` + `EditorialSynthesis` ; artisan Graphs **retiré** du chemin principal |
| ELK produit | **NOT INSTALLED** (`package.json` inchangé) |
| Fake/Real | UNIT PROVEN · BROWSER à rejouer · LIVE NOT RUN |
| Verdict | `STOP — MORRIS ARCHITECTURE DECISION REQUIRED` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-W3-W4-GRAPHICAL

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~11:45 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Finalisation W3/W4 grammaire graphique Nora |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C2-08 | Exception React **post-mount** réelle → `BlockErrorBoundary` navigateur ; capture `c2-08-browser-error-recovery-1440.png` · **BROWSER PROVEN** |
| W3 | `NoraCompositionGraphs` : arbre + parallèle SVG mesuré ; synthèse éditoriale par tons ; tokens parcours renforcés ; deps inchangés (mesurés) |
| W4 | Vitest composition 72+ PASS (cibles) ; T02 PASS ; C2-08 Playwright PASS ; manifeste Figma/runtime 01–09 |
| Layout | HTML/SVG mesuré **retenu** ; ELK/RF non ajoutés |
| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** |
| Verdict | `READY WITH RESERVES` (fidélité Figma PARTIAL 01–09 ; réception Morris) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-C2-INTEGRITY-W3

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~11:25 CET |
| Macro-lot | R5 / ML4D — C2 intégrité sémantique + W1/W3 sombre adaptatif |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C2 | Suppression heuristique 70% tokens ; exact-identity only ; tests adverses négations/chiffres/statuts ; ErrorBoundary réel |
| W1 | Contrat exécutable thème sombre Studio (Figma 01–09 hiérarchie) |
| W3 | Markers SVG uniques ; polish cards/tree/parallel sur tokens sombres |
| W4 | Vitest 138 PASS ; T02 à rejouer ; PG historique NOT RUN ; VISUAL NOT COMPLETED |
| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · LIVE **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-C2-W1-FINALIZATION

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~11:00 CET |
| Macro-lot | R5 / ML4D — Finalisation C2 + W1 contrat Figma (Ensemble 05) |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C2 | `visibleTextAlternativeComplement` + `SubstanceComplement` visible (pas sr-only) ; oracles C2-01…10 |
| W1 | Paquet Morris Page 06 frames 01–09 ; **FIGMA CONTRACT READY — MORRIS VISUAL VALIDATION REQUIRED** |
| W3 | Pas de transposition pixel ; familles existantes préservées |
| W4 | Vitest 122 PASS ; T02 PASS (+ assert C2 DOM) ; PG DEV up sans payloads historiques |
| W5 | Corpus réception préparé ; LIVE NOT RUN |
| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** |
| Verdict | `READY WITH RESERVES` / gate artistique Morris |


## delivery_id: DELIV-2026-11-18-COMPOSITION-VISUAL-GRAMMAR-DIFFS-COMPLETE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~10:30 CET |
| Macro-lot | R5 / ML4D — Complétude Review Pack diffs C1–C4 |
| Type | Cycle Delivery · Critical · DOC/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| Motif | Handoff `42d3299b` publié mais contenu incomplet (admission vide, NoraComposition hash-only, CSS tronqué, C2 peu traçable) |
| Contenu | Diffs intégraux `admission.ts`, `NoraComposition.tsx`, `tokens.css`, `NoraConversation.tsx` + chaîne C2 |
| Code produit | **Aucun changement** vs tip WT C1–C4 |
| Fake/Real | FAKE prior **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` (technique inchangé ; revue exhaustive désormais possible) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-VISUAL-GRAMMAR-C1C4

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~10:20 CET |
| Macro-lot | R5 / ML4D — Convergence finale grammaire visuelle conversationnelle |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C1 | Fallback exhaustif en français naturel — plus de `relation=` / `Disposition:` / enums wire |
| C2 | Strategy A graphic → `bodyPolicy=substitute` (anti-redondance prose+visuel) |
| C4 | Dépendances : connecteurs SVG mesurés (ResizeObserver) + liste humaine |
| A1–A7 | Non-régression : 112 Vitest PASS ; T02 PASS |
| A3 PG | **HISTORICAL PG REPLAY — NOT RUN** (5433 DOWN) |
| Figma | Contrat §6.6 extrait frames 03/04/07/08/09 ; **VISUAL REVIEW NOT COMPLETED** |
| Fake/Real | FAKE/BROWSER **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-V06-A7

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~09:25 CET |
| Macro-lot | R5 / ML4D — Intégrité canonique A7 + textAlternative A2 (matrice 06 V0.6) |
| Type | Cycle 8 Delivery · Critical · CORRECTIVE/QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| A7 P0 | Canonical declared unusable → refuse (`CANONICAL_COMPOSITION_INVALID` / `_EMPTY`) ; narrative-only + legacy soft-drop préservés |
| A2 | `mergeTextAlternative` — plus d'heuristique préfixe 80 ; suffixe complémentaire conservé |
| A3 | Compat fixtures OK ; **HISTORICAL PG REPLAY — NOT RUN** (PG DEV 5433 down) |
| A5–A6 | T02 PASS ; VISUAL REVIEW NOT COMPLETED (handoff MD) |
| Preuves | Vitest 109 PASS ciblés ; T02 1 PASS ; A4 fail-closed conservé |
| Fake/Real | FAKE A7 **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-V05-A4

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~09:00 CET |
| Macro-lot | R5 / ML4D — Strategy A sécurisation finale (matrice 06 V0.5) |
| Type | Cycle 8 Delivery · Critical · CORRECTIVE/EVOL/QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| A4 P0 | `fixtureReply` fail → UNKNOWN/UNAVAILABLE/`providerContacted:NO` (parity LIVE) |
| A1 | exact oracles 11999 / 12000 / 12001 ; no silent slice |
| A2 | familles text/comparison/sequence/relations/synthesis + choices/refs ownership |
| A3 | e05 / projection-v1 / canonical-v1 autorités préservées (fixtures) |
| A5–A6 | T02 PASS ; Vitest 94 PASS ciblés ; VISUAL handoff PNG channel incomplete |
| Fake/Real | FAKE fixture A4 **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~08:40 CET |
| Macro-lot | Strategy A integrated corrective A1–A6 (matrice 06 V0.4) |
| Type | Cycle 8 Delivery · Critical · CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| A1 | derive overflow → `CANONICAL_REPLY_OVERFLOW` (no silent slice) |
| A2 | exhaustive relations/synthesis/sequence fields (kind, detail, lane, relation) |
| A3 | WRITE `conversational-composition-canonical-v1` ; READ e05+projection-v1+canonical ; projection-v1 ≠ canonical |
| A4 | fixtureReply + LIVE → same `validateNoraTurnQualification` ; AgentSchema WRITE-only |
| A5 | sync → directed « sync vers » (no false reciprocity) |
| Preuves | Vitest 75 PASS (A1–A4 + composition) ; T02 PASS |
| Verdict | (voir Review Pack Full corrective A) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CANONICAL

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~08:10 CET |
| Macro-lot | Transition Strategy A — sections sémantiques canoniques + achèvement UX |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| Architecture | `visualComposition` projection-v1 = autorité ; `replyDraft` dérivé ; e05 = legacy_projection |
| P0 | derive-text ; contentAuthority ; validateNoraTurnQualification derive ; tree single-parent |
| P1 | parallel toutes arêtes ; identity admission path |
| Preuves | Vitest Strategy A + fidelity + admission 29 PASS ; Playwright T02 PASS |
| Verdict | (voir Review Pack Full Strategy A) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-F1F5-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~03:55 CET |
| Macro-lot | F1–F5 Integrated Corrective (fidélité / topologie / relations / schéma / BROWSER) |
| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| F1 | Claims substance ⊆ replyDraft ; narrative substitute gate ; préférence contradictoire |
| F2 | topology.ts — tree/deps/parallel ; cycles/multi-root → list |
| F3 | deps layers + arêtes dirigées ; tree/parallel CSS |
| F4 | Agent WRITE `conversational-composition-projection-v1` only ; dual READ e05 |
| F5 | T02 + fixtures tree/parallel + captures `f5-runtime-*.png` |
| Preuves | Vitest fidelity+admission 24 PASS ; Playwright T02 PASS ; matrice `f-matrix-fidelity-topology.md` |
| Verdict | READY WITH RESERVES (voir Review Pack Full F1–F5) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~03:18 CET |
| Macro-lot | Convergence composition conversationnelle (doc 06 C-01–C-22) |
| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| P0 C-04 | Graphiques : jamais substitute ; complement seulement si ancres replyDraft ; sinon markdown_only |
| P1 C-05/14 | Schema write `conversational-composition-projection-v1` ; dual-read e05 ; MAX_ALTS=12 |
| P1 C-10/11/12 | layoutHint + RelationsDirectedView CSS (deps/tree/parallel) ; ELK non introduit |
| Preuves | Vitest composition 65 PASS (admission+fidelity+E05+schema) ; tsc 32/0 touched ; T02 PASS |
| Verdict | (voir Review Pack Full convergence) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~02:25 CET |
| Macro-lot | Correction intégrée composition conversationnelle (réponse STOP ChatGPT) |
| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| Corrections | A matrice+détails ; B relations list only (SVG différé) ; C repli exhaustif ; D bodyPolicy substitute/complement ; E capacité wire honnête ; F ACK PREEXISTING PROVEN |
| Preuves | Vitest 57 PASS ; tsc 32 préexistantes / 0 touched ; T02 PASS + captures corrective ; ACK FAIL identique sur tip clean `a783f014` |
| Verdict | supersédé par cycle convergence |


## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-V1

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~01:22 CET |
| Macro-lot | Remplacement mécanisme graphique expérimental E05 → composition conversationnelle adaptative |
| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| Architecture | Strategy B V1 — `replyDraft` canonique ; wire `e05-visual-composition-v1` conservé ; admission `conversational-composition-v1` ; renderer `NoraComposition` |
| Scope | admission/variantes CV-* ; `NoraComposition` + CSS container queries ; alias `NoraVisualComposition` ; wire `NoraConversation` ; tests unit ; preuves Figma Page 06 ; matrice CV-T |
| Non-scope | Migration DB ; Strategy A sections sémantiques ; elkjs/RF/ECharts ; push produit ; RECETTE/STABLE ; LIVE OpenAI |
| Preuves | Vitest admission+E05+schema+projection 54 PASS ; Playwright ensemble05 5 PASS / 2 FAIL (C2/ACK hors renderer) ; T02 composition PASS |
| Verdict | `READY WITH RESERVES` — supersédé par STOP ChatGPT puis correctif |


## delivery_id: DELIV-2026-11-17-ML4D-R05-COGNITIVE-RECOVERY

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~20:35 CET |
| Macro-lot | ML4D Ensemble 05 — R05 reprise cognitive UNKNOWN + OBS |
| Type | Cycle 8 Delivery · Critical · RUN/INC corrective · **PATCH CANDIDATE** · deploy RECETTE conditionnel |
| Parent tip | `208aaa40` |
| Cause | Diagnostic `R05 PROVIDER FAILURE IDENTIFIED — RECOVERY UX GAP CONFIRMED` (`de481265`) — reconcile loop on cognitive UNKNOWN without D7 |
| Scope | `shouldClearThreadPending` UNKNOWN/INTERRUPTED sans métier ; GET durable `turns/by-key` ; reconcile/hydrate UX ; OBS `extractProviderErrorDiagnostics` ; tests unit/PG/e2e ; plan retest Arnaud |
| Non-scope | Correction exception fournisseur ; LIVE OpenAI ; migration ; push produit ; STABLE ; clôture E05 |
| Preuves | Vitest R05 unit 36 PASS ; PG ml2-turn-command 4 PASS ; Playwright R05 2 PASS ; lint 0 error touched ; tsc 32 baseline / 0 touched src ; `next build` PASS |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict | (complété après gate RECETTE dans le Review Pack) |


## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-STRICT-SCHEMA-AUDIT

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~19:05 CET |
| Macro-lot | ML4D Ensemble 05 — audit compatibilité schéma structuré Nora LIVE |
| Type | Cycle 8 Delivery · Standard · RUN/corrective QA · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Candidat | `3f7863ba` (parent `34a5e102`) — tip prolongé par oracles de non-régression |
| Constat | Convertisseur Agents SDK `@openai/agents@0.21.0` → `strict:false` ; `zodTextFormat` refuse D3 (`.optional()` sans `.nullable()`) ; `criteria[].values` = `z.record` → `additionalProperties:{type:string}` incompatible strict ; aucun `{}` vide restant |
| Scope | Tests schéma D3 complets (`nora-live-output-schema.test.ts`) ; journal ; **aucune** modification produit D3/UI |
| Non-scope | Hardening strict complet ; appel REAL ; déploiement RECETTE ; push produit |
| Preuves | Vitest schema/E05/adapter/OBS/sem 66 PASS ; PG intégration 484 PASS ; tsc 32 préexistantes / 0 touched src ; build PASS `n6nJl-Rx4-9s9yxwslhIJ` |
| RECETTE | inchangée `:3200` / `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
| Verdict | `NORA LIVE STRICT SCHEMA GAP — MORRIS DECISION REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-OUTPUT-SCHEMA-PATCH

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~18:40 CET |
| Macro-lot | ML4D Ensemble 05 — diagnostic + correctif DEV Nora LIVE |
| Type | Cycle 8 Delivery · Standard · RUN/corrective · **PATCH CANDIDATE** · **NO RELEASE** · **NO DEPLOY** |
| Parent tip | `34a5e102` |
| Cause | `visualComposition: z.unknown()` → JSON Schema `{}` sous `outputType` strict → rejet fournisseur (`PROVIDER_ERROR` / UNKNOWN) |
| Scope | `VisualCompositionAgentOutputSchema` ; branchement enveloppe D3 ; OBS `error_category` ; tests schéma |
| Non-scope | Appel REAL ; déploiement RECETTE ; push produit ; grammaire visuelle runtime ; migration |
| Preuves | Vitest schema+adapter+E05 30 PASS ; REAL LIVE NOT EXECUTED |
| RECETTE | inchangée `:3200` / `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict | `NORA LIVE DEV FIX VERIFIED — RECETTE DEPLOY GO REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-RECETTE-CANDIDATE-FREEZE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~17:00 CET |
| Macro-lot | ML4D Ensemble 05 — finitions UX + gel candidat + préparation RECETTE |
| Type | Cycle 8 Delivery · CRITICAL · EVOL/corrective/prep · **NO RELEASE** · **NO DEPLOY** |
| Parent tip | `cb638613` |
| Scope | V01 Markdown sûr ; V02 deps lisibles ; V03 refs dédupliquées ; tests ; build ; commit local gel ; manifeste ; rollback inventorié |
| Non-scope | Déploiement `:3200` ; push produit ; PR/merge ; migration ; LIVE proof |
| Preuves | Vitest 32 PASS ; Playwright E05 7 PASS ; BUILD `jYz7jUBt1ewRBNp6HbCgs` |
| RECETTE | inchangée `:3200` / `cb638613` / `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict | `E05 RECETTE CANDIDATE FROZEN — PREPARATION VERIFIED — MORRIS DEPLOY GO REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-COMPOSITION-CORRECTIVE-P1AB

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~16:40 CET |
| Macro-lot | ML4D Ensemble 05 — correctif fidélité + provenance + ancres |
| Type | Cycle 8 Delivery · CRITICAL · EVOL/Corrective · **NO RELEASE** |
| Base tip | `cb638613` (candidat DEV dirty préservé) |
| Scope | P1-A fail-closed completeness ; P1-B resolveProvenanceReference ; ancres first-claim + residuals ; F01–F08 / P01–P08 |
| Non-scope | Commit/push produit ; RECETTE ; migration ; nouvelle lib ; LIVE |
| Preuves | Vitest 31 PASS ; Playwright E05 7 PASS ; LIVE NOT EXECUTED |
| RECETTE | préservée `:3200` / `cb638613` / `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** |
| Verdict | `E05 VISUAL COMPOSITION CORRECTIVE — DEV VERIFIED — MORRIS REVIEW REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-COMPOSITION-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~16:15 CET |
| Macro-lot | ML4D Ensemble 05 — consolidation grammaire visuelle + restitution conversationnelle |
| Type | Cycle 8 Delivery · CRITICAL · EVOL consolidation post-RECETTE · **NO RELEASE** |
| Base tip | `cb638613` (worktree DEV non commité — T02/T05 préservés puis consolidés) |
| Scope | Composition ordonnée sans doublon Markdown ; icônes/rôles sémantiques ; provenance consultable vs descriptive ; ancres choices/refs ; fixtures S1–S8 ; tests DOM order ; captures |
| Non-scope | Commit/push produit ; PR/merge ; déploiement RECETTE ; migration ; lib graphique externe ; LIVE form-choice proof |
| Preuves | Vitest 17 PASS ; Playwright E05 7 PASS ; captures runtime-s* ; LIVE NOT EXECUTED |
| RECETTE | préservée `:3200` / `cb638613` / BUILD `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** |
| Verdict | `E05 VISUAL COMPOSITION CONSOLIDATED — DEV VERIFIED — MORRIS REVIEW REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-GRAMMAR-T02-T05

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~15:40 CET |
| Macro-lot | ML4D Ensemble 05 — grammaire visuelle native + visionneuse agrandie (même macro-lot) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL/correctif UAT · **NO RELEASE** |
| Base tip | `cb638613` (candidat E05 déployé RECETTE — **inchangé ce cycle**) |
| Scope | Contrat composition visuelle ; primitives A/B/C/D ; intégration D3→projection→UI ; T05 layout |
| Non-scope | Commit/push produit ; déploiement RECETTE ; migration ; lib graphique externe ; Figma certifié |
| Preuves | Vitest visual+projection PASS ; Playwright E05 7 PASS ; captures DEV |
| RECETTE | préservée `:3200` / `cb638613` / BUILD `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 VISUAL GRAMMAR CANDIDATE — IMPLEMENTED AND DEV VERIFIED — MORRIS REVIEW REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-DRAFT-RECONCILE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~13:40 CET |
| Macro-lot | ML4D Ensemble 05 — correctif brouillon/reconcile + rollback prep (même macro-lot) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL correctif final · **NO RELEASE** |
| Parent tip | `2b0d7a78` (descendant de freeze `342f0bbb`) |
| Scope | Pending origin metadata ; reconcile never wipes choice/legacy draft ; artefact restore passif RECETTE |
| Non-scope | Déploiement RECETTE ; restore LIVE ; push produit ; Figma |
| Preuves | Vitest 25 PASS ; Playwright E05 6 PASS ; E04 3 PASS ; next build PASS |
| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |
| RECETTE | inchangée `:3200` / `3LzvYPTQc-Km7St6nF97r` + artefact `.sfia-restore-artifacts/…` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-FREEZE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~13:15 CET |
| Macro-lot | ML4D Ensemble 05 — finalisation + figement candidat (même macro-lot) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL finalisation · **NO RELEASE** |
| Scope | Final A D4 live rights ; Final B reconcile obligatoire ; inventaire RECETTE existante ; commit local figé |
| Non-scope | Déploiement RECETTE ; push produit ; PR/merge ; campagne Figma F2 ; nouvelle RECETTE |
| Preuves | Vitest 22 PASS ; Playwright E05 5 PASS ; E04 3 PASS ; next build PASS |
| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
| RECETTE | inventoriée inchangée `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict cible | `E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION` (supersédé) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~12:45 CET |
| Macro-lot | ML4D Ensemble 05 — consolidation C1–C5 (même candidat) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL consolidation · **NO RELEASE** |
| Parent candidat | worktree local non commité sur `984d77a3` |
| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
| Scope | C1 révision D4 exacte ; C2 ACK perdu / un seul tour ; C3 purge same-tab ; C4 preuves Figma ; C5 Git D9 borné (déterministe) |
| Non-scope | Migration ; streaming ; cutover RECETTE ; Git REAL LIVE ; F2 16/16 certifié |
| Preuves | Vitest E05 9 + rail 13 PASS ; Playwright E05 5 PASS ; E04 3 PASS ; next build PASS |
| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 CONSOLIDATED CANDIDATE — READY FOR MORRIS RECETTE GO REVIEW` (supersédé par FREEZE) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~12:20 CET |
| Macro-lot | ML4D Ensemble 05 — correctif intégré Travail avec Nora |
| Type | Cycle 8 Delivery · CRITICAL · EVOL correctif · **NO RELEASE** |
| Parent candidat | même worktree local non commité sur `984d77a3` |
| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
| Scope | P1-A continueChoices≠clarifications ; P1-B freeze UNKNOWN/ACK ; P1-C refs D4/Git ; P2-A viewer e2e obligatoire ; P2-B isolation brouillon ; P2-C matrice Figma partielle |
| Non-scope | Migration ; streaming ; cutover RECETTE ; PR/merge ; F2 certifié 16/16 |
| Preuves | Vitest 21+20 PASS ; Playwright E05 2 PASS ; E04 3 PASS (cycle précédent correctif) ; next build PASS |
| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` + `figma-runtime-matrix.md` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` (mis à jour) |
| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 CORRECTIVE CANDIDATE WITH RESERVES — NOT READY FOR RECETTE` (supersédé par consolidation) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~12:00 CET |
| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
| Parent candidat | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
| Scope | CT-01..08 intégrés : scroll UX-002, projection M1 `result_json`, choix, compositeur/brouillon M3, activité V1 M2, visionneuse locale M4, shell E04 préservé |
| Non-scope | Migration (M5) ; streaming texte ; cutover RECETTE ; PR/merge ; Gate C ; ML5 |
| Preuves | Vitest E05+studio-rail PASS ; Playwright E05 PASS ; E04 nreg 3 PASS ; next build PASS |
| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** |
| Verdict cible | `IMPLEMENTED CANDIDATE WITH RESERVES — MORRIS REVIEW REQUIRED` (revue ChatGPT : BLOCKING RESERVES — correctif suivant) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-04-CP01-CP02

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~00:10 CET |
| Macro-lot | ML4D Ensemble 04 — correction bloquants CP01/CP02 |
| Type | RUN / correction candidat · **NO RELEASE** |
| Parent candidat | `351aea9607c5997f7343212a837dd13c0f1e4429` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Compositeur adaptable: bandeau reprise hors max-height 160px; stack scroll maîtrisé; testids nav mobile; tests CP01-A..E / CP02 |
| Non-scope | Cutover RECETTE; API/DB; Ensemble 05; redesign Figma; push projet |
| Preuves | CP01-A..E PASS; CP02 PASS; E04+T13/T16+F2+long-thread PASS; next build PASS; vitest studio-rail 13 PASS; tsc 32 parent réserve |
| RECETTE | **inchangée** `:3200` SHA `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre` |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — CP01/CP02 CORRECTION CANDIDATE READY` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VERTICAL-LAYOUT

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~23:45 CET |
| Macro-lot | ML4D Ensemble 04 — composition verticale Travail |
| Type | RUN / correction bornée · **NO RELEASE** |
| Parent candidat | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Intro compacte + séparateur ; conversation/compositeur cartes distinctes ; compositeur ancré bas ; inspecteur hauteur intro→compositeur ; scroll fil propriétaire |
| Non-scope | Rail/DA déjà validés ; Ensembles 05–07 ; API/DB ; RECETTE ; amend a30e75c7 |
| Preuves | next build PASS ; Playwright E04+T13/T16+F2+long-thread+UX-004 PASS ; DOM gaps conv→comp 25, bottoms align 0, intro∥inspector 0 |
| RECETTE | **inchangée** `:3200` SHA `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre` |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — VERTICAL LAYOUT CORRECTION CANDIDATE READY` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VISUAL-FIDELITY

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~22:55 CET |
| Macro-lot | ML4D Ensemble 04 — correction fidélité visuelle Figma 652:* |
| Type | RUN / correction bornée · **NO RELEASE** |
| Parent candidat RECETTE | `20fb41baa534b5a802a275b6944fc267ccaa2192` (inchangé) |
| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Rail 2 lignes + icônes + séparateurs ; suppression Retour portefeuille doublon ; proportions 968/369 ; typo/messages/compositeur flèche ; inspecteur unifié ; sticky header ; preuves DOM 1680×970 |
| Non-scope | Ensembles 05–07 ; API/DB ; amend RECETTE ; push projet ; PR/merge ; Gate C ; ML5 |
| Preuves | next build PASS ; Vitest studio-rail PASS ; Playwright E04+T13/T16+F2+nav-intent+UX-004+composer PASS ; tsc workspace FAIL=parent (32) / src 0 |
| Mesures DOM | rail 246 ; conversation 965 (~968) ; aside 368 (~369) ; send 52×35 ; name line-clamp 2 |
| RECETTE | **inchangée** `:3200` SHA `20fb41ba` / BUILD `Bdn6zx0xBoavYTjWmiO4x` / LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — VISUAL FIDELITY CORRECTION CANDIDATE READY` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-TECHNICAL-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~21:55 CET |
| Macro-lot | ML4D Ensemble 04 — consolidation technique + plan RECETTE |
| Type | RUN / correction bornée · **NO RELEASE** |
| Parent candidat | `660ff4243fafb586bfa0dd9b377382952e831ca9` |
| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Scope | T13 500+retry ; T16 pending×nav ; preuve tsc antérieur ; ESLint/build ; plan cutover RECETTE read-only ; clarif. title Résultats/preuves |
| Non-scope | Déploiement RECETTE ; push projet ; Ensembles 05–07 ; fix fixtures ML4C tsc |
| Preuves | next build PASS ; Playwright E04+T13/T16+nreg PASS ; tsc workspace FAIL=parent (32) / E04 src 0 |
| RECETTE | observée `bd8e1672` / BUILD `bURdIMEzv8pRSJCzgsiDf` — **non modifiée** |
| Push produit | **AUCUN** |
| Verdict cible | `TECHNICAL CANDIDATE READY FOR CHATGPT REVIEW` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-PROJECT-SPACE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~21:35 CET |
| Macro-lot | ML4D Ensemble 04 — Espace projet convergence UX/UI |
| Type | Cycle Delivery · Standard · EVOL · **NO RELEASE** |
| Parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` (UX-005 lineage) |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Rail projet 246px ; identité réelle ; surface `projet` ; Trajectoire=`pilotage` ; suppression onglets ProjectChrome ; unavailable 401/404/5xx ; Travail coque Figma |
| Non-scope | Ensembles 05/06/07 ; API/DB ; RECETTE auto ; project push/PR/merge ; Gate C ; ML5 |
| Preuves | Vitest studio-rail PASS ; Playwright Ensemble04 + nav-intent + F2 captures + UX-003/004 + ml4c composer PASS |
| Figma | 652:8 / 652:58 / 652:108 / 652:158 — evidence under `web/docs/evidence/ensemble-04-project-space/` |
| RECETTE | **non promue** — manifeste candidat à préparer pour GO Morris |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — CANDIDATE READY FOR MORRIS REVIEW` |

## Contrôle post-merge — 15/11/2026 — DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT

**Complément daté :** l'entrée de livraison qui suit conserve le statut de PR readiness observé **avant** fusion ; ce constat établit la sortie d'intégration, sans modifier les preuves historiques.

| Champ | Preuve post-merge |
| --- | --- |
| GO | Merge PR #678 autorisé par Morris le 15/11/2026 |
| PR | [#678](https://github.com/mcleland147/sfia-workspace/pull/678) — MERGED le 15/11/2026 20:21:39 UTC |
| HEAD candidat | `bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa` |
| Merge `main` | `2c2e88f12fad867d0b5d76233961bcb95280a2bf` ; parents `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` + `bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa` |
| Tree `web` | `3f34d2ad4a4340fc2fdf6f19ac0b15858441e39a` — identique au HEAD candidat |
| CI avant merge | [Next #43755913981](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913981) SUCCESS ; [Studio Gate #43755913982](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913982) SUCCESS |
| CI après merge | [Next #43757632632](https://github.com/mcleland147/sfia-workspace/actions/runs/43757632632) **SUCCESS** sur `main@2c2e88f1`, build, TypeScript, ESLint, Vitest/PG, Playwright BROWSER FAKE et Next Required Gate |
| Statut ML4C | **CLOSED WITH RESERVES**, Git et documentation post-merge vérifiés |
| Limites | Réserves `S05-06/08`, TTL, ENV-R09, Git REAL, Nora LIVE, D4/CKI et UX non levées ; CI FAKE ≠ preuve LIVE/REAL |
| Suite | ML4D NOT STARTED ; Gate C OPEN ; NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |

Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les réserves et ne donne pas de GO ML4D.

---

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-R1R2-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~18:00 CET |
| Macro-lot | ML4D — Correctif final consolidation R1/R2 (intention durable + clarifications) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL / PATCH · **NO RELEASE** |
| Parent | `6798219fdb37af1b463326dc7015901b43b04acd` |
| Scope | R1 goal≠intention après init ; R2 omission clarifications ≠ `[]` ; tests discriminants ; T1→T7 enrichi |
| Non-scope | C3/C4, RECETTE, migrations, D4 global, Figma, PR/merge/STABLE/Gate C/ML5 |
| Preuves | UNIT 419 ; PG integration PASS ; BROWSER Sas 5 (T1→T7 + R1-B/R2-C) ; next build PASS |
| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |
| Push produit | **AUCUN** |
| Verdict cible | `READY WITH RESERVES — R1/R2 CORRECTED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-POST-RECETTE-C1C4

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~17:00 CET |
| Macro-lot | ML4D — Correctif intégré post-recette Morris (C1–C4) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
| Parent | `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` |
| Scope | projectIntention ; openQuestions replace ; présentation/hauteur ; suppression Ajuster |
| Non-scope | RECETTE, migrations, D4 global, Figma write, PR/merge/STABLE/Gate C/ML5 |
| Preuves | UNIT 405 ; PG create+patch 30 ; BROWSER T1→T7 + chat-first 6 ; build `jw9G3w66bIZxtpzFshlr6` |
| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |
| Push produit | **AUCUN** |
| Verdict cible | `READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-UX-CTA-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~15:00 CET |
| Macro-lot | ML4D — Finalisation UX CTA D2 + mise à disposition RECETTE |
| Type | Cycle 8 Delivery · CRITICAL cutover · EVOL compatible · **NO RELEASE** |
| Parent | `e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c` |
| Correctif | CTA création = D2 `canCreate` (suppression gate Nora `BASE_SUFFICIENTE`) — SAS-F-07 / AF-06 |
| Non-scope | createProjectCommand, migrations, D3/D4, Figma write, PR/merge/STABLE |
| Preuves | UNIT CTA T01–T06 ; UNIT 401 ; PG create-project 23 ; BROWSER Sas+chat-first 6 |
| Visuel Morris | **PENDING** — pas de nouvelle campagne pixel Cursor |
| Nora LIVE | **NOT PROVEN** |
| RECETTE | nouveau SHA/build (rollback `cd091385`/`E3J7wVO4MsKgl5aCTDhed`) |
| Push produit | **AUCUN** |
| Verdict cible | `RECETTE DEPLOYED — READY FOR MORRIS UX REVIEW` (ou WITH RESERVES) |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-UX-FIGMA

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~14:40 CET |
| Macro-lot | ML4D — Convergence UX Figma → code Sas Nora |
| Type | Cycle 8 Delivery · EVOL visuelle · **NO RELEASE** |
| Figma | `itgvCulInEnFY6DvgIegvP` nodes 607:3/62/131/203/277 — lecture seule |
| Scope | Composition sas conversation+aperçu+composer ; tokens ; shell header/rail personnel |
| Non-scope | D2/D3/D4 services, migrations, RECETTE, Figma write, PR/merge |
| Preuves | F2 Δ0 (rail/header/composer/preview/conv) ; 5 captures runtime ; harness `/dev/sas-visual/*` |
| RECETTE | **inchangée** `cd091385` / `E3J7wVO4MsKgl5aCTDhed` |
| Push produit | **AUCUN** |
| Verdict | `FIGMA TO RUNTIME ALIGNED — READY FOR CHATGPT VISUAL REVIEW` (Morris final) |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~13:50 CET |
| Macro-lot | ML4D — Mise à disposition RECETTE Sas Nora |
| Type | Cycle 11 déploiement · **NO RELEASE** |
| Candidate SHA | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Tree web | `6f089bda818fa60e061f458fad928f3478e648b4` |
| Build RECETTE servi | `E3J7wVO4MsKgl5aCTDhed` @ `http://127.0.0.1:3200` |
| Worktree | `.../sfia-workspace-next-ml4d-sas-nora-recette-build-cd091385` |
| Schema | Migration **013 seule** appliquée (`projection_json` jsonb nullable) |
| Backup | pre-013 dump sha256 `436225aa…` + restore proof jetable PASS |
| Rollback UX-004 | `b05dacf4` / `20blGylSEta7201PgVvlw` artefacts + plist `.b05dacf4.plist.bak` conservés |
| D2 docs | `docs/...uniqueness-d2...@52012abe` validée contenu — **non mergée** |
| Push produit | **AUCUN** |
| Verdict | `RECETTE DEPLOYED WITH RESERVES — MORRIS USER REVIEW PENDING` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-GUARANTEES

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~13:10 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora consolidation garanties création / parcours / PATCH |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` |
| Changes | G1 nom D2 inspecté sous verrou ; G2 E2E T1→T5 sans PATCH ; G3 writeStatus APPLIED_CURRENT/SUPERSEDED ; T3 sans REQUEST_EFFECT artificiel |
| Schema | aucune nouvelle migration (013 inchangée) |
| Compatibilité | correctif compatible candidat MINOR |
| Tests | UNIT projection/writeStatus PASS ; PG create/PATCH/intent PASS ; BROWSER multi-tours sans PATCH PASS |
| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; MORRIS UI PENDING ; gate 013 avant RECETTE |
| Lanes | DEV BUILD `T03qorYZpGs0odz56Nb9f` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA GUARANTEES CONSOLIDATED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE-CORRECTED

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~12:40 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora correctif final (PATCH API / qualification / multi-tours) |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `1dfc79ff824a8c947ed7c013217ff948aaba5b06` |
| Changes | PATCH CAS+HTTP ; assessment sans heuristique ; proposedProjectName ; multi-tours T1–T5 ; mission name binding accepte nom inspecté |
| Schema | aucune nouvelle migration (013 inchangée) |
| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; gate 013 avant RECETTE |
| Lanes | DEV `:3102` BUILD `4uaTx97JzcebLhzIfr8h-` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~12:00 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora correctif intégré (A concurrence nom / B correction Pilote / C maturation / D UI) |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Changes | Verrou pilote + comparaison JS ; aperçu Pilote synchronisé projection ; assessment structuré post-commit ; chrome sas sans onglets principaux |
| Schema | aucune nouvelle migration (013 inchangée) |
| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; gate 013 avant RECETTE |
| Lanes | DEV `:3102` BUILD `9uKvoZLw0AsjIFm46-eAC` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA CORRECTIVE INTEGRATION` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~11:25 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora convergence (conversation → projection → création → continuité) |
| Type | EVOL / MINOR candidate compatible · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `b05dacf47983ed8d914c92619ede5ffe65ce9264` (UX-004 D2 guards) |
| Contrats | docs branch `22ee5540` — contrat-convergence-fonctionnelle + technique |
| Changes | Projection D2 JSONB additive ; wire depuis qualification Nora ; aperçu vivant ; rail sas minimal ; unicité nom même Pilote (app-level) ; tests UNIT/PG ; as-built |
| Schema | `013_preparation_projection.sql` — `projection_json` jsonb nullable (réversible) |
| Contradiction | PF-CRE-14 vs unicité Morris — app-level only ; R2 non réécrit |
| Limites | Nora LIVE NOT PROVEN ; UI Morris PENDING ; pas de UNIQUE SQL (historique) ; régularisation normative ouverte |
| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA INTEGRATED` |

## delivery_id: DELIV-2026-11-16-ML4D-UX004-D2-GUARDS


| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~09:20 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-004 D2 guards (effet honnête + single-flight) |
| Type | EVOL / PATCH candidate compatible · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
| Parent tip | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
| Causes | (A) UNCERTAIN confirmé à tort via diff d'ids portefeuille ; (B) verrous locaux shell/portefeuille non partagés |
| Changes | `runOpenPreparation` single-flight document-scoped ; UNCERTAIN sans upgrade portfolio ; messages honnêtes ; tests unit + Playwright concurrence inter-entrées |
| Schema / API | unchanged |
| Limites | Garde frontend ≠ idempotence serveur ; hors multi-onglet / multi-session |
| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`bc878568` / `3g7UH7AXjSWhxrT20D3-w`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 D2 GUARDS` |

## delivery_id: DELIV-2026-11-16-ML4D-UX004-NAV-BREADCRUMB-CORRECTIF

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~09:00 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-004 correctif borné navigation Nouveau projet + fil d'Ariane |
| Type | EVOL / PATCH candidate compatible · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
| Parent tip | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservé) |
| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Cause | Rail « Nouveau projet » → `/portfolio#nouvelle-preparation` (détour portefeuille) ; fil d'Ariane figé « Portefeuille » sur Intégrations |
| Changes | Action partagée `openPreparation` (POST D2 unique, ACK sans retry) ; rail/mobile/portefeuille même parcours ; breadcrumb route-aware (`Portefeuille` / `Intégrations`) ; tests unit + Playwright |
| Schema / API | unchanged |
| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`bc878568` / BUILD `3g7UH7AXjSWhxrT20D3-w`) |
| Validations | tsc PASS ; lint warnings préexistants ; build PASS ; vitest open-preparation+studio-rail 16 PASS ; Playwright UX-004+UX-003 18 PASS (BROWSER FAKE) |
| Push Product | **AUCUN** |
| RECETTE | **NON MODIFIÉE** — nouveau SHA non servi ; GO distinct requis |
| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 CORRECTIF` |

## delivery_id: DELIV-2026-11-16-ML4D-UX004-PORTFOLIO-SHELL

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~08:15 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-004 convergence portefeuille et shell personnel |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservé) |
| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Changes | Rail personnel fixe + scroll contenu indépendant ; nav unique Portefeuille / Nouveau projet ; nav mobile inférieure ; libellé Préparations ouvertes ; cartes sans id technique ; états vides/mixtes ; tests e2e/F2 ; contrat visuel UX-004 |
| Schema | unchanged |
| Lanes | DEV explicite `:3102` ( `:3100` déjà occupé par autre worktree ) ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`a77a3a2` / `vYeNRRzvLN03N73wmcKkR`) ; STABLE NOT AVAILABLE |
| Validations | tsc PASS ; lint warnings préexistants ; build PASS ; vitest unit ciblés PASS ; Playwright UX-004+UX-003 19 PASS ; F2 rail 246 / topbar 66 |
| Push Product | **AUCUN** |
| RECETTE | **NON MODIFIÉE** (GO distinct requis pour nouveau SHA) |
| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 DEV` |

## delivery_id: DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~06:40 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-003 corrections finales + mise à disposition RECETTE locale |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux003-unified-entry-20261116` |
| Base | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Parent candidate | `31f23858ef5ed9cb8e6318133c3c399f39777b71` |
| Changes | Status hors panneau (anti-troncature) ; `testLoginAvailable` via `/api/auth/status` ; `/` → `/login` si non auth ; tests e2e étendus ; RECETTE figée |
| Schema | unchanged |
| Lanes | DEV + E2E `:3101` ; RECETTE `:3200` worktree/build séparé ; STABLE NOT AVAILABLE |
| Push / PR | **NON** |
| Version produit | NOT AVAILABLE |
| Status | candidate locale figé — EN ATTENTE MORRIS UX RECETTE |
| Risks | Cookie same-host réserve ENV-01 A (mitigation profils navigateur) ; session_expired simulé ; CTA F2 Δ2 px |


## delivery_id: DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~01:30 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-003 Entrée unifiée (desktop / mobile / session expirée) |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux003-unified-entry-20261116` |
| Base | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Figma | `574:425` · `574:466` · `574:490` (file `itgvCulInEnFY6DvgIegvP`) |
| Changes | Composant `UnifiedStudioEntry` ; `/login` sans rail ; assets décor ; variante `?reason=session_expired` ; tests unit+e2e+captures |
| Schema | unchanged |
| Lanes | DEV / E2E isolés ; RECETTE non mutée ; STABLE NOT AVAILABLE |
| Push / PR | **NON** — GO Morris requis pour publication projet |
| Version produit | NOT AVAILABLE (attribution Morris) |
| Status | candidate locale — supersédé par DELIV-…-RECETTE après corrections |
| Risks | Session expirée non détectée nativement ; DEV strip hors Figma ; F2 ctaW delta 2 CSS px |


## delivery_id: DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~19:40 CET (Europe/Paris) ; régularisation preuves ~20:50 CET |
| Macro-lot | ML4C — Fiabilisation navigation surface + clôture documentaire PR #678 |
| Type | PATCH correctif / NO RELEASE |
| Branch | `docs/next-ml4c-closure-20261115` |
| Base | `main@05e71a7166562211b1c8c168a40dcd35e4f8c8a3` |
| Parent tip (docs HEAD avant correctif) | `968ea252fb46732d0862e3809390b1a36e6f991b` |
| Correctif initial SHA | `1a657684f44228768365f9f2d507e2e95e9857d2` |
| Hygiene WS SHA | `69aa8b1d477fd3add7ca038815c7157b9b467f7e` |
| CI SUCCESS (correctif+WS) | run `43749279172` on `69aa8b1d` — Build + Next Required Gate + Studio Required Gate |
| Régularisation | intent scopé `projectId` ; `data-project-load-state` ; e2e concurrence post-ready + isolation A→B |
| Tree web ML4C initial | `f2427adcd31b044115f85cdc48cfb6dd157d9551` |
| Tree web @69aa8b1d | `787537cb344cc2c13dc3cd20c43e8572d52249af` |
| Tree web post-régularisation | `3f34d2ad4a4340fc2fdf6f19ac0b15858441e39a` |
| HEAD régularisation | `c2d9b24f5db474a7a40bc13edc027582b154480b` |
| Cause | Concurrent `load()` `replace(?surface=travail)` vs rail `<Link>` sans intent partagé ; intent global non isolé entre projets |
| Changes | Intent project-scoped ; load-state observable ; tests unit/e2e concurrence+isolation ; as-built addendum |
| Schema | unchanged |
| Lanes | DEV / E2E `:3101` / PG isolé ; RECETTE non mutée ; STABLE NOT AVAILABLE |
| Tests locaux (régularisation) | UNIT 369 ; PG 471 ; BUILD PASS ; Playwright 31 PASS |
| CI SUCCESS (régularisation) | run `43755023230` on `c2d9b24f` — Build + Next Required Gate ; Studio Required Gate `43755023210` |
| Status | PR readiness — gate merge Morris |
| Risks | Réserves ML4C historiques inchangées (S05-06/08, TTL, ENV-R09, Git REAL, LIVE) |


## delivery_id: DELIV-2026-11-15-ML4C-REVISE-FENCE-TITLE-PROVENANCE

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~06:25 CET (Europe/Paris) |
| Macro-lot | ML4C — Clôture réserve A : provenance titre fence (STRUCTURED vs LEGACY_UNTITLED) |
| Type | PATCH corrective Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `c777358eacefa94c33b04a4d590ce9da7a8c525c` (LOCAL ONLY) |
| Prior handoff | `sfia/review-handoff@37dea98c` blob `b892e70d` |
| Lane | UNIT/PG DEV ; Playwright E2E `:3101` ; LIVE NOT RUN ; RECETTE non mutée |
| Cause | `isLegacyUntitledSectionFence` s’appuyait sur le texte sentinel seul — une fence STRUCTURED `title-b64=Document Nora` était admise à tort |
| Changes | `titleProvenance` sur extract ; exception sectionScoped uniquement si `LEGACY_UNTITLED` |
| Schema | unchanged |
| Tests | UNIT 363 ; PG 471 ; BUILD PASS ; E2E ciblés 11 PASS ; LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-15-ML4C-REVISE-SOURCE-CONFLICT

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~05:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Remédiation REVISE D4 `PROPOSAL_SOURCE_CONFLICT` (LIVE-03) |
| Type | PATCH corrective Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` (LOCAL ONLY) |
| Design | `c883db07` conception corrective D4 continuité |
| Prior LIVE handoff | `sfia/review-handoff@7433bdfd` blob `0b1e87c8` |
| Lane | UNIT/PG DEV ; Playwright E2E `:3101` ; LIVE DEV `:3100` borné ; RECETTE non mutée |
| Cause | CAUSE B (+ A) — fence LEGACY sans H1 → titre sentinel `Document Nora` ≠ titre document ; LF structurel seul sur le corps |
| Changes | `confrontProposalWithFence(..., { sectionScoped })` ; constante `LEGACY_UNTITLED_DOCUMENT_TITLE` ; câblage REVISE `service.ts` |
| Schema | unchanged |
| Tests | UNIT 359 ; PG 470 ; BUILD PASS ; E2E ciblés 11 PASS ; LIVE REVISE PROVEN (DELTA-15 → v2 AVAILABLE) |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-15-ML4C-S05-BROWSER-ORACLE

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~00:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Triage/remédiation oracles E2E S05 real-api (SAFE vs RISK UNKNOWN) |
| Type | PATCH test/fixture Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `6c50a1446734341b43a4f110aacde21c727fb2b1` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior handoff | `sfia/review-handoff@9fe6f63c` blob `7d57f65b` |
| Lane | Playwright E2E `:3101`/`sfia_next_e2e` ; UNIT/PG DEV ; RECETTE `:3200` non mutée |
| Changes | `seed_unknown_effect_risk` + oracles SAFE/RISK dans `ml4c-s05-real-api.spec.ts` ; runtime inchangé |
| Schema | unchanged |
| Tests | UNIT 351 ; PG 468 ; BUILD PASS ; real-api 8 PASS ; continuity 3 PASS ; LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-P3-ASSERTION-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~23:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Clôture écarts P3 NOT_EXECUTED vs FAILED + qualification DEV |
| Type | PATCH test/qualification Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `a2d37d1f600836f353f44061687f0795cdc10377` (LOCAL ONLY) |
| Prior handoff | `sfia/review-handoff@c3ec20fb` blob `fd32dd8e` |
| Lane | DEV PG `:5433` ; Playwright E2E `:3101`/`sfia_next_e2e` ; RECETTE `:3200` non mutée |
| Changes | assertions C10 / B-iso-neg CREATE+REVISE → NOT_EXECUTED pré-effet (runtime inchangé) |
| Schema | unchanged |
| Tests | UNIT 351 ; integration 468 GREEN ; BUILD PASS ; E2E targeted PASS ; LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-S05-KNOWLEDGE-OWNER-EVIDENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~23:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Complément S05 knowledge owner evidence (acquis/open_points/subjects) |
| Type | PATCH corrective Critical complementary (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior handoff | `sfia/review-handoff@66b44bc2` blob `f4c70543` |
| Lane | DEV PG `:5433` ; RECETTE `:3200`/`:5434` non mutées |
| Changes | structured knowledge provenance probe ; open_points ; subject non-attribution ; K01–K10 PG |
| Schema | unchanged |
| Tests | UNIT 351 PASS ; PG knowledge+S05+D4 PASS ; BUILD PASS ; BROWSER/LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~22:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Remédiation S05 R-01/R-02 (owner evidence + SAME_INTENT) |
| Type | PATCH corrective Critical complementary (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `3d0eab6f01cb8013990193cea93e8bfa5248831d` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior ChatGPT | REVIEW NOT APPROVED — SAFETY GAP / REVIEW PACK INCOMPLETE |
| Lane | DEV + Vitest PG `:5433` ; RECETTE :3200/:5434 non mutées |
| Changes | `probeSiblingOwnerEffects` ; `buildTurnCorrelationKeys` ; sibling `operationId` ; S05-R* UNIT+PG |
| Schema | unchanged |
| Tests | UNIT 351 PASS ; PG S05/D4 focused PASS ; BUILD PASS ; BROWSER/LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 remédiation in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-D4-S05-CONTINUITY

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~22:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Fiabilité création/révision documentaire D3/D4 + continuité S05 |
| Type | PATCH corrective Critical integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `d936da81ebf7d17eb78cc11da0538df000281a4a` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior P0 handoff | `ce53377c` / blob `ed74c45c` |
| Lane | DEV + Vitest PG `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | confront structural LF ; S05 risk policy ; ACK NOT_EXECUTED ; fence-after-ACK ; Nora sas guidance |
| Schema | unchanged |
| Tests | UNIT PASS ; PG focused PASS ; BUILD PASS ; E2E/LIVE NOT RUN |
| Status | SUPERSEDED IN PART by DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE (R-01/R-02) ; P1/P3 retained | |



## delivery_id: DELIV-2026-11-14-ML4C-PROVENANCE-PARSE-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~12:50 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture fallback provenance stockée illisible + preuve 100 paires E2E |
| Type | INC Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@357008ea` blob `b111a972` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | `reconcileWithProvenanceResolution` refuse stored parse null ; E2E 200 msgs (100 pairs) |
| Schema | unchanged |
| Tests | PARSE-01…12 + FLOW-100 + non-rég ; LIVE NOT PROVEN |
| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |

## delivery_id: DELIV-2026-11-14-ML4C-SEALED-IDENTITY-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~12:20 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture identité scellée (no downgrade + field presence) + E2E HTTP same command |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@70f43b3f` blob `37ae086f` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | resolveProvenanceIdentity dual (request+stored) ; hasOwn required fields ; integrated PREPARE→GET |
| Schema | unchanged |
| Tests | DOWN/FIELD/E2E + non-rég ; LIVE NOT PROVEN |
| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |

## delivery_id: DELIV-2026-11-14-ML4C-SEALED-REPLAY-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~11:40 CET (Europe/Paris) |
| Macro-lot | ML4C — Sealed replay fail-closed + historical fence tag compatibility |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@c06ffffa` blob `48b0911a` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | resolveProvenanceIdentity ; SEALED_INVALID refuse ; tag case-insensitive LEGACY ; FLOW USER replay + HTTP GET |
| Schema | unchanged |
| Tests | SEAL/COMPAT/FLOW + non-rég ; LIVE NOT PROVEN |
| Status | LOCAL ONLY product ; Review Handoff L3 published in-cycle |

## delivery_id: DELIV-2026-11-14-ML4C-DOCUMENT-INTEGRITY-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~11:20 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture définitive intégrité documentaire (P0-A / P0-B / P1) |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@3efc082a` blob `855a436c` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | parseFenceMeta 3-états ; SHA recalculé DB ; confrontProposalWithFence ; PREPARE→N+100 |
| Schema | unchanged |
| Tests | META/HASH/SRC/N+100 + non-régression ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-14-ML4C-DOCUMENT-INVARIANT-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~11:00 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture invariants documentaires F-01…F-05 |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@c1add5cb` blob `714a86d1` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | F-01 identity compare ; F-02 reversible fence codec ; F-03 PREPARE durableProposal ; F-04 ASSISTANT_MESSAGE source ; F-05 binding selector + HTTP 409 ; P1 fitBudget/ambiguity/browser |
| Schema | unchanged |
| Tests | unit 289 PASS ; PG 393 PASS ; Playwright ML4C ciblé ; tsc/eslint/build PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-CRITICAL-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~10:10 CET (Europe/Paris) |
| Macro-lot | ML4C — Correctif Critical Review (C-01…C-07) continuité Nora / D4 |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@93e277c2` blob `510b410f` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | reconcile read-only ; canonicalize proposal ; prior assistant source ; correlation salt ; history walk/budget ; UX 320+ |
| Schema | unchanged |
| Tests | unit 277 PASS ; PG ML4C 29 PASS ; Playwright C-07 320+ PASS ; tsc/eslint/build PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-NORA-DOCUMENTS

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~09:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Continuité cognitive Nora, historique long et création/révision documentaire D4 |
| Type | EVOL Critical integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local) = tip `origin/build/next-ml4c-functional-convergence@67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Lane | DEV `:5433` + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | history-tools + SDK tools ; documentProposal ; document-command admit/seal ; CREATE atomique + REVISE fence/fingerprint ; UX composeur sticky ; as-built |
| Schema | unchanged (indexes existants utilisés) |
| Tests | unit 272 PASS ; PG history+document-command 11 PASS ; ML2 Q10 O-05 PASS ; Playwright composer PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-12-ML4C-FINAL-SCOPE-GUARDS-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~19:20 CET (Europe/Paris) |
| Macro-lot | ML4C R5 — gardes finales cible durable (`*` / kind D6) + freeze RECETTE |
| Type | EVOL Critical corrective + mise à disposition RECETTE (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` |
| Lane | DEV/E2E tests ; RECETTE figée après CI GREEN (campagne ML4C-UAT-2026-11-12) |
| Changes | `restrictionTargetMatchesHint` fail-closed vs globale ; LIFT exige hint durable ; `resolveReviseDecisionTarget` exige RECORD_DECISION ; tests G01–G05 / D01–D07 |
| Schema | unchanged |
| Tests | unit 252 PASS (248+4) ; PG 336 PASS (324+12 G/D) ; Playwright 25 PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 puis freeze RECETTE si CI GREEN |

## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~18:40 CET (Europe/Paris) |
| Macro-lot | ML4C — sécurisation frontières d’autorité R1/R2/R3 (PR #676) |
| Type | EVOL Critical corrective / SECURITY / QUALITY (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `9c163d621589e7ba9d7369ad5a0342a9bbde8b04` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Résolveur propriétaire unique `durable-target-resolve.ts` (REVISE/LIFT) ; body HTTP = écho uniquement ; fixtures explicites (`registerExplicitFixture`) ; suppression `registerPgUtteranceFixture` ; ENV-R06A/B (NOT_VERIFIED si :5434 absent) ; tests négatifs multi-cible D6/restriction |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 324 PASS ; Playwright 25 PASS ; tsc/eslint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-CI-PARITY

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~17:50 CET (Europe/Paris) |
| Macro-lot | ML4C — correctif non-régression sémantique + CI PG (PR #676) |
| Type | EVOL Critical corrective QA (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `83fd9ecef2d952c90a828d68a192e105c83be35f` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Helpers fixtures typées ; adaptation 5 suites PG (53 échecs CI) ; ENV-R06 NOT_VERIFIED si :5434 absent ; P1 USER_MESSAGE accepte decisionId/restrictionId résolus depuis hints durables ; C02 fault hook après autorité SEM/TV ; P1 follow-on D4 différé tant que D2 attend l'acte Pilote ; P1 pending ACK-lost conservé (pas d'écrasement B) ; PilotagePanel OPEN toujours structuré |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 318 PASS (baseline conservée) ; Playwright Atlas+ML3 9 PASS ; lint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-FINAL-RUNTIME-QUAL

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~15:10 CET (Europe/Paris) |
| Macro-lot | ML4C — Q1 real D2 AWAITING_PILOT_ACT + S05 / Q2 ENV-01 runtime+PG isolation |
| Type | EVOL Critical corrective QA (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé ; Playwright :3101 / `sfia_next_e2e` ; RECETTE :3200 non mutée (creds DENIED :5434) |
| Changes | Tests Q1 parcours D2 réel (PG+E2E) ; ENV-01 matrix + cross-lane auth deny ; as-built Q1/Q2 ; **aucune** injection artificielle de mission pour Q1-A |
| Schema | unchanged |
| Tests | Q1 PG 3 PASS ; Q1 E2E 1 PASS ; ENV 6 PASS ; tsc PASS ; related unit/PG PASS ; LIVE NOT RUN |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED — READY FOR CHATGPT REVIEW (reserves LIVE/S02-01/A-006) |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-ADMISSIBILITY-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~14:45 CET (Europe/Paris) |
| Macro-lot | ML4C — C-01 AUTH-R06 positif / C-02 S05-REAL-05 AWAITING / C-03 fixture isolation / C-04 pack cumulatif |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE non mutée |
| Changes | AUTH-R06 OPEN+TRANSITION both APPLIED ; seed_awaiting_mission + S05-REAL-05 ; e2eFixtureMutationsAllowed (E2E obligatoire) ; pack FULL cumulatif |
| Schema | unchanged |
| Tests | AUTH 13 PASS ; fixture gate 6 PASS ; S05 real-api 7 PASS ; LIVE NOT RUN |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES — REVIEW REQUIRED |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-EVIDENCE-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~14:05 CET (Europe/Paris) |
| Macro-lot | ML4C — F1–F4 evidence closure (reconcile / AUTH real / S05 real API / D4 epistemic) |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
| Changes | F1 runner reorder ; F2 AUTH-R01–R14 PG ; F3 S05 real-api E2E ; F4 no FACT from Nora alone + pre/post knowledge roles ; multi-intent durable match |
| Schema | unchanged (no DB migration) |
| Tests | unit+ML4C PG 264 PASS ; AUTH 13 PASS ; E2E S05 real-api 3 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES — REVIEW REQUIRED |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~13:35 CET (Europe/Paris) |
| Macro-lot | ML4C — Integrator closure R1 S05 full / R2 human-act idempotence / R3 D4 semantic knowledge / R4 preuves |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
| Changes | S05 gate D2/D4/D5/D6/D7 + missions ; actInstanceId serveur + replay ALREADY_APPLIED ; `d4.record_knowledge` + capitalisation sélective ; sélection preferred-ids |
| Schema | unchanged (Zod envelope extended ; no DB migration) |
| Tests | unit 240 PASS ; PG 35 PASS ; E2E S05 1 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~12:45 CET (Europe/Paris) |
| Macro-lot | ML4C — Integrator Lots A–E (superseded by INTEGRATOR-CLOSURE) |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Status | SUPERSEDED |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~12:10 CET (Europe/Paris) |
| Macro-lot | ML4C — Corrective convergence sémantique (D5/D6 / T-03 / S05 / lexical purge) |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé ; RECETTE figée ; STABLE N/A |
| Changes | `pilotageOperation` typé ; match qualification durable owner ; stash `applied` obligatoire ; merge terminal ; `nextTurnKind` serveur ; fixture scénarios exacts ; purge `PHRASES` / corps lexical D4/D5 ; page S05 sans `qualifyThreadTurn` |
| Schema | unchanged |
| Tests | unit 36 PASS ; PG/E2E/LIVE NOT RUN |
| Status | LOCAL ONLY — Review Handoff L3 corrective ; IMPLEMENTED WITH RESERVES |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 11:43 CET (Europe/Paris) |
| Macro-lot | ML4C — Qualification sémantique Nora + mobilisation gouvernée |
| Type | EVOL Critical — remplacement routeurs lexicaux métier (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé ; RECETTE figée `2416e2ee` ; STABLE N/A |
| Changes | Enveloppe `ml4c-sem-qual-v1` ; LIVE `outputType`+Zod ; fixture TEST_BOUNDARY ; D5/D6 après Nora + `preQualified` ; stubs fail-closed ; stash pré-effet — **revue ChatGPT NOT READY → corrective** |
| Schema | unchanged (stash via `resultJson` existant) |
| Tests | unit semantic/intent/S05/cognitive/mission PASS ; PG/E2E/LIVE NOT RUN |
| Status | SUPERSEDED BY CORRECTIVE — réserves D5/D6/T-03/S05/lexical |

## delivery_id: DELIV-2026-11-11-ML4C-S05-POSITIVE-INDEPENDENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — INC S05 qualification positive (PR #676) |
| Type | INC — indépendance positivement établie ; inconnu → INCERTAIN (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` |
| Parent tip | `8cff1591` |
| Lane | DEV :5433; mutative → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | Supprime repli « inconnu/? ⇒ indépendant » ; `qualifyThreadTurn` n'établit DIALOGUE_INDEPENDANT que sur marqueurs cognitifs positifs ; INCERTAIN sans pending n'invente pas de pending métier |
| Schema | unchanged |
| Status | PR #676 corrective — CI à rejouer — LIVE/REAL carried |

## delivery_id: DELIV-2026-11-11-ML4C-S05-INTENT-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — INC correctif S05 qualification d'intention (PR #676) |
| Type | INC — robustesse qualification vs exclusion (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` |
| Parent tip | `ba91cf71` |
| Lane | DEV :5433; mutative → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | `qualifyThreadTurn` (DIALOGUE_INDEPENDANT / INTENTION_EFFET / INCERTAIN) réutilise `qualifyPilotageIntent` + D4 ; fin du défaut « aucune regex ⇒ indépendant » ; CR-02 OPEN_CYCLE « le » |
| Schema | unchanged |
| Status | PR #676 corrective — CI à rejouer — LIVE/REAL carried |

## delivery_id: DELIV-2026-11-11-ML4C-S03-S05-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — INC correctif S03/S05 (même candidat) |
| Type | INC — vérité des effets + pending préservé (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` (local — no project push) |
| Parent tip | `cb0738b5` (S02 taxonomy + S05 dialogue) |
| Lane | DEV :5433; mutative tests → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | S03 `documentSaveToEffectSummary` / no UNKNOWN→FAILED collapse in `continueAfterProjectCreated`; S05 `preserveUnresolvedMetierPending` on independent COMPLETE; classifier tightens interrogative effect requests |
| Schema | unchanged |
| Status | LOCAL CORRECTIVE — ChatGPT technical review — LIVE/REAL gates carried |

## delivery_id: DELIV-2026-11-11-ML4C-FUNCTIONAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — Convergence fonctionnelle intégrée |
| Type | EVOL — construction locale (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` (local — no project push) |
| Parent | main `6d237452` (ENV-B merged) |
| Lane | DEV :5433; mutative tests → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | S01 honest portfolio status; S02 create ACK reconcile UI + versioned D2_ACK_OBS; S03 continueAfter document ACK; S05 independent-Q while awaiting; S04 cognitive baseline doc (no vector engine); SCRIPTED S06 path reused |
| Schema | unchanged |
| Status | LOCAL CANDIDATE — ChatGPT technical review — LIVE/REAL gates carried |

## delivery_id: DELIV-2026-11-11-ENV-B-VITEST-PG-GATE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C / CP2 — ENV-B sécurisation tests PostgreSQL |
| Type | INC — sûreté dispositif de test (NO RELEASE) |
| Branch | `fix/next-env-b-vitest-pg-gate` |
| Parent | main `42aa3739` |
| Lane | DEV :5433; mutative Vitest → `sfia_next_e2e` only; RECETTE/STABLE untouched |
| Changes | Fail-closed Vitest PG gate (`e2e-pg-gate` + setup + `db/client`); CI migrates `sfia_next_e2e` before Vitest integration |
| Schema | unchanged (reuse migrations 001→012 on ephemeral CI E2E DB) |
| Status | PR readiness — merge soumis à décision Morris — NO RELEASE |

## delivery_id: DELIV-2026-11-10-ML4-NORA-PR-READINESS-INTEGRATION

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | Cycle 13 — PR readiness / intégration locale ML4 + Nora continuity |
| Type | EVOL — consolidation candidature (MINOR CANDIDATE, NO RELEASE) |
| Branch | `integrate/next-ml4-nora-pr-readiness-20261110` (local — not pushed) |
| Parent tips | Nora DEV-08 `e40a1baf` + main `6667a438` + docs cadrage `69c27832` + registre RECETTE `2075aa4f` |
| Morris decision | RECETTE ML4 TERMINÉE AVEC RÉSERVES (10/11/2026); R13/R14 NOT RUN carried; no merge GO |
| Changes | Integration merges only — no functional development; candidacy consolidates ML4 Git, post-RECETTE fixes, Nora DEV-01..08, cadrage, RECETTE register |
| Schema | migrations 008–012 inherited from ML4 lineage (unchanged this cycle) |
| Tests on candidacy | unit intent+mission 15; PG global 21 + ACCEPT-01 8; tsc/build PASS |
| Status | LOCAL PR READINESS — READY FOR MORRIS PUSH/PR DECISION — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-08

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Contexte de travail + isolation mission (RG-CTX-001) |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-07 @ `833a3e6c` |
| Lane | DEV :5433; E2E :3101 / `sfia_next_e2e`; RECETTE untouched |
| Changes | `recoverPendingMissionContinuation` binds to `create_project_commands` d2:mission owner act for THIS project — never lone neighboring awaiting; S06/S07/S05 isolation proofs; interproject Nora read = N/A non-implemented (D4 tools prep-scoped) |
| Schema | unchanged |
| Tests | PG global 21; ACCEPT-01 8; Playwright Atlas 2; tsc/build |
| Status | LOCAL FINALISATION — READY FOR CHATGPT ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-07

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité globale — autorité avant effet + reprise nominale + concurrence progressive + oracle navigateur |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-06 @ `3fac229f` |
| Lane | DEV :5433; E2E browser :3101 / `sfia_next_e2e`; RECETTE untouched |
| Changes | G1 `authorizeMissionBoundD2Create` before `createProjectCommand` (mismatch ⇒ zero project); G2 `recoverPendingMissionContinuation` + POST `/mission-continuation/resume` + project open COMMAND; G3 concurrency oracle requires COMPLETED + recovery; G4 Atlas Playwright document/reload + forged-key BEFORE create; classic path unbound |
| Schema | unchanged |
| Tests | unit intent-conduction 8; PG global 18; ACCEPT-01 8; Playwright Atlas 2 PASS; tsc/build PASS |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-06

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Conduite globale — concurrence xact fence + liaison mission↔D2 + reprise crash + browser |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-05 @ `f99e4501` |
| Lane | DEV :5433; E2E browser :3101 / `sfia_next_e2e`; RECETTE untouched |
| Changes | Removed session `pg_advisory_lock`; short `pg_advisory_xact_lock` + `owner_token` CAS; `verifyMissionForD2Act`; structured `awaitingMission` API/UI (no Nora text parse); crash hooks P3/P5; Atlas Playwright BROWSER OBSERVED |
| Schema | unchanged |
| Tests | unit 8; PG global 16; ACCEPT-01 8; Playwright Atlas 1 PASS; tsc/build PASS |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-05

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité globale — fiabilisation G1–G7 |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-04 @ `5c6b0cee` |
| Lane | DEV only; RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
| Changes | Latest-per-intentKey mission load (G1/G3); ownerActBinding + clientIntentKey D2 correlation (G2); mobilizeCapability on real D2/D4 (G4); advisory lock + RUNNING continuation fence (G5/G6); S07 knowledge + S08b D5→D4; UI create-project passes clientIntentKey |
| Schema | unchanged |
| Tests | unit 8 PASS; PG global 13 PASS; PG ACCEPT-01 8 PASS; tsc/eslint/build PASS; browser S14 NOT PROVEN (no DEV server :3100) |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-04

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Finalisation conduite globale des intentions (GAP-01..07) |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-03 @ `12e26e32` |
| Lane | DEV only (`sfia_next_dev` @ 5433); RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
| Changes | `continueAfterProjectCreated` after D2 create (no second Pilot message); exact project name extract (GAP-05); intention-anchored `loadPriorMissionProjection`; `mobilizeCapability` executable contract; D5/D6 PG proofs; Atlas blocking scenario C |
| Schema | unchanged (mission fields on projection JSON only) |
| Tests | unit intent-conduction 7 PASS; PG global 10 PASS; PG ACCEPT-01 8 PASS; tsc PASS; eslint PASS; next build PASS |
| Evidence limits | SCRIPTED GitHub + Nora fixture DEV; no REAL; no Product push; no RECETTE |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité cognitive Nora/Studio ACCEPT-01 |
| Type | EVOL — capacité transverse (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local DEV worktree — not pushed) |
| Base | `d7f1507a56e50660ea24903c2dc563c249ba9086` / tree `3e9e1086…` |
| Lane | DEV only (`sfia_next_dev` @ 5433); RECETTE 3200/5434 untouched |
| Changes | D3 mission-continuity helper; post-D4 CognitiveContinue; D7 prepare from chat; auto resume after authorizePublication; tests unit+PG |
| Schema | unchanged (no WorkIntent table) |
| Tests | unit mission-continuity 5 PASS; PG ACCEPT-01 3 PASS; NR CREATE subset 3 PASS; tsc --noEmit PASS |
| Evidence limits | SCRIPTED GitHub + Nora fixture; no REAL publish; no RECETTE; no Product push |
| Status | LOCAL CONSTRUCTION — NO RECETTE OR REAL PROMOTION |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01-REG

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / ACCEPT-01 — régularisation Review Pack + correctif UX panel |
| Type | EVOL correction locale (NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01 @ `b0e23c46` |
| Lane | DEV only; RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
| Changes | PublicationInspectionPanel reflects `missionResume.status` after authorize; PG replay C2/C5 test; FULL Review Pack |
| Defect fixed | After auto-resume, UI kept AUTHORIZED and left Dispatch enabled as if nominal |
| Schema | unchanged |
| Status | LOCAL REGULARIZATION — NO PRODUCT PUSH / RECETTE |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-02

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité cognitive — correction P0-A..P1-E + preuves transverses |
| Type | EVOL correction intégrée (NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | REG @ `cf5bac70` |
| Lane | DEV only; RECETTE untouched |
| Changes | Mission-gated auto-resume; durable recover via listMessages/turn/reconcile; idempotent restitution; cognitive continue post-effet; publish qualification sans GitHub-centrisme; tests T01/T03/P0-A/P0-B/P1-E |
| Schema | unchanged |
| Status | LOCAL CONSTRUCTION — NO PRODUCT PUSH / RECETTE |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-03

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité cognitive GLOBALE — mise en conformité transverse |
| Type | EVOL (NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-02 @ `f42cb2f5` |
| Lane | DEV only; RECETTE untouched |
| Changes | intent-conduction D3 commun; D2 await Pilot act + reprise; READ≠COMMAND (listMessages); scénarios A/B/C/D/I/K + ACCEPT-01; contrats d'extensibilité |
| Schema | unchanged |
| Status | LOCAL CONSTRUCTION — NO PRODUCT PUSH / RECETTE |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / entrée & continuité (premier vertical) |
| Type | INC / nouvelle capacité, pré-1.0 |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Working tree | local uncommitted construction under `projects/sfia-studio-next/web` |
| Product version target | `NO RELEASE` (proposal `0.1.0-rc.1` not attributed) |
| Lane | DEV (`127.0.0.1:3100`, Postgres `5433`) |
| Schema revision | `001_initial_studio_core` |
| Tests | Vitest unit + PostgreSQL integration (see web test run) |
| Evidence limits | GitHub OAuth LIVE BLOCKED without secrets; OpenAI LIVE optional; Figma native pending; RECETTE NOT AVAILABLE |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-02-CRITIQUE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 consolidation critique (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Next 15.5.29; D2 fingerprint under lock; D4 prep-scoped docs + SAVING; D3 Agents SDK adapter; D1 authMode + Better Auth mount + loopback DEV login; Playwright smoke PASS |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001_initial_studio_core` + `002_session_auth_mode` |
| Tests | unit 3 PASS; integration 13 PASS; Playwright 1 PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-03-CONTINUITE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Better Auth→PilotId session bridge; advisory-lock atomic idempotency across preparations; project reopen by projectId API/UI; Playwright portfolio path |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged (`001` + `002`) |
| Tests | unit 3 PASS; integration 21 PASS; Playwright 1 PASS; build+tsc PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-04-OAUTH-STATUS-REPROOF

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Fix `/api/auth/status` when OAuth configured; re-proof A/B/C; bounded OAuth start URL (no callback LIVE claim); secrets never in handoff |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged |
| Tests | unit 3; integration 21; Playwright 1; build+tsc; OAuth status+signin-start PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-05-LIVE-QA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 LIVE qualification consolidation (same lot) |
| Type | INC corrective / qualification |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | D1 late GitHub link backfill; PostCSS override 8.5.32; A01–A16 reclass; Nora LIVE adapter proof; integration forces fixture; Playwright LIVE-aware |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 3; integration 22; Playwright 1; build+tsc; npm audit prod postcss closed |
| Status | ML1 LOCAL QUALIFICATION REVIEWABLE candidate — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-06-PRECOMMIT

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 first local project commit |
| Type | INC / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (parent = base; unpublished) |
| Changes | ML1 web vertical + D1 lane fail-closed emit; matrice temporal DESIGN ONLY vs DEV |
| Product version | `NO RELEASE` |
| Status | LOCAL COMMIT — awaiting ChatGPT review / Morris push gate |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-07-PREPUSH-CORRECTIONS

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 targeted pre-push corrections (same lot) |
| Type | INC corrective / Critical Review findings |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (preserved) |
| Commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (parent `0b982b3b…`; unpublished) |
| Changes | A: strict loopback + DEV consume fail-closed; B: `db:migrate` 001→002 + fresh-container proof; C: owned E2E :3101 / `sfia_next_e2e` / Nora fixture-only |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001` + `002` via `npm run db:migrate` |
| Tests | unit / integration (incl. isolated migrate container) / Playwright FAKE E2E — see Review Pack |
| Status | LOCAL CORRECTIVE — preserved under subsequent guardrail commit |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-08-ENV-BOUNDARIES

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 pre-push environment boundaries (same lot) |
| Type | INC corrective / isolation guardrails |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (preserved; commits 1–2 untouched) |
| Commit | tip SHA after this delivery commit (resolve via `git rev-parse HEAD`; no circular amend) |
| Changes | P1: Nora fixture DEV-only + fail-closed outside DEV / missing key; P2: E2E PG preflight before CREATE/migrate; P3: `distDir` `.next-e2e` vs `.next` |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 22; integration 26; Playwright FAKE 1; build/tsc/lint — see Review Pack |
| Status | LOCAL CORRECTIVE candidate — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-MERGE-09

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 — entrée et continuité |
| Type | INC / Git integration and bounded functional acceptance record |
| Branch | `sfia/next-access-preparation-continuity` |
| Candidate SHA | `0db58be8240a00593092048ee74299f19374f489` |
| Candidate commits | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` → `8767185234bab9b2cad7800771a6bfc0ae1d19e4` → `0db58be8240a00593092048ee74299f19374f489` |
| PR / merge | [#649](https://github.com/mcleland147/sfia-workspace/pull/649) MERGED on 2026-11-04; `main@747cbec0ac9c161306db34121b0447391b23589c` |
| Tree | `69d48cc33a91af6635856babb620a7735aa55fe6` — identical between C3 candidate and merge |
| RECETTE | Morris functional acceptance, including GitHub OAuth LIVE and Nora LIVE; build `PMCGeil9wv8DZNBfEGf4H` bound to C3 candidate |
| Historical test evidence | Unit 22 PASS, PostgreSQL integration 26 PASS, Playwright 1 PASS with DEV fake identity/Nora fixture; separate LIVE observations; neither implies R6 or Next CI PASS |
| Carried reserve A | DEV/RECETTE cookie collision on shared `127.0.0.1` host despite different ports; separate browser profiles mitigation; re-mediate/re-test before STABLE; no cross-DB authority breach proven |
| Carried reserve B | Historical GitHub Required Gate SUCCESS with Next build SKIPPED; dedicated Next CI workflow and proof needed before next significant delivery, under distinct shared-path GO |
| Post-merge runtime | Independent smoke NOT OBSERVED |
| Product version | `NO RELEASE` ; `STABLE NOT AVAILABLE` ; no release tag / no ADOPTED |
| Status | **MERGED / FUNCTIONAL RECETTE ACCEPTED WITH RESERVES — ML1 integration evidenced, technical remediation and R6 qualification still open** |

## delivery_id: DELIV-2026-11-05-ML2-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Produire et capitaliser avec Nora |
| Type | INC / nouvelle capacité compatible (prospective MINOR) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | D3 cognition + D4 knowledge/documents + UX surfaces + streaming attempt + tests |
| Product version target | `NO RELEASE` (NOT AVAILABLE — no official attribution) |
| Compatibility | Additive migration `003_ml2_knowledge_documents` ; ML1 data preserved |
| Schema | `001` + `002` + `003` |
| Tests | unit 26 PASS ; PG integration 32 PASS ; Playwright 2 PASS (FAKE) ; `tsc` PASS ; `next build` PASS |
| Evidence limits | Nora LIVE / COG panel / Figma fidelity matrix / CI Next = NOT PROVEN or ABSENT |
| Streaming | Attempted in adapter (`stream: true`) ; UI progressive NOT wired ; LIVE streaming NOT PROVEN |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY WITH RESERVES` |

## delivery_id: DELIV-2026-11-05-ML2-CORRECTIVE-02

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — correctif intégrité D4 / documents / cognition |
| Type | Correctif intégré (même macro-lot) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only) |
| Parent HEAD | `a9a468e9f883128045c516a881f30d6372175c96` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | C1 sujets atomiques ; C2 concurrence révision ; C3 idempotence création ; C4 diff ordonné ; C5 épistémologie capitalisation ; C6 états UX |
| Schema | `004_ml2_integrity_corrective` |
| Product version | `NO RELEASE` |
| Tests | unit 31 PASS ; PG integration 45 PASS ; Playwright 2 PASS ; tsc+build PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` (réserves S1/S2/S3/CI/COG qualifiées, non bloquantes pour intégrité) |

## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-03

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — consolidation corrective C3/C4/C1 |
| Type | Correctif intégré (même macro-lot) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Parent HEAD | `5c7dd7528ff859c9717db865c74d45930dff4219` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | C3-A fingerprint all paths ; C3-B clé UI stable ; C4 budget diff ; C1 journal + concurrence |
| Schema | unchanged (`004_ml2_integrity_corrective`) — no new migration |
| Product version | `NO RELEASE` |
| Tests | unit 34 PASS ; PG integration 50 PASS ; Playwright 3 PASS (FAKE) ; tsc+lint+build PASS |
| Evidence limits | LIVE Nora / COG panel / Figma ML2-S3 / CI Next = NOT PROVEN or ABSENT |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-INTEGRATION-PREP-04

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (préparation) |
| Type | EVOL / préparation intégration Git + instruction CI |
| Branch | `sfia/next-ml2-production-capitalisation` @ `1967b2c5` (local only — **not published**) |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | Git Truth, inventaire candidat, revalidation locale, proposition CI Next (artefact `.tmp` uniquement) |
| CI Next workflow path | **PROPOSED** `.github/workflows/sfia-studio-next-ci.yml` — contenu dans `.tmp-sfia-review/ci-next-workflow-proposal.yml` ; **NOT WRITTEN** under `.github/` |
| CI Next remote | **NOT RUN** — requires distinct Morris GO to install workflow + publish SHA |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS |
| SVG residuals | 5× `web/public/*.svg` create-next-app defaults, untracked, unused → **EXCLUDE** (do not commit) |
| Status | LOCAL INTEGRATION PREP — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY WITH RESERVES` (intégration Git bloquée tant que CI Next absente / non exécutée) |

## delivery_id: DELIV-2026-11-05-ML2-CI-NEXT-INSTALL-05

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (installation CI Next locale) |
| Type | EVOL / workflow CI versionné sur branche construction |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Parent HEAD | `f937477026d25812db000af4d16ab48bd22e9e47` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Created | `.github/workflows/sfia-studio-next-ci.yml` |
| Historical workflows | `sfia-studio-ci.yml` / `interv360-ci.yml` **unchanged** (hashes match origin/main) |
| Gate name | `SFIA Studio Next Required Gate` (not yet added to GitHub branch protection) |
| CI Next remote | **NOT RUN** — requires Morris GO to push branch / open PR for first Actions execution |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS ; actionlint PASS (no findings) |
| SVG residuals | still EXCLUDE (untracked, not staged) |
| Status | LOCAL CI INSTALL — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` (publication Git projet + premier run Actions = gates suivants) |

## delivery_id: DELIV-2026-11-05-ML2-C3B-LOST-ACK-06

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 9 QA / validation (C3-B lost-ACK) |
| Type | INC corrective / BROWSER FAKE C3-B |
| Branch | `sfia/next-ml2-production-capitalisation` (PR #655 DRAFT) |
| Parent HEAD | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Cause | After simulated ACK loss, incidental `reload()` adopted `docId` while create intent was still open, hiding `create-intent-key` and diverting retry into revise-via-save (rev 2 / new key) |
| Fix | `page.tsx` reload skips `docId` adoption while `createDocIntentRef` is active; C3-B Playwright asserts stable create key, zero revise calls, single doc at revision 1 |
| Schema | unchanged |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Status | CORRECTIVE on PR #655 — see Review Pack for CI proof |
| Verdict candidate | pending GitHub Actions on published SHA |

## delivery_id: DELIV-2026-11-05-ML2-COG-OBS-INTEGRATED-07

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — cognition Nora + observabilité intégrées |
| Type | EVOL / construction locale Critical |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only — not published**) |
| Base documentary | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b7c724b020011f19d8814333116674475` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Implemented | cognitive policy TEST_BOUNDARY≠OPERATIONAL ; D4 read tools ; turn command + migration 005 ; JSON obs sink ; HTTP error classification ; tracingDisabled |
| Schema | `005_ml2_conversation_turn_command` applied on DEV `sfia_next_dev` + `sfia_next_e2e` |
| Product version | `NO RELEASE` ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Local proofs | unit 42 PASS ; PG 53 PASS ; Playwright 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE / CI new SHA | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL DELIVERY — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL DELIVERY WITH RESERVES — REVIEW REQUIRED` |

## delivery_id: DELIV-2026-11-05-ML2-CRITICAL-CORRECTIVE-08

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~18:25 CET |
| Macro-lot | R5 / ML2 — correctif Critical post-revue ChatGPT |
| Type | EVOL corrective integrated (same ML2, not new lot) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only — not published**) |
| Parent entry SHA | `53be6097612825b24333821ab3001c35a0b4d757` |
| Base documentary | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | TURN orphan reconcile+CAS ; D4 AVAILABLE-only ; no uncertain SDK fallback ; budgets fail-closed ; search pagination/budget ; OBS allowlist/RO/purge/lane |
| Schema | `005` unchanged (forward-safe) ; `schemaRevision` aligned to 005 |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 50 PASS ; PG 62 PASS ; Playwright 3 PASS ; tsc+build PASS |
| LIVE / CI new SHA / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL CORRECTIVE DELIVERY — REVIEW REQUIRED` |

## delivery_id: DELIV-2026-11-05-ML2-THREE-BLOCKER-09

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~18:45 CET |
| Macro-lot | R5 / ML2 — three-blocker Critical corrective |
| Type | INC/EVOL corrective (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
| Parent SHA | `00736f3a6c34f6f56d628b6dee2097a4aadda91b` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | owner_token fencing+CAS ; SQL pagination terminante ; no SDK auto-retry after run() |
| Schema | migration `006_ml2_turn_owner_token` (forward-only) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 68 ; Playwright 3 ; tsc+build PASS |
| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-TURN-INTEGRITY-10

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~19:15 CET |
| Macro-lot | R5 / ML2 — turn transactional integrity |
| Type | INC corrective (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
| Parent SHA | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | atomic `commitTurnTerminal` (FOR UPDATE + rollback on CAS miss) ; knowledge write fencing ; D4-PAGE-03 STALE termination |
| Schema | unchanged (`006` already present) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 78 ; Playwright 3 ; tsc+lint+build PASS |
| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-PREMERGE-11

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~20:25 CET |
| Macro-lot | R5 / ML2 — consolidation pré-merge PR #659 |
| Type | INC corrective integrated (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**project push FF authorized**) |
| Parent SHA | `df7357873b487d48e32af5de89995bcfbf720210` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
| Corrected | UNKNOWN-CAP DB reconstitution ; ASSIST-REUSE generationId gate ; SAFE-01 two-session PG + DB-fail ; CI labels 001→006 |
| Schema | unchanged (`006` already present) ; no new migration |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 PASS ; PG 89 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | PROJECT BRANCH PUSH (FF) — merge/LIVE/RECETTE still gated |
| Verdict candidate | `PR #659 UPDATED — await CI Next on new SHA — READY FOR CHATGPT PRE-MERGE REVIEW` (CI status filled post-push) |

## delivery_id: DELIV-2026-11-05-ML2-PRE-RECETTE-QUAL-12

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~20:50 CET |
| Macro-lot | R5 / ML2 — qualification intégrée pré-RECETTE PR #659 |
| Type | INC corrective + QA préparation (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**FF push authorized**) |
| Parent SHA | `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
| Corrected | ASSIST-REUSE dual-gen strict + bindTurnGenerationId ; SAFE-01 strict RUNNING + client abort mid-TX ; D4 gen-priority reconstitution ; LIVE/RECETTE docs préparés |
| Schema | unchanged (`006`) ; no migration |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 PASS ; PG 93 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE | **NOT RUN / NOT DEPLOYED** ; manifeste PREPARED |
| Status | PROJECT BRANCH PUSH (FF) — LIVE/RECETTE/merge gated Morris |
| Verdict candidate | `ML2 PRE-RECETTE TECHNICAL CONSOLIDATION — CI NEXT PASS — LIVE/RECETTE GATES PENDING MORRIS` |

## delivery_id: DELIV-2026-11-05-ML2-LIVE-RECETTE-COND-13

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~21:15 CET |
| Macro-lot | R5 / ML2 — LIVE borné + RECETTE conditionnelle PR #659 |
| Type | CAPA+INC+QA integrated (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` |
| Parent SHA | `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| LIVE proofs | 3 scenarios `openai-agents-sdk-live` COMPLETE ; D4 tools on complex ; ~3 contacts / ~€1.05 est. ; model `gpt-6.1-sol` requested |
| Corrected | cookie name per `STUDIO_LANE` ; SAFE-01 DBFAIL-03 ephemeral persistent table + pg_locks waiter |
| Schema | `006` unchanged |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 93 ; e2e FAKE 3 ; tsc+lint+build — filled at commit |
| RECETTE | activation conditionnelle après CI du SHA final ; ML1 RECETTE :3200 **non réinitialisée** |
| Status | PROJECT PUSH FF + conditional RECETTE provision |
| Verdict candidate | `ML2 LIVE BOUNDED REAL PROVEN — RECETTE CANDIDATE AVAILABLE FOR MORRIS REVIEW` (si gate E PASS) |

## delivery_id: DELIV-2026-11-06-ML3-PILOTAGE-DECISIONS-14

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — Piloter et décider |
| Type | INC / nouvelle capacité D5–D6 (MINOR candidate) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` (PR #660 docs merged) |
| Schema | additive `007_ml3_pilotage_decisions` (from `006_ml2_turn_owner_token`) — applied **DEV only** |
| Changes | D6 human_decisions/restrictions ; D5 trajectories/cycles/method ; business_commands + effects ; CKI pin R01 ; atomic CLOSE+OPEN R04 ; Nora pilotage/CKI context ; UX Pilotage panel ; tests unit/PG/e2e |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE ; package `0.0.0-dev` |
| Lane | DEV construction ; RECETTE/STABLE **not mutated** |
| Figma | visual contract #22 native + inventory lot B ; runtime comparison partial (screenshot e2e) — not pixel-perfect claim |
| LIVE Nora | NOT EXECUTED — GATE MORRIS REQUIRED |
| Status | LOCAL ML3 DELIVERY — review handoff only |
| Verdict candidate | `LOCAL ML3 DELIVERY COMPLETE — REVIEW REQUIRED` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-CORRECTIFS-F01-F08

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — correctifs pilotage F01–F08 et T01–T04 |
| Type | INC corrective (same ML3, not a new lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate |
| Schema | unchanged `007_ml3_pilotage_decisions` — `actInstanceId` lives in `source_action_key` + fingerprint, no migration 008 |
| Corrected | Idempotence UI + GET by client key ; manifeste CKI 0.2.0 ; restriction ciblée ; journal `state` ; GO naturel sans operation ; identité d'acte ; `REVISE_DECISION` + contradiction exacte ; `DELIVERED` seulement après generate réel |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated |
| LIVE Nora | NOT EXECUTED |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-06-ML3-AUTHORITY-CR01-CR04

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — ajustement autorité & preuves CR-01..CR-04 |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate (hashes F01–F08 pack as baseline) |
| Schema | unchanged `007` |
| Corrected | Transition A+B restrictions ; REVISE vs D5 founding refuse ; no global statement contradiction ; Review Pack with real logs |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated |
| LIVE Nora | NOT EXECUTED |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |
| Verdict candidate | `ML3 AUTHORITY ADJUSTMENT COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-ASSISTED-CONTRADICTIONS

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 contradictions assistées (Niveau A Nora + Niveau B typé) |
| Type | EVOL complementary on existing ML3 |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate |
| Contrat | B13 v0.1 **VALIDATED IN CONTENT BY MORRIS** 2026-11-06 |
| Schema | unchanged `007` — no migration 008 |
| Implemented | divergence-assist Level A ; nora-context/fixture ; UX legend ; typed Level B unchanged |
| Product version | `NO RELEASE` |
| Lane | DEV ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CANDIDATE — no project push/PR/merge |
| Verdict candidate | `ML3 B13 DELIVERY COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (DEV limits) |

## delivery_id: DELIV-2026-11-06-ML3-B13-C01-C03-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 corrective continuation C01–C03 (after Critical Review) |
| Type | INC corrective continuation (same ML3 ; not a new macro-lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project commit/push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` dirty candidate preserved |
| Contrat B13 | v0.1 remains **VALIDATED IN CONTENT BY MORRIS** — Cursor hypothesis ≠ new normative decision |
| Schema | unchanged `007` — no migration 008 ; no new authority category |
| C01 | `findMessageDecisionConfrontations` — single APPLICABLE D6 + new USER message → structured `levelASignals` via conversation→nora-context→adapter (no second persisted decision) |
| C02 | `qualifyCommandOutcome(status, reasonCode)` — CONFLICT≠authority ; RESTRICTION→authority-block ; STALE/HUMAN_INTENT/FINGERPRINT→technical ; ACTIVE_CYCLE→d5_state |
| C03 | FULL Review Pack + integrated tests (unit/PG/e2e FAKE) ; real logs |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only (`127.0.0.1:5433/sfia_next_dev`) ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 B13 TARGETED ADJUSTMENT COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-R1-R3-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R1–R3 final corrective (after Critical Review on C01–C03) |
| Type | INC corrective continuation (same ML3 ; not a new macro-lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project commit/push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@9b98a7fa` blob `e921982c` |
| Contrat B13 | v0.1 **VALIDATED IN CONTENT BY MORRIS** |
| Schema | unchanged `007` |
| R1 | Clear stale `lastOutcome` on new command ; UNKNOWN presentation replaces prior RESTRICTION motif |
| R2 | Negation/polarity-safe Level A framing (never false COMPATIBLE on « n'est plus obligatoire ») |
| R3 | PG integrated `postUserMessageAndNora` proof (persist USER+Nora, no invented HumanDecision) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 B13 R1-R3 CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-R2-R3-FINAL-ADJUST

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R2/R3 final targeted adjustments |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only**) |
| Base | `origin/main@7f1f41c` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@541c0894` blob `ada98550` |
| R2 | Polarity: jamais / aucunement / typographic apostrophe / ne doit pas être — never false COMPATIBLE |
| R3 | Isolation proof: foreign APPLICABLE decision on same objectRef created BEFORE Nora gen ; marker absent from A context/reply |
| Schema | unchanged `007` |
| Product version | `NO RELEASE` |
| Lane | DEV only ; LIVE Nora NOT EXECUTED |
| Verdict candidate | `ML3 B13 R2-R3 TARGETED ADJUSTMENTS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-IMMUTABLE-CANDIDATE-PUBLISH

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — consolidation & publication candidat Git |
| Type | RUN — consolidation / qualification / publication bornée |
| Branch | `sfia/next-pilotage-decisions-delivery` (**project push authorized — no PR/merge**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Schema | `007_ml3_pilotage_decisions` |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV proofs only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Scope | Allowlist §6 only (docs + CKI manifest + web D5/D6/API/UX/tests) ; SVG / `.tmp-sfia-review` excluded |
| Status | IMMUTABLE PROJECT CANDIDATE — SHA `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` |
| Verdict candidate | `ML3 IMMUTABLE PROJECT CANDIDATE PUBLISHED — READY FOR CHATGPT GLOBAL CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CONVERSATION-AUTHORITY

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 « Piloter et décider » — F01/F02 consolidation fonctionnelle |
| Type | INC corrective (conversation → D5/D6) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local worktree — no project commit/push**) |
| Candidate ref | `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` (unchanged remote) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Schema | unchanged `007` (no migration 008) |
| F01 | Fil Nora → `applyConversationalAuthority` → `executePilotageCommand` (USER_MESSAGE) |
| F02 | RECORD/REVISE documentaires depuis fil + geste Journal ; fondations D5 restent typées |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/LIVE Nora/STABLE NOT AUTHORIZED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 F01/F02 CONVERSATION-AUTHORITY INTEGRATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-C01-C02-C03-AUTHORITY-RECOVERY

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — F01/F02 C01/C02/C03 after Critical Review NOT ACCEPTED |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local — no project commit/push**) |
| Prior handoff | `sfia/review-handoff@c2bec44b` blob `bbf43260` |
| Candidate ref | `8bf8b5ce` unchanged |
| Schema | unchanged `007` |
| C01 | Exploratory language ≠ REVISE ; Level A non-authorizing |
| C02 | Durable reconstitution via business_commands + stable client turn key |
| C03 | Thread continuity after reload ; Journal >8 expandable |
| Product version | `NO RELEASE` |
| Lane | DEV only |
| Verdict candidate | `ML3 F01/F02 AUTHORITY AND RECOVERY CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CR01-CR02-CONSOLIDATION

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — F01/F02 CR-01/CR-02 after Critical Review PARTIALLY ACCEPTED |
| Type | INC CRITICAL |
| CR-01 | D6 revise uniqueness over full APPLICABLE set (not Nora window of 12) |
| CR-02 | Pending exclusive guard ; Nora COMPLETE ≠ métier UNKNOWN clear ; ACK-lost browser proof |
| Git projet | HEAD `8bf8b5ce` inchangé — **aucun** commit/push projet |
| ENV-01 | DEV only (`127.0.0.1:5433/sfia_next_dev`) |
| Versioning | NO RELEASE / STABLE NOT AVAILABLE |
| Verdict candidate | `ML3 F01/F02 AUTHORITY TARGET AND RECOVERY CONSOLIDATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-CANDIDATE-PUBLICATION-RECETTE-BUILD-PREP

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — publication candidat corrigé + préparation build RECETTE |
| Type | RUN CRITICAL |
| Branche | `sfia/next-pilotage-decisions-delivery` |
| Base précédente | `8bf8b5ce` |
| R-UX-01 | NON CONFORME — CARRIED RESERVE Morris (entrée RECETTE conditionnelle) ; pas ACCEPTED FUNCTIONALLY |
| Publication | commit + push FF autorisés ; PR/merge/STABLE/deploy RECETTE **non** autorisés |
| Build | worktree propre au SHA publié → artefact préparé, **BUILD_PREPARED_NOT_DEPLOYED** |
| Versioning | NO RELEASE ; package `0.0.0-dev` technique ; product_version NOT AVAILABLE |
| ENV-01 | DEV tests only ; RECETTE DB/runtime non mutés ; cookie host réserve |
| Verdict candidate | `ML3 UPDATED IMMUTABLE CANDIDATE PUBLISHED — RECETTE BUILD PREPARED — READY FOR CHATGPT CRITICAL REVIEW` |
| Note | SHA/tree/build exacts consignés dans Review Pack / manifeste local après commit (pas d'autoréférence dans ce fichier avant commit). |

## delivery_id: DELIV-2026-11-06-ML3-RCT02-CORRECTIFS-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — correctifs RCT-02 C01–C08 (conversation → D5/D6) |
| Type | INC CRITICAL |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| Base entrée | `b9047a48` (docs RCT-02) sur candidat `ba831b25` |
| Code | qualification naturelle OPEN/CLOSE/RECORD/REVISE/LIFT ; objectif sans « . » ; CKI silencieux ; `restrictions_actives=aucune` explicite |
| Tests | unit RCT-02 + suites unit existantes ; PG `ml3-pilotage.pg` |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| ENV-01 | DEV isolé uniquement — RECETTE runtime non muté |
| Push projet / PR / merge / deploy RECETTE | **NON** (hors mandat) |
| Verdict candidat | `READY FOR MORRIS REVIEW — LOCAL CORRECTIVE DELIVERY` (sous réserve handoff L3) |

## delivery_id: DELIV-2026-11-06-ML3-RCT02-CR-REWORK-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — Critical Review RCT-02 reprise C01/C05/C06 |
| Type | INC CRITICAL REWORK |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| Handoff rejeté | `0a057278` (NOT ACCEPTED — REWORK REQUIRED) |
| Correctifs | C05 extractReviseStatement (T05 exact sans `:`) ; C06 négations + targetRef ; C01 framing non-performatif ; C04 split Nora ; overlap revise cible |
| Preuves | unit `ml3-rct02-intent` ; PG `RCT-02 Critical Review conversational chain` (6) ; suite PG `ml3-pilotage` 41/41 |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| ENV-01 | DEV isolé — RECETTE runtime non muté |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` (si preuves vertes + handoff L3) |

## delivery_id: DELIV-2026-11-06-ML3-RCT02-CR2-FALSE-GO-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — Critical Re-Review faux GO C06/C08 + gates unifiés |
| Type | INC CRITICAL REWORK |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| Handoff rejeté | `4b168905` (NOT ACCEPTED — REWORK REQUIRED) |
| Correctifs | `isSpecimenOrHistoricalFraming` + `refusesOrWithholdsAct` sur OPEN/CLOSE/LIFT/RECORD/REVISE ; LIFT affirmative stricte |
| Preuves | unit 47 ; PG CR 9/9 ; PG `ml3-pilotage` 44/44 ; lint/tsc/build PASS |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — remédiation LIVE RCT-02 C04/C05/C06 |
| Type | INC CRITICAL |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (depuis `d646d42a`, **non poussée**) |
| Source D0 | `sfia-next-rct02-live-gaps-d646d42a.md` (hors Git) |
| Correctifs | C04 objectRef/statement ; C05 éligibilité RECORD avant unicité ; C06 CLOSE non performatif (« ni clôturer ») |
| Preuves | unit `ml3-rct02-intent` 17 ; PG `ml3-pilotage` 45/45 dont LIVE chain ; lint/tsc PASS |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| ENV-01 | DEV `:3100` / PG `:5433` — RECETTE `:3200` / `d646d42a` **préservée, non mutée** |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT REVIEW — LOCAL LIVE REMEDIATION` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-REWORK

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — rework LIVE remediation C01/C05 cibles |
| Type | INC CRITICAL REWORK |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
| Handoff rejeté | `f2c5e3b5` / blob `d59ba25c` (REWORK REQUIRED) |
| Correctifs | C01 négation secondaire n'annule pas OPEN ; C05 refus si cible fondatrice désignée ; pack Full complet |
| Preuves | unit + PG C01/C05 rework + non-régression LIVE C04/C05/C06 |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-C01-FALSE-GO-RETRACT

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — C01 false-GO retract vs exclusion autre ouverture |
| Type | INC CRITICAL REWORK |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
| Handoff rejeté | `d89c3009` / blob `4d2cefb9` (REWORK REQUIRED — C01 FALSE GO) |
| Correctif | distinguer négation du GO demandé vs « ni en ouvrir un autre » |
| Preuves | unit 3 formulations ; PG zéro mutation négatifs + positif C01 ; non-régression LIVE C04/C05/C06 |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT FINAL REVIEW — LOCAL LIVE REMEDIATION` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-RETEST-61FE

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — consolidation LIVE retest 8/8 + publication documentaire + Draft PR |
| Type | QA / capitalisation preuve (Critical) |
| SHA recetté (LIVE) | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Parent correctif | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| Branche | `sfia/next-ml3-rct02-live-remediation` |
| Preuve LIVE | T01–T08 PASS ; rapport `construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md` |
| Build RECETTE | `ZCkIWQ341KK1KOHTD1a5L` ; lane `:3200` ; schema `007_ml3_pilotage_decisions` ; DB `5434/sfia_next_recette_ml3` |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| Push documentaire / Draft PR | **OUI** (GO Morris borné) — merge / STABLE / ADOPTED / redeploy RECETTE : **NON** |
| CI | à observer sur la Draft PR (≠ PASS local) |
| Verdict candidat | `ML3 RCT-02 DOCUMENTATION PUBLISHED — DRAFT PR OPEN — CI GATE [à relever]` |

> Le SHA Git du commit documentaire ≠ SHA recetté `61fe295b`. L'arbre fonctionnel `web/`/`cki/` doit rester identique au candidat LIVE.

## delivery_id: DELIV-2026-11-07-PILOTAGE-FORMAL-EXIT

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-07 |
| Macro-capacité | R5 — Piloter et décider (ML3) ; sortie formelle bornée |
| Type | D2 décision Morris + documentation Git, **NO SEMANTIC PRODUCT IMPACT** |
| Autorité / GO | Morris valide en conversation la clôture ML3 avec réserves et l'intégration Git documentaire ; aucune autorisation PR/merge/promotion implicite |
| Base Git | `main@56d263e83de7bb3af4a5b480131002684a5626ca` ; PR #661 MERGED |
| LIVE | RCT-02 T01–T08 8/8 sur `61fe295b`, build `ZCkIWQ341KK1KOHTD1a5L` ; C03 intercycle ciblé PASS rév7/journal7, `02-conception-fonctionnelle RESOLVED pin 0.2.0` |
| CI | PR #661 pré-merge `42332186084` PASS, post-merge `42333954356` PASS, migration 007 ; PG-DBFAIL-03 non réellement exécuté |
| Documents de sortie | `governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md` ; `governance/roadmap.md` ; `construction/pilotage-et-decisions/recette-cki-intercycles-live.md` ; `construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md` ; présent journal |
| Git documentaire | Branche `docs/next-pilotage-decisions-formal-exit` créée depuis merge SHA ; publication documentaire autorisée, **PR/merge non autorisés dans ce mandat** |
| Environnements / version | DEV/RECETTE non modifiés ; STABLE NOT AVAILABLE ; `NO RELEASE` / package `0.0.0-dev` |
| Réserves / exits | `ckiDelivery DELIVERED` non indépendant, cookies ENV-01 A avant STABLE, PG restore avant promotion adaptée, PG-DBFAIL-03 avant preuve reprise, R6 E2E/REAL |
| Verdict | **ML3 CLOSED BY MORRIS AT BOUNDED D5/D6 + CKI GUIDANCE SCOPE — WITH CARRIED RESERVES** ; R5 IN PROGRESS ; ML4 Git/D9 NOT STARTED/NOT AUTHORIZED |

> Cette entrée décrit la décision de sortie et la publication de ses documents, sans altérer les historiques de delivery antérieurs. Les SHAs exacts des commits documentaires sont vérifiables dans l'historique de la branche de publication.

## delivery_id: DELIV-2026-11-08-G4-POSTMERGE-PILOTAGE-CI

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / G4 post-merge — stabilisation CI Pilotage |
| Type | RUN corrective Critical ; `NO RELEASE` |
| Autorité / GO | Morris GO unique stabilisation CI post-merge ; merge conditionnel si contrôles PASS |
| Base Git | `origin/main@ebf3d150` (merge PR #669) ; tree `6f144851` |
| Incident | CI main run 42477468119 FAIL 10/12 ; `pilotage-panel` / `b13-authority-legend` absents après clic Pilotage |
| Cause | Race `load()` vs `selectSurface('pilotage')` / `searchParams` — `applyUrlDocumentState` réapplique `travail` |
| Correctif | `pendingSurfaceRef` dans `page.tsx` ; E2E ML3 URL-observable |
| Preuves locales | tsc OK ; unit 123 PASS (STUDIO_LANE=DEV) ; PG 144 PASS ; e2e full 12/12 ×2 PASS |
| DEV 500 | Cause = `next dev --turbopack` font flake sur WT construction ; restore non destructive `next dev` sans turbopack → `/login` 200 ; RECETTE `:3200` inchangée 200 |
| Verdict attendu | PR/merge conditionnel puis post-merge CI GREEN ; STABLE/ML4 NOT STARTED |

## delivery_id: DELIV-2026-11-08-ML4-GIT-LOCAL-01

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — Collaborer et publier avec Git |
| Type | EVOL / FEATURE DELIVERY — construction locale intégrée |
| Autorité / GO | Morris GO R5/ML4 INTEGRATED LOCAL DELIVERY (2026-11-08) — DEV only |
| Branche / worktree | `feat/next-git-collaboration-20261108` @ `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Base Git | `origin/main@c658f59023d44a0e22448c7ee034e3c1dda292a2` (PR #670 merged) |
| État Git Product | **LOCAL DIRTY / NO PROJECT COMMIT / NO PUSH / NO PR** |
| Architecture | D6→D7→D9→D8 ; domaines `integrations` (D9), `execution` (D7), `proofs` (D8) ; D4 `document_publication_refs` ; Nora lecture Git only |
| Migration | `008_git_collaboration` additive (DEV/`sfia_next_e2e`) — jamais RECETTE/STABLE |
| Provider | `STUDIO_GITHUB_PROVIDER=scripted` par défaut ; REAL → `NOT_CONFIGURED` |
| UX | Paramètres→Intégrations (218–224) ; surface projet git/publication (227–231) ; badge SCRIPTED ; shell G4 réutilisé |
| Figma | Contrat extrait `.tmp-sfia-review/figma-visual-contract-ml4.md` + captures 218/219/225/227/229/231/233 |
| Validations locales | unit 131 PASS ; integration PG 154 PASS (dont git-collaboration 10) ; `tsc --noEmit` PASS ; `next build` PASS ; e2e `git-collaboration.spec.ts` **1/1 PASS (15.6s)** SCRIPTED |
| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Limites Fake/Real | Aucune installation App REAL ; aucun commit/PR/merge GitHub REAL ; DETERMINISTIC ≠ READY FOR REAL |
| Gates restants | Critical Review ChatGPT ; GO Git Product ; GO RECETTE + effets REAL ; acceptation Morris ML4 |
| Verdict candidat | `ML4 INTEGRATED LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GIT-CORRECTIVE-B1-B9

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — correctif Critical B1–B9 |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris GO ML4 CORRECTIVE LOCAL DELIVERY (2026-11-08) |
| Branche / worktree | `feat/next-git-collaboration-20261108` (même worktree dirty) |
| Base Git | `origin/main@c658f590…` inchangée ; handoff précédent `877b502a` |
| Corrections | B1 autorité courante ; B2 claim atomique ; B3 merge lié publication ; B4 reconcile/lost ACK ; B5 path-policy ; B6 diff inspectable ; B7 provenance fingerprint ; B8 matrice ; B9 Review Pack + package-lock |
| Migration | aucune 009 — progress/claim via colonnes 008 existantes |
| Validations | unit 132 PASS ; git-collaboration PG 15 PASS ; e2e git corrective PASS ; Playwright **13/13 PASS** (ML1–ML3/G4 + ML4) ; tsc PASS |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GIT-FINAL-CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — FINAL CORRECTIVE LOCAL (B1/B2/B3/B4/B6/B7/B8) |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris « OK, GO CORRECTION » (2026-11-08) |
| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
| Base Git | `origin/main@c658f590…` inchangée ; handoff correctif B1–B9 `253f6bed` |
| Corrections | B1 niveaux permission read≠write ; B2 exclusivité DISPATCHED + claim ; B3 base/head/refs merge ; B4 lost ACK post-PR + findPullRequest ; B6 taxonomie lecture distante ; B7 acteur/provenance courants ; B8 requal AT + preuves ; B5/B9 préservés |
| Migration | aucune 009 — claimToken dans `resultJson` (008) |
| Validations | unit **136 PASS** ; git-collaboration PG **24 PASS** ; `tsc` PASS ; `next build` PASS ; Playwright **13/13 PASS** ; integration globale 167/168 (1 flaky préexistant `portfolio-a1` hors ML4) |
| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris ; GO RECETTE + effets REAL |
| Verdict candidat | `ML4 FINAL CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-EXECUTION-INVARIANTS

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — STABILISATION FINALE DES INVARIANTS GIT (C1/C2/C3/B2/Q1) |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » (2026-11-08) ; Critical Review entrée `f15a8e99…` NOT READY |
| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
| Base Git | `origin/main@c658f590…` inchangée |
| Corrections | C1 `assertStepAuthority` inter-mutations ; B2 claim lease/fencing + reconcile READ-ONLY ; C2 PR historique vs courant ; C3 SCRIPTED `PilotId+fullName` ; Q1 keyset portfolio µs |
| Migration | aucune 009 — lease dans `resultJson` (008) |
| Validations | unit **140 PASS** ; git PG **28 PASS** ; integration **172 PASS** ; `tsc` PASS ; `build` PASS ; Playwright **13/13 PASS** |
| Handoff L3 | `sfia/review-handoff@4bcc8e4e4171bf886beab06c52b488e88ff2f308` (parent `f15a8e99…`) — mono-fichier |
| Q1 | Flake préexistant prouvé (code = main) ; cause truncation JS Date ms ; fix tuple keyset + cursor µs ; stress 25/25 PASS |
| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris |
| Verdict candidat | `ML4 EXECUTION-INVARIANTS STABILIZATION — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-FENCING-RECONCILIATION-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — EXECUTION SAFETY FINAL BOUNDED CLOSURE (B2/B4/B9) |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » ; Critical Review entrée `4bcc8e4e…` NOT READY + pack incomplete |
| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
| Base Git | `origin/main@c658f590…` inchangée |
| Corrections | B2 claimToken dans WHERE SQL + touch lease + old-worker CONFLICT ; B4/C2 `prRemoteProven` fail-closed ; B9 diffs docs dans Review Pack |
| Migration | aucune 009 |
| Validations | unit **140** ; git PG **32** ; integration **176** ; tsc/build PASS ; Playwright **13/13 PASS** |
| Handoff L3 | `sfia/review-handoff@c67ec07ff4d292c09f57015529515ba1deaf4c69` (parent `4bcc8e4e…`) — mono-fichier + diffs B9 |
| ENV-01 | DEV + e2e ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; `0.0.0-dev` |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 FENCING & RECONCILIATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-PR-RESUME-VERIFICATION

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — B4/C2 PR resume verification after lost ACK |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » ; Critical Review `c67ec07f…` NOT READY |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
| Base Git | `origin/main@c658f590…` |
| Correction | `prHistoricallyCreated` force relecture distante ; gate `prRemoteVerified` ; upsert publicationRef ; tests resume/unread/nomatch/CLOSED |
| Validations | unit **140** ; git PG **36** ; integration **180** ; tsc/build PASS ; Playwright **13/13 PASS** |
| Handoff L3 | `sfia/review-handoff@66134ea4ec6d9bf8aea92b6a8ad05aae8b3b0a3c` (parent `c67ec07f…`) |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 PR RESUME VERIFICATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-D7-D8-INTEGRITY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — D7–D8 publication integrity (UNIQUE + atomicité + marker) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » ; Critical Review `66134ea4…` NOT READY |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
| Base Git | `origin/main@c658f590…` |
| Migration | **009** additive UNIQUE `document_publication_refs(effect_attempt_id) WHERE NOT NULL` ; preflight DEV : 3 doublons test détachés explicitement |
| Corrections | `commitPublicationCompletion` txn ; `assertPrMarkerProvenance` ; schemaRevision 009 |
| Validations | unit / git PG **39** / integration / build / Playwright → Review Pack |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 D7-D8 PUBLICATION INTEGRITY CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-APP-INSTALLATION-READ

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — GitHub App REAL installation READ-ONLY (D9) |
| Type | INC / DELIVERY LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris « OK GO » ; App `sfia-studio-next-dev` (5670639) / install 179935689 / sandbox `mcleland147/chantiers360` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
| Base Git | `origin/main@c658f590…` |
| Implémentation | `github-app-config` + `github-app-auth` + `RealGitHubReadProvider` ; mutations REAL hard-blocked ; SCRIPTED défaut |
| Qualification réseau | **PASS** 2026-11-08 ~20:20 CET — App 5670639 / install 179935689 / `mcleland147/chantiers360` / HEAD `8c398c494dd918272aab5b2653777c6c21d2e76e` / token perms read-only |
| Validations | unit **153 PASS** (13 App/REAL DET) ; integration **183 PASS** ; tsc/build PASS ; Playwright **N/A** ; qualify REAL READ PASS |
| Fake/Real | SCRIPTED non-régression ; **REAL INSTALLATION AUTH PROVEN + REAL REPOSITORY READ PROVEN** (READ-ONLY) |
| Dette D7/D8 | Option A conservée ; réserves provenance PR + lease CAS **ouvertes** (hors cycle) |
| Verdict candidat | `ML4 GITHUB APP INSTALLATION READ — READY FOR CHATGPT CRITICAL REVIEW — REAL READ-ONLY SCOPE` |
| Gate suivant | Critical Review ; puis cycles user-to-server / D7-D8 / avant toute mutation REAL |
| Interdits | REAL mutation ; Product Git ; RECETTE/STABLE ; user-to-server |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-AUTH-D7-D8-SAFETY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:00 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server + D7/D8 safety closure |
| Type | INC / DELIVERY LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO EXPLICITE (mandat CRITICAL intégré) ; handoff entrée `b6dccd6e…` |
| Branche / worktree | `feat/next-git-collaboration-20261108` LOCAL DIRTY préservé |
| Base Git | `origin/main@c658f590…` inchangée ; aucun commit/push Product |
| Corrections D7/D8 | (A) `assertPrMarkerProvenance` obligatoire même avec `prNumber` connu (dispatch + reconcile) ; (B) `sqlClaimLeaseActive()` dans CAS owned de `commitPublicationCompletion` / `casOwnedTransition` / `assertAndTouchOwnership` |
| OAuth D9 | Web app flow distinct de Better Auth ; state CSRF+TTL+consume atomique ; PKCE S256 ; identité GitHub stable vs D1 ; installations/repos vérifiées ; tokens AES-GCM si clé présente |
| Migration | **010** additive `010_github_app_user_oauth` (colonnes PKCE/token chiffré) — DEV+e2e only ; D8 Option A intacte ; 009 UNIQUE préservée |
| Configuration manuelle restante | `GITHUB_APP_CLIENT_ID` / `GITHUB_APP_CLIENT_SECRET` / `GITHUB_APP_CALLBACK_URL` / `INTEGRATION_TOKEN_ENCRYPTION_KEY` absents du `.env.local` — REAL interactive NOT PROVEN |
| PEM | path configuré ; mode `0600` vérifié (métadonnées seules) |
| Validations | tsc PASS ; unit **160 PASS** ; integration **186 PASS** ; build PASS ; Playwright **13/13 PASS** (~20:43–20:46 CET) |
| Fake/Real | SCRIPTED DET user-to-server ; REAL installation READ-ONLY inchangé ; REAL user OAuth interactive **NOT PROVEN** ; mutations REAL hard-blocked |
| UX | `/settings/integrations` + API ; parcours Figma 218–235 : **PENDING UX INTEGRATION** (surface minimale, pas de marketplace) |
| ENV-01 | DEV + e2e ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; `0.0.0-dev` |
| Verdict candidat | `ML4 GITHUB USER AUTH + D7/D8 SAFETY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC USER FLOW / REAL INSTALLATION READ ONLY` |
| Gates suivants | Critical Review ; config manuelle Client Secret+Callback ; qualification navigateur REAL user-to-server ; puis effet documentaire REAL sous GO distinct |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-AUTH-SECURITY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:15 CET |
| Macro-capacité | R5 / ML4 — GitHub App user auth SECURITY CORRECTIVE CLOSURE |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `6509b4bc…` (NOT READY FOR REAL USER FLOW) |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| P1 SCRIPTED | garde centrale `scripted-github-guard` ; pas de fallback SCRIPTED si REAL demandé ; routes complete/callback verrouillées |
| P1 permissions | plus de write hardcodé REAL ; snapshot `source=scripted_fixture\|user_token_observed\|unknown` |
| P1 callback | `safeReturnPath` allowlist ; erreurs opaques ; state lié `studioSessionId` + PilotId |
| P2 tokens | refresh user token + fencing ciphertext ; REQUIRES_REAUTH ; disconnect wipe local (KNOWN GAP révocation distante) |
| P2 txn D9 | revoke+insert+seed en transaction PG ; GitHub I/O hors txn |
| D7 | `persistOwnedProgress` exige `sqlClaimLeaseActive()` |
| Migration | **011** additive `studio_session_id` + `flow` sur oauth states ; 009/010/Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **190** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL user interactive NOT PROVEN ; REAL mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB USER AUTH SECURITY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-CONCURRENCY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:45 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth CONCURRENCY SAFETY CLOSURE (C1+C2) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `b6c87a8c…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| C1 | Lease refresh PostgreSQL + `markRequiresReauth` conditionnel à la génération `refresh_ciphertext` ; I/O GitHub hors txn |
| C2 | UNIQUE partiel `(pilot_id, provider) WHERE CONNECTED` ; préflight 0 doublons ; collision → CONFLICT / état courant |
| Migration | **012** additive `012_auth_concurrency_safety` — DEV+e2e ; Option A / 009–011 préservés |
| Validations | tsc PASS ; unit **167** ; integration **193** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH CONCURRENCY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-FINAL-SAFETY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:59 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth FINAL CONCURRENCY SAFETY CLOSURE (R1+R2) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `2a9eb05a…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| R1 | Fencing refresh : CAS génération **+** `refreshLeaseToken` ; reclaim lease expiré fail-closed sans 2e refresh distant ; ACCESS_DENIED seulement avec propriété du bail ; DEPENDENCY_UNAVAILABLE → clear lease only |
| R2 | Callback concurrent : unique violation → CONFLICT strict (pas de CONNECTED emprunté) |
| Migration | **Aucune** — 009–012 / Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **205** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH FINAL SAFETY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-REFRESH-LIFECYCLE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~22:36 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth REFRESH LIFECYCLE CLOSURE (R1-A + R1-B) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO EXPLICITE CRITICAL — CORRECTION R1 |
| Handoff entrée | `59d07663…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| R1-A | Timeout/ambigu après refresh engagé : **ne plus** `clearRefreshLease` ; bail durable ; concurrent CONFLICT ; expiry → reclaim fail-closed sans 2e remote |
| R1-B | Persist / markRequiresReauth / clearRefreshLease : `refresh_lease_expires_at > now()` ; late positive ne restitue pas G1 expiré |
| R2 | Non rouvert (CONFLICT accepté) |
| Migration | **Aucune** — 009–012 / Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Fake/Real | R1 LIFECYCLE DETERMINISTIC PROVEN ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH REFRESH LIFECYCLE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-READ-PREFLIGHT

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~22:52 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server REAL OAuth DEV interactive READ qualification |
| Type | VALIDATION REAL bornée — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CONFIGURATION OAUTH DEV + premier parcours utilisateur REAL lecture seule |
| Handoff entrée | `41373d2e…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Préflight App | App `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / sandbox `mcleland147/chantiers360` — JWT GET `/app` confirme Client ID public |
| Config locale | Callback `http://127.0.0.1:3100/api/integrations/github/callback` + Client ID + AES key préparés dans `.env.local` gitignoré ; **Client Secret ABSENT** |
| REAL interactive | **NOT PROVEN** — CONFIGURATION REQUIRED (secret + callback GitHub App settings + consentement Morris) |
| Non-régression | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Mutations | HARD-BLOCKED inchangé |
| Verdict candidat | `ML4 GITHUB USER OAUTH — CONFIGURATION REQUIRED — REAL NOT PROVEN` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-INTERACTIVE-READ

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~23:50 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server REAL OAuth DEV interactive READ |
| Type | VALIDATION REAL bornée — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO — Callback App enregistré/vérifié + reprise qualification REAL READ |
| Handoff entrée | `d8117ee6…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| App / install | `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / repo `mcleland147/chantiers360` |
| OAuth REAL | Consent → CONNECTED `iauth_37cc71f1…` / pilot `pilot_cba50eb6…` / login `mcleland147` / GH `295557155` ; tokens sealed ; meta `REAL_USER_OAUTH` |
| UI host-aligned | `http://127.0.0.1:3100/settings/integrations` (même host que callback) — banner CONNECTED + `mcleland147/chantiers360 · main` ; reload persisté ; status JSON sans secret |
| API READ user-token | `/user` `/user/installations` `/repos/…/chantiers360` `/git/ref/heads/main` → HTTP 200 ; HEAD `8c398c49…` |
| Blocage levé | Callback App settings vérifié ; mismatch `localhost`≠`127.0.0.1` documenté (cookie host) |
| Harness | `e2e-web-server.sh` neutralise `STUDIO_GITHUB_USER_OAUTH` pour E2E SCRIPTED |
| Non-régression | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Mutations GitHub / push Product | **AUCUNE** |
| Verdict candidat | `REAL INTERACTIVE READ PROVEN` |

## delivery_id: DELIV-2026-11-09-ML4-GIT-DOCUMENT-PUBLICATION-BOUNDED-REAL-E2E

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~00:25 CET |
| Macro-capacité | R5 / ML4 — Premier E2E publication documentaire REAL sandbox |
| Type | DELIVERY + QUALIFICATION E2E REAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CRITICAL — effets REAL bornés (branche + fichier + PR, **pas** merge) |
| Handoff entrée | `ffffec1f…` |
| Branche Product | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Cible | `mcleland147/chantiers360` · App `sfia-studio-next-dev` / install `179935689` |
| D4 | `doc_8351c2b1…` / `drev_ce62a84c…` contenu = fichier Git |
| D6 | `dec_b93e9bef…` |
| D7 | `efx_fcca79b2…` COMPLETED · correlation `pub-e2e-20261109001806-retry1` |
| Effets REAL | branche `sfia/pub-pub-e2e-2026` · commit `790a5315…` · PR **#18 OPEN** (non mergée) |
| main | inchangée `8c398c49…` |
| Provider | REAL + user-token mutations ; `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` |
| Non-régression | tsc PASS ; unit **171** ; integration **211** ; build PASS ; Playwright **13/13** |
| Push Product | **AUCUN** |
| Verdict candidat | `ML4 GIT DOCUMENT PUBLICATION — BOUNDED REAL E2E PROVEN — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-09-ML4-PUBLICATION-GIT-TECHNICAL-CONSOLIDATION

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~01:00 CET |
| Macro-capacité | R5 / ML4 — Consolidation sécurité / preuves / qualité publication documentaire |
| Type | DELIVERY / CRITICAL REVIEW CORRECTIVE — INC / CONSOLIDATION BORNÉE — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO consolidation technique ; **pas** de nouvelle mutation GitHub REAL ; USER E2E = Morris RECETTE |
| Handoff entrée | `160becf9…` |
| Branche Product | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Acquis préservés | PR #18 OPEN · commit `790a5315…` · main `8c398c49…` |
| Digest D4↔Git | SHA-256 `11906026…` (D4 = Git UTF-8) · blob `da920aca…` |
| Corrections | gate documentary-only ; branch hash ; marker exact ; D6 effect_conditions ; AND source/objectRef ; reconcile tip SHA ; ACCESS_DENIED→FAILED ; REAL permission source |
| HumanDecision UI | contrat + persisté + contrôlé — geste humain observé **NOT RUN** (RECETTE) |
| Mutations REAL ce cycle | **AUCUNE** |
| Push Product | **AUCUN** |
| Verdict candidat | `ML4 PUBLICATION GIT — TECHNICAL CONSOLIDATION REVIEW READY — USER E2E RESERVED FOR MORRIS RECETTE` |

## delivery_id: DELIV-2026-11-09-ML4-PRODUCT-LOCAL-FREEZE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~01:35 CET |
| Macro-capacité | R5 / ML4 — Finalisation et gel local candidat Product |
| Type | CYCLE 8 DELIVERY — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO gel local : R7+R8 + commit Product LOCAL uniquement |
| Corrections | R7 labels mode d'effet REAL/SCRIPTED ; R8 statuts AS-IMPLEMENTED courants vs snapshots historiques |
| Réserves conservées | R1–R6 CARRIED/NON ISSUE (R6 NON ISSUE) |
| Push Product / PR / merge / REAL mutation | **AUCUN** |
| USER E2E | NOT RUN — Morris RECETTE |
| Verdict candidat | `ML4 PRODUCT — LOCAL CANDIDATE COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED` |

## delivery_id: DELIV-2026-11-09-ML4-PUBLICATION-INTEGRITY-CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~02:30 CET |
| Macro-capacité | R5 / ML4 — Correctif CRITICAL intégrité publication D7/D8 + provenance fournisseur |
| Type | INC / CORRECTIF PRODUCT — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO intégrité ; push Product / PR / merge / REAL mutation **NON AUTORISÉS** |
| Parent Product | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Correctifs | validateur unique `publication-steps.ts` ; reject `steps=[]` ; preuve COMPLETED/D8 ; `effectProviderMode` figé ; reconcile fail-closed ; UI provenance tentative |
| Tests | T01–T20 DET SCRIPTED (service+DB) ; suites unit/integration/build/tsc |
| REAL multi-repo | NOT PROVEN — réserve sandbox `chantiers360` |
| Push Product distant | **AUCUN** — remote reste `79b10052…` |
| Verdict candidat | `ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED` |

## delivery_id: DELIV-2026-11-09-ML4-REC-01-RECONCILE-PROVIDER-PROVENANCE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~02:45 CET |
| Macro-capacité | R5 / ML4 — Correctif `ML4-REC-01` réconciliation liée à la provenance fournisseur |
| Type | INC / CORRECTIF PRODUCT — `NO RELEASE` / `0.0.0-dev` |
| Parent Product | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
| Correctif | `reconcileAttempt` : gate mode historique vs live **avant** observations provider ; COMPLETED/D8 protégés ; UNKNOWN fail-closed |
| Risques | R1–R8 historiques préservés ; nouveau = `ML4-REC-01` (pas de renumérotation) |
| Tests | REC-01…REC-10 DET SCRIPTED |
| Push Product distant | **AUCUN** — remote reste `79b10052…` |
| Verdict candidat | `ML4 PUBLICATION RECONCILIATION — PROVIDER PROVENANCE GUARDED — LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED` |

## delivery_id: DELIV-2026-11-09-ML4-RECETTE-ENV-LANE-APP

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~09:20 CET |
| Macro-capacité | R5 / ML4 — ENVIRONMENT DELIVERY : App GitHub bornée par lane + préparation RECETTE |
| Type | CYCLE 11 ENVIRONMENT DELIVERY — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO finalisation technique RECETTE ; push Product / PR / merge / bascule G4 **NON inclus** |
| Parent Product tip entrée | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Code | `github-app-config.ts` / `github-app-user-oauth.ts` : profils `DEV`/`RECETTE` fail-closed |
| DB RECETTE | `127.0.0.1:5434/sfia_next_recette_ml4` rôle `sfia_next_recette_ml4` ; migrations `001→012` ; isolation CONNECT vs G4/ML3 |
| Secrets | hors dépôt `~/.config/sfia-studio-next/recette/.env.local` (0600) — non publiés |
| Port 3200 | encore servi par G4 `29535d07` — bascule **AWAITING MORRIS GO** |
| Push Product distant | **AUCUN** sans GO distinct |
| USER E2E | NOT RUN |
| Verdict candidat | `ML4 RECETTE ENVIRONMENT — STAGED AND VERIFIED — AWAITING MORRIS G4 SWITCH GO` (si build local OK) |

## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-A2C5E9F8

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~17:43 CET |
| Macro-capacité | R5 / ML4 — Mise à disposition RECETTE macro-correctif Chat First D4 + provenance Git |
| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule RECETTE conditionnelle ; push Product / PR / merge / STABLE / REAL mutation **NON inclus** |
| Source applicative | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` (branche `fix/next-ml4-chat-first-d4-provenance-20261109`) |
| Tree | `5d245e8adf1d32a7ceec6b129857d94f6398a488` |
| Build ID servi | `9yCs2GbSS5lDFX3LPiQTU` @ http://127.0.0.1:3200 |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8` |
| Remplacé | `974b0030…` / BUILD `RzpCuGMK6SnwfucphK7Qa` (artefact préservé) |
| Migration | **aucune** — `schemaRevision=012_auth_concurrency_safety` inchangé |
| Données | CampusFlow + D4 v1 `doc_1e5d8c16…` / `drev_c07ca162…` AVAILABLE préservés (md5 `de4bd1a6…`) |
| Backup | `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8` sha256 `7a9dde7b…` — restore DB sans GO Morris **interdit** |
| Validations | unit document-act 25 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
| Nora | OPENAI PRESENT ; LIVE behavior **NOT PROVEN** ; profil `TEST_BOUNDARY` |
| GitHub | App RECETTE 5677465/180092114 ; mutations OFF ; REAL write **NONE** |
| USER RECETTE | **NOT RUN** — R06 réservé Morris |
| Push Product / PR / merge | **AUCUN** |
| Manifeste | `construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md` |
| Verdict candidat | `RECETTE BUILD UPDATED — SOURCE SHA VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |

## delivery_id: DELIV-2026-11-09-ML4-R06-SECTION-NORA-CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~18:16 CET |
| Macro-capacité | R5 / ML4 — Correctif intégré R06 section D4 + vérité Nora |
| Type | CYCLE 8 DELIVERY / RUN CORRECTIF — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 — diagnostic RECETTE RO + correction DEV + tests + handoff L3 ; **pas** de redéploiement RECETTE / push / PR / merge |
| Parent HEAD | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` |
| Cause racine | `matchSectionSpans` : hint `"2"` via `\b2\b` ambigu avec `Source 2` / `3.2` sur v1 ATX numérotée |
| Correctifs | `leadingSectionNumber` + matching structurel ; ACK FAILED distingue outils Nora RO vs refus Studio |
| Validations | unit document-act **32 PASS** ; PG Chat First **9 PASS** ; PG knowledge **6 PASS** ; provenance **2 PASS** ; tsc PASS ; build PASS |
| Fake/Real | DETERMINISTIC PROVEN (fixture Nora) ; LIVE NOT RUN ; GitHub REAL write NONE |
| RECETTE | **inchangée** — SHA servi `a2c5e9f8` / BUILD `9yCs2GbSS5lDFX3LPiQTU` ; v1 md5 `de4bd1a6…` ; 0 v2 |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — R06 REAL-DOCUMENT STRUCTURE CORRECTIVE VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-8BA77730

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~18:30 CET |
| Macro-capacité | R5 / ML4 — Bascule RECETTE correctif R06 D4 (section numérotée + ACK) |
| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule conditionnelle ; push Product / PR / merge / restore DB / REAL write **NON inclus** |
| Source | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` tree `368159d7…` |
| Build servi | `ygu4moVrYUNZPkvprgvB_` @ http://127.0.0.1:3200 |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730` |
| Launcher | LaunchAgent `com.sfia.studio.next.recette.ml4` (KeepAlive, PPID launchd) |
| Remplacé | `a2c5e9f8…` / BUILD `9yCs2GbSS5lDFX3LPiQTU` (artefact préservé) |
| Migration | aucune — schema `012_auth_concurrency_safety` |
| D4 cible | v1 `drev_c07ca162…` AVAILABLE md5 `de4bd1a6…` ; user v2 NONE |
| Backup | `…/ml4-20261109-182800-pre-8ba77730` sha256 `6e3d3b60…` |
| Validations redeploy | unit 34 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
| USER R06 | **NOT RUN** |
| Push Product | **AUCUN** |
| Manifeste | `env01-recette-manifest-ml4-8ba77730-2026-11-09.md` |
| Verdict | `RECETTE BUILD UPDATED — SOURCE 8ba77730 VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |

## delivery_id: DELIV-2026-11-09-ML4-ABD-DOCUMENT-BOUNDARY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~20:05 CET |
| Macro-capacité | R5 / ML4 — Correctif intégré A+B+D parcours documentaire Chat First |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora / REAL GitHub **NON inclus** |
| Base tip | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` |
| Changements | A splice NL ; B fence `sfia-document` (suppression fallback_wrap) ; D obs proposal ; prompt/fixture Nora ; tests oracle R06-G |
| Validations | unit document-act 38 PASS ; ml2+nora 8 PASS ; PG Chat First 9 PASS ; tsc PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `8ba77730` / BUILD `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — INTEGRATED A+B+D DOCUMENT CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ABD-FENCE-ROBUSTNESS

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~20:25 CET |
| Macro-capacité | R5 / ML4 — Régularisation B scanner fences / intégrité Markdown |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` |
| Parent | `9694cc7171006b747dd7f502a1f1ba8b3a0477f3` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE NON inclus |
| Changements | `scanContractualDocumentFences` nest-aware ; tag exact `sfia-document` ; tests P/N + oracle nested-code PG |
| Validations | (voir Review Pack — commandes rejouées) |
| RECETTE | **inchangée** — `8ba77730` / `ygu4moVrYUNZPkvprgvB_` ; v1 `de4bd1a6…` |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ILLUSTRATIVE-FENCE-ISOLATION

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~20:40 CET |
| Macro-capacité | R5 / ML4 — Isolation des fences documentaires illustratives (Contrat B) |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Parent tip | `0b02de41cd7e3d08101419b49d6534d12edf70cf` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora **NON inclus** |
| Changements | Scanner saute fences non contractuelles de premier niveau ; N1–N12 ; PG zéro D4 CREATE/REVISE ; hook test `replaceNoraAssistantText` |
| Validations | unit document-act 77 PASS ; nora 14 PASS ; PG Chat First 13 PASS ; tsc/lint/build (voir Review Pack) |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `8ba77730` / BUILD `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — ILLUSTRATIVE FENCE ISOLATION VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ADE-CREATE-QUALIFY-OBS

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~23:10 CET |
| Macro-capacité | R5 / ML4 — Macro-correctif intégré A+D+E (qualification CREATE, restitution loyale, observabilité) |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Parent tip | `93da44beb7e7571c9406180027896769579b9815` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora / REAL GitHub **NON inclus** |
| Cause | R12 : CREATE_PAIR_RE singulier ≤40 → NONE malgré demande CREATE explicite + fence Nora valide |
| Changements | `hasExplicitCreateIntent` ; ACK `NOT_EXECUTED` ; `d3.turn.document_act_qualification` + allowlist ; tests P/N + PG A-R12/A-N10 |
| Validations | unit document-act 89 PASS ; nora+ml2 8 PASS ; PG Chat First 15 PASS ; tsc PASS ; lint warnings préexistants ; build NODE_ENV=production PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `93da44be` / BUILD `sHkE8sHJBxD3U9AJdHWi7` |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — R12 CREATE A+D+E CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ADE-CONSOLIDATION-SAFETY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~23:30 CET |
| Macro-capacité | R5 / ML4 — Consolidation A+D+E (faux positifs CREATE, campusflow, NOT_EXECUTED PG, handoff) |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` |
| Parent tip | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Autorité | Morris GO consolidation 2026-11-09 CRITICAL — commit local descendant + handoff L3 |
| Changements | clause-scoped CREATE ; suppression token campusflow ; C1–C14/N11 ; PG NOT_EXECUTED + C10 |
| Validations | unit document-act 91 PASS ; PG Chat First 17 PASS ; tsc/build production PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` |
| RECETTE | **inchangée** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREATE SAFETY AND NOT_EXECUTED VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-CREATE-PLEASE-RE-AUTHORITY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~23:45 CET |
| Macro-capacité | R5 / ML4 — Discriminant final CREATE_PLEASE_RE |
| Type | CYCLE 8 / PATCH candidate / `NO RELEASE` |
| Parent tip | `5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; RECETTE gelée |
| Cause | CREATE_PLEASE_RE global + fallback qualify sans verbe → FP T1/T2/T8 |
| Changements | suppression CREATE_PLEASE_RE ; clause window `puis`/consultatif ; tests T1–T10 + PG T2 |
| Validations | unit 92 PASS ; PG Chat First 18 PASS ; tsc/build production PASS |
| RECETTE | **inchangée** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
| Push Product | **AUCUN** |
| Verdict | `CREATE_PLEASE_RE AUTHORITY GAP FIXED — DETERMINISTICALLY VERIFIED LOCALLY — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-10-ML4-G1-REC11-07-08

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-10 ~01:20 CET |
| Macro-capacité | R5 / ML4 — G1 correctif intégré REC-11 / REC-07 / REC-08 |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Parent tip | `771844fda083ce3c1858b77b0012e5bf2b801605` |
| Autorité | Morris GO technique G1 2026-11-10 CRITICAL — DEV only ; push Product / RECETTE / REAL Git **NON inclus** |
| Cause | R12-D : `read_git_file` → DENIED sur toute exception (y compris absence) ; provenance blob/commit consommée incorrectement ; narration Nora « ne peux pas confirmer » vs ACK AVAILABLE |
| Changements | Classification D3 `FILE_ABSENT` qualifiée ; garde permalink ; strip REC-08 ; docs matrice/spec/delivery |
| Validations | unit document-act 94 + git-read-tools 9 PASS ; PG Chat First 19 PASS ; tsc PASS ; lint warnings préexistants ; `NODE_ENV=production` build PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `771844fd` / BUILD `SmL2kyWbd1Q3kIuwNw0mQ` |
| Push Product | **AUCUN** |
| Verdict candidat | `G1 DEV QUALIFIED — AWAITING DISTINCT RECETTE GO` |


---

## delivery_id: DELIV-2026-11-18-ML4D-E05-COMPOSITION-RECETTE-UAT-SYNTHESIS

> **Entrée rétrospective documentaire D1 (ChatGPT, 18/11/2026).** Elle synthétise des livraisons **Cursor rapportées** dans leurs handoffs SFIA v2.6 ; elle ne constitue **ni une nouvelle livraison Cursor, ni une vérification directe du runtime local ou du commit produit non poussé**. Les entrées historiques du présent journal restent inchangées.

| Champ | Valeur |
|---|---|
| Date / capacité | 18 novembre 2026 — R5 / ML4D / Ensemble 05, **composition visuelle conversationnelle** |
| Mandats Morris | Construction et RECETTE Ensemble 05, correctif UAT-03, consolidations UX-01…07 puis UX-05/01 ; GO livraison RECETTE bornés, aucun GO push produit/PR/merge |
| Candidat RECETTE initial E05 | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` / build `_eeb9Jy2hV242myk86VTu` ; mise à disposition et UAT-01/02 rapportées |
| Incident et correctif UAT-03 | `steps[].detail.max(400)` → validation SDK/UNKNOWN ; correctif `max(5000)` par étape et observabilité durable ; candidat `90c3e59f4a355b463ea047cc45486906bde15680` / `5C3be3-ils1iOmH3qXo4d` |
| Consolidation UX-01…07 | Candidat `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` / build `qw3FaPD1B4KBrRab3LyKL` ; tests et captures rapportés, réserve UX-05 persistante puis corrigée |
| Correctif final UX-05/01 | **Candidat local** `5c94c86737f0965c71a7e058e3f1e45ff4415024`, tree `74fbf2b90f95951d5049efc5a854ad213fb0f47f`, build `IEINNuPl0bHWJOWkh0ZhG` ; cause `classifyLanes()` double claim ; graphes corrects en RECETTE selon handoff |
| Environnement | RECETTE `http://127.0.0.1:3200`, no migration ; DB rapportée conservée : 23 projets, 560 messages, 196 conversations, 280 commandes de tour |
| Qualification utilisateur | **UAT-01…08 visuels acceptés par Morris avec réserves** après corrections ; dernière capture UAT-07 et alignement UX-01 validés le 18/11 ; scroll horizontal autorisé |
| Qualité/gates | UNIT/FAKE/BROWSER/LIVE/RECETTE différenciés dans handoffs ; 88 oracles candidats de Travail **non assimilés** à huit UAT ; intégrité ACL `owner_pilot_id` et ascendance locale à vérifier |
| Source probante | [Dernier handoff Full](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md), [dossier de réception](convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md), [matrice C-01…22 V0.10](convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/06-matrice-convergence-vision-realisation.md) |
| Intégration / statut | *(État au moment de la synthèse D1)* Code candidat **local non poussé** ; documentation sur branche `docs/next-ml4d-registre-revues-20261116`, sans PR/merge ; `USER ACCEPTED WITH RESERVES — VISUAL UAT ONLY`, `RECONCILIATION PENDING`, `Gate C OPEN`, `NO STABLE/RELEASE/ADOPTED`. **Addendum post-intégration :** voir `DELIV-2026-11-18-ML4D-CI-REMEDIATION-PRODUCT-MERGE`. |

**Point de gouvernance non clos :** le rapport final signale une attribution temporaire d'`owner_pilot_id` aux objets RECETTE pour capture, puis une restauration déclarée ; les compteurs identiques ne démontrent pas la restauration objet par objet. La vérification des droits devra être faite **en lecture seule**, sans écrire dans la base pour produire une preuve.

---

## delivery_id: DELIV-2026-11-18-ML4D-CI-REMEDIATION-PRODUCT-MERGE

| Champ | Valeur |
|---|---|
| Date (Europe/Paris) | 18 novembre 2026 ~22:37 CET |
| Macro-capacité | R5 / ML4D — remédiation CI autonome + intégration Git produit |
| Type | CYCLE 8 / 13 / 7 / 14 — PATCH candidat / `NO RELEASE` |
| Autorité | Morris GO « remédiation CI autonome et bornée, intégration conditionnelle ML4D » |
| Candidat RECETTE immuable (UAT) | `5c94c86737f0965c71a7e058e3f1e45ff4415024` / tree `74fbf2b90f95951d5049efc5a854ad213fb0f47f` / build `IEINNuPl0bHWJOWkh0ZhG` — **non redéployé** |
| Tip produit mergé | `ac08b381e434b65c09ec9eb2d49abcc221a543cf` (branche `integrate/next-ml4d-ux003-to-ensemble05-20261118`) |
| Merge commit `main` | `b7de1fb0826f373dcab609b2c1deff992a36fbd1` — PR [#681](https://github.com/mcleland147/sfia-workspace/pull/681) |
| Baseline `main` avant merge | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Correctifs CI (après `5c94c867`) | `98646171` fixtures/tsc/create-project/Playwright helpers ; `519f40e3`/`3d51a594`/`53d1db73`/`a127d337` assertions E04/E05/ml* ; `fd01cd9d`/`ac08b381` whitespace `git diff --check` |
| Runtime produit dans le delta correctif | Uniquement typage `getDerivedStateFromError(_error)` dans `NoraComposition.tsx` — **aucun comportement observable** ; pas de requalification RECETTE |
| CI GitHub PASS | Run [`44400455666`](https://github.com/mcleland147/sfia-workspace/actions/runs/44400455666) @ `ac08b381` — tsc, lint, build, Vitest unit, PG migrations/integration, Playwright BROWSER FAKE, secret scan, trailing whitespace, Required Gate |
| RECETTE | **inchangée** — toujours le build UAT `IEINNuPl0bHWJOWkh0ZhG` ; aucune écriture DB RECETTE/STABLE |
| Documentation | Branche `docs/next-ml4d-registre-revues-20261116` / PR [#680](https://github.com/mcleland147/sfia-workspace/pull/680) — réconciliation post-`main` en cours |
| Réserves conservées | ACL historique non démontrée objet par objet ; responsive/a11y bornés ; PG historique non exhaustif ; 88 oracles ≠ 8 UAT ; Gate C OPEN ; NO STABLE/RELEASE/ADOPTED |
| Verdict | `ML4D PRODUCT MERGED ON MAIN — CI FULL PASS — RECETTE UAT SHA IMMUTABLE — DOCS PR PENDING — GATE C OPEN` |

---

## delivery_id: DELIV-2026-11-19-ML4D-JOURNAL-V4-LOCAL

| Champ | Valeur |
|---|---|
| Date (Europe/Paris) | 19 novembre 2026 |
| Macro-capacité | Ensemble 06 — Journal cohérent V4 |
| Type | CYCLE 8 DELIVERY / `NO RELEASE` / `0.0.0-dev` |
| Parent tip docs | `6879d34eb38fbd1d8f899c6f8713ccc98f0ae178` |
| Base main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Autorité | Morris GO Journal V4 delivery ; push projet/PR/merge **NON inclus** |
| Changements | Migration 014 D4 revisions ; journal.ts ; ProjectJournal V4 ; API journal ; ensureSubject parent-aware ; subjectId préservé |
| Validations | tsc PASS ; journal-d4-revisions.pg 6/6 PASS (`sfia_next_e2e`) ; BROWSER/Figma runtime NOT RUN ; LIVE Nora NOT RUN |
| Lane | DEV `:5433` only ; RECETTE/STABLE non mutées |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / SCOPE PARTIAL ON J-C04/06/13/14/BROWSER` |

## 2026-11-20 — Ensemble 07 Projet/Trajectoire (DEV construction, NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| Statut | NO RELEASE — construction DEV |
| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.02–09.11 ; forecast_json D5 |
| Tests | unit / PG E07 (historique premier delivery) |
| Verdict candidat (1er) | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
| Handoff tip (1er immuable) | `93ee58ee5208daa4abe6d657550b523fea244db2` blob `65dacb671da74b93974deb12af62fb5007f33264` |

## 2026-11-20 — Ensemble 07 corrective (P0 cohérence + UI, NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
| Statut | NO RELEASE — Gate C OPEN |
| Corrections P0 | COR-01 ensure+retry ; COR-02 GET sans kick ; COR-03/04 fence+reprise D5→message ; COR-05 UNKNOWN+reconcile POST ; COR-06 no default CADRAGE ; COR-08 system incident ; COR-09 closed asc(openedAt) ; COR-11/12 matrice exclusive |
| Tests | unit 687 PASS ; integration 518 PASS (E07 PG 8/8) ; tsc OK |
| Fake/Real | DETERMINISTIC/FAKE forecast ; LIVE Nora NOT PROVEN ; HOLD DEV captures only |
| Visuel | 09.07 clarification runtime obtenue ; 09.10/09.11/09.06/05.17 recapturés ; 09.02/03/08/09 ACTIVE/CLOSED encore absents (GO conversationnel COR-14 non clos) |
| Réserves | COR-14/15 GO naturel+maturité non prouvés e2e ; COR-16/17 bilan/CKI éditorial partiels ; 13/13 Figma non READY |
| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / READY WITH GOVERNED RESERVES sur P0 |

## 2026-11-20 — Ensemble 07 DEV integrated qualification (NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
| Statut | NO RELEASE — Gate C OPEN — **pas** de candidat RECETTE figé |
| Prior handoff | FUNCTIONAL STABILIZATION `97db03d6` / blob `02c1190e` |
| Correctifs cycle | IQ-REG-01 `expectInitialQualification` default false (route produit seule true) ; E2E A–F harness (`nav-*` vs sr-only) ; e2e-web-server HOLD unset |
| Suites | tsc PASS ; build PASS ; unit **690 PASS** ; integration PG **525 PASS** ; E2E A–F **6/6 PASS (38s)** FAKE :3101 / `sfia_next_e2e` |
| FIX-03 | RECONCILIATION PROVEN / PROCESS AUTONOMY NOT PROVEN |
| Nora | DETERMINISTIC/FAKE — LIVE NOT PROVEN (GO NL C/D navigateur = REAL-GAP) |
| UX | gel Figma respecté |
| RECETTE/STABLE | intouchées |
| Verdict | `DEV INTEGRATION QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED` |

## 2026-11-20 — Ensemble 07 RECETTE candidate preparation (NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
| Prior handoff IQ | `52f47ed7` / blob `0e2a5863` |
| Travail cycle | Oracles E2E honnêtes A1/A2/C1/C2/D1/D2/E/F ; inventaire INCLUDE/EXCLUDE ; manifeste préparation ; préflight ENV-01 RO |
| E2E révisé | A1 refuse FAILED ; C2 fixture OPEN ; D2 CLOSE browser NOT PROVEN (voir gel pour compteurs PASS/SKIP exacts) |
| Régressions ciblées | unit E07 **10 PASS** ; PG E07 **15 PASS** |
| Suites globales héritées | tsc/build/690/525 — arbre delivery précédent |
| Trees prospectifs (temp index, **historiques**) | `3fc00997…` (avant entrée delivery-history) puis `0c585940…` (après) — **pas** des SHA candidats ; divergence = contenu `delivery-history` inclus dans le write-tree |
| candidate_sha | **NOT AVAILABLE** (préparation) |
| FIX-03 / LIVE / UX | inchangés |
| RECETTE :3200 | HTTP 200 observé RO — **aucune écriture** |
| Verdict | `ENSEMBLE 07 — CANDIDATE PREPARATION COMPLETE WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED` |

## 2026-11-20 — Ensemble 07 LOCAL GIT FREEZE (NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| Parent HEAD | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Périmètre | **34 chemins INCLUDE** exacts (handoff préparation) ; EXCLUDE conservés hors commit |
| E2E freeze | A1 strict ; A2 **SKIPPED** browser failure ; C2 **ACTIVE strict** ; D2 **SKIPPED** conversational CLOSE |
| Réserves | R1 FIX-03 autonomy NOT ; R2 LIVE NOT ; R3 UX deferred ; R4 browser CLOSE NOT PROVEN |
| SHA / tree finaux | **Voir métadonnées Git du commit de gel et Review Pack** (pas d'empreinte autoréférentielle dans ce fichier) |
| Push projet | **NONE** |
| RECETTE / STABLE | intouchées |
| Classe | NO RELEASE · Gate C OPEN |
| Verdict cible | `LOCAL GIT CANDIDATE FROZEN` (± GOVERNED RESERVES) |

## 2026-11-25 — ML5 Nora Livraison 1 — RECETTE cutover (Cycle 11 RUN)

| Champ | Valeur |
|---|---|
| Cycle | 11 — Déploiement / release · Critical RUN |
| Candidate SHA | `2a024b1c8d713ded6260d2a6427448a29f98a646` |
| Tree | `031f13043423c0e93d0b94af9fb27e852e262e74` |
| Web tree | `f57bb8eed98af19f4ea6d0a33d6de431084f635d` |
| Build RECETTE | `3RyhswMcKrNv8woukVXsT` |
| contentDigest | `cc7f5e5dbcff5af418393630de1d7d80d24e9cc44aa847eebda59eaa4e557a25` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-2a024b1c8d71` |
| URL | `http://127.0.0.1:3200` |
| Cognitive | `ml5-cog-policy-v3-recette-operational-provisional` · `OPERATIONAL_PROVISIONAL` · 24/200k · model `gpt-6.2-sol` |
| WEB | LIVE BLOCKED (ENABLED=0 LIVE=0) — P0 OPEN |
| Nora smoke | `openai-agents-sdk-live` COMPLETE — not F2 proven |
| Cursor | LIVE configured + confinement PASS — no D6 dispatch |
| DB | `sfia_next_recette_ml4` :5434 preserved projects=27 documents=118 revisions=189 · migrations 001→021 unchanged |
| Previous | `7f48daa28f00` / `_ZDI1cWa1hscluvBhaiA4` retained for rollback |
| Backup | `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T064937Z-pre-2a024b1c8d71` |
| Class | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN |
| Verdict | RECETTE AVAILABLE — MORRIS UAT REQUIRED — WEB LIVE BLOCKED |


## 2026-11-25 — ML5 RoomBooking integrated corrective (Cycle 8 Delivery / DEV candidate)

| Champ | Valeur |
|---|---|
| Delivery ID | `next-ml5-roombooking-integrated-corrective-20261125` |
| Date | 2026-11-25 |
| Macro-lot | RoomBooking integrated corrective RB-01..31 (axes A–E) |
| Type | INC · Critical · Cycle 8 Delivery |
| Base | tip diagnostic `3c663fd2809cae9e91b3f4929515d859b0284e81` · UAT candidate `2a024b1c8d713ded6260d2a6427448a29f98a646` |
| SHA candidat | `98e58ec46b4d9cac2921b68c361ded91a714e8f3` |
| Tree | `76efa6f2487a18291f13fe8fb99dc94da770ba2e` |
| Web tree | `bf00736cafa90ad233afbce59d6ae08be4a18d9a` |
| Diff | `47818360` mechanisms A–D + `98e58ec4` SAS LIVE clear |
| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN |
| Environnement | DEV `:3100` / PG `:5433` · Build `iPIn-B5JYIW9udTiFAG7o` · Digest `dd3565f9e2aa527cd4c50f7b7318f30b65edd3b9a01c537132717f408650feb8` |
| Migration | NONE |
| Contrôles | Vitest multi-section + envelope/continuity PASS · tsc clean · next build · DEV restart · SAS LIVE mid-turn observed · RECETTE identity preserved `2a024b1c` / `3RyhswMcKrNv8woukVXsT` |
| Réserves | Discriminant PG conserve multi-section path + Git investigation→note LIVE + token before/after measures not fully closed in-cycle · F2 global not claimed · WEB LIVE blocked |
| Statut | DEV CANDIDATE BUILT — COMPLETENESS GATE PARTIAL — NOT READY FOR RECETTE CUTOVER |

## 2026-11-25 — ML5 RoomBooking corrective completion (Cycle 8 Delivery / DEV final)

| Champ | Valeur |
|---|---|
| Delivery ID | next-ml5-roombooking-corrective-completion-20261125 |
| Date | 2026-11-25 |
| Macro-lot | Finalisation du macro-lot correctif RoomBooking RB-01..31 (pas un nouveau lot) |
| Type | INC · Critical · Cycle 8 Delivery |
| Base | 3c663fd2809cae9e91b3f4929515d859b0284e81 |
| Delivery précédent incomplet | 98e58ec46b4d9cac2921b68c361ded91a714e8f3 |
| SHA candidat final (avant ce sync docs) | e93a5b75b68372f005fff883c487c01658970827 |
| Tree (avant ce sync docs) | c119d0f0f5af9b2f1938d6fcf8ccbb2dc2a2c54f |
| Web tree | eb8dc550456c87f77053a3a5952e3edd20de5099 |
| Commits finalisation | efda774a Git LIVE journal · 1da28a66 type fix · d4b66e3c multi-section/fork/ceilings · docs delivery-history |
| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN |
| Environnement | DEV :3100 / PG :5433 · Build 51-56htNe0RqDnqwULV8n · Digest b39574559a81b0f3adb3e24e2e70368e20c102bd25e781d3c8748faec6425348 |
| Migration | NONE |
| Contrôles | LIVE Git multi-états · révision naturelle+conserve PG v2 · note depuis acquis · mesures ressources · resume unit/PG · SAS browser · Completeness Gate 31/31 · Review Pack FULL diffs |
| RECETTE | inchangée 2a024b1c / 3RyhswMcKrNv8woukVXsT |
| Réserves | Soft-stop ≠ garantie d'interruption mid-SDK ; F2 globale non revendiquée ; WEB LIVE blocked ; OAuth utilisateur GitHub interactif non complété (reads via App installation) |
| Statut | DEV CANDIDATE COMPLETE — READY FOR CHATGPT REVIEW — NOT ADOPTED — NO RECETTE CUTOVER |

## 2026-11-25 — ML5 adaptive cognitive continuation (Cycle 8 Delivery / DEV final)

| Champ | Valeur |
|---|---|
| Delivery ID | `next-ml5-adaptive-cognitive-continuation-20261125` |
| Date | 2026-11-25 |
| Macro-lot | Finalisation ML5 Livraison 1 — conduite cognitive adaptative (pas un nouveau macro-lot) |
| Type | INC · Critical · Cycle 8 Delivery |
| Base | tip `cb4ae5990c0e8c2f75c466962f8a77f300c63e24` · tree `ad1f01fa976666dddb64e80665abdb677ec17717` · web tree `eb8dc550456c87f77053a3a5952e3edd20de5099` |
| SHA candidat | `b34defd09a34feb8a5daa871fd8fa468c7af78e0` |
| Tree | `43b9ddadf292865f891ee95af3f38e5672ae23fe` |
| Web tree | `7e7b793e614026933cc81aaa76909592cadb5aaa` |
| Calibration | `SFIA_COGNITIVE_MAX_TOKENS=2000000` · `REEVAL=1000000` · `MAX_SEGMENTS=120` · OPERATIONAL_PROVISIONAL |
| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · R5 IN PROGRESS |
| Environnement | DEV `:3100` / PG `:5433` · Build `CC0wLCfVBY-Q1uALQDItr` · Digest `882e1eff3c198e79a91c8d732275195a31841dd2ba469c4540e50934889f02a7` |
| Migration | NONE |
| Contrôles | Vitest envelope/continuity + C18 PASS · next build · LIVE S1 simple · S2 multi-seg + D4 note · S3 50-sources 26 segments / 50/50 coverage · parent_work_id provenance · RECETTE `2a024b1c` / `3RyhswMcKrNv8woukVXsT` préservée |
| Preuves clés | `cgw_1991a962` 26 segs · 2045830 tok · 27 ckpts · couverture 34 CONSULTED + 14 PARTIAL + 2 DENIED · `cgw_cd948312` parent=`cgw_ef647d73` · doc_86a08511 |
| Réserves | Inflation inventaire 51/52 corrigée (freeze périmètre) ; travaux note-from-acquis peuvent encore relire Git malgré injection parent ; soft-boundary ne pollue plus le corps DOCUMENT ; timeouts HTTP client ≠ arrêt serveur |
| Statut | DEV CANDIDATE — LONG INVESTIGATION PROVEN — READY FOR CHATGPT REVIEW — NOT ADOPTED — NO RECETTE CUTOVER |

## 2026-11-25 — ML5 Nora×Studio capability interactions (Cycle 8 Delivery / DEV final)

| Champ | Valeur |
|---|---|
| Delivery ID | `next-ml5-nora-studio-capability-interactions-20261125` |
| Date | 2026-11-25 |
| Macro-lot | ML5 livraison 1 — correctif intégré AssetTrack (AT-01…13, AT-10 retirée) |
| Type | INC · Critical · Cycle 8 Delivery |
| GO Morris | 25/11 — Option B + corrections A + stratégie C ; Nora pivot cognitif ; activité hiérarchisée dépliable ; suppression complexité inutile |
| Base | tip produit `0d37b12a8dae07c88907b7e5a7cfa130e1940a41` |
| Diagnostic AssetTrack | handoff `ca3d90a90e24197dabb700768b4220986d652ef3` |
| SHA candidat (post-commit) |  |
| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED |
| Environnement | DEV `:3100` / PG `:5433` · Build `BMd8qv-bn6m9Hj6YEtdee` · Digest `d0fa2be3b6eaed2b687817ceecfb2f0cff2888e60d854db7f6d5f1caa1a2e37d` |
| Migration | NONE |
| Contrôles | Vitest 23 PASS (documentary PREPARE, activity hierarchy 45-ops, forecast, restitution) · parcours LIVE naturel EquipLoans · conserve V2 cand≡stock · note first-pass · Git REAL read-only · AT-11 NO_GIT · densité DETERMINISTIC/BROWSER · RECETTE `ca0b114c` / `RkthxGW_bZUygxYbwP9Hq` préservée |
| Preuves clés | proj `proj_154814aa…` · IQ PROPOSED CONCEPTION→DELIVERY→QA · doc V1→V2 `drev_a7124a79…` · note `doc_7a640d03…` · activity git 6 events |
| Réserves | Rebuild DEV nécessaire pour string tutoiement conserve après fix source ; activité historique UI reste compacte (carte hiérarchique prouvée LIVE events + DETERMINISTIC 45-ops) ; F2 globale / WEB LIVE non revendiqués |
| Statut | DEV CANDIDATE — INTEGRATED CORRECTIVE — READY FOR CHATGPT REVIEW — NOT ADOPTED — NO RECETTE CUTOVER |
