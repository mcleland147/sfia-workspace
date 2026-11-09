# R5 ML4 — Matrice de couverture et de preuves candidate

**Statut courant (2026-11-09) :** AS-IMPLEMENTED LOCAL CANDIDATE · DETERMINISTIC CORRECTIVE COVERAGE (intégrité D7/D8) · OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (mono-repo sandbox) · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED
**Base construction :** `feat/next-git-collaboration-20261108` parent `79b10052…` + correctif local intégrité (push Product NON AUTORISÉ)
**Base Git historique :** `main@84bf3496…` ; qualification v0.2 `docs/next-ml4-git-qualification-20261107@3bb9224`.
**Figma ML4 VALIDATED SPEC Morris :** 18 écrans 218–235 ; convergence UX globale et USER E2E navigateur = RECETTE Morris.
**Niveaux Fake/Real distincts — ne pas confondre :** OAuth READ REAL ≠ commit/PR documentary REAL ≠ USER E2E ≠ Merge REAL ≠ Product intégré.

## 1. Principe

Ce fichier est une **matrice de recette ciblée** du macro-lot, pas un nouveau corpus de 41 règles ou de 36 scénarios. Les `RG-GIT-001..041` / `PF-GIT-01..36` existants restent propriétaires de leurs définitions dans la spécification D9, et la qualification v0.2 contient leur requalification ligne à ligne. Les candidats `N-01..N-14` concernent production/publication ; `N-15..N-27` les intégrations ; **aucun identifiant N n'est encore normatif**. Ne pas créer un `PF-GIT-*` redondant par ligne de test avant la revue de cohérence R2.

## 2. Recette d'acceptation discriminante

| Test candidat | Parcours / résultat recherché | Traçabilité existante | R4 QA / UX | Niveau de preuve ciblé | État |
|---|---|---|---|---|---|
| `ML4-AT-01` | Projet Studio et Nora utilisables sans repo ni App | R1 E2E07 ; RG-GIT-001/040 ; PF-GIT-01/02 ; N-15 |D-01/D-02 ; Figma 171/70 ; **Figma validé 218/70/171** | navigateur RECETTE | NOT RUN |
| `ML4-AT-02` | GitHub OAuth ne donne aucun accès privé repo | R1 §2.23 ; D1 RG-ACC-003 ; RG-GIT-008/009 |D-02/D-05 ; Figma 176/178 ; **Figma validé 220/176/178** | API sécurité + REAL accès | NOT RUN |
| `ML4-AT-03` | Paramètres → Intégrations GitHub et autorisation utilisateur/installation | N-16/17/18 ; D1/D9 |Nouvelle Figma A/B/E ; **Figma validé 218–220/224** | navigateur + fournisseur réel | NOT RUN |
| `ML4-AT-04` | Ajout ultérieur d'un dépôt « à la carte » | RG-GIT-002/006/007/010 ; PF-GIT-03/05 ; N-20 |D-03 ; Figma 172/173 + B ; **Figma validé 219/221/226** | REAL permissions + navigateur | NOT RUN |
| `ML4-AT-05` | Ajout de source depuis Nora, reprise sans perte du fil | R1 E2E07 ; D3/D4 ; N-19 |D-05/D-22 ; Figma 09/87 + D/E ; **Figma validé 225/220/224/87** | LIVE Nora + navigateur | NOT RUN |
| `ML4-AT-06` | Organisation GitHub en attente, aucun accès anticipé | N-24/25 ; RG-GIT-009/010 |D-05/D-14 ; nouvelle Figma B/E ; **Figma validé 222** | REAL multi-identité | NOT RUN |
| `ML4-AT-07` | GitHub App retirée vs projet détaché vs utilisateur déconnecté | RG-GIT-006/012/037 ; PF-GIT-26/32 ; N-21/22/23 |D-10/D-26 ; Figma 177/191/192 ; **Figma validé 223/191/192** | API, DB, navigateur | NOT RUN |
| `ML4-AT-08` | Nora lit fichier candidate et cite ref/SHA, sans inventer `main` | RG-GIT-017..024/041 ; PF-GIT-13/14/35 ; N-01 |D-04 ; Figma 175/12 ; **Figma validé 226/175/12** | LIVE Nora + REAL source | NOT RUN |
| `ML4-AT-09` | README hostile n'entraîne ni mandat ni écriture | RG-GIT-015 ; PF-GIT-10 ; N-12 |D-09 ; Figma 180 ; **Figma validé 225/180** | LIVE adversarial + audit effet | NOT RUN |
| `ML4-AT-10` | Document D4 sauvegardé, révisé et lié à source Git | D4 RG-KNOW-006..012 ; N-02/03 |UX Doc Nora, versions + Figma 175 ; **Figma validé 227/205** | DB/UX/LIVE Nora | NOT RUN |
| `ML4-AT-11` | Document D4 → branche Git + commit distant sans toucher `main` | RG-GIT-003/025..032 ; PF-GIT-17/18/19 ; N-04 |D-11/D-17 ; Figma 182/184/185 + G ; **Figma validé 227/231/184–185** | REAL GitHub, diff et SHA | NOT RUN |
| `ML4-AT-12` | PR réellement ouverte, pas de merge implicite | RG-GIT-018/021/030/031 ; PF-GIT-19/22 ; N-05 |D-21 ; Figma 185/188 ; **Figma validé 228/185/188** | REAL PR état/base/head | NOT RUN |
| `ML4-AT-13` | Merge documentaire seulement après deuxième GO + protections | RG-GIT-030/031 ; N-06 |D-21 ; Figma 185/188 + H ; **Figma validé 229–230/185** | REAL GitHub + navigateur | NOT RUN |
| `ML4-AT-14` | HEAD change entre inspection et effet : refus/requalification | RG-GIT-019/023/028 ; PF-GIT-15/18 ; N-08 |D-11/D-12 ; Figma 182/190 ; **Figma validé 231/182/190** | REAL conflit | NOT RUN |
| `ML4-AT-15` | Timeout/double clic : pas de commit ni PR fantômes/doublons | RG-GIT-031/032 ; PF-GIT-20/32 ; N-07 |D-18/D-19/D-23 ; Figma 186/187/192 ; **Figma validé 231/186–187** | API fault + REAL réconciliation | NOT RUN |
| `ML4-AT-16` | Repo partagé entre Pilotes n'unit ni mémoire ni mandats | RG-GIT-016/033..036 ; PF-GIT-11/23..25/34 ; N-10 |D-07/D-08/D-12 ; Figma 181/190 ; **Figma validé 226/231/181** | 2 comptes REAL/DB | NOT RUN |
| `ML4-AT-17` | Publication code/CI/scripts/normatif hors autorisation ML4 interdite | RG-GIT-025/026/038/039 ; N-09 |D-17 ; Figma 184 ; **Figma validé 227/184** | tests refus et sécurité | NOT RUN |
| `ML4-AT-18` | Commit observé avec tests absents ne prouve pas conformité | RG-GIT-021/022/024 ; PF-GIT-33 ; N-11 |D-24 (ML5 Cursor différé) et D-25 ; Figma 193 ; **Figma validé 230/193** | D8/navigateur | NOT RUN |
| `ML4-AT-19` | Figma future intégration absente ou non activable | N-26 ; produit simple |Nouvelle Figma A ; **Figma validé 218–219** | navigateur | NOT RUN |
| `ML4-AT-20` | Lien « Ouvrir sur GitHub » réel mais sans permission dérivée | RG-GIT-041 ; PF-GIT-35/36 ; N-27 |D-04/D-05 ; Figma 175/176 ; **Figma validé 226/175–176** | browser + API | NOT RUN |
| `ML4-AT-21` | Responsive, focus, clavier, zoom, interruptions | R3 §14 ; contrat transposition |D-25 ; Figma 197/198, nouveaux écrans ; **Figma validé 232–235/197–198/201–202** | capture navigateur + a11y ciblé | NOT RUN |
| `ML4-AT-22` | Accès Git révoqué sans annuler le document interne ni les commits historiques | RG-GIT-012/019/029/037 ; PF-GIT-12/27/32/36 ; N-13 |D-10/D-26 ; Figma 177/192 ; **Figma validé 223/177/192** | REAL permission + reprise | NOT RUN |

## 3. Écarts et réserves par gate

| Gate | Exigence | Réserve ouverte / exit |
|---|---|---|
| D2 décision normative | Arbitrages portée d'écriture, merge, identité App, « Intégrations » | Décisions de trajectoire/portée validées par Morris et enregistrées sur branche candidate ; les nouveaux N restent candidats et aucun GO code n'est acquis |
| R2 | Mise à jour des règles et scénarios sous leurs propriétaires | `N-01..N-14` et `N-15..N-27` non normalisés ; éviter double corpus |
| R3 | Figma nouvelle navigation + états de consentement/retour et publication D4 | 18 écrans 218–235 et INDEX Figma VALIDATED SPEC Morris, registre de traçabilité disponible ; snapshot immuable et preuves navigateur encore à produire |
| R4 | Instance GitHub App, identité d'effet, droits, concurrence, opérations remote, idempotence | Mécanismes non implémentés ; choix à prouver auprès du fournisseur |
| R5 | Code, tests, migration, sécurité, UX, LIVE Nora, REAL GitHub | No run, no coverage, no behavior proven ; routes/modules Git absents du `main` observé |
| R6 | E2E et non-régression globale, réserves ML1–ML3 et lane STABLE | NOT STARTED ; aucun ADOPTED, release ni promotion |

## 4. Rapports probatoires attendus pendant le build

Pour chaque essai réel : **date, lane, identité du Pilote/acteur d'effet, dépôt de test, ref/base/HEAD, contenu/cible, autorisation D6, commande D7 si applicable, réponse GitHub, état distant relu, preuve brute utile, limite, SHA du code Next et verdict**. Les tests déterministes ne justifient pas une revendication REAL. Tout QA noté `NOT RUN` le reste jusqu'à preuve.

**Suite courante :** après intégration du paquet documentaire et convergence UX ML1–ML3 sous gate distinct, consolider la spécification technique ML4 avant GO Cursor ; conserver ces 22 contrôles au statut NOT RUN, sans second registre de tests.


## 5. Traçabilité post-revue Figma — 2026-11-07

Les repères A/B/G/H du présent tableau désignent les surfaces candidates historiquement prévues ; les références numériques ajoutées dans chaque ligne constituent **le raccord actuel approuvé**. [Registre de nœuds et parcours](../../ux-ui/integration-git-ux-ml4.md). Les 22 tests demeurent **NOT RUN**, aucune couverture réelle n'est revendiquée.

## 6. Snapshot historique — DETERMINISTIC 2026-11-08 (ne pas lire comme statut courant)

> **HISTORIQUE.** À la date de ce snapshot, le plafond était DETERMINISTIC uniquement.
> Le **statut courant** est en tête de fichier et aux §§19–21 (OAuth READ REAL ; publication documentaire REAL bornée ; consolidation ; USER E2E NOT RUN).
> Conserver ce tableau pour chronologie ; ne pas le présenter comme l'état AS-IMPLEMENTED actuel.

Niveau plafonné **à cette date** : IMPLEMENTED LOCAL + DETERMINISTIC COVERAGE VERIFIED.
À cette date : DETERMINISTIC PROVEN ≠ READY FOR REAL (aucune preuve commit/PR REAL encore).

| ID | Résultat local | Preuve | Réserve |
|---|---|---|---|
| AT-01 | PASS DET | PG `git-collaboration` + e2e surface git sans source | — |
| AT-02 | PASS DET (contrat) | OAuth Studio inchangé sans repo scopes ; Intégrations séparées | REAL OAuth+App non exercé |
| AT-03 | PASS DET | authorize/complete SCRIPTED + UI Intégrations | Consentement GitHub REAL absent |
| AT-04 | PASS DET | refresh/repos + attach UI | Ajout dépôt via GitHub UI REAL absent |
| AT-05 | PARTIAL | Demande contextuelle Nora/UI non e2e complète | Fil conversation + authorize contextuel à approfondir |
| AT-06 | PASS DET (service) | `setPendingApproval` status | Org REAL absent |
| AT-07 | PASS DET | disconnect vs detach distinctions (service/UI) | — |
| AT-08 | PASS DET | `readGitFile` ref obligatoire + SHA | Nora LIVE lecture absente |
| AT-09 | PASS DET | README hostile lu ; aucun D7 auto | Nora LIVE adversarial absent |
| AT-10 | PASS DET | `document_publication_refs` après dispatch | — |
| AT-11 | PASS DET (SCRIPTED) | branche+commit+fichier via provider scripted | REAL Contents API absent |
| AT-12 | PASS DET (SCRIPTED) | PR ouverte ; pas de merge auto | REAL PR absent |
| AT-13 | PASS DET | merge = 2e HumanDecision `GIT_MERGE_MANDATE` | REAL protections branches absentes |
| AT-14 | PASS DET | `stale_head` → REQUIRES_REQUALIFICATION | — |
| AT-15 | PASS DET | timeout → AMBIGUOUS, pas de succès | — |
| AT-16 | PASS DET | attach cross-pilot refusé | — |
| AT-17 | PASS DET | path-policy refuse src/.github/README racine | — |
| AT-18 | PASS DET | D8 qualify : testsPass/conformity/morris/adopted = false | — |
| AT-19 | PASS DET | UI GitHub seul actionnable | — |
| AT-20 | PARTIAL | Lien Git scripted HTML URL en faits ; pas d'inférence droits | REAL link non prouvé |
| AT-21 | PARTIAL | Frames 232–235 + shell responsive ; e2e capture locale | Zoom/clavier/320 px non exhaustifs |
| AT-22 | PASS DET | revoke conserve document D4 AVAILABLE | — |

Commandes exécutées (web/) : `npm run test:unit` (131) ; `npm run test:integration` (154) ; `npx tsc --noEmit` ; `npm run build` ; `npx playwright test tests/e2e/git-collaboration.spec.ts` (voir rapport cycle).

## 7. Requalification DETERMINISTIC — correctif B1–B9 (2026-11-08)

Référence historique Review Pack : `877b502ad177588be3c9201ee9f670fb8f483183`.
Plafond inchangé : **DETERMINISTIC ≠ READY FOR REAL**.

| ID | État correctif | Correction | Test exact | Résultat | Niveau | Écart / sortie |
|---|---|---|---|---|---|---|
| AT-01 | PASS DET | — | PG AT-01 + e2e projet | PASS | DET | — |
| AT-02 | PASS DET (contrat) | B7 | OAuth ≠ App (inchangé) | PASS | DET | REAL OAuth |
| AT-03 | PASS DET | — | authorize SCRIPTED UI | PASS | DET | REAL consent |
| AT-04 | PASS DET | — | attach UI/e2e | PASS | DET | REAL add repo |
| AT-05 | PARTIAL | B8 | Pas d'e2e Nora contextuel complet | PARTIAL | DET | E2E fil Nora |
| AT-06 | PASS DET (service) | — | pending approval | PASS | DET | Org REAL |
| AT-07 | PASS DET | B1 | disconnect vs detach | PASS | DET | — |
| AT-08 | PASS DET | — | readGitFile ref+SHA | PASS | DET | Nora LIVE |
| AT-09 | PASS DET | B8 | hostile README + aucun D7 auto (PG) | PASS | DET | Nora LIVE adversarial |
| AT-10 | PASS DET | B6/B7 | publication_refs + inspection | PASS | DET | — |
| AT-11 | PASS DET (SCRIPTED) | B1/B2 | dispatch claim + branch/commit | PASS | DET | REAL Contents |
| AT-12 | PASS DET (SCRIPTED) | B3 | PR sans merge | PASS | DET | REAL PR |
| AT-13 | PASS DET | B1/B3 | merge via publicationAttemptId + 2e mandat | PASS | DET | REAL protections |
| AT-14 | PASS DET | B1 | stale_head | PASS | DET | — |
| AT-15 | PASS DET | B4 | lost_ack_after_commit + reconcile + resume | PASS | DET | REAL network |
| AT-16 | PASS DET | B1/B7 | attach + dispatch cross-pilot | PASS | DET | — |
| AT-17 | PASS DET | B5 | adversarial path unit+PG | PASS | DET | — |
| AT-18 | PASS DET | — | D8 qualify | PASS | DET | — |
| AT-19 | PASS DET | — | UI GitHub seul | PASS | DET | — |
| AT-20 | PARTIAL | B8 | lien scripted ; REAL non prouvé | PARTIAL | DET | GO REAL |
| AT-21 | PARTIAL | B6/B8 | e2e 320/390/1280 + focus diff ; zoom 200% non exhaustif | PARTIAL | DET | a11y exhaustif |
| AT-22 | PASS DET | — | revoke conserve D4 | PASS | DET | — |

### Clôture B1–B9

| B | Statut | Preuve |
|---|---|---|
| B1 | RESOLVED | `assertCurrentGitAuthority` + tests révocation/restriction |
| B2 | RESOLVED | claim atomique AUTHORIZED→DISPATCHED ; Promise.all ; payload mismatch |
| B3 | RESOLVED | `prepareMerge({ publicationAttemptId })` ; PR arbitraire refusée |
| B4 | RESOLVED | progress partiel + reconcile + resume sans doublon |
| B5 | RESOLVED | path-policy fail-closed + adversarial unit/PG |
| B6 | RESOLVED | inspection.diff serveur + `inspectedFingerprint` au authorize |
| B7 | RESOLVED | fingerprint provenance + assert document/projet/install |
| B8 | RESOLVED (plafond DET) | matrice requalifiée ; e2e journey étendu |
| B9 | RESOLVED | Review Pack FULL + package-lock diff inclus |

Commandes correctif : `npm run test:unit` ; `npx vitest run tests/integration/git-collaboration.pg.test.ts` (15) ; `npx tsc --noEmit` ; `npx playwright test tests/e2e/git-collaboration.spec.ts` ; batterie ML1–ML3/G4 : voir rapport.

## 8. Requalification FINAL CORRECTIVE — B1/B2/B3/B4/B6/B7/B8 (2026-11-08)

GO Morris : « OK, GO CORRECTION ». Plafond : **DETERMINISTIC ≠ READY FOR REAL**. B5/B9 préservés (non-régression).

| ID | Verdict | Preuve discriminante | Écart / sortie |
|---|---|---|---|
| AT-01 | PASS DET | PG + e2e surface sans source | — |
| AT-02 | PASS DET (contrat) | OAuth Studio ≠ App | REAL OAuth |
| AT-03 | PASS DET | authorize SCRIPTED + UI | REAL consent |
| AT-04 | PASS DET | attach UI/e2e | REAL add repo |
| AT-05 | PARTIAL | parcours Nora contextuel non e2e | E2E fil Nora |
| AT-06 | PASS DET (service) | pending approval | Org REAL |
| AT-07 | PASS DET | disconnect vs detach | — |
| AT-08 | PASS DET | readGitFile ref+SHA | Nora LIVE |
| AT-09 | PASS DET (lecture hostile) | README hostile PG ; **Nora LIVE adversarial non prouvé** | Nora LIVE adv. |
| AT-10 | PASS DET | publication_refs + inspection | — |
| AT-11 | PASS DET (SCRIPTED) | branch/commit + mutation counts | REAL Contents |
| AT-12 | PASS DET (SCRIPTED) | PR sans merge auto | REAL PR |
| AT-13 | PASS DET | head/base/refs + mandat merge distinct + base avancée refusée | REAL protections |
| AT-14 | PASS DET | stale_head | — |
| AT-15 | PASS DET | `lost_ack_after_pr` → reconcile → resume ; **createPR===1** ; remote unread → createPR===0 | REAL network |
| AT-16 | PASS DET | attach + **dispatch** cross-pilot isolés | — |
| AT-17 | PASS DET | path-policy B5 rejoué | — |
| AT-18 | PASS DET | D8 qualify prudent | — |
| AT-19 | PASS DET | UI GitHub seul | — |
| AT-20 | PARTIAL | REAL non prouvé | GO REAL |
| AT-21 | PARTIAL | 320/390/1280 ; a11y/zoom incomplets | a11y exhaustif |
| AT-22 | PASS DET | revoke conserve D4 | — |

### Clôture B1–B9 (final corrective)

| B | Statut | Preuve |
|---|---|---|
| B1 | RESOLVED | `permissionSatisfies` read≠write ; fixture `contents=read` → 0 mutations |
| B2 | RESOLVED | DISPATCHED refuse HTTP ; claim CAS ; compteurs createBranch/putFile/createPR |
| B3 | RESOLVED | expectedBaseSha/headRef/baseRef au prepare+dispatch ; base/head avancés refusés |
| B4 | RESOLVED | `findPullRequest` + marker ; lost_ack_after_pr → exactement 1 PR |
| B5 | PRESERVED | path-policy tests rejoués PASS |
| B6 | RESOLVED | 403→FORBIDDEN, timeout→TIMEOUT ; authorize refuse (pas CREATE) |
| B7 | RESOLVED | actorLogin/installation courants vs plan au point d'effet |
| B8 | RESOLVED (plafond DET) | AT requalifiés ; unit 136 ; git PG 24 ; Playwright full |
| B9 | PRESERVED | Review Pack FULL réécrit ce cycle |

Commandes final corrective (web/, Europe/Paris 2026-11-08) :
- `npx tsc --noEmit` PASS
- `npm run test:unit` → **136 PASS**
- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **24 PASS**
- `npm run test:integration` → 167 PASS / 1 FAIL préexistant flaky `portfolio-a1` pagination (hors ML4)
- `npm run build` PASS
- `npx playwright test` → voir delivery-history / Review Pack

## 9. Requalification EXECUTION-INVARIANTS — C1/C2/C3/B2/Q1 (2026-11-08)

GO Morris : « OK GO » (stabilisation finale). Source Critical Review handoff `f15a8e99…`.
Plafond : **DETERMINISTIC ≠ READY FOR REAL**. B1/B3–B9 préservés (non-régression).

| ID | Verdict | Preuve discriminante ce cycle | Écart / sortie |
|---|---|---|---|
| AT-01 | PASS DET | PG + e2e surface | — |
| AT-02 | PASS DET (contrat) | OAuth ≠ App | REAL OAuth |
| AT-03 | PASS DET | authorize SCRIPTED | REAL consent |
| AT-04 | PASS DET | attach | REAL add repo |
| AT-05 | PARTIAL | Nora contextuel non e2e | E2E fil Nora |
| AT-06 | PASS DET (service) | pending | Org REAL |
| AT-07 | PASS DET | disconnect/detach | — |
| AT-08 | PASS DET | readGitFile | Nora LIVE |
| AT-09 | PASS DET (hostile DET) | README hostile PG | Nora LIVE adv. |
| AT-10 | PASS DET | publication_refs | — |
| AT-11 | PASS DET (SCRIPTED) | C1 barrière + compteurs | REAL Contents |
| AT-12 | PASS DET (SCRIPTED) | C2 historique vs CLOSED | REAL PR |
| AT-13 | PASS DET | merge mandat + refs (B3) | REAL protections |
| AT-14 | PASS DET | stale_head | — |
| AT-15 | PASS DET | B2 barrière dispatch/reconcile ; lost ACK | REAL network |
| AT-16 | PASS DET | C3 multi-repo + AT-16 multi-pilot | — |
| AT-17 | PASS DET | path-policy B5 | — |
| AT-18 | PASS DET | D8 `prCreatedHistorically` ≠ `prCurrentState` | — |
| AT-19 | PASS DET | UI GitHub seul | — |
| AT-20 | PARTIAL | REAL non prouvé | GO REAL |
| AT-21 | PARTIAL | a11y/zoom incomplets | a11y exhaustif |
| AT-22 | PASS DET | revoke D4 | — |

### Clôture C1/C2/C3/B2/Q1

| Item | Statut | Preuve |
|---|---|---|
| C1 | RESOLVED (DET) | `assertStepAuthority` avant chaque mutation ; revoke après `CREATE_BRANCH` → `putFileContents===0` |
| C2 | RESOLVED (DET) | `prCreatedHistorically` vs `prCurrentState` OPEN/CLOSED/MERGED/UNKNOWN ; no 2e PR |
| C3 | RESOLVED (DET) | SCRIPTED store `PilotId+fullName` ; unit isolation + PG deux repos |
| B2 | RESOLVED (DET) | claim lease + fencing ; reconcile READ-ONLY si claim actif ; barrière avant mutation |
| Q1 | RESOLVED (DET) | cause = keyset ms truncation vs timestamptz µs ; fix tuple `(created_at,id)` + cursor µs ; stress 25/25 ; suite 172/172 |

Commandes stabilisation (web/, Europe/Paris 2026-11-08) :
- `npx tsc --noEmit` PASS
- `npm run test:unit` → **140 PASS**
- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **28 PASS**
- `npm run test:integration` → **172 PASS** (portfolio-a1 inclus)
- `npm run build` PASS
- `npx playwright test` → voir delivery-history / Review Pack

## 10. Requalification FENCING & RECONCILIATION CLOSURE (2026-11-08)

GO Morris : « OK GO ». Source Critical Review handoff `4bcc8e4e…` (NOT READY + Review Pack incomplete B9).
Plafond : **DETERMINISTIC ≠ READY FOR REAL**.

| Item | Statut | Preuve |
|---|---|---|
| B2 SQL fencing | RESOLVED (DET) | `claimToken` dans prédicat SQL (`result_json->claim->>claimToken`) ; persist/touch/transitions CAS ; 0 rows si token périmé |
| B2 lease expiry + old worker | RESOLVED (DET) | expire lease → reconcile AMBIGUOUS → B COMPLETED → wake A → CONFLICT ; compteurs inchangés |
| B4/C2 remote unread | RESOLVED (DET) | `prCreated` historique + remote illisible → `prCurrentState=UNKNOWN` ; pas de COMPLETED ; pas de createPR |
| B9 docs | RESOLVED | diffs complets matrice / specification / delivery-history dans Review Pack |
| C1/C3/Q1/B1/B3/B5–B7 | PRESERVED | suites rejouées |

Commandes closure (web/, Europe/Paris 2026-11-08 ~17:40) :
- `npx tsc --noEmit` PASS
- `npm run test:unit` → **140 PASS**
- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **32 PASS**
- `npm run test:integration` → **176 PASS**
- `npm run build` PASS
- `npx playwright test` → Review Pack

## 11. Requalification PR RESUME VERIFICATION (2026-11-08)

GO Morris : « OK GO ». Source Critical Review `c67ec07f…` — défaut `prAlreadyCreated` sautant OPEN_PR.
Plafond : **DETERMINISTIC ≠ READY FOR REAL**.

| Item | Statut | Preuve |
|---|---|---|
| B4/C2 resume | RESOLVED (DET) | `prHistoricallyCreated` force relecture get/find ; jamais createPR ; COMPLETED seulement si `prRemoteVerified` |
| publicationRef | RESOLVED (DET) | upsert idempotent par effectAttemptId ; pas de doublon ; PR_OPEN/CLOSED cohérents |
| B2 fencing | PRESERVED | touch/CAS inchangés sur reprise |
| Negatifs | RESOLVED | unread ; zero match ; CLOSED ; idempotent COMPLETED |

Commandes (web/, Europe/Paris 2026-11-08 ~18:00) :
- `npx vitest run tests/integration/git-collaboration.pg.test.ts` → **36 PASS**
- suites globales → Review Pack

## 12. Requalification D7–D8 PUBLICATION INTEGRITY (2026-11-08)

GO Morris : « OK GO ». Source Critical Review `66134ea4…`.
Plafond : **DETERMINISTIC ≠ READY FOR REAL**.

| Item | Statut | Preuve |
|---|---|---|
| D8 UNIQUE | RESOLVED (DET) | migration `009_publication_ref_attempt_unique` ; index partiel `effect_attempt_id` ; preflight DEV 3 doublons détachés explicitement (pas de delete) |
| D7/D8 atomicité | RESOLVED (DET) | `commitPublicationCompletion` txn : CAS puis upsert ; CAS 0 rows → rollback D8 |
| Marker PR | RESOLVED (DET) | `assertPrMarkerProvenance` même si getPullRequest par numéro |
| Concurrence | RESOLVED (DET) | barrier `before:COMPLETE_PUBLICATION` + reconcile gagnant ; COUNT=1 |

Commandes (web/, ~18:25 CET) :
- git PG → **39 PASS** ; suites globales → Review Pack

## 13. Requalification USER AUTH + D7/D8 SAFETY (2026-11-08)

GO Morris CRITICAL intégré. Handoff entrée `b6dccd6e…`.
Plafond : **DETERMINISTIC USER FLOW / REAL INSTALLATION READ ONLY** — **≠ USER-TO-SERVER REAL PROVEN** — **≠ READY FOR REAL WRITES**.

| Item | Statut | Preuve |
|---|---|---|
| Provenance PR (prNumber connu) | RESOLVED (DET) | reconcile refuse COMPLETED si marker foreign ; 0 createPR ; 0 publicationRef |
| CAS owned + bail actif | RESOLVED (DET) | lease expiré + même claimToken → CONFLICT ; status ≠ COMPLETED ; 0 publicationRef |
| D8 Option A | PRESERVED | aucune remédiation DB ; 009 UNIQUE intacte |
| Migration 010 | RESOLVED (DEV/e2e) | ADDITIVE PKCE + colonnes token chiffré ; schemaRevision `010_github_app_user_oauth` |
| OAuth state CSRF | RESOLVED (DET) | replay → CONFLICT ; state étranger → ACCESS_DENIED |
| Tokens | RESOLVED (DET) | ciphertext present si clé ; jamais dans JSON status |
| REAL user interactive | NOT PROVEN | `GITHUB_APP_CLIENT_ID/SECRET/CALLBACK` absents |
| REAL install READ | PRESERVED | cycle précédent `b6dccd6e…` |
| Playwright | PASS | 13/13 non-régression (parcours SCRIPTED git + ML1–ML3) |
| UX Figma 218–235 | PENDING | surface minimale `/settings/integrations` ; pas de claim Figma complet |

Commandes (web/, ~20:43–20:46 CET) :
- `npx tsc --noEmit` → PASS
- `npm run test:unit` → **160 PASS**
- `npm run test:integration` → **186 PASS**
- `npm run build` → PASS
- `npx playwright test` → **13 PASS**

## 14. Requalification SECURITY CORRECTIVE (2026-11-08)

GO Morris CRITICAL. Handoff entrée `6509b4bc…` NOT READY FOR REAL USER FLOW.
Plafond : **DETERMINISTIC SCOPE ONLY**.

| Écart revue | Statut | Preuve |
|---|---|---|
| SCRIPTED exploitable comme REAL | RESOLVED (DET) | garde centrale ; REAL sans credentials → NOT_CONFIGURED ; foreign installation_id → ACCESS_DENIED |
| permissions write hardcodées | RESOLVED (DET) | snapshot `scripted_fixture` vs `unknown`/`observed` ; pas d'élévation refresh |
| returnPath / callback | RESOLVED (DET) | allowlist + erreurs opaques |
| state ≠ session Studio | RESOLVED (DET) | `studio_session_id` + consume atomique ; autre session → ACCESS_DENIED |
| tokens expiry/refresh | RESOLVED (DET code) | refresh + fencing ; REQUIRES_REAUTH ; interactive REAL NOT PROVEN |
| persist D9 non atomique | RESOLVED (DET) | txn revoke+insert+seed |
| persistOwnedProgress sans lease | RESOLVED (DET) | SQL `sqlClaimLeaseActive` ; test lease expiré → CONFLICT |
| Option A / 009 / 010 | PRESERVED | 011 additive only |

Commandes (web/, ~21:12–21:15 CET) :
- tsc PASS ; unit **167** ; integration **190** ; build PASS ; Playwright **13/13**

## 15. Requalification CONCURRENCY C1/C2 (2026-11-08)

GO Morris CRITICAL. Handoff entrée `b6c87a8c…`.
Plafond : **DETERMINISTIC SCOPE ONLY**.

| Item | Statut | Preuve |
|---|---|---|
| C1 refresh concurrent | RESOLVED (DET) | lease + génération ; loser `markRequiresReauth(old)` → false ; CONNECTED conservé |
| C1 génération CAS | RESOLVED (DET) | test `markRequiresReauth only when generation matches` |
| C2 one CONNECTED | RESOLVED (DET) | concurrent complete → COUNT=1 ; UNIQUE insert rejected |
| Préflight doublons | PASS | 0 sur DEV + e2e avant 012 |
| Option A / 009–011 | PRESERVED | 012 additive only |

Commandes (web/, ~21:42–21:45 CET) :
- tsc PASS ; unit **167** ; integration **193** ; build PASS ; Playwright **13/13**

## 16. Requalification FINAL SAFETY R1/R2 (2026-11-08)

GO Morris CRITICAL. Handoff entrée `2a9eb05a…`.
Plafond : **DETERMINISTIC SCOPE ONLY**. Aucune migration.

| Item | Statut | Preuve |
|---|---|---|
| R1 lease+gen fencing | RESOLVED (DET) | `markRequiresReauth(..., expectedLeaseToken)` ; T02/T03/T06 |
| R1 ambiguous expiry | RESOLVED (DET) | reclaim expiré → REQUIRES_REAUTH sans GitHub ; T08 |
| R1 DEPENDENCY_UNAVAILABLE | RESOLVED (DET) | clear lease only ; CONNECTED conservé ; T04 |
| R1 stale positive CAS | RESOLVED (DET) | T05 ; disconnect T07 |
| R2 callback CONFLICT | RESOLVED (DET) | unique catch → CONFLICT only ; T09–T11 |
| R2 replay / isolation / UNIQUE | RESOLVED (DET) | T12–T14 |
| Option A / 009–012 | PRESERVED | schéma inchangé |

Commandes (web/, ~21:57–21:59 CET) :
- tsc PASS ; unit **167** ; integration **205** ; build PASS ; Playwright **13/13**

## 17. Requalification REFRESH LIFECYCLE R1-A/R1-B (2026-11-08)

GO Morris CRITICAL. Handoff entrée `59d07663…`.
Plafond : **DETERMINISTIC SCOPE ONLY**. Aucune migration. R2 non rouvert.

| Item | Statut | Preuve |
|---|---|---|
| R1-A lease retained on ambiguous | RESOLVED (DET) | T04/TA/TE — lease non NULL après DEPENDENCY_UNAVAILABLE |
| R1-A no second remote on G1 | RESOLVED (DET) | TA — githubCalls=1 jusqu'à reclaim fail-closed |
| R1-B CAS requires expires_at > now() | RESOLVED (DET) | TB/TC — late positive/deny → 0 row / no reauth |
| R1-B no expired G1 hand-back | RESOLVED (DET) | TB CONFLICT, pas access-gen-1 |
| TD concurrent B preserved | RESOLVED (DET) | late A ne mute pas L2/G2 |
| TF R2 regression | RESOLVED (DET) | loser CONFLICT |
| Option A / 009–012 | PRESERVED | schéma inchangé |

Commandes (web/, ~22:34–22:36 CET) :
- tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13**

## 18. Snapshot historique — PREFLIGHT OAuth READ (2026-11-08)

> **HISTORIQUE.** Preflight avant secret/callback. Le statut courant OAuth READ est §19 PROVEN.
> Ne pas lire le verdict « REAL NOT PROVEN » ci-dessous comme l'état actuel.

GO Morris CRITICAL. Handoff entrée `41373d2e…`.
Plafond à cette date : REAL interactive READ — **pas** de publication.

| Item | Statut | Preuve |
|---|---|---|
| App ID / install / sandbox | CONFORME (meta) | JWT `/app` → App 5670639 `sfia-studio-next-dev` |
| Client ID local | PRÉPARÉ | `.env.local` gitignoré (valeur non secrète) |
| Callback URL local | PRÉPARÉ | `http://127.0.0.1:3100/api/integrations/github/callback` |
| Client Secret | **ABSENT** | bloque échange code→token |
| Callback GitHub App settings | **NON VÉRIFIÉ** | action admin Morris requise |
| Consentement navigateur | **NON EXÉCUTÉ** | dépend secret + callback |
| CONNECTED REAL | **NOT PROVEN** | — |
| Non-régression DET | PASS | 167 / 211 / 13 |

Verdict cycle : **CONFIGURATION REQUIRED — REAL NOT PROVEN**.

## 19. Qualification REAL user OAuth READ — PROVEN (2026-11-08)

GO Morris CRITICAL. Handoff entrée `d8117ee6…`.
Plafond : REAL interactive READ — **pas** de publication / mutation GitHub / push Product.

| Item | Statut | Preuve |
|---|---|---|
| Callback URL App settings | VÉRIFIÉ (Morris) | `http://127.0.0.1:3100/api/integrations/github/callback` |
| Client ID / Secret / AES | CONFIGURÉS | `.env.local` gitignoré ; `STUDIO_GITHUB_USER_OAUTH=real` |
| Consentement navigateur | PROVEN | CONNECTED `iauth_37cc71f1…` / `mcleland147` |
| UI CONNECTED host-aligned | PROVEN | `127.0.0.1:3100/settings/integrations` + reload |
| User-token READ | PROVEN | user/installations/repo/HEAD `8c398c49…` HTTP 200 |
| Status JSON sans secret | PROVEN | `secretLeakInStatusJson=false` |
| Badge SCRIPTED | ORTHOGONAL | `providerMode` Git ≠ flow D9 OAuth (`flow=github_app_user_oauth`) |
| Non-régression DET | PASS | tsc / 167 / 211 / build / Playwright 13/13 |

Verdict cycle : **REAL INTERACTIVE READ PROVEN**.

## 20. Publication documentaire REAL E2E bornée (2026-11-09)

GO Morris CRITICAL. Handoff entrée `ffffec1f…`.
Plafond : branche + 1 fichier docs + 1 PR OPEN — **pas** de merge / écriture main.

| Item | Statut | Preuve |
|---|---|---|
| Provider REAL + mutations documentary | PROVEN | `STUDIO_GITHUB_PROVIDER=real` + `ALLOW_MUTATIONS=documentary` |
| User-token write (pas installation fallback) | PROVEN | `RealGitHubReadProvider.userAccessToken` |
| Permissions observées (push→write) | PROVEN | refresh → contents `admin` |
| D4 = contenu Git | PROVEN (boolean) / RECONSTRUCTED (digest) | boolean seul non reconstitutable ; SHA-256 D4=Git `11906026…` reconstruit cycle consolidation |
| Commit REAL | PROVEN | `790a531579acd1a56243e84bf44a305a22e512d2` |
| PR OPEN | PROVEN | #18 `https://github.com/mcleland147/chantiers360/pull/18` |
| main inchangée | PROVEN | `8c398c49…` |
| Idempotent redispatch | PROVEN | COMPLETED + idempotent |
| Merge | NON EXÉCUTÉ / HARD-BLOCKED | conforme GO |
| Non-régression DET | PASS | 171 / 211 / 13 |
| USER E2E navigateur | NOT RUN | réservé Morris RECETTE |

Verdict cycle : **BOUNDED REAL E2E PROVEN** (API/Studio ; geste UI humain = RECETTE).

## 21. Consolidation sécurité / preuves (2026-11-09)

GO Morris CRITICAL consolidation — **aucune** nouvelle mutation GitHub REAL.

| Item | Statut | Note |
|---|---|---|
| Gate `ALLOW_MUTATIONS` | CORRIGÉ | seul `documentary` ; aliases `1`/`bounded` refusés |
| Branche publication | CORRIGÉ | `sha256(correlationKey)[:16]` — plus de collision `slice(0,12)` |
| Marker PR | CORRIGÉ | match ligne exacte (pas substring) |
| Mandat D6 sur décision | CORRIGÉ | `human_decisions.effect_conditions` + lien `sourceRef` **et** `objectRef` |
| Reconcile commitSha | CORRIGÉ | tip de branche, pas blob Contents |
| ACCESS_DENIED post-claim | CORRIGÉ | → `FAILED` (plus de wedge `DISPATCHED`) |
| Permissions REAL source | CORRIGÉ | exige `user_token_observed` |
| Digest D4↔Git | PROVEN | SHA-256 `11906026…` ; blob `da920aca…` ; égalité UTF-8 |
| HumanDecision geste UI | NOT RUN | contrat + décision persistée + contrôle effet ; geste observé = RECETTE |
| USER E2E RECETTE | NOT RUN / MORRIS | arbitrage accepté |

Verdict cycle : **TECHNICAL CONSOLIDATION REVIEW READY — USER E2E RESERVED FOR MORRIS RECETTE**.

## 22. Intégrité publication D7/D8 + provenance fournisseur (2026-11-09)

GO Morris CRITICAL correctif — **aucune** mutation GitHub REAL ; push Product **NON AUTORISÉ**.

| Item | Statut | Note |
|---|---|---|
| Séquence canonique | ENFORCED | seul `CREATE_BRANCH→PUBLISH_FILE→OPEN_PR` ; `steps=[]/null/mal typé` refusés avant D7 |
| COMPLETED sans PUBLISH_FILE | ÉLIMINÉ (scénarios couverts) | preuve fichier + commitSha ≠ baseSha + PR distante |
| Reconcile plan invalide | FAIL-CLOSED | aucune `publicationRef` D8 |
| Provenance REAL/SCRIPTED | FIGÉE au prepare | `plan.effectProviderMode` ; historique absent → UNKNOWN |
| Divergence mode live | REQUIRES_REQUALIFICATION | plan ≠ env |
| REAL mono-repo | RÉSERVE | sandbox `mcleland147/chantiers360` ; allowlists App inchangées ; multi-repo REAL NOT PROVEN |
| T01–T20 | DET SCRIPTED | service + DB ; merge REAL hard-blocked |
| USER E2E / RECETTE | NOT RUN | Morris |

Verdict cycle : **ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED**.

## 23. ML4-REC-01 — Reconciliation provider provenance (2026-11-09)

Identifiant distinct — **ne pas** réutiliser R1–R5 historiques.

| Item | Statut | Note |
|---|---|---|
| Défaut | CORRIGÉ (local) | `reconcileAttempt` résolvait le provider live avant contrôle du mode de la tentative |
| Gate | ENFORCED | `qualifyPlanEffectProviderMode` + `resolveConfiguredEffectProviderMode` **avant** toute observation |
| Modes divergents | REQUIRES_REQUALIFICATION | aucune D8 / aucun COMPLETED nouveau / 0 mutation |
| UNKNOWN historique | FAIL-CLOSED | pas de REAL inventé ; pas de complétion depuis provider live |
| COMPLETED historique | PRÉSERVÉ | D8 non réécrit depuis provider incompatible |
| Claim actif | READ-ONLY | ownership DISPATCHED préservé |
| Tests | REC-01…REC-10 DET | service + DB SCRIPTED |
| R1–R8 | INCHANGÉS | traçabilité historique conservée (voir spec § risques) |

Verdict cycle : **ML4 PUBLICATION RECONCILIATION — PROVIDER PROVENANCE GUARDED — LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED**.

## 24. GitHub App identity bornée par lane (2026-11-09)

GO Morris CRITICAL ENVIRONMENT DELIVERY — adaptation App DEV/RECETTE ; **aucune** mutation GitHub REAL ; push Product **NON AUTORISÉ** dans ce cycle.

| Item | Statut | Note |
|---|---|---|
| `STUDIO_LANE=DEV` | App `5670639` / install `179935689` / callback `:3100` | profil figé ; tests existants préservés |
| `STUDIO_LANE=RECETTE` | App `5677465` / install `180092114` / callback `:3200` | App `sfia-studio-next-recette` |
| Cross-lane App ID | REFUSÉ | fail-closed ; pas de fallback silencieux DEV↔RECETTE |
| Allowlist repo | INCHANGÉE | mono-repo `mcleland147/chantiers360` |
| Merge REAL | HARD-BLOCKED | invariant D6/D7/D8 inchangé |
| USER E2E / RECETTE navigateur | NOT RUN | Morris après bascule 3200 |

Verdict cycle : **ML4 RECETTE ENVIRONMENT — LANE-SCOPED GITHUB APP IDENTITY — LOCALLY COMMITTED CANDIDATE (voir delivery-history)**.

## 25. ML4-REC-08 / REC-07 — Chat-first D4 + provenance Git (2026-11-09)

Macro-correctif local sur candidat `974b0030` → branche `fix/next-ml4-chat-first-d4-provenance-20261109`. **Aucun** push Product / PR / redeploy RECETTE dans ce cycle.

| Item | Statut | Note |
|---|---|---|
| ML4-REC-08 CREATE | CORRIGÉ (DET) | Intention explicite → `savePreparationDocument` ; ACK applicatif appendé au message assistant (source de vérité ≠ narration Nora) |
| ML4-REC-08 REVISE | CORRIGÉ (DET) | Intention révision → `reviseDocument` existant ; même `documentId` ; merge sectionnel borné ; corrélation `docrev:…` |
| Restitution | CORRIGÉ (DET) | Bloc « Résultat applicatif D4 » après effet confirmé ; pas d'affirmation d'ID/version non observés |
| ML4-REC-07 provenance | CORRIGÉ (DET) | `blobSha` ≠ `commitSha` ; `permalink` uniquement si `commitShaVerified` ; lecture pinnée au commit résolu |
| `listGitRefs` | CORRIGÉ (DET) | Refs fournisseur bornées (pas seulement `main`) ; aucune ref inventée |
| ML4-REC-03 | OPEN / HORS | Pas de cause commune démontrée avec capitalisation points ouverts — non modifié |
| REC-04/05/06 | NON-RÉGRESSION | Aucune réécriture OAuth / politique cognitive / preuve LIVE inventée |
| Tests | DET unit + PG | `document-act`, `git-file-provenance`, `ml4-chat-first-d4-provenance.pg` |
| USER / RECETTE | NOT RUN | Nouveau build + GO Morris requis |

Verdict cycle : **ML4 CHAT-FIRST D4 + GIT PROVENANCE — LOCALLY IMPLEMENTED WITH VERIFIED DEV COVERAGE — READY FOR REVIEW — PRODUCT PUSH / RECETTE REDEPLOY NOT AUTHORIZED**.

## 26. Passe corrective — qualification sûre + intégrité section + ACK (2026-11-09)

Suite revue ChatGPT du macro-lot §25. Même branche `fix/next-ml4-chat-first-d4-provenance-20261109`. Push Product **NON AUTORISÉ**.

| Item | Statut | Note |
|---|---|---|
| Négation / question informative | CORRIGÉ (DET) | `qualifyDocumentAct` → NONE ; pas de mutation DB |
| Restriction locale « autres sections » | CONSERVÉ | REVISE positif autorisé |
| Intégrité Markdown hors cible | CORRIGÉ (DET) | splice exact (`locateSections`) ; plus de `renderSections` normalisant |
| Cohérence Nora / ACK | CORRIGÉ (DET) | `reconcileNarrationWithDocumentEffect` avant append ACK |
| Provenance Git REC-07 | INCHANGÉ | non-régression DET |
| USER / RECETTE | NOT RUN | gate Morris |

Verdict : **ML4 CHAT-FIRST CORRECTIVE PASS — LOCALLY VERIFIED — READY FOR REVIEW**.

## 27. Finalisation R06 — titre cité + restitution (2026-11-09)

| Item | Statut | Note |
|---|---|---|
| Titre entre guillemets | CORRIGÉ (DET) | `extractDocumentDesignation` séparé de `stripNonAuthoritativeSpans` |
| Fallback titre manquant | FAIL-CLOSED | hint explicite → NOT_FOUND, pas de bascule silencieuse |
| Restitution Nora/ACK | CORRIGÉ (DET) | `composeDocumentTurnMessage` — verdict applicatif unique |
| Oracle R06 intégré | DET PG PASS | `postUserMessageAndNora` + persistance v1/v2 ; LIVE Nora NOT RUN |
| Provenance REC-07 | INCHANGÉ | non-régression |

Verdict : **ML4 CHAT-FIRST R06 INTEGRATED CORRECTIVE — LOCALLY VERIFIED — READY FOR REVIEW**.
