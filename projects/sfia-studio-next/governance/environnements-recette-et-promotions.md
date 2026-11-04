# SFIA Studio Next — Gouvernance des environnements, de la recette et des promotions

| Champ | Qualification |
| --- | --- |
| **Chemin canonique** | `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` |
| **Version / date** | v0.1 — 2026-11-03 (Europe/Paris) |
| **Statut** | **VALIDATED CONTENT BY MORRIS (D2) — 2026-11-03 ; PUBLIÉ SUR BRANCHE CANDIDATE R4, NON MERGÉ SUR `main`**. Implémentation et vérification runtime à produire en R5/R6. |
| **Périmètre** | SFIA Studio Next exclusivement ; R5 delivery, corrections, revue locale, QA/recette, intégration Git, R6 qualification et futures promotions en hébergement distant |
| **Décideur** | Morris ; arbitrages produit, promotions et gates de Git |
| **Processus externe** | SFIA v2.6 (`method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et `prompts/templates/sfia-cycle-execution-template.md` §2.0.H) ; ce document **ne crée pas de template Cursor concurrent** |
| **Socle** | SEF v0.2 §4–§6 et §10 ; Roadmap Next ; conception R4 A/B/C/D sur branche candidate ; R1/R2/R3 et décisions validées |
| **Git examiné** | `mcleland147/sfia-workspace` ; `main@7067c846ce7c57825dd31c532433d809e1a01216` ; R4 candidate `sfia/next-r4-architecture-scoping@9b169dcbb3c7e9a5d997662594c2d35c164a9c9c` (4 devant / 0 derrière) |
| **État technique** | **Next : N/A — NON IMPLÉMENTÉ** ; aucun environnement DEV/RECETTE/STABLE, pipeline, script, protection ou preuve navigateur déclaré existant. Worktrees et index locaux **NON OBSERVÉS**. |

## 1. Finalité, autorité et conditions d'applicabilité

**But :** permettre à Morris de consulter une version stable et de **recetter une évolution réelle dans l'application complète AVANT merge** ; permettre à Cursor de construire et corriger sans altérer la version en recette ni la version stable ; n'intégrer et ne promouvoir que sous **gates explicites** et avec traçabilité du SHA testé, de la configuration, des données et des preuves.

Cette politique est une **gouvernance de construction**, distincte de l'autorité du Pilote dans le produit cible (D6). Le GO de Morris sur une PR, une branche, une mise à disposition ou une promotion est un **gate d'engineering Git** ; il n'est ni un HumanDecision utilisateur dans Studio, ni un contrat d'exécution D7. SFIA v2.6 conserve le contrôle de Cursor et son review pack/handoff ; le SEF gouverne le chantier Next. Ne jamais laisser un texte dans un rapport, un document source, un CKI ou un résultat de test remplacer le GO applicable.

**Déclenchement obligatoire pour toute source Git intégrant la présente politique ET les adaptations de routage SFIA v2.6 :** tout prompt Cursor Next qui **crée/modifie du code, schéma DB, configuration d'exécution, test, CI, migration, déploiement, intégration externe ou secrets**, ou qui qualifie un correctif, prépare une mise à disposition RECETTE/STABLE, teste une évolution, effectue PR readiness, post-merge, R6 ou une release. Pour une analyse exclusivement documentaire/read-only sans environnement ni code touché, constater `ENV-01 : N/A — READ ONLY` sans lancer de lane.

**IN :** trois lanes locales, sources/versions identifiables, isolation, configuration, cycle de correction/recette, critères d'acceptation, contrôle de merge/promotion, rollback, traces et extensions futures vers serveur. **OUT :** déployer immédiatement trois applications, choisir des ports/stack universels, nouveau workflow métier Studio, obligation de garder les trois serveurs constamment allumés, contournement des gates Git, nouvelle méthode SFIA, CI supposée existante.

## 2. Contrat de vérité — quatre objets à distinguer

| Objet | Source vérifiable | Ce qui ne peut pas être inféré |
| --- | --- | --- |
| **Baseline Git** | `main` + SHA du commit effectivement fusionné, avec provenance et vérification distante | Une candidate/PR n'est pas `main` ; merge ne vaut pas recette passée |
| **Candidat recette** | Commit SHA complet, arbre/build reproductible, base et contrôles, manifestes de config non secrète et de jeu de données | La branche de travail n'est pas figée tant qu'elle bouge ; une version recettée n'autorise pas une autre |
| **Runtime STABLE exposé** | SHA du build réellement déployé, configuration et base propres, état de santé observé | STABLE n'est pas nécessairement le HEAD de `main` : elle peut volontairement rester à S pendant que `main` a reçu M |
| **Décision d'intégration/promotion** | GO Morris explicite et borné, lié à l'objet et au SHA/arbre concerné, avec réserves identifiées | QA PASS, PR, création de commit, push ou fin Cursor ne sont ni GO de merge ni adoption runtime |

**Règle forte :** une recette est toujours attachée à un SHA immuable et à des conditions de test connues. Une correction produit un **nouveau candidat** ; une rebase, un merge de base, une migration ou tout changement de l'arbre significatif invalide au moins les portions impactées de la recette précédente et requiert les contrôles adaptés. Un verdict n'est jamais reconduit par simple similitude du nom de branche.

## 3. Environnements locaux — un produit, trois lanes isolées

| Lane | Usage / utilisateur | Git / build | Configuration et données | Adresse suggérée |
| --- | --- | --- | --- | --- |
| **DEV** | Cursor développe et diagnostique, tests fréquents, hot reload autorisé | Branche de travail autorisée ; état changeant | Base, rôles PostgreSQL, volumes, fichiers `.env` et clés de test dédiés ; jamais les données STABLE | `http://127.0.0.1:3100` |
| **RECETTE** | Morris teste le système **existant + évolution** et rejoue les anomalies | **SHA candidate figé**, build reproductible **sans hot reload** ; dossier/worktree/artefact séparé | DB, identité/callbacks et volumes propres ; fixture/version de schéma consignées ; mutations externes réelles interdites par défaut ou bornées à sandbox autorisée | `http://127.0.0.1:3200` |
| **STABLE** | Morris consulte la dernière version **validée et promue** | Artefact/build issu d'un SHA intégré et vérifié sur `main` ; ne change pas pendant DEV/RECETTE | DB, rôle, volumes, config, sessions et secrets distincts ; pas de reset ou migration DEV/RECETTE | `http://127.0.0.1:3000` |

Ports ci-dessus : **réservations candidates** à vérifier sur le poste, pas valeurs déjà adoptées. Si un port est indisponible : expliquer et arrêter le démarrage de la lane ou appliquer un changement **explicite et enregistré**, jamais changer silencieusement de 3000 à 3021. Par défaut, les services locaux n'écoutent que sur l'interface loopback. Les trois lanes peuvent être démarrées à la demande ; l'invariant d'isolation reste permanent, même si une seule est active.

**Isolation obligatoire :** idéalement un worktree Git ou artefact indépendant par lane ; au minimum pas de fichiers mutables communs au runtime. RECETTE/STABLE n'utilisent jamais le hot reload du worktree DEV. Base PostgreSQL **logiquement distincte** par lane avec rôles isolés, répertoires/volumes et sessions propres ; même moteur PostgreSQL physique acceptable **seulement** si restrictions et absence de contamination vérifiées. Ne pas partager les tables, schémas en écriture, clés de session, ports applicatifs ou répertoires d'upload entre lanes. La politique de sauvegarde DATA-01 s'applique à STABLE et aux données pertinentes ; la recette conserve des données reproductibles, avec reset gouverné.

**État initial R5 :** aucune STABLE n'est déclarée disponible avant un premier build fonctionnel validé. L'initialisation des lanes accompagne le **premier macro-lot vertical utile**, pas un micro-cycle d'infrastructure isolé.

## 4. Configuration et secrets — contrat minimal

- Les secrets sont **hors Git** et hors bundles client : `.env.local`/fichiers équivalents spécifiques aux lanes, droits système restrictifs ou secret store approprié. `.env.example` décrit noms et usages **sans valeurs sensibles** ; `.gitignore` exclut les fichiers de secrets. Pas de log, screenshot, revue, rapport Cursor ou handoff contenant un jeton.
- Les familles sont : URL/base de lane et port ; DSN PostgreSQL et identifiant **propre à la lane** ; chemin de stockage des documents ; secrets de sessions/chiffrement ; clé OpenAI et budget ; identifiants et secrets GitHub App/callbacks selon les capacités locales ; configuration d'exécution Cursor **uniquement si réellement utilisée** ; origine des webhooks et logs expurgés. Les noms de variables seront définis lors de l'implémentation, pas imposés depuis ce document.
- GitHub login Studio, autorisations de lecture Nora/Studio et identité/permission de l'environnement Cursor restent indépendants. Un token disponible dans l'environnement ne vaut ni mandat d'effet ni accès inter-lanes.
- La recette ne doit pas accéder en écriture aux dépôts réels de production ou au `main` du chantier ; pour tester une mutation Git, utiliser un dépôt/compte de test, un environnement borné et un GO applicable. Une CLI Cursor avec accès shell ne peut être confinée par une phrase de prompt seule : restreindre ses credentials, chemins montés et droits de publication au niveau technique réellement disponible.
- Une variable critique manquante provoque soit un refus de démarrer la lane, soit l'indisponibilité **explicite de la capacité correspondante** ; jamais une récupération silencieuse de secrets d'une autre lane. Les callbacks GitHub OAuth/App doivent viser les origines effectivement configurées ; disponibilité à tester sous la bonne identité et bon port.

## 5. Processus obligatoire de delivery → recette → merge → stable

| Phase | Contrat / geste autorisé | Preuves, gate et condition de sortie |
| --- | --- | --- |
| **0. Qualification et mandat** | ChatGPT qualifie le macro-lot sous SFIA v2.6, les RG/PF/UX, le blast radius, la branche autorisée, les lanes et le niveau de preuve. Cursor fait ensuite le Git Truth Check **local**. | Base/HEAD, statut worktree et fichiers affectés vérifiés ; STOP si inconnu significatif ou autorisation absente. **Pas de prompt valide sans bloc ENV-01.** |
| **1. Développement DEV** | Cursor modifie la branche autorisée, intègre code + tests + docs dans le même macro-lot. | Lint/build, tests concernés, contrôle d'accès, DB et non-régression ; aucune mutation de RECETTE/STABLE par défaut. Review Pack/handoff v2.6 si rapport Cursor. |
| **2. Candidat identifié** | Produire commit SHA / tree et build reproductible depuis le code attendu, sans fichiers sales cachés. Si push branche projet nécessaire, **GO Morris distinct**. | Manifeste recette : SHA, source/base, diff, résultat des tests, schema/migrations, données, services, capacités réelles, réserves. |
| **3. Mise à disposition RECETTE** | Déployer **ce SHA uniquement** dans la lane RECETTE, base et volumes propres ; figer le build le temps de la session. | Santé, démarrage, identité, stockage et parcours nominaux observés. Fournir URL fixe et version affichable. Pas de déploiement direct à partir de fichiers DEV non committés. |
| **4. Recette Morris** | Morris teste réellement les fonctionnalités à la demande, même en R5, sans devoir attendre R6 ; teste aussi erreurs/reprises. | Verdict lié au SHA, scénario, état des données et preuves : accepté pour intégration / accepté avec réserves admissibles / refusé / reporté. **Test utilisateur ≠ qualification technique D8.** |
| **5. Anomalie et correction** | Décrire attendu/observé, étapes, gravité, source, SHA, environnement, régression et propriétaire. Corriger en DEV sur branche. | Nouveau commit et **nouveau candidat RECETTE**, retests ciblés + non-régression selon impact ; aucune modification directe d'une recette figée. |
| **6. PR readiness / merge** | PR possible avant recette seulement pour revue/CI **sous GO distinct** ; merge impossible sans preuve et GO Morris de merge explicite. Tester l'intégration prospective avec `main` actuel. | Si `main` dérive ou si merge modifie l'arbre : refaire les contrôles impactés, potentiellement recette. Aucun changement de base silencieux, aucun force push hors autorisation. |
| **7. Post-merge et promotion STABLE** | Après merge, vérifier le SHA et l'arbre réellement intégrés, effectuer build/smoke et tests d'intégration/sécurité adaptés **avant** promotion STABLE. | STABLE reste sur ancien SHA tant que le nouveau n'est pas sain ; GO de promotion adapté et sauvegarde avant migration DB. Rollback de code n'est pas rollback automatique de données. |
| **8. R6 et futur serveur** | R6 qualifie les E2E, sécurité, accessibilité, LIVE/REAL bornés et décision de bascule ; serveur distant = staging/production isolés, HTTPS, sauvegardes et secrets propres. | Gate adoption/production Morris **distinct**, non induit par recette locale, PR ou merge. |

**Handoff SFIA v2.6 :** le push mono-fichier L3 sur `sfia/review-handoff` exigé par le template reste une **exception strictement bornée**, ne valant ni push branche projet ni PR/merge. La gouvernance ENV-01 ne supprime ni ne remplace ce handoff et ne permet pas d'y déposer des secrets.

**Politique de promotion :** un verdict utilisateur favorable autorise la **préparation de la décision d'intégration**, pas le merge automatique. `main` est le référentiel Git intégré ; STABLE est le runtime validé de SHA observé ; il peut exister un délai contrôlé entre les deux.

## 6. Manifeste obligatoire de mise à disposition RECETTE

**Versioning produit Next :** appliquer [la politique produit validée](product-versioning.md) depuis Git. `candidate_sha` correspond au `source_sha` de la politique et `build_identifier` au `build_id` : ne pas créer de source concurrente. La version candidate de RECETTE et la version réellement STABLE ne sont pas interchangeables ; `NOT AVAILABLE` avant la première release. Historiser chaque delivery de code dans `construction/delivery-history.md` lors de sa mise en place, et publier dans le CHANGELOG seulement après promotion. Une correction nécessitant nouvelle recette implique nouveau SHA/candidat.


À chaque candidat réellement livré, conserver dans les artefacts/rapport de macro-lot un **manifest non secret** avec ces champs ; pas de second registre normatif de statut projet.

```yaml
# Exemple de forme, pas fichier existant ni syntaxe imposée
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: '<branche autorisée>'
base_main_sha: '<SHA vérifié>'
candidate_sha: '<source_sha figé>'
build_identifier: '<build_id et empreinte si disponible>'
product_version: '<version réellement STABLE ou NOT AVAILABLE>'
candidate_version: '<MAJOR.MINOR.PATCH-rc.N ou NOT AVAILABLE>'
release_tag: '<tag validé s il existe, sinon N/A>'
served_address: 'http://127.0.0.1:3200' # proposée
schema_revision: '<révision DB observée>'
test_data_revision: '<dataset/fixture identifié>'
capabilities: {openai: '<disponible/limité>', github: '<disponible/limité>', cursor: '<non testé/stub/REAL borné>'}
quality_evidence: ['<IDs contrôles réellement exécutés>']
known_gaps: ['<réserves et blocages>']
review_decision: '<en attente / décision Morris et portée>'
```

L'URL locale est un **point d'accès**, pas une preuve d'identité du code. Une page « RECETTE — commit X » n'est fiable qu'adossée au build/manifeste réellement servi, pas à un libellé codé en dur. Ne jamais marquer un stub `REAL` ni un outil non testé comme « prêt ».

## 7. Matrice d'incidents, STOP et reprise

| Situation | Réaction obligatoire | Preuve / propriétaire |
| --- | --- | --- |
| Port occupé, mauvaise lane, mauvais DSN/secret | Refus clair ou correction explicite ; **aucun fallback silencieux**, aucun branchement sur DB STABLE | Test de démarrage / exploitation |
| DEV change pendant recette | RECETTE reste au SHA/build figé ; aucune mutation d'état/DB partagée | SHA, build ID, DB de chaque lane |
| Base DEV réinitialisée ou migrée | RECETTE et STABLE inchangées ; vérifier rôles et volumes | Comptages/versions et contrôle auth |
| Correction ou rebase après verdict | Nouveau candidat ; requalification des assertions touchées | Git SHA/tree, rapport de retests |
| GitHub App/secret de RECETTE manquant | Test/feature affectée indisponible sans usurper STABLE | Callback/permissions réellement testés |
| Opération Cursor/Git externe sous recette | Refus par défaut ; sandbox, droits bornés et GO requis pour REAL | Exécuteur et dépôt test vérifiés, pas simple prompt |
| Tests déterministes verts, UX non observée | Ne pas déclarer « comportement prouvé » ; browser test selon risque | Niveau de preuve explicite |
| `main` a changé entre recette et merge | Requalification du diff prospective, tests impactés, nouveau GO si portée modifiée | Git base/HEAD et arbre intégrable |
| Fusion avec tests bloquants ou sans GO | **STOP** ; ne pas modifier `main`, ni promouvoir STABLE | Historique du gate et décision Morris |
| Post-merge smoke KO | STABLE demeure sur ancienne version ; diagnostic/correctif sur nouvelle branche/gate | Runtime stable SHA, logs expurgés |
| Migration DB sans retour sûr | Sauvegarde et plan de reprise/roll-forward ; pas de « rollback instantané » promis | Test de restauration, version de schéma |
| Redémarrage du PC | Restaurer services à la demande et données persistantes ; indisponibilité si PC arrêté explicite | Test de reboot et sauvegarde |
| Environnement inconnu | **STOP** de mise à disposition et de toute mutation à risque, qualification d'abord | Fiche de lane et informations manquantes |

## 8. Matrice de routage SFIA v2.6 — obligatoire avant chaque prompt applicable

**Point d'entrée canonique :** le guide partagé §4.3.0b **sélectionne** ce document lorsque le travail Next concerne delivery, changement de code/config/DB, QA, recette, correctif, intégration, post-merge ou release. Le template partagé §2.0.H le **contrôle** avant génération ; le squelette §5 injecte un bloc précis, pas « respecter la politique » sans informations.

| Travail Next | Charger la gouvernance ENV-01 ? | Déclaration/contrôle à instancier | Gate |
| --- | --- | --- | --- |
| Cadrage R1–R4 purement documentaire, read-only | N/A ou consultation contextuelle | Motif `N/A — NO RUNTIME EFFECT` | Aucun gate runtime inventé |
| Première construction R5, évolution, correctif, DB, CI, UX, tests | **OUI, obligatoire** | DEV/RECETTE/STABLE touchées, branches et SHAs, frontières DB/ports/secrets, test et preuve | STOP si absence d'isolation ou mission non autorisée |
| Mise à disposition candidat et recette R5/R6 | **OUI** | SHA gelé, manifeste, URL, données, tests, autorisations externes, verdict Morris | Pas de RECETTE mutable ni de merge implicite |
| PR readiness/merge/post-merge | **OUI** | Source/base à jour, résultat recette, écart d'arbre, tests prospective, vérification post-merge | GO distinct PR/merge ; STABLE après contrôles |
| Déploiement staging/production futur | **OUI** | isolation, secrets, migration/backup/rollback, observabilité et preuve REAL | GO production/adoption distinct |
| Analyse exclusivement documentaire sans effet ni prompt technique | N/A | Indiquer absence de modification des lanes | Aucune exigence de lancement superflue |

**Fiche pré-prompt obligatoire pour ChatGPT** (à compléter depuis Git et le contrat, pas de la mémoire) :

```text
ENV-01 NEXT DELIVERY CHECK
- applicability: REQUIRED / N/A justified
- source: governance/environnements-recette-et-promotions.md — ref/SHA, version, statut de validation
- cycle/profil SFIA, macro-lot, capacité, gates Morris:
- branche travail + base main + HEAD(s) observés ; local Cursor : NON OBSERVÉ jusqu'au Git Truth Check local
- lanes affectées : DEV / RECETTE / STABLE / future STAGING-PRODUCTION
- RECETTE attendue : SHA figé / si pas de candidat, NOT AVAILABLE
- séparation du code/build, PostgreSQL, documents, sessions, secrets et ports : plan/preuve/N/A
- périmètre d'effet Git/CI/CLI et interdictions ; handoff L3 distinct :
- plan de tests, preuve attendue, anomalie/retest, post-merge, retour arrière:
- critères de STOP + gate de promotion :
- verdict : ENV ROUTING COMPLETE / PROMPT NOT GENERATED — NEXT ENVIRONMENT CONTRACT INCOMPLETE
```

**Règle bloquante ChatGPT :** à la ref Git où cette politique et son routage ont été intégrés, si le cycle Next entre dans le périmètre obligatoire et que la source canonique n'a pas été **réellement consultée depuis Git** (ref + version), que les lanes/effects/SHAs/gates ne sont pas qualifiés, ou que le prompt omet le bloc d'isolation et promotion, **ne pas générer le prompt Cursor** : `PROMPT NOT GENERATED — NEXT ENVIRONMENT CONTRACT INCOMPLETE`. En cas de conflit de source ou de validité, signaler `STUDIO NEXT WORK NOT QUALIFIED — CONTEXT MISSING` selon le pré-check général.

**Règle bloquante Cursor :** faire le Git Truth Check local, vérifier les ressources réellement disponibles ; en cas de mauvaise lane, migration/suppression de STABLE depuis DEV, secrets croisés, RECETTE mutable ou mutation distante non autorisée : `STOP — NEXT ENVIRONMENT GATE FAILED`, produire le diagnostic dans le review pack, sans prétendre à une recette PASS.

**Important :** le document n'est pas routé par sa seule existence. Son routage effectif exige **les deux insertions dans le guide et le template partagés au même ref Git applicable**. La branche R4 candidate peut servir aux futures qualifications sur cette branche une fois les insertions vérifiées ; sur la baseline `main`, l'obligation ne sera activée qu'après PR/merge autorisés et relecture distante. Ne jamais présenter la publication d'une branche comme une intégration à `main`.

## 9. Vérification de mise en place et conditions de sortie

**Gate contenu D2 Morris : SATISFAIT pour ENV-01.** Morris a explicitement validé la politique et autorisé sa publication sur la branche R4, y compris les modifications bornées du guide et du template **partagés**, ainsi que le raccord d'architecture R4 (2026-11-03). Le GO concerne exclusivement cette contribution documentaire ; **PR, merge, écriture sur `main`, code, changements de secrets/runtime et promotion restent sous GO distincts.** Les durées de conservation DATA-01 et leurs contrats demeurent candidats tant qu'un arbitrage explicite ne les approuve pas.

**Tests du routage** après publication autorisée :

1. Demande de création de code Next : guide et template conduisent au document et au bloc ENV-01 ; prompt non généré si SHA/lanes/gate absents.
2. Demande de correction sur branche DEV : tests/dev sont autorisés sans écrire RECETTE/STABLE ; faux « QA déjà PASS » refusé.
3. Demande de recette : SHA figé, DB et URL de RECETTE, scénarios et preuve affichés ; secrets jamais dans le prompt.
4. Demande de merge : interdiction d'effet sans GO Morris, branche candidate ≠ main ; relecture et post-merge prévues.
5. Analyse de l'ancien Studio : **aucun déclenchement forcé** d'ENV-01 Next ni perturbation de §4.3.0a / §2.0.G.
6. Demande purement read-only : mention `N/A`, sans exiger de démarrer DEV/RECETTE/STABLE.
7. Handoff L3 : `sfia/review-handoff` autorisé uniquement dans le contrat v2.6, non interprété comme push branche projet.
8. Contrôle distant Git après tout commit sur branche candidate : SHA, diff fichiers, relecture complète de la section et comparaison `main`, puis gate spécifique PR/merge.

**Exit R4 :** décision Morris sur ce document + insertion routage qualifiée + compatibilité historique vérifiée, stratégie QA A–D et gouvernance Git cohérentes. **Exit première capacité R5 :** commandes réellement exécutables, DEV/RECETTE/STABLE isolées, SHA candidat visible, vérification de contamination inter-lanes, preuve de recette navigateur au niveau requis, processus anomalie/correction/retest, backup/rollback adaptés. **Exit R6 :** traversées E2E, niveaux de preuve, reprise, sécurité, preuve de déploiement futur si concerné, GO adoption séparé.

**Propriétaire du suivi :** ChatGPT qualifie le routage et revoit les preuves ; Cursor construit et démontre les mécanismes sous mandat ; Morris valide le contenu, l'intégration, les promotions et l'adoption. Tout écart constaté est `KNOWN GAP` avec propriétaire, impact et condition de sortie.