# ACTE IV — Ce que SFIA produit

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-05A (préparation éditoriale Git — Acte IV) |
| **Acte** | IV — Ce que SFIA produit |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-04-05-editorial` |
| **HEAD / base** | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
| **Niveau lecture** | L2 |
| **Durée cible** | 8–10 minutes |
| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-05A |
| **Réaction recherchée** | « C'est tangible. » |

---

## 1. Transition depuis l'Acte III

Vous avez **suivi** NovaBuild — intention, cadrage, conception, delivery, QA, release, capitalisation.

L'**Acte III** montre le **mouvement**. L'**Acte IV** répond à la question suivante :

> **Quels livrables et résultats concrets obtient-on avec SFIA ?**

> **Nous avons suivi le projet. Regardons maintenant ce qu'il a produit.**

---

## 2. Qu'est-ce qu'un livrable SFIA ?

Un **livrable SFIA** est un **artefact identifiable** — document, décision tracée, incrément, rapport — produit à la fin d'un **cycle borné**.

Ce n'est pas :

- une activité (« on a réfléchi ») ;
- une conversation IA ;
- une promesse de résultat.

C'est :

- quelque chose qu'on peut **relire** ;
- quelque chose qu'on peut **valider** ;
- quelque chose qui **survit** au cycle suivant.

---

## 3. Activité · livrable · preuve · décision

| Notion | Ce que le lecteur retient |
|--------|---------------------------|
| **Activité** | Travail en cours — non figé |
| **Livrable** | Artefact attendu en fin de cycle |
| **Preuve** | Élément vérifiable — test, capture, historique Git |
| **Décision** | Tranché par un humain aux gates — pas par l'IA seule |

SFIA relie les quatre : l'activité **vise** un livrable · la preuve **soutient** le livrable · la décision **arbitre** avant la suite.

---

## 4. Galerie — cinq familles de valeur

Cinq familles visibles — chacune répond à une question métier. Les exemples ci-dessous sont des **catégories observées** dans des projets SFIA documentés — **pas** une attribution unique à NovaBuild.

### Famille 1 — Cadrer

| Champ | Contenu |
|-------|---------|
| **Question** | Sur quoi travaille-t-on vraiment ? |
| **Artefacts** | Note de cadrage · périmètre in/out · backlog initial · incréments planifiés |
| **Valeur métier** | Alignement sponsor · scope explicite · réduction du risque de reprises liées à un périmètre ambigu |
| **Trace Git** | Documents de framing · limites MVP · epics et user stories |
| **Réserve** | Le cadrage ne remplace pas l'expertise métier terrain |

### Famille 2 — Concevoir

| Champ | Contenu |
|-------|---------|
| **Question** | Comment le produit fonctionne-t-il avant le code ? |
| **Artefacts** | Architecture fonctionnelle · modèle d'états · décisions structurantes · parcours UX · brief design |
| **Valeur métier** | Règles métier visibles · écrans alignés sur le besoin |
| **Trace Git** | Dossiers architecture fonctionnelle · UX · design · registres de décisions |
| **Réserve** | BPMN ou diagrammes formels **peuvent** exister — **pas** systématiques dans chaque pilote |

### Famille 3 — Livrer

| Champ | Contenu |
|-------|---------|
| **Question** | Qu'est-ce qui change concrètement dans le produit ? |
| **Artefacts** | Incrément delivery · rapport d'implémentation · PR · documentation de changement · clôture d'incrément |
| **Valeur métier** | Progrès mesurable · historique de merge · reprise par un autre intervenant |
| **Trace Git** | Pull requests · rapports delivery · closure reports |
| **Réserve** | Livrer ≠ mettre en production sans cycle release dédié |

### Famille 4 — Vérifier

| Champ | Contenu |
|-------|---------|
| **Question** | Comment sait-on que l'incrément tient la route ? |
| **Artefacts** | Stratégie QA · scénarios de test · rapport d'exécution · review pack · preuve runtime |
| **Valeur métier** | Critères reliés au métier · réserves visibles · pas de « ça marche chez moi » seul |
| **Trace Git** | Dossiers QA · specs E2E · review handoff |
| **Réserve** | Un build vert ne suffit pas — validation humaine reste requise |

### Famille 5 — Exploiter et apprendre

| Champ | Contenu |
|-------|---------|
| **Question** | Comment le projet survit-il à la livraison et s'améliore-t-il ? |
| **Artefacts** | Release readiness · runbook · REX · rapport de capitalisation |
| **Valeur métier** | Reprise · leçons exploitables · amélioration méthode **candidate** |
| **Trace Git** | Rapports capitalization · REX pilote · readiness pré-delivery |
| **Réserve** | Release production complète et observabilité RUN **ne sont pas** démontrées par les sources consultées ; elles restent présentées ici comme des **catégories méthodologiques cibles** |

---

## 5. Cycles et artefacts

Chaque **cycle SFIA** vise un ou plusieurs artefacts des familles ci-dessus :

```text
Cadrage     → Famille 1
Conception  → Famille 2
Delivery    → Famille 3
QA          → Famille 4
Release/RUN → Famille 5
Capitalisation → Famille 5
```

Un cycle **sans livrable nommé** est un signal d'alerte — pas une fin de travail.

---

## 6. Exemples de traces Git

Le lecteur Discovery **n'a pas besoin** d'ouvrir le repository. Il doit comprendre que les livrables **existent** quelque part de façon vérifiable :

| Type de trace | Ce que cela prouve |
|---------------|-------------------|
| Commit + PR mergée | Un incrément a été intégré |
| Registre de décisions | Un arbitrage structurant est documenté |
| Rapport QA | Des critères ont été testés |
| Review pack / handoff | Une relecture structurée a eu lieu |
| Rapport de capitalisation | Des leçons ont été formalisées |

Les chemins détaillés sont réservés aux **sections gouvernance** et au review pack — pas au corps lecteur.

---

## 7. Livrables et reprise du projet

Les artefacts SFIA servent à **reprendre** un projet :

- un nouveau chef de projet lit le cadrage et le backlog ;
- un développeur retrouve les décisions dans Git ;
- Morris ou le sponsor vérifie les gates passées ;
- l'équipe QA reprend les scénarios et réserves ouvertes.

Sans livrables versionnés, la reprise repose sur la mémoire — fragile.

---

## 8. Limites de la galerie

Cette page **ne** :

- liste pas tous les fichiers du repository ;
- n'expose pas les templates complets ;
- n'attribue pas tous les artefacts à NovaBuild ;
- ne promet pas que chaque famille est **pleinement** documentée dans chaque projet ;
- ne remplace pas l'**Acte VII** pour approfondir la méthode.

C'est une **carte de valeur** — pas un inventaire technique.

---

## 9. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Sans artefacts nommés, le projet semble avancer — mais personne ne sait ce qui fait foi. |
| **Résolution** | SFIA impose des **livrables par cycle** — identifiables et traçables dans Git. |
| **Preuve** | Cinq familles couvrent le parcours cadrage → capitalisation · catégories vérifiées dans des pilotes documentés. |

---

## 10. Transition vers l'Acte V

Vous voyez **ce que** SFIA produit. La question suivante est **pourquoi** cette chaîne reste cohérente — et **où** sont ses limites.

> **Ces artefacts existent. Qu'est-ce qui garantit leur cohérence et leurs limites ?**

**→ Continuer : [ACTE V — Pourquoi cela fonctionne](sfia-discovery-act-05-why-it-works-editorial-draft.md)**

**← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**

---

## 11. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Framing · scope · backlog | Pilote documentaire SFIA — dossiers 00-framing · 03-backlog |
| Architecture · UX · design | 01-functional-architecture · 02-ux-ui · 04-design |
| Delivery · PR | 07-delivery-inc-0N · pr-readiness reports |
| QA · review pack | 08-qa-test · sfia-review-handoff · cycle execution template |
| Capitalisation · REX | 09-capitalization · standards sfia-v2 |
| Absences honnêtes | BPMN pilote · release prod · runbook prod — non systématiques |

---

## 12. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | Cinq familles visibles maximum | ✓ |
| A2 | Distinction activité / livrable / preuve / décision | ✓ |
| A3 | Aucune attribution abusive NovaBuild | ✓ |
| A4 | Réserve sur absences (release prod, BPMN) | ✓ |
| A5 | Transition Acte V | ✓ |

---

## Contenu lecteur — corps principal (PD-05B)

*Sections 1–10 ci-dessus.*
