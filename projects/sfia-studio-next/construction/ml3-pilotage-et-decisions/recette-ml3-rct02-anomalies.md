# SFIA Studio Next — ML3 « Piloter et décider »
## Restitution de recette utilisateur RCT-02 et dossier d'anomalies D3/D5/D6

| Champ | Qualification |
|---|---|
| Date de restitution | 2026-11-06 (Europe/Paris) |
| Nature | **D0 — restitution factuelle de recette et hypothèses de diagnostic, non normative** ; proposition de support au macro-lot correctif R5/ML3 |
| Produit / environnement | SFIA Studio Next, projet de recette « Fil de projet », Nora OpenAI LIVE et cockpit Pilotage RECETTE |
| Référentiel code examiné | `mcleland147/sfia-workspace`, branche `sfia/next-pilotage-decisions-delivery`, candidat `ba831b25bc182f755be749243f256dbf7d5a1ca1` |
| Base Git observée | `main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` ; candidate **2 commits devant, 0 derrière**, lors du contrôle Git du 2026-11-06 |
| Vérité locale de Cursor / état des worktrees | **NON OBSERVÉ** ; vérifier avant tout changement |
| Statut | **RECETTE UTILISATEUR EXÉCUTÉE, ÉCARTS OUVERTS** — ni R6, ni `BEHAVIOR PROVEN` global, ni ML3 clos, ni `ADOPTED` |
| Auteur / décision d'action | Restitution préparée par ChatGPT ; Morris a demandé de traiter les huit anomalies **dans un macro-lot correctif unique** et de refaire une recette ciblée ; pas de GO implicite push projet/PR/merge/promotion |

> **Lecture obligatoire :** les statuts d'interface et propos de Nora sont des observations de recette. Les causes techniques indiquées ci-dessous sont des **hypothèses**, sauf lorsqu'une condition ou absence de branchement est directement visible dans le code Git lu. Un échec de reconnaissance ne prouve pas une défaillance du moteur transactionnel D5/D6. Une réussite cockpit ne démontre pas une réussite dans le fil. Ce document ne crée aucune nouvelle règle d'autorité ni décision produit.

## 1. Résultat utilisateur et conclusion principale

### 1.1 Vision visée

Le Pilote conduit librement son projet dans un seul fil avec Nora ; il peut explorer, challenger, ouvrir/clore des cycles, enregistrer/réviser une décision, imposer/lever une restriction et retenir une méthode. La **parole explicite du Pilote** peut constituer une source d'acte D6, mais **la décision applicable et l'effet métier** sont qualifiés, autorisés, exécutés et conservés par Studio, jamais par la sortie du modèle IA. Le CKI spécialise les réflexes cognitifs de Nora de façon interne, sans devenir une méthode documentaire à réciter, ni une autorité.

### 1.2 Appréciation qualitative de la première recette

**Points positifs réellement observés :** Nora LIVE a raisonné avec nuance sur « Fil de projet », distingué un exemple fictif (RSSI) d'une preuve de terrain, maintenu les hypothèses non validées, compris les décisions et révisions, respecté une interdiction `CYCLE_MUTATION`, recommandé une maturité suffisante sans bloquer arbitrairement le Pilote, retrouvé la trajectoire, l'orientation et la méthode. Les parcours cockpit ont démontré l'ouverture, la clôture, la révision, l'application et la levée de restrictions ainsi que le choix de méthode. Le Pilote a confirmé la persistance après rechargement.

**Limite principale :** plusieurs actes compris par Nora **n'ont produit aucun effet D5/D6** lorsqu'ils ont été formulés naturellement dans le fil. D'autres ont été enregistrés avec un énoncé dégradé ou excessif. Le contexte fourni à Nora ne présente pas toujours explicitement la **vérité effective courante**, en particulier après levée de restriction.

**Appréciation :** premier résultat cognitif encourageant, noyau métier fonctionnel sur les chemins observés, mais **contrat conversation → qualification → autorité → effet → restitution** insuffisamment fiable pour accepter ML3 en l'état. Le correctif doit consolider ce contrat, pas créer un second moteur ni contourner les contrôles D6.

### 1.3 Périmètre de preuve et comptage

- Campagne utilisateur **RCT-02 / T01 à T16** : **10 acceptés, 4 échecs, 2 partiellement conformes**, selon le regroupement des sous-étapes déjà validé dans la conversation. Un test accepté peut porter une réserve annexe (ex. objectif `.` lors de T02).
- RCT-01 préliminaire : sas et création de projet, compréhension des hypothèses, continuité de fil et absence d'ouverture automatique ; **contexte**, non compté comme partie de RCT-02.
- Les messages Nora `COMPLETE`, les captures Pilotage et les retours utilisateur constituent des **preuves utilisateur**, pas une extraction exhaustive de logs/SQL ni une certification E2E LIVE. Des preuves PG/FAKE existent pour le candidat selon la spécification ML3, mais **n'invalident pas les échecs observés en LIVE**.
- Les captures de session sont présentes dans la conversation de recette du 2026-11-06 ; **elles ne sont pas versées en pièces jointes à ce document Git**. Les transcriptions/états significatifs sont reproduits ci-dessous pour rendre l'analyse autonome.
- « Fil de projet » et `exploration-par-situations@0.1.0-test` sont des éléments **de recette**, pas une méthode de production validée. Aucun droit Git n'est induit du login GitHub OAuth.

## 2. Chronologie synthétique des seize tests

| Test | Acte / situation | Résultat observé | Verdict utilisateur | Incident / réserve |
|---|---|---|---|---|
| **T01** | GO développé : « Nora, je décide de commencer le cadrage… Ouvre le cycle CADRAGE… » | Nora comprend et propose une guidance mais affirme ne pas ouvrir ; Pilotage : révision 0, aucun cycle, aucune D6 | **FAIL** | RCT-02-01 |
| **T02** | Commande courte « Ouvre le cycle cadrage. » | `OPEN_CYCLE: APPLIED`, CADRAGE `ACTIVE`, HumanDecision visible, CKI `01-cadrage@0.2.0` | **PASS avec réserve** | RCT-02-02 : objectif `.` |
| **T03** | Guidance du cycle actif, prompt demandant expressément d'utiliser et de distinguer le CKI | Réponse cohérente, mention explicite du CKI induite par notre question | **PASS cognitif borné** | Ne prouve pas l'intégration implicite du CKI |
| **T04** | Décision métier en plusieurs phrases, suivie d'une demande à Nora | `RECORD_DECISION: APPLICABLE`, mais l'énoncé conservé inclut la consigne « Nora, … aide-moi… » | **PARTIAL** | RCT-02-04 ; CKI spontané RCT-02-03 |
| **T05** | « Je révise la décision… Cette nouvelle orientation remplace… » dans le fil | Nora comprend, mais aucune `REVISE_DECISION` ; 2 décisions et ancienne décision toujours `APPLICABLE` | **FAIL** | RCT-02-05 |
| **T06** | Révision de la décision via « Réviser » dans Pilotage | Nouvelle version `APPLICABLE`, précédentes `REVISED`, contenu nettoyé | **PASS** | Deux soumissions ont été **effectuées volontairement par Morris** : **aucune anomalie d'idempotence démontrée** |
| **T07** | Nora reprend décision révisée après correction UI | Nouvelle orientation, ancienne priorité et cycle correctement distingués ; cite spontanément CKI | **PASS avec réserve** | RCT-02-03, troncature de contexte à qualifier |
| **T08** | Restriction de type `CYCLE_MUTATION` sur l'instance CADRAGE via Pilotage | `APPLY_RESTRICTION: APPLICABLE`, restriction `ACTIVE`, révision 5 | **PASS** | Protection au point d'effet encore à vérifier |
| **T09** | « Clôture le cycle cadrage. » sous restriction | Refus `RESTRICTION`, CADRAGE reste `ACTIVE`, révision 5 inchangée, pas de `CLOSE_CYCLE` | **PASS** | Contrôle de restriction fonctionnel sur ce parcours |
| **T10** | GO conversationnel développé de levée `CYCLE_MUTATION`, sans clôture | Nora comprend, dit ne pas disposer d'outil ; restriction reste `ACTIVE`, révision 5 | **FAIL** | RCT-02-06 |
| **T11** | Bouton « Lever » dans Pilotage | `LIFT_RESTRICTION: APPLICABLE`, aucune restriction active, cycle reste `ACTIVE`, révision 6 | **PASS** | Historique `APPLY_RESTRICTION` toujours libellé `APPLICABLE` : lisibilité à qualifier, pas nécessairement anomalie |
| **T12** | Question sur possibilité et pertinence de clôturer **sans donner GO** | Nora ne clôture pas, analyse la maturité, mais ne sait pas confirmer la restriction effectivement levée | **PARTIAL** | RCT-02-07 |
| **T13** | GO développé de clôture CADRAGE en conservant réserves, sans nouveau cycle | Nora comprend, dit ne pas pouvoir agir ; Pilotage : CADRAGE toujours `ACTIVE`, révision 6, 6 décisions | **FAIL** | RCT-02-08 |
| **T14** | Clôture UI de CADRAGE puis ouverture UI de `CONCEPTION_FONCTIONNELLE` avec objectif explicite | Révisions 7 puis 8, `CLOSE_CYCLE`/`OPEN_CYCLE` opposables, nouveau cycle actif, CKI `02-conception-fonctionnelle@0.2.0`, ancien cycle clos | **PASS** | Enregistrement durable de réserves de clôture **non prouvé** |
| **T15** | Choix UI d'une référence méthode de test | `CHOOSE_METHOD: APPLICABLE`, `exploration-par-situations@0.1.0-test`, révision 9, cycle/CKI inchangés | **PASS** | Contenu de méthode fictif, son application cognitive non prouvée |
| **T16** | Rechargement et demande de reprise | Nora restitue cycle, objectif, méthode, orientation, incertitudes ; Morris **confirme personnellement** la persistance après recharge | **PASS sur vérification utilisateur** | Pas de trace instrumentée de la session/reconnexion ; réserves D4 |

> **Rectification explicite :** le comptage des quatre décisions `RECORD_DECISION`/révisions après T06 résulte de **deux clics manuels intentionnels** de Morris. La suspicion initiale de double soumission parasite doit être **retirée**. Ne créer ni anomalie ni correctif d'idempotence pour ce fait sans nouvelle preuve indépendante. L'idempotence reste un invariant de non-régression.

## 3. Registre des huit écarts — synthèse

| ID | Constat | Gravité proposée | Responsabilités concernées | Niveau de cause |
|---|---|---|---|---|
| **RCT-02-01** | GO naturel d'ouverture non reconnu | Majeure | D3 → qualification → D5/D6 | **Indice code fort** : regex ancrée en début de message |
| **RCT-02-02** | Objectif du cycle enregistré `.` | Majeure (qualité donnée) | D5/qualification + D3 | **Indice code fort** : résidu de ponctuation après extraction du type de cycle |
| **RCT-02-03** | CKI interne extériorisé sans demande | Optimisation cognitive importante | D3/CKI | **Hypothèse** : présentation du CKI comme « source » et instructions de citation trop génériques |
| **RCT-02-04** | HumanDecision polluée par consigne conversationnelle | Majeure, intégrité D6 | Qualif. → D6, objet/énoncé | **Indice code fort** : capture trop large du suffixe du message |
| **RCT-02-05** | Révision de décision exprimée dans le fil non exécutée | Majeure | D3/D6, résolution de cible | **À départager** : grammaire, extraction, cible, clarification, exécution |
| **RCT-02-06** | Levée de restriction demandée dans le fil non exécutée | Majeure | Qualif. → D6 | **Indice code fort** : absence de reconnaissance `LIFT_RESTRICTION` dans le qualificateur lu |
| **RCT-02-07** | Nora ne confirme pas l'état effectif après levée | Majeure (vérité métier) | D5/D6 → contexte D3 | **Indice code fort** : « aucune restriction active » omis lorsque la collection est vide |
| **RCT-02-08** | GO naturel de clôture non exécuté | Majeure | D3 → qualification → D5/D6 | **Indice code fort** : regex ancrée en début de message ; motif à confirmer en traces |

**Lecture :** huit observations utilisateur, pas nécessairement huit causes indépendantes. Les écarts 01/05/06/08 peuvent relever d'une même frontière de qualification des actes, à compléter par 02/04 sur l'extraction des données. Les écarts 03/07 relèvent surtout de la restitution cognitive et du contexte fiable.

## 4. Fiches d'anomalies détaillées

### RCT-02-01 — Ouverture de cycle en formulation naturelle développée

**Séquence.** Après création de « Fil de projet », le Pilote demande à Nora de « commencer le cadrage », puis « Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier », et demande ensuite des explications. Nora répond qu'elle ne peut pas ouvrir de cycle depuis le fil. Pilotage montre **aucun cycle**, **révision 0**, **aucune HumanDecision**. Le même projet ouvre correctement CADRAGE avec le message exact « Ouvre le cycle cadrage. » (T02).

**Attendu.** Qualification d'un GO humain clair malgré une introduction et des phrases de guidance. Studio doit effectuer **une seule mutation gouvernée** ou fournir un refus/une clarification **explicite et fidèle**, sans imposer une seconde validation artificielle et sans prétendre avoir ouvert si non exécuté.

**Pourquoi c'est important.** L'expérience centrale Pilote–Nora devient dépendante de la syntaxe d'une CLI. Les décisions claires peuvent être ignorées pendant que la réponse cognitive paraît pertinente.

**Piste de code à investiguer.** `web/src/domains/pilotage/intent.ts`, `qualifyPilotageIntent`: motif `OPEN_CYCLE` commençant par `^`; l'expression « Nora, je décide… » ne commence pas par `ouvre`. `conversation-authority.ts` n'exécute le chemin métier que si `clarity=CLEAR`. **Hypothèse forte, à confirmer par test du message intégral et trace de qualification.**

**Contrat de correction.** Reconnaître un **acte performatif explicite** au sein d'un message naturel, avec segmentation prudente du passage autorisant et du passage de guidance. Ne pas transformer une citation, une hypothèse, une question (« peux-tu… ? » ambiguë selon contexte), « imaginons que j'ouvre », un simple « go » ou une proposition de Nora en GO. Deux commandes incompatibles ou plusieurs cycles → clarification ciblée sans effet. Une seule source `USER_MESSAGE` durable, contrôle D6 au point d'effet, ACK fiable.

**Oracle ciblé.** Message original T01 sur projet vierge → `OPEN_CYCLE: APPLIED`, CADRAGE `ACTIVE`, une D6 et objectif correct ; contre-tests exploratoires/citations → zéro mutation.

### RCT-02-02 — Objectif de cycle dégradé en « . »

**Séquence.** Le message exact « Ouvre le cycle cadrage. » produit `OPEN_CYCLE: APPLIED` et CADRAGE `ACTIVE`, mais **objectif affiché « . »** dans Pilotage, dans le Journal et dans le contexte restitué par Nora ; le défaut persiste au-delà du tour. En T14, l'ouverture UI avec objectif complet enregistre correctement l'objectif voulu.

**Attendu.** L'objectif enregistré doit être un contenu sémantiquement exploitable. Pour une commande sans objectif explicite : utiliser uniquement une politique/fallback **documentée et non trompeuse**, ou demander la précision utile ; **jamais la seule ponctuation**. Si le GO et son objectif sont exprimés ensemble, extraire l'objectif du bon segment sans perdre les contraintes.

**Piste de code à investiguer.** `intent.ts`: `matchCyclePrefix` restitue `rest = n.slice(item.phrase.length).trim()` ; `OPEN_CYCLE` affecte `objective: matched.rest || "Cycle CADRAGE"`. Pour `cadrage.` le résidu `.` est non vide et contourne le fallback. Inspecter aussi les validateurs D5 et les contraintes d'intégrité : une chaîne de ponctuation ne devrait pas être promue en objectif utile. **Cause mécanique probable fortement étayée.**

**Oracle ciblé.** « Ouvre le cycle cadrage. » n'enregistre plus `.` ; message complexe conserve exactement son objectif métier. Reprise/Journal/Nora reflètent le même objectif. Ne jamais récupérer arbitrairement l'objectif d'un message antérieur s'il n'est pas associé sans ambiguïté.

### RCT-02-03 — Citation spontanée de la guidance CKI

**Séquence.** T03 demandait expressément de citer/distin­guer le CKI : réponse conforme à la demande, **non probante** sur l'implicite. T04 (décision) et T07 (rappel de décision) ne le demandaient pas, pourtant Nora écrit notamment « C'est cohérent avec le CKI de cadrage fourni ». D'autres réponses (T12/T16) montrent qu'elle peut répondre sans le citer.

**Attendu.** Le CKI devient un ensemble de **réflexes d'expertise** : distinguer problème/solution, questionner l'incertitude, calibrer la maturité, prioriser progressivement. Le Pilote ne devrait pas lire spontanément une méta-description du CKI, de son ID/version ou de son mécanisme interne. Les sources D4 réellement utilisées peuvent rester citées lorsqu'elles justifient un fait ou une affirmation déterminante ; **CKI ≠ document externe D4**. Une demande explicite d'inspection de la guidance peut justifier une provenance technique ciblée, sans transformer le CKI en autorité.

**Piste de code à investiguer.** `nora-context.ts` ajoute les octets CKI sous « ### Guidance CKI (RESOLVED — octets vérifiés…) » ; `nora-adapter.ts` décrit tous les « messages, acquis, documents, CKI » comme des **SOURCES** et demande de citer la provenance des acquis/documents. Il n'exprime pas suffisamment la distinction **guidance silencieuse** vs **source documentaire à citer**. **Cause plausible, à tester en LIVE ; aucune preuve que le CKI lui-même est incorrect.**

**Oracle ciblé.** Questions naturelles de cadrage et de conception fonctionnelle sur plusieurs tours → expertise spécifique présente sans mention spontanée de « CKI », version/digest/source interne ; demande explicite « montre quelle guidance est chargée » → explication honnête, sans exposer secrets ni prétendre à une autorité.

### RCT-02-04 — Énoncé D6 contaminé par les instructions à Nora

**Séquence.** T04 : le Pilote décide une priorité métier « examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes », précise que le besoin n'est pas validé, puis demande à Nora d'aider à identifier la prochaine question. `RECORD_DECISION` devient `APPLICABLE`, **mais le Journal et le formulaire de révision reprennent aussi « Nora, maintenant que cette décision est exprimée, aide-moi… »**. Le libellé `objectRef` apparaît tronqué/mal centré (« mais ne signifie pas que le besoin utilisateur »).

**Attendu.** La HumanDecision durable comprend **uniquement la décision, sa portée, ses limites et son objet**, jamais la question ou la consigne adressée à Nora pour poursuivre le travail. Un texte non délimitable avec certitude nécessite clarification, pas enregistrement opportuniste de tout le tour.

**Piste de code à investiguer.** `intent.ts` normalise tous les sauts de ligne en espaces puis applique `RECORD_DECISION` avec un captureur `(.+)$` jusqu'à la fin de l'énoncé complet. `deriveDecisionObjectRef` calcule ensuite un objet sur ce texte potentiellement pollué. `conversation-authority.ts` envoie `qualified.statement` au moteur D6. **Mécanisme directement compatible avec l'observation.** Examiner `REVISE_DECISION` avec la même exigence.

**Impact.** Décision opposable faussée, objets de confrontation mal indexés, mauvaise sélection lors de futures révisions et confusion entre **ordre d'interface** et **arbitrage métier**.

**Oracle ciblé.** Rejouer le message original T04 : HumanDecision `APPLICABLE` avec deux premières phrases pertinentes mais **sans la phrase commençant par « Nora… »** ; `objectRef` stable et signifiant ; questions et citations sans GO ne créent rien. Anciennes données de RECETTE polluées : **ne pas réécrire silencieusement** ni migrer des décisions historiques sans mandat spécifique ; documenter la dette et l'exit.

### RCT-02-05 — Révision conversationnelle non appliquée

**Séquence.** T05 : « Je révise la décision que j'ai prise sur l'orientation du cadrage… », puis nouvelle orientation ouverte : explorer plusieurs situations réelles de coordination interéquipes, en remplaçant la priorité « suivi des décisions ». Nora comprend et n'exige pas de deuxième confirmation, mais précise ne pas confirmer l'enregistrement. Pilotage : **2 décisions inchangées**, l'ancienne toujours `APPLICABLE`, aucune `REVISE_DECISION`. À T06, la révision avec **cible explicite via le bouton** fonctionne.

**Attendu.** Une révision claire vise une décision applicable déterminée, la marque `REVISED` et en crée une nouvelle `APPLICABLE`, historisée ; ambiguïté réelle sur la cible → **clarification**, pas mutation arbitraire. Les opérations fondatrices D5 ne sont pas révisées comme une décision documentaire générique.

**Pistes à départager par instrumentation.** `intent.ts` et sa regex `explicitRevise`; `conversation-authority.ts` (`resolveReviseTarget`, `findAuthorityReviseCandidates`), dérivation de `objectRef` et propreté de l'énoncé historique. Le défaut observé peut résulter de la qualification, de la résolution de cible ou de leur combinaison. **Ne pas affirmer que le moteur `REVISE_DECISION` est défectueux**, puisque le parcours explicite fonctionne.

**Oracle ciblé.** Message T05 → une seule nouvelle décision applicable, précédente `REVISED`, textes propres, cycle inchangé. Cas négatifs : zéro / plusieurs cibles, portée hétérogène, déclaration exploratoire « je réfléchis à modifier… », cible D5 fondatrice → clarification/refus typé, **aucun effet**. Reprise et retry même `clientTurnKey` → aucune duplication.

### RCT-02-06 — Levée conversationnelle non appliquée

**Séquence.** Après application UI d'une restriction `CYCLE_MUTATION` ciblée sur l'instance CADRAGE, Nora refuse correctement une clôture (`RESTRICTION`). Le Pilote demande ensuite clairement dans le fil de **lever cette restriction uniquement**, en demandant de ne pas clôturer. Nora comprend mais annonce ne pas disposer d'outil ; Pilotage montre restriction toujours `ACTIVE` et révision 5 inchangée. T11 : le bouton « Lever » produit `LIFT_RESTRICTION: APPLICABLE`, révision 6, aucune restriction active.

**Attendu.** Expression humaine explicite → résolution **unique** de la restriction active visée (`targetKind`, `targetRef`, `restrictionId`) → vérification D6 au point d'effet → `LIFT_RESTRICTION` avec preuve d'état ; aucune clôture involontaire. Plusieurs restrictions candidates → clarification sans effet. Une demande « faut-il lever ? » → aucun effet.

**Piste de code à investiguer.** `intent.ts` qualifie ouverture/clôture/méthode/décision mais **ne comporte pas de chemin de reconnaissance `LIFT_RESTRICTION`** dans la version Git lue ; `pilotage/service.ts` exige pour l'opération `LIFT_RESTRICTION` un `restrictionId`, fourni par le bouton de `PilotagePanel.tsx`. Ajouter un chemin conversationnel **gouverné**, pas un appel direct du modèle ou une sélection par approximation.

**Oracle ciblé.** Message T10 → restriction ciblée absente de la projection active, décision de levée présente, cycle CADRAGE reste `ACTIVE` et aucune `CLOSE_CYCLE`. Contre-tests global/instance/type, zéro ou plusieurs restrictions, réexécution, session d'un autre Pilote → refus/clarification et aucune mutation illégitime.

### RCT-02-07 — État effectif des restrictions insuffisant dans le contexte Nora

**Séquence.** T11 : capture Pilotage affiche **« Aucune restriction active »** après levée ; `LIFT_RESTRICTION: APPLICABLE`, révision 6. T12 : Nora retrouve deux actes historiques `APPLY_RESTRICTION` et `LIFT_RESTRICTION`, mais dit ne pas pouvoir confirmer l'état opérationnel courant faute de lecture effective. Elle ne clôture pas, conformément à la question.

**Attendu.** Nora reçoit un **état effectif daté/révisé** issu du propriétaire D5/D6, tel que `restrictions_actives=aucune`, distinct des actes historiques, ou l'indisponibilité réelle de la projection. Elle doit pouvoir affirmer une absence **vérifiée** de restriction lorsqu'elle est explicitement fournie, sans reconstituer sa vérité à partir d'actes `APPLICABLE` historiques. Les états historiques et actifs peuvent coexister sans contradiction matérielle.

**Piste de code à investiguer.** `nora-context.ts` ajoute `restrictions_actives=…` **uniquement si `projection.restrictions.length > 0`**. Or `getPilotageProjection` renvoie les restrictions de statut `ACTIVE` : après levée, la liste vide n'est pas explicitement décrite. Les décisions historiques restent présentes dans le contexte. **Cause probable fortement étayée**. S'assurer que la fraîcheur/révision et l'isolation projet/Pilote restent vérifiées.

**Oracle ciblé.** Après levée confirmée, Nora répond « aucune restriction active sur le cycle visé » en citant la projection métier actuelle ; elle ne confond pas `APPLY_RESTRICTION: APPLICABLE` historique avec interdiction courante. Contexte périmé/échec de lecture → limite honnête, pas faux `aucune`.

### RCT-02-08 — Clôture naturelle développée non exécutée

**Séquence.** T13, après levée : « Nora, j'ai bien compris ta recommandation … je décide de clôturer maintenant le cycle CADRAGE … en conservant les réserves … Ne démarre aucun nouveau cycle automatiquement ». Nora comprend, annonce ne pas disposer d'outil de clôture ; Pilotage : CADRAGE toujours `ACTIVE`, **révision 6**, six décisions, aucune clôture. T14 : bouton « Clore ce cycle » → révision 7, `CLOSE_CYCLE: APPLICABLE`, aucun cycle actif, puis ouverture d'un nouveau cycle séparée à révision 8.

**Attendu.** Un GO clair dans le fil déclenche la **clôture gouvernée** de ce cycle si aucune restriction applicable ne l'interdit, même si Nora estime le cadrage peu mature. Une recommandation de maturité ne se transforme pas en restriction. Ne pas ouvrir le cycle suivant sans GO. Les réserves demandées doivent être soit conservées dans le dispositif existant pertinent, soit **déclarées non persistées** : ne pas inventer un bilan de clôture.

**Piste de code à investiguer.** `intent.ts` utilise un motif `CLOSE_CYCLE` commençant par `^`, écartant un GO clair situé au milieu d'un message complexe ; le message comprend aussi des phrases ne devant pas être transformées en second acte. `conversation-authority.ts` effectue le pont si la qualification est `CLEAR`. **Hypothèse forte à confirmer en traces.**

**Oracle ciblé.** T13 → `CLOSE_CYCLE: APPLIED`, aucun cycle actif, une D6, pas de nouveau cycle ; réponse Nora fidèle au résultat. Question « Peut-on clôturer ? » (T12) → **aucun** effet. Clôture sous restriction (T09) → `REJECTED/RESTRICTION`, cycle conservé. Vérifier explicitement le statut réel de persistance des réserves.

## 5. Analyse transverse : frontières, blast radius et regroupement des causes

### 5.1 Une chaîne à réparer, pas huit micro-fonctions

```text
USER_MESSAGE durable (D3)
  → segmentation prudente : acte / portée / énoncé / propos non décisionnels
  → qualification CLEAR / AMBIGUOUS / NONE (pas de GO par suggestion IA)
  → résolution unique des cibles D5/D6 et contrôle d'autorité courant
  → executePilotageCommand (TX PG, idempotence, source USER)
  → projection effective / historique / résultat APPLIED|REJECTED|UNKNOWN
  → contexte fidèle à Nora (état, limites, CKI silencieux)
  → restitution honnête au Pilote
```

**Famille A — Qualification et extraction :** RCT-02-01, -02, -04, -05, -06, -08. Identifier les segments performatifs, nettoyer ponctuation, séparer ordre durable/demande cognitive, résoudre cibles sans supposer d'authority. Attention au risque inverse **sur-exécution** : accepter du langage varié ne doit pas transformer les exemples, citations, questionnaires, demandes hypothétiques et réponses de Nora en mutations.

**Famille B — Contexte effectif et conduite cognitive :** RCT-02-03 et -07. Ne pas créer d'autre source de vérité : récupérer la projection propriétaire avec son statut, distinguer historique/opposable/effectif, fournir la spécialisation CKI sans inciter Nora à réciter sa provenance technique.

### 5.2 Responsabilités et blast radius à qualifier par Cursor

| Domaine / surface | Contrat et risque |
|---|---|
| D3 fil et `conversation/service.ts` | Messages USER durables, ordre de traitement D6 avant Nora, ACK perdu, reprise idempotente, aucune décision sur texte assistant |
| `pilotage/intent.ts` | Détection linguistique suffisamment ouverte mais fail-closed ; `NONE/AMBIGUOUS` sans mutation ; segmentation et portée explicites |
| `pilotage/conversation-authority.ts` | Source/authentification, objet cible, association `sourceRef` et `clientCommandKey`, absence de doubles effets, refus si ambiguïté |
| D5 `pilotage/service.ts`, `command-runner.ts` | Cycle actif unique, invariants PG, objectif sémantique, restriction effective, révisions et états sans seconde vérité |
| D6 `decisions/*` | Autorité du Pilote, `RECORD/REVISE`, cible unique, statut courant, historique, méthodes/levées, pas de pollution par instructions à Nora |
| D3 `pilotage/nora-context.ts`, `conversation/nora-adapter.ts` | Projection courante explicite, précision/fraîcheur, CKI à effet cognitif implicite ; D4 cité seulement pour faits réellement consultés |
| UX Pilotage et API | L'interface explicite reste opérationnelle ; pas de double confirmation obligatoire ; état `APPLIED/REJECTED/UNKNOWN` réel et visible |
| Stockage / migrations | Éviter migration/DDL pour simple correction de qualification ; tout changement de persistance exige analyse compatibilité, sauvegarde, GO adapté |
| Authentification, sessions, environnements | Isoler chaque Pilote/projet et DEV/RECETTE ; ne pas exploiter secrets ou cookies de session dans le rapport |

**Conception minimale privilégiée :** enrichir le chemin existant de qualification et le pont vers le moteur métier, conserver `executePilotageCommand` comme **point d'effet unique** et la projection comme vérité. N'introduire ni deuxième agent autorisant, ni framework de commandes généré par LLM, ni second moteur d'état, ni parsing opportuniste incontrôlé.

### 5.3 Réserves distinctes des huit anomalies

1. **Réserves de clôture :** le bouton UI a clos CADRAGE avec `CLOSE_CYCLE`, mais la conservation structurée d'un bilan/réserves n'a pas été prouvée. Nora a plus tard dit « en conservant ses réserves » : la phrase ne vaut pas preuve. **GAP DE PREUVE** à qualifier ; ne pas ouvrir un chantier de persistance distinct sans analyse contractuelle et gate Morris si évolution structurante.
2. **D4 :** Nora signale l'absence de documents/acquis consultables malgré l'existence de sujets et le transcript. Distinguer absence réelle de capitalisation, bornage D4 et problème de récupération. **Pas une neuvième anomalie D4 démontrée.**
3. **CKI :** disponibilité et attachement déclarés dans les réponses ; le contenu réellement chargé et ses effets cognitifs requièrent des traces si l'on élève le niveau de preuve. La formulation « CKI fourni » spontanée suffit à constater l'écart UX cognitif, pas un défaut d'autorité.
4. **Méthode :** `exploration-par-situations@0.1.0-test` est une référence de recette fictive ; test de choix OK, **application effective non testée**. `sfia-fast-track 2.6` est le processus externe ChatGPT–Cursor, **pas** la méthode produit de « Fil de projet » par défaut.
5. **Double révision :** deux opérations identiques ont été initiées volontairement par Morris ; **exclue** du registre d'anomalies.
6. **Cookies cross-lane et R-UX-01 :** réserves préexistantes du candidat/ENV-01 (session sur même hôte et pending conversationnel exclusif) ; **ne pas les déduire résolues** ni élargir automatiquement le macro-lot.
7. **Journal de décision :** un acte historique d'application peut rester `APPLICABLE` comme décision passée, alors que la restriction opérationnelle est levée. Priorité à la présentation distincte de l'état **effectif** ; ne pas réécrire l'histoire pour faire disparaître la coexistence.

## 6. Contrat de correction et de recette ciblée — proposition non normative

### 6.1 Résultat utilisateur intégré

Sur un **projet de test isolé**, le Pilote doit pouvoir communiquer naturellement : ouvrir un cycle avec objectif, enregistrer une décision délimitée, la réviser, appliquer/lever une restriction ciblée, clôturer sous autorité et reprendre. Nora exprime des conseils spécialisés sans mentionner spontanément le CKI ; elle ne déclare que les effets effectivement confirmés. Les formulaires existants restent une alternative utile, pas un deuxième moteur ou un passage obligé.

### 6.2 Matrice courte de non-régression (huit retests positifs + contrôles négatifs)

| Référence | Rejeu ciblé attendu | Contre-preuve obligatoire |
|---|---|---|
| **C-A / 01+02** | Formulation naturelle T01 → **un** `OPEN_CYCLE`, objectif exact ; puis sur autre projet, commande courte T02 → objectif non `.` | « Je me demande si nous devrions ouvrir », citation de commande, demande d'avis, double type ambigu → **zéro effet** |
| **C-B / 04** | Décision T04 → un `RECORD_DECISION`, objet utile et énoncé strictement métier | La consigne finale à Nora n'apparaît ni dans Journal ni dans formulaire de révision ; pas de décision pour simple suggestion |
| **C-C / 05** | Révision T05 → ancienne `REVISED`, nouvelle `APPLICABLE`, cible unique, cycle inchangé | Plusieurs cibles, vieille décision non applicable, changement hypothétique ou fondateur D5 → clarification/refus sans mutation |
| **C-D / 06** | Après application contrôlée, demande T10 → `LIFT_RESTRICTION` unique, aucune restriction active, cycle encore actif | Cible globale vs instance, plusieurs restrictions, acteur non autorisé, levée seulement interrogative → aucun effet indu |
| **C-E / 07** | Nora voit `restrictions_actives=aucune` dans une projection vérifiée après levée et confirme l'état | Projection indisponible/périmée → « non vérifié », jamais faux « aucune » ; historique intact |
| **C-F / 03** | Deux échanges naturels pendant CADRAGE puis CONCEPTION_FONCTIONNELLE → expertise pertinente sans mention CKI | Demande explicite d'inspection → provenance honnête ; aucune autorité/gate déduits du CKI |
| **C-G / 08** | GO T13 hors restriction → `CLOSE_CYCLE: APPLIED`, aucun cycle actif, zéro ouverture automatique | Question T12 → zéro effet ; clôture sous restriction T09 → refus `RESTRICTION` et cycle intact |
| **C-H / reprise** | Recharger, rejouer clé de tour / ACK perdu → une seule D6, contexte et historique persistés | Concurrent/stale, session croisée, panne provider après acte : aucune double exécution ni faux succès |

**Ordre de travail recommandé :** tests unitaires sur les **messages complets** transcrits ici → PG pour effets/autorité/reprise → E2E navigateur FAKE des parcours naturel + cockpit → candidat immuable + **micro-recette LIVE ciblée** par Morris sur RECETTE, après gate explicite. Ne pas appeler LIVE automatiquement dans des tests CI ni reproduire toute la campagne T01–T16.

### 6.3 Oracles d'autorité et invariants de sortie

- Seul un message **USER** authentifié, réellement sauvegardé et sans ambiguïté peut fonder l'acte ; la sortie de Nora, un document D4, une citation, un CKI ou un signal de contradiction Niveau A n'est jamais une autorisation.
- Ambiguïté = **clarification ciblée et zéro effet** ; aucune deuxième confirmation systématique lorsqu'un GO est clair, en conformité avec R2. Au plus un cycle `ACTIVE` par projet.
- D5/D6 restent atomiques en PostgreSQL pour les mutations internes, avec `expectedRevision`/contrôles de concurrence et `clientCommandKey` stable. `UNKNOWN` est distinct d'`APPLIED`/`REJECTED` et réconciliable par relecture durable ; aucune répétition à l'insu du Pilote.
- Une restriction `CYCLE_MUTATION` interdit les mutations de cycle dans sa portée ; une levée explicitement autorisée retire cette interdiction sans modifier automatiquement le cycle.
- Les historiques `APPLICABLE`, `REVISED`, `REVOKED`, `LIFT` ne sont ni écrasés ni rebaptisés sans contrôle. La **projection effective** fait foi sur la présence actuelle d'une restriction.
- Les diagnostics D3 et CKI n'accordent aucun droit Git/GitHub/Next ; pas d'évolution D7–D9 ni d'accès aux projets d'un autre Pilote.
- Un résultat de recette est lié à **SHA + build + schéma + lane**. `DETERMINISTIC PROVEN` ≠ `LIVE/REAL PROVEN` ≠ `ADOPTED`.

### 6.4 Dépendances, gates, exit et futur jalon

- **Entrée :** candidate Git à `ba831b25`, SEF v0.2, R2 D3/D5/D6, R3 parcours de révision, R4 §5.5, spécification ML3 et son code, ENV-01 et politique de versioning. Cursor vérifie tout cela au HEAD local avant de toucher au code. La Roadmap `main` peut être en retard sur ML3 : ne pas confondre son snapshot historique avec la candidate.
- **Version :** produit `0.0.0-dev` (métadonnée technique), `NO RELEASE`, `STABLE NOT AVAILABLE`. La correction n'attribue pas de version officielle ; classifier l'effet de compatibilité selon la politique produit, historiser le delivery.
- **ENV :** corriger en **DEV isolé**, ne pas altérer la **RECETTE ML3** figée ni les bases/volumes/sessions existants sans GO d'environnement. Rejouer en RECETTE seulement sur **nouveau SHA/build** et décision Morris distincte. Cookies cross-lane : réserve ENV-01 toujours ouverte.
- **Gate architecture :** si le correctif impose nouveau schéma, changement d'autorité D6, migration rétroactive de décisions, nouvelle source de vérité ou refonte de UX R3, **STOP et arbitrage Morris**. Les critères proposés ici ne modifient pas R2/SEF de façon implicite.
- **Gate Git :** commit local Cursor sous contrat autorisé et rapport complet ; **aucun push projet, PR, merge ou promotion** sans GO séparé. La publication du handoff de revue L3 sur branche dédiée, mono-fichier, relève de SFIA v2.6 et ne vaut pas push projet.
- **Sortie technique :** tests unitaires/PG/E2E applicables PASS, différences sans fuite d'autorité, diff/risques/compatibilité documentés, rapport de revue exploitable, source SHA. **Sortie utilisateur :** retest ciblé validé par Morris, avec captures/états, sans prétendre clore R6. Capacité suivante : reprise des livraisons Next après arbitrage de la correction et des autres réserves.

## 7. Orientation pour le macro-lot Cursor — contrat de consommation

L'exécutant doit lire **ce dossier en entier avant modification** et le confronter aux sources Git canoniques, au code et aux preuves. Ce dossier décrit **les incidents**, pas une architecture technique approuvée. La réponse attendue n'est pas « appliquer huit patches de regex » : c'est une chaîne de qualification, extraction, gouvernance et restitution cohérente, **avec tests négatifs et preuves**. Un seul macro-lot correctif code + tests + documentation as-built + revue ; pas de micro-cycles documentaires ni changement de baseline hors GO.

### Chemins Git à examiner (listes indicatives, non autorisation d'écriture)

- `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`
- `projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts`
- `projects/sfia-studio-next/web/src/components/PilotagePanel.tsx` (vérification de non-régression et état UX)
- `projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts`
- `projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts`
- `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts`
- `projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md`
- `projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

### Sources normatives / méthode (lecture seule)

- `projects/sfia-studio-next/governance/SEF.md` — v0.2 VALIDATED, autonomie et gates §10.
- `projects/sfia-studio-next/governance/roadmap.md` — R5 en cours, ML3 candidat non adopté, attention snapshot daté.
- `projects/sfia-studio-next/governance/decisions/` — décisions Morris applicables (dont R4 et trajectoire R5/ML3 si présentes).
- `projects/sfia-studio-next/governance/product-naming-conventions.md` — VALIDATED.
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` — ENV-01 VALIDATED.
- `projects/sfia-studio-next/governance/product-versioning.md` — VALIDATED.
- `projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md` — D3 R2.
- `projects/sfia-studio-next/conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md` — D5 R2.
- `projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` — D6 R2 ; règles GO naturel, clarification et HumanDecision.
- `projects/sfia-studio-next/architecture-technique/cadrage-r4.md` — §5.5 contrats D5/D6.
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` — **SFIA v2.6**.

## 8. État de décision et limites de cette restitution

**Morris a demandé** : un document de restitution complet ; traitement des huit anomalies dans un **macro-lot correctif intégré** ; puis **recette de correction ciblée**, et non une répétition des seize tests. Cela ne préjuge **ni le choix de tous les détails d'implémentation**, ni la sortie formelle de ML3, ni l'intégration Git/promotion.

**À vérifier par Cursor :** HEAD/worktree/branch réels, code effectivement servi en RECETTE, traces de qualification des cas T01/T05/T10/T13, résultat de lecture D4, effet exact sur conservation des réserves, tests d'accès multi-Pilotes et absence de régressions. Si un constat nécessite un changement de périmètre/autorité, **STOP**, ne pas inventer le GO.

**Verdict de restitution :** `RCT-02 COMPLETED BY USER / EIGHT REPORTED FINDINGS / CORRECTIVE DELIVERY AUTHORIZED IN PRINCIPLE / IMPLEMENTATION AND ACCEPTANCE NOT YET PROVEN`.