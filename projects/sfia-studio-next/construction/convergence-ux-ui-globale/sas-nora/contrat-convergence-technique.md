# SFIA Studio Next — Sas Nora / Convergence technique et intégration

| Champ | Valeur |
| --- | --- |
| Version | **v0.1 — 16 novembre 2026** |
| Statut | **DOCUMENTED — TECHNICAL CANDIDATE / NOT ADOPTED** ; spécification candidate, non normative, non implémentée |
| Résultat dont elle répond | [Contrat de convergence fonctionnelle](contrat-convergence-fonctionnelle.md) ; cinq maquettes Sas Nora validées par Morris |
| Autorité | Morris sur la vision produit, les frontières de risque, les gates et l'acceptation ; ChatGPT sur l'analyse/conception candidate ; Cursor sur le code sous contrat SFIA v2.6 |
| Base Git contrôlée | \`mcleland147/sfia-workspace\` / \`main@997d4c4e8204993de7107552898c8cc08cd3b0ed\`; branche produit locale postérieure **NON OBSERVÉE** |
| Environnement à préserver | RECETTE existante UX-004 \`b05dacf47983ed8d914c92619ede5ffe65ce9264\`, build \`20blGylSEta7201PgVvlw\`, selon handoff Cursor |
| Décisions réservées | Toute migration additive, modification de contrat/API d'autorité ou de persistance, création de branche candidate projet et promotion technique nécessitent le GO Cursor/Morris adapté |
| Gates | Pas de push projet, PR, merge, modification \`main\`, RECETTE, STABLE, release, \`ADOPTED\`, clôture ML4D, Gate C ou ML5 |

> **Nature du document.** Ce contrat est une **proposition d'intégration vérifiable**, pas une nouvelle architecture R4 adoptée. Les règles R1/R2, le SEF et la décision de trajectoire R5 restent propriétaires de leurs normes. Une solution technique détaillée ne vaut pas validation Morris de la cible produit, ni preuve du runtime. Les noms de types/contrats ci-dessous désignent des **responsabilités candidates** et seront relus au point de construction conformément à la convention de nommage ; ils ne deviennent pas des classes, tables ou endpoints adoptés par la seule publication.

## 1. Pre-check, sources et observations

Sources principales sur \`main@997d4c4e…\` :
- \`governance/SEF.md\` v0.2, macro-lot intégré, preuves, contribution Git et autonomie.
- \`governance/roadmap.md\` : ML4D \`NOT STARTED — NEXT\` sur **main** ; UX-003 et UX-004 existent comme candidats locaux acceptés ultérieurement, sans mise à jour de la baseline.
- \`governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md\` : ne pas masquer un écart fonctionnel sous une correction visuelle ; D1–D9 responsables de leurs effets.
- \`governance/product-naming-conventions.md\` : nommer par responsabilité durable.
- \`cadrage/vision-produit.md\` §2.20 et \`cadrage/vision-cible/README.md\` : Pilote, Nora, création gouvernée et continuité ; les trois schémas de vision ne sont **pas déclarés relus graphiquement** ici.
- \`conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md\` : \`RG-CRE-001..026\`, \`PF-CRE-01..26\` (propriétaire D2).
- \`conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md\` et \`connaissance-sujets-et-continuite-du-projet.md\` : D3/D4.
- \`architecture-technique/cadrage-r4.md\` : chemin sas→projet, vérité transactionnelle, version d'aperçu, at-most-once durable.
- \`ux-ui/contrat-transposition-figma-code.md\` : Figma n'autorise pas une action ; transposition source et vérification runtime.
- Figma validé, fichier \`itgvCulInEnFY6DvgIegvP\`, page \`606:2\` : \`607:3 / 607:62 / 607:131 / 607:203 / 607:277\`. Les cinq états sont une référence **UX validée**, non un flux backend déjà réalisé.

### 1.1. As-built vérifié dans le code de main — ne pas extrapoler au HEAD local

| Domaine | Code lu / constat technique | Impact de convergence |
| --- | --- | --- |
| Page sas | \`web/src/app/preparations/[preparationId]/page.tsx\` ; \`surface="travail/journal/document"\`, formulaire manuel, state \`previewName/previewSummary/creationRevision\` | Déployer la composition conversation dominante et remplacer l'entrée manuelle par une lecture d'aperçu vivant |
| Conversation UI | \`web/src/components/figma/PreparationConversation.tsx\` ; fil et composer, état Nora \`idle/preparing/error\` | Réutiliser le rendu sûr ; revoir les proportions, scroll, attentes, erreurs et accessibilité |
| Aperçu UI | \`web/src/components/figma/PreparationProposal.tsx\` ; \`Constituer une proposition\`, \`PATCH\`, \`Ajuster\` | Retirer la constitution manuelle **du parcours principal**, rendre une projection qualifiée et inspectable |
| API préparation | \`web/src/app/api/preparations/[preparationId]/route.ts\` ; GET fournit préparation, messages, documents, connaissance et \`awaitingMission\` ; PATCH texte nom/résumé | Étudier ajout **compatible** d'une projection structurée de préparation, sans nouveau registre concurrent |
| Persistance D2 | \`web/src/db/schema.ts\` : \`preparations.previewName\`, \`previewSummary\`, \`creationRevision\`, \`status\` | Les deux champs de texte seuls ne suffisent pas à exprimer proprement toutes les nuances + provenances ; revoir une extension additive avant code |
| Service D2 | \`web/src/domains/preparation/service.ts\` ; \`updatePreview()\` incrémente la révision mais **sans compare-and-swap explicite** dans la fonction consultée | Éviter conflits silencieux entre Nora, Pilote et onglets ; versionnement atomique de l'aperçu |
| Tour Nora | \`web/src/domains/conversation/service.ts\` ; \`postUserMessageAndNora()\`, \`generateNoraReply()\`, qualification structurée, corrélation et propriétaire de tour | **Réutiliser** le tour existant ; enrichir sa projection sans deuxième appel IA ou analyse heuristique du texte visible |
| Création D2 | \`web/src/domains/preparation/create-project.ts\` ; transaction DB, lock/advisory, \`idempotencyKey\`, fingerprint, lien préparation→projet, \`reconcileCreateProject()\` | **Conserver** la voie unique de création, son verrou durable, ses conflits et son mécanisme de réconciliation |
| Route de création | \`web/src/app/api/preparations/[preparationId]/create-project/route.ts\` ; \`expectedCreationRevision\`, \`projectName\`, \`previewSummary\`, \`idempotencyKey\`, \`clientIntentKey\` vérifié si lié à mission | Ne pas dériver une autorité d'un signal Nora ; verrouiller la version inspectée ; compatibilité mission existante |
| Nora→aperçu actuel | \`conversation/service.ts\` appelle \`updatePreview()\` surtout lorsque \`studioIntent.wantsProjectCreate\` puis produit une mission \`AWAITING_PILOT_ACT\` | Insuffisant pour une progression naturelle **dès les échanges précédents** ; ne pas rendre la création conditionnelle à cette mission |
| Shell | \`web/src/components/shell/StudioShell.tsx\` + nav \`studio-rail.ts\`, variantes personnelles/projet/conversation/inspection | Un seul shell, rail minimal spécifique au contexte préparation, **pas de duplication de moteur navigation** |

**Limites d'observation :** les opérations locales de Cursor (branche non poussée, process, staged/untracked, schéma déployé et DB) sont **NON OBSERVÉES** ; un pré-check local complet sera obligatoire dans le contrat Cursor futur. Des composants ou endpoints du candidat UX-004 peuvent avoir évolué depuis \`main\` : tout diff concret doit être calculé depuis le SHA candidat réellement présent, sans repartir aveuglément de la baseline.

## 2. Responsabilités — une source de vérité par fait / effet

| Propriétaire | Contrat cible | Interdit |
| --- | --- | --- |
| **D1 — Identité** | Fournit Pilote/authentification, séparation propriétaire et navigation portefeuille | Créer un projet sur simple navigation |
| **D2 — Préparation** | Identifie préparation et version inspectable ; possède **projection de sas non autorisante** et autorité du **passage durable** vers projet ; contrôle identité et version au point d'effet | Confonde projection Nora et projet enregistré ; deuxième commande de création |
| **D3 — Nora** | Produit une réponse conversationnelle et une **qualification structurée du même tour**, éventuellement enrichie de propositions/intention/résultat/questions/raisonnement métier résumé | Attribue elle-même un GO, une propriété, un effet ou un succès |
| **D4 — Connaissance** | Possède sources, sujets, acquis, questions ouvertes et leurs statuts ; fournit références/provenances autorisées à la projection | Deuxième registre de faits non sourcés |
| **D5 — Trajectoire** | Peut recevoir des suggestions prévisionnelles ; pas de cycle actif créé dans le sas | CKC ou cycle induit |
| **D6 — Gouvernance** | Possède les décisions/mandats/suspensions et leur applicabilité | Décision déduite du « prêt » de Nora |
| **D9 — Git** | Accès lecture éventuellement autorisé selon droits actuels | Attachement de dépôt ou mutation Git implicite |

**Choix central :** une **projection de préparation** est une **vue métier dérivée et persistée**, pas une décision, pas une mémoire parallèle et pas un second orchestrateur. Le fait source reste le message Pilote, la réponse Nora durable ou l'élément D4 et son identité/provenance. La projection garde ce lien et son propre statut propositionnel.

## 3. Contrat de projection candidat

Nom de responsabilité proposé : **\`PreparationProjection\`** (identité et projet encore distincts). Ce nom n'est pas une décision sur la structure DB.

\`\`\`ts
// CONTRAT CONCEPTUEL CANDIDAT — PAS UN FICHIER CODE ADOPTÉ
type PreparationProjection = {
  schemaVersion: 1;
  preparationId: string;
  revision: number;             // relier à la version D2 contrôlée
  updatedFromTurnKey: string | null;
  observedAt: string | null;     // instant du constat réellement enregistré
  name: ProposedField<string> | null;
  intention: ProposedField<string> | null;
  desiredOutcome: ProposedField<string> | null;
  initialScope: ProposedField<string> | null;
  openQuestions: ProposedField<string>[];
  suggestion: {
    assessment: "EXPLORING" | "CLARIFYING" | "PROPOSAL" | "BASE_SUFFICIENTE";
    explanation: string;         // critères concrets, pas score opaque
    sourceTurnKey: string | null;
  } | null;
};

type ProposedField<T> = {
  value: T;
  status: "PILOT_EXPRESSED" | "NORA_PROPOSED" | "NEEDS_CONFIRMATION";
  source: { kind: "PILOT_TURN" | "NORA_TURN" | "KNOWLEDGE_REF"; ref: string };
  isCurrent: boolean;           // pas d'effacement implicite des versions historiques
};
\`\`\`

**Forme minimale utile :** tous les champs sont facultatifs tant qu'une intention n'est pas connue. L'UI n'affiche pas comme certifiés des éléments absents. La qualification de maturité \`suggestion.assessment\` sert seulement à la **présentation/conseil** : ni le code D2 ni les droits ne doivent traiter \`BASE_SUFFICIENTE\` comme un \`HumanDecision\` ou un token d'autorisation.

**Ne pas dupliquer D4 :** \`openQuestions\` peut être une collection de **références** aux points ouverts possédés par D4, avec une brève projection d'affichage, plutôt qu'un nouveau stockage autonome des questions. Les éléments factuels ou décidés qui apparaissent dans plusieurs surfaces gardent la provenance et le statut canoniques.

**Conservation historique :** à chaque changement matériel, conserver source/turn/qualif/révision antérieure reconstituables sans rendre nécessaire un journal de projection complet supplémentaire si la conversation et D4 le fournissent déjà. La source d'un champ ne devient pas une autorisation.

## 4. Persistance et API — option minimale proposée, décision bornée avant code

### 4.1. Options confrontées

| Option | Bénéfice | Limite | Orientation |
| --- | --- | --- | --- |
| **A — Utiliser uniquement \`previewName/previewSummary\` et extraire le reste du dernier texte** | Aucune migration | Perte de provenance/état, NLP fragile, reprise non déterministe | **Rejetée pour la cible** |
| **B — Calculer l'aperçu à chaque GET depuis D4 + historique et ne stocker que nom/résumé** | Réutilise D4 | Peut nécessiter recalcul non déterministe, état Nora/raison suffisance non récupérable tel quel ; dépend de la couverture de D4 | Alternative possible si une projection fiable est déjà persistable avec les structures existantes |
| **C — Snapshot structuré D2, additif et associé à la révision, référant D4** | Reprise stable, état d'aperçu honnête, version contrôlable et rétrocompatibilité | Nécessite vérification R4 du schéma, migration et gestion CAS | **Préférence candidate**, si les sources locales ne révèlent pas un mécanisme équivalent |

**Recommandation technique candidate : C**, en étendant **le propriétaire D2 existant** plutôt qu'en ouvrant une table de propositions concurrente. Variante indicative : champ JSONB de projection versionné sur la préparation et maintien de \`previewName/previewSummary\` comme champs compatibles pour la commande existante, jusqu'à exit démontrée. **Ce n'est pas un GO migration**. Cursor devra constater le schéma local et proposer le diff minimal, puis s'arrêter à la frontière de changement de persistance si le GO technique ne la couvre pas.

**Invariants :**
- une préparation, **une version de projection courante** ; identité Pilote et propriété contrôlées ;
- noms et résumés que lit la commande de création sont **la même version** que celle inspectée par le Pilote ;
- pas de double écriture indépendante conduisant à \`previewName\` différent du champ \`projection.name\` ;
- version d'aperçu et \`creationRevision\` explicitement reliées, avec compatibilité des anciens consommateurs ;
- les anciennes préparations sans projection JSON peuvent continuer leur lecture/reprise via les champs disponibles, étiquetés comme **information partielle**, sans génération factice rétroactive.

### 4.2. Contrat de lecture candidat

Conserver **GET** \`/api/preparations/{preparationId}\` (authentifié/owner-scoped) comme point d'entrée du sas, en ajoutant un champ optionnel \`projection\` et l'état de disponibilité/qualification ; préserver \`preparation\`, \`messages\`, \`documents\`, \`knowledge\` et \`awaitingMission\` existants. L'UI doit pouvoir rendre des champs partiels ou absents. Le GET **ne génère ni nouveau message IA ni mutation D2**.

Sur le retour de \`POST /messages\`, restituer la version du sas **effectivement durable** ou une référence qui autorise un GET de réconciliation. L'affichage optimiste n'est pas présenté comme « enregistré » sans ACK. Ne jamais faire une deuxième invocation IA pour reconstruire l'aperçu uniquement à des fins UI si le tour existant possède déjà sa qualification.

### 4.3. Contrat d'écriture candidat

L'écriture d'une projection **matériellement modifiée** est opérée par **D2**, d'après une qualification D3 de tour **durablement enregistrée et encore possédée** ; utiliser une vérification conditionnelle de la révision attendue (CAS ou verrou transactionnel équivalent) et la clé du tour pour éviter la double application.

- \`APPLIED\` : projection et version durablement mises à jour.
- \`UNCHANGED\` : aucune différence utile ; ne pas incrémenter la révision à chaque bavardage.
- \`CONFLICT\` : une écriture plus récente existe ; relire et réconcilier, **sans écraser** ni valider la projection obsolète.
- \`UNAVAILABLE/UNKNOWN\` : pas de vérité de nouvel aperçu ; conserver la précédente projection confirmée avec un signal de fraîcheur/erreur compréhensible.

Ne pas conserver une mise à jour « best effort » silencieusement présentée comme complète. En cas de perte d'ownership du tour Nora, générateur en erreur, résultat partiel ou \`qualification.status=UNAVAILABLE\`, **ne pas inventer d'aperçu**. Le mécanisme de replay de tour doit retrouver l'ACK de l'effet d'aperçu ou constater explicitement son état incertain.

L'ancien \`PATCH\` manuel : évaluer sa compatibilité ; s'il est conservé comme correction secondaire, imposer le même contrôle version/provenance/permission et aucune bifurcation de vérité. **Aucun chemin d'écriture libre** ne doit contourner la révision.

## 5. Séquence de traitement d'un tour Nora

1. **D1/D2** : authentification et propriété de la préparation ; identité du tour, corrélation, garde anti-duplication existante.
2. **D3** : composition du contexte autorisé, historique sélectionné, D4 pertinent ; **un seul moteur Nora**, génération de la réponse et qualification structurée du même tour ; extraction **jamais depuis le texte Markdown affiché après coup**.
3. **Protection du tour** : qualification/commande durables, contrôle de propriétaire de tour et d'applicabilité, idempotence sur répétition ; les cas \`UNKNOWN\` suivent la reprise du propriétaire existant.
4. **D2 projection** : seulement pour une qualification fiable et un changement matériel ; contrôle de révision, sources et absence de projet déjà créé ; mettre à jour l'état inspectable.
5. **Retour client** : réponse Nora, messages et **projection réellement enregistrée** ou statut de divergence ; UI rafraîchit la projection, ne fabrique pas un état « prêt » local.
6. **Dialogue suivant** : Nora exploite le contexte fidèle et les corrections du Pilote ; si une proposition change, nouvelle version, pas mutation historique.

**Important :** la projection ne devient **pas un mécanisme indépendant de décision/mobilisation de capacité**. Si la qualification structurée actuelle ne peut pas porter la proposition, l'extension doit s'intégrer au contrat de sortie D3 existant, avec fallback \`UNAVAILABLE\` neutre. Aucun worker ou agent de projection séparé n'est requis par principe.

## 6. Création de projet : conserver le propriétaire et le point d'effet

**Commande existante à conserver :** \`POST /api/preparations/{preparationId}/create-project\` → \`createProjectCommand()\` ; transaction atomique, propriété, idempotency key/fingerprint, unicité du lien préparation→projet, et \`reconcileCreateProject()\` après ACK perdu.

**Avant clic :** l'UI présente la version effectivement inspectée, un nom/objectif exploitables ; si la proposition change, le Pilote voit la nouvelle version. L'état recommandé par Nora **n'est pas la condition d'autorisation**.

**Au clic :** geler dans une intention de création client : \`preparationId\`, \`expectedCreationRevision\`, nom/résumé inspectés, \`idempotencyKey\` stable ; \`clientIntentKey\` seulement lorsqu'une mission structurée et **vérifiée côté serveur** s'y applique. Les paramètres replay doivent garder le **même fingerprint**, même après timeout — ne pas piocher silencieusement les nouvelles valeurs du state React.

**Point de vérification serveur :** révision D2 actuelle, propriété, préconditions minimales, contexte libre de doublons, fingerprint, éventuelle liaison mission. Le projet ne reçoit **que l'acte explicite** ; aucune mutation projet depuis le traitement Nora ou depuis un GET. Si la projection change entre inspection et clic : \`CONFLICT\`, demande de réinspection, **zéro nouveau projet**.

**Résultats exposés :**
- \`CREATED\` : projet + lien et commit confirmés ; navigation puis marqueur « Projet créé » fondé sur effet.
- \`ALREADY_CREATED\` : réconciliation vers le **même projet** sous droits, sans second insert.
- \`CONFLICT\` : détail utile sur version ou intention ; maintien dans le sas.
- \`FORBIDDEN/INVALID_REQUEST\` : refus réel ; pas de navigation projet.
- Réseau/ACK incertain : GET de réconciliation par clé/owner ; **pas de retry POST automatique ni succès supposé**.

**Tolérance aux concurrents :** la garde UI UX-004 \`single-flight\` est **document-scoped** et ne remplace pas l'unicité transactionnelle serveur D2. Conserver les mécanismes serveur pour onglets, sessions, crashes et redémarrages. La recommandation Nora n'est jamais une \`HumanDecision\`.

**Après commit :** le même \`conversation.id\` lié à la préparation doit rester la source du fil initial dans l'espace projet. Le passage conserve messages, docs, connaissances D4 et références D6, avec leurs statuts ; pas de nouveau \`Conversation\` silencieux ou de reset. Aucun cycle/CKC/Git ni nouvelle mission Cursor ouverte par la création seule.

## 7. Conception UX et intégration shell

**Source visuelle :** cinq frames 1680×970 dans Figma, **VALIDATED UX MORRIS**. Les écrans représentent des variantes sémantiques, **pas cinq routes ni cinq composants dupliqués**.

- \`StudioShell\` et la résolution de surface identifient le sas avant création et sélectionnent le **rail personnel minimal**, largeur 246 CSS px ; les variantes projet/conversation/inspection restent inchangées.
- Le fil Nora, le composer et les messages forment une **zone principale défilante** ; rail fixe, zone de saisie accessible, pas d'onglets dupliqués au-dessus du chat.
- La colonne droite rend le snapshot \`PreparationProjection\` ; libellé de validité, nom/intention/résultat/périmètre/points utiles à la bonne densité. Les données absentes ne sont pas remplacées par des exemples ou du texte généré.
- Le bouton \`Créer le projet\` est un acte dédié, désactivé seulement pour une impossibilité applicative connue ; si Nora juge le projet « pas encore suffisamment clair » mais les préconditions D2 sont satisfaites, ne pas inventer un gate dur dans le composant.
- Le formulaire manuel n'est **pas** une étape ni un deuxième chemin canonique. Ajustement secondaire éventuel uniquement si utile et protégé.
- Le marqueur « Projet créé » et l'arrivée dans l'espace projet résultent du lien serveur durable, non d'une animation ou de \`router.push()\` seul.
- États loading/empty/refused/conflict/unknown/stale/reprise/longues réponses ; clavier/focus et lecture sécurisée Markdown ; présentation proportionnée des limitations.

**Géométrie et preuves :** comparer la source Figma native et le runtime à une même taille/conditions pour les rectangles stables (contrats F1/F2 applicables), sans modifier les tolérances existantes. Les **captures et l'acceptation visuelles relèvent de Morris** lors de la recette ; les screenshots Playwright éventuels de Cursor sont de l'outillage diagnostic, pas une acceptation visuelle substitutive. Mobile : smoke technique seulement, selon arbitrage Morris.

## 8. Blast radius et découpage d'intégration

| Surface | Nature de l'impact | Contrôle demandé |
| --- | --- | --- |
| D3 / réponse structurée | Extension sémantique de la qualification, attribution de provenance, pas de deuxième modèle | Tests fixture/REAL/LIVE ciblés, replay, erreurs, injection/sources hostiles |
| D2 / projection | Nouveau snapshot typé et versionné ou alternative équivalente justifiée | CAS, ownership, pas de dual-write divergent, lecture/reprise, migration éventuelle |
| D2 / création | Geler version/fingerprint et lien, réconcilier sans nouveau POST | Tests transactionnels avec DB, crash avant/après commit, conflits multi-onglets |
| D4 / connaissance | Lien vers faits/points existants ; statut/provenance préservés | Pas de promotion d'hypothèse ni fuite interprojet |
| D6 / autorité | Recommandation ≠ acte humain ni mandat d'exécution | Tests négatifs, permission, session, gouvernance |
| API préparation et messages | Contrats additifs, erreurs et révisions sans rupture des clients | Tests de compatibilité anciens/actuels, codes HTTP fidèles |
| UI sas + rail | Retrait navigation projectisée pré-création, panneau vivant, composer | BROWSER de fonctionnement, vérification Morris des captures |
| Projet post-création | Fil continu, transfert vrai, affichage portefeuille | E2E sas→projet, reprise, absence cycle/CKC/Git induits |
| ENV/DB | Migration potentielle et coexistence ancien/nouveau candidat | Pré-check ENV-01, sauvegarde, exit, rollback, aucune mutation RECETTE avant GO |

**Travail intégré** : analyse du diff local candidat, adaptation D3, éventuelle extension D2, UI, tests, docs/as-built et Review Pack dans **un seul macro-lot de delivery** avec intégrateur Cursor. Les frontières API/DB/D6 sont des **gates de responsabilité**, pas des micro-tâches indépendantes. Ne pas paralléliser la persistance et le moteur Nora sans avoir d'abord figé le contrat de projection.

## 9. Matrice de tests obligatoires — automatique ≠ revue visuelle Morris

| ID | Contrôle / injection | Résultat attendu | Niveau |
| --- | --- | --- | --- |
| **SAT-01** | Nouvelle préparation + premier tour faible | Réponse utile ; pas de projet ; aperçu vide ou partiel honnête | UNIT/API/BROWSER |
| **SAT-02** | Tours successifs avec qualification structurée | Aperçu progresse et conserve statut/source/revision sans formulaire | UNIT/DB/API |
| **SAT-03** | Qualification sans différence matérielle | \`UNCHANGED\`, pas de saut de révision gratuit | UNIT/DB |
| **SAT-04** | Qualification \`UNAVAILABLE\`, provider down, réponse partielle | Aucune proposition inventée ; dernier snapshot fiable et état de fraîcheur correct | UNIT/API |
| **SAT-05** | Deux tours concurrents / owner perdu | Un seul effet confirmé par tour, pas d'écrasement de version plus récente | PG/UNIT |
| **SAT-06** | Replay identique de tour/correlation | Projection appliquée au plus une fois, même résultat/revision reconstituable | PG/API |
| **SAT-07** | Pilote corrige nom ou périmètre | Projection cohérente et sourcée ; ancienne hypothèse non présentée comme actuelle | UNIT/API + Nora LIVE |
| **SAT-08** | Nora indique « base suffisante » | Conseil visible mais pas d'acte D2 ni droit nouvellement conféré | UNIT/BROWSER |
| **SAT-09** | Pilote veut créer avant recommandation Nora | Préconditions D2 objective seulement ; aucun gate IA supplémentaire | UNIT/API/BROWSER |
| **SAT-10** | Création avec projection courante | Snapshot contrôlé, \`CREATED\`, vrai lien, nom et résumé inspectés | PG/API/BROWSER |
| **SAT-11** | Mise à jour Nora/second onglet pendant clic de création | Conflit version, zéro projet, réinspection | PG/API |
| **SAT-12** | Double clic, plusieurs sessions/onglets, clé rejouée | Pas de double projet, résultats canoniques et owner-scoped | PG/API |
| **SAT-13** | Crash avant/après commit ; ACK perdu | Réconciliation par key, aucune fausse confirmation ou nouveau POST | PG/API |
| **SAT-14** | Reprise, ancienne préparation sans projection additive | Lecture compatible, pas de création ni de reconstruction fictive | PG/API/BROWSER |
| **SAT-15** | Création puis continuation de Nora dans le projet | Même fil visible, marqueur vrai, droits/documents/acquis conservés | E2E/PG/BROWSER |
| **SAT-16** | Longue conversation, points ouverts et sources | Context selection D3/D4 fidèle et proportionnée ; pas d'injection exhaustive obligatoire | API + Nora LIVE ciblé |
| **SAT-17** | Session expirée / autre Pilote / source Git hostile | Aucune fuite ni création implicite ; erreurs réelles | API/sécurité |
| **SAT-18** | Navigation UX-003/UX-004 et autres rails | Pas de régression login, portefeuille, bouton Nouveau projet, Intégrations | BROWSER |
| **SAT-19** | Figma vs runtime desktop, vidéo/captures éventuelles | Sources et mesures disponibles ; **verdict visuel prononcé par Morris seulement** | MORRIS UI |
| **SAT-20** | Qualité cognitive Nora en LIVE réel et fixture | Grille \`AF-14\` : progression, pertinence, corrections, suffisance expliquée, limites ; différencier LIVE de fixture | NORA LIVE + revue |

**Données et sécurité :** fixtures isolées ; DB de test dédiée ; tests de concurrence véritables en PostgreSQL ; identités/personas distincts ; pas d'effets Git ou Cursor réels dans ces tests. Journaliser uniquement corrélations et catégories d'erreurs utiles, jamais prompt sensible, secret ou transcript privé brut.

**Niveaux revendicables séparément :** DOCUMENTED / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN (dans la limite du scénario) / ADOPTED ; BROWSER-FAKE ≠ PG REAL ≠ Nora LIVE. **Le dossier ne peut dire « conforme visuellement » sur seule affirmation Cursor** ; Morris fournit les captures et le verdict UX.

## 10. Critères de livraison, preuves et gates

**Pré-check Cursor requis avant code :** dépôt/origin, ref/branche/HEAD/base, code local post-UX-004, staged/unstaged/untracked, SEF/roadmap/décisions Git, fichier SFIA v2.6 \`method/sfia-fast-track/core/sfia-cycle-routing-guide.md\` et \`prompts/templates/sfia-cycle-execution-template.md\`, CKC applicable ; DB/ENV-01 ; exact contrat Figma validé. **Si pré-check incomplet : pas de prompt d'exécution**, conformément à SFIA Next.

**Condition de GO code futur :** revue par Morris du **résultat produit** décrit par ces deux documents, puis mandat Cursor borné qui nomme explicitement les modifications techniques permises, y compris **option C / migration ou API** si nécessaire. L'avis de Morris sur un design ne vaut pas un GO migration générique ; une frontière hors mandat déclenche STOP. Les décisions normatives, ADR et pivots relèvent de la gouvernance D2.

**Livrables d'un seul cycle d'intégration :**
1. Contrat fonctionnel/technique relus, diff du code contre candidat local.
2. Source D3 et projection D2 intégrées sans seconde autorité.
3. UI transposée depuis les cinq frames, sans Figma modifié en douce.
4. Tests propriétaires + consommateurs, scénarios négatifs, preuves LIVE ciblées lorsque exécutables.
5. As-built et journal de livraison synchronisés avec le **code réel** ; contradiction code/doc = KNOWN GAP.
6. Review Pack **Full** mono-cycle avec contenu exploitable, handoff SFIA v2.6 \`required/publish-in-cycle\` mono-fichier ; commit local projet, **aucun push projet** sans GO spécifique.
7. Revue ChatGPT, puis GO RECETTE distinct, puis **recette et captures Morris**.

**Critères de réception utilisateur :** intention floue → compréhension utile → aperçu vivant → appréciation expliquée → clic explicite → création vérifiée → même conversation dans le projet. Aucun formulaire obligatoire, aucune décision/projet/cycle fabriqué ; limites et points ouverts restent visibles.

**Dette / exit :**
- Faire disparaître le formulaire « Constituer une proposition » comme parcours dominant ; si compatibilité requise, marquer le fallback et son échéance de retrait.
- Éviter le double stockage non contrôlé entre \`previewName/previewSummary\` et la projection : documenter compatibilité, synchronisation et exit.
- Si projection additionnelle : migration avec stratégie additive/rollback, révision schéma, lecture des anciennes préparations, aucun backfill inventant une provenance.
- Si les limites fournisseur empêchent la sortie structurée D3 : \`UNAVAILABLE\` honnête + preuve d'impasse, pas de moteur de scraping textuel masquant le déficit.

**État final de ce document : DOCUMENTED — CANDIDATE, NOT IMPLEMENTED.** Aucune autorisation de migration/RECETTE/PR/merge/STABLE/release/ADOPTED, aucune fermeture ML4D/Gate C par cette publication. Suite : revue produit Morris des invariants, puis qualification et génération d'un **unique contrat Cursor SFIA v2.6** lorsque les gates sont satisfaits.
