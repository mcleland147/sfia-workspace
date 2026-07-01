# SFIA — Controlled Delivery Prompt Family

**Domaine SFIA** : Delivery Method  
**Statut** : Draft — Hardened  
**Référence** : [`controlled-delivery-standard.md`](controlled-delivery-standard.md)

Cette famille de prompts structure les cycles de **Controlled Delivery** (delivery contrôlé) SFIA.

---

## Garde-fous communs à tous les prompts

Chaque prompt Controlled Delivery doit :

- vérifier la branche source et l'état Git ;
- relire le cadrage et les documents de référence ;
- respecter le périmètre autorisé et les interdits du cycle ;
- ne pas élargir le scope sans décision explicite ;
- **ne pas push**, **ne pas créer de PR**, **ne pas publier dans Notion** sans demande explicite ;
- committer uniquement les fichiers du périmètre du cycle ;
- recommander le cycle suivant en fin de livrable.

---

## 1. Prompt — Décision phase 2

**Objectif :** acter le passage d'un incrément en **phase 2 — réalisation groupée contrôlée**.

**Structure attendue :**

- vérifier branche et état Git ;
- relire les documents de cadrage ;
- créer un document `phase-2-delivery-decision.md` ;
- formaliser les raisons du passage en phase 2 ;
- lister le lot fonctionnel cible ;
- lister les signaux de maturité et les blocages levés ;
- maintenir les garde-fous ;
- committer uniquement le document.

**Garde-fous :** ne pas modifier le code applicatif ; ne pas implémenter le lot cible dans ce cycle.

---

## 2. Prompt — Réalisation groupée contrôlée

**Objectif :** implémenter un lot fonctionnel cohérent avec garde-fous.

**Structure attendue :**

- vérifier branche et état Git ;
- créer la branche de réalisation ;
- relire la décision phase 2 ;
- implémenter uniquement le lot autorisé ;
- centraliser les écritures ;
- maintenir le reset / rollback ;
- ajouter ou renforcer les tests ;
- vérifier les interdits ;
- mettre à jour la documentation projet ;
- committer le code.

**Garde-fous :** pas d'élargissement de périmètre ; pas de transition hors lot ; pas de backend/API/DB sauf décision explicite.

---

## 3. Prompt — Summary de clôture

**Objectif :** documenter ce qui a été livré.

**Structure attendue :**

- ne pas modifier le code ;
- créer un document de summary ;
- décrire les fichiers créés / modifiés ;
- décrire le comportement livré ;
- décrire les tests ;
- décrire les garde-fous ;
- décrire les limites ;
- recommander le cycle suivant ;
- committer uniquement le document.

---

## 4. Prompt — Validation fonctionnelle

**Objectif :** valider un lot livré sans ajouter de fonctionnalités.

**Structure attendue :**

- créer une branche de validation ;
- relire le summary ;
- exécuter build et tests ;
- vérifier les interdits ;
- créer un document de validation ;
- formaliser les points validés ;
- documenter les irritants éventuels ;
- décider si le lot est présentable ;
- committer uniquement le document.

**Garde-fous :** ne pas ajouter de nouvelle fonctionnalité ; ne pas corriger hors erreurs bloquantes build/test.

---

## 5. Prompt — Script de démonstration

**Objectif :** préparer la présentation du démonstrateur.

**Structure attendue :**

- créer une branche dédiée ;
- relire validation et summary ;
- créer un script de démo ;
- détailler le parcours étape par étape ;
- expliciter les limites et le message d'introduction ;
- préparer les réponses aux questions ;
- committer uniquement le document.

---

## 6. Prompt — REX

**Objectif :** capitaliser les enseignements.

**Structure attendue :**

- créer une branche REX ;
- relire validation, script et décisions ;
- comparer phase 1 et phase 2 ;
- identifier les apports et limites ;
- formaliser une méthode réutilisable ;
- recommander une capitalisation standard ;
- committer uniquement le document.

---

## 7. Prompt — Standard SFIA

**Objectif :** formaliser la méthode en actifs réutilisables.

**Structure attendue :**

- créer une branche `method/<standard-name>` ;
- relire le REX et les livrables associés ;
- produire standard, checklist, template, famille de prompts ;
- committer uniquement les actifs méthode.

---

## 8. Prompt — Hardening standard

**Objectif :** renforcer et stabiliser un standard SFIA avant diffusion.

**Structure attendue :**

- créer une branche `method/<standard-name>-hardening` ;
- relire standard, checklist, template, prompts et summary ;
- harmoniser la terminologie Controlled Delivery ;
- renforcer signaux de maturité / blocage, garde-fous par catégorie, anti-patterns ;
- améliorer la réutilisabilité (moins dépendant d'un projet terrain) ;
- **ne pas modifier** le summary du cycle précédent sauf nécessité justifiée ;
- **ne pas modifier** le code applicatif terrain ;
- committer uniquement les actifs méthode renforcés.

**Garde-fous :** pas de publication Notion ; pas de push ; pas de PR.

---

## 9. Prompt — Publication preparation

**Objectif :** préparer une publication future sans publier dans ce cycle.

**Structure attendue :**

- créer une branche `method/<standard-name>-publication-prep` ;
- relire les actifs hardened ;
- produire un plan de publication (cible, périmètre, prérequis) ;
- vérifier absence de données sensibles ;
- préparer index ou navigation ;
- **ne pas publier dans Notion** ;
- **ne pas push** vers remote sans demande explicite ;
- committer uniquement les documents de préparation.

---

## 10. Prompt — Final demo package

**Objectif :** regrouper les livrables de démonstration d'un incrément.

**Structure attendue :**

- créer une branche `delivery/<project>-<increment>-final-demo-package` ;
- relire script de démo, validation, REX et limites ;
- produire un document package (sommaire, liens, prérequis de lancement) ;
- ne pas ajouter de fonctionnalité produit ;
- committer uniquement le package documentaire.

**Garde-fous :** pas de modification du workflow ou code sauf correction bloquante ; pas de publication externe implicite.

---

## Référence terrain (exemple)

Cycle `method/controlled-delivery-standard` issu d'un REX projet (ex. [`inc-01-phase-2-rex.md`](../../projects/interv360/07-delivery/inc-01-phase-2-rex.md)).

Les prompts restent applicables à tout projet piloté par SFIA.
