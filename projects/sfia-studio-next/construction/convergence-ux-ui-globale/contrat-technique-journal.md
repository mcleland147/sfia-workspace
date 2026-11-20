# SFIA Studio Next — Ensemble 06 / Journal
## Dossier de réconciliation technique et contrat d'architecture candidat

| Métadonnée | Valeur |
| --- | --- |
| Version | **v0.3 — 19 novembre 2026** |
| Statut | **CANDIDATE TECHNICAL CONTRACT / DOCUMENTED — PRINCIPE D'ÉVOLUTION INTERNE D4 VALIDÉ MORRIS ; MODÈLE PHYSIQUE CANDIDAT ; EXÉCUTION NON OBSERVÉE** |
| Nature | **Dossier intégré** : audit AS-IS, architecture cible candidate, contrats techniques, contrôles de cohérence, qualification de couverture et préparation des preuves |
| Capacité | Journal du projet : Sujets, Décisions, recherche, points ouverts, continuité cognitive et sources |
| Produit / lot | SFIA Studio Next / R5 — Ensemble 06, **UX ML4D et extensions fonctionnelles D3/D4/D6 sous gate distinct** ; Journal uniquement, Bibliothèque Documents conserve sa propre expérience |
| Autorité fonctionnelle | **[Contrat fonctionnel/UX Journal v1.0](journal-contrat-fonctionnel-ux-candidat.md)** — **VALIDATED SPEC par Morris le 19/11/2026** ; onze frames Figma V4 validées en conception |
| Base code et architecture analysée | **mcleland147/sfia-workspace — main@d3d199adb782462b93467934f5f1e8a0c98fb492** |
| Branche de publication | **sfia/next-journal-conception-fonctionnelle-ux-20261119** — candidate, distincte de main |
| État local / navigateur / base DEV-RECETTE / tests exécutés dans cette revue | **NON OBSERVÉS / NON EXÉCUTÉS**. Analyse de Git distant et des tests présents, pas preuve de runtime |
| Gouvernance | Morris arbitre produit, architecture structurante et gates ; ChatGPT prépare/revoit ; Cursor réalise sous contrat technique et **GO distinct SFIA v2.6** |
| Effet Git de ce document | **Création documentaire candidate uniquement** ; aucune modification de SEF, R1/R2, ADR, Roadmap, Figma, code, tests, DB, CI, PR, merge, Gate C, STABLE, ADOPTED ou promotion |

> **Arbitrage Morris explicite du 19/11 :** D4 conserve ses responsabilités actuelles et reçoit les capacités nécessaires au Journal (synthèses durables, historique, questions, liens, récupération). **Aucun nouveau domaine, moteur ou stockage de mémoire parallèle.** D3 analyse/rédige, D4 conserve/versionne/restitue, D6 demeure seule autorité de décision. Le §16 définit la **cible physique candidate** des extensions internes D4 et prévaut sur les alternatives exploratoires des §§6.2 et 15.3. Les migrations, les gates et les preuves conservent leurs contrôles propres.

> **Hiérarchie et règle d'honnêteté.** Git code + preuves réellement vérifiées > décisions Morris/ADR > contrats R1/R2 et UX validés > ce **contrat technique proposé** > hypothèses. Un test identifié dans le dépôt n'est pas un test exécuté au présent. « Implémenté dans le code » ≠ « couvert » ≠ « comportement prouvé ». Les choix de modèle de données ci-dessous sont **recommandations candidates**, non migration ni architecture nouvellement approuvée. Toute contradiction entre code et documentation est un **KNOWN GAP** à résoudre dans le même macro-lot que son comportement.

---

## 1. Décision attendue du dossier et résultat Pilote

Le besoin utilisateur **est gelé** : Journal intelligent, mémoire durable sémantiquement synthétisée, sujets initialement autonomes pouvant devenir parents, questions et documents contextualisés, deux vues **Sujets / Décisions**, filtre des **Points ouverts**, recherche contextualisée, liste → **40 % navigation / 60 % lecture** → agrandissement réversible, références aux échanges exacts, retour au fil Nora sans message automatique. La décision est une **synthèse contextualisée de son cheminement**, reliée à l'acte officiel D6 et à ses sources, jamais une copie verbatim ou une autorité issue de la mémoire.

Ce dossier a trois résultats concrets :
1. **Qualifer les écarts réels** entre le code courant de Next, les contraintes R4/R5 et le contrat fonctionnel validé ;
2. **Choisir une trajectoire candidate minimale et cohérente** pour obtenir la cible, sans nouveau moteur, registre ni micro-cycles ;
3. **Fournir les conditions testables et les dépendances** nécessaires à une revue Morris puis à un futur contrat d'exécution Cursor, sans produire celui-ci avant gate.

**IN :** D3 cognition/récupération, D4 sujets/connaissance/documents comme sources, D6 projection des actes, UI Journal, navigation vers Travail, sécurité/droits, concurrence et tests du parcours intégré. **OUT :** réécriture de la Bibliothèque Documents, édition dans Travail, refonte complète D5/D6, moteur général de recherche du fil, deuxième historique des messages, workflow d'exécution D7, nouveau module D8, nouvelle autorité, ajout d'un écran non validé.

### 1.1. Jalon et placement en trajectoire

- Roadmap — état courant : ML4C **CLOSED WITH RESERVES**, ML4D **en trajectoire de convergence**, Gate C **OPEN**, ML5 et R6 **non acquis**. Le [registre ML4D](registre-central-revues.md) section 2 inscrit Ensemble 06 Documents/Journal parmi les surfaces à revoir ; la [fiche de reprise](ensemble-06-documents-journal-reprise.md) indique des prérequis et ne vaut pas GO delivery.
- [Décision R5 du 11/11](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) : **UX des capacités existantes = ML4D** ; ajout ou modification fonctionnelle profonde, API, données, autorité ou persistance = **changement à qualifier et arbitrer**, sans faire passer tout changement sous l'étiquette « cosmétique ML4D ».
- **Proposition de gestion :** conserver **un macro-lot intégrateur « Journal cohérent de bout en bout »** dans la préparation et les preuves. Identifier en son sein le **socle de transposition UX ML4D** et les **extensions métier/données D3/D4/D6 conditionnelles**. Si le gate ML4D n'autorise que l'UX, les travaux structurels ne sont **pas exécutés** par anticipation : leur périmètre, gate et trajectoire sont présentés ensemble à Morris.
- La revue technique n'ouvre aucun nouveau cycle SFIA v2.6 et ne clôt pas Ensemble 06 ni ML4D.

## 2. Sources examinées et priorité

| Niveau | Source sur Git | Consommation dans ce dossier |
| --- | --- | --- |
| Autorité | [R4 ADR approuvés](../../governance/decisions/2026-11-04-r4-architecture-exit.md), [SEF v0.2](../../governance/SEF.md), [Roadmap](../../governance/roadmap.md), [naming VALIDATED](../../governance/product-naming-conventions.md) | Application modulaire Next, source transactionnelle PostgreSQL, D1–D9 propriétaires, gates, statut et noms produit |
| Produit | [R1 vision](../../cadrage/vision-produit.md) §§2.8–2.14, [R2 D4](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), [R2 D6](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) et [R2 D3](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) | Règles de récupération, de provenance, de sujets, de décisions et de reprise |
| UX gelée | [Journal fonctionnel/UX v1.0](journal-contrat-fonctionnel-ux-candidat.md) §§2.1–2.3, 4–9 ; [Figma V4 Journal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-2) | **11 frames approuvées**, deux onglets, filtre, recherche et lecture 40/60 |
| Technique existante | [R4 architecture](../../architecture-technique/cadrage-r4.md), [R5 ML2](../ml2-production-et-capitalisation-nora/specification-technique.md), [R5 ML3](../ml3-pilotage-et-decisions/specification-technique.md) | Frontières D3/D4/D6 et contrats de continuité/idempotence, as-built historique |
| Interfaces adjacentes | [Contrat Technique Travail avec Nora](contrat-technique-travail-avec-nora.md) et registre ML4D | Reprise fil/scroll, brouillon, visionneuse Travail séparée, sans régression Ensemble 05 |
| Code observé | §3 et annexe A ; HEAD main ci-dessus | **Source d'observation** ; tout contrat non encore codé est qualifié comme écart |
| Preuves disponibles | §10, fichiers des tests présents dans web/tests ; CI historiques mentionnées dans Roadmap | **COVERAGE TO ASSESS** : les sources de tests existent, leur exécution actuelle n'a pas été faite ici |

R4 exclut un moteur parallèle, des microservices par domaine et un second stockage autorisant. Les données R5 actuelles sont en PostgreSQL/Drizzle. Aucune option vectorielle ou orchestrateur générique n'est choisie par ce dossier.

## 3. Diagnostic de l'implémentation sur main

**Méthode :** inspection ciblée du code Git, schéma, services, routes, composants et scripts de tests cités ci-dessous ; pas d'accès au working tree local, pas d'exécution du projet et pas de comparaison screenshot runtime de la V4. Les classes d'état sont : **CODE OBSERVÉ**, **PARTIEL POUR LA CIBLE**, **NON OBSERVÉ DANS LES CHEMINS AUDITÉS**, **NON PROUVÉ PAR RECETTE**, **KNOWN GAP** en cas de divergence contractuelle.

| Capacité | Code actuel et observation vérifiable | Verdict vis-à-vis de Journal v1.0 |
| --- | --- | --- |
| **D4 base de connaissance** | [schema.ts](../../web/src/db/schema.ts) : `` knowledge_subjects, knowledge_acquis, knowledge_open_points, knowledge_subject_events ; [service.ts](../../web/src/domains/knowledge/service.ts) : listKnowledge, ensureSubject, renameSubject, mergeSubjects, splitSubject, capitalizeAcquis, openPoint | **CODE OBSERVÉ / PARTIEL** : identités/filiation/provenance présentes, mais synthèse éditoriale du sujet et révision associée **non représentées** dans ces tables |
| **Hiérarchie** | knowledge_subjects.parentSubjectId + originatedFromSubjectId ; ensureSubject accepte un parent ; splitSubject crée une identité avec originatedFromSubjectId mais **parentSubjectId non renseigné** dans la scission inspectée ; mergeSubjects migre acquis/points et conserve un événement | **KNOWN GAP fonctionnel** : *filiation historique* ≠ *appartenance actuelle à l'arbre* ; reparentage, cycles et intégrité des enfants/fusions à spécifier |
| **Contenu du sujet** | Les acquis et openPoints ont subjectId, statement et provenanceJson ; les sujets ont title, status et relations mais **pas de summary/snapshot éditorial** | **ABSENT dans le modèle inspecté** ; la fiche V4 nécessite une synthèse actuelle persistée avec provenance, état/version et reprise |
| **Capitalisation sélective** | maybeCapitalizeFromExchange consomme des propositions typées, admet zéro écriture si aucune proposition ; turnFence ; refus de promotion FACT automatique sur « established » déclaré par Nora | **SOCLE CODE OBSERVÉ**, évolution autonome et correction sémantique longue **à construire et prouver**, sans transformer une proposition en décision D6 |
| **Points ouverts** | openPoint crée un élément OPEN ; liste D4/outil recherche filtrent OPEN ; dans service D4 inspecté, **pas de commande exposée de clôture factuelle étayée/réouverture** | **PARTIEL** ; prévoir identité, qualification, historique de fermeture/réouverture et stricte frontière réserve gouvernée D6 |
| **Récupération par Nora** | selectRelevantKnowledgeContext privilégie ids sémantiques puis listing borné ; [d4-read-tools.ts](../../web/src/domains/conversation/d4-read-tools.ts) expose searchProjectResources et readProjectDocumentRevision, avec droits, budgets et couverture PARTIAL/STALE ; [history-tools-sdk.ts](../../web/src/domains/conversation/history-tools-sdk.ts) et [history-tools.ts](../../web/src/domains/conversation/history-tools.ts) recherchent/lisent des messages exacts avec droits/cursor | **BASE RÉUTILISABLE**, vérification currentness, contradictions et synthèse globale décisionnelle **NON PROUVÉES** sur parcours réel |
| **Recherche actuelle** | searchProjectResources : ILIKE sur titres des sujets, texte des acquis/points et titre documents, pagination SQL par type, pas projection de résultats regroupés par sujet ; accès outillé Nora, non route UI Journal | **PARTIEL** : la recherche V4 doit retrouver *un sujet via son contenu*, indiquer raison, chemin et droits ; Décisions a un propriétaire/chemin de recherche distinct |
| **D6 actes** | [human_decisions](../../web/src/db/schema.ts), [decisions/service.ts](../../web/src/domains/decisions/service.ts) listDecisionJournal ; [route GET](../../web/src/app/api/projects/[projectId]/decisions/route.ts) contrôlée par session/projet | **CODE OBSERVÉ** ; réutiliser la projection D6, ne pas stocker de seconde vérité dans D4 |
| **D6 restrictions** | governance_restrictions contient ACTIVE/LIFTED et relations aux décisions ; authority.ts qualifie la restriction au point d'effet ; listDecisionJournal **ne joint pas ces lignes** et liste tous les kinds de décision | **PARTIEL / risque** : badge « Suspendue » ne doit jamais être inféré de human_decisions.state seul ; le tri « décisions durables » ne doit pas supprimer une restriction pertinente |
| **Explication de décision** | human_decisions conserve statement, sourceKind/sourceRef, kind, scope et relation de remplacement, mais aucun champ de **récit contextuel**, cheminement multi-source ou qualification éditoriale | **ABSENT dans la projection inspectée** ; D3 produit une explication sourcée ; D4 peut la conserver comme lecture, D6 reste l'autorité |
| **UI Journal** | [ProjectJournal.tsx](../../web/src/components/figma/ProjectJournal.tsx) : liste plate Sujets/Acquis/Points ouverts ; directs vers Pilotage pour D6 ; absence des deux onglets et de la vue 40/60 Journal | **KNOWN GAP UX** vs Figma V4, réutiliser rail/shell plutôt que nouveau layout global |
| **Projection front** | [page.tsx](../../web/src/app/projects/[projectId]/page.tsx) autour des lignes 1915–1923 : **acquis et openPoints passés avec subjectId: null**, bien que D4 stocke le rattachement | **DÉFAUT CONCRET DE PROJECTION** à corriger, sans créer de nouveau domaine |
| **Navigation et fil** | Même page.tsx ; NoraConversation rend data-message-id ; identités exactes récupérables par les outils d'historique ; TravailViewer a un modèle split/expanded **distinct et local à Travail** | **SOCLE À RÉUTILISER** ; aucun contrat actuel de Journal→message exact→retour avec scroll et brouillon préservés prouvé |
| **Hydratation de projet** | [project-context.ts](../../web/src/domains/preparation/project-context.ts) rassemble messages, documents, knowledge et pilotage ; [GET project](../../web/src/app/api/projects/[projectId]/route.ts) renvoie ces agrégats ; les messages sont chargés par listMessages | **Risque de volume** : vérifier sélection/pagination UI pour fil 1 000+ avant implémentation des deep links et requêtes lourdes |
| **Documents** | D4 conserve identité et revisions ; DocumentLibrary/DocumentHistory existent ; la lecture par Nora revalide statut AVAILABLE et droits | **RÉUTILISABLE COMME SOURCE** : Journal référence documentId+revisionId, puis ouvre Documents ; pas de deuxième bibliothèque |

**Conclusion AS-IS :** la cible fonctionnelle ne commande pas de nouvelle architecture de domaines. Elle commande **une extension ciblée et réconciliée de D4**, une orchestration cognitive D3 réellement sourcée, une **projection officielle D6 augmentée d'une explication non autorisante**, un modèle de lecture/recherche Journal et la transposition UX V4. Ce jugement est **de conception**, non preuve que ces extensions existent déjà.

## 4. Architecture cible candidate — R4 conservé, couches sans concurrence

### 4.1. Propriétaires logiques — non un déploiement de cinq services

| Responsabilité | Propriétaire | Contrat non négociable |
| --- | --- | --- |
| Session, projet, préparation et isolation | **D1 / D2** | Résolution serveur du Pilote/projet ; aucune isolation déduite du client, du titre de sujet ou d'une source Git |
| Fil/messages, raisonnement, sélection des sources, rédaction de synthèses | **D3 / Nora** | Une conversation durable existante ; pas de décision, preuve ni sauvegarde affirmée par simple texte généré |
| Identités, hiérarchie, acquis/points, synthèses et références de connaissance ; documents/versionnement | **D4** | Une seule vérité par ressource, mutations atomiques/idempotentes, provenance/currentness, aucune copie d'autorité D6 |
| HumanDecision, opposabilité, historique, portée, révocations, suspensions, levées | **D6** | Lecture officielle revalidée ; aucune création/mutation par la projection Journal |
| Sources Git facultatives et preuves pertinentes | **D9 / D8** | Git read avec dépôt/ref/SHA/droits réels ; « contenu documentaire » ≠ « preuve » |
| Journal UX | **Front web** | Projection de lecture D4+D6, recherche/filtre/visionneuse et état de navigation seulement ; pas de base de vérité parallèle |

**Interaction cible simplifiée :**

1. **Échange Pilote–Nora** : D3 résout l'intention et les droits, sélectionne mémoire D4 et sources pertinentes, peut approfondir les messages/documents/Git réellement disponibles ; produit sa réponse de conversation.
2. **Qualification durable distincte** : D3 propose enrichissement/correction, regroupement, nouveau sujet, point ouvert/résolu ou synthèse ; D4 vérifie l'objet, la provenance, le contrôle de concurrence et la validité épistémique. Si rien ne mérite persistance : **zéro écriture**.
3. **Commit D4 confirmé** : les modifications et leur filiation sont conservées ; la projection Journal ne montre comme « actualisé » que ce qui est **confirmé**. Échec/UNKNOWN : réconciliation par clé/état avant nouvelle tentative, jamais doublon silencieux.
4. **Consultation Sujets** : le serveur fournit sujet courant, hiérarchie, synthèse, éléments directement rattachés, points transversaux et sources accessibles. La présentation 40/60 puis agrandie n'affecte aucun état D4.
5. **Consultation Décisions** : D6 fournit l'acte officiel courant/historique et les restrictions applicables. La synthèse contextualisée préparée par D3 est **une projection documentaire D4 liée à l'ID D6**, explicitement non autorisante ; si elle manque, la fiche officielle reste consultable sans raison inventée.
6. **Navigation vers source** : le message est relu depuis D3 par son ID exact, le document depuis D4 par son identité/version, le Git depuis D9 à ref vérifiée ; chaque lecture revalide droits/état.

### 4.2. Lignes rouges d'architecture

- **Ne pas** implémenter Journal en base indépendante, moteur de décision, doublon des messages ou moteur d'état de cycle.
- **Ne pas** copier automatiquement une décision D6 dans une table D4 autorisante ; ni écrire un état D6 depuis une synthèse.
- **Ne pas** considérer le statut « établi » de Nora comme validation de fait ou de preuve externe sans contrat de vérification.
- **Ne pas** relire/retraiter tout un fil à chaque message ni lancer un appel cognitif systématiquement lourd pour un échange sans apport durable.
- **Ne pas** attribuer un statut de source actuelle à Git candidate, PDF obsolète, message historique ou lien révoqué sans réévaluation.
- **Ne pas** greffer la visionneuse Journal dans l'édition Documents ni la visionneuse rapide Travail : mutualiser seulement les primitives réellement réutilisables.
- **Ne pas** renommer les nouveaux concepts par numéros de chantiers historiques. Les numéros ci-dessous sont des **repères de recette**, pas des noms de classes, tables ou composants.

## 5. Contrats techniques par responsabilité

### 5.1. Sujets : arbre évolutif, synthèses et filiation (D4)

**Objet de lecture candidat :** SubjectView avec id durable, projectId/preparationId autorisé, title, parentSubjectId courant, status, summary courant **avec état de conservation**, révision/updatedAt confirmés, nombre d'enfants, acquis/questions appartenant directement au sujet, références essentielles, décisions D6 liées **en lecture**, et événements significatifs accessibles à la demande.

**Commandes candidates :** createSubject, updateSubjectSummary, rename, reparent, split, merge, reassignKnowledge, closeOrReopenFactPoint ; les noms sont **illustratifs et NON des signatures API ratifiées**.

**Invariants à imposer :**
- Sujet initial **feuille pleinement informée** ; peut devenir parent **sans changer d'id**. Ses acquis/questions généraux restent au parent ; éléments spécifiques chez enfants ; pas de copie massive des descendants.
- parentSubjectId **représente la hiérarchie courante**, originatedFromSubjectId/événements la **filiation historique** ; l'un ne remplace jamais l'autre.
- Parent/enfant même Pilote/projet/preparation ; refuser parent inconnu, archivé/absorbé, auto-parentage, cycles transitifs, croisement de projets, reparentage instable sous concurrence.
- Split : nouvelle identité + éventuel vrai parent si la sémantique le justifie ; déplacement atomique de la sélection d'acquis/points ; liens/recherches de l'ancienne fiche encore résolubles. Merge : transférer les items et traiter explicitement les **enfants**, chemins, références et anciennes identités ; ne jamais créer orphelins ou cycles.
- Opérations transactionnelles et sérialisées sur les sous-arbres concernés, version attendue/ou clé d'idempotence, conflit explicite, historique utile, réconciliation après ACK perdu.
- Renommer/déplacer ne modifie pas les dates d'autorité, contenus sources ou HumanDecision.

**Projection :** ne plus écraser subjectId dans page.tsx ; préserver les liens acquis/sujet et question/sujet depuis le DTO jusqu'à l'écran. La synthèse d'un parent se lit **sans joindre aveuglément tous les textes des enfants**.

### 5.2. Mémoire sémantique et actualisation continue (D3 → D4)

Le pipeline actuel à propositions typées reste le **point de départ**. L'étendre vers enrichissement/révision d'un sujet existant, synthèse consolidée, correction, reclassement et détection d'anciens points pertinents. D3 décide **ce qu'il propose**, D4 contrôle **ce qui est durablement sauvegardé**.

**Contrat de persistance candidat :** un changement validement qualifié référence le sujet/objet, sa version lue, les sources motivant la mise à jour, la qualification actuel/historique/hypothétique/insuffisant, l'identité de génération/tour, et une clé stable d'opération. D4 compare version/portée et applique atomiquement, renvoie **AVAILABLE / SKIPPED / CONFLICT / DENIED / UNKNOWN** selon l'effet observé ; les noms exacts seront harmonisés avec les statuts existants, pas multipliés arbitrairement.

**Modèle de cohérence :** D3 peut traiter au fil de l'eau les nouveaux échanges avec contexte sélectionné ; si la mise à jour tarde, le Journal rend l'ancienne version **sans annoncer qu'elle est fraîche** ; un retry cherche d'abord l'opération persistée ; réconciliation/backfill bornés plutôt que double écriture. Pas de traitement asynchrone « fantôme » sans mécanisme de déclenchement/suivi/reprise prouvé.

**Qualité cognitive :** comparaison d'un sujet ancien, d'une correction, de deux sources contradictoires et d'une réorganisation ; style synthétique intelligible et fidèle, pas liste de fragments/citations ; distinguer fait officiel, analyse raisonnable, doute et point à clarifier. Mesurer aussi **coût/latence** et stabilité inter-sessions.

### 5.3. Questions ouvertes : statut factuel versus gouvernance (D4 / D6)

D4 possède les **questions factuelles ou sémantiques** avec histoire et liens ; D6 possède **la levée opposable** de ses restrictions et actes. Un item « point ouvert » peut référencer une restriction D6, mais **ne la gouverne pas**.

**Contrat candidat :** ouvrir → éventuellement clarifier → résoudre factuellement avec source/version suffisante et acteur/instant/raison → rouvrir si contradiction ; historique conservé. Une question purement factuelle peut être marquée résolue par D4 **sous validation de source indépendante** ; une réserve nécessitant GO/levée demeure ouverte/opposable jusqu'à lecture d'un acte D6 valide. Une preuve technique nouvelle n'efface pas une suspension humaine.

**Lecture transverse :** filtre Points ouverts dans Sujets = **projection** des points significatifs non résolus et restrictions/conditions pertinentes référencées, avec sujet d'origine, nature, état exact, lien et provenance. Aucun troisième registre, pseudo-checklist ou compteur trompeur. Combinaison requête + filtre = sémantique explicite d'intersection, à recetter.

### 5.4. Décisions : acte D6 + explication D3/D4 strictement séparés

**Deux objets d'information, un seul objet d'autorité :**

**A. OfficialDecision (D6)** : id, kind, statement, auteur/source, objectRef/portée, effectiveAt, état applicable ou historique, liens supersedes/revokes, restrictions ACTIVE/LIFTED et conditions pertinentes lues **au moment de la consultation**. Enregistrer/ajuster l'acte **uniquement dans les commandes D6 existantes**, jamais par Journal.

**B. DecisionExplanation (D4, candidat non autorisant)** : decisionId D6 et révision/identité de base, synthèse éditoriale du **contexte**, alternatives réelles, contraintes, motivations établies, réserves, conséquences sémantiquement soutenues, références essentielles sourceId+version/SHA, nature de l'assertion (« exprimé », « déduit », « non confirmé »), état de fraîcheur/version de ce résumé. **Aucun booléen d'autorisation, état de suspension ou date d'effet autonome**.

**Pipeline candidat :** partir de l'acte officiel D6 retrouvé ; rechercher au-delà du dernier message les échanges réellement déterminants avec outil D3 autorisé (sources documentaires D4/Git quand disponibles) ; qualifier provenance et contradictions ; rédiger une **explication construite**, pas un verbatim ; conserver si réellement utile. À chaque nouvelle décision/remplacement, invalidation ou signal « contexte à requalifier » de l'explication jusqu'à réconciliation ; **D6 fait toujours foi**, même si le texte explicatif est périmé.

**Tri d'onglet :** départ recommandé sur **arbitrages durables** (notamment RECORD_DECISION/REVISE_DECISION et autres kinds lorsqu'ils portent réellement une orientation durable), sans généraliser tous GO/cycles/restrictions à un journal exhaustif. La règle de filtrage exacte doit préserver une relation consultable avec les autres actes nécessaires à l'intelligibilité et l'opposabilité ; ne jamais coder un tri irréversible sur le simple libellé kind sans tester les cas R2. Pilotage reste propriétaire des actions de gouvernance.

**États d'honnêteté :** source/acte D6 inaccessible → pas de fausse fiche officielle ; motif non retrouvable → décision affichée avec « contexte non confirmé/partiel » ; ancien acte remplacé → historique consultable avec badge historique, **pas applicable** ; restriction ACTIVE → statut d'effet qualifié depuis restrictions et autorité D6, **pas à partir de human_decisions.state seul**.

### 5.5. Recherche : vue Sujets versus Décisions

Réutiliser si suffisant la recherche PostgreSQL existante pour **D4**, après changement de projection :
- **Sujets** : le résultat est le sujet (id, titre, chemin parent, résumé, partie de connaissance/acquis/point correspondante et état réel), y compris si le terme **ne figure pas dans le titre** ; restituer *pourquoi ce résultat* sans score opaque.
- **Points ouverts** : intersection de la requête et des points réellement OPEN/restrictions concernées, puis remontée vers leur sujet ; historique et résolu ne doivent pas alimenter par défaut le filtre actif.
- **Décisions** : requête sur la lecture D6 autorisée et les **explications D4 valides**, sans promotion de ces explications en décisions officielles.
- **Contrat de récupération** : scope serveur/pilot/projet/preparation, taille de page bornée, ordre stable, curseur ou pagination cohérente, état EMPTY/PARTIAL/STALE/DENIED explicite ; les résultats, compteurs et extraits n'exposent jamais un projet tiers.
- **Choix algorithmique** : SQL/ILIKE et agrégation par sujet d'abord ; **FTS/index dédié uniquement si des mesures de pertinence/latence sur corpus réaliste le justifient** ; pas d'embeddings obligatoires ni de réindexation de tout le fil au premier rendu.

### 5.6. Journal V4 et navigation (Front, D3, D4, D6)

Les **11 frames V4 du §9.3 du contrat fonctionnel** forment le contrat visuel. La page projet et le shell existants restent maîtres du rail global. Créer un **état de lecture Journal** indépendant de TravailViewer, sans route/second chat fantôme ni duplication du rail :
- État nominal : Journal pleine largeur, deux onglets, arborescence ou liste D6, barre de recherche contextualisée, filtre Points ouverts côté Sujets uniquement.
- Sélection : **même Journal réadapté** à 40 % navigation / 60 % visionneuse ; conserver identité et place du contexte liste, requête, filtre, expansion, sélection et scroll.
- Agrandissement : lecture de l'objet sur surface principale, informations enrichies, action Réduire sans repartir sur une page neuve ; viewport plus étroit = variante accessible/reflow **à tester**, pas 40/60 serré de force.
- Références : navigation explicite vers message source exact (data-message-id déjà présent), document/version dans Documents, autre source autorisée. Le retour ramène au sujet/position ; ne perd pas le brouillon de Travail ni l'ancrage de lecture et **n'envoie aucun message**. Conserver les règles M1–M5 et UX-002 d'Ensemble 05 ; ne pas inférer de GO ni d'acte D6 de la navigation.
- Explication visuelle : décision clairement distinguée de son récit interprétatif ; statut et portée réellement revalidés ; ne pas afficher une date « dernière actualisation » sans commit D4.

### 5.7. Informations d'interface/API à qualifier

**Ce sont des formes logiques, pas de nouvelles routes ratifiées :**

| Contrat de lecture / mutation | Entrée autorisée | Sortie minimale | Propriété et refus |
| --- | --- | --- | --- |
| Lire arbre/sujets | projectId serveur, pagination/sélection, version | sujets, parentId, statut, résumés confirmés, provenance, acquis/points rattachés, bornes | D4 ; DENIED/NOT_FOUND/PARTIAL ; pas de données d'autre Pilote |
| Inspecter sujet | subjectId + projet résolu | synthèse actuelle et version, acquis/questions propres, enfants directs, refs/document links | D4 ; version source accessible et non mutatrice |
| Rechercher sujets / points | requête, filtre, page, contexte | subjectId, section correspondante, chemin, raison affichable, couverture | D4 ; empty ≠ « jamais évoqué » ; budgets/latence |
| Lister/inspecter décisions | projectId, filtres de décision durable, id | officialDecision D6 et restrictions/état réellement applicables | D6, sans mutation ni projection d'autorité D4 |
| Expliquer décision | decisionId et révision/empreinte D6, sources autorisées | narrative sourcée/versionnée ou explicitement absente/périmée | D3 → D4 ; NON AUTORISANT, invalidation après changement D6 |
| Capter/mettre à jour mémoire | génération/tour, sujet et version attendue, propositions et références | commit confirmé/idempotence, nouvelles versions, statut honnête | D3 propose, D4 écrit ; verrou/compare, retry sûr |
| Ouvrir une source | messageId, docId/revision ou repo/ref/SHA | contenu disponible + statut/qualité/permission | D3/D4/D9 ; revalidation à chaque accès |

**Intégration HTTP candidate :** réutiliser les routes actuelles (GET projet, GET knowledge, GET décisions), puis ajouter **des lectures spécialisées ciblées** si nécessaire pour pagination et volume. Ne pas déverser le transcript/les documents entiers dans la réponse Journal pour obtenir un panneau 60 %. Toute nouvelle route devra respecter session serveur, codes d'erreur cohérents, contrats typés et test d'isolation.

## 6. Persistance : options, recommandation et STOP de migration

### 6.1. Ce qui existe

Les tables PostgreSQL D4 permettent identité, parentage, provenanceJson des acquis/points et événement de sujet ; la table human_decisions et governance_restrictions existe côté D6. Le code ne démontre **pas** de colonne/version durable de **synthèse éditoriale** pour un sujet ni d'objet d'explication contextuelle d'une décision.

### 6.2. Alternatives A/B historiques — remplacées par la cible candidate §16

| Option | Bénéfice | Coût/risque | Verdict préliminaire |
| --- | --- | --- | --- |
| **A — extension compacte de knowledge_subjects** (synthèse courante, révision et sources JSON contrôlées, changements significatifs dans knowledge_subject_events) | Moins de tables, évolution locale simple | Historique de contenu à garantir, concurrence et mutation de plusieurs sources à clarifier, historique reconstitué moins robuste | **Viable** si événements/version donnent une preuve complète et coût minimal |
| **B — révisions légères et immuables de synthèses D4** reliées à subjectId (et, pour décision, à decisionId D6) ; lecture du courant par id/version | Historique, provenance, invalidation et concurrence plus explicites ; séparation forte décision/narration | Migration et contrat de réconciliation, index/relations supplémentaires ; risque de surdesign si généralisé | **Préférée à instruire** si les tests de correction/historique et longue durée le rendent nécessaire |

**Cible technique candidate consolidée au §16 :** réutiliser le D4 existant pour sujets, acquis, points, événements ; préserver D6 inchangé comme autorité ; **ajouter des révisions immuables internes à D4** pour synthèses et explications (option B minimale). La comparaison A/B reste ici pour l'historique, sans GO de migration ni changement de responsabilité. Commencer par un schéma logique et ses invariants ; **ne pas commander de migration avant validation Morris** du delta et vérification des données existantes. La séparation A/B est une **option technique à trancher**, pas un arbitrage de vision.

**Migration éventuelle :** additive, valeurs nullables/backfill prudent, rétrocompatibilité des lecteurs, traitement anciens sujets sans synthèse (« non encore disponible »), contrôle des données dont subjectId manque, sauvegarde/restauration et tests upgrade à SHA comparable. Pas de réécriture historique en masse ni fabrication de source/état. Révision/ref D6 conservée, aucun changement de D6 sans contrat de sécurité supplémentaire.

### 6.3. Étapes de décision technique avant tout script

1. Audit données et cardinalité/volume réels sous accès autorisé (non observés ici).
2. Démontrer le besoin de versionnage, idempotence et preuve d'état par scénarios de correction, concurrence, source perdue et décision remplacée.
3. Comparer coûts de A/B et rayons d'impact ; vérifier l'absence de nouveau propriétaire logique.
4. Si migration nécessaire, **STOP → exposer le delta de modèle, risques de données, DDL/rollback/restore, garde-fous ENV-01 à Morris** ; intégrer seulement dans un lot technique explicitement autorisé.
5. Les choix de tables/colonnes/signatures ci-dessus ne valent pas GO de modification.

## 7. Contrôles de cohérence obligatoires — à l'entrée, à chaque intégration et à la sortie

| Contrôle | Point de comparaison | Refus / correction attendus |
| --- | --- | --- |
| **Cohérence Cible ↔ UX** | Chaque parcours v1.0 ↔ une des 11 frames V4 et état réel | Absence d'état = écart visible, pas écran décoratif ou feature créée par erreur |
| **D3 → D4** | Proposition sémantique ↔ source réelle ↔ écriture persistée ↔ lecture confirmée | Pas de FACT issu du modèle seul ; pas de statut « à jour » avant commit ; zéro write si non pertinent |
| **Arbre ↔ identité** | parent courant, filiation historique, enfants, références et sources | Refuser cycle, parent étranger, perte d'items, doublon non motivé et fusion destructrice |
| **Connaissance ↔ provenance** | sourceId/version/ref, auteur réel, statut actuel/historique, accès et fraîcheur | Déclasser/suspendre l'affirmation si preuve périmée ou contradictoire ; jamais source fictive |
| **Question ↔ réserve** | Résolution D4 sur preuve versus restriction D6 ACTIVE | Résolution factuelle n'autorise ni effet ni levée de suspension |
| **D4 explication ↔ D6 acte** | decisionId/version/état/portée/restrictions et citations | D6 source unique ; signaler explication stale ; ne pas réécrire un GO |
| **API ↔ données ↔ UI** | subjectId conservé au rendu, DTO/version/état, erreur et droit | Pas de subjectId remplacé par null, pas de badge d'autorité local ou état SUCCESS fictif |
| **Journal ↔ Travail** | Message id, scroll, brouillon, reprise après refresh | Même fil et bon message, aucun auto-send ; pas de régression UX-002/contrat E05 |
| **Journal ↔ Documents** | docId/revision, AVAILABLE, droits et historique | Une ouverture cible la ressource canonique, pas une copie éditable hors D4 |
| **Recherche ↔ couverture** | sources et types interrogés, page/cursor, suppression d'accès | « Aucun résultat » borné, pas affirmation exhaustive ni fuite d'un autre Pilote |
| **Source Git ↔ baseline** | repo, ref, branch, commit SHA, droits, version | Candidate ≠ main, URL mouvante ≠ preuve persistée ; refus d'accès honnête |
| **Code ↔ documentation ↔ QA** | mise à jour simultanée R4 as-built/contrat technique/tests avec diff | Contradiction non laissée silencieuse ; KNOWN GAP si non résolu et sortie bloquée selon risque |

**Contrôle de convergence transversal :** toute modification UI qui requiert un changement de connaissance, de décision, de droits ou de persistance **déclenche une revue de blast radius avant code**. Le fait qu'une variation soit « graphique » n'autorise pas à contourner le propriétaire du fait.

## 8. Risques et blast radius à surveiller

| Risque | Gravité initiale | Impact et précaution |
| --- | --- | --- |
| Écriture concurrente et pertes de mémoire | ÉLEVÉE | D3 turnFence, transactions D4 et version attendue ; injection de panne puis relire vérité DB |
| Second état D6 ou suspension fausse | **CRITIQUE** | D6 seul propriétaire ; restrictions lues au point d'effet ; test négatif décision supprimée/remplacée |
| Arbre incohérent après split/merge | ÉLEVÉE | Parent/filiation séparés ; cascades enfants/contenu/références transactionnelles |
| Explication persuasive mais inventée | **ÉLEVÉE** | Citer sources exactes, vérifier contexte ancien/contradictoire, signaler incertitude |
| Perte accès et fuite de données | **CRITIQUE** | Scoping serveur, autorisation au read/write, revocation test multi-Pilote et Git partagé |
| Journal vidé ou périmé après refresh | ÉLEVÉE | Confirmation DB et hydratation partielle honnête, reconcilier après UNKNOWN |
| Long fil / recherche lente / coût modèle | ÉLEVÉE | Corpus 1 000+ messages, requêtes paginées, budgets D3, pas de full replay par défaut |
| Régression Ensemble 05 scroll/brouillon | ÉLEVÉE | Tests E05 UX-002 et M3 sessionStorage par Pilote/projet ; navigation aller/retour |
| Dégradation responsive et accessibilité | MOYENNE/ÉLEVÉE | 1680 de référence + largeurs compactes, focus clavier, zoom/reflow, lecture sans couleur seule |
| Dette de migration non réversible | ÉLEVÉE | Préparation DATA-01, migration additive, sauvegarde/restore, rollback et revue Morris |
| Contournement de la séquence ML4D/Gate C | **CRITIQUE GOUVERNANCE** | Cible validée ne vaut pas GO ; distinguer UI ML4D et extension D4/D6 à autoriser |

**Exit dette :** aucune dette « acceptable temporairement » sans responsable, critère de sortie, test et gate associé. Le risque de qualité sémantique ne doit pas être dissimulé sous un PASS de compilation TypeScript.

## 9. Matrice de couverture technique initiale et dépendances

| Résultat du contrat v1.0 | Code présent | Écart principal | Propriétaire | Vérification à produire |
| --- | --- | --- | --- | --- |
| Sujets feuille → parents hiérarchisés | Oui, identités, parentId, scission | Parentage/split + synthèse parent/feuille | D4 | PG + parcours BROWSER après plusieurs mutations |
| Synthèses courantes rédigées/sourcées | Acquis + provenance, pas de résumé de sujet | Résumé éditorial durable et historique | D3/D4 | PG + comparaison cognitive source/texte |
| Proactivité sélective | Proposals typées + zéro écriture possible | Correction, actualisation, reclassification autonome à prouver | D3/D4 | positif/négatif, concurrency, longue conversation |
| Questions anciennes et résolution factuelle | OpenPoints OPEN, sélection | Réactivation, résolution sourcée et réouverture | D3/D4/D6 | PG + scénario D6 non levé |
| Vérification contradictions et sources | Provenance, outils D4/Git/histoire | Contrat de currentness et conflit | D3/D4/D9 | main/candidate, source révoquée, historique |
| Journal Sujets recherche/arbre 40/60 | UI plate ; outil de recherche backend partiel | Projection + UI V4 et pertinence | D4/UI | API/Browser/screenshot Figma |
| Journal Décisions explication riche | GET D6 et Pilotage, pas d'explication | Vue D6 + narrative sourcée | D6/D3/D4/UI | PG/API/BROWSER + évaluation cognitive |
| Lien conversation exact + retour | messages identifiés, historique read | Navigation/ref ciblée, scroll/brouillon | D3/UI | BROWSER long fil et retour |
| Document depuis Journal | D4 docs/revisions et bibli | Référence et navigation Journal→Documents | D4/UI | droits, version, indisponibilité |
| Actualisation honnête et reprise | DB/turnFence existants | Version de synthèse, ACK/perte et relire | D3/D4/UI | PG panne/ACK + BROWSER reload |

**Dépendances techniques:** session D1 et projet D2 ; continuité D3/Ensemble 05 ; D4 PostgreSQL/DATA-01 ; HumanDecision D6 et restrictions ; sources D9/D8 si réellement disponibles ; états ML4D/Figma et ENV-01. La consultation Git reste **facultative**.

## 10. Contrat QA : tests existants et oracles manquants

**Tests existants repérés dans Git mais NON exécutés dans cette revue :**
- [ML2 PG D4](../../web/tests/integration/ml2-knowledge-documents.pg.test.ts) — capitalisation sélective, renommage/scission/filiation, contexte ancien, documents/concurrence.
- [ML2 navigateur](../../web/tests/e2e/ml2-smoke.spec.ts) — Journal basique, fil et documents.
- [ML3 PG](../../web/tests/integration/ml3-pilotage.pg.test.ts) et [ML3 navigateur](../../web/tests/e2e/ml3-pilotage.spec.ts) — décisions, révisions/restrictions, historique dans Pilotage.
- [Espace projet](../../web/tests/e2e/project-space-ensemble04.spec.ts) — rail et transitions ; [ML4C idempotence/connaissance](../../web/tests/integration/ml4c-s05-idempotence-knowledge.pg.test.ts) — refus FACT non sourcé et non-création D6.
- [Outils d'historique](../../web/tests/integration/ml4c-history-tools.pg.test.ts) — message ancien exact, isolation Pilote, scope STALE ; autres tests D4 et droits restent à inventorier au moment du cycle.
- Tests Ensemble 05 sur scroll, composer et visionneuse : **rejouer le pack appliqué à la baseline réellement retenue**, sans prétendre que leur seul nom couvre tout V4.

**Nouvelle preuve discriminante recommandée :**
1. **K-A / feuille→parent :** sujet autonome avec 2 acquis/1 question ; sous-sujet réellement enfant, parent id inchangé, synthèse globale, sources intactes ; reparentage/fusion et retour à l'ancienne référence ; injection échec DB.
2. **K-B / mémoire vivante :** conversation longue avec 4 nouveaux éléments, 1 bruit sans valeur, 1 correction, 1 contradiction ; synthèse pertinente et pas de duplication ; source absente = hypothèse/non confirmée.
3. **K-C / question/réserve :** même dossier avec question factuelle réglée sur source + suspension D6 ACTIVE ; question clôturée, suspension toujours opposable ; réouverture factuelle après source contraire.
4. **D-A / historique décisions :** acte applicable puis révision/supersession/révocation et restriction/levée ; Journal et Pilotage revoient le **même état D6**, avec historiques non effacés.
5. **D-B / explication :** décision précédée de dizaines de messages, alternatives, objection et source ancienne ; résumé utile, contexte retrouvé, citations exactes, incertitude indiquée ; aucun nouvel acte D6, aucun motif inventé.
6. **S-A / recherche :** mot uniquement dans acquis, autre mot seulement dans titre, point ouvert d'un ancien sous-sujet, recherche Décisions par motif disponible ; chemins et résultats pertinents, conditions d'absence et statut partial.
7. **U-A / V4 Journal :** Figma 1680×970 et variantes compactes : nominal, filtre, sélection 40/60, lecture agrandie et retour ; mêmes états, focus, clavier, reflow/zoom ; screenshot sur runtime candidat même SHA.
8. **U-B / retour fil :** sujet→message exact parmi >1 000→retour, brouillon non envoyé et scroll préservés, retour après refresh, impossibilité de source révoquée ; aucun auto-send.
9. **SEC / isolation :** deux Pilotes/deux projets, dépôt Git commun et source révoquée ; aucune fuite en liste, recherche, explication, snippets, counts, deep links ou documents.
10. **OPS / robustesse :** concurrent update split/merge, retransmission ACK perdu, budget histoire D3 épuisé, source D4 STALE, indisponibilité D6, migration additive/backfill/restore ; aucune fausse confirmation.

**Niveaux de preuve :** UNIT/PG pour modèles/transaction/permissions, API pour DTOs/statuts, BROWSER F2/G5 pour transitions et Figma, évaluation cognitive avec sources contrôlées + LIVE Nora borné si autorisé, REAL Git uniquement si la capacité et les accès le nécessitent et sont réellement disponibles. Chaque preuve cite SHA produit, lane, fixture/données, date, résultat, réserves ; pas de PASS global construit sur un seul niveau.

**Qualité de la synthèse :** ajouter revue comparative pilotée par exemples déterminants et négatifs, pas seulement « texte non vide » ; mesurer fidélité, informations réellement retrouvées, distinction histoire/actuel, refus d'inférer un motif et facilité de lecture. **Le progrès cognitif doit être démontrable**, conformément à SEF §6.3.

## 11. Séquencement intégré proposé — sans micro-cycles et sans GO anticipé

| Étape | Production cohérente | Condition/gate |
| --- | --- | --- |
| **Préparation architecture** | Ce dossier, cartographie code/données/tests, options de synthèse, analyse d'impact et décisions techniques éventuelles | **Revue Morris** du contrat technique : choix structurant seulement, pas validation de 30 détails internes |
| **Socle de cohérence D4/D3/D6 si autorisé** | Modèles/projections, synthèses, hiérarchie, sources, statut factuel, contextualisation D6, tests PG/API et documentation as-built dans **un lot cohérent** | **STOP si changement de données/autorité non autorisé par Gate ML4D** ; GO explicite architecture/persistance s'il est requis |
| **Journal UX V4 intégré** | Composants Sujets/Décisions, recherche, filtre, visionneuse, source links, états négatifs, responsive, tests Browser/Figma, non-régression E05 | GO Cursor selon SEF/SFIA v2.6 ; pas d'écran « maquette seule » comme livraison |
| **Qualification intégrateur** | E2E 04 + décisions D6, contrat de preuve complet, contrôles inter-domaines, revue des réserves et exigences de sortie | Recette Morris et **Gate C distinct** selon Roadmap et dépendances ML4D ; aucune adoption automatique |

La séparation *socle/UX* sert **à surveiller le gate**, non à multiplier artificiellement des cycles. Lorsque interfaces et permissions sont confirmées, ces sous-travaux peuvent être intégrés dans **un seul contrat Cursor de macro-capacité**, code+tests+docs inclus. Si le gate ne couvre pas le delta persistance, on n'implémente pas le socle en douce : **option de lot correctif distinct après décision Morris**, sans dégrader la cible approuvée.

## 12. Pré-check du futur contrat d'exécution Cursor — prêt à compléter, NON GÉNÉRÉ

Un prompt Cursor SFIA v2.6 ne sera élaboré **qu'après** :
- Validation Morris du présent contrat technique **et des décisions d'architecture nécessaires** ; validation fonctionnelle/UX v1.0 déjà acquise.
- Relecture Git **sur HEAD réellement choisi à la date du cycle** de SEF, Roadmap, décisions, R4, présent contrat, contrat E05, état main/candidat et README QA.
- Lecture du [routing SFIA v2.6](../../../../method/sfia-fast-track/core/sfia-cycle-routing-guide.md) et du [template canonique SFIA v2.6](../../../../prompts/templates/sfia-cycle-execution-template.md) **depuis Git au bon ref** ; aucun template reconstruit de mémoire.
- Définition macro-lot/IN/OUT, droits/fichiers/branches/STOP et impacts, profil Standard par défaut, gates, tests, format Review Pack Light/Full, Review Handoff requis, publication et revue distante si contrat SFIA le requiert.
- Vérification Cursor de son **Git local/staged/untracked**, branche, base, état DB/lane et tests ; ce chat ne prétend pas les avoir observés.
- GO spécifique sur toute migration, écriture code/runtime/CI, push projet, PR, merge ou Gate C. **Aucun de ces GO n'est créé par le présent document.**

**Statut exact :** CONTRAT TECHNIQUE CANDIDAT RÉDIGÉ — **PROMPT CURSOR NOT GENERATED** (revue technique, arbitrage éventuel de persistance et GO distincts encore requis).

## 13. Revue Morris demandée — trois arbitrages au maximum

Le besoin métier/UX et Figma **ne sont pas rouverts**. La revue présente seulement :

1. **Valider la trajectoire « évolution modulaire des D3/D4/D6 existants, pas de nouveau moteur »**, sous réserve de preuve de suffisance. C'est la recommandation qui minimise le blast radius et respecte ADR R4-01/02.
2. **Autoriser ou non l'étude et, plus tard, l'intégration d'une extension D4 de synthèses versionnées** si le diagnostic confirme qu'elle est indispensable ; la **migration effective** restera un gate technique spécifique, pas un effet de cette revue.
3. **Confirmer le traitement de la frontière ML4D / évolution métier :** réunir en qualification produit, mais ne développer que les responsabilités autorisées à chaque gate, avec sortie et preuves communes.

**À ne pas demander à Morris :** choisir noms de méthodes, SQL, index, couches React, stratégie de scroll ou format JSON sans changement structurant. Ces décisions relèvent de la conception technique et de sa revue de risques.

## 14. Registre des réserves techniques avant GO

| Réserve | Statut | Critère de sortie |
| --- | --- | --- |
| **T-01 — versions de synthèse et preuves d'écriture** | OUVERTE — architecture candidate | Choix A/B justifié par test, contrat de concurrence et statut, GO migration si nécessaire |
| **T-02 — hiérarchie et cycles parent/enfant** | OUVERTE — gap code | Algorithme/transaction + tests de référence/children et refus des cycles |
| **T-03 — currentness, sources et clôture factuelle** | OUVERTE — gap code | Provenance source validée, contradiction, réouverture, réserve D6 non levée |
| **T-04 — explication D6 source et état applicable** | OUVERTE — gap code | Projection unique D6+restrictions, narrative non autorisante, tests remplacements/restrictions |
| **T-05 — UX V4, recherche et retour au fil** | OUVERTE — gap code | Figma ↔ BROWSER, liens exacts, performance et régression E05 |
| **T-06 — couverture cognitive et longue session** | OUVERTE — non prouvé | Scénarios avec 1 000+ messages, coûts/latence, qualité de synthèse et reprise |
| **T-07 — dossier d'exécution et gates** | BLOQUÉ AVANT REVUE | Contrat technique et arbitrages Morris, routing/template Git et GO distinct |
| **T-08 — portée projet et identité inter-préparations** | OUVERTE — divergence de lecture observée | Scoping server project-wide/renvoi sas, tests multi-préparation et isolation, sans copie D4 |

**Aucune réserve n'est « fermée » par l'écriture du dossier.**

## 15. Addendum de revue technique D0 — vérification complémentaire du 19/11/2026

**STATUT : RECOMMANDATIONS CANDIDATES / AUCUNE DÉCISION D2 NOUVELLE.** Baseline et code examinés : main@d3d199adb782462b93467934f5f1e8a0c98fb492. Git local, état réel DB et RECETTE : NON OBSERVÉS. Le GO de poursuite permet l'analyse et ce dossier D1 ; pas de migration, code, prompt Cursor ni Gate C. La VALIDATED SPEC fonctionnelle/UX v1.0 et les 11 frames Figma restent inchangées.

### 15.1. Continuité de connaissance : portée projet versus préparation

**Constat vérifié dans le code :** dans domains/knowledge/service.ts, listKnowledge(pilotId, preparationId) et selectRelevantKnowledgeContext restent strictement limités à la préparation active. Dans domains/conversation/d4-read-tools.ts, searchProjectResources utilise également scope.preparationId. Dans domains/preparation/project-context.ts, getOwnedProjectContext choisit une seule liaison de préparation pour un projet avec limit(1) ; cette préparation sert ensuite à charger la connaissance. En revanche, domains/conversation/history-tools.ts::resolveAuthorizedHistoryScope énumère les conversations de toutes les préparations reliées au même projet et appartenant au Pilote. Dans db/schema.ts, preparationProjectLinks possède une clé primaire preparationId sans unicité de projectId visible dans la définition consultée : **plusieurs préparations par projet sont techniquement plausibles, mais aucun état multi-préparation réel n'a été observé**.

**Risque :** Nora peut retrouver un message historique que le Journal D4 de cette préparation ne restitue pas ; cela ne prouve pas une perte DB, mais une incohérence potentielle des portées de récupération.

**Cible technique candidate :** résoudre côté serveur la portée de connaissances **du projet actuellement autorisé**, tout en gardant preparationId comme provenance, source transactionnelle et contrainte d'accès. Construire une lecture D4 project-wide bornée des préparations effectivement liées, sans copie ni fusion automatique des sujets homonymes ; conserver des APIs de préparation pour le sas. Réutiliser la politique d'isolation de l'historique sans coupler D3 et D4 en moteur unique. Si le produit ne peut réellement avoir qu'une préparation par projet, documenter et prouver cette contrainte avant de construire un mécanisme inutile.

**Preuves discriminantes :** deux préparations rattachées au même projet, même Pilote, mémoire de la première consultable depuis la seconde ; titres identiques mais identités distinctes ; aucune fuite vers un second projet/Pilote dans liste, recherche, compteur ou source. Source inaccessible => réponse DENIED/STALE honnête.

### 15.2. Homonymes, parent courant et filiation historique

**Constat vérifié :** ensureSubject valide éventuellement un parent, mais réutilise un sujet ACTIVE par combinaison preparationId + ownerPilotId + title, sans intégrer le parent dans le critère. Deux sous-sujets portant le même nom sous des parents différents peuvent donc être confondus. splitSubject crée un nouvel objet avec originatedFromSubjectId mais ne renseigne pas le parentSubjectId dans l'appel observé. mergeSubjects déplace les acquis et points, mais sa gestion des enfants existants n'est pas explicitée dans le code inspecté.

**Direction candidate :** l'équivalence sémantique n'est **jamais** démontrée par l'égalité des titres. Distinguer création d'identité, résolution des sujets existants, déplacement/reparentage, création d'enfant, fusion/scission et événements d'origine ; vérifier parent ACTIVE, même projet/Pilote, absence de cycle, références et enfants. Filiation d'origine ≠ relation parent actuelle. Maintenir le même ID de la feuille lorsqu'elle devient parent.

**Preuves :** deux parents avec un sous-sujet « Contraintes » chacun ; sujets distincts si le sens ou la portée diffère. Feuille→parent conservant le même id ; refus du parent cyclique/étranger ; split/merge atomique sans enfant orphelin ni source perdue.

### 15.3. Persistance des synthèses — historique d'alternatives avant cible §16

**Constat vérifié :** D4 expose acquis/points et knowledge_subject_events mais pas de version courante immuable d'une synthèse éditoriale de sujet. D6 conserve la décision et ses restrictions mais pas de synthèse narrative de motivations.

**Option A :** extension compacte de knowledge_subjects avec résumé courant, version et sources, historique complet et cohérent par knowledge_subject_events. **Option B :** révisions immuables minimales de synthèses D4, référencées par subjectId et, pour les explications, par decisionId D6, avec projection du courant. **Préférence de conception conditionnelle : B si l'historique, la provenance et la concurrence ne peuvent être garantis simplement par A**. Le verdict ne se déduit pas du nombre de tables ; comparer correction, split/merge concurrent, source obsolète/révoquée, acte D6 remplacé, ACK perdu et restauration.

**Invariants des deux options :** un seul propriétaire D4, versions non destructives, sources exactes et droit actuel, qualification factuelle/hypothétique, correlation/idempotence, expectedVersion, état UNKNOWN repris avant retry, distinction de la synthèse et de l'acte officiel. **D6 ne change pas d'autorité.** Aucun nouveau moteur, cache autorisant ou indexation exhaustive du fil. **STOP DDL :** évaluation du modèle réel, blast radius, backfill/rollback, politique DATA-01 et GO architecture/données explicite de Morris.

### 15.4. Frontière ML4D et architecture : un intégrateur, des gates séparés

**Décision R5 existante conservée :** ML4D couvre la convergence UX/UI des capacités déjà construites ; les évolutions sémantiques D3, les writes D4, la persistance et le contrat d'autorité D6 ne sont pas de simples retouches graphiques. Les besoins indispensables identifiés pour la cible validée doivent être qualifiés et soumis à Morris selon leurs impacts.

**Trajectoire candidate :** un **dossier intégrateur « Journal cohérent du projet »** avec (a) continuité de connaissance et projection fiable D3/D4/D6, (b) parcours Journal V4 et lectures spécialisées, (c) tests PG/API/BROWSER/cognition et non-régression Ensemble 05. Regrouper code, tests et documentation sous une seule responsabilité d'intégration ; ne scinder en cycles que si la frontière d'autorité, la migration ou une vraie dépendance l'impose.

**Gates :** (1) contribution documentaire D1 sur branche candidate, SHA/diff/relecture distante ; (2) validation d'architecture D2 spécifique à l'éventuelle extension structurante et à son delta DB ; (3) GO de réalisation Cursor D3 après revue de ce contrat, sourcing SFIA v2.6, IN/OUT et tests, avec branche et STOP ; (4) Gate C/PR/merge/STABLE/ADOPTED distincts. **Ce dossier ne satisfait automatiquement aucun de ces gates au-delà de sa publication documentaire.**

### 15.5. Verdict intermédiaire et critères de sortie

**Convergence technique : FAVORABLE EN PRINCIPE, NON ENCORE AUTORISÉE EN CODE.** R4 et la modularité D3/D4/D6 sont conservés ; aucune refonte de domaine n'est justifiée par le diagnostic. Les réserves T-01 (persistance), T-02 (identités/parentage), T-03 (sources/statuts), T-04 (explication D6), T-05 (V4), T-06 (reprise cognitive) et **T-08 (portée projet vs préparation)** restent à prouver/traiter.

**Prochaine entrée de réalisation :** contrat technique revu, risque/option de stockage statué par Morris si structurant, preuve d'absence de contradiction avec D6, délimitation des effets ML4D vs extension fonctionnelle, tests négatifs spécifiés, contrat Cursor SFIA v2.6 préparé seulement après GO technique. Aucun GO de PR/merge ni délai de livraison inféré.

**Statut : DOCUMENTED / TECHNICAL CONTRACT v0.2 CANDIDATE / NO CODE / NO MIGRATION / NO CURSOR PROMPT / NO GATE C / NOT ADOPTED.**

## 16. Arbitrage Morris — extension interne D4 et contrat technique cible

### 16.1. Propriétés et décision

**PRINCIPE VALIDÉ PAR MORRIS (19/11/2026)** : D4 est le propriétaire existant de la connaissance et de l'investigation. Les synthèses intelligentes versionnées, l'organisation des sujets et la récupération restent **des évolutions de D4**, dans le PostgreSQL/Drizzle actuel. D3/Nora retrouve les sources, raisonne et rédige ; D4 persiste et expose les versions et les liens ; D6 reste seule autorité des HumanDecision et de leurs restrictions. **Aucun deuxième moteur, domaine ou registre autonome.**

**MODÈLE PHYSIQUE DÉFINI DANS LE PRÉSENT CONTRAT TECHNIQUE CANDIDAT** : petites révisions immuables D4 plutôt qu'un texte courant écrasé à chaque mise à jour. C'est la variante B minimale, retenue pour l'historique, la concurrence et la provenance. Elle reste une **modification additive de schéma interne D4** ; le gate de migration et de changement d'architecture appartient à Morris. Les noms de tables sont la cible de conception, les noms exacts des colonnes ne priment pas sur leurs invariants. Les données RECETTE/STABLE sont hors mandat tant qu'un GO distinct n'existe pas.

### 16.2. Modèle concret à réaliser dans le D4 actuel

**A. Révisions de synthèses de sujets : knowledge_subject_summary_revisions.**

- D4 uniquement ; référence FK subjectId vers knowledge_subjects existant ; ownerPilotId, preparationId d'origine et projectId selon sas/projet autorisé ; revisionNumber strictement croissant par sujet, createdAt et contenu summaryMarkdown.
- Provenance structurée : références exactes messageId, documentId/revisionId, Git repo/ref/SHA, date/portée de constat, statut de lecture et qualification confirmé / déduit / incertain. Source injoignable = limite visible, jamais faux lien.
- Corrélation d'opération/tour et idempotencyKey, expectedRevision ou baseVersion, empreinte des sources ; unicité (subjectId, revisionNumber) et (subjectId, operationId) ou équivalent. Anciennes révisions **non éditées**. Version courante = dernière révision confirmée, calculée sous ordre/contrainte cohérents ; pas de deuxième champ summaryCurrent autorisant et modifiable séparément.
- Sujet sans synthèse historique = état honnête « synthèse non encore disponible », puis génération ciblée autorisée si justifiée, **sans backfill fictionnel**.

**B. Révisions d'explications D6 : knowledge_decision_explanation_revisions.**

- D4 uniquement, mais **rattaché par decisionId à l'acte D6 réel**, ownerPilotId/projectId, revisionNumber, officialDecisionFingerprint ou état/révision D6 consultés, explanationMarkdown et références structurées des messages/options/contraintes.
- Narrative sémantique construite : contexte, motivations réellement établies, alternatives, compromis, limites d'interprétation ; jamais copie des deux derniers messages ni justification inventée. Une assertion déduite est explicitement distincte d'un motif déclaré.
- Aucune colonne faisant autorité pour applicabilité, suspension, droits, date d'effet ou état HumanDecision. À chaque lecture, **requalifier l'acte officiel D6 et les governance_restrictions** ; si l'empreinte a changé, signaler explication potentiellement périmée, sans perdre l'acte officiel.
- Garanties révisions immuables, concurrence, idempotence et lien D6 unique ; pas d'écriture D6 à partir de cette explication.

**C. Historique des points factuels : knowledge_open_point_events.**

- Conserver knowledge_open_points comme objet D4 courant ; événements immuables de résolution factuelle et réouverture avec acteur, raison, instant, provenance/version et operationId. Statut courant OPEN / RESOLVED ; une réouverture revient à OPEN sans effacer la précédente résolution.
- **RESOLVED exige une source suffisante et applicable** pour une question factuelle. Aucune clôture D4 ne lève une suspension ou un risque accepté par le Pilote ; le statut des restrictions D6 reste fourni par D6.
- Préférer une extension additive minimale réutilisant les champs présents plutôt qu'une nouvelle machine d'états.

**Transaction/cycle de vie :** vérification serveur du Pilote et du projet ; verrouillage de l'objet D4 et contrôle expectedRevision ; écriture d'une nouvelle révision/événement dans une transaction ; en cas d'ACK perdu, relecture par operationId **avant retry** ; conflit/erreur/absence de proposition pertinente affichés honnêtement ; zero-write sur propos sans valeur durable. Les explications de décision ne verrouillent ni ne modifient une HumanDecision.

### 16.3. Interfaces et intégration en place

1. **D3→D4 :** enrichir la capitalisation sélective existante pour synthèse, correction, réorganisation et réactivation contextuelle ; rechercher au-delà du dernier échange les sources réellement pertinentes sans replay complet systématique.
2. **D4 identités :** corriger ensureSubject (déduplication titre seul), parentSubjectId courant distinct de originatedFromSubjectId, reparent/split/merge atomiques, homonymes autorisés sous parents différents, refus cycles et cross-project. Feuille→parent conserve le même ID.
3. **D4 portée :** Projet = préparation(s) réellement liées au même propriétaire ; sas = préparation courante. Lecture projet tenant compte des préparations autorisées sans copier/fusionner la connaissance par titre, tout en préservant la provenance.
4. **D4 vues/recherche :** préserver subjectId sur les acquis et points jusqu'à ProjectJournal ; recherche dans les connaissances capitalisées et filtre des points OPEN avec parcours de retour et état de couverture réel.
5. **D6 projection :** sélection justifiée des actes durables, historique et restrictions au point de lecture ; expliquer via D4 sans seconde autorité. Pilotage reste le lieu d'action gouvernée.
6. **Documents/messages :** références exactes à la ressource canonique versionnée, droits revalidés au read ; même fil Nora, scroll et brouillon préservés, aucun auto-send.
7. **V4 :** les 11 frames Figma approuvées sont un **contrat d'exécution de parcours**, pas du faux contenu décoratif. Journal pleine largeur → même Journal rétracté 40/60 → lecture agrandie réversible.

### 16.4. Matrice contractuelle anti-scope-missing

**Chaque ligne ci-dessous est obligatoire dans le prochain contrat Cursor, son review pack et notre revue ChatGPT.** L'absence d'implémentation ou de preuve ne peut être remplacée par une simple déclaration « réalisé ».

| ID preuve | Capacité à livrer | Contrôle d'acceptation discriminant |
| --- | --- | --- |
| J-C01 | Synthèse sujet feuille/parent durable, provenance et versions | PG : enrichir/corriger, retrouver révision historique, zéro write si bruit |
| J-C02 | Hiérarchie vivante et identités conservées | PG : feuille→parent, rename, split/merge/reparent, homonymes, refus cycle |
| J-C03 | Rattachement acquis/questions réel | API+BROWSER : subjectId intact jusque dans le panneau et le lien |
| J-C04 | Question ancienne réactivable | PG + Nora : rappel pertinent après interruption/session/cycle |
| J-C05 | Résolution factuelle vs réserve gouvernée | PG : fait résolu sur preuve, restriction D6 ACTIVE toujours opposable |
| J-C06 | Sources, contradictions et currentness | D3/D4 : branche candidate≠main, source inaccessible, conflit non masqué |
| J-C07 | Portée Projet inter-préparations | PG+API : connaissance d'une autre préparation liée, isolation autre projet/Pilote |
| J-C08 | Recherche Sujets et filtre Points ouverts | API+BROWSER : terme en acquis pas titre, résultat lié, filtre combiné, EMPTY honnête |
| J-C09 | Décisions durables D6, historique et restrictions | PG+API : actuel/remplacé/suspendu, restriction revalidée sans état local |
| J-C10 | Explication décisionnelle cohérente et vérifiable | Nora+PG : contexte long, alternatives/justifications sourcées, source absente, aucun nouveau D6 |
| J-C11 | Recherche Décisions seulement, accès courant | API+BROWSER : acte + motif lié, projet autorisé, pas transcript global |
| J-C12 | Navigation Journal pleine, 40/60 et agrandie | BROWSER+captures Figma/runtime : 11 états V4, retour sans reset |
| J-C13 | Message exact et retour au fil | BROWSER : message ancien dans 1000+ échanges, brouillon intact, zéro auto-send |
| J-C14 | Document canonique/version et droits | API+BROWSER : docId/revision exact, accès retiré proprement |
| J-C15 | Sûreté/performance/reprise/idempotence | PG+API : concurrence, ACK perdu, cross-project, latence/volume et erreur fidèle |
| J-C16 | Non-régression et documentation synchronisée | Tests existants ML2/ML3/ML4C/E05, typecheck/lint/build, as-built et QA mis à jour |

**Règle de complétude obligatoire pour Cursor :** fournir, pour J-C01..J-C16 **sans exception**, état IMPLEMENTED / PARTIAL / NOT IMPLEMENTED / NOT RUN / FAILED / BLOCKED, fichier(s)/fonction(s), test(s) exacts, résultat réellement exécuté avec SHA/lane, preuve (log/capture/DB/source), réserve et éventuel STOP. Aucun NOT RUN ne devient un PASS et aucun faux écran ou doublon de registre ne peut compter comme une capacité réalisée.

**STOP delivery si une exigence reste absente non arbitrée** : verdict NOT READY — SCOPE INCOMPLETE, avec liste exacte des lignes, causes et prochaines actions, plutôt qu'une conclusion globale READY. Tests unitaires/PG/API/BROWSER et comparaison Figma/runtime au bon viewport ; accessibilité, largeurs compactes, sources retirées, décisions révoquées et mémoire après longue interruption sont intégrés aux contrôles. Test déterministe ou fixture ≠ comportement LIVE Nora/REAL prouvé.

**Review Pack Full :** contenus créés/modifiés revus selon template v2.6, diff utile, SHA, date, sources/version, audit blast radius, validation de chaque J-C, scénarios négatifs, limites/failures, Review Handoff required/publish-in-cycle sur branche dédiée et relecture distante. Une synthèse seule n'est pas un pack complet. Aucun push projet/PR/merge sans GO Morris, quel que soit le verdict des tests.

## Annexe A — Liens vérifiables des surfaces, services et tests

**Code UI/lectures :**
- [Journal actuel](../../web/src/components/figma/ProjectJournal.tsx), [page Projet](../../web/src/app/projects/[projectId]/page.tsx), [Chrome Projet](../../web/src/components/figma/ProjectChrome.tsx), [NoraConversation](../../web/src/components/figma/NoraConversation.tsx), [TravailViewer](../../web/src/components/figma/TravailViewer.tsx), [DocumentSurfaces](../../web/src/components/figma/DocumentSurfaces.tsx).
- [D4 service](../../web/src/domains/knowledge/service.ts), [D4 outils de lecture](../../web/src/domains/conversation/d4-read-tools.ts), [historique SDK](../../web/src/domains/conversation/history-tools-sdk.ts), [historique](../../web/src/domains/conversation/history-tools.ts), [schéma DB](../../web/src/db/schema.ts).
- [D6 service](../../web/src/domains/decisions/service.ts), [D6 types](../../web/src/domains/decisions/types.ts), [D6 autorité](../../web/src/domains/decisions/authority.ts), [PilotagePanel](../../web/src/components/PilotagePanel.tsx).
- [GET Project](../../web/src/app/api/projects/[projectId]/route.ts), [GET/POST knowledge](../../web/src/app/api/preparations/[preparationId]/knowledge/route.ts), [GET décisions](../../web/src/app/api/projects/[projectId]/decisions/route.ts), [contexte Projet](../../web/src/domains/preparation/project-context.ts).

**Contrats visuels précis (Figma V4 approuvés) :** [page Journal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-2) ; Sujets [exploration](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71), [40/60](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26), [agrandi](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) ; [Recherche Sujets](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-42), [Points ouverts](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-146) ; Décisions [nominal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-58), [40/60](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-136), [recherche](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-251), [agrandi](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-360) ; cinquième frame Sujets : [parent agrandi](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239), [parent 40/60](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131).

**Source d'épreuve :** tests ML2/ML3/ML4C/E04 cités au §10. La présence d'un chemin n'atteste pas son exécution, ni que tous les comportements v1.0 sont couverts.

## Annexe B — Historique

| Date/version | Intervention | Statut |
| --- | --- | --- |
| 19/11/2026 — v0.1 | Diagnostic code Git main, mapping R1/R2/R4/R5 et Figma V4, proposition d'architecture et options de persistance, 12 contrôles de cohérence, risques, couverture QA et préparation des gates | **DOCUMENTED / CANDIDATE TECHNICAL CONTRACT** — à revoir avec Morris ; aucune autorisation technique ni preuve de runtime |
| 19/11/2026 — v0.2 | Revue D0 : périmètre projet/préparation, sujets homonymes, synthèses versionnées, frontières ML4D et gates ; correction des liens Markdown | **DOCUMENTED / TECHNICAL CANDIDATE**, no code or Cursor GO |
| 19/11/2026 — v0.3 | Arbitrage Morris : extension interne D4 sans moteur parallèle ; modèle de révisions immuables internes pour synthèses/explications et résolution factuelle ; matrice J-C01..J-C16 de couverture du delivery | **PRINCIPE D4 VALIDÉ / SCHÉMA CANDIDAT / NON IMPLÉMENTÉ** |
