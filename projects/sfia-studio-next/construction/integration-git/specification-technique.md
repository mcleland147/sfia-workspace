# R5 — Spécification technique candidate : collaboration Git et intégrations

> **AS-IMPLEMENTED LOCAL CANDIDATE (2026-11-09)** — base `974b0030…` + macro-correctif chat-first D4 / provenance Git sur `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ).
> Domaines : D3/D4/D9 ; migrations `008`–`012` (aucune migration structurante ce cycle).
> **ML4-REC-08** : création/révision D4 conversationnelle via `savePreparationDocument` / `reviseDocument` + ACK applicatif corrélé (pas de second moteur Nora).
> **ML4-REC-07** : provenance lecture Git distingue `blobSha` / `commitSha` (+ `permalink` seulement si commit vérifié) ; `listGitRefs` au-delà de `main`.
> **R1-A / R1-B** refresh lifecycle clos ; **R2** CONFLICT callback accepté.
> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN, mono-repo sandbox) · Intégrité D7/D8 DETERMINISTIC CORRECTIVE · Chat-first D4 / provenance DET DEV PROVEN · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
> Mutations REAL **bornées documentary** si et seulement si `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (aliases refusés ; merge HARD-BLOCKED). Flag ≠ autorité D6.
> Séquence publication nominale **seule** autorisée : `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` (`publication-steps.ts`). Aucun COMPLETED / D8 sans preuve fichier + commitSha ≠ baseSha + PR distante.
> Provenance d'effet : `plan.effectProviderMode` figé à prepare ; historique sans champ → UNKNOWN ; divergence live → REQUIRES_REQUALIFICATION.
> **ML4-REC-01 :** `reconcileAttempt` contrôle le mode historique **avant** `resolveGitHubProvider()` — une observation SCRIPTED n'est jamais preuve d'un effet REAL (et inversement). COMPLETED historique non réécrit.
> Risques historiques R1–R8 **conservés** (ne pas renuméroter). Nouveau défaut = `ML4-REC-01` seulement.
> REAL sandbox actuel : allowlists mono-repo `mcleland147/chantiers360` ; **App ID / installation bornés par `STUDIO_LANE`** (`DEV`→5670639/179935689 ; `RECETTE`→5677465/180092114) — fail-closed, aucun fallback silencieux inter-lanes ; multi-repo REAL hors capacité.
> Les sections bas du document portant « DOCUMENTED — DRAFT / NOT IMPLEMENTED » sont des **snapshots candidats historiques** — le bandeau ci-dessus prévaut pour l'état AS-IMPLEMENTED courant.


**Statut :** `DOCUMENTED — DRAFT ARCHITECTURE / NOT VALIDATED SPEC / NOT IMPLEMENTED`
**Nature :** préparation technique de ML4 sous la source de contrat de macro-lot R5 existante ; **ne remplace pas** les R2/ADR validés, la phase Figma ou le prompt Cursor SFIA v2.6.
**Baseline :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5`, repo `mcleland147/sfia-workspace`.
**Préconditions de validation :** décision D2 trajectoire et portée, contrat fonctionnel R2 actualisé, source Figma validée/versionnée, preuve de faisabilité GitHub App, matrice et revue Morris.

## 1. Contexte du runtime réellement consulté

| Couche | Code Git observé sur `main` | Conséquence ML4 |
|---|---|---|
| D1 | `web/src/lib/auth.ts` : Better Auth GitHub OAuth, `GITHUB_CLIENT_ID/SECRET`, **sans repo scopes**, projet/identité séparés | Conserver OAuth d'entrée ; introduire un flux d'autorisation GitHub App distinct |
| D3 | `web/src/domains/conversation/nora-adapter.ts`, `cognitive-policy.ts` et `d4-read-tools.ts` : outils lecture D4 ; message explicite « aucun outil externe (Git, Web, Cursor) » | Ajouter lecture Git bornée par permissions et provenance ; modifier l'allowlist/contraintes sans donner une commande Git au modèle |
| D4 | `web/src/domains/document/service.ts` + tables `documents`, `documentRevisions` et endpoints de révision/compare | Réutiliser version/corrélation/idempotence ; nouveau lien de publication, pas second document store |
| D5/D6 | `web/src/domains/pilotage/` et `domains/decisions/`, commandes et restrictions D5/D6 existantes | Étendre l'autorité aux effets Git **sans** supposer que tout type de mandat est déjà supporté |
| D7/D8/D9 | Aucun domaine runtime dédié D7/8/9 repéré dans l'arbre Git et aucune route Git Next observée | Construire seulement les interfaces nécessaires, avec un owner unique |
| DB | PostgreSQL et migrations `001..007`, schema Drizzle | Migrations additives limitées et backward safety, aucune reprise inertielle |
| UX | Figma Git 171–205 et vue source 09/12 ; aucune page native « Paramètres → Intégrations » identifiée | Nouvel UX contract à réaliser avant code |

## 2. Contrat d'architecture : une seule autorité, un seul chemin d'effet

**Lecture :** D3 demande une investigation → serveur contrôle `PilotId`/projet/session/scope → D9 lit la ressource sous GitHub App et permissions actuelles → réponse bornée avec repo/ref/SHA/source/limites → D3 analyse → D4 capitalise seulement ce qui est utile. Aucun texte Git n'est commande.

**Écriture :** D4 possède une révision du document → D3 propose cible/contenu sans écrire → Studio prépare **une version inspectable** avec fichier(s), diff, base/head, identité effective, risques et préconditions → D6 recueille le mandat courant → D7 conserve la commande/tentative et vérifie la revalidation → D9 interagit avec GitHub → D7 réconcilie les effets distants → D8 qualifie les faits et limites → UI expose l'état et D4 lie les références effectivement observées.

**Chemin ML5 :** le même D7 utilisera un adaptateur d'exécution Cursor distinct ; ne pas créer un `GitExecutionEngine` permanent en D9 ni un `CursorEngine` concurrent hors D7.

## 3. GitHub App, permissions et attribution — candidat à prouver

### 3.1. Trois objets distincts

1. **Session Studio D1** : identité vérifiée GitHub OAuth, sans scope dépôt.
2. **Autorisation fournisseur D9** : GitHub App installée sur un compte/une organisation et un ensemble de dépôts, avec autorisation utilisateur supplémentaire si les appels doivent être faits **au nom du Pilote**.
3. **Association projet/ressources D9/D4** : références de dépôts/fichiers utilisées dans un projet ; ce lien n'étend pas les droits GitHub et n'est pas un mandat D6.

**Mode candidat prioritaire :** GitHub App **user-to-server** pour les opérations au nom du Pilote. L'accès réel est limité par les droits du compte, de l'App et de l'installation, contrôlés à chaque opération ; dans une organisation, des autorisations et approbations peuvent être nécessaires. `installation-to-server` seulement si finalité et attribution d'un acte applicatif sont établies ; ne jamais substituer secrètement un bot plus privilégié à un utilisateur refusé.

### 3.2. Flux utilisateur

- Après login : pas de redirection obligatoire ; proposition facultative si utile. La première connexion GitHub OAuth Studio et la GitHub App ne sont **pas** un seul consentement indistinct.
- Depuis Paramètres : sélectionner GitHub, commencer le flux d'installation/autorisation, choisir compte/organisation et dépôts chez GitHub selon les droits.
- Retour : vérifier la correspondance state/CSRF, session Studio, installation autorisée, identité de l'utilisateur GitHub et éventuelle approbation ; **ne pas croire naïvement l'`installation_id` reçu dans l'URL**.
- Ajout de dépôt : ouvrir la configuration GitHub de l'installation, sélectionner la ressource, revenir ; relecture serveur de la liste réellement autorisée.
- Retrait/déconnexion : détacher source projet, retirer dépôt de l'installation et révoquer la relation à Studio sont des actions distinctes avec états et conséquences différents.

**Subtilité GitHub :** selon la configuration, « Request user authorization during installation » exploite un callback OAuth, tandis que l'usage d'une Setup URL après installation/redirect-on-update suit d'autres contraintes. Fixer **un seul parcours réel** après étude/documentation fournisseur ; ne pas promettre simultanément deux retours incompatibles.

### 3.3. Sécurité et stockage

- Secret App/private key et refresh/user token côté serveur, protégés en stockage adapté, rotation/revocation, jamais dans navigateur, conversation Nora, prompts, D4 ou logs.
- Cloisonnement DEV/RECETTE/STABLE, credentials/URLs/callbacks propres ; aucun dépôt de production cible des essais d'écriture RECETTE.
- Permission moindre : Metadata read de base ; Contents read/write et Pull requests read/write si endpoints réellement nécessaires ; checks/status read si lecture requise ; aucun Admin/Workflow/org-wide write par défaut.
- Règles d'organisation, SSO et protected branches appliquées, aucun contournement des branch rules par défaut ; test de l'acteur effectif et de l'approbation éventuelle.
- Autorisations courantes revues au point d'effet, pas seulement mises en cache à la connexion ; pas d'énumération de dépôts privés non autorisés.

## 4. Contrats de données minimaux, sans nommage figé

| Concept candidat (non nom permanent décidé) | Informations et ownership | Invariants |
|---|---|---|
| **IntegrationAuthorization** | Relation Pilote ↔ fournisseur/installation ↔ état d'accès autorisé, propriétaire D9 | Ne crée pas de projet, mandat D6 ou droit fournisseur |
| **GitResourceRef** | Repo/organisation/ref/SHA/chemin/PR, date et contexte de lecture, propriétaire D9 | Candidate ≠ main ; source hostile donnée, non instruction |
| **ProjectGitLink** | Projet D2, ressource/réf Git rattachée volontairement, propriétaire relationnel D9 | Découplé de la liste des dépôts effectivement autorisés |
| **DocumentPublicationRef** | Document D4 ID + révision + digest, cible et commit/PR observés, propriétaire D4 pour le lien | Une version D4 peut être publiée, sans être remplacée silencieusement par Git |
| **EffectRequest / Attempt** | Opération document Git bornée, cibles, contenu, base/head, mandat/version D6, correlation/idempotence, état connu/UNKNOWN, propriétaire D7 | État de tentative ≠ fait Git ≠ preuve D8 |
| **ObservedGitFact** | Retour GitHub relu avec ref/SHA/horodatage et limites, propriétaire source D9 consommé D8 | Pas de faux merge ni assertion de tests non observés |

Préférer **quelques tables nouvelles minimales** nécessaires et références à des objets existants à un registre générique de plugins, un bus d'événements ou une deuxième base documentaire. Versionner les migrations et traiter la coexistence avec migrations 001..007.

## 5. Capacités de lecture et interaction Nora

- Ajouter des **outils Git de lecture ciblés** au Runner Nora, sous la même politique de budgets/provenance que D4, mais avec un adapter séparé pour les permissions GitHub réelles.
- Les arguments repos, ref et path proposés par le modèle sont **des demandes**, non une autorisation : le serveur résout l'identité, vérifie le périmètre, filtre les ressources et refuse toute lecture transversale.
- Contexte rendu à Nora : nom/chemin/ref/SHA, contenu borné/taille, date ou condition d'actualité, incertitude, statut de droit. Un dépôt indisponible n'est pas simulé.
- Limiter page/taille/rate-limit, éviter récupération exhaustive d'un repo et injection par contenu ; récupérer de manière proportionnée à la question du Pilote.
- Séparer le travail de rédaction/révision D4 de l'effet Git : aucun outil d'écriture direct exposé comme libre capacité cognitive à Nora.
- Exemple de non-régression : le document D4 créé avant rattachement Git demeure accessible après retrait du dépôt ; Nora indique que la source externe n'est plus actuellement vérifiable.

## 6. Écritures Git documentaires — ordre d'effet et reprise

### 6.1. Préparation et inspection

Présenter au Pilote : **projet/Pilote réel, document/revision/digest, dépôt, répertoire, chemin(s), branche, base SHA/HEAD, action proposée, diff et portée, auteur effectif, droits nécessaires, restrictions D6 et risques**. En cas de changement du contenu/diff/chemin/branche ou du mandat, requalifier avant effet. Une sélection de repo n'est pas un GO.

### 6.2. Opérations API candidate

- Lire branche/commit/base courants ; refuser ou proposer requalification si stale.
- Créer une branche distante lorsque la cible ne peut pas être publiée sur la branche actuelle dans le périmètre autorisé.
- Pour une **publication mono-fichier**, étudier GitHub REST Contents API : mise à jour du fichier = **commit distant**. Ne pas inventer un clone/commit local/push.
- Pour plusieurs fichiers cohérents, étudier Git Trees/Commits/Refs avec préconditions ; ne pas accepter de publication partielle non signalée.
- Créer une PR à partir d'une branche head distincte, avec base/identité réelles, et conserver l'état distant observé.
- **Merge :** acte D6 distinct, relecture base/head/contenu/permissions/branch protections, commande Github adaptée avec contrôle SHA, puis constat de ref cible ; aucune PR merge automatique.

### 6.3. Commande D7 proportionnée et réconciliation

**Pas d'orchestration Cursor en ML4.** D7 doit néanmoins conserver intention, mandat, tentative et résultat/ambiguïté. Après timeout, crash, connexion perdue ou retour GitHub non concluant, relire **référence/commit/PR/fusion** avant de proposer de rejouer. L'idempotence d'une commande interne ne garantit pas l'idempotence des opérations externes ; ne pas promettre « exactly once » sans preuve fournisseur. Aucun retry automatique de merge/commit à risque.

### 6.4. Restrictions et escalades

- Un document classé normatif, protégé ou à impact architecture/gouvernance peut exiger une approbation D2 supérieure : contrôle d'effet distinct d'une connexion technique Git.
- Les fichiers qui modifient code/scripts/build/CI/infrastructure sortent de la voie de publication documentaire libre ML4 et nécessitent un contrat technique ML5 ou autre autorisation dédiée.
- **Ne pas baser ces restrictions uniquement sur l'extension `.md`** : vérifier chemins, portée, diff et règles applicables ; un `README.md` peut avoir un effet opérationnel indirect.

## 7. API et surfaces — proposition de responsabilités, pas endpoints adoptés

| Usage | Propriétaire fonctionnel | Contrat API à spécifier |
|---|---|---|
| Inventaire des intégrations disponibles | D1 navigation / D9 fournisseur | Statut utilisateur vérifié, aucune donnée repo non autorisée |
| Connecter/renouveler GitHub App | D9 identité fournisseur | Start URL, callback fiable, state/session, résultat sans jeton UI |
| Lister/choisir dépôts autorisés | D9 + Projet D2 | Filtrage par installation, utilisateur et projet ; droits actuels |
| Lire Git pour Nora et Inspection | D9 + D3/D4 | Ref/SHA/source/limits, consultation sous droits vérifiés |
| Préparer la publication d'une révision D4 | D4/D3/D9 | Diff identifié, destination, HEAD, acteur, état inspectable |
| Autoriser mutation/merge | D6 | Mandat/version/portée spécifiques ; pas de simple flag 'connected' |
| Déclencher/reconcilier Git | D7 et adapter D9 | Correlation, no double effect, relecture et statut fiable |
| Restituer faits/preuves | D8 et D4 | Observation bornée, lien de publication et acceptation distincte |

**Aucune route API ni nom de classe permanent n'est décidé ici** ; appliquer les conventions produit validées et le blast radius lors du design technique final.

## 8. Périmètre QA / tests intégrés

Suivre [la matrice ML4 canonique](matrice-acceptation.md) : 22 cas discriminants (non exécutés), références `D-01..D-26` et `C01..C24` applicables, `N-01..14/N-15..27`, R1 E2E07 et parcours Figma. Prévoir :

- unitaires : construction de portée/permissions, filtrage de sources, payload/plan d'effet, checks D6, états de reprise ;
- PostgreSQL/intégration : ownership, lien document/révision/commit, transactions avant appel externe, migration additive, double effet et reprise ;
- fournisseur GitHub RECETTE réel : installer/ajouter/retirer dépôt, refus, read private, branche commit PR/merge, stale, rate-limit, timeout ;
- Nora LIVE : source pertinente, provenance, absence de faux GO et bonne conservation du fil ;
- browser/UX : Paramètres, parcours consentement GitHub réel, retour, inspection, refus, accessibilité, responsive ;
- multi-utilisateur : deux Pilotes avec dépôt commun, droits différents et projets séparés ;
- D8 : diff/commit/PR/merge observés ≠ tests conformes/acceptation/ADOPTED.

## 9. Réserves techniques et gates

1. **D2 :** périmètre documentaire ML4, merge sur autorisation distincte et préférence GitHub App validés en contenu Morris, addenda R1/R2/R4 sur branche ; **les détails exacts des permissions et de l'acteur effectif restent à prouver avant build**.
2. **Figma :** 18 écrans 218–235 et INDEX 388:425 VALIDATED SPEC Morris ; [registre de nœuds](../../ux-ui/integration-git-ux-ml4.md). **Figer un snapshot immuable/les captures retenues pour transposition**, puis comparer au runtime en navigateur ; ne pas redemander une validation de conception déjà acquise.
3. **Fournisseur :** confirmer dans un compte de test les capacités App, installation, user-to-server, callbacks compatibles, accès aux organisations, permissions et branch protection.
4. **D6/D7 :** ne pas dégrader la persistance ML3 des décisions et restrictions ; aucun deuxième workflow d'effets.
5. **Nora/DB :** ne pas casser les garanties ML2 de révision/corrélation/ownership, ni introduire une sync concurrente.
6. **QA :** les assertions sont candidates ; aucun test n'a été lancé. La seule présence de credentials/config ne constitue pas preuve LIVE/REAL.
7. **Git :** qualification v0.2 et addenda normatifs R1–R5 déjà publiés sur `docs/next-ml4-ml5-sync-20261107` ; intégration `main` et GO Cursor séparés, sans changement de code dans ce lot documentaire.

## 10. Critères de validation de la spécification définitive

Le contrat est seulement prêt à recevoir un **GO de construction** après intégration et relecture des sources R1–R5, convergence UX du runtime existant ML1–ML3 selon la décision Morris, gel des références visuelles Figma déjà validées, qualification des API et identités GitHub App réelles, finalisation du modèle D6/D7/D8/D9 sans doublon, stratégie de tests/risques et intégrateur définis, puis pré-check et routage SFIA v2.6 courant depuis Git. La validation UX seule n'est ni une preuve GitHub REAL ni un GO de réalisation.

## 11. Références fournisseur à vérifier au moment du build

- Installer GitHub App et sélectionner les dépôts : https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party
- Modifier les dépôts d'une installation : https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps
- Authentifier en tant qu'utilisateur : https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user
- Générer un jeton utilisateur GitHub App : https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app
- Installation token, permissions et repos restreints : https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation
- REST Contents : https://docs.github.com/en/rest/repos/contents ; REST Pull Requests : https://docs.github.com/en/rest/pulls/pulls

**Verdict : spécification technique de préparation, non contractualisée en contenu ni implémentée.**

---

## 12. Raccord à la validation UX ML4 et suite de préparation (2026-11-07)

[Registre Figma 218–235](../../ux-ui/integration-git-ux-ml4.md) : Intégrations 218–224, Nora/projet 225–226, publication 227–231 et responsive 232–235 ; conception validée Morris. **La spécification technique reste DOCUMENTED / DRAFT, pas VALIDATED TECHNIQUEMENT.** GitHub App, permissions de l'acteur, D7, API/DB, version D4, conflits/ACK et preuve REAL devront être éprouvés à leur gate. Les maquettes ne produisent ni consentement ni commit/merge. Après merge documentaire ML4, qualifier puis mettre en œuvre la convergence UX du shell ML1–ML3 sous mandat distinct avant le code Git ML4 ; capturer la version Figma au début de la transposition.

## 13. Chat-first D4 — contrat proposition / splice / obs (AS-IMPLEMENTED local, 2026-11-09)

Sur candidat `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ) :

1. **Proposition documentaire (B)** — exactement une fence **autonome de premier niveau** dont le **premier token** d'info-string est exactement `sfia-document` (backticks ou tildes ; scanner de lignes). Une ouverture `sfia-document` **à l'intérieur** d'une fence illustrative (ex. `markdown`/`text`/tilde) n'est **pas** une proposition autonome — le scanner saute le bloc illustratif jusqu'à sa fermeture (ou EOF si non fermé) sans récupération silencieuse. À l'intérieur d'une proposition contractuelle, un stack conserve les fences internes (ex. `bash`) sans tronquer. Les tags `markdown`/`md`/`mdx`/`sfia-documentation` seuls n'autorisent pas D4. Narration hors fence. Absence, vacuité, non-fermeture ou multiplicités → `DOCUMENT_PROPOSAL_*` sans écriture. **Pas** de `fallback_wrap`.
2. **Splice section (A)** — `applyTargetedSectionRevision` préserve préfixe/suffixe hors cible octet-identiques ; si le corps extrait omet le NL terminal, un NL est ajouté **avant** le suffixe (le suffixe lui-même n'est pas réécrit). `assertSectionScope` reste actif.
3. **ACK (existant)** — `composeDocumentTurnMessage` reste la seule vérité transactionnelle visible.
4. **Observabilité (D)** — événement `d3.turn.document_proposal` : `extract_path`, `fence_count`, `proposal_chars`, `proposal_digest16`, `body_ends_with_nl`, `scope_verdict`, `refuse_code`, `d4_attempted`, `d4_effect` (pas de corps/prompt/secrets).

Preuve : DETERMINISTIC unit + PG DEV. LIVE Nora / USER RECETTE : NOT RUN.
