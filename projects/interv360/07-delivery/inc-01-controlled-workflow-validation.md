# Interv360 — INC-01 Controlled workflow validation

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Controlled workflow validation  
**Phase** : Phase 2 — Réalisation groupée contrôlée  
**Statut** : Validation fonctionnelle  
**Branche** : `delivery/interv360-inc-01-controlled-workflow-validation`

---

## 1. Objectif du cycle

Ce cycle valide fonctionnellement le **workflow local contrôlé** INC-01.

Il ne vise pas à ajouter de nouvelles fonctionnalités majeures.

Il vise à vérifier que le lot applicatif groupé est cohérent, testable, rejouable et présentable comme démonstrateur local.

---

## 2. Périmètre validé

Le workflow validé couvre uniquement le flux nominal INC-01 sur `SAV-DEMO-001`.

**Sources :** [`inc-01-controlled-workflow-skeleton-summary.md`](inc-01-controlled-workflow-skeleton-summary.md), [`inc-01-phase-2-delivery-decision.md`](inc-01-phase-2-delivery-decision.md)

| Étape | Action | Transition | Événement journal |
|------|--------|------------|-------------------|
| 1 | Qualifier la demande | `STAT-01 → STAT-02` | `qualification.confirmed` |
| 2 | Planifier l'intervention | `STAT-02 → STAT-03` | `planning.confirmed` |
| 3 | Marquer l'intervention réalisée | `STAT-03 → STAT-04` | `intervention.completed` |
| 4 | Clôturer avec compte rendu fictif | `STAT-04 → STAT-06` | `report.closed` |

---

## 3. Points validés

| Point | Statut |
|------|--------|
| Une seule action visible selon le statut | Validé |
| Aucune action visible en `STAT-06` | Validé |
| Journal local fictif alimenté | Validé |
| Reset restaure `STAT-01` | Validé |
| Reset vide le journal | Validé |
| Vues readonly conservées | Validé |
| Données fictives uniquement | Validé |
| Pas d'API / backend / DB | Validé |
| Pas de statuts hors nominal | Validé |

**Méthode de validation :** relecture du code (`App.tsx`, `requestsRepository.ts`, composants workflow), exécution build/tests, vérification grep des interdits, couverture smoke test du parcours nominal complet.

---

## 4. Résultats build et tests

**Commandes exécutées :**

```bash
cd projects/interv360/app
npm run build
npm run test -- --run
```

**Résultats :**

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 38 tests passés |
| Fichiers de tests | 12 fichiers |

---

## 5. Validation fonctionnelle du parcours

### État initial

Après reset, la demande revient à :

| Élément | Valeur |
|---------|--------|
| Demande | `SAV-DEMO-001` |
| Statut | `STAT-01` |
| Journal | Vide |

### Parcours nominal

Le parcours nominal permet de passer progressivement :

`STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06`

Chaque action ajoute un événement fictif dans le journal.

Le smoke test `App.smoke.test.tsx` couvre ce parcours de bout en bout, y compris le retour à l'état initial via reset.

### État final

En `STAT-06` :

- la demande est clôturée fictivement ;
- aucune action métier supplémentaire n'est visible ;
- le journal affiche les quatre événements du parcours ;
- le reset reste disponible.

---

## 6. Garde-fous vérifiés

Le cycle vérifie l'absence de :

- STAT-05 ;
- STAT-07 ;
- STAT-08 ;
- appel réseau `fetch` ou `axios` ;
- SQL / DDL ;
- base de données ;
- API ;
- CRM réel ;
- données réelles ;
- coordonnées personnelles ;
- publication Notion.

**Résultat grep :** aucune occurrence applicative hors mentions de garde-fou dans les README `src/data/` et `src/ui/`.

---

## 7. Irritants ou points d'attention

| Sujet | Observation | Gravité |
|------|-------------|---------|
| Lisibilité du parcours | Composition verticale longue ; acceptable pour démo locale | Faible |
| Position du contrôle workflow | Placé en tête après reset ; cohérent pour piloter la démo | Faible |
| Journal local | Quatre événements suffisants pour tracer le parcours nominal | Faible |
| Absence de cas d'erreur métier avancé | Assumée dans INC-01 ; transitions invalides rejetées silencieusement côté repository | Faible |
| Bandeaux « Données fictives » | Présents sur chaque bloc readonly et workflow | Aucune |

Aucun irritant bloquant n'a été constaté pour une présentation en démonstrateur local.

---

## 8. Limites assumées

Le démonstrateur reste limité à :

- une seule demande fictive ;
- un seul parcours nominal ;
- stockage local ;
- pas de multi-utilisateur ;
- pas de backend ;
- pas d'API ;
- pas de DB ;
- pas de CRM ;
- pas de données réelles ;
- pas de gestion avancée d'erreurs métier ;
- pas de droits / rôles / habilitations.

---

## 9. Décision de validation

**Décision proposée :**

- [x] Workflow local contrôlé validé comme démonstrateur local
- [ ] Workflow à corriger avant démonstration
- [ ] Workflow à reprendre

### Décision

Le workflow local contrôlé INC-01 est **validé comme démonstrateur local**.

Il peut être présenté comme une preuve de réalisation phase 2, à condition d'expliciter qu'il ne s'agit pas d'un workflow opérationnel réel.

---

## 10. Apport SFIA confirmé

Ce cycle confirme que la SFIA peut articuler :

- un cadrage fin initial ;
- une réalisation groupée ensuite ;
- des garde-fous persistants ;
- une validation fonctionnelle ;
- une traçabilité documentaire ;
- une démonstration produit contrôlée.

La phase 2 ne remplace pas le cadre SFIA.

Elle adapte le rythme d'exécution une fois les règles stabilisées.

---

## 11. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-demo-script`

**Objectif :**

- produire un script de démonstration ;
- expliquer comment présenter le workflow local contrôlé ;
- expliciter les limites ;
- préparer la capitalisation SFIA.

**Alternative :**

`delivery/interv360-inc-01-phase-2-rex`

**Objectif :**

- tirer les enseignements de la phase 2 ;
- comparer micro-cycles et réalisation groupée ;
- formaliser la méthode réutilisable SFIA.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-demo-script` pour préparer une présentation claire du démonstrateur.
