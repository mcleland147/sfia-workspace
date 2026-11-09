# SFIA Studio Next — ML4 « Collaborer et publier avec Git »
## Restitution progressive de RECETTE utilisateur R01–R14 et dossier d'anomalies D1/D2/D3/D4/D6/D7/D8/D9

| Champ | Qualification |
|---|---|
| Ouverture du registre | 2026-11-09 (Europe/Paris) |
| Nature | **D0 — registre factuel de RECETTE et analyse comparative, non normatif, évolutif** ; reprend la typologie du dossier ML3 `recette-ml3-rct02-anomalies.md` |
| Produit / environnement | SFIA Studio Next — RECETTE `http://127.0.0.1:3200`, projet fictif **CampusFlow**, compte Pilote `mcleland147` ; sandbox GitHub `mcleland147/chantiers360` |
| Référentiel d'acceptation | `construction/integration-git/recette-ml4-historique-et-scenarios-e2e.md` (R01–R14) et `construction/integration-git/matrice-acceptation.md` (`ML4-AT-01` à `ML4-AT-22`) |
| Git — `main` vérifié en lecture | `mcleland147/sfia-workspace@6667a43858a5421e391b7441246536daad148bd6` au contrôle de la session |
| Product ML4 distant | `feat/next-git-collaboration-20261108@51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` au contrôle historique |
| Runtime RECETTE rapporté | candidat `974b0030a94469bef05496151792e8c35a9a83e9`, tree `6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357`, build `RzpCuGMK6SnwfucphK7Qa` ; identité du runtime issue du handoff Cursor, **non revalidée indépendamment sur chaque capture** |
| Handoff environnement | `sfia/review-handoff@b70331129385a4996d9202863fa060d9b850242c`, `TEST_BOUNDARY` restauré, Nora LIVE smoke `UNKNOWN / PROVIDER_ERROR` initial |
| Git local, staged, untracked, services présents | **NON OBSERVÉS directement** ; aucune conclusion sur l'état du Mac hors observations utilisateur et handoffs |
| Statut global | **RECETTE EN COURS — R01, R02, R03 réalisés avec réserves ; R04–R14 NON EXÉCUTÉS ; ML4 NON CLOS ; R6/STABLE/ADOPTED NON PRÉSUMÉS** |
| Autorité | Morris conduit la RECETTE et valide les arbitrages ; ChatGPT compare les réponses de Nora, trace les constats, qualifie les preuves ; aucune publication Git projet autorisée par ce document |

> **Contrat de lecture.** `PASS` désigne uniquement la portion réellement observée. Capture d'écran, retour Morris, message `NORA COMPLETE`, réponse d'API, handoff Cursor et Git distant sont des preuves **différentes**. Une hypothèse de cause n'est pas une preuve. Les marqueurs UI `REAL`, `CONNECTED` ou `COMPLETE` ne suffisent pas, seuls, à certifier tout effet externe ou la qualité cognitive globale. Ce registre ne constitue ni une décision D6 dans Studio, ni un GO Git, ni un verdict de sortie ML4.

## 1. Résultat utilisateur et conclusion provisoire

### 1.1 Vision et résultat recherchés

Le Pilote doit pouvoir démarrer un projet et dialoguer avec Nora **sans connexion GitHub** ; autoriser ensuite GitHub volontairement, choisir les dépôts, rattacher une source au projet, permettre à Nora de lire des références Git avec provenance, capitaliser dans D4 puis préparer et publier des documents sous contrôle d'autorité explicite. L'identité Studio, l'autorisation utilisateur GitHub, l'installation GitHub App, le droit effectif sur les dépôts et le rattachement au projet ne constituent pas une permission unique. Les opérations Git ne s'autorisent pas mutuellement : lecture, préparation, commit, PR et merge ont des preuves et gates distincts.

### 1.2 Appréciation qualitative de la première séquence

**Acquis observés.** CampusFlow a été préparé sans GitHub, avec trois échanges cognitifs `NORA COMPLETE` jugés pertinents par comparaison ChatGPT ; une proposition inspectable a été enregistrée (révision de création **2**), puis le projet a été créé par geste explicite. La conversation du sas a été retrouvée dans l'espace projet et les rafraîchissements ont conservé les états vérifiés. Le consentement GitHub a abouti à un statut API `CONNECTED` sur la GitHub App RECETTE et au dépôt autorisé `chantiers360`. Le rattachement de ce dépôt à CampusFlow a été affiché et Morris en a confirmé la persistance après rechargement.

**Limites et écarts.** Le sas actuel diffère sensiblement de la conception Figma ; la constitution de proposition s'appuie sur un formulaire et la copie longue du dernier texte de Nora, avec des marqueurs Markdown visibles et **aucun point ouvert capitalisé** malgré les incertitudes formulées. Après l'OAuth GitHub, la page Intégrations a momentanément stagné sur « Chargement du statut d'intégration… », et une navigation a affiché `Invalid origin` sur Connexion Studio ; les parcours se sont ensuite rétablis sans correction technique connue. Ces symptômes ne démontrent pas une perte durable de session ou un échec OAuth.

**État provisoire.** Trois scénarios fonctionnels franchis avec réserves. Les capacités discriminantes Git (lecture sourcée Nora, révisions D4, refus d'écriture, publication réelle gouvernée et preuve D8) **ne sont pas encore testées**. Aucun verdict global de ML4 ne doit être inféré.

### 1.3 Périmètre de preuve et comptage

- **R01 — PASS fonctionnel borné** : sas, Nora, proposition, création explicite, continuité et persistance ; réserves UX/D4.
- **R02 — PASS avec réserve d'incident intermittent** : consentement GitHub RECETTE, `CONNECTED` API puis affichage UI connecté ; l'incident de chargement et `Invalid origin` reste **OPEN**, faute de diagnostic/régression ciblée.
- **R03 — PASS sur rattachement et persistance du dépôt autorisé** : affichage de `chantiers360` dans CampusFlow après action et refresh. Le scénario négatif « organisation en attente » et la vérification multi-identité ne sont **pas** exécutés.
- **R04–R14 — NOT RUN** ; la phase B d'écriture Git REAL exige un **GO Morris distinct**. `ML4-AT-13` merge REAL demeure **KNOWN GAP / HARD-BLOCKED** selon le cahier.
- Les captures de la conversation utilisateur du 09/11/2026 ne sont **pas versées dans le dépôt Git** ; leurs faits saillants sont décrits ici. Les statuts post-refresh proviennent des confirmations explicites de Morris.
- Les conclusions cognitives sont un **jugement comparatif ChatGPT**, utile à l'évaluation, pas un oracle absolu ni un benchmark chiffré.

## 2. Chronologie synthétique des scénarios réalisés

| Scénario | Manipulation / situation | Résultat observé et preuve | Verdict borné | Écart / réserve |
|---|---|---|---|---|
| **R01-A** | Ouverture sas et intention CampusFlow sans GitHub | Écran « Clarifions votre intention », projet « Non créé » ; premier essai `NORA FAILED` dû à `SFIA_COG_PROFILE_TYPE` absent | **FAIL initial, corrigé config** | `ML4-REC-05` profil TEST_BOUNDARY non reconduit |
| **R01-B** | Restauration profil hors Git via Cursor | `TEST_BOUNDARY` résolu, même SHA/build ; smoke Cursor LIVE `PROVIDER_ERROR/UNKNOWN` ; essai utilisateur suivant `NORA COMPLETE` | **PARTIAL pour la preuve fournisseur instrumentée** | `ML4-REC-06` historique non résolu, pas de défaut actuel établi |
| **R01-C** | Premier échange de cadrage CampusFlow | Nora expose étapes, questions utiles et alternatives au sur-mesure ; ne crée aucun projet | **PASS cognitif ciblé** | Réserve `TEST_BOUNDARY` opérationnel |
| **R01-D** | Deuxième échange, M365 et 2–3 conflits estimés/semaine | Nora réutilise correctement le contexte, priorise les causes des réservations ambiguës, questionne confirmation et règles | **PASS cognitif ciblé** | Validation terrain et chiffres restent hypothétiques |
| **R01-E** | Troisième échange, incident de salle Atlas | Nora distingue faits, causes possibles, vérification Exchange et options ; propose un périmètre et les prochaines actions | **PASS cognitif ciblé** | Document D4 non créé par cette seule réponse |
| **R01-F** | « Constituer une proposition » et reprendre le dernier message Nora | Formulaire initial vide ; nom CampusFlow saisi ; long texte intégral copié ; proposition enregistrée **révision 2** ; « Aucun point ouvert capitalisé » | **PASS sauvegarde / écarts UX et de structuration** | `ML4-REC-01` à `03` |
| **R01-G** | Geste explicite « Créer le projet », ouvrir puis actualiser | Portefeuille : **01 projet** actif CampusFlow et **02 préparations** ouvertes ; projet réouvert, conversation du sas visible ; Morris confirme la persistance | **PASS fonctionnel** | Git pas encore obligatoire, conforme |
| **R02-A** | Intégrations avant OAuth | « GitHub n'est pas connecté », aucun dépôt autorisé à l'écran, Studio utilisable | **PASS état initial** | Aucune autorisation déduite du login Studio |
| **R02-B** | « Configurer GitHub » puis consentement | GitHub présente `sfia-studio-next-recette`, compte `mcleland147`, retour vers `http://127.0.0.1:3200` ; autorisation accordée | **PASS parcours OAuth observé** | État UI transitoirement incohérent |
| **R02-C** | Retour OAuth et refresh répétés | Page bloquée « Chargement du statut d'intégration… », bandeau « GitHub n'est pas connecté » ; API `/api/integrations/status` retournait pourtant `providerMode=REAL`, `status=CONNECTED`, `userOAuthConfigured=true`, dépôt `chantiers360` `ACTIVE` | **PASS API / FAIL transitoire UI** | `ML4-REC-04` |
| **R02-D** | Navigation vers Connexion puis portefeuille direct | Affichage `Invalid origin` sur Connexion ; accès direct `/portfolio` réussi avec identité Studio et CampusFlow ; Intégrations affiche ensuite correctement GitHub connecté et `chantiers360` | **PASS final avec réserve** | Cause `Invalid origin` non prouvée, incident non reproduit durablement |
| **R03-A** | Accès « Sources Git » de CampusFlow | « Aucune source rattachée » et action « Rattacher mcleland147/chantiers360 », aucun autre dépôt visible dans cette vue | **PASS découverte bornée** | Inventaire exhaustif de droits NON PROUVÉ |
| **R03-B** | Rattachement puis actualisation | `mcleland147/chantiers360` visible dans « Sources projet » et sélectionné dans « Dépôt rattaché » ; Morris confirme la persistance après `Cmd+R` | **PASS rattachement/persistance** | Aucune lecture Nora, aucun effet distant Git prouvés |

> Chronologie fonctionnelle issue de la session utilisateur du 09/11/2026, **sans horodatage transactionnel autonome par sous-étape**. L'ordre des captures et les commentaires Morris constituent la référence de cette campagne.

## 3. Registre des écarts et réserves — synthèse

| ID | Constat | Gravité proposée | Domaine / responsabilité | Statut et niveau de cause |
|---|---|---|---|---|
| **ML4-REC-01** | Écart significatif du sas/proposition entre Figma et runtime : proposition guidée visuellement vs formulaire manuel et inspection tardive | **Importante UX/produit** | D2/D3, UI, convergence R3 | **OPEN — écart BROWSER observé ; traitement envisagé après ML4, selon décision Morris** |
| **ML4-REC-02** | Reprise du dernier message Nora = copie très longue en résumé, marqueurs `##` et `**` affichés tels quels | **Moyenne UX/qualité de restitution** | D2/D3, rendu et synthèse de proposition | **OPEN — comportement UI observé ; contrat exact à confronter à Figma/spec** |
| **ML4-REC-03** | « Aucun point ouvert capitalisé » malgré des hypothèses/questions explicitement formulées par Nora | **À qualifier produit/D4** | D3/D4/D2, distinction message vs capitalisation | **OPEN — absence affichée constatée ; automaticité non présumée dans le contrat** |
| **ML4-REC-04** | Après OAuth, chargement de statut bloqué, bandeau déconnecté alors que l'API répond `CONNECTED`, puis `Invalid origin` sur Connexion ; état redevenu sain | **Majeure si reproductible, intermittente observée** | D1/UI Intégrations/Better Auth/origines | **OPEN — symptômes BROWSER/API prouvés, cause NON DÉMONTRÉE** |
| **ML4-REC-05** | Profil `SFIA_COG_PROFILE_TYPE` absent à la première recette ; restauration `TEST_BOUNDARY` nécessaire | **Blocage initial levé / dette opérationnelle ouverte** | D3, ENV-01, configuration RECETTE | **Configuration RESTORED ; profil opérationnel dédié RECETTE OPEN** |
| **ML4-REC-06** | Smoke LIVE Cursor après restauration : `PROVIDER_ERROR / UNKNOWN`, contact fournisseur `UNCERTAIN` ; conversation Morris ultérieure `COMPLETE` | **Réserve de preuve / diagnostic** | D3/adaptateur fournisseur/observabilité | **OPEN uniquement sur diagnostic historique ; échec non déclaré persistant** |

**Règle de consolidation :** ne pas lancer six correctifs indépendants. Les écarts `01–03` concernent l'expérience de préparation et la qualité de transformation conversation → proposition/D4. `04` concerne la stabilité de la chaîne OAuth/session/UI. `05–06` concernent l'environnement cognitif et les preuves LIVE. Les travaux de correction seront regroupés selon les frontières réelles et les gates Morris, sans bloquer les tests indépendants.

## 4. Fiches d'observation détaillées

### ML4-REC-01 — Convergence UX du sas/proposition

**Séquence observée.** Sur Figma, l'aperçu de la proposition est synthétique et structuré (intention, résultat visé, points ouverts), intégré au dialogue. Sur RECETTE, après plusieurs réponses pertinentes de Nora, le clic « Constituer une proposition » présente des champs manuels vides (nom, résumé), un bouton de reprise du dernier message et une étape distincte d'enregistrement.

**Attendu produit à requalifier.** Fluidité de la préparation et transformation explicite de la compréhension de Nora en proposition inspectable, sans prétendre à une création implicite du projet. Le maquettage Figma est une référence de conception ; **le degré d'automatisation exact doit être relu dans le contrat**, non inventé.

**Impact.** Travail de reconstitution pour le Pilote, divergence de la valeur apportée par Nora, faible fidélité à l'expérience prévue. **Disposition Morris :** traiter sérieusement la convergence UX **après la campagne ML4** ; ne pas multiplier les corrections opportunistes pendant la RECETTE Git.

**Preuve.** Captures Figma et runtime fournies dans la conversation du 09/11/2026 ; non reproduites dans Git.

### ML4-REC-02 — Copie intégrale du dernier message, rendu Markdown brut

**Séquence observée.** « Reprendre le dernier message Nora comme résumé » remplit le résumé avec le texte long « CampusFlow — première base de cadrage », y compris `##`, `**` et listes. L'aperçu inspecté reste volumineux. La proposition est néanmoins sauvegardée en révision 2.

**Attendu à qualifier.** Un résumé exploitable et lisible, et une stratégie de rendu déterminée par l'UX approuvée. **Ne pas qualifier d'absence de synthèse IA comme bug technique sans contracter cette capacité.**

**Risque.** Résumé qui n'est pas réellement un résumé ; pertes de lisibilité et d'accès rapide aux informations essentielles. Correction à concevoir avec `ML4-REC-01`, pas séparément en simple CSS.

### ML4-REC-03 — Points ouverts non capitalisés

**Séquence observée.** Nora a identifié des incertitudes (configuration des salles Exchange, causes des conflits, fréquence réelle, règles, rôle des services généraux et traitement du matériel), mais la proposition inspectée indique « Ouvert — Aucun point ouvert capitalisé » et, après création, l'espace projet indique « Points à clarifier — Aucun point ouvert capitalisé ».

**Observation vs décision.** Le fait UI est prouvé ; le contrat n'établit pas, sur cette seule preuve, que toute question Nora devait automatiquement devenir un objet D4. Le besoin produit à étudier est une **capitalisation sélective, gouvernée et traçable**, sans convertir une simple hypothèse en décision ni créer d'objets inutiles.

**Retest futur.** Lors du scénario R06 (D4), vérifier création et révision explicites, source et reprise ; ne pas lui attribuer a posteriori un échec encore non testé.

### ML4-REC-04 — Retour OAuth, chargement de statut et origine invalide

**Séquence observée.** Consentement GitHub app `sfia-studio-next-recette` → redirection vers :3200. La page Intégrations reste sur un état « non connecté » / « chargement… » après plusieurs rafraîchissements. Dans le même navigateur, l'appel direct `/api/integrations/status` retourne un JSON indiquant `status=CONNECTED`, `providerMode=REAL`, `installationId=180092114`, `userOAuthConfigured=true`, et `mcleland147/chantiers360` `ACTIVE`. Une navigation a affiché `Invalid origin` sur Connexion Studio ; l'ouverture directe `/portfolio` a redonné accès au projet et l'écran Intégrations a finalement affiché `CONNECTED`.

**Attendu.** État de connexion affiché de manière robuste après le callback et lors des navigations, avec statut explicite en cas d'échec API ; aucun fallback trompeur ni confusion entre authentification Studio et autorisation GitHub.

**Interprétation.** Un problème de synchronisation UI/API, de session ou de contrôle d'origine est **possible**, mais aucune cause précise n'est démontrée sans traces navigateur/serveur. `Invalid origin` ne suffit pas à prouver que GitHub a écrasé la session ; l'accès `/portfolio` conservé démontre l'inverse sur la séquence suivante.

**Critère de sortie.** Retest ciblé des transitions OAuth / réouverture / refresh et de l'origine, avec preuves de stabilité ; regroupement correctif éventuel après qualification, sous GO technique distinct. Ne pas réautoriser ou supprimer les cookies au hasard pendant la campagne.

### ML4-REC-05 — Profil cognitif RECETTE

**Historique.** Premier message CampusFlow échoue avant appel OpenAI : `SFIA_COG_PROFILE_TYPE requis hors DEV (fail-closed)`. Les handoffs ML2/ML3 montrent l'emploi explicite de `TEST_BOUNDARY`, qui n'avait pas été reconduit pour ML4. Morris autorise une correction de configuration uniquement. Handoff `b7033112` : variable restaurée, build/SHA inchangés.

**Réserve gouvernée.** `TEST_BOUNDARY` possède des plafonds de stress-test. Il n'est **pas** un profil opérationnel représentatif de la RECETTE. **KNOWN GAP / OPEN** : définir, calibrer, valider et prouver un profil RECETTE dédié. Ne pas adopter implicitement les plafonds provisoires `OPERATIONAL_PROVISIONAL` interdits dans cette lane.

**Impact actuel.** Le parcours conversationnel utilisateur a ensuite produit plusieurs réponses `COMPLETE`, mais une telle réponse ne démontre pas, seule, toutes les garanties de télémétrie fournisseur.

### ML4-REC-06 — Smoke fournisseur initial `UNKNOWN`

**Observation.** Au redémarrage sur `TEST_BOUNDARY`, le smoke Cursor signale `openai-agents-sdk-live` mais `status=UNKNOWN`, `streamingNotes=PROVIDER_ERROR`, `providerContacted=UNCERTAIN` ; le message fournisseur n'a pas été restitué. Après ce smoke, la RECETTE utilisateur obtient des réponses Nora `COMPLETE` cohérentes sur CampusFlow et l'écran affiche ensuite un mode `openai-agents-sdk-live`.

**Qualification.** Incident initial réel au niveau du smoke rapporté, **cause non observée**. Ce constat ne doit pas être prolongé artificiellement en panne continue de Nora. Relever télémétrie précise lors d'une qualification technique adaptée, sans utiliser un appel ponctuel comme preuve générale de disponibilité du fournisseur.

## 5. Évaluation cognitive comparative ChatGPT ↔ Nora — R01

### 5.1 Protocole et portée

Référence : `construction/reference-delivery-r5.md` §14 et appréciation cognitive dans le cadre de R01. Les réponses de Nora sont jugées selon compréhension, initiative, discernement, gestion des incertitudes, évolution de la conversation, adéquation au besoin, absence de faux acte. **Il ne s'agit pas de reproduire littéralement ChatGPT ni d'attribuer une note globale au modèle.** Les trois réponses sont transcrites intégralement dans la conversation RECETTE utilisateur ; ce document en garde un relevé exploitable.

### 5.2 Échange COG-01 — Intention CampusFlow

**Entrée.** Organisation d'environ 200 collaborateurs ; salles et matériel partagés ; conflits et doubles réservations par e-mail ; idée d'application interne ; budget, architecture, règles et calendrier inconnus ; question « comment procéder ? ».

**Réponse Nora.** Cinq étapes : comprendre les usages, délimiter un premier périmètre, comparer les solutions, préparer une réalisation progressive, tester avant élargissement. Elle cite les solutions existantes, un outil spécialisé et le sur-mesure ; demande M365/outils, incident majeur et représentants des utilisateurs ; affirme explicitement ne créer aucun projet ni décision.

**Verdict cognitif ciblé : PASS.** Bonne compréhension de l'intention et des inconnues ; esprit critique correct vis-à-vis du développement sur mesure ; respect de l'autorité humaine. **Réserve qualitative :** démarche un peu large pour une première réponse ; une focalisation plus immédiate sur le problème prioritaire et la valeur métier aurait été possible.

### 5.3 Échange COG-02 — Microsoft 365 et priorisation

**Entrée.** Microsoft 365, Outlook/Teams, calendriers partagés hétérogènes, matériel géré par e-mail, estimation de deux à trois incidents hebdomadaires, services généraux et deux collaborateurs disponibles.

**Réponse Nora.** Elle conserve le caractère estimatif du chiffre, recherche le sens opérationnel d'une « réservation confirmée », propose de reconstituer deux ou trois incidents, de mener trois échanges courts, de distinguer salles/matériel et de relever quelques indicateurs sur deux à quatre semaines sans les rendre bloquants. Priorité : fiabilité de l'engagement, fiabilité des changements, puis charge de coordination. Elle évoque les possibilités natives M365 sans en présumer les capacités effectives.

**Verdict cognitif ciblé : PASS.** Bonne réutilisation du contexte et priorisation discriminante. **Axes de challenge :** investiguer plus tôt la différence entre calendrier manuel et véritable ressource Exchange ; s'assurer que le relevé de deux à quatre semaines n'entrave pas le cadrage.

### 5.4 Échange COG-03 — Incident Atlas et convergence vers le cadrage

**Entrée.** Salle Atlas, 10–11 h ; « C'est noté » par e-mail mais calendrier non actualisé ; un autre collaborateur inscrit la réunion directement ; conflit constaté à l'arrivée ; déplacement et environ 30 minutes perdues ; configuration Exchange non vérifiée.

**Réponse Nora.** Elle différencie confirmation ambiguë, information de disponibilité non fiable et détection tardive ; identifie comme problème possible l'absence de règle univoque, non l'absence certaine de logiciel. Elle formule objectifs, hypothèses et vérifications M365/Exchange, propose un périmètre initial restreint et des actions priorisées, maintient la différence faits / hypothèses / décisions.

**Verdict cognitif ciblé : PASS.** Raisonnement contextualisé, cohérent, sans conclusion technique prématurée ni faux engagement. **Axes de challenge :** le recentrage sur les salles doit rester une proposition et ne pas éliminer tacitement le matériel du besoin initial ; la création du projet peut intervenir avec des inconnues ouvertes, sans attendre toutes les vérifications métier.

### 5.5 Conclusion cognitive provisoire

Sur ces trois échanges, Nora présente des réflexes **comparables à ceux attendus d'un assistant de cadrage compétent** : elle questionne les causes plutôt que la solution, réemploie le contexte, propose des actions proportionnées, conserve les incertitudes et n'usurpe pas les décisions. Aucun défaut cognitif majeur n'est démontré dans cet échantillon. Cela **ne valide pas** sa capacité à lire Git, à utiliser une provenance exacte, à capitaliser D4, à suivre des échanges beaucoup plus longs ou à traiter des conflits d'autorité : ces capacités restent à tester.

## 6. Traçabilité d'acceptation et suites

### 6.1 Correspondance scénarios et matrice ML4-AT

| Référence | État utilisateur au 09/11/2026 | Portée exacte et limites |
|---|---|---|
| **R01** | **PASS avec réserves** | `ML4-AT-01` **PASS** sur création et conversation sans repo. `ML4-AT-19` **NOT RUN sur l'oracle complet** : l'absence ou non-activation de futures intégrations Figma n'a pas été éprouvée de manière discriminante. |
| **R02** | **PASS avec incident OPEN** | `ML4-AT-03` **PASS** sur consentement et état CONNECTED. `ML4-AT-02` **PARTIAL** : séparation D1/D9 observée ; absence de tout accès privé induit par login non testée avec des dépôts négatifs. |
| **R03** | **PASS avec limites** | `ML4-AT-04` **PASS** sur rattachement a posteriori du dépôt sandbox ; `ML4-AT-06` **NOT RUN** (organisation en attente / refus d'accès anticipé non testés). |
| **R04** | **NOT RUN** | `ML4-AT-05`, `08`, `20` : lecture Git Nora sourcée repo/ref/SHA et continuité du fil à tester. |
| **R05** | **NOT RUN** | `ML4-AT-09` : prompt injection sur source de test autorisée. |
| **R06** | **NOT RUN** | `ML4-AT-10` : création/révision D4 persistée et provenance. |
| **R07–R08** | **NOT RUN** | Inspections D4/Git, refus d'effet sans GO, vérité D8 ; `ML4-AT-11`, `17`, `18` non certifiés. |
| **R09–R11** | **NOT RUN** | Déconnexion/révocation, UX responsive et isolation multi-Pilotes ; `ML4-AT-07`, `16`, `21`, `22` non certifiés. |
| **R12–R14** | **NOT RUN — GO distinct requis** | Commit/PR/conflits/ambiguïtés REAL (`11`, `12`, `14`, `15`, `18`). Ne toucher ni à `main` ni à PR #18 DEV de `chantiers360`. |
| **Hors-exécutable actuel** | **KNOWN GAP** | `ML4-AT-13` : merge documentaire REAL **HARD-BLOCKED** selon le cahier ; aucune preuve PASS. |

> Les entrées ci-dessus constituent une **projection de couverture** sur la matrice canonique, **pas une modification du statut de la matrice Git**. Chaque critère peut n'être vérifié que partiellement même si le scénario utilisateur est déclaré PASS avec réserves.

### 6.2 Contrat de reprise R04

**Avant tout test suivant :** retrouver le même projet CampusFlow, vérifier que `mcleland147/chantiers360` est toujours attaché, puis utiliser Nora en lecture Git uniquement. Demander une lecture réelle d'un fichier existant dans le dépôt autorisé, en exigeant **chemin, ref, SHA source, contenu pertinent et lien GitHub**. Contrôler indépendamment la référence Git si possible. Si lecture impossible, déclarer erreur/refus au lieu de produire une source imaginée. **Aucune écriture Git ni nouveau mandat D6.**

**Après chaque scénario achevé :** ajouter une ligne à la chronologie, une note de comparaison cognitive si pertinent, les nouvelles preuves, les écarts nouveaux ou résolus, actualiser la projection `ML4-AT` et conserver les verdicts précédents avec une entrée de requalification datée. Ne pas réécrire silencieusement le passé.

### 6.3 Preuves attendues à la sortie et politique d'archivage

- Cas suivi avec `ID | date | SHA/build | attendu | observé | niveau de preuve | capture/trace | verdict | réserve/exit`.
- Captures actuelles : **dans la conversation ChatGPT uniquement**, pas encore indexées sous identifiant d'artefact Git. Si la campagne devient inter-chat, reproduire ici les faits et, sous gate documentaire, intégrer des références stables aux preuves sans exposer secrets/jetons.
- `COMPLETE`, interface `CONNECTED`, données persistées après refresh, lecture Git REAL et commit distant sont des niveaux **non substituables**.
- Pas d'acceptation ML4 globale, de PR/merge, de promotion STABLE, de release ou d'`ADOPTED` à partir de ces seules observations.

## 7. Frontières, blast radius et capitalisation corrective

| Frontière | Responsable produit | Risque / point de sortie |
|---|---|---|
| Entrée/sas/proposition | D2 + D3/D4 selon objet | Fidélité à Figma et capitalisation sélective ; ne pas confondre texte conversationnel et objet durable D4 |
| Connexion Studio | D1 / Better Auth | `Invalid origin` et stabilité de session ; ne pas modifier l'authentification sur hypothèse |
| GitHub consentement et permission | D1/D9 | Identifier acteur, installation, autorisation utilisateur, dépôt et droits effectifs sans raccourci |
| Lecture Nora | D3 + D9 avec contrôle serveur | Sources exactes, ref/SHA et refus d'instruction hostile ; pas encore éprouvé |
| Édition documentaire | D4 | Révision interne, traçabilité et pas de publication implicite |
| Écritures externes | D6/D7/D8/D9 | GO borné, diff, idempotence, vérification d'effet ; **aucune écriture actuellement autorisée** |
| Gouvernance de l'environnement | ENV-01 + profil cognitif | Profil opérationnel RECETTE dédié OPEN, reproductibilité du build/SHA, contrôle fournisseur et cookies |

**Dette / exit.** Conserver les écarts de convergence UX pour un chantier cohérent post-ML4, sans banaliser leur portée produit. Traiter tout incident OAuth/session reproductible par une correction intégrée code/tests/docs au bon gate, pas par une succession de modifications opportunistes. Décider séparément du profil cognitif opérationnel RECETTE ; `TEST_BOUNDARY` reste une condition de test et non une adoption.

## 8. État de décision, publication et limites de ce registre

- **Décision Morris constatée :** poursuite de la campagne ML4 et volonté de capitaliser les résultats après chaque scénario, avec cohérence documentaire par rapport au format ML3 ; convergence UX à reprendre sérieusement après ML4.
- **Présent livrable :** brouillon D0 autonome, **non publié dans Git**. Emplacement proposé : `projects/sfia-studio-next/construction/integration-git/recette-ml4-r01-r14-anomalies.md`.
- **Gate Git distinct :** pour intégrer ce registre dans le dépôt, il faut une autorisation explicite de **branche cible, chemin et commit/push bornés** (D1, document non normatif), suivie du diff, SHA et relecture distante. Aucune PR, merge ou modification de `main` déduite de cette demande.
- **Relation aux documents existants :** compléter — ne pas remplacer — le cahier de RECETTE et la matrice ML4-AT. Éviter un second plan de tests concurrent ; ce document est **l'historique des observations et analyses**.
- **Prochain scénario :** R04 — lecture Git LIVE par Nora avec provenance. À suspendre si R03 devient indisponible, si le rattachement disparaît ou si l'autorisation des lectures n'est plus effective.

**Verdict unique au terme de R03 : `ML4 USER RECETTE IN PROGRESS — R01/R02/R03 FUNCTIONAL PASS WITH OPEN RESERVES — R04–R14 NOT RUN — NO PRODUCT GIT MUTATION — NO ML4 ACCEPTANCE`.**
