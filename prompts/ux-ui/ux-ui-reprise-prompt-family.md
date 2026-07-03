# Famille de prompts — Reprise UX/UI documentaire

**Type** : Prompts Cursor / IA  
**Domaine** : UX/UI — reprise documentaire  
**Statut** : Draft  
**Usage** : Réutilisable  
**Méthode associée** : [`docs/practices/ux-ui/ux-ui-reprise-method.md`](../../docs/practices/ux-ui/ux-ui-reprise-method.md)  
**Standard associé** : [`docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`](../../docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md)  
**Checklist associée** : [`docs/practices/ux-ui/ux-ui-reprise-checklist.md`](../../docs/practices/ux-ui/ux-ui-reprise-checklist.md)  
**Templates associés** : `docs/templates/ux-ui/`  
**Dossier** : `prompts/ux-ui/`

> **Référence d'application :** le cycle Interv360 `projects/interv360/06-ux-ui/` illustre l'application de cette famille de prompts.

---

## 1. Objectif

Cette famille de prompts permet de **produire un cycle complet** de reprise UX/UI documentaire en plusieurs **tâches Cursor atomiques**.

Les prompts sont conçus pour :

- ouvrir un cycle de reprise UX/UI ;
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
- Ne **jamais** modifier les captures Figma / visuelles existantes.
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
| `[PROJECT_PHASE_PATH]` | Dossier du cycle (ex. `projects/[projet]/06-ux-ui`) |
| `[UX_SOURCES]` | Brief, Figma, atelier, captures à relire |
| `[FUNCTIONAL_SOURCES]` | Architecture fonctionnelle, ADR, objets, statuts |
| `[COMMIT_MESSAGE]` | Message de commit attendu |
| `[REMOTE_NAME]` | Remote Git — `origin` par défaut |
| `[BASE_BRANCH]` | Branche cible PR — `main` par défaut |

---

## 4. Prompt 1 — Ouvrir le cycle reprise UX/UI

**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md` (après analyse si séparée)  
**Commit recommandé :** `docs: open [PROJECT_NAME] UX UI reprise cycle`

```
Objectif :
Ouvrir le cycle de reprise UX/UI documentaire pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Contexte :
Le projet [PROJECT_CODE] dispose déjà de brief UX/UI, référence visuelle (Figma V1 ou équivalent), décisions atelier et architecture fonctionnelle mergée.
Cette tâche ouvre le cycle reprise UX/UI post-architecture fonctionnelle.

Fichier cible :
[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md

Important :
- Produire uniquement le cadrage du cycle (ou analysis + scope si demandé en une tâche).
- Ne pas produire encore parcours détaillés, inventaire complet ou specs écran.
- Ne pas produire backlog, user stories, tests, code, API, SQL, maquette, delivery.
- Ne pas modifier les captures Figma existantes.
- Ne pas publier dans Notion.
- Ne pas modifier .env ni afficher de secret.
- Ne pas créer de PR.

1. Vérifier l'état Git
Depuis [WORKSPACE_PATH] :
git branch --show-current
git status
git log --oneline -8

2. Relire les sources
[UX_SOURCES]
[FUNCTIONAL_SOURCES]
docs/practices/ux-ui/ux-ui-reprise-method.md
docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md
docs/templates/ux-ui/ux-ui-reprise-scope-template.md

3. Créer le fichier
- Créer [PROJECT_PHASE_PATH] si nécessaire.
- Produire ux-ui-reprise-scope.md en s'inspirant du template.
- Adapter au projet [PROJECT_NAME] — reprise non depuis zéro, Figma V1 référence non définitive.

4. Contrôler
git status
Vérifier qu'aucun fichier hors périmètre n'a été modifié.

5. Commit et push
git add [PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md
git commit -m "docs: open [PROJECT_NAME] UX UI reprise cycle"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Branche courante
- Fichier créé
- Working tree clean
- Commit et push effectués
- Confirmation : pas de backlog, tests, code, maquette, Notion, PR
```

---

## 5. Prompt 2 — Produire état des lieux

**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-reprise-analysis.md`  
**Commit recommandé :** `docs: analyze [PROJECT_NAME] UX UI reprise`

```
Objectif :
Produire l'état des lieux UX/UI pour préparer la reprise de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/ux-ui-reprise-analysis.md

Important :
- Inventorier brief, Figma V1, atelier, architecture fonctionnelle — ne pas repartir de zéro.
- Identifier décisions acquises, écarts pressentis, points ouverts non bloquants.
- Interdits : parcours détaillés, specs écran, maquette, backlog, code, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git branch --show-current && git status

2. Relire les sources
[UX_SOURCES]
[FUNCTIONAL_SOURCES]
docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md

3. Créer le fichier
Inventaire fichiers UX existants, synthèse brief, décisions acquises, alignement fonctionnel, écarts, proposition de cycle.

4. Commit et push
git add [PROJECT_PHASE_PATH]/ux-ui-reprise-analysis.md
git commit -m "docs: analyze [PROJECT_NAME] UX UI reprise"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- État des lieux complet
- Aucune maquette ni delivery produit
```

---

## 6. Prompt 3 — Produire cadrage

**Objectif :** créer ou compléter `[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md`  
**Commit recommandé :** `docs: scope [PROJECT_NAME] UX UI reprise`

```
Objectif :
Cadrer le cycle de reprise UX/UI pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md

Important :
- S'appuyer sur ux-ui-reprise-analysis.md si produit.
- Décisions UX acquises = non redébattables.
- Figma V1 = référence non définitive.
- Interdits : backlog, user stories, tests, code, maquette, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/ux-ui-reprise-analysis.md
[UX_SOURCES]
[FUNCTIONAL_SOURCES]
docs/templates/ux-ui/ux-ui-reprise-scope-template.md

3. Créer ou compléter le fichier
Périmètre, sources, livrables prévus, exclusions, garde-fous, critères de sortie.

4. Commit et push
git commit -m "docs: scope [PROJECT_NAME] UX UI reprise"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Cadrage lisible avec 8 livrables prévus
```

---

## 7. Prompt 4 — Produire parcours utilisateurs

**Objectif :** créer `[PROJECT_PHASE_PATH]/user-journeys.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] UX UI user journeys`

```
Objectif :
Consolider les parcours utilisateurs pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/user-journeys.md

Important :
- Aligner parcours sur objets, statuts, écrans et décisions atelier.
- Interdits : user stories, wireframes, maquettes, backlog, tests, code, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md
[UX_SOURCES]
[FUNCTIONAL_SOURCES]

3. Créer le fichier
Fiche par parcours ; matrices parcours × écrans × statuts.

4. Commit et push
git commit -m "docs: define [PROJECT_NAME] UX UI user journeys"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Parcours traçables de bout en bout
```

---

## 8. Prompt 5 — Produire inventaire écrans

**Objectif :** créer `[PROJECT_PHASE_PATH]/screen-inventory.md`  
**Commit recommandé :** `docs: inventory [PROJECT_NAME] UX UI screens`

```
Objectif :
Inventorier les écrans et vues du périmètre reprise pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/screen-inventory.md

Important :
- Documenter écarts Figma V1 / architecture sans refonte maquette.
- Ne pas modifier les captures existantes.
- Interdits : specs comportementales détaillées, composants, code, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/user-journeys.md
[PROJECT_PHASE_PATH]/ux-ui-reprise-scope.md
[UX_SOURCES] (brief écrans, captures Figma)

3. Créer le fichier
Catalogue écrans, fiches, matrices, écarts visuels / fonctionnels.

4. Commit et push
git commit -m "docs: inventory [PROJECT_NAME] UX UI screens"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Inventaire complet avec écarts documentés
```

---

## 9. Prompt 6 — Produire specs écran

**Objectif :** créer `[PROJECT_PHASE_PATH]/screen-functional-specs.md`  
**Commit recommandé :** `docs: specify [PROJECT_NAME] UX UI screens`

```
Objectif :
Spécifier fonctionnellement chaque écran pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/screen-functional-specs.md

Important :
- Comportements, états, actions, garde-fous — pas de code ni maquette.
- Libellés statuts alignés architecture fonctionnelle.
- Interdits : API, SQL, composants, backlog, tests, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/screen-inventory.md
[PROJECT_PHASE_PATH]/user-journeys.md
[FUNCTIONAL_SOURCES]

3. Créer le fichier
Fiche par écran : objectif, acteurs, données, états, actions, transitions.

4. Commit et push
git commit -m "docs: specify [PROJECT_NAME] UX UI screens"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Specs exploitables pour maquette V2 future
```

---

## 10. Prompt 7 — Produire dashboard views

**Objectif :** créer `[PROJECT_PHASE_PATH]/dashboard-ux-view.md`  
**Commit recommandé :** `docs: define [PROJECT_NAME] UX UI dashboard views`

```
Objectif :
Consolider les vues dashboard par profil pour [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/dashboard-ux-view.md

Important :
- Dashboard non source de vérité.
- Interdits : maquette UI, composants, design system, backlog, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire les sources
[PROJECT_PHASE_PATH]/screen-functional-specs.md
[FUNCTIONAL_SOURCES] (dashboard-and-alerts.md)
[UX_SOURCES] (KPI dashboard brief)

3. Créer le fichier
Vues par profil, KPI, alertes, priorisation, matrices.

4. Commit et push
git commit -m "docs: define [PROJECT_NAME] UX UI dashboard views"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Dashboard clarifié sans UI finale
```

---

## 11. Prompt 8 — Produire synthèse

**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-summary.md`  
**Commit recommandé :** `docs: summarize [PROJECT_NAME] UX UI reprise`

```
Objectif :
Consolider la reprise UX/UI de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/ux-ui-summary.md

Important :
La synthèse CONSOLIDE — pas de nouvelle décision structurante.
Interdits : backlog, delivery, tests, code, maquette, Notion, PR.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status

2. Relire tous les livrables du cycle
Tous les fichiers de [PROJECT_PHASE_PATH]/ sauf closure
docs/templates/ux-ui/ux-ui-reprise-summary-template.md

3. Créer le fichier
Contexte reprise, livrables, décisions transposées, écarts, alignement ADR, suites.

4. Commit et push
git commit -m "docs: summarize [PROJECT_NAME] UX UI reprise"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Synthèse alignée, aucune nouvelle décision structurante
```

---

## 12. Prompt 9 — Produire clôture

**Objectif :** créer `[PROJECT_PHASE_PATH]/ux-ui-cycle-closure.md`  
**Commit recommandé :** `docs: close [PROJECT_NAME] UX UI reprise cycle`

```
Objectif :
Clôturer documentairement le cycle reprise UX/UI de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Fichier cible :
[PROJECT_PHASE_PATH]/ux-ui-cycle-closure.md

Important :
La clôture ACTE le cycle — pas de nouveau contenu métier, pas de merge automatique.
Ne pas déclencher maquette V2, backlog ou delivery.

1. Vérifier l'état Git
cd [WORKSPACE_PATH] && git status && git log --oneline -10

2. Relire tous les livrables
Tous les fichiers de [PROJECT_PHASE_PATH]/
docs/templates/ux-ui/ux-ui-cycle-closure-template.md
docs/practices/ux-ui/ux-ui-reprise-checklist.md

3. Créer le fichier
Livrables, résultats, exclusions confirmées, points ouverts, préparation PR.

4. Commit et push
git commit -m "docs: close [PROJECT_NAME] UX UI reprise cycle"
git push [REMOTE_NAME] [BRANCH_NAME]

6. Résultat attendu
- Cycle clôturable documentairement
```

---

## 13. Prompt 10 — Contrôle qualité global

**Objectif :** contrôler un cycle existant **sans modifier** les fichiers sauf demande explicite.  
**Commit par défaut :** aucun.

```
Objectif :
Contrôler la qualité et la complétude du cycle reprise UX/UI de [PROJECT_NAME].

Branche courante attendue :
[BRANCH_NAME]

Important :
Ne pas modifier les fichiers sauf demande explicite.
Ne pas créer de commit par défaut.

1. Vérifier l'état Git
cd [WORKSPACE_PATH]
git branch --show-current && git status

2. Relire les 8 livrables attendus dans [PROJECT_PHASE_PATH]/
docs/practices/ux-ui/ux-ui-reprise-checklist.md
docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md

3. Contrôler
- Présence des 8 livrables
- Reprise « non depuis zéro » explicite
- Parcours / écrans / statuts alignés
- Écarts maquette / architecture documentés
- Dashboard non source de vérité
- Exclusions respectées
- Captures non modifiées
- État Git

4. Résultat attendu (synthèse d'écarts)
- Fichiers présents / manquants
- Incohérences
- Risques de dérive
- Recommandations
- État Git
```

---

## 14. Prompt 11 — Préparation PR

**Objectif :** préparer une PR vers `[BASE_BRANCH]` **sans merge automatique**.  
**Titre PR recommandé :** `Add [PROJECT_NAME] UX UI reprise documentation`

```
Objectif :
Préparer la PR GitHub du cycle reprise UX/UI de [PROJECT_NAME] vers [BASE_BRANCH].

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
- Add UX UI reprise analysis
- Add UX UI reprise scope
- Define user journeys
- Inventory screens
- Specify screen functional specs
- Define dashboard UX views
- Add UX UI summary
- Close UX UI reprise cycle

## Confirmations
- No application code added
- No API, SQL or technical model added
- No BPMN or SVG modified
- No backlog, user stories or tests added
- No final UI mockup or front components added
- No existing Figma captures modified
- No Notion publication
- No secrets or .env files modified

4. Créer la PR
gh pr list --head [BRANCH_NAME] --base [BASE_BRANCH]
Si aucune PR : gh pr create --base [BASE_BRANCH] --head [BRANCH_NAME] --title "Add [PROJECT_NAME] UX UI reprise documentation" --body-file [fichier corps PR]
Si gh indisponible : https://github.com/[ORG]/[REPO]/compare/[BASE_BRANCH]...[BRANCH_NAME]?expand=1

5. Ne pas exécuter gh pr merge

6. Résultat attendu
- URL PR ou lien compare
- Aucun merge effectué
- État Git final
```

---

## 15. Format recommandé des prompts Cursor

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

## 16. Conclusion

Cette famille de prompts permet de dérouler un cycle de reprise UX/UI documentaire de manière :

- **atomique** — un livrable par tâche ;
- **traçable** — commits et branches dédiés ;
- **contrôlée** — checklist et prompt QA ;
- **réutilisable** — variables projet génériques ;
- **alignée** avec la méthode SFIA ;
- **sans glissement** vers maquette finale, technique, delivery ou backlog.

**Ordre recommandé :** Prompts 2 → 3 (analysis puis scope) ou 1 (scope direct), puis 4 → 9 (production), puis 10 (contrôle), puis 11 (PR sur demande).

---

*Famille de prompts SFIA — Reprise UX/UI documentaire — Draft — Réutilisable.*
