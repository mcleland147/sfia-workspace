# SFIA Studio Next — Spécification fonctionnelle R2
## Résultats, preuves et qualification de conformité

| Métadonnée | Qualification |
| --- | --- |
| **Version / date** | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02) — interfaces réservées** |
| **Domaine propriétaire** | **8 — Résultats et preuves** (vision R1 §§2.27, 2.29, 2.35) |
| **Résultat pour le Pilote** | Comprendre ce qui a réellement été réalisé et démontré, les écarts et réserves, puis décider en connaissance de cause sans confondre le retour de Cursor, la conformité et sa propre acceptation |
| **Git contrôlé** | `mcleland147/sfia-workspace` ; `main@8751775edc314e8fc7f0855104e5000290be9839` ; branche R2 `sfia/next-r2-functional-specs@cd9262248f16037ff5d31789b54ea73b9983a938` |
| **Sources R2 validées confrontées** | D3 Nora v0.4 ; D4 Connaissance v0.1 ; D5 Trajectoire/CKI v0.1 ; D6 Décisions/Gouvernance v0.1 ; D7 Réalisation opérationnelle v0.1 |
| **Références CKI** | CKI Next v0.2 **CANDIDATE** — quinze fiches autonomes et matrice de 50 relations non contraignantes (notamment QA, sécurité, PR readiness, release) |
| **État produit** | **N/A — NON IMPLÉMENTÉ** ; aucun verdict observé en runtime Next ni preuve LIVE/REAL revendiqués |
| **Gate** | **VALIDATED SPEC — contenu approuvé par Morris le 2026-11-02, publié sur la branche R2** ; aucun PR, merge, adoption ni arbitrage R4 anticipés |

## 1. Résultat utilisateur, périmètre IN/OUT et responsabilités

### 1.1. Finalité et séparation décisive

Le Pilote doit pouvoir distinguer : **(1) ce que l’exécuteur déclare**, **(2) ce que Studio et Nora peuvent constater ou vérifier**, **(3) le degré de conformité démontré contre le contrat**, **(4) ce que le Pilote décide d’accepter ou de différer**. Ces dimensions n’ont ni la même source, ni la même autorité, ni les mêmes conditions de vérité.

**IN D8 :** examen des résultats techniques et observations réellement accessibles, qualification de leur provenance et de leurs limites, confrontation aux critères applicables, conclusions bornées sur la conformité, écarts/réserves/incertitudes, bilan intelligible et références permettant la continuité. Des résultats d’autres travaux peuvent être examinés à proportion, sans attribuer fictivement une tentative D7.

**OUT D8 :** exécution ou relance technique ; propriétaire du contrat et de la tentative (D7) ; acceptation métier, suspension, levée et autorisation (D6) ; stockage des sujets et décisions (D4/D6) ; gouvernance des états Git (D9) ; ouverture/clôture des cycles et activation CKI (D5) ; moteur universel de tests, outil de certification indépendant présumé, audit obligatoire de chaque réponse de Nora, promotion ou adoption automatique. L’analyse et la présentation conversationnelles restent conduites par Nora (D3).

### 1.2. Matrice des responsabilités canoniques

| Domaine | Source ou acte possédé | Consommation légitime par D8 | Interdit de dupliquer |
| --- | --- | --- | --- |
| **D3 — Nora** | Investigation cognitive, confrontation argumentée, restitution | Analyse contextualisée des pièces accessibles | Deuxième décision humaine ou suivi live inventé |
| **D4 — Connaissance** | Sources, sujets et points ouverts, historique/contextualisation | Références et points ouverts utiles ; mise à disposition des conclusions | Nouvelle mémoire probatoire concurrente |
| **D5 — Trajectoire/CKI** | Cycle réel, référence de méthode, CKI principal | Finalité et contexte de maturité si pertinents | CKI comme oracle bloquant ou gate automatique |
| **D6 — Décisions/gouvernance** | Actes du Pilote, validité des autorisations, acceptations et suspensions | Référence à la décision applicable, jamais substitution | Acceptation ou dérogation aux restrictions |
| **D7 — Réalisation** | Contrat opérationnel, tentative, états, événements et retours reçus | Déclarations, références et observations effectives de réalisation | Nouveau moteur de tentative, relance ou STOP |
| **D8 — Résultats/preuves** | Qualification du résultat, suffisance des éléments, écarts et limites | **Propriétaire de cette spécification** | Certification globale non démontrée |
| **D9 — Git** | Accès, droits, refs, commits, branche, conflits et effets Git | Références et observations accessibles sur le bon périmètre | Droit de lecture/écriture ou preuve Git fabriqués |

Le domaine 8 **n’impose pas l’existence d’un cycle** pour examiner une tentative autorisée. Il n’impose pas non plus d’ouvrir QA : les connaissances professionnelles restent mobilisables par Nora sans deuxième CKI actif.

## 2. Contrat d’information et langage de verdict

### 2.1. Informations indispensables lorsque la conclusion en dépend

| Information | Usage pour D8 | Limite |
| --- | --- | --- |
| **Objet évalué** | Résultat/activité, Pilote et projet de référence, contrat/critères applicables le cas échéant | Ne présume pas d’une réalisation D7 pour un texte directement produit par Nora |
| **Éléments probatoires** | Nature (déclaration, observation, test, Git, capture...), origine, environnement, version/date, accès et limites | Une déclaration n’est pas une preuve indépendante |
| **Comparaison** | Critère ou attente vs fait effectivement observé, cas couverts/écartés, contre-indication | Aucun score générique de confiance ou pourcentage universel |
| **Conclusion** | Résultat établi, non établi, partiel, contradictoire ; conformité étayée ou non démontrée | Conclusion circonstanciée, pas statut d’exécution D7 |
| **Réserves et suites** | Gravité, effets, condition d’approfondissement, preuve à chercher, propriétaire de l’action | D4 conserve les points ouverts, D6 décide des acceptations |
| **Acte du Pilote** | Référence à l’acceptation/refus/report lorsqu’il existe | D8 ne fabrique ni n’émet l’acte |

### 2.2. Échelle qualitative de conclusion — vocabulaire, pas automate

- **Déclaré :** affirmation provenant de Cursor, d’un humain ou d’un document, sans corroboration suffisante de l’assertion considérée.
- **Observé :** fait établi dans une portée et un contexte identifiables, sans nécessairement démontrer tous les critères du contrat.
- **Conforme sur un périmètre identifié :** résultats et critères examinés suffisamment corroborés au niveau requis et avec réserves explicites ; ne signifie ni conformité universelle ni décision du Pilote.
- **Non conforme :** écart réel établi à un critère applicable, dans sa portée ; une pièce absente n’est pas automatiquement une preuve d’échec.
- **Non démontré / indéterminé :** information probatoire insuffisante, inaccessible, contradictoire ou observation hors périmètre ; n’équivaut pas à conforme ou non conforme.
- **Accepté/refusé/reporté par le Pilote :** état de la décision appartenant à D6 ; orthogonal au jugement factuel de D8.

Cette terminologie sert la restitution et les scénarios. **Elle n’impose ni enum technique, ni algorithme de scoring, ni double registre métier** ; l’architecture R4 devra permettre de conserver des conclusions explicables et révisables.

### 2.3. Exemple de discernement

Cursor affirme « tests réussis », D7 confirme une tentative terminée, D9 permet de constater le commit prévu, mais la sortie des tests est inaccessible. D8 peut conclure **commit observé**, **tests non vérifiés** et **conformité globale non démontrée**. Nora restitue ces distinctions au Pilote ; aucune décision d’acceptation ni autorisation de merge n’est créée.

## 3. Règles de gestion fonctionnelles validées — propriétaire domaine 8 (interfaces réservées)

### 3.A — Périmètre, sources et chaîne de provenance

- **RG-PRV-001 — Résultat rattaché à un travail réel.** Une qualification D8 désigne l’objet examiné : projet/Pilote concernés, résultat attendu, contrat ou engagement de référence lorsqu’il existe, et réalisation/observation correspondante. Une réalisation D7 absente n’empêche pas d’examiner un résultat produit autrement, mais ne permet pas d’inventer une tentative technique. **Interfaces :** R1 §§2.27/2.35 ; D7 `RG-REAL-015/031` ; D4 `RG-KNOW-006`.
- **RG-PRV-002 — Contrat et critères applicables.** Le bilan confronte les observations aux attentes et critères effectivement applicables à ce résultat et à la période considérée ; il distingue le contrat autorisé, les modifications décidées et les attentes encore hypothétiques. Une version future ne requalifie pas rétroactivement une ancienne observation. **Interfaces :** R1 §2.35 ; D6 `RG-GOV-009/010/026` ; D7 `RG-REAL-007/011`.
- **RG-PRV-003 — Origine typée des éléments.** Chaque élément déterminant est identifié selon sa nature : déclaration de Cursor, événement D7, observation Studio, sortie de test, inspection Git, capture, constat humain ou hypothèse de Nora. Un intitulé « preuve » ne change pas la nature de son origine. **Interfaces :** R1 §§2.27/2.35 ; D7 `RG-REAL-019/022` ; D3 `RG-APP-001`.
- **RG-PRV-004 — Provenance vérifiable et périmètre.** Une assertion probatoire déterminante doit référencer, dans la mesure effectivement accessible, son origine, l’objet concerné, la version/branche/environnement et la date ou condition d’observation utile. L’élément sans provenance suffisante demeure de force limitée. **Interfaces :** D3 `RG-CTX-003/005` ; D4 `RG-KNOW-006/007` ; D9 futur.
- **RG-PRV-005 — Acquis sans duplication de registres.** D8 possède la qualification du résultat et les références probatoires nécessaires. D7 reste propriétaire de la tentative/retour brut, D4 des connaissances et points ouverts, D6 des décisions, D9 des états Git ; une même source peut être référencée sans devenir quatre vérités concurrentes. **Interfaces :** D4 `RG-KNOW-004/010/011` ; D7 `RG-REAL-031/035` ; D6 `RG-GOV-009`.
- **RG-PRV-006 — Accès et fraîcheur du contrôle.** D8 ne présente comme vérifié que ce qu’un contrôle effectivement accessible et suffisamment actuel a permis d’établir. Une ancienne capture, un lien brisé, une permission retirée ou une source hors portée n’équivalent pas à une vérification présente. **Interfaces :** D3 `RG-CTX-007/008`, `RG-APP-007` ; D4 `RG-KNOW-012/014` ; D9 futur.
- **RG-PRV-007 — Préservation des divergences.** Les déclarations, résultats et contre-indications matériellement incompatibles restent distingués avec leurs sources et portées ; le bilan n’efface pas une preuve contraire par commodité ni ne combine artificiellement deux branches/environnements différents. **Interfaces :** D3 `RG-CTX-005` ; D4 `RG-KNOW-008` ; R1 §2.35.
- **RG-PRV-008 — Fidélité et protection des informations.** Les éléments utiles sont montrés ou référencés dans les permissions et la confidentialité applicables : un secret, une donnée personnelle ou une ressource interprojets ne devient pas diffusible parce qu’il figure dans un rapport. L’occultation ne doit pas masquer une incertitude matérielle. **Interfaces :** R1 §§2.23/2.24/2.36 ; D4 `RG-KNOW-014` ; D6 `RG-GOV-014` ; R3/R4.

### 3.B — Confrontation, niveaux de démonstration et écarts

- **RG-PRV-009 — Exigence et observation confrontées.** Un jugement de conformité expose les critères examinés, l’observation qui les soutient, les cas importants non couverts et l’écart éventuel. Le simple fait de disposer de fichiers, d’une capture ou d’un test vert ne démontre pas tous les comportements du contrat. **Interfaces :** R1 §2.35 ; D7 `RG-REAL-007/031` ; CKI QA guidance uniquement.
- **RG-PRV-010 — Rapport exécuteur non auto-certifiant.** Une affirmation de Cursor « terminé », « tests OK » ou « conforme » demeure une déclaration tant que les traces, résultats ou contrôles pertinents ne sont pas accessibles et examinés ; D8 ne l’élève pas mécaniquement en preuve indépendante. **Interfaces :** D7 `RG-REAL-022/024/034` ; R1 §2.27.
- **RG-PRV-011 — Observation indépendante proportionnée.** Selon le risque, Nora/D8 recherchent les observations effectivement disponibles hors de la seule déclaration de l’exécuteur : test, diff ciblé, effet observable, logs, capture runtime ou vérification liée au contrat. L’absence d’intégration ou de droits limite le jugement, pas le langage de vérité. **Interfaces :** R1 §§2.27/2.35 ; D3 `RG-CTX-003/008` ; D9 futur.
- **RG-PRV-012 — Niveaux de démonstration non interchangeables.** Un test déterministe, une simulation, une capture navigateur, une intégration connectée et une observation LIVE/REAL ne couvrent pas nécessairement les mêmes assertions. Le bilan nomme les conditions effectivement éprouvées et n’attribue pas un niveau supérieur par analogie. **Interfaces :** SEF §6.2–6.3 ; R1 §2.27 ; CKI QA.
- **RG-PRV-013 — Couverture ciblée sur le risque.** L’étendue des vérifications et des références probatoires dépend de la criticité, des exigences et des effets réels. Aucun quota universel, score chiffré ou batterie de tests exhaustive ne s’impose à tout résultat ; les obligations applicables restent opposables. **Interfaces :** SEF §6.3 ; R1 §§2.27/2.35 ; D5 `RG-TRJ-013`.
- **RG-PRV-014 — Résultat exécuté distinct du résultat atteint.** Une tentative achevée ne signifie pas que l’objectif est atteint ; inversement, un effet observé partiel peut être établi malgré une tentative en échec. D8 précise ce qui est accompli, manquant, incertain, conforme ou non conforme sur le périmètre réellement jugé. **Interfaces :** D7 `RG-REAL-020/021/024` ; R1 §2.35.
- **RG-PRV-015 — Inconnu et preuve insuffisante explicites.** Quand les sources pertinentes sont absentes, ambiguës, obsolètes ou inaccessibles, le jugement demeure « non vérifié » ou « conformité non démontrée » pour les assertions touchées, plutôt que « conforme » ou « non conforme » inventé. La limite n’efface pas les faits indépendamment établis. **Interfaces :** D3 `RG-APP-008` ; D4 `RG-KNOW-013` ; D7 `RG-REAL-034`.
- **RG-PRV-016 — Écart réel et contre-preuve.** Un résultat observé contraire au critère est qualifié comme écart/échec dans le champ concerné, avec gravité et conséquence proportionnées ; une preuve manquante ne doit pas être assimilée à un échec factuel, ni une preuve de succès local neutraliser un défaut critique observé. **Interfaces :** R1 §2.35 ; D6 `RG-GOV-015` ; D4 `RG-KNOW-008`.
- **RG-PRV-017 — Conditions et environnement de validité.** Un résultat probant sur une branche, un environnement, un jeu de données ou une version ne prouve pas un autre périmètre. Une requalification est nécessaire seulement si la divergence de contexte peut modifier la conclusion ou l’effet attendu. **Interfaces :** D3 `RG-APP-002` ; D4 `RG-KNOW-007`; D9 futur.
- **RG-PRV-018 — Analyse des cas négatifs pertinents.** L’évaluation prend en compte, selon l’objectif et le risque, des cas d’autorité, de reprise, de double lancement, d’interruption, de données invalides, de concurrence et d’accès refusé. La guidance CKI peut aider à identifier des angles morts sans instaurer ces cas comme gates CKI universels. **Interfaces :** R1 E2E 05–07 ; D7 `RG-REAL-017/025/029` ; CKI QA/DevOps.

### 3.C — Restitution, conservation et contradictions

- **RG-PRV-019 — Bilan Pilot-first intelligible.** Le Pilote reçoit une synthèse utile : résultat attendu, effets réellement constatés, critères examinés, conclusion bornée, écarts, réserves, inconnues et prochaine suite. Nora adapte profondeur/forme sans imposer une grille d’audit ou un modèle fixe à chaque réponse. **Interfaces :** R1 §2.27 ; D3 `RG-CONV-001/006`, `RG-UX-003`.
- **RG-PRV-020 — Visibilité des preuves et limites.** Lorsque la conclusion est structurante, le bilan donne accès à des références vérifiables ou explique précisément la source inaccessible et l’impact de cette limite. Un lien ou bouton absent n’est pas remplacé par une référence inventée. **Interfaces :** D3 `RG-CTX-003/008`, `RG-UX-002` ; D4 `RG-KNOW-006`.
- **RG-PRV-021 — Statuts et formulations honnêtes.** Les expressions « terminé », « observé », « conforme », « non démontré », « accepté », « mergé » et « ADOPTED » ne sont pas interchangeables. Le statut affiché reste limité à la propriété réellement établie, sans badge de succès global trompeur. **Interfaces :** SEF §6.2 ; D6 `RG-GOV-031/036` ; D7 `RG-REAL-036`.
- **RG-PRV-022 — Restitution des résultats partiels.** Une exécution partielle ou interrompue donne lieu à un bilan des effets connus, des effets possibles mais non vérifiés, des erreurs et des reprises nécessaires. D8 n’invente ni rollback, ni annulation, ni état terminal D7. **Interfaces :** D7 `RG-REAL-021/026/029` ; D6 `RG-GOV-020/022`.
- **RG-PRV-023 — Réserves reliées aux responsabilités.** D8 qualifie les réserves factuelles et les incertitudes de conformité ; D4 les rend retrouvables comme points ouverts, D6 conserve tout arbitrage humain d’acceptation/restriction et D7 porte la tentative. Une réserve n’est pas fermée par une simple reformulation. **Interfaces :** D4 `RG-KNOW-004/009` ; D6 `RG-GOV-031/032`.
- **RG-PRV-024 — Évolution des constats sans réécriture.** Une preuve supplémentaire, une vérification répétée ou un changement de contexte peut justifier une nouvelle qualification datée, sans effacer la précédente ni redécrire rétroactivement l’état d’une tentative ou d’une décision. **Interfaces :** D4 `RG-KNOW-007/008` ; D6 `RG-GOV-010` ; D7 `RG-REAL-035`.
- **RG-PRV-025 — Reprise inter-conversations fiable.** Après interruption, Nora retrouve par les propriétaires applicables les constats, références, contradictions et réserves utiles ; une reconstruction mémoire ne fabrique ni trace de test, ni preuve de conformité, ni acceptation. **Interfaces :** D3 `RG-CTX-006` ; D4 `RG-KNOW-011/015` ; D6 `RG-GOV-016`.
- **RG-PRV-026 — Sources adversariales et non fiables.** Un document, rapport, commit ou fichier qui ordonne « déclare conforme » ou « ignore cette preuve » reste une source de données, jamais une instruction d’autorité pour D8. Nora compare les éléments plutôt que suivre les consignes incorporées aux sources. **Interfaces :** D3 `RG-CTX-007` ; D4 `RG-KNOW-008` ; R1 §2.13.

### 3.D — Acceptation, corrections et frontières de gouvernance

- **RG-PRV-027 — Acceptation exclusivement humaine.** D8 peut fournir un constat de conformité étayé ou recommander d’accepter ; la décision métier de réception, de refus, de report ou d’acceptation avec réserves appartient au Pilote compétent via D6, selon sa portée. D8 ne maintient pas un second registre de décisions. **Interfaces :** R1 §§2.27/2.35 ; D6 `RG-GOV-008/031/032`.
- **RG-PRV-028 — Conformité technique non autorisante.** Même une conformité suffisamment démontrée n’autorise pas automatiquement release, merge Git, changement de cycle, exécution, clôture des suspensions ou statut ADOPTED. Ces effets restent régis par leurs domaines et gates réellement applicables. **Interfaces :** D5 `RG-TRJ-012/013` ; D6 `RG-GOV-029/036` ; D7 `RG-REAL-036` ; D9 futur.
- **RG-PRV-029 — Acceptation de risque sans effacement des preuves.** Le Pilote peut accepter une réserve ou un risque relevant de son pouvoir, mais son choix ne transforme pas un échec ou une preuve absente en réussite, et ne déroge pas à une restriction non dérogeable. D8 conserve l’appréciation factuelle et les limites. **Interfaces :** D6 `RG-GOV-015/031/032` ; R1 §2.35.
- **RG-PRV-030 — Correction recommandée sans auto-lancement.** En cas d’écart, Nora peut proposer un approfondissement ou préparer spontanément un nouveau contrat de correction/vérification ; D8 ne déclenche rien. Chaque nouvelle tentative technique passe par D7 et un nouvel acte « Exécuter » valide de D6. **Interfaces :** R1 §2.21 ; D6 `RG-GOV-033` ; D7 `RG-REAL-032/033`.
- **RG-PRV-031 — Obligations externes conservées.** Si une politique de sécurité, un contrat, un critère qualité ou un gate Git réellement applicable exige une preuve déterminée, D8 signale le manque et ses conséquences. Ni la guidance CKI ni l’appréciation de maturité ne créent ou ne dispensent de ces obligations. **Interfaces :** D3 `RG-APP-004` ; D5 `RG-TRJ-013` ; D6 `RG-GOV-015/034`.
- **RG-PRV-032 — Examen même sans cycle ou CKI.** Une réalisation autorisée hors cycle peut être qualifiée par D8 ; l’absence de CKI QA actif ne retire pas à Nora la capacité de vérifier un résultat. La matrice CKI ne déclenche ni cycle ni verdict. **Interfaces :** R1 §§2.16/2.17/2.35 ; D5 `RG-TRJ-008/025..029` ; corpus CKI candidat.
- **RG-PRV-033 — Aucune preuve technique systématique des réponses cognitives.** Les analyses et documents produits directement par Nora restent évalués pour leur justesse et provenance selon D3/D4 ; D8 n’impose pas un dossier de preuve d’exécution ou un contrat D7 à chaque échange sans effet externe. **Interfaces :** R1 §2.27 ; D3 `RG-CONV-005`, `RG-CTX-003`.
- **RG-PRV-034 — Portabilité entre dépôts et projets contrôlée.** Une preuve trouvée sur un dépôt partagé peut être citée dans le projet courant si l’accès est autorisé et la portée explicite ; elle n’importe ni acceptation d’un autre Pilote, ni vérification de son environnement, ni permission d’écriture. **Interfaces :** R1 §§2.24/2.36 ; D4 `RG-KNOW-014` ; D6 `RG-GOV-014` ; D9 futur.
- **RG-PRV-035 — Indépendance et impact des changements.** Une modification du périmètre/critère d’acceptation ou une source plus récente conduit à revoir seulement les conclusions réellement affectées, avec identification des dépendances et de la version applicable ; les constats indépendants peuvent rester utilisables. **Interfaces :** D3 `RG-AUTH-004` ; D6 `RG-GOV-021` ; D7 `RG-REAL-028`.
- **RG-PRV-036 — Non-adoption du jugement et preuves proportionnées.** La rédaction de ce contrat, un test déterministe ou un résultat positif ne valent ni BEHAVIOR PROVEN ni ADOPTED. Un verdict fort exige des observations du niveau revendiqué, et la promotion globale suit les décisions et gates du programme, jamais le CKI. **Interfaces :** SEF §6.2 ; R1 §§2.27/2.39 ; D6 `RG-GOV-036`.

## 4. Scénarios fonctionnels candidats et couverture des règles

Ces cas servent de **contrats de recette fonctionnelle à adapter aux risques** : ils ne valent ni preuve déterministe, ni test navigateur, ni observation LIVE/REAL. Ils se rattachent en priorité à R1 E2E 05, 06 et 07, et selon contexte à E2E 02/04. Aucun passage systématique par un cycle QA n’est requis.

| Cas | Situation | Résultat attendu | Règles sollicitées |
| --- | --- | --- | --- |
| **PF-PRV-01** | Tentative terminée et tests corroborés | Comparer contrat, résultats de tests accessibles, artefacts et effet réellement vérifié ; qualifier le seul périmètre couvert | `RG-PRV-001`, `RG-PRV-002`, `RG-PRV-003`, `RG-PRV-004`, `RG-PRV-009`, `RG-PRV-010`, `RG-PRV-011`, `RG-PRV-012`, `RG-PRV-014`, `RG-PRV-017`, `RG-PRV-019`, `RG-PRV-020`, `RG-PRV-021`, `RG-PRV-027` |
| **PF-PRV-02** | Cursor déclare « tests OK » sans sorties | Rapport seul : tests non vérifiés, conformité non démontrée ; demander un contrôle utile | `RG-PRV-003`, `RG-PRV-006`, `RG-PRV-010`, `RG-PRV-011`, `RG-PRV-015`, `RG-PRV-019`, `RG-PRV-020` |
| **PF-PRV-03** | Diff Git constaté, tests non accessibles | Distinguer présence du diff de réussite des tests et de conformité générale | `RG-PRV-004`, `RG-PRV-009`, `RG-PRV-011`, `RG-PRV-012`, `RG-PRV-015`, `RG-PRV-017`, `RG-PRV-021` |
| **PF-PRV-04** | Test vert sur une seule condition | Relier l’observation au critère et identifier les exigences et contextes non couverts | `RG-PRV-002`, `RG-PRV-009`, `RG-PRV-012`, `RG-PRV-013`, `RG-PRV-017`, `RG-PRV-018` |
| **PF-PRV-05** | Défaut reproductible malgré tests verts | Qualifier le défaut et conserver les preuves contradictoires ; ne pas déclarer conformité globale | `RG-PRV-007`, `RG-PRV-009`, `RG-PRV-016`, `RG-PRV-018`, `RG-PRV-021`, `RG-PRV-023` |
| **PF-PRV-06** | Exécution interrompue avec effets partiels | Restituer effets confirmés, possibles ou inconnus sans rollback fictif | `RG-PRV-001`, `RG-PRV-005`, `RG-PRV-014`, `RG-PRV-015`, `RG-PRV-022`, `RG-PRV-025` |
| **PF-PRV-07** | Fin de flux et état technique inconnu | Ne pas transformer une déconnexion en succès, arrêt ou échec prouvé | `RG-PRV-006`, `RG-PRV-014`, `RG-PRV-015`, `RG-PRV-022`, `RG-PRV-025` |
| **PF-PRV-08** | Capture UI historique vs version courante | Contrôler date, build, environnement ; limiter la conclusion au contexte vérifié | `RG-PRV-004`, `RG-PRV-006`, `RG-PRV-012`, `RG-PRV-017`, `RG-PRV-024`, `RG-PRV-035` |
| **PF-PRV-09** | Preuve inaccessible pour droits révoqués | Exposer la limite de vérification sans fabriquer de résultat ni contourner les permissions | `RG-PRV-006`, `RG-PRV-008`, `RG-PRV-015`, `RG-PRV-020`, `RG-PRV-025`, `RG-PRV-034` |
| **PF-PRV-10** | Rapport et référence Git contradictoires | Comparer branche/commit/périmètre/temps ; conserver les deux assertions jusqu’à qualification | `RG-PRV-004`, `RG-PRV-007`, `RG-PRV-009`, `RG-PRV-017`, `RG-PRV-026`, `RG-PRV-034` |
| **PF-PRV-11** | Réserve factuelle demeurant après correction | Documenter la nouvelle observation et maintenir l’historique ; réserver à D6 la décision | `RG-PRV-005`, `RG-PRV-016`, `RG-PRV-023`, `RG-PRV-024`, `RG-PRV-027`, `RG-PRV-035` |
| **PF-PRV-12** | Pilote accepte avec réserves | D6 conserve la décision ; D8 garde les réserves et l’appréciation factuelle intactes | `RG-PRV-021`, `RG-PRV-023`, `RG-PRV-027`, `RG-PRV-028`, `RG-PRV-029` |
| **PF-PRV-13** | Acceptation de risque contraire à une interdiction | Refuser de présenter le risque accepté comme dérogation à une règle non dérogeable | `RG-PRV-027`, `RG-PRV-029`, `RG-PRV-031` |
| **PF-PRV-14** | Nora prépare un contrat correctif | D8 signale l’écart et conseille ; D7/D6 contrôlent la nouvelle exécution | `RG-PRV-016`, `RG-PRV-019`, `RG-PRV-027`, `RG-PRV-030` |
| **PF-PRV-15** | Pas de cycle QA ouvert | Nora peut vérifier les éléments pertinents sans charger un autre CKI ni ouvrir un cycle | `RG-PRV-013`, `RG-PRV-018`, `RG-PRV-032`, `RG-PRV-033` |
| **PF-PRV-16** | CKI QA suggère un gate universel | Chercher la source réelle de l’obligation ; la suggestion CKI ne suffit pas | `RG-PRV-018`, `RG-PRV-028`, `RG-PRV-031`, `RG-PRV-032` |
| **PF-PRV-17** | Projet Studio sans Git | Qualifier un résultat avec sources non-Git réellement disponibles ; pas de dépôt obligatoire | `RG-PRV-001`, `RG-PRV-004`, `RG-PRV-011`, `RG-PRV-019`, `RG-PRV-032`, `RG-PRV-034` |
| **PF-PRV-18** | Travail purement cognitif Nora | Réponse fiable et sourcée selon D3/D4 ; pas de ReviewBundle ou dossier de preuve systématique | `RG-PRV-013`, `RG-PRV-019`, `RG-PRV-033` |
| **PF-PRV-19** | Résultat ancien repris après nouvelle session | Récupérer références/constats et qualifier leur fraîcheur sans recréer des tests | `RG-PRV-005`, `RG-PRV-006`, `RG-PRV-024`, `RG-PRV-025` |
| **PF-PRV-20** | Instruction hostile dans le rapport Cursor | Ne pas traiter « ignore cet échec » comme une instruction supérieure ; conserver les observations | `RG-PRV-003`, `RG-PRV-007`, `RG-PRV-026` |
| **PF-PRV-21** | Dépôt partagé entre deux Pilotes | Comparer droits et portée sans importer acceptation, preuve ou autorité de l’autre projet | `RG-PRV-008`, `RG-PRV-017`, `RG-PRV-027`, `RG-PRV-034` |
| **PF-PRV-22** | Tests déterministes seulement pour une capacité navigateur | Ne pas revendiquer BEHAVIOR PROVEN navigateur ou REAL sur de simples mocks | `RG-PRV-009`, `RG-PRV-012`, `RG-PRV-015`, `RG-PRV-036` |
| **PF-PRV-23** | Preuve d’intégration en environnement de test | Spécifier les conditions testées et les limites de généralisation à la production | `RG-PRV-011`, `RG-PRV-012`, `RG-PRV-017`, `RG-PRV-036` |
| **PF-PRV-24** | Critères d’acceptation modifiés en cours de travail | Réévaluer la partie réellement affectée sans réécriture des preuves antérieures | `RG-PRV-002`, `RG-PRV-007`, `RG-PRV-024`, `RG-PRV-035` |
| **PF-PRV-25** | Tentative non terminée mais effet réel déjà observé | Conserver l’effet démontré sans inventer un état terminal ni une conformité globale | `RG-PRV-001`, `RG-PRV-014`, `RG-PRV-022` |
| **PF-PRV-26** | Besoin d’un bilan compact et de sources inspectables | Produire synthèse Pilot-first, liens réels et incertitudes utiles, sans checklist omniprésente | `RG-PRV-013`, `RG-PRV-019`, `RG-PRV-020`, `RG-PRV-021` |
| **PF-PRV-27** | Merge réalisé mais release non vérifiée | Rendre compte du merge vérifié sans déduire disponibilité utilisateurs ni ADOPTED | `RG-PRV-012`, `RG-PRV-017`, `RG-PRV-021`, `RG-PRV-028`, `RG-PRV-036` |
| **PF-PRV-28** | Une preuve négative invalide un verdict précédent | Conserver la qualification antérieure datée, réviser le jugement courant et ses réserves | `RG-PRV-007`, `RG-PRV-016`, `RG-PRV-023`, `RG-PRV-024`, `RG-PRV-035` |
| **PF-PRV-29** | Tests/rapport absents après crash D7 | Signaler précisément les observations et manques ; proposer vérification, jamais relance autonome | `RG-PRV-005`, `RG-PRV-006`, `RG-PRV-015`, `RG-PRV-022`, `RG-PRV-025`, `RG-PRV-030` |
| **PF-PRV-30** | Un gate de sécurité documenté exige une preuve | Qualifier la preuve manquante selon source/portée applicable, sans gate inventé par CKI | `RG-PRV-008`, `RG-PRV-013`, `RG-PRV-018`, `RG-PRV-029`, `RG-PRV-031` |
| **PF-PRV-31** | Aucune source vérifiable pour une assertion critique | Verdict borné « non démontré », contrôle recommandé et aucune acceptation automatique | `RG-PRV-006`, `RG-PRV-010`, `RG-PRV-015`, `RG-PRV-020`, `RG-PRV-027`, `RG-PRV-036` |
| **PF-PRV-32** | Plusieurs conditions positives et une réserve non bloquante | Qualifier le succès partiel/local, la réserve et les choix du Pilote sans verdict global fictif | `RG-PRV-009`, `RG-PRV-013`, `RG-PRV-016`, `RG-PRV-019`, `RG-PRV-023`, `RG-PRV-027`, `RG-PRV-029` |

**Couverture documentaire :** les 36 `RG-PRV-001..036` sont chacune reliées à au moins un des 32 scénarios `PF-PRV-01..32`. La couverture documentaire ne prouve pas un comportement du produit. Priorités de validation : assertions contradictoires, sources absentes, périmètres de preuve, acceptation avec réserves, autorité, correction et Git partagé.

## 5. Revue transversale et réserves à résoudre

### 5.1. Matrice des contrats existants et des interfaces

| Source | Qualification de l’interface | Verdict et justification |
| --- | --- | --- |
| **R1 §§2.27/2.35, 2.21, 2.34/2.36** | Déclaration/exécution ≠ observation ≠ conformité ≠ acceptation ; restitution et reprise | **COMPATIBLE au niveau fonctionnel** : aucun verdict de D8 ne produit d’exécution, de décision ou de merge |
| **Nora v0.4 — `RG-CONV`, `RG-CTX`, `RG-APP`, `RG-UX`** | Analyse, provenance, source hostile, présentation intelligible | **COMPATIBLE** : Nora reste responsable de l’analyse ; D8 qualifie le résultat sans imposer un format conversationnel universel |
| **Connaissance v0.1 — `RG-KNOW-004/006..015`** | Sources, contradictions, points ouverts et reprise | **COMPATIBLE** : D8 porte l’évaluation probatoire, D4 les objets de continuité et les références aux décisions |
| **Trajectoire/CKI v0.1 — `RG-TRJ-008..029`** | Maturité, CKI unique, transition gouvernée | **COMPATIBLE** : D8 fournit un constat de résultat, jamais un gate CKI ou une clôture automatique |
| **Décisions/Gouvernance v0.1 — `RG-GOV-015/023..036`** | Consentement, risque, restrictions, acceptation | **COMPATIBLE** : D6 décide ; D8 ne modifie pas la validité des mandats ou des acceptations |
| **Réalisation v0.1 — `RG-REAL-015..036`** | Tentative, déclaration, suivi, STOP et rapport | **COMPATIBLE** : D7 est la source des retours/états techniques ; D8 confronte les sources aux attentes |
| **CKI Next v0.2 — QA, Sécurité, PR readiness, Release, Post-merge** | Guidance spécialisée, maturité et approfondissements | **COMPATIBLE SOUS CONDITION DE NON-AUTORITÉ** : aucune fiche CKI candidate ne crée un gate, un « READY », une conformité ou une autorisation |
| **D9 — Git (future spec)** | Accessibilité, commit/branche/base, vérification et identité | **NON ÉVALUÉ** contre son futur contrat propriétaire ; pas de conformité Git ou autorisation déduites d’une URL |
| **D1/D2 — Accès et projet (futures specs)** | Identité et séparation des projets | **NON ÉVALUÉ** : D8 requiert la portée fiable, n’authentifie pas le Pilote |

### 5.2. Suivi des réserves, propriétaire et échéance

| ID | État/risque | Propriétaire, étape | Critère de résolution |
| --- | --- | --- | --- |
| **PRV-01 — REAL-06 / Rapport vs preuve** | **INTERFACE R2 QUALIFIÉE**, sans preuve comportementale | D7/D8, R2 ; R5/R6 | Une déclaration non corroborée n’est jamais présentée comme un succès de test ou une conformité démontrée |
| **PRV-02 — D6-04 / Acceptation et réserves** | **FRONTIÈRE D6/D8 QUALIFIÉE**, non prouvée | D6/D8, R2 ; R5/R6 | Le Pilote décide explicitement ; la qualification factuelle et les obligations opposables restent inchangées |
| **PRV-03 — Qualité/force des preuves** | **NIVEAUX FONCTIONNELS DÉFINIS**, technique ouverte | D8/R4 ; R5/R6 | Un cas déterministe, navigateur, intégré ou LIVE/REAL soutient uniquement les assertions et contextes réellement éprouvés |
| **PRV-04 — Sources contradictoires et fraude de provenance** | **RÈGLES DE VERACITÉ DOCUMENTÉES**, preuve non fournie | D8/D4/D9, R4 ; R5/R6 | Branches et versions séparées, source hostile non autorisante, aucune élévation d’une affirmation en fait |
| **PRV-05 — Résultats partiels et incidents** | **INTERFACE D7 QUALIFIÉE**, reprise technique à prouver | D7/D8, R4–R6 | État inconnu, effets constatés, rapport et verdict non confondus après crash, arrêt ou perte de session |
| **PRV-06 — Accessibilité, isolation et confidentialité** | **CONTRAT DE PORTÉE DÉFINI**, mécanisme inconnu | D1/D4/D8/D9 en R2/R4 ; R5/R6 | Aucune preuve/décision d’un autre Pilote importée ; pas de fuite de secrets ; refus ou limite honnête |
| **PRV-07 — UX Pilot-first et lien probatoire** | **INTENTION R1 REPRISE**, contrat UX non conçu | R3 puis R4/R5 | Sources inspectables, limites et verdict local présentés sans faux badge, clic ou preuve inventée |
| **PRV-08 — Évolution du jugement et historique** | **FRONTIÈRE D4/D6/D8 DÉFINIE**, persistance non conçue | R4 ; R5/R6 | Nouvelle qualification ne réécrit pas les anciens faits, observations, actes et réserves |
| **PRV-09 — CKI et fausses obligations QA** | **AUCUNE DÉPENDANCE CKI IDENTIFIÉE**, corpus candidat | Consolidation R2, R5/R6 | Aucun CKI ou relation ne crée exigence de test, score, READY, merge ou adoption sans autorité propriétaire |
| **PRV-10 — Git sans permission ou état périmé** | **INTERFACE D9 NON ÉVALUÉE** | D9 R2 ; R4–R6 | Observations Git bornées par permissions/branche/commit, pas de conformité ou droit déduit de Git partagé |
| **PRV-11 — Critères d’acceptation modifiés** | **QUALIFICATION D’IMPACT DÉFINIE**, technique non vérifiée | D6/D7/D8 R2 ; R5/R6 | La version de référence et les conclusions affectées sont identifiables sans effacement rétroactif |
| **PRV-12 — Obligations non dérogeables et preuve** | **FRONTIÈRE D6/D8 POSÉE**, obligations spécifiques à qualifier | D6/D8/D9 en R2/R4 ; Morris si nouvel arbitrage | Une acceptation métier du risque ne neutralise pas une contrainte appliquée ; critères explicitement vérifiables |

**Reprise incrémentale :** `REAL-06` (rapport vs preuve) et `D6-04` (acceptation vs conformité) sont désormais **précisées fonctionnellement**, mais **ni closes techniquement ni prouvées**. Les contrats D9/D1–D2 doivent être confrontés avant de prononcer la cohérence globale R2. Le `KNOWN GAP` Roadmap de `main` demeure hors de ce mandat (gouvernance D2).

### 5.3. Contradictions apparentes exclues et invariants

- Une tentative D7 peut être **terminée** sans résultat D8 **conforme**. Ce n’est pas une incohérence d’état : les deux domaines jugent deux objets différents.
- Un résultat D8 peut être **conforme sur un périmètre** sans avoir été **accepté** par le Pilote : le statut de décision appartient à D6.
- Une preuve valide sur une branche peut être **non applicable** à une autre : l’identité Git et l’actualité de référence appartiennent à D9 ; D8 expose la condition de portée, sans créer de contrôle Git concurrent.
- Le CKI QA oriente l’expertise de Nora et les investigations possibles ; il ne possède ni verdict, ni gate, ni valeur d’autorisation. La matrice des relations CKI n’est pas un chemin d’exécution.
- **Point à ne pas anticiper :** pas de score ou registre de preuves universel, moteur de certification, tableau de bord imposé, algorithme de confiance ou niveau de preuve automatique sans nécessité démontrée en R4/R5.

## 6. Conditions de revue, suite R3–R6 et statut

| Phase | Résultat attendu et limite |
| --- | --- |
| **R2 — suite** | D8 validé par Morris et publié sur branche R2 ; rédiger D9 et confronter `PRV-04/06/10/12` ; qualifier les contrats D1–D2 nécessaires à la cohérence E2E avant sortie R2. |
| **R3 — UX** | Bilan court et fidèle, sources/limitations inspectables, réserves, distinction réalisé/vérifié/accepté ; éviter carte imposée à chaque réponse cognitive. |
| **R4 — Architecture** | Contrats de provenance, rattachement résultat/observation, conservation du contexte, droits, intégrité, version, contradiction et révision sans second registre. |
| **R5 — Construction** | Macro-capacité end-to-end : contrat D7 → exécution autorisée D6 → retours D7 → contrôle D8 → bilan Nora D3 → éventuelle décision D6 ; tests/documentation intégrés. |
| **R6 — Qualification** | Tests contradictoires, source introuvable, Git partagé, capture périmée, niveau déterministe vs navigateur/LIVE/REAL, acceptation avec réserves et correctif non autorisé. |

**Critères d’acceptation fonctionnels proposés :** propriétaire unique de chaque statut/acte ; distinction déclaration/observation/conformité/acceptation ; rattachement au périmètre et sources réelles ; bilan intelligible ; gestion non trompeuse des défauts, inconnues et réserves ; aucun CKI/gate/merge/adoption créé par D8. Les absences de preuve technique et les interfaces futures restent des réserves, pas des « succès ».

**Verdict : `R2 — DOMAINE 8 / RÉSULTATS ET PREUVES — v0.1 VALIDATED SPEC (Morris, 2026-11-02)` ; 36 règles `RG-PRV-001..036`, 32 scénarios `PF-PRV-01..32`, 12 réserves `PRV-*`, confrontation R1/D3–D7/CKI v0.2 ; interfaces D9 et D1–2 encore `NON ÉVALUÉES` ; Next `N/A — NON IMPLÉMENTÉ`.**


---

## 7. Complément post-clôture — couverture UX de la preuve (2026-11-03)

**Statut : complément de couverture validé par Morris (2026-11-03), sur branche candidate uniquement.** Ce complément n'ajoute aucune nouvelle règle au domaine ; il précise la vérification d'un scénario d'Inspection transverse sans modifier la clôture historique R2.

| ID | Domaine | Situation / entrée | Comportement attendu | Règles / références |
| --- | --- | --- | --- | --- |
| **PF-PRV-33** | D8 | Cursor annonce « tests OK », aucune trace indépendante | Rapport inspectable, conformité **non démontrée**, pas d'acceptation implicite | PRV-003/010/015, GOV-037 |

**Règles D8 inchangées :** une déclaration d'exécuteur, un rapport et une preuve demeurent qualifiés séparément. `RG-PRV-003/010/012/015` demeurent propriétaires ; l'Inspection ne certifie pas une conformité ni ne crée une acceptation D6.

**R5–R6 :** cas documentaire à exécuter ultérieurement, sans prétendre que la fonctionnalité existe déjà (`N/A — NON IMPLÉMENTÉ`).

## 8. Complément fonctionnel validé — restitution structurée et preuves (validation Morris du 2026-11-03)

**Statut : VALIDATED CONTENT BY MORRIS — 2026-11-03.** Complément ciblé approuvé après revue R1/R2/C, ajouté sur la version de `main@139c706e8b3d` sans révoquer les règles et scénarios antérieurs. Les identifiants de travail du présent complément ne créent pas un second corpus RG/PF canonique. **R4 :** conception et invariants ; **R5–R6 :** construction et preuves à produire ; Next **N/A — NON IMPLÉMENTÉ**. Aucun PR, merge, adoption ou clôture R3 autorisés par cette validation.

### 8.1. Finalité et frontière métier

Après un travail délégué, le Pilote doit comprendre sans interrogations répétées : ce qui a été demandé, ce que l'exécuteur affirme avoir fait, ce qui a été **effectivement observé et vérifié**, quels critères sont ou non couverts, les écarts et impacts projet, les sources disponibles, les réserves encore ouvertes et les options de décision. Le bilan n'est pas un certificat ; Nora traduit les constats D8 et les événements D7, D6 conserve la réception.

**Objet canonique :** une restitution intelligible se rattache au projet/Pilote et, lorsqu'il existe, au contrat, à sa version, à la tentative et aux critères applicables au moment de l'effet. La même synthèse peut être consultée depuis le fil Nora, le résultat ou les références du projet, **sans créer un second registre de preuve**.

### 8.2. Contrat de restitution — neuf rubriques accessibles

| Rubrique | Données et degré de précision exigés | Source / propriétaire | Si manquant ou non applicable |
| --- | --- | --- | --- |
| **1. Résumé** | Résultat recherché, résultat connu à date, portée et qualification prudente | Nora compose à partir D7/D8 | En l'absence de résultat : le dire, ne pas annoncer succès |
| **2. Ce qui était prévu** | Contrat/version, effets, cibles, sorties et critères effectivement attendus | D7 / D6 pour périmètre autorisé | Absence de contrat : attente réellement connue, ne pas inventer une tentative |
| **3. Ce qui a été réalisé** | Actions/artefacts/effets par item, avec distinction **déclaré** vs **observé** | D7 retours ; D9 faits Git si concernés | « Non observé » ou « inconnu » explicites ; n'inférer ni rollback ni fin |
| **4. Évaluation du résultat** | Comparaison attendu/réel, exigences couvertes/non couvertes, conditions des contrôles | D8 | Qualification bornée ; une preuve partielle ne démontre pas le global |
| **5. Écarts, réserves et blocages** | Écarts réels vs sources manquantes, gravité/effet, statut et suite | D8 ; D4 pour continuité | Absence d'écart identifié ≠ preuve de zéro écart ; réserves conservées |
| **6. Impact sur le projet** | Conséquences démontrées sur livrables, trajectoire, dépendances, risques, sujets, capacité suivante | Nora interprète avec D4/D5/D6 | Impact non établi identifié comme tel ; pas de transition automatique |
| **7. Verdict de conformité D8** | Conforme sur une portée, non conforme, partiel ou non démontré ; critères, sources et limites | D8 | Pas de « succès » générique par la seule fin technique ; bilan révisable |
| **8. Recommandation / prochaine étape** | Action utile, destinataire, dépendances, nouvelle preuve ou correction possible, gate humain | Nora recommande ; D6 décide | Pas de reprise ou correctif autonome ; ne pas présenter une proposition comme autorisée |
| **9. Éléments vérifiés et sources** | Types, références, contexte (branche/commit/environnement), dates/versions, accès et résultats de contrôle | D8 utilise éléments accessibles de D7/D9 et d'autres sources | Signaler « source inaccessible », « non vérifié », contradiction ; ne jamais fabriquer URL/SHA/tests |

**Réception métier** : champ transversal distinct, alimenté **uniquement par D6** lorsqu'une décision explicite existe : acceptation, refus, report ou réserves acceptées dans la portée. Jamais déduit de la présentation de la synthèse, du verdict, d'un test ni d'un merge.

**Proportionnalité = quantité de texte et profondeur d'enquête adaptées, pas perte de rubriques pertinentes.** Une mission simple peut avoir une mention concise « sans objet » pour un impact non applicable ; une opération sensible exige l'explicitation de chaque risque et des pièces déterminantes. La totalité des rubriques demeure consultable ; la vue brève n'efface pas le détail.

### 8.3. Origine et statut de chaque affirmation déterminante

Toute affirmation utile au verdict ou à la décision doit pouvoir être qualifiée avec : nature de l'assertion, objet/critère, source originale, version ou période, droit d'accès, degré d'observation, limites et contradictions éventuelles. Vocabulaires autorisés dans cette proposition : **déclaré / constaté ou observé / critère corroboré sur une portée / non démontré / écart établi / contradictoire**. Ces catégories sont du langage produit, pas des énumérations de base de données imposées en R2.

Règles de calcul non acceptées : addition de preuves par nombre de documents, réussite automatique fondée sur « tests OK », assimilation d'un état terminal Cursor à la conformité D8, assimilation d'une conformité locale à l'adoption, assimilation d'une acceptation métier à la vérité technique. Le bilan est révisable lorsque de nouvelles observations apparaissent, sans effacer ses conclusions datées ni les contradictions.

#### 8.3.1. Exemple de référence, intentionnellement non probatoire

- **Prévu :** deux documents du projet Atlas à mettre à jour, exclusions code/CI/merge.
- **Déclaré par Cursor :** « deux fichiers modifiés ; tests OK ».
- **Observé :** aucun diff ni sortie de tests disponibles dans l'exemple.
- **Évaluation :** déclarations non corroborées sur les critères déterminants.
- **Verdict D8 :** conformité **NON DÉMONTRÉE**. Ne signifie pas « échec technique prouvé ».
- **Impact :** stabilisation du cadrage non établie. Aucune transition de cycle ou décision métier inférée.
- **Recommandation Nora :** demander diff exact et sorties de contrôles utiles ; préparer un complément si justifié.
- **Décision D6 :** aucune acceptation prononcée.

### 8.4. Comportements fonctionnels candidats à confronter aux RG-PRV existantes

- **PRV-INFO-01 — Complétude intelligible :** Nora peut restituer les neuf rubriques ; aucune affirmation probatoire décisive n'est perdue au profit d'un résumé séduisant.
- **PRV-INFO-02 — Source du prévu :** le prévu est celui du contrat/critère applicable, et non la promesse reconstruite après l'exécution.
- **PRV-INFO-03 — Statut des réalisations :** chaque effet essentiel est distingué entre déclaré, observé, incertain et infirmé.
- **PRV-INFO-04 — Évaluation vs verdict :** l'analyse par critère et la conclusion générale bornée peuvent différer sans contradiction.
- **PRV-INFO-05 — Réserves persistantes :** les réserves ouvertes et leur effet restent consultables, même après réception avec réserves.
- **PRV-INFO-06 — Impact circonstancié :** un effet externe n'entraîne pas automatiquement progression de jalon, capacité atteinte ni promotion de l'état projet.
- **PRV-INFO-07 — Recommandation non autorisante :** une correction recommandée reste une proposition D3, le nouveau mandat passe D7 et D6.
- **PRV-INFO-08 — Sources inspectables :** aucun lien ou SHA « d'illustration » n'est présenté comme une preuve réelle ; droits et fraîcheur sont respectés.
- **PRV-INFO-09 — Synthèse révisable :** une preuve nouvelle modifie la conclusion courante, sans falsifier l'histoire du bilan précédent.
- **PRV-INFO-10 — Adaptativité :** la forme est concise en première lecture, détaillée à la demande, mais les rubriques et limites restent accessibles quel que soit le volume de mission.

### 8.5. Scénarios de qualification proposés

| ID temporaire | Cas | Attendu |
| --- | --- | --- |
| PF-PRV-INFO-A | Rapport Cursor sans sortie de tests | « Tests déclarés, non vérifiés » ; verdict borné non démontré |
| PF-PRV-INFO-B | Diff Git vérifié, tests absents | Modifications observées, conformité des tests non prouvée |
| PF-PRV-INFO-C | Résultat partiel avec trois critères | Évaluation par critère, pas de succès universel |
| PF-PRV-INFO-D | Effet réel observé après STOP | Effet conservé, état technique d'arrêt qualifié séparément |
| PF-PRV-INFO-E | Déconnexion après dispatch | Ni fin, ni échec, ni rollback inféré |
| PF-PRV-INFO-F | Une pièce contredit le rapport | Deux assertions conservées avec provenance, conclusion révisable |
| PF-PRV-INFO-G | Capture ancienne | Version/environnement visible, pas de preuve de l'état courant |
| PF-PRV-INFO-H | Source inaccessible | Limite explicite, aucune récupération hors droits |
| PF-PRV-INFO-I | Pilote accepte avec réserves | Décision D6 distincte, réserves D8 maintenues |
| PF-PRV-INFO-J | Projet sans Git | Sources non-Git pertinentes, pas de Git universel |
| PF-PRV-INFO-K | Résultat entièrement produit par Nora | Synthèse utile sans inventer Cursor, Attempt ou ReviewBundle |
| PF-PRV-INFO-L | Synthèse reprise après une nouvelle session | Dernière conclusion datée, sources, pertinence et fraîcheur retrouvables |

### 8.6. Gates et non-décisions

**R3 :** vue Pilot-first + détail intégral consultable + sources réelles et réserves ; les neuf rubriques font partie du contrat UX de la synthèse. **R4 :** associations contrat/tentative/critère/source/version, révision des conclusions, droits, contradiction et stockage sans registre concurrent. **R5/R6 :** exécuter les scénarios sur preuves réelles, mocks clairement distingués de navigateur/LIVE/REAL. **Aucune règle de score automatique, certification universelle ni deuxième acte D6 ne sont décidés.**
