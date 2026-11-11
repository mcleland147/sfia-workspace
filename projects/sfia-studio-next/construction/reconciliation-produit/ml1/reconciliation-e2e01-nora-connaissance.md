# SFIA Studio Next — ML4B / ML1 : réconciliation E2E01 et interfaces Nora–connaissance

**Type :** diagnostic documentaire de **capacité transverse** ; aucun texte normatif nouveau, aucun verdict d'adoption.
**Date :** 2026-11-10. **Références :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` (source code et contrats) ; `docs/next-reconciliation-produit-ml1-20261110` (capitalisation).
**Statut :** `E2E01 SOURCE-TO-CONTRACT RECONCILED / CODE INSPECTED / HISTORICAL PROOFS QUALIFIED / LIVE E2E AND FIGMA BROWSER NOT RUN / CP1 IN PROGRESS`.
**Session navigateur, worktree local et base runtime : NON OBSERVÉS.** Pas de réexécution de test dans cette revue.

[ML1 — Diagnostic de référence](diagnostic-acces-preparation-creation.md) · [D1 — 55 références](verification-detaillee-acces-portefeuille.md) · [D2 — 60 références](verification-detaillee-sas-creation-continuite.md) · [ML4B](../README.md).

## 1. Résultat et responsabilités

**Contrat fondateur validé par Morris :** [Vision R1 §2.30, E2E 01](../../../cadrage/vision-produit.md) : le Pilote accède à ses projets, ouvre un **sas récupérable avant création**, reçoit l'aide utile et autonome de Nora, dispose d'un aperçu non autorisant, crée un projet **par acte dédié**, reprend le **même fil visible** et peut poursuivre **sans cycle ni dépôt Git imposé**. Options de reprise, échecs, doublons, réauthentification, sources et rattachement doivent être prouvés.

Cette réconciliation s'appuie sur les **115 IDs propriétaires D1/D2 déjà inventoriés**, puis cherche les **interfaces pertinentes** des deux autres propriétaires, sans les compter deux fois ni prétendre auditer intégralement ML2 :

- **D1** : [Accès et portefeuille](../../../conception-fonctionnelle/acces-et-portefeuille.md), identité et navigation, `RG-ACC-001..025` et PF associés.
- **D2** : [Création et continuité du sas](../../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md), `RG-CRE-001..027` et `PF-CRE-01..27`, plus addenda candidats.
- **D3** : [Contexte, méthode et conduite gouvernée de Nora](../../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), en priorité `RG-CONV-001..006`, `RG-CTX-001..008`, `PF-01/03/18/24/25` ; qualité et usage de sources relèvent toujours de D3.
- **D4** : [Connaissance, sujets et continuité](../../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), en priorité `RG-KNOW-001..015`, `016..020`, `PF-KNOW-02/06/07/10/11` ; sélection et écriture ont une frontière D3/D4.
- **D5/D6/D9** : invariants **négatifs**, non-autorisation d'un cycle, mandat ou Git par la seule création, avec droit de lecture Git uniquement si l'accès réel existe.
- **R3** : [As-built G4](../../convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md) identifie les frames de parcours, mais `F2/G5 NOT RUN`.

**Frontière de périmètre :** on qualifie l'expérience ML1 avec ses interfaces. L'analyse exhaustive de la **mémoire vivante D4** et des **capacités conversationnelles D3 construites dans ML2** demeure une activité ML4B propriétaire de ML2, plus large que cet E2E01.

## 2. Reconstitution E2E01 : six étapes de R1, résultats et preuves

| Étape R1 | Résultat métier contractuel | Traduction R2/R3 et code intégré | Preuve historique disponible | Qualification actuelle |
| --- | --- | --- | --- | --- |
| **1. Portefeuille personnel** | GitHub Studio personnel, projets et entrée création, sans Nora globale | D1 `RG-ACC-001/008/009/013/017`; [`auth.ts`](../../../web/src/lib/auth.ts), [`portfolio.ts`](../../../web/src/domains/identity/portfolio.ts), [`portfolio/page.tsx`](../../../web/src/app/portfolio/page.tsx). Frames `94:50, 158:264/336/912` | OAuth LIVE borné recette ML1 ; PG identité/owner ; BROWSER FAKE ML1 / G4 | **IMPLEMENTED SOURCE**, preuves limitées ; D1-GAP-01 statuts non sourcés ; fidélité Figma NON PROUVÉE |
| **2. Sas de travail utile** | Exploration libre, questions proportionnées, sources autorisées, sans projet ni cycle | D2 `RG-CRE-001/002/004/006/007` ; D3 `RG-CONV-001..005`. [`preparation/service.ts`](../../../web/src/domains/preparation/service.ts), [`conversation/service.ts`](../../../web/src/domains/conversation/service.ts), [`nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts). Frame `94:135` | A01 PG/FAKE PASS ; A02 Nora LIVE API borné ; G4 chat-first FAKE ; pas d'évaluation cognitive E2E comparative | **DURABILITÉ SOURCE** ; **QUALITÉ COGNITIVE PARTIAL/NOT PROVEN**, consultation Git pré-projet NON ÉTABLIE |
| **3. Aperçu propositionnel** | Nom, finalité, contraintes, points ouverts, trajectoire éventuelle non décisionnelle | D2 `RG-CRE-003/005/016` ; D3 `RG-APP-001/003` ; D4 `RG-KNOW-001/005`. [`updatePreview`](../../../web/src/domains/preparation/service.ts), [`PreparationProposal.tsx`](../../../web/src/components/figma/PreparationProposal.tsx), [`knowledge/service.ts`](../../../web/src/domains/knowledge/service.ts) | A06 révision stale de **création** PG ; navigateur FAKE proposition ; pas d'oracle LIVE de pertinence/provenance | **APERÇU EN CODE** (nom/résumé, points ouverts) ; **complétude sémantique et concurrence PATCH** à qualifier, D2-GAP-03 |
| **4. Création autorisée** | Clic explicite, propriété, résultat DB vrai, un seul projet, aucun dépôt/cycle/mandat | D2 `RG-CRE-008..014/024/025`, D1 propriété ; [`create-project.ts`](../../../web/src/domains/preparation/create-project.ts), [route dédiée](../../../web/src/app/api/preparations/[preparationId]/create-project/route.ts), bouton [`PreparationProposal`](../../../web/src/components/figma/PreparationProposal.tsx) ; mission D2 [`intent-conduction.ts`](../../../web/src/domains/conversation/intent-conduction.ts) | A03/A04/A06/A10/A12 PG + FAKE PASS ; A05 et A15 PARTIAL ; tests scripted plus récents sur binding de mission, pas preuve navigateur LIVE complète | **TRANSACTION ATOMIQUE/IDEMPOTENTE SOURCE** ; **transport/erreurs/reprise UI NON PROUVÉS**, D2-GAP-01/02 |
| **5. Continuité sas → projet** | Même conversation visible, documents et informations utiles avec origine, sans résumé obligatoire | D2 `RG-CRE-017..020/022..024/027`; D3 `RG-CTX-001..003/006`; D4 `RG-KNOW-002/006/011/015..019`. [`project-context.ts`](../../../web/src/domains/preparation/project-context.ts) retrouve fil/documents/sujets via préparation, [`create-project.ts`](../../../web/src/domains/preparation/create-project.ts) attache dans TX, [`projects/:id/page.tsx`](../../../web/src/app/projects/[projectId]/page.tsx) | A07/A08 PASS PG et BROWSER FAKE ; Q19/Q20 ML2 PG/FAKE ciblés ; A13 sélection sémantique non prouvée à l'origine | **MÊME FIL DURABLE SOURCE + FAKE** ; pertinence réelle D3/D4, versions, droits et marqueur Figma **à prouver** |
| **6. Reprise libre après création** | Nora continue sans cycle obligatoire ; recommandations et trajectoire ne sont pas GO | D2 `RG-CRE-005/014/021/026` ; D3 `RG-CONV-002/005`, D5/D6 et D9 séparés. [`nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) distingue conseil et autorité ; [`postUserMessageAndNora`](../../../web/src/domains/conversation/service.ts) utilise contexte réel | A15 négatif ML1 PARTIAL ; tests PG de continuité multi-domaines et G4 FAKE ; Nora LIVE générale non qualifiée sur parcours complet | **IMPLÉMENTATION PARTIELLE ET INVARIANTS DE CONCEPTION**, aucun PASS E2E01 LIVE couvrant autorité + mémoire + UX |

**Point méthodologique :** un `PASS` A07 sur identité du fil ne prouve pas `RG-CTX-002` (sélection pertinente) ; l'existence de `SELECT` PostgreSQL ne prouve pas une mémoire vivante cognitive ; un écran `data-figma-frame` n'est pas un oracle de fidélité R3.

## 3. Exceptions de R1 §2.30 : qualification transversale

| Exception contractuelle | Mécanismes et oracles | Niveau constaté | Delta à démontrer |
| --- | --- | --- | --- |
| Quitter/revenir au sas **avant création** | `OPEN` + owner/ID, portefeuille reprenable ; A01/A16, G4 reprise `GET` sans `POST` | Code + PG + BROWSER FAKE bornés | Retour après fermeture navigateur, expiration, interruption en cours d'INSERT ; D2-GAP-04 |
| Double clic et commandes concurrentes | Lock `pilotId + key`, fingerprint, CAS création ; A04 et replay A05 | **PG historique PASS** sur concurrence, A05 **PARTIAL** | ACK perdu/restart réel ; navigateur appel `/reconcile`, D2-GAP-02 |
| Enregistrement refusé ou échoué | Commande refusée vs `CREATED`, classifieur HTTP séparé | PG négatifs ; plusieurs handlers `401` trompeurs **source** | Injecter panne DB et qualifier HTTP/UX sans fausse expiration, D2-GAP-01 |
| Session expirée ou Pilote différent | Auth + `ownerPilotId`; A10, deux Pilotes en PG/FAKE | Source/PG/BROWSER FAKE historiques | Expiration **pendant** commande, reprise après reconnexion, lane réelle, droits D4/Git |
| Suite du même projet, sans décision implicite | `conversations.projectId` fixé dans TX ; D4 + D6 distincts ; A07/A13/A15 | Identité du fil PG/FAKE ; mémoire/autorité **partielles** | Tester conflit de sources, points ouverts, décision humaine non promue, absence de cycle |
| Git absent ou inaccessible | Commande D2 sans lien dépôt ; consultation Git conditionnée par droits réels | **Pas de Git exigé pour créer**, code vérifié | Lire Git autorisé **avant** projet, refus actuel et usage sourcé, sans inventer d'accès |

## 4. Frontière D3 ↔ D4 : fonctionnement effectivement intégré

### 4.1 Persistance du fil distincte de la pertinence des souvenirs

- [`listMessages`](../../../web/src/domains/conversation/service.ts) retourne les messages du même `conversationId`; [`getOwnedProjectContext`](../../../web/src/domains/preparation/project-context.ts) réouvre avec `projectId` propriétaire et le `preparationId` associé. **C'est la continuité de l'historique visible**.
- Pour un nouveau tour, [`postUserMessageAndNora`](../../../web/src/domains/conversation/service.ts) fournit au modèle les **six derniers messages COMPLETE précédents**, limités à **200 caractères chacun**, puis les `knowledgeSnippets` sélectionnés et **cinq références de documents** ; la liste initiale de documents fournit essentiellement identité/titre/version/statut, pas nécessairement leur contenu.
- [`selectRelevantKnowledgeContext`](../../../web/src/domains/knowledge/service.ts) sélectionne un sous-ensemble d'acquis/points ouverts/sujets par classement **lexical borné** ; le résultat porte explicitement `selectionMethod: lexical-heuristic`. Ce mécanisme n'est ni nul ni une preuve d'une récupération adéquate lors d'un sujet reformulé/indirect.
- [`d4-read-tools.ts`](../../../web/src/domains/conversation/d4-read-tools.ts) apporte une **recherche supplémentaire et une lecture ciblée de révision** sous identité/portée serveur et budgets, avec statuts de couverture. [`nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) les propose à Nora selon la politique d'outils, **sans garantie que le modèle les appelle correctement en LIVE**.

**Qualification :** la reprise technique de la conversation et l'existence d'outils D4 sont des acquis. Le critère **R1 « mémoire utile sans transcript intégral »** demande une preuve de récupération *pertinente, exacte et actuelle* sur une question ancienne et reformulée, avec provenance et accès courant ; A13 initialement PARTIAL. [La matrice ML2](../../ml2-production-et-capitalisation-nora/matrice-tracabilite.md) rapporte Q19/Q20 couverts en PG/FAKE, et des essais LIVE bornés avec outils D4, mais **pas de preuve d'E2E01 LIVE complet ni comparatif cognitif consolidé**.

### 4.2 Capitalisation automatique : capacité réelle mais sélection sémantique limitée

- [`maybeCapitalizeFromExchange`](../../../web/src/domains/knowledge/service.ts) fonctionne après une réponse `COMPLETE`, avec verrou de propriété de tour et provenance `userMessageId/generationId`; absence de mutation D6 par cette voie.
- Son déclenchement inspecté utilise des **regex et signaux lexicaux** : thème nommé, comparaison/options, demande explicite de capitaliser, formulations précises `point ouvert` / `à clarifier`. Les acquis auto sont conservés comme **HYPOTHESIS/RECOMMENDATION**, pas FACT sans preuve.
- Cela ne démontre pas l'autonomie sémantique élevée de R1 §§2.8–2.12 (sujets vivants, émergence progressive, rappel opportun des points ouverts). L'algorithme peut manquer une question implicite ou un acquis important sans ces marqueurs ; **hypothèse raisonnable fondée sur le code, pas taux de rappel mesuré**.
- D4 possède également des fonctions transactionnelles **`ensureSubject/renameSubject/mergeSubjects/splitSubject`** et provenance/journal d'événements. Leur existence ne prouve pas que **Nora décide spontanément et pertinemment** du bon moment pour fusionner/scinder sans administration du Pilote. Cela relève du diagnostic ML2.

### 4.3 Sources Git avant création : asymétrie de capacité à vérifier

- **Contrat R1/R2 :** une source Git pertinente et **déjà autorisée** peut être consultée dans le sas sans créer de dépôt ni rattachement forcé (`RG-CRE-006/022`, `PF-CRE-05/20` et vision R1 §2.20).
- **Chemin D3 examiné :** [`nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) construit toujours des outils D4 bornés à `pilotId/preparationId`, mais n'ajoute les outils **`buildNoraGitReadTools` que si `input.toolScope.projectId` existe**. Avant création, le sas n'a par contrat **pas de `projectId`**.
- **Observation :** **aucune lecture Git par le chemin Nora LIVE inspecté avant projet n'est démontrée** ; la consultation d'un dépôt après création ne résout pas automatiquement le besoin pré-création. Ne pas en déduire que *toutes* les autres interfaces Git du produit sont absentes ni que Git devrait devenir obligatoire.
- **Prochaine preuve discriminante :** une source Git déjà accessible au Pilote en sas, autorisation actuelle, trace de lecture et référence/version citée dans la réponse, sans commande d'attachement ni création de projet.

### 4.4 Continuation d'une intention composée : projet réussi ≠ mission totalement réalisée

- [`authorizeMissionBoundD2Create`](../../../web/src/domains/conversation/intent-conduction.ts) vérifie `clientIntentKey` et projet/nom attendus **côté serveur avant la mutation** ; la commande classique sans mission reste D2 seule.
- La [route de création](../../../web/src/app/api/preparations/[preparationId]/create-project/route.ts) peut appeler `continueAfterProjectCreated` **après** un `CREATED/ALREADY_CREATED` ; l'échec de continuation laisse le projet créé mais `missionContinue.continued=false`. [Les tests scripted](../../../web/tests/integration/intent-continuity-global.pg.test.ts) visent continuation D2→D4, unicité, récupération et cross-mission.
- Un projet effectivement créé est une **vérité D2**, pas la certification qu'un document demandé dans la même intention a été produit et sauvegardé. La restitution navigateur/Nora doit distinguer **résultat D2** et **reste D3/D4**, avec reprise durable.
- **Statut :** mécanismes et tests PG présents ; scénario LIVE Pilote « crée le projet puis prépare le document » interrompu à plusieurs étapes **non prouvé de bout en bout** par cette revue.

## 5. Registre des découvertes E2E01 / D3-D4 (pas de création de tickets séparés)

| ID de diagnostic | Qualification | Contrat touché | Fait, portée et mesure restante |
| --- | --- | --- | --- |
| **E2E01-COV-01** | **KNOWN LIMITATION — SOURCE** | `RG-CTX-002/006`, `RG-KNOW-001/011/015`, `PF-KNOW-10` | Six messages tronqués + D4 sélection lexicale + outils ciblés : la mémoire fonctionne partiellement, mais **pertinence sémantique/points ouverts spontanés non certifiés**. Requête ancienne reformulée et sources contradictoires à tester en LIVE. **Interface ML2**, pas défaut D2 seul. |
| **E2E01-COV-02** | **SOURCE BOUNDARY / COVERAGE TO VERIFY** | `RG-CRE-006/022`, `PF-CRE-05/20`, R1 §2.20 | Outils Git Nora ajoutés seulement avec `projectId`; aucun trajet de consultation Git pré-projet prouvé dans l'adaptateur examiné. Vérifier existence d'un autre parcours autorisé avant d'ouvrir une correction. |
| **E2E01-COV-03** | **INTEGRATION / PROOF GAP** | `RG-CRE-017..024`, `RG-CTX-006`, `RG-KNOW-015/019` | Identité du fil et documents vérifiés PG/FAKE, mais continuité E2E avec source D4 ancienne, interruption, relecture et restitution cognitive LIVE non réalisée globalement. |
| **E2E01-COV-04** | **COMPOSITE MISSION / PROOF GAP** | `RG-CRE-010/020/024`, `RG-CONV-006`, `RG-KNOW-018` | D2 `CREATED` et D3/D4 `CONTINUE_FAILED` sont distincts ; besoin d'une restitution/reprise discriminante. Tests PG scripted ne valent pas scénario navigateur LIVE. |
| **E2E01-COV-05** | **VISUAL PROOF GAP** | R1 E2E01 et R3/G4 `94:50/135/214/370`, `158:912`, `159:145` | 19/20 frames déclarées transposées dans G4, **F2/G5 NOT RUN** ; aucune comparaison frame native ↔ capture navigateur au même état/SHA. Pas de « 19 écrans conformes ». |

**Ne pas ajouter les défauts déjà consignés :** D1-GAP-01 (statuts inventés), D1-GAP-02 / D2-GAP-01 (401 technique), D2-GAP-02 (ACK/reconcile UI), D2-GAP-03/04 (races et atomicité) et D2-GAP-05 (continuation composite) restent leurs **références existantes**. Les repères E2E01 sont des **écarts de couverture/transversalité**, non des bugs supplémentaires prouvés en runtime.

## 6. Contrat de preuve intégrateur pour finaliser ML1 dans ML4B

| Parcours probatoire cohérent | État attendu et vérifications | Source de preuve nécessaire | Statut actuel |
| --- | --- | --- | --- |
| **A. Sas récupérable** | Premier échange libre, quitter/revenir, même `preparationId/conversationId`, pas `projectId`, pas D5/D9 | BROWSER + PG au SHA, éventuellement OAuth LIVE pour session | Historique PG/FAKE borné, reprise après crash/expiration non prouvée |
| **B. Nora libre et utile** | Explication, comparaison et clarification proportionnée sur demande non triviale, sans cycle | Nora LIVE, évaluation qualitative comparable, contexte/sources accessibles | LIVE borné pour une interaction ; niveau cognitif complet NON PROUVÉ |
| **C. Création idempotente et reprise** | Double clic, ACK perdu, session incertaine, pas doublon et UI rend le vrai résultat | PG concurrent + HTTP fault injection + BROWSER reprise | PG réalisé historiquement ; ACK/reconcile navigateur non prouvé |
| **D. D2→D4, même fil** | Un document du sas garde son ID/version et sa provenance ; Nora retrouve un acquis hors six messages et répond utilement après nouvelle session | PG + BROWSER + Nora LIVE + contrôle des références D4 | Fil/doc PG/FAKE et sélection PG ; **scénario unique complet non prouvé** |
| **E. Autorité et sources** | Aucun cycle/CKI/mandat/Git créé implicitement ; source externe autorisée/révoquée/hostile gérée sans transfert de droits | Négatifs multi-domaines + lane + DB/Git REAL selon droit | A15 PARTIAL historique ; nouvelles interfaces ML3/ML4 non toutes requalifiées |
| **F. Figma / expérience vécue** | Captures comparables (même viewport, données, route, états), erreurs et reprise ; cohérence UX, typographie, rails, transitions | Figma natif/export + BROWSER SHA figé, verdict Morris | **NOT RUN** |

**Sortie de ce diagnostic :** `E2E01 SOURCE MAPPED WITH SIX NOMINAL STEPS + SIX EXCEPTIONS / D3-D4 INTERFACES REVIEWED / FIVE TRANSVERSE COVERAGE FINDINGS / NO LIVE END-TO-END PROOF / NO VISUAL VERDICT / NO CP1 EXIT`.

Ce document **n'autorise ni correction technique, ni changement de R2, ni verdict de conformité ML1, ni PR, ni merge**. Il prépare la consolidation du diagnostic ML1, puis l'étude des macro-lots ML2–ML4 dans ML4B avec un seul gate Morris B.
