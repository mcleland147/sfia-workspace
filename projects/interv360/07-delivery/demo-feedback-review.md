# Interv360 — Demo Feedback Review

**Projet** : Interv360  
**Cycle** : Demo Feedback Review  
**Mode** : SFIA Fast Delivery documentaire  
**Statut** : Revue démonstration exécutée  
**Branche** : `delivery/interv360-demo-feedback-review`  
**Base** : `main` @ `bac8962`

---

## 1. Objectif

Ce cycle rejoue la démonstration Interv360 avec le runbook E2E afin d'identifier les irritants réels avant tout polish UX.

L'objectif n'est pas d'ajouter une fonctionnalité.

L'objectif est de décider si un polish UX est justifié, sur la base d'un retour concret.

---

## 2. Point de départ

Interv360 dispose désormais :

- d'un mode local par défaut ;
- d'un mode API local activable explicitement ;
- d'un backend minimal ;
- d'un runbook E2E local/API ;
- un script de démonstration ;
- de validations frontend et backend ;
- d'une chaîne de livraison mergée dans `main`.

Références utilisées :

- Runbook : [`../08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)
- Script oral : [`../08-presentation/interv360-demo-script.md`](../08-presentation/interv360-demo-script.md)
- Hardening E2E : [`end-to-end-demo-hardening.md`](./end-to-end-demo-hardening.md)

---

## 3. Réflexion d'optimisation SFIA

Après le hardening E2E, le risque serait de lancer un polish UX sur hypothèse.

Décision :

- rejouer la démo ;
- noter les irritants observés ;
- distinguer irritants bloquants, gênants et acceptables ;
- ne pas corriger dans ce cycle ;
- décider ensuite si un cycle polish est utile.

---

## 4. Périmètre autorisé

Le cycle peut produire :

- une grille de revue ;
- une synthèse des irritants ;
- une décision go / no-go polish ;
- une priorisation simple ;
- une recommandation de prochaine étape.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- modification frontend ;
- modification backend ;
- nouvelle fonctionnalité ;
- nouveau statut ;
- polish UX ;
- suppression `localStorage` ;
- backend obligatoire ;
- fallback silencieux ;
- DB SQL ;
- CRM ;
- authentification ;
- données réelles ;
- publication Notion ;
- modification Controlled Delivery ;
- modification `sfia-notion-sync`.

---

## 6. Méthode de revue

| Étape | Réalisée | Détail |
|-------|----------|--------|
| Lecture runbook + script + hardening | OK | Avant exécution |
| Parcours local navigateur (`:5173`) | OK | Qualification, filtre STAT-02, journal, badge mode |
| Validation API curl (`:3001`) | OK | `health`, `requests` |
| Mode API navigateur (`:5175`) | Partiel | Port alternatif (5173 occupé) — voir irritants |
| Tests automatisés frontend/backend | OK | 77 + 18 tests |

---

## 7. Grille de revue

| Zone | À vérifier | Résultat | Irritant observé |
|------|------------|----------|------------------|
| Lancement local | Frontend seul utilisable | OK | Aucun |
| Lancement API | Backend + frontend API utilisables | OK | CORS limité à `:5173` : si Vite bascule sur un autre port, message « backend indisponible » trompeur |
| Badge mode | Mode local/API clair | OK | Aucun |
| Readiness | Panneau compréhensible | OK | Libellés « Pas de backend / Pas d'API » obsolètes depuis le mode API (cohérence présentation) |
| Scénario guidé | Fil conducteur clair | OK | Ne progresse pas automatiquement après une transition workflow |
| Liste demandes | Lisible et exploitable | OK | Aucun |
| Filtres/recherche | Utiles en démonstration | OK | Filtre STAT-01 masqué quand aucune demande STAT-01 (après qualification sans reset) |
| Détail demande | Suffisant pour expliquer le cas | OK | Aucun |
| Transition | Action compréhensible | OK | Feedback « Action fictive enregistrée » clair |
| Journal | Traçabilité lisible | OK | Nécessite scroll / lien navigation « Journal » |
| Reset | Rejouabilité claire | OK | Non rejoué en fin de session (transition seule validée) |
| Erreur backend | Message compréhensible | OK | Message explicite, pas de fallback silencieux |
| Runbook | Procédure facile à suivre | OK | Deux terminaux mode API bien documentés |
| Script oral | Suffisant pour présenter | OK | Section 4 encore « pas d'API » — décalage avec mode API optionnel |

---

## 8. Classification des irritants

| Niveau | Définition | Action |
|--------|------------|--------|
| Bloquant | Empêche de présenter ou de rejouer la démo | Cycle correction prioritaire |
| Gênant | Rend la démo moins fluide mais présentable | Polish UX possible |
| Mineur | N'empêche pas la présentation | Reporter ou documenter |
| Aucun | Pas d'irritant observé | Pas de polish immédiat |

---

## 9. Retours observés

### Irritants bloquants

- Aucun

### Irritants gênants

- **Page longue en présentation** : readiness, scénario, workflow, liste, parcours readonly et journal sur une seule page ; la navigation interne aide mais le fil oral reste haché par le scroll.
- **Cohérence mode API** : panneau readiness et script oral indiquent encore l'absence de backend/API alors qu'un mode API local existe ; risque de confusion si le présentateur enchaîne local puis API.
- **CORS / port Vite** : le backend n'autorise par défaut que `http://localhost:5173` ; si le port Vite est pris et bascule (ex. `:5174`), le frontend API affiche « backend indisponible » alors que le backend tourne.

### Irritants mineurs

- Libellés internes visibles (« Batch 01 », « Batch 02 », « Batch 03 », titre page « INC-01 App Foundation »).
- Scénario guidé reste à l'étape 1 après une transition workflow réussie (pas de synchronisation automatique).
- Filtre STAT-01 disparaît de la barre quand le compteur passe à 0 (comportement logique mais peut surprendre avant un reset).
- Sections readonly (qualification → compte rendu) allongent la page sans être toutes nécessaires à chaque étape du script 10–15 min.

### Points positifs

- Mode local immédiatement utilisable, sans backend.
- Badge **Mode local** / **Mode API local** visible et explicite.
- Trois demandes fictives seed, filtres et recherche opérationnels.
- Transition workflow + journal tracent correctement l'action (`qualification.confirmed`).
- Message d'erreur backend explicite en mode API, sans bascule silencieuse.
- Runbook E2E structuré (local, API, curl, dépannage).
- Script oral fournit des phrases prêtes à l'emploi pour une présentation métier.
- 77 tests frontend et 18 tests backend passent post-merge.

---

## 10. Décision polish

- [x] Aucun polish nécessaire maintenant
- [ ] Polish UX mineur recommandé
- [ ] Correction prioritaire nécessaire
- [ ] Nouvelle revue requise

### Décision

**Aucun polish UX immédiat.** La démo est présentable en mode local (parcours nominal du runbook et du script). Les irritants relevés sont gênants ou mineurs, aucun n'est bloquant. Un polish ne serait justifié qu'après retour d'une présentation réelle à un tiers, ou si le mode API devient le scénario de démo principal (cohérence readiness/script + CORS/port).

---

## 11. Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-demo-presentation-review`

Objectif :

- présenter ou faire présenter la démo à un interlocuteur réel avec le runbook ;
- capturer le feedback humain (timing, compréhension, questions) ;
- confirmer ou infirmer les irritants documentés ici ;
- décider ensuite si `delivery/interv360-demo-polish` apporte une valeur suffisante.

**Alternative :** `delivery/interv360-demo-polish`

Uniquement si des irritants UX concrets sont confirmés par une présentation réelle (ex. libellés Batch, synchronisation scénario, allègement page).

**Arrêt temporaire** acceptable si la prochaine démo n'est pas planifiée : l'état actuel est suffisant pour une démo locale autonome.

---

## 12. Validation

| Contrôle | Résultat |
|----------|----------|
| Revue exécutée | OK — parcours local navigateur + curl API + tests auto |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Polish réalisé | Non |
| Frontend build | OK |
| Frontend tests | OK — 77 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Données réelles introduites | Non |
| DB SQL introduite | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |
