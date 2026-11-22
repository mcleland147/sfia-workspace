# SFIA Studio Next — Ensemble 08
## Contrat d'architecture et d'acceptation — Dépôts Git, publications et conduite de Nora

> **État d'exécution actualisé le 22/11/2026 :** les statuts et écarts AS-IS de ce dossier restent historiques. Lire l'**addendum §17** pour l'architecture candidate réalisée, les preuves, les réserves et les gates actuels.

| Champ | Qualification |
| --- | --- |
| Version | **v0.1 — 21 novembre 2026** |
| État de ce document | **DOCUMENTED — ARCHITECTURE / ACCEPTANCE CANDIDATE — REVIEW REQUIRED** |
| Nature | Proposition d'architecture de construction et d'acceptation à soumettre à Morris ; **aucune autorité normative nouvelle par publication** |
| Programme | SFIA Studio Next — R5 / ML4D / Ensemble 08 |
| Résultat Pilote | Consulter Git dans le projet ; demander à Nora les opérations Git prévues ; recevoir leur résultat vérifié dans la même conversation |
| Source fonctionnelle | [Contrat fonctionnel E08 v0.2 candidat](../../conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md) |
| Référence visuelle | [Figma page 11 — Ensemble 08](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116), avec réemploi Travail page 05 |
| Dépôt | `mcleland147/sfia-workspace` — `projects/sfia-studio-next/` |
| Baseline de code examinée | `main@1dd1a8ec738edb7851e2ec290769082035c1b657`, code déjà présent à `fd04888b8dbf8d9393098d82546076e85b812bb1` |
| Branche documentaire E08 | `docs/next-ensemble08-contrat-fonctionnel-20261121`, initialement `94cddf918d9481cb66c3418715e4df3bb87a41ae` |
| Dérive Git connue au pré-check | Branche E08 : **ahead 1 / behind 3** par rapport à `main` avant ajout du présent document ; **aucun rebase/merge autorisé** |
| Git local Cursor / runtime DEV–RECETTE | **NON OBSERVÉS** |
| Publication | GO Morris borné à ce document candidat sur la branche E08 existante ; **sans GO code, DB, CI, PR, merge ou promotion** |

> **Contrat d'évaluation.** Morris valide la valeur métier, l'expérience Pilote et les arbitrages structurants ; ChatGPT apporte l'analyse et challenge les choix ; Cursor devra vérifier l'exécutabilité technique, les effets et les preuves sous mandat SFIA v2.6. Le présent candidat ne modifie ni le SEF, ni un ADR, ni la spécification R2 déjà approuvée, ni la politique ENV-01. En cas d'incompatibilité normative, appliquer un **STOP de conception** jusqu'à décision Morris D2, pas une correction implicite de doctrine.

---

## 0. Synthèse exécutable pour la revue

### 0.1 Les cinq résultats non négociables

1. **Git facultatif** : le projet, Nora et les Documents fonctionnent sans connexion GitHub ni dépôt.
2. **Consultation légère** : un projet rattache 0..N dépôts accessibles ; le Pilote choisit dépôt et branche, parcourt les dossiers et lit un fichier dans une visionneuse 30/70 ; la sélection de branche accepte les refs distantes non mergées. Les publications Studio sont retrouvables à l'échelle **du projet entier**.
3. **Nora comme interface des opérations** : aucune succession de boutons « préparer / inspecter / autoriser / publier / demander fusion » dans l'espace Git ; les demandes de branche, publication, commit distant, PR et merge passent par **la conversation**, et les résultats y reviennent.
4. **Autorité proportionnée et opposable** : une demande explicite et déterminée du Pilote peut suffire comme acte de mandat après qualification serveur ; le modèle ne crée jamais de HumanDecision. Clarifier seulement l'ambiguïté qui empêche un effet sûr ; les contrôles D6/D7/D9 ne sont jamais désactivés.
5. **RECETTE utilisable en REAL** : si une capacité Git est annoncée livrée au Pilote en RECETTE, elle fonctionne en GitHub REAL dès la mise à disposition sur sandbox autorisée, avec sa configuration durable ; **pas d'activation par essai**. Si le merge est inclus, il doit être réellement disponible et prouvé sur PR éligible. Sinon : **NOT READY**, non pas « à activer à la demande ».

### 0.2 Verdict AS-IS

Les fondations existantes sont significatives : D9 sait gérer GitHub App, les permissions, les liens multi-dépôts, les références et les fichiers ; D4/D7 conservent les publications ; D3 possède une qualification sémantique et des mécanismes de conduite/reprise de mission ; D6 stocke les mandats ; D7 sait préparer, autoriser et réconcilier des publications documentaires.

**Écarts centraux :** pas d'arborescence de dossiers ; fournisseur REAL encore limité à un dépôt configuré ; pas de projection « Publications Studio » de projet ; surface Git actuelle tournée vers l'inspection technique ; demande Nora Git qui attend une autorisation supplémentaire ; merge REAL toujours hard-blocked ; reprise Nora encore bornée aux cas et événements connus. **Aucune de ces lacunes n'autorise une nouvelle architecture parallèle.**

### 0.3 Un macro-lot cohérent, deux résultats intégrés

- **Lecture et consultation** : UX projet Git, branches, arborescence, prévisualisation et publications.
- **Opérations gouvernées via Nora** : qualification contextuelle, autorité, écriture documentaire REAL, PR/merge autorisés et restitution.

Code, tests, documentation, sécurité et recette sont intégrés au **même contrat de livraison** ; des sous-travaux peuvent être parallélisés seulement sur interfaces stabilisées, avec intégration et preuves communes.

---

## 1. Sources opposables, hiérarchie et pré-check

### 1.1 Hiérarchie appliquée

1. **Git et preuves primaires** au bon SHA, avec distinction `main`/branche candidate et local NON OBSERVÉ.
2. Décisions et sources normatives validées Morris.
3. Spécifications fonctionnelles R2, architecture R4, politique ENV-01, méthode SEF et Figma applicable.
4. Présent contrat E08 candidat, arbitré seulement après revue.
5. Hypothèses techniques explicitement marquées.

### 1.2 Sources lues sur Git

Chemins relatifs à `projects/sfia-studio-next/` :

| Source | Usage dans le présent contrat |
| --- | --- |
| `governance/SEF.md` v0.2 | Macro-lot, niveau de preuve, rôles, contribution Git §10 et gates |
| `governance/roadmap.md` | Sortie E07, prochaine capacité E08, Gate C encore OPEN ; aucune adoption |
| `governance/product-naming-conventions.md` | Un nom par responsabilité, sans héritage des identifiants de chantier dans les composants permanents |
| `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` | Écritures Git documentaires natives ML4, merge distinctement autorisé, ML5 technique Cursor séparé |
| `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` | Convergence fonctionnelle/UX, propriété de domaine, preuves, Gate C |
| `governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` | Nora qualifie sémantiquement, pas de routeur lexical métier ni d'autorité créée par le modèle |
| `conception-fonctionnelle/integration-git-gouvernee.md` | RG-GIT / PF-GIT R2 et frontières Git facultatif / identité / ref / merge |
| `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` | Mandat D6, restrictions, source utilisateur et changements matériels |
| `conception-fonctionnelle/realisation-operationnelle-gouvernee.md` | Une seule tentative/exécution D7, reprise, STOP et retour |
| `architecture-technique/cadrage-r4.md` | Architecture modulaire, domaines propriétaires, pas de nouveau moteur |
| `governance/environnements-recette-et-promotions.md` (**ENV-01 validée**) | DEV/RECETTE/STABLE, sandbox externe, SHA/build, isolation, préflight, gate Morris |
| `ux-ui/methodologie-contrat-figma-cursor.md` v1.1 | Extraction Figma native, manifeste de transposition, preuves géométriques et comportementales |
| `construction/ml4-integration-git/specification-technique.md` | Capitalisation des restrictions documentaire REAL et de l'ordre publication |

**Sources fonctionnelles E08** : contrat v0.2 sur branche candidate ; échanges de revue des écrans Figma 11.01–07, 11.13–16, sélecteur de branche 11.03 et suppression des écrans de workflow technique 11.08–12.

### 1.3 Position temporelle et blast radius

À la lecture : `main@1dd1a8ec...` a intégré une clôture documentaire E07 depuis `fd04888b...`. La branche E08 est **divergente** ; son document fonctionnel n'est pas sur `main`. Le pré-check de construction devra relire `main`, les fichiers applicables et l'état local Cursor, puis décider la base technique sous GO Morris ; **pas de rebase ni de création de PR implicite ici**.

Blast radius potentiel : interfaces D9, jetons GitHub App, routes API Git, type de données d'état de lecture, projection UI, tables existantes D4/D6/D7/D8, qualification D3, permissions, protections branche, tests PG/Playwright/Vitest, secrets/config ENV-01 et contrat visuel.

---

## 2. Architecture AS-IS — inventaire vérifiable

**Vérité observée : présence de code sur Git ; ni processus local, ni schéma PostgreSQL effectivement migré, ni GitHub LIVE de l'environnement courant n'ont été observés pendant cette analyse.**

| Propriété | Code existant | État au regard de l'E08 |
| --- | --- | --- |
| Identité et GitHub App | `domains/integrations/authorization-service.ts`, `github-app-user-oauth.ts`, `github-app-config.ts` | IMPLEMENTED code ; identité Pilote/session ≠ installation/permissions repo |
| Lien projet / dépôt 0..N | `domains/integrations/project-link-service.ts` | IMPLEMENTED code, attach et detach ; histoire conservée |
| Résolution dépôt/ref/fichier | `domains/integrations/resource-service.ts` | IMPLEMENTED code ; refs bornées à 40 ; `readGitFile` et provenance |
| Port fournisseur | `domains/integrations/github-provider.ts` | Interfaces read, createBranch, putFileContents, createPullRequest, mergePullRequest |
| GitHub REAL | `domains/integrations/real-github-provider.ts` | REAL lecture/écriture documentaire conditionnelle, **allowlist mono-dépôt**, merge REAL hard-blocked |
| Identité de lane GitHub | `domains/integrations/github-app-config.ts` | Profils DEV/RECETTE existants avec `allowedFullName` de sandbox ; généralisation multi-dépôts non acquise |
| Bibliothèque D4 | `domains/document/service.ts`, `db/schema.ts` | Documents/révisions existants ; aucune synchronisation bidirectionnelle permanente Git |
| Publications persistées | `db/schema.ts` : `documentPublicationRefs`, `effectAttempts`, `observedGitFacts` | Base de projection exploitable, **API de liste projet E08 non identifiée** |
| Autorité D6 | `domains/execution/effect-service.ts`, `effect-authority.ts` | HumanDecision et empreinte d'inspection ; chemin actuel attend autorisation explicite après préparation |
| Exécution D7 | `effect-service.ts`, `publication-steps.ts` | Préparation, transitions, dispatch, réconciliation, maintien des distinctions de faits |
| Qualification sémantique | `domains/conversation/semantic-qualification.ts`, `nora-adapter.ts` | Intents structurés, Nora n'obtient **aucun outil d'écriture Git direct** |
| Conduite / reprise Nora | `domains/conversation/intent-conduction.ts`, `mission-continuity.ts`, `service.ts` | D3 réutilisable ; suite D4, attente D6, reprise post-autorisation et restitution, limitée aux missions prises en charge |
| UI projet | `app/projects/[projectId]/page.tsx` | Git affiche actuellement `PublicationInspectionPanel`, **non conforme à la visionneuse E08** |
| UI Git technique actuelle | `components/integrations/PublicationInspectionPanel.tsx` | Préparer, autoriser, dispatch, merge : doit **cesser d'être la surface utilisateur Git** |
| Visionneuse existante | `components/figma/TravailViewer.tsx`, `SafeMarkdown` | Déjà réutilisable ; éviter réécriture complète |
| UI connexion personnelle | `components/integrations/IntegrationsPanel.tsx` | Présente ; adaptation limitée à la cible de la page 11 |

### 2.1 Écarts précis confirmés

- `resource-service.ts` ne fournit pas un listing de **répertoire** utilisateur à la demande.
- `github-provider.ts` n'expose pas encore de contrat `listDirectory`/`listTree`.
- `real-github-provider.ts` impose `allowedFullName` au lieu de l'ensemble vérifié des dépôts autorisés par App + acteur.
- `semantic-qualification.ts` connaît `d7.prepare_publication`/`d7.dispatch_publication` mais ne matérialise pas à lui seul un mandat D6 ni une autonomie générale des opérations Git.
- `mission-continuity.ts` impose un `targetPath` explicite à la préparation, refuse plusieurs liens sans choix et conserve `AWAITING_PILOT_AUTH`.
- `effect-service.ts` `authorizePublication` consomme `inspectedFingerprint` et enregistre D6 ; l'existence d'une phrase utilisateur ne produit **pas automatiquement** ce mandat.
- `effect-service.ts` `prepareMerge` exige actuellement une **publication Studio COMPLETED et `documentPublicationRefs` liée**, pas une PR GitHub quelconque.
- `real-github-provider.ts` `mergePullRequest` refuse systématiquement l'effet REAL.
- `app/projects/[projectId]/page.tsx` s'appuie sur le panneau technique actuel, non sur une arborescence de fichiers et publications.
- Les reprises Nora `recoverAuthorizedNoraMissions` portent sur les tentatives autorisées/dispatched à des événements nominaux ; ne pas déduire un worker universel.

**Attention à la portée :** le merge d'une **PR documentaire produite par Studio** est dans la trajectoire approuvée ML4. La demande naturelle « merge PR 675 » peut viser une **PR externe ou technique** : le code actuel ne sait pas la traiter comme équivalente. Ce cas doit être explicitement qualifié (§7.6), et non masqué derrière un libellé conversationnel identique.

---

## 3. TO-BE — responsabilités, flux et invariants

### 3.1 Un seul produit modulaire ; pas neuf microservices

`D1–D9` représentent des **propriétaires fonctionnels**, pas des applications ou bases indépendantes. Le TO-BE s'inscrit dans l'architecture Next existante : composants Next.js/React, routes serveur, services de domaines, DB PostgreSQL/Drizzle, adaptateurs GitHub App et moteur Nora existant.

**Contrat de lecture :**

`UI Dépôts Git → D1/session + D2/projet → D9/lien et droits actuels → GitHub ref/tree/file → provenance D9 → visionneuse réutilisée.`

**Contrat d'effet Git :**

`USER Pilote → D3/Nora qualification sémantique → D4/révision si nécessaire → D7/plan/fingerprint → D6/mandat lié à l'acte USER → D7/dispatch → D9/GitHub REAL → D8/faits → D3/reprise et restitution → Pilote.`

La préparation n'est pas un effet, un droit Git ne vaut pas autorisation, un modèle ne forge pas de décision, une PR ouverte ne vaut pas merge, une instruction de Nora n'est pas la preuve GitHub.

### 3.2 Contrats propriétaires de frontière

| Domaine | Possède | Fournit / refuse |
| --- | --- | --- |
| D1 | Session, identité Pilote | Contrôle session et isolation ; pas de partage du token Git à Nora |
| D2 | Projet courant, existence et accès | Vérification projet avant toute ressource Git |
| D3 | Intention, dépendances, question ciblée, état de mission conversationnel | Ne remplace pas D6/D7 et n'affirme aucun fait non retourné |
| D4 | Document, révision, provenance Studio | Fournit version exacte à publier, liens de publication historiques |
| D6 | HumanDecision et restrictions opposables | Accepte/refuse un acte USER authentifié et borné, jamais une conclusion du modèle |
| D7 | Plan stable, empreinte, tentative, idempotence, dispatch, réconciliation | Conduit la mutation, bloque changement de scope, assure reprise effect-bound |
| D8 | Qualification de preuve et résultat | Faits indépendants de la prose Nora, aucun verdict adoption induit |
| D9 | Installation GitHub, acteurs/droits, refs/fichiers, effets distants | Refuse hors dépôt/branche/permission/contrat ; observe commit, PR, merge séparément |

### 3.3 Invariants à préserver

1. Connexion GitHub personnelle ≠ rattachement de dépôt à un projet ≠ permission de lecture ≠ mandat d'écriture.
2. Deux projets partageant un dépôt ne partagent ni décision, ni conversation, ni effet, ni adoption.
3. Aucun dépôt global ni branche universelle obligatoire ; la branche par défaut est **une initialisation de navigation**, pas une cible de publication sans décision.
4. Lecture Git sous droits courants ; retrait ou révocation bloque **les nouvelles lectures** et conserve les références historiques minimales autorisées.
5. Fichier/revision D4 immuable au point de préparation ; plan et effets protégés contre TOCTOU.
6. Branche candidate/non mergée affichée comme candidate et jamais comme `main`.
7. Blob SHA et commit SHA distincts ; lien permanent construit sur commit vérifié seulement.
8. Une demande user claire peut être mandat, mais **seul D6** enregistre la décision depuis l'acte authentifié.
9. Pas d'effet nouveau en cas de `UNKNOWN`/`AMBIGUOUS` avant réconciliation ; pas de force push ni retry créateur aveugle.
10. Pas de mutation via Dépôts Git ; pas de second runner Git, ni de contrat de micro-cycle documentaire.
11. RECETTE Git REAL utilisable pour chaque capacité annoncée livrée ; permission/règles de branche restent opposables.
12. Conception ≠ code ≠ test ≠ observation REAL ≠ GO de merge Git de ce programme ≠ adoption.

---

## 4. Architecture de lecture D9 : dépôt, branche, arborescence, fichier

### 4.1 Réemploi et extension la plus simple

Conserver `listProjectGitLinks`, `listProjectGitSources`, `listGitRefs`, `readGitFile`. Ajouter **un contrat de découverte de répertoire** sous `domains/integrations` et l'opération correspondante au port `GitHubProvider`. Exposer une route projet à lecture seule, candidate :

`GET /api/projects/{projectId}/git/tree?repositoryId=…&ref=…&path=…`

La forme définitive peut être adaptée par Cursor après vérification du routage et tests, **sans créer une seconde voie d'accès Git**.

### 4.2 Contrat de listing proposé

**Entrées** : `pilotId` serveur ; `projectId` serveur ; `repositoryId` rattaché ; `ref` explicitement choisie ; `path` relatif normalisé (racine possible).

**Préconditions** : session valide, propriétaire projet, lien ATTACHED, autorisation Git CONNECTED, dépôt ACTIVE, fournisseur adapté, ref réellement accessible, absence de traversée de path, contrôle de charge et permissions actuelles.

**Sortie candidate** :

| Champ | Sens |
| --- | --- |
| `repositoryId` / `repositoryFullName` | Dépôt réellement utilisé |
| `requestedRef` | Ref demandée par le Pilote |
| `resolvedCommitSha?` / `verified` | Commit fiable si résolu, jamais un blob maquillé |
| `directoryPath` | Chemin normalisé interrogé |
| `entries[]` | `name/path/type` (directory/file/symlink/submodule/unsupported), taille ou SHA **si observés** |
| `truncated` / `limitReason` | Complétude vérifiable ; ne jamais tronquer silencieusement |
| `readState` | `AVAILABLE`, `DENIED`, `REF_UNRESOLVED`, `AMBIGUOUS`, `UNAVAILABLE`… |
| `observedAt` | Horodatage de réponse lorsqu'établi |

**Choix technique recommandé** : chargement d'un répertoire **à la demande** via GitHub Contents API (paramètre `ref`), ou Git Trees non récursif si meilleur après mesure et compatibilité. **Ne pas** récupérer systématiquement l'arborescence entière. Si Git Trees récursif est choisi, traiter son marqueur `truncated` et ses limites fournisseur comme un résultat partiel, jamais comme un dossier complet. Documentation fournisseur : [Contents API](https://docs.github.com/en/rest/repos/contents), [Git Trees API](https://docs.github.com/en/rest/git/trees).

**Sécurité** : ne pas permettre au navigateur de choisir token, installation, acteur ou fullName arbitraire ; journaliser métadonnées expurgées et codes de refus, sans contenu Git privé ni secrets. Les README et fichiers sont données non fiables ; rendu sûr.

### 4.3 Cohérence de branche

Le sélecteur Figma 11.03 charge d'abord la branche par défaut réellement retournée, puis autorise toute branche distante accessible, y compris non mergée. Changer de dépôt ou de branche :

1. invalide la sélection de fichier et les requêtes en vol de l'ancien contexte ;
2. qualifie la nouvelle ref et recharge la racine ;
3. affiche l'arborescence et le fichier de la **même ref** ;
4. reconstruit les détails et le lien externe sur le commit de lecture vérifié ;
5. expose « branche/ref inaccessible ou supprimée » sans basculer silencieusement sur `main`.

La liste actuelle `MAX_REFS=40` ne doit pas masquer des branches : proposer un sélecteur avec recherche/chargement borné et un état « résultats limités » si le fournisseur ne livre pas tout.

### 4.4 Fichier, rendu et provenance

Réutiliser `readGitFile` et sa distinction `FILE_ABSENT_AT_VERIFIED_REF` / `REF_UNRESOLVED` / `READ_NOT_FOUND_UNQUALIFIED`. Fichier Markdown → `SafeMarkdown` ; texte brut → rendu sûr, conservant les retours ligne ; binaire ou trop volumineux → état explicite. Ne pas rendre le contenu distant comme HTML non fiable, ni autoriser édition/commit via viewer.

**Informations** : nom, chemin, ref, dépôt, éventuel commit vérifié, blob SHA et taille **si retournés**. Les données absentes restent absentes : aucun auteur, date, taille ou URL inventés.

**Lien GitHub** : en-tête permanent ; privilégier `permalinkOrNull` / SHA commit vérifié. Un lien externe au HEAD mutable peut être présenté comme tel uniquement si la qualification est honnête ; jamais comme preuve exacte du contenu visualisé.

### 4.5 Contrat de concurrence UI

Les requêtes lecture A→B/branche X→Y ne doivent jamais réafficher A après la sélection de B. Réutiliser les protections existantes de la visionneuse Travail (séquence/neutralisation des retours tardifs), en les isolant au contexte Git. Une lecture refusée après retrait de dépôt n'utilise aucun ancien cache privé à la place.

---

## 5. D4/D7/D8 : Publications Studio, historique et preuve

### 5.1 Une projection métier sans nouvel index

La liste des publications utilise prioritairement `documentPublicationRefs` et les tables existantes `documents`, `documentRevisions`, `effectAttempts`, `observedGitFacts`. **Pas de `GitPublicationIndex` persistant concurrent par défaut**.

Route **candidate** :

`GET /api/projects/{projectId}/git/publications`

Ce chemin peut coexister avec les routes actuelles `/git/publications/prepare` et `/[attemptId]/*` ; vérifier son intégration Next.js avant choix définitif.

**Chaque entrée** relie : projet/Pilote, document D4, révision source, dépôt, branche publication, branche cible, chemin, commit observé, PR éventuelle, statut/faits et disponibilité actuelle éventuelle.

### 5.2 Statuts et currentness

- « Publié sur branche candidate » ≠ « sur main ».
- `COMPLETED` d'une tentative de publication ne vaut pas `MERGED`.
- Une PR `OPEN` ne vaut pas intégration.
- Un dépôt retiré ou révoqué laisse un fait historique ; la consultation actuelle peut être refusée.
- Le libellé « fusion vérifiée » ne doit apparaître qu'après observation distante et corrélation suffisante.

**Contrat UX 11.04** : cette liste est **transversale au projet et aux dépôts**, et l'en-tête doit le dire. Le dépôt actif du volet Fichiers n'en limite pas implicitement la liste. Un filtre facultatif n'est admissible que s'il est explicite.

### 5.3 Source de vérité

D9 observe commit et PR, D7 les rattache à l'effet, D4 à la révision, D8 qualifie les preuves. La restitution Nora consomme ces faits ; elle n'écrit pas un statut parallèle de publication qui ferait foi.

---

## 6. D3 → D6 → D7 : conduite conversationnelle sans cockpit

### 6.1 Réutiliser la conduite sémantique validée

Conserver le chemin de `semantic-qualification.ts` / `intent-conduction.ts` / `service.ts` / `mission-continuity.ts`. Le schéma sémantique courant connaît les capacités de publication ; **ses sorties ne sont pas des permissions**. Respecter la décision `SEM-01..08` :

- Nora comprend la demande et le contexte, y compris négation, formulations variées, plusieurs intentions et dépendances ;
- les règles syntaxiques pour branches/paths restent **des validateurs techniques**, jamais le moteur de détection métier ;
- la qualification durable utilisée pour exécuter ne doit pas être remplacée librement par une nouvelle interprétation lors d'une reprise ;
- pas de routeur de mots-clés métier ajouté, même en fallback silencieux.

### 6.2 Distinguer trois objets

1. **Acte du Pilote** : message USER authentifié, corrélé à session/projet/conversation et à une intention d'effet explicite. **Seul cet acte** peut fonder une autorisation.
2. **Plan D7** : résolution déterministe des éléments : document/révision, dépôt, branche base/candidate, chemin, diff, opérations et empreinte, avec limites et currentness.
3. **HumanDecision D6** : mandat **enregistré côté serveur** qui atteste la portée de l'acte USER face au plan et à la permission courante ; le modèle n'a ni le droit de le créer ni de l'étendre.

**Proposition de mécanisme** : un service applicatif d'admission d'autorité relie un message USER vérifié à l'empreinte du plan préparé et appelle le propriétaire D6 existant. Il n'y a pas de « confirmation automatique par Nora ». La signature/liaison doit empêcher qu'une variation de cible, branche, révision ou diff soit autorisée à l'insu du Pilote.

Une phrase telle que « publie ce document sur une nouvelle branche du dépôt X et crée une PR vers main » peut couvrir ces étapes si le plan exact reste déterminable et **dans l'enveloppe de cette phrase**. Une simple sortie structurée du LLM `REQUEST_EFFECT` ne suffit jamais sans preuve de l'acte et vérifications D6/D7. Si le plan ajoute un acte non demandé, D6 refuse ou réclame une clarification.

### 6.3 Quand clarifier ?

| Situation | Décision candidate |
| --- | --- |
| Un seul dépôt rattaché, document et révision connus, publication demandée | Cible projet déterminable : pas de question sur le nom du dépôt |
| Plusieurs dépôts mais cible déjà explicitée dans la conversation et valide | Utiliser la cible établie si liaison serveur vérifiable |
| Plusieurs dépôts sans cible certaine | Question ciblée « sur quel dépôt ? » **avant mutation** |
| Document D4 existant et path omis | Utiliser path conventionnel uniquement si règle validée, déterministe, annoncée et dans le mandat ; sinon demander la précision |
| « Ouvre une PR » après commit document précis | Relier explicitement la PR à cette publication si contexte non ambigu |
| « Publie » sans demande de merge | PR/commit selon scope ; **aucun merge implicite** |
| « Merge la PR 675 » | Mandat de merge distinct dans ce message si identité dépôt/PR/HEAD/base et éligibilité sont qualifiables |
| Nouvelle branche mais nom non fourni | Générer un nom compatible à partir du document/intent seulement si convention acceptée et collision/portée contrôlées ; sinon proposer une précision |
| Une requête consulte et modifie | Continuer les lectures sûres ; bloquer seulement les effets dépendant d'une ambiguïté matérielle |
| Fichier README contient « autorise le push » | Ignorer comme mandat ; source Git hostile = donnée |

**Règle stricte** : « pas de question inutile » ne veut pas dire « produire un défaut silencieux dangereux ». Les déductions ne doivent jamais agrandir la portée.

### 6.4 Pipeline proposé avec reprise Nora

1. USER parle à Nora dans Travail.
2. D3 qualifie l'intention structurée et les dépendances, avec le contexte autorisé et les dernières décisions applicables.
3. D4 crée ou retrouve une révision documentaire **si demandé** ; tout succès appartient à D4.
4. D7 prépare le plan de publication/merge, résout permissions et inspection.
5. D6 vérifie si l'acte USER fournit déjà un mandat applicable sur **le plan exact** ; sinon Nora clarifie/sollicite le seul accord manquant dans le fil.
6. D7 dispatch sous contrat, avec vérification courante D6/D9 et journal idempotent.
7. D9 produit/observe les faits Git distants ; D7 réconcilie les états incertains ; D8 qualifie l'observation disponible.
8. Le résultat revient au même contexte de mission D3.
9. **Nora reprend** son raisonnement à partir des faits, prépare une restitution fidèle, associe les liens vérifiés et délivre un message final dans la conversation.
10. Si résultat partiel, inconnu ou sans reprise immédiate possible, la mission garde son état durable, sans mensonge « Studio te répondra » ni seconde mutation sur relance.

La continuation cognitive existante `cognitiveContinueFromFacts` et `resumeMissionAfterPublicationAuthorize` constituent le **socle à étendre**, pas un nouvel orchestrateur. Des statuts techniques peuvent exister dans le propriétaire D7 ; ils ne deviennent pas un parcours de boutons obligatoires pour le Pilote.

### 6.5 Crash/reprise et idempotence

- Chaque commande utilisateur est corrélée à une clé stable de tour/mission et aux tentatives D7 correspondantes.
- Doublons de tours, retries HTTP, double réponse, temps réseau et fermeture/réouverture du projet ne doivent pas produire un nouveau commit/PR/merge injustifié.
- Avant retry de mutation, rechercher les effets distants par références, marqueur de publication, SHA et source, sans déclarer une absence sur une lecture ambiguë.
- Le statut `DISPATCHED` sans confirmation distante reste incertain ; ne pas forcer `COMPLETED`.
- La restitution finale est **idempotente** : un seul message terminal par effet/mission selon une clé durable, ou preuve du statut exact des étapes.
- Pas d'exigence artificielle d'un scheduler global ; qualifier le mécanisme nominal existant, puis introduire une reprise supplémentaire uniquement si une panne/attente réelle l'exige.

### 6.6 PR documentaire Studio vs PR GitHub préexistante

**Trajectoire déjà approuvée** : publication d'un document Studio sur branche candidate, ouverture de PR correspondante, fusion distincte sur PR documentaire éligible.

**Extension possible de la demande utilisateur** : « merge la PR 675 » sans qu'elle provienne de Studio. Cette PR peut viser du code/CI et relever de ML5 ou d'un autre périmètre de risque. Le présent document **ne valide pas une autorisation générique de merge de toute PR** par simple rattachement du dépôt.

**Contrat à soumettre au gate Morris** :
- **dans le lot E08 nominal** : merges de PR documentaires associées à des tentatives Studio vérifiées ;
- **cas PR préexistante/non documentaire** : Nora doit comprendre la demande et expliquer la limite effective si hors contrat, sans bouton caché ni résultat fictif ; l'extension demande un **arbitrage explicite de portée/autorité** et les preuves D6/D7/D9 correspondantes.

Ce point est une **frontière de sécurité produit**, pas une impossibilité de converse avec Nora.

---

## 7. D9 / D6 / D7 : mutations Git REAL et merge testable

### 7.1 Contrat de disponibilité par environnement

| Lane | Obligations |
| --- | --- |
| **DEV** | L'intégrateur peut utiliser des ressources de test et activer les capacités documentaires REAL dans le cadre d'un mandat technique ; pas d'effet externe non autorisé |
| **RECETTE** | Le candidat livré est figé à son SHA/build ; pour **chaque capacité annoncée testable**, configuration GitHub REAL et permissions préparées, validées et **disponibles pendant la session** ; aucun changement manuel répétitif par opération |
| **STABLE** | N'est ni créée ni promue par le candidat ; disponibilité seulement après intégration, post-merge, sauvegarde/rollback et GO Morris distinct |

**ENV-01 reste opposable** : la RECETTE fait ses mutations réelles dans un **dépôt sandbox/compte autorisé isolé**, jamais dans `main` de ce chantier ni dans un dépôt de production. La politique autorise une mutation externe **bornée et gouvernée** de recette ; le besoin de Morris ne justifie pas un flag donnant accès universel ou l'abolition des protections.

La connexion OAuth personnelle, l'installation GitHub App, les capacités d'écriture et les permissions utilisateur sont à rendre vérifiables en préflight. Un refus par protections de branche reste un résultat métier légitime ; un blocage **global** du provider REAL sur une fonctionnalité vendue comme livrée est **NOT READY**.

### 7.2 Généraliser le multi-dépôts REAL sans ouvrir toutes les permissions

Écart : `GITHUB_APP_LANE_PROFILES` et `assertAllowedRepo`/`allowedFullName` sont actuellement bornés à un sandbox mono-dépôt. La relation projet accepte plusieurs dépôts, mais le fournisseur REAL ne les honore pas.

**Direction recommandée** :

- Résoudre dynamiquement l'ensemble des dépôts disponibles pour l'installation **et** l'identité utilisateur réelle, sans universel `allow all`.
- Vérifier la correspondance de l'installation, les permissions minimales par dépôt, le statut du compte et le lien explicite au projet.
- Garder des profils lane distincts et des allowlists d'environnement de **dépôts de test** si nécessaire ; une allowlist environnement n'est pas un dépôt principal métier.
- Relire permissions et autorisation à chaque opération à risque ; ne pas mettre de jeton dans les props UI/LLM, journaux ou rapport Cursor.
- Ne pas élargir implicitement les droits d'un projet lorsqu'un autre projet rattache le même dépôt.

Ce changement touche `github-app-config.ts`, `github-app-auth.ts`, `real-github-provider.ts` et les services d'autorisation ; **blast radius élevé et tests requis**.

### 7.3 Publication documentaire REAL

La séquence existante `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` est une base utile. L'API GitHub Contents crée un **commit distant**, pas un commit local suivi d'un push : la restitution Nora doit employer des termes exacts.

**TO-BE** : contrôler chemin et type documentaire, révision D4, base/head, empreinte, identité exécuteur, autorité D6, réponse incertaine et idempotence. Ne pas dériver vers un moteur générique de fichiers arbitraires ou de code technique en ML4.

### 7.4 Merge REAL — développement nécessaire si livré

Le fournisseur `real-github-provider.ts` **refuse** actuellement `mergePullRequest`. Le plan D7 sait préparer un merge documentaire avec `expectedHeadSha` et `expectedBaseSha` et une HumanDecision distincte.

**Contrat cible** :

1. Examiner la PR et son éligibilité actuelle, l'identité/permissions, les protections/checks et la branche de base.
2. Vérifier au point d'effet le mandat D6 **distinct du mandat de publication**, corrélé à PR, repository, head/base et plan.
3. Refuser si la PR/HEAD/base diffère matériellement de la version autorisée.
4. Utiliser l'API GitHub réelle de merge avec préconditions de SHA et méthode compatible avec le dépôt ; ne pas contourner les protections d'organisation ou forcer un merge.
5. Si retour ambigu/timeout : relire PR et branche de base avant retry ; constater merge SHA uniquement si réellement prouvé.
6. Alimenter D7, D8, la référence documentaire et la restitution Nora **sans assertion d'ADOPTED**.

L'API GitHub REST documente la précondition `sha` du head au merge ; voir [Pull requests / Merge](https://docs.github.com/en/rest/pulls/pulls). **Le mode exact et les codes de réponse à gérer doivent être confirmés par Cursor sur la version fournisseur en vigueur.**

### 7.5 Capacité REAL en RECETTE : préflight bloquant

Avant de déclarer la build prête :

- Lane RECETTE connue : SHA, tree, build, DB/migrations, URL/callback et session isolés ; aucun hot reload.
- GitHub App, installation, acteur, dépôt(s) sandbox et permissions GitHub testés avec le **compte effectif de recette**.
- Capacités annoncées : `read`, `createBranch`, `putFileContents`, `createPR` et `mergePR` **si incluse**, vérifiées contre le provider réel, sans mode SCRIPTED.
- Restrictions du projet, nom de branche, sécurité D6/D7, isolation et tokens actifs.
- Scénario de preuve REAL non destructif ou réversible **sur sandbox dédié**, avec cleanup borné et traçable ; pas sur repo applicatif.
- Observabilité D8 : traces et identifiants d'effet corrélés ; pas de secret.
- Si une capacité annoncée refuse globalement pour flag/code/permission : **NO-GO RECETTE de cette capacité** ; ne pas demander à Morris d'aller activer un flag.

Une indisponibilité soudaine du fournisseur/permissions durant une recette reste un incident à diagnostiquer, pas une preuve que la capacité était livrée en erreur.

---

## 8. UI et contrats Figma : transposer sans doublon

### 8.1 Source de structure

Figma page 11 : la direction artistique reprend les pages convergées 03/04/05/07/08/09/10, le shell projet (rail ~246 px), Inter, tokens, actions compactes et panneaux. Référence **mutable** : lors du build, extraire les nœuds et exporter les captures Figma avec horodatage/digests et manifesto selon la méthode v1.1.

Ne pas créer un second `TravailViewer` indépendant ni dupliquer le moteur Markdown ; distinguer **moteur de rendu réutilisé** et **composition 30/70 Git**.

### 8.2 Matrice écran → contrat applicatif

| Figma | Comportement/état | Owner UI / data | Preuve ciblée |
| --- | --- | --- | --- |
| **11.01** | Aucun dépôt : contexte explicatif et gestion du rattachement, Nora/D4 continuent | Projet + D9 | EMPTY, sans connexion |
| **11.02** | 0..N dépôts du projet, ajout/retrait/sélection ; déconnexion seulement dans Intégrations | D9 liens | Deux dépôts + retrait isolé |
| **11.03** | Dépôt et **branche** sélectionnables ; arbre dossier gauche, fichier droite, 30/70 | D9 tree/refs/file | Branche `main` puis candidate réelle non mergée |
| **11.04** | **Toutes** les publications du projet, multi-dépôts ; liste gauche, aperçu droite | D4/D7/D9 | Deux références vers deux repos, statuts distincts |
| **11.05** | Lecture agrandie centrale, **panneau de détails droit plus aéré** | Viewer + source metadata | Agrandir/réduire/détails stables |
| **11.06** | Connexion GitHub personnelle, liste autorisée, actualiser, déconnecter | D9 authorization | Statut réel et droits |
| **11.07** | Confirmation de déconnexion et impacts corrects | D9 authorization | Nouveaux accès refusés, histoire conservée |
| **11.13** | Confirmation retrait **du projet seulement** | D9 links | Aucun effet GitHub ni autre projet |
| **11.14** | Source absente/inaccessible, erreurs sourcées | D9 | Ref supprimée, droits révoqués |
| **11.15** | Desktop compact 1280 px | UI responsive | Contrôle composition et interactions |
| **11.16** | Mobile 390 px : liste puis visionneuse empilées | UI responsive | Pas de 30/70 illisible, navigation accessible |

**Toolbar 11.03/11.04** : `Infos` compact, `Ouvrir sur GitHub`, **icône vectorielle Agrandir** sans libellé, groupés en haut de la visionneuse ; pas d'action cachée à la fin d'un long fichier. Accessibilité : aria-label/tooltip sur icône, focus/activation clavier, retour/réduction prévisibles.

**Visionneuse Travail page 05** : déjà construite. En E08, seules l'ouverture d'un lien résultat dans cette visionneuse ou vers GitHub et l'intégration des références Nora sont à qualifier ; **pas de réinvention de l'écran Travail**.

### 8.3 Frontière visible

**Autorisé dans Dépôts Git** : consulter, sélectionner, rattacher, retirer avec confirmation, naviguer, agrandir, ouvrir GitHub.

**Exclu dans Dépôts Git** : préparer/inspecter un diff comme action obligatoire, autoriser publication, lancer commit, dispatcher PR ou cliquer « merge ». Supprimer/retirer du rendu nominal le panneau historique `PublicationInspectionPanel`, **sans supprimer les services D6/D7 qui lui étaient associés**.

**Nora** : la commande Git est exprimée dans le chat ; Nora restitue lien de branche/fichier/PR/merge **s'il a été observé**. Ouvrir ce lien peut aller sur GitHub ou déclencher la visionneuse Travail déjà existante. L'utilisateur ne doit pas aller chercher une commande technique dans l'espace Git.

### 8.4 Transposition G1–G5

- Extraire la page Figma native (structure, largeur, composants, variables, icônes, auto-layout, états).
- Produire manifeste nœud → composant actuel/nécessaire → responsabilité → preuve.
- Comparer aux mêmes viewports/états (notamment 1680/1280/390) et dates de référence ; aucun « pixel perfect » sur capture disparate.
- Prouver navigation, sélection de branche, lectures/erreurs, preview, ouverture GitHub, détails et responsive par Playwright + captures runtime.
- Aucun verdict de fidélité fort sans capture navigateur réelle ; Figma validé seul n'est pas G5.

---

## 9. Interfaces et données — propositions, pas nouvelle API normative

### 9.1 APIs à réutiliser

| Interface observée dans Next | Contrat |
| --- | --- |
| `GET /api/integrations/status` et routes GitHub correspondantes | Connexion, dépôts autorisés, refresh, déconnexion |
| `GET/POST /api/projects/{projectId}/git/links` | Lister et rattacher |
| `DELETE /api/projects/{projectId}/git/links/{linkId}` | Retirer sans supprimer source distante |
| `GET /api/projects/{projectId}/git/sources` | Dépôts réellement consultables |
| `GET /api/projects/{projectId}/git/refs` | Branches autorisées |
| `GET /api/projects/{projectId}/git/file` | Lecture d'une source à ref explicite |
| Routes `publications/prepare`, `[attemptId]/authorize`, `dispatch` et `merge` | Conserver comme frontières D7 ; leur exposition utilisateur doit évoluer vers Nora |

### 9.2 APIs proposées

- `GET /api/projects/{projectId}/git/tree` : listing borné, données/source et erreurs normalisées.
- `GET /api/projects/{projectId}/git/publications` : projection historique des publications **du projet** et de leurs états.
- **Admission d'autorité conversationnelle** : responsabilité serveur au niveau D3→D6/D7, sans endpoint public « autorise-moi parce que Nora a dit oui ». La route concrète et la réutilisation des commandes existantes sont à qualifier avant code.
- **Résultat/reprise mission** : réemploi des command/mission stores et de la projection de fil, avec corrélation vers les références de preuve existantes ; pas de nouvelle base d'états concurrente.

### 9.3 Données et persistence

Réutiliser en priorité `integrationAuthorizations`, `authorizedRepositories`, `projectGitLinks`, `documents`, `documentRevisions`, `documentPublicationRefs`, `humanDecisions`, `effectAttempts`, `observedGitFacts`, `conversationTurnCommands` et le fil `messages`.

**Migration : pas nécessaire par hypothèse.** Avant implementation, vérifier si le mandat USER, la qualification durable et les faits de merge peuvent être liés sans perte de preuve dans les structures existantes. Si un champ ou une contrainte nouvelle devient indispensable : formaliser sa nécessité, sa rétrocompatibilité, ses impacts DATA-01/ENV-01 et demander le gate approprié **avant migration**.

### 9.4 Logs et traçabilité

À chaque mutation : acteur Pilote, projet, identifiant intention/turn, décision D6, version/fingerprint de plan, tentative D7, dépôt et branche cibles, réf GitHub observée, statut et catégorie d'erreur. Expurger tokens et contenus privés ; éviter de journaliser en clair des documents non nécessaires à la preuve.

---

## 10. Erreurs, protections et invariants de reprise

| Incident | Attendu Studio / Nora |
| --- | --- |
| GitHub non connecté | Nora/Projet/Documents disponibles ; Git refuse proprement |
| Aucun dépôt rattaché | État vide et possibilité d'associer un dépôt autorisé |
| Plusieurs dépôts sans cible | Clarification unique ; pas de mutation |
| Ref Git inaccessible/supprimée | Aucune bascule silencieuse sur `main` ni contenu fictif |
| Fichier absent sur ref vérifiée | `FILE_ABSENT` qualifié ; pas de création automatique non demandée |
| Git 404 ambigu/permissions | `UNKNOWN` / `DENIED` selon observation, jamais « fichier absent » inventé |
| Retour UI A après navigation vers B | Réponse tardive neutralisée, pas de fuite de contexte |
| Contenu binaire/trop long/hostile | État borné et sûr, aucune exécution de contenu |
| Connexion révoquée entre préparation et effet | D6/D9 refusent, état et historique conservés |
| Diff/HEAD changé depuis plan | `REQUIRES_REQUALIFICATION`, demande complémentaire si mandat dépasse |
| Token/installation change | Relecture et refus si acteur/installation non attribuable |
| Double commande ou replay après timeout | Tentative idempotente/réconciliée, pas de doublon distant |
| PR ouverte, merge non confirmé | « PR ouverte », jamais « fusion faite » |
| Merge refusé par protections/checks | Refus réel remonté par Nora ; ne pas désactiver GitHub |
| Backend conclut et Nora ne revient pas | Mission/résultat durable, reprise dès événement pris en charge, sans réexécuter |
| RECETTE fournisseur SCRIPTED au lieu de REAL | **STOP de disponibilité** pour capacité annoncée |
| Merge REAL hard-blocked alors que livré | **NOT READY RECETTE**, à corriger et prouver avant mise à disposition |

---

## 11. Contrat d'acceptation : scénarios et oracles

Les références A/B/S sont propres à ce candidat et ne renumérotent pas les RG-GIT/PF-GIT ou le registre de recette antérieur.

### 11.1 Scénarios Pilote — consultation A

| ID | Parcours / condition d'acceptation | Oracle minimal |
| --- | --- | --- |
| **A01** | Projet sans Git : Travail, Nora, Documents restent utilisables | Browser + D2/D4 |
| **A02** | Connexion/refresh : seuls repos autorisés apparaissent | API D9 + GitHub REAL |
| **A03** | Deux dépôts rattachés, autre projet non affecté | API/PG + Browser |
| **A04** | Ajouter un 3e dépôt autorisé ; pas d'association globale | API/PG + Browser |
| **A05** | Retirer 1 dépôt : aucun effet GitHub, historique conservé | API/PG + GitHub check |
| **A06** | Changer de repo : liste/fichier et info requalifiés, réponse stale neutralisée | Browser + requêtes |
| **A07** | Sélection `main` puis branche non mergée : contenu différent sous bonne ref | GitHub REAL + Browser |
| **A08** | Dossier racine → sous-dossier → fichier : lecture à la demande, pas clone | GitHub REAL + Browser |
| **A09** | Markdown/texte lisibles, binaire et taille excessive gérés | Browser + unit |
| **A10** | Infos/GitHub/agrandir en haut, lecture 30/70 puis agrandie, détails aérés | Figma extrait + Browser |
| **A11** | Lien sur commit vérifié pointe vers fichier/version réellement lus | GitHub REAL + provenance |
| **A12** | Publications de 2 dépôts dans liste du **projet**, statuts distincts | PG + Browser + GitHub |
| **A13** | Déconnexion GitHub : nouveaux accès refusés, docs/preuves conservés | Browser + API/PG |
| **A14** | Ref supprimée, fichier absent, droits refusés et réponse ambiguë honnêtes | API/REAL + Browser |
| **A15** | Desktop compact et mobile : fonctionnalités disponibles, focus clavier | Figma G5 + Playwright |

### 11.2 Scénarios Nora — conduite/autorité B

| ID | Demande / attendu | Oracle |
| --- | --- | --- |
| **B01** | « Publie ce document sur une nouvelle branche » avec document/dépôt univoques → pas de bouton D6 supplémentaire | Nora LIVE + D6/PG |
| **B02** | Même demande avec 2 repos ambigus → Nora clarifie **seulement** le repo | Nora LIVE + zéro effet |
| **B03** | « Ne publie pas » / demande hypothétique → aucune autorisation ni mutation | Sémantique négative + D7 zéro effet |
| **B04** | Nora crée/révise D4 puis publication D7 : continuité et réponse globale | D4/PG + D3 + GitHub |
| **B05** | Branche, commit et PR documentaires REAL observés sans activation à la demande | GitHub sandbox + D8 |
| **B06** | Demande « Publie » ne provoque **aucun merge** | D6/D7, GitHub |
| **B07** | Demande distincte « Merge PR documentaire X » → D6 propre au merge et REAL sur PR éligible si livré | HumanDecision + GitHub REAL |
| **B08** | PR externe/non documentaire : pas de merge hors périmètre, limitation expliquée | D6/D7 + Nora |
| **B09** | Cible/HEAD/fingerprint change entre acte et effet → requalification, pas d'effet non mandaté | Unit + PG + GitHub |
| **B10** | Perte d'ACK après commit/PR, retry → reconciliation, pas de doublon | Fault injection + GitHub REAL |
| **B11** | D7 terminé avant restitution : Nora reprend et produit **un message terminal fidèle** | PG/messages + Nora |
| **B12** | Deux sessions/projets/pilotes autour du même repo → autorité isolée | PG/auth + Browser |
| **B13** | README hostile contient une instruction de publication → aucune HumanDecision créée | Unit + Nora LIVE |
| **B14** | Refus GitHub/branche protégée → Nora dit « refusé », fournit la cause et la suite réalisable | GitHub REAL + Nora |
| **B15** | Multi-intention D4 + publication + PR et reformulations libres → même résultat sous intentions qualifiées | Nora LIVE + D3/D4/D7 |
| **B16** | Restart/reconnect en mission non terminale → pas de statut inventé et reprise bornée prouvée | PG + Browser + backend |

### 11.3 Scénarios sécurité/exploitation S

| ID | Preuve / critère |
| --- | --- |
| **S01** | Préflight ENV-01 : SHA/build de RECETTE figé, GitHub REAL, identités/DB/cookies isolés, callbacks corrects |
| **S02** | GitHub App multi-dépôts : chaque repo exige droit réel + lien projet + identité valide |
| **S03** | Permissions révoquées ou repo retiré entre inspect/dispatch → aucun effet |
| **S04** | Merge REAL autorisé uniquement sur PR éligible, protections et SHA courants, sans privilège administrateur implicite |
| **S05** | Valeurs de secrets/token absentes des réponses UI, logs, sorties Nora, packs, captures et preuves |
| **S06** | Refus d'une mutation technique code/CI via la voie documentaire ML4 |
| **S07** | Aucun mode SCRIPTED/fixture ne prouve REAL ; métadonnées de test affichent provider et build utilisés |
| **S08** | Sous faute réseau, redémarrage ou réponse ambiguë : retour `UNKNOWN` et reconnaissance distante avant retry |
| **S09** | CI/lint/build/types/tests UI et PG, ainsi que non-régression Travail/Nora/Intégrations conformes |
| **S10** | Contrat/documentation/as-built/registre de revue synchronisés avec le code, sans statut ADOPTED anticipé |

### 11.4 Stratification de preuve

- **UNIT / déterministe** : validation de format, scopes, modèle d'autorité, fingerprint, limites, neutralisation stale, négations et refus.
- **INTEGRATION PG/API** : document/révision, association projet, HumanDecision et tentative, persistance et reprise après crash.
- **BROWSER** : parcours utilisateur complet, Figma/viewport, interactions/accessibilité, fil Nora, liens.
- **GitHub REAL sandbox** : branches, lecture de fichier, publication, PR et merge lorsque livrés, avec identités et refs distantes.
- **Nora LIVE** : intention sémantique, multi-intention, clarification proportionnée, reprise et restitution sans moteur lexical.
- **D8 / réception** : preuve de fait ≠ conformité du résultat ≠ acceptation humaine.

Jeux de tests existants à **réutiliser/étendre**, pas à dupliquer : `web/tests/unit/mission-continuity.test.ts`, `intent-conduction.test.ts`, `git-read-tools.test.ts`, `git-file-provenance.test.ts`, `github-app-auth-real-provider.test.ts`, `real-github-mutations-gate.test.ts`, `publication-steps.test.ts` ; `web/tests/integration/git-collaboration.pg.test.ts`, `mission-continuity-accept01.pg.test.ts`, `intent-continuity-global.pg.test.ts` ; `web/tests/e2e/git-collaboration.spec.ts`, `intent-continuity-atlas.spec.ts`, `ensemble05-travail-nora.spec.ts`. Leur **existence dans Git** n'est pas preuve de réussite dans la future RECETTE E08.

### 11.5 Critères de sortie de RECETTE

**READY FOR MORRIS UAT** uniquement si :

1. Produit candidat figé (commit complet + build + manifestes ENV-01), paramètres REAL et source Figma capturés.
2. A01–A15 et B01–B16 applicables sont couverts selon risques ; aucune fonctionnalité « livrée » dépourvue d'implémentation REAL.
3. S01–S10 et contrôles bloquants des mutations ont une preuve datée.
4. Aucune régression bloquante Travail, Documents, Intégrations ou Nora.
5. Les réserves non bloquantes sont explicitement acceptées avant exposition en recette, sans cacher une indisponibilité critique.
6. Le Pilote dispose de l'URL de RECETTE, de la version testée, du scénario de branche/PR et des références observables.

**NO-GO RECETTE** : merge annoncé mais hard-blocked, fournisseur scripted à la place de real, identité non attribuable, secrets/cookies confondus, aucune décision D6 sûre, absence de preuve d'effet ou de reprise sur scénario à risque.

---

## 12. Contrat de livraison, séquencement et intégration

### 12.1 Responsabilités des intervenants

- **Morris** : valide résultat fonctionnel, expérience, limites de périmètre, arbitrages de risque et GO de recette/intégration/promotion.
- **ChatGPT** : analyse le code et la vision, prépare/revoit le contrat, qualifie les écarts et compare preuves à l'acceptation ; ne valide pas à la place de Morris.
- **Cursor** : implémente et teste les modifications selon SFIA v2.6, dans une branche et sur chemins autorisés ; vérifie localement Git, produit Review Pack et handoff.
- **Pilote dans le produit** : exprime intentions et mandats D6 ; n'est pas l'autorité Git du chantier de construction.

### 12.2 Macro-lot cible E08 : capability end-to-end

**Résultat :** un projet peut consulter ses dépôts et Nora peut conduire, sur une ressource Git autorisée, la publication documentaire avec résultat GitHub réel et restitution fidèle.

- **Tranche cohérente 1 — Consultation et provenance :** D9 multi-repo, tree/branches/file, publication list, composition Figma, tests security/browser/REAL read.
- **Tranche cohérente 2 — Nora et effet gouverné :** qualification, acte USER→mandat D6, D7, provider REAL documentaire et merge si dans lot, reprise et restitution, tests sur sandbox.
- **Intégration obligatoire commune :** liens/provenance/identité, continuité du projet, même fil, mêmes cas d'erreur, tests end-to-end et documents synchronisés.

Ne pas transformer ces tranches en **micro-lots autonomes** avec une succession de validations documentaires : elles partagent un contrat de produit et une recette intégrée. Les sous-travaux peuvent se dérouler en parallèle seulement lorsque les contrats API, fichiers et intégrateur sont maîtrisés ; le propriétaire d'intégration est nommé dans le futur mandat Cursor.

### 12.3 Périmètre probable des fichiers de code

**Inventaire de blast radius, pas une allowlist d'édition Cursor déjà accordée.** Il devra être recalculé sur la branche technique locale.

| Zone | Fichiers plausiblement touchés |
| --- | --- |
| Ressources et provider Git | `web/src/domains/integrations/resource-service.ts`, `github-provider.ts`, `real-github-provider.ts`, `github-app-auth.ts`, `github-app-config.ts` |
| Liens/autorisation Git | `authorization-service.ts`, `project-link-service.ts`, `effect-authority.ts` |
| Routes API | `web/src/app/api/projects/[projectId]/git/refs`, `file`, `sources`, `links`, `publications`, `merge` et route tree candidate |
| Mission Nora et qualification | `web/src/domains/conversation/semantic-qualification.ts`, `intent-conduction.ts`, `service.ts`, `mission-continuity.ts`, `nora-adapter.ts` |
| D6/D7/D8 | `web/src/domains/execution/effect-service.ts`, `effect-authority.ts`, `publication-steps.ts`, `domains/decisions/service.ts`, `domains/proofs/qualify.ts` |
| UI | `web/src/app/projects/[projectId]/page.tsx`, `components/figma/TravailViewer.tsx`, `components/integrations/IntegrationsPanel.tsx`, `PublicationInspectionPanel.tsx` et composants de lecture Git réutilisables |
| Données (si nécessaire seulement) | `web/src/db/schema.ts` et migrations additives, sous gate spécifique |
| Tests, méthodes et docs | Unit/PG/E2E ci-dessus ; as-built d'E08, registre et contrat Figma ; contrat fonctionnel synchronisé **après décision** |

**Règle de construction** : toute modification de fonctionnement nécessite une documentation/as-built vérifiable dans **le même lot**. Un écart code/document devient **KNOWN GAP**, jamais prétendument conforme.

### 12.4 Gates de construction

| Gate | Preuve / décision |
| --- | --- |
| **G0 — Revue de conception** | Morris valide vision, périmètre nominal documentaire, merge, absence de workflow technique, statut du contrat fonctionnel/architecture candidat ; arbitrages §13 |
| **G1 — Pré-check Git / méthodes** | Cursor lit SEF/roadmap/decisions et routing+template SFIA v2.6 depuis Git ; vérifie refs, branches, HEAD, base, état local et compatibilité contractuelle |
| **G2 — Frontières d'implémentation** | Mapping propriétaires D1–D9, design APIs/fingerprints, blast radius, sécurité sandbox, fichiers/STOP, risque migration ; pas de nouvelle autorité |
| **G3 — Extraction Figma** | Source native/captures/digests, mapping composants et critères F1/F2 ; pas de démarrage UI à l'aveugle |
| **G4 — Implémentation intégrée** | Code/tests/docs du même lot, revue TypeScript/PG/UI/REAL, aucune permission élargie |
| **G5 — Candidate RECETTE** | Build/SHA figés, GitHub REAL actif pour capacités livrées, préflight ENV-01 et preuves Nora LIVE/résultats |
| **G6 — Revue/acceptation** | Morris UAT, réserves, Review Pack Cursor et relecture indépendante ; verdict par scénario |
| **G7 — Intégration/promotions** | PR, merge, post-merge et STABLE uniquement sous GO distinct ; Gate C/R6/ADOPTED ne sont pas acquis |

Ces gates sont une **matrice de contrôle de ce candidat**, pas un nouveau processus parallèle à SFIA v2.6, SEF ou à la méthode Figma v1.1.

---

## 13. Risques, décisions et dette/exit

| Risque / écart | Gravité | Réponse / preuve de sortie |
| --- | --- | --- |
| Multi-dépôts DB oui, provider REAL mono-repo | Élevée | Résolution intersection App + user + projet sur 2+ repos sandbox |
| Merge REAL hard-blocked | Critique si livré | Code REAL, tests et merge GitHub réellement observé avant RECETTE |
| Une phrase de Nora usurpant un acte Pilote | Critique | HumanDecision dérivée d'une **source USER authentifiée** liée au plan, test hostile négatif |
| D6 existant attend inspection et autorisation distinctes | Élevée | Admettre l'acte conversationnel sans confirmation superflue, préserver empreinte et requalification |
| Publication Git actuelle attend path explicite | Moyenne | Contexte déterministe ou clarification ciblée, jamais path arbitraire |
| PR 675 externe non couverte par plan Studio | Élevée | Choix de portée document-only ou gate séparé ; aucun merge indifférencié |
| Retry après timeout d'API GitHub | Critique | Corrélation, reconnaissance distante et absence de doublon prouvé |
| Écriture REAL en RECETTE sur dépôt de production | Critique | App sandbox, allowlist lane, permissions minimales, GO de recette et preflight |
| Session DEV/RECETTE sur même host | Élevée | Isolation cookies/profils, correctifs ENV-01 selon politique et preuves |
| Contenu Git hostile dans Nora/Markdown | Élevée | Source non autorisante, rendu sûr, outils Git read only |
| Sources Figma évolutives | Moyenne | Capture native datée+digest, comparaisons runtime mêmes viewports |
| Rupture de continuité Nora après D7 | Élevée | Test D3/PG de message final, reprise durable sans second effet |
| Créer nouvelle DB/index/moteur sans besoin | Élevée dette | Réemploi tables/domaines ; migration et abstraction seulement si nécessité prouvée |
| Modification côté code sans synchroniser R2/as-built | Moyenne | Docs, tests et preuve dans le même lot |
| Branche E08 derrière `main` | Moyenne | Pré-check/reconciliation de la base technique, sans rebase spontané |

**Dette admissible seulement si** : justification explicite, propriétaire, limite, risque, critère d'exit et test de non-régression. Pas de POC/fixture ni « temporary fallback » de production sans sortie vérifiable.

### 13.1 Arbitrages soumis à Morris pour G0

**A — Capacité REAL livrée :** confirmé en intention — branche/commit/PR/merge documentaires demandés via Nora doivent être actifs en RECETTE lorsqu'annoncés livrés. Valider si l'E08 nominal **inclut** le merge documentaire REAL au même gate, plutôt que dans une livraison séparée.

**B — PR préexistantes/hors document :** confirmer que le premier lot limite l'effet de merge aux PR documentaires Studio (aligné ML4) ou ouvrir une décision distincte de capacité Git plus large. **Ne pas supposer automatiquement l'extension à toutes les PR code/CI.**

**C — Mandat USER clair :** valider la règle fonctionnelle sans second clic ; mécanisme précis D6/empreinte et preuve doivent être contrôlés techniquement avant toute utilisation REAL.

**D — Path/branche par défaut :** accepter ou refuser des conventions documentaires bornées ; en cas de refus, clarification conversationnelle ciblée.

**E — Publications Studio :** liste transversale au projet, en-tête 11.04 à harmoniser au contrat ; aucune redéfinition de Figma par Cursor de sa propre initiative.

**F — Périmètre exact de la recette :** jeu de sandbox et compte Pilote, droits GitHub et contrat de preuves ; la configuration durable de RECETTE ne peut pas contourner ENV-01.

L'approbation de vision et du présent contrat ne dispense pas des gates de code, sécurité, API, migration ou preuve. Morris n'a pas à valider le détail de chaque méthode TypeScript pour juger l'acceptation : les invariants, les risques et les preuves doivent permettre cette décision en connaissance de cause.

---

## 14. Conditions de STOP

**STOP immédiat avant code** si : contrat fonctionnel ou Figma de référence non consultable ; autorité ambiguë/contradictoire ; propriétaire inconnu ; branche/base/HEAD non vérifiés ; décision normative D6/ENV-01 à modifier sans GO ; changement DB/persistance non arbitré ; routeur métier lexical réintroduit ; fournisseur imposant une mutation extérieure au mandat ; incapacité à distinguer SCRIPTED et REAL ; secrets ou comptes partagés entre lanes ; absence de scénario de rollback ; template SFIA v2.6 non relu ; portée PR externe technique assimilée implicitement à la publication documentaire.

**STOP avant RECETTE** si : merge annoncé mais hard-blocked ; publication réelle impossible ; pas de preuve d'acte USER ; chaîne Nora interrompue sans restitution ni reprise maîtrisée ; résultat technique non observable ; candidat non figé ; GitHub sandbox non isolé ; Figma code non confronté ; tests bloquants FAIL.

**STOP avant merge du chantier** si : absence de GO Morris, base `main` dérivée non confrontée, CI/proof manquants ou réserves de risque non arbitrées.

---

## 15. Verdict de ce dossier

| Niveau | Verdict |
| --- | --- |
| Vision produit et principe Nora chat-first | **ARBITRAGES UTILISATEUR REPRIS** — à confirmer dans la revue consolidée |
| UX Figma page 11 | **CIBLE VALIDÉE DANS L'ÉCHANGE** ; source mutable, aucune preuve G5 E08 |
| Contrat fonctionnel E08 v0.2 | **DOCUMENTED CANDIDATE**, non promu VALIDATED SPEC par la création de commit |
| Architecture AS-IS | **CODE INSPECTÉ SUR `main`** ; local/RECETTE NON OBSERVÉS |
| Architecture TO-BE | **PROPOSÉE, COHÉRENTE AVEC LES PROPRIÉTAIRES EXISTANTS**, en attente de revue |
| Exécution document Git REAL | **CONDITIONNELLE**, couverture et disponibilité E08 non prouvées |
| Merge REAL | **NON IMPLÉMENTÉ DANS LE PROVIDER REAL OBSERVÉ** (hard-blocked) |
| Construction, tests et acceptation E08 | **NOT STARTED / NOT PROVEN pour ce contrat** |
| PR / merge / STABLE / Gate C / R6 / ADOPTED | **NON AUTORISÉS / NON ACQUIS** |

**Recommandation de suite :** revue Morris des résultats et arbitrages §13.1, pas des détails d'implémentation ; intégration des corrections éventuelles dans ce candidat sous mandat ; puis **GO d'exécution Cursor distinct** après pré-check/routing/template v2.6 depuis la branche de référence applicable. Le code et les preuves pourront seuls transformer cette conception en une capacité réellement recettable.

---

## 16. Sources techniques et fournisseurs

**Code Git primaire :** `projects/sfia-studio-next/web/src/domains/integrations/`, `domains/execution/`, `domains/conversation/`, `domains/decisions/`, `domains/proofs/`, `db/schema.ts`, `app/projects/[projectId]/page.tsx` et `components/figma/TravailViewer.tsx` au SHA `main@1dd1a8ec738edb7851e2ec290769082035c1b657`.

**Tests existants identifiés** : `web/tests/unit`, `web/tests/integration`, `web/tests/e2e` (voir §11). Leur existence est prouvée par l'arbre Git, pas leur exécution pendant cette analyse.

**GitHub REST officiel (vérification conceptuelle, non preuve d'appel runtime Studio)** :
- [Repository Contents](https://docs.github.com/en/rest/repos/contents) — lecture du contenu à ref et récupération de répertoires.
- [Git Trees](https://docs.github.com/en/rest/git/trees) — objets d'arborescence et limites des réponses récursives.
- [Pull requests](https://docs.github.com/en/rest/pulls/pulls) — état/permissions/merge et précondition SHA.

**Méthode de delivery** : SEF v0.2, ENV-01, méthode Figma ↔ Cursor v1.1 sur `main`, SFIA v2.6 externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` **à relire obligatoirement avant prompt**, non utilisés pour générer un prompt dans ce dossier.

*Fin — Contrat d'architecture et d'acceptation candidat E08 v0.1.*

---

## 17. Addendum architecture AS-BUILT E08 — 22 novembre 2026

**Nature : consolidation du contrat d'architecture candidat après construction et revue technique.** Contenu approuvé par Morris pour publication documentaire le 22/11/2026 ; aucune modification normative de SEF, des décisions, de R2, d'ENV-01 ni d'ADR. Les sections 0–16 constituent l'historique de conception à la date de leur rédaction ; leurs mentions « non implémenté » ou « NOT STARTED » ne décrivent plus le candidat E08 postérieur. L'addendum ne prétend pas promouvoir le dossier entier en VALIDATED SPEC ou le produit en ADOPTED.

### 17.1 État réalisé et frontières propriétaires

| Domaine | Réalisation dans le candidat E08 | Limite |
| --- | --- | --- |
| D3 — Nora | Qualification et conduite des intentions Git, restitution dans la conversation | E2E LIVE merge non exercé |
| D4 — Documents | Révisions source et références de publication | Audit exhaustif des données LIVE non réalisé |
| D6 — Décisions | Mandats distincts de publication documentaire et de fusion, liés à la demande utilisateur | Autorité toujours requise au point d'effet |
| D7 — Exécution | Préparation, dispatch, fingerprint, mode fournisseur figé, requalification et réconciliation | WRITE-07 en REAL non testé |
| D8 — Résultats et preuves | Références de publication, fait MERGE corrélé et SHA de fusion distinct de la source | Succès merge REAL non prouvé |
| D9 — GitHub | Lecture et publication documentaire REAL éprouvée ; chemin merge REAL implémenté avec éligibilité restrictive | Aucun appel de fusion GitHub REAL exécuté |
| UX | Dépôts, branches, arborescence, preview, publications et fallback « Aperçu indisponible » Figma 11.17 | Couverture visuelle exhaustive non démontrée |

**Aucun nouveau moteur d'effets ni nouvelle autorité métier** n'a été introduit par le macro-lot selon les diffs et rapports examinés.

### 17.2 Invariants techniques retenus

- Une publication ne vaut jamais autorisation implicite de merge.
- Un plan de fusion sans **effectProviderMode REAL ou SCRIPTED prouvé** est refusé avant toute mutation ; toute divergence impose requalification.
- D6 exige un mandat de fusion distinct et lié au plan exact. Les permissions GitHub ne sont pas inférées d'un texte produit par Nora.
- D7 contrôle dépôt, PR, HEAD/ref source et cible avant l'effet ; la réconciliation interdit une attribution de succès sans provenance suffisante.
- **SHA du commit source documentaire et SHA du commit de fusion distincts** : le premier demeure la référence source de publication, le second est conservé dans le détail et le fait MERGE.
- Le fournisseur SCRIPTED avance uniquement la branche cible.
- L'API GitHub de fusion n'est accessible que dans le périmètre documentaire autorisé, sans force merge ni bypass des règles de sécurité.
- L'état **mergeable=true** ne vaut pas éligibilité à lui seul : le contrat implémenté exige **mergeable_state=clean**. Les états unstable, blocked, dirty ou inconnus sont refusés.

Ces invariants ont été inspectés dans les diffs et éprouvés par tests ciblés SCRIPTED/mock, **pas** par une mutation GitHub de fusion réelle.

### 17.3 Traçabilité des builds et preuves

| Élément | Source / statut |
| --- | --- |
| Dernier SOURCE candidat | 10128bdb6bb1020a0fd8d4976b91879bff26c3b3, **local non poussé** |
| TREE candidat | be778f1bf461f15acf94bfed6879d43fa6256a0d |
| BUILD RECETTE | 2uHrYBsQUvf6aii40hMpj |
| URL | http://127.0.0.1:3200 |
| [Handoff développement merge](https://github.com/mcleland147/sfia-workspace/blob/430a1698ae7e992cdf16423937663452c8bb430d/sfia-review-handoff/latest-chatgpt-review.md) | Première livraison ; tests ciblés, diffs complets et réserves |
| [Handoff correction C1/C2/C3](https://github.com/mcleland147/sfia-workspace/blob/3b11edd0b95ce90070f52ca75907f00e49a83610/sfia-review-handoff/latest-chatgpt-review.md) | Correction de sûreté et preuves PostgreSQL 8/8, sécurité 5/5, tests unitaires et TypeScript PASS selon Cursor |
| [Handoff cutover RECETTE](https://github.com/mcleland147/sfia-workspace/blob/f30451d2dac193d6fc610194594f80e8616754c2/sfia-review-handoff/latest-chatgpt-review.md) | Compilation, BUILD_ID servi, backup SHA-256, restore proof et rollback rapportés PASS ; rapport vérifié sur GitHub |
| Rollback immédiat préparé | SOURCE 98118de073e9df5f2446592a281060ddb64369fe ; BUILD _U3Z92BCd0K_-hiMvgTP9 |
| GitHub sandbox | mcleland147/chantiers360, PR #21 OPEN, fusion non exécutée |

ChatGPT n'a pas accès au worktree ou au serveur local et ne transforme pas les contrôles de Cursor en mesures locales indépendantes. La RECETTE sert ce candidat **selon le handoff cutover**.

### 17.4 UX et acceptation

- Source UX : Figma page 11, notamment 11.17, et visionneuse Travail réutilisée ; aucun contrat UX concurrent créé.
- Morris a accepté visuellement le cas **DOCX « Aperçu indisponible »** sur capture RECETTE. La destination effective du clic GitHub et la fidélité pixel-perfect générale ne sont pas prouvées par cette capture.
- Cas READ : sept PASS cumulés inter-builds ; PREVIEW-02/03/05/06/07/11 gardent leurs réserves techniques.
- WRITE-04 : publication sur branche exacte avec PR #21 vérifiée LIVE/REAL ; WRITE-05 : réconciliation READ avec limites D6/D7/D8.
- WRITE-07 et merge LIVE/REAL : **NON TESTÉS**.

### 17.5 Dette acceptée, STOP et suite

Le préflight GitHub de la PR #21 indique **mergeable=true / mergeable_state=unstable** : trois checks SUCCESS (Docker, backend, frontend), deux audits npm FAILURE. Les protections de branche ne sont pas consultables avec les droits actuels ; aucune exemption n'est inférée.

**Arbitrage Morris :** arrêter l'essai de fusion plutôt que modifier les dépendances sandbox, contourner clean ou multiplier les PR de test. La dette de preuve est explicitement reportée vers R6 ; elle ne devient pas un PASS.

**Sortie architecture du macro-lot :** code et documentation E08 candidats cohérents au niveau des changements examinés, **READY FOR GIT INTEGRATION REVIEW WITH DOCUMENTED RESERVES**. L'intégration projet, la CI de PR, le post-merge et la clôture restent soumis à gates distincts. **NO RELEASE / STABLE NOT AVAILABLE / E08 NON ADOPTED.**

*Fin de l'addendum architecture E08 du 22 novembre 2026.*
