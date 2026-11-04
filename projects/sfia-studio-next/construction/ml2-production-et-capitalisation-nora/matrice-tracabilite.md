# SFIA Studio Next — R5 / ML2 — Matrice de cohérence et d'acceptation candidate
## Produire et capitaliser avec Nora — R1 → R2 → R3 → R4 → R5 / QA / évaluation cognitive

**Statut : DOCUMENTED / QUALIFICATION D0 — MATRICE CANDIDATE v0.5 / NOT TESTED / NOT VALIDATED SPEC.** Ce document trace les liens à instruire avant le code. Il ne prétend pas que les scénarios sont implémentés, exécutés ou acceptés. Le **principe d'évaluation comparative ChatGPT–Nora** est approuvé par Morris dans son ambition (2026-11-04) et canonisé dans la référence R5 §14 ; les scénarios ML2 et les oracles détaillés restent des propositions de travail.

| Champ | Valeur |
| --- | --- |
| Référentiel Git source | mcleland147/sfia-workspace, main@9cd7a6c751f46d1be000d33a810fc9c344476ffc ; clarifications R1/R2/R3 D2 encore candidates |
| Candidate Git | docs/next-ml2-knowledge-scope-20261104 — **non mergée** |
| Spécification sœur | specification-technique.md, état D0 candidate |
| Sources R1 | cadrage/vision-produit.md §§1–2, 2.8, 2.13–2.15, 2.20, 2.32 (E2E 03), 2.33 (E2E 04), 2.40–2.41 |
| Sources R2 | contexte-et-conduite-gouvernee-de-nora.md (D3), connaissance-sujets-et-continuite-du-projet.md (D4), creation-de-projet-et-continuite-du-sas.md (D2) |
| Sources R3 | ux-ui/espace-projet-interaction-pilote-nora.md ; audit-couverture-ux-r3.md ; contrat-transposition-figma-code.md ; Figma itgvCulInEnFY6DvgIegvP |
| Sources R4 | architecture-technique/cadrage-r4.md §§5.3–5.5 ; décision R4-01/02 ; QA A01–A16 et B01–B18 **ciblés**, pas exhaustivement consommés |
| Réserve ML1 reportée | A13 récupération sélective non prouvée ; A05/A15/A16/DATA-01 restent avec leurs gates respectifs ; CI Next avant livraison significative |
| Type d'évidence | Références R1–R4 = conception ; code ML1 = IMPLEMENTED borné ; toutes les preuves ML2 ci-dessous = **NOT RUN** |

## 1. Couverture de capacités — contrats, interfaces et points de preuve

**Convention :** « produit » ci-dessous désigne une capacité de ML2, non un objet de code. Un contrat possède une responsabilité canonique, même s'il est consommé par plusieurs surfaces. Les références Figma correspondent à des identifiants documentés ; l'accès live aux propriétés natives et aux snapshots sera revérifié avant le code UX concerné.

| ID de traçabilité | Capacité / oracle utilisateur | R1 / E2E | R2 : identifiants canoniques | UX R3 : références documentées | R4 / As-Built | QA ML2 | Propriétaire / état |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ML2-COH-01 | Comprendre une intention et investiguer sans formulaire | E2E 03, §2.32 | D3 RG-CONV-001..006 ; RG-CTX-001..003 ; PF-24/25 | 03 Conversation (94:214), activité 206–217 | R4 §5.3 D3 ; nora-adapter.ts | Q01, Q02, COG-01/02 | D3 ; MAPPED / NOT TESTED |
| ML2-COH-02 | Challenger, comparer et conclure sans inventer de preuves | E2E 03 | D3 RG-APP-001/002/005/008 ; RG-CONV-001/006 ; PF-24 | 03, variantes 109–134 | D3 + R4 §5.5 ; résultat LIVE borné ML1 | Q01, Q03, COG-02/03 | D3 ; MAPPED / NOT TESTED |
| ML2-COH-03 | Rendu adaptatif, Markdown sûr et activité honnête ; streaming **à tenter, non bloquant** | E2E 03, §2.32 | D3 RG-CONV-006, RG-UX-001..003, RG-DOC-003 ; PF-24/29/33 | 03 (94:214), 04 (94:370), 206 (281:389) ; R3 activité/STOP si supportés | UX riche absente ML1, réponse finale sans streaming ; R4 §5.3 | Q04/Q05/Q25, Q29 si réalisé, COG-01 | D3/UX ; streaming recherché en ML2 avec dette/exit si report Morris |
| ML2-COH-04 | Distinguer réponse de chat et document demandé | E2E 03 + R1 §2.41 | D3 RG-DOC-001/002/010 ; PF-28/29 | 03 (94:214) → demande 118 (161:864) → 04 (94:370) | R4 D3/D4 ; document service ML1 | Q06, Q07, Q27, COG-04 | D3→D4 ; MAPPED |
| ML2-COH-05 | Produire un brouillon effectivement sauvegardé | E2E 03/04 + R1 §2.41 | D3 RG-DOC-002/004/009 ; D4 RG-KNOW-016/018/020 ; PF-28/34 ; PF-KNOW-11 | 04 (94:370), 118 (161:864), Inspection | D4 documents/revisions et statuts existants ; extension à faire | Q07, Q08, Q09, Q27 | D4, D3 consommateur ; GAP |
| ML2-COH-06 | Révision ciblée non destructive, concurrence gérée | E2E 03/04 + R1 §2.41 | D3 RG-DOC-005..007 ; D4 RG-KNOW-017/018 ; PF-30 ; PF-KNOW-12/14 | 04 (94:370) → 18 (97:359) → 205 (241:385) | R4 modèle d'identités et versions ; contrôle de base non implémenté ML1 | Q10, Q11, Q12, Q27, COG-04 | D4 écrit, D3 propose ; GAP |
| ML2-COH-07 | Inspection et retour fiable au fil/origine | E2E 03/04 + R1 §2.41 | D3 RG-DOC-008 ; RG-UX-004..006/009 ; PF-31/35 | 03 (94:214), 04 (94:370), 18 (97:359), 205 (241:385) ; transposition §4 | R4 UX / pas de transfert d'autorité | Q13, Q14, Q27 | UX consommateur D3/D4 ; GAP |
| ML2-COH-08 | Capitaliser **proactivement et sélectivement** l'information utile, avec provenance | E2E 04, §§2.8/2.33 | D4 RG-KNOW-001/002/005..010 ; PF-KNOW-01/04/09 ; D3 RG-CTX | Journal Sujets 05 ; 89–108 | R4 §5.3 D4, index dérivé non autorisant | Q15, Q16, Q28, COG-03 | D4 ; **SCOPE VALIDATED MORRIS / NOT TESTED** |
| ML2-COH-09 | **Sujets/sous-sujets réorganisables et points ouverts transversaux** ; identité/liens/histoire conservés | E2E 04, §§2.11/2.33 | D4 RG-KNOW-003/004/007/009 ; PF-KNOW-03/04/08 | Journal 05 (94:515) ; Sujets 160:751 ; renommage 160:823 ; regroupement 160:895 ; points ouverts 160:967 | R4 D4 / interface D6 : pas d'autorité dans D4 ; UX séparation de sujets à vérifier | Q17, Q18, Q28 | D4 ; **SCOPE VALIDATED MORRIS / UX CONTRACT TO QUALIFY** |
| ML2-COH-10 | **Reprise du même fil de projet et récupération sélective D4** après fermeture, changement de sujet ou transition de cycle | E2E 01/04, §§2.20/2.31/2.33 + R1 §2.41 | D3 RG-CTX-002/006/008 ; D4 RG-KNOW-011/012/015/019 ; PF-03, PF-KNOW-02/10/11 | projet/reprise 14 (96:370), fil 03 (94:214), Journal 05 (94:515), **pas de gestionnaire multi-chat** | R4 A13 ; ML1 fil unique issu du sas, contexte six derniers messages ; sélection D4 absente | Q19/Q20/Q27/Q28, COG-05 | D3 fil, D4 contexte, D1/D2 accès, D5 cycle unique ; **SCOPE CORRECTED MORRIS / NOT TESTED** |
| ML2-COH-11 | Provenance, fraîcheur et contradiction | E2E 03/04, §2.13 | D3 RG-APP-001/002/005/007/008 ; D4 RG-KNOW-006..009/012/013 ; PF-04 ; PF-KNOW-04/05/07 | Sources dans réponse/Inspection ; états d'absence | R4 version/ref, D4 une seule vérité | Q03, Q16, Q21, COG-03/06 | D4 source + D3 usage ; GAP |
| ML2-COH-12 | Absence de fuite entre projets / droits actuels | E2E 04, §2.15 | D4 RG-KNOW-002/014/020 ; PF-KNOW-06/07/13 ; D3 PF-15 | Inspection refus / source indisponible | R4 A10/A11 et ADR R4-01 ; A11 Git ML4 | Q22, Q23 | D1/D4 ; MAPPED / limites Git OUT |
| ML2-COH-13 | Aucun acte HumanDecision, cycle ou Git déduit du dialogue | E2E 03/04 + interfaces E2E 05/07 | D3 RG-AUTH-001..005, RG-DOC-010 ; D4 RG-KNOW-010 ; PF-26 | Nora 03, Inspection, retour au fil | R4 A15, B01/B18 ; futur D6/D7/D9 | Q24, COG-07 | D3/D4 ; interdiction transversale |
| ML2-COH-14 | Continuité du document sas → projet | E2E 01/04, §2.20 | D2 RG-CRE-027, PF-CRE-27 ; D4 RG-KNOW-016..020, PF-KNOW-10 | sas 02, projet 03, document 04 | R4 A08/A09 ; ML1 identités persistantes | Q08, Q20 | D2 propriétaire transition ; régression |
| ML2-COH-15 | Dégradation provider/DB honnête, pas de faux succès | E2E 03/04 | D3 RG-DOC-009 ; RG-CONV-006 ; D4 RG-KNOW-013/015/018 ; PF-34 | loading/unknown et activité 206–217 | R4 A09/A16, DATA-01 ; ML1 statuts déjà présents | Q09, Q12, Q25, COG-06 | D3/D4 ; GAP / partial upstream |
| ML2-COH-16 | Liens réellement disponibles et pas de navigateur embarqué | E2E 03 ; R1 §2.41 | D3 RG-UX-007/008 ; PF-32/33 | 03/04/Inspection | R4 navigateur externe, lecture Git D9 hors ML2 | Q05, Q26 | D3/UX ; MAPPED |
| ML2-COH-17 | Qualité cognitive comparée ChatGPT ↔ Nora | E2E 03/04 ; vision R1 §1–2 | Ensemble pertinent D3/D4 selon chaque scénario ; pas de nouvelle RG | UX selon scénario ; aucune maquette créée pour tester | R5 global §14 ; preuve LIVE distincte de FAKE | COG-01..07, Q01/Q19 | ChatGPT évalue ; Morris accepte |

**Exhaustivité :** ce tableau n'est pas une certification RG/PF individuelle complète. À la revue de spécification, produire un contrôle explicite d'inclusion/exclusion des ensembles D3/D4 applicables, qualifier toute règle sans oracle et conserver les interfaces D1/D2/D5/D6/D7/D8/D9 hors scope. **Le référentiel R2 demeure propriétaire du texte des règles** ; le présent tableau n'en crée aucune.


### 1.0. Arbitrage Morris acquis sur les frontières de connaissance — 2026-11-04

**VALIDÉ EN PÉRIMÈTRE, NON PROUVÉ EN CODE :** ML2 regroupe un unique résultat de mémoire vivante : **Sujets/sous-sujets**, **Acquis**, **Points ouverts**, **Documents** et **Reprise cognitive au fil des échanges du même projet**. D4 garde la vérité des connaissances et documents ; D3 conduit les échanges et exploite le contexte ; D6 reste propriétaire des décisions et de leur validité (fonctionnalité ML3 hors ML2). Ne pas faire un outil autonome de fiches, une vue permanente « Réserves/Recommandations » ni un moteur de mémoire bis.

**Compris en ML2 :** sélection proactive proportionnée par Nora (sans formulaire systématique), organisation/renommage/déplacement/regroupement-fusion/séparation des Sujets, points ouverts accessibles indépendamment de leur sujet, historique/provenance et gestion des contradictions, inspection du Journal et reprise d'un échange ultérieur dans le même fil, y compris après nouvelle session. Toute mutation structurante doit rester lisible, traçable et réversible lorsque pertinent, sans confirmation rituelle pour les gestes simples.

**Invariants négatifs :** ni création d'une HumanDecision par résumé, ni élévation de droits, ni duplication de vérité, ni déclaration de capitalisation ou de fusion non committée. Une source plus récente peut résoudre une question factuelle, mais pas lever seule une réserve gouvernée.

**Chaîne de preuve :** Q15/Q16/Q17/Q18/Q19/Q20 + **Q28 E2E** constituent une seule capacité cohérente ; reprise et évolution de Sujets ne sont pas considérées couvertes par le seul écran Journal. Les scénarios COG-03 et COG-05 évaluent la valeur cognitive en complément des observations DB/BROWSER, pas à leur place.

**Non décidé ici :** tables/API, pipeline d'indexation, seuil exact de pertinence, mutations UX Figma natives et options streaming. La spec technique §6.4.1 fournit le contrat de travail détaillé, sans réécrire les RG/PF validés.

### 1.1. Liaison explicite aux parcours produit, aux tests et à la conception Figma

| Parcours à démontrer | Source R1 et contrats R2 propriétaires | Figma R3 et action réellement attendue | QA et gap à ne pas masquer |
| --- | --- | --- | --- |
| **P1 — Demande documentaire** | R1 §2.40–2.41 ; D3 RG-DOC-001..004 ; D4 KNOW-016/018 | Conversation 03 (`94:214`) → demande 118 (`161:864`) → document 04 (`94:370`) seulement après enregistrement D4 | Q06–Q09 ; statut « généré » distinct de « conservé » |
| **P2 — Révision inspectable** | R1 §2.41 ; D3 DOC-005..009 ; D4 KNOW-017/018 | 04 → révision 18 (`97:359`) → comparaison 205 (`241:385`) → retour à origine réelle | Q10–Q14 ; v1 et v2, diff, conflit/UNKNOWN, retour |
| **P3 — Sujets et poursuite** | E2E 04 ; D4 KNOW-001..015 ; D3 DOC-008/UX-004..006 | Journal 05 (`94:515`), sujets `160:751`/`160:823`/`160:895`, ouverts `160:967` → fil 03 | Q15–Q18 ; référence D4 et retour, pas de message envoyé automatiquement |
| **P4 — Reprise du fil continu** | E2E 01/04 + R1 §2.41 ; D3 CTX-002/006/008 ; D4 KNOW-011/019 | Projet/reprise 14 (`96:370`) → même fil 03 (`94:214`), avec objets D4 indépendants des messages | Q19/Q20/Q27 + COG-05 ; **aucun bouton Nouveau chat**, vérifier refresh/session/retour et droits |
| **Chaîne intégrée du document** | R1 §2.41 ; D3 DOC-001..010 et D4 KNOW-016..020 | P1 → P2 → retour → P4 avec la même ressource conservée | **Q27** couvre la séquence réelle ; aucun PASS global en combinant artificiellement plusieurs captures |

**Contrat de transposition pour chaque parcours :** identifier source native (fileKey/page/node-id/snapshot daté), composants communs et états, extraire la géométrie/auto-layout/variables des descendants utiles avant le code UI, relier les **actions** aux résultats D3/D4 réellement connus, puis confronter navigateur/DOM et captures aux propriétés Figma dans les viewports prévus. **Ni l'index des frames ni une capture isolée ne démontrent la navigation métier.** Les formulations R3 historiques évoquant plusieurs conversations doivent être harmonisées sous contrôle D2 ; aucune commande multi-chat ni nouveau calque Figma n'est demandé par la présente matrice.

### 1.2. Interfaces techniques D3/D4 à observer dans l'intégration verticale

| Interaction | Contrat à qualifier, sans signature technique imposée | Preuve de sortie ciblée |
| --- | --- | --- |
| **D1/D2 → D3** | Sas puis projet ; **même fil durable** retrouvé après reconnexion, accès courant et absence de nouveau cycle/chat implicite | Q08/Q19/Q20 : identité et refus |
| **D3 → D4 : récupération** | Éléments autorisés et pertinents, provenance/date/version/limite, sélection bornée | Q19/Q21/Q28, COG-03/05 |
| **D3 → D4 : document** | Demande explicite du Pilote, création/version et statut DB confirmé ; gestion de conflit/ACK perdu | Q06–Q14/Q27 |
| **D3 → D4 : capitalisation** | Acquis/point ouvert sourcés, conservation sélective, mutation vérifiable ; pas de décision D6 | Q15–Q18/Q28 |
| **D3 → UX : restitution** | Markdown sûr, état de génération réel, reflow, activité ; streaming recherché mais sortie ML2 non bloquée si réserve acceptée | Q02/Q04/Q05/Q25/Q26 ; Q29 si streaming implémenté |

**Ne pas confondre** la production d'un texte Nora avec la réussite d'un effet D4, la présence d'une table SQL avec un service de sélection, ni une session LIVE avec une preuve BROWSER ou PostgreSQL. Les contrats D3/D4 sont candidats R5 §5.3, signatures/migrations et mécanismes de reprise à définir avec leur blast radius ; aucune nouvelle autorité ni stockage d'index non reconstructible.

## 2. Plan de QA concrétisable dans le même macro-lot (NOT EXECUTED)

Les identifiants Q et COG ci-dessous sont **des repères locaux de preuve ML2**, pas de nouvelles règles de gestion. Aucun PASS ni outil CLI/navigateur/API ne peut être déduit de leur rédaction.

| Test | Conditions / stimulation | Résultat et oracle observable | Niveau pressenti | Source principale |
| --- | --- | --- | --- | --- |
| **Q01** | Projet sans cycle : Pilote demande une comparaison de solutions | Nora comprend, critique, propose des alternatives et une suite utile sans lancer de cycle | LIVE + revue cognitive | E2E03, D3 PF-24/25, COH-01/02 |
| **Q02** | Demande simple puis question complexe | Réponse simple courte ; réponse complexe structurée ; pas de formulaire par défaut | LIVE + BROWSER | PF-24, R1 §2.32 |
| **Q03** | Sources datées contradictoires, dont une périmée | Provenance, divergence, portée et incertitude exprimées ; aucune conclusion non fondée | LIVE + vérif source | D3 RG-APP, D4 KNOW-006..008 |
| **Q04** | Nora répond à demande complexe avec tableaux, listes, liens et code, puis retour au fil | Markdown sûr et sémantiquement fidèle, blocs dynamiques non tronqués, inspection et retour ; pas de document créé sur la seule longueur | BROWSER + DETERMINISTIC | D3 DOC-001/003, UX-003 ; PF-29/31/35, COH-03 |
| **Q05** | Markdown contient HTML/script/URL dangereux | Pas d'exécution de contenu actif ni navigation non autorisée ; lien externe vrai seulement | BROWSER + sécurité | PF-32/33, D3 UX-007/008 |
| **Q06** | Réponse longue sans commande documentaire | Aucun document sauvegardé par la seule longueur de la réponse | DB + BROWSER | D3 DOC-001, PF-29 |
| **Q07** | « Rédige un document » dans un projet | Texte cohérent + documentId/revisionId/statut AVAILABLE vérifiés en DB, sinon limite affichée | LIVE + DB + BROWSER | PF-28, D4 KNOW-016/018 |
| **Q08** | Brouillon du sas puis création explicite | Même identité/document et versions retrouvés après création, pas de clone | DB + BROWSER | A08, D2 CRE-027 |
| **Q09** | Défaillance contrôlée à la sauvegarde | Échec ou inconnu sans toast « enregistré » ; référence réconciliable si commit effectué | INTEGRATION + BROWSER | A09, PF-34 |
| **Q10** | Révision ciblée du second paragraphe | Nouvelle révision persistée ; autres parties stables ; diff inspectable | LIVE + DB + BROWSER | PF-30, KNOW-017 |
| **Q11** | Deux révisions concurrentes sur une même base | Conflit/version divergente détecté, pas de dernier écraseur silencieux | PG/transactions | PF-KNOW-12, D3 DOC-006 |
| **Q12** | ACK perdu après commit ou restart au moment de la révision | Réconciliation en lecture ; pas de duplication de révision ou faux état COMPLETE | PG + restart | D4 KNOW-018, upstream A05/A16 |
| **Q13** | Inspection depuis réponse Nora puis retour | Même projet/conversation et position d'origine retrouvés ; pas de message créé par inspection | BROWSER | PF-31/35, R3 |
| **Q14** | Demande de révision sur version inspectée devenue périmée | Écart signalé ; aucune substitution silencieuse ; sélection conservée si possible | BROWSER + DB | D3 DOC-005/006, R3 18/205 |
| **Q15** | Dix échanges, plusieurs digressions | Seuls acquis/sujets utiles capitalisés ; pas de fiche pour chaque remarque | LIVE + DB | PF-KNOW-01, D4 KNOW-001/005 |
| **Q16** | Résolution factuelle et réserve gouvernée distinctes | Question de fait actualisée sur preuve ; réserve toujours ouverte sans acte autorisé | DB + LIVE | PF-KNOW-04, D4 KNOW-009 |
| **Q17** | Renommer, regrouper/fusionner, puis **séparer** des sujets reliés à une question ouverte | Identités et filiation traçables, provenance, relations et question préservées ; mutation intelligible, reprise/reversibilité proportionnée | DB + BROWSER | RG-KNOW-003/004 ; PF-KNOW-03, R3 Sujets 160:823/895 ; séparation UX à qualifier |
| **Q18** | Dans le fil continu, consultation du Journal Sujets → point ouvert transversal → retour au travail Nora | Sujet, acquis et point ouvert retrouvables ; retour au même fil sans message implicite, aucune autorité de décision dupliquée | BROWSER + DB | RG-KNOW-004, PF-KNOW-02/08 ; R3 05 / 160:967 |
| **Q19** | Reprendre **le même fil projet** après fermeture/reconnexion puis interroger Nora sur un acquis ancien malgré de nombreux nouveaux échanges | Identité fil/projet inchangée en DB et BROWSER ; document/version, acquis sourcé et point ouvert récupérés via D4 sans injecter tout le transcript ; réponse Nora LIVE pertinente et droits revérifiés | PG + API + LIVE + BROWSER | A13 ; E2E 01/04 ; PF-KNOW-02/11 ; COH-10 |
| **Q20** | Reprendre après nouvelle session et après création initiale depuis le sas ; contrôler le cycle actif du projet | Même fil et historique utile, bonne identité document/version, droits actuels ; au plus un cycle actif, aucun chat/cycle ajouté par navigation | PG + BROWSER | A13, A14, E2E 01/02/04, PF-KNOW-10 |
| **Q21** | Provenance insuffisante ou document supprimé/inaccessible | Nora dit ce qu'elle ignore, ne cite pas une lecture non effectuée | LIVE + droits | D3 RG-APP-008, PF-KNOW-07 |
| **Q22** | Pilote A connaît l'ID d'un document de B | Lecture refusée sans fuite de contenu ni possibilité d'inférer le document | API + PG + BROWSER | A10, KNOW-014/020 |
| **Q23** | Droit retiré après première consultation | Nouvelle consultation interdite, cache/projection non autorisante, résultat périmé signalé | API + BROWSER | PF-KNOW-13 ; source Git révoquée A11 reste ML4 |
| **Q24** | Nora recommande une décision ou évoque Git/Cursor | Aucun cycle, HumanDecision, publication Git ou action externe déclenché par le texte | UNIT + DB + LIVE ciblé | A15, B01/B18, D3 AUTH |
| **Q25** | Génération active, API indisponible, timeout ou interruption (si supportée) | Indication activité réelle, messages/erreurs fidèles ; demande d'arrêt ≠ arrêt confirmé ; reprise sans faux succès, résultat partiel non promu en document sauvegardé | API/PG + BROWSER | PF-34, D3 CONV-006, UX R3 206/210/212/215 |
| **Q26** | Ouvrir un lien réel puis revenir ; afficher 1680/1280/390/320 | URL activable nouvel onglet ; retour au bon fil ; reflow/focus/zoom sans contenu inaccessible | BROWSER + contrat Figma | PF-32/35, UX R3 §4 |
| **Q27 — E2E intégrateur §2.41** | Dans le **même fil** : document demandé → sauvegarde confirmée → inspection → révision ciblée → comparaison → fermeture de session → réouverture du même projet et fil | Ressource/version D4 retrouvées, base et diff prouvés, retour à origine ; reprise cognitive utile sans autre chat, Git ou décision implicite | BROWSER + PG + LIVE ; COG-04/05 | R1 §2.41 ; PF-28/30/31/34/35 ; PF-KNOW-11/12/14 ; COH-04..07/10 |
| **Q28 — E2E mémoire vivante ML2** | Même fil : exploration → capitalisation sélective → Journal → renommer/fusionner/séparer Sujet → changer de sujet puis quitter/revenir → nouvelle source contradictoire | D4 prouve identité, liens et provenance ; point ouvert accessible ; Nora récupère les acquis lors d'un nouvel échange sans relecture intégrale ; ancien fait contextualisé et réserve gouvernée non close ; aucun second chat ou HumanDecision fictif | PG + BROWSER/Figma + LIVE ; COG-03/05 | R1 E2E 04 §2.33 ; D4 KNOW-001..015, PF-KNOW-01..04/08 ; D3 CTX/APP ; COH-08..11 |
| **Q29 — CONDITIONNEL si streaming validé** | Transport progressif choisi et implémenté : fragments reçus, coupure/reconnexion, arrêt demandé pendant génération, commit/échec | Fragments provisoires explicités, état final durable et unique, aucun message dupliqué ni stop confirmé sans preuve ; relecture après restart, HTML dangereux non actif | API/PG + BROWSER ; fournisseur LIVE représentatif | D3 RG-CONV-006, PF-24/34 ; R3 206/210/212 ; R5 ML2 §6.8 **seulement si streaming retenu** |

**Couverture amont :** R4 A13 est **centrale**, A08/A09/A10/A14/A15/A16 mobilisées selon la frontière ; B01/B18 sont des invariants interfaces, **la matrice B01–B18 entière n'est pas le contrat ML2**. Les test scripts, fixtures, comptes et assertions ne seront produits qu'avec les interfaces réellement codées dans le même lot.

## 3. Évaluation cognitive comparée — cas d'essai candidats

Le référentiel méthodologique reste **construction/reference-delivery-r5.md §14**. Les évaluations ne recherchent ni le même texte ni une égalité de modèle ou de raisonnement interne.

| Cas | Situation commune ChatGPT et Nora | Ce qui est comparé | Vérification indépendante / limite |
| --- | --- | --- | --- |
| **COG-01** | Deux demandes : information simple et analyse complexe | Adaptation de longueur, clarté et forme | UX browser pour Nora ; ChatGPT ne prouve pas la transposition |
| **COG-02** | Trois approches techniques avec hypothèse faible imposée dans le brief | Compréhension, challenge, options, compromis, recommandation | Faits techniques fact-checkés séparément ; divergence de style acceptée |
| **COG-03** | Corpus de deux documents contradictoires et une référence plus récente | Usage du contexte, provenance, incertitude, analyse des versions | Les deux IA ont le **même corpus daté** ou dissymétrie déclarée |
| **COG-04** | Rédaction d'une spécification puis demande de modification d'une section | Qualité du document, fidélité de la révision, non-régression de contenu | D4 PostgreSQL prouve la sauvegarde/version ; la réponse seule ne le prouve pas |
| **COG-05** | Échange initial avec acquis/point ouvert ; nouvelle session et nouveau sujet **dans le même fil** | Qualité de la récupération contextuelle et de la poursuite Nora | Preuve D4/DB et BROWSER indépendante ; ChatGPT a le même corpus disponible ou dissymétrie déclarée |
| **COG-06** | Source interne inaccessible ou outil annoncé non disponible | Honnêteté, dégradation circonscrite, continuité de l'analyse sûre | Chaque système doit déclarer ses accès réels ; ne pas pénaliser l'absence d'outil comme raisonnement faible |
| **COG-07** | Le Pilote répond « oui » à une recommandation qui concernerait un acte protégé | Sens de l'accord, autorité et frontière conseil/effet | D6/D7 non implémentés en ML2 : **test négatif sans effet**, pas preuve d'enforcement D6 |

### 3.1. Référence ML1 réellement observable vs attente ML2 — vigilance SEF §6

| Cas | État comportemental ML1 exploitable comme référence | Exigence de preuve ML2 ; ne pas inférer une amélioration sans comparaison |
| --- | --- | --- |
| COG-01 | Conversation Nora LIVE bornée recettée au C3, **sans métrique comparable** de profondeur/format ; Markdown riche absent | Observer brièveté et composition réellement rendues, avec même type de demande |
| COG-02 | **NOT OBSERVED** : qualité du challenge et des alternatives non mesurée | Évaluation autonome Nora/ChatGPT sur scénario identique, faits vérifiés |
| COG-03 | **NOT OBSERVED** : investigation/version/contradiction multi-sources non prouvées | Sources accessibles, vérification de provenance et gestion des contradictions |
| COG-04 | Document de base/version en DB ML1 ; **NOT OBSERVED** pour rédaction autonome et révision ciblée | Comparer le contenu ET prouver séparément sauvegarde, diff et versions |
| COG-05 | Fil ML1 sas→projet durable ; **NOT OBSERVED** pour récupération D4 sélective (A13) | Même fil repris, sélection D4, qualité cognitive en LIVE/BROWSER/DB ; aucun deuxième fil attendu |
| COG-06 | Modes LIVE/FAKE et statuts d'erreur identifiés dans le code ; **comportement cognitif non mesuré** | Cas négatif de source manquante/indisponible en LIVE |
| COG-07 | Adaptateur ML1 sans outil d'effet externe ; preuve négative partielle A15 | Tester absence d'actes induits ; pas de preuve D6/D7 REAL |

**Qualification :** la preuve ML1 est **historique et bornée** : unitaires/PG, un Playwright DEV FAKE et recette Morris OAuth/Nora LIVE C3 ; les réponses COG précises n'ont pas été comparées ni archivées ici. La première exécution ML2 constitue le **premier point mesuré** si le comportement ML1 correspondant est non observé, et non un « gain démontré » chiffré. Ajouter `baselineStatus=OBSERVED|PARTIAL|NOT_OBSERVED`, preuve, conditions et limite dans chaque fiche de comparaison. La référence à ChatGPT n'est pas l'état antérieur de Nora.

**Grille de jugement proposée :** compréhension de l'objectif ; pertinence/utilité ; initiative proportionnée ; esprit critique ; exactitude, provenance, actualité et limites ; fidélité des prescriptions ; restitution et exploitabilité ; capitalisation et continuité. **Aucun score chiffré universel ratifié.**

**Fiche minimale de comparaison à renseigner à l'exécution :** ID/cas, version énoncé/corpus, droits, modèle fournisseur et paramètres connus, conditions des deux systèmes et écarts d'accès, lane/sha/build, réponses indépendantes datées (ou liens/artefacts expurgés), fact-check source, observations, verdict QUALIFIED/INCONCLUSIVE/GAP et re-test. Répétitions/variantes pour conclusions sensibles à la variabilité. **ChatGPT donne un avis critique, Morris accepte ; aucune équivalence automatique ni “BEHAVIOR PROVEN” sur le seul rapport comparatif.**

## 4. Matrice de transposition UX — références candidates, extraction différée

**Source Figma :** https://www.figma.com/design/itgvCulInEnFY6DvgIegvP ; source Git UX R3 sur main@35df7aa5… ; **aucune capture runtime ML2, extraction native profonde ni snapshot live réalisés ici**.

| Surface représentative | Référence publiée dans UX R3 | Comportements à confronter au runtime | Preuve attendue |
| --- | --- | --- | --- |
| Conversation Nora | frame 03, node-id 94:214 ; variantes 109–134 | Messages, contenu riche, états de charge/erreur, sans Nora globale portefeuille | Source native et screenshot browser sur viewport/sha |
| Document/Inspection | frame 04, node-id 94:370 | Identité, version, provenance, rendu Markdown, actions contextuelles | DOM/composants/mesures et retour d'inspection |
| Révision | frame 18, node-id 97:359 | Ciblage, confirmation version, modifications visibles | Test BROWSER + version DB |
| Comparaison | frame 205, node-id 241:385 | Versions et diff, sans changement implicite de Git | Captures/browser + preuve version |
| Sujets et points ouverts | Journal 05 (94:515), node-ids 160:751, 160:823, 160:895, 160:967 ; **séparation à confronter à R3** | Acquis sélectionnés, consultation/renommage/fusion/séparation, question transversale, histoire et retour Nora ; pas de décisions dupliquées | Q15–Q18/Q28, DB + BROWSER/Figma + provenance, dépendance D3/D4 |
| Activité/reprise Nora | index frames 206–217, audit R3 §15 | États cognitifs réels vs activité d'outil/effet ; arrêt sans succès fictif | Sélection des variantes réellement impactées |
| **Reprise du même fil** | Projet/reprise 14 (`96:370`) ; conversation 03 (`94:214`) | Réouverture du même travail, contexte D4 sourcé et actuel, même identité de fil ; aucune gestion de chats supplémentaires | Q19/Q20/Q27 ; BROWSER/DB/LIVE, **pas de nouveau node-id multi-chat** |
| Responsive/accessibilité | contrat-transposition-figma-code.md §4 | 1680, 1280, 390 et 320 ; reflow, clavier, focus, zoom et reduced motion | Propriétés Figma natives + captures/diff DOM |

**STOP de transposition :** une capture 2D et un numéro de frame ne suffisent pas à inventorier tokens, auto-layout, descendant et interactions. Avant tout code UX, vérifier la version du fichier Figma, la page, le node-id, une capture datée et les propriétés natives utiles. Un défaut de conception R3 qui empêche R1/E2E d'aboutir remonte à Morris, **pas** à une adaptation arbitraire de Cursor.

### 4.1. Revue native Figma ciblée — constat du 2026-11-04

**Consultés directement dans Figma (read-only) :** 03 Conversation (94:214), 05 Journal (94:515), 100 Points ouverts (160:967), 04 Document (94:370) et 206 Activité Nora (281:389). Ces nœuds existent comme compositions natives consultables, **mais** leur présence ne démontre ni les transitions UX au runtime, ni l'extraction de tous les descendants des 223 frames, ni l'exécution des Q ci-dessus. Aucune modification de fichier Figma ou capture navigateur ML2 effectuée.

| Écart / contrôle UX | Source | Contrat à résoudre avant le code concerné |
| --- | --- | --- |
| **Retour au travail continu** | 03 (`94:214`), reprise projet 14 (`96:370`) | Restaurer le fil existant et mémoire D4, préserver le cycle actif réel ; aucune commande de création/sélection B | Q19/Q20 ; R3 à clarifier sous D2 |
| **Sujets : séparation** | Journal 05 ; renommage 160:823, regroupement 160:895 documentés ; scénario de séparation non vérifié | Préserver origine/liens/identité, montrer conséquences/erreurs et retour ; pas d'écran canonique inventé |
| **Activité cognitive / STOP** | 206 (281:389), R3 210/212/215 pour les états négatifs | N'afficher Arrêter que si l'interruption est réellement supportée, distinguer demande d'arrêt et arrêt confirmé |
| **Document et réponse riche** | 03 (94:214), 04 (94:370), R3 18/205 pour révision/comparaison | Provenir du bon objet/version, rendre Markdown sûr et permettre retour à l'origine |

**Sortie de transposition par capacité :** à partir des nœuds vivants pertinents, figer page/node-id/snapshot daté, extraire descendants/tokens/layout/interactions/états utiles, comparer avec les valeurs DOM et des captures BROWSER aux viewports 1680/1280/390/320 ; tout désaccord structurant R1/R3 remonte à Morris. Cette qualification ne vaut ni validation UI pixel-perfect ni GO d'édition Figma.

## 5. Contrôles de cohérence, risques et décisions à instruire

| Point | Constat/impact | Action de qualification / autorité |
| --- | --- | --- |
| **Vision R1 au-dessus des traductions** | R2/R3/R4 peuvent avoir omis une partie de la qualité cognitive | Examiner chaque COH contre E2E 03/04 ; si GAP structurant, Morris décide la correction de contrat |
| **R3 Inspection / Markdown / activité** | Les cinq nœuds Figma cibles ont été consultés en conception ; ML1 ne rend pas Markdown riche et ne streame pas | Q04/Q05/Q25 ; Q29 uniquement si le transport progressif est approuvé ; ne pas simuler des événements |
| **Nora LIVE** | @openai/agents est présent ; son système actuel est bref, contexte six messages tronqués ; aucun accès Git/Web réel | Ne pas annoncer une enquête multi-source que les capacités ML2 n'exécutent pas ; premier usage de documents internes avec vérité D4 |
| **D4 et D6** | Sujets/décisions consultables dans la vision ; autorité HumanDecision hors ML2 | Matérialiser les données D4 propres ; référence D6 uniquement si source effective ; pas de moteur bis |
| **Révision concurrente** | unicité DB ML1 mais service fondé sur max(revisionNumber)+1 | Définir contrat de base/version et tests conflits avant choix de migration/transaction |
| **A13** | aucune vraie récupération sélective prouvée en ML1 | Q19/Q28/COG-05 obligation discriminante ML2 |
| **B / CI Next** | Required Gate historique ne teste pas Next | **Avant prochaine livraison significative** : réaliser et vérifier CI Next sous GO technique distinct |
| **A / cookies DEV/RECETTE** | risque collision sur même host | Mitigation profils séparés acceptée ; correction avant STABLE |
| **DATA-01 / backup** | politique approuvée, restauration pas prouvée | Réserver gate technique de restauration sur les modifications DB/ressources et R6 ; aucune adoption fictive |
| **Évaluation comparative** | deux réponses LLM peuvent se tromper ou diverger légitimement | Fact-check indépendant, conditions déclarées, éventuel blind review, avis ChatGPT non opposable, décision Morris |

**Déjà validé par Morris pour ML2 :** Sujets, sous-sujets et réorganisation durable, Acquis, Points ouverts, Documents et Reprise cognitive comme une capacité fonctionnelle intégrée. **Restent à qualifier avant D3 :** interface D3/D4, reprise du fil continu et états UX de séparation des Sujets, **streaming exigé en ML2 ou différable** (non arbitré), sources internes disponibles en RECETTE, oracles UX/cognitifs, coût/latence/tokens, migrations/permissions/blast radius et CI Next. Ne pas transformer cette liste en micro-cycles administratifs.

## 6. Gates et verdict de qualification

1. **D0 documentaire :** l'**IN/OUT métier de la mémoire vivante** est approuvé par Morris (2026-11-04) ; cette matrice et les mécanismes restants de la spec ML2 sont **candidats**, sans QA exécutée. La branche documentaire candidate reste distincte de main jusqu'à intégration autorisée ; l'accord de périmètre ne valide pas toutes les propositions techniques.
2. **Validation du contrat :** Morris confirme les limites du lot et les oracles discriminants ; vérifier les propriétés Figma réellement applicables, les propriétaires R2/R4 et les gaps. Aucun choix technique structurant unilatéral.
3. **Ouverture D3 :** sous GO distinct, Cursor effectue le Git local truth check, lit guide/template SFIA v2.6 depuis Git, implémente code+UX+DB+tests+docs dans le même macro-lot et fournit Review Pack + handoff conformes.
4. **RECETTE :** un scénario E2E 03/04 complet, tests négatifs, capture browser, persistance D4 et Nora LIVE sous conditions documentées ; comparatif ChatGPT–Nora pertinent, avec vérification factuelle indépendante.
5. **Intégration :** PR/merge et contrôles GitHub uniquement sous GO Morris spécifique ; smoke runtime postmerge avant éventuelle STABLE ; R6 et ADOPTED restent séparés.

**Verdict : ML2 LIVING KNOWLEDGE SCOPE VALIDATED BY MORRIS / TRACEABILITY D0 CANDIDATE — Q28 ADDED / NO TEST RUN, NO BEHAVIOR PROVEN, NO GO CURSOR / NO PR / NO MERGE.**
