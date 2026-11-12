# SFIA Studio Next — Contrat technique : qualification sémantique et mobilisation gouvernée

| Champ | Qualification |
| --- | --- |
| Date | 12 novembre 2026 — Europe/Paris |
| Statut | **VALIDATED IN CONTENT BY MORRIS — CONTRAT TECHNIQUE DE PRINCIPE, AVEC RÉSERVES D'EXÉCUTABILITÉ / NO BUILD GO** (12/11/2026) |
| Relation à la décision | [Décision de principe validée du 12/11](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) ; [conception fonctionnelle validée](conception-qualification-semantique-mobilisation-gouvernee.md) |
| Objet | Traduction technique approuvée en principe, implémentable et testable après vérifications ciblées, **sans nouvelle autorité ni moteur parallèle** |
| Base de lecture | `main@6d237452680640324eeadbb18f4601fd7de99850`, PR #676 `2416e2ee25662821b015407346c64ec204f67488` (OPEN/NON MERGÉ) |
| Correctif local non publié | Branche Cursor annoncée `fix/next-ml4c-intent-authority-restitution-20261112`, contenu local **NON OBSERVÉ** depuis Git ; handoff `a9dceaf9` relu, verdict `REVIEW NOT READY` |
| Périmètre | D3 comme qualificateur et conducteur ; contrats et points d'effet existants D1–D9 |
| Gates | **Cinq principes T-01/T-02/T-03 et garde-fous validés par Morris ; vérifications d'exécutabilité et éventuel nouveau gate d'architecture/DB toujours requis. Aucun GO Cursor, PR, merge ou déploiement.** |

> **Portée** : la suppression des routeurs lexicaux métier et les cinq principes techniques détaillés ci-dessous sont **validés en contenu par Morris**. Les API exactes, la persistance avant mutation et certains contrats d'autorité doivent encore être **vérifiés dans le code et prouvés**. Aucune implémentation, preuve LIVE ou adoption produit n'est acquise.

## Addendum de validation Morris — 12 novembre 2026

**Décision exprimée :** « OK GO, je valide l'ensemble », à la suite de la revue des cinq principes techniques. Cette validation porte sur **la cible de conception et ses garanties**, non sur un code compilé, une migration ni un mandat d'exécution.

| Principe validé | Contrat retenu | Vérification à produire |
| --- | --- | --- |
| **TV-01 — Qualification canonique** | Nora D3 produit une interprétation structurée et typée au cours de sa conduite cognitive ; **`outputType` + Zod** est l'option privilégiée, sans double routeur lexical. | Sur **`@openai/agents@0.21.0`**, vérifier outils D4/Git, `finalOutput`, streaming, tool-use et génération invalide ; comparaison à l'alternative outil D3 non mutatif uniquement si nécessaire. |
| **TV-02 — Aucun effet sur parole du modèle** | La qualification sémantique propose des opérations ; chaque propriétaire contrôle état, cible, droits, contrat et acte humain. | Les cas D2/D5/D6/D9 prouveront l'absence d'effet et de HumanDecision inventés. |
| **TV-03 — Autorité ancrée dans le Pilote** | Toute autorité conversationnelle admissible est liée au message USER authentifié et au contrat D5/D6 ; Nora ne signe ni décision ni mandat. | Déterminer par opération les preuves d'acte admissibles, résolutions de cible et confirmations indépendantes exigées, **sans regex métier de secours**. |
| **TV-04 — Qualification durable avant mutation** | Une qualification validée est liée durablement à la commande de tour et réutilisée lors des reprises ; ne jamais redemander une interprétation libre d'un tour déjà engagé. | Examiner la faisabilité de l'écriture pré-effet avec le journal existant ; si schéma DB nécessaire, **STOP + arbitrage Morris** avant migration. |
| **TV-05 — Pas de fallback lexical** | Échec modèle, schéma invalide, absence de droits ou cible ambiguë : blocage/clarification/restauration sûre, jamais réactivation de l'ancien routeur lexical métier. | Tests négatifs, e2e, LIVE et recherche statique exhaustive avant clôture. |

**Constat de version :** `web/package-lock.json` au candidat `2416e2ee`, blob `d7075a4b770d06ee2c6e917369cdf491c563ebb2`, verrouille `@openai/agents@0.21.0`, `@openai/agents-core@0.21.0` et `zod@4.6.7`. La documentation SDK contemporaine décrit les sorties structurées avec `outputType` et `finalOutput`, **mais la compatibilité complète du runtime Next épinglé n'a pas été testée dans cette revue**. Ne pas confondre API documentée et comportement Next vérifié.

**Point d'attention sémantique :** une validation Zod assure une structure, pas l'absence d'omission ou de mauvaise compréhension. Garder les barrières indépendantes du propriétaire d'effet et un corpus représentatif ; un acte sensible ambigu est bloqué/clarifié.

**Gates :** le contrat est **validé en contenu avec réserves techniques**. Les détails de mise en œuvre, le blast radius final, l'éventuelle évolution de schéma et le GO Cursor restent séparés. Le futur macro-lot devra synchroniser **code, suppressions, tests, architecture, R2 applicables, documentation as-built, delivery-history, cahier/journal de recette et Roadmap**, avec vérification distante selon les autorisations Git.

### Qualification statique complémentaire — validation Morris du 12/11/2026

**Mandat et validation :** à la suite de la revue en lecture seule des réserves T-01/T-03, Morris confirme **« OK, je valide »**. Cela approuve le **diagnostic et les obligations de preuve** ci-dessous, **pas leur levée expérimentale** ni un GO de réalisation, DB, PR ou promotion. Ce complément ne remplace pas les invariants TV-01 à TV-05 déjà validés.

| Réserve | Constat fondé sur les sources | Qualification / exigence de sortie |
| --- | --- | --- |
| **T-01 — sortie structurée** | `web/package-lock.json` sur `2416e2ee` verrouille `@openai/agents@0.21.0`, `@openai/agents-core@0.21.0` et `zod@4.6.7`. Le code upstream examiné (`openai/openai-agents-js@304e436`) expose `outputType`, validation Zod, `finalOutput`, `completed` et outils, **mais l'identité de ce commit avec le tag npm 0.21.0 n'a pas été démontrée**. Next utilise aujourd'hui `toTextStream()` et `finalOutput` dans `conversation/nora-adapter.ts`. | **API plausible / compatibilité exacte et intégration Next NON PROUVÉES** : confirmer sur le SDK 0.21.0 réellement installé l'association outils D4/Git, structure Zod, `finalOutput` après `completed`, gestion des erreurs et des deltas JSON ; ne pas diffuser de JSON provisoire comme réponse Pilote. Test SDK/agent et preuve LIVE sous environnement isolé avant verdict. |
| **T-02 — actes humains D5/D6** | `conversation/service.ts` appelle `applyConversationalAuthority` **avant** Nora ; `pilotage/conversation-authority.ts` et `pilotage/service.ts` invoquent tous deux `qualifyPilotageIntent`. Le propriétaire contrôle déjà la provenance USER, statut `COMPLETE`, projet, Pilote et identité de l'énoncé (`pilotage/service.ts`, `loadUserMessage` / `userMessageAuthorizes` / `classifyCommand`). | **Frontières de provenance réutilisables / qualification lexicale encore propriétaire** : remplacer à la fois le routeur conversationnel et le classement lexical au point d'effet par une qualification canonique Nora corrélée au message utilisateur et vérifiée sous contrat D5/D6. Les décisions conversationnelles admissibles doivent rester possibles ; Nora ne crée jamais de HumanDecision par sa seule inférence. Vérifier la cible, les droits, l'applicabilité, les preuves d'acte et les reprises. |
| **T-03 — persistance** | `db/schema.ts` expose `conversation_turn_commands` avec `clientTurnKey`, fingerprint, `userMessageId`, `generationId`, `ownerToken` et `resultJson`. Dans `conversation/turn-command.ts`, `resultJson` est principalement enregistré au terminal ; certaines réconciliations `RUNNING → UNKNOWN` rendent un résultat nul et les chemins de terminal peuvent écraser une valeur intermédiaire. | **Réutilisation du journal existant plausible / preuve transactionnelle NON ACQUISE** : écrire de manière atomique et fence/CAS une qualification versionnée **avant la première mutation** ; vérifier récupération en cas de `UNKNOWN`, conservation au terminal, reprise sans requalification libre et absence de doublon. Si le schéma existant ne suffit pas : **STOP / arbitrage Morris sur blast radius DB avant migration**. |

**Blast radius prouvé en statique :** `conversation/nora-adapter.ts`, `conversation/service.ts`, `conversation/turn-command.ts`, `pilotage/intent.ts`, `pilotage/conversation-authority.ts`, `pilotage/service.ts`, `pilotage/command-runner.ts` et `db/schema.ts` (cette dernière comme source à vérifier, **pas comme autorisation de changement**). Le blast radius complet D2–D9 et UX reste à qualifier sur HEAD local réel avant code.

**Preuves non acquises à cette date :** aucun test runtime/transactionnel ni LIVE de cette architecture ; aucune suppression de regex métier ; aucune démonstration de compatibilité finale du SDK, aucune décision de migration ou preuve d'autorité modifiée. `S02-01` demeure **FAIL** et le correctif local antérieur demeure `REVIEW NOT READY`.

**Gate suivant :** cadrer le delivery intégrateur et ses tests (y compris documentation synchronisée), puis **GO Cursor SFIA v2.6 distinct**. Cette validation ne vaut ni prompt Cursor déjà généré ni autorisation de push projet, PR, merge, RECETTE ou ADOPTED.

## 1. Résultat, IN/OUT et invariants

**Résultat Pilote :** exprimer une intention dans son langage naturel ; Nora en comprend les objectifs, opérations, restrictions et dépendances ; Studio vérifie les capacités existantes et les autorisations ; les domaines exécutent les seuls effets demandés et admis ; Nora reprend à partir du résultat réel.

**IN :** qualification conversationnelle, multi-intentions, D2/D4/D5/D6 et publication documentaire Git, choix des outils cognitifs D3, mémoire/sélection D4, tri des tours pendant un pending, restitution, reprise, tests, suppression des routeurs lexicaux et documentation synchronisée.

**OUT :** moteur transactionnel générique supplémentaire ; décision humaine automatique ; nouvelle capacité métier D7/D9 non implémentée ; refonte UX/UI globale ML4D ; merge Git REAL ; évolution de schéma/architecture non justifiée ni arbitrée ; ML5 Cursor produit.

**Invariants :** une intention interprétée ≠ une autorisation ; une proposition ≠ un effet ; une réponse de Nora ≠ une preuve ; un ACK perdu ≠ absence d'effet ; une qualification non disponible ≠ permission de réactiver des regex métier.

## 2. Points d'intégration observés dans le candidat

| Point du code | État observé / conséquence |
| --- | --- |
| `domains/conversation/nora-adapter.ts` | Agent `@openai/agents` existant ; réponse principalement textuelle et outils D4/Git de lecture. Extension structurée à concevoir et vérifier avec le SDK effectif. |
| `domains/conversation/service.ts` | `postUserMessageAndNora` réserve le tour durable, **applique actuellement D5/D6 avant `generateNoraReply`**, puis qualifie D2/D4/publication par heuristiques ; ordre à revoir. |
| `domains/conversation/intent-conduction.ts` | `CAPABILITY_CONTRACTS` et adaptation aux propriétaires existants ; qualification lexicale D2/document dépendant ; bonne base de catalogue à réutiliser, corriger et compléter. |
| `domains/conversation/document-act.ts` | Qualification textuelle CREATE/REVISE mélangée à une extraction structurelle `sfia-document`. Séparer interprétation à supprimer et parsing contractuel à conserver. |
| `domains/pilotage/intent.ts`, `conversation-authority.ts` | D5/D6 interprétés lexicalement avec un contrôle du message utilisateur et de l'état D5/D6 ; remplacer la première fonction sans affaiblir la seconde. |
| `domains/pilotage/thread-recovery.ts` et `app/projects/[projectId]/page.tsx` | Classification lexicale côté client pour distinguer dialogue indépendant et effet pendant un pending ; le serveur doit devenir la source d'arbitrage de coexistence sûre. |
| `domains/conversation/cognitive-policy.ts` | Mots-clés choisissant profil et `toolAllowlist` ; séparer budget/permissions d'une classification lexicale du message. |
| `domains/knowledge/service.ts` | Sélection et capitalisation `lexical-heuristic` ; adapter la sélection sémantique, sans supprimer la provenance ni les garanties de propriété D4. |
| `domains/conversation/mission-continuity.ts` | Projections et reprises déjà existantes ; réutiliser les états/refs, remplacer la détection lexicale de publication et supprimer la restitution interne brute. |
| `domains/conversation/turn-command.ts` | Réservation, fingerprint, lease/ownership et retour UNKNOWN existants ; préserver leurs invariants. |
| `app/api/preparations/[preparationId]/messages/route.ts` | Entrée unique authentifiée pour envoyer le message ; ne pas ajouter une deuxième commande métier parallèle. |

Le relevé est **issu de la lecture Git**, sans inspection du worktree local Cursor ni test du SDK modifié. Vérifier à nouveau ces frontières sur le HEAD réel du cycle avant intervention.

## 3. Architecture proposée : une qualification canonique D3 par tour

### 3.1. Principe de traitement

La **qualification canonique** d'une intention est émise par Nora en sortie structurée, validée par un schéma serveur, et corrélée au **message Pilote réellement authentifié**. Les domaines consomment une proposition typée, pas une phrase générée.

La conduite de la mission reste dans D3 : **ne pas ajouter un nouveau moteur de règles, d'autorisation, de workflow, d'effets ni de preuve.** Les adaptateurs du catalogue `CAPABILITY_CONTRACTS` seront des liens vers les vrais propriétaires, pas des permissions déléguées au modèle.

### 3.2. Enveloppe logique candidate

| Champ logique | Type / règle attendue |
| --- | --- |
| `schemaVersion` | Version explicite contrôlée par le serveur ; format inconnu = échec sûr |
| `status` | `QUALIFIED`, `NEEDS_CLARIFICATION` ou `UNAVAILABLE` ; `UNKNOWN` côté transport quand le fournisseur n'est pas déterminable |
| `goal` | Résultat recherché, texte borné ; ni décision ni preuve |
| `intents[]` | 0..N intentions individualisées, avec IDs locaux au tour et ordre/dépendances explicites |
| `intents[].capabilityId` | Référence typée au catalogue exposé pour le contexte ; `unknown`/capacité absente = clarification/indisponible |
| `intents[].mode` | `EXPLAIN`, `EXPLORE`, `PREPARE`, `REQUEST_EFFECT` — information ≠ mutation |
| `intents[].parameters` | Arguments typés + provenance/contextualisation ; interdiction de fabriquer une cible par défaut |
| `intents[].constraints` | Exclusions, conditions et restrictions applicables à chaque opération |
| `intents[].dependsOn[]` | Références de dépendance validées, sans cycle ou étape fantôme |
| `intents[].sourceEvidence` | Références facultatives à segments du message authentifié ; auditabilité, **pas preuve autonome d'autorisation** |
| `clarifications[]` | Questions nécessaires à une décision non sûre ou à une cible incertaine |
| `replyDraft` | Texte cognitif pour le Pilote, **sans déclaration d'effets non encore constatés** |

**Identité non fournie par le modèle :** `pilotId`, `preparationId`, `projectId`, `userMessageId`, `clientTurnKey`, empreinte, `ownerToken` et permissions sont fixés exclusivement par Studio à partir de la session et du command journal existants.

Les champs et noms exacts ci-dessus sont candidats. À valider au regard des types existants et du SDK avant d'adopter une API publique.

### 3.3. Validation de sortie

Le serveur refuse une sortie qui :
- viole le schéma, les enums, les bornes ou les limites de taille ;
- désigne une capacité non présente dans le catalogue effectif du contexte ;
- désigne un objet inexistant, non possédé ou à résolution multiple ;
- présente une intention `EXPLAIN`/`EXPLORE` comme action effective ;
- omet une restriction ou expose une contradiction non levée ;
- associe des dépendances invalides ou cycliques ;
- tente de prendre une identité, une autorisation ou un résultat sur déclaration du modèle.

La validation structurelle **n'est pas** un second classificateur de synonymes. Le contrat d'autorité continue à relever de la commande source et du domaine propriétaire ; une erreur de qualification doit aboutir à une clarification ou une non-exécution.

### 3.4. Une conduite cognitive, non un double routeur

**Orientation validée en contenu — faisabilité à confirmer sur SDK épinglé :** réutiliser l'agent Nora existant avec une sortie structurée `outputType` + Zod en premier choix, ou un outil D3 **non mutatif** si la version/les contraintes de streaming le justifient ; dans le même tour logique, Nora produit la réponse cognitive. Aucune opération propriétaire n'est exécutée par l'outil d'émission.

Les alternatives `tool call` structuré et `structured output` doivent être vérifiées avec l'API Agents SDK réellement installée : compatibilité avec streaming, outils de lecture, `finalOutput`, interruption et traçabilité. Choisir la solution minimale viable démontrée, sans multiplier les appels au modèle par défaut.

**Point de vigilance :** le streaming provisoire ne doit pas annoncer une mutation avant le résultat propriétaire ; la restitution terminale doit combiner contenu utile et vérité des effets.

## 4. Ordre de traitement du tour — modification structurante ciblée

### 4.1. Pipeline cible (candidat)

1. Authentifier et autoriser le contexte. Réserver le tour et persister le message utilisateur avec sa clé stable.
2. Réconcilier les effets antérieurs nécessaires à la sécurité du contexte ; aucun effet nouveau avant de connaître les pending bloquants.
3. Construire le contexte sourcé (messages, états, connaissances, décisions applicables, capacités autorisées), avec les budgets/allowlists déterminés par la politique serveur et non par synonymes.
4. Exécuter la qualification cognitive Nora et valider son enveloppe ; conserver la preuve de génération ou son incertitude.
5. **Avant tout dispatch d'effet**, vérifier ownership du tour, cohérence des pending, restrictions explicites, cibles, droits, commandes admissibles et dépendances.
6. Pour chaque opération admise, appeler **le propriétaire existant** : confirmation de l'acte Pilote quand requise ; créer/réviser/préparer seulement dans la portée autorisée.
7. Mettre à jour une projection de mission corrélée aux résultats propriétaires, sans inventer d'état D2/D4/D6/D9.
8. Réconcilier le résultat durable, reprendre les seules étapes déjà autorisées et restituer les effets réellement observés à Nora puis à l'interface.
9. Conserver statut final, références, idempotence et preuve de reprise ; ne jamais transformer une erreur inconnue en succès.

### 4.2. Point critique D5/D6

Le code candidat exécute aujourd'hui `applyConversationalAuthority` **avant** l'appel fournisseur. Pour que Nora soit le qualificateur canonique, ce dispatch doit être déplacé après qualification **sans perdre** :

- la provenance `USER_MESSAGE` et la vérification du message appartenant au Pilote ;
- la distinction entre expression humaine admissible et affirmation du modèle ;
- le contrôle des restrictions, révisions, cibles exactes et états propriétaires ;
- la reprise/idempotence des commandes déjà exécutées avant une panne ;
- la capacité de Nora à lire le résultat D5/D6 réel et non un effet supposé.

La vérification D5/D6 **ne doit pas recréer un détecteur lexical de GO**. Le contrat propriétaire déterminera si un acte exprimé en langage naturel et lié au message authentifié est suffisant pour l'opération, ou si une confirmation indépendante est requise. Aucune confirmation générale artificielle ni retrait de protection décidé par inertie.

**Principe Morris validé :** la qualification n'est jamais autorisation. **Réserve à lever avant code** : qualifier pour chaque type d'acte l'interface exacte entre `authorizationClaim` sémantique et preuve admissible de l'acte humain. Une sortie de modèle seule ne constitue pas une preuve d'autorité.

## 5. Commandes, persistance et reprise

- **Tour :** réutiliser `conversation_turn_commands`, `clientTurnKey`, fingerprint, lease, `ownerToken` et `resultJson` selon leurs contrats vérifiés.
- **Qualification durable :** associer sans ambiguïté l'enveloppe validée, sa version, le message source et le tour **avant la première mutation**, afin qu'une reprise ne requalifie pas librement une même commande avec des opérations différentes.
- **État DB :** vérifier si les objets existants permettent de conserver ce résultat avant dispatch. **Aucun choix de migration validé** ; si stockage additionnel indispensable, STOP et nouveau gate Morris sur schéma et blast radius.
- **Idempotence :** conserver `createProjectCommands`, clés D2/D4/mission, `business_commands`, identifiants des étapes et `effect_attempts` ; aucune duplication en cas de réémission/reconnexion.
- **Effet connu :** relire l'état du propriétaire avant continuation ; si `UNKNOWN`, réconcilier sans répéter aveuglément la mutation.
- **Pending côté client :** remplacer `qualifyThreadTurn` par une décision propriétaire côté serveur, corrélée à la qualification D3 ; le client conserve uniquement protections UX et identifiants sans interpréter le texte. Une question effectivement indépendante peut être admise, mais jamais en contournant une commande non résolue.
- **Défaillance Nora :** refus/attente/clarification et restitution honnête ; pas de fallback `PROJECT_CREATE_RE` ni classeur lexical de secours.

## 6. Catalogues, politiques cognitives et connaissance

### 6.1. Capacités

Réutiliser les contrats et adaptateurs des propriétaires D2/D4/D5/D6/D7/D9 effectivement construits. Chaque entrée nécessaire précise : `capabilityId`, propriétaire, paramétrage typé, état d'implémentation, préconditions, droits/acte humain, résultats, reprise et observabilité.

Le catalogue transmis à Nora est une **description des possibilités**, pas une autorisation en soi. **Jamais** d'invocation d'une capacité fictive `future.example_capability` sur un chemin réel.

### 6.2. Outils D3 et politique

Décorréler les droits et outils de lecture des mots-clés de l'utilisateur. Le serveur expose un ensemble borné par la session, le projet, la lane, la politique cognitive et les droits réellement disponibles ; Nora choisit ensuite sémantiquement les outils utiles, selon budgets, portée et besoin.

La sélection de profil/effort ne doit plus dépendre principalement de `qualifyCognitiveProfile` lexical. Les budgets peuvent rester déterministes, proportionnés au contexte et au risque ; la justification et la compatibilité avec le fournisseur doivent être établies avant code.

### 6.3. Connaissance D4 et décisions D6

Remplacer les heuristiques lexicales **en tant que qualification ou sélection principale** par une pertinence contextuelle appréciée par Nora, avec sources/révisions visibles et filtres d'accès D4. Ne pas créer un index vectoriel ou un système de mémoire concurrent sans besoin mesuré.

Séparer la **confrontation cognitive** de décisions, qui peut être sémantique, de la **validité opposable** des HumanDecisions, qui relève des registres et règles D6. Les rapprochements lexicaux existants ne doivent pas subsister comme arbitres sémantiques cachés.

## 7. Suppressions de code attendues — contrôle de sortie

**Éliminer les routeurs lexicaux métier opérationnels**, et leurs dépendances devenues inutiles, notamment les familles de fonctions suivantes après remplacement :
- `qualifyStudioIntent`, `PROJECT_CREATE_RE`, `FOLLOWON_DOC_RE` et dérivés de détection d'action ;
- `qualifyDocumentAct` et listes de verbes/marqueurs de CREATE/REVISE comme autorité interprétative ;
- `qualifyPublicationMission` / `PUBLISH_ACTION_RE` en tant que détecteur principal ;
- `qualifyPilotageIntent`, `PHRASES` et détections lexicales d'actes D5/D6 ;
- `qualifyThreadTurn` et marqueurs d'effet/dialogue utilisés pour gouverner le pending ;
- `qualifyCognitiveProfile` en tant que routeur lexical de profil/outil ;
- capitalisation et sélection `lexical-heuristic` lorsque leur rôle est la qualification cognitive principale ;
- rapprochements linguistiques D6, après distinction de leur rôle d'analyse et de la validité métier.

**Préserver** : parsing `sfia-document` et Markdown, validations d'IDs/SHAs/paths, types, permissions, contrôles d'état, contrats D2/D4/D5/D6/D7/D9, protections contre prompt injection, idempotence, reprise et preuves. Renommer un vieux routeur ou conserver un fallback désactivable **n'est pas une suppression satisfaisante**.

La preuve finale doit fournir un inventaire **avant/après de tous les appels et fichiers pertinents**, avec revue des tests de l'ancien comportement et preuves de suppression. Les fonctions de test fixture sont distinctes des routes de production et ne doivent jamais se faire passer pour des tests LIVE.

## 8. Critères d'acceptation et preuves

| Famille | Oracle obligatoire |
| --- | --- |
| Langage naturel | « créer », « démarrer », « lancer », « initier », « commencer » et paraphrases libres correctement interprétés selon contexte |
| Négations | « ne souhaite pas », « ne veux pas », « n'autorise pas », « sans créer », interdictions indirectes : **zéro effet/preview/mission indu** |
| Questions / citations | Description d'une action, exemple, simulation ou citation ≠ commande |
| Intentions multiples | D2 puis D4, D5 puis D4, question suivie d'un ordre positif indépendant ; dépendances correctes |
| Cibles/autorité | Aucun projet étranger, décision non désignée, droit manquant ou Git non autorisé ; confirmation humaine quand due |
| Connaissance/outils | Sélection pertinente sous reformulation ; accès uniquement aux ressources autorisées |
| Continuité | Reprise après ACK perdu, fournisseur UNKNOWN, collision, interdiction levée ou révocation |
| Observation | Prose Nora sans diagnostics ; états et références structurés conformes aux propriétaires |
| Multilingue | Corpus FR + langues représentatives ; la langue ne doit pas créer une nouvelle liste de verbes codée en dur |
| Suppression | Aucun classificateur lexical métier résiduel sur les chemins d'effet ; aucun fallback silencieux |

**Cas central à retester** : le message complet **Intervencia** tel qu'envoyé dans S02-01. La dernière phrase isolée ne suffit pas. Les ressources D2/D4 et la révision d'aperçu doivent rester inchangées en l'absence d'autorisation.

**Niveaux requis :** UNIT de validation de schéma et des frontières ; PG d'effet/absence d'effet, idempotence et persistance ; E2E navigateur ; **Nora LIVE** avec corrélation de build/lane/profil et vérification des outils ; contrôle statique de retrait ; qualité du corpus documentée. Les métriques et seuils chiffrés de pertinence, latence et coût restent à calibrer et à soumettre à Morris avant sortie.

**Règle de sécurité candidate : zéro mutation non autorisée dans la suite de négatifs de référence** ; une ambiguïté admise comme clarification ne doit jamais devenir un effet.

## 9. Documentation, livraison et gates

**Documentation avant Cursor :** conserver la décision du 12/11 et la conception fonctionnelle validée ; faire valider le présent contrat technique. Les documents R1/R2 cohérents gardent leur texte historique.

**Documentation pendant Cursor :** mettre à jour dans le même macro-lot la source d'architecture Next, les contrats R2 concernés selon leur autorité, le code commenté utile, les schémas/API, les tests et oracles remplacés, la documentation `as-built`, `construction/delivery-history.md`, ainsi que le cahier/journal ML4C et la roadmap après observation/gate. L'écart code/docs persistant est **KNOWN GAP**.

**Gates successifs :**
1. Morris valide les choix techniques et risques structurants ; autorisation Git adaptée aux documents normatifs.
2. GO d'exécution Cursor **distinct** et borné selon routing/template SFIA v2.6 Git applicable, après pré-check complet.
3. Review Pack FULL + handoff distant ; revue ChatGPT et preuves vérifiées.
4. Décision Morris de mise à disposition candidat RECETTE, re-recette S02-01 et scénarios transverses, puis gates d'intégration/promotion distincts.

**Pas de contrat Cursor généré à partir de ce dossier candidat.** Le correctif local antérieur demeure en attente de réconciliation, non adopté.

## 10. Arbitrages techniques à valider avec Morris

| Point | Proposition | Vérification / décision manquante |
| --- | --- | --- |
| **T-01 Sortie Nora** | **VALIDÉ EN PRINCIPE** : qualification canonique structurée dans la même conduite, `outputType` + Zod privilégié | Compatibilité/runtime **`@openai/agents@0.21.0`** : `finalOutput`, streaming, tool calling, outils de lecture et absence de fuite du JSON à vérifier avant choix d'API final |
| **T-02 Autorité D5/D6** | **VALIDÉ EN PRINCIPE** : qualification D3 d'abord ; preuve d'acte humain reliée au message USER authentifié et validée par propriétaire | Typologie des actes autorisés, détermination exacte de la cible et confirmation indépendante si due ; aucun GO dérivé du seul LLM |
| **T-03 Persistance** | **VALIDÉ EN PRINCIPE** : qualification stable et durable **avant dispatch** ; reprise sur cette même qualification | Vérifier journal/atomicité actuelle ; **STOP et arbitrage DB/architecture si migration requise**, aucune migration préautorisée |
| **T-04 Pending** | Arbitrage de coexistence au serveur sur qualification sémantique réutilisée | Contrat exact de concurrence/latence et interface UI, sans bypass |
| **T-05 Budget/outils** | Outils bornés par politiques/droits, sélection utile par Nora | Budget, coût, latence, disponibilité et stratégie de continuation à mesurer |
| **T-06 Documentation** | Synchronisation R2/architecture/as-built/tests/recette dans le même delivery | Liste finale de fichiers normatifs soumis à autorisation et preuves de suppression |
| **T-07 Exit LIVE** | Corpus multi-intention et multilingue + aucune mutation sur interdictions | Seuils d'évaluation, échantillonnage, build/lane et protocole à valider |

**Verdict : CONTRAT TECHNIQUE VALIDATED IN CONTENT BY MORRIS — AVEC RÉSERVES D'EXÉCUTABILITÉ / NO BUILD GO / NO PR / NO MERGE / NO ADOPTED.**
