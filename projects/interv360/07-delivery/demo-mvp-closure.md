# Interv360 — Demo MVP Closure

**Projet** : Interv360  
**Cycle** : Demo MVP Closure  
**Mode** : SFIA Fast Delivery documentaire  
**Statut** : Clôture démonstrateur MVP  
**Branche** : `delivery/interv360-demo-mvp-closure`  
**Base** : `main` @ `4574285`

Documents de référence : [`demo-polish.md`](./demo-polish.md), [`demo-presentation-feedback.md`](./demo-presentation-feedback.md), [`end-to-end-demo-hardening.md`](./end-to-end-demo-hardening.md), [`frontend-api-connection.md`](./frontend-api-connection.md), [`backend-minimal-prototype.md`](./backend-minimal-prototype.md)

---

## 1. Objectif

Ce document clôture la version **Interv360 Demo MVP**.

L'objectif est de formaliser :

- l'état atteint ;
- ce qui est démontrable ;
- les validations réalisées ;
- les décisions structurantes ;
- les limites assumées ;
- les hors-scope ;
- la trajectoire éventuelle post-MVP.

Ce cycle ne modifie pas le produit.

---

## 2. État atteint

La version Interv360 Demo MVP dispose désormais :

- d'un frontend React / TypeScript ;
- d'un mode local par défaut basé sur `localStorage` ;
- d'un mode API local activable explicitement ;
- d'un backend minimal Express ;
- d'un contrat API `/api/v1` ;
- de demandes SAV fictives ;
- d'un workflow nominal démontrable ;
- d'un scénario guidé ;
- d'un panneau readiness ;
- d'une navigation par écran réduisant le scroll ;
- d'un journal de workflow ;
- d'un reset de démonstration ;
- d'un runbook E2E ;
- d'un package de présentation ;
- d'une documentation de livraison complète.

---

## 3. Ce qui est démontrable

### Mode local

Le mode local est le mode de démonstration standard.

Il permet de montrer :

- la vue d'ensemble ;
- la readiness ;
- le scénario guidé ;
- la liste des demandes fictives ;
- les filtres et la recherche ;
- le détail d'une demande ;
- le workflow nominal ;
- les transitions ;
- le journal ;
- le reset ;
- la navigation par écran.

### Mode API local

Le mode API local est disponible en option.

Il permet de montrer ou valider techniquement :

- le backend minimal ;
- le chargement des demandes via API ;
- les transitions via API ;
- le journal via API ;
- le reset via API ;
- l'absence de fallback silencieux.

Décision actuelle :

> le mode API est à mentionner, mais pas nécessairement à démontrer en live tant qu'il n'est pas complètement prêt pour une présentation fluide.

---

## 4. Workflow démontré

Workflow nominal retenu :

```text
STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06
```

Le workflow couvre :

- qualification ;
- planification ;
- intervention ;
- compte rendu ;
- clôture.

Les statuts STAT-05, STAT-07 et STAT-08 restent hors périmètre.

---

## 5. Données de démonstration

Les données sont fictives.

La version MVP repose sur :

- SAV-DEMO-001 ;
- SAV-DEMO-002 ;
- SAV-DEMO-003.

Aucune donnée réelle n'est utilisée.

Aucune donnée personnelle réelle n'est introduite.

---

## 6. Décisions structurantes

| Sujet | Décision |
|-------|----------|
| Démonstration standard | Mode local par défaut |
| Mode API | Opt-in via variables Vite |
| Backend | Minimal Express, usage démonstrateur |
| Persistance | LocalStorage côté frontend, mémoire côté backend |
| Workflow | Nominal uniquement |
| UX présentation | Navigation par écran |
| Readiness | Conservée |
| Scénario guidé | Conservé |
| Polish UX | Limité au scroll confirmé par feedback humain |
| Mode API live | Mentionner seulement pour l'instant |
| Labels Batch / INC | Non traités, irritant non confirmé |
| Figma / design | Non nécessaire pour ce polish ciblé |

---

## 7. Validations réalisées

### Dernières validations connues

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Revue visuelle polish | OK |
| Navigation par écran | OK |
| Mode local par défaut | OK |
| Mode API opt-in | OK |
| Backend non obligatoire en local | OK |

### Validations cumulées

La chaîne a validé :

- non-régression frontend ;
- non-régression backend ;
- conservation du mode local ;
- conservation du mode API ;
- conservation du workflow nominal ;
- absence de fallback silencieux ;
- absence de dépendance nouvelle ;
- absence de React Router ;
- absence de DB SQL ;
- absence de CRM ;
- absence d'authentification ;
- absence de données réelles.

---

## 8. Feedback humain intégré

Un feedback humain réel a confirmé :

- compréhension globale claire ;
- readiness utile ;
- scénario guidé utile ;
- workflow lisible ;
- labels Batch / INC non gênants ;
- mode API à mentionner seulement ;
- irritant prioritaire : page longue / scroll.

L'irritant prioritaire a été traité par la navigation par écran (PR #47, mergée dans `main` @ `d07c764`).

---

## 9. Limites assumées

La version Demo MVP n'est pas un produit complet.

Limites assumées :

- pas de production ;
- pas de multi-utilisateur ;
- pas d'authentification ;
- pas de CRM ;
- pas de base SQL ;
- pas de persistance robuste côté backend ;
- pas de synchronisation avec un SI réel ;
- pas de données réelles ;
- pas de workflow complet ;
- pas de gestion avancée d'erreurs métier ;
- pas de design system final ;
- pas d'industrialisation.

---

## 10. Hors périmètre clôture MVP

Sont explicitement hors périmètre de cette clôture :

- STAT-05 / STAT-07 / STAT-08 ;
- API industrialisée ;
- base de données SQL ;
- authentification ;
- CRM ;
- gestion utilisateurs ;
- droits / rôles ;
- données réelles ;
- intégration SI ;
- refonte UX/Figma ;
- mode API live complet ;
- publication Notion ;
- modification Controlled Delivery ;
- modification sfia-notion-sync.

---

## 11. Trajectoire post-MVP possible

Si le projet continue, les trajectoires possibles sont :

### Option A — Stabilisation présentation

Objectif :

- rejouer la démo MVP ;
- mettre à jour le package de présentation ;
- conserver un périmètre démo.

Cycle possible :

`delivery/interv360-demo-presentation-package-update`

### Option B — Renforcement technique API

Objectif :

- rendre le mode API plus fluide ;
- mieux gérer CORS / ports ;
- stabiliser le run API live.

Cycle possible :

`delivery/interv360-api-demo-hardening`

### Option C — Persistance backend

Objectif :

- remplacer la mémoire backend par une persistance simple ;
- préparer SQLite ou autre option légère.

Cycle possible :

`architecture/interv360-backend-persistence-decision`

### Option D — Industrialisation produit

Objectif :

- cadrer une vraie cible produit ;
- traiter auth, CRM, droits, données réelles, sécurité, exploitation.

Cycle possible :

`architecture/interv360-product-industrialization-framing`

### Option E — Design UX/Figma

Objectif :

- travailler une cible UX plus ambitieuse ;
- préparer une refonte visuelle structurée.

Cycle possible :

`design/interv360-demo-screen-layout-review`

---

## 12. Décision de clôture

La version Interv360 Demo MVP est considérée comme clôturable.

Critères atteints :

- démonstrateur présentable ;
- parcours local autonome ;
- backend minimal disponible ;
- mode API opt-in ;
- workflow nominal démontrable ;
- navigation par écran validée ;
- runbook disponible ;
- feedback humain intégré ;
- irritant prioritaire traité ;
- garde-fous respectés.

Décision :

Clôturer la version Interv360 Demo MVP et ne pas ouvrir de nouveau polish sans feedback ou décision explicite post-MVP.

---

## 13. Validation du cycle de clôture

| Contrôle | Résultat |
|----------|----------|
| Document de clôture créé | OK |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Nouveau polish réalisé | Non |
| Données réelles introduites | Non |
| DB SQL introduite | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 14. Prochaine étape recommandée

Ne pas ouvrir de nouveau cycle produit immédiatement.

La prochaine action recommandée est une action hors repo :

- rejouer la démo MVP ;
- présenter l'état atteint ;
- décider s'il faut poursuivre vers une trajectoire post-MVP.

Si une suite est décidée, ouvrir un cycle de cadrage dédié plutôt qu'un polish opportuniste.

Cycle recommandé uniquement en cas de poursuite produit :

`architecture/interv360-product-industrialization-framing`

Cycle recommandé uniquement en cas de poursuite démonstration :

`delivery/interv360-demo-presentation-package-update`
