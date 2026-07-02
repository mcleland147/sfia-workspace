# Interv360 — MVP Release Readiness

**Projet** : Interv360  
**Cycle** : MVP Release Readiness  
**Mode** : SFIA Fast Track — Release readiness contrôlée  
**Statut** : Cadrage opérationnel  
**Branche** : `release/interv360-mvp-release-readiness`

---

## 1. Objectif

Ce cycle vise à figer Interv360 comme **MVP produit livrable**, après clôture de la roadmap MVP Final Roadmap.

L'objectif n'est pas d'ajouter de nouvelles fonctionnalités, mais de préparer une base de release claire :

- périmètre livré ;
- critères de validation ;
- limites connues ;
- prérequis d'installation ;
- preuves techniques ;
- note de version ;
- décisions de suite.

---

## 2. Positionnement

Ce cycle démarre après la clôture des six lots de la roadmap MVP Final Roadmap :

| Lot | Statut |
|-----|--------|
| Lot 1 — Backend Users & Session | Mergé |
| Lot 2 — Audit Trail | Mergé |
| Lot 3 — Request Model Finalization | Mergé |
| Lot 4 — API Product Hardening | Mergé |
| Lot 5 — Product UX Finalization | Mergé |
| Lot 6 — Product Industrialization | Mergé |

Décision :

> Le cycle MVP Final Roadmap est clos.  
> Le présent cycle est un nouveau cycle de release readiness, pas un Lot 7.

---

## 3. État MVP

Interv360 dispose désormais :

- d'un backend Node.js / TypeScript ;
- d'une API `/api/v1` durcie ;
- d'une persistance SQLite locale ;
- d'un frontend Vite / React ;
- d'un mode local ;
- d'un mode API ;
- d'un modèle `Request` enrichi ;
- d'un audit trail enrichi ;
- d'un user switcher de démonstration ;
- d'une matrice de permissions ;
- d'une UX MVP finalisée ;
- d'un reset admin ;
- d'un README racine exploitable ;
- de README frontend/backend consolidés ;
- de fichiers `.env.example` ;
- d'un runbook E2E ;
- d'une CI minimale build + tests ;
- de tests frontend/backend stables.

Estimation :

> Interv360 est à environ **96–98 % du MVP produit structuré** défini par la roadmap.

---

## 4. Problème à résoudre

Le MVP est techniquement et fonctionnellement stabilisé, mais il doit encore être figé comme release livrable.

Il manque une synthèse claire pour répondre à ces questions :

- qu'est-ce qui est officiellement livré ?
- comment valider rapidement le MVP ?
- quelles sont les limites assumées ?
- quels prérequis sont nécessaires ?
- quelle version peut être associée au MVP ?
- quels sujets sont exclus de cette release ?
- quelles suites peuvent être ouvertes ensuite ?

---

## 5. Périmètre du cycle

À livrer :

- cadrage release readiness ;
- checklist de validation MVP ;
- synthèse du périmètre livré ;
- release notes MVP ;
- limites connues ;
- prérequis et commandes de validation ;
- décision de version ;
- décision sur tag éventuel ;
- préparation PR unique.

---

## 6. Hors scope

Ce cycle n'introduit pas :

- nouveau développement fonctionnel ;
- correction non bloquante ;
- refonte UX ;
- design system ;
- arc Figma ;
- export Figma ;
- nouveau statut ;
- `STAT-08` ;
- nouveau workflow ;
- nouvelle action métier ;
- CRUD complet ;
- formulaire création demande ;
- authentification réelle ;
- session backend réelle ;
- login ;
- logout ;
- mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- déploiement cloud complet ;
- Docker obligatoire ;
- Kubernetes ;
- Terraform ;
- Helm ;
- supervision ;
- observabilité avancée ;
- CI/CD complète.

---

## 7. Version cible

Version proposée :

`v0.1.0-mvp`

Justification :

- première version MVP structurée ;
- backend/API/frontend/UX/industrialisation présents ;
- usage local et pré-cloud documenté ;
- CI minimale présente ;
- limites enterprise encore assumées.

Décision à confirmer dans le cycle :

- tag Git immédiat ou non ;
- release GitHub immédiate ou non ;
- release notes uniquement documentaires ou release GitHub formelle.

---

## 8. Incréments du cycle

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| REL-01 | Cadrage release readiness | En cours |
| REL-02 | Checklist validation MVP | À faire |
| REL-03 | Release notes et limites connues | À faire |
| REL-04 | Préparation PR unique | À venir |

---

## 9. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document release readiness créé | OK |
| Roadmap MVP Final Roadmap reconnue comme close | OK |
| Périmètre livré synthétisé | À faire |
| Checklist validation MVP créée | À faire |
| Release notes MVP créées | À faire |
| Limites connues documentées | À faire |
| Version cible décidée | À faire |
| Décision tag / release GitHub prise | À faire |
| Frontend build | À faire |
| Frontend tests | À faire |
| Backend build | À faire |
| Backend tests | À faire |
| CI minimale conservée | À valider |
| Aucun nouveau scope fonctionnel | OK |
| Auth réelle exclue | OK |
| CRM/données réelles exclus | OK |
| CRUD complet exclu | OK |
| Nouveau statut exclu | OK |
| `STAT-08` exclu | OK |
| Figma/export exclus | OK |

---

## 10. Garde-fous

Le cycle doit préserver :

- frontend ;
- backend ;
- API ;
- SQLite ;
- workflow existant ;
- statuts techniques existants ;
- transitions métier existantes ;
- permissions existantes ;
- request model enrichi ;
- audit trail enrichi ;
- mode local ;
- mode API ;
- UX MVP finalisée ;
- reset admin ;
- README/runnable docs ;
- CI minimale.

Le cycle ne doit pas introduire :

- Lot 7 automatique ;
- nouveau périmètre fonctionnel ;
- auth réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- CRUD complet ;
- formulaire création demande ;
- nouveau statut ;
- `STAT-08` ;
- refonte UX ;
- Docker obligatoire ;
- déploiement cloud complet ;
- arc Figma ;
- export Figma.

---

## 11. Décision REL-01

REL-01 valide l'ouverture du cycle **MVP Release Readiness**.

Décisions :

- ne pas ouvrir de Lot 7 dans la roadmap MVP Final Roadmap ;
- ouvrir un cycle distinct de release readiness ;
- figer Interv360 comme MVP industrialisé ;
- préparer une checklist MVP ;
- préparer des release notes MVP ;
- documenter les limites connues ;
- confirmer une version cible ;
- décider si un tag Git / GitHub release doit être créé ;
- ne pas ajouter de nouveau scope fonctionnel ;
- ne pas modifier le comportement produit ;
- ne pas modifier frontend/backend/API/workflow ;
- ne pas ouvrir les sujets enterprise dans ce cycle.

---

## 12. Prochaine étape

Exécuter **REL-02** :

Checklist validation MVP
