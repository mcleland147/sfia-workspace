# SFIA Studio Next — R5 / ML2 — Spécification technique candidate
## Produire, réviser et capitaliser avec Nora

> **État : QUALIFICATION D0 / DOCUMENTED — SPECIFICATION TECHNIQUE CANDIDATE v0.2, NON VALIDÉE.** Le statement produit et le principe d'évaluation comparative ChatGPT ↔ Nora ont reçu l'accord de Morris le 2026-11-04 ; **l'ensemble des mécanismes, frontières fines, contrats et preuves ci-dessous restent à revoir/arbitrer avant toute construction D3**. Ce document n'est pas un GO Cursor, PR, merge, STABLE, RELEASE ou ADOPTED. Les interfaces proposées ne sont ni du code existant ni des API ratifiées.

| Métadonnée | Valeur |
| --- | --- |
| Macro-lot R5 | ML2 — Produire et capitaliser avec Nora |
| Résultat Pilote | Une collaboration cognitive utile avec Nora, produisant des analyses et documents structurés, durables, révisables et récupérables avec provenance |
| Référence de conception | main@35df7aa53c0bafa3e8ccf2615468672a7c0988f8 (GitHub distant vérifié le 2026-11-04) |
| Branche documentaire de travail | docs/next-r5-ml2-cognitive-contract-20261104 ; **candidate, distincte de main** |
| Autorité | Morris : arbitrages, validation de contrat et gates ; ChatGPT : conception/revue/évaluation comparative ; Cursor : implémentation technique sous SFIA v2.6 |
| État Git local / services démarrés | NON OBSERVÉS ; les preuves historiques de ML1 ne prouvent pas l'état runtime présent |
| Produit amont | ML1 CLOSED BY MORRIS WITH CARRIED RESERVES, code mergé #649, validation fonctionnelle au candidat C3 |
| Produit aval | ML3 : méthode/cycles/decisions gouvernées ; ML4 : sources Git facultatives ; ML5 : actions réelles gouvernées |
| Sources canoniques | Vision R1 §§1–2, 2.8, 2.13–2.15, 2.20, 2.32–2.33, 2.40–2.41 ; R2 D3/D4, D2 CRE-027 ; R3 UX et Figma ; R4 ADR 01–04/QA A-B ; R5 §14 / ENV-01 / DATA-01 |
| Niveau de preuve à l'entrée | ML2 : NOT IMPLEMENTED ; ML1 D3/D4 de base IMPLEMENTED, QA locale partielle et recette LIVE limitée, avec écarts connus |

## 1. Statement et résultat utilisateur — vision R1 souveraine

**Statement validé dans son ambition, à décliner :** permettre au Pilote de conduire dans le sas ou dans son projet un travail cognitif naturel avec Nora : comprendre, explorer, investiguer dans les sources réellement accessibles, challenger, comparer, produire directement, réviser, capitaliser les acquis importants et les réutiliser lors d'une nouvelle conversation ; le tout avec un rendu clair et une provenance honnête.

**Critère de produit discriminant :** le Pilote doit ressentir une aide intellectuelle qui fait progresser son travail, **et non un chat simplement persistant ni un gestionnaire de fichiers avec génération de texte**. Une similitude stylistique avec ChatGPT ne démontre pas cette valeur : l'oracle est le résultat utile et observable, le contexte recouvré, la qualité cognitive et les règles d'autorité.

### 1.1. Parcours intégrateur de référence — E2E 03 + E2E 04 + complément R1 §2.41

1. Le Pilote ouvre un projet existant, sans cycle/CKI/Git obligatoire, et expose une question de conception comportant plusieurs options.
2. Nora comprend l'objectif, respecte les prescriptions, cherche les éléments internes réellement accessibles, explicite les lacunes et produit une analyse comparative critique et une suite utile.
3. Le Pilote demande explicitement de rédiger un document de synthèse ; Nora fournit la rédaction et Studio conserve un brouillon durable, avec identité, révision, source, statut et contrôle d'accès.
4. Le Pilote demande une révision ciblée d'une section ; le résultat conserve la version précédente, montre le changement pertinent et n'écrase ni les autres sections ni une révision concurrente.
5. Dans une **nouvelle conversation du même projet**, Nora retrouve avec pertinence le document, les acquis structurants, une question encore ouverte et leur provenance, sans injection exhaustive du transcript.
6. Une source contradictoire, indisponible ou devenue périmée déclenche une qualification honnête ; aucune recommandation n'est promue en décision D6 ou en permission d'effet.

**Acceptation macro-lot :** capacités observées en BROWSER + DB et situations Nora LIVE adaptées au même SHA de candidat et au même contexte déclaré ; revue comparative cognitive selon R5 §14 ; arbitrage Morris des réserves.

### 1.2. Couverture d'une intention fondatrice qui dépasse les sept E2E historiques

Le **parcours R1 §2.41 « Production, révision et reprise d'un document »** est un complément explicitement approuvé à la vision ; sa numérotation ne remplace pas les **sept E2E primaires**. Il doit être démontré comme **une chaîne utilisateur complète**, non par cinq écrans indépendants ou de seuls tests unitaires :

`Projet / conversation A → intention documentaire explicite → rédaction Nora → sauvegarde confirmée D4 (brouillon + version + provenance) → Inspection → sélection/ordre de révision → version B distincte avec comparaison → fermeture/retour au bon fil → nouvelle conversation B du même projet → document/version/acquis retrouvés`.

**Oracles cumulés** : conservation distincte de la génération, versions non destructives et correctement ordonnées, origine de navigation restituée, bon projet/acteur, continuité de connaissance D4 après changement de fil, absence de publication Git implicite. Sous erreur, conflit ou perte d'ACK, préserver le dernier état réellement établi. Relier ce parcours à `RG-DOC-001..010`, `RG-KNOW-016..020`, `PF-28/30/31/34/35`, `PF-KNOW-11/12/14`, et à Q07–Q14/Q19 dans la matrice ; les références de frames 03/04/18/205 restent à extraire nativement au bon moment.

**Découverte R1 → R5 à surveiller** : le résultat « nouvelle conversation B » suppose **création et sélection réelles d'un fil distinct au sein du même projet**. Ni rechargement de la conversation A, ni copie intégrale de son transcript, ni création d'un second projet ne remplissent cet oracle. La conception R3 actuelle ne démontre pas à elle seule la commande produit correspondante : son UX précise doit être confrontée à R1/R2 avant le code, et tout écart structurant soumis à Morris.

## 2. IN / OUT et interfaces adjacentes

### 2.1. IN cohérent

- D3 : conduite cognitive (compréhension de l'intention, clarification ciblée, initiative raisonnable, critique, analyse, production et restitution adaptative).
- D3/D4 : présentation riche des résultats, Markdown sécurisé, distinction réponse conversationnelle vs ressource documentaire ; inspection d'objet et retour au fil.
- D4 : ressource documentaire du projet (identité, révisions, provenance, sauvegarde, accès et récupération), production directe d'un brouillon puis révision non destructive.
- D4 : capitalisation sélective de sujets, acquis et points ouverts ; consultation/reconstitution du contexte utile dans un **nouveau fil**, selon la portée du projet et les droits courants.
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

**Frontières à confirmer par Morris :** degré d'organisation des Sujets et points ouverts livré en ML2 (parcours minimal utile vs toutes les variantes R2/R3) ; importance du streaming dans la perception de qualité ; niveau de disponibilité des sources internes pour le scénario de référence.

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
| D3 — conversation | web/src/domains/conversation/service.ts : messages persistés avant/après appel, contexte construit à partir des **six derniers messages complets** tronqués à 200 caractères chacun | La nouvelle conversation doit retrouver d'autres sources et acquis que son seul transcript ; prouver provenance et priorité ; distinguer réponse et état réellement persisté |
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
- La gestion avancée des restructurations de sujets (fusion/scission/réorganisation et historique) est **à qualifier en acceptation ML2** contre PF-KNOW-03 et les surfaces R3 ; ne pas déclarer sa réalisation sur la seule création de fiches.

**Choix technique ouvert :** informations structurées canoniques vs index/projections dérivées ; contrat minimal et évolution du schéma à dimensionner à partir des parcours, sans “knowledge engine” autonome.

### 6.5. Reprise dans une autre conversation — D3/D4

**Oracle central :** après une session conversationnelle nouvelle du **même projet**, Nora sait retrouver un acquis, une source/version, un document et une question encore ouverte pertinents sans copier tout l'historique brut dans le prompt.

**Gap As-Built ML1 discriminant :** `getPreparationContext` et `getConversationId` résolvent actuellement un fil depuis la préparation ; `postUserMessageAndNora` écrit dans ce fil. La table `conversations` accepte plusieurs lignes, **mais aucune commande métier distincte « créer/choisir conversation B dans le projet » n'est prouvée**. Le simple schéma relationnel ne suffit pas.

**Contrat fonctionnel-technique ML2 à préciser avant code :**
1. Le Pilote ouvre un **projet effectivement accessible**, retrouve la conversation A historique, puis crée **explicitement une conversation B indépendante** ou choisit un fil B déjà conservé ; pas de bascule silencieuse ni d'écrasement d'A.
2. Le propriétaire **D3** crée et identifie la conversation, la sélectionne et attache les nouveaux messages au fil demandé ; **D2** fournit le contexte projet/sas et ne crée aucun deuxième projet, tandis que **D1** garantit l'accès du Pilote. Le modèle exact de l'association et des interfaces serveur demeure candidat (pas de nom d'API ratifié).
3. **D4** fournit à B une sélection autorisée et pertinente des acquis du projet, documents/versions, provenance et points ouverts, **indépendante** du transcript de A ; D3 consomme ces éléments sans les transformer en décision, instruction de méthode ni autorisation.
4. La navigation B → A, changement de projet, refresh, nouvelle session, expiration ou accès refusé conserve une sélection compréhensible et les vérités durables. Un état non restauré est déclaré, jamais feint.
5. La preuve distingue trois résultats : **deux identités de conversation durables réellement distinctes** (DB/API) ; **récupération D4 sans relecture exhaustive** (traces de sélection/provenance) ; **qualité cognitive de la reprise** (LIVE + comparaison contextualisée). Un seul de ces niveaux ne valide pas les deux autres.

**Blast radius prioritaire :** résolution de préparation/projet, schéma relationnel, conversations/messages, navigation projet, contrôle d'autorisation, contexte Nora et tests ; préserver la continuité sas→projet et le fil initial prouvés en ML1. Un test qui renvoie simplement les six derniers messages reste **NOT COVERED** pour A13.

- Identité, contexte et droits actuels revérifiés ; pas de fuite entre Pilotes ni entre projets, même si des documents ont des titres identiques.
- Context selection proportionnée : éléments utiles au problème courant, fraîcheur vérifiable, limite déclarée pour tout élément indisponible.
- Contradiction entre un résumé ancien et une nouvelle source : conserver les deux contextes datés, ne pas transformer l'ancienne assertion en vérité actuelle.
- Passage sas→projet : continuité d'identité sans double document, sans génération de projet implicite.
- Reconnexion, restart et échec partiel : récupération de l'état réellement committé ; pas de double sauvegarde, message « travail terminé » ou décision déduite.

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
| **P4 — Nouveau fil et reprise** | Ouverture du projet/activité 14 (`96:370`) → conversation 03 ; documentaire 04/205 si référence retrouvée | **GAP UX à qualifier** : les frames de reprise projet/fil ne prouvent pas une commande de création/sélection du fil B. Définir le contrôle minimal utile à partir de R1/R2, préserver le fil A, reprendre B avec acquis D4 et sans faux historique | Q19/Q20/COG-05 ; D3 fil, D4 contexte, D1/D2 accès |

**États négatifs à partager entre parcours** : document en cours de sauvegarde, échec/ACK perdu, conflit de version, source refusée ou périmée, autre projet, historique inaccessible, nouvelle conversation vide, interruption et retour sans origine. Une action d'inspection ne déclenche ni création, ni HumanDecision, ni publication. Ne pas ajouter les 223 maquettes comme autant de pages ou d'obligations de code.

**Contrat de transposition à instancier avant code UX :** Figma fileKey = itgvCulInEnFY6DvgIegvP ; pour chaque frame choisie, node-id exact, page, snapshot daté, extraction native des descendants utiles, tokens, tailles, auto-layout, interactions, states ; comparaison navigateur et divergences approuvées. La lecture Git des références de frames **n'est pas une extraction native actualisée** ; aucune mesure profonde, capture ou fidélité pixel n'est revendiquée ici.

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
- COG-05 : nouvelle conversation → comparer pertinence du contexte retrouvé, documents, points ouverts et leur actualité, **pas seulement le texte de la réponse**.
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

1. **Contrat et scénario discriminant** : valider le périmètre réel des sujets/points ouverts, les options streaming, les scénarios cognitifs et les interfaces D3/D4. Contrôler l'écart entre R1 et R2/R3/R4.
2. **Intégration verticale du travail Nora** : contextualisation depuis D4, production/révision de ressources, persistance et versions, UX de conversation/inspection et tests intégrés. Séquençage interne selon contraintes de schéma/contrats, pas par “micro-PR mémoire puis UI puis QA”.
3. **Validation commune** : DB/concurrence/sécurité, navigateur/Figma, Nora LIVE et comparaisons cognitives indépendantes ; corriger les écarts et reprendre les seules portions impactées du candidat.
4. **RECETTE Morris sur SHA figé** : démontrer une session qui produit un document, le révise et le reprend dans un autre fil ; documenter limitations, exceptions et verdict.
5. **Revue R5 et gates** : code, tests, architecture/doc Next et références synchronisés ; Review Pack/handoff SFIA v2.6 ; GO PR/merge distinct, vérification distante ; STABLE/R6/ADOPTED distincts.

**Parallélisme :** seulement après stabilisation d'interface et ownership, par exemple moteur de récupération D4 et rendu UX sur contrats figés ; le schéma commun, la génération et la sauvegarde doivent avoir un intégrateur et des tests d'ensemble. Aucune restructuration d'architecture ou migration justifiée uniquement par la taille du lot.

## 11. Gates de validation et prochaine étape

**Gates nécessaires avant prompt Cursor / D3 :**
- Morris approuve la frontière de capacité ML2 et ses principaux oracles, ainsi que l'étendue réelle de Sujets et du streaming ; le présent document reste **CANDIDATE**.
- Vérifier code/documentation/ADR/UX et source Figma pertinente sur ref actuel ; relever les gaps bloquants et le blast radius des nouvelles migrations, permissions et UI.
- Définir branche autorisée, HEAD/base, fichiers, conditions STOP, QA, stratégie ENV-01, plan de reprise et preuve CI Next sous son GO technique adapté.
- Lire les versions **Git** du routeur et du template Cursor SFIA v2.6 et n'émettre qu'alors le prompt officiel complet ; pas de template Next parallèle.

**Critères de sortie candidats :** une production cognitive observable et utile, document enregistré/révisé/retrouvé, connaissance sélective utile et points ouverts, absence de fuite/autorité inventée, comportement honnête en panne, transposition UX contrôlée, comparatifs LIVE/ChatGPT commentés, dette/exit et preuves à SHA stable, acceptance Morris.

**Verdict D0 : ML2 PRODUCT INTENT AGREED / TECHNICAL SPEC CANDIDATE / NO CURSOR PROMPT / NO CODE / NO PR / NO MERGE / NOT ADOPTED.**
