# SFIA Studio Next — Contrat fonctionnel candidat
## Dépôts Git du projet et conduite conversationnelle des opérations par Nora

| Champ | Valeur |
|---|---|
| Version | **0.2 — CANDIDATE / DOCUMENTED — 2026-11-21** |
| Objet | Contrat fonctionnel consolidé de consultation Git et des opérations documentaires conduites avec Nora |
| Autorité | Morris — arbitrages d'intention produit exprimés dans les échanges des 21 novembre 2026 |
| Référence produit | SFIA Studio Next / R5 / convergence ML4D / Ensemble 08 |
| Baseline de lecture | `mcleland147/sfia-workspace` — `main@fd04888b8dbf8d9393098d82546076e85b812bb1` |
| État local Cursor | **NON OBSERVÉ** |
| UX | [Figma page 11 — Dépôts Git, intégrations et consultation](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116) |
| Autorisation de publication documentaire | GO Morris pour créer une branche dédiée et y committer **ce candidat** ; **aucun GO PR, merge, main ou technique** |
| Effet | Aucun changement de runtime, d'API, de sécurité, de SEF, d'ADR ni de Roadmap |
| Statut visé | Proposition de contrat pour revue et approbation de contenu, **pas encore VALIDATED SPEC / IMPLEMENTED / ADOPTED** |

> **Lecture de statut.** Ce document capitalise les arbitrages fonctionnels exprimés par Morris, mais ne remplace ni la spécification R2 `integration-git-gouvernee.md` déjà VALIDATED SPEC, ni les décisions normatives applicables. Toute contradiction avec une décision de portée supérieure est un **écart à arbitrer**, non une dérogation implicite. Une création de branche et un commit ne constituent pas une promotion sur `main`.

## 0. Synthèse et évolution depuis le candidat v0.1

La cible a deux capacités utilisateur cohérentes : **(A) consulter les ressources Git d'un projet dans Studio** et **(B) demander à Nora d'agir sur Git et recevoir sa restitution dans le fil de travail**. Le Pilote ne doit pas être obligé d'utiliser un panneau de commandes techniques pour préparer, autoriser, publier, ouvrir une PR ou fusionner une PR.

Les précisions intégrées en v0.2 sont :

1. Un projet peut rattacher **plusieurs dépôts autorisés** ; aucun dépôt n'est imposé à l'ensemble de la session.
2. L'onglet **Dépôts Git** expose une arborescence sur une branche sélectionnée, un aperçu en lecture seule et une liste des **Publications Studio du projet**. Les vues sont distinctes mais réutilisent une même visionneuse.
3. Sélection de branche, y compris une branche distante non mergée ; fichier/aperçu/lien GitHub doivent utiliser la **même référence**.
4. Actions de visionneuse **Infos, Ouvrir sur GitHub, Agrandir** toujours accessibles dans l'en-tête. Disposition **30/70** en consultation desktop ; en agrandi, document central et détails contextuels à droite. Réemploi de la visionneuse Travail existante, sans en refaire le parcours.
5. **Nora reçoit l'intention → qualifie le contexte → mobilise les domaines propriétaires → attend/observe les résultats de Studio → reprend et restitue au Pilote**.
6. Une demande **claire, explicite et suffisamment déterminée** peut constituer le mandat utilisateur pour l'opération Git correspondante : **pas de confirmation redondante par principe**. Une ambiguïté bloquante est clarifiée avant tout effet qui en dépend ; les lectures et préparations sûres peuvent avancer.
7. Une capacité Git **livrée en RECETTE doit être REAL, disponible de façon durable et testable sans activation manuelle par test**. Ceci inclut le merge lorsqu'il est inclus dans le périmètre livré. Les contrôles d'identité, de branche, de permissions, d'autorité et de conflit restent permanents.
8. Les opérations Git actuellement bloquées, en particulier **merge REAL**, ne sont **pas** considérées comme implémentées ou livrées par cette décision fonctionnelle.

## 1. Sources, hiérarchie et périmètre

### 1.1 Sources canoniques lues sur `main`

Chemins relatifs à `projects/sfia-studio-next/` :

- `governance/SEF.md` — SEF v0.2, notamment §4, §6, §7 et §10.
- `governance/roadmap.md` — état R5 et gates ; les entrées historiques ne valent pas statut du HEAD courant.
- `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` — séparation Git documentaire Studio / technique Cursor ; merge distinctement autorisé.
- `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — propriété de domaines, preuve et gates.
- `governance/product-naming-conventions.md` — noms par responsabilité produit.
- `conception-fonctionnelle/integration-git-gouvernee.md` — R2 D9, RG-GIT et PF-GIT conservés.
- `ux-ui/methodologie-contrat-figma-cursor.md` — méthode Figma ↔ Cursor sur `main`.
- `construction/ml4-integration-git/specification-technique.md` — état historique, limites REAL et recettes associées.
- Code `web/src/` indiqué §3 et §12 ci-dessous.

**Figma** : page 11, index et écrans 11.01–11.07 / 11.13–11.16. Les frames 11.08–11.12 ont été retirées volontairement au profit de la conversation et de la visionneuse Travail déjà existantes. La page Figma est mutable ; toute future implémentation doit capturer les états et références natives au moment du contrat de transposition.

### 1.2 Résultat Pilote

Le Pilote doit pouvoir utiliser Nora et Documents sans Git ; connecter GitHub à son compte ; choisir les dépôts du projet ; parcourir dossiers et fichiers sur la branche souhaitée ; lire et agrandir un document ; retrouver les publications de Studio ; puis demander naturellement à Nora des opérations Git documentaires et recevoir les résultats vérifiés et liens associés.

### 1.3 IN / OUT

**IN —** Connexion/autorisation GitHub App, rattachements multiples par projet, retrait et déconnexion, branches, arborescence à la demande, aperçu Markdown/texte, métadonnées exactes, ouverture GitHub, publications Studio multi-dépôts, conduite conversationnelle des opérations **effectivement prévues au lot**, autorité D6, dispatch D7, preuves D8, erreurs et reprise, tests DEV/RECETTE avec effets REAL.

**OUT —** Deuxième GitHub, clone permanent, synchronisation bidirectionnelle implicite, éditeur de code distant dans l'explorateur, gestion graphique des branches/PR/merge, marketplace, moteur Git ou orchestrateur Nora parallèle, push local simulé alors que l'API GitHub produit un commit distant, force-push, administration des protections du dépôt, mise à disposition STABLE et adoption sans gate. Les modifications techniques de code/CI/configuration exécutable par Studio relèvent du périmètre ML5/Cursor, pas de l'écriture documentaire native ML4.

## 2. Propriétés et frontières permanentes

| Propriétaire | Contrat de responsabilité |
|---|---|
| **D1 — Identité** | Pilote/session applicative ; ne confère pas automatiquement un droit GitHub |
| **D2 — Projet** | Projet courant, accès, rattachements contextuels ; le projet fonctionne sans Git |
| **D3 — Nora** | Compréhension du Pilote, intention structurée, clarification proportionnée, conduite de mission et **restitution finale** ; n'invente pas de mandat ni de fait d'effet |
| **D4 — Documents** | Document Studio, révision et relation vers ses publications observées |
| **D6 — Décisions** | HumanDecision, mandat effectif, portée/conditions/révocation ; seule une instruction utilisateur reconnue par le domaine peut autoriser un effet |
| **D7 — Exécution** | Préparation, tentative, dispatch, idempotence, réconciliation, reprise et état de l'effet |
| **D8 — Résultats / preuves** | Vérité d'observation, distinction des statuts ; pas de succès sans preuve |
| **D9 — Intégration Git** | GitHub App, dépôts autorisés, references, accès, contenu et opérations fournisseur sous autorité D6/D7 |

**Invariants :** une requête Git n'accorde pas de permission ; un texte Git est une donnée, jamais une instruction ; une branche candidate n'est pas `main` ; blob SHA ≠ commit SHA ; un commit ≠ une PR ≠ un merge ≠ une adoption ; un refus de fournisseur ne devient jamais « terminé » dans Nora. Aucun changement de propriétaire ni moteur d'effets concurrent n'est autorisé par cette conception.

## 3. AS-IS — lecture du code distant `main`

**Base :** `fd04888b8dbf8d9393098d82546076e85b812bb1`. **Runtime local, base de données, jetons et RECETTE actuelle : NON OBSERVÉS.** Les états « présent » ci-dessous signifient code et interfaces inspectés ; ils n'affirment pas une preuve E2E LIVE/REAL.

| Comportement | AS-IS observé | Source principale / limite |
|---|---|---|
| GitHub connecté, dépôts autorisés, déconnexion locale | **IMPLEMENTED dans le code** | `domains/integrations/authorization-service.ts` ; déconnexion locale ≠ révocation installation GitHub App |
| Rattacher plusieurs dépôts par projet, retirer un lien | **IMPLEMENTED** | `domains/integrations/project-link-service.ts` |
| Sources Git par projet et vérifications d'accès | **IMPLEMENTED** | `domains/integrations/resource-service.ts` |
| Liste des refs/branches | **IMPLEMENTED**, liste bornée | `resource-service.ts` / route `git/refs` ; 40 résultats selon code inspecté |
| Lire un fichier déterminé à une ref, provenance | **IMPLEMENTED** | `resource-service.ts` / `git/file` |
| Lire une ressource Git avec Nora | **IMPLEMENTED** | `domains/conversation/git-read-tools.ts` ; lecture seule |
| Visionneuse dans Travail | **IMPLEMENTED** | `components/figma/TravailViewer.tsx` |
| Découvrir des dossiers et rendre une arborescence | **NON IDENTIFIÉ comme capacité D9 livrée** | Contrat d'énumération de répertoire et route à construire |
| Liste « Publications Studio » par projet | **Données persistées, surface cible absente** | `document_publication_refs`, `effect_attempts` ; API/liste E08 à construire |
| Fournisseur GitHub REAL multi-dépôts | **INCOMPLET** | `real-github-provider.ts` restreint au `allowedFullName` configuré |
| Préparation publication documentaire / HumanDecision | **IMPLEMENTED** | `domains/execution/effect-service.ts` : plan inspecté/fingerprint, `authorizePublication` et `insertHumanDecision` |
| Git documentaire REAL | **CONDITIONNEL** | `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` requis ; branche/écriture/PR bornées |
| Merge GitHub REAL | **NON DISPONIBLE sur `main`** | `real-github-provider.ts` : `mergePullRequest` refuse systématiquement |
| Nora : intention, missions D4 et suite D7 | **PARTIELLEMENT IMPLEMENTED** | `conversation/service.ts`, `intent-conduction.ts`, `mission-continuity.ts` |
| Reprise de publication après autorisation | **IMPLEMENTED dans le cas Nora borné** | `resumeMissionAfterPublicationAuthorize` : dispatch/réconciliation, continuation cognitive et restitution persistée |
| Reprise après interruption | **BOURNÉE aux événements nominaux** | `recoverAuthorizedNoraMissions` appelée notamment depuis D3 ; pas de scheduler universel |
| Demande Git claire directement autorisante | **ÉCART** | `authorizePublication` attend un acte D6 et l'empreinte d'inspection ; Nora passe par `AWAITING_PILOT_AUTH` |
| Nora capable d'agir sur toute mutation Git demandée | **NON ÉTABLI** | Outils Nora directs en lecture ; actes par domaines propriétaires, contrats selon capacité |

**Lecture critique :** le schéma D3 → domaines → faits → D3 **existe déjà**. Il ne faut ni le remplacer ni proclamer qu'il couvre tous les actes Git et toutes les reprises. L'écart E08 porte sur sa complétude, l'autorité conversationnelle et le périmètre REAL du fournisseur.

## 4. TO-BE — architecture logique sans moteur parallèle

### 4.1 Lecture Git

**UI Dépôts Git → contrôle session/projet D1/D2 → service ressource D9 → GitHub REAL → provenance fiable → visionneuse UI.**

L'état de navigation comporte le dépôt actif, la ref choisie, le chemin et la sélection de fichier. Il peut rester transitoire côté UI : aucune migration DB ne doit être créée sans besoin métier supplémentaire.

### 4.2 Opérations Git via Nora

**Pilote → Nora D3 (intention/contextualisation) → services propriétaires D4/D6/D7/D9 → observations D8 → reprise Nora D3 → réponse globale au Pilote.**

Nora ne renvoie pas le Pilote vers un cockpit technique pour réaliser les étapes ; elle ne répond pas « Studio te fera son retour » en abandonnant sa mission. La réponse finale à la même demande est produite par Nora depuis les faits reçus.

Pour une opération longue, la mission peut passer par un état d'attente corrélé et une reprise durable **si le mécanisme est réellement disponible** ; aucune exécution asynchrone universelle n'est présumée. Si une reprise n'est pas garantie, l'état est explicite et le prochain événement nominal ne doit ni perdre les faits ni rejouer un effet achevé.

### 4.3 Réemploi prioritaire

- D9 conserve l'identité fournisseur et ajoute une lecture de dossiers **à la demande**.
- D4 fournit les références de publication du projet depuis les tables existantes.
- D3 étend `intent-conduction` / `mission-continuity` et la qualification sémantique, sans second agent ni second ordonnanceur.
- D6 reconnaît/enregistre un mandat issu d'une demande explicite avec objet, cible et conditions D7 déterminés.
- D7 garde un unique chemin prepare → authority → dispatch → reconcile.
- D8 reste la source de vérité sur les résultats distants.
- UI réutilise shell, tokens, panneau contextuel et visionneuse ; pas de remplacement de Travail.

## 5. Contrats fonctionnels — espace de consultation

Les identifiants CF-GIT servent à tracer ce candidat, **sans renuméroter ni remplacer** les RG-GIT / PF-GIT R2.

| ID | Capacité / résultat | Contrat attendu | Sources / écart |
|---|---|---|---|
| **CF-GIT-01** | Connexion personnelle | État réel de GitHub, dépôts autorisés, actualisation/déconnexion ; aucun lien automatique vers les projets | Réemploi D9/Intégrations ; alignement UX |
| **CF-GIT-02** | Rattacher | Chaque projet associe 0..N dépôts autorisés, sans création de repo, branche ou PR | Réemploi `project-link-service` |
| **CF-GIT-03** | Retirer | Confirmation du retrait **du projet seulement** ; connexion, dépôt distant, historique des preuves conservés | Réemploi service + UX |
| **CF-GIT-04** | Changer de dépôt | Change le contexte de lecture ; réinitialise les données périmées et revient à une ref valide | UI et orchestration |
| **CF-GIT-05** | Sélectionner une branche | Départ sur ref par défaut ; branches distantes non fusionnées accessibles ; arborescence, fichier, détails et URL cohérents avec ref exacte | `listGitRefs` + sélecteur 11.03 + tests |
| **CF-GIT-06** | Arborescence | Énumération bornée de dossiers/fichiers, chargement à la demande, aucune copie locale persistante | **Nouveau contrat D9** + API + UI |
| **CF-GIT-07** | Lire fichier | Aperçu Markdown/texte sûr ; binaires, tailles excessives, 404 ambigus gérés explicitement | Réemploi `readGitFile` / visionneuse |
| **CF-GIT-08** | Infos fichier | Nom, path, repo, ref, type et provenance ; taille/commit/SHA uniquement si réellement récupérés et qualifiés | UI + enrichissement ciblé |
| **CF-GIT-09** | Lecture agrandie | Desktop 30/70 liste/aperçu ; agrandi = lecture centrale/détails droite ; réduction sans perte de contexte | Réemploi convention Travail et Figma 11.03–11.05 |
| **CF-GIT-10** | GitHub externe | « Ouvrir sur GitHub » en haut, à côté d'Infos et de l'icône Agrandir ; permalien uniquement si commit SHA vérifié | Lien de provenance D9 |
| **CF-GIT-11** | Publications Studio | Liste **de tout le projet**, tous dépôts confondus, révision D4 ↔ dépôt/branche/path/commit/PR/merge vérifiés | Tables existantes ; service de lecture/UI à construire |
| **CF-GIT-12** | Déconnecter GitHub | Confirmation ; nouvelles lectures/écritures suspendues, documents et références historiques conservés ; ne pas annoncer une révocation GitHub distante si non faite | Réemploi D9 + états UX |

### 5.1 Branche et cohérence d'un aperçu

La ref sélectionnée n'est pas un simple libellé. Pour chaque navigation, le service qualifie dépôt + ref + path. Si une branche disparaît ou que son HEAD change, la réponse indique la référence effectivement utilisée. Une lecture qui retourne un statut incertain ne permet pas de conclure que le fichier n'existe pas. Pour une URL exacte, construire le permalien depuis un commit vérifié, jamais depuis un blob SHA.

La limite actuelle de 40 refs exige un état de limitation et, si utile, une recherche bornée côté fournisseur pour les dépôts riches en branches.

### 5.2 Publications Studio distinctes de l'explorateur

**Fichiers du dépôt** : contenus distants réellement accessibles à la branche choisie. **Publications Studio** : objets D4 publiés depuis ce projet, y compris sur plusieurs dépôts et indépendamment du dépôt actif. L'écran 11.04 doit afficher clairement « Toutes les publications du projet », ou qualifier un filtre par dépôt ; il ne doit pas suggérer un périmètre trompeur.

Un élément peut rester dans l'historique après révocation des droits ou retrait du repo. Son **fait historique** ne vaut pas droit de lecture actuel ; afficher explicitement « source inaccessible » plutôt que supprimer l'historique ou montrer un aperçu obsolète comme courant.

## 6. Contrat Nora — clarté, autorité et mission

### 6.1 Qualification d'une demande

Nora examine la demande **et le contexte disponible** : projet actif, dépôt(s) rattaché(s), document/révision sélectionnés, conversation, branche, chemin proposé, règles et permissions.

- **Claire, explicite et cible déterminable :** poursuivre, sans confirmation redondante.
- **Paramètre accessoire manquant mais déductible sans risque matériel :** compléter selon contrat déterministe et faire apparaître la cible retenue dans les faits restitués.
- **Ambiguïté matérielle** (plusieurs dépôts sans choix fiable, document incertain, merge ciblé ambigu, conséquences non déterminées) : question ciblée **avant tout effet dépendant**.
- **Partie de demande non ambiguë et sans mutation :** consulter/préparer ce qui reste sûr, sans effectuer l'effet bloqué.
- **Permissions absentes / fournisseur refusé :** expliquer l'impossibilité, sans annoncer un résultat fictif.

Exemple : « Publie ce document sur une nouvelle branche du repo ». Un seul dépôt rattaché et un document D4 identifié peuvent suffire. Avec plusieurs dépôts et aucune cible établie dans le contexte, Nora demande « Sur quel dépôt ? ». Ne pas imposer automatiquement un path exact si un emplacement documentaire conventionnel déterminable a été explicitement accepté dans le contrat ; tout path déduit doit rester inspectable, contrôlé et lié au mandat.

### 6.2 Autorité D6 issue de la conversation

**Arbitrage d'intention Morris :** l'expression explicite d'une demande d'action peut valoir autorisation utilisateur **pour l'effet précisément demandé**, à condition que D6 la reconnaisse et l'enregistre valablement. Le raisonnement de Nora seul n'est jamais une HumanDecision.

L'adaptation requise doit permettre aux services propriétaires de :

1. Capturer l'acte explicite du Pilote, son message/identité/projet et la capacité demandée.
2. Résoudre la proposition vers un plan exact : dépôt, révision, cible, branche, chemin, base/HEAD, diff, effet et risque.
3. Vérifier que **le plan effectivement exécutable reste dans le mandat exprimé**, et qu'il n'y a pas d'ambiguïté matérielle ni de changement de portée.
4. Persister une HumanDecision D6 applicable avec les empreintes/conditions et la corrélation vers la tentative D7.
5. Recontrôler droits, restrictions, revocation, currentness et fingerprint **au point d'effet**.
6. Exécuter seulement dans l'enveloppe valable ; demander une clarification ou une nouvelle autorisation conversationnelle si l'enveloppe dérive.

Aucun « auto-GO » caché du modèle ; aucune confirmation artificielle non plus si le message Pilote vaut déjà mandat. **L'absence de bouton d'autorisation dans l'UX ne retire pas D6 ni le contrôle d'inspection.**

### 6.3 Commit / PR / merge : opérations distinctes

Une demande « crée une branche, publie ce document et ouvre une PR vers main » peut porter explicitement sur toute cette séquence si son périmètre est déterminé et autorisable.

Une demande « publie ce document » **n'autorise pas implicitement le merge**. Une demande ultérieure « merge la PR 675 » constitue une intention distincte qui peut, si déterminée et valide, être reconnue comme le **mandat distinct** requis par D6 : cela ne justifie pas un bouton supplémentaire ou un second accord automatique.

Le merge vérifie toujours PR, head/base, restrictions GitHub, permissions, références et absence de conflit. La source contractuelle R2 et la décision de trajectoire conservent l'exigence de séparation des actes.

### 6.4 Continuité et restitution intégrée

États logiques de mission à conserver/reconstruire depuis les propriétaires :

- intention reçue/qualifiée ;
- préparation effectuée ou clarification nécessaire ;
- mandat applicable ou manquant ;
- exécution en cours ;
- effet observé / échec / conflit / ambigu ;
- reprise cognitive avec faits ;
- message final délivré et historisé.

Une mission peut mobiliser plusieurs domaines ; elle n'est pas « terminée » au seul retour d'un des services. Le Pilote reçoit **une réponse Nora globale**, avec ce qui a effectivement été fait, ce qui reste à faire et les liens disponibles. La reprise après résultat D4 et l'après-autorisation D7 déjà présents doivent être étendus et testés sans nouveau moteur.

En interruption, l'effet prouvé est conservé ; la restitution peut être reprise sans double écriture et sans prétendre qu'une opération inconnue est achevée. Le contrat doit prouver les événements de reprise disponibles en RECETTE ; pas de promesse abstraite d'orchestration en arrière-plan.

## 7. Contrat opérationnel DEV / RECETTE / STABLE

### 7.1 Décision de cible fonctionnelle

**RECETTE :** toute capacité Git comprise dans la livraison candidate et déclarée prête à tester doit **être activée et utilisable réellement dès la mise à disposition**. Ni bouton caché de déblocage, ni manipulation manuelle répétée de variables d'environnement, ni simulation SCRIPTED présentée comme REAL. Le caractère continu porte sur la **configuration de l'environnement livré**, pas sur une autorisation illimitée de l'utilisateur.

**DEV :** activation bornée possible selon les besoins de construction, avec isolations, permissions et preuves adaptées.

**STABLE :** disponibilité seulement après gates Morris, qualification, protections, déploiement, rollback et autorisation de promotion ; pas de déduction automatique depuis une RECETTE passée.

### 7.2 Périmètre et preuve de disponibilité

| Opération du lot livré | Obligation lors de mise à disposition RECETTE |
|---|---|
| Lecture de branche/fichier | GitHub REAL, droits réels, état/version/relecture vérifiables |
| Créer branche documentaire | Effet distant réel sur dépôt de recette éligible et preuve de ref |
| Publier/committer fichier documentaire | Commit distant réel observé, révision D4 corrélée, idempotence |
| Ouvrir PR | PR réelle, cible/base/numéro vérifiables |
| **Merge si inclus dans le lot livré** | Fusion GitHub REAL possible et prouvée sur PR éligible, refus correct des protections/conflits |
| Reprise Nora | Résultat réel restitué dans le fil, sans deuxième action technique du Pilote |

Le déploiement ne peut annoncer une capacité READY si la configuration ou le fournisseur l'interdit globalement. Un test de préflight doit vérifier identité GitHub App, autorisations, capacité REAL effective, dépôt sandbox, branche éligible et observabilité D8. Les restrictions de branches et permissions sont des **contrôles permanents**, pas des flags à désactiver pour tester. Un STOP d'urgence et un rollback restent possibles et traçables.

### 7.3 Écart AS-IS critique

Sur le code actuel :

- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` est requis pour les mutations documentaires REAL ;
- `mergePullRequest` est **hard-blocked** sans condition ;
- le fournisseur est limité par `allowedFullName` ;
- Nora n'est pas encore capable de conduire toute opération Git REAL du périmètre cible depuis une demande simple.

**TO-BE :** faire évoluer le contrôle de déploiement pour qu'une RECETTE candidate démarre avec les capacités livrées réellement actives ; implémenter et prouver le merge **si le lot l'annonce**. Tant que ce n'est pas fait, la recette de ces capacités est **NOT READY**, et non « disponible après activation à la demande ».

Il s'agit d'un contrat futur : aucune variable, protection ou code n'est modifié par ce document.

## 8. Services/APIs candidats et propriétés

Les routes suivantes sont des interfaces de conception et **non des endpoints déjà livrés**, sauf mention de réemploi explicite.

| Interface | État | Responsabilité |
|---|---|---|
| `GET /api/integrations/status` et gestion GitHub | Réemploi | D9 — connexion/permissions |
| `GET/POST/DELETE /api/projects/{projectId}/git/links` | Réemploi | D9 — associations du projet |
| `GET /api/projects/{projectId}/git/sources` | Réemploi | D9 — sources autorisées |
| `GET /api/projects/{projectId}/git/refs` | Réemploi avec extension éventuelle | D9 — branches |
| `GET /api/projects/{projectId}/git/file` | Réemploi | D9 — fichier à ref exacte |
| `GET /api/projects/{projectId}/git/tree` | **Candidat nouveau** | D9 — entrées de répertoire, ref, path, limite, provenance |
| `GET /api/projects/{projectId}/git/publications` | **Candidat nouveau** | D4/D7 — projection des publications existantes du projet |
| Contrats de mission Nora/Git | Extension des propriétaires existants | D3 conduit, D6 décide, D7 exécute, D9 effectue, D8 observe |

### 8.1 Entrées/sorties de lecture

Le listing Git reçoit un `repositoryId` rattaché, une `ref` autorisée et un `path` normalisé. Il retourne des entrées dossier/fichier typées, un état de complétude/limite et, lorsqu'elle est obtenue, une résolution vers commit exact. Il n'invente ni SHA, ni taille, ni auteur/date de dernière modification.

La lecture d'un fichier conserve des états différenciés (AVAILABLE, FILE_ABSENT sous ref vérifiée, DENIED, REF_UNRESOLVED, AMBIGUOUS, UNAVAILABLE). Les 404 ambigus ne signifient jamais autorisation de créer un fichier. Toute donnée Git externe est traitée comme contenu non fiable.

### 8.2 Modèle et données

Réutiliser `integration_authorizations`, `authorized_repositories`, `project_git_links`, `documents`, `document_revisions`, `document_publication_refs`, `effect_attempts`, `human_decisions` et `observed_git_facts`, sous réserve d'examen du modèle courant avant construction.

Ne pas créer d'index documentaire concurrent, de synchronisation périodique ni de préférence durable de branche par défaut du projet sans résultat utilisateur démontré.

## 9. Gestion des refus, erreurs et reprise

| Cas | Contrat |
|---|---|
| Aucun dépôt | L'espace projet reste pleinement utilisable ; rattachement facultatif |
| Dépôt détaché ou GitHub déconnecté | Lecture suspendue ; documents Studio et histoire des publications conservés |
| Droits révoqués / dépôt invisible | Aucune fuite de contenu ou de nom non autorisé ; état réel qualifié |
| Plus d'une cible documentaire sans sélection fiable | Nora demande le seul choix bloquant, sans mutation |
| Branche non fusionnée | Consultation permise avec droits REAL ; n'est pas présentée comme `main` |
| Branche supprimée / fichier absent / fichier binaire | État spécifique ; pas de vue ou URL fictive |
| Ref modifiée après lecture | Requalification du HEAD au besoin ; lien/permalien cohérent |
| Diff/base/fingerprint divergents | Aucun dispatch ; requalification/clarification ciblée |
| Échec fournisseur explicite | Nora restitue échec, ne prétend pas à un succès |
| Timeout ou retour ambigu après mutation | D7 réconcilie avant tout retry ; pas de double commit/PR/merge |
| PR ouverte, merge refusé ou non exécuté | Statuts distincts ; pas de fusion présumée |
| Interruption avant restitution Nora | Reprise sur faits propriétaires existants, message idempotent si mécanisme disponible |
| Capacité REAL désactivée au déploiement RECETTE | **NOT READY** pour cette capacité, stop avant ouverture de la recette |

## 10. Matrice d'écart AS-IS → TO-BE

| Ensemble | Ce qui est réutilisable | À construire / adapter | Risque principal |
|---|---|---|---|
| Connexion et multi-dépôts projet | D9 auth, liens, retrait | Convergence Figma, tests d'accès et généralisation fournisseur REAL | Allowed repo mono-cible |
| Choix de branche | refs D9 | Sélecteur dynamique, limite/search, gestion de currentness | État fichier périmé |
| Explorateur | `readGitFile` | Listing dossiers D9, UI arborescence, erreurs/limites | Chemins et droits |
| Aperçu/infos | Visionneuse Travail, Markdown | Composition Dépôts Git, provenance et agrandi | Régression UX ; URLs incorrectes |
| Publications Studio | Tables et effet D7 | Projection par projet, multi-dépôts, statut et indisponibilité | Confusion historique/current |
| Conduite Nora | `intent-conduction`, `mission-continuity`, D4/D7 | Qualification contextuelle, autorité conversationnelle, reprise et restitution Git complète | Double effet ou réponse prématurée |
| Mutations Git REAL | Branche/commit/PR documentaires bornés | Généralisation autorisée, préflight RECETTE permanent, merge REAL si livré | Permissions et protections |
| Preuves/gates | Journaux D7, faits D8 et tests historiques | Recette E08 navigateur + API/DB + GitHub REAL + Nora LIVE | Confusion scripted/REAL |

## 11. Acceptation fonctionnelle et preuve

### 11.1 Scénarios A — Consultation

| ID | Scénario et verdict attendu |
|---|---|
| A01 | Projet sans Git : Nora/Documents restent opérationnels |
| A02 | GitHub connecté : seuls les dépôts effectivement autorisés sont listés |
| A03 | Deux dépôts rattachés à un projet : aucune association globale à la session |
| A04 | Retrait d'un dépôt : autre lien et fichiers distants inchangés, preuves conservées |
| A05 | Changement de dépôt : contenu/arborescence anciens invalidés |
| A06 | Sélection `main` puis branche candidate non mergée : contenu réellement distinct si les branches diffèrent |
| A07 | Fichier Markdown consulté, infos et lien GitHub cohérents avec la référence |
| A08 | Vue 30/70, mode agrandi et réduction sans perte de contexte |
| A09 | Publications Studio de plusieurs dépôts sur le même projet ; statuts Git exacts |
| A10 | GitHub déconnecté : pas de lecture distante, historique et documents conservés |
| A11 | Ref supprimée, 404 ambigu, binary et permission denied : aucun contenu inventé |
| A12 | Responsive 1280 / 390, accessibilité clavier et conformité Figma pertinente |

### 11.2 Scénarios B — Nora, autorité et opérations

| ID | Scénario et verdict attendu |
|---|---|
| B01 | « Publie ce document sur une nouvelle branche » avec cible unique → mandat borné reconnu sans second clic |
| B02 | Deux dépôts sans cible contextualisée → Nora demande lequel, pas de mutation |
| B03 | Plan hors périmètre du mandat ou diff divergent → requalification avant effet |
| B04 | D4 crée/révise, D7 publie, D9 prouve, D3 reprend et restitue le résultat dans le fil |
| B05 | Branche + commit + PR REAL réellement créés en RECETTE lorsque ces capacités sont livrées |
| B06 | « Merge PR 675 » → opération distincte autorisée par D6 si déterminée, REAL si livrée et permise, refus prouvé sinon |
| B07 | Demande « publie » seule → **aucun merge implicite** |
| B08 | Échec Git, droits insuffisants ou branche protégée → Nora fournit une restitution exacte et actionnable |
| B09 | Interruption après effet mais avant restitution → reprise sans seconde mutation |
| B10 | Préflight RECETTE de toutes les capacités annoncées → pas de blocage par flag manuel ni de mock présenté comme REAL |

### 11.3 Niveaux non interchangeables

1. **DOCUMENTED** : ce contrat est écrit.
2. **VALIDATED SPEC** : Morris valide son contenu et ses arbitrages après revue.
3. **IMPLEMENTED** : le code correspondant est intégré dans la référence Git attendue.
4. **COVERAGE VERIFIED** : tests, CI et matrices de scénarios contrôlés.
5. **BEHAVIOR PROVEN** : captures runtime à viewport pertinent, parcours réels, GitHub REAL et Nora LIVE sur les scénarios demandés.
6. **ADOPTED** : promotion décidée distinctement après les gates de gouvernance.

Une preuve déterministe ne remplace jamais une preuve GitHub REAL ; une capture Figma ne prouve ni API ni sécurité ; une PR ouverte ne constitue pas un merge.

## 12. Contrats d'architecture et preuves à produire avant Cursor

À qualifier conjointement dans le macro-lot de construction :

- Blast radius : API, données, identité GitHub App, contrôle de dépôt, D3/D6/D7, UI, security, tests.
- Contrat d'énumération Git : profondeur, pagination, taille, limite des branches, résolution ref/commit, cache/invalidation.
- Multi-dépôts GitHub REAL : permissions par installation et par utilisateur, sans extension implicite de privilège.
- Mandat conversationnel : qui qualifie le message, quelle preuve utilisateur D6 stocke, comment l'empreinte lie le mandat au plan, quel événement relance D3.
- Merge REAL : protection des branches, identité exécutrice, refus, conflits, expectedHeadSha/expectedBaseSha, et observation effective.
- REST/API : formes de requêtes et réponses, auth, erreurs typées, idempotence, retries bornés.
- UI : extraction MCP Figma page 11, mapping nœuds → composants existants, captures et géométrie de référence.
- DEV/RECETTE : configurations séparées, dépôts sandbox, préflight réel, preuves reproductibles, rollback.
- Code/doc : tout changement du comportement doit mettre à jour la documentation technique actuelle dans **le même lot**.

## 13. Macro-lot et gates proposés

**Un objectif cohérent : « Accéder aux sources Git et publier via Nora en RECETTE réelle ».** Deux capacités complémentaires dans un macro-lot, avec intégration et vérifications communes.

**Capacité A — Consulter.** GitHub/associations/branches/arborescence/visionneuse/publications/erreurs, avec preuve Figma ↔ navigateur ↔ GitHub REAL READ.

**Capacité B — Agir avec Nora.** Qualification, autorité conversationnelle D6, opérations D7/D9 couvertes, restitution D3 et preuves D8 ; tests de concurrence, reprise, refus, et REAL write/merge selon périmètre livré.

Ordre possible : preuve de consultation et contrats de ressources puis conduite et effets conversationnels ; ne pas découper code, tests et documentation de façon artificielle. Le lot n'autorise ni module redondant ni migration sans besoin.

**Gates :**
- Morris valide le présent contenu pour passer à **VALIDATED SPEC**, avec arbitrages fins si nécessaires.
- Pré-check Git/branche/HEAD et architecture courante.
- Contrat de construction Cursor selon SFIA v2.6, distinct du GO de publication documentaire.
- Tests de propriété, sécurité, D6/D7/D8 ; non-régression D4 et Nora.
- Mise à disposition RECETTE seulement avec préflight et capacités annoncées **REAL ON**.
- Réception par Morris, puis PR/merge, promotion ou adoption sous GO distinct.

## 14. Arbitrages résiduels et points de STOP

| Point | Position candidate | Gate / STOP |
|---|---|---|
| Mandat conversationnel | Une demande explicite peut suffire quand le plan concret reste dans sa portée ; pas de confirmation systématique | Si changement matériel d'enveloppe, clarification avant effet |
| Merge | Séquence distincte, demande explicite pouvant être le mandat ; REAL disponible lorsqu'annoncé livré en RECETTE | Bloqué tant qu'il est absent du fournisseur REAL ou non qualifié |
| Références de branche | Branches distantes accessibles, pas de branche locale | Impossible d'utiliser une ref non existante |
| Publications Studio | Liste de **tout le projet** et non du seul dépôt actif | Alignement final Figma 11.04 à qualifier |
| Path documentaire implicite | Déduction seulement si déterminable sans ambiguïté et bornée au mandat | Sinon clarification ciblée |
| D3↔D7 reprise | Réemploi de la mission actuelle, pas de nouveau scheduler | Preuve d'absence de double effet |
| Disponibilité RECETTE | Activée par livraison et vérifiée au préflight ; pas d'activation par essai | Si REAL unavailable → **NOT READY**, pas de recette factice |
| Autorité documentaire | Ce document candidat est publié pour revue, sans force normative définitive | Approbation de contenu Morris avant VALIDATED SPEC |

## 15. Verdict et suite immédiate

**État de cette contribution : DOCUMENTED — CONTRACT CANDIDATE.**

La trajectoire est techniquement plausible avec un noyau existant substantiel. L'architecture actuelle est déjà organisée autour de D3, des propriétaires, de la continuation de mission et d'une chaîne de publication documentaire gouvernée ; l'enjeu est de **compléter et éprouver**, non de reconstruire Nora.

**Écarts les plus structurants :**
1. Mutation Git REAL multi-dépôts et merge REAL (hard-blocked actuellement).
2. Autorité conversationnelle D6 liée au plan et à la demande utilisateur sans confirmation répétitive.
3. Continuité effective D3 de la mission Git, preuve de restitution et de reprise.
4. Listing des répertoires, publications Studio et expérience de consultation conformes à Figma 11.

**Suite :** revue Morris du contrat, synchronisation du dernier libellé Figma 11.04, qualification technique et contrat Cursor borné. **Aucun GO code, PR, merge, déploiement RECETTE, STABLE, ML5 global ou ADOPTED** n'est inféré de ce document.

---

## 16. Traçabilité code et preuves

Principaux chemins examinés sous `web/src/` :

- `domains/conversation/nora-adapter.ts` — guidance et outils Nora lecture, sans write Git direct.
- `domains/conversation/service.ts` — qualification, effet D4, suivi publication et continuation cognitive.
- `domains/conversation/intent-conduction.ts` — contrats de capacités et continuation transversale.
- `domains/conversation/mission-continuity.ts` — préparation publication, `AWAITING_PILOT_AUTH`, reprise après autorisation, réconciliation et restitution.
- `domains/integrations/authorization-service.ts`, `project-link-service.ts`, `resource-service.ts`, `github-provider.ts`, `real-github-provider.ts` — fournisseur, permissions, liens, refs et REAL.
- `domains/execution/effect-service.ts` — plan, fingerprint, HumanDecision, effet et réconciliation.
- `components/integrations/IntegrationsPanel.tsx`, `PublicationInspectionPanel.tsx` — UI historique non cible de conduite Git.
- `components/figma/TravailViewer.tsx` — visionneuse à réutiliser.
- `db/schema.ts` — données de publication et faits.
- `construction/ml4-integration-git/` — preuves historiques, sans prétention à la couverture E08.

**Provenance de l'AS-IS :** `main@fd04888b8dbf8d9393098d82546076e85b812bb1`, non-équivalent à une inspection du runtime local. **Vérité de la cible UX :** Figma page 11 approuvée dans l'échange, à figer par extraction MCP au gate technique.

*Fin — Contrat fonctionnel candidat v0.2.*
