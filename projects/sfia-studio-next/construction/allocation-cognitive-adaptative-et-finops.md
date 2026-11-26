# ML5 — Allocation cognitive adaptative et FinOps

**Statut : DOCUMENTED — orientation et séquencement validés par Morris le 25/11/2026 ; conception détaillée, calibration, implémentation et recette à réaliser.** Ce document de cadrage du lot n'est ni une nouvelle doctrine normative ni un ADR adopté. R5 / ML5 OPEN ; NO RELEASE ; NOT ADOPTED.

## Actualisation de trajectoire — 26/11/2026 (arbitrages Morris acquis)

Le cadrage initial du 25/11 reste conservé comme historique. Pour le périmètre courant, les arbitrages du 26/11 prévalent sur ses exclusions/hypothèses antérieures : **un seul macro-lot interne ML5** réunissant WEB sécurisé (B1, P0 et gates spécifiques), allocation multi-modèles/effort et FinOps ; aucun plafond financier interne, gestion financière chez OpenAI ; page 13 Figma validée sans extension UX ; qualification sémantique par Nora, guidance indicative, calibration comparative avant admission opérationnelle. Le contrat fonctionnel a été intégralement validé par Morris et les orientations techniques ont été validées. Voir [contrat fonctionnel](../conception-fonctionnelle/allocation-cognitive-recherche-web-et-finops.md), [contrat technique](../architecture-technique/allocation-cognitive-recherche-web-et-finops.md), [préflight 67ce2a6e](https://github.com/mcleland147/sfia-workspace/blob/67ce2a6ebd1e68466bda8dd5b9108812125f153b/sfia-review-handoff/latest-chatgpt-review.md). Accès projet DEV aux trois modèles confirmé visuellement, disponibilité runtime non prouvée. Mesure avant calibration ; WEB LIVE bloqué jusqu'aux preuves et GO ; livraison 2 demeure la capacité suivante. R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED / NO RELEASE / NOT ADOPTED. Aucune clôture livraison 1 ni autorisation d'effet déduite.

## 1. Décision de trajectoire et résultat utilisateur

Morris valide l'orientation multi-modèles proposée par ChatGPT : distinguer charge de travail et difficulté intellectuelle, sélectionner le modèle et l'effort de raisonnement selon la tâche, pouvoir réévaluer cette allocation pendant le même travail cognitif et **faire de l'observabilité de la consommation et des coûts une capacité centrale, non une annexe**.

Le lot s'insère dans ML5 entre la finalisation et la recette de la conduite cognitive adaptative (livraison 1) et la réalisation gouvernée / résultats (livraison 2). Il ne constitue pas un nouveau jalon R5 ni une réouverture de l'architecture globale.

Résultat : Nora réalise un travail de qualité adaptée à la mission, avec une allocation de ressources proportionnée et mesurable ; l'opérateur autorisé peut comprendre les dépenses, leur origine et les leviers d'optimisation. Le Pilote continue à dialoguer avec une seule Nora, sans devoir sélectionner lui-même un modèle à chaque étape.

Le GO du 25/11 couvre la documentation de cette orientation sur la branche candidate existante et son inscription dans la Roadmap. **Il ne lance pas encore le delivery technique** ni ne valide une tarification, un seuil financier ou une règle de routage définitive.

## 2. Sources, état de départ et dépendances

- Main observé : `997897fd7cf914771e7d08e8030dc7123fab7d25`. Branche documentaire avant ajout : `docs/next-ml5-uat-consolidation-20261124@9ef428b0a612bc9768aaddf309bc218e050ba02e`, non mergée. Worktree et runtime locaux NON OBSERVÉS par ChatGPT.
- [SEF](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [décision R4 / DATA-01](../governance/decisions/2026-11-04-r4-architecture-exit.md), [nomenclature](../governance/product-naming-conventions.md).
- [Conducteur cognitif et production Nora](../architecture-technique/conducteur-cognitif-et-production-nora.md), §6 allocation adaptative : modèle et effort révisables, contexte progressif, mesure des usages et coût, continuité D3 ; blob `ff33d76cbee8a6708d006154ba48d5b86c84653a`.
- [Contrat d'acceptation ML5](contrat-acceptation-cognition-et-realisation-gouvernee.md), CA-01/03/10 et exigences associées ; [registre de couverture](ml5-registre-couverture-et-revue-developpement.md) ; [UAT RoomBooking](recette-utilisateur-ml5-roombooking-20261125.md).
- [Handoff correctif 5f208d5e](https://github.com/mcleland147/sfia-workspace/blob/5f208d5e6c678e70aa4572dd14e178e7898c0dec/sfia-review-handoff/latest-chatgpt-review.md), blob `1a72b12ade4a68775f6b66fce7d83bf450785eee`. Exemples de mesures existantes : investigation Git 280 545 tokens dont 276 712 entrée, 3 833 sortie, 188 698 cache rapportés, 11 requêtes fournisseur, suspension ; travaux de note 37 452 / 36 589 / 38 638 tokens. Données de handoff, non mesure directe de facturation ; pas de coût réel démontré.
- Candidat produit local rapporté avant delivery de continuation : `cb4ae5990c0e8c2f75c466962f8a77f300c63e24`, build DEV `51-56htNe0RqDnqwULV8n`. RECETTE rapportée inchangée `2a024b1c` / `3RyhswMcKrNv8woukVXsT`. Le mandat de conduite cognitive adaptative est en cours selon les échanges ; aucun résultat ultérieur observé sur Git.
- Sources fournisseur à vérifier à l'entrée : [tarification API OpenAI](https://openai.com/api/pricing/), [modèles SDK](https://openai.github.io/openai-agents-js/guides/models/), [exécutions](https://openai.github.io/openai-agents-js/guides/running-agents/). Disponibilité compte API, IDs exacts, snapshots, niveaux d'effort supportés, contraintes SDK, tarifs effectifs et paliers à confirmer ; pas de dépendance à un prix inscrit en dur dans ce document.

**Dépendance d'entrée :** conduire une investigation longue automatiquement (segments, checkpoints, compaction, restitution et reprise) avec le modèle de référence Sol ; obtenir revue et recette de livraison 1 selon ENV-01. Le présent lot ne doit pas masquer un défaut de conduite par un changement de modèle. Les travaux actuellement en cours ne sont pas élargis.

## 3. Périmètre du lot intégré

IN : (1) catalogue gouverné des modèles, capacités et tarifs ; (2) calibration comparative qualité/coût/latence ; (3) allocation adaptative modèle + effort dans D3 ; (4) observabilité financière et technique bout en bout avec restitution exploitable ; (5) protections administratives et contrôle des réallocations ; (6) tests LIVE bornés, documentation et recette communes.

OUT : nouveau conducteur, agents Nora concurrents, changement de fournisseur par défaut, réarchitecture de la persistance, achat de services ou extension de droits implicites, WEB LIVE (P0 ouvert), D8 indépendant, dispatch Cursor métier, livraison 2 elle-même, refonte globale des écrans, promotion STABLE ou adoption. Les éventuels pivots ou nouveaux accès restent soumis à arbitrage Morris.

## 4. Stratégie d'allocation : hypothèses à calibrer

Distinguer complexité intellectuelle, volume à traiter, risque et réversibilité, qualité exigée, besoin d'outils, fenêtre de contexte, coût et latence. Une lecture exhaustive volumineuse peut être simple ; une courte analyse d'un invariant d'autorité peut être critique.

| Travail cognitif | Modèle pressenti | Effort indicatif |
|---|---|---|
| Conversation simple, extraction, reformulation | Luna | faible à moyen |
| Lecture de sources, inventaire, extraction structurée et synthèse simple | Luna, Terra si nécessaire | moyen à élevé |
| Comparaison, synthèse transversale, contradictions | Terra, Sol selon profondeur et risque | moyen à très élevé |
| Conception, diagnostic code/architecture, arbitrage complexe, contrat critique | Terra ou Sol, Sol privilégié pour les cas les plus exigeants | élevé à très élevé |
| Mise en forme de conclusions déjà qualifiées | Luna ou Terra | proportionné |

Les désignations Luna / Terra / Sol sont celles de la discussion ; leurs identifiants API et les efforts réellement disponibles sont à qualifier. Cette matrice n'est pas une table de déclenchement normative et ne prescrit aucun modèle sur le seul type de fichier, nombre de mots ou mot-clé.

- D3 qualifie sémantiquement l'objectif et la stratégie ; la politique serveur admet les ressources dans une liste de modèles compatibles, autorisés et calibrés. Pas de nouveau moteur lexical, pas d'appel de classification obligatoire sur tout échange.
- Modèle et effort sont deux leviers distincts. Un effort élevé sur un modèle économique peut être pertinent, mais ne garantit ni la qualité ni l'économie (tokens de raisonnement facturés selon le fournisseur).
- Un même travail peut mobiliser Luna pour plusieurs lectures, Terra pour la confrontation, Sol pour un diagnostic difficile et Terra pour la restitution. Exemple, pas workflow obligatoire. Escalade ou désescalade uniquement sur signaux utiles (insuffisance, contradiction, outil indisponible, risque, résultat à produire), sans boucle de validation coûteuse systématique.
- Transitions aux frontières maîtrisées des segments : même travail, objectifs, acquis, restrictions, références et ressources cumulées ; aucun transfert supposé de raisonnement interne entre modèles. Ne pas réinitialiser un plafond en changeant de modèle. Préserver sorties structurées, provenance, fencing, idempotence, D4/D5/D6 et autorisations d'outils.
- Si un modèle ne supporte pas une capacité requise ou échoue aux critères calibrés, exclure ce couple modèle/effort pour ce parcours. Ne pas masquer une réponse inadéquate derrière un fallback ; tracer la raison et les tentatives. Sol reste une ressource disponible, pas un objectif de minimisation absolue.
- Une politique de coût gouvernée protège contre la consommation incontrôlée sans transformer une limite locale de segment en impossibilité métier. L'arbitrage précédent de conduite cognitive (seuil de réévaluation 1M, maximum administratif 2M initial DEV proposé) reste une calibration à mesurer, pas un tarif ni un plafond permanent de ce lot.

## 5. Observabilité et FinOps — résultat de premier rang

L'observabilité est une condition de sortie à part entière. Avant toute optimisation, établir une référence Sol reproductible et contrôler que les chiffres couvrent les appels réels, pas seulement les segments.

### 5.1 Comptabilité et attribution

Une consommation doit être attribuable au fournisseur, modèle demandé / effectivement utilisé lorsque observable, version, effort demandé / appliqué, lane, projet (ou préparation avant projet), conversation, travail, tour, segment, génération, requête fournisseur, opération, statut et horodatage. Identités et agrégations idempotentes ; inclure tentatives, interruptions et appels de qualification/consolidation, sans compter deux fois le même usage. Un changement de modèle ne change pas l'identité du travail. Un usage non accessible est **UNKNOWN**, pas zéro.

Mesurer :
- entrée totale et entrée en cache (sous-ensemble si le fournisseur le définit ainsi), sortie, raisonnement si exposé (ne pas le compter à nouveau s'il est inclus), total cumulé, appels et segments ;
- latence, durée bout en bout, volume de contexte, résultats d'outils, reprises, relectures, escalades, erreurs ;
- tarifs applicables, coûts estimés par requête et agrégés, coût facturé/rapproché si une source de facturation autorisée permet de l'établir, frais d'outils séparés, couverture de la mesure.

Calculer les coûts sur un référentiel tarifaire versionné : devise, unité, date d'effet, modèle/version, traitement, paliers contextuels, entrée non cachée/cachée, sortie et éventuels frais. Conserver la version tarifaire ayant servi à chaque estimation. Une modification de tarif ne réécrit pas silencieusement les coûts historiques. Aucun prix inventé ; préciser l'absence de données. Ne pas déduire le cache du compteur de sécurité cumulatif simplement parce qu'il réduit le prix.

### 5.2 Restitution et pilotage des dépenses

Prévoir une expérience de consultation exploitable pour les rôles autorisés, avec une vue de synthèse et accès au détail sans exposer les secrets ou le contenu privé des prompts :
- dépenses estimées par période et projet, par préparation/conversation, par travail et par modèle ;
- consommation entrée/cache/sortie, nombre d'appels, effort, coût par travail abouti, erreurs/reprises, taux d'escalade et cache ;
- détail de l'allocation par segment, raison des changements de modèle, limites, chronologie et statut ;
- comparaison référence Sol / politique adaptative, avec périmètre, qualité et couverture comparables ;
- rapprochement des agrégats avec les usages fournisseur et facturation autorisée lorsqu'elle est disponible ; distinction explicite estimation, rapprochement et facturation réelle.

Séparer l'activité métier LIVE de Nora de la télémétrie financière/technique. Ne pas encombrer la conversation nominale. Définir le contrat UX et les droits de consultation avant code ; réutiliser l'observabilité et les espaces de pilotage existants si adéquats, sans nouveau cockpit concurrent. L'emplacement, les filtres exacts, les alertes et le niveau de détail sont à concevoir avec Morris. Les journaux ne doivent pas stocker de chaîne de raisonnement privée, secrets ou copies indiscriminées de sources. Respecter DATA-01, scope, minimisation et rétention.

### 5.3 Protections et optimisation continue

Budgets administratifs configurables, estimation avant appel si possible, alerte/réévaluation avant consommation excessive, détection de stagnation, contrôle du coût et du temps, limite réelle explicitement signalée. Distinguer budget de mission, plafond financier de sécurité et contexte par requête. Les seuils monétaires, droits de modification et limites de l'automatisation restent à calibrer et valider. Pas de dépense illimitée, pas de renouvellement silencieux de budget, pas d'auto-modification de la politique sur la base d'une réponse modèle.

Le KPI principal est le **coût d'un travail correctement abouti**, tentatives comprises, avec une qualité minimale opposable. Optimiser qualité, latence et coût ensemble ; une réponse économique mais erronée n'est pas un gain.

## 6. Calibration et preuves communes

Construire une référence Sol sur des scénarios reproductibles puis comparer Luna, Terra et les couples modèle/effort réellement supportés. Utiliser un corpus et des versions identiques, des critères métier explicites, plusieurs essais lorsque la variabilité l'exige, sans multiplier les appels LIVE sans valeur. Ne pas fixer à l'avance une économie chiffrée non démontrée.

| Scénario | Critère discriminant |
|---|---|
| Conversation simple | Pertinence, latence, faible consommation, pas de sur-orchestration |
| Lecture exhaustive d'un corpus réel de 50 sources | Couverture exacte, citations et synthèse fidèle, segments automatiques, pas de fausse lecture |
| Comparaison documentaire contradictoire | Contradictions substantielles identifiées, versions et incertitudes conservées |
| Investigation code/tests | Raisonnement correct sur invariants et limites de preuve ; pas d'économie au détriment du diagnostic |
| Création/révision D4 | Réutilisation des acquis, contenu exact, conservation et autorités préservées |
| Routage dynamique | Changement de modèle justifié et mesuré, continuité, compteurs et provenance stables |
| FinOps | Agrégats cohérents sans double comptage, tarifs versionnés, cache correctement compté, erreurs et UNKNOWN visibles |
| Limites et non-régression | Refus, interruption, droits, budgets, scope, pas de boucle de retries ou d'effets parasites |

Les tests doivent couvrir un vrai parcours applicatif, y compris les lectures Git autorisées et les appels fournisseur LIVE bornés en DEV, puis recette sur candidat immuable après GO distinct. Test déterministe ≠ BROWSER ≠ LIVE ≠ REAL. Aucun changement de fournisseur, de permission, de configuration RECETTE ou de budget facturable non autorisé.

## 7. Responsabilités, risques, gates et sortie

D3 reste responsable de la conduite et de l'allocation ; le serveur impose compatibilité, autorité, budgets, sécurité et admission. Réutiliser les mécanismes d'observabilité existants ; préciser propriétaire de la comptabilité et des projections au préflight, sans vérité financière concurrente. D4/D5/D6/D7/D8/D9 restent propriétaires de leurs effets. Morris arbitre politique financière, accès, UX et promotions ; ChatGPT prépare/revoit ; Cursor réalise sous contrat SFIA v2.6 ; Git trace.

Blast radius : adaptateur SDK/modèle, politique cognitive, checkpoints, comptabilité, données et projections, UX d'administration/pilotage, droits, tests et coût d'exploitation. Risques : modèle incompatible, dégradation sémantique, perte d'acquis, relectures répétées, facturation sous-estimée, double comptage, fuite de données, surcomplexité et routage lexical. Prévenir par calibration, contrôles de compatibilité, traces et non-régression. Ne pas dupliquer le conducteur ni la connaissance D4. Toute dette a un propriétaire et un exit.

**Gates :**
1. Fin et revue de la conduite cognitive, puis recette livraison 1 ; qualification du lot FinOps sur la ref réellement courante.
2. Contrat détaillé intégré (calibration, politique, observabilité, UX, code/tests et preuve), avec arbitrage Morris des seuils financiers et choix structurants, GO Cursor distinct.
3. Delivery intégré DEV, mesures réelles et revue ChatGPT. Conditions de sortie : choix modèle/effort effectivement adaptatif, qualité au niveau exigé, coût mesurable et optimisations démontrées, observabilité exploitable et droits préservés ; aucun claim de réduction non mesuré.
4. GO distinct de cutover et recette Morris ; synchronisation de la documentation as-built et Roadmap. Si une preuve manque, statut et réserve explicites ; aucune adoption anticipée.
5. Reprendre ML5 livraison 2 — réalisation gouvernée et résultats ; conserver les P0, exigences CA/T/Q/PF et qualification R6 existants.

Ce document ne modifie pas les critères d'acceptation normatifs ML5, ne ferme aucune anomalie RoomBooking et ne vaut pas GO d'exécution ni de promotion.
