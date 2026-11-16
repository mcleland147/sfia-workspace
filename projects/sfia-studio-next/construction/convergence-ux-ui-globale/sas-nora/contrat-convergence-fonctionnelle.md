# SFIA Studio Next — Sas Nora / Convergence fonctionnelle

| Champ | Valeur |
| --- | --- |
| Version | **v0.1 — 16 novembre 2026** |
| Statut | **DOCUMENTED — CANDIDATE FOR MORRIS PRODUCT REVIEW** ; proposition de réalisation, **non normative**, non adoptée, non implémentée |
| Ensemble | R5 / ML4D — Sas conversationnel, préparation et création de projet |
| Autorité de la vision et de l'acceptation UX | **Morris** ; validation orale des cinq maquettes Figma le 16/11/2026 ; **pas** une validation du mécanisme technique |
| Objet | Traduire la vision et les maquettes validées en comportement utilisateur testable, sans modifier les règles R1/R2 applicables |
| Complément technique | [Contrat de convergence technique](contrat-convergence-technique.md) |
| Source Git de vérification | \`mcleland147/sfia-workspace\`, \`main@997d4c4e8204993de7107552898c8cc08cd3b0ed\` ; état candidat local postérieur non directement accessible dans GitHub |
| Baseline de recette précédente | UX-004 \`b05dacf47983ed8d914c92619ede5ffe65ce9264\` / build \`20blGylSEta7201PgVvlw\` sur RECETTE, **rapport Cursor**, pas nouvelle baseline Git |
| Gates | Aucun GO Cursor, aucune migration, push projet, PR, merge, promotion RECETTE/STABLE, release, clôture ML4D, Gate C ou ADOPTED |

> **Règle de lecture.** Ce texte est un **contrat candidat de transposition**. Il n'amende pas la vision R1, la spec D2 R2 \`VALIDATED SPEC\`, la doctrine Nora/D6 ni l'architecture R4. L'accord de Morris sur les cinq maquettes vaut validation de la **cible UX** et de son intention produit ; la réalisation, sa conformité fonctionnelle et sa preuve restent ouvertes. L'éventuelle validation du présent texte relève de la revue produit ultérieure avec Morris, sans exiger de lui une expertise d'implémentation.

## 1. Résultat et promesse faite au Pilote

**Résultat utilisateur.** Entrer avec une intention qui peut être floue ; discuter naturellement avec Nora ; voir émerger, évoluer et se corriger une proposition de projet **sans formulaire à renseigner** ; comprendre pourquoi une base de départ est suffisante ou ce qui manque réellement ; décider soi-même de créer ; continuer le **même fil** après création, sans réexpliquer le besoin.

**Test de vérité produit :** le Pilote sort du sas avec une intention plus claire, des limites et des prochaines options intelligibles, et une confiance **justifiée par le travail de Nora** — jamais par un score fabriqué, une animation seule ou une proposition générique.

**Posture Nora :** copilote qui écoute, reformule, challenge utilement, investigue dans ses droits, synthétise et recommande ; elle ne transforme ni une préférence ni un résumé en acte d'autorité. **Le Pilote reste l'auteur de la création.** La création ne décide ni méthode/CKI, ni cycle, ni Git, ni exécution Cursor.

## 2. Sources, précédence et limites observées

1. Vision : \`cadrage/vision-produit.md\` §§2.2, 2.7, 2.15, **2.20**, R1.
2. Propriétaire D2 : \`conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md\` : \`RG-CRE-001..026\`, notamment **002/003/004/007/008/010/011/013/016/017/019/020/024** ; scénarios \`PF-CRE-01..26\`.
3. Nora : \`conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md\` : \`RG-CONV-001..006\`, \`RG-CTX-001..003\` et \`RG-APP-001..008\` applicables.
4. Mémoire : \`conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md\` : \`RG-KNOW-001/002/005/006/007/008/011/013/015\`.
5. Architecture : \`architecture-technique/cadrage-r4.md\`, sas→projet, identité de fil, transaction et réconciliation ; responsabilités avant choix de stockage.
6. Convergence : \`governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md\` ; ML4D peut révéler un écart fonctionnel, mais **ne se substitue pas à son propriétaire**.
7. Maquettes UX **validées par Morris le 16/11/2026**, fichier Figma \`itgvCulInEnFY6DvgIegvP\`, page candidate \`606:2\` :
   - [Première intention — \`607:3\`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-3)
   - [Clarification — \`607:62\`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-62)
   - [Proposition évolutive — \`607:131\`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-131)
   - [Base suffisante — \`607:203\`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-203)
   - [Reprise — \`607:277\`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-277)
8. Revue utilisateur : screenshot du sas RECETTE actuel et arbitrage oral Morris du 16/11 ; forme actuelle jugée **trop chargée, semi-manuelle, non conforme à la vision**. La conversation est actuellement trop réduite ; le formulaire « Constituer une proposition » n'est pas le parcours voulu.

**Vérité temporelle :** \`main\` reflète les sources et le code examinés. Le candidat UX-004 servi localement et les captures ont été **rapportés dans les revues**, sans inspection directe de l'environnement Mac dans ce dossier. L'implémentation du sas sur le futur candidat doit être lue à son SHA local réel avant tout mandat technique.

## 3. Périmètre cohérent, IN / OUT

**IN :**
- Sas personnel avant-projet ; identité Pilote et préparation durable distincte du projet.
- Conversation libre Nora ; questions ciblées, hypothèses déclarées, propositions révisables.
- Aperçu évolutif visible **au cours de l'échange**, avec nom de travail, intention, résultat visé, premier périmètre et points ouverts selon disponibilité ; provenance/validité réelle.
- Appréciation qualitative de suffisance pour créer, non autorisante, expliquée et réversible.
- Action explicite \`Créer le projet\`, inspection du contexte courant, identité/version, unicité, issue vérifiée/indéterminée.
- Reprise de préparation, cohérence du fil, transfert des acquis et continuité dans le projet créé.
- Rendu desktop fidèle aux cinq états UX, accessibilité clavier et erreurs ; smoke mobile limité.

**OUT :**
- Formulaire exhaustif de cadrage, questionnaire à étapes imposées, score de maturité chiffré.
- Projet créé au premier message, à la réponse de Nora, à l'enregistrement de l'aperçu ou par navigation/rafraîchissement.
- Cycle actif, CKC, méthode imposée, dépôt Git, autorisation D6 ou mandat Cursor induits.
- Refonte de Nora, second moteur conversationnel, deuxième mémoire, registre de décision ou moteur d'effets concurrents.
- Catalogue documentaire/Journal/Pilotage comme navigation principale **avant** création ; leurs capacités demeurent accessibles dans les contextes autorisés sans encombrer le sas.
- Extension UX mobile haut niveau, nouveau parcours ML5 ou collaboration projet par défaut.

## 4. États d'expérience — variantes du même dialogue, pas workflow obligatoire

| État de présentation | Déclencheur sémantique | Ce que fait Nora | Aperçu visible | Action Pilote |
| --- | --- | --- | --- | --- |
| **Première intention** | Nouvelle préparation sans intention exprimée | Accueil ouvert et invitation à décrire une idée | Champs encore inconnus honnêtement étiquetés ; « Projet non créé » | Message libre |
| **Clarification** | Des éléments compris mais une ambiguïté utile | Reformule ; question **seulement** si déterminante ; poursuit avec hypothèses déclarées si possible | Intention et résultat progressivement renseignés, question ouverte explicite | Répondre, corriger ou reformuler |
| **Proposition évolutive** | Une proposition exploitable apparaît | Propose nom, finalité, résultat et périmètre ; distingue supposé/confirmé | Projection **non autorisante**, sans obligation d'enregistrement manuel | Corriger par dialogue, continuer |
| **Base suffisante pour démarrer** | Appréciation Nora argumentée **et** préconditions applicatives satisfaites | Explique le minimum acquis, limites et travail restant | Recommandation « Vous pouvez démarrer », bouton explicite de création | Créer **ou** continuer à préciser |
| **Préparation reprise** | Retour vers une préparation personnelle existante | Retrouve le fil, les acquis et points ouverts sans inventer | Dernière projection **persistée et qualifiée** ; statut actuel réel | Continuer ou décider de créer si possible |

**Important :** ces états peuvent se chevaucher, revenir en arrière ou ne pas apparaître dans cet ordre. **La suffisance de création n'est pas l'obligation de terminer les étapes précédentes.** Une contradiction ou une précision du Pilote peut invalider une recommandation antérieure sans effacer l'historique.

## 5. Règles de comportement candidat — à éprouver, pas nouvelle doctrine

| ID de revue | Comportement observable | Ancrage canonique |
| --- | --- | --- |
| **SAS-F-01** | Le Pilote écrit naturellement, sans étape d'inscription ni champ de titre requis pour **commencer la conversation**. | RG-CRE-001/002 |
| **SAS-F-02** | Nora reformule l'intention de manière fidèle, distingue information donnée, hypothèse et suggestion ; elle ne remplit jamais les inconnus par invention. | RG-CONV-003/006, RG-CRE-003/016 |
| **SAS-F-03** | L'aperçu se **met à jour après des échanges pertinents**, sans clic « Constituer une proposition », ni copie du dernier message Nora comme résumé. | RG-CRE-003, R1 §2.20 |
| **SAS-F-04** | Chaque information utile affichée dans l'aperçu a un statut (\`EXPRIMÉ\`, \`PROPOSÉ\`, \`À CONFIRMER\` ou équivalent) et une origine récupérable. Une recommandation n'est pas une décision. | RG-CRE-016, RG-KNOW-006 |
| **SAS-F-05** | Nora pose seulement les questions susceptibles de changer sensiblement la portée, le résultat, le risque ou la capacité de créer ; les autres inconnues restent ouvertes. | RG-CRE-004/007, RG-CONV-002/003 |
| **SAS-F-06** | Nora peut recommander de démarrer et **justifier** son appréciation sur une base intelligible ; aucun pourcentage, score opaque ou gate IA à franchir. | RG-CRE-004, R1 §2.20 |
| **SAS-F-07** | Si le Pilote souhaite démarrer plus tôt, Studio vérifie seulement les vrais prérequis d'identité, de contexte et de création ; il n'exige pas une trajectoire/CKI, un long dialogue ou une recommandation Nora. | RG-CRE-004/007/008 |
| **SAS-F-08** | La proposition est corrigeable dans la conversation ; Nora reconnaît la contradiction, produit une nouvelle version cohérente et signale les hypothèses remplacées. | RG-CONV-006, RG-KNOW-007/008 |
| **SAS-F-09** | \`Créer le projet\` est un **acte UI volontaire** du Pilote sur l'aperçu courant ; sauvegarder / discuter / accepter un conseil ne crée aucun projet. | RG-CRE-008/016 |
| **SAS-F-10** | Création \`CREATED/ALREADY_CREATED\` seulement après confirmation durable ; \`CONFLICT/REFUSED/UNKNOWN\` restent explicites, sans retry implicite ni projet fictif. | RG-CRE-010/011/013/024 |
| **SAS-F-11** | Au succès, le projet reprend le **même fil visible**, le contexte et les ressources autorisées ; événement « Projet créé » sourcé, aucune nouvelle conversation vide. | RG-CRE-017..021 |
| **SAS-F-12** | Quitter/revenir/recharger retrouve la dernière préparation réellement persistée et son aperçu ; pas d'invention après panne. | RG-CRE-015/019/023/024, RG-KNOW-011 |
| **SAS-F-13** | La navigation pré-projet est **minimaliste** : Portefeuille + Préparation en cours, identité Pilote ; pas de rail projet/cycles/documents comme menus principaux du sas. | Figma 607:3..277, arbitrage Morris |
| **SAS-F-14** | Le rail projet complet n'apparaît **qu'après** création vérifiée, sans casser le fil. | RG-CRE-017/020 |
| **SAS-F-15** | Une indisponibilité Nora/DB n'est pas masquée par un aperçu « prêt » ; le dernier état confirmé reste lisible avec la réserve et une reprise contrôlée. | RG-CONV-006, RG-CRE-013 |
| **SAS-F-16** | Environnements et tests ne revendiquent pas du LIVE ou de l'idempotence serveur par une simple fixture. | SEF §6, R5 |

### 5.1. Minimum nécessaire à la création

**Minimum à vérifier par Studio**, non par une autorité implicite de Nora : session Pilote valide, préparation appartenant au Pilote, intention intelligible, **nom proposé/inspecté non vide et compatible avec les règles de création réellement établies**, version effectivement inspectée, absence de conflit ou d'effet déjà confirmé. Les informations peuvent être proposées par Nora ; le Pilote ne doit pas être forcé de saisir un formulaire pour les fournir.

**Pas de faux prérequis :** plan de projet complet, méthode, calendrier exhaustif, trajectoire, cycle, Git ou compétence technique préalable. Si le nom proposé n'est pas exploitable, Nora aide à le formuler ; ne pas substituer silencieusement « Projet sans titre » ou « Nouveau projet » à une identité de projet supposément acceptée.

**Deux appréciations séparées :**
- **Conseil Nora :** « Cette base me paraît suffisante pour commencer, parce que… » — cognition révisable, provenance conversationnelle, aucun droit.
- **Éligibilité Studio :** préconditions minimales objectives satisfaites au point de clic — relève de D2/D1, pas d'un score ou bouton déduit uniquement d'un modèle.

La décision du Pilote reste possible même si Nora recommande d'approfondir un point non bloquant. Les véritables erreurs de propriété, identité, conflit ou absence de cible identifiable restent bloquantes.

### 5.2. Correction sans formulaire dominant

**Parcours normal :** « Je voudrais plutôt une application interne » → Nora reformule et révise l'aperçu après avoir identifié ce qui change ; le panneau est actualisé et affiche le statut propositionnel. Le Pilote ne clique pas sur « Enregistrer la proposition ».

**Exception proportionnée :** une fonction secondaire d'inspection ou correction explicite peut exister si nécessaire à l'accessibilité, à la récupération de données ou au contrôle final. Elle ne doit ni redevenir une étape imposée, ni contourner la provenance et la gestion de version.

## 6. Composition et microcopie du sas

**Rail de 246 px**, espace personnel : marque, Portefeuille, Préparation en cours, pied Pilote. Pas d'entrée Projet/Travail/Pilotage/Documents/Journal dans ce contexte. Sur un projet déjà créé, le rail projet reprend sa propre responsabilité.

**Conversation dominante :** accueil humain et direct ; messages Pilote/Nora lisibles ; compositeur disponible sans multiplication de boutons techniques ; retour visible si Nora génère, échoue ou reprend. Le dialogue long défile sans déplacer le rail et sans masquer l'entrée.

**Aperçu droit évolutif :** libellé « Aperçu du projet », état verbal non trompeur, informations comprises/proposées/encore ouvertes, explication Nora courte si base suffisante ; action « Créer le projet » uniquement si ses préconditions applicatives sont réunies. Le panneau ne doit pas afficher un titre inventé ni transformer une hypothèse en acquis.

**États à rendre :** vide, en traitement, nouvelle synthèse, conflit révision, retour après interruption, refus, succès créé, échec technique, incertitude après ACK perdu, longue réponse, longue liste de points. Une erreur n'impose pas de ressaisir l'intention.

**Mobile :** aucun effort de fidélité visuelle élevé demandé par Morris à ce stade ; préserver accès de base et clavier par smoke technique.

## 7. Parcours d'acceptation fonctionnelle

| Cas | Action et contexte | Attendu vérifiable | Niveau de preuve |
| --- | --- | --- | --- |
| **AF-01** | Nouvelle préparation puis premier message flou | Nora accueille et clarifie ; D2 ne crée aucun projet ; aperçu sans fait inventé | UNIT / API / BROWSER |
| **AF-02** | Deux ou trois échanges utiles | Aperçu évolue sans formulaire, avec statut/provenance ; historique préservé | UNIT / BROWSER + Nora LIVE ciblé |
| **AF-03** | Nora manque d'une donnée non bloquante | Question ciblée ou hypothèse déclarée, pas de checklist ni blocage artificiel | UNIT / Nora LIVE |
| **AF-04** | Pilote corrige un objectif, des utilisateurs ou le périmètre | Aperçu révisé, ancienne hypothèse non promue ; version/provenance cohérentes | UNIT / API / Nora LIVE ciblé |
| **AF-05** | Nora indique « base suffisante » | Justification intelligible, pas d'effet D2 ni décision D6 | UNIT / BROWSER + Nora LIVE |
| **AF-06** | Pilote veut créer sans recommandation Nora mais avec minimum réel | Le bouton/action reste possible selon règles D2 ; aucune interdiction par une note IA | UNIT / API |
| **AF-07** | Pilote clique « Créer le projet » | Un projet au plus, sous le bon compte ; résultat vérifié, bon nom/aperçu inspectés | PG / API / BROWSER |
| **AF-08** | Double clic, deux onglets, timeout après commit | Même projet réconcilié ou état inconnu honnête ; aucun second projet | PG / API / E2E |
| **AF-09** | Aperçu changé pendant que Pilote inspecte la création | Conflit de révision explicite, inspection nouvelle version, pas d'écrasement | PG / API / BROWSER |
| **AF-10** | Retour au portefeuille, recharge du sas, session reprise | Identité et fil identiques, aperçu réellement sauvegardé, points ouverts retrouvables | PG / BROWSER |
| **AF-11** | Création effective puis arrivée dans projet | Même fil visuel, marqueur de création véridique, contexte continu, aucun cycle/CKI/Git implicite | PG / API / BROWSER |
| **AF-12** | Provider Nora indisponible / qualification partielle | Pas d'aperçu inventé ni de message proclamant un effet non établi ; reprise propre | UNIT / API / BROWSER |
| **AF-13** | Échange avec texte hostile ou source Git étrangère | Aucune permission/autorité ou mémoire interprojet transférée | UNIT / sécurité / PG |
| **AF-14** | Suite de dialogues naturels sur sujets variés | Nora progresse réellement vers un premier résultat sans inventer de contraintes | Nora LIVE évalué par grille métier |

**Grille cognitive Nora LIVE (critères observables, non score automatique fictif) :** fidélité à l'intention exprimée ; utilité des questions ; capacité à proposer une base sans surcadrage ; distinction certain/hypothétique ; traitement d'une correction ; appréciation expliquée de suffisance ; honnêteté sur les limites ; continuité de contexte. Enregistrer des exemples nominatifs **non sensibles** et les réponses effectivement observées. Une fixture qui renvoie un texte parfait ne prouve pas l'amélioration cognitive.

**Partage des rôles de preuve :** Cursor teste règles, endpoints, persistance, concurrence, sécurité, retours négatifs et BROWSER de mécanisme. **Morris effectue la revue visuelle/UI réelle** sur le runtime RECETTE, partage les captures qu'il choisit et prononce l'acceptation ; les captures techniques éventuelles de Cursor ne la remplacent pas.

## 8. Macro-lot, intégration, risques et sorties

**Un seul macro-résultat intégré**, pas une séquence de micro-lots « document/chat/rail/proposition ». Sous-travaux coordonnés : projection Nora, vérité de préparation D2, composants UX, création/reprise, tests, documentation et intégration commune. Toute rupture D2/D3/R4 est instruite dans le même contrat et soumise au gate approprié avant effets techniques.

**Risques critiques :**
- Nora fait paraître une hypothèse certaine ou promet un projet déjà créé.
- Aperçu stocké dans plusieurs registres concurrents ou reconstruits en parsant sa prose.
- Conflit de version entre Nora et Pilote au clic de création ; attente/ACK perdu ou duplication.
- Passage au projet avec perte du fil, des documents, de la provenance ou des décisions.
- Qualité IA démontrée seulement par fixture ; capture visuelle confondue avec preuve métier.
- Régression UX-003/UX-004, droits interprojets ou migration DB non autorisée.

**Dépendances / gates :** contrat technique lié ci-dessous ; qualification R4 des changements de persistance et d'interfaces ; préparation d'un mandat Cursor **uniquement après revue produit Morris de la cible et de son périmètre** ; code D3 par Cursor sous SFIA v2.6, Review Pack/handoff ; DEV → revue ChatGPT → **GO distinct RECETTE** → capture/revue Morris. Aucun PR/merge/push projet/STABLE/ADOPTED sans GO propre. Gate C **OPEN**.

**Dette / exit :** le formulaire manuel \`Constituer une proposition\` et toute duplication de synthèse ne doivent pas rester comme deux parcours concurrents. La compatibilité et l'exit des anciennes propriétés d'aperçu sont précisés par le contrat technique avant toute suppression/migration ; aucun effacement silencieux des préparations existantes.

## 9. Statut de sortie de la présente proposition

- **Figma : VALIDATED SPEC (cible UX par Morris, 16/11/2026)** ; les cinq frames originales R3 restent inchangées.
- **Ce contrat : DOCUMENTED — CANDIDATE**, en attente de revue de conformité produit avec Morris.
- **Runtime Sas cible : NON IMPLÉMENTÉ / BEHAVIOR NOT PROVEN** à cette date ; le sas actuel existe mais ne satisfait pas encore cette expérience.
- **Next :** revue produit brève des invariants, puis contrat Cursor borné unique ; aucun travail technique ni gate avancé par la seule publication documentaire.
