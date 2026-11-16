# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.



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
