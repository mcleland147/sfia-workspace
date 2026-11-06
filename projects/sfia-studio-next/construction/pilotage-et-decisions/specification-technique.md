# SFIA Studio Next — R5 / ML3 « Piloter et décider »
## Spécification technique v0.4 — candidate publiée sur branche documentaire

**Statut :** `DOCUMENTED — D0 / CANDIDATE — NOT VALIDATED SPEC — NOT IMPLEMENTED`.  
**Date :** 2026-11-06 (Europe/Paris).  
**Dépôt :** `mcleland147/sfia-workspace` ; base `main@ab18316b9c1e849ff557f4ba561c638e9961bb89` ; branche documentaire `docs/next-pilotage-decisions-cadrage-20261105` (HEAD pré-publication `d3e61571f17db0bea03ac3c879a504e6fa99a2ef` ; HEAD publié à consulter dans Git).  
**Nature :** révision D0 consolidant les v0.2 Git / v0.3 locale et traitant R01–R04 ; **publication Git candidate autorisée par Morris le 2026-11-06**, sans merge sur `main`.  
**État local/runtime :** `NON OBSERVÉ` ; D5/D6 `N/A — NON IMPLÉMENTÉ`.  
**Sources propriétaires :** `governance/SEF.md`, `governance/roadmap.md`, `governance/decisions/2026-11-04-r4-architecture-exit.md`, R2 `conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md`, R2 `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` et compléments, R3 `ux-ui/audit-couverture-ux-r3.md` §7, R4 `architecture-technique/cadrage-r4.md` §5.5, corpus `cki/` v0.2.0, R5 `construction/reference-delivery-r5.md`, code ML1/ML2 sur `main`.  
**Annexes sur cette branche :** [Matrice individuelle R2–R4](tracabilite-r2-r3-r4.md) (136 liens et R01–R04) et [Revue de conception](revue-conception.md) (revue/gates).

> **Choix Morris déjà acquis :** option A — clôture du cycle A et ouverture du cycle B, si toutes les mutations D5/D6 sont internes à Studio, effectuées **dans une seule transaction PostgreSQL** ; deux faits de transition distinctement observables, commit unique. Une réussite partielle n'est possible que pour des effets réellement séparés, hors de cette frontière. **Choix de périmètre retenu :** noyau D6 réel (décisions, GO, révisions, restrictions et levées) dans ML3 ; D7/D8/D9 restent des interfaces, sans effets simulés. **Résolutions techniques proposées pour validation Morris :** R01 version/distribution CKI ; R02 sémantique de méthode ; R03 DDL/verrouillage/idempotence ; R04 résultat partiel. Les invariants R04 atomiques sont déjà arbitrés ; les choix détaillés R01–R03 sont à valider en contenu, **non implémentés**.

## 1. Résultat Pilote et frontière du macro-lot

Le Pilote peut reprendre son projet et son fil Nora, envisager une trajectoire sans l'appliquer, retenir une orientation de façon gouvernée, ouvrir un cycle pertinent sur un GO humain naturel, progresser avec une guidance CKI vérifiable lorsqu'elle est réellement disponible, enregistrer et réviser ses décisions, suspendre/lever des effets bornés et clore ou réorienter les cycles en retrouvant les faits durables après redémarrage.

**IN :** D5 trajectoire, état des cycles, méthode applicable et liaison CKI ; D6 actes humains, portée, validité, restrictions, révisions/révocations, suspensions/levées ; interfaces D1/D2/D3/D4 ; transactions PG et intégrité, API, UX R3 B, tests, observabilité et documentation as-built dans le même macro-lot. **OUT :** exécution Cursor D7, preuve et verdict D8, mutation Git D9, adoption globale, catalogue universel de méthodes, moteur de workflow et nouveaux parcours obligatoires.

**Parcours d'acceptation commun :** projet existant → Nora propose une trajectoire → le Pilote retient ou non l'orientation → GO de cycle authentifié → enregistrement atomique D6/D5 → cycle ACTIVE + CKI associé → consommation de guidance si disponible, avec provenance → décision durable ou suspension → clôture/transition gouvernée → reconnexion au même fil et vérification de l'état. Un projet peut continuer normalement sans cycle ni méthode.

## 2. Autorités et propriétaires — invariants transverses

| Domaine | Vérité propriétaire | Limite |
|---|---|---|
| D1/D2 | Session authentifiée, identité du Pilote, propriété du projet, préparation et continuité du fil | Une session, un projet ou GitHub OAuth ne sont pas des GO métier. |
| D3 — Nora | Messages originaux, analyse de l'intention, propositions, réponse cognitive, consommation contrôlée de contexte | Le modèle ne produit aucun HumanDecision ni changement D5 à partir de sa seule sortie. |
| D4 | Sujets, acquis, documents, points ouverts et provenance | Aucune duplication de mémoire ou preuve dans D5/D6. |
| D5 | Trajectoires, cycles, méthode et association du CKI principal, états et historique | Ne crée ni compétence humaine ni permission. |
| D6 | Source humaine, portée, décision opposable, restrictions et historique | Ne maintient pas un second état de cycle ni ne simule D7/D9. |
| D7/D8/D9 | Futures frontières propriétaires d'exécution, preuve et Git | Contrats préparés seulement ; aucun faux objet métier opérationnel ML3. |

Les lectures D3/UX constituent des **projections** des propriétaires. Les diagnostics techniques n'émettent aucun acte d'autorité. Les contrôles de droits/compétence sont relus **au point d'effet**, non déduits d'une vue affichée antérieurement.

## 3. Contrat D6 — acte humain et applicabilité

### 3.1. Classes d'actes

Distinguer : préférence cognitive non opposable ; choix structurant durable ; GO cycle (ouvrir/clore/transitionner) ; suspension/restriction ; levée/révocation/révision ; choix durable de méthode ; acte de réception D8 et autorisation « Exécuter » D7, tous deux **hors réalisation ML3**. Un choix de brouillon/document n'est pas un GO Git, une validation normative ou un mandat. Une proposition CKI n'est jamais permission.

### 3.2. Identité et provenance minimales

L'acte stocké D6 référence : `decisionId`, `projectId`, `pilotId` authentifié, `sourceKind` (message utilisateur réel ou interaction humaine explicite), `sourceRef` et révision/corrélation, `kind`, `objectRef`, `scope` typé et borné, `effectConditions`, `state/version`, `effectiveAt`, `supersedes/revokes/lifts` s'il y a lieu, `createdAt`. La source conversationnelle doit être une **expression USER vérifiée**, rattachée au projet autorisé ; le modèle, une citation ou un texte importé ne peuvent fournir cette autorité. Minimiser la répétition du texte humain et protéger les détails sensibles.

**Validité D6 au point d'effet :** acteur habilité et projet courant ; cible/portée compatibles avec la commande ; provenance humaine fiable ; état/version ; contraintes supérieures ; restrictions et décisions incompatibles ; durée/conditions d'applicabilité. Conflit déterminant non résolu = refus de l'effet ciblé, sans bloquer la cognition indépendante. « Plus récente » n'est pas une règle de priorité.

### 3.3. Évolutions non destructives

Révision, amendement, révocation ou levée sont des **actes distincts liés** à leur cible, avec date de prise d'effet et contexte conservés. L'applicabilité courante change mais les décisions et effets passés restent vrais. Une suspension humaine persistante ne disparaît ni avec une nouvelle session, ni avec un nouveau cycle, ni lorsque Nora juge le problème résolu. Lever une suspension n'accorde pas de droits nouveaux et ne rejoue pas une commande. Une demande d'arrêt externe est enregistrable comme intention/portée D6 ; elle **n'est pas** un constat d'arrêt D7.

**Révocation de méthode :** le contrat proposé R02 en §8 bis sépare retrait, remplacement, suspension d'usage, levée et révocation du choix courant. Révoquer le choix fondant la méthode actuellement applicable termine son application D5 et la laisse `ABSENT` sauf remplacement explicitement autorisé dans le même commit ; aucune restauration implicite. Si la cible est ambiguë, clarifier et ne pas muter.

## 4. Contrat D5 — états, trajectoire et méthode

Une **trajectoire proposée** peut rester seulement cognitive ou être conservée comme proposition sans acte d'autorité ; **retenue** exige une décision D6 qualifiée ; **effectif** décrit uniquement les cycles réellement committés. La réorientation n'efface pas les faits précédents. Les dépendances proviennent de contraintes projet ou décisions réelles, jamais de l'ordre des 15 CKI ni de la matrice des relations.

**Cycle :** type reconnu dans le catalogue applicable, finalité et identifiant stables ; états au minimum `ACTIVE` et `CLOSED` (tout autre état exige un besoin explicite) ; au plus un ACTIVE par projet. Une suspension D6 du travail n'implique pas un état cycle `SUSPENDED` ou un moteur concurrent. Ouvrir/clore nécessitent GO humain ; maturité Nora ≠ clôture et clôture ≠ acceptation/adoption. La clôture conserve bilan/réserves et références D4 sans recopier les contenus D4.

**Méthode :** `ABSENTE` est une valeur de projet légitime. Un choix durable conserve référence, version/révision, provenance, portée, date/condition d'effet et décision D6. Publication d'une nouvelle version ou technique locale de Nora ≠ changement de méthode. La modification, si décidée, est gouvernée et historisée sans rétroactivité ; impacts proportionnés sur les travaux concernés.

## 5. CKI : association, version, distribution et usage

Le catalogue initial est constitué de **15 types / 15 CKI autonomes** et 50 relations consultatives, contenus v0.2.0 validés Morris. Catalogue extensible sous arbitrage, sans type implicite FinOps/GreenOps. **Un seul CKI principal** correspond au type du cycle effectivement ACTIVE ; hors cycle, aucun CKI principal. Digression ou relation T/A/R/E ne sélectionne jamais de second CKI. Le même CKI guide le travail et l'appréciation qualitative de maturité ; aucune règle de fermeture ni score universel n'en découle.

**Politique technique proposée R01 (§8 bis) :** associer la spécialité du type ; lorsque le contenu validé est résoluble, épingler référence/version/digest au commit d'ouverture ; sinon ouvrir avec association sans pin exploitable. Ne jamais migrer sur publication ; premier pin ultérieur ou changement de version = acte explicite du Pilote, tracé D5/D6. Le retour des octets de **la version déjà épinglée** peut rétablir la résolution sans nouvelle décision.

**Distribution candidate :** manifeste de ressources approuvées, en lecture seule et versionné avec l'application ou son stockage de contenus durable ; aucune lecture GitHub en direct requise à chaque tour. Conserver les versions encore référencées ou signaler l'indisponibilité réelle, pas de fallback CKC historique. Les références Git constituent une provenance de contenu et non une preuve de disponibilité au runtime.

**Trois niveaux non équivalents :** `ASSOCIATED` (D5 référence le CKI) ; `RESOLVED` (octets/version effectivement vérifiés) ; `DELIVERED` (guidance effectivement ajoutée au contexte D3 transmis). Aucune de ces observations ne prouve à elle seule la qualité cognitive. Toute guidance est de niveau de confiance borné : aucune instruction du CKI ne peut créer un GO, une contrainte supérieure ou un mandat d'outil. Conflit réel avec la méthode retenue : adapter/écarter la technique facultative et signaler l'écart déterminant.

## 6. Modèle relationnel et migration — DDL non exécuté

Extension additive du schéma Drizzle PostgreSQL courant `schemaRevision = 006_ml2_turn_owner_token`, sans modifier par défaut l'état de création du projet ML1 ni du tour ML2.

| Famille candidate | Champs/noyau d'intégrité | Responsable |
|---|---|---|
| `project_pilotage_state` | `project_id` PK/FK vers `projects`, `revision` monotone, référence courante trajectoire/méthode si nécessaire | D5 — état/version verrouillable |
| `trajectory_revisions` | Projet, version, proposition ou choix retenu, source, orientation, lien décision | D5 — historiques |
| `project_cycles` | Projet, type, objectif, `status`, dates, `revision`, références GO et CKI associé/version ou indisponible | D5 — état réel |
| `cycle_commands` | Projet, acteur, clé idempotente, empreinte, source humaine, type d'opération, résultat durable | D5 — commande métier |
| `cycle_command_effects` | Référence commande, effet `CLOSE` ou `OPEN`, cible et issue durable | D5 — observabilité par effet |
| `method_applications` | Projet, référence/version/portée, décision D6, début/fin d'applicabilité, provenance | D5 — état méthode |
| `human_decisions` / historique | Auteur, projet, source fiable, type, objet, portée, état, relations de révision/révocation | D6 — actes opposables |
| `governance_restrictions` | Projet, cible/effets interdits, acte D6 d'origine, application, levée | D6 — restrictions |
| Manifeste CKI | Référence canonique/version/provenance et disponibilité | D5/ressource approuvée ; table dédiée seulement si justifiée |

Les familles ne prescrivent pas nécessairement une table chacune : **dédupliquer** selon les requêtes et les invariants. Le Journal–Décisions reste une projection D6. Les IDs client ne sont jamais des droits ; les références doivent être contraintes au bon projet, y compris contre accès direct ou détournement de messages D3.

**Invariants DB proposés :** index unique partiel `(project_id) WHERE status='ACTIVE'` ; clé unique commande métier `(project_id,pilot_id,idempotency_key)` et empreinte canonique ; versions et clés FK ; contraintes de validité d'états ; transaction commune D5/D6 ; pas de trigger qui crée un cycle au moment de créer le projet.

**Sérialisation :** `SELECT … FOR UPDATE` sur la ligne `projects` du projet propriétaire (proposition de verrou commun) pour toutes les mutations D5 et restrictions D6 pertinentes, puis lecture sous verrou de la révision, des droits, des décisions/restrictions et du cycle. Le schéma doit gérer les cas d'erreurs PG, la contention, l'index partiel et l'ordre CLOSE(A) puis OPEN(B), sans anomalie interprojets. Isolation et granularité exactes à démontrer, pas supposées sûres par simple choix d'API.

**Migration :** ajout des seules structures utiles, vérification de compatibilité à partir de 006, pas d'effets sur données ML1/ML2, migrations réexécutables/contrôlées selon stratégie existante. DEV → RECETTE avec SHA figé sous mandat futur, aucun déploiement exécuté ici.

## 7. Services métier, commandes et API candidates

**Contrats internes (noms logiques) :** `resolveProjectPilotage(project, actor)`, `proposeTrajectory(...)`, `applyTrajectoryDecision(...)`, `openCycle(...)`, `closeCycle(...)`, `transitionCycle(...)`, `chooseMethod(...)`, `recordHumanDecision(...)`, `reviseDecision(...)`, `applyRestriction(...)`, `liftRestriction(...)`, `evaluateCurrentAuthority(...)`, `resolveCycleGuidance(...)`, `reconcileCommand(...)`. Ne pas créer un microservice par verbe : appliquer les propriétaires D5/D6 et réutiliser la transaction PG commune.

**Routes Next.js candidates et regroupables :** lecture `GET /api/projects/{projectId}/pilotage`, mutation `POST /api/projects/{projectId}/cycle-commands`, réconciliation `GET /api/projects/{projectId}/cycle-commands/{commandId}`, décision `GET/POST /api/projects/{projectId}/decisions`, restriction `POST /api/projects/{projectId}/restrictions`, méthode `POST /api/projects/{projectId}/method-choices`, guidance en lecture `GET /api/projects/{projectId}/guidance`. Les routes concrètes ne sont pas figées. Un point d'entrée ne peut utiliser une autorité de DTO : `pilotId` vient exclusivement de la session.

**Commande D5 minimale :** clé idempotente stable, empreinte des paramètres déterminants, projet URL validé, action, version attendue du projet, cycle source et version attendue, type/cible/objectif, référence D3 d'un message humain ou interaction explicitement captée ; D6 valide cette source et portée. Identité de tour D3 et clé de commande D5 restent distinctes ; la même source humaine ne permet pas de générer deux effets nouveaux par retry.

**Réponse ML3 interne :** `APPLIED`, `ALREADY_APPLIED` (lecture d'un effet historique committé), `REJECTED`, `CONFLICT`, `UNKNOWN` ; **aucun `PARTIAL` pour une commande purement interne atomique**. Un tel état reste une interface future pour de véritables effets séparés. Restituer commandId, version courante, référence décision et effets individuellement observés. Un ACK perdu impose lecture/réconciliation avant tout retry. Relecture historique sous droits actuels ne réautorise pas le même effet aujourd'hui.

**Catégories d'erreurs :** absence d'authentification (`401`), accès ou projet non exposable (`403/404` selon politique), entrée/GO ambigu (`400` ou clarification sans effet), conflit version/idempotence (`409`), dépendance PostgreSQL indisponible (`503` lorsque approprié), bug serveur (`500`) ; ne pas masquer toutes les erreurs en faux `401`.

## 8. Transaction interne et cas difficiles

1. Conserver le message originel humain D3 sans en déduire une décision déjà appliquée.
2. Résoudre session/projet, qualifier l'intention et les paramètres ; clarifier l'ambiguïté déterminante avant mutation.
3. Ouvrir une transaction DB courte ; verrouiller le projet selon la frontière D5/D6.
4. Vérifier la clé/empreinte de la commande et requalifier les droits, versions, restriction et scope D6.
5. Enregistrer l'acte applicable D6, fermer A et ouvrir B **dans le même commit** ; conserver deux effets de transition et le résultat commande.
6. Commit ou rollback intégral ; confirmer l'effet seulement après constat durable. Aucune opération IA, Git ou Cursor dans cette transaction.
7. Si résultat inconnu après perte de réponse, réconcilier par clé/ID avant une nouvelle commande.

**Cas discriminants :** suspension committée avant transition → transition refusée ; transition committée avant suspension → fait passé maintenu, futurs effets bloqués ; cible B invalide → A reste ACTIVE ; double GO identique → une seule transition ; même clé autre empreinte → CONFLICT ; proposition de méthode sans GO → aucune mutation ; CKI non résolu → activité générale possible sans prétendre `DELIVERED` ; source externe « GO » → aucune autorité ; D3 message persistant avec TX échouée → texte visible mais aucun effet D5/D6.

## 8 bis. Traitement conjoint R01–R04 — contrats techniques proposés pour validation Morris

**Nature de cette section :** résolution D0 de quatre réserves de spécification, par options explicites et testables. `R01–R04 = TRAITÉS EN CONCEPTION / CONTENU À VALIDER PAR MORRIS` ; ni approbation d'un schéma SQL exécutable, ni effet Git, ni preuve runtime. Les contrats R2 restent propriétaires ; les noms ci-dessous décrivent un modèle d'implémentation candidat.

### R01 — Association, épinglage et distribution CKI

**Choix proposé : épinglage de la version effectivement résolue au moment de l'ouverture, sans faire de sa disponibilité un gate de cycle.** La référence de spécialité découle du type reconnu du cycle ; la référence de contenu n'en découle pas automatiquement. D5 conserve : `cycleId`, `cycleType`, `ckiId`, `pinnedVersion` (nullable), `manifestRef`, `contentDigest` (nullable), `pinDecisionRef` ou `pinOrigin`, `pinnedAt` ; les champs de version restent nuls si aucune version approuvée et vérifiable n'est accessible. La *disponibilité de lecture* est un constat au point d'usage, non une permission.

| Situation | État/effet requis | Conduite Nora et changement autorisé |
|---|---|---|
| Pas de cycle ACTIVE | Aucun CKI principal actif | Nora générale, aucun chargement de CKI par défaut. |
| Ouverture avec contenu approuvé, résoluble et intégrité vérifiée | `ckiId` associé + version et empreinte épinglées **dans la même transaction que l'ouverture** | Le chargement réel reste à vérifier à chaque génération. Pas de GO séparé pour cet épinglage consécutif au GO de cycle. |
| Ouverture sans version exploitable | Cycle ACTIVE possible, `ckiId` associé, `pinnedVersion=NULL` avec motif non résolu | Aucune guidance CKI prétendue appliquée ; Nora générale. |
| Version épinglée temporairement indisponible | Conserver le pin et l'historique, marquer `UNAVAILABLE` au point d'usage | Aucune substitution ; un retour du **même contenu/empreinte** permet de résoudre le pin sans nouvel acte humain. |
| Une nouvelle version est publiée | Aucun effet sur le pin ni sur les décisions/méthodes | Peut proposer une comparaison ; ne la charge pas à la place du pin. |
| Aucun pin à l'ouverture puis une version devient disponible | Toujours aucun pin | **Premier rattachement explicite** décidé par le Pilote à portée cycle, historisé par D6/D5 ; pas de rattrapage automatique silencieux. |
| Remplacement de version en cours de cycle | Vérifier provenance, compatibilité, finalité et risques, puis acte explicite du Pilote et historique D5/D6 | La nouvelle version ne change que les usages futurs ; aucune réécriture des réponses passées. |
| Contenu hostile, digest divergent ou état d'approbation invalide | Résolution refusée et diagnostic borné | Ne pas exposer comme `DELIVERED`, ne pas charger de CKI historique ni d'autre version en secours. |

**Source/distribution :** manifeste de ressources versionnées et immuables, activées **dans le déploiement réellement exécuté** à partir du corpus CKI approuvé (15 contenus v0.2.0, mais VALIDATED CONTENT ne signifie pas automatiquement chargé). Chaque entrée référence `type`, `ckiId`, `version`, origine Git immuable, empreinte cryptographique et état de disponibilité ; conservation des versions encore référencées. Livraison locale au build ou stockage durable contrôlé ; **aucun GitHub fetch à chaque tour Nora**. À la lecture, vérifier identité/version/digest avant de transmettre la guidance. L'usage d'une simple version sémantique sans empreinte ne suffit pas à garantir l'identité du contenu.

**Observabilité, non automate d'autorité :** `ASSOCIATED` = spécialité associée ; `RESOLVED` = octets de la version exacte contrôlés ; `DELIVERED` = contenu réellement joint au contexte transmis au modèle. Aucun de ces états ne démontre que Nora s'en est servie avec pertinence : l'apport cognitif relève de tests LIVE comparatifs, distincts des fixtures. Échec de résolution => réponse générale sans déclarer un CKI utilisé ; si une conclusion spécialisée en dépend matériellement, la qualifier comme non démontrée. **Pas de deuxième CKI**, pas de matrice transformée en workflow.

**Tests R01 :** B01/B10/B11/B12 et PF-TRJ-07/08/21/25/30 : aucun cycle ; ouverture avec pin ; ouverture sans version ; perte puis retour de l'empreinte identique ; nouvelle version disponible mais non utilisée ; décision explicite de premier pin/migration ; contenu corrompu et injection ; preuve de `DELIVERED` seulement lorsqu'observée. **Risque résiduel :** politique de conservation/distribution effectivement opérable par lane à démontrer en R5 ; ce mécanisme ne vaut pas VALIDATED SPEC avant gate Morris.

### R02 — Sémantique de révision, retrait, suspension et révocation de méthode

**Choix proposé : actes typés et portée explicite ; une seule référence effective par périmètre concerné, aucune résurgence implicite.** Le fait qu'une méthode soit choisie (D5) est distinct de la décision humaine qui fonde sa validité (D6). Les deux propriétaires changent ensemble quand le sens de l'acte exige une mutation D5. Une restriction D6 peut limiter l'utilisation d'une méthode **sans** effacer la méthode retenue.

| Acte humain suffisamment clair | Modification durable D6 | Conséquence D5 et histoire |
|---|---|---|
| `CHOOSE_METHOD` — choix initial | Créer décision applicable à la portée autorisée | Nouvelle application méthode versionnée ; pas de méthode implicite avant cet acte. |
| `REPLACE_METHOD` — remplacer A par B | Réviser/remplacer l'acte avec portée et prise d'effet | Fin d'application A, début B dans **une transaction** ; aucun changement des faits/cycles antérieurs. |
| `WITHDRAW_METHOD` — ne plus retenir de méthode | Décision de retrait explicite | Fin d'applicabilité, état `ABSENT` dans la portée ; pas de restauration d'une ancienne méthode. |
| `SUSPEND_METHOD_USE` — suspendre une utilisation | Restriction D6 ciblée et persistante | La référence D5 reste enregistrée ; la projection la dit « retenue mais utilisation restreinte », jamais méthode supprimée. |
| `LIFT_METHOD_RESTRICTION` | Levée explicite de la restriction identifiée | Recontrôle actuel de la méthode et de sa décision de base ; aucun mandat, cycle ou exécution relancé. |
| `REVOKE_DECISION` sur le **choix qui fonde la méthode courante** | Révoquer la validité future de cette décision, sans effacer l'histoire | **Dans le même commit**, fermer l'application qui dépend de ce choix et passer à `ABSENT` pour cette portée, sauf remplacement explicite simultané et compétent ; ne pas rétablir la méthode précédente. |
| `REVOKE_DECISION` sans lien avec l'application courante | Révocation bornée à son objet | Aucun changement D5 non pertinent ; les effets indépendants demeurent. |
| Acte ambigu (« annule cette méthode » avec plusieurs cibles) ou décisions incompatibles | Aucune décision d'effet présumée ; conflit/clarification | Aucun remplacement/suppression automatique ; bloquer seulement l'effet dépendant jusqu'à résolution. |

**Portées :** associer toujours le projet et une cible intelligible (`PROJECT` ou cycle/activité explicitement identifié lorsque le contrat applicable le permet). Ne pas déduire une hiérarchie « la dernière version gagne » entre portées ; plusieurs décisions incompatibles sur une même cible imposent requalification D6. L'absence de méthode dans une portée n'efface pas arbitrairement des choix indépendants. La projection courante doit distinguer **absence de choix**, **référence retenue** et **référence retenue mais interdite d'usage** ; l'interdiction relève de D6, pas d'un second état D5 `SUSPENDED`.

**Persistance :** historique non destructif `method_applications` avec décision fondatrice D6, référence/version, portée, `effectiveFrom/effectiveUntil` et raison de clôture ; une seule application courante par portée peut être imposée par index. Un `project_pilotage_state` conserve la révision de cohérence et, si nécessaire, une référence dénormalisée **strictement dérivée**, jamais une deuxième vérité writable. Le Journal Décisions relit D6, pas D5. L'analyse d'impact d'un changement qualifie les activités réellement touchées ; une clôture passée ne devient pas fausse.

**Tests R02 :** B09/B10/B13/B16/B17, PF-TRJ-22/27–30 et PF-GOV-03/11/14/17/18/27 : remplacer ; retirer ; révoquer la base actuelle ; révoquer une décision historique non courante ; suspendre/lever sans effacer ; deux portées incompatibles ; publication vNext sans effet ; redémarrer et retrouver l'histoire ; simulation d'un impact restreint sur un cycle actif (sans re-clôture ni rollback). Aucun changement automatique du CKI principal.

### R03 — Schéma, frontière transactionnelle, concurrence et idempotence

**Choix proposé : PostgreSQL unique, verrou de ligne projet commun à toute mutation D5/D6 susceptible de changer une autorité ou un effet, avec contraintes structurelles en dernier recours.** `projects` existe dans ML2 ; une ligne `project_pilotage_state(project_id PRIMARY KEY, revision)` additive peut porter la révision de cohérence. Ne pas recopier session/projet/messages ou inventer un second registre d'autorité. La structure physique proposée est **à migrer/tester à partir de `006_ml2_turn_owner_token`**, pas à exécuter dans cette revue.

**Tables minimales à qualifier par le contrat Cursor (regroupements permis si invariants conservés) :** `project_pilotage_state` (révision), `trajectory_revisions`, `project_cycles`, `business_commands` et `business_command_effects`, `method_applications`, `human_decisions` + événements de révision, `governance_restrictions` ; manifeste CKI versionné sans nouvelle table obligatoire. Les vues de lecture sont reconstruites sur ces propriétaires. Ne pas conserver séparément deux champs mutables faisant foi pour la méthode, l'autorité ou le cycle courant.

**Contraintes SQL candidates significatives (illustration à réviser, pas migration livrée) :**

```sql
-- dernier recours structurel, même si une requête concurrente contourne le code nominal
CREATE UNIQUE INDEX project_cycles_single_active_per_project
  ON project_cycles(project_id) WHERE status = 'ACTIVE';

-- idempotence client : même identité métier, mêmes paramètres => même résultat
CREATE UNIQUE INDEX business_commands_project_actor_key_uidx
  ON business_commands(project_id, actor_pilot_id, client_command_key);

-- anti-double effet par une même expression/interaction et une même intention
-- source_action_key différencie deux intentions explicites d'un même message
CREATE UNIQUE INDEX business_commands_human_intent_uidx
  ON business_commands(project_id, source_kind, source_ref, source_action_key);
```

`source_kind`, `source_ref` et `source_action_key` sont non nuls pour les commandes à effet humain ; leur construction doit être déterministe et contrôlée côté serveur, sans prendre un DTO arbitraire ni le hash brut du texte pour une permission. Une même source peut porter **deux intentions différentes** ; la même intention ne doit pas produire deux effets avec des clés HTTP distinctes. Index/check sur états, format de portée et révisions ; références interprojets défendues par vérifications de propriétaire et, là où approprié, clés étrangères composées `(project_id, object_id)` vers des cibles garantissant cette unicité.

**Ordonnancement transactionnel recommandé :**

1. **Avant transaction courte :** authentifier la session, résoudre le projet propriété du Pilote ; conserver le message D3 déjà reçu (ou référence d'interaction humaine explicitement captée) ; qualifier l'intention sans appeler le LLM dans la transaction. Une source D3 est valide si c'est un **message utilisateur réel lié à la conversation de ce projet**, même si la réponse ultérieure de Nora a échoué ; ni réponse Nora, ni D4, ni citation, ni CKI ne sont des sources autorisantes.
2. `BEGIN` ; `SELECT id FROM projects WHERE id=:projectId AND owner_pilot_id=:pilotId FOR UPDATE` ; vérification d'existence et relecture sous verrou des révisions, décisions, restrictions, cycles et paramètres matériels. **Toutes les mutations D5/D6 concernées prennent ce verrou dans cet ordre**, notamment inscription/levée d'une restriction et changement de méthode. Les lectures informatives restent des projections non autorisantes.
3. Rechercher la commande par clé. Si la même clé existe et l'empreinte canonique correspond, restituer **son résultat durable historique** sans réappliquer et sans revalider rétroactivement une permission ; si empreinte différente, `CONFLICT` sans mutation. Ensuite contrôler l'unicité d'intention issue de la source humaine, afin d'éviter un second effet avec une autre clé. Une demande réellement nouvelle exige une source/intention distincte.
4. Pour une nouvelle commande : vérifier session/compétence courante au point d'effet selon les propriétaires accessibles, version de projet attendue, portée, source USER, restrictions non dérogeables et contradictions ; décider `REJECTED`/`CONFLICT` sans effet si nécessaire. **Les révocations de session externes non sérialisées sur ce même verrou constituent une frontière temporelle à tester : ne pas promettre une atomicité cross-provider fictive.** Une révocation déjà effective avant le contrôle doit interdire l'effet.
5. Enregistrer D6, mutations D5, détails des effets, résultat de la commande et incrément de révision **dans une transaction unique** ; `COMMIT`. Pour une transition A→B, clôturer A avant d'ouvrir B, en respectant l'index unique ACTIVE. Toute erreur entre les deux => `ROLLBACK` intégral.
6. Répondre avec résultat réellement observé après commit. Si la réponse se perd ou si l'issue du commit est incertaine, retourner/afficher `UNKNOWN` **sans autoriser un retry aveugle** ; le client demande l'état par `commandId` ou clé stable. Si stockage inaccessible, l'issue reste inconnue. Si commande retrouvée committée, `ALREADY_APPLIED` ne signifie pas nouvelle autorisation.

**Catégories de réponse internes ML3 :** `APPLIED`, `ALREADY_APPLIED`, `REJECTED`, `CONFLICT`, `UNKNOWN` (issue non confirmable) ; **pas de `PARTIAL` interne**. Un rejet durable peut être enregistré comme résultat de commande, mais ne doit pas être déguisé en décision D6 applicable ; en cas de rollback indisponible, garder la demande D3 sans déclarer d'effet. Déterminer HTTP `401` absence de session, `403/404` accès interdit/non exposable, `409` conflit/version, `503` indisponibilité PG et `500` erreur interne ; jamais convertir mécaniquement une panne SQL en faux `401`.

**Gestion de concurrence et limites :** avec toutes les mutations métier participantes sérialisées par verrou projet, `READ COMMITTED` + relectures sous verrou constitue une stratégie candidate pragmatique ; la défense PG d'unicité protège contre les écarts. Les lectures externes et la révocation des sessions doivent être qualifiées au point d'effet. Tester le deadlock et l'ordre des verrous, le commit inconnu, la violation de contrainte, la réponse HTTP perdue, les messages USER `PENDING` (D3 provider en échec), deux projets indépendants, et le replay cross-session sous droits courants. **Cette stratégie est une proposition testable, pas une garantie démontrée.**

**Tests R03 :** B03/B04/B05/B06/B07/B13/B14/B15/B16/B17/B18, PF-TRJ-04/05/06/15/17/18/19/20/24, PF-GOV-04/05/12/14/15/16/18/24 : deux connexions PG et commandes simultanées ; suspension concurrente GO (deux ordres de commit) ; même clé/même fingerprint ; même clé/empreinte différente ; autre clé/même intention ; source USER d'un autre projet ; erreur injectée entre CLOSE et OPEN ; commit sans ACK ; reprise ; DB indisponible ; cross-project FK. La preuve `BEHAVIOR PROVEN` ne se déduit pas du seul index SQL ou d'un test unitaire.

### R04 — PF-TRJ-16, PF-GOV-05 et vérité des résultats partiels

**Choix Morris déjà confirmé :** pour une transition D5/D6 *entièrement interne*, la clôture A et l'ouverture B sont deux **faits métier distinctement observables**, mais **une seule transaction atomique**. `PARTIAL` ne correspond à aucun état interne durable possible dans cette opération. La règle R2 demandant des résultats séparés ne présuppose pas l'existence de deux commits internes.

| Point de coupure | Résultat réel ML3 | UX/diagnostic permis |
|---|---|---|
| Avant validation D6 | Aucun effet A/B, demande refusée ou clarifiée | GO non applicable ; pas de « clôturé ». |
| Après écriture de CLOSE(A), avant OPEN(B), mais avant commit | Rollback intégral si OPEN échoue : A reste ACTIVE et B n'existe pas | `REJECTED`/erreur selon cause, deux effets **non appliqués**. |
| Commit PG A CLOSED + B ACTIVE réussi, réponse HTTP perdue | Les **deux effets** existent ; le client ne connaît pas encore l'issue | `UNKNOWN` jusqu'à réconciliation ; puis les deux effets confirmés, jamais un partiel. |
| Deux ouvertures concurrentes, conflit d'unicité | Un seul état ACTIVE vérifiable ; l'autre commande rejetée/requalifiée | Pas de cycle fantôme, pas de « ouverture en cours » permanente. |
| Une opération **future** possède réellement des effets externes séparés déjà committés par D7/D9 | Résultats séparés à reconstituer auprès de leurs propriétaires, potentiellement PARTIAL | Interface et scénario à la charge du futur macro-lot ; **non simulés par ML3**. |

**Contrat `business_command_effects` :** conserver deux enregistrements de résultat pour le combiné interne, chacun corrélé à la même commande et visible uniquement si le commit commun aboutit. Aucun effet CLOSE durable isolé ne peut être lu suite au rollback. Le `GET` de réconciliation retourne les deux faits ou aucun fait confirmé et l'état de commande réellement retrouvé ; absence de réponse ≠ effet partiel.

**Portée du scénario PF-TRJ-16/PF-GOV-05 :** ML3 couvre la compréhension du GO combiné, les deux effets, le rollback intégral, les lectures et réponses honnêtes. La possibilité d'effet partiel R2 reste **conditionnelle et reportée aux véritables frontières séparées**, sans changer R2 ni fabriquer un cas artificiel. Les écrans R3 #47 (confirmé) et #54 (non confirmé) sont applicables ; **#42 (partiel) est inatteignable depuis la commande interne ML3** et ne sera testé comme comportement positif que dans un futur lot possédant un vrai effet séparé. Test ML3 négatif : une panne interne entre deux écritures **ne doit jamais** produire #42, `PARTIAL` ou un cycle A CLOSED / B absent.

**Tests R04 :** B07 avec injection de panne entre deux écritures PG + contrôle après redémarrage ; perte ACK après commit ; stress deux appels; assertions sur commande et effets; non-apparition de #42. Toute revendication de résultat partiel futur devra identifier le propriétaire des effets externes et la preuve de chaque étape. Aucun `PARTIAL` ni compensation fictive dans ML3.

### Décision de revue sur R01–R04

Les quatre points ont une **solution technique explicitée et réfutable** ; ils ne sont plus des zones d'analyse sans proposition. Leur statut reste : **`DESIGN RESOLUTION PROPOSED — PENDING MORRIS CONTENT VALIDATION / NOT IMPLEMENTED / NOT TESTED`**. Aucune modification normative R2/R4 et aucun nouveau gate produit ne sont introduits ; les obligations d'essais, de sécurité DATA-01, d'UX native et de traçabilité code/test restent portées par la construction du même macro-lot.

## 9. UX R3, contexte Nora et observabilité

**R3 lot B :** état sans cycle #22 ; qualification proposée #23 ; cycle actif #24 ; méthode absente #28 ; méthode proposée #29 ; décision applicable #31 ; suspension #33/#34 ; CKI indisponible #39 ; Journal–Décisions #40 ; GO ambigu #41 ; vrai partiel #42 ; contradiction #43 ; transition combinée #47 ; mise à jour CKI candidate #48 ; ouverture en attente #52 ; clôture en attente #53 ; UNKNOWN #54 ; reprise #55 ; rejeu #56 ; guidance #58 ; relations #59 ; nouvelle méthode #60. Frames identifiées dans l'audit R3 Git, **Figma native et browser ML3 NON OBSERVÉS**. La maquette #42 doit être conditionnelle à un effet séparé réel et ne constitue pas un état de succès partiel dans notre transition interne atomique.

**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. Le code ML2 `web/src/domains/conversation/nora-adapter.ts` ne charge pas D5/CKI aujourd'hui ; `service.ts` retourne `humanDecisionCreated:false`. Il faut intégrer D5/D6 **sans** déduire un GO d'une réponse de modèle ni modifier l'autorité de D3.

**Observabilité :** relier operationId, commandId, projet/acteur de manière minimisée, source humaine, décision D6, effet D5, version état et résolution CKI. Les logs ne constituent jamais le registre métier ni une preuve de livraison D8. Corrélation connue vs inconnue explicite. Aucun secret, texte de décision sensible ou chaîne de pensée dans les métriques publiques.

## 10. Traçabilité et QA

La matrice annexe porte **une ligne par RG et PF D5/D6** : `40 RG-TRJ + 37 RG-GOV + 30 PF-TRJ + 29 PF-GOV = 136 références uniques`. Chaque ligne indique capacité propriétaire, frontière `IN / INTERFACE / OUT`, QA B candidat ou preuve différée et, pour les PF, références des surfaces UX R3. Les 59 PF ont une correspondance UX dans l'audit R3 ; la couverture est **DOCUMENTARY MAPPED**, pas **COVERAGE VERIFIED**.

**QA R4 B01..B18 à exécuter**, avec attention particulière : B03 GO naturel, B04 source équivoque, B05 unicité PG réelle, B06 ACK perdu, B07 atomicité CLOSE/OPEN, B08 maturité sans gate, B09/B10 méthode versionnée, B11 digression sans CKI secondaire, B12 indisponibilité/hostilité CKI, B13 conflit, B14 suspension persistante, B15 isolation interprojets, B16 révocation à l'effet, B17 projection Journal, B18 navigation sans effet.

**Niveaux distincts de preuve :** unitaires/déterministes, PG transaction/concurrence/idempotence, migration/restart, navigateur authentifié + clavier/reflow, Nora LIVE contrôlée pour qualité de guidance/intention, adversarial/injection, RECETTE ENV-01 sur SHA figé. Tous **NOT EXECUTED** pour ML3. Ne pas créer de faux scénarios D7/D8/D9 ni déclarer PARTIAL sans cas d'exécution séparée réel.

## 11. Blast radius, risques, réserves et gates

**Blast radius :** AUTH/projet ML1 ; idempotence de tour et pipeline Nora ML2 ; modèles Drizzle et migration PG ; lecture D4 et absence de copie ; API Next/erreurs ; UX lot B et contrat visuel R3 ; logs, sécurité et suppression DATA-01 ; documentation architecture CURRENT synchronisée avec le code au même macro-lot ; futurs contrats D7/D8/D9.

**Décisions de conception R01–R04 proposées, détaillées au §8 bis (à valider par Morris) ; réserves de réalisation restantes :**

- `REV-01` — **TRAITÉ D0 / À VALIDER MORRIS :** politique d'épinglage CKI, indisponibilité, première association ultérieure, conservation des versions et distribution vérifiable ; vérifier par tests à la construction.
- `REV-02` — **TRAITÉ D0 / À VALIDER MORRIS :** sémantique de choix, remplacement, retrait, suspension et révocation de la décision qui fonde la méthode ; vérifier les cas limites de portée.
- `REV-03` — **TRAITÉ D0 / À VALIDER MORRIS :** stratégie de verrou commun, index et clés d'intention, ordre des opérations, catégories de réponse ; DDL final, migration et preuve PG restent à la charge Cursor.
- `REV-04` — **TRAITÉ D0 / OPTION A MORRIS ACQUISE :** PF-TRJ-16/PF-GOV-05 couvrent le combiné interne atomique ; `PARTIAL` uniquement aux futures frontières réellement séparées, sans modifier R2.
- `REV-05` — Compléter et relire le mapping individuel RG/PF vers assertions/test code exacts, preuves, SHA et lanes ; inventaire documentaire seul ≠ test.
- `REV-06` — Revue de la transposition native Figma et des scénarios navigateur, y compris suspension, ambiguïté, méthode/CKI absent, responsive.
- `REV-07` — Contrôles de confidentialité/rétention des décisions et des textes de provenance (DATA-01), isolation interprojets, réconciliation de droits, gestion du mode DEV auth.
- `REV-08` — Maintenir les interfaces D7/D8/D9 réellement hors effet, sans faux STOP, fausse réception ou fausse autorisation Git ; l'implémentation ML3 ne les délivre pas.

**Gates :** (1) Morris examine et arbitre ces réserves de conception puis valide la **spécification globale** ; (2) GO Cursor D3/SFIA v2.6 indépendant et template Git consulté ; (3) développement/PG/UI/tests/docs en un macro-lot ; (4) revue sur pack complet et preuve ; (5) RECETTE/PR/merge/promotion/R6/adoption, chacun sous gate approprié. Aucune action Git de publication comprise dans ce document local.

**Verdict :** `R5 / ML3 — TECHNICAL SPEC v0.4 D0 CANDIDATE — R01–R04 DESIGN PROPOSED/CLOSED FOR REVIEW — MORRIS CONTENT VALIDATION PENDING — NO CURSOR GO — NO IMPLEMENTATION — NO TEST — GIT DOCUMENTARY BRANCH COMMITTED — NO MAIN MERGE`.