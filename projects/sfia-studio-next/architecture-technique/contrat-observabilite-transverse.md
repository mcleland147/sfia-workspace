# SFIA Studio Next — Contrat transverse de diagnostic et d'observabilité

| Champ | Qualification |
| --- | --- |
| Capacité | Observabilité technique et diagnostic de l'application SFIA Studio Next, D1–D9 |
| Version | v0.1 — 2026-11-05 (Europe/Paris) |
| Décision Morris | **Vision et principes validés en conversation le 2026-11-05** ; mécanismes d'implémentation, backend de consultation et périmètre avant RECETTE **À ARBITRER** |
| Statut | **DOCUMENTED / VALIDATED PRODUCT INTENT / CANDIDATE TECHNICAL CONTRACT** ; NOT IMPLEMENTED / NOT BEHAVIOR PROVEN |
| Nature | Contrat architectural de référence pour R5 et R6, complément R4 sans nouvel ADR ni modification de SEF, DATA-01, ENV-01 ou SFIA v2.6 |
| Source de construction | Branche documentaire basée sur PR #656, elle-même basée sur PR #655 ML2 ; aucune de ces PR n'est assimilée à la baseline main |
| Autorité | Morris : arbitrages/gates ; ChatGPT : conception/revue ; Cursor : technique sur mandat D3 distinct |

**Sources canoniques :** [vision R1](../cadrage/vision-produit.md), [index R2](../conception-fonctionnelle/README.md), [UX R3](../ux-ui/espace-projet-interaction-pilote-nora.md), [cadrage R4](cadrage-r4.md), [décision R4 (ADR et DATA-01)](../governance/decisions/2026-11-04-r4-architecture-exit.md), [ENV-01](../governance/environnements-recette-et-promotions.md), [référence R5](../construction/reference-delivery-r5.md), [ML2 spec](../construction/ml2-production-et-capitalisation-nora/specification-technique.md) et [matrice ML2](../construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md). Les propriétaires fonctionnels R2 ne sont pas remplacés par ce document.

## 1. Finalité, résultat et limites

**Résultat opérateur :** retrouver, pour une opération critique, sa demande, son contexte réel de déploiement, les étapes et dépendances traversées, les tentatives et erreurs connues, les effets effectivement confirmés, les mesures disponibles et les informations manquantes ; pouvoir qualifier une cause probable et une correction sans prétendre lire le raisonnement caché de Nora.

**Résultat Pilote :** informations d'activité utiles et fidèles dans les surfaces existantes, sans afficher une console d'exploitation imposée, une progression fictive ou des secrets. La qualité cognitive est évaluée séparément par le protocole R5 §14, pas par la seule présence de traces.

**IN :** authentification/identité, routes API, persistance, sas/projet/commandes, D3/D4, sécurité/isolation, build et lane, incidents, reprise, coûts/latences et futures frontières D5–D9 au moment de leur implémentation. **OUT :** surveillance intégrale de chaque geste ou contenu, journal de chaîne de pensée, nouveau journal de vérité métier, décision D6 depuis une trace, preuve D8 depuis un log, moteur général d'audit, intégration préventive d'outils D7/D9 non construits.

La promesse « zéro angle mort » est un **objectif de couverture des scénarios critiques**, pas une garantie absolue en cas de crash, coupure réseau, rupture de stockage ou fournisseur externe muet. La perte de télémétrie significative doit elle-même être détectable ou déclarée comme limite.

## 2. Invariants de conception

- **OBS-01 — Natif d'abord :** utiliser instrumentation Next.js, Better Auth, statistiques/journaux PostgreSQL, tracing/usage Agents SDK et événements GitHub quand D9 existe. Aucun moteur similaire n'est créé en parallèle sans besoin prouvé.
- **OBS-02 — Identités et faits séparés :** trace technique, requête HTTP, tentative fournisseur, commande métier, transaction durable, décision humaine et verdict probatoire ne sont pas synonymes.
- **OBS-03 — Corrélation transverse :** une opération Studio peut relier plusieurs traces et tentatives externes ; les fournisseurs conservent leurs IDs natifs, Studio relie les références effectives.
- **OBS-04 — Honnêteté des états :** ATTEMPTED, SUCCEEDED, REJECTED, FAILED, INTERRUPTED, UNKNOWN ne sont annoncés que dans le périmètre réellement observé ; demande STOP ≠ arrêt constaté.
- **OBS-05 — Proportionnalité :** mesurer chaque frontière critique et les erreurs ; agréger les opérations nominales à haute fréquence et sélectionner la capture détaillée selon risque, sans perte silencieuse des scénarios obligatoires.
- **OBS-06 — Sécurité :** minimiser identités, contenus, secrets et accès ; isoler les lanes DEV/RECETTE/STABLE et les projets ; vérifier les exporteurs avant LIVE.
- **OBS-07 — Résilience :** télémétrie indisponible ne transforme jamais un effet UNKNOWN en réussite et, sauf audit légal/transactionnel propre au domaine, ne bloque pas automatiquement une opération métier indépendante.
- **OBS-08 — Diagnostic démontré :** chaque scénario critique a un oracle d'observation au SHA/lane réels ; documentation, console et fixtures ne suffisent pas à déclarer BEHAVIOR PROVEN.

## 3. Corrélation — modèle conceptuel et frontières

| Identifiant | Propriétaire / portée | Invariant |
| --- | --- | --- |
| operation_id | Studio, une intention/opération logique | Généré/validé serveur ; ne remplace aucune commande métier |
| trace_id et span_id | Trace technique OpenTelemetry ou équivalent | Servent au parcours technique, pas à l'idempotence |
| parent_operation_id | Studio si causalité inter-opérations réelle | La simple proximité temporelle ne prouve pas une relation |
| generation_id | D3 Nora | Peut être associé à plusieurs appels fournisseur/tentatives |
| attempt_id | Frontière fournisseur ou D7 | Chaque retry réel distinct et attribuable |
| provider_request_id | Fournisseur, lorsqu'il le communique | Peut être absent ; ne pas inventer une référence distante |
| command_id / correlation_key | Propriétaire D2/D4/D7, selon contrat existant | Respect de l'idempotence ; ne pas injecter les clés brutes dans les logs |
| resource_ref / source_version | Propriétaire D4/D9/autre | Une ressource demandée, lue, citée et sauvegardée sont des faits différents |

**Propagation :** le point d'entrée serveur crée/valide le contexte de corrélation ; les sous-appels transmettent les références possibles sans imposer le même format aux fournisseurs. Les frontières asynchrones, callbacks, retries et webhooks établissent une relation causale explicite, jamais inférée d'une date proche. Les IDs de session/Pilote/projet sont réservés et ne deviennent pas des labels publics de métriques à forte cardinalité.

**Remarque technique :** le tracing natif de l'Agents SDK n'est pas présumé être un enfant automatique de la trace OpenTelemetry Next.js ; sa référence doit être reliée explicitement et testée avec la version SDK réellement verrouillée. Une corrélation manquante reste INDISPONIBLE.

## 4. Événements structurés et mesures

### 4.1. Enveloppe minimale candidate

| Attribut | Obligation / traitement |
| --- | --- |
| timestamp | UTC réellement observé, monotonicité non supposée entre machines |
| event_name et event_version | Nom stable, versionné en cas de changement de sens |
| component et operation_id | Propriétaire et corrélation technique/métier quand applicables |
| environment, source_sha, build_id | Identité de lane et build **réellement exécutés**, pas le HEAD de branche supposé |
| outcome / error_category / error_code | États et causes classées sans message secret brut |
| duration_ms / usage | Seulement si mesurés ; zéro ≠ inconnu |
| trace/span/provider refs | Identifiants natifs disponibles ou absents explicitement |
| object/source/version refs | Références bornées et accessibles aux personnes habilitées |
| observation_kind | MEASURED / COMPUTED / ESTIMATED / UNAVAILABLE quand pertinent |

**Erreurs :** la réponse client divulgue le minimum sûr ; le diagnostic serveur conserve la catégorie correcte et l'identifiant de corrélation. Les erreurs de session (401), d'accès (403 ou 404 selon politique), de validation (400), de conflit (409), de dépendance indisponible (503 si approprié) et internes (500) ne peuvent plus être fusionnées arbitrairement dans un 401.

### 4.2. Catalogue d'observation par propriétaire

| Frontière | Événements et questions critiques | Source native / propriétaire |
| --- | --- | --- |
| AUTH / D1 | OAuth commencé/revenu lorsque observable ; succès/refus ; session expirée/révoquée ; échec provisionnement Pilote, erreur fournisseur ou DB ; mode DEV distinct du LIVE | Better Auth et D1, sans token/cookie |
| HTTP / application | entrée/fin requête, route, statut et durée ; validation, refus, erreur interne ; réponse perdue possible | Instrumentation Next.js/OTel + classification API |
| PostgreSQL | disponibilité, pool, erreurs de transaction, violations d'intégrité, requêtes lentes, migrations ; opérations persistées réellement | Statistiques/logs PostgreSQL + frontières applicatives |
| D2 | intention de création, idempotence, commande/reconciliation, création effectivement confirmée, conflit | Vérité commande et transaction D2 |
| D3 | qualification du travail, politique/configuration appliquée, générations, appels outils, retries, tokens/temps/coûts et état final | Agents SDK + métadonnées D3 |
| D4 | consultation reçue/refusée, provenance/version, sauvegarde/révision confirmée, conflits et événements existants de Sujets | D4/DB et journal knowledge_subject_events |
| D5 | transitions de cycles et méthode, conflit, suspension, unicité, observabilité réelle quand implémenté | D5, non créé dans ML2 |
| D6 | décision/mandat/retrait, portée et état d'autorité confirmés, sans reconstruire une décision depuis un log | D6, non créé dans ML2 |
| D7 | dispatch, tentative/ACK/perte, STOP, réconciliation et effet inconnu, sans dispatch bis | D7, non créé dans ML2 |
| D8 | références/vérifications probatoires et verdicts, hors logs techniques | D8, non créé dans ML2 |
| D9 | Git : accès réel, ref/commit, API rate limit/refus, webhook signature/livraison, effet vérifié | D9/GitHub, au lot propriétaire |

**Audit versus télémétrie :** un événement critique à exigence de durabilité suit le stockage et les garanties de son propriétaire (D2/D4/D6/D7/D8). Les logs/traces sont des observations auxiliaires, potentiellement échantillonnées/éphémères : ils ne prouvent pas une écriture ni ne deviennent une source concurrente.

### 4.3. Métriques candidates

- HTTP : volume, statut, catégorie d'erreur, latence p50/p95 et p99 uniquement si volume pertinent.
- AUTH : résultat d'authentification, refus, incidents de session et fournisseurs ; sans labels identifiants.
- DB : disponibilité/connexions, pool, transactions échouées, conflits et requêtes lentes.
- D3 : appels modèles et classification d'effort effective, retries, tokens réels, temps, erreurs et coûts ESTIMÉS, en distinguant appels de qualification.
- D4 : lecture, refus, sauvegarde confirmée, conflits de révision, anomalies de réconciliation.
- Intégrations futures : latence, rate limits, refus et état de mutation réellement confirmé.
- Observabilité : santé de l'exporteur/collecteur, pertes ou drops détectables, consultation impossible.

**Alertes :** seuils ajustés aux observations réelles, non inventés à la rédaction. Les métriques agrégées n'utilisent pas de labels de session, d'ID utilisateur ou de document.

## 5. Collecte, consultation et architecture candidate

**Base de conception :** OpenTelemetry pour le parcours applicatif Next.js si compatible et démontré ; sorties structurées côté serveur ; Better Auth logger/hooks ; PostgreSQL statistiques/logs ciblés ; tracing natif Agents SDK pour Nora. Un éventuel exporteur/collecteur doit être évalué sur compatibilité, sécurité, disponibilité en lanes locales, filtrage, rétention et simplicité.

**Pas de produit présélectionné :** ni Jaeger/Grafana/Datadog/Sentry ni nouveau entrepôt PostgreSQL de télémétrie ne sont adoptés. L'option locale minimale doit permettre une recherche par operation_id, une chronologie corrélée, les états/erreurs, les temps/consommations mesurées, les références d'effets métier et la détection de traces manquantes. Une sortie console seule ne vaut pas diagnostic durable si sa collecte/recherche après redémarrage n'est pas prouvée.

**Restitution UX :** le Pilote voit dans le fil les statuts réellement utiles, pas un panneau de traces, ni une lecture des pensées de Nora. Une surface spécialisée d'exploitation doit être justifiée et soumise au contrat UX R3 et aux droits, pas décidée automatiquement.

**Diagnostic guidé :** un examinateur peut formuler une hypothèse (appel redondant, source absente, réauthentification échouée), puis la confronter aux traces et aux sources transactionnelles. Aucune explication causale certaine n'est produite quand seule une corrélation temporelle existe.

## 6. Protection, rétention et fiabilité

- Les journaux techniques non critiques suivent les valeurs DATA-01 **environ 14 jours**, sous obligations/contraintes applicables ; cela ne modifie pas la conservation des décisions, preuves ou transactions. Les journaux de sécurité et services tiers réclament qualification spécifique.
- Prompts, réponses complètes, documents, SQL avec valeurs, cookies, jetons, secrets, clés de session, paramètres OAuth et chaîne de pensée brute **exclus par défaut des logs généralisés**. L'Agents SDK peut capturer des entrées/sorties sensibles : inspecter/configurer ses options avant export LIVE.
- Séparer les accès par projet/lane et habilitation. Stockage et export tiers : vérifier résidence, rétention, suppression, sécurité et contrat effectif ; la durée locale n'est pas automatiquement imposée au fournisseur.
- Sur panne du collecteur, l'opération métier continue lorsqu'elle ne dépend pas d'un audit transactionnel bloquant ; le défaut d'observation est signalé. Aucune fausse « trace complète » ni fausse réussite.
- Pour les événements critiques nécessitant une garantie de présence, définir les écritures fiables chez le propriétaire métier ; un buffer de logs asynchrone ne fournit pas une garantie après crash.
- Les identifiants de corrélation ne servent ni à autoriser une action ni à contourner les droits ; aucune sortie sensible dans CI, captures, rapports Cursor ou handoff.

## 7. Scénarios de diagnostic et preuves

| ID | Incident / négatif discriminant | Oracle de diagnostic attendu | Niveau à obtenir |
| --- | --- | --- | --- |
| OBS-Q01 | Échec OAuth GitHub | Distinguer fournisseur, callback, provisionnement et session sans secret | INTEGRATION + LIVE ciblé |
| OBS-Q02 | PostgreSQL indisponible derrière une API | Identifier panne DB, ne pas répondre faussement SESSION_INVALID | INTEGRATION + HTTP |
| OBS-Q03 | Accès D4 refusé ou interprojet | Refus qualifié, sans fuite de source ni titre sensible | INTEGRATION |
| OBS-Q04 | Streaming Nora échoue et second run est tenté | 1 intention, 2 tentatives mesurées, pas de coût/état confondu | DETERMINISTIC + LIVE |
| OBS-Q05 | Document créé/révisé, ACK perdu | Transaction D4 confirmée ; retry réconcilié sans doublon | DB + BROWSER |
| OBS-Q06 | Nora atteint limite/timeout/STOP | État partiel/inconnu, opérations réellement reçues, pas de COMPLETE inventé | DETERMINISTIC + LIVE |
| OBS-Q07 | Tracing SDK absent ou exporteur indisponible | Perte/indisponibilité visible, pas de chemin artificiellement complété | INTEGRATION |
| OBS-Q08 | Requête DB ou API lente | Composant et durée mesurée identifiables ; pas de cause attribuée sans mesure | INTEGRATION |
| OBS-Q09 | Secret synthétique injecté dans une erreur | Aucun secret dans logs, trace exportée, UI et report | DETERMINISTIC + INTEGRATION |
| OBS-Q10 | SHA/lane distincts entre deux recettes | Requête associée au build/lane réellement servi, pas au HEAD supposé | INTEGRATION + BROWSER |
| OBS-Q11 | Git API refus/rate limit, quand D9 existe | Identité permission et événement externe rattachés, sans effet inventé | LIVE au lot D9 |
| OBS-Q12 | D7 dispatch sans ACK, quand D7 existe | Tentative et état UNKNOWN, vérification avant tout replay | REAL borné au lot D7 |

**Preuves :** par scénario, conditions et données de test, lane, SHA/build/schema, sources d'événements effectivement produites, chronologie et liens, statut, réserves et verdict. DETERMINISTIC ≠ DB/INTEGRATION ≠ BROWSER ≠ LIVE ≠ REAL. COG-01..07 et R5 §14 évaluent indépendamment la qualité cognitive : tracing correct ≠ qualité de Nora prouvée.

## 8. Blast radius et trajectoire

**Candidat pour un socle cohérent à qualifier avant RECETTE ML2 :** API + erreurs différenciées, corrélation, AUTH/D1, D2 commandes, D3 Nora, D4 lectures/sauvegardes, DB et environnement, consultabilité des traces en RECETTE, sécurité/QA OBS-Q01..10 pertinents. Les extensions cognitives et les limites de budget/effort sont instruites dans le même arbitrage ML2, sans ordonner automatiquement une réouverture technique de PR #655.

**D5–D9 :** ajouter les événements spécifiques lorsque ces propriétaires livrent leurs capacités, avec QA et liens au socle transverse ; ne pas précréer les tables/outils/permissions Git/dispatch du futur.

**Blast radius :** API/HTTP, Better Auth, session resolver et DEV adapter, provider Nora/SDK, D4/DB, Next.js instrumentation, configuration serveur/collecteur, confidentialité/export, CI, UID de suivi, ENV-01 lanes ; impact UX possible seulement si de nouveaux états réels sont exposés. **Aucun pivot persistance, middleware d'autorité parallèle, service de supervision maison ou console produit imposée par défaut.**

**Dette et exits à arbitrer :** backend local d'inspection ; politique de traces détaillées/échantillonnage ; prévention de perte sous crash ; sécurité/reten­tion des fournisseurs ; couverture des cas LIVE ; coût de collecte ; ordre d'intégration par macro-lot. Chaque report porte propriétaire, risque, preuve minimale de sortie et gate Morris.

## 9. Décisions et gates

**Acquis Morris 2026-11-05 :** orientation transverse ; priorité aux mécanismes natifs ; observabilité intelligente, couvrant les parcours critiques, sans duplication ; diagnostics Nora et qualité indépendants.

**Non décidés :** produit de consultation, formats/API définitifs, stockages/schémas, collecte exhaustive versus sélection, budgets et seuils, modification des ADR ou d'ENV-01, découpage technique précis dans ML2, architecture déployée, Go Cursor.

**Conformité documentaire attendue :** R1 porte le résultat ; R2 D1–D9 les comportements propres ; R3 la visibilité utilisateur ; R4 le contrat et les frontières ; R5/ML2 la construction et les oracles. Cette source détaillée est référencée, non dupliquée dans un deuxième standard.

**Statut : VALIDATED PRODUCT INTENT / TECHNICAL CONTRACT CANDIDATE / DOCUMENTED ON BRANCH — no code, no tests executed, no PR, no merge, no promotion, no ADOPTED.**

## 10. Position de delivery après arbitrage R5/ML2 Morris (2026-11-05)

> **VALIDATED STRATEGY FOR INTEGRATION BEFORE RECETTE — technique détaillée candidate.** [Decision Record de trajectoire](../governance/decisions/2026-11-05-r5-ml2-cognition-observabilite-trajectory.md) et [référence R5 §17](../construction/reference-delivery-r5.md), [ML2 §17](../construction/ml2-production-et-capitalisation-nora/specification-technique.md), [QA §10](../construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md). **Le choix « inclure le socle transverse en ML2 avant RECETTE » est désormais arbitré** ; les options ouvertes au §9 concernent seulement le moyen technique, l'exploitation, les seuils, les conditions de sécurité et la portée détaillée de ses preuves. Aucun changement d'ADR R4-01..04, DATA-01 ou ENV-01.

**Périmètre d'exploitation minimal de ML2 :** corréler les parcours existants AUTH/API/DB/D1–D4, classifier les erreurs réelles et les tentatives Nora (modèle/effort/outils/tokens/durées si disponibles), retrouver en RECETTE une opération et sa chronologie sous habilitation, confronter ses états aux vérités D2/D4. La confidentialité et l'absence de secrets dans les traces sont des critères d'acceptation, pas des améliorations facultatives.

**Couverture au rythme du produit :** OBS-Q01..10 pertinents au périmètre ML2 avec tests et données réels ; OBS-Q11/12 au moment de D9 et D7/D8. Les méthodes natives sont étudiées avant toute infrastructure spécifique. Un dashboard avancé, une base d'audit parallèle et l'instrumentation de domaines inexistants ne sont pas des conditions de RECETTE ML2.

**STOP / gatification :** la publication documentaire ne choisit ni collecteur, ni système de stockage, ni schéma, ni API de supervision, ni rétention fournisseur, ni budgets de collecte. Il faut un contrat technique qualifié et un **GO Cursor D3 distinct** avant construction ; aucune conformité LIVE/REAL ni RECETTE ne découle de cette section.

## 11. Architecture de corrélation et exploitation minimale de ML2 (2026-11-05)

> **VALIDATED IN CONTENT BY MORRIS — 2026-11-05 / DOCUMENTARY CANDIDATE ON BRANCH.** Contrat de conception ; détails de mise en œuvre, compatibilité fournisseur et mécanismes de collecte à qualifier avant GO Cursor. **NOT IMPLEMENTED / NOT TESTED / NO PR OR MERGE.**

**Positionnement :** précision technique candidate des invariants OBS-01..08 et du §10, sans adoption d'un fournisseur, de nouvelles tables métier, d'un backend industriel ou d'un service de supervision. La frontière D3↔D4 est documentée dans `cadrage-r4.md` §14 et la spécification ML2 §18.

### 11.1. Contrat de corrélation sans confusion d'identités

- `request_id` (nouveau concept technique candidat) : identifiant serveur d'une **tentative HTTP**, distinct à chaque émission/retry HTTP ; utilisable dans une réponse client sûre pour signaler un incident.
- `operation_id` : référence serveur d'une **intention métier/logique** observée. Un retry n'est rattaché à la même opération que si un lien durable et autorisé est **effectivement vérifiable** ; ne jamais reconstruire la continuité depuis la proximité temporelle ou un identifiant fourni par le modèle.
- `trace_id/span_id` : propriétés d'une trace technique Next.js/OTel lorsqu'elle existe ; elles ne remplacent ni request_id ni operation_id.
- `generation_id` : identité D3 existante d'une génération Nora, pouvant correspondre à plusieurs tentatives fournisseur.
- `attempt_id` : identifiant local d'une tentative **réellement initiée** de fournisseur, tool-call ou dépendance ; `provider_request_id` seulement s'il est reçu, jamais inventé.
- `correlation_key`, `document_id`, `revision_id`, `source_version` : propriétés D2/D4 existantes, non remplaçables par des IDs de télémétrie. Ne jamais journaliser une clé brute présentant un risque de réutilisation ; n'exposer qu'une référence sûre à la commande validée.
- `environment`, `source_sha`, `build_id`, `schema_revision` : identité immuable **du build/lane réellement servi** ; ne pas interroger le HEAD Git supposé pendant une requête.

**Important :** la route conversation actuelle reçoit `correlationKey` mais celui-ci ne protège pas démonstrativement la persistance du message utilisateur contre une seconde requête ; l'instrumentation ne doit pas affirmer que deux requêtes constituent un seul échange idempotent. Vérifier le contrat conversation/retry séparément du contrôle documentaire C3.

La relation entre SDK Agents tracing et OpenTelemetry Next.js n'est **pas présumée automatique**. La lier à l'entrée et à la sortie du véritable adaptateur D3 avec les références natives accessibles sur le SDK verrouillé, sans imposer de parenté de spans fictive. Les relations de causalité sont explicites ; les liens absents sont `UNAVAILABLE`.

### 11.2. Catalogue minimal d'événements réellement discriminants

| Frontière propriétaire | Événement candidat | Assertion autorisée |
| --- | --- | --- |
| HTTP | entrée et fin de requête, status, durée, request_id / operation_id | Une requête a traversé le serveur et a répondu / échoué dans la portée observée |
| AUTH/D1 | résultat de résolution de session, refus, erreur fournisseur / provisionnement / DB | `SESSION_INVALID` seulement si session réellement absente/invalide ; autres défaillances différenciées |
| D2 | intention/création/reconciliation et référence transactionnelle confirmée | Aucune création « réussie » depuis un simple appel HTTP ou ACK non reçu |
| D3 | configuration de politique **appliquée**, début/fin de génération, tour si observé | Modèle/effort/bornes transmis au point SDK, jamais juste souhaités |
| Fournisseur | tentative envoyée, réponse reçue, erreur, usage réellement disponible | Une génération peut contenir plusieurs tentatives, y compris fallback streaming |
| Outil D3→D4 | demande, autorisation/refus, retour réellement reçu | Un titre demandé n'est pas une révision lue ; outil refusé ≠ succès |
| D4 | lecture versionnée, sauvegarde/révision/reconciliation | `AVAILABLE` uniquement si D4 et DB confirment l'effet ; les événements de Sujets restent chez D4 |
| PostgreSQL | indisponibilité, erreur de transaction, délai mesuré aux frontières pertinentes | Éviter SQL, valeurs de paramètres, données privées et causalité attribuée sans mesure |
| Collecte | exporter/écriture/consultation indisponible, lacune détectée | Le diagnostic peut être incomplet sans transformer les effets métier en échec |

**Schéma de restitution candidat :** `timestamp_utc`, `event_name`, `event_version`, `component`, `request_id`, `operation_id`, `generation_id`, `attempt_id`, `trace_refs?`, `outcome`, `error_category?`, `duration_ms?`, `usage?`, `measurement_kind`, `resource_ref?`, `source_version?`, `environment`, `source_sha`, `build_id`. Les champs absents restent absents/`UNAVAILABLE`, jamais zéro ou succès synthétique. Pas de contenu source ni d'ID utilisateur comme label métrique.

### 11.3. Séparation stricte de la télémétrie et des faits métier

Le diagnostic peut décrire `ATTEMPTED`, `REJECTED`, `FAILED`, `INTERRUPTED`, `UNKNOWN`, et `SUCCEEDED` seulement dans la frontière qui possède ce constat. Exemple : `provider.completed` ne prouve ni `document.available` ni pertinence cognitive ; `tool.called` ne prouve pas `resource.read` ; un `HTTP 200` ne prouve pas réception du résultat par le navigateur. En cas de conflit, la transaction D4 et sa version prévalent sur les logs. Ne pas créer de nouvelles tables métiers pour enregistrer chaque span ou recréer `knowledge_subject_events`.

### 11.4. Collecte et consultation en RECETTE : solution minimale à éprouver

**Option de référence pour qualification :** événements serveur structurés expurgés, capturés dans un stockage de journaux **non transactionnel**, séparé par lane, de manière réellement persistante après redémarrage, avec rétention/rotation DATA-01 et accès réservés à l'examinateur habilité. Consultation en lecture seule par `operation_id`/`request_id` et chronologie triée, éventuellement via outil CLI local ; pas de dashboard Pilote ni de requête SQL sur la DB métier pour agréger les logs. Une simple console non conservée ne satisfait pas le contrat.

**Voie native complémentaire :** Next.js 15 et OpenTelemetry pour les spans HTTP si l'instrumentation est effectivement compatible ; Agents SDK pour ses spans de générations/outils **après vérification** de la version verrouillée `@openai/agents@0.21.0`, de la confidentialité et des conditions d'export ; Better Auth logger/hooks pour l'identité sans token/cookie ; PostgreSQL statistiques/logs ciblés. Un collector/exporter OTel complet n'est pas imposé : le mesurer contre la recherche locale durable, la sécurité, la complexité et l'utilité réelle. Si la capture ou l'export SDK risque de divulguer les contenus, le désactiver ou l'expurger jusqu'à vérification ; le besoin de diagnostic ne déroge pas à DATA-01.

**Procédure de consultation à prouver :** (1) retrouver une requête par ID + build/lane réellement servis ; (2) reconstruire les étapes avec timestamps, statuts et mesure/indisponibilité ; (3) distinguer génération, tentatives et lectures D4 ; (4) confronter un effet document/révision à la base D4 sous les droits valides ; (5) indiquer les trous de trace/export ; (6) vérifier que la chronologie est consultable après redémarrage du processus RECETTE. Le canal d'exploitation ne doit pas être ouvert au navigateur Pilote ni à un autre projet/lane sans autorisation explicite.

**Comparaison d'options avant GO technique :**

| Option | Avantage | Inconvénient / condition |
| --- | --- | --- |
| Logs structurés + capture durable par lane + recherche CLI | Sobriété, lecture reproductible, pas de nouvelle plateforme | Garantir rotation, permissions, redémarrage, simultanéité et consultation réelle |
| OpenTelemetry + collector et backend de traces | Chaînage natif/écosystème standard | Dépendances supplémentaires, configuration/export/rétention, coût d'exploitation et confidentialité à prouver |
| Tracing SDK fournisseur seul | Détail interne génération/outils | Ne couvre pas AUTH/API/DB/D4 et peut sortir du périmètre de rétention/accès Studio ; **insuffisant seul** |

La première option constitue un **candidat préféré**, pas un fournisseur ou un schéma adopté. La présence d'OpenTelemetry reste souhaitable lorsqu'elle simplifie réellement l'intégration.

### 11.5. Erreurs et confidentialité

Classifier au propriétaire les catégories `SESSION_INVALID` (401 authentique), `FORBIDDEN` (403 ou 404 non révélateur), `INVALID_REQUEST` (400), `CONFLICT` (409), `DEPENDENCY_UNAVAILABLE` (503 lorsque approprié), `INTERNAL` (500), et panne fournisseur distincte selon contrat. Les routes avec `catch { return 401 }` et le `catch` Better Auth qui absorbe indistinctement une panne DB sont des **KNOWN GAPS** du candidat #655. Remplacer cette confusion par une classification sûre **sans** fuite de messages SQL, clés, tokens ni informations de projets étrangers.

Les logs et spans ne contiennent par défaut ni requête Pilote complète, ni document, ni réponse Nora, ni SQL/valeurs, ni token/cookie, ni pensée cachée. Protéger les références potentiellement personnelles, préserver DATA-01 (journaux techniques non critiques environ 14 jours), ENV-01 (volumes distincts et aucun secret partagé) et les règles propres de rétention du fournisseur. Vérifier le comportement de collecte et de suppression au lieu de revendiquer une protection par configuration supposée.

### 11.6. Défauts de télémétrie et limites

Si la collecte ou la consultation est indisponible, déclarer **DIAGNOSTIC INCOMPLETE** et, si l'opération métier est indépendante du journal auxiliaire, la laisser continuer. Ne jamais remplir artificiellement les étapes manquantes ; une panne brutale peut perdre les derniers événements et aucune promesse « zéro angle mort » n'est techniquement fondée. Les écritures d'audit métier obligatoires restent assurées par les propriétaires D2/D4 et leurs transactions, pas par le buffer de télémétrie.

**Gates :** observabilité du code et procédure de consultation NOT IMPLEMENTED / NOT TESTED ; compatibilités, emplacement de journaux, configuration de capture et droits à figer dans le contrat technique avec accord Morris. Tests OBS-Q01..10 sur même SHA/lane, aucun claim LIVE ou BEHAVIOR PROVEN depuis ce texte.

## 12. Qualification de la collecte ML2 et restitution des budgets — validation de direction (2026-11-05)

> **MORRIS DESIGN DIRECTION VALIDATED / TECHNICAL DETAILS AND SECURITY PROOF PENDING.** Cette clause synchronise [ML2 §21](../construction/ml2-production-et-capitalisation-nora/specification-technique.md), [R5 §21](../construction/reference-delivery-r5.md) et [QA §14](../construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md), sans créer une seconde doctrine ni imposer un entrepôt d'audit.

**Option de collecte ML2 privilégiée :** évènements JSON serveur expurgés, capturés de manière durable et isolée par lane par le processus/launcher réel ; recherche read-only locale par `operation_id` après redémarrage, permissions restreintes, rotation DATA-01. Le moyen précis et les droits d'accès sont à vérifier dans DEV/RECETTE ; aucun export SDK non contrôlé, aucune route publique de traces ni base de logs DB parallèle. La panne de diagnostic reste observable `DIAGNOSTIC INCOMPLETE` sans modifier artificiellement la vérité métier.

**Budget et mesure :** les limites de stress ML2 (30/120/180 s, 0/32k/64k caractères D4) sont **des profils TEST seulement**, jamais des plafonds d'usage normal. Chaque événement de borne identifie `policy_version`, `profile_type` (test/operational), nom du compteur, valeur configurée et consommation **réellement mesurée** ; événement de limite ≠ erreur métier ou preuve d'incapacité cognitive. Le recalibrage des limites opérationnelles est **obligatoire** sur missions représentatives longues (5–10 minutes possibles ou davantage, volumes D4 importants), par analyse de qualité, fréquence de saturation, coûts et latences, avec validation Morris avant utilisation approfondie. Le log ne doit contenir ni texte source, ni secrets, ni chaîne de pensée.

**Statut : OBS DESIGN SYNCHRONIZED / IMPLEMENTATION AND LIVE MEASURES NOT OBSERVED / NO GO CURSOR, PR, MERGE OR ADOPTED.**
