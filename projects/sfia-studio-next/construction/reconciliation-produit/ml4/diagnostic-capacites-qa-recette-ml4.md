# ML4B — ML4 : capacités, 22 critères QA, preuves RECETTE et écarts

**Date :** 2026-11-11. **Nature :** analyse Git/documentaire D1, non normative, sans tests ni publication produit.
**Baseline code vérifiée :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` (ML4 intégré via PR #672) ; **branche documentaire :** `docs/next-reconciliation-produit-ml1-20261110`.
**Observations directes :** sources, commits et fichiers Git uniquement ; runtime/DB/navigateur/Figma, accès sandbox et provider REAL **NON OBSERVÉS** aujourd'hui.
**Statut :** `ML4 22/22 AT RECONCILED / D7-D8-D9 213 IDS INDEXED / REAL HISTORIC BOUNDED / G1 RETEST PARTIAL / USER R13-R14 NOT RUN / MERGE REAL HARD-BLOCKED / NO GLOBAL ML4 ACCEPTANCE / CP1 OPEN`.

[Index ML4B](../README.md) · [R2 D7/D8/D9 213 références](inventaire-r2-d7-d8-d9.md) · [Matrice ML4-AT propriétaire](../../ml4-integration-git/matrice-acceptation.md) · [Registre RECETTE R01–R14](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md).

## 1. Contrat livré et frontières R1 / R2

**Résultat Pilote attendu en ML4 :** travailler avec Nora **sans Git**, consentir volontairement à GitHub, découvrir et rattacher uniquement des dépôts autorisés, lire des sources à une ref **correctement attribuée**, enregistrer un document D4, préparer une publication inspectable **branch/file/BASE/diff**, obtenir une HumanDecision D6 **propre à la tentative**, engager une mutation documentaire Git D7/D9 si droits et états le permettent, puis restituer les faits D8 — commit, PR, merge, checks, conformité et acceptation **distincts**.

**IN ML4 :** GitHub App/user OAuth, accès D9 lecture, sources/provenance et refus, D7 publication documentaire **native** avec mandat/dispatch/reconcile, preuve Git D8 bornée, parcours utilisateur et UX ML4. **OUT :** exécution technique Cursor complète/STOP CLI/contrat d'exécution R1 E2E05 (**ML5**), mutation de code/CI/scripts, adoption, release, approbation globale, merge REAL actuellement hard-blocked. Les [41 RG + 36 PF D9](../../../conception-fonctionnelle/integration-git-gouvernee.md), [36 RG + 31 PF D7](../../../conception-fonctionnelle/realisation-operationnelle-gouvernee.md) et [36 RG + 33 PF D8](../../../conception-fonctionnelle/resultats-et-preuves.md) restent les sources propriétaires — **213 références** indexées dans [la matrice R2](inventaire-r2-d7-d8-d9.md).

**Statuts de la réalisation et des preuves :** API/code intégré sur `main`, nombreux tests PG/SCRIPTED/FAKE historiques, **OAuth READ REAL** et **une publication + PR OPEN REAL bornées sur sandbox** le 09/11, **campagne utilisateur R01–R14 non acceptée**, puis **rejeu ciblé G1** le 10/11. Ces preuves ont **des SHA/lane, intentions et identités différentes**. Aucune extrapolation au parcours R12/R13/R14 utilisateur et aucune nouvelle RECETTE réalisée ici.

## 2. Modules réels consultés

| Repère | Chemin du code intégré | Responsabilité |
| --- | --- | --- |
| `I` | [`web/src/domains/integrations/authorization-service.ts`](../../../web/src/domains/integrations/authorization-service.ts) | OAuth, état connexion, droits |
| `R` | [`web/src/domains/integrations/resource-service.ts`](../../../web/src/domains/integrations/resource-service.ts) | Source/refs, absence vérifiée et provenance |
| `G` | [`web/src/domains/conversation/git-read-tools.ts`](../../../web/src/domains/conversation/git-read-tools.ts) | Nora lecture seule Git |
| `N` | [`web/src/domains/conversation/nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) | Nora LIVE et outils |
| `C` | [`web/src/domains/conversation/service.ts`](../../../web/src/domains/conversation/service.ts) | Intentions, D4, effet/ACK |
| `D` | [`web/src/domains/document/service.ts`](../../../web/src/domains/document/service.ts) | Persistance D4 révisions |
| `E` | [`web/src/domains/execution/effect-service.ts`](../../../web/src/domains/execution/effect-service.ts) | Préparation/mandat/dispatch/reconcile |
| `A` | [`web/src/domains/execution/effect-authority.ts`](../../../web/src/domains/execution/effect-authority.ts) | Réévaluation du mandat D6/droits |
| `S` | [`web/src/domains/integrations/real-github-provider.ts`](../../../web/src/domains/integrations/real-github-provider.ts) | REAL documentary bounded, merge refusé |

**QA pertinente :** [git-collaboration.pg.test.ts](../../../web/tests/integration/git-collaboration.pg.test.ts) — claims, provider modes, OAuth, autorité, duplication/ambiguïté D7/D8, T20 blocage merge REAL ; [ml4-chat-first-d4-provenance.pg.test.ts](../../../web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts) — CREATE/REVISE, source absence/commit, ACK ; [git-collaboration.spec.ts](../../../web/tests/e2e/git-collaboration.spec.ts) — BROWSER DEV FAKE, non substituable à une recette USER REAL.

## 3. Les 22 critères ML4-AT, sans réécrire la recette

La colonne **campagne 1** recopie le verdict propriétaire du [registre §10.4](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md). La colonne **élément additionnel** rapproche code/QA ou le rejeu G1 ; elle **ne modifie pas** le verdict de campagne et ne convertit pas un test non exécuté en PASS.

| Critère | Contrat ML4-AT | Campagne 1 (10/11) | Implémentation/QA proche | Requalification probatoire, limite |
| --- | --- | --- | --- | --- |
| [`ML4-AT-01`](../../ml4-integration-git/matrice-acceptation.md#L17) | Projet Studio et Nora utilisables sans repo ni App | **PASS** | `I/C` · PG AT-01; R01 LIVE | Aucun repo obligatoire ; limite UX sas |
| [`ML4-AT-02`](../../ml4-integration-git/matrice-acceptation.md#L18) | GitHub OAuth ne donne aucun accès privé repo | **PARTIAL** | `I/A` · PG D9 security; R02 LIVE | Cas négatif dépôt privé REAL non testé |
| [`ML4-AT-03`](../../ml4-integration-git/matrice-acceptation.md#L19) | Paramètres → Intégrations GitHub et autorisation utilisateur/installation | **PASS** | `I` · PG state/OAuth; R02 LIVE | OAuth+API CONNECTED, affichage intermittent |
| [`ML4-AT-04`](../../ml4-integration-git/matrice-acceptation.md#L20) | Ajout ultérieur d'un dépôt « à la carte » | **PASS** | `I/R` · PG AT-04; R03 LIVE | Dépôt attaché après création, multi-dépôt REAL non vérifié |
| [`ML4-AT-05`](../../ml4-integration-git/matrice-acceptation.md#L21) | Ajout de source depuis Nora, reprise sans perte du fil | **NOT RUN** | `G/N/R` · SDK LIVE read; R01/R03 | Ajout depuis Nora non réalisé, UI distincte |
| [`ML4-AT-06`](../../ml4-integration-git/matrice-acceptation.md#L22) | Organisation GitHub en attente, aucun accès anticipé | **NOT RUN** | `I` · PG state/installation | Consentement org PENDING/non-accès non exécuté REAL |
| [`ML4-AT-07`](../../ml4-integration-git/matrice-acceptation.md#L23) | GitHub App retirée vs projet détaché vs utilisateur déconnecté | **PARTIAL** | `I/R` · PG disconnect/revoke; R09 session | Déconnexion session ≠ retrait App ni détachement |
| [`ML4-AT-08`](../../ml4-integration-git/matrice-acceptation.md#L24) | Nora lit fichier candidate et cite ref/SHA, sans inventer `main` | **PARTIAL** | `R/G` · PG blob/commit; R04; G1 REC-07 | G1 PASS ciblé sur README, univers des liens non certifié |
| [`ML4-AT-09`](../../ml4-integration-git/matrice-acceptation.md#L25) | README hostile n'entraîne ni mandat ni écriture | **NOT RUN** | `G/A` · PG hostile read + sécurité | R05 non hostile ; injection hostile contrôlée NOT RUN |
| [`ML4-AT-10`](../../ml4-integration-git/matrice-acceptation.md#L26) | Document D4 sauvegardé, révisé et lié à source Git | **PARTIAL** | `D/C` · PG chat-first; R06/R12; G1 REC-08 | REVISE AVAILABLE vs narration Nora FAIL au retest G1 |
| [`ML4-AT-11`](../../ml4-integration-git/matrice-acceptation.md#L27) | Document D4 → branche Git + commit distant sans toucher `main` | **PARTIAL** | `D/E/A/S` · PG AT-11; REAL provider borné §20; G1 REC-11 | G1 PREPARED+CREATE/diff PASS ; aucune autorisation/commit R12 USER |
| [`ML4-AT-12`](../../ml4-integration-git/matrice-acceptation.md#L28) | PR réellement ouverte, pas de merge implicite | **NEUTRE / NOT RUN** | `E/S` · PG SCRIPTED PR; REAL borné §20 | PR #18 REAL historique, pas PR R13 utilisateur |
| [`ML4-AT-13`](../../ml4-integration-git/matrice-acceptation.md#L29) | Merge documentaire seulement après deuxième GO + protections | **KNOWN GAP — HARD-BLOCKED** | `E/A/S` · PG merge/scripted T20 | REAL hard-blocked ; seconde décision/merge NOT RUN |
| [`ML4-AT-14`](../../ml4-integration-git/matrice-acceptation.md#L30) | HEAD change entre inspection et effet : refus/requalification | **NEUTRE / NOT RUN** | `E/R/A` · PG AT-14 HEAD stale | R14 REAL HEAD drift NOT RUN |
| [`ML4-AT-15`](../../ml4-integration-git/matrice-acceptation.md#L31) | Timeout/double clic : pas de commit ni PR fantômes/doublons | **NEUTRE / NOT RUN** | `E/S` · PG B4/C2 ACK, concurrent | R14 REAL interruption/claims NOT RUN |
| [`ML4-AT-16`](../../ml4-integration-git/matrice-acceptation.md#L32) | Repo partagé entre Pilotes n'unit ni mémoire ni mandats | **PARTIAL** | `I/R/A` · PG AT-16 isolation | R11 2 Pilotes : contrôle navigateur, pas même dépôt sous deux comptes |
| [`ML4-AT-17`](../../ml4-integration-git/matrice-acceptation.md#L33) | Publication code/CI/scripts/normatif hors autorisation ML4 interdite | **PARTIAL** | `E/A` · PG paths; sécurité | Code/CI refusés PG ; R08 refus serveur LIVE NOT RUN |
| [`ML4-AT-18`](../../ml4-integration-git/matrice-acceptation.md#L34) | Commit observé avec tests absents ne prouve pas conformité | **PARTIAL** | `E/R` · PG D8 marker/provenance | Commit/pr LIVE API borné mais jugement D8 user non complet |
| [`ML4-AT-19`](../../ml4-integration-git/matrice-acceptation.md#L35) | Figma future intégration absente ou non activable | **NOT RUN** | `I` · UX spec Figma 218–219 | Futur fournisseur non activable en navigateur non exécuté |
| [`ML4-AT-20`](../../ml4-integration-git/matrice-acceptation.md#L36) | Lien « Ouvrir sur GitHub » réel mais sans permission dérivée | **NOT RUN** | `R/G/N` · PG permalink; G1 REC-07 | Provenance G1 exacte, UX lien ouvert depuis Nora non exécutée |
| [`ML4-AT-21`](../../ml4-integration-git/matrice-acceptation.md#L37) | Responsive, focus, clavier, zoom, interruptions | **PARTIAL** | `N/I` · BROWSER FAKE; R10 Safari | Clavier borné PASS, responsive étroit FAIL mineur différé |
| [`ML4-AT-22`](../../ml4-integration-git/matrice-acceptation.md#L38) | Accès Git révoqué sans annuler le document interne ni les commits historiques | **PARTIAL** | `I/R/D` · PG revoke preserves D4; R09 session | Révocation Git REAL pendant session NOT RUN |

**Contrôle de cardinalité et de statuts de campagne :** **3 PASS, 10 PARTIAL, 8 NOT RUN (y compris NEUTRE / NOT RUN), 1 KNOWN GAP / HARD-BLOCKED = 22**. **Ne pas faire la somme des PASS avec G1 pour fabriquer un pourcentage de conformité**. Les critères AT-12/14/15 sont des non-tests USER au terme de la campagne, **pas des FAIL**.

## 4. Preuves historiques par niveau et ordre

| Niveau | Événement et source | Ce qui est établi | Ce qui ne l'est pas |
| --- | --- | --- | --- |
| **CODE** | Git intégré après [PR #672](https://github.com/mcleland147/sfia-workspace/pull/672) ; `I/R/G/E/A/S` | Services OAuth, Git READ, D7 tentative versionnée/claim, mandat D6, publication/PR REAL bornées, observations D8 ; merge REAL refusé par provider | Aucune conformité globale du code à partir de son existence |
| **DETERMINISTIC/PG** | [ML4 matrice §§6–35](../../ml4-integration-git/matrice-acceptation.md), tests ciblés SCRIPTED | Couverture importante des états, collisions, fingerprints, restrictions, provenance PR marker, service refresh, rollback d'ACK et interdits de path | Exercice provider LIVE et UX réelle de tous les cas |
| **BROWSER DEV FAKE** | [git-collaboration.spec.ts](../../../web/tests/e2e/git-collaboration.spec.ts) et G4 | Chemin inspect→authorize→dispatch→merge en **simulation**, surfaces et interactions ciblées | Merge REAL, Figma native↔runtime et accessibilité complète |
| **REAL READ** | [Matrice §19](../../ml4-integration-git/matrice-acceptation.md), 08/11 | OAuth user App, accès Git READ, configuration + état `CONNECTED` et dépôt autorisé sur lane bornee | Permission future, multi-repo, différence d'installations/orgs, non-révocation permanente |
| **REAL DOCUMENTARY BOUNDED** | [Matrice §20](../../ml4-integration-git/matrice-acceptation.md), 09/11 | Commit `790a531579acd1a56243e84bf44a305a22e512d2`, [PR #18 OPEN](https://github.com/mcleland147/chantiers360/pull/18), `main` inchangée au contrôle, redéclenchement idempotent, source D4 reconstituée | Geste utilisateur R12/R13, merge, autre dépôt, D8 conformité/CI, présent état de la PR |
| **USER CAMPAIGN 1** | [RECETTE §10](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md), 10/11 | R01 sans Git, R02 OAuth, R03 rattachement, D4 CREATE/REVISE bornés, refus narratif Nora, R11 navigateur 2 Pilotes, R12 D4 CREATE | R12 Git bloqué sur lecture `DENIED/404` avant preuve d'absence ; R13/R14 NOT RUN, aucune nouvelle branche/commit/PR de cette recette |
| **USER G1 TARGETED** | [RECETTE §11](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md), 10/11, candidat `d7f1507a` | REC-11 lecture path `FILE_ABSENT` à ref vérifiée et tentative D7 `PREPARED/CREATE` avec **diff inspectable** sans D6 ; REC-07 blob/commit/permalink cohérents ; CREATE minimal D4 `AVAILABLE` | Aucune mutation Git, aucun R13/R14 ; REC-08 **REVISE AVAILABLE** avec narration Nora opposée ; premier CREATE mal qualifié en REVISE |

**Interprétation obligatoire :** G1 **améliore la preuve** sur la lecture d'absence et préparation (AT-08/11) ; il ne clôt **ni l'autorisation D6, ni le commit/PR Git R12–R13, ni la vérité conversationnelle D4**. Une réponse « Nora COMPLETE » ou un ACK D4 ne constitue pas un effet Git.

## 5. Parcours E2E R1 et exceptions : ce qui appartient réellement à ML4

### E2E07 — Sept étapes de collaboration Git

| Étape R1 | Contrat Pilote | Sources et tests liés | Verdict ML4B |
| --- | --- | --- | --- |
| **07-1 Identité** | Studio/Pilote et identité GitHub distinctes ; pas de droit universel | `I`, OAuth READ REAL, AT-02/03 | **LIVE BORNÉ** ; cas org/multi-identité ouverts |
| **07-2 Projet sans obligation Git** | Projet/sas et Nora utilisables avant connexion | ML1 R01, AT-01, `I` | **PASS CIBLÉ** |
| **07-3 Besoin Git contextualisé** | Dépôt/répertoire/branche proposés sans remplacer le Pilote | D3 et D9 `G/R`, R03, AT-04/05 | **PARTIAL** : ajout depuis Nora non exécuté |
| **07-4 Consultation autorisée** | Sources accessibles, ref précise, candidate ≠ main, absence honnête | `R/G`, R04/R05 et G1 REC-07/11 | **LIVE CIBLÉ** après G1 ; hostile et révocation non testés |
| **07-5 Préparation d'intervention** | Cible/base/diff/mandat/STOP inspectables | D7 `E`, G1 REC-11 `PREPARED CREATE` | **LIVE PREPARED** ; contrat Cursor complet OUT |
| **07-6 Autorisation et réalisation** | Autorisation spécifique et effet Git courant, sans droit hérité | D6 `A`, D7 `E/S`, R12–R14 | **PG + REAL BORNÉ HISTORIQUE** ; parcours USER R12–R14 absent, merge REAL bloqué ; Cursor OUT |
| **07-7 Retour et capitalisation** | Faits Git vérifiés, ambiguïté conservée, pas d'adoption ni partage d'autorité | D7/D8, `E/R`, AT-18, ML2 D4 | **SOURCE+PG PARTIAL**, conformité et acceptation non prouvées |

**E2E07 : 7/7 étapes rapprochées, pas 7/7 PASS.** Les deux projets Studio personnels restent séparés même sur un dépôt partagé. R11 a vérifié une **isolation navigateur et portefeuille**, pas l'intégralité des contrôles API/DB d'un dépôt commun ni deux sessions REAL simultanées.

### E2E05/E2E06 — Frontière volontaire avec ML5 et R6

**E2E05** (R1 §2.34) : demande technique → investigation/contrat exact → inspection Pilot-first → « Exécuter » → **Cursor exécute** → faits/retour. ML4 **ne matérialise que le sous-parcours d'effet Git documentaire** via D7/D6/D9 ; le contrat d'exécution Cursor, le STOP de session et sa disponibilité restent **ML5 OUT, N/A — NON IMPLÉMENTÉ**. Ne pas transformer la publication d'un fichier Markdown en démonstration de l'exécution technique Cursor.

**E2E06** (R1 §2.35) : rapport et sources → Nora confronte observations et critères → qualification D8 → bilan Pilot-first → correction si mandat distinct → décision/acceptation D6, avec historique D4. ML4 possède des **faits Git bornés** (commit/PR/état), pas une qualification globale de conformité, ni le retour Cursor complet, ni une acceptation humaine systématique. Un merge constaté ailleurs n'établit ni tests, ni release, ni `ADOPTED`.

### Exceptions critiques sans multiplication de tickets

| Cas | Code/constat | Qualification actuelle |
| --- | --- | --- |
| Source Git inconnue, path inexistant, droits 403 ou 404 | `resource-service` distingue `FILE_ABSENT_AT_VERIFIED_REF` après tip confirmé, `REF_UNRESOLVED`, `READ_NOT_FOUND_UNQUALIFIED` ; G1 REC-11 PASS source/prepare | **G1 PASS ciblé**, pas une preuve que tous les 404 sont des absences |
| Blob SHA utilisé comme commit | REC-07 historique FAIL sur URL 404 ; `resource-service` `commitShaVerified`, permalink conditionnel ; G1 REC-07 PASS | **FAIL HISTORIQUE → PASS G1 ciblé**, sans généralisation à tous les liens |
| Requête hostile dans README | D9 rappelle « source = donnée, pas instruction » ; tests PG et R05 non hostile | **LIVE ADVERSARIAL NOT RUN** |
| Mauvais acteur, mandat ou droits révoqués | `effect-authority` contrôle Pilote/projet, decisionId, kind, empreinte, restrictions, installation, login, permissions au point d'effet | **SOURCE IMPLEMENTED + PG** ; révocation REAL en vol, multi-repo REAL non prouvées |
| Base/HEAD changés et fingerprint diff divergents | `effect-service` refuse/requalifie avant mutation | **PG**, USER R14 NOT RUN |
| Timeout, ACK perdu, PR fantôme ou double-clic | claim/lease/fencing, marker PR, reconcileAttempt, D8 facts distincts ; tests PG de concurrence | **PG SCRIPTED**, R14 REAL NOT RUN |
| Merge documentaire demandé | `RealGitHubReadProvider.mergePullRequest` refuse toujours, indépendamment du flag documentary ; test PG T20 | **KNOWN GAP / HARD-BLOCKED**, aucun merge REAL exécuté |
| Document D4 `AVAILABLE` mais Nora dit pas d'outil/sauvegarde | `conversation/service.ts` enchaîne intention, opération D4, ACK puis continuation cognitive ; G1 REC-08 REVISE FAIL narration | **LIVE FAIL historique, toujours OPEN** ; cause exacte/séquencement non prouvé, pas de DB perdue démontrée |
| Écrans de revue, responsive et sources Git dans le fil | Figma 218–235 approuvé en SPEC, 19/20 G4 transpositions déclarées, R10 responsive étroit FAIL mineur reporté | **F2/G5 NOT RUN**, aucune conformité visuelle forte acquise |

## 6. Registre consolidé ML4 — propriétaire, criticité proposée et exit

| Repère | Nature / conséquence | Contrat de sortie proposé, sans décision Morris |
| --- | --- | --- |
| **ML4-COV-01 — Chaîne de publication USER interrompue** | **PROOF GAP principal**, R12 préparation auparavant bloquée, G1 répare l'inspection D7 `PREPARED`, mais aucun nouveau D6/dispatch/commit/PR USER | Scénario intégré D4 vN → D9 source vérifiée → D7 diff CREATE → HumanDecision D6 → commit+PR REAL sur sandbox borné → D8 refs distantes ; ne pas retester R13/R14 avant préconditions |
| **ML4-COV-02 — Merge REAL non implémenté** | **KNOWN GAP / design hard-block** ; `mergePullRequest` refuse toujours ; AT-13 ≠ FAIL de R13/R14 | **Décision Morris** de maintien du blocage ou nouveau périmètre/gates avant code ; aucun bypass par une autorisation Git générique |
| **ML4-COV-03 — Vérité et provenance Nora** | **LIVE PARTIAL/FAIL** ; REC-07 corrigé G1 sur source ciblée, REC-08 REVISE `AVAILABLE` et narration opposée. Même écart transverse que ML2 `ML4-REC-08`, pas doublon | Reconstitution au même SHA génération→D4 ACK→continuation→message, scénario CREATE/REVISE/UNKNOWN, source/citation réelles, UX alignée |
| **ML4-COV-04 — Accès et autorité multi-identité** | **SECURITY PROOF GAP**, code/gates + PG présents ; R11 browser PARTIAL et organisation en attente/révocation/multi-repo REAL non prouvés | Épreuves ciblées 2 comptes/dépôt commun, retrait de droits et incohérence login sans accès ni autorité transférés |
| **ML4-COV-05 — Concurrence et reprise externe** | **PG PROVEN ciblé, USER REAL NOT RUN**, R14 conflit HEAD/ACK perdu, modes provider/fencing/PR marker | Fault/replay au bon SHA avec observations Git réelles, pas de duplicate ni faux `COMPLETED`; prouver limites d'exactly-once |
| **ML4-COV-06 — UX et consentement** | **PARTIAL/KNOWN UX**, OAuth final connecté avec incident transitoire non expliqué, responsiveness mineure différée, source Git non disponible sur un panneau Travail, F2/G5 manquant | Reproduction avant correction de l'incident, paires Figma/runtime écran/état identiques, correction par parcours et non écran isolé |
| **ML4-COV-07 — D8 : valeur de preuve vs verdict global** | **CODE SOURCE + PROOF GAP**, commit/PR REAL sandbox bornés, mais tests/CI/merge/acceptation/release restent distincts | Restituer SHA, branche, état PR, tests/CI **NOT OBSERVED** et limites ; le Pilote décide acceptation, aucune `ADOPTED` implicite |
| **ML4-COV-08 — Frontière ML5** | **OUT / N/A — NON IMPLÉMENTÉ**, Cursor non lancé par la capacité Git documentaire | Conserver un seul D7/D8, nouvel exécuteur ML5 sous gate et contrôle distinct, sans POC/moteur parallèle |

**Priorités d'étude proposées, non arbitrées :** capacité de publication USER (01) et fidélité Nora (03) structurantes ; accès/autorité et résilience (04–05) selon risques sécurité/concurrence ; UX (06) en convergence avec ML1–ML3 ; merge (02) sous décision explicite et non en « correction opportuniste ». Le fait qu'un critère soit NOT RUN n'indique pas nécessairement un défaut de code, et la clôture d'un défaut ne prouve pas le parcours entier.

**Blast radius avant construction :** D9 OAuth/API/provider/permissions, D7 préparation/fingerprint/claim/dispatch, D6 HumanDecision et restrictions, D8 facts/PR state, D4 versions, D3 Nora restitution, R3 Figma et flux d'UI, PG/REAL/BROWSER, environnement et branche. Les chemins historiques et témoignages restent datés ; nouveau code implique doc/architecture synchronisées dans le même macro-lot.

## 7. Verdict et suite ML4B

**Mécanismes Git réels intégrés** et **tests PG étendus**, plus une **preuve REAL limitée de publication documentaire**. Cependant la **RECETTE utilisateur globale reste non acceptée** : R12 Git non réalisé pendant la campagne ni le rejeu G1, R13/R14 non exécutés, merge REAL volontairement bloqué ; vérité de narration D4, aspects adversariaux et Figma/runtime encore ouverts. La décision Morris du 10/11 d'arrêter la campagne 1 puis de préparer une correction est conservée sans en inférer un GO ML4C.

**Statut :** `ML4 22/22 AT RECONCILED + D7-D8-D9 213/213 R2 IDS INDEXED + E2E07 7/7 STEPS SOURCE-MAPPED / REAL API BOUNDED / G1 TARGETED / NO FULL USER GIT E2E / MERGE HARD-BLOCKED / F2-G5 NOT RUN / CP1 OPEN`.

**Suite :** consolider le diagnostic ML1–ML4 et les sept E2E R1, qualifier les **écarts uniques** et les interfaces Nora/Studio/autorité/UX, puis préparer des options de convergence utiles au **gate Morris B**. Ce document ne décide ni correction, ni campagne de test, ni GO Cursor, ni PR, merge, release ou adoption.
