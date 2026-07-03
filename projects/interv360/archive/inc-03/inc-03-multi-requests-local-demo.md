# Interv360 — INC-03 Multi Requests Local Demo

**Projet** : Interv360  
**Incrément** : INC-03  
**Cycle** : Multi Requests Local Demo  
**Mode** : SFIA accéléré  
**Statut** : Réalisation groupée contrôlée  
**Branche** : `delivery/interv360-inc-03-multi-requests-local-demo`

---

## 1. Objectif

INC-03 étend le démonstrateur Interv360 à plusieurs demandes SAV fictives locales.

L'objectif est d'améliorer la crédibilité de la démonstration sans introduire de backend, d'API, de base de données serveur ou de données réelles.

---

## 2. Décision de périmètre

**Option retenue :**

**Multi-demandes locales fictives**

**Justification :**

- INC-01 a validé un flux nominal sur une demande unique ;
- INC-02 a amélioré la lisibilité de la démonstration ;
- INC-03 doit rendre la démo plus réaliste en affichant plusieurs demandes ;
- la valeur produit augmente sans ouvrir d'intégration technique ;
- le cadre local/fictif reste maîtrisé.

---

## 3. Périmètre autorisé

INC-03 peut introduire :

- plusieurs demandes fictives locales ;
- une liste de demandes plus crédible ;
- une sélection de demande ;
- un affichage du détail de la demande sélectionnée ;
- un statut courant par demande ;
- un journal local par demande si déjà cohérent avec l'existant ;
- un reset qui restaure toutes les demandes fictives ;
- les tests associés ;
- la documentation applicative.

---

## 4. Hors périmètre

INC-03 ne doit pas introduire :

- backend ;
- API ;
- base de données serveur ;
- SQL ;
- CRM ;
- données réelles ;
- authentification ;
- multi-utilisateur ;
- dashboard décisionnel ;
- nouveaux statuts hors nominal ;
- STAT-05 / STAT-07 / STAT-08 ;
- modification Controlled Delivery ;
- publication Notion.

---

## 5. Résultat attendu

Le démonstrateur doit permettre de :

- voir plusieurs demandes fictives ;
- sélectionner une demande ;
- consulter son détail ;
- exécuter le workflow nominal sur la demande sélectionnée ;
- conserver le reset démo ;
- conserver le journal local ;
- conserver le fonctionnement local fictif.

---

## 6. Validation attendue

- build OK ;
- tests OK ;
- workflow nominal toujours OK ;
- reset multi-demandes OK ;
- journal cohérent par demande ou explicitement maîtrisé ;
- aucune donnée réelle ;
- aucun backend/API/DB.

---

## 7. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 42 tests passés |
| Fichiers de tests | 13 fichiers |
| Multi-demandes | OK (3 demandes fictives) |
| Sélection demande | OK |
| Workflow nominal | OK |
| Reset multi-demandes | OK |
| Journal | OK (filtré par `requestId`) |
| Garde-fous | OK |

### Décision

INC-03 est **clôturé** : plusieurs demandes fictives locales sont démontrables sans modifier le cadre technique local et sans introduire de données réelles.

---

## 8. Changements réalisés

- Seed étendu à 3 demandes : `SAV-DEMO-001` (STAT-01), `SAV-DEMO-002` (STAT-02), `SAV-DEMO-003` (STAT-06) ;
- Sélection de demande dans `RequestsList` avec état visuel ;
- Workflow, détail, parcours readonly et journal appliqués à la demande sélectionnée ;
- `requestsRepository` : transitions autorisées pour toute demande du seed (journal par `requestId`) ;
- Reset multi-demandes + sélection par défaut `SAV-DEMO-001` ;
- Tests et README applicatif mis à jour.

---

## 9. Prochaine étape

**Option recommandée :**

`delivery/interv360-inc-03-pr-preparation`

**Objectif :**

- préparer une PR courte INC-03 ;
- ne pas lancer de REX sauf apprentissage réutilisable.

**Alternative :**

`delivery/interv360-inc-04-scope-and-delivery`

**Objectif :**

- ouvrir directement le prochain incrément en mode SFIA accéléré.
