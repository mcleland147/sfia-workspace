# SFIA — Controlled Delivery Standard

**Domaine SFIA** : Delivery Method  
**Statut** : Draft — Hardened  
**Origine** : Retour d'expérience terrain (ex. Interv360 INC-01 phase 2)  
**Objet** : Standardiser une méthode de **Controlled Delivery** (delivery contrôlé), combinant micro-cycles de sécurisation et réalisation groupée contrôlée.

**Référence terrain (exemple) :** [`inc-01-phase-2-rex.md`](../../projects/interv360/archive/inc-01-phase-2-rex.md)

---

## 1. Objectif

Ce **standard SFIA** définit une méthode pour passer d'un cadrage fonctionnel à une réalisation applicative contrôlée.

Il vise à éviter deux dérives opposées :

- surdocumenter chaque micro-évolution ;
- coder trop vite sans garde-fous.

Le principe central est :

> Adapter le niveau de contrôle au niveau de maturité du sujet.

---

## 2. Définitions clés

| Terme | Définition |
|-------|------------|
| **Controlled Delivery** | Méthode SFIA de delivery contrôlé articulant phase 1 et phase 2 |
| **Delivery contrôlé** | Livraison où périmètre, interdits, garde-fous et preuves sont explicites |
| **Phase 1 — Cadrage fin** | Rythme par micro-cycles lorsque le sujet est encore instable |
| **Phase 2 — Réalisation groupée contrôlée** | Rythme accéléré pour un lot cohérent lorsque les règles sont stabilisées |
| **Reset / rollback** | Mécanisme de retour à un état connu (données, statut, traces) |
| **Garde-fous** | Contraintes explicites empêchant la dérive de périmètre ou de qualité |
| **Capitalisation** | Transformation des enseignements en actifs SFIA réutilisables |
| **Standard SFIA** | Document normatif de méthode, checklist, template et prompts associés |

---

## 3. Principe de la méthode

La méthode distingue deux rythmes complémentaires :

| Phase | Rythme | Usage |
|------|--------|-------|
| Phase 1 | Micro-cycles | Périmètre instable ou règles incomplètes |
| Phase 2 | Réalisation groupée contrôlée | Règles stabilisées et lot cohérent identifié |

La phase 1 sécurise.

La phase 2 accélère sans supprimer le cadre.

---

## 4. Phase 1 — Cadrage fin

La phase 1 sert à stabiliser :

- le go / no-go ;
- les choix techniques ;
- le périmètre data ;
- les objets manipulés ;
- les interdits ;
- les vues readonly ou équivalent consultatif ;
- le reset ou rollback ;
- les premières décisions de transition ;
- les garde-fous de delivery.

Elle avance par micro-cycles courts et documentés.

---

## 5. Phase 2 — Réalisation groupée contrôlée

La phase 2 peut être ouverte lorsque les **signaux de maturité** sont suffisants (voir section 7).

Elle permet d'implémenter un **lot fonctionnel cohérent** dans un même cycle, avec tests renforcés et documentation de clôture synthétique.

---

## 6. Critères de passage phase 1 → phase 2

### Ce qui déclenche le passage

Le passage en phase 2 est **autorisé** si :

| Critère | Preuve minimale attendue |
|--------|--------------------------|
| Périmètre fonctionnel | Documenté et validé en revue courte |
| Objets métier | Liste stable des objets manipulés |
| Données | Cadrage data écrit (autorisé / interdit) |
| Interdits | Liste explicite (technique, fonctionnel, data) |
| Garde-fous | Écrits par catégorie |
| Parcours readonly ou équivalent | Présent, ou justification d'absence |
| Flux nominal ou première action | Décidé et borné |
| Reset / rollback | Mécanisme décrit et testable |
| Tests | Scénarios minimaux listés |
| Risque de dérive | Évalué et accepté |

### Ce qui bloque le passage

Le passage est **bloqué** si :

- le périmètre change encore à chaque discussion ;
- les données autorisées ne sont pas cadrées ;
- les actions métier restent contradictoires ;
- le reset ou rollback n'est pas défini ;
- les tests attendus sont inconnus ;
- les interdits ne sont pas écrits ;
- le lot cible n'est pas cohérent ou trop large.

### Risque acceptable

Un risque résiduel est acceptable en phase 2 si :

- il est nommé ;
- il est couvert par reset, tests ou limites de démo ;
- il ne concerne pas des sujets explicitement interdits (ex. données réelles, backend non arbitré).

---

## 7. Signaux de maturité

Signaux indiquant que la phase 2 devient pertinente :

- les mêmes règles sont répétées sans contradiction sur plusieurs cycles ;
- le parcours consultatif (readonly ou équivalent) est stable ;
- la première transition ou le flux nominal est décidé ;
- les interdits ne sont plus rediscutés à chaque itération ;
- les tests attendus peuvent couvrir le lot en une passe ;
- le reset ou rollback est déjà en place ;
- l'équipe préfère livrer de la valeur visible plutôt qu'un nouveau micro-document.

---

## 8. Signaux de blocage

Signaux imposant de rester en phase 1 :

- désaccord persistant sur le périmètre ou les statuts ;
- données encore floues (réelles vs fictives, persistance, accès) ;
- actions métier non priorisées ;
- impacts techniques non estimés ;
- absence de mécanisme de retour arrière ;
- peur légitime de dérive non mitigée par des garde-fous.

---

## 9. Garde-fous par catégorie

### Garde-fous fonctionnels

- périmètre autorisé et hors périmètre écrits ;
- transitions ou actions bornées ;
- pas de workflow hors lot décidé ;
- limites de démonstration explicites.

### Garde-fous techniques

- stack et persistance arbitrées ;
- écritures centralisées (ex. couche data dédiée) ;
- pas d'appel réseau / API / DB sauf décision explicite ;
- tests build et parcours nominal.

### Garde-fous data

- données autorisées et interdites listées ;
- pas de données personnelles réelles sans cadre dédié ;
- seed ou jeu de démo reproductible ;
- reset compatible avec le cadrage data.

### Garde-fous UX

- caractère démonstration visible ;
- pas d'ambiguïté avec un outil de production ;
- une action principale à la fois si pertinent ;
- messages de confirmation et limites affichés.

### Garde-fous delivery

- une branche par cycle ;
- pas de push / PR / publication sans demande explicite ;
- summary de clôture après livraison ;
- validation avant diffusion externe.

---

## 10. Livrables recommandés

| Moment | Livrable |
|-------|----------|
| Avant réalisation | Décision de phase 2 |
| Pendant réalisation | Code + tests |
| Après réalisation | Summary de clôture |
| Après validation | Validation fonctionnelle |
| Après démonstration | Script de démo |
| Après apprentissage | REX |
| Après REX | Standard SFIA réutilisable |

---

## 11. Quand rester en micro-cycles

Rester en phase 1 si les signaux de blocage prévalent (section 8), notamment :

- périmètre flou ;
- data mal cadrée ;
- actions métier incertaines ;
- impacts techniques inconnus ;
- rollback non clair ;
- tests non définis.

---

## 12. Quand passer en réalisation groupée

Passer en phase 2 si les signaux de maturité prévalent (section 7) **et** que les critères de la section 6 sont remplis.

---

## 13. Valeur projet

Cette méthode aide un projet à :

- **aller plus vite** une fois le cadre stabilisé, sans abandonner les garde-fous ;
- **éviter la surdocumentation** de chaque micro-évolution ;
- **éviter le développement non cadré** (scope creep, intégrations précoces) ;
- **préserver la traçabilité** via décisions, summaries et validation ;
- **produire de la valeur démontrable** (parcours rejouable, tests, script de démo).

---

## 14. Anti-patterns

| Anti-pattern | Pourquoi c'est risqué |
|--------------|----------------------|
| Micro-cycle sur chaque ligne de code | Ralentit sans sécuriser davantage |
| Phase 2 sans décision écrite | Dérive de périmètre |
| Lot trop large en phase 2 | Tests et garde-fous insuffisants |
| Pas de reset / rollback | Démo non rejouable |
| Confondre démo et production | Attentes irréalistes |
| Capitalisation reportée à la fin du projet | Perte d'enseignements |
| Garde-fous implicites | Non vérifiables en revue |

---

## 15. Critères de sortie de cycle

Un cycle Controlled Delivery est clos lorsque :

- le livrable du cycle est produit (code, document ou actif méthode) ;
- build et tests OK si applicable ;
- garde-fous vérifiés ;
- limites explicitées ;
- summary ou équivalent rédigé ;
- prochaine étape recommandée ;
- working tree propre (hors fichiers non suivis acceptés).

---

## 16. Valeur SFIA

Ce standard fait de SFIA un **cadre de delivery adaptatif**.

SFIA sert à :

- décider ;
- cadrer ;
- accélérer ;
- contrôler ;
- valider ;
- capitaliser.

La valeur principale est de choisir le bon niveau de contrôle au bon moment.

---

## 17. Actifs associés

| Actif | Fichier |
|-------|---------|
| Checklist | [`controlled-delivery-checklist.md`](controlled-delivery-checklist.md) |
| Template | [`controlled-delivery-template.md`](controlled-delivery-template.md) |
| Famille de prompts | [`controlled-delivery-prompt-family.md`](controlled-delivery-prompt-family.md) |
