# SFIA Studio Next — R5 / ML1 — Spécification technique candidate

> **Lecture courante — revue de préclôture du 2026-11-04 :** les §§1–13 sont des états de conception historiques, et le §14 une photographie de travail DEV **antérieure aux deux derniers commits correctifs**. Le §15 ci-dessous qualifie l'**As-Built constaté sur Git** après PR #649. **Clôture ML1 validée par Morris avec réserves le 2026-11-04** ; cette lecture documentaire ne vaut ni nouveau test LIVE, ni smoke post-merge, ni STABLE/RELEASE/ADOPTED.

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.

## Entrer, dialoguer et créer un projet avec continuité

| Champ | Qualification |
|---|---|
| Version | **v0.3 — proposition technique groupée après revue (2026-11-04)** |
| Nature | **D0 / conception technique candidate révisée après revue de cohérence R2–R4** ; pas une exécution, pas un prompt Cursor |
| Statut | **DOCUMENTED / REVIEWED CANDIDATE WITH OPEN DECISIONS / NOT VALIDATED SPEC / NOT IMPLEMENTED** |
| GO constaté | Morris autorise la consolidation documentaire R5 et la préparation de la spécification ML1 ; **aucune autorisation de code, PR, merge ou promotion** n'en découle ; la publication documentaire candidate est autorisée séparément le 2026-11-04 |
| Dépôt | `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; PR #646 `MERGED` ; local/worktrees **NON OBSERVÉS** |
| Référentiel de delivery | [`../reference-delivery-r5.md`](../reference-delivery-r5.md) — référence de préparation R5 candidate |
| Traçabilité | [matrice ML1](matrice-tracabilite.md) et [inventaire R2](inventaire-r2.csv) |
| Runtime Next | **N/A — NON IMPLÉMENTÉ** ; zéro test Next exécuté, zéro preuve BROWSER/LIVE/REAL |

> **Règle de lecture** — Les sections « **INVARIANT VALIDÉ** » restituent les contraintes des sources R1–R4 et de leurs décisions. Les sections « **PROPOSITION TECHNIQUE R5** » décrivent une solution candidate à discuter au bon niveau avant qu'elle devienne une spécification approuvée. Les **questions ouvertes** ne sont pas des détails autorisés à improviser dans Cursor. Aucun nom d'API, nom de table ou état technique proposé ci-dessous n'est une décision d'implémentation déjà adoptée.

## 1. Résultat utilisateur, frontière et définition de terminé

**Résultat produit attendu** : un Pilote s'authentifie, consulte son portefeuille personnel, ouvre un sas, travaille utilement avec Nora sans projet/cycle/dépôt préexistant, retrouve son travail après interruption, décide explicitement de créer le projet, puis continue le **même fil visible**, avec documents et acquis réellement conservés et sans création ou transfert fictif.

**E2E propriétaire :** [R1 §2.30 — E2E 01 sas→projet](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/cadrage/vision-produit.md). Interfaces : E2E 03 (Nora utile), E2E 04 (continuité), E2E 07 (droits sur sources), sans prétendre réaliser entièrement ces trois E2E dans ML1.

**IN ML1** :

- Identité Studio/session et isolation de deux Pilotes ; portefeuille non conversationnel, navigation vers un projet existant et accès au sas ; pas de permission Git déduite de la connexion.
- Préparation persistée et récupérable avant création ; messages utiles, aperçu de projet propositionnel ; acte explicite de création et résultat vérifié.
- Conversation Nora effectivement utilisable sans cycle ni méthode obligatoire ; contexte du bon propriétaire, provenance et limites exposées.
- Création de projet avec unicité, transaction, relecture après perte d'accusé, erreurs/refus, lien durable à la préparation ; transition du fil avec marqueur vrai.
- **Premier document produit dans le sas**, avec identité et état de conservation honnêtes. Le modèle d'identité/version doit permettre ML2, mais **pas** la bibliothèque documentaire et la révision avancée complètes.
- Fondations opérationnelles nécessaires à une première verticale utilisable : PostgreSQL, migrations, secrets et DEV/RECETTE isolés ; STABLE seulement après décision distincte selon ENV-01.
- Tests et preuves de ML1 pendant sa construction, y compris les cas négatifs de R4 QA A01–A16 et la conformité R3 sur les surfaces réellement livrées.

**OUT ML1 — frontières positives à préserver** :

- Gestion détaillée des sujets/connaissances et révision documentaire complète (**ML2**) ; cycle, CKI actif, méthode/trajectoire et décision gouvernée complète (**ML3**) ; intégration Git complète (**ML4**) ; contrat d'exécution/dispatch Cursor, preuves D8 et acceptation finale (**ML5**).
- Suppression/transfert/partage d'un projet : non défini comme fonction de navigation par `RG-ACC-024` ; ne pas créer une capacité implicite.
- Tout effecteur externe initié par du texte Nora ou une simple navigation ; pas d'ouverture automatique de cycle, dépôt ou tentative.

**Condition de complétude ML1** : l'E2E 01 doit être réellement démontré en RECETTE sur un SHA figé avec autorité correcte, DB PostgreSQL, parcours navigateur, reprise après coupure et non-duplication. Le verdict reste borné aux fonctions et dépendances réellement qualifiées ; R6 et ADOPTED restent distincts.

## 2. Références canoniques et couverture

| Axe | Sources propriétaires ; portée concrète |
|---|---|
| R1 | `cadrage/vision-produit.md` §2.30 (E2E 01) + interfaces §§2.32, 2.33, 2.36 et addendum §2.41. |
| R2 D1 | `conception-fonctionnelle/acces-et-portefeuille.md`, **25 `RG-ACC-001..025` et 24 `PF-ACC-01..24`** inventoriés : couverture ML1 ou frontière négative/interface. |
| R2 D2 | `conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md`, **27 `RG-CRE-001..027` et 27 `PF-CRE-01..27`**, dont le complément documentaire du sas `CRE-027`. |
| R2 D3/D4 | D3 `RG-CONV-001..006`, `RG-CTX-001..008`, `RG-AUTH-001`, `RG-UX-*` pertinents ; D4 `RG-KNOW-002/006/011/014/015/016..020`, PF de reprise. Pas d'appropriation complète de D3/D4 par ML1. |
| R3 | `ux-ui/espace-projet-interaction-pilote-nora.md`, `contrat-transposition-figma-code.md`, manifeste `index-geometrie-frames-r3.json` ; Figma `fileKey=itgvCulInEnFY6DvgIegvP`, page 01 `94:49` ; voir §6. |
| R4 | `architecture-technique/cadrage-r4.md` §§5.3.3–5.3.9 et §8.1 ; décision ADR **R4-01/R4-02**, frontières R4-03/R4-04, politique **DATA-01**, gouvernance **ENV-01**. |
| QA | `A01..A16` du cadrage R4 §5.3.9 ; **oracles candidats non exécutés**, répartis aux fonctionnalités §7. |
| Référentiel | La matrice ML1 v0.3 détaille les liaisons R1/R2/R3/R4/QA ; le CSV vérifie les **103 identifiants D1/D2**, sans garantir 103 comportements déjà couverts. |

**Règle de couverture :** chaque fonctionnalité ci-dessous hérite des exigences identifiées ; les renvois plusieurs-à-plusieurs sont autorisés. Aucun `PF` ne devient un test PASS par la seule présence dans le tableau. Les frontières négatives ou différées sont conservées avec propriétaire et exit.

## 3. Architecture de la capacité — décisions acquises et propositions

### 3.1. Frontières fonctionnelles et propriétaires

**INVARIANTS VALIDÉS R4 :** application neuve **modulaire**, un propriétaire de vérité par objet/effet ; **préparation durable indépendante du projet**, rattachement transactionnel lors de la création explicite ; **PostgreSQL** dès le premier incrément R5 ; pas de base concurrente pour la vérité transactionnelle du produit ; aucun effet externe autorisé par Nora seule ; Git facultatif.

| Responsabilité | Domaine propriétaire | Contrat ML1 | Interdiction |
|---|---|---|---|
| Identité, session et portfolio | D1 | Résoudre un Pilote et une session valides ; lire seulement ses projets et préparations | Pas de token de dépôt ou de HumanDecision déduit de l'authentification |
| Préparation et création | D2 | Accepter, versionner, créer et rattacher une préparation au projet du même Pilote | Pas de projet créé par une réponse Nora, une lecture ou un clic non dédié |
| Conversation, messages, activité cognitive et contexte | **D3** | Produire et conserver durablement les messages et leur statut ; composer le contexte du bon sas/projet avec contrôle d'accès | Pas de délégation de propriété des messages à D4 ni de second moteur d'autorité |
| Documents, connaissance, acquis et provenance | **D4** | Posséder l'identité/version des ressources documentaires et la connaissance durable ; fournir des références/provenances à D3 | Pas de copie de la vérité de conversation ou de déclaration de sauvegarde fictive |
| Décisions humaines et cycles | D6 / D5 | Interfaces de non-effet et refus si action hors ML1 | Aucune création implicite de GO, mandat, cycle ou méthode |
| Git/exécution | D9 / D7 / D8 | Interfaces hors portée, aucune dépendance de démarrage | Pas de création de dépôt, commande Cursor ni preuve d'effet inventée |

**PROPOSITION TECHNIQUE R5** : implémenter ces frontières comme des **modules logiques d'une seule application web**, raccordés à un noyau transactionnel PostgreSQL et à des adaptateurs pour les services externes éventuellement utilisés. Il ne s'agit pas d'un microservice par domaine. La **stack web, l'ORM, la bibliothèque d'authentification, le protocole agent et l'outil de migration ne sont pas choisis par R4** : leur sélection technique est à instruire dans ML1, sans copier ceux de l'ancien Studio par inertie.

### 3.2. Flux nominal et synchronisation

```mermaid
flowchart TD
    A[Session Pilote valide] --> B[Portefeuille personnel]
    B --> C[Préparation durable sans projet]
    C --> D[Conversation avec Nora et documents]
    D --> E{Acte Créer le projet ?}
    E -- Non --> C
    E -- Oui --> F[Contrôle identité version et unicité]
    F --> G{Transaction confirmée ?}
    G -- Oui --> H[Projet lié à la préparation]
    H --> I[Même fil visible avec marqueur vrai]
    G -- Non ou inconnu --> J[Conserver le sas et réconcilier]
```

**À garantir** : chaque transition UI repose sur la lecture du propriétaire de l'état, pas sur un message d'IA ou l'optimisme client ; les données et opérations non couvertes par la transaction conservent leurs états réels.

## 4. Spécifications techniques par fonctionnalité

### 4.1. Identité Studio et session — `ML1-IDENTITY`

**R2 :** `RG-ACC-001..007`, `RG-ACC-015/021`, `PF-ACC-01..04`, `PF-ACC-10/13/17/24` et `RG-CRE-009`. **QA :** `A10`, plus sécurité négative dans `A01/A03/A14`.

**Comportement contractuel :** un Pilote connecté a une identité interne stable ; une session expirée/révoquée ne lui permet ni lecture privée ni création ; deux comptes utilisant éventuellement un dépôt commun voient des préparations et projets disjoints. Les droits de dépôt Git ne sont jamais inférés de la simple connexion Studio. Une identité ne devient pas un acte d'autorité D6.

**Proposition technique à évaluer** :

- Utiliser une connexion GitHub personnelle **pour l'identité Studio**, avec un mécanisme de session serveur et une identité interne immuable ; choisir au lot les modalités concrètes de validation, stockage/rotation des sessions et de révocation, sous les garanties R2/ENV-01.
- Associer les ressources persistantes à l'ID interne du Pilote, pas au nom d'affichage ni à un identifiant de dépôt. Toute requête/commande protégée revalide session et propriété côté serveur ; contrôles répétés après changement de session.
- Une session web contient au plus les références nécessaires à la vérification et ne constitue pas le registre de projet ni la vérité du sas. Exclure de la réponse client et des journaux les secrets d'authentification.

**Erreurs / observations** : session invalide → refus et reconnexion ; propriétaire différent → refus sans fuite d'existence ; authentification externe indisponible → impossibilité d'effectuer la commande protégée, sans emprunter des credentials d'une autre lane. **Tests de construction** : deux comptes, session expirée, réutilisation d'URL, requête forgeable, droits retirés, absence d'accès au projet tiers.

**Décision ouverte de lot** : méthode d'identité/session concrète et persistance des sessions. **Aucun changement d'architecture R4 n'est requis tant que l'isolation, la révocation et l'indépendance Git sont démontrées.**

### 4.2. Portefeuille et navigation — `ML1-PORTFOLIO` / `ML1-SAS-ENTRY`

**R2 :** `RG-ACC-008..014/016..018/020/022..025`, `PF-ACC-05/07..09/11..15/20/21`. **QA :** `A01`, `A12`, `A14`, `A15`.

**Contrats de lecture** : l'API de portefeuille — forme à choisir — récupère les **projets effectivement persistés appartenant à la session courante**, leurs statuts s'ils sont connus, et les liens utiles pour retrouver les préparations non créées. Le cockpit ne possède **pas** de Nora globale ni de cycle créé par navigation. Une route périmée ne fabrique ni fiche projet ni réponse rassurante fictive.

**Contrats d'état UI** : connecté/sans projet/plusieurs projets/session expirée/liste indisponible/projet supprimé ou inaccessible ; lorsqu'une donnée de progression n'est pas connue, ne pas produire une valeur de secours. Un titre projet homonyme n'est jamais un identifiant. Toute carte/aperçu respecte le même filtre d'accès que l'ouverture détaillée.

**Hors portée explicite** : supprimer, transférer ou partager un projet. Le contrôle négatif doit vérifier qu'aucune action sensible n'est autorisée par la navigation.

**Proposition technique** : query backend dédiée, pagination/recherche seulement si nécessaire au cas réel ; gestion d'URL/version de route indépendante de la session cognitive ; contrôle de permissions à chaque ouverture. Ne pas installer une couche de recherche ou un cache autorisant si PostgreSQL suffit à la première verticale.

### 4.3. Préparation durable et conversation initiale — `ML1-SAS-DURABLE` / `ML1-NORA-PREVIEW`

**R2 :** `RG-CRE-001..007/015/016/019/022/023/026`, `PF-CRE-01..06/13/17/20/21/23/26`, `RG-CONV-001..006`, `RG-CTX-001..008`, D4 `RG-KNOW-002/006/011/014/015`. **QA :** `A01`, `A02`, `A06`, `A11`, `A13`, `A16`.

**Invariants** :

- Préparation persistée, personnelle, **sans projet obligatoire**. Navigation, abandon ou déconnexion ne convertissent pas la préparation en projet.
- Nora peut investiguer, produire et proposer un aperçu utile **sans** formulaire exhaustif, ouverture de cycle ni méthode imposée. Un nom, une trajectoire ou un résumé proposé restent des propositions non autorisantes.
- **D3 conserve la vérité des conversations/messages** (ordre, statut, corrélation de génération, lien au sas/projet). **D4 conserve la vérité des documents et connaissances** (identité de ressource/version, source, provenance, état des octets). Les deux partagent la transaction PostgreSQL lorsque nécessaire, sans double propriétaire. Le modèle consomme une **sélection** de contexte ; le fil visible n'exige pas la réinjection du transcript entier.
- Source externe non disponible/révoquée : ne pas reconstituer ses données, permissions ou faits ; les métadonnées de provenance restent bornées à ce qui est légitime.

**Proposition technique d'interface** (noms conceptuels uniquement) :

| Opération logique | Entrées minimales | Sortie / garantie | Échecs à prévoir |
|---|---|---|---|
| Ouvrir/reprendre préparation | identité, `preparationId?` | préparation existante ou nouvelle identité durable, aucun Project | `FORBIDDEN`, `NOT_FOUND`, `UNAVAILABLE` |
| Ajouter un message utilisateur | `preparationId`, contenu, version ou clé de requête | message accepté avec identité/ordre/état de persistance | session perdue, collision, rejet, ACK perdu |
| Demander une réponse Nora | conversation courante, contexte autorisé, limites et ressources disponibles | réponse reliée à son message et au bon contexte, événements réellement connus | fournisseur indisponible, interruption, sortie partielle |
| Consulter l'aperçu | préparation et sa version actuelle | représentation propositionnelle et sa provenance | version obsolète, champs manquants |

**Contrat d'intégration cognitive minimal recommandé (candidat R5)** :

1. L'entrée utilisateur obtient une identité et un état de persistance D3 **avant** l'appel au fournisseur ; une clé de requête évite la duplication au renouvellement du transport.
2. Un identifiant de génération corrèle fournisseur, conversation, message produit et éventuelles sorties partielles. Les fragments affichés pendant le streaming sont **provisoires** tant que leur état durable n'est pas confirmé.
3. Une réponse terminée est enregistrée comme telle uniquement après confirmation de sa conservation ; interruption, timeout et sortie perdue restent `PARTIAL`, `FAILED` ou `UNKNOWN` selon observation. **Pas de relance automatique du fournisseur après ACK perdu** sans stratégie vérifiable de déduplication.
4. Une demande suivante récupère une sélection de messages D3 et d'acquis D4 **sous les droits actuels**, sans seconde base propriétaire de mémoire ni transformation d'une citation en autorisation.
5. Aucun outil exposé à Nora dans ML1 ne peut appeler la commande D2 `CréerProjet`, créer un cycle, une ressource Git ou déclencher Cursor.

**À arrêter avant code**, dans le contrat d'exécution du lot : fournisseur/API/SDK, contrat des événements de streaming, stratégie d'annulation effectivement supportée, budgets/erreurs et politique de conservation des sorties. Une vraie conversation Nora devra être observée en RECETTE ; un stub seul ne suffit pas à déclarer E2E 01 complet.

**Reprise réelle** : après reload, nouvelle conversation ou redémarrage serveur, relire la préparation/messages/ressources persistés ; afficher ce qui est sauvé et les limites du reste. L'absence de fournisseur Nora ne doit pas détruire le sas ou la conversation déjà enregistrée.

### 4.4. Création explicite et transactionnelle — `ML1-CREATE`

**R2 :** `RG-CRE-008..014/016/020/024/025`, `PF-CRE-07..12/14/16/24/25`, `RG-ACC-002/005`, ADR R4-02 ; **QA :** `A03`, `A04`, `A05`, `A06`, `A10`, `A12`, `A15`.

**INVARIANTS VALIDÉS** : l'acte « Créer le projet » est dédié, imputable au Pilote et distinct d'un accord conversationnel. Projet et association à la préparation ont un **point de validation transactionnel commun**. Une préparation ne fonde pas deux projets du même acte intentionnel ; un double clic ou une réponse perdue doit retrouver le résultat existant ou exposer une incertitude vraie, jamais fabriquer un doublon ou annoncer un succès sans constat. Pas de cycle, mandat ou dépôt Git créé à cet effet.

**PROPOSITION TECHNIQUE R5 — contrat logique de commande** :

```text
CréerProjet (nom illustratif, API/route NON DÉCIDÉES)
  acteur : identité Studio relue côté serveur
  contexte : preparationId
  contrôle : expectedCreationRevision de l'aperçu inspecté (non la révision de chaque message)
  opération : idempotencyKey stable + empreinte canonique des données approuvées
  données approuvées : informations minimales du projet affichées au Pilote

Résultat logique proposé :
  CREATED(projectRef, preparationRef, committedAt)
  ALREADY_CREATED(projectRef, preparationRef)
  CONFLICT(actualPreparationRevision)
  FORBIDDEN / SESSION_INVALID / INVALID_REQUEST
  NOT_CONFIRMED_OR_UNKNOWN (avant une réconciliation fiable)
```

**Séquence transactionnelle candidate** :

1. Vérifier côté serveur la session, la propriété de la préparation et la provenance de la **commande dédiée** (aucun outil Nora ne possède cette capacité) ; protéger la mutation contre CSRF et rejeu selon le mode de session retenu. Une indication client « bouton cliqué » ne suffit pas comme preuve.
2. Chercher d'abord le **résultat durable de la même clé d'idempotence** dans son contexte : si l'empreinte est identique, retourner le résultat déjà committé ; si elle diffère, répondre `CONFLICT`. Cette recherche précède le refus de version devenue obsolète pour qu'un replay après commit reste idempotent.
3. À défaut d'opération antérieure, vérifier `expectedCreationRevision` contre la version des **champs de création effectivement inspectés** — pas chaque message — et les informations minimales approuvées.
4. Dans **une transaction PostgreSQL**, vérifier l'unicité réelle par préparation, insérer le projet et son owner, enregistrer le lien préparation→projet, la clé/empreinte et le résultat de commande ; assurer les contraintes SQL même face à deux requêtes simultanées.
5. Confirmer puis relire l'état durable pour afficher `CREATED`/`ALREADY_CREATED`. La relecture de réconciliation est **sans effet** ; si l'existence reste invérifiable, conserver `UNKNOWN`, sans seconde création automatique ni faux marqueur.
6. Garantir que l'horizon de conservation de la déduplication couvre effectivement la durée pendant laquelle la même préparation peut être réutilisée : une expiration arbitraire de clé ne doit jamais rouvrir la possibilité d'un deuxième projet.

**Contraintes d'intégrité nécessaires**, à traduire en DDL selon le modèle final : unicité effective de l'association création/préparation ; FK et propriété cohérentes ; clé d'opération dédupliquée dans son contexte ; version de préparation protégée contre écrasement concurrent ; audit expurgé de l'acte. La stratégie précise (`UNIQUE`, isolation, locks, upsert, représentation du résultat) est à choisir et **prouver avec de vraies transactions PostgreSQL**.

**Postconditions** : le projet retrouvé appartient au Pilote, l'association est stable, le portefeuille le retrouve, l'UI passe au contexte projet **uniquement si l'effet est confirmé**, le fil de préparation est toujours accessible. Une transaction ratée ne modifie pas les faits ni la vérité de l'aperçu.

**Erreurs discriminantes** : deux clics simultanés ; timeout **après** commit ; timeout **avant** commit ; version périmée ; changement de compte ; noms identiques ; ressources du sas encore `SAVING` ; suppression de session pendant l'acte.

### 4.5. Continuité du fil et réhydratation — `ML1-CONTINUITY`

**R2 :** `RG-CRE-017..024/026`, `PF-CRE-15..23/25`, D3 `RG-CTX-002/004/006`, D4 `RG-KNOW-006/011/015`. **QA :** `A05`, `A07`, `A11`, `A13`, `A16`.

**Contrat** : après création confirmée, la conversation initiale du sas reste visible et ordonnée dans l'espace projet ; un marqueur explicite précise le passage, fondé sur un fait transactionnel ; les acquis et sources conservent leur qualification, sans transformation des hypothèses en décisions ou faits. En état inconnu, rester dans le sas jusqu'à réconciliation.

**Proposition technique** : les identifiants de préparation et conversation ont une durée indépendante de l'objet Project ; le contexte projet se **résout** depuis un lien transactionnel plutôt que par duplication du transcript. L'identité technique de conversation strictement inchangée est une **solution candidate**, pas une obligation fonctionnelle R2 : c'est la **continuité du même fil visible** qui est validée. Une projection UI peut exploiter les mêmes messages et la date de création, sous contrôle d'accès courant.

**Épreuves pertinentes** : recharge serveur après commit, nouvelle session, message parti avant crash, ressource inaccessible, réouverture depuis portefeuille et ordre des messages. Distinction impérative entre message visible sauvegardé et contexte que le modèle a effectivement rechargé pour générer sa réponse.

### 4.6. Premier document du sas — `ML1-SAS-DOCUMENT`

**R2 :** `RG-CRE-027`, `PF-CRE-27`, D4 `RG-KNOW-016..020`, `RG-KNOW-006/014/015`, addendum R1 §2.41. **QA :** `A08`, `A09`, `A13`, `A16`.

**Contrat** : Nora peut produire un contenu documentaire avant l'existence d'un Project ; l'identité de ressource, son propriétaire, sa version, sa provenance et l'état d'enregistrement sont réels. Au moment de la création, la ressource devient retrouvable depuis le projet **sans** copie ou nouvelle vérité officielle. `SAVING`/`SAVED`/`FAILED`/`UNKNOWN` désignent ici des **catégories conceptuelles de véracité** reprises de R2, pas une table déjà décidée.

**Proposition technique** : métadonnées canoniques/version chez D4 ; **pour le premier document textuel ML1**, privilégier le contenu et son identité/version dans PostgreSQL pour limiter les états distribués. Une sortie vers un stockage de fichiers/objets reste **une option à motiver par volumétrie, nature des pièces et coût**, sans l'introduire seulement par héritage. Le contrat doit garder une abstraction de ressource stable pour ML2 ; confirmer séparément la réussite de chaque stockage réellement utilisé. Une écriture des octets échouée ne devient pas `SAVED` au motif que le texte figure dans Nora. L'association sas→projet ne doit pas dépendre d'une sauvegarde de document non indispensable (arbitrage R4 A et politique DATA-01).

**Ne pas construire ML2 dans ML1** : pas de gestion complète des bibliothèques, de comparaison visuelle avancée des versions ni de moteur de workflow documentaire ; seulement une identité/écriture/lecture minimale saine et extensible.

### 4.7. Obligations transversales de sécurité, données et robustesse

- **Séparation des comptes** : session serveur et vérification de propriété sur requêtes, objets et relations ; pas de fuite dans erreurs, listes, journaux, URL et éventuelle mémoire du fournisseur Nora.
- **Versions et concurrence** : audit des actes, contrôle optimistic/transactionnel approprié, idempotence sur commandes à effet, reprise sur état réellement persisté ; ne pas prétendre qu'une transaction SQL englobe les effets d'un fournisseur externe.
- **Provenance et épistémologie** : source candidate ≠ `main`, réponse Nora ≠ décision, brouillon ≠ document sauvegardé, état client ≠ vérité persistante.
- **DATA-01** : préparations sans purge automatique ; archivage non destructif après **90 jours** d'inactivité ; corbeille après suppression **30 jours** ; logs techniques non critiques **environ 14 jours** ; sauvegardes chiffrées et tests de restauration selon politique de lane. Les détails de minimisation, effacement légal, stockage de preuves et copies de sauvegarde sont des réserves à instruire lors du mécanisme réel. N'inventer ni tâche planifiée ni purge déjà en fonctionnement.
- **ENV-01** : secrets, identités de test et DSN isolés par lane ; refus explicite en cas de configuration incorrecte ; pas d'accès à STABLE par commodité. Fondations opérationnelles intégrées dans ML1, pas micro-projet d'infrastructure.

## 5. Modèle de données conceptuel et contrats d'intégrité

Ce tableau **n'est pas un DDL approuvé**. Il identifie les données dont ML1 doit garantir l'existence et la cohérence ; **noms des tables, colonnes, indices et API seront précisés au sein du lot avant leur création**.

| Concept durable | Identité et portée attendues | Invariant / mécanisme à concevoir | Propriétaire logique |
|---|---|---|---|
| Pilote Studio | ID interne stable + identité externe vérifiée | séparation de comptes, session/révocation vérifiables | D1 |
| Préparation | ID, owner, état, version, dates, données propositionnelles | existe sans projet ; durable ; archive selon DATA-01 | D2 |
| Conversation/message/génération | ID durable, owner, préparation/contexte résolus, ordre, état, corrélation fournisseur | D3 est **propriétaire unique des messages** ; aucun succès affiché depuis un fragment provisoire | **D3** |
| Projet | ID stable, owner, données minimales et dates | projet personnel et réellement enregistré ; homonymie possible | D2 avec lecture D1 |
| Association création | preparationRef↔projectRef + opération de création | transaction et contrainte d'unicité, pas de duplication de fil | D2 |
| Opération à effet | référence stable et issue observable | déduplication, statut connu/inconnu, corrélation avec acte | D2 |
| Ressource documentaire/version | ID ressource, ID version, propriétaire, provenance, état | **D4 est propriétaire** ; pas de sauvegarde fictive ni de doublon après création ; stockage de contenu réellement contrôlé | **D4** |

**Arbitrages techniques ordinaires à documenter dans le lot** : format d'identifiant, clefs étrangères et uniques, contrôle de version, comportement de la session web, protocole des réponses Nora, gestion de fichiers. **Arbitrages Morris nécessaires** si ces choix créent une seconde autorité persistante, changent le parcours fonctionnel, altèrent le modèle V-A ou affaiblissent la sécurité ; ils ne sont pas acquis par cette proposition.

## 6. Contrat UX R3 — source native consommée au moment du développement

**Sources validées** : [Figma Next](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP), page 01 `94:49` ; [contrat de transposition R3](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md) ; index version v0.3 du 2026-11-03, blob `9d75cba6560896c279712982cd56b41488209685` (**223 frames, 901 blocs de premier niveau**). Les `node-id` ci-dessous sont ceux **du snapshot Git** : les nœuds natifs restent mutables.

| Surface de ML1 | Identifiants Figma précis du snapshot | Contrat de rendu/comportement |
|---|---|---|
| Portefeuille et entrée sas | `94:50` (01), `158:264` (64), `158:336` (65), `158:912` (73) | cockpit sans Nora globale ; vide/liste/retour ; navigation bornée |
| Connexion et session | `158:120` (62), `158:192` (63), `162:241` (121) | connexion, session perdue, état en cours, aucune fuite |
| Sas et aperçu | `94:135` (02), `159:145` (74), `159:217` (75), `159:289` (76) | conversation avant création, reprise, clarification, aperçu propositionnel |
| Création et cas limites | `159:361` (77), `159:433` (78), `159:505` (79), `159:577` (80), `159:649` (81), `159:937` (85), `159:1009` (86) | en cours, effet incertain, échec, déjà créé, homonyme, refus |
| Continuité et conversation | `94:214` (03), `96:262` (13), `96:370` (14), `159:1153` (88), `161:216` (109), `161:288` (110) | même fil visible, marqueur « Projet créé » fondé sur commit, reprise |
| Document du sas | `159:721` (82), `162:457` (124) | document avant création, inspection proportionnée ; sans bibliothèque ML2 complète |
| Variantes et composition | `94:1037` (10, 1280), `238:440` (199, 1280), `238:471` (200, 390), `238:581` (204, 1280) | exemples de contenu long/compact ; variantes applicables à requalifier selon composants |
| Index R3 | `169:275` et `264:401` | **INDEX DE REVUE, PAS ÉCRAN PRODUIT À CODER** |

**Méthode retenue pour le dispositif** : **pas d'extraction préalable de tous les composants Figma**. Au moment de développer la surface concernée, **Cursor** consulte directement Figma et son contrat R3, vérifie l'accès aux propriétés natives, extrait **les seules propriétés utiles** (parenté, géométrie, auto-layout, contraintes, typographie, variables, états, actions), les consigne avec la référence et implémente des composants partagés. Une simple capture ou un nom de frame ne suffit pas à garantir la précision de transposition. **Accès natif impossible → STOP ciblé de l'UX concernée**, sans design improvisé ; les travaux indépendants peuvent continuer.

**Rail 240/246 px — réserve desktop non bloquante pendant la préparation** : frames 01/02 desktop (1680 px) : 246 px ; frame 03 desktop (1680 px) : 240 px. L'écart n'est **pas mobile**. Il est examiné **lors de l'implémentation du composant rail partagé** ; s'il provoque une contradiction contractuelle réelle, la remonter à Morris plutôt que choisir une valeur silencieusement. Le seuil d'écart de boîte `≤2px` décrit dans R3 reste candidat, pas ratifié. Aucune exclusion globale du responsive n'est décidée.

**Contrôle de fidélité** : états/variantes applicables, captures runtime aux viewports de référence, mesures et différences, clavier/focus/zoom, reflow et long contenu selon R3 ; lien à la version de code et à la version Figma consultées. Une capture n'établit **ni** la transaction DB, **ni** la véracité des données, **ni** la qualité cognitive Nora.

## 7. Contrat QA — oracles maintenant, scripts exécutables avec le runtime

Les **16 scénarios QA `A01–A16`** appartiennent au cadrage R4 §5.3.9. Les références détaillées sont dans la **matrice ML1 v0.3** ; ici, la traduction en responsabilités et en **preuves attendues**. Aucun test n'est encore écrit ou exécuté.

| QA | Vérification attendue (oracle) | Fonctionnalités ML1 | Niveau de preuve à préparer **pendant la construction** |
|---|---|---|---|
| A01 | Sas sans projet et sans Git | préparation, portefeuille | DB réelle + BROWSER |
| A02 | Nora utile avant projet sans cycle/méthode | Nora, préparation | BROWSER + **au moins une interaction Nora LIVE réelle pour un verdict ML1 complet** ; sinon réserve explicite |
| A03 | Seul l'acte dédié crée | création | intégration + BROWSER positif/négatif |
| A04 | Deux clics simultanés, un projet | création | concurrence PostgreSQL réelle |
| A05 | ACK perdu après commit : même projet retrouvé | création | injection de panne / restart / DB |
| A06 | Version de préparation obsolète refusée sans perte de contexte | création, aperçu | concurrence + BROWSER |
| A07 | Même fil, marqueur vrai, reload | continuité | BROWSER + DB |
| A08 | Brouillon avant/après création sans copie fictive | document sas, continuité | DB + BROWSER |
| A09 | `SAVING` / échec ne donne pas une fausse sauvegarde | document sas | panne stockage + BROWSER |
| A10 | Deux comptes isolés | identité et toutes lectures | sécurité DB + navigateur deux comptes |
| A11 | Source révoquée non réinjectée | contexte/provenance | **ML1 :** contrôle générique des sources et de non-réutilisation si l'accès est testable ; **ML4 :** effet Git réel sur révocation. Ne pas déclarer `A11 FULL PASS` en ML1 |
| A12 | Projets homonymes restent distincts | création, portefeuille | DB + BROWSER |
| A13 | Reprise d'acquis pertinents en nouvelle conversation | D3/D4, continuité | intégration + BROWSER + LIVE ciblé selon capacité |
| A14 | Cockpit/projet : bon contexte, pas de Nora globale | portefeuille, session | BROWSER + reload |
| A15 | Création sans effet secondaire cycle/CKI/Git/Cursor/mandat | création, frontières | vérifications négatives des propriétaires disponibles |
| A16 | Redémarrage/restauration réconcilie la réalité | préparation, document, projet | redémarrage réel et restauration test d'une sauvegarde cohérente sur lane isolée ; limites DATA-01 tracées |

**Gates probatoires ML1 :** `A01–A10`, `A12–A16` sont à réaliser sur les capacités effectivement couvertes ; `A11` est **scindé** entre non-réutilisation générique démontrable dans ML1 et révocation Git réelle à ML4. Toute réserve sur un autre scénario est signalée par son oracle, sans « PASS » agrégé. Pour le verdict **vertical ML1 complet**, Nora doit être observée en appel réel borné, non seulement mockée ; ce GO ne vaut pas autorisation de REAL Git/Cursor.

**Principe de réalisation des tests** : les cas R2 et R4 donnent dès maintenant le **résultat attendu**. Les données d'essai, comptes, fixtures de panne, scripts, assertions techniques et moteurs de test sont déterminés **quand les APIs, migrations et environnements ont été réellement définis et construits** ; pas d'écriture de tests fictifs contre une interface spéculative. Les tests intègrent le même macro-lot que le code et la documentation. Ajouter les scénarios pertinents découverts par l'implémentation (migration, fuite, timestamp, sauvegarde, streaming) en les reliant à la source R2/R4 ; ne pas créer un catalogue concurrent.

**Niveaux de preuve séparés** : `DESIGN ONLY` aujourd'hui ; ensuite `DETERMINISTIC`, `INTEGRATION`, `BROWSER`, `LIVE` si Nora réellement appelée. **REAL Cursor/Git : N/A pour le nominal ML1**. Un test vert mocké ne prouve pas les performances/live du modèle ; une réponse Nora textuelle n'est pas un oracle d'unicité DB. Un test ne devient `COVERAGE VERIFIED` qu'après exécution et trace rattachée à un SHA/environnement ; `BEHAVIOR PROVEN` exige l'observation demandée ; `ADOPTED` relève d'un gate humain ultérieur.

## 8. ENV-01 / DATA-01 — intégration dans le macro-lot

**DEV** : configuration et DB isolées, liberté de travail et migrations dans la branche autorisée après gate, secrets hors Git, pas d'accès en écriture à RECETTE/STABLE. **RECETTE** : build sans hot reload d'un SHA figé ; DB/comptes de test propres ; schéma et données identifiés ; rapport des A01–A16 applicables avec résultats et écarts. **STABLE** : aucune existence revendiquée avant validation et promotion gouvernées ; la lane ne partage pas de DB ni de clé de session avec les deux autres.

**Ordre de livraison requis** : qualification + mandat → développement/test/documentation en DEV → SHA candidat + manifeste → déploiement RECETTE → recette Morris → corrections en DEV et nouveau SHA si nécessaire → contrôle PR/merge sous GO distinct → post-merge et éventuelle promotion STABLE sous GO distinct. Une correction ne modifie pas silencieusement le candidat figé.

**Dépendance au premier incrément** : PostgreSQL avec droits isolés, stratégie de migration, restauration et démarrage probants. Le plan DATA-01 s'applique au niveau pertinent ; les mécanismes de conservation et suppression devront être implémentés et prouvés selon l'exit du lot, puis repris en R6 pour les garanties transverses. Aucun service d'archivage ou backup n'est présenté comme déjà déployé.

## 9. Arbitrages ouverts, décisions ordinaires et conditions de STOP

| Objet | Qualification aujourd'hui | Traitement proposé |
|---|---|---|
| Framework applicatif, ORM, migrations | **CHOIX TECHNIQUE OUVERT**, R4 n'impose pas de noms | Comparer sobrement en ML1 au regard des contrats D1–D4 et ENV-01 ; justifier la sélection avant implémentation |
| Authentification et sessions | **CHOIX TECHNIQUE OUVERT** avec isolation/révocation validées | Sélection documentée et tests multi-comptes ; pivot de frontière d'autorité → Morris |
| Fournisseur/SDK Nora, streaming, budget, mémoire | **CHOIX TECHNIQUE OUVERT**, comportement R2 validé | Définir une solution minimale live, reprise/contexte véridiques et gestion d'échec ; aucune dépendance Cursor imposée |
| Modèle SQL et stockage de documents | **CHOIX TECHNIQUE OUVERT** sous V-A/PostgreSQL | Décrire tables/contraintes/migrations et référence stable D4 dans ML1 ; changement de V-A → Morris |
| Actions exactes des boutons/routage API | Fonctionnel R2/R3 validé, technique non choisi | Choisir noms/routes/payloads cohérents avec l'implémentation ; pas de navigation autorisante |
| Rail desktop 240/246, tokens, tolérances | **RÉSERVE VISUELLE NON BLOQUANTE EN D0** | Résoudre lors du composant concerné ; arbitrer si variation réelle et structurante, documenter le verdict |
| Figma direct | **Accès Cursor annoncé par Morris, capacités natives non vérifiées dans ce tour** | Contrôler lecture native juste avant UI ; STOP ciblé si nœuds/propriétés indisponibles |
| QA / test harness / jeux de données | **ORACLES DOCUMENTÉS, TESTS NON CODÉS** | Définir les assertions, fixtures et outils avec les APIs/DB/lanes réelles ; pas de test préalable fictif |
| Git/cycle/autorité/effet externe complet | **HORS PÉRIMÈTRE POSITIF** | Tests de non-effet ML1 ; intégration positive chez ML3–ML5 ; ne pas fermer les exigences transverses prématurément |
| Statut R5 | **PRÉPARATION**, code absent | Validation du contrat et GO de construction **séparés** ; aucune approbation déduite du présent brouillon |

**STOP structurant** : contradiction avec R1–R4 validés, deuxième vérité transactionnelle, mutation Git/Cursor induite, tentative de décision automatisée, fuite inter-Pilotes, projet créé sans acte ou sans preuve, incapacité de vérifier l'unicité DB. **STOP ciblé UX** : accès natif Figma nécessaire indisponible ou écart structurel non arbitrable sans toucher le contrat validé. **QA non écrite avant code** n'est pas un STOP à la **préparation documentaire**, mais demeure un STOP pour toute déclaration de couverture vérifiée.

## 10. Gate de revue, entrée en construction et suite

**Pour soumettre ML1 en `VALIDATED SPEC` :**

1. Morris confirme le **périmètre IN/OUT** et le caractère suffisant du premier vertical « portefeuille + sas + Nora + projet + première ressource documentaire ».
2. Les **contrats techniques à effet** sont arrêtés au niveau suffisant : stack web choisie et justifiée, session/révocation, fournisseur et protocole Nora, modèle SQL (unicité, contraintes, migrations et déduplication durable), cycle de vie du document et interfaces d'API. **Aucun choix de package n'est adopté par le présent texte** ; une sélection ordinaire peut être intégrée à la revue du lot, un pivot R4/autorité retourne à Morris.
3. La matrice R1/R2/R3/R4/QA identifie les propriétaires, les gaps réellement bloquants, les interfaces différées et les oracles de sortie ; **aucune extraction exhaustive Figma ni script QA fictif n'est requis à cette étape**.
4. ENV-01, données, droits, sécurité, coûts/risques/failure/restart et preuve cible sont explicites ; aucun GO Git/Cursor n'est confondu avec la validation du document.

**Après validation de la spécification et mandat D3 distinct :** ChatGPT devra alors relire le guide de routage et le template SFIA v2.6 **depuis Git au bon SHA** ; produire un prompt Cursor complet sous contrat, avec vérification du repo/branche/HEAD/base locale par Cursor, sources canoniques, bornage IN/OUT, STOP, tests et Review Pack/handoff. **Ce prompt n'est PAS produit par le présent travail.**

**Suite utilisateur rendue possible** : une fois ML1 réellement qualifié, ML2 pourra enrichir production documentaire et capitalisation **sur les mêmes identités de ressources** ; ML3 développera gouvernance et trajectoire ; ML4 les sources Git facultatives ; ML5 la réalisation/proof sous autorité. Les gates de promotion et l'adoption du runtime restent la responsabilité de Morris.

---

**Verdict historique v0.2 (avant sélection candidate) : `ML1 — TECHNICAL SPEC REVIEWED / CONTRACT GAPS CORRECTED / IMPLEMENTATION SELECTIONS OPEN`.** La proposition v0.3 figure au §12 ; publication documentaire sur branche Git, **pas de validation de stack ni GO de construction**.


## 11. Annexes de revue D0 — corrections et questions restantes

**Corrections traitées dans cette candidate v0.2 :** D3 propriétaire de conversation/messages, D4 propriétaire des documents/connaissances ; idempotence avec empreinte de requête, vérification de version sur l'aperçu inspecté et relecture avant rejet ; conservation de la garantie d'unicité indépendamment de la durée de clé ; proposition sobre PostgreSQL pour le premier document textuel ; protocole minimal de réponse Nora ; `A11` partiel tant que Git n'est pas implémenté ; LIVE Nora requis pour un verdict de capacité complète ; extraction Figma dans le lot, juste avant la surface UX concernée.

**À spécifier avant mandat D3 :** choix effectif de stack et de migrations ; contrat d'auth GitHub/session/révocation et secrets ; protocole fournisseur Nora/streaming et coût/budget ; DDL et concurrence PostgreSQL ; définition des endpoints et erreurs ; jeux de données et harnais de tests cohérents avec les interfaces choisies. **Ces éléments sont ouverts, et non autorisés implicitement à Cursor par la seule présence de ce brouillon.**

**Gate Morris :** confirmer le périmètre vertical et, lorsque les sélections concrètes seront soumises, accepter la spécification technique complète. La validation de cette candidate, l'autorisation Git, le contrat Cursor, la recette et le merge restent des actes distincts.

## 12. Choix techniques ML1 — proposition groupée à arbitrer (D0, 2026-11-04)

> **Statut : PROPOSITION TECHNIQUE R5 NON VALIDÉE.** Les ADR R4-01…04, DATA-01 et ENV-01 sont les contraintes approuvées ; les noms de frameworks, bibliothèques et structures proposés ci-dessous **ne sont pas des décisions Morris** ni une permission de coder. Comparaison fondée sur la baseline Git `main@a0b80b9`, la branche de préparation et la documentation officielle consultée le 2026-11-04. Les versions exactes des dépendances et compatibilités seront vérifiées et épinglées **au premier build**, pas devinées dans la présente conception.

### 12.1. Ensemble technique recommandé pour le premier vertical

| Frontière | Proposition prioritaire | Alternative sérieuse | Critère déterminant pour ML1 |
| --- | --- | --- | --- |
| Web + serveur | **Next.js App Router + React + TypeScript strict**, exécution **Node.js**, application modulaire avec route handlers pour les commandes et lectures protégées | React/Vite + API Fastify séparée | Une base de déploiement à gérer et tester ; séparation **logique** D1–D4, sans deuxième backend par inertie ; future exploitation locale puis serveur |
| Session / identité | **Better Auth + OAuth GitHub** pour le *login Studio*, sessions durables et révocables en PostgreSQL | Auth.js avec persistance de session équivalente | D1 `RG-ACC-001..007` ; isolation inter-Pilotes, expiration/révocation et absence de droit Git induit ; ne pas construire son propre protocole OAuth |
| SQL / migrations | **PostgreSQL + Drizzle ORM + node-postgres**, migrations SQL vérifiées et versionnées | PostgreSQL + Prisma ou SQL typé direct | Requêtes et transactions explicites, contraintes uniques et index DB réellement prouvés ; aucune double base métier |
| Cognitive / streaming | **OpenAI Agents SDK TypeScript** derrière un adaptateur D3, sans `MemorySession` ni `OpenAIConversationsSession` comme source autonome de vérité | OpenAI SDK Responses API direct sous le **même contrat D3** | Nora utile en streaming avec erreurs/reprise honnêtes ; D3/PostgreSQL restent propriétaires des conversations, messages et statuts |
| Document du sas | **Texte/Markdown versionné en PostgreSQL** (D4, sauvegarde et disponibilité observées), avec limites de taille et rendu sécurisé | Stockage objet dès ML1 si volume réel l'exige | Identité de document et de version conservée après création sans recopie et sans second référentiel |
| Tests / UX | **Vitest** pour contrat/domaine + vraie PostgreSQL d'intégration/concurrence + **Playwright** pour parcours navigateur et contrôle Figma ciblé | Autres runners à équivalence démontrée | A01–A16, relecture de session, crash, transactions, capture browser comparée au contrat R3 ; tests avec le code, pas scripts fictifs en amont |

**Argument de convergence :** ces choix partagent TypeScript côté UI/serveur, une unique base transactionnelle et des adaptateurs clairement bornés pour auth, fournisseur IA et éventuels contenus externes. La variante « frontend React + API séparée » n'est pas interdite, mais créerait dès ML1 deux déploiements, deux configurations et davantage de contrats d'intégration pour un bénéfice non démontré au niveau de charge attendu. **Un monolithe déployable n'est pas un monolithe métier indifférencié** : les responsabilités D1–D4 restent indépendantes au niveau des modules et des tests.

### 12.2. Frontières et flux d'implémentation proposés

```text
UI Figma R3 / navigateur
      |
      +--> Session & portfolio D1 (session serveur -> PilotId stable)
      |        |-- GitHub OAuth d'identité uniquement
      |
      +--> Préparation / création D2
      |        |-- transaction PostgreSQL + relation unique preparation -> project
      |        |-- idempotencyKey + empreinte + expectedCreationRevision
      |
      +--> Conversation D3
      |        |-- messages, événements et statuts durables en PostgreSQL
      |        +-- adaptateur Agents SDK (streaming, outils ML1 lecture seule)
      |
      +--> Document / connaissances initiales D4
               |-- documentId + revisionId + état réel de persistance
               +-- contenus textuels PostgreSQL et provenance
```

- **Transport :** les handlers HTTP/stream revalident la session, l'identité de la préparation/projet et les droits côté serveur. Les *server actions* éventuelles sont elles aussi des points d'entrée publics à autoriser ; l'UX ne crée aucune autorité implicite. Les chemins API exacts restent à déterminer au code selon la convention de nommage Next.
- **D1 :** le fournisseur d'identité externe ne possède ni projets, ni décisions, ni permissions Git. Un identifiant interne stable de Pilote et les sessions applicables sont rattachés à PostgreSQL. Les jetons Git personnels et les droits d'agent D9 restent hors ML1.
- **D2 :** création par **commande dédiée**, pas depuis un outil textuel Nora ; transaction avec contrainte d'unicité `preparationId` et résultat idempotent durable. Réconcilier **en lecture seule** l'effet en cas d'ACK perdu ; ne pas re-créer par retry aveugle. Un nom de projet n'est jamais une clé unique.
- **D3 :** le message utilisateur est durablement enregistré avant l'appel IA ; le rendu stream reste **provisoire** tant que la réponse n'est pas finalisée et conservée. La reprise restitue les messages durables et les acquis D4 pertinents selon les droits actuels. Le SDK est **un moteur d'inférence/outillage**, pas le propriétaire de la mémoire ni le registre D6.
- **D4 :** le document du sas possède une identité/version stables avant et après création ; le statut `SAVING`, `AVAILABLE`, `FAILED` ou `UNKNOWN` est déduit de l'état réel des données, jamais d'une réponse Nora. Les extensions documentaires ML2 restent possibles sans remplacer D4.
- **Sécurité :** les futurs outils SDK à effet externe ne sont **pas exposés en ML1**. Tout outil de lecture est autorisé selon sa source et son contexte ; une capacité d'écriture Git/Runner ou de création indirecte via Nora est hors lot. Secrets hors Git, cookies/sessions sécurisés, isolation des lanes et traces expurgées ; ne pas laisser l'export automatique de traces IA divulguer prompts ou documents sensibles sans politique validée.

### 12.3. Garanties relationnelles à transposer en DDL lors du même macro-lot

Modèle **conceptuel non adopté**, sans figer les noms physiques de tables :

| Objet/propriétaire | Contraintes à démontrer en base réelle | Preuve discriminante |
| --- | --- | --- |
| Pilote/session — D1 | Identité externe vérifiée `UNIQUE` dans la portée du fournisseur ; session révoquée inopérante | Deux Pilotes A/B, reconnexion, accès refusé |
| Préparation — D2 | `ownerId` vérifié côté serveur, révision de création stable | Préparation retrouvée après restart |
| Projet + lien — D2 | Projet identifié durablement, **une seule liaison par préparation** ; même transaction avec résultat de création | Double clic et ACK perdu (`A04/A05`) |
| Commande idempotente — D2 | Clé unique dans portée du Pilote + empreinte de demande ; replay identique stable ; demande contradictoire refusée | Rejeu concurrent, évolution d'aperçu |
| Conversation/messages — D3 | Identité de fil durable et ordre explicite, demande corrélée, unicité du message logique | Streaming interrompu, réouverture, absence de doublon |
| Documents/révisions — D4 | Identifiant stable et versions non écrasées, contenu réellement disponible, contrôle de propriété | `A08/A09` et retour sas→projet |

La transaction de création couvre `Project + lien préparation→projet + résultat de commande`, pas les octets des services externes ni l'appel IA. Privilégier contraintes SQL + tests de concurrence plutôt qu'une logique « si absence, insérer » vulnérable au double clic. Les migrations et restaurations suivent DATA-01/ENV-01, **aucune migration à exécuter directement en STABLE sans gate**.

### 12.4. Contrainte d'usage de l'Agents SDK — éviter une deuxième vérité

Le SDK propose une gestion de session pouvant persister automatiquement l'historique ; en ML1, **ne pas activer une session indépendante** ou une conversation hébergée comme mémoire canonique en parallèle de D3. Composer explicitement l'entrée à partir de PostgreSQL D3 et des références D4 autorisées ; appeler le runtime avec cette entrée ; persister le résultat final ou l'interruption dans la seule vérité D3. Les états internes du SDK peuvent aider à calculer/reprendre un run **si leur persistance et corrélation sont prouvées**, mais ne deviennent ni un deuxième transcript, ni un HumanDecision, ni une garantie de STOP.

Une alternative recevable est l'API Responses directe : si le SDK introduit une dépendance de session, de journalisation ou de replay non maîtrisable, remplacer **l'adaptateur** avant implémentation de la capacité, sans changer les contrats D3/R4. Aucune migration d'autorité ni deuxième modèle d'exécution ne serait justifié.

### 12.5. Livraison et contrats de preuve

| Étape du vertical | Condition observable pour le premier lot |
| --- | --- |
| DEV | Application et PostgreSQL démarrent sur lane isolée ; secrets vérifiés ; données de test identifiées ; migrations réversibles ou restauration bornée |
| Tests D1/D2 | Deux Pilotes isolés ; double clic / conflit / timeout post-commit ; aucune création implicite, aucun Git/cycle |
| Tests D3/D4 | Nora répond via fournisseur réellement disponible, streaming et messages durables ; documents du sas sauvegardés/repris avec leur vraie version et sans transfert fictif |
| UX R3 | Cursor consulte directement les frames concernés, relève les mesures natives utiles juste avant leur code, puis compare les captures navigateur et teste clavier/reflow |
| QA | Scénarios `A01–A16` reliés aux tests/proofs réellement exécutés, avec `A11` Git explicitement **partiel** tant que D9/ML4 n'est pas implémenté ; aucune preuve LIVE/REAL déclarée sur mock |
| ENV/version | Manifeste candidat `source_sha/build_id/schema_revision` réel, version `-rc.N` **si décidée** ; `STABLE = NOT AVAILABLE` avant promotion ; `construction/delivery-history.md` créé par Cursor dans ce premier lot, non rempli de fausses livraisons |
| Gates | GO D3 Cursor, mise à disposition RECETTE, PR, merge et promotion STABLE distincts, avec décisions Morris à chaque point protégé |

### 12.6. Arbitrages à présenter à Morris avant le mandat Cursor

1. **Paquet de stack :** confirmer ou rejeter le choix intégré Next.js/TypeScript Node + Better Auth GitHub + Drizzle/PostgreSQL (ou énoncer une contrainte réelle imposant une alternative). Ce n'est pas une réouverture de R4-01/02.
2. **Nora :** confirmer l'Agents SDK TypeScript comme moteur D3 **sans mémoire indépendante**, ou préférer l'API Responses directe pour réduire la surface SDK. Les deux doivent satisfaire les mêmes garanties métier et de reprise.
3. **Version de premier candidat :** proposer `0.1.0-rc.1` **seulement lorsque le premier build RECETTE existe et que Morris valide le point de départ**. Avant cela, `NOT AVAILABLE` : n'assigner aucun numéro à de simples documents Git.

**Ce qui ne nécessite pas un nouveau gate indépendant :** le nom physique des migrations, l'outillage précis des tests, l'organisation des composants React et les tailles d'écran déjà contractées, **s'ils suivent exactement les décisions validées et ne changent pas les responsabilités ou la sécurité**. Ces détails relèveront de l'exécution D3 dans le contrat validé et de sa revue intégrée, sans micro-cycles préparatoires.

### 12.7. Sources externes utilisées pour comparer les options (références techniques, non décisions SFIA)

- Next.js, route handlers et déploiement Node : https://nextjs.org/docs/app/getting-started/route-handlers et https://nextjs.org/docs/app/getting-started/deploying
- Next.js, sécurité des route handlers/actions : https://nextjs.org/docs/app/guides/authentication
- Better Auth, GitHub OAuth et adaptateur PostgreSQL : https://better-auth.com/docs/installation et https://better-auth.com/docs/adapters/drizzle
- Drizzle PostgreSQL, transactions et contraintes : https://orm.drizzle.team/docs/get-started-postgresql, https://orm.drizzle.team/docs/transactions et https://orm.drizzle.team/docs/indexes-constraints
- OpenAI Agents SDK TypeScript, sessions et streaming : https://openai.github.io/openai-agents-js/ , https://openai.github.io/openai-agents-js/guides/sessions/ et https://openai.github.io/openai-agents-js/guides/streaming/
- Playwright, comparaisons de captures navigateur : https://playwright.dev/docs/next/test-snapshots

**Verdict historique de proposition du §12 : `ML1 STACK PACKAGE PROPOSED`.** L'**acceptation de principe de Morris** et les réserves restantes sont qualifiées au §13 : `TECHNICAL DIRECTION ACCEPTED IN PRINCIPLE / NO D3 GO / NO CODE / NO RUNTIME / NO LIVE PROOF`.

## 13. Acceptation de principe de la stack et garde-fous d'extension — 2026-11-04

**Décision exprimée par Morris :** le paquet technique recommandé au §12 est **accepté sur le principe**. Ceci confirme la direction de conception ML1 mais **ne valide pas les versions de packages, le schéma SQL, les endpoints, un contrat d'exécution Cursor ou une release**. La spécification demeure candidate jusqu'à validation du périmètre d'exécution, et aucun runtime Next n'existe.

**Vérification de compatibilité avec la suite du produit (sans concevoir ML2–ML5) :**

- **D4 / ML2 :** le stockage PostgreSQL des premières ressources textuelles doit préserver `resourceId`, versions, origine et permissions ; les fonctionnalités documentaires futures peuvent l'étendre sans remplacer cette vérité ou recopier le contenu au passage sas→projet.
- **D5 et D6 / ML3 :** `projectId` et identité Pilote stables permettront d'y rattacher trajectoire, cycles, CKI et HumanDecision. Leur propriétaire reste D5/D6 : le clic de création du projet ne crée ni cycle, ni mandat, ni décision métier générique.
- **D9 / ML4 :** GitHub OAuth Better Auth n'est **que l'authentification Studio**. Les droits Git (GitHub App privilégiée par R4), scopes, révocations et provenance appartiennent au domaine Git, facultatif. Aucun jeton de login ne devient un jeton de mutation Git.
- **D7 et D8 / ML5 :** Next.js/Node héberge l'interface et l'API du produit, mais **une requête HTTP ou son streaming ne doit jamais devenir le moteur durable d'une réalisation externe longue**. D7 pourra utiliser un adaptateur/worker distinct si l'implémentation le justifie, avec état et autorisations D6/D7 persistés et corrélés ; D8 reste propriétaire des preuves et verdicts. Le runtime Agents SDK de Nora n'est ni le moteur d'exécution D7 ni une autorité D6.
- **Sécurité et exploitation :** source unique D3 pour messages, D4 pour documents ; gestion explicite des traces IA, sessions révoquées, identités/scopes et secrets propres à chaque lane. PostgreSQL transactionnel reste le socle ; les vues/index futurs sont dérivés.
- **UX R3 :** source Figma native consultée par Cursor juste avant le code UX concerné ; attention au rail partagé desktop 240/246 px au moment de son implémentation, sans pré-extraction globale ni tolérance arbitraire.
- **Versioning / ENV-01 :** premier numéro applicatif et préversion pas encore attribués ; `STABLE = NOT AVAILABLE` jusqu'à promotion réellement observée. L'historique de chaque delivery commence avec le premier lot de code ; l'accord de principe ne vaut pas une release.

Les limites sont **compatibilité architecturale vérifiée au niveau documentaire**, pas tests d'intégration avec des capacités inexistantes. Les nouvelles dépendances/versions seront contrôlées sur le premier environnement réel. **Aucun pivot R4 demandé**.

**Suite et gates :** PR documentaire autorisée par Morris le 2026-11-04 après audit compact ; ouverture ≠ checks PASS ≠ merge ; autorisation de Cursor D3 séparée. Voir [revue documentaire et audit final](revue-coherence-technique.md).


## 14. Implémentation locale DEV (working tree — 2026-11-04, qualification LIVE)

> **Statut :** working tree local sur `sfia/next-access-preparation-continuity` ; **pas de push projet** ; comportement = code après consolidation LIVE QA.

| Choix | Valeur |
| --- | --- |
| Application | `projects/sfia-studio-next/web` — Next.js **15.5.29** + React 19 + TypeScript |
| Auth D1 | Better Auth session → `PilotId` ; `ensurePilotForAuthUser` **backfill** `github_user_id` si compte GitHub arrive après `user.create` (PilotId préservé ; conflit ≠ merge) ; DEV login isolé ; `/api/auth/status` toujours JSON |
| SQL | PostgreSQL 16 Docker DEV `:5433` ; migrations `001` + `002` |
| D2 | advisory xact lock `(pilotId,idempotencyKey)` avant mutations ; reconcile lie clé+préparation |
| Continuité | `GET /api/projects/:projectId` sans query `preparationId` |
| D3 | Agents SDK LIVE si `OPENAI_API_KEY` ; sinon fixture ; **pas** MemorySession ; tracing DEV `OPENAI_AGENTS_DISABLE_TRACING=1` |
| D4 | owner+préparation ; documents durables ; Markdown riche **KNOWN GAP** (`whitespace-pre-wrap` brut) |
| Dépendances | `overrides.postcss=8.5.32` (élimine nested Next 8.4.31) ; audit prod PostCSS/Next GHSA clos ; toolchain vitest/drizzle-kit reste dette DEV |
| Version produit | `NO RELEASE` / STABLE `NOT AVAILABLE` |
| Preuves | unit 3 ; integration 22 ; Playwright 1 ; build+tsc ; OAuth DB reconcile + BROWSER USER OBSERVED ; Nora LIVE API adapter PASS (1 appel borné) ; Figma pixel INCONCLUSIVE |

## 15. Réconciliation As-Built et clôture documentaire avec réserves — 2026-11-04

**Statut : DOCUMENTED / AS-BUILT SOURCE-REVIEWED / ML1 CLOSED BY MORRIS WITH CARRIED RESERVES (2026-11-04).** Cette section réconcilie la conception avec le **code Git intégré**, sans modification applicative, sans exécuter de nouveaux tests et sans effacer l'historique de conception. Source du runtime : PR [#649](https://github.com/mcleland147/sfia-workspace/pull/649), candidat `0db58be8240a00593092048ee74299f19374f489`, merge `747cbec0ac9c161306db34121b0447391b23589c` ; baseline documentaire consultée sur `main@2a232f595d4673efa3ddd743711b991ca819e4d8`. Worktree, sessions, secrets et runtime actuellement démarré : **NON OBSERVÉS**.

### 15.1. Résultat produit et réalisation vérifiée dans le code

| Frontière | Réalisation Git constatée | Limites ou divergence vis-à-vis de la candidate |
| --- | --- | --- |
| D1 — identité et portefeuille | Next.js 15.5.29 / React 19 / TypeScript, Better Auth OAuth GitHub ; identité `PilotId`, sessions, provisioning et portefeuille dans `web/src/domains/identity/` | DEV test login séparé de la preuve OAuth ; collisions possibles des cookies DEV/RECETTE sur même hôte, réserve ENV-01 A |
| D2 — sas, création, continuité | Préparation PostgreSQL indépendante ; création dédiée via `createProjectCommand`, transaction, `pg_advisory_xact_lock` par Pilote/clé, empreinte et contrôle de révision, réconciliation ; `GET /api/projects/:projectId` et rattachement des ressources | A05 timeout après commit/restart pas intégralement injecté ; A16 restauration/redémarrage non démontrés en intégralité |
| D3 — Nora et messages | `@openai/agents` derrière `nora-adapter.ts` ; pas de session SDK autoritative indépendante ni d'outil à effet externe ; message utilisateur enregistré avant appel et réponse persistée avec statut/génération ; fixture E2E bornée à DEV | **Pas de streaming HTTP effectivement implémenté** : `run(agent,...)` produit une réponse complète, le handler messages renvoie ensuite du JSON ; la proposition §§4.3/12 prévoyait un protocole stream. Contexte actuel réduit aux derniers messages, pas de récupération sélective D4 prouvée (A13). |
| D4 — première ressource | `documents` et `document_revisions`, contenu Markdown versionné en PostgreSQL, états `SAVING/AVAILABLE/FAILED`, conservation des identifiants au rattachement | Rendu conversationnel Markdown riche absent ; bibliothèque de connaissances/révision avancée hors ML1, à qualifier dans ML2 |
| Stockage / schéma | Drizzle **avec `postgres-js`** (`drizzle-orm/postgres-js`, package `postgres`), PostgreSQL 16, migrations SQL `001` et `002` ; override PostCSS `8.5.32` | La proposition §12 cite `node-postgres` : elle ne décrit pas le driver implémenté. `web/src/db/schema.ts` exporte encore `schemaRevision = "001_initial_studio_core"` tandis que le script de migration applique 001 puis 002 : **cohérence de métadonnée à vérifier**, sans inférer que la DB réelle est à 001. |
| Outillage / versioning | Vitest, intégration PostgreSQL, Playwright DEV FAKE, `product-version.ts` et `package.json` technique `0.0.0-dev` | Aucun pipeline CI Next prouvé par le Required Gate historique ; **NO RELEASE**, aucune version produit STABLE ni ADOPTED |

### 15.2. Preuves observées à distinguer

- **Tests locaux au candidat C3 déclarés et inscrits dans la PR #649 :** 22 unitaires PASS, 26 intégration PostgreSQL PASS, 1 Playwright navigateur **DEV avec identité et Nora FAKE** PASS ; build/typecheck/lint PASS. **Ces tests n'ont pas été rejoués pendant la présente revue documentaire.**
- **Recette fonctionnelle Morris sur le build `PMCGeil9wv8DZNBfEGf4H` lié au C3 :** GitHub OAuth LIVE et Nora LIVE bornée acceptés **avec réserves**. Le test Playwright FAKE ne devient pas preuve LIVE.
- **Git :** C3 mergé via #649 et arbre vérifié ; cela **ne prouve pas** un smoke runtime indépendant après merge, ni CI Next, restauration, conformité Figma totale ou promotion.
- **Oracle détaillé :** `matrice-tracabilite.md` §7 (preuves historiques et réserves) puis §8 (préclôture documentaire). La correspondance entre code et contrat est **partielle** aux frontières non testées.

### 15.3. Réserves, décision et suite

- **A / sessions DEV–RECETTE :** séparation de cookies à corriger et requalifier **avant STABLE** ; atténuation provisoire par profils navigateur distincts ; aucune fuite inter-bases démontrée.
- **B / CI Next :** workflow dédié sous GO sur chemins partagés, avec exécution Next effective, **avant prochaine livraison significative** ; l'ancien Required Gate SUCCESS ne prouve pas les tests Next.
- **A05/A15/A16, DATA-01 :** preuves partielles ou absentes, à conserver avec propriétaire/gate ; **A13** et connaissance sélective à requalifier dans la capacité cognitive/documentaire ML2 ; **A11** révocation Git relève de ML4 ; UX Figma/Markdown à traiter dans leur lot et leur gate appropriés.
- Les écarts **streaming non implémenté**, métadonnée `schemaRevision` et driver effectivement sélectionné sont enregistrés ici en As-Built, **pas corrigés en code par cette opération**. Toute obligation de correction immédiate ou tout changement de périmètre validé relève d'un arbitrage Morris.
- **Verdict Morris acquis le 2026-11-04 :** `ML1 CLOSED WITH CARRIED RESERVES — BUILT / MERGED #649 / FUNCTIONAL RECETTE ACCEPTED`. La clôture porte sur la première capacité utilisateur et la réconciliation documentaire As-Built ; elle **ne certifie pas** les tests non exécutés, le streaming, la conformité UX totale, la restauration, la CI Next ou un smoke runtime postmerge. L'acceptation des reports n'éteint **aucune** des conditions A/B et QA nommées ci-dessus. La préparation de ML2 reste distincte de son GO technique ; **pas de ML1-B correctif automatique**, ni de STABLE, release ou ADOPTED.
