# SFIA Studio Next — R5 / ML2 — Matrice de cohérence et d'acceptation validée en contenu
## Produire et capitaliser avec Nora — R1 → R2 → R3 → R4 → R5 / QA / évaluation cognitive

**Statut : VALIDATED SPEC — MATRICE ML2 v0.6 VALIDÉE EN CONTENU PAR MORRIS (2026-11-04) / NOT TESTED.** Cette matrice fixe les capacités, les scénarios et les oracles d'acceptation du contrat de construction, sans affirmer qu'ils sont implémentés, exécutés ou acceptés. L'évaluation cognitive comparative suit R5 §14 ; les paramètres exacts des tests, les données et les preuves seront réalisés et qualifiés pendant le delivery. **Validation documentaire ≠ GO Cursor ≠ QA PASS ≠ RECETTE ≠ ADOPTED.**

| Champ | Valeur |
| --- | --- |
| Référentiel Git source | mcleland147/sfia-workspace, **main@cec6c058d98772d342f7a3576a0ca7ae1f3646cf** post-PR #653 ; sources R1–R5 du fil continu intégrées |
| Candidate Git | docs/next-ml2-d3-d4-ux-contract-20261104 — **deux fichiers ML2 uniquement ; non mergée** |
| Spécification sœur | specification-technique.md, **VALIDATED SPEC v0.6 en contenu**, implémentation non démarrée |
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
| ML2-COH-03 | Rendu adaptatif, Markdown sûr et activité réelle ; **streaming tenté sans gate bloquant** | E2E 03, §2.32 | D3 RG-CONV-006, RG-UX-001..003, RG-DOC-003 ; PF-24/29/33 | 03 (94:214), 04 (94:370), 206 (281:389) ; STOP seulement si réellement disponible | UX riche absente ML1, réponse finale sans streaming | Q04/Q05/Q25 ; Q29 si livrée, COG-01 | D3/UX ; **orientation Morris retenue**, report sous dette/exit et acceptation distincte |
| ML2-COH-04 | Distinguer réponse de chat et document demandé | E2E 03 + R1 §2.41 | D3 RG-DOC-001/002/010 ; PF-28/29 | 03 (94:214) → demande 118 (161:864) → 04 (94:370) | R4 D3/D4 ; document service ML1 | Q06, Q07, Q27, COG-04 | D3→D4 ; MAPPED |
| ML2-COH-05 | Produire un brouillon effectivement sauvegardé | E2E 03/04 + R1 §2.41 | D3 RG-DOC-002/004/009 ; D4 RG-KNOW-016/018/020 ; PF-28/34 ; PF-KNOW-11 | 04 (94:370), 118 (161:864), Inspection | D4 documents/revisions et statuts existants ; extension à faire | Q07, Q08, Q09, Q27 | D4, D3 consommateur ; GAP |
| ML2-COH-06 | Révision ciblée non destructive, concurrence gérée | E2E 03/04 + R1 §2.41 | D3 RG-DOC-005..007 ; D4 RG-KNOW-017/018 ; PF-30 ; PF-KNOW-12/14 | 04 (94:370) → 18 (97:359) → 205 (241:385) | R4 modèle d'identités et versions ; contrôle de base non implémenté ML1 | Q10, Q11, Q12, Q27, COG-04 | D4 écrit, D3 propose ; GAP |
| ML2-COH-07 | Inspection et retour fiable au fil/origine | E2E 03/04 + R1 §2.41 | D3 RG-DOC-008 ; RG-UX-004..006/009 ; PF-31/35 | 03 (94:214), 04 (94:370), 18 (97:359), 205 (241:385) ; transposition §4 | R4 UX / pas de transfert d'autorité | Q13, Q14, Q27 | UX consommateur D3/D4 ; GAP |
| ML2-COH-08 | Capitaliser **proactivement et sélectivement** l'information utile, avec provenance et confirmation d'écriture D4 | E2E 04, §§2.8/2.33 | D4 RG-KNOW-001/002/005..010 ; PF-KNOW-01/04/09 ; D3 RG-CTX-002 | Journal Sujets 05 ; 89–108 | R4 D4 vérité, D3 pertinence/restitution, index non autorisant | Q15/Q16/Q28, COG-03 | D3 propose/sélectionne ; D4 conserve/contrôle ; **SCOPE VALIDATED / NOT TESTED** |
| ML2-COH-09 | Sujets/sous-sujets réorganisables, points ouverts transversaux et provenance conservée ; séparation à rendre intelligible | E2E 04, §§2.11/2.33 | D4 RG-KNOW-003/004/007/009 ; PF-KNOW-03/04/08 | Journal 05 (94:515), sujets 97 (160:751), renommage 98 (160:823), regroupement 99 (160:895), points ouverts 100 (160:967) ; **séparation non représentée bout en bout** | D4 vérité et liens ; D6 futur non simulé | Q17/Q18/Q28 | D4/UX ; **SCOPE VALIDATED / UX COMPOSITION TO CONFIRM** |
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
| **D4 → D3 : disponibilité et sélection** | D4 expose identité, provenance/date/version/droits/limites ; **D3/Nora choisit** les éléments utiles pour l'intention, sans transcript exhaustif ni mémoire concurrente | Q03/Q19/Q21/Q28, COG-03/05 ; test de fraîcheur et exclusion de source interdite |
| **D3 → D4 : document** | Demande explicite, création et révision sur version de base identifiée, statut d'écriture confirmé, corrélation ; conflit, ACK perdu et restart sans doublon | Q06–Q14/Q27 ; contrôler API/DB, pas seulement retour texte |
| **D3 → D4 : capitalisation** | D3 identifie proactivement l'acquis utile et sa source ; D4 conserve sous droits/provenance, confirme ou refuse ; les mutations de Sujets préservent filiation/liens | Q15–Q18/Q28 ; comparer lecture D4 avant/après |
| **D3 → UX : restitution** | Markdown sûr, statut génération réel, reflow, activité ; **streaming tenté en ML2**, condition non bloquante sous dette/exit Morris si obstacle matériel | Q02/Q04/Q05/Q25/Q26 ; Q29 si streaming implémenté, sinon réserve explicite |

**Ne pas confondre** la production d'un texte Nora avec la réussite d'un effet D4, la présence d'une table SQL avec un service de sélection, ni une session LIVE avec une preuve BROWSER ou PostgreSQL. Les contrats D3/D4 sont candidats R5 §5.3, signatures/migrations et mécanismes de reprise à définir avec leur blast radius ; aucune nouvelle autorité ni stockage d'index non reconstructible.

### 1.3. Contrat d'acceptation intégrateur — frontières, états et gates

**D3/D4 :** les frontières sont désormais **qualifiées fonctionnellement**, sans ratifier les noms de fonctions ou les migrations. La source canonique D4 reste unique ; D3 choisit la pertinence des connaissances rendues disponibles par D4. L'acceptation porte sur les **effets réellement observés**, pas sur la présence d'un écran ou d'un prompt.

| Groupe d'acceptation | Oracles indispensables dans le candidat ML2 | Niveaux de preuve à réunir |
| --- | --- | --- |
| **Cognition et restitution** | demande complexe traitée utilement, provenance/limites, Markdown sûr, aucun outil/sauvegarde fictifs | Q01–Q06/Q21/Q25/Q26 + COG-01/02/03/06/07 ; LIVE + BROWSER + sécurité |
| **Document/version** | document explicitement demandé, AVAILABLE confirmé, révision ciblée non destructive, diff v1/v2 et conflit/restart honnêtes | Q07–Q14/Q27 + COG-04 ; DB réelle/transaction + BROWSER + LIVE |
| **Mémoire et Sujets** | acquis sélectionnés sans bruit, sujets renommés/regroupés/séparés sans perte, points ouverts transversaux et correction possible | Q15–Q18/Q28 + COG-03/05 ; DB + BROWSER/Figma + LIVE |
| **Continuité et droits** | même fil après session, contexte D4 pertinent hors fenêtre récente, isolation/permissions actuelles, état courant historique distingué | Q08/Q19–Q24/Q27/Q28 ; DB + API + BROWSER + LIVE |
| **Streaming** | essai technique sérieux et correction proportionnée ; **non bloquant** uniquement avec incident, impact, dette/exit et gate Morris explicites | Q29 si livré, sinon rapport d'écart non PASS ; arrêt réel s'il existe |
| **Delivery / intégration** | CI Next réellement exécutée avant merge significatif, ENV-01 RECETTE sur SHA figé, pack/hand-off, contrôles d'isolation et preuves indépendantes | CI Next SUCCESS + manifestes/test logs/DB/BROWSER/LIVE ; aucun STABLE/ADOPTED anticipé |

**États négatifs représentatifs à couvrir dans les mêmes parcours :** SAVING/AVAILABLE/FAILED/UNKNOWN, document refusé ou périmé, CONFLICT, ACK perdu, reprise/restart, retour d'Inspection, annulation de réorganisation, tentative de fuite interprojets, source hostile, réponse du fournisseur interrompue. Les tests Q07–Q29 restent des **identifiants locaux**, à regrouper par parcours cohérent lors du code plutôt que de déclencher des micro-cycles.

**Limites applicables :** les scénarios impliquant « décision applicable » peuvent vérifier l'**absence de création automatique** en ML2 et la référence à une source D6 si elle existe ; ils ne peuvent prouver ni moteur D6 ni cycle D5 encore NON IMPLÉMENTÉS. Les vérifications Git réel, Cursor et publication restent dans ML4/ML5 et leurs gates. \`PF-KNOW-11\` conserve encore un libellé R2 historique « conversation nouvelle » ; son oracle s'interprète sous le modèle R1 confirmé par PR #653 : **reprise du même fil**, sans ouvrir un chantier D2 de terminologie dans ML2.


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
| **Q11** | Deux révisions concurrentes à partir d'une même version inspectée | Seule une évolution de base autorisée est conservée ; CONFLICT/version divergente explicite pour l'autre ; aucune victoire silencieuse par dernier écrivain | PG + API + BROWSER | PF-KNOW-12, D3 DOC-006 ; R5 §5.4 |
| **Q12** | ACK perdu après commit, timeout ou restart au cours d'une révision | Résultat réconcilié par lecture D4, aucune révision dupliquée ni toast « COMPLETE » non confirmé ; document ancien reste disponible | PG + restart + BROWSER | D4 KNOW-018, ML1 A05/A16, R5 §5.4 |
| **Q13** | Inspection depuis réponse Nora puis retour | Même projet/conversation et position d'origine retrouvés ; pas de message créé par inspection | BROWSER | PF-31/35, R3 |
| **Q14** | Demande de révision sur version inspectée devenue périmée | Écart signalé ; aucune substitution silencieuse ; sélection conservée si possible | BROWSER + DB | D3 DOC-005/006, R3 18/205 |
| **Q15** | Dix échanges et digressions ; Nora détecte un acquis important et un propos passager | Seul le contenu utile/sourcé est enregistré par D4 ; valeur « capitalisé » affichée seulement sur confirmation et inspectable/corrigeable, sans demander un formulaire systématique | LIVE + DB + BROWSER | PF-KNOW-01, D4 KNOW-001/005 ; D3 sélection ; R5 §5.4 |
| **Q16** | Source actuelle contredit une ancienne conclusion factuelle ; réserve signalée comme gouvernée | Fait historique conservé avec statut requalifié/sources ; aucune levée automatique de réserve ni décision D6 inventée. **Ne prouve pas le moteur D6 encore OUT** | DB + LIVE + négatif | PF-KNOW-04, D4 KNOW-007..010 ; R5 §5.4 |
| **Q17** | Depuis le Journal : renommer, regrouper/fusionner puis **séparer un Sujet** après prévisualisation proportionnée ; provoquer un conflit de mutation | Identité/filiation, provenance, liens et point ouvert préservés ; annulation sans effet, échec ou CONFLICT honnête ; succès seulement après commit vérifié ; retour/inspection sans rupture | DB + BROWSER/Figma + concurrence | RG-KNOW-003/004, PF-KNOW-03 ; R3 160:751/823/895/967, **composition séparation GAP** ; R5 §§5.4/6.10 |
| **Q18** | Dans le fil continu, consultation du Journal Sujets → point ouvert transversal → retour au travail Nora | Sujet, acquis et point ouvert retrouvables ; retour au même fil sans message implicite, aucune autorité de décision dupliquée | BROWSER + DB | RG-KNOW-004, PF-KNOW-02/08 ; R3 05 / 160:967 |
| **Q19** | Reprendre le même fil après fermeture/reconnexion puis demander un acquis ancien devenu hors fenêtre récente | Identité fil/projet inchangée, source/version et point ouvert retrouvés via D4, **D3 choisit** les éléments pertinents sans transcript complet ni source interdite ; réponse Nora LIVE qualifiée | PG + API + LIVE + BROWSER | A13 ; RG-KNOW-011 ; RG-CTX-002/006 ; COH-10 |
| **Q20** | Après sas→projet, nouvelle session et changement de sujet ; évoquer un cycle | Même fil, document/version et droits ; aucun chat ni cycle créé par navigation. **Lecture d'un cycle actif réel uniquement quand D5 sera implémenté (ML3), pas preuve ML2** | PG + BROWSER | E2E 01/04, PF-KNOW-10 ; négatif D5 ; R5 §6.10 |
| **Q21** | Provenance insuffisante ou document supprimé/inaccessible | Nora dit ce qu'elle ignore, ne cite pas une lecture non effectuée | LIVE + droits | D3 RG-APP-008, PF-KNOW-07 |
| **Q22** | Pilote A connaît l'ID d'un document de B | Lecture refusée sans fuite de contenu ni possibilité d'inférer le document | API + PG + BROWSER | A10, KNOW-014/020 |
| **Q23** | Droit retiré après première consultation | Nouvelle consultation interdite, cache/projection non autorisante, résultat périmé signalé | API + BROWSER | PF-KNOW-13 ; source Git révoquée A11 reste ML4 |
| **Q24** | Nora recommande une décision ou évoque Git, cycle et Cursor | Aucun acte de publication, lancement, HumanDecision ou cycle déduit du texte ; cela ne constitue **pas** une validation complète des domaines D5/D6/D7/D9 non construits | UNIT + DB + LIVE ciblé | A15, B01/B18, D3 AUTH ; négatif interfaces |
| **Q25** | Génération en cours puis timeout/erreur ; STOP demandé si réel | Activité connue vs supposée ; requête d'arrêt ≠ arrêt confirmé ; résultat partiel jamais promu en document sauvegardé ; état UNKNOWN réconciliable | API/PG + BROWSER | PF-34, D3 CONV-006, Figma 206/210/212, R5 §6.10 |
| **Q26** | Ouvrir un lien réel puis revenir ; afficher 1680/1280/390/320 | URL activable nouvel onglet ; retour au bon fil ; reflow/focus/zoom sans contenu inaccessible | BROWSER + contrat Figma | PF-32/35, UX R3 §4 |
| **Q27 — E2E intégrateur §2.41** | Dans le **même fil** : document demandé → sauvegarde confirmée → inspection → révision ciblée → comparaison → fermeture de session → réouverture du même projet et fil | Ressource/version D4 retrouvées, base et diff prouvés, retour à origine ; reprise cognitive utile sans autre chat, Git ou décision implicite | BROWSER + PG + LIVE ; COG-04/05 | R1 §2.41 ; PF-28/30/31/34/35 ; PF-KNOW-11/12/14 ; COH-04..07/10 |
| **Q28 — E2E mémoire vivante ML2** | Même fil : exploration → capitalisation sélective → Journal → renommer/fusionner/séparer Sujet → changer de sujet puis quitter/revenir → nouvelle source contradictoire | D4 prouve identité, liens et provenance ; point ouvert accessible ; Nora récupère les acquis lors d'un nouvel échange sans relecture intégrale ; ancien fait contextualisé et réserve gouvernée non close ; aucun second chat ou HumanDecision fictif | PG + BROWSER/Figma + LIVE ; COG-03/05 | R1 E2E 04 §2.33 ; D4 KNOW-001..015, PF-KNOW-01..04/08 ; D3 CTX/APP ; COH-08..11 |
| **Q29 — STREAMING TENTÉ / QA SI LIVRÉ** | Fournisseur capable de fragments : progression, coupure/reconnexion, demande d'arrêt et résultat durable ; sinon incident documenté et arbitrage de report | Fragments provisoires puis état persistant unique, sans doublon ni arrêt affirmé sans preuve ; si report : **NOT IMPLEMENTED / OPEN DEBT WITH EXIT**, jamais PASS | API/PG + BROWSER + LIVE si livrée ; rapport de tentative sinon | Orientation Morris 2026-11-04 ; D3 CONV-006, R3 206/210/212 ; R5 §6.8 |

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

**Source Figma :** https://www.figma.com/design/itgvCulInEnFY6DvgIegvP ; UX R3 intégrée à main@cec6c058d98772d342f7a3576a0ca7ae1f3646cf ; **consultation native ciblée du 2026-11-04**, sans édition Figma ni capture runtime ML2 ; extraction exhaustive des interactions/tokens et snapshot de transposition encore à faire.

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

**Consultés directement dans Figma (read-only, 2026-11-04) :** 03 Conversation (94:214), 04 Document (94:370), 05 Journal (94:515), 18 Révision (97:359), 97 Sujets (160:751), 98 Renommage (160:823), 99 Regroupement (160:895), 100 Points ouverts (160:967), 205 Comparaison (241:385) et 206 Activité Nora (281:389). Les états de renommage, regroupement et comparaison sont **nativement représentés** ; le parcours complet **séparer un Sujet** ne l'est pas à ce stade. Cela ne démontre ni transactions, ni transitions réelles, ni runtime, ni extraction exhaustive des descendants, ni QA exécutée. Aucun fichier Figma n'a été modifié.

| Écart / contrôle UX | Source | Contrat à résoudre avant le code concerné |
| --- | --- | --- |
| **Retour au travail continu** | 03 (`94:214`), reprise projet 14 (`96:370`) | Restaurer le fil existant et mémoire D4, préserver le cycle actif réel ; aucune commande de création/sélection B | Q19/Q20 ; R3 à clarifier sous D2 |
| **Sujets : séparation** | Journal 05, Sujets 160:751, renommage 160:823, regroupement 160:895, ouverts 160:967 ; séparation sans parcours natif complet observé | Réemploi du Journal/Inspection à qualifier ; prévisualisation proportionnée, annulation, succès DB, conflit/erreur, relations et provenance conservées ; pas de nouvel écran canonique par défaut |
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

**Déjà validé par Morris pour ML2 :** Sujets/sous-sujets réorganisables, Acquis, Points ouverts, Documents, reprise du même fil ; streaming **à tenter réellement, non bloquant**. **Pour validation de contenu Morris avant D3 :** contrats d'interactions D3/D4 §1.3 et spec §5.4, états UX §6.10, oracles intégrateurs ; **ingénierie à vérifier avec le code** : choix des signatures/transactions et migrations, modèle de recherche D4, composition native de séparation, données/sources de RECETTE, latence/tokens, CI Next sous GO technique distinct. Ne pas créer de micro-cycles documentaires.

## 6. Gates et verdict de qualification

1. **Validation de contenu D2 acquise :** Morris approuve le **contrat D3/D4, les états UX et les critères d'acceptation ML2 v0.6** le 2026-11-04 : **VALIDATED SPEC / NOT IMPLEMENTED / NOT TESTED**. Les signatures, migrations et sélections techniques restent à qualifier dans le lot, sans changer les propriétaires de responsabilités. La branche Git reste distincte de `main` jusqu'au gate PR/merge autorisé.
2. **Contrat validé ; contrôles avant code :** vérifier les propriétés Figma réellement applicables, les propriétaires R2/R4, les interfaces et le blast radius. Le parcours de séparation des Sujets reste à composer/qualifier sur les surfaces existantes ; aucune décision structurante d'architecture ou de gouvernance n'est déléguée.
3. **Ouverture D3 :** sous GO distinct, Cursor effectue le Git local truth check, lit guide/template SFIA v2.6 depuis Git, implémente code+UX+DB+tests+docs dans le même macro-lot et fournit Review Pack + handoff conformes.
4. **RECETTE :** un scénario E2E 03/04 complet, tests négatifs, capture browser, persistance D4 et Nora LIVE sous conditions documentées ; comparatif ChatGPT–Nora pertinent, avec vérification factuelle indépendante.
5. **Intégration :** PR/merge et contrôles GitHub uniquement sous GO Morris spécifique ; smoke runtime postmerge avant éventuelle STABLE ; R6 et ADOPTED restent séparés.

**Verdict : ML2 v0.6 VALIDATED SPEC BY MORRIS (2026-11-04) / CONTRACT AND QA ORACLES APPROVED / NOT IMPLEMENTED / NOT TESTED / NO BEHAVIOR PROVEN / NO CURSOR PROMPT / NO RECETTE / NO ADOPTED.**

---

## 7. As-Built preuve locale Cursor — 2026-11-05 (complément, non réécriture)

Branche `sfia/next-ml2-production-capitalisation` @ base `6e4406c6`. Preuves **DETERMINISTIC / PG / BROWSER FAKE** exécutées ; **LIVE / COG panel / CI Next** non prouvés ici.

| Famille | Statut local |
| --- | --- |
| Q04–Q14 documents / révision / conflit / diff | PARTIELLEMENT COUVERT (PG + API + UX) |
| Q15–Q18 / Q28 Sujets / capitalisation / split | PARTIELLEMENT COUVERT (PG + composition UX minimale) |
| Q19–Q20 reprise D4 hors fenêtre 6 messages | COUVERT PG (`selectRelevantKnowledgeContext`) + BROWSER fil unique |
| Q25 activité | PARTIEL (indicateur « prépare ») — pas de STOP confirmé |
| Q29 streaming | ATTEMPTED adapter ; UI progressive NOT WIRED ; LIVE NOT PROVEN |
| COG-01..07 | NOT RUN |
| Négatif recommandation ≠ D6 | COUVERT (`humanDecisionCreated: false`, kinds acquis) |

### 7.1 Correctif C1–C6 (2026-11-05)

| Défaut | Négatif | Après | DB | Verdict |
| --- | --- | --- | --- | --- |
| C1 Sujet hors source | PASS | PASS | PASS | PASS |
| C1 rollback mutation | PASS | PASS | PASS | PASS |
| C1 collision titre | PASS | PASS | PASS | PASS |
| C2 révision concurrente | PASS | PASS | PASS | PASS |
| C3 retry création | PASS | PASS | PASS | PASS |
| C3 ACK perdu | PASS | PASS | PASS | PASS |
| C4 lignes répétées | PASS | PASS | N/A | PASS |
| C5 faux FACT | PASS | PASS | PASS | PASS |
| C6 état UI | PARTIEL BROWSER | PASS smoke | si effet | PASS partiel |

### 7.2 Consolidation C3/C4/C1 (2026-11-05)

| Défaut | Avant | Après | Niveau | Verdict |
| --- | --- | --- | --- | --- |
| C3 race sans fingerprint | FAIL (anomalie revue) | PASS | PG | PASS |
| C3 même clé payload incompatible concurrent | FAIL | PASS | PG | PASS |
| C3 ACK perdu / retry | PASS partiel | PASS | PG + BROWSER | PASS |
| C3 clé UI stable entre retries | FAIL (`Date.now`) | PASS | BROWSER | PASS |
| C3 cross-project | PARTIEL | PASS | PG | PASS |
| C4 volumétrie / budget | FAIL (O(nm) non borné) | PASS DEGRADED explicite | UNIT | PASS |
| C4 occurrences répétées | PASS | PASS | UNIT | PASS |
| C1 rollback journal événements | FAIL (non asserté) | PASS (0 MERGED/SPLIT résiduel) | PG | PASS |
| C1 même Acquis concurrent | PARTIEL | PASS (1 affectation) | PG | PASS |
| Non-régression C2/C5/ML1 | PASS | PASS | PG + BROWSER | PASS |

## 8. Extension candidate de traçabilité — autonomie et observabilité cognitive (2026-11-05)

> **VALIDATED IN CONTENT BY MORRIS — 2026-11-05 / NOT TESTED / NOT BEHAVIOR PROVEN.** Extension de la présente matrice, pas nouveau référentiel QA. Les preuves C3/C4/C1 et les anciens statuts COG-01..07 sont conservés à leur niveau réellement observé. Références : R1 §2.2/E2E 03 ; R2 D3 §14 règles RG-CONV-007..012 / RG-CTX-009..011 et PF-36..41 ; R2 D4 §10 RG-KNOW-021..023 / PF-KNOW-15..17 ; R3 §40 ; R4 §11 ; R5 §15 ; ML2 spec §15.

### 8.1. Couverture fonctionnelle candidate et oracles

| Capacité candidate | Résultat observable Pilote / évaluateur | Lien R2 et scénario existant | Oracle et niveau requis | Statut |
| --- | --- | --- | --- | --- |
| Qualification/effort proportionnés | Réponse simple sans travail superflu, analyse structurante correctement dimensionnée | D3 RG-CONV-007/008, PF-36 ; COG-01 | Config réellement appliquée et motif disponible ; DETERMINISTIC + LIVE | NOT IMPLEMENTED / NOT TESTED |
| Investigation D4 multi-étapes | Nora peut approfondir dans les bonnes versions/permissions avant de conclure | D3 RG-CONV-009, RG-CTX-009 ; D4 RG-KNOW-021/022, PF-37, PF-KNOW-15/16 ; COG-02/03/05 | Appels/outils effectivement reçus, droits, couverture, résultat sourcé ; DB/INTEGRATION + LIVE | NOT IMPLEMENTED / NOT TESTED |
| Réévaluation et convergence | Contradiction nouvelle ou limite → approfondissement borné / état partiel honnête | D3 RG-CONV-010/011, PF-38/39 ; COG-03/06 | Budget, STOP/timeout/UNKNOWN, absence d'effet fictif ; DETERMINISTIC + LIVE | NOT IMPLEMENTED / NOT TESTED |
| Diagnostic de mission | Un examinateur habilité retrouve opérations, coûts/latences disponibles et sources sans confondre activité et pensée cachée | D3 RG-CONV-012, RG-CTX-010/011, PF-40 ; D4 RG-KNOW-023 / PF-KNOW-17 ; R5 §14 | SDK traces corrélées, métadonnées Studio exactes, données protégées, mesure vs estimation ; INTEGRATION + LIVE | NOT IMPLEMENTED / NOT TESTED |
| Comparaison cognitive | Qualité et efficacité du chemin examinées indépendamment, sans oracle LLM unique | PF-41 ; COG-01..07 ; R5 §14 | Réponses indépendantes, même corpus/écarts déclarés, fact-check, exemple de redondance ou lacune, verdict Morris | NOT RUN |
| Autorité inchangée | Une recommandation, trace ou lecture d'outil n'est pas une décision, preuve ou mutation protégée | RG-CTX-010/011 ; PF-39/41 ; COG-07 | Négatifs D6/D7/D8, sauvegarde D4 confirmée distincte de la génération ; DB/LIVE | NOT TESTED |

### 8.2. Conditions de comparaison et instrument probatoire

**Un seul protocole :** utiliser le §3 COG-01..07 et R5 §14. Pour chaque cas retenu, relever l'énoncé, les sources/droits, SHA/lane, politiques et paramètres effectifs, les identifiants et séquences d'appels effectivement observés, résultat et limites, latence/usage/coût lorsque disponibles, réponse ChatGPT indépendante et faits vérifiés à leur source. L'absence de télémétrie ou une asymétrie d'accès est explicitée ; aucun verdict d'équivalence fondé sur le style, la durée ou la similarité du texte.

**Cas négatifs discriminants :** outil D4 refusé, ressource périmée, absence d'outil, génération vide, tentative streaming échouée puis retry fournisseur, limite de tours, arrêt demandé non confirmé, ressource sauvegardée mais ACK perdu, erreur interprojet. Les états de consommation technique ne modifient pas la vérité des documents, connaissances, décisions ou preuves.

### 8.3. Décision d'intégration et dette

**Option à soumettre à Morris :** intégrer avant RECETTE ML2 le socle cohérent de cognition mesurable si ses interfaces et ses tests peuvent être livrés sans fragiliser les invariants déjà démontrés. Sinon, inscrire par capacité l'écart explicite, son propriétaire, le risque, le prochain lot et l'exit avant d'accepter une RECETTE de portée limitée. Ni augmentation isolée de maxTurns, ni configuration Sol High, ni tracing SDK seul ne suffisent pour déclarer l'autonomie de Nora prouvée.

**Gates inchangés :** contenu documentaire candidat → validation Morris → mandat technique distinct → code/tests/QA même lot → RECETTE au SHA figé → PR/merge/promotions séparés. Aucune réouverture automatique de R1–R4 ni adoption anticipée.

## 9. Extension candidate de matrice — diagnostic transverse AUTH/API/DB/D1–D4 (2026-11-05)

**VALIDATED PRODUCT INTENT MORRIS / QA CANDIDATE — NOT EXECUTED.** Réf. [contrat transverse R4 §7](../../architecture-technique/contrat-observabilite-transverse.md), R1 §10, R2 [index §25](../../conception-fonctionnelle/README.md), R3 §41, R5 §16 et [ML2 spec §16](specification-technique.md). Ce chapitre complète la qualification Nora de §8, sans remplacer COG-01..07 ni les preuves C1–C6 acquises au candidat.

| Scénario | Source/propriétaire | Attendu observable et niveau | Statut |
| --- | --- | --- | --- |
| **OBS-Q01** OAuth refusé | D1 RG-ACC-026..028 / PF-ACC-25 | Refus fournisseur/auth/session distingué, sans token ; INTEGRATION + LIVE ciblé | NOT RUN |
| **OBS-Q02** DB indisponible sur API | D1 PF-ACC-26, D2 PF-CRE-30 | Catégorie DB/500–503 appropriée, pas faux SESSION_INVALID/401 ; INTEGRATION/HTTP | NOT RUN — KNOWN GAP |
| **OBS-Q03** Lecture D4 interdite | D4 RG-KNOW-024 / PF-KNOW-18 | Refus tracé sans contenu interprojet ; DB/INTEGRATION | NOT RUN |
| **OBS-Q04** 2 appels fournisseur sous 1 génération | D3 RG-CONV-013 / PF-42 | 1 intention, 2 tentatives rattachées, usage mesuré distinct ; DETERMINISTIC + LIVE | NOT RUN |
| **OBS-Q05** Document sauvegardé / ACK perdu | D4 RG-KNOW-025 / PF-KNOW-19 ; D2 PF-CRE-29 | Transaction et réconciliation attestées, pas de doublon ; DB + BROWSER | SCÉNARIOS C3 EXISTANTS, corrélation transverse NOT RUN |
| **OBS-Q06** Nora timeout/limite | D3 PF-39/PF-44 et §14 | Statut honnête, absence de COMPLETE fictif ; DETERMINISTIC + LIVE | NOT RUN |
| **OBS-Q07** Trace/exporteur absent | D3 PF-44, contrat OBS-07 | Indisponibilité identifiable, aucune chronologie inventée ; INTEGRATION | NOT RUN |
| **OBS-Q08** Requête lente | Frontière API/DB | Durée observée et composant identifié ; INTEGRATION | NOT RUN |
| **OBS-Q09** Secret synthétique dans erreur | DATA-01 / sécurité D1-D4 | Aucun token/secret dans log, export ou UI ; DETERMINISTIC + INTEGRATION | NOT RUN |
| **OBS-Q10** Lane/SHA incorrect | ENV-01 et R5 | Trace associée au build réellement servi ; INTEGRATION/BROWSER | NOT RUN |
| **OBS-Q11** Git refus/rate limit | D9 §8 | REPORT au lot D9/ML4 — aucune capacité Git fausse en ML2 | NOT APPLICABLE ML2 |
| **OBS-Q12** D7 dispatch sans ACK | D7 §10, D8 §10 | REPORT au lot propriétaire D7/D8 — aucun effet externe fictif en ML2 | NOT APPLICABLE ML2 |

**Matrice d'acceptation :** chaque scénario retenu porte contexte, acteur, projet, lane, SHA/build/schema, identifiants corrélés, événements réellement récupérés et provenance, état DB/propriétaire, consommation lorsque mesurée, limite et verdict. Une analyse ChatGPT sur données observées peut challenger le chemin, mais elle ne constitue pas une preuve directe du runtime ou une chaîne de pensée.

**Impact/priorité :** traiter OBS-Q02 et la corrélation AUTH/API/DB/D3/D4 comme écarts de conception à arbitrer **avant** de déclarer une capacité de diagnostic suffisante pour RECETTE. Les cases NOT RUN ne peuvent pas devenir PASS par publication de ce document. L'ajout à PR #655 nécessiterait un mandat technique explicitement borné, tests et re-recette sur SHA actualisé ; aucune promotion implicite.
