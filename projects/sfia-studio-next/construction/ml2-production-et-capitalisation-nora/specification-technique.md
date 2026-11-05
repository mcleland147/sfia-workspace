# SFIA Studio Next — R5 / ML2 — Spécification technique validée en contenu
## Produire, réviser et capitaliser avec Nora

> **État : VALIDATED SPEC — ML2 v0.6, contenu du contrat D3/D4, UX et critères d'acceptation approuvé par Morris le 2026-11-04.** Le périmètre et les résultats attendus sont validés pour préparer le delivery ; les choix internes de signatures API/transactions, migrations et composants Figma restent à qualifier **dans les frontières du contrat**, avec retour Morris en cas d'écart structurant. **Validation documentaire ≠ GO Cursor ≠ implémentation ≠ preuve BROWSER/DB/LIVE ≠ RECETTE ≠ STABLE/RELEASE/ADOPTED**. Cette écriture sur branche candidate et sa future intégration à `main` sont des gates Git distincts.

| Métadonnée | Valeur |
| --- | --- |
| Macro-lot R5 | ML2 — Produire et capitaliser avec Nora |
| Résultat Pilote | Une collaboration cognitive utile avec Nora, produisant des analyses et documents structurés, durables, révisables et récupérables avec provenance |
| Référence de conception | **main@cec6c058d98772d342f7a3576a0ca7ae1f3646cf**, post-PR #653 ; R1–R5 harmonisés sur la continuité d'un seul fil |
| Branche documentaire de travail | docs/next-ml2-d3-d4-ux-contract-20261104 ; **candidate, distincte de main ; aucune PR/merge induite** |
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

**Requalification acquise dans Git :** les corrections R1/R2/R3/R4/R5 du modèle **un fil continu par projet** sont intégrées sur `main` par la PR #653, vérifiée le 2026-11-04. Le test initial de « deux fils A/B » a été retiré comme exigence inventée ; les présentes clarifications ML2 v0.6 ont reçu **validation de contenu Morris le 2026-11-04** et sont portées par une branche Git documentaire distincte jusqu'à leur merge.

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

**Arbitrage confirmé par Morris le 2026-11-04 :** ML2 inclut comme **capacité intégrée** Sujets, Acquis, Points ouverts et Reprise cognitive, y compris renommage/regroupement/fusion/séparation, sans moteur concurrent. **Streaming : viser effectivement sa livraison dans ML2, sans bloquer la sortie sur obstacle qualifié**, avec cause et dette/exit soumises à Morris ; le principe n'est plus à arbitrer. **Frontières d'ingénierie à vérifier :** sources internes effectivement accessibles en recette, coûts/latence et API/DB/UX réellement disponibles. Ce GO de périmètre n'est ni validation globale de la spec, ni GO Cursor.

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

**Source de responsabilité :** R2 D3/D4, ADR R4-01/02 et code ML1 relu sur main@cec6c058d98772d342f7a3576a0ca7ae1f3646cf. L'adaptateur Nora courant utilise run(maxTurns: 1), produit un résultat final sans streaming et n'expose pas d'outils externes. Le service D3 lit six messages de 200 caractères au maximum et résout un fil par préparation ; D4 conserve des documents et révisions mais pas encore les connaissances/sujets/points ouverts. Ce constat de code **n'est pas une observation du runtime au présent**.

| Frontière logique candidate | Demande / contexte | Réponse observable et garanties | Propriétaire |
| --- | --- | --- | --- |
| **Résoudre le travail courant** | Pilote authentifié, sas/projet identifié, session initiale ou reprise | Même fil du projet retrouvé et autorisé, pas de sélection de chat secondaire ; accès refusé sans fuite | D1/D2 identité et rattachement ; D3 fil |
| **Accéder à la connaissance puis choisir le contexte** | Projet, intention, références et autorisations revérifiées | D4 expose des éléments autorisés avec identité, origine/version/date/limites et signale absences ; D3/Nora **sélectionne pour la demande** les éléments pertinents et leur usage, sans exiger le transcript exhaustif | **D4 disponibilité/provenance/droits ; D3 pertinence et restitution** (RG-KNOW-011, RG-CTX-002) |
| **Conduire une réponse Nora** | Intention, messages du fil, sélection D4, limites du fournisseur et règles d'autorité | Réponse textuelle/structurée et état effectif, corrélation de génération ; les données de source ne sont pas des instructions système | D3 |
| **Conserver un document demandé** | Intention explicite du Pilote et contenu rédigé ; identité projet, clé d'opération et droits | Ressource D4 et révision durables, statut confirmé ou échec/inconnu ; aucune déclaration de sauvegarde avant vérité DB | D3 demande/rédige ; D4 écrit/versionne |
| **Réviser un document** | Document, version de base réellement inspectée, section/cible, demande, clé corrélée | Conflit détecté, modification bornée, nouvelle version non destructive et diff consultable ; idempotence selon contrat à définir | D4 propriétaire |
| **Capitaliser et requalifier** | Éléments significatifs sourcés, projet, contexte et source actuelle | Acquis/point ouvert/sujet réellement conservé ou limite signalée ; provenance, historique et droit de rectification ; aucune décision D6 créée | D4 vérité ; D3 sélection et restitution |
| **Reprendre ou changer de sujet** | Projet courant, nouvel échange après fermeture ou transition, même fil | Fil de travail stable ; D4 rend disponibles les acquis autorisés, D3 sélectionne ceux pertinents ; aucun nouveau chat/cycle par la navigation | D3 fil/réponse/sélection ; D4 source ; D1/D2 accès ; D5 cycle unique |

**Règles d'intégration :** les contrats ci-dessus sont des **frontières et effets** ; leurs signatures TypeScript, routes HTTP, transactions, schémas, éventuelle indexation et statut machine doivent être proposés/contrôlés **avec le code dans le même macro-lot**, sans moteur concurrent. Ne pas promettre des outils Git/Web/externes à Nora à partir d'un prompt. Une réponse modèle ne peut produire seule un commit documentaire, une HumanDecision ou une modification D4 : l'application déclenche un effet **dans un contexte d'autorisation effectivement vérifié**.

**Reprise et défaillance :** chaque écriture durable a un identifiant/corrélation adapté, un résultat réconciliable en lecture, un statut honnête en perte d'ACK/restart et une absence de double effet démontrée pour les opérations concernées. La matrice doit contrôler les courses entre réponses, reconnexions/transitions de cycle, changements de versions et droits retirés. Coûts/tokens/latence et limites de contexte sont consignés sans seuil universel inventé.

### 5.4. Contrat opérationnel D3/D4 et invariants d'échec — prêt pour revue de contenu, non signature d'API

**Autorités fixées, mécanismes candidats :** ce tableau ne crée aucun propriétaire supplémentaire ni base de mémoire parallèle. D4 **conserve et rend disponibles** les données du bon projet ; D3/Nora **sélectionne, raisonne et restitue** les informations utiles à l'intention courante. Le modèle ne peut ni s'octroyer une permission, ni valider seul une écriture ou un acte D6. Le choix précis des routes/types/transactions est laissé à l'ingénierie D3 dans les limites de R4 ; tout pivot structurel retourne à Morris.

| Contrat logique | Préconditions et données minimales | Postconditions / erreurs / reprise à observer |
| --- | --- | --- |
| **Contexte d'échange** | session autorisée D1, sas/projet D2, fil D3 unique, message et intention courante, éventuel cycle D5 réellement connu | conserver le même fil sas→projet et après reconnexion ; accès refusé sans fuite ; pas de création implicite de cycle/fil ; D3 borne le contexte |
| **Disponibilité D4 → choix D3** | projet et droits actuels, identifiants de ressources, source/version/date, portée et limite de fraîcheur | D4 renvoie éléments disponibles ou limite explicite ; D3 choisit les éléments **utiles**, avec justification de provenance pour les points déterminants ; exclusion contrôlable d'un acquis périmé/non autorisé ; coût et volume bornés |
| **Réponse Nora** | message utilisateur durable, contexte effectivement accessible, règles d'autorité, corrélation de génération | COMPLETED ou échec/UNKNOWN seulement si observé ; rendu adapté ; message utilisateur jamais perdu par panne fournisseur ; aucune recherche Git/Web ni outil réel annoncés sans accès |
| **Création de document** | demande explicite, Pilote/projet, contenu rédigé, origine et clé d'opération corrélée | document + révision durablement retrouvables sous D4, état AVAILABLE confirmé ; en cas d'ACK perdu/erreur état UNKNOWN/FAILED réconciliable ; jamais de doublon volontaire par retry ou toast « enregistré » fictif |
| **Révision non destructive** | document autorisé, révision de base **effectivement inspectée**, cible/section et instruction, corrélation | nouvelle révision reliée, version antérieure inchangée, diff v1/v2 inspectable ; si base périmée : **CONFLICT** sans écrasement ; récupération après restart ou timeout sans second effet |
| **Capitalisation sélective** | acquis/point ouvert réellement utile proposé par D3, référence d'origine, type factuel/hypothèse, portée, droits | D4 persiste une seule vérité de connaissance avec provenance/état, ou retourne un refus/inconnu ; D3 n'annonce « capitalisé » qu'après résultat vérifié ; l'utilisateur peut inspecter/corriger ; recommandation ≠ D6 |
| **Mutation de Sujet** | identité projet et Sujet, intention explicite du Pilote ou clarification proportionnée, opération et version de base | renommage/reclassement/regroupement/séparation traçables ; relations, points ouverts et sources retrouvables ; transformation ambiguë/concurrente refusée ou reproposée ; correction/reprise possible sans destruction d'origine |
| **Reprise du même fil** | réouverture autorisée, ancien historique long, documents/acquis/points ouverts actuels | même identité de fil, restitution D4 indépendante de la fenêtre des six derniers messages, choix D3 proportionné, absence de transcript exhaustif imposé ; révocation appliquée à la nouvelle session |

**Séparation entre reconnaissance et effet :** Nora peut proposer proactivement un acquis, mais **seule la confirmation d'écriture par le service D4** permet à l'interface d'affirmer sa conservation. Une donnée de source externe est traitée comme du contenu non autorisant, jamais comme une commande. Ne pas introduire de second service d'« intelligence mémoire » : index/recherche dérivés éventuels sont reconstruisibles et toujours subordonnés aux identités D4.

**Concurrence et idempotence :** définir au cours du **même macro-lot de code** un mécanisme démontrable pour l'unicité, la corrélation des commandes, le contrôle de version et la reprise des états SAVING/AVAILABLE/FAILED/UNKNOWN ; la contrainte SQL actuelle d'unicité de numéro de révision **ne suffit pas** à établir la sûreté d'une révision concurrente. Une erreur tardive, un ACK perdu ou un restart doivent être réconciliés par lecture de la vérité persistée, **sans promettre une transaction atomique DB + fournisseur IA + stockage objet** si elle n'existe pas.

**Sécurité :** contrôles serveur sur chaque lecture/écriture et sur les références croisées, isolation entre Pilotes/projets, droits réévalués après reconnexion et avant tout effet, absence de propagation de permissions depuis une source ou un document. Les références à D5/D6/D8/D9 restent descriptives tant que leurs domaines ne sont pas construits : pas de cycle, décision, preuve ou Git artificiellement simulés.

**Points d'ingénierie autorisés sans arbitrage produit supplémentaire :** signatures et noms de fonctions internes, schéma minimum et migrations nécessaires, recherche SQL textuelle vs index reconstructible, structure de versions, gestion transactionnelle de concurrence, composants UX réutilisables, pilote de streaming et budget mesuré. **STOP / retour Morris** si l'implémentation exige une nouvelle autorité, un moteur concurrent, une technologie d'infrastructure structurante non justifiée, un changement de périmètre ou une modification d'une règle validée.


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

**Consultation Figma read-only effectuée le 2026-11-04 :** fichier itgvCulInEnFY6DvgIegvP, références natives ciblées de la conversation 03 (94:214), du Journal 05 (94:515), des documents 04 (94:370), révision 18 (97:359), comparaison 205 (241:385), Sujets 97 (160:751), renommage 98 (160:823), regroupement 99 (160:895), points ouverts 100 (160:967) et activité 206 (281:389). Ce constat **ne prouve ni parcours de séparation complet, ni audit des 223 frames, ni extraction exhaustive des descendants, ni dimensions validées pour toutes les variantes, ni capture de l'application runtime**.

| Surface / fonction | Référence Figma consultée | État / action de produit à relier à la preuve |
| --- | --- | --- |
| **Conversation** | 03 — 94:214 | Présenter dialogue, réponse riche et provenance sans surcharge ; vérifier la continuité du même fil et le rendu dans le navigateur |
| **Journal / Sujets** | 05 — 94:515 | Navigation Sujets, acquis, lien source et retour Nora ; la vue Décisions ne devient pas un registre D4 |
| **Points ouverts transversaux** | 100 — 160:967 | Retrouver indépendamment d'un sujet, inspecter l'origine, revenir au fil ; pas de troisième source d'autorité |
| **Document** | 04 — 94:370 | Source, version, statut et action d'inspection ; comportement complémentaire des frames 18 et 205 à extraire avant code |
| **Activité cognitive** | 206 — 281:389 | Afficher un état effectivement disponible, pas les étapes internes imaginées ni un arrêt prétendument confirmé |

**Deux écarts de couverture à conserver visibles :**
- **Ambiguïté R3 de multi-chat** : une hypothèse de plusieurs conversations avait été rédigée, mais **Morris retient un seul fil visible par projet**. Aucun contrôle de création/sélection B n'est à maquettiser. Les frames 03/14 servent à la reprise du même fil ; corrections rédactionnelles R3 présentes sur la branche candidate, **sans modification Figma ni promotion sur main**.
- **Séparation/réorganisation des sujets** : Figma documente renommage et regroupement (160:823 / 160:895), mais la **séparation** et les retours d'erreur/conflit/réversibilité ne sont pas certifiés par le présent examen ; qualifier les états nécessaires pour satisfaire RG-KNOW-003/004 et Q17/Q28.

**Contrat de transposition existant réutilisé** : ux-ui/contrat-transposition-figma-code.md §§3–4/6.3. À l'entrée de code UI, pour chaque parcours réellement impacté, extraire des nœuds **nativement et dans leur version datée** les descendants/contraintes/variables/states/actions et les confronter à des captures navigateur aux viewports 1680/1280/390/320, avec divergences Morris approuvées. Aucune modification Figma n'a été apportée par cette qualification documentaire.

### 6.10. Contrat d'interaction UX candidat — états réels et séparation des Sujets

**Relecture native Figma du 2026-11-04 (read-only, sans édition) :** conversation 03 \`94:214\`, Journal 05 \`94:515\`, document 04 \`94:370\`, révision 18 \`97:359\`, comparaison 205 \`241:385\`, Sujets 97 \`160:751\`, renommage 98 \`160:823\`, regroupement 99 \`160:895\`, points ouverts 100 \`160:967\`, activité Nora 206 \`281:389\`. Les frames **représentent des états illustratifs**, pas des transactions ni un parcours de séparation validé. Le contrat ci-dessous définit l'effet attendu ; les contrôles et calques natifs exacts sont à extraire avant code UI.

| Parcours | États et actions attendus côté Pilote | Autorité à respecter / preuve |
| --- | --- | --- |
| **P1 — Réponse → document** | réponse lisible dans le fil ; indicateur de production effectif ; si document demandé : accès à l'objet seulement après sauvegarde confirmée ; FAILED/UNKNOWN lisibles et récupérables | D3 génère, D4 confirme ; Q04–Q09, Q25 |
| **P2 — Inspection → révision → comparaison** | inspection version exacte et provenance ; demande sur section/base connues ; SAVING distinct de AVAILABLE ; CONFLICT si base périmée ; v1/v2 et diff inspectables ; retour au fil et à la position d'origine sans message envoyé | D4 versions/concurrence ; D3 formulation ; Q10–Q14/Q27 |
| **P3 — Journal → Sujets / points ouverts** | liste et recherche des Sujets existants, source et liens accessibles ; renommer, regrouper ou réorganiser avec résultat confirmé ; points ouverts consultables transversalement ; retour à Nora sur la bonne référence | D4 identité/provenance/liens ; aucune vue autonome obligatoire « Réserves » ; Q15–Q18/Q28 |
| **P3 — Séparer un Sujet** | action déclenchée depuis un Sujet existant lorsque nécessaire ; choisir les acquis/liens à reclasser et comprendre le résultat visé ; **prévisualiser si l'effet est structurant**, confirmer ou annuler ; résultat persistant vérifiable, ancien sens et filiation retrouvables, points ouverts non perdus ; échec ou conflit explicités | **GAP R3 natif : pas de parcours complet de séparation prouvé**. Ne pas créer d'écran gratuit : composer sur Sujets/Inspection existants si adapté ; faire valider la solution UX par Morris si une divergence structurante est nécessaire ; Q17/Q28 |
| **P4 — Reprendre le travail** | quitter/revenir au même projet et au même fil ; documents/sujets/provenances retrouvables ; même contexte de travail pertinent après nombreux échanges ; aucun sélecteur « nouveau chat » ni cycle induit | D1/D2 identité/droits, D3 sélection, D4 connaissance, D5 cycle si disponible ; Q19/Q20/Q27/Q28 |
| **Activité / streaming** | montrer seulement une génération connue ; le bouton d'arrêt n'apparaît comme opérant que si l'API/transport démontre sa capacité, distinguer STOP demandé et confirmé ; les fragments éventuels restent provisoires | streaming **tenté en ML2 mais non bloquant**, Q25 et Q29 selon capacité réellement livrée |

**États transversaux minimaux à représenter et tester :** initial/vide ; lecture/chargement ; succès D4 confirmé ; écriture en cours ; échec ; état inconnu à réconcilier ; conflit de révision ou mutation ; accès retiré ; source périmée ; interruption ; retour avec origine perdue. Le Pilote ne voit ni succès inventé ni mutation invisible. Les contrôles clavier, focus, tailles 1680/1280/390/320, zoom et réduction du mouvement suivent le contrat Figma → code R3.

**Contrat Figma à clôturer avant implémentation UI concernée :** la séparation des Sujets ne dispose pas encore d'une représentation native du début à la fin ; le contenu attendu et ses états sont **qualifiés dans ce contrat**, mais la composition/réutilisation exacte des calques et la revue de conformité Morris restent **à instruire**, sans réclamer une revue des 223 frames. Aucun calque n'est modifié ici. Une capture Figma ne vaut jamais preuve BROWSER ; chaque action doit être liée à une réponse réelle de D4.


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

**Référence comportementale ML1 à ne pas surestimer :** OAuth et conversation Nora LIVE **bornée** ont été recettés par Morris au C3 ; ML1 avait aussi messages durables, un document de base et un test BROWSER **FAKE**. Cela ne constitue **pas** une mesure de référence de profondeur d'analyse, critique, comparaison sourcée, rédaction autonome avancée, révision, mémoire sélective ou reprise à froid du même fil. Pour chaque `COG-01..07`, inscrire `OBSERVED` seulement si une trace historique comparable existe ; sinon `NOT OBSERVED — BASELINE TO ESTABLISH`. Ne jamais transformer l'absence d'état de référence en score zéro ni inférer une amélioration chiffrée ; la première preuve ML2 établit alors le premier point mesuré. Comparer la *valeur observable* à la vision R1, puis ChatGPT/Nora dans des conditions déclarées.

## 9. Risques, dépendances, dette / exit

| Risque ou dette | Nature et blast radius | Mesure/condition de sortie envisagée |
| --- | --- | --- |
| **Dérive vision → implémentation** | Une mémoire “techniquement présente” mais inutilisable par Nora | E2E 03/04 avec comparaison cognitive, inspection D4 et validation Morris |
| **Seconde autorité mémoire/décisions** | D3 résume une recommandation comme acte D6 | Contrats propriétaires et tests négatifs ; absence de moteur D6 implicite |
| **Qualité de récupération** | Contexte récent, périmé, non pertinent ou trop volumineux | A13 et reprise du même fil après session, provenances/versions, tests LIVE avec cas contradictoires |
| **Concurrence documentaire** | Écrasement, doublon, version erronée | Contrôle de base/révision, transactions/contraintes et injection de conflit/retry |
| **Streaming/rendu** | Format riche/activité non encore implémentés, streaming souhaité mais techniquement conditionnel | Tenter réellement en ML2 ; rendu Markdown sécurisé et BROWSER réel ; documenter obstacles et dette/exit Morris si report, sans streaming fictif |
| **Sécurité / contenu externe** | XSS, fuite interprojets, injection dans les sources | Sanitization, contrôle serveur d'accès, refus et fixtures adversariales |
| **Réserve B CI Next** | Prochaine livraison significative non validée par CI Next | Workflow Next sous GO partagé distinct, exécution réellement vérifiée **avant intégration ML2 significative** |
| **Réserve A sessions DEV/RECETTE** | Même hôte/ports, cookies non séparés | Profils navigateur séparés provisoirement ; séparation technique et re-recette **avant STABLE** |
| **ML1 A05/A16/DATA-01** | Restart, backup/restore et ACK perdu partiellement éprouvés | Conserver en dette/gate propre, retests ciblés quand ML2 affecte les données communes ; ne pas dire “clos” par transitivité |
| **UX Figma** | Conception partiellement transposée | Extraction native ciblée et confrontation screenshots/DOM avant verdict fort |
| **Coûts modèles/latence** | Contexte trop gros ou tests LIVE non reproductibles | Budget/limites, traces sans secrets, scénarios calibrés, dégradation honnête |

**Capacité suivante rendue possible :** ML3 peut utiliser des acquis et ressources structurés de ML2 pour piloter cycles, méthode et décisions gouvernées, sans reconcevoir ou détourner la mémoire D4. ML4/ML5 peuvent exploiter les provenances et documents sous permissions propres, sans leur donner un droit implicite de publication ou d'exécution.

## 10. Plan d'implémentation intégré — candidat, pas des micro-cycles

1. **Contrat et scénario discriminant** : partir du **périmètre Sujets/Acquis/Points ouverts/Reprise validé Morris**, appliquer les contrats D3/D4 §5.4 et UX §6.10, préparer la tentative de streaming non bloquante, les scénarios cognitifs et la composition Figma de séparation. Contrôler tout écart avec R1/R2/R3/R4 avant code.
2. **Intégration verticale du travail Nora** : contextualisation depuis D4, production/révision de ressources, persistance et versions, UX de conversation/inspection et tests intégrés. Séquençage interne selon contraintes de schéma/contrats, pas par “micro-PR mémoire puis UI puis QA”.
3. **Validation commune** : DB/concurrence/sécurité, navigateur/Figma, Nora LIVE et comparaisons cognitives indépendantes ; corriger les écarts et reprendre les seules portions impactées du candidat.
4. **RECETTE Morris sur SHA figé** : démontrer une session qui produit un document et le révise, puis une reprise à froid du même fil permettant de retrouver ce document ; documenter limitations, exceptions et verdict.
5. **Revue R5 et gates** : code, tests, architecture/doc Next et références synchronisés ; Review Pack/handoff SFIA v2.6 ; GO PR/merge distinct, vérification distante ; STABLE/R6/ADOPTED distincts.

**Parallélisme :** seulement après stabilisation d'interface et ownership, par exemple moteur de récupération D4 et rendu UX sur contrats figés ; le schéma commun, la génération et la sauvegarde doivent avoir un intégrateur et des tests d'ensemble. Aucune restructuration d'architecture ou migration justifiée uniquement par la taille du lot.

## 11. Gates de validation et prochaine étape

**Gates nécessaires avant prompt Cursor / D3 :**
- **Contrats de restitution VALIDATED SPEC :** Markdown enrichi et états d'activité honnêtes ; streaming **à tenter sans être bloquant pour le lot**, incident et dette/exit explicites si report ; vérifier le provider et l'arrêt réel avant toute promesse de progression.
- **Contrats D3/D4 §5.4 VALIDATED SPEC :** D4 conserve/rend disponible et contrôle les droits ; D3 choisit la pertinence ; mêmes fil/identités, documents/versions/capitalisation, conflits/idempotence/réconciliation. Signatures et migrations à concevoir avec le code, sans changement d'autorité.
- **Écart R3 résiduel :** clarification multi-chat déjà intégrée via PR #653 ; **parcours natif complet de séparation des Sujets non démontré**. §6.10 pose les états et oracles, reste à choisir/révérifier la composition Figma pertinente avant le code UX ; aucun gestionnaire de chats.
- **VALIDATED SPEC par Morris (2026-11-04) :** mémoire vivante D4, Sujets/sous-sujets réorganisables, Acquis, Points ouverts, production/version documentaire, reprise du même fil ; oracles Q/COG et comportements UX pertinents. **Restent des vérifications d'ingénierie, non des validations produit anticipées :** réalisation Figma de la séparation, signatures/migrations/transactions et sécurité, sélection effective D3 des ressources D4, provider/streaming, performance et données de RECETTE, CI Next réellement exécutée.
- Vérifier code/documentation/ADR/UX et source Figma pertinente sur ref actuel ; relever les gaps bloquants et le blast radius des nouvelles migrations, permissions et UI.
- Définir branche autorisée, HEAD/base, fichiers, conditions STOP, QA, stratégie ENV-01, plan de reprise et preuve CI Next sous son GO technique adapté.
- Lire les versions **Git** du routeur et du template Cursor SFIA v2.6 et n'émettre qu'alors le prompt officiel complet ; pas de template Next parallèle.

**Critères de sortie candidats :** une production cognitive observable et utile, document enregistré/révisé/retrouvé, connaissance sélective utile et points ouverts, absence de fuite/autorité inventée, comportement honnête en panne, transposition UX contrôlée, comparatifs LIVE/ChatGPT commentés, dette/exit et preuves à SHA stable, acceptance Morris.

**Verdict : ML2 v0.6 — VALIDATED SPEC BY MORRIS (2026-11-04) / CONTRACT READY FOR D3 GO PREPARATION / NO CURSOR PROMPT / NOT IMPLEMENTED / NO ML2 QA EXECUTED / NO RECETTE / NO STABLE / NO RELEASE / NOT ADOPTED.**

---

## 12. As-Built delivery note — Cursor ML2 local construction (2026-11-05)

> **Complément descriptif** — ne réécrit pas les exigences VALIDATED SPEC §§1–11. Niveau : LOCAL CONSTRUCTION / NO RELEASE / NOT RECETTE / NOT STABLE.

| Champ | Valeur |
| --- | --- |
| Branche locale | `sfia/next-ml2-production-capitalisation` |
| Base | `main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Migration | `003_ml2_knowledge_documents.sql` (additive) |
| Schema revision technique | `003_ml2_knowledge_documents` |

### 12.1 Contrats D3/D4 réalisés

- **D4 connaissance** : tables `knowledge_subjects`, `knowledge_acquis`, `knowledge_open_points`, `knowledge_subject_events` ; services rename/merge/split avec filiation ; capitalisation sélective heuristique post-échange ; `selectRelevantKnowledgeContext` pour reprise au-delà des 6 messages.
- **D4 documents** : `reviseDocument` avec `baseRevisionId` → `CONFLICT` si base périmée ; `correlationKey` idempotente ; `compareDocumentRevisions` / diff ligne ; provenance JSON sur révisions.
- **D3** : instructions cognitives enrichies ; contexte = messages bornés + snippets D4 + titres documents ; création documentaire seulement sur intention explicite ; `humanDecisionCreated: false` toujours.
- **Streaming** : tentative réelle `run(..., { stream: true })` + `toTextStream` ; repli non-stream si échec ; métadonnées `streamingAttempted/Delivered/Notes` exposées. **Pas de preuve LIVE streaming dans ce lot** (fixture DEV pour QA automatisée).
- **UX** : surfaces Travail / Journal — Sujets / Document sur sas et projet ; `SafeMarkdown` sans HTML brut ; composition minimale de séparation de Sujets ; tokens CSS alignés Figma 94:214 (read-only MCP 2026-11-05).
- **Frontières** : pas de D5/D6/D7/D9 ; pas de multi-chat ; pas d'outil externe Nora.

### 12.2 Preuves exécutées (DEV)

| Niveau | Résultat |
| --- | --- |
| DETERMINISTIC (Vitest unit) | 26 PASS |
| PG/API INTEGRATION | 32 PASS (dont 6 ML2 + migrations 001→003) |
| BROWSER Playwright FAKE | 2 PASS (`ml1-smoke`, `ml2-smoke`) |
| LIVE Nora / OAuth | NOT RUN in this cycle |
| COG-01..07 comparatif ChatGPT | NOT RUN — baseline to establish in RECETTE |
| CI Next workflow partagé | ABSENT — gate distinct (réserve B) |

### 12.3 Écarts / dettes / exit

| Id | Nature | Propriétaire / exit |
| --- | --- | --- |
| ML2-S1 | Streaming LIVE non prouvé ; fragments provisoires non branchés à l'UI HTTP | Morris : accepter dette ou lot de reprise streaming |
| ML2-S2 | Séparation Sujets = composition minimale (pas de frame Figma native complète) | Revue UX Morris si divergence structurante |
| ML2-S3 | Fidélité Figma runtime : captures BROWSER partielles ; pas de matrice 1680/1280/390/320 complète | Compléter avant verdict fidélité forte |
| ML2-S4 | CI Next absente sur chemins partagés | GO Morris workflow distinct — **bloque READY FOR PR READINESS** |
| ML2-S5 | Cookie host collision DEV/RECETTE (réserve ML1 A) | Avant STABLE |
| ML2-S6 | Capitalisation heuristique (pas LLM-tool) — peut sous/sur-capitaliser | Affiner sous preuves COG LIVE |

### 12.4 Verdict construction locale

`READY WITH RESERVES` — vertical ML2 intégré localement avec tests DETERMINISTIC/PG/BROWSER FAKE ; pas de push projet ; pas de RECETTE ; handoff L3 only.

---

## 13. As-Built correctif intégrité — 2026-11-05 (complément)

> Correctif du même macro-lot ML2. Ne réécrit pas VALIDATED SPEC §§1–11.

| Champ | Valeur |
| --- | --- |
| Branche | `sfia/next-ml2-production-capitalisation` (poursuite des commits `d867365f`…`a9a468e9`) |
| Migration | `004_ml2_integrity_corrective.sql` (additive) |
| Schema revision | `004_ml2_integrity_corrective` |

### Corrections C1–C6

| Id | Mécanisme | Preuve |
| --- | --- | --- |
| C1 | Transactions + `FOR UPDATE` ; validation appartenance acquis/OP au Sujet source ; split crée toujours une **nouvelle** identité ; rollback injecté | PG corrective 13 tests |
| C2 | `reviseDocument` : lock document + relecture latest dans la même TX → CONFLICT déterministe | concurrent revise PASS |
| C3 | `documents.creation_correlation_key` unique ; lookup **avant** allocation d'id ; fingerprint payload → CONFLICT si mismatch | retry×3 + ACK perdu PASS |
| C4 | Diff LCS ordonné (occurrences répétées) | unit ordered diff PASS |
| C5 | FACT exige `epistemic=established` ; défaut HYPOTHESIS ; pas de capitalisation sur chatter ; annonce UI seulement si AVAILABLE | PG + conversation |
| C6 | CONFLICT/FAILED distingués ; split garde le panneau si échec ; capitalisé seulement après AVAILABLE | UX + BROWSER smoke |

### Réserves inchangées

ML2-S1 streaming UI/LIVE ; ML2-S2 composition séparation (minimale) ; ML2-S3 matrice Figma viewports ; CI Next absente ; COG LIVE NOT RUN.

## 14. As-Built consolidation C3/C4/C1 — 2026-11-05 (complément)

> Correctif intégré du même macro-lot ML2. Ne réécrit pas VALIDATED SPEC §§1–11 ni le correctif §13.

| Champ | Valeur |
| --- | --- |
| Branche | `sfia/next-ml2-production-capitalisation` (poursuite `d867365f`…`5c7dd752` + commit consolidation) |
| Migration | aucune nouvelle (004 conserve) |
| Schema revision | `004_ml2_integrity_corrective` |

### Fermetures

| Id | Mécanisme | Preuve |
| --- | --- | --- |
| C3-A | `reconcilePriorRevision` + fingerprint sur tous les chemins (lookup, race unicité, TX, catch, wait in-flight) ; `UNKNOWN/CREATION_IN_FLIGHT` si révision absente | PG concurrent same/diff payload + ACK perdu + cross-pilot |
| C3-B | Intention UI stable (`createDocIntent`/`reviseIntent` + refs) ; clé non renouvelée sur retry/ACK perdu ; refus payload incompatible ; statut visible sur surface Document | BROWSER `ml2-c3-stable-key` |
| C4 | `MAX_DIFF_CELLS=2_000_000` ; dégradation explicite `DEGRADED` / `DIFF_BUDGET_EXCEEDED` (jamais diff exhaustif faux) | UNIT adversarial + many short lines |
| C1 | Assertions journal : 0 événement MERGED/SPLIT résiduel après rollback ; même Acquis concurrent → 1 affectation ; split+merge overlap sérialisé | PG journal + concurrency |

### Non-régression

C2 concurrent revise ; C5 epistemic FACT ; ML1 sas→projet BROWSER FAKE — PASS.

## 15. Complément candidat — qualification cognitive, boucle agentique et diagnostic ML2 (2026-11-05)

> **VALIDATED IN CONTENT BY MORRIS — 2026-11-05 ; sans réécriture des As-Built §§12–14 ni des décisions ML2 v0.6 acquises, sans GO d'implémentation.** Ce chapitre est un contrat d'extension à examiner, pas une capacité déjà implémentée, un GO Cursor ni une obligation automatique de la RECETTE existante. Il s'appuie sur R1 §2.2/E2E 03, D3 §14 candidat, D4 §10 candidat, R3 §40 candidat, R4 §11 candidat, R5 §§14–15 et la matrice ML2 §8 candidate. Base documentaire : PR #655 OPEN DRAFT, tête vérifiée 08b89360 au début des travaux.

### 15.1. Résultat utilisateur, IN/OUT et état réel

**Résultat :** Nora sait adapter sa démarche à la mission, rechercher de manière complémentaire dans les ressources D4 accessibles, poursuivre plusieurs opérations intellectuelles autorisées si nécessaire et conclure avec une réponse de qualité ou une incomplétude honnête. Pour les demandes simples, elle évite la surinvestigation. Les personnes habilitées disposent d'une trace permettant de diagnostiquer le déroulement effectivement observé, puis de confronter la qualité à une référence indépendante.

**As-built candidat ML2 observé :** dans web/src/domains/conversation/nora-adapter.ts, l'Agent n'a ni modèle ni effort explicités, n'expose pas d'outil, et appelle le runner avec maxTurns=1. Le service D3 sélectionne de manière applicative une connaissance D4 avant l'appel ; Nora ne peut pas demander elle-même une lecture complémentaire pendant cette génération. Le repli streaming → non-streaming peut effectuer une seconde tentative fournisseur. Aucun de ces constats ne doit être réinterprété comme un échec des tests DB/BROWSER FAKE de ML2 déjà exécutés ; la capacité nouvelle est NOT IMPLEMENTED / NOT LIVE PROVEN.

**IN candidat :** politique de qualification et configuration cognitive D3 ; limite effective d'itérations/temps/coûts ; capacité de lecture D4 bornée compatible Agents SDK ; tracing natif et corrélation des appels ; diagnostic de mission et QA COG existante étendue. **OUT :** nouveaux outils Git/Web/Cursor non gouvernés, moteurs D5/D6, actions D7/ML5, multi-agent obligatoire, seconde mémoire, choix automatique Astra par le modèle, exploitation en arrière-plan sans contrat de reprise ou console Pilote imposée.

### 15.2. Contrats d'intégration candidats

| Interface logique | Entrée | Sortie attendue et limites | Propriétaire |
| --- | --- | --- | --- |
| Qualifier une mission | intention, contexte métier fiable et sources accessibles | difficulté, besoins d'investigation, facteurs/limites et version de politique ; pas de second appel obligatoire | D3 |
| Déterminer la configuration | qualification et politique serveur | modèle/effort compatibles, limites d'exécution et raisons synthétiques ; jamais autorité issue du modèle | D3 |
| Poursuivre une consultation | projet, besoin d'information, identité/permissions courantes | résultats D4 référencés/versionnés ou absence/refus/partiel ; pas de lecture interprojet | D4, appelé par D3 |
| Exécuter les étapes | configuration/outil déclaré, budget et corrélation | événements modèle/outil, sorties réelles, arrêt/erreur/incomplet ; aucune mutation protégée implicite | D3 / SDK |
| Diagnostiquer | traces SDK + faits applicatifs et référence de réponse | chronologie, modèle/effort appliqués, sources, erreurs, latence/usage/coûts disponibles et lacunes | D3/exploitation habilitée |
| Juger la qualité | réponse et contexte attestés, source de référence indépendante | verdict comparatif contextualisé, fait vérifié indépendamment, réserves et suite | ChatGPT recommande, Morris arbitre ; R5 §14 |

**Politique candidate de travail :** référence GPT-6.1 Sol ; effort low/medium pour demandes simples/courantes si adéquates, high comme configuration d'évaluation des analyses structurantes, xhigh pour cas exceptionnels après tests ; Astra seulement comme alternative évaluée, non obligatoire. L'expérience ChatGPT GPT-6 « Élevé » est un objectif d'utilité, pas une preuve d'identité API. Les capacités réelles du SDK 0.21.0, du modèle, de l'environnement et du compte API doivent être vérifiées avant LIVE.

**Limites et reprise :** distinguer identifiant métier de génération, appels fournisseur successifs, outils consultés, ack d'écriture D4 et éventuel retry. Timeout, maxTurns, interruption et état inconnu ne sont jamais convertis silencieusement en COMPLETE. Ne pas augmenter maxTurns sans outil réel et sans garde-fous. Tout appel complémentaire D4 respecte les mêmes contrats d'accès et de fraîcheur que les lectures initiales.

### 15.3. Traces et données réellement nécessaires

Priorité aux primitives natives Agents SDK et à leurs métadonnées de génération/appels d'outils. Le complément Studio doit corréler, sans stocker automatiquement les contenus sensibles : projet/fil/génération/tentative, SHA et lane, politique/configuration effectives, nom et résultat des capacités appelées, identités et versions des sources lues, événements d'erreur/reprise/arrêt, latences et compteurs d'usage, modèle fournisseur lorsqu'observable, coût ESTIMÉ distinct d'une facture, statut final. Ne pas stocker ni prétendre restituer la chaîne de pensée interne du modèle. Valider les options de capture/export, permissions, rétention et effacement avant RECETTE LIVE ; DATA-01 reste applicable.

**Diagnostic utile :** permettre de constater une lecture redondante, un appel échoué ou une source absente, puis d'émettre une hypothèse d'amélioration, non une explication certaine des motivations internes. Le verdict de pertinence relève du protocole R5 §14 et des sources factuelles, pas du tracing en lui-même.

### 15.4. Contrat d'essai à intégrer dans la matrice existante

- COG-01 : simple/direct face à complexe/approfondi ; vérifier effort réellement appliqué, opérations nécessaires et absence de surinvestigation.
- COG-02/03 : contradiction ou hypothèse fragile ; contrôler l'usage de sources D4 complémentaires et les limites de couverture.
- COG-04 : génération puis sauvegarde/révision document : séparer les appels fournisseur et les effets D4 confirmés.
- COG-05 : reprise du même fil et récupération D4 sous droits actuels ; ne pas confondre session et état d'une mission interrompue.
- COG-06 : source ou outil absent, budget épuisé, timeout, retry : trace complète dans sa portée et résultat PARTIAL/UNKNOWN honnête.
- COG-07 : aucune décision, autorisation ou action externe créée par une recommandation du modèle ou un appel d'outil de lecture.

**Preuve graduée :** politique de sélection DETERMINISTIC, accès D4 DB/INTEGRATION, activité BROWSER seulement si modifiée, modèle/effort/tours/outils réellement observés en LIVE, qualité via comparaison indépendante. Ne pas déduire BEHAVIOR PROVEN d'un appel LIVE isolé ou d'un tracing complet.

### 15.5. Gate et découpage de capacité

**Candidat pour la même livraison ML2 avant RECETTE :** examiner un ensemble cohérent configuration explicite + qualification proportionnée + lecture D4 complémentaire bornée si maîtrisée + boucle SDK native + traces suffisantes + QA de référence. Cela sert le résultat E2E 03/04 ; ne pas fragmenter code, tests et documentation.

**Si report :** Morris qualifie l'écart, son propriétaire, le risque, le prochain macro-lot et l'exit, sans prétendre que ML3 ou ML4 résoudra automatiquement la cognition D3. Pas de GO Cursor, changement de branche ML2, PR, merge, RECETTE ou ADOPTED issu de la seule addition de ce chapitre.

## 16. Complément technique candidat — observabilité transverse des parcours ML2 (2026-11-05)

**VALIDATED PRODUCT INTENT MORRIS / EXTENSION TECHNIQUE CANDIDATE — NON IMPLEMENTED / NOT BEHAVIOR PROVEN.** Ne modifie ni les As-Built §§12–14 ni le périmètre v0.6 précédemment validé. Référence unique : [R4 — Contrat de diagnostic transverse](../../architecture-technique/contrat-observabilite-transverse.md), [R5 §16](../reference-delivery-r5.md) et [matrice ML2 §9](matrice-tracabilite.md).

### 16.1. Périmètre d'intégration à arbitrer

**IN potentiel pour le même macro-lot avant RECETTE :** authentification D1, commandes de préparation/projet D2, requêtes HTTP, gestion d'erreurs, stockage/transactions PostgreSQL, conversation/Nora D3, récupération/sauvegarde D4, corrélation et consultation de diagnostic sur le SHA candidat. La qualité cognitive et les traces d'outils sont étudiées au §15 ; le contrat de diagnostic les relie aux frontières de l'application complète. **OUT :** D5/D6/D7/D8/D9 non implémentés, Git externe, agent-exécuteur, backend/écran de monitoring imposé, nouvelle source transactionnelle.

### 16.2. Observations de code et gaps — à confirmer au Git Truth Check Cursor

- **Routes API :** GET/POST messages, connaissance et documents contiennent des catches génériques répondant SESSION_INVALID/401 ; erreur DB/validation/bug peut être masquée, ce qui appelle une classification sûre et des tests négatifs sans divulgation.
- **D1 :** Better Auth + sessions, identité OAuth réelle distincte de l'adaptateur DEV ; hooks existants ne prouvent pas une journalisation exploitable. Un échec d'auth.api.getSession peut être absorbé par un catch ; son diagnostic nécessite distinction explicite.
- **D2/D4 :** clés de corrélation/idempotence, génération/sauvegarde et journal knowledge_subject_events existent déjà ; l'observabilité doit **lier** ces objets au lieu de les réimplémenter.
- **D3 :** generationId existant ; SDK sans model/effort explicites et maxTurns=1 sans outil au candidat ; stream fallback vers second run fournisseur possible. L'instrumentation doit compter les tentatives effectivement envoyées, pas conclure au seul generationId.
- **PostgreSQL :** client postgres/Drizzle sans instrumentateur SQL applicatif dédié observé ; statistiques/configuration Postgres live non observées. Impossible d'affirmer que des requêtes lentes sont déjà collectées.
- **Instrumentation :** aucun dispositif bout-en-bout de traces OpenTelemetry, aucun exporteur consultable et aucune rétention LIVE ne sont démontrés par le code consulté.

### 16.3. Interfaces et responsabilités à implémenter seulement après GO

**Point d'entrée HTTP** : opération et contexte de trace serveur, classification des exceptions, résultat sûr pour le client, durée/statut. **D1** : authentification et refus réellement connus. **D2/D4** : références de commande, versions et effets persistés uniquement lorsqu'ils sont confirmés. **D3** : génération et tentatives fournisseur + outils + configuration appliquée. **Exploitation** : agréger/raccorder les identifiants natifs, restituer la chronologie et ses lacunes sous habilitation.

La solution doit préférer Next.js/OpenTelemetry, Better Auth, PostgreSQL et Agents SDK natifs lorsque leurs versions verrouillées le permettent ; la capture sensible des traces SDK et le fonctionnement de l'exporteur sont vérifiés avant LIVE. La valeur d'une éventuelle bibliothèque supplémentaire doit être prouvée, sans base de logs Studio par défaut. Aucun choix de table, API, fournisseur de monitoring ou seuil d'alerte n'est acté dans cette spécification.

### 16.4. QA, sécurité et gate

**Oracles ML2 :** OBS-Q01..10 applicables en DETERMINISTIC/DB/BROWSER/LIVE selon frontière ; confirmer les retours HTTP d'une panne DB et les refus d'accès, distinguer appel Nora/génération/tentative, préserver les contrats idempotents C1–C6, tester pertes d'ACK et confidentialité des traces. Pour chaque exemple : operationId, build/lane, événements réellement émis, résultat des transactions, limites diagnostiques et niveau de preuve explicites.

**Séquençage :** un socle transversal cohérent d'observabilité peut être intégré avant RECETTE avec les capacités cognitives si Morris l'arbitre. Dans le cas contraire, la RECETTE doit décrire sa portée réduite et la dette/exit de diagnostic ; la publication documentaire n'est ni GO Cursor, ni autorisation de mutation PR #655, ni une recette prouvée.

## 17. Contrat de reprise ML2 après arbitrage Morris — capacité cognitive instrumentée (2026-11-05)

> **VALIDATED STRATEGIC SCOPE BY MORRIS / TECHNICAL EXECUTION CONTRACT TO QUALIFY / NO GO CURSOR.** [Décision propriétaire R5/ML2 du 2026-11-05](../../governance/decisions/2026-11-05-r5-ml2-cognition-observabilite-trajectory.md), [Roadmap](../../governance/roadmap.md), [R5 delivery §17](../reference-delivery-r5.md), [matrice de QA §10](matrice-tracabilite.md), [contrat d'observabilité](../../architecture-technique/contrat-observabilite-transverse.md). Ce chapitre **arbitre la trajectoire avant RECETTE** laissée candidate aux §§15.5 et 16.4 ; il ne transforme pas les hypothèses de mécanismes de ces chapitres en paramètres API adoptés. Les As-Built §§12–14 et leurs preuves restent inchangés.

### 17.1. Capacité et frontières à réaliser sans micro-lots

**Résultat pilote intégré :** une mission cognitive structurante peut approfondir la connaissance D4 au-delà du contexte injecté initialement, sous permissions courantes, avec configuration modèle/effort adaptée, contrôle des limites, réponse utile ou partielle explicite, et **diagnostic réellement consultable** du chemin. Une requête simple ne multiplie pas les appels sans raison.

**IN confirmé dans la stratégie ML2 :** D3 modèle/effort explicites et qualification proportionnée ; boucle Agents SDK multi-étapes bornée + lecture D4 additionnelle autorisée ; reprise du résultat et sauvegarde D4 sans faux succès ; observabilité des frontières HTTP/AUTH/DB/D1–D4 réellement utilisées ; scénarios COG + OBS, non-régression C1–C6, CI et preuves RECETTE. **OUT :** Git/Web/Cursor sans D9/D7, commandes gouvernées D5/D6, routage multi-modèle automatique, classeur IA à chaque message, agent framework concurrent, dashboards industriels, seconde DB de logs, nouvelles tables métier par défaut.

**Séparation fonctionnelle :** D3 qualifie et décide la configuration technique côté serveur ; D4 contrôle les accès, versions, résultats et écritures ; SDK exécute boucle/outils mais n'attribue ni permissions ni décisions D6 ; D1/D2 garantissent session/projet ; télémétrie observe, n'est pas la vérité D4 et ne rend aucune réponse conforme D8.

### 17.2. Interfaces techniques à qualifier avant mandat technique

| Frontière | Contrat de réalisation, erreurs et reprises | Points de preuve discriminants |
| --- | --- | --- |
| **Qualification D3** | Apprécier difficulté/risque/couverture, politique versionnée, éviter triage IA systématique ; conserver config/motifs non sensibles. Inconnu ne devient pas simple par défaut | Cas simple vs complexe, changement justifié d'effort, compatibilité réelle fournisseur |
| **Modèle / effort** | Configuration explicite côté SDK/API, compatible avec modèle/SDK verrouillés et entitlement effectif. Sol / low-medium-high sont des références d'étude, **non des identifiants/paramètres API approuvés avant vérification** | Observation LIVE de la configuration envoyée et appliquée ; erreur non masquée par fallback de modèle |
| **Agent / outils** | Runner Agents SDK natif avec tours/temps/appels bornés ; outil lecture-only D4 sur projet/identité/droits courants ; rapporter absence/refus, source partielle et version | Plusieurs consultations effectives dans une mission, aucune lecture interprojet, pas d'effet D6/D7/D9 |
| **Convergence** | COMPLETE, PARTIAL, FAILED, INTERRUPTED ou UNKNOWN selon vérité du périmètre. Réévaluer seulement sur contradiction/manque ; stop demandé ≠ confirmé ; ni retries ni streams ne multiplient une écriture | Timeout, limite, panne provider, fallback stream, vide, fermeture de session, reprise sûre |
| **D2/D4 et DB** | Réutiliser commandes/correlationKey, contrôles de version et journal D4 ; aucun stockage parallèle des effets. Réponse Nora ≠ document AVAILABLE | C1–C6, ACK perdu, concurrency, rollback, source/version contradictoire |
| **HTTP / Auth** | Corrélation serveur et classification sécurisée : session réellement invalide, refus, validation, conflit, DB/service indisponible ; aucun catch fourre-tout 401 | OBS-Q01..03, HTTP 401/403/404/409/5xx justifiés sans fuite |
| **Télémétrie** | Native-first Next.js/Better Auth/Postgres/Agents SDK ; lier operationId/traceId/generationId/attemptId et refs D4 ; confidentialité, coût usage, latence et statut réels | OBS-Q04..10, corrélation réelle, requête retrouvable, expurgation, exporteur indisponible |
| **Consultation RECETTE** | Moyen minimal sécurisé de rechercher operationId et reconstruire une chronologie avec sources d'effets/limites ; outil de visualisation à qualifier sur valeur/simplicité | Diagnostic réel sur exemple COG complexe et incident API/DB ; pas seulement logs émis |
| **UX** | Afficher états confirmés seulement, sans nouveau dashboard ; si parcours visuel change, vérifier Figma nativement puis BROWSER | Activité Nora 206–217, erreurs et reprise, viewports pertinents |

**STOP technique avant prompt Cursor :** résoudre les compatibilités exactes du lockfile SDK 0.21.0 et paramètres fournisseur, budgets bornés, contrat de lecture D4, modèle de données télémétriques sans duplication, droits/retention/export, configuration DEV/RECETTE, impact streaming/retry, tests et fichiers. Si une nouvelle persistance normative ou une architecture pivot est nécessaire, remonter à Morris ; aucun choix ne se substitue par inertie aux ADR R4.

### 17.3. Ordre d'intégration et preuve commune

1. **Stabiliser les frontières** modèle/effort ↔ exécution ↔ outils D4 et opération/trace ↔ résultat ; pas de contrats concurrents.
2. **Intégrer dans le même macro-lot** génération multi-étapes et diagnostic des chemins existants, avec tests unitaires et PostgreSQL d'isolation/idempotence, erreurs HTTP cohérentes et instrumentation native.
3. **Tester les négatifs** : questions simples sans surinvestigation ; refus D4 ; source périmée ; budget/timeout/UNKNOWN ; erreurs DB et AUTH différenciées ; stream qui échoue puis second appel ; exporteur absent ; secret synthétique ; ACK perdu sans doublon.
4. **Prouver en RECETTE préparatoire** sur un SHA/build/lane figés : mission complexe avec consultation D4 additionnelle et réponse utile, chronologie effectivement récupérée et sécurité de collecte ; comparer ChatGPT–Nora sur corpus déclaré (R5 §14), puis variantes COG-01..07 selon applicabilité.
5. **Revoir la qualité et le coût** : Morris juge la valeur/les limites ; l'optimisation low/medium, Astra et multi-modèles ne sont pas une condition imposée avant premier benchmark suffisant.

**Qualité minimale pour entrée en RECETTE :** les moyens de travail et le diagnostic sont **IMPLEMENTED avec couverture vérifiée** au périmètre choisi ; COG LIVE et OBS applicables ont été exécutés avec leur statut honnête ; toute lacune bloquante de sécurité/autorité/idempotence est résolue. Cela n'impose pas que toutes les réponses soient parfaites : la RECETTE Morris en juge précisément la qualité. Une preuve LIVE isolée n'est pas un ADOPTED.

### 17.4. Risques et gates

**Risque de dérive :** trop d'itérations sans outil utile, captures sensibles, erreurs faussement classées, répétition d'écriture, sur-coût de l'IA ou du tracing. **Contre-mesure :** limites, natives-first, mise en correspondance des identités existantes, non-régression C1–C6 et diagnostic éprouvé ; pas d'infrastructure de supervision avancée par défaut.

**Dettes acceptables en candidature :** alerting avancé, routage multi-modèle, télémétrie des domaines non implémentés, UI de diagnostic Pilote. Chacune a responsable/réexamen/exit chez R5/lot propriétaire ; elle ne conditionne pas la recette de la capacité ML2 si ses oracles essentiels sont satisfaits.

**Gates :** contenu stratégique validé Morris ; publication documentaire sur branche en cours ; **aucun GO Cursor D3** et aucune permission de changer la PR #655 ou `main` implicitement. Après revue du diff/SHAs et qualification du contrat, un mandat SFIA v2.6 distinct sera nécessaire ; ensuite seulement code+tests+preuves et RECETTE Morris sur SHA figé. PR readiness, merge, STABLE et ADOPTED sont indépendants.

## 18. Architecture de conduite cognitive D3 ↔ D4 — vision validée, contrat technique candidat (2026-11-05)

> **Morris a accepté en conversation la vision d'architecture D3↔D4 du même ML2 ; cette rédaction D2 est publiée uniquement sur branche documentaire candidate.** La conception détaillée et ses points à prouver ne sont ni implémentation ni preuve LIVE. Cette section rend opérationnels les choix de responsabilité du §17, sans modifier les As-Built §§12–14 ni les exigences R1–R4. Références : [R4 §14](../../architecture-technique/cadrage-r4.md), [R5 §18](../reference-delivery-r5.md), [matrice §11](matrice-tracabilite.md), [R2 D3 §14–15](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) et [R2 D4 §10–11](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md).

### 18.1. Résultat, IN/OUT et propriétaires

**Résultat observable :** Nora répond sans surinvestiguer une demande simple ; pour une mission exigeante, elle peut interroger D4 pendant le run, obtenir les ressources nécessaires sous droits actuels, confronter versions/contradictions et livrer une conclusion exploitable ou une limite honnête. Aucune citation de document non lu, sauvegarde imaginée ou permission élargie.

- **D1/D2 :** session Pilote, préparation, projet, conversation unique et contexte propriétaire validés côté serveur.
- **D3 :** qualification de difficulté/risque/couverture, politique versionnée, modèle/effort et budgets, instructions, Runner natif Agents SDK, sélection d'outils autorisés et restitution.
- **D4 :** recherche, connaissance, document/révision, provenance, contrôle de propriété/permission au point d'accès, statut de lecture et écriture durable confirmée.
- **Infrastructure de diagnostic :** observe et relie les opérations mais n'est pas propriétaire des décisions, états D4 ou permissions ; contrat R4 d'observabilité inchangé.

**IN :** lecture complémentaire D4 uniquement, boucle bornée, gestion des refus/limites, configuration effectivement appliquée, traces corrélables, continuité des acquis et révisions, tests COG/OBS. **OUT :** lecture Git/Web ou accès Cursor non livrés, D5/D6/D7/D8/D9, décisions d'autorité, outils d'écriture confiés librement au modèle, orchestration concurrente, classificateur LLM permanent et nouveau registre de connaissance.

### 18.2. Parcours nominal et contrôles obligatoires

1. **Entrée :** l'API D1/D2 établit la session et le périmètre préparation/projet ; l'identité d'autorité n'est jamais reprise des arguments écrits par le modèle.
2. **Sélection initiale :** récupérer les derniers messages et le contexte D4 réellement accessible. Les snippets, Sujets et titres existants sont des données non fiables, non des instructions. Le titre d'un document n'équivaut pas à son corps lu.
3. **Qualification D3 :** apprécier résultat demandé, enjeu, sources manquantes, contradiction et risque ; choisir sans second appel IA systématique une politique de modèle/effort/outils/bornes. L'inconnu ne vaut pas « simple » ; aucun outil/effort ne s'élève au-delà des plafonds autorisés.
4. **Exécution :** un agent Nora et un Runner Agents SDK natif ; il peut appeler D4 pendant la mission. Chaque lecture revalide droits, contexte, disponibilité et version. Un retour refusé ou partiel ne se change pas en source citée complète.
5. **Convergence :** terminer lorsque l'objectif est couvert à risque acceptable ; approfondir uniquement si contradiction/manque utile et budget disponible. Sur limite, erreur, STOP ou incertitude, restituer résultats établis, portée et travaux restants sans COMPLETE mensonger.
6. **Effet :** persister le message et, seulement selon l'intention et le contrat D4 existant, créer/réviser une ressource avec clé d'idempotence, version de base, transaction et confirmation. Réponse générée ≠ révision AVAILABLE.

Le traitement existant persiste le message utilisateur avant l'appel fournisseur : auditer les retries HTTP, le statut final assistant, la possibilité d'un doublon de tour et les retours interrompus avant d'étendre les mécanismes de rejeu. Préserver C1–C6 et les références de génération/correlationKey déjà présentes.

### 18.3. Politique cognitive D3 — candidature de contrat

| Type de demande | Signal de qualification | Conduite attendue |
| --- | --- | --- |
| Simple | Réponse directement vérifiable, risque faible, sources suffisantes | Pas de recherche ni classificateur superflus ; paramètres proportionnés |
| Analyse structurante | Options et arbitrages, hypothèses à challenger, sources utiles non résolues | Effort adéquat, consultation D4 conditionnelle, conclusion motivée |
| Investigation incertaine | Versions contradictoires, droit incertain, données cruciales absentes | Vérifier les droits, investiguer dans le budget ; qualifier les limites ou refuser la divulgation |

**Contrat de configuration :** documenter en contexte d'opération une version de politique, le modèle, l'effort, l'ensemble d'outils admis, les plafonds de tours, durée, appels D4, volume et, lorsque disponible, coût/usage. Les raisons consignées restent non sensibles. Ni les noms Sol/Astra ni les niveaux low/medium/high/xhigh ne sont un paramètre API adopté tant que la compatibilité **SDK verrouillé `@openai/agents@0.21.0` + fournisseur + entitlement** et la transmission effective au point d'appel ne sont pas vérifiées. En cas d'incompatibilité/refus : erreur explicite, pas de fallback caché ou modèle dégradé silencieux.

**Budget candidat :** un ensemble de plafonds contrôlé côté serveur, non de quotas à consommer. Les valeurs numériques, la gestion d'interruption SDK et la mesure de tokens/coût sont à qualifier avant GO technique ; aucun `maxTurns > 1` isolé ne prouve la capacité.

### 18.4. Outillage D4 — interfaces candidates, non signatures publiques figées

Deux responsabilités d'outil suffisent au départ, sous réserve de revue des services existants :

| Outil proposé (nom d'étude) | Arguments fournis par Nora | Contrat D4 côté serveur |
| --- | --- | --- |
| `search_project_resources` | Critère, types de ressources, pagination/bornes demandées | Seule la préparation/projet de la session serveur fait autorité ; recherche bornée d'Acquis/Points ouverts/Sujets/documents, couverture connue, refs, disponibilité, versions |
| `read_project_document_revision` | Identifiant de document, revisionId cible, extrait/passage souhaité | Revalidation propriétaire/permissions et révision, consultation ciblée bornée, provenance, distinction lecture complète/partielle/périmée/refusée |

**Enveloppe candidate de résultat :** `outcome` (disponible/absent/refusé/périmé/indisponible/partiel selon vérité propriétaire), `resourceRef`, `sourceVersion`, `readScope`, `content` uniquement si autorisé, `coverage` et `limitReason`. La traduction vers les statuts existants D4 est à décider ; ces libellés ne créent ni table, ni API publique, ni nouvelle machine d'état. Référencer la source consultée et la source citée séparément.

**Enforcement :** session/context binding serveur, vérification à chaque appel (y compris après pause/révocation), filtres par Pilote et préparation/projet, contrôle de version, pagination et taille de réponse. Une source interdite ne doit pas être divulguée par cache, logs ou réemploi d'un extrait devenu non autorisé ; examiner aussi l'exposition du contexte déjà transmis au fournisseur et la restitution finale. Les résultats des outils sont non fiables quant aux instructions qu'ils contiennent.

**Réutilisation et performance :** `selectRelevantKnowledgeContext()`, `listKnowledge()`, `listDocuments()`, `getDocumentRevision()` et services de propriété existants constituent la base ; vérifier les chargements étendus en mémoire, la lecture de toutes les révisions et le coût des recherches sur corpus croissant avant de choisir une optimisation. Aucun moteur vectoriel ni index supplémentaire présumé nécessaire.

### 18.5. Etats, retries, effets et continuité

- **Deux plans distincts :** état technique de génération/attempt observable et suffisance cognitive de la réponse. Un message techniquement terminé peut expliciter sources manquantes ; `PARTIAL` ou équivalent reste une projection/extension à arbitrer, non un statut DB adopté de facto.
- **Runner et arrêts :** contrôler réellement tours, outils, timeout et interruption ; STOP demandé ≠ arrêté. Une interruption après effet D4 nécessite lecture/reconciliation du propriétaire, pas de replay aveugle.
- **Provider/streaming :** `generationId` identifie la génération métier ; tentative streaming et fallback non-stream constituent des tentatives distinctes si réellement envoyées, à relier et mesurer ; l'échec d'un stream ne permet pas de déclarer coût nul.
- **D4 :** création/révision uniquement sur intention et contrat confirmés. Les `correlationKey` et `baseRevisionId` protègent les commandes ; conserver transactions, locks, réconciliation, conflit et UNKNOWN. Une consultation D4 ne provoque aucune écriture.
- **Reprise :** relire la vérité conversation/D4 et vérifier à nouveau droits/versions. Pas de seconde conversation par Sujet, ni de mémoire SDK promue automatiquement comme vérité durable.

### 18.6. Blast radius, preuves et sortie de qualification

**Fichiers propriétaires observés sur PR #655 (`08b89360`) à requalifier avant Cursor :** `web/src/domains/conversation/nora-adapter.ts`, `conversation/service.ts`, `knowledge/service.ts`, `document/service.ts`, `preparation/service.ts`, `identity/session.ts`, routes messages/documents, `db/client.ts`, écrans de conversation, tests unit/PG/Playwright et configuration/CI. Les services ont actuellement un runner `maxTurns: 1` sans outil D4, une sélection D4 injectée avant run et des routes avec `catch` global en 401 ; **ce sont des constats de candidate, pas des preuves de défaillance LIVE**.

**Oracles à porter à la matrice §11 :** réponse simple sans recherches superflues, consultation D4 déclenchée pendant une mission LIVE, lecture versionnée, refus/revocation/interprojet, source contradictoire/périmée, limite/timeout, double tentative fournisseur sous une génération, documents et ACK perdus sans doublon, non-régression C1–C6 et fil unique. Niveaux DETERMINISTIC, PG/INTEGRATION, BROWSER et LIVE distincts ; ChatGPT comparateur non autorisant et Morris arbitre la valeur.

**Contrat restant à finaliser :** compatibilité SDK/model settings, envelopes et permissions des outils, budgets, évènements/traces et sécurité/export de la future étape 2, forme des états techniques/cognitifs, corrélation et consultation en RECETTE, branche/CI/lane. Toute création de persistance normative, nouveau service de décision ou pivot ADR nécessite un gate Morris spécifique. **Aucun GO Cursor, PR/merge, RECETTE ni ADOPTED n'est consommé par ce chapitre.**

## 19. Transposition ML2 de l'observabilité transverse (2026-11-05)

> **VALIDATED IN CONTENT BY MORRIS — 2026-11-05 / DOCUMENTARY CANDIDATE ON BRANCH.** Contrat de conception ; détails de mise en œuvre, compatibilité fournisseur et mécanismes de collecte à qualifier avant GO Cursor. **NOT IMPLEMENTED / NOT TESTED / NO PR OR MERGE.**

**Résultat du même ML2 :** chaque mission Nora et incident API/D4 significatif peut être diagnostiqué en RECETTE sans second moteur métier. Responsabilité canonique : contrat R4 d'observabilité §11 ; ML2 lie ses implémentations D1/D2/D3/D4, sans reproduire tout le catalogue générique.

**IN :** ID HTTP/opération/génération/tentative, différenciation 401/403/400/409/5xx, lecture D4 réellement attestée, tentative streaming/fallback, mesures connues, effet DB D4 confirmé, trace expurgée consultable par ID et source SHA/lane ; résilience à la panne d'export ; tests COG/OBS/CI. **OUT :** métriques métier de D5–D9 non livrés, centre de supervision industriel, nouveau registre de vérité, écran Pilote de traces, middleware d'autorisation parallèle, changement de périmètre de HumanDecision.

**Raccord aux chemins existants du candidat #655 :**

1. `web/src/app/api/preparations/[preparationId]/{messages,documents,knowledge}` : classifier les exceptions et propagations d'ID ; ne plus retourner systématiquement `SESSION_INVALID` à chaque panne ; autres routes touchées selon blast radius réel.
2. `web/src/domains/identity/session.ts` : distinguer invalidité de session et panne Better Auth/DB/provisionnement ; DEV adapter reste limité à DEV et ne masque pas une panne de production.
3. `web/src/domains/conversation/{service.ts,nora-adapter.ts}` : lier opération et génération existante, instrumenter tentative réellement envoyée, éventuel second run et outils D4 ; conserver l'état partiel/inconnu et éviter les réponses fictives.
4. `web/src/domains/knowledge/service.ts` et `web/src/domains/document/service.ts` : exposer références/version/retour d'accès et événements d'écriture **après** confirmation propriétaire ; préserver les transactions, locks, baseRevisionId, correlationKey, reconciliations C1–C6.
5. `web/src/db/client.ts` et frontières services : mesurer disponibilité et durée sans écrire SQL brut ni ses paramètres ; ne pas intégrer une nouvelle DB de télémétrie par défaut.
6. Instrumentation serveur Next et support d'exploitation RECETTE : vérifier compatibilité, protection, capture durable et requête par operation_id, diagnostic après redémarrage ; aucune route publique de consultation par défaut.
7. CI / ENV-01 : un événement est identifié par SHA/build/lane réellement exécutés ; la CI Next doit exécuter les tests pertinents sur le nouveau SHA. La CI historique passée sur `08b89360` ne prouve pas les nouveaux chemins.

**Pièges de fiabilité :** le `correlationKey` HTTP conversation est actuellement transmis au service mais seulement visible en création documentaire ; ne pas revendiquer un retry conversation idempotent avant sa propre preuve. Un ID d'opération est distinct de la vérité D4. Le SDK Agents JS peut exporter des contenus si les protections n'ont pas été appliquées ; la vérification précède les essais LIVE. En cas d'absence de trace, restituer la lacune sans inventer les états.

**Exits avant entrée RECETTE ML2 :** (a) exemple d'opération complexe Nora avec outils D4 et chronologie consultable, (b) erreur DB qui renvoie une catégorie fidèle et un diagnostic, (c) deux tentatives fournisseur rattachées à une génération si fallback réel, (d) contrôle de secret synthétique, (e) consultation redémarrage/lane corrects, (f) non-régression C1–C6 et sécurité, (g) tests OBS-Q01..10 applicables au SHA et CI Next effectivement PASS. Aucune trace ne constitue un verdict de qualité cognitive R5 §14.

## 20. Contrat d'exécution consolidé — cognition D3, accès D4 et diagnostic transverse (2026-11-05)

> **TECHNICAL CONTRACT CANDIDATE / D0 CONSOLIDATION AFTER MORRIS GO 2026-11-05 — NOT IMPLEMENTED / NOT TESTED / NO GO CURSOR.** Cette section est le **contrat intégrateur proposé** des architectures D3↔D4 (§18) et observabilité (§19) pour le **même macro-lot ML2**. Elle n'amende ni la décision [R5/ML2 de trajectoire](../../governance/decisions/2026-11-05-r5-ml2-cognition-observabilite-trajectory.md), ni les ADR R4, ni les As-Built §§12–14. [R5 §20](../reference-delivery-r5.md), [QA §13](matrice-tracabilite.md), [observabilité R4 §11](../../architecture-technique/contrat-observabilite-transverse.md). Les paramètres et interfaces publiques non encore vérifiés restent proposés, non adoptés.

### 20.1. Produit, périmètre et propriétaires

**Résultat Pilote :** dans le fil unique d'une préparation ou d'un projet, Nora apporte une réponse directe à une question simple ou investigue de façon proportionnée une question difficile en demandant au propriétaire D4 les sources nécessaires pendant sa mission ; l'utilisateur obtient une conclusion étayée ou ses limites. Un exploitant autorisé peut retrouver après redémarrage, par identifiant d'opération, la chronologie réelle des erreurs, tentatives fournisseur, outils, ressources et effets D4, sans accéder à une chaîne de pensée ni à des secrets.

**IN ML2 :** D1 session et identité ; D2 contexte et préparation ; D3 sélection cognitive et exécution native Agents SDK ; D4 sélection, consultation/versions, capitalisation et sauvegarde gouvernées ; API/DB et diagnostic transverse ; couverture DETERMINISTIC, PostgreSQL/INTEGRATION, BROWSER FAKE, LIVE ciblé, COG-01..07, OBS-Q01..10, C1–C6 et ENV-01/CI. **OUT :** actions Git/Web/Cursor, D5–D9 non livrés, HumanDecision automatisée, agent d'orchestration parallèle, nouveau registre durable de connaissances, tableau de bord industriel ou multi-modèle obligatoire.

**Frontière :** D1/D2 fournissent **côté serveur** identité, session et portée ; D3 décide de la conduite cognitive et ne possède pas les droits ; D4 vérifie chaque lecture, conserve la vérité des sources/écritures, et revalide les droits lorsque le contexte change ; le Runner SDK boucle sans augmenter une autorisation ; la télémétrie constate, elle n'est ni transaction D4 ni preuve D8.

### 20.2. Séquence technique et contrat d'opération

1. **Entrée HTTP :** générer/valider `request_id` pour la tentative et `operation_id` pour l'intention logique ; relever réellement lane, source_sha et build_id. Aucun identifiant client ne devient une permission. Classifier les erreurs par frontière ; réponses client minimales, diagnostic serveur expurgé.
2. **Session et préparation :** vérifier AUTH, propriété Pilote/préparation/projet et conversation. Une panne DB/service doit rester une erreur de dépendance, pas un faux `401 SESSION_INVALID`. La révocation effective ferme la portée des outils.
3. **Persistences de tour :** préserver le fil unique et l'ordre ; le code actuel insère le message utilisateur **avant** le fournisseur. Spécifier le comportement du retry HTTP et du double clic pour éviter deux messages/générations concurrents sous une seule intention. Le `correlationKey` documentaire existant ne suffit pas à prouver l'idempotence du tour entier ; auditer conflits/transactions/contraintes avant choix d'évolution.
4. **Pré-contexte D4 :** charger un contexte limité et autorisé (acquis/points ouverts/documents). Les titres seuls ne sont pas des contenus lus ; données documentaires et conversationnelles ne deviennent pas des instructions.
5. **Politique D3 :** qualification proportionnée côté serveur, sans second appel de classement systématique ; config explicite/versionnée (modèle, effort, outils read-only, plafonds de tours, consultations, temps, volume, limites de consommation). Une demande inconnue ou risquée n'est pas automatiquement `simple`. Aucun changement silencieux de modèle, de permission ou de budget.
6. **Runner unique Nora :** un agent Nora avec fonction(s) de consultation D4 effectivement attachée(s) au Runner Agents SDK natif ; `maxTurns` strictement fini, `AbortSignal` à propagation testée, timeout d'outil réellement contrôlé. Les outils recoupent à chaque appel identité et portée serveur, version et fraîcheur ; source refusée, périmée ou partielle explicitement distinguée.
7. **Convergence :** résultat final seulement après confirmation de fin du run ; sur limite, refus, timeout, stream incomplet ou état inconnu, retour conforme à la vérité observée. Distinguer statut de génération technique (`COMPLETE/FAILED/INTERRUPTED/UNKNOWN` actuels) et couverture cognitive de la réponse ; ne pas persister automatiquement un nouvel état `PARTIAL` sans revue des consommateurs DB/API/UX.
8. **Effets D4 éventuels :** capitalisation/production documentaire uniquement selon contrat métier ; un assistant `COMPLETE` n'est pas une sauvegarde. Écriture D4 `AVAILABLE` uniquement après commit/confirmation ; collision/revision stale/ACK perdu se réconcilient par propriétaires et clés d'idempotence existants. Ne pas appeler un outil agentique mutateur pour contourner ce chemin.
9. **Diagnostic :** joindre `operation_id` à requête, génération, tentatives, lectures, erreurs et effets réellement confirmés ; exposer au personnel habilité une recherche chronologique après redémarrage ; tracer l'absence de collecte/export sans inventer les étapes perdues.

### 20.3. Interfaces candidates, résultats et incompatibilités à arrêter

| Frontière | Interface ou résultat à implémenter | Invariant / contrôle discriminant |
| --- | --- | --- |
| `D3.policy` | Entrée : objectif, contexte, contraintes de risque ; sortie : policy_version, model_requested/applied, effort_requested/applied, tool_allowlist, budgets, reason_codes expurgés | Pas de classificateur LLM obligatoire ; compatibilité fournisseur/entitlement testée ; incompatibilité explicite |
| `D3.runNora` | Entrée : contexte autorisé + `operation_id` ; sortie : `generation_id`, statut, contenu/limites, références de tentatives, usages connus | Une génération peut comprendre plusieurs tentatives réelles ; aucun fallback silencieux après stream incertain |
| `D4.search_project_resources` *(nom d'étude)* | Requête/filtre bornés de ressources du même projet, résultat paginé et versionné | Les paramètres du modèle ne fixent pas Pilote/projet ; D4 revalide droits, taille et couverture |
| `D4.read_project_document_revision` *(nom d'étude)* | ID document/révision/portion ; résultat disponible/refusé/introuvable/périmé/partiel avec `resource_ref`, version, extrait réellement lu | Propriété + permission à chaque lecture ; `getDocumentRevision` actuel traverse toutes les révisions : contrôler la volumétrie avant adaptation |
| `D4.write` (existant) | `correlationKey`, version de base et réponse autoritative, origine Nora si demande explicite | Transaction, locks et réconciliation C1–C6 conservés ; lecture ≠ citation ≠ écriture |
| `OBS.operation` | `request_id`, `operation_id`, `trace_id` si réel, `generation_id`, `attempt_id`, `provider_request_id` si fourni, référence D4/version, `outcome`, `duration_ms`, usage mesuré ou indisponible | Les IDs techniques n'autorisent pas l'action ; aucune clé `correlationKey` brute ni secret dans les logs |

**Enveloppes d'erreur :** `AUTH_UNAUTHENTICATED` → 401, `ACCESS_DENIED` → 403 ou 404 selon protection de l'existence, `INVALID_REQUEST` → 400, `CONFLICT` → 409, `DEPENDENCY_UNAVAILABLE` → 503 si approprié, `INTERNAL` → 500 ; catégories **d'étude**, à mapper sur les statuts des services existants. Aucun `catch` global qui traduit DB/fournisseur en session invalide. Les réponses de diagnostic ne réinjectent pas le message d'exception brut dans l'UI.

### 20.4. Compatibilité SDK réellement examinée

**Fait contrôlé sur les sources de la release officielle `@openai/agents@0.21.0` (commit SDK `304e436`) :** le type `Agent` accepte `modelSettings` et outils ; le `Runner` accepte `model`, `modelSettings`, `traceId`, `traceMetadata`, `traceIncludeSensitiveData` et `tracingDisabled` ; `run()` accepte `maxTurns` et `signal: AbortSignal` ; les fonctions outils admettent `timeoutMs`. `ModelSettingsReasoningEffort` comprend `none/minimal/low/medium/high/xhigh/max` au niveau types, **sans garantie que chaque modèle accepte chaque valeur**. Vérifier la construction API réelle et la compatibilité OpenAI sur la lane LIVE avant ratification du couple modèle/effort. Référence versionnée : https://github.com/openai/openai-agents-js/tree/304e436 .

**Attention sécurité critique :** le Runner `0.21.0` initialise `traceIncludeSensitiveData` à `true` si non configuré ; importer `@openai/agents` installe l'exporteur de traces par défaut. Le contrat impose une **configuration explicite `traceIncludeSensitiveData:false`** et, tant qu'aucun exporteur n'est contrôlé/autorisé, un mode `tracingDisabled` ou export maîtrisé cohérent avec les preuves OBS. Désactiver la capture des entrées/sorties ne dispense pas de vérifier les autres métadonnées, les exceptions, les logs applicatifs et la destination/rétention fournisseur. La télémétrie Studio expurgée demeure nécessaire même si le tracing SDK distant est indisponible.

**Streaming :** `run(stream:true)`, `toTextStream()` et `completed` sont présents. Une exception du stream peut se produire après une requête fournisseur réellement envoyée ; le fallback actuel vers un second `run()` doit être traité comme **nouvelle tentative indépendante**, non comme continuation supposée ni preuve d'un coût nul. Aucun retry d'opération d'écriture ou de génération ne doit être automatique sans condition démontrée ; finaliser la réponse seulement après `completed` ou retourner la limite/UNKNOWN.

### 20.5. Diagnostic minimal et sécurité de collecte

**Option de réalisation privilégiée à qualifier :** événements structurés côté serveur, destination durable et isolée par lane avec rétention DATA-01, capacité d'interrogation opérationnelle en lecture seule par `operation_id` **après redémarrage**, et références natives OTel/SDK lorsque réellement disponibles. Ne pas inventer une deuxième base d'audit, une page produit de traces ou un serveur de monitoring avant preuve de besoin. Le choix du transport/collecteur, des permissions de consultation et de la rétention fournisseur est un **point d'arrêt avant GO technique**, pas une option tacite.

**Sous aucun prétexte** exporter prompts complets, transcriptions, documents privés, SQL paramétrés, cookies/OAuth, clés, erreurs brutes, chain-of-thought ou contenu des outils sans gouvernance spécifique. `traceIncludeSensitiveData:false` ET tests secret synthétique avant LIVE. Les logs techniques suivent DATA-01 (~14 jours non critiques), les effets restent dans la DB propriétaire et les données RECETTE sont isolées par ENV-01. Panne du collecteur → diagnostic incomplet déclaré, pas succès fictif ni indisponibilité métier automatique si indépendant.

### 20.6. Blast radius et qualifications avant construction

**Code candidat inspecté au SHA `08b89360` :** `web/src/domains/conversation/nora-adapter.ts` (Runner/streams/config/tracing), `conversation/service.ts` (ordre du tour, retries, contextualisation et déclenchement D4), `knowledge/service.ts` (sélection, permissions/volumétrie, journal), `document/service.ts` (révisions/écritures/idempotence), `preparation/service.ts` (portée), `identity/session.ts` (erreurs session/DB), `app/api/preparations/[preparationId]/{messages,knowledge,documents}/route.ts` et autres routes touchées par l'erreur, `db/client.ts` (latence/erreurs), surfaces UI du fil, tests et `.github/workflows/sfia-studio-next-ci.yml`. Contrôler les contrats de types, les consommateurs du statut et le verrouillage du SDK avant modification.

**Principaux risques :** divulgation interprojets/cache, fuite de trace, doubles tours HTTP, fallback streaming consommateur de deux appels, dégradation des corrections C1–C6, perte de l'ACK D4, erreurs faussement 401, faux COMPLETE, journal non consultable, choix d'outillage plus lourd que la capacité. **Exits :** DB/INTEGRATION, HTTP négatifs, LIVE Nora/OAuth borné, BROWSER et comparaison COG ; données/sources/droits/SHA/lane et anomalies tracés.

**STOP pré-Cursor :** obtenir les valeurs de plafonds et le modèle/effort compatibles réellement vérifiés ; définir le contrat d'idempotence de tour et les mécanismes exacts de reprise ; arrêter le schéma de retour outil/état UX ; qualifier le collecteur/permissions et la rétention, les variantes de tracing et la consommation ; déterminer les fichiers impactés et la branche technique/CI sur un SHA réel. Toute évolution normative d'ADR, d'autorité, de persistance ou d'ENV-01 appelle un arbitrage Morris distinct. Voir [QA §13](matrice-tracabilite.md) et [R5 §20](../reference-delivery-r5.md).

**Verdict documentaire : TECHNICAL DESIGN CONSOLIDATED AS CANDIDATE / SDK SOURCE REVIEWED / IMPLEMENTATION NOT AUTHORIZED / QA EXTENSION NOT RUN / NO PR, MERGE, RECETTE OR ADOPTED.**

## 21. Qualification simultanée des cinq choix — validation Morris avec réserve de calibration (2026-11-05)

> **VALIDATED DESIGN DIRECTION BY MORRIS — 2026-11-05 / DOCUMENTARY CANDIDATE ON BRANCH.** Morris accepte conjointement les cinq orientations du ML2, **avec correction expresse : les limites chiffrées ci-dessous sont des bornes de test initiales, non des plafonds du produit cible**. Le code, la migration et le LIVE ne sont pas prouvés ; GO D3 Cursor, PR, merge et RECETTE restent distincts. Cette section précise le §20, sans modifier R4/ADR, DATA-01, ENV-01 ni les As-Built. Voir [R5 §21](../reference-delivery-r5.md) et [QA §14](matrice-tracabilite.md).

### 21.1. Modèle et effort — orientation validée en conception

**Un modèle principal d'étude :** `gpt-6.1-sol`, configuré côté serveur ; `low` pour une demande simple, `medium` pour une analyse structurante, `high` pour une investigation exigeante. Qualification selon intention, risque et sources manquantes, sans appel LLM de classement systématique, routage Astra/Luna automatique ni élargissement d'autorité. L'accès à ce modèle, ses efforts, son comportement avec les outils D4 et son coût doivent être testés avec la clé/lane autorisées. Un refus fournisseur est signalé sans substitution silencieuse ; alternative soumise à Morris.

### 21.2. Budgets — séparation impérative TEST et usage réel

| Profil de **qualification initiale seulement** | Appels modèle max. | Lectures D4 supplémentaires max. | Durée de test max. | Contenu D4 retourné max. |
| --- | ---: | ---: | ---: | ---: |
| Simple | 1 | 0 | 30 s | 0 |
| Analyse | 6 | 4 | 120 s | 32 000 caractères |
| Investigation exigeante | 10 | 8 | 180 s | 64 000 caractères |

**Statut de ces chiffres : `TEST-ONLY / NON DÉFINITIF / RECALIBRATION OBLIGATOIRE`.** Ce sont des plafonds artificiellement contraignants pour exercer budget épuisé, STOP, timeout, retour partiel ou `UNKNOWN` et mesurer le comportement. **120 secondes ou 32 000 caractères D4 ne sauraient être imposés comme limite d'une enquête produit réelle.** Des investigations légitimes peuvent prendre **5 à 10 minutes, voire davantage**, et requérir bien plus de contenu D4. Un test de dépassement réussi n'établit pas que Nora sait accomplir une mission longue.

**Recalibrage contractuellement requis avant usage approfondi :**
1. Isoler dans le runtime les profils `TEST_BOUNDARY` et les profils `OPERATIONAL` configurables ; aucun plafond TEST ne devient un défaut opérationnel implicite. Garder des plafonds opérationnels **finis, contrôlés, gouvernés et reconfigurables**, pas une exécution illimitée.
2. Tester un corpus **A : limites courtes artificielles** et un corpus **B : investigations réalistes longues** avec lectures D4 volumineuses, pagination, sources contradictoires et permissions ; observer volumes réellement reçus, temps, latences, qualité, causes d'arrêt, tokens et coûts s'ils sont mesurés. Absence de mesure ≠ zéro.
3. Ajuster les plafonds, la granularité de lecture, la continuité/reprise, la visibilité UX et les compromis coût/qualité à partir de ces résultats ; versionner la politique appliquée. Les chiffres de production restent **TBD jusqu'à preuve et validation Morris**. Synchroniser cette politique dans code/tests/docs du même ML2, ne pas la reporter sans propriétaire/exit.
4. Une pagination/reprise D4 doit conserver référence, version, complétude et autorisation ; un extrait partiel n'est jamais cité comme exhaustif. STOP demandé ≠ interruption effectivement obtenue ; aucun retry de fournisseur déjà sollicité sans réconciliation.

### 21.3. Intégrité du tour — orientation PostgreSQL

**Principe accepté :** réserver une **commande de tour conversationnel durable** dans le PostgreSQL déjà propriétaire, sans moteur de conversation parallèle. Identité stable liée au fil (`client_turn_key` + empreinte de contenu + portée de session serveur), références `operation_id`, messages/génération et état. Une unicité `(conversation_id, client_turn_key)` et une réservation atomique de l'ordinal, sous verrou court, sont des contrats candidats ; ne jamais retenir la transaction pendant l'appel SDK. Une migration bornée, son schéma précis et ses consommateurs requièrent un mandat D3 spécifique.

**Oracles :** même clé et même requête → résultat ou état existant sans second appel ; clé identique/payload divergent → conflit ; deuxième intention pendant RUNNING → conflit/attente explicite ; crash ou réponse perdue après envoi fournisseur → `UNKNOWN` ou résultat réconcilié depuis vérité D3/D4, **aucune regénération silencieuse**. Préserver C1–C6, révisions, idempotence des sauvegardes et unicité du fil. La télémétrie n'autorise jamais un effet.

### 21.4. Diagnostic — option sobre retenue en orientation

Événements JSON structurés **sans données sensibles**, capture durable par launcher/processus et **lane**, rotation DATA-01 (~14 jours non critiques), consultation locale en lecture seule par `operation_id` **après redémarrage**, contrôle des droits OS et séparation ENV-01. Corréler requête, opération, génération, tentatives réelles, lectures D4 et effets confirmés au SHA/build/lane servi. Vérifier `traceIncludeSensitiveData:false` et désactiver tout export SDK non approuvé ; absence de collecteur ou de trace → `DIAGNOSTIC INCOMPLETE`. Aucun nouveau store d'audit DB, dashboard Pilote ni infrastructure de monitoring imposée.

### 21.5. Git et CI — stratégie validée, opérations non autorisées

**Orientation Git/CI explicitement validée Morris :** sous **GO technique et Git futurs distincts**, créer une branche de construction intégratrice depuis le **HEAD documentaire vérifié** (pile #655–#658 + compléments). Lors d'un **GO PR distinct**, proposer **une PR intégratrice vers `main`** pour exécuter la CI Next réellement au nouveau SHA et revoir le diff complet. Les PR #655–#658 ne sont ni retargetées, ni mergées, ni fermées ou supprimées implicitement ; qualifier leur supersession et éviter les doubles merges au gate Morris. Ne pas confondre CI #655 `08b89360` SUCCESS et preuve sur la nouvelle construction.

### 21.6. Acceptation et passage à la suite

Les cinq orientations forment **un seul macro-lot ML2**, avec QA C1–C6, COG-01..07, OBS-Q01..10, scénarios de stress **et** missions réalistes longues ; vérifier clé/model/effort en LIVE, outils D4, migrations PG, retries/UNKNOWN, capture de traces, sécurité, isolation, CI et statut réel de la lane. **Prochaine étape : revue de préparation du mandat SFIA v2.6, sans génération du prompt ni lancement Cursor sous le présent GO.** Code = non modifié ; tests de l'extension = NOT RUN ; RECETTE = NOT STARTED ; ADOPTED = non acquis.

## 22. As-Built construction intégratrice cognition/observabilité — 2026-11-05 (local)

> **LOCAL IMPLEMENTATION / DETERMINISTIC+PG+BROWSER FAKE PROVEN PARTIAL / LIVE NOT RUN / NO PROJECT PUSH.** Branche `sfia/next-ml2-cognition-observability-integrated` depuis `docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b`. N'écrase pas §§12–14 ni la direction §§20–21.

### 22.1 Réalisé

| Capacité | Réalisation |
| --- | --- |
| Politique D3 | `cognitive-policy.ts` — profils simple/analyse/investigation ; modèle demandé `gpt-6.1-sol` ; efforts low/medium/high ; **TEST_BOUNDARY ≠ OPERATIONAL** |
| Outils D4 lecture | `search_project_resources` + `read_project_document_revision` — portée serveur liée ; budget appels/chars ; refus/partiel distingués |
| Runner | Agent unique avec tools allowlist ; `maxTurns` fini ; `setTracingDisabled(true)` ; attempts distincts stream/fallback |
| Tour durable | table `conversation_turn_commands` + unicité ordinal messages (migration `005`) ; replay / PAYLOAD_MISMATCH / TURN_IN_PROGRESS |
| Observabilité | JSONL lane-local `.obs/<lane>/` + stdout ; `obs:query` par `operation_id` ; redaction secrets |
| HTTP | `StudioError` — DB≠401 ; routes messages/documents/knowledge classifiées |
| UX | `clientTurnKey` stable sur retry message ; statut affiche policy/operation sans télémétrie rail |

### 22.2 Preuves locales (DEV)

| Suite | Résultat |
| --- | --- |
| unit | 42 PASS |
| PG integration | 53 PASS (dont turn-command idempotence + tool call fixture) |
| Playwright | 3 PASS |
| tsc / lint / build | PASS |
| migrate 001→005 | OK sur `sfia_next_dev` et `sfia_next_e2e` |

### 22.3 Non-preuves / réserves

- LIVE `gpt-6.1-sol` / entitlement / effort réel : **NOT RUN**
- Corpus B missions 5–10 min + >32k D4 : **NOT RUN** (OPERATIONAL TBD)
- COG-01..07 comparatif ChatGPT : **NOT RUN**
- OBS-Q01 OAuth LIVE, export SDK distant : **NOT RUN**
- CI Next sur nouveau SHA : **OPEN GATE** (pas de push projet)
- RECETTE / STABLE / ADOPTED : **NOT AVAILABLE**

## 23. As-Built correctif Critical post-revue — 2026-11-05 (local)

> **LOCAL CORRECTIVE on `53be6097` / same branch / no project push.** Répond à la revue ChatGPT du handoff `865c731d` (5 familles). N'écrase pas §22.

### 23.1 Correctifs

| Famille | Invariant |
| --- | --- |
| FIX-TURN | RUNNING orphelin → UNKNOWN (stale/lease ou assistant déjà présent) ; CAS terminal ; replay FAILED/UNKNOWN sans fabriquer COMPLETE ; concurrence même clé |
| FIX-D4 | Contenu uniquement si `revision.status===AVAILABLE` ; `getDocumentRevision` n'élève plus SAVING/UNKNOWN ; latest non-AVAILABLE → STALE sans auto-servir l'ancien |
| FIX-SDK | Pas de 2ᵉ `run()` après stream d'état fournisseur UNCERTAIN ; `modelApplied`/`effortApplied` = null/UNVERIFIED ; notes catégorisées |
| FIX-BUD | `OPERATIONAL_PROVISIONAL` explicite DEV only ; absent/hors DEV fail-closed ; `maxTurns` = budget policy (plus de cap silencieux 12) |
| FIX-D4 search | Filtre DB avant LIMIT ; `totalMatched` exact/unknown ; coverage honnête ; chars d'enveloppe imputés au budget |
| FIX-OBS | Allowlist meta ; query read-only (pas de mkdir) ; isolation lane sous `SFIA_OBS_DIR` ; purge DATA-01 14j ; redaction exact-key + secrets libres |

### 23.2 Preuves locales (correctif)

| Suite | Résultat |
| --- | --- |
| unit | 50 PASS (dont nora-adapter-corrective, obs retention/isolation, BUD fail-closed) |
| PG integration | 62 PASS (dont `ml2-critical-corrective.pg.test.ts` FIX-TURN/D4) |
| Playwright FAKE | 3 PASS |
| tsc / build | PASS |
| LIVE / CI new SHA / RECETTE | **NOT RUN** |
