# SFIA Studio Next — Allocation cognitive adaptative, recherche WEB sécurisée et FinOps

## Contrat fonctionnel intégré — convergence transverse ML5

| Champ | Valeur |
|---|---|
| Version | 0.1 — 26 novembre 2026 |
| Statut | **CANDIDATE / DOCUMENTED — REVIEW MORRIS REQUIRED** |
| Autorité | Orientations Morris des 25–26/11 ; détails proposés par ChatGPT, à valider |
| Mandat | GO explicite Morris : étude, rédaction et publication de ce seul document candidat sur la branche documentaire ML5, **avant revue de contenu**, pour permettre cette revue sur Git |
| Portée Git | `mcleland147/sfia-workspace` ; `docs/next-ml5-uat-consolidation-20261124` ; base documentaire `c601efa188ba4a09bb9a688d79dd1cf4371cb914` |
| Main observé | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Référence technique | [Préflight P1–P9](https://github.com/mcleland147/sfia-workspace/blob/67ce2a6ebd1e68466bda8dd5b9108812125f153b/sfia-review-handoff/latest-chatgpt-review.md), blob `ced607b3df1ca0ec1417b8c76bd86cd03c442e66` |
| Dernier handoff observé | [Correctif typographie RECETTE](https://github.com/mcleland147/sfia-workspace/blob/77ee051d57fc68b930c274ec2547b791044f7887/sfia-review-handoff/latest-chatgpt-review.md), blob `54e37022b43fa63ce50135539173c047db9b64da` |
| UX | [Figma page 13](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305), validation visuelle Morris le 26/11 |
| État de trajectoire | R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED / NO RELEASE / NOT ADOPTED |

**Ce document est une proposition de contrat fonctionnel détaillé, publiée pour revue.** Sa publication n'est ni VALIDATED SPEC, ni décision d'architecture physique, ni changement de doctrine, ni GO Cursor. La validation du contenu candidat et l'autorisation de construction restent distinctes, conformément à SEF §10. Aucune modification normative de SEF, Roadmap, ADR ou document existant n'est effectuée par ce mandat. Les clauses formulées comme exigences ci-dessous décrivent la cible soumise à validation, sauf les orientations explicitement acquises. Les candidats de calibration ne sont jamais des performances constatées.

---

## 1. Finalité et place dans la trajectoire

Le résultat principal de ML5 demeure la chaîne **intention Pilote → investigation Nora → contrat Cursor spécifique et inspectable → HumanDecision D6 → réalisation D7 → résultats et preuves D8/D9 → avis Nora → continuité**. L'objectif de ce complément est de rendre la préparation et l'analyse cognitive de Nora plus efficientes, fiables, sourcées et observables ; les capacités sont transverses à Studio, pas réservées à Cursor.

L'emploi de Sol seul était une stratégie volontaire de construction et de qualification des capacités cognitives, pas une erreur de conception. Morris rapporte environ 40 USD dépensés sur deux jours d'essais intensifs ; aucune facture ni répartition vérifiée n'est disponible ici. Cette observation motive l'optimisation future, sans disqualifier les acquis. La référence Sol reste utile pour comparer des résultats reproductibles.

**Ordre des objectifs : qualité suffisante et opposable → adaptabilité → efficience globale (coût, temps, charge).** Réduire le coût d'un travail incorrect ou incomplet n'est pas un gain. L'optimisation porte sur le coût complet d'un résultat utile, tentatives et reprises comprises. Aucune économie en pourcentage n'est présumée.

### 1.1 Orientations Morris acquises en conversation

- Un seul macro-lot interne à ML5 : WEB sécurisé + allocation cognitive multi-modèles + FinOps, avant la reprise de la livraison 2. Aucun nouveau ML6.
- Nora qualifie sémantiquement les besoins ; un catalogue réel de ressources et un référentiel indicatif guident son jugement. Pas de regex, listes de mots-clés, scores métier ou moteur concurrent pour l'allocation.
- Une matrice suffisamment discriminante, mais non exhaustive et non contraignante : une préférence candidate par travail élémentaire, ses conditions et raisons d'escalade/désescalade. Nora peut s'en écarter lorsque le contexte le justifie.
- Qualification initiale de qualité ; ressource initiale économique si elle est adéquate, mais Sol reste possible si la calibration démontre un avantage significatif. Aucun sacrifice pour économiser quelques centimes.
- Changement dynamique du modèle ET de l'effort entre segments d'un même tour/travail ; même identité, acquis, restrictions et continuité.
- Tous les appels IA de Nora, visibles ou internes, doivent être observables pendant la construction et à l'usage ; FinOps est une capacité permanente, non un audit ponctuel de dépenses passées.
- Aucun plafond financier, crédit, rechargement, alerte de budget ou blocage en dollars à construire dans Studio à ce stade ; administration des dépenses conservée chez OpenAI. Limites techniques de conduite, sécurité, stagnation et reprise maintenues.
- Admission WEB option B : provenance publique et autorisation des données sortantes, intervention Pilote exceptionnelle lorsque nécessaire ; WEB LIVE reste bloqué jusqu'aux preuves et GO.
- Figma page 13 validée visuellement : rail, menu paramètres et six états tels que présentés ; simplicité, aucune extension UX arbitraire.

### 1.2 IN / OUT

IN : catalogue modèles/efforts/outils/tarifs ; référentiel cognitif ; qualification et réallocation dans D3 ; continuité ; mesures, attribution et coûts de tous les appels Nora ; restitution FinOps validée ; recherche et lecture WEB B1 sûres, sources et citations ; calibration et preuves intégrées ; synchronisation des sources applicables lors du futur delivery.

OUT : plafonds financiers internes, administration compte OpenAI, achats/rechargements, changement de fournisseur, Astra ou autre modèle hors trio initial, changement de poids/fine-tuning du modèle, politique auto-modifiée par Nora, agents cognitifs concurrents, second moteur de qualification, nouveau stockage autonome, broad redesign UX, administration des intégrations futures, dispatch Cursor et complétude de la livraison 2, qualification D8 indépendante, promotion STABLE/ADOPTED. Aucun appel facturable ou activation WEB LIVE dans le présent travail documentaire.

## 2. Sources, vérité et état de départ

Les sources suivantes ont été consultées au ref documentaire indiqué en tête, avec les constats récents lus à leur SHA de handoff :

| Source | Usage |
|---|---|
| [SEF](../governance/SEF.md) | §4 macro-lots ; §10 mandats ; primauté du résultat produit |
| [Roadmap](../governance/roadmap.md) | R5/ML5, séquencement et réserves |
| [Convention de nommage](../governance/product-naming-conventions.md) | Responsabilités durables |
| [Sortie R4](../governance/decisions/2026-11-04-r4-architecture-exit.md) | R4-01..04 et DATA-01 |
| [Décision SEM](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) | SEM-01..08 ; qualification Nora et admission Studio |
| [Contrat fonctionnel ML5](preparation-cognitive-et-realisation-technique-gouvernee.md) | §§1–7, 19–22 ; extension transverse et finalité intégratrice |
| [Conducteur cognitif et production Nora](../architecture-technique/conducteur-cognitif-et-production-nora.md) | §§6–8 ; allocation, continuité, frontière B1 |
| [Qualification architecture ML5](../architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md) | Axes A/B/C/D, écarts et dépendances |
| [Observabilité transverse](../architecture-technique/contrat-observabilite-transverse.md) | OBS-01..08, corrélation, usages, sécurité |
| [Allocation et FinOps — orientation](../construction/allocation-cognitive-adaptative-et-finops.md) | §§4–7 ; hypothèses initiales, mesure, calibration |
| [Revue post-C14](../construction/ml5-revue-approfondie-conformite-post-c14.md), [registre](../construction/ml5-registre-couverture-et-revue-developpement.md), [acceptation](../construction/contrat-acceptation-cognition-et-realisation-gouvernee.md) | Exigences existantes, risques P0, oracles CA/T/Q |
| [As-built ML5](../construction/ml5-as-built-cursor-realization.md) | Historique, limites D7/D8 |
| [UAT RoomBooking](../construction/recette-utilisateur-ml5-roombooking-20261125.md), [UAT InterventionTrack/StockTrack](../construction/recette-utilisateur-ml5-interventiontrack-20261125.md) | Corpus et non-régression D4 |
| [Méthode Figma–Cursor v1.1](../ux-ui/methodologie-contrat-figma-cursor.md), [transposition](../ux-ui/contrat-transposition-figma-code.md) | Contrat UX, extraction et preuve |

Le préflight rapporte : HEAD produit local `e3f5bde2` (docs après code `1633c86b`), tree web `e972dc04`, un seul conducteur D3 multi-segments, modèle Sol fixe, effort/profil adaptatifs, checkpoints PostgreSQL, `provider-usage` et `resources_json`, frontière WEB query-only et pin DNS pour open. WEB LIVE fail-closed ; admission métier incomplète, search réseau côté fournisseur, citations UI et confrontation non raccordées, usage worker insuffisamment attribué. Catalogue modèles et tarifs absents. Le dernier handoff rapporte RECETTE `8db4074c`, BUILD_ID `IiUs8iS6i7UR-1y3wwC6W`, correctif typographique borné, WEB LIVE=0 et enveloppe 2M/1M/120 inchangée. Code local/staged/untracked **NON OBSERVÉS directement par ChatGPT** ; les constats de code sont attribués au préflight, non réinspection du candidat local.

La Roadmap et le document d'orientation du 25/11 précèdent la réunion des trois capacités et l'abandon des plafonds financiers internes. Écart identifié, non corrigé dans ce mandat. Après validation, les synchroniser avec ce contrat et l'architecture/as-built dans le lot autorisé. La décision Git direct Cursor/auto-session DEV du 23/11 est référencée historiquement à `1e6929c543a88606488094be2f5dfe7fc34a0cb9`, blob `cc9af54b516ff0ed7a626ec46c7d2eef359cd30` ; présence locale à réconcilier, pas de réouverture de l'arbitrage ni de dépendance bloquante pour cette conception.

## 3. Catalogue de ressources — étude fournisseur au 26/11/2026

Sources publiques officielles consultées : [Luna](https://developers.openai.com/api/docs/models/gpt-6-luna), [Terra](https://developers.openai.com/api/docs/models/gpt-6.1-terra), [Sol](https://developers.openai.com/api/docs/models/gpt-6.2-sol), [catalogue modèles](https://developers.openai.com/api/docs/models), [sélection](https://developers.openai.com/api/docs/guides/model-selection), [tarification](https://developers.openai.com/api/docs/pricing), [deployment checklist](https://developers.openai.com/api/docs/guides/deployment-checklist). Données déclarées par OpenAI, non mesure Studio.

### 3.1 Capacités et compatibilité déclarées

| Ressource | Identifiant API | Efforts documentés | Contexte / sortie max | Positionnement candidat Studio |
|---|---|---|---|---|
| Luna | `gpt-6-luna` | none, low, medium (défaut), high, xhigh, max | 1 050 000 / 128 000 | Traitements focalisés, extraction, structuration, demandes maîtrisées |
| Terra | `gpt-6.1-terra` | none, low, medium (défaut), high, xhigh, max | 1 050 000 / 128 000 | Analyse contextualisée, synthèse et conception courante |
| Sol | `gpt-6.2-sol` | low, medium, high, xhigh, max ; none refusé | 1 050 000 / 128 000 ; max entrée déclaré 922 000 | Raisonnement exigeant, arbitrages, diagnostics et invariants complexes |

Les trois fiches annoncent entrées texte/image, sortie texte, streaming, function calling, structured outputs et outils WEB/File search, MCP et computer use via Responses API. Cela n'accorde aucun outil supplémentaire à Nora. Luna : avec Chat Completions le function calling est annoncé seulement en effort none ; Terra : tool calling requiert Responses API. Conserver le chemin Responses de l'adaptateur à qualifier ; aucun pivot Chat Completions. Un grand contexte ne garantit pas la compréhension, ni la disponibilité réelle de chaque token dans l'enveloppe de Studio. Pas de nouveau traitement audio/vidéo ou génération d'image dans ce lot. Les appellations multi-modèles ne désignent pas une extension multimodale produit.

Le fournisseur annonce d'autres familles dont Astra ; hors scope initial, ne pas les introduire dans le catalogue admissible de Nora sans arbitrage. La qualité relative sur les missions Studio n'est pas démontrée par le positionnement commercial. Aucun classement absolu par effort. Tester notamment Luna high/xhigh vs Terra medium, Terra high vs Sol medium sur les travaux qui le justifient ; max uniquement si bénéfice démontré. Aucun changement de poids du modèle.

### 3.2 Tarifs de référence (USD par million de tokens, Standard, contexte court)

| Modèle | Entrée non cachée | Entrée lue en cache | Sortie (raisonnement inclus lorsqu'il est compté comme sortie) | Écriture cache 30 min | Écriture cache 12 h |
|---|---:|---:|---:|---:|---:|
| gpt-6-luna | 0,10 | 0,01 | 0,50 | 0,125 | À confirmer pour Standard applicable |
| gpt-6.1-terra | 1,00 | 0,05 | 5,00 | 1,25 | 2,50 |
| gpt-6.2-sol | 2,00 | 0,10 | 10,00 | 2,50 | 5,00 |

Les fiches des trois modèles indiquent qu'au-delà de 272 000 tokens d'entrée **sur une requête**, les tarifs entrée/cache sont doublés et la sortie est multipliée par 1,5 pour la requête entière. Ne pas appliquer ce palier à un total de travail multi-requêtes. Prix régionaux, service tier, durée cache et modes spécifiques modifient les tarifs ; vérifier le mode effectivement employé, ne pas présumer Fast, Batch, Flex, background ou région. OpenAI WEB search : 10 USD / 1 000 appels + tokens de contenu de recherche aux tarifs du modèle (cf. pricing, outil exact à identifier ; preview peut avoir d'autres conditions). Ne pas compter le même contenu de recherche deux fois. Tarifs consultés, date d'effet fournisseur à confirmer si non explicitement publiée ; pas de rétroactivité implicite.

À volume de tokens identique en Standard court, Luna a un coût entrée/sortie de 1/20 de Sol, Terra 1/2 ; cache et modes peuvent modifier les ratios. Effort élevé peut consommer plus de tokens de raisonnement ; prix unitaire ne prédit donc pas coût ni qualité complète. Les tarifs restent une observation datée et versionnable, pas une promesse commerciale.

### 3.3 Étude statique du SDK réellement rapporté

Le préflight P4 rapporte `@openai/agents@0.21.0`, `@openai/agents-openai@0.21.0`, `openai@7.50.0` verrouillés. Référence amont [release 0.21.0](https://github.com/openai/openai-agents-js/releases/tag/%40openai%2Fagents%400.21.0), commit amont `304e436` :
- [model.ts](https://github.com/openai/openai-agents-js/blob/304e436/packages/agents-core/src/model.ts), blob `e08e4e6c609f71013452ba9f02487434e2872e83` : lignes 27–56 union d'efforts dont xhigh/max, reasoning settings ; preserveRawUsage ligne 418.
- [openaiResponsesModel.ts](https://github.com/openai/openai-agents-js/blob/304e436/packages/agents-openai/src/openaiResponsesModel.ts), blob `5cb77d61cfad6f41a747b3293b56f82e3248e17f` : 1732–1756 fusion reasoning avec providerData (ce dernier peut surcharger) et format de sortie ; 1572–1618 usage par réponse et détails, requestUsageEntries ; 1893–1940 et 2073+ préservation optionnelle usage brut.
- [usage.ts](https://github.com/openai/openai-agents-js/blob/304e436/packages/agents-core/src/usage.ts), blob `3159c4c431042f319ac2ad3c40d1ec65b610f80b` : Usage 95–160, requestUsageEntries et valeurs par défaut.

La présence des types et du passage des paramètres établit la **faisabilité statique candidate**, non la disponibilité sur le compte API, l'interopérabilité avec chaque outil ni le comportement runtime. Vérifier package-lock et types du client OpenAI effectivement installés, modèles/efforts acceptés, sortie structurée stricte, streaming, tool calls et retours, compaction/réutilisation de contexte, paramètres finaux après surcharges, erreurs et usage brut. L'usage normalisé du SDK peut synthétiser des zéros en l'absence de usage fournisseur : préserver l'information de présence et l'absence de donnée avant normalisation. Pas d'upgrade de SDK par défaut. Si une incompatibilité réelle impose une mise à jour, qualifier blast radius, décision et non-régression avant mutation. Aucun appel API effectué dans cette étude ; compte, tiers, limites et capacité LIVE = NON OBSERVÉS.

### 3.4 Contrat du catalogue

Chaque entrée admissible décrit : identifiant fournisseur exact/alias/version ou snapshot observable, état de disponibilité documentée et effectivement qualifiée, efforts possibles/qualifiés, API, limites contexte/sortie, capacités nécessaires (tools, structured outputs, streaming), restrictions de données, tarifs versionnés, résultats de calibration par usage, date/source et politique de retrait. Les modèles demandés et réellement appliqués sont distincts. Le catalogue doit rester compact dans le contexte et être accessible à Nora au besoin ; un seul référentiel versionné, pas recopie divergente. L'information tarifaire ne donne aucun droit d'accès ni autorisation métier. Le serveur ne peut admettre que les couples réellement autorisés et compatibles ; candidat non testé accessible uniquement dans une calibration autorisée DEV.

## 4. Référentiel cognitif indicatif — première matrice

La nature d'une tâche ne suffit pas à sélectionner les moyens. Nora évalue sémantiquement : complexité intellectuelle, ambiguïté, interdépendance, criticité, charge informationnelle et exigences de restitution. Pas de score numérique, règle lexicale, classement automatique par volume ou obligation d'escalader par paliers. Un fichier long peut être simple à extraire, une question courte peut être très complexe. Les opérations déterministes (lister fichiers, comparer SHA, calculer coût) relèvent de Studio sans appel IA si aucun jugement n'est nécessaire.

La matrice ci-dessous est une **guidance cognitive candidate** (préférence par ligne, conditions et repli), pas un mapping runtime, ni une liste fermée de tâches, ni une validation de performances. L/M/H/XH = low/medium/high/xhigh. Les couples cités restent candidats avant preuve. Pour chaque ligne, le niveau de qualité décrit l'oracle minimal ; la raison d'escalade porte sur le travail restant, pas le mot-clé. Une difficulté plus faible peut justifier la désescalade inverse. Un modèle supérieur déjà chargé du contexte peut être conservé si un changement est moins efficient.

### 4.1 Compréhension, conversation et organisation

| Travail élémentaire | Préférence candidate | Qualité attendue / signal d'escalade |
|---|---|---|
| Salutation ou réponse factuelle déjà acquise | Luna L | Réponse exacte sans orchestration ; ambiguïté utile → Luna M |
| Reformuler une demande claire | Luna L | Fidélité et conservation des contraintes ; plusieurs intentions → Terra M |
| Extraire paramètres explicitement fournis | Luna M | Exhaustivité, pas d'invention ; ambiguïté déterminante → Terra M |
| Qualification simple à partir du contexte | Luna M | Objectif, contraintes et résultat corrects ; incertitude conséquente → Terra M |
| Qualification multi-intentions, dépendances courantes | Terra M | Intentions distinctes, ordre et droits ; contradiction structurante → Sol M |
| Qualification d'une demande critique/ambiguë à fort impact | Sol M | Ambiguïtés et risques essentiels identifiés ; difficulté persistante → Sol H |
| Construire plan d'investigation ciblé | Terra M | Questions déterminantes et sources pertinentes ; dépendances complexes → Sol M |
| Identifier manque d'information et demander clarification | Terra M | Question utile, ne pas redemander l'acquis ; ambiguïté à fort risque → Sol M |
| Restituer un résultat déjà qualifié | Luna M | Pas de perte de réserve ni changement de sens ; synthèse nouvelle → Terra M |

### 4.2 Documentation, connaissance et Git

| Travail élémentaire | Préférence candidate | Qualité attendue / signal d'escalade |
|---|---|---|
| Inventorier un périmètre de fichiers connu | Luna L | Couverture et références ; périmètre sémantique incertain → Terra M |
| Rechercher une référence ou passage connu | Luna L | Référence exacte ; ambiguïté d'identité → Luna M |
| Lire une source et extraire faits explicites | Luna M | Citations, versions, distinction fait/hypothèse ; interprétation → Terra M |
| Identifier une version/branche applicable à partir de règles connues | Luna M | Référence exacte ; hiérarchie conflictuelle → Terra H |
| Extraire contraintes d'un corpus cohérent | Luna M | Couverture, pas de faux CONSULTED ; contraintes interdépendantes → Terra M |
| Synthétiser plusieurs documents cohérents | Terra M | Fidélité, références, pas d'omission ; complexité transverse → Terra H |
| Confronter versions ou exigences contradictoires | Terra H | Contradictions substantielles et provenance ; contradiction structurante → Sol H |
| Reconstruire une trajectoire multi-sources | Terra H | Historique et états distincts ; arbitrage complexe → Sol M |
| Réconcilier vision, décisions, spécifications et réalité | Sol H | Impacts, autorité, limites probatoires ; effort supérieur seulement si utile |
| Capitaliser une connaissance explicitement établie | Luna M | Provenance, portée et statut conservés ; qualification nouvelle → Terra M |

### 4.3 Recherche WEB

| Travail élémentaire | Préférence candidate | Qualité attendue / signal d'escalade |
|---|---|---|
| Retrouver une information publique précise | Luna L | Résultat source-backed ; recherche ambiguë → Luna M |
| Sélectionner une documentation officielle applicable | Luna M | Date/version/éditeur corrects ; variantes conflictuelles → Terra M |
| Extraire des faits d'une page réellement lue | Luna M | Citation et couverture honnêtes ; interprétation spécialisée → Terra M |
| Inventorier caractéristiques de plusieurs solutions | Luna M | Données comparables, inconnues visibles ; comparaison contextualisée → Terra M |
| Comparer solutions selon critères explicites | Terra M | Critères, compromis, limites ; forte interdépendance → Terra H |
| Vérifier fraîcheur/applicabilité face à divergences | Terra H | Confrontation dates, versions et sources ; contradiction critique → Sol H |
| Évaluer compatibilité d'une solution externe avec architecture privée | Sol M | Raisonnement intégré dans D3 sans fuite ; interdépendances non résolues → Sol H |
| Résoudre contradiction WEB déterminante pour un contrat critique | Sol H | Justification sourcée, incertitude explicite ; aucun effort ne remplace source manquante |
| Reformuler une recherche en termes publics | Luna M | Utiliser uniquement données admises ; si provenance incertaine → refus/reformulation/autorisation, pas escalade de modèle comme barrière |

Le worker WEB exécute une tâche publique bornée ; il n'hérite jamais du contexte privé ni de l'autorité D3. Son modèle peut différer du modèle conducteur et relève d'une qualification distincte (Luna M candidat pour requête focalisée si outil compatible). Le contrat d'admission reste opposable quel que soit le modèle.

### 4.4 Code, architecture et contrat de réalisation

| Travail élémentaire | Préférence candidate | Qualité attendue / signal d'escalade |
|---|---|---|
| Repérer chemins/symboles pertinents | Luna M | Identités réelles ; responsabilité non évidente → Terra M |
| Comprendre une fonction isolée | Terra L | Entrées/sorties/erreurs ; dépendances → Terra M |
| Reconstituer un flux applicatif | Terra M | Étapes, propriétaires et contrats ; concurrence → Terra H |
| Identifier blast radius local | Terra M | Impacts et tests ; dépendances transverses → Terra H |
| Analyser tests et assertions existants | Terra M | Preuve vs déclaration ; oracle ambigu → Terra H |
| Comparer code et conception | Terra H | Écart exact, preuve et portée ; contradiction critique → Sol H |
| Diagnostiquer anomalie systémique/concurrence | Sol H | Causes étayées, alternatives, invariants ; ne pas inventer de preuve |
| Concevoir une évolution locale stabilisée | Terra H | Contrat, erreurs, reprise, tests ; pivot structurant → Sol H |
| Préparer contrat Cursor sur conception stabilisée | Terra H | Instruction complète, sources, IN/OUT, gates ; arbitrage critique → Sol H |
| Examiner sécurité/autorité/persistance d'un contrat critique | Sol M | Invariants, permissions, concurrence ; contradiction résiduelle → Sol H |
| Mettre en forme un contrat déjà qualifié | Luna M | Préserver intégralité et sémantique ; changement de fond → Terra H |

### 4.5 Production, pilotage et opérations internes

| Travail élémentaire | Préférence candidate | Qualité attendue / signal d'escalade |
|---|---|---|
| Correction rédactionnelle ou formatage | Luna L | Aucune modification non demandée ; ambiguïté → Luna M |
| Révision ciblée de faits déjà qualifiés | Luna M | Diff exact, reste préservé ; conséquences croisées → Terra M |
| Rédiger à partir d'acquis consolidés | Luna M | Exhaustivité et citations ; synthèse analytique nouvelle → Terra M |
| Produire une conception fonctionnelle | Terra H | Cohérence, cas négatifs, qualité ; arbitrage structurant → Sol H |
| Résumer un avancement technique factuel | Luna M | Statuts et provenance exacts ; divergences → Terra M |
| Proposer mise à jour de trajectoire | Terra M | Dépendances, état, suite ; risque de promotion ou contradiction critique → Sol M |
| Préparer un arbitrage et ses options | Terra H | Options, impacts, réserves ; choix architecture/sécurité complexe → Sol H |
| Analyser dossier de réalisation Cursor | Terra H | Critères, preuves, lacunes ; contradiction critique → Sol H |
| Consolider une restitution déjà analysée | Luna M | Avis consultatif intact et réserves visibles ; analyse nouvelle → Terra M |
| Contrôler continuité d'une production/reprise | Terra M | Version, acquis, autorité ; incohérence structurelle → Sol M |
| Extraire métadonnées d'observabilité et expliquer un coût | Luna M | Mesures exactes et UNKNOWN ; diagnostic multi-causes → Terra M |
| Comparer politiques cognitives sur corpus qualifié | Terra H | Qualité/coût/latence comparables ; biais ou résultats ambigus → Sol M |

Ces lignes couvrent les principales familles sans prétendre recenser toutes les situations futures. Les opérations internes doivent suivre les mêmes principes, sans permission implicite de modifier trajectoire, document ou effet. Le référentiel n'est pas un système de routage parallèle : Nora peut expliquer brièvement pourquoi une autre allocation est plus adéquate, et la calibration permet de réviser les préférences. Les motifs sont des observations fonctionnelles, pas de chaîne de pensée privée.

## 5. Contrat d'allocation dans D3

### 5.1 Responsabilités

| Responsable | Contrat |
|---|---|
| Nora / D3 | Comprend, qualifie, organise, identifie le besoin cognitif, propose modèle/effort et réévalue la stratégie |
| Catalogue de ressources | Capacités, compatibilité, tarifs et guidance de calibration, versionnés |
| Studio / conducteur existant | Admet la ressource, contrôle droits, limites techniques, forme, scope, garde-fous, continuité ; applique le choix admissible |
| Adaptateur fournisseur | Demande les paramètres exacts, collecte le modèle/effort réellement observable, erreurs et usage |
| D4/D5/D6/D7/D8/D9 | Conservent leurs vérités, autorités et effets ; aucune permission induite par une allocation |
| Pilote | Décisions métier et autorisations requises ; pas de validation manuelle de chaque changement de modèle |
| Morris | Valide la politique de référence, les ressources admissibles et gates produit |

### 5.2 Qualification initiale

La sélection du premier modèle précède nécessairement le jugement de Nora. Cible : **ressource initiale calibrée et qualification intégrée au premier segment**. Ne pas imposer un appel de classification dédié sur tout échange. Pour une demande simple correctement qualifiée et directement réalisable, traiter dans le même segment. Pour une demande nécessitant un travail plus profond, produire une stratégie et proposer les moyens de continuation avant les étapes critiques.

Comparer initialement Luna M, Terra M et Sol M (Sol = référence opérationnelle historique, non oracle de vérité). Terra M est hypothèse de démarrage équilibrée, non décision définitive. Si Luna présente une qualité suffisante sur l'ensemble des cas qu'elle doit recevoir, elle peut devenir ressource initiale ; si Terra ne suffit pas, conserver Sol ou effort supérieur réellement utile. Examiner spécifiquement les erreurs silencieuses, l'incapacité d'un modèle économique à reconnaître une difficulté et les conséquences d'une mauvaise qualification. Ne pas sélectionner uniquement sur auto-évaluation/confidence. Réutiliser la qualification structurée existante et les informations du travail repris ; aucun second classifieur sémantique permanent.

Sortie conceptuelle de qualification (pas schéma physique imposé) : objectif/résultat, intentions, contraintes et restrictions, ambiguïtés déterminantes, questions et sources utiles, difficulté et capacités nécessaires, stratégie, ressource proposée pour étape suivante, justification fonctionnelle concise et conditions d'approfondissement. Si ambiguïté à risque ou source/autorisation indispensable manque, clarification ou suspension honnête. L'admission serveur ne juge pas intellectuellement le sens de la demande.

### 5.3 Sélection et réallocation

1. Résoudre contexte, identité, portée et droits via mécanismes existants.
2. Sélectionner une ressource initiale admissible ou réutiliser la politique du travail repris.
3. Nora qualifie, accomplit les actions proportionnées et consolide les acquis.
4. Au point de continuation, Nora propose de conserver, escalader ou désescalader modèle et/ou effort sur la base du besoin restant. Le serveur vérifie compatibilité et restrictions, sans routage lexical.
5. Après checkpoint durable et contrôle d'ownership, appliquer la ressource au segment suivant et journaliser la transition ; aucune substitution à l'intérieur d'une requête en vol.
6. Réévaluer si information nouvelle, contradiction, difficulté résolue, capacité indisponible, stagnation ou risque. Ne pas déclencher des appels de vérification systématiques sans valeur informationnelle.

Escalade : capacité manquante, difficulté démontrée, ambiguïté critique, contradictions, insuffisance de couverture ou de résultat malgré les moyens pertinents. Désescalade : question résolue, étape restante de nature plus simple, restitution d'acquis établis. Un changement inutile peut coûter du contexte/cache/latence et dégrader la continuité ; conserver le modèle si plus approprié. Pas d'aller-retour automatique, pas de retry aveugle, pas de fallback lexical. Si couple refusé/incompatible/indisponible, sélectionner une alternative **qualifiée et compatible** en conservant le mandat, tracer le refus ; si aucune alternative appropriée, suspendre/partiel. Ne jamais transformer un échec en réussite.

Un tour peut mobiliser plusieurs segments et chaque segment plusieurs requêtes fournisseur. Exemple indicatif : Terra M qualification → Luna M extraction Git → Terra H comparaison → Sol H résolution d'une contradiction → Luna M restitution d'acquis. Ce n'est ni un workflow imposé, ni un nombre minimal de segments, ni une répartition de coût. La ressource peut changer plusieurs fois dans un même tour ; un travail peut continuer sur plusieurs tours. Les opérations internes utilisent le même socle d'allocation/observation, même quand aucun tour conversationnel n'existe ; adapter la corrélation, ne pas inventer de tour.

### 5.4 Continuité et limites

Conserver `workId`, identité/objectif et version, scope, questions déterminantes, faits sourcés/versions/couverture, restrictions, références d'autorité, contradictions, acquis intermédiaires, production partielle, état et ressources cumulées. Le checkpoint transporte des acquis exploitables, pas un transfert supposé de reasoning items privés entre modèles. Ne pas réintroduire une relecture exhaustive ni reconstruire un état à partir d'une réponse utilisateur tronquée. Respecter CAS/fence, idempotence, écriture unique, reprise et provenance ; pas de transaction durable ouverte pendant un appel fournisseur. Révision D4 : APPEND au sein d'une même production logique, SUPERSEDE entre productions, candidat unique et conservation explicite, V1 historique/V2 courante après conservation. IT-06 accepté uniquement sur parcours testé : réutiliser comme oracle de non-régression.

Limites techniques existantes rapportées : 1 M tokens réévaluation, 2 M plafond administratif de ressources, 120 segments, limites de segment et stagnation. Ne pas les assimiler à des plafonds financiers. Préserver ces limites dans ce lot sauf arbitrage technique distinct ; vérifier la définition exacte du compteur et traiter le gap préflight « cache hors envelope » : cache est sous-ensemble de l'entrée et ne doit pas être soustrait du volume de sécurité uniquement parce que son prix est réduit. Aucun double compte du cache/raisonnement, aucun reset au changement de modèle. Si une limite globale est réellement atteinte, état partiel/suspendu, acquis sauvegardés et reprise conforme. Pas de nouvelle protection monétaire, ni d'arrêt sur coût estimé.

### 5.5 Ancrage technique candidat

Réutiliser `run-nora-cognitive-turn.ts`, `cognitive-conductor.ts` / `runCognitiveConductor`, `cognitive-policy.ts` / `buildCognitivePolicy`, `resolvePolicy`, `nora-adapter.ts` / `generateNoraReply`, `cognitive-work.ts`, checkpoints et `provider-usage.ts` du préflight. Le défaut actuel est Sol analyse/medium, modèle fixe ; extension du modèle à une frontière déjà existante, pas nouveau conducteur. Vérifier la signature et le code réellement courant avant construction. Les choix physiques de structure, relations, API, migrations et compatibilité seront définis dans la conception technique, pas imposés par ce document.

## 6. Recherche WEB sécurisée — option B

### 6.1 Résultat fonctionnel

Nora mobilise des sources WEB publiques lorsqu'elles apportent une valeur utile à la demande. Elle choisit les recherches, explore les sources, ouvre et lit progressivement, confronte sémantiquement dates/versions/contradictions, et cite ce qui étaye réellement ses conclusions. Capacité transverse sas, projet, documents, analyse, contrat Cursor et bilan. Ne pas rechercher systématiquement ni créer crawler ou moteur autonome parallèle. Si source inaccessible, partielle ou contradictoire, le résultat est honnête et Nora poursuit si utile et permis.

### 6.2 Admission et frontière de confiance

Maintenir B1 : Nora privée et worker public query-only ; aucun hosted webSearchTool directement disponible à Nora privée. L'autorisation porte sur le payload sortant exact (requête, URL/paramètres, métadonnées pertinentes) et son origine, non une autorisation générique Internet. Les données admissibles doivent être publiques avec provenance contrôlable, ou explicitement autorisées à la divulgation exacte par le Pilote habilité lorsque cela est permis par les règles de sécurité ; les secrets et données à interdiction non dérogeable restent interdits. La combinaison de faits publics peut révéler une information privée. Un modèle ne peut pas s'auto-certifier la provenance de sa sortie libre. Un registre rempli à partir de `proposedPublicQuery` ou d'une affirmation de Nora sans preuve indépendante n'établit pas l'autorisation.

Cible : construire la requête à partir d'éléments publics admis et d'une transformation dont le périmètre est contrôlé ; la forme précise du contrat de provenance et du mécanisme de construction doit être conçue et prouvée avant activation. Si la provenance est insuffisante, reformulation sur données admises ; à défaut, revue humaine exceptionnelle de la requête exacte, dans le scope, ou blocage. Aucune approbation par défaut ni validation humaine systématique sur toute recherche. L'egress est fail-closed. Sanitize, regex, instructions et filtre IA sont des aides complémentaires, jamais barrière suffisante. Interdiction d'envoyer le contexte privé, historique, secrets, extraits Git privés, IDs internes ou diagnostics à la frontière publique. Logs minimisés, refus redacted, aucun secret.

Retour WEB = contenu non fiable ; aucune instruction récupérée ne peut modifier politique, permissions, outil, décision ou exécuter un effet. Nora traite le contenu comme source, et la confrontation se fait dans D3 avec les droits existants. Aucune injection de contexte privé dans le worker ; pas de copie brute systématique.

### 6.3 Sécurité réseau et lecture

Conserver et qualifier les contrôles open existants : HTTPS, ports/protocoles autorisés, DNS résolution et pinning de destination réellement contactée, refus loopback/private/link-local/metadata, credentials URL, DNS rebinding, redirections non suivies, taille et timeout **sur headers et corps complet**, types et erreurs. Search hébergé a une frontière réseau sous responsabilité du fournisseur : examiner les garanties documentées, limites et preuves ; un proxy local ne contrôle pas les requêtes internes du moteur hébergé. Ne pas accepter le risque résiduel par défaut ; si garanties insuffisantes, blocage du chemin et arbitrage avant alternative. Pas de nouveau fournisseur ou service réseau par inertie.

États distincts : DISCOVERED, PAGE_OPENED, lecture partielle, lecture utile/consultée (plage et couverture réelles), vérification de fait par confrontation lorsque justifiée. Une URL découverte ou un extrait n'est pas une preuve de lecture intégrale. Compléter profondeur, extraction progressive, couverture et citations cliquables, prise en charge des types nécessaires (PDF et find-in-page à qualifier, signaler indisponible si non supporté), gestion des sources obsolètes, erreurs et timeouts. Ne pas raccorder aveuglément `confrontWebSources` si elle implémente une décision lexicale de fond. Réutiliser journal source et acquis D3, préserver distinction sources uniques/consultations et absence de doublon d'activité. Les citations renvoient vers des références exactes admises ; ne pas inventer des citations ni convertir une source citée en source vérifiée.

### 6.4 Gate WEB et risques

B01–B09, P0-03, CA-02 et T11/Q19–23 du contrat d'acceptation existant restent opposables. Préflight statique : B01–B08 partiels, B09 implémenté rapporté mais LIVE gated ; sécurité positive NON PROVEN. Tests négatifs de requêtes privées (marquées et non marquées), combinaison de faits, URL et logs, redirections/DNS/SSRF, taille/corps/timeouts, contenu injecté et permissions. Cas nominaux publics en DEV uniquement sous GO facturable/WEB spécifique, puis cas mixte fictif/privé autorisé uniquement après fermeture de la frontière et décision Morris. Ne jamais transmettre de vraies données privées à titre de test. WEB LIVE reste bloqué jusqu'aux preuves et autorisations. Les résultats statiques et fixtures ne valent pas qualification LIVE.

## 7. FinOps — observation continue, pas contrôle de crédit

### 7.1 Résultat et couverture

Une seule comptabilité durable, fondée sur les usages effectivement observés, avec deux projections : exploitation technique DEV/RECETTE pour calibrer le produit, consultation habilitée du Pilote via paramètres. Tous les appels IA de Nora comptent, même ceux non visibles en conversation : sas, qualification, investigations, lectures, production/revision, trajectoire, opérations internes déclenchées par événements autorisés, reprise, synthèse, contrôle, préparation et revue Cursor, worker WEB, tentatives, erreurs, interruptions et retries. Le coût de réalisation Cursor lui-même (compte/licence distincte) n'est pas réputé mesuré par la comptabilité OpenAI Nora. Les coûts non observés sont signalés ; ne pas inventer le prix d'un appel ou d'un outil.

Collecte au niveau le plus fin effectivement disponible (requête/tentative fournisseur ; agrégat de génération uniquement si précision indisponible). Utiliser `provider-usage`, requestUsageEntries et rawUsage lorsque compatibles ; `resources_json` pour ressources cumulées du conducteur. Préserver la distinction usage opérationnel D3 et comptabilité financière ; ne pas additionner des agrégats et leurs enfants. Attribuer le worker WEB à la mission d'origine et distinguer usage de recherche, tokens de contenu et frais d'outil. Une lecture Git sans appel modèle ne devient pas un appel OpenAI. Aucun appel invisible ne doit disparaître silencieusement du périmètre ; couverture et lacunes explicites.

### 7.2 Contrat d'observation et d'attribution

| Famille | Informations attendues (si observables) |
|---|---|
| Identité | Lane réelle, Pilote/scope habilité, projet ou préparation, conversation facultative, workId, tour facultatif, segment, génération, opération/causalité, tentative, ID requête/réponse fournisseur quand disponible |
| Ressources | Fournisseur, modèle demandé/appliqué distincts, alias/version/snapshot si observable, effort demandé/appliqué distincts, tier, outil et paramètres significatifs non sensibles |
| Travail | Famille de travail qualifiée par Nora si connue, opération propriétaire, motif fonctionnel succinct de maintien/changement, chronologie, statut, politique/version |
| Usage | Entrée totale, cache read/write si disponible, sortie totale, raisonnement si exposé, total, requêtes, appels d'outil et mode, durée/latence, erreurs et retries |
| Finance | Devise, tarif versionné, palier et unités, coût estimé par catégorie, agrégat et couverture, rapprochement/facturation uniquement avec source autorisée |
| Provenance | Date UTC, SHA/build/lane observés, source de mesure, état MEASURED/ESTIMATED/UNKNOWN, version de contrat de collecte |

Pas d'invention d'identité de requête distante ; une clé locale idempotente et une référence fournisseur si disponible doivent être distinguées. Retries effectifs différents = tentatives distinctes, replay de même événement = pas de double comptage ; réception tardive enrichit l'observation avec provenance sans effacer une estimation historique. Crash entre appel et persistance : usage incertain marqué UNKNOWN, réconciliation autorisée, pas de relance aveugle. Requêtes in-flight, usage absent, modèle appliqué UNVERIFIED et effort non exposé restent explicitement inconnus. Pas de faux zéro issu d'un défaut SDK. Aucun taux de couverture basé sur un dénominateur inventé ; si total des tentatives non observable, indiquer couverture indéterminée.

### 7.3 Calcul et historique

À condition que le fournisseur déclare cached read comme sous-ensemble de l'entrée, coût entrée = (entrée non cachée × tarif entrée + cached read × tarif cache) / 1 000 000, en séparant les éventuelles écritures cache facturables conformément à la sémantique effectivement exposée. Coût sortie = sortie totale × tarif sortie / 1 000 000 (raisonnement déjà inclus si tel est le contrat fournisseur). Ajouter frais outils et autres postes connus exactement une fois. Appliquer palier contexte et tier **par requête** ; si données insuffisantes, ne pas fabriquer de montant précis. Si seul un agrégat est disponible, indiquer limite d'estimation (notamment palier par requête). Ne pas soustraire cache du compteur total ni ajouter raisonnement deux fois. Conserver décimales suffisantes, arrondi à l'affichage. Coût connu partiel + inconnues visibles, pas total prétendument exhaustif.

Le référentiel tarifaire versionné contient source, date d'observation, date d'effet confirmée ou inconnue, devise, unité, modèle/version, tier/zone, longueur de contexte, read/write cache et frais d'outils. Une estimation conserve sa version ; un nouveau tarif ne réécrit pas silencieusement le passé. Distinguer estimation Studio, rapprochement avec usage fournisseur et facture réelle ; aucune collecte de données financières externes non autorisée ni second registre de facturation. Pas de rétro-estimation automatique des traces anciennes incomplètes. Aucune limite monétaire, alerte de budget, gestion de solde ou rechargement dans Studio.

### 7.4 Exploitation et amélioration continue

Un seul socle PostgreSQL avec attribution et agrégation dérivée ; choix physique table/extension à instruire (une table d'événements durable peut être justifiée, pas deuxième base). Les traces OBS complètent, ne constituent pas une seconde vérité. Les coûts par travail, modèle, effort, type d'opération et environnement permettent d'étudier les allocations, volume d'entrée, cache, reprises et qualité. Préserver DATA-01, contrôle d'accès, isolation lanes et minimisation. Ne pas journaliser prompts intégraux, secrets, chaînes de pensée ou documents privés superflus. Un Pilote ne voit que son scope autorisé ; une opération interne sans projet doit rester attribuable sans projet fictif. L'absence de mesure ne change pas la vérité métier ; dégradation explicite.

Indicateurs : coût total estimé par période, usages (entrée/cache/sortie/raisonnement lorsque fourni), requêtes, travaux aboutis, coût global / travaux aboutis (incluant tentatives non abouties, à périmètre identique), répartition des modèles, détails par segment, couverture mesure. Distinguer **coût d'un travail individuel** de **coût global divisé par nombre de travaux aboutis** ; si aucun aboutissement, ratio indisponible. Qualité et durée sont analysées en parallèle. Un modèle économique qui multiplie les erreurs et relances peut être plus coûteux. Ne pas optimiser sur volume seul.

Boucle humaine gouvernée : utiliser → mesurer → comparer qualité/coût/latence sur corpus comparable → ajuster version de la politique ou guidance sous décision → requalifier ciblé. Nora adapte ses ressources pendant le travail ; elle ne modifie pas seule la politique globale, ni le catalogue/prix/permissions. Ce fine-tuning opérationnel ne signifie pas entraînement des poids.

## 8. UX FinOps — référence validée, périmètre simple

[Fichier Figma existant, page 13](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305), six frames 1680×970 et rail personnel 246px, Inter, variables natives et Auto Layout, composants réutilisables. Validation visuelle Morris : **ni plus ni moins** que la cible présentée ; aucun nouveau cockpit, écran de budget, administration fournisseur ou console technique dans le parcours Pilote.

| Frame | Référence | Contrat visible |
|---|---|---|
| 13.01 Intégrations, paramètres fermés | [1334:158](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1334-158) | Route Intégrations existante, engrenage en bas du rail |
| 13.02 Intégrations, menu et survol | [1334:232](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1334-232) | Menu compact icônes prise et graphique ; infobulle Consommation et coûts |
| 13.03 Consommation et coûts, synthèse | [1334:321](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1334-321) | Période/projet/modèle, coût/tokens/travaux/couverture, évolution, répartition et travaux récents |
| 13.04 Menu et état actif | [1334:507](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1334-507) | État sélectionné sans duplication de navigation |
| 13.05 Inspection d'un travail | [1334:706](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1334-706) | Retour, KPI et chronologie segments, modèle/effort/tokens/coûts |
| 13.06 Aucune consommation | [1334:810](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1334-810) | Absence de mesure honnête, pas zéro fictif |

Comportement : remplacer chevron du pied du rail personnel par engrenage, clic ouvre le menu icônes uniquement ; prise = Intégrations (route existante, GitHub inchangé), graphique = Consommation et coûts ; infobulle après environ 1 seconde de survol, nom accessible immédiatement au focus, fermeture après sélection/clic extérieur/Échap, focus visible/restauré, état actif identifiable. Supprimer l'entrée redondante Intégrations haute selon la maquette validée, sans changer les variantes projet/conversation/inspection du rail ni leurs responsabilités. Les futures intégrations Figma/Canva ne sont pas dans ce lot. Éléments non illustrés (chargement, erreur, droits, reflow) : préserver structure et DA et spécifier comportements nécessaires, ne pas créer de nouveau parcours ou maquettage décoratif. Données de maquette fictives : remplacer par usages réels, devise et états observables, pas de chiffres ni modèle/effort inventés. Le détail technique plus fin est exploitable via observabilité existante sans extension du périmètre UX.

Avant code, appliquer [méthode Figma–Cursor](../ux-ui/methodologie-contrat-figma-cursor.md) : source précise, extraction L0/L1/L2, arborescence native, instances/overrides, icônes vectorielles exactes, tokens, Auto Layout, PNG natif avec hash, manifeste nœud→DOM→test, contrôles F1/F2 (objectif 0, borne ≤2 CSS px sur rectangles stables contractés), captures runtime et interactions. Lien mutable n'est pas snapshot ; validation visuelle ≠ preuve runtime. Les états non dessinés restent à qualifier sans expansion arbitraire ; le pack d'extraction technique sera réalisé sous mandat de delivery.

## 9. Calibration et preuve de qualité

Trois étages, dans un même lot intégré ; aucun nouveau benchmark permanent ou appel systématique de comparaison en production.

1. **Compatibilité** : vérification des couples candidats et des outils avec SDK verrouillé, fonctions, sorties structurées, stream, usage par requête, modèle/effort, erreur et reprise. Admettre seulement les couples réellement compatibles ; pas de tests facturables avant GO.
2. **Qualité élémentaire** : corpus représentatif fixé, critères indépendants, référence Sol et candidats Luna/Terra, efforts discriminants, vérifier erreurs silencieuses et escalades insuffisantes. Évaluer qualification initiale en premier : compréhension, ambiguïtés déterminantes, restrictions, capacités, sources, stratégie, allocation, limites reconnues. La ressource initiale doit satisfaire les critères critiques, même si Sol est requis. Tester économie intelligente, pas exhaustive de tous efforts. Comparer même contexte/sources/versions, répéter lorsque variabilité le justifie ; ne pas confondre auto-évaluation et résultat.
3. **Efficience intégrée** : comparer politique Sol fixe + effort adaptatif actuelle vs politique multi-modèles, mesurer coût complet, qualité, temps, appels/cache, relectures, transitions et échecs. Ne pas forcer les changements dans chaque parcours. Aucun résultat chiffré présumé ; conserver référence Sol si une alternative échoue aux critères.

| Parcours discriminant | Preuve et oracle |
|---|---|
| Demande simple / ambiguë / multi-intentions / négation | Qualification sémantique et ressources proportionnées ; pas de lexique ni probe systématique ; ambiguïté critique détectée |
| Investigation Git représentative (RoomBooking) | Couverture correcte, version/références, reprise automatique, pas de relance Pilote après segment ; réutilisation ciblée |
| Confrontation sources et analyse technique | Contradiction critique reconnue, escalade utile et justifiée, pas de faux fait ou faux READY |
| Travail multi-segments avec changement de modèle | Plusieurs couples réellement appliqués si utiles ; mêmes workId, scope, checkpoints et compteurs ; désescalade ou maintien justifié |
| StockTrack révision V1/V2 | Exactitude du diff, candidat unique, conservation explicite et historique, aucun effet duplicate |
| Opération interne de trajectoire | Attribution même sans message visible, même sémantique et autorité D5/D6 ; aucun effet non autorisé |
| WEB public, lecture/citation et comparaison | Recherche réellement pertinente, source ouverte/lue, couverture, citation et fraîcheur ; travail B1 isolé, usage attribué |
| WEB mixte et négatifs | Aucun payload privé non autorisé, contrôle URL/DNS/redirect/body/injection ; gate spécifique avant LIVE |
| FinOps, erreurs, reprises | Exactitude de la comptabilité (unités, coûts, paliers, cache, reasoning, UNKNOWN, tentatives), isolation, cohérence synthèse/détail |
| UX et limites | Figma/DOM/F2, icônes et menu, filtres, aucun chiffre fictif, accessibilité, reprise, pas de limite monétaire ajoutée |

Exploiter les traces historiques RoomBooking/StockTrack et investigation Git (280 545 tokens, 11 requêtes rapportés, 188 698 cache rapportés sous-ensemble, suspension historique ; autres notes 37 452/36 589/38 638) lorsque versions, critères et mesures sont comparables. Source : [handoff historique 5f208d5e](https://github.com/mcleland147/sfia-workspace/blob/5f208d5e6c678e70aa4572dd14e178e7898c0dec/sfia-review-handoff/latest-chatgpt-review.md). Pas de facturation déduite, pas de rejeu gratuit du corpus long. Un oracle métier doit être explicite avant l'essai ; absence de régression critique obligatoire. Une économie faible ne justifie pas une baisse de qualité ; en cas de résultats non concluants, garder ressource de référence et réserve documentée. Les seuils de qualité/corpus exacts et GO d'essais facturables seront stabilisés avant calibration LIVE, pas inventés dans ce candidat.

Intégrer les preuves au registre ML5 existant et aux CA-01/02/03/10, T11/Q19–23 et critères transverses applicables ; ne pas créer un référentiel d'acceptation parallèle. Déterministe ≠ navigateur ≠ LIVE ≠ REAL ; attacher chaque observation à SHA/build, lane, modèle, politique et source de mesure. Aucune conformité globale par un seul test positif.

## 10. Organisation du delivery et blast radius

| Axe | Actifs / impacts | Risque et sortie |
|---|---|---|
| D3 allocation | Conducteur, policy, qualification, adaptateur SDK | Dégradation sémantique, modèle non compatible ; calibration, erreurs, continuité et non-régression |
| D3/D4 production | Checkpoints, journal, APPEND/SUPERSEDE, conservation | Perte acquis, doublons, changement de version ; parcours StockTrack et reprise |
| WEB B1 | Registry, admission, worker, egress, lecture/citations | Fuite, SSRF, prompt injection, garanties fournisseur ; fermer P0 et preuve négative/positive avant LIVE |
| Comptabilité | Usage brut/normalisé, corrélation, PG, tarifs, worker | Double comptage, attribution manquante, données incomplètes ; exactitude et UNKNOWN, idempotence |
| UX | Rail personnel, paramètres, synthèse/inspection | Régression navigation et fidélité ; extraction Figma, navigateur, UAT |
| Autorité | D1/D5/D6, D7–D9 interfaces | Aucun effet par allocation, permissions et scope préservés ; tests de refus et continuité |
| Environnements | ENV-01, lanes, build, migrations éventuelles | DEV isolé, RECETTE immuable jusqu'au GO, sauvegarde/reprise et non-régression |

Séquence interne : (a) valider ce contenu et les réserves de conception ; (b) stabiliser contrat technique d'admission WEB, catalogue, interfaces D3, comptabilité et tarifs ; (c) rendre mesure exploitable avant calibration ; (d) compléter sécurité/lecture WEB et calibrer modèles en DEV avec GO spécifique ; (e) intégrer allocation, FinOps et restitution WEB dans un candidat commun, synchroniser conception/as-built/registre ; (f) qualification, revue ChatGPT, décision Morris de mise en RECETTE, UAT, conditions de sortie. Les sous-travaux ne sont parallélisés que si interfaces et ownership des fichiers sont maîtrisés, avec intégrateur et tests communs. Pas de micro-cycles documentaires par défaut. La livraison 2 reste la capacité suivante (réalisation gouvernée et restitution) ; ses réserves D8 et D7 ne sont pas implicitement clôturées.

## 11. Points ouverts, réserves et gates

| Point | État / condition d'exit |
|---|---|
| Politique initiale définitive | CANDIDATE ; comparer Luna/Terra/Sol, sélectionner après preuves et décision Morris |
| Matrice indicative | CANDIDATE ; revue contenu puis calibration ; aucune obligation de routage |
| Disponibilité modèles et efforts sur le compte | NON OBSERVÉE ; qualification LIVE bornée et autorisée |
| Compatibilité exacte SDK/client/outils | FESABILITÉ STATIQUE ; vérifier lockfile/runtime, non-régression et admission |
| Contrat physique de mesure | À concevoir ; granularité réelle, idempotence, migration si justifiée, aucune seconde base |
| Tarifs complets | Référence publique datée ; mode réel, détail cache/écriture, date d'effet et frais à vérifier |
| WEB provenance et search réseau | P0 OPEN ; concevoir et démontrer frontière, pas d'acceptation implicite du risque |
| UX page 13 | VALIDÉE VISUELLEMENT ; extraction, responsive/états nécessaires et runtime non prouvés |
| Réserves livraison 1 / UAT | Ne pas inférer clôture globale ; état à réconcilier sur candidat et recette |
| Sources historiques et Roadmap | Écarts identifiés ; synchroniser après validation sous mandat, conserver historique |
| Git direct Cursor décision du 23/11 | Réconciliation locale/documentaire requise, aucun arbitrage rouvert |

**Gate immédiat : revue et validation Morris du contenu de ce contrat candidat, y compris le référentiel et le protocole de calibration.** La validation de conception ne vaut pas compatibilité ni preuve LIVE. Avant tout prompt Cursor : pre-check Next et SFIA v2.6 sur références Git réelles, qualification du lot, contraintes SDK, architecture/contrats et autorisations spécifiques (migrations, tests LIVE/facturables, WEB public, etc.). Pas de GO technique, PR, merge, push produit ou cutover implicite. Aucune publication de code, modification Figma ni changement runtime effectués dans cette contribution documentaire.

**Verdict de ce document : FUNCTIONAL DESIGN CANDIDATE — READY FOR MORRIS REVIEW — DELIVERY NOT AUTHORIZED.**
