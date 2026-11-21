# SFIA Studio Next — Ensemble 07
## Dossier de recette utilisateur — Projet, Travail, Trajectoire et conduite de Nora

| Champ | Valeur |
| --- | --- |
| Version | **0.2 — 21 novembre 2026** |
| Autorité de recette | **Morris — acceptation UAT du 21/11/2026 avec réserve UX unique** |
| Périmètre | **R5 / ML4D / Ensemble 07** — SAS, création, Projet, Travail, Trajectoire, CKI, Nora |
| Projet de recette | **Equip'Campus**, projet fictif |
| Statut | **MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED** |
| Nature | PV évolutif, constats, réserves et demandes de diagnostic ; document **non normatif** |
| Publication documentaire | Branche dédiée **docs/next-ensemble07-recette-20261121**, issue de **main@6e93a33d64dfeea2eab88fb7896d733b34053f97** |
| Acceptation | **ACCEPTÉE** (périmètre présenté) avec réserve UX unique Acquis/À clarifier ; **pas** de PR/merge/STABLE/ADOPTED |

> **Précédence des observations.** Le handoff technique de déploiement conclut « RECETTE AVAILABLE — MORRIS UAT REQUIRED » au moment de la mise à disposition. Les observations réelles de Morris du 21 novembre interviennent **après** ce handoff et ne modifient pas rétroactivement les tests techniques. Les captures de la conversation constituent ici les preuves visuelles disponibles ; elles ne sont pas encore archivées en binaires dans Git.

## 1. Objet, méthode et niveaux de preuve

Le scénario vise à vérifier qu'une intention suffisamment détaillée peut conduire, sans formalités excessives, à la création d'un projet, à une proposition de trajectoire, puis à une décision gouvernée d'ouverture de cycle. La campagne examine en parallèle la qualité cognitive de Nora, la continuité des états et la fidélité aux maquettes Figma.

**Lecture stricte des preuves :**
- **OBSERVÉ MORRIS** : écran, message ou comportement montré en capture et/ou relaté directement par le Pilote.
- **RAPPORTÉ CURSOR** : valeur de runtime, migration ou résultat technique consigné dans un Review Handoff, non réexécuté ici.
- **ANALYSE / HYPOTHÈSE** : lecture fonctionnelle ou cause possible à confirmer par diagnostic.
- **NON OBSERVÉ / NOT PROVEN** : absence de preuve suffisante ; ne vaut pas nécessairement preuve d'absence en base.
- **NOT RUN** : scénario non exercé au cours de cette campagne.

Les PASS métier et les échecs techniques ne sont pas inférés de la seule qualité linguistique de Nora. Une proposition ≠ un acte retenu ≠ un effet D5 vérifié.

## 2. Candidat et environnement de RECETTE

| Élément | Référence et niveau de preuve |
| --- | --- |
| Dépôt | mcleland147/sfia-workspace |
| Branche code candidate | sfia/next-ensemble07-projet-trajectoire-delivery — **locale**, non publiée selon Cursor |
| Commit candidat | **6ecdb987ee867a04ff816b699eb8870ac200db0a** — rapporté Cursor |
| Tree | **d0ad47ff515676f1c033a39030e886859f7272f7** — rapporté Cursor |
| Build servi | **armX_D1HJzN6q-4MuDpYv** — rapporté Cursor |
| URL de recette | http://127.0.0.1:3200 — utilisée par Morris |
| Service | com.sfia.studio.next.recette.ml4d-ux004 — rapporté Cursor |
| Base RECETTE | sfia_next_recette_ml4 sur port 5434 — rapporté Cursor |
| Migrations | 015 et 016 appliquées, selon Cursor |
| Versioning | NO RELEASE / Gate C OPEN / STABLE non promue |

**Particularité de l'environnement :** le handoff indique que le conteneur PostgreSQL RECETTE était absent, que Cursor l'a recréé, puis a restauré un dump du 20 novembre avant de sauvegarder à nouveau et d'appliquer 015/016. Les données modifiées après le dump source ne sont donc pas garanties récupérées. Les smoke tests E06/E07 étaient PASS selon Cursor, mais n'établissent pas l'acceptation utilisateur E07.

Handoff vérifié : [Ensemble 07 — mise à disposition RECETTE](https://github.com/mcleland147/sfia-workspace/blob/2dc3e178fd70a8d8a793e0ec863b917c50055737/sfia-review-handoff/latest-chatgpt-review.md).
Référence du gel local : [Ensemble 07 — PROJECT GIT FREEZE](https://github.com/mcleland147/sfia-workspace/blob/29277518bfd6702a7b358da43c9b0d6402e7d1a1/sfia-review-handoff/latest-chatgpt-review.md).

**Nora LIVE / déterministe :** Morris déclare travailler avec Nora LIVE ; une trace SAS visible mentionne « openai-agents-sdk-live ». Les E2E préalables ont été qualifiés en FAKE/DETERMINISTIC. Ce sont **deux périmètres différents**. L'identité effective du fournisseur et la qualification sémantique des tours de cette RECETTE seront établies, si nécessaire, depuis les traces runtime, sans supposer que les résultats E2E simulés prouvent ce comportement LIVE.

## 3. Intention du projet fictif Equip'Campus

Une organisation de formation technique souhaite centraliser les déclarations, affectations, suivis, résolutions et historiques d'incidents concernant des équipements pédagogiques, en remplacement d'échanges par e-mail, téléphone et tableurs.

**Périmètre pilote :** trois centres fictifs à Bordeaux, Nantes et Toulouse ; environ 120 équipements, 30 utilisateurs déclarants et 6 techniciens. Petite équipe projet avec notamment un développeur et deux référents métier. Objectif indicatif : démarrage opérationnel du pilote sous 12 semaines. Enveloppe indicative de 60 000 €, non validée.

**IN :** déclaration d'incident, suivi, traitement, clôture, historique, préparation des données, droits, accompagnement, indicateurs.

**OUT de la première étape :** maintenance prédictive, remplacement de la gestion des achats, application mobile native.

**Incertitudes volontairement conservées :** solution du marché ou développement spécifique, priorité des incidents, autorité de clôture, intégrations nécessaires, disponibilités réelles, calendrier exact et critères d'évaluation.

Ces éléments doivent permettre à Nora de raisonner et challenger sans présumer un budget acquis, un choix technique ou un GO de cycle.

## 4. Campagne réalisée — chronologie et verdicts

### E07-SC-01 — SAS : qualification et base suffisante

**OBSERVÉ MORRIS — SATISFAISANT SUR LE FOND.**

Nora analyse le besoin, les responsabilités, le référentiel d'équipements, les risques d'adoption, la confidentialité, les métriques du pilote et les contraintes de délai. Elle reformule le résultat, le premier périmètre et quatre questions encore ouvertes (échéance, existant, capacité, charge/criticité).

L'écran présente « Vous avez une base pour démarrer », un aperçu cohérent et le bouton « Créer le projet ». Les quatre questions ne bloquent pas la création.

**Réserve :** la pop-up et la géométrie des surfaces ne respectent pas suffisamment les maquettes UX validées.

### E07-SC-02 — Création explicite et transition

**OBSERVÉ MORRIS — CRÉATION ABOUTIE ; TRANSITION PARTIELLEMENT OBSERVÉE.**

Après clic sur « Créer le projet », une pop-up expose :
1. « Projet créé » ;
2. « Identification des cycles pertinents » ;
3. « Proposition ou clarification ».

Le projet Equip'Campus est accessible ensuite. Morris n'a pas observé attentivement le passage 2→3 ni la navigation durant l'analyse ; ne pas considérer l'animation, l'auto-actualisation et la reprise comme validées. Un nouveau projet pourra servir à cette recette spécifique.

### E07-SC-03 — Travail : continuité du fil et première restitution

**OBSERVÉ MORRIS — PARTIEL.**

Le contenu du SAS est retrouvé dans Travail ; le compositeur est utilisable après la restitution. Nora fournit une proposition initiale : **Cadrage → Conception fonctionnelle → Conception UX**, présentée comme une direction non retenue avec ouverture distincte du premier cycle.

**Écart important :** un message attribué à Nora, « Suite de mission », expose des identifiants et statuts techniques (projectId, status=COMPLETED, clientIntentKey, restitution=DELIVERED, références d'étape). Ces données n'ont pas leur place dans la conversation métier du Pilote. Ne pas confondre trace d'activité Studio et prise de parole cognitive Nora.

### E07-SC-04 — Trajectoire initiale et CKI avant cycle

**OBSERVÉ MORRIS — FONCTIONNELLEMENT PLAUSIBLE / UX NON CONFORME.**

Trajectoire affiche initialement trois cycles successifs envisagés : **Cadrage, Conception fonctionnelle, Conception UX**. Il ne s'agit pas de trois options concurrentes et aucun cycle n'est encore ouvert.

L'écran « CKI et méthode » indique « Aucun CKI principal actif » et « Aucune méthode retenue ». En l'absence de cycle effectif, **ces états sont cohérents** et ne doivent pas être corrigés artificiellement.

**Réserve UX :** dimensions des cartes et du grand conteneur, manques de séparateurs, hiérarchie et espacements, position du CTA « Examiner avec Nora dans Travail », libellés/statuts attendus.

### E07-SC-05 — Vue Projet sans cycle actif

**OBSERVÉ MORRIS — FONCTIONNELLEMENT PLAUSIBLE / UX NON CONFORME.**

L'écran Projet annonce « Aucun cycle en cours ». Dans Activité du projet : **1 sujet ouvert**, **0 décisions applicables**, **0 documents en cours**. Le sujet « Cadrage initial d'Equip'Campus » est affiché ; son contenu interne n'a pas été testé.

**Réserve UX :** carte d'état trop compacte et sans séparateur entre les deux explications ; trois cartes d'activité insuffisamment conformes aux dimensions, séparations internes et espaces du Figma validé.

### E07-SC-06 — Challenge du raisonnement et taxonomie des cycles

**OBSERVÉ MORRIS — BON RAISONNEMENT MÉTIER, ÉCART DE COHÉRENCE PRODUIT.**

Invitée à articuler les points de passage du SAS avec ses cycles, Nora propose une variante métier à quatre ensembles :
1. Cadrage métier et du pilote ;
2. Exploration des solutions et conception ciblée ;
3. Réalisation et mise en service du pilote ;
4. Expérimentation et évaluation.

La réponse mobilise convenablement les contraintes, les besoins et les arbitrages. **Mais ces quatre intitulés ne correspondent pas tels quels aux types de cycles reconnus par Studio.** Des phases/activités métier ont été présentées comme cycles envisagés.

Après objection de Morris, Nora reconnaît l'écart et revient aux cycles reconnus : Cadrage, Conception fonctionnelle, UX/UI. Elle distingue mieux activités métier, cycles et guidance CKI.

**Verdict borné :** capacité de challenge et d'autocorrection satisfaisante ; fiabilité spontanée de la taxonomie sous challenge non acquise.

Nora indique dans cet échange ne pas disposer du catalogue complet des cycles/CKI. Ce constat déclaratif justifie une inspection du contexte D3 réellement fourni ; il ne prouve pas à lui seul l'absence du catalogue au runtime. La proposition initiale UX vise un **horizon indicatif de 1 à 3 cycles**, non un plafond absolu de cycles sur tout le projet.

### E07-SC-07 — Orientation retenue et consentement historique

**OBSERVÉ MORRIS — ÉTAT RETENU VISUEL, ORIGINE À CORRÉLER.**

Une capture de Travail montre un accord antérieur du Pilote : **« ok ça me va »**. Nora l'interprète comme un accord sur la direction initiale, distinct d'une ouverture. L'ancien soupçon d'orientation retenue sans aucun accord exprimé est donc **retiré**.

Après rafraîchissement, Trajectoire affiche « Orientation retenue — aucun cycle n'est encore ouvert » avec la séquence Cadrage → Conception fonctionnelle → Conception UX.

Une **orientation retenue sans cycle actif est un état métier valide**. En revanche, la chronologie exacte de la persistance et de l'actualisation UI reste à diagnostiquer. La variante visuelle compacte n'est pas reconnue par Morris comme la représentation Figma attendue.

### E07-SC-08 — GO naturel explicite d'ouverture CADRAGE

**OBSERVÉ MORRIS — RÉSULTAT UTILISATEUR NON ABOUTI.**

Message du Pilote : confirmation de l'orientation, puis **« Je te donne maintenant mon accord explicite pour ouvrir le premier cycle de cadrage »**.

Nora répond que le GO est explicite, identifie correctement Equip'Campus et le cycle de cadrage, et précise qu'aucune confirmation supplémentaire n'est nécessaire. Elle ajoute cependant : **« l'ouverture effective reste à confirmer par Studio »** et poursuit des recommandations cognitives.

Les captures de contrôle montrent :
- Trajectoire : **orientation retenue, aucun cycle ouvert** ;
- CKI : **aucun CKI principal actif** ;
- Travail : **aucune restitution d'ouverture effectivement confirmée** ;
- après refresh : affichage modifié de Trajectoire, mais toujours sans cycle actif.

**Conclusion de recette : GO RECOGNIZED — OPENING NOT PROVEN — END-TO-END USER OUTCOME INCOMPLETE.**

L'absence de cycle visible ne détermine pas seule si OPEN_CYCLE a été non qualifié, non tenté, rejeté, en conflit, bloqué, appliqué mais non projeté, ou encore inconnu. Vérifier les commandes et données avant toute affirmation de cause racine. Ne pas renvoyer arbitrairement le même GO pendant l'investigation.

## 5. Registre des écarts et réserves

Les priorités sont proposées pour le triage, sans constituer des P0 techniques établis.

| Réf. | Surface / thème | Écart ou contrôle manquant | Priorité | État |
| --- | --- | --- | --- | --- |
| **E07-UAT-01** | Pop-up SAS | Dimensions, espacement, hiérarchie, layout des étapes peu fidèles à Figma | Moyenne | Ouvert UX |
| **E07-UAT-02** | Travail | Message de mission technique visible comme réponse de Nora | **Haute** | Ouvert |
| **E07-UAT-03** | Trajectoire initiale | Conteneur/cartes trop compacts, séparateurs, statut, alignements et CTA divergents | Moyenne | Ouvert UX |
| **E07-UAT-04** | Projet état vide | Séparateur et espacement entre explications manquants | Moyenne | Ouvert UX |
| **E07-UAT-05** | Activité Projet | Hiérarchie compteurs/titres/détails/liens et séparations visuelles divergentes | Moyenne | Ouvert UX |
| **E07-UAT-06** | SAS→Projet | Justification initiale insuffisante du passage des points métier aux cycles | Moyenne | Ouvert fonctionnel |
| **E07-UAT-07** | Création | Transition/popup, reprise et UI sans refresh insuffisamment observées | À qualifier | NOT RUN complet |
| **E07-UAT-08** | Taxonomie | Quatre phases métier proposées comme cycles ; correction après objection | **Haute** | Ouvert cognitif |
| **E07-UAT-09** | Contexte D3 | Nora déclare ne pas avoir le catalogue complet des cycles/CKI | **Haute** | Diagnostic |
| **E07-UAT-10** | OPEN_CYCLE | GO explicite sans cycle ACTIVE observable | **Bloquant pour ce parcours** | Diagnostic prioritaire |
| **E07-UAT-11** | Post-effet | Nora ne restitue pas le statut gouverné vérifié ni la suite post-ouverture | **Bloquant pour ce parcours** | Diagnostic prioritaire |
| **E07-UAT-12** | Rafraîchissement | Orientation retenue visible après refresh, synchronisation immédiate non vérifiée | Haute | Diagnostic |
| **E07-UAT-13** | Trajectoire retenue sans cycle | Variante compacte, fidélité/état Figma à clarifier | Moyenne | Ouvert UX |
| **E07-UAT-14** | Mode Nora | Déclaration LIVE et trace sdk-live, sans corrélation par tour aux preuves serveur | À qualifier | Provenance runtime |

**Écart retiré :** supposition d'une orientation retenue sans accord historique. La capture montrant « ok ça me va » modifie ce constat.

## 6. Analyse fonctionnelle transverse — boucle gouvernée

La vision validée distingue **Pilote décide**, **Nora comprend et restitue**, **D6 qualifie l'autorité**, **D5 applique/persiste l'état**. Le contrat n'impose pas de deuxième confirmation rituelle lorsqu'un GO suffisamment clair a déjà été émis.

**Chaîne attendue :**
1. Pilote exprime le GO en langage naturel.
2. Nora identifie une intention qualifiée, la cible et la portée.
3. Studio/D6 vérifie auteur, restrictions, autorité et état courant.
4. Studio/D5 applique ou refuse l'opération, conserve le résultat durable.
5. Le résultat effectif est récupéré/reconstitué de façon fiable après toute interruption.
6. Nora restitue en **langage métier** un succès vérifié, un refus, un conflit ou un état incertain ; elle propose la suite utile.
7. Projet, Travail, Trajectoire et CKI affichent des états cohérents, sans refresh manuel exigé pour constater un effet réussi.

La restitution post-effet doit être garantie **fonctionnellement**, sans imposer une deuxième invocation LLM si une autre solution respecte honnêteté, continuité et qualité métier. **Ne pas créer de moteur de conversation, de décisions ni de projection concurrent.**

Invariants :
- GO compris ≠ commande tentée ≠ commande appliquée ≠ cycle ACTIVE.
- D5 est seul propriétaire de l'état de cycle ; D6 de l'autorité ; D3 de la conduite et restitution.
- Un seul cycle ACTIVE par projet.
- CKI principal seulement lorsqu'un cycle reconnu a été effectivement ouvert.
- Une décision « retenue » peut exister sans cycle actif.
- Rejeu, retry et refresh ne créent pas de second effet ni de faux statut.
- Nora ne confirme jamais un effet sur la seule base de ses propres paroles.

## 7. Fidélité Figma — remarques Morris

Les écarts signalés concernent la **géométrie et le contrat visuel**, pas seulement des préférences de style : largeur du contenu principal, gabarits des cartes, séparateurs horizontaux, padding, gaps, alignements, ordre des informations, hiérarchie des titres et CTA.

Références de revue :
- SAS 06 — pop-up : [Figma node 1022:112](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112).
- Trajectoire 09.11 : [Figma node 1034:505](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1034-505).
- Projet 09.06 : [Figma node 999:261](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=999-261).
- Travail : référence de conception 05.17, à ouvrir par identifiant exact dans les sources du projet.

**Questions de diagnostic :** les frames sont-ils structurés en vrais calques/Auto Layout ? Cursor lit-il le contexte de design structuré (MCP Figma) ou seulement des captures ? Les écarts sont-ils mesurés à viewport identique ? Ne pas imposer de pixel-perfect à partir de captures seules sans accès aux propriétés réelles.

**Aucune modification du design ou du code n'est décidée par cette section.**

## 8. Diagnostic Cursor demandé avant correction

**DIAG-01 — Tour GO / commande d'ouverture :** retrouver le projet et le message utilisateur durable (identifiants depuis la DB, sans divulgation inutile), intention sémantique et son schéma, opération qualifiée ou non, passage D6, commandes D5, décision, effets et statut APPLIED/ALREADY_APPLIED/REJECTED/CONFLICT/UNKNOWN, cycle et CKI réels. Établir l'endroit exact d'interruption ou de refus.

**DIAG-02 — Ordonnancement et restitution :** identifier chronologiquement l'exécution et la réponse Nora. Déterminer si Nora a répondu avant le résultat D5, si elle a eu accès au statut effectif et pourquoi l'accusé métier post-effet est absent. Examiner la reprise/idempotence sans appeler un second moteur.

**DIAG-03 — Synchronisation :** rapprocher D5 persistant, projections API, cache/client, navigation et refresh. Vérifier le moment de rétention de l'orientation sans déduire une ouverture d'un état RETAINED.

**DIAG-04 — Catalogue/CKI :** identifier le contexte de cycle effectivement disponible pour Nora et l'origine de l'affirmation d'indisponibilité du catalogue. Respecter la taxonomie du produit tout en préservant la liberté de raisonnement métier ; ne pas injecter les 15 fiches intégrales à chaque tour.

**DIAG-05 — Provenance LIVE :** vérifier configuration et traces propres aux tours Equip'Campus (fournisseur, éventuelles fixtures, résultat de qualification), distinguer LIVE réellement observé des preuves E2E déterministes. Ne jamais exposer des secrets.

**DIAG-06 — Géométrie Figma :** auditer 09.06 et 09.11 (plus SAS si utile), source structurée vs image et mesure des écarts de taille, gaps, paddings, alignements, séparateurs et CTA. Lecture seule ; distinguer maquette mal structurée, consommation incomplète ou CSS divergent.

**Sortie attendue du diagnostic :** observations vérifiables, causes racines prouvées ou NON OBSERVÉ, frontières impactées, sévérité, conditions d'exit, propositions de corrections groupables en macro-lot ; aucune correction ou mutation RECETTE sous ce mandat.

## 9. Scénarios restant à recetter

| Parcours | Statut |
| --- | --- |
| Nouvelle création — observer popup 1→2→3 et accès direct au projet | NOT RUN complet |
| Première restitution sans refresh et absence de doublon | PARTIAL |
| OPEN_CYCLE naturel appliqué jusqu'à ACTIVE | **NOT PROVEN** |
| CKI Cadrage principal effectivement disponible après ouverture | NOT PROVEN |
| Projet/Trajectoire/Travail synchronisés sur ouverture | NOT PROVEN |
| Conduite cognitive et CKI durant CADRAGE | NOT RUN |
| Progression/maturité et statut du cycle | NOT RUN |
| CLOSE gouverné et bilan | NOT RUN |
| Réorientation / transition vers cycle suivant | NOT RUN |
| Reprise après interruption / refresh sans nouvel effet | NOT RUN |
| Alignement Figma après correction | NON REQUALIFIÉ |

## 10. Réserves héritées et limites de l'acceptation

- FIX-03 : réconciliation contrôlée prouvée, autonomie du processus non démontrée.
- Clôture conversationnelle navigateur : NOT PROVEN dans la campagne technique précédente.
- Nora LIVE : des échanges utilisateur sont observés, mais la qualification LIVE globale n'est pas établie.
- Rendu Figma : non accepté dans cette campagne.
- Données RECETTE : restauration du dump du 20 novembre, delta post-dump non garanti.
- Absence de preuve directe des traces internes après GO : les causes sont à instruire avant correctifs.

**Verdict de sortie provisoire :**

**ENSEMBLE 07 — MORRIS UAT IN PROGRESS — FUNCTIONAL GAPS OBSERVED — DIAGNOSIS REQUIRED.**

Morris n'a pas accepté l'Ensemble 07, n'a pas autorisé de correctifs et n'a pas décidé de PR, merge, Gate C, release, STABLE ou ADOPTED. La prochaine action prévue est un **diagnostic transversal Cursor en lecture seule**, puis arbitrage Morris sur le macro-lot correctif.

## 11. Références / traçabilité

Sources de gouvernance et conception :
- [SEF](../governance/SEF.md), [Roadmap](../governance/roadmap.md), décisions ML4D applicables.
- [Nora — conduite gouvernée](../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md).
- [D6 — décisions](../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md).
- [D5 — trajectoire](../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md).
- [Contrat fonctionnel/UX Ensemble 07](https://github.com/mcleland147/sfia-workspace/blob/docs/next-ensemble07-r2-cursor-contract-20261120/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md).
- [Review Pack E07 RECETTE](https://github.com/mcleland147/sfia-workspace/blob/2dc3e178fd70a8d8a793e0ec863b917c50055737/sfia-review-handoff/latest-chatgpt-review.md).

**Preuves utilisateur :** copies d'écran et réponses Nora/Pilote de la campagne conversationnelle du **21 novembre 2026** : SAS, création, Travail, Projet, Trajectoire, CKI, accord « ok ça me va », GO explicite et rafraîchissement. Les images ne sont **pas** déposées en pièce binaire Git par ce PV.

**Statut des sources Git :** main consultée à **6e93a33d64dfeea2eab88fb7896d733b34053f97** ; candidat produit E07 local non mergé ; présent PV documentaire indépendant.

## 12. Décision Morris — 21/11/2026 (acceptation avec réserve unique)

**Décision Morris du 21/11/2026 :**

> Ensemble 07 accepté en recette utilisateur, avec réserve UX unique concernant la répartition 50/50 des panneaux Acquis identifiés et À clarifier dans Trajectoire. Les autres éléments présentés sont acceptés. La levée de cette réserve nécessite la correction, sa preuve F2 et sa livraison en RECETTE.

### Levée technique de la réserve (Cursor — même journée)

| Champ | Valeur |
| --- | --- |
| Correctif | Conteneur commun `trajectory-cycle-knowledge-row` : `minmax(0,640fr) minmax(0,646fr)` + gap 24 · `min-w-0` · wrap |
| Fichier propriétaire | `web/src/components/figma/TrajectoryBoard.tsx` |
| Preuves F2 | `.tmp-sfia-review/ensemble07-acquis-panels-fix/` — 09.02 / 09.09 @ 1680×970 · Δ≤2 CSS px |
| Mesures typiques | acquis **639** · clarifier **645** · gap **24** · h **157** |
| Candidat code | `5ad8fa57e4d529726244ddfae394074f5ea65432` (runtime RECETTE / SFIA_SOURCE_SHA) |
| RECETTE | http://127.0.0.1:3200 · BUILD `BtZP6qDx5oAw8jwPQSEhc` · SHA runtime `5ad8fa57` · LaunchAgent ml4d-ux004 |
| Distinction | Acceptation utilisateur **déjà donnée** ; la présente ligne constate seulement la **levée technique** de la réserve UX |

### Réserves historiques hors correction (non rouvertes)

Les réserves UAT historiques (E07-UAT-01…14, FIX-03 autonomie, Nora LIVE globale, SAS06 modal PARTIAL, etc.) restent **identifiées** et ne sont pas traitées par ce correctif. Elles n'empêchent pas l'acceptation Morris du périmètre UX présenté le 21/11, sous la réserve unique désormais levée techniquement.

**Verdict documentaire :** `ENSEMBLE 07 — MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED — READY FOR GIT INTEGRATION REVIEW` (sous réserve SHA/build RECETTE consignés dans le Review Pack du cycle).

**Historique :** v0.1 — consolidation initiale des constats Equip'Campus (21/11/2026). · v0.2 — acceptation Morris + levée technique réserve Acquis/À clarifier (21/11/2026).
