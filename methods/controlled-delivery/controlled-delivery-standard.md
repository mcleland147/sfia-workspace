# SFIA — Controlled Delivery Standard

**Domaine SFIA** : Delivery Method  
**Statut** : Draft  
**Origine** : Interv360 INC-01 Phase 2 REX  
**Objet** : Standardiser une méthode de delivery contrôlé, combinant micro-cycles de sécurisation et réalisation groupée contrôlée.

**Référence terrain :** [`inc-01-phase-2-rex.md`](../../projects/interv360/07-delivery/inc-01-phase-2-rex.md)

---

## 1. Objectif

Ce standard définit une méthode SFIA pour passer d'un cadrage fonctionnel à une réalisation applicative contrôlée.

Il vise à éviter deux dérives opposées :

- surdocumenter chaque micro-évolution ;
- coder trop vite sans garde-fous.

Le principe central est :

> Adapter le niveau de contrôle au niveau de maturité du sujet.

---

## 2. Principe de la méthode

La méthode distingue deux rythmes complémentaires :

| Phase | Rythme | Usage |
|------|--------|-------|
| Phase 1 | Micro-cycles | Quand le périmètre est instable |
| Phase 2 | Réalisation groupée contrôlée | Quand les règles sont stabilisées |

La phase 1 sécurise.

La phase 2 accélère.

---

## 3. Phase 1 — Cadrage fin

La phase 1 sert à stabiliser :

- le go / no-go ;
- les choix techniques ;
- le périmètre data ;
- les objets manipulés ;
- les interdits ;
- les vues readonly ;
- le reset ou rollback ;
- les premières décisions de transition ;
- les garde-fous de delivery.

Elle peut avancer par micro-cycles courts et documentés.

---

## 4. Phase 2 — Réalisation groupée contrôlée

La phase 2 peut être ouverte lorsque :

- le périmètre est stabilisé ;
- les données autorisées sont claires ;
- les interdits sont explicites ;
- les transitions ou actions candidates sont connues ;
- le rollback/reset est prévu ;
- les tests attendus sont identifiés.

Elle permet d'implémenter un lot fonctionnel cohérent dans un même cycle.

---

## 5. Critères de passage phase 1 → phase 2

Le passage en phase 2 est autorisé si les critères suivants sont remplis :

| Critère | Attendu |
|--------|---------|
| Périmètre fonctionnel | Clarifié |
| Objets métier | Identifiés |
| Données | Cadrées |
| Interdits | Écrits |
| Garde-fous techniques | Écrits |
| Parcours readonly ou équivalent | Présent ou non nécessaire |
| Première action ou flux nominal | Décidé |
| Reset / rollback | Prévu |
| Tests | Définis |
| Risque de dérive | Acceptable |

---

## 6. Garde-fous obligatoires

Un cycle de réalisation groupée contrôlée doit définir :

- ce qui est autorisé ;
- ce qui est interdit ;
- les données manipulées ;
- les transitions ou actions permises ;
- les transitions ou actions interdites ;
- le mécanisme de reset ou rollback ;
- les tests attendus ;
- les limites de la démonstration ;
- les conditions de clôture.

---

## 7. Livrables recommandés

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

## 8. Quand rester en micro-cycles

Il faut rester en micro-cycles si :

- le périmètre est flou ;
- les données sont mal cadrées ;
- les actions métier sont incertaines ;
- les impacts techniques sont inconnus ;
- les risques de dérive sont élevés ;
- le rollback n'est pas clair ;
- les tests attendus ne sont pas définis.

---

## 9. Quand passer en réalisation groupée

Il est pertinent de passer en réalisation groupée si :

- les règles sont stabilisées ;
- les interdits sont connus ;
- les actions forment un lot cohérent ;
- les tests peuvent couvrir le lot ;
- le reset ou rollback est maîtrisé ;
- la valeur produit devient plus importante que le détail documentaire.

---

## 10. Valeur SFIA

Ce standard permet à SFIA de devenir un cadre de delivery adaptatif.

SFIA ne sert pas seulement à documenter.

Elle sert à :

- décider ;
- cadrer ;
- accélérer ;
- contrôler ;
- valider ;
- capitaliser.

La valeur principale est la capacité à choisir le bon niveau de contrôle au bon moment.

---

## 11. Actifs associés

| Actif | Fichier |
|-------|---------|
| Checklist | [`controlled-delivery-checklist.md`](controlled-delivery-checklist.md) |
| Template | [`controlled-delivery-template.md`](controlled-delivery-template.md) |
| Famille de prompts | [`controlled-delivery-prompt-family.md`](controlled-delivery-prompt-family.md) |
