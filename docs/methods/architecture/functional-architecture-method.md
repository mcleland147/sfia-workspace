# Méthode — Architecture fonctionnelle détaillée

**Type** : Méthode SFIA  
**Domaine** : Architecture fonctionnelle  
**Statut** : Draft  
**Usage** : Réutilisable  
**Source d'inspiration** : Cycle Interv360 `05-functional-architecture`

---

## 1. Objectif

Cette méthode décrit **comment structurer une architecture fonctionnelle détaillée** à partir d'un besoin projet déjà clarifié.

Elle permet de produire une **vision fonctionnelle exploitable** avant UX/UI, spécifications détaillées, cadrage technique ou delivery.

Elle aide à stabiliser :

- les responsabilités fonctionnelles ;
- les objets métier ;
- les statuts et transitions ;
- les intégrations vues du métier ;
- le pilotage et les alertes.

Elle **ne produit pas directement** :

- backlog ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code ;
- API ;
- modèle SQL ;
- maquette UI finale ;
- BPMN ;
- ADR — sauf si un **nouveau** besoin de décision structurante est identifié (auquel cas une ADR dédiée doit être ouverte, pas absorbée dans l'architecture fonctionnelle).

---

## 2. Quand utiliser cette méthode

Situations adaptées :

- après une phase de **clarification du besoin** ;
- après une **première vision de processus** (BPMN ou équivalent) ;
- **après ou en parallèle** d'ADR structurantes ;
- **avant** UX/UI ;
- **avant** conception technique ;
- **avant** découpage backlog ;
- lorsque le projet nécessite une clarification des **responsabilités fonctionnelles** ;
- lorsque des **objets métier**, **statuts**, **règles** ou **vues** doivent être stabilisés.

Situations moins adaptées :

- besoin encore trop flou pour nommer des objets ou des statuts ;
- décisions structurantes majeures non encore arbitrées ;
- attente d'une solution technique ou d'un prototype pour « découvrir » le métier.

---

## 3. Positionnement dans un cycle projet SFIA

### Progression type

```
1. Cadrage initial
2. Clarification du besoin
3. Processus / BPMN
4. ADR structurantes
5. Architecture fonctionnelle détaillée   ← cette méthode
6. UX/UI
7. Spécifications fonctionnelles détaillées
8. Cadrage technique
9. Delivery / backlog / tests
```

### Règles de positionnement

| Règle | Explication |
|-------|-------------|
| Architecture fonctionnelle **après** clarification et processus | Le métier est suffisamment connu pour être structuré |
| Architecture fonctionnelle **après ou avec** ADR structurantes | Les décisions durables guident statuts, intégrations et pilotage |
| Architecture fonctionnelle **avant** UX/UI | Les parcours s'appuient sur des objets et statuts stabilisés |
| Architecture fonctionnelle **avant** delivery | Le backlog ne doit pas précéder la vision fonctionnelle |
| Architecture fonctionnelle **ne remplace pas** les ADR | Elle les intègre, ne les réécrit pas |
| Architecture fonctionnelle **ne remplace pas** le BPMN | Elle consolide, ne redessine pas les flux |

Cette méthode se situe **avant le delivery**.

---

## 4. Entrées nécessaires

Prérequis documentaires ou décisionnels :

| Entrée | Apport attendu |
|--------|----------------|
| Contexte projet | Périmètre, enjeux, contraintes |
| Objectif métier | Finalité du produit ou du module |
| Périmètre MVP ou cible | Limites temporelles et fonctionnelles |
| Acteurs principaux | Rôles, responsabilités, consommateurs de la vision |
| Processus connus | BPMN, schémas ou descriptions de flux |
| Règles métier connues | RG, politiques, contraintes opérationnelles |
| Décisions structurantes déjà prises | ADR, arbitrages, principes validés |
| Contraintes d'intégration connues | Systèmes tiers, sync, erreurs attendues |
| Limites explicites | Hors périmètre, non-objectifs |
| Documents de référence existants | Cadrage, clarification, mapping statuts, etc. |

Sans ces entrées, le cycle peut démarrer avec des **hypothèses explicites** — à documenter dans le cadrage du cycle.

---

## 5. Sorties attendues

Livrables d'un cycle d'architecture fonctionnelle détaillée :

| Livrable | Rôle |
|----------|------|
| Cadrage du périmètre fonctionnel | Ouvre le cycle, définit inclus / exclus |
| Domaines fonctionnels | Blocs de responsabilité |
| Objets métier | Éléments manipulés et leurs relations |
| Statuts et transitions | États fonctionnels et règles de passage |
| Vue fonctionnelle des intégrations | Échanges externes du point de vue métier |
| Dashboard, alertes et pilotage | Visibilité opérationnelle |
| Synthèse d'architecture fonctionnelle | Consolidation sans nouvelle décision |
| Clôture du cycle | Acte de fin, suites possibles |

Ces livrables **ne constituent pas** un backlog.

---

## 6. Principes directeurs

| Principe | Application |
|----------|-------------|
| Séparer le métier du technique | Pas de SQL, API, classes ou workflows techniques dans ce cycle |
| Distinguer source de vérité, cible externe et vue de pilotage | Chaque rôle est explicite |
| Distinguer statut métier et indicateur | Les indicateurs ne remplacent pas le cycle principal |
| Clarifier les responsabilités par domaine | Un domaine = un périmètre de décision fonctionnelle |
| Éviter les décisions implicites | Toute règle structurante est nommée et tracée |
| Rendre les règles métier traçables | Lien avec RG, ADR, historique fonctionnel |
| Ne pas mélanger architecture fonctionnelle et solution technique | La technique vient après |
| Documenter les exclusions | Répétées dans cadrage, synthèse et clôture |
| Préparer UX/UI sans concevoir les écrans finaux | Vues et parcours attendus, pas maquettes |
| Préparer le delivery sans créer de backlog | La méthode alimente, ne découpe pas |

---

## 7. Étapes de production

### 7.1 Cadrer le périmètre fonctionnel

**Objectif :** définir ce que couvre le cycle et ce qu'il exclut.

**À produire :**

- objectifs ;
- périmètre inclus ;
- hors périmètre ;
- acteurs ;
- objets pressentis ;
- règles à clarifier ;
- dépendances (cadrage, BPMN, ADR).

### 7.2 Identifier les domaines fonctionnels

**Objectif :** structurer le produit en grands blocs de responsabilité fonctionnelle.

**À produire :**

- domaines ;
- responsabilité principale ;
- entrées ;
- sorties ;
- acteurs concernés ;
- limites entre domaines.

### 7.3 Identifier les objets métier

**Objectif :** nommer les éléments métier manipulés par le système.

**À produire :**

- objets ;
- définition ;
- rôle ;
- cycle de vie éventuel ;
- liens entre objets ;
- exclusions techniques explicites.

### 7.4 Définir les statuts et transitions

**Objectif :** formaliser les états fonctionnels importants.

**À produire :**

- statuts métier ;
- indicateurs éventuels ;
- transitions autorisées ;
- règles d'entrée ;
- règles de sortie ;
- cas particuliers et coexistences ;
- statuts non synchronisables si applicable.

### 7.5 Décrire les intégrations fonctionnelles

**Objectif :** décrire les échanges externes du point de vue métier, sans API ni modèle technique.

**À produire :**

- systèmes ou cibles externes ;
- rôle fonctionnel de chaque cible ;
- source de vérité ;
- données échangées (fonctionnelles) ;
- événements déclencheurs ;
- cas de succès ;
- cas d'erreur ;
- exclusions techniques.

### 7.6 Décrire dashboard, alertes et pilotage

**Objectif :** décrire la visibilité opérationnelle attendue.

**À produire :**

- vues principales par profil ;
- indicateurs ;
- alertes ;
- priorisation ;
- règles de visibilité ;
- limites du dashboard (non source de vérité).

### 7.7 Consolider la synthèse fonctionnelle

**Objectif :** produire une vision consolidée et stable.

**À produire :**

- résumé des domaines ;
- résumé des objets ;
- résumé des statuts ;
- règles structurantes ;
- intégrations ;
- dashboard ;
- alignement ADR ;
- points de vigilance.

**Garde-fou :** la synthèse **consolide** — elle n'ajoute pas de nouvelles décisions structurantes.

### 7.8 Clôturer le cycle

**Objectif :** acter ce qui est stabilisé, ce qui reste ouvert et ce qui peut alimenter la phase suivante.

**À produire :**

- livrables réalisés ;
- décisions consolidées ;
- exclusions confirmées ;
- points ouverts ;
- risques résiduels ;
- passage possible vers UX/UI, spécification ou cadrage technique.

---

## 8. Questions structurantes

### Périmètre

- Quel problème métier cherche-t-on à structurer ?
- Quelle partie du cycle métier est couverte ?
- Qu'est-ce qui est explicitement hors périmètre ?
- Quels livrables existent déjà ?

### Domaines

- Quels grands blocs de responsabilité fonctionnelle existent ?
- Quel domaine porte quelle décision ?
- Quelles responsabilités ne doivent pas être mélangées ?

### Objets métier

- Quels objets sont réellement manipulés par les utilisateurs ?
- Quels objets portent les règles métier ?
- Quels objets ne sont que techniques et doivent rester hors du modèle fonctionnel ?

### Statuts

- Quels statuts représentent le cycle métier principal ?
- Quels éléments sont seulement des indicateurs ?
- Quels statuts peuvent coexister ?
- Quels statuts ne doivent pas être synchronisés vers un système externe ?

### Intégrations

- Qui est source de vérité ?
- Quel système est seulement cible ou consommateur ?
- Qu'est-ce qui bloque ou ne bloque pas le cycle métier ?
- Quelles erreurs doivent être visibles au pilotage ?

### Dashboard

- Que doit rendre visible le pilotage ?
- Qu'est-ce qui doit rester une donnée métier source ?
- Quelle différence entre alerte, statut et priorité ?

### Clôture

- Qu'est-ce qui permet de considérer le cycle terminé ?
- Quels sujets sont volontairement reportés ?
- Quelle phase peut démarrer ensuite ?

---

## 9. Critères de qualité

Une architecture fonctionnelle détaillée de qualité :

- a un **périmètre clair** et des **exclusions explicites** ;
- attribue des **responsabilités distinctes** à chaque domaine ;
- nomme des **objets métier compréhensibles** par le métier ;
- propose des **statuts cohérents** et des **transitions traçables** ;
- décrit les **intégrations fonctionnellement**, sans glissement technique ;
- identifie clairement la **source de vérité** ;
- distingue **indicateurs** et **statuts métier** ;
- ne fait **pas** du dashboard une source de vérité ;
- **respecte** les décisions ADR existantes ;
- n'introduit **aucun** contenu technique par glissement ;
- ne génère **aucun** backlog prématurément.

---

## 10. Erreurs fréquentes à éviter

| Erreur | Conséquence |
|--------|-------------|
| Transformer les objets métier en modèle SQL | Glissement technique prématuré |
| Transformer les statuts en tickets de backlog | Confusion architecture / delivery |
| Confondre workflow métier et BPMN détaillé | Redondance ou contradiction avec le cycle processus |
| Confondre dashboard et source de vérité | Décisions pilotées par l'affichage |
| Confondre intégration fonctionnelle et API | Contrats techniques dans le mauvais cycle |
| Créer trop tôt des user stories | Découpage avant stabilisation |
| Créer des tests dans le cycle d'architecture | Hors périmètre documentaire |
| Créer des écrans UX/UI finaux | Confusion avec la phase design |
| Ajouter des décisions structurantes sans ADR | Décisions non gouvernées |
| Produire une méthode ou un livrable trop spécifique à un seul projet | Faible réutilisabilité |

---

## 11. Critères de fin de cycle

Le cycle peut être clôturé lorsque :

- le périmètre fonctionnel est défini ;
- les domaines sont stabilisés ;
- les objets métier sont documentés ;
- les statuts et transitions sont documentés ;
- les intégrations fonctionnelles sont clarifiées ;
- les alertes et vues de pilotage sont décrites ;
- les décisions structurantes sont alignées avec les ADR ;
- les exclusions sont explicites ;
- les points ouverts sont listés ;
- la phase suivante est identifiable.

---

## 12. Passage à la phase suivante

Cette méthode **prépare** sans produire directement :

| Phase suivante | Ce que l'architecture fonctionnelle apporte |
|--------------|---------------------------------------------|
| UX/UI | Domaines, objets, statuts, vues par profil |
| Spécification fonctionnelle détaillée | Règles, transitions, intégrations consolidées |
| Cadrage technique | Hypothèses d'architecture à partir du fonctionnel |
| Backlog futur | Découpage ultérieur, pas dans ce cycle |
| Tests futurs | Cas à dériver plus tard des règles stabilisées |
| Arbitrages complémentaires | Points ouverts, second lot ADR si besoin |

Ces phases sont **alimentées** par la méthode ; elles ne sont **pas déclenchées automatiquement** à sa clôture.

---

*Méthode SFIA — Architecture fonctionnelle détaillée — Draft — Réutilisable.*
