# SFIA Studio Next — Spécification fonctionnelle R2
## Connaissance, sujets et continuité du projet

| Métadonnée | Valeur |
| --- | --- |
| Version | **0.1 — VALIDATED SPEC (Morris, 2026-11-02)**, interfaces transverses réservées |
| Macro-lot | **Contexte et conduite gouvernée de Nora** — volet connaissance durable |
| Responsable fonctionnel | **Domaine 4 — Connaissance et investigation** (vision R1 §2.29) |
| Sources normatives examinées | `main@8751775edc314e8fc7f0855104e5000290be9839` : vision R1 §§2.8, 2.13, 2.29, 2.33–2.36, 2.38 ; SEF v0.2 ; décision de sortie R1 |
| Spécification liée | `contexte-et-conduite-gouvernee-de-nora.md` — **v0.4 validée par Morris en conversation le 2026-11-02**, publication Git v0.4 synchronisée sur branche R2 |
| État produit | **N/A — NON IMPLÉMENTÉ** ; aucune preuve comportementale ou choix technique |
| Statut Git | **Synchronisée sur branche candidate `sfia/next-r2-functional-specs`**, sans PR ni merge `main` ; statut fonctionnel ≠ adoption |

> **Portée :** spécifier la conservation, l'organisation, la révision et la récupération fonctionnelles des connaissances du projet. Le comportement conversationnel et l'usage contextuel par Nora sont déjà définis dans sa spec ; les **décisions, mandats et suspensions opposables** restent sous la responsabilité du domaine 6. Une information connue n'est pas un droit d'agir.

## 1. Résultat utilisateur et IN/OUT

**Résultat pour le Pilote :** il reprend son projet et retrouve naturellement ses travaux, sources, sujets, acquis et points ouverts, même après plusieurs échanges, sessions de travail ou cycles successifs dans le même projet. Il n'a pas à gérer une mémoire technique ni relire tout le transcript. La conservation est utile, honnête et limitée au bon projet.

**IN :** connaissances pertinentes issues des conversations et investigations ; organisation et évolution des **Sujets** ; références aux **Décisions** (sans les réédicter) ; accès transverse aux points ouverts ; sources, versions, restrictions d'accès, contradictions, contexte actuel/historique ; restitution après interruption et au fil des échanges successifs, transitions de cycle et cas d'absence ou d'indisponibilité.

**OUT :** captation exhaustive de chaque message, obligation de créer des fiches par recommandation, vues permanentes autonomes « Réserves » et « Recommandations », nouvelle autorité de décision, moteur concurrent de preuves, partage automatique entre projets, architecture DB/index/embedding, exécution d'effets externes. Les questions de représentation visuelle relèvent de R3 ; la persistance, l'isolation et l'intégrité relèvent de R4.

## 2. Responsabilités et interfaces canoniques

| Domaine | Possède | Interface avec cette spécification |
| --- | --- | --- |
| **4 — Connaissance et investigation** | Identité et évolution des sujets, connaissances sourcées, recherche contextuelle et points ouverts ; organisation et fraîcheur de leur représentation | **Propriétaire de cette spec** |
| **3 — Conduite Pilote–Nora** | Choix des informations pertinentes, dialogue, raisonnement, synthèse et restitution naturelle | Consomme la connaissance et qualifie les limites ; référence `RG-CTX-001..008`, `RG-APP-001..008`, `RG-CONV-001..006` ; **ne duplique pas les faits d'autorité** |
| **6 — Décisions et gouvernance** | Décisions humaines, mandats, révocations, suspensions, droits et état opposable | Les sujets et la vue Décisions **référencent** les états officiels ; aucune copie autorisante dans la mémoire |
| **5 — Trajectoire et cycles** | Cycle actif, transitions, CKI et méthode retenue selon son contrat propriétaire | Les changements de cycle modifient le contexte de récupération, **pas** la propriété des connaissances |
| **8 — Résultats et preuves** | Statut de conformité, observation, preuves et verdicts | Une connaissance peut référencer une preuve, **pas** requalifier seule le niveau de démonstration |
| **9 — Intégration Git** | Accès autorisé aux branches, commits, documents et état Git consultable | Conserve référence et portée de source, sans confondre Git partagé et projet Studio partagé |

**Frontière :** une même information peut être consultable depuis plusieurs vues sans exister comme plusieurs autorités concurrentes. Les vues **Sujets** et **Décisions** validées en R1 sont des chemins d'accès, pas deux registres différents de vérité.

## 3. Informations métier requises — sans préjuger des objets techniques

| Information | Minimum fonctionnel | Garde-fou |
| --- | --- | --- |
| Sujet | Projet propriétaire, identité durable, libellé, sens, relations, statut pertinent, liens et historique | Renommer/déplacer/fusionner ne détruit ni origine ni liens |
| Connaissance contextualisée | Proposition/fait/hypothèse/recommandation, objet, source, version/date de constat, validité/limites, sujet(s) concernés | Ne pas présenter une hypothèse comme un fait établi |
| Point ouvert | Objet, raison de l'ouverture, impact, portée, dépendances, provenance, état courant et conditions de résolution | Le point reste accessible indépendamment de son sujet et de son cycle d'origine |
| Référence de décision | Identité/référence, portée et état courant fournis par la responsabilité gouvernance | Un résumé ne crée ni ne révoque une HumanDecision |
| Source/proof | Origine, chemin ou lien, branche/ref/version si applicable, horodatage du constat, périmètre d'accès, limites | Présence d'un document ≠ preuve de conformité ni permission d'agir |
| Contexte repris | Intention courante, acquis utiles, travaux en cours, décisions applicables et sujets ouverts | Sélection proportionnée ; pas de chargement obligatoire de tout le transcript |

Ces informations décrivent les besoins fonctionnels ; **aucune table, classe, base supplémentaire, registre de source ou machine d'états n'est imposé par R2**.

## 4. Règles de gestion validées — propriétaire domaine 4 (interfaces réservées)

### 4.A — Capitalisation et organisation

- **RG-KNOW-001 — Capitalisation sélective.** Une information rejoint la connaissance durable lorsqu'elle présente un intérêt raisonnable pour la continuité du projet : acquis important, sujet structurant, source exploitable, dépendance, question significative, réserve ou élément à reprendre. Une remarque passagère ne donne pas automatiquement lieu à un objet conservé. Cette règle n'impose pas de validation ou de formulaire au Pilote à chaque échange.
- **RG-KNOW-002 — Propriété du projet.** Toute connaissance durable est rattachée au projet Studio du Pilote, ou au sas avant création selon l'état réel du travail. Un dépôt Git commun ou une consultation d'un autre projet ne fusionne ni les mémoires ni les droits des projets.
- **RG-KNOW-003 — Sujets vivants.** Les sujets et sous-sujets sont organisables, renommables, regroupables ou séparables selon leur sens et le besoin de navigation. Leur identité, l'origine des informations et leurs liens pertinents restent reconstituables après transformation.
- **RG-KNOW-004 — Points ouverts transversaux.** Une question, une réserve, un blocage ou une condition importante reste retrouvable même si son sujet est renommé, déplacé, fusionné ou si le cycle change. L'accès transversal ne crée ni une troisième source de décision ni un onglet autonome permanent imposé.
- **RG-KNOW-005 — Recommandations proportionnées.** Une recommandation ponctuelle reste dans sa conversation ; elle n'est capitalisée au titre d'un sujet/point ouvert que lorsqu'elle est utile à une suite réelle. Une recommandation ne devient jamais décision par répétition, résumé ou archivage.

### 4.B — Provenance, évolution et véracité

- **RG-KNOW-006 — Provenance non fictionnelle.** Une connaissance déterminante conserve un rattachement vérifiable à la conversation, source ou observation d'origine et à sa portée temporelle/versionnelle ; si ce rattachement manque, sa fiabilité et les conclusions possibles sont limitées explicitement. Le texte d'une pièce jointe ou d'une page ne produit pas d'instruction gouvernante.
- **RG-KNOW-007 — Information historique distincte du courant.** Une information devenue obsolète ou contredite reste interprétable dans son contexte historique sans être présentée comme l'état présent. Une version nouvelle ne réécrit pas rétroactivement les constats, décisions ou résultats anciens.
- **RG-KNOW-008 — Contradictions non écrasées.** Deux affirmations matériellement incompatibles sont distinguées par leurs sources, portées, dates, branches et niveaux de vérification. La résolution factuelle peut être proposée et sourcée ; la résolution d'un conflit de décisions/restrictions appartient au domaine 6.
- **RG-KNOW-009 — Résolution fondée sur une preuve.** Une question purement factuelle peut être qualifiée de résolue lorsqu'une source suffisante est établie. Une réserve gouvernée, un risque accepté ou une suspension ne sont ni clos ni levés par la seule nouvelle connaissance : ils suivent les règles de l'autorité propriétaire.
- **RG-KNOW-010 — Résultats et preuves non confondus.** Une synthèse d'investigation, un rapport d'exécuteur et un lien Git sont mémorisables, mais ne produisent pas un verdict de conformité ou une acceptation métier sans le contrat de preuve/décision applicable.

### 4.C — Actualisation et reprise

- **RG-KNOW-011 — Matière disponible pour la reprise.** Lors d'une reprise, le domaine 4 rend accessibles à Nora les acquis, sources, références de décisions et points ouverts pertinents selon la portée du projet et les droits courants. **Nora reste responsable de leur sélection et de leur restitution conversationnelle** selon `RG-CTX-002/006` ; l'exhaustivité du transcript n'est pas une condition préalable.
- **RG-KNOW-012 — Signalement d’actualité.** La connaissance permet d'identifier qu'une source déterminante pourrait être devenue périmée, remplacée ou inaccessible et expose la version/date du constat conservé ; elle ne certifie pas seule son actualité. Nora apprécie l'impact cognitif via `RG-APP-007`, et les domaines 6/7/9 contrôlent les droits et conditions effectives avant un effet protégé.
- **RG-KNOW-013 — Dégradation explicite.** Si une information essentielle est indisponible, périmée ou inaccessible, la récupération indique la limite ; le travail non dépendant peut continuer. Aucun faux état courant, droit, preuve, résolution ou souvenir reconstruit n'est fabriqué.
- **RG-KNOW-014 — Isolement et accès actuel.** Une connaissance issue d'un autre projet, d'une branche Git commune ou d'une source autrefois accessible n'est utilisée que si l'accès est actuellement autorisé ; elle ne transporte pas l'autorité, la confidentialité ou les mandats de sa provenance vers le projet courant.
- **RG-KNOW-015 — Reprise après interruption.** Après un nouvel échange, un changement de session ou une transition de cycle dans le même fil du projet, la même identité de sujet et les points ouverts applicables restent récupérables ; un enregistrement interrompu ne doit pas conduire à affirmer une sauvegarde complète ou à dupliquer silencieusement un acte d'autorité.

## 5. Scénarios de recette fonctionnelle candidats

- **PF-KNOW-01 — Exploration sélective.** Après dix échanges exploratoires, seule l'information utile à la suite ressort dans les sujets et points ouverts ; Nora ne présente pas chaque idée passagère comme une décision ou une fiche obligatoire. *(E2E 03/04 ; RG-KNOW-001/005.)*
- **PF-KNOW-02 — Reprise lors d'un nouvel échange.** Dans le même projet et le même fil, après des échanges sur d'autres sujets ou une nouvelle session, Nora retrouve un résultat pertinent, sa source/version, une question encore ouverte et la décision applicable via la référence de gouvernance, sans exiger l'intégralité du transcript ni créer une autre conversation technique. *(E2E 04 ; 006/011/015.)*
- **PF-KNOW-03 — Réorganisation des sujets.** Un sujet est renommé puis fusionné avec un autre ; sources, relations, conditions ouvertes et références de décisions restent retrouvables et ne changent pas d'autorité. *(E2E 04 ; 003/004.)*
- **PF-KNOW-04 — Résolution factuelle vs réserve gouvernée.** Une nouvelle source clôt une question de fait étayée ; une suspension ou une réserve acceptée par le Pilote reste ouverte jusqu'à l'acte compétent. *(E2E 04/05 ; 008/009.)*
- **PF-KNOW-05 — Git candidate vs baseline.** Une mémoire affirme « intégré », mais la source correspond à une branche candidate non mergée ; la vue actuelle distingue les deux états, sans déclarer le merge réalisé. *(E2E 04/07 ; 006–008/012.)*
- **PF-KNOW-06 — Connaissance interprojet.** Le projet A consulte un document Git accessible du projet B ; son contenu peut être cité, mais ni les décisions, ni la mémoire privée, ni les permissions de B ne deviennent celles de A. *(E2E 04/07 ; 002/014.)*
- **PF-KNOW-07 — Source inaccessible.** À la reprise, une source importante est inaccessible ou les droits ont été retirés : Nora utilise les seuls acquis autorisés, signale la limite et ne recrée pas la source par affirmation. *(E2E 03/04/07 ; 012–014.)*
- **PF-KNOW-08 — Transition de cycle.** Après clôture d'un cycle et ouverture autorisée du suivant, les sujets et réserves restent disponibles ; le CKI ne réécrit pas leur identité, leur historique ou les décisions. *(E2E 02/04 ; 003/004/011/015.)*
- **PF-KNOW-09 — Retour d'exécution.** Un rapport Cursor indique « tests réussis » sans traces accessibles ; l'information est conservée comme déclaration, pas comme preuve indépendante ni comme `ADOPTED`. *(E2E 06 ; 010.)*
- **PF-KNOW-10 — Sas repris puis projet créé.** Le Pilote retrouve une préparation entamée dans le sas, crée explicitement son projet et poursuit le même fil visible avec ses connaissances pertinentes, sans cycle/Git imposé. *(E2E 01/04 ; 001/002/015.)*

**Vérification des cas négatifs :** pas de fuite interprojets ; pas d'autorité déduite d'une source ; pas de clôture automatique de réserve gouvernée ; pas de réécriture historique ; pas de revendication de sauvegarde ou de preuve non observées.

## 6. Compatibilité transverse et clauses d'acceptation

| Contrat / spec | Interaction contrôlée | Verdict au 2026-11-02 |
| --- | --- | --- |
| Nora v0.4 `RG-CTX-001..008`, `RG-APP-001..008` | Le domaine 4 produit des informations pertinentes, versionnées et autorisées ; Nora les utilise sans les transformer en décisions ni les réinventer | **COMPATIBLE au niveau conceptuel** ; aucune duplication de règle canonique |
| Nora v0.4 `RG-METH-009..016` | Une évolution de méthode affecte l'applicabilité courante mais n'efface pas les sources et décisions historiques | **COMPATIBLE** ; propriétaire de l'état de méthode à qualifier domaine 5/6 |
| R1 E2E 01, 02, 03, 04, 06, 07 | Même fil sas/projet, transition sans perte, réponse naturelle, preuves différenciées et Git facultatif | **COMPATIBLE au niveau documentaire** |
| Futur contrat Domaine 6 — décisions/mandats | Cette spec conserve des **références**, non un second état de décision | **NON ÉVALUÉ** contre la spec future |
| Futur contrat Domaine 8 — preuves | Cette spec référence une preuve, n'en certifie pas la suffisance | **NON ÉVALUÉ** contre la spec future |
| Futur contrat Domaine 9 — accès Git | Séparer accès Studio/Nora et droits réels de l'environnement technique | **NON ÉVALUÉ** contre la spec future |

**Validation fonctionnelle Morris (2026-11-02) :** comportements nominaux/négatifs décrits, règles à propriétaire unique, reprise après interruptions/échanges successifs et entre cycles, état courant vs historique, points ouverts transversaux, absence de transfert d'autorité et scénarios de défaillance. **Réserves :** interfaces futures et preuves R4–R6. `VALIDATED SPEC` ≠ preuve du produit.

**Points à traiter lors des spécifications propriétaires :** (a) seuil concret de captation/actualisation et mode de rectification, sans imposer un mécanisme de saisie ; (b) statut et reprise après sauvegarde interrompue ; (c) gouvernance des décisions/permissions et levée de réserve ; (d) accessibilité, confidentialité et suppression selon les droits ; (e) UX réelle des vues Sujets/Décisions et de l'accès transverse aux points ouverts. Aucun de ces points ne justifie, à ce stade, une deuxième mémoire ou un moteur de workflow.

## 7. Transfert R3–R6 et trajectoire

| Jalon | Travail issu de ce contrat |
| --- | --- |
| **R3** | Navigation « Sujets » / « Décisions », points ouverts transversaux sans onglet permanent imposé, historique et citations utiles ; reprise sans bruit de gouvernance |
| **R4** | Modèle de responsabilité, récupération, version/currentness, isolation et accès, intégrité et reprises partielles ; aucun datastore imposé par R2 |
| **R5** | Réalisation verticale avec Nora et les domaines propriétaires, tests de transition de cycle et de session, citations/accès, absence de partage implicite |
| **R6** | Vérifications représentatives en conditions déclarées, preuves de reprise et de non-élévation, qualité réelle de la conversation ; adoption distincte |

**Capacité suivante du macro-lot :** consolider le contrôle du CKI, de la conduite conversationnelle et de l'héritage sélectif v2.6, puis revue croisée de Nora + Connaissance avant une validation d'ensemble. R2 n'est pas clos ; aucune architecture technique ou implémentation adoptée.


## 8. Consolidation R2 — 2026-11-02

CKI est le terme cible Next (CKC reste historique R1). D4 garde les connaissances et sujets, non le CKI, le cycle D5, la décision D6 ou la preuve D8. Interfaces D6/D8/D9 désormais confrontées documentairement ; aucune preuve LIVE/REAL.


---

## 9. Complément post-clôture R2 — ressources documentaires durables (2026-11-03)

**Statut : contenu approuvé par Morris ; intégration sur branche candidate.** Le référentiel historique D4 (15 règles, 10 scénarios) n'est pas réécrit rétroactivement ; le complément ajoute cinq règles et quatre PF documentaires. **Propriétaire :** identité, versions, retrouvabilité et accès aux documents conservés du projet ; D3 conserve la rédaction/révision cognitive, D6 la gouvernance et D9 les sources Git.

### 9.1. Règles RG-KNOW-016..020

- **RG-KNOW-016 — Ressource documentaire canonique.** Un document de travail conservé possède une identité stable dans le bon projet, distincte de la conversation et de son éventuel fichier Git. La connaissance peut référencer son contenu, mais le même document n'est pas dupliqué en plusieurs vérités officielles.
- **RG-KNOW-017 — Versions reliées.** L'identité documentaire relie les versions consultables, leur origine, les conditions de validité et la version de travail courante lorsque déterminable ; une révision ne réécrit pas le passé. Deux demandes concurrentes ne remplacent pas silencieusement l'une l'autre.
- **RG-KNOW-018 — Sauvegarde et récupération honnêtes.** Studio distingue une ressource enregistrée, en cours d'enregistrement, échouée ou d'état inconnu et offre la reprise/contrôle proportionné ; aucune conservation durable n'est revendiquée sur une simple génération de texte.
- **RG-KNOW-019 — Retrouvabilité indépendante de l'historique affiché.** Le Pilote et Nora peuvent retrouver et ouvrir un document conservé du projet depuis une reprise du fil, le Journal ou un accès de consultation autorisé, sans parcourir ni recharger systématiquement l'intégralité des anciens messages. Les références à l'échange d'origine restent utiles mais ne sont pas le seul moyen d'accès.
- **RG-KNOW-020 — Portée et accès actuels.** La consultation, la référence et la version d'un document respectent l'identité, les permissions et la portée du projet. Accès retiré, source externe devenue inaccessible ou projet différent n'autorisent ni fuite ni copie implicite.

**Réserve R4 :** l'identité canonique documentaire ne préjuge ni base de données, ni service, ni index ; gestion de conservation/archivage, concurrence, intégrité, permissions et reprise à définir sans registre d'autorité parallèle.

### 9.2. Scénarios additionnels PF-KNOW-11..14

| ID | Domaine | Situation / entrée | Comportement attendu | Règles / références |
| --- | --- | --- | --- | --- |
| **PF-KNOW-11** | D4 | Document repris dans une conversation nouvelle | Document, version et provenance retrouvables sans réinjecter tout le transcript | KNOW-016/017/019 |
| **PF-KNOW-12** | D4 | Deux révisions basées sur la même version | Conflit ou divergence identifié ; aucune substitution silencieuse | KNOW-017/018 |
| **PF-KNOW-13** | D4 | Droit d'accès retiré à une ressource | L'Inspection n'expose plus le contenu interdit ; aucune copie interprojets | KNOW-020, KNOW-014 |
| **PF-KNOW-14** | D4 | Version d'un document officiellement remplacée | Historique consultable, version courante identifiable si déterminable, pas de réécriture du passé | KNOW-017, KNOW-007 |

**Preuve :** scénarios documentaires, non exécutés ; comportement `N/A — NON IMPLÉMENTÉ`.

## 10. Complément candidat post-R2 — consultation D4 pendant une mission cognitive (2026-11-05)

> **PROPOSED / NOT VALIDATED BY MORRIS.** Complément borné de RG-KNOW-001..020 et PF-KNOW-01..14 ; aucune réécriture des contrats antérieurs. D4 reste propriétaire des documents, versions, Sujets, Acquis et Points ouverts ; D3 décide de l'usage cognitif des éléments disponibles (D3 §14 candidat). Aucun second registre de trace, mémoire ou autorité n'est créé.

### 10.1. Règles fonctionnelles candidates

- **RG-KNOW-021 — Lecture complémentaire autorisée.** Quand une première sélection est insuffisante, D4 peut fournir à Nora d'autres passages, documents ou Acquis par requête D3 contextualisée, après vérification des droits courants et du projet pour chaque lecture. La disponibilité d'un connecteur Git/Web ne se déduit pas du besoin de Nora.
- **RG-KNOW-022 — Résultat de lecture et couverture honnêtes.** Toute réponse fournit, lorsqu'elles existent, identité/version/source/date, portée, limites, accès refusé ou indisponibilité. La seule présence d'un titre ne signifie pas lecture du document ; une extraction partielle n'est pas présentée comme exhaustive.
- **RG-KNOW-023 — Connaissance distincte de l'activité.** Les événements techniques d'appel, compteurs de tokens ou traces SDK peuvent référencer les ressources D4, mais ne deviennent ni nouveaux Acquis ni preuve D8 ni décision D6. Les contenus privés ne sont pas systématiquement recopiés dans les traces.

### 10.2. Scénarios fonctionnels candidats

- **PF-KNOW-15 — Recherche incrémentale.** À partir d'une sélection initiale partielle, Nora demande des passages complémentaires du même projet ; D4 retourne des références/versions utilisables sans relire l'intégralité de la conversation.
- **PF-KNOW-16 — Changement de droits ou de fraîcheur.** Une ressource est révoquée, remplacée ou devenue périmée entre deux lectures. D4 refuse ou qualifie la nouvelle consultation, sans divulguer l'ancienne donnée interdite.
- **PF-KNOW-17 — Lecture, citation et écriture distinctes.** Une mission lit deux documents, cite un extrait et produit un brouillon explicitement demandé ; les identités, versions et opérations techniques restent distinctes de la confirmation de sauvegarde D4.

**Qualification R5 :** PF-37/39/40 D3 et COG-03/05 sur le même projet/SHA. Interfaces exactes, limites, reprise et sécurité doivent être prouvées avec le code. Les identifiants candidats ne requalifient pas rétroactivement les inventaires validés en R2.
