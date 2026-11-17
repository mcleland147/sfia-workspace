# SFIA Studio Next — Contrat technique intégré de réalisation : Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Périmètre | R5 / ML4D — Ensemble 05, surface **Travail avec Nora** |
| Version | **v0.2 — 17 novembre 2026 : consolidation des arbitrages Morris M1–M5 après qualification technique Cursor** |
| Statut | **CANDIDATE TECHNICAL CONTRACT — DOCUMENTED** ; **UX VALIDATED SPEC** et **orientations M1–M5 VALIDATED BY MORRIS**. Leur validation ne vaut ni approbation du schéma physique/API, ni architecture entièrement adoptée, ni GO Delivery, ni preuve runtime |
| Résultat | Transformer les comportements UX validés et les variantes Figma en un **contrat de réalisation fonctionnelle et technique intégré**, sans nouveau moteur concurrent |
| Décision d'écriture | GO Morris du 17/11/2026 pour publier le contrat candidat ; **nouveau GO Morris pour intégrer directement M1–M5 dans les deux documents ML4D de la branche candidate**. Mandat documentaire borné : aucun code Cursor, changement de schéma, PR, merge, release ou promotion |
| Référentiel / baseline vérifiés | `mcleland147/sfia-workspace` ; `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Branche documentaire | `docs/next-ml4d-registre-revues-20261116` (candidate, distincte de `main`) |
| Git local / RECETTE courante | **NON OBSERVÉS directement par ChatGPT**. La [qualification Cursor](https://github.com/mcleland147/sfia-workspace/blob/1f93c421de3263cfe9f38b2d2ff94aa0862b2900/sfia-review-handoff/latest-chatgpt-review.md) **rapporte** un HEAD produit local `984d77a3`, une RECETTE `:3200` / build `3LzvYPTQc-Km7St6nF97r`, et aucun fichier produit modifié ; ces faits ne remplacent pas un contrôle local au futur Delivery |
| Autorités | Morris : décisions produit, architecture, gates et Git ; ChatGPT : conception/revue ; Cursor : code et tests sous mandat SFIA v2.6 distinct |
| Statut global | **Ensemble 05 EN REVUE, non implémenté conformément à la nouvelle cible, non réceptionné ; Gate C OPEN** |

## 1. Sources et portée normative

- [Conception UX intégrée v0.7 — Sujets 01 à 05 et jointure §13](conception-ux-travail-avec-nora.md) : **référence UX validée**, 88 scénarios candidats, non exécutés dans le cadre du présent contrat.
- [Registre central ML4D](registre-central-revues.md) : arbitrages, observations et état vivant sur la branche candidate.
- [Figma Next — page 05, Travail avec Nora (16 variantes)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-38) : **cible visuelle conçue et approuvée en conversation**, dont alignement inférieur du compositeur avec le panneau de droite ; maquettes natives **ne valant pas preuve runtime**. Exemples : [fil](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-39), [réponse composite](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=701-105), [compositeur](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=701-191), [visionneuse 50/50](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=701-363).
- [SEF v0.2](../../governance/SEF.md) §§4–6 et §10 : macro-lot cohérent, preuves graduées, autonomie documentaire, gates.
- [Roadmap Next](../../governance/roadmap.md) et [décision ML4C/ML4D du 11 novembre 2026](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) : trajectoire, frontières, F1/F2 et Gate C. Les statuts de la roadmap `main` restent historiques par rapport aux arbitrages candidate non mergés.
- Contrats fonctionnels : [D3](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D4](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), [D6](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [D7](../../conception-fonctionnelle/realisation-operationnelle-gouvernee.md), [D8](../../conception-fonctionnelle/resultats-et-preuves.md) et [D9](../../conception-fonctionnelle/integration-git-gouvernee.md).
- [Architecture R4](../../architecture-technique/cadrage-r4.md) et [observabilité transverse](../../architecture-technique/contrat-observabilite-transverse.md) : identités, effets, provenance, interruption, reprise.
- Code et tests consultés sur **`main`**, distincts d'un candidat local non observé : `web/src/app/projects/[projectId]/page.tsx`, `web/src/components/figma/NoraConversation.tsx`, `DocumentSurfaces.tsx`, `SafeMarkdown.tsx`, `tokens.css`, `web/src/domains/conversation/`, `web/src/domains/pilotage/`, API messages et tests ML4C ciblés.

**Précédence :** Git/preuves observées > décisions Morris > contrats fonctionnels/UX validés > ce **contrat technique candidat** > hypothèses. Une API, une table, un transport ou un choix de décomposition décrit comme **candidat** ci-dessous n'est **pas une décision d'architecture**. Toute contradiction découverte lors du pré-check local de Cursor est remontée, pas masquée par une modification de périmètre.

### 1.1. Qualification technique et arbitrages Morris M1–M5 (17/11/2026)

**Source :** [Review Pack Full — qualification technique de l'Ensemble 05, handoff Git vérifié](https://github.com/mcleland147/sfia-workspace/blob/1f93c421de3263cfe9f38b2d2ff94aa0862b2900/sfia-review-handoff/latest-chatgpt-review.md), verdict **TECHNICAL QUALIFICATION READY WITH RESERVES**, analyse en lecture seule du candidat local déclaré `984d77a3`. **Morris a ensuite explicitement validé chacune des cinq orientations M1–M5 en conversation.** Cette validation est **bornée aux orientations ci-dessous** et ne valide pas les détails de schéma, d'API ou de transport non qualifiés.

| ID | Orientation VALIDATED BY MORRIS | Portée et limites de réalisation |
|---|---|---|
| **M1 — Réponses structurées D3** | **Projection structurée, versionnée et sous autorité unique D3** : contenus sûrs, références canoniques, choix typés, finalisation, identité/durée de vie. | Réutiliser d'abord le stockage existant si compatible et prouvé, y compris au rechargement ; ni parsing Markdown autorisant une action, ni nouvelle table/migration par défaut. Le schéma physique exact reste candidat. |
| **M2 — Activité / progression V1** | **Réponse textuelle final-only acceptable en V1**, **activité visible, animée, vraie et contextualisée** à partir des faits réellement observables. | Pas de SSE/streaming de tokens imposé, mais pas de bandeau statique renommé en « activité détaillée prouvée » ; si aucun événement concret n'est disponible, attente honnête et réserve explicite. **Réponse textuelle progressive = cible à réexaminer**, avec preuve et exit, sans réduction silencieuse du contrat UX. |
| **M3 — Brouillon** | **`sessionStorage`**, partitionné par Pilote + projet dans l'onglet courant (et lane si nécessaire à l'isolation). | Navigation et rafraîchissement dans cet onglet ; contrôle des droits à la restauration, purge au logout/révocation/changement d'identité, protection contre ACK tardif ; **aucune garantie après fermeture de l'onglet ni synchronisation interappareils**. |
| **M4 — Visionneuse** | **État UI local à Travail**, visionneuse intégrée ; **aucune route/URL/deep-link spécifique** à son état d'ouverture. | Référence et version D4/D9 conservées, lecture seule, 50/50 hors rail et mode agrandi ; « Ouvrir dans Documents » reste une vraie navigation canonique sous droits. |
| **M5 — Persistance/migration** | **Aucune migration de données par défaut en V1** ; réutiliser la persistance existante si elle remplit M1 et les invariants. | **STOP + analyse d'impact + arbitrage Morris distinct** si schéma/table/migration indispensable ; interdiction de contournement fragile pour éviter une migration nécessaire. |

**Conséquence delivery :** M1–M5 **ne sont plus des arbitrages de principe ouverts**. Restent ouverts les détails de réalisation, la compatibilité effective au HEAD local, la disponibilité des événements de consultation, les tests BROWSER/LIVE/REAL et les gates. **GO documentaire ≠ GO Delivery** ; un seul macro-lot code/tests/docs/visuel sous contrat SFIA v2.6 et autorisation Morris séparée.

## 2. Capacité, frontières et contrats communs

**Résultat Pilote :** utiliser un seul fil Nora par contexte autorisé, recevoir des réponses adaptées et fidèles, rédiger sans perdre son brouillon, constater les activités réelles, reprendre sans doublon et lire rapidement une ressource dans Travail sans transformer cette vue en éditeur.

**IN :** comportement du fil, scroll, restitution adaptative, interactions conversationnelles, compositeur, brouillon par projet/Pilote et navigateur, activités contextuelles et réponse progressive si les données fiables le permettent, erreurs/reprise, visionneuse lecture seule 50/50, responsive et accessibilité ; interfaces nécessaires avec propriétaires D3–D9 ; tests et preuves Figma↔runtime.

**OUT :** autre moteur Nora, double registre documentaire, machine d'état universelle de workflow, nouveaux droits Git, nouvelle décision HumanDecision implicite, nouveau moteur d'effets/retry, édition dans Travail, pièces jointes et dictée effectivement actives sans capacité validée, fonctionnalités ML5 non construites, migration ou bascule d'architecture par inertie.

**Invariants transversaux :**

1. **Une autorité par fait.** D3 possède la conversation, D4 les documents et leur version, D6 les actes humains, D7 les tentatives/retours techniques, D8 la qualification probatoire, D9 les ressources et droits Git.
2. **Identités non fusionnées.** Tour Pilote, génération Nora, opération, commande idempotente, tentative fournisseur, événement d'activité, ressource/version et résultat probatoire ont des portées distinctes.
3. **Pas de vérité inventée.** En cours ≠ terminé ; tour transmis ≠ réponse finalisée ; ressource citée ≠ ressource accessible ; effet tenté ≠ effet appliqué ; étape de consultation ≠ conclusion D8.
4. **Une surface conversationnelle.** Visionneuse, activité, liens et choix ne créent pas de fil, de décision ou d'historique métier parallèles.
5. **Pas de perte de saisie.** Le brouillon local modifié après un départ d'envoi survit à un ACK tardif ; le déclenchement d'un choix n'utilise ni n'efface le brouillon indépendant.
6. **Droits courants.** Le projet, le Pilote et la ressource sont requalifiés lors des accès et actions ; la présence d'un texte en cache ne crée aucune permission.
7. **Pas de capacité affichée fictivement.** Une action indisponible n'est pas présentée comme fonctionnelle ; le rendu Figma est un contrat visuel, pas une certification de service.

## 3. Carte du code observé et écarts

| Capacité | Observé dans `main@997d4c4e` | Cible / écart à qualifier |
|---|---|---|
| Fil | `NoraConversation.tsx` rend un tableau de messages et un conteneur scrollable | UX-002 : dernier message par défaut, ancrage de relecture, signal de nouveautés, navigation et visionneuse |
| Restitution | `SafeMarkdown.tsx` prend en charge texte, titres, listes, tableaux et liens sécurisés | Choix contextuels typés, durée de vie, réponses composites et références de lecture sans commande autoritaire dérivée du Markdown |
| Compositeur | `draft` est un `useState` local dans la page projet, `textarea` et `Envoyer` existants | Saisie compacte auto-expand, clavier desktop/mobile, persistance locale sous droits, isolation et anti-ACK tardif |
| Activité | `noraActivity: idle/preparing/error`, bande statique ; l'API messages POST renvoie du JSON final | Activités animées et événements réels liés au tour, historique utile, réponse progressive fiable si supportable |
| Génération | `nora-adapter.ts` appelle un flux fournisseur mais **draine** les fragments structurés sans les exposer comme prose progressive ; qualification validée après réception | Projeter des états et fragments **validés** vers l'UI sans diffuser JSON brut de qualification ou raisonnement privé |
| Tentative/reprise | `clientTurnKey`, `clientCommandKey`, `conversation/turn-command.ts`, `pilotage/command-runner.ts`, politique `s05-pending-policy.ts` et réconciliation existants | UI véridique et sûre : envoi échoué vs inconnu, gel des choix, maintien du brouillon, indépendance cognitive |
| Documents | `DocumentLibrary`/`DocumentInspector` existent sur `surface=document` distincte ; ouverture d'un document bascule la surface | Lecture rapide **dans** Travail, visionneuse unique, 50/50, agrandissement, retour, sans reprendre l'édition |
| CSS | `tokens.css` contient une grille Travail et un compositeur sticky ; largeur/hauteur et responsive actuels distincts de Figma 05 | Calage visuel, rail inchangé, compositeur aligné sur bas du panneau droit, hauteur libérée pour fil |
| Tests | `ml4c-long-thread-composer.spec.ts`, `ml4c-s05-independent-pending.spec.ts`, `ml4c-s05-real-api.spec.ts`, tests PG et unitaires couvrent des parties de la continuité | Les nouvelles interactions, le flux visible et la visionneuse 50/50 **ne sont pas prouvés** par ces tests |

**Attention :** ce diagnostic concerne les fichiers Git `main` examinés, non un audit d'un environnement RECETTE actuellement servi. Le code peut avoir évolué hors de la baseline consultée ; Cursor doit reprendre le pré-check avant toute exécution.

## 4. CT-01 — Fil conversationnel et continuité

**Propriétaire :** D3 (conversation) ; présentation dans Travail. **Référence :** UX-002.

- Conserver l'ordre et les identifiants canoniques des messages ; ne pas créer de nouvelle session conversationnelle au changement de disposition.
- À l'entrée réelle dans Travail, retour depuis une autre surface, rafraîchissement et reconnexion : position au **dernier message** par défaut.
- En relecture volontaire de messages anciens, ne pas forcer le défilement au cours de la réponse Nora ; exposer une commande discrète pour rejoindre les nouveautés.
- Un clic sur un choix réellement transmis ou un message envoyé suit l'envoi volontaire ; un clic de **lecture de source** ne constitue ni un envoi ni une réinitialisation de scroll.
- L'ouverture, le remplacement, l'agrandissement et la fermeture d'une visionneuse interne **ne valent pas navigation** ; préserver autant que possible l'ancrage de lecture, y compris lorsque le texte se recompose à une autre largeur.
- La navigation explicite **Documents → Travail** reste une vraie transition : retour au dernier échange.
- Sur fil long, gérer le défilement et l'accès à l'historique avec les capacités existantes ; ne pas imposer une virtualisation ou un second cache sans mesure justifiant l'extension.

**Acceptation :** scénario UX002-A01..09 et parcours croisés UX-CROSS-03/04/05/07/09, sous contrôle navigateur de la position réellement affichée.

## 5. CT-02 — Réponses Nora, contenu structuré et interactions

**Propriétaire :** D3 ; liens et statut des objets via leurs propriétaires D4/D8/D9. **Référence :** UX-007.

- Autoriser les formes pertinentes et proportionnées : texte simple, titres, listes, comparaison, tableau, références, informations de preuve et choix contextuels, sans gabarit universel de réponse.
- Traiter le **contenu Nora** comme contenu rendu sûr, et les **commandes interactives** comme des affordances typées issues d'une capacité réellement admise ; ne jamais analyser le HTML ou le Markdown pour déclencher un effet métier.
- Rattacher chaque groupe d'options au **message Nora canonique** et à son état de finalisation ; les choix ne sont actionnables qu'après finalisation confirmée.
- Au clic sur un choix, préparer/transmettre **un tour Pilote distinct**, sans écraser ni envoyer le brouillon du compositeur.
- Geler le groupe dès la première tentative ; rendre les choix définitivement inactifs **uniquement après transmission effective confirmée du nouveau tour**. En état inconnu, conserver gel et identité jusqu'à réconciliation ; ne pas autoriser de répétition aveugle.
- Les liens historiques de lecture conservent leur comportement de consultation sous droits actuels même après expiration des choix conversationnels.
- La réponse progressive, lorsqu'elle est effectivement disponible, appartient au **même tour Nora** ; ne pas multiplier les messages pour chaque fragment et ne pas montrer de JSON de qualification.

**M1 — orientation VALIDATED BY MORRIS :** une **projection D3 structurée et versionnée** distinguant au minimum `messageId`, `turnId`, état de finalisation, blocs/contenus sûrs, références avec identité/version de ressource et actions contextuelles liées à ce tour. Réutiliser prioritairement `resultJson`/charges utiles existantes **si** le code et les tests confirment une persistance/relecture sûre, sans changer l'autorité D3. **Le format exact, les signatures API et le schéma physique ne sont pas adoptés** ; si une évolution durable devient indispensable, appliquer M5/STOP.

**Acceptation :** UX-NORA-01..25 et UX-CROSS-01/02/04/05 ; réponse composée persistée/rechargée identique sur les parties officiellement acquises ; double clic/ACK perdu sans deux tours créés.

## 6. CT-03 — Compositeur et brouillon

**Propriétaire UI :** Travail ; autorité d'envoi : D3. **Référence :** UX-008 et Figma 05, y compris ajustement inférieur validé.

- Une ligne compacte initiale, commandes `+` réservée à gauche, saisie centrale, envoi à droite ; **ni fausse pièce jointe ni microphone opérationnel**.
- Croissance vers le haut avec le contenu, jusqu'à un plafond responsive ; ensuite scroll **interne** du champ, puis réduction de hauteur lorsque le texte diminue.
- En desktop : **Entrée** envoie, **Maj+Entrée** insère un saut de ligne, aucune soumission pendant composition IME.
- En mobile : Retour insère un saut de ligne ; envoi par commande explicite ; message vide ou admission interdite = envoi inactif.
- Conserver un brouillon non envoyé en **`sessionStorage` dans l'onglet courant**, par **identité Pilote + projet** (et lane lorsque nécessaire pour éviter les croisements DEV/RECETTE), avec requalification des droits à la restauration ; navigation et rafraîchissement conservés, aucune synchronisation interappareils.
- Le clic sur une option Nora conserve intégralement le brouillon libre. Un ACK tardif ne peut effacer que la **version effectivement envoyée** et ne doit jamais effacer une modification ultérieure.
- Pendant attente ou `UNKNOWN`, le texte reste éditable ; l'**envoi** dépend de la qualification serveur de l'indépendance/risque, et non d'un filtre lexical naïf local.
- Alignement visuel : en desktop, **bord inférieur du compositeur aligné avec le bord inférieur de « En bref » ou de la visionneuse**, avec espace du fil augmenté ; en mobile, compositeur placé au bas de la zone utile. Le fil et la visionneuse restent indépendamment scrollables.

**M3 — orientation VALIDATED BY MORRIS :** `sessionStorage`, et non `localStorage` ou stockage serveur pour la V1. Définir une clé sans confusion Pilote/projet/lane, vérifier les droits actuels et purger au logout, à la révocation et au changement d'identité. **La fermeture de l'onglet peut faire perdre le brouillon** ; la récupération interonglets/interappareils n'est pas promise. Prévenir toute purge sur ACK tardif en ne nettoyant que la version effectivement envoyée. La politique de purge concrète et ses tests restent à implémenter et à prouver.

**Acceptation :** UX-COMP-01..13, UX-CROSS-01/02/08/09, essais IME, raccourcis clavier, mobile, refresh, changement d'utilisateur et réponse tardive.

## 7. CT-04 — Activité, réponse progressive et historique

**Propriétaires :** D3 pour l'activité cognitive ; faits externes fournis par D4/D7/D9 et diagnostic via observabilité existante ; verdicts D8 demeurent indépendants. **Référence :** UX-009.

**Gap majeur observé :** le backend dispose de traces et peut recevoir un flux du fournisseur, mais **ne livre pas aujourd'hui au navigateur des fragments textuels progressifs fiables** : la sortie structurée est drainée pour éviter d'exposer le JSON de qualification. Le bandeau `Nora prépare une réponse…` est statique.

- Présenter un début d'attente vivant et honnête (« Nora réfléchit… » ou indication équivalente) **uniquement lorsqu'une attente est réelle**.
- Présenter une étape contextualisée (« consultation de sources Git », etc.) **uniquement si un événement de l'opération concernée en confirme l'exécution** ; distinguer commencée, achevée, échouée, interrompue et inconnue.
- Ne jamais inventer pourcentage, temps restant, outil utilisé, complétude, raisonnement interne ni résultat.
- Les événements affichables sont rattachés à un tour/génération, à une source effective et à un ordre fiable ; l'historique utile peut être replié après finalisation.
- **M2 validé : en V1, une réponse textuelle finale est acceptable**, sans diffusion de fragments imposée. L'attente doit néanmoins être visible et animée, et **les étapes contextualisées ne sont affichées que si des événements réels les attestent**. Lorsqu'un transport sûr sera effectivement supporté, la restitution progressive continuera de viser **une seule réponse Nora évolutive** ; aucun JSON structurel brut, token de qualification ou raisonnement privé ne doit fuiter.
- Ne pas rendre les choix contextuels actifs avant finalisation ; conserver une réponse partielle **seulement si ces fragments ont réellement été reçus et peuvent être présentés sans confusion**.
- Corréler les activités avec l'instrumentation existante, sans convertir les logs techniques en nouveau registre métier ou exposer secrets/chaîne de pensée.

**M2 — limite V1 et exit :** le mode final-only **n'autorise pas** à qualifier de PASS un oracle de diffusion textuelle progressive. Pour l'activité contextualisée, qualifier les événements réellement disponibles et leur provenance, l'actualisation possible au navigateur et leur rétention : si aucune étape fiable n'est observable, signaler la limite avec une attente générique honnête. **Revoir la restitution textuelle progressive** lorsqu'un flux publiable fiable et une stratégie de reprise sûre seront démontrés, ou sous arbitrage Morris si une infrastructure structurante est requise. SSE, HTTP progressif, polling et persistance additionnelle **ne sont pas adoptés** par M2.

**Acceptation :** UX-ACT-01..16, UX-CROSS-03/04/07/10 ; contrôles BROWSER avec événements effectivement produits, puis LIVE si le contrat le nécessite, sans transformer des fixtures en preuve fournisseur.

## 8. CT-05 — Erreurs, réconciliation et admission sûre

**Propriétaires :** D3 (tour Nora), D7 (tentative/effet), D6 (autorité), D8 (preuve), D9 (source Git). **Référence :** UX-009 et jointure UX-CROSS.

| Situation | Présentation et contrat de reprise |
|---|---|
| Message **confirmé non envoyé** | État local au tour/intention, texte préservé ; réessai uniquement si non-transmission établie et mécanisme sûr |
| Envoi dont l'ACK est perdu / réception incertaine | Gel de la même intention ; réconciliation avec identité durable avant nouveau dispatch ; pas de message fictif |
| Réponse Nora interrompue | Conserver les fragments réellement disponibles et identifiables ; statut partiel ; pas de choix final affiché comme valide |
| Consultation D4/Git impossible | Message près de la ressource/activité concernée ; pas d'aperçu fictif |
| Opération métier `UNKNOWN` | Vérifier la commande/tentative chez son propriétaire ; ne pas rejouer un effet potentiellement effectué |
| Session expirée ou accès révoqué | Requalification identité et droits, pas de texte local/résultat restauré au mauvais Pilote |
| Nouvelle demande cognitive réellement indépendante | Conserver le pending antérieur et laisser D3 qualifier l'admission ; aucune reprise automatique d'un effet dépendant |

**Réutilisation obligatoire :** `clientTurnKey`, `clientCommandKey`, `conversation/turn-command.ts`, `s05-pending-policy.ts`, réconciliation et command runner existants, après qualification de leur portée. **Aucun second automate de retry/idempotence/commande dans l'UI**.

**Acceptation :** UX-ACT et UX-CROSS-02/08/10, doubles clics, timeout fournisseur, ACK perdu, retour tardif, réauthentification et vérifications indépendantes des effets.

## 9. CT-06 — Visionneuse contextuelle lecture seule

**Propriétaire UI :** Travail ; source des documents : D4 ; sources Git : D9 ; preuve éventuelle : D8. **Référence :** UX-010 et Figma 05.

| Mode | Obligation |
|---|---|
| Travail normal | Rail gauche inchangé, conversation + compositeur, panneau « En bref » |
| Ouverture | « En bref » **remplacé** ; partage de principe **50/50 de la zone utile hors rail** entre conversation/compositeur et visionneuse |
| Partagé | Conversation toujours utilisable ; scroll de visionneuse indépendant ; pas de seconde conversation |
| Agrandissement | Visionneuse sur **toute la zone utile à droite du rail** ; fil et brouillon masqués mais **non détruits** |
| Réduction | Retour au partage avec **même ressource/version et point de lecture** |
| Fermeture | « En bref » et largeur normale restaurés ; aucune mutation documentaire ou action Nora |
| Nouvelle ressource | Remplacement du contenu dans **une seule visionneuse**, sans nouvel onglet ni panneau |
| Retour simple | Historique de consultation local uniquement s'il est réellement connu, sans fabriquer un historique d'objets |
| Mobile/étroit | Lecture utilisant l'espace disponible ; pas de 50/50 illisible ; issue claire vers Travail |

- Rail projet de référence : **246 CSS px** selon le contrat applicable ; ne pas assimiler les quatre rails hérités à une largeur unique sans contexte.
- Consultation document Nora : identifiant canonique, version, titre et statut D4 ; navigation **« Ouvrir dans Documents »** seulement si cible et droits établis.
- Aperçu Git : consultation réellement autorisée/obtenue, provenance dépôt/ref/commit ou version disponible ; sinon lien externe réel ou indisponibilité explicite.
- La visionneuse ne produit ni version, ni révision, ni `HumanDecision`, ni exécution, ni publication Git. Sélection d'un extrait → « Demander à Nora » et édition dans Travail **hors périmètre** ; Ensemble 06 porte l'édition/gestion documentaire.
- Les réflows de l'inspection n'entraînent **aucun scroll imposé du fil** ; la vraie navigation vers Documents puis retour applique UX-002.
- Conserver contraste, clavier/focus, commande Agrandir/Réduire/Fermer, zoom et réduction des animations.
- **M4 — orientation VALIDATED BY MORRIS :** gérer les modes d'ouverture/partage/agrandissement/fermeture **dans l'état local de Travail** ; **aucun deep-link, paramètre `viewer=` ni route dédiée** à l'état interne. Les liens directs vers les ressources officielles et la navigation explicite « Ouvrir dans Documents » restent possibles via leurs propriétaires.

**Acceptation :** UX-VIEW-01..15, UX-CROSS-05/06/07/09/10 et comparaison Figma↔runtime en modes normal, partagé, étendu et mobile.

## 10. CT-07 — Intégration, interfaces et blast radius

| Zone observée sur `main` | Rôle / impact pressenti |
|---|---|
| `web/src/app/projects/[projectId]/page.tsx` | Coordination surface Travail, projet, navigation, brouillon, consultation et conditions d'envoi |
| `web/src/components/figma/NoraConversation.tsx` | Vue fil, contenu, activité, choix, compositeur et relation au panneau droit |
| `web/src/components/figma/DocumentSurfaces.tsx` | Fonctions de lecture D4 à réutiliser **sans importer l'éditeur dans Travail** |
| `web/src/components/SafeMarkdown.tsx` | Restitution de contenu sûre, indépendamment des commandes typées |
| `web/src/components/figma/tokens.css` et shell | Layout 50/50, tailles, scrolls, compositeur bas, responsive, accessibilité et invariance du rail |
| `web/src/domains/conversation/nora-adapter.ts` / `service.ts` / `turn-command.ts` | Séquence/validation des réponses, identité des tours, finalisation, événements observés |
| `web/src/domains/conversation/s05-pending-policy.ts`, `web/src/domains/pilotage/` | Coexistence sûre, idempotence et réconciliation |
| `web/src/domains/document/` et `web/src/domains/integrations/` | Identités, versioning, permissions, consultation réelle ; aucune seconde source de vérité |
| `web/src/app/api/preparations/[preparationId]/messages/route.ts` | Projection de vérité du tour, capacité d'activité, résultat et erreurs ; extension uniquement sous contrat validé |

**Avant toute modification :** qualifier appels et consommateurs, compatibilité des signatures, schéma de persistance, sécurité/ACL, erreurs, migration éventuelle, cache, rétention, performance, responsive, droits Git, risques de conflits et coût du streaming. Le tableau est **une zone d'examen**, pas une liste prescriptive de fichiers à modifier.

**Stratégie :** stabiliser les interfaces communes puis intégrer dans un **seul macro-lot cohérent** : code, tests, documentation, cible visuelle, revue et preuves communes. Le fractionnement en sous-travaux est conditionné à des frontières de fichiers/interfaces stables et à un intégrateur unique ; aucun moteur d'activité, de scroll ou d'inspection en parallèle ne doit émerger.

## 11. CT-08 — Sécurité, accessibilité, performance et exploitation

- **Sécurité :** isolation Pilote/projet, vérification des permissions au moment utile, état local minimisé, aucune fuite de brouillon interutilisateur, aucune source Git non autorisée ni exécution déclenchée par contenu non fiable.
- **Observabilité :** corrélations serveur natives, absence de secret ou chaîne de pensée dans l'UI/logs, distinctions `ATTEMPTED`/`FAILED`/`UNKNOWN`/`SUCCEEDED` selon leur vraie portée.
- **Accessibilité :** clavier, focus d'entrée/sortie de visionneuse, annonces ARIA d'activité non envahissantes, zoom, contrastes, mobilité, réduction des animations.
- **Performance :** mesurer le fil long (plus de 300 messages est déjà représenté par des tests ML4C), les reflows et le Markdown riche avant de choisir virtualisation/caching ; éviter les multiples rendus coûteux à chaque fragment.
- **Résilience :** dégradation honnête en absence d'événement/transport ; pas de spinner éternel maquillant un état inconnu ; fermeture de visionneuse sans suppression du tour ou des brouillons.

## 12. Contrat de preuve et réception

Les **88 scénarios candidats** issus de la conception UX intégrée forment le référentiel de couverture : **9 UX002 + 25 UX-NORA + 13 UX-COMP + 16 UX-ACT + 15 UX-VIEW + 10 UX-CROSS**. Ils **ne valent pas 88 tests déjà exécutés** ni 88 cycles Cursor distincts.

| Niveau | Preuves requises à la réalisation |
|---|---|
| **Unitaires** | Scroll/ancrage, machine de durée de vie des choix **sans créer un moteur métier**, projections de contenu/états, garde IME/clavier, reflows, validation des références |
| **Intégration / PG** | Tour et génération, ACK perdu/replay, persistance du rendu, récupération des ressources, droits et isolation, qualification du pending, retour tardif |
| **BROWSER** | Fil long, position de lecture, réponse structurée, choix/brouillon, activité, erreurs, visionneuse normal/50-50/étendue, responsive, focus et clavier |
| **LIVE / REAL quand applicable** | Activité fournisseur effectivement observable, source Git réellement autorisée, interruption/`UNKNOWN`, origine et preuve des résultats ; **pas de substitution par fixture** |
| **Figma↔runtime (F2/G5)** | Captures de référence et runtime par état/vue à **SHA, build, viewport et environnement identifiés**, rects mesurés et F2 ≤2 CSS px sur rectangles stables comparables, sans seuil universel d'image inventé |
| **Non-régression** | Ensemble 04/shell, navigation projet/Docs, ML4C D2/D3/D4/D6/D7/D9, contrôles de sécurité, idempotence, sources historiques, identité et effets |

**Oracles intégrés discriminants (à exécuter dans le même lot) :**

1. Choix contextuel avec brouillon non envoyé → nouveau tour unique, brouillon intact.
2. Clic avec ACK perdu → groupe gelé, identité conservée, réconciliation sans doublon.
3. **V1 final-only (M2)** → une réponse Nora finale, attente/activité véridique selon événements réels, choix actifs seulement après finalisation. **L'oracle de texte réellement progressif reste candidat NON COUVERT V1**, à qualifier lors de l'exit M2 ; aucun PASS fictif.
4. Relecture historique + réponse entrante → ancrage et signal UX-002.
5. Source historique après expiration des choix → lecture encore possible selon droits.
6. Visionneuse A→B→agrandie→réduite→fermée → une seule ressource affichée, scroll et brouillon préservés.
7. Réponse Nora arrivant pendant visionneuse agrandie → inspection maintenue, retour au fil selon ancrage.
8. Pending `UNKNOWN` + demande cognitive indépendante → pas de nouvel effet dépendant.
9. Travail→Documents→Travail/refresh → conservation du brouillon sous droits, retour à la fin du fil.
10. Source Git révoquée/session expirée → aucun aperçu ni texte local hors droits, état de reprise fidèle.

**Statuts non interchangeables :** `DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED`. Une capture Figma ou un test BROWSER simulé ne démontre pas une activité Nora LIVE/REAL.

## 13. Séquencement interne et conditions d'entrée

**Un macro-lot de réalisation : « Travail avec Nora »**, avec contrat d'acceptation commun, responsable d'intégration, Review Pack et gate Morris. Ordre interne recommandé, non cinq lots :

1. Vérifier code/branches/HEAD/base et qualifier le graphe de dépendances D3–D9.
2. Stabiliser le contrat de projection **tour/réponse/choix/activité/source/état** sans définir prématurément les transports ou tables.
3. Réaliser les comportements du fil, du compositeur et des interactions en gardant la continuité.
4. Raccorder les activités et la reprise à des événements/commandes existants et réellement observables.
5. Intégrer la visionneuse au shell Travail sans absorber la gestion documentaire.
6. Tester transversalement, documenter l'architecture effectivement modifiée, comparer Figma/runtime, produire le pack et qualifier la réception.

**Préconditions d'entrée pour Cursor :** pre-check Git local complet selon SFIA v2.6, routing/template lus depuis Git, fichiers modifiables autorisés, contradictions et décisions d'architecture identifiées, contrats interface/données/permission qualifiés, périmètre de tests et environnement RECETTE définis, responsable d'intégration et STOP explicites.

**STOP / escalade Morris :** **migration, nouvelle table ou changement de schéma indispensable (M5)**, nouveau modèle d'autorité ou d'effets, choix de transport/orchestration structurants au-delà de M2, modification de politique de sécurité, accès Git/pouvoirs étendus, duplication de moteur, dette sans exit, déviation significative de Figma ou de la vision validée. **M1–M5 orientent la réalisation ; ils ne dispensent pas de ce STOP.**

**Sortie du futur lot :** fonctionnalité observée sur SHA/build cible ; tests positifs/négatifs, preuves proportionnées et limites explicitement tracées ; documentation à jour dans le même cycle ; revue technique puis arbitrage de réception par Morris. **Cette publication documentaire n'est ni GO d'exécution, ni PR/merge, ni acceptation Gate C, ni adoption.**

## 14. Détails de réalisation restant à qualifier après M1–M5 (sans nouvelle décision implicite)

| Question | Responsable à mobiliser | Condition de sortie |
|---|---|---|
| **M1 décidé :** comment instancier la projection D3 versionnée sur les champs existants ? | D3 / architecture | Format, finalisation, sécurité, rétrocompatibilité et relecture testés ; **STOP M5** si nouveau schéma indispensable |
| **M2 décidé :** quels événements d'activité réels peuvent être exposés au Pilote en V1 ? | D3 + observabilité + D4/D9 | Sources, corrélation et temps de visibilité vérifiés ; attente générique honnête à défaut ; pas d'étape inventée |
| **M2 exit :** quand et comment réexaminer la restitution textuelle progressive ? | Architecture / implémentation sous gate | Preuve de fragments publiables/reprise sûre, analyse d'options et gate si choix structurant ; **non prétendu PASS V1** |
| **M3 décidé :** comment sécuriser la clé `sessionStorage` et sa purge ? | Frontend + identité D1 | Tests Pilote/projet/lane, refresh, logout, révocation, ACK tardif et perte admise à la fermeture d'onglet |
| **M4 décidé :** comment relier l'état local de visionneuse aux références D4/D9 ? | UI/architecture + D4/D9 | Références/version, navigation officielle vers Documents, scroll, droits et accessibilité démontrés **sans deep-link viewer** |
| Quel blast radius exact sur composants, schéma et fournisseurs au HEAD candidat réel ? | Cursor, revue ChatGPT/Morris | Diff prévisionnel borné, STOP si décision structurante, tests associés |
| Comment qualifier les réserves LIVE/REAL héritées de ML4C sans bloquer injustement une démonstration UI ? | QA / intégrateur / Morris | Matrice de preuve par scénario et niveau explicite |

**VERDICT v0.2 :** les **orientations M1–M5 sont VALIDATED BY MORRIS** et consignées ; le contrat de réalisation reste **CANDIDATE / DOCUMENTED** tant que les formes techniques et les preuves ne sont pas qualifiées. **Aucune implémentation, nouveau schéma, preuve runtime, GO Delivery ou architecture globale adoptés. Ensemble 05 EN REVUE — Gate C OPEN.**
