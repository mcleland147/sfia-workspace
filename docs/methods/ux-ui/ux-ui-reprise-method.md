# Méthode — Reprise UX/UI documentaire

**Type** : Méthode SFIA  
**Domaine** : UX/UI — reprise documentaire  
**Statut** : Draft  
**Usage** : Réutilisable  
**Source d'inspiration** : Cycle Interv360 `06-ux-ui`

---

## 1. Objectif

Cette méthode décrit **comment structurer une reprise UX/UI documentaire** après cadrage, clarification, ADR ou architecture fonctionnelle détaillée.

Elle permet de **reprendre un existant UX/UI sans repartir de zéro** : brief, décisions atelier, maquettes ou Figma V1, captures, KPI dashboard — en les réalignant sur une vision fonctionnelle stabilisée.

Elle produit une **base UX fonctionnelle exploitable** avant maquette V2, backlog, tests ou delivery.

Elle aide à stabiliser :

- l'état des lieux UX/UI existant ;
- le périmètre de reprise ;
- les parcours utilisateurs ;
- l'inventaire des écrans ;
- les spécifications fonctionnelles écran ;
- les vues dashboard ;
- les écarts maquette / architecture ;
- les garde-fous et exclusions.

Elle **ne produit pas directement** :

- maquette UI finale ;
- design system ;
- composant front ;
- backlog ;
- user stories ;
- cas ou scénarios de tests ;
- code ;
- API ;
- modèle SQL ;
- modèle technique ;
- BPMN ;
- SVG ;
- planning delivery ;
- publication Notion.

---

## 2. Cas d'usage

Situations adaptées :

- projet avec **brief UX/UI existant** (validé ou en cours de validation) ;
- **Figma V1** ou maquettes initiales déjà produites ;
- **décisions UX déjà tranchées** (atelier, validation, arbitrages) ;
- **architecture fonctionnelle détaillée** disponible (ou équivalent : domaines, objets, statuts) ;
- besoin de **réaligner** parcours, écrans, dashboard et garde-fous sur le fonctionnel ;
- besoin de produire une **base claire** avant maquette V2, backlog ou delivery ;
- écarts identifiés entre **référence visuelle** et **architecture fonctionnelle** à documenter.

Situations moins adaptées :

- projet sans aucun artefact UX/UI ni brief ;
- attente d'une maquette pour « découvrir » les parcours ;
- architecture fonctionnelle absente et non remplaçable par un cadre métier équivalent ;
- décisions UX structurantes majeures non encore arbitrées.

---

## 3. Principes

| Principe | Application |
|----------|-------------|
| Ne pas repartir de zéro | Reprendre brief, atelier, Figma V1, captures — les inventorier et les transposer |
| Distinguer référence visuelle et cible finale | Figma V1 = jalon présentable, non définitif ; écarts documentés, pas refonte maquette |
| Respecter les décisions déjà acquises | Décisions atelier / validation : transposer, ne pas redébattre |
| Relier parcours, écrans, objets métier et statuts | Chaque écran et parcours s'appuie sur le fonctionnel stabilisé |
| Documenter les écarts maquette / architecture | Réconciliation explicite sans produire de nouvelle maquette |
| Préserver les sources de vérité | Objets et statuts métier ne deviennent pas pilotés par le dashboard |
| Ne pas transformer UX en backlog | Parcours et specs ≠ user stories ni tickets |
| Ne pas produire de maquette dans ce cycle | Documentation UX fonctionnelle uniquement |
| Clôturer documentairement avant toute phase suivante | Acte de fin avec exclusions confirmées et suites nommées |

---

## 4. Entrées nécessaires

Prérequis documentaires ou décisionnels :

| Entrée | Apport attendu |
|--------|----------------|
| Brief UX/UI | Personas, parcours pressentis, écrans MVP, principes UX |
| Validation ou arbitrages UX | Points ouverts tranchés, checklist entrée design |
| Captures ou lien Figma V1 | Référence visuelle versionnée — non modifiée dans le cycle |
| Comptes rendus d'ateliers | Décisions UX, statuts, clôture sans signature, etc. |
| Architecture fonctionnelle | Domaines, objets, statuts, intégrations, dashboard fonctionnel |
| ADR structurantes | Garde-fous statuts, sync, anomalies, clôture locale |
| Objets métier | Données affichées, relations entre fiches et vues |
| Statuts | Libellés, badges, indicateurs vs statuts métier |
| Dashboard / KPI existants | Vues par profil, alertes, garde-fous surcharge |
| Contraintes métier | Règles RG, exclusions MVP, périmètre produit |

Sans ces entrées, le cycle peut démarrer avec des **hypothèses explicites** — à documenter dans le cadrage de reprise.

---

## 5. Livrables standard

Livrables d'un cycle de reprise UX/UI documentaire :

| Ordre | Livrable | Rôle |
|:-----:|----------|------|
| 1 | `ux-ui-reprise-analysis.md` | État des lieux ; inventaire existant ; points ouverts |
| 2 | `ux-ui-reprise-scope.md` | Cadrage du cycle ; périmètre ; exclusions ; sources |
| 3 | `user-journeys.md` | Parcours utilisateurs alignés statuts / objets / écrans |
| 4 | `screen-inventory.md` | Inventaire écrans ; matrices ; écarts référence visuelle |
| 5 | `screen-functional-specs.md` | Spécifications fonctionnelles par écran |
| 6 | `dashboard-ux-view.md` | Vues dashboard par profil ; KPI ; alertes |
| 7 | `ux-ui-summary.md` | Synthèse consolidée sans nouvelle décision |
| 8 | `ux-ui-cycle-closure.md` | Clôture du cycle ; garde-fous ; suites possibles |

**Emplacement recommandé projet :** `projects/<projet>/06-ux-ui/` (ou équivalent selon la numérotation du projet).

Ces livrables **ne constituent pas** un backlog ni une maquette finale.

---

## 6. Déroulé méthode

### 6.1 Analyser l'existant

**Objectif :** inventorier brief, Figma V1, ateliers, architecture fonctionnelle ; identifier ce qui est acquis, ce qui est ouvert.

**À produire :** `ux-ui-reprise-analysis.md`

### 6.2 Cadrer le cycle

**Objectif :** fixer périmètre inclus / exclus, sources, livrables prévus, décisions UX à transposer.

**À produire :** `ux-ui-reprise-scope.md`

### 6.3 Détailler les parcours

**Objectif :** consolider les parcours utilisateurs ; relier acteurs, écrans, statuts, objets.

**À produire :** `user-journeys.md`

### 6.4 Inventorier les écrans

**Objectif :** lister les écrans / vues ; matrices écrans × parcours × statuts ; écarts référence visuelle.

**À produire :** `screen-inventory.md`

### 6.5 Spécifier fonctionnellement les écrans

**Objectif :** décrire comportements, états, actions, données affichées, garde-fous par écran.

**À produire :** `screen-functional-specs.md`

### 6.6 Détailler les vues dashboard

**Objectif :** consolider vues par profil, KPI, alertes, priorisation — sans maquette finale.

**À produire :** `dashboard-ux-view.md`

### 6.7 Synthétiser

**Objectif :** vision consolidée ; décisions transposées ; écarts ; alignement fonctionnel.

**À produire :** `ux-ui-summary.md`

**Garde-fou :** la synthèse **consolide** — elle n'ajoute pas de nouvelles décisions structurantes.

### 6.8 Clôturer

**Objectif :** acter livrables, exclusions, points ouverts, suites possibles.

**À produire :** `ux-ui-cycle-closure.md`

### 6.9 Préparer PR ou capitalisation

**Objectif :** contrôle qualité, push branche, PR manuelle ou capitalisation méthode SFIA.

**Hors périmètre automatique :** merge, Notion, delivery.

---

## 7. Garde-fous

| Garde-fou | Explication |
|-----------|-------------|
| Ne pas créer de backlog | Le cycle documente, ne découpe pas |
| Ne pas créer de user stories | Parcours ≠ tickets produit |
| Ne pas créer de tests | Hors périmètre documentaire UX |
| Ne pas créer de code | Pas de composant, pas d'implémentation |
| Ne pas créer d'API | Pas de contrat technique |
| Ne pas créer de SQL | Pas de modèle de données |
| Ne pas créer de modèle technique | Le technique vient après |
| Ne pas créer de maquette finale | Figma V2 = phase ultérieure |
| Ne pas modifier les captures existantes | Référence visuelle versionnée intacte |
| Ne pas publier Notion sans demande explicite | Git = source de vérité |
| Ne pas modifier les BPMN ou SVG | Hors cycle UX reprise |
| Ne pas redébattre les décisions UX acquises | Transposer depuis atelier / validation |

---

## 8. Critères de sortie

Le cycle peut être considéré comme terminé lorsque :

- les **8 livrables** sont produits ;
- les **parcours** sont alignés avec objets, statuts et écrans ;
- les **écrans** sont inventoriés et spécifiés fonctionnellement ;
- le **dashboard** est clarifié par profil (non source de vérité) ;
- les **écarts** maquette / architecture sont documentés ;
- les **exclusions** sont respectées et confirmées en clôture ;
- les **points ouverts** sont listés comme non bloquants ;
- le cycle est **clôturé** documentairement ;
- l'**historique Git** du cycle est propre et traçable.

---

## 9. Suites possibles

Cette méthode **prépare** sans produire directement :

| Phase suivante | Ce que la reprise UX/UI apporte |
|----------------|----------------------------------|
| Maquette Figma V2 | Parcours, écrans, specs, écarts documentés |
| Backlog | Découpage ultérieur à partir des specs |
| Tests | Cas à dériver plus tard des parcours et règles |
| Architecture technique | Hypothèses à partir du fonctionnel et des écrans |
| Delivery | Implémentation après maquette et backlog |
| Capitalisation méthode SFIA | Templates, prompts, enrichissement README méthodes |

Ces phases sont **alimentées** par la méthode ; elles ne sont **pas déclenchées automatiquement** à la clôture.

---

## 10. Positionnement dans un cycle projet SFIA

### Progression type

```
1. Cadrage initial
2. Clarification du besoin
3. Processus / BPMN
4. ADR structurantes
5. Architecture fonctionnelle détaillée
6. Reprise UX/UI documentaire          ← cette méthode
7. Maquette UX/UI V2 (design détaillé)
8. Spécifications / cadrage technique
9. Delivery / backlog / tests
```

### Règles de positionnement

| Règle | Explication |
|-------|-------------|
| Reprise UX/UI **après** architecture fonctionnelle (ou équivalent) | Parcours et écrans s'appuient sur objets et statuts stabilisés |
| Reprise UX/UI **avant** maquette V2 finale | La documentation précède la refonte visuelle |
| Reprise UX/UI **ne remplace pas** le brief | Elle le transpose et le réconcilie |
| Figma V1 = **référence**, pas cible figée | Écarts documentés, captures non modifiées |
| Reprise UX/UI **ne remplace pas** les ADR | Garde-fous intégrés, non réécrits |

---

*Méthode SFIA — Reprise UX/UI documentaire — Draft — Réutilisable.*
