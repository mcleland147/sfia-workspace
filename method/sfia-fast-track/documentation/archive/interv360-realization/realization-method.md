# SFIA — Realization preparation method

**Type** : Méthode générique de préparation réalisation  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Draft  
**Branche** : `method/interv360-realization-capitalization`  
**Document associé** : [`capitalization-plan.md`](../../../archive/interv360-realization/capitalization-plan.md)

---

## 1. Objectif de la méthode

Cette méthode décrit comment passer d'un cadrage fonctionnel à une préparation de réalisation exploitable, sans démarrer prématurément le code.

Elle vise à sécuriser :

- le périmètre MVP ;
- le découpage fonctionnel ;
- les incréments de livraison ;
- les user stories ;
- les critères d'acceptation ;
- la readiness ;
- la préparation technique ;
- la stratégie QA ;
- les scénarios nominaux ;
- les scénarios de refus ;
- l'estimation indicative ;
- le backlog préparatoire ;
- les décisions de stack et structure ;
- la décision Go / No-go réalisation.

La méthode est générique et réutilisable sur d'autres projets SFIA.

Elle **ne constitue pas** une autorisation de coder.

---

## 2. Principes directeurs

La méthode repose sur les principes suivants :

- avancer par cycles courts ;
- produire des livrables explicites ;
- séparer la préparation de la réalisation ;
- éviter le démarrage code prématuré ;
- garder une source de vérité documentaire ;
- distinguer décisions métier, fonctionnelles, techniques et delivery ;
- documenter les garde-fous ;
- rendre la QA exploitable avant réalisation ;
- préparer le Go / No-go explicitement ;
- ne pas transformer un cas projet en règle universelle.

---

## 3. Vue d'ensemble du parcours

| Étape | Objectif | Sortie attendue |
|-------|----------|-----------------|
| **1. Delivery preparation** | Cadrer MVP, lots, backlog macro, priorisation | Périmètre MVP priorisé, stratégie de slicing, critères de réalisation macro |
| **2. Delivery detailing** | Détailler l'incrément prioritaire | Backlog détaillé, user stories, critères d'acceptation, readiness incrément |
| **3. Realization preparation** | Préparer slicing, cadrage technique, QA, estimation | Séquences de réalisation, cadrage technique préparatoire, stratégie QA, estimation indicative |
| **4. Technical design** | Cadrer architecture, data, API, règles, QA technique | Architecture cible, modèle data logique, stratégie API, règles métier structurantes |
| **5. Implementation planning** | Préparer données démo, QA, refus, estimation, plan, backlog | Données de démonstration, scénarios QA et refus, backlog préparatoire |
| **6. Realization start** | Décider stack, structure, front/back, checklist avant code | Options stack comparées, structure cible documentaire, Go documentaire ou équivalent |
| **7. Implementation Go / No-go** | Décider explicitement le démarrage réalisation | Décision explicite, autorisation ou refus de code, périmètre gelé ou reporté |

---

## 4. Étape 1 — Delivery preparation

### Objectif

Transformer un cadrage fonctionnel en périmètre MVP exploitable.

### Activités

- clarifier le besoin produit ;
- identifier le MVP ;
- structurer les lots fonctionnels ;
- produire un backlog macro ;
- prioriser ;
- définir une stratégie de slicing ;
- définir les critères de readiness.

### Livrables types

- plan de préparation delivery ;
- périmètre MVP ;
- lots fonctionnels ;
- backlog macro ;
- priorisation ;
- stratégie de slicing ;
- critères de réalisation ;
- synthèse readiness.

### Critères de sortie

- MVP identifié ;
- lots fonctionnels lisibles ;
- backlog macro priorisé ;
- stratégie de livraison définie ;
- prochain niveau de détail prêt.

---

## 5. Étape 2 — Delivery detailing

### Objectif

Transformer le MVP priorisé en incrément détaillé.

### Activités

- sélectionner l'incrément prioritaire ;
- détailler le backlog ;
- formaliser les user stories ;
- produire les critères d'acceptation ;
- définir une checklist readiness ;
- confirmer la capacité de passage vers la préparation réalisation.

### Livrables types

- plan de detailing ;
- backlog détaillé ;
- user stories ;
- critères d'acceptation ;
- checklist readiness ;
- synthèse detailing.

### Critères de sortie

- incrément prioritaire cadré ;
- user stories prêtes ;
- critères d'acceptation disponibles ;
- exclusions explicites ;
- passage vers realization preparation possible.

---

## 6. Étape 3 — Realization preparation

### Objectif

Préparer l'incrément pour une future réalisation sans démarrer le code.

### Activités

- découper l'incrément en séquences de réalisation ;
- cadrer techniquement sans implémenter ;
- définir la stratégie QA ;
- produire une estimation indicative ;
- confirmer les garde-fous.

### Livrables types

- plan de préparation réalisation ;
- slicing de réalisation ;
- cadrage technique ;
- stratégie QA ;
- estimation d'effort indicative ;
- synthèse préparation réalisation.

### Critères de sortie

- séquences de réalisation définies ;
- risques techniques connus ;
- QA préparée ;
- estimation indicative produite ;
- passage vers technical design possible.

---

## 7. Étape 4 — Technical design

### Objectif

Cadrer les décisions techniques structurantes sans produire d'implémentation.

### Activités

- définir l'architecture applicative cible ;
- clarifier la séparation front / back / data ;
- définir le modèle de données logique ;
- définir la stratégie API ;
- formaliser les règles de statut ou règles métier structurantes ;
- préparer la QA technique.

### Livrables types

- plan de technical design ;
- architecture applicative ;
- décisions front / back / data ;
- modèle data logique ;
- stratégie API ;
- règles métier / statuts ;
- planification QA technique ;
- synthèse technical design.

### Critères de sortie

- responsabilités applicatives clarifiées ;
- modèle data logique disponible ;
- stratégie API décidée ;
- règles métier structurantes disponibles ;
- passage vers implementation planning possible.

---

## 8. Étape 5 — Implementation planning

### Objectif

Préparer la réalisation opérationnelle de l'incrément, sans code.

### Activités

- formaliser les données de démonstration ;
- produire les scénarios QA nominaux ;
- produire les scénarios de refus ;
- produire l'estimation indicative détaillée ;
- préparer la planification indicative ;
- préparer le backlog de réalisation ;
- consolider la readiness.

### Livrables types

- plan implementation planning ;
- données de démonstration ;
- scénarios QA ;
- scénarios de refus ;
- estimation indicative ;
- planification indicative ;
- backlog préparatoire ;
- synthèse implementation planning.

### Critères de sortie

- données de démonstration disponibles ;
- QA nominale prête ;
- refus métier prêts ;
- backlog préparatoire prêt ;
- garde-fous consolidés ;
- passage vers realization start possible.

---

## 9. Étape 6 — Realization start

### Objectif

Préparer les décisions nécessaires avant le démarrage concret de réalisation.

### Activités

- comparer les options de stack ;
- décider une structure projet cible documentaire ;
- décider du niveau de séparation front / back ;
- produire une checklist avant code ;
- distinguer Go documentaire et Go réalisation.

### Livrables types

- plan realization start ;
- options de stack ;
- décision structure projet ;
- décision front / back ;
- checklist avant code ;
- synthèse realization start.

### Critères de sortie

- stack indicative identifiée ;
- structure projet cible documentaire ;
- séparation front / back décidée ;
- checklist avant code disponible ;
- Go documentaire ou autre décision formulée ;
- passage vers Go / No-go possible.

---

## 10. Étape 7 — Implementation Go / No-go

### Objectif

Décider explicitement si le projet peut démarrer la réalisation.

### Activités

- geler ou refuser le périmètre ;
- confirmer ou reporter la stack concrète ;
- confirmer ou reporter la stratégie data ;
- vérifier les conditions bloquantes ;
- décider Go, No-go, Go partiel ou prolongation documentaire ;
- formuler explicitement l'autorisation ou le refus de démarrage code.

### Livrables types

- décision de gel périmètre ;
- décision stack finale ;
- décision stratégie data ;
- checklist Go / No-go ;
- synthèse Go / No-go.

### Critères de sortie

- décision explicite produite ;
- périmètre gelé ou refusé ;
- stack concrète validée ou reportée ;
- stratégie data validée ou reportée ;
- autorisation de code donnée ou refusée explicitement.

---

## 11. Règles de passage entre étapes

| Passage | Condition minimale |
|---------|-------------------|
| **Delivery preparation → Delivery detailing** | MVP défini ; lots fonctionnels structurés ; backlog macro priorisé ; stratégie de slicing disponible ; critères de réalisation macro posés |
| **Delivery detailing → Realization preparation** | Incrément prioritaire sélectionné ; user stories et critères d'acceptation disponibles ; exclusions explicites ; readiness incrément validée |
| **Realization preparation → Technical design** | Séquences de réalisation définies ; cadrage technique préparatoire produit ; stratégie QA posée ; estimation indicative disponible |
| **Technical design → Implementation planning** | Architecture cible documentée ; modèle data logique disponible ; stratégie API décidée ; règles métier structurantes formalisées |
| **Implementation planning → Realization start** | Données de démonstration formalisées ; scénarios QA nominaux et de refus prêts ; backlog préparatoire structuré ; garde-fous consolidés |
| **Realization start → Implementation Go / No-go** | Options stack comparées ; structure projet cible documentaire ; séparation front/back décidée ; checklist avant code produite ; Go documentaire ou équivalent formulé |
| **Implementation Go / No-go → Code** | Décision explicite Go réalisation ; périmètre gelé ; stack concrète validée ; stratégie data confirmée ; autorisation de code formulée ; conditions bloquantes levées |

---

## 12. Garde-fous méthodologiques

| Garde-fou | Objectif |
|-----------|----------|
| Ne pas coder avant décision explicite | Éviter l'implémentation prématurée sans autorisation formelle |
| Ne pas créer de projet applicatif trop tôt | Séparer la préparation documentaire de la création physique du dépôt ou dossier applicatif |
| Ne pas transformer une estimation en engagement | Conserver l'estimation indicative comme aide à la décision, pas comme contrat |
| Ne pas transformer un backlog préparatoire en sprint plan ferme | Distinguer préparation et planification opérationnelle |
| Ne pas créer d'API détaillée avant besoin confirmé | Cadrer la stratégie API sans produire de contrat technique prématuré |
| Ne pas créer de SQL avant stratégie data confirmée | Éviter les choix de persistance avant arbitrage data |
| Ne pas créer de tests automatisés avant stratégie QA confirmée | Préparer la QA documentaire avant l'automatisation |
| Ne pas généraliser les spécificités d'un projet | Extraire des patterns de décision, pas des choix métier ou techniques propres à un cas |
| Garder les exclusions visibles | Maintenir le hors périmètre explicite à chaque cycle |
| Distinguer Go documentaire et Go réalisation | Séparer la suffisance documentaire de l'autorisation de démarrage code |

---

## 13. Rôles et responsabilités

| Rôle | Responsabilité dans la méthode |
|------|-------------------------------|
| **Product owner / métier** | Clarifier le besoin, valider le MVP, prioriser, valider user stories et critères d'acceptation, confirmer scénarios de refus |
| **Chef de projet / delivery lead** | Orchestrer les cycles, produire les synthèses, maintenir les garde-fous, préparer les décisions Go / No-go |
| **Architecte / référent technique** | Cadrer architecture, data, API, stack ; identifier risques techniques ; valider cohérence technique |
| **UX/UI ou designer** | Fournir les repères d'expérience utiles à la préparation ; signaler les écarts design sans bloquer la méthode si non critique |
| **QA / test lead** | Définir stratégie QA, scénarios nominaux et de refus, readiness qualité avant réalisation |
| **Développeur / équipe réalisation** | Contribuer aux estimations indicatives, valider faisabilité technique, ne pas démarrer code sans autorisation |
| **Sponsor / décisionnaire** | Arbitrer périmètre, priorisation, Go / No-go, autorisation de code |

---

## 14. Artefacts transverses

| Artefact | Usage |
|----------|-------|
| **Backlog** | Structurer le travail du macro au préparatoire sans confondre niveaux de détail |
| **User stories** | Exprimer les besoins métier de l'incrément prioritaire |
| **Critères d'acceptation** | Rendre testable la satisfaction métier avant réalisation |
| **Données de démonstration** | Permettre QA, démo et validation sans dépendre de données réelles |
| **Scénarios nominaux** | Décrire les parcours attendus de bout en bout |
| **Scénarios de refus** | Documenter les refus métier, erreurs et cas limites avant code |
| **Estimation indicative** | Aider à la décision sans engager la charge |
| **Checklist readiness** | Vérifier la suffisance documentaire avant passage à l'étape suivante |
| **Checklist Go / No-go** | Formaliser les conditions bloquantes avant autorisation de code |
| **Synthèse de cycle** | Clôturer chaque étape avec décision, statut recommandé et prochaine action |

---

## 15. Types de décisions

| Type de décision | Exemple générique |
|------------------|-------------------|
| **Décision de périmètre** | Définir ce qui est dans le MVP et ce qui est reporté ou exclu |
| **Décision de priorisation** | Classer lots ou capacités selon valeur, dépendances et risques |
| **Décision de slicing** | Découper la livraison en incréments démontrables progressifs |
| **Décision d'architecture** | Choisir la structure applicative cible au niveau conception |
| **Décision API** | Décider si une API externe est requise, différée ou absente pour l'incrément |
| **Décision data** | Choisir persistance, source de vérité et stratégie de données |
| **Décision QA** | Définir le niveau de couverture QA documentaire avant réalisation |
| **Décision stack** | Comparer et retenir une option technique indicative ou concrète |
| **Décision front/back** | Choisir séparation logique, physique ou mono-app selon contexte |
| **Décision Go / No-go** | Autoriser, refuser ou reporter explicitement le démarrage réalisation |

---

## 16. Application à un futur projet

Pour appliquer la méthode sur un autre projet SFIA :

1. partir du besoin fonctionnel déjà clarifié (cadrage, architecture fonctionnelle, UX/UI si disponible) ;
2. identifier le MVP et ses limites explicites ;
3. découper en lots fonctionnels cohérents ;
4. prioriser selon valeur métier, dépendances et risques ;
5. sélectionner un incrément démontrable comme premier candidat ;
6. détailler user stories et critères d'acceptation de cet incrément ;
7. préparer la réalisation : slicing, cadrage technique, QA, estimation ;
8. cadrer les décisions techniques structurantes sans implémenter ;
9. préparer données de démo, scénarios QA et refus, backlog préparatoire ;
10. comparer options stack, décider structure et séparation front/back ;
11. produire la checklist Go / No-go avec conditions bloquantes ;
12. décider explicitement avant toute création de code ou de projet applicatif.

Chaque étape produit des livrables documentaires et une synthèse de clôture avec statut recommandé pour l'étape suivante.

---

## 17. Ce que la méthode ne fait pas

| Hors périmètre méthode | Raison |
|------------------------|--------|
| Elle ne remplace pas une stratégie produit complète | Elle couvre la préparation réalisation, pas la vision produit long terme |
| Elle ne remplace pas l'architecture d'entreprise | Elle cible un incrément projet, pas le paysage SI global |
| Elle ne choisit pas automatiquement la stack | Elle fournit un cadre de comparaison et de décision contextuelle |
| Elle ne produit pas le code | La réalisation démarre uniquement après Go explicite |
| Elle ne crée pas de tickets réels par défaut | Le backlog reste documentaire jusqu'à décision opérationnelle |
| Elle ne garantit pas la mise en production | Elle prépare la réalisation, pas le déploiement |
| Elle ne rend pas une maquette obligatoire | Le design peut être non bloquant selon le contexte projet |
| Elle ne transforme pas une estimation en engagement | L'estimation reste indicative et non contractuelle |

---

## 18. Décisions retenues

| Décision | Statut |
|----------|--------|
| Méthode par cycles retenue | ✅ |
| Séparation préparation / réalisation retenue | ✅ |
| Go documentaire distingué du Go réalisation | ✅ |
| Livrables de sortie par cycle retenus | ✅ |
| Checklists comme mécanisme de décision retenues | ✅ |
| Scénarios de refus à intégrer avant réalisation | ✅ |
| Estimation indicative non contractuelle | ✅ |
| Stack non imposée par la méthode | ✅ |
| Spécificités projet non généralisées | ✅ |
| Autorisation de code toujours explicite | ✅ |

---

## 19. Critères de sortie

- [x] méthode complète structurée ;
- [x] étapes du parcours définies ;
- [x] activités par étape définies ;
- [x] livrables types par étape définis ;
- [x] critères de sortie par étape définis ;
- [x] règles de passage définies ;
- [x] garde-fous méthodologiques définis ;
- [x] rôles génériques définis ;
- [x] artefacts transverses définis ;
- [x] types de décisions définis ;
- [x] application à un futur projet expliquée ;
- [x] hors périmètre méthode clarifié ;
- [x] décisions retenues listées.

---

## 20. Prochaine action

Le prochain livrable est :

**`realization-deliverables-standard.md`**

Objectif :
Standardiser les livrables attendus par phase de préparation réalisation.
