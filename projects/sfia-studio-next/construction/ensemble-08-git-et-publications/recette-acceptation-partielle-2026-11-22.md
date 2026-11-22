# SFIA Studio Next — PV de recette utilisateur
## Intégrations Git et publication documentaire pilotée par Nora

| Champ | Valeur |
| --- | --- |
| Date du constat | 22 novembre 2026 (Europe/Paris) |
| Produit | SFIA Studio Next — Ensemble 08 / collaboration Git |
| Nature | **PV de recette utilisateur et plan de scénarios**, document factuel non normatif |
| Autorité UAT | Morris — observations et acceptations exprimées dans la conversation |
| Statut global | **RECETTE PARTIELLEMENT ACCEPTÉE — PUBLICATION CONVERSATIONNELLE BLOQUANTE** |
| Lane | RECETTE locale `http://127.0.0.1:3200` |
| SOURCE_SHA servi, selon compte rendu Cursor | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| TREE, selon compte rendu Cursor | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| BUILD_ID servi, selon compte rendu Cursor | `zKGLfPHM1TMilec4qglJv` |
| Base Git distante lors de la rédaction | `origin/main@a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Branche d'édition du PV | `docs/next-git-recette-20261122` — documentaire, hors runtime et hors `main` |
| Portée | Enregistrer le verdict utilisateur, qualifier les scénarios à prouver et transmettre le défaut à Cursor |
| Ne vaut pas | MERGED, STABLE, RELEASE, ADOPTED, preuve GitHub REAL d'écriture |

> **Règle de lecture.** « Accepté Morris » signifie que Morris a confirmé l'usage ou la conformité dans cette UAT. Ce statut n'invente pas un test automatisé, une preuve d'effet GitHub distant ni un niveau `BEHAVIOR PROVEN` non fourni. Les points non mentionnés comme testés restent non vérifiés.

## 1. Résumé d'acceptation

**Accepté par Morris :**
- L'écran **Intégrations 11.06** : rendu visuel, thème, structure, libellés et actions ; « très bien », aucune correction UX supplémentaire demandée.
- Les opérations usuelles autour des dépôts, que Morris confirme fonctionnelles : ajout et rattachement d'un dépôt au projet, visualisation d'un dépôt, navigation dans son contenu, consultation d'un fichier et suppression d'une branche. Ces déclarations valent validation UAT de ces usages, sans nouvelle exécution destructrice demandée.
- La connexion GitHub en lecture et l'affichage du dépôt accessible, observés pendant les parcours.
- Les corrections de géométrie Figma 11.06 (G5) : rapport Cursor PASS ; acceptation visuelle Morris distincte.

**Non accepté / bloquant :**
- Le parcours **depuis la conversation avec Nora** pour publier un document Studio sur GitHub, créer la branche et le commit distant puis restituer le résultat.
- À ce stade, les parcours de PR, push/publication et merge pilotés depuis Nora ne disposent pas d'une preuve de bout en bout et ne peuvent pas être acceptés.

**Décision de portée pour la suite :** ne pas rouvrir l'UX Intégrations ni les opérations de consultation/rattachement déjà acceptées en l'absence de régression. Concentrer le diagnostic et la correction sur le chaînage Nora → Studio → GitHub → retour Nora, dans **un macro-lot intégré**.

## 2. Matrice UAT : scénarios déjà acceptés

| ID | Parcours / résultat utilisateur | Statut | Nature de preuve / réserve |
| --- | --- | --- | --- |
| UX-01 | Écran Intégrations 11.06 — rendu, thème, panneaux, rail, libellés et boutons | **ACCEPTÉ MORRIS** | Retour utilisateur explicite sur capture RECETTE ; G5/F2 PASS rapporté par Cursor sur DEV |
| GIT-01 | Accéder aux intégrations et visualiser la connexion GitHub | **ACCEPTÉ MORRIS** | Usage observé sur capture ; détail technique du provider rapporté séparément |
| GIT-02 | Ajouter / rattacher un dépôt au projet | **ACCEPTÉ MORRIS** | Confirmation utilisateur de fonctionnement ; ne pas demander de nouveau test artificiel |
| GIT-03 | Visualiser un dépôt et son arborescence | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
| GIT-04 | Sélectionner et consulter un fichier du dépôt | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
| GIT-05 | Supprimer une branche depuis le parcours Git prévu | **ACCEPTÉ MORRIS (DÉCLARATIF)** | Confirmation utilisateur ; effets distants/réversibilité non ré-audités dans ce PV ; ne pas rejouer une suppression |
| GIT-06 | Parcourir le dépôt avec les droits réellement autorisés au compte | **ACCEPTÉ SUR PARCOURS OBSERVÉ** | Dépôt `mcleland147/chantiers360` affiché ; couverture multi-dépôts non revendiquée |
| GIT-07 | GitHub REAL WRITE activé en RECETTE | **CONFIGURATION RAPPORTÉE, PAS PREUVE DE PUBLICATION** | `STUDIO_GITHUB_PROVIDER=real`, `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`, `GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360` selon contrôles Cursor |

Hors confirmation utilisateur : déconnexion OAuth, plusieurs dépôts simultanés, tests négatifs de sécurité, autres variantes Figma, résistance aux erreurs. Ces scénarios ne sont pas des défauts constatés, seulement des périmètres de non-régression proportionnée.

## 3. Incident bloquant : publication conversationnelle

**Référence :** `UAT-GIT-PUB-01` — priorité P0 pour l'acceptation fonctionnelle E08.

**Projet de l'UAT :** CampusFlow.

**Document D4 visé :** « Références externes — Enseignements de Chantiers360 », **révision 2, contenu inchangé**.

**Dépôt cible explicitement retenu :** `mcleland147/chantiers360`.

**Cible demandée :** racine du dépôt, sur une **nouvelle branche**. Nora a proposé `references-externes-enseignements-chantiers360.md` comme nom de fichier, et indiqué que le nom de branche pouvait être généré. La cible exacte doit être inspectée et gouvernée avant effet, sans ajouter une demande métier inutile.

### Parcours réellement observé

1. Morris demande de publier le document sur une nouvelle branche Git.
2. Nora indique d'abord une indisponibilité de WRITE (avant réactivation de la configuration).
3. Après activation technique du WRITE, Morris réitère sa demande.
4. Nora répond : « Aucune publication n'a été lancée. Précision nécessaire : Chemin de publication Git manquant. »
5. Morris précise : « tu peux le mettre à la racine du dépôt chantiers360 ».
6. Nora reconnaît ensuite le document, le dépôt, la racine et le principe d'une nouvelle branche, et propose un nom de fichier.
7. Morris répond notamment « ok go ».
8. Nora termine : « Aucune publication n'a été tentée pour cette demande. Motif : Intention de publication reconnue — aucun effet Studio n'a été lancé. »

**Résultat observé : FAIL UAT.** La conversation reconnaît l'intention mais n'aboutit pas au lancement de l'effet. Aucun SHA de branche/commit, lien de fichier ou fait D8 de publication n'est présenté. **Le point de rupture exact n'est pas prouvé par la capture** : il reste à localiser entre contexte, qualification sémantique D3, préparation du plan D7, HumanDecision D6, admission, dispatch D9, persistance/reprise et restitution.

**Important :** ne pas transformer le texte de Nora « aucun effet » en audit indépendant du dépôt distant. Avant tout retry mutatif, inspecter les tentatives locales et les faits Git réels pour écarter un effet antérieur non restitué.

## 4. Scénarios de recette à démontrer pour fermer le défaut

| ID | Priorité | Scénario | Résultat et preuve attendus |
| --- | --- | --- | --- |
| PUB-01 | **P0** | Depuis Travail, demander librement la publication du document existant, révision 2 inchangée, sur une nouvelle branche du dépôt déjà sélectionné | D3 conserve document/révision/dépôt ; D7 produit un plan précis et D6 reçoit l'acte utilisateur ; aucune question redondante |
| PUB-02 | **P0** | Fournir successivement « à la racine », puis « ok go » dans la **même conversation** | Le contexte utile persiste ; si l'enveloppe autorise le plan exact, déclenchement D7 ; sinon une clarification précise, jamais « intention reconnue sans effet » terminal |
| PUB-03 | **P0** | Vérifier `documentary` et droits du dépôt `chantiers360` au moment de la tentative | Vérification serveur READ/WRITE, lien projet, identité et mandat D6 ; aucune désactivation silencieuse ni autorité déduite du LLM |
| PUB-04 | **P0** | Publier vers une branche documentaire nouvelle avec chemin et contenu D4 exacts | Branche distante réelle, commit GitHub avec SHA et fichier à contenu/empreinte corrélés à D4 ; les effets sont vérifiés par GitHub et D8 |
| PUB-05 | **P0** | Retour de l'opération dans le même fil Nora | Une seule réponse terminale fidèle : succès vérifié + liens/ref/SHA, échec exact ou état incertain ; ne pas annoncer succès avant fait Git |
| PUB-06 | P1 | Demander explicitement branche + commit + ouverture de PR | PR réelle si le mandat couvre la PR ; numéro, base/head et URL vérifiés ; aucune PR implicite si la demande ne la couvre pas |
| PUB-07 | P1 | Demander explicitement le merge d'une PR documentaire éligible | Mandat D6 distinct, HEAD/base/protections vérifiés, merge réel seulement s'il est autorisé ; preuve GitHub/D8 ; aucun merge implicite |
| PUB-08 | P1 | Répéter la même demande, retry HTTP, timeout ou ACK perdu | Pas de deuxième branche/commit/PR/merge injustifié ; observation distante avant replay ; `UNKNOWN` tant que non réconcilié |
| PUB-09 | P1 | Quitter puis reprendre la conversation après plan/tentative | Contexte et références de mission durables, reprise correcte sans nouvelle mutation, restitution cohérente |
| PUB-10 | P1 | Demande ambiguë (plusieurs dépôts, version ou chemin indéterminable) | Une clarification ciblée avant effet ; pas de blocage générique ni ciblage arbitraire |
| PUB-11 | P1 | Refus GitHub (droits, branche protégée, conflit, révocation) | Refus effectif, sans mutation, expliqué par Nora ; protections conservées |
| PUB-12 | P1 | Demande négative/hypothétique (« ne publie pas ») ou texte Git hostile | Zéro tentative et zéro mandat D6 ; pas de moteur à mots-clés concurrent |
| PUB-13 | P1 | Révision 2 demandée inchangée vs préparation éventuelle d'une révision 3 | Le buffer publié est exactement celui de la révision mandatée ; ne pas créer ou utiliser une autre version |
| PUB-14 | P1 | Publication depuis un autre projet/pilote vers le même dépôt | Isolation projets, sessions, permissions et décisions ; pas de mandat partagé par accident |

**Note opérationnelle :** avec l'API GitHub Contents, publier un fichier crée directement un commit distant ; ne pas inventer un `git push` local comme étape si cette API est utilisée. Dans l'expérience utilisateur « publier/push » désigne l'effet distant observable ; PR et merge restent des opérations distinctes.

## 5. Contrat de diagnostic et de correction Cursor

Un **macro-lot unique**, avec diagnostic avant modification, correction de la cause propriétaire, tests et remise à disposition en RECETTE :

1. Reconstituer **exactement la conversation** et tracer, pour chaque tour, intention D3, contexte durable, plan D7, admission/mandat D6, tentative D7, provider D9, observation D8 et continuation Nora. Partir des logs expurgés et états DB existants, sans inventer d'identifiants.
2. Examiner les chemins existants (`semantic-qualification`, `intent-conduction`, `service`, `mission-continuity`, `cognitiveContinueFromFacts`, `resumeMissionAfterPublicationAuthorize`, publication-effect-restition/dispatch selon code trouvé). Identifier la **cause exacte**, pas seulement la dernière phrase de Nora.
3. Corriger le chaînage contextualisé : résolution du document/révision, dépôt, racine, nom de fichier/branche, admission D6, dispatch D7 et retour D8/D3. Ne pas ajouter de routeur lexical ou de moteur de mission parallèle ; conserver les gardes.
4. Prouver PUB-01 à PUB-05 en déterministe/PG/navigateur, puis REAL/LIVE uniquement sous mandat d'effet valide. Les autres scénarios servent à la non-régression proportionnée. Aucune publication GitHub réelle automatique sur la seule base de ce PV.
5. Synchroniser code, tests, as-built et ce PV ; produire un SHA/TREE/BUILD figé, backup/restore proof, cutover sur la RECETTE existante uniquement selon ENV-01 et GO technique applicable ; rollback prêt.
6. Fournir Review Pack FULL SFIA v2.6 avec créations intégrales et diffs des modifications, publication handoff L3 et revue distante ; aucun push/PR/merge de la branche projet sans GO.

**Critère de sortie :** Nora traite une demande de publication conversationnelle **sans répétition inutile ni faux succès**, et la preuve d'effet distante ne peut être déclarée `BEHAVIOR PROVEN` que lorsqu'elle a été réellement observée sur le dépôt autorisé.

## 6. Gouvernance et gates ouverts

- **UX Intégrations : ACCEPTÉ MORRIS** ; ne pas modifier le design 11.06 sans nouvel écart démontré.
- **Rattachement/lecture/consultation/branche : ACCEPTÉ MORRIS déclaratif**, maintien en tests de non-régression.
- **Publication conversationnelle : FAIL UAT**, incident bloquant E08.
- **Configuration GitHub REAL WRITE : active selon rapport Cursor**, mais `REAL WRITE END-TO-END NOT PROVEN`.
- **Nora LIVE, PR et merge via conversation : NOT PROVEN**.
- **RECETTE candidate : disponible pour poursuite UAT** ; pas d'acceptation globale de l'Ensemble 08.
- **Git candidat local** `f1907aad...` non accessible sur `origin/main` ; le présent PV documentaire n'en certifie pas l'intégration.
- **Push projet / PR / merge / STABLE / ADOPTED : non autorisés par la publication de ce PV**.

## 7. Références et traçabilité

Sources à relire à leur ref applicable lors du cycle technique :

- `projects/sfia-studio-next/governance/SEF.md` ;
- `projects/sfia-studio-next/governance/roadmap.md` ;
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` ;
- `projects/sfia-studio-next/governance/product-versioning.md` ;
- `projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` ;
- `projects/sfia-studio-next/conception-fonctionnelle/integration-git-gouvernee.md` ;
- `projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` ;
- contrat fonctionnel E08 candidat sur `docs/next-ensemble08-contrat-fonctionnel-20261121` ;
- contrat architecture/acceptation E08 candidat, même ref ;
- `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff@728f3c82cbec4f53368e32ce6995ba8487054cf0` ;
- captures UAT remises par Morris dans la conversation du 22 novembre 2026 (non intégrées à ce commit documentaire) ;
- principes de preuves : **DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED** ; SCRIPTED ≠ LIVE ≠ REAL.

---

**Verdict PV du 22/11/2026 : ACCEPTATION PARTIELLE — publication Git conversationnelle BLOQUANTE.**

Ce PV enregistre des constats de recette et un plan de tests ; il ne publie aucun code ni aucune décision normative.

## 8. Campagne UAT Git restante — prompts prêts à utiliser (addendum du 22/11/2026)

> **Chronologie :** les sections 1–7 ci-dessus sont le PV de l'UAT initiale, conservé sans réécrire son verdict historique. Depuis, une publication Git REAL a été observée, suivie de correctifs Nora. **État courant : UX/gestion des dépôts acceptées ; publication Git réelle constatée ; vérifications conversationnelles des PR incomplètes ; acceptation E08 globale toujours ouverte.** Le build de RECETTE rapporté au moment de cette campagne est `c67a6ba8bde5c4d818a23fe96d2822a22c050121` / TREE `f54c0aff60af9e47f2f4a181a9d1dcfa75519a95` / BUILD `tEiDqhhGWNipSWO_86ZoG`, sans relecture indépendante du runtime Mac par ChatGPT. L'activation WRITE ne vaut pas mandat de mutation pour les tests de lecture.

Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif**. Les formulations ci-dessous reproduisent **intégralement les prompts proposés dans la conversation UAT**, afin que Morris ou Cursor puissent les reprendre sans réinventer de scripts.

### GIT-UAT-01 — Consulter une PR en temps réel

**Nature :** Lecture seule  
**État :** **PARTIAL / FAIL UAT** — branches et SHA lus ; statut actuel et fusion non consultables via les capacités Nora exposées.

**Prompt exact proposé à Morris :**

> Consulte directement sur GitHub la PR #19 du dépôt mcleland147/chantiers360. Donne-moi son statut actuel, sa branche source, sa branche cible, son SHA HEAD et précise si elle est fusionnée. Ne fais aucune modification.

**Critères attendus :** Nora obtient l'état GitHub actualisé, et non seulement la dernière trace D8. Lors du dernier contrôle externe, la PR était ouverte et non fusionnée.

### GIT-UAT-02 — Examiner les changements de la PR

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Analyse la PR #19. Combien contient-elle de commits et de fichiers modifiés ? Quels fichiers sont concernés ? Résume les changements par rapport à main, en lecture seule.

**Critères attendus :** Identification du fichier documentaire, du commit et du diff réel, fondés sur une consultation GitHub.

### GIT-UAT-03 — Vérifier la possibilité de fusionner

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Vérifie si la PR #19 peut actuellement être fusionnée vers main. Contrôle les conflits, les protections de branche, les checks disponibles et les permissions nécessaires. Explique les éventuels blocages. Ne fusionne rien.

**Critères attendus :** Nora distingue mergeable, checks, protections et autorité Pilote ; elle indique précisément les contrôles non accessibles, sans conclure par approximation.

### GIT-UAT-04 — Consulter et comparer les commits

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Retrouve le commit qui a publié le document Références externes — Enseignements de Chantiers360. Donne-moi sa date, son SHA, les fichiers concernés et compare-le au HEAD actuel de main. N'effectue aucune écriture.

**Critères attendus :** Historique et références vérifiés ; distinction entre SHA commit, SHA blob, HEAD de la branche et HEAD de main.

### GIT-UAT-05 — Identifier les droits Git effectifs

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Pour le dépôt chantiers360 rattaché à CampusFlow, vérifie les capacités Git réellement disponibles dans Studio : lecture, création de branche, publication de fichier, création de PR et merge. Distingue les permissions GitHub des autorisations que je dois donner pour agir. Ne déclenche aucune opération.

**Critères attendus :** Capacités étayées par les permissions et guards réellement consultables, sans auto-attribution d'un mandat permanent.

### GIT-UAT-06 — Retrouver une publication sans la dupliquer

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Retrouve dans Studio la dernière publication du document Références externes — Enseignements de Chantiers360. Vérifie sa tentative, sa branche, son commit et sa PR associée. Existe-t-il déjà une publication équivalente ? Ne crée aucun doublon ni nouvelle branche.

**Critères attendus :** Réconciliation D7/D8 avec GitHub, liens vérifiables, aucune nouvelle mutation ni duplication.

### GIT-UAT-07 — Vérifier la continuité après rechargement

**Nature :** Lecture seule  
**État :** NON TESTÉ

**Prompt exact proposé à Morris :**

> Nous reprenons notre conversation après rechargement de l'application. Retrouve le dernier résultat de publication GitHub du projet CampusFlow et indique ce qui est terminé, encore ouvert et non fusionné. Vérifie les informations qui ont pu évoluer, sans effectuer d'écriture.

**Critères attendus :** Reprise contextuelle sans ressaisie du dépôt ou du document ; informations fraîches distinguées des faits historiques.

### GIT-UAT-08 — Fusion gouvernée par Nora — optionnel

**Nature :** MUTATION RÉELLE — NE PAS EXÉCUTER SANS GO EXPLICITE  
**État :** NON TESTÉ — GO de fusion non accordé

**Prompt exact proposé à Morris :**

> Je t'autorise à fusionner uniquement la PR #19 du dépôt mcleland147/chantiers360 vers main, si elle est toujours ouverte, si son HEAD correspond au commit attendu et si les protections GitHub le permettent. Vérifie toutes les préconditions avant l'opération. Si elles ne sont pas satisfaites, n'effectue aucune fusion et explique pourquoi. Après l'opération, vérifie le résultat réel sur GitHub et communique-moi le commit de fusion et le lien vers le document sur main.

**Critères attendus :** Mandat D6 distinct, HEAD/base/protections vérifiés, merge D7/D9 seulement si expressément autorisé, confirmation distante et fait D8 ; aucun merge implicite.

## 9. Résultat UAT actuel et diagnostic préliminaire — PR #19 / état de tour

### 9.1 GIT-UAT-01 — résultat observé sur captures Morris

La réponse de Nora commence par :

> « Vérification partielle uniquement : je peux consulter les branches Git, mais les outils disponibles ne donnent pas accès aux métadonnées actuelles de la PR #19. Je ne peux donc pas confirmer son statut ni sa fusion directement sur GitHub. »

Elle fournit correctement :
- dépôt `mcleland147/chantiers360` ;
- branche source `sfia/pub-3ab1e0c2eb6b7499`, existence confirmée par lecture de ref ;
- SHA HEAD `16f9961ef2ee6d13235e56059313f691521947fd` ;
- `main` comme branche cible **selon l'historique Studio**, non la PR live ;
- absence de modification effectuée annoncée.

Elle ne vérifie **pas** le statut courant de la PR #19, ni son état de fusion, ni la cible courante de la PR depuis l'API PR. **Verdict : PARTIAL / FAIL pour le scénario GIT-UAT-01**, et non PASS global de la consultation PR. Cette prudence de langage est correcte face à un outil manquant ; l'absence de capacité reste un écart produit.

### 9.2 Faits externes GitHub indépendants (READ uniquement)

Consultation directe GitHub réalisée par ChatGPT pour comparaison, à date du 22/11/2026 :

| Fait externe | État vérifié |
| --- | --- |
| Dépôt | `mcleland147/chantiers360` |
| PR | [#19](https://github.com/mcleland147/chantiers360/pull/19) **OPEN, non fusionnée** |
| Base | `main` |
| Head | `sfia/pub-3ab1e0c2eb6b7499` |
| HEAD commit | `16f9961ef2ee6d13235e56059313f691521947fd` |
| Fichier sur head | `references-externes-enseignements-chantiers360.md` présent, blob `7518405f3b8f868ab88d3e257d2489a50e4b338b` |
| Fichier sur main | Absent à ce chemin lors de la consultation (404) |

La connexion **GitHub utilisée par ChatGPT pour le contrôle indépendant n'est pas la preuve que Nora dispose du même outil, du même scope ni des mêmes permissions dans Studio**.

### 9.3 Anomalie distincte — bandeau de statut de tentative

La seconde capture de Morris présente sous la réponse Nora le bandeau :

> « La dernière tentative n'a pas abouti clairement. Le texte saisi est conservé ; réessayez ou réconciliez si une intention reste ouverte. »

**Contexte visible :** demande en lecture seule, réponse partielle comportant « Aucune modification effectuée ». Le bandeau paraît discordant avec la nature informationnelle de ce tour. **Son origine et sa corrélation exacte au tour ne sont pas observées** : il peut provenir du lifecycle de la commande courante, d'une tentative antérieure encore ouverte, d'un timeout, d'une erreur d'outil ou d'une projection UI. Ne pas l'assimiler automatiquement à un échec GitHub ni à une mutation.

**Risque UX :** message inquiétant laissant croire à un effet à réconcilier, alors que l'utilisateur demandait seulement de lire le statut d'une PR. Risque technique potentiel : propagation d'états `UNKNOWN`/`NOT_ATTEMPTED` ou bannière de retry entre opérations informationnelles et effectives.

### 9.4 Hypothèses de diagnostic — non prouvées

| Hypothèse | Observation qui la motive | Comment la qualifier |
| --- | --- | --- |
| Outil PR READ non exposé à Nora | Nora affirme ne pas pouvoir consulter les métadonnées PR ; matrice précédente s'appuyait en partie sur snippets D8 | Inventorier tools disponibles dans la session, métadonnées/contrats/schemas, sélection Nora et adapter D9 |
| PR READ existant mais hors `toolScope` ou interdit | Outils de branches accessibles, PR non accessible | Tracer `toolScope`, identité, projet, dépôt, permissions `pull_requests:read`, erreurs 403/404 |
| Historique D8 présenté comme actuel | Nora distingue explicitement historique Studio et absence d'état PR live | Comparer faits D8, rafraîchissement D9 et temps de dernière vérification |
| Bandeau de dernière tentative mal corrélé | Bannière retry/réconciliation après réponse read-only | Lire `conversation_turn_commands`, mission/operationId/turnId, transitions terminales, statut front, chronologie et logs expurgés |
| Erreur de lecture traitée comme effet incertain | Message « n'a pas abouti clairement » malgré réponse informationnelle | Vérifier mapping erreurs/outcomes, états `READ_FAILED` vs `EFFECT_UNKNOWN` ; ne pas créer nouveau modèle par défaut |

**Diagnostic ChatGPT :** écart **de couverture/mobilisation des capacités READ PR** très probable et **anomalie de restitution du statut d'une tentative** visible ; **aucune cause racine technique certaine** sans code/traces/runtime. Ne pas attribuer ce défaut au seul LLM, aux scopes GitHub ou à D7 sans preuve.

### 9.5 Décision et suite de recette

- **GIT-UAT-01 : PARTIAL / FAIL**, données branches correctes, état PR actuel non consulté par Nora.
- **GIT-UAT-02 à 07 : NON TESTÉS** sur ces captures ; ne pas inventer de verdict.
- **GIT-UAT-08 : NON TESTÉ**, scénario mutatif suspendu jusqu'à un GO de merge spécifique ; texte stocké à des fins de recette uniquement, **ce PV n'autorise aucun merge**.
- **Publication Git REAL :** la publication déjà réalisée est observée sur une branche, avec commit et PR ; la preuve historique ne remplace pas l'UAT de lecture dynamique actuelle.
- **UX Intégrations 11.06, rattachement, lecture fichiers et suppression de branche : acceptés Morris**, non rouverts.
- **Ensemble 08 : ACCEPTATION PARTIELLE, PAS ADOPTÉ**.
- Cursor doit auditer **dans le même macro-lot** l'exposition de la consultation PR et le cycle de vie/feedback des tours READ-only, corriger les défauts confirmés, tester et synchroniser l'as-built, sans mutation GitHub externe, sans re-déployer RECETTE sans gate ENV-01.

## 10. Trace des changements du PV

- Édition documentaire D1 bornée sur `docs/next-git-recette-20261122`, aucun code produit modifié, pas de PR/merge.
- Addendum de campagne `GIT-UAT-01..08` avec **prompts exacts**, attentes, niveau de risque et état UAT ; analyse de deux captures et fait GitHub PR #19 indépendant.
- Le PV initial demeure historique ; **la présente section et les sections 8–9 prévalent pour l'état actuel de l'UAT E08**.
