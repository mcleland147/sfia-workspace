# Interv360 — Recherche et benchmark rôle QA / Testeur

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Chantier** : QA / Testeur  
**Statut** : Research completed  
**Type** : Recherche / benchmark méthodologique  
**Objet** : documenter les pratiques QA / Testeur avant cadrage du rôle candidat SFIA

---

## 1. Objectif

Cette note vise à **comprendre les compétences, responsabilités, méthodes et garde-fous** d’un rôle **QA / Testeur** avant de l’intégrer comme **rôle candidat SFIA**.

- Cette note **ne crée pas encore** de méthode officielle ;
- elle **ne crée pas** `docs/methods/roles/qa-tester-method.md` ;
- elle **ne produit pas** de scénarios de tests projet Interv360 ;
- elle **ne lance pas** le delivery.

Le chantier QA / Testeur est **autorisé** après validation du catalogue UX/UI V1 Governance et publication Notion de la clôture Figma V1 (`notion-sync-figma-v1-cmp-publication-log.md`, `prompt-catalog-ux-ui-v1-validation.md`). Cette recherche constitue le **travail de fond** préalable au cadrage officiel du rôle candidat.

---

## 2. Pourquoi une recherche QA avant cadrage SFIA

Interv360 a fait **émerger un besoin de regard QA** lors de la revue simulée Figma V1 : le rôle QA / Testeur candidat a confirmé l’intérêt pour la **testabilité des parcours**, les **happy / non happy path**, la **signature optionnelle** et les **états d’erreur métier (`role-methods-enrichment-after-figma-v1.md`, `figma-review-session-minutes.md`).

Sans recherche préalable, le risque est de réduire le rôle à « faire des tests » ou à le calquer uniquement sur les 8 écrans Interv360.

Points structurants :

| Enjeu | Lecture |
|-------|---------|
| Rôle QA ≠ exécution de tests seule | Contribution à la qualité, à la testabilité et à la maîtrise des risques |
| Intervention amont | Dès exigences, maquettes, revues transverses (shift-left) |
| Distinctions nécessaires | QA, test, recette, automatisation, contrôle qualité, stratégie de test |
| Garde-fou SFIA | Éviter d’ouvrir le delivery trop tôt — Figma V1 clôturée, delivery toujours bloqué (`figma-v1-closure-summary.md`) |

Le standard UX/UI V1 Governance (`docs/standards/ux-ui-v1-governance-standard.md`) cadre déjà les revues UX/UI ; le QA apporte une **lecture complémentaire** orientée testabilité, risque et parcours — sans remplacer les autres rôles.

---

## 3. Définitions utiles

| Terme | Définition synthétique |
|-------|------------------------|
| **QA / Quality Assurance** | Ensemble de pratiques visant à **assurer et améliorer la qualité** d’un produit ou service — processus, méthodes, organisation, pas seulement exécution de tests. |
| **Test logiciel** | Activité structurée visant à **évaluer un objet de test**, déclencher des défaillances, trouver des défauts et fournir de l’information aux parties prenantes (ISTQB CTFL v4). |
| **Testabilité** | Facilité avec laquelle un système ou un livrable peut être **testé efficacement** — clarté des exigences, observabilité, contrôlabilité, états identifiables. |
| **Test management** | Pilotage des activités de test : planification, suivi, reporting, traçabilité, gestion des anomalies et des ressources. |
| **Stratégie de test** | Choix global de **quoi tester, comment, avec quels moyens et à quel niveau de risque** — cadre décisionnel, pas une liste de cas. |
| **Plan de test** | Document (ou artefact équivalent) décrivant **objectifs, périmètre, approche, ressources, planning et critères** pour une campagne ou un jalon. |
| **Cas de test** | Ensemble structuré de **préconditions, entrées, actions et résultats attendus** pour vérifier un comportement précis. |
| **Scénario de test** | Enchaînement cohérent de cas ou d’actions décrivant un **parcours utilisateur ou métier** de bout en bout (souvent plus macro qu’un cas unitaire). |
| **Critère d’acceptation** | Condition **vérifiable** définissant qu’un besoin ou une user story est satisfait — souvent formulé en Given/When/Then ou liste testable. |
| **Défaut / anomalie** | Écart entre **résultat attendu et obtenu**, ou non-conformité d’un livrable — à documenter, prioriser et traiter. |
| **Test exploratoire** | Approche où **apprentissage, conception et exécution** des tests se font simultanément, guidés par le jugement du testeur et le risque (Ministry of Testing, Atlassian). |
| **Test automatisé** | Test exécuté par un outil/script, reproductible, intégré typiquement en CI/CD — complément, pas substitut à toute la qualité. |
| **Test fonctionnel** | Vérification des **fonctions métier** du système par rapport aux exigences. |
| **Test non fonctionnel** | Vérification des **qualités** : performance, sécurité, disponibilité, utilisabilité, etc. |
| **Test d’acceptation** | Tests orientés **validation métier / utilisateur** — critères d’acceptation, UAT, recette fonctionnelle selon le contexte. |
| **Shift-left testing** | Intégration des activités de test **tôt** dans le cycle (exigences, design, revues) pour réduire coût et risque des défauts tardifs (Atlassian, ISTQB). |

*Sources principales : ISTQB CTFL v4.0 ; Atlassian Agile Testing ; Ministry of Testing.*

---

## 4. Ce qu’un QA / Testeur peut faire

| Capacité | Description | Utilité SFIA |
|----------|-------------|--------------|
| Analyser la testabilité d’un besoin | Évaluer si un besoin, une story ou une maquette est **vérifiable, observable, sans ambiguïté** | Revues transverses ; garde-fous avant delivery |
| Relire exigences / user stories / maquettes | Lecture critique orientée **parcours, états, erreurs, rôles** | Complément PO, BA, UX/UI |
| Identifier happy path / non happy path | Cartographier **chemins nominaux et dégradés** | Préparation future recette ; revue UX/UI V1 |
| Identifier états vides / erreurs / chargement | Repérer **états limites** non couverts visuellement ou fonctionnellement | Enrichissement revues maquette |
| Aider à formuler critères d’acceptation | Proposer des critères **testables et traçables** | Pont vers futur delivery sans l’ouvrir |
| Préparer scénarios de test | Structurer des **parcours de vérification** (hors exécution delivery) | Capitalisation méthodologique |
| Concevoir cas de test | Détailler **données, étapes, résultats attendus** | Base future campagne de test |
| Exécuter tests manuels | Réaliser des vérifications **scriptées ou exploratoires** | Recette, validation jalon |
| Documenter anomalies | Rédiger des rapports **reproductibles et actionnables** | Amélioration continue |
| Contribuer à la stratégie de test | Participer aux choix **niveaux, outils, priorités, automatisation** | Alignement équipe |
| Prioriser par risque | Concentrer l’effort sur **zones critiques, fréquentes, coûteuses** | Risk-based testing (ISTQB) |
| Participer aux revues | Apporter une **lecture qualité** en revue UX/UI, architecture, sécurité | Déjà pressenti Interv360 Figma V1 |
| Collaborer transverse | Travailler avec PO, BA, UX, Dev, RSSI, Architecte, Chef de projet | Modèle SFIA multi-rôles |
| Contribuer à l’amélioration continue | Capitaliser **leçons, anti-patterns, couverture** | Méthodes rôle, standards |
| Identifier ce qui est automatisable | Distinguer **régression stable vs exploration humaine** | Pyramide de tests |
| Distinguer tests fonctionnels et non fonctionnels | Orienter vers **bon niveau et bon moment** de test | Éviter confusion SSI / perf / métier |

---

## 5. Ce qu’un QA / Testeur ne doit pas faire seul

- **Décider seul du delivery** — arbitrage PO / Chef de projet / gouvernance jalon.
- **Remplacer le Product Owner** — priorisation produit et valeur métier.
- **Remplacer le Business Analyst** — formalisation et analyse métier.
- **Remplacer le RSSI** — conformité SSI, menaces, exigences sécurité.
- **Remplacer l’Architecte** — cohérence technique, ADR, intégrations.
- **Transformer une maquette en backlog** — hors périmètre QA ; garde-fou Figma V1.
- **Produire des user stories sans jalon dédié** — delivery non ouvert Interv360.
- **Valider une conformité juridique ou SSI complète sans arbitrage** — contribution, pas décision finale.
- **Automatiser sans stratégie** — risque de suite fragile et coûteuse (pyramide).
- **Tester sans critères de sortie** — objectifs, périmètre et Definition of Done requis.

---

## 6. Bonnes pratiques QA identifiées

### 6.1 Tester tôt / shift-left

L’ISTQB rappelle que **tester tôt réduit le coût de la qualité** (principe 3). Atlassian recommande d’intégrer le test **tout au long du développement agile**, pas en phase finale.

**Application SFIA** : le regard QA est pertinent dès **cadrage, maquettes UX/UI V1, revues transverses** — comme pressenti sur Figma V1 Interv360 — sans exécuter de recette produit.

### 6.2 Penser par risques

Le **risk-based testing** (ISTQB CTFL v4, ch. 5) consiste à **prioriser** les tests selon la probabilité et l’impact des défaillances.

**Application SFIA** : concentrer l’attention sur parcours critiques (intervention terrain, anomalies intégration, actions SAV) plutôt qu’une couverture uniforme.

### 6.3 Distinguer niveaux de test

| Niveau | Objet typique | Exemples |
|--------|---------------|----------|
| **Unit** | Composant / fonction isolée | Logique métier, règles SLA |
| **Integration** | Interaction entre composants | API, services, persistance |
| **System / E2E** | Système complet, parcours utilisateur | Workflow demande → intervention → CR |
| **Acceptance** | Validation métier / utilisateur | Critères d’acceptation, UAT |
| **Non-functional** | Qualités système | Performance, sécurité, disponibilité |

*Sources : ISTQB CTFL v4 ; Google SWE Book ch. 11 ; Martin Fowler Test Pyramid.*

### 6.4 Ne pas tout mettre en end-to-end

La **pyramide de tests** (Cohn, popularisée par Fowler) recommande :

- **beaucoup** de tests rapides proches du code (unit) ;
- **quelques** tests d’intégration ;
- **peu** de tests E2E/UI — lents, coûteux, fragiles.

Google distingue en outre **taille** (small / medium / large) et **portée** (narrow / medium / large scope), avec une cible indicative ~80 % / 15 % / 5 % (SWE at Google, ch. 11).

**Anti-pattern** : la « glace » (trop d’E2E, pas assez de tests bas niveau).

### 6.5 Combiner scripted testing et exploratory testing

| Approche | Caractéristique |
|----------|-----------------|
| **Scripted** | Cas prédéfinis, reproductibles, traçables — adaptés à la régression |
| **Exploratory** | Apprentissage + conception + exécution simultanés — adaptés aux zones à risque, UX, edge cases |

Ministry of Testing insiste : l’exploratoire n’est pas du « test au hasard » — il requiert **intention, charter, timebox, documentation** (session-based test management). Atlassian le voit comme **complément** de l’automatisation.

### 6.6 Documenter les anomalies proprement

Un bon rapport d’anomalie inclut :

| Élément | Contenu |
|---------|---------|
| Contexte | Écran, rôle, données, jalon |
| Étapes | Reproduction ordonnée |
| Résultat attendu | Comportement attendu |
| Résultat obtenu | Comportement observé |
| Environnement | Version, navigateur, device |
| Preuve | Capture, log métier si autorisé |
| Impact | Métier, utilisateur, blocage |
| Sévérité / priorité | Distinction impact vs urgence |

**Adaptation Interv360** : anomalies **métier** visibles (pas de logs techniques bruts — ADR P1/P2).

### 6.7 Maintenir la traçabilité

L’ISTQB CTFL v4 met en avant la **traçabilité entre test basis et testware** (exigences, critères, cas, résultats, anomalies).

**Utilité SFIA** : relier besoins, critères d’acceptation, revues, tests et décisions de gouvernance — aligné avec Git = source détaillée, Notion = synthèse.

---

## 7. Application au contexte Interv360

Lecture **testabilité uniquement** — **aucun scénario détaillé** produit dans cette note.

| Élément Interv360 | Lecture QA possible |
|-------------------|---------------------|
| **Dashboard SAV** | KPI et CTA actionnables ? États si aucune demande ? Cohérence alertes / SLA ? |
| **Liste des demandes** | Filtres, tri, pagination, états vides ? Lisibilité colonnes métier ? |
| **Fiche demande** | Parcours qualification → planification ? Onglets et historique testables ? |
| **Planning semaine** | Conflits, créneaux, réassignation ? États sans technicien / sans créneau ? |
| **Fiche intervention mobile** | Actions terrain (démarrer, pause, terminer) ? Offline / reprise ? |
| **Compte rendu mobile** | Signature optionnelle — les deux chemins sont-ils testables ? |
| **Suivi erreurs intégration** | Messages métier, reprise manuelle, pas de log brut ? |
| **Vue dirigeant** | Synthèse distincte du SAV — pas de confusion de rôles ? |
| **Signature optionnelle** | Happy path avec / sans signature ; non-blocage explicite |
| **Anomalies métier** | Wording compréhensible ; action de reprise identifiable |
| **Absence IA** | Pas de comportement implicite « intelligent » à tester |
| **Absence portail** | Périmètre client hors scope — pas de fausse attente |
| **Absence logs techniques** | Tests orientés métier ; pas de validation infra par QA seul |

*Sources internes : `figma-first-draft-review.md`, `figma-v1-closure-summary.md`, `figma-review-session-minutes.md`.*

---

## 8. Apports du QA dans une revue UX/UI V1

| Apport QA | Exemple de question |
|-----------|---------------------|
| Parcours principal | Le happy path est-il identifiable et complet sur la capture ? |
| Chemin alternatif | Que se passe-t-il si l’utilisateur choisit l’option secondaire (ex. sans signature) ? |
| Erreur | Les messages d’erreur sont-ils métier, actionnables, non techniques ? |
| État vide | Que voit-on sans données (liste vide, planning vide) ? |
| Rôle utilisateur | SAV, technicien, dirigeant — périmètres distincts et cohérents ? |
| Action critique | Les CTA majeurs (qualifier, démarrer, reprendre intégration) sont-ils uniques et visibles ? |
| Preuve | Signature, photo, CR — quelles preuves sont attendues / optionnelles ? |
| Message métier | Wording aligné ADR (pas de sur-promesse conformité / IA) ? |
| Reprise manuelle | En cas d’échec intégration, l’opérateur sait-il quoi faire ? |
| Non-régression future | Quels parcours devront être protégés en recette V2 / delivery ? |

Aligné avec le standard UX/UI V1 Governance et les prompts PROMPT-UXUI-001 à 015 — **sans** créer de prompt QA dédié dans cette tâche.

---

## 9. Savoir-faire QA pressentis pour SFIA

| Domaine | Compétences |
|---------|-------------|
| **Analyse** | Analyse de testabilité ; lecture exigences / maquettes ; identification risques |
| **Conception** | Scénarios ; cas de test ; critères d’acceptation ; matrices de couverture |
| **Exécution** | Test fonctionnel ; test exploratoire ; recette guidée |
| **Gestion** | Anomalies ; traçabilité ; reporting ; priorisation par risque |
| **Collaboration** | Revues transverses ; échanges PO / BA / UX / Dev / RSSI / Architecte |
| **Automatisation** | Identification du automatisable ; compréhension pyramide / CI — pas implémentation seule |

---

## 10. Savoir-être QA pressentis pour SFIA

- **Rigueur** — méthode, reproductibilité, documentation.
- **Esprit critique** — chercher ce qui manque, pas seulement confirmer.
- **Curiosité** — explorer au-delà du chemin nominal.
- **Communication claire** — anomalies et risques compréhensibles par l’équipe.
- **Sens du risque** — prioriser l’essentiel.
- **Pédagogie** — expliquer testabilité sans jargon excessif.
- **Neutralité** — qualité produit, pas victoire d’un rôle sur un autre.
- **Capacité à challenger sans bloquer** — alerte sans paralysie.
- **Attention aux détails** — états limites, wording, cohérence.
- **Pragmatisme** — adapter l’effort au jalon et au contexte (V1 présentable ≠ recette finale).

---

## 11. Garde-fous pour le futur rôle QA / Testeur SFIA

- [ ] ne pas déclencher delivery ;
- [ ] ne pas transformer maquette en backlog ;
- [ ] ne pas produire user stories sans jalon dédié ;
- [ ] ne pas produire de code applicatif ;
- [ ] ne pas confondre testabilité et recette officielle ;
- [ ] ne pas confondre anomalie métier et log technique ;
- [ ] ne pas valider conformité SSI seul ;
- [ ] ne pas automatiser sans stratégie ;
- [ ] ne pas imposer des tests E2E partout ;
- [ ] ne pas surdocumenter trop tôt (cadrage avant exécution massive).

Ces garde-fous prolongent ceux de la clôture Figma V1 et de la publication Notion CMP-001.

---

## 12. Sources externes utilisées

| Source | Apport utilisé |
|--------|----------------|
| **ISTQB CTFL v4.0** ([syllabus officiel](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)) | Objectifs du test ; 7 principes ; processus de test (planning → completion) ; risk-based testing ; traçabilité ; niveaux et types de test |
| **Atlassian — Agile Testing** ([atlassian.com/agile/software-development/testing](https://www.atlassian.com/agile/software-development/testing)) | Qualité continue ; shift-left ; complémentarité auto / exploratoire ; responsabilité d’équipe |
| **Atlassian — Exploratory Testing** ([atlassian.com/continuous-delivery/software-testing/exploratory-testing](https://www.atlassian.com/continuous-delivery/software-testing/exploratory-testing)) | Définition exploratoire ; complément des tests scriptés ; edge cases |
| **Google — Software Engineering at Google** ([abseil.io SWE Book ch. 11, 14](https://abseil.io/resources/swe-book/html/ch11.html)) | Tailles de test (small/medium/large) ; portée ; pyramide ~80/15/5 ; équilibre vitesse / confiance |
| **Martin Fowler — Practical Test Pyramid** ([martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)) | Pyramide unit / integration / E2E ; anti-pattern glace ; tests UI coûteux |
| **Martin Fowler — Test Pyramid (bliki)** ([martinfowler.com/bliki/TestPyramid.html](https://martinfowler.com/bliki/TestPyramid.html)) | Heuristique portefeuille de tests ; brittleness E2E |
| **Ministry of Testing — Exploratory Testing** ([ministryoftesting.com](https://www.ministryoftesting.com/articles/d269c6b3)) | Mindset exploratoire ; charters ; timebox ; risques comme guide |
| **Ministry of Testing — Explore with Intent** ([ministryoftesting.com/articles/1385fd4a](https://www.ministryoftesting.com/articles/1385fd4a)) | Auto-gestion ; apprentissage parallèle à l’exécution |
| **Lisa Crispin / Janet Gregory — Agile Testing Quadrants** (via littérature agile, citée Atlassian / TestRail) | Cartographie business/techno × support/critique — utile pour diversifier les types de test |

### Distinction standard reconnu vs adaptation SFIA / Interv360

| Standard reconnu | Adaptation SFIA / Interv360 |
|------------------|---------------------------|
| Processus ISTQB complet | Mobilisation **progressive** — recherche et cadrage candidat avant méthode officielle |
| Recette et exécution delivery | **Bloquée** — lecture testabilité sur Figma V1 uniquement |
| Logs techniques, perf, sécu poussée | **Hors MVP** Interv360 — contribution RSSI / Architecte ; QA sur métier |
| Automatisation CI/CD | **Future** — identification seulement à ce stade |
| Publication Notion | **Non** dans ce chantier recherche |

---

## 13. Synthèse pour SFIA

Le rôle **QA / Testeur** dans SFIA ne doit **pas** être réduit à l’exécution de tests.

Il doit être vu comme un rôle de **contribution à la qualité, à la testabilité et à la maîtrise des risques**, mobilisable dès les phases de **cadrage, conception, UX/UI et revue transverse**.

À ce stade Interv360, il doit rester **candidat** et **ne doit pas déclencher de delivery** — conformément à la clôture Figma V1 et à la publication gouvernance Notion.

---

## 14. Recommandation

**Recommandation** : poursuivre vers une **note de cadrage du rôle candidat QA / Testeur**, en s’appuyant sur cette recherche, **sans créer encore** la méthode officielle `qa-tester-method.md`.

Séquence suggérée :

1. Note de cadrage rôle candidat QA / Testeur (prochaine étape).
2. Méthode officielle `docs/methods/roles/qa-tester-method.md` (jalon ultérieur explicite).
3. Prompts QA dédiés (hors périmètre actuel).
4. Scénarios / recette Interv360 (uniquement si jalon delivery ou recette ouvert).

---

## 15. Conclusion

La recherche confirme l’**intérêt de cadrer QA / Testeur comme rôle candidat SFIA**.

Le rôle apporte une lecture de **testabilité, de risque, de parcours, d’anomalies et de qualité transverse**.

Il doit rester **distinct** du delivery, de la recette officielle et de l’automatisation à ce stade.

Une **note de cadrage du rôle candidat** peut être produite ensuite, sur la base de ce benchmark et des sources internes Interv360 / UX/UI V1 Governance.

---

*Recherche QA / Testeur — benchmark méthodologique — gouvernance SFIA — sans méthode officielle ni delivery.*
