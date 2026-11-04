# SFIA Studio Next — R5 / ML2 — Matrice de cohérence et d'acceptation candidate
## Produire et capitaliser avec Nora — R1 → R2 → R3 → R4 → R5 / QA / évaluation cognitive

**Statut : DOCUMENTED / QUALIFICATION D0 — MATRICE CANDIDATE v0.2 / NOT TESTED / NOT VALIDATED SPEC.** Ce document trace les liens à instruire avant le code. Il ne prétend pas que les scénarios sont implémentés, exécutés ou acceptés. Le **principe d'évaluation comparative ChatGPT–Nora** est approuvé par Morris dans son ambition (2026-11-04) et canonisé dans la référence R5 §14 ; les scénarios ML2 et les oracles détaillés restent des propositions de travail.

| Champ | Valeur |
| --- | --- |
| Référentiel Git source | mcleland147/sfia-workspace, main@35df7aa53c0bafa3e8ccf2615468672a7c0988f8 ; principal ref documentaire du 2026-11-04 |
| Candidate Git | docs/next-r5-ml2-cognitive-contract-20261104 — **non mergée** |
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
| ML2-COH-03 | Rendu conversationnel adaptatif et Markdown sûr | E2E 03, §2.32 | D3 RG-UX-001..003, RG-DOC-003 ; PF-24, PF-29, PF-33 | 03, 04 Document (94:370), transposition R3 | UX riche absente ML1 ; R4 §5.3/UX | Q04, Q05, COG-01 | D3/UX ; GAP ML1 → ML2 |
| ML2-COH-04 | Distinguer réponse de chat et document demandé | E2E 03 + R1 §2.41 | D3 RG-DOC-001/002/010 ; PF-28/29 | 03 (94:214) → demande 118 (161:864) → 04 (94:370) | R4 D3/D4 ; document service ML1 | Q06, Q07, Q27, COG-04 | D3→D4 ; MAPPED |
| ML2-COH-05 | Produire un brouillon effectivement sauvegardé | E2E 03/04 + R1 §2.41 | D3 RG-DOC-002/004/009 ; D4 RG-KNOW-016/018/020 ; PF-28/34 ; PF-KNOW-11 | 04 (94:370), 118 (161:864), Inspection | D4 documents/revisions et statuts existants ; extension à faire | Q07, Q08, Q09, Q27 | D4, D3 consommateur ; GAP |
| ML2-COH-06 | Révision ciblée non destructive, concurrence gérée | E2E 03/04 + R1 §2.41 | D3 RG-DOC-005..007 ; D4 RG-KNOW-017/018 ; PF-30 ; PF-KNOW-12/14 | 04 (94:370) → 18 (97:359) → 205 (241:385) | R4 modèle d'identités et versions ; contrôle de base non implémenté ML1 | Q10, Q11, Q12, Q27, COG-04 | D4 écrit, D3 propose ; GAP |
| ML2-COH-07 | Inspection et retour fiable au fil/origine | E2E 03/04 + R1 §2.41 | D3 RG-DOC-008 ; RG-UX-004..006/009 ; PF-31/35 | 03 (94:214), 04 (94:370), 18 (97:359), 205 (241:385) ; transposition §4 | R4 UX / pas de transfert d'autorité | Q13, Q14, Q27 | UX consommateur D3/D4 ; GAP |
| ML2-COH-08 | Capitaliser uniquement l'information utile | E2E 04, §§2.8/2.33 | D4 RG-KNOW-001/002/005..010 ; PF-KNOW-01/04/09 | Journal Sujets 05 ; 89–108 | R4 §5.3 D4, index dérivé non autorisant | Q15, Q16, COG-03 | D4 ; GAP |
| ML2-COH-09 | Sujets vivants / points ouverts transversaux | E2E 04, §2.11 | D4 RG-KNOW-003/004 ; PF-KNOW-03/08 | Sujets 160:751 ; renommage 160:823 ; regroupement 160:895 ; points ouverts 160:967 | R4 B interface D6 : pas d'autorité dans D4 | Q17, Q18 | D4 ; scope complet à arbitrer |
| ML2-COH-10 | **Créer/sélectionner fil B puis reprendre les acquis de A** | E2E 04, §2.33 + R1 §2.41 | D3 RG-CTX-002/006/008 ; D4 RG-KNOW-011/012/015/019 ; PF-03 ; PF-KNOW-02/10/11 | projet/reprise 14 (96:370) ; fil 03 (94:214) ; Journal 05 (94:515) ; **commande B non démontrée en R3** | R4 A13 ; ML1 sélectionne fil par préparation, six messages tronqués ; création/choix fil B absent | Q19, Q20, Q27, COG-05 | D3 possède fil, D4 contexte, D1/D2 droits ; **GAP UX/API/DB à qualifier** |
| ML2-COH-11 | Provenance, fraîcheur et contradiction | E2E 03/04, §2.13 | D3 RG-APP-001/002/005/007/008 ; D4 RG-KNOW-006..009/012/013 ; PF-04 ; PF-KNOW-04/05/07 | Sources dans réponse/Inspection ; états d'absence | R4 version/ref, D4 une seule vérité | Q03, Q16, Q21, COG-03/06 | D4 source + D3 usage ; GAP |
| ML2-COH-12 | Absence de fuite entre projets / droits actuels | E2E 04, §2.15 | D4 RG-KNOW-002/014/020 ; PF-KNOW-06/07/13 ; D3 PF-15 | Inspection refus / source indisponible | R4 A10/A11 et ADR R4-01 ; A11 Git ML4 | Q22, Q23 | D1/D4 ; MAPPED / limites Git OUT |
| ML2-COH-13 | Aucun acte HumanDecision, cycle ou Git déduit du dialogue | E2E 03/04 + interfaces E2E 05/07 | D3 RG-AUTH-001..005, RG-DOC-010 ; D4 RG-KNOW-010 ; PF-26 | Nora 03, Inspection, retour au fil | R4 A15, B01/B18 ; futur D6/D7/D9 | Q24, COG-07 | D3/D4 ; interdiction transversale |
| ML2-COH-14 | Continuité du document sas → projet | E2E 01/04, §2.20 | D2 RG-CRE-027, PF-CRE-27 ; D4 RG-KNOW-016..020, PF-KNOW-10 | sas 02, projet 03, document 04 | R4 A08/A09 ; ML1 identités persistantes | Q08, Q20 | D2 propriétaire transition ; régression |
| ML2-COH-15 | Dégradation provider/DB honnête, pas de faux succès | E2E 03/04 | D3 RG-DOC-009 ; RG-CONV-006 ; D4 RG-KNOW-013/015/018 ; PF-34 | loading/unknown et activité 206–217 | R4 A09/A16, DATA-01 ; ML1 statuts déjà présents | Q09, Q12, Q25, COG-06 | D3/D4 ; GAP / partial upstream |
| ML2-COH-16 | Liens réellement disponibles et pas de navigateur embarqué | E2E 03 ; R1 §2.41 | D3 RG-UX-007/008 ; PF-32/33 | 03/04/Inspection | R4 navigateur externe, lecture Git D9 hors ML2 | Q05, Q26 | D3/UX ; MAPPED |
| ML2-COH-17 | Qualité cognitive comparée ChatGPT ↔ Nora | E2E 03/04 ; vision R1 §1–2 | Ensemble pertinent D3/D4 selon chaque scénario ; pas de nouvelle RG | UX selon scénario ; aucune maquette créée pour tester | R5 global §14 ; preuve LIVE distincte de FAKE | COG-01..07, Q01/Q19 | ChatGPT évalue ; Morris accepte |

**Exhaustivité :** ce tableau n'est pas une certification RG/PF individuelle complète. À la revue de spécification, produire un contrôle explicite d'inclusion/exclusion des ensembles D3/D4 applicables, qualifier toute règle sans oracle et conserver les interfaces D1/D2/D5/D6/D7/D8/D9 hors scope. **Le référentiel R2 demeure propriétaire du texte des règles** ; le présent tableau n'en crée aucune.

### 1.1. Liaison explicite aux parcours produit, aux tests et à la conception Figma

| Parcours à démontrer | Source R1 et contrats R2 propriétaires | Figma R3 et action réellement attendue | QA et gap à ne pas masquer |
| --- | --- | --- | --- |
| **P1 — Demande documentaire** | R1 §2.40–2.41 ; D3 RG-DOC-001..004 ; D4 KNOW-016/018 | Conversation 03 (`94:214`) → demande 118 (`161:864`) → document 04 (`94:370`) seulement après enregistrement D4 | Q06–Q09 ; statut « généré » distinct de « conservé » |
| **P2 — Révision inspectable** | R1 §2.41 ; D3 DOC-005..009 ; D4 KNOW-017/018 | 04 → révision 18 (`97:359`) → comparaison 205 (`241:385`) → retour à origine réelle | Q10–Q14 ; v1 et v2, diff, conflit/UNKNOWN, retour |
| **P3 — Sujets et poursuite** | E2E 04 ; D4 KNOW-001..015 ; D3 DOC-008/UX-004..006 | Journal 05 (`94:515`), sujets `160:751`/`160:823`/`160:895`, ouverts `160:967` → fil 03 | Q15–Q18 ; référence D4 et retour, pas de message envoyé automatiquement |
| **P4 — Autre conversation même projet** | E2E 04 + R1 §2.41 ; D3 CTX-002/006/008 ; D4 KNOW-011/019 | Projet/reprise 14 (`96:370`) → conversation 03 ; **la création/sélection B n'est pas démontrée par les frames existantes** | Q19/Q20/Q27 + COG-05 ; **GAP fonctionnel UX/API**, à qualifier avant code, pas de faux parcours Figma |
| **Chaîne intégrée du document** | R1 §2.41 ; D3 DOC-001..010 et D4 KNOW-016..020 | P1 → P2 → retour → P4 avec la même ressource conservée | **Q27** couvre la séquence réelle ; aucun PASS global en combinant artificiellement plusieurs captures |

**Contrat de transposition pour chaque parcours :** identifier source native (fileKey/page/node-id/snapshot daté), composants communs et états, extraire la géométrie/auto-layout/variables des descendants utiles avant le code UI, relier les **actions** aux résultats D3/D4 réellement connus, puis confronter navigateur/DOM et captures aux propriétés Figma dans les viewports prévus. **Ni l'index des frames ni une capture isolée ne démontrent la navigation métier.** Les éventuels manques R3 de commande de fil B remontent à Morris avant nouvelle composition ou réalisation ; aucun nouveau calque Figma créé par cette seule matrice.

## 2. Plan de QA concrétisable dans le même macro-lot (NOT EXECUTED)

Les identifiants Q et COG ci-dessous sont **des repères locaux de preuve ML2**, pas de nouvelles règles de gestion. Aucun PASS ni outil CLI/navigateur/API ne peut être déduit de leur rédaction.

| Test | Conditions / stimulation | Résultat et oracle observable | Niveau pressenti | Source principale |
| --- | --- | --- | --- | --- |
| **Q01** | Projet sans cycle : Pilote demande une comparaison de solutions | Nora comprend, critique, propose des alternatives et une suite utile sans lancer de cycle | LIVE + revue cognitive | E2E03, D3 PF-24/25, COH-01/02 |
| **Q02** | Demande simple puis question complexe | Réponse simple courte ; réponse complexe structurée ; pas de formulaire par défaut | LIVE + BROWSER | PF-24, R1 §2.32 |
| **Q03** | Sources datées contradictoires, dont une périmée | Provenance, divergence, portée et incertitude exprimées ; aucune conclusion non fondée | LIVE + vérif source | D3 RG-APP, D4 KNOW-006..008 |
| **Q04** | Nora répond avec tableaux, listes, liens et code | Rendu fidèle/sémantique, non une chaîne Markdown brute ou un faux statut | BROWSER + DETERMINISTIC | D3 DOC-003, PF-29 |
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
| **Q17** | Renommer/regrouper un sujet et retrouver un point ouvert | Identité, provenance, relations et question préservées | DB + BROWSER | PF-KNOW-03, R3 Sujets 160:823/895 |
| **Q18** | Passage de conversation, consultation de Sujets | Sujets et points ouverts retrouvables sans troisième registre de décisions | BROWSER + DB | PF-KNOW-02/08 |
| **Q19** | Depuis un projet existant, ouvrir fil A puis créer/sélectionner explicitement fil B, avec historique propre | **Deux IDs de conversation distincts** prouvés en DB/API, messages B dans B, A inchangé ; récupération D4 de document/version, acquis et point ouvert sans injecter intégralement A ; Nora LIVE poursuit utilement | PG + API + LIVE + BROWSER | A13, PF-KNOW-02/11, E2E04, COH-10 |
| **Q20** | Reprise après session et après création du projet | Bon document/version et historique accessibles ; pas de transfert de droits | PG + BROWSER | A13, A14, PF-KNOW-10 |
| **Q21** | Provenance insuffisante ou document supprimé/inaccessible | Nora dit ce qu'elle ignore, ne cite pas une lecture non effectuée | LIVE + droits | D3 RG-APP-008, PF-KNOW-07 |
| **Q22** | Pilote A connaît l'ID d'un document de B | Lecture refusée sans fuite de contenu ni possibilité d'inférer le document | API + PG + BROWSER | A10, KNOW-014/020 |
| **Q23** | Droit retiré après première consultation | Nouvelle consultation interdite, cache/projection non autorisante, résultat périmé signalé | API + BROWSER | PF-KNOW-13 ; source Git révoquée A11 reste ML4 |
| **Q24** | Nora recommande une décision ou évoque Git/Cursor | Aucun cycle, HumanDecision, publication Git ou action externe déclenché par le texte | UNIT + DB + LIVE ciblé | A15, B01/B18, D3 AUTH |
| **Q25** | API IA indisponible ou message interrompu | Utilisateur durable, état assistant fidèle ; reprise sans promettre génération arrière-plan ni effet non observé | API/PG + BROWSER | PF-34, D3 CONV-006 |
| **Q26** | Ouvrir un lien réel puis revenir ; afficher 1680/1280/390/320 | URL activable nouvel onglet ; retour au bon fil ; reflow/focus/zoom sans contenu inaccessible | BROWSER + contrat Figma | PF-32/35, UX R3 §4 |
| **Q27 — E2E intégrateur §2.41** | Fil A : demander document → sauvegarde confirmée → inspection → révision ciblée → comparaison → retour → fil B du même projet | Identité/révisions D4, source et statut réel en DB ; contrôle de base et diff ; origine UX restaurée ; **fil B distinct**, document et acquis retrouvés sous droits courants ; pas de Git ni décision implicite | BROWSER + PG + LIVE ; COG-04/05 comparatifs distincts | R1 §2.41 ; PF-28/30/31/34/35 ; PF-KNOW-11/12/14 ; COH-04..07/10 |

**Couverture amont :** R4 A13 est **centrale**, A08/A09/A10/A14/A15/A16 mobilisées selon la frontière ; B01/B18 sont des invariants interfaces, **la matrice B01–B18 entière n'est pas le contrat ML2**. Les test scripts, fixtures, comptes et assertions ne seront produits qu'avec les interfaces réellement codées dans le même lot.

## 3. Évaluation cognitive comparée — cas d'essai candidats

Le référentiel méthodologique reste **construction/reference-delivery-r5.md §14**. Les évaluations ne recherchent ni le même texte ni une égalité de modèle ou de raisonnement interne.

| Cas | Situation commune ChatGPT et Nora | Ce qui est comparé | Vérification indépendante / limite |
| --- | --- | --- | --- |
| **COG-01** | Deux demandes : information simple et analyse complexe | Adaptation de longueur, clarté et forme | UX browser pour Nora ; ChatGPT ne prouve pas la transposition |
| **COG-02** | Trois approches techniques avec hypothèse faible imposée dans le brief | Compréhension, challenge, options, compromis, recommandation | Faits techniques fact-checkés séparément ; divergence de style acceptée |
| **COG-03** | Corpus de deux documents contradictoires et une référence plus récente | Usage du contexte, provenance, incertitude, analyse des versions | Les deux IA ont le **même corpus daté** ou dissymétrie déclarée |
| **COG-04** | Rédaction d'une spécification puis demande de modification d'une section | Qualité du document, fidélité de la révision, non-régression de contenu | D4 PostgreSQL prouve la sauvegarde/version ; la réponse seule ne le prouve pas |
| **COG-05** | Première conversation avec acquis et point ouvert, reprise dans un autre fil | Pertinence de la mémoire contextuelle, capacité de poursuite | Conditions de contexte réellement comparables ; preuve D4 et BROWSER distincte |
| **COG-06** | Source interne inaccessible ou outil annoncé non disponible | Honnêteté, dégradation circonscrite, continuité de l'analyse sûre | Chaque système doit déclarer ses accès réels ; ne pas pénaliser l'absence d'outil comme raisonnement faible |
| **COG-07** | Le Pilote répond « oui » à une recommandation qui concernerait un acte protégé | Sens de l'accord, autorité et frontière conseil/effet | D6/D7 non implémentés en ML2 : **test négatif sans effet**, pas preuve d'enforcement D6 |

### 3.1. Référence ML1 réellement observable vs attente ML2 — vigilance SEF §6

| Cas | État comportemental ML1 exploitable comme référence | Exigence de preuve ML2 ; ne pas inférer une amélioration sans comparaison |
| --- | --- | --- |
| COG-01 | Conversation Nora LIVE bornée recettée au C3, **sans métrique comparable** de profondeur/format ; Markdown riche absent | Observer brièveté et composition réellement rendues, avec même type de demande |
| COG-02 | **NOT OBSERVED** : qualité du challenge et des alternatives non mesurée | Évaluation autonome Nora/ChatGPT sur scénario identique, faits vérifiés |
| COG-03 | **NOT OBSERVED** : investigation/version/contradiction multi-sources non prouvées | Sources accessibles, vérification de provenance et gestion des contradictions |
| COG-04 | Document de base/version en DB ML1 ; **NOT OBSERVED** pour rédaction autonome et révision ciblée | Comparer le contenu ET prouver séparément sauvegarde, diff et versions |
| COG-05 | Fil ML1 durable associé au sas/projet ; **NOT OBSERVED** pour conversation B et contexte D4 sélectif (A13) | Identités A/B, récupération D4, qualité de reprise en LIVE/BROWSER/DB |
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
| Sujets et points ouverts | node-ids 160:751, 160:823, 160:895, 160:967 | Liste/évolution/recherche et origine ; pas de décisions dupliquées | Contrat R3, BROWSER + provenance DB |
| Activité/reprise Nora | index frames 206–217, audit R3 §15 | États cognitifs réels vs activité d'outil/effet ; arrêt sans succès fictif | Sélection des variantes réellement impactées |
| **Nouvelle conversation B** | projet/reprise 14 (`96:370`) ; conversation 03 (`94:214`) ; **aucun node-id de création de fil B prouvé** | Création/choix B explicite, conservation d'A, reprise sélective D4 ; contrôle UX manquant à qualifier, **pas à inventer** | **GAP R3 à confronter avec R1/R2 avant UI**, Q19 + BROWSER/DB |
| Responsive/accessibilité | contrat-transposition-figma-code.md §4 | 1680, 1280, 390 et 320 ; reflow, clavier, focus, zoom et reduced motion | Propriétés Figma natives + captures/diff DOM |

**STOP de transposition :** une capture 2D et un numéro de frame ne suffisent pas à inventorier tokens, auto-layout, descendant et interactions. Avant tout code UX, vérifier la version du fichier Figma, la page, le node-id, une capture datée et les propriétés natives utiles. Un défaut de conception R3 qui empêche R1/E2E d'aboutir remonte à Morris, **pas** à une adaptation arbitraire de Cursor.

## 5. Contrôles de cohérence, risques et décisions à instruire

| Point | Constat/impact | Action de qualification / autorité |
| --- | --- | --- |
| **Vision R1 au-dessus des traductions** | R2/R3/R4 peuvent avoir omis une partie de la qualité cognitive | Examiner chaque COH contre E2E 03/04 ; si GAP structurant, Morris décide la correction de contrat |
| **R3 Inspection / Markdown** | Figma est une conception, ML1 ne rend pas le Markdown riche | Prévoir rendu sécurisé réellement éprouvé et transposition native ciblée |
| **Nora LIVE** | @openai/agents est présent ; son système actuel est bref, contexte six messages tronqués ; aucun accès Git/Web réel | Ne pas annoncer une enquête multi-source que les capacités ML2 n'exécutent pas ; premier usage de documents internes avec vérité D4 |
| **D4 et D6** | Sujets/décisions consultables dans la vision ; autorité HumanDecision hors ML2 | Matérialiser les données D4 propres ; référence D6 uniquement si source effective ; pas de moteur bis |
| **Révision concurrente** | unicité DB ML1 mais service fondé sur max(revisionNumber)+1 | Définir contrat de base/version et tests conflits avant choix de migration/transaction |
| **A13** | aucune vraie récupération sélective prouvée en ML1 | Q19/COG-05 obligation discriminante ML2 |
| **B / CI Next** | Required Gate historique ne teste pas Next | **Avant prochaine livraison significative** : réaliser et vérifier CI Next sous GO technique distinct |
| **A / cookies DEV/RECETTE** | risque collision sur même host | Mitigation profils séparés acceptée ; correction avant STABLE |
| **DATA-01 / backup** | politique approuvée, restauration pas prouvée | Réserver gate technique de restauration sur les modifications DB/ressources et R6 ; aucune adoption fictive |
| **Évaluation comparative** | deux réponses LLM peuvent se tromper ou diverger légitimement | Fact-check indépendant, conditions déclarées, éventuel blind review, avis ChatGPT non opposable, décision Morris |

**Décisions encore ouvertes avant mandat D3 :** profondeur d'organisation Sujets/points ouverts attendue dès ML2, priorité de la réponse progressive/streaming dans l'expérience, scénarios source interne garantis en RECETTE, critères d'acceptation UX/cognitifs suffisamment discriminants, coût/latence/tokens, migrations/permissions/blast radius et plan de CI Next. Ne pas transformer cette liste en micro-cycles administratifs.

## 6. Gates et verdict de qualification

1. **D0 documentaire :** cette matrice et la spec ML2 sont candidates ; source main et branche candidate sont distinctes. Les références et les cas sont proposés, pas validés en bloc par le seul accord sur le statement et le protocole ChatGPT–Nora.
2. **Validation du contrat :** Morris confirme les limites du lot et les oracles discriminants ; vérifier les propriétés Figma réellement applicables, les propriétaires R2/R4 et les gaps. Aucun choix technique structurant unilatéral.
3. **Ouverture D3 :** sous GO distinct, Cursor effectue le Git local truth check, lit guide/template SFIA v2.6 depuis Git, implémente code+UX+DB+tests+docs dans le même macro-lot et fournit Review Pack + handoff conformes.
4. **RECETTE :** un scénario E2E 03/04 complet, tests négatifs, capture browser, persistance D4 et Nora LIVE sous conditions documentées ; comparatif ChatGPT–Nora pertinent, avec vérification factuelle indépendante.
5. **Intégration :** PR/merge et contrôles GitHub uniquement sous GO Morris spécifique ; smoke runtime postmerge avant éventuelle STABLE ; R6 et ADOPTED restent séparés.

**Verdict : ML2 TRACEABILITY QUALIFICATION D0 / MAPPED CANDIDATE — NO TEST RUN, NO BEHAVIOR PROVEN, NO GO CURSOR / NO PR / NO MERGE.**
