# SFIA Studio Next — R5 / ML2 — Spécification technique candidate
## Produire, réviser et capitaliser avec Nora

> **État : QUALIFICATION D0 / DOCUMENTED — SPECIFICATION TECHNIQUE CANDIDATE v0.5, NON VALIDÉE.** Le statement produit et le principe d'évaluation comparative ChatGPT ↔ Nora ont reçu l'accord de Morris le 2026-11-04 ; **l'ensemble des mécanismes, frontières fines, contrats et preuves ci-dessous restent à revoir/arbitrer avant toute construction D3**. Ce document n'est pas un GO Cursor, PR, merge, STABLE, RELEASE ou ADOPTED. Les interfaces proposées ne sont ni du code existant ni des API ratifiées.

| Métadonnée | Valeur |
| --- | --- |
| Macro-lot R5 | ML2 — Produire et capitaliser avec Nora |
| Résultat Pilote | Une collaboration cognitive utile avec Nora, produisant des analyses et documents structurés, durables, révisables et récupérables avec provenance |
| Référence de conception | main@9cd7a6c751f46d1be000d33a810fc9c344476ffc ; correction R1/R2/R3 en préparation D2, non intégrée |
| Branche documentaire de travail | docs/next-ml2-knowledge-scope-20261104 ; **candidate, distincte de main** |
| Autorité | Morris : arbitrages, validation de contrat et gates ; ChatGPT : conception/revue/évaluation comparative ; Cursor : implémentation technique sous SFIA v2.6 |
| État Git local / services démarrés | NON OBSERVÉS ; les preuves historiques de ML1 ne prouvent pas l'état runtime présent |
| Produit amont | ML1 CLOSED BY MORRIS WITH CARRIED RESERVES, code mergé #649, validation fonctionnelle au candidat C3 |
| Produit aval | ML3 : méthode/cycles/decisions gouvernées ; ML4 : sources Git facultatives ; ML5 : actions réelles gouvernées |
| Sources canoniques | Vision R1 §§1–2, 2.8, 2.13–2.15, 2.20, 2.32–2.33, 2.40–2.41 ; R2 D3/D4, D2 CRE-027 ; R3 UX et Figma ; R4 ADR 01–04/QA A-B ; R5 §14 / ENV-01 / DATA-01 |
| Niveau de preuve à l'entrée | ML2 : NOT IMPLEMENTED ; ML1 D3/D4 de base IMPLEMENTED, QA locale partielle et recette LIVE limitée, avec écarts connus |

## 1. Statement et résultat utilisateur — vision R1 souveraine

**Statement validé dans son ambition, à décliner :** permettre au Pilote de conduire dans le sas ou dans son projet un travail cognitif naturel avec Nora : comprendre, explorer, investiguer dans les sources réellement accessibles, challenger, comparer, produire directement, réviser, capitaliser les acquis importants et les réutiliser dans des échanges ultérieurs au sein du même fil de projet ; le tout avec un rendu clair et une provenance honnête.

**Critère de produit discriminant :** le Pilote doit ressentir une aide intellectuelle qui fait progresser son travail, **et non un chat simplement persistant ni un gestionnaire de fichiers avec génération de texte**. Une similitude stylistique avec ChatGPT ne démontre pas cette valeur : l'oracle est le résultat utile et observable, le contexte recouvré, la qualité cognitive et les règles d'autorité.

### 1.1. Parcours intégrateur de référence — E2E 03 + E2E 04 + complément R1 §2.41

1. Le Pilote ouvre un projet existant, sans cycle/CKI/Git obligatoire, et expose une question de conception comportant plusieurs options.
2. Nora comprend l'objectif, respecte les prescriptions, cherche les éléments internes réellement accessibles, explicite les lacunes et produit une analyse comparative critique et une suite utile.
3. Le Pilote demande explicitement de rédiger un document de synthèse ; Nora fournit la rédaction et Studio conserve un brouillon durable, avec identité, révision, source, statut et contrôle d'accès.
4. Le Pilote demande une révision ciblée d'une section ; le résultat conserve la version précédente, montre le changement pertinent et n'écrase ni les autres sections ni une révision concurrente.
5. Après **fermeture puis réouverture du même projet et du même fil**, Nora retrouve le document, les acquis structurants et le point ouvert pertinents, sans injecter le transcript exhaustif.
6. Une source contradictoire, indisponible ou devenue périmée déclenche une qualification honnête ; aucune recommandation n'est promue en décision D6 ou en permission d'effet.

**Acceptation macro-lot :** capacités observées en BROWSER + DB et situations Nora LIVE adaptées au même SHA de candidat et au même contexte déclaré ; revue comparative cognitive selon R5 §14 ; arbitrage Morris des réserves.

### 1.2. Clarification de la vision R1 — un fil de travail continu par projet

**Arbitrage Morris du 2026-11-04 :** un projet Studio Next expose **un fil de travail continu avec Nora**, commencé dans le sas et poursuivi après création, puis retrouvable après fermeture, reconnexion, changement de sujet ou transition de cycle. Un fil comprend de multiples **échanges** ; « autre/nouvelle conversation » dans la rédaction historique R1/R2 correspond ici à une **reprise ou un nouvel échange** et ne prouve pas une volonté de multi-chat. **Aucun nouveau chat, liste de chats ou sélection de conversation B dans un projet n'est à réaliser dans ML2.**

**Contrainte D5 constante :** au plus un cycle actif par projet, indépendamment des échanges ou digressions, avec le CKI de ce cycle uniquement. L'interface du fil n'est ni un moteur de cycle ni un registre de sujets ; D4 garde les acquis, documents et points ouverts indépendamment du volume d'historique affiché.

**Requalification des références validées :** les formulations ambiguës de R1/R2 et les hypothèses de multi-chat de R3 doivent recevoir une correction éditoriale **D2 distincte, validée et autorisée pour Git par Morris**. Leurs versions actuelles sur main ne sont pas silencieusement réécrites par la présente candidate R5. Le test initial de « deux fils A/B » est **retiré comme exigence inventée**.

**Parcours R1 §2.41, conservé sans multi-chat :**

`Sas (fil continu) → projet créé (même fil) → production du document → sauvegarde D4 confirmée → inspection → révision ciblée → comparaison de versions → fermeture du navigateur/session → réouverture du projet et du même fil → document, acquis et points ouverts retrouvés avec provenance`.

**Oracles :** identité du projet et du fil visible préservée, état DB et version documentaire vérifiés, restitution du document sans relire manuellement les anciens messages, mémoire D4 sélectionnée pour une reprise pertinente, absence de chat additionnel, absence de cycle ou HumanDecision implicite. QA Q07–Q14, Q19/Q20, Q27/Q28, COG-04/05 ; tests DB/BROWSER/LIVE distincts. Un contexte limité aux six derniers messages de ML1 ne prouve pas la sélection D4.

## 2. IN / OUT et interfaces adjacentes

### 2.1. IN cohérent

- D3 : conduite cognitive (compréhension de l'intention, clarification ciblée, initiative raisonnable, critique, analyse, production et restitution adaptative).
- D3/D4 : présentation riche des résultats, Markdown sécurisé, distinction réponse conversationnelle vs ressource documentaire ; inspection d'objet et retour au fil.
- D4 : ressource documentaire du projet (identité, révisions, provenance, sauvegarde, accès et récupération), production directe d'un brouillon puis révision non destructive.
- D4 : **capacité intégrée validée en périmètre** : capitalisation sélective proactive des acquis significatifs, organisation et réorganisation des Sujets/sous-sujets, points ouverts transversaux et récupération pertinente lors d'un **nouvel échange dans le même fil**, selon le projet et les droits courants ; aucune création systématique de fiches ou d'autorité.
- Interface D2 : continuité du sas et du projet déjà établie ; brouillon conservé dans le sas et identité stable après création réellement confirmée.
- QA produit : tests déterministes/DB/navigateur/LIVE, comparaisons indépendantes ChatGPT ↔ Nora, preuves négatives d'absence d'effet induit.
- Outillage : CI Next dédiée avant la prochaine livraison significative, sous GO technique distinct sur les chemins partagés.

### 2.2. OUT sans perdre les frontières

- D5 : moteur complet de trajectoire/cycle/CKI et évolution de méthode (ML3) ; Nora fonctionne ici sans cycle.
- D6 : acte HumanDecision, opposabilité, mandat, révocation et suspension formalisée (ML3). ML2 doit **refuser de les inventer** ; peut seulement présenter leurs références déjà établies.
- D7/D8 : délégation à Cursor, tentative à effet, conformité globale, publication et acceptation automatique (ML5).
- D9 : GitHub App, navigation/recherche Git réelle, gestion des permissions et révocation Git (ML4). Une mention Git dans un texte n'est ni un accès réel ni une preuve de branche.
- Web connecté, pièces jointes complexes, recherche interprojets et automatisation à l'arrière-plan : non disponibles par défaut. Leur intégration exige capacité, accès, coût, sécurité et lot/gate propres ; ne jamais les feindre.
- Deuxième moteur de mémoire/autorité, pipeline RAG obligatoire, base vectorielle par inertie, moteur universel de documents, imitation de réponses ChatGPT figées : exclus sans justification produit et technique.
- R6 / STABLE : certification transverse, promotion ou ADOPTED non déduits du présent lot.

**Arbitrage confirmé par Morris le 2026-11-04 :** ML2 inclut comme une **capacité intégrée** Sujets, Acquis, Points ouverts et Reprise cognitive, y compris la réorganisation durable des sujets (renommage, regroupement/fusion et séparation), sans moteur ni registre concurrents. La profondeur technique de réalisation est à concevoir au plus simple dans le respect des RG/PF R2 validés. **Frontières toujours à qualifier :** importance du streaming pour l'expérience Nora ; disponibilité des sources internes garanties pour la recette ; coûts/latence et interfaces réellement observables. Ce GO de périmètre ne vaut ni validation globale de cette spécification, ni GO Cursor.

## 3. Hiérarchie des références, couverture et lacunes

| Famille | Références canoniques vérifiées sur main | Utilisation ML2 |
| --- | --- | --- |
| Vision supérieure | cadrage/vision-produit.md §§1–2, 2.8, 2.13–2.15, 2.32 (E2E 03), 2.33 (E2E 04), 2.40–2.41 | Restitution, initiative, documentation, mémoire vivante et frontières d'autorité |
| Fonctionnel D3 | conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md ; RG-CTX-001..008, RG-CONV-001..006, RG-APP-001..008, RG-UX-001..009, RG-DOC-001..010 ; PF-01/03/04/15/24/25 et PF-28..35 | Conduite, restitution adaptative, documents, inspection, traitement des contradictions |
| Fonctionnel D4 | conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md ; RG-KNOW-001..020, PF-KNOW-01..14 | Sélection, sources, sujets, reprise, documents et versions |
| Frontière D2 | conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md ; RG-CRE-027, PF-CRE-27 | Brouillon du sas et rattachement au projet sans copie/droit implicite |
| UX R3 | ux-ui/espace-projet-interaction-pilote-nora.md ; ux-ui/audit-couverture-ux-r3.md ; ux-ui/contrat-transposition-figma-code.md | Conversation, document, inspection, comparaison, Sujets et points ouverts |
| Architecture R4 | architecture-technique/cadrage-r4.md §5.3 (D3/D4, vérité PostgreSQL, limites), §5.5 (B), ADR R4-01/02 ; QA A13 et B18 sélectionnés | Propriétaires, invariants, absence de second état d'autorité et reprise |
| Delivery | construction/reference-delivery-r5.md §§3–8 et §14 ; construction/contrat-specification-macro-lot.md ; ENV-01 ; DATA-01 | Traçabilité, protocole comparatif, preuves et gates |
| As-Built ML1 | construction/ml1-entree-et-continuite/specification-technique.md §15 et matrice-tracabilite.md §8 | Socle réel et réserves maintenues |

La **matrice ML2** associée contient les rattachements par fonctionnalité, les oracles et le statut des preuves, sans dupliquer les textes RG/PF. Toute omission significative de R2–R4 au regard de R1 doit être remontée à Morris comme un **GAP produit**, pas contournée par imitation locale d'une maquette.

## 4. État réel du code sur main — contraintes pour la construction

**Code source relu sur Git, mais runtime local au présent NON OBSERVÉ :**

| Responsabilité | Réalisation ML1 | Gap/facteur d'impact ML2 |
| --- | --- | --- |
| D3 — adaptateur Nora | web/src/domains/conversation/nora-adapter.ts : @openai/agents, run(maxTurns: 1), message complet, mode LIVE ou fixture DEV contrôlée ; aucun outil externe exposé | Instruction système très courte ; contexte borné fourni en texte ; pas de recherche sélective D4, ni streaming HTTP ; compétence comparative non démontrée |
| D3 — conversation | web/src/domains/conversation/service.ts : messages persistés avant/après appel, contexte construit à partir des **six derniers messages complets** tronqués à 200 caractères chacun | Une reprise tardive du même fil doit retrouver des sources et acquis au-delà de la fenêtre des derniers messages ; prouver provenance et priorité ; distinguer réponse et état réellement persisté |
| D4 — document | web/src/domains/document/service.ts : documents et document_revisions, identité, numéro de version, status SAVING/AVAILABLE/FAILED, lecture listDocuments | Pas de commande de révision ciblée avec contrôle de base/version ; lecture de version, diff, provenance, génération par Nora et inspection à concevoir ; concurrence sur max(revisionNumber)+1 à traiter |
| DB et sécurité | web/src/db/schema.ts : conversations, messages, documents et documentRevisions dans PostgreSQL/Drizzle, une unicité par (documentId, revisionNumber) ; contrôles owner/projet côté service | Évolution relationnelle/migrations et droits à qualifier ; aucune deuxième DB d'autorité ; schemaRevision déclaré 001 alors que migrations 001/002 exécutées en ML1, à vérifier sans conclure DB périmée |
| UX / QA | ML1 : parcours et document de base, 22 unitaires + 26 PG + 1 Playwright DEV FAKE historiques ; Nora LIVE acceptée en recette limitée | Aucun PASS ML2 ; Markdown riche absent, fidélité Figma encore non démontrée ; snapshots runtime à comparer au contrat |

**Invariants de réutilisation :** maintenir les mêmes identifiants projet/sas/documents tant que leur responsabilité n'a pas changé ; composer sur les tables, services et adaptations existants **seulement si leur contrat réel convient**. Les nouvelles interfaces ne sont pas des prétextes pour dupliquer une session, la mémoire, le journal ou la gouvernance.

## 5. Architecture de capacité proposée — responsabilités et flux

### 5.1. Propriétaires logiques

- **D3 — Conduite et conversation :** intention, messages persistés, génération Nora, usage ciblé d'informations autorisées, composition de réponse et état effectif de génération. D3 **consomme** connaissances D4 ; ne détient pas un deuxième registre de sujets, décisions, documents ou permissions.
- **D4 — Connaissances et documents :** identités des ressources et versions, sujets, acquis sélectionnés, points ouverts, provenance, récupération et états de sauvegarde ; contexte exploitable sous droits actuels. Les index, résumés ou embeddings éventuels sont **reconstructibles**, pas sources d'autorité.
- **D1/D2 :** contrôle de la session, propriété et contexte sas/projet ; passage sur création explicite, sans duplication d'identité.
- **D6/D8 (interfaces futures) :** références de décisions et de preuves en lecture, jamais créées par un texte Nora. Si non implémentées, la limitation doit être explicite.
- **UX :** projection interactive et inspection d'objets chez leurs propriétaires ; navigation n'autorise aucune mutation.

### 5.2. Pipeline proposé pour une demande Nora

1. Résoudre session D1 et contexte D2 (sas ou projet), l'identité réelle et les droits serveur.
2. Enregistrer le message et une corrélation de génération durable **avant** tout appel IA ; rejouer une demande perdue sans doublon dans les limites des mécanismes retenus.
3. Comprendre la nature de la demande : question simple, analyse profonde, production documentaire explicite, révision ciblée, reprise de sujet ou inspection.
4. Récupérer à partir de D4 **un contexte pertinent, traçable et autorisé** : documents/versions, acquis, sources, points ouverts, travail courant ; la stratégie doit être bornée et dégradée honnêtement si incomplet.
5. Construire les instructions et le contexte de génération **sans confondre source de données et instruction d'autorité** ; respecter la demande du Pilote et les restrictions actuelles.
6. Générer/rendre : sortie cognitive structurée, format adapté à la complexité, provenance vérifiable ; états COMPLETE/FAILED/INTERRUPTED/UNKNOWN réels. Si le streaming est retenu, fragments provisoires jusqu'à persistance finale, reconnexion et anti-duplication.
7. Si le Pilote a **explicitement demandé** une ressource durable, produire puis commander sa sauvegarde D4 ; exposer le statut réellement confirmé. Si c'est une simple réponse, ne pas créer automatiquement un document.
8. Capitaliser les acquis sélectifs utiles selon source/version/portée, sans fiche systématique ni acte d'autorité implicite. Conserver les erreurs/échecs utiles pour reprise, sans faux acquis.

**Question technique ouverte :** sélection de contexte par requêtes SQL typées, résumés sourcés, recherche textuelle ou index dérivé — choisir la solution la plus simple capable de passer les scénarios ML2. Un index vectoriel et une orchestration de plusieurs agents ne sont **pas** des prérequis a priori.

### 5.3. Contrats d'intégration D3 ↔ D4 — proposition de réalisation, pas API ratifiée

**Source de responsabilité :** R2 D3/D4 et ADR R4-01/02 ; code ML1 relu sur main@9cd7a6c751f46d1be000d33a810fc9c344476ffc. L'adaptateur Nora courant utilise run(maxTurns: 1), produit un résultat final sans streaming et n'expose pas d'outils externes. Le service D3 lit six messages de 200 caractères au maximum et résout un fil par préparation ; D4 conserve des documents et révisions mais pas encore les connaissances/sujets/points ouverts. Ce constat de code **n'est pas une observation du runtime au présent**.

| Frontière logique candidate | Demande / contexte | Réponse observable et garanties | Propriétaire |
| --- | --- | --- | --- |
| **Résoudre le travail courant** | Pilote authentifié, sas/projet identifié, session initiale ou reprise | Même fil du projet retrouvé et autorisé, pas de sélection de chat secondaire ; accès refusé sans fuite | D1/D2 identité et rattachement ; D3 fil |
| **Sélectionner le contexte pertinent** | Projet, intention, références et autorisations vérifiées | Liste bornée d'acquis, sujets, documents/versions et points ouverts, avec source, date, portée, fiabilité, limite, identifiant ; aucun transcript exhaustif imposé | D4 sélection/provenance ; D3 consomme et choisit l'usage |
| **Conduire une réponse Nora** | Intention, messages du fil, sélection D4, limites du fournisseur et règles d'autorité | Réponse textuelle/structurée et état effectif, corrélation de génération ; les données de source ne sont pas des instructions système | D3 |
| **Conserver un document demandé** | Intention explicite du Pilote et contenu rédigé ; identité projet, clé d'opération et droits | Ressource D4 et révision durables, statut confirmé ou échec/inconnu ; aucune déclaration de sauvegarde avant vérité DB | D3 demande/rédige ; D4 écrit/versionne |
| **Réviser un document** | Document, version de base réellement inspectée, section/cible, demande, clé corrélée | Conflit détecté, modification bornée, nouvelle version non destructive et diff consultable ; idempotence selon contrat à définir | D4 propriétaire |
| **Capitaliser et requalifier** | Éléments significatifs sourcés, projet, contexte et source actuelle | Acquis/point ouvert/sujet réellement conservé ou limite signalée ; provenance, historique et droit de rectification ; aucune décision D6 créée | D4 vérité ; D3 sélection et restitution |
| **Reprendre ou changer de sujet** | Projet courant, nouvel échange après fermeture ou transition, même fil | Fil de travail stable ; D4 sélectionne les acquis pertinents sans rejouer tout l'historique ; aucun nouveau chat/cycle par la navigation | D3 fil/réponse ; D4 mémoire ; D1/D2 accès ; D5 cycle unique |

**Règles d'intégration :** les contrats ci-dessus sont des **frontières et effets** ; leurs signatures TypeScript, routes HTTP, transactions, schémas, éventuelle indexation et statut machine doivent être proposés/contrôlés **avec le code dans le même macro-lot**, sans moteur concurrent. Ne pas promettre des outils Git/Web/externes à Nora à partir d'un prompt. Une réponse modèle ne peut produire seule un commit documentaire, une HumanDecision ou une modification D4 : l'application déclenche un effet **dans un contexte d'autorisation effectivement vérifié**.

**Reprise et défaillance :** chaque écriture durable a un identifiant/corrélation adapté, un résultat réconciliable en lecture, un statut honnête en perte d'ACK/restart et une absence de double effet démontrée pour les opérations concernées. La matrice doit contrôler les courses entre réponses, reconnexions/transitions de cycle, changements de versions et droits retirés. Coûts/tokens/latence et limites de contexte sont consignés sans seuil universel inventé.

## 6. Spécification par résultats fonctionnels

### 6.1. Conduite cognitive de Nora — D3

**Entrée :** intention en langue naturelle + projet/sas courant + contraintes et sources réellement disponibles ; prescriptions explicites prioritaires sur les techniques libres. **Sortie :** réponse utile et proportionnée, avec faits, hypothèses, options et limites séparés si déterminants.

**Contrats :**
- Clarifier seulement ce qui change réellement le résultat ou le risque ; prendre l'initiative dans les lectures et analyses déjà permises.
- Savoir challenger un présupposé faible, envisager des solutions alternatives et produire directement un travail intellectuel, sans imposer de cycle/CKI ni router par réflexe vers Cursor.
- Ne pas fabriquer les sources consultées, les actions lancées, les sauvegardes, la décision du Pilote ou des preuves.
- Respecter les instructions textuelles du Pilote sans exécuter d'instruction hostile incorporée dans un document, une source ou un extrait de mémoire.
- Rendre une réponse courte lorsque la tâche est simple ; utiliser tableaux, listes, sections ou liens seulement si utiles.

**Échec/reprise :** absence d'API, timeout, contexte indisponible, réponse partielle, limite de coût/token ; statut honnête, message utilisateur conservé, aucune génération présentée comme terminée sans confirmation.

### 6.2. Production documentaire et statut de conservation — D3/D4

**Prérequis :** intention de document assez explicite, projet/sas identifié, contenu autorisé et limites de taille/format. Les documents réellement conservés ont une identité durable distincte de la conversation et de toute publication Git.

- Nora peut rédiger une spécification, note ou rapport directement dans Studio ; **publication externe hors périmètre**.
- Le brouillon produit constitue une ressource D4 seulement après succès constaté ; exposer ID, titre, révision, provenance et statut effectif.
- Le rendu Markdown doit afficher titres, tableaux, listes, liens et blocs de code sans exécuter HTML/script non fiable ni perdre le contenu ; repli textuel intelligible si rendu indisponible.
- Les documents issus d'un sas conservent leur identité et les relations pertinentes au passage vers projet, sous l'acte D2 déjà implémenté.
- Échec d'écriture, contenu partiel, perte d'ACK ou contexte expiré : UNKNOWN/FAILED ou réconciliation en lecture, jamais « sauvegardé » sur simple texte du modèle.

**Questions d'implémentation :** représentation Markdown et rendu sécurisé, projection des citations et ancrage du document à la génération/source, statut sous panne ; aucune librairie imposée avant revue de contrat.

### 6.3. Révision ciblée et historique non destructif — D3/D4

**Commande candidate, non API ratifiée :** documentId, baseRevisionId, portée visée (section/selection/document), instruction du Pilote, correlationKey. L'ancienne révision n'est jamais mutée.

- La révision s'appuie sur la **version effectivement inspectée**, pas sur une hypothèse de dernière version.
- Une modification de section conserve les autres sections, dans la limite honnêtement justifiable et vérifiée par diff ; si la structure rend la portée ambiguë, demander une clarification ciblée.
- La nouvelle version est committée atomiquement avec son lien de filiation et l'état du contenu ; le résultat est idempotent selon une clé corrélée appropriée.
- Deux demandes concurrentes sur la même base doivent provoquer une détection de divergence/conflit ou une résolution explicitement sûre ; pas de “last writer wins” silencieux.
- Comparaison entre versions : modifications ajoutées/supprimées/altérées inspectables, version, provenance et restrictions de lecture ; un résumé IA n'est pas le diff lui-même.

**Impact R4/DB :** étude du verrou/contrôle de révision SQL, de l'unicité et des états SAVING/AVAILABLE/UNKNOWN ; migration seulement après contrat et tests concurrence/restart.

### 6.4. Capitalisation sélective, Sujets et points ouverts — D4

- Les acquis déterminants sont rattachés au **bon projet**, à leur origine (message/document/source/version/date), à leur degré de vérification et à leur applicabilité ; ne pas capitaliser automatiquement chaque phrase.
- Les sujets sont identifiables au-delà d'une conversation, reliés aux acquis/documents, et peuvent évoluer sans effacer provenance ou liens.
- Les questions ouvertes et réserves importantes restent retrouvables même si le sujet est renommé ou réorganisé ; une réserve gouvernée ne se clôt pas seulement parce que Nora l'affirme.
- Ne jamais copier une HumanDecision D6 ni produire un deuxième état de décision. La vue **Décisions** ne peut contenir que des références vers l'autorité réelle si cette capacité est disponible.
- **Renommage, regroupement/fusion et séparation** des Sujets sont **IN ML2 validé en périmètre** (RG-KNOW-003/004 et PF-KNOW-03), avec préservation de l'identité, de l'origine, de l'historique et des liens. Leur interaction exacte et leur implémentation restent à qualifier contre R3, sans prétendre qu'une seule création de fiche couvre la règle.

**Choix technique ouvert :** informations structurées canoniques vs index/projections dérivées ; contrat minimal et évolution du schéma à dimensionner à partir des parcours, sans “knowledge engine” autonome.

### 6.4.1. Arbitrage de périmètre validé Morris — 2026-11-04 (ML2)

**Principe directeur :** la mémoire vivante sert le travail du Pilote et les initiatives pertinentes de Nora, pas la tenue d'un classement. Un même parcours doit pouvoir identifier un acquis, le rattacher à un sujet, conserver un point ouvert, restituer leur provenance et les retrouver lorsqu'un travail reprend au cours d'un échange ultérieur du même fil. **La validation de ce périmètre n'est pas une validation des structures DB/API ni de la totalité de ML2.**

| Concept produit | Résultat observable dans ML2 | Propriété / frontière |
| --- | --- | --- |
| **Sujet / sous-sujet** | Organiser, consulter, renommer, déplacer, regrouper/fusionner ou séparer un thème sans perte de sens, d'identité suivie, de liens ou d'historique | D4 ; RG-KNOW-003/004, PF-KNOW-03 ; aucune duplication en arbre de menus ou autorité |
| **Acquis** | Nora distingue faits, hypothèses, recommandations utiles, provenance, portée et version ; ne capitalise pas toutes les remarques | D4 conserve/actualise, D3 juge la pertinence et restitue ; RG-KNOW-001/005..009 |
| **Point ouvert** | Une question, un blocage, une dépendance ou une réserve significative reste accessible au-delà du sujet et du fil qui l'a vue naître | D4 garde liens/état/provenance ; une réserve gouvernée reste soumise à D6, RG-KNOW-004/009 |
| **Document** | Brouillon identifiable, versions et provenance inspectables, retrouvé depuis le projet sans relire son transcript | D4 identité/versions ; D3 production/révision ; RG-KNOW-016..020 |
| **Décision** | Référence visible vers l'arbitrage réel, si le domaine propriétaire existe ; jamais générée par une recommandation ou un résumé | **D6 propriétaire (ML3)** ; D4 référence seulement, sans nouvel état d'autorité |

**Comportement de Nora et autonomie proportionnée :**
- Nora **peut sélectionner et capitaliser proactivement** un acquis ou un point ouvert réellement utile à la suite, sans confirmation rituelle ni formulaire à chaque échange. Le Pilote peut voir et corriger le résultat ; la reformulation ne devient ni une décision ni une preuve.
- Un **changement structurant d'organisation** (fusion, scission ou reclassement affectant plusieurs liens) doit être compréhensible, traçable et réversible lorsque pertinent et techniquement possible ; aucun gate artificiel à chaque renommage. En cas de portée ambiguë, de conflit ou de perte potentielle de relations, clarification proportionnée avant mutation.
- Les points ouverts demeurent consultables depuis le **Projet**, le **Journal — Sujets** et les éléments pertinents, **sans troisième registre ni onglet permanent obligatoire « Réserves/Recommandations »**. Le Journal — Décisions relève d'un autre propriétaire : pas de source D6 simulée en ML2.
- Lors de la **reprise du fil continu**, Nora récupère les acquis/sujets/points ouverts pertinents et leur état courant à partir de D4, sous droits vérifiés ; elle ne dépend pas de la relecture exhaustive de ses anciens messages.
- **Actualisation honnête :** une nouvelle source contradictoire est confrontée à l'ancien état contextualisé ; un fait peut être requalifié sur source suffisante, mais une réserve gouvernée ou un arbitrage D6 ne sont pas automatiquement levés.

**Parcours intégrateur de cette capacité (Q15–Q20 et Q28) :**
1. Dans le projet, le Pilote explore plusieurs options avec Nora ; hypothèse, acquis sourcé et question ouverte émergent.
2. Nora capitalise avec discernement ; les remarques passagères restent dans la conversation. Le Journal — Sujets rend les éléments réellement enregistrés consultables, avec leurs liens et leur état.
3. Le Pilote inspecte un Sujet, ses sources et son point ouvert, puis renomme/regroupe/sépare un thème ; le même point ouvert et ses provenances restent retrouvables.
4. Le Pilote ferme puis rouvre Studio et retrouve **le même fil du projet** ; Nora récupère l'acquis et la question ouverte sans fuite interprojets ni réinjection du transcript exhaustif.
5. Une source plus récente modifie l'appréciation d'un fait : Nora confronte, actualise sur preuve et n'efface ni l'historique ni une réserve gouvernée toujours ouverte.

**Preuves cumulées attendues :** contenu réellement enregistré en D4 avec provenance/version, identités et liens maintenus après réorganisation, navigation BROWSER/Figma du Journal et retour à Nora, reprise de la conversation continue et continuité LIVE/DB, négatif « recommandation ≠ décision », comparaison cognitive ChatGPT–Nora et réception Morris. Les états inconnus/échecs restent honnêtes ; pas de « réorganisation terminée » sur simple génération textuelle.

**Décision de conception encore ouverte :** représentation technique la plus simple des sujets, liens, mutations réversibles et sélection des acquis. Aucun graphe universel, base vectorielle ou orchestrateur multi-agent n'est prescrit. Préserver une vérité D4 unique ; qualifier migrations, concurrence, reprise, sécurité et coût dans l'étude technique du lot.


### 6.5. Reprise du fil continu et récupération sélective — D3/D4

**Oracle :** le Pilote retrouve le même fil visible après fermeture, reconnexion, interruption, changement de sujet ou transition de cycle, avec les objets et acquis D4 actuellement applicables. **Aucun second chat, sélecteur ni gestionnaire de discussions** n'est requis.

**As-Built ML1 :** `getPreparationContext`/`getConversationId` résolvent le fil de préparation, et `postUserMessageAndNora` y écrit. Ce modèle est cohérent avec le fil unique, mais le contexte IA reste limité aux **six derniers messages tronqués** ; la récupération sélective D4 est toujours à implémenter. Une table SQL « conversations » n'est pas une commande produit multi-chat.

**Contrats ML2 :**
1. Préserver **le même fil** lors du passage sas→projet, sans nouveau projet, cycle ou fil créé implicitement.
2. Récupérer l'identité du projet, le fil et les documents accessibles après session expirée, reconnexion, refresh ou restart ; signaler une perte d'état non prouvée.
3. Sélectionner depuis D4 les acquis, documents/versions, sources et points ouverts pertinents, avec provenance/fraîcheur/droits courants, sans charger automatiquement le transcript complet.
4. Accepter plusieurs sujets et digressions dans le fil ; n'appliquer que l'unique cycle actif du projet fourni par D5, indépendamment du sujet actuel.
5. Autoriser Journal et Inspection à retrouver les objets D4 sans recherche manuelle des anciens messages ; fermer l'Inspection revient à l'activité réelle.
6. Tester séparation entre projets, idempotence, races de génération, droit retiré, restauration d'état et honnêteté des informations.

**Trois preuves séparées :** continuité visuelle et identité de fil DB/BROWSER ; récupération sourcée D4 même après de nombreux échanges ; qualité cognitive de la reprise Nora LIVE + COG-05. **L'absence d'un deuxième ID de conversation ne constitue pas un défaut.** Un test qui ne relit que les six derniers messages reste NOT COVERED pour A13.

**Blast radius :** D1/D2 session et rattachement sas→projet, D3 génération et contexte, D4 sélection durable, D5 lecture du cycle unique, UX Travail/Journal/Inspection. **OUT :** API « nouveau chat », création/choix/nommage/liste de chats indépendants par projet.

### 6.6. UX et inspection contextualisée — D3/D4

**Surfaces sources :** conversation 03 ; document 04 ; journal Sujets 05 ; révision 18 ; comparaison 205 ; familles de conversations et activité Nora 206–217 ; consultation/inspection et points ouverts selon index R3. Les références Figma sont des cibles **de conception**, pas des captures du runtime.

**Attendus :**
- Conversation lisible et présentation riche contextuelle, sans « pavé de texte brut » pour les résultats complexes.
- Inspection d'un document/version depuis Nora ou consultation directe, avec retour à l'origine connue ; une inspection n'est ni une commande de décision ni une sauvegarde.
- Possibilité de demander une révision ciblée depuis une sélection inspectée, avec confirmation de portée et de version quand déterminantes, sans formulaire systématique.
- Sujets, documents, points ouverts directement consultables, sans Nora globale sur le portefeuille et sans onglet supplémentaire de gouvernance.
- Responsive et accessibilité : clavier/focus, reflow 1680/1280/390/320, zoom, contraste/reduced motion selon le contrat de transposition et l'état réel des composants.

### 6.7. Quatre parcours UX de transposition à prouver, pas seulement des frames à afficher

Les parcours ci-dessous **consomment** les contrats R1/R2 et les cadres R3 ; ils ne créent aucun nouvel écran canonique. Les transitions conditionnelles, états d'API, actions et propriétés natives seront contrôlés sur la source Figma pertinente avant le code UX.

| Parcours / état utilisateur | Composition Figma documentée | Interaction et résultat conditionnel | Oracle BROWSER + propriétaire |
| --- | --- | --- | --- |
| **P1 — Rédiger et inspecter** | Conversation 03 (`94:214`) → document 04 (`94:370`) ; variante demande documentaire 118 (`161:864`) | Demande explicite ; génération ≠ sauvegarde ; ouvrir seulement une ressource D4 réellement enregistrée, ou afficher FAILED/UNKNOWN | Q06–Q09, D3 produit / D4 conserve |
| **P2 — Réviser et comparer** | 04 → révision 18 (`97:359`) → comparaison 205 (`241:385`) → retour au point d'origine | Sélection et base de version contrôlables ; réussite, conflit ou inconnue distincts ; diff v1/v2 effectif, ancienne version non perdue | Q10–Q14, D4 versionne / D3 reformule |
| **P3 — Sujets et retour à Nora** | Journal 05 (`94:515`) ; sujets `160:751`, renommage `160:823`, regroupement `160:895`, ouverts `160:967` → conversation 03 | Consulter sujet et point ouvert ; poursuivre avec Nora sur la bonne référence **sans envoyer de message implicitement**, retour à la consultation si inspection fermée | Q17/Q18, D4 référence / UX navigue |
| **P4 — Reprendre le même travail** | Projet/reprise 14 (`96:370`) → conversation 03 (`94:214`) ; documents 04/205 | Après fermeture/session, même fil et documents/acquis D4 retrouvés ; aucun chat ni cycle créé par la navigation | Q19/Q20/COG-05 ; D3 fil, D4 contexte, D1/D2 accès, D5 cycle unique |

**États négatifs à partager entre parcours** : document en cours de sauvegarde, échec/ACK perdu, conflit de version, source refusée ou périmée, autre projet, historique inaccessible, reprise de session vide ou incomplète, interruption et retour sans origine. Une action d'inspection ne déclenche ni création, ni HumanDecision, ni publication. Ne pas ajouter les 223 maquettes comme autant de pages ou d'obligations de code.

**Contrat de transposition à instancier avant code UX :** Figma fileKey = itgvCulInEnFY6DvgIegvP ; pour chaque frame choisie, node-id exact, page, snapshot daté, extraction native des descendants utiles, tokens, tailles, auto-layout, interactions, states ; comparaison navigateur et divergences approuvées. La lecture Git des références de frames **n'est pas une extraction native actualisée** ; aucune mesure profonde, capture ou fidélité pixel n'est revendiquée ici.

### 6.8. Expérience Nora — restitution, activité et streaming conditionnel (qualification candidate)

**Exigence ferme issue de R1/R2 :** une réponse Nora doit être intelligible, structurée selon la tâche, sécurisée, réellement inspectable et honnête sur la génération, la sauvegarde et les limites. RG-CONV-006, RG-UX-001..003, RG-DOC-001..004, PF-24/29/33/34 sont les propriétaires des comportements ; **aucune règle R2 ne prescrit explicitement un transport streaming de tokens**.

**Orientation Morris du 2026-11-04 :** chercher sérieusement à livrer le streaming dans ML2 ; ne pas l'abandonner à la première anomalie, mais **ne pas bloquer la sortie ML2** s'il reste un obstacle matériel documenté et accepté. Un éventuel report vers un macro-lot ultérieur cohérent nécessite cause, impacts, propriétaire, dette/exit et décision Morris. Streaming ≠ preuve cognitive.

| Situation | Comportement visible à rendre fidèle | Preuve / limite |
| --- | --- | --- |
| **Réponse courte** | Réponse proportionnée ; aucun panneau, formulaire ou activité factice | R2 PF-24/29 ; Q01/Q02 |
| **Réponse complexe / document** | Markdown sûr : titres, listes, tableaux, liens réels, code ; affichage/comparaison de documents avec origine, version et statut confirmés ; pas de faux état « sauvegardé » | PF-28..35 ; Q04–Q14 |
| **Attente du fournisseur** | Indicateur discret « Nora prépare une réponse » tant qu'une génération réellement en cours est connue ; pas de liste inventée d'étapes ni de pourcentage issu du temps | R3 frames 206/208, UX activité ; Q25 |
| **Flux progressif, si retenu** | Fragments affichés comme **provisoires** ; seuls les messages validés/persistés sont qualifiés terminés ; client reconnecté retrouve l'état durable et non un flux fictivement reconstruit | QA conditionnelle Q29 ; commande, fréquence, limites d'API et transactions à éprouver |
| **Arrêt / interruption, si effectivement supporté** | Distinguer demande d'arrêt, interruption confirmée, absence de confirmation et réponse partielle ; ne pas promettre l'annulation d'un effet/document déjà committé | R3 frames 210/212/215/216 ; Q25/Q29 ; le SDK et le transport doivent être observés |
| **Erreur/timeout/UNKNOWN** | Message utilisateur conservé, échec ou inconnue lisible, possibilité de reprise/réconciliation ; aucun résultat/activité inventé | Q09/Q12/Q25, A05/A16 |

**Architecture d'expérience :** la réponse conversationnelle reste dans D3 ; les documents/acquis et leurs statuts restent dans D4 ; l'UI ne fabrique aucun état propriétaire. Markdown est une **présentation sécurisée**, pas une surface d'exécution HTML/JS ; les sorties dynamiques gardent défilement naturel et accessibilité clavier/lecteur d'écran/réduction du mouvement.

**STOP :** ne pas figer une route SSE/WebSocket, une bibliothèque Markdown ou un modèle de génération asynchrone sans nécessité démontrée. Si le streaming est retenu, qualifier les événements réellement disponibles, leur coût, l'anti-doublon, la perte de connexion et la récupération après restart **avant de revendiquer une réponse progressive fiable**.

### 6.9. Qualification native Figma ciblée et écarts à résoudre

**Consultation Figma read-only effectuée le 2026-11-04 :** fichier itgvCulInEnFY6DvgIegvP, références natives de la conversation 03 (94:214), du Journal 05 (94:515), des points ouverts 100 (160:967), du document 04 (94:370) et de l'activité 206 (281:389). Les métadonnées et compositions natives de ces **nœuds ciblés** sont consultables ; ce constat ne constitue ni un audit exhaustif des 223 frames, ni un contrat de dimensions descendants validé, ni une capture de l'application runtime.

| Surface / fonction | Référence Figma consultée | État / action de produit à relier à la preuve |
| --- | --- | --- |
| **Conversation** | 03 — 94:214 | Présenter dialogue, réponse riche et provenance sans surcharge ; vérifier la continuité du même fil et le rendu dans le navigateur |
| **Journal / Sujets** | 05 — 94:515 | Navigation Sujets, acquis, lien source et retour Nora ; la vue Décisions ne devient pas un registre D4 |
| **Points ouverts transversaux** | 100 — 160:967 | Retrouver indépendamment d'un sujet, inspecter l'origine, revenir au fil ; pas de troisième source d'autorité |
| **Document** | 04 — 94:370 | Source, version, statut et action d'inspection ; comportement complémentaire des frames 18 et 205 à extraire avant code |
| **Activité cognitive** | 206 — 281:389 | Afficher un état effectivement disponible, pas les étapes internes imaginées ni un arrêt prétendument confirmé |

**Deux écarts de couverture à conserver visibles :**
- **Ambiguïté R3 de multi-chat** : une hypothèse de plusieurs conversations avait été rédigée, mais **Morris retient un seul fil visible par projet**. Aucun contrôle de création/sélection B n'est à maquettiser. Les frames 03/14 servent à la reprise du même fil ; corrections des sources R3 sous gate D2 distinct.
- **Séparation/réorganisation des sujets** : Figma documente renommage et regroupement (160:823 / 160:895), mais la **séparation** et les retours d'erreur/conflit/réversibilité ne sont pas certifiés par le présent examen ; qualifier les états nécessaires pour satisfaire RG-KNOW-003/004 et Q17/Q28.

**Contrat de transposition existant réutilisé** : ux-ui/contrat-transposition-figma-code.md §§3–4/6.3. À l'entrée de code UI, pour chaque parcours réellement impacté, extraire des nœuds **nativement et dans leur version datée** les descendants/contraintes/variables/states/actions et les confronter à des captures navigateur aux viewports 1680/1280/390/320, avec divergences Morris approuvées. Aucune modification Figma n'a été apportée par cette qualification documentaire.

## 7. Matrice de cohérence et protocole QA

**Document lié :** matrice-tracabilite.md (même répertoire), propriétaire du rapprochement des capacités vers R1 E2E, RG/PF D2–D4, R3 frames, R4 invariants et oracles, propositions de preuve et statuts.

Les tests ML2 à produire **avec le code et l'environnement** combinent :
- **DETERMINISTIC** : contrats de compréhension et de classification, propriétés Markdown/sanitation, anti-prompt-injection, mapping de contextes, sélection de sources, cas de concurrence simulés.
- **DB/INTEGRATION** : identité et versions, contrôle de révision, conflits, provenance, transactions, récupération après échec/ACK perdu et isolation A/B.
- **BROWSER** : scénario E2E 03/04, inspection/retour au fil, rendu et action réelle de révision, accessibilité et comparaison Figma à SHA figé.
- **LIVE / comparatif cognitif** : Nora via son fournisseur et son contexte déclarés ; ChatGPT produit une référence indépendante ; comparaison qualitative documentée et vérité factuelle vérifiée séparément ; variantes/répétitions lorsque nécessaire.
- **NEGATIVE** : absence de création de document sur simple réponse, absence d'acte D6/D7/Git, absence d'élément inventé, refus sur accès révoqué, aucun rendu HTML/script actif.

**Pas de faux parallélisme :** un benchmark texte n'est pas un E2E Studio, une capture Figma n'est pas une preuve BROWSER, une réponse “j'ai sauvegardé” n'est pas une transaction D4, une fixture n'est pas une session LIVE, un rapport Cursor n'est pas un verdict de conformité. Les preuves de persistance/révision sont confrontées aux vérités D4.

## 8. Évaluation cognitive comparative — déclinaison ML2 de R5 §14

**R5 global §14 est canonique.** ML2 l'applique dans le même processus de qualification/RECETTE, sans créer de nouveau gate systématique.

**Panel candidat :**
- COG-01 : question simple vs demande comparative complexe → taille et forme proportionnées.
- COG-02 : hypothèse fragile → Nora et ChatGPT challengent, discutent les alternatives et explicitent le risque ; divergence argumentée acceptable.
- COG-03 : trois sources contradictoires ou une référence périmée → qualification sourcée, absence de certitude fictive.
- COG-04 : production puis révision ciblée → comparer pertinence de la rédaction, et vérifier indépendamment en DB la version et le diff.
- COG-05 : reprise ultérieure du même fil → comparer pertinence du contexte retrouvé, documents, points ouverts et leur actualité, **pas seulement le texte de la réponse**.
- COG-06 : source interne manquante, outil inexistant, limite de capacité → Nora annonce correctement ses limites sans bloquer l'analyse indépendante.
- COG-07 : recommandation / accord naturel / effet technique → aucune décision D6 ou action D7/D9 inventée.

**Méthode :** énoncé commun et corpus daté, versions et permissions déclarées ; productions indépendantes (si possible aveugles lors de la revue) ; grille comportementale, fact-check indépendant et verdict de revue. ChatGPT est **référence cognitive faillible**, non gold standard absolu, pas un oracle sur les droits/DB ni la seule autorité d'acceptation. Morris apprécie l'utilité et valide les réserves.

**Trace minimale :** scenarioId, problème, contexte/sources accessibles à chacun, versions modèle/paramètres connus, SHA/build/lane, exécution et niveau de preuve, réponses ou références expurgées, observations et contre-exemples, verdict, responsable et re-test. Pas de seuil de similitude imposé ni de recherche du même raisonnement interne.

**Référence comportementale ML1 à ne pas surestimer :** OAuth et conversation Nora LIVE **bornée** ont été recettés par Morris au C3 ; ML1 avait aussi messages durables, un document de base et un test BROWSER **FAKE**. Cela ne constitue **pas** une mesure de référence de profondeur d'analyse, critique, comparaison sourcée, rédaction autonome avancée, révision, mémoire sélective ou reprise dans un fil B. Pour chaque `COG-01..07`, inscrire `OBSERVED` seulement si une trace historique comparable existe ; sinon `NOT OBSERVED — BASELINE TO ESTABLISH`. Ne jamais transformer l'absence d'état de référence en score zéro ni inférer une amélioration chiffrée ; la première preuve ML2 établit alors le premier point mesuré. Comparer la *valeur observable* à la vision R1, puis ChatGPT/Nora dans des conditions déclarées.

## 9. Risques, dépendances, dette / exit

| Risque ou dette | Nature et blast radius | Mesure/condition de sortie envisagée |
| --- | --- | --- |
| **Dérive vision → implémentation** | Une mémoire “techniquement présente” mais inutilisable par Nora | E2E 03/04 avec comparaison cognitive, inspection D4 et validation Morris |
| **Seconde autorité mémoire/décisions** | D3 résume une recommandation comme acte D6 | Contrats propriétaires et tests négatifs ; absence de moteur D6 implicite |
| **Qualité de récupération** | Contexte récent, périmé, non pertinent ou trop volumineux | A13 et nouveau fil, provenances/versions, tests LIVE avec cas contradictoires |
| **Concurrence documentaire** | Écrasement, doublon, version erronée | Contrôle de base/révision, transactions/contraintes et injection de conflit/retry |
| **Streaming/rendu** | Format riche ou activité non réellement implémentés | Arbitrage sur valeur produit et protocole ; rendu Markdown sécurisé et BROWSER réel ; pas de streaming fictif |
| **Sécurité / contenu externe** | XSS, fuite interprojets, injection dans les sources | Sanitization, contrôle serveur d'accès, refus et fixtures adversariales |
| **Réserve B CI Next** | Prochaine livraison significative non validée par CI Next | Workflow Next sous GO partagé distinct, exécution réellement vérifiée **avant intégration ML2 significative** |
| **Réserve A sessions DEV/RECETTE** | Même hôte/ports, cookies non séparés | Profils navigateur séparés provisoirement ; séparation technique et re-recette **avant STABLE** |
| **ML1 A05/A16/DATA-01** | Restart, backup/restore et ACK perdu partiellement éprouvés | Conserver en dette/gate propre, retests ciblés quand ML2 affecte les données communes ; ne pas dire “clos” par transitivité |
| **UX Figma** | Conception partiellement transposée | Extraction native ciblée et confrontation screenshots/DOM avant verdict fort |
| **Coûts modèles/latence** | Contexte trop gros ou tests LIVE non reproductibles | Budget/limites, traces sans secrets, scénarios calibrés, dégradation honnête |

**Capacité suivante rendue possible :** ML3 peut utiliser des acquis et ressources structurés de ML2 pour piloter cycles, méthode et décisions gouvernées, sans reconcevoir ou détourner la mémoire D4. ML4/ML5 peuvent exploiter les provenances et documents sous permissions propres, sans leur donner un droit implicite de publication ou d'exécution.

## 10. Plan d'implémentation intégré — candidat, pas des micro-cycles

1. **Contrat et scénario discriminant** : partir du **périmètre Sujets/Acquis/Points ouverts/Reprise validé Morris**, qualifier les modalités UX/techniques, les options streaming, les scénarios cognitifs et les interfaces D3/D4. Contrôler l'écart entre R1 et R2/R3/R4.
2. **Intégration verticale du travail Nora** : contextualisation depuis D4, production/révision de ressources, persistance et versions, UX de conversation/inspection et tests intégrés. Séquençage interne selon contraintes de schéma/contrats, pas par “micro-PR mémoire puis UI puis QA”.
3. **Validation commune** : DB/concurrence/sécurité, navigateur/Figma, Nora LIVE et comparaisons cognitives indépendantes ; corriger les écarts et reprendre les seules portions impactées du candidat.
4. **RECETTE Morris sur SHA figé** : démontrer une session qui produit un document, le révise et le reprend dans un autre fil ; documenter limitations, exceptions et verdict.
5. **Revue R5 et gates** : code, tests, architecture/doc Next et références synchronisés ; Review Pack/handoff SFIA v2.6 ; GO PR/merge distinct, vérification distante ; STABLE/R6/ADOPTED distincts.

**Parallélisme :** seulement après stabilisation d'interface et ownership, par exemple moteur de récupération D4 et rendu UX sur contrats figés ; le schéma commun, la génération et la sauvegarde doivent avoir un intégrateur et des tests d'ensemble. Aucune restructuration d'architecture ou migration justifiée uniquement par la taille du lot.

## 11. Gates de validation et prochaine étape

**Gates nécessaires avant prompt Cursor / D3 :**
- **Contrats de restitution qualifiés, pas encore validés :** priorité Markdown enrichi et états d'activité honnêtes ; arbitrer la place du streaming (obligation ML2 vs option différable) ; vérifier les garanties réelles du provider avant toute promesse d'arrêt/progression.
- **Contrats D3/D4 candidats à stabiliser :** commandes de ressource, récupération sélective dans le même fil, capitalisation, idempotence et réconciliation, sans changer d'autorité.
- **Écarts R3 identifiés :** corriger l'hypothèse de multi-chat dans les sources validées via D2 ; qualifier le parcours de séparation des sujets, sans ajouter un gestionnaire de chats ni traiter les 223 écrans.
- **Déjà approuvé en périmètre par Morris (2026-11-04)** : mémoire vivante intégrée D4, Sujets/sous-sujets et réorganisation, Acquis, Points ouverts et Reprise cognitive. **Encore à qualifier avant D3** : oracles exacts, composants et états UX/Figma, stratégie de sélection D4, options streaming, impact migration/sécurité et périmètre complet ML2 ; ce document reste **CANDIDATE**.
- Vérifier code/documentation/ADR/UX et source Figma pertinente sur ref actuel ; relever les gaps bloquants et le blast radius des nouvelles migrations, permissions et UI.
- Définir branche autorisée, HEAD/base, fichiers, conditions STOP, QA, stratégie ENV-01, plan de reprise et preuve CI Next sous son GO technique adapté.
- Lire les versions **Git** du routeur et du template Cursor SFIA v2.6 et n'émettre qu'alors le prompt officiel complet ; pas de template Next parallèle.

**Critères de sortie candidats :** une production cognitive observable et utile, document enregistré/révisé/retrouvé, connaissance sélective utile et points ouverts, absence de fuite/autorité inventée, comportement honnête en panne, transposition UX contrôlée, comparatifs LIVE/ChatGPT commentés, dette/exit et preuves à SHA stable, acceptance Morris.

**Verdict D0 : ML2 PRODUCT INTENT AND D4 KNOWLEDGE SCOPE VALIDATED BY MORRIS (2026-11-04) / REST OF TECHNICAL SPEC CANDIDATE / NO CURSOR PROMPT / NO CODE / NO PR / NO MERGE / NOT ADOPTED.**
