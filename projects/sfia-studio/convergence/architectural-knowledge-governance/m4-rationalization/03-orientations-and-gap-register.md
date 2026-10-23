# AKG-M4 — 03 · Registre des orientations et écarts

| Champ | Valeur |
| --- | --- |
| Version | **V0.5 — 2026-10-23** · M4-A Formal Exit adopted / post-merge truth-sync ; V0.1–V0.4 = snapshots historiques |
| Périmètre GO | **M4A-FE-01–05 ADOPTED** (clôture bornée + reports + gouvernance + GO truth-sync documentaire) ; **NO GO Delivery, AKG-M5 ou merge du nouveau dossier** |
| Autorité | Orientations V0.1 **+** arbitrages Pilote **H7/H8** (2026-10-22) — détail [Decision Record `11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md) · ce fichier = registre consolidé, **pas** une seconde source de vérité H7/H8 |
| Statut jalon | **M4-A CLOSED BY MORRIS AT BOUNDED RATIONALIZATION ASSESSMENT SCOPE WITH GOVERNED OPEN RESERVES** ; H7/H8 inchangés ; PR #604 MERGED/CI SUCCESS ; **M4 global et AKG-M5 non autorisés par implication** ; runtime v3 NON ADOPTED |
| Base de preuve | `main` au merge #604 `d739143f9a0e29fdb8475fc1f73d0b9897da5bf6` · CI `39887430929` SUCCESS · `12` readiness et [13 — FE](./13-m4a-formal-exit-decision-record.md) · docs `05`–`11` intégrés |

## 1. Statuts

- **CONFIRMÉE EN DISCUSSION** : orientation explicitement acceptée le 2026-10-22 ; pas d'implémentation ni adoption de lot.
- **VISION PARTAGÉE** : fonctionnement cible formulé et discuté, à préciser en architecture.
- **CANDIDATE** : hypothèse/étude et classification préliminaire (dispositions A01–A12, écarts G-*).
- **CODE VERIFIED / DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP** : qualificatifs factuels par élément, sans sur-claim.
- **M4 DECIDED — H7/H8 ONLY** *(historique V0.2–V0.4 pour la disposition architecturale)* : H7/H8 restent les seules **orientations techniques** adoptées ; M4A-FE-01–05, adoptées ensuite, portent sur la clôture bornée et la gouvernance, **sans** adopter les dispositions A01–A12.
- **M4 START AUTHORIZED** : démarrage de l'analyse (consommé ; **ne plus lire** comme « GO formel encore attendu » pour commencer M4-A).
- **ORIENTATION ARCHITECTURALE RETENUE (H7)** *(V0.3)* : SC-G2 retenu comme orientation de référence — **≠** runtime SC-G2 implémenté ou adopté.
- **LOCAL CANDIDATE / preferred candidate** dans `05`–`12` : statuts historiques exacts à la date de rédaction ; `05`–`11` intégrés dans `main` via #604, `12` pack avant décision, `13` décision FE ultérieure. Préserver les audits immuables.

## 2. Orientations

| ID | Orientation | Statut | Conséquence |
| --- | --- | --- | --- |
| **OR-01** | `/studio` = unique expérience nominale Studio 3.0 | **CONFIRMÉE EN DISCUSSION** | `/` et anciennes routes candidates à convergence/retrait |
| **OR-02** | Product Runtime/OA = unique socle de vérité métier | **CONFIRMÉE EN DISCUSSION** | Stop aux Product Truth C concurrents ; analyse D1/OPS1 |
| **OR-03** | Éliminer les composants historiques **réellement** inutiles | **CONFIRMÉE (principe)** | Audit avant retrait, conserver seulement les capacités utiles |
| **OR-04** | Nommage pérenne selon fonction, indépendamment des jalons | **CONFIRMÉE EN DISCUSSION** | Définir conventions tôt, refactorer au bon lot |
| **OR-05** | Nora planifie, coordonne, mobilise transversalement outils/capacités | **VISION PARTAGÉE** | Dialogue continu, lectures incluses dans mandat |
| **OR-06** | Contrat amendable par dialogue ; **un Exécuter** autorise le mandat | **VISION PARTAGÉE** | Pas de CTA humain redondant ; versions et autorité effectives |
| **OR-07** | Autonomie d'exécution limitée à IN/OUT/STOP du contrat | **VISION PARTAGÉE** | Lots sans micro-GO ; STOP hors mandat |
| **OR-08** | Rapport et preuves suivis d'analyse/synthèse Nora, avant nouvelle mission | **VISION PARTAGÉE** | Résultats SUCCESS/PARTIAL/STOP/FAIL honnêtes |
| **OR-09** | Gouvernance proportionnée, principalement interne | **VISION PARTAGÉE** | Conserver sécurité/idempotence sans bureaucratie UX |
| **OR-10** | Préparer les noms en rationalisation ; renommer seulement au lot utile | **CONFIRMÉE EN DISCUSSION** | Éviter rename avant suppression |
| **OR-11** | Deux architectures distinctes AS-IS/TO-BE, enrichies en continu | **CONFIRMÉE EN DISCUSSION** | AS-IS dérivé PRR, TO-BE proposition |
| **OR-12** | Dossier AKG transverse lié à méthode et sources M0–M3 | **GO DOC V0.1 — INTEGRATED VIA PR #603** | Index + routage méthodologique |
| **OR-13** | **Primauté de la capacité fonctionnelle sur l'implémentation historique** : une dépendance active ne justifie jamais seule KEEP ; étudier extraction, consolidation, remplacement ou **reconstruction saine d'un mécanisme global**, sans refonte gratuite | **ORIENTATION CONFIRMÉE EN DISCUSSION 2026-10-22** | Comparer scénarios de cible/transition, conserver les garanties, ne pas figer la cible par les dépendances AS-IS |

### 2 bis. Arbitrages Pilote H7 / H8 (2026-10-22) — **M4 DECIDED — H7/H8 ONLY**

| ID | Décision | Statut | Portée / restriction |
| --- | --- | --- | --- |
| **H7** | SC-G2 = orientation architecturale de référence pour AKG-M4-A, **avec option SC-G3 ciblée A06/A10** | **ADOPTED — ARCHITECTURAL ORIENTATION ONLY** | ≠ runtime implémenté · ≠ adoption v3 · G0-A/B préservés · no dual-write |
| **H8** | Au lot L4, **instruire** SC-G3 A06/A10 **si** ADAPT ne clarifie pas suffisamment l'ownership | **ADOPTED — CONDITIONAL INVESTIGATION DIRECTIVE** | ≠ GO REBUILD auto · ≠ remplacement OA · ≠ code/tests · harvest non prérequis d'échec |

**Texte source Pilote (verbatim) :** *« Pour AKG-M4-A, je retiens comme orientation architecturale SC-G2 avec une option SC-G3 ciblée A06/A10. Pour H8 : instruire SC-G3 au lot L4 si ADAPT ne clarifie pas les responsabilités. Enregistre cela comme mon arbitrage H7/H8 uniquement, sans GO Delivery, sans adoption du runtime v3 et sans clôture automatique M4-A. »*

**Décision Record (référence détaillée unique) :** [11-m4a-h7-h8-architecture-orientation-decision-record.md](./11-m4a-h7-h8-architecture-orientation-decision-record.md).

**H0–H6 inchangés :** H0 GO Delivery **NOT GRANTED** · H1 MethodMode **OPEN** · H2 Tool-First **OPEN / fail-closed** · H3 Durable carrier **OPEN** · H4 Inventaire volumes **REQUIRED / UNKNOWN** · H5 pathPolicy **PARTIAL** · H6 Réouverture G0 **NOT AUTHORIZED**.

**Lecture V0.3 :** SC-G2 est **retenu comme orientation architecturale** ; SC-G3 ciblé A06/A10 reste une **option d'étude conditionnelle L4**, pas un GO REBUILD.

## 3. Écarts techniques — dispositions encore candidates

> **Titre historique V0.1 :** « Écarts candidats à qualifier avant toute décision M4 ».
> **Lecture V0.3 :** H7/H8 sont **décidés** (orientation / directive L4). Les **dispositions techniques** ci-dessous (KEEP/ADAPT/HARVEST/…) restent **candidates** jusqu'à gates et GO Delivery. Ne pas lire ce tableau comme « aucune décision M4 ».

| ID | AS-IS / source | TO-BE | Disposition **candidate** | Preuves / risques à examiner |
| --- | --- | --- | --- | --- |
| **G-UX-01** | `/` → `/synthese` POC ([code](../../../app/app/page.tsx)) | `/studio` nominal | **ADAPT / RETIRE LATER** | Routes, liens, tests, usages et migrations |
| **G-UX-02** | P0 / OPS1 / D1 présents ([PRR 06](../../../production-runtime-reference/06-persistence-restart-and-recovery.md)) | Une UX principale | **CONSOLIDATE / RETIRE LATER** | Imports, API, données et clients |
| **G-DOM-01** | OA vs stores historiques ([PRR 01](../../../production-runtime-reference/01-system-runtime-overview.md)) | Moteur métier unique | **KEEP OA / AUDIT autres** | Ownership, consommateurs, single Truth C |
| **G-FLOW-01** | Chemins F2, génériques, SHE, legacy ([PRR 03](../../../production-runtime-reference/03-end-to-end-flow-catalog.md)) | Contrat par mission + un GO | **ADAPT / CONSOLIDATE** | Préserver preuve M3, gates, idempotence |
| **G-REPORT-01** | Evidence/RB et rapport après exécution partiellement prouvés | Synthèse Nora systématique et honnête | **KEEP / COMPLETE** | STOP/partial/crash/sans rapport/REAL |
| **G-REC-01** | Proposals/offres process-local ([PRR 06](../../../production-runtime-reference/06-persistence-restart-and-recovery.md)) | Recovery sans invention | **ADAPT** | Multi-instance, restart, migrations |
| **G-ARCH-01** | Dépendances historiques encore consommées, y compris depuis composants modernes ([PRR 04](../../../production-runtime-reference/04-dependency-impact-map.md)) | Cible fondée sur les capacités et responsabilités, pas sur les imports actuels | **HARVEST / CONSOLIDATE / REPLACE / REBUILD candidats** | Graphe consommateurs, dépendances transitives, sémantique/side-effects, migration/rollback, invariants, tests |
| **G-NAME-01** | `ops1`, `d1`, `pre-m6`, `f2`/`w2`, `oa` et `vertical-slice` | Responsabilités nommées clairement | **ADAPT ultérieur** | Audit imports/tests/compatibilité ; ne pas renommer ce qui sera retiré |

**Important :** classement ≠ suppression recommandée ≠ décision du Pilote ≠ GO Delivery. **RS-03, B-M2B-01…05, R-M2A-04, R-M2B-03, no-write REAL, F18/F19 et autres réserves M1–M3 restent dans leur état PRR/Roadmap**, sans fermeture par la V0.1 historique **ni** par H7/H8 **ni** par cette consolidation V0.3.

## 4. Fiche de qualification par actif

> **Titre historique V0.1 :** « Fiche de qualification par actif (pour M4 après GO formel) ».
> **Lecture V0.3 :** le **GO de démarrage M4 / M4-A est déjà consommé**. Cette fiche décrit le **canevas de qualification technique** toujours requis avant dispositions d'exécution ; elle **n'attend plus** un GO de démarrage. L'annexe **§7 (RES-01)** fournit la traçabilité consolidée A01–A12.

Pour chaque ligne de rationalisation, renseigner :

**Identifiant ; rôle actuel ; propriétaire ; consommateurs ; source code/PRR ; comportement démontré ; état cible ; redondance ; risques ; classification KEEP/ADAPT/COMPLETE/HARVEST/CONSOLIDATE/REPLACE/FREEZE/RETIRE LATER ; preuve de non-régression ; stratégie de sortie ; nom cible éventuel ; arbitrage formel ; GO d'exécution ; impact PRR R24.**

**Décision méthodologique de M4 :** la classification doit obligatoirement examiner si **reconstruire** une responsabilité plutôt que garder son service historique produit une architecture globalement meilleure. Une dépendance réelle est un impératif de **continuité/migration**, pas une contrainte de conservation. La décision de réécriture demeure non consommée (sauf directive d'**étude** H8 en L4).

La [Build Doctrine — section A8](../../sfia-studio-convergence-build-doctrine.md) interdit d'assimiler une classification à une autorisation de retrait.

## 4 bis. Démarrage M4-A et trace des travaux (snapshot V0.4 avant merge et Formal Exit)

**GO M4-A :** lancement de l'analyse « responsabilités et dépendances runtime » après mise à jour de l'orientation OR-13. **[Cartographie initiale M4-A](04-m4a-runtime-responsibilities-and-transition-assessment.md)**.

**Couverture investigations (V0.4) :** six audits **T-A01–T-A06 terminés et acceptés avec réserves** + Decision Record **H7/H8 accepté avec réserves** ; documents `05`–`11` consolidés localement en V0.3 puis **publiés sur la branche de PR #604** au commit `c64f8046…` (copies intègres, hashes §6), **non intégrés à `main`**. Historique V0.1 : « T-A01–T-A06 OPEN » — mis à jour en V0.2 ; V0.3 = consolidation locale ; V0.4 = statut de publication. L'analyse transitive/non-régression et les preuves REAL restent **non closes**. Les options `REPLACE / REBUILD` restent **candidates gouvernées** (H8 = étude conditionnelle L4, **pas** adoption REBUILD). Les dispositions **ne valent pas** GO d'exécution.

**M4-A NON CLOSED.** Pas de Formal Exit dans ce cycle. Pas de GO Delivery / M5. Le GO d'intégration Git documentaire a été **consommé sur la branche de PR #604** ; **merge dans `main` non autorisé** et soumis à un GO distinct.

## 5. Règles d'évolution

- Enrichir **AS-IS** à partir de Git courant et PRR applicable (pas de deuxième truth documentaire).
- Amender **TO-BE** uniquement comme proposition tant qu'un arbitrage formel n'est pas consommé ; **H7/H8** orientent la trajectoire sans valoir adoption runtime.
- Tracer le **pourquoi** de chaque choix et ses conséquences dans ce registre.
- Qualifier les écarts avec la doctrine produit v3, sans l'écraser.
- Synchroniser la PRR lorsque le comportement réel évolue selon R23/R24.
- Préserver des gates distincts pour GO M4 formel, lots de rationalisation, déploiement et M5.
- Préserver les réserves OPEN (REAL, volumes, MethodMode, pathPolicy, A09/A11, etc.) indépendamment de H7/H8 — détail dans le [Decision Record `11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md) et §9 ci-dessous.
- Ne **pas** réécrire silencieusement les documents `05`–`11` acceptés ; clarifier l'interprétation courante dans ce registre.

## 6. Index consolidé des documents `05`–`11`

| ID | Titre | Objet | Statut revue | Hash document vérifié | Handoff immuable | Réserves principales |
| --- | --- | --- | --- | --- | --- | --- |
| [`05`](./05-m4a-dependency-consumers-audit.md) | Dependency & consumers audit | Graphe A01–A12 | Accepted with reserves (T-A01) | `fee29007060e690938f7149bceae7e0adacd4277` | `42de13a95c9ca4b103c9192147a4511f4f1df1dd` | Exhaustivité consumers bornée ; bookmarks U |
| [`06`](./06-m4a-historical-capabilities-inventory.md) | Historical capabilities inventory | 29 CAP D1/OPS1/P0/… | Accepted with reserves (T-A02) | `072ef71f57a3f765c5929781b1b78e246ce0a0dc` | `510210231ee3ee82647a2e53b21643e536a677e1` | Couverture Product PARTIAL |
| [`07`](./07-m4a-authority-sequences-stop-fail-restart.md) | Authority sequences STOP/FAIL/restart | S01–S07 | Accepted with reserves (T-A03) | `3841b769ab3e312397b06e442842c067cbabf289` | `640f19c1ab9d0952ae877bc5328f6705f77a9474` | RunState DEFER ; REAL NOT PROVEN |
| [`08`](./08-m4a-storage-persistence-and-migration-assessment.md) | Storage & migration | ST-01–06 · MIG-A–D | Accepted with reserves (T-A04) | `351de11d1255fa4dd60adfda5e0c24a83895145e` | `6717d0948c2aace3b058a93dcb305e13f60ad801` | Volumes UNKNOWN ; no dual-write |
| [`09`](./09-m4a-rationalization-options-and-impact-pack.md) | Impact pack & options | SC-G1/G2/G3 · L1–L6 | Accepted with reserves (T-A05) | `ac79a9079c6416c2012fdbb189bd2a4520ce1fb3` | `1e1930d0e7079403ac9a34b5f3b99f9dd1ddb3cd` | SC-G2 preferred *candidate* (historique) ; A09/A11 gates |
| [`10`](./10-m4a-critical-architecture-alignment-review.md) | Critical alignment review | CR-01–08 | Accepted with reserves (T-A06) | `922131cd95b05aea1fe33806c1795151770e0ab9` | `91d387e0226d4272c2e66c281cea582afd308094` | RES-01/02 ; READY WITH RESERVES |
| [`11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md) | H7/H8 Decision Record | Orientation formalisée | Accepted with reserves (H7/H8) | `576ea0b056237e42102b93976bc543bbd75938d5` | `9a415e553a71b286402ff11c2241499e741e14ce` | H0–H6 OPEN ; réserves gouvernées |

**Provenance copie :** byte-identical depuis worktrees historiques après `git hash-object` = hash attendu (handoff identity tables). Worktrees d'origine **non modifiés**. Intégration Git **effectuée sur la branche de la PR #604** au commit `c64f8046…` ; blobs distants vérifiés 8/8 ; **aucun merge dans `main`**.

## 7. Annexe RES-01 — Traçabilité A01–A12 (preuves vérifiables)

> Objectif T-A06 RES-01 : la colonne Evidence doit contenir des **références**, pas seulement HIGH/MEDIUM/LOW.
> Classifications = **candidates**, sauf périmètre H7/H8 (orientation SC-G2 + étude conditionnelle A06/A10).
> **RES-01 statut :** traité documentairement ici — **à confirmer** après revue indépendante du dossier consolidé (non auto-clos).

| ID | Responsabilité actuelle | Capacité utile | Disposition candidate | Statut décisionnel | Audits | Code / symboles (réfs) | Tests / PRR | Confiance | Preuves manquantes | Réserves retrait/transformation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **A01** | Cockpit Product UI | Pilot↔Nora `/studio` | KEEP cap / ADAPT naming | CANDIDATE (sous H7 cockpit) | T-A01 §3 A01 ; T-A05 | `app/studio/**` ; `features/pre-m6-product-ui` ; `app/studio/page.tsx` | ~53 `__tests__/pre-m6-product-ui` ; PRR UX | H (DET) | Rename impact inventory | Ne pas RETIRE cockpit |
| **A02** | Entrée P0 POC | Accès historique | CONSOLIDATE→RETIRE LATER | CANDIDATE | T-A01 A02 ; CAP-P0 | `app/page.tsx` → `/synthese` ; `features/{synthese,cycle-actif,decision}` | fixtures slice-only ; e2e redirect TBD | M | Bookmarks/links **U** (R-P0-01) | Inventaire liens avant retire |
| **A03** | Intake D1 island | Create/list projects | HARVEST+REPLACE | CANDIDATE | T-A01 A03 ; T-A02 CAP-D1 ; T-A04 MIG-A | `lib/d1/**` ; `features/d1/**` ; routes `nouvelle-demande`/`workspace`/`projects` ; `lib/d1/db.ts` ; `paths.ts` | ~17 tests `lib/d1` ; e2e D1 | M | Volumes **U** (H4) ; MethodMode (H1) | No dual-write ; A09 avant retire |
| **A04** | OPS1 Cursor island | Tool/exec + guards | HARVEST+REBUILD+RETIRE LATER | CANDIDATE | T-A01 A04 ; CAP-OPS1 ; T-A03 S04 ; MIG-B | `lib/ops1/**` ; `cursorExecutionAdapter.ts` ; `features/ops1` ; flag `OPS1_CURSOR_REAL` ; `deterministicExternalLaunchBoundary.ts` L47–57 | e2e OPS1 | M–H | Exclusive Product REAL NOT PROVEN ; pathPolicy PARTIAL ; Tool-First OPEN | Gate≠HD ; ne pas retire-on-tests-gone |
| **A05** | OA Truth C | Autorité + vérité métier | KEEP/ADAPT | CANDIDATE KEEP (G0 hold) | G0 pack ; T-A01 A05 ; T-A03 ; ST01 | `lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review}` ; Product SQLite | suite OA ; PRR 07 | H | — (rebuild = H6) | SYN≠Truth C ; H6 NOT AUTHORIZED |
| **A06** | Project Assistant | Orchestration F2/W2/SHE | ADAPT/CONSOLIDATE ; SC-G3 façade si L4 ADAPT insuffisant | **GOVERNED by H8** (étude) · disposition tech CANDIDATE | T-A01 A06 ; T-A03 S01–S03 ; T-A05 CORR-02 ; T-A06 ; `11` | `features/project-assistant/**` ; `orchestrateTurn.ts` ; `actions.ts` ; API `assistant/send/route.ts` | ~160 `__tests__/project-assistant` | H | Ownership clarity post-ADAPT | H8 critères §5.2 de `11` ; ne pas delete HD |
| **A07** | Nora cognition | Raisonnement / tools | KEEP/ADAPT boundary | CANDIDATE | T-A01 A07 ; ST02 ; S06 | `lib/nora-cognitive-runtime/**` ; `sessionPaths.ts` ; MW5/MW6 paths | session tests | H | RunState cross-restart DEFER | Memory B≠Truth C |
| **A08** | VSR composition | Ports/adapters Product | KEEP/ADAPT | CANDIDATE | T-A01 A08 | `lib/vertical-slice-runtime/service.ts` ; `singleton.ts` ; `getRuntimeApplicationService` | composition tests | H | Après port A09 | Couplage type A09 |
| **A09** | Bounded audit bridge | Audit create projet | HARVEST/REPLACE port | CANDIDATE · gate L1 | T-A01 A09 ; T-A05 §13 | `lib/d1/boundedAtomicAudit.ts` ; `service.ts` L14/L106–110/L174–188/L758 ; `localSqliteAudit.ts` | platform/VSR audit tests | H | Inventory optional sqlite consumers | Type+optional path+consumers+tests ; noop≠activation |
| **A10** | Carriers continuity | Proposal/Offer PREPARE | ADAPT/REBUILD carrier | **GOVERNED by H8** · H3 OPEN | T-A01 A10 ; T-A03 ; MIG-C ; ST05 | `f2/proposalStore.ts` ; `w2/pendingGenericPrepareOfferStore.ts` (Maps/`globalThis`) | ~72 proposalStore tests | M | Restart durable proof ; H3 | Proposal≠HD ; pas 2e vérité |
| **A11** | execution-run FinOps | Shadow/FinOps SM | FREEZE / RETIRE LATER | CANDIDATE FREEZE | T-A01 A11 ; CAP-ER ; ST06 ; T-A05 §13 | `lib/oa/execution-run/**` ; `composeFinOpsT7ShadowExecutionDeps.ts` ; `scripts/finops-t7-shadow-rollout.ts` | ~29 tests ; FinOps OFF | H (SHADOW OFF) | All FinOps consumers before retire | SHADOW OFF ; pas promote spine |
| **A12** | Product REAL Attempt | Cursor under EC | KEEP/ADAPT ports | CANDIDATE | T-A01 A12 ; S03-R2 ; T-A05/T-A06 | `composeStudioProductRealBoundary.ts` ; `lib/oa/execution-attempt/**` ; R2 `boundedNonMutatingRealLaunchGate` | DET/REAL boundary tests | M–H DET | REAL E2E ; exclusivity ; Tool-First no-write | R2≠sandbox ; DET≠REAL |

## 8. Qualification RES-02 — pathPolicy Product Attempt PARTIAL

| Périmètre | Qualification | Signification |
| --- | --- | --- |
| **Architectural (orientation H7)** | **FOLLOW-UP HARDENING** | La lacune **n'empêche pas**, en elle-même, le choix de l'orientation SC-G2. |
| **Delivery L3** | **POTENTIAL BLOCKER DELIVERY L3** | Devient **blocker effectif** si l'enforcement requis pour le chemin Product REAL retenu n'est **pas démontré** avant le gate L3. |

**Précisions (non-claims) :**

- Ne **pas** qualifier la parité Product/OPS1 pathPolicy comme CONFIRMED sans preuve.
- Ne **pas** supposer que le partage d'un module `pathPolicy` implique son enforcement sur tous les chemins Attempt.
- **H5** reste **OPEN / PARTIAL**.
- Cette qualification documentaire **ne résout pas** le problème technique (aligné `11` RES-02 / R-PP-01).

**Sources :** T-A05 (L3 blockers ; H5) · T-A06 R-HARD-03 / RES-02 · Decision Record `11` §10.

**RES-02 statut :** **QUALIFIED (documentary)** · technique **OPEN**.

## 9. Gouvernance des réserves (cohérence `03` / `09`–`11` / T-A01–T-A04)

| ID | Description | État | Classe | Notes de cohérence |
| --- | --- | --- | --- | --- |
| R-REAL-01 | Product REAL E2E NOT PROVEN | OPEN | BLOCKER REAL PROOF | Inchangé par H7/H8 / consolidation |
| R-TF-01 | TOOL-FIRST-REAL-NOWRITE OPEN | OPEN | Gate R2 fail-closed | = H2 |
| R-EXCL-01 | Product REAL exclusivity NOT PROVEN | OPEN | Bloque retire OPS1 concerné | |
| R-VOL-01 | Volumes D1/OPS1 UNKNOWN | OPEN | BLOCKER DELIVERY MIGRATION | = H4 |
| R-MM-01 | MethodMode OPEN | OPEN | | = H1 |
| R-PA-01 | PA dual-path / ownership | GOVERNED (H8) | Structurant L4 | Pas fermé |
| R-CAR-01 | Carriers process-local | OPEN | | = H3 |
| R-CUT-01 | Cutover D1 writers/readers | OPEN | Protocole sans dual-write | T-A06 §9 |
| R-A09-01 | A09 retirement gate | OPEN | | Type+sqlite optionnel+consumers |
| R-A11-01 | A11 retirement gate | OPEN | | FinOps/shadow/scripts/tests ; SHADOW OFF |
| R-PP-01 | pathPolicy PARTIAL | OPEN | FOLLOW-UP + POTENTIAL BLOCKER L3 | RES-02 §8 |
| R-RS-01 | RunState cross-restart | DEFER | FOLLOW-UP | |
| R-FS-01 | Evidence FS/SQLite non atomique | OPEN | | |
| R-DOC-01 | PRR06 Synthesis DOC DRIFT | OPEN | DOC DRIFT | |
| R-P0-01 | P0 bookmarks/links UNKNOWN | OPEN | | |
| Hist. | R-M2A-04, R-M2B-03, B-M2B-01–05, RS-03, F18/F19, no-write REAL | OPEN / PRR state | | **Non fermées** par M4-A docs |

**Écarts documentaires traités :** différences de date/version (V0.1 « avant toute décision M4 », « après GO formel », « T-A01–T-A06 OPEN », « SC-G2 preferred candidate » dans `09`) = **historiques exacts** ; interprétation courante = H7 ADOPTED orientation + docs consolidés — **sans** modifier `05`–`11`. Aucun owner formel inventé.

## 10. Invariants transverses (contrôle DC-06)

| Domaine | Invariant | Statut |
| --- | --- | --- |
| Autorité | Pilote = autorité humaine ; SHE = un clic ; HD/Confirm/Authorize conservés ; PREPARE ≠ autorisation ; OPS1 Gate ≠ HD OA | AFFIRMED (doctrine + audits DET) |
| Résultats | Attempt ≠ Evidence ≠ PROVEN ; Attempt `succeeded` + NOT_PROVEN possible | AFFIRMED |
| Persistance | G0 Product SQLite ; Memory B ≠ Truth C ; `oa_syntheses` NON-AUTH ; no dual-write ; pas de fusion implicite îlots ; pas de compensation externe inventée | AFFIRMED |
| Sécurité | DET ≠ REAL ; R2 ≠ sandbox ; exclusive REAL NOT PROVEN ; SHADOW OFF ; pas de P6 GLOBAL PASS | AFFIRMED |
| Architecture | SC-G2 = orientation adoptée ; SC-G3 A06/A10 = étude conditionnelle L4 ; A01–A12 non adoptés en bloc ; no Delivery/M5 | AFFIRMED |

## 11. Non-claims (snapshot historique V0.4 avant merge et Formal Exit)

- M4-A **NON CLOSED** · Formal Exit **non** exécutée.
- SC-G2 runtime **NON ADOPTED** · SC-G3 REBUILD **NON AUTHORIZED**.
- L1–L6 / Delivery / M5 **NOT GRANTED**.
- REAL **NOT PROVEN** · FinOps SHADOW **OFF** · P6 GLOBAL **NOT PASSED**.
- Docs `05`–`11` = copies intègres **publiées sur la branche de PR #604** · **non mergées dans `main`**.
- R24 **NO PRODUCT SEMANTIC IMPACT**.

## 12. Trace post-intégration Git — traitement RES-03 (snapshot historique V0.4)

- **GO documentaire d'intégration consommé :** commit `c64f804613dda09e4757febcc2e26f530d6f3014` sur `docs/akg-m4a-capability-first-rationalization` (PR [#604](https://github.com/mcleland147/sfia-workspace/pull/604)).
- **Preuve :** huit blobs du commit conformes aux hashes de consolidation ; CI `39883454095` SUCCESS sur ce commit ; PR encore **Draft OPEN, non mergée** lors de cette synchronisation.
- **RES-03 :** décalage entre le statut local V0.3 et la publication ultérieure **corrigé documentairement en V0.4** ; les déclarations antérieures restent des traces historiques, pas l'état Git courant.
- **Non-claims :** ce correctif ne constitue ni GO merge, ni Formal Exit M4-A, ni GO Delivery/M5.

## 13. Statut CURRENT après merge #604 et arbitrage Formal Exit M4-A (2026-10-23)

**Décision de référence :** [13 — Formal Exit Decision Record M4A-FE-01–05](./13-m4a-formal-exit-decision-record.md). **Preuve préparatoire :** [12 — Formal Exit Readiness](./12-m4a-formal-exit-readiness-and-decision-pack.md). Les formulations `M4-A NON CLOSED`, `PR Draft/non mergée` et `LOCAL CANDIDATE` dans les snapshots précédents ne qualifient pas la décision FE courante.

- **Git CURRENT :** PR [#604](https://github.com/mcleland147/sfia-workspace/pull/604) MERGED, `main` au merge = `d739143f9a0e29fdb8475fc1f73d0b9897da5bf6` ; CI post-merge `39887430929` SUCCESS. Les documents `05`–`11` ont été intégrés à l'identique.
- **M4A-FE-01 ADOPTED :** M4-A **CLOSED BY MORRIS**, uniquement à la portée **Bounded Rationalization Assessment with Governed Open Reserves**. Ne clôture pas le jalon M4 dans son ensemble.
- **M4A-FE-02 ADOPTED :** H1–H5 et risques Delivery/REAL **REPORTÉS ET OPEN**, pas résolus ; H0 Delivery **NOT GRANTED**, H6 G0 reopen **NOT AUTHORIZED**.
- **M4A-FE-03 ADOPTED :** gouvernance temporaire = **Pilote** ; owners techniques formels **UNASSIGNED** ; ChatGPT = assistance uniquement.
- **M4A-FE-04 ADOPTED :** GO truth-sync documentaire README / `03` / Roadmap ; ce changement est un candidat Git et **n'est pas présumé mergé sans preuve**.
- **M4A-FE-05 ADOPTED :** Delivery L1–L6 / M5 **NON AUTORISÉS**, Product REAL **NOT PROVEN**, P6 GLOBAL **NOT PASSED**, runtime v3 **NON ADOPTED**, FinOps SHADOW **OFF**. H7/H8 et G0-A/B inchangés.
- **Réserves gouvernées :** maintenir §9, document `11` et document `13`. RES-01 (preuve documentaire à confirmer), RES-02 (pathPolicy L3), volumes L2, cutover, A09/A11, carriers L4 et dettes historiques restent OPEN/DEFER à leurs gates.

---

[Index AKG](../README.md) · [AS-IS](01-current-architecture-as-is.md) · [TO-BE](02-target-architecture-to-be.md) · [04 assessment](./04-m4a-runtime-responsibilities-and-transition-assessment.md) · [05](./05-m4a-dependency-consumers-audit.md) · [06](./06-m4a-historical-capabilities-inventory.md) · [07](./07-m4a-authority-sequences-stop-fail-restart.md) · [08](./08-m4a-storage-persistence-and-migration-assessment.md) · [09](./09-m4a-rationalization-options-and-impact-pack.md) · [10](./10-m4a-critical-architecture-alignment-review.md) · [H7/H8 Decision Record](./11-m4a-h7-h8-architecture-orientation-decision-record.md) · [Readiness 12](./12-m4a-formal-exit-readiness-and-decision-pack.md) · [Exit 13](./13-m4a-formal-exit-decision-record.md) · [Roadmap](../../sfia-studio-convergence-roadmap.md).
