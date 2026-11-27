# SFIA Studio Next — PV intermédiaire de recette MaintiPlan — 27/11/2026

**Statut :** DOCUMENTED / RECETTE UTILISATEUR PARTIELLE — SUSPENDUE PAR MORRIS APRÈS TOUR 08 — CORRECTIFS ET REJEU REQUIS. Aucun GO d'acceptation Livraison 1, de réalisation technique, de release ou d'adoption.
**Autorité :** Morris, Pilote de la recette ; observations utilisateur et captures de la conversation MaintiPlan du 27/11, revue ChatGPT. GO explicite de capitalisation Git et de préparation de reprise dans un nouveau chat ; pas de GO Cursor technique induit.
**Nature :** PV factuel candidat, non mergé. Les appréciations cognitives sont qualitatives, non un benchmark. Les propositions de correction ne sont pas des arbitrages d'architecture.
**Périmètre :** parcours naturel du sas jusqu'à l'investigation Git ; arrêt avant révision V2, préparation complète de réalisation et exécution. Le prompt proposé pour le tour 09 n'a pas été envoyé.

## 1. Identité, sources et limites de preuve

| Champ | Valeur |
|---|---|
| Dépôt Studio | mcleland147/sfia-workspace |
| Main observé | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Base documentaire distante | 3912bcbf674faa82d3245a6ccbdce1abd3d6554f |
| Branche candidate documentaire | docs/next-openai-studio-convergence-20261126 |
| Branche produit locale rapportée | sfia/next-ml5-integrated-delivery-20261123 ; tip docs 58ca9486 |
| Candidat RECETTE rapporté | e8e6e06961fa0a7224db3badb3b591b8be8046ac |
| BUILD / digest | rpEczSp61evIZ7d6fnIWR / 18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535 |
| Tree web / lane | 03c30e4cdb2dbb443a05a052757b3846199c8d34 / RECETTE :3200, PG :5434, 027 |
| Handoff activation | [9ec930e2 / d3cb079e](https://github.com/mcleland147/sfia-workspace/blob/9ec930e2cbee09f1fcc3384753eafbf64d97251c/sfia-review-handoff/latest-chatgpt-review.md) |
| Dépôt de référence MaintiPlan | mcleland147/chantiers360, main, lecture seule ; lien Git observé sur commit 8c398c494dd918272aab5b2653777c6c21d2e76e |
| Identités d'exécution | projectId, conversationId, turnId, workId, segmentId, providerRequestId : à corréler dans la base et traces locales ; aucun ID inventé |
| Contexte | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |

Sources propriétaires : [SEF](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [SEM](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [DATA-01](../governance/decisions/2026-11-04-r4-architecture-exit.md), [F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md), [ENV-01](../governance/environnements-recette-et-promotions.md), [CONV fonctionnel](convergence-openai-studio/contrat-fonctionnel.md), [CONV technique](convergence-openai-studio/contrat-technique.md), [contrat CA/T/Q/PF](contrat-acceptation-cognition-et-realisation-gouvernee.md), [bilan convergence](convergence-openai-studio/bilan-integre-20261127.md), [manifeste](ml5-recette-cutover-manifest-20261127.md), [cahier R01–R08](cahier-recette-integree-ml5-convergence-20261127.md). Précédents : [Pilotage 360](recette-utilisateur-ml5-pilotage-360-20261124.md), [RoomBooking](recette-utilisateur-ml5-roombooking-20261125.md).

Les captures utilisateur attestent des états affichés et des réponses visibles, pas automatiquement de l'état PG ni du détail des appels. La vidéo dictée est décrite par Morris et a fait l'objet d'une revue conversationnelle ; l'absence de transcription et le retour silencieux sont rapportés, délai d'environ 11 s relevé lors de cette revue, à confirmer par traces. Les captures ne sont pas publiées comme pièces binaires dans ce commit : conserver les originaux dans la conversation et, si disponibles, produire des preuves locales expurgées et reliées lors du diagnostic. Le code du candidat, la branche produit locale, la base et la configuration effective ne sont pas directement accessibles à ChatGPT ; ref candidate e8e6e069 non résolue sur GitHub (422). Handoff distant ≠ vérification autonome du runtime. Aucun secret, audio, DSN ou contenu privé inutile publié.

## 2. Scénario et protocole

MaintiPlan : centraliser les interventions de maintenance d'une entreprise, aujourd'hui suivies par Excel et mails. Environ 20 techniciens / 3 sites, interventions planifiées et urgences ; exemple d'urgence ayant provoqué réaffectation non communiquée, remplacement non habilité puis report invisible. Objectif : savoir qui intervient, où, quand, ce qui a réellement été fait et ce qui reste à faire. Parcours à taille raisonnable, langage naturel, pas de commandes techniques imposées à Nora. Git Chantiers360 rattaché manuellement pour lecture seule. Pas de WEB LIVE ni collecte Admin. Pas d'exécution technique. Pas d'invention d'oracle : une réponse cognitive et un effet métier sont évalués séparément.

## 3. Journal des tours (ordre conversationnel, non chronologie serveur)

| Tour | Intention | Résultat et preuves visibles/rapportées | Verdict local |
|---|---|---|---|
| 01 | Expression du besoin dans le sas | Nora comprend coordination, propose préparer/planifier/rendre compte, challenge le sur-mesure, demande incident et types d'intervention ; aperçu actualisé, pas de création anticipée. Deux questions malgré annonce une à la fois (observation mineure). | Favorable ; sas partiel, MP-01 |
| 02 | Cas métier et nom | Nora transforme 3 ruptures en règles ; propose pilote sur un site, anticipe intersites, reste prudente sur choix d'outil. Base suffisante et bouton création. Aperçu « aucun point ouvert listé » malgré questions métier ; compositeur fixe. | Favorable cognition ; MP-01/02/03 |
| 03 | Création par bouton et trajectoire | Pop-up projet créé / identification cycles / première réponse ; projet MaintiPlan actif, fil sas conservé dans Travail ; proposition conception fonctionnelle puis QA VALIDATION (séquentielle, aucun cycle ouvert). Nora justifie l'essai métier avant outil, ne généralise pas aux 3 sites. Spinner statique selon utilisateur. Micro visible dans Travail. | PASS nominal création/continuité ; MP-04/05, question QA |
| 04 | Clarifier QA et préparer réalisation ; essai dictée | Permission micro acceptée selon Morris ; connexion puis retour au compositeur sans transcription ni erreur visible ; onde prématurée. Demande envoyée au clavier. Nora distingue validation de règles métier et recette de l'application, propose scénarios papier/maquette puis critères d'acceptation. Activité « Orientation du travail — Terminé ». | Cognition favorable ; R06 FAIL MP-06/07 ; MP-03 persiste |
| 05 | GO ouverture + conception métier | Nora reconnaît GO, propose parcours créer/qualifier/affecter/intervenir/clore, quatre arbitrages. Trajectoire non retenue, aucun cycle ouvert, journal sujets et décisions vides. Compositeur Travail auto-extensible démontré ; panneau droit peu utile ; tableau 50/50 peu adapté. | Cognition très bonne, effet ouverture FAIL ; MP-08/09/10, MP-05 enrichi |
| 06 | GO simple ouverture | Nora transmet demande, résultat Studio confirme ; trajectoire 2 cycles dont 1 actif ; journal décision CONCEPTION_FONCTIONNELLE en vigueur ; CKI 02 affiché (aucune méthode retenue, état valide). Acquis/points ouverts vides ; finalité générique ; activité orientation seulement. | PASS ouverture simple, MP-09 non clos ; MP-11/12 ; MP-03/10 persistent |
| 07 | Arbitrages métier + document | Document MaintiPlan — Cadrage fonctionnel initial v1 enregistré, bibliothèque 1 document, visionneuse 50/50, lecture pleine page et sections 1–5, références conversationnelles [1]–[5]. Règles R1–R4 fidèles, limites et scénarios. Journal sujets/points ouverts non alimentés selon Morris ; décisions métier à contrôler en base ; panneau droit lien document et doublons. Vue Projet 0 sujets, 0 décisions applicables, 0 documents en cours, malgré décision cycle en vigueur et v1 disponible. | PASS création/lecture nominales, révision non testée ; MP-13 et enrichissements MP-03/05/08/09/10/11/12 |
| 08 | Investigation Git approfondie | Dépôt attaché ; Nora restitue analyse croisée document/code et cadrage v1, références consultables ; refuse d'assimiler tests substitués ou présence service à preuve. Morris navigue/quitte/revient sans perte du travail ; ~15 min perçues. FinOps travail abouti 909844 tokens, 40 requêtes, 6 segments Sol medium, 1,05 USD estimé. Paramètres globaux absents du rail projet. | Investigation aboutie visible, qualité favorable, couverture et efficience à qualifier ; MP-14/15/16/17 |

### 3.1 Appréciation cognitive argumentée

T01–T02 : Nora ne se contente pas de proposer des écrans ; elle identifie la fiabilité des changements, les habilitations, l'absence de relais et le report invisible. Bonne initiative de confronter un essai à l'existant configurable avant sur-mesure. Appréciation indicative T02 8,3/10 ; gouvernance, référentiels et métriques à approfondir sans surcharger le sas.
T03–T04 : continuité satisfaisante, risque de généralisation intersites identifié. La clarification entre bonne règle métier et application conforme est solide (T04 appréciation 9/10). L'absence de rupture qualitative visible ne prouve ni le modèle utilisé ni sa sélection adaptative.
T05–T06 : parcours commun préventif/urgence, contrôle de l'habilitation à la réaffectation et au démarrage, suspension vs replanification, chevauchement vs planning serré, clôture proportionnée ; question structurante sur l'autorité de déplacement. Distinction cognitive/effet : GO reconnu mais non appliqué T05, appliqué T06. Ne pas déduire une règle « dernière intention gagne » d'un seul cas.
T07 : document de qualité (9/10 indicatif), sépare acquis, règles, recommandations et limites ; transforme les décisions en questions opérationnelles et scénarios testables. Pas de preuve de capitalisation structurée par la seule existence du document.
T08 : distinction rattachement/réservation/réalisation ; contrôle de chevauchement ≠ garantie concurrente ; suivi global ≠ preuve d'intervention ; histoire séparée ≠ atomicité ; recommande autorité explicite, trace du déplacement, blocage habilitations/conflits et conservation du réalisé. Limites explicites : portions bornées, aucun test exécuté, pas de preuve concurrence/transaction. Analyse pertinente mais pas exhaustive ni entièrement vérifiée. Le temps et le volume imposent une analyse causale avant optimisation.

La qualité rédactionnelle et la profondeur restent globalement très satisfaisantes, comparables à une réponse de conception de ChatGPT dans ce contexte ; c'est une appréciation, non une preuve comparative inter-modèles. Exigence exprimée par Morris : une seule Nora, posture stable même si le modèle change ; variation proportionnée de profondeur, pas rupture de qualité. L'expérience est jugée agréable et en progrès par Morris, défauts estimés corrigeables, sans acceptation fonctionnelle globale.

### 3.2 Trace indépendante Git T08

Commit de référence affiché dans un lien : [8c398c494dd918272aab5b2653777c6c21d2e76e](https://github.com/mcleland147/chantiers360/tree/8c398c494dd918272aab5b2653777c6c21d2e76e).
Vérifications ChatGPT en lecture seule : [planning.service.ts](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/planning/planning.service.ts) : assertNoConflict avant create et update, exclusion de l'id au changement, appels historyService.recordEvent ; [planning-conflicts.rules.ts](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/common/rules/planning-conflicts.rules.ts) vérifie intervalle et chevauchement ; [EVOL-002](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/evolutions/EVOL-002-planning-ouvriers.md) contient règles et tests déclarés. [history.service.ts](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/history/history.service.ts) écrit des événements. Pas de test exécuté par ChatGPT.
Vigilance : les fichiers sous backend/src/progress sont des stubs au commit consulté (controller, service, repositories/progress.repository/progress.repository.ts, DTO imbriqué) ; un autre DTO réel existe sous backend/src/projects/dto/create-progress.dto.ts. Ne pas attribuer une implémentation à des noms seuls. Vérifier les chemins/plages effectivement lus et le chemin métier réel avant de conclure à une erreur de Nora. Cette observation est un axe de vérification de fidélité T08, rattaché MP-14/16, pas une hallucination démontrée ni un nouveau MP confirmé.

## 4. Prompts de recette et corrélation à reconstituer

Les blocs ci-dessous reproduisent les demandes préparées dans la conversation. T01 est visible intégralement sur capture ; pour T02/T04/T05/T07/T08 les demandes ont été soumises selon le déroulé et réponses, mais les captures n'exposent pas toujours le texte complet : comparer au message USER persisté pour la chaîne exacte. T03 est un clic, T06 texte exact visible. Ne pas inventer d'horodatages. T09 proposé non exécuté.

### T01 — demande initiale

> J'aimerais qu'on travaille sur une application qui permettrait de mieux gérer les interventions de maintenance technique au sein d'une entreprise.
>
> Aujourd'hui, les responsables techniques utilisent principalement des fichiers Excel et des échanges de mails pour organiser les interventions, affecter les techniciens et suivre l'avancement. Ça génère régulièrement des problèmes de coordination, des conflits de planning et un manque de visibilité sur les interventions réellement réalisées.
>
> J'aimerais centraliser tout ça dans une application, mais je n'ai pas encore une vision précise de ce qu'il faudrait construire. J'aimerais qu'on réfléchisse ensemble à la meilleure approche.

### T02 — cas concret et nom

> Je vais te donner un exemple concret.
>
> La semaine dernière, une intervention préventive était prévue sur un équipement industriel. Le technicien initialement affecté a été réorienté vers une urgence, mais le responsable de maintenance n'a pas été informé du changement.
>
> Un deuxième technicien a finalement été envoyé sur place alors qu'il n'avait pas l'habilitation nécessaire pour intervenir sur cet équipement. L'intervention a donc été reportée, et nous avons découvert deux jours plus tard qu'elle était toujours considérée comme planifiée dans notre fichier Excel.
>
> Nous avons une vingtaine de techniciens répartis sur trois sites. Je souhaite couvrir les interventions planifiées et les urgences, mais je veux que la première version reste relativement simple.
>
> On va appeler ce projet MaintiPlan.
>
> Qu'est-ce que tu retiens de ces éléments et comment nous conseillerais-tu d'avancer ?

### T03 — création

Clic « Créer le projet », puis accès au projet/trajectoire et Travail. Aucun nouveau prompt. Proposition initiale de Nora et activation du contexte projet à rattacher au travail automatique de préparation.

### T04 — clarification QA

> Je trouve ta recommandation de commencer par la conception fonctionnelle pertinente.
>
> En revanche, j'aimerais comprendre un peu mieux la trajectoire que tu proposes. Quand tu parles de validation qualité, est-ce que tu envisages de tester les règles de fonctionnement métier ou de valider une application déjà construite ?
>
> Mon objectif est qu'on avance progressivement jusqu'à disposer d'une solution suffisamment bien définie pour envisager sa réalisation technique.
>
> Comment nous conseillerais-tu d'organiser la suite ?

Essai dictée avant envoi, échoué ; envoi clavier. Corréler session audio séparément sans lui attribuer un workId fictif.

### T05 — GO et demande combinée

> Ton approche me convient. Je retiens ta recommandation de commencer par la conception fonctionnelle et de valider les règles métier avant de préparer la réalisation technique.
>
> On peut donc ouvrir ce premier cycle.
>
> Pour commencer, j'aimerais qu'on définisse ensemble le fonctionnement attendu d'une intervention, de sa création jusqu'à sa clôture, en tenant compte des urgences, des habilitations des techniciens et des éventuels conflits de planning.
>
> Je te laisse me proposer une première approche et identifier les principaux arbitrages que nous devrons faire ensemble.

### T06 — demande simple (texte réellement visible)

> dans un premier tu peux ouvrir le premier cycle

Le message préparé était « Tu peux ouvrir le cycle de conception fonctionnelle. » mais Morris a envoyé le texte ci-dessus. Ne pas confondre les deux dans la recherche de traces.

### T07 — arbitrages et document

> Pour répondre à ta question précédente, je souhaite que le responsable de maintenance soit le seul à pouvoir déplacer une intervention déjà confirmée. En son absence, cette responsabilité revient au responsable d'astreinte.
>
> Je retiens également le principe selon lequel une habilitation obligatoire manquante ou expirée doit bloquer l'affectation d'un technicien. Les conflits réels de planning doivent également être bloquants.
>
> Pour la clôture, je préfère partir sur un compte rendu simple renseigné par le technicien. Nous déterminerons plus tard les interventions qui nécessitent une validation supplémentaire.
>
> Avec tout ce que nous avons défini depuis le début du projet, j'aimerais que tu me prépares un premier document de cadrage fonctionnel de MaintiPlan. Il doit nous permettre de retrouver les éléments acquis, les règles retenues, tes recommandations et les sujets qu'il nous reste à approfondir avant d'envisager la réalisation.

Document observé : « MaintiPlan — Cadrage fonctionnel initial », v1 / drev_056 (identifiant affiché, à résoudre en base). R1 déplacement responsable/astreinte, R2 habilitation obligatoire manquante/expirée bloquante, R3 conflit réel bloquant, R4 compte rendu simple ; modalités de validation supplémentaire ouvertes. Cinq thématiques à approfondir : priorité/responsabilités, habilitations, conflits, changements de planning, clôture. Pas de décision déduite des seules recommandations.

### T08 — investigation

> Avant d'aller plus loin dans la conception fonctionnelle de MaintiPlan, j'aimerais que nous capitalisions sur un projet existant.
>
> J'ai rattaché le dépôt Chantiers360 à notre projet. Il me semble que cette application pourrait contenir des mécanismes intéressants concernant la planification, l'affectation des ressources et le suivi des activités.
>
> J'aimerais que tu réalises une investigation approfondie de ce dépôt, en croisant sa documentation fonctionnelle avec son implémentation technique.
>
> L'objectif est de comprendre :
>
> - Comment Chantiers360 organise la planification et l'affectation des ressources.
> - Comment sont gérés les conflits, les disponibilités, les changements et le suivi des activités.
> - Quels mécanismes pourraient être réutilisés ou adaptés pour MaintiPlan.
> - Quelles sont les limites de cette approche au regard de nos propres règles métier.
>
> Je ne souhaite pas reproduire Chantiers360 à l'identique. Je veux que tu challenges son fonctionnement et que tu me proposes des recommandations pertinentes pour MaintiPlan, en tenant compte de tout ce que nous avons défini jusqu'ici.
>
> Appuie tes conclusions sur les sources réellement consultées et distingue ce qui est documenté de ce qui est effectivement implémenté.
>
> Pour l'instant, ne modifie aucun fichier Git ni notre document de cadrage. Restons dans l'investigation et l'analyse.

### T09 — proposé, NON ENVOYÉ, à reprendre après corrections

> Ton analyse de Chantiers360 me paraît pertinente. Je retiens notamment la distinction entre la réservation d'un créneau et la réalisation effective d'une intervention.
>
> Je souhaite également retenir deux principes supplémentaires : le déplacement d'une intervention confirmée doit conserver une trace de l'auteur, du motif et du créneau initial, et deux affectations incompatibles ne doivent jamais pouvoir être confirmées simultanément.
>
> Peux-tu intégrer ces éléments dans une nouvelle révision de notre document de cadrage fonctionnel MaintiPlan, en conservant les acquis et les règles précédemment définies ?
>
> Inutile de relancer une investigation Git complète. Appuie-toi sur les résultats de ton dernier travail et conserve les références utiles.

Ces deux principes ne sont pas encore des décisions du Pilote dans Studio. Le prompt est une préparation, pas un effet métier.

## 5. Données FinOps observées

Captures 27/11 : réponse T08 (12.28.29 / 12.28.40), FinOps (12.30.06, .18, .26, .33, .40, .47, 12.31.06), filtres (12.32.32, .47) selon noms de fichiers ; heures écran observations 12:15, 12:19, 12:20, 12:23, 12:26, 12:27. Pas une corrélation causale ; confirmer fuseau et horloge serveur. Vue Tous projets / 30 derniers jours : 1,83 USD estimation partielle, 1,4 M tokens partiellement recensés, 2 travaux aboutis, 69/69 requêtes recensées (100 %), « estimation connue 0 % », coût fournisseur non autorisé (attendu). Coût global/travail abouti affiché 0,92 USD : ratio agrégé non coût par mission isolée. Sol 1,83 USD ; Transcribe et Small inconnus. Filtre Small 341 tokens, aucun travail lié : correspond exactement au rebuild d'activation text-embedding-3-small, 2 HTTP, 10 chunks ; vérifier mapping modèle/opération, pas Terra/Luna agrégés par supposition.

| Travail affiché | Projet | Modèle | Tokens | Estimation USD | Statut |
|---|---|---|---:|---:|---|
| Achever le croisement documentation/code Chantiers360… | MaintiPlan | Sol | 909844 | 1,05 | Abouti |
| Livrer un premier document de cadrage… | MaintiPlan | Sol | 50071 | 0,10 | En cours malgré V1 visible |
| Demander l'ouverture du premier cycle… | MaintiPlan | Sol | 24726 | 0,06 | En cours malgré effet confirmé au tour 06 ; corrélation exacte à établir |
| Préciser ce que recouvre la validation qualité… | — | Sol | 33066 | 0,08 | Abouti |

T08 détail : 40 requêtes observées / 6 segments affichés, tous Sol medium ; 909844 tokens (entrée+sortie cumulés), 1,05 USD estimé. Les segments 01/03/04/06/08/09 totalisent 909844 ; 02/05/07 absents de la projection (ne pas déduire segments perdus). 01 128149 / 0,16 ; 03 175621 / 0,19 ; 04 131015 / 0,16 ; 06 154564 / 0,18 ; 08 160779 / 0,18 ; 09 159716 / 0,18. Montants affichés arrondis par segment, pas de facture. Chronologie : lignes nora.generate_reply, Sol, Partiel. ~15 minutes perçues, nombre de fichiers estimé oralement 30–40 non vérifié. Requêtes != fichiers != segments != tours. Tokens cumulés ne signifient ni taille du corpus unique ni coût facturé ; distinguer input, cache, output/reasoning, retries et usages inconnus.

Diagnostic requis : corréler T01–08 (y compris sas et préparation T03, dictée échouée) aux IDs réels et événements, décision d'allocation proposée/admise/appliquée, modèle SDK/provider réel, effort, version politique, overrides et droits fournisseur RECETTE. Vérifier absence Luna/Terra dans filtre et lignes (défaut d'admission, choix, comptabilisation ou affichage ?). Ne pas forcer une alternance ni dégrader la qualité. Décomposer durée wall-clock et chemin critique : attentes, appels IA, Git, reprises, checkpoints, relectures, répétitions contextuelles, retries, DB, temps de restitution ; identifier octets/plages uniques vs répétés, progression réelle et coût par résultat utile. Examiner statuts terminaux, trous de segments, idempotence, couverture et raisons PARTIAL, agrégats, attribution et catalogue de tarifs, sans réécrire l'historique ni déclencher Admin. 120 segments / réévaluation 1M / plafond administratif 2M rapportés ; pas de preuve d'atteinte du seuil, ne pas augmenter pour contourner le problème.

## 6. Registre d'écarts MaintiPlan (17 OPEN ; 1 critique, 11 hautes, 5 moyennes)

Priorités proposées pendant revue, à confirmer pour le lot de corrections. Regrouper les causes communes, conserver les IDs et oracles.

| ID | Priorité | Observé | Attendu / oracle de rejeu | Domaine / tour |
|---|---|---|---|---|
| MP-01 | Haute | Micro absent sas | Dictée accessible dès expression du besoin, droits/usage avant projet et isolation corrects | Audio/compositeur T01–02 |
| MP-02 | Moyenne | Sas fixe malgré multilignes, Travail extensible | Croissance vers haut jusqu'à max puis scroll, même comportement utile entre surfaces | Compositeur T02/05 |
| MP-03 | Haute | Points ouverts absents aperçu sas, Travail et trajectoire malgré questions et document | Projection fiable des connaissances pertinentes ; vérifier contrat d'utilité, supprimer rubrique si arbitrée inutile plutôt que fabriquer des données | D4/projections T02–07 |
| MP-04 | Moyenne | Spinner préparation statique selon utilisateur | Animation durant étapes 2/3 en cours, arrêt terminal, reduced-motion et état explicite | UX sas T03 |
| MP-05 | Haute | Conversation dense, interlignes/paragraphes serrés, tableau mal proportionné, règles concaténées en une puce | Typo, espacements, largeur, Markdown/tableaux adaptés ; structure naturelle proportionnée, comparer rendu document | UX Nora T03–07 |
| MP-06 | Critique | Micro autorisé puis connexion/retour silencieux, aucune transcription | Session LIVE réelle, FR progressive, stop→brouillon, erreur explicite et préservation ; vérifier transport/protocole/admission/usage sans spéculation | Audio T04 |
| MP-07 | Moyenne | Onde partielle prématurée pendant connexion | États connexion/silence/parole distincts, onde issue du son réel, pas de signal fictif | Audio UX T04 |
| MP-08 | Haute | Rail droit Contrats techniques hors cible selon Morris, Continuité sans utilité claire, doublons navigation et lien document peu structuré | En bref + cycle ; retirer contrat permanent, qualifier Continuité ; 4–5 objets récents créés/consultés (docs, Git, exécutions, preuves), pas liste de navigation, droits et dédoublonnage ; activité auto Nora ne sature pas | UX T05/07 |
| MP-09 | Haute | GO + conception reconnu mais pas appliqué T05, GO seul réussi T06 ; vérifier aussi décisions métier T07 | Toutes intentions qualifiées, ordonnées, effets sous autorité D6 et domaines propriétaires ; réponse explicite en cas de refus, pas de répétition forcée ; test combiné et simple, idempotence | SEM/D3/D5/D6 T05–07 |
| MP-10 | Haute | Sujets/acquis/points ouverts du journal vides malgré matière significative et document structuré | Capitalisation progressive sélective, source/provenance, faits vs propositions, pas de doublon ; distinguer génération, persistence et projection ; recherche et reprise | D4 T05–07 |
| MP-11 | Haute | « Je transmets à Studio », bloc Résultat Studio « la ouverture de cycle », résultat d'enregistrement technique dans réponse ; activité trop générique | Nora interlocutrice unique, résultat confirmé restitué naturellement, détail réel des opérations dans activité (pas chaîne privée), refus explicites, libellés français corrects ; vérifier même articulation sur docs/cycles/Git | D3/activité UX T06–08 |
| MP-12 | Moyenne | Finalité métier à préciser + enum CONCEPTION_FONCTIONNELLE malgré finalité proposée ; ACTIVE/QA VALIDATION visibles | Conserver finalité contextualisée à ouverture, libellés métier et projection cohérente Projet/Trajectoire/Travail | D5 UX T06–07 |
| MP-13 | Haute | Vue Projet 0 décisions applicables malgré décision en vigueur ; 0 documents en cours malgré V1 | Compteurs dérivés de domaines propriétaires, sémantique explicite : 0 rédaction peut être exact, préférer documents disponibles si objectif activité ; vérifier scope des décisions, actualisation | Projections T07 |
| MP-14 | Haute | ~15 min T08, 909844 tokens/40 requêtes, lectures bornées | Diagnostic temps/volume/qualité, preuve de lectures exactes et réutilisation, éliminer travail redondant justifié sans seuil arbitraire | D3/D9/OBS T08 |
| MP-15 | Haute | Sol seul visible sur générations, Terra/Luna absents | Prouver allocation effective, raisons de maintien/changement, admission modèle/effort, cohérence FinOps ; pas alternance obligatoire | Allocation T08 |
| MP-16 | Haute | FinOps PARTIAL, 100 % couverture vs 0 % estimation connue, travaux en cours après effets, attribution parfois vide, chronologie répétitive | Corrélation et finalisation fiables, inconnues expliquées, agrégats sémantiques, détail par segment extensible, usages réels/substitués distincts ; Admin OFF normal | FinOps/OBS T08 |
| MP-17 | Moyenne | Roue paramètres présente portefeuille absente projet | Accès global intégrations/consommation sur surfaces concernées ; navigation locale adaptée, fondation commune | Shell UX T08 |

Observations secondaires : une vs deux questions T01 ; libellé QA ambigu clarifié par Nora T04 ; méthodes non retenues état valide ; trois angles CKI affichés avec descriptions tronquées sur capture (vérifier UX si gêne, ne pas ajouter un MP sans preuve) ; références [1]–[5] V1 lisibles mais liens/provenance à éprouver ; activité détaillée dépliable T07/T08 non examinée complètement. Aucune clôture MP. Les 17 MP ne remplacent ni les 30 UAT Pilotage360 ni les 31 RB ; rechercher régressions et causes communes, pas fusion destructive des historiques.

## 7. Couverture et réserves au point d'arrêt

| Cahier R | État observé |
|---|---|
| R01 | PARTIAL : portefeuille accessible, navigation/reprise T08 ; données héritées non rejouées exhaustivement |
| R02 | PASS nominal création, réserves MP-01/02/03/04 |
| R03 | PARTIAL : cognition et continuité de fil, ouverture simple réussie, multi-intentions/knowledge/activité déficientes ; CKI visible, mobilisation effective non prouvée |
| R04 | PASS nominal création et lecture V1, PARTIAL global : versions/historique/origine/révision ciblée non exercés |
| R05 | PARTIAL : Git attaché et investigation visible ; exactitude et couverture sources, recherche hybride/Decisions/Vision/PDF et droits/revocation non qualifiés utilisateur |
| R06 | FAIL nominal LIVE, voie clavier préservée ; scénarios annulation, successives, permissions négatives, mobile/visionneuse non qualifiés |
| R07 | PARTIAL : estimations et usages visibles, allocation/mesure/finalisation à diagnostiquer ; comparaison Admin hors scope |
| R08 | PARTIAL : plusieurs écarts UX, F2 mobile/visionneuse non mesurés ; shell et panneau à qualifier |

CONV-F01/02/04/05/08/11/12/13/25/26/31–34 : preuves partielles ou échec selon observations ; F03 autorité cycle simple observée, non preuve complète ; F06/07/14/21–24 non requalifiés exhaustivement ; F15 WEB OFF hors campagne. CA-01/03/09/10 partiels ; CA-02 WEB différé, CA-04–08 réalisation non exercée dans MaintiPlan. Aucun score global des exigences ni ADOPTED. Les seuils de la politique sont des protections opérationnelles, pas un budget du Pilote.

## 8. Diagnostic suivant — proposition de regroupement, non mandat Cursor

A. Conduite et mobilisation D3/SEM (MP-09/11/14/15), une chaîne commune, inspecter qualification multi-intentions, orchestration, effets propriétaires, checkpoints, sources, allocation, erreurs/reprises, asynchronisme et coût par résultat.
B. D4/D5/D6 et projections (MP-03/10/12/13), vérifier capitalisation autonome après échanges et production, écritures transactionnelles, décision/autorité, lecture par surfaces, source de vérité et état terminal. MP-09 et MP-11 transverses. Ne pas demander à Nora de remplir des compteurs.
C. Audio LIVE et compositeur (MP-01/02/06/07), contrat Figma existant, droits sas/projet, attribution hors projet, transport et erreurs, aucun pipeline concurrent. Vérifier branche/code, logs existants puis GO LIVE séparé si indispensable.
D. UX transverse (MP-04/05/08/11/12/17), mutualisation raisonnée compositeur/rail, distinction conversation/activité/journal, panneau objets récents borné et Figma L0/L1/L2/F2. Aucun choix d'architecture imposé par ce PV.
E. OBS/FinOps (MP-14/15/16), chaîne causale tour→travail→segment→requête→effet→projection, preuve primaire, couverture, terminaux, coûts et droits. Conserver données historiques.

Diagnostic d'abord sur code et preuves existantes, lecture locale RECETTE sécurisée (pas de mutation ni nouvelle émission), puis proposition d'un macro-lot cohérent ou scission justifiée par risque/dépendance/gate. Préserver le candidat figé et MaintiPlan comme témoin ; ne pas effacer/rejouer massivement ; correction en DEV sous GO distinct et nouveau candidat RECETTE sous ENV-01. Vérifier précédent historique pour non-régression. Toute correction de fonctionnement synchronise propriétaire docs/as-built/tests. Rejeu ciblé des 17 MP, puis reprise T09 et parcours jusqu'au seuil de réalisation (pas exécution), révision V1/V2, recherche/Vision, historique, FinOps, décision du Pilote. Livrable diagnostic : matrice 8 tours/17 MP, causalité ou preuves manquantes, code exact et contrats, priorités, dépendances/exit, stratégie de tests et mandat proposé. Ne pas prononcer de racine sans preuve.

## 9. Arrêt et décision

Morris arrête volontairement au tour 08, demande capitalisation complète et publication documentaire sur Git, puis nouveau chat pour diagnostic Cursor. Recette non rejetée globalement mais **non acceptée**, suspendue jusqu'au traitement des anomalies. Pas de nouvelle exécution dans ce chat. Préserver qualité cognitive et expérience positive, ne pas sacrifier l'intelligence à une baisse de coûts. Pas de nouvelle collecte Admin, WEB LIVE, push projet, PR, merge, STABLE ou R6. Réserves environnement : organisation/projet OpenAI non vérifiés, localhost PG trust, historique cross-lane potentiel, Handoffs antérieurs partiellement régularisés ; ne pas réexposer le secret incident. Le document est un point de reprise, pas une certification runtime.
