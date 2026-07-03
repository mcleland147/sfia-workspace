# Famille de prompts — Architecture fonctionnelle détaillée

**Type** : Prompts Cursor / IA  
**Domaine** : Architecture fonctionnelle  
**Statut** : Draft  
**Usage** : Réutilisable  
**Méthode associée** : [`docs/practices/architecture/functional-architecture-method.md`](../../docs/practices/architecture/functional-architecture-method.md)  
**Standard associé** : [`docs/practices/architecture/functional-architecture-deliverables-standard.md`](../../docs/practices/architecture/functional-architecture-deliverables-standard.md)  
**Checklist associée** : [`docs/practices/architecture/functional-architecture-checklist.md`](../../docs/practices/architecture/functional-architecture-checklist.md)  
**Templates associés** : `docs/templates/architecture/`  
**Dossier** : `prompts/architecture/`

---

## 1. Objectif

Cette famille de prompts permet de **produire un cycle complet** d'architecture fonctionnelle détaillée en plusieurs **tâches Cursor atomiques**.

Les prompts sont conçus pour :

- ouvrir un cycle ;
- produire les livrables un par un ;
- contrôler la cohérence ;
- consolider la synthèse ;
- clôturer le cycle ;
- préparer une PR **sans** la merger automatiquement.

Ces prompts **ne doivent pas produire** :

- backlog ;
- user stories ;
- tests ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- BPMN ;
- SVG ;
- maquette UI finale ;
- composant front ;
- delivery ;
- publication Notion.

---

## 2. Règles générales d'utilisation

- **Une tâche Cursor** = un périmètre documentaire clair.
- **Un prompt** = un ou plusieurs fichiers ciblés.
- Privilégier les **commits atomiques**.
- **Relire les sources** avant de produire.
- **Vérifier la branche** avant toute modification.
- **Vérifier `git status`** avant et après.
- Ne **jamais** modifier `.env`.
- Ne **jamais** afficher de secret.
- Ne **jamais** créer ou merger automatiquement une PR sans demande explicite.
- Utiliser `gh` pour créer une PR **uniquement si demandé**.
- Si `gh` est indisponible, fournir un **lien GitHub compare**.
- Ne **pas** publier dans Notion.
- Ne **pas** appeler l'API Notion.

---

## 3. Variables à remplacer

Remplacer ces variables **avant** exécution dans Cursor :

| Variable | Description |
|----------|-------------|
| `[PROJECT_NAME]` | Nom du projet |
| `[PROJECT_CODE]` | Code projet (ex. PRJ-XXX) |
| `[WORKSPACE_PATH]` | Chemin local du workspace |
| `[BRANCH_NAME]` | Branche de travail Git |
| `[PROJECT_PHASE_PATH]` | Dossier du cycle (ex. `projects/[projet]/05-functional-architecture`) |
| `[PREVIOUS_PHASE_FILES]` | Fichiers clarification, BPMN, ADR ou cadrage à relire |
| `[COMMIT_MESSAGE]` | Message de commit attendu |
| `[REMOTE_NAME]` | Remote Git — `origin` par défaut |
| `[BASE_BRANCH]` | Branche cible PR — `main` par défaut |

---

## 4. Prompt 1 — Ouvrir le cycle d'architecture fonctionnelle

**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-scope.md`  
**Commit recommandé :** `docs: open [PROJECT_NAME] functional architecture cycle`

```
Objectif :
Créer le document de cadrage du cycle d'architecture fonctionnelle détaillée pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Contexte :
Le projet [PROJECT_CODE] dispose déjà de livrables de clarification, processus et/ou ADR.
Cette tâche ouvre le cycle architecture fonctionnelle détaillée.

Fichier cible :
[PROJECT_PHASE_PATH]/functional-architecture-scope.md

Important :
- Produire uniquement le cadrage du cycle.
- Ne pas produire encore domaines détaillés, objets détaillés ou statuts finalisés.
- Ne pas produire backlog, user stories, tests, code, API, SQL, modèle technique, BPMN, maquette UI, delivery.
- Ne pas publier dans Notion.
- Ne pas modifier .env ni afficher de secret.
- Ne pas créer de PR.

1. Vérifier l'état Git
Depuis [WORKSPACE_PATH] :
git branch --show-current
git status
git log --oneline -8

2. Relire les sources
[PREVIOUS_PHASE_FILES]
docs/practices/architecture/functional-architecture-method.md
docs/practices/architecture/functional-architecture-deliverables-standard.md
docs/templates/architecture/functional-architecture-scope-template.md

3. Créer le fichier
- Créer [PROJECT_PHASE_PATH] si nécessaire.
- Produire functional-architecture-scope.md en s'inspirant du template (structure, garde-fous, tableaux).
- Adapter le contenu au projet [PROJECT_NAME] — pas de copie d'un autre projet.

4. Contrôler
git status
Vérifier qu'aucun fichier hors périmètre n'a été modifié.

5. Commit et push
git add [PROJECT_PHASE_PATH]/functional-architecture-scope.md
git commit -m "docs: open [PROJECT_NAME] functional architecture cycle"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Branche courante
- Fichier créé
- Working tree clean
- Commit et push effectués
- Confirmation : pas de backlog, tests, code, Notion, PR
```

---

## 5. Prompt 2 — Définir les domaines fonctionnels

**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-domains.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] functional domains`

```
Objectif :
Décrire les domaines fonctionnels et leurs responsabilités pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/functional-domains.md

Important :
Interdits : API, modèle technique, composants, écrans UI, backlog, user stories, tests, code, BPMN, Notion, .env, secrets, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH]
git branch --show-current && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/functional-architecture-scope.md
[PREVIOUS_PHASE_FILES]
docs/practices/architecture/functional-architecture-deliverables-standard.md

3. Créer le fichier
Pour chaque domaine : responsabilité, fonctions, entrées/sorties, acteurs, limites, lien BPMN/ADR, règles structurantes.
Inclure vue d'ensemble et matrices domaines/ADR et domaines/BPMN si pertinent.

4. Commit et push
git add [PROJECT_PHASE_PATH]/functional-domains.md
git commit -m "docs: define [PROJECT_NAME] functional domains"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Domaines décrits avec responsabilités distinctes
- Aucune dérive technique ou delivery
```

---

## 6. Prompt 3 — Définir les objets métier

**Objectif :** créer `[PROJECT_PHASE_PATH]/business-objects.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] business objects`

```
Objectif :
Décrire les objets métier et leurs relations pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/business-objects.md

Important :
Les objets métier ne sont PAS : tables SQL, classes, DTO, JSON, schémas techniques.
Interdits : backlog, user stories, tests, code, API, SQL, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/functional-architecture-scope.md
[PROJECT_PHASE_PATH]/functional-domains.md
[PREVIOUS_PHASE_FILES]

3. Créer le fichier
- Vue d'ensemble des objets
- Fiche par objet : définition, responsabilités, statuts liés, relations
- Matrice objets/domaines, relations structurantes, points de vigilance

4. Commit et push
git commit -m "docs: define [PROJECT_NAME] business objects"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Objets métier fonctionnels documentés
- Aucun modèle technique produit
```

---

## 7. Prompt 4 — Définir les statuts et transitions

**Objectif :** créer `[PROJECT_PHASE_PATH]/status-and-transitions.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] statuses and transitions`

```
Objectif :
Formaliser statuts, transitions et règles fonctionnelles pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/status-and-transitions.md

Important :
Interdits : machine à états technique, code, BPMN supplémentaire, backlog, user stories, tests, API, SQL, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/functional-architecture-scope.md
[PROJECT_PHASE_PATH]/functional-domains.md
[PROJECT_PHASE_PATH]/business-objects.md
[PREVIOUS_PHASE_FILES] (ADR statuts si existantes)

3. Créer le fichier
- Familles de statuts (métier vs indicateurs)
- Catalogue, fiches par statut, transitions principales
- Conditions de clôture ou règles structurantes
- Transitions interdites, coexistences, matrices statuts/objets/domaines

4. Commit et push
git commit -m "docs: define [PROJECT_NAME] statuses and transitions"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Statuts et transitions fonctionnels formalisés
- Distinction statut métier / indicateur explicite
```

---

## 8. Prompt 5 — Décrire la vue fonctionnelle des intégrations

**Objectif :** créer `[PROJECT_PHASE_PATH]/integration-functional-view.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] functional integration view`

```
Objectif :
Décrire les intégrations externes du point de vue fonctionnel pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/integration-functional-view.md

Important :
Interdits : contrat API, endpoint, payload JSON, mapping SQL, architecture technique, solution d'intégration, code, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/functional-architecture-scope.md
[PROJECT_PHASE_PATH]/functional-domains.md
[PROJECT_PHASE_PATH]/business-objects.md
[PROJECT_PHASE_PATH]/status-and-transitions.md
[PREVIOUS_PHASE_FILES] (ADR intégration)

3. Créer le fichier
- Principes (source de vérité, cible, post-clôture ou non)
- Données fonctionnelles échangées
- Résultats possibles, anomalies, gravités, reprise manuelle
- Effets sur statuts et dashboard, matrices intégration/objets/ADR

4. Commit et push
git commit -m "docs: define [PROJECT_NAME] functional integration view"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Vue fonctionnelle d'intégration sans glissement technique
```

---

## 9. Prompt 6 — Décrire dashboard, alertes et pilotage

**Objectif :** créer `[PROJECT_PHASE_PATH]/dashboard-and-alerts.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] dashboard and alerts`

```
Objectif :
Formaliser dashboard, indicateurs et alertes pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/dashboard-and-alerts.md

Important :
Interdits : maquette UI finale, composant front, design system, backlog, user stories, tests, code, Notion, PR.
Garde-fou : dashboard non source de vérité.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/functional-architecture-scope.md
[PROJECT_PHASE_PATH]/functional-domains.md
[PROJECT_PHASE_PATH]/business-objects.md
[PROJECT_PHASE_PATH]/status-and-transitions.md
[PROJECT_PHASE_PATH]/integration-functional-view.md

3. Créer le fichier
- Indicateurs, alertes, priorisation, vues par profil
- Traitement des indicateurs internes vs statuts métier
- Matrices dashboard/objets/statuts/ADR

4. Commit et push
git commit -m "docs: define [PROJECT_NAME] dashboard and alerts"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Pilotage fonctionnel décrit sans UI finale
```

---

## 10. Prompt 7 — Consolider la synthèse d'architecture fonctionnelle

**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-summary.md`  
**Commit recommandé :** `docs: summarize [PROJECT_NAME] functional architecture`

```
Objectif :
Consolider l'architecture fonctionnelle détaillée de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/functional-architecture-summary.md

Important :
La synthèse CONSOLIDE — elle ne crée pas de nouvelle décision structurante, domaine, objet métier, ni ne modifie les ADR.
Interdits : backlog, delivery, tests, code, API, SQL, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire tous les livrables du cycle
[PROJECT_PHASE_PATH]/functional-architecture-scope.md
[PROJECT_PHASE_PATH]/functional-domains.md
[PROJECT_PHASE_PATH]/business-objects.md
[PROJECT_PHASE_PATH]/status-and-transitions.md
[PROJECT_PHASE_PATH]/integration-functional-view.md
[PROJECT_PHASE_PATH]/dashboard-and-alerts.md
docs/templates/architecture/functional-architecture-summary-template.md

3. Créer le fichier
Consolider vision, domaines, objets, statuts, règles, intégrations, dashboard, ADR, suites, vigilance.

4. Commit et push
git commit -m "docs: summarize [PROJECT_NAME] functional architecture"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Synthèse alignée avec les livrables existants
- Aucune nouvelle décision structurante
```

---

## 11. Prompt 8 — Clôturer le cycle d'architecture fonctionnelle

**Objectif :** créer `[PROJECT_PHASE_PATH]/functional-architecture-cycle-closure.md`  
**Commit recommandé :** `docs: close [PROJECT_NAME] functional architecture cycle`

```
Objectif :
Clôturer documentairement le cycle d'architecture fonctionnelle de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/functional-architecture-cycle-closure.md

Important :
La clôture ACTE le cycle — pas de nouveau contenu fonctionnel structurant, pas de backlog, pas de PR sauf demande explicite.
Ne pas déclencher automatiquement UX/UI, technique ou delivery.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status && git log --oneline -10

2. Relire tous les livrables
Tous les fichiers de [PROJECT_PHASE_PATH]/
docs/templates/architecture/functional-architecture-cycle-closure-template.md
docs/practices/architecture/functional-architecture-checklist.md

3. Créer le fichier
- Livrables produits, résultats consolidés, ADR intégrées
- Exclusions confirmées, points ouverts, risques, phase suivante
- Préparation revue/PR (sans créer la PR)

4. Commit et push
git commit -m "docs: close [PROJECT_NAME] functional architecture cycle"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Cycle clôturable documentairement
- Garde-fous confirmés
```

---

## 12. Prompt 9 — Contrôle qualité du cycle

**Objectif :** contrôler un cycle existant **sans modifier** les fichiers sauf demande explicite.  
**Commit par défaut :** aucun.

```
Objectif :
Contrôler la qualité et la complétude du cycle d'architecture fonctionnelle de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Important :
Ne pas modifier les fichiers sauf demande explicite.
Ne pas créer de commit par défaut.

1. Vérifier l'état Git
cd [WORKSPACE_PATH]
git branch --show-current && git status

2. Relire les 8 livrables attendus dans [PROJECT_PHASE_PATH]/
docs/practices/architecture/functional-architecture-checklist.md
docs/practices/architecture/functional-architecture-deliverables-standard.md

3. Contrôler
- Présence des 8 livrables
- Cohérence termes domaines/objets/statuts
- Source de vérité identifiée
- Dashboard non source de vérité
- Intégrations fonctionnelles (pas techniques)
- Alignement ADR
- Exclusions respectées
- État Git

4. Résultat attendu (synthèse d'écarts)
- Fichiers présents / manquants
- Incohérences
- Risques de dérive
- Recommandations
- État Git
```

---

## 13. Prompt 10 — Préparer la PR du cycle

**Objectif :** préparer une PR vers `[BASE_BRANCH]` **sans merge automatique**.  
**Titre PR recommandé :** `Add [PROJECT_NAME] functional architecture`

```
Objectif :
Préparer la PR GitHub du cycle architecture fonctionnelle de [PROJECT_NAME] vers [BASE_BRANCH].

Branche source :
[BRANCH_NAME]

Branche cible :
[BASE_BRANCH]

Important :
- Créer la PR via gh si disponible et authentifié.
- Ne PAS merger la PR.
- Si gh indisponible : lien compare manuel.
- Ne pas modifier les fichiers du cycle sauf correction mineure explicitement demandée.

1. Vérifier l'état Git
cd [WORKSPACE_PATH]
git branch --show-current
git status
git fetch [REMOTE_NAME]
git log --oneline [REMOTE_NAME]/[BASE_BRANCH]..HEAD
git diff --stat [REMOTE_NAME]/[BASE_BRANCH]...HEAD

2. Vérifier GitHub CLI
gh --version
gh auth status

3. Corps PR recommandé
## Summary
- Add functional architecture scope
- Define functional domains
- Define business objects
- Define statuses and transitions
- Define functional integration view
- Define dashboard and alerts
- Add functional architecture summary
- Close functional architecture cycle

## Confirmations
- No application code added
- No API, SQL or technical model added
- No BPMN or SVG modified
- No backlog, user stories or tests added
- No Notion publication
- No secrets or .env files modified

4. Créer la PR
gh pr list --head [BRANCH_NAME] --base [BASE_BRANCH]
Si aucune PR : gh pr create --base [BASE_BRANCH] --head [BRANCH_NAME] --title "Add [PROJECT_NAME] functional architecture" --body-file [fichier corps PR]
Si gh indisponible : https://github.com/[ORG]/[REPO]/compare/[BASE_BRANCH]...[BRANCH_NAME]?expand=1

5. Ne pas exécuter gh pr merge

6. Résultat attendu
- URL PR ou lien compare
- Aucun merge effectué
- État Git final
```

---

## 14. Format recommandé des prompts Cursor

Structure standard pour composer ou adapter un prompt :

```
Objectif :
[Décrire l'objectif précis.]

Branche courante attendue :
[BRANCH_NAME]

Contexte :
[Décrire le contexte et les commits existants si utile.]

Fichier cible :
[Chemin du fichier à créer ou modifier.]

Important :
[Interdits et limites.]

1. Vérifier l'état Git
[Commandes]

2. Relire les sources
[Liste des fichiers]

3. Créer ou modifier le fichier
[Contenu attendu]

4. Contrôler
[Commandes et fichiers autorisés]

5. Commit et push
[Commandes]

6. Résultat attendu
[Liste des confirmations]
```

---

## 15. Conclusion

Cette famille de prompts permet de dérouler un cycle d'architecture fonctionnelle détaillée de manière :

- **atomique** — un livrable par tâche ;
- **traçable** — commits et branches dédiés ;
- **contrôlée** — checklist et prompt QA ;
- **réutilisable** — variables projet génériques ;
- **alignée** avec la méthode SFIA ;
- **sans glissement** vers technique, delivery, backlog ou UX/UI finale.

**Ordre recommandé :** Prompts 1 → 8 (production), puis 9 (contrôle), puis 10 (PR sur demande).

---

*Famille de prompts SFIA — Architecture fonctionnelle détaillée — Draft — Réutilisable.*
