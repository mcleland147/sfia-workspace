# SFIA Studio Next — Convergence fonctionnelle intégrée : contrat CP2

| Champ | Qualification |
| --- | --- |
| **Date** | 11 novembre 2026 — Europe/Paris |
| **Statut du contenu** | **VALIDATED IN CONTENT BY MORRIS — CONTRAT GLOBAL CP2, AVEC RÉSERVES** |
| **Nature** | Contrat de convergence et d'acceptation ML4C ; **DOCUMENTED / NON IMPLÉMENTÉ / NO BUILD GO** |
| **Portée** | Capacité intégrée ML1–ML4 / D1–D9 ; S01–S07 sont des scénarios de réception, pas sept macro-lots |
| **Source produit** | main@42aa373947446a8c20694b06c559ee0da1cba580 — PR #674 |
| **Source de décision** | [Gate B accepté avec réserves](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) et [trajectoire ML4C/ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) — sur branche candidate |
| **Diagnostic T2** | sfia/review-handoff@768d32de9fc242dd88e9170ca46fa986e0eab40a ; blob 114ba0c2e36a0812bcffdd0894dfdc07cd399873 |
| **Préparation CP2** | [Qualification et causes](qualification-cp2.md) ; [design S02/S03 validé](design-correctif-verite-effets-continuite.md) |
| **Vérification** | Aucune exécution nouvelle du code, PostgreSQL, navigateur, Nora LIVE ou Git REAL pour cette validation documentaire |
| **Portée du GO** | Morris valide le **contenu du contrat**, pas une réalisation, un effet provider, une publication technique, une PR, un merge, une promotion, le Gate C ou ADOPTED |

## 1. Pourquoi ces travaux — fidélité à la vision

La raison de ML4B puis de ML4C **n'est pas une accumulation de correctifs isolés**. Après la construction des capacités ML1–ML4, la première campagne utilisateur R01–R14 et le diagnostic CP1 ont montré des acquis locaux, mais pas encore la continuité, la cohérence des états et la valeur utilisateur d'un Studio unifié. Une couverture documentaire RG/PF ou un test déterministe réussi ne prouvent pas un parcours Pilote–Nora complet.

L'objectif fondateur demeure **Pilote → Nora → capacités Studio → autorité applicable → effet observé → preuve → continuité** : une application qui permet au Pilote de conduire un projet sans administrer les moteurs et outils techniques. Nora comprend, analyse, propose et accompagne ; Studio possède les effets ; Morris/Pilote décide des arbitrages humains.

Les constats moteurs du diagnostic étaient notamment : statuts de portefeuille calculés par index, création D2 non récupérée après perte d'ACK navigateur, narration D4 contredisant un effet document réel, mémoire lexicalement limitée sans qualité cognitive globale prouvée, questions indépendantes bloquées par un pending, publication Git utilisateur incomplète et UX fonctionnelle hétérogène. Les causes ont des niveaux de preuve distincts et ne doivent pas être généralisées.

**Orientation validée :** ML4C fait converger **fonctionnement et UX nécessaire** en un résultat intégré ; ML4D réalise ensuite la convergence **UX/UI globale** et la fidélité Figma de toutes les surfaces concernées. Ni stratégie shell-first ni refonte technique générale par inertie.

## 2. Résultat utilisateur et responsabilités

À l'issue de ML4C, le Pilote doit pouvoir :

1. Accéder à ses projets et préparations, retrouver son travail et comprendre leurs états réels.
2. Exprimer une intention, travailler librement avec Nora, créer son projet et poursuivre dans le même fil.
3. Produire, consulter, réviser et retrouver des documents dont l'enregistrement est prouvé.
4. Obtenir une analyse pertinente utilisant sources, mémoire, points ouverts, décisions applicables et CKI adapté.
5. Interrompre et reprendre son travail sans doubler, oublier ou autoriser fictivement un effet.
6. Faire préparer et publier un document sur Git sous décision et permissions applicables, puis en retrouver les références vérifiées, sous GO REAL externe distinct.
7. Consulter les résultats, refus, limites et preuves sans confusion entre déclaration de Nora, effet et acceptation humaine.

**Propriétaires uniques :** D1 identité/portefeuille ; D2 sas/création ; D3 conversation/conduite de Nora ; D4 connaissances/documents ; D5 trajectoire/cycles/CKI ; D6 décisions/restrictions/HumanDecision ; D7 contrats et tentatives opérationnelles ; D8 qualification des résultats/preuves ; D9 Git et ses références/permissions. Aucun service voisin ne recrée le registre propriétaire d'un autre.

## 3. Périmètre IN / OUT

### IN — capacités déjà construites ML1–ML4

- D1–D9 sur leurs frontières **effectivement construites** : identité/session, cockpit, sas, Nora, documents, mémoire, cycles, décisions, contrats existants, qualification et Git documentaire.
- UX fonctionnelle nécessaire aux parcours, états d'erreur, refus, pending, navigation, rechargement et restitution.
- Contrats d'API, de données, d'autorité, de reprise, d'idempotence, d'observabilité et de preuves nécessaires à leur intégration.
- Tests négatifs et positifs, documentation de conception/architecture synchronisée, régression des frontières.
- Traitement des réserves X-01 à X-07 selon leur propriétaire, avec preuves et exit ; X-08 conservé en frontière.

### OUT sans décision Morris distincte

- Convergence graphique globale et fidélité Figma complète F2/G5 : **ML4D**, après réception intermédiaire de ML4C.
- Exécution technique autonome par Cursor **dans le produit cible** : ML5, pas ML4C.
- Git merge REAL : **HARD-BLOCKED**, sauf nouveau GO spécifique.
- Nouveau moteur de transaction, état, conversation, mémoire, autorisation ou preuve par défaut ; pivot schéma/architecture sans diagnostic et arbitrage.
- Exécution ou publication Git provoquée par la seule prose de Nora ; décision humaine automatisée.
- PR, merge projet, changement de main, déploiement RECETTE, STABLE, release ou ADOPTED induits par ce contrat.

## 4. Contrats d'acceptation S01–S07

Les scénarios sont **des oracles d'acceptation** d'un seul ML4C, non des micro-lots de développement.

### S01 — Entrée, cockpit et portefeuille

**Résultat :** le Pilote voit ses projets et préparations autorisés, avec des informations sincères, puis accède et revient dans le bon contexte.

- Supprimer les statuts et avancements déduits de l'index de liste ; présenter uniquement les états fournis par les propriétaires ou une indisponibilité explicite (RG-ACC-013).
- Ne jamais confondre projet Studio personnel et dépôt Git partagé.
- Distinguer session expirée, refus 403, panne technique et statut incertain ; éviter le 401 générique pour les erreurs non authentifiantes.
- Contrôler navigation profonde, rafraîchissement, retour de session, autre Pilote et sas resté OPEN.
- **Preuve :** API/PG et navigateur au même SHA ; OAuth LIVE si l'assertion nécessite le véritable fournisseur.

### S02 — Sas et création récupérable

**Référence de design approuvé :** [Vérité des effets et continuité](design-correctif-verite-effets-continuite.md).

- Création explicitement décidée, projet unique et sans démarrage automatique de cycle, CKI, Git ou Cursor.
- Perte d'ACK après commit : conserver la clé d'intention, réconcilier avant toute nouvelle mutation et ouvrir le projet **réel** autorisé.
- Préserver conversation, proposition et documents, y compris après refresh ; distinguer création confirmée et continuation D4 encore incomplète.
- Conflit, refus, erreur de session, panne technique et résultat inconnu sans faux succès.
- **Preuve :** PG idempotence, fingerprint, ownership ; test Playwright versionné D2_ACK_OBS (ancien harness T2 jetable) ; cas nominaux/négatifs et navigateur.

### S03 — Document vrai et restitution Nora

**Référence de design approuvé :** [Vérité des effets et continuité](design-correctif-verite-effets-continuite.md).

- CREATE/REVISE D4 : identifiants, version et résultat réels conservés après interruption.
- Distinguer AVAILABLE, FAILED, CONFLICT, UNKNOWN et NOT_EXECUTED.
- Harmoniser narration post-effet dans le chat et dans la continuation D2→D4 ; un seul verdict D4, ACK mission distinct, pas de message concurrent « non enregistré ».
- Ne pas réparer la narration en rejouant une écriture déjà effectuée.
- **Preuve :** PG/corrélation → message durable → API → navigateur ; Nora LIVE CREATE/REVISE sur SHA/build/lane cohérents.
- **Réserve :** la cause technique de contradiction possible D2→D4 est observée dans le code ; la cause exacte de l'ancien incident LIVE ML4-REC-08 (autre parcours) n'est **pas** prouvée sur la baseline actuelle.

### S04 — Mémoire, raisonnement, décisions et CKI

**Résultat :** Nora sélectionne les bonnes informations et comprend leur sens, leur provenance, leurs limites et leur autorité.

- Retrouver un acquis ancien après reformulation, plusieurs sujets et sessions, sans exiger la relecture de tout le transcript.
- Rechercher de manière complémentaire dans les sources effectivement autorisées si la première sélection est insuffisante.
- Distinguer fait, hypothèse, recommandation, ancienne version, décision opposable et restriction courante ; ne pas aplatir les contradictions.
- Retrouver les points ouverts et la décision actuelle plutôt qu'un simple souvenir de Nora.
- N'utiliser le CKI spécialisé qu'en fonction du cycle réellement actif ; ni gate, ni mandat, ni certification automatique.
- **Source-gap :** sélection actuelle lexical-heuristic, sans preuve suffisante de pertinence sémantique LIVE.
- **Preuve :** corpus de paraphrases et sources contradictoires/versionnées, changements de droits, décisions révisées, sessions longues ; sélection et provenance tracées + Nora LIVE + appréciation qualitative du Pilote.
- **Choix technique :** ne pas imposer un index sémantique ou un autre moteur avant mesure de l'écart et identification de la solution minimale.

### S05 — Pending, question indépendante et interruption

**Statut du détail :** contrat **fonctionnel accepté en orientation** ; moyen technique exact à discriminer avant correction.

- Distinguer mission AWAITING_PILOT_ACT / AWAITING_PILOT_AUTH, tour RUNNING, effet métier UNKNOWN, résultat terminal et intention incompatible.
- Permettre une question indépendante lorsque Studio garantit que cette demande ne contourne aucune protection ni ne déclenche une action concurrente ; différer explicitement si la sécurité ne peut être assurée.
- Conserver les clés/identifiants et l'effet initial durant l'échange ; aucun effacement sur la seule réponse Nora COMPLETE.
- Refuser un acte distinct incompatible sans le remplacer silencieusement ; réconcilier la commande durable après reconnexion ou refresh.
- Reprendre selon les propriétaires D2/D3/D5/D6 et les gardes serveur, non selon sessionStorage seul.
- **Acquis à préserver :** exclusion des tours RUNNING, protection des commandes, reprise UNKNOWN et preuve déterministe d'une question indépendante pendant une attente de D2.
- **Preuve :** UNIT/PG/BROWSER, perte ACK, décision refusée/révoquée, changement de Pilote, navigateur réouvert, question sans effet vs nouvelle mutation ; pas de nouveau moteur global.

### S06 — Publication documentaire Git gouvernée

**Résultat :** un document Studio peut être préparé, inspecté, autorisé et publié dans un dépôt Git réel **sandbox**, avec restitution des références vérifiées.

1. D4 fournit document et révision précise.
2. D9 vérifie la cible, la base/HEAD, la connexion et les permissions réelles.
3. Le Pilote inspecte le diff et le contrat d'effet.
4. D6 exige une HumanDecision applicable à la version, à la cible et au geste proposé.
5. D7/D9 déclenchent uniquement les opérations documentaires autorisées, sans modifier le code technique ni inventer un droit.
6. L'état de la branche, du commit et de la PR est relu auprès du fournisseur Git ; D8 en qualifie la portée probatoire.
7. Nora restitue le résultat et continue sans prétendre à un succès non vérifié.

**Négatifs :** permission absente/révoquée, dépôt partagé/étranger, source hostile, chemin inexistant, HEAD divergent, ACK perdu, nouvel effet non autorisé, tentative inconnue.

**Réserve obligatoire :** ML4 R12 partiel et R13/R14 NOT RUN dans la campagne historique ; tests SCRIPTED et API REAL bornés ≠ parcours USER REAL complet. Toute mutation Git externe nécessite **GO Morris REAL spécifique**, sandbox et preuve de permissions. **merge REAL OUT / HARD-BLOCKED** par défaut.

### S07 — Régression intégrée et UX fonctionnelle

**Résultat :** une seule application utilisable de bout en bout, non un ensemble de domaines locaux verts.

- Parcours ML1–ML4 avec entrées, destinations, retours, sauvegardes et navigation compréhensibles ; actions visibles réellement raccordées.
- États chargé/en cours/succès/conflit/refus/UNKNOWN/reprise accessibles et non trompeurs.
- Continuité du fil, de la bibliothèque documentaire, des décisions, de la trajectoire et des preuves effectivement disponibles.
- Non-régression des droits, frontières de projets, autorisations, idempotence, observabilité et restrictions.
- Croisement R3/Figma **sur les surfaces fonctionnelles modifiées**, sans revendiquer F2/G5 global.
- **Preuve :** API/PG, navigateur, traces et régression commune sur même SHA/build/lane ; incidents documentés sans PASS déduit d'une simple capture.

## 5. Invariants transversaux

| Contrat | Obligation |
| --- | --- |
| Vérité des données | Une information affichée a une source propriétaire identifiable ou une indisponibilité explicite |
| Vérité des effets | Succès ≠ demande ≠ ACK reçu ≠ narration Nora ; confirmation uniquement par le propriétaire réel |
| Gouvernance | HumanDecision et restrictions applicables ; contrôles au point d'effet, sans permissions héritées par supposition |
| Continuité | Identité d'intention durable, idempotence, reprise et réconciliation sans doublon |
| Sécurité | Pilot A/B, révocation, source non fiable, refus sans mutation, ressources Git partagées sans mémoire Studio partagée |
| Cognition | Source, pertinence, fraîcheur, autorité, mémoire et décision demeurent des dimensions distinctes |
| Preuves | SOURCE / DETERMINISTIC / PG / BROWSER / LIVE / REAL rattachés au SHA, build et lane réellement observés |
| Architecture | Un responsable par état et un seul chemin d'effet ; pas de moteur concurrent ni refonte non justifiée |
| UX | L'interaction fonctionnelle est incluse dans ML4C ; conformité visuelle globale en ML4D |

## 6. Organisation : un seul macro-lot, trois ensembles intégrés

**Ensemble A — Entrer, préparer, créer, retrouver (D1/D2 avec D3/D4).** Propriétaire produit : vérité du portefeuille, création et reprise, frontière session/projet, erreurs. Parcours principaux : S01/S02 et interfaces S03/S05.

**Ensemble B — Conduire, mémoriser et poursuivre (D3/D4/D5/D6).** Propriétaire produit : contexte et conduite Nora, effets documentaires, cognition, décisions et pending. Parcours : S03/S04/S05.

**Ensemble C — Produire et publier sous gouvernance (D4/D6/D7/D8/D9).** Propriétaire produit : chaîne document → diff → HumanDecision → effet Git documentaire → vérification → restitution. Parcours : S06.

**S07 est l'intégration et la régression communes des trois ensembles.** Ni trois lots administratifs, ni sept tickets correctifs indépendants. Chaque ensemble associe code, UX fonctionnelle utile, tests, documentation et preuves dans la même séquence cohérente ; l'intégrateur technique est désigné au GO distinct.

Priorité de dépendance : états/effets vrais et autorité → continuité/reprise → pertinence cognitive et décisions → publication gouvernée → réception intégrée. Regrouper les corrections qui partagent un invariant ; paralléliser uniquement si interfaces/fichiers et intégration sont maîtrisés.

## 7. Preuves de sortie et niveaux

| Scénario | Niveau proportionné attendu |
| --- | --- |
| S01 | API/PG + BROWSER, auth LIVE selon risque |
| S02 | PG idempotence + BROWSER perte ACK après commit |
| S03 | PG D4 + message persistant + BROWSER + Nora LIVE au même SHA |
| S04 | Corpus sourcé, sélection tracée + Nora LIVE + appréciation Pilote |
| S05 | UNIT/PG/BROWSER, négatifs et récupération ; LIVE si indispensable pour l'assertion |
| S06 | PG/BROWSER + Git REAL sandbox provider + Nora LIVE sous GO spécifique |
| S07 | BROWSER et API/PG transversaux, Figma ciblé si UX fonctionnelle touchée |

Le verdict par scénario distingue **DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED** avec niveau de réalisme associé ; un simple nombre de cas mappés ne remplace jamais des observations. Déclarer PASS, FAIL, NOT RUN, INCOMPLETE, KNOWN GAP explicitement. Toute réserve critique reportée a un propriétaire, une gravité, un exit et une preuve attendue.

## 8. ENV-01 — préalable bloquant aux tests mutatifs

Le handoff T2 signale un accès accidentel à la base opérateur sfia_next_dev et une possible création d'environ 25 identités de test. **Le nombre et les impacts ne sont pas inventoriés ni confirmés** ; ce n'est ni une preuve de corruption ni une autorisation de nettoyage.

Avant tout nouveau test susceptible d'écrire :
1. Inventaire **strictement read-only** des identités/objets/horodatages/rattachements concernés.
2. Qualification des conséquences et des incertitudes sans nettoyage automatique.
3. GO Morris **spécifique** avant toute suppression, réparation de données ou reset.
4. Preflight base/DSN/rôle/port/lane/secrets/session, preuve d'isolation et vérification qu'aucune base opérateur ou RECETTE n'est la cible.
5. STOP si isolation ou origine des données restent incertaines.

RECETTE protégée, STABLE NOT AVAILABLE, NO RELEASE. Git REAL et Nora LIVE ont des gates supplémentaires indépendants d'ENV-01.

## 9. Risques, dette/exit et propriétaires

| Famille | Propriétaire / traitement | Exit requis |
| --- | --- | --- |
| X-01 — Vérité états/résultats | ML4C D1/D3/D4 | Portefeuille honnête ; D4 et Nora cohérents avec preuve actuelle |
| X-02 — Mémoire et CKI | ML4C D3/D4/D5/D6 | Corpus représentatif, décisions applicables, qualité cognitive LIVE |
| X-03 — Pending et ACK | ML4C D1–D6 | Reprise sans doublon, question indépendante sûre |
| X-04 — Git utilisateur | ML4C D4/D6–D9 | E2E documentaire Git sandbox sous GO REAL ; R12–14 vérifiés dans leur portée |
| X-05 — Permissions et refus | Domaines propriétaires, intégrateur | Négatifs et absence d'effet interdit |
| X-06 — UX | ML4C fonctionnel ; ML4D global | UX utile dans ML4C, dette Figma/variantes attribuée à ML4D |
| X-07 — Erreurs/résilience | Domaines propriétaires, intégrateur | Oracles 401, restore, observabilité/streaming selon criticité, sans extrapolation |
| X-08 — Frontières | Morris | Merge REAL et ML5 OUT maintenus sans GO nouveau |
| ENV-01 — Incident DB de test | Morris pour autorité, Cursor pour investigation autorisée | Inventaire read-only et démonstration d'isolation avant tests mutatifs |

Aucune dette ne peut être créée sans propriétaire et exit ; aucune réserve critique ne peut être masquée par une retouche UX ou un PASS déterministe.

## 10. Gates et suite

**Gate préalable au lancement technique ML4C :**
- Contrat CP2 validé **en contenu par Morris**, avec réserves explicites.
- Pré-check repo/ref/branche/HEAD/base, décision Gate B et sources de code en vigueur.
- ENV-01 : inventaire et isolation conformes **avant** tests mutatifs ; aucun cleanup implicite.
- Contrat Cursor SFIA v2.6 **instancié depuis les sources Git** : cycle/profil, IN/OUT, risques/STOP, fichiers, tests, preuves, Review Pack et Review Handoff.
- Design détaillé de S05 encore à discriminer, cognition S04 évaluée avant choix d'une refonte, S06 REAL seulement sous mandat spécifique.
- GO **technique distinct**, spécifique à la construction ML4C. Une acceptation documentaire ne le vaut pas.

**Réalisation ML4C :** Cursor intervient sous mandat, sur branche candidate, dans la limite des fichiers/effets autorisés ; intégration code + tests + UX fonctionnelle + documentation ; revue ChatGPT des preuves ; aucun push projet, PR, merge, bascule RECETTE ou publication Git externe implicite.

**Réception intermédiaire ML4C :** Morris accepte, diffère ou refuse selon les parcours réellement prouvés, les défauts critiques, la sincérité des effets, l'autorité, la continuité, la cognition et la publication gouvernée. Réserves conservées et sorties assignées. **Ce n'est pas Gate C**.

**Suite arrêtée :** CP2 validé en contenu → GO technique ML4C distinct → ML4C intégré et réception intermédiaire → GO ML4D distinct → UX/UI globale et fidélité Figma → Gate C final Morris → ML5 Cursor → R6.

## 11. Statuts après validation documentaire

- **Contrat CP2 global : VALIDATED IN CONTENT BY MORRIS WITH RESERVES / DOCUMENTED.**
- **Design S02/S03 : VALIDATED IN CONTENT / NON IMPLÉMENTÉ.**
- **S01/S04/S05/S06/S07 : objectifs et critères d'acceptation validés en orientation ; décisions d'implémentation et preuves restant à établir.**
- **Incident ENV-01 : OPEN / INVENTORY NOT YET VERIFIED.**
- **ML4C BUILD GO : NOT GRANTED.**
- **ML4D BUILD GO : NOT GRANTED.**
- **GATE C : OPEN.**
- **NO PR / NO MERGE / NO RELEASE / NO ADOPTED.**

La validation porte sur le **pourquoi, le résultat, les frontières et les preuves attendues**. Elle ne valide ni un mécanisme technique encore incertain ni un effet non testé.
