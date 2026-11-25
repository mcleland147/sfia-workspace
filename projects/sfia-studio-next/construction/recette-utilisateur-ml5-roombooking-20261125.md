# ML5 — Recette utilisateur RoomBooking — 25 novembre 2026

**Statut : DOCUMENTED — livraison 1 NON ACCEPTÉE EN RECETTE.** R5 / ML5 OPEN ; R6 non démarré ; NO RELEASE ; NOT ADOPTED. PV factuel D1 sous GO Morris du 25/11 ; aucune modification normative ni fermeture d'exigence. Les priorités et regroupements ci-dessous sont des propositions de traitement, sauf refus de réception et attentes explicitement exprimés par Morris.

## 1. Objet, périmètre et identité

Recette humaine rapide de la livraison 1 Nora Cognitive Experience sur un **projet fictif neuf**, RoomBooking (réservation interne de salles), sans réutiliser Pilotage 360. But : confronter le fonctionnement réel à l'usage naturel, et non faire une recette du produit fictif lui-même. Dialogue tour par tour, captures navigateur et réponses recopiées par Morris ; ChatGPT analyse les observations. Pas de modification de code, pas de dispatch Cursor, pas de WEB LIVE. La livraison 2 (réalisation gouvernée, supervision, bilan) reste différée.

| Élément | Référence |
|---|---|
| Repo / base | mcleland147/sfia-workspace ; main 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Branche produit locale rapportée | sfia/next-ml5-integrated-delivery-20261123 |
| Candidat servi | 2a024b1c8d713ded6260d2a6427448a29f98a646 |
| Tree / web tree | 031f13043423c0e93d0b94af9fb27e852e262e74 / f57bb8eed98af19f4ea6d0a33d6de431084f635d |
| Build / digest RECETTE | 3RyhswMcKrNv8woukVXsT / cc7f5e5dbcff5af418393630de1d7d80d24e9cc44aa847eebda59eaa4e557a25 |
| Lane | 127.0.0.1:3200 ; DB sfia_next_recette_ml4 :5434 ; OAuth normal |
| Cognition | ml5-cog-policy-v3-recette-operational-provisional ; OPERATIONAL_PROVISIONAL ; 24 segments / 200000 tokens ; modèle demandé gpt-6.2-sol |
| WEB | LIVE bloqué ; P0 ouvert ; D8 indépendant non qualifié |
| Projet | RoomBooking ; identifiant visible proj_7514cdde-42e1-4626-8806-3903373d7f69 |
| Document v1 | RoomBooking — Conception fonctionnelle V1 ; version courante affichée drev_575 (identifiant abrégé) |
| Cutover | [eef8d289](https://github.com/mcleland147/sfia-workspace/blob/eef8d289ecd305b8148b8f05d1521f472b6de1b3/sfia-review-handoff/latest-chatgpt-review.md) ; blob 6cef6bddd5b64356119c96fc937c1436b3f2b8de |
| Readiness | [1f6248e9](https://github.com/mcleland147/sfia-workspace/blob/1f6248e94af54fe210782cb1c85afbcdae915957/sfia-review-handoff/latest-chatgpt-review.md) ; blob 6a46a3088ada5d682167ae2df9d3b45606169224 |

Les identités runtime et contrôles de déploiement proviennent du pack Cursor relu à distance ; le poste local, les traces complètes, la base et le code produit ne sont pas directement inspectables par ChatGPT. Le cutover a rapporté anti-TEST_BOUNDARY, Nora LIVE smoke, WEB flags à zéro, 27 projets/118 documents/189 révisions préservés avant cette recette, schéma 001–021 inchangé. Ces comptages ne sont pas ceux de fin UAT. Les captures constituent des observations BROWSER utilisateur, non des preuves d'intégrité DB ni de cause racine. Les heures des captures sont locales ; fichiers de preuve dans le chat RoomBooking du 25/11, non intégrés à Git. F2 NOT PROVEN.

## 2. Sources de rattachement

- SEF v0.2, Roadmap Next §24 novembre, décisions R4/DATA-01, ENV-01 et product-versioning validés sur main ; branche documentaire candidate préexistante docs/next-ml5-uat-consolidation-20261124, base e7f1582f0b500abf1835ed1b7123e5fdc0540886 avant ce PV.
- [Recette Pilotage 360](recette-utilisateur-ml5-pilotage-360-20261124.md) : 30 UAT ouverts ; [registre ML5](ml5-registre-couverture-et-revue-developpement.md) : 99 exigences ; [contrat d'acceptation](contrat-acceptation-cognition-et-realisation-gouvernee.md), CA-01..10, T/Q/PF ; [architecture du conducteur cognitif](../architecture-technique/conducteur-cognitif-et-production-nora.md).
- Handoffs de delivery : 66f0897537b000580798ed35ad1544bcee8485c9, 3e8735960c587fe962e543051dbaffa3402f8ead, 42748ce1ced54cf288a986ded807466f399cf8d4, 1f6248e94af54fe210782cb1c85afbcdae915957. Les corrections rapportées et tests déterministes ne valent pas réception LIVE.
- Références UX natives : Figma page 12, 12.01 Travail (1210:233), 12.10 sas (1212:895), file key itgvCulInEnFY6DvgIegvP ; contrat de fidélité à relire avant changement, PNG natifs non inspectés ici.

## 3. Journal des 11 tours

| Tour | Demande / action réelle | Résultat observé | Qualification / preuves |
|---|---|---|---|
| 1 | SAS : créer une petite application interne RoomBooking, consulter et réserver des salles, V1 simple. | Réponse naturelle au tutoiement ; parcours date/créneau, disponibilité, réservation, annulation ; question utile sur calendrier existant. Aperçu cohérent. Activité générique pendant le traitement ; carte « Réponse Nora disponible » persiste avec « En cours ». | Positif métier ; RB-01/02 ; captures 08:02:36/52. |
| 2 | Aucun outil existant, app autonome ; validation des quatre fonctions. | Base suffisante, périmètre actualisé, pas de clarification superflue, création laissée au Pilote. Puces invisibles ; métadonnée SDK/COMPLETE exposée ; carte et animation persistantes. | Positif métier ; RB-01/02/03/04 ; 08:06:47. |
| 3 | Clic Créer le projet puis accès manuel. | Projet créé, étapes 1/2 terminées quasi immédiatement selon Morris, étape 3 statique « En cours » malgré réponse déjà prête lors de l'accès ; icône i ovale. Trajectoire CF→UX, deux cartes mais texte trois ; continuité sas Travail. Réponse initiale administrative, vouvoiement isolé, raisons peu développées. | RB-05..13 ; 08:09:06/35/42. Pas de preuve de réponse générée vs préformatée ; hypothèse à vérifier. |
| 4 | Demande de trajectoire globale légère, de CF à V1 utilisable, avant rétention. | Quatre étapes proportionnées : conception fonctionnelle, esquisse UX, réalisation/vérification, mise à disposition interne ; critère de V1 utilisable. Tutoiement retrouvé. Ancien et nouveau bloc activité simultanés ; répétitions génériques ; « Pas de production structurée contrat — DRAFT non préparé », Partiel alors que réponse complète. | Positif cognition ; RB-14..17, RB-01/03 ; 08:19:27/08:20:12. Capture Cursor fournie comme référence de principe : opérations visibles au fil du travail, pas imitation de jargon technique. |
| 5 | Retenir trajectoire ; puis message distinct « tu peux démarrer le cycle ». | Studio annonce RETAIN puis OPEN appliqués ; Nora propose conflits simultanés, contiguïté, annulation ; demande qui peut annuler. Panneau contexte ne montre ni cycle actif ni question ouverte. Restitution « Résultat Studio » rigide. | Positif séparation autorité sur parcours observé, à confirmer dans état propriétaire ; RB-18/19 ; RB-15/16/17 reproduits ; 08:28:33/38. |
| 6 | Seul l'auteur annule ; produire conception fonctionnelle synthétique. | v1 créée selon résultat d'enregistrement, accessible dans visionneuse et Documents. Règles et cinq cas de recette, créneaux contigus restent à confirmer, trajectoire cohérente. Activité double, anciens états, IDs acquis bruts ; trois consultations annoncées mais lien générique. | Création nominale observée, RB-20..23 ; RB-03 étendu aux documents ; 08:29:44 à 08:31:37. |
| 7 | Depuis Demander une révision : valider créneaux contigus, remplacer point à confirmer §2, ajouter scénario §3, garder le reste identique. | Nora décrit exactement les deux changements, annonce document proposé ; Studio indique demande non qualifiée pour écriture, aucun enregistrement ; viewer reste v1 courante (point ouvert et 5 scénarios), aucune proposition utilisable constatée. | RB-24..26 ; UAT-15 reproduit ; conservation non testable ; 08:40:07/08:42:22/30. |
| 8 | Signaler l'écart : document toujours v1, vérifier et corriger. | GLOBAL_TOKEN_BUDGET_EXHAUSTED, acquis annulation seulement, document lu, IDs acquis découverts, reprise demandée sans effet ; aucun enregistrement, viewer v1. | RB-27/28 ; UAT-16 reproduit ; 08:48:10/14. Morris qualifie bloquant et arrête ce test. |
| 9 | Lire Chantiers360, identifier des inspirations proportionnées, sans modification ni réalisation. | Trois références immuables, séparation MVP/hors MVP, règles testables, responsabilités UI/serveur. Aucune saturation signalée ; Nora affirme lecture seule, absence de mutation non indépendamment vérifiée. | Positif cognition/Git ; références vérifiées par ChatGPT (section 4). Activité pendant traitement non observée sur ce tour. |
| 10 | Approfondir conflits planning : règles, code, tests ; recommander approche simple, lecture seule. | Huit références exactes, chevauchement strict, contrôle serveur, index non protecteur contre concurrence, risque de check-then-insert, contrainte d'exclusion PostgreSQL ou verrou transactionnel selon DB, test d'intégration concurrent réel. Distingue tests lus/exécutés et risque/incident. Aucun épuisement signalé. Viewer documentaire et en-tête révision encore actifs malgré changement d'intention ; DRAFT non préparé/Partiel. | Excellent résultat d'investigation ; RB-29, RB-16/17 reproduits ; capture et réponse intégrale. |
| 11 | Transformer l'analyse précédente en courte note technique, références et recommandations vs décisions. | GLOBAL_TOKEN_BUDGET_EXHAUSTED, « Aucune conclusion métier fiable n'a été consolidée dans l'état d'investigation », aucun enregistrement, toujours un document affiché. DRAFT non préparé et bandeau technique. | RB-30/31 ; RB-27 reproduit ; 09:02:53/09:03:03. Arrêt recette proposé par ChatGPT et GO Morris pour consolidation/diagnostic/correctif. |

## 4. Acquis à préserver — vérification indépendante Git

Dépôt mcleland147/chantiers360, commit exact 8c398c494dd918272aab5b2653777c6c21d2e76e. ChatGPT a ouvert les références par GitHub, pas exécuté les tests.

- Tour 9 : README.md (blob 91b85b76), Compte rendu - Validation du périmètre fonctionnel.txt (19adf285), docs/07-Cahier-Recette-Metier.md (5a347938). Le cahier indique REC-EVOL-002-02 conflit affiché et bloquant (409) ; le README distingue frontend et modules backend ; le compte rendu sépare MVP et report.
- Tour 10 : evolutions/EVOL-002-planning-ouvriers.md (d153ed3a), backend/src/common/rules/planning-conflicts.rules.ts (77da06e4), backend/src/planning/planning.controller.ts (0f08d036), backend/src/planning/planning.service.ts (3bfcb630), backend/prisma/migrations/0004_worker_planning/migration.sql (f782f323), backend/src/common/rules/planning-conflicts.rules.spec.ts (94f676e3), backend/test/planning.api.spec.ts (1f518ca7), e2e/tests/recette/evol-002-planning.spec.ts (fa7c4dcf). Les comparaisons strictes, le filtrage CANCELLED, les opérations de contrôle puis écriture distinctes, l'index ordinaire et le 409 simulé sont confirmés. Aucun incident concurrent reproduit, aucune preuve exhaustive d'absence d'autre protection. Nora propose une garantie au point d'écriture, pas un choix de pile validé.
- Préserver la qualité de compréhension métier, questions proportionnées, distinction décision/hypothèse, adaptation de trajectoire, argumentation sourcée, prudence épistémique, création v1 nominale et affichage tableaux/titres/gras. Ne pas reconstruire le modèle, le fournisseur ou les propriétaires qui fonctionnent.

## 5. Registre RB-01 à RB-31 — tous OUVERTS

Gravité indicative : B = bloquant pour réception de la capacité ; H = haute ; M = amélioration/écart UX. Les IDs sont des observations de cette recette, pas 31 causes distinctes. Les correspondances UAT/CA ci-dessous sont des rattachements proposés, à confirmer lors du diagnostic. Pas de S1/P0 sécurité supplémentaire démontré par cette recette.

| ID | Tour | Constat | Attendu vérifiable | Priorité / rapprochement |
|---|---|---|---|---|
| RB-01 | 1,2,4 | Carte « Réponse Nora disponible » inutile après réponse simple. | Disparaît au terminal ; historique repliable seulement si utile. | H / UAT-01,09 CA03 |
| RB-02 | 1,2 | En cours/point animé malgré réponse. | Terminal réel synchronisé ; aucun spinner résiduel. | H / UAT-09 CA03 |
| RB-03 | 2,4,6 | Listes indentées sans puces dans conversation et visionneuse. | Rendu Markdown cohérent sur surfaces. | M / UAT-13 CA09 |
| RB-04 | 2,3 | SDK/COMPLETE et identifiant projet brut exposés. | Métadonnées techniques hors IHM nominale RECETTE. | H / UAT-03 CA03,09 |
| RB-05 | 3 | Loader de préparation statique selon Morris. | Animation fluide, état réel, reduced motion. | H / UAT-04 CA09 |
| RB-06 | 3 | Étapes 2/3 quasi instantanées, aucun rythme visuel. | Temps de présentation minimal par étape 2/3, proposé 1–1,5 s à ajuster, sans faux succès ni délai métier artificiel. | M / CA09 |
| RB-07 | 3 | Popup reste étape 3 en cours malgré réponse prête à l'accès. | Statut suit disponibilité réelle, erreur/reprise honnêtes. | H / UAT-06 CA03,09 |
| RB-08 | 3 | Pas de confirmation terminale, utilisateur attend. | État final explicite, bouton Accéder au projet maintenu ; action volontaire, pas de redirection imposée. | H / UAT-06 CA09 |
| RB-09 | 3 | Icône info ovale. | Dimensions fixes, cercle non comprimé. | M / UAT-05 CA09 |
| RB-10 | 3 | Texte trois cycles, seulement deux cartes. | Nombre/texte dérivés des cycles effectivement présentés. | M / UAT-11 CA09 |
| RB-11 | 3 | Argumentaire initial insuffisant. | Pourquoi CF puis UX, résultats utiles, contexte, alternatives si pertinentes, sans pavé. | H / UAT-07 CA01 |
| RB-12 | 3 | Rupture tutoiement/vouvoiement SAS→Travail. | Personnalité transverse, ton naturel et professionnel. | H / CA01,09 |
| RB-13 | 3 | Première réponse administrative, potentiellement préformatée. | Réponse Nora contextualisée ; origine du texte à établir ; état applicatif séparé. | H / UAT-07 CA01 |
| RB-14 | 4,6 | Deux affichages d'activité simultanés. | Une seule projection active partagée, sans doublon. | H / UAT-09 CA03 |
| RB-15 | 4,5,6 | Activité générique/répétitive, aucun objectif métier. | Opérations réellement effectuées, progression contextualisée, libellés métier ; pas de chaîne privée ni étapes fictives. | B / UAT-01,09 CA03 |
| RB-16 | 4..11 | DRAFT non préparé sur demande sans contrat. | Aucun diagnostic de contrat hors intention ; N/A n'est pas un échec. Vérifier absence d'effet parasite. | H / UAT-03,30 CA01,03,04 |
| RB-17 | 4,5,10 | Partiel à tort pour réponse aboutie sans contrat. | Statut de l'objectif courant dérivé des résultats pertinents ; échec partiel réel distinct. | H / UAT-09,30 CA03 |
| RB-18 | 5,6,7 | « Résultat Studio/applicatif » administratif et redondant. | Confirmation métier honnête, concise, dérivée de l'effet propriétaire, séparée du dialogue sans rupture. | H / CA01,09 |
| RB-19 | 5 | Panneau contexte ne reflète ni cycle actif ni question d'annulation. | État et points ouverts issus des propriétaires, actualisation. | H / UAT-08,10 CA01,10 |
| RB-20 | 6,8 | IDs acquis/outil/état technique bruts. | Titres et descriptions métier, provenances lisibles ; diagnostic séparé. | H / UAT-03,09 CA03 |
| RB-21 | 6 | Réponse disponible et DRAFT ancien visibles pendant nouveau travail. | Activité isolée par tour/travail, réinitialisation et reconnexion sans événements obsolètes. | H / CA03 |
| RB-22 | 6 | Étapes acquises sans évolution claire du statut. | Découverte, lecture, résultat, limite et terminal distincts, sans auto-validation fictive. | H / CA03 |
| RB-23 | 6 | 3 consultations, un lien générique. | Sources nommées et ouvrables, granularité honnête (consultations vs sources uniques). | H / CA03 |
| RB-24 | 7 | Intention de révision explicite non qualifiée pour écriture. | Compréhension sémantique pilote l'outil autorisé ; D4 vérifie scope, droits, version, effet. | B / UAT-15 CA01,10 |
| RB-25 | 7 | Candidat annoncé mais viewer montre v1 courante. | Candidat réel, §2 et §3 modifiés, sections 1/4 inchangées ; version/base/statut clairs avant conservation. | B / UAT-15 CA01,10 |
| RB-26 | 7 | Réponse affirme proposition, résultat applicatif aucun enregistrement. | Distinguer proposition réellement produite, conservation et refus ; ne jamais annoncer candidat absent. | H / UAT-15,30 CA01,10 |
| RB-27 | 8,11 | GLOBAL_TOKEN_BUDGET_EXHAUSTED pour reprise simple puis note courte. | Budget adaptatif réel, réutilisation et réserve restitution ; cause mesurée, pas hausse aveugle. | B / UAT-16 CA01 |
| RB-28 | 8 | Reprise après échec ne corrige pas malgré lecture v1. | Reprise utile à partir du document et de l'intention, sans répéter mutation à l'aveugle. | B / UAT-15,16 CA01,10 |
| RB-29 | 10 | Mode révision reste affiché après deux demandes Git lecture seule. | Contexte actif suit intention ; viewer peut rester ouvert volontairement sans induire un acte de révision. | H / UAT-18 CA01,09 |
| RB-30 | 11 | Analyse précédente riche, état dit aucune conclusion métier fiable consolidée. | Acquis persistés/réutilisés avec provenance ; différencier absence de checkpoint et absence de résultat métier. | B / UAT-16,19 CA01 |
| RB-31 | 11 | Note de recommandation non créée malgré analyse disponible. | Création d'un document distinct à partir d'acquis, références et décisions/hypothèses ; enregistrement vérifiable. | B / UAT-15,16 CA01,10 |

## 6. Attentes produit explicitées par Morris

**Activité LIVE** : une expérience vivante de conduite de projet, pas une carte HTML statique ni un journal développeur. Montrer ce que Nora fait (objectif, opérations réellement engagées, sources et résultats/limites), pendant le travail, avec progression lisible. Une demande simple peut rester discrète ; aucun remplissage artificiel. La référence Cursor fournie illustre la visibilité des opérations, pas le vocabulaire technique ni le raisonnement interne. Les identifiants, DRAFT absent et diagnostics sans rapport doivent rester hors expérience métier. Après réponse simple, supprimer la carte active ; après travail riche, historique utile repliable.

**SAS** : étape 1 déjà terminée si création effective ; étapes 2/3 animées et visibles avec durée minimale de présentation même si backend rapide ; aucune fausse validation ; état terminal explicite, bouton d'accès conservé, pas de redirection automatique imposée ; icônes proportionnées. La durée exacte reste un choix UX à préciser, pas un délai serveur.

**Nora et ses outils** : comprendre la demande doit permettre de choisir et mobiliser l'outil pertinent. Une couche de contrôle propriétaire est nécessaire pour droits, scope, idempotence, version et HumanDecision, pas pour reconstruire lexicalement l'intention. Hypothèse de regex/qualification concurrente formulée par Morris ; cause non démontrée. Nora doit pouvoir créer, réviser et exploiter les documents dans son périmètre sans procédures artificielles ni mots magiques. Respecter les décisions humaines réservées et la conservation explicite si requise par le contrat.

**Ressources / continuité** : ne pas repartir de zéro après une investigation réussie ; réutiliser résultats, citations, conclusions et checkpoints, proportionner les lectures et conserver assez de ressources pour restituer ou reprendre. Ne pas augmenter simplement les plafonds ni masquer l'erreur. Préserver la profondeur et la qualité des tours 9/10.

**Personnalité** : professionnelle, naturelle, continue entre SAS et Travail, contextualisée, argumentation proportionnée ; éviter réponses administratives et changement de registre inexpliqué.

## 7. Diagnostic et macro-lot correctif proposé (dans ML5, non nouveau jalon)

GO Morris du 25/11 : consolider sur Git, engager Cursor pour diagnostic des 31 écarts et préparer un macro-lot correctif. Ne pas traiter les 31 comme 31 tickets indépendants. Regroupements provisoires à confirmer par le code et les traces :

| Axe | IDs couverts | Diagnostic à établir / résultat attendu |
|---|---|---|
| A — Intention → outils → effets documentaires | 16,18,24,25,26,28,29,31 | D3 qualification, routage, production structurée, D4 propriétaire/candidat, UI. Déterminer pourquoi REVISE explicite n'est pas qualifiée et pourquoi création après analyse échoue. Traiter la chaîne entière, sans second moteur ni affaiblissement d'autorité. |
| B — Ressources et continuité cognitive | 27,28,30,31 | Reconstituer chaque segment/appel, input/output/cache, contexte et relectures, budgets et conditions d'arrêt, checkpoints et réutilisation. Pourquoi analyse réussie puis note simple suspendue ? Mesurer avant/après ; ne pas présumer cause unique. |
| C — Activité LIVE et restitution | 01,02,04,14,15,16,17,20,21,22,23 | Tracer producteurs → persistance → transport/poll → projection → composant → terminal/historique. Vérifier événements réels, scope/turn, états et absence d'affichages concurrents. |
| D — Continuité parcours / UX / personnalité | 03,05,06,07,08,09,10,11,12,13,18,19,29 | Préparation projet, état effectif terminal, synchronisation, rythme UI, trajectoire/contextes propriétaires, origine de première réponse, Markdown et fidélité Figma. |

Un seul macro-lot intégré, propriétaires et dépendances explicites ; diagnostic et correction dans un même flux si les contrats existants le permettent et le mandat l'autorise. STOP sur pivot structurant, changement de persistance/autorité, P0 non maîtrisé ou preuves insuffisantes. WEB B1 reste bloqué, hors activation ; D8 et livraison 2 hors scope. Réserves historiques UAT et 99/CA/T/Q/PF non clôturées.

### Oracles de sortie discriminants

1. Rejouer SAS simple, réponse terminale, création projet et ouverture volontaire, trajectoire initiale justifiée, RETAIN puis OPEN séparés, contexte actualisé.
2. Sur une vraie interaction Nora longue et autorisée, observer activité métier pendant travail, opérations attestées, états corrects et source lisible, aucun double affichage, ancien tour ou DRAFT parasite ; simple demande sans carte persistante.
3. Création documentaire nominale puis révision naturelle de §2/§3 sur même document : candidat réel complet, autres sections inchangées, conservation explicite donne v2 égale à la proposition et v1 historique ; pas de régénération inutile, contrôle version/ownership/refus/idempotence. Le test PG conserve-only avec candidat fixture ne suffit pas pour la production LIVE du candidat.
4. Rejouer investigation Git multi-sources puis note courte, avec conclusions et références réutilisées, sans lecture systématique redondante, pas d'épuisement anormal, aucune mutation en lecture seule, document distinct enregistré après demande explicite. Cas de budget réellement insuffisant : restitution utile et reprise bornée, pas d'effet rejoué.
5. Contrôles UX des surfaces réellement impactées, contrat Figma natif si applicable, test navigateur représentatif ; pas de campagne exhaustive avant UAT Morris. Préserver OAuth, isolation, politiques cognitives, P0 WEB bloqué, D6/D8/D9.
6. Matrice RB-01..31 → cause prouvée/hypothèse, propriétaire, correction ou dépendance, preuve, statut, réserve et retest ; rattachement UAT/CA/99 existants sans dupliquer le registre normatif. Rapport avec diff réel, traces expurgées, identités et preuves graduées.

## 8. Verdict et suite

**LIVRAISON 1 — NON ACCEPTÉE EN RECETTE.** 11 tours ; 31 écarts recensés, tous ouverts. Investigation Git et compréhension métier satisfaisantes à très satisfaisantes sur les parcours observés, création initiale observée, ouverture de cycle rapportée appliquée. Activité LIVE, révision documentaire, ressources et continuité non réceptionnables. Causes racines NON ÉTABLIES. Le cumul de 31 observations ne doit pas être assimilé à 31 défauts indépendants.

Prochaine action : diagnostic technique sur candidat exact et branche locale de travail, préparation du macro-lot correctif, puis réalisation sous mandat borné, revue ChatGPT, GO Morris sur un nouveau candidat et rejeu rapide RoomBooking. Aucune promotion, aucun push produit implicite, pas de livraison 2 avant traitement des blocages. Ce PV n'est pas une spécification exhaustive ni une décision architecturale.
