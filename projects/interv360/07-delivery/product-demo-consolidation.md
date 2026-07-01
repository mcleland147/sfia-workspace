# Interv360 — Product Demo Consolidation

**Projet** : Interv360  
**Cycle** : Product Demo Consolidation  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-02 réalisé  
**Branche** : `delivery/interv360-product-demo-consolidation`

---

## 1. Objectif

Ce batch consolide la démonstration produit Interv360 après stabilisation du socle backend, API et frontend connecté.

Le produit dispose désormais :

- d’un backend SQLite persistant ;
- d’une API locale stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend affichant les champs métier productisés ;
- d’un mode local par défaut ;
- d’un mode API opt-in.

L’objectif est de rendre la démonstration bout-en-bout plus lisible, plus reproductible et plus exploitable pour présenter la valeur produit.

---

## 2. Décision produit intégrée

Aucune décision roadmap dédiée n’est nécessaire avant ce batch.

Décision :

> consolider la démonstration produit avant d’ouvrir auth/users/rôles ou workflow étendu.

Raison :

- le socle produit est désormais cohérent ;
- les derniers incréments ont créé de la valeur visible ;
- une consolidation démo permet de stabiliser le récit, les preuves et les limites ;
- auth/users/rôles et workflow étendu sont structurants et nécessitent un cadrage dédié.

---

## 3. Périmètre du batch

Le batch peut inclure :

- mise à jour du runbook de démonstration bout-en-bout ;
- consolidation du récit produit ;
- clarification du parcours de démo local/API ;
- rappel des preuves techniques ;
- clarification des limites assumées ;
- éventuellement un petit ajustement documentaire de README.

Le batch ne doit pas inclure :

- nouvelle fonctionnalité métier ;
- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- extension workflow ;
- refonte frontend ;
- React Router ;
- nouvelle dépendance ;
- PostgreSQL ;
- ORM lourd ;
- production / déploiement.

---

## 4. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Cadrer la consolidation démo produit | Réalisé |
| INC-PROD-02 | Mettre à jour le runbook bout-en-bout | Réalisé |
| INC-PROD-03 | Consolider le récit produit / support court | À confirmer |
| INC-PROD-04 | Valider le parcours et préparer PR | À venir |

---

## 5. INC-PROD-01 — Cadrage consolidation démo

### Axes candidats

| Sujet | Valeur produit | Risque | Décision |
|------|----------------|--------|----------|
| Runbook local/API bout-en-bout | Reproductibilité | Faible | **Retenu** |
| Récit produit consolidé | Présentation claire | Faible | **Retenu** |
| Preuves techniques | Crédibilité | Faible | **Retenu** |
| Limites assumées | Transparence | Faible | **Retenu** |
| Validation navigateur documentée | Reproductibilité | Faible | **Retenu** — exécution optionnelle |
| Capture ou export Figma | Hors scope | Moyen | **Exclu** |
| Nouvelle fonctionnalité frontend | Hors scope | Moyen | **Exclu** |
| Auth/users/rôles | Structurant | Fort | **Exclu** |
| Workflow étendu | Structurant | Fort | **Exclu** |

### Décision retenue

**Retenir :**

- mise à jour du runbook bout-en-bout ;
- consolidation du récit produit ;
- tableau des preuves techniques ;
- clarification des limites assumées ;
- validation navigateur local/API documentée, exécution optionnelle.

**Exclure :**

- auth ;
- users ;
- rôles ;
- CRM ;
- données réelles ;
- workflow étendu ;
- nouveaux statuts ;
- refonte frontend ;
- React Router ;
- nouvelle dépendance ;
- captures ou exports Figma ;
- nouvelle fonctionnalité.

### Justification

- le produit est suffisamment stabilisé pour être présenté ;
- le risque principal devient la lisibilité et la reproductibilité de la démonstration ;
- ouvrir auth ou workflow maintenant créerait un nouveau chantier structurant ;
- une consolidation démo permet de capitaliser la valeur produite avant le prochain cadrage.

### Point d’attention pour INC-PROD-02

Les supports de présentation existants (`interv360-e2e-demo-runbook.md`, `interv360-demo-script.md`, `interv360-demo-one-page-summary.md`, `interv360-demo-presentation-package.md`) doivent être alignés sans duplication excessive. Le runbook E2E reste le document opérationnel principal ; le récit produit peut être consolidé dans INC-PROD-02 ou INC-PROD-03 selon le volume d’écarts constatés.

---

## 6. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Cadrage consolidation décidé | OK |
| Runbook bout-en-bout consolidé | OK |
| Récit produit consolidé | OK — dans le runbook |
| Preuves techniques listées | OK |
| Limites assumées clarifiées | OK |
| Validation frontend local documentée | OK |
| Validation frontend API documentée | OK |
| Backend non modifié | OK |
| Frontend source non modifié | OK |
| Pas d’auth / users / rôles | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| Type de batch | Documentation / consolidation |
| Code frontend | Non modifié |
| Code backend | Non modifié |
| Runbook | Consolidé |
| Support court | À confirmer après relecture du runbook |
| Validation navigateur | Documentée, exécution optionnelle |
| API contract | Conservé |
| Mode local | Conservé |
| Mode API | Conservé |

---

## 8. Changements réalisés

**INC-PROD-01** — cadrage consolidation démo :

- décision de consolider la démonstration produit bout-en-bout ;
- décision de mettre à jour le runbook local/API ;
- décision de consolider les preuves et limites ;
- exclusion d’auth/users/rôles, CRM, workflow étendu, nouvelle fonctionnalité et refonte frontend ;
- validation navigateur documentée mais non obligatoire à ce stade.

**INC-PROD-02** — runbook bout-en-bout consolidé :

- consolidation de l’état produit démontrable ;
- clarification du parcours local ;
- clarification du parcours API ;
- ajout des preuves techniques à présenter ;
- rappel des curl essentiels ;
- clarification des limites assumées ;
- ajout d’un récit de démonstration synthétique ;
- aucun code modifié.

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | Non exécuté — documentation uniquement |
| Backend tests | Non exécutés — documentation uniquement |
| Frontend build | Non exécuté — documentation uniquement |
| Frontend tests | Non exécutés — documentation uniquement |
| Validation navigateur local | Documentée — exécution optionnelle |
| Validation navigateur API | Documentée — exécution optionnelle |
| Reset API | Documenté — exécution optionnelle |

---

## 10. Limites assumées

Limites attendues :

- pas d’authentification ;
- pas d’utilisateurs ;
- pas de rôles ;
- pas de CRM ;
- pas de données réelles ;
- pas de workflow étendu ;
- pas de nouveaux statuts ;
- pas de refonte frontend ;
- pas de production.

---

## 11. Prochaine étape recommandée

**INC-PROD-03** : décider si le support court et le script de démo nécessitent un alignement léger après consolidation du runbook.
