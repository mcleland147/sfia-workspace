# SFIA Studio Next — Spécification fonctionnelle R2
## Réalisation opérationnelle gouvernée

| Métadonnée | Qualification |
| --- | --- |
| Version et date | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02) — interfaces réservées**, 2026-11-02 |
| Domaine propriétaire | **7 — Réalisation opérationnelle gouvernée** (vision R1 §§2.21, 2.26, 2.29, 2.34–2.36) |
| Résultat pour le Pilote | Faire réaliser un travail technique externe sous un contrat intelligible, inspecté et explicitement autorisé, connaître l'état effectivement observable de sa tentative et conserver le contrôle des effets, interruptions et corrections |
| Base Git examinée | `mcleland147/sfia-workspace` — `main@8751775edc314e8fc7f0855104e5000290be9839` ; branche `sfia/next-r2-functional-specs@9343fdf1539c7c7bb72ec19ce60b24114b1fbc1d` |
| Contrats R2 validés confrontés | Nora v0.4 (D3) ; Connaissance v0.1 (D4) ; Trajectoire/Cycles/CKI v0.1 (D5) ; Décisions et gouvernance du Pilote v0.1 (D6) |
| CKI examinés | Corpus CKI Next v0.2 **CANDIDATE**, quinze spécialités autonomes et matrice de cinquante relations informatives ; aucun CKI ne commande l'exécution |
| État produit | **N/A — NON IMPLÉMENTÉ** ; aucun déclenchement, suivi LIVE, interruption Cursor CLI ou preuve REAL Next revendiqués |
| Statut et gate | **VALIDATED SPEC — contenu approuvé par Morris le 2026-11-02 et publié sur branche R2** ; aucun PR, merge, choix R4 ni adoption implicite |

## 1. Résultat utilisateur, capacités et limites

### 1.1. Finalité et parcours de valeur

La réalisation opérationnelle transforme une intention en **intervention technique ou effet externe identifiable**. Nora comprend le besoin, peut investiguer et produire directement ce qui est intellectuel, puis prépare lorsque nécessaire une proposition de travail techniquement exécutable. Le Pilote inspecte ce qu'il autorise ; Studio fait respecter le mandat et rattache à une tentative les états et retours réellement observés ; Cursor constitue l'exécuteur technique initial de référence envisagé. La fin d'une tentative ne certifie ni conformité, ni acceptation, ni adoption.

L'expérience cible est **conversationnelle et Pilot-first** ; un cycle, une mission formalisée, un CKI particulier, un dépôt Git ou une méthode préalable ne sont pas des conditions générales d'exécution. **La nature des effets et les droits applicables**, et non le nom du cycle, commandent les autorisations.

**IN (responsabilité propriétaire D7) :** qualification du besoin d'une réalisation externe ; préparation et conservation du contrat opérationnel et de l'instruction correspondante ; représentation inspectable du travail ; rattachement de l'autorisation du domaine 6 à une version précise du contrat ; préconditions opérationnelles de déclenchement ; contrôle du périmètre confié à l'exécuteur ; identification et suivi d'une tentative ; transmission, observation et réception de retours réellement disponibles ; demandes d'interruption si effectivement supportées ; reprise et incidents sous mandat ; restitution technique factuelle au domaine 8 ; préparation d'un **nouveau** contrat correctif sans lancement automatique.

**OUT :** production cognitive directe de Nora (D3), mémoire et points ouverts (D4), cycle/CKI/méthode (D5), validité du consentement et suspensions humaines (D6), verdict de conformité/qualité probatoire (D8), permissions GitHub, mécanismes de branches/push/merge et identités Git effectives (D9), authentification du Pilote et création native de projet (D1/D2). Toute mutation interne de Studio n'est pas une tentative D7. Pas de moteur d'orchestration multi-exécuteurs, boucle autonome Nora↔Cursor ni promesse d'interruption immédiate.

### 1.2. Contrats d'interface et propriétaires uniques

| Propriétaire | Possède | D7 consomme ou fournit sans dupliquer |
| --- | --- | --- |
| **D1–D2 — Accès / création** | Identité de session et projet réel, création explicite | Projet et Pilote établis ; D7 n'ouvre pas un projet |
| **D3 — Nora** | Compréhension, investigation, proposition, synthèse cognitive et analyse des retours | Nora élabore la substance du contrat ; D7 représente, conserve et transmet le mandat technique ; elle ne lance pas Cursor par raisonnement |
| **D4 — Connaissance** | Sujets, acquis, sources et points ouverts | D7 rattache références et retours, sans créer de second journal métier |
| **D5 — Trajectoire / cycles** | Trajectoire, état du cycle, CKI principal et méthode durable | D7 peut travailler **sans cycle**, ne déclenche pas de transition et n'applique pas de gates CKI |
| **D6 — Décisions et gouvernance** | Autorité de l'acte « Exécuter », restrictions, suspensions et révocations opposables | D7 réclame une décision applicable à l'opération ; n'enregistre pas de décision concurrente |
| **D7 — Réalisation** | Contrat opérationnel, instruction inspectable, tentative, lancement contrôlé, événements techniques reçus et état observable | **Propriétaire de cette spécification** |
| **D8 — Résultats et preuves** | Confrontation des retours et observations au contrat, suffisance probatoire, écarts, conformité et réserves | D7 transmet déclarations/observations avec provenance et limites, sans certifier les résultats |
| **D9 — Intégration Git** | Droits Git effectifs, dépôt, branche, référence et opérations Git, identité et accès de l'exécuteur pour Git | D7 consomme les contrôles et états Git ; « Exécuter » ne permet jamais à lui seul un push/PR/merge |

**Règle d'ownership transversale :** une même information peut apparaître dans la conversation, le contrat, une vue de suivi et une preuve, mais conserve un **propriétaire de son état officiel**. Une présentation du contrat ne constitue ni un second registre d'autorisations, ni une preuve du résultat.

### 1.3. Vocabulaire et informations fonctionnelles minimales

| Concept | Informations suffisantes pour le produit | Ne pas en déduire |
| --- | --- | --- |
| **Demande de réalisation** | Intention, effet externe visé, contexte, provenance, projet et Pilote | Création automatique d'une « Mission » ou d'un cycle |
| **Contrat opérationnel inspectable** | Objectif et résultat, IN/OUT, cible, exclusions, effets attendus, risques, dépendances, droits nécessaires, STOP, critères/éléments de retour, instruction technique exacte consultable dans sa version et sa portée | Architecture de stockage, format SFIA v2.6 ou autorisation implicite |
| **Instruction technique associée** | Contenu effectivement destiné à l'exécuteur dans une version identifiable ; bindings sensibles protégés et écarts significatifs explicables | Exposition de secrets au Pilote, remplacement silencieux du texte inspecté |
| **Autorisation applicable** | Acte D6 du Pilote sur le contrat inspecté, version/cible/projet, validité et restrictions courantes | Droit Git ou capacité technique automatiquement disponible |
| **Tentative** | Identité distincte du contrat, projet/Pilote, contrat autorisé, exécuteur effectif, demande de lancement, accusés, observations/retours, état connu et inconnues | Succès, conformité, preuve LIVE ou droit de relance |
| **Événement / observation** | Source effective, moment ou ordre fiable, état reconnu, limitation de visibilité, rattachement à la tentative | Timeline exhaustive, pourcentage fictif, suivi commande par commande de Nora |
| **Demande d'arrêt / arrêt confirmé** | Instruction humaine opposable D6, demande transmise si supportée, observation effective de l'arrêt et effets déjà produits | Rollback ou interruption garantie par le simple clic |
| **Retour d'exécuteur** | Rapport, sorties, erreurs, références et résultats déclarés réellement reçus, y compris partiels | Conformité vérifiée, acceptation par le Pilote |
| **Contrat correctif** | Nouvelle proposition traçable issue d'écarts identifiés, avec son propre périmètre, version et futur « Exécuter » | Nouvelle tentative autorisée par le mandat précédent |

**Sans décision technique prématurée :** ces informations constituent des exigences observables, pas des tables, classes, API, états persistants définitifs, mécanismes de verrouillage, files de messages ou choix de fournisseur. R4 décidera leur représentation selon les risques et preuves à produire.

### 1.4. État observable de la tentative et honnêteté

D7 doit pouvoir distinguer les situations **préparée, en attente d'autorisation, autorisée, lancement demandé, lancement accepté/observable, activité observée, retour terminal reçu, erreur, interruption demandée, interruption confirmée, état inconnu et effets partiels** lorsque les observations existent. Il s'agit de **qualifications fonctionnelles** susceptibles de se combiner, **pas d'une machine à états adoptée ni d'une obligation d'afficher tous ces libellés**.

Une tentative dont le lancement a été demandé mais non confirmé est **incertaine**, pas nécessairement « jamais lancée ». Un processus arrêté peut avoir déjà produit des mutations. Les statuts déclarés par un exécuteur restent distincts des faits vérifiés par D8.

## 2. Principes de contrat, risques et frontière d'autorisation

**Preparation :** Nora établit le besoin, consulte les sources sous droits et élabore une proposition ; D7 identifie les éléments manquants nécessaires au contrat **uniquement lorsque l'effet l'exige**. D6 confirme la compétence, la portée et la validité de l'autorisation ; D9 confirme les capacités Git lorsque l'opération en implique. Une décision architecturale, un document « approuvé », la création du projet ou l'entrée en cycle ne remplacent pas cet acte.

**Inspection :** le Pilote comprend la conséquence opérationnelle, les exclusions et risques, et peut consulter l'**instruction exacte visée**, sans exposer des secrets. La résolution technique des secrets et paramètres sensibles doit préserver le sens du contrat inspecté ; toute substitution matérielle de la cible, de la portée ou des effets implique une nouvelle inspection/autorisation applicable. La possibilité de masquer un secret ne justifie pas de masquer une action importante.

**Exécution :** après « Exécuter », Studio doit confronter l'acte D6 et l'état des permissions/ressources courantes au contrat autorisé et à l'exécuteur réellement visé ; D7 déclenche seulement si les conditions sont réunies. L'exécuteur peut réaliser les actions **à l'intérieur du mandat** et ses corrections internes autorisées sans demandes humaines à chaque sous-étape. Une nouvelle opération ou correction demandant un nouveau lancement requiert un **nouveau contrat et un nouvel acte**.

**Retour :** D7 recueille les événements, résultats et références disponibles, y compris échec ou absence de réponse, puis les transmet fidèlement à D8 et à Nora. D8 conclut sur les preuves et la conformité ; D6 conserve l'acceptation du Pilote ; D9 constate l'état Git. Aucune de ces responsabilités n'est absorbée par un CKI Delivery/DevOps/QA, par Nora, ni par la seule fin du processus Cursor.

## 3. Règles de gestion validées du domaine 7 (interfaces réservées)

### 3.A — Qualification du travail et frontières d’activité

- **RG-REAL-001 — Travail cognitif sans délégation artificielle.** Nora réalise directement l’analyse, la rédaction ou la conception intellectuelle dans ses capacités et droits ; D7 n’instancie une réalisation externe que pour un effet externe réellement demandé ou nécessaire. **Interfaces :** R1 §§2.2/2.26 ; Nora RG-CONV-005.

- **RG-REAL-002 — Cycle et CKI non préalables.** Une demande de réalisation peut exister sans cycle actif, méthode imposée ou CKI chargé. Une spécialité CKI enrichit l’analyse mais ne décide ni lancement, ni type d’effet. **Interfaces :** R1 §§2.16/2.26/2.34 ; D5 RG-TRJ-013 ; D6 RG-GOV-034.

- **RG-REAL-003 — Portée d’intervention identifiable.** Avant proposition d’exécution, D7 doit pouvoir situer Pilote, projet, cible, objectif, effets, exclusions, dépendances et conditions essentielles ; les informations non déterminantes n’imposent pas un questionnaire de remplissage. **Interfaces :** R1 §2.26 ; D6 RG-GOV-025 ; D3 RG-CONV-003.

- **RG-REAL-004 — Effets externes différenciés.** Créer un projet Studio, ouvrir un cycle ou conserver une décision sont des mutations natives des domaines 2/5/6 : D7 ne les requalifie pas en exécutions Cursor. Une mutation externe reste soumise aux règles applicables de son propriétaire. **Interfaces :** R1 §2.26 ; D5 RG-TRJ-009 ; D6 RG-GOV-030.

- **RG-REAL-005 — Capacité d’exécution non présumée.** D7 ne présente comme lançable une opération que si une voie d’exécution pertinente existe et que les capacités réellement disponibles peuvent être vérifiées ; une préférence Cursor CLI n’est pas une capacité LIVE démontrée. **Interfaces :** R1 §§2.23/2.26 ; D3 RG-AUTH-003.

- **RG-REAL-006 — Proportionnalité et continuité du projet.** La qualification du contrat s’adapte à l’impact réel et réutilise les acquis fiables du projet ; elle n’exige pas un nouveau dossier exhaustif ou la reconstitution complète de chaque conversation. **Interfaces :** R1 §§2.13/2.26 ; D4 RG-KNOW-011 ; D3 RG-CTX-002.


### 3.B — Contrat inspectable et instruction stable

- **RG-REAL-007 — Contrat compréhensible et borné.** Le contrat expose finalité, effets visés, IN/OUT, cible, exclusions, risques, dépendances, préconditions, STOP, résultats attendus et éléments de restitution adéquats ; les rubriques sont proportionnées au besoin. **Interfaces :** R1 §2.21 ; D6 RG-GOV-024.

- **RG-REAL-008 — Instruction technique exacte liée au contrat.** L’instruction destinée à l’exécuteur est consultable dans une version identifiable, rattachée au périmètre intelligible ; l’UX R3 peut choisir un détail repliable, sans substituer une paraphrase à l’instruction réellement préparée. **Interfaces :** R1 §§2.21/2.34 ; D6 RG-GOV-024..026.

- **RG-REAL-009 — Cibles et mutations déterminantes explicites.** Les ressources, fichiers, environnements, effets et permissions nécessaires à l’opération sont suffisamment délimités pour que le Pilote n’autorise pas une intervention plus large que celle qu’il a inspectée. **Interfaces :** R1 §2.34 ; D6 RG-GOV-025 ; D9 futur.

- **RG-REAL-010 — Secret et fidélité de l’instruction.** La consultation de l’instruction ne divulgue pas les secrets ; tout paramètre sensible injecté au lancement reste limité et contrôlé. Une substitution matérielle d’action, de cible ou de risque ne peut être cachée derrière une référence opaque. **Interfaces :** R1 §2.21 ; R3/R4 à qualifier.

- **RG-REAL-011 — Contrat stable pendant l’autorisation.** Lorsque instruction, portée, risque ou cible changent matériellement après inspection, la version antérieure ne sert plus au nouveau lancement. D7 présente la version révisée et requiert l’acte applicable de D6, sans réutilisation silencieuse d’un ancien « Exécuter ». **Interfaces :** D6 RG-GOV-026 ; R1 §2.34.

- **RG-REAL-012 — Préparation ne vaut pas lancement.** Une proposition, un contrat préparé, une revue de code ou une décision technique n’entraînent pas l’exécution. La possibilité de prévisualiser le contrat n’active aucun privilège ni tentative. **Interfaces :** D6 RG-GOV-023/024 ; R1 §2.21.


### 3.C — Autorisation, lancement et identité de tentative

- **RG-REAL-013 — Acte « Exécuter » applicable.** D7 ne demande le lancement qu’après l’acte explicite du Pilote sur le contrat inspecté et après validation par D6 ; un GO de cycle ou un accord sur l’architecture n’est pas ce mandat. **Interfaces :** D6 RG-GOV-024/029 ; D5 RG-TRJ-009.

- **RG-REAL-014 — Vérifications juste avant effet.** Les restrictions, suspensions, droits, version du contrat, cible et capacité réelle sont recontrôlés au moment pertinent ; la validité du consentement D6 et l’accès effectif D9 sont deux conditions distinctes. **Interfaces :** D6 RG-GOV-025..027 ; R1 §§2.23/2.34.

- **RG-REAL-015 — Tentative individualisée et traçable.** Chaque demande réellement déclenchée est rattachée à un Pilote, un projet, un contrat autorisé identifié, une cible, un exécuteur effectif et une tentative distincte ; aucune tentative n’est déduite de la seule création du contrat. **Interfaces :** R1 §2.26 ; D6 RG-GOV-028.

- **RG-REAL-016 — Déclenchement sans expansion de mandat.** L’exécuteur ne reçoit que les travaux/limites autorisés et les moyens nécessaires effectivement disponibles ; D7 n’ajoute ni nouvelle cible, ni étape protégée, ni branche ou dépôt non inspectés par commodité. **Interfaces :** R1 §§2.21/2.36 ; D6 RG-GOV-007/025.

- **RG-REAL-017 — Rejeu, clic double et réponse perdue.** Une même autorisation ou commande rejouée ne doit pas induire un second lancement injustifié. Si la réception du lancement est incertaine, D7 établit l’état de la tentative avant de réessayer ; il ne déduit pas du silence qu’aucun effet n’a eu lieu. **Interfaces :** D6 RG-GOV-028 ; R1 §2.34.

- **RG-REAL-018 — Isolation entre Pilotes et environnements.** Une tentative n’hérite pas de la session Cursor ni des jetons GitHub d’un autre Pilote ou d’un autre projet ; faute de rattachement fiable et de droits vérifiés, le lancement concerné est refusé ou suspendu. **Interfaces :** R1 §§2.23/2.24/2.36 ; D6 RG-GOV-014.


### 3.D — Observation de l’exécuteur et retour technique

- **RG-REAL-019 — Événements réellement disponibles.** D7 expose seulement les événements/stades reçus de l’intégration effective avec provenance, portée et actualité adaptées, sans inventer activités, pourcentages ni télémétrie manquante. **Interfaces :** R1 §2.21 ; D3 RG-CONV-006.

- **RG-REAL-020 — Lancement demandé distinct du lancement constaté.** Une commande envoyée, un accusé technique et une activité observée sont des situations différentes ; si l’accusé manque, l’état reste inconnu ou à vérifier, sans proclamer un échec ou un succès automatique. **Interfaces :** R1 §2.21 ; D6 RG-GOV-028.

- **RG-REAL-021 — État partiel et inconnu explicites.** D7 conserve et restitue ce qu’il sait des interruptions, erreurs, états non terminaux, effets partiels et déconnexions ; il n’efface pas les observations contraires ou incertaines. **Interfaces :** R1 §§2.21/2.35 ; D4 RG-KNOW-010/015.

- **RG-REAL-022 — Rapport de l’exécuteur non probatoire.** D7 reçoit et rattache le rapport Cursor et les éléments réellement retournés, en les qualifiant comme déclarations ou observations. D8 possède l’évaluation indépendante des preuves et de la conformité. **Interfaces :** R1 §§2.21/2.35 ; D6 RG-GOV-031/032.

- **RG-REAL-023 — Pas de supervision cognitive continue.** Nora n’est pas supposée surveiller chaque commande ou événement de Cursor en temps réel ; D7 assure la restitution technique disponible et Nora intervient cognitivement sur les retours utiles. **Interfaces :** R1 §§2.21/2.26 ; D3 RG-CONV-002/006.

- **RG-REAL-024 — Restitution sans fausse issue terminale.** D7 n’annonce pas qu’un travail est achevé sur la base d’une interface muette, d’un timeout ou d’une fin de flux ambiguë ; une issue rapportée ne vaut pas certification D8 ni acceptation D6. **Interfaces :** R1 §§2.21/2.35 ; D6 RG-GOV-031.


### 3.E — Arrêt, suspension, changements et reprise

- **RG-REAL-025 — Suspension humaine opposable.** D7 applique la restriction de D6 aux nouveaux effets et aux opérations encore contrôlables dans sa portée ; il n’interprète pas lui-même une levée ou révocation comme acquise. **Interfaces :** D6 RG-GOV-017..022 ; R1 §2.6.

- **RG-REAL-026 — Arrêt demandé vs confirmé.** Si une fonction d’interruption est réellement disponible, D7 distingue demande transmise, arrêt observé, état indéterminé et effets déjà produits. Si elle n’existe pas ou n’est pas fiable, D7 ne la promet pas ; arrêter n’implique pas rollback. **Interfaces :** R1 §2.21 ; D6 RG-GOV-019/020.

- **RG-REAL-027 — Pause technique et levée humaine distinctes.** Une reprise après incident technique exige la vérification du contrat, des droits, de l’état et des effets déjà produits ; elle ne peut jamais lever une suspension humaine encore applicable. **Interfaces :** D6 RG-GOV-017..019 ; D3 RG-AUTH-005.

- **RG-REAL-028 — Changement matériel en cours d’opération.** Une nouvelle exigence ou restriction entraîne qualification des dépendances et blocage des effets affectés/inconnus ; seules les opérations prouvées indépendantes peuvent poursuivre sous mandat inchangé. **Interfaces :** R1 §2.4 ; D6 RG-GOV-013/021.

- **RG-REAL-029 — Reprise après incident sans duplication.** Après timeout, perte de session ou redémarrage, D7 récupère l’état disponible et les références de tentative avant tout nouveau déclenchement ; il qualifie les effets possibles et n’invente ni réussite ni rollback. **Interfaces :** R1 §§2.21/2.34 ; D6 RG-GOV-022/028.

- **RG-REAL-030 — Conflit d’accès et de ressource externe.** Si une branche/base, un droit ou la session de l’exécuteur devient invalide, D7 arrête les nouveaux effets concernés, consomme l’état effectif fourni par D9 et propose une requalification, sans écrasement silencieux. **Interfaces :** R1 §§2.23/2.36 ; D6 RG-GOV-027 ; D9 futur.


### 3.F — Corrections, retour et continuité

- **RG-REAL-031 — Retour technique exploitable et proportionné.** D7 rattache au contrat/tentative les messages, erreurs, artefacts et références reçus et fournit une synthèse technique fidèle à Nora et D8 ; la sélection des preuves et le verdict appartiennent à D8. **Interfaces :** R1 §§2.21/2.35 ; D4 RG-KNOW-010.

- **RG-REAL-032 — Correction interne vs nouvelle exécution.** Dans une tentative déjà autorisée, Cursor peut rectifier son propre travail dans la portée du contrat et ses STOP. Une fois une nouvelle tentative demandée, un **nouveau contrat et « Exécuter »** sont nécessaires, même si la correction reste proche du périmètre initial. **Interfaces :** R1 §2.21 ; D6 RG-GOV-033.

- **RG-REAL-033 — Préparation proactive mais non exécution corrective.** Après lecture du retour, Nora peut spontanément préparer et présenter un contrat correctif traçable ; D7 n’enchaîne jamais automatiquement le nouveau lancement ni ne crée une boucle autonome de corrections. **Interfaces :** R1 §2.21 ; D6 RG-GOV-033.

- **RG-REAL-034 — Travaux incomplets ou rapport absent.** Une tentative incomplète, un retour absent ou une preuve inaccessible ne sont pas assimilés à une conformité ; D7 transmet la limite et les éléments disponibles, D8 qualifie les écarts. **Interfaces :** R1 §2.35 ; D6 RG-GOV-032.

- **RG-REAL-035 — Continuité sans registre concurrent.** D7 conserve la référence durable utile de l’intervention, des tentatives et retours effectifs ; D4 garde les sujets/points ouverts, D6 les décisions et D8 les résultats/prouves, sans duplication autorisante. **Interfaces :** R1 §§2.8/2.35 ; D4 RG-KNOW-011/015.

- **RG-REAL-036 — Aucun effet d’adoption ou de merge induit.** La fin d’une tentative, un résultat de tests allégué, une analyse Nora ou un CKI Delivery/DevOps ne créent ni merge, ni acceptation, ni adoption produit. Toute suite protégée suit ses obligations propriétaires. **Interfaces :** R1 §§2.27/2.28/2.35 ; D6 RG-GOV-031/036.

## 4. Scénarios fonctionnels de référence et couverture

**Lecture :** chaque cas décrit une situation observable, le résultat attendu et les règles D7 propres testées. Il ne prescrit pas de fixture, protocole ou architecture ; un scénario réel ne pourra être déclaré prouvé qu'après observation au niveau correspondant.

| Scénario | Situation | Comportement attendu | Règles du domaine 7 |
| --- | --- | --- | --- |
| **PF-REAL-01** | Demande de simple analyse technique | Nora répond ou produit directement ; aucun contrat, cycle ou lancement Cursor | `RG-REAL-001`, `RG-REAL-002` |
| **PF-REAL-02** | Projet sans cycle, intervention externe justifiée | Contrat D7 préparé ; pas d’ouverture de cycle ni CKI requis | `RG-REAL-002`, `RG-REAL-003`, `RG-REAL-007` |
| **PF-REAL-03** | Projet créé puis demande de code | Création interne D2 et exécution externe D7 restent deux actes distincts | `RG-REAL-004`, `RG-REAL-013` |
| **PF-REAL-04** | Aucune capacité Cursor LIVE vérifiable | Pas d’action présentée comme exécutable ; limite exposée, cognition poursuivie | `RG-REAL-005`, `RG-REAL-006` |
| **PF-REAL-05** | Contrat clair et borné, prêt à inspecter | Résumé Pilot-first et instruction technique de la version visée consultables | `RG-REAL-007`, `RG-REAL-008`, `RG-REAL-009` |
| **PF-REAL-06** | Secret dans une instruction | Secret protégé, effets essentiels inspectables ; pas de dévoilement ni substitution | `RG-REAL-008`, `RG-REAL-010` |
| **PF-REAL-07** | Dossier incomplet mais opération peu risquée | Clarification seulement sur les paramètres nécessaires, pas de questionnaire fixe | `RG-REAL-003`, `RG-REAL-006`, `RG-REAL-007` |
| **PF-REAL-08** | Architecture validée, sans clic Exécuter | Aucun lancement ni autorisation technique déduite | `RG-REAL-012`, `RG-REAL-013` |
| **PF-REAL-09** | Pilote inspecte et clique Exécuter | Acte D6 relié à la bonne version ; contrôles D7/D9 avant effet | `RG-REAL-008`, `RG-REAL-013`, `RG-REAL-014`, `RG-REAL-015` |
| **PF-REAL-10** | Instruction ou cible modifiée après inspection | Nouvelle version et inspection ; ancien mandat non réutilisé pour la mutation | `RG-REAL-009`, `RG-REAL-011`, `RG-REAL-014` |
| **PF-REAL-11** | Permissions Git lecture seule au moment du clic | Lancement d’écriture refusé ; lecture reste possible sous ses droits | `RG-REAL-014`, `RG-REAL-016`, `RG-REAL-030` |
| **PF-REAL-12** | Déclenchement validé vers Cursor | Tentative attribuée au bon Pilote/projet/contrat/exécuteur, sans expansion | `RG-REAL-015`, `RG-REAL-016` |
| **PF-REAL-13** | Double clic Exécuter | Une seule tentative autorisée/lancée, vérification de l’état avant éventuel retry | `RG-REAL-017`, `RG-REAL-020` |
| **PF-REAL-14** | Réponse réseau perdue après dispatch | État inconnu déclaré ; pas de second lancement à l’aveugle | `RG-REAL-020`, `RG-REAL-021`, `RG-REAL-022` |
| **PF-REAL-15** | Exécuteur de l’autre Pilote détecté | STOP du lancement, aucune session Git/Cursor partagée tacitement | `RG-REAL-018`, `RG-REAL-030` |
| **PF-REAL-16** | Activité Cursor connue, télémétrie partielle | Seulement événements réellement reçus, pas de pourcentage fictif | `RG-REAL-019`, `RG-REAL-023` |
| **PF-REAL-17** | Cursor annonce terminé et tests réussis | Rapport conservé comme déclaration ; D8 vérifie les preuves | `RG-REAL-022`, `RG-REAL-023`, `RG-REAL-024` |
| **PF-REAL-18** | Exécuteur ne renvoie pas d’état terminal | Tentative non proclamée terminée ni conforme, état incertain explicite | `RG-REAL-021`, `RG-REAL-022`, `RG-REAL-024` |
| **PF-REAL-19** | Le Pilote suspend durablement les travaux | Restriction D6 appliquée et maintenue ; demande STOP ne prouve pas arrêt | `RG-REAL-025`, `RG-REAL-026` |
| **PF-REAL-20** | Capacité d’interruption indisponible | Aucune promesse de STOP instantané ni de rollback ; effets possibles signalés | `RG-REAL-026`, `RG-REAL-028` |
| **PF-REAL-21** | Arrêt technique confirmé après mutations | Arrêt de la tentative distingué des effets déjà réalisés | `RG-REAL-026`, `RG-REAL-027` |
| **PF-REAL-22** | Incident technique puis reprise, suspension humaine active | Reprise interdite jusqu’à levée humaine applicable et recontrôles | `RG-REAL-025`, `RG-REAL-027`, `RG-REAL-029` |
| **PF-REAL-23** | Exigence nouvelle affectant un sous-ensemble | Effets incertains/impactés suspendus ; indépendants poursuivables si établis | `RG-REAL-028`, `RG-REAL-030` |
| **PF-REAL-24** | Branche commune avance entre contrat et effet | Base et permissions requalifiées avec D9, pas d’écrasement silencieux | `RG-REAL-014`, `RG-REAL-030` |
| **PF-REAL-25** | Reprise après crash de Studio | Réconcilier la tentative et les effets connus avant relance | `RG-REAL-020`, `RG-REAL-029`, `RG-REAL-035` |
| **PF-REAL-26** | Rapport Cursor manquant ou partiel | Retours réellement reçus transmis à D8 ; pas de conformité inventée | `RG-REAL-022`, `RG-REAL-031`, `RG-REAL-034` |
| **PF-REAL-27** | Correction interne permise pendant la même tentative | Cursor peut rectifier dans les limites sans nouveau clic rituel | `RG-REAL-016`, `RG-REAL-032` |
| **PF-REAL-28** | Nora prépare un correctif après fin d’exécution | Contrat correctif prêt à inspection ; nouvelle exécution exige nouveau Exécuter | `RG-REAL-032`, `RG-REAL-033` |
| **PF-REAL-29** | CKI QA/DevOps prétend imposer une étape ou un gate | Guidance non autorisante ; obligation vérifiée auprès du propriétaire réel | `RG-REAL-002`, `RG-REAL-036` |
| **PF-REAL-30** | Travail Git réalisé et merge proposé | État technique/refs transmis, aucune acceptation/merge/ADOPTED déduit | `RG-REAL-031`, `RG-REAL-035`, `RG-REAL-036` |

**Contrôle de couverture documentaire :** les 36 règles D7 apparaissent au moins une fois parmi les 30 cas ; leur existence en Markdown ne constitue ni suite automatisée ni preuve comportementale. Les cas PF-REAL-09..15 et 19..25 méritent priorité en qualification, car ils traversent des frontières d’autorité et d’effets.

## 5. Revue croisée de non-régression et interfaces propriétaires

### 5.1. Confrontation aux sources R1, R2 et au corpus CKI Next

| Source et règles | Frontière testée | Verdict documenté / suite |
| --- | --- | --- |
| **Vision R1 §§2.21, 2.26, 2.34** | Exécution seulement après « Exécuter » sur contrat inspecté ; aucune mission/cycle préalable ; Cursor initial envisagé | **COMPATIBLE** : aucun moteur historique, état LIVE ou template runtime SFIA v2.6 introduit |
| **Vision R1 §§2.23–2.24, 2.36** | Projet personnel, Git partagé, identité Studio vs accès Git effectif de l’exécuteur, concurrence | **COMPATIBLE SOUS INTERFACE D9/D1** : D7 ne certifie pas les droits de Git ni l’isolation technique ; D9/D1 à spécifier |
| **Nora v0.4 `RG-CONV-002..006`, `RG-AUTH-001..005`, `RG-APP-001..008`** | Préparation cognitive autonome vs effets techniques gouvernés ; STOP et contextes fiables | **COMPATIBLE** : Nora élabore les instructions/propositions, D7 possède leur exécution et observation ; D6 l’autorité |
| **Connaissance v0.1 `RG-KNOW-001..015`** | Référence des travaux et reprises sans second journal des décisions ou de preuves | **COMPATIBLE** : tentative et retours D7 ne sont ni registre de connaissance D4 ni verdict D8 |
| **Trajectoire/CKI v0.1 `RG-TRJ-008..029`, `RG-TRJ-037..040`** | Exécution sans cycle ; CKI principal n’est pas un mandat ; maturité ≠ gate | **COMPATIBLE** : aucune dépendance abstraite entre CKI, cycle ou réalisation ; aucune transition implicite |
| **Gouvernance v0.1 `RG-GOV-017..036`** | Suspension/STOP, version du contrat inspecté, contrôle d’actualité, double clic, correction | **COMPATIBLE AU NIVEAU DOCUMENTAIRE** : D6 statue sur la validité, D7 tient le contrat et l’état technique ; liens D6-02/03 requalifiés ci-dessous |
| **CKI Next v0.2 — quinze spécialités et matrice de 50 liens** | Delivery, DevOps, QA, PR readiness, Release, Sécurité : techniques utiles sans autorité | **COMPATIBLE SOUS FRONTIÈRE** : aucun CKI ne sélectionne un exécuteur, n’impose un gate, ne lance une tentative ni n’ordonne une PR ; corpus reste **CANDIDATE** |
| **D8 Résultats et preuves** | Rapport vs preuve, conformité, risque et acceptation | **NON ÉVALUÉ** contre sa future spec ; D7 fournit des observations, D8 évalue leur force |
| **D9 Intégration Git** | Autorisations Git, dépôts, branches, écriture/merge, identité d’exécuteur | **NON ÉVALUÉ** contre sa future spec ; D7 refuse l’effet non qualifié plutôt que dupliquer D9 |
| **D1–D2 Accès / création** | Identité de Pilote fiable et acte « Créer le projet » | **NON ÉVALUÉ** contre futures specs ; D7 n’authentifie pas et ne crée pas de projet |

### 5.2. Réserves, propriétaire, échéance et critère de résolution

| ID | Qualification au terme de cette rédaction | Responsable / jalon | Critère de sortie attendu |
| --- | --- | --- | --- |
| **REAL-01 — D6-02 / Suspension vs arrêt réel** | **FRONTIÈRE FONCTIONNELLE SPÉCIFIÉE** : demande, arrêt observé et effets produits séparés ; interruptibilité non prouvée | D7/D6 R2 ; R4 conception ; R5/R6 REAL | Démontrer capacités d’arrêt effectivement disponibles, reprise sûre et interdiction opposable après redémarrage |
| **REAL-02 — D6-03 / Contrat inspecté et Exécuter** | **FRONTIÈRE FONCTIONNELLE SPÉCIFIÉE** : version/cible/effets et instruction liée, requalification des changements | D7/D6/D9 R2 ; R3 inspection ; R4 identité/version ; R5/R6 | Contrat réellement inspecté identique au lancement autorisé, hors paramètres sensibles maîtrisés ; tests de changement matériel et double clic |
| **REAL-03 — Identité d’exécuteur et isolation multi-Pilotes** | **NON PROUVÉE** : session Cursor CLI/serveur et Git distincts de l'identité Studio | D1/D9 R2, R4 ; R5/R6 REAL | Pas de session/jeton partagé ni intervention sous mauvaise identité ; refus effectif si identité incertaine |
| **REAL-04 — Rejeu, réponse perdue, crash et effets partiels** | **CONTRAT R2 CANDIDAT** sans choix d’idempotence ou de stockage | D7/D9 R4 ; R5/R6 | Même autorisation sans second lancement indu ; réconciliation après panne avec observations et effets réels |
| **REAL-05 — Contrat/version et secrets** | **INTERFACE UX/TECH À QUALIFIER** : instruction inspectable et secrets protégés, sans action cachée | R3 UX, R4 sécurité/intégration ; R5/R6 | Inspection significative, aucune fuite de secret, substitution matérielle détectée et revalidation |
| **REAL-06 — Rapport exécuteur vs vérification indépendante** | **INTERFACE D8 NON ÉVALUÉE** : D7 rapporte, D8 qualifie | D8 durant R2 ; R5/R6 | Rapports, observations et preuves de conformité non confondus ; absence de faux verdict |
| **REAL-07 — Git partagé et conflits de branche** | **INTERFACE D9 NON ÉVALUÉE** : D7 n’autorise pas branch/push/merge seul | D9 durant R2, R4 ; R5/R6 | Refus d’écriture sans droits, détection base obsolète, aucune intervention/merge implicite |
| **REAL-08 — Réalisation native vs opération externe** | **FRONTIÈRE R1 REPRISE** : D7 n’exécute pas les changements internes D2/D5/D6 | D2/D5/D6 en revue R2 transversale, R4 | Aucun deuxième moteur de gouvernance/états de cycle ni délégation Cursor gratuite |
| **REAL-09 — Choix d’intégration Cursor et télémétrie** | **HYPOTHÈSE TECHNIQUE NON ADOPTÉE** : Cursor initial, CLI candidat ; pas de LIVE promis | R4 comparaison et contrats ; R5/R6 REAL | Exécuteur choisi avec droits réels, disponibilité testée, limites de suivi et arrêt explicitement observées |
| **REAL-10 — CKI spécialisés et effets réels** | **AUCUNE CONTRADICTION NORMATIVE IDENTIFIÉE** avec CKI v0.2 candidat ; conseil non opposable | Consolidation R2 ; R5/R6 tests cognitifs/effets | Aucun passage CKI ou lien méthodologique ne crée autorisation, gate, tentative ni interdiction non sourcée |

**Résolution incrémentale :** les interfaces D6-02 et D6-03 sont désormais **définies au niveau R2** mais ne sont **pas démontrées ni closes techniquement**. Les futures specs D8, D9 et D1/D2 réouvriront les réserves qui leur appartiennent ; aucune validation globale R2 ne peut présumer leur compatibilité avant examen. La Roadmap Next `main` reste un **KNOWN GAP documentaire** hors de ce mandat ; une correction normative exige GO Morris D2.

### 5.3. Contradictions écartées, risques non clos

- **Aucun conflit direct observé** entre gouvernance D6 et exécution D7 : D6 **valide l’acte humain**, D7 **prépare/consomme le contrat et suit la tentative**, D9 **constate les droits Git**, D8 **qualifie les résultats**. Le partage des données n’est pas une duplication d’autorité.
- **Aucune dépendance abstraite liée aux CKI** : le CKI Delivery ne crée pas de besoin d’ouvrir des cycles DevOps/QA/PR readiness ; Nora peut mobiliser leurs compétences générales, la matrice n’est ni routeur ni liste de permissions.
- **Ambiguïté à surveiller :** « Nora prépare le contrat » (contenu cognitif D3) et « D7 possède le contrat » (identité/portée/inspection/tentative) sont compatibles **si** R4 évite deux contrats concurrents. Un seul contrat inspectable gouverne un lancement ; pas d’état dupliqué.
- **Risque à challenger en R4 :** l’instruction « exacte » inspectée face à la résolution de paramètres sensibles. L’intégration ne doit pas masquer au Pilote une mutation de sens sous prétexte de secret.
- **Gaps non clos :** disponibilité LIVE de l’exécuteur, permission Git en temps réel, arrêt vérifiable, réconciliation après panne, isolation multi-Pilotes, conformité probatoire D8. Sans ces preuves, **NON IMPLÉMENTÉ / NON PROUVÉ**.

## 6. Transfert R3–R6 et décision de validation

| Étape | Résultat/contrat attendu ; critère de sortie |
| --- | --- |
| **R2 — suite** | D7 validé par Morris et publié sur branche R2 ; rédiger D8 puis D9 et confronter les règles et écarts `REAL-*` aux domaines propriétaires. D1/D2 à traiter avant sortie R2 si leurs contrats conditionnent la cohérence E2E. |
| **R3 — UX** | Inspection Pilot-first avec instruction exacte consultable, versions et autorisations sans clic redondant ; représentation de l’état technique réel, STOP demandé vs confirmé, correction préparée vs lancée. |
| **R4 — Architecture** | Unicité de contrat, identité/version, tentative, contrôle des effets, isolation multi-Pilotes, intégration exécuteur, sécurité des secrets, droits Git, reprise/idempotence, limites de télémétrie. Aucun moteur concurrent par inertie. |
| **R5 — Construction** | Lot end-to-end : intention → contrat → inspection → Exécuter → tentative → retour → confrontation des preuves D8 → proposition corrective ; documentation et tests synchronisés dans le même lot. |
| **R6 — Qualification** | Scénarios réels/autorisés : autorisation, double clic, panne, suspension, accès révoqué, effets partiels, Git partagé, rapport contradictoire, absence de suivis LIVE ; ne pas appeler `BEHAVIOR PROVEN` ce qui n’est que déterministe. |

**Critères fonctionnels de revue :** aucune exécution sans autorité D6 et capacités réelles ; correspondance du contrat inspecté et de la tentative ; STOP/reprise sans faux état ; aucune correction automatique ; aucun CKI converti en permission ; résultats transmis sans faux verdict ; propriétaires D8/D9 respectés. Les inconnues techniques et interfaces non examinables restent des réserves et non des contradictions « résolues ».

**Verdict documentaire : `DOMAINE 7 — RÉALISATION OPÉRATIONNELLE GOUVERNÉE — v0.1 VALIDATED SPEC (Morris, 2026-11-02)` ; 36 règles `RG-REAL-001..036`, 30 scénarios `PF-REAL-01..30`, revue R1 / Nora / Connaissance / Trajectoire-CKI / Gouvernance et corpus CKI v0.2 ; interfaces D8/D9/D1–2 `NON ÉVALUÉES` contre leurs futures specs ; Next `N/A — NON IMPLÉMENTÉ`.**


---

## 7. Complément post-clôture — couverture UX de l'inspection du contrat (2026-11-03)

**Statut : complément de couverture validé par Morris (2026-11-03), sur branche candidate uniquement.** Ce complément n'ajoute aucune nouvelle règle au domaine ; il précise la vérification d'un scénario d'Inspection transverse sans modifier la clôture historique R2.

| ID | Domaine | Situation / entrée | Comportement attendu | Règles / références |
| --- | --- | --- | --- | --- |
| **PF-REAL-31** | D7 | Un contrat d'exécution est ouvert pour lecture | Version/instruction exactes consultables ; ouvrir/fermer ne déclenche aucune tentative | REAL-007/011/012, UX-006 |

**Règles D7 inchangées :** le contrat, sa version et son instruction restent propriété D7 ; l'ouverture ou fermeture de l'Inspection ne lance rien. `RG-REAL-007/011/012/022/024` demeurent applicables ; l'acte « Exécuter » reste distinct et gouverné par D6.

**R5–R6 :** cas documentaire à exécuter ultérieurement, sans prétendre que la fonctionnalité existe déjà (`N/A — NON IMPLÉMENTÉ`).

## 8. Complément fonctionnel validé — contrat d'information et instruction Cursor (validation Morris du 2026-11-03)

**Statut : VALIDATED CONTENT BY MORRIS — 2026-11-03.** Complément ciblé approuvé après revue R1/R2/C, ajouté sur la version de `main@139c706e8b3d` sans révoquer les règles et scénarios antérieurs. Les identifiants de travail du présent complément ne créent pas un second corpus RG/PF canonique. **R4 :** conception et invariants ; **R5–R6 :** construction et preuves à produire ; Next **N/A — NON IMPLÉMENTÉ**. Aucun PR, merge, adoption ou clôture R3 autorisés par cette validation.

### 8.1. Objet et résultat utilisateur

Avant de déléguer un effet à Cursor, le Pilote peut comprendre et inspecter un engagement opérationnel complet : **ce que Cursor fera, sur quoi, avec quel pouvoir, avec quels risques/STOP, quelles vérifications et quels liens de preuve, sous quelle version**. La forme métier n'est pas un résumé approximatif de l'instruction réelle. D7 conserve **un contrat opérationnel unique** dont Nora produit une projection métier et dont l'instruction technique conserve les engagements ; D6 autorise, D9 constate les droits Git applicables, D8 examine ensuite les résultats.

### 8.2. Contrat d'information — six volets, valeurs et applicabilité

**Modalités :** *Requis si effet externe*, *Conditionnel si concerné*, *Informateur/optionnel*, *Sans objet explicable*, *Inconnu déterminant bloquant*. « Requis » désigne la disponibilité fonctionnelle au moment d'une autorisation envisageable, non un formulaire imposé au Pilote. La provenance/portée et la fraîcheur sont nécessaires lorsque l'assertion conditionne le lancement.

| Volet | Données à pouvoir représenter | Condition et propriétaire | Comportement si absent / incompatible |
| --- | --- | --- | --- |
| **1. Mission et résultats** | Intention et justification, objectif, action(s), livrable(s) / état(s) attendus, exigences de contenu et critères métier | Requis pour un effet ; Nora prépare, D7 conserve | Clarification ciblée si objectif/effet indéterminé ; pas de mission ou résultat inventé |
| **2. Périmètre et effets** | Projet/Pilote, cibles, ressources, IN et OUT, nature créer/lire/modifier/supprimer, type d'effet, diffusion/publication éventuelle, dépendances et contraintes | Cibles/effets/IN/OUT requis ; Git seulement s'il existe ; D9 pour ref/permissions Git | Cible ou effet nouveau → réinspection ; pas de scope implicite, suppression ou merge déduit |
| **3. Exécuteur, capacités et autorité** | Exécutant effectivement visé, capacité demandée/disponible, moyens et droits nécessaires, autorité humaine D6, restriction/suspension et état de permission | Requis pour autoriser ; disponibilité contrôlée au moment de l'effet | Exécuteur absent/mauvaise identité/droit absent → pas de départ ; pas de faux statut « lançable » |
| **4. Limites, STOP et réversibilité** | Contraintes et interdictions, conditions d'arrêt, effets partiels possibles, degré/réalité de réversibilité, retour compensatoire si connu, effets durables/irréversibles, action si arrêt impossible | STOP/restrictions requis ; réversibilité qualifiée selon nature des effets | Une réversibilité inconnue ou un risque irréversible matériel non expliqué nécessite requalification ; STOP demandé ≠ STOP confirmé |
| **5. Validation, preuves et sources** | Critères applicables, plan de contrôle proportionné, sorties/preuves exigées, traces de tests, exigences de rapport, références et sources réellement lues | Critères/preuves proportionnés requis ; sources conditionnelles ; D8 évalue après | Aucune conformité déclarée par anticipation ; sources inexistantes indiquées comme telles |
| **6. Identité et intégrité** | Identité durable du contrat, version inspectée, instruction de même version, périmètre/projet, état du mandat, cible effective, correspondance vérifiable avant effet, tentative distincte ensuite | Requis à la frontière d'autorisation ; mécanisme technique à choisir R4 | Divergence matérielle, identité non établie ou substitution silencieuse → refus de lancement et requalification |

**Projection Pilot-first :** quatre résumés **Ce qui sera fait / Ce qui ne sera pas fait / Résultat attendu / Votre contrôle** et les six volets toujours consultables. Une section ne se vide pas silencieusement : si elle est non applicable, indiquer « sans objet » lorsque cela évite une conclusion trompeuse ; si un fait critique est inconnu, le signaler et refuser l'effet concerné.

### 8.3. Instruction technique à Cursor — correspondance bidirectionnelle

La projection métier, le contrat opérationnel et l'instruction ne sont **pas trois mandats distincts**. L'instruction effectivement visée conserve au minimum, dans les cas applicables : objectif et livrables ; ressources/cibles et version/base ; fichiers et actions explicitement autorisés ; périmètre IN/OUT ; contraintes et interdictions ; autorité et permissions à vérifier ; STOP et reprise ; critères/plan de validation ; exigences de retour, traces et preuves ; signalement des inconnues/écarts. Le format de ces informations relève de R4, non d'un copier-coller obligatoire du template SFIA v2.6.

**Fidélité fonctionnelle :** toute action/cible/risque significatif de l'instruction doit apparaître dans la lecture métier ; tout engagement déterminant exposé au Pilote doit être repris dans l'instruction ou dans une précondition/enforcement Studio correctement propriétaire, sans obligation de dupliquer les secrets. Des précisions de mise en œuvre non matérielles peuvent varier sous mandat, mais pas les exclusions, le résultat, les droits, le STOP ou les critères de conformité.

**Inspection du brut :** le Pilote doit pouvoir ouvrir, lire et quitter une représentation de l'instruction exacte associée à la version autorisable. Les secrets restent protégés ; la suppression d'une valeur sensible ne peut cacher une mutation, une destination ou un risque. L'instruction réellement transmise est liée au contrat et un changement de sens impose réinspection. L'exigence n'impose pas d'exposer des jetons, un shell ou des informations protégées en clair.

**Autorisation et dispatch :** le Pilote autorise **la version applicable**, non un texte générique ; D6 contrôle mandat/suspension, D7 contrôle contrat/exécuteur/tentative, D9 contrôle les ressources Git si concernées. Il ne faut pas confondre clic, demande de lancement, accusé technique, début observé et fin. La vérification doit empêcher doublons, rejouements aveugles et exécution sur version/compte tiers.

### 8.4. Obligations fonctionnelles proposées, à confronter RG-REAL-001..036

- **REAL-INFO-01 — Présentation complète.** D7 expose quatre engagements immédiats et six volets inspectables avec données explicites, conditionnelles et inconnues sans perdre une information déterminante.
- **REAL-INFO-02 — Impact honnête.** Toute action ayant une conséquence externe, irréversible ou hors du périmètre standard est visible en langage métier avant autorisation.
- **REAL-INFO-03 — Correspondance d'instruction.** Le contenu technique réellement visé et la lecture métier portent le même contrat/version/cible et les mêmes engagements matériels.
- **REAL-INFO-04 — Traces de transformations.** Nora doit pouvoir expliquer un écart matériel de projection ; Studio interdit la substitution silencieuse d'effet sous une version inspectée.
- **REAL-INFO-05 — Préconditions actuelles.** La disponibilité de l'exécuteur, l'identité effective et les droits ne sont pas inférés d'un libellé ou d'une session passée.
- **REAL-INFO-06 — STOP et compensations.** Les conditions d'arrêt, les limites d'interruption et les effets antérieurs à l'arrêt sont exposés distinctement d'un retour arrière éventuel.
- **REAL-INFO-07 — Réversibilité circonstanciée.** Réversible, partiellement réversible, irréversible ou non établie sont des qualifications métier contextualisées, pas un enum technique décidé en R2.
- **REAL-INFO-08 — Contrôles et preuves proportionnés.** L'instruction exprime les vérifications, les traces de succès/échec et le rapport requis, selon le résultat attendu et le risque.
- **REAL-INFO-09 — Identité/version.** Un mandat de même libellé mais de version différente ne peut être exécuté au titre d'une inspection antérieure.
- **REAL-INFO-10 — Absence déterminante.** Si une valeur critique manque, Studio ne déclare pas le contrat « prêt à exécuter » ; Nora demande uniquement ce qui fait réellement défaut.
- **REAL-INFO-11 — Matérialité de changement.** Modifier la cible, les effets, les critères structurants, le risque ou la capacité requise impose un nouveau contrôle et, si nécessaire, un nouvel acte D6.
- **REAL-INFO-12 — Frontière de responsabilité.** D7 ne duplique ni le moteur de décision D6, ni les références Git D9, ni le jugement de conformité D8.

### 8.5. Scénarios proposés de qualification R5–R6

| ID temporaire | Situation | Comportement observable attendu |
| --- | --- | --- |
| PF-REAL-INFO-A | Contrat prêt, les six volets sont repliés | Les quatre engagements demeurent lisibles et les six volets + instruction brute sont accessibles sans autoriser |
| PF-REAL-INFO-B | La cible de l'instruction ajoute un fichier | La vue métier est requalifiée et le lancement est interdit sous l'ancien mandat |
| PF-REAL-INFO-C | Le Pilote ouvre/ferme chaque volet | Aucune tentative, aucun nouveau droit ni changement de version |
| PF-REAL-INFO-D | Réversibilité inconnue pour une suppression durable | Le risque est signalé et le mandat concerné ne devient pas exécutable sans arbitrage suffisant |
| PF-REAL-INFO-E | Exécuteur ou droits indisponibles | Bouton/état non trompeur, refus effectif avant effet |
| PF-REAL-INFO-F | L'instruction technique est modifiée après inspection | Version/contrôle réévalués avant dispatch ; pas d'effet caché |
| PF-REAL-INFO-G | Cursor modifie dans un mandat une condition interne | Rectification permise dans la tentative si le sens et le périmètre restent stables, sinon nouveau mandat |
| PF-REAL-INFO-H | Arrêt confirmé après deux modifications | Effets conservés/qualifiés, aucune prétention de rollback |
| PF-REAL-INFO-I | Double clic ou accusé perdu | Une seule tentative attribuable ; réconciliation avant retry |
| PF-REAL-INFO-J | Projet sans Git | Contrat complet avec ressources applicables, absence de Git explicable sans blocage artificiel |
| PF-REAL-INFO-K | Paramètre secret | Secret masqué, action/cible/risque toujours visibles et inspectables |
| PF-REAL-INFO-L | Contrat correctif après rapport | Nouveau contrat inspecté, aucune relance automatique ni réemploi d'autorisation précédente |

### 8.6. Exit et implications

- **R3 :** quatre cartes visibles, six accordéons indépendants, instruction brute à accès repliable, retour sans lancer, Exécuter soumis aux contrôles ; variants Figma éditables.
- **R4 :** un modèle de contrat et une source de vérité ; identité/version/empreinte éventuelle, résolution secrète, invariants de comparaison, type d'effet, droit, idempotence, sémantique de STOP, réversibilité et rapport de contrôle.
- **R5–R6 :** preuve de l'identité de l'instruction réellement transmise, des refus et des tests, pas seulement couverture déterministe.

**Non-décisions :** aucune classe/table/api imposée, pas de mécanisme « ExecutionContract v3 » adopté, pas de champs historiques `N2`, `PRODUCT_GOVERNED`, `studio.cursor.generalist` ou SHA d'exemple à reprendre par inertie.
