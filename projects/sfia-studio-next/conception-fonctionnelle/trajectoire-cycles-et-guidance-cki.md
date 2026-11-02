# SFIA Studio Next — Spécification fonctionnelle R2
## Trajectoire du projet, cycles et guidance CKI

| Métadonnée | Qualification |
| --- | --- |
| Version / date | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02) — interfaces réservées** |
| Domaine propriétaire | **5 — Trajectoire et cycles** (vision R1 §2.29) |
| Résultat Pilote | Piloter un projet au moyen d'une trajectoire évolutive, d'une seule étape active et d'une guidance spécialisée de Nora, **sans transformer les CKI en workflow, autorité ou dépendance** |
| Références Git examinées | `mcleland147/sfia-workspace` ; **`main@8751775edc314e8fc7f0855104e5000290be9839`** ; **`sfia/next-r2-functional-specs@6add8acafef8dc1347185245594c05da224ba368`** |
| Autorité R1 | `cadrage/vision-produit.md` §§2.16–2.19, 2.29, 2.31–2.36, 2.38 ; décision de sortie R1 ; SEF v0.2 |
| Contrats R2 déjà approuvés | [`contexte-et-conduite-gouvernee-de-nora.md`](contexte-et-conduite-gouvernee-de-nora.md) v0.4 (`RG-CONV`, `RG-CTX`, `RG-METH`, `RG-AUTH`, `RG-APP`) ; [`connaissance-sujets-et-continuite-du-projet.md`](connaissance-sujets-et-continuite-du-projet.md) v0.1 (`RG-KNOW`) |
| Matériel de spécialisation | [`cki/README.md`](../cki/README.md) v0.2.0-candidate (15 spécialités), [`cki/relations-methodologiques-cki.md`](../cki/relations-methodologiques-cki.md) (50 relations orientées) — **contenus CKI candidats, pas `VALIDATED SPEC`** |
| Statut produit | **N/A — NON IMPLÉMENTÉ** : aucun code, flux, état transactionnel ni résultat UX Next observé |
| Publication Git | **Synchronisée sur la branche candidate `sfia/next-r2-functional-specs`**, sous GO Git Morris borné ; aucune PR, merge ni adoption runtime par cette publication. |

> **Lecture** : les orientations R1 et les arbitrages conversationnels de Morris sur le principe CKI sont acquis. Les règles `RG-TRJ-*`, les cas `PF-TRJ-*` et les modalités de tenue du cycle sont une **traduction fonctionnelle validée par Morris**, avec réserves d'interface pour les futurs domaines 6–9. Le terme « CKC » dans les documents R1 / Nora v0.4 désigne le concept historique de guidance, appelé **CKI (Cycle Knowledge Intelligence)** dans Next ; cette validation n'autorise aucune migration technique ni modification silencieuse des specs déjà validées.

## 1. Capacité, finalité, IN / OUT

**Résultat du macro-lot :** le Pilote peut explorer librement, retenir une trajectoire de projet évolutive, ouvrir une étape cohérente lorsqu'elle est utile, travailler avec Nora enrichie par **un CKI principal spécialisé**, apprécier les acquis et décider de clôturer, différer ou réorienter. La continuité, l'origine des affirmations, la validité de l'autorité et l'état effectif restent vérifiables après reprise.

**IN — propriétaire domaine 5 :**
- Vision courante et prévisionnelle de la trajectoire de **chaque projet individuel**, intention de progression et relations entre étapes envisagées.
- Identification, portée, type, finalité, état réel et relations de continuité des cycles du projet ; **au plus un cycle actif**.
- Préparation et restitution du résultat de la transition de cycle, sans posséder la décision humaine qui l'autorise.
- Association **type de cycle → CKI autonome** ; désignation du seul CKI principal d'un cycle réellement actif, applicabilité de sa version et signalement d'indisponibilité.
- **État durable de la méthode applicable au projet** (ou absence de méthode retenue), sa référence, portée et changements effectivement enregistrés sous décision compétente, sans présumer qu’elle remplace le CKI.
- Mise à disposition des repères CKI et de sa matrice pour la **guidance spécialisée non contraignante** ; prise en compte des constats de maturité formulés par Nora, sans décider à sa place.
- Reprise et cohérence des étapes, du cycle actif, des changements prévisionnels et des résultats de transitions.

**OUT — responsabilités conservées ailleurs :** pensée générale, initiative et dialogue de Nora (domaine 3) ; capitalisation et accès aux sujets/points ouverts (domaine 4) ; validité opposable des HumanDecisions, GO, permissions, suspensions et mandats (domaine 6) ; exécution technique (7) ; verdict de preuve/acceptation (8) ; droits et actes Git (9). Le domaine 5 ne constitue ni un second registre de décisions, ni une nouvelle mémoire, ni un orchestrateur autonome, ni un moteur de validation CKI, ni un calendrier impératif de quinze étapes.

**Hors R2 :** UI détaillée (R3), algorithme IA/prompt/injection des CKI, moteur, API, DB, verrou/idempotency key, catalogue physique ou coût de token (R4), implémentation et preuve observée (R5/R6).

### 1.1 Frontières et vocabulaire

| Concept | Sens métier et frontière |
| --- | --- |
| **Projet courant** | Projet individuel du Pilote ; les trajectoires et cycles ne se propagent pas entre projets ni via un dépôt Git partagé. Le sas pré-projet permet d'explorer **sans** ouvrir un cycle projet. |
| **Trajectoire envisagée** | Vue de possibilités de progression ; étapes futures, ordre et dépendances restent **prévisionnels** tant qu'aucune décision applicable ne les adopte. |
| **Trajectoire retenue** | Orientation de travail du projet, révisable sous autorité du Pilote lorsque sa portée est décisionnelle ; elle ne prouve ni réalisation ni ouverture des cycles prévus. |
| **Cycle proposé / futur** | Étape possible, non active, non exécutée. Un item prévisionnel ne devient pas un cycle actif par affichage, prédiction ou relation CKI. |
| **Cycle actif** | Une étape réellement ouverte et vérifiée au sein d'un projet, avec finalité et type connus ; **au plus un** dans l'état effectif du projet. |
| **Cycle clôturé** | Étape dont la clôture a été autorisée et enregistrée ; n'affirme ni complétude absolue ni absence de réserve. |
| **CKI principal** | Guidance spécialisée associée au **type du cycle actif** ; augmente les réflexes professionnels de Nora sans remplacer ses capacités générales ni les règles applicables. |
| **Matrice CKI** | Carte **éditoriale, informative et optionnelle** des relations T/A/R/E ; ne crée aucune dépendance, activation secondaire ou transition. |
| **Méthode de projet retenue** | Cadre méthodologique gouverné distinct du CKI ; son identité/version/portée et sa prise d’effet doivent être conservées par le domaine 5 **sur décision applicable du domaine 6**. L’absence de méthode est un cas valable. |
| **Maturité argumentée** | Appréciation cognitive de Nora au regard de la finalité du cycle, de ses acquis, risques, dépendances et contraintes ; ni score universel ni autorisation de clôture. |

**Cycle de vie conceptuel minimal (non schéma d'états imposé)** : proposition → ouverture vérifiée → travail actif et progression → clôture vérifiée ; les propositions écartées, tentatives échouées, suspensions applicables ou reprises interrompues demeurent distinguables. L'architecture ne devra pas assimiler « sollicité », « autorisé », « tenté » et « effectivement réalisé ».


## 2. Contrats d'interaction et responsabilités

| Propriétaire | Produit une information / un acte | Ce que le domaine 5 en consomme, sans se substituer |
| --- | --- | --- |
| **1–2 Accès / Création** | Identité, projet et sas réellement ouverts | Portée du projet, jamais de cycle implicite à la création |
| **3 Nora** | Intention, diagnostic, options, appréciation qualitative, recommandations et dialogue | Demande de proposition ou de transition ; référence CKI contextualisée ; **pas de moteur cognitif concurrent** |
| **4 Connaissance** | Sujets et points ouverts persistants, sources, historique, références de décisions | Contexte pour plan et maturité ; le cycle **référence** les acquis sans les dupliquer |
| **5 Trajectoire / cycles** | État de cycle réel, projection de trajectoire, type / association CKI / historique des transitions | **Propriétaire de ce contrat** ; ne réédicte pas les autres états |
| **6 Décisions / gouvernance** | Identité et validité du GO, décisions et suspensions applicables, autorité/portée | Autorisation du changement envisagé et restrictions ; **seule source d'autorité**, pas de reproduction d'un second registre |
| **7 Réalisation gouvernée** | Contrat d'exécution et résultats d'actions techniques | La progression peut les contextualiser, pas leur attribuer des permissions |
| **8 Résultats / preuves** | Observations, niveau de preuve, réserves, conformité/acceptation | Référence les preuves pertinentes pour la maturité ; ne produit pas de verdict alternatif |
| **9 Intégration Git** | Accès, références et états réels Git | Citations/impacts techniques si pertinents, Git jamais requis pour un cycle générique |

### 2.1. Contrat minimal d'ouverture d'une étape

Nora et Studio doivent pouvoir situer : **projet**, intention de la nouvelle étape, **type de cycle reconnu**, résultat attendu et portée utile, cycle actif réellement présent ou absent, éventuelle position dans la trajectoire, restrictions applicables, **GO du Pilote** si ouverture envisagée. L'étape peut commencer sur un contexte incomplet si son but reste intelligible ; on ne demande pas un dossier exhaustif ni un choix de méthode obligatoire. La vérification des droits et de l'état effectif est la responsabilité de Studio au moment de l'acte, selon la future spécification gouvernance.

### 2.2. Contrat minimal de progression et de maturité

Nora examine **à proportion de l'enjeu** : finalité du cycle et résultats obtenus, solidité/provenance des acquis, questions et risques ouverts, dépendances matérielles, blocages réels et effets de la suite possible. Le CKI actif apporte les **techniques professionnelles spécialisées** permettant ce jugement, sans inventer une grille universelle de points ou un gate. Les conclusions restent qualifiées : *poursuivre*, *approfondir*, *réorienter*, *préparer une clôture*, ou *incertitude décisive à lever*. Ces termes sont des **recommandations cognitives**, pas des états légaux de cycle. Les enjeux sans impact sur la décision peuvent être reportés sous réserve explicite.

### 2.3. Contrat minimal de transition

Un GO de clôture, d'ouverture ou de transition combinée contient une cible suffisamment claire pour que son identité et sa portée puissent être établies. Studio contrôle les restrictions et l'état réel, puis rapporte **séparément** chaque effet, succès, rejet, échec partiel et état restant. La décision du Pilote peut être formulée en langage naturel ; pas de confirmation rituelle. L'approbation d'une recommandation de spécialité CKI ne constitue pas par elle-même un GO de transition ou d'effet technique.

### 2.4. Transparence fonctionnelle du CKI et de la méthode

L'utilisateur n'a pas à comprendre le chargement de contenu cognitif. S'il demande « quelle casquette Nora utilise-t-elle ? », Nora peut indiquer le type de cycle actif, le CKI principal effectivement disponible, sa référence/version connue et la limite éventuelle. Un changement de méthode projet ou de contenu CKI **n'efface pas** l'histoire de l'autre et n'autorise pas une réévaluation rétroactive des actes.


### 2.5. Contrat d’état durable de la méthode applicable

Le domaine 5 est propriétaire de la **référence de méthode courante du projet, éventuellement absente**, et des changements réellement appliqués à sa portée ; il ne possède pas l’autorité qui a décidé ce choix (domaine 6), ni le raisonnement qui propose une méthode (Nora). Au minimum : projet, désignation/référence, version ou état de révision connu, provenance, portée et date/condition d’effet, lien vers la décision compétente, état courant versus historique. Ce sont des **informations fonctionnelles**, sans schéma physique ni DoctrinePackage imposé. Le changement de méthode et l’évolution du CKI principal ont des causes et historiques **séparés**, même si Nora analyse ensemble leurs impacts sur le travail en cours.

## 3. Règles de gestion validées — domaine 5 (interfaces réservées)

### 3.A — Trajectoire vivante et qualification des étapes


- **RG-TRJ-001 — Trajectoire non préalable.** Une conversation ou un travail cognitif de Nora peut se dérouler sans projet encore créé, sans trajectoire formalisée ni cycle actif. La création du projet n’ouvre aucun cycle par effet secondaire **Interface :** R1 §§2.15/2.20/2.31 ; `RG-CONV-005`, `RG-METH-009`.


- **RG-TRJ-002 — Projection distincte des faits.** Studio distingue les étapes suggérées ou prévues des cycles effectivement ouverts/clôturés. Une projection d’étape ne déclare ni autorisation, ni engagement, ni avancement réel **Interface :** R1 §§2.19/2.31 ; futur domaine 6.


- **RG-TRJ-003 — Orientation personnalisable.** La trajectoire proposée tient compte de l’intention, des acquis, contraintes et résultats du projet ; aucun ordre fixe ou passage obligatoire dans les quinze types initiaux n’est présumé **Interface :** R1 §§2.16/2.19 ; CKI `README.md` §1.


- **RG-TRJ-004 — Révision sans rétroactivité.** Le Pilote peut décider de réorienter une trajectoire retenue ; les étapes futures peuvent être ajoutées, retirées, déplacées ou différées selon leur valeur et leur portée. Les faits de cycles passés et décisions antérieures ne sont pas réécrits **Interface :** R1 §2.19 ; `RG-METH-015`, `RG-KNOW-007`.


- **RG-TRJ-005 — Dépendance réelle et justifiée.** Une dépendance de projet n’est opposable dans la trajectoire que si elle résulte de contraintes, engagements, décisions ou risques réels et identifiés ; elle ne peut provenir de la seule existence d’un lien entre CKI ou d’un ordre habituel de phases **Interface :** R1 §§2.16/2.19 ; matrice CKI §1.


- **RG-TRJ-006 — Requalification proportionnée.** Une découverte substantielle peut motiver l’examen d’un acquis de conception, d’une étape passée ou d’une nouvelle activité ; elle n’oblige pas à rouvrir administrativement un cycle déjà clôturé. Nora recommande, l’état ne change que par un acte compétent **Interface :** R1 §2.19 ; `RG-KNOW-008/009`.


- **RG-TRJ-007 — Références de continuité.** Une étape de trajectoire peut référencer objectifs, cycles liés, dépendances, décisions et points ouverts sans recopier la connaissance, les preuves ou les autorisations de leurs propriétaires **Interface :** R1 E2E 02/04 ; `RG-KNOW-003/004/011`.


### 3.B — Cycle réel et unicité


- **RG-TRJ-008 — Cycle actif unique.** Pour un projet individuel, **au plus un cycle** est réellement actif à un instant donné ; les cycles futurs, proposés, terminés et les sujets parallèles ne comptent pas comme cycles actifs **Interface :** R1 §2.31 — arbitrage Morris explicite.


- **RG-TRJ-009 — Ouverture gouvernée.** Un cycle est ouvert uniquement sur un GO du Pilote suffisamment clair et applicable, puis après contrôle et enregistrement effectif. Nora peut préparer et recommander mais ne déclenche ni ne confirme une ouverture présumée **Interface :** R1 §§2.16/2.31 ; futur domaine 6 ; `RG-AUTH-001`.


- **RG-TRJ-010 — Type et résultat cohérents.** Le cycle ouvert identifie une spécialité reconnue par le catalogue applicable et une finalité intelligible ; le type ne dérive pas mécaniquement de mots-clés, d’un CKI consulté ou d’une relation dans la matrice **Interface :** R1 §§2.16/2.17 ; CKI `README.md` §3.


- **RG-TRJ-011 — Deuxième ouverture incompatible.** Lorsqu’un cycle est actif, toute demande d’ouverture concurrente est requalifiée : analyse possible dans le cycle courant, proposition de transition gouvernée ou refus de l’ouverture simultanée. Aucun second cycle n’est activé même si les sujets sont distincts **Interface :** R1 §2.31 ; `RG-METH-005`.


- **RG-TRJ-012 — Clôture gouvernée et honnête.** La clôture exige un GO applicable et l’enregistrement de son effet. L’état clôturé reconnaît explicitement ce qui a été atteint, différé, incertain ou réservé, sans créer d’acceptation ou de preuve fictive **Interface :** R1 §§2.16/2.18/2.31 ; domaines 6/8.


- **RG-TRJ-013 — Pas de gate de cycle automatique.** Le seul fait d’ouvrir un cycle n’instaure ni livrable obligatoire, ni score minimal, ni passage imposé, ni critère de clôture édicté par le CKI. Les exigences réellement applicables d’autres propriétaires restent intactes **Interface :** R1 §§2.16–2.18 ; `RG-METH-004`, `RG-APP-004`.


- **RG-TRJ-014 — GO combiné à effets distincts.** Un même GO peut viser clôture du cycle courant et ouverture du suivant. Studio qualifie, contrôle et enregistre les deux effets dans un ordre cohérent, sans présumer une transaction atomique ni présenter un succès partiel comme complet **Interface :** R1 §§2.19/2.31 ; futur domaine 6.


- **RG-TRJ-015 — État réel avant confirmation.** Avant d’affirmer qu’un cycle a changé d’état, Studio vérifie l’état effectif ; un GO formulé, une commande envoyée ou une réponse de Nora ne suffisent pas à prouver l’effet **Interface :** R1 E2E 02 ; `RG-AUTH-005`, `RG-KNOW-015`.


- **RG-TRJ-016 — Rejeu et concurrence.** Deux demandes simultanées ou répétées d’ouverture/clôture ne doivent pas produire d’état contradictoire, de second cycle actif ou de transition dupliquée. La résolution d’un conflit suit l’état réel sans inventer de réussite ni imposer ici une technique de verrouillage **Interface :** R1 §2.31 ; R4 — idempotence et reprise.


### 3.C — CKI principal, référence et dégradation


- **RG-TRJ-017 — Correspondance canonique.** Chaque type de cycle **retenu dans le catalogue applicable** a un CKI spécialisé autonome correspondant ; l’ajout ou le retrait d’un type relève d’une évolution explicite du catalogue, sans plafond permanent de quinze **Interface :** Arbitrage Morris 2026-11-02 ; corpus CKI §1/§8.


- **RG-TRJ-018 — Un seul CKI principal.** Seul le CKI correspondant au type du **cycle effectivement actif** est principal pour cette étape. La navigation, une digression, la consultation d’un document ou la matrice ne sélectionnent jamais un deuxième CKI principal **Interface :** R1 §2.17 ; `RG-METH-003/005` ; CKI §1.


- **RG-TRJ-019 — Autonomie intrinsèque des CKI.** Le CKI principal est utilisable sans CKI précédent, suivant, transverse, ni cycle historique du même type. Une absence de lien ou d’acquis antérieur ne bloque pas son fonctionnement ; Nora peut seulement signaler un contexte matériel manquant **Interface :** Arbitrage Morris ; CKI §3 et matrice §1.


- **RG-TRJ-020 — Guidance à responsabilité bornée.** Le domaine 5 fournit le CKI pertinent comme **guidance** ; Nora conserve l’interprétation, les compétences générales et l’expression naturelle. Le CKI ne modifie pas permissions, décisions, méthode de projet, directives du Pilote, preuves ou règles non dérogeables **Interface :** `RG-CONV-001/004`, `RG-METH-004`, `RG-APP-004`.


- **RG-TRJ-021 — Version et provenance interprétables.** Pour une utilisation déterminante de guidance, la spécialité effectivement utilisée doit être identifiable par nom/type, référence et version/révision ou état de validité, provenance et portée, sans imposer de package, digest ou nomenclature ancienne. Un CKI candidat Git n’est pas un CKI runtime adopté **Interface :** `RG-APP-002/006`, `RG-METH-012/013` ; CKI `README.md` §1.


- **RG-TRJ-022 — Disponibilité non fictionnelle.** Un CKI absent, non approuvé, illisible, version inadéquate ou indisponible ne peut être présenté comme guidance spécialisée effectivement appliquée. Nora conserve ses capacités générales et signale la limite quand elle est pertinente ; aucune méthode historique n’est chargée comme fallback implicite **Interface :** R1 §2.31 ; `RG-CTX-008`, `RG-APP-008`, CKI §7.


- **RG-TRJ-023 — Pas de sélection dynamique hors cycle.** Hors cycle actif, Studio n’associe aucun CKI principal par défaut. Nora peut mobiliser ses connaissances générales ou une technique ponctuelle pertinente sans annoncer l’activation d’un CKI ni créer un cycle **Interface :** R1 §2.17 ; `RG-CONV-005`, `RG-METH-011`.


- **RG-TRJ-024 — Évolution CKI sans effet rétroactif.** La modification, extension ou nouvelle version d’un CKI ne modifie pas silencieusement les décisions, faits historiques, méthode retenue, résultats ou garanties du projet. L’applicabilité au cycle courant et les impacts de la modification doivent pouvoir être qualifiés avant usage déterminant ; aucune politique de migration automatique décidée ici **Interface :** `RG-METH-013/015` ; `RG-KNOW-007` ; futur R4.


### 3.D — Relations CKI et complémentarité des spécialités


- **RG-TRJ-025 — Matrice purement informative.** La matrice CKI sert uniquement à éclairer les **transmissions d’acquis (T), approfondissements (A), retours/requalifications (R) et angles transverses (E)**. Elle ne définit ni précédence, ni gate, ni type de cycle requis, ni dépendance technique, ni permission **Interface :** Matrice `relations-methodologiques-cki.md` §§1–4.


- **RG-TRJ-026 — Pertinence contextualisée.** Une relation de la matrice ne devient une suggestion de Nora que lorsqu’un besoin réel, une finalité, un acquis ou un risque du projet la rend pertinente. Aucun passage ni recommandation n’est systématique à la fin d’un cycle **Interface :** R1 §§2.18/2.19 ; matrice §1.


- **RG-TRJ-027 — Analyse transverse sans second CKI.** Nora peut appliquer ses connaissances générales dans une discipline liée (sécurité, DevOps, FinOps, GreenOps, UX, etc.) pendant le cycle actif. Le domaine 5 n’active ni un CKI secondaire ni un deuxième cycle à cette occasion **Interface :** `RG-CONV-004`, `RG-METH-005` ; matrice §3.


- **RG-TRJ-028 — Matrice non exhaustive.** L’absence de relation dans la matrice n’interdit ni l’analyse, ni la proposition d’un futur cycle, ni la réorientation. L’existence d’une relation n’affirme pas qu’un cycle cible ou son CKI existe dans le catalogue applicable **Interface :** Matrice §1 ; CKI §5.


- **RG-TRJ-029 — Différence transmission / preuve.** Une relation T peut signaler quels acquis sont utiles à une autre spécialité, mais les sources et niveaux de preuve restent ceux des domaines 4/8 ; transmettre une hypothèse ou une recommandation ne la transforme pas en fait, accord ou livrable validé **Interface :** `RG-KNOW-006/010`, `RG-APP-001`.


### 3.E — Maturité, recommandation et continuité


- **RG-TRJ-030 — Maturité proactive non répétitive.** Le domaine 5 peut situer les conclusions de maturité de Nora au regard du cycle actif ; Nora les réévalue surtout après des évolutions significatives, pas à chaque message ou selon un calendrier arbitraire **Interface :** R1 §2.18 ; `RG-CONV-002/006`.


- **RG-TRJ-031 — Unification de la guidance.** La guidance spécialisée qui soutient le travail du cycle est **la même** qui nourrit son appréciation qualitative de maturité ; aucun deuxième CKI de sortie ni barème indépendant ne crée de verdict concurrent **Interface :** R1 §2.18 ; CKI §3.


- **RG-TRJ-032 — Clôturabilité argumentée.** Nora peut recommander une clôture même avec des questions reportables, si la finalité est suffisamment tenue et les obligations effectives respectées ; une contradiction structurante, une restriction ou une preuve réellement nécessaire ne peut être ignorée. La recommandation ne clôt rien **Interface :** R1 §2.18 ; `RG-APP-004/007` ; domaines 6/8.


- **RG-TRJ-033 — Continuité sans mémoire parallèle.** Au changement de cycle, le domaine 5 fournit références de cycle, finalité, résultats et état de progression ; le domaine 4 restitue les sujets et points ouverts dans leurs identités et sources existantes. Aucun recopiage d’un journal de décisions ou de preuves dans l’état de cycle **Interface :** R1 E2E 02/04 ; `RG-KNOW-003/004/011/015`.


- **RG-TRJ-034 — Reprise fidèle après interruption.** Après interruption ou nouvelle conversation, Studio identifie projet et cycle réellement actif, son type et la référence CKI pertinente, distingue transitions terminées ou échouées et ne réactive pas un cycle par une synthèse ou un souvenir Nora **Interface :** `RG-CTX-006`, `RG-KNOW-015`, R1 §2.31.


- **RG-TRJ-035 — Réserve/suspension non résolue.** Un retour de cycle ou une amélioration apparente ne clôt ni une réserve gouvernée ni une suspension du Pilote. Leur état applicable est consulté auprès de l’autorité propriétaire avant une recommandation déterminante de transition **Interface :** `RG-AUTH-002`, `RG-KNOW-009`, domaines 6/8.


- **RG-TRJ-036 — Visibilité proportionnée.** Le Pilote peut distinguer dans Studio étape active, étapes envisagées, recommandations et résultats effectifs de transition ; les détails d’écran, badges, cartes et interactions restent à concevoir en R3, sans second clic rituel **Interface :** R1 §§2.16/2.19 ; `RG-UX-001/002`.


### 3.F — Méthode de projet durable (responsabilité d'état, sans doublon Nora/gouvernance)

- **RG-TRJ-037 — État de méthode porté par le projet.** Le domaine 5 conserve, pour le projet et la portée décidés, **la référence de méthode effectivement applicable, ou l’absence de méthode retenue**, sans créer automatiquement un choix par défaut. Nora propose/interprète via `RG-METH-009..012` ; le domaine 6 possède l’autorité du choix.

- **RG-TRJ-038 — Application d'un changement de méthode.** Une modification durable est enregistrée seulement si l'arbitrage applicable du Pilote est établi, avec la référence/version, la portée, le moment d'effet et les activités concernées ; la proposition cognitive seule n'est pas une mutation de projet. L'histoire ne disparaît pas. Interfaces : `RG-METH-010/012/013/015` ; domaine 6.

- **RG-TRJ-039 — Requalification des cycles touchés.** Un changement de méthode durable doit permettre d'identifier les cycles/projections en cours réellement affectés, leurs risques et obligations. Il n'impose ni la réouverture des cycles passés, ni l'annulation automatique des effets précédemment autorisés ; Nora apprécie l'impact, la gouvernance tranche ce qui est structurant. Interfaces : `RG-METH-014/015`, `RG-APP-007`.

- **RG-TRJ-040 — Méthode et CKI sans autorité concurrente.** La référence de méthode courante **n'est pas** un CKI ; le CKI principal **n'est pas** une nouvelle méthode imposée. En tension, Nora adapte ou écarte la technique spécialisée incompatible et expose l'écart matériel, sans contourner une contrainte non dérogeable ni créer un second gate méthodologique. Interfaces : `RG-METH-004/011/013`, `RG-APP-004` ; CKI corpus §6.

## 4. Parcours fonctionnels de référence (recette R2 proposée)

Ces cas détaillent les E2E primaires R1, **sans** inventer d’E2E supplémentaires. « Alors » désigne le résultat attendu du contrat ; **pas un résultat runtime démontré**.


### PF-TRJ-01 — Sas et projet sans cycle

**Étant donné** une investigation dans le sas, puis un projet explicitement créé sans méthode choisie ; **quand** le Pilote demande une analyse ; **alors** Nora produit l’analyse ; aucune trajectoire ni cycle ne naissent automatiquement, aucun CKI principal n’est annoncé.

*Couverture :* 001, 023 ; R1 E2E 01/02/03.


### PF-TRJ-02 — Trajectoire suggérée sans ouverture

**Étant donné** un projet avec intention initiale ; **quand** Nora expose cadrage, conception et UX possibles ; **alors** ces étapes restent prévisionnelles, leurs motivations et incertitudes explicites ; aucun cycle n’est actif ou tenu pour engagé.

*Couverture :* 002–004 ; R1 E2E 02.


### PF-TRJ-03 — Début direct par l’architecture technique

**Étant donné** un projet dont le premier travail décidé est l’architecture technique, sans cycle antérieur ; **quand** le Pilote autorise clairement cette ouverture ; **alors** Studio ouvre un seul cycle de ce type, le CKI associé peut guider sans exiger Cadrage/Conception/UX antérieurs.

*Couverture :* 005, 008–010, 017–019 ; R1 E2E 02.


### PF-TRJ-04 — Ouverture autorisée par conversation

**Étant donné** un projet sans cycle et un objectif de QA clairement circonscrit ; **quand** le Pilote dit « on ouvre ce cycle QA » ; **alors** Studio vérifie le GO et l’état du projet, enregistre puis confirme un seul cycle QA, sans second clic rituel.

*Couverture :* 008–010, 015, 036 ; R1 E2E 02.


### PF-TRJ-05 — GO ambigu

**Étant donné** le Pilote dit « passe à la suite » sans type/cible suffisamment identifiables ; **quand** Nora doit déterminer l’effet attendu ; **alors** elle pose une clarification proportionnée ; aucune transition effective n’est présumée.

*Couverture :* 009–010, 015 ; R1 E2E 02.


### PF-TRJ-06 — Demande d’un second cycle simultané

**Étant donné** le projet a un cycle Delivery actif ; **quand** le Pilote demande un cycle DevOps en parallèle ; **alors** Studio n’ouvre pas un deuxième cycle ; Nora propose de traiter le sujet directement ou d’organiser une transition gouvernée.

*Couverture :* 008, 011, 027 ; R1 E2E 02/03.


### PF-TRJ-07 — Digression sécurité pendant UX

**Étant donné** un cycle UX/UI actif avec son CKI principal ; **quand** le Pilote demande une analyse sécurité ponctuelle ; **alors** Nora répond selon ses capacités générales ; CKI UX reste principal, aucun cycle ni CKI Sécurité secondaire n’est activé.

*Couverture :* 018, 020, 025–028 ; R1 E2E 02/03.


### PF-TRJ-08 — CKI absent ou version non applicable

**Étant donné** un cycle de conception ouvert et un CKI absent, corrompu, non approuvé ou illisible ; **quand** Nora cherche la guidance spécialisée ; **alors** elle ne prétend pas l’avoir utilisée ; l’aide générale continue pour les points sûrs, la limite est qualifiée et aucun fallback historique n’est imposé.

*Couverture :* 019, 021–023 ; R1 E2E 02/03.


### PF-TRJ-09 — Relation Architecture vers DevOps

**Étant donné** le cycle actif Architecture technique et une contrainte de déploiement déterminante ; **quand** Nora consulte l’opportunité A → DevOps ; **alors** elle peut proposer une analyse des environnements/rollback dans le cycle courant ou une étape future ; pas d’ouverture et pas de second CKI.

*Couverture :* 025–028 ; R1 E2E 02/03.


### PF-TRJ-10 — Matrice silencieuse et facultative

**Étant donné** le CKI actif ne possède aucun lien vers la discipline que le Pilote souhaite examiner ; **quand** Nora traite la question ; **alors** l’absence de lien ne réduit ni les compétences de Nora ni les types de suites possibles.

*Couverture :* 019, 025–028 ; R1 E2E 02/03.


### PF-TRJ-11 — Transfert Conception vers UX

**Étant donné** des parcours et règles métier établis dont certaines hypothèses restent non vérifiées ; **quand** Nora évalue un travail UX ultérieur ; **alors** elle transmet uniquement leurs références et degrés d’établissement ; les hypothèses ne deviennent pas des décisions ni des preuves.

*Couverture :* 007, 025–026, 029, 033 ; R1 E2E 02/04.


### PF-TRJ-12 — QA révèle une contradiction fonctionnelle

**Étant donné** un cycle QA actif avec un oracle contradictoire ; **quand** Nora identifie un retour R → Conception fonctionnelle ; **alors** elle recommande de requalifier la règle canonique sans modifier silencieusement une spec, rouvrir un cycle clos ni neutraliser le Pilote.

*Couverture :* 005–006, 025–026, 029 ; R1 E2E 02/04/06.


### PF-TRJ-13 — Maturité suffisante avec réserve reportable

**Étant donné** un cycle Cadrage dont le résultat utile est tenu et un détail technique reportable ; **quand** Nora apprécie la progression ; **alors** elle peut recommander une clôture argumentée, exposer la réserve et la responsabilité de suite ; aucune clôture automatique ni gate ajouté.

*Couverture :* 012–013, 030–032, 035 ; R1 E2E 02/04.


### PF-TRJ-14 — Maturité non démontrée

**Étant donné** un cycle technique avec contradiction structurante et une preuve obligatoire manquante ; **quand** Nora envisage une sortie ; **alors** elle qualifie le blocage et évite « READY » ; le CKI ne remplace ni la preuve ni la décision.

*Couverture :* 013, 030–032, 035 ; R1 E2E 02/05/06.


### PF-TRJ-15 — Clôture avec GO effectif

**Étant donné** un cycle validement actif, acquis et réserves connus ; **quand** le Pilote autorise la clôture ; **alors** Studio vérifie, clôture réellement et conserve une trace fidèle de la clôture et de ses réserves ; pas d’adoption implicite des travaux.

*Couverture :* 012, 014–016, 033–035 ; R1 E2E 02/04/06.


### PF-TRJ-16 — GO conjoint, effet partiel

**Étant donné** un cycle actif et un GO visant sa clôture puis l’ouverture du suivant ; **quand** la clôture réussit mais l’ouverture échoue ; **alors** Studio présente un cycle courant clôturé et aucun suivant actif, les causes et possibilités de reprise ; pas de réussite globale fictive.

*Couverture :* 008, 014–016, 034 ; R1 E2E 02.


### PF-TRJ-17 — Ouvertures concurrentes

**Étant donné** deux conversations du même projet sans cycle actif au moment de la lecture initiale ; **quand** deux GO d’ouverture arrivent en concurrence ; **alors** au plus une ouverture peut rester effectivement active ; l’autre est refusée/requalifiée après contrôle, sans duplication.

*Couverture :* 008–009, 015–016 ; R1 E2E 02/04.


### PF-TRJ-18 — Rejeu d’un GO

**Étant donné** une ouverture déjà enregistrée et un même GO répété après timeout ; **quand** la requête est retentée ; **alors** l’état vrai est retrouvé, aucun nouveau cycle ni seconde ouverture n’est fabriqué.

*Couverture :* 015–016, 034 ; R1 E2E 02/04.


### PF-TRJ-19 — Reprise depuis autre conversation

**Étant donné** une trajectoire et un cycle actifs avec sujets réorganisés ; **quand** le Pilote reprend ailleurs ; **alors** Nora retrouve l’état du cycle, le type CKI, les acquis via domaine 4 et les restrictions encore applicables, sans recopier des registres concurrents.

*Couverture :* 007, 017–018, 033–035 ; R1 E2E 02/04.


### PF-TRJ-20 — Suspension du Pilote

**Étant donné** une suspension valide attachée à une portée du projet ; **quand** Nora estime un cycle mûr ; **alors** la recommandation de maturité ne lève pas la suspension ni n’autorise une transition incompatible.

*Couverture :* 012, 030–032, 035 ; R1 E2E 02/05.


### PF-TRJ-21 — Nouvelle version CKI disponible

**Étant donné** un cycle actif utilisant une guidance identifiable ; **quand** une version CKI candidate plus récente est publiée sur Git ; **alors** Studio ne la traite pas comme applicable/adoptée par sa seule publication ; la version ayant servi reste traçable et la suite est qualifiée.

*Couverture :* 021–024 ; R1 E2E 02/04/07.


### PF-TRJ-22 — Changement de méthode projet

**Étant donné** un cycle actif et une méthode retenue par le Pilote ; **quand** le Pilote modifie cette méthode avec portée explicite ; **alors** la compatibilité du travail en cours est examinée sans remplacer silencieusement le CKI, ses anciens constats ou des contrats d’exécution.

*Couverture :* 004, 020–021, 024, 033 ; R1 E2E 02/04/05.


### PF-TRJ-23 — Réorientation et retour sans cycle forcé

**Étant donné** une investigation Delivery découvre une incertitude de conception ; **quand** Nora propose de la traiter ; **alors** elle peut approfondir directement sous le même cycle, ou proposer une étape distincte si la valeur le justifie ; pas de réouverture automatique de Conception.

*Couverture :* 003–006, 025–028 ; R1 E2E 02/03.


### PF-TRJ-24 — Interprojets et Git partagé

**Étant donné** deux projets individuels consultent un même dépôt Git ; **quand** l’un termine un cycle ou apprend un état de l’autre ; **alors** les trajectoires, cycles actifs, décisions et CKI applicables restent propres à chaque projet ; le dépôt commun n’entraîne pas de fusion.

*Couverture :* 007–008, 017, 033–034 ; R1 E2E 02/04/07.


### PF-TRJ-25 — Pratiques transversales sans spécialité dédiée

**Étant donné** un cycle Architecture et une question FinOps/GreenOps ; **quand** Nora analyse l’impact coûts/empreinte ; **alors** elle apporte son expertise générale, sans inventer un CKI dédié, un seizième type de cycle approuvé ou un gate transversal.

*Couverture :* 017–020, 025–028 ; R1 E2E 02/03.


### PF-TRJ-26 — CKI guide un livrable non obligatoire

**Étant donné** un cycle UX actif et une recommandation CKI de documenter un parcours ; **quand** le Pilote ne souhaite pas produire de dossier dédié ; **alors** Nora peut adapter la forme de restitution si les conditions d’acceptation réellement applicables restent tenues ; la simple recommandation CKI n’est pas un motif autonome de STOP.

*Couverture :* 013, 020, 031–032 ; R1 E2E 02/03.


### PF-TRJ-27 — État durable explicitement sans méthode

**Étant donné** un projet créé sans méthode retenue ; **quand** Nora reprend le projet puis propose une première étape ; **alors** le domaine 5 conserve un état de méthode non retenue, Nora demeure utile et aucun choix par défaut ou DoctrinePackage historique n'est inféré. *Couverture :* RG-TRJ-037/040 ; R1 E2E 01/02.

### PF-TRJ-28 — Choix de méthode exprimé naturellement

**Étant donné** un projet sans méthode avec une recommandation argumentée ; **quand** le Pilote dit « cette méthode sera notre cadre pour ce projet » avec portée identifiable ; **alors** l'autorité de l'arbitrage est qualifiée par le domaine 6 et, après enregistrement effectif, le domaine 5 restitue référence, version et portée applicables ; pas de deuxième clic de principe. *Couverture :* RG-TRJ-037/038 ; R1 E2E 02/04.

### PF-TRJ-29 — Nouvelle version et cycle actif

**Étant donné** une méthode projet retenue et un cycle Delivery actif ; **quand** une nouvelle version apparaît et Nora recommande son adoption ; **alors** la méthode appliquée ne change pas avant décision compétente, les cycles touchés sont requalifiés de façon proportionnée si le changement est décidé et aucune preuve passée n'est réécrite. *Couverture :* RG-TRJ-038/039 ; R1 E2E 02/04/05.

### PF-TRJ-30 — Technique CKI incompatible avec la méthode projet

**Étant donné** une méthode validée pour le projet et un CKI actif qui suggère une technique non adaptée à ce cadre ; **quand** Nora conduit le travail ; **alors** elle conserve son intelligence générale, identifie la tension, écarte ou adapte la technique facultative et demande un arbitrage uniquement si une véritable modification de méthode ou contrainte est en jeu. *Couverture :* RG-TRJ-037/040 ; R1 E2E 02/03.

## 5. Matrice de revue de compatibilité (Nora / Connaissance / CKI / R1)

**Portée de la revue :** contrôle bilatéral documentaire contre les deux spécifications validées et le corpus CKI v0.2 **candidat** publié sur la branche R2. La compatibilité avec des contrats **non rédigés** ne peut pas être déclarée acquise.

| Interface / enjeu | Sources confrontées | Conclusion documentaire | Correction ou garde-fou retenu |
| --- | --- | --- | --- |
| Aide sans cycle | R1 §§2.16/2.31 ; Nora `RG-CONV-005`, `RG-METH-009` ; CKI §7 | **COMPATIBLE** | Cycle et CKI restent facultatifs hors projet/cycle réel (`RG-TRJ-001/023`). |
| Cycle actif unique | R1 §2.31 ; CKI §1 ; Nora `RG-METH-003/005` | **COMPATIBLE** | Un seul actif, un seul CKI principal ; pas de deuxième cycle par digression (`008/011/018`). |
| CKI autonome | CKI §3, matrice §1 ; R1 §2.17 | **COMPATIBLE** | Aucun prédécesseur ni contenu lié requis (`017/019/028`). |
| Matrice 50 relations | CKI matrice T/A/R/E, R1 §2.19 | **COMPATIBLE** | Les liens sont opportunités cognitives, jamais dépendances, gates, workflow ni second CKI (`005/025–029`). |
| Casquette spécialisée vs comportement général | Nora `RG-CONV-001..006` ; CKI §2/§3 | **COMPATIBLE** | Domaine 5 présente la spécialité ; domaine 3 demeure propriétaire de l’interprétation et du dialogue (`020/027/030`). |
| CKI comme gate / livrable | Nora `RG-METH-004`, `RG-APP-004` ; R1 §2.16 | **COMPATIBLE** | Un CKI suggère, ne rend rien obligatoire (`013/020/031`). |
| Méthode durable différente de CKI | Nora `RG-METH-009..016`, `RG-APP-006` ; CKI §6 | **COMPATIBLE SOUS RÉSERVE DE GOUVERNANCE** | Domaine 5 conserve la méthode effectivement applicable ; D6 décide, Nora propose ; CKI ne se substitue pas ; pas de migration silencieuse (`021/024/037–040`). |
| Mémoire / points ouverts | Connaissance `RG-KNOW-003/004/011/015` ; R1 E2E 04 | **COMPATIBLE** | L’état de cycle référence les sujets/points ouverts : pas de deuxième mémoire (`007/033/034`). |
| Conflits de sources / preuve | Nora `RG-CTX-003/005`, `RG-APP-005` ; Connaissance `RG-KNOW-006..010` | **COMPATIBLE** | Une projection ou un transfert CKI ne valide rien (`002/029/032`). |
| Transitions avec GO | R1 §§2.16/2.19/2.31 ; Nora `RG-AUTH-001/005` | **COMPATIBLE COMME INTERFACE** | Le domaine 5 qualifie l’état ; domaine 6 reste propriétaire de la validité du GO (`009/012/014/015`). |
| STOP / suspensions | Nora `RG-AUTH-002/004/005`, Connaissance `RG-KNOW-009` | **COMPATIBLE COMME INTERFACE** | Aucun CKI ni maturité ne lève une suspension (`035`). |
| Transitions concurrentes / répétées | R1 §2.31 ; SEF §6.3 | **À PROUVER EN R4–R6** | Invariant exigé ; verrou, sérialisation et idempotence restent choix R4 (`014–016`). |
| CKI absent / candidat Git | Nora `RG-APP-008`, `RG-METH-006` ; CKI §7 | **COMPATIBLE** | Dégradation explicite, pas de fallback DoctrinePackage/v2.6 (`021/022`). |
| Sécurité/DevOps/PR/release | CKI v0.2 §6, matrice ; R1 domaines 6–9 | **COMPATIBLE SOUS RÉSERVE DES FUTURS CONTRATS** | Une recommandation DevOps/PR/QA n’octroie pas permissions, preuve, merge ni adoption (`013/025–029`). |
| Extension du catalogue | CKI §1/§8 ; naming Next | **COMPATIBLE** | Un type = un CKI autonome, mais aucune limite 15, aucun ajout automatique FinOps/GreenOps (`017/028`). |
| UX des cycles | R1 §§2.16/2.19 ; Nora `RG-UX-001..003` | **COMPATIBLE AU NIVEAU INTENTION** | Distinguer proposition, GO et résultat ; détail visuel et navigateur non encore vérifiés (`036`). |

### 5.1. Écarts apparents : qualification, résolution et échéances de traitement

1. **« CKC » dans R1/Nora v0.4 vs « CKI » dans Next :** renommage conversationnel du contenu cible, **pas deux engines** ni deux guidances simultanées. Les textes approuvés restent cités tels quels ; harmonisation documentaire lors du prochain lot autorisé, en préservant la traçabilité.
2. **« Un type = un CKI » vs CKI candidat indisponible :** correspondance de catalogue **≠ garantie de chargement ni permission d'adopter n'importe quel document Git**. Une dégradation est possible sans prétendre que la casquette a été effectivement appliquée.
3. **Relation CKI « A → B » vs trajectoire décidée :** une opportunité de transfert/approfondissement peut être mentionnée sans qu’un cycle B ait jamais existé. Une véritable dépendance vient d’un fait du projet ou d’une autorité distincte.
4. **« Maturité suffisante » vs gate réel :** la proposition de Nora est cognitive ; Studio contrôle les exigences opposables, sans attribuer au CKI des règles de sécurité ou un statut de preuve.
5. **Roadmap Next sur `main` indiquant encore « R2 NOT STARTED » :** texte de roadmap **historiquement non synchronisé avec la PR #639 vérifiée et la branche R2 active** ; écart documentaire préexistant et non source d'un changement dans ce contrat. Actualisation sous mandat séparé lorsqu'opportune.

**Table de traitement — aucune contradiction normative n'est déclarée « résolue » au-delà des sources effectivement examinées.**

| Point | État constaté | Propriétaire / action | Échéance et critère de sortie |
| --- | --- | --- | --- |
| **5.1-1 — CKC / CKI** | **HARMONISATION DOCUMENTAIRE À FAIRE** ; concept unique, pas deux guidances | Domaine 3 et domaine 5 : harmoniser la désignation dans une prochaine révision autorisée des documents Next ; conserver les termes historiques dans les citations R1 et CKC | **Consolidation R2 avant revue globale** ; relire toute modification des specs déjà validées et solliciter Morris si elle change le sens |
| **5.1-2 — CKI indisponible** | **RÉSOLU FONCTIONNELLEMENT**, non prouvé en runtime | Domaine 5 : distinguer association type–CKI et disponibilité réelle ; Nora poursuit les travaux indépendants, sans source Git arbitraire. R4 conçoit le mécanisme | **R4** : contrat de chargement et version ; **R5/R6** : cas de dégradation, non-invention et reprise démontrés |
| **5.1-3 — Matrice / trajectoire** | **RÉSOLU FONCTIONNELLEMENT** | Domaine 5 : relations CKI = opportunités cognitives ; aucun lien obligatoire, aucune activation secondaire ou transition. Domaine 3 : recommandations contextualisées | **R2** : `RG-TRJ-005/025..029` ; **R5/R6** : scénarios négatifs de précédence et d'activation |
| **5.1-4 — Maturité / gates** | **FRONTIÈRE DÉFINIE, INTERFACES À ÉVALUER** | Domaine 5 : appréciation et recommandation ; domaines **6** et **8** : validité du GO, obligations opposables et niveau réel de preuve/acceptation | **Pendant les specs D6 et D8**, puis **revue transversale avant exit R2** ; comportement à prouver en R5/R6 |
| **5.1-5 — Roadmap désynchronisée** | **KNOWN GAP DOCUMENTAIRE** ; Git et décision R1 ont priorité | Gouvernance Next / Morris : proposer l'actualisation ciblée des statuts R1/R2 à partir de la PR #639 et de l'état de la branche, sans anticipation de merge ni d'adoption | **Prochaine consolidation de gouvernance autorisée** ; décision de contenu et mandat Git adaptés **D2**, hors du présent mandat documentaire |

**Politique de suivi pour le macro-lot R2 :** à chaque nouvelle spec propriétaire, reprendre les points d'interface touchés, déterminer `RÉSOLU`, `À ARBITRER`, `NON ÉVALUÉ` ou `À PROUVER`, et inscrire la responsabilité ainsi que la suite. **Avant la sortie globale R2**, confronter toutes les specs 3–9 entre elles et traiter les conflits réellement structurants avec Morris ; les seules preuves R4–R6 restent ouvertes jusqu'aux jalons adéquats. Aucun micro-lot documentaire ne doit être créé pour un simple libellé.

### 5.2. Réserves / contrats encore non évalués

- **Domaine 6 — Décisions/gouvernance :** validité du GO, portée, ordre des actes, maintien de suspension, autorisations de modification de trajectoire, conflit de décisions.
- **Domaine 7 — Réalisation :** distinction changement de cycle vs lancement d’outil, contrat d’exécution, STOP, reprise et effet partiel sur une mission technique.
- **Domaine 8 — Résultats / preuves :** seuil réel de preuve et acceptation, distinction réserve bloquante/reportable, impact des observations sur la maturité.
- **Domaine 9 — Git :** accès réel par identité et projet, version de source et droits sur branches, collaboration via dépôt partagé.
- **Catalogue CKI v0.2 :** contenu des quinze fiches et matrice non encore validés individuellement ; revue cognitive de valeur et gouvernance de changement de catalogue à instruire. La **validité de l'usage runtime n'est pas prouvée**.

**Verdict de revue : `COMPATIBLE AU NIVEAU DOCUMENTAIRE AVEC R1 + NORA v0.4 + CONNAISSANCE v0.1 + PRINCIPES CKI` ; `NON ÉVALUÉ` contre les futurs contrats 6–9 ; aucun `BEHAVIOR PROVEN`.**


### 5.3. Revue par les quinze CKI candidats — absence de prérequis et de règles concurrentes

**Contrôle réalisé sur les quinze fiches publiées à `sfia/next-r2-functional-specs@6add8aca…` :** chaque fiche possède une rubrique d'autonomie, une appréciation qualitative non autorisante et un renvoi à la matrice. Aucune obligation de parcourir préalablement une autre spécialité n'est introduite dans ces rubriques. Les techniques détaillées **restent des ressources professionnelles candidates**, non des règles produit approuvées.

| CKI Next v0.2 | Frontière testée avec la spec domaine 5 | Qualification documentaire et vigilance |
| --- | --- | --- |
| **01 Cadrage** | N'est pas un premier cycle imposé | **COMPATIBLE** — `RG-TRJ-001/003/019` ; pas de passage forcé en Conception. |
| **02 Conception fonctionnelle** | Ne suppose pas un cadrage précédemment clôturé | **COMPATIBLE** — contexte métier pertinent, pas d'antécédent CKI nécessaire (`019`). |
| **03 Architecture fonctionnelle** | Oriente les responsabilités, non la création de gates ou d'une nouvelle architecture de workflow | **COMPATIBLE** — les règles métier restent chez leur propriétaire (`007/025/029`). |
| **04 UX/UI** | Guide l'expérience sans obliger un livrable visuel ni imposer Delivery | **COMPATIBLE** — restitution proportionnée, formes décidées en R3 (`013/036`). |
| **05 Backlog/user stories** | N'institue pas une étape obligatoire avant la réalisation | **COMPATIBLE** — aucune précédence CKI (`003/005/019`). |
| **06 Architecture technique** | Peut démarrer sans ancien CKI ; n'autorise pas de stack ou de code par elle-même | **COMPATIBLE** — choix et effets gouvernés (`019/020`). |
| **07 Intégration/DevOps** | Le pipeline, les contrôles et rollback sont des objets d'analyse, non des nouveaux gates produits par CKI | **COMPATIBLE SOUS VIGILANCE** — opposabilité seulement si règles réelles applicables (`013/020/025`). |
| **08 Delivery** | La casquette ingénieur aide à analyser/produire cognitivement mais n'autorise jamais les outils | **COMPATIBLE** — domaine 7 conserve les exécutions, domaine 6 les autorisations (`020/027`). |
| **09 QA/validation** | Son jugement méthodologique ne remplace pas le verdict officiel de preuve/acceptation | **COMPATIBLE SOUS VIGILANCE** — les termes *PASS/FAIL/READY* ne deviennent pas une décision de domaine 8 (`029/032`). |
| **10 Sécurité/RSSI** | Apporte des angles d'analyse transverses, pas de réglementation ou gate inventés | **COMPATIBLE SOUS VIGILANCE** — exigences opposables venues des règles applicables, jamais de la matrice (`013/025/027`). |
| **11 Déploiement/release** | La préparation d'un go/no-go n'est pas une décision ni un déploiement | **COMPATIBLE SOUS VIGILANCE** — domaine 6/7 et preuve 8 restent propriétaires (`012/020/032`). |
| **12 Observabilité/RUN** | Ne rend pas la préparation à l'exploitation obligatoire pour n'importe quel cycle | **COMPATIBLE** — approfondissement contextuel, pas de condition CKI de sortie (`025–028/032`). |
| **13 PR readiness** | Une recommandation *Ready* ne crée ni PR, ni droit Git, ni autorisation de merge | **COMPATIBLE SOUS VIGILANCE** — ne pas confondre pertinence du CKI avec gate Git (`013/020/025`). |
| **14 Post-merge** | La relecture après merge ne clôt pas un cycle automatiquement et ne prouve pas `ADOPTED` | **COMPATIBLE SOUS VIGILANCE** — distinction preuve Git/acceptation (`012/029`). |
| **15 Capitalisation/REX** | Recommandations d'amélioration sans modifier méthode, catalogue CKI ou trajectoire de manière autonome | **COMPATIBLE** — changements gouvernés, histoire non réécrite (`004/024`). |

**Nuance de qualification :** le caractère *compatible* désigne seulement l'absence de contradiction normative identifiée dans la **lecture documentaire**. Il ne prouve ni le bénéfice professionnel des fiches, ni leur adoption, ni la pertinence des liens dans le fonctionnement réel. Les six spécialités « sous vigilance » appellent un contrôle renforcé dans la validation du corpus et dans les spécifications propriétaires 6–9 ; elles ne justifient pas un nouveau moteur de gates.

## 6. Conditions d'acceptation du périmètre (pour revue puis preuves futures)

| Capacité | Contrôle minimal attendu R2 | Preuve future appropriée |
| --- | --- | --- |
| Projet sans cycle | Pas de création implicite, Nora conserve son utilité | Scénarios comportementaux E2E 01–03 en R5/R6 |
| Trajectoire | Projection, révision, distinction des faits et promesses | Tests de transitions et reprise d’état, UI R3 |
| Cycle actif unique | Unicité malgré demandes concurrentes, rejouées et reprises | Tests d’invariants transactionnels en R5, concurrence REAL quand applicable |
| Autorité | GO déterminant, état réellement observé avant confirmation | Contrats D6 et tests positifs/négatifs d'autorisation |
| Transition combinée | Succès partiel restitué honnêtement, absence d’atomicité inventée | Tests d’échec après clôture et reprise |
| CKI principal | Un CKI pour le type actif, aucun hors cycle ou second chargé | Vérification intégration du moteur réel et des limites |
| Méthode durable | État courant/absent, changement de version décidé, impacts et distinction CKI | Scénarios de changement contextualisé et de conflit de portée |
| Dégradation CKI | Absence, version non valable, changement de contenu | Tests de non-invention et de repli cognitif général |
| Relations | Opportunités motivées, pas de précédence imposée | Cas sans lien, avec lien pertinent et contre-exemples |
| Maturité | Signal utile, pas de score/gate/notification rituels | Évaluation sur cas ambigus et adversariaux, avec/sans CKI |
| Continuité | Reprise de cycle sans recopier décisions/points ouverts | Reload / redémarrage / conversations et projets distincts |

**Critère de revue R2 :** toutes les règles doivent être traçables à une orientation R1, un arbitrage Morris ou une qualification explicitement candidate ; les violations des spécifications Nora/Connaissance entraînent requalification, et l’absence de spec propriétaire voisine reste **NON ÉVALUÉ**. Un test automatisé de Markdown n'est pas une preuve de qualité cognitive ni de fiabilité d'autorité.

## 7. Trajectoire de conception et responsabilités futures

| Jalon | Contrat / sortie attendue |
| --- | --- |
| **R2** | Valider ou corriger règles domaine 5, cas fonctionnels, articulation domaine 6–9, statut du catalogue CKI et ses révisions sans faux héritage |
| **R3** | Rendre lisibles proposition de trajectoire, cycle actif, progression, GO et effets vérifiés dans la conversation ; prototypage UX pertinent, pas de formulaire obligatoire |
| **R4** | Choisir identité/cycle, unicité concurrente, état transactionnel, reprise et CKI versionné/qualifié, isolation projets, exposition contrôlée de guidance et coûts de contexte ; éviter moteurs supplémentaires |
| **R5** | Construire une tranche verticale intégrant projet, cycle, Nora, CKI, décision et persistance avec tests + documentation synchronisée ; pas de spécialisation théorique isolée |
| **R6** | Prouver comportement et pertinence cognitive sous conditions déclarées, y compris GO partiel, digressions, cas adversariaux et reprise ; adoption après gate Morris |

### 7.1. Risques / dettes à sortie définie

- **15 spécialités historiques très logicielles** : ne pas enfermer une mission hors logiciel ; exit : scénarios non logiciel et qualification d’extension avant adoption d’un nouveau type.
- **Concurrence d'ouvertures** : R2 invariant ; exit R4 contrat technique d’idempotence / unicité, R5 tests en conditions pertinentes.
- **Version CKI vs méthode durable** : R2 séparation ; exit R4 politique d’applicabilité versionnée, R5 tests changement en cours de cycle.
- **Maturité subjective** : R2 critères qualitatifs ; exit R5/R6 tests comparatifs et évaluations de faux positifs/interruption.
- **Roadmap `main` désynchronisée** : ne change pas les décisions ni les preuves Git ; exit documentaire sous GO approprié.

### 7.2. Validation de cette spécification et gates ultérieurs

**Validation du contenu acquise auprès de Morris le 2026-11-02 : `VALIDATED SPEC v0.1`**, sous réserves documentées aux §§5.1–5.3. Les contrats propriétaires D6–D9 restent à comparer à leur parution, avant la qualification globale R2. La validation et le commit Git ne signifient ni `IMPLEMENTED`, ni `COVERAGE VERIFIED`, ni `BEHAVIOR PROVEN`, ni `ADOPTED`.

---

**Verdict documentaire : `R2 — TRAJECTOIRE / CYCLES / GUIDANCE CKI — VALIDATED SPEC v0.1 (Morris, 2026-11-02)` ; 40 règles `RG-TRJ-*`, 30 cas `PF-TRJ-*`, revue R1/Nora/Connaissance/CKI réalisée ; les interfaces D6–D9 restent `NON ÉVALUÉES` contre leurs futures specs, les écarts ont des responsables et échéances (§5.1) ; Next `N/A — NON IMPLÉMENTÉ`.**
