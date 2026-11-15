# SFIA Studio Next — ML4C Technical Preflight Phase A — Review Pack FULL

**Date:** 2026-11-15T15:44:45+01:00
**Cycle:** Audit projet — préflight qualification QA (Phase A uniquement)
**Profil:** Standard
**Macro-lot:** ML4C — qualification technique intégrée finale
**GO Phase B:** NON ACCORDÉ
**Verdict:** ML4C TECHNICAL PREFLIGHT — PARTIALLY QUALIFIED

---

## A. GO et cadre

Mandat : qualification d'exécutabilité des **25** scénarios du cahier technique complémentaire ML4C (`docs/next-ml4c-uat-journal-20261112@1f6d9cb4`), sans campagne, sans développement, sans correction, sans effet REAL, sans mutation RECETTE.

Interdit respecté : aucun test exécuté ; aucun fichier produit modifié ; `STUDIO_GITHUB_ALLOW_MUTATIONS` non activé ; aucun GO Phase B.

## B. Git Truth initial / final

Worktree produit : `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112`

| Check | Observé |
| --- | --- |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| Tree | `71e052cf53232c70153a6056d948b97fb401b175` |
| Parent | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| origin/main | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| docs UAT journal | `1f6d9cb41405b8079991b2efedc8b076c98c4864` (MATCH attendu) |
| PR #676 | OPEN / head `67bf6b0b…` — NON MERGED |
| Dirty local | `M .tmp-sfia-review/chatgpt-review.md` uniquement (pack) |
| Staged | vide |

Aucune bascule de branche. Aucun reset. Aucun déploiement.

## C. Runtime / ENV-01 (lecture seule)

| Élément | Observé |
| --- | --- |
| :3200 | LISTEN — `next-server (v15.5.29)` |
| Worktree runtime | `…-ml4c-recette-build-11f7077e` |
| HEAD runtime | `11f7077e…` |
| BUILD_ID | `0mTcR_VTrO_j6sIlW9Wdb` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4` running |
| Mutations Git | `STUDIO_GITHUB_ALLOW_MUTATIONS` forcé vide dans `start-recette.sh` |
| Lane tests techniques | DEV/E2E (`sfia_next_e2e`, `:3101`, fixtures) — distincte de RECETTE |
| Versioning | NO PRODUCT RELEASE / READ-ONLY QUALIFICATION |

## D. Sources consultées (refs)

- Cahier technique : `origin/docs/next-ml4c-uat-journal-20261112:…/cahier-qualification-technique-complementaire-ml4c.md` @ `1f6d9cb4`
- Cahier UAT + journal : même branche documentaire
- Candidat `11f7077e` : tests sous `projects/sfia-studio-next/web/tests/**`
- Handoff précédent : `origin/sfia/review-handoff@2dc98766` (bascule RECETTE)
- Preuves d'entrée rapportées antérieurement @11f7077e : UNIT 363 / PG 471 / BUILD / E2E 11 — **suite-level**, non oracle-tagged 25/25

## E. Inventaire des moyens disponibles

**Déterministes existants :** vitest UNIT ; PG integration (`sfia_next_e2e`) ; Playwright E2E DEV (`STUDIO_E2E`, Nora fixture) ; SCRIPTED Git provider ; injecteurs ACK_LOST_SIM (route.fulfill) ; `/api/dev/e2e/s05-fixture` (DEV only).

**Absents / hors mandat Phase A :** injecteur expiration TTL session ; injecteur panne DB HTTP ; refuse/revoke pending A dédié ; GO REAL `documentary` ; campagne navigateur RECETTE mutative ; Nora LIVE.

**Règle :** DETERMINISTIC/SCRIPTED ≠ REAL PROVEN ≠ READY FOR REAL.

## F. Matrice de faisabilité 25/25

| ID | Oracle | Implémentation | Test existant | Preuve/SHA | Gap | Faisabilité | Méthode Phase B | Niveau atteignable | Risque/Gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S01-05 | Session/refus/panne ≠ auth | revokeSession ; HTTP SESSION_INVALID→401 ; cross-pilot 403 | `http-errors.test.ts` ; `identity-session.pg.test.ts` ; FIX-05/06 `ml4c-s05-real-api` | Suite @11f7077e (non rejouée ici) | Pas d'expiry TTL ; pas panne DB→503 route métier | EXECUTABLE AS-IS | Rejouer UNIT/PG/E2E anon+revoke sur DEV | DETERMINISTIC PARTIAL ; BROWSER PARTIAL | A-002 OPEN ; ne pas forger cookie/horloge |
| S02-05 | Lost ACK D2 → 1 projet | create+reconcile + ACK_LOST_SIM | `d2-ack-loss-reconcile.spec.ts` ; `create-project.pg` A05 | E2E/PG existants @candidat | — | EXECUTABLE AS-IS | Playwright DEV FAKE Nora | BROWSER + PG DETERMINISTIC | Lane DEV/E2E ; pas RECETTE |
| S03-06 | 5 états D4 | reconcile/seal domain | `ml4c-document-identity/reconciliation/command.pg` ; guards unit | PG matrix inclus 471 @11f7077e | UI thread 5 labels absente | REUSE EXISTING PROOF | Optionnel re-run PG ciblé | DETERMINISTIC FULL domain ; BROWSER NOT | UAT BLOCKED reste distinct |
| S03-07 | Continuum D2→D4 | intent continuity | `intent-continuity-global.pg` S03 ; `intent-continuity-atlas.spec.ts` | Tests @11f7077e | LIVE continuum non prouvé | EXECUTABLE AS-IS | PG + Atlas E2E DEV | DETERMINISTIC + BROWSER FAKE | Pas confondre avec Intervencia Q4 |
| S04-03 | Supersession D6 | REVISE_DECISION / supersedesDecisionId | `ml3-pilotage.pg` CR-02 REVISE ; `ml4c-auth-reconciliation` D07 | PG @11f7077e | Pas E2E journal UX | REUSE EXISTING PROOF | Re-run PG si GO | DETERMINISTIC FULL D6 | UAT BLOCKED ≠ tech |
| S04-07 | CKI cycle actif | openCycle pin CKI RESOLVED | `ml3-pilotage.pg` open+CKI ; nora-adapter ckiDelivery | PG @11f7077e | Conseil Nora LIVE / CKI après GO UI faible | EXECUTABLE AS-IS | PG openCycle+CKI digest | DETERMINISTIC PARTIAL ; LIVE NOT | Cycle RECETTE actif non requis pour PG |
| S05-01 | A pending identifiable | UNKNOWN turn / AWAITING mission | s05-fixture seeds ; d2-mission ; CR-02 banner | Tests @11f7077e | Pending « organique » sans fixture limité | CONDITIONAL / GATE REQUIRED | Accepter fixture DEV ou D2 mission path | DETERMINISTIC / BROWSER FAKE | Fixture DEV only ; pas RECETTE |
| S05-02 | B indépendant pendant A | S05 sibling policy + API | `ml4c-s05-real-api` SAFE ; S05-G01/G02 ; intent-continuity | Fort @11f7077e | LIVE NOT | EXECUTABLE AS-IS | E2E real-api + PG | DETERMINISTIC + BROWSER FAKE | — |
| S05-03 | Demande incompatible | pendingEffectBlocked | S05-RISK-* ; S05-G04 ; d2-mission block | Fort @11f7077e | — | EXECUTABLE AS-IS | Idem | DETERMINISTIC + BROWSER FAKE | — |
| S05-05 | Refresh pendant A | reload + oracle keys | real-api reload ; d2-mission reload ; CR-02 | @11f7077e | Script unique UAT absent | EXECUTABLE AS-IS | Stitch reload oracles | DETERMINISTIC + BROWSER FAKE | — |
| S05-06 | Reprise A après B COMPLETE | — | Voisins CR-02 / real-api stop après B | Aucune preuve exacte | Enchaînement B COMPLETE→resume A manquant | NON EXECUTABLE AS-IS | Décision Morris : accepter voisin ou lot ultérieur | NOT PROVEN | Ne pas créer de test en Phase A |
| S05-07 | Lost ACK OPEN_CYCLE | ACK_LOST_SIM + reconcile | `ml3-pilotage.spec.ts` CR-02 | E2E existant | Label ML3≠S05-07 | EXECUTABLE AS-IS | Rejouer CR-02 DEV | BROWSER FAKE + PG | Injecteur déjà présent |
| S05-08 | Refus/révocation A pending | — | Aucun flux refuse/revoke pending A | — | Mécanisme/test absents | NON EXECUTABLE AS-IS | Gate Morris / lot ultérieur | NOT PROVEN | Sécurité/autorité : risque résiduel |
| S06-03 | Sans HumanDecision | guards dispatch | git-collaboration T18/B1 ; gate unit | SCRIPTED @11f7077e | Cas PREPARED→dispatch absent peu nommé | EXECUTABLE AS-IS | PG SCRIPTED refus + counts 0 | DETERMINISTIC SCRIPTED | ≠ REAL |
| S06-04 | Autorisation geste précis | fingerprint authz | B6 + AT composite ; mission-continuity | SCRIPTED | — | EXECUTABLE AS-IS | PG SCRIPTED | DETERMINISTIC SCRIPTED | PREPARED≠EXECUTED |
| S06-05 | Publication REAL | provider real+documentary | SCRIPTED publish proxy only | Flag RECETTE OFF | Oracle REAL absente sans GO | CONDITIONAL / GATE REQUIRED | Uniquement si GO REAL distinct | SCRIPTED proxy ; REAL NOT | **Ne pas activer flag** |
| S06-06 | Changement matériel post-auth | fingerprint mismatch | git-collaboration material/fingerprint | SCRIPTED | — | EXECUTABLE AS-IS | PG SCRIPTED | DETERMINISTIC SCRIPTED | — |
| S06-08 | Conflit HEAD | CONFLICT stale | git-collaboration CONFLICT paths | SCRIPTED | — | EXECUTABLE AS-IS | PG SCRIPTED | DETERMINISTIC SCRIPTED | — |
| S06-09 | Lost ACK post-publication | B4 lost ACK reconcile | git-collaboration B4/AT-15 | SCRIPTED | Dimension REAL absente | CONDITIONAL / GATE REQUIRED | SCRIPTED AS-IS ; REAL seulement avec GO | DETERMINISTIC SCRIPTED ; REAL NOT | Séparer les deux niveaux |
| S06-10 | Merge interdit | merge always blocked real provider | T20 + `real-github-mutations-gate` / provider | Unit+PG | Ne pas appeler merge GitHub réel | EXECUTABLE AS-IS | Unit/PG refus sans effet fournisseur | DETERMINISTIC | Merge REAL hard-blocked |
| S06-11 | Restitution fidèle | TEMP restitution fragments | unit/PG fragments ; pas résultat REAL | Partiel | Pas de résultat REAL à restituer | CONDITIONAL / GATE REQUIRED | SCRIPTED PREPARED/EXECUTED ; REAL si GO+S06-05 | DETERMINISTIC PARTIAL | Dépend S06-05 |
| S07-01 | Parcours E2E complet | fragments D2/D4/D6/Git | Continuity + git SCRIPTED + pilotage | Fragments | Chaîne unique + REAL manquante | CONDITIONAL / GATE REQUIRED | Mutualiser AS-IS ; REAL hors défaut | PARTIAL DET ; REAL NOT | Journal BLOCKED E2E |
| S07-04 | États négatifs/reprise | mutualisation S01/S03/S05/S06 | PG document+S05+git errors | Fort PG | UI copy complète CONDITIONAL | EXECUTABLE AS-IS | Rejouer familles PG | DETERMINISTIC | Pas d'injection panne ad hoc |
| S07-05 | Isolation 2 Pilotes | foreign 403 ; FIX-06 | identity-session ; s05 FIX-06 ; doc 403 | PG/E2E | Matrice GitHub REAL inter-Pilote absente | CONDITIONAL / GATE REQUIRED | PG isolation AS-IS ; Git REAL gate | DETERMINISTIC PARTIAL | A-005 / droits Git |
| S07-07 | Reprise après autre parcours | mission continuity / S05 keep | intent-continuity ; mission-continuity PG | PG | Lié à lacune S05-06 si oracle strict | EXECUTABLE AS-IS | PG continuity + S05 keep | DETERMINISTIC | Ne pas surclasser S05-06 |

### Comptages

| Catégorie | N |
| --- | ---: |
| REUSE EXISTING PROOF | 2 |
| EXECUTABLE AS-IS | 15 |
| CONDITIONAL / GATE REQUIRED | 6 |
| NON EXECUTABLE AS-IS | 2 |
| NOT QUALIFIED | 0 |
| **Total** | **25** |

## G. Synthèse structurée

1. **Moyens :** UNIT/PG/E2E DEV + SCRIPTED Git + ACK_LOST_SIM + s05-fixture DEV ; RECETTE :3200 observée mais **non mutée** ; REAL OFF.
2. **REUSE :** S03-06, S04-03 (déterministe PG déjà dans preuve suite @11f7077e ; limites explicites).
3. **EXECUTABLE AS-IS :** 15 cas — surtout DEV/E2E/SCRIPTED, oracles discriminants sans nouvel outil.
4. **CONDITIONAL :** S05-01 (acceptation fixture), S06-05/09/11 (REAL), S07-01 (chaîne/REAL), S07-05 (Git rights REAL).
5. **NON EXECUTABLE :** S05-06 (reprise A après B COMPLETE exacte), S05-08 (refus/révocation pending A).
6. **NOT QUALIFIED :** 0.
7. **Mutualisations sûres :** S05-02/03/05/07 ↔ S07-04/07 ; S03-06 ↔ S07-04 ; S06-03/04/06/08/10 SCRIPTED bloc ; **sans** fusionner SCRIPTED→REAL.
8. **Risques :** autorité pending (S05-08) ; Git REAL non prouvé ; A-002 expiry ; A-004 DEV buttons ; cookies R1 ; merge hard-block à ne pas « tester » via appel réel.
9. **Ordre Phase B proposé (NON EXÉCUTÉ) :** A identité S01-05 → B D2/D4 S02-05/S03-06/07 → C D6/CKI S04-03/07 → D pending S05-02/03/05/07 (+S05-01 si gate fixture) → E Git SCRIPTED S06-03/04/06/08/10 → F S07-04/07 → STOP avant REAL ; S06-05/09/11/S07-01 REAL seulement sous GO distinct.
10. **Arbitrages Morris avant GO Phase B :** (a) accepter fixtures DEV/`s05-fixture` pour S05-01 ; (b) traiter S05-06/S05-08 comme NOT PROVEN / exit risque ; (c) mandat REAL distinct ou exclusion assumée ; (d) lane DEV/E2E vs non-mutation RECETTE.

## H. Réconciliation 53 / 28 PASS

Les 28 PASS UAT historiques et les 12 PASS Q4 **ne sont pas requalifiés**. Les 25 cas de ce cahier restent la matrice technique. Six FAIL historiques déjà retestés Q4 positifs (S03-01, S04-01/02/04/06, S07-06) hors périmètre d'exécution Phase A.

## I. Fake / Real Qualification

| Frontière | Dispositif | Garantie | Limite |
| --- | --- | --- | --- |
| Nora | FORCE_NORA_FIXTURE / E2E | Déterministe | ≠ LIVE |
| GitHub | SCRIPTED provider | Idempotence/gardes | ≠ REAL PROVEN |
| GitHub REAL | flag `documentary` | Gate unit prouve refus si OFF | Activation = GO distinct |
| PostgreSQL | sfia_next_e2e | États durables | ≠ données RECETTE |
| Browser | Playwright :3101 DEV | UI+API | ≠ RECETTE UAT |

## J. Contrôles de fin

- Aucun fichier projet suivi créé/modifié (hors pack local non suivi Git produit).
- Aucun test déclenché ; aucun effet DB/fournisseur Phase A.
- Aucune config modifiée.
- HEAD final produit : `11f7077e…` inchangé.
- Dirty : pack `.tmp-sfia-review/chatgpt-review.md` seulement.

## K. Décisions Morris requises

1. GO Phase B (périmètre, lane DEV/E2E, jeux de données).
2. Acceptation fixture S05-01 ou exclusion.
3. Exit S05-06 / S05-08 (réserve vs blocage acceptation).
4. GO REAL distinct **ou** exclusion assumée S06-05/09-REAL/S06-11/S07-01-Git.
5. Non-activation `STUDIO_GITHUB_ALLOW_MUTATIONS` hors mandat explicite.

## L. Verdict

**ML4C TECHNICAL PREFLIGHT — PARTIALLY QUALIFIED**

Motivation : majorité des oracles discriminants sont démontrables avec les moyens existants (2 REUSE + 15 EXECUTABLE), mais 6 cas restent conditionnels (surtout REAL/fixture) et 2 non exécutables sans nouveau dispositif (S05-06, S05-08). Aucune acceptation ML4C. Aucune Phase B. Aucun ML4D.

**STOP FINAL — prochaine action : Morris après revue ChatGPT du handoff distant.**
