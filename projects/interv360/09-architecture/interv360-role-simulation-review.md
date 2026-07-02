# Interv360 — Role Simulation Review

**Projet** : Interv360  
**Cycle** : Role Simulation Review  
**Mode** : Fast Delivery stratégique / revue produit  
**Statut** : Cadrage revue produit  
**Branche** : `architecture/interv360-role-simulation-review`

---

## 1. Objectif

Ce document prépare la revue produit de la simulation de rôle Interv360.

L’objectif est de recueillir un feedback structuré avant d’ouvrir un chantier plus engageant, notamment :

- extension du workflow métier ;
- authentification réelle ;
- amélioration UX produit ;
- industrialisation technique ;
- consolidation de la démonstration.

---

## 2. Point de départ

La roadmap après Role Simulation recommande une courte phase de **revue produit / feedback simulation rôle** avant tout chantier structurant.

Référence :

[`interv360-product-roadmap-after-role-simulation.md`](./interv360-product-roadmap-after-role-simulation.md)

Documents associés :

- [`../07-delivery/role-simulation.md`](../07-delivery/role-simulation.md)
- [`interv360-auth-and-user-framing.md`](./interv360-auth-and-user-framing.md)
- [`../08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)

Le produit dispose désormais :

- d’un backend SQLite persistant ;
- d’une API `/api/v1` stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend connecté ;
- d’un runbook produit consolidé ;
- d’une simulation de rôle frontend ;
- d’un rôle par défaut `technician` ;
- des rôles `requester`, `technician`, `manager`, `admin`, `viewer` ;
- du blocage frontend des actions non autorisées ;
- d’un reset démo réservé à `admin`.

La simulation ne constitue pas une authentification réelle.

---

## 3. Questions de revue

La revue doit répondre aux questions suivantes :

1. Les rôles sont-ils compréhensibles ?
2. Les libellés sont-ils adaptés ?
3. La matrice de permissions est-elle crédible ?
4. Le blocage des actions non autorisées est-il clair ?
5. Le reset réservé à `admin` est-il logique ?
6. La simulation apporte-t-elle une valeur de démonstration ?
7. La simulation suffit-elle pour continuer sans auth réelle ?
8. Le prochain chantier doit-il porter sur le workflow métier ?
9. Une auth réelle devient-elle nécessaire maintenant ?
10. Y a-t-il un irritant UX prioritaire à corriger avant la suite ?

---

## 4. Scénario de revue recommandé

### Étape 1 — Présenter le contexte

Présenter le produit comme un prototype avancé, non sécurisé en production.

Message clé :

> Interv360 simule désormais des rôles pour montrer les responsabilités métier, mais ne fournit pas encore d’authentification réelle.

---

### Étape 2 — Montrer le rôle par défaut

Vérifier au lancement :

- rôle actif visible ;
- rôle par défaut `technician` ;
- mention `Simulation — aucune authentification réelle`.

Question à poser :

> Le rôle simulé est-il compréhensible dès l’ouverture de l’application ?

---

### Étape 3 — Montrer le workflow avec `technician`

Avec le rôle `technician` :

- ouvrir une demande ;
- qualifier ;
- planifier ;
- clôturer intervention ;
- clôturer rapport.

Questions à poser :

- Le rôle technicien est-il crédible ?
- Les actions autorisées sont-elles logiques ?
- Le parcours est-il lisible ?

---

### Étape 4 — Montrer le blocage avec `viewer`

Passer au rôle `viewer`.

Vérifier :

- les actions sont bloquées ;
- le message est clair ;
- aucun changement d’état n’est effectué.

Question à poser :

> Le blocage est-il compréhensible ou frustrant ?

---

### Étape 5 — Montrer le cas `requester`

Passer au rôle `requester`.

Vérifier :

- lecture possible ;
- transition impossible ;
- message non autorisé.

Question à poser :

> Le demandeur doit-il uniquement suivre la demande ou aussi créer / compléter des informations ?

---

### Étape 6 — Montrer le reset avec `admin`

Passer au rôle `admin`.

Vérifier :

- reset autorisé ;
- rôle conservé après reset ;
- workflow réinitialisé.

Questions à poser :

- Le reset réservé à admin est-il cohérent ?
- Le rôle admin est-il utile dans la démonstration ?

---

## 5. Grille de feedback

| Sujet | Question | Réponse / notes | Décision potentielle |
|------|----------|-----------------|----------------------|
| Rôles | Les rôles sont-ils compréhensibles ? |  | Renommer / simplifier |
| Libellés | Les noms des rôles sont-ils adaptés ? |  | Adapter UI |
| Permissions | Les actions autorisées sont-elles crédibles ? |  | Modifier matrice |
| Blocage | Le message d’action non autorisée est-il clair ? |  | Améliorer UX |
| Reset | Le reset réservé à admin est-il logique ? |  | Confirmer / ajuster |
| Démo | La simulation apporte-t-elle une valeur de démonstration ? |  | Conserver / réduire |
| Workflow | Le workflow actuel suffit-il ? |  | Cadrer extension |
| Auth réelle | Une auth réelle est-elle nécessaire maintenant ? |  | Cadrer auth réelle |
| UX | Un irritant UX bloque-t-il la compréhension ? |  | Ouvrir polish ciblé |
| Suite | Quelle priorité après revue ? |  | Roadmap suivante |

---

## 6. Critères de décision après revue

### Cas A — Les rôles sont compris et le workflow paraît trop simple

Décision probable :

`architecture/interv360-workflow-extension-framing`

Raison :

- les responsabilités sont validées ;
- le prochain gain produit vient du cycle métier.

---

### Cas B — Les rôles sont compris mais la simulation semble artificielle

Décision probable :

`architecture/interv360-auth-real-framing`

Raison :

- l’enjeu devient la crédibilité multi-utilisateurs réelle ;
- auth réelle à cadrer avant code.

---

### Cas C — Les rôles ou permissions ne sont pas compris

Décision probable :

`delivery/interv360-role-simulation-polish`

Raison :

- il faut corriger la compréhension avant d’étendre le produit.

---

### Cas D — Aucun retour humain disponible

Décision probable :

`architecture/interv360-workflow-extension-framing`

Raison :

- faute de feedback, le workflow extension reste l’axe produit le plus concret ;
- mais le cadrage devra rester strictement limité.

---

## 7. Livrable attendu de la revue

Après revue, produire une synthèse courte :

- contexte de revue ;
- personnes ou profils consultés ;
- points compris ;
- irritants identifiés ;
- décisions à conserver ;
- décisions à ajuster ;
- prochain axe recommandé.

---

## 8. Hors scope confirmé

Ce cycle n’introduit pas :

- code ;
- frontend ;
- backend ;
- SQLite ;
- API ;
- workflow étendu ;
- authentification réelle ;
- OAuth ;
- JWT ;
- SSO ;
- base users ;
- CRM ;
- données réelles ;
- nouveaux statuts ;
- PostgreSQL ;
- ORM lourd ;
- Notion ;
- Controlled Delivery ;
- `sfia-notion-sync` ;
- exports Figma.

---

## 9. Décision finale du cadrage de revue

| Élément | Décision |
|--------|----------|
| Type de cycle | Revue produit / feedback |
| Code | Non |
| Support principal | Simulation de rôle existante |
| Grille de feedback | Oui |
| Scénario de revue | Oui |
| Prochaine décision | À prendre après feedback |
| Workflow extension | Possible après revue |
| Auth réelle | Possible mais non prioritaire sans signal fort |
| UX polish | Possible si irritant concret |
| Industrialisation | Différée |
