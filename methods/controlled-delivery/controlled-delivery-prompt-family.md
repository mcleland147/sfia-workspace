# SFIA — Controlled Delivery Prompt Family

**Domaine SFIA** : Delivery Method  
**Statut** : Draft  
**Référence** : [`controlled-delivery-standard.md`](controlled-delivery-standard.md)

Cette famille de prompts structure les cycles de delivery contrôlé SFIA.

Chaque prompt suit le même esprit : vérifier Git, relire le cadrage, produire un livrable ciblé, respecter les garde-fous, committer sans push ni PR sauf demande explicite.

---

## 1. Prompt — Décision phase 2

**Objectif :** acter le passage d'un incrément en réalisation groupée contrôlée.

**Structure attendue :**

- vérifier branche et état Git ;
- relire les documents de cadrage ;
- créer un document `phase-2-delivery-decision.md` ;
- formaliser les raisons du passage en phase 2 ;
- lister le lot fonctionnel cible ;
- maintenir les garde-fous ;
- committer uniquement le document.

**Garde-fous :** ne pas modifier le code applicatif ; ne pas implémenter le lot cible dans ce cycle.

---

## 2. Prompt — Réalisation groupée contrôlée

**Objectif :** implémenter un lot fonctionnel cohérent avec garde-fous.

**Structure attendue :**

- vérifier branche et état Git ;
- créer la branche de réalisation ;
- relire les décisions ;
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
- détailler le parcours ;
- expliciter les limites ;
- préparer les réponses aux questions ;
- committer uniquement le document.

---

## 6. Prompt — REX

**Objectif :** capitaliser les enseignements.

**Structure attendue :**

- créer une branche REX ;
- relire validation, script et décisions ;
- comparer cadrage fin et réalisation groupée ;
- identifier les apports ;
- identifier les limites ;
- formaliser une méthode réutilisable ;
- recommander une capitalisation standard ;
- committer uniquement le document.

---

## 7. Prompt — Standard SFIA

**Objectif :** formaliser la méthode en actifs réutilisables.

**Structure attendue :**

- créer une branche `method/<standard-name>` ;
- relire le REX et les livrables associés ;
- produire un standard ;
- produire une checklist ;
- produire un template ;
- produire une famille de prompts ;
- committer uniquement les actifs méthode.

**Référence terrain :** cycle `method/controlled-delivery-standard` issu de [`inc-01-phase-2-rex.md`](../../projects/interv360/07-delivery/inc-01-phase-2-rex.md).
