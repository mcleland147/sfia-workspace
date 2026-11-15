# SFIA Studio Next — ML4C Phase B Technical Campaign — Review Pack FULL

**Date:** 2026-11-15T16:04:43+01:00
**Cycle:** Delivery QA/Test — recette technique complémentaire ML4C Phase B
**Profil:** Standard
**GO Phase B:** ACCORDÉ — DEV/E2E isolé ; fixture S05-01 autorisée
**GO Git REAL:** NON ACCORDÉ (avis seulement)
**Candidat:** `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` / tree `71e052cf…` / BUILD_ID RECETTE observé `0mTcR_VTrO_j6sIlW9Wdb` (non muté)
**Verdict:** ML4C TECHNICAL CAMPAIGN — COMPLETED WITH RESERVES

---

## 1. Mandat et GO Morris

Exécution unique des preuves techniques sur DEV/E2E pour les 25 scénarios. Interdits respectés : pas de développement, pas de correction, pas d'activation `STUDIO_GITHUB_ALLOW_MUTATIONS`, pas d'écriture RECETTE/STABLE, pas d'acceptation ML4C/ML4D/Gate C.

## 2. Git Truth Check

| Check | Observé |
| --- | --- |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD / tree | `11f7077e…` / `71e052cf…` |
| origin/main | `6cda86bd…` |
| docs UAT | `1f6d9cb4…` |
| Handoff Phase A | `2fd7f40e…` MATCH |
| PR #676 | OPEN / `67bf6b0b…` |
| Dirty | `.tmp-sfia-review/chatgpt-review.md` seulement |
| Final HEAD | inchangé `11f7077e…` |

## 3. ENV-01 et isolation

| Lane | Port | DB | Usage Phase B |
| --- | --- | --- | --- |
| DEV/E2E | `:3101` (Playwright webServer) | `sfia_next_e2e` @ `sfia-next-dev-pg:5433` | **Autorisé — mutatif tests** |
| DEV opérateur | `:3100` | `sfia_next_dev` | Non utilisé comme runtime de preuve |
| RECETTE | `:3200` | `sfia_next_recette_ml4@5434` | **Lecture seule** — tables=33 avant=après ; BUILD_ID inchangé ; pid 99811 worktree 11f7077e |

Vitest force : `STUDIO_GITHUB_PROVIDER=scripted`, `STUDIO_GITHUB_ALLOW_MUTATIONS=""`, rewrite DATABASE_URL → `sfia_next_e2e`.
E2E webServer : même barrière + `STUDIO_FORCE_NORA_FIXTURE=1`.
Note : `.env.local` DEV opérateur contient `ALLOW_MUTATIONS=documentary` — **neutralisé** dans les suites ; jamais activé pour ce cycle.

## 4. Exécution — commandes et totaux

Lane : DEV ; SHA candidat : `11f7077e` ; fournisseur Git tests : SCRIPTED.

| Lot | Commande | Résultat |
| --- | --- | --- |
| UNIT core | `vitest run` http-errors, gates, s05-policy, guards, cki, git-proof, nora-adapter, scripted-guard | 8 files / **52 PASS** |
| PG A/B | identity-session, create-project, document-identity/reconciliation/command | 5 / **117 PASS** |
| PG C/D | intent-continuity, d2-mission-s05, s05-idempotence, s05-owner, mission-continuity | 5 / **45 PASS** |
| PG S04 | ml3-pilotage.pg | 1 / **49 PASS** |
| PG S06 | git-collaboration.pg | 1 / **93 PASS** |
| PG/UNIT extra | ml4c-auth-reconciliation, github-app-auth-real-provider, ml4-chat-first-d4 | 3 / **56 PASS** |
| E2E | d2-ack, s05-real-api, d2-mission-s05, ml3-pilotage, atlas | **19 PASS** |
| E2E Git | git-collaboration.spec | **1 PASS** |

**Totaux approximatifs exécutés ce cycle :** ~**432** cas PASS, **0 FAIL**, **0 skip forcé**.
Logs : `/tmp/ml4c-phase-b-evidence/*.log` (hors Git).

## 5. Matrice 25/25

| ID | Oracle (résumé) | Phase A | Tests/preuves | Exécution | Résultat scénario | Preuves clés | Manques | Niveau | Réserve/Gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S01-05 | Refus session/révocation/accès étranger ; panne≠auth | EXECUTABLE AS-IS | http-errors ; identity-session ; FIX-05/06 | RUN | **PARTIAL PASS** | 401 SESSION_INVALID ; revoke null ; FIX anon 401/403 ; FIX-06 cross-pilot 403/404 | TTL expiry NOT PROVEN ; panne DB HTTP métier NOT PROVEN | DETERMINISTIC + BROWSER DEV PARTIAL | A-002 OPEN |
| S02-05 | Lost ACK D2 → 1 projet | EXECUTABLE AS-IS | d2-ack-loss-reconcile ; create-project A05 | RUN | **PASS** | 1 create POST ; reconcile ALREADY_CREATED | — | BROWSER DEV + PG | — |
| S03-06 | 5 états D4 | REUSE→RUN verify | document-identity/reconciliation/command ; guards ; chat-first NOT_EXECUTED | RUN | **PASS** domain ; UI PARTIAL | AVAILABLE/CONFLICT/UNKNOWN/FAILED/NOT_EXECUTED PG | Labels UI thread non exhaustifs | DETERMINISTIC FULL domain | — |
| S03-07 | Continuum D2→D4 | EXECUTABLE AS-IS | intent-continuity-global S03 ; atlas e2e | RUN | **PASS** | one clientTurnKey ; D4 AVAILABLE ; reload-stable | LIVE continuum NOT | PG + BROWSER DEV FAKE | — |
| S04-03 | Supersession D6 | REUSE→RUN | ml3-pilotage REVISE ; auth-reconciliation D07 | RUN | **PASS** | supersedesDecisionId ; prior REVISED | UX journal E2E non dédié | DETERMINISTIC | — |
| S04-07 | CKI cycle actif | EXECUTABLE AS-IS | ml3-pilotage openCycle+CKI ; F01 e2e ACTIVE | RUN | **PARTIAL PASS** | ckiId RESOLVED + digest PG | Conseil Nora LIVE / digest UI NOT | DETERMINISTIC PARTIAL | LIVE NOT |
| S05-01 | A pending | CONDITIONAL (fixture OK) | s05-fixture seed_* ; d2-mission AWAITING ; CR-02 | RUN | **PASS** (fixture/déterministe) | unknownTurns / AWAITING_PILOT_ACT oracles | Pending organique sans fixture NOT | DETERMINISTIC + BROWSER DEV fixture | Gap organique |
| S05-02 | B pendant A | EXECUTABLE AS-IS | s05-real-api SAFE/M02 ; S05-G01 ; intent-continuity | RUN | **PASS** | DIALOGUE_INDEPENDANT ; A intact | LIVE NOT | PG + BROWSER DEV | — |
| S05-03 | Incompatible pendant A | EXECUTABLE AS-IS | S05-RISK-* ; S05-M01 ; d2-mission block | RUN | **PASS** | pendingEffectBlocked ; counts inchangés | — | PG + BROWSER DEV | — |
| S05-05 | Refresh pendant A | EXECUTABLE AS-IS | real-api reload ; d2-mission reload ; CR-02 | RUN | **PASS** | keys post-reload | — | PG + BROWSER DEV | — |
| S05-06 | Reprise A après B COMPLETE | NON EXECUTABLE | — | NOT RUN | **NOT PROVEN** | — | Enchaînement exact absent | NOT PROVEN | Exit Morris |
| S05-07 | Lost ACK OPEN_CYCLE | EXECUTABLE AS-IS | ml3-pilotage CR-02 e2e | RUN | **PASS** | ≤1 OPEN_CYCLE ; reconcile APPLIED | — | BROWSER DEV | — |
| S05-08 | Refus/révocation pending A | NON EXECUTABLE | — | NOT RUN | **NOT PROVEN** | Autorité générique ≠ révocation pending A | Mécanisme/test dédié absent | NOT PROVEN | Risque autorité ; exit Morris |
| S06-03 | Sans HumanDecision | EXECUTABLE AS-IS | git-collaboration T18/B1 | RUN | **PASS** SCRIPTED | ACCESS_DENIED ; mutations 0 | — | DETERMINISTIC SCRIPTED | ≠ REAL |
| S06-04 | Autorisation geste | EXECUTABLE AS-IS | B6 fingerprint ; git e2e AT journey | RUN | **PASS** SCRIPTED | refuse wrong fingerprint ; authorize path | — | PG + BROWSER SCRIPTED | — |
| S06-05 | Publication REAL | CONDITIONAL | SCRIPTED AT/T12/T14 proxy only | RUN proxy / NOT RUN REAL | **PARTIAL** — SCRIPTED PASS ; **REAL NOT PROVEN** | COMPLETED SCRIPTED + qualifyObservedFacts | GitHub.com NOT verified | DETERMINISTIC SCRIPTED | GO REAL distinct si besoin |
| S06-06 | Changement matériel | EXECUTABLE AS-IS | T19/B6/B7 | RUN | **PASS** | REQUIRES_REQUALIFICATION | — | DETERMINISTIC SCRIPTED | — |
| S06-08 | HEAD divergence | EXECUTABLE AS-IS | AT-14 stale_head | RUN | **PASS** | no silent publish | — | DETERMINISTIC SCRIPTED | — |
| S06-09 | Lost ACK publication | CONDITIONAL | B4/AT-15/T13/REC-10 | RUN SCRIPTED | **PARTIAL** — SCRIPTED PASS ; REAL NOT | exactly-one-PR SCRIPTED | REAL lost ACK NOT | DETERMINISTIC SCRIPTED | GO REAL si exigé |
| S06-10 | Merge interdit | EXECUTABLE AS-IS | T20 REAL merge hard-block ; provider unit | RUN | **PASS** | mergePR count 0 under documentary+real harness | Ne pas appeler merge GitHub live | DETERMINISTIC | Merge hard-blocked |
| S06-11 | Restitution fidèle | CONDITIONAL | git-proof-qualify ; AT facts | RUN PARTIAL | **PARTIAL** | limits D8 ; PREPARED≠EXECUTED | Nora+REAL restitution NOT | DETERMINISTIC PARTIAL | Dépend S06-05 REAL |
| S07-01 | E2E complet | CONDITIONAL | fragments D2/D4/D6/Git | RUN fragments | **PARTIAL** | Continuity + SCRIPTED Git slices | Chaîne unique + REAL NOT | PARTIAL DET/BROWSER | REAL GATE |
| S07-04 | États négatifs | EXECUTABLE AS-IS | mutualisé S01/S03/S05/S06 PG | RUN | **PASS** DET | AMBIGUOUS/UNKNOWN/CONFLICT/refus | UI loading exhaustif PARTIAL | DETERMINISTIC | — |
| S07-05 | Isolation 2 Pilotes | CONDITIONAL | identity-session ; FIX-06 ; AT-16 | RUN | **PARTIAL PASS** | distinct pilots ; cross-pilot deny ; fixture isolation | Matrice GitHub REAL rights NOT | PG + BROWSER DEV PARTIAL | Git REAL GATE |
| S07-07 | Reprise après autre parcours | EXECUTABLE AS-IS | intent-continuity ; mission-continuity | RUN | **PASS** | owner-binding ; no neighbor steal | N'implique pas S05-06 | DETERMINISTIC | — |

### Synthèse scénarios

| Qualification scénario | N | IDs |
| --- | ---: | --- |
| PASS (oracle technique atteint au niveau déclaré) | 15 | S02-05, S03-06*, S03-07, S04-03, S05-01†, S05-02/03/05/07, S06-03/04/06/08/10, S07-04, S07-07 |
| PARTIAL | 8 | S01-05, S04-07, S06-05/09/11, S07-01, S07-05 (+ S03-06 UI) |
| NOT PROVEN | 2 | S05-06, S05-08 |
| FAIL | 0 | — |

\* domain FULL / UI partial  † fixture-authorized deterministic

## 6. Fake / Real Qualification

| Frontière | Niveau atteint | Non atteint |
| --- | --- | --- |
| Nora fixture | DETERMINISTIC / BROWSER DEV | LIVE |
| Git SCRIPTED | DETERMINISTIC PROVEN (93+1) | REAL PROVEN |
| Git REAL | Gate unit prouve refus si flag OFF ; T20 merge block | Toute publication GitHub |
| PG E2E | DETERMINISTIC | Données RECETTE |
| RECETTE | Identity observée non mutée | UAT utilisateur |

**DETERMINISTIC PROVEN ≠ READY FOR REAL.**

## 7. Non exécutables et risques

| ID | Statut | Risque | Exit proposé |
| --- | --- | --- | --- |
| S05-06 | NOT PROVEN | Continuité reprise après dialogue indépendant COMPLETE non démontrée | Accepter réserve OU lot ultérieur (pas de fabrication) |
| S05-08 | NOT PROVEN | Autorité de révocation d'un pending A non démontrée | Accepter réserve (autorité générique prouvée ailleurs) OU lot dédié |
| S01-05 TTL / panne DB | NOT PROVEN | A-002 ; confusion panne/auth possible non prouvée route métier | Réserve ENV/session |
| S06-05/09/11 REAL | NOT PROVEN | Publication documentaire réelle non vérifiée | Voir §9 avis REAL |
| S07-01/05 REAL | NOT PROVEN | E2E/Git rights réels | Réserve ou GO REAL |

**Aucune anomalie FAIL produit observée** dans les suites exécutées. Aucun correctif.

## 8. Bilan 53 cas UAT (sans rejeu)

- 28 PASS UAT historiques **non requalifiés**.
- 12 PASS Q4 **conservés**.
- 25 cas de cette campagne : preuves techniques ci-dessus ; **ne convertit pas** automatiquement en PASS UAT.
- Six FAIL historiques déjà retestés Q4 hors Phase B.

## 9. Avis nécessité Git REAL

Oracles restant non prouvés sans REAL : **S06-05** (publication vérifiée sur GitHub), dimension REAL de **S06-09**, restitution **S06-11**, chaîne **S07-01** Git WRITE, droits **S07-05**.

Les preuves SCRIPTED couvrent gardes D6, empreintes, lost ACK, merge interdit, isolation mandates. Pour une acceptation ML4C **avec réserve Git REAL explicite**, le risque peut être assumé si Morris décide que Gate B + SCRIPTED + merge hard-block suffisent.

Si Morris exige REAL PROVEN : contrat distinct minimal = repo sandbox `chantiers360` ou dépôt test, branche documentaire jetable, chemins `docs/…` only, `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` temporaire, 1 prepare→authorize→dispatch→verify SHA/PR, **aucun merge**, lost-ACK SCRIPTED déjà prouvé, remise en état PR close/branch delete, STOP si hors sandbox.

**Ce cycle n'active rien.**

## 10. Recommandation sortie ML4C

Recommander à Morris :

1. **Acceptation ML4C avec réserves explicites** viable si S05-06/S05-08, TTL session, et Git REAL sont assumés documentés.
2. Sinon **report ciblé** : (a) lot pending revoke/resume si bloquant ; (b) GO REAL borné pour S06-05 seulement.
3. **Ne pas** démarrer ML4D ni fermer Gate C sur la base de cette campagne seule.
4. Ne pas activer mutations sur RECETTE.

## 11. Contrôles fin

- Fichiers produit créés/modifiés : **aucun**.
- RECETTE tables 33=33 ; BUILD_ID `0mTcR_VTrO_j6sIlW9Wdb` ; process inchangé.
- Flag REAL non activé dans les suites.
- HEAD produit final : `11f7077e…` ; dirty = pack local.

## 12. Verdict

**ML4C TECHNICAL CAMPAIGN — COMPLETED WITH RESERVES**

- 15 scénarios PASS techniques au niveau déclaré ; 8 PARTIAL ; 2 NOT PROVEN ; 0 FAIL.
- SCRIPTED/PG/BROWSER DEV prouvés sur candidat `11f7077e`.
- REAL / LIVE / UAT utilisateur : NOT RUN / NOT PROVEN.
- Prochaine décision : **Morris** (acceptation avec réserves, remédiation, ou GO REAL distinct).

**Ne pas déclarer ML4C ACCEPTED / Gate C / ML4D / ADOPTED.**
