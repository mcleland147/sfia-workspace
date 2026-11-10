# SFIA Studio Next — Diagnostic détaillé : accès, préparation et création du projet (ML1)

**Nature :** première qualification documentaire D1, non-normative, incrémentale. **Date :** 2026-11-10.
**Baseline analysée :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` ; branche candidate `docs/next-reconciliation-produit-ml1-20261110`.
**État :** `DOCUMENTED / INITIAL CODE INSPECTION / PER-ID CONFORMITY NOT YET VERIFIED / CP1 OPEN`.
**Local, serveur, DB et navigateur :** **NON OBSERVÉS** ; aucun test n'a été exécuté dans cette qualification.
**Autorité :** Morris valide les décisions, risques et sorties de gate ; l'analyse ne crée pas de GO produit.

[Retour au dossier ML4B](../README.md).

## 1. Contrat cible, périmètre et sources

**Résultat attendu ML1 :** le Pilote accède personnellement au portefeuille, ouvre un sas sans projet créé, travaille librement avec Nora, conserve son fil et éventuellement une première ressource, **crée uniquement sur acte explicite**, puis retrouve le même contexte dans le projet, sans effets Git/cycle/mandat implicites.

**Sources canoniques :** [vision R1 §2.20 et E2E01 §2.30](../../../cadrage/vision-produit.md) ; [R2 D1](../../../conception-fonctionnelle/acces-et-portefeuille.md) ; [R2 D2](../../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md) ; [qualification ML1](../../ml1-entree-et-continuite/qualification.md), [spécification R5 §§1–15](../../ml1-entree-et-continuite/specification-technique.md), [matrice de traçabilité et QA A01–A16](../../ml1-entree-et-continuite/matrice-tracabilite.md), [inventaire des RG/PF](../../ml1-entree-et-continuite/inventaire-r2.csv).

**IN :** D1 identité/portefeuille et D2 sas/création/continuité ; interfaces minimales D3 Nora, D4 documents, D5/D6/D7/D9 comme garde-fous, UX R3, code et preuves R5.

**OUT :** mémoire D4 complète et révision avancée (ML2), cycle/CKI/autorité D5/D6 (ML3), accès et effets Git complets (ML4), exécution Cursor (ML5). Les frontières négatives restent à tester dès ML1.

**Historique acquis :** [PR #649](https://github.com/mcleland147/sfia-workspace/pull/649) intégrée ; ML1 **CLOSED BY MORRIS WITH CARRIED RESERVES**, recette fonctionnelle acceptée sur candidat historique, **pas** de conformité R1/R2 exhaustive, STABLE, release ou ADOPTED.

## 2. Inventaire exact des exigences D1/D2

### 2.1 Les 103 références historiques validées

| Source fonctionnelle | RG | PF | Nombre |
| --- | --- | --- | ---: |
| Domaine D1 | `RG-ACC-001..025` (25) | `PF-ACC-01..24` (24) | **49** |
| Domaine D2 | `RG-CRE-001..027` (27) | `PF-CRE-01..27` (27) | **54** |
| **Total** | **52** | **51** | **103** |

Les 26 premières RG et 26 premiers PF D2 sont validés en R2 le 02/11/2026 ; `RG-CRE-027` et `PF-CRE-27` sont des compléments **validés le 03/11/2026** sur le premier brouillon du sas. Les 25 RG/24 PF D1 sont `VALIDATED SPEC` R2.

Le [CSV R5 d'inventaire](../../ml1-entree-et-continuite/inventaire-r2.csv) contient exactement **103 IDs uniques, sans doublon**, correspondant aux plages ci-dessus. Son marquage historique `DESIGN_ONLY / D0_PROPOSED` ne supprime ni la validation R2 ni les preuves historiques R5 ultérieures.

### 2.2 Les 12 références supplémentaires, statut candidat distinct

| Addendum du 05/11 | RG | PF | Qualification d'autorité |
| --- | --- | --- | --- |
| [D1 §7](../../../conception-fonctionnelle/acces-et-portefeuille.md) | `RG-ACC-026/027/028` | `PF-ACC-25/26/27` | Extension candidate : erreurs/session, diagnostic corrélé, confidentialité |
| [D2 §8](../../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md) | `RG-CRE-028/029/030` | `PF-CRE-28/29/30` | Extension candidate : commandes corrélées, effet inconnu, lane/SHA |

L'**orientation observabilité** est approuvée par Morris, mais les spécifications marquent ces règles/parcours additionnels comme **candidats**. Ne pas les promouvoir silencieusement en `VALIDATED SPEC`.

**Contrôle d'exhaustivité documentaire à instruire : 115 IDs (103 historiques + 12 candidats)**, sans présumer 115 tests ni inclure encore les RG/PF d'interface D3–D9.

### 2.3 Découpage exact du CSV historique en huit capacités

Le tableau recense les IDs du CSV selon leur **premier contrôle de couverture R5**, non selon un nouveau propriétaire métier. Préfixes abrégés : `ACC-` = `RG-ACC` ou `PF-ACC` selon colonne ; `CRE-` = `RG-CRE` ou `PF-CRE`.

| Capacité | RG | PF | RG rattachées | PF rattachés |
| --- | ---: | ---: | --- | --- |
| `ML1-IDENTITY` | 10 | 8 | `ACC-001..007/015/019/021` | `ACC-01..04/10/13/17/24` |
| `ML1-PORTFOLIO` | 11 | 11 | `ACC-008..014/016/020/023/025` | `ACC-05..09/11/12/18/20/21/23` |
| `ML1-SAS-ENTRY` | 3 | 3 | `ACC-017/018/022` | `ACC-14/15/22` |
| `ML1-SAS-DURABLE` | 7 | 7 | `CRE-001/004/006/007/015/022/027` | `CRE-01/02/04/05/13/20/27` |
| `ML1-NORA-PREVIEW` | 5 | 5 | `CRE-002/003/005/016/026` | `CRE-03/06/19/23/26` |
| `ML1-CREATE` | 8 | 9 | `CRE-008..014/025` | `CRE-07..12/14/24/25` |
| `ML1-CONTINUITY` | 7 | 6 | `CRE-017..021/023/024` | `CRE-15..18/21/22` |
| `ML1-BOUNDARY` | 1 | 2 | `ACC-024` | `ACC-16/19` |
| **Total** | **52** | **51** | **103 références historiques** | **0 doublon** |

La sous-fonctionnalité technique `ML1-SAS-DOCUMENT` de R5 §4.6 est incluse dans `ML1-SAS-DURABLE` pour ce dénombrement : ne pas compter deux fois.

**Frontières historiques explicites :** `RG-ACC-024/PF-ACC-19` vérifient la non-autorisation de suppression/transfert, **pas** l'implémentation d'une suppression ; `RG-ACC-019/PF-ACC-16` et `RG-CRE-022/PF-CRE-05/20` touchent les consultations interprojets/Git dont la capacité complète relève de ML2/ML4.

## 3. Comparaison détaillée : contrat → code → preuve → limite

Les tableaux ci-dessous sont un **premier rattachement fonctionnel vérifié par inspection**. Ils ne représentent pas encore 115 verdicts individuels.

### 3.1 Identité et session D1

| Fonctionnalité | Contrat fonctionnel et oracle | Implémentation inspectée | Preuve / verdict initial |
| --- | --- | --- | --- |
| Connexion GitHub personnelle | `RG-ACC-001/003/007`, `PF-ACC-01/04` | [`web/src/lib/auth.ts`](../../../web/src/lib/auth.ts) : Better Auth, fournisseur GitHub conditionné aux secrets, login Studio sans scope repo | **IMPLEMENTED** ; OAuth LIVE accepté en recette historique ML1, pas de callback runtime observé aujourd'hui |
| Identité Pilote durable | `RG-ACC-001/005`, `PF-ACC-03` | [`provision-pilot.ts`](../../../web/src/domains/identity/provision-pilot.ts), association GitHub côté serveur et rattachement stable | Tests PG [`identity-session.pg.test.ts`](../../../web/tests/integration/identity-session.pg.test.ts) sur association **simulée**, pas preuve OAuth LIVE actuelle |
| Résolution/revocation/expiration session | `RG-ACC-002/006/015`, `PF-ACC-02/10/13` | [`session.ts`](../../../web/src/domains/identity/session.ts) : Better Auth prioritaire, vérification `expiresAt/revokedAt`, adaptateur DEV/RECETTE séparé | **CODE INSPECTED** ; test PG, comportement navigateur/expirations LIVE complets non requalifiés |
| Protection de l'adaptateur DEV | Interfaces ENV-01 et candidats `RG-ACC-027/028` | `session.ts` : contrôles lane, loopback/proxy, nom de cookie de test spécifique à la lane | Tests PG présents ; risque historique de collision des cookies Better Auth **non démontré résolu** |
| Séparation session / Git / décisions | `RG-ACC-003/004/005` | Authentification Studio séparée des accès GitHub App et HumanDecision D6 | Responsabilités distinctes dans le code ; E2E d'absence de droit Git implicite à vérifier |
| Confidentialité entre Pilotes | `RG-ACC-005/019/021`, `PF-ACC-03/17/24` | Filtres propriétaire dans [`portfolio.ts`](../../../web/src/domains/identity/portfolio.ts), [`preparation/service.ts`](../../../web/src/domains/preparation/service.ts) | [`ml1-smoke.spec.ts`](../../../web/tests/e2e/ml1-smoke.spec.ts) vérifie un refus Pilot B en **BROWSER FAKE**, pas toutes les lectures interprojets |
| Erreurs d'identité et diagnostic | Candidats `RG-ACC-026..028`, `PF-ACC-25..27` | [`http-errors.ts`](../../../web/src/lib/http-errors.ts) classifie 401/403/500/503 | Couverture route par route non terminée ; voir **GAP-02** |

### 3.2 Portefeuille et navigation D1

| Fonctionnalité | Contrat/oracle | Implémentation inspectée | Preuve / verdict initial |
| --- | --- | --- | --- |
| Mes projets personnels | `RG-ACC-008/011/012`, `PF-ACC-05/07` | [`loadPortfolio`](../../../web/src/domains/identity/portfolio.ts), SELECT filtré `ownerPilotId`, [`GET /api/portfolio`](../../../web/src/app/api/portfolio/route.ts) | **IMPLEMENTED** ; tests PG/FAKE existants, pas preuve browser LIVE générale |
| Cockpit sans Nora globale | `RG-ACC-009/020`, `PF-ACC-08/18` | [`portfolio/page.tsx`](../../../web/src/app/portfolio/page.tsx) : vue distincte du sas/projet | Structure implémentée, fidélité Figma NON VÉRIFIÉE |
| Projet sélectionné explicitement | `RG-ACC-010/014/016`, `PF-ACC-05/12/13` | Navigation vers `/projects/{projectId}?surface=travail` | [`ml1-smoke.spec.ts`](../../../web/tests/e2e/ml1-smoke.spec.ts) : réouverture du fil par `projectId`, BROWSER FAKE |
| Préparations reprenables (évolution UX A1) | `RG-ACC-017/018`, `PF-ACC-14/15`, [G3 A1](../../convergence-ux-parcours-pilote-nora/contrat-acceptation.md) | [`portfolio.ts`](../../../web/src/domains/identity/portfolio.ts) : `OPEN` non rattachée, propriétaire ; [`portfolio-cursor.ts`](../../../web/src/domains/identity/portfolio-cursor.ts) : keyset 25/page ; reprise sans POST | [`portfolio-a1.pg.test.ts`](../../../web/tests/integration/portfolio-a1.pg.test.ts) : isolation et pagination testées en PG ; vérification visuelle non faite |
| État honnête des projets | **`RG-ACC-013`, `PF-ACC-11`** | [`portfolio/page.tsx#L34-L40`](../../../web/src/app/portfolio/page.tsx#L34-L40) : statuts par index malgré serveur sans état métier | **KNOWN GAP source — GAP-01** |
| Échec/refus et navigation interrompue | `RG-ACC-015/016/021/023`, `PF-ACC-09/10/12/21/24` | `GET /api/portfolio` utilise classifieur d'erreur ; UI `unavailable` | Certaines voies implémentées ; tests négatifs complets et navigateur NON VÉRIFIÉS |
| Nombre/ordre de projets | `RG-ACC-025`, `PF-ACC-20` | La source D1 ne prescrit pas de tri universel ; pagination de **préparations** distincte | Pas de défaut de tri projet affirmé sans contrat |

### 3.3 Sas, création, première ressource et continuité D2

| Sous-fonctionnalité | Contrat/QA | Implémentation inspectée | Preuve / limitation |
| --- | --- | --- | --- |
| Sas indépendant d'un projet | `RG-CRE-001/015`, A01 | [`preparation/service.ts`](../../../web/src/domains/preparation/service.ts) : préparation `OPEN`, conversation durable ; [API création sas](../../../web/src/app/api/preparations/route.ts) | A01 **PASS** historique PG+BROWSER FAKE ; erreur API à requalifier |
| Dialogue initial libre avec Nora | `RG-CRE-002/004/005/007`, A02 | [`conversation/service.ts`](../../../web/src/domains/conversation/service.ts) et adaptateur Nora ; conservation du contexte | A02 **PASS LIVE borné** historique ; initiative/qualité cognitive globale non démontrées |
| Aperçu/propositions non autorisantes | `RG-CRE-003/016/026`, A06 | `updatePreview` + `creationRevision` en [`preparation/service.ts`](../../../web/src/domains/preparation/service.ts), UI de proposition | A06 **PASS PG** historique pour conflit ; ergonomie/provenance à vérifier |
| Document dans le sas | `RG-CRE-027`, `PF-CRE-27`, A08/A09 | [`document/service.ts`](../../../web/src/domains/document/service.ts) ; `documents` et `document_revisions` | A08/A09 **PASS PG** historiques, ML2 porte les révisions avancées |
| Acte de création explicite | `RG-CRE-008..010/014`, A03/A15 | [`createProjectCommand`](../../../web/src/domains/preparation/create-project.ts) dans une transaction PG | A03 **PASS**, A15 **PARTIAL** pour absence de tous effets D5–D9 |
| Verrou, unicité et idempotence | `RG-CRE-011..013/024`, A04/A05/A06/A12 | `createProjectCommand` : advisory lock par Pilote+clé, fingerprint, verrou de préparation, `ALREADY_CREATED`, CAS revision ; `reconcileCreateProject` lecture seule | A04/A06/A12 **PASS** PG historiques ; A05 **PARTIAL** car crash/restart non injecté |
| Même fil/documents après création | `RG-CRE-017..020/023`, A07/A08/A13 | `create-project.ts` attache `preparationProjectLinks`, `conversations.projectId`, `documents.projectId` dans même transaction | A07/A08 **PASS** historiques ; A13 récupération D3/D4 sélective **PARTIAL/NOT RUN** |
| Reprise et frontières D5–D9 | `RG-CRE-014/021/024`, A15/A16 | Création D2 ne fabrique pas explicitement cycle/Git ; contraintes des autres domaines à revisiter | A15/A16 **PARTIAL**, restauration réelle non prouvée |

**Interprétation :** la présence de services D3/D4 et la persistance du fil ne prouvent pas l'autonomie cognitive, la mémoire vivante complète ou la conformité UX. Les interfaces ML2–ML4 sont à réconcilier selon leurs propres contrats et preuves.

## 4. Écarts confirmés par inspection du code, sans reproduction navigateur

### GAP-01 — Statut projet inventé depuis l'index du portefeuille

- **Exigence validée :** [D1 `RG-ACC-013`](../../../conception-fonctionnelle/acces-et-portefeuille.md), données de présentation honnêtes, sans état de cycle/avancement fabriqué.
- **Fait vérifié :** [`portfolio/page.tsx` lignes 34–40](../../../web/src/app/portfolio/page.tsx#L34-L40) : `statusForProject(index,total)` retourne `Actif` pour le premier projet, `En réflexion` pour le deuxième, `À reprendre` ensuite. [`portfolio.ts`](../../../web/src/domains/identity/portfolio.ts) renvoie `id/name/createdAt`, sans statut métier correspondant.
- **Conclusion :** **contradiction de code `KNOWN GAP`** ; ni preuve visuelle ni critique de design Figma établie. Le libellé peut tromper le Pilote sur la réalité du projet.
- **Suite non autorisée :** inspecter navigateur, choisir un rendu seulement sourcé, tests de non-fabrication ; responsabilité D1 projection, interface D5 si un vrai cycle existe. Criticité/gate Morris à arbitrer.

### GAP-02 — Erreur DB potentiellement présentée comme session invalide

- **Contrat :** R2 `RG-CRE-013` (échec non masqué) ; extension candidate D1 `RG-ACC-026/PF-ACC-26`.
- **Fait vérifié :** [`POST /api/preparations`](../../../web/src/app/api/preparations/route.ts) englobe `requireStudioSession` et `openOrCreatePreparation` dans un `try` ; le `catch` renvoie **toujours HTTP 401 `SESSION_INVALID`**. [`http-errors.ts`](../../../web/src/lib/http-errors.ts) distingue déjà 401, 500 et 503 ailleurs.
- **Conclusion :** **écart de code `KNOWN GAP`** de classification d'erreur. Aucun incident DB ou fuite d'information réel n'est ici revendiqué.
- **Suite non autorisée :** injection de faute PG et assertion route/UX ; séparation auth/non-auth à la frontière D1/D2 ; vérifier 401/503/500 sous tests négatifs.

### DOC-01 — Métadonnées de l'inventaire historique à remettre en perspective

- Le CSV R5 ne répertorie que les 103 exigences historiques ; les **12 candidats** datent du 05/11. Ce n'est pas la preuve d'une omission parmi les 103 validées.
- Les statuts `D0_PROPOSED/DESIGN_ONLY` du CSV sont historiques ; **les documents R2 validés et les preuves R5 postérieures priment**.
- Action ML4B : conserver deux catégories d'autorité. Aucune réécriture normative ou suppression d'historique induite.

## 5. Historique QA ML1 : verdicts propriétaires, non réexécutés

Source : [matrice ML1 §§7–8](../../ml1-entree-et-continuite/matrice-tracabilite.md), qualification locale DEV du 04/11/2026 au candidat C3. Les oracles postérieurs à la conception `DESIGN ONLY` y sont distincts.

| QA | Verdict historique | Preuve et limite |
| --- | --- | --- |
| A01 | PASS | Sas sans projet, PG + BROWSER FAKE |
| A02 | PASS borné | Nora LIVE API + PG + observation utilisateur ; pas qualité cognitive globale |
| A03 | PASS | Création par commande, PG + BROWSER FAKE |
| A04 | PASS | Concurrence PG, projet unique |
| A05 | **PARTIAL** | Rejeu post-commit PG, pas crash/restart injecté |
| A06 | PASS | Révision obsolète CONFLICT PG |
| A07 | PASS | Même fil/reload PG + BROWSER FAKE |
| A08 | PASS | Document conserve identité PG |
| A09 | PASS | Échec persistance injecté PG |
| A10 | PASS | Isolation A/B PG + BROWSER FAKE |
| A11 | OUT ML1 justifié | Révocation Git propriétaire ML4 |
| A12 | PASS | Deux projets homonymes PG |
| A13 | **PARTIAL/NOT RUN** | Connaissances sélectives non démontrées au titre de ML1 |
| A14 | PASS | Réouverture portefeuille/projet BROWSER FAKE + observation bornée |
| A15 | **PARTIAL** | Absence effets induits non prouvée exhaustivement après D5–D9 |
| A16 | **PARTIAL** | Pas restauration/restart réellement injecté |
| DATA-01 | OUT ML1 | Restauration backup, qualification R6/ENV distincte |

[L'As-Built ML1 §15](../../ml1-entree-et-continuite/specification-technique.md) déclare **22 tests unitaires, 26 intégrations PostgreSQL, 1 Playwright BROWSER DEV FAKE** PASS au candidat C3, ainsi qu'une recette utilisateur OAuth/Nora LIVE bornée acceptée avec réserves. Les tests n'ont pas été rejoués ici sur `main@deba6ee4`.

**Réserves historiques :** cookies DEV/RECETTE, CI Next initialement absente, A05/A13/A15/A16, DATA-01, Figma/Markdown et streaming. Attention : des changements ultérieurs existent (session adaptée à la lane, CI Next, UX G4) : il faut **requalifier sur la baseline actuelle**, ni perpétuer les constats anciens tels quels ni en inférer leur clôture.

## 6. Conformité UX et fidélité Figma : non encore mesurées

Sources : [matrice ML1](../../ml1-entree-et-continuite/matrice-tracabilite.md) avec nœuds R3 (ex. `94:50` portefeuille, `94:135` sas, `94:214` fil projet, `158:264/336/912` variantes), [rapport G4](../../convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md).

**Fait :** le rapport G4 annonce **19/20 frames IMPLEMENTED et 1 PARTIAL** pour son périmètre transversal, mais **F2/G5 NOT RUN**. Ce n'est **pas une certification visuelle** et ce nombre n'est pas un taux de conformité ML1.

**Comparaison exigible :** une frame Figma native identifiée/horodatée, son export/capture ; le même écran navigateur au SHA/lane/viewport/état/données comparables ; revue du rail, géométrie, texte, composants, couleurs, responsive, erreurs, accessibilité, navigation et comportements. `data-figma-frame` ou React similaire ≠ rendu identique.

**Pour ce diagnostic :** aucune capture runtime et aucune paire Figma/runtime inspectées ; **UX = NOT VERIFIED**. Verdict final : Morris après preuve.

## 7. Limites et travaux de réconciliation restant dans ML4B

| Axe | Statut aujourd'hui | Contrôle de suite |
| --- | --- | --- |
| 103 RG/PF historiques | **INVENTORIED**, pas 103 verdicts | Confronter chaque ID au code, tests et niveaux de preuve ; interfaces D3–D9 incluses selon portée |
| 12 candidats D1/D2 | **CANDIDATE / DOCUMENTED** | Qualifier validation exacte et impacts ; ne pas les déclarer approuvés |
| Identité/session | **CODE INSPECTED + HISTORICAL PROOF** | Distinction OAuth LIVE/DEV, erreurs, cookies et isolation de lanes, tests au SHA |
| Portefeuille et navigation | **CODE INSPECTED** | Browser pour états honnêtes/refus/reprise, Figma variantes |
| Sas, Nora et aperçu | **PARTIAL QUALIFICATION** | Utilité cognitive comparée, clarification, état propositionnel, erreurs |
| Création/idempotence | **CODE INSPECTED + HISTORICAL PG** | Crash puis reprise, ACK perdu, retry concurrent, cross-preparation |
| Premier document + continuité | **HISTORICAL PARTIAL** | Relier aux garanties et preuves propriétaires D3/D4 de ML2 |
| UX | **F2/G5 NOT RUN** | Paires Figma/runtime, variantes et viewports, preuve navigateur réelle |
| Deux écarts code | **KNOWN GAP — SOURCE** | Examiner impacts et preuves de reproduction avant arbitrage ML4C |

**Prochaine analyse cohérente :** D1 ligne par ligne (49 historiques + six candidats), puis D2 (54 historiques + six candidats), suivis des interfaces et de l'E2E01. La documentation est capitalisée au fil de ML4B, sans nouveau macro-lot ni PR par constat.

**Verdict de cette publication :** `ML1 INVENTORY 103 + 12 CANDIDATE IDENTIFIED / INITIAL SOURCE CODE REVIEW / TWO SOURCE GAPS / HISTORICAL QA PRESERVED / PER-ID REVIEW INCOMPLETE / F2-G5 NOT RUN / NO CP1 GATE`. Aucun correctif, PR, merge, test ni adoption n'en découle.

## 8. Mise à jour — revue individualisée D1 au même SHA (2026-11-10)

La [vérification détaillée des 55 RG/PF D1](verification-detaillee-acces-portefeuille.md) complète le premier inventaire de ce document **sans annuler les observations initiales**. L'ensemble comprend **25 RG + 24 PF validés** et **3 RG + 3 PF candidats**, chacun rapproché de mécanismes de code, tests disponibles et limites de preuve. La revue ne prétend pas avoir exécuté les scénarios au SHA.

**Constats D1 à présent suivis :** `D1-GAP-01` (statuts de projets par index, reprend GAP-01), `D1-GAP-02` (erreurs 401 génériques du sas, reprend GAP-02 et étend l'analyse aux GET/PATCH), `D1-GAP-03` (message brut d'exception potentiellement transmis au client depuis le portefeuille), `D1-GAP-04` (erreurs Better Auth non classées pouvant être assimilées à session absente), `D1-GAP-05` (libellé « Connecté » lié à la route plutôt qu'à une preuve de session).

Les trois derniers ne prouvent **ni exploitation, ni fuite de données observée, ni incident réel**. Les niveaux de confiance et vérifications nécessaires sont dans l'annexe. La conformité D1 reste **PARTIAL/NOT FULLY PROVEN**, et F2/G5 demeure **NOT RUN**.

**Suite :** analyse D2 individualisée (54 références historiques, six candidates) dans ce même dossier ML4B ; ensuite interfaces et E2E. Aucun GO code, PR, merge, promotion ou gate B implicitement acquis.

## 9. Mise à jour — revue individualisée D2 (2026-11-10)

La [revue D2 des 60 références](verification-detaillee-sas-creation-continuite.md) complète [la revue D1 des 55 références](verification-detaillee-acces-portefeuille.md). La traçabilité couvre désormais **103/103 RG/PF historiques validés et 12/12 références candidates distinctes** ; cela signifie **inventorié et rapproché du code**, pas **103 fonctionnalités conformes** ni 115 tests exécutés.

**Résultat D2 — qualification différenciée :**

- `D2-GAP-01` : `POST create-project`, `GET reconcile` et autres routes du sas convertissent erreurs non-authentification en HTTP 401. Prolongement de `D1-GAP-02`, pas anomalie de production supplémentaire indépendante.
- `D2-GAP-02` : commande et API de réconciliation existent, mais `createProject()` navigateur ne les relie pas et n'a pas de traitement `catch/finally` pour les erreurs de transport ou de parsing. Réserve historique A05 non levée.
- `D2-GAP-03` : `updatePreview` ne fait pas de compare-and-swap atomique sur `creationRevision` ; risque concurrentiel **non reproduit**.
- `D2-GAP-04` : la création de préparation puis de conversation utilise deux insertions séparées ; possibilité conditionnelle d'une préparation orpheline **non reproduite**.
- `D2-GAP-05` : création D2 validée séparément de la continuation cognitive D3/D4, frontière de restitution et de reprise à vérifier ; **pas un défaut prouvé par ce seul code**.

**Preuves historiques préservées :** succès DB de création/idempotence/contexte, navigateur FAKE et Nora LIVE borné. Absence de reprise navigateur après perte ACK, d'injection de crash/restore, de qualification complète des interfaces D3/D4/D5–D9 et de comparaisons Figma/runtime.

**État ML1 à cette date :** `115/115 R2 IDS SOURCE MAPPED / BEHAVIOR PROOF INCOMPLETE / E2E01 AND UX TO RECONCILE / NO CP1 GATE`. Poursuivre par une consolidation des frontières D1–D4 et E2E01 avant tout bilan de conformité ; aucune correction produit, PR, merge ou décision d'adoption induite.
