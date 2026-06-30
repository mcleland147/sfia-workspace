# Interv360 — Technical arbitration

**Projet** : Interv360  
**Cycle** : Arbitrage technique minimal avant réalisation  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-arbitration`

---

## 1. Objectif du cycle

Ce cycle vise à lever les conditions techniques minimales avant tout démarrage de code sur INC-01.

Il fait suite à la décision go/no-go :

**Go conditionnel — réalisation INC-01 possible après arbitrage technique minimal.**

Objectif :

- arbitrer une stack minimale ;
- définir une stratégie data minimale ;
- confirmer le périmètre INC-01 ;
- identifier les décisions nécessaires avant premier commit applicatif ;
- produire une recommandation d'autorisation ou non du démarrage code.

---

## 2. Décision de référence

Décision précédente :

`projects/interv360/07-delivery/implementation-go-no-go.md`

Statut :

**Go conditionnel**

Périmètre ciblé :

`INC-01 — Flux SAV minimal démontrable`

Conditions à lever :

1. décision formelle de passage en réalisation ;
2. gel du périmètre INC-01 ;
3. arbitrage stack minimal ;
4. stratégie data minimale ;
5. confirmation des responsabilités de réalisation.

---

## 3. Non-périmètre

Ce cycle ne doit pas :

- développer l'application ;
- initialiser un projet applicatif ;
- créer une base de données ;
- implémenter une API ;
- créer un backlog Jira ;
- ouvrir un sprint ;
- produire des tickets de réalisation ;
- refaire l'UX/UI ;
- publier dans Notion.

---

## 4. Questions d'arbitrage

Le cycle doit répondre aux questions suivantes :

### 4.1 Stack minimale

- Quelle stack est suffisante pour INC-01 ?
- Quelle stack évite le surdimensionnement ?
- Quelle stack reste compatible avec une trajectoire produit plus large ?
- Quels choix doivent rester réversibles ?

### 4.2 Stratégie data minimale

- Quelles données sont nécessaires pour INC-01 ?
- Les données doivent-elles être mockées, locales, persistées ou externalisées ?
- Quel niveau de persistance est nécessaire pour démontrer INC-01 ?
- Quels risques data / confidentialité doivent être cadrés ?

### 4.3 Responsabilités

- Qui porte la décision produit ?
- Qui porte la décision technique ?
- Qui valide le périmètre INC-01 ?
- Qui autorise le premier commit applicatif ?

### 4.4 Préparation réalisation

- Quels livrables sont nécessaires avant code ?
- Quels éléments sont déjà suffisants ?
- Quelles décisions restent à formaliser ?
- Quel est le point d'arrêt avant développement ?

---

## 5. Options stack à comparer

À compléter à partir des documents existants, notamment :

- options stack déjà documentées ;
- contraintes produit ;
- exigences MVP ;
- simplicité de réalisation ;
- réversibilité ;
- coût cognitif ;
- maintenabilité.

Options à analyser :

| Option | Description | Avantages | Limites | Risque | Recommandation |
|--------|-------------|-----------|---------|--------|----------------|
| Option A | À compléter | À compléter | À compléter | À compléter | À compléter |
| Option B | À compléter | À compléter | À compléter | À compléter | À compléter |
| Option C | À compléter | À compléter | À compléter | À compléter | À compléter |

---

## 6. Stratégie data à comparer

Options à analyser :

| Option | Description | Avantages | Limites | Risque | Recommandation |
|--------|-------------|-----------|---------|--------|----------------|
| Mock statique | À compléter | À compléter | À compléter | À compléter | À compléter |
| Données locales persistées | À compléter | À compléter | À compléter | À compléter | À compléter |
| Backend / base réelle | À compléter | À compléter | À compléter | À compléter | À compléter |

---

## 7. Critères de décision

Critères proposés :

| Critère | Poids | Commentaire |
|---------|------|-------------|
| Simplicité pour INC-01 | Fort | Éviter la surarchitecture |
| Rapidité de mise en œuvre | Fort | Permettre une réalisation courte |
| Réversibilité | Fort | Ne pas figer trop tôt |
| Cohérence avec MVP global | Moyen | Garder une trajectoire produit |
| Risque sécurité / data | Fort | Ne pas manipuler de données sensibles sans cadre |
| Maintenabilité | Moyen | Garder une base propre |
| Démontrabilité | Fort | INC-01 doit être montrable rapidement |

---

## 8. Décision attendue

Le cycle doit aboutir à une des décisions suivantes :

- [ ] Autorisation de démarrage code INC-01
- [ ] Autorisation conditionnelle de démarrage code INC-01
- [ ] Report du démarrage code

Décision :

À compléter après analyse.

---

## 9. Livrables possibles ensuite

Si l'arbitrage est validé, créer ensuite dans un cycle séparé :

- `inc-01-implementation-plan.md`
- `inc-01-technical-scope.md`
- `inc-01-data-scope.md`
- `inc-01-start-checklist.md`

Ces livrables ne sont pas créés automatiquement dans ce premier commit.
