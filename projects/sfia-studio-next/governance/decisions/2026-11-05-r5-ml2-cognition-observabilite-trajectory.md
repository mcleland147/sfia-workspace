# SFIA Studio Next — Décision de trajectoire R5 / ML2 : cognition instrumentée avant RECETTE

| Champ | Valeur |
| --- | --- |
| Décideur | **Morris** |
| Validation de contenu | **2026-11-05 — VALIDATED STRATEGY / D2 CONTENT APPROVED** |
| Statut Git | Publication candidate sur branche documentaire ; **non intégrée à main** |
| Objet | Arbitrage de **périmètre et de séquencement** de la construction ML2 avant RECETTE |
| Nature | Décision de trajectoire R5 ; **aucun nouvel ADR R4**, aucune révision du SEF/SFIA v2.6 |
| Source d'autorité | Validation explicite Morris en conversation le 2026-11-05, après revue des options A/B/C et accord pour la **trajectoire C** |
| Sources propriétaires | [Roadmap](../roadmap.md), [R5 référence delivery](../../construction/reference-delivery-r5.md), [ML2 spécification](../../construction/ml2-production-et-capitalisation-nora/specification-technique.md), [ML2 matrice](../../construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md), [contrat observabilité](../../architecture-technique/contrat-observabilite-transverse.md), [R5 §14 cognition comparative](../../construction/reference-delivery-r5.md#14-qualification-cognitive-comparative-chatgpt--nora--orientation-transversale-validée-morris-2026-11-04) |
| Branche de rédaction | `docs/next-ml2-integrated-strategy-20261105` basée sur `docs/next-transverse-observability-20261105@0e83824fd059d0074375a698b71e8dce53860fd9` |
| État Git au pré-check | `main@6e4406c63639330c7826423cdcf08f06ff019eed` ; PR #655 OPEN/DRAFT `08b89360` ; PR #656 OPEN `a0d805e9` ; branche observabilité `0e83824f` ; Git local **NON OBSERVÉ** |

## 1. Décision actée — option C

**Morris approuve la stratégie de compléter la capacité ML2 « Produire et capitaliser avec Nora » avant sa RECETTE**, en réunissant dans **le même résultat intégré** :

1. **Autonomie cognitive utile** : configuration modèle/effort explicite et compatible, qualification proportionnée, capacité d'investigation D4 complémentaire réellement autorisée, boucle agentique native multi-étapes bornée, convergence ou état incomplet honnête.
2. **Observabilité transverse immédiatement utile** : parcours corrélables des frontières existantes AUTH/API/DB/D1–D4, classification des erreurs, traces/tentatives fournisseur Nora, sources et effets métier réellement vérifiables, diagnostic consultable en RECETTE, confidentialité et résilience.
3. **Qualification commune** : tests et diagnostic techniques, COG-01..07 comparatifs et OBS-Q01..10 applicables au même SHA/lane, non-régression des contrats d'intégrité ML2 et preuve graduée.

**Raison produit :** la RECETTE ML2 doit tester **la collaboration cognitive que vise Next**, et non seulement la génération d'un texte à tour unique. Les observations doivent permettre de comprendre les défauts, les itinéraires superflus, le manque de sources et la qualité des réponses de Nora. L'objectif est une autonomie bornée **jusqu'au résultat utile**, pas la liberté d'effectuer des actes protégés.

**Principe SEF-01 :** préserver la primauté du besoin du Pilote, construire un macro-lot cohérent et ne pas fragmenter artificiellement code, tests et documentation. **Pas de réouverture normative R1–R4** : les spécifications et frontières déjà validées restent propriétaires ; la décision fixe la trajectoire de livraison R5.

## 2. Frontière ML2 approuvée en stratégie

### IN — capacité intégrée à qualifier et construire

- D3 : politique de difficulté proportionnée ; modèle/effort effectivement appliqués au point SDK ; choix simple pour les demandes simples et capacité suffisante pour les analyses exigeantes, sans classification IA obligatoire à chaque échange.
- D3 / Agents SDK : progression multi-étapes possible dans des budgets de tours, temps et appels ; erreur/STOP/UNKNOWN/partial honnêtes ; pas de boucle ad hoc concurrente.
- D3→D4 : **lecture complémentaire** des ressources du projet, avec vérification actuelle des permissions, provenance/version et couverture ; ne pas assimiler le titre d'un document à son contenu lu.
- D3/D4 : réponse finale exploitable, sauvegarde/révision seulement sur effet D4 confirmé ; préservation de l'idempotence, de la reprise et des corrections C1–C6 de ML2.
- Transverse : corrélation des requêtes et générations/tentatives ; observation utile Better Auth, API, erreurs, PostgreSQL, D2, D3, D4 ; exploitation des mécanismes natifs avant nouveau composant ; **diagnostic effectivement retrouvable en RECETTE**, pas seulement événements émis.
- Sécurité/qualité : confidentialité et rétention DATA-01, isolation ENV-01, CI Next réellement exécutée selon périmètre, tests positifs et négatifs ; preuve LIVE ciblée de Nora et comparaison indépendante ChatGPT–Nora R5 §14.

### OUT — report borné, sans anticiper les domaines futurs

- Routage multi-modèle permanent, classificateur IA obligatoire, basculement automatique Sol→Astra sans évaluation de valeur, multiplication d'agents spécialisés ou moteur d'orchestration/mémoire concurrent.
- Plateforme de supervision industrielle, alerting avancé, tableaux de bord Pilote, entrepôt de logs maison, capture exhaustive de la chaîne de pensée ou des contenus sensibles.
- Accès Git et opérations D9/ML4, cycles/gouvernance D5/D6, dispatch/exécution/preuves D7/D8, commandes Cursor ou effets externes non autorisés. Chaque domaine ajoutera son diagnostic au moment de sa construction.

**Dette reportée :** chaque capacité différée reste associée à son propriétaire, son déclencheur de réexamen, une condition de sortie testable et le gate Morris approprié. Le simple fait de reporter ne prouve ni besoin futur ni dette bloquante aujourd'hui.

## 3. Critères de convergence et d'acceptation avant RECETTE ML2

**Entrée en RECETTE candidate (sous revue technique, sans garantir la réussite cognitive) :**
1. Une question simple n'enclenche pas une investigation inutile, et une mission complexe **peut réellement** demander au moins une consultation D4 complémentaire dans les limites autorisées. `maxTurns > 1` sans outil/trace d'usage ne prouve rien.
2. Configuration modèle/effort vérifiée sur le chemin fournisseur effectif ; limites/couts/latences/tentatives identifiables, aucune réussite fictive.
3. Erreurs SESSION_INVALID, autorisation, conflit, base et fournisseur différenciées ; une panne DB ne devient pas un faux refus d'authentification.
4. Pour une mission, un examinateur habilité peut retrouver opération, contexte de build/lane, appel(s) et outil(s), ressources réellement lues, erreurs, durée/usage connu et effet D4 confirmé ou UNKNOWN. L'absence de trace est déclarée.
5. Protection des secrets/contenus, lanes indépendantes et droits courants ; absence d'effet D6/D7/D9 non demandé ; non-régression des correctifs C1–C6 et des parcours ML1.
6. Tests DETERMINISTIC, DB/INTEGRATION, BROWSER et LIVE proportionnés et enregistrés sur le même SHA, **CI Next applicable réellement PASS** et traces consultables ; COG-01..07 et OBS-Q01..10 selon leur applicabilité et les réserves documentées. Pas de fausse preuve REAL.
7. **RECETTE Morris à part** sur candidat gelé : apprécier la valeur du travail, constater les faiblesses, statuer sur la suffisance, la dette/exit et la suite. Aucune équivalence automatique avec ChatGPT.

**Règle de portée :** l'obligation ne consiste pas à atteindre dès la première recette la perfection de toutes les réponses ou une couverture exhaustive de l'infrastructure, mais à fournir les **moyens cognitifs demandés** et des **diagnostics fiables** pour qualifier les écarts.

## 4. Ordonnancement de travail et gates

| Étape | Résultat exigé | Gate / autorité |
| --- | --- | --- |
| A. Consolidation documentaire | Roadmap/R5/ML2/observabilité/matrice synchronisées ; historique As-Built intact ; sources Git qualifiées | Validation de trajectoire Morris **acquise en contenu** ; Git documentaire sur branche seulement |
| B. Contrat exécutable | Paramètres SDK/compatibilité des modèles vérifiés, périmètre technique/tests, impacts API/DB/auth, confidentialité et méthode de consultation diagnostique qualifiés | Revue du contrat, **GO Cursor D3 distinct** |
| C. Construction intégrée | Modification code + tests + docs synchronisés, sans effet non autorisé ; préserver idempotence et CI | SFIA v2.6, branche candidate/local check Cursor et Review Pack |
| D. Qualification | Tests/diagnostics/COG/OBS sur un SHA/lane ; rectification des gaps | Gate entrée RECETTE puis verdict Morris |
| E. Intégration Git | PR readiness, CI, review, merge, relecture distante ; STABLE à gate distinct | GO PR/merge/promotion Morris spécifiques |

**Publication documentaire ≠ mise à jour de la PR #655.** Les branches de documents étant empilées, le choix de branch technique, rebase/cherry-pick, retarget et ordre de PR/merges doit être qualifié avant reprise : aucune branche non mergée n'est une baseline `main`.

## 5. État, preuves et suites

- **ML1 :** intégré #649, clôturé Morris avec réserves (sessions DEV/RECETTE, CI et autres exits conservés) ; pas de STABLE ni ADOPTED.
- **ML2 :** code sur branche #655, avec documents/revisions/sujets, tests déterministes/PG/BROWSER FAKE et correctifs C1–C6. **Pas de RECETTE cognitive ML2, ni de preuve LIVE complète de l'autonomie adaptative/tracing.**
- **Documentation cognitive :** contenu validé Morris, PR #656 OPEN, non mergée.
- **Observabilité transverse :** contrat R4 v0.1 et déclinaisons D1–D9 sur branche documentaire, non mergée ; mécanismes non prouvés dans le runtime.
- **Après la présente décision :** finaliser le lot documentaire autorisé, puis **STOP avant tout nouveau cycle technique** jusqu'au GO Morris explicite et pré-check SFIA v2.6.

**Verdict : TRAJECTOIRE C — VALIDATED STRATEGY BY MORRIS / DOC CONTRIBUTION CANDIDATE / BUILD NOT AUTHORIZED / RECETTE NOT STARTED / NO PR OR MERGE AUTHORIZED BY THIS DECISION.**
