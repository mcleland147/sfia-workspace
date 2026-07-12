# Interv360 — INC-01 Action transition decision

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Action transition decision  
**Statut** : Décision de cadrage  
**Branche** : `delivery/interv360-inc-01-action-transition-decision`

---

## 1. Objectif du cycle

Ce cycle cadre les **premières actions métier** envisageables pour INC-01.

Il ne modifie pas le code applicatif.

Il ne crée pas de bouton, de workflow, de transition de statut ni de logique d'écriture métier.

L'objectif est de décider quelle transition peut être ouverte en premier, avec quelles règles, quelles limites et quels garde-fous.

---

## 2. Situation de départ

Le parcours readonly INC-01 est consolidé.

**Source :** [`inc-01-readonly-demo-summary.md`](inc-01-readonly-demo-summary.md)

Il couvre :

| Bloc | État |
|------|------|
| Liste des demandes | Présent |
| Fiche demande | Présent |
| Reset démo | Présent |
| Qualification readonly | Présent |
| Planification readonly | Présent |
| Intervention readonly | Présent |
| Compte rendu readonly | Présent |
| Workflow actif | Non implémenté |
| Transitions statut | Non implémentées |
| Données réelles | Interdites |

La demande de démonstration reste :

| Élément | Valeur |
|---------|--------|
| Demande | `SAV-DEMO-001` |
| Statut courant | `STAT-01` |
| Données | Fictives uniquement |

---

## 3. Transitions métier théoriques INC-01

Le flux cible minimal INC-01 peut être représenté ainsi :

| Transition | Sens fonctionnel | Statut |
|------------|------------------|--------|
| STAT-01 → STAT-02 | Qualification de la demande | Candidate |
| STAT-02 → STAT-03 | Planification de l'intervention | Non ouverte |
| STAT-03 → STAT-04 | Intervention terrain engagée ou réalisée | Non ouverte |
| STAT-04 → STAT-06 | Compte rendu et clôture | Non ouverte |

Les statuts STAT-05, STAT-07 et STAT-08 restent exclus du périmètre INC-01.

**Alignement documentaire :** [`inc-01-technical-scope.md`](inc-01-technical-scope.md), [`inc-01-data-scope.md`](inc-01-data-scope.md)

---

## 4. Première transition candidate

La première transition candidate est :

**`STAT-01 → STAT-02`**

**Raison :**

- elle correspond au premier jalon métier du flux SAV ;
- elle est cohérente avec la vue `QualificationReadonly` déjà en place ;
- elle peut être cadrée sans dépendre de la planification, de l'intervention ou du compte rendu ;
- elle permet d'introduire progressivement une première action métier contrôlée.

---

## 5. Action métier candidate

**Action envisagée :**

`Qualifier la demande`

**Effet théorique futur :**

- transformer une demande en statut `STAT-01` vers `STAT-02` ;
- conserver les données fictives ;
- enregistrer une trace fonctionnelle locale minimale ;
- rafraîchir les vues de démonstration.

Cette action **n'est pas implémentée** dans ce cycle.

---

## 6. Règles métier minimales à respecter

Avant toute future implémentation, la transition STAT-01 → STAT-02 devra respecter les règles suivantes :

| Règle | Description |
|-------|-------------|
| Statut source obligatoire | La demande doit être en `STAT-01` |
| Statut cible unique | La cible autorisée est uniquement `STAT-02` |
| Demande limitée | L'action s'applique uniquement au seed fictif `SAV-DEMO-001` |
| Données fictives | Aucune donnée réelle ne doit être introduite |
| UI explicite | L'action doit être clairement présentée comme démonstration |
| Reset compatible | Le reset doit restaurer `SAV-DEMO-001` en `STAT-01` |
| Traçabilité locale | Une trace locale minimale peut être prévue |
| Pas de backend | Aucun appel serveur |
| Pas d'API | Aucun endpoint |
| Pas de DB | Aucun stockage serveur |

---

## 7. Garde-fous techniques

Toute future implémentation devra conserver :

- accès stockage uniquement via `src/data/` ;
- aucune manipulation directe de `localStorage` depuis l'UI ;
- aucune API externe ;
- aucun `fetch` ou `axios` ;
- aucune base de données ;
- aucun SQL / DDL ;
- aucune donnée réelle ;
- aucune dépendance CRM ;
- aucun multi-utilisateur ;
- aucun mécanisme d'authentification avancé.

---

## 8. Garde-fous UX

Toute future action devra être :

- visible ;
- explicite ;
- limitée à la démonstration ;
- réversible par le reset ;
- accompagnée d'un message de confirmation ;
- sans ambiguïté avec un outil opérationnel réel.

Elle ne devra pas :

- ressembler à une action de production ;
- laisser croire à un traitement réel ;
- masquer le caractère fictif des données ;
- déclencher plusieurs transitions à la fois.

---

## 9. Traçabilité locale candidate

Une future transition pourrait créer une trace locale fictive.

**Exemple de trace possible :**

| Champ | Exemple |
|-------|---------|
| Type | `qualification.confirmed` |
| Demande | `SAV-DEMO-001` |
| De | `STAT-01` |
| Vers | `STAT-02` |
| Message | `Qualification fictive confirmée` |
| Horodatage | Horodatage local de démonstration |

Cette trace devra rester locale, fictive et réinitialisable.

Elle ne doit pas être envoyée à un backend.

---

## 10. Tests attendus pour une future implémentation

Une future implémentation de STAT-01 → STAT-02 devra prévoir au minimum :

| Test | Objectif |
|------|----------|
| Action visible | Le bouton d'action est affiché uniquement dans le contexte autorisé |
| Transition contrôlée | STAT-01 passe à STAT-02 |
| Pas de transition invalide | L'action n'est pas disponible hors statut source |
| Reset | Le reset restaure STAT-01 |
| Traçabilité | La trace locale fictive est créée si retenue |
| Garde-fous UI | Le bandeau données fictives reste visible |
| Non-régression readonly | Les vues readonly restent cohérentes |

---

## 11. Décision

**Décision proposée :**

- [x] Première transition candidate retenue : STAT-01 → STAT-02
- [ ] Transition STAT-02 → STAT-03 retenue
- [ ] Transition STAT-03 → STAT-04 retenue
- [ ] Transition STAT-04 → STAT-06 retenue
- [ ] Aucune transition à ouvrir

### Décision

La première transition métier à cadrer puis implémenter ultérieurement est :

**`STAT-01 → STAT-02`**

Cette décision **n'autorise pas encore** l'implémentation.

Elle autorise uniquement l'ouverture d'un futur cycle applicatif dédié à une action contrôlée de qualification.

---

## 12. Conditions avant implémentation

Avant de coder la transition, le futur cycle devra préciser :

- nom exact du bouton ;
- emplacement UI exact ;
- comportement si la demande n'est plus en STAT-01 ;
- structure éventuelle de trace locale ;
- comportement du reset après transition ;
- tests minimaux ;
- message de confirmation ;
- absence d'appel réseau ;
- absence de donnée réelle.

---

## 13. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-qualification-action-skeleton`

**Objectif :**

- implémenter une première action contrôlée de qualification ;
- permettre uniquement STAT-01 → STAT-02 ;
- rester en données fictives ;
- rester en stockage local ;
- conserver le reset ;
- ne pas ouvrir les transitions suivantes.

**Alternative :**

`delivery/interv360-inc-01-qualification-action-spec`

**Objectif :**

- produire une spécification plus détaillée avant code ;
- figer la structure de trace locale ;
- figer le wording UI ;
- figer les tests attendus.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-qualification-action-spec` si le niveau de cadrage est jugé insuffisant, sinon ouvrir directement `delivery/interv360-inc-01-qualification-action-skeleton`.
