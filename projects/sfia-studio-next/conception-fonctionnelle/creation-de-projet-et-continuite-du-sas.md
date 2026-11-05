# SFIA Studio Next — Spécification fonctionnelle R2
## Création de projet et continuité du sas

| Métadonnée | Qualification |
| --- | --- |
| **Version/date** | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02) — interfaces réservées** |
| **Domaine propriétaire** | **2 — Création de projet et continuité du sas** |
| **Résultat Pilote** | Exprimer une intention, obtenir l’aide utile de Nora, créer explicitement un projet Studio individuel, puis poursuivre visuellement le même fil de conversation dans cet espace réellement créé. |
| **Sources Git** | `mcleland147/sfia-workspace` : `main@8751775edc314e8fc7f0855104e5000290be9839` ; branche R2 `sfia/next-r2-functional-specs@3855249a9b02cf484b47811e3aca538de9430ac6` |
| **Références** | Vision R1 validée ; SEF v0.2 ; décision R1 ; sept specs R2 D3–D9 `VALIDATED SPEC` ; CKI v0.2 candidats |
| **Périmètre** | **IN :** sas conversationnel avant projet, aperçu progressif, seuil de création proportionné, acte « Créer le projet », prévention des doublons, effet vérifié, transfert de contexte et continuité visuelle et cognitive. |
| **Hors périmètre** | **OUT :** création implicite, cycle/CKI/méthode ou dépôt Git imposés, exécution Cursor, projet collectif, un autre registre de décisions/sujets, lancement de mission technique, stockage ou routes techniques décidés. |
| **Statut produit** | **N/A — NON IMPLÉMENTÉ**, aucune preuve runtime Next |
| **Gate** | **Contenu validé par Morris et publié sur branche R2 sous GO Git borné** ; pas de PR/merge ni sortie R2 anticipée |

## 1. Capacité, valeur et frontières de responsabilité

D2 possède **le franchissement effectif de la frontière avant/après création du projet** : préparer dans un sas ne signifie pas créer. Le Pilote donne l’acte explicite « Créer le projet » ; Studio établit l’effet avant de le confirmer ; Nora reste responsable de l’interaction conversationnelle et les autres domaines conservent leurs états. Le fil du sas **reste visuellement continu** après l’enregistrement, mais l’ensemble des messages n’est pas chargé en permanence dans le modèle.

### 1.1. Propriétaires canoniques et interfaces

| Responsable | Possède | Interface avec cette spécification |
| --- | --- | --- |
| **D1 — Accès et portefeuille** | Identité personnelle, accès aux projets et navigation ; cockpit non conversationnel | Fournit l’identité personnelle vérifiée et le portefeuille après création |
| **D2 — Création de projet** | Sas, acte de création, effet projet vérifié et continuité visible du fil | **Propriétaire ici**, fournit projet créé et référence du fil continu |
| **D3 — Nora** | Compréhension, investigation, production cognitive et restitution | Ne délègue aucune autorité à la navigation ou à la préparation |
| **D4 — Connaissance** | Mémoire, sources, sujets et points ouverts du bon contexte | Les informations de D1/D2 référencent ses contenus sans registre concurrent |
| **D5 — Trajectoire / CKI** | Projet courant en contexte, cycles et association du CKI à l’unique cycle actif | Aucun cycle/CKI obligatoire à l’accès ou à la création |
| **D6 — Décisions et gouvernance** | Auteur, décisions, GO, mandats, suspensions, restrictions | Les actes humains restent qualifiés par D6 ; aucun droit déduit d’un écran |
| **D7 — Réalisation** | Contrat technique et tentative d’exécution | Pas de lancement Cursor par navigation ou création |
| **D8 — Résultats et preuves** | Conformité et références probatoires | Aucune certification depuis un statut de cockpit ou de création |
| **D9 — Git gouverné** | Accès et ressources Git, références et conditions de mutation Git | Git facultatif ; connexion Studio et droit Git restent indépendants |

**Distinction structurante :** identifier un Pilote, ouvrir un contexte de travail, enregistrer un projet, autoriser une transition de cycle et déclencher Cursor sont **des effets différents**. La proximité UX de ces actes n’en modifie jamais le propriétaire.

## 2. Informations et contrats fonctionnels minimaux

**Contexte sas :** Pilote identifié, préparation en cours, éléments exprimés et sources citées selon leur provenance, intention et finalité, suggestions/hypothèses, décisions effectivement reconnues, questions ouvertes. **Création :** acte explicite, portée du projet, identité personnelle, référence durable du projet, situation d’enregistrement effective, erreur ou incertitude et rattachement au fil du sas. **Passage :** contexte projet effectivement créé, relation explicite avec le fil visible, acquis transmis à D4, références d’autorité de D6, propositions non validées préservées comme telles. Ni méthode de projet ni cycle ni Git obligatoires.

Aucun schéma de table, protocole de session, route UI, SDK GitHub, event bus, verrou, identifiant technique ou modèle de persistance n’est adopté à ce stade ; R3 et R4 prennent les décisions correspondant à leurs responsabilités.

## 3. Règles de gestion fonctionnelles validées — propriétaire du domaine (interfaces réservées)

### 3.A — Sas conversationnel et qualification souple

- **RG-CRE-001 — Sas accessible sans projet durable.** Le Pilote peut explorer son intention avec Nora dans un sas identifié, avant l’existence du projet ; la conversation et le contexte de préparation ne créent pas automatiquement une fiche projet. **Interfaces :** R1 §§2.15/2.20 ; D3 RG-CONV-005.

- **RG-CRE-002 — Conversation libre et utile.** Nora investigue, compare, produit et questionne de manière proportionnée ; ni formulaire de cadrage exhaustif, ni méthode, ni cycle, ni dépôt préalable ne sont requis pour cette aide cognitive. **Interfaces :** R1 §2.20 ; D3 RG-CONV-002/003/005.

- **RG-CRE-003 — Aperçu évolutif et non autorisant.** Le sas peut synthétiser un nom proposé, l’intention, le résultat, contraintes, sujets ouverts et options, avec provenance et statut propositionnel ; l’aperçu n’est pas une décision durable du Pilote. **Interfaces :** R1 §2.20 ; D3 RG-APP-001/003 ; D4 RG-KNOW-005.

- **RG-CRE-004 — Préparation suffisante, sans checklist.** La création devient envisageable lorsque le Pilote et Studio disposent d’une intention intelligible, d’une identité personnelle applicable et des informations minimales nécessaires au projet ; pas de trajectoire complète exigée. **Interfaces :** R1 §2.20 ; D1 v0.1 `VALIDATED SPEC` du même lot R2.

- **RG-CRE-005 — Trajectoire et premier cycle seulement proposés.** Nora peut proposer une trajectoire macro et une spécialité de premier cycle lorsque pertinent ; aucune projection n’équivaut à un cycle ouvert ni à une décision de méthode durable. **Interfaces :** R1 §§2.19/2.20 ; D5 RG-TRJ-001/009/010.

- **RG-CRE-006 — Pas d’emplacement Git à l’inscription.** Créer un projet Studio ne nécessite ni rattachement Git, ni répertoire, ni dépôt ni droit d’écriture externe ; une source Git pertinente peut être consultée dès le sas dans ses droits, sans association implicite. **Interfaces :** R1 §§2.20/2.23 ; D9 RG-GIT-001/003.

- **RG-CRE-007 — Clarification ciblée avant décision.** Une information manquante ne suspend la création que si elle empêche d’identifier correctement l’objet créé, sa propriété ou un effet effectivement requis ; les autres incertitudes restent des points à explorer. **Interfaces :** R1 §2.20 ; D3 RG-CONV-003 ; D6 RG-GOV-004.

### 3.B — Création explicite et enregistrement

- **RG-CRE-008 — Acte dédié Créer le projet.** La création est engagée par l’action explicite « Créer le projet » du Pilote sur la préparation identifiée ; un « ça me semble bien », une recommandation Nora ou une sauvegarde de brouillon ne constitue pas l’acte de création. **Interfaces :** R1 §§2.20/2.30 ; D6 RG-GOV-030.

- **RG-CRE-009 — Identité et titularité vérifiées.** Studio vérifie que le Pilote authentifié est habilité à créer le projet personnel concerné et rattache l’objet créé à ce Pilote, sans héritage des permissions d’autres projets ou dépôts Git. **Interfaces :** R1 §2.24 ; D6 RG-GOV-003/014 ; D1 v0.1 `VALIDATED SPEC` du même lot R2.

- **RG-CRE-010 — Effet vérifié avant confirmation.** L’action, son accusé de réception et l’existence du projet enregistré sont distincts : Studio confirme « projet créé » seulement après établissement fiable de l’effet, jamais sur la seule demande. **Interfaces :** R1 §2.20 ; D3 RG-CONV-006.

- **RG-CRE-011 — Une seule création par intention autorisée.** Une répétition d’action, double clic, timeout ou retour réseau tardif ne produit pas un doublon injustifié ; le projet existant est retrouvé ou l’état reste incertain jusqu’à vérification. **Interfaces :** R1 §2.20 ; D6 RG-GOV-028 principe ; R4 idempotence.

- **RG-CRE-012 — Identité projet pérenne.** Le projet créé possède un rattachement durable permettant de distinguer un projet d’un autre, y compris lorsque des noms semblables existent, sans imposer ici une structure de tables ou un identifiant technique. **Interfaces :** R1 §§2.20/2.24 ; D4 RG-KNOW-002.

- **RG-CRE-013 — Échec de création non masqué.** Une création refusée, échouée ou indéterminée ne déclenche ni fausse entrée de portefeuille ni navigation vers un projet fictif ; l’état et le besoin de vérification sont exposés de façon proportionnée. **Interfaces :** R1 §§2.20/2.30 ; D1 portefeuille.

- **RG-CRE-014 — Pas de cycle, CKI, mandat ou dépôt induit.** La création enregistrée ne lance aucun cycle, n’active aucun CKI, ne sélectionne pas de méthode par défaut, n’autorise aucune exécution Cursor et ne fabrique aucune ressource Git. **Interfaces :** R1 §2.20 ; D5 RG-TRJ-008/009 ; D9 RG-GIT-001 ; D6 RG-GOV-029.

- **RG-CRE-015 — Absence de projet si abandon.** La sortie du sas sans acte de création conserve, selon les capacités de continuité réellement disponibles, seulement l’état de préparation utile ; elle ne se transforme pas en projet durable par expiration ou reprise. **Interfaces :** R1 §2.20 ; D4 RG-KNOW-002.

- **RG-CRE-016 — Pas de promotion implicite des propositions.** Les hypothèses, réserves, trajectoires proposées et conseils du sas restent qualifiés ; seules les décisions effectivement exprimées et applicables sont reconnues par le domaine 6. **Interfaces :** R1 §§2.7/2.20 ; D6 RG-GOV-002/005.

### 3.C — Passage et continuité vers l’espace projet

- **RG-CRE-017 — Continuité visuelle du même fil.** Après création effective, le Pilote rejoint l’espace projet avec le fil du sas qui se poursuit visuellement ; aucun nouveau chat imposant une reconstitution par résumé seul. **Interfaces :** R1 §2.20 — option A visuelle validée.

- **RG-CRE-018 — Marqueur de création vrai.** Le point de passage « Projet créé » est présenté de façon reconnaissable lorsque l’enregistrement est vérifié, sans représenter une transition en succès avant que Studio ne la constate. **Interfaces :** R1 §2.20 ; D3 RG-CONV-006.

- **RG-CRE-019 — Transfert de contexte sans vérité inventée.** Les acquis, sources, contraintes, questions, points ouverts et décisions exprimées durant le sas deviennent récupérables dans le projet avec provenance et statut réel ; D4 possède l’organisation durable, D6 l’autorité. **Interfaces :** R1 §2.20 ; D4 RG-KNOW-006/015 ; D6 RG-GOV-009.

- **RG-CRE-020 — Projet courant après création seulement.** La transition fait du nouveau projet le contexte de référence uniquement après sa création réelle ; en cas d’échec ou d’état inconnu, le sas demeure le contexte jusqu’à réconciliation. **Interfaces :** R1 §§2.15/2.20 ; D3 RG-CTX-001 ; D1 portefeuille.

- **RG-CRE-021 — Premier échange sans cycle obligatoire.** Nora continue à aider dans le projet créé sans exiger ouverture de cycle, choix de méthode, activation CKI ou lancement de contrat ; toute ouverture future nécessite le GO distinct appartenant à D5/D6. **Interfaces :** R1 §§2.16/2.20 ; D5 RG-TRJ-009/013.

- **RG-CRE-022 — Provenance de sources consultées avant création.** Les sources consultées dans le sas, notamment Git et autres projets sous droits, conservent leur origine, version et limitations ; elles ne deviennent pas par transit des autorisations du nouveau projet. **Interfaces :** R1 §§2.15/2.20 ; D4 RG-KNOW-006/014 ; D9 RG-GIT-011.

- **RG-CRE-023 — Reprise sans transcript intégral obligatoire.** La continuité du fil visible et des acquis récupérables n’exige pas l’injection exhaustive des messages dans chaque réponse ; la sélection de contexte relève de D3/D4, l’UX de R3 et la persistance de R4. **Interfaces :** R1 §2.20 ; D3 RG-CTX-002 ; D4 RG-KNOW-011.

- **RG-CRE-024 — Reprise de création interrompue.** Après une coupure survenue pendant le passage sas→projet, Studio établit si le projet existe, recolle les références de conversation réellement sauvegardées et empêche une seconde création implicite. **Interfaces :** R1 §2.20 ; D4 RG-KNOW-015 ; R4.

- **RG-CRE-025 — Projet créé visible au portefeuille.** Lorsque l’existence et la propriété du projet sont confirmées, D1 peut l’afficher et permettre d’y naviguer ; D2 ne crée pas un registre parallèle de projets ni un projet partagé. **Interfaces :** R1 §§2.24/2.30 ; D1 v0.1 `VALIDATED SPEC` du même lot R2.

- **RG-CRE-026 — Pas de réécriture des faits du sas.** La création ne transforme pas des idées provisoires en faits établis et n’efface pas les sources ou l’historique de l’échange ; une correction ultérieure suit D4/D6 selon sa nature. **Interfaces :** R1 §2.20 ; D4 RG-KNOW-007/008.

## 4. Parcours nominaux, alternatifs, négatifs et couverture

Chaque scénario ci-dessous constitue un **contrat de résultat vérifiable en R5/R6**, pas la revendication d’un comportement déjà implémenté. Les références de règle portent sur leur propriétaire unique.

| Cas | Situation | Résultat attendu | Règles couvertes |
| --- | --- | --- | --- |

| **PF-CRE-01** | Exploration d’intention sans projet | Nora travaille dans sas ; aucun projet, cycle ou dépôt n’est créé | `RG-CRE-001`, `RG-CRE-002`, `RG-CRE-006` |

| **PF-CRE-02** | Qualification incomplète mais intention claire | Proposer création malgré trajectoire manquante ; points ouverts conservés | `RG-CRE-003`, `RG-CRE-004`, `RG-CRE-007` |

| **PF-CRE-03** | Nom ou cadre suggéré par Nora | Aperçu explicitement propositionnel ; pas de décision inférée | `RG-CRE-003`, `RG-CRE-005`, `RG-CRE-016` |

| **PF-CRE-04** | Demande de formulaire exhaustif implicite | Nora pose seulement les questions déterminantes pour la création | `RG-CRE-002`, `RG-CRE-004`, `RG-CRE-007` |

| **PF-CRE-05** | Source Git lue avant projet | Lecture dans ses droits ; pas de dépôt ni de cible d’écriture associés par défaut | `RG-CRE-006`, `RG-CRE-022` |

| **PF-CRE-06** | Pas de méthode ni premier cycle défini | Création possible ; Nora reste générale après création | `RG-CRE-004`, `RG-CRE-005`, `RG-CRE-014`, `RG-CRE-021` |

| **PF-CRE-07** | Pilote dit « bonne idée » sur un nom | Aucune création ; accord de contenu à distinguer de « Créer le projet » | `RG-CRE-003`, `RG-CRE-008`, `RG-CRE-016` |

| **PF-CRE-08** | Acte « Créer le projet » avec identité valide | Projet personnel effectivement enregistré ; D1 peut le montrer | `RG-CRE-008`, `RG-CRE-009`, `RG-CRE-010`, `RG-CRE-012`, `RG-CRE-025` |

| **PF-CRE-09** | Session inconnue pendant l’acte | Création non engagée ; identité requalifiée sans effet indu | `RG-CRE-009`, `RG-CRE-013` |

| **PF-CRE-10** | Double clic de création | Un seul projet retrouvé, pas de doublon | `RG-CRE-010`, `RG-CRE-011`, `RG-CRE-012` |

| **PF-CRE-11** | Timeout après enregistrement | État réel relu ; projet existant réutilisé, succès non déclaré avant constat | `RG-CRE-010`, `RG-CRE-011`, `RG-CRE-013`, `RG-CRE-024` |

| **PF-CRE-12** | Erreur avant enregistrement | Le sas et son contexte subsistent dans les limites d’accès ; pas de projet fictif | `RG-CRE-013`, `RG-CRE-015`, `RG-CRE-020` |

| **PF-CRE-13** | Abandon du sas sans validation | Aucune création automatique ni projet dans portefeuille | `RG-CRE-001`, `RG-CRE-015` |

| **PF-CRE-14** | Création avec deux projets de même nom | Identités durables distinctes sans fusion de données | `RG-CRE-009`, `RG-CRE-012`, `RG-CRE-025` |

| **PF-CRE-15** | Création puis continuation de conversation | Même fil visible avec marqueur exact de création | `RG-CRE-017`, `RG-CRE-018`, `RG-CRE-020` |

| **PF-CRE-16** | Passage sas vers projet à état incertain | Pas de bascule définitive de contexte ; réconciliation puis reprise | `RG-CRE-013`, `RG-CRE-020`, `RG-CRE-024` |

| **PF-CRE-17** | Transfert des acquis et questions ouvertes | D4 récupère provenance, sujets, réserves ; D6 garde décisions | `RG-CRE-019`, `RG-CRE-026` |

| **PF-CRE-18** | Projet créé, nouveau sujet libre | Nora poursuit sans cycle actif, CKI ni contrat technique | `RG-CRE-014`, `RG-CRE-021` |

| **PF-CRE-19** | Projet créé avec trajectoire proposée | La trajectoire reste prévisionnelle ; aucun premier cycle ouvert | `RG-CRE-005`, `RG-CRE-014`, `RG-CRE-016`, `RG-CRE-021` |

| **PF-CRE-20** | Source interprojet citée au sas | Rattachée comme référence sourcée, sans importer mandat ni décision | `RG-CRE-019`, `RG-CRE-022` |

| **PF-CRE-21** | Fil visible, modèle utilise mémoire sélective | Continuité observable sans obligation d’injection intégrale | `RG-CRE-017`, `RG-CRE-019`, `RG-CRE-023` |

| **PF-CRE-22** | Reprise après perte de session | Vérifier création et conversation réellement persistées avant toute reprise | `RG-CRE-010`, `RG-CRE-020`, `RG-CRE-023`, `RG-CRE-024` |

| **PF-CRE-23** | Source contradictoire avant création | Conserver versions et statut hypothétique ; aucune promotion en vérité | `RG-CRE-003`, `RG-CRE-019`, `RG-CRE-026` |

| **PF-CRE-24** | Demandes de créer projet + dépôt + cycle en une phrase | Projet créé seulement via acte dédié ; effets Git et cycle restent séparés et gouvernés | `RG-CRE-006`, `RG-CRE-008`, `RG-CRE-014`, `RG-CRE-021` |

| **PF-CRE-25** | Projet créé mais portefeuille non rafraîchi | État enregistré propriétaire prime ; D1 actualise sans créer de nouveau projet | `RG-CRE-010`, `RG-CRE-025` |

| **PF-CRE-26** | Instruction hostile dans source du sas | Texte non autorisant ; pas de création, décision ou exécution induite | `RG-CRE-002`, `RG-CRE-008`, `RG-CRE-016`, `RG-CRE-022` |


**Contrôle de couverture documentaire :** 26 règles distinctes `RG-CRE-001..026` ; 26 scénarios distincts `PF-CRE-01..26` ; chaque règle couverte par au moins un cas. Une correspondance écrite n’est pas une exécution de test.

## 5. Revue transversale, contradictions et dettes/exit

### 5.1. Confrontation des sources et verdict de portée

| Source voisine | Contrôle de conflit réalisé dans ce projet de spec | Qualification |
| --- | --- | --- |
| **Vision R1 §§2.15, 2.20, 2.23–2.24, 2.29–2.30, 2.36** | Contextes Nora limités au sas/projet ; projet individuel ; acte explicite ; Git facultatif ; aucune étape technique implicite | **COMPATIBLE conceptuellement**, sous réserve des mécanismes R4 |
| **D3 Nora v0.4** | Dialogue et interprétation restent à D3 ; navigation/création n’inventent ni analyse, ni changement de projet par citation | **COMPATIBLE**, interface contextualisation à prouver |
| **D4 Connaissance v0.1** | Les sujets, sources et décisions restent sourcés sans recopier la mémoire dans le cockpit ou le sas | **COMPATIBLE**, migration/continuité technique à concevoir |
| **D5 Trajectoire/CKI v0.1** | Pas de cycle, méthode ou CKI activés par accès/création ; un seul cycle actif après GO distinct | **COMPATIBLE**, aucun gate CKI nouveau |
| **D6 Gouvernance v0.1** | Identité et acte de création distincts des mandats et décisions ; pas de permission implicite | **COMPATIBLE**, vérification d’auteur et replays à prouver |
| **D7 Réalisation v0.1** | Aucun contrat Cursor ou lancement technique induit par authentification, navigation, création | **COMPATIBLE**, contrats d'exécution distincts |
| **D8 Résultats/Preuves v0.1** | Un affichage ou un accusé de réception n’est pas une preuve de conformité ni adoption | **COMPATIBLE**, observations à vérifier |
| **D9 Git v0.1** | Identité Studio distincte des droits Git ; accès éventuel au besoin ; dépôt commun sans projet partagé | **COMPATIBLE**, rôles/permissions D1↔D9 à évaluer en R4 |
| **15 CKI v0.2 + matrice (candidats)** | Aucune dépendance CKI sur le sas/portefeuille, aucune relation ne crée projet, GO ou droit | **AUCUNE CONTRADICTION NORMATIVE DIRECTE IDENTIFIÉE**, contenu CKI toujours candidat |

Les qualificatifs ci-dessus concernent **les textes examinés**, pas une compatibilité de code, un test LIVE/REAL, une décision de sortie R2 ou l’adoption du produit. Ne pas recopier ici les règles canoniques des domaines voisins.

### 5.2. Réserves nommées, propriétaire et échéance

| Réserve | État actuel | Propriétaire / jalon | Critère de sortie |
| --- | --- | --- | --- |

| **CRE-01 — Seuil minimal de création** | CONTRAT PROPORTIONNÉ, paramètres exacts UX à déterminer | D2/D1 R3 ; R5–R6 | Création possible sans dossier exhaustif ; refus seulement si information déterminante absente. |

| **CRE-02 — Acte Créer le projet et autorité** | FRONTIÈRE R1/D6 SPÉCIFIÉE | D2/D6 R4–R6 | Acte utilisateur attribué au bon Pilote ; aucune création par conversation ambiguë. |

| **CRE-03 — Rejeu et création non dupliquée** | RÈGLE ÉCRITE, mécanisme non choisi | D2 R4–R6 | Double clic, timeout, retry ou session perdue n’induisent aucun doublon injustifié. |

| **CRE-04 — Continuité du fil sas→projet** | OPTION A VISUELLE VALIDÉE R1 | D2/D3/D4 R3–R6 | Même fil visible ; acquis sélectionnables sans injection exhaustive ; aucune perte d’information déterminante. |

| **CRE-05 — Transfert d’acquis et de décisions** | FRONTIÈRE D4/D6 POSÉE, non prouvée | D2/D4/D6 R4–R6 | Sources/versions/points ouverts conservés ; hypothèses et décisions non confondues. |

| **CRE-06 — Création sans cycle et Git** | FRONTIÈRE D5/D9 VALIDÉE FONCTIONNELLEMENT | D2/D5/D9 R5–R6 | Projet créé sans méthode, cycle, CKI, dépôt, contrat Cursor ni permissions induites. |

| **CRE-07 — Isolement interprojets** | CONTRAT DE PROPRIÉTÉ D1/D6 NON PROUVÉ | D1/D2/D6 R4–R6 | Création attribuée au bon Pilote, sans importer mandats ou confidentialité d’un autre projet. |

| **CRE-08 — État d’échec ou partiel** | RÈGLE FONCTIONNELLE, preuve ouverte | D2 R4–R6 | Aucun faux projet confirmé ; reprise honnête et récupération du sas selon persistance réelle. |

| **CRE-09 — Fidélité UX historique sans reprise technique** | PARCOURS R1 VALIDÉ, composants non adoptés | R3 revue Figma, R4 contrats, R5/R6 | Reproduire la valeur du sas sans recopier un moteur historique ni surcharger de validations. |

**Revue incrémentale :** ces réserves sont rouvertes lors de l’instruction de leur interface propriétaire ; une lacune de R4/R5/R6 ne devient pas une contradiction R2 « résolue » par promesse. Le `KNOWN GAP` de Roadmap Next `main` et l’harmonisation éditoriale CKC→CKI sont suivis dans la consolidation R2/gouvernance sous autorisation adaptée, non modifiés par cette candidate.

## 6. Critères d’acceptation fonctionnelle et trajectoire R3–R6

**R2 :** sas réellement distinct du projet, aide cognitive sans formulaire/CKI obligatoires, aperçu propositionnel, création explicite et vérifiée, projet individuel, absence d’effets Git/cycle induits, fil visuellement continu. **R3 :** surface conversationnelle et aperçu évolutif comparés à la vision Figma fondatrice, marqueur de création, états d’erreur. **R4 :** identité, persistance, atomicité effective là où démontrée, idempotence et récupération après coupure, transfert des références sans seconde mémoire. **R5 :** parcours sas → création → espace projet complet. **R6 :** tests E2E sans Git et sans cycle, sans méthode, double clic, erreur réseau, reprise de conversation, source hostile et isolement entre Pilotes.


**Verdict : `R2 — CRÉATION DE PROJET ET CONTINUITÉ DU SAS — v0.1 VALIDATED SPEC (Morris, 2026-11-02)` ; 26 règles `RG-CRE`, 26 scénarios `PF-CRE`, 9 réserves ; conformité documentaire R1/D3–D9/CKI candidate revue ; Studio Next `N/A — NON IMPLÉMENTÉ`, contenu validé par Morris et publié sur branche R2, sans PR, merge ni ADOPTED.**


---

## 7. Complément post-clôture R2 — documents préparés dans le sas (2026-11-03)

**Statut : contenu validé par Morris le 2026-11-03, publié sur branche candidate.** Il complète la spécification historique v0.1 et ses règles/scénarios approuvés au 2026-11-02, sans modifier la décision de sortie R2 ni affirmer une implémentation Next.

### Règle de gestion additionnelle

- **RG-CRE-027 — Brouillon produit avant création du projet.** Dans le sas, Nora peut produire un document de préparation sans créer de projet. Tant qu'aucun projet n'existe, Studio le rattache à la préparation et applique sa politique réelle de continuité, sans prétendre qu'il est déjà conservé « dans le projet ». Après l'acte explicite de création et confirmation de l'effet, le document peut être rattaché durablement au projet créé avec sa provenance et son fil, sans rupture du parcours ni doublon. *Interfaces : RG-CRE-008/010/017/020 ; D3 DOC-001/002 ; D4 KNOW-016/018.*

### Scénario(s) fonctionnel(s) additionnel(s)

| ID | Domaine | Situation / entrée | Comportement attendu | Règles / références |
| --- | --- | --- | --- | --- |
| **PF-CRE-27** | D2 | Document rédigé dans le sas avant création | Préparation conservée selon l'état du sas ; après création explicite, rattachement et même fil, sans projet fictif en amont | CRE-027, CRE-008/017/020 |

**Frontière :** avant « Créer le projet », le document relève de la préparation du sas, non du patrimoine d'un projet inexistant ; le transfert durable ne suit qu'une création vérifiée (RG-CRE-008/010/017/020).

**R4–R6 :** droits, portée, reprise, version et comportements à concevoir puis prouver ; `N/A — NON IMPLÉMENTÉ`.

## 8. Complément fonctionnel — diagnostic des commandes de création et de continuité (2026-11-05)

**Orientation observabilité transverse validée Morris ; extension fonctionnelle candidate.** D2 conserve la vérité de l'intention, de la commande de création, de l'idempotence et du projet effectivement créé. Les traces corrélées aident à comprendre le parcours mais ne forment pas une seconde commande. Référence : [contrat transverse](../architecture-technique/contrat-observabilite-transverse.md) et [vision R1 §10](../cadrage/vision-produit.md).

- **RG-CRE-028 — Corrélation de la création.** Une même intention de création peut traverser plusieurs requêtes ou retries ; le diagnostic relie intention, tentative, commande et résultat effectivement confirmé, sans confondre identifiant de trace et clé d'idempotence.
- **RG-CRE-029 — Erreur et effet incertain.** Si l'ACK est perdu ou une dépendance échoue pendant la création, D2 distingue projet confirmé, non créé et état inconnu nécessitant réconciliation ; aucun nouveau projet n'est déduit d'une nouvelle trace.
- **RG-CRE-030 — Contexte de la lane.** Les anomalies de création et de reprise doivent pouvoir être rattachées au build/SHA et à l'environnement effectivement servis, sans mélange DEV/RECETTE/STABLE ni révélation interprojet.

**Parcours candidats :** **PF-CRE-28** double clic/retry même intention → une création effective et plusieurs tentatives corrélées ; **PF-CRE-29** commit réussi mais réponse perdue → réconciliation de la commande existante sans doublon ; **PF-CRE-30** connexion DB indisponible et retour API → catégorie technique fidèle, échec/UNKNOWN sans session faussement invalidée. Tests DB/HTTP/BROWSER sur SHA et lane ; aucune nouvelle table de journal des commandes exigée par ce contrat.
