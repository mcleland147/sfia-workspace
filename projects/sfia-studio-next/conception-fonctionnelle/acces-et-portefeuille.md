# SFIA Studio Next — Spécification fonctionnelle R2
## Accès et portefeuille du Pilote

| Métadonnée | Qualification |
| --- | --- |
| **Version/date** | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02) — interfaces réservées** |
| **Domaine propriétaire** | **1 — Accès et portefeuille du Pilote** |
| **Résultat Pilote** | Accéder à son portefeuille Studio et ouvrir un projet personnel en toute confiance sans confondre identité, navigation, consultation et autorité. |
| **Sources Git** | `mcleland147/sfia-workspace` : `main@8751775edc314e8fc7f0855104e5000290be9839` ; branche R2 `sfia/next-r2-functional-specs@3855249a9b02cf484b47811e3aca538de9430ac6` |
| **Références** | Vision R1 validée ; SEF v0.2 ; décision R1 ; sept specs R2 D3–D9 `VALIDATED SPEC` ; CKI v0.2 candidats |
| **Périmètre** | **IN :** identité GitHub personnelle pour Studio ; validité de session utile ; cockpit de consultation et navigation ; sélection d’un seul projet de référence ; accès au sas ; limites et isolation interprojets. |
| **Hors périmètre** | **OUT :** chat Nora dans le cockpit, mission multi-projets, collaboration native et mémoire partagées, gestion des décisions, création de projet, ouverture de cycle, exécution, accès Git, partage/suppression/export de projet non instruits. |
| **Statut produit** | **N/A — NON IMPLÉMENTÉ**, aucune preuve runtime Next |
| **Gate** | **Contenu validé par Morris et publié sur branche R2 sous GO Git borné** ; pas de PR/merge ni sortie R2 anticipée |

## 1. Capacité, valeur et frontières de responsabilité

D1 possède **l’accès au bon espace personnel et le choix explicite du contexte de navigation**. Nora converse uniquement dans le sas D2 ou dans un projet existant D3. Le portefeuille n’est pas une mission ni un second journal. Les sources interprojets consultables depuis un projet ne deviennent pas des projets de référence, des mémoires communes ni des mandats. Une identité GitHub authentifiée pour Studio n’accorde aucune permission Git ou Cursor au-delà des contrôles de leurs propriétaires.

### 1.1. Propriétaires canoniques et interfaces

| Responsable | Possède | Interface avec cette spécification |
| --- | --- | --- |
| **D1 — Accès et portefeuille** | Identité personnelle, accès aux projets et navigation ; cockpit non conversationnel | **Propriétaire ici**, fournit identité/session et contexte navigué |
| **D2 — Création de projet** | Sas, acte de création, effet projet vérifié et continuité visible du fil | Consomme uniquement la référence du projet créé, sans le fabriquer |
| **D3 — Nora** | Compréhension, investigation, production cognitive et restitution | Ne délègue aucune autorité à la navigation ou à la préparation |
| **D4 — Connaissance** | Mémoire, sources, sujets et points ouverts du bon contexte | Les informations de D1/D2 référencent ses contenus sans registre concurrent |
| **D5 — Trajectoire / CKI** | Projet courant en contexte, cycles et association du CKI à l’unique cycle actif | Aucun cycle/CKI obligatoire à l’accès ou à la création |
| **D6 — Décisions et gouvernance** | Auteur, décisions, GO, mandats, suspensions, restrictions | Les actes humains restent qualifiés par D6 ; aucun droit déduit d’un écran |
| **D7 — Réalisation** | Contrat technique et tentative d’exécution | Pas de lancement Cursor par navigation ou création |
| **D8 — Résultats et preuves** | Conformité et références probatoires | Aucune certification depuis un statut de cockpit ou de création |
| **D9 — Git gouverné** | Accès et ressources Git, références et conditions de mutation Git | Git facultatif ; connexion Studio et droit Git restent indépendants |

**Distinction structurante :** identifier un Pilote, ouvrir un contexte de travail, enregistrer un projet, autoriser une transition de cycle et déclencher Cursor sont **des effets différents**. La proximité UX de ces actes n’en modifie jamais le propriétaire.

## 2. Informations et contrats fonctionnels minimaux

**Pour l’accès :** identité du Pilote reconnue, caractère applicable de la session, demandes d’ouverture de ressource et motifs de refus utiles sans divulgation. **Pour le portefeuille :** projets dont la propriété/accessibilité est vérifiée, identité durable de chacun, libellé et contexte de présentation disponibles, état courant ou indisponible, cible de navigation. **Pour l’entrée du sas :** contexte de création distinct d’un projet existant. **Pour la navigation :** intention du Pilote, projet réellement ouvert, contexte rattaché, erreur ou état indéterminé le cas échéant. Les décisions, preuves et cycles affichés restent des références vers leurs sources canoniques.

Aucun schéma de table, protocole de session, route UI, SDK GitHub, event bus, verrou, identifiant technique ou modèle de persistance n’est adopté à ce stade ; R3 et R4 prennent les décisions correspondant à leurs responsabilités.

## 3. Règles de gestion fonctionnelles validées — propriétaire du domaine (interfaces réservées)

### 3.A — Identité personnelle et session

- **RG-ACC-001 — Authentification personnelle.** Le Pilote accède à Studio avec sa propre identité GitHub reconnue comme identité d’entrée ; aucun compte, projet ou mandat appartenant à un autre Pilote n’est déduit de la connexion. **Interfaces :** R1 §§2.23–2.24 ; D6 RG-GOV-003/014 ; D9 RG-GIT-008.

- **RG-ACC-002 — Session applicable.** L’accès aux données et aux actions Studio dépend d’une session dont l’identité et la validité sont établies au moment utile ; une session expirée ou révoquée ne permet pas de poursuivre une opération protégée. **Interfaces :** R1 §2.23 ; D6 RG-GOV-027 ; R4 mécanisme.

- **RG-ACC-003 — Connexion non autorisante sur les dépôts.** Se connecter avec GitHub ne vaut ni rattachement d’un dépôt, ni droit de lire tous les dépôts, ni droit d’écriture Git ou identité d’exécution Cursor. D9 contrôle ces capacités séparément. **Interfaces :** R1 §§2.23/2.28 ; D9 RG-GIT-008/013.

- **RG-ACC-004 — Séparation entre identité et décision.** D1 fournit au domaine 6 l’identité courante du Pilote et la portée du projet sélectionné ; il ne statue pas sur la validité d’un arbitrage, GO, mandat ou acceptation. **Interfaces :** D6 RG-GOV-001/003/024.

- **RG-ACC-005 — Aucun accès intercomptes implicite.** Une identité de session ne peut consulter ou manipuler automatiquement les projets privés, conversations, décisions et mémoire d’un autre Pilote, même lorsqu’ils partagent un dépôt Git. **Interfaces :** R1 §2.24 ; D4 RG-KNOW-002/014 ; D6 RG-GOV-014.

- **RG-ACC-006 — Retour après perte de session.** Lorsqu’une session cesse d’être applicable, Studio protège les effets et contenus privés ; après reconnexion, il retrouve seulement le portefeuille réellement autorisé et n’affirme pas qu’une opération non observée a réussi. **Interfaces :** D3 RG-CTX-006/008 ; D6 RG-GOV-016 ; D7 RG-REAL-020.

- **RG-ACC-007 — Accès technique sans présumer d’un protocole.** L’orientation GitHub individuelle ne décide pas du protocole, du fournisseur de session, d’une politique de jetons ou d’un accès CLI ; les choix de protection et d’isolation relèvent de R4 et devront être prouvés. **Interfaces :** R1 §2.23 ; SEF §6.

### 3.B — Portefeuille de projets et navigation

- **RG-ACC-008 — Portefeuille propre au Pilote.** Le cockpit affiche les projets Studio accessibles au Pilote identifié ; des dépôts Git partagés n’y créent pas de projets Studio collectifs ou de projets appartenant automatiquement à d’autres personnes. **Interfaces :** R1 §§2.15/2.24/2.29.

- **RG-ACC-009 — Cockpit sans Nora conversationnelle.** Le cockpit sert à consulter le portefeuille et à naviguer ; Nora n’y dispose pas de conversation globale ni de mission transversale. La conversation est réservée au sas et aux espaces projets. **Interfaces :** R1 §2.15 ; D3 RG-CONV-001.

- **RG-ACC-010 — Navigation vers un projet explicite.** Choisir un projet identifie clairement le projet courant avant de charger son fil, ses sources et ses décisions ; une mention incidente d’un autre projet ne modifie pas le projet actif. **Interfaces :** R1 §2.15 ; D3 RG-CTX-001.

- **RG-ACC-011 — Plusieurs projets sans travail transverse implicite.** Un Pilote peut détenir plusieurs projets personnels ; naviguer entre eux ne fusionne ni les conversations, ni les cycles, ni la méthode, ni les autorisations, ni les sujets. **Interfaces :** R1 §2.24 ; D4 RG-KNOW-002 ; D5 RG-TRJ-008.

- **RG-ACC-012 — Projet existant à l’accès.** Une entrée de portefeuille n’est ouvrable comme projet courant que si le projet existe effectivement, appartient ou est accessible au Pilote, et n’est pas dans un état incompatible avec l’accès demandé. **Interfaces :** D2 futur, D6 RG-GOV-003 ; R4 persistance.

- **RG-ACC-013 — Données de présentation honnêtes.** Les noms, états et indicateurs présentés dans le cockpit reflètent uniquement les informations effectivement disponibles, leur fraîcheur et leur portée ; aucun avancement, preuve, cycle ou disponibilité d’exécuteur n’est fabriqué. **Interfaces :** D3 RG-CONV-006 ; D5 RG-TRJ-015 ; D8 RG-PRV-015.

- **RG-ACC-014 — Reprise d’un projet via le propriétaire métier.** L’ouverture d’un projet conduit vers son espace propre ; D3 reprend la conversation, D4 fournit la connaissance, D5 retrouve le cycle réel et D6 les restrictions, sans en créer des copies dans D1. **Interfaces :** D3 RG-CTX-006 ; D4 RG-KNOW-011 ; D5 RG-TRJ-015.

- **RG-ACC-015 — Accès interdit ou périmé.** Si l’accès à un projet a été retiré ou ne peut être vérifié, Studio ne livre pas ses contenus privés et indique une limitation exploitable sans révéler les éléments protégés. **Interfaces :** R1 §2.24 ; D4 RG-KNOW-014 ; D6 RG-GOV-003.

- **RG-ACC-016 — Navigation interrompue.** En cas d’échec de chargement ou de changement de projet, le produit distingue projet réellement ouvert, projet demandé et état inconnu ; il ne présente pas un autre projet comme chargé par défaut. **Interfaces :** D3 RG-CTX-001/008 ; D6 RG-GOV-016.

### 3.C — Accès à la création et frontières interprojets

- **RG-ACC-017 — Entrée visible vers le sas.** Le Pilote peut engager un nouveau sas depuis le portefeuille selon son accès actuel ; cette navigation n’est pas en soi l’acte « Créer le projet » et n’enregistre aucun projet implicite. **Interfaces :** R1 §§2.20/2.30 ; D2 à spécifier.

- **RG-ACC-018 — Sas distinct du projet existant.** Le sas possède un contexte de création identifiable, sans emprunter par défaut l’identité, les droits, le cycle ou les décisions d’un autre projet ouvert précédemment. **Interfaces :** R1 §§2.15/2.20 ; D3 RG-CTX-001.

- **RG-ACC-019 — Consultation interprojets bornée.** Depuis un projet courant, Nora peut consulter en lecture des sources d’autres projets si les droits l’autorisent, mais D1 ne transforme pas cette consultation en navigation, pilotage, modification ou import d’autorité. **Interfaces :** R1 §2.15 ; D4 RG-KNOW-014 ; D6 RG-GOV-014.

- **RG-ACC-020 — Pas de mode Nora global multi-projets.** D1 ne permet pas de piloter plusieurs projets simultanément par une même conversation Nora ; une vue de portefeuille n’est pas un agrégateur de décisions ou de mandats. **Interfaces :** R1 §2.15 ; D3 RG-CTX-001.

- **RG-ACC-021 — Confidentialité des aperçus.** Les éléments visibles depuis le cockpit et le choix de projet n’exposent pas les données d’un projet hors droit, y compris par les titres, prévisualisations, liens ou erreurs. **Interfaces :** R1 §§2.23–2.24 ; D4 RG-KNOW-014.

- **RG-ACC-022 — Aucune opération Git déclenchée par navigation.** Ouvrir un projet, revenir au cockpit ou entrer dans le sas ne crée ni dépôt, branche, contrat Cursor, permission Git, cycle ni état de gouvernance nouveau. **Interfaces :** R1 §§2.20/2.23 ; D5 RG-TRJ-009 ; D9 RG-GIT-001.

- **RG-ACC-023 — Connaissance des limites sans blocage gratuit.** Si Git, Cursor ou un élément secondaire est indisponible, le cockpit et la navigation vers les projets locaux accessibles fonctionnent lorsque leurs propres préconditions restent satisfaites. **Interfaces :** R1 §2.23 ; D3 RG-APP-008 ; D9 RG-GIT-001.

- **RG-ACC-024 — Actions sensibles hors navigation.** Supprimer, transférer, exporter ou partager un projet Studio ne sont pas autorisés par les règles de navigation ; leur besoin, l’autorité et le contrat seront à instruire séparément, sans déduire une capacité de la liste des projets. **Interfaces :** R1 §2.24 ; R2 OUT.

- **RG-ACC-025 — Nombre et ordre de projets non prescrits.** Le domaine n’impose aucun plafond de projets, tri obligatoire, indicateur universel ou typologie de portefeuille ; une proposition UX peut organiser la consultation sans fixer une règle de gouvernance. **Interfaces :** R1 §2.29 ; R3 UX.

## 4. Parcours nominaux, alternatifs, négatifs et couverture

Chaque scénario ci-dessous constitue un **contrat de résultat vérifiable en R5/R6**, pas la revendication d’un comportement déjà implémenté. Les références de règle portent sur leur propriétaire unique.

| Cas | Situation | Résultat attendu | Règles couvertes |
| --- | --- | --- | --- |

| **PF-ACC-01** | Connexion valide et portefeuille personnel | Identité GitHub vérifiée ; projets personnels affichés ; aucune capacité Git supplémentaire supposée | `RG-ACC-001`, `RG-ACC-003`, `RG-ACC-005`, `RG-ACC-008` |

| **PF-ACC-02** | Session expirée à l’ouverture | Refus des données privées et reconnexion appropriée ; aucune opération protégée reprise par mémoire | `RG-ACC-002`, `RG-ACC-006` |

| **PF-ACC-03** | Utilisateur B utilise le même dépôt que A | Portefeuilles distincts ; aucun projet, décision ou conversation de A dans B | `RG-ACC-001`, `RG-ACC-005`, `RG-ACC-008`, `RG-ACC-011` |

| **PF-ACC-04** | Connexion GitHub sans permission dépôt | Le cockpit reste utilisable ; dépôt non autorisé et écriture non présumée | `RG-ACC-003`, `RG-ACC-007`, `RG-ACC-023` |

| **PF-ACC-05** | Choix explicite du projet A | A devient le contexte ; le fil et les états réels de A sont sollicités auprès de leurs propriétaires | `RG-ACC-010`, `RG-ACC-012`, `RG-ACC-014` |

| **PF-ACC-06** | Mention du projet B dans la conversation de A | Le projet actif reste A ; aucune bascule de navigation ni permission B créée | `RG-ACC-010`, `RG-ACC-019`, `RG-ACC-020` |

| **PF-ACC-07** | Portefeuille de plusieurs projets | Choix indépendant de chaque projet ; aucune conversation multi-projets ni fusion des cycles | `RG-ACC-008`, `RG-ACC-011`, `RG-ACC-020` |

| **PF-ACC-08** | Cockpit sans espace Nora | Accès/navigation possibles ; aucune surface de dialogue globale exposée | `RG-ACC-009`, `RG-ACC-020` |

| **PF-ACC-09** | Projet supprimé ou non trouvé depuis un lien historique | Ne pas ouvrir ou recréer un projet fictif ; indiquer état réel et limites | `RG-ACC-012`, `RG-ACC-016` |

| **PF-ACC-10** | Accès projet retiré après affichage | Recontrôle avant ouverture ; aucune divulgation dans prévisualisation ou message d’erreur | `RG-ACC-002`, `RG-ACC-015`, `RG-ACC-021` |

| **PF-ACC-11** | Statut cycle/progression introuvable | Ne pas créer de valeur de secours ; statut inconnu/indisponible honnête | `RG-ACC-013`, `RG-ACC-014`, `RG-ACC-023` |

| **PF-ACC-12** | Interruption pendant navigation A vers B | État visible correspond au projet confirmé ou signale l’échec ; pas de données A étiquetées B | `RG-ACC-010`, `RG-ACC-016` |

| **PF-ACC-13** | Projet ouvert après reconnexion | Requalifier identité et propriétaire ; reprise contextualisée par D3/D4/D5/D6 | `RG-ACC-002`, `RG-ACC-006`, `RG-ACC-014` |

| **PF-ACC-14** | Entrée dans sas depuis portefeuille | Ouvre une préparation, pas un projet durable ni un cycle | `RG-ACC-017`, `RG-ACC-018`, `RG-ACC-022` |

| **PF-ACC-15** | Retour au cockpit depuis un sas non créé | Pas de création fictive ni dépôt Git ; suite du sas selon contrat D2 | `RG-ACC-017`, `RG-ACC-018`, `RG-ACC-022` |

| **PF-ACC-16** | Lecture autorisée d’un autre projet | D3/D4 citent source lisible, sans changer projet/autorité ou moteur de pilotage | `RG-ACC-019`, `RG-ACC-020`, `RG-ACC-021` |

| **PF-ACC-17** | Source interprojet inaccessible | Ne pas révéler son existence privée au-delà du nécessaire ; refus proportionné | `RG-ACC-015`, `RG-ACC-019`, `RG-ACC-021` |

| **PF-ACC-18** | Tentative de piloter deux projets dans une conversation | Aucun contexte multi-projets implicite ; suggérer navigation ou cadrage distinct | `RG-ACC-010`, `RG-ACC-011`, `RG-ACC-020` |

| **PF-ACC-19** | Demande de suppression ou transfert de projet | Ne pas déduire autorisation ni capacité de D1 ; signaler fonctionnalité non spécifiée | `RG-ACC-024` |

| **PF-ACC-20** | Liste très longue et navigation | Aucune limite artificielle ; stratégie de consultation adaptée par UX ultérieure | `RG-ACC-025` |

| **PF-ACC-21** | Cursor indisponible pendant accès portefeuille | Consultation locale maintenue sans statut Cursor fictif | `RG-ACC-013`, `RG-ACC-023` |

| **PF-ACC-22** | Injection Git tente de changer de projet | Texte tiers non autorisant ; projet courant confirmé reste seul contexte | `RG-ACC-010`, `RG-ACC-019`, `RG-ACC-022` |

| **PF-ACC-23** | Ouverture projet avec décision obsolète en cache | Rattacher au bon projet ; D6 requalifie autorité courante avant effet | `RG-ACC-004`, `RG-ACC-014` |

| **PF-ACC-24** | Erreur de projet non accessible | Erreur sans fuite de titre/contenu/permission d’un projet tiers | `RG-ACC-012`, `RG-ACC-015`, `RG-ACC-021` |


**Contrôle de couverture documentaire :** 25 règles distinctes `RG-ACC-001..025` ; 24 scénarios distincts `PF-ACC-01..24` ; chaque règle couverte par au moins un cas. Une correspondance écrite n’est pas une exécution de test.

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

| **ACC-01 — Identité GitHub et session** | ORIENTATION R1 VALIDÉE, protocole inconnu | D1/D9 R4 ; R5–R6 | Utilisateur réellement isolé, révocation effective, absence de confiance induite dans les droits Git. |

| **ACC-02 — Cockpit sans Nora** | FRONTIÈRE FONCTIONNELLE SPÉCIFIÉE | R3 UX ; R5–R6 | Aucune conversation Nora globale depuis le portefeuille ; entrée sas/projet accessible. |

| **ACC-03 — Isolation et confidentialité des projets** | RÈGLE FONCTIONNELLE POSÉE, pas d’essai réel | D1/D4/D6 R4–R6 | Deux Pilotes sur dépôt Git commun ne voient pas de données Studio privées par erreur. |

| **ACC-04 — Projet courant et navigation** | RÈGLE POSÉE, persistance inconnue | D1/D3/D4 R3–R6 | Bascule explicite, contexte stable et reprise sans contamination interprojets. |

| **ACC-05 — État du portefeuille et fraîcheur** | RÈGLE POSÉE, signaux techniques inconnus | D1/D5/D8 R4–R6 | États manquants signalés, aucun faux statut progression/preuve. |

| **ACC-06 — Accès refusé et fuites indirectes** | RISQUE SÉCURITÉ NON PROUVÉ | D1/D4 R4–R6 | Échec sans fuite de titre, résumé, URL privée ou statut d’un autre projet. |

| **ACC-07 — Règles de gestion hors périmètre** | PARTAGE/SUPPRESSION/EXPORT NON DÉCIDÉS | Morris si extension de périmètre ; revue globale R2 | Aucune capacité d’administration de projets inférée de la navigation. |

| **ACC-08 — Lien création D1↔D2** | INTERFACE À CONFRONTER AVEC SPEC D2 | D1/D2 même lot R2 ; R4–R6 | Seul un projet effectivement créé par D2 apparaît et devient ouvrable via D1. |

**Revue incrémentale :** ces réserves sont rouvertes lors de l’instruction de leur interface propriétaire ; une lacune de R4/R5/R6 ne devient pas une contradiction R2 « résolue » par promesse. Le `KNOWN GAP` de Roadmap Next `main` et l’harmonisation éditoriale CKC→CKI sont suivis dans la consolidation R2/gouvernance sous autorisation adaptée, non modifiés par cette candidate.

## 6. Critères d’acceptation fonctionnelle et trajectoire R3–R6

**R2 :** accès individuel authentifié, cockpit non conversationnel, navigation explicite, projets privés isolés, sas ouvrable sans création, limitation honnête, absence de prérequis Git/CKI. **R3 :** parcours du portefeuille, états d’erreur et bascule contextuelle sans Nora globale. **R4 :** session, identité fiable, contrôle d’accès et persistance réelle sans architecture historique imposée. **R5 :** construction du parcours projet personnel puis sas. **R6 :** tests multi-utilisateurs, session perdue, fuite de données, dépôt partagé, navigation ambiguë et non-régression des interfaces D3–D9. Aucune preuve technique n’est revendiquée.


**Verdict : `R2 — ACCÈS ET PORTEFEUILLE DU PILOTE — v0.1 VALIDATED SPEC (Morris, 2026-11-02)` ; 25 règles `RG-ACC`, 24 scénarios `PF-ACC`, 8 réserves ; conformité documentaire R1/D3–D9/CKI candidate revue ; Studio Next `N/A — NON IMPLÉMENTÉ`, contenu validé par Morris et publié sur branche R2, sans PR, merge ni ADOPTED.**

## 7. Complément fonctionnel — diagnostic de l'identité et des sessions (2026-11-05)

**Orientation d'observabilité transverse validée par Morris ; extension fonctionnelle candidate, distincte des règles D1 déjà validées.** La source de session reste Better Auth pour GitHub OAuth, avec l'adaptateur DEV seulement sous ses restrictions propres. L'observation ne crée ni fournisseur d'identité supplémentaire ni permission d'accès. Référence : [contrat transverse R4](../architecture-technique/contrat-observabilite-transverse.md) §§3–7 ; [vision R1 §10](../cadrage/vision-produit.md).

**Règles candidates propriétaires :**
- **RG-ACC-026 — Authenticité des états d'accès.** Différencier authentification requise, refus d'accès, session expirée/révoquée, échec OAuth ou de rattachement Pilote et indisponibilité d'une dépendance. Une exception PostgreSQL ou applicative n'est pas présentée comme SESSION_INVALID par défaut.
- **RG-ACC-027 — Diagnostic d'authentification minimal.** Les tentatives et résultats effectivement observables du fournisseur et de D1 peuvent être corrélés à une opération Studio par un examinateur habilité ; ni cookies, ni secrets OAuth, ni jetons, ni identité brute en logs généralisés. Le mode DEV n'est jamais qualifié de connexion OAuth LIVE.
- **RG-ACC-028 — Isolation des diagnostics.** Les événements de session n'accordent aucun droit et n'exposent aucune information d'un autre Pilote/projet/lane ; diagnostic et visibilité du portefeuille respectent les règles d'accès existantes.

**Parcours candidats :** **PF-ACC-25** GitHub OAuth refusé et callback indisponible → catégorie et opération identifiables sans fuite ; **PF-ACC-26** panne DB lors de résolution de session → erreur de dépendance distinguée d'une session invalide ; **PF-ACC-27** session DEV réutilisée hors DEV, expirée ou révoquée → refus effectif et origine qualifiée, sans confusion avec OAuth. **Acceptation :** tests d'intégration d'erreur/accès et LIVE OAuth borné ; diagnostic consultable avec la sécurité/retention DATA-01, sans considérer un compteur d'événements comme preuve de réussite OAuth.


---

## Addendum D1 — 2026-11-07 : accès facultatif aux intégrations

**Référence :** [décision de trajectoire](../governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md). Le login GitHub OAuth existant authentifie le Pilote dans Studio mais ne confère aucun droit Git ; D9 contrôle séparément installation GitHub App, autorisation personnelle, ressources et permissions.

La navigation **Paramètres → Intégrations** relève de la session D1, sans créer de mission ni de conversation globale. La proposition de connexion après premier login est non bloquante et peut être différée ; une entrée depuis Nora ou un projet rejoint le même parcours. À la reprise, la session et le contexte sont revérifiés, sans présumer accès ou mandat.

**À prouver ML4 :** Studio utilisable sans Git, entrée Paramètres après login, refus 401/403, absence de permission implicite et maintien de l'isolation des comptes. Figma non encore modifié.
